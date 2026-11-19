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
    <header className="mb-8 space-y-3">
      {crumbs && crumbs.length > 0 && <Breadcrumbs items={crumbs} />}
      <div className="flex flex-wrap items-start gap-x-6 gap-y-4">
        <div className="flex min-w-0 flex-1 gap-4">
          {icon && (
            <span aria-hidden className="mt-0.5 hidden h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent sm:grid">
              <Icon name={icon} className="h-6 w-6" />
            </span>
          )}
          <div className="min-w-0">
            <h1 className="t-h1 text-ink">{title}</h1>
            {en && (
              <p lang="en" className="mt-0.5 text-muted">
                {en}
              </p>
            )}
            {lead && <div className="mt-3 max-w-[68ch] text-[15px] leading-relaxed text-muted">{lead}</div>}
          </div>
        </div>
        {actions && <div className="flex flex-wrap items-center gap-2">{actions}</div>}
      </div>
      {children}
    </header>
  );
}

export function Breadcrumbs({ items }: { items: { href?: string; label: string }[] }) {
  return (
    <nav aria-label="Estás en" className="flex flex-wrap items-center gap-1 text-sm text-muted">
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
          <span lang="en" className="ml-2 text-sm font-normal text-muted">
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
    "inline-flex items-center justify-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-[var(--on-accent)] hover:bg-accent-ink disabled:opacity-50",
  secondary:
    "inline-flex items-center justify-center gap-2 rounded-md border border-line-strong bg-surface px-4 py-2.5 text-sm font-medium text-ink hover:border-accent hover:text-accent disabled:opacity-50",
  quiet: "inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm font-medium text-accent hover:bg-accent-soft",
};

/** Barra de progreso fina. */
export function Bar({ pct, color = "var(--accent)", label, className = "" }: { pct: number; color?: string; label?: string; className?: string }) {
  return (
    <div
      className={`h-1.5 overflow-hidden rounded-full bg-soft ${className}`}
      role="progressbar"
      aria-valuenow={pct}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
    >
      <div className="h-full rounded-full transition-[width] duration-500" style={{ width: `${pct}%`, background: color }} />
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
export function Status({ kind, children }: { kind: "done" | "doing" | "todo"; children: React.ReactNode }) {
  const cls = kind === "done" ? "bg-ok-soft text-ok" : kind === "doing" ? "bg-signal-soft text-ink" : "bg-soft text-muted";
  return <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${cls}`}>{children}</span>;
}
