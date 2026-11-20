"use client";

import Link from "next/link";
import { useState } from "react";
import type { Question } from "@/content/types";
import { isRight } from "@/certs/grading";
import { QuestionItem } from "@/components/certs/QuestionItem";
import { useProgress } from "@/lib/progress";
import { useLessonRoute } from "@/components/course/useLessonRoute";
import { btn } from "@/components/ui";
import { Icon } from "@/components/icons";

export function Quiz({
  slug,
  questions,
}: {
  slug: string;
  questions: Question[];
}) {
  const { progress, save } = useProgress();
  const route = useLessonRoute(slug);
  const [answers, setAnswers] = useState<Record<number, string | number>>({});
  const [checked, setChecked] = useState(false);
  // cambia en cada repetición para que las opciones salgan en otro orden
  const [attempt, setAttempt] = useState(0);

  const score = questions.filter((q, i) => isRight(q, answers[i])).length;
  const allAnswered = questions.every((_, i) => answers[i] !== undefined && answers[i] !== "");
  const prev = progress[slug];

  function check() {
    setChecked(true);
    save(slug, { done: true, score, total: questions.length, date: new Date().toISOString() });
  }

  function retry() {
    setAnswers({});
    setChecked(false);
    setAttempt((n) => n + 1);
  }

  return (
    <section className="rounded-[var(--radius)] border border-line bg-surface p-5 sm:p-6">
      <h2 className="mb-1 flex flex-wrap items-baseline gap-x-2 text-lg font-semibold">
        Comprueba lo que sabes <span lang="en" className="text-sm font-normal text-muted">Quick check</span>
      </h2>
      {prev?.done && !checked && (
        <p className="mb-3 text-sm text-muted">
          Ya la completaste ({prev.score}/{prev.total}). Puedes repetir el test.
        </p>
      )}
      <ol className="mt-4 space-y-6">
        {questions.map((q, i) => (
          <QuestionItem
            key={i}
            n={i + 1}
            name={`q${i}`}
            q={q}
            answer={answers[i]}
            checked={checked}
            seed={attempt}
            onAnswer={(a) => setAnswers((x) => ({ ...x, [i]: a }))}
          />
        ))}
      </ol>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        {!checked ? (
          <button
            onClick={check}
            disabled={!allAnswered}
            className={`${btn.primary} disabled:cursor-not-allowed`}
          >
            Corregir el test
          </button>
        ) : (
          <>
            <p className="font-medium" role="status">
              Resultado: {score}/{questions.length}
            </p>
            <button onClick={retry} className={btn.secondary}>
              Repetir el test
            </button>
            {route.next && (
              <Link href={`/leccion/${route.next.slug}${route.suffix}`} className={btn.primary}>
                Siguiente lección: {route.next.title}
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            )}
          </>
        )}
      </div>
    </section>
  );
}
