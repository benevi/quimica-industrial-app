import Link from "next/link";
import { prepIds, questionById, type PoolItem } from "@/certs/pool";
import { preps } from "@/certs/prep";
import { ReviewRunner } from "@/components/certs/ReviewRunner";

export const metadata = { title: "Repaso de fallos · Aula de Química" };

export default function ReviewPage() {
  const items: Record<string, PoolItem> = {};
  for (const p of preps) for (const id of prepIds(p)) {
    const it = questionById(id);
    if (it) items[id] = it;
  }
  return (
    <div className="space-y-6">
      <div>
        <Link href="/certificaciones" className="text-sm text-muted hover:text-ink">← Certificaciones</Link>
        <p className="mt-3 text-sm font-medium text-accent">Repetición espaciada · Spaced repetition</p>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Repaso de fallos</h1>
        <p className="mt-2 max-w-2xl text-muted">Unos minutos al día con lo que has fallado. Es la forma más eficaz de que no se te olvide antes del examen.</p>
      </div>
      <ReviewRunner items={items} />
    </div>
  );
}
