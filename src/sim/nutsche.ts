/**
 * Segundo proceso del simulador: aislamiento del producto didáctico FX-202 en un filtro-secador Nutsche (FD-401).
 * En un solo equipo se filtra con presión de N₂, se lava la torta, se sopla, se seca a vacío y se descarga.
 * Incluye un modo «relevo de turno»: recibes el lote a medias, con una nota del turno anterior que no cuadra.
 * Todo es ficticio y simplificado: equipos, códigos, lotes y números.
 */

import type { TrendPt } from "./engine";

export type NValve = "XV-401" | "XV-402" | "XV-403" | "XV-404" | "XV-405" | "XV-406";

export const N_VALVES: Record<NValve, string> = {
  "XV-401": "Fondo del R-201 → FD-401 (suspensión)",
  "XV-402": "Nitrógeno a presión → FD-401",
  "XV-403": "Salida de filtrado → tanque de aguas madres",
  "XV-404": "Etanol frío de lavado → FD-401",
  "XV-405": "Vacío del FD-401 (por el condensador)",
  "XV-406": "Válvula de descarga lateral",
};
export const N_VALVE_IDS = Object.keys(N_VALVES) as NValve[];

export type NStepId = "carga" | "filtrado" | "lavado1" | "lavado2" | "soplado" | "secado" | "descarga";

/** Pasos de la hoja del FD-401, con lo que pide cada uno. */
export const N_STEPS: { id: NStepId; title: string; spec: string }[] = [
  { id: "carga", title: "1. Cargar la suspensión del R-201", spec: "Antes de nada: equipo inertizado (O₂ ≤ 2 %) y toma de tierra conectada, porque la suspensión va en etanol, que es inflamable. Después, 800 L. Agitador arriba. Abrir XV-401; cerrarla al terminar." },
  { id: "filtrado", title: "2. Filtrar con N₂", spec: "XV-402 y XV-403 abiertas. Presión 0,5–1,5 barg. Parar cuando el líquido llegue a la torta: no dejar que se seque." },
  { id: "lavado1", title: "3. Primer lavado", spec: "100 L de etanol frío (≤ 5 °C) por la XV-404 y filtrar." },
  { id: "lavado2", title: "4. Segundo lavado", spec: "Otros 100 L y filtrar. La torta no debe agrietarse entre lavados." },
  { id: "soplado", title: "5. Soplar la torta con N₂", spec: "Dos soplados de 10 min para escurrir el etanol." },
  { id: "secado", title: "6. Secar a vacío", spec: "Cerrar N₂ y filtrado. Abrir vacío XV-405. Camisa 45–50 °C. Las 2 primeras horas sin agitar; agitar a ratos cuando la torta ya no esté pastosa (LOD < 12 %). LOD final ≤ 0,5 %." },
  { id: "descarga", title: "7. Romper vacío y descargar", spec: "Cerrar XV-405, romper vacío con N₂ a 0 barg, agitador abajo girando, abrir XV-406." },
];

export type NFinding = { sev: "crítico" | "mayor" | "menor"; text: string };

export type NState = {
  version: 1;
  mode: "normal" | "relevo";
  lot: string;
  clock: number; // minutos desde las 06:00 del 20/11
  valves: Record<NValve, boolean>;
  sp: number; // consigna del regulador de N₂ (barg)
  p: number; // presión en el FD-401 (barg; negativo = vacío)
  r201L: number; // suspensión que queda en el R-201
  liquidL: number; // líquido por encima de la torta
  cakeL: number; // volumen de torta formada
  filtrateL: number; // FQ-403
  washL: number; // FQ-404
  washes: number;
  cracked: boolean;
  compacted: boolean;
  blows: number;
  agitDown: boolean;
  agitOn: boolean;
  lumps: boolean;
  Tj: number;
  hours: number;
  lod: number;
  imp: number;
  samples: { time: number; value: number }[];
  discharged: boolean;
  productKg: number;
  supervisorTold: boolean;
  findings: NFinding[];
  /** Equipo inertizado y con toma de tierra comprobada antes de recibir la suspensión en etanol */
  inerted?: boolean;
  log: { t: number; who: string; text: string }[];
  history: TrendPt[];
  handover: { answers: Record<string, string> | null } | null;
  closed: boolean;
};

const SLURRY_L = 800;
const CAKE_L = 200; // ~120 kg de sólido
const SOLID_KG = 120;

export function fmtClock(min: number) {
  const total = 6 * 60 + Math.round(min);
  const day = 20 + Math.floor(total / 1440);
  const m = total % 1440;
  return `${day}/11 ${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`;
}

const r1 = (x: number) => Math.round(x * 10) / 10;
const r2 = (x: number) => Math.round(x * 100) / 100;
export const fmt = (x: number, d = 1) => x.toFixed(d).replace(".", ",");

function log(s: NState, text: string, who = "OP") {
  s.log.push({ t: s.clock, who, text });
}
function find(s: NState, sev: NFinding["sev"], text: string) {
  if (!s.findings.some((f) => f.text === text)) s.findings.push({ sev, text });
}
function note(s: NState, text: string, who = "Sistema de control") {
  log(s, text, who);
}

/** Ebullición del etanol a una presión dada (Antoine, mbar → °C). */
export function ethanolBoilT(mbar: number) {
  const mmHg = Math.max(1, mbar) * 0.75006;
  return 1642.89 / (8.20417 - Math.log10(mmHg)) - 230.3;
}

export const mbarAbs = (p: number) => Math.round((p + 1.013) * 1000);

/** TI-402: temperatura del producto. Mientras hay etanol que evaporar se queda cerca de su ebullición; luego sube hacia la camisa. */
export function productT(s: NState) {
  if (s.hours === 0) return 5;
  const plateau = Math.min(s.Tj, ethanolBoilT(mbarAbs(s.p)));
  return s.Tj - (s.Tj - plateau) * Math.min(1, s.lod / 3);
}

function blank(mode: NState["mode"]): NState {
  return {
    version: 1, mode, lot: mode === "relevo" ? "26-0207" : "26-0205", clock: 0,
    valves: Object.fromEntries(N_VALVE_IDS.map((v) => [v, false])) as Record<NValve, boolean>,
    sp: 1.0, p: 0, r201L: SLURRY_L, liquidL: 0, cakeL: 0, filtrateL: 0, washL: 0, washes: 0,
    cracked: false, compacted: false, blows: 0, agitDown: false, agitOn: false, lumps: false,
    Tj: 20, hours: 0, lod: 35, imp: 0.4, samples: [], discharged: false, productKg: 0, supervisorTold: false,
    findings: [], log: [], history: [], handover: null, closed: false, inerted: false,
  };
}

function point(s: NState) {
  s.history.push({ t: s.clock, p: r2(s.p), Tp: r1(productT(s)), Tj: s.Tj });
}

/** Actualiza la presión según las válvulas abiertas. */
function settle(s: NState) {
  const n2 = s.valves["XV-402"];
  const vac = s.valves["XV-405"];
  if (n2 && vac) {
    s.p = -0.4;
    find(s, "mayor", "Nitrógeno (XV-402) y vacío (XV-405) abiertos a la vez: el N₂ se va a la bomba de vacío y no se controla la presión.");
  } else if (vac) s.p = -0.96;
  else if (n2) s.p = s.sp;
}

/** Pasa el tiempo: si hay N₂ soplando sobre una torta sin líquido antes de terminar los lavados, se agrieta. */
function passTime(s: NState, min: number) {
  s.clock += min;
  settle(s);
  if (s.valves["XV-402"] && s.valves["XV-403"] && s.p > 0.2 && s.cakeL > 0 && s.liquidL <= 0 && s.washes < 2 && !s.cracked) {
    s.cracked = true;
    note(s, "La torta se ha quedado sin líquido con el N₂ soplando: se ha secado por arriba y se ha agrietado. Los lavados se irán por las grietas.");
    find(s, "mayor", `Torta agrietada antes de terminar los lavados (${s.washes} de 2 hechos): el lavado pasa por las grietas y no limpia las impurezas.`);
  }
}

export function newNutsche(mode: NState["mode"] = "normal"): NState {
  const s = blank(mode);
  if (mode === "normal") {
    point(s);
    return s;
  }
  // Relevo: el turno de mañana dejó el lote a medias. Se reproduce lo que hizo.
  const who = "OP turno mañana";
  inert(s, who);
  s.valves["XV-401"] = true;
  for (let i = 0; i < 4; i++) transfer(s, who);
  s.valves["XV-401"] = false;
  s.valves["XV-402"] = true;
  s.valves["XV-403"] = true;
  settle(s);
  for (let i = 0; i < 20 && s.liquidL > 0; i++) filterStep(s, who);
  s.valves["XV-404"] = true;
  wash(s, who);
  s.valves["XV-404"] = false;
  for (let i = 0; i < 20 && s.liquidL > 0; i++) filterStep(s, who);
  // …y se fue con el N₂ abierto. La nota dice otra cosa.
  s.clock = Math.max(s.clock, 8 * 60);
  log(s, "Entrega el turno. Nota de relevo en el libro.", who);
  s.handover = { answers: null };
  s.history = s.history.slice(-6);
  return s;
}

export const HANDOVER_NOTE = [
  "Lote 26-0207 en el FD-401.",
  "Filtrado hecho y 2 lavados hechos.",
  "Falta soplar con N₂ y secar.",
  "N₂ (XV-402) cerrado. Todo OK, sin incidencias.",
];

export const HANDOVER_QUESTIONS: { id: string; q: string; options: string[]; correct: string; why: string }[] = [
  {
    id: "lavados",
    q: "¿Cuántos lavados lleva de verdad la torta?",
    options: ["2, como dice la nota", "1", "Ninguno"],
    correct: "1",
    why: "El totalizador de lavado FQ-404 marca 100 L y el registro solo tiene un lavado. Cada lavado es de 100 L: falta el segundo. Manda lo que dicen el registro y los instrumentos, no la nota.",
  },
  {
    id: "valvula",
    q: "¿Qué no coincide con la nota en el panel?",
    options: ["La XV-402 de N₂ está abierta y hay 1 bar en el filtro", "La XV-401 está abierta", "Nada, todo coincide"],
    correct: "La XV-402 de N₂ está abierta y hay 1 bar en el filtro",
    why: "La nota dice N₂ cerrado, pero la XV-402 está abierta y el PI-401 marca 1,0 barg. Con la torta sin líquido por encima, el N₂ la está secando y puede agrietarla antes del segundo lavado.",
  },
  {
    id: "primero",
    q: "¿Qué haces primero?",
    options: [
      "Seguir la nota: soplar y empezar a secar",
      "Cerrar la XV-402, avisar al supervisor de la discrepancia y hacer el 2.º lavado",
      "No tocar nada hasta que vuelva el compañero",
    ],
    correct: "Cerrar la XV-402, avisar al supervisor de la discrepancia y hacer el 2.º lavado",
    why: "Primero se pone el equipo en un estado seguro (cerrar el N₂ para que la torta no se agriete). Después se avisa: una nota de relevo que no cuadra con el registro es una incidencia. Y se sigue la hoja: falta el segundo lavado.",
  },
];

export function answerHandover(s: NState, answers: Record<string, string>) {
  if (!s.handover) return;
  s.handover.answers = answers;
  const ok = HANDOVER_QUESTIONS.filter((q) => answers[q.id] === q.correct).length;
  log(s, `Recibe el relevo: revisa nota, registro y panel (${ok}/${HANDOVER_QUESTIONS.length} bien)`);
}

// ---------- Acciones ----------

export function toggleValve(s: NState, v: NValve) {
  s.valves[v] = !s.valves[v];
  log(s, `${s.valves[v] ? "Abre" : "Cierra"} la ${v} (${N_VALVES[v]})`);
  // Al cerrar el vacío la presión se queda donde está hasta romperlo con N₂.
  if (v === "XV-406" && s.valves[v] && (s.p < -0.1 || s.p > 0.2)) {
    s.valves[v] = false;
    note(s, s.p < 0
      ? "La descarga no se abre con el equipo a vacío: entraría aire de golpe y el polvo iría hacia la bomba. Cierra la XV-405 y rompe el vacío con N₂ a 0 barg."
      : `Con ${fmt(s.p)} barg dentro, al abrir la descarga el polvo sale a chorro. Deja la presión a 0 barg antes de abrir.`, "Supervisor");
  }
  settle(s);
}

export function setSp(s: NState, sp: number) {
  s.sp = sp;
  log(s, `Ajusta el regulador de N₂ PCV-402 a ${fmt(sp)} barg`);
  if (sp > 1.5 && !s.discharged) {
    find(s, "mayor", `Presión de N₂ de ${fmt(sp)} barg: la hoja permite 0,5–1,5 barg. Con más presión la torta se compacta y luego cuesta más lavarla y secarla.`);
  }
  settle(s);
}

/** Paso previo a la carga: inertizar el FD-401 y comprobar la toma de tierra. */
export function inert(s: NState, who = "OP") {
  if (s.inerted) return;
  s.inerted = true;
  passTime(s, 15);
  log(s, "Inertiza el FD-401 con ciclos de vacío y nitrógeno (O₂ 1,2 %) y comprueba la toma de tierra", who);
}

export function transfer(s: NState, who = "OP") {
  if (s.r201L <= 0) return;
  if (!s.inerted) {
    note(s, "No cargues todavía: la suspensión va en etanol, que es inflamable. Primero se inertiza el equipo con nitrógeno, se comprueba el oxígeno y se conecta la toma de tierra.", "Supervisor");
    return;
  }
  if (!s.valves["XV-401"]) {
    note(s, "La bomba del R-201 gira pero no llega nada: la XV-401 está cerrada.");
    return;
  }
  if (s.agitDown) {
    note(s, "Sube el agitador antes de cargar: si está abajo, la suspensión lo bloquea y se puede doblar la pala.", "Supervisor");
    return;
  }
  const l = Math.min(200, s.r201L);
  s.r201L -= l;
  s.liquidL += l * ((SLURRY_L - CAKE_L) / SLURRY_L);
  s.cakeL += l * (CAKE_L / SLURRY_L);
  passTime(s, 10);
  log(s, `Transfiere ${l} L de suspensión del R-201 al FD-401`, who);
  point(s);
}

/** Filtra 10 minutos con N₂ (o sopla si ya no queda líquido). */
export function filterStep(s: NState, who = "OP") {
  if (!s.valves["XV-403"]) {
    passTime(s, 10);
    note(s, "La presión sube pero no sale filtrado: la XV-403 está cerrada.");
    point(s);
    return;
  }
  if (!s.valves["XV-402"] || s.p <= 0.2) {
    note(s, "Sin presión de N₂ el filtrado casi no avanza. Abre la XV-402 con el regulador a 0,5–1,5 barg.");
    return;
  }
  if (s.sp > 1.5) s.compacted = true;
  const rate = 120 * Math.min(1.5, s.p) * (s.compacted ? 0.7 : 1);
  if (s.liquidL > 0) {
    const out = Math.min(s.liquidL, rate);
    s.liquidL = r1(s.liquidL - out);
    s.filtrateL = r1(s.filtrateL + out);
    // Lavado: al pasar el etanol por la torta arrastra las impurezas
    log(s, `Filtra 10 min a ${fmt(s.p)} barg: salen ${Math.round(out)} L`, who);
    s.clock += 10;
    settle(s);
    if (s.liquidL <= 0) note(s, "LI-401: el líquido ha llegado a la superficie de la torta.");
  } else {
    passTime(s, 10);
    if (s.washes >= 2) {
      s.blows += 1;
      s.lod = s.blows === 1 ? 26 : s.compacted ? 24 : 20;
      log(s, `Sopla la torta con N₂ 10 min (soplado ${s.blows})`, who);
    } else {
      log(s, "Sopla N₂ sobre la torta sin líquido", who);
    }
  }
  point(s);
}

export function wash(s: NState, who = "OP") {
  if (!s.valves["XV-404"]) {
    note(s, "No entra etanol: la XV-404 está cerrada.");
    return;
  }
  if (s.cakeL <= 0 || s.washes >= 2) return;
  if (s.liquidL > 20) {
    note(s, "Todavía hay aguas madres por encima de la torta. Filtra hasta que el líquido llegue a la torta y entonces lava.", "Supervisor");
    return;
  }
  s.washes += 1;
  s.washL += 100;
  s.liquidL += 100;
  s.imp *= s.cracked ? 0.9 : 0.35;
  passTime(s, 10);
  log(s, `Lavado ${s.washes}: añade 100 L de etanol frío`, who);
  point(s);
}

export function setTj(s: NState, t: number) {
  s.Tj = t;
  log(s, `Fija la camisa del FD-401 a ${t} °C`);
}

export function setAgit(s: NState, down: boolean, on: boolean) {
  if (on && !down) {
    note(s, "El agitador solo gira abajo, dentro de la torta.", "Supervisor");
    return;
  }
  s.agitDown = down;
  s.agitOn = on;
  log(s, `Agitador ${down ? "abajo" : "arriba"}${on ? ", girando a 5 rpm a ratos" : ", parado"}`);
  if (on && s.blows > 0 && s.lod > 12 && !s.discharged && !s.lumps) {
    s.lumps = true;
    note(s, "SI-401: el par del agitador se dispara. La torta todavía está pastosa y se están formando bolas que luego no secan por dentro.");
    find(s, "menor", "Se agitó la torta cuando aún estaba pastosa (LOD > 12 %): se forman bolas y el secado se alarga.");
  }
}

export function dryHour(s: NState) {
  if (s.blows < 2) {
    note(s, "Antes de secar hay que terminar los lavados y soplar la torta dos veces.", "Supervisor");
    return;
  }
  if (!s.valves["XV-405"]) {
    note(s, "PI-401 sin vacío: abre la XV-405. Sin vacío el etanol apenas se evapora.");
    return;
  }
  if (s.valves["XV-403"]) find(s, "menor", "Se secó con la salida de filtrado XV-403 abierta: el vacío tira también del tanque de aguas madres.");
  s.hours += 1;
  let k = 0.6 * Math.pow(2, (s.Tj - 50) / 15);
  if (!s.agitOn) k *= 0.6;
  if (s.lumps) k *= 0.5;
  if (s.compacted) k *= 0.8;
  s.lod = r2(s.lod * Math.exp(-k));
  if (s.Tj > 50) {
    s.imp += 0.008 * (s.Tj - 50);
    find(s, s.Tj >= 60 ? "crítico" : "mayor", `Secado con la camisa a ${s.Tj} °C (la hoja permite 45–50 °C): el FX-202 se degrada con calor.`);
  }
  passTime(s, 60);
  log(s, "Seca 1 hora a vacío");
  point(s);
}

export function lodSample(s: NState) {
  if (s.hours === 0) return;
  const v = r2(Math.max(0.05, s.lod * (0.96 + Math.random() * 0.08)));
  s.samples.push({ time: s.clock, value: v });
  passTime(s, 20);
  log(s, `Muestra de LOD: ${fmt(v, 2)} %`);
  point(s);
}

export function tellSupervisor(s: NState, text: string) {
  s.supervisorTold = true;
  log(s, `Avisa al supervisor: ${text}`);
  log(s, "Recibido. Lo anoto como incidencia del relevo. Sigue la hoja y deja todo registrado.", "Supervisor");
}

export function discharge(s: NState) {
  if (!s.valves["XV-406"]) {
    note(s, "Abre la válvula de descarga XV-406.", "Supervisor");
    return;
  }
  if (!s.agitDown || !s.agitOn) {
    note(s, "Baja el agitador y ponlo a girar: es el que empuja el producto hacia la descarga.", "Supervisor");
    return;
  }
  const last = s.samples[s.samples.length - 1];
  if (!last) find(s, "crítico", "Se descargó sin muestra de LOD: no hay prueba de que el producto estuviera seco.");
  else if (last.value > 0.5) find(s, "crítico", `Se descargó con LOD ${fmt(last.value, 2)} % (límite 0,5 %): producto húmedo.`);
  s.discharged = true;
  s.productKg = r1(SOLID_KG * 0.985 * (1 + s.lod / 100));
  passTime(s, 40);
  log(s, `Descarga ${fmt(s.productKg)} kg de FX-202 en bidones`);
  point(s);
}

export function closeBatch(s: NState) {
  const open = N_VALVE_IDS.filter((v) => s.valves[v]);
  if (open.length) find(s, "menor", `Válvulas abiertas al cerrar el lote: ${open.join(", ")}.`);
  if (s.mode === "relevo" && !s.supervisorTold) find(s, "mayor", "La nota de relevo no cuadraba con el registro y no se avisó al supervisor.");
  s.closed = true;
  log(s, "Cierra el registro del FD-401 y lo envía a QA");
}

/** Paso de la hoja en el que está el lote. */
export function currentStep(s: NState): NStepId {
  if (s.r201L > 0) return "carga";
  if (s.washes === 0) return s.liquidL > 0 ? "filtrado" : "lavado1";
  if (s.washes === 1) return s.liquidL > 0 ? "lavado1" : "lavado2";
  if (s.liquidL > 0) return "lavado2";
  if (s.blows < 2) return "soplado";
  if (!s.discharged) {
    const last = s.samples[s.samples.length - 1];
    return last && last.value <= 0.5 && !s.valves["XV-405"] ? "descarga" : "secado";
  }
  return "descarga";
}

export function results(s: NState) {
  const imp = r2(s.imp);
  const lod = s.samples.length ? s.samples[s.samples.length - 1].value : r2(s.lod);
  const aspect = s.Tj >= 60 ? "Amarillento" : s.lumps ? "Polvo blanco con grumos" : "Polvo blanco fino";
  return [
    { name: "Impurezas totales (HPLC)", spec: "≤ 0,10 %", value: `${fmt(imp, 2)} %`, ok: imp <= 0.1 },
    { name: "Pérdida por secado", spec: "≤ 0,5 %", value: `${fmt(lod, 2)} %`, ok: lod <= 0.5 },
    { name: "Aspecto", spec: "Polvo blanco", value: aspect, ok: aspect.startsWith("Polvo blanco") && !s.lumps },
  ];
}

export function migrateN(s: NState): NState {
  s.history ??= [];
  s.findings ??= [];
  // partidas guardadas antes de existir este paso: si ya había empezado la carga, se da por hecho
  s.inerted ??= s.r201L < SLURRY_L;
  return s;
}
