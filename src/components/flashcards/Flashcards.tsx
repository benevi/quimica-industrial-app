"use client";

import { lessons } from "@/content/catalog";
import { termsOfLesson } from "@/content/terms";
import { cards, decks } from "@/content/tarjetas";
import { questionExists } from "@/certs/summary";
import { today } from "@/certs/useCertState";
import { FlashcardsBase } from "./FlashcardsBase";

const vocab = Object.fromEntries(lessons.map((l) => [l.slug, termsOfLesson(l.slug)]));
const countFailsDue = (srs: Record<string, { due: string }>) =>
  Object.entries(srs).filter(([id, c]) => c.due <= today() && questionExists(id)).length;

/** Tarjetas de repaso de la edición completa: todas las tarjetas y los fallos de examen pendientes. */
export function Flashcards() {
  return <FlashcardsBase cards={cards} decks={decks} lessons={lessons} vocab={vocab} countFailsDue={countFailsDue} />;
}
