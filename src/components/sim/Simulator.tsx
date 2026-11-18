"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import * as E from "@/sim/engine";
import type { Scenario, Sim } from "@/sim/engine";
import { Sheet } from "./Sheet";
import { Badge, Btn, Card } from "./ui";
import {
  PanelCarga, PanelCentrifugacion, PanelCristalizacion, PanelDispensacion, PanelEnvasado, PanelFiltracion,
  PanelPrevias, PanelReaccion, PanelSecado,
} from "./Panels";
import { QAReport } from "./QAReport";
import { PlantView } from "./PlantView";
import { Coach, nextFieldId } from "./Coach";
import { ValveBank } from "./Valves";
import { IncidentCard } from "./IncidentCard";

const KEY = "quimica-app:simulador:v1";

function load(): Sim | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const s = JSON.parse(raw) as Sim;
    return s.version === 1 ? E.migrate(s) : null;
  } catch {
    return null;
  }
}

function save(s: Sim | null) {
  try {
    if (s) localStorage.setItem(KEY, JSON.stringify(s));
    else localStorage.removeItem(KEY);
  } catch {
    /* sin almacenamiento: el lote vive solo en esta pestaña */
  }
}

function Start({ onStart }: { onStart: (sc: Scenario) => void }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <Card title="Lote normal">
        <p className="text-sm text-muted">Todo funciona. Practica la secuencia completa y la forma de registrar: lotes, pesadas, horas, IPC y firmas.</p>
        <div className="mt-3">
          <Btn tone="primary" onClick={() => onStart("normal")}>Empezar lote normal</Btn>
        </div>
      </Card>
      <Card title="Lote con incidencias">
        <p className="text-sm text-muted">
          Durante el lote pasarán cosas que también pasan en planta. Tendrás que decidir: parar, avisar, registrar y abrir desviación cuando toque.
        </p>
        <div className="mt-3">
          <Btn tone="primary" onClick={() => onStart("incidencias")}>Empezar lote con incidencias</Btn>
        </div>
      </Card>
    </div>
  );
}

function Incidents({ s, act }: { s: Sim; act: (fn: (s: Sim) => void) => void }) {
  const [note, setNote] = useState("");
  const [what, setWhat] = useState("");
  const [action, setAction] = useState("");
  const [open, setOpen] = useState(false);
  return (
    <Card title="Comunicación e incidencias">
      <div className="space-y-3 text-sm">
        <div className="flex flex-wrap gap-2">
          <input value={note} onChange={(e) => setNote(e.target.value)} placeholder="¿Qué pasa? (para el supervisor)" className="min-w-0 flex-1 rounded-md border border-line bg-surface px-2 py-1" />
          <Btn disabled={s.closed || note.trim().length < 3} onClick={() => { const t = note.trim(); act((x) => E.notify(x, t)); setNote(""); }}>
            Avisar al supervisor
          </Btn>
          <Btn disabled={s.closed} onClick={() => setOpen(!open)}>{open ? "Cerrar formulario" : "Abrir desviación"}</Btn>
        </div>
        {open && (
          <div className="space-y-2 rounded-lg border border-line p-3">
            <textarea value={what} onChange={(e) => setWhat(e.target.value)} rows={2} placeholder="Qué ha pasado: hechos, hora, equipo, valor medido y límite" className="w-full rounded-md border border-line bg-surface px-2 py-1" />
            <textarea value={action} onChange={(e) => setAction(e.target.value)} rows={2} placeholder="Acción inmediata tomada" className="w-full rounded-md border border-line bg-surface px-2 py-1" />
            <Btn tone="primary" disabled={what.trim().length < 10 || action.trim().length < 5} onClick={() => { const w = what.trim(); const a = action.trim(); act((x) => E.openDeviation(x, w, a)); setWhat(""); setAction(""); setOpen(false); }}>
              Registrar desviación
            </Btn>
            <p className="text-xs text-muted">Describe hechos, no culpables ni suposiciones. La causa raíz la investiga Calidad.</p>
          </div>
        )}
        {s.messages.length > 0 && (
          <ul className="max-h-48 space-y-1.5 overflow-y-auto">
            {s.messages.slice().reverse().map((m, i) => (
              <li key={i}>
                <span className="text-xs text-muted">{E.fmtTime(m.time)} · </span>
                <strong>{m.from}:</strong> {m.text}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Card>
  );
}

function AuditTrail({ s }: { s: Sim }) {
  return (
    <details className="rounded-xl border border-line bg-surface p-4">
      <summary className="cursor-pointer font-semibold">Audit trail ({s.audit.length} registros)</summary>
      <p className="mt-2 text-xs text-muted">Quién hizo qué y cuándo. No se puede borrar ni editar: así lo exigen el Anexo 11 y la 21 CFR Part 11.</p>
      <ol className="mt-2 max-h-80 space-y-1 overflow-y-auto font-mono text-xs">
        {s.audit.slice().reverse().map((a, i) => (
          <li key={i}>
            {E.fmtTime(a.time)} · {a.who} · {a.what}
          </li>
        ))}
      </ol>
    </details>
  );
}

export function Simulator() {
  const [s, setS] = useState<Sim | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [view, setView] = useState(0);
  const [running, setRunning] = useState(false);
  const [speed, setSpeed] = useState(4);
  const sRef = useRef<Sim | null>(null);

  useEffect(() => {
    const st = load();
    setS(st);
    if (st) setView(st.section);
    setLoaded(true);
  }, []);

  useEffect(() => {
    sRef.current = s;
    if (loaded) save(s);
  }, [s, loaded]);

  const act = useCallback((fn: (x: Sim) => void) => {
    setS((prev) => {
      if (!prev) return prev;
      const n = structuredClone(prev);
      fn(n);
      return n;
    });
  }, []);

  const inReaction = s != null && E.SECTIONS[s.section].id === "reaccion" && !s.closed && !s.halt;
  useEffect(() => {
    if (!running || !inReaction) return;
    const t = setInterval(() => {
      act((x) => {
        for (let i = 0; i < speed; i++) E.reactorTick(x);
      });
    }, 1000);
    return () => clearInterval(t);
  }, [running, inReaction, speed, act]);

  useEffect(() => {
    if (!inReaction) setRunning(false);
  }, [inReaction]);

  if (!loaded) return <p className="text-sm text-muted">Cargando…</p>;
  if (!s) {
    return (
      <Start
        onStart={(sc) => {
          setS(E.newSim(sc));
          setView(0);
        }}
      />
    );
  }

  const sec = E.SECTIONS[view];
  const isActive = view === s.section && !s.closed && !s.halt;
  const redo = (index: number = s.section) => {
    const later = index < s.section ? " y de las fases siguientes" : "";
    if (window.confirm(`¿Volver al principio de «${E.SECTIONS[index].title}»? Se anulan los datos y acciones de esa fase${later}. El audit trail y los incidentes se conservan.`)) {
      setRunning(false);
      act((x) => E.redoPhase(x, index));
      setView(index);
    }
  };
  const p = { s, act, active: isActive, running, setRunning, speed, setSpeed };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 rounded-xl border border-line bg-surface px-4 py-3 text-sm">
        <span>
          <strong>FX-101</strong> · lote 26-0147 · 100 kg de 4-aminofenol
        </span>
        <Badge tone={s.scenario === "normal" ? "neutral" : "warn"}>{s.scenario === "normal" ? "Lote normal" : "Lote con incidencias"}</Badge>
        <span className="font-mono">🕑 {E.fmtTime(s.clock)}</span>
        <span className="ml-auto" />
        <Btn
          onClick={() => {
            if (window.confirm("¿Empezar de cero? Se pierde el lote actual.")) {
              setRunning(false);
              setS(null);
            }
          }}
        >
          Nuevo lote
        </Btn>
      </div>

      <nav aria-label="Etapas del lote" className="flex gap-1.5 overflow-x-auto pb-1">
        {E.SECTIONS.map((x, i) => {
          const done = s.signatures[x.id] != null;
          const reachable = i <= s.maxSection;
          return (
            <button
              key={x.id}
              type="button"
              disabled={!reachable}
              onClick={() => setView(i)}
              className={`shrink-0 rounded-lg border px-2.5 py-1.5 text-xs ${
                i === view ? "border-accent bg-accent-soft font-semibold" : "border-line bg-surface"
              } disabled:opacity-40`}
            >
              {done ? "✓ " : i === s.section && !s.closed ? "● " : ""}
              {x.title}
            </button>
          );
        })}
      </nav>

      <div className="grid items-start gap-4 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]">
        <PlantView s={s} onSelect={setView} onValve={(v) => act((x) => E.toggleValve(x, v))} />
        {s.halt ? <IncidentCard s={s} act={act} onRedo={redo} /> : <Coach s={s} />}
      </div>

      {sec.id === "cierre" && s.closed ? (
        <QAReport s={s} />
      ) : (
        <div className="grid items-start gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <div className="text-xs uppercase tracking-wide text-muted">
              {view === s.section ? "Equipo en uso" : "Consultando etapa anterior"} · {sec.equipo}
            </div>
            <ValveBank s={s} act={act} active={isActive} sec={sec.id} />
            {sec.id === "previas" && <PanelPrevias {...p} />}
            {sec.id === "dispensacion" && <PanelDispensacion {...p} />}
            {sec.id === "carga" && <PanelCarga {...p} />}
            {sec.id === "reaccion" && <PanelReaccion {...p} />}
            {sec.id === "filtracion" && <PanelFiltracion {...p} />}
            {sec.id === "cristalizacion" && <PanelCristalizacion {...p} />}
            {sec.id === "centrifugacion" && <PanelCentrifugacion {...p} />}
            {sec.id === "secado" && <PanelSecado {...p} />}
            {sec.id === "envasado" && <PanelEnvasado {...p} />}
            {sec.id === "cierre" && (
              <Card title="Cierre del registro">
                <p className="text-sm text-muted">
                  Antes de cerrar, repasa cada etapa: datos completos, firmas, desviaciones abiertas para todo lo que se salió de lo normal. Puedes volver a etapas anteriores con la barra de arriba.
                </p>
                <div className="mt-3">
                  <Btn tone="primary" disabled={!isActive} onClick={() => act(E.closeBatch)}>
                    Firmar como producción y enviar a QA
                  </Btn>
                </div>
              </Card>
            )}
          </div>
          <div className="space-y-4">
            <Sheet s={s} sec={sec.id} act={act} isActive={isActive} focusId={isActive ? nextFieldId(s) : null} />
            {view === s.section && !s.closed && !s.halt && (
              <div className="flex justify-end">
                <button type="button" onClick={() => redo()} className="text-xs text-muted underline hover:text-ink">↺ Rehacer esta fase desde el principio</button>
              </div>
            )}
            {isActive && sec.id !== "cierre" && (
              <div className="flex items-center justify-end gap-2">
                <span className="text-xs text-muted">Al pasar de etapa, lo que quede sin anotar contará como registro tardío.</span>
                <Btn
                  tone="primary"
                  onClick={() => {
                    setRunning(false);
                    act(E.advance);
                    setView(s.section + 1);
                  }}
                >
                  Siguiente etapa →
                </Btn>
              </div>
            )}
          </div>
        </div>
      )}

      <Incidents s={s} act={act} />
      <AuditTrail s={s} />
    </div>
  );
}
