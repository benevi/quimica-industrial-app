// Comprueba la lógica de sincronización con la nube con un Supabase y un navegador falsos. Uso: npm run check:cloud
import { createJiti } from "jiti";
import { fileURLToPath } from "node:url";
const root = fileURLToPath(new URL("../src", import.meta.url));
const jiti = createJiti(import.meta.url, { alias: { "@": root } });

// --- navegador falso: un localStorage por "dispositivo"
class Store {
  m = new Map();
  get length() { return this.m.size; }
  key(i) { return [...this.m.keys()][i] ?? null; }
  getItem(k) { return this.m.has(k) ? this.m.get(k) : null; }
  setItem(k, v) { this.m.set(k, String(v)); }
  removeItem(k) { this.m.delete(k); }
}
globalThis.window = { localStorage: new Store() };
const device = (s) => (globalThis.window.localStorage = s);

// --- Supabase falso: tabla progreso en memoria con RLS simplificado
const table = new Map();
function fakeClient() {
  return {
    from() {
      const q = { filters: {}, op: null, payload: null };
      const api = {
        select() { if (!q.op) q.op = "select"; else q.returning = true; return api; },
        insert(row) { q.op = "insert"; q.payload = row; return run(); },
        update(row) { q.op = "update"; q.payload = row; return api; },
        eq(k, v) { q.filters[k] = v; return api; },
        maybeSingle() { return run(); },
        then(res, rej) { return run().then(res, rej); },
      };
      function run() {
        const uid = q.filters.user_id ?? q.payload?.user_id;
        const row = table.get(uid);
        if (q.op === "select") return Promise.resolve({ data: row ? structuredClone(row) : null, error: null });
        if (q.op === "insert") {
          if (row) return Promise.resolve({ error: { code: "23505", message: "duplicate" } });
          table.set(uid, structuredClone(q.payload));
          return Promise.resolve({ error: null });
        }
        if (q.op === "update") {
          if (!row || ("rev" in q.filters && row.rev !== q.filters.rev)) return Promise.resolve({ data: [], error: null });
          Object.assign(row, structuredClone(q.payload));
          return Promise.resolve({ data: [{ rev: row.rev }], error: null });
        }
      }
      return api;
    },
  };
}

const C = await jiti.import(root + "/lib/cloud.ts");
C.__setClientForTests(fakeClient());
let errors = 0;
const expect = (cond, msg) => { if (!cond) { console.error("ERROR", msg); errors++; } };
const U = "user-1";
const P = "quimica-app:progreso:v1";

const pc = new Store(), portatil = new Store();

// 1. Primer inicio de sesión en el PC con progreso local → se sube (migración)
device(pc);
pc.setItem(P, JSON.stringify({ mol: { done: true } }));
pc.setItem("otra-cosa", "no se sube");
let r = await C.syncOnce(U);
expect(r.kind === "pushed", `1: esperaba pushed, ${r.kind}`);
expect(table.get(U).data[P] && !("otra-cosa" in table.get(U).data), "1: la nube debe tener solo claves de la app");
expect(table.get(U).rev === 1, "1: rev 1");

// 2. Sin cambios → nada
r = await C.syncOnce(U);
expect(r.kind === "same", `2: esperaba same, ${r.kind}`);

// 3. Cambio local → se sube con rev 2
pc.setItem(P, JSON.stringify({ mol: { done: true }, gases: { done: true } }));
r = await C.syncOnce(U, { pull: false });
expect(r.kind === "pushed" && table.get(U).rev === 2, `3: esperaba pushed rev 2, ${r.kind} ${table.get(U).rev}`);

// 4. Portátil vacío inicia sesión → baja lo de la nube
device(portatil);
r = await C.syncOnce(U);
expect(r.kind === "pulled", `4: esperaba pulled, ${r.kind}`);
expect(portatil.getItem(P) === pc.getItem(P), "4: el portátil debe tener el progreso del PC");

// 5. El portátil estudia y sube; el PC (sin cambios) al volver baja lo nuevo
portatil.setItem("quimica-app:certificaciones:v1", JSON.stringify({ cards: { a: 1 } }));
r = await C.syncOnce(U, { pull: false });
expect(r.kind === "pushed" && table.get(U).rev === 3, `5a: ${r.kind}`);
device(pc);
r = await C.syncOnce(U);
expect(r.kind === "pulled" && pc.getItem("quimica-app:certificaciones:v1"), `5b: esperaba pulled, ${r.kind}`);

// 6. Subida periódica sin cambios locales no consulta ni pisa la nube
r = await C.syncOnce(U, { pull: false });
expect(r.kind === "same", `6: ${r.kind}`);

// 7. Los dos cambian a la vez → conflicto, y nada se pisa
pc.setItem(P, JSON.stringify({ pc: true }));
device(portatil);
portatil.setItem(P, JSON.stringify({ portatil: true }));
r = await C.syncOnce(U, { pull: false });
expect(r.kind === "pushed", `7a: ${r.kind}`);
device(pc);
r = await C.syncOnce(U, { pull: false });
expect(r.kind === "conflict", `7b: esperaba conflict, ${r.kind}`);
expect(JSON.parse(table.get(U).data[P]).portatil, "7b: la nube no debe pisarse");
// 7c. Elige lo de este navegador
await C.resolveConflict(U, "local", r);
expect(JSON.parse(table.get(U).data[P]).pc, "7c: la nube debe tener lo del PC");
// 7d. El portátil (sin cambios desde su subida) baja lo del PC
device(portatil);
r = await C.syncOnce(U);
expect(r.kind === "pulled" && JSON.parse(portatil.getItem(P)).pc, `7d: ${r.kind}`);

// 8. Otro navegador con progreso propio y nube con datos → conflicto (no se pierde nada sin preguntar)
const tercero = new Store();
device(tercero);
tercero.setItem(P, JSON.stringify({ tercero: true }));
r = await C.syncOnce(U);
expect(r.kind === "conflict", `8: ${r.kind}`);
await C.resolveConflict(U, "remote", r);
expect(JSON.parse(tercero.getItem(P)).pc, "8: elegir nube debe restaurar la nube");

// 9. Otro usuario no ve los datos del primero (cada uno su fila)
const otro = new Store();
device(otro);
r = await C.syncOnce("user-2");
expect(r.kind === "pushed" && Object.keys(table.get("user-2").data).length === 0, `9: ${r.kind}`);

console.log(errors ? `${errors} errores` : "Sincronización con la nube: 9 escenarios OK");
process.exit(errors ? 1 : 0);
