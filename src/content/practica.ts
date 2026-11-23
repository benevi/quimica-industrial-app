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
const SAP: Practica = { href: "/sap", label: "Practicar en el simulador de ERP", detalle: "Órdenes, movimientos de material, lotes de inspección y decisión de empleo." };

export const practicas: Record<string, Practica[]> = {
  "reactor-y-servicios": [REACTOR, LOTE()],
  "reactor-a-fondo": [REACTOR],
  "calor-de-reaccion": [REACTOR, LOTE("frio", "Falla el frío de la camisa en plena adición.")],
  "termoquimica-a-fondo": [REACTOR],
  "cinetica-a-fondo": [REACTOR],
  "carga-e-inertizacion": [REACTOR, LOTE()],
  "inertizacion-a-fondo": [REACTOR],
  "alarmas-y-enclavamientos": [REACTOR],
  "alarmas-y-seguridad-a-fondo": [REACTOR],
  "lazos-de-control": [REACTOR],
  "lazos-a-fondo": [REACTOR],
  "frio-y-refrigeracion": [LOTE("frio", "Falla el frío de la camisa en plena adición.")],
  "medidas-de-proceso": [LOTE("bascula", "La báscula no pasa la verificación diaria.")],
  "balanzas-y-pesada": [LOTE("bascula", "La báscula no pasa la verificación diaria.")],
  filtros: [LOTE("filtro", "El cartucho del filtro se colmata."), NUTSCHE],
  "filtros-a-fondo": [NUTSCHE],
  cristalizacion: [LOTE()],
  centrifuga: [LOTE()],
  "centrifuga-a-fondo": [LOTE()],
  secaderos: [LOTE("vacio", "Se pierde el vacío del secadero."), NUTSCHE],
  "secado-a-fondo": [LOTE("vacio", "Se pierde el vacío del secadero."), NUTSCHE],
  "buenas-practicas-documentacion": [AUDITORIA, LOTE()],
  "alcoa-plus": [AUDITORIA],
  "alcoa-a-fondo": [AUDITORIA],
  "hoja-de-produccion-a-fondo": [AUDITORIA, LOTE()],
  desviaciones: [LOTE(undefined, "Con incidencias: decide cuándo abrir una desviación."), AUDITORIA],
  "desviaciones-y-capa-a-fondo": [LOTE(undefined, "Con incidencias: decide cuándo abrir una desviación.")],
  "sap-en-planta": [SAP],
  "erp-y-sap-a-fondo": [SAP],
};
