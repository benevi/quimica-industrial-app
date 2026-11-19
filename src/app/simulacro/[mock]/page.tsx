import { PageHeader } from "@/components/ui";
import { notFound } from "next/navigation";
import { casesForUnits } from "@/certs/casos";
import { caseItems, unitPool } from "@/certs/pool";
import { allMocks, getMock } from "@/certs/prep";
import { MockRunner } from "@/components/certs/MockRunner";

export function generateStaticParams() {
  return allMocks.map(({ mock }) => ({ mock: mock.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ mock: string }> }) {
  const { mock } = await params;
  const f = getMock(mock);
  return { title: f ? `${f.mock.title} · Aula de Química` : "Simulacro" };
}

export default async function MockPage({ params }: { params: Promise<{ mock: string }> }) {
  const { mock: id } = await params;
  const found = getMock(id);
  if (!found) notFound();
  const { prep, mock } = found;
  const pools = Object.fromEntries(mock.units.map((u) => [u, unitPool(u)]));
  const caseList = mock.cases ? casesForUnits(mock.units).map((c) => ({ c, items: caseItems(c.id) })) : [];
  return (
    <div>
      <PageHeader
        crumbs={[
          { href: "/certificaciones", label: "Certificaciones" },
          { href: `/certificaciones/${prep.certId}`, label: prep.title.split(" · ")[0] },
          { label: "Simulacro" },
        ]}
        title={mock.title}
        en="Mock exam"
        icon="quiz"
        lead="Simulacro con el formato del examen: lee las condiciones y empieza cuando estés listo."
      />
      <MockRunner mock={mock} certId={prep.certId} pools={pools} caseList={caseList} />
    </div>
  );
}
