"use client";

import { useState } from "react";
import { FIELDS, SECTIONS, correct, fmtTime, missingFields, record, sign, type Sim, type SectionId } from "@/sim/engine";
import { Btn } from "./ui";

export type Act = (fn: (s: Sim) => void) => void;

function FieldRow({ s, id, act, isActive, focus }: { s: Sim; id: string; act: Act; isActive: boolean; focus?: boolean }) {
  const f = FIELDS.find((x) => x.id === id)!;
  const e = s.entries[id];
  const [val, setVal] = useState("");
  const [late, setLate] = useState("");
  const [editing, setEditing] = useState(false);
  const [reason, setReason] = useState("");
  const open = !s.closed;

  const input =
    f.kind === "select" ? (
      <select value={val} onChange={(ev) => setVal(ev.target.value)} aria-label={f.label} className="w-full rounded-md border border-line-strong bg-surface px-2 py-1 text-sm text-ink">
        <option value="">Elige…</option>
        {f.options!.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    ) : (
      <div className="flex gap-1">
        <input
          value={val}
          onChange={(ev) => setVal(ev.target.value)}
          inputMode={f.kind === "number" ? "decimal" : "text"}
          placeholder={f.kind === "time" ? "dd/mm hh:mm" : f.unit ?? ""}
          aria-label={f.label}
          className="w-full min-w-0 rounded-md border border-line-strong bg-surface px-2 py-1 font-mono text-sm text-ink"
        />
        {f.kind === "time" && (
          <button type="button" className="shrink-0 rounded-md border border-line-strong bg-surface px-2 text-xs hover:border-accent hover:text-accent" onClick={() => setVal(fmtTime(s.clock))}>
            Ahora
          </button>
        )}
      </div>
    );

  return (
    <div className={`border-b border-dashed border-line py-2.5 last:border-b-0 ${focus ? "-mx-2 my-1 rounded-md border border-solid border-signal bg-signal-soft px-2" : ""}`} data-field={id}>
      <div className="flex flex-wrap items-baseline justify-between gap-x-3">
        <span className="text-sm">
          {f.label}
          {focus && <span className="ml-2 text-xs font-medium text-ink">· te toca</span>}
        </span>
        {f.spec && (
          <span className="text-xs text-muted">
            Esp.: <span className="font-mono">{f.spec}</span>
            {f.unit ? ` ${f.unit}` : ""}
          </span>
        )}
      </div>

      {e && !editing && (
        <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
          {e.history.map((h, i) => (
            <span key={i} className="font-mono text-xs text-muted line-through" title={`Motivo: ${h.reason}`}>
              {h.value}
            </span>
          ))}
          <span className="font-mono font-medium text-ink">
            {e.value}
            {f.unit ? ` ${f.unit}` : ""}
          </span>
          <span className="text-xs text-muted">
            OP · <span className="font-mono">{fmtTime(e.time)}</span>
            {e.late ? " · registro tardío" : ""}
          </span>
          {open && (
            <button
              type="button"
              className="ml-auto text-xs text-muted underline underline-offset-2 hover:text-ink"
              onClick={() => {
                setEditing(true);
                setVal(e.value);
                setReason("");
              }}
            >
              Corregir
            </button>
          )}
        </div>
      )}

      {e && editing && (
        <div className="mt-1 space-y-1.5">
          {input}
          <input
            value={reason}
            onChange={(ev) => setReason(ev.target.value)}
            placeholder="Motivo de la corrección (obligatorio)"
            aria-label="Motivo de la corrección"
            className="w-full rounded-md border border-line-strong bg-surface px-2 py-1 text-sm text-ink"
          />
          <div className="flex gap-2">
            <Btn
              tone="primary"
              disabled={!val.trim() || reason.trim().length < 4 || val.trim() === e.value}
              onClick={() => {
                const v = val.trim();
                const r = reason.trim();
                act((x) => correct(x, id, v, r));
                setEditing(false);
              }}
            >
              Guardar corrección
            </Btn>
            <Btn onClick={() => setEditing(false)}>Cancelar</Btn>
          </div>
          <p className="text-xs text-muted">El valor anterior queda tachado y legible, con tu motivo en el audit trail.</p>
        </div>
      )}

      {!e && open && (
        <div className="mt-1 space-y-1.5">
          {input}
          {!isActive && (
            <input
              value={late}
              onChange={(ev) => setLate(ev.target.value)}
              placeholder="Registro tardío: explica por qué no se anotó en su momento"
              aria-label="Motivo del registro tardío"
              className="w-full rounded-md border border-line-strong bg-surface px-2 py-1 text-sm text-ink"
            />
          )}
          <Btn
            disabled={!val.trim()}
            onClick={() => {
              const v = val.trim();
              const l = late.trim();
              act((x) => record(x, id, v, l || undefined));
              setVal("");
            }}
          >
            Registrar
          </Btn>
        </div>
      )}
      {!e && !open && <div className="mt-1 text-sm text-bad">Sin registrar</div>}
    </div>
  );
}

export function Sheet({ s, sec, act, isActive, focusId }: { s: Sim; sec: SectionId; act: Act; isActive: boolean; focusId?: string | null }) {
  const fields = FIELDS.filter((f) => f.section === sec);
  const signed = s.signatures[sec];
  const pending = missingFields(s, sec).length;
  const title = SECTIONS.find((x) => x.id === sec)!.title;
  return (
    <section className="rounded-[var(--radius)] border border-line bg-surface">
      <div className="flex items-center justify-between gap-2 border-b border-line-strong px-4 py-3">
        <div>
          <p className="text-xs text-muted">
            Hoja de producción <span lang="en">(batch record)</span> · <span className="font-mono">FX-101 · lote 26-0147</span>
          </p>
          <h3 className="t-h3">{title}</h3>
        </div>
        {!isActive && <span className="shrink-0 rounded-full bg-soft px-2 py-0.5 text-xs text-muted">Etapa no activa</span>}
      </div>
      <div className="px-4">
        {fields.length === 0 && <p className="py-3 text-sm text-muted">Esta etapa no tiene datos que anotar a mano.</p>}
        {fields.map((f) => (
          <FieldRow key={f.id} s={s} id={f.id} act={act} isActive={isActive} focus={isActive && f.id === focusId} />
        ))}
      </div>
      {sec !== "cierre" && (
        <div className="flex flex-wrap items-center gap-2 border-t border-line px-4 py-3 text-sm">
          {signed != null ? (
            <span>
              Firmado por <strong>OP</strong> · <span className="font-mono">{fmtTime(signed)}</span>
            </span>
          ) : (
            <Btn tone="primary" disabled={s.closed || pending > 0} onClick={() => act((x) => sign(x, sec))}>
              Firmar la sección
            </Btn>
          )}
          <span className="text-xs text-muted">
            {signed == null && pending > 0
              ? `Aún no se puede firmar: falta${pending > 1 ? "n" : ""} ${pending} dato${pending > 1 ? "s" : ""} por anotar. La firma va al final, con el trabajo hecho y registrado.`
              : "Firmar es declarar que lo anotado es cierto y completo."}
          </span>
        </div>
      )}
    </section>
  );
}
