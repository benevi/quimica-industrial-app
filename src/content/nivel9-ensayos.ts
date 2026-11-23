import type { Lesson } from "./types";

export const ensayosMicroAFondo: Lesson = {
  slug: "ensayos-microbiologicos-a-fondo",
  level: 9,
  order: 4,
  title: "Ensayos microbiológicos y de endotoxinas a fondo",
  titleEn: "Microbiological and endotoxin testing in depth",
  minutes: 38,
  summary:
    "Qué es una UFC y por qué el recuento tarda días, cómo se pasa de colonias a UFC/g con la dilución, qué son los controles, cómo funciona el ensayo LAL y sus cuentas (K/M y máxima dilución válida), qué miden las placas de la monitorización ambiental, cómo se toma una muestra sin estropearla y qué pasa con tu lote si el resultado sale mal.",
  body: `
En «Ensayos microbiológicos: recuento y endotoxinas» viste los nombres de los ensayos. Aquí vas a entender qué pasa dentro del laboratorio con la muestra que tú tomas, hacer las cuentas que hace el analista y saber qué significa para tu lote el resultado que llega días después.
### Primero, qué se aplica a tu planta
Casi todo lo que fabrica una planta de síntesis es un principio activo (*active pharmaceutical ingredient*, API) **no estéril**. ICH Q7, la guía de buenas prácticas de fabricación de principios activos, dice (11.13) que si un API tiene especificación microbiológica hay que fijar y cumplir límites de acción para el recuento total y para los microorganismos indeseables (*objectionable organisms*), y lo mismo si tiene especificación de endotoxinas. Esos ensayos se hacen en cada lote (11.23).

ICH Q6A, la guía de especificaciones, explica que el ensayo y su límite dependen del API, de cómo se fabrica y del medicamento al que va: por ejemplo, endotoxinas para un API que acabará en un inyectable. Y admite no hacer ensayos microbiológicos si el desarrollo demostró que el producto no deja vivir ni crecer a los microbios.

El anexo 1 de las normas europeas (EudraLex, volumen 4) es para productos **estériles**. Un fabricante puede aplicar parte de sus principios a productos no estériles, documentando cuáles. Sus límites de monitorización, que verás más abajo, son de salas para estériles; los de una sala de un API no estéril los fija tu empresa.
### Qué es una UFC
Un microbio no se ve. Lo que se hace es darle de comer y esperar. La muestra se pone en contacto con un **medio de cultivo** (*culture medium*), una gelatina con nutrientes llamada agar, y se guarda caliente en la **incubadora** (*incubator*). Cada microbio vivo capaz de crecer allí se divide una y otra vez hasta formar un montoncito visible: una **colonia** (*colony*).

El anexo 1 define la **unidad formadora de colonias** (UFC; *colony forming unit*, CFU) como una colonia detectable que nace de **uno o más** microorganismos: dos bacterias pegadas dan una sola colonia. Por eso se dice «50 UFC» y no «50 bacterias». Se expresa en UFC por mililitro en líquidos, por metro cúbico en aire y por placa en las placas.

Solo cuenta lo que está **vivo y crece** en ese medio, a esa temperatura y en ese tiempo. Un microbio dañado, por ejemplo por un desinfectante, puede tardar más o no crecer.
### Los dos recuentos: aerobios y hongos
ICH Q6A nombra los dos recuentos que verás en la especificación:

- **Recuento total de microorganismos aerobios** (*total aerobic microbial count*, TAMC): los que crecen con aire, sobre todo bacterias.
- **Recuento total de mohos y levaduras** (*total yeasts and moulds count*, TYMC): los hongos.

Van por separado porque prefieren condiciones distintas. La guía de la FDA (la agencia de medicamentos de Estados Unidos) sobre llenado aséptico de 2004 da como ejemplo, para los medios de monitorización ambiental:

| Recuento | Incubación | Tiempo |
|---|---|---|
| Aerobios totales | 30 a 35 °C | 48 a 72 horas |
| Mohos y levaduras | 20 a 25 °C | 5 a 7 días |

Las condiciones para tu producto las fija el método de la farmacopea (de pago) y el procedimiento del laboratorio, pero el orden es ese: **días**.
### Por qué tarda días
No hay atajo: cada microbio tiene que multiplicarse miles de veces hasta que su colonia se vea. A eso se suman la preparación y, si sale algo raro, la identificación, que lleva más días. Por eso:

- **El lote espera en cuarentena** al resultado microbiológico, aunque la química ya esté.
- **El agua ya se ha usado** cuando llega su recuento («Agua farmacéutica a fondo»).
- **La hora y el punto de muestreo** que anotas son lo que permite saber después qué lotes afectó un mal resultado.

El anexo 1 (9.28) anima a usar **métodos rápidos** validados para detectar antes la contaminación.
### Cómo llega la muestra a la placa
**Siembra en placa** (*plate count*). El analista suspende una cantidad pesada de producto en un líquido estéril, el **diluyente**, pone un volumen conocido en una placa Petri y añade el agar fundido o lo extiende sobre agar sólido. La guía de la Organización Mundial de la Salud (OMS) sobre laboratorios de microbiología farmacéutica (TRS 961, anexo 2) cita entre las técnicas básicas del analista el vertido de placas, el recuento de colonias, la técnica aséptica y las **diluciones seriadas**.

**Diluciones seriadas.** Con muchos microbios la placa se llenaría de colonias pegadas. Entonces se diluye de diez en diez: 1:10, 1:100, 1:1000. Una dilución 1:10 es una parte de muestra en diez partes totales.

**Filtración por membrana** (*membrane filtration*). La solución pasa por un filtro de poro tan fino que retiene los microbios; el filtro se pone sobre el agar y las colonias crecen encima. Sirve para volúmenes grandes con pocos microbios, como el agua, y permite lavar del filtro restos de producto que frenarían el crecimiento.

**Que el producto no mate al microbio.** La OMS (3.1) pide demostrar que el método recupera bacterias, levaduras y mohos en presencia de ese producto, y la FDA (guía de inspección de laboratorios de microbiología, 1993) pide neutralizar las sustancias inhibidoras.
### La cuenta: de colonias a UFC/g
Con valores de ejemplo:

1. **La suspensión.** 10 g de producto con 90 mL de diluyente: dilución 1:10, cada mililitro lleva 0,1 g de producto.
2. **La siembra.** 1 mL en cada una de dos placas.
3. **El recuento.** Salen 38 y 46 colonias: media (38 + 46) / 2 = 42.
4. **El resultado.** 42 UFC venían de 0,1 g. En un gramo: 42 / 0,1 = **420 UFC/g**.

Regla: UFC/g = colonias medias / (mL sembrados × gramos de producto por mL).

Con filtración por membrana: 10 mL de la suspensión 1:10 llevan 10 × 0,1 = 1 g. Si crecen 12 colonias: 12 / 1 = 12 UFC/g.

**El cero no existe.** Si no crece nada, no se dice «0 UFC/g». Una sola colonia habría sido 1 / 0,1 = 10 UFC/g: es el **límite de detección** de ese montaje. La OMS (12.1) pide informar «no detectado en una cantidad definida» o «menos del límite de detección», aquí **< 10 UFC/g**.
### Microorganismos específicos: no basta con contar
ICH Q6A señala que puede hacer falta exigir la **ausencia** de bacterias indeseables concretas, como *Staphylococcus aureus*, *Escherichia coli*, *Salmonella* y *Pseudomonas aeruginosa*.

Estos ensayos no cuentan: buscan. Un caldo de **enriquecimiento** hace crecer al microbio aunque haya uno solo; luego medios **selectivos**, que lo favorecen a él y frenan a los demás, y una confirmación. El resultado es «ausente» o «presente» en la cantidad que fije la especificación.

La FDA (1993) avisa de que a menudo importa más **qué** microbio es que **cuántos**, y de que la lista de la farmacopea no recoge todos los indeseables: llama así a cualquiera que pueda causar infección con el uso previsto del medicamento o crecer en él. Cada empresa decide qué busca según su producto.
### Controles positivos y negativos
Un «sin crecimiento» solo vale si el ensayo **podía** detectar crecimiento:

- **Control negativo** (*negative control*): diluyente estéril solo. Si crece algo, falla el medio, el material o la manipulación, y el ensayo no vale.
- **Control positivo** (*positive control*): una cantidad pequeña y conocida de un microbio de referencia. Si no crece, un «ausente» no significa nada.
- **Promoción del crecimiento** (*growth promotion*): la OMS (5.2) la pide en cada lote de medio, inoculando no más de 100 UFC y recuperando entre el 50 y el 200 %.
- **Cepas de referencia** (*reference strains*): de una colección reconocida y, según la OMS (6.2), normalmente con no más de cinco pases desde la original.
### Endotoxinas: el ensayo LAL
Las **endotoxinas** (*endotoxins*) son restos de la pared de las bacterias gramnegativas. Según el anexo 1, en un paciente que recibe una inyección causan reacciones que van desde la fiebre hasta la muerte. No se cultivan, porque la bacteria puede estar muerta: se mide la sustancia.

El ensayo usa un **lisado de amebocitos** (*amebocyte lysate*), un extracto de células de la sangre del cangrejo herradura (*Limulus polyphemus* o *Tachypleus tridentatus*); de ahí LAL (*Limulus amebocyte lysate*). Ante una endotoxina, se coagula.

Lo describe el texto armonizado de las farmacopeas europea, japonesa y estadounidense. Su versión japonesa en inglés está reproducida en el borrador de 2010 del anexo 14 de ICH Q4B que publica la Agencia Europea de Medicamentos (EMA), anexo que declara intercambiables los tres textos. Hay tres técnicas:

| Técnica | Qué se observa | En sencillo |
|---|---|---|
| Gelificación (*gel-clot*) | Si se forma un gel firme | Muestra y lisado en un tubo, normalmente 60 ± 2 minutos a 37 ± 1 °C sin moverlo; se le da la vuelta y, si el gel aguanta, es positivo. |
| Turbidimétrica (*turbidimetric*) | Cómo se enturbia la mezcla | Un equipo mide la turbidez; en la versión cinética, cuánto tarda en llegar a una turbidez fijada. |
| Cromogénica (*chromogenic*) | Cómo aparece un color | La reacción corta una molécula sintética que suelta un color; en la versión cinética se mide cuánto tarda. |

Las dos últimas comparan con una **curva patrón** de endotoxina de referencia: al menos tres concentraciones y un coeficiente de correlación de al menos 0,980. En caso de duda o disputa, decide la gelificación.

**La unidad** es la **unidad de endotoxina** (UE; en inglés *endotoxin unit*, EU). Según el texto armonizado, 1 UE es 1 unidad internacional, y el patrón se calibra con el internacional de la OMS. Los límites se dan en UE/mg, UE/mL o UE por unidad.

**La sensibilidad del lisado** se escribe λ (lambda): la menor concentración de endotoxina que lo hace coagular, en UE/mL.
### El límite de endotoxinas: K/M
La tolerancia depende de cuánta endotoxina llega al paciente. La guía técnica de inspección 40 de la FDA (1985) y el texto armonizado lo expresan así:

> límite de endotoxinas = K / M

- **K**: dosis de endotoxina por kilo de peso a partir de la cual se espera fiebre. La FDA da **5,0 UE/kg**, y **0,2 UE/kg** para inyección en el canal raquídeo (vía intratecal).
- **M**: dosis máxima del producto por kilo que recibe el paciente de una vez o, si se infunde, en una hora.

Ejemplo de la FDA: dosis máxima de 10 mL/kg, 5 / 10 = 0,5 UE/mL. Para un API con dosis máxima de 2 mg/kg en una hora (valor de ejemplo): 5,0 / 2 = **2,5 UE/mg**.

En la segunda edición de su guía de preguntas y respuestas sobre pirógenos y endotoxinas (marzo de 2026), la FDA da por superada su antigua tabla de límites, remite al cálculo de las farmacopeas y pide justificar cada límite caso por caso. El de tu API está en su especificación.
### La máxima dilución válida
Muchas muestras **interfieren**: frenan o aceleran la reacción. La guía 40 de la FDA cita un pH inadecuado o sustancias que atrapan los iones metálicos de carga doble (cationes divalentes) que necesita la reacción. El remedio habitual es **diluir**. Pero si diluyes demasiado, una cantidad peligrosa de endotoxina quedaría por debajo de lo que detecta el lisado y el negativo no valdría nada.

El tope es la **máxima dilución válida** (*maximum valid dilution*, MVD). Fórmula del texto armonizado:

> MVD = límite de endotoxinas × concentración de la solución de muestra / λ

Con límite 2,5 UE/mg, solución de 10 mg/mL y λ = 0,125 UE/mL (valores de ejemplo): 2,5 × 10 / 0,125 = **200**. No se diluye más de 200 veces.

La FDA (2026) recomienda trabajar a la menor dilución que quita la interferencia, con margen. Su ejemplo: MVD 1:100, interfiere a 1:10 pero no a 1:20, se analiza a 1:30.

**Ensayo cuantitativo por gelificación.** Se busca la última dilución que aún da gel; la concentración de la solución es su factor por λ. Si es la 1:8: 8 × 0,125 = 1 UE/mL, y con 10 mg/mL, 1 / 10 = **0,1 UE/mg**. Cumple el límite de 2,5.
### Los controles del ensayo LAL
El texto armonizado monta cuatro soluciones:

| Solución | Qué lleva | Qué debe dar |
|---|---|---|
| A | La muestra | El resultado |
| B | Muestra más endotoxina añadida | Positivo: la muestra no tapa la reacción |
| C | Endotoxina en agua para el ensayo | Positivo: el lisado funciona |
| D | Agua para el ensayo sola | Negativo: nada contaminado |

Si B, C o D fallan, el ensayo no es válido y se repite: no es un dato del lote. En las técnicas fotométricas, la endotoxina añadida en B se recupera entre el 50 y el 200 %. El vidrio se **despirogena** en estufa; el texto cita como habitual un mínimo de 30 minutos a 250 °C.
### La monitorización ambiental
La **monitorización ambiental** (*environmental monitoring*) vigila los microbios del aire y de las superficies. Métodos que citan el anexo 1 (9.22) y la FDA (2004):

- **Placa de sedimentación** (*settle plate*): placa de 90 mm abierta que recoge lo que cae del aire. La FDA la considera semicuantitativa; el anexo 1 limita la exposición a 4 horas, para que el agar no se seque.
- **Muestreo activo de aire** (*active air sampling*): un aparato aspira un volumen conocido de aire sobre el agar. Da UFC/m³.
- **Placa de contacto** (*contact plate*, o RODAC): placa de 55 mm que se apoya en una superficie, un guante o la ropa.
- **Hisopo** (*swab*) y **huella de guante** (*glove print*, los cinco dedos sobre el agar).

**Cuenta del aire.** Se aspiran 500 L (0,5 m³) y crecen 45 colonias: 45 / 0,5 = 90 UFC/m³.

Límites de acción máximos del anexo 1 (tabla 6), para salas de estériles:

| Grado | Aire (UFC/m³) | Sedimentación, 90 mm (UFC/4 h) | Contacto, 55 mm (UFC/placa) | Guante (UFC/guante) |
|---|---|---|---|---|
| A | Sin crecimiento | Sin crecimiento | Sin crecimiento | Sin crecimiento |
| B | 10 | 5 | 5 | 5 |
| C | 100 | 50 | 25 | No se indica |
| D | 200 | 100 | 50 | No se indica |

Con 90 UFC/m³ se supera el límite de grado B, no el de C ni el de D. Además, el anexo 1 pide:

- **Alerta y acción** (9.9 a 9.13): la alerta avisa de una deriva; superar la acción obliga a investigar la causa raíz, valorar el impacto en el producto, incluidos los lotes fabricados entre el muestreo y el resultado, y corregir.
- **Tendencias** (9.11), con atención a los microbios que forman esporas y a los mohos, difíciles de controlar.
- **Identificar** (9.31): hasta especie en grados A y B; en C y D, por ejemplo al superar límites.
- **Que el muestreo no contamine** (9.8).
### Muestrear sin estropear la muestra
Puede tocarte muestrear agua, torta húmeda de la centrífuga o del filtro, o producto del secadero. La OMS (7.2 a 7.4) pide personal formado, técnica **aséptica**, material y envases estériles cerrados, anotar la hora y que transporte y espera no cambien la población de microbios. También que la desinfección del punto de muestreo no altere el nivel de microbios de la muestra.

Lo que **no** se hace:

- **No tocar** la boca del envase, el interior del tapón ni la parte del muestreador que entra en el producto.
- **No dejar que llegue desinfectante** a la muestra: mataría microbios y daría un resultado falso bajo.
- **No hablar, toser ni inclinarte** sobre el envase abierto, ni dejarlo abierto más de lo necesario.
- **No usar un envase** con el precinto roto o caducado.
- **No guardar la muestra** donde te venga bien: va a la temperatura del procedimiento y al laboratorio cuanto antes.
- **No cambiar la forma de tomarla**: el agua se muestrea como se usa, con la misma manguera y la misma purga (FDA, guía de sistemas de agua de 1993).
- **No repetir en silencio** una muestra que crees que salió mal: se anota y se avisa.
### Si el resultado sale fuera de especificación
ICH Q7 (11.15) pide investigar y documentar según procedimiento todo resultado fuera de especificación (*out of specification*, OOS): analizar los datos, valorar si hay un problema importante, repartir acciones correctoras y concluir. Repetir muestras o análisis también sigue un procedimiento escrito.

Lo propio de la microbiología:

- **Un segundo análisis limpio no borra el primero.** La FDA (1993) recuerda que la contaminación no se reparte por igual en un lote.
- **Primero, el laboratorio**: controles, medios, técnica. Para endotoxinas, la FDA (2026) dice que si el ensayo se hizo a la MVD y el fallo no se puede atribuir a un error del análisis, el lote se rechaza.
- **Identificar el microbio** para buscar su origen: el agua, una persona, el aire, la torta que esperó húmeda. La FDA (2004) señala que los métodos genéticos son más exactos que los bioquímicos y muy útiles en investigaciones.
- **Buscar en planta y en otros lotes**: monitorización de la sala, agua de los puntos usados, limpieza, tiempos de espera, incidencias del turno, y lotes con la misma agua, sala o equipo. Tus anotaciones son la materia prima.

El lote sigue en cuarentena, y lo decide la unidad de calidad, que según ICH Q7 (2.22) es la responsable de aprobar o rechazar los API.

En planta manda siempre el procedimiento vigente (SOP): los métodos, los límites y la forma de muestrear de tu planta son los que diga.
`,
  plant: `
Lote ficticio QF-5108 del principio activo ficticio KT-22, destinado a un medicamento inyectable. Su especificación incluye recuento de aerobios, recuento de mohos y levaduras, ausencia de dos bacterias y endotoxinas.

Iván, operador del turno de tarde, toma la muestra en la descarga del secadero SV-402. La hoja le pide hacerlo con el muestreador estéril del kit MB-07 y un frasco estéril precintado. Comprueba el precinto y la fecha del frasco. Abre el frasco sin tocar la boca ni el interior del tapón, que sujeta con la mano y no deja en la mesa. Llena hasta la marca, cierra y anota la hora: 18:42. Lleva el frasco a la nevera de muestras, como dice el procedimiento.

Cuatro días después llega el resultado: aerobios 420 UFC/g, por encima del límite del producto (valores de ejemplo). Endotoxinas, mohos y levaduras dentro de especificación.

El laboratorio revisa primero su parte: los controles negativos no crecieron y el control positivo creció bien. Identifica las colonias y encuentra una bacteria formadora de esporas.

Calidad abre una investigación. Con la hoja en la mano, ven que la torta húmeda esperó once horas en la centrífuga CF-301 antes de pasar al secadero, por una avería de la bomba de vacío. El procedimiento admite seis (valores de ejemplo). La monitorización de la sala de descarga de esa semana muestra la misma bacteria en una placa de contacto del suelo.

El lote QF-5108 sigue en cuarentena hasta que Calidad decida. Nadie repitió el análisis «para ver si sale bien». Lo que sostiene la investigación es lo que se anotó: la hora de cada paso, la espera de la torta y quién tomó la muestra y cómo.
`,
  batchRecord: `
En la hoja de producción (*batch record*) del lote verás, en los pasos de muestreo microbiológico:

- **Qué muestra**: producto final, torta húmeda, agua de un punto de uso, agua del aclarado final de una limpieza. Con el código de la muestra y del equipo o punto de uso.
- **Material de muestreo**: código o lote del kit estéril y del envase, con su fecha de caducidad y la comprobación de que el precinto estaba íntegro.
- **Cantidad tomada**, y en el agua, si se purgó antes, cuánto tiempo y con qué manguera.
- **Fecha, hora y firma** de quien muestrea. En pasos críticos, verificación de una segunda persona.
- **Conservación y envío**: dónde se dejó la muestra (por ejemplo, la nevera de muestras), a qué hora se entregó al laboratorio y en qué condiciones.
- **Condiciones de la sala** antes de abrir producto: presiones, temperatura y humedad, si la hoja lo pide.
- **Tiempos de espera** que afectan a los microbios: cuánto estuvo la torta húmeda antes del secado, cuánto una solución acuosa antes de usarse. Con el valor real, no el máximo permitido.
- **Incidencias**: envase caído o abierto por error, muestra repetida y por qué, avería que alargó una espera, a quién se avisó.
- **Estado del lote**: en cuarentena hasta recibir y aprobar los resultados microbiológicos y de endotoxinas.

Nunca se escribe «conforme» en lugar de una hora o un dato: se anota lo que pasó.
`,
  terms: [
    { es: "Unidad formadora de colonias (UFC)", en: "Colony forming unit (CFU)", def: "Colonia detectable que nace de uno o más microorganismos; es la unidad de los recuentos microbiológicos." },
    { es: "Recuento total de aerobios", en: "Total aerobic microbial count (TAMC)", def: "Número de microbios que crecen con aire en el medio y las condiciones del método, expresado en UFC/g o UFC/mL." },
    { es: "Recuento total de mohos y levaduras", en: "Total yeasts and moulds count (TYMC)", def: "Número de hongos que crecen en el medio y las condiciones del método." },
    { es: "Dilución seriada", en: "Serial dilution", def: "Serie de diluciones sucesivas, normalmente de diez en diez, para que las colonias de la placa se puedan contar." },
    { es: "Filtración por membrana", en: "Membrane filtration", def: "Paso de la muestra líquida por un filtro que retiene los microbios; el filtro se incuba sobre el agar." },
    { es: "Límite de detección", en: "Limit of detection", def: "Menor cantidad de microorganismos que el método puede detectar; un resultado sin colonias se da como menor que este valor." },
    { es: "Microorganismo indeseable", en: "Objectionable organism", def: "Microbio que puede causar infección al usar el medicamento como se indica o que puede crecer en él." },
    { es: "Promoción del crecimiento", en: "Growth promotion test", def: "Prueba de que un lote de medio de cultivo hace crecer una cantidad pequeña y conocida de microbios de referencia." },
    { es: "Lisado de amebocitos de Limulus", en: "Limulus amebocyte lysate (LAL)", def: "Extracto de células de la sangre del cangrejo herradura que se coagula ante las endotoxinas; base del ensayo de endotoxinas." },
    { es: "Unidad de endotoxina (UE)", en: "Endotoxin unit (EU)", def: "Unidad de actividad de endotoxina; 1 UE equivale a 1 unidad internacional." },
    { es: "Máxima dilución válida", en: "Maximum valid dilution (MVD)", def: "Mayor dilución de la muestra a la que todavía se puede detectar el límite de endotoxinas." },
    { es: "Placa de sedimentación", en: "Settle plate", def: "Placa de agar que se deja abierta un tiempo definido para recoger los microbios que caen del aire." },
    { es: "Placa de contacto", en: "Contact plate (RODAC)", def: "Placa de agar que se apoya en una superficie, guante o prenda para recoger sus microbios." },
    { es: "Resultado fuera de especificación", en: "Out-of-specification (OOS) result", def: "Resultado que no cumple la especificación aprobada; obliga a una investigación documentada." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Se mezclan 5 g de producto con 45 mL de diluyente (dilución 1:10, 0,1 g por mL). Se siembra 1 mL en cada una de dos placas y crecen 23 y 31 colonias. ¿Cuántas UFC/g tiene el producto?",
      answer: 270,
      tolerance: 0.01,
      unit: "UFC/g",
      explain: "Media de colonias: (23 + 31) / 2 = 27, que venían de 0,1 g; en un gramo, 27 / 0,1 = 270 UFC/g.",
    },
    {
      kind: "choice",
      q: "En el recuento de mohos y levaduras de tu lote se sembró 1 mL de la dilución 1:10 y no creció ninguna colonia. ¿Cómo debe informarse?",
      options: [
        "Como 0 UFC/g, porque no ha crecido ninguna colonia en la placa",
        "Como menos de 10 UFC/g, el límite de detección de ese montaje",
        "Como ensayo no válido, porque un recuento nunca puede salir vacío",
        "Como 1 UFC/g, el valor mínimo que admite una especificación",
      ],
      answer: 1,
      explain: "Una sola colonia habría sido 1 / 0,1 = 10 UFC/g; la OMS pide informar «menos del límite de detección» o «no detectado», no cero.",
    },
    {
      kind: "number",
      q: "Para un API inyectable se toma K = 5,0 UE/kg y la dosis máxima del medicamento en una hora es M = 0,5 mg de API por kilo. ¿Cuál es el límite de endotoxinas en UE/mg?",
      answer: 10,
      tolerance: 0.01,
      unit: "UE/mg",
      explain: "Límite = K / M = 5,0 / 0,5 = 10 UE/mg de API.",
    },
    {
      kind: "number",
      q: "Con un límite de 10 UE/mg, una solución de muestra de 5 mg/mL y un lisado de sensibilidad λ = 0,25 UE/mL, ¿cuál es la máxima dilución válida?",
      answer: 200,
      tolerance: 0.01,
      unit: "veces",
      explain: "MVD = límite × concentración / λ = 10 × 5 / 0,25 = 200; la solución no se puede diluir más de 200 veces.",
    },
    {
      kind: "number",
      q: "En un ensayo cuantitativo por gelificación con λ = 0,25 UE/mL, la última dilución que da gel firme es la 1:4. La solución de muestra tenía 20 mg/mL de API. ¿Cuántas UE/mg tiene el API?",
      answer: 0.05,
      tolerance: 0.01,
      unit: "UE/mg",
      explain: "La solución tiene 4 × 0,25 = 1 UE/mL; como lleva 20 mg/mL, el API tiene 1 / 20 = 0,05 UE/mg.",
    },
    {
      kind: "choice",
      q: "En un ensayo LAL, el tubo de agua para el ensayo sola (control negativo) da gel firme. ¿Qué significa para el resultado de tu lote?",
      options: [
        "Que el lote tiene endotoxinas y debe rechazarse en ese momento",
        "Que el lote cumple, porque el control demuestra que el lisado reacciona",
        "Que hay que diluir más la muestra hasta superar la máxima dilución",
        "Que el ensayo no es válido y hay que repetirlo; no es un dato del lote",
      ],
      answer: 3,
      explain: "El control negativo debe salir negativo; si da gel, algo está contaminado en el ensayo y el resultado no vale como dato del lote.",
    },
    {
      kind: "number",
      q: "Un muestreador activo aspira 250 L de aire de una sala y en la placa crecen 7 colonias. ¿Cuántas UFC/m³ son?",
      answer: 28,
      tolerance: 0.01,
      unit: "UFC/m³",
      explain: "250 L son 0,25 m³; 7 / 0,25 = 28 UFC/m³.",
    },
    {
      kind: "choice",
      q: "Una placa de sedimentación de 90 mm, expuesta 4 horas en una sala de grado C de productos estériles, da 62 UFC. Según el anexo 1, ¿qué procede?",
      options: [
        "Investigar la causa y valorar el impacto en los lotes fabricados entretanto",
        "Nada: el límite de acción de grado C para esa placa es de 100 UFC",
        "Repetir la placa y quedarse con la que dé menos colonias de las dos",
        "Solo anotarlo, porque las placas de sedimentación no tienen límite",
      ],
      answer: 0,
      explain: "El límite de acción de grado C es 50 UFC por placa en 4 horas; al superarlo se investiga la causa raíz, se valora el impacto en el producto, incluidos los lotes entre muestreo y resultado, y se toman acciones correctoras.",
    },
    {
      kind: "choice",
      q: "Vas a tomar una muestra microbiológica de agua y el procedimiento manda desinfectar antes el grifo de muestreo. ¿Qué haces?",
      options: [
        "Rociar alcohol dentro del frasco estéril para asegurarte de que no hay nada",
        "Tomar la muestra sin purgar, para no perder los microbios del grifo",
        "Desinfectar como dice el procedimiento y no dejar que el desinfectante llegue a la muestra",
        "Saltarte la desinfección, porque cualquier producto altera el resultado",
      ],
      answer: 2,
      explain: "La OMS pide que la desinfección del punto de muestreo no altere el nivel de microbios de la muestra: si llega desinfectante al frasco, mata microbios y da un resultado falso bajo.",
    },
    {
      kind: "choice",
      q: "El recuento de aerobios de tu lote sale fuera de especificación. Alguien propone repetir el análisis y, si sale bien, liberar el lote. ¿Qué es lo correcto?",
      options: [
        "Liberar si el segundo análisis cumple, porque el primero sería un error",
        "Investigar según procedimiento; un segundo resultado bueno no anula el primero",
        "Mezclar el lote con otro que cumpla para bajar el recuento de la mezcla",
        "Volver a secar el lote en el secadero y enviarlo sin más análisis",
      ],
      answer: 1,
      explain: "ICH Q7 pide investigar todo resultado fuera de especificación según procedimiento, y la FDA recuerda que la contaminación no se reparte por igual: no encontrarla en otra muestra no anula el primer hallazgo.",
    },
  ],
};
