import Link from "next/link";
import { notFound } from "next/navigation";
import { casesForUnits } from "@/certs/casos";
import { showGrade } from "@/certs/grading";
import { bankSize, prepSummary, unitLessons, unitPool } from "@/certs/pool";
import { getPrep, preps } from "@/certs/prep";
import { Readiness } from "@/components/certs/Readiness";
import { SyllabusProgress } from "@/components/certs/SyllabusProgress";

export function generateStaticParams() {
  return preps.map((p) => ({ id: p.certId }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const p = getPrep(id);
  return { title: p ? `Preparación ${p.title.split(" · ")[0]} · Aula de Química` : "Preparación" };
}

export default async function PrepPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const p = getPrep(id);
  if (!p) notFound();
  const summary = prepSummary(p);
  const units = p.units.map((u) => ({
    ...u,
    pool: unitPool(u.key).length,
    topics: u.topics.map((t) => ({ title: t.title, lessons: unitLessons(u.key).filter((l) => t.lessons.includes(l.slug)).map((l) => ({ slug: l.slug, title: l.title })) })),
  }));
  const allCases = casesForUnits(p.units.map((u) => u.key));
  const questions = units.reduce((a, u) => a + u.pool, 0);

  return (
    <div className="space-y-8">
      <div>
        <Link href="/certificaciones" className="text-sm text-muted hover:text-ink">← Certificaciones</Link>
        <p className="mt-3 text-sm font-medium text-accent">Preparación de examen</p>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">{p.title}</h1>
        <p className="mt-2 max-w-2xl text-muted">
          {questions} preguntas (de ellas {bankSize(p)} propias del examen), {allCases.length} supuestos prácticos y {p.mocks.length} simulacro{p.mocks.length === 1 ? "" : "s"} con el formato real.
        </p>
      </div>

      <Readiness summary={summary} />

      <section className="rounded-2xl border border-line bg-surface p-6">
        <h2 className="text-lg font-semibold">
          Cómo es el examen <span lang="en" className="text-sm font-normal text-muted">Exam format</span>
        </h2>
        <dl className="mt-3 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-[200px_1fr]">
          {p.format.map((f) => (
            <div key={f.label} className="contents">
              <dt className="font-medium">{f.label}</dt>
              <dd className="text-muted">{f.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-3 text-sm">{p.formatNote}</p>
        <p className="mt-2 text-xs text-muted">
          Fuentes:{" "}
          {p.sources.map((s, i) => (
            <span key={s.url}>
              {i > 0 && " · "}
              <a href={s.url} target="_blank" rel="noreferrer" className="underline">
                {s.label}
              </a>
            </span>
          ))}
        </p>
      </section>

      <section className="rounded-2xl border border-line bg-surface p-6">
        <h2 className="text-lg font-semibold">
          Simulacros <span lang="en" className="text-sm font-normal text-muted">Mock exams</span>
        </h2>
        <ul className="mt-3 grid gap-3 md:grid-cols-2">
          {p.mocks.map((m) => (
            <li key={m.id} className="rounded-xl border border-line p-4">
              <p className="font-medium">{m.title}</p>
              <p className="mt-1 text-sm text-muted">
                {m.note} {m.minutes} min · aprobado con {showGrade(m.pass, m.scale)}.
              </p>
              <Link href={`/simulacro/${m.id}`} className="mt-3 inline-block rounded-lg bg-accent px-3 py-1.5 text-sm font-medium text-white hover:opacity-90">
                Hacer el simulacro
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {allCases.length > 0 && (
        <section className="rounded-2xl border border-line bg-surface p-6">
          <h2 className="text-lg font-semibold">
            Supuestos prácticos <span lang="en" className="text-sm font-normal text-muted">Case studies</span>
          </h2>
          <p className="mt-1 text-sm text-muted">Casos de planta con cálculos y decisiones, como la parte práctica de la prueba. Uno de ellos sale en cada simulacro.</p>
          <SyllabusProgress mode="cases" items={allCases.map((c) => ({ id: c.id, title: c.title, unit: p.units.find((u) => u.key === c.unit)?.code ?? "" }))} />
        </section>
      )}

      <section className="rounded-2xl border border-line bg-surface p-6">
        <h2 className="text-lg font-semibold">
          Práctica obligatoria <span lang="en" className="text-sm font-normal text-muted">Hands-on</span>
        </h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
          {p.practice.map((x) => (
            <li key={x.href}>
              <Link href={x.href} className="underline">
                {x.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-line bg-surface p-6">
        <h2 className="text-lg font-semibold">
          Temario oficial, punto por punto <span lang="en" className="text-sm font-normal text-muted">Syllabus</span>
        </h2>
        <p className="mt-1 text-sm text-muted">Cada punto del temario con las lecciones de la app que lo cubren. ✓ = lección completada.</p>
        <div className="mt-4 space-y-5">
          {units.map((u) => (
            <div key={u.key}>
              <p className="font-medium">
                {u.code} · {u.name}
                {u.hours ? <span className="font-normal text-muted"> · {u.hours} h</span> : null}
                <span className="font-normal text-muted"> · {u.pool} preguntas</span>
              </p>
              <ul className="mt-2 space-y-2">
                {u.topics.map((t) => (
                  <li key={t.title} className="rounded-lg border border-line p-3 text-sm">
                    <p>{t.title}</p>
                    <SyllabusProgress mode="lessons" items={t.lessons.map((l) => ({ id: l.slug, title: l.title, unit: "" }))} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
