"use client";

import { useSearchParams } from "next/navigation";
import { getLesson, lessons } from "@/content/catalog";
import { operatorSlugs } from "@/content/operador";

/**
 * Siguiente y anterior según la ruta por la que llegaste a la lección:
 * la ruta del operador (?ruta=operador) o el temario completo.
 */
export function useLessonRoute(slug: string) {
  const params = useSearchParams();
  const operator = params.get("ruta") === "operador" && operatorSlugs.includes(slug);
  if (operator) {
    const i = operatorSlugs.indexOf(slug);
    const prev = i > 0 ? getLesson(operatorSlugs[i - 1]) : undefined;
    const next = i < operatorSlugs.length - 1 ? getLesson(operatorSlugs[i + 1]) : undefined;
    return { operator, prev, next, pos: i + 1, total: operatorSlugs.length, suffix: "?ruta=operador" };
  }
  const i = lessons.findIndex((l) => l.slug === slug);
  return { operator, prev: i > 0 ? lessons[i - 1] : undefined, next: lessons[i + 1], pos: i + 1, total: lessons.length, suffix: "" };
}
