"use client";

import Link from "next/link";
import { useEffect } from "react";
import { readiness, type PrepSummary } from "@/certs/readiness";
import { useCertState } from "@/certs/useCertState";
import { useProgress } from "@/lib/progress";
import { migrate, type Sim } from "@/sim/engine";
import { reviewBatch } from "@/sim/review";
import { Icon } from "@/components/icons";
import { Bar, Card, Status, btn } from "@/components/ui";

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
  const kind = r.status === "Listo para presentarte" ? "done" : r.status === "Cerca" ? "doing" : "todo";

  if (compact)
    return (
      <div className="space-y-2 text-sm">
        <div className="flex items-center justify-between gap-2">
          <Status kind={kind}>{r.status}</Status>
          <span className="tabular-nums text-muted">{r.pct} %</span>
        </div>
        <Bar pct={r.pct} label={`Preparación: ${r.pct} %`} />
        <p className="text-muted">
          {r.okCount} de {r.crit.length} criterios cumplidos
        </p>
      </div>
    );

  return (
    <Card as="section" className="p-5">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <h2 className="t-h2">¿Estás listo?</h2>
        <Status kind={kind}>{r.status}</Status>
        <span className="ml-auto text-sm tabular-nums text-muted">
          <span className="font-semibold text-ink">{r.pct} %</span> · {r.okCount} de {r.crit.length} criterios
        </span>
      </div>
      <Bar pct={r.pct} className="mt-3" label="Preparación" />
      <ul className="mt-4 divide-y divide-line text-sm">
        {r.crit.map((c) => (
          <li key={c.key} className="flex items-start gap-3 py-2.5">
            <Icon name="check" className={`mt-0.5 h-4 w-4 shrink-0 ${c.ok ? "text-ok" : "text-line-strong"}`} />
            <span className="min-w-0 flex-1">
              <span className="font-medium">{c.label}</span>
              <span className="block text-muted">{c.detail}</span>
            </span>
            {c.href && !c.ok && (
              <Link href={c.href} className={`${btn.quiet} shrink-0`}>
                Ir ahora
              </Link>
            )}
            <span className="sr-only">{c.ok ? "Cumplido" : "Pendiente"}</span>
          </li>
        ))}
      </ul>
      <p className="mt-3 max-w-[68ch] text-xs text-muted">
        Criterio de la app, más exigente que el aprobado: no garantiza el resultado del examen real, pero si lo cumples todo, vas con margen.
      </p>
    </Card>
  );
}
