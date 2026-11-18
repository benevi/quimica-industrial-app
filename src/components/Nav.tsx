import Link from "next/link";

export function Nav() {
  return (
    <header className="border-b border-line bg-surface/80 backdrop-blur sticky top-0 z-10">
      <nav className="mx-auto flex max-w-4xl flex-wrap items-center gap-0.5 px-4 py-3 text-sm">
        <Link href="/" className="mr-auto flex items-center gap-2 font-semibold text-ink">
          <span aria-hidden className="grid h-7 w-7 place-items-center rounded-md bg-accent text-white">⚗</span>
          <span>Aula<span className="hidden sm:inline"> de Química</span></span>
        </Link>
        <Link href="/" className="rounded-md px-2 py-1.5 sm:px-3 text-muted hover:bg-soft hover:text-ink">Temario</Link>
        <Link href="/simulador" className="rounded-md px-2 py-1.5 sm:px-3 text-muted hover:bg-soft hover:text-ink">Simulador</Link>
        <Link href="/glosario" className="rounded-md px-2 py-1.5 sm:px-3 text-muted hover:bg-soft hover:text-ink">Glosario</Link>
        <Link href="/calculadoras" className="rounded-md px-2 py-1.5 sm:px-3 text-muted hover:bg-soft hover:text-ink">Calculadoras</Link>
        <Link href="/certificaciones" className="rounded-md px-2 py-1.5 sm:px-3 text-muted hover:bg-soft hover:text-ink">Certificaciones</Link>
        <Link href="/sap" className="rounded-md px-2 py-1.5 sm:px-3 text-muted hover:bg-soft hover:text-ink">ERP</Link>
      </nav>
    </header>
  );
}
