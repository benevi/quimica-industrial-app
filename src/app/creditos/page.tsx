import Link from "next/link";
import { getLesson } from "@/content";
import { pictograms, type GhsCode } from "@/content/fds";
import { commonsUrl, images, lessonMedia, licenses, signCredit, signs, type ImageId, type SignId } from "@/content/media";

export const metadata = { title: "Créditos de imágenes y vídeos · Aula de Química" };

const usedIn = (pred: (m: (typeof lessonMedia)[string]) => boolean) =>
  Object.entries(lessonMedia)
    .filter(([, m]) => pred(m))
    .map(([slug]) => ({ slug, title: getLesson(slug)?.title ?? slug }));

function LicenseLink({ k }: { k: keyof typeof licenses }) {
  const l = licenses[k];
  return l.url ? (
    <a href={l.url} target="_blank" rel="noreferrer license" className="underline hover:text-ink">
      {l.label}
    </a>
  ) : (
    <>{l.label}</>
  );
}

export default function CreditosPage() {
  const videos = Object.entries(lessonMedia).flatMap(([slug, m]) => (m.videos ?? []).map((v) => ({ ...v, slug })));
  const uniqueVideos = [...new Map(videos.map((v) => [v.id, v])).values()];

  return (
    <div className="max-w-4xl space-y-8">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Créditos de imágenes y vídeos</h1>
        <p className="mt-2 text-muted">
          Todas las fotos, esquemas, señales y pictogramas proceden de Wikimedia Commons y tienen licencia libre (dominio público o
          Creative Commons). Se han reescalado y, en algunos casos, convertido de SVG o TIFF a JPG; no se ha cambiado su contenido. Las
          imágenes con licencia «SA» (compartir igual) siguen bajo esa misma licencia. Ninguna procede de una empresa real del usuario:
          los procesos de la app son ficticios.
        </p>
      </header>

      <section>
        <h2 className="mb-3 text-lg font-semibold">Fotos y esquemas ({Object.keys(images).length})</h2>
        <ul className="divide-y divide-line rounded-xl border border-line bg-surface">
          {(Object.keys(images) as ImageId[]).map((id) => {
            const im = images[id];
            const where = usedIn((m) => !!m.images?.includes(id));
            return (
              <li key={id} className="flex gap-3 p-3 text-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/media/${im.file}`} alt="" loading="lazy" className="h-14 w-20 shrink-0 rounded-md border border-line bg-white object-cover" />
                <div className="min-w-0">
                  <a href={commonsUrl(im.commons)} target="_blank" rel="noreferrer" className="break-words font-medium hover:underline">
                    {im.commons}
                  </a>
                  <p className="text-muted">
                    {im.author} · <LicenseLink k={im.license} />
                  </p>
                  {where.length > 0 && (
                    <p className="text-xs text-muted">
                      En:{" "}
                      {where.map((w, i) => (
                        <span key={w.slug}>
                          {i > 0 && ", "}
                          <Link href={`/leccion/${w.slug}#ver`} className="hover:underline">{w.title}</Link>
                        </span>
                      ))}
                    </p>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-semibold">Pictogramas GHS/CLP</h2>
        <p className="text-sm text-muted">
          Los 9 pictogramas oficiales (GHS01–GHS09) de la Comisión Económica de las Naciones Unidas para Europa (CEPE/UNECE),{" "}
          <a href="https://unece.org/transport/dangerous-goods/ghs-pictograms" target="_blank" rel="noreferrer" className="underline hover:text-ink">
            unece.org
          </a>
          , en la versión SVG de Wikimedia Commons. Dominio público.
        </p>
        <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
          {(Object.keys(pictograms) as GhsCode[]).map((c) => (
            <li key={c}>
              {c}: {pictograms[c].name}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-semibold">Señales de seguridad ({Object.keys(signs).length})</h2>
        <ul className="grid gap-x-6 gap-y-1 text-sm sm:grid-cols-2">
          {(Object.keys(signs) as SignId[]).map((id) => {
            const s = signs[id];
            const c = signCredit(id);
            return (
              <li key={id}>
                <a href={commonsUrl(s.commons)} target="_blank" rel="noreferrer" className="font-medium hover:underline">
                  {s.code}
                </a>{" "}
                {s.label} <span className="text-muted">· {c.author} · {licenses[c.license].label}</span>
              </li>
            );
          })}
        </ul>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-semibold">Vídeos ({uniqueVideos.length})</h2>
        <p className="mb-2 text-sm text-muted">
          Los vídeos no se copian: se reproducen desde YouTube (modo de privacidad mejorada) y pertenecen a sus autores.
        </p>
        <ul className="divide-y divide-line rounded-xl border border-line bg-surface text-sm">
          {uniqueVideos.map((v) => (
            <li key={v.id} className="p-3">
              <a href={`https://www.youtube.com/watch?v=${v.id}`} target="_blank" rel="noreferrer" className="font-medium hover:underline">
                {v.title}
              </a>
              <span className="text-muted">
                {" "}
                · {v.channel} · {v.duration} · {v.lang === "es" ? "español" : "inglés"}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
