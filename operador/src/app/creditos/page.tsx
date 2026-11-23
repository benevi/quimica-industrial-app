import Image from "next/image";
import Link from "next/link";
import { pictograms, type GhsCode } from "@/content/fds";
import { Disclosure, PageHeader } from "@/components/ui";
import { commonsUrl, images, licenses, signCredit, signs, type SignId } from "@/content/media";
import { etapas, todasLasLecciones } from "@op/edicion";
import { getLeccion, imagenesUsadas, mediaDe, senalesUsadas } from "@op/lecciones";

export const metadata = { title: "Créditos de imágenes" };

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
  const ids = imagenesUsadas();
  const senales = senalesUsadas() as SignId[];
  const dondeSale = (id: string) => [
    ...etapas.filter((e) => (e.images as string[]).includes(id)).map((e) => ({ href: `/etapa/${e.id}`, title: e.title })),
    ...todasLasLecciones
      .filter((s) => (mediaDe(s)?.images as string[] | undefined)?.includes(id))
      .map((s) => ({ href: `/leccion/${s}#ver`, title: getLeccion(s)!.title })),
  ];
  const sum = (title: string, n?: number) => (
    <span className="font-medium">
      {title} {n !== undefined && <span className="text-sm font-normal text-muted">({n})</span>}
    </span>
  );

  return (
    <div className="max-w-4xl">
      <PageHeader
        crumbs={[{ href: "/", label: "Hoy" }, { label: "Créditos" }]}
        title="Créditos de imágenes"
        en="Credits and licences"
        icon="doc"
        lead="Todas las fotos, esquemas, señales y pictogramas proceden de Wikimedia Commons o de la CEPE/ONU y tienen licencia libre (dominio público o Creative Commons sin restricción de uso comercial). Esta formación no incluye vídeos ni simulaciones de terceros."
      />

      <div className="space-y-2">
        <Disclosure summary={sum("Cómo se han tratado las imágenes")}>
          <p className="max-w-[68ch] text-sm leading-relaxed text-muted">
            Se han reescalado y, en algunos casos, convertido de SVG o TIFF a JPG; no se ha cambiado su contenido. Las imágenes con licencia «SA» (compartir
            igual) siguen bajo esa misma licencia. Ninguna procede de una empresa concreta: los procesos, productos y equipos de esta formación son ficticios.
          </p>
        </Disclosure>

        <Disclosure summary={sum("Fotos y esquemas", ids.length)} defaultOpen>
          <ul className="-mx-4 -my-4 divide-y divide-line">
            {ids.map((id) => {
              const im = images[id];
              const where = dondeSale(id);
              return (
                <li key={id} className="flex gap-3 px-4 py-3 text-sm">
                  <Image
                    src={`/media/${im.file}`}
                    alt=""
                    width={80}
                    height={56}
                    unoptimized={im.file.endsWith(".svg")}
                    className="h-14 w-20 shrink-0 rounded-md border border-line bg-white object-cover"
                  />
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
                          <span key={w.href}>
                            {i > 0 && ", "}
                            <Link href={w.href} className="hover:text-accent hover:underline">
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
            <a
              href="https://unece.org/transport/dangerous-goods/ghs-pictograms"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 hover:text-ink"
            >
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

        <Disclosure summary={sum("Señales de seguridad", senales.length)}>
          <ul className="grid gap-x-6 gap-y-1.5 text-sm sm:grid-cols-2">
            {senales.map((id) => {
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
      </div>
    </div>
  );
}
