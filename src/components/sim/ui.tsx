"use client";

import type { ReactNode } from "react";

export function Card({ title, children, right }: { title?: ReactNode; children: ReactNode; right?: ReactNode }) {
  return (
    <section className="rounded-xl border border-line bg-surface p-4">
      {(title || right) && (
        <div className="mb-3 flex items-center justify-between gap-2">
          {title && <h3 className="font-semibold">{title}</h3>}
          {right}
        </div>
      )}
      {children}
    </section>
  );
}

export function Btn({
  children, onClick, disabled, tone = "default", title,
}: { children: ReactNode; onClick?: () => void; disabled?: boolean; tone?: "default" | "primary" | "danger"; title?: string }) {
  const cls =
    tone === "primary"
      ? "bg-accent text-[var(--on-accent)] hover:opacity-90"
      : tone === "danger"
        ? "bg-bad text-white hover:opacity-90"
        : "border border-line bg-surface hover:bg-soft";
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      disabled={disabled}
      className={`whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-40 ${cls}`}
    >
      {children}
    </button>
  );
}

export function Badge({ children, tone = "neutral" }: { children: ReactNode; tone?: "ok" | "bad" | "warn" | "neutral" }) {
  const cls =
    tone === "ok" ? "bg-ok-soft text-ok" : tone === "bad" ? "bg-bad-soft text-bad" : tone === "warn" ? "bg-warn-soft text-ink" : "bg-soft text-muted";
  return <span className={`inline-block rounded-md px-1.5 py-0.5 text-xs font-medium ${cls}`}>{children}</span>;
}

export function Readout({ label, value, unit, alert }: { label: string; value: string; unit?: string; alert?: boolean }) {
  return (
    <div className={`rounded-lg border px-3 py-2 ${alert ? "border-bad bg-bad-soft" : "border-line bg-soft"}`}>
      <div className="text-xs text-muted">{label}</div>
      <div className="font-mono text-lg tabular-nums">
        {value}
        {unit && <span className="ml-1 text-sm text-muted">{unit}</span>}
      </div>
    </div>
  );
}
