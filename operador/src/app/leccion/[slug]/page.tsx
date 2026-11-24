import Link from "next/link";
import { notFound } from "next/navigation";
import { Markdown } from "@/components/Markdown";
import { QuizCore } from "@/components/Quiz";
import { LessonImages } from "@/components/LessonImages";
import { stepsFor, type lessonSteps } from "@/components/lessonSteps";
import { Icon } from "@/components/icons";
import { Breadcrumbs, btn } from "@/components/ui";
import { etapaDe, recorrido, todasLasLecciones } from "@op/edicion";
import { getLeccion, mediaDe, videosDe } from "@op/lecciones";
import { breve } from "@op/datos";
import { AsideEtapa } from "@op/components/AsideEtapa";
import { EnlacesVideo } from "@op/components/EnlacesVideo";

export function generateStaticParams() {
  return todasLasLecciones.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return { title: getLeccion(slug)?.title ?? "Lección" };
}

/** Anterior y siguiente: el recorrido básico en orden; las de ampliación, entre las de ampliación de su etapa. */
function vecinas(slug: string, lista: string[]) {
  const i = lista.indexOf(slug);
  return { prev: i > 0 ? breve(lista[i - 1]) : undefined, next: i >= 0 && i < lista.length - 1 ? breve(lista[i + 1]) : undefined };
}

export default async function LeccionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lesson = getLeccion(slug);
  const donde = etapaDe(slug);
  if (!lesson || !donde) notFound();
  const { etapa, n, ampliacion } = donde;
  const lista = ampliacion ? etapa.ampliacion! : etapa.lecciones;
  const { prev, next } = vecinas(slug, ampliacion ? lista : recorrido);
  const media = mediaDe(slug);
  const videos = videosDe(slug);
  const verTitulo = media && videos.length ? "Imágenes y vídeos" : videos.length ? "Vídeos" : "Imágenes";
  const steps = stepsFor(!!media || videos.length > 0).map((s) => (s.id === "ver" ? { ...s, label: verTitulo } : s));
  const step = (id: string) => ({ n: steps.findIndex((s) => s.id === id), s: steps.find((s) => s.id === id)! });
  const etapaHref = `/etapa/${etapa.id}`;

  return (
    <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_13rem]">
      <article className="min-w-0 max-w-3xl space-y-6">
        <Breadcrumbs items={[{ href: "/", label: "Hoy" }, { href: etapaHref, label: `Etapa ${n}: ${etapa.corto}` }, { label: lesson.title }]} />

        <header>
          <p className="text-sm text-muted">
            {ampliacion ? "Lección de ampliación" : `Lección ${lista.indexOf(slug) + 1} de ${lista.length}`} <span aria-hidden>·</span> {lesson.minutes} min
          </p>
          <h1 className="t-h1 mt-1">{lesson.title}</h1>
          <p lang="en" className="text-muted">
            {lesson.titleEn}
          </p>
        </header>

        <section className="rounded-[var(--radius)] bg-soft px-5 py-4">
          <p className="text-sm font-medium text-muted">En 30 segundos</p>
          <p className="mt-1 text-lg leading-snug">{lesson.summary}</p>
          {lesson.terms.length > 0 && (
            <p className="mt-3 flex flex-wrap items-center gap-1.5 text-sm">
              <span className="mr-1 text-muted">Palabras clave:</span>
              {lesson.terms.map((t) => (
                <a
                  key={t.es}
                  href="#vocabulario"
                  className="rounded-full border border-line bg-surface px-2.5 py-0.5 hover:border-accent"
                  title={`${t.en}: ${t.def}`}
                >
                  {t.es}
                </a>
              ))}
            </p>
          )}
        </section>

        <Section id="idea" {...step("idea")} title="Idea clave" en="Key concept">
          <Markdown terms={lesson.terms}>{lesson.body}</Markdown>
          <p className="mt-5 text-xs text-muted">
            Las palabras con{" "}
            <span className="term" style={{ cursor: "default" }}>
              subrayado de puntos
            </span>{" "}
            muestran su definición al pasar el ratón.
          </p>
        </Section>

        {(media || videos.length > 0) && (
          <Section id="ver" {...step("ver")} title={verTitulo} en="See it">
            <div className="space-y-6">
              {videos.length > 0 && <EnlacesVideo videos={videos} />}
              {media && <LessonImages media={media} />}
            </div>
          </Section>
        )}

        <Section id="planta" {...step("planta")} title="Ejemplo de planta" en="Plant example">
          <Markdown>{lesson.plant}</Markdown>
        </Section>

        <Section id="hoja" {...step("hoja")} title="¿Qué verías en la hoja de producción?" en="In the batch record" sheet>
          <Markdown>{lesson.batchRecord}</Markdown>
        </Section>

        <Section id="vocabulario" {...step("vocabulario")} title="Vocabulario" en="Vocabulary">
          <dl className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {lesson.terms.map((t) => (
              <div key={t.es} className="border-l-2 border-line pl-3">
                <dt>
                  <span className="font-medium">{t.es}</span>
                  <span lang="en" className="ml-2 text-sm text-accent">
                    {t.en}
                  </span>
                </dt>
                <dd className="mt-0.5 text-sm text-muted">{t.def}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <div id="test">
          <QuizCore slug={slug} questions={lesson.quiz} next={next && { href: `/leccion/${next.slug}`, title: next.title }} />
        </div>

        <nav aria-label="Otras lecciones" className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6">
          {prev ? (
            <Link href={`/leccion/${prev.slug}`} className={btn.secondary}>
              <Icon name="back" className="h-4 w-4" />
              <span className="max-w-[16rem] truncate">{prev.title}</span>
            </Link>
          ) : (
            <span />
          )}
          <Link href={etapaHref} className={btn.quiet}>
            Volver a la etapa
          </Link>
          {next ? (
            <Link href={`/leccion/${next.slug}`} className={btn.secondary}>
              <span className="max-w-[16rem] truncate">{next.title}</span>
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </article>

      <aside className="hidden xl:block">
        <AsideEtapa slug={slug} etapa={`Etapa ${n}: ${etapa.corto}`} href={etapaHref} lecciones={lista.map(breve)} />
      </aside>
    </div>
  );
}

function Section({
  id,
  n,
  s,
  title,
  en,
  sheet,
  children,
}: {
  id: string;
  n: number;
  s: (typeof lessonSteps)[number];
  title: string;
  en: string;
  sheet?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 overflow-hidden rounded-[var(--radius)] border border-line bg-surface">
      <h2 className={`flex flex-wrap items-center gap-x-2.5 gap-y-1 px-5 pt-5 sm:px-6 ${sheet ? "border-b border-dashed border-line-strong pb-4" : ""}`}>
        <span className="grid h-7 w-7 place-items-center rounded-md bg-accent-soft text-accent">
          <Icon name={s.icon} className="h-4 w-4" />
        </span>
        <span className="text-sm tabular-nums text-muted">{n + 1}</span>
        <span className="t-h2">{title}</span>
        <span lang="en" className="text-sm text-muted">
          {en}
        </span>
      </h2>
      <div className="px-5 pb-6 pt-4 sm:px-6">{children}</div>
    </section>
  );
}
