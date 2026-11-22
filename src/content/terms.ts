// Vocabulario de todas las lecciones (generado con `npm run gen:catalog`), para el glosario y las tarjetas.
import data from "./terms.generated.json";
import { getLesson } from "./catalog";

export type TermEntry = { es: string; en: string; def: string; lesson: string; lessonTitle: string };

export const allTerms: TermEntry[] = data
  .map((t) => ({ ...t, lessonTitle: getLesson(t.lesson)?.title ?? "" }))
  .sort((a, b) => a.es.localeCompare(b.es, "es"));

/** Términos de una lección en su orden original (el índice forma parte del id de las tarjetas de vocabulario). */
export function termsOfLesson(slug: string) {
  return data.filter((t) => t.lesson === slug);
}
