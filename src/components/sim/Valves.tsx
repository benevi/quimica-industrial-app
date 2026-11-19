"use client";

import * as E from "@/sim/engine";
import type { SectionId, Sim } from "@/sim/engine";
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
    <section className="rounded-[var(--radius)] border border-line bg-surface p-4">
      <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="t-h3">
          Válvulas{" "}
          <span lang="en" className="text-sm font-normal text-muted">
            valves
          </span>
        </h3>
        <span className="text-xs text-muted">Verde abierta · rojo cerrada</span>
      </div>
      <ul className="grid gap-2 sm:grid-cols-2">
        {ids.map((v) => (
          <ValveRow key={v} v={v} name={E.VALVES[v].name} open={s.valves[v]} disabled={!active || s.closed} target={target === v} onToggle={() => act((x) => E.toggleValve(x, v))} />
        ))}
      </ul>
      <p className="mt-2 text-xs text-muted">Abre solo las que necesita la operación y ciérralas al terminar.</p>
    </section>
  );
}

/** Fila de válvula manual: símbolo, código, estado y botón. `target` la marca como tu siguiente paso. */
export function ValveRow({ v, name, open, disabled, target = false, onToggle }: { v: string; name: string; open: boolean; disabled: boolean; target?: boolean; onToggle: () => void }) {
  return (
    <li className={`flex items-center gap-3 rounded-md border p-2 ${target ? "border-signal bg-signal-soft" : "border-line"}`}>
      <ValveGlyph open={open} />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline gap-x-2">
          <span className="font-mono text-sm font-medium">{v}</span>
          <span className={`text-xs ${open ? "text-ok" : "text-bad"}`}>{open ? "abierta" : "cerrada"}</span>
          {target && <span className="text-xs font-medium text-ink">· te toca</span>}
        </div>
        <div className="text-xs text-muted">{name}</div>
      </div>
      <button
        type="button"
        disabled={disabled}
        onClick={onToggle}
        aria-pressed={open}
        aria-label={`${open ? "Cerrar" : "Abrir"} ${v}`}
        className="w-20 rounded-md border border-line-strong bg-surface px-2 py-1.5 text-sm font-medium text-ink hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-40"
      >
        {open ? "Cerrar" : "Abrir"}
      </button>
    </li>
  );
}
