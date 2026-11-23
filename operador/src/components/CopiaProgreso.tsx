"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/icons";
import { Card, SectionTitle, Status, btn } from "@/components/ui";
import { collectBackup, parseBackup, restoreBackup, summarize, type Backup } from "@/lib/backup";
import { recorrido } from "@op/edicion";

type Resumen = { hechas: number; tarjetas: number; fds: number };

function resumen(data: Record<string, string>): Resumen {
  const s = summarize(data);
  let hechas = 0;
  try {
    const p = JSON.parse(data["quimica-app:progreso:v1"] ?? "{}") as Record<string, { done?: boolean }>;
    hechas = recorrido.filter((slug) => p[slug]?.done).length;
  } catch {
    hechas = 0;
  }
  return { hechas, tarjetas: s.cards, fds: s.fds };
}

/** Copia del progreso en un archivo: esta edición no tiene nube, todo se queda en el navegador. */
export function CopiaProgreso() {
  const [actual, setActual] = useState<Resumen | null>(null);
  const [pendiente, setPendiente] = useState<{ backup: Backup; name: string } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [hecho, setHecho] = useState<string | null>(null);
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      setActual(resumen(collectBackup().data));
    } catch {
      setError("Este navegador no deja leer el almacenamiento local.");
    }
  }, []);

  function descargar() {
    setError(null);
    const b = collectBackup();
    const url = URL.createObjectURL(new Blob([JSON.stringify(b, null, 2)], { type: "application/json" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = `formacion-operadores-progreso-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setHecho(`Copia descargada: ${a.download}. Guárdala fuera del navegador.`);
  }

  async function leer(e: React.ChangeEvent<HTMLInputElement>) {
    setError(null);
    setHecho(null);
    setPendiente(null);
    const f = e.target.files?.[0];
    e.target.value = "";
    if (!f) return;
    try {
      setPendiente({ backup: parseBackup(await f.text()), name: f.name });
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo leer el archivo.");
    }
  }

  function restaurar() {
    if (!pendiente) return;
    try {
      restoreBackup(pendiente.backup);
      setPendiente(null);
      setActual(resumen(collectBackup().data));
      setHecho("Progreso restaurado. Ya puedes seguir donde lo dejaste.");
    } catch {
      setError("No se pudo escribir en el almacenamiento del navegador.");
    }
  }

  const otro = pendiente && resumen(pendiente.backup.data);

  return (
    <div className="space-y-10">
      <section aria-labelledby="estado-h">
        <SectionTitle id="estado-h">Cómo está tu progreso ahora</SectionTitle>
        <Card className="flex gap-3 px-5 py-4">
          <Icon name="screen" className="mt-0.5 h-5 w-5 shrink-0 text-muted" />
          <div>
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="font-medium">En este navegador</span>
              {actual && <Status kind="done">Guardado</Status>}
            </p>
            <p className="mt-0.5 text-sm text-muted">
              {actual
                ? `${actual.hechas} de ${recorrido.length} lecciones hechas · ${actual.tarjetas} tarjetas estudiadas · ${actual.fds} ejercicios de fichas de seguridad`
                : error
                  ? "No se puede leer."
                  : "Leyendo…"}
            </p>
          </div>
        </Card>
      </section>

      <section aria-labelledby="copia-h" className="space-y-3">
        <SectionTitle id="copia-h" en="Backup">
          Hacer una copia o recuperarla
        </SectionTitle>
        <p className="max-w-[68ch] text-sm leading-relaxed text-muted">
          Descarga un archivo con tu progreso de vez en cuando. Si cambias de ordenador o borras los datos del navegador, lo cargas aquí y sigues donde lo
          dejaste. Al cargar una copia, el progreso de este navegador se sustituye por el de la copia.
        </p>
        <div className="flex flex-wrap gap-3">
          <button type="button" onClick={descargar} className={btn.primary}>
            Descargar una copia
          </button>
          <button type="button" onClick={() => input.current?.click()} className={btn.secondary}>
            Cargar una copia
          </button>
          <input ref={input} type="file" accept="application/json,.json" onChange={leer} className="sr-only" tabIndex={-1} aria-hidden />
        </div>
        {pendiente && otro && (
          <Card className="space-y-3 px-5 py-4" as="section">
            <p className="font-medium">¿Sustituir tu progreso por el de «{pendiente.name}»?</p>
            <p className="text-sm text-muted">
              La copia tiene {otro.hechas} de {recorrido.length} lecciones hechas, {otro.tarjetas} tarjetas estudiadas y {otro.fds} ejercicios de fichas de
              seguridad.
            </p>
            <div className="flex flex-wrap gap-3">
              <button type="button" onClick={restaurar} className={btn.primary}>
                Sustituir mi progreso
              </button>
              <button type="button" onClick={() => setPendiente(null)} className={btn.secondary}>
                Cancelar
              </button>
            </div>
          </Card>
        )}
        <div aria-live="polite" className="text-sm">
          {error && <p className="text-bad">{error}</p>}
          {hecho && <p>{hecho}</p>}
        </div>
      </section>
    </div>
  );
}
