import type { Lesson } from "./types";
import { estabilidadAFondo } from "./nivel10-estabilidad";

const calidad: Lesson[] = [
  {
    slug: "especificaciones-y-metodos",
    level: 10,
    order: 1,
    title: "Especificaciones y métodos analíticos",
    titleEn: "Specifications and analytical procedures",
    minutes: 12,
    summary: "Qué ensayos tiene un API, de dónde salen sus límites y cómo se relacionan con los métodos.",
    body: `
### Especificación (*specification*)
Lista de **ensayos**, **métodos** y **criterios de aceptación** que debe cumplir un material. Se aprueba y está registrada ante las autoridades. La guía de referencia es **ICH Q6A**.

Ensayos típicos de un API:
| Ensayo | Ejemplo de criterio |
|---|---|
| Aspecto | Polvo cristalino blanco |
| Identificación (IR y HPLC) | Conforme con el patrón |
| Contenido (*assay*) | 98,0–102,0 % (sobre sustancia seca) |
| Impurezas | Cada impureza conocida ≤ 0,15 %; no especificadas ≤ 0,10 %; totales ≤ 0,5 % |
| Agua (KF) o LOD | ≤ 0,5 % |
| Disolventes residuales | Según ICH Q3C |
| Cenizas sulfatadas | ≤ 0,1 % |
| Impurezas elementales | Según ICH Q3D |
| Tamaño de partícula | d90 ≤ 100 µm |
| Microbiología | TAMC ≤ 10³ UFC/g |

Los límites de impurezas siguen los **umbrales** de ICH Q3A, que dependen de la dosis diaria del fármaco.

### Método analítico (*analytical procedure*)
Documento que explica **cómo** hacer cada ensayo: equipo, reactivos, preparación, condiciones, idoneidad del sistema, cálculo. Puede ser de **farmacopea** (monografía) o **propio** de la empresa (y entonces debe validarse).

### Especificaciones de proceso
Además del producto final, hay especificaciones para **materias primas**, **intermedios** e **IPC**. Los IPC de la hoja de producción son límites de proceso, no del producto final.
`,
    plant: `
El CoA de un intermedio dice "Impureza B: 0,12 %; límite ≤ 0,15 %". Cumple. Si hubiera salido 0,18 % sería OOS y el intermedio no podría usarse sin una evaluación aprobada por QA.
`,
    batchRecord: `
IPC con su límite en cada paso; el CoA final con la especificación del API.
`,
    terms: [
      { es: "Especificación", en: "Specification", def: "Lista de ensayos, métodos y límites que debe cumplir un material." },
      { es: "Criterio de aceptación", en: "Acceptance criterion", def: "Límite numérico o descripción que debe cumplir un resultado." },
      { es: "Monografía", en: "Monograph", def: "Texto de la farmacopea con la especificación de una sustancia." },
      { es: "Método analítico", en: "Analytical procedure / method", def: "Instrucciones detalladas para realizar un ensayo." },
      { es: "Sustancia seca", en: "Dried / anhydrous basis", def: "Resultado corregido por el agua o los volátiles de la muestra." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "¿Qué guía ICH trata de las especificaciones de sustancias activas?",
        options: ["ICH Q6A", "ICH Q7", "ICH Q9", "ICH Q3C"],
        answer: 0,
        explain: "ICH Q6A: especificaciones y criterios de aceptación.",
      },
      {
        kind: "choice",
        q: "Una impureza da 0,18 % y su límite es ≤ 0,15 %. El resultado es…",
        options: ["Conforme", "OOS (fuera de especificación)", "OOT", "No aplica"],
        answer: 1,
        explain: "Supera el criterio de aceptación.",
      },
      {
        kind: "choice",
        q: "¿Qué diferencia hay entre un límite de IPC y la especificación del API?",
        options: [
          "Ninguna",
          "El IPC es un límite de proceso para decidir si se continúa; la especificación es lo que debe cumplir el producto para liberarse",
          "El IPC lo fija el cliente",
          "La especificación solo existe para materias primas",
        ],
        answer: 1,
        explain: "Los IPC controlan el proceso paso a paso; la especificación final decide la liberación del lote.",
      },
    ],
  },
  {
    slug: "validacion-de-metodos",
    level: 10,
    order: 3,
    title: "Validación de métodos analíticos (ICH Q2)",
    titleEn: "Analytical method validation",
    minutes: 15,
    summary: "Cómo se demuestra que un método de laboratorio mide bien lo que dice medir.",
    body: `
Antes de usar un método propio para liberar lotes, hay que **validarlo**: demostrar con datos que sirve para su propósito. La guía es **ICH Q2(R2)** (y su compañera **ICH Q14** sobre el desarrollo de métodos).

### Características que se evalúan
| Característica | En inglés | Pregunta |
|---|---|---|
| Especificidad | *Specificity / selectivity* | ¿Mide solo lo que debe, sin interferencias de impurezas o disolventes? |
| Rango y respuesta (linealidad) | *Range, response (linearity)* | ¿La señal es proporcional a la concentración en el rango de trabajo? |
| Exactitud | *Accuracy* | ¿El resultado se acerca al valor verdadero? (se mide con recuperaciones) |
| Precisión: repetibilidad | *Repeatability* | ¿Da lo mismo repitiendo el mismo analista el mismo día? |
| Precisión intermedia | *Intermediate precision* | ¿Y con otro analista, otro día, otro equipo? |
| Límite de detección | *Detection limit (LOD)* | ¿Cuál es la cantidad más pequeña que detecta? |
| Límite de cuantificación | *Quantitation limit (LOQ)* | ¿Cuál es la cantidad más pequeña que mide con exactitud? |
| Robustez | *Robustness* | ¿Aguanta pequeños cambios (temperatura, pH de la fase móvil)? |

Ojo: en el laboratorio, **LOD** también significa *limit of detection*; en planta, *loss on drying*. El contexto lo aclara.

### Recuperación (*recovery*)
Para la exactitud se añade una cantidad conocida y se mide cuánto se recupera:

> recuperación (%) = cantidad encontrada / cantidad añadida × 100

### Métodos de farmacopea
No se validan por completo, pero sí se **verifican** en el laboratorio que los usa.

### Transferencia de métodos
Cuando un método pasa de un laboratorio a otro, se demuestra que el nuevo obtiene resultados equivalentes.
`,
    plant: `
Se añade 1,00 mg de una impureza a una muestra y el método encuentra 0,97 mg. Recuperación = 0,97 / 1,00 × 100 = **97 %**. Si el criterio es 90–110 %, cumple.
`,
    batchRecord: `
No aparece en la hoja de producción, pero todos los IPC y análisis que la acompañan se hacen con métodos validados o verificados.
`,
    terms: [
      { es: "Validación de métodos", en: "Method validation", def: "Demostración documentada de que un método analítico es adecuado." },
      { es: "Especificidad", en: "Specificity", def: "Capacidad de medir el analito sin interferencias." },
      { es: "Linealidad", en: "Linearity", def: "Proporcionalidad entre señal y concentración." },
      { es: "Recuperación", en: "Recovery", def: "Porcentaje de una cantidad añadida que el método encuentra." },
      { es: "Límite de cuantificación", en: "Limit of quantitation (LOQ)", def: "Menor cantidad que se mide con exactitud y precisión aceptables." },
      { es: "Robustez", en: "Robustness", def: "Capacidad del método de no verse afectado por pequeños cambios." },
    ],
    quiz: [
      {
        kind: "number",
        q: "Añades 2,00 mg y el método encuentra 1,96 mg. ¿Recuperación?",
        answer: 98,
        tolerance: 0.001,
        unit: "%",
        explain: "1,96 / 2,00 × 100 = 98 %.",
      },
      {
        kind: "choice",
        q: "¿Qué característica comprueba que el método no confunde el API con una impureza?",
        options: ["Linealidad", "Especificidad", "Robustez", "Límite de detección"],
        answer: 1,
        explain: "Especificidad: medir solo lo que se quiere medir.",
      },
      {
        kind: "choice",
        q: "¿Qué característica comprueba que otro analista, otro día y con otro equipo obtiene resultados equivalentes?",
        options: [
          "Repetibilidad",
          "Precisión intermedia",
          "Especificidad",
          "Robustez",
        ],
        answer: 1,
        explain: "La repetibilidad es mismo analista y mismo día; la precisión intermedia añade esas variaciones dentro del laboratorio.",
      },
    ],
  },
  {
    slug: "oos-y-oot",
    level: 10,
    order: 5,
    title: "Resultados OOS y OOT: cómo se investigan",
    titleEn: "OOS and OOT investigations",
    minutes: 12,
    summary: "Qué ocurre cuando un análisis no cumple y por qué no basta con repetirlo.",
    body: `
### Definiciones
- **OOS** (*Out of Specification*): resultado de un análisis fuera de la especificación.
- Un **control en proceso** (*IPC, in-process control*) que todavía no cumple **no siempre es un OOS**. Si el control sirve para vigilar o ajustar el proceso (por ejemplo, la humedad de un secado que aún no ha terminado), se actúa como diga la hoja: seguir secando y repetir el control. ICH Q7 (apartado 8.36) dice que en esos casos normalmente no hace falta una investigación OOS. Sí se trata como OOS cuando la hoja no prevé qué hacer o el control es un criterio de aceptación del intermedio.
- **OOT** (*Out of Trend*): dentro de especificación pero diferente de lo habitual (por ejemplo, una impureza que siempre sale 0,02 % y hoy sale 0,09 %).

### Investigación de un OOS (guía FDA y procedimientos internos)
**Fase I: laboratorio**
- El analista y su supervisor revisan **sin destruir nada**: cálculos, pesadas, diluciones, idoneidad del sistema, equipo, patrones, reactivos.
- Si se encuentra un **error de laboratorio demostrable** (por ejemplo, se usó el patrón equivocado), el resultado se invalida y se repite el análisis.

**Fase II: investigación completa**
- Si no hay error de laboratorio, el resultado se considera **válido** y se investiga el **proceso de fabricación**: hoja de producción, desviaciones, equipos, materias primas.
- Puede haber **reanálisis** de la misma muestra o un **nuevo muestreo**, pero solo si lo prevé el procedimiento y con justificación. Nunca para "buscar un resultado que cumpla".

### Resultado
El lote se **rechaza**, se **reprocesa** (si está autorizado) o se libera solo si la investigación demuestra de forma sólida que el resultado no era válido.

### Tu papel como operador
Puede que te pregunten por el lote: qué pasó en cada paso, si hubo algo raro. Por eso los registros completos y los comentarios en la hoja son tan valiosos.
`,
    plant: `
El ensayo final de un lote da 97,1 % de contenido (especificación 98,0–102,0 %). El laboratorio no encuentra error analítico. QA abre una investigación y revisa contigo la hoja: en el secado hubo un corte de vacío de 2 horas que se anotó en comentarios. Ese dato ayuda a encontrar la causa.
`,
    batchRecord: `
Comentarios y anomalías anotados en la hoja: son clave en las investigaciones.
`,
    terms: [
      { es: "Fuera de especificación", en: "Out of Specification (OOS)", def: "Resultado que no cumple su límite." },
      { es: "Fuera de tendencia", en: "Out of Trend (OOT)", def: "Resultado que cumple pero se aparta de lo habitual." },
      { es: "Error de laboratorio", en: "Laboratory error", def: "Error demostrable en el análisis que invalida el resultado." },
      { es: "Reanálisis", en: "Retest", def: "Nuevo análisis de la misma muestra, solo si lo justifica la investigación." },
      { es: "Reprocesado", en: "Reprocessing", def: "Repetir un paso del proceso aprobado (por ejemplo, recristalizar) para que el lote cumpla." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "¿Qué se revisa primero en una investigación OOS?",
        options: [
          "Si hubo un error en el laboratorio",
          "El precio del lote",
          "Se repite el análisis directamente hasta que cumpla",
          "Se libera el lote",
        ],
        answer: 0,
        explain: "La fase I busca errores de laboratorio demostrables.",
      },
      {
        kind: "choice",
        q: "Una impureza que siempre sale 0,02 % hoy sale 0,09 % (límite 0,15 %). Es…",
        options: ["OOS", "OOT", "Normal", "Un error seguro"],
        answer: 1,
        explain: "Cumple el límite pero rompe la tendencia: es un OOT y se evalúa.",
      },
      {
        kind: "choice",
        q: "En la fase I de un OOS se comprueba que el analista usó el patrón equivocado. ¿Qué pasa con el resultado?",
        options: [
          "Se queda como válido",
          "Se invalida por error de laboratorio demostrado y se repite el análisis según el procedimiento",
          "Se promedia con otro resultado",
          "Se borra del sistema",
        ],
        answer: 1,
        explain: "Solo un error de laboratorio demostrable y documentado permite invalidar un resultado. Nunca se borra: queda registrado.",
      },
    ],
  },
  {
    slug: "estabilidad",
    level: 10,
    order: 7,
    title: "Estudios de estabilidad",
    titleEn: "Stability studies",
    minutes: 12,
    summary: "Cómo se decide cuánto tiempo puede guardarse un API y en qué condiciones.",
    body: `
### Para qué
Un API puede **degradarse** con el tiempo por el calor, la humedad, la luz o el oxígeno. Los estudios de **estabilidad** fijan:
- El **periodo de re-análisis** (*retest period*) o la **fecha de caducidad** (*expiry date*).
- Las **condiciones de almacenamiento** (por ejemplo, "no conservar por encima de 25 °C, proteger de la luz").

### Condiciones (ICH Q1)
Se guardan muestras en **cámaras climáticas** y se analizan a intervalos (0, 3, 6, 9, 12, 18, 24, 36 meses…):

| Estudio | Condiciones típicas |
|---|---|
| Largo plazo (*long-term*) | 25 °C / 60 % HR (o 30 °C / 65 % HR, y 30 °C / 75 % HR para climas cálidos y húmedos, zona IVb) |
| Intermedio | 30 °C / 65 % HR |
| Acelerado | 40 °C / 75 % HR durante 6 meses |

HR = humedad relativa (*RH, relative humidity*).

### Estudios de estrés y fotoestabilidad
Se somete el producto a condiciones duras (calor, ácido, base, oxidante, luz) para conocer **cómo** se degrada y comprobar que el método analítico detecta esos productos de degradación.

### Retest frente a caducidad
- **Re-análisis**: típico de los API. Pasada la fecha, el API puede usarse si se vuelve a analizar y cumple.
- **Caducidad**: típica de los medicamentos. Pasada la fecha, no se usa.
`,
    plant: `
En la etiqueta del API envasado verás "Fecha de re-análisis: 11/2028. Conservar por debajo de 25 °C, protegido de la luz y la humedad". Esas condiciones salen del estudio de estabilidad.
`,
    batchRecord: `
Fecha de fabricación, fecha de re-análisis y condiciones de almacenamiento en la etiqueta y en el CoA.
`,
    terms: [
      { es: "Estabilidad", en: "Stability", def: "Capacidad de un producto de mantener su calidad con el tiempo." },
      { es: "Periodo de re-análisis", en: "Retest period", def: "Tiempo durante el que un API puede usarse sin volver a analizarlo." },
      { es: "Fecha de caducidad", en: "Expiry date", def: "Fecha a partir de la cual el producto no debe usarse." },
      { es: "Cámara climática", en: "Stability chamber", def: "Armario con temperatura y humedad controladas para estudios de estabilidad." },
      { es: "Humedad relativa", en: "Relative humidity (RH)", def: "Cantidad de vapor de agua en el aire respecto al máximo posible a esa temperatura." },
      { es: "Producto de degradación", en: "Degradation product", def: "Impureza que se forma al descomponerse el producto." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "¿Cuáles son las condiciones típicas de un estudio acelerado?",
        options: ["25 °C / 60 % HR", "40 °C / 75 % HR", "5 °C", "−20 °C"],
        answer: 1,
        explain: "40 °C / 75 % HR durante 6 meses según ICH Q1.",
      },
      {
        kind: "choice",
        q: "Un API supera su fecha de re-análisis. ¿Qué se hace?",
        options: [
          "Se tira siempre",
          "Se vuelve a analizar; si cumple, puede usarse según el procedimiento",
          "Se usa igualmente sin más",
          "Se cambia la etiqueta",
        ],
        answer: 1,
        explain: "Para los API, el periodo de re-análisis permite reanalizar y seguir usándolo si cumple.",
      },
      {
        kind: "number",
        q: "Un API se fabricó en mayo de 2026 y tiene un periodo de re-análisis de 36 meses. ¿En qué año toca reanalizarlo?",
        answer: 2029,
        tolerance: 0.0001,
        unit: "año",
        explain: "36 meses = 3 años: mayo de 2026 + 3 años = mayo de 2029.",
      },
    ],
  },
  {
    slug: "certificado-de-analisis",
    level: 10,
    order: 9,
    title: "El certificado de análisis y la liberación del lote",
    titleEn: "Certificate of Analysis and batch release",
    minutes: 10,
    summary: "El documento final que acompaña al API y los pasos para que QA libere un lote.",
    body: `
### Certificado de análisis (*Certificate of Analysis, CoA*)
Documento con los resultados de los análisis de un lote. Según ICH Q7 (apartado 11.4) se emite para cada lote **cuando el cliente lo solicita**; en la práctica casi todos los envíos de API lo llevan. Según esa guía incluye:
- Nombre del producto (y su grado, si procede), número de lote y **fecha de liberación** (*date of release*).
- Fecha de caducidad o de re-análisis.
- Cada **ensayo**, sus **límites de aceptación** y el **resultado** obtenido (con números, no solo "cumple", cuando el resultado es numérico).
- **Fecha y firma** de la persona autorizada de la unidad de calidad.
- Nombre, dirección y teléfono del **fabricante original**.

Muchos certificados añaden además la fecha de fabricación y la referencia a la especificación o farmacopea. Es habitual y útil, aunque ICH Q7 no lo exige.

### Liberación del lote (*batch release*)
QA solo libera si todo cuadra:
1. Hoja de producción **completa y revisada** (sin huecos, correcciones bien hechas, firmas).
2. **Desviaciones** cerradas o evaluadas sin impacto.
3. **Resultados analíticos** conformes y revisados.
4. **Audit trails** revisados (MES, LIMS, CDS).
5. Controles de cambio y CAPA relacionados en orden.
6. Etiquetado correcto.

Mientras tanto, el lote está en **cuarentena**. Una hoja mal rellenada puede **retrasar** la liberación días o semanas.
`,
    plant: `
El lote se fabricó el lunes, los análisis terminan el viernes, pero la hoja tiene tres casillas sin firmar. QA no puede liberarlo hasta que se resuelva. Rellenar bien la hoja **a la primera** es una de las cosas que más valoran en un operador.
`,
    batchRecord: `
La hoja de producción completa es una de las bases de la liberación del lote.
`,
    terms: [
      { es: "Certificado de análisis", en: "Certificate of Analysis (CoA)", def: "Documento con los resultados de un lote frente a su especificación." },
      { es: "Liberación de lote", en: "Batch release / disposition", def: "Decisión de QA de aprobar un lote para su uso o venta." },
      { es: "Revisión del registro de lote", en: "Batch record review", def: "Comprobación completa de la hoja de producción antes de liberar." },
      { es: "Persona autorizada", en: "Authorized person (quality unit)", def: "Persona de calidad facultada para firmar la liberación." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "Los análisis cumplen pero la hoja tiene firmas que faltan. ¿Se puede liberar?",
        options: ["Sí, lo importante es el análisis", "No, hasta que la hoja esté completa y revisada", "Sí, si lo dice producción", "Solo la mitad del lote"],
        answer: 1,
        explain: "La liberación exige que toda la documentación esté completa y conforme.",
      },
      {
        kind: "choice",
        q: "¿Quién firma la liberación del lote de API?",
        options: ["El operador", "El jefe de producción", "La unidad de calidad (QA)", "El cliente"],
        answer: 2,
        explain: "La decisión de liberación es responsabilidad de la unidad de calidad.",
      },
      {
        kind: "choice",
        q: "Un CoA pone «Impurezas totales: cumple» sin el valor, aunque el ensayo da un número. ¿Es correcto según ICH Q7?",
        options: [
          "Sí, basta con «cumple»",
          "No: cuando el resultado es numérico, el CoA debe dar el valor obtenido",
          "Solo si lo firma producción",
          "Solo para clientes fuera de la UE",
        ],
        answer: 1,
        explain: "ICH Q7 pide indicar los resultados numéricos cuando el ensayo los da, junto al criterio de aceptación.",
      },
    ],
  },
];

// Las lecciones «a fondo» van cada una en su archivo nivel10-tema.ts.
export const nivel10: Lesson[] = [...calidad, estabilidadAFondo];
