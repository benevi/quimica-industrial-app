"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { GENERADORES, generador } from "@/problemas/generadores";
import { azar, esCorrecta, n, type Generador } from "@/problemas/tipos";
import { Markdown } from "@/components/Markdown";
import { Icon } from "@/components/icons";
import { Card, SectionTitle, Status, btn } from "@/components/ui";
import { isAmbiguous, parseNum } from "@/lib/num";

const KEY = "quimica-app:problemas:v1";
type Marca = { intentos: number; aciertos: number };
type Marcas = Record<string, Marca>;

function leer(): Marcas {
  try {
    return JSON.parse(window.localStorage.getItem(KEY) ?? "{}") as Marcas;
  } catch {
    return {};
  }
}

const DIF = { 1: "Directo", 2: "Dos o tres pasos", 3: "Encadena ideas" } as const;
const semillaNueva = () => Math.floor(Math.random() * 2 ** 31);

export type InfoLeccion = { slug: string; title: string };

export function Problemas({ lecciones, niveles }: { lecciones: Record<string, InfoLeccion>; niveles: Record<number, string> }) {
  const [marcas, setMarcas] = useState<Marcas>({});
  const [tema, setTema] = useState<string | null>(null);

  useEffect(() => {
    setMarcas(leer());
    const t = new URLSearchParams(window.location.search).get("tema");
    if (t && generador(t)) setTema(t);
  }, []);

  const elegir = useCallback((id: string | null) => {
    setTema(id);
    const url = id ? `?tema=${id}` : window.location.pathname;
    window.history.replaceState(null, "", url);
    window.scrollTo({ top: 0 });
  }, []);

  const apuntar = useCallback((id: string, bien: boolean) => {
    const prev = leer();
    const m = prev[id] ?? { intentos: 0, aciertos: 0 };
    const next = { ...prev, [id]: { intentos: m.intentos + 1, aciertos: m.aciertos + (bien ? 1 : 0) } };
    try {
      window.localStorage.setItem(KEY, JSON.stringify(next));
    } catch {
      /* sin almacenamiento: solo cuenta esta visita */
    }
    setMarcas(next);
  }, []);

  const g = tema ? generador(tema) : undefined;
  if (g)
    return (
      <Jugador
        key={g.id}
        g={g}
        leccion={lecciones[g.leccion]}
        marca={marcas[g.id]}
        onVolver={() => elegir(null)}
        onAzar={() => elegir(GENERADORES[Math.floor(Math.random() * GENERADORES.length)].id)}
        onResultado={(bien) => apuntar(g.id, bien)}
      />
    );

  const porNivel = new Map<number, Generador[]>();
  for (const x of GENERADORES) porNivel.set(x.nivel, [...(porNivel.get(x.nivel) ?? []), x]);
  const total = Object.values(marcas).reduce((t, m) => t + m.aciertos, 0);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3">
        <button type="button" className={btn.primary} onClick={() => elegir(GENERADORES[Math.floor(Math.random() * GENERADORES.length)].id)}>
          Un problema al azar
          <Icon name="arrow" className="h-4 w-4" />
        </button>
        <p className="text-sm text-muted">{total > 0 ? `Llevas ${total} problemas bien resueltos.` : "Aún no has resuelto ninguno."}</p>
      </div>
      {[...porNivel.entries()].map(([nivel, gs]) => (
        <section key={nivel} aria-labelledby={`nivel-${nivel}`}>
          <SectionTitle id={`nivel-${nivel}`}>
            Nivel {nivel}. {niveles[nivel]}
          </SectionTitle>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2">
            {gs.map((x) => {
              const m = marcas[x.id];
              return (
                <Card as="li" key={x.id} className="p-0">
                  <button type="button" onClick={() => elegir(x.id)} className="flex h-full w-full flex-col items-start gap-1 rounded-[var(--radius)] p-4 text-left hover:bg-soft">
                    <span className="font-medium">{x.titulo}</span>
                    <span className="text-xs text-muted">
                      {DIF[x.dificultad]} · {lecciones[x.leccion]?.title ?? x.leccion}
                    </span>
                    {m && m.intentos > 0 && (
                      <Status kind={m.aciertos > 0 ? "done" : "todo"}>
                        {m.aciertos} de {m.intentos} bien
                      </Status>
                    )}
                  </button>
                </Card>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}

function Jugador({
  g,
  leccion,
  marca,
  onVolver,
  onAzar,
  onResultado,
}: {
  g: Generador;
  leccion?: InfoLeccion;
  marca?: Marca;
  onVolver: () => void;
  onAzar: () => void;
  onResultado: (bien: boolean) => void;
}) {
  const [semilla, setSemilla] = useState<number | null>(null);
  const [valor, setValor] = useState("");
  const [estado, setEstado] = useState<"pendiente" | "bien" | "mal">("pendiente");
  const [verSolucion, setVerSolucion] = useState(false);

  // La semilla se elige en el navegador: así el servidor y el navegador no generan problemas distintos
  useEffect(() => setSemilla(semillaNueva()), []);
  const pr = useMemo(() => (semilla === null ? null : g.generar(azar(semilla))), [g, semilla]);

  const ambiguo = isAmbiguous(valor);
  const num = ambiguo ? null : parseNum(valor);

  function comprobar() {
    if (!pr || num === null) return;
    const bien = esCorrecta(pr, num);
    setEstado(bien ? "bien" : "mal");
    if (bien) setVerSolucion(true);
    onResultado(bien);
  }

  function otro() {
    setSemilla(semillaNueva());
    setValor("");
    setEstado("pendiente");
    setVerSolucion(false);
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center gap-2">
        <button type="button" onClick={onVolver} className={btn.quiet}>
          <Icon name="back" className="h-4 w-4" />
          Todos los problemas
        </button>
      </div>
      <section className="rounded-[var(--radius)] border border-line bg-surface p-5 sm:p-6" aria-labelledby="problema-h">
        <h2 id="problema-h" className="t-h3">
          {g.titulo}
        </h2>
        <p className="mt-1 text-xs text-muted">
          Nivel {g.nivel} · {DIF[g.dificultad]}
          {marca && marca.intentos > 0 ? ` · ${marca.aciertos} de ${marca.intentos} bien hasta ahora` : ""}
        </p>
        {pr ? (
          <>
            <div className="mt-4 space-y-2 text-[15px] leading-relaxed">
              <Markdown>{pr.enunciado}</Markdown>
            </div>
            <form
              className="mt-5 flex flex-wrap items-end gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                comprobar();
              }}
            >
              <label className="block text-sm">
                <span className="text-muted">Tu respuesta</span>
                <span className="mt-1 flex items-center gap-2">
                  <input
                    inputMode="decimal"
                    value={valor}
                    onChange={(e) => {
                      setValor(e.target.value);
                      if (estado === "mal") setEstado("pendiente");
                    }}
                    aria-describedby="problema-ayuda"
                    className="w-40 rounded-md border border-line-strong bg-surface px-3 py-2 font-mono tabular-nums"
                  />
                  {pr.unidad && <span className="font-mono text-muted">{pr.unidad}</span>}
                </span>
              </label>
              <button type="submit" className={btn.primary} disabled={num === null}>
                Comprobar
              </button>
              <button type="button" className={btn.secondary} onClick={() => setVerSolucion((v) => !v)} aria-expanded={verSolucion}>
                {verSolucion ? "Ocultar la solución" : "Ver la solución"}
              </button>
            </form>
            <p id="problema-ayuda" className="mt-2 text-xs text-muted">
              Decimales con coma (1,25). Se admite un pequeño margen por el redondeo.
            </p>
            {ambiguo && (
              <p className="mt-1 text-xs text-bad" role="alert">
                «{valor.trim()}» se puede leer de dos formas. Escribe los decimales con coma (1,25) y los miles sin punto (1250).
              </p>
            )}
            <div aria-live="polite" className="mt-4">
              {estado === "bien" && (
                <p className="flex items-center gap-2 font-medium text-ok">
                  <Icon name="check" className="h-5 w-5" /> Bien: {n(pr.respuesta, pr.decimales)} {pr.unidad}
                </p>
              )}
              {estado === "mal" && (
                <p className="font-medium text-bad">
                  No es correcto. Revisa las unidades y los pasos, o mira la solución.
                </p>
              )}
            </div>
            {verSolucion && (
              <div className="mt-4 rounded-md bg-soft p-4 text-sm">
                <p className="mb-2 font-medium">Solución paso a paso</p>
                <ol className="list-decimal space-y-1.5 pl-5">
                  {pr.pasos.map((paso, i) => (
                    <li key={i}>
                      <Markdown>{paso}</Markdown>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </>
        ) : (
          <p className="mt-4 text-muted">Preparando el problema…</p>
        )}
        <div className="mt-6 flex flex-wrap gap-3">
          <button type="button" className={estado === "pendiente" ? btn.secondary : btn.primary} onClick={otro}>
            Otro problema de este tipo
          </button>
          <button type="button" className={btn.secondary} onClick={onAzar}>
            Otro tipo al azar
          </button>
          {leccion && (
            <Link href={`/leccion/${leccion.slug}`} className={btn.quiet}>
              Repasar la lección: {leccion.title}
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}
