"use client";

import Link from "next/link";
import { operatorLessons, operatorSlugs, operatorStages } from "@/content/operador";
import { getLesson } from "@/content/catalog";
import { Icon } from "@/components/icons";
import { Bar, PageHeader, Status, btn } from "@/components/ui";
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

  const stageDone = (i: number) => loaded && operatorStages[i].lessons.every(isDone);
  const currentStage = operatorStages.findIndex((st) => !st.lessons.every(isDone));

  return (
    <div>
      <PageHeader
        crumbs={[{ href: "/", label: "Hoy" }, { label: "Ruta del operador" }]}
        title="Ruta del operador de planta"
        en="Operator fast track"
        icon="shield"
        lead={
          <>
            Lo imprescindible para tu turno en una planta con reactores, centrífugas, filtros y secaderos: {total} lecciones del temario (unas{" "}
            {Math.round(minutes / 60)} horas) en {operatorStages.length} etapas, por orden de necesidad. Lo que completes aquí cuenta también en el
            temario completo.
          </>
        }
        actions={
          next && (
            <Link href={`/leccion/${next.slug}?ruta=operador`} className={btn.primary}>
              {done === 0 ? "Empezar" : "Continuar"}: {next.title}
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          )
        }
      >
        <div className="flex max-w-md items-center gap-3 pt-1">
          <Bar pct={pct} className="flex-1" label={`Ruta del operador: ${pct} %`} />
          <span className="text-sm tabular-nums text-muted">
            {loaded ? done : 0} de {total} hechas
          </span>
        </div>
        {loaded && done === total && (
          <p className="text-sm font-medium text-ok">
            Ruta terminada. Sigue con el{" "}
            <Link href="/temario" className="underline">
              temario completo
            </Link>
            .
          </p>
        )}
      </PageHeader>

      <ol className="relative space-y-3">
        {operatorStages.map((s, i) => {
          const ls = operatorLessons(s);
          const d = ls.filter((l) => isDone(l.slug)).length;
          const complete = stageDone(i);
          const isCurrent = loaded && i === currentStage;
          return (
            <li key={s.id}>
              <details open={isCurrent} className="group relative overflow-hidden rounded-[var(--radius)] border border-line bg-surface">
                {isCurrent && <span aria-hidden className="absolute inset-y-0 left-0 w-0.5 bg-accent" />}
                <summary className="flex cursor-pointer list-none items-center gap-4 px-5 py-4 hover:bg-soft/60 [&::-webkit-details-marker]:hidden">
                  <span aria-hidden className={`bubble h-9 w-9 text-sm font-semibold ${complete ? "bubble-done" : isCurrent ? "bubble-current" : "text-muted"}`}>
                    {complete ? <Icon name="tick" className="h-5 w-5" /> : i + 1}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="t-card block text-ink">
                      <span className="sr-only">Etapa {i + 1}{complete ? ", hecha" : ""}: </span>
                      {s.title}
                    </span>
                    <span lang="en" className="block text-sm text-muted">
                      {s.titleEn}
                    </span>
                  </span>
                  <span className="shrink-0 text-sm tabular-nums text-muted">
                    {isCurrent ? (
                      <Status kind="doing">Etapa actual</Status>
                    ) : complete ? (
                      <Status kind="done">Hecha</Status>
                    ) : (
                      `${loaded ? d : 0} de ${ls.length}`
                    )}
                  </span>
                  <Icon name="chevron" className="h-5 w-5 shrink-0 text-muted transition-transform group-open:rotate-90" />
                </summary>
                <div className="border-t border-line px-5 pb-5 pt-4">
                  <p className="max-w-[68ch] text-sm text-muted">{s.why}</p>
                  <ul className="mt-3 divide-y divide-line rounded-md border border-line">
                    {ls.map((l) => {
                      const ok = isDone(l.slug);
                      const isNext = l.slug === nextSlug;
                      return (
                        <li key={l.slug}>
                          <Link
                            href={`/leccion/${l.slug}?ruta=operador`}
                            aria-current={isNext ? "step" : undefined}
                            className="group/l flex items-center gap-3 px-3 py-2.5 hover:bg-soft/60"
                          >
                            <span
                              aria-hidden
                              className={`bubble h-6 w-6 text-xs ${ok ? "bubble-done" : isNext ? "bubble-current" : "text-line-strong"}`}
                            >
                              {ok && <Icon name="tick" className="h-4 w-4" />}
                            </span>
                            <span className="min-w-0 flex-1 font-medium text-ink group-hover/l:text-accent">
                              {ok && <span className="sr-only">Hecha: </span>}
                              {l.title}
                            </span>
                            {isNext && <Status kind="doing">Te toca</Status>}
                            <span className="shrink-0 text-xs text-muted">
                              {ok && progress[l.slug]?.total ? `test ${progress[l.slug].score}/${progress[l.slug].total}` : `${l.minutes} min`}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                  {s.practice && (
                    <ul className="mt-3 space-y-1 text-sm">
                      {s.practice.map((p) => (
                        <li key={p.href + p.label}>
                          <Link href={p.href} className="font-medium text-accent hover:underline">
                            {p.label}
                          </Link>
                          <span className="text-muted">: {p.text}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </details>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
