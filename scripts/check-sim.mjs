// Recorre el simulador de planta de principio a fin sin navegador. Uso: npm run check:sim
// Comprueba que un lote bien hecho sale liberable y que el informe de QA detecta las malas prácticas.
import { createJiti } from "jiti";
import { fileURLToPath } from "node:url";
const root = fileURLToPath(new URL("../src", import.meta.url));
const jiti = createJiti(import.meta.url, { alias: { "@": root } });
const E = await jiti.import(root + "/sim/engine.ts");
const R = await jiti.import(root + "/sim/review.ts");
const N = await jiti.import(root + "/sim/nutsche.ts");
let errors = 0;
const expect = (cond, msg) => { if (!cond) { console.error("ERROR", msg); errors++; } };

/** Fabrica un lote siguiendo la hoja al pie de la letra */
function perfect(scenario) {
  const s = E.newSim(scenario);
  const rec = (id, v) => E.record(s, id, String(v));
  const next = () => { E.sign(s, E.SECTIONS[s.section].id); E.advance(s); };
  const valve = (...ids) => ids.forEach((v) => E.toggleValve(s, v));
  let guard = 0;

  // 1. Verificaciones previas
  if (scenario === "incidencias") { E.chooseScale(s, "B-05"); E.notify(s, "báscula B-05 fuera de tolerancia"); }
  E.chooseScale(s, "B-06");
  rec("r101_estado", "Limpio y dentro de tiempo"); rec("bascula_id", "B-06"); rec("bascula_verif", "50,01"); rec("servicios", "Sí");
  next();

  // 2. Pesada y dispensación
  const lots = { af: "AF-24115", aa: "AA-0921", se: "SE-0098" };
  for (const m of ["af", "aa", "se"]) {
    E.selectLot(s, m, lots[m]);
    if (m === "se") for (let i = 0; i < 5; i++) E.dose(s, m, 0.1);
    else {
      for (let i = 0; i < 10; i++) E.dose(s, m, 10);
      if (m === "aa") { for (let i = 0; i < 2; i++) E.dose(s, m, 1); for (let i = 0; i < 9; i++) E.dose(s, m, 0.1); }
    }
    rec("lote_" + m, lots[m]); rec("peso_" + m, E.fmtNum(E.scaleDisplay(s, m), 2));
    const problem = E.requestVerification(s, m);
    expect(!problem, `pesada de ${m}: ${problem}`);
  }
  next();

  // 3. Carga e inertización
  valve("XV-101"); for (let i = 0; i < 3; i++) E.chargeWater(s, 100); valve("XV-101");
  E.toggleAgit(s, true);
  while (s.o2 > 2 && guard++ < 20) { valve("XV-103"); E.inertVacuum(s); valve("XV-103"); valve("XV-102"); E.inertN2(s); valve("XV-102"); }
  E.chargeAF(s);
  rec("agua_l", s.water); rec("o2", E.fmtNum(s.o2));
  next();

  // 4. Reacción
  valve("XV-104"); E.setRate(s, 2); rec("ini_adicion", E.fmtTime(s.clock));
  while (s.reactor.addEnd == null && guard++ < 2000) {
    if (s.events.frio.active && s.events.frio.notified == null) {
      E.setRate(s, 0); E.notify(s, "fallo de frío");
      E.openDeviation(s, "Fallo de glicol durante la adición, temperatura", "Paro la adición y aviso");
    }
    if (s.events.frio.active && s.events.frio.resolved == null) { E.reactorTick(s); continue; }
    if (s.reactor.interlock) { if (s.reactor.T < 35) E.resetInterlock(s); }
    else if (s.reactor.rate === 0 && s.reactor.T < 36) E.setRate(s, 2);
    else if (s.reactor.T > 38 && s.reactor.rate > 0) E.setRate(s, 0);
    E.reactorTick(s);
  }
  rec("fin_adicion", E.fmtTime(s.reactor.addEnd)); rec("tmax_adicion", E.fmtNum(s.reactor.maxTadd));
  valve("XV-104"); E.setSP(s, 80);
  while (s.reactor.inRange < 60 && guard++ < 3000) E.reactorTick(s);
  E.requestIPC(s); for (let i = 0; i < 21; i++) E.reactorTick(s);
  rec("t_reaccion", E.fmtNum(s.reactor.T)); rec("min_reaccion", s.reactor.inRange); rec("ipc_af", E.fmtNum(s.ipc.at(-1).value, 2));
  next();

  // 5. Filtración
  valve("XV-105", "XV-106");
  while (!s.filter.done && guard++ < 4000) {
    if (s.filter.dp > 1.5) {
      valve("XV-105", "XV-106"); E.notify(s, "ΔP alta en el filtro"); E.changeCartridge(s);
      E.openDeviation(s, "Presión diferencial alta en el filtro F-301: 2,1 bar", "Paro y cambio el cartucho");
      valve("XV-105", "XV-106");
    }
    E.filterStep(s);
  }
  valve("XV-105", "XV-106");
  rec("dp_filtro", E.fmtNum(s.filter.maxDpRun)); rec("cartucho", "CF-5512");
  next();

  // 6. Cristalización
  E.runCrystallization(s, 60, true, 150, 3, 60);
  rec("t_siembra", 60); rec("min_rampa", 150); rec("t_final", 3);
  next();

  // 7. Centrifugación
  valve("XV-201"); E.centriAction(s, "cargar"); valve("XV-201"); E.centriAction(s, "centrifugar");
  valve("XV-202"); E.centriAction(s, "lavar", 5); E.centriAction(s, "lavar", 5); valve("XV-202"); E.centriAction(s, "descargar");
  rec("lavados", 2); rec("torta", E.fmtNum(s.centri.wetCake));
  next();

  // 8. Secado
  E.dryerLoad(s); valve("XV-301");
  let lod = 99, hours = 0;
  while (lod > 0.5 && guard++ < 5000) {
    E.dryHour(s); hours++;
    if (s.events.vacio.active && s.events.vacio.notified == null) {
      E.notify(s, "vacío perdido"); E.openDeviation(s, "Vacío del secadero a 380 mbar", "Aviso a mantenimiento");
    }
    if (hours >= 4 && s.dryer.lod < 0.5) lod = E.lodSample(s);
  }
  valve("XV-301");
  rec("t_secado", s.dryer.maxTj); rec("vacio", s.dryer.worstVac); rec("lod", E.fmtNum(lod, 2));
  next();

  // 9. Envasado y cierre
  E.doPack(s);
  const p = s.pack;
  rec("neto", E.fmtNum(p.netKg)); rec("rendimiento", E.fmtNum((p.netKg / E.THEORETICAL_KG) * 100));
  rec("etq_emitidas", p.labelsIssued); rec("etq_usadas", p.labelsUsed); rec("etq_destruidas", p.labelsDestroyed);
  rec("etq_devueltas", p.labelsIssued - p.labelsUsed - p.labelsDestroyed);
  next();
  E.closeBatch(s);
  return s;
}

const titles = (r) => r.findings.map((f) => f.title).join(" | ");

// 1. Lote normal bien hecho: liberable, sin hallazgos ni alarmas
let s = perfect("normal");
let r = R.reviewBatch(s);
expect(r.decision === "Liberable" && r.score === 100 && r.findings.length === 0, `1: lote normal perfecto → ${r.decision} ${r.score} ${titles(r)}`);
expect(s.reactor.alarms.length === 0, `1: no debe saltar ninguna alarma: ${s.reactor.alarms.map((a) => a.text)}`);
expect(!s.messages.some((m) => /PAH-101/.test(m.text)), "1: la inertización correcta no debe disparar la alarma de presión");
expect(Math.abs(s.pack.netKg / E.THEORETICAL_KG - 0.909) < 0.01, `1: rendimiento esperado ≈ 90,9 %, sale ${((s.pack.netKg / E.THEORETICAL_KG) * 100).toFixed(1)}`);

// 2. Lote con incidencias bien gestionado: nota máxima, pendiente de sus desviaciones
s = perfect("incidencias");
r = R.reviewBatch(s);
expect(r.decision === "Pendiente de desviaciones" && r.score === 100, `2: lote con incidencias bien gestionado → ${r.decision} ${r.score} ${titles(r)}`);

// 3. No se puede firmar una sección sin datos
s = E.newSim("normal");
E.sign(s, "previas");
expect(s.signatures.previas == null, "3: firmar sin datos debe estar bloqueado");

// 4. Datos falsos en la hoja: el informe los detecta
s = perfect("normal");
const falsos = { bascula_id: "B-05", servicios: "No", o2: "0,1", ini_adicion: "25/12 00:00", t_reaccion: "OK", min_reaccion: "999", vacio: "OK", t_secado: "50", lavados: "3" };
for (const [k, v] of Object.entries(falsos)) s.entries[k].value = v;
r = R.reviewBatch(s);
expect(r.decision !== "Liberable" && r.findings.length >= 9, `4: datos falsos → ${r.decision}, ${r.findings.length} hallazgos`);

// 5. Inertización a medias (un ciclo, O₂ 4,2 %): sin sobrepresión, y cargar así para el lote
s = E.newSim("normal");
E.toggleValve(s, "XV-103"); E.inertVacuum(s); E.toggleValve(s, "XV-103"); E.toggleValve(s, "XV-102"); E.inertN2(s); E.toggleValve(s, "XV-102");
expect(s.p101 === 0, `5: tras romper el vacío el reactor queda a presión atmosférica (${s.p101})`);
E.chargeAF(s);
expect(!s.afCharged && s.halt, "5: cargar con más del 2 % de oxígeno debe parar el lote");

// 6. Sin materia prima no hay producto
s = E.newSim("normal");
s.reactor.added = 95; s.reactor.accum = 95; s.reactor.agit = true;
for (let i = 0; i < 60; i++) E.reactorTick(s);
expect(s.reactor.consumed === 0, `6: sin 4-aminofenol no debe haber conversión (${s.reactor.consumed})`);

// 7. Arrancar el agitador con reactivo acumulado queda como hallazgo crítico
s = perfect("normal");
s.reactor.accum = 30; s.reactor.agit = false;
E.toggleAgit(s, true);
r = R.reviewBatch(s);
expect(r.findings.some((f) => f.sev === "crítico" && /acumulado/.test(f.title)), "7: falta el hallazgo crítico por arrancar con acumulación");

// 8. Nutsche: no se carga sin inertizar; el lote de relevo llega inertizado y cargado
let n = N.newNutsche("normal");
N.toggleValve(n, "XV-401");
N.transfer(n);
expect(n.r201L === 800, `8: no debe transferir sin inertizar (${n.r201L})`);
N.inert(n);
N.transfer(n);
expect(n.r201L === 600, `8: tras inertizar sí transfiere (${n.r201L})`);
n = N.newNutsche("relevo");
expect(n.inerted && n.r201L === 0, `8: el lote de relevo llega inertizado y cargado (${n.inerted}, ${n.r201L})`);

console.log(errors ? `${errors} errores` : "Simulador de planta: 8 escenarios OK");
process.exit(errors ? 1 : 0);
