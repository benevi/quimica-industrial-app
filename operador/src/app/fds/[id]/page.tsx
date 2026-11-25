// Misma página que en la edición completa (sin el enlace al repaso de fallos, ver src/lib/edicion.ts).
import { getSds } from "@/content/fds";

export { default, generateStaticParams } from "@/app/fds/[id]/page";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return { title: `FDS ${getSds(id)?.product ?? ""}` };
}
