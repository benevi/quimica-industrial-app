"use client";

import { useState } from "react";
import type { Case } from "@/certs/casos";
import { isRight, type Answer } from "@/certs/grading";
import type { PoolItem } from "@/certs/pool";
import { useCertState } from "@/certs/useCertState";
import { QuestionItem } from "./QuestionItem";

export function CaseRunner({ c, items }: { c: Case; items: PoolItem[] }) {
  const { state, saveCase } = useCertState();
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [checked, setChecked] = useState(false);

  const ok = items.filter((it) => isRight(it.q, answers[it.id])).length;
  const best = state.cases[c.id];

  function check() {
    setChecked(true);
    saveCase(c.id, ok / items.length, Object.fromEntries(items.map((it) => [it.id, isRight(it.q, answers[it.id])])));
  }

  return (
    <section className="space-y-5">
      <div className="space-y-2 rounded-2xl border border-line bg-soft p-5 text-sm">
        {c.context.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <p className="text-xs text-muted">Caso ficticio con fines didácticos. Ten a mano papel y calculadora, como en la prueba.</p>
      </div>
      {best !== undefined && !checked && <p className="text-sm text-muted">Tu mejor resultado: {Math.round(best * 100)} %</p>}
      <ol className="space-y-6 rounded-2xl border border-line bg-surface p-5">
        {items.map((it, i) => (
          <QuestionItem key={it.id} n={i + 1} name={it.id} q={it.q} answer={answers[it.id]} checked={checked} onAnswer={(a) => setAnswers((x) => ({ ...x, [it.id]: a }))} />
        ))}
      </ol>
      {!checked ? (
        <button onClick={check} className="rounded-lg bg-accent px-4 py-2 font-medium text-white hover:opacity-90">
          Corregir
        </button>
      ) : (
        <div className={`rounded-xl p-4 ${ok / items.length >= 0.7 ? "bg-ok-soft" : "bg-bad-soft"}`}>
          <p className="font-semibold">
            {ok}/{items.length} correctas
          </p>
          <p className="text-sm">{ok / items.length >= 0.7 ? "Supuesto superado." : "Los fallos han ido a tu repaso. Revisa las explicaciones y repítelo."}</p>
          <button
            onClick={() => {
              setAnswers({});
              setChecked(false);
            }}
            className="mt-3 rounded-lg border border-line bg-surface px-4 py-2 text-sm hover:bg-soft"
          >
            Repetir
          </button>
        </div>
      )}
    </section>
  );
}
