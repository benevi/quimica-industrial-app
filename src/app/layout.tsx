import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { fontVariables } from "@/lib/fonts";
import { Sidebar } from "@/components/shell/Sidebar";
import { CloudSyncProvider } from "@/components/CloudSync";
import { TermEscape } from "@/components/TermEscape";


export const metadata: Metadata = {
  title: "Aula de Química Industrial",
  description: "Química desde cero hasta la planta de principios activos, con GMP y ALCOA+.",
};


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={fontVariables}>
      <body className="min-h-screen antialiased">
        <a href="#contenido" className="skip-link">
          Saltar al contenido
        </a>
        <TermEscape />
        <CloudSyncProvider>
          <Sidebar />
          <div className="lg:pl-64">
            <main id="contenido" tabIndex={-1} className="mx-auto max-w-5xl px-4 py-8 outline-none sm:px-8 lg:py-10">{children}</main>
            <footer className="mx-auto max-w-5xl px-4 pb-10 text-xs leading-relaxed text-muted sm:px-8">
              Material de estudio con ejemplos ficticios. En planta manda siempre el procedimiento vigente de tu empresa. Tu progreso se
              guarda en este navegador: puedes{" "}
              <Link href="/progreso" className="underline hover:text-ink">
                guardarlo en la nube o hacer una copia
              </Link>
              . Imágenes y vídeos:{" "}
              <Link href="/creditos" className="underline hover:text-ink">
                créditos y licencias
              </Link>
              .
            </footer>
          </div>
        </CloudSyncProvider>
      </body>
    </html>
  );
}
