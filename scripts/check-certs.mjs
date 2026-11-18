// Comprueba bancos, supuestos, sorteo de simulacros y el examen práctico de SAP. Uso: npm run check:certs
import { createJiti } from "jiti";
import { fileURLToPath } from "node:url";
const root = fileURLToPath(new URL("../src", import.meta.url));
const jiti = createJiti(import.meta.url, { alias: { "@": root } });
const pool = await jiti.import(root + "/certs/pool.ts");
const draw = await jiti.import(root + "/certs/draw.ts");
const prep = await jiti.import(root + "/certs/prep.ts");
const { cases } = await jiti.import(root + "/certs/casos.ts");
const { quie0108 } = await jiti.import(root + "/certs/bancos/quie0108.ts");
const { gmp } = await jiti.import(root + "/certs/bancos/gmp.ts");
const { sap } = await jiti.import(root + "/certs/bancos/sap.ts");
const E = await jiti.import(root + "/sap/engine.ts");
const X = await jiti.import(root + "/sap/exam.ts");
let errors = 0;
const err = (m) => { console.error("ERROR", m); errors++; };
// 1) preguntas bien formadas y respuesta numérica en la explicación
const fmtEs = (n) => [String(n).replace(".", ","), n.toLocaleString("es-ES"), n.toLocaleString("es-ES", {useGrouping: true})];
function checkQ(q, where) {
  if (q.kind === "choice") {
    if (!(q.answer >= 0 && q.answer < q.options.length)) err(`${where}: índice fuera de rango`);
    if (new Set(q.options).size !== q.options.length) err(`${where}: opciones repetidas`);
  } else {
    const forms = fmtEs(q.answer);
    if (!forms.some((f) => q.explain.includes(f))) err(`${where}: ${q.answer} no aparece en "${q.explain}"`);
  }
}
let nBank = 0;
for (const [k, qs] of Object.entries({ ...quie0108, ...gmp, ...sap })) qs.forEach((q, i) => { nBank++; checkQ(q, `bank:${k}:${i}`); });
let nCase = 0;
for (const c of cases) c.questions.forEach((q, i) => { nCase++; checkQ(q, `case:${c.id}:${i}`); });
// unidades de banco/casos existen en prep
const unitKeys = new Set(prep.preps.flatMap((p) => p.units.map((u) => u.key)));
for (const k of Object.keys({ ...quie0108, ...gmp, ...sap })) if (!unitKeys.has(k)) err(`banco sin unidad: ${k}`);
for (const c of cases) if (!unitKeys.has(c.unit)) err(`caso sin unidad: ${c.id}`);
// lecciones del temario existen
for (const p of prep.preps) for (const u of p.units) for (const t of u.topics) for (const s of t.lessons) if (!pool.unitLessons(u.key).some((l) => l.slug === s)) err(`lección inexistente ${s}`);
// 2) sorteo de simulacros
for (const { mock } of prep.allMocks) {
  const pools = Object.fromEntries(mock.units.map((u) => [u, pool.unitPool(u)]));
  for (let t = 0; t < 50; t++) {
    const d = draw.drawMock(mock, pools);
    if (d.length !== mock.questions) err(`${mock.id}: ${d.length} preguntas`);
    if (new Set(d.map((x) => x.id)).size !== d.length) err(`${mock.id}: repetidas`);
    for (const x of d) if (!pool.questionById(x.id)) err(`sin resolver ${x.id}`);
  }
  const avail = mock.units.reduce((a, u) => a + pools[u].length, 0);
  const cs = cases.filter((c) => mock.units.includes(c.unit)).length;
  console.log(`${mock.id}: ${mock.questions} de ${avail} disponibles, ${cs} supuestos`);
  if (mock.cases && !cs) err(`${mock.id} sin supuestos`);
}
if (prep.allMocks.find((m) => m.mock.id === "sap-teoria")) {
  const m = prep.getMock("sap-teoria").mock;
  const pools = Object.fromEntries(m.units.map((u) => [u, pool.unitPool(u)]));
  const d = draw.drawMock(m, pools);
  const by = {}; for (const x of d) by[x.unit] = (by[x.unit] ?? 0) + 1; console.log("reparto SAP", by);
}
// 3) examen SAP: flujo perfecto para cada variante → 100; decisión equivocada → 85
function play(v, wrongUD = false) {
  let s = X.examState(v);
  const step = (r) => { if (r.msg.type === "E") throw new Error(r.msg.text); s = r.state; };
  step(E.createOrder(s, "FG-5001", v.qty));
  const o = s.orders[0].id;
  step(E.releaseOrder(s, o));
  const req = Object.fromEntries(s.orders[0].components.map((c) => [c.material, c.required]));
  let rm = req["RM-1001"]; const a = Math.min(rm, 300); step(E.goodsIssue(s, o, "B1001A", a)); if (rm - a > 0) step(E.goodsIssue(s, o, "B1001D", rm - a));
  step(E.goodsIssue(s, o, "T2001A", req["RM-2001"]));
  step(E.goodsIssue(s, o, "N3001B", req["RM-3001"]));
  for (const ph of ["0010", "0020", "0030"]) step(E.confirmPhase(s, o, ph));
  step(E.confirmPhase(s, o, "0040", v.yieldKg));
  step(E.goodsReceipt(s, o, v.yieldKg));
  const lot = s.lots.find((l) => l.order === o);
  const lab = E.labFor(lot);
  step(E.recordResults(s, lot.id, lab));
  const conform = E.characteristics.every((c) => E.evaluate(c, lab[c.id]));
  let ud = conform ? "A" : "R"; if (wrongUD) ud = conform ? "R" : "A";
  const r = E.usageDecision(s, lot.id, ud); if (r.msg.type !== "E") s = r.state;
  const ans = Object.fromEntries(X.lookups(v).map((l) => [l.id, String(l.answer).replace(".", ",")]));
  return { g: X.grade(s, v, ans), conform };
}
for (const qty of [150, 200, 250, 300]) for (const history of [0, 1, 2]) {
  const v = { qty, yieldKg: Math.round(qty * 0.92 * 10) / 10, history };
  const { g, conform } = play(v);
  if (g.score !== 100 || g.total !== 100) err(`examen ${qty}/${history}: ${g.score}/${g.total} ${g.tasks.filter(t=>!t.ok).map(t=>t.id)}`);
  const w = play(v, true).g;
  if (w.score !== (conform ? 85 : 85)) err(`examen UD errónea ${qty}/${history}: ${w.score}`);
  if (qty === 200) console.log(`variante historial ${history}: lote ${conform ? "conforme → A" : "OOS → R"}`);
}
const empty = X.grade(X.examState({ qty: 200, yieldKg: 184, history: 0 }), { qty: 200, yieldKg: 184, history: 0 }, {});
if (empty.score !== 0) err("examen vacío no da 0");
console.log(`${nBank} preguntas de banco, ${nCase} de supuestos (${cases.length} casos), ${errors} errores`);
process.exit(errors ? 1 : 0);
