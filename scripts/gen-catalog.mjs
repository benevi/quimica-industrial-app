// Genera el catálogo ligero de lecciones que usan las páginas del navegador (sin el texto ni el test de cada lección),
// y el vocabulario completo para el glosario y las tarjetas. Uso: npm run gen:catalog (se ejecuta solo antes de dev y build).
// Con --check no escribe nada: falla si los archivos generados no coinciden con el contenido.
import { createJiti } from "jiti";
import { fileURLToPath } from "node:url";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
const root = fileURLToPath(new URL("../src", import.meta.url));
const jiti = createJiti(import.meta.url, { alias: { "@": root } });
const { lessons } = await jiti.import(root + "/content/index.ts");
const catalog = lessons.map((l) => ({ slug: l.slug, level: l.level, order: l.order, title: l.title, titleEn: l.titleEn, minutes: l.minutes, summary: l.summary, nTerms: l.terms.length, nQuiz: l.quiz.length }));
const terms = lessons.flatMap((l) => l.terms.map((t) => ({ es: t.es, en: t.en, def: t.def, lesson: l.slug })));
const files = [
  [root + "/content/catalog.generated.json", JSON.stringify(catalog) + "\n"],
  [root + "/content/terms.generated.json", JSON.stringify(terms) + "\n"],
];
let stale = 0;
for (const [f, txt] of files) {
  const cur = existsSync(f) ? readFileSync(f, "utf8") : "";
  if (cur === txt) continue;
  if (process.argv.includes("--check")) { console.error(`ERROR ${f.replace(root, "src")} no está al día: ejecuta npm run gen:catalog`); stale++; }
  else writeFileSync(f, txt);
}
if (process.argv.includes("--check")) { if (stale) process.exit(1); else console.log(`Catálogo al día: ${catalog.length} lecciones, ${terms.length} términos`); }
else console.log(`Catálogo generado: ${catalog.length} lecciones, ${terms.length} términos`);
