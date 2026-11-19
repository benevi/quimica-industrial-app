"use client";

import { useEffect, useState } from "react";
import { AUDIT_CASES, AUDIT_CATEGORIES, gradeAudit, type AuditCase, type AuditCategory, type AuditLine, type AuditMark, type AuditResult } from "@/sim/audit";
import { Icon } from "@/components/icons";
import { Disclosure, btn } from "@/components/ui";
import { Badge, Btn } from "./ui";

const KEY = "quimica-app:auditoria:v1";
type Best = Record<string, { score: number; max: number }>;

function loadBest(): Best {
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? "{}") as Best;
  } catch {
    return {};
  }
}

/** Pasos y puntuación de una revisión. */
function HowTo() {
  return (
    <ol className="max-w-[68ch] list-decimal space-y-1 pl-5 text-sm leading-relaxed text-muted">
      <li>Lee cada línea y compárala con la especificación y con los datos de referencia.</li>
      <li>Pulsa sobre una línea para marcarla como sospechosa y elige qué tipo de error es.</li>
      <li>Cuando acabes, pulsa «Entregar la revisión». 2 puntos por error con el tipo bien, 1 si solo aciertas la línea, −1 por cada línea correcta que marques.</li>
    </ol>
  );
}

/** Modo auditoría: revisa hojas ya rellenas como lo haría QA y encuentra los errores escondidos. */
export function AuditMode() {
  const [caseId, setCaseId] = useState<string | null>(null);
  const [best, setBest] = useState<Best>({});
  useEffect(() => setBest(loadBest()), []);
  const c = AUDIT_CASES.find((x) => x.id === caseId);

  if (!c) {
    const rec = AUDIT_CASES.find((x) => !best[x.id]) ?? AUDIT_CASES[0];
    return (
      <div className="space-y-4">
        <ol className="space-y-3">
          {AUDIT_CASES.map((x) => {
            const b = best[x.id];
            return (
              <li key={x.id} className="flex flex-wrap items-center gap-x-6 gap-y-3 rounded-[var(--radius)] border border-line bg-surface p-5">
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-muted">
                    Nivel {x.level.toLowerCase()} ·{" "}
                    {b ? (
                      <span className="text-ink">
                        mejor nota {b.score} de {b.max}
                      </span>
                    ) : (
                      "sin hacer"
                    )}
                  </p>
                  <h2 className="t-h3 mt-0.5">
                    <span className="font-mono">FX-101</span> · {x.title}
                  </h2>
                  <p className="mt-1 max-w-[68ch] text-sm leading-relaxed text-muted">{x.intro}</p>
                </div>
                <button type="button" onClick={() => setCaseId(x.id)} className={x.id === rec.id ? btn.primary : btn.secondary}>
                  {b ? "Revisar otra vez" : "Revisar esta hoja"}
                  {x.id === rec.id && <Icon name="arrow" className="h-4 w-4" />}
                </button>
              </li>
            );
          })}
        </ol>
        <Disclosure summary={<span className="font-medium">Cómo funciona la auditoría</span>}>
          <HowTo />
          <p className="mt-3 text-xs text-muted">Todos los lotes, iniciales y datos son inventados.</p>
        </Disclosure>
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
        <button type="button" onClick={onBack} className={`${btn.quiet} -ml-2`}>
          <Icon name="back" className="h-4 w-4" />
          Elegir otra hoja
        </button>
        <span className="text-sm text-muted">
          Nivel {c.level.toLowerCase()} · {c.errors.length} errores escondidos
        </span>
      </div>

      <section className="rounded-[var(--radius)] border border-line bg-surface p-5 text-sm">
        <h2 className="t-h3">Eres QA: revisa el registro del lote {c.title}</h2>
        <p className="mt-1 max-w-[68ch] leading-relaxed text-muted">{c.intro}</p>
        <p className="mt-2 max-w-[68ch] leading-relaxed">Pulsa una línea para marcarla como sospechosa y elige el tipo de error. Al terminar, entrega la revisión.</p>
        <details className="group mt-2">
          <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 text-accent [&::-webkit-details-marker]:hidden">
            <Icon name="chevron" className="h-3.5 w-3.5 transition-transform group-open:rotate-90" />
            Cómo se puntúa
          </summary>
          <div className="mt-2">
            <HowTo />
          </div>
        </details>
        <div className="mt-4 rounded-md bg-soft p-3">
          <h3 className="font-medium">Datos de referencia</h3>
          <ul className="mt-1 list-disc space-y-0.5 pl-5 text-muted">
            {c.refs.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-[var(--radius)] border border-line bg-surface">
        <div className="border-b border-line-strong px-4 py-3">
          <p className="text-xs text-muted">
            Hoja de producción · <span className="font-mono">FX-101 · lote {c.title.replace("Lote ", "")}</span> · copia para revisión
          </p>
          <h3 className="t-h3">
            Registro de lote <span lang="en" className="text-sm font-normal text-muted">batch record</span>
          </h3>
        </div>
        {stages.map((st) => (
          <div key={st} className="px-4">
            <h4 className="mt-4 text-sm font-medium text-muted">{st}</h4>
            {c.lines.filter((l) => l.stage === st).map((l) => (
              <LineRow key={l.id} l={l} mark={marks.find((m) => m.line === l.id)} onToggle={() => toggle(l.id)} onCat={(cat) => setCat(l.id, cat)} result={result} c={c} />
            ))}
          </div>
        ))}
        <div className="flex flex-wrap items-center gap-3 border-t border-line px-4 py-3 text-sm">
          {!result ? (
            <>
              <Btn tone="primary" onClick={() => { const r = gradeAudit(c, marks); setResult(r); onGraded(r); }}>Entregar la revisión</Btn>
              <span className="text-muted">Líneas marcadas: {marks.length}</span>
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
      ? "border border-solid border-accent bg-accent-soft"
      : ""
    : isErr
      ? mark
        ? "border border-solid border-ok bg-ok-soft"
        : "border border-solid border-line-strong bg-warn-soft"
      : mark
        ? "border border-solid border-bad bg-bad-soft"
        : "";
  const badge = !result ? null : isErr ? (mark ? "✓ Encontrado" : "Se te pasó") : mark ? "✗ Estaba bien" : null;
  return (
    <div className={`-mx-2 my-1 rounded-md border-b border-dashed border-line px-2 py-2 ${tone}`}>
      <button type="button" onClick={onToggle} disabled={!!result} className="block w-full text-left" aria-pressed={!!mark}>
        <div className="flex flex-wrap items-baseline justify-between gap-x-3">
          <span className="text-sm">{l.label}</span>
          {l.spec && (
            <span className="text-xs text-muted">
              Esp.: <span className="font-mono">{l.spec}</span>
            </span>
          )}
        </div>
        <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
          {l.struck?.map((h, i) => (
            <span key={i} className="font-mono text-xs text-muted">
              <span className="line-through">{h.value}</span>
              {h.reason ? ` (${h.reason} · ${h.who} ${h.when})` : ""}
            </span>
          ))}
          {l.value ? <span className="font-mono font-medium text-ink">{l.value}</span> : <span className="italic text-muted">(en blanco)</span>}
          {(l.who || l.when) && <span className="text-xs text-muted">{l.who} · {l.when}</span>}
          {l.verif && <span className="text-xs text-muted">· verificado: {l.verif}</span>}
          {l.note && <span className="rounded bg-warn-soft px-1.5 text-xs text-ink">{l.note}</span>}
          {badge && <span className="ml-auto text-xs font-medium">{badge}</span>}
        </div>
      </button>
      {mark && !result && (
        <select
          value={mark.cat}
          onChange={(e) => onCat(e.target.value as AuditCategory)}
          aria-label={`Tipo de error en ${l.label}`}
          className="mt-1.5 w-full rounded-md border border-line-strong bg-surface px-2 py-1 text-sm text-ink sm:w-auto"
        >
          {(Object.keys(AUDIT_CATEGORIES) as AuditCategory[]).map((k) => (
            <option key={k} value={k}>{AUDIT_CATEGORIES[k].label}</option>
          ))}
        </select>
      )}
      {result && !isErr && mark && l.okWhy && <p className="mt-1 text-xs text-ok">{l.okWhy}</p>}
    </div>
  );
}

function AuditReport({ c, r }: { c: AuditCase; r: AuditResult }) {
  const pct = r.max ? r.score / r.max : 0;
  const verdict = pct >= 0.85 ? "Revisión de nivel QA" : pct >= 0.5 ? "Bien, pero se te escapan cosas" : "Hay que repasar ALCOA+ y la hoja";
  const decoys = c.lines.filter((l) => l.okWhy && !r.wrong.some((w) => w.line.id === l.id));
  return (
    <section className="space-y-3 rounded-[var(--radius)] border border-line bg-surface p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="t-h2">
          Resultado: {r.score} de {r.max} puntos
        </h2>
        <span className="text-sm font-medium">{verdict}</span>
      </div>
      <p className="text-sm text-muted">
        Encontrados {r.found.length} de {c.errors.length} errores · tipo bien en {r.found.filter((f) => f.catOk).length} · falsos positivos {r.wrong.length}
      </p>
      <ul className="space-y-2">
        {[...r.found.map((f) => ({ err: f.err, state: f.catOk ? "ok" : "half" })), ...r.missed.map((err) => ({ err, state: "miss" }))].map(({ err, state }) => {
          const line = c.lines.find((l) => l.id === err.line)!;
          return (
            <li key={err.line} className={`rounded-md border p-3 text-sm ${state === "miss" ? "border-line-strong bg-warn-soft" : "border-line"}`}>
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone={err.sev === "crítico" ? "bad" : err.sev === "mayor" ? "warn" : "neutral"}>{err.sev}</Badge>
                <strong>{err.title}</strong>
                <span className="ml-auto text-xs font-medium">{state === "ok" ? "✓ +2" : state === "half" ? "± +1 (otro tipo)" : "Se te pasó"}</span>
              </div>
              <div className="mt-1 text-xs text-muted">Línea: {line.label} · Tipo: {AUDIT_CATEGORIES[err.cat].label}</div>
              <p className="mt-1">{err.why}</p>
              <p className="mt-1 text-xs text-muted">Norma: {err.rule}</p>
            </li>
          );
        })}
        {r.wrong.map(({ line }) => (
          <li key={line.id} className="rounded-md border border-bad p-3 text-sm">
            <div className="flex flex-wrap items-center gap-2">
              <strong>Marcaste una línea correcta: {line.label}</strong>
              <span className="ml-auto text-xs font-medium">−1</span>
            </div>
            <p className="mt-1">{line.okWhy ?? "Esta línea cumple la especificación y está bien registrada."}</p>
          </li>
        ))}
      </ul>
      {decoys.length > 0 && (
        <div className="rounded-md bg-soft p-3 text-sm">
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
