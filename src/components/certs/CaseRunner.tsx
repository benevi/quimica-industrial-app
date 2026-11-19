"use client";

import { useState } from "react";
import type { Case } from "@/certs/casos";
import { isRight, type Answer } from "@/certs/grading";
import type { PoolItem } from "@/certs/pool";
import { useCertState } from "@/certs/useCertState";
import { Card, btn } from "@/components/ui";
import { ResultPanel } from "./ExamChrome";
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
      <Card as="section" className="p-5">
        <h2 className="t-h3">El caso</h2>
        <div className="mt-2 max-w-[68ch] space-y-2 text-sm leading-relaxed">
          {c.context.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <p className="mt-3 text-xs text-muted">Caso ficticio con fines didácticos. Ten a mano papel y calculadora, como en la prueba.</p>
      </Card>
      {best !== undefined && !checked && <p className="text-sm text-muted">Tu mejor resultado: {Math.round(best * 100)} %</p>}
      <Card as="section" className="p-5">
        <h2 className="t-h3 mb-5">Preguntas</h2>
        <ol className="space-y-8">
          {items.map((it, i) => (
            <QuestionItem key={it.id} n={i + 1} name={it.id} q={it.q} answer={answers[it.id]} checked={checked} onAnswer={(a) => setAnswers((x) => ({ ...x, [it.id]: a }))} />
          ))}
        </ol>
      </Card>
      {checked && (
        <ResultPanel passed={ok / items.length >= 0.7} label={ok / items.length >= 0.7 ? "Superado" : "Aún no"} title={`${ok}/${items.length} correctas`}>
          <p className="text-sm">{ok / items.length >= 0.7 ? "Supuesto superado." : "Los fallos han ido a tu repaso. Revisa las explicaciones y repítelo."}</p>
          <button
            onClick={() => {
              setAnswers({});
              setChecked(false);
            }}
            className={`${btn.secondary} mt-1`}
          >
            Repetir el supuesto
          </button>
        </ResultPanel>
      )}
      {!checked && (
        <button onClick={check} className={btn.primary}>
          Corregir
        </button>
      )}
    </section>
  );
}
