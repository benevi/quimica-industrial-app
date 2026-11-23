"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Icon } from "@/components/icons";
import { Card } from "@/components/ui";
import type { Sigla } from "@/content/siglas";
import { norm } from "@/lib/text";

export type Termino = { es: string; en: string; def: string; lesson: string; lessonTitle: string; etapa: string };

const letterOf = (s: string) => {
  const c = norm(s).charAt(0).toUpperCase();
  return /[A-Z]/.test(c) ? c : "#";
};

/** Glosario con buscador: los términos de las lecciones de la formación y sus siglas. */
export function Glosario({ terms, siglas }: { terms: Termino[]; siglas: Sigla[] }) {
  const [q, setQ] = useState("");
  const list = useMemo(() => {
    const n = norm(q);
    return terms.filter((t) => !n || norm(`${t.es} ${t.en} ${t.def}`).includes(n));
  }, [q, terms]);
  const groups = useMemo(() => {
    const m = new Map<string, Termino[]>();
    for (const t of list) m.set(letterOf(t.es), [...(m.get(letterOf(t.es)) ?? []), t]);
    return [...m.entries()].sort(([a], [b]) => a.localeCompare(b));
  }, [list]);
  const siglasVisibles = useMemo(() => {
    const n = norm(q);
    return siglas.filter((x) => !n || norm(`${x.sigla} ${x.es} ${x.en ?? ""}`).includes(n));
  }, [q, siglas]);
  const present = new Set(groups.map(([L]) => L));

  return (
    <>
      <div className="sticky top-14 z-10 -mx-4 border-b border-line bg-bg/95 px-4 py-3 backdrop-blur sm:-mx-8 sm:px-8 lg:top-0">
        <label className="relative block">
          <span className="sr-only">Buscar término</span>
          <Icon name="search" className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar en español o en inglés (p. ej. «yield» o «camisa»)"
            className="w-full rounded-md border border-line-strong bg-surface py-2.5 pl-9 pr-4"
          />
        </label>
        <p className="mt-2 text-sm text-muted" aria-live="polite">
          {list.length} resultados
        </p>
      </div>

      <nav aria-label="Índice alfabético" className="mt-4 flex flex-wrap gap-0.5 text-sm">
        {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((L) =>
          present.has(L) ? (
            <a key={L} href={`#letra-${L}`} className="grid h-7 w-7 place-items-center rounded-md font-medium text-ink hover:bg-accent-soft hover:text-accent">
              {L}
            </a>
          ) : (
            <span key={L} aria-hidden className="grid h-7 w-7 place-items-center text-line-strong">
              {L}
            </span>
          ),
        )}
      </nav>

      {siglasVisibles.length > 0 && (
        <details className="mt-6 rounded-[var(--radius)] border border-line bg-surface" open={q.trim().length > 0}>
          <summary className="cursor-pointer px-5 py-3 font-medium">
            Siglas ({siglasVisibles.length}) <span className="text-sm font-normal text-muted">qué significa cada una</span>
          </summary>
          <dl className="grid gap-x-6 gap-y-2 border-t border-line px-5 py-4 text-sm sm:grid-cols-[minmax(0,9rem)_1fr]">
            {siglasVisibles.map((x) => (
              <div key={x.sigla} className="contents">
                <dt className="font-mono font-medium">{x.sigla}</dt>
                <dd className="mb-1 sm:mb-0">
                  {x.es}
                  {x.en && (
                    <span lang="en" className="block text-muted">
                      {x.en}
                    </span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </details>
      )}

      <div className="mt-8 space-y-8">
        {groups.map(([L, ts]) => (
          <section key={L} id={`letra-${L}`} className="scroll-mt-40" aria-labelledby={`letra-${L}-h`}>
            <h2 id={`letra-${L}-h`} className="t-h2 mb-2 text-muted">
              {L}
            </h2>
            <Card as="div">
              <ul className="divide-y divide-line">
                {ts.map((t) => (
                  <li key={`${t.es}-${t.lesson}`} className="grid gap-1 px-5 py-3.5 sm:grid-cols-[minmax(0,15rem)_1fr] sm:gap-6">
                    <div>
                      <p className="font-medium">{t.es}</p>
                      <p lang="en" className="text-sm text-muted">
                        {t.en}
                      </p>
                    </div>
                    <div className="text-sm">
                      <p className="max-w-[68ch] leading-relaxed">{t.def}</p>
                      <Link href={`/leccion/${t.lesson}`} className="mt-1.5 inline-block text-xs text-muted hover:text-accent">
                        {t.etapa} · <span className="underline underline-offset-2">{t.lessonTitle}</span>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
          </section>
        ))}
        {list.length === 0 && (
          <Card className="px-5 py-6 text-sm text-muted">
            <p>No hay resultados para «{q}».</p>
          </Card>
        )}
      </div>
    </>
  );
}
