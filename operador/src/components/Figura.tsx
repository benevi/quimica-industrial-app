import Image from "next/image";
import { commonsUrl, images, licenses, type ImageId } from "@/content/media";

/** Foto o esquema con su pie y su crédito (autor, licencia y enlace al original en Wikimedia Commons). */
export function Figura({ id, prioridad }: { id: ImageId; prioridad?: boolean }) {
  const im = images[id];
  const lic = licenses[im.license];
  const esquema = "kind" in im && im.kind === "esquema";
  return (
    <figure className="flex flex-col overflow-hidden rounded-[var(--radius)] border border-line bg-surface">
      <div className={`relative aspect-[4/3] w-full ${esquema ? "bg-white" : "bg-soft"}`}>
        <Image
          src={`/media/${im.file}`}
          alt={im.alt}
          fill
          priority={prioridad}
          sizes="(min-width: 1024px) 420px, (min-width: 640px) 50vw, 100vw"
          className={esquema ? "object-contain p-2" : "object-cover"}
        />
      </div>
      <figcaption className="space-y-1 px-4 py-3 text-sm">
        <span className="block leading-snug">{im.caption}</span>
        <span className="block text-xs text-muted">
          <a href={commonsUrl(im.commons)} target="_blank" rel="noreferrer" className="hover:underline">
            {im.author}
          </a>
          ,{" "}
          {lic.url ? (
            <a href={lic.url} target="_blank" rel="noreferrer license" className="hover:underline">
              {lic.label}
            </a>
          ) : (
            lic.label
          )}
        </span>
      </figcaption>
    </figure>
  );
}
