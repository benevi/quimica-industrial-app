/**
 * Lectura de números escritos a mano, con el formato español de la app:
 * coma decimal («1,25») y, si se quiere, punto de millares («1.250», «41.800»).
 * También acepta una unidad o «%» al final («85 %», «12 kg»).
 */

/** «1.250»: en español es mil doscientos cincuenta, pero hay quien escribe así 1,25 */
const THOUSANDS = /^[-+]?[1-9]\d{0,2}(\.\d{3})+$/;

function toNumber(s: string) {
  if (!/^[-+]?(\d+\.?\d*|\.\d+)$/.test(s)) return null;
  const n = Number(s);
  return Number.isFinite(n) ? n : null;
}

/**
 * Todas las lecturas razonables de lo escrito, la más probable primero.
 * Casi siempre hay una; «1.250» da dos (1250 y 1,25). Vacío o texto sin número: ninguna.
 */
export function readNumbers(input: string | undefined | null): number[] {
  if (input == null) return [];
  const s = String(input)
    .replace(/[\s  ]/g, "")
    .replace(/[^\d.,]+$/, ""); // unidad o % al final
  if (s === "") return [];
  const out: (number | null)[] = [];
  const hasDot = s.includes(".");
  const hasComma = s.includes(",");
  if (hasDot && hasComma) {
    // el último separador es el decimal: «1.013,25» o «1,013.25»
    out.push(s.lastIndexOf(",") > s.lastIndexOf(".") ? toNumber(s.replace(/\./g, "").replace(",", ".")) : toNumber(s.replace(/,/g, "")));
  } else if (hasComma) {
    out.push(toNumber(s.replace(",", ".")));
  } else if (THOUSANDS.test(s)) {
    out.push(toNumber(s.replace(/\./g, "")));
    if (s.split(".").length === 2) out.push(toNumber(s));
  } else {
    out.push(toNumber(s));
  }
  return out.filter((n): n is number => n !== null);
}

/** La lectura más probable, o null si no hay número */
export function parseNum(input: string | undefined | null): number | null {
  return readNumbers(input)[0] ?? null;
}

/** true si lo escrito admite dos lecturas («1.250») */
export function isAmbiguous(input: string) {
  return readNumbers(input).length > 1;
}

/** ¿Alguna lectura de lo escrito cae dentro del margen relativo de la respuesta esperada? */
export function matchesNumber(input: string | undefined | null, expected: number, tolerance: number) {
  return readNumbers(input).some((n) => Math.abs(n - expected) <= Math.abs(expected) * tolerance + 1e-9);
}

/** Orden estable y repetible de n elementos a partir de un texto y un número de intento */
export function seededOrder(n: number, text: string, seed = 0) {
  let h = 2166136261 ^ seed;
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  const rand = () => {
    h += 0x6d2b79f5;
    let t = h;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const order = Array.from({ length: n }, (_, i) => i);
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return order;
}
