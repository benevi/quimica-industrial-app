"use client";

import { Search, openSearch } from "@/components/Search";
import { CloudBadge } from "@/components/CloudPanel";
import { SidebarFrame } from "./SidebarFrame";
import { navGroups, isActive } from "./nav";

/** Barra lateral de la edición completa. Cuatro zonas: Hoy, Aprender, Practicar y Certificarte. */
export function Sidebar() {
  return (
    <>
      <Search />
      <SidebarFrame
        brand={{ title: "Aula de Química", subtitle: "Planta de principios activos", icon: "flask" }}
        groups={navGroups}
        isActive={isActive}
        onSearch={openSearch}
        progressBadge={<CloudBadge compact />}
      />
    </>
  );
}
