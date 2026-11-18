import Link from "next/link";
import { notFound } from "next/navigation";
import { cases, getCase } from "@/certs/casos";
import { caseItems } from "@/certs/pool";
import { preps } from "@/certs/prep";
import { CaseRunner } from "@/components/certs/CaseRunner";

export function generateStaticParams() {
  return cases.map((c) => ({ caso: c.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ caso: string }> }) {
  const { caso } = await params;
  const c = getCase(caso);
  return { title: c ? `Supuesto: ${c.title} · Aula de Química` : "Supuesto práctico" };
}

export default async function CasePage({ params }: { params: Promise<{ caso: string }> }) {
  const { caso } = await params;
  const c = getCase(caso);
  if (!c) notFound();
  const prep = preps.find((p) => p.units.some((u) => u.key === c.unit));
  const unit = prep?.units.find((u) => u.key === c.unit);
  return (
    <div className="space-y-6">
      <div>
        {prep && (
          <Link href={`/certificaciones/${prep.certId}`} className="text-sm text-muted hover:text-ink">
            ← {prep.title}
          </Link>
        )}
        <p className="mt-3 text-sm font-medium text-accent">Supuesto práctico{unit ? ` · ${unit.code} ${unit.name}` : ""}</p>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">{c.title}</h1>
      </div>
      <CaseRunner c={c} items={caseItems(c.id)} />
    </div>
  );
}
