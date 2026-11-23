"use client";

import { useEffect } from "react";

/** Cierra con Esc la definición emergente de un término del texto (quita el foco del término). */
export function TermEscape() {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = document.activeElement as HTMLElement | null;
      if (e.key === "Escape" && el?.classList.contains("term")) el.blur();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return null;
}
