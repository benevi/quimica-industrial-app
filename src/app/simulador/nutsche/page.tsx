import { Disclosure } from "@/components/ui";
import { NutscheSim } from "@/components/sim/NutscheSim";
import { SimShell } from "@/components/sim/SimModes";

export const metadata = { title: "Filtro-secador Nutsche · Aula de Química" };

export default function NutschePage() {
  return (
    <SimShell
      wide
      mode="Nutsche"
      title="Filtra, lava y seca en un solo equipo"
      en="Nutsche filter-dryer"
      lead="El filtro-secador FD-401 hace lo que en el lote completo hacían la centrífuga y el secadero: filtra con nitrógeno, lava la torta, la sopla y la seca a vacío. Producto didáctico FX-202."
    >
      <NutscheSim />
      <Disclosure summary={<span className="font-medium">Lo importante de un Nutsche</span>}>
        <div className="max-w-[68ch] space-y-3 text-sm leading-relaxed text-muted">
          <ul className="list-disc space-y-1 pl-5">
            <li>La presión de N₂ empuja el líquido a través de la tela; la torta de cristales se queda encima. Más presión filtra más rápido, pero por encima de la hoja la torta se compacta.</li>
            <li>Nunca dejes que la torta se quede sin líquido mientras soplas antes de terminar los lavados: se seca por arriba, se agrieta y el lavado se escapa por las grietas sin limpiar.</li>
            <li>En el secado, el etanol al evaporarse enfría el producto. Mientras la torta está pastosa no se agita: se forman bolas que no secan por dentro.</li>
            <li>Para descargar, el equipo tiene que estar a presión atmosférica: se rompe el vacío con N₂ hasta 0 barg.</li>
            <li>Pulsa las válvulas en el dibujo o en la lista para abrirlas y cerrarlas.</li>
          </ul>
          <p className="text-xs">Suspensión lavada con etanol frío. Equipos, códigos y números son ficticios.</p>
        </div>
      </Disclosure>
    </SimShell>
  );
}
