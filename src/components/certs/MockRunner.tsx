"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Case } from "@/certs/casos";
import { isRight, showGrade, type Answer } from "@/certs/grading";
import { drawMock } from "@/certs/draw";
import type { PoolItem } from "@/certs/pool";
import type { Mock } from "@/certs/prep";
import { useCertState } from "@/certs/useCertState";
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
      <section className="rounded-2xl border border-line bg-surface p-5">
        <ul className="space-y-1 text-sm">
          <li>
            <strong>{mock.questions}</strong> preguntas tipo test sorteadas de un banco de {available}
            {mock.cases ? <> + <strong>1 supuesto práctico</strong> (cuenta un {Math.round(CASE_WEIGHT * 100)} % de la nota)</> : null}
          </li>
          <li>
            <strong>{mock.minutes} minutos</strong>. Al acabar el tiempo se entrega solo.
          </li>
          <li>
            Aprobado: <strong>{showGrade(mock.pass, mock.scale)}</strong>. Para darte por preparado, la app pide sacar al menos {showGrade(Math.min(1, mock.pass + 0.1), mock.scale)} en
            los dos últimos intentos.
          </li>
          <li>Cada fallo entra en tu repaso de fallos y vuelve a salir hasta que lo aciertes varias veces.</li>
        </ul>
        {history.length > 0 && (
          <p className="mt-3 text-sm text-muted">
            Tus intentos: {history.map((h) => showGrade(h.score / h.total, mock.scale)).join(" · ")}
          </p>
        )}
        <button onClick={start} className="mt-4 rounded-lg bg-accent px-4 py-2 font-medium text-white hover:opacity-90">
          Empezar el simulacro
        </button>
      </section>
    );

  const g = grade(drawn);
  const passed = g.fraction >= mock.pass;
  const mm = String(Math.floor(left / 60)).padStart(2, "0");
  const ss = String(left % 60).padStart(2, "0");
  const answered = Object.values(answers).filter((a) => a !== undefined && a !== "").length;
  const totalQ = drawn.test.length + (drawn.kase?.items.length ?? 0);
  const set = (id: string) => (a: string | number) => setAnswers((x) => ({ ...x, [id]: a }));

  return (
    <section className="space-y-5">
      {!checked && (
        <div className="sticky top-14 z-[5] flex items-center gap-3 rounded-xl border border-line bg-surface/95 px-4 py-2 text-sm backdrop-blur">
          <span className={`tabular-nums ${left < 300 ? "font-semibold text-bad" : ""}`} aria-label="Tiempo restante">
            ⏱ {mm}:{ss}
          </span>
          <span className="text-muted">
            {answered}/{totalQ} respondidas
          </span>
          <button onClick={finish} className="ml-auto rounded-lg bg-accent px-3 py-1.5 font-medium text-white hover:opacity-90">
            Entregar
          </button>
        </div>
      )}
      {checked && (
        <div className={`rounded-xl p-4 ${passed ? "bg-ok-soft" : "bg-bad-soft"}`}>
          <p className="text-lg font-semibold">
            Nota: {showGrade(g.fraction, mock.scale)} · {passed ? "Apto" : "No apto"}
          </p>
          <p className="text-sm">
            Test: {g.testOk}/{drawn.test.length}
            {drawn.kase && (
              <>
                {" "}
                · Supuesto práctico: {g.caseOk}/{drawn.kase.items.length}
              </>
            )}
          </p>
          <p className="mt-1 text-sm">
            {passed
              ? "Bien. Repite otro simulacro en unos días: las preguntas cambian cada vez."
              : "Los fallos ya están en tu repaso. Mira de qué lección viene cada uno, repásala y haz el repaso antes de otro simulacro."}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button onClick={start} className="rounded-lg border border-line bg-surface px-4 py-2 text-sm hover:bg-soft">
              Otro simulacro
            </button>
            <Link href="/repaso" className="rounded-lg border border-line bg-surface px-4 py-2 text-sm hover:bg-soft">
              Ir al repaso de fallos
            </Link>
          </div>
        </div>
      )}

      <div className="rounded-2xl border border-line bg-surface p-5">
        <h2 className="mb-4 font-semibold">Parte 1 · Test</h2>
        <ol className="space-y-6">
          {drawn.test.map((it, i) => (
            <QuestionItem key={it.id} n={i + 1} name={it.id} q={it.q} from={it.from} answer={answers[it.id]} checked={checked} onAnswer={set(it.id)} />
          ))}
        </ol>
      </div>

      {drawn.kase && (
        <div className="rounded-2xl border border-line bg-surface p-5">
          <h2 className="font-semibold">Parte 2 · Supuesto práctico: {drawn.kase.c.title}</h2>
          <div className="mt-2 space-y-2 rounded-lg bg-soft p-3 text-sm">
            {drawn.kase.c.context.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <ol className="mt-4 space-y-6">
            {drawn.kase.items.map((it, i) => (
              <QuestionItem key={it.id} n={i + 1} name={it.id} q={it.q} answer={answers[it.id]} checked={checked} onAnswer={set(it.id)} />
            ))}
          </ol>
        </div>
      )}

      {!checked && (
        <button onClick={finish} className="rounded-lg bg-accent px-4 py-2 font-medium text-white hover:opacity-90">
          Entregar
        </button>
      )}
      <p className="text-sm">
        <Link href={`/certificaciones/${certId}`} className="text-muted underline hover:text-ink">
          Volver a la preparación
        </Link>
      </p>
    </section>
  );
}
