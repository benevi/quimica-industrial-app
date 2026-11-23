// Copia a operador/public solo las imágenes que usa la edición de operador (etapas y lecciones), las señales ISO 7010,
// los pictogramas GHS y el icono. Se ejecuta solo antes de dev:operador y build:operador; operador/public no va en git.
import { createJiti } from "jiti";
import { copyFileSync, mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const repo = fileURLToPath(new URL("..", import.meta.url));
const src = join(repo, "src");
const op = join(repo, "operador", "src");
const jiti = createJiti(import.meta.url, { alias: { "@op": op, "@": src } });
const M = await jiti.import(join(src, "content/media.ts"));
const L = await jiti.import(join(op, "lecciones.ts"));

const pub = join(repo, "public");
const dest = join(repo, "operador", "public");
rmSync(dest, { recursive: true, force: true });
mkdirSync(join(dest, "media", "senales"), { recursive: true });
mkdirSync(join(dest, "ghs"), { recursive: true });

const imagenes = L.imagenesUsadas();
for (const id of imagenes) copyFileSync(join(pub, "media", M.images[id].file), join(dest, "media", M.images[id].file));
const senales = L.senalesUsadas();
for (const id of senales) copyFileSync(join(pub, "media", "senales", M.signs[id].file), join(dest, "media", "senales", M.signs[id].file));
for (let i = 1; i <= 9; i++) copyFileSync(join(pub, "ghs", `GHS0${i}.svg`), join(dest, "ghs", `GHS0${i}.svg`));
copyFileSync(join(src, "app", "favicon.ico"), join(dest, "favicon.ico"));
console.log(`Edición de operador: copiadas ${imagenes.length} imágenes, ${senales.length} señales y 9 pictogramas a operador/public.`);
