/** Normaliza un texto para buscar: minúsculas y sin tildes. */
export const norm = (s: string) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
