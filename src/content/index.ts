import type { Lesson, Level } from "./types";
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

export const levels: Level[] = [
  { number: 0, title: "Arranque", titleEn: "Getting started", description: "Matemáticas, unidades y cómo es una planta de API." },
  { number: 1, title: "Fundamentos de química", titleEn: "Chemistry fundamentals", description: "Materia, átomos, enlaces, el mol, disoluciones y pH." },
  { number: 2, title: "Reacciones químicas", titleEn: "Chemical reactions", description: "Estequiometría, rendimiento, calor, velocidad, equilibrio y redox." },
  { number: 3, title: "Química orgánica", titleEn: "Organic chemistry", description: "Fórmulas, grupos funcionales, disolventes, quiralidad, polimorfismo e impurezas." },
  { number: 4, title: "El laboratorio", titleEn: "The laboratory", description: "Material, pesada, metrología, reactivos y buenas prácticas de laboratorio." },
  { number: 5, title: "Muestreo y preparación de muestras", titleEn: "Sampling and sample preparation", description: "Planes de muestreo, toma de muestras y cadena de custodia." },
  { number: 6, title: "Análisis químico clásico", titleEn: "Wet chemistry", description: "Volumetrías, gravimetría, Karl Fischer y cálculo de resultados." },
  { number: 7, title: "Análisis instrumental", titleEn: "Instrumental analysis", description: "UV-Vis, IR, HPLC, GC, potenciometría y otras técnicas." },
  { number: 8, title: "Ensayos físicos y fisicoquímicos", titleEn: "Physical and physicochemical tests", description: "Punto de fusión, densidad, viscosidad, tamaño de partícula, LOD." },
  { number: 9, title: "Microbiología y áreas limpias", titleEn: "Microbiology and clean rooms", description: "Contaminación microbiana, endotoxinas, salas limpias y vestimenta." },
  { number: 10, title: "Calidad analítica", titleEn: "Analytical quality", description: "Especificaciones, validación de métodos, OOS, estabilidad y certificados." },
  { number: 11, title: "Fluidos, sólidos y energía", titleEn: "Fluids, solids and energy", description: "Tuberías, bombas, válvulas, vapor, intercambiadores y frío." },
  { number: 12, title: "Operaciones de planta", titleEn: "Unit operations", description: "Reactores, carga e inertización, separación, centrífugas, filtros y secaderos." },
  { number: 13, title: "Instrumentación y control", titleEn: "Instrumentation and process control", description: "Medidas, P&ID, lazos PID, DCS/SCADA, alarmas y enclavamientos." },
  { number: 14, title: "Mantenimiento y servicios auxiliares", titleEn: "Maintenance and utilities", description: "Mantenimiento, agua purificada, aire, nitrógeno y HVAC." },
  { number: 15, title: "Seguridad y medio ambiente", titleEn: "Safety and environment (EHS)", description: "Pictogramas, FDS, EPI, ATEX, contención, permisos y residuos." },
  { number: 16, title: "GMP y calidad", titleEn: "GMP and quality", description: "ICH Q7, ALCOA+, documentación, desviaciones, CAPA, cambios y validación." },
  { number: 17, title: "Sistemas informáticos", titleEn: "Computerized systems", description: "LIMS, MES, ERP, audit trail, firma electrónica y validación GAMP 5." },
  { number: 18, title: "Acondicionamiento y almacén", titleEn: "Packaging and warehouse", description: "Envasado, etiquetado, almacenamiento y trazabilidad." },
];

export const lessons: Lesson[] = [...nivel0, ...nivel1, ...nivel2, ...nivel12, ...nivel16, ...nivel17, ...nivel4, ...nivel5, ...nivel6, ...nivel7, ...nivel8, ...nivel9, ...nivel10, ...nivel3, ...nivel11, ...nivel13, ...nivel14, ...nivel15].sort(
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
