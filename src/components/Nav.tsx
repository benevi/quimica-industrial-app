"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon, type IconName } from "./icons";
import { Search, type SearchIndex } from "./Search";

type Item = { href: string; label: string; icon: IconName; match?: string[] };

const groups: { label: string; items: Item[] }[] = [
  {
    label: "Aprender",
    items: [
      { href: "/", label: "Ruta", icon: "book", match: ["/nivel", "/leccion"] },
      { href: "/mapa", label: "Mapa de planta", icon: "map" },
      { href: "/glosario", label: "Glosario", icon: "abc" },
      { href: "/fds", label: "FDS", icon: "hazard" },
    ],
  },
  {
    label: "Practicar",
    items: [
      { href: "/simulador", label: "Simulador", icon: "reactor" },
      { href: "/sap", label: "ERP", icon: "screen" },
      { href: "/calculadoras", label: "Calculadoras", icon: "calc" },
      { href: "/tarjetas", label: "Tarjetas", icon: "cards" },
    ],
  },
  {
    label: "Certificar",
    items: [{ href: "/certificaciones", label: "Certificaciones", icon: "badge", match: ["/examen", "/autoevaluacion"] }],
  },
];

export function Nav({ index }: { index: SearchIndex }) {
  const path = usePathname();
  const active = (it: Item) =>
    it.href === "/" ? path === "/" || !!it.match?.some((m) => path.startsWith(m)) : path.startsWith(it.href) || !!it.match?.some((m) => path.startsWith(m));

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-surface/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-2.5 text-sm" aria-label="Principal">
        <Link href="/" className="flex shrink-0 items-center gap-2 font-semibold text-ink">
          <span aria-hidden className="grid h-8 w-8 place-items-center rounded-lg bg-accent text-white">
            <Icon name="flask" className="h-[18px] w-[18px]" />
          </span>
          <span className="hidden leading-tight sm:block">
            Aula de Química
            <span className="block text-[11px] font-normal text-muted">Industrial · API · GMP</span>
          </span>
        </Link>

        <div className="ml-auto flex min-w-0 items-center gap-1 overflow-x-auto">
          {groups.map((g, gi) => (
            <div key={g.label} className={`flex items-center gap-0.5 ${gi > 0 ? "border-l border-line pl-1.5 ml-1" : ""}`}>
              <span className="hidden px-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted 2xl:block">{g.label}</span>
              {g.items.map((it) => {
                const on = active(it);
                return (
                  <Link
                    key={it.href}
                    href={it.href}
                    aria-current={on ? "page" : undefined}
                    title={it.label}
                    className={`flex items-center gap-1.5 whitespace-nowrap rounded-lg px-2 py-1.5 ${
                      on ? "bg-accent-soft font-medium text-accent" : "text-muted hover:bg-soft hover:text-ink"
                    }`}
                  >
                    <Icon name={it.icon} className="h-4 w-4 shrink-0" />
                    <span className="hidden lg:inline">{it.label}</span>
                  </Link>
                );
              })}
            </div>
          ))}
        </div>
        <Search index={index} />
      </nav>
    </header>
  );
}
