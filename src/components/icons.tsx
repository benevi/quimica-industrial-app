/** Iconos de trazo sencillos (24×24) para niveles, bloques y secciones. */
const paths: Record<string, React.ReactNode> = {
  calc: <><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M8 7h8M8 12h2M12 12h2M16 12v5M8 16h2M12 16h2" /></>,
  atom: <><circle cx="12" cy="12" r="1.5" /><ellipse cx="12" cy="12" rx="9" ry="3.5" /><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" /></>,
  flask: <><path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3" /><path d="M7.5 15h9" /></>,
  hexagon: <><path d="M12 3l7.8 4.5v9L12 21l-7.8-4.5v-9z" /><path d="M12 8l3.5 2v4L12 16l-3.5-2v-4z" /></>,
  scale: <><path d="M12 4v16M6 20h12M5 8h14" /><path d="M5 8l-2.5 6a3 3 0 0 0 5 0zM19 8l-2.5 6a3 3 0 0 0 5 0z" /></>,
  sample: <><path d="M9 3h6v4l-1 1v11a2 2 0 0 1-4 0V8L9 7z" /><path d="M10 13h4" /></>,
  burette: <><path d="M11 2h2v13h-2zM10 15h4l-1 3h-2z" /><path d="M6 21h12M8 21c0-2 1.5-3 4-3s4 1 4 3" /></>,
  wave: <><path d="M3 20h18M3 20V4" /><path d="M5 17l3-1 2-8 2 11 2-6 2 3 3-1" /></>,
  thermo: <><path d="M10 14V5a2 2 0 0 1 4 0v9a4 4 0 1 1-4 0z" /><path d="M12 9v7" /></>,
  microbe: <><circle cx="12" cy="12" r="5" /><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.9 2.9M15.5 15.5l2.9 2.9M5.6 18.4l2.9-2.9M15.5 8.5l2.9-2.9" /></>,
  badge: <><circle cx="12" cy="9" r="6" /><path d="M9 14l-2 7 5-3 5 3-2-7M9.5 9l2 2 3.5-4" /></>,
  pipe: <><path d="M2 9h8v6H2M22 9h-8v6h8" /><path d="M10 7h4v10h-4zM12 7V4M10 4h4" /></>,
  reactor: <><path d="M7 6h10v11a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3z" /><path d="M12 2v13M9 13h6M10 2h4M4 10h3M17 10h3" /></>,
  gauge: <><path d="M4 18a8 8 0 1 1 16 0" /><path d="M12 18l4-6M8 18h8" /></>,
  wrench: <><path d="M14.7 6.3a4 4 0 0 0 5 5l-9.4 9.4a2.1 2.1 0 0 1-3-3z" /><path d="M14.7 6.3a4 4 0 0 1 5-3l-2.6 2.6.6 2.4 2.4.6 2.6-2.6" /></>,
  shield: <><path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z" /><path d="M12 8v5M12 16h.01" /></>,
  doc: <><path d="M6 3h9l4 4v14H6z" /><path d="M14 3v5h5M9 13l2 2 4-4" /></>,
  screen: <><rect x="3" y="4" width="18" height="12" rx="1.5" /><path d="M8 20h8M12 16v4M7 12l3-3 2 2 4-4" /></>,
  box: <><path d="M3 7.5L12 3l9 4.5v9L12 21l-9-4.5z" /><path d="M3 7.5L12 12l9-4.5M12 12v9" /></>,
  book: <><path d="M4 5a2 2 0 0 1 2-2h13v15H6a2 2 0 0 0-2 2z" /><path d="M4 20a2 2 0 0 0 2 1h13v-3" /></>,
  play: <><circle cx="12" cy="12" r="9" /><path d="M10 8.5l5 3.5-5 3.5z" /></>,
  check: <><circle cx="12" cy="12" r="9" /><path d="M8 12l3 3 5-6" /></>,
  map: <><path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3z" /><path d="M9 3v15M15 6v15" /></>,
  search: <><circle cx="11" cy="11" r="6.5" /><path d="M20 20l-4.3-4.3" /></>,
  bulb: <><path d="M9 18h6M10 21h4" /><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V16h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z" /></>,
  factory: <><path d="M3 21V10l5 3V10l5 3V5h4v16z" /><path d="M17 5h3v16M3 21h18" /></>,
  sheet: <><rect x="5" y="3" width="14" height="18" rx="1.5" /><path d="M8 8h8M8 12h8M8 16h5" /></>,
  abc: <><path d="M4 18l3.5-10L11 18M5.2 14.5h4.6M14 8h3.5a2 2 0 0 1 0 4H14zM14 12h4a2 2 0 0 1 0 4h-4z" /></>,
  quiz: <><circle cx="12" cy="12" r="9" /><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6V14M12 17h.01" /></>,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  back: <path d="M19 12H5M11 6l-6 6 6 6" />,
  network: <><rect x="9" y="3" width="6" height="5" rx="1" /><rect x="3" y="16" width="6" height="5" rx="1" /><rect x="15" y="16" width="6" height="5" rx="1" /><path d="M12 8v4M6 16v-4h12v4" /></>,
  cards: <><rect x="7" y="3" width="13" height="15" rx="2" /><path d="M4 7v11a3 3 0 0 0 3 3h9" /><path d="M11 9h5M11 12h3" /></>,
  hazard: <><path d="M12 2.5l9.5 9.5-9.5 9.5L2.5 12z" /><path d="M12 8v5M12 16h.01" /></>,
  cloud: <><path d="M7 18a4.5 4.5 0 0 1-.6-9A6 6 0 0 1 18 9.5a4 4 0 0 1-.5 8.5z" /></>,
  lock: <><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></>,
};

export type IconName = keyof typeof paths;

export function Icon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      {paths[name]}
    </svg>
  );
}

export const levelIcon: Record<number, IconName> = {
  0: "calc", 1: "atom", 2: "flask", 3: "hexagon", 4: "scale", 5: "sample", 6: "burette", 7: "wave", 8: "thermo",
  9: "microbe", 10: "badge", 11: "pipe", 12: "reactor", 13: "gauge", 14: "wrench", 15: "shield", 16: "doc", 17: "box", 18: "network", 19: "screen", 20: "lock", 21: "check",
};

export const blockIcon: Record<string, IconName> = { bases: "atom", laboratorio: "flask", planta: "factory", calidad: "doc", sistemas: "screen" };
