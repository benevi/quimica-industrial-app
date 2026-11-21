"use client";

import { useState } from "react";
import { Badge, Btn, Card } from "@/components/sim/ui";
import { type State, fmtHora } from "@/sim/reactor/model";
import { type Hoja, type PasoId, CAMPOS, PASOS, anotar, fueraDeSpec, revisar } from "@/sim/reactor/hoja";

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
      {r.hallazgos.length === 0 ? (
        <p className="text-sm">Sin hallazgos.</p>
      ) : (
        <ul className="space-y-1.5 text-sm">
          {r.hallazgos.map((h, k) => (
            <li key={k} className="flex gap-2">
              <Badge tone={tone(h.grav) as "bad" | "warn" | "neutral"}>{h.grav}</Badge>
              <span>{h.texto}</span>
            </li>
          ))}
        </ul>
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
