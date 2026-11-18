/**
 * Copia de seguridad del progreso. Todo lo que guarda la app vive en localStorage bajo claves
 * que empiezan por «quimica-app:» (lecciones, certificaciones y repaso, simulador de planta, ERP).
 * Exportar las mete todas en un archivo JSON; importar las vuelve a escribir tal cual.
 */
export const PREFIX = "quimica-app:";
const FORMAT = "quimica-app-progreso";

export type Backup = {
  format: typeof FORMAT;
  version: 1;
  exportedAt: string;
  /** Clave de localStorage → valor tal cual estaba guardado (texto JSON) */
  data: Record<string, string>;
};

/** Qué guarda cada clave, para enseñarlo antes de importar */
export const KEY_LABELS: Record<string, string> = {
  "quimica-app:progreso:v1": "Lecciones y tests",
  "quimica-app:certificaciones:v1": "Certificaciones, simulacros y repaso de fallos",
  "quimica-app:simulador:v1": "Lote en curso del simulador de planta",
  "quimica-app:erp:v1": "Simulador ERP",
};

export function collectBackup(): Backup {
  const data: Record<string, string> = {};
  for (let i = 0; i < window.localStorage.length; i++) {
    const k = window.localStorage.key(i);
    if (!k || !k.startsWith(PREFIX)) continue;
    const raw = window.localStorage.getItem(k);
    if (raw != null) data[k] = raw;
  }
  return { format: FORMAT, version: 1, exportedAt: new Date().toISOString(), data };
}

export function backupFileName(d = new Date()) {
  return `aula-quimica-progreso-${d.toISOString().slice(0, 10)}.json`;
}

/** Lee y valida un archivo de copia. Lanza un Error con un mensaje para el usuario si no vale. */
export function parseBackup(text: string): Backup {
  let obj: unknown;
  try {
    obj = JSON.parse(text);
  } catch {
    throw new Error("El archivo no es un JSON válido.");
  }
  const b = obj as Partial<Backup>;
  if (!b || typeof b !== "object" || b.format !== FORMAT) throw new Error("Este archivo no es una copia de progreso del Aula de Química.");
  if (b.version !== 1) throw new Error(`Versión de copia no compatible (${String(b.version)}).`);
  if (!b.data || typeof b.data !== "object" || Array.isArray(b.data)) throw new Error("La copia no contiene datos.");
  const keys = Object.keys(b.data);
  if (keys.some((k) => !k.startsWith(PREFIX))) throw new Error("La copia contiene datos que no son de esta app.");
  if (Object.values(b.data).some((v) => typeof v !== "string")) throw new Error("La copia está dañada.");
  return b as Backup;
}

/**
 * Sustituye el progreso actual por el de la copia: borra las claves de la app que no estén
 * en la copia y escribe las que sí.
 */
export function restoreBackup(b: Backup) {
  const current: string[] = [];
  for (let i = 0; i < window.localStorage.length; i++) {
    const k = window.localStorage.key(i);
    if (k && k.startsWith(PREFIX)) current.push(k);
  }
  for (const k of current) if (!(k in b.data)) window.localStorage.removeItem(k);
  for (const [k, v] of Object.entries(b.data)) window.localStorage.setItem(k, v);
}

/** Resumen legible de una copia (o del estado actual) */
export function summarize(data: Record<string, string>) {
  const parse = (k: string) => {
    try {
      return data[k] ? JSON.parse(data[k]) : undefined;
    } catch {
      return undefined;
    }
  };
  const lessons = parse("quimica-app:progreso:v1") as Record<string, { done?: boolean }> | undefined;
  const certs = parse("quimica-app:certificaciones:v1") as
    | { exams?: object; mocks?: object; srs?: object; cases?: object; missions?: object }
    | undefined;
  const count = (o?: object) => (o ? Object.keys(o).length : 0);
  return {
    lessonsDone: lessons ? Object.values(lessons).filter((l) => l?.done).length : 0,
    exams: count(certs?.exams) + count(certs?.mocks) + count(certs?.cases),
    review: count(certs?.srs),
    missions: count(certs?.missions),
    simulator: "quimica-app:simulador:v1" in data,
    erp: "quimica-app:erp:v1" in data,
    keys: Object.keys(data),
  };
}
