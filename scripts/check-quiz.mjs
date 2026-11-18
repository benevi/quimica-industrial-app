// Comprueba que cada pregunta numérica tiene respuesta y explicación coherentes,
// y que no hay slugs repetidos. Uso: node scripts/check-quiz.mjs
import { readdirSync, readFileSync } from "node:fs";

const dir = new URL("../src/content/", import.meta.url);
const files = readdirSync(dir).filter((f) => /^nivel\d+\.ts$/.test(f));
let errors = 0;
const slugs = new Set();
for (const f of files) {
  const src = readFileSync(new URL(f, dir), "utf8");
  for (const m of src.matchAll(/slug: "([^"]+)"/g)) {
    if (slugs.has(m[1])) { console.error(`Slug repetido: ${m[1]}`); errors++; }
    slugs.add(m[1]);
  }
  // cada respuesta numérica debe aparecer (con coma decimal) en su explicación
  for (const m of src.matchAll(/kind: "number",[\s\S]*?answer: ([\d.]+),[\s\S]*?explain: "([^"]*)"/g)) {
    const ans = m[1].replace(".", ",");
    if (!m[2].includes(ans)) { console.error(`${f}: la respuesta ${ans} no aparece en la explicación: ${m[2]}`); errors++; }
  }
}
console.log(`${files.length} archivos, ${slugs.size} lecciones, ${errors} errores`);
process.exit(errors ? 1 : 0);
