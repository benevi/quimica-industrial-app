"use client";

import { useCertState } from "@/certs/useCertState";
import { Status } from "@/components/ui";

/** Mejor nota guardada de un ejercicio de fichas de seguridad */
export function FdsBest({ quizId }: { quizId: string }) {
  const { state, loaded } = useCertState();
  const best = state.fds?.[quizId];
  if (!loaded || best === undefined) return <Status kind="todo">Sin hacer</Status>;
  return <Status kind={best === 1 ? "done" : "doing"}>Mejor: {Math.round(best * 100)} %</Status>;
}
