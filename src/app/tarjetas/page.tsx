import { Flashcards } from "@/components/flashcards/Flashcards";
import { PageHeader } from "@/components/ui";

export const metadata = { title: "Tarjetas de repaso · Aula de Química" };

export default function CardsPage() {
  return (
    <div>
      <PageHeader
        crumbs={[{ href: "/", label: "Hoy" }, { label: "Tarjetas de repaso" }]}
        title="Tarjetas de repaso"
        en="Flashcards"
        icon="cards"
        lead="Los conceptos y las fórmulas clave del temario en tarjetas de pregunta y respuesta. Cinco minutos antes del turno bastan para que no se te olviden."
      />
      <Flashcards />
    </div>
  );
}
