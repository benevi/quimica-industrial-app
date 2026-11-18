// Sorteo de preguntas de un simulacro. Sin importar el contenido de las lecciones,
// para que la página del simulacro no cargue todo el temario en el navegador.
import type { PoolItem } from "./pool";
import type { Mock } from "./prep";

export function shuffle<T>(arr: T[], rand = Math.random) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Sortea las preguntas de un simulacro repartidas por unidad (con el peso de cada una si lo tiene)
 * y sin repetir pregunta, aunque una lección esté en el temario de dos unidades.
 */
export function drawMock(m: Mock, pools: Record<string, PoolItem[]>, rand = Math.random): PoolItem[] {
  const seen = new Set<string>();
  const perUnit = m.units.map((u) => shuffle(pools[u] ?? [], rand).filter((x) => !seen.has(x.id) && (seen.add(x.id), true)));
  const weights = m.units.map((u) => m.weights?.[u] ?? 1 / m.units.length);
  const wsum = weights.reduce((a, b) => a + b, 0);
  const want = weights.map((w) => Math.round((m.questions * w) / wsum));
  const out: PoolItem[] = [];
  perUnit.forEach((items, i) => out.push(...items.slice(0, want[i])));
  // si alguna unidad no llega o el redondeo se queda corto, se completa con lo que sobre
  const rest = shuffle(perUnit.flatMap((items, i) => items.slice(want[i])), rand);
  while (out.length < m.questions && rest.length) out.push(rest.shift()!);
  return shuffle(out.slice(0, m.questions), rand);
}

