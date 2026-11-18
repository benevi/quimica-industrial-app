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
    setProgress((prev) => {
      const next = { ...prev, [slug]: p };
      try {
        window.localStorage.setItem(KEY, JSON.stringify(next));
      } catch {
        /* sin almacenamiento disponible: el progreso solo dura esta visita */
      }
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    try {
      window.localStorage.removeItem(KEY);
    } catch {}
    setProgress({});
  }, []);

  return { progress, loaded, save, reset };
}
