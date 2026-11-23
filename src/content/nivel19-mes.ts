import type { Lesson } from "./types";

export const mesAFondo: Lesson = {
  slug: "mes-y-ebr-a-fondo",
  level: 19,
  order: 4,
  title: "MES y hoja de producción electrónica a fondo",
  titleEn: "MES and electronic batch records in depth",
  minutes: 38,
  summary:
    "Cómo se convierte la receta maestra en pantallas, qué comprueba el sistema en cada paso de una carga real ficticia (usuario, equipo, pesada con tolerancia, lotes, segunda persona, datos del control, límites y comentarios), cómo funciona la revisión por excepción, qué exigen 21 CFR 11 y el anexo 11 a la firma electrónica, qué se hace cuando el sistema cae y cómo se corrigen los errores sin perder trazabilidad.",
  body: `
En [MES y hoja de producción electrónica](/leccion/mes-y-ebr) viste la idea general, y en [La hoja de producción a fondo: de la instrucción maestra a la revisión del lote](/leccion/hoja-de-produccion-a-fondo) qué debe recoger una hoja de lote. Aquí verás qué comprueba el sistema, qué sigue dependiendo de ti y cómo se arregla un error sin borrar nada.

### Qué es un MES y qué es un EBR
Un **sistema de ejecución de fabricación** (*manufacturing execution system*, MES) es el programa que guía la fabricación en planta: te dice qué hacer en cada paso, comprueba lo que haces y lo registra. La **hoja de producción electrónica** (*electronic batch record*, EBR) es el registro del lote que el MES va rellenando mientras fabricas. El MES es la aplicación; el EBR, el documento de cada lote.

Las reglas no cambian por estar en pantalla. ICH Q7 admite documentos en papel o electrónicos (6.10), y la guía de la FDA sobre integridad de datos de 2018 (*Data Integrity and Compliance With Drug CGMP*) lo resume así: los sistemas en papel y los electrónicos están sometidos a los mismos requisitos. Lo que cambia es quién vigila cada regla.

| Tema | Hoja en papel | Hoja electrónica |
|---|---|---|
| Orden de los pasos | Lo respetas tú; nada impide saltarse uno | El sistema no abre un paso hasta cerrar el anterior, si así se configuró |
| Pesos | Lees la báscula y copias el número | La balanza conectada envía el valor; no lo tecleas |
| Material correcto | Comparas la etiqueta con la hoja a ojo | Escaneas el código y el sistema lo compara con la orden |
| Rango | Comparas tú el dato con el rango impreso | El sistema compara y bloquea o avisa |
| Firma | Iniciales con bolígrafo | Usuario y contraseña, con nombre, fecha, hora y significado |
| Corrección | Una raya, valor nuevo, fecha y firma | El registro de auditoría (*audit trail*) guarda el valor anterior, quién, cuándo y por qué |
| Revisión | Calidad lee todas las casillas | Calidad se centra en las excepciones que marca el sistema |

El anexo 11 de las GMP europeas lo pone como condición en su principio: si un sistema informatizado sustituye a una operación manual, no debe empeorar la calidad del producto, el control del proceso ni la garantía de calidad.

### La receta maestra convertida en pantallas
Piensa en un formulario web por pasos (*wizard*): no te deja pasar a la pantalla 3 sin rellenar la 2 y marca en rojo un código postal imposible. Un EBR es eso, aplicado a la instrucción maestra de producción.

- **Cada paso de la instrucción maestra es una pantalla.** Lleva el texto de la instrucción, los datos que hay que capturar y el rango de cada uno.
- **Cada dato tiene un tipo y una validación.** Un peso es un número con unidad y decimales fijos; un lote de material es un código que debe existir y estar aprobado.
- **El orden está fijado.** La norma estadounidense 21 CFR 11 pide comprobaciones del sistema que obliguen a seguir la secuencia permitida de pasos y sucesos, cuando proceda (11.10(f)).
- **Cada firma tiene su sitio.** El paso dice quién firma y con qué significado: realizado, verificado, revisado.

Un EBR mal configurado acepta un dato absurdo y fabrica un lote con él. Por eso se valida. La guía de la FDA de 2018 pone este ejemplo: cualificar la plataforma MES no demuestra que la instrucción maestra montada en ella tenga los cálculos correctos; hay que validar ese flujo (pregunta 3). Y el anexo 11 pide que las pruebas tengan en cuenta los límites de parámetros, los límites de datos y el manejo de errores (4.7). Para ti: la pantalla está aprobada y probada. Si algo parece mal, no lo rodeas: avisas.

### Una operación paso a paso
Sigue un paso de un lote ficticio. Todos los códigos, cantidades y tolerancias son valores de ejemplo. Paso 14 del lote L-27-118 del intermedio ficticio TQ-8: «Cargar en el reactor R-402 180,0 kg de la materia prima SB-6, tolerancia ±0,5 %. Pesada crítica: verificación por segunda persona».

**1. Identificarte.** Entras en el terminal del MES con tu usuario y tu contraseña. Nunca con una sesión que alguien dejó abierta. La guía de integridad de datos de PIC/S (PI 041-1, apartado 9.5) pide prohibir las credenciales compartidas, porque no permiten saber quién hizo cada cosa, y cerrar la sesión por inactividad. Part 11 pide limitar el acceso a personas autorizadas (11.10(d)) y que cada usuario solo haga lo que su perfil permite (11.10(g)).

**2. Equipo limpio y en buen estado.** Escaneas la etiqueta del R-402. El MES consulta su estado: limpio, con la limpieza dentro de su plazo de validez y sin orden de mantenimiento abierta. ICH Q7 admite que el estado de los equipos principales se indique en un sistema informático (8.16). Si figura «sucio» o «en mantenimiento», el paso no se abre. Tú sigues mirando: si la pantalla dice «limpio» y ves restos en la boca de hombre, manda lo que ves. Avisa.

**3. Pesada con balanza conectada.** La balanza de suelo BP-41 está conectada al MES. Antes de pesar, el sistema comprueba que es una balanza permitida para ese paso y que su calibración está vigente. Part 11 lo prevé como comprobación del dispositivo de origen de los datos (11.10(h)). Las reglas de la propia pesada están en [Balanzas y pesada a fondo: del gramo al kilo con un resultado en el que se pueda confiar](/leccion/balanzas-a-fondo).

La cuenta de la tolerancia, despacio:

1. Cantidad objetivo: 180,0 kg. Tolerancia: ±0,5 %.
2. El 0,5 % de 180,0 kg: 180,0 × 0,5 / 100 = 0,9 kg.
3. Límite inferior: 180,0 − 0,9 = 179,1 kg.
4. Límite superior: 180,0 + 0,9 = 180,9 kg.

Colocas el bidón y el MES registra la tara, el peso del bidón vacío que figura en su etiqueta: 16,0 kg. Viertes SB-6 hasta que la pantalla da un bruto de 196,4 kg. El neto es 196,4 − 16,0 = 180,4 kg. Está entre 179,1 y 180,9 kg: la barra se pone en verde y el botón «Confirmar» se activa. Si hubieras llegado a 181,2 kg, el botón no se activaría: tendrías que retirar material hasta entrar en la banda.

| Neto en pantalla | ¿Dentro de 179,1 a 180,9 kg? | Qué hace el MES ficticio de este ejemplo |
|---|---|---|
| 178,8 kg | No, falta material | No deja confirmar: añade |
| 180,4 kg | Sí | Deja confirmar |
| 181,2 kg | No, sobra material | No deja confirmar: retira |

**4. Escaneo del lote de materia prima.** Escaneas la etiqueta del bidón. El MES comprueba tres cosas: que el material es SB-6 y no otro, que ese lote figura en la orden y que está aprobado. ICH Q7 pide comprobar antes de usarlo que el material es el que indica la hoja (8.12) y mantenerlo en cuarentena hasta aprobarlo para su uso (7.20). Si escaneas un lote en cuarentena, la pantalla lo rechaza. No se carga, aunque «el laboratorio lo vaya a aprobar seguro».

**5. Verificación por segunda persona.** Es una pesada crítica. ICH Q7 pide que esté presenciada o tenga un control equivalente (8.12), y que los datos críticos tecleados a mano tengan una comprobación adicional, por un segundo operador o por el propio sistema (5.45). Tu compañero mira la etiqueta del bidón y la pantalla de la balanza, y firma con su propio usuario y su contraseña. El MES de este ejemplo no acepta que el verificador sea quien hizo el paso. Si él no ha visto la pesada, no firma, igual que en papel.

**6. Datos del sistema de control.** Al terminar la carga, el MES pide al sistema de control la temperatura del R-402 y el estado del agitador, y los guarda en el paso. No los tecleas. PI 041-1 (9.7) pide que esa interfaz esté validada y que el sistema compruebe que el dato llega completo, e ICH Q7 pide controles que eviten huecos en los datos (5.43). Si el valor no llega, la pantalla lo dice. No lo copias de la pantalla del control y lo tecleas por tu cuenta: avisas y sigues lo que diga el procedimiento.

**7. Límites que bloquean o que avisan.** Cada dato puede tener dos tipos de límite, según lo que se decidió al configurar y validar la instrucción:

| Tipo | Qué hace | Ejemplo ficticio |
|---|---|---|
| **Límite que bloquea** (*hard limit*) | No deja continuar hasta que el dato está dentro | La banda de 179,1 a 180,9 kg de la pesada |
| **Límite que avisa** (*soft limit*) | Deja continuar, pero exige un comentario y marca el dato como excepción | Una temperatura de carga de 27 °C cuando lo esperado es 15 a 25 °C |

Qué dato bloquea y cuál avisa no lo decides tú: viene de la instrucción maestra y de su validación. El borrador de 2025 del anexo 11 (no en vigor) propone que el sistema avise cuando un dato crítico tecleado no sea plausible (10.1).

**8. Comentarios y excepciones.** Cuando un dato sale del rango de aviso, el MES no lo oculta ni lo redondea: lo guarda tal cual, lo marca y te pide un comentario. Un buen comentario cuenta hechos: qué viste, a qué hora, a quién avisaste y qué número de desviación se abrió, si se abrió. «Temperatura de 27,0 °C a las 09:40 por bidón almacenado al sol en el muelle; avisada la jefa de turno; desviación DV-27-031» sirve. «Correcto» o «revisado» no sirven. ICH Q7 pide que toda desviación se documente y se explique (8.15).

### La revisión por excepción
Antes de liberar, calidad revisa y aprueba los registros de los pasos críticos (ICH Q7, 6.71) junto con las desviaciones e investigaciones (6.72). En papel eso es leer cientos de casillas buscando la vacía, la cuenta mal hecha o la firma que falta.

En un EBR, parte de ese trabajo lo hizo el sistema mientras fabricabas: no dejó confirmar un peso fuera de banda ni saltar un paso. Si esas comprobaciones están validadas, el revisor puede centrarse en lo que el sistema ha marcado. A eso se le llama **revisión por excepción** (*review by exception*).

El documento que lo hace posible es el **informe de excepciones** (*exception report*). La guía PI 041-1 lo define como una herramienta de búsqueda validada que identifica y documenta datos o acciones «anormales» definidos de antemano y que requieren más atención o investigación por parte del revisor. En el EBR ficticio de esta lección recoge cosas como estas:

- Datos fuera del rango de aviso, con el comentario del operador.
- Pasos repetidos, anulados o completados fuera de orden con autorización.
- Datos tecleados a mano porque no llegaron por la interfaz.
- Cambios de datos después de introducidos, con su valor anterior y su motivo.
- Avisos de interfaz y periodos de contingencia en papel.

¿Por qué acelera la liberación? Porque el revisor lee un informe corto con lo raro, en vez de buscarlo entre todo lo normal. Con valores de ejemplo: si un EBR tiene 240 datos y el informe marca 6, el revisor estudia a fondo el 2,5 % (6 / 240 × 100) y para el resto se apoya en controles validados. No es revisar menos: es revisar con otra herramienta. Tres condiciones:

- **El informe tiene que estar validado.** Si no detecta lo que debe, lo raro pasa sin que nadie lo vea.
- **El registro de auditoría también se revisa.** PI 041-1 (9.8) espera revisarlo antes de usar los datos críticos para liberar el lote, y su apartado 9.6 cita la revisión por excepción para centrar esa revisión en lo anómalo o no autorizado. La guía de la FDA la compara con mirar los tachones de una hoja en papel (pregunta 7).
- **Depende de tus comentarios.** Si tu comentario dice «correcto», el revisor tiene que buscarte para preguntar. El lote espera.

### La firma electrónica
Cuando el MES te pide la contraseña para confirmar un paso, estás firmando. Las reglas completas están en el nivel 20, en [Las normas: 21 CFR Part 11, Anexo 11 y guías de integridad de datos](/leccion/part-11-y-anexo-11) y [Audit trail y firma electrónica](/leccion/audit-trail-y-firma-electronica). En un EBR:

- **Qué muestra la firma.** Part 11 (11.50) pide que el registro firmado indique el nombre impreso de quien firma, la fecha y hora de la firma y su significado (revisión, aprobación, responsabilidad o autoría), y que eso aparezca en la pantalla y en la impresión.
- **Unida al registro.** No se puede quitar, copiar ni trasladar a otro registro para falsificarlo (11.70). El anexo 11 (apartado 14) pide que tenga dentro de la empresa el mismo efecto que la manuscrita, quede unida para siempre a su registro e incluya fecha y hora. PI 041-1 (9.5) añade que, si se cambia un dato ya firmado, el registro debe aparecer como no firmado hasta revisarlo y firmarlo otra vez.
- **De una sola persona.** Cada firma es única de una persona y no se reutiliza ni se reasigna (11.100).
- **Dos componentes.** Si no es biométrica, usa al menos dos, como usuario y contraseña. En una sesión continua, la primera firma usa todos y las siguientes al menos uno que solo tú puedes usar (11.200).

ICH Q7 lo resume: las firmas electrónicas deben estar autenticadas y ser seguras (6.18). El borrador de 2025 del anexo 11 propone volver a identificarse por completo al firmar (13.3); mientras no se publique la versión final, sigue en vigor el anexo 11 de 2011.

### Cuando el MES se cae
El anexo 11, apartado 16, pide que los sistemas que soportan procesos críticos tengan prevista una alternativa si se averían, por ejemplo un sistema manual, documentada y probada. ICH Q7 admite registrar datos por un segundo medio además del ordenador (5.49). La caída vista desde el turno está en [El mapa de sistemas de una planta a fondo](/leccion/mapa-de-sistemas-a-fondo); aquí, qué pasa con los papeles.

**Durante la caída.** Se usan formularios de contingencia aprobados y numerados. La guía de la FDA (pregunta 6) pide que los formularios en blanco estén controlados, que los juegos numerados se concilien al terminar y que los incompletos o con errores se guarden en el registro con la justificación de su sustitución. Anotas lo mismo que pedía la pantalla, con las reglas del papel: valor real con unidad, hora, iniciales y segunda firma en los pasos críticos.

**Al volver el sistema.** La reconciliación, en orden:

1. **Se anota la hora de caída y la de recuperación** en el MES y en el papel.
2. **Se comprueba qué registró el MES antes de caer.** Un paso a medio confirmar puede haberse guardado o no: se mira antes de teclear, para no duplicar ni perder datos.
3. **Se introducen los datos del papel** en el MES con la referencia del formulario. Son datos críticos tecleados a mano: el anexo 11 (apartado 6) pide una comprobación adicional, por una segunda persona o por medios electrónicos validados. Tu compañero compara cada valor con el original en papel, no con lo que acabas de escribir.
4. **El papel se queda.** El original se adjunta al lote: PI 041-1 (9.10) pide conservar los datos originales tras transcribirlos.
5. **Se concilian los formularios.** Si se entregaron tres copias numeradas, se devuelven tres, usadas o anuladas.
6. **La caída se registra como incidencia** y se evalúa (anexo 11, apartado 13; ICH Q7, 5.46).

### Errores típicos del operador en un EBR y cómo se corrigen
En un EBR no se tacha: se usa la función de corrección, que guarda el valor anterior, el nuevo, quién, cuándo y el motivo. ICH Q7 (5.43) pide registrar cada cambio con la entrada anterior, quién y cuándo, y el anexo 11 (apartado 9), el motivo. Nunca se borra el dato malo para rehacer el paso como si nada.

| Error | Qué pasa | Cómo se corrige sin perder trazabilidad |
|---|---|---|
| Teclear 18,4 en lugar de 184,0 en un dato manual | Si hay límite que bloquea, el sistema no lo acepta; si solo avisa, queda marcado | Antes de firmar, se corrige en la casilla. Si ya está firmado, corrección con motivo y nueva verificación según SOP |
| Confirmar un paso antes de hacerlo | El registro dice que algo ocurrió cuando no había ocurrido | Avisar en el momento; se anula o corrige con motivo según SOP y se valora si es una desviación |
| Escanear el bidón equivocado y que el sistema lo rechace | No es un error del registro: el control funcionó | Apartar el bidón, escanear el correcto; el intento rechazado queda en el registro |
| Firmar con la sesión de otra persona | El registro atribuye a otro lo que hiciste tú | Avisar de inmediato; no «arreglarlo» tú. Se investiga según SOP |
| Comentario vacío o «correcto» en una excepción | El revisor no sabe qué pasó | Añadir un comentario completo; el original queda en el historial |
| Teclear un dato que debía llegar por interfaz | Se pierde el origen del dato | Solo si el procedimiento lo prevé, con verificación de segunda persona y comentario |
| Repetir un paso para que el valor «salga bien» | Se ocultan datos reales | Nunca. Todos los intentos quedan registrados y se revisan |

Una regla resume la tabla: el registro de auditoría ya guarda lo que hiciste, así que lo único que puedes elegir es si además queda explicado.

Los sistemas, códigos, cantidades y tolerancias de esta lección son ficticios. En planta manda siempre el procedimiento vigente (SOP): él dice qué datos bloquean, cuáles avisan, quién verifica, cómo se corrige y qué se hace si el sistema cae.
`,
  plant: `
Turno de tarde en la planta ficticia P3. Aitor, operador, sigue en el terminal T-402 el lote L-27-120 del intermedio ficticio TQ-8. Paso 22: «Cargar 150,0 kg de disolvente DS-4, tolerancia ±0,5 %». La pantalla le da la banda: de 149,25 a 150,75 kg.

Escanea el R-402: «Limpio». Escanea el primer bidón: el MES lo rechaza con el mensaje «Lote en cuarentena». Aitor lo aparta, escanea el segundo, que figura en la orden y está aprobado, y empieza a trasvasar con la balanza BP-41. La pantalla se para en 150,3 kg. Su compañera Leire mira la etiqueta y la balanza y firma la verificación con su usuario.

Al confirmar, el MES pide al sistema de control la temperatura del reactor. No llega: «Sin respuesta de la interfaz». Aitor no la copia por su cuenta de la pantalla de control. Avisa al jefe de turno, que consulta el procedimiento. Este permite, en ese caso, anotar el valor a mano con verificación: Aitor teclea 18,6 °C, Leire lo compara con la pantalla del control y firma, y Aitor escribe el comentario: «Interfaz con el control sin respuesta a las 17:42; valor tecleado según SOP con verificación; avisado el jefe de turno; incidencia IN-27-044».

Dos días después, Nuria, de calidad, revisa el lote. El informe de excepciones tiene cuatro entradas: el bidón rechazado, el dato tecleado con su comentario, una temperatura de carga fuera del rango de aviso, comentada, y una corrección hecha con motivo. Las cuatro están explicadas. Comprueba en el historiador que la temperatura del reactor a las 17:42 era 18,6 °C, revisa el registro de auditoría del lote y sigue con el resto del expediente. No ha tenido que llamar a nadie.
`,
  batchRecord: `
En un EBR no rellenas casillas con bolígrafo, pero cada paso deja un registro con estos elementos. Es lo que verías al abrir el paso en el historial o en la impresión del lote:

- **Cabecera del lote**: producto, número de lote, número de orden del ERP, instrucción maestra y su versión, equipo principal con su código.
- **Identidad de quien hace el paso**: nombre impreso, usuario, fecha y hora de la firma y su significado («realizado»).
- **Equipo**: código escaneado (p. ej. R-402) y su estado en ese momento («limpio», con la fecha de limpieza).
- **Pesada**: balanza usada (p. ej. BP-41), tara, bruto y neto que envió la balanza, objetivo y banda (p. ej. 180,0 kg, de 179,1 a 180,9 kg) y si el dato llegó por la interfaz o se tecleó.
- **Materiales**: código y lote de cada envase escaneado y su estado; los intentos rechazados también figuran.
- **Verificación**: nombre de la segunda persona, fecha y hora y significado («verificado»).
- **Datos del sistema de control**: valor, unidad, hora y origen (p. ej. temperatura del R-402).
- **Excepciones**: dato fuera del rango de aviso, comentario del operador y referencia a la desviación o incidencia si la hay.
- **Correcciones**: valor anterior, valor nuevo, quién, cuándo y motivo.
- **Contingencia**: horas de caída y vuelta del sistema, número de los formularios en papel adjuntos y verificación de los datos introducidos después.

Tú no escribes la fecha ni la hora: las pone el sistema. Tú sí respondes de que el dato que confirmas es lo que ha pasado de verdad.
`,
  terms: [
    { es: "Sistema de ejecución de fabricación", en: "Manufacturing execution system (MES)", def: "Programa que guía la fabricación en planta paso a paso, comprueba lo que hace el operador y registra el lote." },
    { es: "Hoja de producción electrónica", en: "Electronic batch record (EBR)", def: "Registro de fabricación de un lote que se crea y se guarda en un sistema informatizado, con las mismas exigencias que el de papel." },
    { es: "Instrucción maestra de producción", en: "Master production instruction (master production and control record)", def: "Documento aprobado que dice cómo se fabrica un producto; en un EBR se convierte en una secuencia de pantallas validada." },
    { es: "Comprobación de secuencia", en: "Operational system check (sequencing)", def: "Control del sistema que obliga a seguir el orden permitido de pasos y sucesos (21 CFR 11.10(f))." },
    { es: "Comprobación del dispositivo", en: "Device check", def: "Control que verifica que un dato o una orden vienen de un origen válido, como una balanza autorizada para ese paso (21 CFR 11.10(h))." },
    { es: "Tolerancia de pesada", en: "Weighing tolerance", def: "Margen permitido alrededor de la cantidad objetivo; con ±0,5 % sobre 180,0 kg, la banda va de 179,1 a 180,9 kg (valores de ejemplo)." },
    { es: "Verificación por segunda persona", en: "Second-person verification", def: "Comprobación de un paso crítico o de un dato tecleado por otra persona, que firma con su propio usuario." },
    { es: "Límite que bloquea", en: "Hard limit", def: "Límite que no deja continuar hasta que el dato está dentro del rango." },
    { es: "Límite que avisa", en: "Soft limit", def: "Límite que deja continuar, pero exige comentario y marca el dato como excepción para la revisión." },
    { es: "Informe de excepciones", en: "Exception report", def: "Herramienta de búsqueda validada que identifica y documenta datos o acciones anormales definidos de antemano para que el revisor los estudie (PIC/S PI 041-1)." },
    { es: "Revisión por excepción", en: "Review by exception", def: "Revisión del lote centrada en lo que el sistema ha marcado como anómalo, apoyada en controles validados para el resto." },
    { es: "Firma electrónica", en: "Electronic signature", def: "Conjunto de símbolos que una persona ejecuta o autoriza como equivalente legal de su firma manuscrita; muestra nombre, fecha y hora y significado." },
    { es: "Formulario de contingencia", en: "Contingency form (business continuity form)", def: "Hoja en papel aprobada y numerada que se usa mientras el sistema informatizado no está disponible." },
    { es: "Reconciliación de datos", en: "Data reconciliation", def: "Incorporar al sistema lo anotado en papel durante una caída, con referencia al original, verificación y conciliación de los formularios." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Un paso del EBR pide cargar 320,0 kg con una tolerancia de ±0,5 % (valores de ejemplo). ¿Cuál es el límite inferior de la banda?",
      answer: 318.4,
      tolerance: 0.001,
      unit: "kg",
      explain: "El 0,5 % de 320,0 kg es 320,0 × 0,5 / 100 = 1,6 kg. Límite inferior: 320,0 − 1,6 = 318,4 kg.",
    },
    {
      kind: "number",
      q: "La cantidad objetivo es 254,0 kg con una tolerancia de ±0,5 % (valores de ejemplo). ¿Cuál es el límite superior de la banda?",
      answer: 255.27,
      tolerance: 0.0001,
      unit: "kg",
      explain: "El 0,5 % de 254,0 kg es 254,0 × 0,005 = 1,27 kg. Límite superior: 254,0 + 1,27 = 255,27 kg.",
    },
    {
      kind: "number",
      q: "La balanza conectada envía un bruto de 212,6 kg. La tara del bidón es 18,2 kg. ¿Qué peso neto registra el MES?",
      answer: 194.4,
      tolerance: 0.001,
      unit: "kg",
      explain: "Neto = bruto − tara = 212,6 − 18,2 = 194,4 kg. Con un objetivo de 195,0 kg ±0,5 % (de 194,025 a 195,975 kg) estaría dentro de la banda.",
    },
    {
      kind: "number",
      q: "Un EBR tiene 240 datos registrados y el informe de excepciones marca 6 (valores de ejemplo). ¿Qué porcentaje de los datos marca el informe para estudiarlo a fondo?",
      answer: 2.5,
      tolerance: 0.01,
      unit: "%",
      explain: "Porcentaje = 6 / 240 × 100 = 2,5 %. El resto se apoya en controles validados, y el registro de auditoría se revisa igualmente antes de liberar.",
    },
    {
      kind: "choice",
      q: "Escaneas un bidón y el MES muestra «Lote en cuarentena». Un compañero dice que el laboratorio lo aprobará esta tarde. ¿Qué haces?",
      options: [
        "No lo cargo: lo aparto, aviso y escaneo un lote aprobado",
        "Lo cargo y escribo un comentario explicando la situación",
        "Pido a sistemas que cambie el estado del lote a aprobado",
        "Tecleo a mano el número de otro lote que sí está aprobado",
      ],
      answer: 0,
      explain: "ICH Q7 (7.20) pide mantener los materiales en cuarentena hasta que se aprueben para su uso; el bloqueo del MES aplica esa regla y no se rodea.",
    },
    {
      kind: "choice",
      q: "Según 21 CFR 11.50, ¿qué debe indicar un registro electrónico firmado?",
      options: [
        "El usuario, la contraseña cifrada y el terminal usado para firmar",
        "El nombre impreso, la fecha y hora de la firma y su significado",
        "Solo la fecha de la firma y el código del lote que se firma",
        "La firma escaneada de la persona y el sello del departamento",
      ],
      answer: 1,
      explain: "El 11.50 pide nombre impreso de quien firma, fecha y hora de la firma y su significado (revisión, aprobación, responsabilidad o autoría), visibles en pantalla e impresión.",
    },
    {
      kind: "choice",
      q: "Tu compañero hizo una pesada crítica mientras tú estabas en el muelle. Al volver, el MES te pide firmar la verificación. ¿Qué haces?",
      options: [
        "Firmo, porque el peso llegó de la balanza y está en la banda",
        "Firmo y escribo en el comentario la hora a la que he vuelto",
        "No firmo: no la he presenciado; aviso para que se resuelva",
        "Le dejo mi sesión abierta para que firme él la verificación",
      ],
      answer: 2,
      explain: "La firma del verificador deja registrado que presenció o comprobó el paso (ICH Q7, 8.12); firmar sin haberlo visto registra algo que no ocurrió.",
    },
    {
      kind: "choice",
      q: "Has firmado un paso y descubres que tecleaste mal un dato manual. ¿Cómo se corrige en el EBR?",
      options: [
        "Se anula el paso entero y se repite para que no quede rastro",
        "Pido a un administrador que borre el dato de la base de datos",
        "Se deja como está para no generar una entrada en el registro",
        "Con la función de corrección, motivo y nueva verificación según SOP",
      ],
      answer: 3,
      explain: "ICH Q7 (5.43) pide registrar la entrada anterior, quién la cambió y cuándo, y el anexo 11 (apartado 9) el motivo; PI 041-1 (9.5) dice que un dato cambiado tras firmar debe aparecer como no firmado hasta revisarlo y firmarlo otra vez.",
    },
    {
      kind: "choice",
      q: "El MES vuelve tras una caída y tienes que pasar al sistema las pesadas anotadas en el formulario de contingencia. ¿Qué es lo correcto?",
      options: [
        "Teclearlas con referencia al formulario, verificarlas contra el original y adjuntarlo",
        "Teclearlas de memoria, que es más rápido, y luego tirar el formulario usado",
        "Dejarlas solo en papel, porque el MES ya no admite datos de horas pasadas",
        "Repetir las pesadas con el MES en marcha y destruir el formulario en papel",
      ],
      answer: 0,
      explain: "Son datos críticos tecleados a mano: el anexo 11 (apartado 6) pide una comprobación adicional, y PI 041-1 (9.10) conservar el original tras transcribirlo.",
    },
    {
      kind: "choice",
      q: "¿Qué condición tiene que cumplir el informe de excepciones para que la revisión por excepción sea aceptable?",
      options: [
        "Que lo imprima el operador al final de su turno y lo firme",
        "Que sea una herramienta validada que detecte lo anormal definido",
        "Que tenga menos de diez entradas para que se lea deprisa",
        "Que lo apruebe el proveedor del programa antes de cada lote",
      ],
      answer: 1,
      explain: "PI 041-1 define el informe de excepciones como una herramienta de búsqueda validada que identifica datos o acciones anormales definidos de antemano; si no está validado, lo raro puede pasar sin verse.",
    },
  ],
};
