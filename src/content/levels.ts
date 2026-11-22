import type { Level } from "./types";

// Niveles del temario. Archivo aparte para que las páginas del navegador no carguen el texto de las lecciones.
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
  { number: 17, title: "Acondicionamiento y almacén", titleEn: "Packaging and warehouse", description: "Envasado, etiquetado, almacenamiento y trazabilidad." },
  { number: 18, title: "Arquitectura de sistemas", titleEn: "Plant IT/OT architecture", description: "El mapa ISA-95, datos maestros, bases de datos, interfaces y ciberseguridad industrial." },
  { number: 19, title: "LIMS, MES, SCADA y ERP", titleEn: "LIMS, MES, SCADA and ERP", description: "Los sistemas del día a día: laboratorio, hoja electrónica, datos de proceso y SAP." },
  { number: 20, title: "Integridad de datos y registros electrónicos", titleEn: "Data integrity and electronic records", description: "ALCOA+, 21 CFR Part 11, Anexo 11, audit trail, firma electrónica, accesos y copias." },
  { number: 21, title: "Validación de sistemas informatizados", titleEn: "Computerized system validation", description: "GAMP 5, del URS al informe, CSA, control de cambios y revisión periódica." },
];
