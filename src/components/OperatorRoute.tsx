"use client";

import Link from "next/link";
import { operatorLessons, operatorSlugs, operatorStages } from "@/content/operador";
import { getLesson } from "@/content";
import { Icon } from "@/components/icons";
import { ProgressRing } from "@/components/ProgressRing";
import { useProgress } from "@/lib/progress";

export function OperatorRoute() {
  const { progress, loaded } = useProgress();
  const isDone = (slug: string) => !!progress[slug]?.done;
  const done = operatorSlugs.filter(isDone).length;
  const total = operatorSlugs.length;
  const pct = loaded ? Math.round((done / total) * 100) : 0;
  const nextSlug = operatorSlugs.find((s) => !isDone(s));
  const next = nextSlug ? getLesson(nextSlug) : undefined;
  const minutes = operatorSlugs.reduce((m, s) => m + (getLesson(s)?.minutes ?? 0), 0);

  return (
    <div className="space-y-8">
      <div>
        <Link href="/" className="text-sm text-muted hover:text-ink">← Ruta completa</Link>
        <p className="mt-3 text-sm font-medium text-accent">Ruta corta · Operator fast track</p>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Ruta del operador de planta</h1>
        <p className="mt-2 max-w-3xl text-muted">
          Lo imprescindible para tu día a día en una planta de principios activos con reactores, centrífugas, filtros y secaderos.
          Son {total} lecciones del temario completo (unas {Math.round(minutes / 60)} horas), ordenadas por lo que antes vas a necesitar.
          Lo que completes aquí cuenta también en la ruta completa.
        </p>
      </div>

      <section className="grid gap-4 lg:grid-cols-[1fr_1.2fr]">
        <div className="flex items-center gap-5 rounded-2xl border border-line bg-surface p-6">
          <ProgressRing pct={pct} size={72} label={`${done} de ${total} lecciones de la ruta del operador`} />
          <div>
            <p className="text-lg font-semibold tabular-nums">
              {done} <span className="font-normal text-muted">/ {total} lecciones</span>
            </p>
            <p className="text-sm text-muted">
              {operatorStages.filter((s) => s.lessons.every(isDone)).length} de {operatorStages.length} etapas terminadas
            </p>
            {loaded && done === total && (
              <p className="mt-1 text-sm font-medium" style={{ color: "var(--ok)" }}>
                Ruta terminada. Sigue con la <Link href="/#ruta" className="underline">ruta completa</Link>.
              </p>
            )}
          </div>
        </div>
        {next && (
          <Link
            href={`/leccion/${next.slug}`}
            className="group flex flex-col justify-between rounded-2xl border-2 border-accent bg-accent-soft p-6 transition hover:-translate-y-0.5"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">{done === 0 ? "Empieza aquí" : "Tu siguiente lección"}</p>
              <p className="mt-2 text-xl font-semibold">{next.title}</p>
              <p className="mt-1 text-sm text-muted">{next.summary}</p>
            </div>
            <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-lg bg-accent px-4 py-2 font-medium text-white">
              {done === 0 ? "Empezar" : "Continuar"} · {next.minutes} min
              <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </span>
          </Link>
        )}
      </section>

      <ol className="space-y-5">
        {operatorStages.map((s, i) => {
          const ls = operatorLessons(s);
          const d = ls.filter((l) => isDone(l.slug)).length;
          const complete = loaded && d === ls.length;
          return (
            <li key={s.id} className="rounded-2xl border border-line bg-surface p-5 sm:p-6">
              <div className="flex flex-wrap items-start gap-4">
                <span
                  className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${complete ? "text-white" : "bg-accent-soft text-accent"}`}
                  style={complete ? { background: "var(--ok)" } : undefined}
                >
                  <Icon name={complete ? "check" : s.icon} className="h-6 w-6" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                    Etapa {i + 1} · <span lang="en">{s.titleEn}</span>
                  </p>
                  <h2 className="text-lg font-semibold">{s.title}</h2>
                  <p className="mt-1 text-sm text-muted">{s.why}</p>
                </div>
                <span className="text-sm tabular-nums text-muted">
                  {loaded ? d : 0}/{ls.length}
                </span>
              </div>

              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {ls.map((l) => {
                  const ok = isDone(l.slug);
                  return (
                    <li key={l.slug}>
                      <Link
                        href={`/leccion/${l.slug}`}
                        className="flex h-full items-start gap-3 rounded-lg border border-line p-3 transition hover:border-accent hover:bg-soft"
                      >
                        <span
                          className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-[11px] text-white"
                          style={{ background: ok ? "var(--ok)" : "var(--line)" }}
                          aria-label={ok ? "Completada" : "Pendiente"}
                        >
                          {ok ? "✓" : ""}
                        </span>
                        <span className="min-w-0">
                          <span className="block font-medium leading-snug">{l.title}</span>
                          <span className="block text-xs text-muted">
                            Nivel {l.level} · {l.minutes} min
                            {ok && progress[l.slug]?.total ? ` · test ${progress[l.slug].score}/${progress[l.slug].total}` : ""}
                          </span>
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {s.practice && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.practice.map((p) => (
                    <Link
                      key={p.href + p.label}
                      href={p.href}
                      className="flex items-center gap-2 rounded-lg bg-soft px-3 py-2 text-sm hover:bg-accent-soft"
                    >
                      <span className="font-medium text-accent">Practica: {p.label} →</span>
                      <span className="text-muted">{p.text}</span>
                    </Link>
                  ))}
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
