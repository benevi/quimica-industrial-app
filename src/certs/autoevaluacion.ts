// Unidades de competencia y sus realizaciones profesionales (RP), resumidas de los reales decretos
// de los certificados QUIE0108 (RD 1970/2008) y QUIM0109 (RD 719/2011).
// El procedimiento de acreditación pide un cuestionario de autoevaluación por cada unidad;
// aquí se practica con una escala parecida, pensada para el estudio.

export type CompetencyUnit = {
  id: string;
  code: string;
  name: string;
  cert: string;
  /** Realizaciones profesionales: lo que la norma dice que debes saber hacer */
  items: { rp: string; text: string; levels: number[] }[];
};

export const scale = [
  { value: 1, label: "No sé hacerlo" },
  { value: 2, label: "Lo hago con ayuda" },
  { value: 3, label: "Lo hago sin ayuda" },
  { value: 4, label: "Lo hago sin ayuda y podría enseñarlo" },
] as const;

export const units: CompetencyUnit[] = [
  {
    id: "uc0045",
    code: "UC0045_2",
    name: "Realizar operaciones de proceso químico",
    cert: "QUIE0108",
    items: [
      { rp: "RP1", text: "Mantener equipos, instalaciones y área de trabajo limpios, ordenados y en buen estado.", levels: [12, 16] },
      { rp: "RP2", text: "Mantener el proceso en las condiciones estándar o especificadas (temperatura, presión, caudal, tiempos).", levels: [12, 13] },
      { rp: "RP3", text: "Participar en el arranque y la parada de procesos continuos o discontinuos (por lotes).", levels: [12] },
      { rp: "RP4", text: "Realizar mezclas, disoluciones, separaciones y otras operaciones básicas: reacción, destilación, cristalización, filtración, centrifugación, secado.", levels: [1, 2, 12] },
      { rp: "RP5", text: "Hacer tareas auxiliares de apoyo al proceso, como limpiar filtros o preparar materiales.", levels: [12] },
    ],
  },
  {
    id: "uc0046",
    code: "UC0046_2",
    name: "Preparar y acondicionar máquinas, equipos e instalaciones de planta química",
    cert: "QUIE0108",
    items: [
      { rp: "RP1", text: "Parar y preparar máquinas (bombas, agitadores, centrífugas) para su reparación y volver a ponerlas en servicio según procedimiento.", levels: [11, 14] },
      { rp: "RP2", text: "Parar, vaciar, limpiar y aislar equipos de proceso para una intervención, y reintegrarlos después.", levels: [12, 15] },
      { rp: "RP3", text: "Preparar una sección o área para una intervención (permisos de trabajo, bloqueo y etiquetado LOTO, inertización) y para su puesta en marcha posterior.", levels: [15] },
      { rp: "RP4", text: "Hacer trabajos sencillos de mantenimiento que no requieren especialista (engrase, cambio de juntas, limpieza de filtros).", levels: [14] },
    ],
  },
  {
    id: "uc0047",
    code: "UC0047_2",
    name: "Realizar el control local en planta química",
    cert: "QUIE0108",
    items: [
      { rp: "RP1", text: "Tomar muestras y hacer ensayos sencillos en planta (pH, densidad, aspecto) para verificar la calidad.", levels: [5, 8] },
      { rp: "RP2", text: "Medir variables de proceso con los instrumentos y la frecuencia establecidos, y registrar los datos (ALCOA+).", levels: [13, 16] },
      { rp: "RP3", text: "Ajustar los instrumentos de control local para alcanzar y mantener el régimen de operación.", levels: [13] },
      { rp: "RP4", text: "Vigilar el estado de máquinas e instalaciones e informar de incidencias y cambios.", levels: [13, 16] },
      { rp: "RP5", text: "Controlar el suministro y la reposición de productos y materiales auxiliares.", levels: [18] },
    ],
  },
  {
    id: "uc0048",
    code: "UC0048_2",
    name: "Actuar bajo normas de correcta fabricación, seguridad y medioambientales",
    cert: "QUIE0108",
    items: [
      { rp: "RP1", text: "Operar los equipos cumpliendo las normas de seguridad en todas las fases del trabajo.", levels: [15] },
      { rp: "RP2", text: "Operar cumpliendo las normas medioambientales y vigilando emisiones y residuos.", levels: [15] },
      { rp: "RP3", text: "Elegir y usar correctamente los equipos de protección individual (EPI).", levels: [15] },
      { rp: "RP4", text: "Participar en simulacros y actuar en emergencias según el plan establecido.", levels: [15] },
    ],
  },
  {
    id: "uc0049",
    code: "UC0049_2",
    name: "Dispensar materiales para el proceso de fabricación",
    cert: "QUIM0109",
    items: [
      { rp: "RP1", text: "Preparar los equipos e instalaciones de dispensado para la pesada (limpieza, verificación de balanzas).", levels: [4] },
      { rp: "RP2", text: "Recepcionar y verificar los materiales (identidad, estado aprobado, caducidad).", levels: [16, 18] },
      { rp: "RP3", text: "Pesar los materiales y registrar los valores en la guía de fabricación.", levels: [4, 16] },
      { rp: "RP4", text: "Identificar, etiquetar y disponer los materiales pesados para su traslado.", levels: [18] },
      { rp: "RP5", text: "Almacenar los materiales pesados en las condiciones y lugares establecidos.", levels: [18] },
    ],
  },
  {
    id: "uc0050",
    code: "UC0050_2",
    name: "Preparar equipos e instalaciones y operar servicios auxiliares para el proceso farmacéutico y afines",
    cert: "QUIM0109",
    items: [
      { rp: "RP1", text: "Preparar el área, máquina o equipo para su limpieza o mantenimiento.", levels: [12, 14] },
      { rp: "RP2", text: "Limpiar y, si procede, esterilizar el área, el equipo y los accesorios después de cada operación.", levels: [9, 12] },
      { rp: "RP3", text: "Montar y preparar el área, el equipo y los servicios auxiliares (vapor, agua, nitrógeno, vacío) para fabricar.", levels: [11, 14] },
      { rp: "RP4", text: "Registrar los resultados del trabajo.", levels: [16] },
      { rp: "RP5", text: "Aplicar las normas internas de seguridad y medio ambiente frente al riesgo químico.", levels: [15] },
      { rp: "RP6", text: "Prevenir riesgos personales usando los equipos de protección individual.", levels: [15] },
    ],
  },
  {
    id: "uc0051",
    code: "UC0051_2",
    name: "Fabricar un lote de productos farmacéuticos y afines",
    cert: "QUIM0109",
    items: [
      { rp: "RP1", text: "Hacer las comprobaciones previas al inicio del lote (despeje de línea, estado de limpieza, materiales y documentos correctos).", levels: [16] },
      { rp: "RP2", text: "Cargar los materiales en los equipos, con los cálculos de formulación y las operaciones de mezcla, disolución o separación.", levels: [2, 12] },
      { rp: "RP3", text: "Ejecutar las etapas del proceso y los controles en proceso (IPC).", levels: [12, 13] },
      { rp: "RP4", text: "Comprobar rendimientos, balances de materiales y la documentación del lote.", levels: [2, 16] },
      { rp: "RP5", text: "Aplicar las normas de higiene y seguridad al manejar maquinaria y equipos.", levels: [15] },
      { rp: "RP6", text: "Actuar ante emergencias, incidentes y desviaciones del proceso.", levels: [15, 16] },
    ],
  },
];

export function getUnit(id: string) {
  return units.find((u) => u.id === id);
}
