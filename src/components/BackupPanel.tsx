"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/icons";
import { backupFileName, collectBackup, KEY_LABELS, parseBackup, restoreBackup, summarize, type Backup } from "@/lib/backup";

type Summary = ReturnType<typeof summarize>;

function SummaryList({ s }: { s: Summary }) {
  const rows = [
    ["Lecciones completadas", s.lessonsDone],
    ["Simulacros, exámenes y supuestos con nota", s.exams],
    ["Preguntas en el repaso de fallos", s.review],
    ["Misiones del ERP completadas", s.missions],
  ] as const;
  return (
    <dl className="grid gap-x-6 gap-y-1 text-sm sm:grid-cols-2">
      {rows.map(([k, v]) => (
        <div key={k} className="flex justify-between gap-3 border-b border-line py-1">
          <dt className="text-muted">{k}</dt>
          <dd className="font-semibold tabular-nums">{v}</dd>
        </div>
      ))}
      <div className="flex justify-between gap-3 border-b border-line py-1">
        <dt className="text-muted">Lote del simulador de planta</dt>
        <dd className="font-semibold">{s.simulator ? "Sí" : "No"}</dd>
      </div>
      <div className="flex justify-between gap-3 border-b border-line py-1">
        <dt className="text-muted">Datos del simulador ERP</dt>
        <dd className="font-semibold">{s.erp ? "Sí" : "No"}</dd>
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

  return (
    <div className="space-y-6">
      <div>
        <Link href="/" className="text-sm text-muted hover:text-ink">← Inicio</Link>
        <p className="mt-3 text-sm font-medium text-accent">Copia de seguridad · Backup</p>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Copia de tu progreso</h1>
        <p className="mt-2 max-w-3xl text-muted">
          Tu progreso se guarda solo en este navegador. Si borras los datos de navegación, cambias de navegador o de ordenador, se pierde.
          Descarga una copia de vez en cuando y, si hace falta, cárgala aquí para recuperarlo todo: lecciones, tests, certificaciones, repaso de fallos,
          simulador de planta y ERP.
        </p>
      </div>

      {current && (
        <section className="rounded-2xl border border-line bg-surface p-5 sm:p-6">
          <h2 className="mb-3 font-semibold">Lo que hay guardado ahora en este navegador</h2>
          <SummaryList s={current} />
        </section>
      )}

      {done && (
        <p role="status" className="rounded-xl border p-4 text-sm" style={{ borderColor: "var(--ok)", background: "var(--ok-soft)" }}>
          {done}
        </p>
      )}
      {error && (
        <p role="alert" className="rounded-xl border border-line bg-warn-soft p-4 text-sm">
          {error}
        </p>
      )}

      <section className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col rounded-2xl border border-line bg-surface p-5 sm:p-6">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent-soft text-accent">
            <Icon name="box" />
          </span>
          <h2 className="mt-3 font-semibold">Exportar</h2>
          <p className="mt-1 flex-1 text-sm text-muted">Descarga un archivo .json con todo tu progreso. No sale de tu ordenador: no se envía a ningún servidor.</p>
          <button type="button" onClick={exportNow} className="mt-4 w-fit rounded-lg bg-accent px-4 py-2 font-medium text-white hover:opacity-90">
            Descargar copia
          </button>
        </div>

        <div className="flex flex-col rounded-2xl border border-line bg-surface p-5 sm:p-6">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent-soft text-accent">
            <Icon name="back" />
          </span>
          <h2 className="mt-3 font-semibold">Importar</h2>
          <p className="mt-1 flex-1 text-sm text-muted">
            Carga una copia descargada antes. Sustituye el progreso actual de este navegador por el de la copia; antes de aplicarla te enseñamos qué contiene.
          </p>
          <input ref={input} type="file" accept="application/json,.json" className="sr-only" onChange={onFile} aria-label="Archivo de copia" />
          <button
            type="button"
            onClick={() => input.current?.click()}
            className="mt-4 w-fit rounded-lg border border-line px-4 py-2 font-medium hover:border-accent"
          >
            Elegir archivo…
          </button>
        </div>
      </section>

      {pending && (
        <section className="rounded-2xl border-2 border-accent bg-accent-soft p-5 sm:p-6" aria-labelledby="confirm-h">
          <h2 id="confirm-h" className="font-semibold">¿Restaurar esta copia?</h2>
          <p className="mt-1 text-sm text-muted">
            {pending.name} · hecha el {new Date(pending.backup.exportedAt).toLocaleString("es-ES", { dateStyle: "long", timeStyle: "short" })}
          </p>
          <div className="mt-3 rounded-xl bg-surface p-4">
            <SummaryList s={summarize(pending.backup.data)} />
            <p className="mt-3 text-xs text-muted">
              Incluye: {Object.keys(pending.backup.data).map((k) => KEY_LABELS[k] ?? k).join(" · ") || "nada"}
            </p>
          </div>
          <p className="mt-3 text-sm">
            <strong>Ojo:</strong> lo que tengas ahora en este navegador se reemplaza. Si no estás seguro, descarga antes una copia del estado actual.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button type="button" onClick={confirmImport} className="rounded-lg bg-accent px-4 py-2 font-medium text-white hover:opacity-90">
              Sí, restaurar
            </button>
            <button type="button" onClick={() => setPending(null)} className="rounded-lg border border-line bg-surface px-4 py-2 font-medium">
              Cancelar
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
