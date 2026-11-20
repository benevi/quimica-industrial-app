"use client";

import { useEffect, useRef, useState } from "react";
import * as N from "@/sim/nutsche";
import type { NState, NValve } from "@/sim/nutsche";
import { Gauge, Lcd, MiniTrend, Pipe, Plate, Valve } from "./Equipment";
import { Icon } from "@/components/icons";
import { btn } from "@/components/ui";
import { ValveRow } from "./Valves";
import { Badge, Btn, Card, Readout } from "./ui";

const KEY = "quimica-app:nutsche:v1";
type NAct = (fn: (s: NState) => void) => void;

/** Simulador del filtro-secador Nutsche FD-401 (proceso 2) con modo relevo de turno. */
export function NutscheSim() {
  const [s, setS] = useState<NState | null>(null);
  const [loaded, setLoaded] = useState(false);
  // Una partida guardada que no se puede leer no se borra solo por abrir la página
  const keepStored = useRef(false);
  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        keepStored.current = true;
        setS(N.migrateN(JSON.parse(raw) as NState));
        keepStored.current = false;
      }
    } catch {
      /* partida dañada o sin almacenamiento: se empieza de cero, sin borrar lo guardado */
    }
    setLoaded(true);
  }, []);
  useEffect(() => {
    if (!loaded) return;
    try {
      if (s) {
        keepStored.current = false;
        localStorage.setItem(KEY, JSON.stringify(s));
      } else if (!keepStored.current) localStorage.removeItem(KEY);
    } catch {
      /* sin almacenamiento */
    }
  }, [s, loaded]);

  const act: NAct = (fn) =>
    setS((prev) => {
      if (!prev) return prev;
      const next = structuredClone(prev);
      fn(next);
      return next;
    });

  if (!loaded) return null;
  if (!s) return <Start onStart={(m) => setS(N.newNutsche(m))} />;

  const waiting = !!s.handover && !s.handover.answers;
  const dis = waiting || s.closed;
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 rounded-[var(--radius)] border border-line bg-surface px-4 py-2.5 text-sm">
        <span className="font-mono font-medium">FX-202 · lote {s.lot}</span>
        <Badge tone={s.mode === "relevo" ? "warn" : "neutral"}>{s.mode === "relevo" ? "Relevo de turno" : "Lote nuevo"}</Badge>
        <span className="text-muted">
          Reloj de planta <span className="font-mono text-ink">{N.fmtClock(s.clock)}</span>
        </span>
        <span className="ml-auto" />
        <button
          type="button"
          className={btn.quiet}
          onClick={() => {
            if (window.confirm("¿Empezar otra vez? Se pierde este lote.")) setS(null);
          }}
        >
          Empezar otro lote
        </button>
      </div>

      {s.handover && <Handover s={s} act={act} />}

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]">
        <div className="space-y-4">
          <Card title="Filtro-secador Nutsche FD-401">
            <NutscheSvg s={s} onValve={dis ? undefined : (v) => act((x) => N.toggleValve(x, v))} />
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
              <Readout label="PI-401" value={s.p < 0 ? String(N.mbarAbs(s.p)) : N.fmt(s.p)} unit={s.p < 0 ? "mbar abs" : "barg"} alert={s.p > 1.5} />
              <Readout label="LI-401 líquido" value={String(Math.round(s.liquidL))} unit="L" />
              <Readout label="FQ-403 filtrado" value={String(Math.round(s.filtrateL))} unit="L" />
              <Readout label="FQ-404 lavado" value={String(s.washL)} unit="L" />
              <Readout label="TI-401 camisa" value={String(s.Tj)} unit="°C" alert={s.Tj > 50} />
              <Readout label="TI-402 producto" value={N.fmt(N.productT(s))} unit="°C" />
              <Readout label="Agitador" value={s.agitDown ? (s.agitOn ? "abajo · gira" : "abajo") : "arriba"} />
              <Readout label="Horas de secado" value={String(s.hours)} unit="h" />
            </div>
            <div className="mt-3">
              <MiniTrend
                points={s.history}
                series={[
                  { key: "Tp", label: "producto TI-402", color: "#fbbf24", max: 80, unit: "°C", width: 3 },
                  { key: "Tj", label: "camisa TI-401", color: "#f87171", max: 80, unit: "°C" },
                  { key: "p", label: "presión PI-401", color: "#a5b4fc", max: 2.5, unit: "barg", fmt: (v) => N.fmt(v) },
                ]}
                band={[45, 50]}
                empty="La gráfica empieza con la primera operación."
              />
            </div>
          </Card>
          <Controls s={s} act={act} dis={dis} />
        </div>
        <div className="space-y-4">
          <StepsSheet s={s} />
          <Card
            title={
              <>
                Válvulas{" "}
                <span lang="en" className="text-sm font-normal text-muted">
                  valves
                </span>
              </>
            }
            right={<span className="text-xs text-muted">Verde abierta · rojo cerrada</span>}
          >
            <ul className="grid gap-2">
              {N.N_VALVE_IDS.map((v) => (
                <ValveRow key={v} v={v} name={N.N_VALVES[v]} open={s.valves[v]} disabled={dis} onToggle={() => act((x) => N.toggleValve(x, v))} />
              ))}
            </ul>
          </Card>
          <LogCard s={s} />
        </div>
      </div>
      {s.closed && <Review s={s} />}
    </div>
  );
}

function Start({ onStart }: { onStart: (m: NState["mode"]) => void }) {
  return (
    <section aria-labelledby="nu-start" className="max-w-3xl rounded-[var(--radius)] border border-line bg-surface p-6 sm:p-8">
      <h2 id="nu-start" className="t-h2">
        Aísla un lote nuevo de principio a fin
      </h2>
      <p className="mt-2 max-w-[60ch] leading-relaxed text-muted">
        La suspensión ya cristalizada está en el R-201. Cárgala en el FD-401, fíltrala con nitrógeno, lava la torta, sóplala, sécala a vacío y
        descárgala. La hoja de producción marca en ámbar el paso que te toca.
      </p>
      <button type="button" onClick={() => onStart("normal")} className={`${btn.primary} mt-5 px-5 py-3 text-[15px]`}>
        Empezar el lote
        <Icon name="arrow" className="h-4 w-4" />
      </button>
      <div className="mt-8 border-t border-line pt-5 text-sm">
        <p className="max-w-[60ch] leading-relaxed">
          <span className="font-medium">¿Quieres un reto?</span>{" "}
          <span className="text-muted">
            A las 14:00 el turno de mañana te deja el FD-401 a medias con una nota. Antes de tocar nada, comprueba si la nota cuadra con el
            registro y con el panel.
          </span>
        </p>
        <button type="button" onClick={() => onStart("relevo")} className={`${btn.secondary} mt-3`}>
          Recibir un relevo de turno
        </button>
      </div>
    </section>
  );
}

function Handover({ s, act }: { s: NState; act: NAct }) {
  const [ans, setAns] = useState<Record<string, string>>({});
  const done = s.handover?.answers;
  const shown = done ?? ans;
  return (
    <section className="relative overflow-hidden rounded-[var(--radius)] border border-signal bg-surface p-5 pl-7">
      {!done && <span aria-hidden className="absolute inset-y-0 left-0 w-1.5 bg-signal" />}
      <p className="text-sm text-muted">{done ? "Relevo recibido" : "Qué hacer ahora"}</p>
      <h2 className="t-h3 mt-0.5">
        Relevo de turno · <span className="font-mono">20/11 14:00</span>
      </h2>
      <div className="mt-3 grid gap-4 lg:grid-cols-[18rem_minmax(0,1fr)]">
        <div className="h-fit rotate-[-1deg] rounded-md border border-[#e5d9a8] bg-[#fef9c3] p-3 text-[#1f2937] shadow-sm" style={{ fontFamily: "'Comic Sans MS', 'Segoe Print', cursive" }}>
          <div className="text-xs text-[#92400e]">Nota del turno de mañana</div>
          <ul className="mt-1 space-y-1 text-sm">
            {N.HANDOVER_NOTE.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
          <div className="mt-2 text-right text-xs">— OP turno mañana</div>
        </div>
        <div className="space-y-3 text-sm">
          {!done && <p>Antes de tocar nada, compara la nota con el registro de la derecha (pasos firmados) y con el panel del FD-401: válvulas, presión, totalizadores. Luego responde.</p>}
          {N.HANDOVER_QUESTIONS.map((q) => (
            <fieldset key={q.id} className="rounded-md border border-line bg-surface p-3">
              <legend className="px-1 font-medium">{q.q}</legend>
              <div className="space-y-1">
                {q.options.map((o) => {
                  const picked = shown[q.id] === o;
                  const cls = done ? (o === q.correct ? "font-medium text-ok" : picked ? "text-bad line-through" : "text-muted") : "";
                  return (
                    <label key={o} className={`flex items-start gap-2 ${cls}`}>
                      <input type="radio" name={q.id} disabled={!!done} checked={picked} onChange={() => setAns((a) => ({ ...a, [q.id]: o }))} className="mt-1" />
                      <span>{o}</span>
                    </label>
                  );
                })}
              </div>
              {done && <p className="mt-2 rounded-md bg-soft p-2 text-xs">{q.why}</p>}
            </fieldset>
          ))}
          {!done ? (
            <Btn tone="primary" disabled={N.HANDOVER_QUESTIONS.some((q) => !ans[q.id])} onClick={() => act((x) => N.answerHandover(x, ans))}>
              Recibir el turno
            </Btn>
          ) : (
            <p className="font-medium">
              Acertaste {N.HANDOVER_QUESTIONS.filter((q) => done[q.id] === q.correct).length} de {N.HANDOVER_QUESTIONS.length}. Ya tienes el mando: actúa según la hoja.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

function StepsSheet({ s }: { s: NState }) {
  const cur = N.currentStep(s);
  const idx = N.N_STEPS.findIndex((x) => x.id === cur);
  return (
    <section className="rounded-[var(--radius)] border border-line bg-surface">
      <div className="border-b border-line-strong px-4 py-3">
        <p className="text-xs text-muted">
          Hoja de producción · <span className="font-mono">FX-202 · lote {s.lot} · FD-401</span>
        </p>
        <h3 className="t-h3">Aislamiento y secado</h3>
      </div>
      <ol className="px-4 py-2">
        {N.N_STEPS.map((st, i) => {
          const done = s.discharged ? true : i < idx;
          const now = !s.discharged && i === idx;
          return (
            <li key={st.id} aria-current={now ? "step" : undefined} className={`border-b border-dashed border-line py-2 last:border-b-0 ${now ? "-mx-2 rounded-md border border-solid border-signal bg-signal-soft px-2" : ""}`}>
              <div className="flex items-baseline justify-between gap-2 text-sm">
                <span className="font-medium">
                  {st.title}
                  {now && <span className="ml-2 text-xs font-medium text-ink">· te toca</span>}
                </span>
                {done && (
                  <span className="inline-flex items-center gap-1 text-xs text-ok">
                    <Icon name="check" className="h-3.5 w-3.5" /> hecho
                  </span>
                )}
              </div>
              <div className="text-xs text-muted">{st.spec}</div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

function Controls({ s, act, dis }: { s: NState; act: NAct; dis: boolean }) {
  const [said, setSaid] = useState("");
  const row = "flex flex-wrap items-center gap-2";
  return (
    <Card title="Mandos">
      <div className="space-y-3 text-sm">
        <div className={row}>
          <span className="w-36 font-medium">Carga</span>
          <Btn disabled={dis || s.r201L <= 0} onClick={() => act((x) => N.transfer(x))}>Transferir 200 L</Btn>
          <span className="text-xs text-muted">quedan {s.r201L} L en el R-201</span>
        </div>
        <div className={row}>
          <span className="w-36 font-medium">Regulador N₂ PCV-402</span>
          {[0, 0.5, 1, 1.5, 2.5].map((v) => (
            <Btn key={v} pressed={s.sp === v} disabled={dis} onClick={() => act((x) => N.setSp(x, v))}>{N.fmt(v)} barg</Btn>
          ))}
        </div>
        <div className={row}>
          <span className="w-36 font-medium">Filtrar / soplar</span>
          <Btn disabled={dis || s.cakeL <= 0 || s.discharged} onClick={() => act((x) => N.filterStep(x))}>{s.liquidL > 0 ? "Filtrar 10 min" : "Soplar N₂ 10 min"}</Btn>
          <span className="w-36 font-medium sm:ml-4">Lavado</span>
          <Btn disabled={dis || s.washes >= 2 || s.cakeL <= 0} onClick={() => act((x) => N.wash(x))}>Añadir 100 L de etanol frío</Btn>
        </div>
        <div className={row}>
          <span className="w-36 font-medium">Camisa TI-401</span>
          {[40, 45, 50, 55, 60, 70].map((t) => (
            <Btn key={t} pressed={s.Tj === t} disabled={dis} onClick={() => act((x) => N.setTj(x, t))}>{t} °C</Btn>
          ))}
        </div>
        <div className={row}>
          <span className="w-36 font-medium">Agitador</span>
          <Btn disabled={dis || !s.agitDown} onClick={() => act((x) => N.setAgit(x, false, false))}>Subir</Btn>
          <Btn disabled={dis || s.agitDown} onClick={() => act((x) => N.setAgit(x, true, false))}>Bajar</Btn>
          <Btn pressed={s.agitOn} disabled={dis || !s.agitDown} onClick={() => act((x) => N.setAgit(x, true, !x.agitOn))}>{s.agitOn ? "Parar giro" : "Girar a ratos"}</Btn>
        </div>
        <div className={row}>
          <span className="w-36 font-medium">Secado</span>
          <Btn disabled={dis || s.discharged} onClick={() => act(N.dryHour)}>Secar 1 hora</Btn>
          <Btn disabled={dis || s.hours === 0 || s.discharged} onClick={() => act(N.lodSample)}>Muestra de LOD</Btn>
          {s.samples.length > 0 && (
            <span className="text-xs">
              Último LOD: <span className="font-mono">{N.fmt(s.samples[s.samples.length - 1].value, 2)} %</span>{" "}
              {s.samples[s.samples.length - 1].value <= 0.5 ? <Badge tone="ok">Cumple</Badge> : <Badge tone="bad">No cumple</Badge>}
            </span>
          )}
        </div>
        <div className={row}>
          <span className="w-36 font-medium">Descarga</span>
          <Btn disabled={dis || s.discharged || s.hours === 0} onClick={() => act(N.discharge)}>Descargar a bidones</Btn>
          {s.discharged && <span className="font-mono">{N.fmt(s.productKg)} kg</span>}
        </div>
        <div className="flex flex-wrap items-center gap-2 border-t border-line pt-3">
          <input value={said} onChange={(e) => setSaid(e.target.value)} placeholder="Qué le cuentas al supervisor" className="min-w-0 flex-1 rounded-md border border-line-strong bg-surface px-2.5 py-1.5" aria-label="Mensaje al supervisor" />
          <Btn disabled={dis || !said.trim()} onClick={() => { const t = said.trim(); act((x) => N.tellSupervisor(x, t)); setSaid(""); }}>Avisar al supervisor</Btn>
          <Btn tone="danger" disabled={dis || !s.discharged} onClick={() => act(N.closeBatch)}>Cerrar el lote</Btn>
        </div>
      </div>
    </Card>
  );
}

function LogCard({ s }: { s: NState }) {
  const items = [...s.log].reverse().slice(0, 14);
  return (
    <Card title="Registro de eventos">
      <ul className="max-h-72 space-y-1 overflow-auto text-xs">
        {items.map((l, i) => (
          <li key={i} className={l.who === "OP" ? "text-muted" : "text-ink"}>
            <span className="font-mono text-muted">{N.fmtClock(l.t).slice(6)}</span> · <strong>{l.who}</strong>: {l.text}
          </li>
        ))}
      </ul>
    </Card>
  );
}

function Review({ s }: { s: NState }) {
  const res = N.results(s);
  return (
    <Card title="Revisión de QA y resultados del laboratorio">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <h4 className="mb-2 text-sm font-semibold">Observaciones</h4>
          {s.findings.length === 0 ? (
            <p className="text-sm text-ok">Sin observaciones. Lote aislado según la hoja.</p>
          ) : (
            <ul className="space-y-2 text-sm">
              {s.findings.map((f) => (
                <li key={f.text} className="flex gap-2">
                  <span className="shrink-0">
                    <Badge tone={f.sev === "crítico" ? "bad" : f.sev === "mayor" ? "warn" : "neutral"}>{f.sev}</Badge>
                  </span>
                  <span>{f.text}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <h4 className="mb-2 text-sm font-semibold">Análisis del producto · {N.fmt(s.productKg)} kg</h4>
          <table className="w-full text-sm">
            <tbody>
              {res.map((r) => (
                <tr key={r.name} className="border-b border-line">
                  <td className="py-1">{r.name}</td>
                  <td className="py-1 text-xs text-muted">{r.spec}</td>
                  <td className="py-1 font-mono">{r.value}</td>
                  <td className="py-1">{r.ok ? <Badge tone="ok">Cumple</Badge> : <Badge tone="bad">No cumple</Badge>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  );
}

/** Dibujo del Nutsche (azul, como los de una planta de API) en corte: torta, líquido, agitador, placa filtrante y líneas. */
function NutscheSvg({ s, onValve }: { s: NState; onValve?: (v: NValve) => void }) {
  const plateY = 262;
  const cakeH = (s.cakeL / 200) * 34;
  const cakeTop = plateY - cakeH;
  const liqH = Math.min(150, (s.liquidL / 700) * 150);
  const liqTop = cakeTop - liqH;
  const washing = s.washes > 0 && s.liquidL > 0 && s.liquidL <= 100;
  const n2Flow = s.valves["XV-402"] && s.p > 0.2;
  const filtFlow = s.valves["XV-403"] && n2Flow && s.liquidL > 0;
  const jacket = s.Tj > 50 ? "#dc2626" : s.Tj >= 45 ? "#f97316" : "#94a3b8";
  const wet = Math.min(1, s.lod / 30);
  const cake = `rgb(${Math.round(255 - 12 * wet)},${Math.round(252 - 30 * wet)},${Math.round(240 - 70 * wet)})`;
  const bladeY = s.agitDown ? cakeTop + Math.min(14, cakeH / 2) : 130;
  const click = (v: NValve) => (onValve ? { onClick: () => onValve(v), style: { cursor: "pointer" } } : {});
  return (
    <svg viewBox="0 0 520 380" className="w-full rounded-lg" role="img" aria-label={`FD-401: ${Math.round(s.liquidL)} L de líquido, presión ${N.fmt(s.p)} barg`}>
      <defs>
        <linearGradient id="fd-blue" x1="0" x2="1">
          <stop offset="0" stopColor="#1d4ed8" />
          <stop offset="0.45" stopColor="#3b82f6" />
          <stop offset="1" stopColor="#1e3a8a" />
        </linearGradient>
        <clipPath id="fd-in">
          <rect x={150} y={96} width={220} height={plateY - 96} />
        </clipPath>
      </defs>
      <rect width="520" height="380" rx="12" fill="#eef2f5" />
      {/* R-201 */}
      <rect x={14} y={70} width={60} height={120} rx={26} fill="#e2e8f0" stroke="#94a3b8" />
      <rect x={18} y={186 - (s.r201L / 800) * 110} width={52} height={(s.r201L / 800) * 110} rx={6} fill="#fde7b0" />
      <text x={44} y={206} textAnchor="middle" fontSize={10} fill="#334155">R-201</text>
      <Pipe d="M44 70 V40 H190 V92" flow={s.valves["XV-401"] && s.r201L > 0} />
      <g {...click("XV-401")}><Valve x={110} y={40} open={s.valves["XV-401"]} label="XV-401" /></g>
      {/* N₂ */}
      <Pipe d="M14 18 H230 V92" flow={n2Flow} color="#cbd5e1" />
      <text x={16} y={12} fontSize={9} fill="#334155">N₂</text>
      <g {...click("XV-402")}><Valve x={150} y={18} open={s.valves["XV-402"]} label="XV-402" /></g>
      {/* etanol de lavado */}
      <Pipe d="M300 18 H270 V92" flow={s.valves["XV-404"] && washing} color="#7dd3fc" />
      <text x={304} y={22} fontSize={9} fill="#334155">etanol frío</text>
      <g {...click("XV-404")}><Valve x={286} y={18} open={s.valves["XV-404"]} label="XV-404" /></g>
      {/* vacío */}
      <Pipe d="M330 92 V60 H430 V74" flow={s.valves["XV-405"] && s.p < 0} color="#a5b4fc" />
      <g {...click("XV-405")}><Valve x={385} y={60} open={s.valves["XV-405"]} label="XV-405" /></g>
      <rect x={418} y={74} width={24} height={40} rx={6} fill="#c3ccd3" stroke="#7d868e" />
      <text x={430} y={126} textAnchor="middle" fontSize={9} fill="#334155">condensador</text>
      {/* camisa */}
      <path d={`M140 100 V${plateY + 6} H380 V100`} fill="none" stroke={jacket} strokeWidth={8} opacity={0.55} />
      {/* cuerpo */}
      <rect x={146} y={92} width={228} height={plateY - 92 + 30} rx={8} fill="url(#fd-blue)" stroke="#172554" strokeWidth={2} />
      <ellipse cx={260} cy={94} rx={114} ry={16} fill="#2f6fd6" stroke="#172554" />
      {/* ventana de corte */}
      <rect x={150} y={110} width={220} height={plateY - 110} fill="#e0e7ff" stroke="#172554" />
      <g clipPath="url(#fd-in)">
        {s.liquidL > 0 && <rect x={150} y={liqTop} width={220} height={liqH} fill={washing ? "#bae6fd" : "#fcd9a0"} opacity={0.85} />}
        {s.cakeL > 0 && !s.discharged && (
          <>
            <rect x={150} y={cakeTop} width={220} height={cakeH} fill={cake} stroke="#d6cfb8" />
            {s.cracked && <path d={`M180 ${cakeTop} l6 10 l-5 8 l8 ${cakeH - 18} M250 ${cakeTop} l-4 12 l7 9 l-3 ${cakeH - 21} M320 ${cakeTop} l5 9 l-6 10 l4 ${cakeH - 19}`} stroke="#92400e" strokeWidth={2} fill="none" />}
            {s.lumps && [175, 215, 262, 300, 345].map((x, i) => <circle key={x} cx={x} cy={cakeTop + 6 + (i % 2) * 8} r={6} fill="#f5e6c4" stroke="#c2a878" />)}
          </>
        )}
      </g>
      {/* placa filtrante y fondo */}
      <line x1={150} y1={plateY} x2={370} y2={plateY} stroke="#334155" strokeWidth={3} strokeDasharray="6 3" />
      {/* agitador */}
      <rect x={244} y={50} width={32} height={22} rx={3} fill="#374151" />
      <line x1={260} y1={72} x2={260} y2={bladeY} stroke="#64748b" strokeWidth={5} />
      <path d={`M190 ${bladeY} L330 ${bladeY}`} stroke="#475569" strokeWidth={6} strokeLinecap="round">
        {s.agitOn && <animateTransform attributeName="transform" type="scale" values="1 1;0.2 1;1 1" dur="2.4s" repeatCount="indefinite" additive="sum" />}
      </path>
      <text x={286} y={66} fontSize={9} fill="#334155">{s.agitDown ? "▼ abajo" : "▲ arriba"}</text>
      {/* filtrado */}
      <Pipe d={`M260 ${plateY + 30} V350 H470`} flow={filtFlow} color="#fcd34d" />
      <g {...click("XV-403")}><Valve x={330} y={350} open={s.valves["XV-403"]} label="XV-403" /></g>
      <text x={470} y={342} textAnchor="end" fontSize={9} fill="#334155">aguas madres</text>
      {/* descarga lateral */}
      <Pipe d={`M146 ${plateY - 10} H96 V320`} flow={s.discharged && s.valves["XV-406"]} color="#fff7e0" />
      <g {...click("XV-406")}><Valve x={118} y={plateY - 10} open={s.valves["XV-406"]} label="XV-406" /></g>
      <rect x={74} y={320} width={44} height={40} rx={4} fill="#1e3a8a" opacity={0.85} />
      <text x={96} y={344} textAnchor="middle" fontSize={9} fill="#fff">bidón</text>
      {/* presión */}
      <Gauge cx={470} cy={180} r={26} value={Math.max(0, s.p)} max={3} red={1.5} label="barg" />
      <Lcd x={424} y={212} w={92} label="PI-401" value={s.p < 0 ? `${N.mbarAbs(s.p)} mbar` : `${N.fmt(s.p)} barg`} alert={s.p > 1.5} />
      <Plate x={260} y={plateY + 52}>FD-401</Plate>
    </svg>
  );
}
