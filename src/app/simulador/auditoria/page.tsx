import { AuditMode } from "@/components/sim/AuditMode";
import { SimShell } from "@/components/sim/SimModes";

export const metadata = { title: "Auditoría de hojas de lote · Aula de Química" };

export default function AuditoriaPage() {
  return (
    <SimShell
      mode="Auditoría"
      title="Revisa hojas de lote como QA"
      en="Batch record review"
      lead={
        <>
          Estas hojas del <span className="font-mono">FX-101</span> ya están rellenas y esconden errores: datos fuera de rango sin desviación, correcciones mal hechas, firmas que faltan, cuentas que no salen. Encontrarlos te enseña a no cometerlos.
        </>
      }
    >
      <AuditMode />
    </SimShell>
  );
}
