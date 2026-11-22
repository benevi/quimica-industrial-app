"use client";

import Link from "next/link";
import { useState } from "react";
import { Icon } from "@/components/icons";
import { MIN_PASSWORD, useCloud } from "@/components/CloudSync";
import { Status, btn } from "@/components/ui";

function when(iso: string | null) {
  if (!iso) return "todavía no";
  return new Date(iso).toLocaleString("es-ES", { dateStyle: "medium", timeStyle: "short" });
}

const label: Record<string, string> = {
  syncing: "Sincronizando…",
  synced: "Guardado en la nube",
  error: "Sin conexión con la nube",
};

function BadPill({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex items-center gap-1 rounded-full bg-bad-soft px-2 py-0.5 text-xs font-medium text-bad">{children}</span>;
}

/** Fila de estado de la nube para el resumen de arriba de «Mi progreso» */
export function CloudStatusRow() {
  const cloud = useCloud();
  let pill: React.ReactNode;
  let text: React.ReactNode;
  if (!cloud?.configured) {
    pill = <Status kind="todo">No disponible</Status>;
    text = "La nube aún no está conectada en este ordenador.";
  } else if (cloud.status === "signed-out") {
    pill = <Status kind="todo">Sin activar</Status>;
    text = "Tu progreso solo está en este navegador.";
  } else {
    pill =
      cloud.status === "synced" ? (
        <Status kind="done">{label.synced}</Status>
      ) : cloud.status === "syncing" ? (
        <Status kind="todo">{label.syncing}</Status>
      ) : (
        <BadPill>{label[cloud.status] ?? label.error}</BadPill>
      );
    text = (
      <>
        Sesión: <strong className="text-ink">{cloud.email}</strong> · Última sincronización: {when(cloud.lastSync)}
      </>
    );
  }
  return (
    <div className="flex gap-3 px-5 py-4">
      <Icon name="cloud" className="mt-0.5 h-5 w-5 shrink-0 text-muted" />
      <div className="min-w-0 flex-1">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="font-medium">En la nube</span>
          {pill}
        </p>
        <p className="mt-0.5 text-sm text-muted">{text}</p>
      </div>
    </div>
  );
}

/** ¿La acción principal de la página está en la nube (activarla)? */
export function useCloudNeedsAction() {
  const cloud = useCloud();
  return !!cloud?.configured && cloud.status === "signed-out";
}

export function CloudPanel() {
  const cloud = useCloud();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"login" | "signup">("signup");
  const [sent, setSent] = useState(false);
  const [resetSent, setResetSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  if (!cloud) return null;

  const box = "rounded-[var(--radius)] border border-line bg-surface p-5 sm:p-6";
  const head = (
    <div className="mb-3">
      <h2 id="nube-h" className="t-h2">
        Guardar en la nube{" "}
        <span lang="en" className="text-sm font-normal text-muted">
          Cloud sync
        </span>
      </h2>
      <p className="mt-1 max-w-[68ch] text-sm text-muted">
        Automático. Entra con tu email y contraseña y tu progreso se guarda solo, sin descargar archivos.
      </p>
    </div>
  );

  if (!cloud.configured)
    return (
      <section aria-labelledby="nube-h">
        {head}
        <p className={`${box} text-sm text-muted`}>
          La nube aún no está conectada en este ordenador (falta el archivo <code className="font-mono">.env.local</code> con los datos de Supabase). Mientras
          tanto, usa la copia en archivo de abajo.
        </p>
      </section>
    );

  if (cloud.status === "signed-out")
    return (
      <section aria-labelledby="nube-h">
        {head}
        <div className={box}>
          {sent ? (
            <p role="status" className="rounded-md bg-ok-soft p-4 text-sm">
Te hemos enviado un email a <strong>{email}</strong> para confirmar la cuenta: abre el enlace (mira también en spam) y después vuelve aquí y
              pulsa <strong>Ya tengo cuenta</strong>. Si ya tenías cuenta con ese email, no llegará nada: entra con tu contraseña o usa «He olvidado mi
              contraseña».
            </p>
          ) : (
            <form
              className="grid gap-3 sm:max-w-md"
              onSubmit={async (e) => {
                e.preventDefault();
                setErr(null);
                setSending(true);
                try {
                  if (mode === "login") await cloud.signIn(email.trim(), password);
                  else if (!(await cloud.signUp(email.trim(), password))) setSent(true);
                } catch (x) {
                  setErr(x instanceof Error ? x.message : "No se pudo iniciar sesión.");
                } finally {
                  setSending(false);
                }
              }}
            >
              <div role="tablist" aria-label="Acceso" className="flex gap-1 rounded-md bg-soft p-1 text-sm">
                {(
                  [
                    ["login", "Ya tengo cuenta"],
                    ["signup", "Crear cuenta"],
                  ] as const
                ).map(([m, l]) => (
                  <button
                    key={m}
                    type="button"
                    role="tab"
                    aria-selected={mode === m}
                    onClick={() => {
                      setMode(m);
                      setErr(null);
                    }}
                    className={`flex-1 rounded px-3 py-1.5 ${mode === m ? "bg-surface font-medium shadow-sm" : "text-muted hover:text-ink"}`}
                  >
                    {l}
                  </button>
                ))}
              </div>
              <label className="grid gap-1 text-sm">
                Email
                <input
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-md border border-line-strong bg-surface px-3 py-2"
                />
              </label>
              <label className="grid gap-1 text-sm">
                Contraseña
                <input
                  type="password"
                  required
                  minLength={mode === "login" ? undefined : MIN_PASSWORD}
                  autoComplete={mode === "login" ? "current-password" : "new-password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="rounded-md border border-line-strong bg-surface px-3 py-2"
                />
              </label>
              {mode === "signup" && <p className="-mt-1 text-xs text-muted">Mínimo {MIN_PASSWORD} caracteres.</p>}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <button disabled={sending} className={`${btn.primary} w-fit`}>
                  {sending ? "Un momento…" : mode === "login" ? "Entrar" : "Crear cuenta"}
                </button>
                {mode === "login" && (
                  <button
                    type="button"
                    className="text-sm text-accent underline underline-offset-2 hover:decoration-2"
                    onClick={async () => {
                      setErr(null);
                      if (!email.trim()) return setErr("Escribe tu email arriba y vuelve a pulsar «He olvidado mi contraseña».");
                      try {
                        await cloud.resetPassword(email.trim());
                        setResetSent(true);
                      } catch (x) {
                        setErr(x instanceof Error ? x.message : "No se pudo enviar el email.");
                      }
                    }}
                  >
                    He olvidado mi contraseña
                  </button>
                )}
              </div>
              {resetSent && (
                <p role="status" className="rounded-md bg-ok-soft p-3 text-sm">
                  Si hay una cuenta con ese email, te llegará un mensaje con un enlace para elegir una contraseña nueva (mira también en spam).
                </p>
              )}
            </form>
          )}
          {err && (
            <p role="alert" className="mt-3 rounded-md bg-bad-soft p-3 text-sm">
              {err}
            </p>
          )}
          <p className="mt-3 max-w-[68ch] text-xs text-muted">
            Lo que ya tienes en este navegador se junta con lo que haya en la nube: no pierdes nada de ninguno de los dos. La sesión se queda abierta en este navegador; desde
            otro ordenador entras con el mismo email y contraseña.
          </p>
        </div>
      </section>
    );

  return (
    <section aria-labelledby="nube-h">
      {head}
      <div className={box}>
        <p className="text-sm">
          Sesión iniciada como <strong>{cloud.email}</strong>.
        </p>
        {cloud.error && cloud.status === "error" && (
          <p role="alert" className="mt-3 rounded-md bg-bad-soft p-3 text-sm">
            {cloud.error} Tu progreso sigue guardado en este navegador y se subirá cuando vuelva la conexión.
          </p>
        )}
        {cloud.recovery && (
          <form
            className="mt-4 grid gap-3 rounded-md border border-signal bg-signal-soft p-4 sm:max-w-md"
            onSubmit={async (e) => {
              e.preventDefault();
              setErr(null);
              try {
                await cloud.setNewPassword(password);
                setPassword("");
              } catch (x) {
                setErr(x instanceof Error ? x.message : "No se pudo cambiar la contraseña.");
              }
            }}
          >
            <label className="grid gap-1 text-sm">
              Elige una contraseña nueva
              <input
                type="password"
                required
                minLength={MIN_PASSWORD}
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-md border border-line-strong bg-surface px-3 py-2"
              />
            </label>
            <button className={`${btn.primary} w-fit`}>Guardar la contraseña</button>
            {err && (
              <p role="alert" className="text-sm text-bad">
                {err}
              </p>
            )}
          </form>
        )}
        <div className="mt-4 flex flex-wrap gap-2">
          <button type="button" onClick={() => cloud.syncNow()} className={btn.secondary}>
            Sincronizar ahora
          </button>
          <button type="button" onClick={() => cloud.signOut()} className={btn.quiet}>
            Cerrar sesión
          </button>
        </div>
        <p className="mt-3 max-w-[68ch] text-xs text-muted">
          Se guarda solo cada pocos segundos mientras estudias. Al cerrar sesión, el progreso se queda también en este navegador.
        </p>
      </div>
    </section>
  );
}

/** Indicador pequeño para la barra de navegación */
export function CloudBadge({ compact = false }: { compact?: boolean }) {
  const cloud = useCloud();
  if (!cloud?.configured) return null;
  const t =
    cloud.status === "signed-out"
      ? "Guardar el progreso en la nube"
      : cloud.status === "synced"
        ? "Progreso guardado en la nube"
        : cloud.status === "syncing"
          ? "Sincronizando…"
          : "Sin conexión con la nube";
  const color = cloud.status === "synced" ? "var(--ok)" : cloud.status === "signed-out" || cloud.status === "syncing" ? "var(--muted)" : "var(--bad)";
  if (compact) return <span title={t} aria-label={t} role="img" className="h-2 w-2 shrink-0 rounded-full" style={{ background: color }} />;
  return (
    <Link href="/progreso" title={t} aria-label={t} className="relative grid h-8 w-8 shrink-0 place-items-center rounded-lg text-muted hover:bg-soft hover:text-ink">
      <Icon name="cloud" className="h-[18px] w-[18px]" />
      <span aria-hidden className="absolute right-1 top-1 h-2 w-2 rounded-full" style={{ background: color }} />
    </Link>
  );
}
