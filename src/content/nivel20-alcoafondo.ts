import type { Lesson } from "./types";

export const alcoaAFondo: Lesson = {
  slug: "alcoa-a-fondo",
  level: 20,
  order: 2,
  title: "ALCOA+ a fondo: datos en los que se puede confiar",
  titleEn: "ALCOA+ in depth",
  minutes: 38,
  summary:
    "Qué es la integridad de datos y por qué las autoridades la persiguen, los nueve atributos de ALCOA+ con su definición oficial y un ejemplo en papel y otro en pantalla, datos brutos y metadatos, copias verdaderas, buenas prácticas en papel, cultura de calidad y casos reales del turno.",
  body: `
En la lección corta [ALCOA+: datos en los que se puede confiar](/leccion/alcoa-plus) viste la lista de los nueve atributos. Aquí vas a ver de dónde salen, qué dice exactamente cada guía oficial, cómo se cumplen en una hoja de papel y en una pantalla, y qué hacer en las situaciones del turno en las que es fácil equivocarse.

### Qué es la integridad de datos
Lo que el responsable de calidad (QA) revisa antes de liberar un lote son **datos**: pesos, temperaturas, horas, resultados de laboratorio, firmas. Si los datos no son fiables, nadie puede saber si el lote es bueno, aunque lo sea.

Las definiciones oficiales:

- La guía de la FDA *Data Integrity and Compliance With Drug CGMP* (diciembre de 2018) dice que la integridad de datos (*data integrity*) es **la completitud, la coherencia y la exactitud de los datos**. Y añade que esos datos deben ser atribuibles, legibles, registrados en el momento, originales o copia verdadera, y exactos: ALCOA.
- La guía PIC/S PI 041-1 (julio de 2021), escrita por la cooperación de autoridades de inspección, la define como el grado en que los datos son completos, coherentes, exactos, fiables y dignos de confianza, y en que esas características se mantienen durante todo el **ciclo de vida del dato** (*data lifecycle*): desde que se genera hasta que se destruye.
- La OMS, en su *Guideline on data integrity* (Serie de Informes Técnicos 1033, anexo 4, 2021), dice que los datos y registros deben cumplir los nueve atributos y que a eso se le llama «ALCOA+».

Si vienes del desarrollo web, piénsalo así: la integridad de datos es para una planta lo que la integridad de una base de datos es para una aplicación, con una diferencia. Aquí el riesgo no es solo un fallo técnico, sino también una persona que escribe lo que no ha pasado.

### Por qué es un problema real
No es teoría. La FDA explica en esa guía de 2018 que cada vez observa más incumplimientos de integridad de datos en sus inspecciones, y que han acabado en cartas de advertencia (*warning letters*), alertas de importación y acuerdos judiciales. La OMS dice lo mismo en el punto 1.1 de su guía y apunta causas: prácticas humanas inadecuadas, procedimientos mal definidos, falta de recursos, sistemas informáticos que no cumplen y revisión insuficiente de los datos originales.

Dos casos leídos en cartas de advertencia publicadas por la FDA en 2025, sin nombres:

- **Un fabricante de API** (carta de abril de 2025). Los inspectores encontraron hojas de lote rotas, formularios sin control en la zona de envasado y una hoja a medio rellenar en un cajón abierto. La hoja del lote se abría cuando ya había terminado la primera etapa del proceso: los operadores apuntaban esa etapa en **hojas sueltas sin control** y después la copiaban en la hoja oficial. Las hojas sueltas no se guardaban. Además, el procedimiento decía que los datos del cromatógrafo se archivaban en la nube, pero se copiaban a un segundo disco del mismo ordenador. Ese disco se estropeó, y los datos del cromatógrafo de febrero a septiembre de 2024 pudieron verse afectados.
- **Un fabricante de intermedios** (carta de febrero de 2025). Aparecieron hojas de lote originales rotas en la zona de chatarra y la empresa enseñó otro juego de las mismas hojas. Las hojas estaban en QA mientras se fabricaba y las tareas de los operadores las anotaba **más tarde** un supervisor que vigilaba cinco salas a la vez.

¿Hasta dónde llega la gravedad? La PIC/S, en su apartado 11.2, recuerda que el fraude o la falsificación de datos es una **deficiencia crítica**, la peor categoría. Y pone como ejemplo de deficiencia **mayor** usar «trozos de papel» para anotar y luego transcribir. Fíjate en que no hace falta mala intención: la PIC/S (6.1.6) dice que los fallos de integridad no se limitan al fraude; pueden ser involuntarios y aun así suponer un riesgo.

### Los nueve atributos, uno a uno
Las definiciones siguientes son un resumen en español de la tabla del apartado 7.5 de la PIC/S PI 041-1, que es la que define cada atributo. La OMS solo define la sigla en su glosario y explica varios atributos con ejemplos (anexo 4, apéndice 1); cuando lo uso, lo digo. La guía de la agencia británica MHRA (2018) no se ha podido leer en esta sesión: solo cito lo que reproducen la OMS y la PIC/S.

**1. Atribuible (*attributable*)**. Se puede identificar a la persona o al sistema informático que hizo la tarea y cuándo la hizo. Vale también para cada corrección o borrado: quién, cuándo y por qué (PIC/S 7.5). La OMS (ejemplo 6) añade que en papel se logra con iniciales, firma o sello personal controlado, y en electrónico con un usuario único por persona.
- Papel, bien: tus iniciales, las mismas que constan en el **registro de firmas e iniciales** de la planta. Mal: firmar el paso que hizo un compañero que ya se ha ido.
- Pantalla, bien: entras en el sistema de control con tu usuario. Mal: una cuenta común «turno_noche». La FDA (pregunta 5) explica que con una cuenta compartida no se puede identificar a nadie.

**2. Legible (*legible*)**. Todo registro se puede leer y no es ambiguo, hoy y durante todo el tiempo que haya que guardarlo (PIC/S 7.5).
- Papel, bien: números claros, con coma decimal y unidad. Mal: usar comillas («"») para repetir el dato de la línea de arriba; la PIC/S (8.6) lo pone como ejemplo de lo que no se acepta.
- Pantalla, bien: los datos se pueden abrir y leer años después. Mal: un archivo que solo abre una versión antigua del programa que ya nadie tiene. La OMS (ejemplo 5) avisa de este riesgo.

**3. Contemporáneo (*contemporaneous*)**. Lo que se hace o se decide se registra **cuando ocurre** (PIC/S 7.5). La OMS (ejemplo 7) concreta: ni antes ni después.
- Papel, bien: anotas el peso nada más leerlo, con la hora del reloj de planta. Mal: rellenar a las 6:00 lo de toda la noche.
- Pantalla, bien: el sistema pone fecha y hora solo y guarda cada entrada en cuanto la confirmas. La FDA (pregunta 12) dice que eso equivale a escribir a tinta cada casilla en el momento. Mal: dejar el dato en la pantalla sin confirmar y teclearlo después.

**4. Original (*original*)**. Es la **primera captura** de la información, en papel (estática) o electrónica (normalmente dinámica). Lo que nace dinámico debe seguir disponible en ese estado (PIC/S 7.5).
- Papel, bien: escribes directamente en la casilla de la hoja. Mal: apuntar en el guante o en un pósit y pasarlo luego. La FDA (pregunta 12) lo dice sin rodeos: no es aceptable anotar en papeles que se tiran tras copiarlos.
- Pantalla, bien: se conserva el archivo del cromatograma con sus datos. Mal: guardar solo un PDF y borrar el resto.

**5. Exacto (*accurate*)**. El registro es un **reflejo fiel de los hechos** (PIC/S 7.5). Se consigue con equipos cualificados y calibrados, procedimientos, gestión de desviaciones y personal formado.
- Papel, bien: copias la lectura tal cual, con todos sus decimales. Mal: redondear para que cuadre (lo verás en los casos).
- Pantalla, bien: si un dato crítico se teclea a mano, lo comprueba una segunda persona o el propio sistema (ICH Q7, 5.45; OMS, ejemplo 11). Mal: teclear 1804 en vez de 180,4 y que nadie lo revise.

**6. Completo (*complete*)**. Está toda la información necesaria para **reconstruir** lo que pasó; no se pierde ni se borra nada. En electrónico, incluye los metadatos (PIC/S 7.5).
- Papel, bien: todas las casillas llenas; las que no aplican, tachadas con N/A, fecha y firma (PIC/S 8.6). Mal: casillas vacías.
- Pantalla, bien: se guardan todos los resultados, también los que fallan. La FDA (pregunta 13) exige que estén todos, incluidos los erróneos y los sospechosos. Mal: repetir una medida y quedarse solo con la buena.

**7. Coherente (*consistent*; en la lección corta, «consistente»)**. Los datos se crean y se guardan de forma lógica y uniforme: orden cronológico, formato de fecha, unidades, forma de redondear, cifras significativas (PIC/S 7.5).
- Papel, bien: la fecha en el formato que fija la planta, por ejemplo dd/mm/aaaa (PIC/S 8.6). Mal: que «03/04» signifique 3 de abril en una página y 4 de marzo en otra, o que la descarga figure antes que la carga.
- Pantalla, bien: los relojes de todos los sistemas sincronizados con una hora oficial que el usuario no puede cambiar (OMS, 4.15). Mal: el sistema de control y el MES con siete minutos de diferencia, de modo que las alarmas parecen ocurrir antes de su causa.

**8. Duradero (*enduring*)**. Los registros existen, intactos y accesibles, todo el tiempo que puedan hacer falta (PIC/S 7.5).
- Papel, bien: tinta indeleble, nada de lápiz ni de bolígrafo borrable (OMS, 10.2). Mal: el ticket de una balanza en papel térmico, que se borra con el tiempo; de él se hace una copia verdadera firmada y fechada (PIC/S 8.6).
- Pantalla, bien: copias de seguridad que se restauran de vez en cuando para comprobar que funcionan (OMS, 11.19). Mal: el «archivo» en un segundo disco del mismo ordenador, como en la carta de 2025.

**9. Disponible (*available*)**. El registro se puede consultar en cualquier momento del periodo de conservación, en formato legible, por quien tenga que revisarlo: liberación, investigación, tendencias, auditoría o inspección (PIC/S 7.5).
- Papel, bien: la hoja está en su sitio y el archivo sabe dónde. Mal: una hoja olvidada en un cajón.
- Pantalla, bien: los datos están en la ubicación oficial. Mal: resultados en una carpeta personal o en una memoria USB. La OMS (ejemplo 4) dice que los datos no se guardan en otras carpetas.

### Datos brutos y metadatos
El **dato bruto** (*raw data*) es el registro original, la primera captura, en papel o electrónica (OMS y PIC/S, glosario).

Los **metadatos** (*metadata*) son la información de contexto que hace falta para entender un dato. La FDA (pregunta 1b) pone el ejemplo de que «23» no significa nada sin la unidad «mg». Otros metadatos: fecha y hora, usuario, equipo que midió, estado del material y registro de auditoría (*audit trail*).

La analogía con una base de datos:

| En una base de datos | En la planta |
|---|---|
| El valor de una celda | 180,4 |
| Las demás columnas de la fila | kg, balanza BA-07, usuario, fecha y hora, lote |
| La tabla de historial (o el «git log») | El audit trail: quién cambió qué, cuándo y por qué |

Sin las otras columnas, la celda no sirve. Por eso la PIC/S dice que los metadatos forman parte del registro original, y la FDA, que hay que conservarlos junto al dato todo el periodo de conservación.

### Registro estático y dinámico, y copia verdadera
- **Estático** (*static record*): fijo, casi no permite interacción. Una hoja de papel, un PDF, una foto.
- **Dinámico** (*dynamic record*): permite interactuar con el contenido. La FDA (pregunta 1d) pone dos ejemplos: un cromatograma en el que se puede mover la línea base y reprocesar, y una hoja de cálculo con fórmulas.

Un ticket de balanza o de pHmetro sin memoria es un original estático: se firma, se fecha y se adjunta a la hoja (PIC/S 8.9.1; FDA, pregunta 10). Un espectro o un cromatograma son dinámicos: su impresión no basta (FDA, pregunta 10).

Una **copia verdadera** (*true copy* o *certified true copy*) es una copia comprobada, con firma y fecha o mediante un proceso validado, que contiene la misma información que el original, incluidos el contexto, el contenido y la estructura (OMS, glosario). La PIC/S (7.7) describe cómo hacerla en papel: fotocopiar sin perder nada, comprobarla y firmarla y fecharla como «copia verdadera». De un registro electrónico se hace por medios electrónicos, con todos sus metadatos; un PDF no vale si se pierden metadatos.

### Buenas prácticas en papel
La OMS (10.4) y la PIC/S (8.4 a 8.7) piden, entre otras cosas:

| Qué | Por qué |
|---|---|
| Corrección con **una sola raya**, que deje leer lo anterior, con iniciales, fecha y motivo | Es el equivalente en papel del audit trail (OMS, 10.4) |
| Nada de corrector (corrector líquido), tachones ni escribir encima | Ocultan el dato original |
| Nada de lápiz ni goma | No es duradero y se puede cambiar |
| Nada de papeles sueltos | Se pierden y no se pueden controlar |
| Hojas y formularios **numerados** y **emitidos con control**, y conciliados al terminar | Así se ve si falta una hoja o si alguien ha usado otra |
| Cuadernos encuadernados y paginados | Se nota si falta una página |
| Registro de firmas e iniciales | Para saber de quién es cada marca |

La FDA (pregunta 6) va en la misma línea: los cuadernos encuadernados, paginados y sellados por control de documentos permiten detectar cuadernos no oficiales y páginas que faltan. Los formularios en blanco los controla la unidad de calidad (u otro método de control de documentos), se entregan en juegos numerados y se concilian al acabar. Un formulario que se estropea **no se tira**: se guarda con el motivo por el que se sustituyó. Justo lo contrario de las hojas rotas de la chatarra.

ICH Q7 (6.14) resume la regla para un API: anotar de forma indeleble, en el espacio previsto, justo después de la actividad, identificando a quien anota; las correcciones, fechadas y firmadas, dejando legible lo original. Lo tienes desarrollado en [La hoja de producción a fondo](/leccion/hoja-de-produccion-a-fondo).

¿Y si no puedes escribir mientras trabajas? La OMS (ejemplo 7) y la PIC/S (nota 8) admiten un **escribiente** (*scribe*), otra persona que anota por ti, solo en casos excepcionales y por procedimiento. Esa persona anota en el momento, el registro identifica a los dos y quien hizo la tarea firma después cuando sea posible.

### Cultura de calidad y presión del turno
La PIC/S dedica todo su capítulo 6 a cómo influyen el comportamiento de las personas y la organización. Las ideas principales:

- La empresa debe crear una **cultura de calidad** abierta, en la que se puedan contar errores y fallos sin miedo (6.3.1).
- En una cultura «cerrada», donde cuesta llevar la contraria al jefe o contar un fallo, hace falta más supervisión (6.1.3 y 6.1.4).
- Hay que vigilar las influencias indirectas: **presión indebida**, incentivos de productividad por encima de lo que da el proceso y que la gente se justifique a sí misma las malas conductas (6.1.6).
- Debe existir un canal **confidencial** para avisar de posibles incumplimientos sin represalias (6.2.6), y la dirección debe fijar expectativas realistas y poner los recursos necesarios (6.3.3 y 6.6.1).

La OMS (4.5) añade que la dirección debe favorecer que se informe abiertamente de desviaciones, errores y omisiones. La FDA, en la introducción de su guía, dice que sin el apoyo de la dirección a esa cultura los sistemas de calidad se vienen abajo.

Para ti, en el turno, se traduce en una frase: **un dato incómodo bien registrado es un problema pequeño; un dato bonito inventado es un problema enorme**. Si no te da tiempo a anotar, no es tu fallo personal: es una señal de que algo en el proceso o en la plantilla no funciona, y hay que contarlo.

### Casos del turno
**Caso 1. Lo de las 3:00 se anota a las 6:40.** A las 3:00 subió la temperatura del reactor y bajaste la consigna. Lo apuntas al final del turno. Retraso: de 3:00 a 6:40 son 220 minutos. Supón que tu procedimiento ficticio pide anotar en un máximo de 5 minutos (valor de ejemplo). Ya no es contemporáneo. Lo correcto: anotar ahora con la hora real en que escribes, indicar que el hecho ocurrió a las 3:00, comunicarlo y seguir el procedimiento de desviaciones. La tendencia del sistema de control es más fiable que tu memoria. Nunca escribas «03:00» como si lo hubieras anotado entonces.

**Caso 2. Firmar por un compañero.** Íker hizo la carga y se fue sin firmar. Te pide por teléfono que firmes tú «que ya está hecho». No. Solo puede firmar quien hizo la tarea (PIC/S 8.6). Lo dejas sin firmar, avisas al supervisor y que se gestione según el procedimiento.

**Caso 3. Redondear una lectura.** La hoja pide entre 179,0 y 181,0 kg. La balanza marca 181,04 kg. Escribir «181,0» deja el dato dentro del límite, pero la carga real se ha pasado 0,04 kg, es decir, 40 g. Es inexacto y oculta una desviación. Anota 181,04 y avisa. Si la hoja fija cuántos decimales anotar, se sigue lo que diga; la PIC/S incluye la forma de redondear entre lo que debe estar definido (7.5, coherente).

**Caso 4. El folio en el bolsillo.** Para no mancharte apuntas las lecturas de la centrífuga en un folio y las pasas luego a la hoja. Ese folio sería el original y luego se tira: es justo lo que la FDA criticó en la carta de 2025. Si la hoja no está a mano en el punto de uso, dilo: la PIC/S (8.6) espera que el registro esté donde se trabaja.

**Caso 5. La sesión abierta.** Un compañero teclea un dato con tu usuario porque te dejaste el terminal abierto. El audit trail dirá que fuiste tú. Bloquea siempre la sesión. Lo ves en [Audit trail y firma electrónica](/leccion/audit-trail-y-firma-electronica).

### En resumen
Escribe tú, en el momento, en el sitio previsto, lo que de verdad ves. Si algo no encaja, regístralo tal cual y avisa. Sigue con [Las normas: 21 CFR Part 11, Anexo 11 y guías de integridad de datos](/leccion/part-11-y-anexo-11) y [Usuarios, revisión del audit trail, copias de seguridad y archivo](/leccion/accesos-copias-y-archivo).

Los códigos, límites y tiempos de esta lección son ejemplos. En planta manda siempre el procedimiento vigente (SOP): él dice cómo se anota, se corrige, se verifica y se archiva en tu empresa.
`,
  plant: `
Turno de noche. Lucía, operadora, seca el lote RT-26-118 del intermedio ficticio RT-58 en el secadero SD-305. La hoja pide anotar cada hora la temperatura del producto y el vacío, y la hoja lleva el número de emisión 0412 y las páginas «4 de 12».

A las 2:00 suena la alarma de pérdida de vacío del SD-305: la bomba se ha parado. Lucía sigue el procedimiento, avisa al supervisor y rearma la bomba a las 2:12. Con el lío, no anota la lectura de las 2:00 hasta las 2:20.

No escribe «2:00» como si nada. Anota la lectura que guardó el sistema de control para las 2:00, y al lado escribe: «Anotado a las 2:20, dato tomado de la tendencia del SD-305; parada de bomba de 2:00 a 2:12, comunicado al supervisor». Iniciales y fecha.

A las 4:00 se da cuenta de que en la lectura de las 3:00 escribió 45,8 °C y la pantalla marcaba 48,5 °C. Tacha 45,8 con una sola raya, escribe 48,5 °C, sus iniciales, la fecha y «error al transcribir».

A las 5:00 la página 4 se moja con agua de la limpieza. No la tira. Pide una página de repuesto a QA, que la entrega numerada y registrada. Lucía pega o guarda la página mojada junto a la nueva, con una nota que explica el cambio.

Al revisar el lote, QA ve todo lo que pasó y por qué. No hay huecos ni sorpresas.
`,
  batchRecord: `
- Cada dato con su valor tal cual, unidad, hora real e iniciales del registro de firmas.
- Correcciones con una sola raya, el dato anterior legible, el nuevo, iniciales, fecha y motivo.
- Casillas que no aplican tachadas con N/A, fecha e iniciales.
- Si algo se anotó tarde: la hora real en que se anota y la hora del hecho, con su explicación.
- Tickets de balanza firmados, fechados y adjuntos; si son de papel térmico, con su copia verdadera.
- Hojas y páginas numeradas y emitidas por QA; las estropeadas se guardan con el motivo del cambio.
- En pantalla: tu usuario, las fechas y horas del sistema y, si cambias un dato, el motivo en el audit trail.
`,
  terms: [
    { es: "Integridad de datos", en: "Data integrity", def: "Grado en que los datos son completos, coherentes y exactos, y se mantienen así durante todo su ciclo de vida." },
    { es: "ALCOA+", en: "ALCOA+", def: "Atribuible, legible, contemporáneo, original y exacto, más completo, coherente, duradero y disponible." },
    { es: "Ciclo de vida del dato", en: "Data lifecycle", def: "Todas las fases del dato: creación, proceso, revisión, uso, conservación, archivo y destrucción." },
    { es: "Dato bruto", en: "Raw data", def: "Registro original: la primera captura de la información, en papel o electrónica." },
    { es: "Metadatos", en: "Metadata", def: "Información de contexto que da sentido a un dato: unidad, usuario, fecha y hora, equipo, audit trail." },
    { es: "Registro estático", en: "Static record", def: "Registro fijo que casi no permite interacción, como el papel o un PDF." },
    { es: "Registro dinámico", en: "Dynamic record", def: "Registro que permite interactuar con su contenido, como un cromatograma reprocesable o una hoja de cálculo." },
    { es: "Copia verdadera", en: "True copy", def: "Copia comprobada, con firma y fecha o por un proceso validado, con la misma información y contexto que el original." },
    { es: "Buenas prácticas de documentación", en: "Good documentation practices (GdocP)", def: "Medidas que hacen que la documentación, en papel o electrónica, cumpla ALCOA+." },
    { es: "Escribiente", en: "Scribe", def: "Segunda persona que anota por otra; solo en casos excepcionales y según procedimiento." },
    { es: "Registro de firmas e iniciales", en: "Signature and initials log", def: "Lista controlada que relaciona a cada persona con su firma e iniciales." },
    { es: "Cultura de calidad", en: "Quality culture", def: "Valores y conductas de toda la organización que permiten contar errores y fallos sin miedo." },
    { es: "Formulario en blanco controlado", en: "Controlled blank form", def: "Hoja numerada que emite y concilia la unidad de calidad para registrar datos GMP." },
  ],
  quiz: [
    {
      kind: "choice",
      q: "Según la guía de la FDA de 2018, la integridad de datos se refiere a:",
      options: [
        "La rapidez y el coste con que se registran los datos",
        "La completitud, la coherencia y la exactitud de los datos",
        "La cantidad de datos que guarda cada sistema informático",
        "La seguridad física del archivo de papel de la planta",
      ],
      answer: 1,
      explain: "La FDA la define como completitud, coherencia y exactitud, y pide que los datos sean ALCOA.",
    },
    {
      kind: "choice",
      q: "La balanza marca 181,04 kg y la hoja admite de 179,0 a 181,0 kg. ¿Qué anotas?",
      options: [
        "181,0 kg, porque con un decimal ya cumple el límite",
        "180,9 kg, para dejar un pequeño margen de seguridad",
        "Nada hasta que pase el supervisor y decida qué poner",
        "181,04 kg, tal cual, y aviso de que se ha superado el límite",
      ],
      answer: 3,
      explain: "Redondear para entrar en el límite no es exacto y oculta una desviación; se anota la lectura real y se comunica.",
    },
    {
      kind: "number",
      q: "Un hecho ocurrió a las 3:00 y lo anotas a las 6:40 del mismo turno. ¿Cuántos minutos de retraso hay?",
      answer: 220,
      tolerance: 0,
      unit: "min",
      explain: "De 3:00 a 6:40 hay 3 horas y 40 minutos: 3 × 60 + 40 = 220 minutos. No es contemporáneo.",
    },
    {
      kind: "number",
      q: "En la hoja (valor de ejemplo) anotas la temperatura cada 30 minutos desde las 22:30 hasta las 6:00, ambas incluidas. ¿Cuántas anotaciones debe haber?",
      answer: 16,
      tolerance: 0,
      unit: "anotaciones",
      explain: "De 22:30 a 6:00 hay 7,5 horas, que son 15 intervalos de 30 minutos; contando la primera lectura salen 16 anotaciones.",
    },
    {
      kind: "number",
      q: "La planta usa el ejemplo de tolerancia de 5 minutos para anotar. Un dato de las 14:10 se anota a las 14:13. ¿Cuántos minutos te quedaban de margen?",
      answer: 2,
      tolerance: 0,
      unit: "min",
      explain: "El retraso es de 3 minutos; frente a los 5 del ejemplo quedan 5 − 3 = 2 minutos de margen.",
    },
    {
      kind: "choice",
      q: "Para no mancharte, apuntas las lecturas de la centrífuga en un folio y luego las pasas a la hoja. ¿Qué atributo falla sobre todo?",
      options: [
        "Original: el folio es la primera captura y se perdería",
        "Legible: un folio siempre se lee peor que una hoja",
        "Disponible: la hoja de producción no estaría archivada",
        "Coherente: las unidades del folio serían diferentes",
      ],
      answer: 0,
      explain: "La FDA no acepta anotar en papeles que se tiran tras copiarlos: el original sería el folio y no se conservaría.",
    },
    {
      kind: "choice",
      q: "¿Qué es un registro dinámico según la FDA?",
      options: [
        "Un registro que se actualiza solo cada noche en el servidor",
        "El que permite interactuar con el contenido, como un cromatograma reprocesable",
        "Cualquier registro escrito durante un turno de trabajo",
        "Una hoja de papel con casillas que se rellenan a mano",
      ],
      answer: 1,
      explain: "La FDA llama dinámico al registro con el que se puede interactuar, como un cromatograma o una hoja de cálculo con fórmulas.",
    },
    {
      kind: "choice",
      q: "El ticket de la balanza es de papel térmico. ¿Qué hace falta para que sea duradero?",
      options: [
        "Guardarlo en un cajón oscuro y no tocarlo nunca más",
        "Repasar las cifras con bolígrafo cuando empiecen a borrarse",
        "Hacer una copia verdadera firmada y fechada y guardarla con el ticket",
        "Escanearlo a PDF y tirar el original para ahorrar espacio",
      ],
      answer: 2,
      explain: "La PIC/S avisa de que el papel térmico se borra y pide copias verdaderas indelebles, firmadas y fechadas.",
    },
    {
      kind: "choice",
      q: "Una página de la hoja se moja con agua de la limpieza y no se puede usar. ¿Qué haces?",
      options: [
        "La tiro y copio los datos en una fotocopia del original",
        "La dejo secar y sigo escribiendo encima con más fuerza",
        "Arranco la página y pido otra hoja completa nueva",
        "Pido a QA una página numerada de repuesto y guardo la mojada con el motivo",
      ],
      answer: 3,
      explain: "La FDA pide que los formularios estropeados se conserven con la justificación de su sustitución; tirarlos rompe la trazabilidad.",
    },
    {
      kind: "choice",
      q: "Según la PIC/S, ¿qué debe pasar en una cultura de calidad cuando alguien comete un error al registrar?",
      options: [
        "Que lo cuente sin miedo para que se corrija y se prevenga",
        "Que lo arregle discretamente antes de la revisión de QA",
        "Que espere a ver si alguien lo detecta en la auditoría",
        "Que lo comente solo con el compañero del turno siguiente",
      ],
      answer: 0,
      explain: "La PIC/S pide un entorno abierto donde se comuniquen fallos y errores libremente para poder aplicar acciones correctoras y preventivas.",
    },
  ],
};
