// Indicador "listo para presentarte". Criterio propio de la app, más exigente que el aprobado:
// no garantiza el resultado del examen real, pero si se cumple todo, lo normal es aprobar con margen.
import type { Progress } from "@/lib/progress";
import { showGrade } from "./grading";
import { today, type CertState } from "./useCertState";

/** Lo que el indicador necesita saber de una certificación (lo calcula el servidor) */
export type PrepSummary = {
  certId: string;
  lessons: string[];
  mocks: { id: string; title: string; pass: number; scale: "0-10" | "%" }[];
  cases: string[];
  ids: string[];
  practice: "plant" | "sap";
};

export type Criterion = { key: string; label: string; detail: string; progress: number; ok: boolean; href?: string };

export const MARGIN = 0.1;
const MAX_BACKLOG = 5;

export function readiness(p: PrepSummary, s: CertState, progress: Progress) {
  const crit: Criterion[] = [];

  const done = p.lessons.filter((l) => progress[l]?.done).length;
  const cov = p.lessons.length ? done / p.lessons.length : 1;
  crit.push({ key: "temario", label: "Temario estudiado", detail: `${done} de ${p.lessons.length} lecciones del temario oficial (hace falta el 80 %)`, progress: Math.min(1, cov / 0.8), ok: cov >= 0.8 });

  const mockOk = p.mocks.map((m) => {
    const h = s.mocks[m.id] ?? [];
    const last2 = h.slice(-2);
    const target = Math.min(1, m.pass + MARGIN);
    return { m, h, ok: last2.length === 2 && last2.every((r) => r.score / r.total >= target), target };
  });
  const nOk = mockOk.filter((x) => x.ok).length;
  crit.push({
    key: "simulacros",
    label: "Simulacros con margen",
    detail:
      p.mocks.length === 1
        ? `Los 2 últimos intentos con ${showGrade(mockOk[0].target, p.mocks[0].scale)} o más`
        : `${nOk} de ${p.mocks.length} pruebas con los 2 últimos intentos por encima de ${showGrade(mockOk[0]?.target ?? 0, p.mocks[0]?.scale ?? "%")}`,
    progress: p.mocks.length ? mockOk.reduce((a, x) => a + (x.ok ? 1 : Math.min(x.h.length, 2) * 0.25), 0) / p.mocks.length : 1,
    ok: nOk === p.mocks.length,
  });

  if (p.cases.length) {
    const cOk = p.cases.filter((c) => (s.cases[c] ?? 0) >= 0.7).length;
    crit.push({ key: "supuestos", label: "Supuestos prácticos", detail: `${cOk} de ${p.cases.length} superados con el 70 % o más`, progress: cOk / p.cases.length, ok: cOk === p.cases.length });
  }

  const ids = new Set(p.ids);
  const t = today();
  const started = p.mocks.some((m) => (s.mocks[m.id]?.length ?? 0) > 0);
  const backlog = Object.entries(s.srs).filter(([id, c]) => ids.has(id) && c.due <= t).length;
  crit.push({
    key: "repaso",
    label: "Repaso de fallos al día",
    detail: !started ? "Empieza por un simulacro: tus fallos se repasan aquí" : backlog === 0 ? "Sin fallos pendientes" : `${backlog} pregunta${backlog === 1 ? "" : "s"} pendiente${backlog === 1 ? "" : "s"} (máximo ${MAX_BACKLOG})`,
    progress: !started ? 0 : backlog <= MAX_BACKLOG ? 1 : MAX_BACKLOG / backlog,
    ok: started && backlog <= MAX_BACKLOG,
    href: "/repaso",
  });

  if (p.practice === "plant") {
    const pl = s.plant;
    crit.push({
      key: "practica",
      label: "Práctica en planta",
      detail: pl ? `Mejor lote cerrado en el simulador: ${pl.score}/100 (${pl.decision}). Hace falta 80 y liberable.` : "Cierra un lote en el simulador de planta con 80/100 o más y liberable",
      progress: pl ? Math.min(1, pl.score / 80) : 0,
      ok: !!pl && pl.score >= 80 && pl.decision === "Liberable",
      href: "/simulador",
    });
  } else {
    const ex = s.sapExam?.best;
    const f = ex ? ex.score / ex.total : 0;
    crit.push({
      key: "practica",
      label: "Examen práctico de SAP",
      detail: ex ? `Mejor nota: ${Math.round(f * 100)} % (hace falta el ${Math.round((0.64 + MARGIN) * 100)} %)` : `Aprueba el examen práctico cronometrado con el ${Math.round((0.64 + MARGIN) * 100)} % o más`,
      progress: Math.min(1, f / (0.64 + MARGIN)),
      ok: f >= 0.64 + MARGIN,
      href: "/sap/examen",
    });
  }

  const pct = Math.round((crit.reduce((a, c) => a + c.progress, 0) / crit.length) * 100);
  const okCount = crit.filter((c) => c.ok).length;
  const status = okCount === crit.length ? "Listo para presentarte" : okCount >= crit.length - 2 && pct >= 70 ? "Cerca" : "En preparación";
  return { crit, pct, status, okCount };
}
