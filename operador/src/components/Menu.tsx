"use client";

import { SidebarFrame } from "@/components/shell/SidebarFrame";
import type { NavGroup, NavItem } from "@/components/shell/nav";
import { NOMBRE_CORTO, etapaDe, etapas } from "@op/edicion";

const grupos: NavGroup[] = [
  { id: "hoy", label: "", items: [{ href: "/", label: "Hoy", en: "Today", icon: "home", hint: "Tu siguiente lección y cómo vas." }] },
  {
    id: "etapas",
    label: "Etapas",
    items: etapas.map((e, i) => ({ href: `/etapa/${e.id}`, label: `${i + 1}. ${e.corto}`, en: e.titleEn, icon: e.icon, hint: e.resumen })),
  },
  {
    id: "repasar",
    label: "Repasar y practicar",
    items: [
      { href: "/glosario", label: "Glosario", en: "Glossary", icon: "abc", hint: "Los términos de la formación en español e inglés." },
      { href: "/tarjetas", label: "Tarjetas de repaso", en: "Flashcards", icon: "cards", hint: "Cinco minutos de repaso antes del turno." },
      { href: "/fds", label: "Fichas de seguridad", en: "Safety data sheets", icon: "hazard", hint: "Aprende a leer una FDS." },
      { href: "/calculadoras", label: "Calculadoras", en: "Calculators", icon: "calc", hint: "Las cuentas de la hoja con otros números." },
    ],
  },
];

/** Una lección enciende la etapa a la que pertenece. */
function activo(it: NavItem, path: string) {
  if (it.href === "/") return path === "/";
  const lec = path.match(/^\/leccion\/([\w-]+)/);
  if (lec) return it.href === `/etapa/${etapaDe(lec[1])?.etapa.id}`;
  return path === it.href || path.startsWith(`${it.href}/`);
}

export function Menu() {
  return <SidebarFrame brand={{ title: NOMBRE_CORTO, subtitle: "Planta de principios activos", icon: "flask" }} groups={grupos} isActive={activo} />;
}
