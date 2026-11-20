import type { Question } from "@/content/types";
import { matchesNumber } from "@/lib/num";

export { parseNum } from "@/lib/num";

export type Answer = string | number | undefined;

/** En las numéricas acepta coma decimal, punto de millares («1.250») y una unidad al final */
export function isRight(q: Question, a: Answer) {
  if (a === undefined || a === "") return false;
  if (q.kind === "choice") return a === q.answer;
  return matchesNumber(String(a), q.answer, q.tolerance);
}

export const fmt = (n: number) => n.toLocaleString("es-ES", { maximumFractionDigits: 4 });

/** Nota para mostrar: sobre 10 con una decimal, o en % */
export function showGrade(fraction: number, scale: "0-10" | "%") {
  return scale === "0-10" ? `${(Math.round(fraction * 100) / 10).toLocaleString("es-ES")} / 10` : `${Math.round(fraction * 100)} %`;
}
