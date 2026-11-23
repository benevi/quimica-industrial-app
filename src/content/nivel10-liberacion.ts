import type { Lesson } from "./types";

export const liberacionAFondo: Lesson = {
  slug: "liberacion-de-lotes-a-fondo",
  level: 10,
  order: 10,
  title: "El certificado de análisis y la liberación del lote a fondo",
  titleEn: "Certificate of analysis and batch release in depth",
  minutes: 38,
  summary:
    "El recorrido de un lote desde la última descarga del secadero hasta que sale de la fábrica: cuarentena y estados, muestreo y análisis, qué revisa calidad en tu hoja y en los registros del laboratorio, quién decide, qué lleva un certificado de análisis según ICH Q7, qué pasa con un lote rechazado, las muestras de reserva y dónde entra la persona cualificada europea.",
  body: `
En la lección corta «El certificado de análisis y la liberación del lote» viste la lista básica. En «La hoja de producción a fondo» viste cómo se revisa un lote (ICH Q7, 6.70 a 6.73) y en «El sistema de calidad a fondo», las quince responsabilidades que la unidad de calidad no delega (2.22). Aquí seguimos a un lote desde que cae el último kilo del secadero hasta que sale por la puerta, y vemos a fondo el certificado de análisis.

### Una idea para empezar: el examen y las notas
Piensa en un examen oficial. Tú lo haces (producción), un profesor lo corrige (el laboratorio) y otra persona revisa todo antes de firmar el acta (garantía de calidad). Sin acta firmada no hay aprobado, aunque hayas sacado un diez. Un lote de principio activo (*active pharmaceutical ingredient*, API) funciona igual: puede estar perfecto, pero hasta que la unidad de calidad firma, nadie lo sabe y nadie lo usa.

### El viaje del lote, de un vistazo
| Paso | Qué pasa | Quién | Estado del lote |
|---|---|---|---|
| 1. Descarga del secadero | El producto seco cae a bidones o big bags | Producción | Cuarentena |
| 2. Envasado y etiquetado | Bidones cerrados, etiquetas con nombre, lote y pesos | Producción | Cuarentena |
| 3. Muestreo | Muestra para análisis y muestra de reserva | Personal formado según el plan aprobado | Cuarentena |
| 4. Análisis | Ensayos de la especificación | Laboratorio de control de calidad (*quality control*, QC) | Cuarentena |
| 5. Revisión de registros | Hoja de producción, registros de laboratorio, desviaciones | Producción y garantía de calidad (*quality assurance*, QA) | Cuarentena |
| 6. Decisión | Aprobar o rechazar | Unidad de calidad | Aprobado o rechazado |
| 7. Certificado de análisis | Se emite con los resultados y la firma | Unidad de calidad | Aprobado |
| 8. Expedición | Sale hacia el cliente | Almacén, con la liberación hecha | Aprobado |

El lote pasa casi todo su viaje en cuarentena. Es normal.

### La cuarentena: el lote existe, pero todavía no vale
ICH Q7 define la **cuarentena** (*quarantine*) como el estado de los materiales aislados **físicamente o por otros medios eficaces** mientras se decide si se aprueban o se rechazan (glosario). La cuarentena física y la cuarentena por sistema informático ya las viste en «Recepción, muestreo y cuarentena a fondo» y en «Almacenamiento a fondo»; aquí se aplican igual al API que tú acabas de descargar.

La regla de fondo está en el apartado 2.17: ningún material se libera ni se usa antes de que la unidad de calidad termine su evaluación de forma satisfactoria, salvo que existan sistemas adecuados que lo permitan. La guía da un ejemplo de esos sistemas: el **traslado en cuarentena** del apartado 10.20.

¿Qué es eso? El 10.20 dice que un API solo se distribuye a terceros después de que la unidad de calidad lo haya liberado, pero que puede **trasladarse en cuarentena** a otra unidad bajo control de la empresa si calidad lo autoriza y hay controles y documentación. El documento de preguntas y respuestas de ICH Q7 (Q&A 10.1, 2015) lo aclara: es un movimiento físico, **no una liberación**. Sirve para que el transporte y los análisis avancen a la vez, por ejemplo cuando un ensayo microbiológico tarda mucho. El material trasladado no se usa hasta que todo el análisis y la revisión estén terminados y calidad lo libere.

### Tres estados y una sola mano que los cambia
| Estado | Qué significa | Qué ves en planta | Qué ves en el sistema |
|---|---|---|---|
| Cuarentena (*quarantine*) | Pendiente de decisión | Etiqueta de cuarentena, zona marcada | Lote bloqueado: no deja consumirlo ni expedirlo |
| Aprobado (*released*) | Calidad ha dicho que vale | Etiqueta de aprobado | Lote de libre utilización |
| Rechazado (*rejected*) | No cumple | Etiqueta de rechazado, zona separada | Lote bloqueado con motivo |

Los nombres, los colores y las pantallas los fija cada empresa. Lo que no cambia es quién mueve el estado de un API: la **unidad de calidad**. Liberar o rechazar todos los API es la primera de sus responsabilidades no delegables (2.22, punto 1). Para materias primas e intermedios de uso interno, el Q&A 2.3 admite que el sistema que diseña calidad permita liberar a otros departamentos, siempre bajo su supervisión; para un API, nunca.

Un detalle: la parte II de las GMP europeas (EudraLex, volumen 4) recoge el texto de ICH Q7, pero añade un apartado de gestión de riesgos en el capítulo 2. Por eso la lista que en ICH Q7 es el 2.22, allí es el 2.32.

### Muestreo: qué pide la norma y qué haces tú
El apartado 11.20 pide analizar cada lote de intermedio y de API para comprobar que cumple la especificación. Para eso hace falta una muestra.

¿Quién la toma? ICH Q7 no lo dice. El Q&A 2.4 lo aclara: la unidad de calidad no tiene por qué muestrear, pero sí revisa y aprueba los planes y procedimientos de muestreo (11.12). Lo hace personal formado y queda anotado en la hoja (6.52 pide registrar «cualquier muestreo realizado»). Según la planta, la toma el operador o alguien del laboratorio: lo dice el procedimiento. Cómo se toma una muestra representativa lo viste en «Muestreo a fondo».

### Análisis: qué mira el laboratorio
La especificación del API tiene que incluir el control de impurezas: orgánicas, inorgánicas y disolventes residuales (11.13). Además, la planta debe tener un **perfil de impurezas** (*impurity profile*) del API: qué impurezas aparecen en un lote típico y en qué rango (11.21). Ese perfil se compara cada cierto tiempo con el registrado o con el histórico, para detectar cambios por nuevas materias primas, parámetros de equipo o cambios de proceso (11.22). Si tu secado fue distinto, puede verse aquí.

Si un resultado sale fuera de especificación, se investiga y se documenta según procedimiento (11.15). Lo viste en «Resultados OOS y OOT: cómo se investigan». Mientras dura esa investigación, el lote sigue en cuarentena.

### Revisar los registros del laboratorio
Antes de liberar no basta con ver el número final. El apartado 6.60 pide que los registros de laboratorio tengan los datos completos de cada ensayo:

- La muestra recibida: material, lote, fecha de muestreo y, si procede, cantidad y fecha de recepción.
- El método, la cantidad de muestra y los patrones y reactivos usados.
- Todos los datos brutos (cromatogramas, espectros) y todos los cálculos, con unidades.
- Los resultados comparados con los criterios de aceptación.
- La firma de quien hizo cada ensayo y la de una **segunda persona** que revisó los registros originales.

La fecha de muestreo y el lote de la etiqueta que escribiste tienen que coincidir con los de la hoja; si no, el resultado no puede atribuirse a tu lote con seguridad.

### Revisar tu hoja de producción: lo que mira calidad
El apartado 6.71 pide que la unidad de calidad revise y apruebe los registros de producción y de laboratorio de las **etapas críticas** antes de liberar. El 6.72, que todas las desviaciones, investigaciones y resultados fuera de especificación se revisen dentro de esa revisión. Y el 6.52 dice qué debe haber en cada paso importante. Traducido a lo que hace quien revisa tu hoja:

| Lo que comprueba | Apartado | Ejemplo de lo que busca |
|---|---|---|
| Fechas y horas de cada paso | 6.52 | Que la descarga del secadero tenga hora de inicio y fin |
| Equipos principales usados | 6.52 | Que el secadero anotado sea el que se usó de verdad |
| Lotes y pesos de cada material cargado | 6.52 | Que el lote del disolvente coincida con su etiqueta y esté aprobado |
| Valores reales de los parámetros críticos | 6.52 | Temperatura y vacío del secado con su valor, no «correcto» |
| Muestreos | 6.52 | Hora, cantidad y quién tomó la muestra |
| Firmas de quien hizo y de quien verificó los pasos críticos | 6.52 | Que no falte la segunda firma en una carga |
| Resultados de controles en proceso | 6.52 | Que la pérdida por secado final esté anotada y cumpla |
| Rendimiento real | 6.52 | Kilos obtenidos frente a los esperados, con la explicación si se desvían |
| Envase y etiqueta | 6.52 | Número de bidones, pesos y una etiqueta representativa |
| Desviaciones y su evaluación | 6.52 y 6.72 | Que cada incidencia anotada tenga su informe o su referencia |
| Correcciones bien hechas | 6.14 | Dato original legible, con fecha y firma de quien corrige |

### Errores que retrasan una liberación
Los diez errores de anotación más habituales ya están en «La hoja de producción a fondo». Aquí miramos otros, los que aparecen al **cruzar** documentos. Son ejemplos didácticos, no una lista oficial:

| Lo que encuentra calidad | Por qué frena el lote |
|---|---|
| La hoja dice «parada del vacío 20 min» y no hay informe de desviación | Toda desviación se documenta y explica (8.15) y se revisa antes de liberar (6.72) |
| La hora de muestreo de la etiqueta no coincide con la de la hoja | El laboratorio no puede asegurar a qué momento del lote corresponde su resultado |
| Se repitió un control en proceso y solo está anotado el segundo valor | Falta un dato real; hay que reconstruir qué pasó |
| El peso total de los bidones no cuadra con el rendimiento anotado | Calidad tiene que entender dónde están los kilos que faltan o sobran |
| Un material cargado aparece en cuarentena en el sistema el día de la carga | Se usó algo no liberado: es una desviación seria |
| Falta la firma del verificador en un paso crítico | El 6.52 la exige; hay que aclarar si alguien lo presenció |

Cada punto supone preguntar, esperar y a veces investigar: días de cuarentena que una buena anotación habría evitado.

### Quién decide: un árbitro que no juega
ICH Q7 pide una unidad de calidad independiente de producción que cumpla las funciones de QA y QC (2.13), y que estén designadas las personas autorizadas para liberar intermedios y API (2.14). El Q&A 2.1 aclara qué significa «independiente»: evitar conflictos de intereses, y que la persona de calidad que toma la decisión final, por ejemplo la liberación de un lote, no tenga responsabilidades de producción.

Por eso tu jefe de turno no puede liberar un API: puede revisar la hoja (2.3), pero no decidir.

### El certificado de análisis, apartado por apartado
El **certificado de análisis** (*certificate of analysis*, CoA) es el documento que dice qué se ha medido en ese lote y con qué resultado. ICH Q7 lo trata en el apartado 11.4:

- **11.40.** Se emiten certificados **auténticos** para cada lote de intermedio o de API **cuando se solicitan**.
- **11.41.** Llevan el nombre del producto (con su grado, si procede), el número de lote y la **fecha de liberación**. Si tiene fecha de caducidad, va en la etiqueta y en el certificado; si tiene fecha de reanálisis, en la etiqueta, en el certificado o en los dos.
- **11.42.** Enumeran cada ensayo hecho según la farmacopea o los requisitos del cliente, con los **límites de aceptación** y los **resultados numéricos** obtenidos, si el ensayo da un número.
- **11.43.** Van **fechados y firmados** por personal autorizado de la unidad de calidad, con el nombre, la dirección y el teléfono del **fabricante original**. Si el análisis lo hizo un reenvasador o reprocesador, aparecen sus datos y una referencia al fabricante original.
- **11.44.** Si un reenvasador, agente o intermediario emite un certificado nuevo, debe indicar el laboratorio que hizo el análisis, hacer referencia al fabricante original y al certificado original del lote, y adjuntar una copia de este.

Un certificado completo de un lote ficticio. Todo son **valores de ejemplo**, salvo los límites de tolueno y etanol, que son los de ICH Q3C (R8):

| Campo | Contenido |
|---|---|
| Título | Certificado de análisis |
| Producto y grado | TVX-210, principio activo ficticio, grado micronizado |
| Número de lote | T26-118 |
| Fecha de fabricación | 16/11/2026 (dato añadido; ICH Q7 no lo exige) |
| Fecha de liberación | 27/11/2026 |
| Fecha de reanálisis | 16/11/2028 |
| Conservación | No conservar por encima de 25 °C; proteger de la humedad |
| Especificación | TVX-210/ESP, versión 4 (referencia añadida) |
| Aspecto | Límite: polvo blanco o casi blanco. Resultado: polvo blanco |
| Identificación por infrarrojo | Límite: conforme con el patrón. Resultado: conforme |
| Identificación por HPLC | Límite: tiempo de retención como el del patrón. Resultado: conforme |
| Contenido (HPLC, sobre sustancia seca) | Límite: 98,0–102,0 %. Resultado: 99,6 % |
| Impureza A | Límite: ≤ 0,15 %. Resultado: 0,06 % |
| Mayor impureza no especificada | Límite: ≤ 0,10 %. Resultado: 0,04 % |
| Impurezas totales | Límite: ≤ 0,50 %. Resultado: 0,18 % |
| Agua (Karl Fischer) | Límite: ≤ 0,5 %. Resultado: 0,21 % |
| Tolueno | Límite: ≤ 890 ppm. Resultado: 112 ppm |
| Etanol | Límite: ≤ 5000 ppm. Resultado: 640 ppm |
| Cenizas sulfatadas | Límite: ≤ 0,1 %. Resultado: < 0,1 % |
| Tamaño de partícula (d90) | Límite: ≤ 100 µm. Resultado: 64 µm |
| Conclusión | El lote cumple la especificación |
| Fabricante original | Química Ejemplo, S. L., polígono ficticio, parcela 7; teléfono de ejemplo |
| Firma | Responsable de liberación de la unidad de calidad, con fecha |

Fíjate: cada resultado numérico va con su número, no con «cumple»; la fecha de fabricación y la referencia a la especificación son útiles, pero ICH Q7 no las pide.

### Los certificados de tus proveedores: cuándo fiarse
Tu planta también recibe certificados: los de las materias primas. Cuánto análisis propio hace falta a pesar de ellos lo viste en «Recepción, muestreo y cuarentena a fondo» (ICH Q7, 7.30 a 7.32). Aquí añadimos lo que hace **fiable** un certificado, según lo que ya has leído del 11.4 y del documento de preguntas y respuestas:

- **Es auténtico** (11.40): emitido por quien hizo el análisis, sin retoques.
- **Está fechado y firmado** por la unidad de calidad de quien lo emite (11.43).
- **Identifica al fabricante original.** El Q&A 17.4 aclara quién es: la instalación donde se produce el API o intermedio final purificado. Secarlo, micronizarlo, molerlo o tamizarlo después no convierte a otra empresa en fabricante original.
- **Si viene de un intermediario,** dice qué laboratorio analizó y adjunta la copia del certificado original (11.44).
- **No sustituye a tu especificación.** El Q&A 7.3 advierte que el certificado del proveedor no tiene por qué coincidir con las especificaciones de quien usa el material.

### Y si sale mal: el lote rechazado
Un lote que no cumple su especificación se identifica como tal y se pone en cuarentena (14.10). No se tira de inmediato: puede **reprocesarse** o **retrabajarse**, y su destino final se registra. La diferencia, en una línea: reprocesar es repetir un paso que ya forma parte del proceso establecido, como volver a cristalizar (14.20); retrabajar es aplicar pasos distintos, y exige investigar antes la causa y demostrar después que el producto es equivalente (14.30 y 14.31). Seguir secando porque el control en proceso dice que el paso no ha terminado no es reprocesar: es el proceso normal (14.21). Los detalles están en «Trazabilidad, devoluciones y retiradas a fondo».

### Las muestras de reserva
Del lote se guarda una **muestra de reserva** (*reserve sample*) para poder evaluar su calidad en el futuro (11.70 a 11.72). Los plazos y el envase los viste en «Envasado y etiquetado a fondo». Dos aclaraciones del documento de preguntas y respuestas:

- **Q&A 11.4.** La idea es guardarla todo el tiempo que el API puede estar en el mercado. Si la fecha de reanálisis es de 5 años y el lote se distribuye enseguida, no se pensó que la reserva se destruyera antes de llegar a esa fecha.
- **Q&A 11.5.** Puede guardarse en un envase más protector que el comercial porque no representa cómo envejece el producto en el mercado: representa cómo era el lote original, por ejemplo para compararlo con una posible falsificación.

### La persona cualificada: en la UE, el medicamento
Oirás hablar de la **persona cualificada** (*qualified person*, QP). Conviene situarla bien.

- El anexo 16 de las GMP europeas trata de la certificación por una QP y la liberación de **medicamentos** con autorización de comercialización (apartado de alcance). Cada lote de **producto terminado** debe ser certificado por una QP en la UE antes de venderse o exportarse (1.1).
- Entre lo que esa QP debe asegurar está que los **principios activos** se han fabricado según GMP (1.7.7) y que se han hecho las auditorías de los sitios que los fabrican (1.7.3).
- La parte II de las GMP europeas, la de los principios activos, recuerda que la directiva obliga a los fabricantes de medicamentos a usar solo principios activos fabricados según GMP. En su texto no aparece la QP: quien libera el API es la unidad de calidad (2.32 en la parte II; 2.22 en ICH Q7).

Resumen: tu API lo libera tu unidad de calidad. La QP aparece después, en quien fabrica el medicamento, y se apoya, entre otras cosas, en que tu planta trabaja con GMP.

### Cuentas sencillas
Todas con **valores de ejemplo**. El punto de partida del periodo de reanálisis lo fija tu empresa; aquí, la fecha de fabricación.

**1. Fecha de reanálisis.** Lote fabricado el 16/11/2026, periodo de reanálisis de 24 meses: 16/11/2028. Con 36 meses sería el 16/11/2029.

**2. Muestra de reserva de un API con fecha de reanálisis.** Se guarda tres años después de que el lote se haya distribuido por completo (11.71). Si el último bidón salió el 20/05/2027, hasta el 20/05/2030 como mínimo.

**3. Muestra de reserva de un API con caducidad.** Lo más largo entre un año después de la caducidad y tres años después de la distribución (11.71). Caducidad 30/06/2029 y distribución completa el 15/09/2027: 30/06/2030 frente a 15/09/2030. Gana la segunda: 15/09/2030.

**4. Cantidad de la muestra de reserva.** Tiene que alcanzar para al menos dos análisis completos (11.72). Si un análisis completo gasta 1 g en aspecto e identificación, 2 g en HPLC, 1 g en agua, 1 g en disolventes, 2 g en cenizas y 5 g en tamaño de partícula, son 12 g; dos análisis, 24 g. Si el procedimiento redondea a 30 g, en un lote de 300 kg eso es 0,030 / 300 × 100 = 0,01 % del lote.

**5. Días en cuarentena.** Descarga el lunes 16/11/2026 y liberación el viernes 27/11/2026: 11 días. Si una firma que falta retrasa la liberación al 02/12/2026, son 16 días.

### Lo que te toca a ti
Etiqueta bidones y muestras con el lote y la hora reales, anota las desviaciones en el momento y no muevas nada marcado en cuarentena. Una desviación anotada no frena el lote; lo frena no saberla.

Los productos, códigos, plazos, cantidades y formatos de esta lección son ejemplos para entender. En planta manda siempre el procedimiento vigente (SOP): él dice cómo se muestrea, quién libera, qué lleva el certificado de tu empresa y cuánto se guarda cada muestra.
`,
  plant: `
Lunes 16/11/2026, 06:40. Terminas de descargar el secadero SD-305: el lote T26-118 del principio activo ficticio TVX-210 queda en 12 bidones. Pesas, etiquetas y anotas cada peso en la hoja. Las etiquetas llevan el estado de cuarentena, y el sistema del almacén tiene el lote bloqueado.

A las 07:10 tomas la muestra para el laboratorio y la de reserva, como dice la hoja. Escribes en las dos etiquetas el lote y la hora: 07:10. En la hoja, la misma hora, la cantidad y tu firma.

El laboratorio analiza durante la semana. El jueves, Laura, de garantía de calidad, revisa tu hoja. Encuentra una nota tuya del sábado: «Corte de vacío en SD-305, 25 min, de 02:15 a 02:40. Avisado jefe de turno». Busca el informe de desviación: está abierto, con la evaluación hecha. La pérdida por secado final cumple y el perfil de impurezas es el habitual. La desviación se cierra sin impacto en la calidad del lote.

Laura también compara la hora de muestreo de la hoja con la del registro del laboratorio: coinciden. Y suma los pesos de los bidones: cuadran con el rendimiento anotado.

El viernes 27/11 la unidad de calidad aprueba el lote. El sistema cambia el estado a aprobado, el almacén cambia las etiquetas y se emite el certificado de análisis con la fecha de liberación del 27/11/2026. El lunes sale el camión.

Once días en cuarentena. Sin la nota del sábado, Laura habría visto el hueco en la tendencia del vacío y habría tenido que reconstruir la noche contigo, días después.
`,
  batchRecord: `
En la parte final de la hoja de producción (*batch record*) verás y anotarás:

- **Descarga del secadero**: hora de inicio y fin, código del equipo (p. ej. SD-305) y estado del producto.
- **Envasado**: número de bidones, peso bruto, tara y neto de cada uno, y total.
- **Rendimiento**: kilos reales frente a los teóricos, y el comentario si se salen del rango de la hoja.
- **Etiquetas**: lote, producto, estado de cuarentena; a veces se pega una etiqueta representativa en la hoja.
- **Muestreo**: muestra de análisis y de reserva, con cantidad, hora, envase y quién la toma.
- **Incidencias**: cada desviación con su hora, a quién se avisó y el número de informe si ya existe.
- **Firmas**: la tuya en cada paso y la del verificador en los pasos críticos.
- **Revisión de producción**: firma de quien revisa que la hoja está completa (responsabilidad de producción).
- **Revisión y liberación**: espacio de la unidad de calidad para su revisión y su decisión. Ese espacio no lo rellenas tú.

El estado del lote no lo cambia producción: lo cambia calidad, en la etiqueta y en el sistema.
`,
  terms: [
    { es: "Liberación del lote", en: "Batch release", def: "Decisión documentada de la unidad de calidad de que un lote cumple y puede usarse o distribuirse." },
    { es: "Cuarentena", en: "Quarantine", def: "Estado de un material aislado físicamente o por otros medios eficaces mientras se decide si se aprueba o se rechaza." },
    { es: "Aprobado", en: "Released / approved", def: "Estado de un lote que la unidad de calidad ha dado por bueno para su uso o venta." },
    { es: "Rechazado", en: "Rejected", def: "Estado de un lote que no cumple su especificación; se identifica, se aparta y se registra su destino final." },
    { es: "Traslado en cuarentena", en: "Transfer under quarantine", def: "Movimiento físico de un lote no liberado a otra unidad bajo control de la empresa, autorizado por calidad; no es una liberación." },
    { es: "Unidad de calidad", en: "Quality unit", def: "Organización independiente de producción que cumple las funciones de garantía y control de calidad y libera los API." },
    { es: "Certificado de análisis", en: "Certificate of analysis (CoA)", def: "Documento auténtico, fechado y firmado por calidad, con los ensayos, límites y resultados de un lote." },
    { es: "Fecha de liberación", en: "Date of release", def: "Fecha en que la unidad de calidad aprobó el lote; ICH Q7 pide que figure en el certificado." },
    { es: "Fabricante original", en: "Original manufacturer", def: "Instalación donde se produce el API o intermedio final purificado; secar, moler o tamizar después no cambia quién es." },
    { es: "Perfil de impurezas", en: "Impurity profile", def: "Descripción de las impurezas de un lote típico, con su identidad y su rango; sirve para detectar cambios en el proceso." },
    { es: "Revisión del registro de lote", en: "Batch record review", def: "Revisión de los registros de producción y de laboratorio, desviaciones e investigaciones antes de liberar." },
    { es: "Muestra de reserva", en: "Reserve / retention sample", def: "Parte del lote que se guarda, en cantidad para dos análisis completos, para evaluar su calidad en el futuro." },
    { es: "Persona cualificada", en: "Qualified person (QP)", def: "En la UE, la persona que certifica cada lote de medicamento terminado antes de su venta o exportación." },
  ],
  quiz: [
    {
      kind: "choice",
      q: "Acabas de descargar el lote del secadero y los análisis aún no han empezado. ¿En qué estado está el lote?",
      options: [
        "Cuarentena, hasta que la unidad de calidad decida",
        "Aprobado, porque la hoja de producción está completa",
        "Rechazado, hasta que el laboratorio diga lo contrario",
        "Aprobado para uso interno, pero no para venderlo",
      ],
      answer: 0,
      explain: "ICH Q7 2.17: nada se libera ni se usa antes de que la unidad de calidad termine su evaluación; mientras tanto, el lote está en cuarentena.",
    },
    {
      kind: "choice",
      q: "Hay un pedido urgente y el jefe de producción quiere liberar el API porque «los análisis están bien». ¿Puede?",
      options: [
        "Sí, si firma también el jefe de turno",
        "Sí, si el cliente ha pedido el certificado",
        "No: liberar un API es responsabilidad de la unidad de calidad y no se delega",
        "No, salvo que el lote sea de un intermedio",
      ],
      answer: 2,
      explain: "ICH Q7 2.22, punto 1: liberar o rechazar todos los API es una responsabilidad de la unidad de calidad que no se delega; el Q&A 2.1 añade que quien decide no tiene funciones de producción.",
    },
    {
      kind: "choice",
      q: "Un certificado de análisis pone «Impurezas totales: cumple» aunque el ensayo da un número. ¿Qué falta según ICH Q7 11.42?",
      options: [
        "La firma del operador que tomó la muestra",
        "El resultado numérico obtenido, junto al límite de aceptación",
        "La fecha de fabricación del lote",
        "El nombre del analista y su número de empleado",
      ],
      answer: 1,
      explain: "ICH Q7 11.42: cada ensayo con su límite y el resultado numérico si el ensayo es numérico; la fecha de fabricación es útil, pero la guía no la exige.",
    },
    {
      kind: "choice",
      q: "Un lote se traslada en cuarentena a otra planta de la misma empresa, con autorización de calidad, mientras termina un ensayo microbiológico. ¿Qué puede hacer la planta que lo recibe?",
      options: [
        "Usarlo ya, porque el traslado equivale a una liberación",
        "Usar la mitad y esperar al resultado para el resto",
        "Reenviarlo a un cliente, siempre que vaya con su certificado",
        "Guardarlo sin usarlo hasta que calidad termine y lo libere",
      ],
      answer: 3,
      explain: "ICH Q7 10.20 y Q&A 10.1: es un movimiento físico, no una liberación; el material no se usa hasta completar análisis y revisión y que calidad lo libere.",
    },
    {
      kind: "choice",
      q: "Una empresa compra un API, lo microniza y lo vende con su propio certificado. ¿Quién es el fabricante original que debe aparecer?",
      options: [
        "La instalación donde se produjo el API final purificado",
        "La empresa que lo ha micronizado, porque es la última",
        "El laboratorio externo que hizo el análisis",
        "El distribuidor que lo ha transportado",
      ],
      answer: 0,
      explain: "Q&A 17.4 de ICH Q7: el fabricante original es donde se produce el API final purificado; secar, micronizar, moler o tamizar no cambia eso.",
    },
    {
      kind: "choice",
      q: "En la Unión Europea, ¿qué certifica la persona cualificada (QP) según el anexo 16?",
      options: [
        "Cada lote de API, antes de que salga de la planta de síntesis",
        "Cada lote de medicamento terminado, antes de venderlo o exportarlo",
        "Solo los certificados de análisis de los proveedores",
        "Cada hoja de producción del operador, antes de archivarla",
      ],
      answer: 1,
      explain: "Anexo 16, 1.1: cada lote de producto terminado lo certifica una QP; según 1.7.7, debe asegurar que los principios activos se fabricaron con GMP, pero el API lo libera su unidad de calidad.",
    },
    {
      kind: "number",
      q: "Un API se fabricó el 16/11/2026 y su periodo de reanálisis es de 36 meses contados desde la fabricación (valor de ejemplo). ¿En qué año es la fecha de reanálisis?",
      answer: 2029,
      tolerance: 0.0001,
      unit: "año",
      explain: "36 meses son 3 años: 16/11/2026 más 3 años da 16/11/2029, es decir, el año 2029.",
    },
    {
      kind: "number",
      q: "Un API con caducidad 30/06/2029 se terminó de distribuir el 15/09/2027. Según ICH Q7 11.71, ¿hasta qué año como mínimo se guarda su muestra de reserva?",
      answer: 2030,
      tolerance: 0.0001,
      unit: "año",
      explain: "Lo más largo entre caducidad más 1 año (30/06/2030) y distribución más 3 años (15/09/2030): 15/09/2030, año 2030.",
    },
    {
      kind: "number",
      q: "Un análisis completo de un API gasta 12 g de muestra (valor de ejemplo). ¿Cuántos gramos necesita como mínimo la muestra de reserva según ICH Q7 11.72?",
      answer: 24,
      tolerance: 0.001,
      unit: "g",
      explain: "ICH Q7 11.72 pide cantidad para al menos dos análisis completos: 2 × 12 = 24 g.",
    },
    {
      kind: "number",
      q: "Un lote se descargó el lunes 16/11/2026 y se liberó el miércoles 02/12/2026. ¿Cuántos días pasó en cuarentena?",
      answer: 16,
      tolerance: 0.001,
      unit: "días",
      explain: "Del 16/11 al 30/11 son 14 días y del 30/11 al 02/12 otros 2: 16 días.",
    },
  ],
};
