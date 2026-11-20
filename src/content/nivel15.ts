import type { Lesson } from "./types";

export const nivel15: Lesson[] = [
  {
    slug: "pictogramas-y-fds",
    level: 15,
    order: 1,
    title: "Pictogramas, frases H y P y fichas de datos de seguridad",
    titleEn: "Hazard pictograms, H and P statements and safety data sheets",
    minutes: 15,
    summary: "Cómo leer la etiqueta de un producto químico y dónde buscar toda la información de seguridad.",
    body: `
### El sistema de etiquetado
En la UE lo regula el **Reglamento CLP** (CE 1272/2008), basado en el sistema mundial **GHS/SGA**. Cada envase lleva:
- **Pictogramas** (*hazard pictograms*): rombos con borde rojo.
- **Palabra de advertencia** (*signal word*): **"Peligro"** (*Danger*, el más grave) o **"Atención"** (*Warning*).
- **Indicaciones de peligro** o **frases H** (*hazard statements*): qué peligro tiene. Ejemplo: H225 "Líquido y vapores muy inflamables".
- **Consejos de prudencia** o **frases P** (*precautionary statements*): qué hacer. Ejemplo: P210 "Mantener alejado del calor, chispas, llama abierta…".

### Los 9 pictogramas
| Pictograma | Código | Significa |
|---|---|---|
| Bomba explotando | GHS01 | Explosivo |
| Llama | GHS02 | Inflamable |
| Llama sobre círculo | GHS03 | Comburente / oxidante |
| Bombona de gas | GHS04 | Gas a presión |
| Corrosión | GHS05 | Corrosivo (piel, ojos, metales) |
| Calavera | GHS06 | Toxicidad aguda grave |
| Exclamación | GHS07 | Nocivo, irritante, sensibilizante |
| Silueta con estrella en el pecho | GHS08 | Peligro grave para la salud (cancerígeno, mutágeno, tóxico para la reproducción, sensibilizante respiratorio) |
| Medio ambiente (pez y árbol) | GHS09 | Peligroso para el medio acuático |

### Ficha de datos de seguridad (FDS)
En inglés *Safety Data Sheet* (SDS). Exigida por el reglamento **REACH**; tiene **16 secciones** siempre en el mismo orden. Las que más usarás:
- **Sección 2**: identificación de los peligros (pictogramas, frases H y P).
- **Sección 4**: primeros auxilios.
- **Sección 5**: lucha contra incendios.
- **Sección 6**: qué hacer en caso de vertido.
- **Sección 7**: manipulación y almacenamiento (incompatibilidades).
- **Sección 8**: controles de exposición y **EPI**, con los límites de exposición.
- **Sección 9**: propiedades físicas (punto de inflamación, ebullición…).

Antes de manipular un producto nuevo para ti, **lee su FDS** o al menos las secciones 2, 7 y 8.

> Practica con fichas completas de productos de planta (metanol, tolueno, sosa, clorhídrico, nitrógeno y un intermedio) en **[Fichas de seguridad](/fds)**.
`,
    plant: `
Vas a cargar hidróxido sódico al 50 %. La etiqueta lleva el pictograma de corrosión, la palabra "Peligro" y la frase H314 "Provoca quemaduras graves en la piel y lesiones oculares graves". La sección 8 de la FDS indica gafas de montura integral y, encima, pantalla facial (la pantalla sola no protege los ojos de una salpicadura), guantes resistentes a álcalis y ropa de protección.
`,
    batchRecord: `
- Algunas hojas recuerdan los peligros y EPI de cada material al lado de la instrucción de carga.
- La FDS está disponible en planta (papel o sistema informático).
`,
    terms: [
      { es: "Pictograma de peligro", en: "Hazard pictogram", def: "Símbolo en rombo rojo que indica el tipo de peligro." },
      { es: "Palabra de advertencia", en: "Signal word", def: "'Peligro' o 'Atención' según la gravedad." },
      { es: "Indicación de peligro (frase H)", en: "Hazard statement (H)", def: "Frase normalizada que describe el peligro." },
      { es: "Consejo de prudencia (frase P)", en: "Precautionary statement (P)", def: "Frase normalizada con medidas de prevención o respuesta." },
      { es: "Ficha de datos de seguridad", en: "Safety Data Sheet (SDS)", def: "Documento de 16 secciones con toda la información de seguridad de un producto." },
      { es: "Comburente", en: "Oxidizer", def: "Sustancia que aporta oxígeno y aviva un fuego." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "¿En qué sección de la FDS buscas los EPI recomendados?",
        options: ["Sección 2", "Sección 8", "Sección 11", "Sección 16"],
        answer: 1,
        explain: "La sección 8 trata los controles de exposición y la protección personal.",
      },
      {
        kind: "choice",
        q: "¿Qué palabra de advertencia indica el peligro más grave?",
        options: ["Atención", "Peligro", "Cuidado", "Aviso"],
        answer: 1,
        explain: "'Peligro' se usa para las categorías más graves; 'Atención' para las menos graves.",
      },
      {
        kind: "choice",
        q: "El pictograma de la silueta con una estrella en el pecho indica…",
        options: [
          "Inflamable",
          "Peligro grave para la salud (cancerígeno, mutágeno…)",
          "Gas a presión",
          "Peligro ambiental",
        ],
        answer: 1,
        explain: "GHS08: efectos graves para la salud, a menudo a largo plazo.",
      },
    ],
  },
  {
    slug: "epi",
    level: 15,
    order: 2,
    title: "Equipos de protección individual",
    titleEn: "Personal protective equipment (PPE)",
    minutes: 15,
    summary: "Qué EPI existen, cómo se eligen y por qué son la última barrera, no la primera.",
    body: `
### Jerarquía de control (*hierarchy of controls*)
Antes de pensar en EPI, se intenta en este orden:
1. **Eliminar** el peligro.
2. **Sustituir** por algo menos peligroso.
3. **Controles de ingeniería** (*engineering controls*): sistemas cerrados, aisladores, extracción localizada.
4. **Controles administrativos**: procedimientos, formación, señalización, rotación.
5. **EPI** (*PPE*): la **última barrera**. Solo protege a quien lo lleva y solo si se usa bien.

### Tipos de EPI
| Zona | EPI | Notas |
|---|---|---|
| Ojos y cara | Gafas de seguridad, gafas de montura integral (*goggles*), pantalla facial | Las de montura integral protegen de salpicaduras; la pantalla se pone encima |
| Manos | Guantes químicos (norma EN ISO 374) | Cada material resiste unos químicos: nitrilo, neopreno, butilo, Viton… Mira el tiempo de paso (*breakthrough time*) |
| Vías respiratorias | Mascarillas FFP2/FFP3 (polvo), máscaras con filtro, equipos de aire | Filtros por colores (EN 14387): **A marrón** (vapores orgánicos), **B gris** (inorgánicos), **E amarillo** (ácidos), **K verde** (amoniaco), **P blanco** (partículas) |
| Cuerpo | Bata, buzo desechable (tipo 5/6), traje químico | Según el riesgo de salpicadura o polvo |
| Pies | Calzado de seguridad, antiestático | En zonas ATEX, antiestático |
| Oídos | Tapones, orejeras | En zonas de ruido |

### Reglas de uso
- **Comprobar** el EPI antes de usarlo: guantes sin agujeros, filtros dentro de fecha, ajuste de la máscara.
- **Ajuste** de las máscaras: con barba no sellan bien.
- Los filtros de máscara **no protegen** si falta oxígeno: en atmósferas pobres en O₂ (nitrógeno) se necesita **equipo autónomo o con línea de aire**.
- **Quitarse** el EPI en el orden correcto para no contaminarse (guantes al final o con técnica de retirada segura) y desechar el de un solo uso.
- El EPI es **personal** y se entrega con **formación**.
`,
    plant: `
Para tomar una muestra de un disolvente orgánico con riesgo de vapores, el procedimiento indica: gafas de montura integral, guantes de nitrilo de puño largo y máscara con filtro A2. El operador revisa la fecha del filtro antes de entrar. Si el filtro está caducado, pide otro.
`,
    batchRecord: `
- Recordatorio de EPI en las etapas de riesgo (carga de corrosivos, muestreo de producto potente).
`,
    terms: [
      { es: "EPI", en: "Personal protective equipment (PPE)", def: "Equipo que lleva el trabajador para protegerse de un riesgo." },
      { es: "Jerarquía de control", en: "Hierarchy of controls", def: "Orden de preferencia de las medidas: eliminar, sustituir, ingeniería, administrativas, EPI." },
      { es: "Gafas de montura integral", en: "Chemical splash goggles", def: "Gafas que cierran alrededor de los ojos." },
      { es: "Tiempo de paso", en: "Breakthrough time", def: "Tiempo que tarda un químico en atravesar el material del guante." },
      { es: "Filtro A", en: "Type A filter", def: "Filtro marrón para vapores orgánicos con punto de ebullición > 65 °C." },
      { es: "Equipo de respiración autónomo", en: "Self-contained breathing apparatus (SCBA)", def: "Equipo con su propia botella de aire." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "En la jerarquía de control, el EPI es…",
        options: ["La primera medida", "La última barrera", "Opcional siempre", "Lo mismo que la extracción localizada"],
        answer: 1,
        explain: "Primero se elimina, sustituye o se aísla el peligro; el EPI protege lo que queda.",
      },
      {
        kind: "choice",
        q: "¿Sirve una máscara con filtro en un depósito lleno de nitrógeno?",
        options: [
          "Sí, siempre",
          "No: el filtro no aporta oxígeno; hace falta equipo autónomo o con línea de aire",
          "Sí, con filtro P",
          "Solo si es nueva",
        ],
        answer: 1,
        explain: "Los filtros limpian el aire, pero no añaden oxígeno.",
      },
      {
        kind: "choice",
        q: "¿Qué color tiene el filtro para vapores orgánicos?",
        options: ["Blanco", "Marrón", "Verde", "Amarillo"],
        answer: 1,
        explain: "Tipo A, marrón (EN 14387).",
      },
    ],
  },
  {
    slug: "incendio-y-atex",
    level: 15,
    order: 3,
    title: "Incendio, explosión y zonas ATEX",
    titleEn: "Fire, explosion and ATEX zones",
    minutes: 18,
    summary: "Por qué una planta con disolventes y polvo puede explotar y cómo se evita.",
    body: `
### Triángulo del fuego
Hacen falta tres cosas: **combustible**, **comburente** (oxígeno del aire) y **fuente de ignición** (chispa, superficie caliente, llama, electricidad estática). Quitando una, no hay fuego. Por eso se **inertiza** (se quita el oxígeno) y se **controlan las fuentes de ignición**.

### Límites de inflamabilidad
Un vapor solo arde mezclado con el aire en cierta proporción:
- **LII** (límite inferior de inflamabilidad; en inglés *LEL, Lower Explosive Limit*).
- **LSI** (*UEL, Upper Explosive Limit*).
Acetona: aproximadamente del 2,5 % al 13 % en volumen. Los **detectores de gas** suelen dar la primera alarma al **10 % del LII**: para la acetona, 0,25 % en volumen = 2500 ppm.

### Polvo combustible
Muchos sólidos orgánicos (API, azúcar, harina) en forma de nube de polvo pueden **explotar**. Una pequeña explosión puede levantar el polvo acumulado y causar otra mayor: por eso **la limpieza del polvo** es una medida de seguridad.

### Zonas ATEX
La normativa ATEX (Directiva 1999/92/CE, en España **RD 681/2003**) clasifica las zonas según la probabilidad de atmósfera explosiva:
| Gases y vapores | Polvo | Atmósfera explosiva… |
|---|---|---|
| Zona 0 | Zona 20 | presente de forma continua o durante largos periodos (dentro de un depósito) |
| Zona 1 | Zona 21 | probable en funcionamiento normal (alrededor de una boca de carga) |
| Zona 2 | Zona 22 | poco probable y de corta duración |

En cada zona solo se usan equipos con marcado **Ex** de la categoría adecuada (Directiva 2014/34/UE): linternas, radios, móviles, herramientas.

### Fuentes de ignición a controlar
- **Electricidad estática**: puesta a tierra de bidones, equipos y personas; ropa y calzado antiestático; no verter disolvente en caída libre.
- **Trabajos en caliente** (soldadura, radiales): solo con permiso.
- **Equipos eléctricos** no certificados: móviles, cámaras, calefactores.
- **Superficies calientes**.

### Extintores
Clases de fuego: A (sólidos), B (líquidos), C (gases), D (metales), F (aceites de cocina). Para disolventes se usan polvo ABC, CO₂ o espuma. Conoce dónde están los de tu zona.
`,
    plant: `
Antes de trasvasar tolueno de un bidón a un recipiente, el operador conecta las pinzas de puesta a tierra a los dos recipientes y comprueba la continuidad. Deja el móvil fuera de la zona ATEX 1. Usa una linterna con marcado Ex.
`,
    batchRecord: `
- "Verificar puesta a tierra" en cargas y transferencias de inflamables.
- Comprobación de inertización (O₂) antes de cargar sólidos sobre disolvente.
`,
    terms: [
      { es: "Triángulo del fuego", en: "Fire triangle", def: "Combustible, comburente y fuente de ignición." },
      { es: "Límite inferior de inflamabilidad", en: "Lower Explosive Limit (LEL)", def: "Concentración mínima de vapor en aire que puede arder." },
      { es: "Atmósfera explosiva", en: "Explosive atmosphere", def: "Mezcla de aire con gas, vapor o polvo que puede explotar." },
      { es: "Zona ATEX", en: "ATEX zone / hazardous area", def: "Área clasificada por la probabilidad de atmósfera explosiva." },
      { es: "Marcado Ex", en: "Ex marking", def: "Marca de los equipos aptos para atmósferas explosivas." },
      { es: "Trabajo en caliente", en: "Hot work", def: "Trabajo que genera chispas o calor (soldar, cortar)." },
      { es: "Polvo combustible", en: "Combustible dust", def: "Polvo que puede arder o explotar en suspensión." },
    ],
    quiz: [
      {
        kind: "number",
        q: "El LII de un disolvente es 2,0 % en volumen. ¿Cuántos ppm son el 10 % del LII?",
        answer: 2000,
        tolerance: 0.001,
        unit: "ppm",
        explain: "10 % de 2,0 % = 0,20 % en volumen = 2000 ppm (1 % = 10 000 ppm).",
      },
      {
        kind: "choice",
        q: "Una zona donde la atmósfera explosiva es probable en funcionamiento normal es…",
        options: ["Zona 0", "Zona 1", "Zona 2", "No clasificada"],
        answer: 1,
        explain: "Zona 1 (gases) o zona 21 (polvo).",
      },
      {
        kind: "choice",
        q: "¿Para qué sirve inertizar con nitrógeno?",
        options: [
          "Para enfriar",
          "Para quitar el oxígeno, uno de los lados del triángulo del fuego",
          "Para añadir combustible",
          "Para medir el pH",
        ],
        answer: 1,
        explain: "Sin oxígeno suficiente no puede haber combustión.",
      },
    ],
  },
  {
    slug: "exposicion-y-contencion",
    level: 15,
    order: 4,
    title: "Exposición a productos y contención",
    titleEn: "Exposure limits and containment (OEL, OEB)",
    minutes: 15,
    summary: "Cuánto de una sustancia se puede respirar sin daño y cómo se manipulan los API potentes.",
    body: `
### Vías de entrada
**Inhalación** (la más frecuente en planta), **contacto con la piel**, **ingestión** (manos sucias) y **ojos**.

### Límites de exposición profesional
En España los publica el **INSST** ("Límites de exposición profesional para agentes químicos"):
- **VLA-ED** (*valor límite ambiental – exposición diaria*): media ponderada de 8 h.
- **VLA-EC** (*exposición de corta duración*): media de 15 min.
En inglés se llaman *OEL* (*Occupational Exposure Limit*), *TWA* (8 h) y *STEL* (15 min). Se expresan en ppm o en mg/m³.

### API potentes y bandas OEB
Los principios activos son, por diseño, **biológicamente activos** a dosis bajas. Para cada API la empresa fija un **OEL** a partir de su toxicología y lo encuadra en una **banda de exposición** (*OEB, Occupational Exposure Band*). Cada empresa usa su propia escala, pero la idea es:
- Bandas bajas: OEL alto (cientos o miles de µg/m³), controles generales.
- Bandas altas: OEL de muy pocos µg/m³ o menos, **contención total**.

### Medidas de contención (de menos a más)
- Ventilación general y **extracción localizada** (*local exhaust ventilation, LEV*) en puntos de carga y muestreo.
- **Cabinas de pesada** con flujo descendente (*downflow booth*).
- Sistemas cerrados: **válvulas de mariposa partida** (*split butterfly valves*), **bolsas continuas** (*continuous liners*), transferencia por vacío.
- **Aisladores** (*isolators*) y **cajas de guantes** (*glove boxes*).
- EPI respiratorio adicional (máscaras motorizadas con capucha, *PAPR*).

### Higiene
- No comer, beber ni fumar en planta.
- Lavarse las manos al salir.
- **Vestuarios** separados de ropa de calle y de trabajo; la ropa de trabajo no se lleva a casa.
- **Vigilancia de la salud** periódica.
`,
    plant: `
La carga de un API de banda alta se hace con un contenedor con válvula de mariposa partida acoplado al reactor, sin abrir la boca de hombre. El operador lleva además una máscara motorizada con capucha porque la evaluación lo pide para la desconexión, el momento de mayor riesgo.
`,
    batchRecord: `
- Indicación de la banda de exposición o de los controles requeridos en las etapas con producto abierto.
- Comprobación del funcionamiento de la extracción o del aislador antes de empezar.
`,
    terms: [
      { es: "Límite de exposición profesional", en: "Occupational Exposure Limit (OEL)", def: "Concentración en el aire que no debe superarse para proteger al trabajador." },
      { es: "VLA-ED", en: "Time-weighted average (TWA)", def: "Límite medio para una jornada de 8 horas." },
      { es: "VLA-EC", en: "Short-term exposure limit (STEL)", def: "Límite medio para 15 minutos." },
      { es: "Banda de exposición", en: "Occupational Exposure Band (OEB)", def: "Categoría de peligro de un compuesto que fija el nivel de contención." },
      { es: "Extracción localizada", en: "Local exhaust ventilation (LEV)", def: "Aspiración en el punto donde se genera el polvo o vapor." },
      { es: "Aislador", en: "Isolator", def: "Recinto cerrado con guantes que separa totalmente al operador del producto." },
      { es: "Válvula de mariposa partida", en: "Split butterfly valve", def: "Válvula en dos mitades que permite conectar y desconectar sin liberar polvo." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "¿Cuál es la vía de exposición más frecuente en una planta química?",
        options: ["Ingestión", "Inhalación", "Inyección", "Oído"],
        answer: 1,
        explain: "Polvo y vapores entran sobre todo por las vías respiratorias.",
      },
      {
        kind: "choice",
        q: "VLA-ED hace referencia a…",
        options: ["15 minutos", "Una jornada de 8 horas", "Un año", "Un instante"],
        answer: 1,
        explain: "Exposición diaria: media ponderada de 8 h.",
      },
      {
        kind: "choice",
        q: "Un API con un OEL de muy pocos µg/m³ requiere…",
        options: [
          "Solo bata",
          "Contención alta: sistemas cerrados o aisladores, más EPI si la evaluación lo pide",
          "Ventilación natural",
          "Nada especial",
        ],
        answer: 1,
        explain: "Cuanto más bajo el OEL, más estricta la contención.",
      },
    ],
  },
  {
    slug: "permisos-y-consignacion",
    level: 15,
    order: 5,
    title: "Permisos de trabajo y consignación",
    titleEn: "Permits to work and lockout/tagout (LOTO)",
    minutes: 15,
    summary: "Cómo se deja un equipo seguro antes de que alguien trabaje en él.",
    body: `
### Permiso de trabajo (*permit to work*)
Documento que **autoriza** un trabajo no rutinario o peligroso, define los riesgos, las medidas y quién es responsable. Tipos habituales:
- **Trabajo en caliente** (*hot work*).
- **Entrada en espacio confinado** (*confined space entry*).
- **Apertura de líneas o equipos** (*line break*).
- **Trabajos en altura**, **eléctricos**, excavaciones.

El permiso lo emite el responsable del área, lo acepta quien hace el trabajo y se **cierra** al terminar (el área vuelve a quedar en condiciones).

### Consignación (*lockout/tagout, LOTO*)
Dejar el equipo **sin ninguna energía peligrosa** y asegurar que nadie la pueda volver a conectar:
1. **Identificar** todas las energías: eléctrica, presión (gases, vapor), producto, temperatura, energía mecánica (muelles, piezas en altura), químicos.
2. **Aislar**: abrir el interruptor, cerrar válvulas, colocar **bridas ciegas** o desconectar tramos.
3. **Bloquear con candado personal** (*lockout*) y **etiquetar** (*tagout*): cada persona que trabaja pone su candado; solo él lo quita.
4. **Liberar energías residuales**: despresurizar, drenar, purgar, enfriar.
5. **Verificar** la ausencia de energía (intentar arrancar, comprobar presión cero, medir tensión).

En trabajos eléctricos, el RD 614/2001 fija las **cinco reglas de oro**: desconectar, prevenir la realimentación (bloqueo), verificar la ausencia de tensión, poner a tierra y en cortocircuito, y señalizar la zona.

### Apertura de líneas
Antes de abrir una brida: vaciar, **despresurizar**, lavar o purgar con N₂, y usar EPI por si queda producto. Abrir aflojando primero los tornillos **más alejados** de ti para que, si sale algo, salga hacia el otro lado.

### Espacios confinados
Reactores, tanques, fosos. Riesgos: **falta de O₂**, gases tóxicos o inflamables, atrapamiento. Requisitos: permiso, aislamiento total, ventilación, **medición de O₂, inflamables y tóxicos** antes y durante, **vigilante** en el exterior, plan de rescate.
`,
    plant: `
Mantenimiento va a cambiar el cierre mecánico de la bomba P-104. El operador cierra las válvulas de aspiración e impulsión, coloca candado y etiqueta en ellas y en el interruptor del motor, drena la bomba a un recipiente, comprueba presión cero e intenta arrancar desde el pulsador local: no arranca. Firma el permiso y entrega el equipo.
`,
    batchRecord: `
- Los permisos no van en la hoja del lote, pero el equipo no puede usarse en producción mientras tenga un permiso abierto o candados puestos.
`,
    terms: [
      { es: "Permiso de trabajo", en: "Permit to work", def: "Autorización escrita para un trabajo con riesgos, con las medidas definidas." },
      { es: "Consignación", en: "Lockout/tagout (LOTO)", def: "Aislamiento y bloqueo de las energías de un equipo antes de intervenir." },
      { es: "Candado personal", en: "Personal lock", def: "Candado de cada trabajador; solo él lo retira." },
      { es: "Apertura de línea", en: "Line break", def: "Apertura de una tubería o equipo que ha contenido producto." },
      { es: "Energía residual", en: "Stored / residual energy", def: "Energía que queda tras desconectar: presión, calor, muelles." },
      { es: "Vigilante", en: "Attendant / standby person", def: "Persona fuera del espacio confinado que vigila y avisa." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "¿Quién puede quitar tu candado de consignación?",
        options: ["Cualquiera", "Solo tú", "El primer compañero que llegue", "El de limpieza"],
        answer: 1,
        explain: "El candado personal garantiza que nadie reconecte el equipo mientras trabajas.",
      },
      {
        kind: "choice",
        q: "¿Cuál es el último paso de la consignación antes de empezar el trabajo?",
        options: [
          "Poner el candado",
          "Verificar que no queda energía (intentar arrancar, presión cero, ausencia de tensión)",
          "Firmar el permiso sin mirar",
          "Abrir la brida",
        ],
        answer: 1,
        explain: "Verificar confirma que el aislamiento funciona de verdad.",
      },
      {
        kind: "choice",
        q: "¿Qué se mide antes de entrar en un espacio confinado?",
        options: [
          "Solo la temperatura",
          "Oxígeno, gases inflamables y tóxicos",
          "Nada",
          "El pH",
        ],
        answer: 1,
        explain: "Falta de oxígeno, inflamables y tóxicos son los riesgos principales.",
      },
    ],
  },
  {
    slug: "emergencias-y-residuos",
    level: 15,
    order: 6,
    title: "Emergencias, vertidos y residuos",
    titleEn: "Emergencies, spills and waste management",
    minutes: 15,
    summary: "Qué hacer si algo sale mal y cómo se gestionan los residuos químicos.",
    body: `
### Plan de emergencia
Cada planta tiene un **plan de autoprotección** con alarmas, rutas de evacuación, **puntos de reunión** y equipos de intervención. Las plantas con grandes cantidades de sustancias peligrosas están además afectadas por la normativa **Seveso** (en España, RD 840/2015). Lo que debes saber desde el primer día:
- Dónde están las **salidas**, el **punto de reunión**, los **extintores**, las **duchas de emergencia** y los **lavaojos**.
- Cómo suena cada **alarma** y a quién llamar.

### Salpicaduras en ojos o piel
- **Lavaojos** o **ducha de emergencia** inmediatamente, al menos **15 minutos**, quitándose la ropa contaminada.
- Pedir ayuda y atención médica con la FDS del producto.

### Vertidos (*spills*)
1. **Avisar** y alejar a las personas; si es grande, inflamable o tóxico, activar la emergencia.
2. Si el producto es **inflamable**: quitar las **fuentes de ignición** (nada de chispas, equipos no aptos ni superficies calientes) y **ventilar**.
3. **EPI** adecuado antes de acercarse: el que indique la sección 8 de la FDS para ese producto, también el tipo de guante y la protección respiratoria.
4. **Contener**: cerrar la fuente si es seguro, rodear con material absorbente o barreras, proteger los **sumideros** (desagües).
5. **Absorber** con el material indicado (no usar serrín con oxidantes).
6. Recoger como **residuo peligroso** y limpiar.
7. Registrar el incidente.

### Residuos (*waste*)
Regulados por la **Ley 7/2022** de residuos y codificados con la **Lista Europea de Residuos** (*LER*). Reglas básicas:
- **Segregar**: disolventes **halogenados** (con cloro, como el diclorometano) separados de los **no halogenados**; ácidos separados de bases; oxidantes separados de orgánicos.
- **Nunca mezclar** residuos incompatibles: pueden reaccionar, calentarse o liberar gases tóxicos.
- Envases **etiquetados** con el contenido y el pictograma; cerrados.
- **Aguas madre** y residuos acuosos a la planta de tratamiento o al gestor autorizado, nunca al desagüe sin autorización.

### Emisiones
Los disolventes que escapan al aire (**COV**, compuestos orgánicos volátiles) están limitados (RD 117/2003). Por eso se condensan los venteos, se usan lavadores de gases (*scrubbers*) y oxidadores térmicos.
`,
    plant: `
Al desconectar una manguera caen unos 2 L de metanol al suelo. El metanol es inflamable y tóxico, también a través de la piel. El operador avisa, comprueba que no hay fuentes de ignición cerca y que la extracción funciona, se pone el EPI que indica la ficha (gafas de montura integral y guantes de caucho butilo; el nitrilo fino solo aguanta salpicaduras breves), coloca un tapón sobre el sumidero cercano, absorbe con el kit de derrames, deposita el material en el contenedor de residuos sólidos contaminados con disolvente y comunica el incidente.
`,
    batchRecord: `
- Destino de aguas madre, lavados y destilados ("a residuo halogenado R-H", "a recuperación").
- Incidentes durante el lote.
`,
    terms: [
      { es: "Plan de autoprotección", en: "Emergency response plan", def: "Documento con la organización y actuaciones ante emergencias." },
      { es: "Punto de reunión", en: "Assembly point", def: "Lugar donde se concentra el personal tras evacuar." },
      { es: "Lavaojos", en: "Eyewash station", def: "Equipo para lavar los ojos tras una salpicadura." },
      { es: "Vertido / derrame", en: "Spill", def: "Escape accidental de un producto." },
      { es: "Residuo peligroso", en: "Hazardous waste", def: "Residuo con propiedades peligrosas que requiere gestión especial." },
      { es: "Disolvente halogenado", en: "Halogenated solvent", def: "Disolvente que contiene cloro, bromo o flúor." },
      { es: "COV", en: "Volatile organic compounds (VOC)", def: "Sustancias orgánicas que se evaporan fácilmente al aire." },
    ],
    quiz: [
      {
        kind: "number",
        q: "¿Cuántos minutos como mínimo debes lavar los ojos tras una salpicadura química?",
        answer: 15,
        tolerance: 0.001,
        unit: "min",
        explain: "Al menos 15 minutos de lavado continuo, y después atención médica.",
      },
      {
        kind: "choice",
        q: "¿Dónde va un residuo con diclorometano?",
        options: [
          "Con los disolventes no halogenados",
          "Con los disolventes halogenados",
          "Al desagüe",
          "A la basura normal",
        ],
        answer: 1,
        explain: "El diclorometano contiene cloro: es un disolvente halogenado.",
      },
      {
        kind: "choice",
        q: "Ante un vertido, ¿qué proteges enseguida para que no llegue al medio ambiente?",
        options: ["Las ventanas", "Los sumideros y desagües", "Los extintores", "El techo"],
        answer: 1,
        explain: "Un vertido al desagüe contamina el agua y puede crear atmósferas inflamables en la red.",
      },
    ],
  },
];
