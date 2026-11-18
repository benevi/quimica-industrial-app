import { getLesson } from "./index";
import type { IconName } from "@/components/icons";

/**
 * Ruta corta del operador de planta: lo imprescindible para el día a día en una planta de
 * principios activos (reactores, centrífugas, filtros y secaderos), antes del temario completo.
 * No tiene lecciones propias: reutiliza las del temario, en otro orden.
 */
export type OperatorStage = {
  id: string;
  title: string;
  titleEn: string;
  icon: IconName;
  /** Por qué importa en tu turno */
  why: string;
  lessons: string[];
  practice?: { href: string; label: string; text: string }[];
};

export const operatorStages: OperatorStage[] = [
  {
    id: "primer-dia",
    title: "Tu primer día: seguridad y orden",
    titleEn: "Day one: safety first",
    icon: "shield",
    why: "Antes de tocar un equipo tienes que saber dónde estás, qué EPI llevar y qué te dicen las etiquetas de los bidones.",
    lessons: ["planta-de-api", "pictogramas-y-fds", "epi", "emergencias-y-residuos"],
  },
  {
    id: "documentar",
    title: "Registrar bien lo que haces",
    titleEn: "Good documentation",
    icon: "doc",
    why: "En GMP lo que no está escrito no se hizo. La hoja de producción es tu herramienta principal y la revisa QA línea a línea.",
    lessons: ["alcoa-plus", "buenas-practicas-documentacion", "gmp-e-ich-q7", "desviaciones"],
  },
  {
    id: "cuentas",
    title: "Las cuentas de la hoja",
    titleEn: "Shop-floor math",
    icon: "calc",
    why: "Pesadas, litros a kilos, equivalentes y rendimientos: los cálculos que vas a hacer y comprobar en cada lote.",
    lessons: ["unidades-y-conversiones", "densidad", "el-mol", "rendimiento-y-balance"],
    practice: [{ href: "/calculadoras", label: "Calculadoras", text: "Repite las cuentas de la hoja con números distintos." }],
  },
  {
    id: "equipos",
    title: "Tus equipos",
    titleEn: "Your equipment",
    icon: "reactor",
    why: "Reactor, centrífuga, filtro y secadero: cómo funcionan, cómo se cargan y qué puede salir mal en cada uno.",
    lessons: ["tuberias-y-valvulas", "reactor-y-servicios", "carga-e-inertizacion", "calor-de-reaccion", "centrifuga", "filtros", "secaderos"],
    practice: [
      { href: "/mapa", label: "Mapa de planta", text: "Sitúa cada equipo en el recorrido del lote." },
      { href: "/simulador", label: "Simulador de lote", text: "Fabrica un lote completo, del reactor al secadero." },
    ],
  },
  {
    id: "control",
    title: "Leer el panel de control",
    titleEn: "Reading the control panel",
    icon: "gauge",
    why: "Temperaturas, presiones y niveles en pantalla, y qué hacer cuando salta una alarma o un enclavamiento.",
    lessons: ["medidas-de-proceso", "dcs-scada-recetas", "alarmas-y-enclavamientos"],
  },
  {
    id: "riesgos",
    title: "Trabajar sin accidentes",
    titleEn: "Working safely",
    icon: "lock",
    why: "Disolventes inflamables, polvo de producto activo y equipos con energía: cómo se controlan esos riesgos en planta.",
    lessons: ["incendio-y-atex", "exposicion-y-contencion", "permisos-y-consignacion"],
  },
  {
    id: "calidad-turno",
    title: "La calidad en tu turno",
    titleEn: "Quality on your shift",
    icon: "sample",
    why: "Tomar una muestra en proceso, limpiar entre lotes y entender por qué el laboratorio puede parar tu lote.",
    lessons: ["toma-de-muestras", "mantenimiento-gmp", "impurezas-ich"],
    practice: [{ href: "/simulador", label: "Simulador de lote", text: "Cierra un lote y mira qué te señala QA en la revisión." }],
  },
];

export const operatorSlugs = operatorStages.flatMap((s) => s.lessons);

export function operatorLessons(stage: OperatorStage) {
  return stage.lessons.map((slug) => {
    const l = getLesson(slug);
    if (!l) throw new Error(`Ruta del operador: no existe la lección «${slug}»`);
    return l;
  });
}
