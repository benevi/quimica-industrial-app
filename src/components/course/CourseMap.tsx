"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { lessons, lessonsOfLevel, levels } from "@/content/catalog";
import { blockColor, blockOfLevel, blocks, lessonsOfBlock, levelInfo, minutesOfLevel } from "@/content/blocks";
import { Icon, blockIcon } from "@/components/icons";
import { Bar, PageHeader, Status, btn } from "@/components/ui";
import { useProgress } from "@/lib/progress";

/**
 * Temario completo: cinco bloques plegables. Solo se abre el bloque en el que estás,
 * para no ver los 22 niveles a la vez.
 */
export function CourseMap() {
  const { progress, loaded } = useProgress();
  const isDone = (slug: string) => !!progress[slug]?.done;
  const doneCount = lessons.filter((l) => isDone(l.slug)).length;
  const next = lessons.find((l) => !isDone(l.slug));
  const current = next ? blockOfLevel(next.level).id : blocks[0].id;
  const [open, setOpen] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (loaded) setOpen(new Set([current]));
  }, [loaded, current]);

  const toggle = (id: string) =>
    setOpen((s) => {
      const n = new Set(s);
      if (n.has(id)) n.delete(id);
      else n.add(id);
      return n;
    });

  return (
    <div>
      <PageHeader
        crumbs={[{ href: "/", label: "Hoy" }, { label: "Temario completo" }]}
        title="Temario completo"
        en="Full course"
        icon="book"
        lead={
          <>
            {lessons.length} lecciones en {levels.length} niveles, agrupadas en {blocks.length} bloques. Se sigue de arriba abajo: cada nivel se
            apoya en los anteriores. Si empiezas en planta, haz antes la{" "}
            <Link href="/operador" className="text-accent underline underline-offset-2 hover:decoration-2">
              ruta del operador
            </Link>
            .
          </>
        }
        actions={
          next && (
            <Link href={`/leccion/${next.slug}`} className={btn.primary}>
              {doneCount === 0 ? "Empezar" : "Continuar"}: {next.title}
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          )
        }
      />

      <ol className="space-y-3">
        {blocks.map((b) => {
          const c = blockColor[b.id];
          const ls = lessonsOfBlock(b);
          const d = ls.filter((l) => isDone(l.slug)).length;
          const isOpen = open.has(b.id);
          const pct = loaded && ls.length ? Math.round((d / ls.length) * 100) : 0;
          return (
            <li key={b.id} className="overflow-hidden rounded-[var(--radius)] border border-line bg-surface">
              <h2>
                <button
                  type="button"
                  onClick={() => toggle(b.id)}
                  aria-expanded={isOpen}
                  aria-controls={`bloque-${b.id}`}
                  className="flex w-full items-center gap-4 px-5 py-4 text-left hover:bg-soft/60"
                >
                  <span aria-hidden className="bubble h-10 w-10 text-ink" style={{ borderColor: c.fg }}>
                    <Icon name={blockIcon[b.id]} className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm text-muted">Bloque {b.n}</span>
                    <span className="t-card block text-ink">{b.title}</span>
                    <span className="block text-sm text-muted">{b.question}</span>
                  </span>
                  <span className="hidden w-40 shrink-0 sm:block">
                    <span className="block text-right text-sm tabular-nums text-muted">
                      {d} de {ls.length}
                    </span>
                    <Bar pct={pct} className="mt-1.5" label={`${b.title}: ${pct} %`} />
                  </span>
                  <Icon name="chevron" className={`h-5 w-5 shrink-0 text-muted transition-transform ${isOpen ? "rotate-90" : ""}`} />
                </button>
              </h2>
              {isOpen && (
                <div id={`bloque-${b.id}`} className="border-t border-line">
                  <p className="px-5 pt-4 text-sm text-muted">{b.description}</p>
                  <ul className="divide-y divide-line">
                    {b.levels.map((n) => {
                      const lv = levelInfo(n);
                      const lls = lessonsOfLevel(n);
                      const ld = lls.filter((l) => isDone(l.slug)).length;
                      const here = next?.level === n;
                      const kind = ld === lls.length && ld > 0 ? "done" : ld > 0 || here ? "doing" : "todo";
                      return (
                        <li key={n}>
                          <Link
                            href={`/nivel/${n}`}
                            aria-current={here ? "step" : undefined}
                            className="group relative flex items-center gap-4 px-5 py-3.5 hover:bg-soft/60"
                          >
                            {here && <span aria-hidden className="absolute inset-y-0 left-0 w-0.5 bg-accent" />}
                            <span
                              aria-hidden
                              className={`bubble h-8 w-8 text-sm font-semibold tabular-nums ${
                                kind === "done" ? "bubble-done" : here ? "bubble-current" : "text-muted"
                              }`}
                            >
                              {kind === "done" ? <Icon name="tick" className="h-5 w-5" /> : n}
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className="t-card block text-ink group-hover:text-accent">
                                <span className="sr-only">Nivel {n}. </span>
                                {lv.title}
                              </span>
                              <span className="block truncate text-sm text-muted">{lv.description}</span>
                            </span>
                            <span className="hidden shrink-0 text-right text-sm text-muted md:block">
                              {lls.length} lecciones
                              <span className="block text-xs">{Math.round(minutesOfLevel(n) / 5) * 5} min</span>
                            </span>
                            <span className="w-24 shrink-0 text-right">
                              {kind === "done" ? (
                                <Status kind="done">Hecho</Status>
                              ) : here ? (
                                <Status kind="doing">Te toca</Status>
                              ) : ld > 0 ? (
                                <Status kind="doing">
                                  {ld} de {lls.length}
                                </Status>
                              ) : null}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                  {b.practice && (
                    <p className="border-t border-line px-5 py-3 text-sm">
                      {b.practice.map((p) => (
                        <Link key={p.href} href={p.href} className="font-medium text-accent hover:underline">
                          Practica este bloque en el {p.label.charAt(0).toLowerCase() + p.label.slice(1)}
                        </Link>
                      ))}
                    </p>
                  )}
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
