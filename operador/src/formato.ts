/** Minutos a horas con un decimal y coma decimal: 847 → «14,1». */
export const horas = (min: number) => `${Math.round(min / 6) / 10}`.replace(".", ",");
