// Comprueba la edición de operador (carpeta operador/). Uso: npm run check:operador
//  1. Índice: cada lección existe, no se repite y cada etapa tiene imágenes con licencia libre.
//  2. Ajustes de texto: cada frase a cambiar aparece una sola vez en su lección (si cambia el original, avisa).
//  3. Textos de las lecciones ya ajustadas y de las tarjetas: nada de niveles del temario, simuladores, SAP, certificaciones,
//     PhET ni vídeos; los enlaces y las lecciones citadas por su título están dentro de la edición.
//  4. Código: lo que importa operador/ (también a través de src/) no llega a simuladores, SAP, certificaciones,
//     banco de problemas ni nube.
import { createJiti } from "jiti";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repo = fileURLToPath(new URL("..", import.meta.url));
const src = join(repo, "src");
const op = join(repo, "operador", "src");
const jiti = createJiti(import.meta.url, { alias: { "@op": op, "@": src } });
const { lessons } = await jiti.import(join(src, "content/index.ts"));
const M = await jiti.import(join(src, "content/media.ts"));
const { cards } = await jiti.import(join(src, "content/tarjetas.ts"));
const E = await jiti.import(join(op, "edicion.ts"));
const { ajustes } = await jiti.import(join(op, "ajustes.ts"));
const L = await jiti.import(join(op, "lecciones.ts"));

let errors = 0;
const err = (m) => {
  console.error("ERROR", m);
  errors++;
};
const bySlug = Object.fromEntries(lessons.map((l) => [l.slug, l]));
const edicion = new Set(E.todasLasLecciones);

// ── 1. Índice ───────────────────────────────────────────────────────────────
const vistos = new Set();
const ids = new Set();
for (const e of E.etapas) {
  if (ids.has(e.id)) err(`etapa repetida: ${e.id}`);
  ids.add(e.id);
  if (!e.lecciones.length) err(`${e.id}: etapa sin lecciones`);
  if (e.images.length < 1) err(`${e.id}: etapa sin imagen`);
  for (const id of e.images) if (!M.images[id]) err(`${e.id}: imagen ${id} no existe en media.ts`);
  for (const t of [e.proceso, ...e.haces, ...e.hoja, e.resumen]) if (/→|\b[A-ZÁÉÍÓÚ]{4,}:/.test(t)) err(`${e.id}: texto con flecha o etiqueta en mayúsculas: ${t.slice(0, 60)}`);
  for (const s of [...e.lecciones, ...(e.ampliacion ?? [])]) {
    if (!bySlug[s]) err(`${e.id}: la lección ${s} no existe`);
    if (vistos.has(s)) err(`${e.id}: la lección ${s} está dos veces`);
    vistos.add(s);
  }
}

// ── 2. Ajustes ──────────────────────────────────────────────────────────────
const textos = (v) => (typeof v === "string" ? [v] : Array.isArray(v) ? v.flatMap(textos) : v && typeof v === "object" ? Object.values(v).flatMap(textos) : []);
for (const [slug, lista] of Object.entries(ajustes)) {
  if (!edicion.has(slug)) err(`ajustes de ${slug}, que no está en la edición`);
  const todo = textos(bySlug[slug] ?? {}).join("\n\u0000\n");
  for (const a of lista) {
    const n = todo.split(a.buscar).length - 1;
    if (n !== 1) err(`ajuste de ${slug}: «${a.buscar.slice(0, 70)}…» aparece ${n} veces (debe ser 1). ¿Ha cambiado la lección?`);
  }
}

// ── 3. Textos ───────────────────────────────────────────────────────────────
const prohibido = [
  [/simulador/i, "simulador"],
  [/\bSAP\b/, "SAP"],
  [/certificaci[oó]n|certificad[oa]s? (oficial|de profesionalidad)/i, "certificaciones"],
  [/phet/i, "PhET"],
  [/youtube|v[ií]deo/i, "vídeos"],
  [/\bnivel(?:es)? \d/i, "niveles del temario"],
  [/temario completo|ruta del operador/i, "estructura de la edición completa"],
  [/\bVictor\b/, "nombre personal"],
  [/esta app\b/i, "referencia a la app completa"],
];
const fuera = lessons.filter((l) => !edicion.has(l.slug));
const titulosFuera = new Map(fuera.map((l) => [l.title, l.slug]));
const rutasValidas = /^\/(glosario|fds(\/[\w-]+)?|calculadoras|tarjetas|creditos|progreso)?(#[\w-]+)?$/;

function revisa(origen, texto) {
  for (const [re, que] of prohibido) {
    const m = texto.match(re);
    if (m) err(`${origen}: menciona ${que}: «…${texto.slice(Math.max(0, m.index - 50), m.index + 40).replace(/\n/g, " ")}…»`);
  }
  for (const m of texto.matchAll(/\]\((\/[^)\s]*)\)/g)) {
    const href = m[1];
    const lec = href.match(/^\/leccion\/([\w-]+)/);
    if (lec ? !edicion.has(lec[1]) : !rutasValidas.test(href)) err(`${origen}: enlace fuera de la edición: ${href}`);
  }
  for (const m of texto.matchAll(/«([^»]{6,140})»/g)) {
    if (titulosFuera.has(m[1])) err(`${origen}: cita la lección «${m[1]}» (${titulosFuera.get(m[1])}), que no está en la edición`);
  }
}

for (const slug of edicion) {
  const l = L.getLeccion(slug);
  if (!l) continue;
  revisa(slug, textos(l).join("\n"));
  const m = L.mediaDe(slug);
  if (m && ("videos" in m || "sims" in m)) err(`${slug}: la edición no lleva vídeos ni simulaciones`);
  for (const id of m?.images ?? []) if (!M.images[id]) err(`${slug}: imagen ${id} no existe`);
}

const tarjetas = cards.filter((c) => c.lesson && edicion.has(c.lesson));
for (const c of tarjetas) revisa(`tarjeta ${c.id}`, `${c.front}\n${c.back}`);

// Imágenes y señales: archivo presente y licencia libre de las que admite media.ts (ninguna es no comercial)
for (const id of L.imagenesUsadas()) {
  const im = M.images[id];
  if (!existsSync(join(repo, "public/media", im.file))) err(`imagen ${id}: falta public/media/${im.file}`);
  if (!M.licenses[im.license] || /NC|ND/.test(im.license)) err(`imagen ${id}: licencia no válida para la edición: ${im.license}`);
  if (!im.author || !im.commons) err(`imagen ${id}: sin autor u origen`);
}
for (const id of L.senalesUsadas()) if (!M.signs[id]) err(`señal ${id} no existe`);

// ── 4. Código ───────────────────────────────────────────────────────────────
const vetado = [
  /^src\/sim\//,
  /^src\/sap\//,
  /^src\/problemas\//,
  /^src\/certs\/(?!grading\.ts$|useCertState\.ts$|fdsPool\.ts$)/,
  /^src\/components\/(sim|sap|problemas)\//,
  /^src\/components\/certs\/(?!QuestionItem\.tsx$)/,
  /^src\/components\/(CloudPanel|CloudSync|Search|BackupPanel|LessonSidebar|LessonMedia|PlantMap|OperatorRoute)\.tsx$/,
  /^src\/content\/terms\.ts$/,
  /^src\/components\/flashcards\/Flashcards\.tsx$/,
  /^src\/lib\/cloud\.ts$/,
  /^src\/content\/practica\.ts$/,
  /^src\/app\/(?!fds\/|calculadoras\/|globals\.css$)/,
];
const ext = ["", ".ts", ".tsx", ".js", ".mjs", ".json", "/index.ts", "/index.tsx"];
function resolver(desde, spec) {
  let base;
  if (spec.startsWith("@op/")) base = join(op, spec.slice(4));
  else if (spec.startsWith("@/")) base = join(src, spec.slice(2));
  else if (spec.startsWith(".")) base = resolve(dirname(desde), spec);
  else return null;
  for (const e of ext) if (existsSync(base + e) && statSync(base + e).isFile()) return base + e;
  err(`${relative(repo, desde)}: no se resuelve ${spec}`);
  return null;
}
const ficheros = (d) => readdirSync(d, { withFileTypes: true }).flatMap((f) => (f.isDirectory() ? ficheros(join(d, f.name)) : /\.(ts|tsx)$/.test(f.name) ? [join(d, f.name)] : []));
const pendientes = ficheros(op);
const alcanzados = new Set(pendientes);
const quien = new Map();
while (pendientes.length) {
  const f = pendientes.pop();
  if (/\.json$/.test(f)) continue;
  const code = readFileSync(f, "utf8");
  for (const m of code.matchAll(/(?:from|import)\s*\(?\s*["']([^"']+)["']/g)) {
    const r = resolver(f, m[1]);
    if (!r || alcanzados.has(r)) continue;
    alcanzados.add(r);
    quien.set(r, f);
    pendientes.push(r);
  }
}
for (const f of alcanzados) {
  const rel = relative(repo, f);
  if (vetado.some((re) => re.test(rel))) {
    const cadena = [rel];
    for (let x = quien.get(f); x; x = quien.get(x)) cadena.push(relative(repo, x));
    err(`la edición de operador carga ${rel} (${cadena.reverse().join(" › ")})`);
  }
}
// operador/package.json solo existe para Vercel: sus versiones tienen que ser las de la raíz
const raiz = JSON.parse(readFileSync(join(repo, "package.json"), "utf8")).dependencies;
const suyo = JSON.parse(readFileSync(join(repo, "operador/package.json"), "utf8")).dependencies;
for (const [dep, v] of Object.entries(suyo)) if (raiz[dep] !== v) err(`operador/package.json: ${dep} ${v} no coincide con la raíz (${raiz[dep]})`);
const conf = readFileSync(join(repo, "operador/next.config.ts"), "utf8");
if (/youtube|phet/i.test(conf)) err("operador/next.config.ts permite YouTube o PhET en la CSP");

const minutos = (ls) => ls.reduce((m, s) => m + (bySlug[s]?.minutes ?? 0), 0);
console.log(
  `Edición de operador: ${E.etapas.length} etapas, ${E.recorrido.length} lecciones básicas (${Math.round(minutos(E.recorrido) / 6) / 10} h) y ` +
    `${edicion.size - E.recorrido.length} de ampliación (${Math.round(minutos([...edicion].filter((s) => !E.recorrido.includes(s))) / 6) / 10} h); ` +
    `${L.imagenesUsadas().length} imágenes, ${tarjetas.length} tarjetas, ${alcanzados.size} archivos de código.`,
);
if (errors) {
  console.error(`\n${errors} error(es) en la edición de operador.`);
  process.exit(1);
}
console.log("Todo correcto.");
