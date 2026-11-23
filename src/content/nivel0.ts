import type { Lesson } from "./types";
import { plantaAFondo } from "./nivel0-planta";
import { densidadAFondo } from "./nivel0-densidad";
import { unidadesAFondo } from "./nivel0-unidades";
import { matematicasAFondo } from "./nivel0-matematicas";

const bases0: Lesson[] = [
  {
    slug: "matematicas-utiles",
    level: 0,
    order: 1,
    title: "Matemáticas útiles para planta",
    titleEn: "Basic plant math",
    minutes: 12,
    summary: "Regla de tres, porcentajes, notación científica y redondeo: las cuentas que vas a hacer cada día.",
    body: `
En planta casi todas las cuentas se reducen a **cuatro herramientas**.

### 1. Regla de tres (*rule of three*)
Si 10 kg de producto necesitan 50 L de disolvente, ¿cuántos litros necesitan 14 kg?

> 10 kg ocupan 50 L
> 14 kg ocupan x L
>
> x = 14 × 50 / 10 = **70 L**

Siempre que dos cantidades crecen a la vez (más producto, más disolvente), sirve la regla de tres.

### 2. Porcentajes (*percentages*)
Un porcentaje es "partes de cada 100".
- El 15 % de 200 kg es 200 × 15 / 100 = **30 kg**.
- Si de 80 kg esperados obtienes 68 kg, el rendimiento es 68 / 80 × 100 = **85 %**.

### 3. Notación científica (*scientific notation*)
Sirve para números muy grandes o muy pequeños:
- 0,0005 = 5 × 10⁻⁴
- 6 000 000 = 6 × 10⁶

La verás en analíticas: "impureza 3 × 10⁻² %" significa 0,03 %.

### 4. Redondeo y cifras significativas (*rounding, significant figures*)
Registra **siempre el valor tal y como lo da el equipo**. Si la báscula marca 25,37 kg, se escribe 25,37 kg, no 25,4 kg. Solo se redondea cuando el procedimiento lo indica, y con su regla.
`,
    plant: `
La hoja dice: *"Cargar 6,0 L de agua por cada kg de producto húmedo"*. Tu producto húmedo pesa 42,8 kg.

42,8 × 6,0 = **256,8 L** de agua. Ese número lo calculas tú (o lo calcula el sistema) y un segundo operador lo verifica.
`,
    batchRecord: `
- Cálculos de cargas escalados al tamaño real del lote.
- Rendimiento (%) al final de cada etapa.
- Casillas de "calculado por" y "verificado por".
- Valores con las cifras decimales que exige el procedimiento.
`,
    terms: [
      { es: "Regla de tres", en: "Rule of three", def: "Método para calcular un valor desconocido a partir de una proporción conocida." },
      { es: "Porcentaje", en: "Percentage", def: "Cantidad expresada en partes por cada 100." },
      { es: "Rendimiento", en: "Yield", def: "Cantidad obtenida frente a la esperada, normalmente en %." },
      { es: "Cifras significativas", en: "Significant figures", def: "Dígitos de un valor que tienen sentido según la precisión de la medida." },
    ],
    quiz: [
      {
        kind: "number",
        q: "Por cada 1 kg de reactivo se cargan 8 L de metanol. ¿Cuántos litros cargas para 12,5 kg?",
        answer: 100,
        tolerance: 0.01,
        unit: "L",
        explain: "12,5 × 8 = 100 L.",
      },
      {
        kind: "number",
        q: "Esperabas 120 kg de producto seco y has obtenido 102 kg. ¿Cuál es el rendimiento?",
        answer: 85,
        tolerance: 0.01,
        unit: "%",
        explain: "102 / 120 × 100 = 85 %.",
      },
      {
        kind: "choice",
        q: "La báscula marca 18,46 kg. ¿Qué anotas en la hoja?",
        options: ["18,5 kg", "18 kg", "18,46 kg", "Lo que diga el compañero"],
        answer: 2,
        explain: "Se registra el valor exacto que muestra el equipo (dato original y preciso: principios ALCOA+, que verás en el nivel 20).",
      },
    ],
  },
  {
    slug: "unidades-y-conversiones",
    level: 0,
    order: 3,
    title: "Unidades y conversiones",
    titleEn: "Units and conversions",
    minutes: 15,
    summary: "Masa, volumen, temperatura y presión: qué unidades verás en planta y cómo pasar de una a otra.",
    body: `
### Masa (*mass*)
1 kg = 1000 g · 1 g = 1000 mg · 1 t (tonelada) = 1000 kg

### Volumen (*volume*)
1 L = 1000 mL · 1 m³ = 1000 L

Un reactor de "4 m³" (o 4000 L) es un reactor de **4000 litros** de capacidad total. Nunca se llena al 100 %.

### Temperatura (*temperature*)
- Grados Celsius (°C): la que usarás casi siempre.
- Kelvin (K): K = °C + 273,15. Aparece en fórmulas.

### Presión (*pressure*)
- 1 bar ≈ 1 atm ≈ la presión del aire a nivel del mar.
- 1 bar = 1000 mbar = 100 kPa.
- **Presión relativa (barg)**: lo que marca un manómetro normal; 0 barg = presión del ambiente.
- **Presión absoluta (bara)**: cuenta desde el vacío total. 0 barg ≈ 1 bara.
- **Vacío (*vacuum*)**: presión por debajo de la atmosférica. Un vacío de "50 mbar" (absoluto) es mucho vacío; la presión es muy baja.

### Truco para no equivocarte
Escribe siempre la unidad junto al número y comprueba que "se cancela": 3,5 m³ × 1000 L/m³ = 3500 L.
`,
    plant: `
La hoja indica: *"Concentrar a vacío (P ≤ 150 mbar) con T camisa ≤ 50 °C"*.

En el panel ves 0,12 bar absolutos. 0,12 bar = 120 mbar: **cumple** (120 ≤ 150).
`,
    batchRecord: `
- Presión de reactor (barg) y presión de vacío (mbar).
- Temperatura de masa (*batch / mass temperature*) y de camisa (*jacket temperature*), en °C.
- Volúmenes en L y masas en kg. Fíjate en qué unidad pide cada casilla.
`,
    terms: [
      { es: "Presión manométrica / relativa", en: "Gauge pressure (barg)", def: "Presión medida respecto a la atmosférica." },
      { es: "Presión absoluta", en: "Absolute pressure (bara)", def: "Presión medida respecto al vacío total." },
      { es: "Vacío", en: "Vacuum", def: "Presión inferior a la atmosférica." },
      { es: "Camisa", en: "Jacket", def: "Doble pared del reactor por la que circula el fluido que calienta o enfría." },
      { es: "Temperatura de masa", en: "Batch / mass temperature", def: "Temperatura del contenido del reactor." },
    ],
    quiz: [
      {
        kind: "number",
        q: "¿Cuántos litros son 2,5 m³?",
        answer: 2500,
        tolerance: 0.001,
        unit: "L",
        explain: "2,5 × 1000 = 2500 L.",
      },
      {
        kind: "number",
        q: "Un manómetro de vacío marca 0,08 bar absolutos. ¿Cuántos mbar son?",
        answer: 80,
        tolerance: 0.001,
        unit: "mbar",
        explain: "0,08 × 1000 = 80 mbar.",
      },
      {
        kind: "choice",
        q: "Si el manómetro del reactor marca 0 barg, ¿qué presión hay dentro?",
        options: ["Vacío total", "La presión atmosférica, más o menos 1 bar absoluto", "2 bar absolutos", "No se puede saber"],
        answer: 1,
        explain: "0 barg significa igual que el ambiente, que es aproximadamente 1 bar absoluto.",
      },
    ],
  },
  {
    slug: "densidad",
    level: 0,
    order: 5,
    title: "Densidad: de litros a kilos",
    titleEn: "Density",
    minutes: 10,
    summary: "Cómo pasar de volumen a masa y por qué en planta muchos líquidos se cargan por peso.",
    body: `
La **densidad** (*density*) dice cuánto pesa un volumen de una sustancia:

> densidad = masa / volumen  (normalmente en kg/L o g/mL, que es lo mismo)

Despejando:
- **masa = volumen × densidad**
- **volumen = masa / densidad**

| Sustancia | Densidad aprox. (20 °C) |
|---|---|
| Agua | 1,00 kg/L |
| Metanol | 0,79 kg/L |
| Acetona | 0,79 kg/L |
| Tolueno | 0,87 kg/L |
| Diclorometano | 1,33 kg/L |
| Ácido sulfúrico 98 % | 1,84 kg/L |

La densidad **cambia con la temperatura**: los líquidos se dilatan al calentarse. Por eso las cargas exactas se hacen por peso.
`,
    plant: `
Hay que cargar 300 kg de metanol y el caudalímetro mide litros.

volumen = 300 / 0,79 ≈ **380 L**

Si te equivocas y cargas 300 L pensando que son 300 kg, en realidad cargas 300 × 0,79 = 237 kg: un 21 % menos.
`,
    batchRecord: `
- Cantidades de disolvente en kg y, a veces, su equivalente en L.
- Densidad usada para el cálculo (si la carga es por volumen).
- Peso de báscula o lectura de caudalímetro, y verificación.
`,
    terms: [
      { es: "Densidad", en: "Density", def: "Masa por unidad de volumen." },
      { es: "Caudalímetro", en: "Flow meter", def: "Instrumento que mide cuánto líquido pasa por una tubería." },
      { es: "Báscula", en: "Scale / balance", def: "Equipo de pesada. Debe estar verificado antes de usarse." },
    ],
    quiz: [
      {
        kind: "number",
        q: "¿Cuántos kg son 200 L de tolueno (densidad 0,87 kg/L)?",
        answer: 174,
        tolerance: 0.01,
        unit: "kg",
        explain: "200 × 0,87 = 174 kg.",
      },
      {
        kind: "number",
        q: "Necesitas 66,5 kg de diclorometano (densidad 1,33 kg/L). ¿Cuántos litros son?",
        answer: 50,
        tolerance: 0.01,
        unit: "L",
        explain: "66,5 / 1,33 = 50 L.",
      },
      {
        kind: "choice",
        q: "¿Por qué las cargas exactas suelen hacerse por peso y no por volumen?",
        options: [
          "Porque los litros no existen en GMP",
          "Porque el volumen cambia con la temperatura y la masa no",
          "Porque es más rápido",
          "Porque lo dice el proveedor",
        ],
        answer: 1,
        explain: "Los líquidos se dilatan con el calor; la masa es la misma a cualquier temperatura.",
      },
    ],
  },
  {
    slug: "planta-de-api",
    level: 0,
    order: 7,
    title: "Cómo es una planta de API",
    titleEn: "Inside an API plant",
    minutes: 12,
    summary: "Qué es un principio activo, qué áreas tiene la planta, quién hace qué y qué es un lote.",
    body: `
### API frente a medicamento
- **API** (*Active Pharmaceutical Ingredient*) o principio activo: la sustancia que hace el efecto. Suele ser un polvo blanco.
- **Medicamento** (*drug product*): el API mezclado con excipientes en forma de comprimido, cápsula, inyectable…

Tu planta fabrica el API; otra fábrica lo convierte en medicamento.

### Áreas habituales
- **Almacén** (*warehouse*): materias primas en cuarentena, aprobadas o rechazadas.
- **Producción** (*production*): reactores, centrífugas, filtros, secaderos.
- **Sala limpia** (*clean room*): etapas finales (secado, molienda, envasado), donde el producto ya no se purifica más.
- **Control de calidad, QC** (*Quality Control*): laboratorio que analiza.
- **Garantía de calidad, QA** (*Quality Assurance*): revisa documentos, desviaciones y libera los lotes.

### El lote (*batch*)
Cantidad de producto fabricada en un ciclo, con un **número de lote** único. Todo lo que pasa en ese lote se registra en su **hoja de producción** (*batch record*, BR, o *batch manufacturing record*, BMR).

### Quién hace qué
- **Operador**: ejecuta y registra los pasos.
- **Supervisor o jefe de turno**: coordina y resuelve incidencias.
- **QA**: revisa y decide si el lote se libera.
`,
    plant: `
Un día típico: recibes el turno (*shift handover*), revisas en qué paso está cada lote, compruebas el estado de equipos y etiquetas, ejecutas los pasos de la hoja registrando cada dato **en el momento**, y al final entregas el turno contando qué queda pendiente.
`,
    batchRecord: `
- Cabecera: producto, número de lote, tamaño, versión del documento.
- Equipos asignados (por ejemplo R-101, CF-201, SD-301).
- Firmas de operador, verificador, supervisor y, al final, QA.
`,
    terms: [
      { es: "Principio activo", en: "Active Pharmaceutical Ingredient (API)", def: "Sustancia responsable del efecto del medicamento." },
      { es: "Lote", en: "Batch / lot", def: "Cantidad fabricada en un ciclo, identificada con un número único." },
      { es: "Hoja de producción", en: "Batch record (BR / BMR)", def: "Documento donde se registra todo lo que se hace en un lote." },
      { es: "Garantía de calidad", en: "Quality Assurance (QA)", def: "Departamento que asegura el cumplimiento GMP y libera los lotes." },
      { es: "Control de calidad", en: "Quality Control (QC)", def: "Laboratorio que analiza materias primas, muestras de proceso y producto." },
      { es: "Cuarentena", en: "Quarantine", def: "Estado de un material que aún no puede usarse porque no está aprobado." },
      { es: "Relevo de turno", en: "Shift handover", def: "Traspaso de información entre el turno saliente y el entrante." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "¿Qué departamento decide si un lote de API se libera?",
        options: ["Producción", "Mantenimiento", "Garantía de calidad (QA)", "Almacén"],
        answer: 2,
        explain: "QA revisa la documentación y los resultados y toma la decisión de liberación.",
      },
      {
        kind: "choice",
        q: "Un bidón de materia prima tiene etiqueta amarilla de \"cuarentena\". ¿Puedes usarlo?",
        options: ["Sí, si corre prisa", "No, hasta que esté aprobado", "Sí, si el supervisor lo dice verbalmente", "Solo la mitad"],
        answer: 1,
        explain: "Un material en cuarentena no está aprobado para su uso.",
      },
      {
        kind: "choice",
        q: "¿Qué diferencia hay entre control de calidad (QC) y garantía de calidad (QA)?",
        options: [
          "Son lo mismo",
          "QC analiza las muestras en el laboratorio; QA revisa documentos, gestiona desviaciones y libera los lotes",
          "QA analiza y QC libera",
          "QC es el departamento de mantenimiento",
        ],
        answer: 1,
        explain: "QC genera los resultados analíticos; QA vigila el sistema de calidad y toma la decisión de liberación.",
      },
    ],
  },
];

// Las lecciones «a fondo» van cada una en su archivo nivel0-tema.ts.
export const nivel0: Lesson[] = [...bases0, plantaAFondo, densidadAFondo, unidadesAFondo, matematicasAFondo];
