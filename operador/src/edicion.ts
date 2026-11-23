import type { IconName } from "@/components/icons";
import type { ImageId } from "@/content/media";

/**
 * Edición de operador: índice de la formación por etapas del proceso de planta.
 * No tiene lecciones propias: usa las del temario (src/content) con los ajustes de texto de ./ajustes.ts.
 * Lo comprueba `npm run check:operador`: lecciones que existen, enlaces dentro de la edición, imágenes con licencia libre
 * y nada de simuladores, SAP, certificaciones, PhET ni vídeos.
 */
export type Etapa = {
  id: string;
  /** Nombre corto para el menú y las migas. */
  corto: string;
  title: string;
  titleEn: string;
  icon: IconName;
  /** Una frase para el índice. */
  resumen: string;
  /** Dónde encaja en el proceso (Markdown). */
  proceso: string;
  /** Qué haces tú en esta etapa. */
  haces: string[];
  /** Qué registras en la hoja de producción. */
  hoja: string[];
  /** Fotos o esquemas de la etapa (de src/content/media.ts, con licencia libre). */
  images: ImageId[];
  /** Lecciones básicas, en orden. */
  lecciones: string[];
  /** Lecciones «a fondo» para ampliar, fuera del recorrido básico. */
  ampliacion?: string[];
};

export const NOMBRE = "Formación de operadores de planta de API";
export const NOMBRE_CORTO = "Formación de operadores";
export const NOMBRE_EN = "API plant operator training";

export const etapas: Etapa[] = [
  {
    id: "bienvenida",
    corto: "Bienvenida",
    title: "Bienvenida: la planta y cómo estudiar",
    titleEn: "Welcome: the plant and how to study",
    icon: "factory",
    resumen: "Qué es la química, cómo es una planta de principios activos y cómo leer lo que verás escrito.",
    proceso:
      "Una planta de principios activos (*API*, *Active Pharmaceutical Ingredient*) fabrica **por lotes**: cada lote recorre reactores, equipos de separación y secaderos siguiendo una **hoja de producción** (*batch record*) aprobada. Esta etapa te da el mapa antes de entrar.",
    haces: [
      "Conocer las zonas de la planta y el recorrido de un lote, de la entrada de materiales al producto envasado.",
      "Saber qué se espera de ti: seguir el procedimiento, registrar en el momento y avisar de lo que no cuadra.",
      "Aprender a leer los símbolos y los números que verás en la hoja.",
    ],
    hoja: [
      "Cómo es una línea de la hoja: paso, instrucción, límite, valor y firma.",
      "Qué quieren decir «60 ± 5 °C» o «pH ≥ 7,0».",
    ],
    images: ["planta-reactores", "reactores-encamisados"],
    lecciones: ["empieza-aqui", "planta-de-api"],
  },
  {
    id: "seguridad",
    corto: "Seguridad",
    title: "Seguridad antes de entrar",
    titleEn: "Safety first",
    icon: "shield",
    resumen: "Etiquetas y fichas de seguridad, EPI, incendio y ATEX, exposición, permisos de trabajo y emergencias.",
    proceso:
      "Va antes que todo lo demás. Los **disolventes inflamables**, los **productos activos en polvo** y los **equipos con energía** (presión, vapor, electricidad, piezas que giran) están en todas las etapas del proceso.",
    haces: [
      "Leer la etiqueta y la ficha de datos de seguridad (*FDS*) de lo que vas a manipular.",
      "Elegir y usar los equipos de protección individual (*EPI*) que pide cada tarea.",
      "Trabajar en zonas con atmósfera explosiva (*ATEX*) sin fuentes de ignición y con la puesta a tierra conectada.",
      "Pedir el permiso de trabajo y respetar la consignación de un equipo.",
      "Saber qué hacer ante un vertido, una alarma o una persona herida.",
    ],
    hoja: [
      "Las comprobaciones de seguridad previas a una operación, con su firma.",
      "Los EPI que pide cada paso.",
      "El permiso de trabajo o la consignación cuando se interviene un equipo.",
    ],
    images: ["emergencia-equipos", "consignacion-loto"],
    lecciones: ["pictogramas-y-fds", "epi", "incendio-y-atex", "exposicion-y-contencion", "permisos-y-consignacion", "emergencias-y-residuos"],
  },
  {
    id: "gmp",
    corto: "GMP y hoja de producción",
    title: "GMP y hoja de producción",
    titleEn: "GMP and the batch record",
    icon: "doc",
    resumen: "Las normas de correcta fabricación, ALCOA+, cómo se rellena la hoja, las desviaciones y el relevo de turno.",
    proceso:
      "Acompaña a todo el lote. Las normas de correcta fabricación (*GMP*, *Good Manufacturing Practice*) y la guía ICH Q7 piden que cada paso se haga como está aprobado y que quede registrado. La **hoja de producción** es donde lo demuestras.",
    haces: [
      "Seguir la hoja paso a paso, sin adelantarte ni cambiar el orden.",
      "Anotar cada dato en el momento y tal como lo da el instrumento, según los principios ALCOA+.",
      "Corregir un error sin tapar lo escrito: una línea que deje leer el dato original, firma, fecha y, si hace falta, el motivo.",
      "Avisar enseguida de lo que no cuadre, para que se valore si es una desviación.",
      "Pasar el relevo con el estado real de cada equipo y de cada lote.",
    ],
    hoja: [
      "La firma de quien hace cada paso y la de quien verifica los pasos críticos.",
      "Pesadas, temperaturas, tiempos y lecturas, con su unidad.",
      "La referencia de cualquier desviación abierta durante el lote.",
    ],
    images: ["planta-bidones-api", "sala-control"],
    lecciones: ["gmp-e-ich-q7", "alcoa-plus", "buenas-practicas-documentacion", "hoja-de-produccion-a-fondo", "desviaciones", "turno-y-factor-humano-a-fondo"],
  },
  {
    id: "quimica",
    corto: "Química y cuentas",
    title: "La química justa y las cuentas de la hoja",
    titleEn: "Just enough chemistry and shop-floor math",
    icon: "calc",
    resumen: "Materia, unidades, densidad, el mol, disoluciones, pH, ecuaciones, rendimiento y disolventes.",
    proceso:
      "Es la base para entender por qué la hoja pide lo que pide: cuánto se carga, en qué orden y qué rendimiento se espera. No vas a inventar reacciones, pero sí a hacer y comprobar estas cuentas en cada lote.",
    haces: [
      "Pasar de litros a kilos con la densidad, y de kilos a moles.",
      "Entender qué es una disolución, su concentración y el pH.",
      "Leer una ecuación química y calcular cuánto producto debería salir.",
      "Calcular el rendimiento de un lote y comprobar que cuadra el balance de materia.",
      "Reconocer los disolventes habituales y por qué se controlan sus restos en el producto.",
    ],
    hoja: [
      "Las cantidades a cargar, en kilos o litros, y sus equivalentes.",
      "El cálculo del rendimiento al final de la etapa, verificado por otra persona.",
      "Los valores de pH o de concentración medidos en proceso.",
    ],
    images: ["tabla-periodica", "densimetro"],
    lecciones: [
      "la-materia",
      "matematicas-utiles",
      "unidades-y-conversiones",
      "densidad",
      "atomos-y-tabla-periodica",
      "el-mol",
      "disoluciones",
      "acidos-bases-ph",
      "ecuaciones-y-estequiometria",
      "rendimiento-y-balance",
      "disolventes-organicos",
    ],
  },
  {
    id: "materiales",
    corto: "Materiales",
    title: "Materiales que entran y cómo se mueven",
    titleEn: "Incoming materials and transfers",
    icon: "box",
    resumen: "Recepción y cuarentena, manejo de sólidos, tuberías, válvulas y bombas.",
    proceso:
      "Antes del reactor. Las materias primas se reciben y quedan en **cuarentena** hasta que calidad las aprueba. Después se pesan y llegan a planta por tubería, con bomba, o en sacos y bidones.",
    haces: [
      "Comprobar la etiqueta y el estado de calidad de cada material antes de usarlo.",
      "Pesar en la báscula verificada y manejar los sólidos en polvo sin exponerte ni levantar polvo.",
      "Identificar tuberías y válvulas y alinear una línea según el procedimiento.",
      "Arrancar y vigilar una bomba sin dejar que trabaje en seco.",
    ],
    hoja: [
      "El código y el lote de cada material, su estado de aprobado y la cantidad pesada.",
      "La báscula usada y su verificación.",
      "La alineación de válvulas comprobada antes de un trasvase.",
    ],
    images: ["bomba-bidon", "valvula-bola"],
    lecciones: ["recepcion-y-cuarentena", "solidos-y-balances", "tuberias-y-valvulas", "bombas"],
  },
  {
    id: "reactores",
    corto: "Reactores",
    title: "Reactores",
    titleEn: "Reactors",
    icon: "reactor",
    resumen: "El reactor y sus servicios, carga e inertización, calor de reacción, extracción, destilación y cristalización.",
    proceso:
      "Es el corazón del proceso. En el reactor se cargan disolventes y reactivos, se **inertiza** con nitrógeno, se calienta o enfría por la **camisa** (*jacket*) y ocurre la reacción. Muchas veces se hacen ahí también la extracción, la destilación y la cristalización.",
    haces: [
      "Comprobar el reactor antes de usarlo: limpio, con su etiqueta de estado y las válvulas en su posición.",
      "Inertizar con nitrógeno hasta el oxígeno que pide la hoja y cargar los materiales en el orden indicado.",
      "Vigilar la temperatura, la presión y la agitación durante la reacción, sobre todo en una adición que desprende calor.",
      "Separar fases, destilar y cristalizar con las consignas de la hoja.",
    ],
    hoja: [
      "Los ciclos de inertización y el oxígeno medido.",
      "La hora de inicio y de fin de cada carga y adición, con la temperatura máxima alcanzada.",
      "Los tiempos de reacción y las muestras en proceso con su resultado.",
    ],
    images: ["reactor-agitado-esquema", "reactor-vidriado-corte"],
    lecciones: ["reactor-y-servicios", "carga-e-inertizacion", "calor-de-reaccion", "extraccion-liquido-liquido", "destilacion", "cristalizacion"],
    ampliacion: ["reactor-a-fondo", "inertizacion-a-fondo"],
  },
  {
    id: "filtros",
    corto: "Filtros",
    title: "Filtros",
    titleEn: "Filters",
    icon: "hexagon",
    resumen: "El filtro Nutsche y el filtro-secador agitado: filtrar, lavar la torta, soplar y descargar.",
    proceso:
      "Después de la cristalización, la **suspensión** pasa al filtro para separar el sólido (el producto) del líquido (las **aguas madres**, *mother liquor*). En un filtro Nutsche o en un filtro-secador agitado se filtra y se lava la **torta** (*cake*); en el filtro-secador, además, se seca.",
    haces: [
      "Comprobar la tela o la malla y las juntas antes de cargar.",
      "Transferir la suspensión y filtrar con presión de nitrógeno o con vacío.",
      "Lavar la torta con el disolvente y la cantidad que pide la hoja.",
      "Soplar con nitrógeno y descargar el sólido de forma segura.",
    ],
    hoja: [
      "La presión o el vacío aplicado y las horas de inicio y fin de la filtración.",
      "La cantidad de aguas madres y de cada lavado.",
      "El aspecto del filtrado y cualquier incidencia, como una junta que gotea.",
    ],
    images: ["nutsche-encamisado", "filtro-secador-anfd-2"],
    lecciones: ["filtros"],
    ampliacion: ["filtros-a-fondo"],
  },
  {
    id: "centrifugas",
    corto: "Centrífugas",
    title: "Centrífugas",
    titleEn: "Centrifuges",
    icon: "wave",
    resumen: "La centrífuga de cesta: fuerza centrífuga, ciclo completo, inertización y qué hacer si vibra.",
    proceso:
      "Es la otra forma de separar el sólido del líquido. La **cesta** perforada, forrada con la tela filtrante, gira deprisa: el líquido atraviesa la torta y la tela, y el sólido se queda dentro.",
    haces: [
      "Comprobar la tela, la puesta a tierra y que el equipo esté inertizado antes de arrancar.",
      "Alimentar la suspensión al caudal de la hoja, para que la torta quede repartida y la cesta no se desequilibre.",
      "Escurrir, lavar y centrifugar a las velocidades y tiempos de la hoja.",
      "Si salta la alarma de vibración, no rearmar: avisar y seguir el procedimiento.",
    ],
    hoja: [
      "El oxígeno medido antes de arrancar, con la hora.",
      "La velocidad y el tiempo de cada fase, y la cantidad de lavado.",
      "Las alarmas y paradas, con hora, fase y qué se hizo.",
    ],
    images: ["cesta-centrifuga", "centrifugas-cesta-historicas"],
    lecciones: ["centrifuga"],
    ampliacion: ["centrifuga-a-fondo"],
  },
  {
    id: "secaderos",
    corto: "Secaderos",
    title: "Secaderos y salida del producto",
    titleEn: "Dryers and final product",
    icon: "thermo",
    resumen: "Secaderos y curva de secado, molienda y tamizado, envasado y etiquetado.",
    proceso:
      "La torta húmeda pasa al **secadero**, que le quita el disolvente con calor y, casi siempre, con vacío. Después el producto puede molerse o tamizarse, y se envasa y etiqueta antes de salir de la planta.",
    haces: [
      "Cargar el secadero y fijar la temperatura de la camisa y el vacío que pide la hoja.",
      "Seguir el secado: temperatura del producto, vacío y tiempo.",
      "Tomar la muestra para la pérdida por secado (*LOD*, *loss on drying*) cuando lo pida la hoja: el laboratorio dice si el producto está seco.",
      "Moler o tamizar, envasar y etiquetar sin mezclar lotes.",
    ],
    hoja: [
      "La temperatura de la camisa y del producto, el vacío y las horas de secado.",
      "El resultado de la pérdida por secado frente a su límite.",
      "Los pesos envasados, el número de envases y sus etiquetas.",
    ],
    images: ["filtro-secador-anfd", "tamices"],
    lecciones: ["secaderos", "molienda-y-tamizado", "envasado-y-etiquetado"],
    ampliacion: ["secado-a-fondo"],
  },
  {
    id: "servicios",
    corto: "Servicios",
    title: "Servicios de planta",
    titleEn: "Plant utilities",
    icon: "pipe",
    resumen: "Vapor e intercambiadores, frío, aire comprimido, nitrógeno y vacío, agua farmacéutica y aire de las salas.",
    proceso:
      "No forman parte del producto, pero sin ellos no funciona ningún equipo: **vapor** para calentar, **agua fría** y **agua glicolada o salmuera** para enfriar, **nitrógeno** para inertizar, **aire comprimido** para mover las válvulas, **vacío**, **agua purificada** y el aire tratado de las salas (*HVAC*).",
    haces: [
      "Saber qué servicio llega a cada equipo y cómo lo ves en el panel.",
      "Reconocer un fallo de servicio, como la falta de frío, de nitrógeno o de aire, y avisar.",
      "Respetar las diferencias de presión entre salas y no dejar abiertas las puertas que deben estar cerradas.",
    ],
    hoja: [
      "La comprobación de que los servicios están disponibles antes de empezar.",
      "Las temperaturas de entrada y salida de la camisa, cuando la hoja las pide.",
      "El tipo de agua usada y su punto de toma.",
    ],
    images: ["intercambiador-carcasa-tubos", "purgador-vapor"],
    lecciones: ["calor-vapor-intercambiadores", "frio-y-refrigeracion", "aire-y-nitrogeno", "agua-farmaceutica", "hvac-y-presiones"],
  },
  {
    id: "control",
    corto: "Panel de control",
    title: "El panel de control",
    titleEn: "The control panel",
    icon: "gauge",
    resumen: "Medidas de proceso, diagramas P&ID, lazos de control, DCS y SCADA, alarmas y enclavamientos.",
    proceso:
      "Todos los equipos anteriores se vigilan y se manejan desde el **sistema de control**. Ahí ves temperaturas, presiones, niveles y caudales, cambias consignas y recibes las alarmas.",
    haces: [
      "Leer los instrumentos y saber cuándo fiarte de una medida.",
      "Seguir una línea y un lazo de control en un diagrama P&ID.",
      "Distinguir el modo manual del automático y cambiar una consigna solo cuando la hoja lo permite.",
      "Atender las alarmas por su prioridad y no anular nunca un enclavamiento.",
    ],
    hoja: [
      "Los valores leídos en el panel, con la hora.",
      "El paso de la receta en el que está el lote.",
      "Las alarmas que han saltado y qué se hizo.",
    ],
    images: ["sala-control-operadores", "manometro"],
    lecciones: ["medidas-de-proceso", "pid-y-simbologia", "lazos-de-control", "dcs-scada-recetas", "alarmas-y-enclavamientos"],
  },
  {
    id: "calidad",
    corto: "Calidad en el turno",
    title: "Calidad, limpieza y mantenimiento en el turno",
    titleEn: "Quality, cleaning and maintenance on shift",
    icon: "sample",
    resumen: "Toma de muestras en proceso, impurezas, limpieza de equipos y mantenimiento en entorno GMP.",
    proceso:
      "Cierra el ciclo: las **muestras en proceso** dicen si el lote sigue adelante, las **impurezas** se mantienen bajo control, la **limpieza** entre lotes evita contaminar el siguiente y el **mantenimiento** devuelve el equipo listo para fabricar.",
    haces: [
      "Tomar una muestra con el recipiente, la cantidad y la identificación correctos.",
      "Entender por qué el laboratorio puede retener un lote por una impureza.",
      "Limpiar un equipo según su procedimiento y dejarlo identificado como limpio.",
      "Entregar un equipo a mantenimiento y recibirlo de vuelta con su documentación.",
    ],
    hoja: [
      "La hora, el punto de muestreo y la etiqueta de cada muestra.",
      "El registro de limpieza del equipo y su estado.",
      "La recepción del equipo tras el mantenimiento, apto para usar.",
    ],
    images: ["reactor-vidriado-interior", "estacion-consignacion"],
    lecciones: ["toma-de-muestras", "impurezas-ich", "limpieza-de-equipos", "mantenimiento-gmp"],
  },
];

/** Recorrido básico, en orden: lo que cuenta para el progreso de la formación. */
export const recorrido = etapas.flatMap((e) => e.lecciones);
/** Todas las lecciones de la edición, también las de ampliación. */
export const todasLasLecciones = etapas.flatMap((e) => [...e.lecciones, ...(e.ampliacion ?? [])]);

export const getEtapa = (id: string) => etapas.find((e) => e.id === id);

/** Etapa de una lección y si es de ampliación. */
export function etapaDe(slug: string) {
  for (const [i, e] of etapas.entries()) {
    if (e.lecciones.includes(slug)) return { etapa: e, n: i + 1, ampliacion: false };
    if (e.ampliacion?.includes(slug)) return { etapa: e, n: i + 1, ampliacion: true };
  }
  return undefined;
}
