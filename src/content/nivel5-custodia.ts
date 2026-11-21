import type { Lesson } from "./types";

export const custodiaAFondo: Lesson = {
  slug: "custodia-a-fondo",
  level: 5,
  order: 6,
  title: "Conservación, custodia y trazabilidad de muestras a fondo: del punto de muestreo al resultado",
  titleEn: "Sample storage, chain of custody and traceability in depth: from the sampling point to the result",
  minutes: 38,
  summary:
    "El viaje completo de una muestra y quién firma cada paso, qué es la cadena de custodia y por qué salva una investigación, ALCOA+ aplicado a la toma, cómo se estropea una muestra por agua, disolvente, luz o tiempo (con cuentas), transporte, recepción en el laboratorio, muestras de reserva según ICH Q7, eliminación y los errores que más lotes complican.",
  body: `
En «Conservación, transporte y cadena de custodia» viste lo básico. Aquí sigues a una muestra de principio a fin y ves por qué importa cada firma y cada hora. Los principios de integridad de datos ya están explicados en «ALCOA+: datos en los que se puede confiar», en «Buenas prácticas de documentación» y en «Las normas: 21 CFR Part 11, Anexo 11 y guías de integridad de datos»; el programa del laboratorio, en «LIMS: el sistema del laboratorio». Aquí solo se aplican a las muestras.

### Por qué te importa a ti, que trabajas en planta
Tú tomas la muestra; el laboratorio de control de calidad (*quality control*, QC) te devuelve un número, y con él se decide si sigues secando, si el lote avanza o si se rechaza. Ese número solo vale si se puede demostrar que lo analizado es exactamente lo que sacaste del equipo y que no cambió por el camino. Es como una carta certificada: si falta el sello de una oficina, nadie asegura que la carta que llega es la que salió.

La guía de normas de correcta fabricación de principios activos, ICH Q7, lo pide así para las muestras de proceso: debe haber procedimientos que aseguren la integridad de las muestras después de tomarlas (punto 8.35).

### El viaje de una muestra, paso a paso
Una muestra pasa por muchas manos. En cada paso alguien hace algo y deja constancia: su nombre o sus iniciales, la fecha y la hora. ICH Q7 (6.14) pide que cada anotación se haga de forma indeleble, justo después de hacer la tarea, y que identifique a quien la hace.

| Paso | Qué se hace | Qué queda registrado | Quién deja constancia |
|---|---|---|---|
| 1. Toma | Sacar la muestra del equipo o del envase según el procedimiento | Lote, punto de muestreo, fecha y hora reales, cantidad, observaciones | Quien la toma |
| 2. Etiquetado | Poner la etiqueta en el mismo momento, en el propio envase | Lo que diga la etiqueta (ver abajo) | Quien la toma |
| 3. Cierre y precinto | Cerrar bien; si el procedimiento lo pide, precinto que delate una apertura | Número de precinto, si lo hay | Quien la toma |
| 4. Registro de la toma | Anotar la toma en la hoja de producción y, si existe, en el sistema del laboratorio | Hora de toma y firma en el paso de la hoja | Quien la toma |
| 5. Transporte | Llevarla al laboratorio en las condiciones fijadas | Hora de salida, condiciones (frío, protección de la luz) | Quien la lleva |
| 6. Entrega y recepción | El laboratorio la revisa y la acepta o la rechaza | Fecha de recepción, número de muestra del laboratorio, estado | Quien entrega y quien recibe |
| 7. Conservación hasta el análisis | Guardarla en las condiciones indicadas | Ubicación y condiciones | Laboratorio |
| 8. Análisis | Pesar, preparar, medir, calcular | Datos brutos, cálculos, resultado | Analista; revisor en una segunda firma |
| 9. Conservación posterior | Guardar lo que sobra y la muestra de reserva | Ubicación, cantidad | Laboratorio |
| 10. Eliminación o archivo | Destruir lo que ya no hace falta o archivar la reserva | Fecha y motivo | Laboratorio, según su procedimiento |

Quién firma qué lo fija tu procedimiento; las guías piden que en cada paso se sepa quién y cuándo.

**La etiqueta.** La guía de muestreo de la Organización Mundial de la Salud (OMS, informe técnico 929, anexo 4) pide etiquetar en el momento de la toma, con datos como tipo de muestra, material, código, lote, cantidad, fecha de muestreo, condiciones de conservación, precauciones de manejo y recipiente de origen. Si el envase tiene tapa separable, recomienda etiquetar todas sus partes para no cruzar tapas.

**El registro de muestreo.** Según la misma guía, el registro de muestreo (*sampling record*) lleva el lote, la fecha y el lugar, el procedimiento usado, los envases y materiales, cualquier anomalía y el nombre y la firma de quien muestrea.

**El laboratorio.** ICH Q7 (6.60) pide describir cada muestra recibida (material, lote, fecha de toma y, cuando proceda, cantidad y fecha de recepción) y firmar el análisis el analista y una segunda persona que revisa.

### La cadena de custodia
La **cadena de custodia** (*chain of custody*) es el registro continuo de quién ha tenido la muestra, desde cuándo hasta cuándo y dónde ha estado. Es como el relevo de un testigo en atletismo: cada corredor que lo entrega y cada uno que lo recoge queda anotado, sin huecos.

La guía de buenas prácticas de la OMS para laboratorios de control de calidad (informe técnico 1052, anexo 4, de 2024) lo dice así:

- Cuando el laboratorio muestrea, su procedimiento debe incluir medidas para que la cadena de custodia sea eficaz (punto 6.1).
- Para las muestras que recibe aplica la regla de las cuatro preguntas: quién, qué, cuándo y dónde, y la cadena de custodia de cada muestra debe registrarse (punto 6.5; la OMS lo escribe para los laboratorios oficiales de control, pero la idea es la misma en una fábrica).
- Al terminar, el expediente de la muestra, con su origen, su cadena de custodia y los datos analíticos, se archiva.

**Por qué importa en una investigación.** Imagina que un resultado sale fuera de especificación. Lo primero que se pregunta es: ¿es el lote o es la muestra? Con la cadena de custodia completa se puede demostrar que la muestra no se cambió ni se alteró (no se abrió, no se calentó, no estuvo horas destapada). Si tiene un hueco, por ejemplo nadie sabe dónde estuvo entre las 23:00 y las 07:00, la duda no se cierra, y eso acaba en repetir el muestreo, retrasar el lote o no poder defender una decisión ante una inspección.

**Qué registros la sostienen.**

- El registro de la toma en la hoja de producción.
- La etiqueta, pegada al envase en el momento.
- El precinto, si se usa. La OMS recomienda cierres y etiquetas que permitan detectar una apertura no autorizada, y envases cerrados y preferiblemente con precinto de garantía (*tamper-evident*).
- La hoja de solicitud de análisis (*test request*) o su equivalente electrónico.
- El registro de entrada del laboratorio, con número de muestra y fecha de recepción.
- Los registros de conservación (qué nevera, qué armario) y los de análisis.

### ALCOA+ en la toma de muestras
La guía de integridad de datos de PIC/S (PI 041-1, de 2021) define los nueve atributos de ALCOA+ para papel y para sistemas informáticos. Aquí no se repite qué significan; se ve qué quieren decir cuando lo que registras es una muestra.

| Atributo | En una muestra | Ejemplo de fallo |
|---|---|---|
| Atribuible (*attributable*) | Se sabe quién la tomó y cuándo | La hoja dice «tomada» sin iniciales |
| Legible (*legible*) | La etiqueta se lee hasta el final, sin dudas | Rotulador que se borra con el disolvente |
| Contemporáneo (*contemporaneous*) | La hora es la real de la toma | Se anota la hora que pone la hoja, no la del reloj |
| Original (*original*) | El primer registro es el que vale | Apuntar en un papelito y pasarlo luego |
| Exacto (*accurate*) | Lo anotado es lo que pasó | Poner «R-1» cuando se tomó del secadero |
| Completo (*complete*) | Están todas las muestras, también las repetidas | Una segunda muestra que no aparece en la hoja |
| Coherente (*consistent*) | Las horas siguen un orden lógico | Recepción en el laboratorio antes que la toma |
| Duradero (*enduring*) | El registro aguanta todo el tiempo de archivo | Etiqueta térmica que se borra en meses |
| Disponible (*available*) | Se encuentra cuando hace falta revisarlo | Hoja de muestreo traspapelada |

Dos puntos de la guía de PIC/S tocan de lleno a quien muestrea:

- Prohíbe los registros temporales, como trozos de papel, y considera un fallo de diseño apuntar en papelitos para pasarlo después.
- En los sistemas informáticos pide que el reloj esté sincronizado con el de los sistemas conectados y que solo personal autorizado pueda cambiarlo. Por eso la hora buena es la del sistema o la del reloj de planta, no la de tu móvil.

La hora importa porque con ella se comprueban el plazo hasta el análisis y el orden de los hechos, y porque un control en proceso se interpreta según cuándo se tomó.

### Cómo se estropea una muestra: conservación según su naturaleza
La guía de muestreo de la OMS pide un envase que no reaccione con la muestra ni la contamine y que la proteja de la luz, el aire y la humedad según el material, con el mínimo espacio de aire (*headspace*) y, para líquidos, frascos de rosca con sello interior inerte que no deje pasar vapor ni humedad.

| Enemigo | Qué hace | Cómo se protege |
|---|---|---|
| Temperatura | Acelera la degradación y la evaporación | Nevera de 2 a 8 °C, congelador a −20 °C o ambiente, según indique el procedimiento |
| Luz | Degrada productos sensibles | Vidrio ámbar, o vidrio transparente envuelto en papel de aluminio |
| Humedad | Un producto higroscópico gana agua | Cierre hermético, poco aire en el envase, poco tiempo abierto |
| Aire (oxígeno) | Oxida productos sensibles | Envase lleno, poco espacio de aire; a veces, nitrógeno si lo acuerdan quien muestrea y el laboratorio |
| Volátiles | Se escapa disolvente y cambia la composición | Tapón bien apretado con sello adecuado, análisis rápido |
| Tiempo | Todo lo anterior empeora con las horas | Plazo máximo entre toma y análisis, si está fijado |

Los 2 a 8 °C y los −20 °C son los ejemplos de almacenamiento en frío que da la guía de la OMS para laboratorios de control (punto 5.17).

**Cuenta 1: una muestra que gana agua.** La pérdida por secado (*loss on drying*, LOD) es el porcentaje de peso que pierde la muestra al secarla. Tomas 10,000 g de producto seco con una pérdida por secado real del 0,40 % (valor de ejemplo). Dentro hay 10,000 × 0,0040 = 0,040 g de agua. La muestra se queda abierta en una mesa y absorbe 0,050 g de agua del aire (valor de ejemplo). Ahora tiene 0,090 g de agua en 10,050 g:

> 0,090 / 10,050 × 100 = 0,90 %

Con un límite de ejemplo del 0,5 %, un lote bueno parece no conforme. Se abre una investigación y quizá se vuelve a secar un producto que ya estaba bien.

**Cuenta 2: un frasco mal cerrado.** Muestra del secadero para medir disolvente residual: 10,00 g con un 1,20 % de disolvente, es decir, 0,120 g (valor de ejemplo). El tapón queda flojo y se escapan 0,010 g por hora (tasa de ejemplo) durante 3 horas: 0,030 g. Quedan 0,090 g de disolvente en 9,970 g:

> 0,090 / 9,970 × 100 = 0,90 %

Con un límite de ejemplo del 1,0 %, el producto parece seco sin estarlo. Es el error peor: tranquiliza en vez de alarmar.

**Cuenta 3: el plazo hasta el análisis.** Si el procedimiento fija un tiempo máximo entre toma y análisis, se cuenta desde la hora real de la toma. Muestra tomada a las 22:40 con un plazo de 6 horas (valor de ejemplo): hay que analizarla antes de las 04:40 del día siguiente. Si llega al laboratorio a las 03:10, quedan 1,5 horas. Si la hora de toma está mal anotada, toda la cuenta está mal.

### Transporte de la muestra
**Dentro de la planta.** El trayecto es corto, pero hay golpes, sol en una ventana o paradas con la muestra en el bolsillo. La OMS pide embalar y transportar las muestras de forma que no se rompan ni se contaminen, con todos los envases cerrados y etiquetados. Si una muestra se reparte en varios envases, recomienda llevarlos en una caja cerrada y etiquetada con el producto, el origen, el tamaño de muestra, la fecha y el lugar de muestreo y quién muestreó.

**A un laboratorio externo.** Según ICH Q7 (punto 16), los laboratorios contratados deben cumplir las normas de correcta fabricación, el cliente los evalúa y un contrato escrito reparte las responsabilidades. El envío añade un embalaje contra golpes y fugas, la temperatura que indique la etiqueta y la documentación que acompaña a la muestra (solicitud de análisis y registro de salida).

**Muestras de productos peligrosos.** La guía de muestreo de la OMS pide leer antes la ficha de datos de seguridad y usar la protección adecuada, y que la etiqueta lleve las precauciones de manejo. La guía de laboratorios pide que la solicitud de análisis anote el peligro asociado y que los productos tóxicos o peligrosos se identifiquen, se etiqueten y se guarden aparte. Enviar productos peligrosos por carretera tiene además sus propias normas de transporte, las del acuerdo ADR que verás en la sección 14 de las fichas de datos de seguridad. Este curso no las detalla: de eso se encarga el responsable de expediciones con su procedimiento.

### Recepción en el laboratorio
Según la guía de la OMS para laboratorios (informe 1052), al llegar una muestra:

1. **Se revisa la solicitud.** Se comprueba que hay muestra suficiente para los ensayos pedidos y que el laboratorio puede hacerlos. Cualquier duda se resuelve con quien la envió antes de empezar.
2. **Se registra.** Cada muestra recibe un número de registro único (lotes distintos, números distintos), que se pega en cada envase sin tapar las otras marcas. En el registro de entrada quedan el número, la fecha de recepción y la sección a la que va.
3. **Se inspecciona a la vista.** Se comprueba que la etiqueta cuadra con la solicitud. Lo que se ve se anota, con fecha y firma. Si hay diferencias o la muestra está dañada, se anota sin demora y se consulta enseguida con quien la envió.

En la práctica se mira la identidad (etiqueta y solicitud coinciden), el envase (sin roturas, fugas ni precinto roto), la cantidad y las condiciones (fría si debía ir fría, dentro de plazo).

**Si la muestra llega mal**, el laboratorio no la analiza como si nada: un análisis perfecto de una muestra estropeada da un resultado perfecto de algo que no es tu lote. Lo anota, te lo comunica y, según su procedimiento, pide otra. No es un castigo: es el sistema funcionando.

### Muestras de reserva y de retención
ICH Q7 (11.7) usa los dos nombres juntos, muestras de reserva o de retención (*reserve/retention samples*). Su finalidad no es hacer estudios de estabilidad, sino poder evaluar en el futuro la calidad de un lote ya fabricado: por ejemplo, ante una reclamación de un cliente.

| Qué | Lo que pide ICH Q7 |
|---|---|
| De qué | De cada lote de principio activo, bien identificada |
| Cuánto | Lo suficiente para al menos dos análisis completos según farmacopea o, si no hay monografía, dos análisis completos según especificación |
| Dónde | En el mismo sistema de envase del producto, o en uno equivalente o más protector que el de venta |
| Cuánto tiempo, con fecha de caducidad | Un año tras la caducidad o tres años tras la distribución, lo que sea más largo |
| Cuánto tiempo, con fecha de reanálisis | Tres años después de que el lote se haya distribuido por completo |

Con un ejemplo de cantidad: si un análisis completo según la especificación gasta 12 g (valor de ejemplo), la reserva debe tener como mínimo 2 × 12 = 24 g.

La guía de muestreo de la OMS también pide cantidad para al menos dos análisis de confirmación y, si hay varias muestras de retención, que cada una se identifique, embale y precinte por separado. La guía de laboratorios pide guardarlas en un almacén separado, en las condiciones adecuadas y bajo llave: por eso el acceso al armario de reservas está controlado.

### Eliminación de muestras y de sus restos
La guía de la OMS pide criterios escritos para eliminar muestras y procedimientos para retirar sus residuos de forma segura, según la normativa ambiental. Dos ideas para ti:

- **Una muestra nunca vuelve al lote.** La guía de muestreo de la OMS lo dice tal cual: lo que sobra va donde indique el procedimiento, no al equipo.
- **Los restos siguen siendo producto químico.** Un vial con restos de disolvente es un residuo de disolvente, y se trata como tal.

### Errores típicos y lo que cuestan

| Error | Qué provoca en el lote |
|---|---|
| Etiqueta intercambiada entre dos muestras | Cada resultado se asigna al lote o a la etapa equivocada |
| Hora anotada después, de memoria | No se puede demostrar el plazo ni el orden de los hechos |
| Muestra olvidada en una mesa | Gana agua, pierde disolvente, coge luz o calor; plazo superado |
| Frasco mal cerrado | Resultado falso, a veces tranquilizador |
| Precinto roto sin explicación | La muestra deja de ser defendible |

**Un caso ficticio.** Turno de noche. Dos muestras del mismo producto salen casi a la vez: una del reactor R-207 y otra del secadero SD-305. El operador las etiqueta al llegar al vestuario, no en el punto de muestreo, y cruza las etiquetas. El laboratorio mide disolvente: la del «secadero» da un valor altísimo y la del «reactor» un valor imposible de bajo. Se abre una investigación. Como las horas de toma estaban bien anotadas y el laboratorio había registrado el aspecto de cada muestra (una era polvo, la otra suspensión), se reconstruye el cambio. Se muestrea otra vez y se pierde medio turno, pero el lote no sufre. Sin esas anotaciones, nadie sabría qué muestra era cuál.

En tu planta manda siempre el procedimiento vigente (SOP): envase, plazo, condiciones, quién firma y cómo se entrega. Esta lección explica por qué existen esas reglas.
`,
  plant: `
Lote ficticio K7-2611, producto ficticio API-K7. El secadero de vacío SD-305 lleva 14 horas. La hoja de producción pide una muestra de control en proceso para medir disolvente residual, con un plazo de análisis de 4 horas desde la toma (valor de ejemplo).

A las 02:15, según el reloj del panel, Victor toma la muestra por la válvula tomamuestras cerrada del secadero. Usa un vial de vidrio ámbar con tapón de rosca y sello interior, lo llena casi hasta arriba y lo cierra al momento. Allí mismo pega la etiqueta impresa del sistema del laboratorio, con el lote, el punto SD-305, la fecha, la hora 02:15 y sus iniciales. Pone el precinto numerado que pide el procedimiento y anota su número en la hoja.

Firma el paso de la hoja con la hora real de la toma, no con la hora prevista que figura en la instrucción (02:00). Lleva el vial al laboratorio en la caja de transporte, sin paradas. A las 02:31 lo entrega en la ventanilla de recepción. La analista comprueba que la etiqueta coincide con la solicitud, que el precinto está entero y que hay cantidad suficiente. Registra la muestra con el número de laboratorio QC-26-11873 (ficticio) y anota la hora de recepción.

A las 05:40 llega el resultado: 0,6 % de disolvente frente a un límite de ejemplo del 1,0 %. El secado termina. Si alguien preguntara meses después, cada paso tiene un nombre y una hora.
`,
  batchRecord: `
- Paso de muestreo: punto de toma (por ejemplo, SD-305), fecha y hora real de la toma, iniciales o firma.
- Número de muestra o etiqueta del sistema del laboratorio, pegada o transcrita según el procedimiento.
- Número de precinto, si el procedimiento lo exige.
- Observaciones de la muestra: aspecto, color, grumos, cualquier anomalía.
- Hora de entrega al laboratorio y quién la entrega, si la hoja lo pide.
- Resultado recibido, con la hora y la comparación con el límite (por ejemplo, disolvente ≤ 1,0 %, valor de ejemplo).
- Si una muestra se repite: el motivo, la nueva hora de toma y la referencia a la desviación o comunicación, nunca borrar la primera.
- En el envasado final: muestra de reserva tomada, cantidad y ubicación.
`,
  terms: [
    { es: "Cadena de custodia", en: "Chain of custody", def: "Registro continuo de quién ha tenido la muestra, cuándo y dónde, desde la toma hasta su eliminación o archivo." },
    { es: "Registro de muestreo", en: "Sampling record", def: "Documento con lote, fecha, lugar, procedimiento, envases, anomalías y firma de quien muestrea." },
    { es: "Solicitud de análisis", en: "Test request", def: "Formulario o registro electrónico que acompaña a la muestra y dice qué hay que analizar y por qué." },
    { es: "Número de registro de la muestra", en: "Sample registration number", def: "Código único que el laboratorio asigna a cada muestra al recibirla." },
    { es: "Precinto de garantía", en: "Tamper-evident seal", def: "Cierre que delata si alguien ha abierto el envase." },
    { es: "Muestra de reserva o de retención", en: "Reserve / retention sample", def: "Muestra de cada lote guardada para poder evaluarlo en el futuro; ICH Q7 pide cantidad para al menos dos análisis completos." },
    { es: "Espacio de cabeza", en: "Headspace", def: "Aire que queda en el envase por encima de la muestra; conviene que sea mínimo." },
    { es: "Higroscópico", en: "Hygroscopic", def: "Que absorbe agua del aire." },
    { es: "Volátil", en: "Volatile", def: "Que se evapora con facilidad, como muchos disolventes." },
    { es: "Pérdida por secado", en: "Loss on drying (LOD)", def: "Porcentaje de peso que pierde una muestra al secarla." },
    { es: "Plazo de análisis", en: "Sample hold time", def: "Tiempo máximo entre la toma y el análisis, si el procedimiento lo fija." },
    { es: "Inspección de recepción", en: "Receipt inspection", def: "Comprobación visual de identidad, envase, cantidad y condiciones al llegar la muestra al laboratorio." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Tomas 5,000 g de producto seco con una pérdida por secado real del 0,30 %. El vial se queda abierto y la muestra absorbe 0,030 g de agua. ¿Qué pérdida por secado dará el análisis? Redondea a dos decimales.",
      answer: 0.89,
      tolerance: 0.02,
      unit: "%",
      explain: "Agua inicial: 5,000 × 0,0030 = 0,015 g. Agua final: 0,015 + 0,030 = 0,045 g en 5,030 g. 0,045 / 5,030 × 100 = 0,89 %, casi el triple del valor real.",
    },
    {
      kind: "number",
      q: "Una muestra de 8,00 g contiene un 2,00 % de disolvente. El tapón queda flojo y se escapan 0,012 g de disolvente por hora durante 5 horas. ¿Qué porcentaje de disolvente medirá el laboratorio? Redondea a dos decimales.",
      answer: 1.26,
      tolerance: 0.02,
      unit: "%",
      explain: "Disolvente inicial: 8,00 × 0,0200 = 0,160 g. Se pierden 0,012 × 5 = 0,060 g. Quedan 0,100 g en 7,940 g: 0,100 / 7,940 × 100 = 1,26 %, más bajo que el real.",
    },
    {
      kind: "number",
      q: "Tomas una muestra a las 06:50. El procedimiento fija un plazo máximo de 8 horas entre toma y análisis. La muestra llega al laboratorio a las 11:20. ¿Cuántas horas quedan para analizarla?",
      answer: 3.5,
      tolerance: 0.01,
      unit: "h",
      explain: "Límite: 06:50 + 8 h = 14:50. De 11:20 a 14:50 hay 3 h 30 min, es decir, 3,5 h.",
    },
    {
      kind: "number",
      q: "Un análisis completo según la especificación de un principio activo gasta 15 g. Según ICH Q7, ¿cuántos gramos como mínimo debe tener su muestra de reserva?",
      answer: 30,
      tolerance: 0.01,
      unit: "g",
      explain: "ICH Q7 (11.72) pide cantidad para al menos dos análisis completos: 2 × 15 = 30 g.",
    },
    {
      kind: "number",
      q: "Un lote de principio activo tiene fecha de caducidad en octubre de 2027 y se distribuyó en febrero de 2026. Según ICH Q7, ¿hasta qué año como mínimo se guarda su muestra de reserva?",
      answer: 2029,
      tolerance: 0.0001,
      unit: "año",
      explain: "Un año tras la caducidad da octubre de 2028; tres años tras la distribución da febrero de 2029. Manda el plazo más largo: 2029.",
    },
    {
      kind: "choice",
      q: "Tomas una muestra a las 03:12, pero en la hoja la hora prevista del paso es 03:00. ¿Qué hora anotas?",
      options: [
        "La de 03:12, leída en el reloj de planta al tomarla",
        "La de 03:00, porque es la que pide la instrucción",
        "La que marque tu móvil cuando llegues al laboratorio",
        "Ninguna, el laboratorio ya pondrá la de recepción",
      ],
      answer: 0,
      explain: "El registro debe ser contemporáneo y exacto: la hora real de la toma, del reloj de referencia. El plazo de análisis se cuenta desde ella.",
    },
    {
      kind: "choice",
      q: "Al llegar al laboratorio, la analista ve que el precinto de tu muestra está roto y nadie sabe por qué. ¿Qué es lo correcto?",
      options: [
        "Analizarla igual, porque el producto parece el mismo",
        "Anotarlo, avisar a quien la envió y seguir el procedimiento",
        "Poner un precinto nuevo para que el registro cuadre",
        "Mezclarla con otra muestra del lote para tener más",
      ],
      answer: 1,
      explain: "La guía de la OMS pide anotar sin demora cualquier daño o diferencia y consultar a quien envió la muestra. Con el precinto roto, la cadena de custodia ya no garantiza que la muestra sea la original.",
    },
    {
      kind: "choice",
      q: "Has tomado de más y te sobra producto en el vial de muestra. ¿Qué haces con el sobrante?",
      options: [
        "Lo devuelves al secadero para no perder rendimiento",
        "Lo guardas en tu taquilla por si hace falta repetir",
        "Lo gestionas como indica el procedimiento, nunca al lote",
        "Lo juntas con la muestra de reserva del lote anterior",
      ],
      answer: 2,
      explain: "La guía de muestreo de la OMS dice que las muestras nunca se devuelven al lote. El sobrante va donde diga el procedimiento: residuo o reserva de ese mismo lote.",
    },
    {
      kind: "choice",
      q: "Dos muestras del mismo producto (una del reactor, otra del secadero) dan resultados absurdos e invertidos. ¿Qué dato permite reconstruir mejor lo que pasó?",
      options: [
        "El color del rotulador usado en las etiquetas",
        "El número de lote, que es igual en las dos muestras",
        "La firma del jefe de turno al final de la hoja",
        "Las horas reales de toma y el aspecto anotado de cada una",
      ],
      answer: 3,
      explain: "Si cada toma tiene su hora real y sus observaciones (polvo o suspensión, por ejemplo), se puede saber qué muestra era cuál. El lote no distingue entre ellas.",
    },
    {
      kind: "choice",
      q: "Un compañero apunta la hora y el peso de la muestra en un papelito y los pasa a la hoja al final del turno. ¿Qué principio falla sobre todo?",
      options: [
        "Disponible, porque la hoja está en el archivo",
        "Duradero, porque el papel de la hoja es bueno",
        "Original y contemporáneo: no es el primer registro ni a tiempo",
        "Legible, porque el papelito tiene buena letra",
      ],
      answer: 2,
      explain: "La guía de PIC/S prohíbe los registros temporales como trozos de papel: el dato debe anotarse en el registro oficial en el momento.",
    },
  ],
};
