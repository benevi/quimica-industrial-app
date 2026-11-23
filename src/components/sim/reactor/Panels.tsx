"use client";

import { useState, type ReactNode } from "react";
import { Badge, Btn, Card, Readout } from "@/components/sim/ui";
import {
  type State,
  type Inputs,
  type AlarmPriority,
  INTERLOCKS,
  P,
  ackAlarm,
  areaMojada,
  coefU,
  feedIndicado,
  feedReal,
  pesoDepositoB,
  fmt,
  fmtHora,
  nivel,
  o2,
  pAbs,
  pGauge,
  puedeCargar,
  qCamisa,
  qReaccion,
  rearmarAgitador,
  rellenarBarrera,
  tmLeida,
  volLiquido,
} from "@/sim/reactor/model";

type Set = (fn: (s: State) => void) => void;

const PRIO: Record<AlarmPriority, { label: string; cls: string; order: number }> = {
  alta: { label: "Alta", cls: "border-bad bg-bad-soft text-bad", order: 0 },
  media: { label: "Media", cls: "border-[var(--color-signal)] bg-signal-soft text-ink", order: 1 },
  baja: { label: "Baja", cls: "border-line-strong bg-soft text-muted", order: 2 },
};

/* ───────────────────────────── Alarmas ───────────────────────────── */

export function AlarmList({ s, set }: { s: State; set: Set }) {
  const list = [...s.alarms].sort((a, b) => PRIO[a.prio].order - PRIO[b.prio].order || b.since - a.since);
  const sinReconocer = list.filter((a) => !a.acked).length;
  return (
    <Card
      title="Alarmas"
      right={
        <div className="flex items-center gap-2">
          {sinReconocer > 0 && <Badge tone="bad">{sinReconocer} sin reconocer</Badge>}
          <Btn onClick={() => set((x) => ackAlarm(x))} disabled={sinReconocer === 0}>
            Reconocer todas
          </Btn>
        </div>
      }
    >
      {s.trips.length > 0 && (
        <ul className="mb-3 space-y-1">
          {s.trips.map((t) => (
            <li key={t} className="rounded-md border border-bad bg-bad-soft px-3 py-1.5 text-sm text-bad">
              <span className="font-mono font-medium">{t}</span> {INTERLOCKS[t]}
            </li>
          ))}
        </ul>
      )}
      {list.length === 0 ? (
        <p className="text-sm text-muted">Sin alarmas.</p>
      ) : (
        <ul className="space-y-1.5" aria-live="polite">
          {list.map((a) => (
            <li key={a.id} className={`flex flex-wrap items-center gap-2 rounded-md border px-3 py-1.5 text-sm ${PRIO[a.prio].cls} ${a.acked ? "opacity-70" : "font-medium"}`}>
              <span className="w-12 text-xs">{PRIO[a.prio].label}</span>
              <span className="font-mono text-xs">{fmtHora(a.since)}</span>
              <span className="font-mono text-xs">{a.tag}</span>
              <span className="min-w-0 flex-1">{a.text}</span>
              <span className="text-xs">{a.active ? (a.acked ? "Reconocida" : "Activa") : "Normalizada"}</span>
              {!a.acked && (
                <button type="button" className="rounded border border-current px-2 py-0.5 text-xs" onClick={() => set((x) => ackAlarm(x, a.id))}>
                  Reconocer
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}

/* ───────────────────────────── Sinóptico ───────────────────────────── */

export function Synoptic({ s }: { s: State }) {
  const lvl = Math.min(100, nivel(s));
  const vesselTop = 40;
  const vesselH = 200;
  const fillY = vesselTop + vesselH * (1 - Math.min(lvl, 110) / 110);
  const i = s.inputs;
  const on = (b: boolean) => (b ? "#d97706" : "#64748b");
  const tag = (x: number, y: number, t: string, v: string) => (
    <g>
      <rect x={x} y={y} width={92} height={34} rx={4} fill="#1b2030" stroke="#2f3648" />
      <text x={x + 6} y={y + 13} fontSize={10} fill="#9aa5b8">
        {t}
      </text>
      <text x={x + 6} y={y + 28} fontSize={13} fill="#fff" fontFamily="monospace">
        {v}
      </text>
    </g>
  );
  return (
    <figure className="overflow-x-auto rounded-[var(--radius)] border border-line bg-[#111522] p-2">
      <svg viewBox="0 0 640 330" className="min-w-[560px]" role="img" aria-label="Sinóptico del reactor R-204 con sus lecturas">
        {/* Condensador */}
        <rect x={150} y={4} width={160} height={22} rx={6} fill="#1f2a3d" stroke={on(i.aguaCond)} />
        <text x={158} y={19} fontSize={11} fill="#cbd5e1">
          E-204 condensador · {i.destilar ? "destilación" : "reflujo"}
        </text>
        <path d={`M230 26 V${vesselTop - 8} H290 V${vesselTop}`} fill="none" stroke="#64748b" strokeWidth={3} />
        {/* Camisa y recipiente */}
        <rect x={196} y={vesselTop + 30} width={248} height={vesselH - 10} rx={34} fill="none" stroke={s.u > 1 ? "#ef4444" : s.u < -1 ? "#38bdf8" : "#475569"} strokeWidth={6} />
        <rect x={206} y={vesselTop} width={228} height={vesselH} rx={30} fill="#1e2433" stroke="#94a3b8" strokeWidth={2} />
        <clipPath id="vessel">
          <rect x={206} y={vesselTop} width={228} height={vesselH} rx={30} />
        </clipPath>
        <rect x={206} y={fillY} width={228} height={vesselTop + vesselH - fillY} fill="#2563eb" opacity={0.35} clipPath="url(#vessel)" />
        {/* Agitador */}
        <line x1={320} y1={vesselTop - 14} x2={320} y2={vesselTop + vesselH - 30} stroke="#cbd5e1" strokeWidth={3} />
        <rect x={328} y={vesselTop - 22} width={44} height={18} rx={3} fill={s.agitDisparado ? "#ef4444" : on(s.rpm > 1)} />
        <text x={334} y={vesselTop - 9} fontSize={10} fill="#fff">
          M-204
        </text>
        <g transform={`translate(320 ${vesselTop + vesselH - 30}) rotate(${(s.t * s.rpm * 6) % 360})`}>
          <rect x={-38} y={-3} width={76} height={6} fill="#cbd5e1" />
        </g>
        {/* Válvula de fondo */}
        <line x1={320} y1={vesselTop + vesselH} x2={320} y2={vesselTop + vesselH + 30} stroke="#64748b" strokeWidth={3} />
        <rect x={310} y={vesselTop + vesselH + 30} width={20} height={14} fill={on(i.fondo)} />
        <text x={336} y={vesselTop + vesselH + 41} fontSize={10} fill="#cbd5e1">
          XV-204F · P-207 a R-205
        </text>
        {/* Entradas */}
        <line x1={120} y1={vesselTop + 10} x2={232} y2={vesselTop + 10} stroke={on(i.carga)} strokeWidth={3} />
        <text x={8} y={vesselTop + 14} fontSize={10} fill="#cbd5e1">
          P-210 solución T-210
        </text>
        <line x1={120} y1={vesselTop + 40} x2={232} y2={vesselTop + 40} stroke={on(feedReal(s) > 0)} strokeWidth={3} />
        <text x={8} y={vesselTop + 44} fontSize={10} fill="#cbd5e1">
          P-205 reactivo B
        </text>
        <line x1={408} y1={vesselTop + 10} x2={520} y2={vesselTop + 10} stroke={on(i.xvN2 || (i.picOn && pGauge(s) < i.pSp))} strokeWidth={3} />
        <text x={526} y={vesselTop + 14} fontSize={10} fill="#cbd5e1">
          Nitrógeno
        </text>
        <line x1={408} y1={vesselTop + 30} x2={520} y2={vesselTop + 30} stroke={on(i.xvVent || (i.picOn && pGauge(s) > i.pSp + 0.02))} strokeWidth={3} />
        <text x={526} y={vesselTop + 34} fontSize={10} fill="#cbd5e1">
          Venteo a lavador
        </text>
        <line x1={408} y1={vesselTop + 50} x2={520} y2={vesselTop + 50} stroke={on(i.vacio)} strokeWidth={3} />
        <text x={526} y={vesselTop + 54} fontSize={10} fill="#cbd5e1">
          Vacío P-206
        </text>
        {/* Lecturas */}
        {tag(8, 120, "TI-204A masa", fmt(tmLeida(s)) + " °C")}
        {tag(8, 160, "TI-204B masa", fmt(s.tm) + " °C")}
        {tag(8, 200, "TI-204J camisa", fmt(s.tj) + " °C")}
        {tag(8, 240, "FI-205 B", fmt(feedIndicado(s), 0) + " kg/h")}
        {tag(540, 120, "PI-204", fmt(pGauge(s), 3) + " bar g")}
        {tag(540, 160, "LI-204 nivel", fmt(nivel(s)) + " %")}
        {tag(540, 200, "AI-204 O₂", fmt(o2(s), 2) + " %")}
        {tag(540, 240, "SI-204", fmt(s.rpm, 0) + " rpm")}
        {tag(440, 284, "PI-204D disco", fmt(s.pDisco, 2) + " bar g")}
        {tag(100, 284, "LI-204S barrera", fmt(s.barrera, 0) + " %")}
      </svg>
    </figure>
  );
}

/* ───────────────────────────── Mandos ───────────────────────────── */

function Face({ tag, title, children }: { tag: string; title: string; children: ReactNode }) {
  return (
    <section className="rounded-[var(--radius)] border border-line bg-surface p-3">
      <h4 className="mb-2 text-sm font-medium">
        <span className="font-mono text-muted">{tag}</span> {title}
      </h4>
      <div className="space-y-2 text-sm">{children}</div>
    </section>
  );
}

function NumInput({ label, value, unit, min, max, stepv, onSet }: { label: string; value: number; unit: string; min: number; max: number; stepv: number; onSet: (v: number) => void }) {
  const [draft, setDraft] = useState<string | null>(null);
  const shown = draft ?? String(value).replace(".", ",");
  const commit = () => {
    if (draft === null) return;
    const n = Number(draft.replace(",", "."));
    if (Number.isFinite(n)) onSet(Math.min(max, Math.max(min, n)));
    setDraft(null);
  };
  return (
    <label className="flex flex-wrap items-center justify-between gap-2">
      <span className="text-muted">{label}</span>
      <span className="flex items-center gap-1">
        <input
          inputMode="decimal"
          step={stepv}
          className="w-20 rounded border border-line-strong bg-surface px-2 py-1 text-right font-mono"
          value={shown}
          onChange={(e) => setDraft(e.target.value)}
          onBlur={commit}
          onKeyDown={(e) => e.key === "Enter" && commit()}
        />
        <span className="w-10 text-xs text-muted">{unit}</span>
      </span>
    </label>
  );
}

function Toggle({ label, on, onClick, disabled, title }: { label: string; on: boolean; onClick: () => void; disabled?: boolean; title?: string }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-2">
      <span className="text-muted">{label}</span>
      <Btn pressed={on} onClick={onClick} disabled={disabled} title={title}>
        {on ? "En marcha" : "Parado"}
      </Btn>
    </div>
  );
}

export function Faceplates({ s, set, onMsg }: { s: State; set: Set; onMsg: (m: string) => void }) {
  const i = s.inputs;
  const inp = (fn: (x: Inputs, st: State) => void) => set((x) => fn(x.inputs, x));
  const qj = qCamisa(s) / 1000;
  const qr = qReaccion(s) / 1000;
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <Face tag="M-204" title="Agitador">
        <Toggle
          label="Motor"
          on={i.agitOn && !s.agitDisparado}
          onClick={() =>
            inp((x, st) => {
              if (st.agitDisparado) return;
              x.agitOn = !x.agitOn;
            })
          }
        />
        <NumInput label="Consigna" value={i.agitSp} unit="rpm" min={0} max={P.rpmMax} stepv={5} onSet={(v) => inp((x) => (x.agitSp = v))} />
        <p className="text-xs text-muted">
          Lectura {fmt(s.rpm, 0)} rpm · volumen {fmt(volLiquido(s) * 1000, 0)} L (mínimo para agitar {fmt(P.volMinAgitacion * 1000, 0)} L)
        </p>
        {s.agitDisparado && (
          <Btn tone="danger" onClick={() => set((x) => rearmarAgitador(x))} title="Solo tras comprobar la causa y con el permiso del jefe de turno">
            Rearmar el motor
          </Btn>
        )}
      </Face>

      <Face tag="TIC-204" title="Temperatura de masa (maestro)">
        <Toggle label="Control automático" on={i.ticMasaOn} onClick={() => inp((x) => (x.ticMasaOn = !x.ticMasaOn))} />
        <NumInput label="Consigna de masa" value={i.tMasaSp} unit="°C" min={0} max={130} stepv={1} onSet={(v) => inp((x) => (x.tMasaSp = v))} />
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-muted">Sonda para el control</span>
          <span className="flex flex-wrap gap-1">
            <Btn pressed={!i.sondaB} onClick={() => inp((x) => (x.sondaB = false))}>
              TT-204A
            </Btn>
            <Btn pressed={i.sondaB} onClick={() => inp((x) => (x.sondaB = true))}>
              TT-204B
            </Btn>
          </span>
        </div>
        <p className="text-xs text-muted">
          Masa {fmt(tmLeida(s))} °C · límite camisa-masa ±{P.dTmax} °C
        </p>
      </Face>

      <Face tag="TIC-204J" title="Camisa y unidad de termorregulación">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-muted">Modo</span>
          <span className="flex flex-wrap gap-1">
            {(["MAN", "AUTO", "CAS"] as const).map((m) => (
              <Btn key={m} pressed={i.jMode === m} onClick={() => inp((x) => (x.jMode = m))} title={m === "MAN" ? "Manual: tú fijas la salida" : m === "AUTO" ? "Automático: tú fijas la temperatura de camisa" : "Cascada: la consigna la da TIC-204"}>
                {m === "MAN" ? "Manual" : m === "AUTO" ? "Auto" : "Cascada"}
              </Btn>
            ))}
          </span>
        </div>
        {i.jMode === "MAN" && <NumInput label="Salida (− frío, + calor)" value={i.jOut} unit="%" min={-100} max={100} stepv={5} onSet={(v) => inp((x) => (x.jOut = v))} />}
        {i.jMode === "AUTO" && <NumInput label="Consigna de camisa" value={i.jSp} unit="°C" min={-10} max={P.tJacketMax} stepv={1} onSet={(v) => inp((x) => (x.jSp = v))} />}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-muted">Medio de frío</span>
          <span className="flex flex-wrap gap-1">
            <Btn pressed={i.medio === "agua"} onClick={() => inp((x) => (x.medio = "agua"))}>
              Agua de torre
            </Btn>
            <Btn pressed={i.medio === "glicol"} onClick={() => inp((x) => (x.medio = "glicol"))}>
              Glicol
            </Btn>
          </span>
        </div>
        <p className="text-xs text-muted">
          Camisa {fmt(s.tj)} °C (consigna {fmt(s.jSpCalc)}) · salida {fmt(s.u, 0)} % · pasan {fmt(qj)} kW · U·A {fmt((coefU(s) * areaMojada(s)) / 1000, 2)} kW/K
        </p>
      </Face>

      <Face tag="PIC-204" title="Presión, nitrógeno y vacío">
        <Toggle label="Control automático (N₂ y venteo)" on={i.picOn} onClick={() => inp((x) => (x.picOn = !x.picOn))} />
        <NumInput label="Consigna" value={i.pSp} unit="bar g" min={0} max={0.4} stepv={0.01} onSet={(v) => inp((x) => (x.pSp = v))} />
        <Toggle label="XV-204N nitrógeno manual" on={i.xvN2} onClick={() => inp((x) => (x.xvN2 = !x.xvN2))} />
        <Toggle label="XV-204V venteo manual" on={i.xvVent} onClick={() => inp((x) => (x.xvVent = !x.xvVent))} />
        <Toggle label="P-206 bomba de vacío" on={i.vacio} onClick={() => inp((x) => (x.vacio = !x.vacio))} />
        <p className="text-xs text-muted">
          {fmt(pGauge(s), 3)} bar g = {fmt(pAbs(s) * 1000, 0)} mbar abs · O₂ {fmt(o2(s), 2)} % · ciclos hechos: {s.ciclos.length}
        </p>
      </Face>

      <Face tag="P-210" title="Carga de solución de AX-21">
        <Toggle
          label="Bomba y válvula de carga"
          on={i.carga}
          onClick={() =>
            set((x) => {
              if (!x.inputs.carga) {
                const msg = puedeCargar(x);
                if (msg) {
                  onMsg(msg);
                  return;
                }
              }
              x.inputs.carga = !x.inputs.carga;
            })
          }
        />
        <p className="text-xs text-muted">FQ-204 {fmt(s.solCargada, 0)} kg · nivel {fmt(nivel(s))} %</p>
      </Face>

      <Face tag="FIC-205" title="Adición del reactivo B">
        <Toggle label="Dosificadora P-205" on={i.dosif} onClick={() => inp((x) => (x.dosif = !x.dosif))} />
        <NumInput label="Consigna de caudal" value={i.feedSp} unit="kg/h" min={0} max={P.feedMax} stepv={10} onSet={(v) => inp((x) => (x.feedSp = v))} />
        <Toggle label="XV-205 aislamiento manual de B" on={!i.aislaB} onClick={() => inp((x) => (x.aislaB = !x.aislaB))} title="Abierta (en marcha) o cerrada (parado)" />
        <p className="text-xs text-muted">
          FI-205 {fmt(feedIndicado(s), 0)} kg/h · FQ-205 {fmt(s.bIndicado, 1)} kg · báscula del depósito WI-205 {fmt(pesoDepositoB(s), 1)} kg · calor de reacción {fmt(qr)} kW
        </p>
      </Face>

      <Face tag="E-204" title="Condensador">
        <Toggle label="Agua del condensador" on={i.aguaCond} onClick={() => inp((x) => (x.aguaCond = !x.aguaCond))} />
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-muted">Retorno del condensado</span>
          <span className="flex flex-wrap gap-1">
            <Btn pressed={!i.destilar} onClick={() => inp((x) => (x.destilar = false))}>
              Reflujo
            </Btn>
            <Btn pressed={i.destilar} onClick={() => inp((x) => (x.destilar = true))}>
              Destilación
            </Btn>
          </span>
        </div>
        <p className="text-xs text-muted">
          Reflujo acumulado {fmt(s.tiempoReflujo / 60, 0)} min · destilado {fmt(s.mDest, 0)} kg · vapor al venteo {fmt(s.vaporVenteo, 0)} kg/h
        </p>
      </Face>

      <Face tag="P-207" title="Descarga a R-205">
        <Toggle label="Válvula de fondo y bomba" on={i.fondo} onClick={() => inp((x) => (x.fondo = !x.fondo))} />
        <p className="text-xs text-muted">Descargado {fmt(s.mDescargado, 0)} kg</p>
      </Face>

      <Face tag="M-204S" title="Cierre del agitador">
        <p className="text-xs text-muted">Líquido de barrera {fmt(s.barrera, 0)} % (40 – 80 %)</p>
        <Btn onClick={() => set((x) => rellenarBarrera(x))} disabled={s.barrera >= 40}>
          Rellenar con la bomba manual
        </Btn>
      </Face>
    </div>
  );
}

/* ───────────────────────────── Tendencias ───────────────────────────── */

const SERIES = [
  { key: "tm", label: "Masa TI-204A", color: "#f59e0b", unit: "°C", lo: 0, hi: 140 },
  { key: "tj", label: "Camisa TI-204J", color: "#60a5fa", unit: "°C", lo: 0, hi: 140 },
  { key: "p", label: "Presión PI-204", color: "#f87171", unit: "bar g", lo: -1, hi: 2 },
  { key: "feed", label: "Adición FI-205", color: "#c084fc", unit: "kg/h", lo: 0, hi: 1200 },
  { key: "nivel", label: "Nivel LI-204", color: "#94a3b8", unit: "%", lo: 0, hi: 100 },
] as const;

export function Trends({ s }: { s: State }) {
  const [win, setWin] = useState(120);
  const [on, setOn] = useState<Record<string, boolean>>({ tm: true, tj: true, p: false, feed: true, nivel: false });
  const t1 = s.t;
  const t0 = Math.max(0, t1 - win * 60);
  const pts = s.hist.filter((h) => h.t >= t0);
  const W = 640;
  const H = 200;
  const x = (t: number) => ((t - t0) / Math.max(1, t1 - t0)) * W;
  return (
    <Card
      title="Tendencias"
      right={
        <div className="flex flex-wrap gap-1">
          {[30, 120, 480].map((m) => (
            <Btn key={m} pressed={win === m} onClick={() => setWin(m)}>
              {m < 60 ? `${m} min` : `${m / 60} h`}
            </Btn>
          ))}
        </div>
      }
    >
      <div className="mb-2 flex flex-wrap gap-2 text-xs">
        {SERIES.map((sr) => (
          <label key={sr.key} className="flex items-center gap-1">
            <input type="checkbox" checked={on[sr.key]} onChange={() => setOn({ ...on, [sr.key]: !on[sr.key] })} />
            <span className="inline-block h-2 w-3 rounded" style={{ background: sr.color }} />
            {sr.label} ({sr.lo} a {sr.hi} {sr.unit})
          </label>
        ))}
      </div>
      <svg viewBox={`0 0 ${W} ${H + 18}`} className="w-full rounded-md bg-[#111522]" role="img" aria-label="Gráfico de tendencias del reactor">
        {[0.25, 0.5, 0.75].map((f) => (
          <line key={f} x1={0} x2={W} y1={H * f} y2={H * f} stroke="#2f3648" />
        ))}
        {SERIES.filter((sr) => on[sr.key]).map((sr) => {
          const d = pts
            .map((h, k) => {
              const v = h[sr.key];
              const y = H - ((Math.min(sr.hi, Math.max(sr.lo, v)) - sr.lo) / (sr.hi - sr.lo)) * H;
              return `${k ? "L" : "M"}${x(h.t).toFixed(1)},${y.toFixed(1)}`;
            })
            .join(" ");
          return <path key={sr.key} d={d} fill="none" stroke={sr.color} strokeWidth={1.6} />;
        })}
        <text x={4} y={H + 14} fontSize={11} fill="#9aa5b8">
          {fmtHora(t0)}
        </text>
        <text x={W - 40} y={H + 14} fontSize={11} fill="#9aa5b8">
          {fmtHora(t1)}
        </text>
      </svg>
    </Card>
  );
}

export function Readouts({ s }: { s: State }) {
  const dT = s.tj - s.tm;
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
      <Readout label="Masa TI-204A" value={fmt(tmLeida(s))} unit="°C" alert={s.alarms.some((a) => a.active && a.tag === "TI-204")} />
      <Readout label="Camisa − masa" value={fmt(dT)} unit="°C" alert={Math.abs(dT) > P.dTmax} />
      <Readout label="Presión PI-204" value={fmt(pGauge(s), 3)} unit="bar g" alert={pGauge(s) > 0.5} />
      <Readout label="Adición FI-205" value={fmt(feedIndicado(s), 0)} unit="kg/h" alert={feedIndicado(s) > 720} />
    </div>
  );
}
