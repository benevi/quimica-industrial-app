"use client";

import * as E from "@/sim/engine";
import type { SectionId, Sim, ValveId } from "@/sim/engine";
import type { Act } from "./Sheet";
import { currentTask } from "./Coach";

/** Símbolo de válvula de P&ID (dos triángulos enfrentados): verde abierta, rojo cerrada. */
export function ValveGlyph({ open, size = 28, vertical = false }: { open: boolean; size?: number; vertical?: boolean }) {
  const fill = open ? "#16a34a" : "#dc2626";
  return (
    <svg width={size} height={size * 0.75} viewBox="0 0 32 24" aria-hidden="true" style={vertical ? { transform: "rotate(90deg)" } : undefined}>
      <path d="M0 12 H4 M28 12 H32" stroke="#64748b" strokeWidth={3} />
      <path d="M4 3 L16 12 L4 21 Z M28 3 L16 12 L28 21 Z" fill={fill} stroke="#1f2937" strokeWidth={1.5} strokeLinejoin="round" />
      <path d="M16 12 V2 M11 2 H21" stroke="#1f2937" strokeWidth={2} />
    </svg>
  );
}

/** Mandos de las válvulas de una etapa: el operador las abre y cierra a mano. */
export function ValveBank({ s, act, active, sec }: { s: Sim; act: Act; active: boolean; sec: SectionId }) {
  const ids = E.valvesOf(sec);
  if (!ids.length) return null;
  const target = active ? currentTask(s).valve : undefined;
  return (
    <section className="rounded-xl border border-line bg-surface p-4">
      <div className="mb-3 flex items-baseline justify-between gap-2">
        <h3 className="font-semibold">Válvulas · Valves</h3>
        <span className="text-xs text-muted">Verde = abierta · Rojo = cerrada</span>
      </div>
      <ul className="grid gap-2 sm:grid-cols-2">
        {ids.map((v) => (
          <ValveRow key={v} v={v} open={s.valves[v]} disabled={!active || s.closed} target={target === v} onToggle={() => act((x) => E.toggleValve(x, v))} />
        ))}
      </ul>
      <p className="mt-2 text-xs text-muted">Abre solo las que necesita la operación y ciérralas al terminar.</p>
    </section>
  );
}

function ValveRow({ v, open, disabled, target, onToggle }: { v: ValveId; open: boolean; disabled: boolean; target: boolean; onToggle: () => void }) {
  return (
    <li className={`flex items-center gap-3 rounded-lg border p-2 ${target ? "border-2 border-[#f59e0b] bg-[#fff3c4] text-[#1f2937]" : "border-line"}`}>
      <ValveGlyph open={open} />
      <div className="min-w-0 flex-1">
        <div className="font-mono text-sm font-bold">{v}</div>
        <div className={`text-xs ${target ? "text-[#374151]" : "text-muted"}`}>{E.VALVES[v].name}</div>
      </div>
      <button
        type="button"
        disabled={disabled}
        onClick={onToggle}
        aria-pressed={open}
        aria-label={`${open ? "Cerrar" : "Abrir"} ${v}`}
        className={`w-20 rounded-lg px-2 py-1.5 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40 ${open ? "bg-[#dc2626] hover:bg-[#b91c1c]" : "bg-[#16a34a] hover:bg-[#15803d]"}`}
      >
        {open ? "Cerrar" : "Abrir"}
      </button>
    </li>
  );
}
