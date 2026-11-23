"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { clearMeta, cloudConfigured, lastSyncedAt, supabase, syncOnce } from "@/lib/cloud";

export type CloudStatus = "off" | "signed-out" | "syncing" | "synced" | "error";

type Ctx = {
  configured: boolean;
  status: CloudStatus;
  email: string | null;
  lastSync: string | null;
  error: string | null;
  /** Otro dispositivo ha guardado progreso nuevo y esta página aún no lo muestra */
  needsReload: boolean;
  /** El usuario ha llegado desde el enlace de «he olvidado mi contraseña» y debe elegir una nueva */
  recovery: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  /** Devuelve true si ya ha iniciado sesión; false si hay que confirmar el email primero */
  signUp: (email: string, password: string) => Promise<boolean>;
  signOut: () => Promise<void>;
  syncNow: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  setNewPassword: (password: string) => Promise<void>;
};

const CloudCtx = createContext<Ctx | null>(null);
export const useCloud = () => useContext(CloudCtx);

/** Cada cuánto se mira si hay cambios que subir. Si no los hay, no se hace ninguna petición. */
const PUSH_EVERY_MS = 4_000;
export const MIN_PASSWORD = 8;

function authMessage(msg: string, status?: number) {
  if (status === 429) return "Demasiados intentos seguidos. Espera unos minutos y vuelve a probar.";
  if (/invalid login credentials/i.test(msg)) return "Email o contraseña incorrectos.";
  if (/email not confirmed/i.test(msg)) return "Aún no has confirmado el email: abre el enlace que te llegó al crear la cuenta (mira también en spam).";
  if (/password should be at least/i.test(msg)) return `La contraseña debe tener al menos ${MIN_PASSWORD} caracteres.`;
  return msg;
}

export function CloudSyncProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(false);
  const [status, setStatus] = useState<CloudStatus>(cloudConfigured ? "signed-out" : "off");
  const [error, setError] = useState<string | null>(null);
  const [needsReload, setNeedsReload] = useState(false);
  const [recovery, setRecovery] = useState(false);
  const [lastSync, setLastSync] = useState<string | null>(null);
  const busy = useRef(false);
  const first = useRef(true);
  const userId = session?.user.id ?? null;

  // Sesión
  useEffect(() => {
    const sb = supabase();
    if (!sb) return;
    sb.auth
      .getSession()
      .then(({ data }) => setSession(data.session))
      .catch(() => {
        setError("No se pudo comprobar la sesión de la nube.");
        setStatus("error");
      })
      .finally(() => setReady(true));
    const { data } = sb.auth.onAuthStateChange((event, s) => {
      if (event === "PASSWORD_RECOVERY") setRecovery(true);
      setSession(s);
    });
    return () => data.subscription.unsubscribe();
  }, []);

  const run = useCallback(
    async (pull: boolean) => {
      if (!userId || busy.current) return;
      busy.current = true;
      if (pull) setStatus("syncing");
      const initial = first.current;
      try {
        const r = await syncOnce(userId, { pull });
        first.current = false;
        setError(null);
        setStatus("synced");
        setLastSync(lastSyncedAt(userId));
        if (r.kind === "pulled") {
          // Al abrir la app se recarga sin más. Después no: podría haber un examen o un test a medias.
          if (initial) window.location.reload();
          else setNeedsReload(true);
        }
      } catch (e) {
        setError(e instanceof Error ? e.message : "No se pudo conectar con la nube.");
        setStatus("error");
      } finally {
        busy.current = false;
      }
    },
    [userId],
  );

  // Al entrar (o al iniciar sesión): bajar/subir. Luego: subir cambios cada poco y al salir de la pestaña;
  // al volver a la pestaña, mirar si otro dispositivo ha guardado algo.
  useEffect(() => {
    if (!ready) return;
    if (!userId) {
      if (cloudConfigured) setStatus("signed-out");
      return;
    }
    setLastSync(lastSyncedAt(userId));
    run(true);
    const t = window.setInterval(() => run(false), PUSH_EVERY_MS);
    const onVis = () => run(document.visibilityState === "visible");
    const onHide = () => run(false);
    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("pagehide", onHide);
    return () => {
      window.clearInterval(t);
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("pagehide", onHide);
    };
  }, [ready, userId, run]);

  const signIn = useCallback(async (email: string, password: string) => {
    const sb = supabase();
    if (!sb) throw new Error("La nube no está configurada.");
    const { error } = await sb.auth.signInWithPassword({ email, password });
    if (error) throw new Error(authMessage(error.message, error.status));
  }, []);

  const signUp = useCallback(async (email: string, password: string) => {
    const sb = supabase();
    if (!sb) throw new Error("La nube no está configurada.");
    const { data, error } = await sb.auth.signUp({ email, password, options: { emailRedirectTo: `${window.location.origin}/progreso` } });
    if (error) throw new Error(authMessage(error.message, error.status));
    // Si el proyecto ya tenía una cuenta con ese email, Supabase devuelve un usuario sin identidades
    // (no se dice si el email ya estaba registrado: se le trata como a una cuenta pendiente de confirmar)
    if (data.user && data.user.identities?.length === 0) return false;
    return Boolean(data.session);
  }, []);

  const signOut = useCallback(async () => {
    await run(false); // último guardado antes de salir
    clearMeta();
    await supabase()?.auth.signOut();
    setStatus("signed-out");
    setLastSync(null);
  }, [run]);

  const syncNow = useCallback(() => run(true), [run]);

  const resetPassword = useCallback(async (email: string) => {
    const sb = supabase();
    if (!sb) throw new Error("La nube no está configurada.");
    const { error } = await sb.auth.resetPasswordForEmail(email, { redirectTo: `${window.location.origin}/progreso` });
    if (error) throw new Error(authMessage(error.message, error.status));
  }, []);

  const setNewPassword = useCallback(async (password: string) => {
    const sb = supabase();
    if (!sb) throw new Error("La nube no está configurada.");
    const { error } = await sb.auth.updateUser({ password });
    if (error) throw new Error(authMessage(error.message, error.status));
    setRecovery(false);
  }, []);

  return (
    <CloudCtx.Provider
      value={{ configured: cloudConfigured, status, email: session?.user.email ?? null, lastSync, error, needsReload, recovery, signIn, signUp, signOut, syncNow, resetPassword, setNewPassword }}
    >
      {children}
      {needsReload && (
        <div role="status" className="fixed inset-x-3 bottom-3 z-50 mx-auto flex max-w-xl flex-wrap items-center gap-3 rounded-[var(--radius)] border border-line-strong bg-surface p-3 text-sm shadow-lg">
          <span className="flex-1">Hay progreso nuevo guardado desde otro dispositivo. Actualiza cuando termines lo que estás haciendo.</span>
          <button type="button" onClick={() => window.location.reload()} className="rounded-md bg-accent px-3 py-1.5 font-medium text-[var(--on-accent)]">
            Actualizar
          </button>
        </div>
      )}
    </CloudCtx.Provider>
  );
}
