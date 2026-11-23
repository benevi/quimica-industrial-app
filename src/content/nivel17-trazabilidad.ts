import type { Lesson } from "./types";

export const trazabilidadAFondo: Lesson = {
  slug: "trazabilidad-a-fondo",
  level: 17,
  order: 8,
  title: "Trazabilidad, devoluciones y retiradas a fondo: seguir cada kilo desde la materia prima hasta el cliente",
  titleEn: "Traceability, returns and recalls in depth: following every kilo from raw material to customer",
  minutes: 38,
  summary:
    "Cómo se construye el árbol de un lote hacia atrás y hacia delante, qué registros lo hacen posible, qué dicen ICH Q7 y las buenas prácticas de distribución sobre mezclas, envíos, devoluciones, rechazos, reclamaciones y retiradas, con las cuentas de kilos y rendimientos y lo que hace el operador para que nada se pierda.",
  body: `
En la lección anterior viste en pocas líneas qué es la trazabilidad. Aquí verás cómo se construye, registro a registro y kilo a kilo, y cómo se usa deprisa cuando hace falta.

### El árbol genealógico de un lote
Piensa en tu árbol genealógico: hacia arriba, tus padres y abuelos; hacia abajo, tus hijos y nietos. Ante una enfermedad hereditaria, el médico mira hacia arriba para saber de dónde viene y hacia abajo para avisar a quien pueda tenerla.

Un lote (*batch* o *lot*) de principio activo tiene exactamente ese árbol:

- **Trazabilidad hacia atrás** (*backward traceability*): de qué lotes de materias primas, disolventes, reactivos e intermedios salió, en qué equipos se hizo, quién lo hizo y cuándo.
- **Trazabilidad hacia delante** (*forward traceability*): a qué lotes posteriores pasó y a qué clientes se envió, en qué envases y en qué cantidad.

ICH Q7 define el número de lote (*batch number*) como una combinación única de números, letras o símbolos que identifica un lote «y a partir de la cual se puede determinar su historia de producción y de distribución». Es la llave del árbol.

### Por qué es obligatoria y para qué sirve
No es papeleo; sirve para:

1. **Investigar.** ICH Q7 (6.53) pide que la investigación de una desviación crítica o de un lote que no cumple se extienda a otros lotes relacionados con el fallo. Sin el árbol, no sabes cuáles son.
2. **Retirar.** ICH Q7 (10.24) exige poder saber con rapidez a quién se distribuyó cada lote, para poder retirarlo. La guía europea de buenas prácticas de distribución de principios activos (2015/C 95/01, punto 6.15) pide lo mismo a los distribuidores.

Sin trazabilidad solo quedan dos opciones malas: retirarlo todo o no retirar lo que hace falta.

### Los registros que sostienen el árbol, de la recepción al envío
Cada rama es un registro: si falta uno, la rama se rompe.

| Etapa | Qué se registra | Dónde lo pide ICH Q7 |
|---|---|---|
| Recepción | Fabricante, identidad y cantidad de cada envío; proveedor y su número de control (su lote), si se conoce; número asignado al recibirlo y fecha | 6.30 |
| Identificación interna | Cada envase o grupo de envases recibe un código o número propio, que se usa en todos sus registros, y un estado | 7.24 |
| Subdivisión | Si se reparte un material en otro recipiente, este lleva nombre o código, número de recepción, peso y fecha de reanálisis si procede | 8.11 |
| Fabricación | La hoja de producción (*batch production record*) anota peso y número de lote de cada material usado, también el reprocesado, equipos principales, fechas, rendimiento y desviaciones | 6.52 |
| Uso de equipos | Fecha, producto y número de lote de cada lote procesado en cada equipo principal | 6.20 |
| Envasado y etiquetado | Etiqueta con nombre o código y número de lote; conciliación de etiquetas emitidas, usadas y devueltas | 9.42 y 9.31 |
| Distribución | Un sistema que permite saber a quién fue cada lote | 10.24 |
| Conservación | Los registros de producción, control y distribución se guardan al menos 1 año después de la fecha de caducidad del lote; si el lote tiene fecha de reanálisis, al menos 3 años después de distribuirlo por completo | 6.13 |

Fíjate: el material recibe **dos números**, el del proveedor (P-7781, por ejemplo) y el interno de tu planta (MP-26-0118), unidos en el registro de recepción. En la hoja de producción se escribe el interno; el del proveedor sirve para hablar con él si hay un problema.

Y un caso especial: un disolvente que se descarga en un tanque con existencias. ICH Q7 (7.21) pide identificarlo, analizarlo si procede y liberarlo antes de mezclarlo. Si ese lote sale malo después, pueden estar afectados todos los lotes alimentados desde el tanque mientras estaba dentro: qué lotes entraron en el tanque y cuándo también es parte del árbol.

### Un árbol completo, con números
Todo es **valor de ejemplo**: productos, códigos, clientes y cantidades son ficticios.

El principio activo ficticio KX-50 se hace en dos pasos: el intermedio INT-KX en el reactor R-210, aislado en la centrífuga CF-310; después, el KX-50, que se seca en el secadero SD-410 y se envasa.

| Rama | Material | Número interno | Lote del proveedor | Cantidad | Registro que lo demuestra |
|---|---|---|---|---|---|
| Materia prima 1 | Sólido de partida KA-12 | MP-26-0118 | P-7781 | 400 kg (16 sacos de 25 kg) de los 1000 kg recibidos | Recepción y hoja del intermedio |
| Materia prima 2 | Disolvente D-2 | MP-26-0124 | L-3390 | 2400 kg desde el tanque TK-302 | Registro del tanque y hoja del intermedio |
| Materia prima 3 | Reactivo RB-7 | MP-26-0131 | Q-552 | 120 kg (6 bidones de 20 kg) | Recepción y hoja del intermedio |
| Intermedio | INT-KX | INT-26-014 | No aplica | 468 kg | Hoja del intermedio, uso de R-210 y CF-310 |
| Principio activo | KX-50 | KX-26-031 | No aplica | 312 kg en 13 bidones de 24 kg, numerados del 01 al 13 | Hoja del principio activo, envasado |
| Cliente A | Fabricante ficticio de comprimidos | Bidones 01 a 08 | No aplica | 192 kg | Registro de distribución y documentos de envío |
| Cliente B | Fabricante ficticio de suspensiones | Bidones 09 a 12 | No aplica | 96 kg | Registro de distribución y documentos de envío |
| Almacén | Stock liberado sin enviar | Bidón 13 | No aplica | 24 kg | Registro de almacén |

Para simplificar, las muestras de análisis y de retención se tomaron aparte y no entran en estas cuentas.

### Las cuentas de la trazabilidad
**Cuenta 1. ¿Cuánto de un lote de materia prima fue a cada lote?** Del lote MP-26-0118 se recibieron 1000 kg. Al INT-26-014 fueron 400 kg; al lote siguiente, INT-26-015, otros 350 kg; quedan 250 kg en almacén.

Al INT-26-014 fue 400 / 1000 = 0,40, el 40 %; al INT-26-015, el 35 %; en almacén, el 25 %. Comprobación: 400 + 350 + 250 = 1000 kg. Si la suma no da, hay un hueco que investigar.

**Cuenta 2. ¿Cuántos kilos hay en cada cliente?** Cliente A: 8 × 24 = 192 kg. Cliente B: 4 × 24 = 96 kg. Almacén: 24 kg. Comprobación: 192 + 96 + 24 = 312 kg, el lote entero.

**Cuenta 3. El rendimiento de la cadena.** ICH Q7 (8.14) pide comparar el rendimiento real con el esperado e investigar las desviaciones en pasos críticos. El rendimiento teórico (*theoretical yield*) es lo que saldría sin ninguna pérdida. Supón un teórico de 520 kg para el intermedio y de 360 kg para el principio activo.

- Paso 1: 468 / 520 = 0,900, el 90,0 %.
- Paso 2: 312 / 360 = 0,867, el 86,7 %.
- Cadena: los rendimientos se multiplican. 0,900 × 0,867 = 0,780, el 78,0 %.

Como dos coladores seguidos: al final pasa el 78 % de lo que entró.

**Cuenta 4. ¿Cuánta materia prima hay «detrás» de lo que tiene cada cliente?** ICH Q7 define el lote como homogéneo dentro de límites, así que cada kilo lleva la misma proporción de su historia. Detrás de 312 kg de KX-26-031 hay 400 kg de MP-26-0118: 1,28 kg por kilo. El cliente A, con 192 kg, tiene detrás 192 × 400 / 312 = 246 kg. Es un reparto de responsabilidad, no lo que queda de KA-12 en el producto: por el camino se ha transformado.

### La mezcla de lotes: cuándo sí y cuándo no
ICH Q7 (8.40) define la mezcla (*blending*) como juntar materiales que cumplen la misma especificación para obtener un intermedio o principio activo homogéneo. Y aclara lo que **no** es mezcla: juntar fracciones de un mismo lote durante el proceso, por ejemplo **varias descargas de centrífuga de una misma cristalización**, o juntar fracciones de varios lotes para seguir procesándolas. Eso es parte del proceso de producción.

Las reglas, una a una:

- **Nunca se mezcla un lote fuera de especificación** (*out of specification*, OOS) con otros para que cumpla (8.41). Cada lote debe haberse fabricado con un proceso establecido y cumplir por separado antes de mezclar.
- Mezclas aceptables (8.42): lotes pequeños para hacer uno mayor, y colas (*tailings*), pequeñas cantidades aisladas de lotes del mismo producto.
- El proceso de mezcla se controla y documenta, y el lote mezclado se analiza cuando corresponde (8.43).
- La hoja de la mezcla debe permitir volver a cada uno de los lotes que la forman (8.44).
- Si las propiedades físicas son críticas (comprimidos, suspensiones), se valida que la mezcla sea homogénea, con tamaño de partícula y densidades (8.45).
- La fecha de caducidad o de reanálisis de la mezcla se basa en la fecha de fabricación del lote o la cola **más antigua** (8.47).

La trazabilidad se complica: el lote mezclado tiene varios «padres», cada uno con sus materias primas. Un problema en la materia prima de uno solo afecta a toda la mezcla.

**La cuenta de una mezcla.** Lote KX-26-040: 180 kg con una riqueza (*assay*) del 99,2 %. Colas del KX-26-041: 60 kg con 99,8 %. La especificación de ejemplo pide al menos 99,0 %. Los dos cumplen por separado, así que se pueden mezclar. Si la mezcla queda homogénea, la riqueza esperada es la media ponderada por los kilos:

> (180 × 99,2 + 60 × 99,8) / (180 + 60) = (17856 + 5988) / 240 = 99,35 %

La cuenta no sustituye al análisis del lote mezclado: manda lo que mida el laboratorio.

Ahora el caso prohibido. Un lote de 150 kg con 98,6 % no cumple. Si lo juntaras con 250 kg de otro con 99,6 %, la media sería (14790 + 24900) / 400 = 99,2 %, que «cumpliría». Está prohibido justo por eso: el resultado esconde un lote malo, y el defecto que lo hizo fallar (una impureza, un fallo de proceso) sigue dentro, solo que diluido.

### Distribución: llegar bien y saber adónde
ICH Q7 (capítulo 10) pide, entre otras cosas:

- Que solo se distribuya a terceros lo que Calidad ha liberado (10.20).
- Transportar de forma que la calidad no empeore (10.21) y escribir en la etiqueta las condiciones especiales de transporte o almacenamiento (10.22).
- Que el transportista contratado conozca y cumpla esas condiciones (10.23).
- Zonas separadas para lo que está en cuarentena, rechazado, devuelto o retirado, salvo que otro sistema evite su uso por error (10.11).

Los envases que salen de la planta van precintados, para que quien recibe vea si alguien los abrió (9.46).

Entre tu planta y el cliente puede haber agentes, comerciantes, distribuidores o reenvasadores. ICH Q7 (capítulo 17) les exige cumplir las GMP y guardar la trazabilidad completa: fabricante original, pedidos, documentos de transporte y de recepción, lote del fabricante, certificados de análisis auténticos y fecha de reanálisis o caducidad (17.20). Deben dar al cliente el nombre del fabricante original y los lotes (17.61) y pasar la información de calidad en las dos direcciones (17.60).

La guía europea de distribución (2015/C 95/01) pide a los distribuidores registrar cada compra y venta con fecha, producto, lote, cantidad, proveedor, fabricante original y destinatario (4.9), y mantener siempre la identidad del producto, del lote y del envase, con las etiquetas originales legibles (6.14).

### Devoluciones
Un bidón vuelve del cliente. ICH Q7 (14.5) dice qué hacer:

1. Se **identifica como devuelto** y se pone en **cuarentena** (14.50).
2. Calidad evalúa. Si el almacenamiento, el transporte o el estado de los envases hacen dudar de su calidad, se reprocesa, se retrabaja o se destruye (14.51).
3. Se registra: nombre y dirección de quien lo devuelve, producto, lote y cantidad, motivo, y qué se hizo con él (14.52).

La guía de distribución (7.2) solo deja volver al stock un devuelto si se cumplen todas estas condiciones: envase original cerrado con sus precintos, prueba de que se guardó bien, vida útil restante aceptable, evaluación por una persona autorizada y ninguna pérdida de trazabilidad.

### Rechazo, reprocesado y retrabajo
Son cosas distintas, y confundirlas es un error serio.

| | Qué es | Ejemplo de planta | Qué exige |
|---|---|---|---|
| **Rechazo** (*rejection*) | El lote no cumple su especificación | El secado deja el producto con más disolvente residual del permitido | Identificarlo y ponerlo en cuarentena; registrar su destino final. Puede reprocesarse o retrabajarse (14.10) |
| **Continuar un paso** | El control en proceso dice que el paso no ha terminado | La pérdida por secado aún es alta y se sigue secando | Es parte del proceso normal; no es reprocesar (14.21) |
| **Reprocesado** (*reprocessing*) | Repetir un paso que ya forma parte del proceso establecido | Volver a cristalizar y centrifugar el lote, como dice el proceso | Aceptable en general; si hace falta en la mayoría de los lotes, pasa al proceso estándar (14.20). Repetir una reacción exige evaluar antes los subproductos (14.22) |
| **Retrabajo** (*reworking*) | Aplicar uno o más pasos distintos de los del proceso establecido | Recristalizar con un disolvente distinto del habitual | Investigar antes la causa (14.30); análisis, estabilidad si procede y prueba de equivalencia (14.31); comparar el perfil de impurezas (14.32) |

Resumen: el reprocesado repite un camino conocido; el retrabajo abre uno nuevo, y por eso pide más pruebas. Los dos dejan huella: la hoja anota el material reprocesado usado (6.52), y lo pendiente de reprocesar o retrabajar se controla para que nadie lo use sin autorización (8.17).

La recuperación de materiales y disolventes de aguas madres o filtrados se permite con procedimientos aprobados y material que cumpla (14.4); la verás en otra lección.

### Reclamaciones y retiradas
Una **reclamación** (*complaint*) es cualquier comunicación sobre la calidad, oral o escrita. ICH Q7 (15.10 a 15.12) pide registrarla e investigarla según un procedimiento escrito, con quién reclama, el problema con nombre y lote, fecha, acciones y decisión final, y guardar los registros para ver tendencias.

Una **retirada** (*recall*) es recuperar un lote que ya salió. ICH Q7 pide un procedimiento que diga cuándo se considera una retirada (15.13), quién evalúa, cómo se inicia, a quién se informa y qué se hace con lo retirado (15.14); y, si la situación es grave o puede poner en peligro la vida, informar a las autoridades y pedir su consejo (15.15).

El capítulo 8 de la parte I de EudraLex vol. 4 está escrito para medicamentos, es decir, para tus clientes, pero enseña cómo se trabaja: revisar hojas de producción y registros de distribución y analizar las muestras de retención (8.9); comprobar otros lotes que puedan contener parte del defectuoso (8.11); poder retirar enseguida y a cualquier hora, a veces antes de conocer la causa (8.22); tener a mano los registros de distribución con direcciones, teléfonos, lotes y cantidades (8.23); separar lo retirado (8.28); y cerrar con un informe que concilie lo entregado y lo recuperado (8.29).

**Un caso ficticio narrado.** Un martes, el proveedor del sólido KA-12 comunica que su lote P-7781 pudo contaminarse con otra sustancia en una línea compartida. El registro de recepción lleva de P-7781 a MP-26-0118. La hoja de producción dice que 400 kg fueron al INT-26-014 y 350 kg al INT-26-015; los 250 kg del almacén se bloquean en el acto. El INT-26-015 dio el lote KX-26-032, que aún está en cuarentena: se bloquea y no sale. El INT-26-014 dio el KX-26-031, que ya está repartido: 192 kg en el cliente A, 96 kg en el B y 24 kg en el almacén.

El laboratorio analiza la muestra de retención del KX-26-031 y encuentra la sustancia extraña. Calidad decide retirar el lote y avisa a los dos clientes con el registro de distribución, bidón por bidón. El cliente B devuelve sus 4 bidones. El cliente A devuelve 7: ya había usado un bidón en un lote de comprimidos, y eso lo gestiona él con su propio sistema. La conciliación final: se entregaron 192 + 96 = 288 kg y se recuperaron 168 + 96 = 264 kg, es decir, 264 / 288 = 91,7 %. Los 24 kg que faltan están localizados.

**Tu papel en una retirada:** aportar los registros que te pidan, responder con exactitud y decir claro lo que no recuerdas, no completar hojas antiguas para que cuadren y no destruir nada: sacos vacíos, etiquetas, restos o muestras pueden ser pruebas.

### El simulacro de trazabilidad
Una retirada no se improvisa. EudraLex (8.30) pide evaluar periódicamente el sistema de retiradas, dentro y fuera del horario de oficina, y considerar retiradas simuladas (*mock recall*). La idea: elegir un lote y reconstruir su árbol completo como si fuera real, midiendo cuánto se tarda y apuntando cada registro que no aparece o no cuadra. No hemos encontrado una fuente fiable y gratuita que fije cuánto debe tardar: lo marca el procedimiento de tu planta.

### Lo que haces tú para que la trazabilidad funcione
- **Anota el número de lote interno de cada material que cargas**, saco a saco o bidón a bidón si la hoja lo pide, en el momento de cargarlo (ICH Q7, 6.14 y 6.52). Compara la etiqueta con la hoja antes de cargar (8.12).
- **Anota el número de cada envase** que llenas al envasar y comprueba que su etiqueta es la correcta (9.45).
- **No juntes restos de lotes distintos** por tu cuenta: mezclar lotes es una operación controlada, no un gesto para aprovechar.
- **Devuelve los sobrantes etiquetados**: nombre o código, número de recepción y peso (8.11). Un saco abierto sin etiqueta es un material sin historia.
- **Avisa de cualquier hueco**: una casilla vacía, un número ilegible, una suma de kilos que no da. Se corrige con fecha, firma y dejando legible lo anterior (6.14), nunca reescribiendo.

Recuerda: en planta manda siempre el procedimiento vigente (SOP).
`,
  plant: `
Turno de tarde en la sala del reactor R-210. Vas a cargar el sólido ficticio KA-12 para el intermedio INT-26-016. La hoja pide 380 kg del lote MP-26-0177.

En el palé hay 16 sacos de 25 kg. Antes de abrir nada, comparas la etiqueta de cada saco con la hoja: nombre, código y número interno. Quince sacos dicen MP-26-0177. El decimosexto, del mismo color y del mismo proveedor, dice MP-26-0152. Lo apartas y avisas a la jefa de turno: es otro lote, quizá liberado, pero no es el de tu hoja. Almacén lo recoge y trae uno correcto.

Cargas 15 sacos completos, 375 kg, y del siguiente pesas 5 kg en la báscula de la sala. Anotas en la hoja el número de cada saco y el peso de la carga parcial. Del saco abierto sobran 20 kg. No los dejas «para el próximo lote» junto al reactor: cierras el saco, le pegas la etiqueta de sobrante con el nombre, el número MP-26-0177 y el peso que marca la báscula, y lo devuelves a almacén con su registro.

Un mes después, Calidad hace un simulacro de trazabilidad con ese lote de materia prima. Encuentran en un momento los sacos cargados, la carga parcial y el saco de sobrante en la estantería, con su etiqueta. La suma de kilos cuadra con lo recibido. Nadie tiene que preguntarte nada.
`,
  batchRecord: `
En la hoja de producción (*batch record*) de cualquier paso verás casillas para que el árbol no se rompa:

- **Cada material cargado**: nombre o código, número interno de lote, número de cada saco o bidón si la hoja lo pide, peso o volumen real con su unidad, hora y firma. Si es un paso crítico, firma de quien verifica.
- **Disolvente de tanque**: código del tanque (p. ej. TK-302), cantidad y, si la hoja lo pide, lote o lotes de disolvente que contiene.
- **Equipos**: código de cada equipo principal (reactor, centrífuga, filtro, secadero) usado en el lote.
- **Material reprocesado o recuperado**: su número de lote y la cantidad, como cualquier otro material.
- **Rendimiento**: cantidad real obtenida y su comparación con el rango esperado.
- **Envasado**: número de lote del producto, número de envases y numeración de cada uno, peso de cada envase, etiqueta representativa adjunta y conciliación de etiquetas emitidas, usadas y devueltas o destruidas.
- **Sobrantes**: cantidad devuelta a almacén y número de su etiqueta.
- **Incidencias**: cualquier etiqueta que no coincide, envase dañado, resto encontrado o casilla que no se pudo rellenar, con aviso al responsable.

Nunca se escribe un número de lote de memoria: se copia de la etiqueta que tienes delante.
`,
  terms: [
    { es: "Trazabilidad hacia atrás", en: "Backward traceability", def: "Saber de qué materiales, lotes, equipos y personas salió un lote." },
    { es: "Trazabilidad hacia delante", en: "Forward traceability", def: "Saber a qué lotes posteriores y a qué clientes fue un lote, en qué envases y en qué cantidad." },
    { es: "Número de lote", en: "Batch number / lot number", def: "Combinación única que identifica un lote y permite reconstruir su historia de producción y distribución." },
    { es: "Número de control del proveedor", en: "Supplier's control number", def: "Lote que el proveedor da a su material; se registra junto al número interno al recibirlo." },
    { es: "Registro de distribución", en: "Distribution record", def: "Registro de qué lote, cuánto, cuándo y a quién se envió." },
    { es: "Mezcla de lotes", en: "Blending", def: "Juntar lotes que cumplen la misma especificación para formar un lote homogéneo. Nunca con lotes fuera de especificación." },
    { es: "Colas", en: "Tailings", def: "Cantidades pequeñas de material aislado de lotes del mismo producto que se pueden juntar en un lote." },
    { es: "Rendimiento teórico", en: "Theoretical yield", def: "Cantidad que se obtendría sin ninguna pérdida ni error." },
    { es: "Devolución", en: "Return", def: "Producto que vuelve del cliente; se identifica, se pone en cuarentena y Calidad decide su destino." },
    { es: "Reprocesado", en: "Reprocessing", def: "Repetir un paso que ya forma parte del proceso establecido, como volver a cristalizar." },
    { es: "Retrabajo", en: "Reworking", def: "Aplicar pasos distintos de los del proceso establecido a un material que no cumple; exige investigación y pruebas de equivalencia." },
    { es: "Reclamación", en: "Complaint", def: "Comunicación, oral o escrita, sobre un posible problema de calidad; se registra y se investiga." },
    { es: "Retirada", en: "Recall", def: "Recuperación de un lote ya distribuido por un problema de calidad." },
    { es: "Simulacro de retirada", en: "Mock recall", def: "Ejercicio en el que se reconstruye el árbol de un lote para comprobar que la retirada sería posible y rápida." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Se recibieron 800 kg del lote de materia prima MP-26-0201. La hoja del lote INT-26-030 registra que se cargaron 320 kg de ese lote. ¿Qué porcentaje del lote de materia prima fue al INT-26-030?",
      answer: 40,
      tolerance: 0.01,
      unit: "%",
      explain: "320 / 800 = 0,40, es decir, el 40 % del lote de materia prima.",
    },
    {
      kind: "number",
      q: "Un lote de principio activo se envasó en 15 bidones de 25 kg numerados del 01 al 15. El registro de distribución dice que el cliente A recibió los bidones 01 a 09. ¿Cuántos kilos de ese lote tiene el cliente A?",
      answer: 225,
      tolerance: 0.01,
      unit: "kg",
      explain: "Del 01 al 09 son 9 bidones: 9 × 25 = 225 kg.",
    },
    {
      kind: "number",
      q: "Se mezclan dos lotes que cumplen la especificación: 120 kg con una riqueza del 99,4 % y 80 kg con una riqueza del 99,9 %. Suponiendo la mezcla homogénea, ¿qué riqueza ponderada esperas?",
      answer: 99.6,
      tolerance: 0.001,
      unit: "%",
      explain: "(120 × 99,4 + 80 × 99,9) / 200 = (11928 + 7992) / 200 = 99,6 %. Aun así, el lote mezclado se analiza.",
    },
    {
      kind: "number",
      q: "El primer paso de un proceso tiene un rendimiento del 92 % y el segundo, del 85 %. ¿Cuál es el rendimiento de la cadena completa?",
      answer: 78.2,
      tolerance: 0.005,
      unit: "%",
      explain: "Los rendimientos se multiplican: 0,92 × 0,85 = 0,782, es decir, 78,2 %.",
    },
    {
      kind: "number",
      q: "En una retirada se entregaron 240 kg del lote a los clientes y se recuperaron 216 kg. ¿Qué porcentaje de lo entregado se recuperó?",
      answer: 90,
      tolerance: 0.01,
      unit: "%",
      explain: "216 / 240 = 0,90, es decir, el 90 %. Los kilos que faltan deben quedar explicados en el informe final.",
    },
    {
      kind: "choice",
      q: "Un lote de 150 kg dio una riqueza del 98,6 % y la especificación pide al menos 99,0 %. Alguien propone juntarlo con 250 kg de otro lote con 99,6 %, porque la media da 99,2 %. ¿Qué dice ICH Q7?",
      options: [
        "Que se permite si el lote mezclado se analiza y cumple al final",
        "Que se permite si la proporción del lote malo es menor que la mitad",
        "Que se permite si Producción firma la mezcla en la hoja del lote",
        "Que no se mezclan lotes fuera de especificación para que cumplan",
      ],
      answer: 3,
      explain: "ICH Q7 8.41: los lotes fuera de especificación no se mezclan con otros para cumplir; cada lote debe cumplir por separado antes de mezclar.",
    },
    {
      kind: "choice",
      q: "De una sola cristalización en el reactor salen tres descargas de la centrífuga, que se juntan en el secadero. ¿Qué es eso según ICH Q7?",
      options: [
        "Parte del proceso de producción, no una mezcla de lotes",
        "Una mezcla de lotes que necesita validación de homogeneidad",
        "Un reprocesado, porque el material pasa dos veces por equipos",
        "Un retrabajo, porque las descargas se separaron y se juntaron",
      ],
      answer: 0,
      explain: "ICH Q7 8.40 pone este ejemplo: juntar varias descargas de centrífuga de una misma cristalización es parte del proceso y no se considera mezcla.",
    },
    {
      kind: "choice",
      q: "Un lote no cumple la especificación y Calidad decide recristalizarlo con un disolvente distinto del que usa el proceso. ¿Qué es y qué exige?",
      options: [
        "Un reprocesado: basta con repetir el paso y analizar el lote",
        "Un retrabajo: hay que investigar la causa antes y probar equivalencia",
        "Una continuación del paso: no hace falta ninguna evaluación extra",
        "Una recuperación de disolvente: solo hay que analizar el disolvente",
      ],
      answer: 1,
      explain: "Un paso distinto del proceso establecido es retrabajo (ICH Q7 14.30 a 14.32): investigación previa, análisis, estabilidad si procede y comparación del perfil de impurezas.",
    },
    {
      kind: "choice",
      q: "Vuelve de un cliente un bidón de principio activo con el precinto roto y sin datos de cómo se guardó. ¿Qué se hace?",
      options: [
        "Se devuelve al stock si el análisis de riqueza sale bien",
        "Se reenvía a otro cliente que lo necesite con urgencia",
        "Se identifica como devuelto, cuarentena y decide Calidad",
        "Se tira enseguida para que no se confunda con otro bidón",
      ],
      answer: 2,
      explain: "ICH Q7 14.50 y 14.51: se identifica y se pone en cuarentena; si su estado hace dudar de su calidad, se reprocesa, se retrabaja o se destruye, y todo se registra (14.52).",
    },
    {
      kind: "choice",
      q: "Durante una retirada, Calidad te pide la hoja de un lote que cargaste hace meses. Ves que no anotaste el número de uno de los sacos. ¿Qué haces?",
      options: [
        "Escribes el número que crees que era, para que la hoja cuadre",
        "Dices que no lo recuerdas y no tocas la hoja; aportas lo que hay",
        "Rompes la hoja y la rehaces completa con todos los datos limpios",
        "No dices nada: si nadie lo ve, la retirada sigue igual de rápida",
      ],
      answer: 1,
      explain: "En una investigación se responde con exactitud y no se completa ni se destruye nada. El hueco se comunica para que Calidad lo valore con los demás registros.",
    },
  ],
};
