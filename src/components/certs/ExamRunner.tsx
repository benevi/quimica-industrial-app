"use client";

import Link from "next/link";
import { useCountdown } from "@/lib/useCountdown";
import { useState } from "react";
import type { Question } from "@/content/types";
import { shuffle } from "@/certs/draw";
import { isRight } from "@/certs/grading";
import { PASS, useCertState } from "@/certs/useCertState";
import { Icon } from "@/components/icons";
import { Card, btn } from "@/components/ui";
import { ResultPanel, TimerBar } from "./ExamChrome";
import { QuestionItem } from "./QuestionItem";

const MAX = 20;
const SECONDS_PER_Q = 75;

export function ExamRunner({ moduleId, pool }: { moduleId: string; pool: { q: Question; from: string }[] }) {
  const { state, saveExam } = useCertState();
  const [items, setItems] = useState<{ q: Question; from: string }[] | null>(null);
  const [answers, setAnswers] = useState<Record<number, string | number>>({});
  const [checked, setChecked] = useState(false);
  const [started, setStarted] = useState(false);
  const [seed, setSeed] = useState(0);

  const { left, start: startTimer } = useCountdown(started && !checked, () => finish());

  function start() {
    const picked = shuffle(pool).slice(0, MAX);
    setItems(picked);
    setAnswers({});
    setChecked(false);
    startTimer(picked.length * SECONDS_PER_Q);
    setStarted(true);
    setSeed(Math.floor(Math.random() * 1e9));
  }


  function finish() {
    if (!items) return;
    const score = items.filter((it, i) => isRight(it.q, answers[i])).length;
    setChecked(true);
    saveExam(moduleId, { score, total: items.length, date: new Date().toISOString() });
  }

  const prev = state.exams[moduleId];

  if (pool.length === 0)
    return (
      <Card className="p-5 text-sm text-muted">Aún no hay preguntas para este módulo: llegarán cuando se publiquen las lecciones de sus niveles.</Card>
    );

  if (!started || !items)
    return (
      <Card as="section" className="p-5">
        <h2 className="t-h3">Antes de empezar</h2>
        <ul className="mt-2 max-w-[68ch] list-disc space-y-1 pl-5 text-sm">
          <li>
            {Math.min(MAX, pool.length)} preguntas al azar de un banco de {pool.length}.
          </li>
          <li>{Math.round((Math.min(MAX, pool.length) * SECONDS_PER_Q) / 60)} minutos.</li>
          <li>Aprobado con el {Math.round(PASS * 100)} % (criterio de la app).</li>
        </ul>
        {prev && (
          <p className="mt-3 text-sm text-muted">
            Último intento: {prev.last.score}/{prev.last.total} · mejor: {prev.best.score}/{prev.best.total}
          </p>
        )}
        <button onClick={start} className={`${btn.primary} mt-4`}>
          Empezar el simulacro
        </button>
      </Card>
    );

  const score = items.filter((it, i) => isRight(it.q, answers[i])).length;
  const passed = score / items.length >= PASS;

  return (
    <section className="space-y-5">
      {!checked && <TimerBar left={left} answered={`${Object.values(answers).filter((a) => a !== undefined && a !== "").length}/${items.length} respondidas`} onFinish={finish} />}
      {checked && (
        <ResultPanel passed={passed} title={`${score}/${items.length} correctas`}>
          <p className="max-w-[68ch] text-sm">
            {passed
              ? "Buen nivel para este módulo. Repite dentro de unos días para afianzarlo."
              : "Repasa las lecciones de las preguntas falladas (se indica de qué lección viene cada una) y vuelve a intentarlo."}
          </p>
          <button onClick={start} className={`${btn.primary} mt-2`}>
            Hacer otro simulacro
          </button>
        </ResultPanel>
      )}
      <Card as="section" className="p-5">
        <ol className="space-y-8">
          {items.map(({ q, from }, i) => (
            <QuestionItem
              key={i}
              n={i + 1}
              name={`e${i}`}
              q={q}
              from={from}
              answer={answers[i]}
              checked={checked}
              seed={seed}
              onAnswer={(a) => setAnswers((x) => ({ ...x, [i]: a }))}
            />
          ))}
        </ol>
      </Card>
      {!checked && (
        <button onClick={finish} className={btn.secondary}>
          Entregar el simulacro
        </button>
      )}
      <p>
        <Link href="/certificaciones" className={`${btn.quiet} -ml-2`}>
          <Icon name="back" className="h-4 w-4" />
          Volver a certificaciones
        </Link>
      </p>
    </section>
  );
}
