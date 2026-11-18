import Link from "next/link";
import { notFound } from "next/navigation";
import { getLesson, levels, lessons, nextLesson } from "@/content";
import { Markdown } from "@/components/Markdown";
import { Quiz } from "@/components/Quiz";

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
  const level = levels.find((lv) => lv.number === lesson.level)!;
  const next = nextLesson(slug);

  return (
    <article className="space-y-6">
      <div>
        <Link href="/" className="text-sm text-muted hover:text-ink">← Temario</Link>
        <p className="mt-3 text-sm font-medium text-accent">
          Nivel {level.number} · {level.title}
        </p>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">{lesson.title}</h1>
        <p className="text-muted">
          <span lang="en">{lesson.titleEn}</span> · {lesson.minutes} min
        </p>
      </div>

      <Section title="Idea clave" en="Key concept">
        <Markdown>{lesson.body}</Markdown>
      </Section>

      <Section title="Ejemplo de planta" en="Plant example" tone="accent">
        <Markdown>{lesson.plant}</Markdown>
      </Section>

      <Section title="¿Qué verías en la hoja de producción?" en="In the batch record" tone="warn">
        <Markdown>{lesson.batchRecord}</Markdown>
      </Section>

      <Section title="Vocabulario" en="Vocabulary">
        <dl className="divide-y divide-line">
          {lesson.terms.map((t) => (
            <div key={t.es} className="grid gap-1 py-2 sm:grid-cols-[minmax(0,14rem)_1fr] sm:gap-4">
              <dt>
                <span className="font-medium">{t.es}</span>
                <span lang="en" className="block text-sm text-accent">{t.en}</span>
              </dt>
              <dd className="text-sm text-muted">{t.def}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Quiz slug={lesson.slug} questions={lesson.quiz} nextSlug={next?.slug} nextTitle={next?.title} />
    </article>
  );
}

function Section({
  title,
  en,
  tone,
  children,
}: {
  title: string;
  en: string;
  tone?: "accent" | "warn";
  children: React.ReactNode;
}) {
  const bg = tone === "accent" ? "bg-accent-soft" : tone === "warn" ? "bg-warn-soft" : "bg-surface";
  return (
    <section className={`rounded-2xl border border-line p-5 sm:p-6 ${bg}`}>
      <h2 className="mb-3 flex flex-wrap items-baseline gap-x-2 text-lg font-semibold">
        {title}
        <span lang="en" className="text-sm font-normal text-muted">{en}</span>
      </h2>
      {children}
    </section>
  );
}
