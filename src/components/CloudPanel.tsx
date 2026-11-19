"use client";

import Link from "next/link";
import { useState } from "react";
import { Icon } from "@/components/icons";
import { useCloud } from "@/components/CloudSync";
import { summarize } from "@/lib/backup";

function when(iso: string | null) {
  if (!iso) return "todavía no";
  return new Date(iso).toLocaleString("es-ES", { dateStyle: "medium", timeStyle: "short" });
}

function Mini({ data, title }: { data: Record<string, string>; title: string }) {
  const s = summarize(data);
  return (
    <div className="rounded-xl bg-surface p-4 text-sm">
      <p className="mb-2 font-semibold">{title}</p>
      <ul className="space-y-0.5 text-muted">
        <li>Lecciones completadas: <strong className="text-ink">{s.lessonsDone}</strong></li>
        <li>Exámenes, simulacros y supuestos: <strong className="text-ink">{s.exams}</strong></li>
        <li>Tarjetas estudiadas: <strong className="text-ink">{s.cards}</strong></li>
        <li>Ejercicios de FDS: <strong className="text-ink">{s.fds}</strong></li>
        <li>Lote del simulador: <strong className="text-ink">{s.simulator ? "Sí" : "No"}</strong></li>
      </ul>
    </div>
  );
}

export function CloudPanel() {
  const cloud = useCloud();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  if (!cloud) return null;

  const box = "rounded-2xl border border-line bg-surface p-5 sm:p-6";
  const head = (
    <div className="flex items-center gap-3">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent">
        <Icon name="cloud" />
      </span>
      <div>
        <h2 className="font-semibold">Guardar en la nube · Cloud sync</h2>
        <p className="text-sm text-muted">Inicia sesión con tu email y tu progreso se guarda solo, sin descargar archivos.</p>
      </div>
    </div>
  );

  if (!cloud.configured)
    return (
      <section className={box}>
        {head}
        <p className="mt-3 text-sm text-muted">
          La nube aún no está conectada en este ordenador (falta el archivo <code>.env.local</code> con los datos de Supabase). Mientras tanto, usa la copia
          de seguridad de abajo.
        </p>
      </section>
    );

  if (cloud.status === "signed-out")
    return (
      <section className={box}>
        {head}
        {sent ? (
          <p role="status" className="mt-4 rounded-xl border p-4 text-sm" style={{ borderColor: "var(--ok)", background: "var(--ok-soft)" }}>
            Te hemos enviado un enlace a <strong>{email}</strong>. Ábrelo <strong>en este mismo navegador</strong> y volverás aquí con la sesión iniciada. Si no
            llega en un par de minutos, mira en la carpeta de spam.
          </p>
        ) : (
          <form
            className="mt-4 flex flex-wrap gap-2"
            onSubmit={async (e) => {
              e.preventDefault();
              setErr(null);
              setSending(true);
              try {
                await cloud.sendLink(email.trim());
                setSent(true);
              } catch (x) {
                setErr(x instanceof Error ? x.message : "No se pudo enviar el enlace.");
              } finally {
                setSending(false);
              }
            }}
          >
            <label className="sr-only" htmlFor="cloud-email">Email</label>
            <input
              id="cloud-email"
              type="email"
              required
              autoComplete="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="min-w-0 flex-1 rounded-lg border border-line bg-bg px-3 py-2"
            />
            <button disabled={sending} className="rounded-lg bg-accent px-4 py-2 font-medium text-white hover:opacity-90 disabled:opacity-60">
              {sending ? "Enviando…" : "Enviarme el enlace"}
            </button>
          </form>
        )}
        {err && <p role="alert" className="mt-3 rounded-xl bg-warn-soft p-3 text-sm">{err}</p>}
        <p className="mt-3 text-xs text-muted">
          La primera vez, lo que ya tienes en este navegador se sube a la nube: no pierdes nada. Sin contraseña: cada vez que entres desde un navegador nuevo
          te llega un enlace.
        </p>
      </section>
    );

  const label: Record<string, string> = {
    syncing: "Sincronizando…",
    synced: "Guardado en la nube",
    error: "Sin conexión con la nube",
    conflict: "Hay que elegir qué progreso conservar",
  };

  return (
    <section className={box}>
      {head}
      <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
        <span>
          Sesión: <strong>{cloud.email}</strong>
        </span>
        <span className="flex items-center gap-1.5">
          <span
            aria-hidden
            className="h-2.5 w-2.5 rounded-full"
            style={{ background: cloud.status === "synced" ? "var(--ok)" : cloud.status === "syncing" ? "var(--accent)" : "var(--bad)" }}
          />
          {label[cloud.status]}
        </span>
        <span className="text-muted">Última sincronización: {when(cloud.lastSync)}</span>
      </div>
      {cloud.error && cloud.status === "error" && (
        <p role="alert" className="mt-3 rounded-xl bg-warn-soft p-3 text-sm">
          {cloud.error} Tu progreso sigue guardado en este navegador y se subirá cuando vuelva la conexión.
        </p>
      )}
      {cloud.conflict && (
        <div className="mt-4 rounded-2xl border-2 border-accent bg-accent-soft p-4 sm:p-5">
          <p className="font-semibold">Este navegador y la nube tienen progresos distintos</p>
          <p className="mt-1 text-sm text-muted">
            Pasa si has estudiado en otro ordenador o navegador sin sesión. Elige cuál conservar; el otro se sustituye. Si dudas, descarga antes una copia
            de este navegador (más abajo).
          </p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <Mini title="En la nube" data={cloud.conflict.remote} />
            <Mini title="En este navegador" data={cloud.conflict.local} />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <button type="button" onClick={() => cloud.choose("remote")} className="rounded-lg bg-accent px-4 py-2 font-medium text-white hover:opacity-90">
              Usar el de la nube
            </button>
            <button type="button" onClick={() => cloud.choose("local")} className="rounded-lg border border-line bg-surface px-4 py-2 font-medium">
              Usar el de este navegador
            </button>
          </div>
        </div>
      )}
      <div className="mt-4 flex flex-wrap gap-2">
        <button type="button" onClick={() => cloud.syncNow()} className="rounded-lg border border-line px-4 py-2 font-medium hover:border-accent">
          Sincronizar ahora
        </button>
        <button type="button" onClick={() => cloud.signOut()} className="rounded-lg border border-line px-4 py-2 font-medium hover:border-accent">
          Cerrar sesión
        </button>
      </div>
      <p className="mt-3 text-xs text-muted">
        Se guarda solo cada pocos segundos mientras estudias. Al cerrar sesión, el progreso se queda también en este navegador.
      </p>
    </section>
  );
}

/** Indicador pequeño para la barra de navegación */
export function CloudBadge() {
  const cloud = useCloud();
  if (!cloud?.configured) return null;
  const t =
    cloud.status === "signed-out"
      ? "Guardar el progreso en la nube"
      : cloud.status === "synced"
        ? "Progreso guardado en la nube"
        : cloud.status === "syncing"
          ? "Sincronizando…"
          : cloud.status === "conflict"
            ? "Elige qué progreso conservar"
            : "Sin conexión con la nube";
  const color = cloud.status === "synced" ? "var(--ok)" : cloud.status === "signed-out" || cloud.status === "syncing" ? "var(--muted)" : "var(--bad)";
  return (
    <Link href="/progreso" title={t} aria-label={t} className="relative grid h-8 w-8 shrink-0 place-items-center rounded-lg text-muted hover:bg-soft hover:text-ink">
      <Icon name="cloud" className="h-[18px] w-[18px]" />
      <span aria-hidden className="absolute right-1 top-1 h-2 w-2 rounded-full" style={{ background: color }} />
    </Link>
  );
}
