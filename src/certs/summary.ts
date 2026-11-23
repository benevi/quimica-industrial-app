// Resúmenes ligeros de las certificaciones para las páginas del navegador: cuentan preguntas y forman sus ids
// sin cargar el texto de los tests de las lecciones (solo usan el catálogo ligero).
import { getLesson, lessons } from "@/content/catalog";
import { quie0108 } from "./bancos/quie0108";
import { gmp } from "./bancos/gmp";
import { sap } from "./bancos/sap";
import { bank } from "./banco";
import { cases } from "./casos";
import { preps, type ExamPrep } from "./prep";
import type { CertModule } from "./data";
import type { PrepSummary } from "./readiness";

const banks = { ...quie0108, ...gmp, ...sap } as Record<string, unknown[]>;

function unitOf(key: string) {
  for (const p of preps) {
    const u = p.units.find((x) => x.key === key);
    if (u) return u;
  }
  return undefined;
}

/** Lecciones del temario de una unidad que existen en la app (solo sus datos de catálogo). */
export function unitLessons(key: string) {
  const u = unitOf(key);
  if (!u) return [];
  const slugs = [...new Set(u.topics.flatMap((t) => t.lessons))];
  return slugs.map((s) => getLesson(s)).filter((l): l is NonNullable<typeof l> => !!l);
}

function unitIds(key: string): string[] {
  const own = (banks[key] ?? []).map((_, i) => `bank:${key}:${i}`);
  const fromLessons = unitLessons(key).flatMap((l) => Array.from({ length: l.nQuiz }, (_, i) => `lesson:${l.slug}:${i}`));
  return [...own, ...fromLessons];
}

/** Todos los ids de pregunta que cubre una certificación (para el indicador de repaso pendiente). */
export function prepIds(p: ExamPrep): Set<string> {
  const ids = new Set<string>();
  for (const u of p.units) {
    for (const id of unitIds(u.key)) ids.add(id);
    for (const k of cases.filter((c) => c.unit === u.key)) k.questions.forEach((_, i) => ids.add(`case:${k.id}:${i}`));
  }
  return ids;
}

export function bankSize(p: ExamPrep) {
  return p.units.reduce((a, u) => a + (banks[u.key]?.length ?? 0), 0);
}

/** Datos que necesita el indicador "listo para presentarte". */
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

export function lessonsForLevels(levels: number[]) {
  return lessons.filter((l) => levels.includes(l.level));
}

/** Número de preguntas del simulacro de un módulo: tests de sus lecciones más el banco propio. */
export function questionCountForModule(m: CertModule) {
  return lessonsForLevels(m.levels).reduce((a, l) => a + l.nQuiz, 0) + (bank[m.id]?.length ?? 0);
}

/** Comprueba sin cargar las preguntas que un id de repaso corresponde a una pregunta que existe. */
export function questionExists(id: string): boolean {
  const [kind, key, idx] = id.split(":");
  const i = Number(idx);
  if (!Number.isInteger(i) || i < 0) return false;
  if (kind === "lesson") return i < (getLesson(key)?.nQuiz ?? 0);
  if (kind === "bank") return i < (banks[key]?.length ?? 0);
  if (kind === "case") return i < (cases.find((c) => c.id === key)?.questions.length ?? 0);
  return kind === "fds";
}
