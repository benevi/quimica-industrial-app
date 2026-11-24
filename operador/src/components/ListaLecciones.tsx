"use client";

import Link from "next/link";
import { Icon } from "@/components/icons";
import { Status, btn } from "@/components/ui";
import { useProgress } from "@/lib/progress";
import type { LeccionBreve } from "@op/datos";

/** Lecciones de una etapa con lo hecho y la nota del test. */
export function ListaLecciones({ lecciones, numeradas = true }: { lecciones: LeccionBreve[]; numeradas?: boolean }) {
  const { progress, loaded } = useProgress();
  const siguiente = loaded ? lecciones.find((l) => !progress[l.slug]?.done)?.slug : undefined;
  return (
    <ol className="divide-y divide-line overflow-hidden rounded-[var(--radius)] border border-line bg-surface">
      {lecciones.map((l, i) => {
        const p = loaded ? progress[l.slug] : undefined;
        const esSiguiente = numeradas && l.slug === siguiente;
        return (
          <li key={l.slug} className="relative">
            {esSiguiente && <span aria-hidden className="absolute inset-y-0 left-0 w-[3px] bg-accent" />}
            <Link href={`/leccion/${l.slug}`} className="group flex gap-4 px-5 py-4 hover:bg-soft/60">
              {numeradas && (
                <span aria-hidden className="mt-0.5 w-5 shrink-0 text-sm tabular-nums text-muted">
                  {i + 1}
                </span>
              )}
              <span className="min-w-0 flex-1">
                <span className="t-card block group-hover:text-accent">{l.title}</span>
                <span className="mt-0.5 block text-sm leading-snug text-muted">{l.summary}</span>
                <span className="mt-2 flex flex-wrap items-center gap-2 text-xs text-muted">
                  <span>{l.minutes} min</span>
                  {p?.done ? (
                    <Status kind="done">
                      <Icon name="check" className="h-3.5 w-3.5" /> Hecha · test {p.score}/{p.total}
                    </Status>
                  ) : esSiguiente ? (
                    <Status kind="doing">Siguiente</Status>
                  ) : null}
                </span>
              </span>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}

/** Botón de la etapa: empezar o seguir por la primera lección sin hacer. */
export function BotonEtapa({ lecciones }: { lecciones: LeccionBreve[] }) {
  const { progress, loaded } = useProgress();
  if (!loaded) return null;
  const hechas = lecciones.filter((l) => progress[l.slug]?.done).length;
  const sig = lecciones.find((l) => !progress[l.slug]?.done);
  if (!sig)
    return (
      <Status kind="done">
        Etapa hecha: {hechas} de {lecciones.length} lecciones
      </Status>
    );
  return (
    <Link href={`/leccion/${sig.slug}`} className={btn.primary}>
      {hechas === 0 ? "Empezar la etapa" : `Seguir: ${sig.title}`}
      <Icon name="arrow" className="h-4 w-4" />
    </Link>
  );
}
