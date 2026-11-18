"use client";

import Link from "next/link";
import { useEffect } from "react";
import { readiness, type PrepSummary } from "@/certs/readiness";
import { useCertState } from "@/certs/useCertState";
import { useProgress } from "@/lib/progress";
import { migrate, type Sim } from "@/sim/engine";
import { reviewBatch } from "@/sim/review";

/** Si hay un lote cerrado en el simulador de planta, guarda su nota para el indicador */
function usePlantResult() {
  const { loaded, savePlant } = useCertState();
  useEffect(() => {
    if (!loaded) return;
    try {
      const raw = window.localStorage.getItem("quimica-app:simulador:v1");
      if (!raw) return;
      const s = JSON.parse(raw) as Sim;
      if (s.version !== 1 || !s.closed) return;
      const r = reviewBatch(migrate(s));
      savePlant({ score: r.score, decision: r.decision, date: new Date().toISOString() });
    } catch {
      /* sin datos del simulador */
    }
  }, [loaded, savePlant]);
}

export function Readiness({ summary, compact = false }: { summary: PrepSummary; compact?: boolean }) {
  const { state, loaded } = useCertState();
  const { progress, loaded: pLoaded } = useProgress();
  usePlantResult();
  if (!loaded || !pLoaded) return <p className="text-sm text-muted">Calculando…</p>;
  const r = readiness(summary, state, progress);
  const color = r.status === "Listo para presentarte" ? "bg-ok-soft border-ok" : r.status === "Cerca" ? "bg-warn-soft border-line" : "bg-surface border-line";

  if (compact)
    return (
      <p className="text-sm">
        <span className="font-medium">{r.status}</span> <span className="text-muted">· {r.pct} % · {r.okCount}/{r.crit.length} criterios</span>
      </p>
    );

  return (
    <section className={`rounded-2xl border p-5 ${color}`}>
      <div className="flex flex-wrap items-baseline gap-x-3">
        <h2 className="text-lg font-semibold">{r.status}</h2>
        <span className="text-sm text-muted">
          {r.pct} % · {r.okCount} de {r.crit.length} criterios cumplidos
        </span>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-soft" role="progressbar" aria-valuenow={r.pct} aria-valuemin={0} aria-valuemax={100} aria-label="Preparación">
        <div className="h-full rounded-full bg-accent" style={{ width: `${r.pct}%` }} />
      </div>
      <ul className="mt-4 space-y-2 text-sm">
        {r.crit.map((c) => (
          <li key={c.key} className="flex gap-2">
            <span aria-hidden className={c.ok ? "text-ok" : "text-muted"}>
              {c.ok ? "✓" : "○"}
            </span>
            <span>
              <strong>{c.label}</strong>: {c.detail}
              {c.href && !c.ok && (
                <>
                  {" "}
                  ·{" "}
                  <Link href={c.href} className="underline">
                    ir
                  </Link>
                </>
              )}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-muted">
        Criterio de la app, más exigente que el aprobado: no garantiza el resultado del examen real, pero si lo cumples todo, vas con margen.
      </p>
    </section>
  );
}
