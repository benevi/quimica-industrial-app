import { PageHeader } from "@/components/ui";
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
    <div>
      <PageHeader
        crumbs={[
          { href: "/certificaciones", label: "Certificaciones" },
          ...(prep ? [{ href: `/certificaciones/${prep.certId}`, label: prep.title.split(" · ")[0] }] : []),
          { label: "Supuesto práctico" },
        ]}
        title={c.title}
        en="Case study"
        icon="flask"
        lead={
          unit ? (
            <>
              Supuesto práctico de <span className="t-tag">{unit.code}</span> {unit.name}.
            </>
          ) : (
            "Supuesto práctico."
          )
        }
      />
      <CaseRunner c={c} items={caseItems(c.id)} />
    </div>
  );
}
