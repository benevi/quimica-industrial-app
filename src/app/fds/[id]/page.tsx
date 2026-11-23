import Link from "next/link";
import { notFound } from "next/navigation";
import { fdsItems } from "@/certs/fdsPool";
import { getSds, sdsList, sdsSections } from "@/content/fds";
import { Icon } from "@/components/icons";
import { Markdown } from "@/components/Markdown";
import { FdsQuiz } from "@/components/fds/FdsQuiz";
import { SdsLabel } from "@/components/fds/SdsLabel";
import { Card, Disclosure, PageHeader, SectionTitle, btn } from "@/components/ui";

export function generateStaticParams() {
  return sdsList.map((s) => ({ id: s.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return { title: `FDS ${getSds(id)?.product ?? ""} · Aula de Química` };
}

export default async function SdsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const sds = getSds(id);
  if (!sds) notFound();
  const i = sdsList.indexOf(sds);
  const next = sdsList[(i + 1) % sdsList.length];

  return (
    <div className="space-y-10">
      <PageHeader
        crumbs={[{ href: "/", label: "Hoy" }, { href: "/fds", label: "Fichas de seguridad" }, { label: sds.product }]}
        title={sds.product}
        en="Safety Data Sheet (SDS)"
        icon="hazard"
        lead={
          <>
            <p className="text-ink">{sds.substance}</p>
            <p className="mt-1 text-sm">Ficha de datos de seguridad ficticia, para formación.</p>
          </>
        }
      />

      <div className="grid gap-4 lg:grid-cols-[1.1fr_1fr]">
        <SdsLabel sds={sds} />
        <Card className="p-5">
          <h2 className="t-h3">Lo que tienes que sacar de esta ficha</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed">
            {sds.keyPoints.map((k) => (
              <li key={k}>{k}</li>
            ))}
          </ul>
        </Card>
      </div>

      <section aria-labelledby="secciones-h">
        <SectionTitle id="secciones-h" aside="Abiertas: 2, 7 y 8, las que más vas a usar">
          Las 16 secciones
        </SectionTitle>
        <div className="space-y-2">
          {sdsSections.map((s, k) => (
            <Disclosure
              key={s.n}
              defaultOpen={[2, 7, 8].includes(s.n)}
              summary={
                <span className="flex items-baseline gap-3">
                  <span className="w-6 shrink-0 font-mono text-sm tabular-nums text-muted">{s.n}</span>
                  <span className="font-medium">
                    {s.title}{" "}
                    <span lang="en" className="text-sm font-normal text-muted">
                      · {s.en}
                    </span>
                  </span>
                </span>
              }
            >
              <div className="max-w-[68ch] text-sm">
                <Markdown>{sds.sections[k]}</Markdown>
              </div>
            </Disclosure>
          ))}
        </div>
      </section>

      <FdsQuiz quizId={sds.id} items={fdsItems(sds.id)} title="Comprueba que la has entendido" />

      <nav aria-label="Otras fichas" className="flex flex-wrap justify-between gap-3">
        <Link href="/fds" className={btn.secondary}>
          <Icon name="back" className="h-4 w-4" />
          Todas las fichas
        </Link>
        <Link href={`/fds/${next.id}`} className={btn.secondary}>
          Siguiente ficha: {next.product}
          <Icon name="arrow" className="h-4 w-4" />
        </Link>
      </nav>
    </div>
  );
}
