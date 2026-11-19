"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/icons";
import { CloudPanel, CloudStatusRow, useCloudNeedsAction } from "@/components/CloudPanel";
import { useCloud } from "@/components/CloudSync";
import { Card, PageHeader, SectionTitle, Status, btn } from "@/components/ui";
import { backupFileName, collectBackup, KEY_LABELS, parseBackup, restoreBackup, summarize, type Backup } from "@/lib/backup";

type Summary = ReturnType<typeof summarize>;

function SummaryList({ s }: { s: Summary }) {
  const rows = [
    ["Lecciones completadas", s.lessonsDone],
    ["Simulacros, exámenes y supuestos con nota", s.exams],
    ["Preguntas en el repaso de fallos", s.review],
    ["Tarjetas de repaso estudiadas", s.cards],
    ["Ejercicios de fichas de seguridad hechos", s.fds],
    ["Misiones del ERP completadas", s.missions],
  ] as const;
  return (
    <dl className="grid gap-x-6 gap-y-1 text-sm sm:grid-cols-2">
      {rows.map(([k, v]) => (
        <div key={k} className="flex justify-between gap-3 border-b border-line py-1.5">
          <dt className="text-muted">{k}</dt>
          <dd className="font-medium tabular-nums">{v}</dd>
        </div>
      ))}
      <div className="flex justify-between gap-3 border-b border-line py-1.5">
        <dt className="text-muted">Lote del simulador de planta</dt>
        <dd className="font-medium">{s.simulator ? "Sí" : "No"}</dd>
      </div>
      <div className="flex justify-between gap-3 border-b border-line py-1.5">
        <dt className="text-muted">Datos del simulador ERP</dt>
        <dd className="font-medium">{s.erp ? "Sí" : "No"}</dd>
      </div>
    </dl>
  );
}

export function BackupPanel() {
  const [current, setCurrent] = useState<Summary | null>(null);
  const [pending, setPending] = useState<{ backup: Backup; name: string } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState<string | null>(null);
  const input = useRef<HTMLInputElement>(null);
  const hasCloud = !!useCloud();
  const cloudFirst = useCloudNeedsAction();

  useEffect(() => {
    try {
      setCurrent(summarize(collectBackup().data));
    } catch {
      setError("Este navegador no deja leer el almacenamiento local.");
    }
  }, []);

  function exportNow() {
    setError(null);
    const b = collectBackup();
    const blob = new Blob([JSON.stringify(b, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = backupFileName();
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setDone(`Copia descargada: ${a.download}. Guárdala fuera del navegador (por ejemplo en tu carpeta de documentos o en la nube).`);
  }

  async function onFile(e: React.ChangeEvent<HTMLInputElement>) {
    setError(null);
    setDone(null);
    setPending(null);
    const f = e.target.files?.[0];
    e.target.value = "";
    if (!f) return;
    try {
      const backup = parseBackup(await f.text());
      setPending({ backup, name: f.name });
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo leer el archivo.");
    }
  }

  function confirmImport() {
    if (!pending) return;
    try {
      restoreBackup(pending.backup);
      setPending(null);
      setCurrent(summarize(collectBackup().data));
      setDone("Progreso restaurado. Ya puedes seguir donde lo dejaste.");
    } catch {
      setError("No se pudo escribir en el almacenamiento del navegador.");
    }
  }

  const lead = (
    <>
      Tu progreso se guarda en este navegador. Para no perderlo si borras los datos de navegación o cambias de ordenador, guárdalo en la nube con tu
      email, o descarga una copia de vez en cuando: lecciones, tests, certificaciones, repaso de fallos, simulador de planta y ERP.
    </>
  );
  const exportPrimary = !cloudFirst && !pending;

  return (
    <div className="space-y-10">
      <PageHeader crumbs={[{ href: "/", label: "Hoy" }, { label: "Mi progreso" }]} title="Guarda tu progreso" en="Cloud sync and backup" icon="cloud" lead={lead} />

      <section aria-labelledby="estado-h">
        <SectionTitle id="estado-h">Cómo está tu progreso ahora</SectionTitle>
        <Card className="divide-y divide-line">
          <div className="flex gap-3 px-5 py-4">
            <Icon name="screen" className="mt-0.5 h-5 w-5 shrink-0 text-muted" />
            <div className="min-w-0 flex-1">
              <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="font-medium">En este navegador</span>
                {current && <Status kind="done">Guardado</Status>}
              </p>
              <p className="mt-0.5 text-sm text-muted">
                {current ? (
                  <>
                    {current.lessonsDone} lecciones completadas · {current.exams} simulacros, exámenes y supuestos con nota · {current.cards} tarjetas estudiadas
                  </>
                ) : error ? (
                  "No se puede leer."
                ) : (
                  "Leyendo…"
                )}
              </p>
            </div>
          </div>
          {hasCloud && <CloudStatusRow />}
          {current && (
            <div className="px-5 py-3">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center gap-2 text-sm font-medium text-accent [&::-webkit-details-marker]:hidden">
                  <Icon name="chevron" className="h-4 w-4 transition-transform group-open:rotate-90" />
                  Ver todo lo que hay guardado en este navegador
                </summary>
                <div className="mt-3">
                  <SummaryList s={current} />
                </div>
              </details>
            </div>
          )}
        </Card>
      </section>

      <CloudPanel />

      <section aria-labelledby="copia-h">
        <div className="mb-3">
          <h2 id="copia-h" className="t-h2">
            Copia en archivo{" "}
            <span lang="en" className="text-sm font-normal text-muted">
              Backup file
            </span>
          </h2>
          <p className="mt-1 max-w-[68ch] text-sm text-muted">
            Manual. Descargas un archivo con todo tu progreso y lo guardas tú; sirve también para pasarlo a otro ordenador.
          </p>
        </div>

        <Card className="divide-y divide-line">
          <div className="flex flex-wrap items-center gap-4 p-5 sm:p-6">
            <div className="min-w-0 flex-1">
              <h3 className="t-h3">Exportar</h3>
              <p className="mt-1 max-w-[60ch] text-sm text-muted">
                Descarga un archivo .json con todo tu progreso. No sale de tu ordenador: no se envía a ningún servidor.
              </p>
            </div>
            <button type="button" onClick={exportNow} className={exportPrimary ? btn.primary : btn.secondary}>
              <Icon name="box" className="h-4 w-4" />
              Descargar copia
            </button>
          </div>
          <div className="flex flex-wrap items-center gap-4 p-5 sm:p-6">
            <div className="min-w-0 flex-1">
              <h3 className="t-h3">Importar</h3>
              <p className="mt-1 max-w-[60ch] text-sm text-muted">
                Carga una copia descargada antes. Sustituye el progreso actual de este navegador por el de la copia; antes de aplicarla te enseñamos qué
                contiene.
              </p>
            </div>
            <input ref={input} type="file" accept="application/json,.json" className="sr-only" onChange={onFile} aria-label="Archivo de copia" />
            <button type="button" onClick={() => input.current?.click()} className={btn.secondary}>
              Elegir archivo…
            </button>
          </div>
        </Card>

        {done && (
          <p role="status" className="mt-3 rounded-md bg-ok-soft p-4 text-sm">
            {done}
          </p>
        )}
        {error && (
          <p role="alert" className="mt-3 rounded-md bg-bad-soft p-4 text-sm">
            {error}
          </p>
        )}

        {pending && (
          <section className="mt-4 rounded-[var(--radius)] border border-signal bg-signal-soft p-5 sm:p-6" aria-labelledby="confirm-h">
            <h3 id="confirm-h" className="t-h3">
              ¿Restaurar esta copia?
            </h3>
            <p className="mt-1 text-sm text-muted">
              {pending.name} · hecha el {new Date(pending.backup.exportedAt).toLocaleString("es-ES", { dateStyle: "long", timeStyle: "short" })}
            </p>
            <div className="mt-3 rounded-md border border-line bg-surface p-4">
              <SummaryList s={summarize(pending.backup.data)} />
              <p className="mt-3 text-xs text-muted">
                Incluye: {Object.keys(pending.backup.data).map((k) => KEY_LABELS[k] ?? k).join(" · ") || "nada"}
              </p>
            </div>
            <p className="mt-3 max-w-[68ch] text-sm">
              <strong>Ojo:</strong> lo que tengas ahora en este navegador se reemplaza. Si no estás seguro, descarga antes una copia del estado actual.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <button type="button" onClick={confirmImport} className={btn.primary}>
                Sí, restaurar
              </button>
              <button type="button" onClick={() => setPending(null)} className={btn.secondary}>
                Cancelar
              </button>
            </div>
          </section>
        )}
      </section>
    </div>
  );
}
