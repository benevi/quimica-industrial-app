"use client";

import Link from "next/link";
import { Icon } from "@/components/icons";
import { Bar, PageHeader, Status, btn } from "@/components/ui";
import { useProgress } from "@/lib/progress";
import { NOMBRE, NOMBRE_EN } from "@op/edicion";
import type { EtapaBreve } from "@op/datos";
import { horas } from "@op/formato";

/** Portada: la siguiente lección y las etapas, con lo hecho en cada una. */
export function Inicio({ etapas }: { etapas: EtapaBreve[] }) {
  const { progress, loaded } = useProgress();
  const hecha = (slug: string) => loaded && !!progress[slug]?.done;
  const todas = etapas.flatMap((e) => e.lecciones);
  const hechas = todas.filter((l) => hecha(l.slug)).length;
  const pct = Math.round((hechas / todas.length) * 100);
  const minutos = todas.reduce((m, l) => m + l.minutes, 0);
  const actual = etapas.findIndex((e) => !e.lecciones.every((l) => hecha(l.slug)));
  const siguiente = actual >= 0 ? etapas[actual].lecciones.find((l) => !hecha(l.slug)) : undefined;

  return (
    <div>
      <PageHeader
        title={NOMBRE}
        en={NOMBRE_EN}
        icon="factory"
        lead={
          <>
            Lo imprescindible para trabajar como operador en una planta de principios activos, con la química justa para entenderlo. {todas.length} lecciones en{" "}
            {etapas.length} etapas, en el orden del proceso: unas {horas(minutos)} horas. Todos los procesos, productos y equipos son ficticios.
          </>
        }
      >
        <div className="flex max-w-md items-center gap-3 pt-1">
          <Bar pct={pct} className="flex-1" label={`Formación: ${pct} %`} />
          <span className="text-sm tabular-nums text-muted">
            {hechas} de {todas.length} hechas
          </span>
        </div>
      </PageHeader>

      {loaded && (
        <section aria-labelledby="siguiente-h" className="next-step mb-10 overflow-hidden">
          <div className="grid gap-5 p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-center">
            {siguiente ? (
              <>
                <div className="min-w-0">
                  <p className="text-sm text-muted">
                    {hechas === 0 ? "Empieza por aquí" : "Tu siguiente lección"} · etapa {actual + 1}, {etapas[actual].corto.toLowerCase()} ·{" "}
                    {siguiente.minutes} min
                  </p>
                  <h2 id="siguiente-h" className="t-h1 mt-1">
                    {siguiente.title}
                  </h2>
                  <p className="mt-2 max-w-[60ch] text-sm leading-relaxed text-muted">{siguiente.summary}</p>
                </div>
                <Link href={`/leccion/${siguiente.slug}`} className={`${btn.primary} px-5 py-3 text-[15px]`}>
                  {hechas === 0 ? "Empezar" : "Continuar"}
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </>
            ) : (
              <div>
                <h2 id="siguiente-h" className="t-h2">
                  Has terminado las {todas.length} lecciones
                </h2>
                <p className="mt-2 max-w-[60ch] text-sm leading-relaxed text-muted">
                  Repasa con las tarjetas antes del turno y, si quieres entender mejor los equipos, haz las lecciones de ampliación de cada etapa.
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      <section aria-labelledby="etapas-h">
        <h2 id="etapas-h" className="t-h2 mb-3">
          Las etapas
        </h2>
        <ol className="grid gap-3 md:grid-cols-2">
          {etapas.map((e, i) => {
            const d = e.lecciones.filter((l) => hecha(l.slug)).length;
            const completa = d === e.lecciones.length;
            const min = e.lecciones.reduce((m, l) => m + l.minutes, 0);
            return (
              <li key={e.id}>
                <Link
                  href={`/etapa/${e.id}`}
                  className={`group relative flex h-full gap-4 overflow-hidden rounded-[var(--radius)] border bg-surface p-5 hover:border-accent ${
                    loaded && i === actual ? "border-accent ring-1 ring-accent" : "border-line"
                  }`}
                >
                  <span aria-hidden className="bubble h-11 w-11 text-accent">
                    <Icon name={e.icon} className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm text-muted">Etapa {i + 1}</span>
                    <span className="t-card mt-0.5 block group-hover:text-accent">{e.title}</span>
                    <span className="mt-1 block text-sm leading-snug text-muted">{e.resumen}</span>
                    <span className="mt-3 flex flex-wrap items-center gap-2 text-xs text-muted">
                      <span>
                        {e.lecciones.length} {e.lecciones.length === 1 ? "lección" : "lecciones"} · {min} min
                        {e.ampliacion.length > 0 && ` · ${e.ampliacion.length} de ampliación`}
                      </span>
                      {loaded &&
                        (completa ? (
                          <Status kind="done">
                            <Icon name="check" className="h-3.5 w-3.5" /> Hecha
                          </Status>
                        ) : i === actual ? (
                          <Status kind="doing">
                            Siguiente · {d} de {e.lecciones.length}
                          </Status>
                        ) : d > 0 ? (
                          <Status kind="todo">
                            {d} de {e.lecciones.length}
                          </Status>
                        ) : null)}
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>
      </section>
    </div>
  );
}
