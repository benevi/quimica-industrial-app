import Link from "next/link";
import { allFdsItems } from "@/certs/pool";
import { pictograms, sdsList, sdsSections, type GhsCode } from "@/content/fds";
import { GhsPictogram } from "@/components/GhsPictogram";
import { FdsBest } from "@/components/fds/FdsBest";
import { FdsQuiz } from "@/components/fds/FdsQuiz";
import { PictogramGame } from "@/components/fds/PictogramGame";

export const metadata = { title: "Fichas de seguridad · Aula de Química" };

export default function FdsPage() {
  const general = allFdsItems().filter((it) => it.id.startsWith("fds:general:"));
  return (
    <div className="space-y-10">
      <div>
        <p className="text-sm font-medium text-accent">Seguridad · Safety Data Sheets (SDS)</p>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Aprende a leer una ficha de datos de seguridad</h1>
        <p className="mt-2 max-w-3xl text-muted">
          Todo producto peligroso que llega a planta viene con su <strong>FDS</strong> (ficha de datos de seguridad, <em>SDS</em>) y su etiqueta. Aquí tienes
          la guía para leerlas, seis fichas completas de productos típicos de una planta de principios activos y ejercicios. Los productos y proveedores
          son ficticios, pero los peligros, las frases y los límites son los reales.
        </p>
        <p className="mt-2 text-sm">
          Teoría en las lecciones{" "}
          <Link href="/leccion/pictogramas-y-fds" className="underline">Pictogramas, frases H y P y FDS</Link> y{" "}
          <Link href="/leccion/epi" className="underline">Equipos de protección individual</Link>.
        </p>
      </div>

      <section aria-labelledby="fichas-h" className="space-y-3">
        <h2 id="fichas-h" className="text-xl font-semibold">Fichas para practicar</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sdsList.map((s) => (
            <Link key={s.id} href={`/fds/${s.id}`} className="flex flex-col gap-2 rounded-2xl border border-line bg-surface p-4 transition hover:-translate-y-0.5 hover:border-accent">
              <div className="flex flex-wrap gap-1">
                {s.pictograms.map((c) => (
                  <GhsPictogram key={c} code={c} size={40} />
                ))}
              </div>
              <p className="font-semibold leading-snug">{s.product}</p>
              <p className="text-sm text-muted">{s.substance}</p>
              <div className="mt-auto flex items-center justify-between pt-1 text-sm">
                <span className={s.signal === "Peligro" ? "font-bold text-bad" : "font-semibold"}>{s.signal}</span>
                <FdsBest quizId={s.id} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section aria-labelledby="etiqueta-h" className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-line bg-surface p-5">
          <h2 id="etiqueta-h" className="text-xl font-semibold">La etiqueta en 30 segundos</h2>
          <p className="mt-1 text-sm text-muted">Reglamento CLP (CE 1272/2008) · Labelling</p>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm">
            <li><strong>Pictogramas</strong> (<em>pictograms</em>): rombos de borde rojo. Qué tipo de peligro.</li>
            <li><strong>Palabra de advertencia</strong> (<em>signal word</em>): <strong>Peligro</strong> (<em>Danger</em>) para lo más grave, <strong>Atención</strong> (<em>Warning</em>) para lo menos. Solo aparece una.</li>
            <li><strong>Indicaciones de peligro</strong>, frases <strong>H</strong> (<em>hazard statements</em>): qué te puede pasar. H2xx físicos, H3xx salud, H4xx medio ambiente. Las <strong>EUH</strong> son peligros añadidos en la UE.</li>
            <li><strong>Consejos de prudencia</strong>, frases <strong>P</strong> (<em>precautionary statements</em>): qué hacer. P1 generales, P2 prevención, P3 respuesta, P4 almacenamiento, P5 eliminación. Se combinan con «+»: P305+P351+P338.</li>
            <li>Nombre del producto, identificadores y <strong>proveedor</strong> con teléfono.</li>
          </ol>
        </div>
        <div className="rounded-2xl border border-line bg-surface p-5">
          <h2 className="text-xl font-semibold">Qué miro primero en la FDS</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li><strong>Sección 2</strong>: peligros. ¿Qué me puede hacer?</li>
            <li><strong>Sección 8</strong>: EPI y límites de exposición. ¿Qué me pongo?</li>
            <li><strong>Sección 7</strong>: manipulación e incompatibilidades. ¿Cómo lo cargo y dónde lo guardo?</li>
            <li><strong>Secciones 4, 5 y 6</strong>: primeros auxilios, incendio y vertido. ¿Qué hago si algo sale mal?</li>
            <li><strong>Sección 9</strong>: punto de inflamación, ebullición, densidad. ¿Arde a temperatura ambiente? ¿Flota?</li>
          </ul>
          <p className="mt-3 rounded-lg bg-warn-soft px-3 py-2 text-sm">
            La FDS la exige el <strong>Reglamento REACH</strong> (CE 1907/2006, anexo II). Tiene siempre las mismas 16 secciones en el mismo orden y debe estar en
            español y a tu alcance en planta.
          </p>
        </div>
      </section>

      <section aria-labelledby="secciones-h" className="space-y-3">
        <h2 id="secciones-h" className="text-xl font-semibold">Las 16 secciones</h2>
        <div className="overflow-x-auto rounded-2xl border border-line bg-surface">
          <table className="w-full text-left text-sm">
            <thead className="bg-soft text-xs uppercase tracking-wide text-muted">
              <tr>
                <th className="px-3 py-2">N.º</th>
                <th className="px-3 py-2">Sección</th>
                <th className="px-3 py-2">Qué trae</th>
                <th className="px-3 py-2">Cuándo la usas</th>
              </tr>
            </thead>
            <tbody>
              {sdsSections.map((s) => (
                <tr key={s.n} className={`border-t border-line align-top ${[2, 7, 8].includes(s.n) ? "bg-accent-soft/50" : ""}`}>
                  <td className="px-3 py-2 font-semibold tabular-nums">{s.n}</td>
                  <td className="px-3 py-2">
                    {s.title}
                    <span className="block text-xs text-muted">{s.en}</span>
                  </td>
                  <td className="px-3 py-2">{s.what}</td>
                  <td className="px-3 py-2 text-muted">{s.when}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="picto-h" className="space-y-3">
        <h2 id="picto-h" className="text-xl font-semibold">Los 9 pictogramas</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {(Object.keys(pictograms) as GhsCode[]).map((c) => (
            <div key={c} className="flex gap-3 rounded-2xl border border-line bg-surface p-3">
              <GhsPictogram code={c} size={72} />
              <div className="text-sm">
                <p className="font-semibold">
                  {c} · {pictograms[c].name}
                </p>
                <p className="text-xs text-muted">{pictograms[c].en}</p>
                <p className="mt-1">{pictograms[c].means}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted">Dibujos simplificados. Reglas de prioridad (CLP, art. 26): con GHS06 no se pone GHS07; con GHS05 no se pone GHS07 por irritación de piel u ojos.</p>
        <h3 className="pt-2 font-semibold">Practica: ¿qué pictograma es?</h3>
        <PictogramGame />
      </section>

      <FdsQuiz quizId="general" items={general} title="Ejercicios generales: secciones, frases y etiquetas" />
    </div>
  );
}
