"use client";

import { useCallback, useEffect, useState } from "react";

// Estado propio de la sección de certificaciones. Va en una clave distinta del progreso de lecciones.
const KEY = "quimica-app:certificaciones:v1";

export type ExamResult = { score: number; total: number; date: string };

export type CertState = {
  /** Pasos de la ruta marcados como hechos */
  roadmap: Record<string, boolean>;
  /** Mejor y último resultado de cada simulacro, por id de módulo */
  exams: Record<string, { best: ExamResult; last: ExamResult }>;
  /** Autoevaluación: id de unidad → RP → valor 1–4 */
  self: Record<string, Record<string, number>>;
  /** Misiones del simulador ERP completadas */
  missions: Record<string, string>;
};

const empty: CertState = { roadmap: {}, exams: {}, self: {}, missions: {} };

function read(): CertState {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? { ...empty, ...(JSON.parse(raw) as Partial<CertState>) } : empty;
  } catch {
    return empty;
  }
}

function write(s: CertState) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(s));
  } catch {
    /* sin almacenamiento: dura solo esta visita */
  }
}

export function useCertState() {
  const [state, setState] = useState<CertState>(empty);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setState(read());
    setLoaded(true);
  }, []);

  const update = useCallback((fn: (s: CertState) => CertState) => {
    setState((prev) => {
      const next = fn(prev);
      write(next);
      return next;
    });
  }, []);

  const toggleStep = useCallback(
    (id: string) => update((s) => ({ ...s, roadmap: { ...s.roadmap, [id]: !s.roadmap[id] } })),
    [update],
  );

  const saveExam = useCallback(
    (moduleId: string, r: ExamResult) =>
      update((s) => {
        const prev = s.exams[moduleId];
        const better = !prev || r.score / r.total > prev.best.score / prev.best.total;
        return { ...s, exams: { ...s.exams, [moduleId]: { best: better ? r : prev.best, last: r } } };
      }),
    [update],
  );

  const rate = useCallback(
    (unitId: string, rp: string, value: number) =>
      update((s) => ({ ...s, self: { ...s.self, [unitId]: { ...s.self[unitId], [rp]: value } } })),
    [update],
  );

  const completeMission = useCallback(
    (id: string) => update((s) => (s.missions[id] ? s : { ...s, missions: { ...s.missions, [id]: new Date().toISOString() } })),
    [update],
  );

  return { state, loaded, toggleStep, saveExam, rate, completeMission };
}

/** Nota de aprobado de los simulacros de la app (criterio propio, no oficial) */
export const PASS = 0.7;
