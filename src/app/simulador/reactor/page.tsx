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
      lead={
        <>
          Reactor vitrificado <span className="font-mono">R-204</span> de <span className="font-mono">6000 L</span> con camisa, condensador, nitrógeno y vacío. El modelo calcula cada segundo el calor que pasa por la camisa, el que desprende la reacción, la presión y el oxígeno. Etapa ficticia del intermedio <span className="font-mono">AX-22</span>.
        </>
      }
    >
      <ReactorSim />
      <Disclosure className="max-w-3xl" summary={<span className="font-medium">Cómo funciona este simulador</span>}>
        <div className="max-w-[68ch] space-y-3 text-sm leading-relaxed text-muted">
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Los números son los de la lección <Link className="underline" href="/leccion/reactor-a-fondo">«El reactor a fondo»</Link>: <span className="font-mono">U = 300 W/(m²·K)</span> con agitación, <span className="font-mono">2610 kg</span> de carga con cp <span className="font-mono">1,7 kJ/(kg·K)</span>, diferencia máxima camisa-masa de <span className="font-mono">50 °C</span>, y una adición que, como mucho, admite unos <span className="font-mono">12 kg/min</span> porque la camisa solo retira unos <span className="font-mono">30 kW</span> a <span className="font-mono">70 °C</span>.
            </li>
            <li>
              La inertización sigue la cuenta de <Link className="underline" href="/leccion/inertizacion-a-fondo">«Inertización a fondo»</Link>: con vacío a <span className="font-mono">200 mbar abs</span> y nitrógeno a <span className="font-mono">1000 mbar abs</span>, el oxígeno baja a <span className="font-mono">4,2 %</span>, <span className="font-mono">0,84 %</span> y <span className="font-mono">0,17 %</span>.
            </li>
            <li>La temperatura manda en cascada: <span className="font-mono">TIC-204</span> mira la masa y le da la consigna a la camisa <span className="font-mono">TIC-204J</span>, sin dejar que se separen más de <span className="font-mono">50 °C</span>. En manual eres tú quien mueve la camisa.</li>
            <li>Si adicionas con la masa fría, el reactivo se acumula sin reaccionar; al calentar después reacciona de golpe. Si adicionas demasiado rápido, la camisa no da abasto.</li>
            <li>Los interlocks paran la adición si se para el agitador, si la masa llega a <span className="font-mono">80 °C</span> o si la presión llega a <span className="font-mono">1,5 bar g</span>, y no dejan cargar disolvente con más de un <span className="font-mono">2 %</span> de oxígeno.</li>
            <li>Hay trece averías posibles, cada una en su momento del lote. En el modo «turno real» te saldrán dos o tres sin avisar: tienes que verlas en las lecturas, las alarmas y las tendencias, decidir qué hacer y avisar. Si te atascas, pide una pista.</li>
            <li>Al terminar, calidad revisa la hoja: compara lo que anotaste con lo que guardó el sistema y mira si anotaste a tiempo. Para cada avería te dice cuándo empezó, cuándo avisaste, si hiciste lo correcto y qué tenías que haber visto y hecho, con las lecciones que lo explican.</li>
          </ul>
          <p className="text-xs">Modelo didáctico. Proceso, producto, equipos y límites son ficticios; en planta manda el procedimiento vigente (SOP) y la hoja de cada lote.</p>
        </div>
      </Disclosure>
    </SimShell>
  );
}
