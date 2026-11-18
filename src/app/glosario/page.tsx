"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { allTerms, getLesson } from "@/content";
import { blockColor, blockOfLevel, blocks, type BlockId } from "@/content/blocks";

const norm = (s: string) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
const letterOf = (s: string) => {
  const c = norm(s).charAt(0).toUpperCase();
  return /[A-Z]/.test(c) ? c : "#";
};

const terms = allTerms.map((t) => {
  const level = getLesson(t.lesson)?.level ?? 0;
  return { ...t, level, block: blockOfLevel(level).id };
});

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

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const present = new Set(groups.map(([L]) => L));

  return (
    <div className="space-y-5">
      <div>
        <p className="text-sm font-medium text-accent">Glosario · Glossary</p>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Glosario español · inglés</h1>
        <p className="text-muted">
          {allTerms.length} términos de todas las lecciones. Mucha documentación técnica y muchos equipos usan el término en inglés.
        </p>
      </div>

      <div className="sticky top-[57px] z-10 -mx-4 space-y-3 border-b border-line bg-bg/95 px-4 py-3 backdrop-blur">
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Buscar en español o en inglés (p. ej. «yield» o «camisa»)"
          className="w-full rounded-lg border border-line bg-surface px-4 py-2.5"
          aria-label="Buscar término"
        />
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <button
            type="button"
            onClick={() => setBlock("all")}
            aria-pressed={block === "all"}
            className={`rounded-full border px-3 py-1 ${block === "all" ? "border-accent bg-accent-soft font-medium text-accent" : "border-line bg-surface"}`}
          >
            Todos
          </button>
          {blocks.map((b) => (
            <button
              key={b.id}
              type="button"
              onClick={() => setBlock(b.id)}
              aria-pressed={block === b.id}
              className="flex items-center gap-1.5 rounded-full border px-3 py-1"
              style={block === b.id ? { borderColor: blockColor[b.id].fg, background: blockColor[b.id].soft, color: blockColor[b.id].fg, fontWeight: 500 } : undefined}
            >
              <span className="h-2 w-2 rounded-full" style={{ background: blockColor[b.id].fg }} />
              {b.title}
            </button>
          ))}
          <span className="ml-auto text-muted">{list.length} resultados</span>
        </div>
        <nav aria-label="Índice alfabético" className="flex flex-wrap gap-0.5 text-sm">
          {letters.map((L) =>
            present.has(L) ? (
              <a key={L} href={`#letra-${L}`} className="grid h-7 w-7 place-items-center rounded-md font-medium hover:bg-accent-soft hover:text-accent">
                {L}
              </a>
            ) : (
              <span key={L} className="grid h-7 w-7 place-items-center text-line">{L}</span>
            ),
          )}
        </nav>
      </div>

      {groups.map(([L, ts]) => (
        <section key={L} id={`letra-${L}`} className="scroll-mt-56">
          <h2 className="mb-2 text-xl font-semibold text-accent">{L}</h2>
          <ul className="divide-y divide-line rounded-2xl border border-line bg-surface">
            {ts.map((t) => (
              <li key={`${t.es}-${t.lesson}`} className="grid gap-1 px-5 py-3 sm:grid-cols-[minmax(0,15rem)_1fr] sm:gap-4">
                <div>
                  <p className="font-medium">{t.es}</p>
                  <p lang="en" className="text-sm text-accent">{t.en}</p>
                </div>
                <div className="text-sm">
                  <p className="text-muted">{t.def}</p>
                  <Link href={`/leccion/${t.lesson}`} className="mt-1 inline-flex items-center gap-1.5 text-xs text-muted hover:text-ink">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: blockColor[t.block].fg }} />
                    Nivel {t.level} · <span className="underline">{t.lessonTitle}</span>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
      {list.length === 0 && <p className="rounded-2xl border border-line bg-surface px-5 py-6 text-sm text-muted">No hay resultados para «{q}».</p>}
    </div>
  );
}
