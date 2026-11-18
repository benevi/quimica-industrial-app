import type { Metadata } from "next";
import { OperatorRoute } from "@/components/OperatorRoute";

export const metadata: Metadata = { title: "Ruta del operador · Aula de Química" };

export default function OperatorPage() {
  return <OperatorRoute />;
}
