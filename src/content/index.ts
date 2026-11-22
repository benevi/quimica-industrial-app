import type { Lesson } from "./types";
import { nivel18 } from "./nivel18";
import { nivel19 } from "./nivel19";
import { nivel20 } from "./nivel20";
import { nivel20Alcoa } from "./nivel20-alcoa";
import { nivel21 } from "./nivel21";
import { nivel15 } from "./nivel15";
import { nivel14 } from "./nivel14";
import { nivel13 } from "./nivel13";
import { nivel11 } from "./nivel11";
import { nivel3 } from "./nivel3";
import { nivel10 } from "./nivel10";
import { nivel9 } from "./nivel9";
import { nivel8 } from "./nivel8";
import { nivel7 } from "./nivel7";
import { nivel6 } from "./nivel6";
import { nivel5 } from "./nivel5";
import { nivel4 } from "./nivel4";
import { nivel17 } from "./nivel17";
import { nivel0 } from "./nivel0";
import { nivel1 } from "./nivel1";
import { nivel2 } from "./nivel2";
import { nivel12 } from "./nivel12";
import { nivel16 } from "./nivel16";

export { levels } from "./levels";

export const lessons: Lesson[] = [...nivel0, ...nivel1, ...nivel2, ...nivel12, ...nivel16, ...nivel17, ...nivel19, ...nivel20Alcoa, ...nivel20, ...nivel21, ...nivel4, ...nivel5, ...nivel6, ...nivel7, ...nivel8, ...nivel9, ...nivel10, ...nivel3, ...nivel11, ...nivel13, ...nivel14, ...nivel15, ...nivel18].sort(
  (a, b) => a.level - b.level || a.order - b.order,
);

export function getLesson(slug: string) {
  return lessons.find((l) => l.slug === slug);
}

export function lessonsOfLevel(level: number) {
  return lessons.filter((l) => l.level === level);
}

export function nextLesson(slug: string) {
  const i = lessons.findIndex((l) => l.slug === slug);
  return i >= 0 ? lessons[i + 1] : undefined;
}

export const allTerms = lessons
  .flatMap((l) => l.terms.map((t) => ({ ...t, lesson: l.slug, lessonTitle: l.title })))
  .sort((a, b) => a.es.localeCompare(b.es, "es"));
