import type { Lesson } from "./types";
export const bplAFondo: Lesson = {
  slug: "buenas-practicas-laboratorio-a-fondo",
  level: 4,
  order: 11.5,
  title: "El laboratorio de control de calidad a fondo: cuaderno, trazabilidad e integridad de los datos analíticos",
  titleEn: "Good practices in the QC laboratory in depth",
  minutes: 38,
  summary:
    "Por qué las GMP del laboratorio de control no son las BPL de la OCDE, qué independencia tiene el laboratorio frente a producción, cómo se rellena y revisa una hoja de trabajo, qué hay detrás de cada resultado, por qué el dato original del HPLC es el electrónico, qué son las inyecciones de prueba, qué errores del laboratorio acaban en un OOS y qué necesita el laboratorio de ti.",
  body: `
En [Buenas prácticas en el laboratorio de control de calidad](/leccion/buenas-practicas-laboratorio) viste las ideas básicas. Aquí vas a ver de dónde salen esas reglas, cómo se aplican y qué pasa con tu lote cuando una falla.

Una analogía de desarrollo web: un resultado de laboratorio es como un *build* reproducible. No basta con el ejecutable; hace falta el código, la versión exacta de cada dependencia (el *package-lock.json*) y quién compiló y cuándo. Si falta una pieza, nadie puede reconstruirlo ni fiarse de él.

### Dos normas con nombres parecidos: GMP del laboratorio y BPL
**Las GMP del laboratorio de control de calidad.** El laboratorio de control de calidad (*Quality Control*, QC) de una planta de principios activos sigue las normas de correcta fabricación (*Good Manufacturing Practice*, GMP). Su guía es ICH Q7, que en la Unión Europea es la parte II del volumen 4 de EudraLex: el capítulo 11 trata los controles de laboratorio y el apartado 6.6, sus registros. Para medicamentos, el equivalente es el capítulo 6 de la parte I, «Control de calidad». Sus ideas sobre el laboratorio son las mismas; por eso aquí se citan los dos.

**Las Buenas Prácticas de Laboratorio (BPL).** En inglés, *Good Laboratory Practice* (GLP). Son los principios de la OCDE (Organización para la Cooperación y el Desarrollo Económicos). En España están en el anexo del Real Decreto 822/1993, que el Real Decreto 1369/2000, de 19 de julio, sustituyó entero al incorporar la Directiva 1999/11/CE. Se aplican a los **ensayos no clínicos de seguridad** (*non-clinical safety studies*) sobre productos farmacéuticos, plaguicidas, cosméticos, medicamentos veterinarios, aditivos para la alimentación humana y animal, y sustancias químicas industriales: estudios para conocer la inocuidad de una sustancia, que se presentan para registrar o autorizar un producto.

| | GMP del laboratorio de QC | BPL (OCDE, RD 1369/2000) |
|---|---|---|
| Para qué | Decidir si un material o un lote cumple su especificación | Obtener datos de seguridad de una sustancia para registrarla o autorizarla |
| Qué se analiza | Materias primas, intermedios, controles en proceso, principio activo, estabilidad | El «producto de ensayo» dentro de un estudio con un «sistema experimental» |
| Documento que manda | Especificación y método aprobados | Protocolo del estudio y procedimientos normalizados de trabajo (PNT) |
| Quién responde | La unidad de calidad, independiente de producción (ICH Q7, 2.13) | El Director del Estudio; un programa de garantía de calidad independiente de la realización de los estudios |
| Cuánto se guarda | Registros de laboratorio: al menos 1 año tras la caducidad del lote, o 3 años tras distribuirlo entero si lleva fecha de reanálisis (ICH Q7, 6.13) | Protocolo, datos primarios, muestras e informe final: como mínimo hasta un año después del cese de comercialización del producto |

En el trato de los datos se parecen mucho. Las BPL llaman **datos primarios** (*raw data*) a los registros originales, también los de instrumentos automatizados, y piden anotarlos inmediatamente, de forma directa, exacta y legible, con fecha y firma; corregirlos sin impedir leer lo anterior y con la razón; y que los sistemas informatizados conserven todos los cambios sin ocultar los originales. Cambian el fin y quién responde. Tu laboratorio no hace BPL: hace GMP.

### Quién manda en el laboratorio: la independencia de producción
Para el capítulo 6 de EudraLex, la independencia del control de calidad respecto de producción es fundamental (principio): un departamento independiente, dirigido por una persona cualificada, con sus laboratorios y recursos suficientes (6.1). ICH Q7 pide una unidad de calidad independiente de producción que cubra el aseguramiento (*Quality Assurance*, QA) y el control de calidad, en una o dos unidades según el tamaño de la empresa (2.13), con laboratorios adecuados (11.10). Sus responsabilidades principales no se delegan; entre ellas, revisar los registros de producción y de laboratorio de las etapas críticas antes de liberar el principio activo (2.22). La guía de la Organización Mundial de la Salud (OMS) para laboratorios de control (serie de informes técnicos 1052, de 2024, anexo 4) añade que su personal no debe sufrir presiones comerciales, económicas o de otro tipo que comprometan su imparcialidad (3.3).

Traducido al turno:

- El analista no depende del jefe de producción. Nadie de planta puede pedirle que «mire otra vez a ver si sale» ni que adelante un resultado sin revisar.
- Independencia no es distancia: el personal de QC entra en producción para muestrear e investigar (EudraLex, 6.4).
- Los controles en proceso, también los que hace el personal de producción, se hacen con métodos aprobados por control de calidad y se registran (EudraLex, 6.18). Tu medida de pH en el reactor sigue las reglas del laboratorio.

### La hoja de trabajo y el cuaderno, campo a campo
La **hoja de trabajo analítica** (*analytical worksheet*) es el documento interno en el que el analista anota la muestra, el método, los reactivos, los patrones, los cálculos y los resultados, junto con todos los datos brutos del análisis; puede ser de papel o un sistema electrónico como un LIMS (OMS 1052, 6.33). Sirve para demostrar que la muestra cumple o para respaldar un resultado fuera de especificación (6.34). Se usa una por muestra numerada o grupo de muestras (6.35). El **cuaderno de laboratorio** (*laboratory notebook*) cumple la misma función; la FDA pone como buen control los cuadernos encuadernados, paginados y sellados por control de documentos (guía de integridad de datos de 2018, pregunta 6). EudraLex nombra los dos y pide conservarlos como datos brutos (6.7 y 6.10).

Esto es lo que pide la OMS que lleve una hoja de trabajo (6.37):

| Campo | Para qué sirve |
|---|---|
| Número de registro de la muestra | Une la hoja con tu muestra y con su etiqueta |
| Páginas numeradas, con el total («página 2 de 5»), anexos incluidos | Se nota si falta una hoja |
| Fecha de la petición, de inicio y de fin del análisis | Se ve si se analizó dentro de plazo |
| Nombre y firma del analista | Atribuible: se sabe quién lo hizo |
| Descripción de la muestra recibida | Lo que llegó de verdad, no lo que se esperaba |
| Especificación y método, o referencia trazable a ellos | Qué versión se aplicó y con qué límites |
| Equipos usados | Para comprobar que estaban calibrados |
| Patrones usados, con proveedor, lote y pureza | El resultado depende de ellos |
| Resultado de la idoneidad del sistema y sus criterios | Demuestra que el equipo funcionaba ese día |
| Reactivos, disolventes y columnas | Para comprobar calidad y caducidad |
| Resultados | Todos, también los de blancos |
| Interpretación y conclusión, aprobadas por personal designado | Cumple o no cumple, y quién lo decide |
| Comentarios y desviaciones del procedimiento | Lo que no fue como estaba previsto |

ICH Q7 (6.60) y EudraLex (6.17) piden lo mismo con otras palabras.

### Cómo se escribe en ella
Las reglas generales de escritura en papel (una sola raya, nada de corrector ni lápiz, formularios numerados y conciliados) ya las viste en [ALCOA+ a fondo: datos en los que se puede confiar](/leccion/alcoa-a-fondo). Lo propio del laboratorio:

- **En el momento.** Los controles de laboratorio se documentan cuando se hacen, y toda desviación del procedimiento se documenta y explica (ICH Q7, 11.14). La OMS pide anotar cada valor de inmediato, incluidos los blancos (6.38).
- **En tinta que dure.** La guía de integridad de datos de la PIC/S (PI 041-1, 2021) pide tinta que no se borre, no se corra ni pierda color (8.6, punto 3). Los tiques en **papel térmico** (*thermal paper*) se borran: de ellos se guarda una copia verdadera firmada y fechada.
- **Correcciones con su porqué.** Todo cambio debe dejar ver qué se cambió, quién, cuándo y por qué; borrar datos no es aceptable (OMS 1052, 6.40).
- **Anexos localizables.** Cada gráfico se adjunta o queda trazable a su archivo electrónico (6.38), y las páginas, consecutivas, remiten a sus anexos: tiques de balanza, cromatogramas, espectros (3.21).
- **Que se pueda repetir.** El registro tiene que permitir repetir el ensayo o rehacer las cuentas, e identificar a quien muestreó, preparó y analizó (3.23).

### La revisión por segunda persona
ICH Q7 pide la fecha y la firma de una segunda persona que ha revisado los registros originales: exactos, completos y conformes a lo establecido (6.60). La PIC/S concreta: mira todas las anotaciones y los cálculos críticos y, siempre que pueda, los datos originales, para confirmar que al cálculo pasó el dato correcto (8.8). En los sistemas informatizados la revisión incluye el registro de auditoría (*audit trail*) y buscar **datos no notificados** (*unreported data*): resultados que se generaron y no aparecen en el informe (9.8). Cómo se revisa ese registro lo tienes en [Audit trail y firma electrónica a fondo](/leccion/audit-trail-a-fondo).

### Trazabilidad: lo que hay detrás de cada número
Cuando te llega «riqueza 99,8 %», detrás hay una cadena de piezas. Si una falla, el número no vale:

| Pieza | Qué queda anotado | Qué pasa si falla |
|---|---|---|
| La muestra | Material, lote, fecha de toma, cantidad, fecha de llegada (ICH Q7, 6.60) | Se analiza otra cosa o una muestra estropeada |
| El método | Referencia y versión vigente (6.60) | Se aplican límites o pasos equivocados |
| El patrón | Número de identificación, lote, pureza, dentro de reanálisis | Todos los resultados salen desplazados |
| Reactivos y disoluciones | Lote, preparación y caducidad (6.60) | Se usa una concentración que ya no es la que dice la etiqueta |
| El equipo | Código, calibración y cualificación vigentes | Mide mal sin que se note |
| El analista | Nombre, firma y formación en el método | Nadie responde del dato |
| Los cálculos | Fórmula, unidades y factores de conversión (6.60) | Un error de cuenta se convierte en un OOS o lo esconde |

Sobre los equipos, ICH Q7 pide calibrarlos según un calendario (5.30), conocer y poder comprobar su estado de calibración (5.33) y no usar los que no cumplen (5.34); si una calibración sale mal, se investiga qué lotes pudo afectar desde la última buena (5.35). La OMS pide una etiqueta o código con su estado y la fecha de la próxima acción (5.36), y retirar del servicio, bien marcado, el que esté fuera de límites (5.40). La trazabilidad de los patrones la viste en [Metrología a fondo](/leccion/metrologia-a-fondo).

### Disoluciones y reactivos: lo justo
Preparación, etiqueta y factor están en [Reactivos, patrones y disoluciones a fondo](/leccion/reactivos-patrones-a-fondo). Tres reglas: se preparan y etiquetan según procedimiento escrito, con fecha de «usar antes de» cuando proceda (ICH Q7, 11.16); llevan fecha de preparación o apertura y firma, y las volumétricas, su última valoración y su factor (EudraLex, 6.21); y su preparación queda en el registro del laboratorio o referenciada en él (ICH Q7, 6.60).

### El dato original del HPLC y de la balanza es electrónico
La guía de la FDA (la agencia del medicamento de Estados Unidos) sobre integridad de datos, en forma de preguntas y respuestas (diciembre de 2018), separa dos clases de registros (pregunta 1d):

- **Estático** (*static record*): fijo, como un papel o una imagen.
- **Dinámico** (*dynamic record*): permite interactuar. Su ejemplo es un cromatograma en el que se puede cambiar la línea base y volver a procesar, de modo que los picos salgan más grandes o más pequeños.

Un pHmetro o una balanza sin memoria dan un tique que es el original: se guarda ese papel o una copia verdadera (pregunta 10), firmado y fechado por quien lo generó, con la identificación de la muestra, y unido al registro (PIC/S, 8.9.1). Pero un espectro o un cromatograma son dinámicos, y su impresión no conserva el registro original completo (pregunta 10).

En el HPLC, el original es el archivo del sistema de datos cromatográficos, no el papel. La FDA pide guardarlo en soporte duradero tras cada paso o inyección, también las incompletas o interrumpidas, que quedan en el audit trail y se investigan (pregunta 12), y conservar cada resultado de un reprocesado, no solo el final (pregunta 14). La PIC/S pide que integraciones manuales y reprocesados sean aprobados y controlados, conservando los originales (9.7). Un resultado invalidado con una investigación bien hecha sigue en el registro del lote, con el informe que lo justifica (FDA, pregunta 2).

### Inyecciones de prueba y «analizar hasta que cumpla»
La FDA prohíbe muestrear y analizar para obtener un resultado concreto o tapar uno inaceptable: es **analizar hasta que cumpla** (*testing into compliance*). Una forma disimulada es inyectar la muestra real del lote como «prueba», «preparación» o «equilibrado» antes de la secuencia oficial, para ver a escondidas si cumple. La FDA lo considera una infracción de las GMP (pregunta 13).

La idoneidad del sistema se hace con patrones: la FDA recuerda que, según la Farmacopea de Estados Unidos, incluye inyecciones repetidas de un patrón, y que el procedimiento dice qué se inyecta y por qué. Si se usa material real, debe ser un patrón secundario caracterizado de otro lote. Y todos los datos, también errores y resultados que no cumplen o dudosos, quedan en el registro (pregunta 13). Lo que dice la OMS sobre estas inyecciones lo viste en [HPLC a fondo](/leccion/hplc-a-fondo), y las reglas de las repeticiones tras un OOS, en [Resultados fuera de especificación (OOS) a fondo](/leccion/oos-a-fondo).

### Muestras de reserva y patrones: lo que dice ICH Q7
En ICH Q7, «11.7» es el título del apartado de muestras de reserva o retención (puntos 11.70 a 11.72) y «11.17», el punto sobre patrones primarios.

- **Muestras de reserva.** Sirven para evaluar en el futuro la calidad de un lote, no para estabilidad. Una por lote, identificada, en envase igual o más protector que el de venta y con cantidad para dos análisis completos. Se guardan un año tras la caducidad o tres tras la distribución, lo más largo; con fecha de reanálisis, tres años tras distribuir el lote entero. Detalle en [Conservación, custodia y trazabilidad de muestras a fondo](/leccion/custodia-a-fondo).
- **Patrones primarios.** Se documenta su origen y se registra su conservación y uso; los de fuente oficial se usan normalmente sin analizarlos si se guardan como indica el proveedor. Los secundarios (11.19), en la lección de reactivos y patrones.

### Errores del laboratorio que acaban en un OOS
Según la guía de la FDA sobre resultados fuera de especificación (revisión 1, mayo de 2022), los errores de laboratorio deberían ser raros; si son frecuentes, apuntan a falta de formación, equipos mal mantenidos o calibrados, o trabajo descuidado. Sus ejemplos: derramar la disolución, no pasar toda la muestra, una dilución mal hecha, un fallo del equipo. La OMS añade a su lista de comprobación el vidrio equivocado y los reactivos o patrones incorrectos (1052, 6.76).

| Error | Cómo se evita |
|---|---|
| Muestras cambiadas o mal identificadas | Número de registro en cada envase y en la hoja; comprobar etiqueta y solicitud al recibir |
| Pesada mal copiada | Interfaz directa balanza-sistema o tique adjunto; segunda persona que mira el original |
| Pipeta o matraz equivocados en una dilución | Material indicado en el método; guardar las preparaciones hasta revisar |
| Patrón o disolución caducados | Etiqueta con caducidad y registro de uso |
| Equipo fuera de calibración o idoneidad que no cumple | Etiqueta de estado; no analizar muestras si no cumple |
| Fórmula o unidades mal | Cálculos validados en el sistema y revisión de la cuenta |

**Una cuenta con datos de ejemplo.** La riqueza por patrón externo se calcula como (área de la muestra / área del patrón) × (masa del patrón / masa de la muestra) × pureza del patrón, si las dos se disuelven y diluyen igual. La fórmula la viste en [Cromatografía a fondo](/leccion/cromatografia-a-fondo). Valores de ejemplo: área del patrón 845200, masa del patrón 25,08 mg, pureza 99,6 %; área de la muestra 851300, masa de la muestra 25,21 mg.

- Correcto: (851300 / 845200) × (25,08 / 25,21) × 99,6 = 1,0072 × 0,9948 × 99,6 = **99,8 %**.
- Si el analista copia la masa de la muestra como 22,51 mg (dos cifras cambiadas): 1,0072 × (25,08 / 22,51) × 99,6 = 1,0072 × 1,1142 × 99,6 = **111,8 %**. Un OOS falso.
- Si al diluir la muestra toma con la pipeta 4 mL de su disolución en vez de los 5 mL del método, antes de enrasar, a la muestra le llega 4/5 de lo debido y el resultado baja en la misma proporción: 99,8 × 4 / 5 = **79,8 %**. Otro OOS falso, ahora por abajo.

El primero lo descubre la revisión del tique original; el segundo, la investigación de fase I, que revisa preparaciones y material. El error peligroso es el pequeño, que deja el resultado dentro de límites: por eso se revisa siempre, no solo cuando algo «sale raro».

### Lo que el laboratorio necesita de ti
El primer eslabón eres tú. EudraLex pide que la etiqueta de la muestra indique contenido, lote, fecha de muestreo y envases muestreados (6.13), y eso pasa tal cual a la descripción de la muestra que exige ICH Q7 (6.60). Si falta, el análisis empieza cojo.

- Rotula en el momento, con letra clara y datos completos.
- Entrega la muestra con su registro, en el plazo y las condiciones del procedimiento: es la cadena de custodia del nivel 5, en la lección de custodia y en [Muestreo en planta a fondo](/leccion/muestreo-a-fondo).
- Si algo raro pasó al muestrear, escríbelo.
- No presiones por un resultado ni pidas «otra muestra» porque la primera no gustó. El laboratorio es independiente para protegerte a ti y al paciente.

Los números de esta lección son de ejemplo. En planta y en el laboratorio manda siempre el procedimiento vigente (SOP): campos, plazos, caducidades y revisiones son los que digan tus procedimientos.
`,
  plant: `
Turno de mañana. Termina el secado del lote ficticio FX-101 en el secadero SD-301 y tomas la muestra de pérdida por secado. La etiqueta lleva producto, lote, punto de toma (SD-301, válvula de muestreo), fecha, hora (10:42) y tus iniciales. La entregas en recepción del laboratorio y firmas el registro de entrega.

A las 12:10 llama Sergio, el supervisor de producción, al laboratorio: el camión espera y pregunta si pueden «mirar ya el HPLC del lote anterior, que estaba casi». Marta, la analista, le contesta que el resultado está pendiente de revisión por una segunda persona y que no puede adelantarlo.

En esa revisión, Íñigo compara la hoja de trabajo con el archivo del sistema de datos cromatográficos y con el tique de la balanza BA-12. En la hoja pone 22,51 mg; en el tique, 25,21 mg. Con 22,51 la riqueza salía 111,8 %, fuera de especificación; con el dato del tique, 99,8 %. Abre la investigación según el procedimiento, documenta el error de transcripción con la prueba del tique, y la corrección queda con una raya, firma, fecha y motivo. El resultado original no se borra.

Tu pérdida por secado sale 0,3 %, dentro del límite de 0,5 %. El laboratorio la comunica con su número de análisis. La anotas en la hoja de producción y sigues con la descarga.

Esa tarde, en la reunión de turno, la jefa de calidad recuerda que si hubiera hecho falta repetir algo, lo decide el laboratorio con su procedimiento, nunca la prisa del camión.
`,
  batchRecord: `
En la hoja de producción (*batch record*) verás lo que tú aportas al laboratorio y lo que el laboratorio te devuelve:

- **Toma de muestra**: punto de toma, fecha, hora real, cantidad y tus iniciales; el número de muestra o código de etiqueta si la hoja lo pide.
- **Entrega**: hora de entrega en el laboratorio y firma del registro de entrega, si tu procedimiento lo exige.
- **Incidencias al muestrear**: válvula que goteaba, muestra que se derramó, equipo parado o en marcha.
- **Resultado del control**: el valor numérico con su unidad (0,3 %, no «conforme»), el número de análisis del laboratorio y la hora en que te lo comunicaron.
- **Controles en proceso que haces tú**: equipo usado (p. ej. un pHmetro de planta), su estado de calibración o verificación, el valor leído y, si la hoja lo pide, la firma de una segunda persona.
- **Espera del resultado**: en qué estado dejas el equipo mientras tanto (agitación, temperatura, vacío) según la hoja.
- **Resultados fuera de especificación**: referencia de la investigación y lo que te indican hacer; nunca se sigue con el paso siguiente sin la autorización que marque el procedimiento.
- **Nuevo muestreo**: solo si lo autoriza calidad, con su referencia.

Nunca se anota un resultado que no te ha comunicado el laboratorio ni el que «se espera».
`,
  terms: [
    { es: "Buenas Prácticas de Laboratorio", en: "Good Laboratory Practice (GLP)", def: "Principios de la OCDE para estudios no clínicos de seguridad; en España, anexo del RD 822/1993 sustituido por el RD 1369/2000. No son las GMP del laboratorio de control." },
    { es: "Estudio no clínico de seguridad", en: "Non-clinical safety study", def: "Estudio para conocer la inocuidad de una sustancia para las personas y el medio ambiente, que se presenta para registrar o autorizar un producto." },
    { es: "Datos primarios", en: "Raw data", def: "Nombre que dan las BPL a los registros y la documentación original del laboratorio, incluidos los de instrumentos automatizados." },
    { es: "Unidad de calidad", en: "Quality unit", def: "Organización independiente de producción que cubre el aseguramiento y el control de calidad (ICH Q7, 2.13)." },
    { es: "Hoja de trabajo analítica", en: "Analytical worksheet", def: "Documento interno, en papel o electrónico, con la muestra, el método, reactivos, patrones, equipos, cálculos y resultados de un análisis." },
    { es: "Cuaderno de laboratorio", en: "Laboratory notebook", def: "Cuaderno encuadernado y paginado donde se anotan los datos brutos de los análisis; se conserva como registro." },
    { es: "Revisión por segunda persona", en: "Second-person review", def: "Comprobación por otra persona de los registros originales, cálculos y conclusiones antes de dar un resultado por válido." },
    { es: "Registro dinámico", en: "Dynamic record", def: "Registro electrónico con el que se puede interactuar, como un cromatograma que se puede reprocesar; su impresión no lo sustituye." },
    { es: "Registro estático", en: "Static record", def: "Registro fijo, como un papel o una imagen; el tique de una balanza sin memoria puede ser el original." },
    { es: "Papel térmico", en: "Thermal paper", def: "Papel de algunos tiques que se borra con el tiempo; de él se guarda una copia verdadera firmada y fechada." },
    { es: "Datos no notificados", en: "Unreported data", def: "Resultados que se generaron en un sistema y no aparecen en el informe; la revisión debe buscarlos." },
    { es: "Inyección de prueba", en: "Test, prep or equilibration run", def: "Inyección fuera de la secuencia oficial; hacerla con la muestra real para ver si cumple es una forma de analizar hasta que cumpla." },
    { es: "Analizar hasta que cumpla", en: "Testing into compliance", def: "Muestrear o analizar con el fin de obtener un resultado concreto o tapar uno inaceptable. Prohibido." },
    { es: "Estado de calibración", en: "Calibration status", def: "Si un equipo tiene la calibración vigente y cuándo toca la próxima; debe poder saberse y comprobarse." },
  ],
  quiz: [
    {
      kind: "choice",
      q: "¿Cuál de estos trabajos sigue los principios de BPL (GLP) del RD 1369/2000 y no las GMP del laboratorio de control?",
      options: [
        "El análisis de riqueza del lote de principio activo para liberarlo",
        "El control de pérdida por secado de una muestra del secadero",
        "Un estudio de toxicidad de una sustancia para registrarla",
        "La recualificación anual del patrón secundario de trabajo",
      ],
      answer: 2,
      explain: "Las BPL se aplican a los ensayos no clínicos de seguridad que se presentan para registrar o autorizar productos. Los análisis de lotes, controles y patrones del laboratorio de QC siguen las GMP.",
    },
    {
      kind: "choice",
      q: "Un analista anota una pesada en un trozo de papel para pasarla luego a la hoja de trabajo. ¿Qué dice la guía de la FDA de 2018?",
      options: [
        "Que no es aceptable anotar en papeles que se tiran tras pasarlos",
        "Que es aceptable si el papel se tira el mismo día del análisis",
        "Que es aceptable si una segunda persona firma la hoja después",
        "Que solo está prohibido si la balanza no imprime ningún tique",
      ],
      answer: 0,
      explain: "La pregunta 12 de la guía dice que no es aceptable registrar datos en papeles que se desechan tras transcribirlos a un cuaderno permanente: ese papel sería el original.",
    },
    {
      kind: "choice",
      q: "El HPLC ha analizado tu lote. ¿Cuál es el registro original del cromatograma?",
      options: [
        "La impresión firmada del cromatograma, que se archiva en papel",
        "El resultado final que el analista copia en la hoja de trabajo",
        "El valor de riqueza que aparece en el certificado de análisis",
        "El archivo electrónico del sistema de datos, con sus metadatos",
      ],
      answer: 3,
      explain: "El cromatograma es un registro dinámico: se puede reprocesar. Según la FDA, su impresión no conserva el registro original completo, así que el original es el archivo electrónico.",
    },
    {
      kind: "choice",
      q: "Antes de la secuencia oficial, un analista inyecta la muestra de tu lote «para ver cómo va» y no la incluye en el informe. ¿Qué es?",
      options: [
        "Una idoneidad del sistema correcta si la columna está nueva",
        "Una forma de analizar hasta que cumpla, prohibida por la FDA",
        "Un equilibrado normal que no hace falta registrar en ningún sitio",
        "Una buena práctica para ahorrar tiempo cuando hay prisa en planta",
      ],
      answer: 1,
      explain: "La FDA considera una práctica que incumple las GMP usar la muestra real en inyecciones de prueba, preparación o equilibrado. La idoneidad se hace con patrones y todos los datos se registran.",
    },
    {
      kind: "choice",
      q: "El supervisor de producción llama al laboratorio para que adelanten un resultado que aún no ha revisado la segunda persona. ¿Qué debe pasar?",
      options: [
        "El analista lo adelanta por teléfono y lo revisan al día siguiente",
        "El analista repite el análisis rápido para dar un dato cuanto antes",
        "Producción decide sobre el lote con el dato sin revisar, por escrito",
        "El laboratorio no lo adelanta: es independiente y el dato no es válido",
      ],
      answer: 3,
      explain: "La independencia del control de calidad respecto de producción es fundamental (EudraLex, capítulo 6), e ICH Q7 pide la firma de una segunda persona que revise los registros originales.",
    },
    {
      kind: "number",
      q: "Riqueza por patrón externo con datos de ejemplo: área del patrón 845200, masa del patrón 25,08 mg, pureza 99,6 %; área de la muestra 851300, masa de la muestra 25,21 mg. ¿Cuál es la riqueza, en %, con un decimal?",
      answer: 99.8,
      tolerance: 0.005,
      unit: "%",
      explain: "(851300 / 845200) × (25,08 / 25,21) × 99,6 = 1,0072 × 0,9948 × 99,6 = 99,8 %.",
    },
    {
      kind: "number",
      q: "Con los mismos datos de la pregunta anterior, el analista copia la masa de la muestra como 22,51 mg en vez de 25,21 mg. ¿Qué riqueza sale, en %, con un decimal?",
      answer: 111.8,
      tolerance: 0.005,
      unit: "%",
      explain: "1,0072 × (25,08 / 22,51) × 99,6 = 1,0072 × 1,1142 × 99,6 = 111,8 %. Un OOS falso que descubre la revisión del tique original.",
    },
    {
      kind: "number",
      q: "Una muestra de riqueza real 99,8 % se diluye tomando con la pipeta 4 mL de su disolución en vez de los 5 mL del método, antes de enrasar; el patrón se prepara bien. ¿Qué riqueza dará el análisis, en %, con un decimal?",
      answer: 79.8,
      tolerance: 0.005,
      unit: "%",
      explain: "A la muestra le llega 4/5 de lo debido: 99,8 × 4 / 5 = 79,8 %. Un lote bueno parece malo por un error de laboratorio.",
    },
    {
      kind: "number",
      q: "Un lote de principio activo con fecha de reanálisis se termina de distribuir en septiembre de 2027. Según ICH Q7 (6.13 y 11.71), ¿hasta qué año como mínimo se guardan sus registros de laboratorio y su muestra de reserva?",
      answer: 2030,
      tolerance: 0,
      unit: "año",
      explain: "Con fecha de reanálisis, los registros y la muestra de reserva se guardan tres años tras distribuir el lote entero: 2027 + 3 = 2030.",
    },
    {
      kind: "number",
      q: "La etiqueta de la balanza dice «próxima calibración: 15/11/2026». Hoy es 22/11/2026. ¿Cuántos días lleva vencida la calibración?",
      answer: 7,
      tolerance: 0,
      unit: "días",
      explain: "Del 15/11/2026 al 22/11/2026 van 7 días. ICH Q7 pide calibrar según un calendario (5.30) y conocer el estado de calibración (5.33): no se usa y se gestiona según el procedimiento.",
    },
  ],
};
