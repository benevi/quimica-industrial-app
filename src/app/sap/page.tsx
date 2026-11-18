import Link from "next/link";
import { Simulator } from "@/components/sap/Simulator";

export const metadata = { title: "Simulador ERP · Aula de Química" };

export default function SapPage() {
  return (
    <div className="space-y-6">
      <div>
        <Link href="/certificaciones" className="text-sm text-muted hover:text-ink">← Certificaciones</Link>
        <p className="mt-3 text-sm font-medium text-accent">Práctica de ERP · estilo SAP PP-PI, MM y QM</p>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Simulador: el recorrido de un lote de API en el ERP</h1>
        <p className="mt-2 max-w-2xl text-muted">
          Crea una orden de proceso, consume materias primas, notifica las fases, da entrada al producto y libéralo con Calidad.
          Usa los mismos códigos de transacción que SAP (COR1, MIGO, QA11…) con datos ficticios. Si te equivocas como
          te equivocarías en planta, el sistema te dice qué regla GMP estarías saltándote.
        </p>
      </div>
      <details className="rounded-xl border border-line bg-surface p-4 text-sm">
        <summary className="cursor-pointer font-medium">Cómo encaja cada transacción en el flujo</summary>
        <ol className="mt-3 list-decimal space-y-1 pl-5 text-muted">
          <li><strong className="text-ink">Datos maestros</strong>: el material (MM03) y su receta maestra (C203) dicen qué se carga y en qué fases.</li>
          <li><strong className="text-ink">COR1</strong> crea la orden de proceso; <strong className="text-ink">COR2</strong> la libera para fabricar.</li>
          <li><strong className="text-ink">MIGO 261</strong> descuenta del almacén los lotes que cargas: solo los de libre utilización y no caducados.</li>
          <li><strong className="text-ink">COR6N</strong> notifica cada fase, en orden; en la última se indica lo obtenido.</li>
          <li><strong className="text-ink">MIGO 101</strong> da entrada al API: queda en stock de calidad y se crea un lote de inspección.</li>
          <li><strong className="text-ink">QE51N</strong> registra los resultados del laboratorio y <strong className="text-ink">QA11</strong> decide: aceptar (libre) o rechazar (bloqueado).</li>
        </ol>
        <p className="mt-3 text-xs text-muted">
          Simulador didáctico: no es SAP ni reproduce su aspecto. En tu planta, la configuración y los pasos pueden variar: manda el procedimiento de tu empresa.
        </p>
      </details>
      <Simulator />
    </div>
  );
}
