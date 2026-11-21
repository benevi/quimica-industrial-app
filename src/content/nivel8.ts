import type { Lesson } from "./types";

const fisicos: Lesson[] = [
  {
    slug: "punto-de-fusion-dsc",
    level: 8,
    order: 1,
    title: "Punto de fusión y DSC",
    titleEn: "Melting point and DSC",
    minutes: 12,
    summary: "Una propiedad sencilla que dice mucho de la identidad y la pureza de un sólido.",
    body: `
### Punto de fusión (*melting point*)
Temperatura a la que un sólido pasa a líquido. Una sustancia **pura** funde en un intervalo **estrecho** y a una temperatura característica. Las **impurezas** hacen que funda **antes** y en un **intervalo más amplio**.

### Cómo se mide
- **Método del capilar** (Ph. Eur. 2.2.14, USP 741): se introduce un poco de polvo seco en un tubo capilar y se calienta despacio en un aparato con lupa o cámara. Se anota cuándo empieza y cuándo termina de fundir.
- La muestra debe estar **seca** y bien **molida**; el equipo, **calibrado** con patrones de punto de fusión conocido.

### DSC (*Differential Scanning Calorimetry*)
Mide el **calor** que absorbe o desprende la muestra al calentarla. La fusión aparece como un pico. Da información extra:
- Diferencia entre **polimorfos** (funden a temperaturas distintas).
- Detecta **solvatos** o hidratos.
- Estudios de **seguridad térmica**: a qué temperatura empieza a descomponerse una sustancia (muy importante en planta).
`,
    plant: `
Especificación de un intermedio: "Punto de fusión 168–171 °C". El lote da 162–167 °C: funde antes y en un intervalo más amplio. Es señal de impurezas o de humedad. El laboratorio lo comunicará como OOS.
`,
    batchRecord: `
Punto de fusión en la especificación de intermedios y API; datos de DSC en estudios de seguridad de proceso.
`,
    terms: [
      { es: "Punto de fusión", en: "Melting point / melting range", def: "Temperatura o intervalo en que un sólido funde." },
      { es: "Tubo capilar", en: "Capillary tube", def: "Tubo fino de vidrio donde se coloca la muestra para medir el punto de fusión." },
      { es: "Calorimetría diferencial de barrido", en: "Differential Scanning Calorimetry (DSC)", def: "Técnica que mide el calor absorbido o desprendido al calentar." },
      { es: "Solvato / hidrato", en: "Solvate / hydrate", def: "Cristal que incorpora moléculas de disolvente o de agua." },
      { es: "Descomposición", en: "Decomposition", def: "Rotura de una sustancia por el calor." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "Una muestra impura, comparada con la pura…",
        options: [
          "Funde a mayor temperatura",
          "Funde antes y en un intervalo más amplio",
          "No funde",
          "Funde igual",
        ],
        answer: 1,
        explain: "Las impurezas rebajan y ensanchan el intervalo de fusión.",
      },
      {
        kind: "choice",
        q: "¿Qué información de seguridad de proceso puede dar un DSC?",
        options: [
          "El color del producto",
          "A qué temperatura empieza a descomponerse una sustancia",
          "El precio",
          "El tamaño de partícula",
        ],
        answer: 1,
        explain: "Detectar descomposiciones exotérmicas ayuda a fijar temperaturas máximas seguras.",
      },
      {
        kind: "choice",
        q: "¿Por qué la muestra para el punto de fusión debe estar seca?",
        options: [
          "Para que pese menos",
          "Porque el agua o el disolvente actúan como impureza: rebajan y ensanchan el intervalo",
          "Para no ensuciar el capilar",
          "No importa",
        ],
        answer: 1,
        explain: "Un producto húmedo funde antes y en un intervalo más amplio, y parecería impuro.",
      },
    ],
  },
  {
    slug: "densidad-viscosidad",
    level: 8,
    order: 3,
    title: "Densidad y viscosidad",
    titleEn: "Density and viscosity",
    minutes: 12,
    summary: "Cómo se miden la densidad de líquidos y polvos y la viscosidad, y para qué sirven.",
    body: `
### Densidad de líquidos
- **Picnómetro** (*pycnometer*): frasco de volumen exacto que se pesa vacío y lleno.
- **Densímetro digital** de tubo oscilante (*oscillating U-tube*): rápido y exacto, controla la temperatura. Muy usado para disolventes y soluciones.

La densidad sirve para **identificar** un líquido, comprobar la **concentración** de soluciones (NaOH, H₂SO₄) y convertir litros a kilos.

### Densidad de polvos
- **Densidad aparente** (*bulk density*): masa de polvo / volumen que ocupa sin compactar.
- **Densidad compactada** (*tapped density*): tras golpear la probeta un número fijo de veces.

Con ellas se calcula el **índice de Hausner** = compactada / aparente. Cuanto más bajo, mejor fluye el polvo. La Farmacopea Europea (capítulo 2.9.36) usa esta escala: 1,00–1,11 **excelente**; 1,12–1,18 **buena**; 1,19–1,25 **aceptable**; 1,26–1,34 **pasable**; por encima, mala o muy mala. Importa para descargar, envasar y para el cliente que fabricará comprimidos.

### Viscosidad (*viscosity*)
Resistencia de un líquido a fluir. El agua a 20 °C tiene ~1 mPa·s; un aceite, cientos. Se mide con **viscosímetros** capilares o rotacionales. En planta afecta a bombeos, filtraciones y agitación. La viscosidad **baja al calentar**.
`,
    plant: `
Un polvo tiene densidad aparente 0,50 g/mL y compactada 0,62 g/mL. Índice de Hausner = 0,62 / 0,50 = **1,24** → fluye razonablemente bien.
`,
    batchRecord: `
Densidad de soluciones preparadas; densidad aparente y compactada en el CoA de algunos API.
`,
    terms: [
      { es: "Picnómetro", en: "Pycnometer", def: "Frasco calibrado para medir densidades." },
      { es: "Densímetro digital", en: "Digital density meter", def: "Equipo que mide la densidad con un tubo oscilante." },
      { es: "Densidad aparente", en: "Bulk density", def: "Masa de un polvo dividida por el volumen que ocupa sin compactar." },
      { es: "Densidad compactada", en: "Tapped density", def: "Densidad de un polvo tras golpearlo un número fijo de veces." },
      { es: "Índice de Hausner", en: "Hausner ratio", def: "Densidad compactada / aparente; indica cómo fluye un polvo." },
      { es: "Viscosidad", en: "Viscosity", def: "Resistencia de un fluido a fluir." },
    ],
    quiz: [
      {
        kind: "number",
        q: "Densidad aparente 0,40 g/mL y compactada 0,56 g/mL. ¿Índice de Hausner?",
        answer: 1.4,
        tolerance: 0.001,
        unit: "",
        explain: "0,56 / 0,40 = 1,4: un polvo que fluye mal.",
      },
      {
        kind: "choice",
        q: "¿Qué pasa con la viscosidad de un líquido al calentarlo?",
        options: ["Sube", "Baja", "No cambia", "Se vuelve sólido"],
        answer: 1,
        explain: "Por eso a veces se calienta un líquido viscoso para bombearlo o filtrarlo mejor.",
      },
      {
        kind: "number",
        q: "Densidad aparente 0,45 g/mL y compactada 0,54 g/mL. ¿Cuál es el índice de Hausner?",
        answer: 1.2,
        tolerance: 0.01,
        unit: "",
        explain: "0,54 / 0,45 = 1,2: flujo aceptable.",
      },
    ],
  },
  {
    slug: "tamano-de-particula",
    level: 8,
    order: 5,
    title: "Tamaño de partícula y tamizado",
    titleEn: "Particle size",
    minutes: 12,
    summary: "Por qué el tamaño de los cristales importa y cómo se expresa con d10, d50 y d90.",
    body: `
### Por qué importa
- **Disolución** del fármaco en el cuerpo: partículas más pequeñas se disuelven más rápido.
- **Fabricación del medicamento**: flujo del polvo, mezclado uniforme, compresión.
- **Proceso**: cristales muy finos filtran y lavan mal.

### Cómo se mide
- **Tamizado** (*sieve analysis*): se pasa el polvo por una torre de tamices de malla decreciente y se pesa lo que queda en cada uno.
- **Difracción láser** (*laser diffraction*): el método más usado; la luz se desvía distinto según el tamaño.
- **Microscopía**: para ver la forma de los cristales.

### d10, d50 y d90
El resultado se da como **distribución**:
- **d10**: el 10 % de las partículas (en volumen) es más pequeño que este tamaño.
- **d50** (mediana): la mitad es más pequeña.
- **d90**: el 90 % es más pequeño.

Ejemplo: d90 ≤ 50 µm significa que el 90 % de las partículas mide menos de 50 micras.

### Cómo se controla en planta
- Con la **cristalización** (velocidad de enfriamiento, siembra, agitación).
- Con la **molienda** y el **tamizado** posterior.
`,
    plant: `
La especificación del cliente pide d90 ≤ 100 µm. Tras secar, el producto da d90 = 180 µm. Se muele siguiendo la hoja (molino de pines a cierta velocidad) y se repite el análisis: d90 = 85 µm → cumple.
`,
    batchRecord: `
Parámetros del molino (velocidad, tamiz) y resultado del tamaño de partícula.
`,
    terms: [
      { es: "Tamaño de partícula", en: "Particle size distribution (PSD)", def: "Reparto de tamaños de las partículas de un polvo." },
      { es: "Tamiz", en: "Sieve / screen", def: "Malla que separa partículas por tamaño." },
      { es: "Difracción láser", en: "Laser diffraction", def: "Técnica que mide el tamaño de partícula por cómo dispersan la luz." },
      { es: "Micra", en: "Micrometre (µm)", def: "Milésima de milímetro." },
      { es: "d50", en: "d50 / median particle size", def: "Tamaño por debajo del cual está la mitad de las partículas." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "d90 = 40 µm significa…",
        options: [
          "Todas las partículas miden 40 µm",
          "El 90 % de las partículas es menor de 40 µm",
          "Hay 90 partículas de 40 µm",
          "El 10 % es menor de 40 µm",
        ],
        answer: 1,
        explain: "d90 es el tamaño por debajo del cual está el 90 % del material.",
      },
      {
        kind: "choice",
        q: "¿Qué problema de planta dan los cristales muy finos?",
        options: ["Ninguno", "Filtran y lavan mal", "Se disuelven peor", "Pesan más"],
        answer: 1,
        explain: "Forman tortas compactas que dejan pasar mal el líquido.",
      },
      {
        kind: "choice",
        q: "Un API seco no cumple el d90. ¿Qué operación se usa para bajar el tamaño de partícula?",
        options: [
          "Destilación",
          "Molienda (y tamizado)",
          "Extracción",
          "Inertización",
        ],
        answer: 1,
        explain: "Se muele con los parámetros aprobados y se vuelve a analizar el tamaño.",
      },
    ],
  },
  {
    slug: "aspecto-solubilidad",
    level: 8,
    order: 7,
    title: "Aspecto, color y solubilidad",
    titleEn: "Appearance, colour and solubility",
    minutes: 10,
    summary: "Los ensayos más sencillos del certificado y cómo se expresan según la farmacopea.",
    body: `
### Aspecto (*appearance / description*)
Descripción visual: "polvo cristalino blanco o casi blanco". Un cambio de color, grumos o partículas extrañas es una **alerta** aunque el resto de análisis cumpla.

### Color y limpidez de la disolución
Se disuelve el producto y se compara con los patrones de **opalescencia** (turbidez; Ph. Eur. 2.2.1) y de **color** (Ph. Eur. 2.2.2) de la farmacopea. Detecta impurezas coloreadas o insolubles.

### Términos de solubilidad de la farmacopea
Volumen de disolvente necesario para disolver 1 g:

| Término | mL de disolvente por g |
|---|---|
| Muy soluble | menos de 1 |
| Fácilmente soluble | 1 a 10 |
| Soluble | 10 a 30 |
| Bastante soluble | 30 a 100 |
| Poco soluble | 100 a 1000 |
| Muy poco soluble | 1000 a 10 000 |
| Prácticamente insoluble | 10 000 o más |

### Por qué te interesa
Estos datos explican por qué el proceso usa ciertos disolventes: se disuelve el producto en uno en el que es **soluble** en caliente y se cristaliza o lava con otro en el que es **poco soluble**.
`,
    plant: `
Al descargar el secadero ves unos puntos negros en el polvo blanco. Aunque los análisis cumplan, se avisa: pueden ser partículas de una junta o del equipo. Es una desviación que se investiga.
`,
    batchRecord: `
Aspecto del producto al descargar (a veces se registra en la hoja); aspecto en el CoA.
`,
    terms: [
      { es: "Aspecto", en: "Appearance / description", def: "Descripción visual del producto." },
      { es: "Limpidez / opalescencia", en: "Clarity / opalescence", def: "Grado de transparencia de una disolución." },
      { es: "Prácticamente insoluble", en: "Practically insoluble", def: "Necesita 10 000 mL o más de disolvente por gramo." },
      { es: "Partícula extraña", en: "Foreign particle", def: "Partícula que no debería estar en el producto." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "Un producto necesita 20 mL de agua para disolver 1 g. Según la farmacopea es…",
        options: ["Muy soluble", "Fácilmente soluble", "Soluble", "Poco soluble"],
        answer: 2,
        explain: "Entre 10 y 30 mL por gramo es «soluble».",
      },
      {
        kind: "choice",
        q: "Ves partículas oscuras en el producto blanco al descargar. ¿Qué haces?",
        options: ["Nada, si el análisis cumple", "Avisar: puede ser contaminación del equipo", "Quitarlas a mano", "Mezclar bien"],
        answer: 1,
        explain: "Las partículas extrañas se investigan siempre.",
      },
      {
        kind: "choice",
        q: "Un producto necesita 500 mL de disolvente para disolver 1 g. Según la farmacopea es…",
        options: [
          "Soluble",
          "Bastante soluble",
          "Poco soluble",
          "Prácticamente insoluble",
        ],
        answer: 2,
        explain: "Entre 100 y 1000 mL por gramo es «poco soluble».",
      },
    ],
  },
];

// Las lecciones «a fondo» van cada una en su archivo nivel8-tema.ts.
export const nivel8: Lesson[] = [...fisicos];
