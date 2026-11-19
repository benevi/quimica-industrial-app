"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  commonsUrl,
  englishVideoNote,
  images,
  licenses,
  signs,
  type ImageId,
  type LessonMedia as Media,
  type LicenseKey,
  type Video,
} from "@/content/media";
import { pictograms, type GhsCode } from "@/content/fds";
import { GhsPictogram } from "./GhsPictogram";

const ghsCodes = Object.keys(pictograms) as GhsCode[];

export function LessonMedia({ media }: { media: Media }) {
  const [open, setOpen] = useState<ImageId | null>(null);

  return (
    <div className="space-y-6">
      {media.videos && media.videos.length > 0 && (
        <div className={`grid gap-4 ${media.videos.length > 1 ? "md:grid-cols-2" : ""}`}>
          {media.videos.map((v) => (
            <VideoCard key={v.id} v={v} />
          ))}
        </div>
      )}

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
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/media/${im.file}`}
                    alt={im.alt}
                    loading="lazy"
                    className={`h-full w-full transition-transform group-hover:scale-[1.02] ${"kind" in im && im.kind === "esquema" ? "object-contain p-2" : "object-cover"}`}
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
            Los 9 pictogramas oficiales GHS/CLP <span lang="en" className="text-sm font-normal text-muted">GHS hazard pictograms</span>
          </h3>
          <div className="grid grid-cols-3 gap-3 rounded-xl border border-line bg-white p-4 text-neutral-900 sm:grid-cols-5 lg:grid-cols-9">
            {ghsCodes.map((c) => (
              <GhsPictogram key={c} code={c} size={64} showLabel />
            ))}
          </div>
          <p className="mt-1.5 text-xs text-muted">
            Pictogramas de la CEPE/ONU (UNECE), dominio público. Practica con ellos en las{" "}
            <Link href="/fds" className="underline hover:text-ink">fichas de seguridad</Link>.
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
        <Link href="/creditos" className="underline hover:text-ink">créditos</Link>.
      </p>

      {open && <Lightbox id={open} onClose={() => setOpen(null)} />}
    </div>
  );
}

function Credit({ author, license, commons }: { author: string; license: LicenseKey; commons: string }) {
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

function VideoCard({ v }: { v: Video }) {
  const [play, setPlay] = useState(false);
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-bg">
      <div className="relative aspect-video w-full bg-black">
        {play ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0${v.lang === "en" ? "&cc_load_policy=1&cc_lang_pref=es&hl=es" : ""}`}
            title={v.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button type="button" onClick={() => setPlay(true)} className="group absolute inset-0" aria-label={`Reproducir vídeo: ${v.title}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`} alt="" loading="lazy" className="h-full w-full object-cover opacity-90 group-hover:opacity-100" />
            <span className="absolute inset-0 grid place-items-center">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-black/70 text-white ring-2 ring-white/80 transition-transform group-hover:scale-110">
                <svg viewBox="0 0 24 24" className="ml-1 h-8 w-8" fill="currentColor" aria-hidden>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
            <span className="absolute bottom-2 right-2 rounded bg-black/75 px-1.5 py-0.5 text-xs font-medium text-white tabular-nums">{v.duration}</span>
          </button>
        )}
      </div>
      <div className="space-y-1 p-3 text-sm">
        <p className="font-semibold leading-snug">
          {v.title}
          <span className="ml-2 rounded-full border border-line px-2 py-0.5 align-middle text-[11px] font-medium text-muted">
            {v.lang === "es" ? "Español" : "Inglés"}
          </span>
        </p>
        <p className="text-muted">{v.why}</p>
        {v.lang === "en" && <p className="text-xs text-muted">{englishVideoNote}</p>}
        <p className="text-xs text-muted">
          {v.channel} ·{" "}
          <a href={`https://www.youtube.com/watch?v=${v.id}`} target="_blank" rel="noreferrer" className="underline hover:text-ink">
            ver en YouTube
          </a>
        </p>
      </div>
    </div>
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
