"use client";

import type { ReactNode } from "react";

/*
 * Piezas pequeñas del simulador, con la piel del sistema de diseño (docs/diseno.md):
 * superficies bg-surface + border-line, botones como btn.* y pastillas como Status.
 * Los indicadores (Readout) mantienen el aire de panel SCADA, con la paleta de la barra lateral.
 */

export function Card({ title, children, right }: { title?: ReactNode; children: ReactNode; right?: ReactNode }) {
  return (
    <section className="rounded-[var(--radius)] border border-line bg-surface p-4">
      {(title || right) && (
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          {title && <h3 className="t-h3">{title}</h3>}
          {right}
        </div>
      )}
      {children}
    </section>
  );
}

/**
 * Botón compacto de panel. `primary` solo para el paso que cierra un flujo (firmar, pasar de etapa, entregar);
 * `pressed` marca la opción elegida en un grupo de mandos (consigna, velocidad…).
 */
export function Btn({
  children,
  onClick,
  disabled,
  tone = "default",
  pressed,
  title,
}: {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  tone?: "default" | "primary" | "danger";
  pressed?: boolean;
  title?: string;
}) {
  const cls =
    tone === "primary"
      ? "bg-accent text-[var(--on-accent)] hover:bg-accent-ink"
      : tone === "danger"
        ? "border border-bad bg-surface text-bad hover:bg-bad-soft"
        : pressed
          ? "border border-accent bg-accent-soft text-accent"
          : "border border-line-strong bg-surface text-ink hover:border-accent hover:text-accent";
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      disabled={disabled}
      aria-pressed={pressed}
      className={`inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-40 ${cls}`}
    >
      {children}
    </button>
  );
}

export function Badge({ children, tone = "neutral" }: { children: ReactNode; tone?: "ok" | "bad" | "warn" | "neutral" }) {
  const cls =
    tone === "ok" ? "bg-ok-soft text-ok" : tone === "bad" ? "bg-bad-soft text-bad" : tone === "warn" ? "bg-warn-soft text-ink" : "bg-soft text-muted";
  return <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${cls}`}>{children}</span>;
}

export function Readout({ label, value, unit, alert }: { label: string; value: string; unit?: string; alert?: boolean }) {
  // Indicador tipo panel de control: fondo oscuro y cifras grandes; rojo si está fuera de límite.
  return (
    <div className={`rounded-md border px-3 py-2 ${alert ? "border-[#f87171] bg-[#3a1a18]" : "border-[#2f3648] bg-[#1b2030]"}`}>
      <div className={`text-xs ${alert ? "text-[#fecaca]" : "text-[#8fa199]"}`}>{label}</div>
      <div className="font-mono text-xl font-medium tabular-nums text-white">
        {value}
        {unit && <span className="ml-1 text-sm font-normal text-[#8fa199]">{unit}</span>}
      </div>
    </div>
  );
}
