import { Flashcards } from "@/components/flashcards/Flashcards";

export const metadata = { title: "Tarjetas de repaso · Aula de Química" };

export default function CardsPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium text-accent">Repaso rápido · Flashcards</p>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Tarjetas de repaso</h1>
        <p className="mt-2 max-w-2xl text-muted">
          Los conceptos y las fórmulas clave del temario en tarjetas de pregunta y respuesta. Cinco minutos antes del turno bastan para que no se te olviden.
        </p>
      </div>
      <Flashcards />
    </div>
  );
}
