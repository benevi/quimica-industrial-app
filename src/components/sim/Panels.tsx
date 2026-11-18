"use client";

import { useState } from "react";
import * as E from "@/sim/engine";
import type { MaterialId, Sim } from "@/sim/engine";
import { Badge, Btn, Card, Readout } from "./ui";
import { Trend, Vessel } from "./Reactor";
import type { Act } from "./Sheet";

const n1 = (x: number) => E.fmtNum(x, 1);
const n2 = (x: number) => E.fmtNum(x, 2);

type P = { s: Sim; act: Act; active: boolean; running: boolean; setRunning: (b: boolean) => void; speed: number; setSpeed: (n: number) => void };

export function PanelPrevias({ s, act, active }: P) {
  return (
    <div className="space-y-4">
      <Card title="Etiqueta de estado del reactor R-101">
        <div className="rounded-lg border-2 border-ok bg-ok-soft p-3 text-sm">
          <div className="text-base font-bold tracking-wide text-ok">LIMPIO</div>
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
            <div key={b} className="rounded-lg border border-line p-3">
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
      {!s.scaleUsed && <p className="rounded-lg bg-warn-soft p-3 text-sm">Primero verifica una báscula en la etapa 1.</p>}
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
              <Btn tone="primary" disabled={dis} onClick={() => act((x) => void E.requestVerification(x, m))}>
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
            <Readout label="PI-101 presión" value={s.inertStep === "vacio" ? "200" : "1013"} unit="mbar" />
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
            Inertizar con ciclos de vacío y nitrógeno hasta O₂ ≤ 2,0 %. Cada ciclo: abrir XV-103 → vacío → cerrar XV-103 → abrir XV-102 → N₂ → cerrar XV-102. Nunca las dos abiertas a la vez.
            <div className="mt-1 flex flex-wrap gap-1.5">
              <Btn disabled={dis || s.inertStep === "vacio"} onClick={() => act(E.inertVacuum)}>Hacer vacío (XV-103)</Btn>
              <Btn disabled={dis || s.inertStep !== "vacio"} onClick={() => act(E.inertN2)}>Romper con N₂ (XV-102)</Btn>
              <span className="self-center text-xs text-muted">Ciclos hechos: {s.inertCycles}</span>
            </div>
          </li>
          <li>
            Cargar el 4-aminofenol pesado por la estación de carga.
            <div className="mt-1">
              <Btn disabled={dis || s.afCharged} onClick={() => act(E.chargeAF)}>{s.afCharged ? "Cargado" : "Cargar sólido"}</Btn>
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
            <Btn tone={running ? "default" : "primary"} disabled={dis} onClick={() => setRunning(!running)}>
              {running ? "Pausa" : "▶ Marcha"}
            </Btn>
            <select aria-label="Velocidad" value={speed} onChange={(e) => setSpeed(Number(e.target.value))} className="rounded-md border border-line bg-surface px-1.5 py-1 text-sm">
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
            <Readout label="TI-101 producto" value={n1(r.T)} unit="°C" alert={!addDone && r.T > 40} />
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
            <div className="mt-3 flex items-start gap-3 rounded-lg border border-[#d97706] bg-[#fffbeb] p-3 text-sm text-[#78350f]" role="status">
              <span className="text-xl leading-none">⚠</span>
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
            <input value={sp} onChange={(e) => setSp(e.target.value)} className="w-20 rounded-md border border-line bg-surface px-2 py-1 font-mono" aria-label="Consigna de temperatura" />
            <Btn disabled={dis} onClick={() => { const v = E.parseNum(sp); if (v != null) act((x) => E.setSP(x, v)); }}>Aplicar</Btn>
            <span className="text-xs text-muted">actual {n1(r.sp)} °C</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="w-44">Adición FV-103 (L/min)</span>
            <div className="inline-flex overflow-hidden rounded-lg border border-line" role="group" aria-label="Velocidad de adición">
              {[0, 1, 2, 3, 4, 5].map((v) => (
                <button
                  key={v}
                  type="button"
                  disabled={dis || addDone}
                  onClick={() => act((x) => E.setRate(x, v))}
                  className={`px-3 py-1.5 text-sm font-medium disabled:opacity-40 ${r.rate === v ? (v === 0 ? "bg-[#b91c1c] text-white" : "bg-[#1d4ed8] text-white") : "bg-surface hover:bg-soft"} ${v ? "border-l border-line" : ""}`}
                >
                  {v === 0 ? "■ Cerrar" : v}
                </button>
              ))}
            </div>
          </div>
          {r.rate > 0 && !s.valves["XV-104"] && !addDone && (
            <p className="rounded-md bg-[#fef2f2] px-2 py-1 text-xs text-[#7f1d1d]">La FV-103 está abierta, pero no hay caudal: la válvula manual XV-104 de salida del D-101 está cerrada.</p>
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
  return (
    <div className="space-y-4">
      <Card title="Transferencia R-101 → F-301 → R-102">
        <p className="mb-3 text-sm text-muted">La solución caliente pasa por un cartucho de 1 µm para quitar partículas antes de cristalizar.</p>
        <div className="grid grid-cols-3 gap-2">
          <Readout label="PDI-301 ΔP" value={n1(f.dp)} unit="bar" alert={f.dp > 1.5} />
          <Readout label="Transferido" value={`${f.progress}`} unit="%" />
          <Readout label="Cartucho" value={f.changes === 0 ? "CF-5512" : "CF-5531"} />
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-soft">
          <div className="h-full bg-accent" style={{ width: `${f.progress}%` }} />
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <Btn tone="primary" disabled={dis || f.done} onClick={() => act(E.filterStep)}>Transferir (+20 %)</Btn>
          <Btn disabled={dis || f.done} onClick={() => act(E.changeCartridge)}>Parar y cambiar cartucho</Btn>
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
          <label className="flex items-center gap-2">T de siembra (°C) <input className="w-20 rounded-md border border-line bg-surface px-2 py-1 font-mono" value={seedT} disabled={dis} onChange={(e) => setSeedT(e.target.value)} /></label>
          <label className="flex items-center gap-2">Rampa hasta T final (min) <input className="w-20 rounded-md border border-line bg-surface px-2 py-1 font-mono" value={ramp} disabled={dis} onChange={(e) => setRamp(e.target.value)} /></label>
          <label className="flex items-center gap-2">T final (°C) <input className="w-20 rounded-md border border-line bg-surface px-2 py-1 font-mono" value={finalT} disabled={dis} onChange={(e) => setFinalT(e.target.value)} /></label>
          <label className="flex items-center gap-2">Mantener (min) <input className="w-20 rounded-md border border-line bg-surface px-2 py-1 font-mono" value={hold} disabled={dis} onChange={(e) => setHold(e.target.value)} /></label>
        </div>
        <div className="mt-3">
          <Btn tone="primary" disabled={dis} onClick={() => act((x) => E.runCrystallization(x, num(seedT), seeded, num(ramp), num(finalT), num(hold)))}>
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
  return (
    <Card title="Centrífuga C-201">
      <ol className="list-decimal space-y-3 pl-5 text-sm">
        <li>Cargar la suspensión. <Btn disabled={dis || c.loaded || !s.cryst.done} onClick={() => act((x) => E.centriAction(x, "cargar"))}>{c.loaded ? "Cargada" : "Cargar"}</Btn></li>
        <li>Centrifugar y escurrir las aguas madre. <Btn disabled={dis || !c.loaded || c.spun} onClick={() => act((x) => E.centriAction(x, "centrifugar"))}>{c.spun ? "Hecho" : "Centrifugar"}</Btn></li>
        <li>Lavar la torta con 50 L de agua fría (dos veces). <Btn disabled={dis || !c.spun || c.discharged} onClick={() => act((x) => E.centriAction(x, "lavar"))}>Lavar ({c.washes})</Btn></li>
        <li>Escurrir y descargar la torta a la báscula. <Btn disabled={dis || !c.spun || c.discharged} onClick={() => act((x) => E.centriAction(x, "descargar"))}>{c.discharged ? "Descargada" : "Descargar"}</Btn></li>
      </ol>
      {c.discharged && (
        <div className="mt-3 max-w-xs">
          <Readout label="Báscula: torta húmeda" value={n1(c.wetCake)} unit="kg" />
        </div>
      )}
      {s.cryst.quality === "finos" && c.spun && <p className="mt-2 text-sm text-bad">La torta escurre muy despacio: los cristales finos retienen mucho líquido.</p>}
    </Card>
  );
}

export function PanelSecado({ s, act, active }: P) {
  const d = s.dryer;
  const dis = !active || s.closed;
  return (
    <div className="space-y-4">
      <Card title="Secadero de vacío SD-301">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="T camisa" value={String(d.Tj)} unit="°C" alert={d.Tj > 60} />
          <Readout label="PI-301 vacío" value={String(d.loaded && s.valves["XV-301"] ? d.vacuum : 1013)} unit="mbar" alert={d.loaded && s.valves["XV-301"] && d.vacuum > 100} />
          <Readout label="Horas de secado" value={String(d.hours)} />
          <Readout label="Reloj" value={E.fmtTime(s.clock).slice(6)} />
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
          <Btn disabled={dis || d.loaded || !s.centri.discharged} onClick={() => act(E.dryerLoad)}>{d.loaded ? "Cargado" : "Cargar y cerrar tapa"}</Btn>
          <span className="ml-2">T camisa:</span>
          {[50, 55, 60, 70, 80].map((t) => (
            <Btn key={t} tone={d.Tj === t ? "primary" : "default"} disabled={dis} onClick={() => act((x) => E.dryerSet(x, t))}>{t} °C</Btn>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <Btn tone="primary" disabled={dis || !d.loaded} onClick={() => act(E.dryHour)}>Secar 1 hora</Btn>
          <Btn disabled={dis || !d.loaded || d.hours === 0} onClick={() => act((x) => void E.lodSample(x))}>Tomar muestra de LOD</Btn>
        </div>
        <p className="mt-2 text-xs text-muted">Hoja: hacer vacío abriendo la XV-301, T camisa 55–60 °C, vacío ≤ 100 mbar, primer IPC a las 4 h, LOD ≤ 0,5 %.</p>
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
        <Btn tone="primary" disabled={dis || s.dryer.samples.length === 0} onClick={() => act(E.doPack)}>Descargar y envasar</Btn>
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
