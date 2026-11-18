"use client";

import Link from "next/link";
import { lessons, lessonsOfLevel } from "@/content";
import { blockColor, blockOfLevel, blocks, lessonsOfBlock, levelInfo, minutesOfLevel } from "@/content/blocks";
import { Icon, blockIcon, levelIcon, type IconName } from "@/components/icons";
import { ProgressRing } from "@/components/ProgressRing";
import { useProgress } from "@/lib/progress";

const steps: { icon: IconName; title: string; text: string; links: { href: string; label: string }[] }[] = [
  {
    icon: "book",
    title: "1. Aprende",
    text: "Lecciones cortas en 5 pasos: idea clave, ejemplo de planta, hoja de producción, vocabulario y test.",
    links: [{ href: "#ruta", label: "Ver la ruta" }],
  },
  {
    icon: "map",
    title: "2. Sitúate",
    text: "El mapa de planta muestra dónde encaja cada lección en el recorrido de un lote real.",
    links: [{ href: "/mapa", label: "Mapa de planta" }],
  },
  {
    icon: "reactor",
    title: "3. Practica",
    text: "Fabrica un lote en el simulador, haz cálculos y mueve el lote por el ERP.",
    links: [
      { href: "/simulador", label: "Simulador" },
      { href: "/calculadoras", label: "Calculadoras" },
      { href: "/sap", label: "ERP" },
    ],
  },
  {
    icon: "badge",
    title: "4. Certifica",
    text: "Simulacros de examen y autoevaluación para acreditar lo que sabes.",
    links: [{ href: "/certificaciones", label: "Certificaciones" }],
  },
];

export default function Home() {
  const { progress, loaded } = useProgress();
  const isDone = (slug: string) => !!progress[slug]?.done;
  const doneCount = lessons.filter((l) => isDone(l.slug)).length;
  const next = lessons.find((l) => !isDone(l.slug));
  const pct = loaded ? Math.round((doneCount / lessons.length) * 100) : 0;
  const nextBlock = next ? blockOfLevel(next.level) : undefined;

  return (
    <div className="space-y-10">
      {/* cabecera + continuar */}
      <section className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
          <p className="text-sm font-medium text-accent">Química desde cero · Chemistry from scratch</p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">De no saber química a entender tu hoja de producción</h1>
          <p className="mt-3 max-w-2xl text-muted">
            {lessons.length} lecciones en 19 niveles, ordenadas en 4 bloques. Sigue la ruta de arriba abajo: cada nivel se apoya en
            los anteriores.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-5">
            <ProgressRing pct={pct} size={64} label={`${doneCount} de ${lessons.length} lecciones completadas`} />
            <div className="text-sm">
              <p className="text-lg font-semibold tabular-nums">
                {doneCount} <span className="font-normal text-muted">/ {lessons.length} lecciones</span>
              </p>
              <p className="text-muted">
                {blocks.map((b) => {
                  const ls = lessonsOfBlock(b);
                  const d = ls.filter((l) => isDone(l.slug)).length;
                  return (
                    <span key={b.id} className="mr-3 inline-flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full" style={{ background: blockColor[b.id].fg }} />
                      {b.title}: {d}/{ls.length}
                    </span>
                  );
                })}
              </p>
            </div>
          </div>
        </div>

        {next && nextBlock && (
          <Link
            href={`/leccion/${next.slug}`}
            className="group flex flex-col justify-between rounded-2xl border-2 p-6 transition hover:-translate-y-0.5"
            style={{ borderColor: blockColor[nextBlock.id].fg, background: blockColor[nextBlock.id].soft }}
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: blockColor[nextBlock.id].fg }}>
                {doneCount === 0 ? "Empieza aquí" : "Tu siguiente lección"}
              </p>
              <p className="mt-2 text-sm text-muted">
                Bloque {nextBlock.n} · Nivel {next.level}. {levelInfo(next.level).title}
              </p>
              <p className="mt-1 text-xl font-semibold">{next.title}</p>
              <p className="mt-2 text-sm text-muted">{next.summary}</p>
              <ol className="mt-4 space-y-1 text-sm">
                {lessonsOfLevel(next.level).map((l) => (
                  <li key={l.slug} className={`flex items-center gap-2 ${l.slug === next.slug ? "font-semibold" : "text-muted"}`}>
                    <span
                      className="grid h-4 w-4 shrink-0 place-items-center rounded-full text-[10px] text-white"
                      style={{ background: isDone(l.slug) ? "var(--ok)" : l.slug === next.slug ? blockColor[nextBlock.id].fg : "var(--line)" }}
                    >
                      {isDone(l.slug) ? "✓" : ""}
                    </span>
                    {l.title}
                  </li>
                ))}
              </ol>
            </div>
            <span
              className="mt-5 inline-flex w-fit items-center gap-2 rounded-lg px-4 py-2 font-medium text-white"
              style={{ background: blockColor[nextBlock.id].fg }}
            >
              {doneCount === 0 ? "Empezar" : "Continuar"} · {next.minutes} min
              <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </span>
          </Link>
        )}
      </section>

      {/* cómo funciona */}
      <section aria-labelledby="como" className="space-y-3">
        <h2 id="como" className="text-sm font-semibold uppercase tracking-wider text-muted">Cómo se usa el aula</h2>
        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.title} className="flex flex-col rounded-xl border border-line bg-surface p-4">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent-soft text-accent">
                <Icon name={s.icon} />
              </span>
              <p className="mt-3 font-semibold">{s.title}</p>
              <p className="mt-1 flex-1 text-sm text-muted">{s.text}</p>
              <p className="mt-3 flex flex-wrap gap-x-3 text-sm">
                {s.links.map((l) => (
                  <Link key={l.href} href={l.href} className="font-medium text-accent hover:underline">
                    {l.label} →
                  </Link>
                ))}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="flex flex-wrap items-center gap-3 rounded-xl border border-line bg-warn-soft p-4 text-sm">
        <Icon name="bulb" className="h-5 w-5 shrink-0" />
        <span>
          <strong>Kit de supervivencia para tus primeras semanas en planta:</strong> haz cuanto antes{" "}
          <Link className="underline" href="/leccion/alcoa-plus">ALCOA+</Link>,{" "}
          <Link className="underline" href="/leccion/unidades-y-conversiones">Unidades</Link>,{" "}
          <Link className="underline" href="/leccion/el-mol">El mol</Link> y{" "}
          <Link className="underline" href="/leccion/pictogramas-y-fds">Pictogramas y FDS</Link>.
        </span>
      </section>

      {/* ruta */}
      <section id="ruta" aria-labelledby="ruta-h" className="space-y-2">
        <h2 id="ruta-h" className="text-2xl font-semibold tracking-tight">Tu ruta de estudio</h2>
        <p className="text-muted">Cuatro bloques, de la química básica a la liberación del lote. Pulsa un nivel para ver sus lecciones.</p>

        <ol className="relative mt-6 space-y-10 border-l-2 border-dashed border-line pl-6 sm:pl-10">
          {blocks.map((b) => {
            const c = blockColor[b.id];
            const ls = lessonsOfBlock(b);
            const d = ls.filter((l) => isDone(l.slug)).length;
            return (
              <li key={b.id} className="relative">
                <span
                  className="absolute -left-[42px] top-0 grid h-9 w-9 place-items-center rounded-full text-white ring-4 ring-[var(--bg)] sm:-left-[58px]"
                  style={{ background: c.fg }}
                  aria-hidden
                >
                  <Icon name={blockIcon[b.id]} className="h-5 w-5" />
                </span>
                <div className="mb-4 flex flex-wrap items-end gap-x-4 gap-y-1">
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: c.fg }}>
                      Bloque {b.n} · {b.titleEn}
                    </p>
                    <h3 className="text-xl font-semibold">{b.title}</h3>
                    <p className="text-sm text-muted">
                      <em className="not-italic text-ink">{b.question}</em> {b.description}
                    </p>
                  </div>
                  <span className="text-sm tabular-nums text-muted">
                    {d}/{ls.length} lecciones
                  </span>
                </div>
                <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {b.levels.map((n) => {
                    const lv = levelInfo(n);
                    const lls = lessonsOfLevel(n);
                    const ld = lls.filter((l) => isDone(l.slug)).length;
                    const lp = lls.length ? Math.round((ld / lls.length) * 100) : 0;
                    const status = ld === 0 ? "Sin empezar" : ld === lls.length ? "Completado" : "En curso";
                    return (
                      <li key={n}>
                        <Link
                          href={`/nivel/${n}`}
                          className="flex h-full flex-col rounded-xl border border-line bg-surface p-4 transition hover:-translate-y-0.5 hover:shadow-md"
                          style={{ borderTop: `3px solid ${c.fg}` }}
                        >
                          <div className="flex items-start gap-3">
                            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg" style={{ background: c.soft, color: c.fg }}>
                              <Icon name={levelIcon[n]} className="h-6 w-6" />
                            </span>
                            <div className="min-w-0">
                              <p className="text-xs font-medium text-muted">Nivel {n}</p>
                              <p className="font-semibold leading-snug">{lv.title}</p>
                              <p lang="en" className="text-xs text-muted">{lv.titleEn}</p>
                            </div>
                          </div>
                          <p className="mt-2 flex-1 text-sm text-muted">{lv.description}</p>
                          <div className="mt-3 flex items-center gap-2 text-xs text-muted">
                            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-soft">
                              <div className="h-full rounded-full" style={{ width: `${loaded ? lp : 0}%`, background: c.fg }} />
                            </div>
                            <span className="tabular-nums">
                              {ld}/{lls.length}
                            </span>
                          </div>
                          <p className="mt-1.5 flex justify-between text-xs text-muted">
                            <span>
                              {lls.length} lecciones · {Math.round(minutesOfLevel(n) / 5) * 5} min
                            </span>
                            <span style={status === "Completado" ? { color: "var(--ok)", fontWeight: 600 } : undefined}>{status}</span>
                          </p>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ol>
      </section>
    </div>
  );
}
