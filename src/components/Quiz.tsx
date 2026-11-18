"use client";

import Link from "next/link";
import { useState } from "react";
import type { Question } from "@/content/types";
import { useProgress } from "@/lib/progress";

function parseNum(s: string) {
  const n = Number(s.trim().replace(/\s/g, "").replace(",", "."));
  return Number.isFinite(n) ? n : null;
}

function isRight(q: Question, a: string | number | undefined) {
  if (a === undefined || a === "") return false;
  if (q.kind === "choice") return a === q.answer;
  const n = parseNum(String(a));
  if (n === null) return false;
  return Math.abs(n - q.answer) <= Math.abs(q.answer) * q.tolerance + 1e-9;
}

const fmt = (n: number) => n.toLocaleString("es-ES", { maximumFractionDigits: 4 });

export function Quiz({
  slug,
  questions,
  nextSlug,
  nextTitle,
}: {
  slug: string;
  questions: Question[];
  nextSlug?: string;
  nextTitle?: string;
}) {
  const { progress, save } = useProgress();
  const [answers, setAnswers] = useState<Record<number, string | number>>({});
  const [checked, setChecked] = useState(false);

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
  }

  return (
    <section className="rounded-2xl border border-line bg-surface p-5 sm:p-6">
      <h2 className="mb-1 flex flex-wrap items-baseline gap-x-2 text-lg font-semibold">
        Comprueba lo que sabes <span lang="en" className="text-sm font-normal text-muted">Quick check</span>
      </h2>
      {prev?.done && !checked && (
        <p className="mb-3 text-sm text-muted">
          Ya la completaste ({prev.score}/{prev.total}). Puedes repetir el test.
        </p>
      )}
      <ol className="mt-4 space-y-6">
        {questions.map((q, i) => {
          const a = answers[i];
          const right = checked && isRight(q, a);
          const wrong = checked && !right;
          return (
            <li key={i}>
              <p className="font-medium">
                {i + 1}. {q.q}
              </p>
              {q.kind === "choice" ? (
                <div className="mt-2 grid gap-2">
                  {q.options.map((opt, j) => {
                    const selected = a === j;
                    let cls = "border-line hover:border-accent";
                    if (checked && j === q.answer) cls = "border-ok bg-ok-soft";
                    else if (checked && selected) cls = "border-bad bg-bad-soft";
                    else if (selected) cls = "border-accent bg-accent-soft";
                    return (
                      <label key={j} className={`flex cursor-pointer items-center gap-3 rounded-lg border px-3 py-2 text-sm ${cls}`}>
                        <input
                          type="radio"
                          name={`q${i}`}
                          className="accent-[var(--accent)]"
                          checked={selected}
                          disabled={checked}
                          onChange={() => setAnswers({ ...answers, [i]: j })}
                        />
                        {opt}
                      </label>
                    );
                  })}
                </div>
              ) : (
                <div className="mt-2 flex items-center gap-2">
                  <input
                    inputMode="decimal"
                    className={`w-40 rounded-lg border bg-surface px-3 py-2 text-sm tabular-nums ${
                      right ? "border-ok" : wrong ? "border-bad" : "border-line"
                    }`}
                    placeholder="Tu respuesta"
                    aria-label={`Respuesta en ${q.unit}`}
                    value={(a as string) ?? ""}
                    disabled={checked}
                    onChange={(e) => setAnswers({ ...answers, [i]: e.target.value })}
                  />
                  <span className="text-sm text-muted">{q.unit}</span>
                </div>
              )}
              {checked && (
                <p className={`mt-2 rounded-lg px-3 py-2 text-sm ${right ? "bg-ok-soft" : "bg-bad-soft"}`}>
                  <strong>{right ? "Correcto." : "No es correcto."}</strong>{" "}
                  {q.kind === "number" && !right && <>La respuesta es {fmt(q.answer)} {q.unit}. </>}
                  {q.explain}
                </p>
              )}
            </li>
          );
        })}
      </ol>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        {!checked ? (
          <button
            onClick={check}
            disabled={!allAnswered}
            className="rounded-lg bg-accent px-4 py-2 font-medium text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            Corregir
          </button>
        ) : (
          <>
            <p className="font-medium">
              Resultado: {score}/{questions.length}
            </p>
            <button onClick={retry} className="rounded-lg border border-line px-4 py-2 hover:bg-soft">
              Repetir
            </button>
            {nextSlug && (
              <Link href={`/leccion/${nextSlug}`} className="rounded-lg bg-accent px-4 py-2 font-medium text-white hover:opacity-90">
                Siguiente: {nextTitle} →
              </Link>
            )}
          </>
        )}
      </div>
    </section>
  );
}
