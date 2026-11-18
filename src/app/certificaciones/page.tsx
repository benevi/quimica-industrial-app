"use client";

import Link from "next/link";
import { levels } from "@/content";
import { certifications, roadmap, type CertModule } from "@/certs/data";
import { lessonsForLevels, questionsForModule } from "@/certs/progress";
import { PASS, useCertState } from "@/certs/useCertState";
import { useProgress } from "@/lib/progress";
import { missions } from "@/sap/engine";

function Bar({ pct }: { pct: number }) {
  return (
    <div className="h-2 flex-1 overflow-hidden rounded-full bg-soft" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
      <div className="h-full rounded-full bg-accent transition-all" style={{ width: `${pct}%` }} />
    </div>
  );
}

export default function CertificacionesPage() {
  const { progress, loaded } = useProgress();
  const { state, toggleStep } = useCertState();
  const missionsDone = missions.filter((m) => state.missions[m.id]).length;

  /** Preparación de un módulo: media entre lecciones hechas y resultado del simulacro */
  function moduleStatus(m: CertModule) {
    if (m.id === "sap-flujo") {
      const pct = Math.round((missionsDone / missions.length) * 100);
      return { pct, lessonsText: `${missionsDone}/${missions.length} misiones`, exam: undefined as undefined | { score: number; total: number } };
    }
    const ls = lessonsForLevels(m.levels);
    const done = ls.filter((l) => progress[l.slug]?.done).length;
    const exam = state.exams[m.id]?.best;
    const lessonPct = ls.length ? done / ls.length : 0;
    const examPct = exam ? Math.min(1, exam.score / exam.total / PASS) : 0;
    const pct = Math.round((ls.length ? lessonPct * 0.6 + examPct * 0.4 : examPct) * 100);
    return { pct, lessonsText: ls.length ? `${done}/${ls.length} lecciones` : "Sin lecciones aún", exam };
  }

  const stepsTotal = roadmap.reduce((a, p) => a + p.steps.length, 0);
  const stepsDone = roadmap.reduce((a, p) => a + p.steps.filter((s) => state.roadmap[s.id]).length, 0);

  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-line bg-surface p-6">
        <p className="text-sm font-medium text-accent">Certificaciones · Professional certifications</p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">Prepárate para certificar lo que sabes</h1>
        <p className="mt-2 max-w-2xl text-muted">
          Cada certificado oficial se divide en módulos. Aquí ves qué niveles del temario preparan cada módulo, cuánto llevas, y
          puedes hacer simulacros de examen y la autoevaluación que se usa para acreditar la experiencia.
        </p>
        <p className="mt-3 text-sm text-muted">
          La preparación de cada módulo combina lecciones completadas (60 %) y la mejor nota del simulacro (40 %). Es una
          orientación de la app: el certificado lo da siempre la administración o la entidad que lo emite.
        </p>
      </section>

      {/* ruta */}
      <section className="rounded-2xl border border-line bg-surface p-6">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <h2 className="text-lg font-semibold">
            Tu ruta <span lang="en" className="text-sm font-normal text-muted">Roadmap</span>
          </h2>
          <div className="flex min-w-48 flex-1 items-center gap-3">
            <Bar pct={Math.round((stepsDone / stepsTotal) * 100)} />
            <span className="text-sm tabular-nums text-muted">{stepsDone}/{stepsTotal} pasos</span>
          </div>
        </div>
        <ol className="space-y-4">
          {roadmap.map((p) => (
            <li key={p.phase}>
              <p className="text-sm font-semibold">
                {p.phase} <span className="font-normal text-muted">· {p.when}</span>
              </p>
              <ul className="mt-1 space-y-1">
                {p.steps.map((s) => (
                  <li key={s.id}>
                    <label className="flex cursor-pointer items-start gap-2 text-sm">
                      <input type="checkbox" className="mt-1 accent-[var(--accent)]" checked={!!state.roadmap[s.id]} onChange={() => toggleStep(s.id)} />
                      <span className={state.roadmap[s.id] ? "text-muted line-through" : ""}>{s.text}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      {/* certificados */}
      {certifications.map((c) => {
        const statuses = c.modules.map(moduleStatus);
        const pct = loaded ? Math.round(statuses.reduce((a, s) => a + s.pct, 0) / statuses.length) : 0;
        return (
          <section key={c.id} id={c.id} className="rounded-2xl border border-line bg-surface p-6">
            <p className="text-xs font-medium uppercase tracking-wide text-accent">
              {c.kind}{c.level && ` · ${c.level}`}{c.hours && ` · ${c.hours.toLocaleString("es-ES")} h`}
            </p>
            <h2 className="mt-1 text-xl font-semibold">
              <span className="font-mono text-base text-muted">{c.short}</span> {c.name}
            </h2>
            <div className="mt-3 flex items-center gap-3">
              <Bar pct={pct} />
              <span className="text-sm tabular-nums text-muted">{pct} % preparado</span>
            </div>
            <dl className="mt-4 grid gap-x-4 gap-y-1 text-sm sm:grid-cols-[110px_1fr]">
              <dt className="text-muted">Cómo se saca</dt><dd>{c.how}</dd>
              <dt className="text-muted">Coste</dt><dd>{c.cost}</dd>
              <dt className="text-muted">Fuente</dt>
              <dd><a href={c.source.url} target="_blank" rel="noreferrer" className="underline">{c.source.label}</a></dd>
            </dl>

            <ul className="mt-5 divide-y divide-line border-t border-line">
              {c.modules.map((m, i) => {
                const st = statuses[i];
                const nQ = m.levels.length ? questionsForModule(m).length : 0;
                return (
                  <li key={m.id} className="py-3">
                    <div className="flex flex-wrap items-baseline gap-x-2">
                      <span className="font-mono text-xs text-muted">{m.code}</span>
                      <span className="font-medium">{m.name}</span>
                      {m.hours && <span className="text-xs text-muted">{m.hours} h</span>}
                    </div>
                    <div className="mt-2 flex items-center gap-3">
                      <Bar pct={loaded ? st.pct : 0} />
                      <span className="w-12 text-right text-sm tabular-nums text-muted">{loaded ? st.pct : 0} %</span>
                    </div>
                    <p className="mt-1 text-xs text-muted">
                      {m.levels.length > 0 && <>Niveles: {m.levels.map((n) => `${n} ${levels.find((l) => l.number === n)?.title ?? ""}`).join(" · ")} · </>}
                      {st.lessonsText}
                      {st.exam && <> · simulacro {st.exam.score}/{st.exam.total}</>}
                    </p>
                    {m.gap && <p className="mt-1 text-xs text-bad">{m.gap}</p>}
                    <div className="mt-2 flex flex-wrap gap-2 text-sm">
                      {m.id === "sap-flujo" ? (
                        <Link href="/sap" className="rounded-lg bg-accent px-3 py-1.5 font-medium text-white hover:opacity-90">Abrir el simulador ERP</Link>
                      ) : (
                        nQ > 0 && (
                          <Link href={`/examen/${m.id}`} className="rounded-lg border border-line px-3 py-1.5 hover:bg-soft">
                            Simulacro ({nQ} preguntas en el banco)
                          </Link>
                        )
                      )}
                      {m.uc && (
                        <Link href={`/autoevaluacion/${m.uc}`} className="rounded-lg border border-line px-3 py-1.5 hover:bg-soft">
                          Autoevaluación {m.uc.toUpperCase()}_2
                        </Link>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}

      <section className="rounded-xl border border-line bg-warn-soft p-4 text-sm">
        <strong>Antes de inscribirte o pagar:</strong> confirma plazos, precios y requisitos en la web oficial de tu comunidad
        autónoma, del SEPE o de la entidad. Los datos de esta página se revisaron en noviembre de 2026.
      </section>
    </div>
  );
}
