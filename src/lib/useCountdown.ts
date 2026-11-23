"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Cuenta atrás de examen calculada con la hora límite, no restando segundos: así no se ralentiza aunque el navegador
 * frene los temporizadores con la pestaña en segundo plano. Llama a `onExpire` una vez al llegar a cero.
 */
export function useCountdown(active: boolean, onExpire: () => void) {
  const [deadline, setDeadline] = useState<number | null>(null);
  const [left, setLeft] = useState(0);
  const expire = useRef(onExpire);
  const fired = useRef(false);

  useEffect(() => {
    expire.current = onExpire;
  });

  const start = useCallback((seconds: number) => {
    fired.current = false;
    setDeadline(Date.now() + seconds * 1000);
    setLeft(seconds);
  }, []);

  useEffect(() => {
    if (!active || deadline === null) return;
    const tick = () => {
      const l = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
      setLeft(l);
      if (l <= 0 && !fired.current) {
        fired.current = true;
        expire.current();
      }
    };
    tick();
    const id = setInterval(tick, 500);
    return () => clearInterval(id);
  }, [active, deadline]);

  return { left, start };
}
