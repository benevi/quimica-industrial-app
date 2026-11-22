"use client";

import Link from "next/link";
import { useEffect } from "react";
import { misionesDe } from "@/certs/misiones-planta";
import { useCertState } from "@/certs/useCertState";
import { Icon } from "@/components/icons";
import { Bar, Card, SectionTitle, Status, btn } from "@/components/ui";

const fecha = (iso: string) => new Date(iso).toLocaleDateString("es-ES", { day: "numeric", month: "short" });

/** Misiones de los simuladores de planta que cuentan para esta certificación, con su estado. */
export function MisionesPlanta({ certId }: { certId: string }) {
  const { state, loaded, completeMissions } = useCertState();
  const ms = misionesDe(certId);

  // Lo que ya esté cumplido en las partidas guardadas en este navegador también cuenta
  useEffect(() => {
    if (!loaded) return;
    let vivo = true;
    // Los motores de los simuladores solo se descargan aquí, no con la página
    import("@/sim/misiones").then(({ misionesGuardadas }) => {
      const ids = misionesGuardadas();
      if (vivo && ids.length) completeMissions(ids);
    });
    return () => {
      vivo = false;
    };
  }, [loaded, completeMissions]);

  if (!ms.length) return null;
  const hechas = ms.filter((m) => state.missions[m.id]).length;
  // Un solo botón destacado: la primera misión pendiente
  const siguiente = loaded ? ms.find((m) => !state.missions[m.id])?.id : undefined;
  return (
    <section aria-labelledby="misiones-h">
      <SectionTitle id="misiones-h" en="Plant missions">
        Misiones en los simuladores de planta
      </SectionTitle>
      <p className="max-w-[68ch] text-sm leading-relaxed text-muted">
        Prácticas que preparan lo que se evalúa en esta certificación. Se marcan solas al terminar la práctica en el simulador:
        no hace falta apuntarlas.
      </p>
      <div className="mt-3 flex items-center gap-3">
        <Bar pct={loaded ? Math.round((hechas / ms.length) * 100) : 0} label={`Misiones hechas: ${hechas} de ${ms.length}`} className="max-w-xs flex-1" />
        <span className="shrink-0 text-sm">
          {hechas} de {ms.length}
        </span>
      </div>
      <ul className="mt-4 space-y-3">
        {ms.map((m) => {
          const done = loaded ? state.missions[m.id] : undefined;
          return (
            <Card as="li" key={m.id} className="flex flex-col gap-2 p-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <p className="flex flex-wrap items-center gap-2">
                  <span className="font-medium">{m.titulo}</span>
                  <Status kind={done ? "done" : "todo"}>{done ? `Hecha el ${fecha(done)}` : "Pendiente"}</Status>
                  <span className="text-xs text-muted">{m.simulador}</span>
                </p>
                <p className="mt-1 text-sm">{m.reto}</p>
                <p className="mt-0.5 text-sm text-muted">{m.porque}</p>
              </div>
              <Link href={m.href} className={`${m.id === siguiente ? btn.primary : btn.secondary} shrink-0`}>
                {done ? "Repetir" : "Ir a practicar"}
                {m.id === siguiente && <Icon name="arrow" className="h-4 w-4" />}
              </Link>
            </Card>
          );
        })}
      </ul>
    </section>
  );
}
