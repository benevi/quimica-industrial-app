import type { Question } from "./types";

/**
 * Fichas de datos de seguridad (FDS · Safety Data Sheets, SDS) para practicar.
 *
 * Los productos son FICTICIOS: proveedor, nombres comerciales y números de registro son inventados.
 * Las sustancias sí son reales y sus peligros siguen la clasificación armonizada del Reglamento CLP
 * (CE 1272/2008, anexo VI) o la habitual de los proveedores. Los textos de las frases H y P son los
 * oficiales en español (anexos III y IV del CLP). Los límites de exposición son los VLA del INSST.
 * El intermedio FX-INT-07 es inventado del todo, con una clasificación coherente con las reglas del CLP.
 * Formato de las 16 secciones: anexo II de REACH (CE 1907/2006), modificado por el Reglamento (UE) 2020/878.
 */

export type GhsCode = "GHS01" | "GHS02" | "GHS03" | "GHS04" | "GHS05" | "GHS06" | "GHS07" | "GHS08" | "GHS09";

export const pictograms: Record<GhsCode, { name: string; en: string; means: string; examples: string }> = {
  GHS01: {
    name: "Bomba explotando",
    en: "Exploding bomb",
    means: "Explosivos, sustancias autorreactivas y peróxidos orgánicos que pueden explotar.",
    examples: "Algunos peróxidos orgánicos y azidas usados como reactivos.",
  },
  GHS02: {
    name: "Llama",
    en: "Flame",
    means: "Inflamables: gases, aerosoles, líquidos y sólidos; pirofóricos; los que desprenden gases inflamables con el agua.",
    examples: "Metanol, tolueno, acetona, hidrógeno.",
  },
  GHS03: {
    name: "Llama sobre un círculo",
    en: "Flame over circle",
    means: "Comburentes (oxidantes): aportan oxígeno y avivan o provocan un incendio.",
    examples: "Peróxido de hidrógeno concentrado, nitratos, oxígeno.",
  },
  GHS04: {
    name: "Bombona de gas",
    en: "Gas cylinder",
    means: "Gases a presión: comprimidos, licuados, refrigerados o disueltos. Pueden explotar al calentarse; los refrigerados causan quemaduras por frío.",
    examples: "Nitrógeno, argón, CO₂ en botellas.",
  },
  GHS05: {
    name: "Corrosión",
    en: "Corrosion",
    means: "Corrosivos para la piel y los ojos (quemaduras, lesiones oculares graves) y para los metales.",
    examples: "Sosa cáustica, ácido clorhídrico, ácido sulfúrico.",
  },
  GHS06: {
    name: "Calavera y tibias cruzadas",
    en: "Skull and crossbones",
    means: "Toxicidad aguda grave (categorías 1 a 3): puede matar o intoxicar gravemente con una sola exposición.",
    examples: "Metanol, cianuros, sulfato de dimetilo.",
  },
  GHS07: {
    name: "Signo de exclamación",
    en: "Exclamation mark",
    means: "Peligros menos graves: nocivo (toxicidad aguda 4), irritante, sensibilizante cutáneo, somnolencia o irritación respiratoria.",
    examples: "Tolueno (irritación cutánea, somnolencia), muchos intermedios.",
  },
  GHS08: {
    name: "Peligro para la salud",
    en: "Health hazard",
    means: "Efectos graves, a menudo a largo plazo: cancerígeno, mutágeno, tóxico para la reproducción, sensibilizante respiratorio, daño a órganos, peligro por aspiración.",
    examples: "Tolueno (feto, aspiración), metanol (daño a órganos), diclorometano.",
  },
  GHS09: {
    name: "Medio ambiente",
    en: "Environment",
    means: "Peligroso para el medio ambiente acuático (agudo 1, crónico 1 y 2). Con las categorías agudo 1 y crónico 1 la palabra de advertencia es «Atención»; con crónico 2 lleva el pictograma pero no palabra de advertencia.",
    examples: "Muchos intermedios y principios activos, sales de cobre.",
  },
};

/** Textos oficiales en español (CLP, anexo III). Entre corchetes, la parte que el proveedor concreta. */
export const hStatements: Record<string, string> = {
  H220: "Gas extremadamente inflamable.",
  H224: "Líquido y vapores extremadamente inflamables.",
  H225: "Líquido y vapores muy inflamables.",
  H226: "Líquidos y vapores inflamables.",
  H228: "Sólido inflamable.",
  H242: "Peligro de incendio en caso de calentamiento.",
  H260: "En contacto con el agua desprende gases inflamables que pueden inflamarse espontáneamente.",
  H271: "Puede provocar un incendio o una explosión; muy comburente.",
  H272: "Puede agravar un incendio; comburente.",
  H280: "Contiene gas a presión; peligro de explosión en caso de calentamiento.",
  H290: "Puede ser corrosivo para los metales.",
  H300: "Mortal en caso de ingestión.",
  H301: "Tóxico en caso de ingestión.",
  H302: "Nocivo en caso de ingestión.",
  H304: "Puede ser mortal en caso de ingestión y penetración en las vías respiratorias.",
  H311: "Tóxico en contacto con la piel.",
  H312: "Nocivo en contacto con la piel.",
  H314: "Provoca quemaduras graves en la piel y lesiones oculares graves.",
  H315: "Provoca irritación cutánea.",
  H317: "Puede provocar una reacción alérgica en la piel.",
  H318: "Provoca lesiones oculares graves.",
  H319: "Provoca irritación ocular grave.",
  H330: "Mortal en caso de inhalación.",
  H331: "Tóxico en caso de inhalación.",
  H332: "Nocivo en caso de inhalación.",
  H334: "Puede provocar síntomas de alergia o asma o dificultades respiratorias en caso de inhalación.",
  H335: "Puede irritar las vías respiratorias.",
  H336: "Puede provocar somnolencia o vértigo.",
  H340: "Puede provocar defectos genéticos [vía de exposición].",
  H350: "Puede provocar cáncer [vía de exposición].",
  H351: "Se sospecha que provoca cáncer [vía de exposición].",
  H360: "Puede perjudicar la fertilidad o dañar al feto [efecto y vía].",
  H361d: "Se sospecha que daña al feto.",
  H370: "Provoca daños en los órganos [órganos y vía de exposición].",
  H372: "Provoca daños en los órganos [órganos] tras exposiciones prolongadas o repetidas [vía].",
  H373: "Puede provocar daños en los órganos [órganos] tras exposiciones prolongadas o repetidas [vía].",
  H400: "Muy tóxico para los organismos acuáticos.",
  H410: "Muy tóxico para los organismos acuáticos, con efectos nocivos duraderos.",
  H411: "Tóxico para los organismos acuáticos, con efectos nocivos duraderos.",
  H412: "Nocivo para los organismos acuáticos, con efectos nocivos duraderos.",
  EUH014: "Reacciona violentamente con el agua.",
  EUH019: "Puede formar peróxidos explosivos.",
  EUH066: "La exposición repetida puede provocar sequedad o formación de grietas en la piel.",
  EUH071: "Corrosivo para las vías respiratorias.",
};

/** Textos oficiales en español (CLP, anexo IV). «…» es la parte que el proveedor concreta. */
export const pStatements: Record<string, string> = {
  P201: "Solicitar instrucciones especiales antes del uso.",
  P202: "No manipular la sustancia antes de haber leído y comprendido todas las instrucciones de seguridad.",
  P210: "Mantener alejado del calor, de superficies calientes, de chispas, de llamas abiertas y de cualquier otra fuente de ignición. No fumar.",
  P223: "Evitar el contacto con el agua.",
  P233: "Mantener el recipiente herméticamente cerrado.",
  P240: "Toma de tierra y enlace equipotencial del recipiente y del equipo receptor.",
  P241: "Utilizar material [eléctrico/de ventilación/iluminación/…] antideflagrante.",
  P242: "No utilizar herramientas que produzcan chispas.",
  P243: "Tomar medidas de precaución contra las descargas electrostáticas.",
  P260: "No respirar el polvo/el humo/el gas/la niebla/los vapores/el aerosol.",
  P261: "Evitar respirar el polvo/el humo/el gas/la niebla/los vapores/el aerosol.",
  P264: "Lavarse … concienzudamente tras la manipulación.",
  P270: "No comer, beber ni fumar durante su utilización.",
  P271: "Utilizar únicamente en exteriores o en un lugar bien ventilado.",
  P272: "Las prendas de trabajo contaminadas no podrán sacarse del lugar de trabajo.",
  P273: "Evitar su liberación al medio ambiente.",
  P280: "Llevar guantes/ropa de protección/equipo de protección para los ojos/la cara/los oídos/…",
  P284: "[En caso de ventilación insuficiente,] llevar equipo de protección respiratoria.",
  "P301+P310": "EN CASO DE INGESTIÓN: Llamar inmediatamente a un CENTRO DE TOXICOLOGÍA/médico/…",
  "P301+P330+P331": "EN CASO DE INGESTIÓN: Enjuagar la boca. NO provocar el vómito.",
  "P302+P352": "EN CASO DE CONTACTO CON LA PIEL: Lavar con abundante agua/…",
  "P303+P361+P353": "EN CASO DE CONTACTO CON LA PIEL (o el pelo): Quitar inmediatamente toda la ropa contaminada. Enjuagar la piel con agua [o ducharse].",
  "P304+P340": "EN CASO DE INHALACIÓN: Transportar a la persona al aire libre y mantenerla en una posición que le facilite la respiración.",
  "P305+P351+P338": "EN CASO DE CONTACTO CON LOS OJOS: Enjuagar con agua cuidadosamente durante varios minutos. Quitar las lentes de contacto cuando estén presentes y pueda hacerse con facilidad. Proseguir con el lavado.",
  "P308+P311": "EN CASO DE exposición manifiesta o presunta: Llamar a un CENTRO DE TOXICOLOGÍA/médico/…",
  "P308+P313": "EN CASO DE exposición manifiesta o presunta: consultar a un médico.",
  P310: "Llamar inmediatamente a un CENTRO DE TOXICOLOGÍA/médico/…",
  P312: "Llamar a un CENTRO DE TOXICOLOGÍA/médico/… si la persona se encuentra mal.",
  P314: "Consultar a un médico en caso de malestar.",
  P331: "NO provocar el vómito.",
  "P333+P313": "En caso de irritación o erupción cutánea: consultar a un médico.",
  P363: "Lavar las prendas contaminadas antes de volver a usarlas.",
  "P370+P378": "En caso de incendio: Utilizar … para la extinción.",
  P390: "Absorber el vertido para que no dañe otros materiales.",
  P391: "Recoger el vertido.",
  "P403+P233": "Almacenar en un lugar bien ventilado. Mantener el recipiente herméticamente cerrado.",
  "P403+P235": "Almacenar en un lugar bien ventilado. Mantener fresco.",
  P405: "Guardar bajo llave.",
  "P410+P403": "Proteger de la luz solar. Almacenar en un lugar bien ventilado.",
  P501: "Eliminar el contenido o el recipiente en …",
};

/** Las 16 secciones (anexo II de REACH) y para qué las usa un operador */
export const sdsSections: { n: number; title: string; en: string; what: string; when: string }[] = [
  { n: 1, title: "Identificación de la sustancia o la mezcla y de la sociedad o la empresa", en: "Identification", what: "Nombre del producto, usos, proveedor y teléfono de emergencia.", when: "Comprobar que la ficha es la del producto que tienes delante." },
  { n: 2, title: "Identificación de los peligros", en: "Hazard identification", what: "Clasificación, pictogramas, palabra de advertencia, frases H y P y otros peligros.", when: "Siempre, antes de manipular un producto nuevo para ti." },
  { n: 3, title: "Composición/información sobre los componentes", en: "Composition / information on ingredients", what: "Sustancias que contiene, CAS y CE, concentración y su clasificación.", when: "Saber qué hay dentro de una mezcla." },
  { n: 4, title: "Primeros auxilios", en: "First-aid measures", what: "Qué hacer por vía de exposición (inhalación, piel, ojos, ingestión) y síntomas.", when: "Ante un accidente. Llévala al médico." },
  { n: 5, title: "Medidas de lucha contra incendios", en: "Firefighting measures", what: "Agentes de extinción adecuados y prohibidos, peligros del fuego, equipo de bomberos.", when: "Plan de emergencia y si hay fuego cerca del producto." },
  { n: 6, title: "Medidas en caso de vertido accidental", en: "Accidental release measures", what: "Precauciones, cómo contener y limpiar, qué no hacer.", when: "Ante un derrame." },
  { n: 7, title: "Manipulación y almacenamiento", en: "Handling and storage", what: "Cómo manipular con seguridad, condiciones de almacén e incompatibilidades.", when: "Cargas, trasvases y almacenamiento." },
  { n: 8, title: "Controles de exposición/protección individual", en: "Exposure controls / personal protection (PPE)", what: "Límites de exposición (VLA), controles técnicos y EPI: ojos, manos, cuerpo, respiración.", when: "Elegir el EPI. La que más vas a usar." },
  { n: 9, title: "Propiedades físicas y químicas", en: "Physical and chemical properties", what: "Aspecto, olor, punto de ebullición, punto de inflamación, límites de explosividad, densidad, solubilidad.", when: "Entender cómo se comporta: ¿inflamable a temperatura ambiente? ¿flota en agua?" },
  { n: 10, title: "Estabilidad y reactividad", en: "Stability and reactivity", what: "Reacciones peligrosas, condiciones y materiales a evitar, productos de descomposición.", when: "Antes de mezclar o calentar; incompatibilidades." },
  { n: 11, title: "Información toxicológica", en: "Toxicological information", what: "Efectos en la salud: agudos, crónicos, CMR, datos como la DL50.", when: "Entender por qué es peligroso para ti." },
  { n: 12, title: "Información ecológica", en: "Ecological information", what: "Toxicidad para organismos acuáticos, persistencia, bioacumulación.", when: "Vertidos y residuos." },
  { n: 13, title: "Consideraciones relativas a la eliminación", en: "Disposal considerations", what: "Cómo eliminar el producto y sus envases.", when: "Gestión de residuos." },
  { n: 14, title: "Información relativa al transporte", en: "Transport information", what: "Número ONU, designación oficial, clase, grupo de embalaje (ADR).", when: "Recepción de cisternas y expediciones." },
  { n: 15, title: "Información reglamentaria", en: "Regulatory information", what: "Normas que le aplican: autorizaciones, restricciones, Seveso, almacenamiento.", when: "Más para técnicos de seguridad que para el turno." },
  { n: 16, title: "Otra información", en: "Other information", what: "Texto completo de las frases H, abreviaturas, fecha de revisión y cambios.", when: "Comprobar que la ficha está vigente y qué ha cambiado." },
];

export type Sds = {
  id: string;
  /** Nombre comercial ficticio */
  product: string;
  /** Sustancia o mezcla real que es */
  substance: string;
  icon: string;
  signal: "Peligro" | "Atención";
  pictograms: GhsCode[];
  h: string[];
  /** Consejos de prudencia de la etiqueta */
  p: string[];
  /** Lo que un operador tiene que sacar de esta ficha */
  keyPoints: string[];
  /** Contenido de cada sección (1–16), en Markdown */
  sections: string[];
  questions: Question[];
};

const SUPPLIER = (name: string) =>
  `**Proveedor (ficticio):** ${name}, Polígono Industrial El Soto, parcela 12, 50000 Villaficticia (España). Correo: fds@ejemplo.invalid\n\n**Teléfono de emergencia:** Servicio de Información Toxicológica (INTCF), 91 562 04 20 (24 h).`;

const FOOTER = (rev: string) =>
  `**Fecha de revisión:** ${rev} · versión 3.0. Formato conforme al Reglamento (UE) 2020/878.\n\n**Ficha ficticia para formación.** El proveedor, el nombre comercial y los números de registro son inventados. No sustituye a la FDS real de tu proveedor: en planta, usa siempre la vigente de tu empresa.`;

export const sdsList: Sds[] = [
  {
    id: "metanol",
    product: "SOLVEX M (metanol 99,9 %)",
    substance: "Metanol (methanol)",
    icon: "🧪",
    signal: "Peligro",
    pictograms: ["GHS02", "GHS06", "GHS08"],
    h: ["H225", "H301", "H311", "H331", "H370"],
    p: ["P210", "P233", "P280", "P301+P310", "P303+P361+P353", "P308+P311"],
    keyPoints: [
      "Es inflamable a temperatura ambiente: punto de inflamación de unos 10 °C.",
      "Es tóxico por las tres vías: respirarlo, tocarlo o tragarlo. Atraviesa la piel.",
      "Arde con una llama casi invisible a la luz del día.",
      "Los guantes de nitrilo solo valen para salpicaduras breves: para trabajar con él, guantes de caucho butilo.",
    ],
    sections: [
      `**Identificador:** SOLVEX M. Sustancia: metanol. N.º CAS 67-56-1 · N.º CE 200-659-6 · N.º índice 603-001-00-X.\n\n**Usos pertinentes:** disolvente de reacción y de cristalización en la fabricación de principios activos. **Usos desaconsejados:** uso por el público en general.\n\n${SUPPLIER("Disolventes Ribera S.A.")}`,
      `**Clasificación (Reglamento CE 1272/2008):** Flam. Liq. 2, H225 · Acute Tox. 3, H301 · Acute Tox. 3, H311 · Acute Tox. 3, H331 · STOT SE 1, H370 (ojos, sistema nervioso central).\n\n**Elementos de la etiqueta:** pictogramas GHS02, GHS06, GHS08 · palabra de advertencia **Peligro** · frases H y P: ver arriba.\n\n**Otros peligros:** llama casi invisible. Los vapores forman mezclas explosivas con el aire. Sus efectos tras la ingestión pueden tardar horas en aparecer.`,
      `Sustancia. Metanol ≥ 99,9 % (m/m). Agua ≤ 0,1 %.`,
      `**Inhalación:** sacar a la persona al aire libre, mantenerla en reposo. Llamar al médico.\n\n**Piel:** quitar la ropa contaminada, lavar con abundante agua al menos 15 minutos. Se absorbe por la piel: avisar al médico.\n\n**Ojos:** lavar con agua 15 minutos con los párpados abiertos. Quitar lentillas si es fácil.\n\n**Ingestión:** llamar inmediatamente a toxicología o al médico, aunque la persona se encuentre bien.\n\n**Síntomas:** dolor de cabeza, mareo, náuseas; tras 12–24 h, alteraciones de la vista y acidosis. **Nota para el médico:** existen antídotos (fomepizol, etanol) que se administran en el hospital.`,
      `**Medios de extinción adecuados:** espuma resistente al alcohol, polvo químico, CO₂, agua pulverizada para enfriar recipientes. **No usar:** chorro de agua directo (extiende el fuego).\n\n**Peligros específicos:** la llama apenas se ve de día. Los vapores pueden desplazarse hasta una fuente de ignición alejada. Al arder desprende monóxido de carbono y formaldehído.\n\n**Bomberos:** equipo de respiración autónomo y traje de protección.`,
      `Eliminar todas las fuentes de ignición. Ventilar. Usar EPI (sección 8). Contener con material absorbente no combustible (arena, vermiculita). Usar herramientas que no produzcan chispas. Evitar que llegue al alcantarillado. Recoger en recipientes cerrados y etiquetados como residuo.`,
      `**Manipulación:** trabajar en sistema cerrado o con extracción localizada. Toma de tierra y enlace equipotencial en trasvases. Inertizar con nitrógeno los equipos donde se carga. Material eléctrico apto para zona ATEX.\n\n**Almacenamiento:** lugar fresco y ventilado, recipientes cerrados, en cubeto de retención, lejos de oxidantes. **Incompatible con:** oxidantes fuertes, ácidos fuertes, metales alcalinos, aluminio y magnesio en polvo.`,
      `**Límite de exposición (INSST):** VLA-ED 200 ppm (266 mg/m³), con notación **vía dérmica** (la piel contribuye mucho a la exposición).\n\n**Controles técnicos:** sistema cerrado, extracción localizada, detectores de gas.\n\n**EPI:** gafas de montura integral; **guantes de caucho butilo** (EN ISO 374), el nitrilo solo para salpicaduras breves; ropa y calzado antiestáticos. **Respiración:** los filtros de vapores orgánicos duran poco con el metanol; si se pueden superar los límites, equipo con aporte de aire.`,
      `Líquido incoloro, olor alcohólico. Punto de fusión −98 °C · **punto de ebullición 65 °C** · **punto de inflamación ≈ 10 °C** (vaso cerrado) · límites de explosividad 6 – 36 % vol · densidad 0,79 g/cm³ (20 °C) · presión de vapor 12,9 kPa (20 °C) · miscible con agua.`,
      `Estable en condiciones normales. Evitar calor, chispas y llamas. Reacciona de forma peligrosa con oxidantes fuertes y con metales alcalinos (desprende hidrógeno). Productos de descomposición: monóxido de carbono, formaldehído.`,
      `Tóxico por ingestión, inhalación y contacto con la piel. El cuerpo lo transforma en formaldehído y ácido fórmico, que dañan el nervio óptico (puede causar ceguera) y producen acidosis. Pequeñas cantidades ingeridas pueden ser mortales. Efecto narcótico a concentraciones altas.`,
      `Fácilmente biodegradable. No bioacumulable. No clasificado como peligroso para el medio acuático, pero no debe llegar al alcantarillado ni a cauces.`,
      `Residuo peligroso. Código LER orientativo: 07 05 04* (otros disolventes, líquidos de limpieza y licores madre orgánicos). Se puede recuperar por destilación. Envases vacíos: como residuo peligroso salvo descontaminación.`,
      `**N.º ONU:** UN 1230 · **Designación:** METANOL · **Clase:** 3 (riesgo subsidiario 6.1) · **Grupo de embalaje:** II.`,
      `Reglamentos REACH y CLP. Almacenamiento: Real Decreto 656/2017 (APQ), ITC MIE APQ-1 (líquidos inflamables). Sustancia nominada en la normativa de accidentes graves (Seveso, RD 840/2015).`,
      `**Texto completo de las frases H:** ver sección 2.\n\n**Abreviaturas:** VLA-ED, valor límite ambiental de exposición diaria; LER, lista europea de residuos; ATEX, atmósferas explosivas.\n\n${FOOTER("15/03/2026")}`,
    ],
    questions: [
      {
        kind: "choice",
        q: "Según la FDS de SOLVEX M, ¿qué guantes usas para trabajar con metanol más de unos minutos?",
        options: ["Nitrilo fino desechable", "Caucho butilo", "Guantes de algodón", "Látex"],
        answer: 1,
        explain: "La sección 8 indica caucho butilo. El nitrilo solo sirve para salpicaduras breves: el metanol lo atraviesa enseguida.",
      },
      {
        kind: "choice",
        q: "Un compañero se ha salpicado el antebrazo con metanol y dice que no le pica. ¿Qué haces?",
        options: [
          "Nada, si no pica no pasa nada",
          "Secarlo con un trapo y seguir",
          "Quitar la ropa contaminada, lavar con agua al menos 15 min y avisar al médico: se absorbe por la piel",
          "Frotar con alcohol",
        ],
        answer: 2,
        explain: "Sección 4 y frase H311: es tóxico en contacto con la piel y el VLA lleva notación «vía dérmica». Que no pique no significa que no se absorba.",
      },
      {
        kind: "choice",
        q: "¿Por qué un incendio de metanol es especialmente traicionero?",
        options: ["Porque solo arde de noche", "Porque su llama es casi invisible de día", "Porque no se puede apagar", "Porque explota siempre"],
        answer: 1,
        explain: "La sección 5 avisa: la llama del metanol apenas se ve con luz de día. Puedes acercarte sin darte cuenta de que está ardiendo.",
      },
      {
        kind: "choice",
        q: "El metanol tiene un punto de inflamación de unos 10 °C. ¿Qué significa en tu sala?",
        options: [
          "Que solo es peligroso por encima de 10 °C de temperatura exterior en invierno",
          "Que a temperatura ambiente ya desprende vapores suficientes para inflamarse con una chispa",
          "Que hierve a 10 °C",
          "Que se congela a 10 °C",
        ],
        answer: 1,
        explain: "Por encima del punto de inflamación, el vapor sobre el líquido puede arder. A 20 °C ya estás por encima: hacen falta toma de tierra, inertización y material ATEX.",
      },
      {
        kind: "choice",
        q: "¿Qué pictograma de esta ficha indica que puede dañar órganos (los ojos y el sistema nervioso)?",
        options: ["GHS02 (llama)", "GHS06 (calavera)", "GHS08 (peligro para la salud)", "GHS07 (exclamación)"],
        answer: 2,
        explain: "H370 (STOT SE 1, daño a órganos) lleva el GHS08. La calavera (GHS06) es por la toxicidad aguda (H301, H311, H331).",
      },
    ],
  },
  {
    id: "tolueno",
    product: "SOLVEX T (tolueno)",
    substance: "Tolueno (toluene)",
    icon: "🛢️",
    signal: "Peligro",
    pictograms: ["GHS02", "GHS07", "GHS08"],
    h: ["H225", "H304", "H315", "H336", "H361d", "H373", "H412"],
    p: ["P201", "P210", "P240", "P280", "P301+P310", "P331"],
    keyPoints: [
      "Muy inflamable: punto de inflamación de unos 4 °C. Sus vapores pesan más que el aire y se acumulan abajo.",
      "Conduce mal la electricidad: se carga de electricidad estática al bombearlo. Toma de tierra siempre.",
      "Si alguien lo traga, NO provocar el vómito: puede pasar a los pulmones (H304).",
      "Se sospecha que daña al feto (H361d): las trabajadoras embarazadas deben comunicarlo para adaptar el puesto.",
    ],
    sections: [
      `**Identificador:** SOLVEX T. Sustancia: tolueno. N.º CAS 108-88-3 · N.º CE 203-625-9 · N.º índice 601-021-00-3.\n\n**Usos pertinentes:** disolvente de reacción y de extracción en la industria química y farmacéutica.\n\n${SUPPLIER("Disolventes Ribera S.A.")}`,
      `**Clasificación:** Flam. Liq. 2, H225 · Asp. Tox. 1, H304 · Skin Irrit. 2, H315 · STOT SE 3, H336 · Repr. 2, H361d · STOT RE 2, H373 (sistema nervioso central, por inhalación) · Aquatic Chronic 3, H412. Las seis primeras son la clasificación armonizada (CLP, anexo VI, n.º índice 601-021-00-3); H412 la añade el proveedor.\n\n**Etiqueta:** GHS02, GHS07, GHS08 · **Peligro**. (Aquatic Chronic 3 no lleva pictograma.)\n\n**Otros peligros:** líquido poco conductor: acumula cargas electrostáticas al fluir. Vapores más densos que el aire.`,
      `Sustancia. Tolueno ≥ 99,5 %.`,
      `**Inhalación:** aire libre y reposo; si hay mareo o somnolencia, médico.\n\n**Piel:** lavar con agua y jabón. Quitar la ropa contaminada.\n\n**Ojos:** lavar con agua varios minutos.\n\n**Ingestión:** **NO provocar el vómito** (riesgo de aspiración a los pulmones, neumonitis química). Llamar inmediatamente a toxicología o al médico.`,
      `**Medios adecuados:** espuma, polvo químico, CO₂. **No usar:** chorro de agua (el tolueno flota y el fuego se extiende).\n\n**Peligros:** los vapores se acumulan en zonas bajas y pueden inflamarse lejos del punto de fuga. Al arder, CO y CO₂.`,
      `Eliminar fuentes de ignición, ventilar, EPI. Contener con absorbente inerte. Herramientas antichispa. Impedir que llegue a desagües (flota y forma atmósferas explosivas en la red).`,
      `**Manipulación:** puesta a tierra y enlace equipotencial de todos los equipos; **limitar la velocidad de llenado** al principio y evitar la caída libre del líquido (carga por el fondo o con tubo buzo). Inertizar con nitrógeno. Material ATEX.\n\n**Almacenamiento:** fresco, ventilado, recipientes cerrados, en cubeto. **Incompatible con:** oxidantes fuertes (ácido nítrico, peróxidos).`,
      `**VLA (INSST):** VLA-ED 50 ppm (192 mg/m³) · VLA-EC 100 ppm (384 mg/m³) · notación **vía dérmica**.\n\n**EPI:** gafas de montura integral; **guantes de Viton (FKM) o de alcohol polivinílico (PVA)**, el nitrilo solo para salpicaduras; ropa y calzado antiestáticos. **Respiración:** máscara con filtro **A** (marrón) si la ventilación no basta.`,
      `Líquido incoloro, olor aromático. **Punto de ebullición 111 °C** · **punto de inflamación ≈ 4 °C** · límites de explosividad 1,1 – 7,1 % vol · densidad 0,87 g/cm³ · densidad de vapor 3,1 (aire = 1) · prácticamente insoluble en agua.`,
      `Estable. Evitar calor y fuentes de ignición. Reacciona violentamente con oxidantes fuertes.`,
      `Irrita la piel y la reseca. Por inhalación: dolor de cabeza, somnolencia y vértigo (efecto sobre el sistema nervioso). Si se traga y pasa a los pulmones puede ser mortal. Se sospecha que daña al feto. La exposición repetida puede dañar el sistema nervioso y el oído.`,
      `Nocivo para los organismos acuáticos, con efectos nocivos duraderos (H412). Poco soluble y muy volátil; fácilmente biodegradable. No verter a desagües ni cauces.`,
      `Residuo peligroso. LER orientativo 07 05 04*. Recuperable por destilación.`,
      `**UN 1294** · TOLUENO · Clase 3 · Grupo de embalaje II.`,
      `REACH: restricción del anexo XVII, entrada 48 (adhesivos y pinturas en aerosol para el público). APQ: ITC MIE APQ-1 (líquidos inflamables).`,
      `Abreviaturas: VLA-EC, valor límite de exposición de corta duración (15 min).\n\n${FOOTER("02/06/2026")}`,
    ],
    questions: [
      {
        kind: "choice",
        q: "Un compañero se ha tragado un poco de tolueno. ¿Qué haces?",
        options: ["Provocarle el vómito cuanto antes", "NO provocar el vómito y llamar inmediatamente a toxicología o al médico", "Darle leche", "Esperar a ver si tiene síntomas"],
        answer: 1,
        explain: "H304 y P331: si vomita, el tolueno puede pasar a los pulmones y causar una neumonitis grave. Por eso la ficha dice NO provocar el vómito.",
      },
      {
        kind: "choice",
        q: "Vas a llenar un reactor con tolueno desde un bidón. ¿Qué medida pide la sección 7 por ser poco conductor?",
        options: [
          "Llenar lo más rápido posible",
          "Toma de tierra y enlace equipotencial, y llenar despacio al principio sin caída libre",
          "Abrir la boca de hombre para ventilar",
          "Nada especial",
        ],
        answer: 1,
        explain: "Al fluir se carga de electricidad estática. Una chispa puede inflamar los vapores. Tierra, enlace equipotencial, velocidad baja e inertización.",
      },
      {
        kind: "choice",
        q: "Hay un pequeño fuego de tolueno en un cubeto. ¿Qué NO debes usar?",
        options: ["Espuma", "Polvo químico", "CO₂", "Chorro de agua"],
        answer: 3,
        explain: "El tolueno no se mezcla con el agua y flota: el chorro de agua lo salpica y extiende el fuego (sección 5).",
      },
      {
        kind: "choice",
        q: "¿Qué filtro de máscara indica la ficha para los vapores de tolueno?",
        options: ["P (blanco)", "A (marrón)", "K (verde)", "E (amarillo)"],
        answer: 1,
        explain: "Filtro A, marrón: vapores orgánicos con punto de ebullición superior a 65 °C. El tolueno hierve a 111 °C.",
      },
      {
        kind: "choice",
        q: "¿Por qué la etiqueta del tolueno lleva el pictograma GHS08?",
        options: [
          "Porque es corrosivo",
          "Por el peligro de aspiración, la sospecha de daño al feto y el daño a órganos por exposición repetida",
          "Porque es tóxico para los peces",
          "Porque es un gas a presión",
        ],
        answer: 1,
        explain: "H304, H361d y H373 llevan el GHS08 (peligro para la salud). El GHS07 es por la irritación (H315) y la somnolencia (H336).",
      },
    ],
  },
  {
    id: "sosa-50",
    product: "CAUSTIL 50 (sosa cáustica al 50 %)",
    substance: "Hidróxido de sodio en disolución 50 % (sodium hydroxide solution)",
    icon: "⚗️",
    signal: "Peligro",
    pictograms: ["GHS05"],
    h: ["H290", "H314"],
    p: ["P260", "P280", "P301+P330+P331", "P303+P361+P353", "P305+P351+P338", "P310"],
    keyPoints: [
      "Quema la piel y destruye los ojos. Una salpicadura en el ojo puede dejarte ciego: pantalla facial además de gafas.",
      "Ante una salpicadura, agua abundante de inmediato y mucho tiempo (al menos 15 min), en la ducha o el lavaojos.",
      "Ataca el aluminio y el zinc desprendiendo hidrógeno inflamable.",
      "Al 50 % se solidifica por debajo de unos 12 °C: por eso los tanques y las líneas están calorifugados.",
    ],
    sections: [
      `**Identificador:** CAUSTIL 50. Mezcla: hidróxido de sodio en disolución acuosa al 50 %. Hidróxido de sodio: CAS 1310-73-2 · CE 215-185-5 · índice 011-002-00-6.\n\n**Usos:** neutralizaciones, ajuste de pH, lavados alcalinos y limpieza de equipos.\n\n${SUPPLIER("Químicas del Moncayo S.L.")}`,
      `**Clasificación:** Met. Corr. 1, H290 · Skin Corr. 1A, H314. (Las lesiones oculares graves van incluidas en H314.)\n\n**Etiqueta:** GHS05 · **Peligro**.\n\n**Otros peligros:** reacción muy exotérmica al diluirla o al mezclarla con ácidos.`,
      `Hidróxido de sodio 49–51 % · agua hasta 100 %.`,
      `**Ojos:** lavar **de inmediato** con agua abundante durante al menos 15 minutos, con los párpados abiertos, en el lavaojos. Quitar lentillas si es fácil. Llamar al médico: los álcalis siguen penetrando en el ojo.\n\n**Piel:** ducha de seguridad, quitar la ropa contaminada bajo el agua, lavar mucho tiempo.\n\n**Ingestión:** enjuagar la boca, **NO provocar el vómito**, llamar al médico.\n\n**Inhalación de nieblas:** aire libre.`,
      `El producto no arde. Usar el agente adecuado para el fuego del entorno. **Peligro:** en contacto con aluminio, zinc o estaño desprende **hidrógeno**, que es inflamable y explosivo.`,
      `EPI completo (sección 8). Contener con arena o absorbente inerte. Neutralizar con cuidado con un ácido débil diluido (genera calor). Lavar la zona con mucha agua.`,
      `**Manipulación:** al diluir, **añadir la sosa al agua** poco a poco y con agitación, nunca al revés: el calor puede hacerla hervir y salpicar. No mezclar con ácidos fuera de un proceso controlado.\n\n**Almacenamiento:** acero al carbono, acero inoxidable o polietileno. **Nunca aluminio, zinc, latón ni cobre.** Mantener por encima de 15 °C para que no cristalice. Separada de ácidos.`,
      `**VLA (INSST):** VLA-EC 2 mg/m³ (nieblas).\n\n**EPI:** **pantalla facial sobre gafas de montura integral**; guantes de neopreno, nitrilo o butilo de puño largo; delantal o traje químico; botas de goma. Duchas de seguridad y lavaojos cerca y probados.`,
      `Líquido incoloro, viscoso, sin olor. pH ≈ 14 · densidad 1,52 g/cm³ (20 °C) · **cristaliza hacia los 12–13 °C** · punto de ebullición ≈ 143 °C · miscible con agua (desprende calor).`,
      `Estable. **Reacciona violentamente con ácidos.** Con aluminio, zinc y estaño desprende hidrógeno. Absorbe CO₂ del aire.`,
      `Muy corrosivo para todos los tejidos. Produce quemaduras profundas que al principio pueden doler poco. En los ojos causa lesiones graves y permanentes, incluso ceguera.`,
      `Eleva mucho el pH del agua: dañino para los organismos acuáticos hasta que se neutraliza. No se acumula.`,
      `Neutralizar antes de eliminar. Residuo peligroso, LER orientativo 06 02 04* (hidróxido potásico e hidróxido sódico).`,
      `**UN 1824** · HIDRÓXIDO SÓDICO EN SOLUCIÓN · Clase 8 · Grupo de embalaje II.`,
      `REACH, CLP. APQ: ITC MIE APQ-6 (almacenamiento de líquidos corrosivos).`,
      `${FOOTER("10/01/2026")}`,
    ],
    questions: [
      {
        kind: "choice",
        q: "Te salpica sosa al 50 % en un ojo. ¿Qué haces?",
        options: [
          "Frotar el ojo con un pañuelo",
          "Lavar en el lavaojos de inmediato, con abundante agua y al menos 15 minutos, y avisar al médico",
          "Neutralizar con vinagre",
          "Lavar 10 segundos y seguir trabajando",
        ],
        answer: 1,
        explain: "P305+P351+P338 y sección 4: agua enseguida y mucho tiempo. Nunca neutralizar en el ojo. Los álcalis siguen penetrando y pueden dejar ceguera.",
      },
      {
        kind: "choice",
        q: "¿Qué EPI de ojos y cara pide la sección 8 para trasvasar sosa al 50 %?",
        options: ["Gafas de sol", "Gafas de seguridad normales", "Pantalla facial sobre gafas de montura integral", "Ninguno si llevas guantes"],
        answer: 2,
        explain: "Para salpicaduras de corrosivos: gafas que cierran alrededor del ojo y pantalla facial encima.",
      },
      {
        kind: "choice",
        q: "Hay que diluir sosa al 50 % con agua. ¿Cómo se hace?",
        options: [
          "Echar el agua sobre la sosa de golpe",
          "Añadir la sosa al agua poco a poco y con agitación",
          "Da igual el orden",
          "Calentar primero la sosa",
        ],
        answer: 1,
        explain: "La dilución desprende mucho calor. Añadiendo el concentrado al agua poco a poco, el calor se reparte y no hierve ni salpica (sección 7).",
      },
      {
        kind: "choice",
        q: "¿Por qué no se puede guardar la sosa en un recipiente de aluminio?",
        options: [
          "Porque se pone de color azul",
          "Porque lo ataca y desprende hidrógeno, que es inflamable",
          "Porque el aluminio es caro",
          "Porque se congela",
        ],
        answer: 1,
        explain: "Secciones 7 y 10: con aluminio, zinc o estaño se forma hidrógeno. Además el recipiente se corroe (H290).",
      },
      {
        kind: "choice",
        q: "En invierno la línea de sosa al 50 % se ha atascado. ¿Cuál es la causa más probable según la sección 9?",
        options: ["Se ha evaporado", "Ha cristalizado por el frío (por debajo de unos 12 °C)", "Ha reaccionado con el aire", "Se ha convertido en gas"],
        answer: 1,
        explain: "La sosa al 50 % se solidifica alrededor de 12 °C. Por eso tanques y tuberías llevan traceado y aislamiento.",
      },
    ],
  },
  {
    id: "hcl-35",
    product: "CLORAC 35 (ácido clorhídrico 35 %)",
    substance: "Ácido clorhídrico 35 % (hydrochloric acid)",
    icon: "🧯",
    signal: "Peligro",
    pictograms: ["GHS05", "GHS07"],
    h: ["H290", "H314", "H335"],
    p: ["P260", "P280", "P303+P361+P353", "P304+P340", "P305+P351+P338", "P310"],
    keyPoints: [
      "Corrosivo para la piel y los ojos, y sus vapores irritan las vías respiratorias: «humea» al aire.",
      "Nunca mezclarlo con lejía (hipoclorito): desprende cloro, un gas tóxico.",
      "Con metales desprende hidrógeno.",
      "Para los vapores, filtro E (amarillo) o combinado.",
    ],
    sections: [
      `**Identificador:** CLORAC 35. Mezcla: ácido clorhídrico al 35 % en agua. Cloruro de hidrógeno: CAS 7647-01-0 · CE 231-595-7 · índice 017-002-01-X.\n\n**Usos:** ajuste de pH, formación de sales (clorhidratos) del principio activo, limpieza ácida.\n\n${SUPPLIER("Químicas del Moncayo S.L.")}`,
      `**Clasificación:** Met. Corr. 1, H290 · Skin Corr. 1B, H314 · STOT SE 3, H335.\n\n**Etiqueta:** GHS05, GHS07 · **Peligro**.\n\n**Otros peligros:** desprende cloruro de hidrógeno gaseoso. Con hipoclorito desprende cloro.`,
      `Cloruro de hidrógeno 34–36 % · agua hasta 100 %.`,
      `**Inhalación:** aire libre, reposo. Si hay tos o dificultad para respirar, médico (los síntomas pulmonares pueden aparecer horas después).\n\n**Piel:** ducha, quitar ropa contaminada.\n\n**Ojos:** lavaojos al menos 15 min; médico.\n\n**Ingestión:** enjuagar la boca, no provocar el vómito, médico.`,
      `No combustible. Con metales puede desprender hidrógeno. En incendio desprende cloruro de hidrógeno. Agua pulverizada para abatir los vapores y enfriar recipientes.`,
      `Evacuar la zona, EPI con protección respiratoria. Contener; neutralizar con cuidado con carbonato o bicarbonato sódico o cal. Abatir los vapores con agua pulverizada. No dejar que llegue a desagües.`,
      `**Manipulación:** en sistema cerrado o con extracción; tanques con venteo a un lavador de gases (*scrubber*). Al diluir, añadir el ácido al agua.\n\n**Almacenamiento:** recipientes de plástico (PE, PP), acero ebonitado o vidrio. **Separado de bases, oxidantes e hipocloritos.** No usar metales.`,
      `**VLA (INSST, cloruro de hidrógeno):** VLA-ED 5 ppm (7,6 mg/m³) · VLA-EC 10 ppm (15 mg/m³).\n\n**EPI:** gafas de montura integral y pantalla facial; guantes de neopreno, PVC o butilo; ropa resistente a ácidos. **Respiración:** máscara con filtro **E** (amarillo, gases ácidos) o combinado ABEK si se superan los límites.`,
      `Líquido incoloro o amarillento, olor picante. pH < 1 · densidad 1,17 g/cm³ · desprende vapores a temperatura ambiente · miscible con agua.`,
      `Estable. **Reacciona violentamente con bases.** Con hipocloritos y oxidantes fuertes desprende **cloro**. Con metales, **hidrógeno**. Con sulfuros, sulfuro de hidrógeno.`,
      `Corrosivo para piel, ojos y mucosas. Los vapores irritan nariz, garganta y pulmones; a concentraciones altas, edema pulmonar.`,
      `Acidifica el agua: dañino para los organismos acuáticos hasta neutralizarse.`,
      `Neutralizar antes de eliminar. LER orientativo 06 01 02* (ácido clorhídrico).`,
      `**UN 1789** · ÁCIDO CLORHÍDRICO · Clase 8 · Grupo de embalaje II.`,
      `REACH, CLP. Precursor de drogas de categoría 3 (Reglamento CE 273/2004): compras y ventas registradas. APQ: ITC MIE APQ-6.`,
      `${FOOTER("21/09/2025")}`,
    ],
    questions: [
      {
        kind: "choice",
        q: "Limpiando un derrame de ácido clorhídrico, alguien propone echar lejía. ¿Qué dices?",
        options: ["Buena idea, desinfecta", "¡No! El ácido con hipoclorito desprende cloro, un gas tóxico", "Solo si está diluida", "Da igual"],
        answer: 1,
        explain: "Sección 10: con hipocloritos se forma cloro. La ficha manda neutralizar con carbonato, bicarbonato o cal.",
      },
      {
        kind: "choice",
        q: "¿Por qué esta etiqueta lleva GHS07 además de GHS05?",
        options: ["Por la toxicidad aguda", "Por H335: puede irritar las vías respiratorias", "Porque es inflamable", "Por el peligro para el medio ambiente"],
        answer: 1,
        explain: "GHS05 cubre la corrosión (H290, H314). La irritación respiratoria (STOT SE 3, H335) lleva el signo de exclamación.",
      },
      {
        kind: "choice",
        q: "¿Qué filtro de máscara corresponde a los vapores de ácido clorhídrico?",
        options: ["A (marrón)", "E (amarillo)", "P (blanco)", "K (verde)"],
        answer: 1,
        explain: "El filtro E, amarillo, es para gases ácidos. La ficha admite también el combinado ABEK.",
      },
      {
        kind: "choice",
        q: "¿Dónde no debes almacenar el ácido clorhídrico?",
        options: ["En un depósito de polietileno", "Junto a la sosa cáustica y la lejía", "En un recipiente de vidrio", "En un cubeto de retención"],
        answer: 1,
        explain: "Sección 7: separado de bases (reacción violenta) y de hipocloritos (cloro). El polietileno y el vidrio sí son materiales adecuados.",
      },
    ],
  },
  {
    id: "nitrogeno",
    product: "INERTAL N2 (nitrógeno comprimido)",
    substance: "Nitrógeno (nitrogen)",
    icon: "🫧",
    signal: "Atención",
    pictograms: ["GHS04"],
    h: ["H280"],
    p: ["P410+P403"],
    keyPoints: [
      "No es tóxico, pero desplaza el oxígeno: asfixia sin aviso, porque no huele ni se ve.",
      "Lo usas para inertizar reactores, centrífugas y filtros: el interior de esos equipos puede no tener oxígeno.",
      "Antes de entrar o asomarte a un equipo inertizado: permiso de trabajo y medir el oxígeno.",
      "Un rescate sin equipo autónomo suele acabar con dos víctimas en vez de una.",
    ],
    sections: [
      `**Identificador:** INERTAL N2. Sustancia: nitrógeno. CAS 7727-37-9 · CE 231-783-9.\n\n**Usos:** inertización de equipos, transferencias por presión, secado.\n\n${SUPPLIER("Gases Técnicos del Valle S.A.")}`,
      `**Clasificación:** Press. Gas (Comp.), H280.\n\n**Etiqueta:** GHS04 · **Atención**.\n\n**Otros peligros:** **asfixiante simple** a concentraciones altas. No tiene olor ni color: no avisa.`,
      `Nitrógeno ≥ 99,99 % (vol).`,
      `**Inhalación:** el rescatador debe llevar **equipo de respiración autónomo**. Sacar a la víctima al aire libre, mantenerla caliente y en reposo, reanimación si no respira, llamar a emergencias.\n\nSíntomas: pérdida de conciencia rápida, sin señales previas.`,
      `No inflamable. Las botellas expuestas al fuego pueden reventar: enfriarlas con agua desde un lugar protegido y, si se puede, sacarlas de la zona.`,
      `Evacuar, ventilar. No entrar en la zona sin medir el oxígeno o sin equipo autónomo. Cerrar la fuga si se puede sin riesgo.`,
      `**Manipulación:** botellas sujetas, con caperuza en el transporte; usar reductor de presión; abrir las válvulas despacio. En equipos inertizados y espacios confinados: **permiso de trabajo, ventilación y medición de oxígeno** antes de entrar.\n\n**Almacenamiento:** lugar ventilado, por debajo de 50 °C, botellas en vertical y sujetas.`,
      `Sin VLA (asfixiante simple: el riesgo es la falta de oxígeno). **Controles:** detectores de oxígeno en salas donde pueda acumularse.\n\n**EPI:** gafas y guantes para manipular botellas; calzado de seguridad. Los filtros de máscara **no sirven**: no aportan oxígeno. En atmósfera pobre en oxígeno, **equipo autónomo** o con línea de aire.`,
      `Gas incoloro, inodoro. Punto de ebullición −196 °C · densidad relativa 0,97 (aire = 1): se mezcla con el aire, pero llena equipos y fosos donde se libera.`,
      `Estable e inerte en condiciones normales.`,
      `No tóxico. El peligro es la **falta de oxígeno**: en una atmósfera casi sin oxígeno se pierde el conocimiento en segundos y se puede morir en minutos.`,
      `Componente natural del aire. Sin efectos.`,
      `Devolver las botellas al proveedor. No liberar en lugares cerrados.`,
      `**UN 1066** · NITRÓGENO COMPRIMIDO · Clase 2.2 (gas no inflamable, no tóxico).`,
      `Equipos a presión: Real Decreto 809/2021 (Reglamento de equipos a presión, que derogó el Real Decreto 2060/2008). Botellas de gas: ITC MIE APQ-5.`,
      `${FOOTER("05/05/2026")}`,
    ],
    questions: [
      {
        kind: "choice",
        q: "¿Por qué el nitrógeno lleva la palabra «Atención» y no «Peligro»?",
        options: [
          "Porque no tiene ningún peligro",
          "Porque su única clasificación (gas a presión, H280) corresponde a «Atención»",
          "Porque es un gas noble",
          "Es un error de la etiqueta",
        ],
        answer: 1,
        explain: "La palabra la fija la clase y categoría. Para un gas a presión, «Atención». Ojo: el riesgo de asfixia no tiene clase CLP y va en «otros peligros» (sección 2).",
      },
      {
        kind: "choice",
        q: "Un compañero se ha desmayado dentro de un filtro inertizado. ¿Qué haces?",
        options: [
          "Entrar enseguida a sacarlo aguantando la respiración",
          "Dar la alarma y que lo rescate alguien con equipo de respiración autónomo",
          "Entrar con una mascarilla FFP2",
          "Tirarle agua",
        ],
        answer: 1,
        explain: "Sección 4: el rescatador necesita equipo autónomo. Sin él, te desmayas tú también en segundos. Las mascarillas y filtros no aportan oxígeno.",
      },
      {
        kind: "choice",
        q: "¿Qué hay que hacer antes de asomarse o entrar a un equipo que se ha inertizado con nitrógeno?",
        options: ["Nada, el nitrógeno no es tóxico", "Permiso de trabajo, ventilar y medir el oxígeno", "Ponerse guantes", "Esperar cinco minutos"],
        answer: 1,
        explain: "Sección 7: el interior puede no tener oxígeno. Por eso son espacios confinados con permiso y medición.",
      },
    ],
  },
  {
    id: "fx-int-07",
    product: "FX-INT-07 (intermedio de síntesis, sólido)",
    substance: "Intermedio ficticio de la etapa 2 del proceso FX",
    icon: "🧂",
    signal: "Atención",
    pictograms: ["GHS07", "GHS08", "GHS09"],
    h: ["H317", "H373", "H411"],
    p: ["P260", "P272", "P273", "P280", "P302+P352", "P333+P313"],
    keyPoints: [
      "Puede causar alergia en la piel: una vez sensibilizado, una cantidad mínima basta para reaccionar.",
      "No tiene VLA oficial: la empresa le asigna una banda de exposición (OEB) y por eso se trabaja con contención.",
      "Es un polvo combustible: puede formar nubes de polvo explosivas (ATEX de polvo).",
      "Tóxico para la vida acuática: nada al desagüe, los lavados van a tratamiento.",
    ],
    sections: [
      `**Identificador:** FX-INT-07. Sustancia orgánica ficticia, intermedio aislado en la etapa 2 del proceso FX. Sin número CAS (producto de formación).\n\n**Usos:** solo como intermedio en la fabricación del principio activo FX, en condiciones controladas.\n\n**Proveedor:** fabricación propia (planta ficticia). Teléfono de emergencia: Servicio de Información Toxicológica, 91 562 04 20.`,
      `**Clasificación (ficticia):** Skin Sens. 1, H317 · STOT RE 2, H373 (hígado, por ingestión) · Aquatic Chronic 2, H411.\n\n**Etiqueta:** GHS07, GHS08, GHS09 · **Atención**.\n\n**Otros peligros:** polvo combustible; puede formar mezclas explosivas de polvo y aire.`,
      `Sustancia. Pureza ≥ 98 %. Impurezas de proceso < 2 % (ninguna clasificada por encima de su límite de concentración).`,
      `**Piel:** lavar con abundante agua y jabón. Si aparece irritación o erupción, médico.\n\n**Ojos:** lavar con agua varios minutos.\n\n**Inhalación:** aire libre.\n\n**Ingestión:** enjuagar la boca; médico si hay malestar.`,
      `Agua pulverizada, espuma, polvo, CO₂. **Evitar** chorros que levanten nubes de polvo. Productos de combustión: CO, CO₂, óxidos de nitrógeno.`,
      `No barrer en seco ni soplar con aire comprimido: **aspirador ATEX con filtro HEPA** o recogida en húmedo. Evitar que el agua de limpieza llegue a desagües. Recoger como residuo.`,
      `**Manipulación:** en sistema cerrado o contenido (aislador, válvulas de mariposa partida, descarga en bolsas continuas). Toma de tierra para evitar cargas electrostáticas. Evitar formar polvo.\n\n**Almacenamiento:** envases cerrados en cuarentena o almacén de intermedios, secos y a temperatura ambiente.`,
      `**Límite de exposición:** sin VLA oficial. **Banda de exposición interna OEB 3 (10–100 µg/m³).**\n\n**Controles técnicos:** contención en la descarga y el muestreo.\n\n**EPI:** guantes de nitrilo (doble guante en muestreo); buzo desechable tipo 5/6; gafas; protección respiratoria FFP3 o equipo motorizado con filtro P3 si se abre el sistema. **Las prendas de trabajo contaminadas no salen de la planta.**`,
      `Polvo cristalino blanco, sin olor. Punto de fusión 148 °C · poco soluble en agua · soluble en metanol · polvo combustible (clase de explosividad St 1).`,
      `Estable. Evitar oxidantes fuertes y el calor excesivo. No polimeriza.`,
      `Sensibilizante cutáneo en el ensayo en ratón (LLNA). Daño hepático en estudios de 90 días por vía oral. No mutágeno en el test de Ames.`,
      `Tóxico para algas y dafnias, con efectos duraderos. No fácilmente biodegradable.`,
      `Residuo peligroso: incineración. Aguas de lavado a tratamiento, nunca al desagüe.`,
      `No se transporta fuera de la planta.`,
      `REACH: intermedio aislado in situ en condiciones estrictamente controladas.`,
      `${FOOTER("30/08/2026")}`,
    ],
    questions: [
      {
        kind: "choice",
        q: "FX-INT-07 no tiene VLA oficial. ¿Qué usa la empresa para controlarlo?",
        options: ["Nada, si no hay VLA no hay límite", "Una banda de exposición interna (OEB) y contención", "El VLA del metanol", "Solo guantes"],
        answer: 1,
        explain: "Sección 8: OEB 3 (10–100 µg/m³). Muchos intermedios y principios activos no tienen VLA, así que se asigna una banda según su toxicidad.",
      },
      {
        kind: "choice",
        q: "Hay polvo de FX-INT-07 en el suelo junto a la centrífuga. ¿Cómo lo limpias?",
        options: [
          "Barrer en seco",
          "Soplar con aire comprimido",
          "Aspirador ATEX con filtro HEPA o en húmedo, sin mandar el agua al desagüe",
          "Echarlo al sumidero con la manguera",
        ],
        answer: 2,
        explain: "Sección 6: barrer o soplar levanta nubes de polvo (exposición y riesgo de explosión). Y es tóxico para el medio acuático (H411): nada al desagüe.",
      },
      {
        kind: "choice",
        q: "¿Qué significa la frase P272 de esta etiqueta?",
        options: [
          "Lavar la ropa en casa",
          "Las prendas de trabajo contaminadas no podrán sacarse del lugar de trabajo",
          "Quemar la ropa",
          "Usar ropa de algodón",
        ],
        answer: 1,
        explain: "P272 acompaña a los sensibilizantes cutáneos: el buzo contaminado no sale de la planta para no exponer a nadie más.",
      },
      {
        kind: "choice",
        q: "¿Qué pictograma corresponde a H411 (tóxico para los organismos acuáticos)?",
        options: ["GHS07", "GHS08", "GHS09", "GHS05"],
        answer: 2,
        explain: "GHS09, el del pez y el árbol. GHS07 es por la sensibilización cutánea y GHS08 por el daño al hígado.",
      },
    ],
  },
];

/** Ejercicios generales: secciones, pictogramas, palabras de advertencia y reglas de etiquetado */
export const generalQuestions: Question[] = [
  {
    kind: "choice",
    q: "Vas a cargar un producto nuevo y quieres saber qué guantes y qué gafas llevar. ¿Qué sección de la FDS abres?",
    options: ["Sección 2", "Sección 4", "Sección 8", "Sección 11"],
    answer: 2,
    explain: "Sección 8: controles de exposición y protección individual (EPI).",
  },
  {
    kind: "choice",
    q: "Se ha derramado un bidón. ¿Qué sección te dice cómo contenerlo y limpiarlo?",
    options: ["Sección 5", "Sección 6", "Sección 7", "Sección 13"],
    answer: 1,
    explain: "Sección 6: medidas en caso de vertido accidental.",
  },
  {
    kind: "choice",
    q: "¿Dónde compruebas con qué productos NO se puede mezclar o almacenar?",
    options: ["Secciones 7 y 10", "Secciones 1 y 16", "Sección 12", "Sección 14"],
    answer: 0,
    explain: "La 7 (manipulación y almacenamiento) y la 10 (estabilidad y reactividad, materiales incompatibles).",
  },
  {
    kind: "choice",
    q: "¿En qué sección encuentras el punto de inflamación?",
    options: ["Sección 2", "Sección 5", "Sección 9", "Sección 10"],
    answer: 2,
    explain: "Sección 9: propiedades físicas y químicas. La 5 dice cómo apagar un incendio, no el punto de inflamación.",
  },
  {
    kind: "choice",
    q: "Llega una cisterna y quieres comprobar el número ONU. ¿Qué sección?",
    options: ["Sección 1", "Sección 3", "Sección 14", "Sección 15"],
    answer: 2,
    explain: "Sección 14: información relativa al transporte (número ONU, clase, grupo de embalaje).",
  },
  {
    kind: "choice",
    q: "¿Cómo sabes si la ficha que tienes es la versión vigente?",
    options: ["Por el color del papel", "Por la fecha de revisión y los cambios de la sección 16", "Por la sección 3", "No se puede saber"],
    answer: 1,
    explain: "La sección 16 recoge la fecha de revisión y qué ha cambiado. Compárala con la que te da tu sistema documental.",
  },
  {
    kind: "choice",
    q: "¿Qué ley europea exige la ficha de datos de seguridad y fija sus 16 secciones?",
    options: ["El Reglamento CLP", "El Reglamento REACH (anexo II)", "La norma ISO 9001", "Las GMP"],
    answer: 1,
    explain: "REACH (CE 1907/2006), artículo 31 y anexo II. El CLP regula la clasificación y la etiqueta.",
  },
  {
    kind: "choice",
    q: "Una etiqueta lleva «Peligro» y otra «Atención». ¿Cuál indica un peligro más grave?",
    options: ["Atención", "Peligro", "Son iguales", "Depende del color"],
    answer: 1,
    explain: "«Peligro» es para las categorías más graves. Si una etiqueta tiene peligros de los dos tipos, solo aparece «Peligro».",
  },
  {
    kind: "choice",
    q: "Las frases que empiezan por H3… tratan de peligros…",
    options: ["Físicos (incendio, explosión)", "Para la salud", "Para el medio ambiente", "Del transporte"],
    answer: 1,
    explain: "H2xx: físicos · H3xx: salud · H4xx: medio ambiente. Las P: P1 generales, P2 prevención, P3 respuesta, P4 almacenamiento, P5 eliminación.",
  },
  {
    kind: "choice",
    q: "Ves la combinación P301+P330+P331 en una etiqueta. ¿A qué situación se refiere?",
    options: ["A un incendio", "A una ingestión", "Al almacenamiento", "A un vertido"],
    answer: 1,
    explain: "«EN CASO DE INGESTIÓN: Enjuagar la boca. NO provocar el vómito.» Las P3xx son de respuesta ante un accidente.",
  },
  {
    kind: "choice",
    q: "¿Qué indica la palabra «vía dérmica» junto a un VLA en la sección 8?",
    options: [
      "Que el producto solo es peligroso por la piel",
      "Que la absorción por la piel puede aportar mucha exposición: medir el aire no basta, hay que proteger la piel",
      "Que hay que lavarse las manos al acabar",
      "Que no tiene límite",
    ],
    answer: 1,
    explain: "La notación «vía dérmica» del INSST avisa de que la piel es una vía de entrada importante: guantes y ropa adecuados.",
  },
  {
    kind: "choice",
    q: "Un producto es corrosivo (GHS05) y además irrita la piel. ¿Lleva también el signo de exclamación (GHS07) por la irritación?",
    options: ["Sí, siempre", "No: si ya lleva GHS05, el GHS07 no se pone por irritación de piel u ojos", "Solo si es líquido", "Solo en el transporte"],
    answer: 1,
    explain: "Regla de prioridad del CLP (artículo 26): el GHS05 hace innecesario el GHS07 por irritación. Sí se pondría GHS07 por otro motivo, como H335.",
  },
];

export const getSds = (id: string) => sdsList.find((s) => s.id === id);

/** Ejercicios de un id («general» o el de una ficha) */
export function fdsQuestions(quizId: string): Question[] {
  if (quizId === "general") return generalQuestions;
  return getSds(quizId)?.questions ?? [];
}

export function fdsQuizTitle(quizId: string) {
  return quizId === "general" ? "Fichas de seguridad: ejercicios generales" : `FDS ${getSds(quizId)?.product ?? quizId}`;
}

export const fdsQuizIds = ["general", ...sdsList.map((s) => s.id)];
