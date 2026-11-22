// Catálogo ligero de lecciones para las páginas que se ejecutan en el navegador: título, nivel, minutos y resumen,
// sin el texto ni el test. Se genera desde el contenido con `npm run gen:catalog` (automático antes de dev y build).
import data from "./catalog.generated.json";
import type { Lesson } from "./types";
export { levels } from "./levels";

export type LessonMeta = Pick<Lesson, "slug" | "level" | "order" | "title" | "titleEn" | "minutes" | "summary"> & { nTerms: number; nQuiz: number };

export const lessons: LessonMeta[] = data;

export function getLesson(slug: string) {
  return lessons.find((l) => l.slug === slug);
}

export function lessonsOfLevel(level: number) {
  return lessons.filter((l) => l.level === level);
}
