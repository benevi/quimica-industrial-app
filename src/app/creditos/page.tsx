import Image from "next/image";
import Link from "next/link";
import { getLesson } from "@/content";
import { pictograms, type GhsCode } from "@/content/fds";
import { Disclosure, PageHeader } from "@/components/ui";
import { commonsUrl, images, lessonMedia, lessonSims, licenses, phetCredit, phetPage, signCredit, signs, type ImageId, type SignId } from "@/content/media";

export const metadata = { title: "Créditos de imágenes y vídeos · Aula de Química" };

const usedIn = (pred: (m: (typeof lessonMedia)[string]) => boolean) =>
  Object.entries(lessonMedia)
    .filter(([, m]) => pred(m))
    .map(([slug]) => ({ slug, title: getLesson(slug)?.title ?? slug }));

function LicenseLink({ k }: { k: keyof typeof licenses }) {
  const l = licenses[k];
  return l.url ? (
    <a href={l.url} target="_blank" rel="noreferrer license" className="underline underline-offset-2 hover:text-ink">
      {l.label}
    </a>
  ) : (
    <>{l.label}</>
  );
}

export default function CreditosPage() {
  const uniqueSims = [...new Map(Object.values(lessonSims).flat().map((s) => [s.sim, s])).values()];
  const videos = Object.entries(lessonMedia).flatMap(([slug, m]) => (m.videos ?? []).map((v) => ({ ...v, slug })));
  const uniqueVideos = [...new Map(videos.map((v) => [v.id, v])).values()];

  const sum = (title: string, n?: number) => (
    <span className="font-medium">
      {title} {n !== undefined && <span className="text-sm font-normal text-muted">({n})</span>}
    </span>
  );

  return (
    <div className="max-w-4xl">
      <PageHeader
        crumbs={[{ href: "/", label: "Hoy" }, { label: "Créditos" }]}
        title="Créditos de imágenes y vídeos"
        en="Credits and licences"
        icon="doc"
        lead="Todas las fotos, esquemas, señales y pictogramas proceden de Wikimedia Commons y tienen licencia libre (dominio público o Creative Commons)."
      />

      <div className="space-y-2">
        <Disclosure summary={sum("Cómo se han tratado las imágenes")}>
          <p className="max-w-[68ch] text-sm leading-relaxed text-muted">
            Se han reescalado y, en algunos casos, convertido de SVG o TIFF a JPG; no se ha cambiado su contenido. Las imágenes con licencia «SA» (compartir
            igual) siguen bajo esa misma licencia. Ninguna procede de una empresa real del usuario: los procesos de la app son ficticios.
          </p>
        </Disclosure>

        <Disclosure summary={sum("Fotos y esquemas", Object.keys(images).length)}>
          <ul className="-mx-4 -my-4 divide-y divide-line">
            {(Object.keys(images) as ImageId[]).map((id) => {
              const im = images[id];
              const where = usedIn((m) => !!m.images?.includes(id));
              return (
                <li key={id} className="flex gap-3 px-4 py-3 text-sm">
                  <Image src={`/media/${im.file}`} alt="" width={80} height={56} unoptimized={im.file.endsWith(".svg")} className="h-14 w-20 shrink-0 rounded-md border border-line bg-white object-cover" />
                  <div className="min-w-0">
                    <a href={commonsUrl(im.commons)} target="_blank" rel="noreferrer" className="break-words font-medium hover:text-accent hover:underline">
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
                            <Link href={`/leccion/${w.slug}#ver`} className="hover:text-accent hover:underline">
                              {w.title}
                            </Link>
                          </span>
                        ))}
                      </p>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </Disclosure>

        <Disclosure summary={sum("Pictogramas GHS/CLP", Object.keys(pictograms).length)}>
          <p className="max-w-[68ch] text-sm text-muted">
            Los 9 pictogramas oficiales (GHS01–GHS09) de la Comisión Económica de las Naciones Unidas para Europa (CEPE/UNECE),{" "}
            <a href="https://unece.org/transport/dangerous-goods/ghs-pictograms" target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-ink">
              unece.org
            </a>
            , en la versión SVG de Wikimedia Commons. Dominio público.
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
            {(Object.keys(pictograms) as GhsCode[]).map((c) => (
              <li key={c}>
                <span className="font-mono">{c}</span>: {pictograms[c].name}
              </li>
            ))}
          </ul>
        </Disclosure>

        <Disclosure summary={sum("Señales de seguridad", Object.keys(signs).length)}>
          <ul className="grid gap-x-6 gap-y-1.5 text-sm sm:grid-cols-2">
            {(Object.keys(signs) as SignId[]).map((id) => {
              const s = signs[id];
              const c = signCredit(id);
              return (
                <li key={id}>
                  <a href={commonsUrl(s.commons)} target="_blank" rel="noreferrer" className="font-mono font-medium hover:text-accent hover:underline">
                    {s.code}
                  </a>{" "}
                  {s.label}{" "}
                  <span className="text-muted">
                    · {c.author} · {licenses[c.license].label}
                  </span>
                </li>
              );
            })}
          </ul>
        </Disclosure>

        <Disclosure summary={sum("Vídeos", uniqueVideos.length)}>
          <p className="mb-3 max-w-[68ch] text-sm text-muted">
            Los vídeos no se copian: se reproducen desde YouTube (modo de privacidad mejorada) y pertenecen a sus autores.
          </p>
          <ul className="-mx-4 -mb-4 divide-y divide-line border-t border-line text-sm">
            {uniqueVideos.map((v) => (
              <li key={v.id} className="px-4 py-3">
                <a href={`https://www.youtube.com/watch?v=${v.id}`} target="_blank" rel="noreferrer" className="font-medium hover:text-accent hover:underline">
                  {v.title}
                </a>
                <span className="text-muted">
                  {" "}
                  · {v.channel}{v.duration ? ` · ${v.duration}` : ""} · {v.lang === "es" ? "español" : "inglés"}
                </span>
              </li>
            ))}
          </ul>
        </Disclosure>

        <Disclosure summary={sum("Simulaciones interactivas", uniqueSims.length)}>
          <p className="mb-3 max-w-[68ch] text-sm text-muted">
            Las simulaciones no se copian: se cargan desde la web de PhET al pulsarlas. {phetCredit}. Uso no comercial.
          </p>
          <ul className="-mx-4 -mb-4 divide-y divide-line border-t border-line text-sm">
            {uniqueSims.map((s) => (
              <li key={s.sim} className="px-4 py-3">
                <a href={phetPage(s.sim)} target="_blank" rel="noreferrer" className="font-medium hover:text-accent hover:underline">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </Disclosure>
      </div>
    </div>
  );
}
