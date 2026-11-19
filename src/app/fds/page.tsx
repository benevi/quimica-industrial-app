import Link from "next/link";
import { allFdsItems } from "@/certs/pool";
import { pictograms, sdsList, sdsSections, type GhsCode } from "@/content/fds";
import { GhsPictogram } from "@/components/GhsPictogram";
import { FdsBest } from "@/components/fds/FdsBest";
import { FdsQuiz } from "@/components/fds/FdsQuiz";
import { PictogramGame } from "@/components/fds/PictogramGame";
import { Disclosure, PageHeader, SectionTitle } from "@/components/ui";

export const metadata = { title: "Fichas de seguridad · Aula de Química" };

const link = "text-accent underline-offset-2 hover:underline";

export default function FdsPage() {
  const general = allFdsItems().filter((it) => it.id.startsWith("fds:general:"));
  return (
    <div className="space-y-12">
      <PageHeader
        crumbs={[{ href: "/", label: "Hoy" }, { label: "Fichas de seguridad" }]}
        title="Aprende a leer una ficha de datos de seguridad"
        en="Safety Data Sheets (SDS)"
        icon="hazard"
        lead={
          <>
            <p>
              Todo producto peligroso que llega a planta viene con su <strong className="text-ink">FDS</strong> (ficha de datos de seguridad,{" "}
              <span lang="en">SDS</span>) y su etiqueta. Aquí tienes la guía para leerlas, seis fichas completas de productos típicos de una planta de
              principios activos y ejercicios. Los productos y proveedores son ficticios, pero los peligros, las frases y los límites son los reales.
            </p>
            <p className="mt-2 text-sm">
              Teoría en las lecciones{" "}
              <Link href="/leccion/pictogramas-y-fds" className={link}>
                Pictogramas, frases H y P y FDS
              </Link>{" "}
              y{" "}
              <Link href="/leccion/epi" className={link}>
                Equipos de protección individual
              </Link>
              .
            </p>
          </>
        }
      />

      <section aria-labelledby="fichas-h">
        <SectionTitle id="fichas-h">Fichas para practicar</SectionTitle>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sdsList.map((s) => (
            <li key={s.id}>
              <Link
                href={`/fds/${s.id}`}
                className="group flex h-full flex-col gap-2 rounded-[var(--radius)] border border-line bg-surface p-4 hover:border-accent"
              >
                <div className="flex flex-wrap gap-1">
                  {s.pictograms.map((c) => (
                    <GhsPictogram key={c} code={c} size={40} />
                  ))}
                </div>
                <p className="font-medium leading-snug group-hover:text-accent">{s.product}</p>
                <p className="text-sm text-muted">{s.substance}</p>
                <div className="mt-auto flex items-center justify-between gap-2 pt-1 text-sm">
                  <span className={s.signal === "Peligro" ? "font-semibold text-bad" : "font-medium"}>{s.signal}</span>
                  <FdsBest quizId={s.id} />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="basico-h">
        <SectionTitle id="basico-h">Lo básico para leerlas</SectionTitle>
        <div className="space-y-2">
          <Disclosure
            summary={
              <>
                <span className="font-medium">La etiqueta en 30 segundos</span>
                <span className="block text-sm text-muted">
                  Reglamento CLP (CE 1272/2008) · <span lang="en">Labelling</span>
                </span>
              </>
            }
          >
            <ol className="max-w-[68ch] list-decimal space-y-2 pl-5 text-sm leading-relaxed">
              <li>
                <strong>Pictogramas</strong> (<em lang="en">pictograms</em>): rombos de borde rojo. Qué tipo de peligro.
              </li>
              <li>
                <strong>Palabra de advertencia</strong> (<em lang="en">signal word</em>): <strong>Peligro</strong> (<em lang="en">Danger</em>) para lo más grave,{" "}
                <strong>Atención</strong> (<em lang="en">Warning</em>) para lo menos. Solo aparece una.
              </li>
              <li>
                <strong>Indicaciones de peligro</strong>, frases <strong>H</strong> (<em lang="en">hazard statements</em>): qué te puede pasar. H2xx físicos, H3xx
                salud, H4xx medio ambiente. Las <strong>EUH</strong> son peligros añadidos en la UE.
              </li>
              <li>
                <strong>Consejos de prudencia</strong>, frases <strong>P</strong> (<em lang="en">precautionary statements</em>): qué hacer. P1 generales, P2
                prevención, P3 respuesta, P4 almacenamiento, P5 eliminación. Se combinan con «+»: <span className="font-mono">P305+P351+P338</span>.
              </li>
              <li>
                Nombre del producto, identificadores y <strong>proveedor</strong> con teléfono.
              </li>
            </ol>
          </Disclosure>

          <Disclosure summary={<span className="font-medium">Qué miro primero en la FDS</span>}>
            <ul className="max-w-[68ch] space-y-2 text-sm leading-relaxed">
              <li>
                <strong>Sección 2</strong>: peligros. ¿Qué me puede hacer?
              </li>
              <li>
                <strong>Sección 8</strong>: EPI y límites de exposición. ¿Qué me pongo?
              </li>
              <li>
                <strong>Sección 7</strong>: manipulación e incompatibilidades. ¿Cómo lo cargo y dónde lo guardo?
              </li>
              <li>
                <strong>Secciones 4, 5 y 6</strong>: primeros auxilios, incendio y vertido. ¿Qué hago si algo sale mal?
              </li>
              <li>
                <strong>Sección 9</strong>: punto de inflamación, ebullición, densidad. ¿Arde a temperatura ambiente? ¿Flota?
              </li>
            </ul>
            <p className="mt-3 max-w-[68ch] rounded-md bg-warn-soft px-3 py-2 text-sm">
              La FDS la exige el <strong>Reglamento REACH</strong> (CE 1907/2006, anexo II). Tiene siempre las mismas 16 secciones en el mismo orden y debe
              estar en español y a tu alcance en planta.
            </p>
          </Disclosure>

          <Disclosure
            summary={
              <>
                <span className="font-medium">Las 16 secciones</span>
                <span className="block text-sm text-muted">Las más usadas, 2, 7 y 8, van resaltadas</span>
              </>
            }
          >
            <div className="-mx-4 -my-4 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-soft text-muted">
                  <tr>
                    <th className="px-4 py-2 font-medium">N.º</th>
                    <th className="px-3 py-2 font-medium">Sección</th>
                    <th className="px-3 py-2 font-medium">Qué trae</th>
                    <th className="px-3 py-2 font-medium">Cuándo la usas</th>
                  </tr>
                </thead>
                <tbody>
                  {sdsSections.map((s) => (
                    <tr key={s.n} className={`border-t border-line align-top ${[2, 7, 8].includes(s.n) ? "bg-accent-soft/50" : ""}`}>
                      <td className="px-4 py-2 font-semibold tabular-nums">{s.n}</td>
                      <td className="px-3 py-2">
                        {s.title}
                        <span lang="en" className="block text-xs text-muted">
                          {s.en}
                        </span>
                      </td>
                      <td className="px-3 py-2">{s.what}</td>
                      <td className="px-3 py-2 text-muted">{s.when}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Disclosure>

          <Disclosure
            summary={
              <>
                <span className="font-medium">Los 9 pictogramas</span>
                <span className="block text-sm text-muted">Qué significa cada rombo</span>
              </>
            }
          >
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {(Object.keys(pictograms) as GhsCode[]).map((c) => (
                <li key={c} className="flex gap-3 rounded-md border border-line p-3">
                  <GhsPictogram code={c} size={72} />
                  <div className="text-sm">
                    <p className="font-medium">
                      <span className="font-mono">{c}</span> · {pictograms[c].name}
                    </p>
                    <p lang="en" className="text-xs text-muted">
                      {pictograms[c].en}
                    </p>
                    <p className="mt-1">{pictograms[c].means}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-muted">
              Dibujos simplificados. Reglas de prioridad (CLP, art. 26): con GHS06 no se pone GHS07; con GHS05 no se pone GHS07 por irritación de piel u ojos.
            </p>
          </Disclosure>
        </div>
      </section>

      <section aria-labelledby="picto-h">
        <SectionTitle id="picto-h">Practica: ¿qué pictograma es?</SectionTitle>
        <PictogramGame />
      </section>

      <FdsQuiz quizId="general" items={general} title="Ejercicios generales: secciones, frases y etiquetas" />
    </div>
  );
}
