/**
 * Fusión del progreso de dos dispositivos. Se usa cuando los dos han cambiado desde la última
 * sincronización: en vez de obligar a elegir uno y perder el otro, se combinan registro a registro.
 *
 * Reglas:
 *  - Lecciones: unión; si la misma lección está en los dos, gana la mejor nota (a igual nota, la más reciente).
 *  - Exámenes y simulacros: la mejor nota como «mejor» y el intento más reciente como «último».
 *  - Repaso espaciado y tarjetas: gana la caja más baja (se repasa de más, nunca de menos).
 *  - Supuestos y fichas de seguridad: la mejor nota.
 *  - Lo que solo está en un lado, se conserva.
 */
type Obj = Record<string, unknown>;

const isObj = (v: unknown): v is Obj => !!v && typeof v === "object" && !Array.isArray(v);
const parse = (raw: string | undefined): Obj | null => {
  if (raw == null) return null;
  try {
    const v = JSON.parse(raw) as unknown;
    return isObj(v) ? v : null;
  } catch {
    return null;
  }
};

/** Une dos mapas clave → valor; si la clave está en los dos, decide `pick` */
function union<T>(a: unknown, b: unknown, pick: (x: T, y: T) => T): Record<string, T> {
  const A = isObj(a) ? (a as Record<string, T>) : {};
  const B = isObj(b) ? (b as Record<string, T>) : {};
  const out: Record<string, T> = { ...B };
  for (const [k, v] of Object.entries(A)) out[k] = k in B ? pick(v, B[k]) : v;
  return out;
}

type Result = { score: number; total: number; date: string };
const ratio = (r: Result | undefined) => (r && r.total > 0 ? r.score / r.total : -1);
const later = <T extends { date?: string }>(x: T, y: T) => ((x?.date ?? "") >= (y?.date ?? "") ? x : y);
const better = (x: Result, y: Result) => (ratio(x) > ratio(y) ? x : ratio(y) > ratio(x) ? y : later(x, y));

type Lesson = { done: boolean; score: number; total: number; date: string };
const pickLesson = (x: Lesson, y: Lesson): Lesson => {
  const w = better(x, y);
  return { ...w, done: Boolean(x?.done || y?.done) };
};

type Pair = { best: Result; last: Result };
const pickPair = (x: Pair, y: Pair): Pair => ({ best: better(x.best, y.best), last: later(x.last, y.last) });

type Srs = { box: number; due: string };
const pickSrs = (x: Srs, y: Srs): Srs => (x.box < y.box ? x : y.box < x.box ? y : x.due <= y.due ? x : y);

const max = (x: number, y: number) => Math.max(x, y);

function mergeMocks(a: unknown, b: unknown) {
  return union<Result[]>(a, b, (x, y) => {
    const seen = new Set<string>();
    return [...(Array.isArray(x) ? x : []), ...(Array.isArray(y) ? y : [])]
      .filter((r) => {
        const id = `${r.date}|${r.score}|${r.total}`;
        return !seen.has(id) && (seen.add(id), true);
      })
      .sort((p, q) => (p.date < q.date ? -1 : p.date > q.date ? 1 : 0))
      .slice(-5);
  });
}

function mergeCerts(a: Obj, b: Obj): Obj {
  const out: Obj = { ...b, ...a };
  out.roadmap = union<boolean>(a.roadmap, b.roadmap, (x, y) => x || y);
  out.exams = union<Pair>(a.exams, b.exams, pickPair);
  out.self = union<Record<string, number>>(a.self, b.self, (x, y) => ({ ...y, ...x }));
  out.missions = union<string>(a.missions, b.missions, (x, y) => (x <= y ? x : y));
  out.srs = union<Srs>(a.srs, b.srs, pickSrs);
  out.mocks = mergeMocks(a.mocks, b.mocks);
  out.cases = union<number>(a.cases, b.cases, max);
  if (a.cards || b.cards) out.cards = union<Srs>(a.cards, b.cards, pickSrs);
  if (a.fds || b.fds) out.fds = union<number>(a.fds, b.fds, max);
  if (isObj(a.sapExam) && isObj(b.sapExam)) out.sapExam = pickPair(a.sapExam as Pair, b.sapExam as Pair);
  if (isObj(a.plant) && isObj(b.plant)) {
    const pa = a.plant as { score: number }, pb = b.plant as { score: number };
    out.plant = pa.score >= pb.score ? pa : pb;
  }
  return out;
}

const MERGERS: Record<string, (a: Obj, b: Obj) => Obj> = {
  "quimica-app:progreso:v1": (a, b) => union<Lesson>(a, b, pickLesson),
  "quimica-app:certificaciones:v1": mergeCerts,
};

export const canMerge = (key: string) => key in MERGERS;

/** Combina el valor guardado de una clave en dos dispositivos. Si alguno no se puede leer, devuelve el otro. */
export function mergeValue(key: string, local: string, remote: string): string {
  const a = parse(local), b = parse(remote);
  if (!a) return remote;
  if (!b) return local;
  return JSON.stringify(MERGERS[key](a, b));
}
