// Cómo se comprueba cada misión de planta de las certificaciones (la lista está en `src/certs/misiones-planta.ts`).
// Cada simulador llama a su función al terminar; la página de certificaciones repasa además lo guardado en el
// navegador, por si una misión se cumplió antes de existir este registro.
import { migrate, type Sim } from "./engine";
import { results as nutscheResults, migrateN, type NState } from "./nutsche";
import { revisar, type Hoja } from "./reactor/hoja";
import type { State as ReactorState } from "./reactor/model";
import { reviewBatch } from "./review";

/** Lote completo FX-101 cerrado. */
export function misionesLote(s: Sim): string[] {
  if (!s.closed) return [];
  const r = reviewBatch(s);
  const out: string[] = [];
  const graves = r.findings.some((f) => f.sev === "crítico" || f.sev === "mayor");
  const incidencias = Object.values(s.events).filter((e) => e.active).length;
  if (s.guided) out.push("pl-lote-guiado");
  if (!s.guided && r.decision === "Liberable" && !graves) out.push("pl-lote-liberable");
  if (incidencias >= 2 && !r.findings.some((f) => f.sev === "crítico" || f.area === "Seguridad")) out.push("pl-lote-incidencias");
  if (incidencias >= 4 && r.score >= 90) out.push("pl-lote-turno-duro");
  return out;
}

/** Reactor R-204: cuenta cuando el lote se ha descargado. */
export function misionesReactor(s: ReactorState, h: Hoja): string[] {
  if (s.mDescargado <= 0) return [];
  const r = revisar(s, h);
  const crit = r.hallazgos.some((x) => x.grav === "crítica");
  const may = r.hallazgos.some((x) => x.grav === "mayor");
  const out: string[] = [];
  if (!crit && !may) out.push("pl-r204-conforme");
  const salieron = s.faults.filter((f) => f.desde !== null);
  if (s.faults.length >= 2 && salieron.length >= 2 && salieron.every((f) => f.respuesta !== null) && !crit) out.push("pl-r204-turno");
  return out;
}

/** Nutsche FD-401 cerrado. */
export function misionesNutsche(s: NState): string[] {
  if (!s.closed) return [];
  const ok = nutscheResults(s).every((x) => x.ok) && !s.findings.some((f) => f.sev === "crítico" || f.sev === "mayor");
  if (!ok) return [];
  return s.mode === "relevo" ? (s.supervisorTold ? ["pl-nutsche-relevo", "pl-nutsche"] : []) : ["pl-nutsche"];
}

/** Auditoría de hojas: mejor nota de cada hoja. Nota máxima = todos los errores con su tipo y ninguna línea buena marcada. */
export function misionesAuditoria(best: Record<string, { score: number; max: number }>): string[] {
  return Object.entries(best)
    .filter(([, b]) => b.max > 0 && b.score >= b.max)
    .map(([id]) => `pl-auditoria-${id}`);
}

/** Repasa lo que hay guardado en este navegador (solo en el cliente). */
export function misionesGuardadas(): string[] {
  const out: string[] = [];
  const leer = <T,>(key: string): T | null => {
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? (JSON.parse(raw) as T) : null;
    } catch {
      return null;
    }
  };
  const intenta = (fn: () => string[]) => {
    try {
      out.push(...fn());
    } catch {
      /* partida de una versión antigua que no se puede leer: no cuenta */
    }
  };
  const lote = leer<Sim>("quimica-app:simulador:v1");
  if (lote?.version === 1) intenta(() => misionesLote(migrate(lote)));
  const reactor = leer<{ s: ReactorState; hoja: Hoja }>("quimica-app:reactor-r204");
  if (reactor?.s && reactor.hoja && Array.isArray(reactor.s.faults)) intenta(() => misionesReactor(reactor.s, reactor.hoja));
  const nutsche = leer<NState>("quimica-app:nutsche:v1");
  if (nutsche) intenta(() => misionesNutsche(migrateN(nutsche)));
  const auditoria = leer<Record<string, { score: number; max: number }>>("quimica-app:auditoria:v1");
  if (auditoria) intenta(() => misionesAuditoria(auditoria));
  return out;
}
