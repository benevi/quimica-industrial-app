import { lessons } from "@/content";
import type { Question } from "@/content/types";
import { bank } from "./banco";
import type { CertModule } from "./data";

export function lessonsForLevels(levels: number[]) {
  return lessons.filter((l) => levels.includes(l.level));
}

/** Preguntas disponibles para el simulacro de un módulo: tests de las lecciones + banco propio */
export function questionsForModule(m: CertModule): { q: Question; from: string }[] {
  const fromLessons = lessonsForLevels(m.levels).flatMap((l) => l.quiz.map((q) => ({ q, from: l.title })));
  const own = (bank[m.id] ?? []).map((q) => ({ q, from: "Banco de examen" }));
  return [...own, ...fromLessons];
}
