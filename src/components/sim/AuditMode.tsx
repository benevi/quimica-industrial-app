"use client";

import { useEffect, useState } from "react";
import { AUDIT_CASES, AUDIT_CATEGORIES, gradeAudit, type AuditCase, type AuditCategory, type AuditLine, type AuditMark, type AuditResult } from "@/sim/audit";
import { Btn } from "./ui";

const KEY = "quimica-app:auditoria:v1";
type Best = Record<string, { score: number; max: number }>;

function loadBest(): Best {
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? "{}") as Best;
  } catch {
    return {};
  }
}

/** Modo auditoría: revisa hojas ya rellenas como lo haría QA y encuentra los errores escondidos. */
export function AuditMode() {
  const [caseId, setCaseId] = useState<string | null>(null);
  const [best, setBest] = useState<Best>({});
  useEffect(() => setBest(loadBest()), []);
  const c = AUDIT_CASES.find((x) => x.id === caseId);

  if (!c) {
    return (
      <div className="grid gap-3 md:grid-cols-3">
        {AUDIT_CASES.map((x) => (
          <button
            key={x.id}
            type="button"
            onClick={() => setCaseId(x.id)}
            className="rounded-xl border border-line bg-surface p-4 text-left hover:border-accent hover:bg-soft"
          >
            <div className="text-xs font-semibold uppercase tracking-wide text-accent">Nivel {x.level}</div>
            <div className="mt-1 text-lg font-semibold">FX-101 · {x.title}</div>
            <p className="mt-1 text-sm text-muted">{x.intro}</p>
            <div className="mt-3 text-sm">
              {best[x.id] ? (
                <span className="font-medium">Mejor nota: {best[x.id].score} / {best[x.id].max}</span>
              ) : (
                <span className="text-muted">Sin hacer</span>
              )}
            </div>
          </button>
        ))}
      </div>
    );
  }
  return (
    <AuditCaseView
      key={c.id}
      c={c}
      onBack={() => setCaseId(null)}
      onGraded={(r) => {
        const prev = best[c.id];
        if (!prev || r.score > prev.score) {
          const next = { ...best, [c.id]: { score: r.score, max: r.max } };
          setBest(next);
          try {
            localStorage.setItem(KEY, JSON.stringify(next));
          } catch {
            /* sin almacenamiento: no pasa nada */
          }
        }
      }}
    />
  );
}

function AuditCaseView({ c, onBack, onGraded }: { c: AuditCase; onBack: () => void; onGraded: (r: AuditResult) => void }) {
  const [marks, setMarks] = useState<AuditMark[]>([]);
  const [result, setResult] = useState<AuditResult | null>(null);
  const stages = [...new Set(c.lines.map((l) => l.stage))];

  const toggle = (line: string) => {
    if (result) return;
    setMarks((m) => (m.some((x) => x.line === line) ? m.filter((x) => x.line !== line) : [...m, { line, cat: "spec" }]));
  };
  const setCat = (line: string, cat: AuditCategory) => setMarks((m) => m.map((x) => (x.line === line ? { ...x, cat } : x)));

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <button type="button" onClick={onBack} className="text-sm text-accent underline">← Elegir otra hoja</button>
        <span className="text-sm text-muted">Nivel {c.level} · {c.errors.length} errores escondidos</span>
      </div>

      <section className="rounded-xl border border-line bg-surface p-4 text-sm">
        <h3 className="font-semibold">Eres QA: revisa el registro del lote {c.title}</h3>
        <p className="mt-1 text-muted">{c.intro}</p>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-muted">
          <li>Lee cada línea y compárala con la especificación y con los datos de referencia.</li>
          <li>Pulsa sobre una línea para marcarla como sospechosa y elige qué tipo de error es.</li>
          <li>Cuando acabes, pulsa «Entregar la revisión». 2 puntos por error con el tipo bien, 1 si solo aciertas la línea, −1 por cada línea correcta que marques.</li>
        </ol>
        <div className="mt-3 rounded-lg border border-[#93c5fd] bg-[#eff6ff] p-3 text-[#1e3a8a]">
          <div className="text-xs font-bold uppercase tracking-wide">Datos de referencia</div>
          <ul className="mt-1 list-disc space-y-0.5 pl-5">
            {c.refs.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-xl border border-[#c9bfa0] bg-white text-[#1f2937]">
        <div className="border-b-2 border-[#1f2937] px-4 py-3">
          <div className="text-xs uppercase tracking-wide text-[#6b6450]">Hoja de producción · FX-101 · lote {c.title.replace("Lote ", "")} · copia para revisión</div>
          <h3 className="font-semibold">Registro de lote (batch record)</h3>
        </div>
        {stages.map((st) => (
          <div key={st} className="px-4">
            <div className="mt-3 text-xs font-bold uppercase tracking-wide text-[#6b6450]">{st}</div>
            {c.lines.filter((l) => l.stage === st).map((l) => (
              <LineRow key={l.id} l={l} mark={marks.find((m) => m.line === l.id)} onToggle={() => toggle(l.id)} onCat={(cat) => setCat(l.id, cat)} result={result} c={c} />
            ))}
          </div>
        ))}
        <div className="flex flex-wrap items-center gap-3 border-t border-[#d6cfb8] px-4 py-3 text-sm">
          {!result ? (
            <>
              <Btn tone="primary" onClick={() => { const r = gradeAudit(c, marks); setResult(r); onGraded(r); }}>Entregar la revisión</Btn>
              <span className="text-[#6b6450]">Líneas marcadas: {marks.length}</span>
            </>
          ) : (
            <Btn onClick={() => { setMarks([]); setResult(null); }}>Volver a intentarlo</Btn>
          )}
        </div>
      </section>

      {result && <AuditReport c={c} r={result} />}
    </div>
  );
}

function LineRow({ l, mark, onToggle, onCat, result, c }: { l: AuditLine; mark?: AuditMark; onToggle: () => void; onCat: (c: AuditCategory) => void; result: AuditResult | null; c: AuditCase }) {
  const isErr = c.errors.some((e) => e.line === l.id);
  const tone = !result
    ? mark
      ? "border-2 border-solid border-[#dc2626] bg-[#fff1f2]"
      : ""
    : isErr
      ? mark
        ? "border-2 border-solid border-[#16a34a] bg-[#f0fdf4]"
        : "border-2 border-solid border-[#f59e0b] bg-[#fffbeb]"
      : mark
        ? "border-2 border-solid border-[#dc2626] bg-[#fff1f2]"
        : "";
  const badge = !result ? null : isErr ? (mark ? "✓ Encontrado" : "Se te pasó") : mark ? "✗ Estaba bien" : null;
  return (
    <div className={`-mx-2 my-1 rounded-lg border-b border-dashed border-[#d6cfb8] px-2 py-2 ${tone}`}>
      <button type="button" onClick={onToggle} disabled={!!result} className="block w-full text-left" aria-pressed={!!mark}>
        <div className="flex flex-wrap items-baseline justify-between gap-x-3">
          <span className="text-sm">{l.label}</span>
          {l.spec && <span className="text-xs text-[#6b6450]">Esp.: {l.spec}</span>}
        </div>
        <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
          {l.struck?.map((h, i) => (
            <span key={i} className="font-mono text-xs text-[#6b6450]">
              <span className="line-through">{h.value}</span>
              {h.reason ? ` (${h.reason} · ${h.who} ${h.when})` : ""}
            </span>
          ))}
          {l.value ? <span className="font-mono font-bold text-[#1d3fa0]">{l.value}</span> : <span className="italic text-[#9ca3af]">(en blanco)</span>}
          {(l.who || l.when) && <span className="text-xs text-[#6b6450]">{l.who} · {l.when}</span>}
          {l.verif && <span className="text-xs text-[#6b6450]">· verificado: {l.verif}</span>}
          {l.note && <span className="rounded bg-[#fde68a] px-1.5 text-xs text-[#78350f]">{l.note}</span>}
          {badge && <span className="ml-auto text-xs font-bold">{badge}</span>}
        </div>
      </button>
      {mark && !result && (
        <select
          value={mark.cat}
          onChange={(e) => onCat(e.target.value as AuditCategory)}
          aria-label={`Tipo de error en ${l.label}`}
          className="mt-1.5 w-full rounded-md border border-[#c9bfa0] bg-white px-2 py-1 text-sm text-[#1f2937] sm:w-auto"
        >
          {(Object.keys(AUDIT_CATEGORIES) as AuditCategory[]).map((k) => (
            <option key={k} value={k}>{AUDIT_CATEGORIES[k].label}</option>
          ))}
        </select>
      )}
      {result && !isErr && mark && l.okWhy && <p className="mt-1 text-xs text-[#166534]">{l.okWhy}</p>}
    </div>
  );
}

function AuditReport({ c, r }: { c: AuditCase; r: AuditResult }) {
  const pct = r.max ? r.score / r.max : 0;
  const verdict = pct >= 0.85 ? "Revisión de nivel QA" : pct >= 0.5 ? "Bien, pero se te escapan cosas" : "Hay que repasar ALCOA+ y la hoja";
  const sevCls = (s: string) => (s === "crítico" ? "bg-[#dc2626] text-white" : s === "mayor" ? "bg-[#f59e0b] text-[#1f2937]" : "bg-[#e5e7eb] text-[#1f2937]");
  const decoys = c.lines.filter((l) => l.okWhy && !r.wrong.some((w) => w.line.id === l.id));
  return (
    <section className="space-y-3 rounded-xl border border-line bg-surface p-4">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-lg font-semibold">Resultado: {r.score} / {r.max} puntos</h3>
        <span className="text-sm font-medium">{verdict}</span>
      </div>
      <p className="text-sm text-muted">
        Encontrados {r.found.length} de {c.errors.length} errores · tipo bien en {r.found.filter((f) => f.catOk).length} · falsos positivos {r.wrong.length}
      </p>
      <ul className="space-y-2">
        {[...r.found.map((f) => ({ err: f.err, state: f.catOk ? "ok" : "half" })), ...r.missed.map((err) => ({ err, state: "miss" }))].map(({ err, state }) => {
          const line = c.lines.find((l) => l.id === err.line)!;
          return (
            <li key={err.line} className={`rounded-lg border p-3 text-sm ${state === "miss" ? "border-[#f59e0b]" : "border-line"}`}>
              <div className="flex flex-wrap items-center gap-2">
                <span className={`rounded px-1.5 py-0.5 text-xs font-bold uppercase ${sevCls(err.sev)}`}>{err.sev}</span>
                <strong>{err.title}</strong>
                <span className="ml-auto text-xs font-semibold">{state === "ok" ? "✓ +2" : state === "half" ? "± +1 (otro tipo)" : "Se te pasó"}</span>
              </div>
              <div className="mt-1 text-xs text-muted">Línea: {line.label} · Tipo: {AUDIT_CATEGORIES[err.cat].label}</div>
              <p className="mt-1">{err.why}</p>
              <p className="mt-1 text-xs text-muted">Norma: {err.rule}</p>
            </li>
          );
        })}
        {r.wrong.map(({ line }) => (
          <li key={line.id} className="rounded-lg border border-[#dc2626] p-3 text-sm">
            <div className="flex flex-wrap items-center gap-2">
              <strong>Marcaste una línea correcta: {line.label}</strong>
              <span className="ml-auto text-xs font-semibold">−1</span>
            </div>
            <p className="mt-1">{line.okWhy ?? "Esta línea cumple la especificación y está bien registrada."}</p>
          </li>
        ))}
      </ul>
      {decoys.length > 0 && (
        <div className="rounded-lg bg-soft p-3 text-sm">
          <div className="font-medium">Líneas que parecían sospechosas pero estaban bien (y no marcaste):</div>
          <ul className="mt-1 list-disc space-y-0.5 pl-5 text-muted">
            {decoys.map((l) => (
              <li key={l.id}><strong className="text-ink">{l.label}:</strong> {l.okWhy}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
