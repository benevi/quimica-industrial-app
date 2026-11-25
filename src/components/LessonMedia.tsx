"use client";

import { useState } from "react";
import { englishVideoNote, phetCredit, phetPage, phetUrl, type Sim, type LessonMedia as Media, type Video } from "@/content/media";
import { LessonImages } from "./LessonImages";

/** Vídeos, simulaciones PhET e imágenes de una lección (edición completa). */
export function LessonMedia({ media }: { media: Media }) {
  return (
    <div className="space-y-6">
      {media.videos && media.videos.length > 0 && (
        <div className={`grid gap-4 ${media.videos.length > 1 ? "md:grid-cols-2" : ""}`}>
          {media.videos.map((v) => (
            <VideoCard key={v.id} v={v} />
          ))}
        </div>
      )}
      {media.sims?.map((s) => (
        <SimCard key={s.sim} s={s} />
      ))}
      <LessonImages media={media} />
    </div>
  );
}

/** Simulación PhET: no se descarga hasta que se pulsa (pesan varios MB). */
function SimCard({ s }: { s: Sim }) {
  const [on, setOn] = useState(false);
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-bg">
      <div className="relative aspect-[16/10] w-full bg-soft">
        {on ? (
          <iframe src={phetUrl(s.sim)} title={`Simulación: ${s.title}`} allowFullScreen className="absolute inset-0 h-full w-full border-0 bg-white" />
        ) : (
          <button
            type="button"
            onClick={() => setOn(true)}
            className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center hover:bg-bg"
            aria-label={`Abrir la simulación interactiva: ${s.title}`}
          >
            <span className="rounded-full border border-line bg-bg px-3 py-1 text-xs text-muted">Simulación interactiva</span>
            <span className="text-lg font-semibold leading-snug">{s.title}</span>
            <span className="text-sm text-accent underline">Pulsa para cargarla aquí</span>
          </button>
        )}
      </div>
      <div className="space-y-1.5 p-3 text-sm">
        <p className="leading-snug">{s.why}</p>
        <p className="text-xs text-muted">
          <a href={phetUrl(s.sim)} target="_blank" rel="noreferrer" className="underline hover:text-ink">
            Abrir en pantalla completa
          </a>
          {" · "}
          <a href={phetPage(s.sim)} target="_blank" rel="noreferrer" className="hover:underline">
            {phetCredit}
          </a>
        </p>
      </div>
    </div>
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
            {v.duration && (
              <span className="absolute bottom-2 right-2 rounded bg-black/75 px-1.5 py-0.5 text-xs font-medium text-white tabular-nums">{v.duration}</span>
            )}
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

