import { Disclosure } from "@/components/ui";
import { Simulator } from "@/components/sim/Simulator";
import { SimShell } from "@/components/sim/SimModes";

export const metadata = { title: "Simulador de planta · Aula de Química" };

export default function SimuladorPage() {
  return (
    <SimShell
      wide
      mode="Lote completo"
      title="Fabrica un lote completo"
      en="Full batch · plant simulator"
      lead="Produce el FX-101 pasando por reactor, filtro, cristalizador, centrífuga y secadero, y anota cada dato en la hoja de producción (batch record) como en planta. Al final, QA revisa tu registro."
    >
      <Simulator />
      <Disclosure className="max-w-3xl" summary={<span className="font-medium">Cómo funciona el simulador</span>}>
        <div className="max-w-[68ch] space-y-3 text-sm leading-relaxed text-muted">
          <p>
            Producto didáctico FX-101: acetilación de 4-aminofenol con anhídrido acético en agua, inspirada en la síntesis de libro del
            paracetamol y muy simplificada. QA revisa tu registro con criterios ALCOA+ y el laboratorio analiza el producto.
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Arriba ves la planta: el equipo en uso está marcado en ámbar y la tarjeta ámbar «Qué hacer ahora» te dice el siguiente paso. Pulsa un equipo para ver su panel.</li>
            <li>Debajo están los mandos del equipo y tu hoja de producción. La casilla que toca rellenar también está en ámbar.</li>
            <li>Anota cada dato en el momento (botón «Registrar»): el sistema guarda la hora. Si corriges, el valor anterior queda tachado y hay que dar motivo.</li>
            <li>Las válvulas manuales (XV-…) se abren y se cierran a mano: verde abierta, rojo cerrada. Sin abrirlas no pasa nada por la línea, y al terminar cada operación hay que cerrarlas.</li>
            <li>Los errores tienen consecuencias reales: desbordamientos, sobrepresiones que rompen el disco de ruptura, roturas de vidrio, fugas, producto perdido a aguas madres… Cuando salta un incidente verás qué pasó, por qué, sus consecuencias y qué se hace en planta. Puedes rehacer la fase desde el principio (o volver a la fase donde está la causa).</li>
            <li>Cada etapa se firma. Las pesadas las verifica una segunda persona.</li>
            <li>En el reactor el tiempo corre: ponlo en marcha, controla la adición y la temperatura, y pide el IPC.</li>
            <li>Si algo se sale de lo normal: actúa con seguridad, avisa al supervisor y abre una desviación.</li>
            <li>El lote se guarda en este navegador; puedes dejarlo a medias y seguir otro día.</li>
          </ul>
          <p className="text-xs">Proceso ficticio con modelos simplificados para aprender causa y efecto. No es un procedimiento real ni sustituye a los de tu empresa.</p>
        </div>
      </Disclosure>
    </SimShell>
  );
}
