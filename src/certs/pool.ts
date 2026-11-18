// Preguntas con id estable para simulacros y repaso:
//   bank:<unidad>:<índice>   → banco propio del examen (src/certs/bancos)
//   lesson:<slug>:<índice>   → test de una lección del temario
//   case:<caso>:<índice>     → pregunta de un supuesto práctico
import { getLesson } from "@/content";
import type { Question } from "@/content/types";
import { quie0108 } from "./bancos/quie0108";
import { gmp } from "./bancos/gmp";
import { sap } from "./bancos/sap";
import { cases, getCase } from "./casos";
import { preps, type ExamPrep } from "./prep";
import type { PrepSummary } from "./readiness";

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
  return undefined;
}

/** Todos los ids de pregunta que cubre una certificación (para el indicador de repaso pendiente) */
export function prepIds(p: ExamPrep): Set<string> {
  const ids = new Set<string>();
  for (const u of p.units) {
    for (const x of unitPool(u.key)) ids.add(x.id);
    for (const k of cases.filter((c) => c.unit === u.key)) for (const x of caseItems(k.id)) ids.add(x.id);
  }
  return ids;
}

export function bankSize(p: ExamPrep) {
  return p.units.reduce((a, u) => a + (banks[u.key]?.length ?? 0), 0);
}

/** Datos que necesita el indicador "listo para presentarte" */
export function prepSummary(p: ExamPrep): PrepSummary {
  return {
    certId: p.certId,
    lessons: [...new Set(p.units.flatMap((u) => unitLessons(u.key).map((l) => l.slug)))],
    mocks: p.mocks.map((m) => ({ id: m.id, title: m.title, pass: m.pass, scale: m.scale })),
    cases: cases.filter((c) => p.units.some((u) => u.key === c.unit)).map((c) => c.id),
    ids: [...prepIds(p)],
    practice: p.certId === "sap-pp" ? "sap" : "plant",
  };
}
