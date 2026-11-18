// Certificaciones a las que prepara la app y cómo se relacionan con el temario.
// Fuentes: fichas oficiales de los certificados de profesionalidad (RD 1970/2008 y RD 719/2011),
// RD 832/2014 (título de Fabricación de Productos Farmacéuticos), UPV y SAP Learning.
// Ver /mnt/project-files/plan/certificaciones-y-sap.md para la investigación completa.

export type CertModule = {
  /** Identificador estable para URLs, en minúsculas */
  id: string;
  code: string;
  name: string;
  hours?: number;
  /** Niveles del temario que preparan este módulo */
  levels: number[];
  /** Unidad de competencia asociada (para la autoevaluación) */
  uc?: string;
  /** Nota cuando el temario aún no cubre algo del módulo */
  gap?: string;
};

export type Certification = {
  id: string;
  short: string;
  name: string;
  kind: "Certificado de profesionalidad" | "Microcredencial universitaria" | "Título de FP" | "Certificación SAP";
  level?: string;
  hours?: number;
  cost: string;
  how: string;
  source: { label: string; url: string };
  modules: CertModule[];
};

export const certifications: Certification[] = [
  {
    id: "quie0108",
    short: "QUIE0108",
    name: "Operaciones básicas en planta química",
    kind: "Certificado de profesionalidad",
    level: "Nivel 2",
    hours: 610,
    cost: "Gratis por la vía pública (SEPE, servicio de empleo autonómico o FUNDAE)",
    how: "Cursando los módulos en un centro acreditado (hasta 360 h a distancia) o por acreditación de competencias con tu experiencia en planta.",
    source: { label: "Ficha oficial (Lanbide)", url: "https://web.lanbide.eus/descargas/egailancas/certificados/ficha/QUIE0108_FIR.pdf" },
    modules: [
      { id: "mf0045", code: "MF0045_2", name: "Operaciones básicas de proceso químico", hours: 150, levels: [0, 1, 2, 3, 12], uc: "uc0045" },
      { id: "mf0046", code: "MF0046_2", name: "Operaciones de máquinas, equipos e instalaciones de planta química", hours: 170, levels: [11, 12, 14], uc: "uc0046" },
      { id: "mf0047", code: "MF0047_2", name: "Control local en planta química", hours: 130, levels: [5, 8, 13], uc: "uc0047" },
      { id: "mf0048", code: "MF0048_2", name: "Seguridad y medio ambiente en planta química", hours: 80, levels: [15, 16], uc: "uc0048" },
    ],
  },
  {
    id: "quim0109",
    short: "QUIM0109",
    name: "Elaboración de productos farmacéuticos y afines",
    kind: "Certificado de profesionalidad",
    level: "Nivel 2",
    hours: 600,
    cost: "Gratis por la vía pública",
    how: "Cursando los módulos (hasta 250 h a distancia) o por acreditación de competencias cuando tengas 3 años y 2.000 h, o 300 h de formación relacionada.",
    source: { label: "Ficha oficial (Lanbide)", url: "https://web.lanbide.eus/descargas/egailancas/certificados/ficha/QUIM0109_FIR.pdf" },
    modules: [
      { id: "mf0049", code: "MF0049_2", name: "Dispensado de materiales", hours: 180, levels: [4, 16, 17], uc: "uc0049" },
      { id: "mf0050", code: "MF0050_2", name: "Instalaciones, servicios y equipos", hours: 160, levels: [9, 11, 14, 15], uc: "uc0050" },
      { id: "mf0051", code: "MF0051_2", name: "Fabricación de lotes farmacéuticos", hours: 240, levels: [2, 12, 16, 19, 20], uc: "uc0051" },
    ],
  },
  {
    id: "upv-gmp",
    short: "GMP + GDP",
    name: "Buenas Prácticas de Fabricación y de Distribución (UPV)",
    kind: "Microcredencial universitaria",
    hours: 30,
    cost: "282 €, o 84,60 € con el plan MICROCREDS",
    how: "Curso online de la Universitat Politècnica de València, 3 ECTS. Hay que vigilar la próxima edición.",
    source: {
      label: "Página del curso (UPV)",
      url: "https://www.cfp.upv.es/formacion-permanente/curso/buenas-practicas-fabricacion-gmp-buenas-practicas-distribucion-gdp-industria-farmaceutica_103391.html",
    },
    modules: [
      { id: "gmp-sistema", code: "GMP", name: "Sistema de calidad, personal, documentación y producción", levels: [16, 20] },
      { id: "gmp-control", code: "GMP", name: "Control de calidad, reclamaciones y retiradas", levels: [10] },
      { id: "gmp-locales", code: "GMP", name: "Locales, equipos y áreas limpias", levels: [9, 14] },
      { id: "gdp", code: "GDP", name: "Buenas prácticas de distribución y almacén", levels: [17] },
    ],
  },
  {
    id: "fp-farma",
    short: "TS Fabricación farmacéutica",
    name: "Técnico Superior en Fabricación de Productos Farmacéuticos, Biotecnológicos y Afines",
    kind: "Título de FP",
    level: "Grado superior",
    hours: 2000,
    cost: "Gratis o casi en centros públicos a distancia",
    how: "Acceso directo con tu título de Técnico Superior. Convalida los módulos transversales y lo que hayas acreditado.",
    source: { label: "RD 832/2014 (BOE)", url: "https://boe.es/boe/dias/2014/10/25/pdfs/BOE-A-2014-10872.pdf" },
    modules: [
      { id: "fp-organizacion", code: "1387", name: "Organización y gestión de la fabricación de productos farmacéuticos, biotecnológicos y afines", levels: [16, 19, 20, 21] },
      { id: "fp-calidad", code: "1388", name: "Control de calidad de productos farmacéuticos, biotecnológicos y afines", levels: [5, 6, 7, 8, 10] },
      { id: "fp-operaciones", code: "1389", name: "Operaciones básicas en la industria farmacéutica, biotecnológica y afines", levels: [11, 12] },
      { id: "fp-biotecnologia", code: "1390", name: "Principios de biotecnología", levels: [9], gap: "El temario aún no tiene un bloque propio de biotecnología: de momento solo lo cubre en parte la microbiología." },
      { id: "fp-seguridad", code: "1391", name: "Seguridad en la industria farmacéutica, biotecnológica y afines", levels: [15] },
      { id: "fp-areas", code: "1392", name: "Áreas y servicios auxiliares en la industria farmacéutica, biotecnológica y afines", levels: [9, 14] },
      { id: "fp-prod-biotec", code: "1393", name: "Técnicas de producción biotecnológica", levels: [], gap: "Pendiente: el temario se centra en síntesis química de API; la producción biotecnológica (fermentación, purificación) aún no está." },
      { id: "fp-prod-farma", code: "1394", name: "Técnicas de producción farmacéutica y afines", levels: [2, 3, 12] },
      { id: "fp-regulacion", code: "1395", name: "Regulación y control en la industria farmacéutica, biotecnológica y afines", levels: [13] },
      { id: "fp-acondicionamiento", code: "1396", name: "Acondicionamiento y almacenamiento de productos farmacéuticos, biotecnológicos y afines", levels: [17] },
      { id: "fp-mantenimiento", code: "0191", name: "Mantenimiento electromecánico en industrias de proceso", levels: [11, 14] },
    ],
  },
  {
    id: "sap-pp",
    short: "SAP C_TS422",
    name: "SAP Certified – S/4HANA Cloud Private Edition, Production Planning and Manufacturing",
    kind: "Certificación SAP",
    cost: "Formación gratis en learning.sap.com; examen ≈ 240 € (2 intentos)",
    how: "Examen práctico de 3 h dentro de un sistema SAP, en inglés y a libro abierto. Aprobado: 64 %. Caduca a los 12 meses.",
    source: { label: "SAP Learning", url: "https://learning.sap.com/helpcenter/certification-support/certification-program" },
    modules: [
      { id: "sap-erp", code: "Teoría", name: "ERP, trazabilidad y sistemas informáticos GMP", levels: [18, 19, 20, 21] },
      { id: "sap-flujo", code: "Práctica", name: "Flujo de una orden de proceso en el simulador ERP", levels: [] },
    ],
  },
];

export function getCertification(id: string) {
  return certifications.find((c) => c.id === id);
}

export function getModule(moduleId: string) {
  for (const c of certifications) {
    const m = c.modules.find((x) => x.id === moduleId);
    if (m) return { cert: c, module: m };
  }
  return undefined;
}

export const allModules = certifications.flatMap((c) => c.modules.map((m) => ({ cert: c, module: m })));

/** Pasos de la ruta recomendada, con identificador estable para guardar cuáles están hechos */
export const roadmap: { phase: string; when: string; steps: { id: string; text: string }[] }[] = [
  {
    phase: "Fase 0",
    when: "Ya, sin coste",
    steps: [
      { id: "r-guardar-cursos", text: "Guardar los certificados de los cursos internos de la empresa (GMP, seguridad, ATEX)." },
      { id: "r-certificado-funciones", text: "Pedir a Recursos Humanos un certificado de funciones y horas trabajadas." },
      { id: "r-niveles-base", text: "Completar en la app los niveles 0, 1, 16 y la lección de ALCOA+ (nivel 20)." },
    ],
  },
  {
    phase: "Fase 1",
    when: "Meses 1–6",
    steps: [
      { id: "r-upv-gmp", text: "Inscribirse en la microcredencial GMP + GDP de la UPV en cuanto abra la próxima edición." },
      { id: "r-buscar-quie0108", text: "Buscar la próxima edición de QUIE0108 en el servicio de empleo de tu comunidad y preguntar por FUNDAE en la empresa." },
      { id: "r-simulacros-quie", text: "Aprobar en la app los simulacros de los 4 módulos de QUIE0108." },
    ],
  },
  {
    phase: "Fase 2",
    when: "Meses 6–18",
    steps: [
      { id: "r-quie0108", text: "Completar QUIE0108 y pedir la exención de prácticas por experiencia." },
      { id: "r-300h", text: "Llevar la cuenta de horas de formación relacionada hasta llegar a 300 h." },
      { id: "r-sap-journey", text: "Hacer gratis la ruta de aprendizaje de PP en learning.sap.com y todas las misiones del simulador ERP." },
    ],
  },
  {
    phase: "Fase 3",
    when: "Meses 18–36",
    steps: [
      { id: "r-acreditacion", text: "Pedir la acreditación de competencias de QUIM0109 con la autoevaluación de la app hecha." },
      { id: "r-sap-examen", text: "Si te compensa: examen SAP C_TS422." },
    ],
  },
  {
    phase: "Fase 4",
    when: "Desde el curso 2027-28 (puedes adelantarlo)",
    steps: [
      { id: "r-fp-superior", text: "Matricularte a distancia en el Técnico Superior en Fabricación de Productos Farmacéuticos y pedir las convalidaciones." },
      { id: "r-eca", text: "Más adelante: un certificado de ECA (Computer Validation, Data Integrity o API Production) si lo financia la empresa." },
    ],
  },
];
