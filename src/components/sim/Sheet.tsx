"use client";

import { useState } from "react";
import { FIELDS, SECTIONS, correct, fmtTime, record, sign, type Sim, type SectionId } from "@/sim/engine";
import { Btn } from "./ui";

export type Act = (fn: (s: Sim) => void) => void;

function FieldRow({ s, id, act, isActive }: { s: Sim; id: string; act: Act; isActive: boolean }) {
  const f = FIELDS.find((x) => x.id === id)!;
  const e = s.entries[id];
  const [val, setVal] = useState("");
  const [late, setLate] = useState("");
  const [editing, setEditing] = useState(false);
  const [reason, setReason] = useState("");
  const open = !s.closed;

  const input =
    f.kind === "select" ? (
      <select value={val} onChange={(ev) => setVal(ev.target.value)} className="w-full rounded-md border border-line bg-surface px-2 py-1 text-sm">
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
          className="w-full min-w-0 rounded-md border border-line bg-surface px-2 py-1 font-mono text-sm"
        />
        {f.kind === "time" && (
          <button type="button" className="shrink-0 rounded-md border border-line px-2 text-xs hover:bg-soft" onClick={() => setVal(fmtTime(s.clock))}>
            Ahora
          </button>
        )}
      </div>
    );

  return (
    <div className="border-b border-line py-2.5 last:border-b-0" data-field={id}>
      <div className="flex flex-wrap items-baseline justify-between gap-x-3">
        <span className="text-sm">{f.label}</span>
        {f.spec && (
          <span className="text-xs text-muted">
            Esp.: {f.spec}
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
          <span className="font-mono font-medium">
            {e.value}
            {f.unit ? ` ${f.unit}` : ""}
          </span>
          <span className="text-xs text-muted">
            OP · {fmtTime(e.time)}
            {e.late ? " · registro tardío" : ""}
          </span>
          {open && (
            <button
              type="button"
              className="ml-auto text-xs text-muted underline hover:text-ink"
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
            className="w-full rounded-md border border-line bg-surface px-2 py-1 text-sm"
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
              className="w-full rounded-md border border-line bg-surface px-2 py-1 text-sm"
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

export function Sheet({ s, sec, act, isActive }: { s: Sim; sec: SectionId; act: Act; isActive: boolean }) {
  const fields = FIELDS.filter((f) => f.section === sec);
  const signed = s.signatures[sec];
  const title = SECTIONS.find((x) => x.id === sec)!.title;
  return (
    <section className="rounded-xl border border-line bg-surface">
      <div className="flex items-center justify-between gap-2 border-b border-line px-4 py-3">
        <div>
          <div className="text-xs uppercase tracking-wide text-muted">Hoja de producción · FX-101 · lote 26-0147</div>
          <h3 className="font-semibold">{title}</h3>
        </div>
        {!isActive && <span className="rounded-md bg-warn-soft px-2 py-0.5 text-xs">Etapa no activa</span>}
      </div>
      <div className="px-4">
        {fields.length === 0 && <p className="py-3 text-sm text-muted">Esta etapa no tiene datos que anotar a mano.</p>}
        {fields.map((f) => (
          <FieldRow key={f.id} s={s} id={f.id} act={act} isActive={isActive} />
        ))}
      </div>
      {sec !== "cierre" && (
        <div className="flex flex-wrap items-center gap-2 border-t border-line px-4 py-3 text-sm">
          {signed != null ? (
            <span>
              Firmado por <strong>OP</strong> · {fmtTime(signed)}
            </span>
          ) : (
            <Btn tone="primary" disabled={s.closed} onClick={() => act((x) => sign(x, sec))}>
              Firmar la sección
            </Btn>
          )}
          <span className="text-xs text-muted">Firmar es declarar que lo anotado es cierto y completo.</span>
        </div>
      )}
    </section>
  );
}
