import type { Lesson } from "./types";

export const estabilidadAFondo: Lesson = {
  slug: "estabilidad-a-fondo",
  level: 10,
  order: 8,
  title: "Estudios de estabilidad a fondo",
  titleEn: "Stability studies in depth",
  minutes: 38,
  summary:
    "Por qué se degrada un principio activo, por qué lleva fecha de reanálisis y no siempre de caducidad, qué piden ICH Q1A(R2), Q1B y Q1E, cómo se calculan los puntos de muestreo y la pérdida de riqueza, qué es el programa de estabilidad continua y por qué el operador no puede cambiar el envase.",
  body: `
En la lección «Estudios de estabilidad» viste la idea general: el principio activo se guarda en cámaras y se analiza cada cierto tiempo. Aquí vas a ver qué le pasa por dentro a la molécula, qué dicen exactamente las guías y cómo se hacen las cuentas.

### Qué es degradarse
Un principio activo (*active pharmaceutical ingredient*, API) es una molécula. Con el tiempo, algunas de esas moléculas pueden romperse o transformarse en otras. Cada molécula transformada es una molécula menos de producto y una más de impureza. Eso es **degradarse** (*degradation*), y lo que se forma son los **productos de degradación** (*degradation products*).

Piensa en una manzana cortada: con el aire se oscurece, con calor se estropea antes y con humedad le sale moho. El producto no cambia de golpe; cambia poco a poco, y más deprisa cuanto peor se guarda.

ICH Q1A(R2) lo resume así: el estudio de estabilidad sirve para demostrar cómo varía la calidad de un principio activo con el tiempo bajo la influencia de factores como la **temperatura**, la **humedad** y la **luz**. Las causas principales, explicadas desde cero:

| Causa | Qué pasa | Dónde lo tienes en el Aula |
|---|---|---|
| **Hidrólisis** (*hydrolysis*) | El agua rompe un enlace de la molécula. Un éster, por ejemplo, se parte en su ácido y su alcohol. | «Grupos funcionales a fondo: cómo se comporta cada familia de compuestos en planta» |
| **Oxidación** (*oxidation*) | El oxígeno del aire, u otro oxidante, reacciona con la molécula y la transforma. | «Oxidación y reducción a fondo: hidrogenaciones, oxidantes y corrosión» |
| **Luz** (*photolysis*) | La luz aporta energía que puede romper o transformar la molécula. Por eso ICH Q1B ensaya con luz visible y con ultravioleta cercano. | Esta lección, apartado de ICH Q1B |
| **Calor** | No es una reacción en sí: acelera todas las demás. | «Velocidad de reacción a fondo: por qué unas reacciones tardan horas y otras segundos» (la regla de los 10 °C) |
| **Humedad** | Aporta el agua de la hidrólisis y puede cambiar la forma sólida, por ejemplo convertir un producto anhidro en hidrato. | «Polimorfismo, sales y solvatos a fondo: el mismo producto en distintas formas sólidas» |

Cómo se cuentan y se limitan esas impurezas lo tienes en «Impurezas a fondo: de dónde vienen, cuánto se permite y cómo las evita el operador».

### Fecha de reanálisis o fecha de caducidad
Hay dos tipos de fecha, y no son lo mismo.

- **Fecha de reanálisis** (*retest date*). ICH Q7 la define como la fecha en que un material debe volver a examinarse para asegurar que sigue siendo adecuado para su uso.
- **Fecha de caducidad** (*expiry date*). Según ICH Q7, es la fecha hasta la que se espera que el API cumpla su especificación si se guarda en las condiciones definidas, y **después de la cual no debe usarse**.

ICH Q7 (apartado 11.61) dice que la fecha de un API se basa en datos de estudios de estabilidad y que **la práctica habitual es usar una fecha de reanálisis, no de caducidad**.

¿Por qué? El glosario de ICH Q1A(R2) lo explica: pasado el **periodo de reanálisis** (*re-test period*), el lote se vuelve a analizar contra la especificación y, si cumple, se usa enseguida. Un lote puede reanalizarse varias veces, usando una parte distinta tras cada reanálisis, mientras siga cumpliendo. La misma guía añade que para la mayoría de las sustancias biotecnológicas, que son delicadas, es más apropiado fijar una caducidad, y que puede pasar lo mismo con ciertos antibióticos.

Es como un yogur frente a un saco de sal. Al yogur se le pone caducidad porque se estropea sí o sí. La sal casi no cambia: basta con comprobar de vez en cuando que sigue bien. Un API químico estable se parece más a la sal.

### Los estudios de estrés
Antes de los estudios formales se hacen los **estudios de estrés** (*stress testing*). Se maltrata al producto a propósito para ver cómo se rompe. ICH Q1A(R2) (apartado 2.1.2) dice que:

- Suelen hacerse con **un solo lote**.
- Incluyen **temperaturas** en saltos de 10 °C por encima de la del estudio acelerado (por ejemplo 50 °C, 60 °C), **humedad** del 75 % HR o más cuando proceda, **oxidación** y **luz**.
- Evalúan la **hidrólisis** en un intervalo amplio de pH, con el producto en disolución o suspensión.

Sirven para tres cosas: saber qué productos de degradación pueden aparecer, conocer por qué camino se forman y demostrar que el método analítico los detecta. Un método que sí los detecta se llama **indicador de estabilidad** (*stability-indicating*). ICH Q7 (11.51) exige que los métodos de los estudios de estabilidad estén validados y sean indicadores de estabilidad.

### Los estudios formales: qué lotes y en qué envase
Los **estudios formales de estabilidad** (*formal stability studies*) son los que sirven para fijar el periodo de reanálisis. ICH Q1A(R2) pide:

- **Lotes** (2.1.3): datos de al menos **tres lotes primarios** (*primary batches*), fabricados como mínimo a **escala piloto** (*pilot scale*), por la misma ruta de síntesis y con un método que simule el proceso final de producción. Su calidad debe representar la del producto a escala industrial.
- **Envase** (2.1.4): el producto se estudia en un sistema de envase y cierre (*container closure system*) **igual al propuesto para almacenarlo y distribuirlo, o que lo simule**.
- **Ensayos** (2.1.5): los atributos que pueden cambiar durante el almacenamiento y afectar a la calidad, la seguridad o la eficacia: físicos, químicos, biológicos y microbiológicos.

ICH Q7 (11.52) pone un ejemplo que te toca de cerca: si el API se vende en bolsas dentro de bidones de fibra, las muestras de estabilidad pueden ir en bolsas del mismo material y en bidones más pequeños de material igual o parecido al de los comerciales.

### Condiciones de almacenamiento
HR es humedad relativa (*relative humidity*, RH). La tabla es la del caso general de ICH Q1A(R2) (2.1.7.1) para principios activos:

| Estudio | Condición | Tiempo mínimo de datos al registrar |
|---|---|---|
| Largo plazo (*long term*) | 25 °C ± 2 °C / 60 % HR ± 5 % HR, o 30 °C ± 2 °C / 65 % HR ± 5 % HR | 12 meses |
| Intermedio (*intermediate*) | 30 °C ± 2 °C / 65 % HR ± 5 % HR | 6 meses |
| Acelerado (*accelerated*) | 40 °C ± 2 °C / 75 % HR ± 5 % HR | 6 meses |

Tres matices de la guía:

- Elegir 25 °C o 30 °C para el largo plazo lo decide quien registra el producto. Si el largo plazo ya es 30 °C / 65 % HR, no hay estudio intermedio.
- El intermedio solo se hace si el largo plazo es a 25 °C y en el acelerado aparece un **cambio significativo**.
- Para productos que se guardan en nevera, el largo plazo es 5 °C ± 3 °C y el acelerado 25 °C / 60 % HR. Para congelador, −20 °C ± 5 °C.

El **cambio significativo** (*significant change*) de un principio activo se define en esa guía de forma muy sencilla: **no cumplir su especificación**.

Los datos del acelerado y del intermedio sirven también para valorar excursiones cortas fuera de las condiciones de la etiqueta, como las que pueden ocurrir en un transporte. El estudio acelerado no «adivina» el futuro: el glosario de la guía avisa de que sus resultados no siempre predicen los cambios físicos.

### Zonas climáticas
No hace el mismo tiempo en Madrid que en un país tropical. ICH Q1A(R2) explica que el mundo se divide en **cuatro zonas climáticas** (*climatic zones*), de la I a la IV, según sus condiciones climáticas anuales, y que esa guía solo cubre las zonas I y II. El borrador de la nueva guía ICH Q1 (versión de consulta aprobada el 11 de abril de 2025, publicada por la FDA) cita las zonas definidas en los informes técnicos de la OMS y da condiciones de largo plazo para todas. La más exigente es la **zona IVb**, con 30 °C / 75 % HR. La idea clave: un estudio hecho en condiciones más duras vale también para zonas más suaves. Ese borrador aún no es la guía definitiva; hoy rige Q1A(R2).

### Cada cuánto se analiza
ICH Q1A(R2) (2.1.6), para un periodo de reanálisis propuesto de al menos 12 meses:

| Estudio | Frecuencia | Puntos típicos |
|---|---|---|
| Largo plazo | Cada 3 meses el primer año, cada 6 meses el segundo, y luego cada año | 0, 3, 6, 9, 12, 18, 24, 36… |
| Acelerado (6 meses) | Mínimo tres puntos, incluidos el inicial y el final | 0, 3, 6 |
| Intermedio (12 meses) | Mínimo cuatro puntos, incluidos el inicial y el final | 0, 6, 9, 12 |

**Cuenta 1. Puntos de un periodo de reanálisis de 36 meses.** Año 1: 0, 3, 6, 9 y 12. Año 2: 18 y 24. Año 3: 36. Son **8 puntos**, contando el inicial. Con 60 meses se añaden 48 y 60: 10 puntos.

**Cuenta 2. Las fechas.** Un lote ficticio entra en estabilidad el 15/01/2027 (valor de ejemplo). Sus fechas de análisis a largo plazo son: 15/04/2027 (3 meses), 15/07/2027 (6), 15/10/2027 (9), 15/01/2028 (12), 15/07/2028 (18), 15/01/2029 (24) y 15/01/2030 (36).

**Cuenta 3. Cuántas muestras.** Tres lotes por 8 puntos son 24 retiradas de muestra solo del largo plazo. Por eso al lote de estabilidad se le reserva bastante cantidad, en envases pequeños separados: cada punto abre el suyo.

### La luz: ICH Q1B
La guía de fotoestabilidad ICH Q1B pide, para el estudio confirmatorio, exponer las muestras a:

- una iluminación total de **no menos de 1,2 millones de lux·hora**, y
- una energía en el ultravioleta cercano de **no menos de 200 W·h/m²**.

El lux mide cuánta luz visible llega a una superficie; los lux·hora suman esa luz durante el tiempo. Las lámparas pueden imitar la luz del día (opción 1) o combinar un fluorescente blanco frío con uno ultravioleta cercano de 320 a 400 nm (opción 2). Junto a la muestra puede ir un **control oscuro** (*dark control*), envuelto por ejemplo en papel de aluminio, para separar el efecto del calor del de la luz. Los sólidos se extienden en una capa de normalmente no más de 3 mm.

**Cuenta 4. Horas de exposición.** Una cámara de luz da 10 000 lux (valor de ejemplo). Tiempo: 1 200 000 / 10 000 = **120 h**, cinco días. Si su lámpara ultravioleta da 2 W/m² (valor de ejemplo), necesita 200 / 2 = 100 h. Hay que cumplir las dos, así que manda la más larga: 120 h.

Q1B dice que el estudio confirmatorio debe identificar las precauciones necesarias en la fabricación y si hace falta un envase que proteja de la luz. De ahí sale el «proteger de la luz» de tu hoja.

### Evaluar los datos: ICH Q1E
Con los resultados de cada punto, el laboratorio estima cuánto tiempo seguirá el producto dentro de especificación. ICH Q1E dice que atributos como la riqueza y los productos de degradación pueden suponerse, durante el largo plazo, de **orden cero**: cambian lo mismo cada mes, en línea recta. Eso permite usar una recta.

**Cuenta 5. Pérdida de riqueza por mes.** Datos de ejemplo de un lote a 25 °C / 60 % HR:

| Mes | 0 | 3 | 6 | 9 | 12 |
|---|---|---|---|---|---|
| Riqueza (%) | 99,8 | 99,7 | 99,5 | 99,4 | 99,2 |
| Impureza de degradación (%) | 0,05 | 0,06 | 0,08 | 0,09 | 0,11 |

Pérdida de riqueza: (99,8 − 99,2) / 12 = **0,05 % al mes**. La impureza sube (0,11 − 0,05) / 12 = **0,005 % al mes**.

**Cuenta 6. Estimación lineal sencilla.** El límite inferior de riqueza es 98,0 % y el de la impureza 0,15 % (valores de ejemplo).

- Riqueza: le quedan 99,2 − 98,0 = 1,2 puntos. A 0,05 al mes: 1,2 / 0,05 = 24 meses más. Llegaría al límite hacia el mes 36. Una recta de mínimos cuadrados con los cinco puntos da 36,4 meses: casi lo mismo.
- Impureza: le quedan 0,15 − 0,11 = 0,04 puntos. A 0,005 al mes: 0,04 / 0,005 = 8 meses más. Llegaría al límite hacia el mes **20**.

Q1E dice que el periodo propuesto no debe superar el que predice **cualquier atributo por separado**. Aquí manda la impureza, no la riqueza.

Además, ICH Q1A(R2) describe el método formal: se busca el momento en que el **límite de confianza unilateral del 95 %** de la recta corta el criterio de aceptación. Ese límite tiene en cuenta la dispersión de los datos y da un tiempo algo más corto que la recta sola. Esa estadística la hace el laboratorio.

**Extrapolar** (*extrapolation*) es estirar la recta más allá de los datos que existen. Q1E la permite con límites. Por ejemplo, si el largo plazo y el acelerado casi no cambian, el periodo propuesto puede ser **hasta el doble del cubierto por los datos, pero no más de 12 meses por encima**. Con 12 meses de datos, como mucho 24 meses. Y lo extrapolado debe confirmarse con datos reales en cuanto existan.

**Cuenta 7. Balance de masas.** El glosario de Q1A(R2) define el **balance de masas** (*mass balance*): sumar la riqueza y los productos de degradación y ver si se acerca al 100 % del valor inicial. Al inicio: 99,8 + 0,15 de impurezas totales = 99,95. A los 12 meses: 99,2 + 0,72 = 99,92 (valores de ejemplo). Cuadra: lo que perdió el producto apareció como impurezas. Si no cuadrara, podría haber una impureza que el método no ve.

### El programa de estabilidad continua
Fijada la fecha, la vigilancia sigue. ICH Q7 (11.5) pide un **programa documentado de estabilidad continua** (*on-going stability programme*) para confirmar las condiciones de almacenamiento y las fechas:

- Normalmente, los **tres primeros lotes comerciales** entran en el programa (11.53). Pueden ser menos si estudios previos muestran que el API será estable al menos dos años.
- Después, **al menos un lote al año** de API fabricado, salvo que ese año no se fabrique ninguno, y se analiza al menos una vez al año (11.54).
- Las condiciones, donde proceda, siguen las guías ICH de estabilidad (11.56).

El capítulo 6 de la parte I de EudraLex, volumen 4, es para medicamentos, pero explica bien el mismo programa: protocolo escrito y resultados en un informe (6.29), cámaras cualificadas y mantenidas (6.29), lotes adicionales tras un cambio o una desviación importante en el proceso o el envase, y valorar incluir lotes reprocesados o recuperados (6.33). Los resultados fuera de especificación o las tendencias atípicas importantes se investigan (6.35), como en «Resultados OOS y OOT: cómo se investigan».

### Las cámaras climáticas y su vigilancia
Una **cámara climática** (*stability chamber*) es un armario o sala que mantiene temperatura y humedad fijas. El glosario de Q1A(R2) dice que:

- La cámara debe poder controlar la condición dentro de las tolerancias de la guía: a 25 °C ± 2 °C, entre 23 y 27 °C.
- La temperatura y la humedad reales se **vigilan** durante todo el estudio.
- Los picos cortos por **abrir la puerta** se aceptan como inevitables.
- El efecto de una excursión por **avería** debe abordarse.
- Si la excursión supera las tolerancias **más de 24 horas**, se describe en el informe del estudio y se evalúa su efecto.

**Cuenta 8. Cuánto duró la alarma.** La cámara salta a 28,4 °C el sábado a las 02:10 y vuelve a 27 °C el domingo a las 08:40 (valores de ejemplo). Duración: 30,5 h. Supera las 24 h: va al informe con su evaluación. Si alguien la hubiera visto a las 09:25 del sábado, la excursión habría durado 7,25 h. Por eso la alarma tiene que llegar a alguien también de noche y en fin de semana, y quien la recibe avisa enseguida según su procedimiento.

Dentro de la cámara hay muestras de años de trabajo. Si se pierden puntos, el estudio queda cojo. La vigilancia de almacenes y cámaras en general la viste en «Almacenamiento a fondo: guardar materiales y producto sin que pierdan calidad ni provoquen un accidente».

### Qué tiene que ver todo esto contigo
- **Qué lotes van a estabilidad.** Los primeros lotes comerciales, al menos uno al año y los que salgan de un cambio o una desviación importante. Puede tocarle a tu lote: la hoja te dirá que llenes envases de estabilidad.
- **Envase igual que el comercial.** El estudio vale para la bolsa y el bidón estudiados. Q1A(R2) pone las bolsas de plástico como ejemplo de envase **semipermeable** (*semi-permeable*): deja pasar el agua poco a poco. Otra bolsa, más fina o de otro material, puede dejar pasar más humedad u oxígeno, y los datos ya no la cubren.
- **Por qué no puedes cambiar bolsas o bidones.** Aunque falten bolsas y haya otras «parecidas» en el almacén, cambiarlas es un cambio de envase: pasa por el control de cambios («Control de cambios y gestión de riesgos a fondo: cambiar sin romper nada») y lo decide Calidad. Si ya ha ocurrido, se abre una desviación.
- **Protecciones de la hoja.** Según ICH Q1B, el estudio de fotoestabilidad señala las precauciones necesarias en la fabricación: un «proteger de la luz» en tu hoja puede venir de ahí. Cúmplelo aunque el paso parezca corto.

Los números de esta lección son de ejemplo para entender. En planta manda siempre el procedimiento vigente (SOP): los lotes, envases, condiciones y fechas son los que digan tu hoja y tu sistema de calidad.
`,
  plant: `
Lote TZ-220-0007 del principio activo ficticio TZ-220. Es el primer lote del año, y la hoja de envasado trae un paso nuevo para ti: *«Lote designado para el programa de estabilidad continua. Llenar 12 envases de estabilidad EST-TZ según el plano de envasado: doble bolsa de polietileno del código BL-14, brida BR-2 y minibidón de fibra MB-5. Identificar con la etiqueta de estabilidad. Entregar a control de calidad.»*

Calidad te ha preparado las bolsas y los minibidones. Llenas los envases dentro de la cabina, a la vez que los bidones comerciales, con el mismo producto, el mismo tipo de bolsa y el mismo cierre. Pesas cada uno en la báscula BS-31 y anotas el peso.

Al abrir la segunda caja de bolsas ves que es de otro proveedor y el código es BL-16. Tu compañera dice que «son iguales, solo más finas». No las usas. Paras el llenado de los envases de estabilidad y avisas a la jefa de turno. Ella llama a Calidad, que confirma que BL-16 no está aprobado para TZ-220 y trae una caja de BL-14 del almacén. Anotas la incidencia en la hoja.

Terminas, cierras y etiquetas los doce envases. Los entregas a control de calidad con su hoja de entrega firmada. Esa misma tarde entran en la cámara climática CE-02, a 25 °C / 60 % HR. El primer análisis es el del punto cero; el siguiente, a los 12 meses. Con un periodo de reanálisis largo y el programa de un análisis al año, tu lote se seguirá analizando cuando tú ya hayas olvidado aquel turno.
`,
  batchRecord: `
- **Designación del lote**: indicación de que el lote va al programa de estabilidad, con la referencia del protocolo.
- **Envases de estabilidad**: número de envases llenados, código y lote de la bolsa, la brida y el minibidón, comprobados contra la hoja.
- **Pesos**: peso de cada envase de estabilidad y de cada bidón comercial, con báscula identificada.
- **Protecciones**: protección de la luz, nitrógeno o tiempo máximo de espera, si la hoja los pide.
- **Incidencias**: cualquier material de envase distinto del especificado, con hora, a quién se avisó y qué se decidió.
- **Entrega**: hoja de entrega de muestras a control de calidad, firmada por quien entrega y quien recibe.
- **Etiqueta del lote**: fecha de reanálisis y condiciones de almacenamiento, tal como salen del sistema.
`,
  terms: [
    { es: "Estudio de estabilidad", en: "Stability study", def: "Estudio que muestra cómo cambia la calidad de un producto con el tiempo bajo temperatura, humedad y luz." },
    { es: "Fecha de reanálisis", en: "Retest date", def: "Fecha en que un material debe volver a examinarse para comprobar que sigue siendo adecuado para su uso." },
    { es: "Fecha de caducidad", en: "Expiry date", def: "Fecha después de la cual el producto no debe usarse." },
    { es: "Periodo de reanálisis", en: "Re-test period", def: "Tiempo durante el que se espera que el API cumpla su especificación si se guarda en las condiciones definidas." },
    { es: "Estudio de estrés", en: "Stress testing", def: "Estudio con condiciones duras (calor, humedad, oxidación, luz, pH) para saber cómo se degrada la molécula." },
    { es: "Lote primario", en: "Primary batch", def: "Lote, al menos de escala piloto, cuyos datos de estabilidad se presentan para fijar el periodo de reanálisis." },
    { es: "Estudio acelerado", en: "Accelerated testing", def: "Estudio en condiciones exageradas, 40 °C / 75 % HR para el caso general, que acelera la degradación." },
    { es: "Cambio significativo", en: "Significant change", def: "Para un principio activo, no cumplir su especificación." },
    { es: "Método indicador de estabilidad", en: "Stability-indicating method", def: "Método validado capaz de detectar los productos de degradación." },
    { es: "Fotoestabilidad", en: "Photostability", def: "Capacidad de un producto de no cambiar de forma inaceptable al exponerse a la luz." },
    { es: "Extrapolación", en: "Extrapolation", def: "Estimar el comportamiento más allá del tiempo cubierto por los datos reales." },
    { es: "Balance de masas", en: "Mass balance", def: "Suma de la riqueza y los productos de degradación comparada con el 100 % del valor inicial." },
    { es: "Estabilidad continua", en: "On-going stability", def: "Programa que sigue analizando lotes comerciales para confirmar fechas y condiciones." },
    { es: "Cámara climática", en: "Stability chamber", def: "Armario o sala con temperatura y humedad controladas y vigiladas para estudios de estabilidad." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Un API tiene un periodo de reanálisis propuesto de 36 meses. Según la frecuencia de ICH Q1A(R2) para el largo plazo (cada 3 meses el primer año, cada 6 el segundo y luego anual), ¿cuántos puntos de análisis hay contando el inicial?",
      answer: 8,
      tolerance: 0.001,
      unit: "puntos",
      explain: "0, 3, 6, 9 y 12 el primer año; 18 y 24 el segundo; 36 el tercero: 8 puntos.",
    },
    {
      kind: "number",
      q: "Un lote en estabilidad da 99,6 % de riqueza en el mes 0 y 99,0 % en el mes 6. Suponiendo una pérdida en línea recta, ¿cuánto pierde al mes?",
      answer: 0.1,
      tolerance: 0.01,
      unit: "% al mes",
      explain: "(99,6 − 99,0) / 6 = 0,1 % al mes.",
    },
    {
      kind: "number",
      q: "Ese mismo lote pierde 0,1 % de riqueza al mes y en el mes 6 tiene 99,0 %. El límite inferior es 98,0 %. Con una estimación lineal sencilla, ¿en qué mes desde el inicio llegaría al límite?",
      answer: 16,
      tolerance: 0.01,
      unit: "mes",
      explain: "Le quedan 99,0 − 98,0 = 1,0 puntos; 1,0 / 0,1 = 10 meses más; 6 + 10 = mes 16.",
    },
    {
      kind: "number",
      q: "ICH Q1B pide no menos de 1,2 millones de lux·hora. Si la cámara de luz da 8000 lux, ¿cuántas horas de exposición hacen falta como mínimo?",
      answer: 150,
      tolerance: 0.01,
      unit: "h",
      explain: "1200000 / 8000 = 150 h.",
    },
    {
      kind: "number",
      q: "Una cámara de estabilidad sale de tolerancia el lunes a las 22:30 y vuelve a ella el miércoles a las 03:00. ¿Cuántas horas duró la excursión?",
      answer: 28.5,
      tolerance: 0.01,
      unit: "h",
      explain: "Del lunes 22:30 al martes 22:30 son 24 h, y hasta el miércoles 03:00, 4,5 h más: 28,5 h. Supera 24 h, así que según Q1A(R2) se describe en el informe y se evalúa su efecto.",
    },
    {
      kind: "choice",
      q: "¿Cuál es la condición del estudio acelerado de un principio activo en el caso general de ICH Q1A(R2)?",
      options: [
        "25 °C ± 2 °C / 60 % HR ± 5 % HR durante 12 meses",
        "30 °C ± 2 °C / 65 % HR ± 5 % HR durante 12 meses",
        "40 °C ± 2 °C / 75 % HR ± 5 % HR durante 6 meses",
        "50 °C ± 2 °C / 75 % HR ± 5 % HR durante 3 meses",
      ],
      answer: 2,
      explain: "El acelerado es 40 °C / 75 % HR con 6 meses de datos; 50 °C es un ejemplo de estudio de estrés, no de estudio formal.",
    },
    {
      kind: "choice",
      q: "En el estudio acelerado de un principio activo, ¿qué se considera un «cambio significativo» según ICH Q1A(R2)?",
      options: [
        "Que el resultado no cumpla su especificación",
        "Que la riqueza baje cualquier cantidad",
        "Que la impureza suba más de un 5 % relativo",
        "Que el color cambie aunque cumpla todo",
      ],
      answer: 0,
      explain: "Para un principio activo, cambio significativo es no cumplir su especificación; entonces, si el largo plazo es a 25 °C, toca el estudio intermedio.",
    },
    {
      kind: "choice",
      q: "Un API tiene 12 meses de datos de largo plazo y, igual que el acelerado, casi no cambia ni tiene dispersión. Según ICH Q1E, ¿qué periodo de reanálisis se puede proponer como máximo?",
      options: [
        "12 meses, nunca se puede pasar de los datos",
        "60 meses, porque el producto es muy estable",
        "36 meses, el triple de los datos disponibles",
        "24 meses, el doble y no más de 12 por encima",
      ],
      answer: 3,
      explain: "Q1E permite hasta el doble del periodo cubierto, pero no más de 12 meses por encima: con 12 meses de datos, 24 como máximo, y se confirma luego con datos reales.",
    },
    {
      kind: "choice",
      q: "Envasando un lote faltan bolsas del código aprobado y en el almacén hay otras de otro proveedor, «iguales pero más finas». ¿Qué haces?",
      options: [
        "Las usas, porque una bolsa es una bolsa",
        "Paras y avisas: cambiar el envase pasa por control de cambios",
        "Las usas y lo apuntas al final del turno",
        "Pones dos bolsas finas en vez de una gruesa",
      ],
      answer: 1,
      explain: "Los datos de estabilidad cubren el envase estudiado; una bolsa de plástico deja pasar agua y otra más fina puede proteger menos. Lo decide Calidad mediante control de cambios.",
    },
    {
      kind: "choice",
      q: "Según ICH Q7 (11.53 y 11.54), ¿qué lotes entran normalmente en el programa de estabilidad continua de un API?",
      options: [
        "Solo los lotes que han tenido una desviación",
        "Todos los lotes fabricados, sin excepción",
        "Los tres primeros comerciales y al menos uno al año",
        "Solo un lote cada cinco años de fabricación",
      ],
      answer: 2,
      explain: "Normalmente los tres primeros lotes comerciales y después al menos un lote al año, salvo que ese año no se fabrique ninguno, analizado al menos una vez al año.",
    },
  ],
};
