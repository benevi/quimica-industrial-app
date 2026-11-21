import type { Lesson } from "./types";

export const limsAFondo: Lesson = {
  slug: "lims-a-fondo",
  level: 19,
  order: 2,
  title: "LIMS a fondo: el laboratorio en un sistema",
  titleEn: "Laboratory information management systems in depth",
  minutes: 38,
  summary:
    "Qué hay dentro de un LIMS visto como una aplicación web con base de datos, el viaje de una muestra desde la etiqueta que imprimes en planta hasta el certificado, la plantilla de especificación y el cálculo automático (con una cuenta resuelta y por qué se valida), la conexión con instrumentos y con el sistema de datos cromatográficos, los estados de un resultado y la segunda persona, el audit trail, reactivos, patrones e instrumentos, el paso al ERP para la decisión de empleo y lo que tú haces y no haces.",
  body: `
En [LIMS: el sistema del laboratorio](/leccion/lims) viste el viaje de una muestra en siete pasos. En [Conservación, custodia y trazabilidad de muestras a fondo: del punto de muestreo al resultado](/leccion/custodia-a-fondo) viste quién firma cada paso de la muestra física, y en [El certificado de análisis y la liberación del lote a fondo](/leccion/liberacion-de-lotes-a-fondo), qué revisa calidad y qué lleva el certificado. Aquí abrimos el programa por dentro: qué guarda, qué calcula, cómo recibe los datos, qué estados tiene un resultado y dónde puede fallar.

### Un LIMS es una aplicación web con base de datos
Como has programado aplicaciones web, piensa en un LIMS (*laboratory information management system*, sistema de gestión de información de laboratorio) como una aplicación con estas tablas principales. Los nombres son de ejemplo; cada producto los llama a su manera.

| Tabla | Qué guarda | Equivalente en una tienda web |
|---|---|---|
| **Muestras** (*samples*) | Una fila por muestra: número único, material, lote, punto de muestreo, fecha y hora de toma, quién la tomó, estado | Los pedidos |
| **Ensayos** (*tests*) | Qué hay que medir en cada muestra: agua, riqueza, impurezas, aspecto | Las líneas de cada pedido |
| **Especificaciones** (*specifications*) | Para cada material y etapa: qué ensayos, con qué método y con qué límites, con su versión | El catálogo con sus reglas |
| **Resultados** (*results*) | Cada valor medido o calculado, con unidad, usuario, fecha y hora | Los datos de cada envío |
| **Estados** (*status*) | En qué punto está cada muestra, ensayo y resultado | El estado del pedido: pagado, enviado, entregado |
| **Usuarios y roles** (*users, roles*) | Quién puede registrar, introducir, revisar o aprobar | Cliente, empleado, administrador |
| **Auditoría** (*audit trail*) | Cada creación, cambio o borrado, con valor anterior y motivo | El historial de cambios que nadie puede editar |

La diferencia con una tienda web es que aquí cada fila es un registro GMP. La guía de la Organización Mundial de la Salud (OMS) para laboratorios de control de calidad (informe técnico 1052, anexo 4, de 2024) pide un sistema que asegure la trazabilidad de las operaciones y pone como ejemplo el LIMS (3.25); pide que se valide, que cada cambio de configuración se autorice y valide antes de aplicarlo y que el audit trail esté activado y se revise (3.30 a 3.34); y admite que la hoja de trabajo del analista (*analytical worksheet*) sea electrónica (6.33).

La separación entre especificaciones y resultados es la clave del diseño. La especificación es un **dato maestro**: se escribe una vez, la aprueba la unidad de calidad (ICH Q7, 11.12) y sirve para todos los lotes. Los resultados son **datos de transacción**: nacen con cada muestra. Lo viste en [Datos maestros e integración a fondo](/leccion/datos-maestros-a-fondo).

### El viaje de una muestra dentro del sistema
Ahora no seguimos la muestra física, sino su fila en la base de datos.

| Paso | Qué pasa en el LIMS | Quién lo dispara | Estado de ejemplo |
|---|---|---|---|
| 1. Plan de muestreo | Para el lote, el sistema ya sabe qué muestras tocan y en qué etapa, porque la especificación y el plan están cargados | La creación del lote o de la orden | Prevista |
| 2. Registro | Se crea la fila con número único y se imprime la etiqueta con código de barras | Tú en planta, el MES o el laboratorio, según la planta | Registrada |
| 3. Toma | Se anota la hora real de toma y quién la tomó | Tú | Tomada |
| 4. Recepción | El laboratorio escanea la etiqueta: queda hora y persona | Analista | Recibida |
| 5. Análisis | Cada ensayo recibe sus datos, a mano o desde el instrumento | Analista e instrumentos | En curso |
| 6. Cálculo y comparación | El sistema calcula, redondea y compara con el límite | El LIMS | Introducido |
| 7. Revisión | Una segunda persona revisa datos, cálculos y audit trail | Revisor | Revisado |
| 8. Aprobación | Se aprueba la muestra completa; los resultados se pasan al ERP | Persona autorizada | Aprobada |
| 9. Certificado | Con los resultados aprobados del lote se genera el certificado de análisis | Unidad de calidad | Emitido |

El **código de barras** (*barcode*) es el número único de la muestra escrito para que lo lea una máquina: al escanearlo, el LIMS busca esa clave primaria y abre su fila. La OMS (6.13) pide una etiqueta con el número de registro único en cada envase. Por eso una etiqueta no se reutiliza ni se pega en otro vial: ese número ya apunta a un material, un lote y una hora.

### La plantilla de especificación
Cuando el laboratorio entra en una muestra, no elige qué ensayos hacer. Los trae la plantilla de especificación del material y la etapa. Una plantilla de ejemplo para un principio activo ficticio podría ser así (todo son **valores de ejemplo**):

| Ensayo | Método | Límite | Decimales del resultado | De dónde viene el dato |
|---|---|---|---|---|
| Aspecto | Visual | Polvo blanco | Texto | Lo teclea el analista |
| Agua (Karl Fischer) | Método KF-02 | ≤ 0,5 % | 2 | Del valorador, por interfaz |
| Riqueza (HPLC), sobre sustancia anhidra | Método HP-11 | 98,0–102,0 % | 1 | Del sistema de datos cromatográficos, y se corrige con el agua |
| Impureza B | Método HP-11 | ≤ 0,15 % | 2 | Del sistema de datos cromatográficos |

Cada límite tiene los mismos decimales que su resultado, algunos resultados se **calculan** a partir de otros y cada fila dice de dónde llega el dato, porque eso decide qué controles hacen falta.

### Lo que calcula el LIMS: una cuenta resuelta
Esta es la cuenta de una riqueza por HPLC hecha por duplicado y corregida con el agua de la misma muestra. Todos los números son **valores de ejemplo**. La fórmula de la corrección a sustancia anhidra ya la viste en [Especificaciones a fondo: qué tiene que cumplir un lote](/leccion/especificaciones-a-fondo); aquí la mira el sistema.

**Paso 1. Los datos que llegan.** El sistema de datos cromatográficos envía dos resultados de riqueza «tal cual», uno por cada preparación de la muestra: 98,91 % y 99,17 %. El valorador Karl Fischer envía dos determinaciones de agua: 0,45 % y 0,47 %.

**Paso 2. ¿Se pueden promediar?** El método, aprobado por calidad, dice que el resultado es la media de las dos preparaciones si se diferencian como mucho en 0,50 puntos (criterio de ejemplo). Diferencia: 99,17 − 98,91 = 0,26. Cumple, así que el LIMS sigue. La guía de la FDA sobre resultados fuera de especificación (revisión 1, mayo de 2022) lo explica así: el número de réplicas para llegar a un resultado y el límite de variación entre ellas se fijan en el método escrito; si las réplicas no cumplen ese límite, los resultados no se usan.

**Paso 3. Las medias.** Riqueza: (98,91 + 99,17) / 2 = 99,04 %. Agua: (0,45 + 0,47) / 2 = 0,46 %.

**Paso 4. Corrección a anhidra.** Riqueza anhidra = 99,04 × 100 / (100 − 0,46) = 99,04 × 100 / 99,54 = 99,498 %.

**Paso 5. Redondeo y comparación.** El límite tiene un decimal, así que el resultado se da con uno: 99,5 %. El manual de laboratorio de la FDA (ORA, volumen III, sección 4, de 2022) recoge las reglas: durante el cálculo se guarda una cifra de más y se redondea solo al final; si la cifra que se quita es menor que 5 se descarta, si es 5 o más se sube la anterior; y se compara con el límite después de redondear. 99,5 está entre 98,0 y 102,0: **cumple**.


### Por qué el cálculo se valida
El analista ya no hace la cuenta: la hace una fórmula configurada en la plantilla. Si la fórmula está mal, se equivoca igual en todos los lotes y nadie lo nota. Dos errores con los mismos datos:

- **Un dato tecleado mal.** Si alguien escribe a mano el agua como 4,6 en vez de 0,46, la cuenta da 99,04 × 100 / 95,4 = 103,8 %. Fuera de especificación, y además falso: se abriría una investigación por algo que no le pasa al lote.
- **Una fórmula al revés.** Si la plantilla multiplica en lugar de dividir, 99,04 × (100 − 0,46) / 100 = 98,6 %. Cumple, y por eso es el error peligroso: un resultado bajo y equivocado que nadie mira dos veces.

Las normas lo cubren por varios lados:

- **ICH Q7:** los sistemas informatizados GMP se validan según su complejidad y criticidad (5.40), y el registro de laboratorio incluye todos los cálculos, con unidades y factores (6.60).
- **Anexo 11, 4.7:** las pruebas de validación tienen en cuenta los límites de los parámetros y de los datos y el tratamiento de errores.
- **FDA, guía de integridad de datos (preguntas y respuestas, diciembre de 2018), pregunta 3:** cada flujo de trabajo GMP de un sistema se valida para su uso previsto. Su ejemplo es el sistema de fabricación: cualificar la plataforma no demuestra que los cálculos de una receta concreta sean correctos. Con el LIMS igual: validar el programa no valida tu plantilla.
- **PIC/S PI 041-1 (2021), apartado 8.8:** quien revisa registros del laboratorio comprueba todas las anotaciones y los cálculos críticos, y debe mirar los datos originales para confirmar que se usaron los correctos en el cálculo.

Validar una fórmula es meterle datos de prueba de resultado conocido, con casos límite (102,05, réplicas que no cumplen, un dato vacío), y comprobar que el sistema responde bien en cada uno.

### Instrumentos, sistema de datos cromatográficos y transcripción
Un dato puede llegar al LIMS de tres formas:

1. **Por interfaz directa**: la balanza, el valorador o el sistema de datos cromatográficos (*chromatography data system*, CDS) envían el valor con su identificador de muestra.
2. **Por fichero**: el instrumento deja un fichero y el LIMS lo recoge. Los riesgos de este camino los viste en [El mapa de sistemas de una planta a fondo](/leccion/mapa-de-sistemas-a-fondo).
3. **A mano**: alguien lee una pantalla o un papel y teclea.

El CDS controla el HPLC, guarda la señal, integra los picos y calcula; que su registro se puede reprocesar lo viste en las lecciones de cromatografía. Para el LIMS importa que llegue el resultado del procesado aprobado y que el original no se pierda. PIC/S PI 041-1 (9.7, punto 2) pide que las integraciones manuales y los reprocesados de resultados de laboratorio se hagan de forma aprobada y controlada, que los datos originales se conserven en su contexto y que cada cambio lo revise al menos una persona formada.

**Lo que dicen las normas sobre la transcripción a mano:**

- **Anexo 11, apartado 5 (Datos):** los sistemas informatizados que intercambian datos electrónicamente con otros deben incluir comprobaciones integradas adecuadas para que la entrada y el procesado de los datos sean correctos y seguros, para minimizar los riesgos.
- **Anexo 11, apartado 6 (Comprobaciones de exactitud):** para los datos críticos introducidos a mano debe haber una comprobación adicional de su exactitud, que puede hacer un segundo operador o un medio electrónico validado. Lo crítico que es el dato y lo que puede pasar si se introduce mal se tratan con gestión de riesgos.
- **ICH Q7, 5.45:** dice lo mismo para principios activos: si se introducen datos críticos a mano, hay una comprobación adicional, por una segunda persona o por el propio sistema.
- **PIC/S PI 041-1, apartado 9.7.** A mano: solo teclean personas autorizadas, el sistema registra quién y cuándo, el programa controla el formato, todo dato crítico se verifica por un segundo operador o un medio validado y los cambios los revisa una persona independiente. En automático: la interfaz se valida, el dato se guarda en un formato que no se pueda manipular, perder ni cambiar, y el programa comprueba que llega completo, con sus metadatos.
- **PIC/S PI 041-1, 9.10 (sistemas híbridos):** donde se transcribe a mano entre sistemas hay segundas comprobaciones, y el dato original se conserva.
- **FDA, guía de 2018, pregunta 12:** no vale apuntar datos en papeles sueltos para pasarlos a limpio; pone como ejemplo un LIMS que guarda tras cada entrada, con un procedimiento que obliga a teclear en el momento.

El borrador de nuevo anexo 11 sometido a consulta en 2025 pide en su 10.2 que los datos críticos pasen de un sistema a otro, siempre que se pueda, por interfaces validadas y no por transcripción, con el ejemplo literal de un instrumento de laboratorio y un LIMS. A 21 de noviembre de 2026 no hemos encontrado publicada la versión definitiva, así que manda el anexo 11 de 2011.

### Estados del resultado y la segunda persona
Un resultado no pasa de «no existe» a «aprobado» de un salto. Los nombres cambian según el LIMS; la idea es esta:

| Estado de ejemplo | Qué significa | Quién puede moverlo |
|---|---|---|
| Pendiente | El ensayo existe, aún sin datos | El sistema al registrar la muestra |
| Introducido | Hay un valor, calculado y comparado | El analista o la interfaz |
| Revisado | Una segunda persona ha comprobado datos, cálculos y audit trail | Un revisor que no es quien lo introdujo |
| Aprobado | La muestra completa es válida para decidir | Una persona autorizada |
| Anulado | Se invalidó con motivo y queda visible | Persona autorizada, con justificación |

ICH Q7 (6.60) pide la firma de una segunda persona que revisa los registros originales, y la OMS (6.56), que los resultados los apruebe o rechace personal designado y cualificado. En el sistema esto se traduce en roles: el LIMS no deja que el mismo usuario introduzca y revise su propio resultado. Lo viste como segregación de funciones en [Usuarios, revisión del audit trail, copias de seguridad y archivo](/leccion/accesos-copias-y-archivo).

Un resultado anulado no desaparece: para la FDA (guía de 2018), todos los datos, también los errores y los que no cumplen, forman parte del registro, y probar muestras hasta que salga el resultado deseado (*testing into compliance*) no es aceptable.

### El audit trail de los resultados
Las reglas generales están en [Audit trail y firma electrónica](/leccion/audit-trail-y-firma-electronica). En el LIMS, PIC/S PI 041-1 (9.6) concreta qué debe guardar cada entrada: quién hizo la acción, qué pasó (con valor anterior y nuevo), cuándo (fecha y hora), por qué (motivo) y, si se cambió un dato, quién autorizó el cambio. Nunca tapa el valor anterior. Y el 9.8 pide revisarlo como parte de la revisión rutinaria, antes de usar el dato para una decisión crítica como liberar el lote.

Un ejemplo ficticio de lo que vería el revisor:

| Fecha y hora | Usuario | Acción | Anterior | Nuevo | Motivo |
|---|---|---|---|---|---|
| 19/11/2026 11:02 | interfaz KF-03 | Resultado agua, réplica 1 | vacío | 0,45 | Captura automática |
| 19/11/2026 11:09 | interfaz KF-03 | Resultado agua, réplica 2 | vacío | 0,47 | Captura automática |
| 19/11/2026 15:40 | analista 2 | Comentario | vacío | Sin incidencias | Registro |

Si hubiera una línea «valor cambiado de 0,61 a 0,47» sin motivo, el resultado no se aprueba hasta aclararlo.

### Reactivos, patrones e instrumentos dentro del LIMS
Un LIMS puede gestionar también lo que el laboratorio usa para medir, como un inventario conectado con los análisis:

- **Reactivos y disoluciones.** ICH Q7 (11.16) pide etiquetarlos con fecha de «usar antes de»; la OMS (5.55) admite que los datos de la etiqueta estén en un LIMS.
- **Patrones de referencia.** ICH Q7 (11.17 a 11.19) pide documentar el origen y el uso de los primarios y cualificar los secundarios frente a un primario. Más en [Reactivos, patrones y disoluciones a fondo: lo que el laboratorio usa para medir](/leccion/reactivos-patrones-a-fondo).
- **Instrumentos.** ICH Q7 (5.33 y 5.34) pide que el estado de calibración de los equipos críticos se conozca y que no se use un instrumento que no cumple; la OMS (5.40), retirar del uso el defectuoso.

Con estos datos, el LIMS se puede configurar para no aceptar un ensayo hecho con un reactivo caducado o una balanza con la calibración vencida. Es como un enclavamiento en el reactor: la regla la aplica el sistema, no la memoria.

### Del LIMS al ERP: la decisión de empleo
El LIMS sabe si un lote cumple; el ERP, dónde está y si se puede usar. Con los nombres del [simulador de ERP tipo SAP](/sap) y de [SAP en la planta: órdenes, movimientos y decisión de empleo](/leccion/sap-en-planta):

1. Producción da entrada al lote con el movimiento 101. Como el material tiene activo el tipo de inspección 04, SAP crea un **lote de inspección** y el stock queda **en control de calidad**.
2. El laboratorio analiza en el LIMS.
3. Los resultados aprobados pasan al lote de inspección. En unas plantas los copia la interfaz; en otras se registran en QE51N.
4. Calidad toma la **decisión de empleo** en QA11: A (aceptado) pasa el stock a libre utilización; R (rechazado), a bloqueado.

Cuál de las dos variantes usa tu planta lo dice la descripción del sistema, que el anexo 11 (4.3) pide para los sistemas críticos con sus flujos de datos e interfaces. Si los resultados viajan por interfaz, se valida que no cambian de valor ni de significado (anexo 11, 4.8). Y la decisión de liberar es de la unidad de calidad y no se delega (ICH Q7, 2.22): ni el LIMS ni el ERP la toman solos.

### Qué ves y qué haces tú
**Lo que haces:**

- Imprimir o recoger la etiqueta del LIMS para la muestra que toca, comprobar en el vial que material, lote, etapa y punto coinciden con la hoja, y pegarla en el momento.
- Escanear la etiqueta y registrar la hora real de toma donde diga tu procedimiento (terminal del LIMS, MES o hoja).
- Consultar el estado de una muestra o de un lote, con un perfil de solo lectura: si está recibida, en análisis o aprobada.
- Esperar a que el resultado esté **aprobado** antes de actuar, si tu procedimiento lo exige.

**Lo que no haces:**

- Imprimir etiquetas de más «para luego», reutilizar una etiqueta o pegarla en otro vial.
- Escribir a mano sobre la etiqueta para cambiar un dato. Si está mal, se avisa y se sigue el procedimiento.
- Tomar muestras «de prueba» para ver si cumple antes de la oficial.
- Pedir que repitan un análisis «a ver si sale», usar el usuario de otra persona o apuntar un resultado oído por teléfono como si fuera el aprobado.

Si el LIMS se cae, se sigue la contingencia, como viste en [El mapa de sistemas de una planta a fondo](/leccion/mapa-de-sistemas-a-fondo).

Los sistemas, códigos, métodos, límites y números de esta lección son ejemplos para entender. En planta manda siempre el procedimiento vigente (SOP): él dice quién registra las muestras, qué etiqueta se usa, qué estados tiene tu LIMS y cuándo vale un resultado.
`,
  plant: `
Jueves 19/11/2026, 08:30. El intermedio ficticio **INT-58** sale de la centrífuga C-311 y entra en el secadero S-315. La hoja pide una muestra de producto seco para el control de calidad del lote 26-0458.

En el terminal de planta abres el LIMS de ejemplo **LIMS-QC1** con tu usuario. El plan de muestreo ya tiene prevista la muestra «INT-58, lote 26-0458, producto seco, punto de descarga de S-315». Pulsas imprimir: sale la etiqueta con el número **M26-004512** y su código de barras. Compruebas en el vial que el lote y el punto coinciden con la hoja. A las 08:52 tomas la muestra, pegas la etiqueta, escaneas el código y el LIMS guarda la hora y tu usuario. En la hoja anotas el número de muestra y la hora.

A las 09:20 la analista la escanea en recepción. El valorador KF-03 envía 0,37 % y 0,39 % de agua; el sistema de datos cromatográficos envía 99,05 % y 99,33 % de riqueza. El LIMS comprueba que las réplicas cumplen, calcula 99,19 % de media y la corrige con 0,38 % de agua: 99,19 × 100 / 99,62 = 99,57, que informa como 99,6 %. Cumple 98,0–102,0 %.

A las 15:40 un segundo analista revisa datos, cálculos y audit trail y aprueba. La interfaz pasa los resultados al lote de inspección del ERP. A las 17:05 calidad toma la decisión de empleo. Tú lo consultas: el lote aparece en libre utilización y ya se puede usar en la etapa siguiente.
`,
  batchRecord: `
- **Número de muestra del LIMS** (por ejemplo, M26-004512) junto al paso de muestreo, con la **hora real de toma** y tu firma o firma electrónica.
- **Punto de muestreo** y equipo (descarga de S-315), iguales en la etiqueta, en el LIMS y en la hoja.
- Si el resultado del control en proceso decide un paso: el **resultado aprobado**, su número de muestra y la decisión tomada, sin anotar valores provisionales como definitivos.
- Cualquier **incidencia de etiqueta** (etiqueta dañada, reimpresión autorizada, muestra repetida) con hora, motivo y a quién se avisó.
- Al final del lote, los números de **lote de inspección** y de certificado los registra calidad; tú no los rellenas.
`,
  terms: [
    { es: "Sistema de gestión de información de laboratorio", en: "Laboratory information management system (LIMS)", def: "Aplicación con base de datos que gestiona muestras, ensayos, especificaciones, resultados, estados y aprobaciones del laboratorio." },
    { es: "Plantilla de especificación", en: "Specification template", def: "Dato maestro del LIMS con los ensayos, métodos, límites y decimales que se aplican a un material en una etapa." },
    { es: "Plan de muestreo", en: "Sampling plan", def: "Qué muestras hay que tomar de un lote, dónde y cuándo; el LIMS puede crearlas por adelantado." },
    { es: "Código de barras", en: "Barcode", def: "El número único de la muestra impreso para que lo lea un escáner; apunta a su fila en la base de datos." },
    { es: "Resultado informable", en: "Reportable result", def: "Resultado final de una ejecución completa del método, por ejemplo la media de réplicas que fija el método." },
    { es: "Réplica", en: "Replicate", def: "Cada repetición de una medida o preparación que el método combina para dar un resultado." },
    { es: "Sustancia anhidra", en: "Anhydrous basis", def: "Forma de expresar un resultado descontando el agua de la muestra." },
    { es: "Sistema de datos cromatográficos", en: "Chromatography data system (CDS)", def: "Programa que controla el HPLC o el GC, guarda la señal, integra los picos y calcula." },
    { es: "Interfaz de instrumento", en: "Instrument interface", def: "Conexión validada por la que un instrumento envía sus datos al LIMS sin teclearlos." },
    { es: "Transcripción", en: "Transcription", def: "Copiar a mano un dato de un sitio a otro; exige una segunda comprobación si el dato es crítico." },
    { es: "Segunda persona", en: "Second-person review", def: "Revisión de datos, cálculos y audit trail por alguien distinto de quien hizo el ensayo." },
    { es: "Hoja de trabajo analítica", en: "Analytical worksheet", def: "Registro del analista con muestra, método, reactivos, patrones, cálculos y resultados; puede ser electrónico." },
    { es: "Lote de inspección", en: "Inspection lot", def: "Registro del ERP que agrupa los análisis de un lote y espera la decisión de empleo." },
    { es: "Decisión de empleo", en: "Usage decision", def: "Aceptación o rechazo del lote de inspección; cambia el estado del stock." },
  ],
  quiz: [
    {
      kind: "choice",
      q: "En un LIMS, ¿qué es la plantilla de especificación desde el punto de vista de la base de datos?",
      options: [
        "Un dato maestro aprobado por calidad que usan todos los lotes",
        "Un dato de transacción que se crea con cada muestra",
        "Una tabla temporal que se borra al aprobar el lote",
        "Un informe que imprime el analista al final del día",
      ],
      answer: 0,
      explain: "La especificación se escribe una vez, la aprueba la unidad de calidad (ICH Q7, 11.12) y se aplica a cada lote. Un error en ella afecta a todos los lotes.",
    },
    {
      kind: "number",
      q: "Un método fija como resultado la media de dos preparaciones. El sistema de datos cromatográficos envía 99,26 % y 99,48 %. ¿Qué media calcula el LIMS?",
      answer: 99.37,
      tolerance: 0.001,
      unit: "%",
      explain: "Media = (99,26 + 99,48) / 2 = 99,37 %. El LIMS la guarda con sus decimales y redondea solo el resultado que informa.",
    },
    {
      kind: "number",
      q: "La riqueza media tal cual es 98,80 % y el agua de la misma muestra, 0,60 %. La especificación pide la riqueza sobre sustancia anhidra con un decimal. ¿Qué resultado informa el LIMS?",
      answer: 99.4,
      tolerance: 0.001,
      unit: "%",
      explain: "Riqueza anhidra = 98,80 × 100 / (100 − 0,60) = 98,80 × 100 / 99,40 = 99,396, que con un decimal es 99,4 %.",
    },
    {
      kind: "number",
      q: "Con los mismos datos (riqueza tal cual 98,80 %), alguien teclea a mano el agua como 6,0 en lugar de 0,60. ¿Qué riqueza anhidra, con un decimal, calcularía el LIMS?",
      answer: 105.1,
      tolerance: 0.001,
      unit: "%",
      explain: "98,80 × 100 / (100 − 6,0) = 98,80 × 100 / 94,0 = 105,106, que se informa como 105,1 %: un falso fuera de especificación. Por eso el anexo 11 (apartado 6) pide una comprobación adicional de los datos críticos tecleados.",
    },
    {
      kind: "number",
      q: "El método admite como mucho 0,50 puntos de diferencia entre las dos preparaciones. Llegan 98,75 % y 99,40 %. ¿Cuál es la diferencia, en puntos?",
      answer: 0.65,
      tolerance: 0.001,
      unit: "puntos",
      explain: "Diferencia = 99,40 − 98,75 = 0,65 puntos, mayor que 0,50. Según la guía de la FDA sobre OOS, si las réplicas no cumplen su límite los resultados no se usan: no se promedian y se sigue el procedimiento.",
    },
    {
      kind: "choice",
      q: "Una plantilla del LIMS multiplica por (100 − agua) / 100 cuando debería dividir. Los resultados salen un poco más bajos, pero cumplen. ¿Qué lo habría detectado antes de usarla?",
      options: [
        "Que el analista repitiera el HPLC una vez más",
        "Imprimir el certificado en papel en lugar de en PDF",
        "Validar la fórmula con datos de prueba de resultado conocido",
        "Subir la versión del programa del LIMS a la última",
      ],
      answer: 2,
      explain: "La FDA (guía de 2018, pregunta 3) pide validar cada flujo de trabajo para su uso previsto: validar el programa no demuestra que los cálculos de una plantilla concreta sean correctos.",
    },
    {
      kind: "choice",
      q: "Un valorador muestra el resultado en su pantalla y el analista lo teclea en el LIMS. Según el anexo 11 (apartado 6) e ICH Q7 (5.45), ¿qué hace falta?",
      options: [
        "Nada, si el analista está formado y tiene experiencia",
        "Una comprobación adicional por otra persona o por un medio validado",
        "Que lo teclee dos veces seguidas la misma persona",
        "Que el analista lo apunte antes en un papel aparte",
      ],
      answer: 1,
      explain: "Para los datos críticos introducidos a mano debe haber una comprobación adicional de exactitud, por un segundo operador o por un medio electrónico validado. Apuntarlo en papeles sueltos es justo lo que la FDA no acepta.",
    },
    {
      kind: "choice",
      q: "El revisor ve en el audit trail del LIMS: «agua cambiada de 0,61 a 0,47», sin motivo y por el mismo analista. ¿Qué hace?",
      options: [
        "Lo aprueba, porque 0,47 cumple el límite de 0,5 %",
        "Borra la línea del audit trail para dejarlo limpio",
        "Aprueba el resultado y lo comenta en la reunión mensual",
        "No lo aprueba hasta aclarar el cambio según procedimiento",
      ],
      answer: 3,
      explain: "PIC/S PI 041-1 (9.6 y 9.8) pide motivo en cada cambio, revisar el audit trail antes de la decisión e investigar cualquier variación significativa. Un audit trail no se borra.",
    },
    {
      kind: "choice",
      q: "Vas a tomar el control de calidad del secadero y la impresora del terminal saca dos etiquetas iguales por error. ¿Qué haces con la segunda?",
      options: [
        "La comunico y la gestiono como diga el procedimiento, sin usarla",
        "La guardo para la próxima muestra de este mismo lote",
        "La pego en un vial vacío por si hay que repetir la toma",
        "La tiro a la papelera de la sala sin decir nada a nadie",
      ],
      answer: 0,
      explain: "Cada etiqueta lleva el número único de una fila del LIMS con su material, lote y punto. Usarla en otra toma rompe la trazabilidad; qué se hace con ella lo fija el procedimiento.",
    },
    {
      kind: "choice",
      q: "Los resultados del lote están aprobados en el LIMS. ¿Qué hace falta para que el lote pase a libre utilización en el ERP?",
      options: [
        "Nada: al aprobar el último resultado el LIMS libera el lote",
        "Que el operador mueva el stock con un traslado entre almacenes",
        "La decisión de empleo de calidad sobre el lote de inspección",
        "Que el analista imprima y firme el certificado de análisis",
      ],
      answer: 2,
      explain: "En el ERP el lote espera en control de calidad hasta la decisión de empleo (QA11). Liberar o rechazar es responsabilidad no delegable de la unidad de calidad (ICH Q7, 2.22).",
    },
  ],
};
