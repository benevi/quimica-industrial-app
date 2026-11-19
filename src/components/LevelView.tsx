"use client";

import Link from "next/link";
import { levels, lessonsOfLevel } from "@/content";
import { blockColor, blockOfLevel, levelInfo, minutesOfLevel } from "@/content/blocks";
import { Icon, levelIcon } from "@/components/icons";
import { Bar, Card, PageHeader, SectionTitle, Status, btn } from "@/components/ui";
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
  17: [{ href: "/sap", label: "Simulador ERP", text: "Estados de calidad, entradas y salidas de almacén." }],
  19: [{ href: "/sap", label: "Simulador ERP (tipo SAP)", text: "Lleva un lote de la orden de proceso a la decisión de empleo." }],
  20: [{ href: "/simulador", label: "Simulador de planta", text: "Registra datos ALCOA+ en la hoja y pasa la revisión de QA." }],
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
    <div>
      <PageHeader
        crumbs={[
          { href: "/temario", label: "Temario completo" },
          { href: "/temario", label: `Bloque ${b.n}. ${b.title}` },
          { label: `Nivel ${level}` },
        ]}
        title={
          <>
            <span className="text-muted">Nivel {level}.</span> {lv.title}
          </>
        }
        en={lv.titleEn}
        icon={levelIcon[level]}
        lead={
          <>
            {lv.description} {ls.length} lecciones, unos {Math.round(minutesOfLevel(level) / 5) * 5} minutos en total.
          </>
        }
        actions={
          next && (
            <Link href={`/leccion/${next.slug}`} className={btn.primary}>
              {done === 0 ? "Empezar el nivel" : done === ls.length ? "Repasar" : "Continuar"}
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          )
        }
      >
        <div className="flex max-w-md items-center gap-3 pt-1">
          <Bar pct={pct} color={c.fg} className="flex-1" label={`Nivel ${level}: ${pct} %`} />
          <span className="text-sm tabular-nums text-muted">
            {done} de {ls.length} hechas
          </span>
        </div>
      </PageHeader>

      <div className="grid gap-8 lg:grid-cols-[1fr_16rem]">
        <section aria-labelledby="lecciones">
          <SectionTitle id="lecciones">Lecciones</SectionTitle>
          <ol className="divide-y divide-line overflow-hidden rounded-[var(--radius)] border border-line bg-surface">
            {ls.map((l, k) => {
              const p = progress[l.slug];
              const isNext = l.slug === next?.slug && !p?.done;
              return (
                <li key={l.slug} className="relative">
                  {isNext && <span aria-hidden className="absolute inset-y-0 left-0 w-1 bg-signal" />}
                  <Link href={`/leccion/${l.slug}`} className="group flex gap-4 px-5 py-4 hover:bg-soft/60">
                    <span
                      className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-sm font-semibold tabular-nums"
                      style={
                        p?.done
                          ? { background: "var(--ok)", color: "#fff" }
                          : isNext
                            ? { background: "var(--signal)", color: "#1b1405" }
                            : { background: "var(--soft)", color: "var(--muted)" }
                      }
                      aria-label={p?.done ? "Completada" : `Lección ${k + 1}`}
                    >
                      {p?.done ? "✓" : k + 1}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex flex-wrap items-baseline gap-x-2">
                        <span className="font-medium group-hover:text-accent">{l.title}</span>
                        <span lang="en" className="text-sm text-muted">
                          {l.titleEn}
                        </span>
                      </span>
                      <span className="mt-0.5 block text-sm text-muted">{l.summary}</span>
                    </span>
                    <span className="hidden shrink-0 text-right text-sm text-muted sm:block">
                      {l.minutes} min
                      {p?.done && <span className="block text-xs">nota {p.score}/{p.total}</span>}
                      {isNext && (
                        <span className="mt-1 block">
                          <Status kind="doing">Te toca</Status>
                        </span>
                      )}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ol>
        </section>

        <aside className="space-y-4 text-sm">
          {practice[level] && (
            <Card className="p-4">
              <p className="font-medium">Ponlo en práctica</p>
              <ul className="mt-2 space-y-2">
                {practice[level].map((p) => (
                  <li key={p.href}>
                    <Link href={p.href} className="font-medium text-accent hover:underline">
                      {p.label}
                    </Link>
                    <span className="block text-muted">{p.text}</span>
                  </li>
                ))}
              </ul>
            </Card>
          )}
          <nav aria-label="Otros niveles" className="space-y-2">
            {prev && (
              <Link href={`/nivel/${prev.number}`} className="flex items-center gap-2 rounded-md px-2 py-1.5 text-muted hover:bg-soft hover:text-ink">
                <Icon name="back" className="h-4 w-4 shrink-0" />
                <span>
                  Nivel {prev.number}. {prev.title}
                </span>
              </Link>
            )}
            {nextLv && (
              <Link href={`/nivel/${nextLv.number}`} className="flex items-center gap-2 rounded-md px-2 py-1.5 text-muted hover:bg-soft hover:text-ink">
                <Icon name="arrow" className="h-4 w-4 shrink-0" />
                <span>
                  Nivel {nextLv.number}. {nextLv.title}
                </span>
              </Link>
            )}
          </nav>
        </aside>
      </div>
    </div>
  );
}
