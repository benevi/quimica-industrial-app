"use client";

import { Icon } from "@/components/icons";
import { btn } from "@/components/ui";
import * as E from "@/sim/engine";
import type { Sim } from "@/sim/engine";
import type { Act } from "./Sheet";

/** Tarjeta que aparece cuando salta un incidente: qué ha pasado, por qué, consecuencias y qué hacer. */
export function IncidentCard({ s, act, onRedo }: { s: Sim; act: Act; onRedo: (index: number) => void }) {
  const inc = E.currentIncident(s);
  if (!inc) return null;
  const sec = E.SECTIONS.find((x) => x.id === inc.section)!;
  const fromIdx = inc.redoFrom ? E.SECTIONS.findIndex((x) => x.id === inc.redoFrom) : -1;
  return (
    <section className="overflow-hidden rounded-[var(--radius)] border border-bad bg-surface" role="alertdialog" aria-labelledby="inc-title">
      <p className="flex flex-wrap items-center gap-x-2 gap-y-1 border-b border-line bg-bad-soft px-4 py-2 text-sm text-bad">
        <Icon name="hazard" className="h-4 w-4" />
        <span className="font-medium">Incidente</span>
        <span className="font-mono">{inc.id}</span>
        <span>· {inc.sev} ·</span>
        <span className="font-mono">{E.fmtTime(inc.time)}</span>
      </p>
      <div className="space-y-4 p-4 sm:p-5">
        <div>
          <h2 id="inc-title" className="t-h3 text-ink">
            {inc.title}
          </h2>
          <p className="mt-1.5 text-sm leading-relaxed">{inc.what}</p>
        </div>
        <div className="text-sm">
          <h3 className="font-medium">Por qué ha pasado</h3>
          <p className="mt-1 leading-relaxed text-muted">{inc.cause}</p>
        </div>
        <dl className="divide-y divide-line rounded-md border border-line text-sm">
          <Consequence label="Seguridad" text={inc.safety} />
          <Consequence label="Producto" text={inc.product + (inc.lossPct > 0 ? ` Pérdida estimada: ${E.fmtNum(inc.lossPct, 0)} % del lote.` : "")} />
          <Consequence label="GMP" text={inc.gmp} />
        </dl>
        <div className="text-sm">
          <h3 className="font-medium">Qué se hace en planta</h3>
          <ol className="mt-1 list-decimal space-y-0.5 pl-5 text-muted">
            {inc.plant.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ol>
        </div>
        <div className="flex flex-wrap gap-2 pt-1">
          {fromIdx >= 0 && (
            <button type="button" onClick={() => onRedo(fromIdx)} className={btn.primary}>
              Volver a «{E.SECTIONS[fromIdx].title.replace(/^\d+\.\s*/, "")}», donde está la causa
            </button>
          )}
          <button type="button" onClick={() => onRedo(s.section)} className={fromIdx >= 0 ? btn.secondary : btn.primary}>
            Rehacer «{sec.title.replace(/^\d+\.\s*/, "")}» desde el principio
          </button>
          {!inc.critical && (
            <button type="button" onClick={() => act(E.acceptIncident)} className={btn.secondary}>
              Seguir con las consecuencias
            </button>
          )}
        </div>
        <p className="text-xs leading-relaxed text-muted">
          {inc.critical ? "El equipo ha quedado fuera de servicio: la única salida es rehacer la fase." : "Puedes rehacer la fase o seguir y ver cómo afecta al lote."} En los dos casos, avisa al supervisor y abre una desviación (abajo, «Comunicación e incidencias»).
        </p>
      </div>
    </section>
  );
}

function Consequence({ label, text }: { label: string; text: string }) {
  return (
    <div className="grid gap-1 px-3 py-2.5 sm:grid-cols-[6rem_1fr] sm:gap-3">
      <dt className="font-medium">{label}</dt>
      <dd className="text-muted">{text}</dd>
    </div>
  );
}
