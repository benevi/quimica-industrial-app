// Preguntas de los ejercicios de fichas de seguridad, con id estable (fds:<ejercicio>:<índice>).
// Van aparte de pool.ts para que las páginas de FDS no carguen los bancos de las certificaciones
// (la edición de operador usa estas páginas y no lleva certificaciones).
import { fdsQuestions, fdsQuizIds, fdsQuizTitle } from "@/content/fds";
import type { Question } from "@/content/types";

export type PoolItem = { id: string; q: Question; from: string; unit: string };

/** Preguntas de un ejercicio de fichas de seguridad, con id estable para el repaso de fallos */
export function fdsItems(quizId: string): PoolItem[] {
  return fdsQuestions(quizId).map((q, i) => ({ id: `fds:${quizId}:${i}`, q, from: fdsQuizTitle(quizId), unit: "" }));
}

export const allFdsItems = () => fdsQuizIds.flatMap(fdsItems);
