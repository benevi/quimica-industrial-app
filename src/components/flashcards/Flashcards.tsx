"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { lessons } from "@/content";
import { cards as baseCards, decks as baseDecks, type Card, type Deck } from "@/content/tarjetas";
import { questionById } from "@/certs/pool";
import { SRS_DAYS, today, useCertState } from "@/certs/useCertState";
import { useProgress } from "@/lib/progress";
import { Markdown } from "@/components/Markdown";

/** Unos 20 segundos por tarjeta: 15 tarjetas ≈ 5 minutos */
const SESSION = 15;
const VOCAB: Deck = { id: "vocab", title: "Vocabulario de tus lecciones", titleEn: "Your lessons' glossary", icon: "🔤" };

export function Flashcards() {
  const { state, loaded, answerCard } = useCertState();
  const { progress, loaded: progressLoaded } = useProgress();
  const [chosen, setChosen] = useState<string[]>([]);
  const [queue, setQueue] = useState<string[] | null>(null);
  const [requeued, setRequeued] = useState<Set<string>>(new Set());
  const [i, setI] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [tally, setTally] = useState({ known: 0, unknown: 0 });

  // Tarjetas de vocabulario: los términos de las lecciones que ya has completado
  const vocabCards = useMemo<Card[]>(
    () =>
      lessons
        .filter((l) => progress[l.slug]?.done)
        .flatMap((l) =>
          l.terms.map((t, k) => ({ id: `term:${l.slug}:${k}`, deck: "vocab", front: `¿Qué es «${t.es}»?`, back: `**${t.en}**\n\n${t.def}`, lesson: l.slug })),
        ),
    [progress],
  );
  const allCards = useMemo(() => [...baseCards, ...vocabCards], [vocabCards]);
  const byId = useMemo(() => Object.fromEntries(allCards.map((c) => [c.id, c])), [allCards]);
  const decks = vocabCards.length ? [...baseDecks, VOCAB] : baseDecks;
  const lessonTitle = useMemo(() => Object.fromEntries(lessons.map((l) => [l.slug, l.title])), []);

  const srs = state.cards ?? {};
  const inDeck = (c: Card) => chosen.length === 0 || chosen.includes(c.deck);
  const due = allCards
    .filter((c) => inDeck(c) && srs[c.id] && srs[c.id].due <= today())
    .sort((a, b) => srs[a.id].box - srs[b.id].box || srs[a.id].due.localeCompare(srs[b.id].due));
  // Nuevas: primero las de lecciones que ya has hecho, luego el resto en el orden del mazo
  const fresh = allCards
    .filter((c) => inDeck(c) && !srs[c.id])
    .sort((a, b) => Number(!progress[b.lesson ?? ""]?.done) - Number(!progress[a.lesson ?? ""]?.done));
  const learned = allCards.filter((c) => (srs[c.id]?.box ?? 0) >= 4).length;
  const failsDue = Object.entries(state.srs).filter(([id, c]) => c.due <= today() && questionById(id)).length;

  const start = useCallback(() => {
    const ids = [...due, ...fresh].slice(0, SESSION).map((c) => c.id);
    setQueue(ids);
    setRequeued(new Set());
    setI(0);
    setFlipped(false);
    setTally({ known: 0, unknown: 0 });
  }, [due, fresh]);

  const answer = useCallback(
    (known: boolean) => {
      if (!queue || !flipped) return;
      const id = queue[i];
      answerCard(id, known);
      setTally((t) => (known ? { ...t, known: t.known + 1 } : { ...t, unknown: t.unknown + 1 }));
      // La que no sabías vuelve una vez al final de esta misma sesión
      if (!known && !requeued.has(id)) {
        setQueue([...queue, id]);
        setRequeued(new Set(requeued).add(id));
      }
      setI((x) => x + 1);
      setFlipped(false);
    },
    [queue, flipped, i, answerCard, requeued],
  );

  useEffect(() => {
    if (!queue || i >= queue.length) return;
    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement)?.closest("input,textarea,select")) return;
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        setFlipped(true);
      } else if (e.key === "1") answer(false);
      else if (e.key === "2") answer(true);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [queue, i, answer]);

  if (!loaded || !progressLoaded) return <p className="text-muted">Cargando…</p>;

  // ── Sesión en curso ──
  if (queue && i < queue.length) {
    const c = byId[queue[i]];
    const deck = decks.find((d) => d.id === c.deck);
    const box = srs[c.id]?.box;
    return (
      <section className="mx-auto max-w-2xl space-y-4" aria-live="polite">
        <div className="flex items-center justify-between text-sm text-muted">
          <span>
            Tarjeta {i + 1} de {queue.length} · {deck?.icon} {deck?.title}
          </span>
          <button onClick={() => setQueue(null)} className="underline hover:text-ink">
            Terminar
          </button>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-soft">
          <div className="h-full bg-accent transition-all" style={{ width: `${(i / queue.length) * 100}%` }} />
        </div>
        <div className="min-h-64 rounded-2xl border-2 border-line bg-surface p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">{box ? `Caja ${box}` : "Nueva"}</p>
          <p className="mt-2 text-xl font-semibold leading-snug">{c.front}</p>
          {flipped ? (
            <div className="mt-5 border-t border-line pt-4">
              <Markdown>{c.back}</Markdown>
              {c.lesson && lessonTitle[c.lesson] && (
                <p className="mt-3 text-xs text-muted">
                  Lección:{" "}
                  <Link href={`/leccion/${c.lesson}`} className="underline" target="_blank">
                    {lessonTitle[c.lesson]}
                  </Link>
                </p>
              )}
            </div>
          ) : (
            <button onClick={() => setFlipped(true)} className="mt-8 w-full rounded-xl border border-dashed border-line py-6 text-muted hover:border-accent hover:text-ink">
              Piensa la respuesta y dale la vuelta <span className="text-xs">(espacio)</span>
            </button>
          )}
        </div>
        {flipped && (
          <div className="grid grid-cols-2 gap-3">
            <button onClick={() => answer(false)} className="rounded-xl border-2 border-bad bg-bad-soft px-4 py-3 font-medium">
              No lo sabía <span className="text-xs text-muted">(1)</span>
              <span className="block text-xs font-normal text-muted">Vuelve al final y mañana</span>
            </button>
            <button onClick={() => answer(true)} className="rounded-xl border-2 border-ok bg-ok-soft px-4 py-3 font-medium">
              Lo sabía <span className="text-xs text-muted">(2)</span>
              <span className="block text-xs font-normal text-muted">Vuelve en {SRS_DAYS[Math.min((box ?? 1) + 1, 5)]} días</span>
            </button>
          </div>
        )}
      </section>
    );
  }

  // ── Fin de sesión ──
  if (queue) {
    return (
      <section className="mx-auto max-w-2xl rounded-2xl border border-line bg-surface p-6">
        <p className="text-lg font-semibold">Repaso terminado</p>
        <p className="mt-1 text-muted">
          {tally.known} «lo sabía» y {tally.unknown} «no lo sabía». Las que sabías vuelven dentro de unos días; las otras, mañana.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <button onClick={() => setQueue(null)} className="rounded-lg bg-accent px-4 py-2 font-medium text-white hover:opacity-90">
            Volver
          </button>
          {failsDue > 0 && (
            <Link href="/repaso" className="rounded-lg border border-line px-4 py-2 hover:bg-soft">
              Repasar también {failsDue} fallo{failsDue === 1 ? "" : "s"} de examen
            </Link>
          )}
        </div>
      </section>
    );
  }

  // ── Portada ──
  const sessionSize = Math.min(SESSION, due.length + fresh.length);
  return (
    <div className="space-y-6">
      <section className="grid gap-4 lg:grid-cols-[1.3fr_1fr]">
        <div className="rounded-2xl border-2 border-accent bg-accent-soft p-5">
          <p className="text-lg font-semibold">
            {due.length > 0 ? `${due.length} tarjeta${due.length === 1 ? "" : "s"} para repasar hoy` : "Nada pendiente hoy: toca aprender tarjetas nuevas"}
          </p>
          <p className="mt-1 text-sm text-muted">
            Sesiones de {SESSION} tarjetas, unos 5 minutos: primero las que te tocan hoy y después nuevas (antes las de lecciones que ya has hecho). Mira la
            pregunta, piensa la respuesta, dale la vuelta y sé sincero.
          </p>
          <button
            onClick={start}
            disabled={sessionSize === 0}
            className="mt-4 rounded-lg bg-accent px-5 py-2.5 font-medium text-white hover:opacity-90 disabled:opacity-50"
          >
            Repaso de 5 minutos ({sessionSize})
          </button>
          {failsDue > 0 && (
            <p className="mt-3 text-sm">
              Además tienes <Link href="/repaso" className="font-medium underline">{failsDue} fallo{failsDue === 1 ? "" : "s"} de examen</Link> pendientes en el repaso de fallos.
            </p>
          )}
        </div>
        <div className="rounded-2xl border border-line bg-surface p-5 text-sm">
          <p className="font-semibold">Tu avance</p>
          <dl className="mt-2 space-y-1">
            <div className="flex justify-between">
              <dt className="text-muted">Tarjetas disponibles</dt>
              <dd className="font-semibold tabular-nums">{allCards.length}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted">Estudiadas alguna vez</dt>
              <dd className="font-semibold tabular-nums">{allCards.filter((c) => srs[c.id]).length}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted">Bien sabidas (caja 4–5)</dt>
              <dd className="font-semibold tabular-nums">{learned}</dd>
            </div>
          </dl>
          <p className="mt-3 text-xs text-muted">
            Mismo sistema que el repaso de fallos (cajas Leitner): cada acierto sube la tarjeta de caja y tarda más en volver ({SRS_DAYS.slice(1).join(", ")} días). Se
            guarda con el resto de tu progreso y entra en la <Link href="/progreso" className="underline">copia de seguridad</Link>.
          </p>
        </div>
      </section>

      <section aria-labelledby="mazos-h">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 id="mazos-h" className="text-lg font-semibold">Mazos</h2>
          <p className="text-xs text-muted">{chosen.length ? "Repasas solo los mazos marcados" : "Toca un mazo para repasar solo ese"}</p>
        </div>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {decks.map((d) => {
            const list = allCards.filter((c) => c.deck === d.id);
            const seen = list.filter((c) => srs[c.id]).length;
            const ok = list.filter((c) => (srs[c.id]?.box ?? 0) >= 4).length;
            const dueN = list.filter((c) => srs[c.id] && srs[c.id].due <= today()).length;
            const on = chosen.includes(d.id);
            return (
              <button
                key={d.id}
                aria-pressed={on}
                onClick={() => setChosen((x) => (on ? x.filter((y) => y !== d.id) : [...x, d.id]))}
                className={`rounded-2xl border-2 p-4 text-left transition ${on ? "border-accent bg-accent-soft" : "border-line bg-surface hover:border-accent"}`}
              >
                <p className="font-semibold">
                  <span aria-hidden>{d.icon}</span> {d.title}
                </p>
                <p className="text-xs text-muted">{d.titleEn}</p>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-soft">
                  <div className="h-full bg-ok" style={{ width: `${list.length ? (ok / list.length) * 100 : 0}%` }} />
                </div>
                <p className="mt-1.5 text-xs text-muted">
                  {list.length} tarjetas · {seen} vistas · {ok} sabidas{dueN ? ` · ${dueN} para hoy` : ""}
                </p>
              </button>
            );
          })}
        </div>
        {!vocabCards.length && (
          <p className="mt-3 text-sm text-muted">Cuando completes lecciones aparecerá un mazo más con su vocabulario (español, inglés y definición).</p>
        )}
      </section>

      <section aria-labelledby="todas-h">
        <h2 id="todas-h" className="text-lg font-semibold">Leer todas las tarjetas</h2>
        <p className="text-sm text-muted">Para repasar de un vistazo, sin puntuar.</p>
        <div className="mt-3 space-y-2">
          {decks.map((d) => (
            <details key={d.id} className="rounded-xl border border-line bg-surface">
              <summary className="cursor-pointer px-4 py-3 font-medium hover:bg-soft">
                {d.icon} {d.title} <span className="text-sm font-normal text-muted">({allCards.filter((c) => c.deck === d.id).length})</span>
              </summary>
              <ul className="divide-y divide-line border-t border-line">
                {allCards
                  .filter((c) => c.deck === d.id)
                  .map((c) => (
                    <li key={c.id} className="grid gap-1 px-4 py-3 text-sm sm:grid-cols-[1fr_1.4fr] sm:gap-4">
                      <p className="font-medium">{c.front}</p>
                      <div className="text-muted [&_p]:my-0.5">
                        <Markdown>{c.back}</Markdown>
                      </div>
                    </li>
                  ))}
              </ul>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
