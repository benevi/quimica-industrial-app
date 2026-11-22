// Hoja de producción (batch record) de la etapa 1 del intermedio ficticio AX-22 en el reactor R-204,
// y revisión final del lote: compara lo anotado con lo que guardó el sistema (historiador) y con la hoja.
import { type State, P, activa, fmt, fmtHora, nivel, o2, pGauge, tmLeida } from "./model";
import { GUIA } from "./guia";

export type PasoId =
  | "previas"
  | "inertizacion"
  | "carga"
  | "agitacion"
  | "calentamiento"
  | "adicion"
  | "reflujo"
  | "ipc"
  | "enfriamiento"
  | "descarga"
  | "cierre";

export type Campo = {
  id: string;
  paso: PasoId;
  label: string;
  unit?: string;
  spec?: string;
  kind: "number" | "time" | "select" | "text";
  options?: string[];
  min?: number;
  max?: number;
  /** Valor real en el momento de anotar, para comprobar la exactitud (ALCOA+). */
  real?: (s: State) => number | string | null;
  /** Tolerancia admitida entre lo anotado y lo real. */
  tol?: number;
  /** Momento en que ocurrió lo que se anota, para comprobar que la anotación es contemporánea. */
  cuando?: (s: State) => number | null;
};

export const PASOS: { id: PasoId; title: string; instr: string[] }[] = [
  {
    id: "previas",
    title: "1. Comprobaciones previas",
    instr: [
      "Reactor R-204 identificado, limpio y liberado: etiqueta de estado «Limpio».",
      "Válvula de fondo XV-204F cerrada. Boca de hombre y tubuladuras cerradas.",
      "Manómetro PI-204D entre disco de ruptura y válvula de seguridad: sin presión.",
      "Líquido de barrera del cierre del agitador (LI-204S): entre el 40 y el 80 %.",
      "Servicios: nitrógeno de red (PI-N2) a 4 bar g o más, agua de torre, glicol y agua del condensador.",
    ],
  },
  {
    id: "inertizacion",
    title: "2. Inertización",
    instr: [
      "Tres ciclos: vacío con P-206 hasta 200 mbar abs o menos y romper con nitrógeno hasta 1000 mbar abs.",
      "Anotar la presión mínima de cada ciclo.",
      "Oxígeno final (AI-204) por debajo del 2,0 %. Después, control de presión PIC-204 en automático a 0,05 bar g.",
    ],
  },
  {
    id: "carga",
    title: "3. Carga de la solución de AX-21",
    instr: [
      "Cargar 2610 kg de solución de AX-21 en tolueno desde T-210 (totalizador FQ-204). El interlock I-05 no deja cargar con oxígeno por encima del 2 %.",
      "Comprobar el nivel (LI-204): con 3000 L, la mitad del reactor.",
    ],
  },
  {
    id: "agitacion",
    title: "4. Agitación",
    instr: ["Con el nivel por encima del volumen mínimo (500 L), arrancar el agitador M-204 a 90 rpm y comprobar la lectura."],
  },
  {
    id: "calentamiento",
    title: "5. Calentamiento",
    instr: [
      "Calentar a 70 °C: TIC-204 en automático con consigna 70 °C y la camisa TIC-204J en cascada.",
      "Diferencia máxima camisa-masa: 50 °C (vitrificado).",
    ],
  },
  {
    id: "adicion",
    title: "6. Adición del reactivo B",
    instr: [
      "Adicionar 600 kg de B (FQ-205) con la dosificadora P-205 en no menos de 60 min (600 kg/h como máximo).",
      "Masa entre 68 y 75 °C durante toda la adición. Si sale de ese intervalo, parar la adición y avisar.",
      "Agitador en marcha durante toda la adición (interlock I-01).",
    ],
  },
  {
    id: "reflujo",
    title: "7. Reflujo",
    instr: [
      "Condensador en reflujo y con agua. Subir la consigna de masa hasta alcanzar la ebullición (unos 115 °C).",
      "Mantener 2 h a reflujo contadas desde que empieza a hervir.",
    ],
  },
  {
    id: "ipc",
    title: "8. Control en proceso (IPC)",
    instr: [
      "Tomar muestra con agitación al final del reflujo. El laboratorio tarda unos 30 min.",
      "Especificación: B residual ≤ 0,5 % e impureza ≤ 0,30 %. Si no cumple, avisar y no seguir.",
    ],
  },
  {
    id: "enfriamiento",
    title: "9. Enfriamiento",
    instr: ["Enfriar a 25 ± 5 °C con glicol, sin superar la diferencia de 50 °C camisa-masa."],
  },
  {
    id: "descarga",
    title: "10. Descarga a R-205",
    instr: [
      "Abrir la válvula de fondo con P-207 y descargar todo a R-205.",
      "Mantener la agitación mientras el nivel lo permita y pararla al llegar al volumen mínimo.",
      "Cerrar la válvula de fondo y poner la etiqueta «Sucio».",
    ],
  },
  { id: "cierre", title: "11. Cierre", instr: ["Anotar incidencias y avisos del turno y firmar la hoja."] },
];

const sOrNull = (v: number | null) => v;
const mEsperada = (s: State) => s.solCargada + s.bAlimentado;

export const CAMPOS: Campo[] = [
  { id: "estado", paso: "previas", label: "Etiqueta de estado del R-204", kind: "select", options: ["Limpio", "Sucio", "En uso"], spec: "Limpio", real: () => "Limpio" },
  { id: "fondo", paso: "previas", label: "Válvula de fondo XV-204F", kind: "select", options: ["Cerrada", "Abierta"], spec: "Cerrada", real: (s) => (s.inputs.fondo ? "Abierta" : "Cerrada") },
  { id: "pdisco", paso: "previas", label: "PI-204D entre disco y válvula de seguridad", unit: "bar g", spec: "0,00", kind: "number", max: 0.02, real: (s) => s.pDisco, tol: 0.02 },
  { id: "barrera", paso: "previas", label: "Nivel del líquido de barrera LI-204S", unit: "%", spec: "40 – 80", kind: "number", min: 40, max: 80, real: (s) => s.barrera, tol: 3 },
  { id: "n2", paso: "previas", label: "Presión de nitrógeno de red PI-N2", unit: "bar g", spec: "≥ 4,0", kind: "number", min: 4, real: (s) => (activa(s, "nitrogeno") ? 0.3 : P.pN2Red), tol: 0.2 },

  { id: "ciclo1", paso: "inertizacion", label: "Ciclo 1: presión mínima", unit: "mbar abs", spec: "≤ 200", kind: "number", max: 200, real: (s) => s.ciclos[0]?.pMin ?? null, tol: 10 },
  { id: "ciclo2", paso: "inertizacion", label: "Ciclo 2: presión mínima", unit: "mbar abs", spec: "≤ 200", kind: "number", max: 200, real: (s) => s.ciclos[1]?.pMin ?? null, tol: 10 },
  { id: "ciclo3", paso: "inertizacion", label: "Ciclo 3: presión mínima", unit: "mbar abs", spec: "≤ 200", kind: "number", max: 200, real: (s) => s.ciclos[2]?.pMin ?? null, tol: 10 },
  { id: "o2", paso: "inertizacion", label: "Oxígeno final AI-204", unit: "%", spec: "< 2,0", kind: "number", max: 1.99, real: (s) => o2(s), tol: 0.1 },

  { id: "cargado", paso: "carga", label: "Solución de AX-21 cargada (FQ-204)", unit: "kg", spec: "2600 – 2620", kind: "number", min: 2600, max: 2620, real: (s) => s.solCargada, tol: 5 },
  { id: "nivelCarga", paso: "carga", label: "Nivel tras la carga (LI-204)", unit: "%", kind: "number", real: (s) => nivel(s), tol: 1.5 },

  { id: "rpm", paso: "agitacion", label: "Velocidad del agitador (SI-204)", unit: "rpm", spec: "85 – 95", kind: "number", min: 85, max: 95, real: (s) => s.rpm, tol: 3 },

  { id: "horaCal", paso: "calentamiento", label: "Hora en que la masa llega a 68 °C", kind: "time", real: () => null },
  { id: "tmCal", paso: "calentamiento", label: "Temperatura de masa al terminar (TI-204)", unit: "°C", spec: "68 – 75", kind: "number", min: 68, max: 75, real: (s) => tmLeida(s), tol: 1 },

  { id: "iniAd", paso: "adicion", label: "Hora de inicio de la adición", kind: "time", real: (s) => s.inicioAdicion, cuando: (s) => sOrNull(s.inicioAdicion) },
  { id: "finAd", paso: "adicion", label: "Hora de fin de la adición", kind: "time", real: (s) => s.finAdicion, cuando: (s) => sOrNull(s.finAdicion) },
  { id: "kgB", paso: "adicion", label: "B adicionado (FQ-205)", unit: "kg", spec: "597 – 603", kind: "number", min: 597, max: 603, real: (s) => s.bIndicado, tol: 3 },
  { id: "tminAd", paso: "adicion", label: "Temperatura mínima durante la adición (tendencia)", unit: "°C", spec: "≥ 68", kind: "number", min: 68, real: (s) => s.minTmAdicion, tol: 1 },
  { id: "tmaxAd", paso: "adicion", label: "Temperatura máxima durante la adición (tendencia)", unit: "°C", spec: "≤ 75", kind: "number", max: 75, real: (s) => s.maxTmAdicion, tol: 1 },

  { id: "iniRef", paso: "reflujo", label: "Hora de inicio del reflujo", kind: "time", real: (s) => s.inicioReflujo, cuando: (s) => s.inicioReflujo },
  { id: "finRef", paso: "reflujo", label: "Hora de fin del reflujo", kind: "time", real: () => null },
  { id: "tmRef", paso: "reflujo", label: "Temperatura de reflujo (TI-204)", unit: "°C", kind: "number", real: (s) => tmLeida(s), tol: 1.5 },

  { id: "horaIpc", paso: "ipc", label: "Hora de la toma de muestra", kind: "time", real: (s) => s.samples.at(-1)?.t ?? null, cuando: (s) => s.samples.at(-1)?.t ?? null },
  { id: "bRes", paso: "ipc", label: "B residual", unit: "%", spec: "≤ 0,5", kind: "number", max: 0.5, real: (s) => s.samples.at(-1)?.bResidual ?? null, tol: 0.02 },
  { id: "imp", paso: "ipc", label: "Impureza", unit: "%", spec: "≤ 0,30", kind: "number", max: 0.3, real: (s) => s.samples.at(-1)?.impureza ?? null, tol: 0.02 },

  { id: "tmFin", paso: "enfriamiento", label: "Temperatura final de masa", unit: "°C", spec: "20 – 30", kind: "number", min: 20, max: 30, real: (s) => tmLeida(s), tol: 1 },

  { id: "kgDesc", paso: "descarga", label: "Masa descargada a R-205 (báscula de R-205)", unit: "kg", kind: "number", real: (s) => s.mDescargado, tol: 10 },
  { id: "estadoFin", paso: "descarga", label: "Etiqueta de estado tras la descarga", kind: "select", options: ["Limpio", "Sucio", "En uso"], spec: "Sucio", real: () => "Sucio" },

  { id: "incidencias", paso: "cierre", label: "Incidencias, avisos y desviaciones del turno", kind: "text" },
];

export type Entry = { value: string; t: number; real: number | string | null; when: number | null };
export type Hoja = { entries: Record<string, Entry>; firmas: Partial<Record<PasoId, number>> };

export const newHoja = (): Hoja => ({ entries: {}, firmas: {} });

export function parseNum(v: string): number | null {
  const n = Number(v.replace(/\s/g, "").replace(",", "."));
  return v.trim() !== "" && Number.isFinite(n) ? n : null;
}

/** Convierte «hh:mm» en segundos de simulación (el turno empieza a las 06:00). */
export function parseHora(v: string): number | null {
  const m = /^(\d{1,2}):(\d{2})$/.exec(v.trim());
  if (!m) return null;
  let min = Number(m[1]) * 60 + Number(m[2]) - 6 * 60;
  if (min < 0) min += 24 * 60;
  return min * 60;
}

/** Anota un dato en la hoja: guarda el valor, la hora y lo que marcaba el sistema en ese momento. */
export function anotar(h: Hoja, s: State, id: string, value: string) {
  const c = CAMPOS.find((x) => x.id === id);
  if (!c) return;
  h.entries[id] = { value, t: s.t, real: c.real ? c.real(s) : null, when: c.cuando ? c.cuando(s) : null };
}

export function fueraDeSpec(c: Campo, v: string): boolean {
  if (c.kind === "select") return c.spec !== undefined && v !== c.spec;
  if (c.kind !== "number") return false;
  const n = parseNum(v);
  if (n === null) return false;
  return (c.min !== undefined && n < c.min) || (c.max !== undefined && n > c.max);
}

/* ───────────────────────────── Revisión del lote ───────────────────────────── */

export type Gravedad = "crítica" | "mayor" | "menor";
export type Hallazgo = { grav: Gravedad; texto: string };

export function revisar(s: State, h: Hoja): { hallazgos: Hallazgo[]; veredicto: string; resumen: string[] } {
  const out: Hallazgo[] = [];
  const add = (grav: Gravedad, texto: string) => out.push({ grav, texto });
  const incidencias = (h.entries.incidencias?.value ?? "").trim();

  // Proceso
  if (s.o2AlCargar !== null && s.o2AlCargar > 2) add("crítica", `Se cargó disolvente con un ${fmt(s.o2AlCargar)} % de oxígeno.`);
  if (s.solCargada < 2600 || s.solCargada > 2620) add("mayor", `Carga de solución fuera de la hoja: ${fmt(s.solCargada, 0)} kg (2600 – 2620).`);
  if (s.inicioAdicion === null) add("crítica", "No se hizo la adición del reactivo B.");
  else {
    const dur = ((s.finAdicion ?? s.t) - s.inicioAdicion) / 60;
    if (s.finAdicion === null) add("crítica", `La adición no se completó: ${fmt(s.bAlimentado, 0)} kg de 600.`);
    else if (dur < 59.5) add("mayor", `Adición en ${fmt(dur, 0)} min, menos de los 60 que pide la hoja.`);
    if (s.maxTmAdicion !== null && s.maxTmAdicion > 75) add("mayor", `La masa llegó a ${fmt(s.maxTmAdicion)} °C durante la adición (máximo 75).`);
    if (s.minTmAdicion !== null && s.minTmAdicion < 68) add("mayor", `La masa bajó a ${fmt(s.minTmAdicion)} °C durante la adición (mínimo 68): riesgo de acumulación.`);
  }
  if (s.bAlimentado > 603) add("mayor", `Entraron ${fmt(s.bAlimentado, 0)} kg de B, más de los 600 de la hoja (la báscula del depósito lo confirma).`);
  if (s.maxTm >= 80 && s.inicioAdicion !== null && (s.finAdicion === null || s.maxTmAdicion === null || s.maxTmAdicion >= 80))
    add("crítica", "Disparó el interlock de temperatura muy alta (80 °C) durante la adición.");
  if (s.tiempoDTexcedido > 0) add("mayor", `La diferencia camisa-masa superó los 50 °C durante ${fmt(s.tiempoDTexcedido / 60, 0)} min: riesgo para el vitrificado.`);
  if (s.tiempoReflujo < 119 * 60 && s.inicioReflujo !== null) add("mayor", `Reflujo de ${fmt(s.tiempoReflujo / 60, 0)} min, menos de las 2 h de la hoja.`);
  if (s.inicioReflujo === null && s.finAdicion !== null) add("mayor", "No se llegó a reflujo.");
  const ipc = s.samples.at(-1);
  if (!ipc) add("mayor", "No se tomó la muestra de control en proceso.");
  else if (ipc.ready > s.t) add("mayor", "Se siguió sin esperar el resultado del laboratorio.");
  else {
    if (ipc.bResidual > 0.5) add("crítica", `IPC fuera de especificación: B residual ${fmt(ipc.bResidual, 2)} %.`);
    if (ipc.impureza > 0.3) add("crítica", `IPC fuera de especificación: impureza ${fmt(ipc.impureza, 2)} %.`);
  }
  if (s.maxP >= 1.5) add("crítica", `La presión llegó a ${fmt(s.maxP, 2)} bar g y disparó el interlock de presión muy alta.`);
  if (s.discoRoto) add("crítica", "Se rompió el disco de ruptura.");
  if (s.emisionVapor > 20) add("mayor", `Salieron ${fmt(s.emisionVapor, 0)} kg de tolueno por el venteo o la bomba de vacío.`);
  if (s.agitBajoMinimo > 60) add("menor", `El agitador giró ${fmt(s.agitBajoMinimo / 60, 0)} min por debajo del volumen mínimo.`);
  if (s.tmAlDescargar !== null && s.tmAlDescargar > 30) add("mayor", `Se empezó a descargar con la masa a ${fmt(s.tmAlDescargar)} °C (máximo 30).`);
  if (s.mDescargado > 0 && s.mDescargado < mEsperada(s) - 50) add("mayor", `Descarga incompleta: ${fmt(s.mDescargado, 0)} kg.`);
  if (s.alarms.some((a) => !a.acked)) add("menor", "Quedaron alarmas sin reconocer al terminar.");

  // Averías: aviso, respuesta y registro de cada una
  const ocurridas = s.faults.filter((f) => f.desde !== null);
  for (const f of ocurridas) {
    const nombre = GUIA[f.id].titulo;
    if (f.aviso === null) add("mayor", `${nombre}: no consta ningún aviso al jefe de turno ni a mantenimiento.`);
    else if (f.aviso - (f.desde as number) > 30 * 60) add("menor", `${nombre}: el aviso llegó ${fmt((f.aviso - (f.desde as number)) / 60, 0)} min después de empezar.`);
    if (f.respuesta === null) add("mayor", `${nombre}: no se hizo lo que pedía la situación (${GUIA[f.id].clave}).`);
  }
  if (ocurridas.length > 0 && incidencias === "") add("mayor", "Las averías del turno no aparecen en las incidencias de la hoja.");

  // Hoja: datos sin anotar, inexactos, fuera de especificación sin explicar, no contemporáneos
  for (const c of CAMPOS) {
    const e = h.entries[c.id];
    if (!e || e.value.trim() === "") {
      if (c.id !== "incidencias") add("menor", `Dato sin anotar: «${c.label}».`);
      continue;
    }
    if (c.kind === "number" && typeof e.real === "number" && c.tol !== undefined) {
      const n = parseNum(e.value);
      if (n === null) add("menor", `«${c.label}»: «${e.value}» no es un número.`);
      else if (Math.abs(n - e.real) > c.tol)
        add("mayor", `«${c.label}»: anotado ${e.value}, pero el sistema marcaba ${fmt(e.real, c.unit === "kg" || c.unit === "mbar abs" ? 0 : 2)}${c.unit ? " " + c.unit : ""}.`);
    }
    if (c.kind === "select" && typeof e.real === "string" && e.value !== e.real)
      add("mayor", `«${c.label}»: anotado «${e.value}», pero lo real era «${e.real}».`);
    if (c.kind === "time" && typeof e.real === "number") {
      const t = parseHora(e.value);
      if (t === null) add("menor", `«${c.label}»: «${e.value}» no es una hora hh:mm.`);
      else if (Math.abs(t - e.real) > 5 * 60) add("mayor", `«${c.label}»: anotado ${e.value}, pero el sistema registró ${fmtHora(e.real)}.`);
    }
    if (fueraDeSpec(c, e.value) && incidencias === "") add("mayor", `«${c.label}» fuera de especificación (${c.spec}) sin explicación en incidencias.`);
    if (e.when !== null && e.t - e.when > 30 * 60) add("menor", `«${c.label}» se anotó ${fmt((e.t - e.when) / 60, 0)} min después de ocurrir: no es contemporáneo.`);
  }
  for (const p of PASOS) if (!h.firmas[p.id]) add("menor", `Falta la firma del paso «${p.title}».`);

  const crit = out.filter((x) => x.grav === "crítica").length;
  const may = out.filter((x) => x.grav === "mayor").length;
  const veredicto =
    crit > 0
      ? "Lote retenido: hay hallazgos críticos. Calidad abre una investigación antes de decidir."
      : may > 0
        ? "Lote con desviaciones: calidad debe evaluarlas antes de liberar la etapa."
        : out.length > 0
          ? "Lote conforme con observaciones menores de documentación."
          : "Lote conforme: hoja completa y proceso dentro de lo que pide la hoja.";
  const resumen = [
    `Carga: ${fmt(s.solCargada, 0)} kg · B: ${fmt(s.bAlimentado, 0)} kg · descargado: ${fmt(s.mDescargado, 0)} kg`,
    s.inicioAdicion !== null
      ? `Adición: ${fmt(((s.finAdicion ?? s.t) - s.inicioAdicion) / 60, 0)} min, masa entre ${fmt(s.minTmAdicion ?? 0)} y ${fmt(s.maxTmAdicion ?? 0)} °C`
      : "Adición: no hecha",
    `Reflujo: ${fmt(s.tiempoReflujo / 60, 0)} min · temperatura máxima ${fmt(s.maxTm)} °C · presión máxima ${fmt(s.maxP, 2)} bar g`,
    ipc ? `IPC: B residual ${fmt(ipc.bResidual, 2)} %, impureza ${fmt(ipc.impureza, 2)} %` : "IPC: sin muestra",
    `Presión ahora: ${fmt(pGauge(s), 2)} bar g · emisiones de tolueno ${fmt(s.emisionVapor, 0)} kg`,
  ];
  return { hallazgos: out, veredicto, resumen };
}
