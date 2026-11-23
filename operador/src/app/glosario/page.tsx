import { PageHeader } from "@/components/ui";
import { siglas } from "@/content/siglas";
import { etapaDe, todasLasLecciones } from "@op/edicion";
import { getLeccion } from "@op/lecciones";
import { Glosario, type Termino } from "@op/components/Glosario";

export const metadata = { title: "Glosario" };

export default function GlosarioPage() {
  const terms: Termino[] = todasLasLecciones.flatMap((slug) => {
    const l = getLeccion(slug)!;
    const d = etapaDe(slug)!;
    return l.terms.map((t) => ({ ...t, lesson: slug, lessonTitle: l.title, etapa: `Etapa ${d.n}: ${d.etapa.corto}` }));
  });
  // Solo las siglas que salen en las lecciones de esta edición
  const texto = todasLasLecciones.map((s) => JSON.stringify(getLeccion(s))).join(" ");
  const usadas = siglas.filter((x) => new RegExp(`(^|[^\\p{L}\\d])${x.sigla.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}([^\\p{L}\\d]|$)`, "u").test(texto));
  return (
    <div>
      <PageHeader
        crumbs={[{ href: "/", label: "Hoy" }, { label: "Glosario" }]}
        title="Glosario español · inglés"
        en="Glossary"
        icon="abc"
        lead={<>{terms.length} términos de las lecciones de la formación. Mucha documentación técnica y muchos equipos usan el término en inglés.</>}
      />
      <Glosario terms={terms} siglas={usadas} />
    </div>
  );
}
