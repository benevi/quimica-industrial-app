"use client";

import Link from "next/link";
import { today, useCertState } from "@/certs/useCertState";
import { Icon } from "@/components/icons";

/** Aviso en el repaso de fallos: tarjetas de repaso rápido que tocan hoy */
export function CardsDueNote() {
  const { state, loaded } = useCertState();
  if (!loaded) return null;
  const due = Object.values(state.cards ?? {}).filter((c) => c.due <= today()).length;
  return (
    <p className="flex flex-wrap items-center gap-x-2 gap-y-1 rounded-[var(--radius)] border border-line bg-surface px-4 py-3 text-sm">
      <Icon name="cards" className="h-4 w-4 shrink-0 text-muted" />
      <span>
        {due > 0 ? (
          <>
            Tienes <strong>{due} tarjeta{due === 1 ? "" : "s"}</strong> de repaso rápido para hoy.
          </>
        ) : (
          <>¿Cinco minutos antes del turno?</>
        )}{" "}
        <Link href="/tarjetas" className="font-medium text-accent underline underline-offset-2 hover:decoration-2">
          Tarjetas de conceptos y fórmulas
        </Link>
      </span>
    </p>
  );
}
