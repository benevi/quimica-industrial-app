import { Simulator } from "@/components/sim/Simulator";

export const metadata = { title: "Simulador de planta · Aula de Química" };

export default function SimuladorPage() {
  return (
    <div className="relative left-1/2 w-screen max-w-7xl -translate-x-1/2 space-y-6 px-4">
      <div>
        <p className="text-sm font-medium text-accent">Simulador de planta · Plant simulator</p>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Fabrica un lote siguiendo la hoja de producción</h1>
        <p className="mt-2 max-w-3xl text-muted">
          Producto didáctico FX-101: acetilación de 4-aminofenol con anhídrido acético en agua, inspirada en la síntesis de libro del
          paracetamol y muy simplificada. Pasarás por reactor, filtro, cristalizador, centrífuga y secadero, anotando como en un
          batch record GMP. Al final, QA revisa tu registro con criterios ALCOA+ y el laboratorio analiza el producto.
        </p>
      </div>
      <details className="rounded-xl border border-line bg-surface p-4 text-sm">
        <summary className="cursor-pointer font-medium">Cómo funciona</summary>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-muted">
          <li>Arriba ves la planta: el equipo en uso parpadea en azul y la tarjeta azul te dice qué hacer ahora. Pulsa un equipo para ver su panel.</li>
          <li>Debajo están los mandos del equipo y tu hoja de producción. La casilla que toca rellenar está en amarillo.</li>
          <li>Anota cada dato en el momento (botón «Registrar»): el sistema guarda la hora. Si corriges, el valor anterior queda tachado y hay que dar motivo.</li>
          <li>Cada etapa se firma. Las pesadas las verifica una segunda persona.</li>
          <li>En el reactor el tiempo corre: ponlo en marcha, controla la adición y la temperatura, y pide el IPC.</li>
          <li>Si algo se sale de lo normal: actúa con seguridad, avisa al supervisor y abre una desviación.</li>
          <li>El lote se guarda en este navegador; puedes dejarlo a medias y seguir otro día.</li>
        </ul>
        <p className="mt-2 text-xs text-muted">Proceso ficticio con modelos simplificados para aprender causa y efecto. No es un procedimiento real ni sustituye a los de tu empresa.</p>
      </details>
      <Simulator />
    </div>
  );
}
