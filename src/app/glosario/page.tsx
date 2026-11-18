"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { allTerms } from "@/content";

const norm = (s: string) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

export default function Glosario() {
  const [q, setQ] = useState("");
  const list = useMemo(() => {
    const n = norm(q);
    return n ? allTerms.filter((t) => norm(`${t.es} ${t.en} ${t.def}`).includes(n)) : allTerms;
  }, [q]);

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Glosario español · inglés</h1>
        <p className="text-muted">
          {allTerms.length} términos. Mucha documentación técnica y muchos equipos usan el término en inglés.
        </p>
      </div>
      <input
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Buscar en español o en inglés (p. ej. «yield» o «camisa»)"
        className="w-full rounded-lg border border-line bg-surface px-4 py-2.5"
        aria-label="Buscar término"
      />
      <ul className="divide-y divide-line rounded-2xl border border-line bg-surface">
        {list.map((t) => (
          <li key={`${t.es}-${t.lesson}`} className="grid gap-1 px-5 py-3 sm:grid-cols-[minmax(0,15rem)_1fr] sm:gap-4">
            <div>
              <p className="font-medium">{t.es}</p>
              <p lang="en" className="text-sm text-accent">{t.en}</p>
            </div>
            <div className="text-sm">
              <p className="text-muted">{t.def}</p>
              <Link href={`/leccion/${t.lesson}`} className="text-xs text-muted underline hover:text-ink">
                {t.lessonTitle}
              </Link>
            </div>
          </li>
        ))}
        {list.length === 0 && <li className="px-5 py-6 text-sm text-muted">No hay resultados para «{q}».</li>}
      </ul>
    </div>
  );
}
