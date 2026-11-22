// Misiones de los simuladores de planta para preparar las certificaciones (plan del simulador, apartado 3.7).
// Aquí solo va lo que se muestra: el título, qué hay que hacer y dónde. Cómo se comprueba cada una está en
// `src/sim/misiones.ts`, para que las páginas de certificaciones no carguen los motores de los simuladores.
// Las ids son estables (se guardan en el estado de certificaciones): no renombrar; añadir con id nueva.

export type MisionPlanta = {
  id: string;
  titulo: string;
  /** Qué tienes que conseguir, en una frase. */
  reto: string;
  /** Para qué te prepara en el examen o en el puesto. */
  porque: string;
  href: string;
  simulador: "Lote completo" | "Reactor R-204" | "Nutsche" | "Auditoría";
  /** Certificaciones en las que cuenta (certId de `prep.ts`). */
  certs: string[];
};

const QUIE = "quie0108";
const GMP = "upv-gmp";

export const MISIONES_PLANTA: MisionPlanta[] = [
  {
    id: "pl-lote-guiado",
    titulo: "Primer lote, paso a paso",
    reto: "Termina un lote FX-101 en modo guiado, de las verificaciones previas a la limpieza.",
    porque: "Recorres la secuencia completa de una fabricación por lotes: lo que en el examen se pregunta como orden de operaciones.",
    href: "/simulador?modo=guiado",
    simulador: "Lote completo",
    certs: [QUIE],
  },
  {
    id: "pl-lote-liberable",
    titulo: "Un lote que calidad libera",
    reto: "Cierra un lote sin modo guiado que salga liberable y sin hallazgos críticos ni mayores.",
    porque: "Demuestra que sigues la hoja de producción y registras cada dato como pide ALCOA+.",
    href: "/simulador",
    simulador: "Lote completo",
    certs: [QUIE, GMP],
  },
  {
    id: "pl-lote-incidencias",
    titulo: "Incidencias sin riesgos",
    reto: "Cierra un lote con dos o más incidencias sin ningún hallazgo de seguridad ni crítico.",
    porque: "Ante un fallo se para en seguro, se avisa y se documenta: es lo que se evalúa en los supuestos prácticos.",
    href: "/simulador",
    simulador: "Lote completo",
    certs: [QUIE, GMP],
  },
  {
    id: "pl-lote-turno-duro",
    titulo: "Turno complicado",
    reto: "Cierra un lote con cuatro o más incidencias y una nota de 90 o más en la revisión de QA.",
    porque: "Varias cosas a la vez, como en un turno real: priorizar la seguridad y no dejar nada sin registrar.",
    href: "/simulador",
    simulador: "Lote completo",
    certs: [QUIE],
  },
  {
    id: "pl-r204-conforme",
    titulo: "Reactor conforme",
    reto: "Haz y descarga un lote del reactor R-204 sin hallazgos críticos ni mayores en la revisión de calidad.",
    porque: "Inertizar, cargar, dosificar con la camisa en control y llevar a reflujo: el núcleo del trabajo con reactores.",
    href: "/simulador/reactor",
    simulador: "Reactor R-204",
    certs: [QUIE],
  },
  {
    id: "pl-r204-turno",
    titulo: "Turno real en el reactor",
    reto: "En el modo «Turno real», responde bien a todas las averías que salgan y descarga el lote sin hallazgos críticos.",
    porque: "Reconocer una avería por sus síntomas y actuar a tiempo es lo que más pesa en el puesto de operador.",
    href: "/simulador/reactor",
    simulador: "Reactor R-204",
    certs: [QUIE],
  },
  {
    id: "pl-nutsche",
    titulo: "Filtro-secador conforme",
    reto: "Cierra un lote del Nutsche FD-401 con todos los análisis conformes y sin hallazgos críticos ni mayores.",
    porque: "Filtrar, lavar, soplar y secar en un mismo equipo: operaciones de separación del temario.",
    href: "/simulador/nutsche",
    simulador: "Nutsche",
    certs: [QUIE],
  },
  {
    id: "pl-nutsche-relevo",
    titulo: "Relevo de turno bien hecho",
    reto: "En el modo relevo, detecta lo que no cuadra entre la nota y el registro, avisa y cierra el lote conforme.",
    porque: "La información que pasa de un turno a otro se comprueba contra el registro, no se da por buena.",
    href: "/simulador/nutsche",
    simulador: "Nutsche",
    certs: [QUIE, GMP],
  },
  {
    id: "pl-auditoria-a1",
    titulo: "Auditoría de la hoja 1",
    reto: "Encuentra todos los errores de la hoja del lote 26-0151, con su tipo bien y sin marcar líneas correctas.",
    porque: "Revisar una hoja como lo hace calidad entrena el ojo para no cometer esos errores.",
    href: "/simulador/auditoria",
    simulador: "Auditoría",
    certs: [GMP],
  },
  {
    id: "pl-auditoria-a2",
    titulo: "Auditoría de la hoja 2",
    reto: "Encuentra todos los errores de la hoja del lote 26-0158, con su tipo bien y sin marcar líneas correctas.",
    porque: "Integridad de datos (ALCOA+) aplicada a una hoja de producción completa.",
    href: "/simulador/auditoria",
    simulador: "Auditoría",
    certs: [GMP],
  },
  {
    id: "pl-auditoria-a3",
    titulo: "Auditoría de la hoja 3",
    reto: "Encuentra todos los errores de la hoja del lote 26-0163, con su tipo bien y sin marcar líneas correctas.",
    porque: "La hoja más difícil: cálculos, horas y firmas que no cuadran.",
    href: "/simulador/auditoria",
    simulador: "Auditoría",
    certs: [GMP],
  },
];

export function misionesDe(certId: string) {
  return MISIONES_PLANTA.filter((m) => m.certs.includes(certId));
}
