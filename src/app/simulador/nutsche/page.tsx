import { NutscheSim } from "@/components/sim/NutscheSim";
import { SimModes } from "@/components/sim/SimModes";

export const metadata = { title: "Filtro-secador Nutsche · Aula de Química" };

export default function NutschePage() {
  return (
    <div className="relative left-1/2 w-screen max-w-7xl -translate-x-1/2 space-y-6 px-4">
      <SimModes />
      <div>
        <p className="text-sm font-medium text-accent">Simulador de planta · Proceso 2 · Nutsche filter-dryer</p>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Filtra, lava y seca en un solo equipo</h1>
        <p className="mt-2 max-w-3xl text-muted">
          El filtro-secador Nutsche FD-401 hace en un solo recipiente lo que en el proceso 1 hacían la centrífuga y el secadero: filtra la
          suspensión empujando con nitrógeno a través de una tela, lava la torta, la sopla y la seca a vacío con la camisa caliente y el
          agitador. Producto didáctico FX-202, lavado con etanol frío. Equipos, códigos y números son ficticios.
        </p>
      </div>
      <details className="rounded-xl border border-line bg-surface p-4 text-sm">
        <summary className="cursor-pointer font-medium">Lo importante de un Nutsche</summary>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-muted">
          <li>La presión de N₂ empuja el líquido a través de la tela; la torta de cristales se queda encima. Más presión filtra más rápido, pero por encima de la hoja la torta se compacta.</li>
          <li>Nunca dejes que la torta se quede sin líquido mientras soplas antes de terminar los lavados: se seca por arriba, se agrieta y el lavado se escapa por las grietas sin limpiar.</li>
          <li>En el secado, el etanol al evaporarse enfría el producto. Mientras la torta está pastosa no se agita: se forman bolas que no secan por dentro.</li>
          <li>Para descargar, el equipo tiene que estar a presión atmosférica: se rompe el vacío con N₂ hasta 0 barg.</li>
          <li>Pulsa las válvulas en el dibujo o en la lista para abrirlas y cerrarlas.</li>
        </ul>
      </details>
      <NutscheSim />
    </div>
  );
}
