import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { Sidebar } from "@/components/shell/Sidebar";
import { CloudSyncProvider } from "@/components/CloudSync";
import type { SearchIndex } from "@/components/Search";
import { allTerms, lessons, levels } from "@/content";

const plex = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-plex", display: "swap" });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-plex-mono", display: "swap" });

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
    <html lang="es" className={`${plex.variable} ${plexMono.variable}`}>
      <body className="min-h-screen antialiased">
        <CloudSyncProvider>
          <Sidebar index={searchIndex} />
          <div className="lg:pl-64">
            <main className="mx-auto max-w-5xl px-4 py-8 sm:px-8 lg:py-10">{children}</main>
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
