"use client";

import { Icon } from "@/components/icons";
import { btn } from "@/components/ui";

/** Barra fija con el reloj, lo respondido y el botón de entregar, común a todos los exámenes y simulacros. */
export function TimerBar({ left, answered, onFinish }: { left: number; answered?: React.ReactNode; onFinish: () => void }) {
  const mm = String(Math.floor(left / 60)).padStart(2, "0");
  const ss = String(left % 60).padStart(2, "0");
  const low = left < 300;
  return (
    <div className="sticky top-14 z-[5] flex items-center gap-4 rounded-[var(--radius)] border border-line bg-surface/95 px-4 py-2 text-sm backdrop-blur lg:top-4">
      <span className={`inline-flex items-center gap-1.5 font-mono tabular-nums ${low ? "font-semibold text-bad" : "text-ink"}`}>
        <Icon name="gauge" className="h-4 w-4" />
        <span className="sr-only">Tiempo restante: </span>
        {mm}:{ss}
        {low && <span className="font-sans text-xs">poco tiempo</span>}
      </span>
      {/* Aviso para lectores de pantalla al entrar en los últimos 5 minutos y en el último */}
      <span className="sr-only" aria-live="assertive">
        {left <= 60 ? "Queda menos de un minuto" : low ? "Quedan menos de 5 minutos" : ""}
      </span>
      {answered && <span className="text-muted">{answered}</span>}
      <button onClick={onFinish} className={`${btn.primary} ml-auto py-1.5`}>
        Entregar
      </button>
    </div>
  );
}

/** Resultado de un examen: superficie normal con una franja de color fina, sin fondos grandes de color. */
export function ResultPanel({ passed, label, title, children }: { passed: boolean; label?: string; title: React.ReactNode; children?: React.ReactNode }) {
  return (
    <section role="status" className="relative overflow-hidden rounded-[var(--radius)] border border-line bg-surface">
      <span aria-hidden className={`absolute inset-y-0 left-0 w-1.5 ${passed ? "bg-ok" : "bg-bad"}`} />
      <div className="space-y-2 p-5 pl-7">
        <div className="flex flex-wrap items-center gap-3">
          <span
            className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${passed ? "bg-ok-soft text-ok" : "bg-bad-soft text-bad"}`}
          >
            <Icon name={passed ? "check" : "close"} className="h-3.5 w-3.5" />
            {label ?? (passed ? "Aprobado" : "Aún no")}
          </span>
          <p className="t-h3">{title}</p>
        </div>
        {children}
      </div>
    </section>
  );
}
