"use client";

import type { Question } from "@/content/types";
import { fmt, isRight, type Answer } from "@/certs/grading";

/** Una pregunta de test o numérica, con corrección y explicación cuando `checked` */
export function QuestionItem({
  n,
  name,
  q,
  from,
  answer,
  checked,
  onAnswer,
}: {
  n: number;
  name: string;
  q: Question;
  from?: string;
  answer: Answer;
  checked: boolean;
  onAnswer: (a: string | number) => void;
}) {
  const right = checked && isRight(q, answer);
  return (
    <li>
      <p className="font-medium">
        {n}. {q.q}
      </p>
      {q.kind === "choice" ? (
        <div className="mt-2 grid gap-2">
          {q.options.map((opt, j) => {
            const selected = answer === j;
            let cls = "border-line hover:border-accent";
            if (checked && j === q.answer) cls = "border-ok bg-ok-soft";
            else if (checked && selected) cls = "border-bad bg-bad-soft";
            else if (selected) cls = "border-accent bg-accent-soft";
            return (
              <label key={j} className={`flex cursor-pointer items-center gap-3 rounded-lg border px-3 py-2 text-sm ${cls}`}>
                <input type="radio" name={name} className="accent-[var(--accent)]" checked={selected} disabled={checked} onChange={() => onAnswer(j)} />
                {opt}
              </label>
            );
          })}
        </div>
      ) : (
        <div className="mt-2 flex items-center gap-2">
          <input
            inputMode="decimal"
            className={`w-40 rounded-lg border bg-surface px-3 py-2 text-sm tabular-nums ${checked ? (right ? "border-ok" : "border-bad") : "border-line"}`}
            placeholder="Tu respuesta"
            aria-label={q.unit ? `Respuesta en ${q.unit}` : "Respuesta"}
            value={(answer as string) ?? ""}
            disabled={checked}
            onChange={(e) => onAnswer(e.target.value)}
          />
          <span className="text-sm text-muted">{q.unit}</span>
        </div>
      )}
      {checked && (
        <p className={`mt-2 rounded-lg px-3 py-2 text-sm ${right ? "bg-ok-soft" : "bg-bad-soft"}`}>
          <strong>{right ? "Correcto." : "No es correcto."}</strong>{" "}
          {q.kind === "number" && !right && (
            <>
              La respuesta es {fmt(q.answer)} {q.unit}.{" "}
            </>
          )}
          {q.explain} {from && <span className="text-xs text-muted">· {from}</span>}
        </p>
      )}
    </li>
  );
}
