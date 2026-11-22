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

/**
 * Fabrica un lote siguiendo la hoja al pie de la letra. Con `events`, el lote lleva esas incidencias y se gestionan bien;
 * `bad` lista los errores que se quieren cometer a propósito (para comprobar que el informe de QA los ve).
 */
function perfect(scenario, events, bad = []) {
  const s = events ? E.newSim("incidencias", { events }) : E.newSim(scenario);
  const mal = (x) => bad.includes(x);
  const dev = (what, action) => E.openDeviation(s, what, action);
  const rec = (id, v) => E.record(s, id, String(v));
  const next = () => { E.sign(s, E.SECTIONS[s.section].id); E.advance(s); };
  const valve = (...ids) => ids.forEach((v) => E.toggleValve(s, v));
  let guard = 0;

  // 1. Verificaciones previas
  if (E.eventOn(s, "bascula")) { E.chooseScale(s, "B-05"); E.notify(s, "báscula B-05 fuera de tolerancia"); }
  E.chooseScale(s, "B-06");
  rec("r101_estado", "Limpio y dentro de tiempo"); rec("bascula_id", "B-06"); rec("bascula_verif", "50,01"); rec("servicios", "Sí");
  next();

  // 2. Pesada y dispensación
  const lots = { af: "AF-24115", aa: "AA-0921", se: "SE-0098" };
  for (const m of ["af", "aa", "se"]) {
    E.selectLot(s, m, lots[m]);
    if (m === "af" && s.events.etiqueta.active && !mal("etiqueta")) {
      E.notify(s, "etiquetas del bidón de 4-aminofenol no coinciden");
      dev("Bidón de 4-aminofenol con etiqueta de proveedor AF-24113 y etiqueta de estado AF-24115", "No lo uso, lo aparto y aviso");
    }
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
  while (s.o2 > 2 && guard++ < 20) {
    valve("XV-103"); E.inertVacuum(s); valve("XV-103"); valve("XV-102"); E.inertN2(s); valve("XV-102");
    if (s.events.oxigeno.active && s.events.oxigeno.notified == null && !mal("oxigeno")) {
      E.notify(s, "el vacío del R-101 no aguanta"); dev("Fuga en el R-101: el vacío no aguanta y el O₂ no baja de 2,6 %", "Paro la inertización y aviso");
    }
  }
  E.chargeAF(s);
  if (s.events.tierra.active && !s.afCharged) {
    if (mal("tierra")) E.chargeAF(s, true);
    else { E.notify(s, "la pinza de tierra no da continuidad"); dev("Pinza de puesta a tierra de la estación de carga sin continuidad", "No cargo y aviso"); E.chargeAF(s); }
  }
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
    const ag = s.events.agitador;
    if (ag.active && ag.resolved == null && !mal("agitador")) {
      if (ag.notified == null) { E.setRate(s, 0); E.notify(s, "agitador parado"); dev("Parada del agitador M-101 durante la adición", "Paro la adición y aviso"); }
      E.reactorTick(s); continue;
    }
    if (ag.active && ag.resolved != null && !s.reactor.agit) E.toggleAgit(s, true);
    if (s.reactor.interlock) { if (s.reactor.T < 35) E.resetInterlock(s); }
    else if (s.reactor.rate === 0 && s.reactor.T < 36) E.setRate(s, 2);
    else if (s.reactor.T > 38 && s.reactor.rate > 0) E.setRate(s, 0);
    E.reactorTick(s);
  }
  rec("fin_adicion", E.fmtTime(s.reactor.addEnd)); rec("tmax_adicion", E.fmtNum(s.reactor.maxTadd));
  valve("XV-104"); E.setSP(s, 80);
  while (s.reactor.inRange < 60 && guard++ < 3000) {
    E.reactorTick(s);
    if (s.events.sonda.active && s.events.sonda.notified == null && !mal("sonda")) {
      E.notify(s, "TI-101 y TI-103 no coinciden"); dev("Discrepancia de temperatura entre TI-101 y la sonda de respaldo TI-103", "Aviso a instrumentación");
    }
  }
  E.requestIPC(s); for (let i = 0; i < 21; i++) E.reactorTick(s);
  while (s.ipc.at(-1).value > 0.5 && guard++ < 3100) {
    const prev = s.ipc.at(-1);
    if (s.events.ipc.active && s.events.ipc.notified == null) E.notify(s, "IPC fuera de límite");
    if (!mal("ipc")) while (s.reactor.inRange < prev.min + 30 && guard++ < 3200) E.reactorTick(s);
    E.requestIPC(s); for (let i = 0; i < 21; i++) E.reactorTick(s);
    if (mal("ipc")) break;
  }
  rec("t_reaccion", E.fmtNum(s.reactor.T)); rec("min_reaccion", s.reactor.inRange); rec("ipc_af", E.fmtNum(s.ipc.at(-1).value, 2));
  next();

  // 5. Filtración
  valve("XV-105", "XV-106");
  while (!s.filter.done && guard++ < 4000) {
    const j = s.events.junta;
    if (j.active && j.resolved == null && j.notified == null && !mal("junta")) {
      valve("XV-105", "XV-106"); E.notify(s, "gotea la junta del F-301");
      dev("Fuga en la junta de la brida del portacartuchos del F-301", "Paro, aíslo el filtro y aviso");
      valve("XV-105", "XV-106");
    }
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
  if (!s.centri.spun) {
    if (mal("vibracion")) E.centriAction(s, "centrifugar");
    E.notify(s, "vibración alta en la C-201"); dev("Parada de la centrífuga C-201 por vibración alta al subir a 900 rpm", "Dejo que pare y aviso");
    E.centriAction(s, "centrifugar");
  }
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
    if (hours >= 4 && E.eventOn(s, "lod") && !s.events.lod.active) lod = E.lodSample(s);
    if (s.events.lod.active && s.events.lod.notified == null && !mal("lod")) {
      E.notify(s, "el LOD no baja, grumos"); dev("LOD de 2 % a las 4 h: torta con grumos", "Aviso; se desterrona según el procedimiento");
    }
    if (mal("lod") && hours >= 10) break;
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
  rec("estado_r101_fin", "Sucio"); rec("estado_c201_fin", "Sucio"); rec("limpieza_pedida", "Sí");
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


// ───────── Reactor R-204: modelo físico, hoja y revisión ─────────
const RM = await jiti.import(root + "/sim/reactor/model.ts");
const RH = await jiti.import(root + "/sim/reactor/hoja.ts");

/** Lleva el lote del R-204 como pide la hoja. `opts` cambia la temperatura o el caudal de adición. */
function reactorLote(opts = {}) {
  const fault = opts.fault ?? null;
  const s = RM.newState(fault);
  const h = RH.newHoja();
  const i = s.inputs;
  const run = (sec, cond) => { for (let k = 0; k < sec; k++) { RM.step(s, 1); if (opts.onStep) opts.onStep(s); if (cond && cond()) return true; } return false; };
  const note = (id, v) => RH.anotar(h, s, id, String(v).replace(".", ","));
  const firma = (p) => { h.firmas[p] = s.t; };
  const o2Ciclo = [];
  note("estado", "Limpio"); note("fondo", "Cerrada"); note("pdisco", "0"); note("barrera", RM.fmt(s.barrera, 0)); note("n2", "4,0"); firma("previas");
  for (let c = 0; c < 3; c++) {
    i.vacio = true; run(3600, () => RM.pAbs(s) < 0.2); i.vacio = false;
    i.xvN2 = true; run(3600, () => RM.pAbs(s) >= 1.0); i.xvN2 = false; run(2);
    o2Ciclo.push(RM.o2(s));
  }
  s.ciclos.forEach((c, k) => note("ciclo" + (k + 1), c.pMin));
  note("o2", RM.fmt(RM.o2(s), 2)); i.picOn = true; firma("inertizacion");
  i.carga = true; run(7200, () => s.solCargada >= 2610); i.carga = false;
  note("cargado", Math.round(s.solCargada)); note("nivelCarga", RM.fmt(RM.nivel(s), 1)); firma("carga");
  i.agitOn = true; run(60); note("rpm", Math.round(s.rpm)); firma("agitacion");
  const t0 = s.t;
  const tAd = opts.tAdicion ?? 70;
  i.ticMasaOn = true; i.jMode = "CAS"; i.tMasaSp = tAd;
  run(4 * 3600, () => s.tm >= tAd - 0.5);
  const calentamiento = (s.t - t0) / 60;
  note("horaCal", RM.fmtHora(s.t)); run(600); run(3 * 3600, () => s.tm >= 68 && s.tm <= 74); note("tmCal", RM.fmt(RM.tmLeida(s), 1)); firma("calentamiento");
  i.feedSp = opts.feed ?? 600; i.dosif = true;
  let maxB = 0;
  run(5 * 3600, () => { maxB = Math.max(maxB, s.mB); if (opts.onAdicion) opts.onAdicion(s); return s.bAlimentado >= 600; });
  i.dosif = false;
  if (s.inicioAdicion !== null) note("iniAd", RM.fmtHora(s.inicioAdicion));
  if (s.finAdicion !== null) note("finAd", RM.fmtHora(s.finAdicion));
  note("kgB", RM.fmt(s.bIndicado, 1)); note("tminAd", RM.fmt(s.minTmAdicion ?? 0, 1)); note("tmaxAd", RM.fmt(s.maxTmAdicion ?? 0, 1)); firma("adicion");
  i.tMasaSp = 125;
  run(4 * 3600, () => s.inicioReflujo !== null);
  if (s.inicioReflujo !== null) note("iniRef", RM.fmtHora(s.inicioReflujo));
  note("tmRef", RM.fmt(RM.tmLeida(s), 1));
  run(5 * 3600, () => s.tiempoReflujo >= 7200);
  note("finRef", RM.fmtHora(s.t));
  firma("reflujo");
  RM.tomarMuestra(s); note("horaIpc", RM.fmtHora(s.t));
  i.tMasaSp = 25; i.medio = "glicol";
  run(1800);
  const m = s.samples.at(-1);
  note("bRes", RM.fmt(m.bResidual, 2)); note("imp", RM.fmt(m.impureza, 2)); firma("ipc");
  run(12 * 3600, () => s.tm <= 26);
  note("tmFin", RM.fmt(RM.tmLeida(s), 1)); firma("enfriamiento");
  i.fondo = true; run(7200, () => RM.volLiquido(s) < 0.5); i.agitOn = false; run(7200, () => RM.mLiquido(s) < 5); i.fondo = false;
  note("kgDesc", Math.round(s.mDescargado)); note("estadoFin", "Sucio"); firma("descarga");
  if (opts.incidencias) note("incidencias", opts.incidencias);
  RM.ackAlarm(s);
  firma("cierre");
  RM.ackAlarm(s);
  return { s, h, o2Ciclo, calentamiento, maxB, r: RH.revisar(s, h) };
}

{
  const L = reactorLote();
  const [a, b, c] = L.o2Ciclo;
  expect(Math.abs(a - 4.2) < 0.05 && Math.abs(b - 0.84) < 0.02 && Math.abs(c - 0.17) < 0.01, `9: oxígeno por ciclo como en la lección (${L.o2Ciclo.map((x) => x.toFixed(2))})`);
  expect(L.calentamiento > 60 && L.calentamiento < 85, `9: calentar de 20 a 70 °C lleva unos 74 min como en la lección (${L.calentamiento.toFixed(0)} min)`);
  expect(L.s.maxTmAdicion <= 75 && L.s.minTmAdicion >= 68, `9: la cascada mantiene la masa entre 68 y 75 °C en la adición (${L.s.minTmAdicion.toFixed(1)}–${L.s.maxTmAdicion.toFixed(1)})`);
  const tb = RM.tEbullicion(RM.P.pAtm);
  expect(Math.abs(tb - 110.6) < 0.3, `9: el tolueno hierve a unos 110,6 °C a 1 atm (${tb.toFixed(1)})`);
  expect(L.s.tm < 30 && L.s.mDescargado > 3150, `9: el lote se enfría y se descarga entero (${L.s.mDescargado.toFixed(0)} kg)`);
  const graves = L.r.hallazgos.filter((x) => x.grav !== "menor");
  expect(graves.length === 0, `9: un lote bien hecho no tiene hallazgos graves (${graves.map((x) => x.texto).join(" | ")})`);
}
{
  // Máximo teórico de adición con la camisa a 70 °C: unos 30 kW entre 150 kJ/kg netos, unos 12 kg/min
  const s = RM.newState();
  s.mSol = 2610; s.tm = 70; s.rpm = 90;
  const ua = RM.coefU(s) * RM.areaMojada(s);
  const tj = (ua * 70 + RM.P.UAfrio * RM.P.tAguaTorre) / (ua + RM.P.UAfrio);
  const q = ua * (70 - tj);
  const neto = RM.P.dHr - RM.P.cpB * (70 - RM.P.tFeed);
  const kgmin = (q / neto) * 60;
  expect(Math.abs(neto - 150e3) < 1, `10: el calor neto por kg de B a 70 °C es 150 kJ (${neto / 1000})`);
  expect(kgmin > 11 && kgmin < 13.5, `10: la camisa admite unos 12 kg/min de adición (${kgmin.toFixed(1)})`);
}
{
  const frio = reactorLote({ tAdicion: 55 });
  expect(frio.maxB > 200, `11: adicionar a 55 °C acumula B sin reaccionar (${frio.maxB.toFixed(0)} kg)`);
  expect(frio.r.hallazgos.some((x) => x.texto.includes("acumulación")), "11: la revisión señala la temperatura baja en la adición");
  const rapido = reactorLote({ feed: 1200 });
  expect(rapido.s.maxTmAdicion > 75, `11: adicionar al doble de caudal pasa de 75 °C (${rapido.s.maxTmAdicion.toFixed(1)})`);
  expect(rapido.r.hallazgos.some((x) => x.texto.includes("menos de los 60")), "11: la revisión señala la adición demasiado rápida");
}
{
  // Avería: se pierde el agua de la camisa. El operador para la adición al ver la alarma y avisa.
  let avisado = false;
  const L = reactorLote({
    fault: "agua",
    incidencias: "Pérdida de agua de refrigeración durante la adición: se paró la adición y se avisó.",
    onAdicion: (s) => {
      if (s.alarms.some((a) => a.id === "CWL" && a.active) && !avisado) { s.inputs.dosif = false; RM.avisar(s, "sin agua de torre en la TCU"); avisado = true; }
      if (avisado && !RM.activa(s, "agua") && !s.inputs.dosif && s.tm < 73 && s.finAdicion === null) s.inputs.dosif = true;
    },
  });
  expect(avisado && RM.averia(L.s, "agua").aviso !== null, "12: la avería de agua dispara su alarma y se puede avisar");
  expect(L.s.maxTmAdicion < 80 && L.s.finAdicion !== null, `12: parando la adición a tiempo no se llega a 80 °C y se termina tras la reparación (${L.s.maxTmAdicion.toFixed(1)}, ${L.s.bAlimentado.toFixed(0)} kg)`);
  expect(!L.r.hallazgos.some((x) => x.texto.includes("no consta ningún aviso")), "12: el aviso queda registrado en la revisión");
  const sinAviso = reactorLote({ fault: "agua" });
  expect(sinAviso.r.hallazgos.some((x) => x.texto.includes("no consta ningún aviso")), "12: sin aviso, la revisión lo señala");
  expect(sinAviso.r.hallazgos.some((x) => x.texto.includes("no se hizo lo que pedía")), "12: sin respuesta, la revisión lo señala");
}
{
  // Avería: fuga en el vacío. No se llega a 200 mbar abs y el interlock I-05 no deja cargar.
  const s = RM.newState("vacio");
  for (let c = 0; c < 3; c++) {
    s.inputs.vacio = true; for (let k = 0; k < 900; k++) RM.step(s, 1); s.inputs.vacio = false;
    s.inputs.xvN2 = true; for (let k = 0; k < 900 && RM.pAbs(s) < 1; k++) RM.step(s, 1); s.inputs.xvN2 = false; RM.step(s, 2);
  }
  expect(s.ciclos.every((c) => c.pMin > 400), `13: con fuga el vacío no baja de 400 mbar abs (${s.ciclos.map((c) => c.pMin)})`);
  expect(RM.o2(s) > 2 && RM.puedeCargar(s) !== null, `13: con ${RM.o2(s).toFixed(1)} % de O₂ el interlock no deja cargar`);
}


{
  // Un operador que reacciona como dice la guía resuelve cada avería sin hallazgos críticos
  const bueno = (s) => {
    const i = s.inputs;
    for (const f of s.faults) {
      if (f.estado === "activa") {
        if (f.aviso === null) RM.avisar(s, "avería " + f.id);
        if (f.id === "agua") i.medio = "glicol";
        if (f.id === "sensor") i.sondaB = true;
        if (f.id === "valvulaB") i.aislaB = true;
        if (f.id === "caudalimetro" && i.feedSp > 480) i.feedSp = 480;
        if (f.id === "barrera") RM.rellenarBarrera(s);
        if (f.id === "agitador") i.dosif = false;
        if (f.id === "condensador") { i.ticMasaOn = false; i.jMode = "MAN"; i.jOut = 0; }
      }
      if (f.estado === "resuelta" && f.fin !== null && s.t - f.fin < 5) {
        if (f.id === "condensador" || f.id === "corte") { i.ticMasaOn = true; i.jMode = "CAS"; }
        if (f.id === "corte" || f.id === "agitador") i.agitOn = true;

      }
    }
    if (RM.activa(s, "caudalimetro") && s.bAlimentado >= 600) i.dosif = false;
    // Tras el disparo del agitador: reanudar la adición solo con agitación estable y la masa en su intervalo
    const ag = RM.averia(s, "agitador");
    if (ag && ag.estado === "resuelta" && s.finAdicion === null && !i.dosif && s.rpm > 85 && s.tm > 68 && s.tm < 73) i.dosif = true;
  };
  const aparecidas = [];
  for (const f of RM.FAULTS) {
    const L = reactorLote({ fault: f.id, onStep: bueno, incidencias: "Avería " + f.title + ": se avisó y se actuó según la guía." });
    const st = RM.averia(L.s, f.id);
    if (st.desde !== null) aparecidas.push(f.id);
    expect(st.desde !== null, `14: la avería «${f.id}» aparece en su fase`);
    expect(st.respuesta !== null, `14: la respuesta correcta a «${f.id}» queda registrada`);
    const crit = L.r.hallazgos.filter((x) => x.grav === "crítica");
    expect(crit.length === 0, `14: «${f.id}» bien llevada no deja hallazgos críticos (${crit.map((x) => x.texto).join(" | ")})`);
  }
  const sucia = reactorLote({ fault: "camisaSucia" });
  const limpia = reactorLote();
  expect(sucia.calentamiento > limpia.calentamiento, `14: con la camisa sucia calentar tarda más (${sucia.calentamiento.toFixed(0)} frente a ${limpia.calentamiento.toFixed(0)} min)`);
  expect(sucia.s.maxTmAdicion > limpia.s.maxTmAdicion + 1, `14: con la camisa sucia la masa sube más en la adición (${sucia.s.maxTmAdicion.toFixed(1)} frente a ${limpia.s.maxTmAdicion.toFixed(1)} °C)`);
  const corte = reactorLote({ fault: "corte", onStep: bueno });
  expect(corte.s.alarms.length >= 0 && RM.averia(corte.s, "corte").fin !== null, "14: tras el corte vuelve la corriente");
  const turno = RM.newState(["vacio", "agua", "corte"]);
  expect(turno.faults.length === 3, "14: el turno real admite varias averías a la vez");
}

// 15. Modo guiado e incidencias elegibles del lote completo; botones «Practicar» de las lecciones
{
  const g = E.newSim("normal", { guided: true });
  expect(g.guided && Object.values(g.eventsOn).every((x) => !x), "15: el lote guiado no tiene incidencias");
  const una = E.newSim("normal", { events: ["frio"] });
  expect(una.eventsOn.frio && !una.eventsOn.bascula && !una.events.bascula.active && una.scaleReading["B-05"] < 50.1, "15: se puede elegir solo el fallo de frío");
  const todas = E.newSim("incidencias");
  expect(E.CLASICAS.every((id) => todas.eventsOn[id]) && E.CLASICAS.length === 4, "15: el lote con incidencias tiene las cuatro de siempre");
  const G = await jiti.import(root + "/sim/guiado.ts");
  expect(E.SECTIONS.every((x) => G.GUIADO[x.id]?.porque.length > 0), "15: el modo guiado explica todas las etapas");
  const PR = await jiti.import(root + "/content/practica.ts");
  const C = await jiti.import(root + "/content/catalog.ts");
  const rutas = ["/simulador", "/simulador/reactor", "/simulador/nutsche", "/simulador/auditoria", "/sap", "/fds"];
  for (const [slug, ps] of Object.entries(PR.practicas)) {
    expect(!!C.getLesson(slug), `15: la lección «${slug}» de los botones «Practicar» existe`);
    for (const p of ps) {
      const [path, q] = p.href.split("?");
      expect(rutas.includes(path), `15: «${slug}» enlaza a una ruta del simulador (${p.href})`);
      if (q) expect(E.EVENTS.some((e) => `incidencia=${e.id}` === q), `15: la incidencia de «${slug}» existe (${q})`);
    }
  }
  for (const sl of Object.values(G.GUIADO).flatMap((x) => x.lecciones.map((l) => l.slug))) expect(!!C.getLesson(sl), `15: la lección «${sl}» del modo guiado existe`);
}


// 16. El lote FX-101 del simulador se registra en el ERP de principio a fin (misión 10)
{
  const S = await jiti.import(root + "/sap/engine.ts");
  const lote = perfect("normal");
  const qa = R.reviewBatch(lote).decision;
  const fx = E.erpHandoff(lote, qa);
  expect(fx.netKg > 100 && fx.lotes["RM-4001"] === "AF-24115" && Number.isFinite(fx.lab.AF) && Number.isFinite(fx.lab.LOD), `16: el lote pasa al ERP con peso, lotes y resultados (${JSON.stringify(fx)})`);
  let st = { ...S.initialState(), fx };
  const ok = (r, msg) => { expect(r.msg.type !== "E", `16: ${msg}: ${r.msg.text}`); st = r.state; };
  ok(S.createOrder(st, "FG-6001", S.FX_TEORICO), "crear la orden");
  const id = st.orders.at(-1).id;
  expect(st.orders.at(-1).components.map((c) => c.required).join("|") === "100|102.9|0.5", `16: la orden pide 100 / 102,9 / 0,5 kg (${st.orders.at(-1).components.map((c) => c.required)})`);
  ok(S.releaseOrder(st, id), "liberar");
  const mal = S.goodsIssue(st, id, "AF-24131", 100);
  expect(mal.msg.type === "E", "16: el ERP no deja consumir el lote de 4-aminofenol en cuarentena");
  ok(S.goodsIssue(st, id, "AF-24115", 100), "consumir 4-aminofenol");
  ok(S.goodsIssue(st, id, "AA-0921", 102.9), "consumir anhídrido");
  ok(S.goodsIssue(st, id, "SE-0098", 0.5), "consumir semilla");
  for (const ph of ["0010", "0020", "0030"]) ok(S.confirmPhase(st, id, ph), "notificar " + ph);
  ok(S.confirmPhase(st, id, "0040", fx.netKg), "notificar 0040");
  expect(S.goodsReceipt(st, id, fx.netKg + 1).msg.type === "E", "16: la entrada debe coincidir con el peso neto envasado en planta");
  ok(S.goodsReceipt(st, id, fx.netKg), "entrada");
  const lot = st.lots.at(-1);
  expect(lot.material === "FG-6001" && lot.lab.AF === fx.lab.AF, "16: el lote de inspección trae los resultados del simulador");
  ok(S.recordResults(st, lot.id, { AF: fx.lab.AF, LOD: fx.lab.LOD }), "resultados");
  ok(S.usageDecision(st, lot.id, qa === "Liberable" ? "A" : "R"), "decisión de empleo");
  const m10 = S.missions.find((m) => m.id === "m10-fx101");
  expect(m10.done(st), "16: la misión 10 queda hecha");
  expect(!S.missions.find((m) => m.id === "m7-entrada").done(st), "16: el lote FX-101 no cuenta como misión del API-X");
  // Con un informe de QA que no lo deja liberar, el ERP no deja aceptarlo
  let st2 = { ...S.initialState(), fx: { ...fx, qa: "Pendiente de desviaciones" } };
  for (const step of [(x) => S.createOrder(x, "FG-6001", S.FX_TEORICO)]) st2 = step(st2).state;
  const id2 = st2.orders.at(-1).id;
  st2 = S.releaseOrder(st2, id2).state;
  for (const [b, q] of [["AF-24115", 100], ["AA-0921", 102.9], ["SE-0098", 0.5]]) st2 = S.goodsIssue(st2, id2, b, q).state;
  for (const ph of ["0010", "0020", "0030"]) st2 = S.confirmPhase(st2, id2, ph).state;
  st2 = S.confirmPhase(st2, id2, "0040", fx.netKg).state;
  st2 = S.goodsReceipt(st2, id2, fx.netKg).state;
  st2 = S.recordResults(st2, st2.lots.at(-1).id, { AF: fx.lab.AF, LOD: fx.lab.LOD }).state;
  expect(S.usageDecision(st2, st2.lots.at(-1).id, "A").msg.type === "E", "16: no se acepta un lote que el informe de QA no deja liberar");
}

// 17. Las incidencias nuevas (y las cuatro de siempre) bien gestionadas: nota máxima, pendiente de desviaciones
{
  const all = E.EVENTS.map((e) => e.id);
  const s17 = perfect(null, all);
  const r17 = R.reviewBatch(s17);
  expect(r17.decision === "Pendiente de desviaciones" && r17.score === 100, `17: lote con todas las incidencias bien gestionado → ${r17.decision} ${r17.score} ${titles(r17)}`);
  for (const id of all) expect(s17.events[id].active, `17: la incidencia ${id} debe haber salido`);
  expect(s17.o2 <= 2, `17: tras cambiar la junta el O₂ debe bajar de 2 %: ${s17.o2}`);
  expect(s17.ipc.length >= 2 && s17.ipc[0].value > 0.5 && s17.ipc.at(-1).value <= 0.5, `17: el primer IPC no cumple y el repetido sí: ${s17.ipc.map((i) => i.value)}`);
  expect(!s17.incidents.length, `17: no debe haber incidentes: ${s17.incidents.map((i) => i.kind)}`);
  expect(s17.reactor.maxTreact <= 90, `17: con la sonda bien gestionada la masa no pasa de 90 °C: ${s17.reactor.maxTreact}`);
  expect(s17.events.junta.isolated && s17.events.junta.resolved != null, "17: la junta se cambia con el filtro aislado");
  // Un lote antiguo sin las incidencias nuevas se completa al cargarlo
  const old = JSON.parse(JSON.stringify(E.newSim("normal")));
  delete old.events.lod; delete old.eventsOn.lod;
  const m = E.migrate(old);
  expect(m.events.lod && m.eventsOn.lod === false, "17: migrate completa las incidencias que faltan");
  expect(E.newSim("incidencias").eventsOn.lod === false && E.newSim("incidencias").eventsOn.frio, "17: el escenario «incidencias» sigue siendo el de las 4 de siempre");
}

// 18. Cada incidencia nueva mal gestionada deja su hallazgo
{
  // Etiqueta: sin avisar, el verificador no firma
  const s = E.newSim("incidencias", { events: ["etiqueta"] });
  E.chooseScale(s, "B-06"); E.selectLot(s, "af", "AF-24115");
  for (let i = 0; i < 10; i++) E.dose(s, "af", 10);
  E.record(s, "lote_af", "AF-24115"); E.record(s, "peso_af", E.fmtNum(E.scaleDisplay(s, "af"), 2));
  expect(/etiqueta/.test(E.requestVerification(s, "af") ?? ""), "18: con las etiquetas cruzadas el verificador no firma");
  E.notify(s, "etiquetas"); expect(s.dosed.af === 0 && s.events.etiqueta.resolved != null, "18: tras avisar se devuelve lo pesado y llega otro bidón");

  // Oxígeno: sin avisar, por muchos ciclos el O₂ se queda en ~2,6 %
  const o = E.newSim("incidencias", { events: ["oxigeno"] });
  for (let i = 0; i < 8; i++) { E.toggleValve(o, "XV-103"); E.inertVacuum(o); E.toggleValve(o, "XV-103"); E.toggleValve(o, "XV-102"); E.inertN2(o); E.toggleValve(o, "XV-102"); }
  expect(o.o2 > 2.5 && o.o2 < 2.7, `18: con la fuga el O₂ se queda en ~2,6 %: ${o.o2}`);
  expect(R.reviewBatch(o).findings.some((f) => /No se avisó de la fuga de vacío/.test(f.title)), "18: oxígeno sin avisar debe dar su hallazgo");

  const bads = [
    ["agitador", /Se siguió añadiendo anhídrido con el agitador parado/],
    ["ipc", /Se repitió el IPC sin prolongar/],
    ["tierra", /Se cargó el polvo sin continuidad/],
    ["sonda", /No se actuó ante la discrepancia/],
    ["junta", /Se siguió transfiriendo con la junta goteando/],
    ["vibracion", /Se rearrancó la centrífuga/],
    ["lod", /No se avisó de que el LOD no bajaba/],
  ];
  for (const [id, re] of bads) {
    const sb = perfect(null, [id], [id]);
    const rb = R.reviewBatch(sb);
    expect(rb.findings.some((f) => re.test(f.title)), `18: ${id} mal gestionado debe dar «${re.source}» → ${titles(rb)}`);
  }
}

// 19. Misiones de certificaciones: cada simulador marca las suyas cuando se cumplen, y solo entonces
{
  const M = await jiti.import(root + "/sim/misiones.ts");
  const MP = await jiti.import(root + "/certs/misiones-planta.ts");
  const A = await jiti.import(root + "/sim/audit.ts");
  const ids = new Set(MP.MISIONES_PLANTA.map((m) => m.id));
  expect(ids.size === MP.MISIONES_PLANTA.length, "19: ids de misión repetidas");
  for (const m of MP.MISIONES_PLANTA) {
    expect(m.certs.every((c) => ["quie0108", "upv-gmp"].includes(c)), `19: ${m.id} apunta a una certificación que no existe`);
    expect(/^\/simulador(\/(reactor|nutsche|auditoria))?(\?modo=guiado)?$/.test(m.href), `19: ${m.id} enlaza a una ruta que no existe: ${m.href}`);
  }
  const todas = (xs) => xs.every((x) => ids.has(x));

  const normal = M.misionesLote(perfect("normal"));
  expect(normal.includes("pl-lote-liberable") && !normal.includes("pl-lote-incidencias") && todas(normal), `19: lote normal perfecto → ${normal}`);
  const duro = M.misionesLote(perfect(null, E.EVENTS.map((e) => e.id)));
  expect(duro.includes("pl-lote-incidencias") && duro.includes("pl-lote-turno-duro") && !duro.includes("pl-lote-liberable"), `19: lote con todas las incidencias → ${duro}`);
  const malo = M.misionesLote(perfect(null, ["tierra", "frio"], ["tierra"]));
  expect(!malo.includes("pl-lote-incidencias"), `19: cargar sin tierra no cumple la misión de incidencias → ${malo}`);
  const abierto = E.newSim("normal");
  expect(M.misionesLote(abierto).length === 0, "19: un lote sin cerrar no cumple nada");
  const g = E.newSim("normal", { guided: true }); g.closed = true;
  expect(M.misionesLote(g).includes("pl-lote-guiado"), "19: un lote guiado cerrado cumple la misión del guiado");

  const L = reactorLote();
  const rm = M.misionesReactor(L.s, L.h);
  expect(rm.includes("pl-r204-conforme") && !rm.includes("pl-r204-turno"), `19: R-204 conforme → ${rm} (${L.r.hallazgos.map((x) => x.texto)})`);
  expect(M.misionesReactor(RM.newState(null), RH.newHoja()).length === 0, "19: un R-204 sin descargar no cumple nada");

  const ns = (mode, told) => Object.assign(N.newNutsche(mode), { closed: true, samples: [{ time: 0, value: 0.3 }], imp: 0.05, Tj: 50, lumps: false, findings: [], supervisorTold: told });
  expect(M.misionesNutsche(ns("normal", false)).join() === "pl-nutsche", "19: Nutsche conforme cumple su misión");
  expect(M.misionesNutsche(ns("relevo", false)).length === 0, "19: relevo sin avisar no cumple");
  expect(M.misionesNutsche(ns("relevo", true)).includes("pl-nutsche-relevo"), "19: relevo bien hecho cumple su misión");
  expect(M.misionesNutsche(Object.assign(ns("normal", false), { findings: [{ sev: "mayor", text: "x" }] })).length === 0, "19: Nutsche con hallazgo mayor no cumple");

  for (const c of A.AUDIT_CASES) {
    const res = A.gradeAudit(c, c.errors.map((e) => ({ line: e.line, cat: e.cat })));
    expect(M.misionesAuditoria({ [c.id]: { score: res.score, max: res.max } }).includes(`pl-auditoria-${c.id}`), `19: auditoría ${c.id} perfecta cumple su misión`);
    const sobra = c.lines.find((l) => !c.errors.some((e) => e.line === l.id));
    const res2 = A.gradeAudit(c, [...c.errors.map((e) => ({ line: e.line, cat: e.cat })), { line: sobra.id, cat: "spec" }]);
    expect(M.misionesAuditoria({ [c.id]: { score: res2.score, max: res2.max } }).length === 0, `19: auditoría ${c.id} con un falso positivo no cumple`);
    expect(ids.has(`pl-auditoria-${c.id}`), `19: falta la misión de la auditoría ${c.id}`);
  }
}

console.log(errors ? `${errors} errores` : "Simulador de planta: 19 escenarios OK");
process.exit(errors ? 1 : 0);
