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

// 7. Los dos estudian a la vez → se fusiona, no se pierde nada de ninguno
const L = (score, date = "2026-11-20T10:00:00Z") => ({ done: true, score, total: 3, date });
pc.setItem(P, JSON.stringify({ ...JSON.parse(pc.getItem(P)), pc: L(2), comun: L(1, "2026-11-20T09:00:00Z") }));
device(portatil);
portatil.setItem(P, JSON.stringify({ ...JSON.parse(portatil.getItem(P)), portatil: L(3), comun: L(3, "2026-11-20T08:00:00Z") }));
r = await C.syncOnce(U, { pull: false });
expect(r.kind === "pushed", `7a: ${r.kind}`);
device(pc);
r = await C.syncOnce(U, { pull: false });
let got = JSON.parse(pc.getItem(P));
expect(r.kind === "pulled", `7b: esperaba pulled (fusión), ${r.kind}`);
expect(got.pc && got.portatil && got.mol && got.gases, "7b: el PC debe tener las lecciones de los dos");
expect(got.comun.score === 3, "7b: en la lección repetida gana la mejor nota");
got = JSON.parse(table.get(U).data[P]);
expect(got.pc && got.portatil, "7b: la nube debe tener las lecciones de los dos");
// 7c. El portátil (sin cambios desde su subida) baja la fusión
device(portatil);
r = await C.syncOnce(U);
expect(r.kind === "pulled" && JSON.parse(portatil.getItem(P)).pc, `7c: ${r.kind}`);
// 7d. Tarjetas: en la misma tarjeta gana la caja más baja (se repasa de más, nunca de menos)
const K = "quimica-app:certificaciones:v1";
portatil.setItem(K, JSON.stringify({ cards: { a: { box: 4, due: "2026-12-01" }, soloP: { box: 2, due: "2026-11-22" } }, cases: { x: 0.5 } }));
r = await C.syncOnce(U, { pull: false });
device(pc);
pc.setItem(K, JSON.stringify({ cards: { a: { box: 1, due: "2026-11-20" } }, cases: { x: 0.9 } }));
r = await C.syncOnce(U, { pull: false });
got = JSON.parse(pc.getItem(K));
expect(got.cards.a.box === 1 && got.cards.soloP && got.cases.x === 0.9, `7d: fusión de certificaciones ${JSON.stringify(got)}`);

// 8. Otro navegador con progreso propio y nube con datos → se fusiona (antes obligaba a elegir)
const tercero = new Store();
device(tercero);
tercero.setItem(P, JSON.stringify({ tercero: L(2) }));
r = await C.syncOnce(U);
got = JSON.parse(tercero.getItem(P));
expect(r.kind === "pulled" && got.tercero && got.pc && got.portatil, `8: ${r.kind}`);
expect(JSON.parse(table.get(U).data[P]).tercero, "8: lo del tercero también sube");

// 9. Otro usuario no ve los datos del primero (cada uno su fila)
const otro = new Store();
device(otro);
r = await C.syncOnce("user-2");
expect(r.kind === "pushed" && Object.keys(table.get("user-2").data).length === 0, `9: ${r.kind}`);

// 10. Un navegador nuevo que solo abrió el ERP no pisa la partida de la nube
const ERP = "quimica-app:erp:v1";
device(pc);
pc.setItem(ERP, JSON.stringify({ version: 1, orden: "hecha" }));
await C.syncOnce(U, { pull: false });
const nuevo = new Store();
device(nuevo);
nuevo.setItem(ERP, JSON.stringify({ version: 1, orden: "inicial" }));
r = await C.syncOnce(U);
expect(JSON.parse(nuevo.getItem(ERP)).orden === "hecha" && JSON.parse(table.get(U).data[ERP]).orden === "hecha", "10: manda la partida de la nube");
// 10b. Después, si la partida cambia en los dos, se queda la del navegador en uso
nuevo.setItem(ERP, JSON.stringify({ version: 1, orden: "nuevo" }));
device(pc);
pc.setItem(ERP, JSON.stringify({ version: 1, orden: "pc" }));
await C.syncOnce(U, { pull: false });
device(nuevo);
await C.syncOnce(U, { pull: false });
expect(JSON.parse(nuevo.getItem(ERP)).orden === "nuevo" && JSON.parse(table.get(U).data[ERP]).orden === "nuevo", "10b: gana el navegador en uso");

// 11. Cambio de cuenta en el mismo navegador: el progreso de la cuenta anterior no se mezcla con la otra
table.set("user-3", { user_id: "user-3", data: { [P]: JSON.stringify({ deB: L(3) }) }, rev: 1, updated_at: "2026-11-20T00:00:00Z" });
device(pc);
r = await C.syncOnce("user-3");
got = JSON.parse(pc.getItem(P));
expect(r.kind === "pulled" && got.deB && !got.pc, `11: el navegador debe quedar con lo de la otra cuenta, ${r.kind}`);
expect(!JSON.parse(table.get("user-3").data[P]).pc, "11: a la otra cuenta no se le sube lo del primero");
expect(JSON.parse(table.get(U).data[P]).pc, "11: la nube del primero sigue intacta");

// 12. Algo guardado mientras se consulta la nube no se pisa
const lento = new Store();
device(lento);
lento.setItem(P, JSON.stringify({ antes: L(1) }));
const realClient = fakeClient();
let injected = false;
C.__setClientForTests({
  from() {
    const api = realClient.from();
    const maybeSingle = api.maybeSingle;
    api.maybeSingle = async () => {
      const res = await maybeSingle();
      if (!injected) {
        injected = true;
        lento.setItem(P, JSON.stringify({ antes: L(1), durante: L(3) }));
      }
      return res;
    };
    return api;
  },
});
r = await C.syncOnce(U);
got = JSON.parse(lento.getItem(P));
expect(got.durante && got.antes && got.pc, `12: debe conservar lo guardado durante la consulta ${Object.keys(got)}`);
C.__setClientForTests(fakeClient());

console.log(errors ? `${errors} errores` : "Sincronización con la nube: 12 escenarios OK");
process.exit(errors ? 1 : 0);
