"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Badge, Btn, Card } from "@/components/sim/ui";
import { type Fault, type State, FAULTS, avisar, fmt, fmtHora, newState, pedirPista, proximaReparacion, step, tomarMuestra } from "@/sim/reactor/model";
import { GUIA } from "@/sim/reactor/guia";
import { Icon } from "@/components/icons";
import { btn } from "@/components/ui";
import { type Hoja, newHoja } from "@/sim/reactor/hoja";
import { AlarmList, Faceplates, Readouts, Synoptic, Trends } from "./Panels";
import { HojaPanel, Review } from "./HojaPanel";

const KEY = "quimica-app:reactor-r204";
const SPEEDS = [0, 1, 10, 60, 300];

type Saved = { s: State; hoja: Hoja; started: boolean; scenario: string };

export function ReactorSim() {
  const sim = useRef<State>(newState());
  const [hoja, setHojaState] = useState<Hoja>(newHoja());
  const [started, setStarted] = useState(false);
  const [scenario, setScenario] = useState("ninguna");
  const [speed, setSpeed] = useState(0);
  const [, force] = useState(0);
  const [msg, setMsg] = useState<string | null>(null);
  const [aviso, setAviso] = useState("");
  const [reviewing, setReviewing] = useState(false);
  const [pista, setPista] = useState<string | null>(null);
  const loaded = useRef(false);

  // Recupera la partida guardada en este navegador
  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const d = JSON.parse(raw) as Saved;
        if (d?.s?.inputs && Array.isArray(d.s.faults)) {
          sim.current = d.s;
          setHojaState(d.hoja ?? newHoja());
          setStarted(!!d.started);
          setScenario(d.scenario ?? "ninguna");
          force((n) => n + 1);
        }
      }
    } catch {
      /* sin almacenamiento: se empieza de cero */
    }
    loaded.current = true;
  }, []);

  const save = useCallback(
    (h: Hoja = hoja) => {
      if (!loaded.current) return;
      try {
        localStorage.setItem(KEY, JSON.stringify({ s: sim.current, hoja: h, started, scenario } satisfies Saved));
      } catch {
        /* almacenamiento lleno o bloqueado: no se guarda */
      }
    },
    [hoja, started, scenario],
  );

  // Bucle de tiempo: cada 200 ms avanza 0,2 s × velocidad de tiempo simulado, en pasos de 1 s
  useEffect(() => {
    if (!started || speed === 0 || reviewing) return;
    let acc = 0;
    let saveAcc = 0;
    const id = setInterval(() => {
      acc += 0.2 * speed;
      while (acc >= 1) {
        step(sim.current, 1);
        acc -= 1;
      }
      saveAcc += 0.2;
      if (saveAcc >= 5) {
        saveAcc = 0;
        save();
      }
      force((n) => n + 1);
    }, 200);
    return () => clearInterval(id);
  }, [started, speed, reviewing, save]);

  const set = (fn: (s: State) => void) => {
    fn(sim.current);
    force((n) => n + 1);
  };
  const setHoja = (fn: (h: Hoja) => void) => {
    const h = structuredClone(hoja);
    fn(h);
    setHojaState(h);
    save(h);
  };

  const s = sim.current;

  const start = () => {
    let f: Fault[] = [];
    const pick = (ids: Fault[]) => ids[Math.floor(Math.random() * ids.length)];
    if (scenario === "sorpresa") f = [pick(FAULTS.map((x) => x.id))];
    else if (scenario === "turno") {
      // Una avería en cada tramo del lote, con alguna probabilidad de que falte una
      f = [
        pick(["vacio", "camisaSucia", "sensor", "disco", "tcuAtascada"]),
        pick(["caudalimetro", "agua", "agitador", "valvulaB"]),
        pick(["condensador", "corte", "barrera", "nitrogeno"]),
      ];
      if (Math.random() < 0.3) f.splice(Math.floor(Math.random() * 3), 1);
    } else if (scenario !== "ninguna") f = [scenario as Fault];
    sim.current = newState(f);
    setPista(null);
    setHojaState(newHoja());
    setStarted(true);
    setReviewing(false);
    setSpeed(1);
  };

  const reset = () => {
    if (!confirm("¿Empezar un lote nuevo? Se pierde el lote en curso.")) return;
    sim.current = newState();
    setHojaState(newHoja());
    setStarted(false);
    setReviewing(false);
    setSpeed(0);
    try {
      localStorage.removeItem(KEY);
    } catch {
      /* nada que borrar */
    }
  };

  if (!started) {
    return (
      <section aria-labelledby="r204-start" className="rounded-[var(--radius)] border border-line bg-surface p-6 sm:p-8">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_15rem]">
          <div className="max-w-[60ch] space-y-4">
            <h2 id="r204-start" className="t-h2">
              Empezar un lote
            </h2>
            <p className="leading-relaxed">
              Vas a llevar tú solo la etapa 1 del intermedio ficticio <span className="font-mono">AX-22</span> en el reactor vitrificado{" "}
              <span className="font-mono">R-204</span> de <span className="font-mono">6000 L</span>: comprobaciones, inertización, carga, calentamiento,
              adición dosificada, reflujo, muestra, enfriamiento y descarga. El tiempo es real: calentar lleva más de una hora. Puedes acelerarlo hasta{" "}
              <span className="font-mono">300</span> veces y pausarlo.
            </p>
            <p className="leading-relaxed text-muted">
              Con averías, nadie te dirá qué pasa: tendrás que verlo en las lecturas, las alarmas y las tendencias, decidir qué hacer y avisar. Si te
              atascas, pide una pista. Al terminar, la revisión te explica cada avería: qué síntomas tenías que ver, qué había que hacer y por qué.
            </p>
            <div className="space-y-1.5 pt-2">
              <label htmlFor="r204-averias" className="block text-sm font-medium">
                Averías
              </label>
              <div className="relative">
                <select
                  id="r204-averias"
                  className="w-full appearance-none rounded-[var(--radius)] border border-line-strong bg-surface py-2.5 pl-3 pr-10 text-ink hover:border-accent focus-visible:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  value={scenario}
                  onChange={(e) => setScenario(e.target.value)}
                >
                  <option value="ninguna">Sin averías</option>
                  <option value="turno">Turno real: dos o tres averías sorpresa en distintos momentos</option>
                  <option value="sorpresa">Una avería sorpresa</option>
                  {FAULTS.map((f) => (
                    <option key={f.id} value={f.id}>
                      {f.title} ({f.when})
                    </option>
                  ))}
                </select>
                <Icon name="chevron" className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 rotate-90 text-muted" />
              </div>
            </div>
            <div className="pt-2">
              <button type="button" onClick={start} className={btn.primary}>
                Empezar el lote
              </button>
            </div>
          </div>
          <aside aria-label="Placa del equipo" className="h-fit rounded-[var(--radius)] border border-line-strong bg-soft p-4 font-mono text-sm">
            <p className="border-b border-line pb-2 text-lg font-semibold text-ink">R-204</p>
            <dl className="mt-2 divide-y divide-line">
              {[
                ["Tipo", "Reactor vitrificado"],
                ["Volumen", "6000 L"],
                ["Servicios", "Camisa y condensador"],
                ["Atmósfera", "N₂ y vacío"],
                ["Producto", "AX-22 · etapa 1"],
                ["Tiempo", "Real · hasta ×300"],
              ].map(([k, v]) => (
                <div key={k} className="flex flex-col py-1.5">
                  <dt className="text-xs text-muted">{k}</dt>
                  <dd className="text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>
    );
  }

  const muestra = s.samples.at(-1);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2 rounded-[var(--radius)] border border-line bg-surface p-3">
        <span className="font-mono text-lg tabular-nums">{fmtHora(s.t)}</span>
        <span className="text-xs text-muted">lote en marcha {fmt(s.t / 3600, 1)} h</span>
        <span className="ml-auto flex flex-wrap gap-1" role="group" aria-label="Velocidad del tiempo">
          {SPEEDS.map((v) => (
            <Btn key={v} pressed={speed === v} onClick={() => setSpeed(v)}>
              {v === 0 ? "Pausa" : `×${v}`}
            </Btn>
          ))}
        </span>
        <Btn onClick={() => setReviewing(!reviewing)}>{reviewing ? "Volver al lote" : "Terminar y revisar"}</Btn>
        <Btn tone="danger" onClick={reset}>
          Lote nuevo
        </Btn>
      </div>

      {reviewing ? (
        <Review s={s} hoja={hoja} />
      ) : (
        <>
          {msg && (
            <div className="flex items-center justify-between gap-2 rounded-md border border-bad bg-bad-soft px-3 py-2 text-sm text-bad" role="alert">
              {msg}
              <button type="button" className="text-xs underline" onClick={() => setMsg(null)}>
                Cerrar
              </button>
            </div>
          )}
          <Readouts s={s} />
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
            <div className="space-y-4">
              <Synoptic s={s} />
              <AlarmList s={s} set={set} />
              <Trends s={s} />
              <Faceplates s={s} set={set} onMsg={setMsg} />
            </div>
            <div className="space-y-4">
              <Card title="Laboratorio y avisos">
                <div className="space-y-3 text-sm">
                  <div className="flex flex-wrap items-center gap-2">
                    <Btn
                      onClick={() =>
                        set((x) => {
                          const m = tomarMuestra(x);
                          setMsg(m);
                        })
                      }
                    >
                      Tomar muestra IPC
                    </Btn>
                    {muestra &&
                      (muestra.ready > s.t ? (
                        <Badge tone="warn">Muestra de las {fmtHora(muestra.t)} en el laboratorio</Badge>
                      ) : (
                        <span>
                          Muestra de las {fmtHora(muestra.t)}: B residual {fmt(muestra.bResidual, 2)} % · impureza {fmt(muestra.impureza, 2)} %
                        </span>
                      ))}
                  </div>
                  <label className="block">
                    <span className="text-muted">Aviso al jefe de turno y a mantenimiento</span>
                    <textarea rows={2} className="mt-1 w-full rounded border border-line-strong bg-surface px-2 py-1" value={aviso} onChange={(e) => setAviso(e.target.value)} placeholder="Qué ves, qué has hecho y qué necesitas" />
                  </label>
                  <Btn
                    onClick={() => {
                      set((x) => avisar(x, aviso.trim()));
                      setAviso("");
                    }}
                    disabled={aviso.trim() === ""}
                  >
                    Enviar aviso
                  </Btn>
                  {proximaReparacion(s) !== null && <p className="text-xs text-muted">Mantenimiento viene en camino: llega hacia las {fmtHora(proximaReparacion(s) as number)}.</p>}
                  <div className="border-t border-line pt-3">
                    <Btn
                      onClick={() =>
                        set((x) => {
                          const p = pedirPista(x);
                          setPista(p ? `Pista ${p.n + 1}: ${GUIA[p.id].pistas[p.n]}` : "No veo nada fuera de lo normal ahora mismo: sigue la hoja y vigila lecturas, alarmas y tendencias.");
                        })
                      }
                    >
                      Pedir pista
                    </Btn>
                    {pista && <p className="mt-2 text-sm">{pista}</p>}
                    <p className="mt-1 text-xs text-muted">Las pistas pedidas constan en la revisión.</p>
                  </div>
                </div>
              </Card>
              <HojaPanel s={s} hoja={hoja} setHoja={setHoja} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
