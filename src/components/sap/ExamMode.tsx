"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { EXAM_MINUTES, EXAM_PASS, examState, grade, lookups, randomVariant, type ExamVariant, type GradedTask } from "@/sap/exam";
import type { ErpState } from "@/sap/engine";
import { useCertState } from "@/certs/useCertState";
import { Simulator } from "./Simulator";

type Run = { v: ExamVariant; initial: ErpState };

export function ExamMode() {
  const { state: cert, saveSapExam } = useCertState();
  const [run, setRun] = useState<Run | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [left, setLeft] = useState(0);
  const [result, setResult] = useState<{ tasks: GradedTask[]; score: number; total: number } | null>(null);
  const erp = useRef<ErpState | null>(null);
  const onState = useCallback((s: ErpState) => {
    erp.current = s;
  }, []);

  function start() {
    const v = randomVariant();
    const initial = examState(v);
    erp.current = initial;
    setRun({ v, initial });
    setAnswers({});
    setResult(null);
    setLeft(EXAM_MINUTES * 60);
  }

  function finish() {
    if (!run || !erp.current) return;
    const r = grade(erp.current, run.v, answers);
    setResult(r);
    saveSapExam({ score: r.score, total: r.total, date: new Date().toISOString() });
    window.scrollTo({ top: 0 });
  }

  useEffect(() => {
    if (!run || result) return;
    if (left <= 0) {
      finish();
      return;
    }
    const t = setTimeout(() => setLeft((x) => x - 1), 1000);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [run, result, left]);

  const best = cert.sapExam?.best;

  if (!run)
    return (
      <section className="rounded-2xl border border-line bg-surface p-5">
        <ul className="list-disc space-y-1 pl-5 text-sm">
          <li>{EXAM_MINUTES} minutos. Al acabar el tiempo se corrige solo.</li>
          <li>3 preguntas que se responden consultando el sistema y 7 tareas de transacciones: de la orden de proceso a la decisión de empleo.</li>
          <li>Sin pistas ni mensajes de GMP: solo los errores del sistema, como en uno real.</li>
          <li>Aprobado: {Math.round(EXAM_PASS * 100)} %. Para el indicador de preparación hace falta un {Math.round((EXAM_PASS + 0.1) * 100)} %.</li>
        </ul>
        {best && <p className="mt-3 text-sm text-muted">Tu mejor nota: {Math.round((best.score / best.total) * 100)} %</p>}
        <button onClick={start} className="mt-4 rounded-lg bg-accent px-4 py-2 font-medium text-white hover:opacity-90">
          Empezar el examen
        </button>
      </section>
    );

  const mm = String(Math.floor(left / 60)).padStart(2, "0");
  const ss = String(left % 60).padStart(2, "0");
  const L = lookups(run.v);

  return (
    <div className="space-y-5">
      {result ? (
        <section className={`rounded-xl p-4 ${result.score / result.total >= EXAM_PASS ? "bg-ok-soft" : "bg-bad-soft"}`}>
          <p className="text-lg font-semibold">
            Nota: {Math.round((result.score / result.total) * 100)} % · {result.score / result.total >= EXAM_PASS ? "Aprobado" : "No aprobado"}
          </p>
          <ol className="mt-3 space-y-2 text-sm">
            {result.tasks.map((t) => (
              <li key={t.id} className="flex gap-2">
                <span aria-hidden className={t.ok ? "text-ok" : "text-bad"}>
                  {t.ok ? "✓" : "✗"}
                </span>
                <span>
                  <strong>{t.text}</strong> ({t.points} puntos). {t.why}
                </span>
              </li>
            ))}
          </ol>
          <button onClick={start} className="mt-4 rounded-lg border border-line bg-surface px-4 py-2 text-sm hover:bg-soft">
            Otro examen
          </button>
        </section>
      ) : (
        <div className="sticky top-14 z-[5] flex items-center gap-3 rounded-xl border border-line bg-surface/95 px-4 py-2 text-sm backdrop-blur">
          <span className={`tabular-nums ${left < 300 ? "font-semibold text-bad" : ""}`} aria-label="Tiempo restante">
            ⏱ {mm}:{ss}
          </span>
          <button onClick={finish} className="ml-auto rounded-lg bg-accent px-3 py-1.5 font-medium text-white hover:opacity-90">
            Entregar
          </button>
        </div>
      )}

      {!result && (
        <section className="rounded-2xl border border-line bg-surface p-5">
          <h2 className="text-lg font-semibold">
            Tasks <span className="text-sm font-normal text-muted">Tareas</span>
          </h2>
          <p className="mt-1 text-sm text-muted">Plant 1000 · Today is 18/11/2026. Answer the questions using the system, then complete the process.</p>
          <ol className="mt-3 space-y-3 text-sm">
            {L.map((l, i) => (
              <li key={l.id}>
                <p>
                  {i + 1}. <span lang="en" className="font-medium">{l.qEn}</span>
                </p>
                <p className="text-muted">{l.q}</p>
                <div className="mt-1 flex items-center gap-2">
                  <input
                    value={answers[l.id] ?? ""}
                    onChange={(e) => setAnswers((a) => ({ ...a, [l.id]: e.target.value }))}
                    aria-label={l.q}
                    className="w-40 rounded-md border border-line bg-surface px-2.5 py-1.5 text-sm tabular-nums focus:border-accent focus:outline-none"
                  />
                  {l.unit && <span className="text-muted">{l.unit}</span>}
                </div>
              </li>
            ))}
            <li>
              4. <span lang="en" className="font-medium">Create a process order for {run.v.qty} kg of material FG-5001 and release it.</span>
            </li>
            <li>
              5. <span lang="en" className="font-medium">Post the goods issue for all components, using only batches that may be used.</span>
            </li>
            <li>
              6.{" "}
              <span lang="en" className="font-medium">
                Confirm all phases. The batch yielded {run.v.yieldKg.toLocaleString("en-US")} kg. Post the goods receipt.
              </span>
            </li>
            <li>
              7. <span lang="en" className="font-medium">Record the lab results for the new inspection lot and make the correct usage decision.</span>
            </li>
          </ol>
        </section>
      )}

      {!result && <Simulator mode="exam" initial={run.initial} onState={onState} />}
    </div>
  );
}
