import type { Metadata } from "next";
import { BackupPanel } from "@/components/BackupPanel";

export const metadata: Metadata = { title: "Copia de tu progreso · Aula de Química" };

export default function BackupPage() {
  return <BackupPanel />;
}
