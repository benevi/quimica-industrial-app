import type { Metadata } from "next";
import { Problemas, type InfoLeccion } from "@/components/problemas/Problemas";
import { PageHeader } from "@/components/ui";
import { getLesson, levels } from "@/content/catalog";
import { GENERADORES } from "@/problemas/generadores";

export const metadata: Metadata = { title: "Problemas · Aula de Química" };

export default function ProblemasPage() {
  const lecciones: Record<string, InfoLeccion> = {};
  for (const g of GENERADORES) {
    const l = getLesson(g.leccion);
    if (l) lecciones[g.leccion] = { slug: l.slug, title: l.title };
  }
  const niveles = Object.fromEntries(levels.map((l) => [l.number, l.title]));
  return (
    <>
      <PageHeader
        crumbs={[{ href: "/", label: "Hoy" }, { label: "Problemas" }]}
        title="Problemas para practicar"
        en="Practice problems"
        icon="calc"
        lead={
          <>
            Cada vez que pides uno, salen números nuevos: puedes repetir el mismo tipo hasta que te salga solo. Escribe tu
            resultado, compruébalo y mira la solución paso a paso. Todos los datos que necesitas están en el enunciado; los
            productos y las cargas son de ejemplo. En planta, las cuentas que valen son las de la hoja de producción.
          </>
        }
      />
      <Problemas lecciones={lecciones} niveles={niveles} />
    </>
  );
}
