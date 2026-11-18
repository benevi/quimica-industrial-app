"use client";

import Link from "next/link";
import { today, useCertState } from "@/certs/useCertState";

/** Aviso en el repaso de fallos: tarjetas de repaso rápido que tocan hoy */
export function CardsDueNote() {
  const { state, loaded } = useCertState();
  if (!loaded) return null;
  const due = Object.values(state.cards ?? {}).filter((c) => c.due <= today()).length;
  return (
    <p className="rounded-xl border border-line bg-surface px-4 py-3 text-sm">
      🃏 {due > 0 ? <>Tienes <strong>{due} tarjeta{due === 1 ? "" : "s"}</strong> de repaso rápido para hoy.</> : <>¿Cinco minutos antes del turno?</>}{" "}
      <Link href="/tarjetas" className="font-medium text-accent underline">
        Tarjetas de conceptos y fórmulas
      </Link>
    </p>
  );
}
