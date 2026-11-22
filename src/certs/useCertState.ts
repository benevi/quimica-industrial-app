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
  /** Misiones completadas (simulador ERP y simuladores de planta, con prefijo «pl-») → fecha */
  missions: Record<string, string>;
  /** Repaso espaciado (Leitner): id de pregunta → caja 1–5 y fecha en que vuelve */
  srs: Record<string, SrsCard>;
  /** Simulacros con formato real: últimos intentos (fracción 0–1), el más reciente al final */
  mocks: Record<string, ExamResult[]>;
  /** Supuestos prácticos: mejor fracción de aciertos */
  cases: Record<string, number>;
  /** Examen práctico de SAP: mejor y último */
  sapExam?: { best: ExamResult; last: ExamResult };
  /** Mejor lote cerrado en el simulador de planta */
  plant?: { score: number; decision: string; date: string };
  /** Tarjetas de repaso rápido: id de tarjeta → caja 1–5 y fecha en que vuelve (mismo sistema Leitner que el repaso de fallos) */
  cards?: Record<string, SrsCard>;
  /** Ejercicios de fichas de seguridad (FDS): mejor fracción de aciertos por ejercicio */
  fds?: Record<string, number>;
};

export type SrsCard = { box: number; due: string };

const empty: CertState = { roadmap: {}, exams: {}, self: {}, missions: {}, srs: {}, mocks: {}, cases: {} };

/** Días hasta el siguiente repaso según la caja */
export const SRS_DAYS = [0, 1, 3, 7, 14, 30];
export const today = () => new Date().toISOString().slice(0, 10);
function addDays(d: string, n: number) {
  const x = new Date(d + "T12:00:00");
  x.setDate(x.getDate() + n);
  return x.toISOString().slice(0, 10);
}

/** Aplica el resultado de responder una pregunta al repaso espaciado */
export function srsAnswer(srs: Record<string, SrsCard>, id: string, right: boolean): Record<string, SrsCard> {
  const card = srs[id];
  if (!right) return { ...srs, [id]: { box: 1, due: today() } };
  if (!card) return srs; // acierto en una pregunta que no estaba en repaso: nada que hacer
  const box = Math.min(card.box + 1, 5);
  return { ...srs, [id]: { box, due: addDays(today(), SRS_DAYS[box]) } };
}

/**
 * Tarjetas de repaso: «lo sabía» sube de caja (una tarjeta nueva entra directamente en la caja 2);
 * «no lo sabía» la devuelve a la caja 1 para hoy mismo.
 */
export function cardAnswer(cards: Record<string, SrsCard>, id: string, known: boolean): Record<string, SrsCard> {
  if (!known) return { ...cards, [id]: { box: 1, due: today() } };
  const box = Math.min((cards[id]?.box ?? 1) + 1, 5);
  return { ...cards, [id]: { box, due: addDays(today(), SRS_DAYS[box]) } };
}

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
    // Se parte siempre de lo guardado: varias partes de la página usan este hook a la vez
    // y ninguna debe pisar lo que haya guardado otra.
    const next = fn(read());
    write(next);
    setState(next);
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

  /** Marca varias misiones a la vez (las que ya estaban hechas conservan su fecha) */
  const completeMissions = useCallback(
    (ids: string[]) =>
      update((s) => {
        const nuevas = ids.filter((id) => !s.missions[id]);
        if (!nuevas.length) return s;
        const at = new Date().toISOString();
        return { ...s, missions: { ...s.missions, ...Object.fromEntries(nuevas.map((id) => [id, at])) } };
      }),
    [update],
  );

  /** Registra respuestas (id → acierto) en el repaso espaciado */
  const review = useCallback(
    (marks: Record<string, boolean>) =>
      update((s) => {
        let srs = s.srs;
        for (const [id, ok] of Object.entries(marks)) srs = srsAnswer(srs, id, ok);
        return { ...s, srs };
      }),
    [update],
  );

  const saveMock = useCallback(
    (mockId: string, r: ExamResult, marks: Record<string, boolean>, caseScores: Record<string, number>) =>
      update((s) => {
        let srs = s.srs;
        for (const [id, ok] of Object.entries(marks)) srs = srsAnswer(srs, id, ok);
        const cases = { ...s.cases };
        for (const [id, f] of Object.entries(caseScores)) cases[id] = Math.max(cases[id] ?? 0, f);
        return { ...s, srs, cases, mocks: { ...s.mocks, [mockId]: [...(s.mocks[mockId] ?? []), r].slice(-5) } };
      }),
    [update],
  );

  const saveCase = useCallback(
    (caseId: string, fraction: number, marks: Record<string, boolean>) =>
      update((s) => {
        let srs = s.srs;
        for (const [id, ok] of Object.entries(marks)) srs = srsAnswer(srs, id, ok);
        return { ...s, srs, cases: { ...s.cases, [caseId]: Math.max(s.cases[caseId] ?? 0, fraction) } };
      }),
    [update],
  );

  const saveSapExam = useCallback(
    (r: ExamResult) =>
      update((s) => {
        const prev = s.sapExam;
        const better = !prev || r.score / r.total > prev.best.score / prev.best.total;
        return { ...s, sapExam: { best: better || !prev ? r : prev.best, last: r } };
      }),
    [update],
  );

  const savePlant = useCallback(
    (p: { score: number; decision: string; date: string }) =>
      update((s) => (s.plant && s.plant.score >= p.score ? s : { ...s, plant: p })),
    [update],
  );

  const answerCard = useCallback(
    (id: string, known: boolean) => update((s) => ({ ...s, cards: cardAnswer(s.cards ?? {}, id, known) })),
    [update],
  );

  /** Ejercicio de fichas de seguridad: guarda la mejor nota y manda los fallos al repaso de fallos */
  const saveFds = useCallback(
    (quizId: string, fraction: number, marks: Record<string, boolean>) =>
      update((s) => {
        let srs = s.srs;
        for (const [id, ok] of Object.entries(marks)) srs = srsAnswer(srs, id, ok);
        const fds = s.fds ?? {};
        return { ...s, srs, fds: { ...fds, [quizId]: Math.max(fds[quizId] ?? 0, fraction) } };
      }),
    [update],
  );

  return { state, loaded, answerCard, saveFds, toggleStep, saveExam, rate, completeMission, completeMissions, review, saveMock, saveCase, saveSapExam, savePlant };
}

/** Nota de aprobado de los simulacros de la app (criterio propio, no oficial) */
export const PASS = 0.7;
