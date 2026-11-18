// Examen práctico cronometrado sobre el simulador ERP. Cada intento sortea una variante
// (cantidad, rendimiento e historial de lotes) para que no se pueda aprender de memoria.
import { characteristics, evaluate, initialState, labFor, recipes, type ErpState } from "./engine";

export const EXAM_MINUTES = 30;
export const EXAM_PASS = 0.64; // nota de corte de C_TS422

export type ExamVariant = {
  qty: number;
  yieldKg: number;
  /** Lotes de inspección anteriores ya cerrados: cambia qué resultados dará el laboratorio */
  history: number;
};

export type Lookup = { id: string; q: string; qEn: string; answer: string | number; unit?: string };

export type GradedTask = { id: string; text: string; textEn: string; points: number; ok: boolean; why: string };

const QTYS = [150, 200, 250, 300];
const YIELDS = [0.9, 0.92, 0.94];

export function randomVariant(rand = Math.random): ExamVariant {
  const qty = QTYS[Math.floor(rand() * QTYS.length)];
  const yieldKg = Math.round(qty * YIELDS[Math.floor(rand() * YIELDS.length)] * 10) / 10;
  const history = Math.floor(rand() * 3); // 0, 1 o 2 lotes anteriores
  return { qty, yieldKg, history };
}

/** Estado inicial del examen: el de práctica más los lotes de API ya liberados o rechazados antes */
export function examState(v: ExamVariant): ErpState {
  const s = initialState();
  for (let i = 0; i < v.history; i++) {
    const batch = `API0${900 + i}`;
    const lab = labFor({ seq: i });
    const ok = characteristics.every((c) => evaluate(c, lab[c.id]));
    s.batches.push({ id: batch, material: "FG-5001", qty: 180, stock: ok ? "libre" : "bloqueado", expiry: "2028-06-30", origin: "Orden anterior (histórico)" });
    s.lots.push({ id: String(889999999990 + i), order: "0999990", material: "FG-5001", batch, qty: 180, seq: i, results: { ...lab }, status: "UD", ud: ok ? "A" : "R" });
  }
  return s;
}

/** Preguntas que se responden consultando el sistema (MMBE, C203) */
export function lookups(v: ExamVariant): Lookup[] {
  const r = recipes[0];
  const tol = r.components.find((c) => c.material === "RM-2001")!;
  return [
    { id: "expired", q: "¿Qué lote de RM-1001 está caducado y no se puede consumir?", qEn: "Which batch of RM-1001 is expired?", answer: "B1001C" },
    { id: "usable", q: "¿Cuántos kg de RM-1001 hay en libre utilización y sin caducar?", qEn: "How many kg of RM-1001 are unrestricted and not expired?", answer: 700, unit: "kg" },
    { id: "toluene", q: `¿Cuántos kg de tolueno (RM-2001) necesita una orden de ${v.qty} kg de FG-5001?`, qEn: `How many kg of RM-2001 does a ${v.qty} kg process order of FG-5001 require?`, answer: (tol.qtyPer100 * v.qty) / r.baseQty, unit: "kg" },
  ];
}

function sameAnswer(expected: string | number, given: string | undefined) {
  if (given === undefined) return false;
  if (typeof expected === "number") {
    const n = Number(given.trim().replace(/\./g, "").replace(",", "."));
    return Number.isFinite(n) && Math.abs(n - expected) < 0.01;
  }
  return given.trim().toUpperCase() === expected;
}

export function grade(s: ErpState, v: ExamVariant, answers: Record<string, string>): { tasks: GradedTask[]; score: number; total: number } {
  const L = lookups(v);
  const look = (id: string) => L.find((l) => l.id === id)!;
  const order = s.orders.find((o) => o.material === "FG-5001" && o.qty === v.qty);
  const lot = order ? s.lots.find((l) => l.order === order.id) : undefined;
  const lab = lot ? labFor(lot) : undefined;
  const conform = lab ? characteristics.every((c) => evaluate(c, lab[c.id])) : undefined;
  const issuedOk = !!order && order.components.every((c) => c.issued >= c.required * 0.98 && c.issued <= c.required * 1.02);
  const allPhases = !!order && (order.status === "CNF" || order.status === "DLV");
  const yieldOk = !!order && Math.abs((order.confirmed["0040"]?.yield ?? -1) - v.yieldKg) < 0.001;

  const t = (id: string, text: string, textEn: string, points: number, ok: boolean, why: string): GradedTask => ({ id, text, textEn, points, ok, why });
  const tasks: GradedTask[] = [
    t("expired", look("expired").q, look("expired").qEn, 8, sameAnswer(look("expired").answer, answers.expired), `Respuesta: ${look("expired").answer}. En MMBE se ve su fecha de caducidad, 31/10/2026, anterior a hoy.`),
    t("usable", look("usable").q, look("usable").qEn, 8, sameAnswer(look("usable").answer, answers.usable), "Respuesta: 700 kg (B1001A 300 + B1001D 400). B1001B está en calidad y B1001C, caducado."),
    t("toluene", look("toluene").q, look("toluene").qEn, 8, sameAnswer(look("toluene").answer, answers.toluene), `Respuesta: ${look("toluene").answer} kg. La receta pide 400 kg de tolueno por cada 100 kg de producto.`),
    t("create", `Crear la orden de proceso de ${v.qty} kg de FG-5001`, `Create a process order for ${v.qty} kg of FG-5001`, 10, !!order, order ? `Orden ${order.id} creada.` : `No hay ninguna orden de FG-5001 de ${v.qty} kg (COR1).`),
    t("release", "Liberar la orden", "Release the process order", 6, !!order && order.status !== "CRTD", order && order.status !== "CRTD" ? "Orden liberada." : "La orden no se ha liberado (COR2)."),
    t("issue", "Consumir todos los componentes (MIGO 261), entre el 98 % y el 102 % de lo previsto", "Post goods issue for all components within ±2 % of the planned quantity", 15, issuedOk, issuedOk ? "Consumos completos y dentro de tolerancia." : "Algún componente no se ha consumido o se ha pasado más de un 2 %."),
    t("confirm", `Notificar las 4 fases, con ${v.yieldKg} kg obtenidos en la 0040`, `Confirm all four phases, entering a yield of ${v.yieldKg} kg in phase 0040`, 12, allPhases && yieldOk, !allPhases ? "Faltan fases por notificar (COR6N)." : yieldOk ? "Fases notificadas con el rendimiento correcto." : `El rendimiento notificado no es ${v.yieldKg} kg.`),
    t("receipt", "Dar entrada al producto terminado (MIGO 101)", "Post the goods receipt for the process order", 8, !!order && order.status === "DLV", order?.status === "DLV" ? `Lote ${order.batch} en stock de calidad.` : "No se ha dado entrada al producto."),
    t("results", "Registrar los resultados del laboratorio en el lote de inspección (QE51N)", "Record the inspection results", 10, !!lot && (lot.status === "RREC" || lot.status === "UD"), lot && lot.status !== "REL" ? "Resultados registrados." : "No se han registrado resultados."),
    t(
      "ud",
      "Tomar la decisión de empleo correcta (QA11)",
      "Make the correct usage decision",
      15,
      !!lot && lot.status === "UD" && lot.ud === (conform ? "A" : "R"),
      !lot || lot.status !== "UD"
        ? "Falta la decisión de empleo."
        : lot.ud === (conform ? "A" : "R")
          ? conform ? "Lote conforme y aceptado." : "Lote fuera de especificación y rechazado: correcto."
          : conform ? "El lote cumplía todas las especificaciones: había que aceptarlo." : "Había un resultado fuera de especificación: había que rechazarlo.",
    ),
  ];
  return { tasks, score: tasks.filter((x) => x.ok).reduce((a, x) => a + x.points, 0), total: tasks.reduce((a, x) => a + x.points, 0) };
}
