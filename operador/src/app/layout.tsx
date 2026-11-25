import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { fontVariables } from "@/lib/fonts";
import { TermEscape } from "@/components/TermEscape";
import { Menu } from "@op/components/Menu";
import { NOMBRE, NOMBRE_CORTO } from "@op/edicion";


export const metadata: Metadata = {
  title: { default: NOMBRE, template: `%s · ${NOMBRE_CORTO}` },
  description: "Formación para operadores de planta de principios activos: seguridad, GMP, hoja de producción y los equipos del proceso.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={fontVariables}>
      <body className="min-h-screen antialiased">
        <a href="#contenido" className="skip-link">
          Saltar al contenido
        </a>
        <TermEscape />
        <Menu />
        <div className="lg:pl-64">
          <main id="contenido" tabIndex={-1} className="mx-auto max-w-5xl px-4 py-8 outline-none sm:px-8 lg:py-10">
            {children}
          </main>
          <footer className="mx-auto max-w-5xl px-4 pb-10 text-xs leading-relaxed text-muted sm:px-8">
            Material de formación con procesos, productos y equipos ficticios. En planta manda siempre el procedimiento vigente de tu empresa. Tu progreso se
            guarda en este navegador:{" "}
            <Link href="/progreso" className="underline hover:text-ink">
              puedes hacer una copia
            </Link>
            . Imágenes:{" "}
            <Link href="/creditos" className="underline hover:text-ink">
              créditos y licencias
            </Link>
            .
          </footer>
        </div>
      </body>
    </html>
  );
}
