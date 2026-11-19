import { PageHeader } from "@/components/ui";
import { notFound } from "next/navigation";
import { levels } from "@/content";
import { allModules, getModule } from "@/certs/data";
import { questionsForModule } from "@/certs/progress";
import { ExamRunner } from "@/components/certs/ExamRunner";

export function generateStaticParams() {
  return allModules.filter(({ module }) => module.levels.length > 0).map(({ module }) => ({ modulo: module.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ modulo: string }> }) {
  const { modulo } = await params;
  const f = getModule(modulo);
  return { title: f ? `Simulacro ${f.module.code} · Aula de Química` : "Simulacro" };
}

export default async function ExamPage({ params }: { params: Promise<{ modulo: string }> }) {
  const { modulo } = await params;
  const found = getModule(modulo);
  if (!found) notFound();
  const { cert, module } = found;
  const pool = questionsForModule(module);
  return (
    <div>
      <PageHeader
        crumbs={[
          { href: "/certificaciones", label: "Certificaciones" },
          { href: `/certificaciones#${cert.id}`, label: cert.short },
          { label: `Simulacro ${module.code}` },
        ]}
        title={module.name}
        en="Module mock exam"
        icon="quiz"
        lead={
          <>
            Simulacro del módulo <span className="t-tag">{module.code}</span> de {cert.short}. Preguntas de los niveles{" "}
            {module.levels.map((n) => `${n} (${levels.find((l) => l.number === n)?.title})`).join(", ")} y del banco de examen del módulo.
          </>
        }
      />
      <ExamRunner moduleId={module.id} pool={pool} />
    </div>
  );
}
