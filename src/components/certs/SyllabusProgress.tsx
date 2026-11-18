"use client";

import Link from "next/link";
import { useCertState } from "@/certs/useCertState";
import { useProgress } from "@/lib/progress";

/** Lista de lecciones o de supuestos con su marca de hecho, leída del progreso guardado */
export function SyllabusProgress({ mode, items }: { mode: "lessons" | "cases"; items: { id: string; title: string; unit: string }[] }) {
  const { progress } = useProgress();
  const { state } = useCertState();
  if (items.length === 0) return <p className="mt-1 text-xs text-muted">Sin lección específica todavía: estúdialo con el banco de preguntas.</p>;
  return (
    <ul className={mode === "cases" ? "mt-3 grid gap-2 md:grid-cols-2" : "mt-1 flex flex-wrap gap-x-4 gap-y-1"}>
      {items.map((it) => {
        if (mode === "lessons") {
          const done = progress[it.id]?.done;
          return (
            <li key={it.id}>
              <Link href={`/leccion/${it.id}`} className={`text-sm underline-offset-2 hover:underline ${done ? "text-ok" : "text-accent"}`}>
                {done ? "✓ " : ""}
                {it.title}
              </Link>
            </li>
          );
        }
        const best = state.cases[it.id];
        return (
          <li key={it.id}>
            <Link href={`/supuesto/${it.id}`} className="flex items-center gap-2 rounded-lg border border-line px-3 py-2 text-sm hover:border-accent">
              <span aria-hidden className={best !== undefined && best >= 0.7 ? "text-ok" : "text-muted"}>
                {best !== undefined && best >= 0.7 ? "✓" : "○"}
              </span>
              <span className="flex-1">{it.title}</span>
              <span className="text-xs text-muted">
                {it.unit}
                {best !== undefined ? ` · ${Math.round(best * 100)} %` : ""}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
