import { levels, lessonsOfLevel } from "./index";

/**
 * Los niveles se agrupan en 5 bloques para que el temario se lea como una ruta:
 * las bases, el laboratorio, la planta, calidad y salida del producto, y los sistemas informáticos.
 */
export type BlockId = "bases" | "laboratorio" | "planta" | "calidad" | "sistemas";

export type Block = {
  id: BlockId;
  n: number;
  title: string;
  titleEn: string;
  question: string;
  description: string;
  levels: number[];
  /** Dónde practicar lo del bloque */
  practice?: { href: string; label: string }[];
};

export const blocks: Block[] = [
  {
    id: "bases",
    n: 1,
    title: "Las bases",
    titleEn: "Foundations",
    question: "¿Qué es la química y cómo se hacen las cuentas?",
    description: "Matemáticas de planta, átomos, el mol, reacciones y química orgánica. Todo lo demás se apoya aquí.",
    levels: [0, 1, 2, 3],
  },
  {
    id: "laboratorio",
    n: 2,
    title: "El laboratorio de control",
    titleEn: "Quality control lab",
    question: "¿Cómo se sabe si un lote está bien?",
    description: "Pesar, muestrear, analizar e interpretar resultados: de la balanza al certificado de análisis.",
    levels: [4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: "planta",
    n: 3,
    title: "La planta",
    titleEn: "The plant",
    question: "¿Cómo se fabrica un principio activo?",
    description: "Equipos, operaciones, instrumentación, servicios y seguridad: tu día a día como operador.",
    levels: [11, 12, 13, 14, 15],
  },
  {
    id: "calidad",
    n: 4,
    title: "Calidad y salida del producto",
    titleEn: "Quality and release",
    question: "¿Cómo se demuestra que todo se hizo bien?",
    description: "GMP, documentación, desviaciones, validación, almacén y trazabilidad: liberar y entregar el lote.",
    levels: [16, 17],
  },
  {
    id: "sistemas",
    n: 5,
    title: "Sistemas informáticos",
    titleEn: "Computerized systems",
    question: "¿Dónde viven los datos del lote y cómo se demuestra que son fiables?",
    description: "SAP/ERP, LIMS, MES, SCADA, integridad de datos ALCOA+, Part 11, Anexo 11 y validación GAMP 5.",
    levels: [18, 19, 20, 21],
    practice: [{ href: "/sap", label: "Simulador ERP tipo SAP" }],
  },
];

export function blockOfLevel(level: number): Block {
  return blocks.find((b) => b.levels.includes(level))!;
}

export function levelInfo(level: number) {
  return levels.find((l) => l.number === level)!;
}

export function lessonsOfBlock(b: Block) {
  return b.levels.flatMap((n) => lessonsOfLevel(n));
}

export function minutesOfLevel(level: number) {
  return lessonsOfLevel(level).reduce((a, l) => a + l.minutes, 0);
}

/** Color de cada bloque (variables CSS definidas en globals.css). */
export const blockColor: Record<BlockId, { fg: string; soft: string }> = {
  bases: { fg: "var(--b-bases)", soft: "var(--b-bases-soft)" },
  laboratorio: { fg: "var(--b-lab)", soft: "var(--b-lab-soft)" },
  planta: { fg: "var(--b-planta)", soft: "var(--b-planta-soft)" },
  calidad: { fg: "var(--b-calidad)", soft: "var(--b-calidad-soft)" },
  sistemas: { fg: "var(--b-sis)", soft: "var(--b-sis-soft)" },
};
