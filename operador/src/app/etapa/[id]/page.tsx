import Link from "next/link";
import { notFound } from "next/navigation";
import { Markdown } from "@/components/Markdown";
import { Icon } from "@/components/icons";
import { Card, PageHeader, SectionTitle, btn } from "@/components/ui";
import { etapas, getEtapa } from "@op/edicion";
import { etapaBreve, horas } from "@op/datos";
import { Figura } from "@op/components/Figura";
import { BotonEtapa, ListaLecciones } from "@op/components/ListaLecciones";

export function generateStaticParams() {
  return etapas.map((e) => ({ id: e.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return { title: getEtapa(id)?.title ?? "Etapa" };
}

export default async function EtapaPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const e = getEtapa(id);
  if (!e) notFound();
  const i = etapas.indexOf(e);
  const b = etapaBreve(e);
  const min = b.lecciones.reduce((m, l) => m + l.minutes, 0);
  const prev = etapas[i - 1];
  const next = etapas[i + 1];

  return (
    <div className="space-y-10">
      <PageHeader
        crumbs={[{ href: "/", label: "Hoy" }, { label: `Etapa ${i + 1} de ${etapas.length}` }]}
        title={e.title}
        en={e.titleEn}
        icon={e.icon}
        lead={
          <>
            {e.resumen} {b.lecciones.length} {b.lecciones.length === 1 ? "lección" : "lecciones"},{" "}
            {min < 90 ? `unos ${min} minutos` : `unas ${horas(min)} horas`}.
          </>
        }
        actions={<BotonEtapa lecciones={b.lecciones} />}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {e.images.map((id, k) => (
          <Figura key={id} id={id} prioridad={k === 0} />
        ))}
      </div>

      <section aria-labelledby="proceso-h">
        <SectionTitle id="proceso-h" en="Where it fits">
          Dónde encaja en el proceso
        </SectionTitle>
        <div className="max-w-[68ch]">
          <Markdown>{e.proceso}</Markdown>
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <Card as="section" className="px-5 py-5 sm:px-6">
          <h2 className="mb-3 flex flex-wrap items-center gap-2.5">
            <span className="bubble h-8 w-8 text-accent">
              <Icon name="wrench" className="h-4 w-4" />
            </span>
            <span className="t-h3">Qué haces tú</span>
            <span lang="en" className="text-sm text-muted">
              Your tasks
            </span>
          </h2>
          <div className="text-[15px]">
            <Markdown>{e.haces.map((h) => `- ${h}`).join("\n")}</Markdown>
          </div>
        </Card>
        <Card as="section" className="px-5 py-5 sm:px-6">
          <h2 className="mb-3 flex flex-wrap items-center gap-2.5 border-b border-dashed border-line-strong pb-3">
            <span className="bubble h-8 w-8 text-accent">
              <Icon name="sheet" className="h-4 w-4" />
            </span>
            <span className="t-h3">Qué registras en la hoja</span>
            <span lang="en" className="text-sm text-muted">
              In the batch record
            </span>
          </h2>
          <div className="text-[15px]">
            <Markdown>{e.hoja.map((h) => `- ${h}`).join("\n")}</Markdown>
          </div>
        </Card>
      </div>

      <section aria-labelledby="lecciones-h">
        <SectionTitle id="lecciones-h" en="Lessons">
          Lecciones
        </SectionTitle>
        <ListaLecciones lecciones={b.lecciones} />
      </section>

      {b.ampliacion.length > 0 && (
        <section aria-labelledby="ampliacion-h">
          <SectionTitle id="ampliacion-h" en="Going further" aside="Más largas y con más detalle. No hacen falta para terminar la formación.">
            Para ampliar
          </SectionTitle>
          <ListaLecciones lecciones={b.ampliacion} numeradas={false} />
        </section>
      )}

      <nav aria-label="Otras etapas" className="flex flex-wrap justify-between gap-3 border-t border-line pt-6">
        {prev ? (
          <Link href={`/etapa/${prev.id}`} className={btn.secondary}>
            <Icon name="back" className="h-4 w-4" />
            Etapa {i}: {prev.corto}
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link href={`/etapa/${next.id}`} className={btn.secondary}>
            Etapa {i + 2}: {next.corto}
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        )}
      </nav>
    </div>
  );
}
