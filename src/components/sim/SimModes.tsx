"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { PageHeader } from "@/components/ui";

const MODES = [
  { href: "/simulador", label: "Lote completo", hint: "Reactor, filtro, centrífuga y secadero" },
  { href: "/simulador/reactor", label: "Reactor", hint: "Reactor R-204 con modelo físico, cascada de temperatura, interlocks y averías" },
  { href: "/simulador/nutsche", label: "Nutsche", hint: "Filtro-secador del proceso 2 y relevo de turno" },
  { href: "/simulador/auditoria", label: "Auditoría", hint: "Encuentra los errores de una hoja como QA" },
];

/** Pestañas discretas para cambiar entre los modos del simulador. */
export function SimModes() {
  const path = usePathname();
  return (
    <nav aria-label="Modos del simulador" className="overflow-x-auto border-b border-line">
      <ul className="flex gap-1">
        {MODES.map((m) => {
          const on = path === m.href;
          return (
            <li key={m.href}>
              <Link
                href={m.href}
                title={m.hint}
                aria-current={on ? "page" : undefined}
                className={`-mb-px inline-block whitespace-nowrap border-b-2 px-3 py-2.5 text-sm ${
                  on ? "border-accent font-medium text-ink" : "border-transparent text-muted hover:border-line-strong hover:text-ink"
                }`}
              >
                {m.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

/**
 * Marco común de las páginas del simulador: cabecera con migas, pestañas de modo y el contenido.
 * `wide` ensancha la página (sin pisar la barra lateral) para que la planta y el «qué hacer ahora» quepan lado a lado.
 * La cabecera y el contenido comparten siempre la misma columna: si se ensancha, se ensancha todo junto.
 */
export function SimShell({
  mode,
  title,
  en,
  lead,
  wide = false,
  children,
}: {
  mode: string;
  title: string;
  en: string;
  lead: ReactNode;
  wide?: boolean;
  children: ReactNode;
}) {
  const crumbs = [{ href: "/", label: "Hoy" }, { href: "/simulador", label: "Simulador de planta" }, { label: mode }];
  return (
    <div data-ancho={wide ? "" : undefined} className={wide ? "relative left-1/2 w-[min(100vw_-_2rem,80rem)] -translate-x-1/2 lg:w-[min(100vw_-_20rem,80rem)]" : undefined}>
      <PageHeader crumbs={crumbs} title={title} en={en} icon="reactor" lead={lead}>
        <div className="pt-3">
          <SimModes />
        </div>
      </PageHeader>
      <div className="space-y-6">{children}</div>
    </div>
  );
}
