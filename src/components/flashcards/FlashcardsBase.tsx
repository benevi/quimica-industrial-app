"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { Card as FlashCard, Deck } from "@/content/tarjetas";
import type { Term } from "@/content/types";
import type { LessonMeta } from "@/content/catalog";
import { SRS_DAYS, today, useCertState } from "@/certs/useCertState";
import { useProgress } from "@/lib/progress";
import { Markdown } from "@/components/Markdown";
import { Icon } from "@/components/icons";
import { Bar, Card, Disclosure, SectionTitle, Status, btn } from "@/components/ui";

/** Unos 20 segundos por tarjeta: 15 tarjetas ≈ 5 minutos */
const SESSION = 15;
const VOCAB: Deck = { id: "vocab", title: "Vocabulario de tus lecciones", titleEn: "Your lessons' glossary" };

type SrsEntry = { due: string };

/**
 * Tarjetas de repaso sin datos propios: quien lo usa pasa las tarjetas, los mazos y las lecciones.
 * La edición completa (Flashcards.tsx) suma los fallos de examen; la de operador no tiene exámenes.
 */
export function FlashcardsBase({
  cards: baseCards,
  decks: baseDecks,
  lessons,
  vocab,
  countFailsDue,
}: {
  cards: FlashCard[];
  decks: Deck[];
  lessons: LessonMeta[];
  /** Vocabulario de cada lección (slug → términos), para el mazo de las lecciones hechas. */
  vocab: Record<string, Term[]>;
  /** Fallos de examen pendientes en el repaso de fallos (solo en la edición completa). */
  countFailsDue?: (srs: Record<string, SrsEntry>) => number;
}) {
  const { state, loaded, answerCard } = useCertState();
  const { progress, loaded: progressLoaded } = useProgress();
  const [chosen, setChosen] = useState<string[]>([]);
  const [queue, setQueue] = useState<string[] | null>(null);
  const [requeued, setRequeued] = useState<Set<string>>(new Set());
  const [i, setI] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [tally, setTally] = useState({ known: 0, unknown: 0 });

  // Tarjetas de vocabulario: los términos de las lecciones que ya has completado
  const vocabCards = useMemo<FlashCard[]>(
    () =>
      lessons
        .filter((l) => progress[l.slug]?.done)
        .flatMap((l) =>
          (vocab[l.slug] ?? []).map((t, k) => ({ id: `term:${l.slug}:${k}`, deck: "vocab", front: `¿Qué es «${t.es}»?`, back: `**${t.en}**\n\n${t.def}`, lesson: l.slug })),
        ),
    [progress, lessons, vocab],
  );
  const allCards = useMemo(() => [...baseCards, ...vocabCards], [baseCards, vocabCards]);
  const byId = useMemo(() => Object.fromEntries(allCards.map((c) => [c.id, c])), [allCards]);
  const decks = vocabCards.length ? [...baseDecks, VOCAB] : baseDecks;
  const lessonTitle = useMemo(() => Object.fromEntries(lessons.map((l) => [l.slug, l.title])), [lessons]);

  const srs = state.cards ?? {};
  const inDeck = (c: FlashCard) => chosen.length === 0 || chosen.includes(c.deck);
  const due = allCards
    .filter((c) => inDeck(c) && srs[c.id] && srs[c.id].due <= today())
    .sort((a, b) => srs[a.id].box - srs[b.id].box || srs[a.id].due.localeCompare(srs[b.id].due));
  // Nuevas: primero las de lecciones que ya has hecho, luego el resto en el orden del mazo
  const fresh = allCards
    .filter((c) => inDeck(c) && !srs[c.id])
    .sort((a, b) => Number(!progress[b.lesson ?? ""]?.done) - Number(!progress[a.lesson ?? ""]?.done));
  const learned = allCards.filter((c) => (srs[c.id]?.box ?? 0) >= 4).length;
  const failsDue = countFailsDue ? countFailsDue(state.srs) : 0;

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
      // Con el foco en un campo, un botón o un enlace, Espacio e Intro hacen lo suyo: el atajo no se mete
      if ((e.target as HTMLElement)?.closest("input,textarea,select,button,a,summary")) return;
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
      <section className="mx-auto max-w-2xl space-y-4" aria-live="polite" aria-label="Sesión de repaso">
        <div className="flex items-center justify-between gap-3 text-sm text-muted">
          <span>
            Tarjeta {i + 1} de {queue.length} · {deck?.title}
          </span>
          <button type="button" onClick={() => setQueue(null)} className={btn.quiet}>
            Terminar
          </button>
        </div>
        <Bar pct={Math.round((i / queue.length) * 100)} label={`Tarjeta ${i + 1} de ${queue.length}`} />
        <Card className="min-h-64 p-6 sm:p-8">
          <Status kind="todo">{box ? `Caja ${box}` : "Nueva"}</Status>
          <p className="mt-3 text-xl font-semibold leading-snug">{c.front}</p>
          {flipped ? (
            <div className="prose-app mt-5 max-w-[68ch] border-t border-line pt-4">
              <Markdown>{c.back}</Markdown>
              {c.lesson && lessonTitle[c.lesson] && (
                <p className="text-xs text-muted">
                  Lección:{" "}
                  <Link href={`/leccion/${c.lesson}`} className="text-accent underline underline-offset-2 hover:decoration-2" target="_blank">
                    {lessonTitle[c.lesson]}
                  </Link>
                </p>
              )}
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setFlipped(true)}
              className="mt-8 w-full rounded-md border border-dashed border-line-strong py-6 text-muted hover:border-accent hover:text-ink"
            >
              Piensa la respuesta y dale la vuelta <span className="text-xs">(espacio)</span>
            </button>
          )}
        </Card>
        {flipped && (
          <div className="grid grid-cols-2 gap-3">
            <button type="button" onClick={() => answer(false)} className="rounded-md border border-bad bg-bad-soft px-4 py-3 font-medium text-ink">
              No lo sabía <span className="text-xs text-muted">(1)</span>
              <span className="block text-xs font-normal text-muted">Vuelve al final y mañana</span>
            </button>
            <button type="button" onClick={() => answer(true)} className="rounded-md border border-ok bg-ok-soft px-4 py-3 font-medium text-ink">
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
      <Card as="section" className="mx-auto max-w-2xl p-6 sm:p-8">
        <h2 className="t-h2" role="status">
          Repaso terminado
        </h2>
        <p className="mt-1 text-muted">
          {tally.known} «lo sabía» y {tally.unknown} «no lo sabía». Las que sabías vuelven dentro de unos días; las otras, mañana.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <button type="button" onClick={() => setQueue(null)} className={btn.primary}>
            Volver
          </button>
          {failsDue > 0 && (
            <Link href="/repaso" className={btn.secondary}>
              Repasar también {failsDue} fallo{failsDue === 1 ? "" : "s"} de examen
            </Link>
          )}
        </div>
      </Card>
    );
  }

  // ── Portada ──
  const sessionSize = Math.min(SESSION, due.length + fresh.length);
  const seenAll = allCards.filter((c) => srs[c.id]).length;
  return (
    <div className="space-y-10">
      <section aria-labelledby="hoy-h" className="space-y-3">
        <div className="relative overflow-hidden rounded-[var(--radius)] border border-line bg-surface">
          <span aria-hidden className="absolute inset-y-0 left-0 w-1.5 bg-signal" />
          <div className="grid gap-5 p-6 pl-8 sm:p-7 sm:pl-10 md:grid-cols-[1fr_auto] md:items-center">
            <div className="min-w-0">
              <h2 id="hoy-h" className="t-h2">
                {due.length > 0 ? `${due.length} tarjeta${due.length === 1 ? "" : "s"} para repasar hoy` : "Nada pendiente hoy: toca aprender tarjetas nuevas"}
              </h2>
              <p className="mt-2 max-w-[60ch] text-sm leading-relaxed text-muted">
                Sesiones de {SESSION} tarjetas, unos 5 minutos: primero las que te tocan hoy y después nuevas (antes las de lecciones que ya has hecho). Mira la
                pregunta, piensa la respuesta, dale la vuelta y sé sincero.
              </p>
              {chosen.length > 0 && <p className="mt-2 text-sm">Repasas solo los mazos marcados.</p>}
            </div>
            <button type="button" onClick={start} disabled={sessionSize === 0} className={`${btn.primary} px-5 py-3 text-[15px]`}>
              Repaso de 5 minutos ({sessionSize})
              <Icon name="arrow" className="h-4 w-4" />
            </button>
          </div>
        </div>
        {failsDue > 0 && (
          <p className="text-sm text-muted">
            Además tienes{" "}
            <Link href="/repaso" className="font-medium text-accent underline underline-offset-2 hover:decoration-2">
              {failsDue} fallo{failsDue === 1 ? "" : "s"} de examen
            </Link>{" "}
            pendientes en el repaso de fallos.
          </p>
        )}
      </section>

      <section aria-labelledby="avance-h">
        <SectionTitle id="avance-h">Tu avance</SectionTitle>
        <Card>
          <dl className="grid divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {(
              [
                ["Tarjetas disponibles", allCards.length],
                ["Estudiadas alguna vez", seenAll],
                ["Bien sabidas (caja 4–5)", learned],
              ] as const
            ).map(([k, v]) => (
              <div key={k} className="px-5 py-4">
                <dt className="text-sm text-muted">{k}</dt>
                <dd className="mt-1 text-2xl font-semibold tabular-nums">{v}</dd>
              </div>
            ))}
          </dl>
        </Card>
        <Disclosure className="mt-3" summary={<span className="text-sm font-medium">Cómo funciona el repaso</span>}>
          <p className="max-w-[68ch] text-sm leading-relaxed text-muted">
            {countFailsDue ? "Mismo sistema que el repaso de fallos (cajas Leitner)" : "Sistema de cajas Leitner"}: cada acierto sube la tarjeta de caja y tarda más en volver ({SRS_DAYS.slice(1).join(", ")} días).
            Se guarda con el resto de tu progreso y entra en la{" "}
            <Link href="/progreso" className="text-accent underline underline-offset-2 hover:decoration-2">
              copia de seguridad
            </Link>
            .
          </p>
        </Disclosure>
      </section>

      <section aria-labelledby="mazos-h">
        <SectionTitle id="mazos-h" aside={chosen.length ? "Repasas solo los mazos marcados" : "Toca un mazo para repasar solo ese"}>
          Mazos
        </SectionTitle>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {decks.map((d) => {
            const list = allCards.filter((c) => c.deck === d.id);
            const seen = list.filter((c) => srs[c.id]).length;
            const ok = list.filter((c) => (srs[c.id]?.box ?? 0) >= 4).length;
            const dueN = list.filter((c) => srs[c.id] && srs[c.id].due <= today()).length;
            const on = chosen.includes(d.id);
            return (
              <button
                key={d.id}
                type="button"
                aria-pressed={on}
                onClick={() => setChosen((x) => (on ? x.filter((y) => y !== d.id) : [...x, d.id]))}
                className={`rounded-[var(--radius)] border p-4 text-left ${on ? "border-accent bg-accent-soft" : "border-line bg-surface hover:border-accent"}`}
              >
                <span className="flex items-start justify-between gap-2">
                  <span className="font-medium">{d.title}</span>
                  {on && <Icon name="check" className="h-5 w-5 shrink-0 text-accent" />}
                </span>
                <span lang="en" className="block text-xs text-muted">
                  {d.titleEn}
                </span>
                <Bar pct={list.length ? Math.round((ok / list.length) * 100) : 0} color="var(--ok)" className="mt-3" label={`${d.title}: ${ok} sabidas`} />
                <span className="mt-1.5 block text-xs text-muted">
                  {list.length} tarjetas · {seen} vistas · {ok} sabidas{dueN ? ` · ${dueN} para hoy` : ""}
                </span>
              </button>
            );
          })}
        </div>
        {!vocabCards.length && (
          <p className="mt-3 text-sm text-muted">Cuando completes lecciones aparecerá un mazo más con su vocabulario (español, inglés y definición).</p>
        )}
      </section>

      <section aria-labelledby="todas-h">
        <SectionTitle id="todas-h" aside="Para repasar de un vistazo, sin puntuar.">
          Leer todas las tarjetas
        </SectionTitle>
        <div className="space-y-2">
          {decks.map((d) => (
            <Disclosure
              key={d.id}
              summary={
                <span className="font-medium">
                  {d.title} <span className="text-sm font-normal text-muted">({allCards.filter((c) => c.deck === d.id).length})</span>
                </span>
              }
            >
              <ul className="-mx-4 -my-4 divide-y divide-line">
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
            </Disclosure>
          ))}
        </div>
      </section>
    </div>
  );
}
