"use client";

import Link from "next/link";
import { lessons } from "@/content/catalog";
import { blockOfLevel, levelInfo } from "@/content/blocks";
import { operatorSlugs, operatorStages } from "@/content/operador";
import { Icon, type IconName } from "@/components/icons";
import { Bar, Card, SectionTitle, btn } from "@/components/ui";
import { useProgress } from "@/lib/progress";

const practice: { href: string; icon: IconName; title: string; text: string }[] = [
  { href: "/simulador", icon: "reactor", title: "Fabrica un lote", text: "Reactor, filtro, centrífuga y secadero, con su hoja de producción." },
  { href: "/tarjetas", icon: "cards", title: "Repasa 5 minutos", text: "Tarjetas de vocabulario y seguridad antes del turno." },
  { href: "/calculadoras", icon: "calc", title: "Haz las cuentas", text: "Cargas en equivalentes, moles, diluciones y rendimiento." },
];

/** Portada: una sola cosa importante (tu siguiente lección) y, debajo, cómo vas. */
export default function Home() {
  const { progress, loaded } = useProgress();
  const isDone = (slug: string) => !!progress[slug]?.done;

  const opDone = operatorSlugs.filter(isDone).length;
  const opNextSlug = operatorSlugs.find((s) => !isDone(s));
  const allDone = lessons.filter((l) => isDone(l.slug)).length;
  const fullNext = lessons.find((l) => !isDone(l.slug));

  // Mientras la ruta del operador no esté terminada, es lo primero
  const onOperator = !!opNextSlug;
  const next = onOperator ? lessons.find((l) => l.slug === opNextSlug) : fullNext;
  const stageIdx = onOperator ? operatorStages.findIndex((s) => s.lessons.includes(opNextSlug!)) : -1;
  const stage = stageIdx >= 0 ? operatorStages[stageIdx] : undefined;
  const fresh = loaded && allDone === 0;

  return (
    <div className="space-y-10">
      <section aria-labelledby="hoy-h">
        <h1 id="hoy-h" className="t-display">
          {fresh ? "Empieza por aquí" : "Tu siguiente paso"}
        </h1>
        <p className="mt-1 text-muted">
          {onOperator
            ? "Sigues la ruta del operador: lo imprescindible para tu turno, en el orden en que lo vas a necesitar."
            : fullNext
              ? "Has terminado la ruta del operador. Ahora sigues el temario completo."
              : "Has completado todo el temario. Repasa con tarjetas o ponte a prueba con un simulacro."}
        </p>

        {next ? (
          <div className="next-step mt-6 overflow-hidden">
            <div className="grid gap-6 p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-end">
              <div className="min-w-0">
                <p className="text-sm text-muted">
                  {stage ? (
                    <>
                      Ruta del operador, etapa {stageIdx + 1} de {operatorStages.length}: <span className="text-ink">{stage.title}</span>
                    </>
                  ) : (
                    <>
                      Temario, nivel {next.level}: <span className="text-ink">{levelInfo(next.level).title}</span>
                    </>
                  )}
                </p>
                <h2 className="t-h1 mt-2">{next.title}</h2>
                <p lang="en" className="text-muted">
                  {next.titleEn}
                </p>
                <p className="mt-3 max-w-[60ch] leading-relaxed">{next.summary}</p>
              </div>
              <div className="flex flex-wrap items-center gap-3 md:flex-col md:items-stretch">
                <Link href={`/leccion/${next.slug}${onOperator ? "?ruta=operador" : ""}`} className={`${btn.primary} px-5 py-3 text-[15px]`}>
                  {fresh ? "Empezar la lección" : "Continuar"}
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
                <span className="text-center text-sm text-muted">{next.minutes} minutos</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/tarjetas" className={btn.primary}>
              Repasar con tarjetas
            </Link>
            <Link href="/certificaciones" className={btn.secondary}>
              Hacer un simulacro
            </Link>
          </div>
        )}
      </section>

      <section aria-labelledby="vas-h">
        <SectionTitle id="vas-h">Cómo vas</SectionTitle>
        <div className="grid gap-4 md:grid-cols-2">
          <ProgressCard
            href="/operador"
            icon="shield"
            title="Ruta del operador"
            done={opDone}
            total={operatorSlugs.length}
            loaded={loaded}
            note={onOperator && stage ? `Etapa actual: ${stage.title}` : "Terminada"}
          />
          <ProgressCard
            href="/temario"
            icon="book"
            title="Temario completo"
            done={allDone}
            total={lessons.length}
            loaded={loaded}
            note={fullNext ? `Te toca: ${blockOfLevel(fullNext.level).title}, nivel ${fullNext.level}` : "Completado"}
          />
        </div>
        <p className="mt-3 text-sm text-muted">
          Las lecciones de la ruta del operador cuentan también en el temario completo.{" "}
          <Link href="/progreso" className="text-accent underline underline-offset-2 hover:decoration-2">
            Guarda tu progreso
          </Link>{" "}
          para no perderlo.
        </p>
      </section>

      <section aria-labelledby="pr-h">
        <SectionTitle id="pr-h">Practica lo que aprendes</SectionTitle>
        <ul className="grid gap-3 sm:grid-cols-3">
          {practice.map((p) => (
            <li key={p.href}>
              <Link
                href={p.href}
                className="group flex h-full gap-3 rounded-[var(--radius)] border border-line bg-surface p-4 hover:border-accent"
              >
                <span className="bubble h-10 w-10 text-accent">
                  <Icon name={p.icon} className="h-5 w-5" />
                </span>
                <span>
                  <span className="t-card block group-hover:text-accent">{p.title}</span>
                  <span className="mt-0.5 block text-sm text-muted">{p.text}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function ProgressCard({
  href,
  icon,
  title,
  done,
  total,
  loaded,
  note,
}: {
  href: string;
  icon: IconName;
  title: string;
  done: number;
  total: number;
  loaded: boolean;
  note: string;
}) {
  const pct = loaded ? Math.round((done / total) * 100) : 0;
  return (
    <Card>
      <Link href={href} className="group block p-5">
        <div className="flex items-center gap-3">
          <Icon name={icon} className="h-5 w-5 text-muted" />
          <span className="t-card flex-1 group-hover:text-accent">{title}</span>
          <span className="text-sm tabular-nums text-muted">
            <span className="font-semibold text-ink">{loaded ? done : "–"}</span> de {total} lecciones
          </span>
        </div>
        <Bar pct={pct} className="mt-3" label={`${title}: ${pct} %`} />
        <p className="mt-2 text-sm text-muted">{note}</p>
      </Link>
    </Card>
  );
}
