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
  { id: "cierre", title: "10. Limpieza, cierre y revisión de QA", equipo: "R-101, C-201 y registro del lote" },
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

  { id: "estado_r101_fin", section: "cierre", label: "Etiqueta de estado del R-101 tras vaciarlo", kind: "select", options: ["Limpio", "Sucio", "En uso"], spec: "Sucio" },
  { id: "estado_c201_fin", section: "cierre", label: "Etiqueta de estado de la centrífuga C-201", kind: "select", options: ["Limpio", "Sucio", "En uso"], spec: "Sucio" },
  { id: "limpieza_pedida", section: "cierre", label: "Orden de limpieza de R-101 y C-201 pedida", kind: "select", options: ["Sí", "No"], spec: "Sí" },
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

/** Válvulas manuales todo/nada (on-off) que el operador abre y cierra en cada operación. */
export const VALVES = {
  "XV-101": { name: "Agua purificada al R-101", section: "carga" },
  "XV-102": { name: "Nitrógeno al R-101", section: "carga" },
  "XV-103": { name: "Vacío del R-101, por el condensador", section: "carga" },
  "XV-104": { name: "Salida del depósito D-101 (anhídrido)", section: "reaccion" },
  "XV-105": { name: "Válvula de fondo del R-101", section: "filtracion" },
  "XV-106": { name: "Entrada al cristalizador R-102", section: "filtracion" },
  "XV-201": { name: "Del fondo del R-102 a la centrífuga", section: "centrifugacion" },
  "XV-202": { name: "Agua de lavado a la centrífuga", section: "centrifugacion" },
  "XV-301": { name: "Vacío del secadero SD-301", section: "secado" },
} as const satisfies Record<string, { name: string; section: SectionId }>;
export type ValveId = keyof typeof VALVES;
export const VALVE_IDS = Object.keys(VALVES) as ValveId[];
export const valvesOf = (sec: SectionId) => VALVE_IDS.filter((v) => VALVES[v].section === sec);

export type IncidentKind =
  | "desborde_r101"
  | "disco_n2"
  | "carga_sin_inertizar"
  | "acumulacion"
  | "disco_ebullicion"
  | "fuga_impulsion"
  | "rotura_cartucho"
  | "choque_termico_r102"
  | "vibracion_c201"
  | "lavado_caliente"
  | "aguas_madres_caliente"
  | "degradacion_secado";

/** Equipo de la vista de planta donde se marca el incidente. */
export type IncidentEq = "r101" | "f301" | "r102" | "c201" | "sd301";

export type Incident = {
  id: string;
  kind: IncidentKind;
  time: number;
  section: SectionId;
  eq: IncidentEq;
  sev: "crítico" | "mayor" | "menor";
  /** true: el equipo queda fuera de servicio y la única salida es rehacer la fase. */
  critical: boolean;
  title: string;
  what: string;
  cause: string;
  safety: string;
  product: string;
  gmp: string;
  plant: string[];
  lossPct: number;
  /** Fase donde está la causa, si no es la fase en la que salta (p. ej. cristalizar en caliente). */
  redoFrom?: SectionId;
  redone?: number;
  acknowledged?: number;
  notified?: number;
};

export type EventId =
  | "bascula" | "etiqueta" | "oxigeno" | "tierra" | "agitador" | "frio" | "sonda" | "ipc" | "filtro" | "junta" | "vibracion" | "vacio" | "lod";
export type SimEvent = {
  active: boolean;
  start?: number;
  notified?: number;
  resolved?: number;
  /** Intentos de rearrancar un equipo parado por su protección antes de que lo revisen. */
  tries?: number;
  /** Litros de anhídrido añadidos con el agitador parado (incidencia del agitador). */
  addedStopped?: number;
  /** Momento en que empieza la avería, si es antes de que se note (deriva de la sonda). */
  since?: number;
  /** El equipo se aisló (válvulas cerradas) para repararlo. */
  isolated?: boolean;
};

export type Point = { t: number; T: number; Tj: number };
/** Punto de una tendencia genérica (filtro, centrífuga, secadero): tiempo y variables con nombre. */
export type TrendPt = { t: number } & Record<string, number>;

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
  /** Incidencias activas del lote (si falta, salen todas con el escenario «incidencias», como en partidas antiguas). */
  eventsOn?: Record<EventId, boolean>;
  /** Modo guiado: explica cada etapa y no tiene incidencias. */
  guided?: boolean;
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
  /** "vacio" mientras el R-101 está en vacío dentro de un ciclo de inertización. */
  inertStep: "vacio" | null;
  valves: Record<ValveId, boolean>;
  valveFindings: { time: number; section: SectionId; sev: "crítico" | "mayor" | "menor"; text: string }[];
  /** Presión manométrica del R-101 (barg) cuando entra N₂ con el reactor cerrado. */
  p101: number;
  incidents: Incident[];
  /** Incidente que tiene el lote parado hasta que el operador decida. */
  halt: string | null;
  /** Estado del lote al empezar cada fase, para poder rehacerla. */
  checkpoints: Record<number, string>;
  redos: number;
  /** % de producto perdido por incidentes (derrames, aguas madres, venteo). */
  lossPct: number;
  contam: boolean;
  degraded: boolean;
  reactor: Reactor;
  /** Muestras de IPC de fin de reacción; `min` = minutos a 75–85 °C que llevaba la reacción al tomarla. */
  ipc: { requested: number; ready: number; value: number; min?: number }[];
  filter: { dp: number; maxDpRun: number; changes: number; done: boolean; running: boolean; progress: number; history: TrendPt[] };
  cryst: { done: boolean; seedT: number; seeded: boolean; ramp: number; finalT: number; hold: number; quality: "buena" | "finos" };
  centri: { loaded: boolean; spun: boolean; washes: number; discharged: boolean; wetCake: number; history: TrendPt[] };
  dryer: { loaded: boolean; Tj: number; vacuum: number; hours: number; lod0: number; lod: number; maxTj: number; worstVac: number; samples: { time: number; value: number }[]; imp: number; history: TrendPt[] };
  pack: { netKg: number; drums: number; labelsIssued: number; labelsUsed: number; labelsDestroyed: number; done: boolean };
  closed: boolean;
};

const r1 = (x: number) => Math.round(x * 10) / 10;
const r2 = (x: number) => Math.round(x * 100) / 100;

/** Las incidencias del lote completo, en el orden en que salen, para elegirlas al empezar. */
export const EVENTS: { id: EventId; title: string; when: string }[] = [
  { id: "bascula", title: "La báscula B-05 no pasa la verificación diaria", when: "en las verificaciones previas" },
  { id: "etiqueta", title: "La etiqueta de un bidón no coincide con la orden", when: "en la pesada" },
  { id: "oxigeno", title: "El oxígeno no baja del 2 % al inertizar", when: "en la carga" },
  { id: "tierra", title: "La pinza de puesta a tierra no da continuidad", when: "en la carga del sólido" },
  { id: "agitador", title: "El agitador se para durante la adición", when: "en la reacción" },
  { id: "frio", title: "Falla el frío de la camisa durante la adición", when: "en la reacción" },
  { id: "sonda", title: "La sonda de temperatura del reactor da una lectura incoherente", when: "en la reacción" },
  { id: "ipc", title: "El control en proceso sale fuera de límite", when: "en la reacción" },
  { id: "filtro", title: "El cartucho del filtro F-301 se colmata", when: "en la filtración" },
  { id: "junta", title: "Gotea una junta del filtro F-301", when: "en la filtración" },
  { id: "vibracion", title: "La centrífuga se para por vibración alta", when: "en la centrifugación" },
  { id: "vacio", title: "Se pierde el vacío del secadero", when: "en el secado" },
  { id: "lod", title: "La pérdida por secado (LOD) no baja", when: "en el secado" },
];

/** Las cuatro incidencias de siempre: las del escenario «incidencias» y las que salen marcadas al empezar. */
export const CLASICAS: EventId[] = ["bascula", "frio", "filtro", "vacio"];

/** ¿Está activa esta incidencia en el lote? */
export function eventOn(s: Sim, id: EventId) {
  return s.eventsOn ? !!s.eventsOn[id] : s.scenario === "incidencias" && CLASICAS.includes(id);
}

export function newSim(scenario: Scenario, opts: { events?: EventId[]; guided?: boolean } = {}): Sim {
  const events = opts.guided ? [] : (opts.events ?? (scenario === "incidencias" ? CLASICAS : []));
  const s = blankSim(events.length ? "incidencias" : "normal", events);
  if (opts.guided) s.guided = true;
  s.checkpoints[0] = snapshot(s);
  return s;
}

function blankSim(scenario: Scenario, events: EventId[] = scenario === "incidencias" ? CLASICAS : []): Sim {
  const on = (id: EventId) => events.includes(id);
  return {
    version: 1,
    scenario,
    eventsOn: Object.fromEntries(EVENTS.map((e) => [e.id, on(e.id)])) as Record<EventId, boolean>,
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
    events: Object.fromEntries(EVENTS.map((e) => [e.id, { active: e.id === "bascula" && on("bascula") }])) as Record<EventId, SimEvent>,
    messages: [],
    scaleReading: { "B-05": on("bascula") ? 50.38 : 50.02, "B-06": 50.01 },
    scaleUsed: null,
    lotsUsed: {},
    dosed: { af: 0, aa: 0, se: 0 },
    water: 0,
    afCharged: false,
    o2: 20.9,
    inertCycles: 0,
    inertStep: null,
    valves: Object.fromEntries(VALVE_IDS.map((v) => [v, false])) as Record<ValveId, boolean>,
    valveFindings: [],
    p101: 0,
    incidents: [],
    halt: null,
    checkpoints: {},
    redos: 0,
    lossPct: 0,
    contam: false,
    degraded: false,
    reactor: {
      T: 20, Tj: 20, sp: 20, rate: 0, agit: false, added: 0, accum: 0, consumed: 0, slow: 0, imp: 0.05,
      maxTadd: 20, interlock: false, inRange: 0, maxTreact: 20, history: [], alarms: [],
    },
    ipc: [],
    filter: { dp: 0.3, maxDpRun: 0, changes: 0, done: false, running: false, progress: 0, history: [] },
    cryst: { done: false, seedT: 60, seeded: true, ramp: 150, finalT: 3, hold: 60, quality: "buena" },
    centri: { loaded: false, spun: false, washes: 0, discharged: false, wetCake: 0, history: [] },
    dryer: { loaded: false, Tj: 60, vacuum: 60, hours: 0, lod0: 0, lod: 0, maxTj: 0, worstVac: 0, samples: [], imp: 0, history: [] },
    pack: { netKg: 0, drums: 0, labelsIssued: 0, labelsUsed: 0, labelsDestroyed: 0, done: false },
    closed: false,
  };
}

/** Completa un lote guardado con una versión anterior del simulador (sin válvulas). */
export function migrate(s: Sim): Sim {
  if (!s.valves) s.valves = Object.fromEntries(VALVE_IDS.map((v) => [v, false])) as Record<ValveId, boolean>;
  if (!s.valveFindings) s.valveFindings = [];
  if (s.inertStep === undefined) s.inertStep = null;
  s.p101 ??= 0;
  s.incidents ??= [];
  s.halt ??= null;
  s.checkpoints ??= {};
  s.redos ??= 0;
  s.lossPct ??= 0;
  s.contam ??= false;
  s.degraded ??= false;
  s.filter.history ??= [];
  s.centri.history ??= [];
  s.dryer.history ??= [];
  // Lotes guardados antes de las incidencias nuevas: las que faltan quedan apagadas
  for (const e of EVENTS) {
    s.events[e.id] ??= { active: false };
    if (s.eventsOn) s.eventsOn[e.id] ??= false;
  }
  if (s.checkpoints[s.section] == null) s.checkpoints[s.section] = snapshot(s);
  return s;
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
  log(s, `Corrige «${f.label}»: de ${e.value} a ${value}. Motivo: ${reason}`);
  e.value = value;
  e.time = s.clock;
}

/** Campos de una sección que aún no tienen dato en la hoja */
export function missingFields(s: Sim, sec: SectionId) {
  return FIELDS.filter((f) => f.section === sec && !s.entries[f.id]);
}

export function sign(s: Sim, sec: SectionId) {
  if (s.signatures[sec] != null) return;
  const missing = missingFields(s, sec);
  if (missing.length) {
    // Firmar es declarar que lo anotado es cierto y completo: no se firma una sección con huecos
    msg(s, "Supervisor", `No firmes todavía «${SECTIONS.find((x) => x.id === sec)!.title}»: falta${missing.length > 1 ? "n" : ""} ${missing.length} dato${missing.length > 1 ? "s" : ""} por anotar (${missing.map((f) => f.label).join("; ")}). La firma va al final, cuando el trabajo está hecho y registrado.`);
    return;
  }
  s.signatures[sec] = s.clock;
  log(s, `Firma la sección «${SECTIONS.find((x) => x.id === sec)!.title}»`);
}

export function advance(s: Sim) {
  if (s.section >= SECTIONS.length - 1) return;
  const leaving = SECTIONS[s.section].id;
  const left = valvesOf(leaving).filter((v) => s.valves[v]);
  for (const v of left) {
    s.valves[v] = false;
    s.valveFindings.push({ time: s.clock, section: leaving, sev: "mayor", text: `La ${v} (${VALVES[v].name}) quedó abierta al terminar la etapa.` });
    log(s, `Cierra la ${v}, que había quedado abierta`, "Supervisor");
  }
  if (left.length) msg(s, "Supervisor", `Has dejado abierta${left.length > 1 ? "s" : ""} ${left.join(", ")}. La cierro yo. Al terminar cada operación, las válvulas que has usado se cierran.`);
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
  s.checkpoints[s.section] = snapshot(s);
}

export function notify(s: Sim, text: string) {
  log(s, `Avisa al supervisor: ${text}`);
  const pend = s.incidents.filter((i) => i.notified == null);
  if (pend.length) {
    for (const i of pend) i.notified = s.clock;
    msg(s, "Supervisor", `Recibido. Vamos a la zona. Registra ahora la desviación del incidente «${pend[pend.length - 1].title}»: qué pasó, a qué hora, qué hiciste y qué ves. Calidad decidirá qué se hace con el producto.`);
    return;
  }
  const ev = activeUnnotified(s);
  if (ev) {
    s.events[ev].notified = s.clock;
    if (ev === "frio") msg(s, "Supervisor", "Recibido. Para la adición si no lo has hecho, mantén la agitación y vigila la temperatura. Mantenimiento revisa el compresor de glicol: unos 15 minutos.");
    if (ev === "bascula") msg(s, "Supervisor", "No uses la B-05: la etiqueto como fuera de uso y aviso a metrología. Usa la B-06 y verifícala antes.");
    if (ev === "filtro") msg(s, "Supervisor", "Para la transferencia y cambia el cartucho según el procedimiento. Registra el lote del cartucho nuevo y la incidencia.");
    if (ev === "vacio") msg(s, "Supervisor", "Mantenimiento va a revisar la bomba de vacío y el sello de la tapa; unos 30 minutos. No subas la temperatura para compensar.");
    if (ev === "etiqueta") {
      // El bidón dudoso se aparta y almacén trae otro bien identificado: lo pesado de ese bidón no vale
      const e = s.events.etiqueta;
      msg(s, "Supervisor", "Bien visto. No uses ese bidón: lo apartamos con una etiqueta de «Retenido» y almacén y calidad comprueban qué ha pasado. Te traen otro bidón del lote AF-24115 bien identificado. Lo que hayas pesado del bidón dudoso no vale: devuélvelo y vuelve a pesar. Registra la incidencia.");
      s.clock += 20;
      e.resolved = s.clock;
      s.dosed.af = 0;
      delete s.verifications.af;
      msg(s, "Almacén", "Ya tienes en la sala el bidón nuevo del lote AF-24115: la etiqueta del proveedor y la de estado coinciden.");
    }
    if (ev === "oxigeno") msg(s, "Supervisor", "Para la inertización y no cargues el sólido: con oxígeno por encima del 2 % no se abre la boca de carga. Si el vacío no aguanta, entra aire por una junta. Mantenimiento la revisa (unos 20 minutos) y después repites los ciclos.");
    if (ev === "agitador") msg(s, "Supervisor", "Para la adición si no lo has hecho y no intentes rearrancar el motor. Sin agitación el anhídrido no se mezcla y se acumula: no se añade nada más hasta que el agitador vuelva a girar. Mantenimiento revisa el motor; unos 20 minutos.");
    if (ev === "tierra") msg(s, "Supervisor", "Bien hecho: sin continuidad no se carga. Un polvo que cae por la tolva se carga de electricidad estática y, sin tierra, puede saltar una chispa. Viene el electricista a revisar la pinza y el cable; unos 15 minutos. Después vuelves a comprobar y cargas.");
    if (ev === "sonda") msg(s, "Supervisor", "Bien visto. Instrumentación pasa el control de temperatura a la sonda de respaldo TI-103 mientras revisa la TI-101. Vigila la temperatura real y registra la desviación: la masa ha podido estar por encima de 85 °C.");
    if (ev === "junta") msg(s, "Supervisor", "Para la transferencia y aísla el filtro: cierra la XV-105 y la XV-106. Nada de apretar la brida con el filtro en servicio. Es solución caliente con ácido acético: aléjate del charco hasta que lo recojan con el equipo de protección. Mantenimiento cambia la junta; unos 20 minutos.");
    if (ev === "ipc") msg(s, "Supervisor", "Recibido. Es lo que prevé la hoja: mantén 75–85 °C 30 minutos más y repite el IPC. El resultado que no cumple se queda registrado; no se repite la muestra sin prolongar la reacción.");
    if (ev === "vibracion") msg(s, "Supervisor", "Haz bien en no rearrancar. Déjala parada y no abras la tapa. Mantenimiento revisa la máquina y, si es carga desequilibrada, la redistribuimos a baja velocidad; unos 20 minutos. Anota la hora, la fase y la velocidad.");
    if (ev === "lod") {
      const e = s.events.lod;
      msg(s, "Supervisor", "No subas la temperatura para compensar: degradarías el producto. Los grumos guardan el agua dentro. Rompemos el vacío con nitrógeno, abrimos y desterronamos la torta según el procedimiento, y vuelves a secar con los mismos parámetros. Registra la incidencia.");
      s.clock += 40;
      e.resolved = s.clock;
      msg(s, "Supervisor", "Torta desterronada y secadero cerrado de nuevo. Haz vacío y sigue secando a 55–60 °C; luego repite el LOD.");
    }
  } else {
    msg(s, "Supervisor", "Recibido, gracias por avisar. Sigue según la hoja y registra lo que haya pasado.");
  }
}

function activeUnnotified(s: Sim): EventId | null {
  const order: EventId[] = ["frio", "agitador", "junta", "sonda", "oxigeno", "tierra", "etiqueta", "ipc", "filtro", "vibracion", "vacio", "lod", "bascula"];
  for (const id of order) {
    const e = s.events[id];
    if (e.active && e.start != null && e.start <= s.clock && e.notified == null) return id;
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
  const e = s.events.etiqueta;
  if (m === "af" && lot === "AF-24115" && eventOn(s, "etiqueta") && !e.active) {
    e.active = true;
    e.start = s.clock;
    msg(s, "Sala de pesadas", "Al preparar el bidón de 4-aminofenol ves dos etiquetas que no cuadran: la de estado de almacén dice «AF-24115 · Aprobado», pero la del proveedor pone lote AF-24113. La orden pide AF-24115.");
  }
}

/** ¿Está el bidón de 4-aminofenol con las etiquetas cruzadas todavía en la sala? */
function labelMismatch(s: Sim, m: MaterialId) {
  const e = s.events.etiqueta;
  return m === "af" && e.active && e.resolved == null;
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
  else if (labelMismatch(s, m)) problem = "la etiqueta del proveedor del bidón (lote AF-24113) no coincide con la etiqueta de estado ni con la orden (AF-24115). Con la identidad en duda no se usa: hay que avisar";
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

// ---------- Válvulas ----------

export function toggleValve(s: Sim, v: ValveId) {
  const open = !s.valves[v];
  s.valves[v] = open;
  const j = s.events.junta;
  if (!open && j.active && j.resolved == null && !s.valves["XV-105"] && !s.valves["XV-106"]) j.isolated = true;
  passTime(s, 1);
  log(s, `${open ? "Abre" : "Cierra"} la válvula ${v} (${VALVES[v].name})`);
  if (open && ((v === "XV-102" && s.valves["XV-103"]) || (v === "XV-103" && s.valves["XV-102"]))) {
    s.valveFindings.push({ time: s.clock, section: "carga", sev: "mayor", text: "Nitrógeno y vacío abiertos a la vez en el R-101: el N₂ se va directo a la bomba de vacío." });
    msg(s, "Supervisor", "¡Cuidado! Tienes el N₂ (XV-102) y el vacío (XV-103) abiertos a la vez: el nitrógeno se va a la bomba de vacío. Nunca se abren las dos juntas: primero una, se cierra, y luego la otra.");
  }
}

// ---------- Carga e inertización ----------

export function chargeWater(s: Sim, liters: number) {
  if (!s.valves["XV-101"]) {
    msg(s, "Sistema de control", "El totalizador FQ-101 no se mueve: la válvula XV-101 de agua purificada está cerrada.");
    return;
  }
  s.water = Math.round(s.water + liters);
  passTime(s, Math.max(1, Math.round(liters / 50)));
  if (s.water > 450) raise(s, "desborde_r101", { what: `El totalizador FQ-101 marca ${s.water} L. El R-101 se ha llenado hasta la tapa y el agua ha salido por la línea de vapores hacia el condensador y la línea de vacío.` });
}

export function chargeAF(s: Sim, sinTierra = false) {
  if (s.afCharged) return;
  const g = s.events.tierra;
  if (eventOn(s, "tierra") && g.resolved == null) {
    if (g.notified != null) {
      s.clock = Math.max(s.clock, g.notified + 15);
      g.resolved = s.clock;
      msg(s, "Mantenimiento", "El cable de la pinza de tierra estaba roto por dentro, junto a la pinza. Cable sustituido; el comprobador da continuidad. Puedes cargar.");
    } else if (!sinTierra) {
      if (!g.active) {
        g.active = true;
        g.start = s.clock;
      }
      msg(s, "Estación de carga", "Conectas la pinza de tierra del bidón al punto de la tolva, pero el comprobador de tierra no da continuidad: la luz no se enciende en verde. Repites la conexión y sigue igual.");
      return;
    } else {
      g.tries = (g.tries ?? 0) + 1;
      log(s, "Carga el sólido sin continuidad en la puesta a tierra");
    }
  }
  if (s.valves["XV-103"] || s.inertStep === "vacio") {
    msg(s, "Supervisor", "No abras la boca de carga con el reactor en vacío: el polvo saldría por la línea de vacío. Rompe el vacío con N₂ y cierra la XV-103.");
    return;
  }
  if (s.p101 > 0.05) {
    msg(s, "Supervisor", `No abras la boca de carga con presión dentro: el R-101 está a ${fmtNum(s.p101, 2)} bar. Cierra la entrada de N₂ (XV-102) y deja que la presión vuelva a la atmosférica antes de abrir.`);
    return;
  }
  if (s.o2 > 2) {
    s.reactor.alarms.push({ time: s.clock, text: "Carga de sólido sin inertizar: riesgo de atmósfera inflamable" });
    raise(s, "carga_sin_inertizar", { what: `Abriste la boca de carga y empezaste a echar 4-aminofenol con un ${fmtNum(s.o2)} % de oxígeno dentro del R-101. Salta la alarma del analizador AI-101 y el supervisor para la carga.` });
    return;
  }
  passTime(s, 20);
  if (s.halt) return;
  s.afCharged = true;
  log(s, `Carga ${fmtNum(s.dosed.af, 2)} kg de 4-aminofenol (lote ${s.lotsUsed.af ?? "?"}) por la estación de carga`);
}

/** Primera mitad del ciclo de inertización: vacío a 200 mbar por la XV-103. */
export function inertVacuum(s: Sim) {
  if (s.inertStep === "vacio") return;
  if (!s.valves["XV-103"]) {
    msg(s, "Sistema de control", "La presión del R-101 no baja: la válvula de vacío XV-103 está cerrada.");
    return;
  }
  if (s.valves["XV-102"]) {
    msg(s, "Sistema de control", "La presión no baja de 1000 mbar: está entrando N₂ por la XV-102. Ciérrala para poder hacer vacío.");
    return;
  }
  const e = s.events.oxigeno;
  if (e.notified != null && e.resolved == null) {
    // Hasta que mantenimiento cambie la junta no tiene sentido seguir: se espera y se repite
    s.clock = Math.max(s.clock, e.notified + 20);
    e.resolved = s.clock;
    msg(s, "Mantenimiento", "Junta de la boca de hombre del R-101 sustituida. Prueba de vacío correcta: con todo cerrado, aguanta los 200 mbar. Ya puedes repetir los ciclos.");
  }
  s.inertStep = "vacio";
  s.p101 = 0;
  passTime(s, 5);
  log(s, "Hace vacío en el R-101 hasta 200 mbar");
  if (eventOn(s, "oxigeno") && e.resolved == null) {
    if (!e.active) {
      e.active = true;
      e.start = s.clock;
    }
    msg(s, "Sistema de control", "PI-101: el vacío no aguanta. Has bajado a 200 mbar y, con las válvulas cerradas, la presión sube sola a 300 mbar en 5 minutos: está entrando aire por alguna parte.");
  }
}

/** ¿Hay una fuga en el R-101 que mete aire durante el vacío? */
function leaking(s: Sim) {
  const e = s.events.oxigeno;
  return e.active && e.resolved == null;
}

/** Segunda mitad: rompe el vacío con nitrógeno por la XV-102. */
export function inertN2(s: Sim) {
  if (s.inertStep !== "vacio") return;
  if (s.valves["XV-103"]) {
    msg(s, "Sistema de control", "La presión no sube: el N₂ se va por la línea de vacío. Cierra la XV-103 antes de meter nitrógeno.");
    return;
  }
  if (!s.valves["XV-102"]) {
    msg(s, "Sistema de control", "No entra nitrógeno: la válvula XV-102 está cerrada.");
    return;
  }
  s.inertStep = null;
  s.inertCycles += 1;
  // Sin fugas, romper de 200 a 1000 mbar con N₂ deja la quinta parte del O₂. Con la fuga entran 100 mbar de aire
  // (20,9 % de O₂) en cada vacío: el O₂ se queda en torno a 2,6 % por muchos ciclos que hagas.
  s.o2 = leaking(s) ? r1((200 * s.o2 + 100 * 20.9) / 1000) : r1(Math.max(0.1, s.o2 * 0.2));
  // Estos 5 minutos el nitrógeno llena el vacío: el reactor termina a presión atmosférica, sin sobrepresión.
  // Si después se deja la XV-102 abierta con el reactor cerrado, la presión sí sube (passTime).
  s.clock += 5;
  s.p101 = 0;
  log(s, `Rompe el vacío con N₂ (ciclo nº ${s.inertCycles}): O₂ = ${fmtNum(s.o2)} %`);
}

export function toggleAgit(s: Sim, on: boolean) {
  const trip = s.events.agitador;
  if (on && trip.active && trip.resolved == null) {
    trip.tries = (trip.tries ?? 0) + 1;
    msg(s, "Sistema de control", "El agitador M-101 no arranca: la protección térmica del motor está disparada. No se rearma desde el panel: lo revisa mantenimiento.");
    log(s, "Intenta arrancar el agitador del R-101 (protección del motor disparada)");
    return;
  }
  if (on && !s.reactor.agit && s.reactor.accum > 12) {
    // Arrancar la agitación con reactivo acumulado es lo que dispara la reacción fuera de control
    s.reactor.alarms.push({ time: s.clock, text: `Arranque del agitador con ${fmtNum(s.reactor.accum)} L de anhídrido acumulado` });
    msg(s, "Supervisor", `Has arrancado el agitador con ${fmtNum(s.reactor.accum)} L de anhídrido sin reaccionar dentro. Todo eso va a reaccionar ahora de golpe. Con reactivo acumulado no se rearranca por cuenta propia: se para la adición, se avisa y decide el responsable.`);
  }
  s.reactor.agit = on;
  log(s, on ? "Pone en marcha el agitador del R-101" : "Para el agitador del R-101");
}

// ---------- Reacción ----------

export function setSP(s: Sim, sp: number) {
  s.reactor.sp = Math.max(0, Math.min(120, sp));
  log(s, `Fija la consigna de temperatura TIC-101 en ${fmtNum(s.reactor.sp, 0)} °C`);
}

export function setRate(s: Sim, rate: number) {
  const r = s.reactor;
  if (r.interlock && rate > 0) {
    msg(s, "Sistema de control", "Enclavamiento activo: la válvula de adición no abre hasta que la temperatura baje de 35 °C y se rearme.");
    return;
  }
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
  if (s.halt) return;
  const r = s.reactor;
  const frio = s.events.frio;
  const total = aaTotalL(s);

  // Incidencia: fallo de refrigeración a mitad de la adición
  if (eventOn(s, "frio") && !frio.active && r.added >= total * 0.45 && r.added > 0) {
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

  // Incidencia: salta la protección térmica del motor del agitador a un tercio de la adición
  const trip = s.events.agitador;
  if (eventOn(s, "agitador") && !trip.active && r.addEnd == null && r.added >= total * 0.3 && r.added > 0) {
    trip.active = true;
    trip.start = s.clock;
    r.agit = false;
    r.alarms.push({ time: s.clock, text: "XA-101: disparo de la protección térmica del motor del agitador M-101. Agitación parada" });
  }
  if (trip.active && trip.resolved == null && trip.start != null) {
    const fixAt = trip.notified != null ? trip.notified + 20 : trip.start + 60;
    if (s.clock >= fixAt) {
      trip.resolved = s.clock;
      msg(s, "Mantenimiento", `Motor del agitador revisado: un rodamiento se había calentado y lo hemos cambiado; la protección está rearmada. Antes de arrancar mira cuánto anhídrido queda sin reaccionar: ahora hay ${fmtNum(r.accum)} L. Con mucho acumulado no se arranca sin el visto bueno del responsable.`);
    }
  }

  // Adición
  let addNow = 0;
  if (r.rate > 0 && !r.interlock && s.valves["XV-104"]) {
    if (r.addStart == null) r.addStart = s.clock;
    addNow = Math.min(r.rate, total - r.added);
    r.added += addNow;
    r.accum += addNow;
    // Dos minutos de margen para reaccionar; lo que entre después con el agitador parado cuenta como error
    if (trip.active && trip.resolved == null && trip.start != null && s.clock - trip.start >= 2) trip.addedStopped = (trip.addedStopped ?? 0) + addNow;
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
  // sin 4-aminofenol en el reactor no hay con qué reaccionar: no se forma producto
  const frac = s.afCharged ? Math.min(room, kmol / AF_KMOL) : 0;
  r.consumed += frac;
  r.slow += frac * 0.08;

  // Etapa lenta: necesita calor
  // Con la incidencia «ipc» la etapa lenta va más despacio de lo habitual: a los 60 min en rango el IPC no cumple
  // y hacen falta los 30 min más que prevé la hoja.
  const k2 = 0.06 * Math.pow(2, (r.T - 80) / 10) * (eventOn(s, "ipc") ? 0.55 : 1);
  r.slow = Math.max(0, r.slow - r.slow * Math.min(1, k2));

  // Incidencia «sonda»: a los 15 min de mantenimiento a temperatura, la TI-101 empieza a leer de menos (deriva).
  // El lazo controla con lo que lee, así que la masa real se calienta por encima de 85 °C sin que TI-101 lo muestre.
  const probe = s.events.sonda;
  if (eventOn(s, "sonda") && probe.since == null && r.addEnd != null && r.inRange >= 15) probe.since = s.clock;
  if (probe.since != null && !probe.active && Math.abs(probeOffset(s)) > 3) {
    probe.active = true;
    probe.start = s.clock;
    r.alarms.push({ time: s.clock, text: "TDAH-101: discrepancia entre TI-101 y la sonda de respaldo TI-103 (> 3 °C)" });
  }
  if (probe.active && probe.resolved == null && probe.notified != null && s.clock >= probe.notified + 10) {
    probe.resolved = s.clock;
    msg(s, "Instrumentación", "La TI-101 tenía la conexión del cabezal con humedad y leía de menos. Sustituida y comprobada con un termómetro patrón. El lazo vuelve a la TI-101.");
  }

  // Control de temperatura (cascada simplificada), con lo que lee la sonda que manda en el lazo
  const Tmeas = probe.notified != null ? r.T : r.T + probeOffset(s);
  let tjTarget = r.sp + 2 * (r.sp - Tmeas);
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

  // Incidentes provocados por la operación
  if (r.added > 0 && !r.agit && r.accum > 12 && !s.incidents.some((i) => i.kind === "acumulacion" && s.clock - i.time < 30)) {
    raise(s, "acumulacion", { what: `Hay ${fmtNum(r.accum)} L de anhídrido acético dentro del reactor sin reaccionar porque el agitador está parado. La temperatura no sube, pero el calor está «guardado».` });
  }
  if (r.T >= 100) {
    raise(s, "disco_ebullicion", { what: `La masa ha llegado a ${fmtNum(r.T)} °C. El agua hierve, la presión sube por encima de 0,5 bar y rompe el disco de ruptura PSE-101: vapores de ácido acético salen por el venteo al lavador de gases.` });
    r.T = 99;
    r.rate = 0;
  }

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
  r.history.push({ t: s.clock, T: r1(tiMasa(s)), Tj: r1(r.Tj) });
  if (r.history.length > 600) r.history.shift();
}

/** Error de la TI-101 (°C) con la incidencia «sonda»: deriva hasta 10 °C por debajo de la temperatura real. */
export function probeOffset(s: Sim) {
  const e = s.events.sonda;
  if (!e || e.since == null || e.resolved != null) return 0;
  return -Math.min(10, 0.5 * (s.clock - e.since));
}

/** Lo que marca la TI-101 (la sonda de la masa que ve el operador). La TI-103 de respaldo marca la real. */
export function tiMasa(s: Sim) {
  return s.reactor.T + probeOffset(s);
}

export function residualAF(s: Sim) {
  const r = s.reactor;
  return Math.max(0, 1 - r.consumed) * 100 + r.slow * 100;
}

export function requestIPC(s: Sim) {
  const v = r2(Math.max(0.01, residualAF(s) * (0.97 + Math.random() * 0.06)));
  s.ipc.push({ requested: s.clock, ready: s.clock + 20, value: v, min: s.reactor.inRange });
  log(s, "Toma muestra de IPC (4-aminofenol residual) y la envía al laboratorio");
  const e = s.events.ipc;
  if (eventOn(s, "ipc") && !e.active && v > 0.5) {
    // La incidencia «aparece» cuando llega el resultado del laboratorio
    e.active = true;
    e.start = s.clock + 20;
  }
}

// ---------- Filtración ----------

export function filterStep(s: Sim) {
  const f = s.filter;
  if (f.done) return;
  if (!s.valves["XV-105"]) {
    msg(s, "Sistema de control", "La bomba gira pero no hay caudal: la válvula de fondo XV-105 del R-101 está cerrada.");
    return;
  }
  if (!s.valves["XV-106"]) {
    raise(s, "fuga_impulsion");
    return;
  }
  if (f.dp > 1.5) {
    raise(s, "rotura_cartucho", { what: `Seguiste transfiriendo con ${fmtNum(f.dp)} bar de presión diferencial (límite 1,5 bar). El cartucho de 1 µm se ha roto: la presión cae de golpe a 0,1 bar y las partículas pasan al R-102.` });
    f.dp = 0.1;
    f.history.push({ t: s.clock, dp: f.dp, pct: f.progress });
    s.contam = true;
    return;
  }
  const j = s.events.junta;
  if (j.active && j.resolved == null && j.notified != null) {
    if (!j.isolated) {
      msg(s, "Mantenimiento", "No podemos cambiar la junta con el filtro en servicio: aísla el F-301 cerrando la XV-105 y la XV-106.");
      return;
    }
    s.clock = Math.max(s.clock, j.notified + 20);
    j.resolved = s.clock;
    msg(s, "Mantenimiento", "Junta de la brida del portacartuchos cambiada y derrame recogido. Prueba sin fugas: puedes seguir la transferencia.");
  }
  if (!f.history.length) f.history.push({ t: s.clock, dp: f.dp, pct: f.progress });
  f.running = true;
  f.progress = Math.min(100, f.progress + 20);
  s.clock += 10;
  if (eventOn(s, "filtro") && f.changes === 0 && f.progress >= 40) {
    f.dp = 2.1;
    if (!s.events.filtro.active) {
      s.events.filtro.active = true;
      s.events.filtro.start = s.clock;
      msg(s, "Sistema de control", "PDAH-301: presión diferencial alta en el filtro F-301.");
    }
  } else {
    f.dp = r1(0.3 + f.progress * 0.006);
  }
  if (eventOn(s, "junta") && f.progress >= 60 && !f.done) {
    if (!j.active) {
      j.active = true;
      j.start = s.clock;
      msg(s, "Sala de filtración", "Gotea la brida del portacartuchos del F-301: cae solución caliente al suelo y se está formando un charco. Huele a vinagre (ácido acético).");
    } else if (j.resolved == null && j.notified == null) {
      // Seguir transfiriendo con la fuga: se pierde producto y el charco crece
      j.tries = (j.tries ?? 0) + 1;
      s.lossPct += 1;
    }
  }
  f.maxDpRun = Math.max(f.maxDpRun, f.dp);
  f.history.push({ t: s.clock, dp: f.dp, pct: f.progress });
  if (f.progress >= 100) {
    f.done = true;
    f.running = false;
    log(s, "Termina la transferencia filtrada de R-101 a R-102");
  }
}

export function changeCartridge(s: Sim) {
  if (s.valves["XV-105"] || s.valves["XV-106"]) {
    msg(s, "Supervisor", "Antes de abrir el filtro hay que aislarlo: cierra la XV-105 y la XV-106. Si no, al abrir la carcasa sale producto caliente.");
    return;
  }
  s.filter.changes += 1;
  s.filter.dp = 0.3;
  s.filter.running = false;
  s.filter.history.push({ t: s.clock, dp: 0, pct: s.filter.progress });
  s.clock += 25;
  s.filter.history.push({ t: s.clock, dp: 0.3, pct: s.filter.progress });
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
  if (ramp < 30) {
    raise(s, "choque_termico_r102", { what: `Programaste el enfriamiento de 80 °C a ${finalT} °C en solo ${ramp} min. La camisa pasa a glicol a −10 °C con la masa a 80 °C: el vidrio no aguanta la diferencia y se agrieta.` });
    return;
  }
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
  const dry = (THEORETICAL_KG * conv * 0.93 - motherLoss - holdBonus) * (1 - Math.min(100, s.lossPct ?? 0) / 100);
  return Math.max(0, dry);
}

export function centriAction(s: Sim, a: "cargar" | "centrifugar" | "lavar" | "descargar", washT = 5) {
  const c = s.centri;
  const need = (v: ValveId, open: boolean, why: string) => {
    if (s.valves[v] === open) return false;
    msg(s, "Supervisor", why);
    return true;
  };
  if (a === "cargar" && need("XV-201", true, "No llega suspensión a la centrífuga: abre la XV-201 (fondo del R-102).")) return;
  if (a === "centrifugar" && s.valves["XV-201"]) {
    raise(s, "vibracion_c201");
    return;
  }
  if (a === "lavar" && need("XV-202", true, "No sale agua de lavado: abre la XV-202.")) return;
  if (a === "descargar" && need("XV-202", false, "Cierra el agua de lavado XV-202 antes de descargar la torta.")) return;
  // Tendencia: velocidad del bombo (rpm) y aguas madres + lavados acumulados (L)
  const ml = () => c.history[c.history.length - 1]?.ml ?? 0;
  const pt = (rpm: number, litres = ml()) => c.history.push({ t: s.clock, rpm, ml: litres });
  if (a === "cargar") { pt(0, 0); c.loaded = true; s.clock += 30; pt(400); log(s, "Carga la suspensión de R-102 en la centrífuga C-201"); }
  if (a === "centrifugar" && vibrationTrip(s)) return;
  if (a === "centrifugar" && s.cryst.finalT > 10) {
    const kg = (420 * (5 + 0.5 * s.cryst.finalT)) / 1000;
    raise(s, "aguas_madres_caliente", { what: `La cristalización terminó a ${s.cryst.finalT} °C. A esa temperatura queda mucho producto disuelto: unos ${fmtNum(kg)} kg se van con las aguas madres al tanque de residuos (a 3 °C serían ${fmtNum((420 * 6.5) / 1000)} kg).` });
  }
  if (a === "centrifugar") { pt(1200); c.spun = true; s.clock += s.cryst.quality === "finos" ? 50 : 25; pt(1200, 420); log(s, "Centrifuga y escurre las aguas madre"); }
  if (a === "lavar") {
    c.washes += 1;
    pt(1200);
    s.clock += 15;
    pt(1200, ml() + 50);
    log(s, `Lavado nº ${c.washes} de la torta con 50 L de agua a ${washT} °C`);
    if (washT >= 20) {
      const loss = washT >= 50 ? 18 : 4;
      raise(s, "lavado_caliente", { what: `Has lavado la torta con agua a ${washT} °C en vez de agua fría (≤ 5 °C). El producto es bastante soluble en agua templada: se ha disuelto cerca de un ${loss} % de la torta y se ha ido a aguas madres.`, lossPct: loss, sev: washT >= 50 ? "mayor" : "menor" });
    } else if (c.washes > 2) {
      s.lossPct += 1.5;
    }
  }
  if (a === "descargar") {
    c.discharged = true;
    const moisture = s.cryst.quality === "finos" ? 0.25 : 0.13;
    c.wetCake = r1(productDryKg(s) / (1 - moisture));
    s.dryer.lod0 = moisture * 100;
    s.dryer.lod = moisture * 100;
    pt(60);
    s.clock += 20;
    pt(0);
    log(s, `Descarga la torta húmeda: ${fmtNum(c.wetCake)} kg`);
  }
}

/**
 * Incidencia «vibracion»: al subir a 1200 rpm salta el enclavamiento de vibración y la centrífuga se para.
 * Devuelve true si la máquina no ha llegado a centrifugar.
 */
function vibrationTrip(s: Sim) {
  const e = s.events.vibracion;
  if (!eventOn(s, "vibracion") || e.resolved != null) return false;
  const c = s.centri;
  const pt = (rpm: number) => c.history.push({ t: s.clock, rpm, ml: c.history[c.history.length - 1]?.ml ?? 0 });
  if (e.notified != null) {
    // Mantenimiento revisa y redistribuye la torta a baja velocidad; después se centrifuga con normalidad
    s.clock = Math.max(s.clock, e.notified + 20);
    e.resolved = s.clock;
    msg(s, "Mantenimiento", "Revisada la C-201: la máquina está bien, era la torta mal repartida. La hemos redistribuido girando a baja velocidad con la alimentación cerrada. Puedes volver a centrifugar.");
    return false;
  }
  if (e.active) e.tries = (e.tries ?? 0) + 1;
  else {
    e.active = true;
    e.start = s.clock;
  }
  pt(400);
  s.clock += 3;
  pt(900);
  s.clock += 2;
  pt(0);
  s.clock += 10;
  log(s, "Centrífuga C-201 parada por el enclavamiento de vibración VSHH-201", "Sistema de control");
  msg(s, "Sistema de control", e.tries
    ? "VSHH-201: vuelve a saltar la vibración al subir de velocidad. Rearrancar sin saber la causa no la arregla: avisa y espera a que la revisen."
    : "VSHH-201: vibración muy alta al subir de 400 a 900 rpm. El enclavamiento corta y la centrífuga frena hasta pararse. La torta sigue dentro.");
  return true;
}

// ---------- Secado ----------

export function dryerSet(s: Sim, Tj: number) {
  s.dryer.Tj = Tj;
  log(s, `Fija la temperatura de camisa del SD-301 en ${Tj} °C`);
}

export function dryerLoad(s: Sim) {
  s.dryer.loaded = true;
  s.clock += 20;
  s.dryer.history.push({ t: s.clock, Tp: 15, vac: 1013, Tj: s.dryer.Tj });
  log(s, "Carga la torta en el secadero SD-301 y cierra la tapa");
}

export function dryHour(s: Sim) {
  const d = s.dryer;
  if (!s.valves["XV-301"]) {
    msg(s, "Sistema de control", "PI-301 marca 1013 mbar: no hay vacío porque la XV-301 está cerrada. Sin vacío el agua apenas se evapora.");
    return;
  }
  d.hours += 1;
  if (eventOn(s, "vacio") && d.hours === 2 && !s.events.vacio.active) {
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
  // Incidencia «lod»: la torta se apelmaza en grumos que guardan el agua dentro; el LOD se queda en torno al 2 %
  const lumps = eventOn(s, "lod") && s.events.lod.resolved == null;
  d.lod = Math.max(d.lod * Math.exp(-k), lumps ? Math.min(d.lod, 2) : 0);
  if (d.Tj > 65) d.imp += 0.01 * (d.Tj - 65);
  s.clock += 60;
  d.history.push({ t: s.clock, Tp: r1(dryerProductT(d)), vac: d.vacuum, Tj: d.Tj });
  if (d.Tj >= 75) {
    s.degraded = true;
    raise(s, "degradacion_secado", { what: `Has secado una hora con la camisa a ${d.Tj} °C (rango validado 55–60 °C). Por la mirilla el producto se ve amarillento y apelmazado: se está degradando.` });
  }
}

/** Temperatura de ebullición del agua a una presión dada (ecuación de Antoine, mbar → °C). */
export function waterBoilT(mbar: number) {
  const mmHg = Math.max(1, mbar) * 0.75006;
  return 1730.63 / (8.07131 - Math.log10(mmHg)) - 233.426;
}

/**
 * TI-303, temperatura del producto en el secadero. Mientras la torta está húmeda, el agua que se evapora la
 * mantiene cerca de la ebullición del agua a esa presión (unos 36 °C a 60 mbar). Cuando queda poca agua deja de
 * enfriarse y sube hacia la camisa: es la señal de que el secado va terminando (pero el LOD lo confirma).
 */
export function dryerProductT(d: Sim["dryer"]) {
  const plateau = Math.min(d.Tj, waterBoilT(d.vacuum));
  return d.Tj - (d.Tj - plateau) * Math.min(1, d.lod / 2);
}

export function lodSample(s: Sim) {
  const v = r2(s.dryer.lod * (0.97 + Math.random() * 0.06));
  s.dryer.samples.push({ time: s.clock, value: v });
  s.clock += 15;
  log(s, `Toma muestra de IPC de secado: LOD = ${fmtNum(v, 2)} %`);
  const e = s.events.lod;
  if (eventOn(s, "lod") && !e.active && s.dryer.lod <= 2 && v > 0.5) {
    e.active = true;
    e.start = s.clock;
    msg(s, "Laboratorio", `LOD = ${fmtNum(v, 2)} %. Al sacar la muestra se ve la torta apelmazada en grumos, algunos del tamaño de una nuez: por fuera están secos, pero el agua de dentro no sale.`);
  }
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

/** Datos del lote cerrado que se pasan al ERP (lote FX-101, misión 10 del simulador de ERP). */
export function erpHandoff(s: Sim, qa: "Liberable" | "Pendiente de desviaciones" | "Rechazado / en investigación") {
  const mat: Record<MaterialId, string> = { af: "RM-4001", aa: "RM-4002", se: "RM-4003" };
  const lotes: Record<string, string> = {};
  for (const m of Object.keys(mat) as MaterialId[]) if (s.lotsUsed[m]) lotes[mat[m]] = s.lotsUsed[m]!;
  const ipc = s.ipc.filter((x) => x.ready <= s.clock).at(-1)?.value ?? NaN;
  const lod = s.dryer.samples.at(-1)?.value ?? NaN;
  return { lote: "26-0147", netKg: Math.round((s.pack?.netKg ?? 0) * 10) / 10, lotes, lab: { AF: Math.round(ipc * 100) / 100, LOD: Math.round(lod * 100) / 100 }, qa, at: new Date().toISOString() };
}

export function closeBatch(s: Sim) {
  s.sectionEnd[s.section] = s.clock;
  s.closed = true;
  log(s, "Cierra el registro del lote y lo envía a QA");
}

// ---------- Incidentes, consecuencias y rehacer la fase ----------

type IncidentDef = Omit<Incident, "id" | "kind" | "time" | "section" | "redone" | "acknowledged" | "notified">;

export const INCIDENTS: Record<IncidentKind, IncidentDef> = {
  desborde_r101: {
    eq: "r101", sev: "mayor", critical: true, lossPct: 0,
    title: "Desbordamiento del R-101",
    what: "",
    cause: "Se siguió cargando agua con la XV-101 abierta sin vigilar el totalizador FQ-101. La hoja pide 300 L.",
    safety: "Líquido en la línea de vapores, el condensador y la bomba de vacío: la bomba puede romperse y el agua sale por el lavador de gases. Suelo mojado y riesgo de resbalón.",
    product: "La concentración ya no es la de la receta. Con tanta agua el producto no cristaliza bien y se pierde mucho en aguas madres.",
    gmp: "Desviación. Hay que vaciar el reactor, revisar y limpiar la línea de vapores y el condensador, y Calidad decide si el agua contaminó otras líneas.",
    plant: ["Cerrar la XV-101 de inmediato.", "Parar la bomba de vacío si está en marcha.", "Avisar al supervisor.", "Vaciar el reactor por el fondo a residuos y revisar la línea de vapores antes de volver a cargar."],
  },
  disco_n2: {
    eq: "r101", sev: "crítico", critical: true, lossPct: 0,
    title: "Sobrepresión con nitrógeno: rotura del disco PSE-101",
    what: "",
    cause: "Se dejó la XV-102 de nitrógeno abierta con el reactor cerrado (vacío XV-103 cerrado). El N₂ sigue entrando y la presión sube hasta romper el disco de ruptura, tarado a 0,5 bar.",
    safety: "El disco ha hecho su trabajo: proteger el reactor de vidrio, que no aguanta más de 0,5 bar. Sale N₂ por el venteo: en un local cerrado el nitrógeno desplaza el oxígeno y puede asfixiar.",
    product: "El reactor queda abierto a la atmósfera por el venteo: entra aire y se pierde la inertización.",
    gmp: "Incidente de seguridad y desviación. El disco roto se sustituye con permiso de trabajo y mantenimiento; luego se repite la inertización.",
    plant: ["Cerrar la XV-102.", "Alejarse del venteo y avisar al supervisor.", "Mantenimiento cambia el disco PSE-101 (permiso de trabajo).", "Repetir la inertización completa."],
  },
  carga_sin_inertizar: {
    eq: "r101", sev: "crítico", critical: true, lossPct: 0,
    title: "Carga de sólido sin inertizar",
    what: "",
    cause: "Se cargó el 4-aminofenol en polvo sin hacer los ciclos de vacío y nitrógeno. El oxígeno estaba por encima del 2 %.",
    safety: "Polvo fino + oxígeno + una chispa de electricidad estática = riesgo de explosión de polvo o fogonazo en la boca de carga. Es de los accidentes más graves en plantas de API.",
    product: "Con oxígeno, el 4-aminofenol se oxida y el producto sale coloreado.",
    gmp: "Parada de seguridad, desviación e investigación. La carga no continúa hasta inertizar.",
    plant: ["Parar la carga y cerrar la boca de carga.", "Avisar al supervisor.", "Hacer los ciclos de vacío y N₂ hasta O₂ ≤ 2,0 %.", "Solo entonces volver a cargar."],
  },
  acumulacion: {
    eq: "r101", sev: "mayor", critical: false, lossPct: 0,
    title: "Acumulación de anhídrido sin reaccionar",
    what: "",
    cause: "Se añadió anhídrido con el agitador parado. Sin agitación el reactivo no se mezcla, no reacciona y se acumula.",
    safety: "Es el inicio típico de una reacción fuera de control: si ahora arrancas el agitador, todo lo acumulado reacciona de golpe y la temperatura se dispara.",
    product: "Puntos calientes y más impurezas.",
    gmp: "Desviación: la adición no se hizo según la hoja (agitación obligatoria).",
    plant: ["Parar la adición (FV-103 a cero).", "No arrancar el agitador por tu cuenta: avisar al supervisor.", "El responsable decide, según el procedimiento, si se rearranca la agitación y cómo (con la camisa enfriando al máximo y vigilando la temperatura).", "Continuar la adición solo cuando lo acumulado haya reaccionado y con autorización."],
  },
  disco_ebullicion: {
    eq: "r101", sev: "crítico", critical: true, lossPct: 12,
    title: "Sobretemperatura: ebullición y rotura del disco PSE-101",
    what: "",
    cause: "La consigna de temperatura se subió por encima de lo que permite la hoja (75–85 °C). La masa llega a 100 °C y el agua hierve.",
    safety: "Los vapores calientes de ácido acético salen por el venteo al lavador de gases. Riesgo de quemaduras y de exposición a vapores irritantes.",
    product: "Se pierde producto arrastrado por el venteo (≈ 12 %) y se forman impurezas por el exceso de temperatura.",
    gmp: "Incidente de seguridad y desviación. Cambio del disco con permiso de trabajo. Calidad decide si el lote se puede reprocesar.",
    plant: ["Bajar la consigna y enfriar con la camisa.", "Despejar la zona del venteo y avisar al supervisor.", "Mantenimiento sustituye el disco PSE-101.", "El lote queda retenido hasta la decisión de Calidad."],
  },
  fuga_impulsion: {
    eq: "f301", sev: "mayor", critical: true, lossPct: 4,
    title: "Sobrepresión en la impulsión: fuga en el filtro F-301",
    what: "Arrancaste la transferencia con la XV-106 de entrada al R-102 cerrada. La bomba empuja contra una válvula cerrada, la presión sube y cede la junta de la tapa del F-301.",
    cause: "Alineación de válvulas incompleta: se abrió el fondo del R-101 (XV-105) pero no el destino (XV-106).",
    safety: "Sale solución a 80 °C por la junta: riesgo de quemaduras y de salpicaduras en los ojos.",
    product: "Se derrama ≈ 4 % de la solución, que ya no se recupera.",
    gmp: "Desviación. Limpieza de la zona, cambio de junta y comprobación del filtro antes de seguir.",
    plant: ["Parar la bomba y cerrar la XV-105.", "Apartarse de la fuga y avisar al supervisor.", "Recoger el derrame con el kit de derrames y EPI.", "Cambiar la junta, alinear todas las válvulas y repetir la transferencia."],
  },
  rotura_cartucho: {
    eq: "f301", sev: "crítico", critical: true, lossPct: 0,
    title: "Rotura del cartucho del filtro F-301",
    what: "",
    cause: "Se siguió filtrando con la presión diferencial por encima del límite de 1,5 bar en vez de parar y cambiar el cartucho.",
    safety: "Golpe de presión en el filtro.",
    product: "Las partículas que el filtro tenía que retener pasan al R-102: el producto final tendría partículas visibles.",
    gmp: "Desviación. La solución del R-102 hay que volver a filtrarla con un cartucho nuevo (reproceso aprobado por Calidad).",
    plant: ["Parar la transferencia y aislar el filtro (XV-105 y XV-106).", "Avisar al supervisor.", "Cambiar el cartucho y comprobar la integridad del nuevo.", "Volver a filtrar."],
  },
  choque_termico_r102: {
    eq: "r102", sev: "crítico", critical: true, lossPct: 100,
    title: "Choque térmico: rotura del vidrio del R-102",
    what: "",
    cause: "Enfriamiento brusco. Un reactor de vidrio no soporta una diferencia de temperatura muy grande entre la camisa y la masa.",
    safety: "El vidrio se agrieta y sale la suspensión caliente. Riesgo de cortes y quemaduras.",
    product: "El lote se pierde: se derrama al cubeto del reactor.",
    gmp: "Incidente grave, desviación e investigación. El R-102 queda fuera de servicio hasta su reparación.",
    plant: ["Parar la camisa.", "Evacuar la zona y avisar al supervisor.", "Contener el derrame en el cubeto.", "No volver a usar el equipo hasta que mantenimiento lo revise."],
  },
  vibracion_c201: {
    eq: "c201", sev: "mayor", critical: true, lossPct: 6,
    title: "Vibración alta en la centrífuga: parada por VSHH-201",
    what: "Aceleraste a la velocidad de centrifugado con la alimentación XV-201 todavía abierta. Cargar con la cesta girando despacio es lo normal, pero al subir a 1200 rpm la suspensión siguió entrando: la cesta se sobrellenó, la torta quedó desigual y la centrífuga empezó a vibrar hasta que saltó el enclavamiento de vibración.",
    cause: "No se cerró la alimentación antes de acelerar a la velocidad de centrifugado.",
    safety: "Una cesta desequilibrada a alta velocidad puede dañar los rodamientos o romperse. Por eso existe el enclavamiento VSHH-201.",
    product: "Parte de la suspensión rebosa y sale con las aguas madres (≈ 6 % de producto).",
    gmp: "Desviación. Revisión mecánica de la centrífuga antes de volver a usarla.",
    plant: ["Cerrar la XV-201.", "No rearmar hasta que la cesta esté parada.", "Avisar al supervisor y a mantenimiento.", "Descargar, revisar y volver a cargar."],
  },
  lavado_caliente: {
    eq: "c201", sev: "mayor", critical: false, lossPct: 0,
    title: "Producto perdido a aguas madres por lavar con agua templada",
    what: "",
    cause: "La hoja pide lavar con agua fría (≤ 5 °C). Con agua templada o caliente el producto se disuelve.",
    safety: "Sin riesgo de seguridad.",
    product: "El producto disuelto se va al tanque de aguas madres: menos rendimiento.",
    gmp: "Desviación: lavado fuera de lo establecido. El rendimiento saldrá bajo.",
    plant: ["Usar agua de lavado fría.", "Avisar al supervisor.", "Anotar en la hoja la temperatura real del agua usada."],
  },
  aguas_madres_caliente: {
    eq: "c201", sev: "mayor", critical: false, lossPct: 0, redoFrom: "cristalizacion",
    title: "Producto perdido a aguas madres: cristalización terminada en caliente",
    what: "",
    cause: "La temperatura final de cristalización estaba por encima de 0–5 °C. Cuanto más caliente, más producto queda disuelto en el líquido.",
    safety: "Sin riesgo de seguridad.",
    product: "Menos rendimiento. Lo disuelto se va con las aguas madres.",
    gmp: "Desviación por parámetro fuera de rango y rendimiento bajo.",
    plant: ["Avisar al supervisor.", "Volver a la cristalización: enfriar la suspensión a 0–5 °C y mantener antes de centrifugar."],
  },
  degradacion_secado: {
    eq: "sd301", sev: "mayor", critical: false, lossPct: 0,
    title: "Degradación térmica del producto en el secadero",
    what: "",
    cause: "Temperatura de camisa muy por encima del rango validado (55–60 °C).",
    safety: "Sin riesgo inmediato, aunque los productos degradados pueden desprender vapores.",
    product: "El producto cambia de color y aumentan las impurezas: no cumplirá la especificación de aspecto.",
    gmp: "Desviación y probable resultado fuera de especificación (OOS) en el análisis final.",
    plant: ["Bajar la camisa a 55–60 °C.", "Avisar al supervisor.", "Tomar muestra para que el laboratorio evalúe la degradación."],
  },
};

/** Avanza el reloj y aplica lo que pasa mientras tanto (por ahora: presión del R-101 con N₂). */
function passTime(s: Sim, minutes: number) {
  for (let i = 0; i < minutes; i++) {
    s.clock += 1;
    if (s.halt) continue;
    const cerrado = sectionActive(s, "carga") && s.valves["XV-102"] && !s.valves["XV-103"] && s.inertStep !== "vacio";
    if (!cerrado) continue;
    const before = s.p101;
    s.p101 = r2(s.p101 + 0.06);
    if (before < 0.3 && s.p101 >= 0.3) {
      msg(s, "Sistema de control", "PAH-101: presión alta en el R-101 (0,3 bar). Sigue entrando nitrógeno por la XV-102.");
    }
    if (s.p101 >= 0.5) {
      raise(s, "disco_n2", { what: `La presión del R-101 ha llegado a ${fmtNum(s.p101, 2)} bar con la XV-102 abierta. Rompe el disco de ruptura PSE-101 y el nitrógeno sale por el venteo.` });
      s.p101 = 0;
      s.o2 = 20.9;
    }
  }
}

/** Dispara un incidente: queda registrado y el lote se para hasta que el operador decida. */
export function raise(s: Sim, kind: IncidentKind, extra: Partial<Pick<Incident, "what" | "lossPct" | "sev">> = {}) {
  if (s.halt) return;
  const sec = SECTIONS[s.section].id;
  if (s.incidents.some((i) => i.kind === kind && i.section === sec && i.redone == null)) return;
  const def = INCIDENTS[kind];
  const inc: Incident = {
    ...def,
    ...extra,
    what: extra.what ?? def.what,
    id: `INC-${String(s.incidents.length + 1).padStart(2, "0")}`,
    kind,
    time: s.clock,
    section: sec,
  };
  s.incidents.push(inc);
  s.lossPct = Math.min(100, s.lossPct + inc.lossPct);
  s.halt = inc.id;
  s.reactor.rate = 0;
  log(s, `INCIDENTE ${inc.id}: ${inc.title}`, "Sistema de control");
  msg(s, "Sistema de control", `⚠ ${inc.title}.`);
}

export function currentIncident(s: Sim): Incident | null {
  return s.halt ? s.incidents.find((i) => i.id === s.halt) ?? null : null;
}

/** Seguir adelante asumiendo las consecuencias (solo si el equipo sigue en servicio). */
export function acceptIncident(s: Sim) {
  const inc = currentIncident(s);
  if (!inc || inc.critical) return;
  inc.acknowledged = s.clock;
  s.halt = null;
  log(s, `Decide seguir con el lote tras el incidente ${inc.id}`);
}

function snapshot(s: Sim): string {
  const { checkpoints: _c, incidents: _i, audit: _a, messages: _m, deviations: _d, ...rest } = s;
  void _c; void _i; void _a; void _m; void _d;
  return JSON.stringify(rest);
}

/**
 * Vuelve al estado del lote al empezar una fase (por defecto, la actual). Si es una fase anterior,
 * se anula todo lo hecho desde entonces. El historial (audit trail, mensajes, incidentes) se conserva.
 */
export function redoPhase(s: Sim, index = s.section) {
  const cp = s.checkpoints[index];
  if (!cp || index > s.section) return;
  const sec = SECTIONS[index];
  const why = currentIncident(s);
  for (const i of s.incidents) {
    if (i.redone == null && SECTIONS.findIndex((x) => x.id === i.section) >= index) i.redone = s.clock;
  }
  const checkpoints: Record<number, string> = {};
  for (const [k, v] of Object.entries(s.checkpoints)) if (Number(k) <= index) checkpoints[Number(k)] = v;
  const keep = {
    checkpoints, incidents: s.incidents, audit: s.audit, messages: s.messages, deviations: s.deviations,
    clock: s.clock, redos: s.redos + 1,
  };
  // Lo anotado en las fases que se repiten se anula, pero no desaparece: queda en el audit trail
  const from = index;
  for (const f of FIELDS) {
    const e = s.entries[f.id];
    if (e && SECTIONS.findIndex((x) => x.id === f.section) >= from) {
      keep.audit.push({ time: s.clock, who: "Tú (operador)", what: `Anulado por repetición de la fase: «${f.label}» = ${e.value}${f.unit ? " " + f.unit : ""} (anotado a las ${fmtTime(e.time)})` });
    }
  }
  // El producto que se perdió físicamente (derrames, venteos, aguas madres) no vuelve por repetir la fase
  const lost = s.lossPct;
  Object.assign(s, JSON.parse(cp) as Sim, keep);
  s.lossPct = Math.max(s.lossPct ?? 0, lost ?? 0);
  s.halt = null;
  s.clock = keep.clock + 30;
  s.sectionStart[s.section] = s.clock;
  if (sec.id === "reaccion") s.reactor.history = [{ t: s.clock, T: s.reactor.T, Tj: s.reactor.Tj }];
  log(s, `Rehace la fase «${sec.title}» desde el principio${why ? ` tras el incidente ${why.id}` : ""} (30 min de limpieza y preparación). Los datos anotados en esta fase se anulan.`);
  msg(s, "Supervisor", `De acuerdo, repetimos «${sec.title}». Recuerda: en planta, repetir una etapa es un reproceso y necesita una desviación aprobada por Calidad. Lo que ya se derramó o se perdió no se recupera, y lo anotado en el primer intento se conserva anulado, no se borra.`);
}
