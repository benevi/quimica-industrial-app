"use client";

import Link from "next/link";
import { levels, lessonsOfLevel } from "@/content";
import { blockColor, blockOfLevel, levelInfo, minutesOfLevel } from "@/content/blocks";
import { Icon, levelIcon } from "@/components/icons";
import { ProgressRing } from "@/components/ProgressRing";
import { useProgress } from "@/lib/progress";

/** Dónde practicar lo aprendido en cada nivel */
const practice: Record<number, { href: string; label: string; text: string }[]> = {
  0: [{ href: "/calculadoras", label: "Calculadoras", text: "Practica conversiones de unidades y densidad." }],
  1: [{ href: "/calculadoras", label: "Calculadoras", text: "Moles, masa molar y concentraciones." }],
  2: [{ href: "/calculadoras", label: "Calculadoras", text: "Cargas en equivalentes y rendimiento." }],
  11: [{ href: "/simulador", label: "Simulador de planta", text: "Mira cómo se conectan equipos, tuberías y servicios en la vista de planta." }],
  12: [{ href: "/simulador", label: "Simulador de planta", text: "Fabrica un lote: reactor, filtro, centrífuga y secadero." }],
  13: [{ href: "/simulador", label: "Simulador de planta", text: "Lee temperaturas, presiones y alarmas en el panel." }],
  16: [{ href: "/simulador", label: "Simulador de planta", text: "Rellena la hoja de producción y pasa la revisión de QA." }],
  17: [{ href: "/sap", label: "Simulador ERP", text: "Lleva un lote de la orden de proceso a la liberación." }],
  18: [{ href: "/sap", label: "Simulador ERP", text: "Estados de calidad, entradas y salidas de almacén." }],
};

export function LevelView({ level }: { level: number }) {
  const { progress, loaded } = useProgress();
  const lv = levelInfo(level);
  const b = blockOfLevel(level);
  const c = blockColor[b.id];
  const ls = lessonsOfLevel(level);
  const done = ls.filter((l) => progress[l.slug]?.done).length;
  const pct = loaded && ls.length ? Math.round((done / ls.length) * 100) : 0;
  const next = ls.find((l) => !progress[l.slug]?.done) ?? ls[0];
  const i = levels.findIndex((x) => x.number === level);
  const prev = levels[i - 1];
  const nextLv = levels[i + 1];

  return (
    <div className="space-y-8">
      <nav aria-label="Ruta de navegación" className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
        <Link href="/#ruta" className="hover:text-ink">Ruta</Link>
        <span aria-hidden>›</span>
        <span style={{ color: c.fg }}>Bloque {b.n}. {b.title}</span>
        <span aria-hidden>›</span>
        <span className="text-ink">Nivel {level}</span>
      </nav>

      <header className="grid gap-6 rounded-2xl p-6 sm:p-8 lg:grid-cols-[1fr_auto]" style={{ background: c.soft }}>
        <div className="flex gap-4">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl text-white" style={{ background: c.fg }}>
            <Icon name={levelIcon[level]} className="h-8 w-8" />
          </span>
          <div>
            <p className="text-sm font-semibold" style={{ color: c.fg }}>Nivel {level}</p>
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">{lv.title}</h1>
            <p lang="en" className="text-muted">{lv.titleEn}</p>
            <p className="mt-3 max-w-2xl">{lv.description}</p>
            <p className="mt-2 text-sm text-muted">
              {ls.length} lecciones · unos {Math.round(minutesOfLevel(level) / 5) * 5} minutos en total
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 lg:flex-col lg:items-end lg:justify-between">
          <ProgressRing pct={pct} size={72} color={c.fg} />
          {next && (
            <Link href={`/leccion/${next.slug}`} className="inline-flex items-center gap-2 rounded-lg px-4 py-2 font-medium text-white" style={{ background: c.fg }}>
              {done === 0 ? "Empezar el nivel" : done === ls.length ? "Repasar" : "Continuar"}
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          )}
        </div>
      </header>

      <div className="grid gap-8 lg:grid-cols-[1fr_18rem]">
        <section aria-labelledby="lecciones">
          <h2 id="lecciones" className="mb-4 text-lg font-semibold">Lecciones del nivel</h2>
          <ol className="relative space-y-3">
            <span aria-hidden className="absolute bottom-6 left-[19px] top-6 w-0.5 bg-line" />
            {ls.map((l, k) => {
              const p = progress[l.slug];
              const isNext = l.slug === next?.slug && !p?.done;
              return (
                <li key={l.slug} className="relative">
                  <Link
                    href={`/leccion/${l.slug}`}
                    className={`flex gap-4 rounded-xl border bg-surface p-4 transition hover:shadow-md ${isNext ? "border-2" : "border-line"}`}
                    style={isNext ? { borderColor: c.fg } : undefined}
                  >
                    <span
                      className="relative z-[1] grid h-10 w-10 shrink-0 place-items-center rounded-full text-sm font-semibold"
                      style={p?.done ? { background: "var(--ok)", color: "white" } : { background: c.soft, color: c.fg }}
                      aria-label={p?.done ? "Completada" : `Lección ${k + 1}`}
                    >
                      {p?.done ? "✓" : k + 1}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex flex-wrap items-baseline gap-x-2">
                        <span className="font-semibold">{l.title}</span>
                        {isNext && (
                          <span className="rounded-full px-2 py-0.5 text-[11px] font-semibold text-white" style={{ background: c.fg }}>
                            Siguiente
                          </span>
                        )}
                      </span>
                      <span lang="en" className="block text-xs text-muted">
                        {l.titleEn} · {l.minutes} min · {l.terms.length} términos · test de {l.quiz.length} preguntas
                        {p?.done ? ` · nota ${p.score}/${p.total}` : ""}
                      </span>
                      <span className="mt-1 block text-sm text-muted">{l.summary}</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ol>
        </section>

        <aside className="space-y-4">
          {practice[level] && (
            <div className="rounded-xl border border-line bg-surface p-4">
              <p className="flex items-center gap-2 font-semibold">
                <Icon name="play" className="h-5 w-5 text-accent" /> Ponlo en práctica
              </p>
              <ul className="mt-2 space-y-2 text-sm">
                {practice[level].map((p) => (
                  <li key={p.href}>
                    <Link href={p.href} className="font-medium text-accent hover:underline">{p.label} →</Link>
                    <span className="block text-muted">{p.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="rounded-xl border border-line bg-surface p-4 text-sm">
            <p className="font-semibold">Cómo es cada lección</p>
            <ol className="mt-2 space-y-1.5 text-muted">
              <li><b className="text-ink">1. Idea clave</b>: el concepto explicado desde cero.</li>
              <li><b className="text-ink">2. Ejemplo de planta</b>: cómo se ve en una fábrica de API.</li>
              <li><b className="text-ink">3. Hoja de producción</b>: qué te encontrarás escrito.</li>
              <li><b className="text-ink">4. Vocabulario</b>: términos en español e inglés.</li>
              <li><b className="text-ink">5. Test</b>: al corregirlo, la lección cuenta como hecha.</li>
            </ol>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            {prev && (
              <Link href={`/nivel/${prev.number}`} className="rounded-lg border border-line bg-surface px-3 py-2 hover:border-accent">
                <span className="block text-xs text-muted">← Nivel anterior</span>
                {prev.number}. {prev.title}
              </Link>
            )}
            {nextLv && (
              <Link href={`/nivel/${nextLv.number}`} className="rounded-lg border border-line bg-surface px-3 py-2 text-right hover:border-accent">
                <span className="block text-xs text-muted">Nivel siguiente →</span>
                {nextLv.number}. {nextLv.title}
              </Link>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
