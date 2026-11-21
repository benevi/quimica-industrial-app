import type { Lesson } from "./types";

const clasico: Lesson[] = [
  {
    slug: "volumetrias-acido-base",
    level: 6,
    order: 1,
    title: "Volumetrías ácido-base",
    titleEn: "Acid-base titrations",
    minutes: 18,
    summary: "La técnica clásica para medir cuánto ácido o base hay en una muestra, con su cálculo paso a paso.",
    body: `
### La idea
Una **volumetría** o **valoración** (*titration*) mide la cantidad de una sustancia añadiendo poco a poco otra de **concentración conocida** (el **valorante**, *titrant*) hasta que reaccionan por completo.

### Material y pasos
1. Pesar la muestra con exactitud y disolverla.
2. Llenar la **bureta** con el valorante (por ejemplo NaOH 0,1 M valorada).
3. Añadir valorante agitando hasta el **punto final** (*end point*).
4. Anotar el **volumen gastado**.

### ¿Cómo se ve el punto final?
- **Indicador** de color (*indicator*): por ejemplo, la **fenolftaleína** pasa de incolora a **rosa** hacia pH 8–10.
- **Potenciométrico**: un electrodo de pH registra la curva y el valorador automático detecta el salto. Es lo habitual en laboratorios GMP: más objetivo y queda registro.

El **punto de equivalencia** es donde la reacción es exactamente completa; el **punto final** es donde lo detectamos. Un buen método hace que coincidan.

### Cálculo
> moles de valorante = volumen (L) × concentración (M) × factor
> moles de muestra = moles de valorante × proporción de la reacción
> % riqueza = (moles de muestra × masa molar) / masa pesada × 100

### Blanco (*blank*)
Se repite la valoración **sin muestra** para corregir lo que consumen el disolvente y el indicador. Ese volumen se resta.
`,
    plant: `
Riqueza de ácido benzoico (M = 122,12 g/mol), reacción 1:1 con NaOH:
- Masa pesada: 0,2500 g
- NaOH 0,1 M, factor 1,005, gasto 20,30 mL

moles NaOH = 0,02030 × 0,1 × 1,005 = 0,0020402 mol
masa = 0,0020402 × 122,12 = 0,24914 g
riqueza = 0,24914 / 0,2500 × 100 = **99,66 %**
`,
    batchRecord: `
En la hoja de análisis: masa pesada, volumen gastado, blanco, factor del valorante, cálculo y resultado frente a especificación.
`,
    terms: [
      { es: "Valoración / volumetría", en: "Titration", def: "Análisis que mide una sustancia añadiendo otra de concentración conocida." },
      { es: "Valorante", en: "Titrant", def: "Solución de concentración conocida que se añade desde la bureta." },
      { es: "Punto final", en: "End point", def: "Momento en que se detecta el fin de la valoración." },
      { es: "Punto de equivalencia", en: "Equivalence point", def: "Momento en que la reacción es estequiométricamente completa." },
      { es: "Indicador", en: "Indicator", def: "Sustancia que cambia de color al llegar al punto final." },
      { es: "Valorador automático", en: "Autotitrator", def: "Equipo que añade el valorante y detecta el punto final con un electrodo." },
      { es: "Blanco", en: "Blank", def: "Ensayo sin muestra para corregir interferencias." },
    ],
    quiz: [
      {
        kind: "number",
        q: "Gastas 15,00 mL de NaOH 0,1000 M (factor 1,000) para valorar un ácido 1:1. ¿Cuántos mmol de ácido había?",
        answer: 1.5,
        tolerance: 0.001,
        unit: "mmol",
        explain: "15,00 mL × 0,1000 mmol/mL = 1,500 mmol (proporción 1:1).",
      },
      {
        kind: "choice",
        q: "¿Para qué sirve el blanco en una valoración?",
        options: [
          "Para limpiar la bureta",
          "Para restar lo que consumen el disolvente y los reactivos sin muestra",
          "Para calibrar la balanza",
          "Para cambiar de indicador",
        ],
        answer: 1,
        explain: "El volumen del blanco se resta del gasto de la muestra.",
      },
      {
        kind: "number",
        q: "Un ácido (M = 122,12) consume 0,002000 mol de NaOH (1:1) y la muestra pesaba 0,2450 g. ¿Riqueza en %?",
        answer: 99.69,
        tolerance: 0.001,
        unit: "%",
        explain: "0,002000 × 122,12 = 0,24424 g; 0,24424 / 0,2450 × 100 = 99,69 %.",
      },
    ],
  },
  {
    slug: "volumetrias-redox-complexometria",
    level: 6,
    order: 3,
    title: "Volumetrías redox y complexometría",
    titleEn: "Redox and complexometric titrations",
    minutes: 12,
    summary: "Otras valoraciones frecuentes: con oxidantes, con yodo y con EDTA para metales.",
    body: `
### Volumetrías redox
Se basan en una reacción de **oxidación-reducción**.
- **Permanganometría**: con permanganato potásico (KMnO₄), que es morado y se decolora al reaccionar: hace de su propio indicador.
- **Yodimetría** (*iodimetry*): se valora directamente con una disolución de **yodo**. **Yodometría** (*iodometry*): la muestra libera yodo a partir de yoduro, y ese yodo se valora con **tiosulfato**. En las dos se usa **almidón** como indicador (azul oscuro con yodo).
- Ejemplo de uso: medir la riqueza de agua oxigenada o de un oxidante usado en planta.

### Complexometría
Se valoran **iones metálicos** (calcio, magnesio, zinc…) con **EDTA**, que los "atrapa" formando un complejo 1:1. Se usa un indicador metalocrómico (por ejemplo, negro de eriocromo T) y un **tampón** de pH.

Aplicación típica: **dureza del agua** (calcio y magnesio).

### Valoraciones en medio no acuoso
Muchos API son bases débiles poco solubles en agua. Se valoran con **ácido perclórico en ácido acético** (método de muchas monografías de farmacopea), con detección potenciométrica.

### Valoraciones de precipitación
Con **nitrato de plata** para medir cloruros (por ejemplo, el contenido de cloruro de un clorhidrato).
`,
    plant: `
Dureza del agua de una torre de refrigeración: 100 mL de muestra gastan 12,5 mL de EDTA 0,0100 M. Si todo fuera calcio (M = 40,08): 0,0100 × 0,0125 × 40,08 × 1000 / 0,100 = **50,1 mg/L** de Ca.
`,
    batchRecord: `
Análisis de servicios (agua, salmueras) y de materias primas con métodos de farmacopea.
`,
    terms: [
      { es: "Permanganometría", en: "Permanganometry", def: "Valoración redox con permanganato potásico." },
      { es: "Yodometría", en: "Iodometry", def: "Valoración redox en la que la muestra libera yodo y ese yodo se valora con tiosulfato. Si se valora directamente con yodo se llama yodimetría." },
      { es: "Complexometría", en: "Complexometric titration", def: "Valoración de metales con un agente complejante como el EDTA." },
      { es: "EDTA", en: "EDTA", def: "Ácido etilendiaminotetraacético, forma complejos 1:1 con muchos metales." },
      { es: "Dureza del agua", en: "Water hardness", def: "Contenido de calcio y magnesio del agua." },
      { es: "Valoración no acuosa", en: "Non-aqueous titration", def: "Valoración en disolventes distintos del agua, típica de bases débiles." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "¿Qué se mide habitualmente con EDTA?",
        options: ["El pH", "Iones metálicos como calcio y magnesio", "La humedad", "Los disolventes residuales"],
        answer: 1,
        explain: "El EDTA forma complejos con los metales; se usa para la dureza del agua.",
      },
      {
        kind: "choice",
        q: "¿Qué indicador se usa en yodometría?",
        options: ["Fenolftaleína", "Almidón", "Naranja de metilo", "Ninguno"],
        answer: 1,
        explain: "El almidón da un color azul intenso con el yodo.",
      },
      {
        kind: "choice",
        q: "¿Con qué se valora el cloruro de un clorhidrato?",
        options: [
          "EDTA",
          "Nitrato de plata (valoración de precipitación)",
          "Permanganato",
          "Almidón",
        ],
        answer: 1,
        explain: "El ion plata forma cloruro de plata insoluble con el cloruro.",
      },
    ],
  },
  {
    slug: "gravimetria",
    level: 6,
    order: 5,
    title: "Gravimetría: analizar pesando",
    titleEn: "Gravimetric analysis",
    minutes: 12,
    summary: "Ensayos en los que el resultado sale de pesar antes y después: residuo de calcinación, pérdida por secado.",
    body: `
En la **gravimetría** el resultado se obtiene **pesando**. Es sencilla pero muy exacta si se trabaja bien.

### Pesada a masa constante
Se calienta, se enfría en desecador y se pesa; se repite hasta que dos pesadas seguidas apenas difieren (según la farmacopea, normalmente **≤ 0,5 mg**). Así se asegura que ya no se pierde más.

### Pérdida por secado (*loss on drying, LOD*)
Se seca la muestra en estufa (por ejemplo 105 °C) o a vacío y se mide cuánto peso pierde:

> LOD (%) = (masa inicial − masa final) / masa inicial × 100

Mide **todo lo volátil**: agua y disolventes.

### Residuo de calcinación o cenizas sulfatadas (*residue on ignition, sulphated ash*)
Se quema la muestra con ácido sulfúrico en un crisol a unos 600 °C en la **mufla**. Lo orgánico desaparece y queda el residuo inorgánico (sales, metales). En un API orgánico debe ser muy bajo (por ejemplo ≤ 0,1 %).

### Gravimetría por precipitación
Se hace precipitar la sustancia como un compuesto insoluble, se filtra, se seca y se pesa. Hoy es menos habitual, pero es la base del método.
`,
    plant: `
LOD de un producto húmedo: crisol + muestra antes = 25,4310 g; crisol vacío = 23,4310 g (muestra = 2,0000 g). Después de secar: 25,4150 g.

Pérdida = 25,4310 − 25,4150 = 0,0160 g → LOD = 0,0160 / 2,0000 × 100 = **0,80 %**.
`,
    batchRecord: `
LOD como IPC de fin de secado; residuo de calcinación en el análisis final del API.
`,
    terms: [
      { es: "Gravimetría", en: "Gravimetric analysis", def: "Análisis basado en medir masas." },
      { es: "Masa constante", en: "Constant mass / constant weight", def: "Cuando dos pesadas seguidas apenas difieren tras secar o calcinar." },
      { es: "Crisol", en: "Crucible", def: "Recipiente resistente al calor para secar o calcinar muestras." },
      { es: "Residuo de calcinación / cenizas sulfatadas", en: "Residue on ignition / sulphated ash", def: "Residuo inorgánico que queda al quemar la muestra." },
    ],
    quiz: [
      {
        kind: "number",
        q: "Una muestra de 1,5000 g pierde 0,0120 g al secarla. ¿LOD en %?",
        answer: 0.8,
        tolerance: 0.001,
        unit: "%",
        explain: "0,0120 / 1,5000 × 100 = 0,80 %.",
      },
      {
        kind: "choice",
        q: "¿Qué mide la pérdida por secado (LOD)?",
        options: ["Solo el agua", "Todo lo volátil: agua y disolventes", "Los metales", "La pureza"],
        answer: 1,
        explain: "Mide todo lo que se evapora en las condiciones del ensayo. Para agua sola se usa Karl Fischer.",
      },
      {
        kind: "choice",
        q: "¿Qué significa llevar una muestra «a masa constante»?",
        options: [
          "Pesarla una sola vez",
          "Repetir secado, enfriado y pesada hasta que dos pesadas seguidas difieren muy poco (≤ 0,5 mg según la farmacopea)",
          "Pesar siempre la misma cantidad",
          "Usar siempre la misma balanza",
        ],
        answer: 1,
        explain: "Así se asegura que ya no queda nada por evaporar o calcinar.",
      },
    ],
  },
  {
    slug: "karl-fischer",
    level: 6,
    order: 7,
    title: "Valoración Karl Fischer: medir el agua",
    titleEn: "Karl Fischer titration",
    minutes: 15,
    summary: "El método de referencia para medir solo el agua, en sus dos versiones: volumétrica y culombimétrica.",
    body: `
El **Karl Fischer** (KF) mide **solo el agua** de una muestra. Se basa en una reacción en la que el **yodo** reacciona con el agua. Cuando ya no queda agua, aparece yodo libre y un electrodo lo detecta: es el punto final.

### Dos tipos
| | Volumétrico | Culombimétrico |
|---|---|---|
| Cómo se añade el yodo | Con una bureta, desde un reactivo valorado | Se genera eléctricamente dentro de la celda |
| Para qué contenidos | Medios y altos (de ~0,1 % hacia arriba) | Trazas (ppm hasta ~1 %) |
| Calibración | Se determina el **título** del reactivo (mg de agua por mL) | No necesita título (es un método absoluto) |

### Título del reactivo (volumétrico)
Se valora una cantidad conocida de agua (o un patrón como el **tartrato sódico dihidratado**, que contiene un 15,66 % de agua):

> título (mg/mL) = mg de agua del patrón / mL gastados

### Cálculo
> agua (%) = mL gastados × título (mg/mL) / masa de muestra (mg) × 100

### Cuidados
- El KF es muy sensible a la **humedad ambiente**: celda cerrada, muestras herméticas, trabajar deprisa.
- Algunas sustancias interfieren (aldehídos, cetonas, oxidantes): hay reactivos especiales o se usa un **horno** para evaporar el agua de la muestra.
`,
    plant: `
IPC de agua de un disolvente recuperado antes de reutilizarlo: límite ≤ 0,10 %. Se usa KF culombimétrico. Resultado 0,04 % → cumple.

Otro ejemplo, volumétrico: título 5,02 mg/mL, gasto 1,25 mL, muestra 500,0 mg → 1,25 × 5,02 / 500,0 × 100 = **1,255 %** de agua.
`,
    batchRecord: `
KF como IPC (agua en disolventes, en el producto antes de una reacción sensible al agua, al final del secado) y en el análisis final del API.
`,
    terms: [
      { es: "Karl Fischer volumétrico", en: "Volumetric Karl Fischer", def: "KF en el que el reactivo se añade con bureta; para contenidos medios y altos." },
      { es: "Karl Fischer culombimétrico", en: "Coulometric Karl Fischer", def: "KF en el que el yodo se genera eléctricamente; para trazas de agua." },
      { es: "Título", en: "Titer", def: "Mg de agua que reaccionan con 1 mL de reactivo KF." },
      { es: "Horno KF", en: "KF oven", def: "Accesorio que calienta la muestra y lleva el agua evaporada a la celda." },
    ],
    quiz: [
      {
        kind: "number",
        q: "Título 4,98 mg/mL, gasto 2,00 mL, muestra 400,0 mg. ¿Agua en %?",
        answer: 2.49,
        tolerance: 0.001,
        unit: "%",
        explain: "2,00 × 4,98 = 9,96 mg de agua; 9,96 / 400,0 × 100 = 2,49 %.",
      },
      {
        kind: "choice",
        q: "Para medir 50 ppm de agua en un disolvente, ¿qué KF usarías?",
        options: ["Volumétrico", "Culombimétrico", "Cualquiera", "Ninguno, se usa LOD"],
        answer: 1,
        explain: "El culombimétrico es el adecuado para trazas.",
      },
      {
        kind: "number",
        q: "Para el título pesas 150,0 mg de tartrato sódico dihidratado (15,66 % de agua) y gastas 4,70 mL de reactivo. ¿Título en mg/mL?",
        answer: 5,
        tolerance: 0.01,
        unit: "mg/mL",
        explain: "150,0 × 0,1566 = 23,49 mg de agua; 23,49 / 4,70 ≈ 5,00 mg/mL.",
      },
    ],
  },
  {
    slug: "calculo-y-expresion-de-resultados",
    level: 6,
    order: 9,
    title: "Cálculo y expresión de resultados",
    titleEn: "Calculating and reporting results",
    minutes: 12,
    summary: "Media, desviación estándar, RSD, redondeo y cómo se compara un resultado con su especificación.",
    body: `
### Media y dispersión
Con varias réplicas de un análisis:
- **Media** (*mean*): suma de valores / número de valores.
- **Desviación estándar** (*standard deviation, SD*): cuánto se separan los valores de la media.
- **Desviación estándar relativa** (*RSD*, a veces CV): SD / media × 100. Permite comparar precisiones. Se usa mucho en la **idoneidad del sistema** (por ejemplo, RSD de 5 inyecciones del patrón ≤ 2,0 %).

Ejemplo: 99,2 · 99,6 · 99,4 % → media 99,4 %, SD 0,20, RSD ≈ **0,20 %**.

### Redondeo (*rounding*)
- Se calcula con todos los decimales y se **redondea solo el resultado final**.
- Se redondea al **mismo número de decimales que la especificación**. Si el límite es "≤ 0,5 %", el resultado se expresa con un decimal.
- Regla habitual: si la cifra siguiente es 5 o mayor, se sube.

Ejemplo: especificación ≤ 0,5 %, resultado calculado 0,54 % → se expresa **0,5 %** → **cumple**. Resultado 0,55 % → **0,6 %** → no cumple.

### Unidades habituales
- **%** (p/p): partes por cien.
- **ppm**: partes por millón (1 ppm = 0,0001 %). Se usa para disolventes residuales y metales.
- **% área** en cromatografía: proporción de cada pico respecto al total.
`,
    plant: `
Disolvente residual metanol: límite ICH Q3C 3000 ppm. Resultado 2450 ppm = 0,245 % → cumple.
`,
    batchRecord: `
Resultados en el CoA con los decimales de la especificación y la palabra "cumple" o "no cumple".
`,
    terms: [
      { es: "Media", en: "Mean / average", def: "Suma de los valores dividida por su número." },
      { es: "Desviación estándar", en: "Standard deviation (SD)", def: "Medida de la dispersión de los valores." },
      { es: "Desviación estándar relativa", en: "Relative standard deviation (RSD)", def: "SD dividida por la media, en %." },
      { es: "Partes por millón", en: "Parts per million (ppm)", def: "Unidad de concentración: 1 ppm = 0,0001 %." },
      { es: "Réplica", en: "Replicate", def: "Repetición del mismo análisis sobre la misma muestra." },
    ],
    quiz: [
      {
        kind: "number",
        q: "Tres réplicas: 98,0 · 98,4 · 98,2 %. ¿Cuál es la media?",
        answer: 98.2,
        tolerance: 0.0001,
        unit: "%",
        explain: "(98,0 + 98,4 + 98,2) / 3 = 98,2 %.",
      },
      {
        kind: "number",
        q: "¿Cuántas ppm son 0,05 %?",
        answer: 500,
        tolerance: 0.001,
        unit: "ppm",
        explain: "0,05 % × 10 000 = 500 ppm.",
      },
      {
        kind: "choice",
        q: "Especificación ≤ 0,5 %. Resultado calculado 0,46 %. ¿Cómo se expresa y cumple?",
        options: ["0,46 %, cumple", "0,5 %, cumple", "0,5 %, no cumple", "0 %, cumple"],
        answer: 1,
        explain: "Se redondea a un decimal como la especificación: 0,5 %, que es ≤ 0,5 %.",
      },
    ],
  },
];

// Las lecciones «a fondo» van cada una en su archivo nivel6-tema.ts.
export const nivel6: Lesson[] = [...clasico];
