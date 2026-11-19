import { PageHeader } from "@/components/ui";
import { ExamMode } from "@/components/sap/ExamMode";

export const metadata = { title: "Examen práctico de SAP · Aula de Química" };

export default function SapExamPage() {
  return (
    <div>
      <PageHeader
        crumbs={[
          { href: "/certificaciones", label: "Certificaciones" },
          { href: "/certificaciones/sap-pp", label: "SAP C_TS422" },
          { label: "Examen práctico" },
        ]}
        title="Examen práctico en el simulador ERP"
        en="Timed practical exam"
        icon="screen"
        lead={
          <>
            Un sistema limpio, tareas en inglés como en los exámenes de SAP, sin pistas y con reloj. Cada intento cambia la cantidad, el rendimiento y el
            historial de lotes, así que la decisión de empleo no siempre es la misma. Se aprueba con el 64 %, la nota de corte de <span className="t-tag">C_TS422</span>.
          </>
        }
      />
      <ExamMode />
    </div>
  );
}
