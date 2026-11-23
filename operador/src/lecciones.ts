import { getLesson } from "@/content";
import { lessonMedia, type LessonMedia } from "@/content/media";
import { aplicarAjustes } from "./ajustes";
import { etapas, todasLasLecciones } from "./edicion";

const enEdicion = new Set(todasLasLecciones);

/** Lección de la edición de operador, con sus ajustes de texto. Las que no están en la edición no existen aquí. */
export function getLeccion(slug: string) {
  if (!enEdicion.has(slug)) return undefined;
  const l = getLesson(slug);
  return l && aplicarAjustes(slug, l);
}

/**
 * Imágenes de una lección en esta edición: fotos y esquemas de Wikimedia Commons, pictogramas GHS y señales ISO 7010.
 * Sin vídeos (no tienen licencia libre) ni simulaciones PhET (licencia no comercial).
 */
export function mediaDe(slug: string): LessonMedia | undefined {
  const m = lessonMedia[slug];
  if (!m) return undefined;
  const out: LessonMedia = { images: m.images, ghs: m.ghs, signs: m.signs };
  return out.images?.length || out.ghs || out.signs?.length ? out : undefined;
}

/** Imágenes que usa la edición (etapas y lecciones), para copiarlas y para los créditos. */
export function imagenesUsadas() {
  const ids = new Set(etapas.flatMap((e) => e.images));
  for (const s of todasLasLecciones) for (const id of mediaDe(s)?.images ?? []) ids.add(id);
  return [...ids];
}

export function senalesUsadas() {
  return [...new Set(todasLasLecciones.flatMap((s) => (mediaDe(s)?.signs ?? []).flatMap((g) => g.ids)))];
}
