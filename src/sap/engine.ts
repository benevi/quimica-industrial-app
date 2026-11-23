// Motor del simulador ERP (estilo SAP PP-PI / MM / QM) con datos ficticios.
// Funciones puras: cada transacción recibe el estado y devuelve el estado nuevo y un mensaje.
// No reproduce SAP: imita su lógica de negocio para practicar el flujo de un lote de API.

export type StockType = "libre" | "calidad" | "bloqueado";
export type MsgType = "S" | "W" | "E"; // éxito, aviso, error (como la barra de estado de SAP)
export type Msg = { type: MsgType; text: string; gmp?: string };

export type Material = {
  id: string;
  name: string;
  nameEn: string;
  kind: "Materia prima" | "Disolvente" | "Producto terminado";
  unit: "kg";
  /** Tipo de inspección 04: la entrada desde producción crea un lote de inspección */
  inspectionOnReceipt: boolean;
};

export type Batch = {
  id: string;
  material: string;
  qty: number;
  stock: StockType;
  expiry: string; // AAAA-MM-DD
  origin: string;
};

export type RecipeComponent = { material: string; qtyPer100: number };
export type Phase = { id: string; text: string; textEn: string };
export type Recipe = { id: string; material: string; baseQty: number; components: RecipeComponent[]; phases: Phase[] };

export type OrderStatus = "CRTD" | "REL" | "PCNF" | "CNF" | "DLV";
export type Order = {
  id: string;
  material: string;
  recipe: string;
  qty: number;
  status: OrderStatus;
  components: { material: string; required: number; issued: number; batches: string[] }[];
  confirmed: Record<string, { yield?: number; at: string }>;
  received: number;
  batch?: string;
  created: string;
};

export type Characteristic = { id: string; text: string; textEn: string; unit: string; min?: number; max?: number };
export type InspectionLot = {
  id: string;
  order: string;
  material: string;
  batch: string;
  qty: number;
  /** Posición del lote (0 = primero): decide qué resultados da el laboratorio */
  seq: number;
  results: Record<string, number>;
  ud?: "A" | "R";
  status: "REL" | "RREC" | "UD";
};

export type DocLine = { doc: string; at: string; user: string; tx: string; text: string };

export type ErpState = {
  version: 1;
  batches: Batch[];
  orders: Order[];
  lots: InspectionLot[];
  log: DocLine[];
  counters: { order: number; doc: number; lot: number; batch: number };
  /** Transacciones consultadas, para comprobar misiones de búsqueda */
  viewed: string[];
};

export const USER = "ALUMNO";
export const TODAY = "2026-11-18";

export const materials: Material[] = [
  { id: "RM-1001", name: "Intermedio B (ficticio)", nameEn: "Intermediate B", kind: "Materia prima", unit: "kg", inspectionOnReceipt: false },
  { id: "RM-2001", name: "Tolueno", nameEn: "Toluene", kind: "Disolvente", unit: "kg", inspectionOnReceipt: false },
  { id: "RM-3001", name: "Hidróxido de sodio al 50 %", nameEn: "Sodium hydroxide 50 %", kind: "Materia prima", unit: "kg", inspectionOnReceipt: false },
  { id: "FG-5001", name: "API-X (principio activo ficticio)", nameEn: "API-X drug substance", kind: "Producto terminado", unit: "kg", inspectionOnReceipt: true },
];

export const recipes: Recipe[] = [
  {
    id: "50000001",
    material: "FG-5001",
    baseQty: 100,
    components: [
      { material: "RM-1001", qtyPer100: 120 },
      { material: "RM-2001", qtyPer100: 400 },
      { material: "RM-3001", qtyPer100: 30 },
    ],
    phases: [
      { id: "0010", text: "Carga e inertización del reactor", textEn: "Reactor charging and inerting" },
      { id: "0020", text: "Reacción", textEn: "Reaction" },
      { id: "0030", text: "Cristalización y centrifugación", textEn: "Crystallization and centrifugation" },
      { id: "0040", text: "Secado y descarga", textEn: "Drying and discharge" },
    ],
  },
];

export const characteristics: Characteristic[] = [
  { id: "ASSAY", text: "Valoración (riqueza)", textEn: "Assay", unit: "%", min: 98.0, max: 102.0 },
  { id: "WATER", text: "Agua (Karl Fischer)", textEn: "Water content (KF)", unit: "%", max: 0.5 },
  { id: "IMP", text: "Impureza individual no especificada", textEn: "Any unspecified impurity", unit: "%", max: 0.1 },
];

/** Resultados del laboratorio (ficticios) para el 1.er, 2.º… lote de inspección */
export const labResults: Record<string, number>[] = [
  { ASSAY: 99.6, WATER: 0.21, IMP: 0.06 },
  { ASSAY: 99.1, WATER: 0.18, IMP: 0.14 },
  { ASSAY: 100.2, WATER: 0.3, IMP: 0.05 },
];

export function labFor(lot: Pick<InspectionLot, "seq">) {
  return labResults[lot.seq % labResults.length];
}

export function initialState(): ErpState {
  return {
    version: 1,
    batches: [
      { id: "B1001A", material: "RM-1001", qty: 300, stock: "libre", expiry: "2027-09-30", origin: "Recepción proveedor" },
      { id: "B1001B", material: "RM-1001", qty: 250, stock: "calidad", expiry: "2028-02-28", origin: "Recepción proveedor (pendiente de análisis)" },
      { id: "B1001C", material: "RM-1001", qty: 180, stock: "libre", expiry: "2026-10-31", origin: "Recepción proveedor" },
      { id: "B1001D", material: "RM-1001", qty: 400, stock: "libre", expiry: "2028-05-31", origin: "Recepción proveedor" },
      { id: "T2001A", material: "RM-2001", qty: 2500, stock: "libre", expiry: "2028-12-31", origin: "Cisterna" },
      { id: "N3001A", material: "RM-3001", qty: 90, stock: "bloqueado", expiry: "2027-06-30", origin: "Recepción proveedor (rechazado por Calidad)" },
      { id: "N3001B", material: "RM-3001", qty: 200, stock: "libre", expiry: "2027-08-31", origin: "Recepción proveedor" },
    ],
    orders: [],
    lots: [],
    log: [],
    counters: { order: 1000001, doc: 4900000001, lot: 890000000001, batch: 1 },
    viewed: [],
  };
}

// ---------- utilidades ----------

const round = (n: number) => Math.round(n * 1000) / 1000;
export const fmtQty = (n: number) => n.toLocaleString("es-ES", { maximumFractionDigits: 3 });
export const getMaterial = (id: string) => materials.find((m) => m.id === id.trim().toUpperCase());
export const getRecipeFor = (material: string) => recipes.find((r) => r.material === material);
const now = () => new Date().toISOString();

export function stockOf(s: ErpState, material: string) {
  const bs = s.batches.filter((b) => b.material === material);
  const sum = (t: StockType) => round(bs.filter((b) => b.stock === t).reduce((a, b) => a + b.qty, 0));
  return { libre: sum("libre"), calidad: sum("calidad"), bloqueado: sum("bloqueado"), batches: bs };
}

function addLog(s: ErpState, tx: string, text: string): [ErpState, string] {
  const doc = String(s.counters.doc);
  return [
    { ...s, log: [{ doc, at: now(), user: USER, tx, text }, ...s.log], counters: { ...s.counters, doc: s.counters.doc + 1 } },
    doc,
  ];
}

export function markViewed(s: ErpState, key: string): ErpState {
  return s.viewed.includes(key) ? s : { ...s, viewed: [...s.viewed, key] };
}

type Result = { state: ErpState; msg: Msg };
const err = (s: ErpState, text: string, gmp?: string): Result => ({ state: s, msg: { type: "E", text, gmp } });

// ---------- COR1: crear orden de proceso ----------

export function createOrder(s: ErpState, materialId: string, qty: number): Result {
  const mat = getMaterial(materialId);
  if (!mat) return err(s, `El material ${materialId || "(vacío)"} no existe.`);
  const recipe = getRecipeFor(mat.id);
  if (!recipe) return err(s, `No hay receta maestra para ${mat.id}: solo se fabrican productos con receta aprobada.`);
  if (!(qty > 0)) return err(s, "Indica una cantidad mayor que cero.");
  if (qty > 500) return err(s, "La cantidad supera el tamaño máximo de lote validado (500 kg).", "Fabricar fuera del tamaño de lote validado sería un cambio no aprobado: necesitaría control de cambios.");
  const id = String(s.counters.order);
  const order: Order = {
    id,
    material: mat.id,
    recipe: recipe.id,
    qty,
    status: "CRTD",
    components: recipe.components.map((c) => ({ material: c.material, required: round((c.qtyPer100 * qty) / recipe.baseQty), issued: 0, batches: [] })),
    confirmed: {},
    received: 0,
    created: now(),
  };
  let next: ErpState = { ...s, orders: [...s.orders, order], counters: { ...s.counters, order: s.counters.order + 1 } };
  [next] = addLog(next, "COR1", `Orden ${id} creada: ${fmtQty(qty)} kg de ${mat.id}`);
  return { state: next, msg: { type: "S", text: `Orden de proceso ${id} creada (estado CRTD). Para fabricar hay que liberarla.` } };
}

export function findOrder(s: ErpState, id: string) {
  return s.orders.find((o) => o.id === id.trim());
}

// ---------- COR2: liberar ----------

export function releaseOrder(s: ErpState, orderId: string): Result {
  const o = findOrder(s, orderId);
  if (!o) return err(s, `La orden ${orderId || "(vacía)"} no existe.`);
  if (o.status !== "CRTD") return { state: s, msg: { type: "W", text: `La orden ${o.id} ya estaba liberada (estado ${o.status}).` } };
  let next: ErpState = { ...s, orders: s.orders.map((x) => (x.id === o.id ? { ...x, status: "REL" as const } : x)) };
  [next] = addLog(next, "COR2", `Orden ${o.id} liberada`);
  return { state: next, msg: { type: "S", text: `Orden ${o.id} liberada (estado REL). Ya se pueden consumir materiales y notificar fases.` } };
}

// ---------- MIGO 261: salida de mercancía para la orden ----------

export function goodsIssue(s: ErpState, orderId: string, batchId: string, qty: number): Result {
  const o = findOrder(s, orderId);
  if (!o) return err(s, `La orden ${orderId || "(vacía)"} no existe.`);
  if (o.status === "CRTD") return err(s, `La orden ${o.id} no está liberada. Libérala con COR2.`);
  if (o.status === "DLV") return err(s, `La orden ${o.id} ya está entregada y cerrada para consumos.`);
  const b = s.batches.find((x) => x.id === batchId.trim().toUpperCase());
  if (!b) return err(s, `El lote ${batchId || "(vacío)"} no existe.`);
  const comp = o.components.find((c) => c.material === b.material);
  if (!comp) return err(s, `El material ${b.material} del lote ${b.id} no está en la lista de componentes de la orden.`, "Cargar un material que no está en la receta es un error de identidad: la doble verificación en dispensado existe para evitarlo.");
  if (b.stock === "calidad") return err(s, `El lote ${b.id} está en stock de control de calidad (cuarentena).`, "Solo se pueden usar materiales aprobados por la unidad de calidad (ICH Q7, 7.2).");
  if (b.stock === "bloqueado") return err(s, `El lote ${b.id} está bloqueado.`, "Un material rechazado o bloqueado nunca se usa en fabricación.");
  if (b.expiry < TODAY) return err(s, `El lote ${b.id} caducó el ${b.expiry.split("-").reverse().join("/")}.`, "Usar un material caducado o fuera de fecha de reanálisis es una desviación de GMP.");
  if (!(qty > 0)) return err(s, "Indica una cantidad mayor que cero.");
  if (qty > b.qty + 1e-9) return err(s, `El lote ${b.id} solo tiene ${fmtQty(b.qty)} kg disponibles.`);
  const newIssued = round(comp.issued + qty);
  const next: ErpState = {
    ...s,
    batches: s.batches.map((x) => (x.id === b.id ? { ...x, qty: round(x.qty - qty) } : x)),
    orders: s.orders.map((x) =>
      x.id !== o.id
        ? x
        : {
            ...x,
            components: x.components.map((c) =>
              c.material !== b.material ? c : { ...c, issued: newIssued, batches: c.batches.includes(b.id) ? c.batches : [...c.batches, b.id] },
            ),
          },
    ),
  };
  const [logged, doc] = addLog(next, "MIGO 261", `Salida de ${fmtQty(qty)} kg del lote ${b.id} (${b.material}) a la orden ${o.id}`);
  if (newIssued > comp.required * 1.02) {
    return {
      state: logged,
      msg: {
        type: "W",
        text: `Documento ${doc} contabilizado, pero el consumo de ${b.material} (${fmtQty(newIssued)} kg) supera lo previsto (${fmtQty(comp.required)} kg).`,
        gmp: "Un sobreconsumo debe explicarse en el registro de lote: puede ser un error de pesada o una desviación.",
      },
    };
  }
  return { state: logged, msg: { type: "S", text: `Documento de material ${doc} contabilizado: ${fmtQty(qty)} kg de ${b.id} a la orden ${o.id}.` } };
}

// ---------- COR6N: notificar fase ----------

export function confirmPhase(s: ErpState, orderId: string, phaseId: string, yieldQty?: number): Result {
  const o = findOrder(s, orderId);
  if (!o) return err(s, `La orden ${orderId || "(vacía)"} no existe.`);
  if (o.status === "CRTD") return err(s, `La orden ${o.id} no está liberada.`);
  const recipe = recipes.find((r) => r.id === o.recipe)!;
  const idx = recipe.phases.findIndex((p) => p.id === phaseId.trim());
  if (idx < 0) return err(s, `La fase ${phaseId || "(vacía)"} no existe en la orden. Fases: ${recipe.phases.map((p) => p.id).join(", ")}.`);
  const phase = recipe.phases[idx];
  if (o.confirmed[phase.id]) return err(s, `La fase ${phase.id} ya está notificada.`);
  const prev = recipe.phases[idx - 1];
  if (prev && !o.confirmed[prev.id]) return err(s, `Primero hay que notificar la fase ${prev.id} (${prev.text}).`, "Las etapas se ejecutan y registran en el orden de la instrucción de fabricación.");
  if (phase.id === "0010") {
    const missing = o.components.filter((c) => c.issued < c.required * 0.98);
    if (missing.length) return err(s, `Faltan consumos para la carga: ${missing.map((c) => `${c.material} (${fmtQty(c.issued)}/${fmtQty(c.required)} kg)`).join(", ")}.`, "No se notifica una carga que no se ha hecho: el registro debe reflejar lo que pasó realmente (ALCOA+).");
  }
  const last = idx === recipe.phases.length - 1;
  if (last && !(yieldQty && yieldQty > 0)) return err(s, "En la última fase indica la cantidad obtenida (rendimiento, kg).");
  if (last && yieldQty! > o.qty * 1.05) return err(s, `La cantidad obtenida (${fmtQty(yieldQty!)} kg) supera la teórica (${fmtQty(o.qty)} kg) en más de un 5 %.`, "Un rendimiento por encima de lo posible indica un error de pesada o de registro: se investiga.");
  if (last && yieldQty! < o.qty * 0.5) return err(s, `La cantidad obtenida (${fmtQty(yieldQty!)} kg) es menos de la mitad de la teórica (${fmtQty(o.qty)} kg). Revisa el dato: ¿has escrito bien los kilos?`, "Un rendimiento muy por debajo de lo esperado no se notifica sin más: se comprueba el dato y, si es real, se abre una desviación antes de seguir.");
  const confirmed = { ...o.confirmed, [phase.id]: { yield: last ? yieldQty : undefined, at: now() } };
  const status: OrderStatus = last ? "CNF" : "PCNF";
  let next: ErpState = { ...s, orders: s.orders.map((x) => (x.id === o.id ? { ...x, confirmed, status: x.status === "DLV" ? "DLV" : status } : x)) };
  [next] = addLog(next, "COR6N", `Notificada fase ${phase.id} de la orden ${o.id}${last ? ` (obtenido ${fmtQty(yieldQty!)} kg)` : ""}`);
  return { state: next, msg: { type: "S", text: `Notificación de la fase ${phase.id} grabada.${last ? " Orden notificada al completo (CNF)." : ""}` } };
}

// ---------- MIGO 101: entrada de producto de la orden ----------

export function goodsReceipt(s: ErpState, orderId: string, qty: number): Result {
  const o = findOrder(s, orderId);
  if (!o) return err(s, `La orden ${orderId || "(vacía)"} no existe.`);
  if (o.status === "CRTD") return err(s, `La orden ${o.id} no está liberada.`);
  if (o.status === "DLV") return err(s, `La orden ${o.id} ya tiene la entrada hecha.`);
  if (o.status !== "CNF") return err(s, "Notifica todas las fases antes de dar entrada al producto.", "En esta planta ficticia el producto entra en almacén solo cuando el lote está terminado y registrado.");
  const declared = o.confirmed["0040"]?.yield ?? 0;
  if (!(qty > 0)) return err(s, "Indica una cantidad mayor que cero.");
  if (Math.abs(qty - declared) > 0.001) return err(s, `La cantidad (${fmtQty(qty)} kg) no coincide con la notificada en la fase 0040 (${fmtQty(declared)} kg).`, "Los datos de un mismo lote deben ser coherentes en todos los registros (ALCOA+: exacto).");
  const mat = getMaterial(o.material)!;
  const batchId = `API${String(s.counters.batch).padStart(4, "0")}`;
  const batch: Batch = { id: batchId, material: o.material, qty, stock: mat.inspectionOnReceipt ? "calidad" : "libre", expiry: "2028-11-30", origin: `Orden ${o.id}` };
  let next: ErpState = {
    ...s,
    batches: [...s.batches, batch],
    orders: s.orders.map((x) => (x.id === o.id ? { ...x, received: qty, batch: batchId, status: "DLV" as const } : x)),
    counters: { ...s.counters, batch: s.counters.batch + 1 },
  };
  const [logged, doc] = addLog(next, "MIGO 101", `Entrada de ${fmtQty(qty)} kg de ${o.material}, lote ${batchId}, desde la orden ${o.id}`);
  next = logged;
  let lotText = "";
  if (mat.inspectionOnReceipt) {
    const lotId = String(next.counters.lot);
    const lot: InspectionLot = { id: lotId, order: o.id, material: o.material, batch: batchId, qty, seq: next.lots.length, results: {}, status: "REL" };
    next = { ...next, lots: [...next.lots, lot], counters: { ...next.counters, lot: next.counters.lot + 1 } };
    lotText = ` Se ha creado el lote de inspección ${lotId}: el producto queda en stock de calidad hasta la decisión de empleo.`;
  }
  return { state: next, msg: { type: "S", text: `Documento ${doc}: lote ${batchId} creado.${lotText}` } };
}

// ---------- QE51N: registrar resultados ----------

export function evaluate(c: Characteristic, v: number) {
  return (c.min === undefined || v >= c.min) && (c.max === undefined || v <= c.max);
}

export function recordResults(s: ErpState, lotId: string, values: Record<string, number>): Result {
  const lot = s.lots.find((l) => l.id === lotId.trim());
  if (!lot) return err(s, `El lote de inspección ${lotId || "(vacío)"} no existe.`);
  if (lot.status === "UD") return err(s, "El lote ya tiene decisión de empleo: los resultados no se pueden cambiar.", "Cambiar datos después de cerrar un lote sin justificación ni audit trail es una falta grave de integridad de datos.");
  for (const c of characteristics) {
    if (!Number.isFinite(values[c.id])) return err(s, `Falta el resultado de "${c.text}".`);
  }
  const lab = labFor(lot);
  const wrong = characteristics.filter((c) => Math.abs(values[c.id] - lab[c.id]) > 1e-9);
  if (wrong.length)
    return err(s, `No coincide con el informe del laboratorio: ${wrong.map((c) => c.text).join(", ")}.`, "Los resultados se transcriben exactamente como están en el registro original (ALCOA+: original y exacto).");
  let next: ErpState = { ...s, lots: s.lots.map((l) => (l.id === lot.id ? { ...l, results: { ...values }, status: "RREC" as const } : l)) };
  const bad = characteristics.filter((c) => !evaluate(c, values[c.id]));
  [next] = addLog(next, "QE51N", `Resultados registrados en el lote de inspección ${lot.id}${bad.length ? ` (${bad.length} fuera de especificación)` : ""}`);
  if (bad.length)
    return {
      state: next,
      msg: { type: "W", text: `Resultados grabados. Fuera de especificación: ${bad.map((c) => c.text).join(", ")}.`, gmp: "Un resultado OOS se investiga según procedimiento. Si se confirma, el lote se rechaza." },
    };
  return { state: next, msg: { type: "S", text: `Resultados grabados en el lote ${lot.id}: todo conforme.` } };
}

// ---------- QA11: decisión de empleo ----------

export function usageDecision(s: ErpState, lotId: string, ud: "A" | "R"): Result {
  const lot = s.lots.find((l) => l.id === lotId.trim());
  if (!lot) return err(s, `El lote de inspección ${lotId || "(vacío)"} no existe.`);
  if (lot.status === "UD") return err(s, "Este lote ya tiene decisión de empleo.");
  if (lot.status !== "RREC") return err(s, "Primero registra los resultados (QE51N).", "No se puede decidir sobre un lote sin resultados completos.");
  const bad = characteristics.filter((c) => !evaluate(c, lot.results[c.id]));
  if (ud === "A" && bad.length) return err(s, "No se puede aceptar un lote con resultados fuera de especificación.", "Liberar un lote OOS sería un fallo grave de GMP. La decisión correcta es rechazar (o mantener bloqueado mientras se investiga).");
  const stock: StockType = ud === "A" ? "libre" : "bloqueado";
  let next: ErpState = {
    ...s,
    lots: s.lots.map((l) => (l.id === lot.id ? { ...l, ud, status: "UD" as const } : l)),
    batches: s.batches.map((b) => (b.id === lot.batch ? { ...b, stock } : b)),
  };
  [next] = addLog(next, "QA11", `Decisión de empleo ${ud === "A" ? "A (aceptado)" : "R (rechazado)"} del lote ${lot.batch}: traspaso a stock ${stock}`);
  return { state: next, msg: { type: "S", text: `Decisión de empleo grabada. Lote ${lot.batch} traspasado a stock ${stock === "libre" ? "de libre utilización" : "bloqueado"}.` } };
}

// ---------- misiones ----------

export type Mission = { id: string; title: string; taskEn: string; hint: string; done: (s: ErpState) => boolean };

export const missions: Mission[] = [
  {
    id: "m1-stock",
    title: "Consulta el stock del Intermedio B (RM-1001) y fíjate en qué lotes puedes usar",
    taskEn: "Display the stock overview for material RM-1001.",
    hint: "Transacción MMBE, material RM-1001.",
    done: (s) => s.viewed.includes("MMBE:RM-1001"),
  },
  {
    id: "m2-receta",
    title: "Consulta la receta maestra del API-X (FG-5001)",
    taskEn: "Display the master recipe for material FG-5001.",
    hint: "Transacción C203, material FG-5001.",
    done: (s) => s.viewed.includes("C203:FG-5001"),
  },
  {
    id: "m3-crear",
    title: "Crea una orden de proceso de 200 kg de FG-5001",
    taskEn: "Create a process order for 200 kg of material FG-5001.",
    hint: "Transacción COR1.",
    done: (s) => s.orders.some((o) => o.material === "FG-5001" && o.qty === 200),
  },
  {
    id: "m4-liberar",
    title: "Libera la orden",
    taskEn: "Release the process order.",
    hint: "Transacción COR2 con el número de orden.",
    done: (s) => s.orders.some((o) => o.status !== "CRTD"),
  },
  {
    id: "m5-consumos",
    title: "Da salida a todos los componentes con lotes válidos",
    taskEn: "Post the goods issue (movement type 261) for all components using valid batches.",
    hint: "MIGO, movimiento 261. Mira en MMBE qué lotes están en libre utilización y no caducados.",
    done: (s) => s.orders.some((o) => o.components.every((c) => c.issued >= c.required * 0.98)),
  },
  {
    id: "m6-notificar",
    title: "Notifica las 4 fases de la orden (rendimiento en la última)",
    taskEn: "Confirm all phases of the process order, entering the yield in the final phase.",
    hint: "COR6N, fases 0010 a 0040 en orden.",
    done: (s) => s.orders.some((o) => o.status === "CNF" || o.status === "DLV"),
  },
  {
    id: "m7-entrada",
    title: "Da entrada al producto terminado",
    taskEn: "Post the goods receipt (movement type 101) for the process order.",
    hint: "MIGO, movimiento 101, con la misma cantidad notificada.",
    done: (s) => s.orders.some((o) => o.status === "DLV"),
  },
  {
    id: "m8-liberar-lote",
    title: "Registra los resultados del laboratorio y toma la decisión de empleo correcta",
    taskEn: "Record the inspection results and make the usage decision for the inspection lot.",
    hint: "QE51N con los resultados del laboratorio y después QA11.",
    done: (s) => s.lots.some((l) => l.seq === 0 && l.ud === "A"),
  },
  {
    id: "m9-oos",
    title: "Fabrica un segundo lote y gestiona su resultado fuera de especificación",
    taskEn: "Produce a second batch and handle its out-of-specification result correctly.",
    hint: "Repite el flujo. El laboratorio dará una impureza fuera de límite: el lote debe acabar rechazado.",
    done: (s) => s.lots.some((l) => l.seq === 1 && l.ud === "R"),
  },
];
