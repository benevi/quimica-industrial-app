"use client";

import Link from "next/link";
import { levels } from "@/content/catalog";
import { certifications, roadmap, type CertModule } from "@/certs/data";
import { lessonsForLevels, prepSummary, questionCountForModule } from "@/certs/summary";
import { readiness } from "@/certs/readiness";
import { PASS, useCertState } from "@/certs/useCertState";
import { useProgress } from "@/lib/progress";
import { missions } from "@/sap/engine";
import { preps } from "@/certs/prep";
import { Icon } from "@/components/icons";
import { Bar, Card, Disclosure, PageHeader, SectionTitle, btn } from "@/components/ui";
import { CertCard, type ModuleView } from "@/components/certs/CertCard";
import { Readiness } from "@/components/certs/Readiness";

const summaries = preps.map((p) => ({ p, summary: prepSummary(p) }));
const levelTitle = (n: number) => levels.find((l) => l.number === n)?.title ?? "";

/**
 * Portada de Certificarte: primero tu siguiente paso, luego los tres exámenes que prepara la app,
 * después los certificados (plegados) y, al final, la hoja de ruta por fases (plegada).
 */
export default function CertificacionesPage() {
  const { progress, loaded } = useProgress();
  const { state, loaded: cLoaded, toggleStep } = useCertState();
  const ready = loaded && cLoaded;
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
  const nextStep = roadmap.flatMap((p) => p.steps.map((s) => ({ ...s, phase: p.phase }))).find((s) => !state.roadmap[s.id]);

  // Siguiente paso recomendado: el primer examen que aún no está listo y su primer criterio pendiente
  const prepStatus = ready ? summaries.map(({ p, summary }) => ({ p, r: readiness(summary, state, progress) })) : [];
  const readyCount = prepStatus.filter((x) => x.r.status === "Listo para presentarte").length;
  const nextPrep = prepStatus.find((x) => x.r.status !== "Listo para presentarte");
  const nextCrit = nextPrep?.r.crit.find((c) => !c.ok);

  return (
    <div className="space-y-10">
      <PageHeader
        crumbs={[{ href: "/", label: "Hoy" }, { label: "Certificaciones" }]}
        title="Certificaciones"
        en="Professional certifications"
        icon="badge"
        lead="Qué certificados oficiales puedes sacar con lo que estudias aquí, cuánto llevas de cada uno y simulacros con el formato de la prueba real."
      />

      {/* tu siguiente paso */}
      <section aria-labelledby="sig-h">
        <div className="next-step overflow-hidden">
          <div className="grid gap-5 p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-end">
            <div className="min-w-0">
              <p id="sig-h" className="text-sm text-muted">
                Tu siguiente paso
              </p>
              {!ready ? (
                <p className="mt-2 text-muted">Calculando…</p>
              ) : nextPrep ? (
                <>
                  <h2 className="t-h2 mt-1">Prepara {nextPrep.p.title}</h2>
                  {nextCrit && (
                    <p className="mt-2 max-w-[60ch] leading-relaxed">
                      <span className="font-medium">{nextCrit.label}:</span> {nextCrit.detail}.
                    </p>
                  )}
                </>
              ) : (
                <>
                  <h2 className="t-h2 mt-1">Estás listo para los tres exámenes</h2>
                  <p className="mt-2 max-w-[60ch] leading-relaxed">Mantén el nivel con unos minutos de repaso de fallos cada día.</p>
                </>
              )}
              <p className="mt-3 text-sm text-muted">
                {ready ? readyCount : "–"} de {summaries.length} exámenes listos · {ready ? stepsDone : "–"} de {stepsTotal} pasos de tu hoja de ruta
              </p>
            </div>
            {ready && (
              <Link href={nextPrep ? `/certificaciones/${nextPrep.p.certId}` : "/repaso"} className={btn.primary}>
                {nextPrep ? "Seguir la preparación" : "Repasar fallos"}
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* preparación de examen */}
      <section aria-labelledby="prep-h">
        <SectionTitle
          id="prep-h"
          en="Exam prep"
          aside={
            <Link href="/repaso" className={btn.quiet}>
              Repaso de fallos
            </Link>
          }
        >
          Preparación de examen
        </SectionTitle>
        <p className="mb-4 max-w-[68ch] text-sm text-muted">
          Temario oficial punto por punto, simulacros con el formato y la nota de la prueba real, supuestos prácticos y un indicador que te dice cuándo estás listo.
        </p>
        <ul className="grid gap-3 md:grid-cols-3">
          {summaries.map(({ p, summary }) => (
            <li key={p.certId}>
              <Link href={`/certificaciones/${p.certId}`} className="group flex h-full flex-col rounded-[var(--radius)] border border-line bg-surface p-4 hover:border-accent">
                <h3 className="t-card group-hover:text-accent">{p.title}</h3>
                <div className="mt-auto pt-4">
                  <Readiness summary={summary} compact />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* certificados */}
      <section aria-labelledby="cert-h">
        <SectionTitle id="cert-h" en="Certificates">
          Certificados
        </SectionTitle>
        <p className="mb-4 max-w-[68ch] text-sm text-muted">
          Abre cada uno para ver cómo se saca, cuánto cuesta y sus módulos con simulacros y autoevaluación. La preparación de cada módulo combina lecciones
          completadas (60 %) y la mejor nota del simulacro (40 %). Es una orientación de la app: el certificado lo da siempre la administración o la entidad que
          lo emite.
        </p>
        <div className="space-y-3">
          {certifications.map((c) => {
            const statuses = c.modules.map(moduleStatus);
            const pct = loaded ? Math.round(statuses.reduce((a, s) => a + s.pct, 0) / statuses.length) : 0;
            const modules: ModuleView[] = c.modules.map((m, i) => ({
              id: m.id,
              code: m.code,
              name: m.name,
              hours: m.hours,
              gap: m.gap,
              uc: m.uc,
              pct: loaded ? statuses[i].pct : 0,
              lessonsText: statuses[i].lessonsText,
              exam: statuses[i].exam,
              levelsText: m.levels.map((n) => `${n} ${levelTitle(n)}`).join(" · "),
              questions: m.levels.length ? questionCountForModule(m) : 0,
            }));
            return <CertCard key={c.id} cert={c} pct={pct} modules={modules} />;
          })}
        </div>
      </section>

      {/* hoja de ruta */}
      <section aria-labelledby="ruta-h">
        <SectionTitle id="ruta-h" en="Roadmap">
          Tu hoja de ruta
        </SectionTitle>
        <Disclosure
          summary={
            <div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                <span className="font-medium">Pasos por fases, de hoy a tres años</span>
                <span className="ml-auto text-sm tabular-nums text-muted">
                  <span className="font-semibold text-ink">{stepsDone}</span> de {stepsTotal} pasos
                </span>
              </div>
              <Bar pct={Math.round((stepsDone / stepsTotal) * 100)} className="mt-2" label={`Hoja de ruta: ${stepsDone} de ${stepsTotal} pasos`} />
              {nextStep && (
                <p className="mt-2 text-sm text-muted">
                  Pendiente: <span className="text-ink">{nextStep.text}</span>
                </p>
              )}
            </div>
          }
        >
          <ol className="space-y-5">
            {roadmap.map((p) => (
              <li key={p.phase}>
                <p className="text-sm font-medium">
                  {p.phase} <span className="font-normal text-muted">· {p.when}</span>
                </p>
                <ul className="mt-2 space-y-1.5">
                  {p.steps.map((s) => (
                    <li key={s.id}>
                      <label className="flex max-w-[68ch] cursor-pointer items-start gap-2.5 text-sm">
                        <input
                          type="checkbox"
                          className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--accent)]"
                          checked={!!state.roadmap[s.id]}
                          onChange={() => toggleStep(s.id)}
                        />
                        <span className={state.roadmap[s.id] ? "text-muted line-through" : ""}>{s.text}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Disclosure>
      </section>

      <Card className="flex gap-3 p-4 text-sm">
        <Icon name="shield" className="mt-0.5 h-4 w-4 shrink-0 text-muted" />
        <p className="max-w-[68ch] text-muted">
          <strong className="font-medium text-ink">Antes de inscribirte o pagar,</strong> confirma plazos, precios y requisitos en la web oficial de tu comunidad
          autónoma, del SEPE o de la entidad. Los datos de esta página se revisaron en noviembre de 2026.
        </p>
      </Card>
    </div>
  );
}
