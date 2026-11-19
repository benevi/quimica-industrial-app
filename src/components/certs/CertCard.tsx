"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Certification } from "@/certs/data";
import { Icon } from "@/components/icons";
import { Bar, btn } from "@/components/ui";

export type ModuleView = {
  id: string;
  code: string;
  name: string;
  hours?: number;
  gap?: string;
  uc?: string;
  pct: number;
  levelsText: string;
  lessonsText: string;
  exam?: { score: number; total: number };
  /** Preguntas disponibles para el simulacro del módulo (0 = sin simulacro) */
  questions: number;
};

/**
 * Un certificado como tarjeta plegable: a la vista solo el nombre y cuánto llevas;
 * al abrirla, cómo se saca y el detalle de cada módulo con sus prácticas.
 * Se abre sola si la dirección acaba en #id del certificado (enlaces antiguos).
 */
export function CertCard({ cert, pct, modules }: { cert: Certification; pct: number; modules: ModuleView[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (window.location.hash === `#${cert.id}`) setOpen(true);
  }, [cert.id]);

  const withExam = modules.filter((m) => m.exam).length;
  const meta = [cert.kind, cert.level, cert.hours ? `${cert.hours.toLocaleString("es-ES")} h` : undefined].filter(Boolean).join(" · ");

  return (
    <details
      id={cert.id}
      open={open}
      onToggle={(e) => setOpen(e.currentTarget.open)}
      className="group scroll-mt-20 rounded-[var(--radius)] border border-line bg-surface"
    >
      <summary className="flex cursor-pointer list-none items-start gap-3 px-5 py-4 hover:bg-soft/60 [&::-webkit-details-marker]:hidden">
        <Icon name="chevron" className="mt-1 h-4 w-4 shrink-0 text-muted transition-transform group-open:rotate-90" />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="t-h3">
              <span className="t-tag mr-2 text-muted">{cert.short}</span>
              {cert.name}
            </h3>
            <span className="text-sm tabular-nums text-muted">
              <span className="font-semibold text-ink">{pct} %</span> preparado
            </span>
          </div>
          <p className="mt-0.5 text-sm text-muted">{meta}</p>
          <Bar pct={pct} className="mt-3" label={`${cert.short}: ${pct} % preparado`} />
          <p className="mt-2 text-sm text-muted">
            {modules.length} módulo{modules.length === 1 ? "" : "s"}
            {withExam > 0 && ` · ${withExam} con simulacro hecho`}
          </p>
        </div>
      </summary>

      <div className="border-t border-line px-5 py-4">
        <dl className="grid max-w-[68ch] gap-x-4 gap-y-1.5 text-sm sm:grid-cols-[110px_1fr]">
          <dt className="text-muted">Cómo se saca</dt>
          <dd>{cert.how}</dd>
          <dt className="text-muted">Coste</dt>
          <dd>{cert.cost}</dd>
          <dt className="text-muted">Fuente</dt>
          <dd>
            <a href={cert.source.url} target="_blank" rel="noreferrer" className="text-accent underline-offset-2 hover:underline">
              {cert.source.label}
            </a>
          </dd>
        </dl>

        <h4 className="mt-5 text-sm font-medium text-muted">Módulos</h4>
        <ul className="mt-1 divide-y divide-line">
          {modules.map((m) => (
            <li key={m.id} className="py-3">
              <div className="flex flex-wrap items-baseline gap-x-2">
                <span className="t-tag text-muted">{m.code}</span>
                <span className="font-medium">{m.name}</span>
                {m.hours && <span className="text-xs text-muted">{m.hours} h</span>}
                <span className="ml-auto text-sm tabular-nums text-muted">{m.pct} %</span>
              </div>
              <Bar pct={m.pct} className="mt-2" label={`${m.code}: ${m.pct} %`} />
              <p className="mt-1.5 text-xs text-muted">
                {m.lessonsText}
                {m.exam && (
                  <>
                    {" "}
                    · mejor simulacro {m.exam.score}/{m.exam.total}
                  </>
                )}
                {m.levelsText && <> · Niveles: {m.levelsText}</>}
              </p>
              {m.gap && <p className="mt-1.5 max-w-[68ch] rounded-md bg-warn-soft px-2 py-1 text-xs">{m.gap}</p>}
              <div className="mt-1 flex flex-wrap gap-1 -ml-2">
                {m.id === "sap-flujo" ? (
                  <Link href="/sap" className={btn.quiet}>
                    Abrir el simulador ERP
                  </Link>
                ) : (
                  m.questions > 0 && (
                    <Link href={`/examen/${m.id}`} className={btn.quiet}>
                      Hacer el simulacro <span className="font-normal text-muted">({m.questions} preguntas en el banco)</span>
                    </Link>
                  )
                )}
                {m.uc && (
                  <Link href={`/autoevaluacion/${m.uc}`} className={btn.quiet}>
                    Autoevaluación {m.uc.toUpperCase()}_2
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
}
