import { Inicio } from "@op/components/Inicio";
import { etapasBreves } from "@op/datos";

export default function Hoy() {
  return <Inicio etapas={etapasBreves()} />;
}
