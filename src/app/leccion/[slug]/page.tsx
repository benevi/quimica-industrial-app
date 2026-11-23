import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getLesson, lessons, lessonsOfLevel } from "@/content";
import { LessonCrumbs, LessonPager } from "@/components/course/LessonNav";
import { levelInfo } from "@/content/blocks";
import { Markdown } from "@/components/Markdown";
import { Quiz } from "@/components/Quiz";
import { LessonSidebar } from "@/components/LessonSidebar";
import { stepsFor, type lessonSteps } from "@/components/lessonSteps";
import { LessonMedia } from "@/components/LessonMedia";
import { practicas } from "@/content/practica";
import { GENERADORES } from "@/problemas/generadores";
import { mediaFor } from "@/content/media";
import { Icon } from "@/components/icons";

export function generateStaticParams() {
  return lessons.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const l = getLesson(slug);
  return { title: l ? `${l.title} · Aula de Química` : "Lección" };
}

export default async function LessonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) notFound();
  const level = levelInfo(lesson.level);
  const siblings = lessonsOfLevel(lesson.level);
  const pos = siblings.findIndex((l) => l.slug === slug) + 1;
  const media = mediaFor(slug);
  const steps = stepsFor(!!media);
  const step = (id: string) => ({ n: steps.findIndex((s) => s.id === id), s: steps.find((s) => s.id === id)! });

  return (
    <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_13rem]">
      <article className="min-w-0 max-w-3xl space-y-6">
        <Suspense fallback={<div className="h-5" />}>
          <LessonCrumbs slug={slug} />
        </Suspense>

        <header>
          <p className="text-sm text-muted">
            Nivel {level.number}, lección {pos} de {siblings.length} <span aria-hidden>·</span> {lesson.minutes} min
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
            Las palabras con <span className="term" style={{ cursor: "default" }}>subrayado de puntos</span> muestran su definición al pasar el ratón.
          </p>
        </Section>

        {media && (
          <Section id="ver" {...step("ver")} title="Imágenes y vídeos" en="See it">
            <LessonMedia media={media} />
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

        {practicas[lesson.slug] && (
          <section aria-labelledby="practica-h" className="rounded-[var(--radius)] border border-line bg-surface px-5 py-5 sm:px-6">
            <h2 id="practica-h" className="mb-3 flex flex-wrap items-baseline gap-x-2.5">
              <span className="t-h2">Practícalo en el simulador</span>
              <span lang="en" className="text-sm text-muted">
                Hands-on practice
              </span>
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {practicas[lesson.slug].map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="block rounded-[var(--radius)] border border-line bg-surface p-4 hover:border-accent">
                    <span className="font-medium text-accent">{p.label}</span>
                    <span className="mt-1 block text-sm text-muted">{p.detalle}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {GENERADORES.some((g) => g.leccion === lesson.slug) && (
          <section aria-labelledby="problemas-h" className="rounded-[var(--radius)] border border-line bg-surface px-5 py-5 sm:px-6">
            <h2 id="problemas-h" className="mb-3 flex flex-wrap items-baseline gap-x-2.5">
              <span className="t-h2">Problemas para practicar</span>
              <span lang="en" className="text-sm text-muted">
                Practice problems
              </span>
            </h2>
            <p className="mb-3 text-sm text-muted">Con números nuevos cada vez y la solución paso a paso.</p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {GENERADORES.filter((g) => g.leccion === lesson.slug).map((g) => (
                <li key={g.id}>
                  <Link href={`/problemas?tema=${g.id}`} className="block rounded-[var(--radius)] border border-line bg-surface p-4 hover:border-accent">
                    <span className="font-medium text-accent">{g.titulo}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <div id="test">
          <Suspense fallback={null}>
            <Quiz slug={lesson.slug} questions={lesson.quiz} />
          </Suspense>
        </div>

        <Suspense fallback={null}>
          <LessonPager slug={slug} />
        </Suspense>
      </article>

      <aside className="hidden xl:block">
        <LessonSidebar
          slug={slug}
          level={lesson.level}
          levelTitle={level.title}
          siblings={siblings.map((s) => ({ slug: s.slug, title: s.title }))}
          hasMedia={!!media}
        />
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
    <section id={id} className="overflow-hidden rounded-[var(--radius)] border border-line bg-surface">
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
      <div className={`px-5 pb-6 pt-4 sm:px-6`}>
        {children}
      </div>
    </section>
  );
}
