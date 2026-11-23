"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { getLesson } from "@/content/catalog";
import { allTerms } from "@/content/terms";
import { siglas } from "@/content/siglas";
import { blockColor, blockOfLevel, blocks, type BlockId } from "@/content/blocks";
import { Icon } from "@/components/icons";
import { Card, PageHeader } from "@/components/ui";

import { norm } from "@/lib/text";
const letterOf = (s: string) => {
  const c = norm(s).charAt(0).toUpperCase();
  return /[A-Z]/.test(c) ? c : "#";
};

const terms = allTerms.map((t) => {
  const level = getLesson(t.lesson)?.level ?? 0;
  return { ...t, level, block: blockOfLevel(level).id };
});

const chip = (on: boolean) =>
  `inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm ${
    on ? "border-accent bg-accent-soft font-medium text-accent" : "border-line bg-surface text-ink hover:border-accent"
  }`;

export default function Glosario() {
  const [q, setQ] = useState("");
  const [block, setBlock] = useState<BlockId | "all">("all");

  const list = useMemo(() => {
    const n = norm(q);
    return terms.filter((t) => (block === "all" || t.block === block) && (!n || norm(`${t.es} ${t.en} ${t.def}`).includes(n)));
  }, [q, block]);

  const groups = useMemo(() => {
    const m = new Map<string, typeof list>();
    for (const t of list) {
      const L = letterOf(t.es);
      m.set(L, [...(m.get(L) ?? []), t]);
    }
    return [...m.entries()].sort(([a], [b]) => a.localeCompare(b));
  }, [list]);

  const siglasVisibles = useMemo(() => {
    const n = norm(q);
    return siglas.filter((x) => !n || norm(`${x.sigla} ${x.es} ${x.en ?? ""}`).includes(n));
  }, [q]);

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const present = new Set(groups.map(([L]) => L));

  return (
    <div>
      <PageHeader
        crumbs={[{ href: "/", label: "Hoy" }, { label: "Glosario" }]}
        title="Glosario español · inglés"
        en="Glossary"
        icon="abc"
        lead={
          <>
            {allTerms.length} términos de todas las lecciones. Mucha documentación técnica y muchos equipos usan el término en inglés.
          </>
        }
      />

      {/* Búsqueda: siempre a mano mientras recorres la lista */}
      <div className="sticky top-14 lg:top-0 z-10 -mx-4 border-b border-line bg-bg/95 px-4 py-3 backdrop-blur sm:-mx-8 sm:px-8">
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

      <div className="mt-4 space-y-3">
        <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filtrar por bloque">
          <button type="button" onClick={() => setBlock("all")} aria-pressed={block === "all"} className={chip(block === "all")}>
            Todos
          </button>
          {blocks.map((b) => (
            <button key={b.id} type="button" onClick={() => setBlock(b.id)} aria-pressed={block === b.id} className={chip(block === b.id)}>
              <span aria-hidden className="h-2 w-2 rounded-full" style={{ background: blockColor[b.id].fg }} />
              {b.title}
            </button>
          ))}
        </div>
        <nav aria-label="Índice alfabético" className="flex flex-wrap gap-0.5 text-sm">
          {letters.map((L) =>
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
      </div>

      {siglasVisibles.length > 0 && (
        <details className="mt-6 rounded-[var(--radius)] border border-line bg-surface" open={q.trim().length > 0}>
          <summary className="cursor-pointer px-5 py-3 font-medium">
            Siglas ({siglasVisibles.length}){" "}
            <span className="text-sm font-normal text-muted">qué significa cada una, aunque la lección que lees la use sin explicarla</span>
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
                      <Link href={`/leccion/${t.lesson}`} className="mt-1.5 inline-flex items-center gap-1.5 text-xs text-muted hover:text-accent">
                        <span aria-hidden className="h-1.5 w-1.5 rounded-full" style={{ background: blockColor[t.block].fg }} />
                        Nivel {t.level} · <span className="underline underline-offset-2">{t.lessonTitle}</span>
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
    </div>
  );
}
