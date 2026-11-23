import type { Lesson } from "./types";

export const recepcionAFondo: Lesson = {
  slug: "recepcion-a-fondo",
  level: 17,
  order: 2,
  title: "Recepción, muestreo y cuarentena a fondo: ningún material entra sin pasar el control",
  titleEn: "Receipt, sampling and quarantine in depth: no material gets in without passing control",
  minutes: 38,
  summary:
    "Por qué la recepción es la primera barrera de calidad, qué se comprueba en cada envase según ICH Q7, cuántos envases se muestrean y cómo, por qué el certificado del proveedor no basta solo, cómo funciona la cuarentena, cómo se cuentan las fechas de reanálisis y qué hay que vigilar al descargar una cisterna de disolvente.",
  body: `
En la lección «Recepción de materiales y estados de calidad» viste el recorrido de un material, desde el camión hasta el almacén. Aquí vas a ver qué mira quien recibe y muestrea, qué dice la norma apartado por apartado y qué hacer cuando algo no cuadra.

Las citas salen de ICH Q7, las normas de correcta fabricación (*Good Manufacturing Practice*, GMP) para principios activos, sobre todo de su capítulo 7. También de la parte I de las GMP europeas (EudraLex, volumen 4), que está escrita para medicamentos: en tu planta sirve como referencia, no como norma directa. Y de la guía de muestreo de la Organización Mundial de la Salud (OMS) de 2005 (serie de informes técnicos n.º 929, anexo 4).

### La primera barrera: lo que entra mal sale mal
Si un cocinero usa sal donde la receta pedía azúcar, da igual lo bien que haga lo demás: el pastel sale mal.

En una planta de principios activos pasa igual. Un reactivo equivocado o contaminado entra en el reactor y deja impurezas que pueden ser muy difíciles de quitar. La recepción es la primera barrera de calidad y el momento más barato para parar un error.

Un caso ficticio. Llegan 20 bidones de un disolvente para el reactor R-101. Uno lleva una etiqueta pegada encima de otra; el mozo de almacén tiene prisa y lo coloca con los demás. El laboratorio muestrea 5 bidones, por casualidad no ese, y el lote sale aprobado. Semanas después, el producto final muestra una impureza desconocida: aquel bidón era otro disolvente. Se rechaza todo el lote. Una mirada atenta en el muelle lo habría parado.

### Qué materiales entran en una planta de API
El glosario de ICH Q7 llama **material** (*material*) a todo lo que se usa: materias primas, auxiliares de proceso, intermedios, principios activos, envases y etiquetas. No todos se tratan igual.

| Tipo | Qué es, según ICH Q7 | Ejemplo ficticio |
|---|---|---|
| **Materia prima** (*raw material*) | Nombre general para materiales de partida, reactivos y disolventes | Todo lo de las tres filas siguientes |
| **Material de partida del API** (*API starting material*) | Materia prima, intermedio o API que aporta un fragmento importante de la estructura de la molécula final. Desde que entra se aplican las GMP de Q7 | Compuesto FX-SM1 |
| **Reactivo** (*reagent*) y **disolvente** (*solvent*) | Q7 los incluye entre las materias primas sin definirlos aparte. El reactivo toma parte en la reacción; el disolvente es el líquido en el que ocurre | Base RX-12, disolvente DS-7 |
| **Auxiliar de proceso** (*process aid*) | Material, que no sea un disolvente, que ayuda en la fabricación sin reaccionar | Carbón activo, coadyuvante de filtración |
| **Material de envase** (*packaging material*) y etiquetas | Lo que protege al producto en almacén y transporte, y lo que lo identifica | Bolsas, bidones de fibra, etiquetas |
| **Otros materiales** | Juntas y otros materiales usados en la producción que pueden afectar de forma crítica a la calidad | Juntas de la tapa de la centrífuga, telas filtrantes |

No todos pesan igual en la calidad. ICH Q7 pide especificaciones escritas para materias primas, envases y etiquetas, y dice que «pueden ser apropiadas» también para auxiliares de proceso, juntas y otros materiales que puedan afectar de forma crítica a la calidad (apartado 6.17). Los envases y etiquetas tienen su propio capítulo: procedimiento de recepción, cuarentena y examen (9.10), cumplir su especificación o rechazarse (9.11) y un registro de cada envío (9.12).

### Proveedor aprobado, fabricante y distribuidor
Antes de que llegue el camión ya se ha elegido a quién se compra. ICH Q7 pide:

- Un sistema para evaluar a los proveedores de materiales críticos (7.11).
- Comprar contra una especificación acordada y a proveedores aprobados por la unidad de calidad (7.12).
- Si el proveedor de un material crítico no es su fabricante, hay que conocer el nombre y la dirección del fabricante (7.13).
- Cambiar de proveedor de una materia prima crítica pasa por el control de cambios (7.14).

El **fabricante** (*manufacturer*) es quien hizo el material; el **distribuidor** (*distributor*) lo compra, lo almacena y lo revende, a veces reenvasado. ICH Q7 pide al distribuidor que dé al cliente el nombre del fabricante original y su número de lote (17.61). El capítulo 5 de las GMP europeas recomienda comprar, siempre que se pueda, directamente al fabricante (5.27). Y su anexo 8 avisa: con intermediarios que no dicen quién fabricó el material, es improbable que se pueda justificar no analizar cada envase.

### La recepción paso a paso
ICH Q7 pide procedimientos escritos para recibir, identificar, poner en cuarentena, almacenar, manipular, muestrear, analizar y aprobar o rechazar materiales (7.10). También zonas definidas, u otros sistemas de control, para recibir, identificar, muestrear y poner en cuarentena lo que llega (4.14). El orden lo fija tu procedimiento; la secuencia típica:

1. **Documentos.** Se comprueba que el envío corresponde al pedido (GMP europeas, capítulo 5, apartado 5.3). Se compara el **albarán** (*delivery note*) con el **pedido** (*purchase order*), con las etiquetas del proveedor y con los datos del fabricante y del proveedor aprobados (5.30): nombre del material, cantidad, número de envases y lote del proveedor.
2. **Inspección visual de cada envase.** ICH Q7 7.20: antes de aceptarlo, cada envase o grupo de envases se examina para ver si la etiqueta es correcta, si hay daños, precintos rotos o señales de manipulación o de contaminación. Etiqueta correcta incluye que el nombre del proveedor corresponda al nombre interno, si son distintos.
3. **Identificación.** Se anotan el nombre del fabricante, el nombre del proveedor y el **número de lote del proveedor** (*supplier's batch number*), como pide ICH Q7 en sus registros (6.30).
4. **Número interno.** Cada envase o grupo de envases recibe un código, número de lote o **número de recepción** (*receipt number*) propio. Ese número se usa para registrar el destino de cada lote, y tiene que haber un sistema que diga el estado de cada lote (7.24).
5. **Registro** de la recepción, con fecha.
6. **Etiqueta de cuarentena y ubicación.** El material queda en **cuarentena** (*quarantine*) hasta que se haya muestreado, examinado o analizado, según proceda, y se haya liberado para su uso (7.20).

Si un envío trae varios lotes del proveedor, cada uno cuenta aparte para muestrear, analizar y aprobar (GMP europeas, 5.31).

### Envase dañado o etiqueta ilegible
Las GMP europeas lo resumen: los daños en los envases y cualquier problema que pueda afectar a la calidad se investigan, se registran y se comunican a control de calidad (5.4). En la práctica:

- **No lo «arregles».** No vuelvas a precintar, no limpies una etiqueta para leerla mejor, no pases el contenido a otro envase.
- **Sepáralo** e identifícalo, por ejemplo como bloqueado, según tu procedimiento.
- **Anótalo** con detalle y avisa a calidad.

La OMS añade: el material de envases dañados se rechaza o se muestrea uno por uno para un control completo, y los envases sin etiqueta se rechazan.

### El certificado de análisis y por qué no basta solo
El **certificado de análisis** (*certificate of analysis*, CoA) es el documento en el que el proveedor declara sus resultados de ese lote. Es útil, pero lo escribe quien vende: no es una prueba independiente.

ICH Q7 lo trata así:

- **Identidad, siempre.** Se hace al menos un ensayo de identidad de cada lote. El certificado puede sustituir a los demás ensayos solo si el fabricante tiene un sistema para evaluar proveedores (7.30).
- **Confianza ganada, no supuesta.** Antes de reducir los análisis propios, se hace el análisis completo de al menos tres lotes. Después, se repite el análisis completo a intervalos y se compara con el certificado, y se comprueba con regularidad que los certificados son fiables (7.31).
- **Excepciones justificadas.** Los auxiliares de proceso, las materias primas peligrosas o muy tóxicas y otros materiales especiales pueden no analizarse si se tiene el certificado del fabricante. El examen visual y el registro de los lotes ayudan a confirmar su identidad, y la falta de análisis se justifica por escrito (7.32).

Las GMP europeas, para medicamentos, añaden: si un análisis completo propio no coincide con el certificado, se investiga y se dejan de aceptar sus certificados hasta cerrar las medidas (5.36).

### Materiales a granel: cisternas y depósitos
El disolvente de una cisterna va a un depósito donde ya hay disolvente de entregas anteriores: si entra uno equivocado, contamina todo el depósito. ICH Q7 pide:

- Antes de mezclarlo con las existencias, identificarlo como correcto, analizarlo si procede y liberarlo. Y tener procedimientos que eviten descargarlo por error en el depósito equivocado (7.21).
- Si la cisterna no es exclusiva para ese producto, tener garantía de que no trae contaminación del viaje anterior, por ejemplo con un certificado de limpieza, análisis de impurezas traza o una auditoría al proveedor (7.22).
- Identificar bien los depósitos grandes y sus colectores y líneas de llenado y vaciado (7.23).

### El muestreo
Según ICH Q7, las muestras deben ser representativas del lote, y el método dice cuántos envases se muestrean, de qué parte y cuánto de cada uno. Ese número sale de un **plan de muestreo** (*sampling plan*) que tiene en cuenta lo crítico que es el material, lo variable que es, el historial del proveedor y la cantidad que necesita el análisis (7.33).

**Cuántos envases: la regla de la raíz cuadrada.** La guía de la OMS describe tres planes. El más conocido es el **plan n** (*n plan*): se muestrean n = 1 + √N envases, donde N es el número de envases del envío, y el resultado se redondea de forma normal, al entero más cercano. Si hay 4 envases o menos, se muestrean todos. Ya la viste en «Por qué y cómo se muestrea». Tres cuentas:

| Envases (N) | √N | 1 + √N | Redondeo de la OMS | Si tu procedimiento redondea hacia arriba |
|---|---|---|---|---|
| 16 | 4 | 5 | 5 | 5 |
| 30 | 5,48 | 6,48 | 6 | 7 |
| 50 | 7,07 | 8,07 | 8 | 9 |

En los otros dos planes de la OMS se toma muestra de **todos** los envases para comprobar su identidad:

- **Plan p:** material uniforme de un proveedor conocido, cuando lo principal es la identidad. Las muestras se juntan en p = 0,4 × √N muestras finales, redondeando hacia arriba.
- **Plan r:** material que puede no ser uniforme o de un proveedor poco conocido. Se analizan por separado r = 1,5 × √N muestras, redondeando hacia arriba.

Con 40 envases: el plan n da 1 + 6,32 = 7,32, es decir 7 envases; el plan p, 0,4 × 6,32 = 2,53, es decir 3 muestras finales; el plan r, 1,5 × 6,32 = 9,49, es decir 10 muestras.

Dos avisos. La guía de la OMS está pensada sobre todo para autoridades y compradores, y dice que el plan n no está recomendado para los laboratorios de fabricantes que aprueban o rechazan cada entrega. Y el anexo 8 de las GMP europeas dice que la identidad de todo un lote normalmente solo queda asegurada con un ensayo de identidad de cada envase; muestrear solo una parte exige un procedimiento validado que asegure que ningún envase está mal etiquetado. Por eso hay plantas que identifican cada bidón con un equipo portátil y usan √N + 1 solo para la muestra del análisis completo. Cuántos muestreas tú lo dice tu procedimiento.

**Dónde y con qué.** ICH Q7 pide muestrear en lugares definidos y con procedimientos que eviten contaminar el material muestreado y otros materiales (7.34). La OMS concreta: una sala o cabina reservada para muestrear, que proteja el envase abierto, el material y a quien muestrea; útiles inertes, muy limpios, lavados y secos tras cada uso, con la limpieza registrada. Los de un solo uso tienen ventajas claras.

**Cómo, en orden:**

1. Lee antes las precauciones de seguridad del material, empezando por su ficha de datos de seguridad (OMS).
2. Limpia el exterior del envase si hace falta, antes de abrirlo.
3. Abre con cuidado, saca la cantidad del plan y fíjate en lo que ves. Señales de falta de uniformidad, según la OMS: partículas de distinto color o tamaño, costras húmedas, posos o capas separadas en un líquido. Si las ves, anótalo y avisa: esas partes se muestrean aparte, porque mezclarlas podría ocultar el problema.
4. Nunca devuelvas una muestra al envase (OMS).
5. Cierra el envase y márcalo como muestreado (ICH Q7, 7.35).
6. Etiqueta la muestra en el momento (OMS), con el lote y los envases de los que sale (GMP europeas, capítulo 6, apartado 6.13).

Las técnicas de líquidos y sólidos (sonda, tubo, válvula) están en «Toma de muestras de sólidos y líquidos». Con materiales peligrosos, quien muestrea lleva la protección que pida la ficha y, si hace falta un equipo de respiración, debe estar formado en su uso (OMS).

### La cuarentena
ICH Q7 define cuarentena como el estado de los materiales aislados **físicamente o por otros medios eficaces** mientras se decide si se aprueban o se rechazan (las GMP europeas dicen física o administrativa, 5.5). Hay dos formas:

- **Física:** una zona separada, a veces con jaula y llave.
- **Por sistema:** el material está en el almacén general, pero el sistema informático de gestión (ERP) lo tiene bloqueado y no deja consumirlo. Si todo el almacén está informatizado, la etiqueta no tiene que mostrar de forma legible todos los datos (GMP europeas, 5.32).

¿Por qué nadie usa un material en cuarentena, aunque haya prisa? Porque ICH Q7 dice que se mantiene en cuarentena hasta su muestreo, examen o análisis y su liberación (7.20). Y las GMP europeas, que solo se usan materiales liberados y dentro de su periodo de reanálisis (5.34). Puede estar perfecto, pero nadie lo sabe todavía.

Las **etiquetas de estado** suelen ser cuarentena, aprobado y rechazado (las GMP europeas citan como ejemplos «en cuarentena», «en análisis», «liberado» y «rechazado»). Los colores son una convención de cada planta, no una norma. Aprende los de la tuya.

Decide la unidad de calidad, independiente de producción. Entre sus funciones, que no puede delegar, está tener un sistema para aprobar o rechazar materias primas, intermedios, envases y etiquetas (ICH Q7, 2.22). Lo rechazado se identifica y se controla en cuarentena para que nadie lo use (7.44), en zona propia hasta decidir su destino, por ejemplo la devolución o la destrucción (4.14).

### Fechas de reanálisis y de caducidad
- **Fecha de reanálisis** (*retest date*): según ICH Q7, la fecha en que un material debe volver a examinarse para comprobar que sigue siendo apto.
- **Fecha de caducidad** (*expiry date*): ICH Q7 la define para el principio activo. Es la fecha hasta la que se espera que cumpla su especificación, bien almacenado, y después de la cual no debe usarse.

Las dos pueden ir en la etiqueta del material, según el caso (GMP europeas, 5.32). Además, ICH Q7 pide reevaluar los materiales cuando haga falta, por ejemplo tras un almacenamiento largo o si han pasado calor o humedad (7.50).

Dos cuentas (valores de ejemplo):

- **Sumar el periodo.** Un reactivo se fabricó el 15/03/2026 y su periodo de reanálisis es de 24 meses. Fecha de reanálisis: 15/03/2028.
- **Contar los días.** Hoy es 21/11/2026 y un lote tiene fecha de reanálisis 10/01/2027. Quedan 9 días de noviembre, 31 de diciembre y 10 de enero: 50 días. Si la campaña que lo va a usar dura más, avisa antes de empezar.

Qué pasa con un material pasada su fecha lo decide calidad según su procedimiento, nunca quien lo va a cargar.

### Recepción de productos químicos peligrosos
Con disolventes inflamables, ácidos o bases, además de la calidad se mira la seguridad:

- **Etiqueta CLP** (Reglamento europeo 1272/2008). Según su artículo 17 (texto original de 2008), el envase de una sustancia peligrosa lleva el nombre, dirección y teléfono del proveedor, los identificadores del producto y, cuando proceda, pictogramas, palabra de advertencia, indicaciones de peligro (frases H) y consejos de prudencia (frases P), en la lengua del país donde se vende.
- **Ficha de datos de seguridad** (FDS, *safety data sheet*): tiene 16 secciones fijas (anexo II de REACH, en la versión del Reglamento 2020/878). La sección 7 trata de manipulación y almacenamiento y la 14, del transporte.

**Descarga de cisternas de disolvente.** Al trasvasar un líquido inflamable se puede cargar electricidad estática, y una chispa puede encender sus vapores. El reglamento de almacenamiento de productos químicos (Real Decreto 656/2017, instrucción técnica MIE APQ-1, artículo 35) pide:

- Descargar con el **motor del camión parado**, y el camión colocado para salir sin maniobrar.
- Junto a cada puesto de descarga, un cable flexible conectado a la red de tierra para **conectar la cisterna antes y durante la descarga**, con una alarma o un **enclavamiento** que garantice el buen contacto de la pinza.
- Que un derrame corra a un sumidero fuera de la vertical del vehículo y no llegue al alcantarillado.

La nota técnica de prevención NTP 357 del Instituto Nacional de Seguridad y Salud en el Trabajo (de 1995; el propio instituto pide tener en cuenta la fecha) añade buenas prácticas: balizar y señalizar la zona, comprobar la puesta a tierra del depósito, calzar el camión y controlar la descarga con **presencia física permanente** del conductor y del personal receptor designado, con medios contra incendios preparados. La NTP 375 explica que, en la carga por arriba, la conexión se hace antes de abrir la boca de la cisterna y se mantiene hasta cerrarla.

### Los registros: aquí empieza la trazabilidad
ICH Q7 pide registrar, de cada envío de cada lote (6.30): el nombre del fabricante, la identidad y la cantidad; el nombre del proveedor y su número de lote; el número asignado en la recepción y la fecha de recepción. Después, los resultados y la conclusión, el uso de cada material y la decisión sobre lo rechazado. La OMS añade el registro de muestreo: lote, fecha, lugar, envases, anomalías y quién muestreó.

Todo cuelga de ese número interno. Cuando la hoja de producción anota «cargado el lote interno R-26-0412», se puede seguir el hilo hasta el camión, el proveedor y el fabricante. Si la recepción se registra mal, la cadena está rota desde el primer eslabón. Lo verás completo en «Trazabilidad, distribución, devoluciones y retiradas».

En planta manda siempre el procedimiento vigente (SOP): los pasos, los planes de muestreo, los colores y los plazos de tu empresa son los que valen.
`,
  plant: `
Lunes, 7:30. Llega un camión con 24 bidones de 180 kg de la base RX-12 (ficticia) para el reactor R-101. Recibe Marta, operaria de almacén.

Primero, los papeles. El albarán dice 24 bidones y 4320 kg de un único lote del proveedor, L-8841. El pedido coincide. El fabricante es el aprobado. Pesa los bidones: cuadra.

Después, bidón por bidón. Veintitrés están bien. El número 17 tiene un golpe en el borde y el precinto levantado. Marta no lo toca más: lo aparta, le pone la etiqueta de bloqueado y lo anota en el registro con una foto. Luego avisa a calidad.

En el sistema da entrada al lote con el número interno R-26-0412. Los 23 bidones buenos reciben la etiqueta de cuarentena y van a la zona Q-2. El 17 va a la jaula de material bloqueado.

Por la tarde muestrea Javier, del laboratorio, en la cabina de muestreo CM-1. Su procedimiento pide identidad de cada bidón con un equipo portátil y, para el análisis completo, la regla √N + 1 redondeando hacia arriba: √23 = 4,80; 4,80 + 1 = 5,80, así que 6 bidones. Usa sondas de un solo uso. Cierra cada bidón, le pega la etiqueta de muestreado y etiqueta cada frasco en el momento.

El miércoles calidad aprueba el lote. El estado cambia en el sistema y los 23 bidones reciben la etiqueta de aprobado. Sobre el bidón 17, calidad abre una investigación con el proveedor.
`,
  batchRecord: `
En la hoja de producción del lote verías, para cada material cargado:

- **Nombre del material y número interno** (por ejemplo, base RX-12, R-26-0412), que debe coincidir con el que pide la hoja.
- **Estado aprobado**, comprobado en la etiqueta y en el sistema antes de cargar. Si pone cuarentena o bloqueado, no se carga.
- **Fecha de reanálisis o de caducidad**, comprobada: el material debe estar dentro de plazo el día de la carga.
- **Cantidad pesada o medida**, con quién la pesa y quién la comprueba.

En el registro de recepción, que es un documento aparte, constan el albarán, el pedido, el número de bidones, el lote del proveedor, el fabricante, la fecha y las incidencias (como el bidón 17). En el registro de muestreo constan los envases muestreados, la cabina, los útiles y quién muestreó. Todo se anota en el momento, con letra legible y firma, siguiendo los principios ALCOA+ de integridad de datos.
`,
  terms: [
    { es: "Recepción", en: "Receipt / goods receipt", def: "Conjunto de comprobaciones y registros que se hacen al llegar un material, antes de aceptarlo." },
    { es: "Albarán", en: "Delivery note", def: "Documento que acompaña a la mercancía y dice qué se entrega y cuánto." },
    { es: "Número de recepción o lote interno", en: "Receipt number / internal batch number", def: "Código propio que la planta asigna a cada lote recibido y que sigue al material en todos los registros." },
    { es: "Lote del proveedor", en: "Supplier's batch number", def: "Número de lote que pone el proveedor o fabricante en su etiqueta y en su certificado." },
    { es: "Cuarentena", en: "Quarantine", def: "Estado de un material aislado física o administrativamente hasta que calidad lo apruebe o lo rechace." },
    { es: "Certificado de análisis", en: "Certificate of analysis (CoA)", def: "Documento del proveedor con los resultados de sus análisis de un lote concreto." },
    { es: "Ensayo de identidad", en: "Identity test", def: "Análisis que confirma que el material es el que dice la etiqueta." },
    { es: "Plan de muestreo", en: "Sampling plan", def: "Documento que fija cuántos envases se muestrean, de qué parte y cuánta cantidad." },
    { es: "Envase muestreado", en: "Sampled container", def: "Envase del que se ha sacado muestra; se cierra y se marca porque ya no contiene lo que dice su etiqueta." },
    { es: "Fecha de reanálisis", en: "Retest date", def: "Fecha en la que un material debe volver a examinarse para comprobar que sigue siendo apto." },
    { es: "Fecha de caducidad", en: "Expiry date", def: "Fecha después de la cual un material no debe usarse." },
    { es: "Auxiliar de proceso", en: "Process aid", def: "Material, que no sea disolvente, que ayuda en la fabricación sin reaccionar, como el carbón activo." },
    { es: "Distribuidor", en: "Distributor", def: "Empresa que compra, almacena y revende un material que fabricó otro." },
    { es: "Puesta a tierra", en: "Earthing / grounding", def: "Conexión eléctrica de un equipo a tierra para descargar la electricidad estática." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Llegan 20 bidones de un mismo lote. Tu procedimiento aplica la regla n = 1 + √N con el redondeo de la OMS (al entero más cercano). ¿Cuántos bidones muestreas?",
      answer: 5,
      tolerance: 0.001,
      unit: "bidones",
      explain: "√20 = 4,47; 4,47 + 1 = 5,47, que redondeado al entero más cercano da 5 bidones.",
    },
    {
      kind: "number",
      q: "Llegan 60 sacos de un mismo lote. Con la regla n = 1 + √N y redondeo al entero más cercano, ¿cuántos sacos muestreas?",
      answer: 9,
      tolerance: 0.001,
      unit: "sacos",
      explain: "√60 = 7,75; 7,75 + 1 = 8,75, que redondeado da 9 sacos. Coincide con la tabla de la OMS, que da 9 para 57 a 72 envases.",
    },
    {
      kind: "number",
      q: "Un reactivo se fabricó el 01/04/2026 y tiene un periodo de reanálisis de 18 meses. Hoy es 01/10/2026. ¿Cuántos meses quedan hasta su fecha de reanálisis?",
      answer: 12,
      tolerance: 0.001,
      unit: "meses",
      explain: "01/04/2026 + 18 meses = 01/10/2027. Del 01/10/2026 al 01/10/2027 quedan 12 meses.",
    },
    {
      kind: "number",
      q: "Hoy es 21/11/2026. Un disolvente tiene fecha de reanálisis 15/12/2026. ¿Cuántos días quedan hasta esa fecha?",
      answer: 24,
      tolerance: 0.001,
      unit: "días",
      explain: "Quedan 9 días de noviembre (del 21 al 30) y 15 de diciembre: 9 + 15 = 24 días.",
    },
    {
      kind: "number",
      q: "El albarán dice 2400 kg en bidones de 200 kg. En el muelle cuentas 11 bidones llenos. ¿Cuántos kilos faltan respecto al albarán?",
      answer: 200,
      tolerance: 0.001,
      unit: "kg",
      explain: "2400 / 200 = 12 bidones esperados. Faltan 12 − 11 = 1 bidón, es decir 200 kg. Se anota y se avisa antes de aceptar el envío.",
    },
    {
      kind: "choice",
      q: "Al recibir 16 bidones, ves que uno tiene el precinto roto y la etiqueta medio despegada. ¿Qué haces?",
      options: [
        "Lo vuelvo a precintar y lo coloco en la cuarentena con los demás",
        "Abro el bidón para comprobar si el contenido parece el correcto",
        "Lo separo, lo identifico como bloqueado, lo anoto y aviso a calidad",
        "Lo devuelvo yo mismo al conductor del camión sin decir nada",
      ],
      answer: 2,
      explain: "Los daños se investigan, se registran y se comunican a calidad. No se arregla ni se manipula: decide calidad.",
    },
    {
      kind: "choice",
      q: "Un proveedor aprobado manda su certificado de análisis con todo conforme. Según ICH Q7 7.30, ¿qué ensayo hay que hacer de cada lote como mínimo?",
      options: [
        "Al menos un ensayo de identidad del lote recibido",
        "Ninguno, porque el certificado ya demuestra la calidad",
        "El análisis completo de todos los envases del lote",
        "Solo el pesado de los envases para cuadrar cantidades",
      ],
      answer: 0,
      explain: "ICH Q7 7.30 pide al menos un ensayo de identidad por lote; el certificado solo puede sustituir a los demás ensayos si hay un sistema de evaluación de proveedores.",
    },
    {
      kind: "choice",
      q: "Producción necesita ya un disolvente que llegó ayer y está en cuarentena. El laboratorio aún no tiene el resultado. ¿Qué es correcto?",
      options: [
        "Usarlo si el certificado del proveedor es conforme",
        "Usar solo la mitad hasta que llegue el resultado",
        "Usarlo y anotar en la hoja que estaba en cuarentena",
        "No usarlo: solo se usa material liberado por calidad",
      ],
      answer: 3,
      explain: "ICH Q7 7.20: el material se mantiene en cuarentena hasta su análisis y su liberación. Nadie de producción puede saltarse ese paso.",
    },
    {
      kind: "choice",
      q: "Llega una cisterna de disolvente que no es exclusiva para ese producto. ¿Qué pide ICH Q7 antes de descargarla al depósito?",
      options: [
        "Nada especial si el conductor dice que está limpia",
        "Garantía de que no trae contaminación del viaje anterior",
        "Descargarla rápido para no mezclar con aire del exterior",
        "Descargarla a cualquier depósito que tenga hueco libre",
      ],
      answer: 1,
      explain: "ICH Q7 7.22 pide asegurar que la cisterna no contamina, por ejemplo con un certificado de limpieza, análisis de trazas o auditoría; y 7.21, identificar y liberar antes de mezclar con las existencias.",
    },
    {
      kind: "choice",
      q: "Vas a empezar la descarga de una cisterna de disolvente inflamable. ¿Qué es lo primero en materia de electricidad estática?",
      options: [
        "Arrancar la bomba y conectar la tierra cuando haya caudal",
        "Conectar la pinza de tierra a la cisterna antes de empezar",
        "Dejar el motor del camión encendido por si hay que moverlo",
        "Abrir la boca de la cisterna para que salgan los vapores",
      ],
      answer: 1,
      explain: "La MIE APQ-1, artículo 35, pide conectar la cisterna a tierra antes y durante la descarga, con alarma o enclavamiento de buen contacto, y con el motor parado.",
    },
  ],
};
