// Comprueba que cada pregunta numérica tiene respuesta y explicación coherentes,
// y que no hay slugs repetidos. Uso: node scripts/check-quiz.mjs
import { readdirSync, readFileSync } from "node:fs";

const dir = new URL("../src/content/", import.meta.url);
const files = readdirSync(dir).filter((f) => /^nivel\d+(-[a-z]+)?\.ts$/.test(f));
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
// lectura de números escritos a mano (src/lib/num.ts)
const { createJiti } = await import("jiti");
const { readNumbers, matchesNumber } = await createJiti(import.meta.url).import(new URL("../src/lib/num.ts", import.meta.url).pathname);
const cases = [["1.250", [1250, 1.25]], ["41.800", [41800, 41.8]], ["1,25", [1.25]], ["1.013,25", [1013.25]], ["0.250", [0.25]], ["85 %", [85]], ["12 kg", [12]], ["", []], ["abc", []]];
for (const [input, want] of cases) {
  const got = readNumbers(input);
  if (JSON.stringify(got) !== JSON.stringify(want)) { console.error(`Lectura de «${input}»: ${JSON.stringify(got)}, se esperaba ${JSON.stringify(want)}`); errors++; }
}
if (!matchesNumber("1.250", 1250, 0.01) || matchesNumber("", 0, 0.01)) { console.error("matchesNumber no acepta el punto de millares o acepta una respuesta vacía"); errors++; }
console.log(`${files.length} archivos, ${slugs.size} lecciones, ${errors} errores`);
process.exit(errors ? 1 : 0);
