"use client";

import { useCertState } from "@/certs/useCertState";

/** Mejor nota guardada de un ejercicio de fichas de seguridad */
export function FdsBest({ quizId }: { quizId: string }) {
  const { state, loaded } = useCertState();
  const best = state.fds?.[quizId];
  if (!loaded || best === undefined) return <span className="text-xs text-muted">Sin hacer</span>;
  return (
    <span className={`text-xs font-semibold ${best === 1 ? "text-ok" : "text-muted"}`}>
      {best === 1 ? "✓ " : ""}Mejor: {Math.round(best * 100)} %
    </span>
  );
}
