import { getLesson } from "@/content/catalog";
import { etapas, type Etapa } from "./edicion";

export type LeccionBreve = { slug: string; title: string; minutes: number; summary: string };
export type EtapaBreve = Pick<Etapa, "id" | "corto" | "title" | "titleEn" | "icon" | "resumen"> & {
  lecciones: LeccionBreve[];
  ampliacion: LeccionBreve[];
};

/** Datos ligeros (catálogo) de una lección, para las páginas que se pintan en el navegador. */
export function breve(slug: string): LeccionBreve {
  const l = getLesson(slug);
  if (!l) throw new Error(`Edición de operador: no existe la lección «${slug}»`);
  return { slug, title: l.title, minutes: l.minutes, summary: l.summary };
}

export function etapaBreve(e: Etapa): EtapaBreve {
  return {
    id: e.id,
    corto: e.corto,
    title: e.title,
    titleEn: e.titleEn,
    icon: e.icon,
    resumen: e.resumen,
    lecciones: e.lecciones.map(breve),
    ampliacion: (e.ampliacion ?? []).map(breve),
  };
}

export const etapasBreves = () => etapas.map(etapaBreve);

export { horas } from "./formato";
