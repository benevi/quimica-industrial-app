// Comprueba el banco de problemas (src/problemas): cada generador, con muchas semillas, da un problema bien formado
// y la respuesta que se corrige es la misma que dice la solución. Uso: npm run check:problemas
import { createJiti } from "jiti";
import { fileURLToPath } from "node:url";
const root = fileURLToPath(new URL("../src", import.meta.url));
const jiti = createJiti(import.meta.url, { alias: { "@": root } });
const { lessons } = await jiti.import(root + "/content/index.ts");
const { GENERADORES } = await jiti.import(root + "/problemas/generadores.ts");
const { azar, n, esCorrecta } = await jiti.import(root + "/problemas/tipos.ts");
let errors = 0;
const err = (m) => { if (errors < 40) console.error("ERROR", m); errors++; };
const slugs = new Map(lessons.map((l) => [l.slug, l]));
const ids = new Set();
const SEMILLAS = 400;
for (const g of GENERADORES) {
  if (ids.has(g.id)) err(`id repetida: ${g.id}`);
  ids.add(g.id);
  const l = slugs.get(g.leccion);
  if (!l) err(`${g.id}: la lección ${g.leccion} no existe`);
  else if (l.level !== g.nivel) err(`${g.id}: nivel ${g.nivel}, pero la lección ${g.leccion} es del nivel ${l.level}`);
  const vistos = new Set();
  for (let s = 1; s <= SEMILLAS; s++) {
    let pr;
    try { pr = g.generar(azar(s * 7919)); } catch (e) { err(`${g.id} semilla ${s}: ${e.message}`); continue; }
    const where = `${g.id} semilla ${s}`;
    if (!Number.isFinite(pr.respuesta)) err(`${where}: respuesta no numérica (${pr.respuesta})`);
    if (pr.respuesta === 0) err(`${where}: respuesta cero`);
    const texto = [pr.enunciado, ...pr.pasos].join("\n");
    if (/NaN|undefined|Infinity/.test(texto)) err(`${where}: texto con NaN o undefined`);
    if (texto.includes("→")) err(`${where}: flecha «→» en el texto`);
    if (!pr.pasos.length) err(`${where}: sin pasos`);
    // La solución tiene que mostrar el número que se corrige, con los decimales indicados
    const shown = n(pr.respuesta, pr.decimales);
    if (!pr.pasos.some((p) => p.includes(shown))) err(`${where}: la solución no muestra la respuesta ${shown}\n   ${pr.pasos.at(-1)}`);
    // El número mostrado tiene que entrar en la tolerancia (si no, quien copia la solución fallaría)
    const mostrado = Number(shown.replace(",", "."));
    if (!esCorrecta(pr, mostrado)) err(`${where}: ${shown} se sale de la tolerancia de ${pr.respuesta}`);
    if (g.id === "riqueza-valoracion") { const v = Number(pr.enunciado.match(/gastan \*\*([\d,]+) mL/)[1].replace(",", ".")); if (v > 50) err(`${where}: gasto de bureta de ${v} mL`); }
    vistos.add(pr.enunciado);
  }
  if (vistos.size < 10) err(`${g.id}: solo ${vistos.size} enunciados distintos en ${SEMILLAS} semillas`);
}
const niveles = [...new Set(GENERADORES.map((g) => g.nivel))].sort((a, b) => a - b);
console.log(`${GENERADORES.length} tipos de problema en los niveles ${niveles.join(", ")}; ${GENERADORES.length * SEMILLAS} problemas generados, ${errors} errores`);
process.exit(errors ? 1 : 0);
