"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import * as E from "@/sim/engine";
import type { Sim } from "@/sim/engine";
import { GUIADO } from "@/sim/guiado";
import Link from "next/link";
import { Sheet } from "./Sheet";
import { Icon } from "@/components/icons";
import { Disclosure, btn } from "@/components/ui";
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

type StartOpts = { guided?: boolean; events: E.EventId[] };

/** Pantalla de inicio: lote guiado, lote normal o lote con las incidencias que elijas (o al azar). */
function Start({ onStart }: { onStart: (o: StartOpts) => void }) {
  const [sel, setSel] = useState<E.EventId[]>(E.CLASICAS);
  // Desde una lección se puede llegar con ?modo=guiado o ?incidencia=frio
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const inc = q.get("incidencia") as E.EventId | null;
    if (inc && E.EVENTS.some((e) => e.id === inc)) setSel([inc]);
  }, []);
  const toggle = (id: E.EventId) => setSel((x) => (x.includes(id) ? x.filter((y) => y !== id) : [...x, id]));
  const azar = () => {
    const ids = E.EVENTS.map((e) => e.id).sort(() => Math.random() - 0.5);
    onStart({ events: ids.slice(0, 1 + Math.floor(Math.random() * 2)) });
  };
  return (
    <section aria-labelledby="sim-start" className="space-y-8 rounded-[var(--radius)] border border-line bg-surface p-6 sm:p-8">
      <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_15rem]">
        <div className="max-w-[60ch]">
          <h2 id="sim-start" className="t-h2">
            Tu primer lote: modo guiado
          </h2>
          <p className="mt-2 leading-relaxed text-muted">
            Sin incidencias. En cada etapa te explica qué estás haciendo y por qué, con enlaces a las lecciones. Una tarjeta ámbar te dice
            siempre el siguiente paso.
          </p>
          <button type="button" onClick={() => onStart({ guided: true, events: [] })} className={`${btn.primary} mt-5`}>
            Empezar el lote guiado
            <Icon name="arrow" className="h-4 w-4" />
          </button>
        </div>
        <aside aria-label="Datos del lote" className="h-fit rounded-[var(--radius)] border border-line-strong bg-soft p-4 font-mono text-sm">
          <p className="border-b border-line pb-2 text-lg font-semibold text-ink">FX-101</p>
          <dl className="mt-2 divide-y divide-line">
            {[
              ["Proceso", "Lote completo"],
              ["Equipos", "Reactor, filtro, cristalizador, centrífuga y secadero"],
              ["Incidencias posibles", String(E.EVENTS.length)],
            ].map(([k, v]) => (
              <div key={k} className="flex flex-col py-1.5">
                <dt className="text-xs text-muted">{k}</dt>
                <dd className="text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
      <div className="border-t border-line pt-6">
        <h3 className="t-card">Práctica</h3>
        <p className="mt-1 max-w-[60ch] text-sm leading-relaxed text-muted">
          Sin explicaciones. Con incidencias pasan cosas que también pasan en planta: tendrás que parar en seguro, avisar, registrar y abrir
          desviación cuando toque.
        </p>
        <fieldset className="mt-4 max-w-3xl">
          <legend className="text-sm font-medium">Incidencias de este lote</legend>
          <ul className="mt-2 border-t border-line text-sm">
            {E.EVENTS.map((e) => (
              <li key={e.id} className="border-b border-line">
                <label className="flex cursor-pointer items-start gap-3 py-2">
                  <input
                    type="checkbox"
                    className="mt-0.5 h-[18px] w-[18px] shrink-0 accent-[var(--accent)]"
                    checked={sel.includes(e.id)}
                    onChange={() => toggle(e.id)}
                  />
                  <span>
                    {e.title} <span className="text-muted">({e.when})</span>
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </fieldset>
        <div className="mt-5 flex flex-wrap gap-2">
          <button type="button" onClick={() => onStart({ events: sel })} className={btn.secondary}>
            {sel.length === 0 ? "Empezar un lote normal" : `Empezar con ${sel.length === 1 ? "esta incidencia" : `estas ${sel.length} incidencias`}`}
          </button>
          <button type="button" onClick={azar} className={btn.secondary}>
            Una o dos incidencias al azar, sin saber cuáles
          </button>
        </div>
      </div>
    </section>
  );
}

/** Modo guiado: qué estás haciendo en esta etapa y por qué. */
function GuidedBox({ sec }: { sec: E.SectionId }) {
  const g = GUIADO[sec];
  return (
    <Card title="Qué estás haciendo y por qué">
      <div className="space-y-2 text-sm leading-relaxed">
        <p>{g.que}</p>
        <ul className="list-disc space-y-1 pl-5 text-muted">
          {g.porque.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <p className="text-muted">
          Para saber más:{" "}
          {g.lecciones.map((l, k) => (
            <span key={l.slug}>
              {k > 0 && " · "}
              <Link className="underline underline-offset-2 hover:decoration-2" href={`/leccion/${l.slug}`}>
                {l.titulo}
              </Link>
            </span>
          ))}
        </p>
      </div>
    </Card>
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
          <input value={note} onChange={(e) => setNote(e.target.value)} placeholder="¿Qué pasa? (para el supervisor)" aria-label="Mensaje para el supervisor" className="min-w-0 flex-1 rounded-md border border-line-strong bg-surface px-2.5 py-1.5" />
          <Btn disabled={s.closed || note.trim().length < 3} onClick={() => { const t = note.trim(); act((x) => E.notify(x, t)); setNote(""); }}>
            Avisar al supervisor
          </Btn>
          <Btn disabled={s.closed} onClick={() => setOpen(!open)}>{open ? "Cerrar formulario" : "Abrir desviación"}</Btn>
        </div>
        {open && (
          <div className="space-y-2 rounded-md border border-line bg-soft p-3">
            <textarea value={what} onChange={(e) => setWhat(e.target.value)} rows={2} placeholder="Qué ha pasado: hechos, hora, equipo, valor medido y límite" aria-label="Qué ha pasado" className="w-full rounded-md border border-line-strong bg-surface px-2.5 py-1.5" />
            <textarea value={action} onChange={(e) => setAction(e.target.value)} rows={2} placeholder="Acción inmediata tomada" aria-label="Acción inmediata tomada" className="w-full rounded-md border border-line-strong bg-surface px-2.5 py-1.5" />
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
                <span className="font-mono text-xs text-muted">{E.fmtTime(m.time)} · </span>
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
    <Disclosure
      summary={
        <span className="font-medium">
          Audit trail <span className="font-normal text-muted">· {s.audit.length} registros</span>
        </span>
      }
    >
      <p className="text-xs text-muted">Quién hizo qué y cuándo. No se puede borrar ni editar: así lo exigen el Anexo 11 y la 21 CFR Part 11.</p>
      <ol className="mt-2 max-h-80 space-y-1 overflow-y-auto font-mono text-xs">
        {s.audit.slice().reverse().map((a, i) => (
          <li key={i}>
            {E.fmtTime(a.time)} · {a.who} · {a.what}
          </li>
        ))}
      </ol>
    </Disclosure>
  );
}

export function Simulator() {
  const [s, setS] = useState<Sim | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [view, setView] = useState(0);
  const [running, setRunning] = useState(false);
  const [speed, setSpeed] = useState(4);
  const sRef = useRef<Sim | null>(null);

  // Si hay un lote guardado que esta versión no sabe leer (dañado o de una versión más nueva),
  // no se borra por el mero hecho de abrir la página: solo cuando el usuario empiece otro lote.
  const keepStored = useRef(false);

  useEffect(() => {
    const st = load();
    try {
      keepStored.current = st == null && localStorage.getItem(KEY) != null;
    } catch {}
    setS(st);
    if (st) setView(st.section);
    setLoaded(true);
  }, []);

  useEffect(() => {
    sRef.current = s;
    if (!loaded) return;
    if (s) keepStored.current = false;
    if (s || !keepStored.current) save(s);
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
        onStart={(o) => {
          setS(E.newSim("normal", o));
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
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 rounded-[var(--radius)] border border-line bg-surface px-4 py-2.5 text-sm">
        <span>
          <span className="font-mono font-medium">FX-101 · lote 26-0147</span>
          <span className="text-muted"> · 100 kg de 4-aminofenol</span>
        </span>
        <Badge tone={s.scenario === "normal" ? "neutral" : "warn"}>{s.guided ? "Lote guiado" : s.scenario === "normal" ? "Lote normal" : "Lote con incidencias"}</Badge>
        <span className="text-muted">
          Reloj de planta <span className="font-mono text-ink">{E.fmtTime(s.clock)}</span>
        </span>
        <span className="ml-auto" />
        <button
          type="button"
          className={btn.quiet}
          onClick={() => {
            if (window.confirm("¿Empezar de cero? Se pierde el lote actual.")) {
              setRunning(false);
              setS(null);
            }
          }}
        >
          Empezar otro lote
        </button>
      </div>

      <nav aria-label="Etapas del lote" className="-mx-1 overflow-x-auto px-1 pb-1">
        <ol className="flex gap-1">
          {E.SECTIONS.map((x, i) => {
            const done = s.signatures[x.id] != null;
            const reachable = i <= s.maxSection;
            const current = i === s.section && !s.closed;
            return (
              <li key={x.id} className="shrink-0">
                <button
                  type="button"
                  disabled={!reachable}
                  onClick={() => setView(i)}
                  aria-current={i === view ? "step" : undefined}
                  className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs ${
                    i === view ? "border-accent bg-accent-soft font-medium text-ink" : "border-transparent text-muted hover:border-line hover:text-ink"
                  } disabled:cursor-not-allowed disabled:opacity-40`}
                >
                  {done ? (
                    <Icon name="check" className="h-3.5 w-3.5 text-ok" />
                  ) : current ? (
                    <span aria-hidden className="h-2 w-2 rounded-full bg-accent" />
                  ) : null}
                  {x.title}
                  {done && <span className="sr-only">(firmada)</span>}
                  {!done && current && <span className="sr-only">(en curso)</span>}
                </button>
              </li>
            );
          })}
        </ol>
      </nav>

      <div className="grid items-start gap-4 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]">
        <PlantView s={s} onSelect={setView} onValve={(v) => act((x) => E.toggleValve(x, v))} />
        {s.halt ? <IncidentCard s={s} act={act} onRedo={redo} /> : <Coach s={s} />}
      </div>
      {s.guided && !s.closed && <GuidedBox sec={sec.id} />}

      {sec.id === "cierre" && s.closed ? (
        <QAReport s={s} />
      ) : (
        <div className="grid items-start gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <p className="text-sm text-muted">
              {view === s.section ? "Equipo en uso" : "Consultando una etapa anterior"}: <span className="text-ink">{sec.equipo}</span>
            </p>
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
                <button type="button" onClick={() => redo()} className="text-xs text-muted underline underline-offset-2 hover:text-ink">
                  Rehacer esta fase desde el principio
                </button>
              </div>
            )}
            {isActive && sec.id !== "cierre" && (
              <div className="flex flex-wrap items-center justify-end gap-x-3 gap-y-2">
                <span className="text-xs text-muted">Al pasar de etapa, lo que quede sin anotar contará como registro tardío.</span>
                <Btn
                  tone={s.signatures[sec.id] != null ? "primary" : "default"}
                  onClick={() => {
                    setRunning(false);
                    act(E.advance);
                    setView(s.section + 1);
                  }}
                >
                  Pasar a la siguiente etapa
                  <Icon name="arrow" className="h-4 w-4" />
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
