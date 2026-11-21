import type { Lesson } from "./types";
import { custodiaAFondo } from "./nivel5-custodia";

const muestreo: Lesson[] = [
  {
    slug: "plan-de-muestreo",
    level: 5,
    order: 1,
    title: "Por qué y cómo se muestrea",
    titleEn: "Sampling plans",
    minutes: 12,
    summary: "Una muestra representa a todo el lote: si está mal tomada, el análisis no sirve para nada.",
    body: `
El laboratorio analiza unos gramos para decidir sobre cientos de kilos. Por eso la muestra debe ser **representativa** (*representative*): igual que el conjunto.

### Plan de muestreo (*sampling plan*)
Define: **qué** se muestrea, **cuántos** recipientes, **de dónde** (arriba, medio, fondo), **cuánta** cantidad, **con qué** útil, **en qué** envase y **quién** lo hace.

### ¿Cuántos recipientes?
Para materias primas, una regla muy usada es muestrear **√N + 1** recipientes, donde N es el número de recipientes del lote. Con 16 bidones: √16 + 1 = **5** bidones.

La regla viene de las directrices de muestreo de la OMS, que la llaman **plan n** (*n plan*). Tres cosas que conviene saber:
- La OMS **redondea de forma normal** (al entero más cercano): 30 bidones dan 6,5 y se muestrean 6; 40 bidones dan 7,3 y se muestrean 7. Muchas empresas prefieren **redondear siempre hacia arriba** por prudencia (7 y 8 en esos ejemplos). Manda lo que diga tu procedimiento.
- Si llegan **4 recipientes o menos**, se muestrean todos.
- La OMS pide usarla **con mucha cautela** y solo cuando el material es uniforme y viene de un proveedor reconocido. Para otros casos describe planes más exigentes, en los que se abre y se identifica **cada** recipiente (planes *p* y *r*).

El plan concreto lo fija cada empresa según el riesgo del material y el proveedor.

### Tipos de muestra
- **Individual** (*individual sample*): de un solo punto o recipiente.
- **Compuesta** (*composite sample*): mezcla de varias muestras individuales. Útil para el ensayo de contenido medio, pero puede **ocultar** un recipiente malo.
- **De identificación**: a veces se exige identificar **cada** recipiente (por ejemplo por IR o Raman portátil).

### Cantidad
Suele tomarse lo suficiente para el análisis completo, una posible repetición y la muestra de retención (por ejemplo, **tres veces** la cantidad necesaria para un análisis completo).
`,
    plant: `
Llegan 30 bidones de un disolvente. √30 + 1 = 6,5. El procedimiento de esta planta dice redondear hacia arriba, así que se muestrean **7** bidones. Cada bidón muestreado se etiqueta como "muestreado", con fecha e iniciales, y se cierra bien.
`,
    batchRecord: `
- Número de recipientes muestreados y cuáles.
- Útil de muestreo y envase usados.
- Etiqueta del LIMS en cada muestra.
`,
    terms: [
      { es: "Muestra representativa", en: "Representative sample", def: "Muestra con las mismas características que el conjunto del que procede." },
      { es: "Plan de muestreo", en: "Sampling plan", def: "Documento que fija cómo, cuánto y dónde se toman las muestras." },
      { es: "Muestra compuesta", en: "Composite sample", def: "Mezcla de varias muestras individuales." },
      { es: "Muestra individual", en: "Individual / spot sample", def: "Muestra de un único punto o recipiente." },
    ],
    quiz: [
      {
        kind: "number",
        q: "Con la regla √n + 1, ¿cuántos recipientes muestreas de un lote de 25 sacos?",
        answer: 6,
        tolerance: 0.001,
        unit: "sacos",
        explain: "√25 + 1 = 5 + 1 = 6 sacos.",
      },
      {
        kind: "choice",
        q: "¿Qué riesgo tiene una muestra compuesta?",
        options: [
          "Ninguno",
          "Puede ocultar que un recipiente concreto es defectuoso",
          "Es siempre más pequeña",
          "No se puede analizar",
        ],
        answer: 1,
        explain: "Al mezclar, un recipiente malo se diluye entre los buenos.",
      },
      {
        kind: "number",
        q: "Llegan 40 bidones. Tu procedimiento dice aplicar la regla √N + 1 redondeando hacia arriba. ¿Cuántos muestreas?",
        answer: 8,
        tolerance: 0.001,
        unit: "bidones",
        explain: "√40 ≈ 6,32; 6,32 + 1 = 7,32; hacia arriba son 8 bidones. Con el redondeo normal de las directrices de la OMS serían 7: por eso hay que mirar qué dice el procedimiento.",
      },
    ],
  },
  {
    slug: "toma-de-muestras",
    level: 5,
    order: 3,
    title: "Toma de muestras de sólidos y líquidos",
    titleEn: "Taking samples",
    minutes: 15,
    summary: "Útiles, técnica y precauciones para que la muestra no se contamine ni contamine el producto.",
    body: `
### Dónde
- Materias primas: en una **cabina o sala de muestreo** (*sampling booth*), a menudo con flujo de aire que protege al operador y al producto.
- Proceso (IPC): por **tomamuestras** del reactor (*sampling valve / sampling port*), por la boca de hombre con el útil adecuado o en el filtro-secador mediante un sistema cerrado.

### Útiles
- **Sólidos**: sonda o lanza de muestreo (*sampling thief / spear*) para sacar material de distintas profundidades, cucharas y espátulas.
- **Líquidos**: tubo o sonda de muestreo (*dip tube*), botella lastrada para depósitos, válvula tomamuestras.
- Útiles **limpios, secos** y de un material que no reaccione con el producto. Mejor de un solo uso si es posible.

### Técnica
1. Comprobar etiqueta, lote y estado del material.
2. Limpiar el exterior del recipiente antes de abrirlo.
3. Para líquidos de una válvula: **purgar** primero la válvula (desechar el líquido que estaba estancado en el tubo).
4. Tomar la cantidad indicada, cerrar enseguida la muestra y el recipiente.
5. Etiquetar **en el momento**.
6. Registrar hora, quién y cualquier observación (aspecto, color, grumos).

### Seguridad
Productos inflamables: puesta a tierra y útiles antichispas. Productos tóxicos o potentes: contención y EPI específicos. Reactores a presión o calientes: seguir el procedimiento de toma de muestras, nunca abrir sin comprobar.
`,
    plant: `
IPC del reactor a 60 °C. Conectas el vial a la válvula tomamuestras, purgas los primeros mililitros a un recipiente de residuos, tomas la muestra, cierras y la etiquetas. Anotas la hora exacta de la toma: el laboratorio la necesita para interpretar el resultado.
`,
    batchRecord: `
- Hora exacta de la toma y quién la tomó.
- Observaciones visuales.
- Número de muestra.
`,
    terms: [
      { es: "Sonda de muestreo", en: "Sampling thief / spear", def: "Útil para sacar muestras de sólidos a distintas profundidades." },
      { es: "Válvula tomamuestras", en: "Sampling valve", def: "Válvula del equipo diseñada para extraer muestras." },
      { es: "Cabina de muestreo", en: "Sampling booth", def: "Zona protegida con flujo de aire para abrir y muestrear materiales." },
      { es: "Purgar", en: "Purge / flush", def: "Desechar el primer líquido para que la muestra sea representativa." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "¿Por qué se purga la válvula tomamuestras antes de tomar la muestra?",
        options: [
          "Para limpiar el vial",
          "Porque el líquido estancado en la válvula no representa lo que hay en el reactor",
          "Para enfriar la muestra",
          "No hace falta",
        ],
        answer: 1,
        explain: "El líquido parado en la tubería puede ser de antes o estar a otra temperatura.",
      },
      {
        kind: "choice",
        q: "¿Cuándo se etiqueta la muestra?",
        options: ["Al llegar al laboratorio", "En el momento de tomarla", "Al final del turno", "Cuando haya tiempo"],
        answer: 1,
        explain: "Etiquetar en el momento evita confusiones entre muestras.",
      },
      {
        kind: "choice",
        q: "Vas a muestrear un disolvente inflamable de un bidón. ¿Qué precaución es imprescindible?",
        options: [
          "Ninguna",
          "Puesta a tierra y útiles antichispas, con el EPI indicado",
          "Hacerlo deprisa y sin EPI",
          "Calentar el bidón para que salga mejor",
        ],
        answer: 1,
        explain: "La electricidad estática puede encender los vapores; la puesta a tierra la descarga.",
      },
    ],
  },
  {
    slug: "conservacion-y-custodia",
    level: 5,
    order: 5,
    title: "Conservación, transporte y cadena de custodia",
    titleEn: "Sample storage and chain of custody",
    minutes: 10,
    summary: "Cómo se protege la muestra desde que se toma hasta que se analiza y se archiva.",
    body: `
### Envases
- **Vidrio** para disolventes orgánicos; **ámbar** si el producto es sensible a la **luz**.
- **Plástico** (polietileno) para bases fuertes y muestras sólidas, si es compatible.
- Bolsas dobles para sólidos, cerradas con brida.
- Cierre **hermético** si la muestra puede absorber o perder **humedad** o disolvente (crucial para KF o LOD).

### Condiciones
- Temperatura indicada (ambiente, nevera 2–8 °C, congelador).
- Tiempo máximo entre toma y análisis, si está definido.

### Cadena de custodia (*chain of custody*)
Registro de **cada persona** que tiene la muestra y **cuándo**: quien la toma, quien la transporta, quien la recibe en el laboratorio. Con el LIMS se hace escaneando la etiqueta en cada paso.

### Muestras de retención (*retention samples*)
De cada lote de API se guarda una muestra en el envase equivalente al de venta. Según ICH Q7 (11.7):
- API con **fecha de caducidad**: **1 año después de la caducidad** o **3 años después de distribuir el lote**, lo que sea **más largo**.
- API con **fecha de re-análisis**: **3 años después de que el lote se haya distribuido por completo**.
`,
    plant: `
Tomas una muestra para Karl Fischer del producto seco. La metes en un vial de vidrio con tapón hermético, sin dejar mucho aire, y la llevas enseguida. Si la dejas abierta, el producto absorbe humedad del ambiente y el resultado sale más alto que el real.
`,
    batchRecord: `
- Hora de entrega al laboratorio (si se registra).
- Muestras de retención del lote final: cantidad y ubicación.
`,
    terms: [
      { es: "Frasco ámbar", en: "Amber bottle / vial", def: "Envase de vidrio oscuro que protege de la luz." },
      { es: "Higroscópico", en: "Hygroscopic", def: "Que absorbe humedad del aire." },
      { es: "Cadena de custodia", en: "Chain of custody", def: "Registro de quién tiene la muestra en cada momento." },
      { es: "Muestra de retención", en: "Retention / reserve sample", def: "Muestra de cada lote guardada para análisis futuros." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "Una muestra para medir agua (KF) se deja abierta 30 minutos. ¿Qué pasará probablemente?",
        options: ["Nada", "El resultado de agua saldrá más alto que el real", "Saldrá más bajo", "La muestra se evaporará"],
        answer: 1,
        explain: "Muchos productos absorben humedad del aire; por eso se usan envases herméticos.",
      },
      {
        kind: "choice",
        q: "¿Qué envase usarías para una muestra sensible a la luz?",
        options: ["Vidrio transparente", "Vidrio ámbar", "Bolsa transparente", "Cualquiera"],
        answer: 1,
        explain: "El vidrio ámbar filtra la luz que degrada el producto.",
      },
      {
        kind: "number",
        q: "Un API con fecha de re-análisis se terminó de distribuir en marzo de 2026. Según ICH Q7, ¿hasta qué año como mínimo se guarda su muestra de retención?",
        answer: 2029,
        tolerance: 0.0001,
        unit: "año",
        explain: "Con fecha de re-análisis: 3 años tras la distribución completa. Marzo de 2026 + 3 = marzo de 2029.",
      },
    ],
  },
  {
    slug: "preparacion-de-la-muestra",
    level: 5,
    order: 7,
    title: "Preparación de la muestra en el laboratorio",
    titleEn: "Sample preparation",
    minutes: 12,
    summary: "Lo que se hace a la muestra antes de medirla: homogeneizar, pesar, disolver, diluir y filtrar.",
    body: `
Casi ningún instrumento analiza la muestra "tal cual". Antes hay que **prepararla**:

1. **Homogeneizar**: mezclar la muestra para que la porción que se pesa sea representativa (los sólidos pueden tener grumos o separarse por tamaño).
2. **Reducir** la cantidad: por **cuarteo** (*quartering*) o con divisores de muestra, si hay mucha.
3. **Pesar** con exactitud (balanza analítica).
4. **Disolver** en el disolvente del método (el *diluyente*).
5. **Diluir** hasta la concentración que el instrumento mide bien.
6. **Filtrar** (filtros de jeringa de 0,45 o 0,2 µm) para quitar partículas que dañarían el HPLC.
7. Otras: secar, moler, extraer, digerir con ácido (para metales), derivatizar.

### Factor de dilución
Si tomas 1 mL y lo llevas a 50 mL, el factor de dilución es **50**. Si haces dos diluciones seguidas, los factores se **multiplican**:

> 1 → 10 mL (×10) y luego 1 → 100 mL (×100): factor total = **1000**

Al calcular el resultado, la concentración medida se multiplica por el factor de dilución.
`,
    plant: `
El método de HPLC dice: "Pesar 50 mg de muestra en matraz de 50 mL, disolver y enrasar con diluyente. Tomar 5 mL y llevar a 50 mL." Factor de la segunda dilución: 10. La concentración final es 0,1 mg/mL.
`,
    batchRecord: `
En el registro analítico: pesadas, volúmenes de cada matraz y pipeta, diluyente y su lote, y filtro usado.
`,
    terms: [
      { es: "Homogeneizar", en: "Homogenize", def: "Mezclar para que toda la muestra sea igual." },
      { es: "Cuarteo", en: "Quartering / coning and quartering", def: "Método para reducir una muestra sólida dividiéndola en cuatro." },
      { es: "Diluyente", en: "Diluent", def: "Disolvente indicado en el método para preparar la muestra." },
      { es: "Factor de dilución", en: "Dilution factor", def: "Número de veces que se ha diluido una muestra." },
      { es: "Filtro de jeringa", en: "Syringe filter", def: "Filtro pequeño para quitar partículas antes de inyectar en el equipo." },
    ],
    quiz: [
      {
        kind: "number",
        q: "Tomas 2 mL y los llevas a 100 mL. ¿Cuál es el factor de dilución?",
        answer: 50,
        tolerance: 0.001,
        unit: "",
        explain: "100 / 2 = 50.",
      },
      {
        kind: "number",
        q: "Pesas 50 mg en 50 mL y luego diluyes 5 mL a 50 mL. ¿Concentración final en mg/mL?",
        answer: 0.1,
        tolerance: 0.001,
        unit: "mg/mL",
        explain: "50 mg / 50 mL = 1 mg/mL; luego ÷10 = 0,1 mg/mL.",
      },
      {
        kind: "number",
        q: "Diluyes 1 mL a 25 mL y después 2 mL de esa disolución a 100 mL. ¿Cuál es el factor de dilución total?",
        answer: 1250,
        tolerance: 0.001,
        unit: "",
        explain: "Primera dilución ×25, segunda ×50 (100 / 2): 25 × 50 = 1250.",
      },
    ],
  },
];

// Las lecciones «a fondo» van cada una en su archivo nivel5-tema.ts.
export const nivel5: Lesson[] = [...muestreo, custodiaAFondo];
