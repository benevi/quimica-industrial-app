// Comprueba imágenes, señales y vídeos de las lecciones. Uso: npm run check:media
import { createJiti } from "jiti";
import { existsSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
const root = fileURLToPath(new URL("../src", import.meta.url));
const pub = fileURLToPath(new URL("../public", import.meta.url));
const jiti = createJiti(import.meta.url, { alias: { "@": root } });
const { lessons } = await jiti.import(root + "/content/index.ts");
const M = await jiti.import(root + "/content/media.ts");
let errors = 0;
const err = (m) => { console.error("ERROR", m); errors++; };
const slugs = new Set(lessons.map((l) => l.slug));

for (const [id, im] of Object.entries(M.images)) {
  if (!existsSync(`${pub}/media/${im.file}`)) err(`imagen ${id}: falta public/media/${im.file}`);
  if (!M.licenses[im.license]) err(`imagen ${id}: licencia desconocida ${im.license}`);
  if (!im.author || !im.commons || !im.caption.includes("(")) err(`imagen ${id}: falta autor, origen o término en inglés`);
}
for (const [id, s] of Object.entries(M.signs)) if (!existsSync(`${pub}/media/senales/${s.file}`)) err(`señal ${id}: falta ${s.file}`);
for (let i = 1; i <= 9; i++) if (!existsSync(`${pub}/ghs/GHS0${i}.svg`)) err(`falta public/ghs/GHS0${i}.svg`);

const usedImages = new Set();
for (const [slug, m] of Object.entries(M.lessonMedia)) {
  if (!slugs.has(slug)) err(`lección inexistente: ${slug}`);
  for (const id of m.images ?? []) { if (!M.images[id]) err(`${slug}: imagen ${id} no existe`); usedImages.add(id); }
  for (const g of m.signs ?? []) for (const id of g.ids) if (!M.signs[id]) err(`${slug}: señal ${id} no existe`);
  for (const v of m.videos ?? []) {
    if (!/^[\w-]{11}$/.test(v.id)) err(`${slug}: id de vídeo no válido ${v.id}`);
    if (v.duration !== undefined && !/^\d{1,2}:\d{2}$/.test(v.duration)) err(`${slug}: duración no válida ${v.duration}`);
    if (!v.why.trim()) err(`${slug}: vídeo ${v.id} sin explicación`);
    if (!v.title.trim() || !v.channel.trim()) err(`${slug}: vídeo ${v.id} sin título o canal`);
  }
}
for (const [slug, list] of Object.entries(M.lessonSims)) {
  if (!slugs.has(slug)) err(`simulación en lección inexistente: ${slug}`);
  for (const s of list) {
    if (!M.phetSims.includes(s.sim)) err(`${slug}: simulación PhET no comprobada ${s.sim}`);
    if (!s.title.trim() || !s.why.trim()) err(`${slug}: simulación ${s.sim} sin título o explicación`);
  }
}
for (const id of Object.keys(M.images)) if (!usedImages.has(id)) err(`imagen sin usar: ${id}`);
const files = new Set(Object.values(M.images).map((i) => i.file));
for (const f of readdirSync(`${pub}/media`)) if (f.endsWith(".jpg") && !files.has(f)) err(`archivo sin ficha de créditos: public/media/${f}`);

const n = Object.keys(M.lessonMedia).length;
const nv = new Set(Object.values(M.lessonMedia).flatMap((m) => (m.videos ?? []).map((v) => v.id))).size;
console.log(`${n} lecciones con material, ${Object.keys(M.images).length} imágenes, ${Object.keys(M.signs).length} señales, ${nv} vídeos, ${Object.values(M.lessonSims).flat().length} simulaciones en ${Object.keys(M.lessonSims).length} lecciones`);
if (errors) { console.error(`${errors} errores`); process.exit(1); }
console.log("OK");
