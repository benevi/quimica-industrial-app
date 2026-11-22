// Lecciones que se pueden practicar en un simulador: el botón «Practicar» de la lección abre el adecuado
// (y, si tiene sentido, con la incidencia ya elegida). Las rutas y las incidencias se comprueban en check:sim.

export type Practica = { href: string; label: string; detalle: string };

const REACTOR: Practica = { href: "/simulador/reactor", label: "Practicar en el reactor R-204", detalle: "Modelo físico con camisa, cascada de temperatura, interlocks y averías." };
const LOTE = (incidencia?: string, detalle = "El lote completo FX-101, de la pesada al envasado."): Practica => ({
  href: incidencia ? `/simulador?incidencia=${incidencia}` : "/simulador",
  label: incidencia ? "Practicar esta incidencia en el lote completo" : "Practicar en el lote completo",
  detalle,
});
const NUTSCHE: Practica = { href: "/simulador/nutsche", label: "Practicar con el filtro-secador Nutsche", detalle: "Filtrar, lavar, soplar y secar en un solo equipo, con relevo de turno." };
const AUDITORIA: Practica = { href: "/simulador/auditoria", label: "Auditar hojas de producción", detalle: "Encuentra los errores de documentación como lo haría calidad." };
const FDS: Practica = { href: "/fds", label: "Practicar con fichas de seguridad", detalle: "Lee fichas de práctica y responde qué EPI, qué hacer ante un vertido y qué no mezclar." };
const SAP: Practica = { href: "/sap", label: "Practicar en el simulador de ERP", detalle: "Órdenes, movimientos de material, lotes de inspección y decisión de empleo." };

export const practicas: Record<string, Practica[]> = {
  "reactor-y-servicios": [REACTOR, LOTE()],
  "reactor-a-fondo": [REACTOR, LOTE("agitador", "El agitador se para en plena adición.")],
  "agitacion-a-fondo": [REACTOR, LOTE("agitador", "El agitador se para en plena adición.")],
  "destilacion-a-fondo": [REACTOR],
  "cristalizacion-a-fondo": [LOTE()],
  "limpieza-a-fondo": [LOTE(undefined, "Termina el lote: equipos sucios identificados y limpieza pedida."), NUTSCHE],
  "calor-de-reaccion": [REACTOR, LOTE("frio", "Falla el frío de la camisa en plena adición.")],
  "termoquimica-a-fondo": [REACTOR],
  "cinetica-a-fondo": [REACTOR],
  "carga-e-inertizacion": [REACTOR, LOTE("oxigeno", "El vacío no aguanta y el oxígeno no baja del 2 %.")],
  "inertizacion-a-fondo": [REACTOR, LOTE("oxigeno", "El vacío no aguanta y el oxígeno no baja del 2 %.")],
  "alarmas-y-enclavamientos": [REACTOR],
  "alarmas-y-seguridad-a-fondo": [REACTOR],
  "lazos-de-control": [REACTOR],
  "lazos-a-fondo": [REACTOR],
  "frio-y-refrigeracion": [LOTE("frio", "Falla el frío de la camisa en plena adición.")],
  "medidas-de-proceso": [LOTE("bascula", "La báscula no pasa la verificación diaria."), LOTE("sonda", "Las dos sondas de temperatura del reactor no coinciden.")],
  "solidos-a-fondo": [LOTE("tierra", "La pinza de puesta a tierra no da continuidad.")],
  "balanzas-y-pesada": [LOTE("bascula", "La báscula no pasa la verificación diaria.")],
  filtros: [LOTE("filtro", "El cartucho del filtro se colmata."), LOTE("junta", "Gotea una junta del filtro en plena transferencia."), NUTSCHE],
  "filtros-a-fondo": [NUTSCHE],
  cristalizacion: [LOTE()],
  centrifuga: [LOTE("vibracion", "La centrífuga se para por vibración alta.")],
  "centrifuga-a-fondo": [LOTE("vibracion", "La centrífuga se para por vibración alta.")],
  secaderos: [LOTE("vacio", "Se pierde el vacío del secadero."), LOTE("lod", "La pérdida por secado no baja: la torta tiene grumos."), NUTSCHE],
  "secado-a-fondo": [LOTE("vacio", "Se pierde el vacío del secadero."), LOTE("lod", "La pérdida por secado no baja: la torta tiene grumos."), NUTSCHE],
  "buenas-practicas-documentacion": [AUDITORIA, LOTE()],
  "alcoa-plus": [AUDITORIA],
  "alcoa-a-fondo": [AUDITORIA],
  "hoja-de-produccion-a-fondo": [AUDITORIA, LOTE()],
  desviaciones: [LOTE(undefined, "Con incidencias: decide cuándo abrir una desviación."), AUDITORIA],
  "desviaciones-y-capa-a-fondo": [LOTE(undefined, "Con incidencias: decide cuándo abrir una desviación.")],
  "recepcion-y-cuarentena": [LOTE("etiqueta", "La etiqueta de un bidón no coincide con la orden.")],
  "oos-y-oot": [LOTE("ipc", "El control en proceso sale fuera de límite.")],
  "turno-y-factor-humano-a-fondo": [NUTSCHE],
  "pictogramas-y-fds": [FDS],
  "pictogramas-y-fds-a-fondo": [FDS],
  "sap-en-planta": [SAP],
  "erp-y-sap-a-fondo": [SAP],
};
