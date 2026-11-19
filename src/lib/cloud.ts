/**
 * Guardado en la nube (Supabase). La app sigue funcionando igual con localStorage; si hay sesión,
 * el mismo conjunto de claves «quimica-app:*» que va en la copia .json se sube a una fila por usuario.
 *
 * Reglas de sincronización (rev = número de versión de la fila en la nube):
 *  - Recordamos en este navegador la rev y la huella del último estado sincronizado.
 *  - Si solo ha cambiado lo local → se sube (solo si la nube sigue en la rev que conocíamos).
 *  - Si solo ha cambiado la nube → se baja y se recarga la página para que todo lo lea.
 *  - Si no hay nada en la nube (primer inicio de sesión) → se sube lo local: así no se pierde nada.
 *  - Si este navegador está vacío → se baja lo de la nube.
 *  - Si han cambiado los dos → conflicto: el usuario elige cuál conservar.
 */
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { PREFIX, collectBackup, restoreBackup } from "./backup";

const URL_ = process.env.NEXT_PUBLIC_SUPABASE_URL;
const KEY_ = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const META = "aula-nube:meta"; // fuera del prefijo «quimica-app:» para que no se suba a sí misma
const TABLE = "aula_progreso";

export const cloudConfigured = Boolean(URL_ && KEY_);

let client: SupabaseClient | null = null;
/** Solo para las comprobaciones automáticas (scripts/check-cloud.mjs) */
export function __setClientForTests(c: SupabaseClient | null) {
  client = c;
}
export function supabase(): SupabaseClient | null {
  if (client) return client;
  if (!cloudConfigured || typeof window === "undefined") return null;
  if (!client) client = createClient(URL_!, KEY_!, { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } });
  return client;
}

type Data = Record<string, string>;
type Meta = { userId: string; rev: number; hash: string; at: string };

/** Huella estable del contenido (independiente del orden de las claves) */
export function fingerprint(data: Data) {
  const s = JSON.stringify(Object.keys(data).sort().map((k) => [k, data[k]]));
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return `${s.length}:${(h >>> 0).toString(16)}`;
}

function readMeta(userId: string): Meta | null {
  try {
    const m = JSON.parse(window.localStorage.getItem(META) ?? "null") as Meta | null;
    return m && m.userId === userId ? m : null;
  } catch {
    return null;
  }
}
function writeMeta(m: Meta) {
  window.localStorage.setItem(META, JSON.stringify(m));
}
export function clearMeta() {
  try {
    window.localStorage.removeItem(META);
  } catch {}
}
export function lastSyncedAt(userId: string) {
  return readMeta(userId)?.at ?? null;
}

function sanitize(raw: unknown): Data {
  const out: Data = {};
  if (raw && typeof raw === "object" && !Array.isArray(raw))
    for (const [k, v] of Object.entries(raw)) if (k.startsWith(PREFIX) && typeof v === "string") out[k] = v;
  return out;
}

export type SyncResult =
  | { kind: "same" }
  | { kind: "pushed" }
  | { kind: "pulled" } // se ha escrito lo de la nube en localStorage: hay que recargar
  | { kind: "conflict"; local: Data; remote: Data; remoteRev: number; remoteAt: string };

async function fetchRemote(sb: SupabaseClient, userId: string) {
  const { data, error } = await sb.from(TABLE).select("data, rev, updated_at").eq("user_id", userId).maybeSingle();
  if (error) throw new Error(error.message);
  return data ? { data: sanitize(data.data), rev: data.rev as number, at: data.updated_at as string } : null;
}

/** Sube lo local si la nube sigue en `expectedRev`. Devuelve la nueva rev o null si otro dispositivo se adelantó. */
async function push(sb: SupabaseClient, userId: string, local: Data, expectedRev: number | null): Promise<number | null> {
  const now = new Date().toISOString();
  if (expectedRev == null) {
    const { error } = await sb.from(TABLE).insert({ user_id: userId, data: local, rev: 1, updated_at: now });
    if (error) {
      if (error.code === "23505") return null; // ya existe: otro dispositivo creó la fila
      throw new Error(error.message);
    }
    return 1;
  }
  const { data, error } = await sb
    .from(TABLE)
    .update({ data: local, rev: expectedRev + 1, updated_at: now })
    .eq("user_id", userId)
    .eq("rev", expectedRev)
    .select("rev");
  if (error) throw new Error(error.message);
  return data && data.length ? expectedRev + 1 : null;
}

export async function syncOnce(userId: string, { pull = true }: { pull?: boolean } = {}): Promise<SyncResult> {
  const sb = supabase();
  if (!sb) throw new Error("La nube no está configurada.");
  for (let attempt = 0; attempt < 3; attempt++) {
    const local = collectBackup().data;
    const lh = fingerprint(local);
    const meta = readMeta(userId);
    // Atajo: sin cambios locales y sin pedir bajada → nada que hacer
    if (!pull && meta && meta.hash === lh) return { kind: "same" };

    const remote = await fetchRemote(sb, userId);
    const at = new Date().toISOString();

    if (!remote) {
      const rev = await push(sb, userId, local, null);
      if (rev == null) continue;
      writeMeta({ userId, rev, hash: lh, at });
      return { kind: "pushed" };
    }

    const rh = fingerprint(remote.data);
    if (rh === lh) {
      writeMeta({ userId, rev: remote.rev, hash: lh, at });
      return { kind: "same" };
    }

    const localEmpty = Object.keys(local).length === 0;
    const remoteEmpty = Object.keys(remote.data).length === 0;
    const localChanged = !meta || meta.hash !== lh;
    const remoteChanged = !meta || meta.rev !== remote.rev;

    if (localEmpty || (!localChanged && remoteChanged)) {
      restoreBackup({ format: "quimica-app-progreso", version: 1, exportedAt: remote.at, data: remote.data });
      writeMeta({ userId, rev: remote.rev, hash: rh, at });
      return { kind: "pulled" };
    }
    if (remoteEmpty || !remoteChanged) {
      const rev = await push(sb, userId, local, remote.rev);
      if (rev == null) continue; // otro dispositivo subió entre medias: volvemos a mirar
      writeMeta({ userId, rev, hash: lh, at });
      return { kind: "pushed" };
    }
    return { kind: "conflict", local, remote: remote.data, remoteRev: remote.rev, remoteAt: remote.at };
  }
  throw new Error("La nube ha cambiado varias veces seguidas. Vuelve a intentarlo.");
}

/** Resuelve un conflicto quedándose con lo de la nube o con lo de este navegador. */
export async function resolveConflict(userId: string, keep: "remote" | "local", c: Extract<SyncResult, { kind: "conflict" }>) {
  const sb = supabase();
  if (!sb) throw new Error("La nube no está configurada.");
  const at = new Date().toISOString();
  if (keep === "remote") {
    restoreBackup({ format: "quimica-app-progreso", version: 1, exportedAt: c.remoteAt, data: c.remote });
    writeMeta({ userId, rev: c.remoteRev, hash: fingerprint(c.remote), at });
    return "pulled" as const;
  }
  const local = collectBackup().data;
  const rev = await push(sb, userId, local, c.remoteRev);
  if (rev == null) throw new Error("La nube ha cambiado mientras elegías. Vuelve a sincronizar.");
  writeMeta({ userId, rev, hash: fingerprint(local), at });
  return "pushed" as const;
}
