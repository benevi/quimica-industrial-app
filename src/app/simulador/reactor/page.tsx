import Link from "next/link";
import { Disclosure } from "@/components/ui";
import { SimShell } from "@/components/sim/SimModes";
import { ReactorSim } from "@/components/sim/reactor/ReactorSim";

export const metadata = { title: "Reactor R-204 · Aula de Química" };

export default function ReactorPage() {
  return (
    <SimShell
      wide
      mode="Reactor"
      title="Lleva un reactor como en el panel de control"
      en="Batch reactor operation"
      lead="Reactor vitrificado R-204 de 6000 L con camisa, condensador, nitrógeno y vacío. El modelo calcula cada segundo el calor que pasa por la camisa, el que desprende la reacción, la presión y el oxígeno. Etapa ficticia del intermedio AX-22."
    >
      <ReactorSim />
      <Disclosure className="max-w-3xl" summary={<span className="font-medium">Cómo funciona este simulador</span>}>
        <div className="max-w-[68ch] space-y-3 text-sm leading-relaxed text-muted">
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Los números son los de la lección <Link className="underline" href="/leccion/reactor-a-fondo">«El reactor a fondo»</Link>: U = 300 W/(m²·K) con agitación, 2610 kg de carga con cp 1,7 kJ/(kg·K), diferencia máxima camisa-masa de 50 °C, y una adición que, como mucho, admite unos 12 kg/min porque la camisa solo retira unos 30 kW a 70 °C.
            </li>
            <li>
              La inertización sigue la cuenta de <Link className="underline" href="/leccion/inertizacion-a-fondo">«Inertización a fondo»</Link>: con vacío a 200 mbar abs y nitrógeno a 1000 mbar abs, el oxígeno baja a 4,2 %, 0,84 % y 0,17 %.
            </li>
            <li>La temperatura manda en cascada: TIC-204 mira la masa y le da la consigna a la camisa TIC-204J, sin dejar que se separen más de 50 °C. En manual eres tú quien mueve la camisa.</li>
            <li>Si adicionas con la masa fría, el reactivo se acumula sin reaccionar; al calentar después reacciona de golpe. Si adicionas demasiado rápido, la camisa no da abasto.</li>
            <li>Los interlocks paran la adición si se para el agitador, si la masa llega a 80 °C o si la presión llega a 1,5 bar g, y no dejan cargar disolvente con más de un 2 % de oxígeno.</li>
            <li>Hay trece averías posibles, cada una en su momento del lote. En el modo «turno real» te saldrán dos o tres sin avisar: tienes que verlas en las lecturas, las alarmas y las tendencias, decidir qué hacer y avisar. Si te atascas, pide una pista.</li>
            <li>Al terminar, calidad revisa la hoja: compara lo que anotaste con lo que guardó el sistema y mira si anotaste a tiempo. Para cada avería te dice cuándo empezó, cuándo avisaste, si hiciste lo correcto y qué tenías que haber visto y hecho, con las lecciones que lo explican.</li>
          </ul>
          <p className="text-xs">Modelo didáctico. Proceso, producto, equipos y límites son ficticios; en planta manda el procedimiento vigente (SOP) y la hoja de cada lote.</p>
        </div>
      </Disclosure>
    </SimShell>
  );
}
