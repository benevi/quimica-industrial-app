"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Question } from "@/content/types";
import { PASS, useCertState } from "@/certs/useCertState";

const MAX = 20;
const SECONDS_PER_Q = 75;

function parseNum(s: string) {
  const n = Number(s.trim().replace(/\s/g, "").replace(",", "."));
  return Number.isFinite(n) ? n : null;
}
function isRight(q: Question, a: string | number | undefined) {
  if (a === undefined || a === "") return false;
  if (q.kind === "choice") return a === q.answer;
  const n = parseNum(String(a));
  return n !== null && Math.abs(n - q.answer) <= Math.abs(q.answer) * q.tolerance + 1e-9;
}
const fmt = (n: number) => n.toLocaleString("es-ES", { maximumFractionDigits: 4 });

function shuffle<T>(arr: T[]) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function ExamRunner({ moduleId, pool }: { moduleId: string; pool: { q: Question; from: string }[] }) {
  const { state, saveExam } = useCertState();
  const [items, setItems] = useState<{ q: Question; from: string }[] | null>(null);
  const [answers, setAnswers] = useState<Record<number, string | number>>({});
  const [checked, setChecked] = useState(false);
  const [left, setLeft] = useState(0);
  const [started, setStarted] = useState(false);

  function start() {
    const picked = shuffle(pool).slice(0, MAX);
    setItems(picked);
    setAnswers({});
    setChecked(false);
    setLeft(picked.length * SECONDS_PER_Q);
    setStarted(true);
  }

  useEffect(() => {
    if (!started || checked) return;
    if (left <= 0) {
      finish();
      return;
    }
    const t = setTimeout(() => setLeft((x) => x - 1), 1000);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, checked, left]);

  function finish() {
    if (!items) return;
    const score = items.filter((it, i) => isRight(it.q, answers[i])).length;
    setChecked(true);
    saveExam(moduleId, { score, total: items.length, date: new Date().toISOString() });
  }

  const prev = state.exams[moduleId];

  if (pool.length === 0)
    return <p className="rounded-xl border border-dashed border-line p-4 text-sm text-muted">Aún no hay preguntas para este módulo: llegarán cuando se publiquen las lecciones de sus niveles.</p>;

  if (!started || !items)
    return (
      <section className="rounded-2xl border border-line bg-surface p-5">
        <p className="text-sm">
          {Math.min(MAX, pool.length)} preguntas al azar de un banco de {pool.length} · {Math.round((Math.min(MAX, pool.length) * SECONDS_PER_Q) / 60)} minutos ·
          aprobado con el {Math.round(PASS * 100)} % (criterio de la app).
        </p>
        {prev && (
          <p className="mt-2 text-sm text-muted">
            Último intento: {prev.last.score}/{prev.last.total} · mejor: {prev.best.score}/{prev.best.total}
          </p>
        )}
        <button onClick={start} className="mt-4 rounded-lg bg-accent px-4 py-2 font-medium text-white hover:opacity-90">
          Empezar el simulacro
        </button>
      </section>
    );

  const score = items.filter((it, i) => isRight(it.q, answers[i])).length;
  const passed = score / items.length >= PASS;
  const mm = String(Math.floor(left / 60)).padStart(2, "0");
  const ss = String(left % 60).padStart(2, "0");

  return (
    <section className="space-y-5">
      {!checked && (
        <div className="sticky top-14 z-[5] flex items-center gap-3 rounded-xl border border-line bg-surface/95 px-4 py-2 text-sm backdrop-blur">
          <span className="tabular-nums" aria-label="Tiempo restante">⏱ {mm}:{ss}</span>
          <span className="text-muted">{Object.keys(answers).length}/{items.length} respondidas</span>
          <button onClick={finish} className="ml-auto rounded-lg bg-accent px-3 py-1.5 font-medium text-white hover:opacity-90">Entregar</button>
        </div>
      )}
      {checked && (
        <div className={`rounded-xl p-4 ${passed ? "bg-ok-soft" : "bg-bad-soft"}`}>
          <p className="text-lg font-semibold">
            {score}/{items.length} · {passed ? "Aprobado" : "Aún no"}
          </p>
          <p className="text-sm">
            {passed
              ? "Buen nivel para este módulo. Repite dentro de unos días para afianzarlo."
              : "Repasa las lecciones de las preguntas falladas (se indica de qué lección viene cada una) y vuelve a intentarlo."}
          </p>
          <button onClick={start} className="mt-3 rounded-lg border border-line bg-surface px-4 py-2 text-sm hover:bg-soft">Otro simulacro</button>
        </div>
      )}
      <ol className="space-y-6 rounded-2xl border border-line bg-surface p-5">
        {items.map(({ q, from }, i) => {
          const a = answers[i];
          const right = checked && isRight(q, a);
          return (
            <li key={i}>
              <p className="font-medium">{i + 1}. {q.q}</p>
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
                        <input type="radio" name={`e${i}`} className="accent-[var(--accent)]" checked={selected} disabled={checked} onChange={() => setAnswers({ ...answers, [i]: j })} />
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
                  {q.explain} <span className="text-xs text-muted">· {from}</span>
                </p>
              )}
            </li>
          );
        })}
      </ol>
      {!checked && (
        <button onClick={finish} className="rounded-lg bg-accent px-4 py-2 font-medium text-white hover:opacity-90">Entregar</button>
      )}
      <p className="text-sm"><Link href="/certificaciones" className="text-muted underline hover:text-ink">Volver a certificaciones</Link></p>
    </section>
  );
}
