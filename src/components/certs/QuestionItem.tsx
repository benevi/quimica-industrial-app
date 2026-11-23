"use client";

import { useMemo } from "react";
import type { Question } from "@/content/types";
import { fmt, isRight, type Answer } from "@/certs/grading";
import { seededOrder } from "@/lib/num";

/**
 * Una pregunta de test o numérica, con corrección y explicación cuando `checked`.
 * Las opciones se muestran barajadas (orden fijo por pregunta y por `seed`, que cambia en cada intento),
 * pero la respuesta se guarda siempre con el índice original de la opción.
 */
export function QuestionItem({
  n,
  name,
  q,
  from,
  answer,
  checked,
  onAnswer,
  seed = 0,
}: {
  n: number;
  name: string;
  q: Question;
  from?: string;
  answer: Answer;
  checked: boolean;
  onAnswer: (a: string | number) => void;
  seed?: number;
}) {
  const right = checked && isRight(q, answer);
  const count = q.kind === "choice" ? q.options.length : 0;
  const order = useMemo(() => seededOrder(count, q.q, seed), [count, q.q, seed]);
  return (
    <li>
      {q.kind === "choice" ? (
        <fieldset>
          <legend className="font-medium">
            <span className="mr-1 tabular-nums text-muted">{n}.</span> {q.q}
          </legend>
          <div className="mt-3 grid gap-2">
            {order.map((j) => {
              const opt = q.options[j];
              const selected = answer === j;
              const isAnswer = checked && j === q.answer;
              const isMiss = checked && selected && j !== q.answer;
              let cls = "border-line hover:border-accent";
              if (isAnswer) cls = "border-ok bg-ok-soft";
              else if (isMiss) cls = "border-bad bg-bad-soft";
              else if (selected) cls = "border-accent bg-accent-soft";
              return (
                <label key={j} className={`flex cursor-pointer items-center gap-3 rounded-md border px-3 py-2.5 text-sm ${cls}`}>
                  <input type="radio" name={name} className="accent-[var(--accent)]" checked={selected} disabled={checked} onChange={() => onAnswer(j)} />
                  <span className="flex-1">{opt}</span>
                  {isAnswer && <span className="shrink-0 text-xs font-semibold text-ok">Correcta</span>}
                  {isMiss && <span className="shrink-0 text-xs font-semibold text-bad">Tu respuesta</span>}
                </label>
              );
            })}
          </div>
        </fieldset>
      ) : (
        <>
          <p className="font-medium">
            <span className="mr-1 tabular-nums text-muted">{n}.</span> {q.q}
          </p>
          <div className="mt-3 flex items-center gap-2">
            <input
              inputMode="decimal"
              className={`w-40 rounded-md border bg-surface px-3 py-2 text-sm tabular-nums ${checked ? (right ? "border-ok" : "border-bad") : "border-line-strong"}`}
              placeholder="Tu respuesta"
              aria-label={q.unit ? `Respuesta en ${q.unit}` : "Respuesta"}
              value={(answer as string) ?? ""}
              disabled={checked}
              onChange={(e) => onAnswer(e.target.value)}
            />
            <span className="text-sm text-muted">{q.unit}</span>
          </div>
        </>
      )}
      {checked && (
        <p className={`mt-2 max-w-[68ch] border-l-2 pl-3 text-sm ${right ? "border-ok" : "border-bad"}`}>
          <strong className={right ? "text-ok" : "text-bad"}>{right ? "Correcto." : "No es correcto."}</strong>{" "}
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
