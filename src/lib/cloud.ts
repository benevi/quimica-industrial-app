/**
 * Guardado en la nube (Supabase). La app sigue funcionando igual con localStorage; si hay sesión,
 * el mismo conjunto de claves «quimica-app:*» que va en la copia .json se sube a una fila por usuario.
 *
 * Reglas de sincronización (rev = número de versión de la fila en la nube):
 *  - Recordamos en este navegador la rev y la huella (total y por clave) del último estado sincronizado.
 *  - Si solo ha cambiado lo local → se sube (solo si la nube sigue en la rev que conocíamos).
 *  - Si solo ha cambiado la nube → se baja.
 *  - Si no hay nada en la nube (primer inicio de sesión) → se sube lo local: así no se pierde nada.
 *  - Si han cambiado los dos → se fusiona registro a registro (src/lib/merge.ts): nunca hay que elegir
 *    un dispositivo y perder lo del otro.
 */
import type { SupabaseClient } from "@supabase/supabase-js";
import { PREFIX, collectBackup, restoreBackup } from "./backup";
import { canMerge, mergeValue } from "./merge";

const URL_ = process.env.NEXT_PUBLIC_SUPABASE_URL;
const KEY_ = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const META = "aula-nube:meta"; // fuera del prefijo «quimica-app:» para que no se suba a sí misma
const OWNER = "aula-nube:owner"; // de qué cuenta es el progreso de este navegador (no se borra al cerrar sesión)
const TABLE = "aula_progreso";

export const cloudConfigured = Boolean(URL_ && KEY_);

let client: SupabaseClient | null = null;
/** Solo para las comprobaciones automáticas (scripts/check-cloud.mjs) */
export function __setClientForTests(c: SupabaseClient | null) {
  client = c;
}
/** Cliente de Supabase. La librería solo se descarga si la nube está configurada y se usa. */
export async function supabase(): Promise<SupabaseClient | null> {
  if (client) return client;
  if (!cloudConfigured || typeof window === "undefined") return null;
  const { createClient } = await import("@supabase/supabase-js");
  if (!client) client = createClient(URL_!, KEY_!, { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } });
  return client;
}

type Data = Record<string, string>;
/** `keys`: huella de cada clave en la última sincronización, para saber en qué lado cambió cada una */
type Meta = { userId: string; rev: number; hash: string; at: string; keys?: Record<string, string> };

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
  try {
    window.localStorage.setItem(META, JSON.stringify(m));
  } catch {
    /* almacenamiento lleno: se sincroniza igual; la próxima vez se compara de nuevo con la nube */
  }
}
const keyHashes = (data: Data) => Object.fromEntries(Object.entries(data).map(([k, v]) => [k, fingerprint({ [k]: v })]));
function sameUserBefore(userId: string) {
  try {
    const owner = window.localStorage.getItem(OWNER);
    return owner == null || owner === userId;
  } catch {
    return true;
  }
}
function rememberOwner(userId: string) {
  try {
    window.localStorage.setItem(OWNER, userId);
  } catch {}
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
  | { kind: "pulled" }; // se ha escrito en localStorage algo que venía de la nube: la página debe releerlo

/**
 * Combina lo de este navegador con lo de la nube, clave a clave.
 *  - Si la clave solo cambió en un lado desde la última sincronización, gana ese lado.
 *  - Si cambió en los dos y es progreso de lecciones o de certificaciones, se fusiona registro a registro.
 *  - Si cambió en los dos y es una partida en curso (simulador, ERP…), se queda la de este navegador,
 *    salvo la primera vez que este navegador sincroniza: entonces manda la nube.
 */
export function mergeData(local: Data, remote: Data, last: Record<string, string> | undefined): Data {
  const out: Data = {};
  for (const k of new Set([...Object.keys(local), ...Object.keys(remote)])) {
    const l = local[k], r = remote[k];
    if (l === r) {
      if (l != null) out[k] = l;
      continue;
    }
    const base = last?.[k];
    const lSame = last ? (l == null ? base == null : base === fingerprint({ [k]: l })) : false;
    const rSame = last ? (r == null ? base == null : base === fingerprint({ [k]: r })) : false;
    let v: string | undefined;
    if (lSame) v = r; // solo cambió la nube (también si allí se borró)
    else if (rSame) v = l; // solo cambió este navegador
    else if (l == null) v = r;
    else if (r == null) v = l;
    else if (canMerge(k)) v = mergeValue(k, l, r);
    else v = last ? l : r;
    if (v != null) out[k] = v;
  }
  return out;
}

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
  const sb = await supabase();
  if (!sb) throw new Error("La nube no está configurada.");
  for (let attempt = 0; attempt < 4; attempt++) {
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
      writeMeta({ userId, rev, hash: lh, at, keys: keyHashes(local) });
      rememberOwner(userId);
      return { kind: "pushed" };
    }

    // Si el progreso de este navegador era de otra cuenta, no se mezcla con esta: manda la nube.
    const merged = sameUserBefore(userId) ? mergeData(local, remote.data, meta?.keys) : remote.data;
    const mh = fingerprint(merged);

    let rev = remote.rev;
    if (mh !== fingerprint(remote.data)) {
      const pushed = await push(sb, userId, merged, remote.rev);
      if (pushed == null) continue; // otro dispositivo subió entre medias: volvemos a mirar
      rev = pushed;
    }
    const changedLocal = mh !== lh;
    if (changedLocal) {
      // Si se ha guardado algo en este navegador mientras hablábamos con la nube, no se pisa: se repite.
      if (fingerprint(collectBackup().data) !== lh) continue;
      restoreBackup({ format: "quimica-app-progreso", version: 1, exportedAt: remote.at, data: merged });
    }
    writeMeta({ userId, rev, hash: mh, at, keys: keyHashes(merged) });
    rememberOwner(userId);
    return { kind: changedLocal ? "pulled" : rev !== remote.rev ? "pushed" : "same" };
  }
  throw new Error("La nube ha cambiado varias veces seguidas. Vuelve a intentarlo.");
}
