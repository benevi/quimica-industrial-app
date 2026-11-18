// Simulador didáctico de un lote ficticio (FX-101). Modelos simplificados para enseñar causa y efecto,
// no para diseñar procesos reales.

export type Scenario = "normal" | "incidencias";

export type SectionId =
  | "previas"
  | "dispensacion"
  | "carga"
  | "reaccion"
  | "filtracion"
  | "cristalizacion"
  | "centrifugacion"
  | "secado"
  | "envasado"
  | "cierre";

export const SECTIONS: { id: SectionId; title: string; equipo: string }[] = [
  { id: "previas", title: "1. Verificaciones previas", equipo: "Sala, R-101 y báscula" },
  { id: "dispensacion", title: "2. Pesada y dispensación", equipo: "Báscula de suelo" },
  { id: "carga", title: "3. Carga e inertización", equipo: "Reactor R-101" },
  { id: "reaccion", title: "4. Reacción e IPC", equipo: "Reactor R-101" },
  { id: "filtracion", title: "5. Filtración clarificante", equipo: "Filtro de cartucho F-301" },
  { id: "cristalizacion", title: "6. Cristalización", equipo: "Cristalizador R-102" },
  { id: "centrifugacion", title: "7. Centrifugación y lavado", equipo: "Centrífuga C-201" },
  { id: "secado", title: "8. Secado", equipo: "Secadero de vacío SD-301" },
  { id: "envasado", title: "9. Descarga y envasado", equipo: "Báscula y etiquetas" },
  { id: "cierre", title: "10. Cierre y revisión de QA", equipo: "Registro del lote" },
];

/** Definición de cada dato que se registra en la hoja. */
export type FieldDef = {
  id: string;
  section: SectionId;
  label: string;
  unit?: string;
  spec?: string;
  kind: "number" | "text" | "select" | "time";
  options?: string[];
  min?: number;
  max?: number;
};

export const FIELDS: FieldDef[] = [
  { id: "r101_estado", section: "previas", label: "Estado del reactor R-101 según su etiqueta", kind: "select", options: ["Limpio y dentro de tiempo", "Sucio", "Limpio pero caducado"], spec: "Limpio y dentro de tiempo" },
  { id: "bascula_id", section: "previas", label: "Báscula utilizada", kind: "select", options: ["B-05", "B-06"] },
  { id: "bascula_verif", section: "previas", label: "Verificación diaria con pesa patrón de 50,00 kg: lectura", unit: "kg", spec: "49,90 – 50,10", kind: "number", min: 49.9, max: 50.1 },
  { id: "servicios", section: "previas", label: "Servicios disponibles (glicol, vapor, N₂, vacío)", kind: "select", options: ["Sí", "No"], spec: "Sí" },

  { id: "lote_af", section: "dispensacion", label: "4-aminofenol: lote utilizado", kind: "text" },
  { id: "peso_af", section: "dispensacion", label: "4-aminofenol: peso", unit: "kg", spec: "99,5 – 100,5", kind: "number", min: 99.5, max: 100.5 },
  { id: "lote_aa", section: "dispensacion", label: "Anhídrido acético: lote utilizado", kind: "text" },
  { id: "peso_aa", section: "dispensacion", label: "Anhídrido acético: peso", unit: "kg", spec: "102,4 – 103,4", kind: "number", min: 102.4, max: 103.4 },
  { id: "lote_se", section: "dispensacion", label: "Semilla FX-101: lote utilizado", kind: "text" },
  { id: "peso_se", section: "dispensacion", label: "Semilla FX-101: peso", unit: "kg", spec: "0,48 – 0,52", kind: "number", min: 0.48, max: 0.52 },

  { id: "agua_l", section: "carga", label: "Agua purificada cargada (totalizador FQ-101)", unit: "L", spec: "295 – 305", kind: "number", min: 295, max: 305 },
  { id: "o2", section: "carga", label: "Oxígeno tras inertizar (AI-101)", unit: "%", spec: "≤ 2,0", kind: "number", max: 2.0 },

  { id: "ini_adicion", section: "reaccion", label: "Hora de inicio de la adición de anhídrido", kind: "time" },
  { id: "fin_adicion", section: "reaccion", label: "Hora de fin de la adición", kind: "time" },
  { id: "tmax_adicion", section: "reaccion", label: "Temperatura máxima durante la adición (TI-101)", unit: "°C", spec: "≤ 40", kind: "number", max: 40 },
  { id: "t_reaccion", section: "reaccion", label: "Temperatura de reacción mantenida", unit: "°C", spec: "75 – 85", kind: "number", min: 75, max: 85 },
  { id: "min_reaccion", section: "reaccion", label: "Tiempo a 75–85 °C antes del IPC", unit: "min", spec: "≥ 60", kind: "number", min: 60 },
  { id: "ipc_af", section: "reaccion", label: "IPC: 4-aminofenol residual por HPLC (último resultado)", unit: "% área", spec: "≤ 0,50", kind: "number", max: 0.5 },

  { id: "dp_filtro", section: "filtracion", label: "Presión diferencial máxima en F-301 (PDI-301)", unit: "bar", spec: "≤ 1,5", kind: "number", max: 1.5 },
  { id: "cartucho", section: "filtracion", label: "Lote del cartucho de 1 µm usado", kind: "text" },

  { id: "t_siembra", section: "cristalizacion", label: "Temperatura de siembra", unit: "°C", spec: "58 – 62", kind: "number", min: 58, max: 62 },
  { id: "min_rampa", section: "cristalizacion", label: "Duración del enfriamiento hasta 0–5 °C", unit: "min", spec: "≥ 120", kind: "number", min: 120 },
  { id: "t_final", section: "cristalizacion", label: "Temperatura final", unit: "°C", spec: "0 – 5", kind: "number", min: 0, max: 5 },

  { id: "lavados", section: "centrifugacion", label: "Lavados de la torta con agua fría (nº × 50 L)", spec: "2", kind: "number", min: 2, max: 2 },
  { id: "torta", section: "centrifugacion", label: "Peso de la torta húmeda", unit: "kg", kind: "number" },

  { id: "t_secado", section: "secado", label: "Temperatura de camisa del secadero (máxima)", unit: "°C", spec: "55 – 60", kind: "number", min: 55, max: 60 },
  { id: "vacio", section: "secado", label: "Vacío durante el secado (peor lectura)", unit: "mbar", spec: "≤ 100", kind: "number", max: 100 },
  { id: "lod", section: "secado", label: "IPC: pérdida por secado (último resultado)", unit: "%", spec: "≤ 0,5", kind: "number", max: 0.5 },

  { id: "neto", section: "envasado", label: "Peso neto total de producto seco", unit: "kg", kind: "number" },
  { id: "rendimiento", section: "envasado", label: "Rendimiento (calculado por ti)", unit: "%", spec: "80 – 95", kind: "number", min: 80, max: 95 },
  { id: "etq_emitidas", section: "envasado", label: "Etiquetas emitidas", kind: "number" },
  { id: "etq_usadas", section: "envasado", label: "Etiquetas usadas", kind: "number" },
  { id: "etq_destruidas", section: "envasado", label: "Etiquetas destruidas", kind: "number" },
  { id: "etq_devueltas", section: "envasado", label: "Etiquetas devueltas", kind: "number" },
];

export const MATERIALS = {
  af: { name: "4-aminofenol", target: 100.0, tol: 0.5, lots: [
    { lot: "AF-24115", status: "Aprobado", note: "Reanálisis: 05/2027" },
    { lot: "AF-24131", status: "Cuarentena", note: "Pendiente de análisis" },
  ] },
  aa: { name: "Anhídrido acético", target: 102.9, tol: 0.5, lots: [
    { lot: "AA-0877", status: "Caducado", note: "Caducó el 31/10/2026" },
    { lot: "AA-0921", status: "Aprobado", note: "Caduca: 03/2027" },
  ] },
  se: { name: "Semilla FX-101", target: 0.5, tol: 0.02, lots: [
    { lot: "SE-0098", status: "Aprobado", note: "Forma cristalina I" },
  ] },
} as const;
export type MaterialId = keyof typeof MATERIALS;

export const THEORETICAL_KG = 138.5; // 100,0 kg / 109,13 × 151,16
export const AA_DENSITY = 1.08; // kg/L
const AF_KMOL = 100 / 109.13;
const AA_KMOL_PER_L = AA_DENSITY / 102.09;

export type Entry = {
  value: string;
  time: number;
  late?: string;
  history: { value: string; time: number; reason: string }[];
};

export type AuditItem = { time: number; who: string; what: string };
export type Deviation = { id: string; time: number; section: SectionId; what: string; action: string };

export type EventId = "bascula" | "frio" | "filtro" | "vacio";
export type SimEvent = { active: boolean; start?: number; notified?: number; resolved?: number };

export type Point = { t: number; T: number; Tj: number };

export type Reactor = {
  T: number;
  Tj: number;
  sp: number;
  rate: number; // L/min de anhídrido
  agit: boolean;
  added: number; // L añadidos
  accum: number; // L sin reaccionar
  consumed: number; // fracción de 4-aminofenol consumida en la etapa rápida
  slow: number; // fracción en forma intermedia que necesita calor
  imp: number; // % impurezas generadas
  maxTadd: number;
  addStart?: number;
  addEnd?: number;
  interlock: boolean;
  inRange: number; // minutos a 75–85 °C tras la adición
  maxTreact: number;
  history: Point[];
  alarms: { time: number; text: string }[];
};

export type Sim = {
  version: 1;
  scenario: Scenario;
  clock: number; // minutos desde las 08:00 del 18/11
  section: number;
  maxSection: number;
  sectionStart: number[];
  sectionEnd: (number | null)[];
  entries: Record<string, Entry>;
  signatures: Partial<Record<SectionId, number>>;
  verifications: Partial<Record<MaterialId, number>>;
  audit: AuditItem[];
  deviations: Deviation[];
  events: Record<EventId, SimEvent>;
  messages: { time: number; from: string; text: string }[];
  // proceso
  scaleReading: Record<"B-05" | "B-06", number>;
  scaleUsed: "B-05" | "B-06" | null;
  lotsUsed: Partial<Record<MaterialId, string>>;
  dosed: Record<MaterialId, number>;
  water: number;
  afCharged: boolean;
  o2: number;
  inertCycles: number;
  reactor: Reactor;
  ipc: { requested: number; ready: number; value: number }[];
  filter: { dp: number; maxDpRun: number; changes: number; done: boolean; running: boolean; progress: number };
  cryst: { done: boolean; seedT: number; seeded: boolean; ramp: number; finalT: number; hold: number; quality: "buena" | "finos" };
  centri: { loaded: boolean; spun: boolean; washes: number; discharged: boolean; wetCake: number };
  dryer: { loaded: boolean; Tj: number; vacuum: number; hours: number; lod0: number; lod: number; maxTj: number; worstVac: number; samples: { time: number; value: number }[]; imp: number };
  pack: { netKg: number; drums: number; labelsIssued: number; labelsUsed: number; labelsDestroyed: number; done: boolean };
  closed: boolean;
};

const r1 = (x: number) => Math.round(x * 10) / 10;
const r2 = (x: number) => Math.round(x * 100) / 100;

export function newSim(scenario: Scenario): Sim {
  return {
    version: 1,
    scenario,
    clock: 0,
    section: 0,
    maxSection: 0,
    sectionStart: [0],
    sectionEnd: [null],
    entries: {},
    signatures: {},
    verifications: {},
    audit: [{ time: 0, who: "Sistema", what: `Orden de fabricación FX-101/26-0147 emitida (escenario: ${scenario === "normal" ? "lote normal" : "lote con incidencias"})` }],
    deviations: [],
    events: {
      bascula: { active: scenario === "incidencias" },
      frio: { active: false },
      filtro: { active: false },
      vacio: { active: false },
    },
    messages: [],
    scaleReading: { "B-05": scenario === "incidencias" ? 50.38 : 50.02, "B-06": 50.01 },
    scaleUsed: null,
    lotsUsed: {},
    dosed: { af: 0, aa: 0, se: 0 },
    water: 0,
    afCharged: false,
    o2: 20.9,
    inertCycles: 0,
    reactor: {
      T: 20, Tj: 20, sp: 20, rate: 0, agit: false, added: 0, accum: 0, consumed: 0, slow: 0, imp: 0.05,
      maxTadd: 20, interlock: false, inRange: 0, maxTreact: 20, history: [], alarms: [],
    },
    ipc: [],
    filter: { dp: 0.3, maxDpRun: 0, changes: 0, done: false, running: false, progress: 0 },
    cryst: { done: false, seedT: 60, seeded: true, ramp: 150, finalT: 3, hold: 60, quality: "buena" },
    centri: { loaded: false, spun: false, washes: 0, discharged: false, wetCake: 0 },
    dryer: { loaded: false, Tj: 60, vacuum: 60, hours: 0, lod0: 0, lod: 0, maxTj: 0, worstVac: 0, samples: [], imp: 0 },
    pack: { netKg: 0, drums: 0, labelsIssued: 0, labelsUsed: 0, labelsDestroyed: 0, done: false },
    closed: false,
  };
}

export function fmtTime(min: number) {
  const total = 8 * 60 + Math.round(min);
  const day = 18 + Math.floor(total / 1440);
  const m = total % 1440;
  const hh = String(Math.floor(m / 60)).padStart(2, "0");
  const mm = String(m % 60).padStart(2, "0");
  return `${day}/11 ${hh}:${mm}`;
}

export function parseNum(v: string | undefined): number | null {
  if (v == null || v.trim() === "") return null;
  const n = Number(v.replace(",", ".").trim());
  return Number.isFinite(n) ? n : null;
}

export function fmtNum(x: number, d = 1) {
  return x.toFixed(d).replace(".", ",");
}

export function sectionIdAt(i: number): SectionId {
  return SECTIONS[i].id;
}

function log(s: Sim, what: string, who = "Tú (operador)") {
  s.audit.push({ time: s.clock, who, what });
}

function msg(s: Sim, from: string, text: string) {
  s.messages.push({ time: s.clock, from, text });
}

// ---------- Registro en la hoja ----------

export function sectionActive(s: Sim, sec: SectionId) {
  return SECTIONS[s.section].id === sec;
}

export function record(s: Sim, fieldId: string, value: string, lateReason?: string) {
  const f = FIELDS.find((x) => x.id === fieldId);
  if (!f) return;
  const existing = s.entries[fieldId];
  if (existing) return;
  const late = !sectionActive(s, f.section);
  s.entries[fieldId] = { value, time: s.clock, history: [], late: late ? lateReason || "(sin motivo)" : undefined };
  log(s, `Registra «${f.label}»: ${value}${f.unit ? " " + f.unit : ""}${late ? " (registro tardío: " + (lateReason || "sin motivo") + ")" : ""}`);
}

export function correct(s: Sim, fieldId: string, value: string, reason: string) {
  const e = s.entries[fieldId];
  const f = FIELDS.find((x) => x.id === fieldId);
  if (!e || !f) return;
  e.history.push({ value: e.value, time: e.time, reason });
  log(s, `Corrige «${f.label}»: ${e.value} → ${value}. Motivo: ${reason}`);
  e.value = value;
  e.time = s.clock;
}

export function sign(s: Sim, sec: SectionId) {
  if (s.signatures[sec] != null) return;
  s.signatures[sec] = s.clock;
  log(s, `Firma la sección «${SECTIONS.find((x) => x.id === sec)!.title}»`);
}

export function advance(s: Sim) {
  if (s.section >= SECTIONS.length - 1) return;
  s.sectionEnd[s.section] = s.clock;
  s.clock += 5;
  s.section += 1;
  s.maxSection = Math.max(s.maxSection, s.section);
  s.sectionStart[s.section] = s.clock;
  s.sectionEnd[s.section] = null;
  log(s, `Pasa a «${SECTIONS[s.section].title}»`);
  const id = SECTIONS[s.section].id;
  if (id === "reaccion") {
    s.reactor.history = [{ t: s.clock, T: s.reactor.T, Tj: s.reactor.Tj }];
  }
}

export function notify(s: Sim, text: string) {
  log(s, `Avisa al supervisor: ${text}`);
  const ev = activeUnnotified(s);
  if (ev) {
    s.events[ev].notified = s.clock;
    if (ev === "frio") msg(s, "Supervisor", "Recibido. Para la adición si no lo has hecho, mantén la agitación y vigila la temperatura. Mantenimiento revisa el compresor de glicol: unos 15 minutos.");
    if (ev === "bascula") msg(s, "Supervisor", "No uses la B-05: la etiqueto como fuera de uso y aviso a metrología. Usa la B-06 y verifícala antes.");
    if (ev === "filtro") msg(s, "Supervisor", "Para la transferencia y cambia el cartucho según el procedimiento. Registra el lote del cartucho nuevo y la incidencia.");
    if (ev === "vacio") msg(s, "Supervisor", "Mantenimiento va a revisar la bomba de vacío y el sello de la tapa; unos 30 minutos. No subas la temperatura para compensar.");
  } else {
    msg(s, "Supervisor", "Recibido, gracias por avisar. Sigue según la hoja y registra lo que haya pasado.");
  }
}

function activeUnnotified(s: Sim): EventId | null {
  const order: EventId[] = ["frio", "filtro", "vacio", "bascula"];
  for (const id of order) {
    const e = s.events[id];
    if (e.active && e.start != null && e.notified == null) return id;
    if (id === "bascula" && e.active && e.notified == null && sectionActive(s, "previas")) return id;
  }
  return null;
}

export function openDeviation(s: Sim, what: string, action: string) {
  const id = `DEV-26-${String(310 + s.deviations.length).padStart(4, "0")}`;
  s.deviations.push({ id, time: s.clock, section: SECTIONS[s.section].id, what, action });
  log(s, `Abre la desviación ${id}: ${what}`);
  msg(s, "Calidad (QA)", `Desviación ${id} registrada. La evaluaremos antes de decidir sobre el lote.`);
}

// ---------- Verificaciones previas ----------

export function chooseScale(s: Sim, b: "B-05" | "B-06") {
  s.scaleUsed = b;
  s.clock += 3;
  log(s, `Verifica la báscula ${b} con la pesa patrón: lectura ${fmtNum(s.scaleReading[b], 2)} kg`);
  if (b === "B-05" && s.events.bascula.active) s.events.bascula.start = s.clock;
}

// ---------- Dispensación ----------

export function selectLot(s: Sim, m: MaterialId, lot: string) {
  s.lotsUsed[m] = lot;
  log(s, `Selecciona el lote ${lot} de ${MATERIALS[m].name}`);
}

export function dose(s: Sim, m: MaterialId, delta: number) {
  s.dosed[m] = Math.max(0, Math.round((s.dosed[m] + delta) * 100) / 100);
  s.clock += delta >= 1 ? 1 : 0;
}

/** Lo que marca la báscula (si está descalibrada, el error crece con la carga). */
export function scaleDisplay(s: Sim, m: MaterialId) {
  const bias = s.scaleUsed === "B-05" && s.events.bascula.active ? (s.scaleReading["B-05"] - 50) / 50 : 0;
  return r2(s.dosed[m] * (1 + bias));
}

export function requestVerification(s: Sim, m: MaterialId): string | null {
  const mat = MATERIALS[m];
  const lot = s.lotsUsed[m];
  const lotInfo = mat.lots.find((l) => l.lot === lot);
  const pesoId = `peso_${m}`;
  const loteId = `lote_${m}`;
  const shown = scaleDisplay(s, m);
  const rec = parseNum(s.entries[pesoId]?.value);
  let problem: string | null = null;
  if (!lot || !lotInfo) problem = "no has seleccionado el lote";
  else if (lotInfo.status !== "Aprobado") problem = `el lote ${lot} está en estado «${lotInfo.status}»`;
  else if (s.entries[loteId]?.value?.trim() !== lot) problem = "el lote registrado no coincide con el del envase";
  else if (rec == null) problem = "falta registrar el peso";
  else if (Math.abs(rec - shown) > 0.005) problem = `el peso registrado (${fmtNum(rec, 2)} kg) no coincide con la báscula (${fmtNum(shown, 2)} kg)`;
  else if (Math.abs(shown - mat.target) > mat.tol + 1e-9) problem = "el peso está fuera de tolerancia";
  s.clock += 2;
  if (problem) {
    log(s, `El verificador NO firma ${mat.name}: ${problem}`, "Verificador (simulado)");
    msg(s, "Verificador", `No puedo firmar la pesada de ${mat.name}: ${problem}.`);
    return problem;
  }
  s.verifications[m] = s.clock;
  log(s, `Verifica la pesada de ${mat.name} (lote ${lot}, ${fmtNum(shown, 2)} kg)`, "Verificador (simulado)");
  return null;
}

// ---------- Carga e inertización ----------

export function chargeWater(s: Sim, liters: number) {
  s.water = Math.round(s.water + liters);
  s.clock += Math.max(1, Math.round(liters / 50));
}

export function chargeAF(s: Sim) {
  if (s.afCharged) return;
  if (s.o2 > 8) {
    s.reactor.alarms.push({ time: s.clock, text: "Carga de sólido sin inertizar: riesgo de atmósfera inflamable" });
  }
  s.afCharged = true;
  s.clock += 20;
  log(s, `Carga ${fmtNum(s.dosed.af, 2)} kg de 4-aminofenol (lote ${s.lotsUsed.af ?? "?"}) por la estación de carga`);
}

export function inertCycle(s: Sim) {
  s.inertCycles += 1;
  s.o2 = r1(Math.max(0.1, s.o2 * 0.2));
  s.clock += 10;
  log(s, `Ciclo de vacío (200 mbar) y nitrógeno nº ${s.inertCycles}: O₂ = ${fmtNum(s.o2)} %`);
}

export function toggleAgit(s: Sim, on: boolean) {
  s.reactor.agit = on;
  log(s, on ? "Pone en marcha el agitador del R-101" : "Para el agitador del R-101");
}

// ---------- Reacción ----------

export function setSP(s: Sim, sp: number) {
  s.reactor.sp = Math.max(0, Math.min(95, sp));
  log(s, `Fija la consigna de temperatura TIC-101 en ${fmtNum(s.reactor.sp, 0)} °C`);
}

export function setRate(s: Sim, rate: number) {
  const r = s.reactor;
  if (r.interlock && rate > 0) {
    msg(s, "Sistema de control", "Enclavamiento activo: la válvula de adición no abre hasta que la temperatura baje de 35 °C y se rearme.");
    return;
  }
  if (rate > 0 && r.addStart == null) r.addStart = s.clock;
  r.rate = rate;
  log(s, rate > 0 ? `Abre la adición de anhídrido acético a ${rate} L/min` : "Para la adición de anhídrido acético");
}

export function resetInterlock(s: Sim) {
  if (s.reactor.interlock && s.reactor.T < 35) {
    s.reactor.interlock = false;
    log(s, "Rearma el enclavamiento de temperatura del R-101");
  }
}

export function aaTotalL(s: Sim) {
  return s.dosed.aa / AA_DENSITY;
}

/** Avanza el reactor un minuto simulado. */
export function reactorTick(s: Sim) {
  const r = s.reactor;
  const frio = s.events.frio;
  const total = aaTotalL(s);

  // Incidencia: fallo de refrigeración a mitad de la adición
  if (s.scenario === "incidencias" && !frio.active && r.added >= total * 0.45 && r.added > 0) {
    frio.active = true;
    frio.start = s.clock;
    r.alarms.push({ time: s.clock, text: "Fallo del compresor de glicol: la camisa no enfría" });
  }
  if (frio.active && frio.resolved == null && frio.start != null) {
    const fixAt = frio.notified != null ? frio.notified + 15 : frio.start + 45;
    if (s.clock >= fixAt) {
      frio.resolved = s.clock;
      r.alarms.push({ time: s.clock, text: "Refrigeración restablecida" });
      msg(s, "Mantenimiento", "Compresor de glicol rearmado. La camisa vuelve a enfriar.");
    }
  }
  const coolingDown = frio.active && frio.resolved == null;

  // Adición
  let addNow = 0;
  if (r.rate > 0 && !r.interlock) {
    addNow = Math.min(r.rate, total - r.added);
    r.added += addNow;
    r.accum += addNow;
    if (r.added >= total - 1e-6) {
      r.rate = 0;
      r.addEnd = s.clock + 1;
      log(s, "Termina la adición de anhídrido acético", "Sistema de control");
    }
  }

  // Reacción del anhídrido (rápida, exotérmica)
  const k = 0.3 * Math.pow(2, (r.T - 25) / 10) * (r.agit ? 1 : 0.25);
  const reacted = Math.min(r.accum, r.accum * k);
  r.accum -= reacted;
  const kmol = reacted * AA_KMOL_PER_L;
  const room = Math.max(0, 1 - r.consumed);
  const frac = Math.min(room, kmol / AF_KMOL);
  r.consumed += frac;
  r.slow += frac * 0.08;

  // Etapa lenta: necesita calor
  const k2 = 0.06 * Math.pow(2, (r.T - 80) / 10);
  r.slow = Math.max(0, r.slow - r.slow * Math.min(1, k2));

  // Control de temperatura (cascada simplificada)
  let tjTarget = r.sp + 2 * (r.sp - r.T);
  tjTarget = Math.max(5, Math.min(140, tjTarget));
  if (coolingDown) tjTarget = Math.max(tjTarget, r.T);
  r.Tj += (tjTarget - r.Tj) * 0.35;
  if (coolingDown) r.Tj = Math.max(r.Tj, r.T - 0.5);
  const heatIn = (r.Tj - r.T) / 16.7;
  const heatRx = reacted * 0.5;
  r.T += heatIn + heatRx;

  // Impurezas
  if (r.addEnd == null && r.T > 40) r.imp += 0.004 * (r.T - 40);
  if (r.T > 90) r.imp += 0.003 * (r.T - 90);
  if (s.o2 > 2 && r.T > 60) r.imp += 0.0005;

  s.clock += 1;

  // Alarmas y enclavamiento
  if (r.addEnd == null && r.added > 0) {
    r.maxTadd = Math.max(r.maxTadd, r.T);
    if (r.T > 40 && !r.alarms.some((a) => a.text.startsWith("TAH-101") && s.clock - a.time < 30)) {
      r.alarms.push({ time: s.clock, text: "TAH-101: temperatura alta (> 40 °C) durante la adición" });
    }
    if (r.T >= 45 && !r.interlock) {
      r.interlock = true;
      r.rate = 0;
      r.alarms.push({ time: s.clock, text: "TSHH-101: enclavamiento. Válvula de adición cerrada automáticamente" });
      log(s, "Enclavamiento TSHH-101 (T ≥ 45 °C): cierra la válvula de adición", "Sistema de control");
    }
  }
  if (r.addEnd != null) {
    r.maxTreact = Math.max(r.maxTreact, r.T);
    if (r.T >= 75 && r.T <= 85) r.inRange += 1;
  }
  r.history.push({ t: s.clock, T: r1(r.T), Tj: r1(r.Tj) });
  if (r.history.length > 600) r.history.shift();
}

export function residualAF(s: Sim) {
  const r = s.reactor;
  return Math.max(0, 1 - r.consumed) * 100 + r.slow * 100;
}

export function requestIPC(s: Sim) {
  const v = r2(Math.max(0.01, residualAF(s) * (0.97 + Math.random() * 0.06)));
  s.ipc.push({ requested: s.clock, ready: s.clock + 20, value: v });
  log(s, "Toma muestra de IPC (4-aminofenol residual) y la envía al laboratorio");
}

// ---------- Filtración ----------

export function filterStep(s: Sim) {
  const f = s.filter;
  if (f.done) return;
  f.running = true;
  f.progress = Math.min(100, f.progress + 20);
  s.clock += 10;
  if (s.scenario === "incidencias" && f.changes === 0 && f.progress >= 40) {
    f.dp = 2.1;
    if (!s.events.filtro.active) {
      s.events.filtro.active = true;
      s.events.filtro.start = s.clock;
      msg(s, "Sistema de control", "PDAH-301: presión diferencial alta en el filtro F-301.");
    }
  } else {
    f.dp = r1(0.3 + f.progress * 0.006);
  }
  f.maxDpRun = Math.max(f.maxDpRun, f.dp);
  if (f.progress >= 100) {
    f.done = true;
    f.running = false;
    log(s, "Termina la transferencia filtrada de R-101 a R-102");
  }
}

export function changeCartridge(s: Sim) {
  s.filter.changes += 1;
  s.filter.dp = 0.3;
  s.filter.running = false;
  s.clock += 25;
  if (s.events.filtro.active) s.events.filtro.resolved = s.clock;
  log(s, "Para la transferencia, cambia el cartucho del F-301 y comprueba la junta");
}

// ---------- Cristalización ----------

export function runCrystallization(s: Sim, seedT: number, seeded: boolean, ramp: number, finalT: number, hold: number) {
  const c = s.cryst;
  c.seedT = seedT;
  c.seeded = seeded;
  c.ramp = ramp;
  c.finalT = finalT;
  c.hold = hold;
  c.quality = seeded && ramp >= 120 && seedT >= 55 && seedT <= 65 ? "buena" : "finos";
  c.done = true;
  s.clock += 20 + ramp + hold;
  log(s, `Cristalización: ${seeded ? `siembra a ${seedT} °C` : "sin siembra"}, enfriamiento en ${ramp} min hasta ${finalT} °C, mantenimiento ${hold} min`);
}

// ---------- Centrifugación ----------

export function productDryKg(s: Sim) {
  const r = s.reactor;
  const conv = Math.min(1, r.consumed) - r.slow;
  const solubility = 5 + 0.5 * Math.max(0, s.cryst.finalT); // g/L, simplificado
  const motherLoss = (420 * solubility) / 1000;
  const holdBonus = s.cryst.hold >= 60 ? 0 : 1.5;
  const dry = THEORETICAL_KG * conv * 0.93 - motherLoss - holdBonus;
  return Math.max(0, dry);
}

export function centriAction(s: Sim, a: "cargar" | "centrifugar" | "lavar" | "descargar") {
  const c = s.centri;
  if (a === "cargar") { c.loaded = true; s.clock += 30; log(s, "Carga la suspensión de R-102 en la centrífuga C-201"); }
  if (a === "centrifugar") { c.spun = true; s.clock += s.cryst.quality === "finos" ? 50 : 25; log(s, "Centrifuga y escurre las aguas madre"); }
  if (a === "lavar") { c.washes += 1; s.clock += 15; log(s, `Lavado nº ${c.washes} de la torta con 50 L de agua fría`); }
  if (a === "descargar") {
    c.discharged = true;
    const moisture = s.cryst.quality === "finos" ? 0.25 : 0.13;
    c.wetCake = r1(productDryKg(s) / (1 - moisture));
    s.dryer.lod0 = moisture * 100;
    s.dryer.lod = moisture * 100;
    s.clock += 20;
    log(s, `Descarga la torta húmeda: ${fmtNum(c.wetCake)} kg`);
  }
}

// ---------- Secado ----------

export function dryerSet(s: Sim, Tj: number) {
  s.dryer.Tj = Tj;
  log(s, `Fija la temperatura de camisa del SD-301 en ${Tj} °C`);
}

export function dryerLoad(s: Sim) {
  s.dryer.loaded = true;
  s.clock += 20;
  log(s, "Carga la torta en el secadero SD-301 y aplica vacío");
}

export function dryHour(s: Sim) {
  const d = s.dryer;
  d.hours += 1;
  if (s.scenario === "incidencias" && d.hours === 2 && !s.events.vacio.active) {
    s.events.vacio.active = true;
    s.events.vacio.start = s.clock;
    msg(s, "Sistema de control", "PAH-301: el vacío del secadero ha subido a 380 mbar.");
  }
  const vac = s.events.vacio;
  if (vac.active && vac.resolved == null && vac.start != null) {
    const fixAt = vac.notified != null ? vac.notified + 30 : vac.start + 180;
    if (s.clock >= fixAt) {
      vac.resolved = s.clock;
      msg(s, "Mantenimiento", "Junta de la tapa del SD-301 sustituida. Vacío recuperado.");
    }
  }
  d.vacuum = vac.active && vac.resolved == null ? 380 : 60;
  d.worstVac = Math.max(d.worstVac, d.vacuum);
  d.maxTj = Math.max(d.maxTj, d.Tj);
  let k = 0.6 * Math.pow(2, (d.Tj - 60) / 15);
  if (d.vacuum > 100) k *= 0.3;
  d.lod = d.lod * Math.exp(-k);
  if (d.Tj > 65) d.imp += 0.01 * (d.Tj - 65);
  s.clock += 60;
}

export function lodSample(s: Sim) {
  const v = r2(s.dryer.lod * (0.97 + Math.random() * 0.06));
  s.dryer.samples.push({ time: s.clock, value: v });
  s.clock += 15;
  log(s, `Toma muestra de IPC de secado: LOD = ${fmtNum(v, 2)} %`);
  return v;
}

// ---------- Envasado ----------

export function finalImpurities(s: Sim) {
  const purge = s.cryst.quality === "buena" ? 0.4 : 0.6;
  const occl = s.cryst.quality === "buena" ? 0 : 0.03;
  const wash = 0.06 * Math.pow(0.4, Math.min(3, s.centri.washes));
  const carryAF = Math.max(0, residualAF(s) - 0.5) * 0.1;
  return r2(s.reactor.imp * purge + occl + wash + carryAF + s.dryer.imp);
}

export function finalNetKg(s: Sim) {
  const dry = productDryKg(s);
  return r1(dry * (1 + s.dryer.lod / 100) - 0.6);
}

export function doPack(s: Sim) {
  const net = finalNetKg(s);
  const drums = Math.ceil(net / 25);
  s.pack = { netKg: net, drums, labelsIssued: drums + 2, labelsUsed: drums, labelsDestroyed: 1, done: true };
  s.clock += 60;
  log(s, `Envasa ${fmtNum(net)} kg en ${drums} bidones con doble bolsa y precinto`);
  msg(s, "Almacén", `Se han emitido ${drums + 2} etiquetas para el lote. Una salió mal impresa y se destruyó; el resto de las no usadas se devuelve.`);
}

export function closeBatch(s: Sim) {
  s.sectionEnd[s.section] = s.clock;
  s.closed = true;
  log(s, "Cierra el registro del lote y lo envía a QA");
}
