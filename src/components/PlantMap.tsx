"use client";

import Link from "next/link";
import { useState } from "react";
import { getLesson } from "@/content/catalog";
import { blockColor, blockOfLevel } from "@/content/blocks";
import { Icon, type IconName } from "./icons";
import { PageHeader, btn } from "./ui";
import { useProgress } from "@/lib/progress";

type Stage = {
  id: string;
  title: string;
  icon: IconName;
  what: string;
  you: string;
  lessons: string[];
  practice?: { href: string; label: string };
};

/** Recorrido de un lote ficticio de API, de la materia prima al cliente. */
const flow: Stage[] = [
  {
    id: "recepcion",
    title: "Recepción y cuarentena",
    icon: "box",
    what: "Llegan las materias primas. Quedan en cuarentena hasta que el laboratorio las analiza y Calidad las aprueba.",
    you: "Solo se usan materiales con etiqueta de «aprobado» y dentro de fecha.",
    lessons: ["recepcion-y-cuarentena", "toma-de-muestras", "almacenamiento"],
  },
  {
    id: "carga",
    title: "Pesada y carga",
    icon: "scale",
    what: "Se pesan las cantidades de la hoja de producción y se cargan al reactor, normalmente bajo nitrógeno.",
    you: "Pesas, verificas con un segundo operador y anotas lote y peso en la hoja.",
    lessons: ["unidades-y-conversiones", "densidad", "el-mol", "balanzas-y-pesada", "carga-e-inertizacion"],
    practice: { href: "/calculadoras", label: "Calculadoras" },
  },
  {
    id: "reaccion",
    title: "Reacción",
    icon: "reactor",
    what: "En el reactor las materias primas se transforman en el producto, controlando temperatura, tiempo y agitación.",
    you: "Vigilas temperatura y presión, sigues las rampas y anotas las lecturas a su hora.",
    lessons: ["reactor-y-servicios", "ecuaciones-y-estequiometria", "calor-de-reaccion", "velocidad-y-catalisis", "reacciones-en-api"],
    practice: { href: "/simulador", label: "Simulador de planta" },
  },
  {
    id: "tratamiento",
    title: "Tratamiento",
    icon: "flask",
    what: "Se separa el producto de lo que sobra: lavados, separación de fases, destilación del disolvente.",
    you: "Decantas fases, destilas a vacío y controlas volúmenes y temperaturas.",
    lessons: ["extraccion-liquido-liquido", "destilacion", "acidos-bases-ph", "disolventes-organicos"],
  },
  {
    id: "cristalizacion",
    title: "Cristalización",
    icon: "hexagon",
    what: "Al enfriar o añadir otro disolvente, el producto sale de la disolución como cristales puros.",
    you: "Sigues la rampa de enfriamiento y compruebas que ha cristalizado.",
    lessons: ["la-materia", "cristalizacion", "polimorfismo-y-sales"],
  },
  {
    id: "separacion",
    title: "Filtración y centrifugación",
    icon: "pipe",
    what: "Se separan los cristales (torta húmeda) del líquido (aguas madres) en un filtro o una centrífuga.",
    you: "Descargas, lavas la torta y vigilas la presión o la velocidad de giro.",
    lessons: ["filtros", "centrifuga", "solidos-y-balances"],
    practice: { href: "/simulador", label: "Simulador de planta" },
  },
  {
    id: "secado",
    title: "Secado",
    icon: "thermo",
    what: "Se elimina el disolvente que queda en el sólido, con calor y vacío, hasta que la muestra cumple.",
    you: "Tomas muestra para pérdida por secado o disolventes residuales.",
    lessons: ["secaderos", "karl-fischer", "disolventes-organicos"],
    practice: { href: "/simulador", label: "Simulador de planta" },
  },
  {
    id: "molienda",
    title: "Molienda y tamizado",
    icon: "sample",
    what: "Se ajusta el tamaño de partícula del API seco para que cumpla la especificación.",
    you: "Trabajas con contención frente al polvo y anotas pesos de entrada y salida.",
    lessons: ["molienda-y-tamizado", "tamano-de-particula", "exposicion-y-contencion"],
  },
  {
    id: "envasado",
    title: "Envasado y etiquetado",
    icon: "box",
    what: "El API se envasa en bolsas y bidones etiquetados con el lote. Queda en cuarentena.",
    you: "Compruebas etiquetas, pesos netos y precintos.",
    lessons: ["envasado-y-etiquetado", "trazabilidad-y-distribucion"],
  },
  {
    id: "liberacion",
    title: "Análisis y liberación",
    icon: "badge",
    what: "El laboratorio analiza el lote; Calidad revisa la hoja de producción y, si todo cumple, lo libera.",
    you: "Tu hoja tiene que estar completa y sin errores: si no, el lote no sale.",
    lessons: ["especificaciones-y-metodos", "hplc", "certificado-de-analisis", "buenas-practicas-documentacion"],
    practice: { href: "/sap", label: "Simulador ERP" },
  },
];

/** Lo que acompaña a todas las etapas */
const support: Stage[] = [
  {
    id: "gmp",
    title: "GMP y documentación",
    icon: "doc",
    what: "Cada paso queda registrado en la hoja de producción siguiendo ALCOA+. Si algo se sale de lo previsto, se abre una desviación.",
    you: "Escribes lo que haces cuando lo haces, firmas y no corriges con típex.",
    lessons: ["gmp-e-ich-q7", "alcoa-plus", "buenas-practicas-documentacion", "desviaciones", "capa-y-control-de-cambios"],
  },
  {
    id: "lab",
    title: "Laboratorio de control",
    icon: "flask",
    what: "Analiza materias primas, controles en proceso y producto final.",
    you: "Tomas las muestras con la etiqueta correcta y las entregas a tiempo.",
    lessons: ["plan-de-muestreo", "toma-de-muestras", "hplc", "oos-y-oot"],
  },
  {
    id: "control",
    title: "Instrumentación y control",
    icon: "gauge",
    what: "Sensores, lazos PID, DCS/SCADA, alarmas y enclavamientos mantienen el proceso dentro de límites.",
    you: "Lees el panel, atiendes alarmas y nunca puenteas un enclavamiento.",
    lessons: ["medidas-de-proceso", "pid-y-simbologia", "lazos-de-control", "dcs-scada-recetas", "alarmas-y-enclavamientos"],
  },
  {
    id: "servicios",
    title: "Servicios auxiliares",
    icon: "pipe",
    what: "Vapor, agua de refrigeración, salmuera, nitrógeno, vacío, aire y agua purificada llegan por tuberías a cada equipo.",
    you: "Abres y cierras las válvulas de servicio en el orden que marca el procedimiento.",
    lessons: ["tuberias-y-valvulas", "bombas", "calor-vapor-intercambiadores", "frio-y-refrigeracion", "aire-y-nitrogeno", "agua-farmaceutica"],
  },
  {
    id: "seguridad",
    title: "Seguridad y medio ambiente",
    icon: "shield",
    what: "Disolventes inflamables, productos potentes y equipos a presión: la seguridad está en todas las etapas.",
    you: "Usas EPI, respetas zonas ATEX, permisos de trabajo y consignaciones.",
    lessons: ["pictogramas-y-fds", "epi", "incendio-y-atex", "permisos-y-consignacion", "emergencias-y-residuos"],
  },
  {
    id: "sistemas",
    title: "Sistemas informáticos",
    icon: "screen",
    what: "ERP para materiales, MES para la hoja electrónica, LIMS para el laboratorio. Todo con audit trail.",
    you: "Firmas con tu usuario y nunca compartes contraseña.",
    lessons: ["erp-y-trazabilidad", "mes-y-ebr", "lims", "audit-trail-y-firma-electronica"],
    practice: { href: "/sap", label: "Simulador ERP" },
  },
];

export function PlantMap() {
  const [sel, setSel] = useState<string>("reaccion");
  const { progress } = useProgress();
  const all = [...flow, ...support];
  const stage = all.find((s) => s.id === sel)!;
  const idx = flow.findIndex((s) => s.id === sel);

  return (
    <div>
      <PageHeader
        crumbs={[{ href: "/", label: "Hoy" }, { label: "Mapa de planta" }]}
        title="Mapa de planta"
        en="Plant map"
        icon="map"
        lead="El recorrido de un lote, de la materia prima al cliente. Pulsa una etapa para ver qué pasa en ella, qué haces tú como operador y qué lecciones la explican."
      />

      <div className="space-y-8">
        <section aria-labelledby="mapa-proceso" className="rounded-[var(--radius)] border border-line bg-surface p-4 sm:p-6">
          <h2 id="mapa-proceso" className="mb-4 text-sm font-medium text-muted">
            Proceso de fabricación, paso a paso
          </h2>
          <ol className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 lg:grid-cols-5">
            {flow.map((s, i) => {
              const on = s.id === sel;
              return (
                <li key={s.id} className="relative">
                  <button
                    type="button"
                    onClick={() => setSel(s.id)}
                    aria-pressed={on}
                    className={`flex h-full w-full flex-col items-center gap-2 rounded-[var(--radius)] border p-3 text-center ${
                      on ? "border-accent bg-accent-soft" : "border-line bg-surface hover:border-accent"
                    }`}
                  >
                    <span className={`grid h-10 w-10 place-items-center rounded-full ${on ? "bg-accent text-[var(--on-accent)]" : "bg-accent-soft text-accent"}`}>
                      <Icon name={s.icon} className="h-5 w-5" />
                    </span>
                    <span className="text-xs text-muted">Etapa {i + 1}</span>
                    <span className="text-sm font-medium leading-tight">{s.title}</span>
                  </button>
                  {i < flow.length - 1 && (i + 1) % 5 !== 0 && (
                    <span aria-hidden className="absolute -right-5 top-1/2 hidden -translate-y-1/2 lg:block">
                      <Icon name="chevron" className="h-4 w-4 text-line-strong" />
                    </span>
                  )}
                </li>
              );
            })}
          </ol>

          <h2 className="mb-3 mt-8 text-sm font-medium text-muted">Presente en todas las etapas</h2>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {support.map((s) => {
              const on = s.id === sel;
              return (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => setSel(s.id)}
                    aria-pressed={on}
                    className={`flex h-full w-full items-center gap-2 rounded-md border border-dashed px-3 py-2 text-left text-sm ${
                      on ? "border-accent bg-accent-soft font-medium" : "border-line-strong hover:border-accent"
                    }`}
                  >
                    <Icon name={s.icon} className="h-5 w-5 shrink-0 text-accent" />
                    {s.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </section>

        <section
          aria-live="polite"
          aria-labelledby="mapa-etapa"
          className="grid gap-6 rounded-[var(--radius)] border border-line bg-surface p-5 sm:p-6 lg:grid-cols-[1fr_1.1fr]"
        >
          <div>
            <p className="text-sm text-muted">{idx >= 0 ? `Etapa ${idx + 1} de ${flow.length}` : "En todas las etapas"}</p>
            <h2 id="mapa-etapa" className="t-h2 mt-0.5 flex items-center gap-2">
              <Icon name={stage.icon} className="h-6 w-6 text-accent" /> {stage.title}
            </h2>
            <p className="mt-3 max-w-[60ch] leading-relaxed">{stage.what}</p>
            <div className="mt-4 rounded-md border-l-2 border-accent bg-soft p-4 text-sm">
              <p className="font-medium">Qué haces tú como operador</p>
              <p className="mt-1 leading-relaxed">{stage.you}</p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {stage.practice && (
                <Link href={stage.practice.href} className={btn.primary}>
                  Practicar en {stage.practice.label}
                </Link>
              )}
              {idx > 0 && (
                <button type="button" onClick={() => setSel(flow[idx - 1].id)} className={btn.secondary}>
                  <Icon name="back" className="h-4 w-4" />
                  {flow[idx - 1].title}
                </button>
              )}
              {idx >= 0 && idx < flow.length - 1 && (
                <button type="button" onClick={() => setSel(flow[idx + 1].id)} className={btn.secondary}>
                  {flow[idx + 1].title}
                  <Icon name="arrow" className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
          <div>
            <h3 className="mb-2 font-medium">Lecciones que lo explican</h3>
            <ul className="space-y-2">
              {stage.lessons.map((slug) => {
                const l = getLesson(slug);
                if (!l) return null;
                const c = blockColor[blockOfLevel(l.level).id];
                const ok = progress[slug]?.done;
                return (
                  <li key={slug}>
                    <Link href={`/leccion/${slug}`} className="group flex items-center gap-3 rounded-md border border-line p-3 hover:border-accent">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md font-mono text-xs" style={{ background: c.soft, color: c.fg }}>
                        {ok ? <Icon name="check" className="h-4 w-4" /> : `N${l.level}`}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-medium group-hover:text-accent">
                          {l.title}
                          {ok && <span className="sr-only"> (hecha)</span>}
                        </span>
                        <span className="block truncate text-xs text-muted">{l.summary}</span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <p className="max-w-[68ch] text-sm text-muted">El proceso es ficticio y general: cada producto tiene sus propias etapas.</p>
      </div>
    </div>
  );
}
