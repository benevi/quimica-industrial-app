import { PageHeader } from "@/components/ui";
import { lessons } from "@/content/catalog";
import { cards, decks } from "@/content/tarjetas";
import { getLeccion } from "@op/lecciones";
import { FlashcardsBase } from "@/components/flashcards/FlashcardsBase";
import { todasLasLecciones } from "@op/edicion";

export const metadata = { title: "Tarjetas de repaso" };

const enEdicion = new Set(todasLasLecciones);

export default function TarjetasPage() {
  // Solo las tarjetas de lecciones de esta edición, y los mazos que tienen alguna
  const mias = cards.filter((c) => c.lesson && enEdicion.has(c.lesson));
  const mazos = decks.filter((d) => mias.some((c) => c.deck === d.id));
  return (
    <div>
      <PageHeader
        crumbs={[{ href: "/", label: "Hoy" }, { label: "Tarjetas de repaso" }]}
        title="Tarjetas de repaso"
        en="Flashcards"
        icon="cards"
        lead="Cinco minutos antes del turno: fórmulas de la hoja, unidades, equipos, seguridad y GMP. Las que no sabes vuelven antes; las que sabes, cada vez más tarde."
      />
      <FlashcardsBase
        cards={mias}
        decks={mazos}
        lessons={lessons.filter((l) => enEdicion.has(l.slug))}
        vocab={Object.fromEntries(todasLasLecciones.map((s) => [s, getLeccion(s)?.terms ?? []]))}
      />
    </div>
  );
}
