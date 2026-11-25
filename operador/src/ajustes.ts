/**
 * Ajustes de texto de las lecciones en la edición de operador. Las lecciones son las mismas que en la edición completa;
 * aquí solo se cambian las frases que hablan de lo que esta edición no tiene (niveles del temario, simuladores, buscador,
 * lecciones que no están en ella).
 *
 * Cada `buscar` tiene que aparecer exactamente una vez en su lección: si alguien cambia el texto original,
 * `npm run check:operador` avisa para revisar el ajuste.
 */
export type Ajuste = { buscar: string; poner: string };

export const ajustes: Record<string, Ajuste[]> = {
  "empieza-aqui": [
    {
      buscar: "Lo verás con calma en «La materia y sus estados», en el nivel 1.",
      poner: "Lo verás con calma en «La materia y sus estados», en la etapa de química.",
    },
    {
      buscar: `### Cómo está montada el aula
Tienes dos caminos para estudiar:

- **Temario completo** (*full course*): 22 niveles, del 0 al 21, en 5 bloques. Las bases (niveles 0 a 3). El laboratorio de control (4 a 10). La planta (11 a 15). Calidad y salida del producto (16 y 17). Sistemas informáticos (18 a 21). Se sigue de arriba abajo, porque cada nivel se apoya en los anteriores.
- **Ruta del operador** (*operator track*): un camino corto con lo imprescindible para el turno, en siete etapas. Empieza por la seguridad y sigue con registrar bien, las cuentas de la hoja, tus equipos, el panel de control, los riesgos y la calidad. Usa lecciones del temario. Lo que completes en la ruta cuenta también en el temario.

Cada tema tiene una **lección corta**, de 10 a 20 minutos, y una versión **«a fondo»**, de unos 30 a 40 minutos. Hay además lecciones «a fondo» sin versión corta, que amplían un tema. Y unas pocas lecciones de apoyo, como las de energía o logaritmos, van solas, con una duración intermedia. Si una «a fondo» se te hace cuesta arriba, haz primero las cortas del nivel y vuelve después.`,
      poner: `### Cómo está montada esta formación
Está ordenada por **etapas** (*stages*), en el orden en que las vas a necesitar. Primero, la planta y la seguridad. Después, las normas de correcta fabricación (*GMP*) y la hoja de producción, y la química justa para entenderla. Por último, cada parte del proceso: los materiales que entran, los reactores, los filtros, las centrífugas, los secaderos, los servicios, el panel de control y la calidad en el turno.

Cada etapa tiene una página que te dice dónde encaja en el proceso, qué haces tú en ella y qué registras en la hoja. Debajo están sus lecciones.

Casi todas las lecciones son **cortas**, de 10 a 20 minutos. Dos son más largas, de unos 35 a 40 minutos, porque su tema lo pide: la hoja de producción y el turno. En las etapas de los equipos hay además lecciones de **ampliación** («a fondo»), de unos 30 a 40 minutos, para cuando quieras entenderlo con más detalle. No hacen falta para terminar la formación.`,
    },
    {
      buscar: "- **Imágenes y vídeos**: solo en las lecciones que los tienen.",
      poner: "- **Imágenes y vídeos**: solo en las lecciones que los tienen. Los vídeos se abren en YouTube, en otra pestaña.",
    },
    { buscar: "Algunas lecciones tienen también un apartado **«Practícalo en el simulador»**.\n\n", poner: "" },
    {
      buscar: "- **Buscador**: se abre con Ctrl K o con la tecla «/» y encuentra lecciones, términos y secciones.\n",
      poner: "",
    },
    {
      buscar: `- **Simuladores**: un lote completo con su hoja, un reactor con panel de control, un filtro-secador y hojas con errores para revisar como lo haría calidad.
- **Simulador ERP y certificaciones**: para más adelante. El primero lleva un lote por un sistema de gestión tipo SAP; el segundo prepara los certificados oficiales con simulacros.`,
      poner:
        "- **Fichas de seguridad**: fichas de práctica de productos habituales en planta, con ejercicios para aprender a leerlas. Son de práctica: en planta vale la ficha del proveedor.",
    },
    {
      buscar: "Lo verás por primera vez en el nivel 1, con los ácidos y las bases, y con calma en el nivel 2.",
      poner: "Lo verás con los ácidos y las bases, en la etapa de química.",
    },
    { buscar: "que verás en este mismo nivel.", poner: "que verás en la etapa de química." },
    {
      buscar: "- **Primero la ruta del operador**, si ya estás trabajando en planta. Después, el temario completo desde el nivel 0.",
      poner: "- **Las etapas, en orden.** Cada una se apoya en las anteriores. La de seguridad, antes de entrar en planta.",
    },
    {
      buscar: "- **Practica**: rehaz las cuentas con las calculadoras y usa los simuladores cuando una lección te lo proponga.",
      poner: "- **Practica**: rehaz las cuentas de las lecciones con las calculadoras.",
    },
    {
      buscar: "La siguiente lección es «Matemáticas útiles para planta»: las cuatro cuentas que harás en casi cada lote.",
      poner: "La siguiente lección es «Cómo es una planta de API»: cómo se organiza y qué recorrido hace un lote.",
    },
  ],
  "matematicas-utiles": [{ buscar: "principios ALCOA+, que verás en el nivel 20)", poner: "principios ALCOA+, que verás en la etapa de GMP)" }],
  "dcs-scada-recetas": [{ buscar: " Lo verás a fondo en el bloque de Sistemas informáticos (niveles 18 a 21).", poner: "" }],
  "mantenimiento-gmp": [{ buscar: "(consignación, lo verás en el nivel 15)", poner: "(consignación, la viste en la etapa de seguridad)" }],
  "hoja-de-produccion-a-fondo": [
    {
      buscar: " Lo verás en el nivel 20, en las lecciones sobre integridad de datos, registro de auditoría, firma electrónica y archivo.",
      poner: "",
    },
  ],
  "turno-y-factor-humano-a-fondo": [
    { buscar: " Es la idea del modo relevo del simulador del filtro-secador Nutsche de esta app.", poner: "" },
    {
      buscar: "según la NTP 562, que se explica en «Permisos de trabajo, consignación y espacios confinados a fondo», un permiso",
      poner: "según la NTP 562, un permiso",
    },
    {
      buscar: "(«Alarmas, enclavamientos y sistemas de seguridad a fondo»)",
      poner: "(«Alarmas, enclavamientos y sistemas de seguridad», en la etapa del panel de control)",
    },
    {
      buscar: " En la lección «Desviaciones y CAPA a fondo» tienes un caso resuelto con los cinco porqués y el diagrama de Ishikawa.",
      poner: "",
    },
  ],
  "disolventes-organicos": [{ buscar: "; la técnica se explica en el nivel 7)", poner: ")" }],
};

/** Aplica los ajustes a todos los textos de una lección (resumen, cuerpo, ejemplo, hoja, vocabulario y test). */
export function aplicarAjustes<T>(slug: string, valor: T): T {
  const lista = ajustes[slug];
  if (!lista) return valor;
  const fix = (s: string) => lista.reduce((t, a) => t.split(a.buscar).join(a.poner), s);
  const walk = (v: unknown): unknown =>
    typeof v === "string" ? fix(v) : Array.isArray(v) ? v.map(walk) : v && typeof v === "object" ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, walk(x)])) : v;
  return walk(valor) as T;
}
