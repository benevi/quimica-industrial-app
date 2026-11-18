import { notFound } from "next/navigation";
import { levels } from "@/content";
import { LevelView } from "@/components/LevelView";

export function generateStaticParams() {
  return levels.map((l) => ({ n: String(l.number) }));
}

export async function generateMetadata({ params }: { params: Promise<{ n: string }> }) {
  const { n } = await params;
  const lv = levels.find((l) => String(l.number) === n);
  return { title: lv ? `Nivel ${lv.number}. ${lv.title} · Aula de Química` : "Nivel" };
}

export default async function LevelPage({ params }: { params: Promise<{ n: string }> }) {
  const { n } = await params;
  const lv = levels.find((l) => String(l.number) === n);
  if (!lv) notFound();
  return <LevelView level={lv.number} />;
}
