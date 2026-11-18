import Link from "next/link";
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
    <div className="space-y-6">
      <div>
        <Link href={`/certificaciones/${prep.certId}`} className="text-sm text-muted hover:text-ink">
          ← {prep.title}
        </Link>
        <p className="mt-3 text-sm font-medium text-accent">Simulacro con formato de examen</p>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">{mock.title}</h1>
      </div>
      <MockRunner mock={mock} certId={prep.certId} pools={pools} caseList={caseList} />
    </div>
  );
}
