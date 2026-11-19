import { PageHeader } from "@/components/ui";
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
    <div>
      <PageHeader
        crumbs={[{ href: "/certificaciones", label: "Certificaciones" }, { label: `Autoevaluación ${unit.code}` }]}
        title={unit.name}
        en="Self-assessment"
        icon="check"
        lead={
          <>
            Unidad <span className="t-tag">{unit.code}</span> de {unit.cert}. Para cada realización profesional (lo que la norma dice que debes saber hacer),
            marca con sinceridad tu nivel hoy. Sirve para preparar la acreditación de competencias y para saber qué estudiar.
          </>
        }
      />
      <SelfAssessment unit={unit} levelTitles={levelTitles} />
    </div>
  );
}
