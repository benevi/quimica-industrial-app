"use client";

import Link from "next/link";
import { levels, lessons, lessonsOfLevel } from "@/content";
import { useProgress } from "@/lib/progress";

export default function Home() {
  const { progress, loaded } = useProgress();
  const doneCount = lessons.filter((l) => progress[l.slug]?.done).length;
  const next = lessons.find((l) => !progress[l.slug]?.done);
  const pct = Math.round((doneCount / lessons.length) * 100);

  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-line bg-surface p-6">
        <p className="text-sm font-medium text-accent">Química desde cero · Chemistry from scratch</p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">De no saber química a entender tu hoja de producción</h1>
        <p className="mt-2 max-w-2xl text-muted">
          Lecciones cortas con ejemplos de una planta de principios activos (API). Cada una termina con lo que verás en el
          batch record y un pequeño test.
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-4">
          {next && (
            <Link href={`/leccion/${next.slug}`} className="rounded-lg bg-accent px-4 py-2 font-medium text-white hover:opacity-90">
              {doneCount === 0 ? "Empezar" : "Continuar"}: {next.title}
            </Link>
          )}
          <div className="flex min-w-48 flex-1 items-center gap-3">
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-soft">
              <div className="h-full rounded-full bg-accent transition-all" style={{ width: `${loaded ? pct : 0}%` }} />
            </div>
            <span className="text-sm tabular-nums text-muted">
              {doneCount}/{lessons.length} lecciones
            </span>
          </div>
        </div>
      </section>

      <section className="flex flex-wrap items-center gap-3 rounded-xl border border-line bg-surface p-4 text-sm">
        <span className="flex-1">
          <strong>Simulador de planta:</strong> fabrica un lote ficticio en reactor, filtro, centrífuga y secadero, rellenando la hoja de producción como en GMP.
        </span>
        <Link href="/simulador" className="rounded-lg border border-line px-3 py-1.5 font-medium hover:bg-soft">Abrir simulador</Link>
      </section>

      <section className="rounded-xl border border-line bg-warn-soft p-4 text-sm">
        <strong>Kit de supervivencia para tus primeras semanas:</strong> haz cuanto antes{" "}
        <Link className="underline" href="/leccion/alcoa-plus">ALCOA+</Link>,{" "}
        <Link className="underline" href="/leccion/unidades-y-conversiones">Unidades</Link> y{" "}
        <Link className="underline" href="/leccion/el-mol">El mol</Link>.
      </section>

      <div className="space-y-6">
        {levels.map((lv) => {
          const ls = lessonsOfLevel(lv.number);
          return (
            <section key={lv.number}>
              <div className="mb-2 flex items-baseline gap-2">
                <h2 className="text-lg font-semibold">
                  Nivel {lv.number}. {lv.title}
                </h2>
                <span className="text-sm text-muted">{lv.titleEn}</span>
              </div>
              <p className="mb-3 text-sm text-muted">{lv.description}</p>
              {ls.length === 0 ? (
                <p className="rounded-lg border border-dashed border-line px-4 py-3 text-sm text-muted">Próximamente.</p>
              ) : (
                <ul className="grid gap-2 sm:grid-cols-2">
                  {ls.map((l) => {
                    const p = progress[l.slug];
                    return (
                      <li key={l.slug}>
                        <Link
                          href={`/leccion/${l.slug}`}
                          className="flex h-full gap-3 rounded-xl border border-line bg-surface p-4 hover:border-accent"
                        >
                          <span
                            aria-label={p?.done ? "Completada" : "Pendiente"}
                            className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full text-xs ${
                              p?.done ? "bg-ok text-white" : "border border-line text-muted"
                            }`}
                          >
                            {p?.done ? "✓" : l.order}
                          </span>
                          <span className="min-w-0">
                            <span className="block font-medium">{l.title}</span>
                            <span className="block text-xs text-muted">
                              {l.titleEn} · {l.minutes} min
                              {p?.done ? ` · test ${p.score}/${p.total}` : ""}
                            </span>
                            <span className="mt-1 block text-sm text-muted">{l.summary}</span>
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
