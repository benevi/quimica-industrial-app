// Preparación de examen por certificación: formato real verificado, temario oficial desglosado
// (enlazado a lecciones por slug, para que no dependa de la numeración de niveles) y configuración
// de los simulacros. Fuentes citadas en cada bloque.

export type SyllabusTopic = { title: string; lessons: string[] };
export type SyllabusUnit = {
  /** Clave de banco de preguntas y de supuestos prácticos */
  key: string;
  code: string;
  name: string;
  hours?: number;
  topics: SyllabusTopic[];
};

export type Mock = {
  id: string;
  title: string;
  /** Claves de unidad de las que salen las preguntas */
  units: string[];
  questions: number;
  minutes: number;
  /** Fracción para aprobar */
  pass: number;
  /** Escala en que se muestra la nota */
  scale: "0-10" | "%";
  /** Supuestos prácticos que forman parte del simulacro */
  cases?: number;
  /** Peso de cada unidad en el sorteo (por defecto, igual para todas) */
  weights?: Record<string, number>;
  note: string;
};

export type ExamPrep = {
  certId: string;
  title: string;
  format: { label: string; value: string }[];
  formatNote: string;
  sources: { label: string; url: string }[];
  units: SyllabusUnit[];
  mocks: Mock[];
  /** Práctica obligatoria para el indicador de "listo" */
  practice: { label: string; href: string }[];
};

export const preps: ExamPrep[] = [
  {
    certId: "quie0108",
    title: "QUIE0108 · Operaciones básicas en planta química",
    format: [
      { label: "Cómo se evalúa", value: "Una prueba final por módulo, de carácter teórico-práctico, presencial" },
      { label: "Escala", value: "0 a 10; hay que sacar al menos 5 en la prueba final (y en cada unidad formativa)" },
      { label: "Nota del módulo", value: "30 % evaluación continua + 70 % prueba final" },
      { label: "Si suspendes", value: "Segunda convocatoria con una prueba paralela" },
      { label: "Por experiencia", value: "Acreditación de competencias: entrevista, observación en el puesto o simulación práctica" },
    ],
    formatNote:
      "La orden no fija el número de preguntas ni la duración: los decide el centro. Los simulacros de la app usan un formato habitual (test + supuesto práctico) y la misma regla de aprobado: 5 sobre 10.",
    sources: [
      { label: "Orden ESS/1897/2013, arts. 17-20 (BOE)", url: "https://www.boe.es/eli/es/o/2013/10/10/ess1897" },
      { label: "Contenidos oficiales del certificado (Lanbide)", url: "https://web.lanbide.eus/descargas/egailancas/certificados/catalogo/QUIE0108_FIC.pdf" },
    ],
    units: [
      {
        key: "uf0227",
        code: "UF0227",
        name: "Operaciones básicas del proceso, mezclas y disoluciones",
        hours: 70,
        topics: [
          { title: "Elementos, compuestos, tabla periódica y enlace", lessons: ["la-materia", "atomos-y-tabla-periodica", "enlaces-y-polaridad"] },
          { title: "Estequiometría: mol, ecuaciones, reactivo limitante, rendimiento", lessons: ["el-mol", "ecuaciones-y-estequiometria", "reactivo-limitante", "rendimiento-y-balance"] },
          { title: "Equilibrio químico", lessons: ["equilibrio-quimico"] },
          { title: "Disoluciones, concentración, ácido-base y pH", lessons: ["disoluciones", "acidos-bases-ph"] },
          { title: "Química orgánica: carbono y grupos funcionales", lessons: ["carbono-y-formulas", "grupos-funcionales", "disolventes-organicos"] },
          { title: "Magnitudes, unidades, conversiones y errores", lessons: ["matematicas-utiles", "unidades-y-conversiones", "metrologia-calibracion"] },
          { title: "Densidad, presión, viscosidad, presión de vapor y ebullición", lessons: ["densidad", "densidad-viscosidad", "destilacion"] },
        ],
      },
      {
        key: "uf0228",
        code: "UF0228",
        name: "Operaciones unitarias y proceso químico",
        hours: 80,
        topics: [
          { title: "Operaciones continuas, discontinuas y balances de materia", lessons: ["planta-de-api", "solidos-y-balances", "rendimiento-y-balance"] },
          { title: "Extracción, destilación y separación de fases", lessons: ["extraccion-liquido-liquido", "destilacion"] },
          { title: "Cristalización, centrifugación, filtración y secado", lessons: ["cristalizacion", "centrifuga", "filtros", "secaderos"] },
          { title: "Molienda, tamizado, agitación y mezcla", lessons: ["molienda-y-tamizado", "reactor-y-servicios"] },
          { title: "La reacción química: variables, tipos, calor, velocidad y catalizadores", lessons: ["calor-de-reaccion", "velocidad-y-catalisis", "reacciones-en-api", "oxidacion-reduccion"] },
          { title: "Diagramas de bloques, de flujo y P&ID", lessons: ["pid-y-simbologia"] },
        ],
      },
      {
        key: "uf0229",
        code: "UF0229",
        name: "Preparar y acondicionar elementos y máquinas de la planta química",
        hours: 80,
        topics: [
          { title: "Transmisión de calor y mecánica de fluidos", lessons: ["calor-vapor-intercambiadores"] },
          { title: "Interpretación de P&ID e isométricos", lessons: ["pid-y-simbologia"] },
          { title: "Tuberías, accesorios y válvulas (incluidas las de seguridad)", lessons: ["tuberias-y-valvulas", "alarmas-y-enclavamientos"] },
          { title: "Bombas centrífugas y de desplazamiento positivo", lessons: ["bombas"] },
          { title: "Compresores, motores y mantenimiento básico", lessons: ["aire-y-nitrogeno", "mantenimiento-gmp"] },
        ],
      },
      {
        key: "uf0230",
        code: "UF0230",
        name: "Preparar y acondicionar los equipos principales e instalaciones auxiliares",
        hours: 90,
        topics: [
          { title: "Operación de equipos, paradas de emergencia y fallos de servicios", lessons: ["reactor-y-servicios", "alarmas-y-enclavamientos"] },
          { title: "Equipos de separación: columnas, centrífugas, filtros, intercambiadores", lessons: ["destilacion", "centrifuga", "filtros", "calor-vapor-intercambiadores"] },
          { title: "Reactores químicos: tipos, operación y problemas frecuentes", lessons: ["reactor-y-servicios", "carga-e-inertizacion", "calor-de-reaccion"] },
          { title: "Refrigeración, aire comprimido y servicios auxiliares", lessons: ["frio-y-refrigeracion", "aire-y-nitrogeno", "agua-farmaceutica"] },
          { title: "Tanques, válvulas de seguridad, discos de ruptura, vapor y purgadores", lessons: ["tuberias-y-valvulas", "calor-vapor-intercambiadores", "almacenamiento"] },
          { title: "Limpieza de equipos", lessons: ["limpieza-de-equipos"] },
        ],
      },
      {
        key: "uf0231",
        code: "UF0231",
        name: "Toma de muestras y análisis in situ",
        hours: 50,
        topics: [
          { title: "Plan de muestreo, técnicas, conservación y transporte", lessons: ["plan-de-muestreo", "toma-de-muestras", "conservacion-y-custodia"] },
          { title: "Ensayos fisicoquímicos en planta (pH, densidad, agua)", lessons: ["acidos-bases-ph", "densidad-viscosidad", "karl-fischer", "potenciometria-conductimetria"] },
          { title: "Planes de control, registro y tratamiento de resultados", lessons: ["calculo-y-expresion-de-resultados", "especificaciones-y-metodos", "alcoa-plus"] },
        ],
      },
      {
        key: "uf0232",
        code: "UF0232",
        name: "Instrumentación y control en instalaciones de proceso",
        hours: 80,
        topics: [
          { title: "Medida de variables: alcance, error, precisión, transmisores, simbología ISA", lessons: ["medidas-de-proceso", "pid-y-simbologia"] },
          { title: "Instrumentos de temperatura, presión, caudal y nivel", lessons: ["medidas-de-proceso"] },
          { title: "Válvulas de control y elementos finales", lessons: ["lazos-de-control", "tuberias-y-valvulas"] },
          { title: "Lazos de control, todo/nada y PID; DCS, SCADA y PLC", lessons: ["lazos-de-control", "dcs-scada-recetas", "alarmas-y-enclavamientos"] },
        ],
      },
      {
        key: "mf0048",
        code: "MF0048_2",
        name: "Seguridad y medio ambiente en planta química",
        hours: 80,
        topics: [
          { title: "Riesgos, normativa y causas de accidentes", lessons: ["permisos-y-consignacion"] },
          { title: "Contaminantes químicos: etiquetado, FDS y límites de exposición", lessons: ["pictogramas-y-fds", "exposicion-y-contencion"] },
          { title: "Incendios, explosiones y ATEX", lessons: ["incendio-y-atex", "carga-e-inertizacion"] },
          { title: "Planes de emergencia y primeros auxilios", lessons: ["emergencias-y-residuos"] },
          { title: "Equipos de protección individual", lessons: ["epi"] },
          { title: "Evaluación de riesgos (HAZOP) e investigación de accidentes", lessons: ["gestion-de-riesgos", "desviaciones"] },
          { title: "Contaminación ambiental y residuos", lessons: ["emergencias-y-residuos"] },
        ],
      },
    ],
    mocks: [
      { id: "quie-mf0045", title: "Prueba final MF0045_2 (UF0227 + UF0228)", units: ["uf0227", "uf0228"], questions: 30, minutes: 60, pass: 0.5, scale: "0-10", cases: 1, note: "30 preguntas tipo test + 1 supuesto práctico." },
      { id: "quie-mf0046", title: "Prueba final MF0046_2 (UF0229 + UF0230)", units: ["uf0229", "uf0230"], questions: 30, minutes: 60, pass: 0.5, scale: "0-10", cases: 1, note: "30 preguntas tipo test + 1 supuesto práctico." },
      { id: "quie-mf0047", title: "Prueba final MF0047_2 (UF0231 + UF0232)", units: ["uf0231", "uf0232"], questions: 30, minutes: 60, pass: 0.5, scale: "0-10", cases: 1, note: "30 preguntas tipo test + 1 supuesto práctico." },
      { id: "quie-mf0048", title: "Prueba final MF0048_2", units: ["mf0048"], questions: 25, minutes: 50, pass: 0.5, scale: "0-10", cases: 1, note: "25 preguntas tipo test + 1 supuesto práctico." },
    ],
    practice: [
      { label: "Hacer un lote completo en el simulador de planta", href: "/simulador" },
      { label: "Autoevaluación de las 4 unidades de competencia", href: "/autoevaluacion/uc0045" },
    ],
  },
  {
    certId: "upv-gmp",
    title: "Microcredencial GMP + GDP (UPV)",
    format: [
      { label: "Formato", value: "30 h online asíncronas, 3 ECTS" },
      { label: "Metodología", value: "Casos, talleres prácticos, trabajo colaborativo y tutorías" },
      { label: "Evaluación", value: "La UPV no publica el sistema de evaluación en la ficha del curso" },
    ],
    formatNote:
      "El temario de la UPV sigue los capítulos de la Parte I de las GMP europeas (EudraLex vol. 4) más las GDP. La app te prepara con un examen tipo test de 40 preguntas por todo el temario (aprobado: 70 %) y casos prácticos, que es lo que suele pedirse en este tipo de cursos. Al matricularte, consulta las condiciones de evaluación.",
    sources: [
      { label: "Ficha del curso (UPV)", url: "https://www.cfp.upv.es/formacion-permanente/curso/buenas-practicas-fabricacion-gmp-buenas-practicas-distribucion-gdp-industria-farmaceutica_103391.html" },
      { label: "EudraLex vol. 4: GMP de la UE (Comisión Europea)", url: "https://health.ec.europa.eu/medicinal-products/eudralex/eudralex-volume-4_en" },
    ],
    units: [
      { key: "gmp1", code: "Cap. 1", name: "Sistema de calidad farmacéutico", topics: [{ title: "Gestión de calidad, revisión de calidad del producto, gestión de riesgos", lessons: ["gmp-e-ich-q7", "gestion-de-riesgos", "capa-y-control-de-cambios"] }] },
      { key: "gmp2", code: "Cap. 2", name: "Personal", topics: [{ title: "Responsabilidades, formación e higiene", lessons: ["gmp-e-ich-q7", "vestimenta-y-comportamiento"] }] },
      { key: "gmp3", code: "Cap. 3", name: "Locales y equipos", topics: [{ title: "Diseño, contaminación cruzada, cualificación, mantenimiento y calibración", lessons: ["salas-limpias", "hvac-y-presiones", "cualificacion-y-validacion", "mantenimiento-gmp", "limpieza-de-equipos"] }] },
      { key: "gmp4", code: "Cap. 4", name: "Documentación", topics: [{ title: "Buenas prácticas de documentación, registros de lote, integridad de datos", lessons: ["buenas-practicas-documentacion", "alcoa-plus", "audit-trail-y-firma-electronica"] }] },
      { key: "gmp5", code: "Cap. 5", name: "Producción", topics: [{ title: "Materiales, operaciones, contaminación cruzada, validación de procesos", lessons: ["recepcion-y-cuarentena", "carga-e-inertizacion", "cualificacion-y-validacion", "desviaciones"] }] },
      { key: "gmp6", code: "Cap. 6", name: "Control de calidad", topics: [{ title: "Muestreo, ensayos, OOS, estabilidad y liberación", lessons: ["plan-de-muestreo", "especificaciones-y-metodos", "oos-y-oot", "estabilidad", "certificado-de-analisis"] }] },
      { key: "gmp7", code: "Cap. 7", name: "Actividades subcontratadas", topics: [{ title: "Contratos y responsabilidades del contratante y el contratado", lessons: ["gmp-e-ich-q7"] }] },
      { key: "gmp8", code: "Cap. 8", name: "Reclamaciones, defectos de calidad y retiradas", topics: [{ title: "Gestión de reclamaciones y retirada de producto", lessons: ["trazabilidad-y-distribucion", "desviaciones"] }] },
      { key: "gmp9", code: "Cap. 9", name: "Autoinspección", topics: [{ title: "Programa de autoinspecciones y CAPA", lessons: ["capa-y-control-de-cambios"] }] },
      { key: "gdp", code: "GDP", name: "Buenas prácticas de distribución", topics: [{ title: "Almacenamiento, transporte, temperatura y trazabilidad", lessons: ["almacenamiento", "trazabilidad-y-distribucion", "envasado-y-etiquetado"] }] },
    ],
    mocks: [
      { id: "gmp-final", title: "Examen final GMP + GDP", units: ["gmp1", "gmp2", "gmp3", "gmp4", "gmp5", "gmp6", "gmp7", "gmp8", "gmp9", "gdp"], questions: 40, minutes: 50, pass: 0.7, scale: "%", cases: 1, note: "40 preguntas de todo el temario + 1 caso práctico." },
    ],
    practice: [{ label: "Revisar un lote en el simulador de planta (informe de QA)", href: "/simulador" }],
  },
  {
    certId: "sap-pp",
    title: "SAP C_TS422 · Production Planning and Manufacturing",
    format: [
      { label: "Formato", value: "Examen práctico (System Based Assessment): tareas dentro de un sistema SAP real" },
      { label: "Duración", value: "3 horas, en una sola sesión" },
      { label: "Aprobado", value: "64 %" },
      { label: "Idioma", value: "Inglés, a libro abierto, supervisado online" },
      { label: "Pesos", value: "Ejecución de fabricación 60 % · datos maestros 11–20 % · customizing 11–20 % · planificación ≤ 10 %" },
      { label: "Validez", value: "12 meses; se renueva con Stay Certified (requiere Learning Hub)" },
    ],
    formatNote:
      "El examen real se hace en SAP. La app te prepara con teoría en inglés y un examen práctico cronometrado en el simulador ERP con el mismo aprobado (64 %). El customizing (configuración del sistema) no se puede practicar aquí: para eso está el sistema de práctica que incluye la compra del examen.",
    sources: [
      { label: "Ficha oficial C_TS422 (SAP Learning)", url: "https://learning.sap.com/certifications/sap-certified-associate-sap-s-4hana-production-planning-and-manufacturing" },
      { label: "Exámenes prácticos: FAQ (SAP Learning)", url: "https://learning.sap.com/helpcenter/certification-support/system-based-assessments-faq" },
    ],
    units: [
      { key: "sap-md", code: "Master data", name: "Datos maestros de fabricación", topics: [{ title: "Material, lista de materiales, receta maestra, puesto de trabajo, versión de fabricación", lessons: ["erp-y-trazabilidad", "sap-en-planta"] }] },
      { key: "sap-plan", code: "Planning", name: "Planificación: necesidades, MRP y capacidad", topics: [{ title: "Planificación de necesidades, MRP y situación de stock", lessons: ["erp-y-trazabilidad"] }] },
      { key: "sap-exec", code: "Execution", name: "Ejecución de fabricación (60 %)", topics: [{ title: "Orden de proceso: crear, liberar, consumir, notificar, entrada y cierre", lessons: ["erp-y-trazabilidad", "sap-en-planta", "mes-y-ebr", "recepcion-y-cuarentena"] }, { title: "Lotes, stock de calidad y decisión de empleo", lessons: ["certificado-de-analisis", "recepcion-y-cuarentena"] }] },
      { key: "sap-gmp", code: "GMP", name: "SAP en entorno GMP", topics: [{ title: "Audit trail, firma electrónica y validación", lessons: ["audit-trail-y-firma-electronica", "validacion-de-sistemas", "alcoa-plus"] }] },
    ],
    mocks: [
      { id: "sap-teoria", title: "Teoría SAP PP-PI / MM / QM (en inglés y español)", units: ["sap-md", "sap-plan", "sap-exec", "sap-gmp"], questions: 25, minutes: 30, pass: 0.64, scale: "%", weights: { "sap-md": 0.16, "sap-plan": 0.08, "sap-exec": 0.6, "sap-gmp": 0.16 }, note: "25 preguntas de conceptos y transacciones." },
    ],
    practice: [{ label: "Examen práctico cronometrado en el simulador ERP", href: "/sap/examen" }],
  },
];

export function getPrep(certId: string) {
  return preps.find((p) => p.certId === certId);
}
export function getMock(id: string) {
  for (const p of preps) {
    const m = p.mocks.find((x) => x.id === id);
    if (m) return { prep: p, mock: m };
  }
  return undefined;
}
export const allMocks = preps.flatMap((p) => p.mocks.map((m) => ({ prep: p, mock: m })));
