// Modo guiado del lote completo FX-101: en cada etapa, qué estás haciendo y por qué, en lenguaje sencillo,
// con las lecciones que lo explican. Proceso y equipos ficticios; en planta manda el procedimiento vigente (SOP).
import type { SectionId } from "./engine";

export type Guia = { que: string; porque: string[]; lecciones: { slug: string; titulo: string }[] };

export const GUIADO: Record<SectionId, Guia> = {
  previas: {
    que: "Antes de tocar nada compruebas que el reactor está limpio y en fecha, que la báscula pesa bien y que hay servicios (glicol, vapor, nitrógeno y vacío).",
    porque: [
      "Un reactor sucio o con la limpieza caducada puede contaminar el lote con restos del producto anterior.",
      "Si la báscula no pasa la verificación con la pesa patrón, todas las pesadas del lote serían dudosas: se usa otra y se avisa.",
      "Lo que compruebas se anota en el momento y se firma: es la primera parte de la hoja de producción.",
    ],
    lecciones: [
      { slug: "balanzas-y-pesada", titulo: "Balanzas y pesada" },
      { slug: "buenas-practicas-documentacion", titulo: "Buenas prácticas de documentación" },
    ],
  },
  dispensacion: {
    que: "Eliges el lote de cada materia prima, pesas la cantidad de la hoja y pides que otra persona verifique la pesada.",
    porque: [
      "Solo vale un lote con estado «Aprobado» y dentro de fecha: los que están en cuarentena o caducados no se pueden usar.",
      "La cantidad tiene una tolerancia: fuera de ella, el balance del lote no cuadra y la reacción puede ir mal.",
      "La segunda firma (verificación) es la forma de evitar errores de lote o de peso en un paso crítico.",
    ],
    lecciones: [
      { slug: "balanzas-y-pesada", titulo: "Balanzas y pesada" },
      { slug: "buenas-practicas-documentacion", titulo: "Buenas prácticas de documentación" },
    ],
  },
  carga: {
    que: "Cargas el agua y el sólido en el reactor y lo inertizas con ciclos de vacío y nitrógeno hasta que el oxígeno baja del 2 %.",
    porque: [
      "Con vapores que pueden arder, quitar el oxígeno elimina uno de los tres lados del triángulo del fuego.",
      "Cada ciclo divide el oxígeno: con buen vacío bastan pocos ciclos; con mal vacío, no.",
      "Nunca se abren a la vez la válvula de vacío y la de nitrógeno.",
    ],
    lecciones: [
      { slug: "carga-e-inertizacion", titulo: "Carga e inertización" },
      { slug: "inertizacion-a-fondo", titulo: "Inertización a fondo" },
    ],
  },
  reaccion: {
    que: "Añades el anhídrido poco a poco sin pasar de 40 °C, calientas a 75–85 °C al menos una hora y pides el control en proceso (IPC).",
    porque: [
      "La reacción desprende calor: si añades deprisa, la temperatura se dispara antes de que la camisa la saque.",
      "Si se para el agitador, el reactivo no se mezcla y se acumula: el interlock corta la adición.",
      "El IPC dice si la reacción ha terminado; si no cumple, se prolonga y se repite, no se da por bueno.",
    ],
    lecciones: [
      { slug: "calor-de-reaccion", titulo: "Calor de reacción" },
      { slug: "reactor-a-fondo", titulo: "El reactor a fondo" },
    ],
  },
  filtracion: {
    que: "Pasas la solución caliente por el filtro de cartucho F-301 hacia el cristalizador R-102, vigilando la presión diferencial.",
    porque: [
      "El filtro quita partículas que no deben acabar en el producto.",
      "Si la presión diferencial sube, el cartucho se está colmatando: se cambia según el procedimiento, no se fuerza.",
    ],
    lecciones: [{ slug: "filtros", titulo: "Filtros" }],
  },
  cristalizacion: {
    que: "Enfrías despacio, siembras a 58–62 °C y llevas la suspensión a 0–5 °C.",
    porque: [
      "La semilla hace que cristalice la forma correcta y no otra.",
      "Enfriar deprisa da cristales pequeños y sucios que luego filtran mal y retienen impurezas.",
    ],
    lecciones: [{ slug: "cristalizacion", titulo: "Cristalización" }],
  },
  centrifugacion: {
    que: "Separas los cristales en la centrífuga C-201 y los lavas con agua fría.",
    porque: [
      "El lavado arrastra las aguas madres, que llevan las impurezas disueltas.",
      "El agua debe estar fría: caliente disolvería parte del producto.",
    ],
    lecciones: [{ slug: "centrifuga", titulo: "Centrífuga" }],
  },
  secado: {
    que: "Secas la torta en el secadero de vacío SD-301 con la camisa a 55–60 °C hasta que la pérdida por secado (LOD) cumpla.",
    porque: [
      "El vacío deja evaporar el agua a menos temperatura y así no se degrada el producto.",
      "Se para cuando lo dice el LOD, no cuando parece seco.",
    ],
    lecciones: [{ slug: "secaderos", titulo: "Secaderos" }],
  },
  envasado: {
    que: "Envasas, pesas el producto seco, calculas el rendimiento y cuadras las etiquetas (emitidas, usadas, destruidas y devueltas).",
    porque: [
      "El rendimiento fuera de su rango avisa de pérdidas o errores en el proceso.",
      "La conciliación de etiquetas evita que una etiqueta suelta acabe en el envase equivocado.",
    ],
    lecciones: [{ slug: "envasado-y-etiquetado", titulo: "Envasado y etiquetado" }],
  },
  cierre: {
    que: "Dejas los equipos identificados como sucios y pedida su limpieza, y entregas la hoja para que calidad la revise.",
    porque: [
      "Un equipo vaciado no está limpio: la etiqueta «Sucio» evita que otro turno lo use sin limpiar.",
      "La limpieza también se registra y tiene caducidad: pasado ese tiempo hay que volver a limpiar antes de usarlo.",
      "Calidad revisa la hoja completa: un dato que falta o una firma ausente bloquean la liberación.",
    ],
    lecciones: [
      { slug: "limpieza-de-equipos", titulo: "Limpieza de equipos" },
      { slug: "hoja-de-produccion-a-fondo", titulo: "La hoja de producción a fondo" },
    ],
  },
};
