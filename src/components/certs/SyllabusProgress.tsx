"use client";

import Link from "next/link";
import { useCertState } from "@/certs/useCertState";
import { Icon } from "@/components/icons";
import { useProgress } from "@/lib/progress";

/** Lista de lecciones o de supuestos con su marca de hecho, leída del progreso guardado */
export function SyllabusProgress({ mode, items }: { mode: "lessons" | "cases"; items: { id: string; title: string; unit: string }[] }) {
  const { progress } = useProgress();
  const { state } = useCertState();
  if (items.length === 0) return <p className="mt-1 text-xs text-muted">Sin lección específica todavía: estúdialo con el banco de preguntas.</p>;
  return (
    <ul className={mode === "cases" ? "mt-3 grid gap-2 md:grid-cols-2" : "mt-1.5 flex flex-wrap gap-x-4 gap-y-1"}>
      {items.map((it) => {
        if (mode === "lessons") {
          const done = progress[it.id]?.done;
          return (
            <li key={it.id}>
              <Link
                href={`/leccion/${it.id}`}
                className={`inline-flex items-center gap-1 text-sm underline-offset-2 hover:underline ${done ? "text-ok" : "text-accent"}`}
              >
                {done && <Icon name="check" className="h-3.5 w-3.5" />}
                {it.title}
                {done && <span className="sr-only"> (completada)</span>}
              </Link>
            </li>
          );
        }
        const best = state.cases[it.id];
        const passed = best !== undefined && best >= 0.7;
        return (
          <li key={it.id}>
            <Link
              href={`/supuesto/${it.id}`}
              className="group flex items-center gap-3 rounded-[var(--radius)] border border-line bg-surface px-3 py-2.5 text-sm hover:border-accent"
            >
              <Icon name="check" className={`h-4 w-4 shrink-0 ${passed ? "text-ok" : "text-line-strong"}`} />
              <span className="flex-1 group-hover:text-accent">
                {it.title}
                {passed && <span className="sr-only"> (superado)</span>}
              </span>
              <span className="text-xs tabular-nums text-muted">
                <span className="t-tag">{it.unit}</span>
                {best !== undefined ? ` · ${Math.round(best * 100)} %` : ""}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
