"use client";

import Link from "next/link";
import { Icon } from "@/components/icons";
import { useProgress } from "@/lib/progress";
import type { LeccionBreve } from "@op/datos";

/** Columna lateral de la lección: las lecciones de su etapa, con la actual marcada y las hechas con un check. */
export function AsideEtapa({ slug, etapa, href, lecciones }: { slug: string; etapa: string; href: string; lecciones: LeccionBreve[] }) {
  const { progress, loaded } = useProgress();
  return (
    <nav aria-label={`Lecciones de la etapa ${etapa}`} className="sticky top-8 space-y-2 text-sm">
      <Link href={href} className="font-medium text-muted hover:text-ink hover:underline">
        {etapa}
      </Link>
      <ol className="space-y-0.5 border-l border-line">
        {lecciones.map((l) => {
          const actual = l.slug === slug;
          const hecha = loaded && progress[l.slug]?.done;
          return (
            <li key={l.slug}>
              <Link
                href={`/leccion/${l.slug}`}
                aria-current={actual ? "page" : undefined}
                className={`-ml-px flex items-start gap-1.5 border-l-2 py-1 pl-3 leading-snug ${
                  actual ? "border-accent font-semibold text-ink" : "border-transparent text-muted hover:text-ink"
                }`}
              >
                <span className="flex-1">{l.title}</span>
                {hecha && (
                  <>
                    <Icon name="check" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ok" />
                    <span className="sr-only">(hecha)</span>
                  </>
                )}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
