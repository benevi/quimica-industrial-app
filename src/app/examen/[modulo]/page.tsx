import Link from "next/link";
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
    <div className="space-y-6">
      <div>
        <Link href="/certificaciones" className="text-sm text-muted hover:text-ink">← Certificaciones</Link>
        <p className="mt-3 text-sm font-medium text-accent">Simulacro · {cert.short} · {module.code}</p>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">{module.name}</h1>
        <p className="mt-2 text-sm text-muted">
          Preguntas de los niveles {module.levels.map((n) => `${n} (${levels.find((l) => l.number === n)?.title})`).join(", ")} y del banco de examen del módulo.
        </p>
      </div>
      <ExamRunner moduleId={module.id} pool={pool} />
    </div>
  );
}
