import { AuditMode } from "@/components/sim/AuditMode";
import { SimModes } from "@/components/sim/SimModes";

export const metadata = { title: "Auditoría de hojas de lote · Aula de Química" };

export default function AuditoriaPage() {
  return (
    <div className="relative left-1/2 w-screen max-w-7xl -translate-x-1/2 space-y-6 px-4">
      <SimModes />
      <div>
        <p className="text-sm font-medium text-accent">Simulador de planta · Batch record review</p>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Revisa hojas de lote como QA</h1>
        <p className="mt-2 max-w-3xl text-muted">
          Estas hojas del FX-101 ya están rellenas y tienen errores escondidos: datos fuera de rango sin desviación, correcciones mal
          hechas, firmas que faltan, cuentas que no salen… Encontrarlos te enseña a no cometerlos. Todos los lotes, iniciales y datos son
          inventados.
        </p>
      </div>
      <AuditMode />
    </div>
  );
}
