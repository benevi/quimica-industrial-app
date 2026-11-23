"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { MISIONES_PLANTA } from "@/certs/misiones-planta";
import { useCertState } from "@/certs/useCertState";
import { Icon } from "@/components/icons";

/**
 * Registra las misiones de planta que acaba de cumplir un simulador y lo cuenta al final de su informe.
 * Solo muestra las que no estaban hechas antes de esta práctica.
 */
export function MisionesAviso({ ids }: { ids: string[] }) {
  const { state, loaded, completeMissions } = useCertState();
  const [nuevas, setNuevas] = useState<string[] | null>(null);
  const key = ids.join(",");
  const lista = useMemo(() => (key ? key.split(",") : []), [key]);

  useEffect(() => {
    if (!loaded || nuevas !== null) return;
    const n = lista.filter((id) => !state.missions[id]);
    setNuevas(n);
    if (n.length) completeMissions(n);
  }, [loaded, lista, state.missions, nuevas, completeMissions]);

  const ms = MISIONES_PLANTA.filter((m) => nuevas?.includes(m.id));
  if (!ms.length) return null;
  return (
    <div role="status" className="rounded-[var(--radius)] border border-signal bg-signal-soft p-4 text-sm">
      <p className="flex items-center gap-1.5 font-medium text-ink">
        <Icon name="badge" className="h-4 w-4" />
        {ms.length === 1 ? "Misión de certificaciones cumplida" : `${ms.length} misiones de certificaciones cumplidas`}
      </p>
      <ul className="mt-1.5 list-disc space-y-0.5 pl-5">
        {ms.map((m) => (
          <li key={m.id}>
            <span className="font-medium">{m.titulo}</span>: {m.reto}
          </li>
        ))}
      </ul>
      <Link href="/certificaciones" className="mt-2 inline-block text-accent underline">
        Ver tu preparación en Certificaciones
      </Link>
    </div>
  );
}
