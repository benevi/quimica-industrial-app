// Escribe operador/out/_headers (cabeceras de seguridad para Netlify) tras `EXPORTAR=1 next build operador`.
import { createJiti } from "jiti";
import { existsSync, writeFileSync } from "node:fs";

const out = new URL("../operador/out/", import.meta.url);
if (!existsSync(new URL("index.html", out))) {
  console.error("No está operador/out: ejecuta antes la exportación (npm run export:operador).");
  process.exit(1);
}
const { cabeceras } = await createJiti(import.meta.url).import(new URL("../operador/next.config.ts", import.meta.url).pathname);
const lineas = ["/*", ...cabeceras(false).map((h) => `  ${h.key}: ${h.value}`)];
writeFileSync(new URL("_headers", out), lineas.join("\n") + "\n");
console.log("operador/out/_headers escrito.");
