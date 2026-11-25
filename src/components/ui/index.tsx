import Link from "next/link";
import { Icon, type IconName } from "@/components/icons";

/**
 * Piezas comunes del sistema visual. Úsalas en todas las páginas para que la app se lea igual en todas partes.
 * Guía completa: docs/diseno.md
 */

/** Cabecera de página: migas, título, subtítulo en inglés, una frase de qué se hace aquí y acciones. */
export function PageHeader({
  crumbs,
  title,
  en,
  lead,
  icon,
  actions,
  children,
}: {
  crumbs?: { href?: string; label: string }[];
  title: React.ReactNode;
  en?: string;
  lead?: React.ReactNode;
  icon?: IconName;
  actions?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <header className="mb-10 space-y-4 border-b border-line pb-7">
      {crumbs && crumbs.length > 0 && <Breadcrumbs items={crumbs} />}
      <div className="relative min-w-0">
        {icon && (
          <span aria-hidden className="bubble absolute -left-[4.25rem] top-0 hidden h-12 w-12 text-accent xl:inline-grid [[data-ancho]_&]:hidden">
            <Icon name={icon} className="h-[22px] w-[22px]" />
          </span>
        )}
        <div className="min-w-0">
          <h1 className="t-h1 text-ink">{title}</h1>
          {en && (
            <p lang="en" className="mt-1 text-[0.95rem] text-muted">
              {en}
            </p>
          )}
          {lead && <div className="mt-4 max-w-[64ch] leading-relaxed text-muted">{lead}</div>}
          {children && <div className="mt-4 space-y-2">{children}</div>}
          {actions && <div className="mt-6 flex flex-wrap items-center gap-2">{actions}</div>}
        </div>
      </div>
    </header>
  );
}

export function Breadcrumbs({ items }: { items: { href?: string; label: string }[] }) {
  // En pantallas estrechas, una sola línea: «volver» al nivel de arriba
  const parent = [...items].reverse().find((c) => c.href);
  return (
    <nav aria-label="Estás en" className="text-sm text-muted">
      {parent && (
        <Link href={parent.href!} className="inline-flex items-center gap-1 hover:text-ink hover:underline sm:hidden">
          <Icon name="back" className="h-3.5 w-3.5" />
          {parent.label}
        </Link>
      )}
      <span className={`flex-wrap items-center gap-1 ${parent ? "hidden sm:flex" : "flex"}`}>
        {items.map((c, i) => (
          <span key={i} className="inline-flex items-center gap-1">
            {i > 0 && <Icon name="chevron" className="h-3.5 w-3.5 opacity-60" />}
            {c.href ? (
              <Link href={c.href} className="hover:text-ink hover:underline">
                {c.label}
              </Link>
            ) : (
              <span className="text-ink">{c.label}</span>
            )}
          </span>
        ))}
      </span>
    </nav>
  );
}

/** Título de sección dentro de una página. */
export function SectionTitle({ children, en, id, aside }: { children: React.ReactNode; en?: string; id?: string; aside?: React.ReactNode }) {
  return (
    <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
      <h2 id={id} className="t-h2">
        {children}
        {en && (
          <span lang="en" className="ml-2 font-sans text-sm font-normal text-muted">
            {en}
          </span>
        )}
      </h2>
      {aside && <div className="text-sm text-muted">{aside}</div>}
    </div>
  );
}

/** Superficie base (nivel 1): blanca, borde fino. */
export function Card({ children, className = "", as: As = "div" }: { children: React.ReactNode; className?: string; as?: "div" | "section" | "li" | "article" }) {
  return <As className={`rounded-[var(--radius)] border border-line bg-surface ${className}`}>{children}</As>;
}

export const btn = {
  primary:
    "inline-flex items-center justify-center gap-2 rounded-[var(--radius)] bg-accent px-4 py-2.5 text-[0.95rem] font-semibold text-[var(--on-accent)] hover:bg-accent-ink disabled:opacity-50",
  secondary:
    "inline-flex items-center justify-center gap-2 rounded-[var(--radius)] border border-line-strong bg-surface px-4 py-2.5 text-[0.95rem] font-semibold text-ink hover:border-accent hover:text-accent disabled:opacity-50",
  quiet: "inline-flex items-center gap-1.5 rounded-[var(--radius)] px-2 py-1.5 text-[0.95rem] font-semibold text-accent hover:bg-accent-soft",
};

/** Barra de progreso fina. */
export function Bar({ pct, color = "var(--accent)", label, className = "" }: { pct: number; color?: string; label?: string; className?: string }) {
  return (
    <div
      className={`h-2 overflow-hidden rounded-[2px] bg-track ${className}`}
      role="progressbar"
      aria-valuenow={pct}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
    >
      <div className="h-full rounded-[2px] transition-[width] duration-500" style={{ width: `${pct}%`, background: color }} />
    </div>
  );
}

/** Desplegable con estilo propio, para esconder detalles que no hacen falta a primera vista. */
export function Disclosure({ summary, children, defaultOpen = false, className = "" }: { summary: React.ReactNode; children: React.ReactNode; defaultOpen?: boolean; className?: string }) {
  return (
    <details open={defaultOpen} className={`group rounded-[var(--radius)] border border-line bg-surface ${className}`}>
      <summary className="flex cursor-pointer list-none items-center gap-3 px-4 py-3 [&::-webkit-details-marker]:hidden">
        <Icon name="chevron" className="h-4 w-4 shrink-0 text-muted transition-transform group-open:rotate-90" />
        <div className="min-w-0 flex-1">{summary}</div>
      </summary>
      <div className="border-t border-line px-4 py-4">{children}</div>
    </details>
  );
}

/** Pastilla de estado: hecho, en curso, pendiente. */
export function Status({ kind, children }: { kind: "done" | "doing" | "todo" | "bad"; children: React.ReactNode }) {
  const cls =
    kind === "bad"
      ? "border-bad/50 bg-bad-soft text-bad"
      : kind === "done"
        ? "border-ok/50 bg-ok-soft text-ok"
        : kind === "doing"
          ? "border-accent bg-surface text-ink"
          : "border-line-strong bg-surface text-muted";
  return <span className={`inline-flex items-center gap-1 rounded-[2px] border px-1.5 py-0.5 text-xs font-semibold ${cls}`}>{children}</span>;
}
