import type { IconName } from "@/components/icons";

/**
 * Arquitectura de la app: cuatro zonas. Todo lo que existe cuelga de una sola de ellas,
 * para que siempre se sepa dónde se está.
 */
export type NavItem = {
  href: string;
  label: string;
  en: string;
  icon: IconName;
  /** Rutas que también encienden este enlace */
  match?: string[];
  /** Frase corta para el buscador y las portadas */
  hint: string;
};

export type NavGroup = { id: string; label: string; items: NavItem[] };

export const navGroups: NavGroup[] = [
  {
    id: "hoy",
    label: "",
    items: [{ href: "/", label: "Hoy", en: "Today", icon: "home", hint: "Tu siguiente paso y cómo vas." }],
  },
  {
    id: "aprender",
    label: "Aprender",
    items: [
      { href: "/operador", label: "Ruta del operador", en: "Operator track", icon: "shield", hint: "28 lecciones imprescindibles para tu turno." },
      {
        href: "/temario",
        label: "Temario completo",
        en: "Full course",
        icon: "book",
        match: ["/nivel", "/leccion"],
        hint: "125 lecciones en 22 niveles, de las bases a los sistemas.",
      },
      { href: "/mapa", label: "Mapa de planta", en: "Plant map", icon: "map", hint: "Dónde encaja cada lección en el recorrido de un lote." },
      { href: "/glosario", label: "Glosario", en: "Glossary", icon: "abc", hint: "Todos los términos en español e inglés." },
    ],
  },
  {
    id: "practicar",
    label: "Practicar",
    items: [
      { href: "/simulador", label: "Simulador de planta", en: "Plant simulator", icon: "reactor", hint: "Fabrica un lote con su hoja de producción." },
      { href: "/sap", label: "Simulador ERP", en: "ERP simulator", icon: "screen", match: ["/sap"], hint: "Lleva un lote por el ERP, tipo SAP." },
      { href: "/calculadoras", label: "Calculadoras", en: "Calculators", icon: "calc", hint: "Cargas, moles, diluciones y rendimiento." },
      { href: "/tarjetas", label: "Tarjetas de repaso", en: "Flashcards", icon: "cards", match: ["/repaso"], hint: "Cinco minutos de repaso antes del turno." },
      { href: "/fds", label: "Fichas de seguridad", en: "Safety data sheets", icon: "hazard", hint: "Aprende a leer una FDS." },
    ],
  },
  {
    id: "certificar",
    label: "Certificarte",
    items: [
      {
        href: "/certificaciones",
        label: "Certificaciones",
        en: "Certifications",
        icon: "badge",
        match: ["/examen", "/autoevaluacion", "/simulacro", "/supuesto"],
        hint: "Simulacros y autoevaluación de los certificados oficiales.",
      },
    ],
  },
];

export const allNavItems = navGroups.flatMap((g) => g.items);

export function isActive(it: NavItem, path: string) {
  if (it.href === "/") return path === "/";
  // /sap/examen es parte de Certificaciones, no del simulador ERP
  if (it.href === "/sap" && path.startsWith("/sap/examen")) return false;
  if (it.href === "/certificaciones" && path.startsWith("/sap/examen")) return true;
  return path.startsWith(it.href) || !!it.match?.some((m) => path.startsWith(m));
}
