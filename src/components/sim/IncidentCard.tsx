"use client";

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
    <div className="overflow-hidden rounded-xl border-2 border-[#dc2626] bg-[#fff5f5] text-[#1f2937]" role="alertdialog" aria-labelledby="inc-title">
      <div className="flex items-center gap-2 bg-[#dc2626] px-4 py-2 text-white">
        <span className="text-xl leading-none">🚨</span>
        <span className="text-xs font-bold uppercase tracking-wide">
          Incidente {inc.id} · {inc.sev} · {E.fmtTime(inc.time)}
        </span>
      </div>
      <div className="space-y-3 p-4">
        <h3 id="inc-title" className="text-lg font-bold leading-snug text-[#7f1d1d]">{inc.title}</h3>
        <p className="text-sm leading-relaxed">{inc.what}</p>
        <div className="rounded-lg bg-white p-3 text-sm">
          <div className="text-xs font-bold uppercase tracking-wide text-[#b45309]">¿Por qué ha pasado?</div>
          <p className="mt-1">{inc.cause}</p>
        </div>
        <div className="grid gap-2 text-sm">
          <Consequence icon="🦺" label="Seguridad" text={inc.safety} />
          <Consequence icon="⚗️" label="Producto" text={inc.product + (inc.lossPct > 0 ? ` Pérdida estimada: ${E.fmtNum(inc.lossPct, 0)} % del lote.` : "")} />
          <Consequence icon="📋" label="GMP" text={inc.gmp} />
        </div>
        <div className="rounded-lg bg-white p-3 text-sm">
          <div className="text-xs font-bold uppercase tracking-wide text-[#1d4ed8]">Qué se hace en planta</div>
          <ol className="mt-1 list-decimal space-y-0.5 pl-5">
            {inc.plant.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ol>
        </div>
        <div className="flex flex-wrap gap-2 pt-1">
          {fromIdx >= 0 && (
            <button type="button" onClick={() => onRedo(fromIdx)} className="rounded-lg bg-[#1d4ed8] px-3 py-2 text-sm font-semibold text-white hover:bg-[#1e40af]">
              ↺ Volver a «{E.SECTIONS[fromIdx].title.replace(/^\d+\.\s*/, "")}» (donde está la causa)
            </button>
          )}
          <button type="button" onClick={() => onRedo(s.section)} className={`rounded-lg px-3 py-2 text-sm font-semibold ${fromIdx >= 0 ? "border border-[#1d4ed8] bg-white text-[#1d4ed8] hover:bg-[#eff6ff]" : "bg-[#1d4ed8] text-white hover:bg-[#1e40af]"}`}>
            ↺ Rehacer «{sec.title.replace(/^\d+\.\s*/, "")}» desde el principio
          </button>
          {!inc.critical && (
            <button type="button" onClick={() => act(E.acceptIncident)} className="rounded-lg border border-[#dc2626] bg-white px-3 py-2 text-sm font-semibold text-[#b91c1c] hover:bg-[#fef2f2]">
              Seguir con las consecuencias
            </button>
          )}
        </div>
        <p className="text-xs text-[#6b7280]">
          {inc.critical ? "El equipo ha quedado fuera de servicio: la única salida es rehacer la fase." : "Puedes rehacer la fase o seguir y ver cómo afecta al lote."} En los dos casos, avisa al supervisor y abre una desviación (abajo, «Comunicación e incidencias»).
        </p>
      </div>
    </div>
  );
}

function Consequence({ icon, label, text }: { icon: string; label: string; text: string }) {
  return (
    <div className="flex gap-2 rounded-lg border border-[#fecaca] bg-white p-2.5">
      <span className="text-lg leading-none" aria-hidden="true">{icon}</span>
      <div>
        <div className="text-xs font-bold uppercase tracking-wide text-[#7f1d1d]">{label}</div>
        <p className="mt-0.5">{text}</p>
      </div>
    </div>
  );
}
