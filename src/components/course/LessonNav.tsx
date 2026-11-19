"use client";

import Link from "next/link";
import { levelInfo } from "@/content/blocks";
import { getLesson } from "@/content";
import { Icon } from "@/components/icons";
import { Breadcrumbs } from "@/components/ui";
import { useLessonRoute } from "./useLessonRoute";

/** Migas de la lección: dependen de si vienes de la ruta del operador o del temario. */
export function LessonCrumbs({ slug }: { slug: string }) {
  const r = useLessonRoute(slug);
  const l = getLesson(slug)!;
  const lv = levelInfo(l.level);
  return r.operator ? (
    <Breadcrumbs items={[{ href: "/operador", label: "Ruta del operador" }, { label: `Lección ${r.pos} de ${r.total}` }]} />
  ) : (
    <Breadcrumbs
      items={[
        { href: "/temario", label: "Temario completo" },
        { href: `/nivel/${lv.number}`, label: `Nivel ${lv.number}. ${lv.title}` },
        { label: l.title },
      ]}
    />
  );
}

/** Anterior y siguiente al final de la lección. */
export function LessonPager({ slug }: { slug: string }) {
  const r = useLessonRoute(slug);
  const cur = getLesson(slug)!;
  return (
    <nav aria-label="Lecciones" className="grid gap-3 border-t border-line pt-6 sm:grid-cols-2">
      {r.prev ? (
        <Link href={`/leccion/${r.prev.slug}${r.suffix}`} className="rounded-[var(--radius)] border border-line bg-surface p-4 hover:border-accent">
          <span className="flex items-center gap-1 text-sm text-muted">
            <Icon name="back" className="h-3.5 w-3.5" /> Anterior
          </span>
          <span className="mt-1 block font-medium">{r.prev.title}</span>
        </Link>
      ) : (
        <span />
      )}
      {r.next ? (
        <Link href={`/leccion/${r.next.slug}${r.suffix}`} className="rounded-[var(--radius)] border border-line bg-surface p-4 text-right hover:border-accent">
          <span className="flex items-center justify-end gap-1 text-sm text-muted">
            {r.operator
              ? "Siguiente en la ruta del operador"
              : r.next.level !== cur.level
                ? `Siguiente nivel: ${levelInfo(r.next.level).title}`
                : "Siguiente"}
            <Icon name="arrow" className="h-3.5 w-3.5" />
          </span>
          <span className="mt-1 block font-medium">{r.next.title}</span>
        </Link>
      ) : (
        r.operator && (
          <Link href="/operador" className="rounded-[var(--radius)] border border-line bg-surface p-4 text-right hover:border-accent">
            <span className="text-sm text-muted">Última lección de la ruta</span>
            <span className="mt-1 block font-medium">Volver a la ruta del operador</span>
          </Link>
        )
      )}
    </nav>
  );
}
