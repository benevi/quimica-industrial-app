import type { Lesson, Level } from "./types";
import { nivel0 } from "./nivel0";
import { nivel1 } from "./nivel1";
import { nivel5 } from "./nivel5";
import { nivel7 } from "./nivel7";

export const levels: Level[] = [
  { number: 0, title: "Arranque", titleEn: "Getting started", description: "Matemáticas, unidades y cómo es una planta de API." },
  { number: 1, title: "Fundamentos de química", titleEn: "Chemistry fundamentals", description: "Materia, átomos, enlaces, el mol, disoluciones y pH." },
  { number: 2, title: "Reacciones químicas", titleEn: "Chemical reactions", description: "Estequiometría, rendimiento, calor y velocidad de reacción." },
  { number: 3, title: "Química orgánica para planta", titleEn: "Organic chemistry for operators", description: "Grupos funcionales, disolventes, quiralidad y polimorfismo." },
  { number: 4, title: "Laboratorio y control de calidad", titleEn: "Lab and QC", description: "Muestreo, análisis y especificaciones." },
  { number: 5, title: "Operaciones de planta", titleEn: "Unit operations", description: "Reactores, carga e inertización, centrífugas, filtros y secaderos." },
  { number: 6, title: "Seguridad", titleEn: "Safety (EHS)", description: "Pictogramas, EPI, ATEX y permisos de trabajo." },
  { number: 7, title: "GMP y ALCOA+", titleEn: "GMP and data integrity", description: "Normas, documentación y desviaciones." },
];

export const lessons: Lesson[] = [...nivel0, ...nivel1, ...nivel5, ...nivel7].sort(
  (a, b) => a.level - b.level || a.order - b.order,
);

export function getLesson(slug: string) {
  return lessons.find((l) => l.slug === slug);
}

export function lessonsOfLevel(level: number) {
  return lessons.filter((l) => l.level === level);
}

export function nextLesson(slug: string) {
  const i = lessons.findIndex((l) => l.slug === slug);
  return i >= 0 ? lessons[i + 1] : undefined;
}

export const allTerms = lessons
  .flatMap((l) => l.terms.map((t) => ({ ...t, lesson: l.slug, lessonTitle: l.title })))
  .sort((a, b) => a.es.localeCompare(b.es, "es"));
