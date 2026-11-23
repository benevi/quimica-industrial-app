"use client";

import Link from "next/link";
import { useState } from "react";
import { Badge, Btn, Card } from "@/components/sim/ui";
import { type State, fmt, fmtHora } from "@/sim/reactor/model";
import { type Hoja, type PasoId, CAMPOS, PASOS, anotar, fueraDeSpec, revisar } from "@/sim/reactor/hoja";
import { GUIA } from "@/sim/reactor/guia";

/** Hoja de producción por pasos: instrucciones, datos con su hora de anotación y firma de cada paso. */
export function HojaPanel({ s, hoja, setHoja }: { s: State; hoja: Hoja; setHoja: (fn: (h: Hoja) => void) => void }) {
  const firstOpen = PASOS.find((p) => !hoja.firmas[p.id])?.id ?? "cierre";
  const [open, setOpen] = useState<PasoId>(firstOpen);
  const [draft, setDraft] = useState<Record<string, string>>({});

  return (
    <Card title="Hoja de producción · AX-22 etapa 1 · R-204" right={<span className="text-xs text-muted">Lote ficticio AX22-26-031</span>}>
      <ol className="space-y-2">
        {PASOS.map((p) => {
          const campos = CAMPOS.filter((c) => c.paso === p.id);
          const firmado = hoja.firmas[p.id];
          const isOpen = open === p.id;
          return (
            <li key={p.id} className={`rounded-md border ${isOpen ? "border-accent" : "border-line"}`}>
              <button type="button" className="flex w-full items-center justify-between gap-2 px-3 py-2 text-left text-sm font-medium" onClick={() => setOpen(p.id)} aria-expanded={isOpen}>
                <span>{p.title}</span>
                {firmado !== undefined ? <Badge>Firmado {fmtHora(firmado)}</Badge> : p.id === firstOpen ? <Badge tone="warn">Siguiente</Badge> : null}
              </button>
              {isOpen && (
                <div className="space-y-3 border-t border-line px-3 py-3 text-sm">
                  <ul className="list-disc space-y-1 pl-5 text-muted">
                    {p.instr.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  {campos.map((c) => {
                    const e = hoja.entries[c.id];
                    const v = draft[c.id] ?? e?.value ?? "";
                    const fuera = e ? fueraDeSpec(c, e.value) : false;
                    return (
                      <div key={c.id} className="grid gap-1 sm:grid-cols-[1fr_auto] sm:items-center">
                        <label htmlFor={"h-" + c.id} className="text-ink">
                          {c.label}
                          {c.spec && <span className="ml-1 text-xs text-muted">(hoja: {c.spec}{c.unit ? " " + c.unit : ""})</span>}
                        </label>
                        <div className="flex flex-wrap items-center gap-2">
                          {c.kind === "select" ? (
                            <select id={"h-" + c.id} className="rounded border border-line-strong bg-surface px-2 py-1" value={v} disabled={firmado !== undefined} onChange={(ev) => setDraft({ ...draft, [c.id]: ev.target.value })}>
                              <option value="">Elige</option>
                              {c.options?.map((o) => (
                                <option key={o}>{o}</option>
                              ))}
                            </select>
                          ) : c.kind === "text" ? (
                            <textarea id={"h-" + c.id} rows={3} className="w-full min-w-[16rem] rounded border border-line-strong bg-surface px-2 py-1" value={v} disabled={firmado !== undefined} onChange={(ev) => setDraft({ ...draft, [c.id]: ev.target.value })} />
                          ) : (
                            <input
                              id={"h-" + c.id}
                              inputMode={c.kind === "number" ? "decimal" : "text"}
                              placeholder={c.kind === "time" ? "hh:mm" : ""}
                              className="w-28 rounded border border-line-strong bg-surface px-2 py-1 font-mono"
                              value={v}
                              disabled={firmado !== undefined}
                              onChange={(ev) => setDraft({ ...draft, [c.id]: ev.target.value })}
                            />
                          )}
                          {c.unit && <span className="text-xs text-muted">{c.unit}</span>}
                          {firmado === undefined && (
                            <Btn
                              onClick={() => {
                                setHoja((h) => anotar(h, s, c.id, v));
                                setDraft((d) => {
                                  const n = { ...d };
                                  delete n[c.id];
                                  return n;
                                });
                              }}
                              disabled={v.trim() === "" || v === e?.value}
                            >
                              Anotar
                            </Btn>
                          )}
                          {e && (
                            <span className={`text-xs ${fuera ? "text-bad" : "text-muted"}`}>
                              {fuera ? "Fuera de hoja · " : ""}anotado {fmtHora(e.t)}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                  {firmado === undefined && (
                    <Btn tone="primary" onClick={() => setHoja((h) => (h.firmas[p.id] = s.t))}>
                      Firmar el paso
                    </Btn>
                  )}
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </Card>
  );
}

export function Review({ s, hoja }: { s: State; hoja: Hoja }) {
  const r = revisar(s, hoja);
  const tone = (g: string) => (g === "crítica" ? "bad" : g === "mayor" ? "warn" : "neutral");
  return (
    <Card title="Revisión del lote por calidad">
      <p className="mb-3 font-medium">{r.veredicto}</p>
      <ul className="mb-3 space-y-0.5 text-sm text-muted">
        {r.resumen.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <Averias s={s} />
      {r.hallazgos.length === 0 ? (
        <p className="mt-4 text-sm">Sin hallazgos.</p>
      ) : (
        <>
          <h4 className="mt-4 font-medium">Hallazgos del proceso y de la hoja</h4>
          <ul className="mt-2 space-y-1.5 text-sm">
            {r.hallazgos
              .filter((h) => h.grav !== "menor")
              .map((h, k) => (
                <li key={k} className="flex gap-2">
                  <Badge tone={tone(h.grav) as "bad" | "warn" | "neutral"}>{h.grav}</Badge>
                  <span>{h.texto}</span>
                </li>
              ))}
          </ul>
          {r.hallazgos.some((h) => h.grav === "menor") && (
            <details className="mt-2 text-sm">
              <summary className="cursor-pointer text-muted">Observaciones menores de documentación ({r.hallazgos.filter((h) => h.grav === "menor").length})</summary>
              <ul className="mt-2 space-y-1">
                {r.hallazgos
                  .filter((h) => h.grav === "menor")
                  .map((h, k) => (
                    <li key={k}>{h.texto}</li>
                  ))}
              </ul>
            </details>
          )}
        </>
      )}
      {s.eventos.length > 0 && (
        <details className="mt-3 text-sm">
          <summary className="cursor-pointer text-muted">Registro de acciones y avisos</summary>
          <ul className="mt-2 space-y-0.5">
            {s.eventos.map((e, k) => (
              <li key={k}>
                <span className="font-mono text-xs text-muted">{fmtHora(e.t)}</span> {e.texto}
              </li>
            ))}
          </ul>
        </details>
      )}
    </Card>
  );
}

/** Explicación de cada avería del lote: qué pasó, qué hiciste y qué había que hacer. */
function Averias({ s }: { s: State }) {
  if (s.faults.length === 0) return null;
  const min = (a: number, b: number) => fmt((a - b) / 60, 0);
  return (
    <section className="mt-2 space-y-3">
      <h4 className="font-medium">Averías del lote y cómo se resuelven</h4>
      {s.faults.map((f) => {
        const g = GUIA[f.id];
        return (
          <article key={f.id} className="rounded-md border border-line p-3 text-sm">
            <h5 className="font-medium">{g.titulo}</h5>
            {f.desde === null ? (
              <p className="text-muted">No llegó a aparecer en este lote (no se dio la situación que la provoca).</p>
            ) : (
              <ul className="mt-1 space-y-0.5">
                <li>Empezó a las {fmtHora(f.desde)}.</li>
                <li>{f.aviso !== null ? `Avisaste a las ${fmtHora(f.aviso)}, ${min(f.aviso, f.desde)} min después.` : "No avisaste."}</li>
                <li>
                  {f.respuesta !== null ? (
                    <>Hiciste lo que pedía la situación ({g.clave}) a las {fmtHora(f.respuesta)}, {min(f.respuesta, f.desde)} min después.</>
                  ) : (
                    <span className="text-bad">No llegaste a {g.clave}.</span>
                  )}
                </li>
                <li>{f.pistas > 0 ? `Pediste ${f.pistas} ${f.pistas === 1 ? "pista" : "pistas"}.` : "Sin pistas."}</li>
              </ul>
            )}
            <details className="mt-2" open={f.desde !== null && f.respuesta === null}>
              <summary className="cursor-pointer text-accent">Qué tenías que ver y qué había que hacer</summary>
              <div className="mt-2 space-y-2">
                <div>
                  <p className="font-medium">Síntomas</p>
                  <ul className="list-disc pl-5 text-muted">{g.sintomas.map((t) => <li key={t}>{t}</li>)}</ul>
                </div>
                <div>
                  <p className="font-medium">Qué hacer</p>
                  <ol className="list-decimal pl-5 text-muted">{g.pasos.map((t) => <li key={t}>{t}</li>)}</ol>
                </div>
                <p><span className="font-medium">Por qué. </span><span className="text-muted">{g.porque}</span></p>
                <p><span className="font-medium">En planta. </span><span className="text-muted">{g.enPlanta}</span></p>
                <p className="text-muted">
                  Repasa:{" "}
                  {g.lecciones.map((l, k) => (
                    <span key={l.slug}>
                      {k > 0 && " · "}
                      <Link className="underline" href={`/leccion/${l.slug}`}>{l.titulo}</Link>
                    </span>
                  ))}
                </p>
              </div>
            </details>
          </article>
        );
      })}
      <p className="text-xs text-muted">Guía didáctica sobre un equipo ficticio. En planta manda el procedimiento vigente (SOP); ante la duda, se para en lugar seguro y se avisa.</p>
    </section>
  );
}
