"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { commonsUrl, images, licenses, signs, type ImageId, type LessonMedia as Media, type LicenseKey } from "@/content/media";
import { pictograms, type GhsCode } from "@/content/fds";
import { GhsPictogram } from "./GhsPictogram";

const ghsCodes = Object.keys(pictograms) as GhsCode[];

/**
 * Imágenes de una lección: fotos y esquemas (se amplían al pulsar), pictogramas GHS y señales ISO 7010, con sus créditos.
 * Va aparte de LessonMedia (vídeos y simulaciones) para que la edición de operador no cargue lo que no usa.
 */
export function LessonImages({ media }: { media: Pick<Media, "images" | "ghs" | "signs"> }) {
  const [open, setOpen] = useState<ImageId | null>(null);
  return (
    <>
      {media.images && media.images.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2">
          {media.images.map((id) => {
            const im = images[id];
            return (
              <figure key={id} className="flex flex-col overflow-hidden rounded-xl border border-line bg-bg">
                <button
                  type="button"
                  onClick={() => setOpen(id)}
                  className={`group relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden ${"kind" in im && im.kind === "esquema" ? "bg-white" : "bg-soft"}`}
                  aria-label={`Ampliar: ${im.alt}`}
                >
                  {/* Miniatura optimizada: se descarga a su tamaño, no la foto completa */}
                  <Image
                    src={`/media/${im.file}`}
                    alt={im.alt}
                    fill
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
                    unoptimized={im.file.endsWith(".svg")}
                    className={`transition-transform group-hover:scale-[1.02] ${"kind" in im && im.kind === "esquema" ? "object-contain p-2" : "object-cover"}`}
                  />
                </button>
                <figcaption className="flex flex-1 flex-col gap-1.5 p-3 text-sm">
                  <span className="leading-snug">{im.caption}</span>
                  <Credit author={im.author} license={im.license} commons={im.commons} />
                </figcaption>
              </figure>
            );
          })}
        </div>
      )}

      {media.ghs && (
        <div>
          <h3 className="mb-2 font-semibold">
            Los 9 pictogramas oficiales GHS/CLP{" "}
            <span lang="en" className="text-sm font-normal text-muted">
              GHS hazard pictograms
            </span>
          </h3>
          <div className="grid grid-cols-3 gap-3 rounded-xl border border-line bg-white p-4 text-neutral-900 sm:grid-cols-5 lg:grid-cols-9">
            {ghsCodes.map((c) => (
              <GhsPictogram key={c} code={c} size={64} showLabel />
            ))}
          </div>
          <p className="mt-1.5 text-xs text-muted">
            Pictogramas de la CEPE/ONU (UNECE), dominio público. Practica con ellos en las{" "}
            <Link href="/fds" className="underline hover:text-ink">
              fichas de seguridad
            </Link>
            .
          </p>
        </div>
      )}

      {media.signs?.map((g) => (
        <div key={g.title}>
          <h3 className="mb-2 font-semibold">{g.title}</h3>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-5">
            {g.ids.map((id) => {
              const s = signs[id];
              return (
                <li key={id} className="flex flex-col items-center gap-1.5 rounded-xl border border-line bg-white p-3 text-center text-neutral-900">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/media/senales/${s.file}`} alt={s.label} width={72} height={72} loading="lazy" className="h-[72px] w-[72px] object-contain" />
                  <span className="text-xs font-medium leading-tight">{s.label}</span>
                  <a href={commonsUrl(s.commons)} target="_blank" rel="noreferrer" className="text-[10px] text-neutral-500 hover:underline">
                    {s.code}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ))}

      <p className="text-xs text-muted">
        Fotos y esquemas de Wikimedia Commons con licencia libre. Lista completa de autores y licencias en{" "}
        <Link href="/creditos" className="underline hover:text-ink">
          créditos
        </Link>
        .
      </p>

      {open && <Lightbox id={open} onClose={() => setOpen(null)} />}
    </>
  );
}

export function Credit({ author, license, commons }: { author: string; license: LicenseKey; commons: string }) {
  const l = licenses[license];
  return (
    <span className="text-xs text-muted">
      <a href={commonsUrl(commons)} target="_blank" rel="noreferrer" className="hover:underline">
        {author}
      </a>
      {" · "}
      {l.url ? (
        <a href={l.url} target="_blank" rel="noreferrer license" className="hover:underline">
          {l.label}
        </a>
      ) : (
        l.label
      )}
    </span>
  );
}

function Lightbox({ id, onClose }: { id: ImageId; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const im = images[id];
  useEffect(() => {
    const d = ref.current;
    d?.showModal();
    return () => d?.close();
  }, []);
  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      className="m-auto max-h-[95vh] w-[min(96vw,72rem)] rounded-2xl border border-line bg-surface p-0 text-ink backdrop:bg-black/70"
    >
      <div className="relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`/media/${im.file}`} alt={im.alt} className="max-h-[80vh] w-full bg-white object-contain" />
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-black/70 text-lg text-white"
          aria-label="Cerrar"
        >
          ×
        </button>
      </div>
      <div className="space-y-1 p-4 text-sm">
        <p>{im.caption}</p>
        <Credit author={im.author} license={im.license} commons={im.commons} />
      </div>
    </dialog>
  );
}
