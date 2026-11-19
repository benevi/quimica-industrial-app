"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { isRight, type Answer } from "@/certs/grading";
import type { PoolItem } from "@/certs/pool";
import { SRS_DAYS, today, useCertState } from "@/certs/useCertState";
import { Bar, Card, btn } from "@/components/ui";
import { QuestionItem } from "./QuestionItem";

const SESSION = 15;

/** Repaso de fallos: las preguntas falladas vuelven en 1, 3, 7, 14 y 30 días según se van acertando (sistema Leitner) */
export function ReviewRunner({ items }: { items: Record<string, PoolItem> }) {
  const { state, loaded, review } = useCertState();
  const [session, setSession] = useState<string[] | null>(null);
  const [i, setI] = useState(0);
  const [answer, setAnswer] = useState<Answer>(undefined);
  const [checked, setChecked] = useState(false);
  const [right, setRight] = useState(0);

  const cards = useMemo(() => Object.entries(state.srs).filter(([id]) => items[id]), [state.srs, items]);
  const due = cards.filter(([, c]) => c.due <= today()).sort((a, b) => a[1].box - b[1].box || a[1].due.localeCompare(b[1].due));
  const byBox = [1, 2, 3, 4, 5].map((b) => cards.filter(([, c]) => c.box === b).length);

  if (!loaded) return <p className="text-muted">Cargando…</p>;

  if (!session) {
    return (
      <Card as="section" className="p-5">
        <h2 className="t-h2">{due.length === 0 ? "No tienes fallos pendientes hoy" : `${due.length} pregunta${due.length === 1 ? "" : "s"} para repasar hoy`}</h2>
        <p className="mt-1 max-w-[68ch] text-sm text-muted">
          Las preguntas que fallas en simulacros, supuestos y ejercicios de fichas de seguridad entran aquí. Cada vez que aciertas una, sube de caja y tarda más
          en volver ({SRS_DAYS.slice(1).join(", ")} días). Si la fallas, vuelve a la caja 1.
        </p>
        <ul className="mt-4 grid grid-cols-5 gap-2 text-center text-sm">
          {byBox.map((n, b) => (
            <li key={b} className="rounded-md border border-line bg-soft/50 p-2">
              <p className="text-xs text-muted">Caja {b + 1}</p>
              <p className="text-lg font-semibold tabular-nums">{n}</p>
            </li>
          ))}
        </ul>
        {due.length > 0 ? (
          <button
            onClick={() => {
              setSession(due.slice(0, SESSION).map(([id]) => id));
              setI(0);
              setRight(0);
              setAnswer(undefined);
              setChecked(false);
            }}
            className={`${btn.primary} mt-5`}
          >
            Repasar {Math.min(SESSION, due.length)}
          </button>
        ) : (
          <p className="mt-4 text-sm">
            Haz un{" "}
            <Link href="/certificaciones" className="text-accent underline-offset-2 hover:underline">
              simulacro o un supuesto práctico
            </Link>{" "}
            para alimentar el repaso.
          </p>
        )}
      </Card>
    );
  }

  if (i >= session.length)
    return (
      <Card as="section" className="p-5">
        <h2 className="t-h2">
          Repaso terminado: {right}/{session.length} acertadas
        </h2>
        <p className="mt-1 text-sm text-muted">Las acertadas vuelven más adelante; las falladas, mañana otra vez.</p>
        <button onClick={() => setSession(null)} className={`${btn.secondary} mt-4`}>
          Volver
        </button>
      </Card>
    );

  const id = session[i];
  const it = items[id];
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3 text-sm text-muted">
        <span>
          Pregunta {i + 1} de {session.length} · caja {state.srs[id]?.box ?? 1}
        </span>
        <Bar pct={Math.round((i / session.length) * 100)} className="flex-1" label="Avance del repaso" />
      </div>
      <Card as="section" className="p-5">
        <ol>
          <QuestionItem n={i + 1} name={`r-${id}`} q={it.q} from={it.from} answer={answer} checked={checked} onAnswer={setAnswer} />
        </ol>
      </Card>
      {!checked ? (
        <button
          onClick={() => {
            const ok = isRight(it.q, answer);
            setChecked(true);
            if (ok) setRight((x) => x + 1);
            review({ [id]: ok });
          }}
          disabled={answer === undefined || answer === ""}
          className={btn.primary}
        >
          Comprobar
        </button>
      ) : (
        <button
          onClick={() => {
            setI((x) => x + 1);
            setAnswer(undefined);
            setChecked(false);
          }}
          className={btn.primary}
        >
          Siguiente
        </button>
      )}
    </section>
  );
}
