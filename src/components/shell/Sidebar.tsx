"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/icons";
import { Search, openSearch } from "@/components/Search";
import { CloudBadge } from "@/components/CloudPanel";
import { navGroups, isActive } from "./nav";

/**
 * Barra lateral fija en escritorio y cajón deslizante en pantallas estrechas.
 * Cuatro zonas: Hoy, Aprender, Practicar y Certificarte.
 */
export function Sidebar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  const drawer = useRef<HTMLElement>(null);
  const opener = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    if (!open) {
      // Al cerrar el menú, el foco vuelve al botón que lo abrió
      if (wasOpen.current) opener.current?.focus();
      wasOpen.current = false;
      return;
    }
    wasOpen.current = true;
    drawer.current?.querySelector<HTMLElement>("button, a[href]")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key !== "Tab" || !drawer.current) return;
      // El foco no sale del menú mientras está abierto
      const items = drawer.current.querySelectorAll<HTMLElement>("button, a[href]");
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const brand = (
    <Link href="/" className="flex items-center gap-2.5 rounded-md px-2 py-1 text-[var(--sidebar-ink)]">
      <span aria-hidden className="grid h-8 w-8 place-items-center rounded-md bg-accent text-[var(--on-accent)]">
        <Icon name="flask" className="h-[18px] w-[18px]" />
      </span>
      <span className="leading-tight">
        <span className="block text-[15px] font-semibold">Aula de Química</span>
        <span className="block text-xs text-[var(--sidebar-muted)]">Planta de principios activos</span>
      </span>
    </Link>
  );

  const nav = (
    <nav aria-label="Principal" className="flex-1 space-y-5 overflow-y-auto px-3 pb-4">
      {navGroups.map((g) => (
        <div key={g.id}>
          {g.label && <p className="px-2 pb-1.5 text-xs font-medium text-[var(--sidebar-muted)]">{g.label}</p>}
          <ul className="space-y-0.5">
            {g.items.map((it) => {
              const on = isActive(it, path);
              return (
                <li key={it.href}>
                  <Link
                    href={it.href}
                    aria-current={on ? "page" : undefined}
                    className={`group relative flex items-center gap-3 rounded-md px-2 py-2 text-[14px] ${
                      on ? "bg-[var(--sidebar-hover)] font-medium text-white" : "text-[var(--sidebar-ink)] hover:bg-[var(--sidebar-hover)]"
                    }`}
                  >
                    {on && <span aria-hidden className="absolute -left-3 top-1.5 bottom-1.5 w-[3px] rounded-r bg-signal" />}
                    <Icon name={it.icon} className={`h-[18px] w-[18px] shrink-0 ${on ? "text-signal" : "text-[var(--sidebar-muted)] group-hover:text-[var(--sidebar-ink)]"}`} />
                    {it.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );

  const foot = (
    <div className="space-y-1 border-t border-white/10 px-3 py-3">
      <button
        type="button"
        onClick={() => {
          setOpen(false);
          openSearch();
        }}
        className="flex w-full items-center gap-3 rounded-md px-2 py-2 text-left text-[14px] text-[var(--sidebar-ink)] hover:bg-[var(--sidebar-hover)]"
      >
        <Icon name="search" className="h-[18px] w-[18px] text-[var(--sidebar-muted)]" />
        <span className="flex-1">Buscar</span>
        <kbd className="rounded border border-white/15 px-1.5 font-mono text-[11px] text-[var(--sidebar-muted)]">Ctrl K</kbd>
      </button>
      <Link
        href="/progreso"
        aria-current={path.startsWith("/progreso") ? "page" : undefined}
        className={`flex items-center gap-3 rounded-md px-2 py-2 text-[14px] text-[var(--sidebar-ink)] hover:bg-[var(--sidebar-hover)] ${
          path.startsWith("/progreso") ? "bg-[var(--sidebar-hover)] font-medium text-white" : ""
        }`}
      >
        <Icon name="chart" className="h-[18px] w-[18px] text-[var(--sidebar-muted)]" />
        <span className="flex-1">Mi progreso</span>
        <CloudBadge compact />
      </Link>
    </div>
  );

  return (
    <>
      <Search />
      {/* escritorio */}
      <aside data-sidebar className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col bg-[var(--sidebar)] lg:flex">
        <div className="px-3 pb-5 pt-4">{brand}</div>
        {nav}
        {foot}
      </aside>

      {/* móvil y ventanas estrechas */}
      <header data-sidebar className="sticky top-0 z-30 flex items-center gap-2 bg-[var(--sidebar)] px-3 py-2 lg:hidden">
        <button
          ref={opener}
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Abrir el menú"
          aria-expanded={open}
          className="grid h-10 w-10 place-items-center rounded-md text-[var(--sidebar-ink)] hover:bg-[var(--sidebar-hover)]"
        >
          <Icon name="menu" />
        </button>
        {brand}
        <button
          type="button"
          onClick={openSearch}
          aria-label="Buscar"
          className="ml-auto grid h-10 w-10 place-items-center rounded-md text-[var(--sidebar-ink)] hover:bg-[var(--sidebar-hover)]"
        >
          <Icon name="search" />
        </button>
      </header>
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Menú">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <aside ref={drawer} data-sidebar className="absolute inset-y-0 left-0 flex w-72 max-w-[85vw] flex-col bg-[var(--sidebar)] shadow-2xl">
            <div className="flex items-center justify-between px-3 pb-5 pt-4">
              {brand}
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar el menú"
                className="grid h-10 w-10 place-items-center rounded-md text-[var(--sidebar-ink)] hover:bg-[var(--sidebar-hover)]"
              >
                <Icon name="close" />
              </button>
            </div>
            {nav}
            {foot}
          </aside>
        </div>
      )}
    </>
  );
}
