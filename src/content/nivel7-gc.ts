import type { Lesson } from "./types";

export const gcAFondo: Lesson = {
  slug: "gc-a-fondo",
  level: 7,
  order: 10,
  title: "Cromatografía de gases a fondo: medir los disolventes que quedan en el producto",
  titleEn: "Gas chromatography in depth: measuring the solvents left in the product",
  minutes: 38,
  summary:
    "Qué se puede medir con gases y qué no, el cromatógrafo pieza a pieza (gas portador, inyector, columna capilar, horno y detector de llama), el espacio de cabeza desde cero, el análisis de disolventes residuales de un lote con dos cuentas completas por patrón externo, los fallos típicos, la seguridad con hidrógeno y botellas, y por qué tu muestra de fin de secado decide el resultado.",
  body: `
En «Cromatografía de gases (GC)» viste el esquema. Aquí vas a abrir el equipo y seguir una muestra de tu secadero hasta el número que vuelve a planta. La teoría de la separación está en «Cromatografía a fondo», y las clases y límites de la guía ICH Q3C, en «Disolventes a fondo». Aquí no se repiten.

### Por qué con gases, y qué no se puede medir así
En la **cromatografía de gases** (*gas chromatography*, GC) las sustancias viajan dentro de un tubo arrastradas por un gas. Para eso, primero tienen que convertirse en gas: el manual de análisis de la FDA (*Pesticide Analytical Manual*, capítulo 5) dice que la técnica solo sirve para sustancias que **se pueden evaporar sin descomponerse**. Si algo se rompe con el calor antes de evaporarse, se mide por cromatografía de líquidos (HPLC).

Piensa en una cocina: el alcohol de un guiso se va con el vapor; el azúcar se quema antes de evaporarse. Tu principio activo suele parecerse al azúcar; los disolventes, al alcohol.

En una planta de principios activos (API) el laboratorio usa la GC para tres cosas:

| Qué se mide | Para qué | De dónde viene la muestra |
|---|---|---|
| **Disolventes residuales** (*residual solvents*) | Saber cuánto disolvente queda en el producto | Secadero (control en proceso) y producto final |
| **Pureza de disolventes recuperados** | Comprobar que el recuperado cumple su especificación antes de volver a usarlo | Depósito de recuperado |
| **Materias primas volátiles** | Comprobar la pureza o los restos de un disolvente o reactivo que llega | Recepción de materiales |

La guía ICH Q3C, en su apartado 3.4, lo dice así: los disolventes residuales se determinan normalmente con técnicas cromatográficas **como la cromatografía de gases**; si hay métodos armonizados de las farmacopeas se usan cuando sea posible, y si no, el fabricante elige un método validado. Para lo recuperado, ICH Q7 (apartado 14.41) pide que cumpla su estándar antes de reutilizarse; qué análisis se hace lo dice su especificación.

### El cromatógrafo, pieza a pieza
El manual de la FDA describe el equipo básico así: un sistema de entrada (el inyector), una columna, un detector, la electrónica que amplifica la señal y el registro de datos. Más el gas portador. Inyector, columna y detector tienen cada uno su temperatura controlada.

Piensa en una carrera: el gas empuja a todos por el circuito (la columna), cada sustancia para a ratos en boxes (la fase estacionaria) y la que más para llega más tarde a la meta (el detector).

**1. El gas portador** (*carrier gas*). Es la fase móvil: el gas que arrastra la muestra. Según el manual de la FDA, los más usados son **helio, hidrógeno y nitrógeno**, y la pureza siempre importa para no dañar la columna; habla de purezas del 99,999 % al 99,9999 % para helio e hidrógeno, según el detector.

| Gas | A favor | Riesgo |
|---|---|---|
| Helio | Inerte: no arde ni reacciona. Muy usado en columnas capilares | Desplaza el oxígeno del aire: asfixia en salas cerradas |
| Hidrógeno | Junto al helio, el preferido en columnas capilares: deja subir el caudal perdiendo poca eficacia, y el análisis es más corto | Es inflamable |
| Nitrógeno | Inerte, el de la red de planta | Pierde mucha eficacia si se sube el caudal: análisis más largos. También asfixia |

Qué gas usa tu laboratorio lo fija el método validado; cambiarlo es cambiar el método.

**2. El inyector** (*inlet*). Una cámara caliente por donde entra la muestra y se convierte en gas. La entrada se cierra con un **septum** (*septum*), un disco de goma que la aguja atraviesa y que se vuelve a cerrar. Cada septum tiene una vida limitada: cuando gotea, según el manual de la FDA, falsea la cuantificación y deja entrar aire.

Dentro del inyector hay dos maneras de repartir la muestra:

- **Modo dividido** (*split*): la mayor parte del gas que lleva la muestra sale por una purga y solo una fracción entra en la columna. Sirve cuando la columna se saturaría. Los dos métodos de la FDA que verás más abajo trabajan con una división de 5:1.
- **Modo sin división** (*splitless*): la purga se cierra durante la inyección y casi toda la muestra entra en la columna. Se usa para cantidades muy pequeñas (trazas).

**3. La columna capilar** (*capillary column*). Un tubo finísimo de sílice fundida, un vidrio de cuarzo sintético, forrado por fuera de plástico (poliimida) para que sea flexible y no se rompa. La **fase estacionaria** (*stationary phase*) no rellena el tubo: es una película de polímero pegada a la pared de dentro, como el barniz del interior de una pajita, y el gas pasa por el centro. Las cifras del manual de la FDA:

| Medida | Valores |
|---|---|
| Diámetro interior | De 0,05 a 0,53 mm |
| Longitud | De 10 a 60 m (enrollada en una jaula) |
| Espesor de la película | De 0,10 a 5,0 µm |

Cuanto más fina la columna, mejor separa, pero menos muestra admite. Un aviso del manual que importa: calentar la columna sin gas portador, o con oxígeno dentro por encima de unos 100 °C, aunque sea poco tiempo, puede dañar la fase de forma rápida e irreversible. Por eso una fuga no es un detalle.

**4. El horno y el programa de temperatura.** La columna va dentro de un horno. Puede trabajar a temperatura fija (*isothermal*) o con un **programa de temperatura** (*temperature programme*): empieza frío, sube a un ritmo fijo y se mantiene caliente al final. Al principio, frío, separa bien los disolventes ligeros, que salen pronto; al subir, empuja a los que hierven más alto para que no tarden horas. Este es el programa del boletín de laboratorio LIB 4670 de la FDA, un método de GC con detector de llama para metanol, etanol e isopropanol:

| Tramo | Qué hace el horno | Minutos |
|---|---|---|
| Inicial | Se mantiene a 50 °C | De 0 a 5 |
| Rampa | Sube 10 °C por minuto hasta 200 °C | De 5 a 20 |
| Final | Se mantiene a 200 °C | De 20 a 24 |

La rampa dura (200 − 50) / 10 = 15 minutos; en total, 5 + 15 + 4 = **24 minutos**, el tiempo de análisis que da el boletín. En el minuto 12 el horno está a 50 + 7 × 10 = 120 °C.

**5. El detector de ionización de llama** (*flame ionization detector*, FID). Al final de la columna hay una llamita alimentada con hidrógeno y aire; en el método LIB 4670, 30 mL/min de hidrógeno y 350 mL/min de aire. Lo que sale de la columna se quema en ella. Una sustancia orgánica, al quemarse, deja en la llama partículas con carga eléctrica, **iones** (*ions*). Un electrodo colector recoge esos iones y se forma una corriente eléctrica diminuta. Si sale una sustancia, sube la corriente; si solo sale gas portador, la señal se queda en la línea base. Según el manual de la FDA, el FID **no es selectivo**: responde a lo que sale en proporción a su masa. Para disolventes eso es justo lo que se quiere: ve casi todos los orgánicos, y el área del pico crece con la cantidad.

**Otros detectores**, solo para que te suenen. El de **conductividad térmica** (*thermal conductivity detector*, TCD), que el manual de la FDA también cita como no selectivo. Y la **espectrometría de masas** (*mass spectrometry*, MS), que rompe cada molécula y mide los trozos: además de cuánto, dice qué es. La guía de la OMS para laboratorios de control (WHO TRS 957, anexo 1) pone como equipo básico un cromatógrafo con FID y espacio de cabeza, y el de masas como opcional.

### Espacio de cabeza: analizar solo el vapor
Si inyectaras el producto disuelto, el API, que no se evapora, se quedaría pegado en el inyector y en la columna. El manual de la FDA advierte de que esa acumulación de material no volátil hace perder eficacia a la columna.

La solución es el **espacio de cabeza** (*headspace*, HS):

1. Se pesa el producto en un **vial** de vidrio y se añade un líquido que lo disuelve (el **diluyente**, *diluent*).
2. Se cierra el vial con un tapón con septum, herméticamente.
3. Se calienta a una temperatura y un tiempo fijos.
4. Los disolventes del producto pasan en parte al gas que hay encima del líquido. El API se queda abajo.
5. Una aguja pincha el tapón, toma un volumen del gas y lo inyecta en el cromatógrafo.

¿Por qué funciona? Por la **presión de vapor** (*vapour pressure*), las «ganas de escapar» de un líquido que viste en «La materia a fondo». Al calentar, esas ganas crecen y pasa más disolvente al gas. Como el vial está cerrado, al cabo de un rato se llega a un reparto estable entre líquido y gas: el **equilibrio** (*equilibrium*). Es como una botella de refresco cerrada: el gas de arriba y el líquido de abajo se ponen de acuerdo, y mientras no la abras, ese reparto no cambia.

Dos parámetros lo gobiernan: la **temperatura del vial** y el **tiempo de equilibrio**. Un ejemplo real, del boletín LIB 4674 de la FDA (benceno por espacio de cabeza): vial de 20 mL, unos 0,5 g de muestra en 5,000 mL de líquido, 90 °C durante 1200 segundos (20 minutos), agitando.

Muestra y patrón se tratan igual: mismo vial, mismo volumen de líquido, misma temperatura y mismo tiempo. Es el método habitual para disolventes residuales: mide lo volátil y deja fuera lo que ensucia.

Ojo con el nombre: en «Conservación, custodia y trazabilidad de muestras a fondo», «espacio de cabeza» es el aire que queda en tu frasco de muestra. Misma física: lo que escapa del producto va a ese aire.

### El análisis de un lote, paso a paso
**1. Qué disolventes.** Los del proceso: según ICH Q3C (apartado 3.5), el del último paso y los de pasos anteriores que el proceso no elimina siempre. Si tu lote usó metanol y tolueno, el método busca esos dos.

**2. Patrones.** Un **patrón** (*standard*) es una disolución con una cantidad conocida de cada disolvente. Se pesa el disolvente (o se mide su volumen y se pasa a masa con la densidad), se disuelve en un matraz aforado y se diluye. La guía ICH Q2(R2) pide que, para impurezas, el método valga hasta el 120 % del límite, así que el patrón suele prepararse cerca del límite.

**3. Muestra.** Se pesa el producto en el vial, se añade el diluyente y se cierra enseguida.

**4. Secuencia** (*sequence*). Un blanco (solo diluyente), inyecciones repetidas del patrón para el **ensayo de idoneidad del sistema** (*system suitability test*, SST) y las muestras. La OMS pide hacer el SST antes del análisis y repetirlo a lo largo de una secuencia larga.

**5. Identificar.** Cada disolvente tarda siempre lo mismo en salir con el mismo método: su **tiempo de retención** (*retention time*). El manual de la FDA lo resume: se identifica por el tiempo de retención y se cuantifica por la respuesta, comparando ambos con un patrón inyectado en el mismo sistema.

**6. Cuantificar con patrón externo** (*external standard*). El área del pico es proporcional a la cantidad. Es una regla de tres:

> µg en el vial de muestra = µg en el vial de patrón × (área de la muestra / área del patrón)

> ppm = µg en el vial de muestra / gramos de muestra

Un microgramo por gramo es una parte por millón, porque un gramo tiene un millón de microgramos. El boletín LIB 4674 usa la misma ecuación, con un patrón interno.

**Cuenta 1: metanol, preparando por masa** (valores de ejemplo).
- Patrón madre: 1500,0 mg de metanol en un matraz de 100 mL. 1500 / 100 = 15,00 mg/mL.
- Dilución: 2,0 mL del patrón madre a 100 mL. 15,00 × 2,0 / 100 = 0,300 mg/mL = 300 µg/mL.
- Vial de patrón: 5,0 mL. 300 × 5,0 = 1500 µg de metanol.
- Vial de muestra: 0,5000 g de producto y 5,0 mL de diluyente. El patrón equivale a 1500 / 0,5000 = 3000 ppm, el límite del metanol.
- Áreas: patrón 48 250, muestra 20 470.
- µg en la muestra: 1500 × 20 470 / 48 250 = 636,4 µg.
- Resultado: 636,4 / 0,5000 = **1273 ppm**.

**Cuenta 2: tolueno, preparando por volumen** (valores de ejemplo).
- Pipeteas 0,50 mL de tolueno. Con su densidad, 0,87 g/mL, son 0,50 × 0,87 = 0,435 g = 435 mg, en 100 mL: 4,35 mg/mL.
- Dilución: 1,0 mL a 50 mL. 4,35 / 50 = 0,087 mg/mL = 87 µg/mL.
- Vial de patrón: 5,0 mL. 87 × 5,0 = 435 µg.
- Muestra: 0,5012 g. Áreas: patrón 31 800, muestra 26 900.
- µg en la muestra: 435 × 26 900 / 31 800 = 368,0 µg.
- Resultado: 368,0 / 0,5012 = **734 ppm**.

**7. Comparar con la especificación.** El laboratorio compara cada resultado con el límite de la especificación de tu producto, que sale de ICH Q3C y se explica en «Disolventes a fondo». Si se pasa, ICH Q7 (apartado 11.15) pide investigar y documentar el resultado fuera de especificación.

### Orden de salida
¿Quién sale antes? Dos cosas mandan, de forma cualitativa:

- **El punto de ebullición.** Lo que hierve más bajo pasa al gas con más facilidad y sale antes. Funciona muy bien dentro de una misma familia: el heptano (98 °C) antes que el tolueno (111 °C), el metanol (65 °C) antes que el etanol (78 °C).
- **La polaridad.** Cuanto más se parece una sustancia a la fase estacionaria, más se entretiene en ella. Por eso dos sustancias con la misma ebullición pueden salir separadas, y el orden cambia de una columna a otra.

En el cromatograma del patrón del boletín LIB 4670 los alcoholes salen en el orden metanol, etanol, isopropanol, el mismo que su ebullición (65, 78 y 82 °C), y después el acetonitrilo, que hierve como el isopropanol. Un **cromatograma** (*chromatogram*) de ejemplo:

| Disolvente | Ebullición (°C) | Tiempo de retención (valor de ejemplo, min) |
|---|---|---|
| Metanol | 65 | 3,4 |
| Etanol | 78 | 4,6 |
| Acetona | 56 | 5,1 |
| Isopropanol | 82 | 5,6 |
| Acetato de etilo | 77 | 9,3 |
| Heptano | 98 | 10,8 |
| Tolueno | 111 | 14,2 |

Los tiempos son inventados; la acetona muestra que la ebullición sola no basta. El orden real lo da el patrón en la columna del método.

### Problemas típicos
| Lo que se ve | Qué ha pasado | Efecto |
|---|---|---|
| Un pico en el blanco donde no debería haber nada | **Arrastre** (*carry-over*) de la inyección anterior, sobre todo tras una muestra muy cargada | Resultado alto falso |
| Picos de acetona o de otro disolvente que el lote no usa | **Contaminación** del laboratorio: material lavado, aire, diluyente impuro | Picos falsos o resultado alto |
| Tiempos de retención que se mueven, áreas que bajan | **Fuga** en el septum o en una conexión | Cuantificación falsa y aire en la columna |
| Áreas bajas solo en algunos viales | **Vial mal sellado** | Resultado bajo falso |

Contra el arrastre y la contaminación se inyectan blancos de forma rutinaria, como pide el manual de la FDA: cuanto menos selectivo es el detector, más interferencias ve, y el FID lo ve casi todo.

**Por qué un vial mal cerrado da un resultado bajo.** El disolvente es volátil y busca salir. Si el tapón no sella, durante la espera y el calentamiento escapa por la junta. Queda menos en el gas del vial, el pico sale más pequeño y la regla de tres da menos ppm. En la cuenta 1, si se perdiera un 30 % del metanol, el área bajaría al 70 % y saldrían unos 891 ppm en vez de 1273. Lo peligroso es la dirección del error: un lote que no cumple puede parecer que cumple. Si el que pierde es el vial del patrón, la muestra sale alta.

### Seguridad: gases, botellas y llama
- **Botellas a presión.** La NTP 397 del Instituto Nacional de Seguridad y Salud en el Trabajo (INSST) pone el ejemplo de 200 kg/cm² (unos 196 bar) para el nitrógeno. Pide sujetar la botella (por ejemplo con cadenas), usar siempre un regulador de presión y nunca regular el gas con el grifo entreabierto, abrir el grifo despacio y apuntando lejos de las personas, no engrasarlo y comprobar las conexiones con agua jabonosa. Ojo: el manual de la FDA prohíbe el agua jabonosa dentro del cromatógrafo, porque el aparato la aspira; ahí se usan detectores electrónicos de fugas.
- **Hidrógeno.** La NTP 198 lo clasifica como gas inflamable, y el helio y el nitrógeno como no inflamables. La NTP 399 pone justo el caso de un cromatógrafo: una botella de 50 L de hidrógeno a 200 kg/cm² que se vacía a la mitad por una fuga suelta unos 5 m³; en un laboratorio de 100 m³ eso supera algo el 4 %, que es su límite inferior de inflamabilidad. Qué hacer: suprimir cualquier foco de ignición, cortar la electricidad desde un interruptor exterior y ventilar.
- **Helio y nitrógeno.** No arden, pero desplazan el oxígeno. La NTP 340 recuerda que no tienen olor, que por debajo del 16 % de oxígeno la situación es peligrosa y que bastan dos bocanadas de un gas inerte para perder el conocimiento.
- **La llama del FID.** Pequeña y casi invisible, arde con hidrógeno junto a viales de disolventes inflamables.

### Por qué te importa a ti
**El secado se libera con este número.** El secadero no se para cuando «parece seco»: se para cuando los disolventes residuales cumplen. ICH Q7 (apartado 14.21) aclara que seguir con un paso después de que un control en proceso dice que no ha terminado es parte del proceso normal, no un reprocesado. Si el análisis da alto, se sigue secando según la hoja.

**Tu muestra decide el resultado.** Todo lo de los viales empieza en tu frasco. Un frasco medio vacío, mal cerrado o caliente pierde disolvente antes de llegar al laboratorio, y el resultado sale bajo. ICH Q7 (apartado 8.35) pide que la integridad de la muestra se mantenga después de tomarla. Lleno, cerrado al momento, frío y sin esperas: los detalles están en «Muestreo en planta a fondo» y en «Conservación, custodia y trazabilidad de muestras a fondo».

**Por qué tarda.** Hay que preparar patrones, equilibrar cada vial (20 minutos en el ejemplo de la FDA), pasar blancos e idoneidad, y cada inyección dura lo que el programa del horno.

Los métodos, gases, temperaturas y límites de esta lección sirven para entender. En planta y en el laboratorio manda siempre el procedimiento vigente (SOP).
`,
  plant: `
Turno de noche. El intermedio ficticio KX-40 lleva diez horas en el secadero de vacío SV-512. La hoja pide un control en proceso de disolventes residuales: metanol y tolueno, con límites de 3000 y 890 ppm en la especificación del producto.

Abres la válvula tomamuestras del SV-512 y llenas el frasco de vidrio casi hasta arriba. Lo cierras al momento, lo etiquetas con lote, punto, fecha y hora real (03:10) y lo llevas al laboratorio sin paradas.

La analista lo pasa a dos viales de espacio de cabeza y lanza la secuencia: blanco, patrones, idoneidad y tus viales. A las 04:25 llega el resultado: metanol 410 ppm, tolueno 1150 ppm. El tolueno no cumple. Lo anotas con la hora y avisas a la jefa de turno. La hoja lo prevé: tres horas más de secado a la misma temperatura y nueva muestra. Es un paso normal del proceso, no un reprocesado.

En la segunda muestra un compañero te ofrece un frasco que dejó destapado en la mesa «solo cinco minutos». No lo usas: tomas una muestra nueva. Un frasco abierto pierde tolueno y daría un resultado bajo falso; el lote parecería seco sin estarlo.

El nuevo resultado: metanol 180 ppm, tolueno 610 ppm. Cumplen los dos. Lo anotas, firmas y sigues la hoja hacia la descarga del secadero. Has visto en directo que el número del laboratorio depende de cómo tomas la muestra.
`,
  batchRecord: `
En la hoja de producción (*batch record*), en la fase de secado, verás un control en proceso de disolventes residuales con estos datos:

- **Instrucción de muestreo**: punto de toma (p. ej. válvula tomamuestras del SV-512), tipo de envase, cantidad, llenado y cierre inmediato, y si debe ir refrigerada.
- **Tu registro de la toma**: fecha, hora real de la toma, quién la toma y código de la muestra o del vial.
- **Análisis pedido**: «Disolventes residuales por GC» (a veces «GC-HS»), con los disolventes del proceso: metanol, tolueno.
- **Resultado**: el número en ppm de cada disolvente tal como lo emite el laboratorio (p. ej. tolueno 1150 ppm), nunca «cumple» a secas.
- **Límite y decisión**: el límite de la especificación de cada disolvente y lo que se decide: seguir secando según la hoja o dar el secado por terminado.
- **Repeticiones**: cada muestra nueva con su hora y su resultado, también las que no cumplían.
- **Incidencias**: muestra repetida por un frasco mal cerrado, espera larga, fallo del cromatógrafo; con aviso al responsable de turno.
- **Firmas**: la tuya y, si el paso es crítico, la de verificación.

La hoja no recoge áreas ni cromatogramas: esos datos quedan en el sistema del laboratorio, enlazados con el código de tu muestra.
`,
  terms: [
    { es: "Cromatografía de gases", en: "Gas chromatography (GC)", def: "Técnica que separa sustancias que se pueden evaporar sin descomponerse, arrastradas por un gas a lo largo de una columna." },
    { es: "Gas portador", en: "Carrier gas", def: "Gas que hace de fase móvil y arrastra la muestra por la columna; normalmente helio, hidrógeno o nitrógeno." },
    { es: "Inyector", en: "Inlet / injector", def: "Cámara caliente por donde entra la muestra al cromatógrafo y se convierte en gas; se cierra con un septum." },
    { es: "Modo dividido y sin división", en: "Split and splitless injection", def: "Dos formas de inyectar: en la dividida solo una fracción de la muestra entra en la columna; en la sin división entra casi toda, para trazas." },
    { es: "Columna capilar", en: "Capillary column", def: "Tubo de sílice fundida de decenas de metros y menos de un milímetro de diámetro, con la fase estacionaria como película en la pared interior." },
    { es: "Programa de temperatura", en: "Temperature programme", def: "Secuencia de temperaturas del horno: inicial, rampa de subida a un ritmo fijo y mantenimiento final." },
    { es: "Detector de ionización de llama", en: "Flame ionization detector (FID)", def: "Detector que quema lo que sale de la columna en una llama de hidrógeno y aire y mide la corriente de los iones que se forman." },
    { es: "Espacio de cabeza", en: "Headspace (HS)", def: "Técnica que calienta la muestra en un vial cerrado y analiza solo el gas de encima, donde han pasado los disolventes." },
    { es: "Tiempo de equilibrio", en: "Equilibration time", def: "Tiempo que el vial se mantiene caliente para que el reparto del disolvente entre líquido y gas se estabilice." },
    { es: "Tiempo de retención", en: "Retention time", def: "Tiempo que tarda una sustancia en salir de la columna con un método dado; sirve para identificarla." },
    { es: "Patrón externo", en: "External standard", def: "Método de cálculo que compara el área del pico de la muestra con la de un patrón de cantidad conocida inyectado aparte." },
    { es: "Arrastre", en: "Carry-over", def: "Restos de una inyección anterior que aparecen como picos en la siguiente." },
    { es: "Ensayo de idoneidad del sistema", en: "System suitability test (SST)", def: "Comprobación, antes y durante la secuencia, de que el equipo y el método funcionan como se validó." },
  ],
  quiz: [
    {
      kind: "choice",
      q: "El laboratorio quiere medir por GC tres cosas. ¿Cuál de ellas no se puede medir directamente así?",
      options: [
        "El metanol que queda en el producto seco del secadero",
        "La pureza del tolueno recuperado en el depósito",
        "Un API sólido que se descompone antes de evaporarse",
        "Los restos de acetona en un disolvente que llega",
      ],
      answer: 2,
      explain: "La GC solo sirve para lo que se evapora sin descomponerse. Un API que se rompe con el calor se mide por cromatografía de líquidos; los disolventes sí se miden por GC.",
    },
    {
      kind: "number",
      q: "El vial de patrón contiene 360 µg de THF y da un área de 25000. El vial de muestra lleva 0,5000 g de producto y da un área de 18500. ¿Cuántos ppm de THF tiene el producto?",
      answer: 532.8,
      tolerance: 0.01,
      unit: "ppm",
      explain: "µg en la muestra = 360 × 18500 / 25000 = 266,4 µg. ppm = 266,4 / 0,5000 = 532,8 ppm.",
    },
    {
      kind: "number",
      q: "Pesas 890 mg de tolueno en un matraz de 100 mL y enrasas. Luego llevas 1,0 mL de esa disolución a 100 mL. ¿Qué concentración tiene la dilución, en µg/mL?",
      answer: 89,
      tolerance: 0.01,
      unit: "µg/mL",
      explain: "Patrón madre: 890 / 100 = 8,9 mg/mL. Dilución: 8,9 × 1,0 / 100 = 0,089 mg/mL, es decir, 89 µg/mL.",
    },
    {
      kind: "number",
      q: "Para un patrón pipeteas 1,90 mL de metanol, de densidad 0,79 g/mL. ¿Cuántos miligramos de metanol has puesto?",
      answer: 1501,
      tolerance: 0.01,
      unit: "mg",
      explain: "Masa = volumen × densidad = 1,90 × 0,79 = 1,501 g, es decir, 1501 mg.",
    },
    {
      kind: "number",
      q: "Programa de horno: 40 °C durante 5 min, subida de 10 °C por minuto hasta 200 °C y 4 min a 200 °C. ¿Cuánto dura el programa completo?",
      answer: 25,
      tolerance: 0.01,
      unit: "min",
      explain: "La rampa dura (200 − 40) / 10 = 16 min. Total: 5 + 16 + 4 = 25 min.",
    },
    {
      kind: "number",
      q: "Programa de horno: 60 °C durante 5 min y luego subida de 40 °C por minuto hasta 240 °C. ¿A qué temperatura está el horno en el minuto 7?",
      answer: 140,
      tolerance: 0.01,
      unit: "°C",
      explain: "En el minuto 7 lleva 2 min de rampa: 60 + 2 × 40 = 140 °C.",
    },
    {
      kind: "choice",
      q: "Un producto tiene en realidad 800 ppm de tolueno, pero el vial de muestra estaba mal sellado. ¿Qué esperas del resultado?",
      options: [
        "Que salga más bajo de lo real, porque el tolueno escapa por la junta",
        "Que salga más alto de lo real, porque entra aire del laboratorio",
        "Que salga igual, porque el detector compensa el vial mal cerrado",
        "Que no salga ningún pico, porque el vial abierto no se puede pinchar",
      ],
      answer: 0,
      explain: "El disolvente volátil se escapa durante la espera y el calentamiento, el pico sale más pequeño y la cuenta da menos ppm: un lote que no cumple podría parecer que cumple.",
    },
    {
      kind: "number",
      q: "Siguiendo el caso anterior, el vial mal sellado pierde el 40 % del tolueno antes de inyectarse. Si el producto tiene en realidad 800 ppm, ¿qué resultado dará el análisis?",
      answer: 480,
      tolerance: 0.01,
      unit: "ppm",
      explain: "Queda el 60 % del tolueno, el área baja al 60 % y el resultado también: 800 × 0,6 = 480 ppm.",
    },
    {
      kind: "choice",
      q: "En el blanco que se inyecta justo después de una muestra muy cargada aparece un pico de tolueno. ¿Qué es lo más probable?",
      options: [
        "Que el diluyente del blanco lleve tolueno de fábrica",
        "Que el detector de llama se haya apagado durante el blanco",
        "Que el tolueno se forme en la columna al calentar el horno",
        "Arrastre de la inyección anterior que queda en el sistema",
      ],
      answer: 3,
      explain: "Un pico en el blanco tras una muestra cargada es el arrastre típico. Por eso se intercalan blancos en la secuencia y se comprueban antes de dar resultados.",
    },
    {
      kind: "choice",
      q: "Una fuga en la línea de hidrógeno del cromatógrafo ha vaciado media botella en un laboratorio pequeño. Según la NTP 399, ¿qué se hace?",
      options: [
        "Buscar la fuga con un mechero encendido para localizarla",
        "Suprimir focos de ignición, cortar la luz desde fuera y ventilar",
        "Ponerse una mascarilla para no asfixiarse y seguir trabajando",
        "Encender el FID para quemar el hidrógeno que queda en el aire",
      ],
      answer: 1,
      explain: "En el ejemplo de la NTP 399 la fuga supera el 4 %, el límite inferior de inflamabilidad del hidrógeno: se suprimen los focos de ignición, se corta la electricidad desde un interruptor exterior y se ventila.",
    },
  ],
};
