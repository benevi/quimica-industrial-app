import { allFdsItems, prepIds, questionById, type PoolItem } from "@/certs/pool";
import { preps } from "@/certs/prep";
import { ReviewRunner } from "@/components/certs/ReviewRunner";
import { CardsDueNote } from "@/components/flashcards/CardsDueNote";
import { PageHeader } from "@/components/ui";

export const metadata = { title: "Repaso de fallos · Aula de Química" };

export default function ReviewPage() {
  const items: Record<string, PoolItem> = {};
  for (const p of preps) for (const id of prepIds(p)) {
    const it = questionById(id);
    if (it) items[id] = it;
  }
  for (const it of allFdsItems()) items[it.id] = it;
  return (
    <div className="space-y-6">
      <PageHeader
        crumbs={[{ href: "/", label: "Hoy" }, { href: "/tarjetas", label: "Tarjetas de repaso" }, { label: "Repaso de fallos" }]}
        title="Repaso de fallos"
        en="Spaced repetition"
        icon="cards"
        lead="Unos minutos al día con lo que has fallado. Es la forma más eficaz de que no se te olvide antes del examen."
      />
      <ReviewRunner items={items} />
      <CardsDueNote />
    </div>
  );
}
