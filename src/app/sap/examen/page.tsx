import Link from "next/link";
import { ExamMode } from "@/components/sap/ExamMode";

export const metadata = { title: "Examen práctico de SAP · Aula de Química" };

export default function SapExamPage() {
  return (
    <div className="space-y-6">
      <div>
        <Link href="/certificaciones/sap-pp" className="text-sm text-muted hover:text-ink">← Preparación SAP</Link>
        <p className="mt-3 text-sm font-medium text-accent">Examen práctico cronometrado · Timed practical exam</p>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Examen práctico en el simulador ERP</h1>
        <p className="mt-2 max-w-2xl text-muted">
          Un sistema limpio, tareas en inglés como en los exámenes de SAP, sin pistas y con reloj. Cada intento cambia la cantidad, el rendimiento y el historial de lotes, así que la
          decisión de empleo no siempre es la misma. Se aprueba con el 64 %, la nota de corte de C_TS422.
        </p>
      </div>
      <ExamMode />
    </div>
  );
}
