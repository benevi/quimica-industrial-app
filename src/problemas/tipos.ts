// Banco de problemas: cada tipo de problema es un generador que, con una semilla, crea un enunciado con números
// distintos, su respuesta y la solución paso a paso. Todos los datos que hacen falta van en el enunciado: así no hay
// cifras de la realidad que comprobar, solo cuentas, y las cuentas las comprueba `npm run check:problemas`.

export type Problema = {
  /** Enunciado en Markdown sencillo (negritas y subíndices Unicode). */
  enunciado: string;
  respuesta: number;
  unidad: string;
  /** Tolerancia relativa admitida (0,01 = 1 %). Por defecto, 1 %. */
  tolerancia?: number;
  /** Tolerancia absoluta (para el pH y los logaritmos, donde el porcentaje no tiene sentido). Manda sobre la relativa. */
  tolAbs?: number;
  /** Decimales con los que se muestra la respuesta. */
  decimales: number;
  /** Solución, un paso por línea. El último paso da la respuesta. */
  pasos: string[];
};

export type Generador = {
  /** Id estable: se guarda en el progreso. No renombrar. */
  id: string;
  titulo: string;
  /** Nivel del temario en el que encaja. */
  nivel: number;
  /** Lección donde se explica (slug). */
  leccion: string;
  /** 1 = directo, 2 = dos o tres pasos, 3 = encadena varias ideas. */
  dificultad: 1 | 2 | 3;
  generar: (r: Azar) => Problema;
};

/** Generador de números pseudoaleatorios con semilla (mulberry32): la misma semilla da el mismo problema. */
export function azar(semilla: number) {
  let a = semilla >>> 0;
  const next = () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  return {
    /** Número entre min y max con `dec` decimales. */
    num(min: number, max: number, dec = 0) {
      const f = 10 ** dec;
      return Math.round((min + next() * (max - min)) * f) / f;
    },
    /** Entero entre min y max, ambos incluidos. */
    int(min: number, max: number) {
      return Math.floor(min + next() * (max - min + 1));
    },
    elige<T>(xs: readonly T[]): T {
      return xs[Math.floor(next() * xs.length)];
    },
  };
}
export type Azar = ReturnType<typeof azar>;

/** Número con coma decimal y sin separador de miles (como en las lecciones). */
export function n(x: number, dec = 2) {
  const s = x.toFixed(dec);
  return s.replace(".", ",").replace(/^-0(,0+)?$/, "0$1");
}

/** Redondea a `dec` decimales. */
export const red = (x: number, dec: number) => Math.round(x * 10 ** dec) / 10 ** dec;

/** Número en notación científica con coma: 1,74 × 10⁻⁵. */
export function cient(x: number, cifras = 3) {
  if (x === 0) return "0";
  const e = Math.floor(Math.log10(Math.abs(x)));
  const m = x / 10 ** e;
  const sup = String(e)
    .replace("-", "⁻")
    .replace(/\d/g, (d) => "⁰¹²³⁴⁵⁶⁷⁸⁹"[Number(d)]);
  return `${n(m, cifras - 1)} × 10${sup}`;
}

/** ¿El valor escrito vale como respuesta? */
export function esCorrecta(pr: Problema, valor: number) {
  if (pr.tolAbs !== undefined) return Math.abs(valor - pr.respuesta) <= pr.tolAbs + 1e-9;
  return Math.abs(valor - pr.respuesta) <= Math.abs(pr.respuesta) * (pr.tolerancia ?? 0.01) + 1e-12;
}

/** Decimales para mostrar `x` con `cifras` cifras significativas (al menos 0). */
export const decSig = (x: number, cifras = 3) => Math.max(0, cifras - 1 - Math.floor(Math.log10(Math.abs(x))));
