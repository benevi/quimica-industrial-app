// Comprueba las tarjetas de repaso y las fichas de seguridad. Uso: npm run check:repaso
import { createJiti } from "jiti";
import { fileURLToPath } from "node:url";
const root = fileURLToPath(new URL("../src", import.meta.url));
const jiti = createJiti(import.meta.url, { alias: { "@": root } });
const { lessons } = await jiti.import(root + "/content/index.ts");
const { cards, decks } = await jiti.import(root + "/content/tarjetas.ts");
const F = await jiti.import(root + "/content/fds.ts");
const pool = await jiti.import(root + "/certs/pool.ts");
let errors = 0;
const err = (m) => { console.error("ERROR", m); errors++; };
const slugs = new Set(lessons.map((l) => l.slug));
const deckIds = new Set(decks.map((d) => d.id));

// Tarjetas: ids únicas, mazo y lección existentes, texto no vacío
const ids = new Set();
for (const c of cards) {
  if (ids.has(c.id)) err(`tarjeta repetida: ${c.id}`);
  ids.add(c.id);
  if (!deckIds.has(c.deck)) err(`${c.id}: mazo inexistente ${c.deck}`);
  if (c.lesson && !slugs.has(c.lesson)) err(`${c.id}: lección inexistente ${c.lesson}`);
  if (!c.front.trim() || !c.back.trim()) err(`${c.id}: cara vacía`);
}
for (const d of decks) if (!cards.some((c) => c.deck === d.id)) err(`mazo vacío: ${d.id}`);

// Fichas: 16 secciones, frases y pictogramas conocidos, palabra de advertencia coherente
const strongest = (h) => /^H(22[0245]|26[01]|271|30[01]|31[014]|318|33[01]|334|340|350|360|370|372|304)$/.test(h);
for (const s of F.sdsList) {
  if (s.sections.length !== 16) err(`${s.id}: tiene ${s.sections.length} secciones, deben ser 16`);
  for (const h of s.h) if (!F.hStatements[h]) err(`${s.id}: frase ${h} sin texto`);
  for (const p of s.p) if (!F.pStatements[p]) err(`${s.id}: consejo ${p} sin texto`);
  for (const g of s.pictograms) if (!F.pictograms[g]) err(`${s.id}: pictograma ${g} desconocido`);
  if (s.pictograms.includes("GHS06") && s.pictograms.includes("GHS07")) err(`${s.id}: GHS07 no puede ir con GHS06 (CLP art. 26)`);
  const needsDanger = s.h.some(strongest);
  if (needsDanger && s.signal !== "Peligro") err(`${s.id}: con ${s.h.join(", ")} la palabra debe ser «Peligro»`);
  if (!needsDanger && s.signal === "Peligro") err(`${s.id}: ninguna frase exige «Peligro»`);
  if (s.p.length > 6) err(`${s.id}: más de 6 consejos P en la etiqueta`);
}
// Preguntas: respuesta en rango, explicación, y que el repaso de fallos las encuentre por id
for (const qid of F.fdsQuizIds) {
  const items = pool.fdsItems(qid);
  if (!items.length) err(`ejercicio vacío: ${qid}`);
  for (const it of items) {
    if (it.q.kind === "choice" && !(it.q.answer >= 0 && it.q.answer < it.q.options.length)) err(`${it.id}: respuesta fuera de rango`);
    if (!it.q.explain) err(`${it.id}: sin explicación`);
    if (pool.questionById(it.id)?.q !== it.q) err(`${it.id}: el repaso no la encuentra`);
  }
}
console.log(`${cards.length} tarjetas en ${decks.length} mazos, ${F.sdsList.length} fichas, ${F.fdsQuizIds.reduce((a, q) => a + F.fdsQuestions(q).length, 0)} preguntas de FDS, ${errors} errores`);
process.exit(errors ? 1 : 0);
