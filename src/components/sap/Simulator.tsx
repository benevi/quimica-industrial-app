"use client";

import { useEffect, useState } from "react";
import {
  characteristics,
  confirmPhase,
  createOrder,
  evaluate,
  findOrder,
  fmtQty,
  getMaterial,
  getRecipeFor,
  goodsIssue,
  goodsReceipt,
  initialState,
  labFor,
  markViewed,
  materials,
  missions,
  recipes,
  recordResults,
  releaseOrder,
  stockOf,
  TODAY,
  usageDecision,
  type ErpState,
  type Msg,
} from "@/sap/engine";
import { useCertState } from "@/certs/useCertState";
import { Icon } from "@/components/icons";
import { Card, SectionTitle, btn as ui } from "@/components/ui";

const KEY = "quimica-app:erp:v1";

type Tx = { code: string; text: string; en: string; group: "Datos maestros" | "Producción" | "Almacén" | "Calidad" };

const TXS: Tx[] = [
  { code: "MM03", text: "Visualizar material", en: "Display material", group: "Datos maestros" },
  { code: "C203", text: "Visualizar receta maestra", en: "Display master recipe", group: "Datos maestros" },
  { code: "COR1", text: "Crear orden de proceso", en: "Create process order", group: "Producción" },
  { code: "COR2", text: "Modificar / liberar orden", en: "Change / release process order", group: "Producción" },
  { code: "COR3", text: "Visualizar orden de proceso", en: "Display process order", group: "Producción" },
  { code: "COR6N", text: "Notificar fase", en: "Confirm phase", group: "Producción" },
  { code: "MIGO", text: "Movimiento de mercancías", en: "Goods movement", group: "Almacén" },
  { code: "MMBE", text: "Resumen de stock", en: "Stock overview", group: "Almacén" },
  { code: "MSC3N", text: "Visualizar lote", en: "Display batch", group: "Almacén" },
  { code: "QA32", text: "Lista de lotes de inspección", en: "Inspection lot worklist", group: "Calidad" },
  { code: "QE51N", text: "Registrar resultados", en: "Record results", group: "Calidad" },
  { code: "QA11", text: "Decisión de empleo", en: "Usage decision", group: "Calidad" },
];

function load(): ErpState {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (raw) {
      const s = JSON.parse(raw) as ErpState;
      if (s.version === 1) return s;
    }
  } catch {}
  return initialState();
}

const input = "w-full rounded-md border border-line-strong bg-surface px-2.5 py-1.5 text-sm tabular-nums focus:border-accent";
/** Botones de la pantalla del ERP: más compactos que los de la app, pero con las mismas clases */
const btn = `${ui.primary} px-3 py-1.5`;
const btn2 = `${ui.secondary} px-3 py-1.5`;
const num = (v: string) => Number(v.replace(",", "."));

function Field({ label, en, children }: { label: string; en?: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-1 text-sm">
      <span className="text-muted">
        {label} {en && <span lang="en" className="text-xs">· {en}</span>}
      </span>
      {children}
    </label>
  );
}

function Table({ head, rows }: { head: string[]; rows: React.ReactNode[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[480px] text-left text-sm">
        <thead className="text-xs text-muted">
          <tr>{head.map((h) => <th key={h} className="border-b border-line px-2 py-1.5 font-medium">{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr><td colSpan={head.length} className="px-2 py-3 text-muted">Sin datos.</td></tr>
          ) : (
            rows.map((r, i) => <tr key={i} className="border-b border-line/60">{r.map((c, j) => <td key={j} className="px-2 py-1.5 tabular-nums">{c}</td>)}</tr>)
          )}
        </tbody>
      </table>
    </div>
  );
}

const stockLabel = { libre: "Libre utilización", calidad: "Control de calidad", bloqueado: "Bloqueado" } as const;
const stockCls = { libre: "text-ok", calidad: "text-ink", bloqueado: "text-bad" } as const;

/**
 * practice: guarda el sistema en el navegador y marca misiones.
 * exam: parte de `initial`, no guarda nada, sin misiones ni pistas GMP; avisa de cada cambio con `onState`.
 */
export function Simulator({ mode = "practice", initial, onState }: { mode?: "practice" | "exam"; initial?: ErpState; onState?: (s: ErpState) => void } = {}) {
  const exam = mode === "exam";
  const [s, setS] = useState<ErpState | null>(null);
  const [tx, setTx] = useState("MMBE");
  const [cmd, setCmd] = useState("");
  const [msg, setMsg] = useState<Msg | null>(null);
  const [showHints, setShowHints] = useState(false);
  const { state: cert, completeMission } = useCertState();

  useEffect(() => setS(exam && initial ? initial : load()), [exam, initial]);
  useEffect(() => {
    if (!s) return;
    onState?.(s);
    if (exam) return;
    try {
      window.localStorage.setItem(KEY, JSON.stringify(s));
    } catch {}
    for (const m of missions) if (m.done(s) && !cert.missions[m.id]) completeMission(m.id);
  }, [s, cert.missions, completeMission, exam, onState]);

  if (!s) return <p className="text-muted">Cargando el sistema…</p>;
  const state = s;

  function apply(r: { state: ErpState; msg: Msg }) {
    setS(r.state);
    setMsg(r.msg);
  }
  function view(key: string) {
    setS(markViewed(state, key));
  }
  function go(code: string) {
    const c = code.trim().toUpperCase().replace(/^\/N/, "");
    if (!c) return;
    if (TXS.some((t) => t.code === c)) {
      setTx(c);
      setMsg(null);
    } else setMsg({ type: "E", text: `La transacción ${c} no existe en este simulador.` });
    setCmd("");
  }
  function reset() {
    setS(initialState());
    setMsg({ type: "S", text: "Sistema reiniciado con los datos iniciales." });
  }

  const cur = TXS.find((t) => t.code === tx)!;
  const doneCount = missions.filter((m) => m.done(state)).length;

  return (
    <div className="space-y-8">
      <div className="overflow-hidden rounded-[var(--radius)] border border-line bg-surface">
        {/* barra de comandos */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            go(cmd);
          }}
          className="flex flex-wrap items-center gap-2 border-b border-line bg-soft px-3 py-2"
        >
          <input
            value={cmd}
            onChange={(e) => setCmd(e.target.value)}
            placeholder="Transacción (p. ej. MMBE)"
            aria-label="Campo de comandos: escribe un código de transacción"
            className="w-48 rounded-md border border-line-strong bg-surface px-2.5 py-1.5 font-mono text-sm uppercase focus:border-accent"
          />
          <button className={btn2}>Ir</button>
          <span className="ml-auto font-mono text-xs text-muted">
            Usuario {"ALUMNO"} · Mandante 100 · {TODAY.split("-").reverse().join("/")}
          </span>
        </form>

        <div className="grid md:grid-cols-[200px_1fr]">
          {/* menú */}
          <nav className="border-b border-line p-2 md:border-b-0 md:border-r">
            {(["Datos maestros", "Producción", "Almacén", "Calidad"] as const).map((g) => (
              <div key={g} className="mb-2">
                <p className="px-2 py-1 text-xs font-medium text-muted">{g}</p>
                <div className="flex flex-wrap gap-1 md:block">
                  {TXS.filter((t) => t.group === g).map((t) => (
                    <button
                      key={t.code}
                      onClick={() => go(t.code)}
                      aria-current={t.code === tx ? "page" : undefined}
                      className={`block rounded-md px-2 py-1 text-left text-sm md:w-full ${t.code === tx ? "bg-accent-soft font-medium text-ink" : "text-muted hover:bg-soft hover:text-ink"}`}
                    >
                      <span className="font-mono text-xs">{t.code}</span> <span className="hidden md:inline">· {t.text}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          {/* pantalla */}
          <section className="min-h-[340px] p-4">
            <h2 className="t-h3 mb-4 flex flex-wrap items-baseline gap-x-2">
              <span className="font-mono text-accent">{cur.code}</span> {cur.text}
              <span lang="en" className="text-sm font-normal text-muted">{cur.en}</span>
            </h2>
            <Screen key={tx} tx={tx} s={state} apply={apply} view={view} />
          </section>
        </div>

        {/* barra de estado */}
        <div
          role="status"
          className={`flex gap-2 border-t border-line px-3 py-2 text-sm ${
            !msg ? "bg-soft text-muted" : msg.type === "E" ? "bg-bad-soft" : msg.type === "W" ? "bg-warn-soft" : "bg-ok-soft"
          }`}
        >
          {msg ? (
            <>
              <Icon
                name={msg.type === "E" ? "close" : msg.type === "W" ? "hazard" : "check"}
                className={`mt-0.5 h-4 w-4 shrink-0 ${msg.type === "E" ? "text-bad" : msg.type === "W" ? "text-ink" : "text-ok"}`}
              />
              <span>
                <strong className="font-medium">{msg.type === "E" ? "Error" : msg.type === "W" ? "Aviso" : "Hecho"}:</strong> {msg.text}
                {msg.gmp && !exam && <span className="mt-1 block text-xs">GMP: {msg.gmp}</span>}
              </span>
            </>
          ) : (
            "Escribe una transacción o elígela en el menú."
          )}
        </div>
      </div>

      {/* misiones */}
      {!exam && (
        <section aria-labelledby="mis-h">
          <SectionTitle
            id="mis-h"
            en="Tasks"
            aside={
              <span className="flex items-center gap-4">
                <span className="tabular-nums">
                  {doneCount}/{missions.length} hechas
                </span>
                <label className="flex cursor-pointer items-center gap-2">
                  <input type="checkbox" checked={showHints} onChange={(e) => setShowHints(e.target.checked)} className="h-4 w-4 accent-[var(--accent)]" />
                  Ver pistas
                </label>
              </span>
            }
          >
            Misiones
          </SectionTitle>
          <p className="mb-3 max-w-[68ch] text-sm text-muted">
            Los exámenes prácticos de SAP dan las tareas en inglés: lee primero la frase en inglés e intenta hacerla sin pistas.
          </p>
          <Card as="div">
            <ol className="divide-y divide-line">
              {missions.map((m, i) => {
                const ok = m.done(state);
                return (
                  <li key={m.id} className="flex gap-3 px-4 py-3 text-sm">
                    {ok ? (
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-ok" />
                    ) : (
                      <span aria-hidden className="w-4 shrink-0 text-center tabular-nums text-muted">
                        {i + 1}
                      </span>
                    )}
                    <div className="min-w-0">
                      <p>
                        <span lang="en" className={`font-medium ${ok ? "text-muted" : ""}`}>
                          {m.taskEn}
                        </span>
                        {ok && <span className="sr-only"> (hecha)</span>}
                      </p>
                      <p className="text-muted">{m.title}</p>
                      {showHints && !ok && <p className="mt-1 text-xs text-accent">Pista: {m.hint}</p>}
                    </div>
                  </li>
                );
              })}
            </ol>
          </Card>
        </section>
      )}

      {/* informe del laboratorio */}
      <section aria-labelledby="lab-h">
        <SectionTitle id="lab-h" en="Lab reports">
          Informes del laboratorio
        </SectionTitle>
        <p className="mb-3 max-w-[68ch] text-sm text-muted">Resultados ficticios que el laboratorio de control de calidad entrega para cada lote. Transcríbelos tal cual en QE51N.</p>
        {state.lots.length === 0 ? (
          <Card className="p-4 text-sm text-muted">Aún no hay lotes de inspección: aparecen al dar entrada al producto (MIGO 101).</Card>
        ) : (
          <Card className="p-2">
          <Table
            head={["Lote de inspección", "Lote", ...characteristics.map((c) => `${c.text} (${c.unit})`)]}
            rows={state.lots.map((l) => {
              const lab = labFor(l);
              return [l.id, l.batch, ...characteristics.map((c) => fmtQty(lab[c.id]))];
            })}
          />
          </Card>
        )}
      </section>

      {/* audit trail */}
      <section aria-labelledby="log-h">
        <SectionTitle
          id="log-h"
          en="Audit trail"
          aside={
            !exam && (
              <button onClick={reset} className={ui.quiet}>
                Reiniciar sistema
              </button>
            )
          }
        >
          Registro de documentos
        </SectionTitle>
        <p className="mb-3 max-w-[68ch] text-sm text-muted">
          Cada contabilización deja quién, qué y cuándo. Es lo que revisa un auditor (ALCOA+: atribuible y contemporáneo).
        </p>
        <Card className="p-2">
          <Table
            head={["Documento", "Fecha y hora", "Usuario", "Transacción", "Qué"]}
            rows={state.log.slice(0, 30).map((d) => [d.doc, new Date(d.at).toLocaleString("es-ES"), d.user, d.tx, d.text])}
          />
        </Card>
      </section>
    </div>
  );
}

function Screen({
  tx,
  s,
  apply,
  view,
}: {
  tx: string;
  s: ErpState;
  apply: (r: { state: ErpState; msg: Msg }) => void;
  view: (key: string) => void;
}) {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [shown, setShown] = useState<string | null>(null);
  const [mov, setMov] = useState<"261" | "101">("261");
  const [vals, setVals] = useState<Record<string, string>>({});
  const lastOrder = s.orders.at(-1)?.id ?? "";
  const openLot = s.lots.find((l) => l.status !== "UD")?.id ?? "";

  const materialSelect = (value: string, set: (v: string) => void) => (
    <select className={input} value={value} onChange={(e) => set(e.target.value)}>
      <option value="">Elige material…</option>
      {materials.map((m) => <option key={m.id} value={m.id}>{m.id} · {m.name}</option>)}
    </select>
  );

  const orderInput = (value: string, set: (v: string) => void) => (
    <input className={input} value={value} onChange={(e) => set(e.target.value)} placeholder={lastOrder || "Nº de orden"} list="orders" />
  );
  const ordersList = (
    <datalist id="orders">{s.orders.map((o) => <option key={o.id} value={o.id}>{o.material} · {o.status}</option>)}</datalist>
  );

  const display = shown;

  switch (tx) {
    case "MM03":
    case "MMBE":
    case "C203": {
      const m = display ? getMaterial(display) : undefined;
      return (
        <div className="space-y-4">
          <form
            className="flex flex-wrap items-end gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              setShown(a);
              if (a) view(`${tx}:${a}`);
            }}
          >
            <div className="min-w-64 flex-1"><Field label="Material" en="Material">{materialSelect(a, setA)}</Field></div>
            <button className={btn}>Visualizar</button>
          </form>
          {m && tx === "MM03" && (
            <dl className="grid gap-x-4 gap-y-1 text-sm sm:grid-cols-[180px_1fr]">
              <dt className="text-muted">Material</dt><dd>{m.id}</dd>
              <dt className="text-muted">Descripción</dt><dd>{m.name} <span lang="en" className="text-muted">({m.nameEn})</span></dd>
              <dt className="text-muted">Tipo</dt><dd>{m.kind}</dd>
              <dt className="text-muted">Unidad de medida base</dt><dd>{m.unit}</dd>
              <dt className="text-muted">Gestión de lotes</dt><dd>Sí</dd>
              <dt className="text-muted">Inspección en entrada de producción</dt><dd>{m.inspectionOnReceipt ? "Sí (tipo 04): crea lote de inspección" : "No"}</dd>
            </dl>
          )}
          {m && tx === "MMBE" && (() => {
            const st = stockOf(s, m.id);
            return (
              <div className="space-y-3">
                <p className="text-sm">
                  Total · <span className="text-ok">libre {fmtQty(st.libre)} kg</span> · <span className={stockCls.calidad}>calidad {fmtQty(st.calidad)} kg</span> ·{" "}
                  <span className="text-bad">bloqueado {fmtQty(st.bloqueado)} kg</span>
                </p>
                <Table
                  head={["Lote", "Cantidad (kg)", "Tipo de stock", "Caducidad"]}
                  rows={st.batches.map((bt) => [
                    bt.id,
                    fmtQty(bt.qty),
                    <span key="s" className={stockCls[bt.stock]}>{stockLabel[bt.stock]}</span>,
                    <span key="e" className={bt.expiry < TODAY ? "text-bad" : ""}>{bt.expiry.split("-").reverse().join("/")}{bt.expiry < TODAY ? " (caducado)" : ""}</span>,
                  ])}
                />
              </div>
            );
          })()}
          {m && tx === "C203" && (() => {
            const r = getRecipeFor(m.id);
            if (!r) return <p className="text-sm text-muted">El material {m.id} no tiene receta maestra (no se fabrica aquí).</p>;
            return (
              <div className="space-y-3 text-sm">
                <p>Receta <strong>{r.id}</strong> · cantidad base {r.baseQty} kg · estado: aprobada</p>
                <Table head={["Componente", "Descripción", `Cantidad por ${r.baseQty} kg`]} rows={r.components.map((x) => [x.material, getMaterial(x.material)!.name, `${fmtQty(x.qtyPer100)} kg`])} />
                <Table head={["Fase", "Descripción", "English"]} rows={r.phases.map((p) => [p.id, p.text, <span key="e" lang="en">{p.textEn}</span>])} />
              </div>
            );
          })()}
        </div>
      );
    }

    case "COR1":
      return (
        <form
          className="grid max-w-md gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            apply(createOrder(s, a, num(b)));
          }}
        >
          <Field label="Material" en="Material">{materialSelect(a, setA)}</Field>
          <Field label="Cantidad total (kg)" en="Total quantity"><input className={input} inputMode="decimal" value={b} onChange={(e) => setB(e.target.value)} /></Field>
          <p className="text-xs text-muted">Tipo de orden PI01 · el sistema toma la receta maestra aprobada del material.</p>
          <div><button className={btn}>Crear y grabar</button></div>
        </form>
      );

    case "COR2":
    case "COR3": {
      const o = display ? findOrder(s, display) : undefined;
      return (
        <div className="space-y-4">
          {ordersList}
          <form className="flex flex-wrap items-end gap-2" onSubmit={(e) => { e.preventDefault(); setShown(a || lastOrder); }}>
            <div className="w-48"><Field label="Orden de proceso" en="Process order">{orderInput(a, setA)}</Field></div>
            <button className={btn2}>Visualizar</button>
            {tx === "COR2" && (
              <button type="button" className={btn} onClick={() => { const id = a || lastOrder; apply(releaseOrder(s, id)); setShown(id); }}>
                Liberar
              </button>
            )}
          </form>
          {o && <OrderView o={o} />}
          {display && !o && <p className="text-sm text-bad">La orden {display} no existe.</p>}
        </div>
      );
    }

    case "COR6N": {
      const o = findOrder(s, a || lastOrder);
      const r = o ? recipes.find((x) => x.id === o.recipe) : undefined;
      const lastPhase = r?.phases.at(-1)?.id;
      return (
        <form
          className="grid max-w-md gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            apply(confirmPhase(s, a || lastOrder, b, c ? num(c) : undefined));
          }}
        >
          {ordersList}
          <Field label="Orden de proceso" en="Process order">{orderInput(a, setA)}</Field>
          <Field label="Fase" en="Phase">
            <select className={input} value={b} onChange={(e) => setB(e.target.value)}>
              <option value="">Elige fase…</option>
              {(r ?? recipes[0]).phases.map((p) => (
                <option key={p.id} value={p.id}>{p.id} · {p.text}{o?.confirmed[p.id] ? " (notificada)" : ""}</option>
              ))}
            </select>
          </Field>
          {b === lastPhase && (
            <Field label="Cantidad obtenida (kg)" en="Yield"><input className={input} inputMode="decimal" value={c} onChange={(e) => setC(e.target.value)} /></Field>
          )}
          <div><button className={btn}>Grabar notificación</button></div>
        </form>
      );
    }

    case "MIGO": {
      const o = findOrder(s, a || lastOrder);
      return (
        <form
          className="grid max-w-lg gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            apply(mov === "261" ? goodsIssue(s, a || lastOrder, b, num(c)) : goodsReceipt(s, a || lastOrder, num(c)));
          }}
        >
          {ordersList}
          <div className="grid gap-3 sm:grid-cols-2">
            <Field label="Operación" en="Transaction">
              <select className={input} value={mov} onChange={(e) => setMov(e.target.value as "261" | "101")}>
                <option value="261">Salida de mercancías · clase de mov. 261</option>
                <option value="101">Entrada de mercancías · clase de mov. 101</option>
              </select>
            </Field>
            <Field label="Orden" en="Order">{orderInput(a, setA)}</Field>
          </div>
          {mov === "261" && (
            <Field label="Lote" en="Batch">
              <select className={input} value={b} onChange={(e) => setB(e.target.value)}>
                <option value="">Elige lote…</option>
                {s.batches.filter((x) => !x.material.startsWith("FG") && x.qty > 0).map((x) => (
                  <option key={x.id} value={x.id}>{x.id} · {x.material} · {fmtQty(x.qty)} kg</option>
                ))}
              </select>
            </Field>
          )}
          <Field label="Cantidad (kg)" en="Quantity"><input className={input} inputMode="decimal" value={c} onChange={(e) => setC(e.target.value)} /></Field>
          {o && mov === "261" && (
            <Table
              head={["Componente", "Necesario (kg)", "Consumido (kg)"]}
              rows={o.components.map((x) => [x.material, fmtQty(x.required), fmtQty(x.issued)])}
            />
          )}
          <div><button className={btn}>Contabilizar</button></div>
        </form>
      );
    }

    case "MSC3N": {
      const bt = display ? s.batches.find((x) => x.id === display.toUpperCase()) : undefined;
      return (
        <div className="space-y-4">
          <form className="flex flex-wrap items-end gap-2" onSubmit={(e) => { e.preventDefault(); setShown(a); }}>
            <div className="w-56">
              <Field label="Lote" en="Batch">
                <select className={input} value={a} onChange={(e) => setA(e.target.value)}>
                  <option value="">Elige lote…</option>
                  {s.batches.map((x) => <option key={x.id} value={x.id}>{x.id} · {x.material}</option>)}
                </select>
              </Field>
            </div>
            <button className={btn}>Visualizar</button>
          </form>
          {bt && (
            <dl className="grid gap-x-4 gap-y-1 text-sm sm:grid-cols-[180px_1fr]">
              <dt className="text-muted">Lote</dt><dd>{bt.id}</dd>
              <dt className="text-muted">Material</dt><dd>{bt.material} · {getMaterial(bt.material)?.name}</dd>
              <dt className="text-muted">Cantidad</dt><dd>{fmtQty(bt.qty)} kg</dd>
              <dt className="text-muted">Tipo de stock</dt><dd className={stockCls[bt.stock]}>{stockLabel[bt.stock]}</dd>
              <dt className="text-muted">Caducidad / reanálisis</dt><dd>{bt.expiry.split("-").reverse().join("/")}</dd>
              <dt className="text-muted">Origen</dt><dd>{bt.origin}</dd>
            </dl>
          )}
        </div>
      );
    }

    case "QA32":
      return (
        <Table
          head={["Lote de inspección", "Material", "Lote", "Cantidad (kg)", "Estado", "Decisión"]}
          rows={s.lots.map((l) => [
            l.id,
            l.material,
            l.batch,
            fmtQty(l.qty),
            l.status === "REL" ? "Liberado, sin resultados" : l.status === "RREC" ? "Resultados registrados" : "Decisión tomada",
            l.ud ? (l.ud === "A" ? "A · aceptado" : "R · rechazado") : "—",
          ])}
        />
      );

    case "QE51N":
      return (
        <form
          className="grid max-w-lg gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            const v: Record<string, number> = {};
            for (const ch of characteristics) v[ch.id] = vals[ch.id] === undefined || vals[ch.id] === "" ? NaN : num(vals[ch.id]);
            apply(recordResults(s, a || openLot, v));
          }}
        >
          <Field label="Lote de inspección" en="Inspection lot">
            <input className={input} value={a} onChange={(e) => setA(e.target.value)} placeholder={openLot || "Nº de lote de inspección"} />
          </Field>
          {characteristics.map((ch) => (
            <Field
              key={ch.id}
              label={`${ch.text} (${ch.unit}) · especificación ${ch.min !== undefined ? `${fmtQty(ch.min)}–${fmtQty(ch.max!)}` : `≤ ${fmtQty(ch.max!)}`}`}
              en={ch.textEn}
            >
              <input
                className={`${input} ${vals[ch.id] && !evaluate(ch, num(vals[ch.id])) ? "border-bad" : ""}`}
                inputMode="decimal"
                value={vals[ch.id] ?? ""}
                onChange={(e) => setVals({ ...vals, [ch.id]: e.target.value })}
              />
            </Field>
          ))}
          <div><button className={btn}>Grabar resultados</button></div>
        </form>
      );

    case "QA11":
      return (
        <div className="grid max-w-md gap-3">
          <Field label="Lote de inspección" en="Inspection lot">
            <input className={input} value={a} onChange={(e) => setA(e.target.value)} placeholder={openLot || "Nº de lote de inspección"} />
          </Field>
          <div className="flex flex-wrap gap-2">
            <button className={btn} onClick={() => apply(usageDecision(s, a || openLot, "A"))}>A · Aceptar</button>
            <button className={`${btn2} border-bad text-bad hover:border-bad hover:text-bad`} onClick={() => apply(usageDecision(s, a || openLot, "R"))}>R · Rechazar</button>
          </div>
          <p className="text-xs text-muted">Aceptar traspasa el lote a libre utilización. Rechazar lo pasa a stock bloqueado.</p>
        </div>
      );
  }
  return null;
}

function OrderView({ o }: { o: NonNullable<ReturnType<typeof findOrder>> }) {
  const r = recipes.find((x) => x.id === o.recipe)!;
  const statusText = { CRTD: "Creada", REL: "Liberada", PCNF: "Notificada en parte", CNF: "Notificada", DLV: "Entregada" }[o.status];
  return (
    <div className="space-y-3 text-sm">
      <p>
        Orden <strong>{o.id}</strong> · {o.material} · {fmtQty(o.qty)} kg · receta {o.recipe} · estado{" "}
        <span className="font-mono">{o.status}</span> ({statusText}){o.batch && <> · lote {o.batch}</>}
      </p>
      <Table head={["Componente", "Necesario (kg)", "Consumido (kg)", "Lotes"]} rows={o.components.map((x) => [x.material, fmtQty(x.required), fmtQty(x.issued), x.batches.join(", ") || "—"])} />
      <Table
        head={["Fase", "Descripción", "Notificada"]}
        rows={r.phases.map((p) => [p.id, p.text, o.confirmed[p.id] ? `Sí${o.confirmed[p.id].yield ? ` · ${fmtQty(o.confirmed[p.id].yield!)} kg` : ""}` : "No"])}
      />
    </div>
  );
}
