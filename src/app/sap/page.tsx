import Link from "next/link";
import { Simulator } from "@/components/sap/Simulator";
import { Disclosure, PageHeader } from "@/components/ui";

export const metadata = { title: "Simulador ERP · Aula de Química" };

export default function SapPage() {
  return (
    <div>
      <PageHeader
        crumbs={[{ href: "/", label: "Hoy" }, { label: "Simulador ERP" }]}
        title="Simulador ERP: el recorrido de un lote de API"
        en="ERP practice · SAP PP-PI, MM and QM style"
        icon="screen"
        lead={
          <>
            Crea una orden de proceso, consume materias primas, notifica las fases, da entrada al producto y libéralo con Calidad. Usa los mismos códigos de
            transacción que SAP (<span className="t-tag">COR1</span>, <span className="t-tag">MIGO</span>, <span className="t-tag">QA11</span>…) con datos
            ficticios. Si te equivocas como te equivocarías en planta, el sistema te dice qué regla GMP estarías saltándote.
          </>
        }
      />

      <div className="mb-6 space-y-3">
        <Disclosure summary={<span className="font-medium">Cómo encaja cada transacción en el flujo</span>}>
          <ol className="max-w-[68ch] list-decimal space-y-1.5 pl-5 text-sm text-muted">
            <li>
              <strong className="font-medium text-ink">Datos maestros</strong>: el material (<span className="t-tag">MM03</span>) y su receta maestra (
              <span className="t-tag">C203</span>) dicen qué se carga y en qué fases.
            </li>
            <li>
              <strong className="t-tag font-medium text-ink">COR1</strong> crea la orden de proceso; <strong className="t-tag font-medium text-ink">COR2</strong> la
              libera para fabricar.
            </li>
            <li>
              <strong className="t-tag font-medium text-ink">MIGO 261</strong> descuenta del almacén los lotes que cargas: solo los de libre utilización y no
              caducados.
            </li>
            <li>
              <strong className="t-tag font-medium text-ink">COR6N</strong> notifica cada fase, en orden; en la última se indica lo obtenido.
            </li>
            <li>
              <strong className="t-tag font-medium text-ink">MIGO 101</strong> da entrada al API: queda en stock de calidad y se crea un lote de inspección.
            </li>
            <li>
              <strong className="t-tag font-medium text-ink">QE51N</strong> registra los resultados del laboratorio y{" "}
              <strong className="t-tag font-medium text-ink">QA11</strong> decide: aceptar (libre) o rechazar (bloqueado).
            </li>
          </ol>
          <p className="mt-3 max-w-[68ch] text-xs text-muted">
            Simulador didáctico: no es SAP ni reproduce su aspecto. En tu planta, la configuración y los pasos pueden variar: manda el procedimiento de tu empresa.
          </p>
        </Disclosure>
        <p className="max-w-[68ch] text-sm text-muted">
          ¿Ya haces las misiones sin pistas? Ponte a prueba con el{" "}
          <Link href="/sap/examen" className="text-accent underline-offset-2 hover:underline">
            examen práctico cronometrado
          </Link>
          : sistema limpio, tareas en inglés y nota de corte del 64 %. Cuenta para la{" "}
          <Link href="/certificaciones/sap-pp" className="text-accent underline-offset-2 hover:underline">
            preparación de SAP C_TS422
          </Link>
          .
        </p>
      </div>

      <Simulator />
    </div>
  );
}
