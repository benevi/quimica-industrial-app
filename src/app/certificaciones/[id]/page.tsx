import Link from "next/link";
import { notFound } from "next/navigation";
import { casesForUnits } from "@/certs/casos";
import { showGrade } from "@/certs/grading";
import { bankSize, prepSummary, unitLessons, unitPool } from "@/certs/pool";
import { getPrep, preps } from "@/certs/prep";
import { Readiness } from "@/components/certs/Readiness";
import { SyllabusProgress } from "@/components/certs/SyllabusProgress";
import { Icon } from "@/components/icons";
import { Card, Disclosure, PageHeader, SectionTitle, btn } from "@/components/ui";

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

  const short = p.title.split(" · ")[0];

  return (
    <div className="space-y-10">
      <PageHeader
        crumbs={[{ href: "/certificaciones", label: "Certificaciones" }, { label: short }]}
        title={p.title}
        en="Exam prep"
        icon="badge"
        lead={
          <>
            {questions} preguntas (de ellas {bankSize(p)} propias del examen), {allCases.length} supuestos prácticos y {p.mocks.length} simulacro
            {p.mocks.length === 1 ? "" : "s"} con el formato real.
          </>
        }
        actions={
          p.mocks[0] && (
            <Link href={`/simulacro/${p.mocks[0].id}`} className={btn.primary}>
              Hacer un simulacro
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          )
        }
      />

      <Readiness summary={summary} />

      <section aria-labelledby="sim-h">
        <SectionTitle id="sim-h" en="Mock exams">
          Simulacros
        </SectionTitle>
        <ul className="grid gap-3 md:grid-cols-2">
          {p.mocks.map((m) => (
            <li key={m.id}>
              <Card className="flex h-full flex-col p-4">
                <p className="font-medium">{m.title}</p>
                <p className="mt-1 flex-1 text-sm text-muted">
                  {m.note} {m.minutes} min · aprobado con {showGrade(m.pass, m.scale)}.
                </p>
                <Link href={`/simulacro/${m.id}`} className={`${btn.quiet} -ml-2 mt-2 self-start`}>
                  Hacer el simulacro
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </Card>
            </li>
          ))}
        </ul>
      </section>

      {allCases.length > 0 && (
        <section aria-labelledby="sup-h">
          <SectionTitle id="sup-h" en="Case studies">
            Supuestos prácticos
          </SectionTitle>
          <p className="max-w-[68ch] text-sm text-muted">
            Casos de planta con cálculos y decisiones, como la parte práctica de la prueba. Uno de ellos sale en cada simulacro.
          </p>
          <SyllabusProgress mode="cases" items={allCases.map((c) => ({ id: c.id, title: c.title, unit: p.units.find((u) => u.key === c.unit)?.code ?? "" }))} />
        </section>
      )}

      <section aria-labelledby="pra-h">
        <SectionTitle id="pra-h" en="Hands-on">
          Práctica obligatoria
        </SectionTitle>
        <ul className="flex flex-wrap gap-2">
          {p.practice.map((x) => (
            <li key={x.href}>
              <Link href={x.href} className={btn.secondary}>
                {x.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="mas-h" className="space-y-3">
        <SectionTitle id="mas-h">Más sobre el examen</SectionTitle>
        <Disclosure
          summary={
            <span>
              <span className="font-medium">Cómo es el examen</span>{" "}
              <span lang="en" className="text-sm text-muted">
                Exam format
              </span>
            </span>
          }
        >
          <dl className="grid gap-x-6 gap-y-2 text-sm sm:grid-cols-[200px_1fr]">
            {p.format.map((f) => (
              <div key={f.label} className="contents">
                <dt className="font-medium">{f.label}</dt>
                <dd className="text-muted">{f.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 max-w-[68ch] text-sm">{p.formatNote}</p>
          <p className="mt-2 text-xs text-muted">
            Fuentes:{" "}
            {p.sources.map((s, i) => (
              <span key={s.url}>
                {i > 0 && " · "}
                <a href={s.url} target="_blank" rel="noreferrer" className="text-accent underline-offset-2 hover:underline">
                  {s.label}
                </a>
              </span>
            ))}
          </p>
        </Disclosure>

        <Disclosure
          summary={
            <span>
              <span className="font-medium">Temario oficial, punto por punto</span>{" "}
              <span lang="en" className="text-sm text-muted">
                Syllabus
              </span>
              <span className="mt-0.5 block text-sm text-muted">Cada punto del temario con las lecciones de la app que lo cubren. Las completadas salen en verde.</span>
            </span>
          }
        >
          <div className="space-y-6">
            {units.map((u) => (
              <div key={u.key}>
                <p className="font-medium">
                  <span className="t-tag mr-2 text-muted">{u.code}</span>
                  {u.name}
                  {u.hours ? <span className="font-normal text-muted"> · {u.hours} h</span> : null}
                  <span className="font-normal text-muted"> · {u.pool} preguntas</span>
                </p>
                <ul className="mt-2 divide-y divide-line rounded-[var(--radius)] border border-line">
                  {u.topics.map((t) => (
                    <li key={t.title} className="px-3 py-2.5 text-sm">
                      <p>{t.title}</p>
                      <SyllabusProgress mode="lessons" items={t.lessons.map((l) => ({ id: l.slug, title: l.title, unit: "" }))} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Disclosure>
      </section>
    </div>
  );
}
