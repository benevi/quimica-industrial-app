import type { Lesson } from "./types";

export const especificacionesAFondo: Lesson = {
  slug: "especificaciones-a-fondo",
  level: 10,
  order: 2,
  title: "Especificaciones a fondo: qué tiene que cumplir un lote",
  titleEn: "Specifications in depth",
  minutes: 40,
  summary:
    "Qué es una especificación según ICH Q6A y quién la aprueba, los ensayos universales y específicos de un principio activo con su porqué en planta, de dónde sale cada límite (seguridad, ICH Q3A y Q3C, capacidad del proceso, lotes clínicos y estabilidad) con el árbol de decisión de Q6A resuelto, especificación de liberación frente a la de vida útil, controles en proceso, cómo se redondea y se compara un resultado con el límite, especificaciones de materias primas, intermedios y disolventes recuperados, y cómo se cambia una especificación.",
  body: `
En «Especificaciones y métodos analíticos» viste la idea en una página. Aquí verás de dónde sale cada línea, quién la decide y cómo decide el laboratorio si tu lote cumple. Los umbrales de impurezas y disolventes están en «Impurezas a fondo: de dónde vienen, cuánto se permite y cómo las evita el operador» y «Disolventes a fondo: elegir, usar, recuperar y no dejar restos en el producto».

### Qué es una especificación, con las palabras de la guía
La guía **ICH Q6A**, sobre especificaciones de principios activos y medicamentos nuevos de síntesis química (versión de octubre de 1999), define la **especificación** (*specification*) como **una lista de ensayos, referencias a procedimientos analíticos y criterios de aceptación adecuados**, que son límites numéricos, intervalos u otros criterios para los ensayos descritos. Tiene tres piezas:

1. **Ensayos** (*tests*): qué se mide. Por ejemplo, el agua.
2. **Referencias a procedimientos analíticos** (*analytical procedures*): con qué método escrito se mide. Por ejemplo, «método MA-07, valoración de Karl Fischer».
3. **Criterios de aceptación** (*acceptance criteria*): qué resultado vale. Por ejemplo, «no más del 0,5 %». La guía los define como límites numéricos, intervalos u otras medidas adecuadas para aceptar los resultados.

Piensa en un examen de conducir: unas pruebas, unas reglas para puntuarlas y una nota mínima. Por eso la especificación no dice solo «agua ≤ 0,5 %»: dice con qué método, porque otro método podría dar otro número.

**«Conforme con la especificación»** (*conformance to specifications*) significa, según Q6A, que el material, analizado con los procedimientos de la lista, cumple los criterios de la lista. Todos, no la mayoría.

### Quién la escribe y quién la aprueba
Según Q6A, las especificaciones son **normas de calidad críticas que propone y justifica el fabricante y aprueban las autoridades** como condición para autorizar el medicamento. Dentro de la planta, ICH Q7, la guía de buenas prácticas de fabricación (*Good Manufacturing Practice*, GMP) para principios activos, reparte el trabajo:

- La redacta la unidad que corresponda (desarrollo, laboratorio) y la **revisa y aprueba la unidad de calidad** (11.12). Aprobar todas las especificaciones es una responsabilidad de calidad que no se delega (2.22).
- Tiene que ser científicamente sólida y **coherente con el expediente registrado**, aunque puede tener ensayos adicionales (11.12), e incluir el control de impurezas orgánicas, inorgánicas y disolventes residuales (11.13).

Q6A añade que la especificación es **solo una parte** de la estrategia de control, junto con las GMP, el proceso validado, los métodos validados, el análisis de materias primas, los controles en proceso y la estabilidad. El análisis final no arregla un lote mal fabricado: solo lo detecta.

### Los ensayos universales de un principio activo
Q6A (3.2.1) llama **ensayos universales** (*universal tests*) a los que se aplican a todo principio activo nuevo:

| Ensayo | Qué pide Q6A | Por qué importa en planta |
|---|---|---|
| **Descripción** | Afirmación cualitativa del estado (sólido, líquido) y del color; si cambia en el almacenamiento, se investiga | Primer filtro: un tono amarillo o puntos negros pueden venir de un secado caliente o de una junta gastada |
| **Identificación** | Específica del producto, por ejemplo infrarrojo; un solo tiempo de retención en cromatografía no basta, pero dos cromatografías distintas o HPLC con detector de diodos o de masas suelen aceptarse | Demuestra que el bidón contiene lo que dice la etiqueta |
| **Riqueza** (*assay*) | Método específico e **indicador de estabilidad**, a menudo el mismo HPLC que las impurezas; una valoración, que no es específica, se combina con un ensayo de impurezas | Dice cuánto principio activo hay de verdad |
| **Impurezas** | Orgánicas, inorgánicas y disolventes residuales, según ICH Q3A y Q3C | Temperaturas, tiempos, lavados y secados deciden cuántas quedan |

Un método **indicador de estabilidad** (*stability-indicating*) distingue el producto de sus productos de degradación; ICH Q1A, la guía de estabilidad, los exige validados.

### Los ensayos específicos
Q6A (3.3.1) añade **ensayos específicos** (*specific tests*), que se incluyen caso por caso cuando influyen en la calidad del lote:

| Ensayo | Cuándo, según Q6A | Relación con tu equipo |
|---|---|---|
| **Propiedades fisicoquímicas** (pH, punto de fusión) | Según la naturaleza del producto y su uso | Un punto de fusión bajo puede indicar impurezas u otra forma sólida |
| **Tamaño de partícula** | Si afecta a la disolución, la biodisponibilidad o la estabilidad del medicamento | Cristalización, molino y tamizado |
| **Formas polimórficas** | Si las formas distintas afectan al rendimiento, la biodisponibilidad o la estabilidad | La cristalización y el secado pueden cambiar la forma |
| **Pureza quiral** | Si el producto es un solo enantiómero: el otro se controla como impureza | Temperatura y pH pueden racemizar |
| **Contenido en agua** | Si es higroscópico, se degrada con la humedad o es un hidrato; se prefiere Karl Fischer, aunque a veces basta la pérdida por secado | El secadero decide el agua |
| **Impurezas inorgánicas** | Según el proceso, por ejemplo restos de catalizador; las cenizas sulfatadas siguen la farmacopea | Filtración del catalizador y lavados |
| **Límites microbianos** | Aerobios, hongos y levaduras y ausencia de bacterias como *Escherichia coli*, según producto, proceso y uso; endotoxinas si va a un inyectable | Higiene de la descarga y del envasado |

Cada uno tiene su lección «a fondo» en los niveles 7 a 9.

### De dónde sale cada límite
Q6A (3.1.2) pide justificar **cada** ensayo y **cada** criterio con datos de desarrollo, farmacopea, lotes de toxicología y clínicos y estabilidad, contando con una variabilidad razonable del análisis y la fabricación. Las cinco fuentes de un límite:

1. **Seguridad.** Q3A fija los umbrales por encima de los cuales una impureza se informa, se identifica o se cualifica, y pide que los criterios **no superen el nivel justificado por los datos de seguridad**. Q3C da la exposición diaria permitida de cada disolvente y su límite en ppm.
2. **Capacidad del proceso.** Q3A pide que el límite sea coherente con lo que **consigue el proceso** y puede medir el método, con margen para la variación normal.
3. **Lotes clínicos y de toxicología.** Según Q3A, una impureza está **cualificada** al nivel al que estuvo presente en lotes estudiados en ensayos de seguridad o clínicos.
4. **Estabilidad.** Si una impureza crece con el tiempo, el límite tiene que dejar sitio a lo que crecerá hasta la fecha de reanálisis.
5. **Farmacopea.** Si existe una monografía, Q6A pide usar sus procedimientos cuando sean adecuados.

Q6A avisa también de un error de diseño: cuando se presenta el expediente hay pocos lotes, así que **no conviene fijar límites pegados a los resultados** de esos lotes. Y prevé revisar los límites con la experiencia, apretándolos o aflojándolos (2.5).

### Cuenta 1: el árbol de decisión 1 de Q6A
El anexo de Q6A trae un árbol para fijar el límite de una **impureza especificada** (la que figura con nombre y límite propio en la especificación). Sus pasos:

1. Medir la impureza en los lotes de desarrollo, piloto y escalado.
2. Calcular **A = media + límite superior de confianza**, que el árbol define como **tres veces la desviación típica** de esos datos.
3. Si la impureza **también es un producto de degradación**, sumar lo que crece hasta la fecha de reanálisis según la estabilidad: **B = A + aumento**.
4. Si A o B superan el **nivel cualificado**, el límite es el nivel cualificado (o se cualifica uno nuevo); si no, el límite es A o B.

La **desviación típica** (*standard deviation*, s) mide cuánto se separan los datos de su media: se resta la media a cada dato, se eleva al cuadrado, se suma todo, se divide entre el número de datos menos uno y se saca la raíz (fórmula del manual de laboratorio de la FDA).

**Valores de ejemplo.** Impureza VR-B en seis lotes: 0,06; 0,08; 0,07; 0,09; 0,05 y 0,07 %.

- Media: 0,42 / 6 = **0,07 %**.
- Diferencias con la media: −0,01; 0,01; 0; 0,02; −0,02; 0. Cuadrados: 0,0001 + 0,0001 + 0 + 0,0004 + 0,0004 + 0 = 0,0010.
- 0,0010 / 5 = 0,0002; raíz cuadrada: **s = 0,014 %**. Tres veces: 0,042 %.
- **A** = 0,07 + 0,042 = 0,112, redondeado **0,11 %**.
- La estabilidad muestra que VR-B crece 0,03 % hasta la fecha de reanálisis: **B** = 0,112 + 0,03 = 0,142, redondeado **0,14 %**.
- Nivel cualificado (el de los lotes de toxicología, valor de ejemplo): 0,20 %. B no lo supera: **límite = 0,14 %**.

El límite no se pone «a ojo». Y un 0,13 % cumpliría, pero muy por encima de lo habitual: sería un resultado fuera de tendencia (OOT).

### Especificación de liberación y especificación de vida útil
ICH Q1A define dos especificaciones:

- **De liberación** (*release specification*): ensayos y criterios que deciden si un **medicamento** es adecuado en el momento de liberarlo.
- **De vida útil** (*shelf-life specification*): ensayos y criterios que un **principio activo** tiene que cumplir **durante todo su periodo de reanálisis**, o un medicamento durante su vida útil.

Q6A (2.2) aclara que tener criterios distintos para liberar y para la vida útil (más estrictos al liberar, por ejemplo en riqueza o productos de degradación) **solo se aplica a los medicamentos**. En la Unión Europea, si son distintos, hay que tener las dos especificaciones.

Para tu principio activo: **el lote tiene que seguir cumpliendo hasta su fecha de reanálisis**, que según ICH Q7 (11.61) es lo habitual en vez de una caducidad. Por eso un lote que sale justo en el límite preocupa aunque cumpla.

**Cuenta 2. Valores de ejemplo.** Riqueza al salir 99,0 %, pérdida de 0,3 puntos por año. A los 3 años: 99,0 − 3 × 0,3 = **98,1 %**, aún por encima de 98,0 %. Con 98,4 % al salir llegaría a 97,5 %: no cumpliría.

### Controles en proceso y especificación final
ICH Q7 define el **control en proceso** (*in-process control*, IPC) como las comprobaciones que se hacen durante la producción para vigilar y, si hace falta, ajustar el proceso, o para asegurar que el intermedio o el principio activo cumplirá su especificación. Lo que pide:

- Sus criterios salen de los datos de desarrollo o históricos (8.30) y figuran en la instrucción maestra (6.41); pueden ser más flojos al principio y más estrictos en aislamiento y purificación (8.31).
- Los **críticos** los aprueba calidad (8.32). Producción puede ajustar el proceso sin pedir permiso **dentro de límites aprobados** (8.33).
- Un IPC que sirve para vigilar o ajustar normalmente **no exige investigación OOS** (8.36): si la humedad aún no llega, se sigue secando como diga la hoja.

Q6A (2.3) añade dos reglas. Los ensayos que solo sirven para ajustar el proceso **no entran en la especificación**. Y un ensayo en proceso con un criterio **igual o más estricto** que el de liberación puede sustituir al final, si se valida que el resultado no cambia desde ese punto hasta el producto terminado.

La guía ICH Q11 trae un ejemplo que lo ilustra: el etanol residual del principio activo, con límite de 5000 ppm, se controla con una **pérdida por secado ≤ 0,40 %** al final del secado, porque se demostró que ese resultado se corresponde con el del análisis final. Esa casilla de tu hoja de secado está defendiendo una línea de la especificación.

Q6A (2.1) permite también **ensayos periódicos** (*skip testing*), hechos solo en lotes elegidos o a intervalos, con aprobación de la autoridad: los lotes no analizados **cumplen igualmente**. Pone como ejemplos los disolventes residuales y la microbiología.

### Redondear y comparar con el límite
El laboratorio no compara el número que sale de la calculadora con el límite: primero lo redondea. El manual de laboratorio de la FDA (ORA Lab Manual, volumen III, sección 4, revisión de octubre de 2022) da la regla, en parte resumiendo la farmacopea de Estados Unidos:

- Se calcula guardando **una cifra de más** y se redondea solo al final.
- Si la cifra que sobra es **menor que 5, se quita**; si es **5 o mayor, se quita y la anterior sube uno**.
- El resultado se da con **los mismos decimales que el límite**: si el límite es 98,0–102,0 %, con un decimal.
- Un límite **incluye sus extremos** y todo lo que hay entre ellos, y se aplica **después** de redondear.

ICH Q3A añade para impurezas: por debajo del 1,0 %, dos decimales (0,06 %); desde el 1,0 %, uno (1,3 %).

**Cuenta 3. Riqueza, límite 98,0–102,0 %.** El manual de la FDA pone ejemplos de este tipo:

| Resultado calculado | Redondeado a un decimal | ¿Cumple? |
|---|---|---|
| 97,96 % | 98,0 % | Sí: el extremo está incluido |
| 97,94 % | 97,9 % | No |
| 102,04 % | 102,0 % | Sí |
| 102,05 % | 102,1 % | No |

**Cuenta 4. Impureza, límite ≤ 0,15 %.** 0,154 % se informa como 0,15 %: cumple. 0,155 % se informa como 0,16 %: no cumple. Un redondeo mal hecho puede convertir un lote bueno en un OOS, o al revés.

**Cuenta 5. Impurezas totales.** Q3A define el total como la suma de las impurezas **por encima del umbral de notificación** (0,05 % para dosis de hasta 2 g al día). **Valores de ejemplo:** VR-A 0,12 %, VR-B 0,07 %, una desconocida 0,06 % y otra 0,04 %. La de 0,04 % no se informa ni se suma: total = 0,12 + 0,07 + 0,06 = **0,25 %**.

**Cuenta 6. Riqueza sobre sustancia anhidra.** Si la especificación dice «sobre sustancia anhidra», se quita el agua, que no es producto. **Valores de ejemplo:** riqueza tal cual 98,6 %, agua 0,8 %:

> riqueza anhidra = 98,6 × 100 / (100 − 0,8) = 99,395, que se informa como **99,4 %**

Por eso el agua que deja tu secadero también cambia la riqueza que lee el laboratorio.

### Materias primas, intermedios y disolventes recuperados
Q7 (6.17) pide especificaciones documentadas para **materias primas**, **intermedios cuando sea necesario**, principios activos y material de envase y etiquetado, y criterios de aceptación para los IPC.

- **Materias primas.** Se compran contra una **especificación acordada** con un proveedor aprobado por calidad (7.12). Cada lote recibe al menos un ensayo de **identidad**; el certificado del proveedor puede sustituir a los demás si hay evaluación de proveedores (7.30), tras análisis completos de al menos tres lotes (7.31). Cambiar de proveedor de una materia prima crítica pasa por control de cambios (7.14).
- **Intermedios.** El capítulo 4 de la parte I de las GMP europeas, escrito para medicamentos, pide especificaciones de productos intermedios para las **etapas críticas** o si se compran o se envían fuera (4.15). Q7 (11.20) pide analizar cada lote de intermedio para comprobar que cumple la suya.
- **Disolventes recuperados.** Q7 (14.40 a 14.43) los permite si la recuperación está aprobada y controlada y el disolvente **cumple una especificación adecuada a su uso** antes de reutilizarlo o mezclarlo, y su uso se documenta. Puede traer agua o restos del proceso anterior.

### Cambiar una especificación
Una especificación no se cambia en una reunión de pasillo:

- Q6A (3.1.1): un cambio después de la autorización puede necesitar **aprobación previa de la autoridad**.
- Q7 (13.11 y 13.12): los cambios de especificaciones y de métodos analíticos pasan por el **control de cambios** formal y los aprueba calidad.
- Q7 (13.13 a 13.16): se evalúa el impacto en la calidad, se revisan **todos los documentos afectados**, se evalúan los primeros lotes después del cambio y su efecto sobre la fecha de reanálisis.

Aflojar un límite para que un lote cumpla tras un OOS no es un cambio de especificación: es saltarse la investigación.

### Un ejemplo completo (ficticio)
Especificación del principio activo ficticio **VR-260**, versión 3. Todos los límites son **valores de ejemplo** salvo los de disolventes, que son los de ICH Q3C con la opción 1, y el de impurezas no especificadas, que es el umbral de identificación de Q3A para dosis de hasta 2 g al día.

| Ensayo | Método | Criterio de aceptación |
|---|---|---|
| Descripción | MA-260-01, visual | Polvo cristalino blanco o casi blanco |
| Identificación A | MA-260-02, infrarrojo | Espectro conforme con el patrón |
| Identificación B | MA-260-03, HPLC | Tiempo de retención conforme con el patrón |
| Riqueza (sobre sustancia anhidra) | MA-260-03, HPLC | 98,0–102,0 % |
| Impureza VR-A | MA-260-03, HPLC | ≤ 0,15 % |
| Impureza VR-B (también de degradación) | MA-260-03, HPLC | ≤ 0,14 % |
| Cualquier impureza no especificada | MA-260-03, HPLC | ≤ 0,10 % |
| Impurezas totales | MA-260-03, HPLC | ≤ 0,50 % |
| Agua | MA-260-04, Karl Fischer | ≤ 0,5 % |
| Metanol | MA-260-05, GC | ≤ 3000 ppm |
| Tolueno | MA-260-05, GC | ≤ 890 ppm |
| Etanol | MA-260-05, GC | ≤ 5000 ppm |
| Cenizas sulfatadas | MA-260-06 | ≤ 0,1 % |
| Paladio (catalizador) | MA-260-07 | ≤ 10 ppm |
| Forma cristalina | MA-260-08, difracción de rayos X | Conforme con la forma I |
| Tamaño de partícula | MA-260-09, difracción láser | d90 ≤ 100 µm |
| Recuento de aerobios totales | MA-260-10 | ≤ 1000 UFC/g |
| *Escherichia coli* | MA-260-10 | Ausencia en 1 g |

Todo se analiza en cada lote salvo la microbiología, que es un ensayo periódico: 1 de cada 10 lotes.

### Lo que hace el operador
Cada temperatura, tiempo, lavado y secado de tu hoja protege una línea de esta tabla. Anota los IPC con el valor real, toma las muestras como dice la hoja, usa solo materiales aprobados y no muevas un lote en **cuarentena** mientras el laboratorio lo analiza.

Los números de esta lección son de ejemplo. En planta manda siempre el procedimiento vigente (SOP) y la especificación aprobada de tu producto.
`,
  plant: `
Turno de tarde. Descargas del secadero SD-430 el lote VR-260-0318 del principio activo ficticio VR-260. La hoja pide un IPC antes de descargar: **pérdida por secado ≤ 0,40 %** (valor de ejemplo). El primer resultado es 0,52 %. No es un OOS: es un control para decidir si el secado ha terminado. Sigues secando dos horas más, como dice la hoja, y el segundo da 0,31 %. Anotas los dos resultados con su hora, no solo el bueno.

Una semana después, calidad te pide ayuda con el lote. El certificado interno dice: riqueza 98,6 % tal cual con agua 0,3 %, que sobre sustancia anhidra da 98,9 %; impureza VR-B 0,13 % (límite ≤ 0,14 %); metanol 2100 ppm (límite ≤ 3000 ppm). Todo cumple, pero VR-B suele salir en 0,07 %. Calidad lo trata como resultado fuera de tendencia y revisa la hoja contigo.

En tus anotaciones aparece la causa probable: el secado se alargó dos horas, y en la etapa anterior la torta esperó 9 horas en la centrífuga C-420 antes de pasar al secadero, cuando lo habitual son 3. VR-B es un producto de degradación y crece hasta la fecha de reanálisis: con 0,13 % el lote tiene muy poco margen. Calidad decide liberar con un seguimiento de estabilidad del lote y abre una acción para revisar el tiempo máximo de espera de la torta. Sin tus horas anotadas, nadie habría encontrado esa relación.
`,
  batchRecord: `
En la hoja de producción (*batch record*) la especificación aparece de forma indirecta en muchas casillas:

- **Materias primas**: código, lote, número de recepción y estado **aprobado** (cumplió su especificación de entrada); si un disolvente es recuperado, su número de lote de recuperación y su aprobación.
- **Controles en proceso**: hora de la muestra, ensayo, criterio de la hoja (por ejemplo, «pérdida por secado ≤ 0,40 %»), resultado real y decisión (seguir, repetir, avisar).
- **Muestras del producto final**: número de muestra, cantidad, punto de muestreo, hora y firma; etiqueta con el lote.
- **Tiempos de espera y condiciones** que protegen impurezas que crecen: hora de fin e inicio de cada operación.
- **Estado del lote**: cuarentena hasta que calidad lo libere o lo rechace.
- **Referencia a la especificación y su versión** cuando la hoja la cita: si te llega una hoja con una versión distinta de la vigente, se avisa antes de empezar.

Se anota el valor real con sus decimales, nunca «cumple».
`,
  terms: [
    { es: "Especificación", en: "Specification", def: "Lista de ensayos, referencias a procedimientos analíticos y criterios de aceptación que debe cumplir un material (ICH Q6A)." },
    { es: "Criterio de aceptación", en: "Acceptance criterion", def: "Límite numérico, intervalo u otra medida para aceptar el resultado de un ensayo." },
    { es: "Ensayo universal", en: "Universal test", def: "Ensayo aplicable a todo principio activo: descripción, identificación, riqueza e impurezas." },
    { es: "Ensayo específico", en: "Specific test", def: "Ensayo que se incluye según el producto, como tamaño de partícula, forma polimórfica o agua." },
    { es: "Método indicador de estabilidad", en: "Stability-indicating procedure", def: "Método que distingue el producto de sus productos de degradación." },
    { es: "Impureza especificada", en: "Specified impurity", def: "Impureza identificada o no que figura en la especificación con su propio límite." },
    { es: "Impureza no especificada", en: "Unspecified impurity", def: "Impureza limitada por un criterio general, sin límite propio en la especificación." },
    { es: "Nivel cualificado", en: "Qualified level", def: "Nivel de una impureza cuya seguridad está demostrada, por ejemplo el de los lotes de toxicología." },
    { es: "Desviación típica", en: "Standard deviation", def: "Medida de cuánto se separan los datos de su media." },
    { es: "Especificación de vida útil", en: "Shelf-life specification", def: "Criterios que un principio activo debe cumplir durante todo su periodo de reanálisis (ICH Q1A)." },
    { es: "Control en proceso", en: "In-process control (IPC)", def: "Comprobación durante la producción para vigilar o ajustar el proceso o asegurar que el producto cumplirá su especificación." },
    { es: "Ensayo periódico", en: "Periodic or skip testing", def: "Ensayo que se hace solo en lotes elegidos o a intervalos; los no analizados deben cumplir igual." },
    { es: "Sustancia anhidra", en: "Anhydrous basis", def: "Resultado corregido quitando el agua de la muestra." },
    { es: "Redondeo", en: "Rounding", def: "Quitar cifras del final según la regla del 5, una sola vez y antes de comparar con el límite." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Una impureza da en cinco lotes de desarrollo una media de 0,05 % con una desviación típica de 0,007 %. No es un producto de degradación y su nivel cualificado es 0,15 %. Según el árbol de decisión 1 de ICH Q6A (media + 3 desviaciones típicas), ¿qué límite sale, en % con dos decimales?",
      answer: 0.07,
      tolerance: 0.05,
      unit: "%",
      explain: "A = 0,05 + 3 × 0,007 = 0,071, redondeado 0,07 %. No supera el nivel cualificado (0,15 %), así que el límite es A.",
    },
    {
      kind: "number",
      q: "La riqueza de un lote tal cual es 98,9 % y su agua por Karl Fischer, 1,2 %. ¿Cuál es la riqueza sobre sustancia anhidra, con un decimal?",
      answer: 100.1,
      tolerance: 0.001,
      unit: "%",
      explain: "98,9 × 100 / (100 − 1,2) = 100,10, que se informa como 100,1 %.",
    },
    {
      kind: "number",
      q: "El laboratorio da un 0,38 % de metanol en un principio activo. ¿Cuántas ppm son? (1 % = 10000 ppm.)",
      answer: 3800,
      tolerance: 0.001,
      unit: "ppm",
      explain: "0,38 × 10000 = 3800 ppm. Como el límite de ICH Q3C para el metanol con la opción 1 es 3000 ppm, no cumple.",
    },
    {
      kind: "number",
      q: "Un lote tiene estas impurezas: 0,09 %, 0,11 %, 0,06 %, 0,04 % y 0,03 %. El umbral de notificación es 0,05 % y las impurezas totales son la suma de las que lo superan. ¿Cuánto vale el total?",
      answer: 0.26,
      tolerance: 0.01,
      unit: "%",
      explain: "Solo superan 0,05 % las de 0,09, 0,11 y 0,06: total = 0,26 %. Las de 0,04 y 0,03 no se informan ni se suman.",
    },
    {
      kind: "number",
      q: "Un lote sale con riqueza 99,2 % y la estabilidad muestra una pérdida de 0,25 puntos por año. ¿Qué riqueza tendrá a los 2 años, en %?",
      answer: 98.7,
      tolerance: 0.001,
      unit: "%",
      explain: "99,2 − 2 × 0,25 = 98,7 %, todavía dentro de 98,0–102,0 %.",
    },
    {
      kind: "choice",
      q: "Límite de riqueza 98,0–102,0 %. El cálculo da 97,96 %. ¿Qué dice el laboratorio?",
      options: [
        "No cumple, porque 97,96 es menor que 98,0",
        "Repite el análisis hasta que salga por encima de 98,0",
        "Cumple: se informa 98,0 % y el extremo está incluido",
        "Cumple solo si el siguiente lote sale mejor que este",
      ],
      answer: 2,
      explain: "Se redondea a los decimales del límite antes de comparar: 97,96 da 98,0, y los límites incluyen sus extremos, como explica el manual de laboratorio de la FDA.",
    },
    {
      kind: "choice",
      q: "¿Quién aprueba dentro de la empresa la especificación de un principio activo, según ICH Q7?",
      options: [
        "La unidad de calidad, que no puede delegar esa tarea",
        "El jefe de turno de producción que fabrica el lote",
        "El analista que hace el ensayo en el laboratorio",
        "El cliente que compra el lote, en su pedido",
      ],
      answer: 0,
      explain: "ICH Q7 (2.22 y 11.12): aprobar todas las especificaciones es responsabilidad de la unidad de calidad, y no se delega.",
    },
    {
      kind: "choice",
      q: "El IPC de pérdida por secado da 0,52 % y la hoja pide ≤ 0,40 % antes de descargar. ¿Qué haces?",
      options: [
        "Abro una investigación OOS y paro el secadero ya",
        "Descargo igual, porque el análisis final lo corregirá",
        "Repito la muestra hasta que dé 0,40 % y anoto esa",
        "Sigo secando como dice la hoja y repito el control",
      ],
      answer: 3,
      explain: "Es un control para ajustar el proceso: ICH Q7 (8.36) dice que normalmente no hace falta investigación OOS. Se actúa como diga la hoja y se anotan todos los resultados.",
    },
    {
      kind: "choice",
      q: "Un lote sale con una impureza al 0,16 % y su límite es ≤ 0,15 %. Alguien propone subir el límite a 0,20 % para liberarlo. ¿Qué es lo correcto?",
      options: [
        "Subirlo, porque 0,20 % sigue siendo muy poco producto",
        "Investigar el OOS; un cambio de límite va por control de cambios",
        "Mezclar el lote con otro bueno para bajar el resultado",
        "Cambiar el límite solo en la hoja de este lote concreto",
      ],
      answer: 1,
      explain: "ICH Q7 (13.11) somete los cambios de especificación al control de cambios y (8.41) prohíbe mezclar lotes fuera de especificación para que cumplan; el OOS se investiga.",
    },
    {
      kind: "choice",
      q: "Te traen metanol recuperado para la cristalización final. ¿Qué tiene que tener para poder cargarlo, según ICH Q7?",
      options: [
        "Solo una etiqueta escrita a mano que ponga «metanol»",
        "Que huela igual que el metanol nuevo del bidón",
        "Recuperación controlada, especificación cumplida y uso autorizado",
        "Que lo haya destilado el turno anterior esta misma semana",
      ],
      answer: 2,
      explain: "ICH Q7 (14.41 y 14.43) permite reutilizar disolventes si la recuperación está controlada y cumplen su especificación antes de usarse, y su uso se documenta.",
    },
  ],
};
