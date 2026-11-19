"use client";

import Link from "next/link";
import { useState } from "react";
import { isRight, type Answer } from "@/certs/grading";
import type { PoolItem } from "@/certs/pool";
import { useCertState } from "@/certs/useCertState";
import { QuestionItem } from "@/components/certs/QuestionItem";
import { btn } from "@/components/ui";

/** Ejercicio de fichas de seguridad. Guarda la mejor nota y manda las preguntas falladas al repaso de fallos. */
export function FdsQuiz({ quizId, items, title = "Ejercicios" }: { quizId: string; items: PoolItem[]; title?: string }) {
  const { state, loaded, saveFds } = useCertState();
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [checked, setChecked] = useState(false);

  const answered = items.filter((it) => answers[it.id] !== undefined).length;
  const right = items.filter((it) => isRight(it.q, answers[it.id])).length;
  const best = state.fds?.[quizId];

  return (
    <section className="rounded-[var(--radius)] border border-line bg-surface p-5 sm:p-6" aria-labelledby={`quiz-${quizId}`}>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 id={`quiz-${quizId}`} className="t-h2">
          {title}
        </h2>
        {loaded && best !== undefined && <p className="text-sm text-muted">Tu mejor resultado: {Math.round(best * 100)} %</p>}
      </div>
      <ol className="mt-4 space-y-5">
        {items.map((it, i) => (
          <QuestionItem
            key={it.id}
            n={i + 1}
            name={`${quizId}-${i}`}
            q={it.q}
            answer={answers[it.id]}
            checked={checked}
            onAnswer={(a) => setAnswers((x) => ({ ...x, [it.id]: a }))}
          />
        ))}
      </ol>
      {!checked ? (
        <button
          onClick={() => {
            const marks = Object.fromEntries(items.map((it) => [it.id, isRight(it.q, answers[it.id])]));
            saveFds(quizId, right / items.length, marks);
            setChecked(true);
          }}
          disabled={answered < items.length}
          className={`${btn.primary} mt-6`}
        >
          Corregir ({answered}/{items.length})
        </button>
      ) : (
        <div className="mt-6 space-y-3" role="status">
          <p className="font-medium">
            {right} de {items.length} correctas.
            {right < items.length && (
              <span className="font-normal text-muted">
                {" "}
                Las falladas pasan a tu <Link href="/repaso" className="text-accent underline-offset-2 hover:underline">
                  repaso de fallos
                </Link> y volverán mañana.
              </span>
            )}
          </p>
          <button
            onClick={() => {
              setAnswers({});
              setChecked(false);
            }}
            className={btn.secondary}
          >
            Repetir
          </button>
        </div>
      )}
    </section>
  );
}
