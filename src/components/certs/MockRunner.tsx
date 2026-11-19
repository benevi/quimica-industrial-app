"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Case } from "@/certs/casos";
import { isRight, showGrade, type Answer } from "@/certs/grading";
import { drawMock } from "@/certs/draw";
import type { PoolItem } from "@/certs/pool";
import type { Mock } from "@/certs/prep";
import { useCertState } from "@/certs/useCertState";
import { Icon } from "@/components/icons";
import { Card, btn } from "@/components/ui";
import { ResultPanel, TimerBar } from "./ExamChrome";
import { QuestionItem } from "./QuestionItem";

/** Peso del supuesto práctico en la nota del simulacro (criterio de la app: la parte práctica cuenta un 30 %) */
const CASE_WEIGHT = 0.3;

type Drawn = { test: PoolItem[]; kase?: { c: Case; items: PoolItem[] } };

export function MockRunner({
  mock,
  certId,
  pools,
  caseList,
}: {
  mock: Mock;
  certId: string;
  pools: Record<string, PoolItem[]>;
  caseList: { c: Case; items: PoolItem[] }[];
}) {
  const { state, saveMock } = useCertState();
  const [drawn, setDrawn] = useState<Drawn | null>(null);
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [checked, setChecked] = useState(false);
  const [left, setLeft] = useState(0);

  function start() {
    const test = drawMock(mock, pools);
    const kase = mock.cases && caseList.length ? caseList[Math.floor(Math.random() * caseList.length)] : undefined;
    setDrawn({ test, kase });
    setAnswers({});
    setChecked(false);
    setLeft(mock.minutes * 60);
    window.scrollTo({ top: 0 });
  }

  useEffect(() => {
    if (!drawn || checked) return;
    if (left <= 0) {
      finish();
      return;
    }
    const t = setTimeout(() => setLeft((x) => x - 1), 1000);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drawn, checked, left]);

  function grade(d: Drawn) {
    const testOk = d.test.filter((it) => isRight(it.q, answers[it.id])).length;
    const caseOk = d.kase ? d.kase.items.filter((it) => isRight(it.q, answers[it.id])).length : 0;
    const tf = d.test.length ? testOk / d.test.length : 0;
    const cf = d.kase ? caseOk / d.kase.items.length : 0;
    const fraction = d.kase ? tf * (1 - CASE_WEIGHT) + cf * CASE_WEIGHT : tf;
    return { testOk, caseOk, tf, cf, fraction };
  }

  function finish() {
    if (!drawn) return;
    const g = grade(drawn);
    const all = [...drawn.test, ...(drawn.kase?.items ?? [])];
    const marks = Object.fromEntries(all.map((it) => [it.id, isRight(it.q, answers[it.id])]));
    saveMock(mock.id, { score: Math.round(g.fraction * 1000), total: 1000, date: new Date().toISOString() }, marks, drawn.kase ? { [drawn.kase.c.id]: g.cf } : {});
    setChecked(true);
    window.scrollTo({ top: 0 });
  }

  const history = state.mocks[mock.id] ?? [];
  const available = mock.units.reduce((a, u) => a + (pools[u]?.length ?? 0), 0);

  if (!drawn)
    return (
      <Card as="section" className="p-5">
        <h2 className="t-h3">Antes de empezar</h2>
        <ul className="mt-2 max-w-[68ch] list-disc space-y-1 pl-5 text-sm">
          <li>
            <strong className="font-medium">{mock.questions}</strong> preguntas tipo test sorteadas de un banco de {available}
            {mock.cases ? (
              <>
                {" "}
                y <strong className="font-medium">1 supuesto práctico</strong> (cuenta un {Math.round(CASE_WEIGHT * 100)} % de la nota)
              </>
            ) : null}
            .
          </li>
          <li>
            <strong className="font-medium">{mock.minutes} minutos</strong>. Al acabar el tiempo se entrega solo.
          </li>
          <li>
            Aprobado: <strong className="font-medium">{showGrade(mock.pass, mock.scale)}</strong>. Para darte por preparado, la app pide sacar al menos{" "}
            {showGrade(Math.min(1, mock.pass + 0.1), mock.scale)} en los dos últimos intentos.
          </li>
          <li>Cada fallo entra en tu repaso de fallos y vuelve a salir hasta que lo aciertes varias veces.</li>
        </ul>
        {history.length > 0 && (
          <p className="mt-3 text-sm text-muted">Tus intentos: {history.map((h) => showGrade(h.score / h.total, mock.scale)).join(" · ")}</p>
        )}
        <button onClick={start} className={`${btn.primary} mt-4`}>
          Empezar el simulacro
        </button>
      </Card>
    );

  const g = grade(drawn);
  const passed = g.fraction >= mock.pass;
  const answered = Object.values(answers).filter((a) => a !== undefined && a !== "").length;
  const totalQ = drawn.test.length + (drawn.kase?.items.length ?? 0);
  const set = (id: string) => (a: string | number) => setAnswers((x) => ({ ...x, [id]: a }));

  return (
    <section className="space-y-5">
      {!checked && <TimerBar left={left} answered={`${answered}/${totalQ} respondidas`} onFinish={finish} />}
      {checked && (
        <ResultPanel passed={passed} label={passed ? "Apto" : "No apto"} title={`Nota: ${showGrade(g.fraction, mock.scale)}`}>
          <p className="text-sm text-muted">
            Test: {g.testOk}/{drawn.test.length}
            {drawn.kase && (
              <>
                {" "}
                · Supuesto práctico: {g.caseOk}/{drawn.kase.items.length}
              </>
            )}
          </p>
          <p className="max-w-[68ch] text-sm">
            {passed
              ? "Bien. Repite otro simulacro en unos días: las preguntas cambian cada vez."
              : "Los fallos ya están en tu repaso. Mira de qué lección viene cada uno, repásala y haz el repaso antes de otro simulacro."}
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            <Link href="/repaso" className={btn.primary}>
              Ir al repaso de fallos
            </Link>
            <button onClick={start} className={btn.secondary}>
              Hacer otro simulacro
            </button>
          </div>
        </ResultPanel>
      )}

      <Card as="section" className="p-5">
        <h2 className="t-h2 mb-5">Parte 1: test</h2>
        <ol className="space-y-8">
          {drawn.test.map((it, i) => (
            <QuestionItem key={it.id} n={i + 1} name={it.id} q={it.q} from={it.from} answer={answers[it.id]} checked={checked} onAnswer={set(it.id)} />
          ))}
        </ol>
      </Card>

      {drawn.kase && (
        <Card as="section" className="p-5">
          <h2 className="t-h2">Parte 2: supuesto práctico</h2>
          <p className="mt-0.5 text-muted">{drawn.kase.c.title}</p>
          <div className="mt-3 max-w-[68ch] space-y-2 border-l-2 border-line-strong pl-4 text-sm leading-relaxed">
            {drawn.kase.c.context.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <ol className="mt-6 space-y-8">
            {drawn.kase.items.map((it, i) => (
              <QuestionItem key={it.id} n={i + 1} name={it.id} q={it.q} answer={answers[it.id]} checked={checked} onAnswer={set(it.id)} />
            ))}
          </ol>
        </Card>
      )}

      {!checked && (
        <button onClick={finish} className={btn.secondary}>
          Entregar el simulacro
        </button>
      )}
      <p>
        <Link href={`/certificaciones/${certId}`} className={`${btn.quiet} -ml-2`}>
          <Icon name="back" className="h-4 w-4" />
          Volver a la preparación
        </Link>
      </p>
    </section>
  );
}
