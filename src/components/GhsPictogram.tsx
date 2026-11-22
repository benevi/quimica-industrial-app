import { pictograms, type GhsCode } from "@/content/fds";

/**
 * Pictogramas oficiales GHS/CLP (GHS01–GHS09).
 * Archivos SVG de Wikimedia Commons («GHS-pictogram-*.svg»), copia de los publicados por la
 * CEPE/ONU (UNECE) en el Sistema Globalmente Armonizado. Dominio público. Ver public/ghs/FUENTES.md.
 */
export function GhsPictogram({ code, size = 64, showLabel = false }: { code: GhsCode; size?: number; showLabel?: boolean }) {
  const info = pictograms[code];
  return (
    <figure className="inline-flex flex-col items-center gap-1">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`/ghs/${code}.svg`} width={size} height={size} alt={`${code}: ${info.name}`} draggable={false} />
      {showLabel && (
        <figcaption className="text-center text-xs leading-tight">
          <span className="font-semibold">{code}</span>
          <span className="block text-[#5d6170]">{info.name}</span>
        </figcaption>
      )}
    </figure>
  );
}
