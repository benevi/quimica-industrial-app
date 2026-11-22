"use client";

import { useCallback, useEffect, useState } from "react";

const KEY = "quimica-app:progreso:v1";

export type LessonProgress = { done: boolean; score: number; total: number; date: string };
export type Progress = Record<string, LessonProgress>;

function read(): Progress {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Progress) : {};
  } catch {
    return {};
  }
}

export function useProgress() {
  const [progress, setProgress] = useState<Progress>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setProgress(read());
    setLoaded(true);
  }, []);

  const save = useCallback((slug: string, p: LessonProgress) => {
    // Se parte de lo guardado, no de lo que esta pestaña leyó al abrirse: así dos pestañas
    // (o la sincronización con la nube) no se pisan las lecciones entre sí.
    const next = { ...read(), [slug]: p };
    try {
      window.localStorage.setItem(KEY, JSON.stringify(next));
    } catch {
      /* sin almacenamiento disponible: el progreso solo dura esta visita */
    }
    setProgress(next);
  }, []);

  return { progress, loaded, save };
}
