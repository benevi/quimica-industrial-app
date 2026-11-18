import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Aula de Química Industrial",
  description: "Química desde cero hasta la planta de principios activos, con GMP y ALCOA+.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className="min-h-screen antialiased">
        <Nav />
        <main className="mx-auto max-w-4xl px-4 py-8">{children}</main>
        <footer className="mx-auto max-w-4xl px-4 pb-10 text-xs text-muted">
          Material de estudio con ejemplos ficticios. En planta manda siempre el procedimiento vigente de tu empresa.
        </footer>
      </body>
    </html>
  );
}
