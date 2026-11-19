import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { CloudSyncProvider } from "@/components/CloudSync";
import type { SearchIndex } from "@/components/Search";
import { allTerms, lessons, levels } from "@/content";

export const metadata: Metadata = {
  title: "Aula de Química Industrial",
  description: "Química desde cero hasta la planta de principios activos, con GMP y ALCOA+.",
};

const searchIndex: SearchIndex = {
  lessons: lessons.map((l) => ({
    slug: l.slug,
    title: l.title,
    titleEn: l.titleEn,
    summary: l.summary,
    level: l.level,
    levelTitle: levels.find((lv) => lv.number === l.level)?.title ?? "",
  })),
  terms: allTerms.map((t) => ({ es: t.es, en: t.en, def: t.def, lesson: t.lesson, lessonTitle: t.lessonTitle })),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className="min-h-screen antialiased">
        <CloudSyncProvider>
          <Nav index={searchIndex} />
          <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
        </CloudSyncProvider>
        <footer className="mx-auto max-w-6xl px-4 pb-10 text-xs text-muted">
          Material de estudio con ejemplos ficticios. En planta manda siempre el procedimiento vigente de tu empresa.{" "}
          Tu progreso se guarda en este navegador:{" "}
          <Link href="/progreso" className="underline hover:text-ink">
            guárdalo en la nube o haz una copia
          </Link>
          . Imágenes y vídeos:{" "}
          <Link href="/creditos" className="underline hover:text-ink">
            créditos y licencias
          </Link>
          .
        </footer>
      </body>
    </html>
  );
}
