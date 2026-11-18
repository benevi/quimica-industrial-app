import Link from "next/link";
import { notFound } from "next/navigation";
import { levels } from "@/content";
import { getUnit, units } from "@/certs/autoevaluacion";
import { SelfAssessment } from "@/components/certs/SelfAssessment";

export function generateStaticParams() {
  return units.map((u) => ({ uc: u.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ uc: string }> }) {
  const { uc } = await params;
  const u = getUnit(uc);
  return { title: u ? `Autoevaluación ${u.code} · Aula de Química` : "Autoevaluación" };
}

export default async function SelfPage({ params }: { params: Promise<{ uc: string }> }) {
  const { uc } = await params;
  const unit = getUnit(uc);
  if (!unit) notFound();
  const levelTitles = Object.fromEntries(levels.map((l) => [l.number, l.title]));
  return (
    <div className="space-y-6">
      <div>
        <Link href="/certificaciones" className="text-sm text-muted hover:text-ink">← Certificaciones</Link>
        <p className="mt-3 text-sm font-medium text-accent">Autoevaluación · {unit.cert} · {unit.code}</p>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">{unit.name}</h1>
        <p className="mt-2 max-w-2xl text-muted">
          Para cada realización profesional (lo que la norma dice que debes saber hacer), marca con sinceridad tu nivel hoy.
          Sirve para preparar la acreditación de competencias y para saber qué estudiar.
        </p>
      </div>
      <SelfAssessment unit={unit} levelTitles={levelTitles} />
    </div>
  );
}
