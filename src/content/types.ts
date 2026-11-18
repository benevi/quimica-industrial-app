export type Term = { es: string; en: string; def: string };

export type ChoiceQuestion = {
  kind: "choice";
  q: string;
  options: string[];
  answer: number; // índice de la opción correcta
  explain: string;
};

export type NumberQuestion = {
  kind: "number";
  q: string;
  answer: number;
  tolerance: number; // margen relativo aceptado (0.02 = 2 %)
  unit: string;
  explain: string;
};

export type Question = ChoiceQuestion | NumberQuestion;

export type Lesson = {
  slug: string;
  level: number;
  order: number;
  title: string;
  titleEn: string;
  minutes: number;
  summary: string;
  /** Idea clave, en Markdown */
  body: string;
  /** Ejemplo de planta, en Markdown */
  plant: string;
  /** ¿Qué verías en la hoja de producción?, en Markdown */
  batchRecord: string;
  terms: Term[];
  quiz: Question[];
};

export type Level = {
  number: number;
  title: string;
  titleEn: string;
  description: string;
};
