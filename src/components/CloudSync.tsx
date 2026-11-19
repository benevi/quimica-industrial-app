"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { clearMeta, cloudConfigured, lastSyncedAt, resolveConflict, supabase, syncOnce, type SyncResult } from "@/lib/cloud";

type Conflict = Extract<SyncResult, { kind: "conflict" }>;
export type CloudStatus = "off" | "signed-out" | "syncing" | "synced" | "error" | "conflict";

type Ctx = {
  configured: boolean;
  status: CloudStatus;
  email: string | null;
  lastSync: string | null;
  error: string | null;
  conflict: Conflict | null;
  signIn: (email: string, password: string) => Promise<void>;
  /** Devuelve true si ya ha iniciado sesión; false si hay que confirmar el email primero */
  signUp: (email: string, password: string) => Promise<boolean>;
  signOut: () => Promise<void>;
  syncNow: () => Promise<void>;
  choose: (keep: "remote" | "local") => Promise<void>;
};

const CloudCtx = createContext<Ctx | null>(null);
export const useCloud = () => useContext(CloudCtx);

const PUSH_EVERY_MS = 15_000;

function authMessage(msg: string, status?: number) {
  if (status === 429) return "Demasiados intentos seguidos. Espera unos minutos y vuelve a probar.";
  if (/invalid login credentials/i.test(msg)) return "Email o contraseña incorrectos.";
  if (/email not confirmed/i.test(msg)) return "Aún no has confirmado el email: abre el enlace que te llegó al crear la cuenta (mira también en spam).";
  if (/password should be at least/i.test(msg)) return "La contraseña debe tener al menos 6 caracteres.";
  return msg;
}

export function CloudSyncProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(false);
  const [status, setStatus] = useState<CloudStatus>(cloudConfigured ? "signed-out" : "off");
  const [error, setError] = useState<string | null>(null);
  const [conflict, setConflict] = useState<Conflict | null>(null);
  const [lastSync, setLastSync] = useState<string | null>(null);
  const busy = useRef(false);
  const conflictRef = useRef<Conflict | null>(null);
  const userId = session?.user.id ?? null;

  // Sesión
  useEffect(() => {
    const sb = supabase();
    if (!sb) return;
    sb.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setReady(true);
    });
    const { data } = sb.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => data.subscription.unsubscribe();
  }, []);

  const run = useCallback(
    async (pull: boolean) => {
      if (!userId || busy.current || conflictRef.current) return;
      busy.current = true;
      if (pull) setStatus("syncing");
      try {
        const r = await syncOnce(userId, { pull });
        if (r.kind === "pulled") {
          window.location.reload();
          return;
        }
        if (r.kind === "conflict") {
          conflictRef.current = r;
          setConflict(r);
          setStatus("conflict");
        } else {
          setError(null);
          setStatus("synced");
          setLastSync(lastSyncedAt(userId));
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
    if (data.user && data.user.identities?.length === 0) throw new Error("Ya hay una cuenta con ese email. Pulsa «Ya tengo cuenta» y entra con tu contraseña.");
    return Boolean(data.session);
  }, []);

  const signOut = useCallback(async () => {
    await run(false); // último guardado antes de salir
    clearMeta();
    conflictRef.current = null;
    setConflict(null);
    await supabase()?.auth.signOut();
    setStatus("signed-out");
    setLastSync(null);
  }, [run]);

  const syncNow = useCallback(() => run(true), [run]);

  const choose = useCallback(
    async (keep: "remote" | "local") => {
      const c = conflictRef.current;
      if (!userId || !c) return;
      try {
        const r = await resolveConflict(userId, keep, c);
        conflictRef.current = null;
        setConflict(null);
        if (r === "pulled") window.location.reload();
        else {
          setStatus("synced");
          setLastSync(lastSyncedAt(userId));
        }
      } catch (e) {
        setError(e instanceof Error ? e.message : "No se pudo guardar la elección.");
      }
    },
    [userId],
  );

  return (
    <CloudCtx.Provider
      value={{ configured: cloudConfigured, status, email: session?.user.email ?? null, lastSync, error, conflict, signIn, signUp, signOut, syncNow, choose }}
    >
      {children}
    </CloudCtx.Provider>
  );
}
