"use client";

import { useState } from "react";
import * as E from "@/sim/engine";
import type { MaterialId, Sim } from "@/sim/engine";
import { Icon } from "@/components/icons";
import { Badge, Btn, Card, Readout } from "./ui";
import { Trend, Vessel } from "./Reactor";
import { CentrifugeSvg, DryerSvg, FilterSvg, MiniTrend } from "./Equipment";
import type { Act } from "./Sheet";

const n1 = (x: number) => E.fmtNum(x, 1);
const n2 = (x: number) => E.fmtNum(x, 2);

type P = { s: Sim; act: Act; active: boolean; running: boolean; setRunning: (b: boolean) => void; speed: number; setSpeed: (n: number) => void };

export function PanelPrevias({ s, act, active }: P) {
  return (
    <div className="space-y-4">
      <Card title="Etiqueta de estado del reactor R-101">
        <div className="rounded-md border border-ok bg-ok-soft p-3 text-sm">
          <div className="font-mono text-base font-medium text-ok">Limpio</div>
          <div>Producto anterior: FX-101, lote 26-0146</div>
          <div>Limpieza terminada: 16/11 14:00 · firmado OP2 / verificado SUP</div>
          <div>Tiempo limpio máximo: 72 h</div>
        </div>
        <p className="mt-2 text-xs text-muted">Ahora son las {E.fmtTime(s.clock).slice(6)} del 18/11. Calcula si sigue dentro del tiempo limpio.</p>
      </Card>
      <Card title="Verificación diaria de báscula">
        <p className="mb-3 text-sm text-muted">Coloca la pesa patrón de 50,00 kg. Tolerancia: ±0,10 kg. Si no cumple, la báscula no se usa.</p>
        <div className="flex flex-wrap gap-3">
          {(["B-05", "B-06"] as const).map((b) => (
            <div key={b} className="rounded-md border border-line p-3">
              <div className="mb-2 text-sm font-medium">Báscula {b}</div>
              {s.scaleUsed === b || s.audit.some((a) => a.what.includes(`báscula ${b}`)) ? (
                <Readout label="Lectura con pesa de 50,00 kg" value={n2(s.scaleReading[b])} unit="kg" />
              ) : (
                <div className="h-[58px]" />
              )}
              <div className="mt-2">
                <Btn disabled={!active || s.closed} onClick={() => act((x) => E.chooseScale(x, b))}>
                  {s.scaleUsed === b ? "En uso" : "Verificar y usar"}
                </Btn>
              </div>
            </div>
          ))}
        </div>
      </Card>
      <Card title="Servicios de planta">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="Glicol" value="−8" unit="°C" />
          <Readout label="Vapor" value="3,0" unit="bar g" />
          <Readout label="Nitrógeno" value="6,1" unit="bar g" />
          <Readout label="Vacío" value="OK" />
        </div>
      </Card>
    </div>
  );
}

export function PanelDispensacion({ s, act, active }: P) {
  const ids = Object.keys(E.MATERIALS) as MaterialId[];
  return (
    <div className="space-y-4">
      {!s.scaleUsed && <p className="rounded-md bg-warn-soft p-3 text-sm">Primero verifica una báscula en la etapa 1.</p>}
      {ids.map((m) => {
        const mat = E.MATERIALS[m];
        const shown = E.scaleDisplay(s, m);
        const verified = s.verifications[m] != null;
        const dis = !active || !s.scaleUsed || verified || s.closed;
        return (
          <Card key={m} title={mat.name} right={verified ? <Badge tone="ok">Verificado</Badge> : <Badge>Pendiente</Badge>}>
            <div className="mb-3 space-y-1.5">
              {mat.lots.map((l) => (
                <label key={l.lot} className="flex items-center gap-2 text-sm">
                  <input type="radio" name={`lot-${m}`} disabled={dis} checked={s.lotsUsed[m] === l.lot} onChange={() => act((x) => E.selectLot(x, m, l.lot))} />
                  <span className="font-mono">{l.lot}</span>
                  <Badge tone={l.status === "Aprobado" ? "ok" : "bad"}>{l.status}</Badge>
                  <span className="text-xs text-muted">{l.note}</span>
                </label>
              ))}
            </div>
            <div className="flex flex-wrap items-end gap-3">
              <Readout label={`Báscula ${s.scaleUsed ?? "—"}`} value={n2(shown)} unit="kg" />
              <div className="text-xs text-muted">
                Objetivo {n2(mat.target)} ± {n2(mat.tol)} kg
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {(m === "se" ? [0.1, 0.01] : [10, 1, 0.1]).map((d) => (
                <Btn key={`+${d}`} disabled={dis} onClick={() => act((x) => E.dose(x, m, d))}>+{E.fmtNum(d, d < 0.1 ? 2 : d < 1 ? 1 : 0)}</Btn>
              ))}
              {(m === "se" ? [0.01] : [1, 0.1]).map((d) => (
                <Btn key={`-${d}`} disabled={dis} onClick={() => act((x) => E.dose(x, m, -d))}>−{E.fmtNum(d, d < 0.1 ? 2 : d < 1 ? 1 : 0)}</Btn>
              ))}
              <span className="mx-1" />
              <Btn disabled={dis} onClick={() => act((x) => void E.requestVerification(x, m))}>
                Pedir verificación
              </Btn>
            </div>
            <p className="mt-2 text-xs text-muted">Registra en la hoja el lote y el peso que marca la báscula; después pide la verificación.</p>
          </Card>
        );
      })}
    </div>
  );
}

export function PanelCarga({ s, act, active }: P) {
  const dis = !active || s.closed;
  return (
    <div className="space-y-4">
      <Card title="Reactor R-101">
        <div className="flex flex-wrap items-center gap-4">
          <Vessel name="R-101" T={s.reactor.T} Tj={s.reactor.Tj} levelPct={(s.water + (s.afCharged ? 80 : 0)) / 6} agit={s.reactor.agit} />
          <div className="grid min-w-[15rem] flex-1 grid-cols-2 gap-2">
            <Readout label="FQ-101 agua cargada" value={String(s.water)} unit="L" />
            <Readout label="AI-101 oxígeno" value={n1(s.o2)} unit="%" alert={s.o2 > 2} />
            <Readout label="PI-101 presión (abs.)" value={s.inertStep === "vacio" ? "200" : String(Math.round(1013 + s.p101 * 1000))} unit="mbar" alert={s.p101 >= 0.3} />
            <Readout label="Agitador" value={s.reactor.agit ? "Marcha" : "Paro"} />
          </div>
        </div>
      </Card>
      <Card title="Acciones">
        <ol className="list-decimal space-y-3 pl-5 text-sm">
          <li>
            Abrir la XV-101 y cargar 300 L de agua purificada. Cerrar la XV-101.
            <div className="mt-1 flex flex-wrap gap-1.5">
              {[100, 10, 1].map((l) => (
                <Btn key={l} disabled={dis} onClick={() => act((x) => E.chargeWater(x, l))}>+{l} L</Btn>
              ))}
            </div>
          </li>
          <li>
            Arrancar el agitador.
            <div className="mt-1">
              <Btn disabled={dis} onClick={() => act((x) => E.toggleAgit(x, !x.reactor.agit))}>{s.reactor.agit ? "Parar agitador" : "Arrancar agitador"}</Btn>
            </div>
          </li>
          <li>
            Inertizar con ciclos de vacío y nitrógeno hasta O₂ ≤ 2,0 %. Cada ciclo: abrir XV-103, hacer vacío, cerrar XV-103; abrir XV-102, meter N₂, cerrar XV-102. Nunca las dos abiertas a la vez.
            <div className="mt-1 flex flex-wrap gap-1.5">
              <Btn disabled={dis || s.inertStep === "vacio"} onClick={() => act(E.inertVacuum)}>Hacer vacío (XV-103)</Btn>
              <Btn disabled={dis || s.inertStep !== "vacio"} onClick={() => act(E.inertN2)}>Romper con N₂ (XV-102)</Btn>
              <span className="self-center text-xs text-muted">Ciclos hechos: {s.inertCycles}</span>
            </div>
          </li>
          <li>
            Cargar el 4-aminofenol pesado por la estación de carga.
            <div className="mt-1 flex flex-wrap gap-1.5">
              <Btn disabled={dis || s.afCharged} onClick={() => act((x) => E.chargeAF(x))}>{s.afCharged ? "Cargado" : "Cargar sólido"}</Btn>
              {s.events.tierra?.active && s.events.tierra.resolved == null && s.events.tierra.notified == null && !s.afCharged && (
                <Btn tone="danger" disabled={dis} onClick={() => act((x) => E.chargeAF(x, true))}>
                  Cargar igualmente, sin continuidad
                </Btn>
              )}
            </div>
          </li>
        </ol>
      </Card>
    </div>
  );
}

export function PanelReaccion({ s, act, active, running, setRunning, speed, setSpeed }: P) {
  const r = s.reactor;
  const total = E.aaTotalL(s);
  const [sp, setSp] = useState(String(r.sp));
  const dis = !active || s.closed;
  const ready = s.ipc.filter((i) => i.ready <= s.clock);
  const pending = s.ipc.filter((i) => i.ready > s.clock);
  const addDone = r.addEnd != null;
  return (
    <div className="space-y-4">
      <Card
        title="Reactor R-101"
        right={
          <div className="flex items-center gap-1.5">
            <Btn pressed={running} disabled={dis} onClick={() => setRunning(!running)}>
              {running ? "Pausa" : "▶ Marcha"}
            </Btn>
            <select aria-label="Velocidad" value={speed} onChange={(e) => setSpeed(Number(e.target.value))} className="rounded-md border border-line-strong bg-surface px-1.5 py-1.5 text-sm">
              <option value={1}>1 min/s</option>
              <option value={4}>4 min/s</option>
              <option value={10}>10 min/s</option>
            </select>
          </div>
        }
      >
        <div className="flex flex-wrap items-center gap-4">
          <Vessel name="R-101" T={r.T} Tj={r.Tj} levelPct={(s.water + 80 + r.added) / 6} agit={r.agit} />
          <div className="grid min-w-[15rem] flex-1 grid-cols-2 gap-2">
            <Readout label="TI-101 producto" value={n1(E.tiMasa(s))} unit="°C" alert={!addDone && E.tiMasa(s) > 40} />
            <Readout label="TI-103 producto (respaldo)" value={n1(r.T)} unit="°C" />
            <Readout label="TI-102 camisa" value={n1(r.Tj)} unit="°C" />
            <Readout label={`Anhídrido añadido (de ${n1(total)} L)`} value={n1(r.added)} unit="L" />
            <Readout label="Reloj" value={E.fmtTime(s.clock).slice(6)} />
          </div>
        </div>
        <div className="mt-3">
          <Trend points={r.history} limitHigh={addDone ? undefined : 40} band={addDone ? [75, 85] : undefined} />
        </div>
        {(() => {
          // Aviso anticipado: a qué ritmo sube la temperatura durante la adición
          const h = r.history;
          if (addDone || r.interlock || h.length < 4) return null;
          const a = h[h.length - 4];
          const b = h[h.length - 1];
          const slope = (b.T - a.T) / Math.max(1, b.t - a.t);
          if (slope <= 0.4 || b.T >= 40) return null;
          const mins = Math.max(0, (40 - b.T) / slope);
          return (
            <div className="mt-3 flex items-start gap-3 rounded-md border border-line bg-warn-soft p-3 text-sm text-ink" role="status">
              <Icon name="hazard" className="h-5 w-5 shrink-0" />
              <div>
                <strong>La temperatura sube {E.fmtNum(slope, 1)} °C/min.</strong> A este ritmo pasarás de 40 °C en unos {Math.round(mins)} min. Baja la velocidad de adición.
              </div>
            </div>
          );
        })()}
      </Card>

      <Card title="Mandos">
        <div className="space-y-3 text-sm">
          <div className="flex flex-wrap items-center gap-2">
            <span className="w-44">Consigna TIC-101 (°C)</span>
            <input value={sp} onChange={(e) => setSp(e.target.value)} className="w-20 rounded-md border border-line-strong bg-surface px-2 py-1 font-mono" aria-label="Consigna de temperatura" />
            <Btn disabled={dis} onClick={() => { const v = E.parseNum(sp); if (v != null) act((x) => E.setSP(x, v)); }}>Aplicar</Btn>
            <span className="text-xs text-muted">actual {n1(r.sp)} °C · la hoja permite como máximo 85 °C</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="w-44">Adición FV-103 (L/min)</span>
            <div className="inline-flex overflow-hidden rounded-md border border-line-strong" role="group" aria-label="Velocidad de adición">
              {[0, 1, 2, 3, 4, 5].map((v) => (
                <button
                  key={v}
                  type="button"
                  disabled={dis || addDone}
                  onClick={() => act((x) => E.setRate(x, v))}
                  aria-pressed={r.rate === v}
                  className={`px-3 py-1.5 font-mono text-sm disabled:opacity-40 ${r.rate === v ? (v === 0 ? "bg-bad-soft font-medium text-bad" : "bg-accent-soft font-medium text-accent") : "bg-surface hover:bg-soft"} ${v ? "border-l border-line-strong" : ""}`}
                >
                  {v === 0 ? "■ Cerrar" : v}
                </button>
              ))}
            </div>
          </div>
          {r.rate > 0 && !s.valves["XV-104"] && !addDone && (
            <p className="rounded-md bg-bad-soft px-2 py-1 text-xs text-bad">La FV-103 está abierta, pero no hay caudal: la válvula manual XV-104 de salida del D-101 está cerrada.</p>
          )}
          <div className="flex flex-wrap items-center gap-2">
            <span className="w-44">Agitador</span>
            <Btn disabled={dis} onClick={() => act((x) => E.toggleAgit(x, !x.reactor.agit))}>{r.agit ? "Parar" : "Arrancar"}</Btn>
            {r.interlock && (
              <Btn tone="danger" disabled={dis || r.T >= 35} onClick={() => act(E.resetInterlock)} title="Solo cuando T < 35 °C">
                Rearmar enclavamiento
              </Btn>
            )}
          </div>
          <p className="text-xs text-muted">
            Hoja: adicionar el anhídrido en ≥ 30 min con T ≤ 40 °C. Después, consigna 80 °C y mantener 75–85 °C al menos 60 min. IPC: 4-aminofenol ≤ 0,50 %; si no cumple, mantener 30 min y repetir.
          </p>
        </div>
      </Card>

      <Card title="IPC de fin de reacción">
        <div className="flex flex-wrap items-center gap-2">
          <Btn disabled={dis || !addDone || pending.length > 0} onClick={() => act(E.requestIPC)}>Tomar muestra</Btn>
          <span className="text-xs text-muted">El laboratorio tarda 20 min (reloj del simulador). Minutos a 75–85 °C: {r.inRange}</span>
        </div>
        <ul className="mt-2 space-y-1 text-sm">
          {pending.map((i) => (
            <li key={i.requested}>Muestra de {E.fmtTime(i.requested)}: en análisis…</li>
          ))}
          {ready.map((i) => (
            <li key={i.requested}>
              Muestra de {E.fmtTime(i.requested)}: <strong className="font-mono">{n2(i.value)} % área</strong>{" "}
              {i.value <= 0.5 ? <Badge tone="ok">Cumple</Badge> : <Badge tone="bad">No cumple</Badge>}
            </li>
          ))}
        </ul>
      </Card>

      {r.alarms.length > 0 && (
        <Card title="Alarmas">
          <ul className="space-y-1 text-sm">
            {r.alarms.slice().reverse().map((a, i) => (
              <li key={i} className="text-bad">
                {E.fmtTime(a.time).slice(6)} · {a.text}
              </li>
            ))}
          </ul>
        </Card>
      )}
    </div>
  );
}

export function PanelFiltracion({ s, act, active }: P) {
  const f = s.filter;
  const dis = !active || s.closed;
  const broken = s.incidents.some((i) => i.kind === "rotura_cartucho" && !i.redone);
  return (
    <div className="space-y-4">
      <Card title="Transferencia de R-101 a R-102 por el filtro F-301">
        <div className="flex flex-wrap items-start gap-4">
          <FilterSvg dp={f.dp} progress={f.progress} running={f.running} v105={s.valves["XV-105"]} v106={s.valves["XV-106"]} broken={broken} done={f.done} />
          <div className="min-w-[14rem] flex-1 space-y-3">
            <p className="text-sm text-muted">La solución caliente pasa por un cartucho de 1 µm que retiene las partículas. Cuanto más se ensucia, más sube la presión diferencial (ΔP) entre la entrada y la salida.</p>
            <div className="grid grid-cols-2 gap-2">
              <Readout label="PDI-301 ΔP" value={n1(f.dp)} unit="bar" alert={f.dp > 1.5} />
              <Readout label="Transferido" value={`${f.progress}`} unit="%" />
              <Readout label="Cartucho" value={f.changes === 0 ? "CF-5512" : "CF-5531"} />
              <Readout label="Reloj" value={E.fmtTime(s.clock).slice(6)} />
            </div>
            <div className="flex flex-wrap gap-2">
              <Btn disabled={dis || f.done} onClick={() => act(E.filterStep)}>Transferir (+20 %)</Btn>
              <Btn disabled={dis || f.done} onClick={() => act(E.changeCartridge)}>Parar y cambiar cartucho</Btn>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <MiniTrend
            points={f.history}
            series={[
              { key: "dp", label: "ΔP PDI-301", color: "#f97316", max: 2.5, unit: "bar", fmt: (v) => E.fmtNum(v, 1), width: 3 },
              { key: "pct", label: "transferido", color: "#22d3ee", max: 100, unit: "%" },
            ]}
            limit={1.5}
            empty="La gráfica empieza con la primera transferencia."
          />
        </div>
        <p className="mt-2 text-xs text-muted">Límite: ΔP ≤ 1,5 bar. Si se supera, se para, se avisa y se cambia el cartucho según el procedimiento.</p>
      </Card>
    </div>
  );
}

export function PanelCristalizacion({ s, act, active }: P) {
  const c = s.cryst;
  const [seeded, setSeeded] = useState(true);
  const [seedT, setSeedT] = useState("60");
  const [ramp, setRamp] = useState("150");
  const [finalT, setFinalT] = useState("3");
  const [hold, setHold] = useState("60");
  const dis = !active || s.closed || c.done;
  const num = (v: string) => E.parseNum(v) ?? 0;
  return (
    <div className="space-y-4">
      <Card title="Cristalizador R-102">
        <div className="flex flex-wrap items-center gap-4">
          <Vessel name="R-102" T={c.done ? c.finalT : 80} Tj={c.done ? -5 : 80} levelPct={70} agit />
          <div className="flex-1 text-sm text-muted">
            Hoja: enfriar a 58–62 °C, sembrar con la semilla pesada, enfriar a 0–5 °C en ≥ 120 min y mantener ≥ 60 min.
          </div>
        </div>
      </Card>
      <Card title="Programa de cristalización">
        <div className="grid gap-2 text-sm sm:grid-cols-2">
          <label className="flex items-center gap-2"><input type="checkbox" checked={seeded} disabled={dis} onChange={(e) => setSeeded(e.target.checked)} /> Añadir la semilla</label>
          <label className="flex items-center gap-2">T de siembra (°C) <input className="w-20 rounded-md border border-line-strong bg-surface px-2 py-1 font-mono" value={seedT} disabled={dis} onChange={(e) => setSeedT(e.target.value)} /></label>
          <label className="flex items-center gap-2">Rampa hasta T final (min) <input className="w-20 rounded-md border border-line-strong bg-surface px-2 py-1 font-mono" value={ramp} disabled={dis} onChange={(e) => setRamp(e.target.value)} /></label>
          <label className="flex items-center gap-2">T final (°C) <input className="w-20 rounded-md border border-line-strong bg-surface px-2 py-1 font-mono" value={finalT} disabled={dis} onChange={(e) => setFinalT(e.target.value)} /></label>
          <label className="flex items-center gap-2">Mantener (min) <input className="w-20 rounded-md border border-line-strong bg-surface px-2 py-1 font-mono" value={hold} disabled={dis} onChange={(e) => setHold(e.target.value)} /></label>
        </div>
        <div className="mt-3">
          <Btn disabled={dis} onClick={() => act((x) => E.runCrystallization(x, num(seedT), seeded, num(ramp), num(finalT), num(hold)))}>
            Ejecutar programa
          </Btn>
        </div>
        {c.done && (
          <p className="mt-3 text-sm">
            Hecho. Observación al microscopio: {c.quality === "buena" ? "cristales bien formados y homogéneos." : <span className="text-bad">muchos cristales finos y aglomerados.</span>}
          </p>
        )}
      </Card>
    </div>
  );
}

export function PanelCentrifugacion({ s, act, active }: P) {
  const c = s.centri;
  const dis = !active || s.closed;
  const rpm = c.discharged ? 0 : c.spun ? 1200 : c.loaded ? 400 : 0;
  const ml = c.history.length ? c.history[c.history.length - 1].ml : 0;
  return (
    <div className="space-y-4">
      <Card title="Centrífuga C-201">
        <div className="flex flex-wrap items-start gap-4">
          <CentrifugeSvg rpm={rpm} loaded={c.loaded} spun={c.spun} discharged={c.discharged} washes={c.washes} v201={s.valves["XV-201"]} v202={s.valves["XV-202"]} ml={ml} />
          <ol className="min-w-[14rem] flex-1 list-decimal space-y-3 pl-5 text-sm">
            <li>Cargar la suspensión (el cesto gira despacio, unas 400 rpm). <Btn disabled={dis || c.loaded || !s.cryst.done} onClick={() => act((x) => E.centriAction(x, "cargar"))}>{c.loaded ? "Cargada" : "Cargar"}</Btn></li>
            <li>Centrifugar a 1200 rpm y escurrir las aguas madre. <Btn disabled={dis || !c.loaded || c.spun} onClick={() => act((x) => E.centriAction(x, "centrifugar"))}>{c.spun ? "Hecho" : "Centrifugar"}</Btn></li>
            <li>
              Lavar la torta con 50 L de agua fría (dos veces). Lavados hechos: {c.washes}
              <div className="mt-1 flex flex-wrap gap-1.5">
                {[
                  [5, "Agua fría 5 °C"],
                  [25, "Agua de red 25 °C"],
                  [60, "Agua caliente 60 °C"],
                ].map(([t, l]) => (
                  <Btn key={t} disabled={dis || !c.spun || c.discharged} onClick={() => act((x) => E.centriAction(x, "lavar", t as number))}>{l}</Btn>
                ))}
              </div>
            </li>
            <li>Escurrir, frenar y descargar la torta a la báscula. <Btn disabled={dis || !c.spun || c.discharged} onClick={() => act((x) => E.centriAction(x, "descargar"))}>{c.discharged ? "Descargada" : "Descargar"}</Btn></li>
          </ol>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="SI-201 velocidad" value={String(rpm)} unit="rpm" />
          <Readout label="FQ-201 filtrado" value={String(ml)} unit="L" />
          <Readout label="Báscula: torta húmeda" value={c.discharged ? n1(c.wetCake) : "—"} unit={c.discharged ? "kg" : undefined} />
          <Readout label="Reloj" value={E.fmtTime(s.clock).slice(6)} />
        </div>
        <div className="mt-3">
          <MiniTrend
            points={c.history}
            series={[
              { key: "rpm", label: "velocidad", color: "#a78bfa", max: 1500, unit: "rpm", width: 3 },
              { key: "ml", label: "filtrado acumulado", color: "#fbbf24", max: 600, unit: "L" },
            ]}
            empty="La gráfica empieza al cargar la centrífuga."
          />
        </div>
        {s.cryst.quality === "finos" && c.spun && <p className="mt-2 text-sm text-bad">La torta escurre muy despacio: los cristales finos retienen mucho líquido.</p>}
      </Card>
    </div>
  );
}

export function PanelSecado({ s, act, active }: P) {
  const d = s.dryer;
  const dis = !active || s.closed;
  const here = E.SECTIONS[s.section]?.id === "secado" && !s.closed;
  return (
    <div className="space-y-4">
      <Card title="Secadero de vacío SD-301">
        <div className="flex flex-wrap items-start gap-4">
          <DryerSvg loaded={d.loaded} Tj={d.Tj} vacuum={d.vacuum} v301={s.valves["XV-301"]} lod={d.lod} running={here && d.hours > 0} packed={s.pack.done} />
          <div className="min-w-[14rem] flex-1 space-y-3">
            <div className="grid grid-cols-2 gap-2">
              <Readout label="TI-302 camisa" value={String(d.Tj)} unit="°C" alert={d.Tj > 60} />
              <Readout label="PI-301 vacío" value={String(d.loaded && s.valves["XV-301"] ? d.vacuum : 1013)} unit="mbar" alert={d.loaded && s.valves["XV-301"] && d.vacuum > 100} />
              <Readout label="TI-303 producto" value={d.hours ? n1(E.dryerProductT(d)) : d.loaded ? "15,0" : "—"} unit={d.loaded ? "°C" : undefined} />
              <Readout label="Horas de secado" value={String(d.hours)} unit="h" />
              <Readout label="Reloj" value={E.fmtTime(s.clock).slice(6)} />
            </div>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <Btn disabled={dis || d.loaded || !s.centri.discharged} onClick={() => act(E.dryerLoad)}>{d.loaded ? "Cargado" : "Cargar y cerrar tapa"}</Btn>
              <span>T camisa:</span>
              {[50, 55, 60, 70, 80].map((t) => (
                <Btn key={t} pressed={d.Tj === t} disabled={dis} onClick={() => act((x) => E.dryerSet(x, t))}>{t} °C</Btn>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              <Btn disabled={dis || !d.loaded} onClick={() => act(E.dryHour)}>Secar 1 hora</Btn>
              <Btn disabled={dis || !d.loaded || d.hours === 0} onClick={() => act((x) => void E.lodSample(x))}>Tomar muestra de LOD</Btn>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <MiniTrend
            points={d.history}
            series={[
              { key: "Tp", label: "producto TI-303", color: "#fbbf24", max: 100, unit: "°C", width: 3 },
              { key: "Tj", label: "camisa TI-302", color: "#f87171", max: 100, unit: "°C" },
              { key: "vac", label: "presión PI-301", color: "#a5b4fc", max: 1013, unit: "mbar" },
            ]}
            band={[55, 60]}
            empty="La gráfica empieza al cargar el secadero."
          />
        </div>
        <p className="mt-2 text-xs text-muted">Hoja: hacer vacío abriendo la XV-301, T camisa 55–60 °C, vacío ≤ 100 mbar, primer IPC a las 4 h, LOD ≤ 0,5 %.</p>
        <p className="mt-1 text-xs text-muted">Pista de sala de control: mientras la torta está mojada, el agua al evaporarse la mantiene fría (unos 36 °C a 60 mbar). Cuando la temperatura del producto sube y se acerca a la de la camisa, queda poca agua: es el momento de tomar la muestra de LOD, que es la que decide.</p>
      </Card>
      {d.samples.length > 0 && (
        <Card title="Resultados de LOD">
          <ul className="space-y-1 text-sm">
            {d.samples.map((x) => (
              <li key={x.time}>
                {E.fmtTime(x.time)} · <span className="font-mono">{n2(x.value)} %</span> {x.value <= 0.5 ? <Badge tone="ok">Cumple</Badge> : <Badge tone="bad">No cumple</Badge>}
              </li>
            ))}
          </ul>
        </Card>
      )}
    </div>
  );
}

export function PanelEnvasado({ s, act, active }: P) {
  const p = s.pack;
  const dis = !active || s.closed || p.done;
  return (
    <Card title="Descarga, envasado y etiquetado">
      <p className="text-sm text-muted">
        Doble bolsa de polietileno en bidón de cartón, 25 kg por bidón. Rendimiento = kg obtenidos / {E.fmtNum(E.THEORETICAL_KG, 1)} kg teóricos × 100.
      </p>
      <div className="mt-3">
        <Btn disabled={dis || s.dryer.samples.length === 0} onClick={() => act(E.doPack)}>Descargar y envasar</Btn>
      </div>
      {p.done && (
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="Peso neto total" value={n1(p.netKg)} unit="kg" />
          <Readout label="Bidones" value={String(p.drums)} />
          <Readout label="Etiquetas emitidas" value={String(p.labelsIssued)} />
          <Readout label="Destruidas" value={String(p.labelsDestroyed)} />
        </div>
      )}
    </Card>
  );
}
