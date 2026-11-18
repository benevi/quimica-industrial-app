import Link from "next/link";
import { notFound } from "next/navigation";
import { getLesson, lessons, lessonsOfLevel, nextLesson } from "@/content";
import { blockColor, blockOfLevel, levelInfo } from "@/content/blocks";
import { Markdown } from "@/components/Markdown";
import { Quiz } from "@/components/Quiz";
import { LessonSidebar } from "@/components/LessonSidebar";
import { lessonSteps } from "@/components/lessonSteps";
import { Icon, levelIcon } from "@/components/icons";

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
  const block = blockOfLevel(lesson.level);
  const c = blockColor[block.id];
  const siblings = lessonsOfLevel(lesson.level);
  const pos = siblings.findIndex((l) => l.slug === slug) + 1;
  const next = nextLesson(slug);
  const i = lessons.findIndex((l) => l.slug === slug);
  const prev = i > 0 ? lessons[i - 1] : undefined;
  const step = (id: string) => lessonSteps.findIndex((s) => s.id === id);

  return (
    <div className="grid gap-8 lg:grid-cols-[15rem_minmax(0,1fr)]">
      <aside className="order-2 lg:order-1">
        <LessonSidebar
          slug={slug}
          level={lesson.level}
          levelTitle={level.title}
          color={c.fg}
          siblings={siblings.map((s) => ({ slug: s.slug, title: s.title }))}
        />
      </aside>

      <article className="order-1 min-w-0 max-w-3xl space-y-6 lg:order-2">
        <nav aria-label="Ruta de navegación" className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
          <Link href="/#ruta" className="hover:text-ink">Ruta</Link>
          <span aria-hidden>›</span>
          <span style={{ color: c.fg }}>Bloque {block.n}. {block.title}</span>
          <span aria-hidden>›</span>
          <Link href={`/nivel/${level.number}`} className="hover:text-ink">Nivel {level.number}. {level.title}</Link>
        </nav>

        <header className="flex gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl" style={{ background: c.soft, color: c.fg }}>
            <Icon name={levelIcon[lesson.level]} className="h-7 w-7" />
          </span>
          <div>
            <p className="text-sm font-medium" style={{ color: c.fg }}>
              Lección {pos} de {siblings.length}
            </p>
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">{lesson.title}</h1>
            <p className="text-muted">
              <span lang="en">{lesson.titleEn}</span> · {lesson.minutes} min
            </p>
          </div>
        </header>

        <section className="rounded-2xl border-l-4 bg-surface p-5" style={{ borderColor: c.fg }}>
          <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: c.fg }}>En 30 segundos</p>
          <p className="mt-1 text-lg leading-snug">{lesson.summary}</p>
          {lesson.terms.length > 0 && (
            <div className="mt-3 flex flex-wrap items-center gap-1.5 text-sm">
              <span className="mr-1 text-muted">Palabras clave:</span>
              {lesson.terms.map((t) => (
                <a key={t.es} href="#vocabulario" className="rounded-full border border-line bg-bg px-2.5 py-0.5 hover:border-accent" title={`${t.en}: ${t.def}`}>
                  {t.es}
                </a>
              ))}
            </div>
          )}
          <p className="mt-3 text-xs text-muted">
            Consejo: las palabras <span className="term" style={{ cursor: "default" }}>subrayadas</span> de la idea clave muestran su definición al pasar el ratón.
          </p>
        </section>

        <Section id="idea" n={step("idea")} title="Idea clave" en="Key concept">
          <Markdown terms={lesson.terms}>{lesson.body}</Markdown>
        </Section>

        <Section id="planta" n={step("planta")} title="Ejemplo de planta" en="Plant example" tone="accent">
          <Markdown>{lesson.plant}</Markdown>
        </Section>

        <Section id="hoja" n={step("hoja")} title="¿Qué verías en la hoja de producción?" en="In the batch record" tone="warn">
          <Markdown>{lesson.batchRecord}</Markdown>
        </Section>

        <Section id="vocabulario" n={step("vocabulario")} title="Vocabulario" en="Vocabulary">
          <dl className="grid gap-2 sm:grid-cols-2">
            {lesson.terms.map((t) => (
              <div key={t.es} className="rounded-xl border border-line bg-bg p-3">
                <dt>
                  <span className="font-semibold">{t.es}</span>
                  <span lang="en" className="ml-2 text-sm text-accent">{t.en}</span>
                </dt>
                <dd className="mt-0.5 text-sm text-muted">{t.def}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <div id="test">
          <Quiz slug={lesson.slug} questions={lesson.quiz} nextSlug={next?.slug} nextTitle={next?.title} />
        </div>

        <nav aria-label="Lecciones" className="grid gap-3 border-t border-line pt-6 sm:grid-cols-2">
          {prev ? (
            <Link href={`/leccion/${prev.slug}`} className="rounded-xl border border-line bg-surface p-4 hover:border-accent">
              <span className="flex items-center gap-1 text-xs text-muted"><Icon name="back" className="h-3.5 w-3.5" /> Anterior</span>
              <span className="mt-1 block font-medium">{prev.title}</span>
            </Link>
          ) : <span />}
          {next && (
            <Link href={`/leccion/${next.slug}`} className="rounded-xl border border-line bg-surface p-4 text-right hover:border-accent">
              <span className="flex items-center justify-end gap-1 text-xs text-muted">
                {next.level !== lesson.level ? `Siguiente nivel: ${levelInfo(next.level).title}` : "Siguiente"} <Icon name="arrow" className="h-3.5 w-3.5" />
              </span>
              <span className="mt-1 block font-medium">{next.title}</span>
            </Link>
          )}
        </nav>
      </article>
    </div>
  );
}

function Section({
  id,
  n,
  title,
  en,
  tone,
  children,
}: {
  id: string;
  n: number;
  title: string;
  en: string;
  tone?: "accent" | "warn";
  children: React.ReactNode;
}) {
  const bg = tone === "accent" ? "bg-accent-soft" : tone === "warn" ? "bg-warn-soft" : "bg-surface";
  const s = lessonSteps[n];
  return (
    <section id={id} className={`rounded-2xl border border-line p-5 sm:p-6 ${bg}`}>
      <h2 className="mb-4 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-lg font-semibold">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-surface text-accent ring-1 ring-line">
          <Icon name={s.icon} className="h-[18px] w-[18px]" />
        </span>
        <span className="text-sm font-medium text-muted">{n + 1}.</span>
        {title}
        <span lang="en" className="text-sm font-normal text-muted">{en}</span>
      </h2>
      {children}
    </section>
  );
}
