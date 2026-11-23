/**
 * Edición que se está compilando. La completa es la app de siempre; la de operador (carpeta operador/) pone
 * NEXT_PUBLIC_EDICION=operador en su next.config.ts. Úsalo solo para detalles pequeños de componentes compartidos
 * (un enlace que en la otra edición no existe); lo grande va en páginas propias de cada edición.
 */
export const edicionOperador = process.env.NEXT_PUBLIC_EDICION === "operador";
