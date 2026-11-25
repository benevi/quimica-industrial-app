import { PageHeader } from "@/components/ui";
import { CopiaProgreso } from "@op/components/CopiaProgreso";

export const metadata = { title: "Mi progreso" };

export default function ProgresoPage() {
  return (
    <div>
      <PageHeader
        crumbs={[{ href: "/", label: "Hoy" }, { label: "Mi progreso" }]}
        title="Guarda tu progreso"
        en="Backup"
        icon="chart"
        lead="Tu progreso (lecciones, tests, tarjetas y ejercicios de fichas de seguridad) se guarda solo en este navegador. No se envía a ningún sitio."
      />
      <CopiaProgreso />
    </div>
  );
}
