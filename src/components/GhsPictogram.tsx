import { pictograms, type GhsCode } from "@/content/fds";

/** Dibujos simplificados de los 9 pictogramas GHS/CLP: rombo de borde rojo, fondo blanco, símbolo negro. */
const symbols: Record<GhsCode, React.ReactNode> = {
  GHS01: (
    <>
      <circle cx="45" cy="60" r="13" fill="#000" />
      <path d="M53 50 L60 40" stroke="#000" strokeWidth="3" />
      <path d="M62 37 l6 -6 M64 40 l9 -1 M60 34 l1 -9 M66 45 l7 4" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M28 44 l6 3 -3 5z M30 72 l6 -2 -1 6z M60 72 l5 4 -6 2z M36 38 l4 6 -6 0z" fill="#000" />
    </>
  ),
  GHS02: (
    <>
      <path
        d="M50 24 C54 34 64 38 64 52 C64 60 60 66 54 68 C57 62 55 56 50 52 C50 58 46 62 44 66 C40 64 36 60 36 53 C36 44 44 40 44 32 C47 35 48 38 48 42 C51 37 51 30 50 24 Z"
        fill="#000"
      />
      <rect x="32" y="70" width="36" height="5" fill="#000" />
    </>
  ),
  GHS03: (
    <>
      <path d="M50 24 C53 31 60 34 60 43 C60 49 56 52 50 53 C53 49 52 45 49 42 C48 47 44 49 42 52 C40 49 39 46 39 43 C39 36 45 33 45 28 C47 30 48 32 48 35 C50 32 51 28 50 24 Z" fill="#000" />
      <circle cx="50" cy="62" r="10" fill="none" stroke="#000" strokeWidth="5" />
      <rect x="32" y="74" width="36" height="4" fill="#000" />
    </>
  ),
  GHS04: (
    <g transform="rotate(-35 50 52)">
      <rect x="26" y="44" width="44" height="18" rx="9" fill="#000" />
      <rect x="70" y="49" width="7" height="8" fill="#000" />
      <rect x="77" y="47" width="3" height="12" fill="#000" />
    </g>
  ),
  GHS05: (
    <>
      <g transform="rotate(-30 36 32)">
        <rect x="32" y="20" width="8" height="22" rx="2" fill="none" stroke="#000" strokeWidth="2.5" />
        <rect x="33.5" y="32" width="5" height="9" fill="#000" />
      </g>
      <g transform="rotate(30 64 32)">
        <rect x="60" y="20" width="8" height="22" rx="2" fill="none" stroke="#000" strokeWidth="2.5" />
        <rect x="61.5" y="32" width="5" height="9" fill="#000" />
      </g>
      <path d="M44 46 q-2 5 0 6 q2 -1 0 -6z M56 46 q-2 5 0 6 q2 -1 0 -6z M44 55 q-2 4 0 5 q2 -1 0 -5z M56 55 q-2 4 0 5 q2 -1 0 -5z" fill="#000" />
      <path d="M24 64 h22 v8 h-22z" fill="#000" />
      <path d="M38 64 q3 -3 6 0" fill="#fff" />
      <path d="M54 72 v-8 h4 v-4 h3 v4 h3 v-5 h3 v5 h3 v-3 h3 v11z" fill="#000" />
      <rect x="20" y="74" width="60" height="4" fill="#000" />
    </>
  ),
  GHS06: (
    <>
      <path d="M30 70 L70 82 M30 82 L70 70" stroke="#000" strokeWidth="5" strokeLinecap="round" />
      <circle cx="50" cy="44" r="16" fill="#000" />
      <rect x="42" y="54" width="16" height="12" rx="3" fill="#000" />
      <circle cx="44" cy="44" r="4" fill="#fff" />
      <circle cx="56" cy="44" r="4" fill="#fff" />
      <path d="M47 60 v5 M50 60 v5 M53 60 v5" stroke="#fff" strokeWidth="1.5" />
    </>
  ),
  GHS07: (
    <>
      <path d="M45 24 h10 l-2 34 h-6 z" fill="#000" />
      <circle cx="50" cy="69" r="6" fill="#000" />
    </>
  ),
  GHS08: (
    <>
      <circle cx="50" cy="28" r="7" fill="#000" />
      <path d="M32 78 C32 52 36 40 50 40 C64 40 68 52 68 78 Z" fill="#000" />
      <path d="M50 46 l2.6 6.6 7 .4 -5.4 4.4 1.8 6.8 -6 -3.8 -6 3.8 1.8 -6.8 -5.4 -4.4 7 -.4z" fill="#fff" />
    </>
  ),
  GHS09: (
    <>
      <path d="M34 72 V40 M34 50 l-8 -8 M34 46 l7 -9 M34 58 l8 -6 M26 42 l-2 -5 M41 37 l4 -3" stroke="#000" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M48 66 c6 -7 18 -7 22 0 c-4 7 -16 7 -22 0z M70 66 l8 -5 v10z" fill="#000" />
      <circle cx="53" cy="65" r="1.5" fill="#fff" />
      <path d="M22 74 h56" stroke="#000" strokeWidth="3" />
    </>
  ),
};

export function GhsPictogram({ code, size = 64, showLabel = false }: { code: GhsCode; size?: number; showLabel?: boolean }) {
  const info = pictograms[code];
  return (
    <figure className="inline-flex flex-col items-center gap-1">
      <svg viewBox="0 0 100 100" width={size} height={size} role="img" aria-label={`${code}: ${info.name}`}>
        <polygon points="50,4 96,50 50,96 4,50" fill="#fff" stroke="#d00" strokeWidth="7" strokeLinejoin="round" />
        {symbols[code]}
      </svg>
      {showLabel && (
        <figcaption className="text-center text-xs leading-tight">
          <span className="font-semibold">{code}</span>
          <span className="block text-muted">{info.name}</span>
        </figcaption>
      )}
    </figure>
  );
}
