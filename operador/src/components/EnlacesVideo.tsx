import { englishVideoNote, type Video } from "@/content/media";
import { Icon } from "@/components/icons";

/**
 * Vídeos de la lección como enlaces a YouTube. No se insertan ni se copian (ni siquiera la miniatura): se abren en
 * YouTube, en otra pestaña, y pertenecen a sus autores.
 */
export function EnlacesVideo({ videos }: { videos: Video[] }) {
  return (
    <div className="space-y-3">
      <ul className="grid gap-3 md:grid-cols-2">
        {videos.map((v) => (
          <li key={v.id} className="flex flex-col gap-2 rounded-[var(--radius)] border border-line bg-surface p-4 text-sm">
            <p className="font-semibold leading-snug">{v.title}</p>
            <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted">
              <span>{v.channel}</span>
              {v.duration && (
                <>
                  <span aria-hidden>·</span>
                  <span className="tabular-nums">{v.duration}</span>
                </>
              )}
              <span aria-hidden>·</span>
              <span className="rounded-full border border-line px-2 py-0.5 font-medium">{v.lang === "es" ? "En español" : "En inglés"}</span>
            </p>
            <p className="leading-relaxed text-muted">{v.why}</p>
            {v.lang === "en" && <p className="text-xs text-muted">{englishVideoNote}</p>}
            <a
              href={`https://www.youtube.com/watch?v=${v.id}`}
              target="_blank"
              rel="noreferrer"
              className="mt-auto inline-flex items-center gap-1.5 self-start font-medium text-accent underline underline-offset-2 hover:decoration-2"
            >
              <Icon name="play" className="h-4 w-4" />
              Ver en YouTube
              <span className="sr-only">(se abre en otra pestaña)</span>
            </a>
          </li>
        ))}
      </ul>
      <p className="text-xs text-muted">Los vídeos se ven en YouTube y pertenecen a sus autores; esta formación solo los enlaza.</p>
    </div>
  );
}
