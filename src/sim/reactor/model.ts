// Simulador del reactor vitrificado R-204 (etapa ficticia del intermedio AX-22).
// Modelo físico simplificado pero coherente: balances de materia y energía resueltos segundo a segundo,
// con los mismos números que la lección «El reactor a fondo» (nivel 12). Proceso, producto y equipos son ficticios.
// Los parámetros y de dónde sale cada uno están en docs/simulador-reactor.md.

/* ───────────────────────────── Parámetros ───────────────────────────── */

export const P = {
  // Recipiente
  volNominal: 6.0, // m³ (6000 L)
  volTotal: 6.5, // m³ de gas + líquido, contando cúpula, tubuladuras y condensador
  diametro: 1.8, // m
  volFondo: 0.47, // m³ que caben en el fondo abombado
  areaFondo: 2.8, // m² de camisa en el fondo
  alturaCamisa: 1.6, // m de virola con camisa
  volMinAgitacion: 0.5, // m³ (500 L): por debajo el agitador no cubre la turbina
  // Transferencia de calor (lección: U = 300 W/(m²·K) de ejemplo)
  U0: 300, // W/(m²·K) a 90 rpm, pared limpia
  rpmRef: 90,
  ensuciamiento: 1, // 1 = limpio
  UAperdidas: 15, // W/K al ambiente
  tAmbiente: 20, // °C
  // Unidad de termorregulación (TCU) de la camisa
  cJacket: 0.6e6, // J/K del fluido de camisa y su circuito (unos 150 kg de agua)
  qCalorMax: 60e3, // W: potencia máxima de calefacción
  tJacketMax: 140, // °C
  UAfrio: 700, // W/K del intercambiador de frío
  tAguaTorre: 15, // °C
  tGlicol: -10, // °C
  dTmax: 50, // K: diferencia máxima camisa-masa del vitrificado (lo fija el fabricante; aquí 50 como en la lección)
  // Propiedades (lección: cp 1,7 kJ/(kg·K) y densidad 0,87 kg/L)
  cpSol: 1700, // J/(kg·K) de la solución de AX-21 en tolueno
  cpB: 2000, // J/(kg·K) del reactivo B
  rhoSol: 870, // kg/m³
  rhoB: 1100, // kg/m³
  mmTolueno: 0.09214, // kg/mol
  hVap: 360e3, // J/kg, calor de vaporización del tolueno cerca de su ebullición
  // Antoine del tolueno (mmHg, °C), valores de libro de texto: ebulle a 110,6 °C a 760 mmHg
  antA: 6.95464,
  antB: 1344.8,
  antC: 219.482,
  // Reacción AX-21 + B → AX-22 (seudoprimer orden en B, AX-21 en exceso)
  kRef: 0.1 / 60, // s⁻¹ a 70 °C (vida media unos 7 min)
  tRef: 70,
  ea: 90e3, // J/mol
  dHr: 250e3, // J/kg de B que reacciona. Con la carga de B a 20 °C, el neto a 70 °C es 150 kJ/kg, como en la lección
  tFeed: 20, // °C del reactivo B en su depósito
  // Impurezas
  selImp: 0.001, // fracción de B que acaba en impureza a 70 °C
  selImpEscala: 6, // K: cada 6 °C por encima de 70 la fracción se multiplica por e
  kDegReflujo: 0.0005 / 3600, // s⁻¹: degradación del producto a reflujo (0,05 % por hora)
  // Condensador
  UAcond: 1670, // W/K: unos 150 kW con 90 K de diferencia
  tAguaCond: 15, // °C
  // Gases
  R: 8.314,
  pAtm: 1.01325, // bar a
  pN2Red: 4.0, // bar g del nitrógeno de red
  flujoN2: 2.0, // mol/s con la válvula abierta
  bombaVacio: 0.05, // m³/s de caudal de aspiración (180 m³/h)
  pUltimoVacio: 0.15, // bar a que alcanza la bomba en buen estado
  fugaAire: 0.04, // mol/s de aire que entra por una fuga cuando hay vacío
  ventMax: 0.6, // mol/s que caben por la línea de venteo al lavador de gases (unos 200 kg/h de vapor de tolueno)
  psvTarado: 3.0, // bar g
  discoRotura: 3.0, // bar g
  presionDiseno: 6.0, // bar g
  // Bombas y caudales
  caudalCarga: 1.45, // kg/s (unos 100 L/min de solución)
  caudalDescarga: 2.0, // kg/s
  feedMax: 1200, // kg/h de la bomba dosificadora
  depositoB: 620, // kg de B en el depósito de dosificación D-205
  rpmMax: 120,
} as const;

/* ───────────────────────────── Estado ───────────────────────────── */

export type Fault =
  | "agua"
  | "agitador"
  | "sensor"
  | "vacio"
  | "condensador"
  | "disco"
  | "nitrogeno"
  | "barrera";

export const FAULTS: { id: Fault; title: string; when: string }[] = [
  { id: "agua", title: "Se pierde el agua de refrigeración de la unidad de la camisa", when: "durante la adición" },
  { id: "agitador", title: "El agitador dispara por sobreintensidad", when: "durante la adición" },
  { id: "sensor", title: "La sonda de temperatura principal se queda congelada", when: "al calentar" },
  { id: "vacio", title: "Entra aire por una junta mientras se hace vacío", when: "en la inertización" },
  { id: "condensador", title: "Falla el agua del condensador", when: "durante el reflujo" },
  { id: "disco", title: "El disco de ruptura empieza a fugar", when: "al calentar" },
  { id: "nitrogeno", title: "Se queda sin presión la red de nitrógeno", when: "al enfriar" },
  { id: "barrera", title: "Baja el nivel del líquido de barrera del cierre", when: "durante el reflujo" },
];

export type LoopMode = "MAN" | "AUTO" | "CAS";
export type Medio = "agua" | "glicol";

export type Inputs = {
  agitOn: boolean;
  agitSp: number; // rpm
  // Temperatura: TIC-204 (masa, maestro) y TIC-204J (camisa, esclavo)
  ticMasaOn: boolean;
  tMasaSp: number;
  jMode: LoopMode;
  jSp: number; // consigna de camisa en AUTO
  jOut: number; // salida en MAN, −100 (frío) a +100 (calor)
  medio: Medio;
  // Presión
  picOn: boolean; // control de presión con N₂ y venteo
  pSp: number; // bar g
  xvN2: boolean; // nitrógeno manual (inertización)
  xvVent: boolean; // venteo manual
  vacio: boolean; // bomba de vacío P-206 y su válvula
  // Cargas y descarga
  carga: boolean; // bomba P-210 y válvula de carga de solución desde T-210
  dosif: boolean; // bomba dosificadora P-205 de B
  feedSp: number; // kg/h
  fondo: boolean; // válvula de fondo y bomba de descarga P-207
  // Condensador
  aguaCond: boolean;
  destilar: boolean; // false = reflujo
  sondaB: boolean; // el control usa la sonda redundante TT-204B en lugar de TT-204A
};

export type AlarmPriority = "alta" | "media" | "baja";
export type AlarmDef = { id: string; tag: string; text: string; prio: AlarmPriority };
export type Alarm = AlarmDef & { since: number; acked: boolean; active: boolean };

export type Sample = { t: number; ready: number; bResidual: number; impureza: number; conversion: number };

export type Hist = { t: number; tm: number; tj: number; p: number; feed: number; nivel: number; rpm: number };

export type State = {
  t: number; // s desde el inicio
  // Inventario de líquido (kg)
  mSol: number;
  mB: number; // B sin reaccionar
  mP: number; // B ya convertido en producto
  mImp: number;
  mDest: number; // destilado en el depósito D-204
  mDescargado: number;
  bAlimentado: number; // totalizador FQ-205
  solCargada: number; // totalizador FQ-204
  // Temperaturas
  tm: number;
  tj: number;
  // Gas
  nN2: number;
  nO2: number;
  pDisco: number; // bar g entre disco y válvula de seguridad
  discoRoto: boolean;
  psvAbierta: boolean;
  // Equipos
  rpm: number;
  agitDisparado: boolean;
  barrera: number; // % del depósito del líquido de barrera
  // Lazos de control
  iMasa: number;
  iJacket: number;
  jSpCalc: number; // consigna efectiva de camisa
  u: number; // salida de la TCU, −100 a 100
  tmSensorCongelado: number | null;
  // Averías
  fault: Fault | null;
  faultActive: boolean;
  // Interlocks disparados (primer aviso) y alarmas
  trips: string[];
  alarms: Alarm[];
  // Historial (una muestra cada 10 s)
  hist: Hist[];
  // Muestras al laboratorio
  samples: Sample[];
  // Registros de proceso para la revisión
  maxTm: number;
  minTmAdicion: number | null;
  maxTmAdicion: number | null;
  maxDT: number;
  tiempoDTexcedido: number; // s con |Tj − Tm| por encima del límite
  o2AlCargar: number | null;
  inicioAdicion: number | null;
  finAdicion: number | null;
  inicioReflujo: number | null;
  tiempoReflujo: number; // s a ebullición con reflujo
  maxP: number;
  emisionVapor: number; // kg de tolueno que salieron por el venteo
  vaporVenteo: number; // kg/h de vapor saliendo por el venteo ahora
  agitBajoMinimo: number; // s con el agitador en marcha por debajo del volumen mínimo
  tmAlDescargar: number | null;
  pAlDescargar: number | null;
  ciclos: { pMin: number; pMax: number }[];
  enCiclo: { pMin: number; pMax: number; fase: "vacio" | "n2" } | null;
  eventos: { t: number; texto: string }[]; // acciones y avisos del operador, para la revisión
  avisoAveria: number | null; // cuándo avisó el operador de la avería
  faultDesde: number | null; // cuándo empezó la avería
  reparacionEn: number | null;
  inputs: Inputs;
};

/* ───────────────────────────── Física ───────────────────────────── */

const K = (c: number) => c + 273.15;

/** Presión de vapor del tolueno en bar a. */
export function pSat(t: number) {
  const mmHg = Math.pow(10, P.antA - P.antB / (t + P.antC));
  return (mmHg / 760) * P.pAtm;
}

/** Temperatura de ebullición del tolueno a una presión absoluta (bar a). */
export function tEbullicion(pAbs: number) {
  const mmHg = (pAbs / P.pAtm) * 760;
  return P.antB / (P.antA - Math.log10(Math.max(mmHg, 1))) - P.antC;
}

export function mLiquido(s: State) {
  return s.mSol + s.mB + s.mP + s.mImp;
}

export function volLiquido(s: State) {
  return s.mSol / P.rhoSol + (s.mB + s.mP + s.mImp) / P.rhoB;
}

export function nivel(s: State) {
  return (volLiquido(s) / P.volNominal) * 100;
}

/** Superficie de camisa mojada por dentro, en m². */
export function areaMojada(s: State) {
  const v = volLiquido(s);
  if (v <= 0) return 0;
  if (v <= P.volFondo) return P.areaFondo * (v / P.volFondo);
  const h = (v - P.volFondo) / ((Math.PI * P.diametro * P.diametro) / 4);
  return P.areaFondo + Math.PI * P.diametro * Math.min(h, P.alturaCamisa);
}

export function coefU(s: State) {
  const f = s.rpm > 1 ? Math.min(1.2, Math.max(0.3, Math.pow(s.rpm / P.rpmRef, 0.6))) : 0.2;
  return P.U0 * f * P.ensuciamiento;
}

function volGas(s: State) {
  return Math.max(0.2, P.volTotal - volLiquido(s));
}

function nInertes(s: State) {
  return s.nN2 + s.nO2;
}

/** Presión absoluta en bar a. */
export function pAbs(s: State) {
  const pInertes = (nInertes(s) * P.R * K(s.tm)) / volGas(s) / 1e5;
  const pVapor = pVaporMasa(s);
  return pInertes + pVapor;
}

/** Fracción molar de disolvente: con la ley de Raoult, la presión de vapor baja si queda poco tolueno.
 * El reactivo, el producto y la impureza se cuentan con una masa molar de ejemplo de 250 g/mol. */
function fraccionDisolvente(s: State) {
  const nTol = s.mSol / P.mmTolueno;
  const nOtros = (s.mB + s.mP + s.mImp) / 0.25;
  return nTol + nOtros > 0 ? nTol / (nTol + nOtros) : 0;
}

/** Presión de vapor del tolueno sobre la masa, en bar a. */
export function pVaporMasa(s: State) {
  return Math.min(fraccionDisolvente(s) * pSat(s.tm), 20);
}

export const pGauge = (s: State) => pAbs(s) - P.pAtm;

export function o2(s: State) {
  const n = nInertes(s);
  return n > 0 ? (s.nO2 / n) * 100 : 0;
}

function kReaccion(t: number) {
  return P.kRef * Math.exp((-P.ea / P.R) * (1 / K(t) - 1 / K(P.tRef)));
}

function mezcla(s: State) {
  if (volLiquido(s) < P.volMinAgitacion) return s.rpm > 1 ? 0.5 : 0.05;
  return s.rpm >= 40 ? 1 : s.rpm > 1 ? s.rpm / 40 : 0.05;
}

/** Potencia que pasa de la camisa a la masa, en W (negativa si enfría). */
export function qCamisa(s: State) {
  return coefU(s) * areaMojada(s) * (s.tj - s.tm);
}

/** Potencia que desprende la reacción, en W. */
export function qReaccion(s: State) {
  return kReaccion(s.tm) * s.mB * mezcla(s) * P.dHr;
}

/** Lectura de la sonda principal TT-204A (puede congelarse con una avería). */
export function tmLeida(s: State) {
  return s.tmSensorCongelado ?? s.tm;
}

/** Temperatura que usa el control: la sonda elegida por el operador. */
export function tmControl(s: State) {
  return s.inputs.sondaB ? s.tm : tmLeida(s);
}

/** Caudal real de la dosificadora, en kg/h. */
export function feedReal(s: State) {
  return s.inputs.dosif && !s.trips.some((t) => FEED_TRIPS.includes(t)) && s.bAlimentado < P.depositoB
    ? Math.min(Math.max(s.inputs.feedSp, 0), P.feedMax)
    : 0;
}

/* ───────────────────────────── Alarmas e interlocks ───────────────────────────── */

export const ALARMS: AlarmDef[] = [
  { id: "TAHH", tag: "TI-204", text: "Temperatura de masa muy alta (≥ 80 °C): paro de adición y frío al máximo", prio: "alta" },
  { id: "TAH", tag: "TI-204", text: "Temperatura de masa alta durante la adición (> 75 °C)", prio: "media" },
  { id: "TAL", tag: "TI-204", text: "Temperatura de masa baja durante la adición (< 68 °C): riesgo de acumulación", prio: "media" },
  { id: "TDA", tag: "TI-204A/B", text: "Las dos sondas de masa no coinciden (más de 3 °C)", prio: "alta" },
  { id: "DTH", tag: "TDI-204", text: "Diferencia camisa-masa por encima de 50 °C: riesgo de choque térmico", prio: "media" },
  { id: "PAH", tag: "PI-204", text: "Presión alta en el reactor (> 0,5 bar g)", prio: "media" },
  { id: "PAHH", tag: "PI-204", text: "Presión muy alta (≥ 1,5 bar g): paro de calor, adición y nitrógeno", prio: "alta" },
  { id: "PAL", tag: "PI-204", text: "Presión por debajo de la atmosférica con producto dentro", prio: "media" },
  { id: "PDH", tag: "PI-204D", text: "Presión entre disco de ruptura y válvula de seguridad: el disco fuga", prio: "media" },
  { id: "LAH", tag: "LI-204", text: "Nivel alto (> 85 %)", prio: "media" },
  { id: "LAHH", tag: "LI-204", text: "Nivel muy alto (≥ 90 %): cierre de la carga", prio: "alta" },
  { id: "OAH", tag: "AI-204", text: "Oxígeno por encima del 2 % con disolvente: atmósfera no inerte", prio: "alta" },
  { id: "SAL", tag: "SI-204", text: "Agitador parado o lento con adición: paro de adición", prio: "alta" },
  { id: "AGT", tag: "M-204", text: "Disparo del motor del agitador", prio: "alta" },
  { id: "FAH", tag: "FIC-205", text: "Caudal de adición por encima de 720 kg/h (12 kg/min)", prio: "media" },
  { id: "CWL", tag: "FI-CW", text: "Sin caudal de agua de refrigeración en la unidad de camisa", prio: "media" },
  { id: "CCL", tag: "FI-CC", text: "Sin agua en el condensador con la masa caliente", prio: "media" },
  { id: "N2L", tag: "PI-N2", text: "Presión baja de la red de nitrógeno", prio: "media" },
  { id: "BAL", tag: "LI-204S", text: "Nivel bajo del líquido de barrera del cierre", prio: "baja" },
  { id: "EMI", tag: "FI-V", text: "Sale vapor de tolueno por el venteo: el condensador no condensa todo", prio: "media" },
  { id: "PSV", tag: "PSV-204", text: "Disco de ruptura roto o válvula de seguridad abierta", prio: "alta" },
  { id: "SAM", tag: "M-204", text: "Agitador en marcha por debajo del volumen mínimo (500 L)", prio: "baja" },
];

/** Interlocks que paran la adición. */
export const FEED_TRIPS = ["I-01", "I-02", "I-03"];

export const INTERLOCKS: Record<string, string> = {
  "I-01": "Agitador parado o por debajo de 45 rpm: se para la dosificadora P-205",
  "I-02": "Masa a 80 °C o más: se para la dosificadora y la camisa pasa a frío al máximo",
  "I-03": "Presión de 1,5 bar g o más: se para la dosificadora, el calor y el nitrógeno",
  "I-04": "Nivel del 90 % o más: se cierra la carga de solución",
  "I-05": "Oxígeno por encima del 2 %: no se puede cargar disolvente",
};

/* ───────────────────────────── Arranque ───────────────────────────── */

export function newState(fault: Fault | null = null): State {
  const nAire = (P.pAtm * 1e5 * P.volTotal) / (P.R * K(P.tAmbiente));
  return {
    t: 0,
    mSol: 0,
    mB: 0,
    mP: 0,
    mImp: 0,
    mDest: 0,
    mDescargado: 0,
    bAlimentado: 0,
    solCargada: 0,
    tm: P.tAmbiente,
    tj: P.tAmbiente,
    nN2: nAire * 0.79,
    nO2: nAire * 0.21,
    pDisco: 0,
    discoRoto: false,
    psvAbierta: false,
    rpm: 0,
    agitDisparado: false,
    barrera: 65,
    iMasa: 0,
    iJacket: 0,
    jSpCalc: P.tAmbiente,
    u: 0,
    tmSensorCongelado: null,
    fault,
    faultActive: false,
    trips: [],
    alarms: [],
    hist: [],
    samples: [],
    maxTm: P.tAmbiente,
    minTmAdicion: null,
    maxTmAdicion: null,
    maxDT: 0,
    tiempoDTexcedido: 0,
    o2AlCargar: null,
    inicioAdicion: null,
    finAdicion: null,
    inicioReflujo: null,
    tiempoReflujo: 0,
    maxP: 0,
    emisionVapor: 0,
    vaporVenteo: 0,
    agitBajoMinimo: 0,
    tmAlDescargar: null,
    pAlDescargar: null,
    ciclos: [],
    enCiclo: null,
    eventos: [],
    avisoAveria: null,
    faultDesde: null,
    reparacionEn: null,
    inputs: {
      agitOn: false,
      agitSp: 90,
      ticMasaOn: false,
      tMasaSp: 70,
      jMode: "MAN",
      jSp: 20,
      jOut: 0,
      medio: "agua",
      picOn: false,
      pSp: 0.05,
      xvN2: false,
      xvVent: false,
      vacio: false,
      carga: false,
      dosif: false,
      feedSp: 600,
      fondo: false,
      aguaCond: true,
      destilar: false,
      sondaB: false,
    },
  };
}

/* ───────────────────────────── Averías ───────────────────────────── */

function activarAveria(s: State) {
  if (!s.fault || s.faultActive) return;
  const i = s.inputs;
  const dosificando = s.inicioAdicion !== null && s.finAdicion === null;
  const minutosAdicion = s.inicioAdicion !== null ? (s.t - s.inicioAdicion) / 60 : 0;
  let go = false;
  switch (s.fault) {
    case "agua":
    case "agitador":
      go = dosificando && minutosAdicion > 15;
      break;
    case "sensor":
    case "disco":
      go = s.tm > 45 && s.inicioAdicion === null;
      break;
    case "vacio":
      go = i.vacio;
      break;
    case "condensador":
    case "barrera":
      go = s.tiempoReflujo > 20 * 60;
      break;
    case "nitrogeno":
      go = s.finAdicion !== null && s.tiempoReflujo > 0 && s.tm < 95;
      break;
  }
  if (!go) return;
  s.faultActive = true;
  s.faultDesde = s.t;
  if (s.fault === "sensor") s.tmSensorCongelado = Math.round(s.tm * 10) / 10;
  if (s.fault === "agitador") s.agitDisparado = true;
}

/* ───────────────────────────── Paso de simulación ───────────────────────────── */

function setAlarm(s: State, id: string, on: boolean) {
  const a = s.alarms.find((x) => x.id === id);
  if (on) {
    if (!a) {
      const def = ALARMS.find((x) => x.id === id);
      if (def) s.alarms.unshift({ ...def, since: s.t, acked: false, active: true });
    } else if (!a.active) {
      a.active = true;
      a.acked = false;
      a.since = s.t;
    }
  } else if (a && a.active) {
    a.active = false;
    if (a.acked) s.alarms = s.alarms.filter((x) => x !== a);
  }
}

function trip(s: State, id: string, on: boolean) {
  if (on && !s.trips.includes(id)) s.trips.push(id);
  // Los interlocks se rearman solos cuando desaparece la causa; el operador debe volver a arrancar lo que paró.
  if (!on && s.trips.includes(id)) {
    s.trips = s.trips.filter((x) => x !== id);
    if (FEED_TRIPS.includes(id)) s.inputs.dosif = false;
    if (id === "I-04") s.inputs.carga = false;
  }
}

/** Avanza la simulación dt segundos (paso interno de 1 s). */
export function step(s: State, dt = 1) {
  const i = s.inputs;
  activarAveria(s);
  if (s.reparacionEn !== null && s.t >= s.reparacionEn) {
    repararAveria(s);
    s.reparacionEn = null;
    s.eventos.push({ t: s.t, texto: "Mantenimiento da por resuelta la avería" });
  }
  const fa = s.faultActive ? s.fault : null;

  const nivelPct = nivel(s);
  const hayLiquido = mLiquido(s) > 5;
  const pa = pAbs(s);
  const pg = pa - P.pAtm;

  /* Interlocks */
  trip(s, "I-01", i.dosif && (s.rpm < 45 || !i.agitOn || s.agitDisparado));
  const enAdicion = s.inicioAdicion !== null && s.finAdicion === null;
  trip(s, "I-02", (enAdicion || i.dosif) && s.tm >= 80);
  trip(s, "I-03", pg >= 1.5);
  trip(s, "I-04", nivelPct >= 90);
  trip(s, "I-05", i.carga && o2(s) > 2);
  if (s.trips.includes("I-04") || s.trips.includes("I-05")) i.carga = false;

  /* Agitador */
  const agitPuede = i.agitOn && !s.agitDisparado;
  const rpmObj = agitPuede ? Math.min(Math.max(i.agitSp, 0), P.rpmMax) : 0;
  s.rpm += (rpmObj - s.rpm) * Math.min(1, dt / 8);
  if (s.rpm < 0.5 && rpmObj === 0) s.rpm = 0;
  if (fa === "barrera") s.barrera = Math.max(0, s.barrera - (dt * 40) / 3600);

  /* Control de temperatura: cascada masa → camisa */
  const tmMedida = tmControl(s);
  let jSp = i.jSp;
  if (i.ticMasaOn && i.jMode === "CAS") {
    const e = i.tMasaSp - tmMedida;
    const lo = tmMedida - P.dTmax;
    const hi = tmMedida + P.dTmax;
    const sinI = i.tMasaSp + 3 * e;
    // Antisaturación: solo integra si la salida no está ya en su límite
    if ((sinI + s.iMasa < hi || e < 0) && (sinI + s.iMasa > lo || e > 0)) s.iMasa = Math.max(-30, Math.min(30, s.iMasa + (e * dt) / 600));
    jSp = Math.min(hi, Math.max(lo, sinI + s.iMasa));
  }
  if (s.trips.includes("I-02")) jSp = -20;
  jSp = Math.min(P.tJacketMax, jSp);
  s.jSpCalc = jSp;

  let u = i.jOut;
  if (i.jMode !== "MAN" || s.trips.includes("I-02")) {
    const e = jSp - s.tj;
    const sinI = 8 * e;
    if ((sinI + s.iJacket < 100 || e < 0) && (sinI + s.iJacket > -100 || e > 0)) s.iJacket = Math.max(-100, Math.min(100, s.iJacket + (e * dt) / 30));
    u = Math.max(-100, Math.min(100, sinI + s.iJacket));
  }
  if (s.trips.includes("I-02")) u = -100;
  if (s.trips.includes("I-03") && u > 0) u = 0;
  s.u = u;

  const tFrio = i.medio === "glicol" ? P.tGlicol : P.tAguaTorre;
  const qTcu =
    u >= 0
      ? s.tj < P.tJacketMax
        ? (u / 100) * P.qCalorMax
        : 0
      : fa === "agua" && i.medio === "agua"
        ? 0
        : (u / 100) * P.UAfrio * Math.max(0, s.tj - tFrio);

  /* Balance de la camisa */
  const qj = hayLiquido ? qCamisa(s) : 0;
  s.tj += ((qTcu - qj - P.UAperdidas * (s.tj - P.tAmbiente)) * dt) / P.cJacket;

  /* Materia: carga, adición, descarga */
  let qFeed = 0;
  if (i.carga && !s.trips.includes("I-04") && !s.trips.includes("I-05")) {
    const m = P.caudalCarga * dt;
    s.mSol += m;
    s.solCargada += m;
    if (s.o2AlCargar === null) s.o2AlCargar = o2(s);
    qFeed += m * P.cpSol * (P.tAmbiente - s.tm);
  }
  const feed = feedReal(s);
  if (feed > 0) {
    const m = (feed / 3600) * dt;
    s.mB += m;
    s.bAlimentado += m;
    qFeed += m * P.cpB * (P.tFeed - s.tm);
    if (s.inicioAdicion === null) s.inicioAdicion = s.t;
  }
  if (s.inicioAdicion !== null && s.finAdicion === null && s.bAlimentado >= 597) s.finAdicion = s.t;
  if (i.fondo && hayLiquido) {
    if (s.tmAlDescargar === null) {
      s.tmAlDescargar = s.tm;
      s.pAlDescargar = pg;
    }
    const mTot = mLiquido(s);
    const m = Math.min(P.caudalDescarga * dt, mTot);
    const f = 1 - m / mTot;
    s.mSol *= f;
    s.mB *= f;
    s.mP *= f;
    s.mImp *= f;
    s.mDescargado += m;
  }

  /* Reacción */
  let qr = 0;
  if (s.mB > 0) {
    const r = Math.min(s.mB, kReaccion(s.tm) * s.mB * mezcla(s) * dt);
    s.mB -= r;
    const sel = Math.min(0.5, P.selImp * Math.exp((s.tm - P.tRef) / P.selImpEscala));
    s.mImp += r * sel;
    s.mP += r * (1 - sel);
    qr = (r * P.dHr) / dt;
  }

  /* Energía de la masa y ebullición */
  const mTot = mLiquido(s);
  if (mTot > 1) {
    const cp = (s.mSol * P.cpSol + (s.mB + s.mP + s.mImp) * P.cpB) / mTot;
    const qAgit = (s.rpm / P.rpmRef) ** 3 * 2500 * (volLiquido(s) / 3);
    let qNet = qj + qr + qAgit - P.UAperdidas * (s.tm - P.tAmbiente) + qFeed / dt;
    const tb = tEbullicion(pa);
    s.vaporVenteo = 0;
    // Con el venteo disponible, el reactor hierve a la presión que mantiene el control (el vapor empuja los
    // inertes fuera); cerrado del todo, los inertes atrapados suben la temperatura de ebullición.
    const ventPath = i.xvVent || i.picOn || s.psvAbierta;
    const pHold = i.xvVent || s.psvAbierta ? P.pAtm : P.pAtm + i.pSp;
    // Cerrado del todo no hierve: el vapor se queda dentro y la presión sube con la temperatura.
    const hierve = ventPath && s.mSol > 1 && pVaporMasa(s) >= pHold - 0.002;
    void tb;
    if (hierve && qNet > 0) {
      if (ventPath) {
        s.nN2 *= 1 - Math.min(0.5, 0.01 * dt);
        s.nO2 *= 1 - Math.min(0.5, 0.01 * dt);
      }
      // Hierve: el exceso de energía se va en vapor hacia el condensador
      const mv = (qNet * dt) / P.hVap;
      const tFrioCond = P.tAguaCond;
      const qcMax = i.aguaCond && fa !== "condensador" ? P.UAcond * Math.max(0, tb - tFrioCond) : 2000;
      const mc = Math.min(mv, (qcMax * dt) / P.hVap);
      let mu = mv - mc;
      if (i.destilar) {
        s.mSol = Math.max(0, s.mSol - mc);
        s.mDest += mc;
      } else if (s.inicioReflujo === null && s.finAdicion !== null) s.inicioReflujo = s.t;
      if (!i.destilar && s.finAdicion !== null) s.tiempoReflujo += dt;
      // Lo que no se condensa sale por el venteo si está abierto; si no, presuriza
      const ventAbierto = i.xvVent || (i.picOn && pg > i.pSp + 0.02) || s.psvAbierta;
      const ventKg = ventAbierto ? (P.ventMax * P.mmTolueno * dt) : 0;
      const salida = Math.min(mu, ventKg);
      s.emisionVapor += salida;
      s.vaporVenteo = (salida / dt) * 3600;
      s.mSol = Math.max(0, s.mSol - salida);
      mu -= salida;
      // El vapor que no puede salir se queda en la masa como energía: sube la temperatura y la presión
      qNet = (mu * P.hVap) / dt;
      s.tm += (qNet * dt) / (mLiquido(s) * cp);
    } else {
      s.tm += (qNet * dt) / (mTot * cp);
    }
  } else {
    s.tm += ((s.tj - s.tm) * dt) / 3000;
  }

  /* Gas: nitrógeno, venteo, vacío y fugas */
  const T = K(s.tm);
  const vg = volGas(s);
  const pa2 = pAbs(s);
  const pg2 = pa2 - P.pAtm;
  const n2Disponible = !(fa === "nitrogeno");
  let n2Flow = 0;
  if (i.xvN2 && n2Disponible && pg2 < P.pN2Red - 0.5) n2Flow = P.flujoN2;
  if (i.picOn && n2Disponible && pg2 < i.pSp - 0.02 && !s.trips.includes("I-03")) n2Flow = Math.max(n2Flow, P.flujoN2 * 0.5);
  if (s.trips.includes("I-03")) n2Flow = 0;
  s.nN2 += n2Flow * dt;

  let ventMol = 0;
  if (i.xvVent || s.psvAbierta) ventMol = P.ventMax * dt;
  else if (i.picOn && pg2 > i.pSp + 0.02) ventMol = Math.min(P.ventMax, (pg2 - i.pSp) * 20) * dt;
  if (ventMol > 0 && pg2 > 0) {
    const nGasTotal = (pa2 * 1e5 * vg) / (P.R * T);
    const frac = Math.min(0.5, ventMol / Math.max(nGasTotal, 1));
    // Cada especie sale en proporción a lo que hay: los inertes bajan en la misma fracción que el gas total
    s.nN2 *= 1 - frac;
    s.nO2 *= 1 - frac;
  }
  if (i.vacio && pa2 > 0.02) {
    const pUlt = fa === "vacio" ? 0.45 : P.pUltimoVacio;
    const efic = Math.max(0, (pa2 - pUlt) / pa2);
    const frac = Math.min(0.5, (P.bombaVacio * dt * efic) / vg);
    const pIn = (nInertes(s) * P.R * T) / vg / 1e5;
    const fracInertes = pIn / pa2;
    s.nN2 *= 1 - frac;
    s.nO2 *= 1 - frac;
    if (hayLiquido) {
      // El vacío arrastra disolvente hacia la bomba
      const kgVap = frac * (1 - fracInertes) * ((pa2 * 1e5 * vg) / (P.R * T)) * P.mmTolueno;
      s.mSol = Math.max(0, s.mSol - kgVap);
      s.emisionVapor += kgVap;
    }
  }
  // Fuga de aire con vacío
  if (fa === "vacio" && pa2 < P.pAtm) {
    const aire = P.fugaAire * dt * ((P.pAtm - pa2) / P.pAtm);
    s.nN2 += aire * 0.79;
    s.nO2 += aire * 0.21;
  }
  // Rompevacío: si la presión cae por debajo de la atmosférica sin nitrógeno, entra aire por la válvula de alivio de vacío
  if (hayLiquido && pa2 < P.pAtm - 0.05 && !i.vacio && !(n2Flow > 0)) {
    const aire = 1.0 * dt;
    s.nN2 += aire * 0.79;
    s.nO2 += aire * 0.21;
  }

  /* Disco de ruptura y válvula de seguridad */
  const pg3 = pGauge(s);
  if (fa === "disco") s.pDisco = Math.min(pg3, s.pDisco + (dt * 0.2) / 3600 + Math.max(0, pg3 - s.pDisco) * 0.0005 * dt);
  if (!s.discoRoto && pg3 >= P.discoRotura) s.discoRoto = true;
  if (s.discoRoto) s.pDisco = pg3;
  s.psvAbierta = s.discoRoto && pg3 >= P.psvTarado * 0.95;

  /* Registros para la revisión */
  s.maxTm = Math.max(s.maxTm, s.tm);
  s.maxP = Math.max(s.maxP, pg3);
  const dT = Math.abs(s.tj - s.tm);
  if (hayLiquido) {
    s.maxDT = Math.max(s.maxDT, dT);
    if (dT > P.dTmax + 0.5) s.tiempoDTexcedido += dt;
  }
  const dosificando = s.inicioAdicion !== null && s.finAdicion === null;
  if (dosificando) {
    s.minTmAdicion = s.minTmAdicion === null ? s.tm : Math.min(s.minTmAdicion, s.tm);
    s.maxTmAdicion = s.maxTmAdicion === null ? s.tm : Math.max(s.maxTmAdicion, s.tm);
  }
  // Ciclos de inertización: un ciclo es bajar con vacío y volver a subir con N₂ por encima de 900 mbar abs
  const pAbsMbar = pAbs(s) * 1000;
  if (!hayLiquido) {
    if (i.vacio) {
      if (!s.enCiclo || s.enCiclo.fase === "n2") s.enCiclo = { pMin: pAbsMbar, pMax: 0, fase: "vacio" };
      s.enCiclo.pMin = Math.min(s.enCiclo.pMin, pAbsMbar);
    } else if (s.enCiclo && s.enCiclo.fase === "vacio" && n2Flow > 0) {
      s.enCiclo.fase = "n2";
    }
    if (s.enCiclo && s.enCiclo.fase === "n2") {
      s.enCiclo.pMax = Math.max(s.enCiclo.pMax, pAbsMbar);
      if (pAbsMbar >= 900 && !i.xvN2) {
        s.ciclos.push({ pMin: Math.round(s.enCiclo.pMin), pMax: Math.round(s.enCiclo.pMax) });
        s.enCiclo = null;
      }
    }
  }

  /* Alarmas */
  const adic = dosificando || (i.dosif && feed > 0);
  setAlarm(s, "TAHH", (enAdicion || i.dosif) && s.tm >= 80);
  setAlarm(s, "TAH", adic && tmMedida > 75 && s.tm < 80);
  setAlarm(s, "TAL", adic && tmMedida < 68);
  setAlarm(s, "TDA", Math.abs(tmLeida(s) - s.tm) > 3);
  setAlarm(s, "DTH", hayLiquido && dT > P.dTmax + 0.5);
  setAlarm(s, "PAH", pg3 > 0.5 && pg3 < 1.5);
  setAlarm(s, "PAHH", pg3 >= 1.5);
  setAlarm(s, "PAL", hayLiquido && pg3 < -0.05 && !i.vacio);
  setAlarm(s, "PDH", s.pDisco > 0.02 && !s.discoRoto);
  setAlarm(s, "LAH", nivelPct > 85 && nivelPct < 90);
  setAlarm(s, "LAHH", nivelPct >= 90);
  setAlarm(s, "OAH", hayLiquido && o2(s) > 2);
  setAlarm(s, "SAL", i.dosif && s.rpm < 45);
  setAlarm(s, "AGT", s.agitDisparado);
  setAlarm(s, "FAH", feed > 720);
  setAlarm(s, "CWL", fa === "agua" && i.medio === "agua");
  setAlarm(s, "CCL", (fa === "condensador" || !i.aguaCond) && s.tm > 80);
  setAlarm(s, "N2L", fa === "nitrogeno");
  setAlarm(s, "BAL", s.barrera < 30);
  setAlarm(s, "EMI", s.vaporVenteo > 1);
  setAlarm(s, "SAM", s.rpm > 1 && hayLiquido && volLiquido(s) < P.volMinAgitacion);
  if (s.rpm > 1 && hayLiquido && volLiquido(s) < P.volMinAgitacion) s.agitBajoMinimo += dt;
  setAlarm(s, "PSV", s.discoRoto);

  s.t += dt;
  if (s.t % 10 < dt) {
    s.hist.push({
      t: s.t,
      tm: Math.round(tmMedida * 10) / 10,
      tj: Math.round(s.tj * 10) / 10,
      p: Math.round(pGauge(s) * 1000) / 1000,
      feed: Math.round(feed),
      nivel: Math.round(nivel(s) * 10) / 10,
      rpm: Math.round(s.rpm),
    });
    if (s.hist.length > 6 * 60 * 14) s.hist.shift();
  }
}

/* ───────────────────────────── Acciones del operador ───────────────────────────── */

export function ackAlarm(s: State, id?: string) {
  for (const a of s.alarms) if (!id || a.id === id) a.acked = true;
  s.alarms = s.alarms.filter((a) => a.active || !a.acked);
}

/** Reinicia el agitador tras un disparo (el operador debe haber comprobado la causa). */
export function rearmarAgitador(s: State) {
  s.agitDisparado = false;
  s.inputs.agitOn = false;
}

export function rellenarBarrera(s: State) {
  s.barrera = 65;
}

/** Repone el servicio averiado (lo hace mantenimiento cuando el operador lo avisa). */
export function repararAveria(s: State) {
  if (!s.faultActive) return;
  if (s.fault === "sensor") s.tmSensorCongelado = null;
  s.faultActive = false;
  s.fault = null;
}

/** El interlock I-05 impide cargar disolvente si la atmósfera no es inerte. */
export function puedeCargar(s: State): string | null {
  if (o2(s) > 2) return "I-05: el oxígeno está por encima del 2 %. Inertiza antes de cargar.";
  if (nivel(s) >= 90) return "I-04: nivel del 90 % o más.";
  return null;
}

/** Registra una acción del operador. */
export function evento(s: State, texto: string) {
  s.eventos.push({ t: s.t, texto });
}

/** Aviso al jefe de turno y a mantenimiento. Si hay una avería activa, mantenimiento la resuelve en 20 min. */
export function avisar(s: State, texto: string) {
  evento(s, "Aviso: " + texto);
  if (s.faultActive && s.avisoAveria === null) {
    s.avisoAveria = s.t;
    s.reparacionEn = s.t + 20 * 60;
  }
}

export function tomarMuestra(s: State): string | null {
  if (mLiquido(s) < 100) return "No hay masa en el reactor.";
  if (s.rpm < 45) return "Con el agitador parado la muestra no es representativa: agita antes de muestrear.";
  if (s.samples.some((x) => x.ready > s.t)) return "Ya hay una muestra en el laboratorio; espera el resultado.";
  const total = s.mB + s.mP + s.mImp;
  const bRes = total > 0 ? (s.mB / total) * 100 : 0;
  const imp = s.mP + s.mImp > 0 ? (s.mImp / (s.mP + s.mImp)) * 100 : 0;
  s.samples.push({
    t: s.t,
    ready: s.t + 30 * 60,
    bResidual: Math.round(bRes * 100) / 100,
    impureza: Math.round(imp * 100) / 100,
    conversion: Math.round((100 - bRes) * 100) / 100,
  });
  return null;
}

export const fmtHora = (t: number) => {
  // El lote empieza a las 06:00 del turno de mañana
  const tot = Math.floor(t / 60) + 6 * 60;
  const h = Math.floor(tot / 60) % 24;
  const m = tot % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
};

export const fmt = (n: number, d = 1) => n.toFixed(d).replace(".", ",");
