import Link from "next/link";
import { notFound } from "next/navigation";
import { fdsItems } from "@/certs/pool";
import { getSds, sdsList, sdsSections } from "@/content/fds";
import { Markdown } from "@/components/Markdown";
import { FdsQuiz } from "@/components/fds/FdsQuiz";
import { SdsLabel } from "@/components/fds/SdsLabel";

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
    <div className="space-y-8">
      <div>
        <Link href="/fds" className="text-sm text-muted hover:text-ink">← Fichas de seguridad</Link>
        <p className="mt-3 text-sm font-medium text-accent">Ficha de datos de seguridad · ficticia, para formación</p>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">{sds.product}</h1>
        <p className="mt-1 text-muted">{sds.substance}</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.1fr_1fr]">
        <SdsLabel sds={sds} />
        <div className="rounded-2xl border-2 border-accent bg-accent-soft p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">Lo que tienes que sacar de esta ficha</p>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-sm">
            {sds.keyPoints.map((k) => (
              <li key={k}>{k}</li>
            ))}
          </ul>
        </div>
      </div>

      <section aria-labelledby="secciones-h" className="space-y-2">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 id="secciones-h" className="text-xl font-semibold">Las 16 secciones</h2>
          <p className="text-xs text-muted">Abiertas: 2, 7 y 8, las que más vas a usar</p>
        </div>
        {sdsSections.map((s, k) => (
          <details key={s.n} open={[2, 7, 8].includes(s.n)} className="group rounded-xl border border-line bg-surface">
            <summary className="flex cursor-pointer list-none items-baseline gap-3 px-4 py-3 hover:bg-soft">
              <span className="w-6 shrink-0 font-semibold tabular-nums text-accent">{s.n}</span>
              <span className="font-medium">
                {s.title} <span className="text-xs font-normal text-muted">· {s.en}</span>
              </span>
              <span className="ml-auto text-muted transition group-open:rotate-90" aria-hidden>›</span>
            </summary>
            <div className="prose-sm border-t border-line px-4 py-3 text-sm">
              <Markdown>{sds.sections[k]}</Markdown>
            </div>
          </details>
        ))}
      </section>

      <FdsQuiz quizId={sds.id} items={fdsItems(sds.id)} title="Comprueba que la has entendido" />

      <div className="flex flex-wrap justify-between gap-3 text-sm">
        <Link href="/fds" className="rounded-xl border border-line bg-surface px-4 py-3 hover:border-accent">← Todas las fichas</Link>
        <Link href={`/fds/${next.id}`} className="rounded-xl border border-line bg-surface px-4 py-3 text-right hover:border-accent">
          Siguiente ficha: {next.product} →
        </Link>
      </div>
    </div>
  );
}
