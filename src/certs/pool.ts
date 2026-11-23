// Preguntas con id estable para simulacros y repaso:
//   bank:<unidad>:<índice>   → banco propio del examen (src/certs/bancos)
//   lesson:<slug>:<índice>   → test de una lección del temario
//   case:<caso>:<índice>     → pregunta de un supuesto práctico
//   fds:<ejercicio>:<índice> → ejercicio de fichas de seguridad (src/content/fds.ts)
import { getLesson } from "@/content";
import { fdsQuestions, fdsQuizIds, fdsQuizTitle } from "@/content/fds";
import type { Question } from "@/content/types";
import { quie0108 } from "./bancos/quie0108";
import { gmp } from "./bancos/gmp";
import { sap } from "./bancos/sap";
import { getCase } from "./casos";
import { preps } from "./prep";

export type PoolItem = { id: string; q: Question; from: string; unit: string };

const banks: Record<string, Question[]> = { ...quie0108, ...gmp, ...sap };

function unitOf(key: string) {
  for (const p of preps) {
    const u = p.units.find((x) => x.key === key);
    if (u) return { prep: p, unit: u };
  }
  return undefined;
}

/** Lecciones del temario de una unidad que existen en la app */
export function unitLessons(key: string) {
  const u = unitOf(key)?.unit;
  if (!u) return [];
  const slugs = [...new Set(u.topics.flatMap((t) => t.lessons))];
  return slugs.map((s) => getLesson(s)).filter((l): l is NonNullable<typeof l> => !!l);
}

/** Preguntas tipo test de una unidad: banco propio + tests de sus lecciones */
export function unitPool(key: string): PoolItem[] {
  const u = unitOf(key)?.unit;
  const own = (banks[key] ?? []).map((q, i) => ({ id: `bank:${key}:${i}`, q, from: `Banco ${u?.code ?? key}`, unit: key }));
  const fromLessons = unitLessons(key).flatMap((l) => l.quiz.map((q, i) => ({ id: `lesson:${l.slug}:${i}`, q, from: l.title, unit: key })));
  return [...own, ...fromLessons];
}

export function caseItems(caseId: string): PoolItem[] {
  const k = getCase(caseId);
  if (!k) return [];
  return k.questions.map((q, i) => ({ id: `case:${k.id}:${i}`, q, from: `Supuesto: ${k.title}`, unit: k.unit }));
}

/** Busca una pregunta por su id (para el repaso) */
export function questionById(id: string): PoolItem | undefined {
  const [kind, key, idx] = id.split(":");
  const i = Number(idx);
  if (kind === "bank") {
    const q = banks[key]?.[i];
    return q && { id, q, from: `Banco ${unitOf(key)?.unit.code ?? key}`, unit: key };
  }
  if (kind === "lesson") {
    const l = getLesson(key);
    const q = l?.quiz[i];
    return q && { id, q, from: l!.title, unit: "" };
  }
  if (kind === "case") return caseItems(key)[i];
  if (kind === "fds") {
    const q = fdsQuestions(key)[i];
    return q && { id, q, from: fdsQuizTitle(key), unit: "" };
  }
  return undefined;
}

/** Preguntas de un ejercicio de fichas de seguridad, con id estable para el repaso de fallos */
export function fdsItems(quizId: string): PoolItem[] {
  return fdsQuestions(quizId).map((q, i) => ({ id: `fds:${quizId}:${i}`, q, from: fdsQuizTitle(quizId), unit: "" }));
}

export const allFdsItems = () => fdsQuizIds.flatMap(fdsItems);

// Los resúmenes ligeros (ids, tamaño del banco, indicador) están en summary.ts para no cargar los tests en el navegador.
export { bankSize, prepIds, prepSummary } from "./summary";
