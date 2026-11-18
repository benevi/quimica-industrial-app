import type { Question } from "@/content/types";

export type Answer = string | number | undefined;

/** Acepta coma o punto decimal y espacios; no acepta separador de miles con punto */
export function parseNum(s: string) {
  const n = Number(s.trim().replace(/\s/g, "").replace(",", "."));
  return Number.isFinite(n) ? n : null;
}

export function isRight(q: Question, a: Answer) {
  if (a === undefined || a === "") return false;
  if (q.kind === "choice") return a === q.answer;
  const n = parseNum(String(a));
  return n !== null && Math.abs(n - q.answer) <= Math.abs(q.answer) * q.tolerance + 1e-9;
}

export const fmt = (n: number) => n.toLocaleString("es-ES", { maximumFractionDigits: 4 });

/** Nota para mostrar: sobre 10 con una decimal, o en % */
export function showGrade(fraction: number, scale: "0-10" | "%") {
  return scale === "0-10" ? `${(Math.round(fraction * 100) / 10).toLocaleString("es-ES")} / 10` : `${Math.round(fraction * 100)} %`;
}
