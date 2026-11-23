"use client";

import Link from "next/link";
import { useState } from "react";
import { erpHandoff, fmtTime, type Sim } from "@/sim/engine";
import { FX_KEY } from "@/sap/engine";
import { reviewBatch } from "@/sim/review";
import { Badge, Card } from "./ui";

export function QAReport({ s }: { s: Sim }) {
  const r = reviewBatch(s);
  const tone = r.decision === "Liberable" ? "ok" : r.decision.startsWith("Pendiente") ? "warn" : "bad";
  const areas = ["Seguridad", "Proceso", "Documentación (ALCOA+)", "Calidad del producto"] as const;
  return (
    <div className="space-y-4" id="informe-qa">
      <Card title="Decisión de QA">
        <div className="flex flex-wrap items-center gap-3">
          <Badge tone={tone}>{r.decision}</Badge>
          <span className="text-sm">
            Puntuación de buenas prácticas: <strong>{r.score}/100</strong>
          </span>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {areas.map((a) => {
            const k = r.findings.filter((f) => f.area === a).length;
            return (
              <div key={a} className="rounded-md border border-line bg-soft px-3 py-2 text-sm">
                <div className="text-xs text-muted">{a}</div>
                <div className={k === 0 ? "text-ok" : "text-bad"}>{k === 0 ? "Sin hallazgos" : `${k} hallazgo${k > 1 ? "s" : ""}`}</div>
              </div>
            );
          })}
        </div>
        <ErpLink s={s} qa={r.decision} />
      </Card>

      <Card title="Resultados analíticos del producto (laboratorio de QC)">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-muted">
                <th className="py-1 pr-3 font-medium">Ensayo</th>
                <th className="py-1 pr-3 font-medium">Especificación</th>
                <th className="py-1 pr-3 font-medium">Resultado</th>
                <th className="py-1 font-medium" />
              </tr>
            </thead>
            <tbody>
              {r.results.map((x) => (
                <tr key={x.test} className="border-t border-line">
                  <td className="py-1.5 pr-3">{x.test}</td>
                  <td className="py-1.5 pr-3 text-muted">{x.spec}</td>
                  <td className="py-1.5 pr-3 font-mono">{x.value}</td>
                  <td className="py-1.5">{x.ok ? <Badge tone="ok">Cumple</Badge> : <Badge tone="bad">OOS</Badge>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card title={`Hallazgos de la revisión (${r.findings.length})`}>
        {r.findings.length === 0 ? (
          <p className="text-sm text-ok">Registro completo, contemporáneo y conforme. Así se ve un lote bien documentado.</p>
        ) : (
          <ul className="space-y-3">
            {r.findings.map((f, i) => (
              <li key={i} className="border-b border-line pb-3 text-sm last:border-b-0 last:pb-0">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge tone={f.sev === "crítico" ? "bad" : f.sev === "mayor" ? "warn" : "neutral"}>{f.sev}</Badge>
                  <span className="text-xs text-muted">{f.area}</span>
                </div>
                <div className="mt-1 font-medium">{f.title}</div>
                <div className="text-muted">{f.detail}</div>
                {f.lesson && (
                  <Link href={`/leccion/${f.lesson.slug}`} className="text-xs text-accent underline underline-offset-2">
                    Repasar: {f.lesson.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        )}
      </Card>

      <Card title={`Desviaciones del lote (${s.deviations.length})`}>
        {s.deviations.length === 0 ? (
          <p className="text-sm text-muted">Ninguna.</p>
        ) : (
          <ul className="space-y-2 text-sm">
            {s.deviations.map((d) => (
              <li key={d.id}>
                <strong>{d.id}</strong> · {fmtTime(d.time)} · {d.what}
                <div className="text-muted">Acción inmediata: {d.action}</div>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  );
}

/** Pasa el lote cerrado al simulador de ERP para registrarlo allí (misión 10). */
function ErpLink({ s, qa }: { s: Sim; qa: ReturnType<typeof reviewBatch>["decision"] }) {
  const [sent, setSent] = useState(false);
  if (!s.pack?.done) return null;
  return (
    <div className="mt-4 border-t border-line pt-3 text-sm">
      {sent ? (
        <p>
          Lote enviado al ERP. Abre el <Link className="underline underline-offset-2 hover:decoration-2" href="/sap">simulador de ERP</Link> y haz la misión 10: orden, consumos con los lotes que usaste, notificaciones, entrada del producto, resultados y decisión de empleo.
        </p>
      ) : (
        <>
          <p className="text-muted">En planta, lo que pasa en el lote también se registra en el ERP. Puedes practicarlo con este mismo lote.</p>
          <button
            type="button"
            className="mt-2 rounded-md border border-line-strong px-3 py-1.5 font-medium hover:border-accent hover:text-accent"
            onClick={() => {
              try {
                localStorage.setItem(FX_KEY, JSON.stringify(erpHandoff(s, qa)));
                setSent(true);
              } catch {
                /* sin almacenamiento no se puede pasar el lote */
              }
            }}
          >
            Pasar el lote al ERP
          </button>
        </>
      )}
    </div>
  );
}
