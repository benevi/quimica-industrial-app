"use client";

import { useCallback, useRef, useState } from "react";
import { useCountdown } from "@/lib/useCountdown";
import { EXAM_MINUTES, EXAM_PASS, examState, grade, lookups, randomVariant, type ExamVariant, type GradedTask } from "@/sap/exam";
import type { ErpState } from "@/sap/engine";
import { useCertState } from "@/certs/useCertState";
import { Icon } from "@/components/icons";
import { Card, btn } from "@/components/ui";
import { ResultPanel, TimerBar } from "@/components/certs/ExamChrome";
import { Simulator } from "./Simulator";

type Run = { v: ExamVariant; initial: ErpState };

export function ExamMode() {
  const { state: cert, saveSapExam } = useCertState();
  const [run, setRun] = useState<Run | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<{ tasks: GradedTask[]; score: number; total: number } | null>(null);
  const erp = useRef<ErpState | null>(null);
  const onState = useCallback((s: ErpState) => {
    erp.current = s;
  }, []);

  const { left, start: startTimer } = useCountdown(!!run && !result, () => finish());

  function start() {
    const v = randomVariant();
    const initial = examState(v);
    erp.current = initial;
    setRun({ v, initial });
    setAnswers({});
    setResult(null);
    startTimer(EXAM_MINUTES * 60);
  }

  function finish() {
    if (!run || !erp.current) return;
    const r = grade(erp.current, run.v, answers);
    setResult(r);
    saveSapExam({ score: r.score, total: r.total, date: new Date().toISOString() });
    window.scrollTo({ top: 0 });
  }


  const best = cert.sapExam?.best;

  if (!run)
    return (
      <Card as="section" className="p-5">
        <h2 className="t-h3">Antes de empezar</h2>
        <ul className="mt-2 max-w-[68ch] list-disc space-y-1 pl-5 text-sm">
          <li>{EXAM_MINUTES} minutos. Al acabar el tiempo se corrige solo.</li>
          <li>3 preguntas que se responden consultando el sistema y 7 tareas de transacciones: de la orden de proceso a la decisión de empleo.</li>
          <li>Sin pistas ni mensajes de GMP: solo los errores del sistema, como en uno real.</li>
          <li>
            Aprobado: {Math.round(EXAM_PASS * 100)} %. Para el indicador de preparación hace falta un {Math.round((EXAM_PASS + 0.1) * 100)} %.
          </li>
        </ul>
        {best && <p className="mt-3 text-sm text-muted">Tu mejor nota: {Math.round((best.score / best.total) * 100)} %</p>}
        <button onClick={start} className={`${btn.primary} mt-4`}>
          Empezar el examen
        </button>
      </Card>
    );

  const L = lookups(run.v);

  return (
    <div className="space-y-6">
      {result ? (
        <ResultPanel
          passed={result.score / result.total >= EXAM_PASS}
          label={result.score / result.total >= EXAM_PASS ? "Aprobado" : "No aprobado"}
          title={`Nota: ${Math.round((result.score / result.total) * 100)} %`}
        >
          <ol className="divide-y divide-line text-sm">
            {result.tasks.map((t) => (
              <li key={t.id} className="flex gap-3 py-2">
                <Icon name={t.ok ? "check" : "close"} className={`mt-0.5 h-4 w-4 shrink-0 ${t.ok ? "text-ok" : "text-bad"}`} />
                <span>
                  <span className="sr-only">{t.ok ? "Bien: " : "Mal: "}</span>
                  <strong className="font-medium">{t.text}</strong> <span className="text-muted">({t.points} puntos)</span>. {t.why}
                </span>
              </li>
            ))}
          </ol>
          <button onClick={start} className={`${btn.primary} mt-2`}>
            Hacer otro examen
          </button>
        </ResultPanel>
      ) : (
        <TimerBar left={left} onFinish={finish} />
      )}

      {!result && (
        <Card as="section" className="p-5">
          <h2 className="t-h2">
            <span lang="en">Tasks</span> <span className="text-sm font-normal text-muted">Tareas</span>
          </h2>
          <p lang="en" className="mt-1 text-sm text-muted">
            Plant 1000 · Today is 18/11/2026. Answer the questions using the system, then complete the process.
          </p>
          <ol className="mt-4 divide-y divide-line text-sm">
            {L.map((l, i) => (
              <li key={l.id} className="py-3">
                <p>
                  <span className="mr-1 tabular-nums text-muted">{i + 1}.</span>{" "}
                  <span lang="en" className="font-medium">
                    {l.qEn}
                  </span>
                </p>
                <p className="text-muted">{l.q}</p>
                <div className="mt-2 flex items-center gap-2">
                  <input
                    value={answers[l.id] ?? ""}
                    onChange={(e) => setAnswers((a) => ({ ...a, [l.id]: e.target.value }))}
                    aria-label={l.q}
                    className="w-40 rounded-md border border-line-strong bg-surface px-2.5 py-1.5 text-sm tabular-nums focus:border-accent"
                  />
                  {l.unit && <span className="text-muted">{l.unit}</span>}
                </div>
              </li>
            ))}
            <li className="py-3">
              <span className="mr-1 tabular-nums text-muted">4.</span>{" "}
              <span lang="en" className="font-medium">
                Create a process order for {run.v.qty} kg of material FG-5001 and release it.
              </span>
            </li>
            <li className="py-3">
              <span className="mr-1 tabular-nums text-muted">5.</span>{" "}
              <span lang="en" className="font-medium">
                Post the goods issue for all components, using only batches that may be used.
              </span>
            </li>
            <li className="py-3">
              <span className="mr-1 tabular-nums text-muted">6.</span>{" "}
              <span lang="en" className="font-medium">
                Confirm all phases. The batch yielded {run.v.yieldKg.toLocaleString("en-US")} kg. Post the goods receipt.
              </span>
            </li>
            <li className="py-3">
              <span className="mr-1 tabular-nums text-muted">7.</span>{" "}
              <span lang="en" className="font-medium">
                Record the lab results for the new inspection lot and make the correct usage decision.
              </span>
            </li>
          </ol>
        </Card>
      )}

      {!result && <Simulator mode="exam" initial={run.initial} onState={onState} />}
    </div>
  );
}
