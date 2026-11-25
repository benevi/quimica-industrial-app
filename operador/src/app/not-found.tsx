import Link from "next/link";
import { PageHeader, btn } from "@/components/ui";

export default function NotFound() {
  return (
    <PageHeader
      title="Esta página no existe"
      en="Not found"
      icon="search"
      lead="Puede que la dirección esté mal escrita o que la página sea de otra edición de la app."
      actions={
        <Link href="/" className={btn.primary}>
          Volver a Hoy
        </Link>
      }
    />
  );
}
