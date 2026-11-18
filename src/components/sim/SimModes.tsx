"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MODES = [
  { href: "/simulador", label: "Lote completo", sub: "Reactor, filtro, centrífuga y secadero" },
  { href: "/simulador/nutsche", label: "Filtro-secador Nutsche", sub: "Proceso 2 y relevo de turno" },
  { href: "/simulador/auditoria", label: "Auditoría de hojas", sub: "Encuentra los errores como QA" },
];

/** Pestañas para cambiar entre los modos del simulador. */
export function SimModes() {
  const path = usePathname();
  return (
    <nav aria-label="Modos del simulador" className="flex flex-wrap gap-2">
      {MODES.map((m) => {
        const on = path === m.href;
        return (
          <Link
            key={m.href}
            href={m.href}
            aria-current={on ? "page" : undefined}
            className={`rounded-lg border px-3 py-2 text-sm ${on ? "border-accent bg-accent text-[var(--on-accent)]" : "border-line bg-surface hover:bg-soft"}`}
          >
            <div className="font-semibold">{m.label}</div>
            <div className={`text-xs ${on ? "opacity-90" : "text-muted"}`}>{m.sub}</div>
          </Link>
        );
      })}
    </nav>
  );
}
