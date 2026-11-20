import type { Lesson } from "./types";

export const fluidosAFondo: Lesson = {
  slug: "fluidos-a-fondo",
  level: 11,
  order: 1,
  title: "Fluidos a fondo: presión, caudal y por qué un líquido se mueve por una tubería",
  titleEn: "Fluids in depth: pressure, flow rate and why a liquid moves through a pipe",
  minutes: 38,
  summary:
    "Qué es la presión y cuánta da una columna de líquido, cómo se calculan el caudal y la velocidad en un tubo, qué son la viscosidad y la pérdida de carga, y cómo se mueve un líquido por gravedad, con nitrógeno, con vacío o con bomba.",
  body: `
En una planta casi todo consiste en mover líquidos: cargar un disolvente, pasar un reactor a la centrífuga, vaciar un depósito. La idea que lo resume todo: **un líquido solo se mueve si algo lo empuja, y va de donde hay más presión a donde hay menos**. Las lecciones siguientes (tuberías y válvulas, bombas) cuentan con qué equipos se hace. Aquí va la base.

### Qué es un fluido
Un **fluido** (*fluid*) es todo lo que fluye: no tiene forma propia y toma la del recipiente. Hay dos clases.

- Un **líquido** (*liquid*) tiene un volumen fijo: un litro ocupa un litro en un vaso o en un cubo.
- Un **gas** (*gas*) ocupa todo el recipiente, por grande que sea.

La diferencia que más importa: **los líquidos casi no se comprimen; los gases sí.** Piensa en una jeringa con la punta tapada. Llena de aire, puedes hundir el émbolo y al soltar vuelve como un muelle. Llena de agua, no se mueve. En un gas, a la misma temperatura, si la presión absoluta se dobla, el volumen se queda en la mitad.

Consecuencias en planta:

- **Un gas a presión es un muelle cargado.** Devuelve su energía de golpe si algo se suelta.
- **Un líquido encerrado no perdona.** Si un tramo queda lleno de líquido entre dos válvulas cerradas y se calienta, el líquido se dilata y no tiene sitio: la presión sube muchísimo con pocos grados.
- **El gas que empuja a un líquido sigue empujando.** En un trasvase con nitrógeno, cuando se acaba el líquido el gas sale detrás de golpe.

### La presión, desde cero
La **presión** (*pressure*) es una fuerza repartida en una superficie:

> presión = fuerza / superficie

Ejemplo. Una persona de 80 kg aprieta el suelo con 80 × 9,81 = 784,8 newtons (el newton, N, es la unidad de fuerza; 9,81 es la gravedad).

- Sobre dos zapatos planos (0,04 m² en total): 784,8 / 0,04 = 19620 pascales.
- Sobre un tacón de 1 cm² (0,0001 m²): 784,8 / 0,0001 = 7,8 millones de pascales.

La misma fuerza y 400 veces más presión.

**Unidades.** La unidad oficial es el **pascal** (Pa): un newton repartido en un metro cuadrado. Es muy pequeña; en planta se usan sus múltiplos y el bar.

| Unidad | Equivale a |
|---|---|
| 1 kPa (kilopascal) | 1000 Pa |
| 1 mbar (milibar) | 100 Pa |
| 1 bar | 100000 Pa = 100 kPa = 1000 mbar |
| Atmósfera normal | 101325 Pa = 1,01325 bar = 1013,25 mbar |

**La fuerza sobre una tapa.** Al revés: fuerza = presión × superficie. Una boca de hombre redonda de 0,5 m de diámetro mide 3,1416 × 0,25 × 0,25 = 0,196 m². Con solo 0,5 bar dentro (50000 Pa), el gas la empuja con 50000 × 0,196 = 9817 N: lo que pesa una masa de unos 1000 kg. Por eso antes de abrir un equipo se comprueba que está a presión ambiente.

**Absoluta, manométrica y vacío.** La lección de inertización a fondo lo explica con detalle. En resumen: la manométrica (*gauge pressure*, bar g) cuenta desde la presión del ambiente y la absoluta (*absolute pressure*, bar a) desde el vacío total; absoluta = manométrica + atmosférica. El vacío (*vacuum*) es cualquier presión por debajo de la del ambiente. Para mover un líquido lo que cuenta es la **diferencia** de presión entre los dos extremos, que sale igual en absoluta que en manométrica si no mezclas las dos.

### La presión que da el propio líquido
Si buceas, notas más presión en los oídos cuanto más bajas: es el peso del agua que tienes encima. Eso es la **presión hidrostática** (*hydrostatic pressure*):

> P = ρ × g × h

- **ρ** (letra griega ro) es la densidad en kg/m³. Si la tienes en kg/L, multiplica por 1000.
- **g** es la aceleración de la gravedad: 9,81 m/s² (valor redondeado habitual).
- **h** es la altura de líquido en metros, en vertical desde la superficie.
- El resultado sale en pascales.

En los ejemplos usamos densidades redondas, declaradas como valores de ejemplo: 1000 kg/m³ para un líquido como el agua y 870 kg/m³ para un disolvente menos denso (como el tolueno de la lección de densidad). En planta vale la densidad de tu hoja.

**Ejemplo 1: 10 m de agua.** P = 1000 × 9,81 × 10 = 98100 Pa = 0,981 bar. Regla de bolsillo: **cada 10 m de agua dan casi 1 bar**.

**Ejemplo 2: el fondo de un reactor lleno.** Con 2,5 m de altura de líquido de 1000 kg/m³: P = 1000 × 9,81 × 2,5 = 24525 Pa = 0,245 bar. Si además hay 0,5 bar g de nitrógeno encima, la válvula de fondo aguanta 0,5 + 0,245 = 0,745 bar g.

**Ejemplo 3: el mismo reactor con el disolvente.** P = 870 × 9,81 × 2,5 = 21337 Pa = 0,213 bar. Misma altura, menos presión, porque el líquido pesa menos.

**La forma del depósito no importa.** En la fórmula no aparecen ni el ancho ni los litros: solo la altura. Un depósito más ancho tiene más peso de líquido, pero también más fondo donde repartirlo, y se compensa exactamente.

**Aplicación: medir el nivel por presión.** Muchos depósitos llevan en el fondo un **transmisor de presión** (*pressure transmitter*) que calcula el nivel despejando la altura: h = P / (ρ × g). Si mide 0,150 bar (15000 Pa) y la densidad es 870 kg/m³, h = 15000 / (870 × 9,81) = 1,76 m.

El instrumento necesita la densidad correcta. Ajustado para 1000 kg/m³ con un líquido de 870 dentro, calculará 15000 / (1000 × 9,81) = 1,53 m: marcará menos nivel del que hay. Y si el depósito tiene presión de gas encima, hay que restarla: para eso están los transmisores de **presión diferencial** (*differential pressure*), que comparan el fondo con la parte de arriba.

### Caudal: cuánto pasa por unidad de tiempo
El **caudal volumétrico** (*volumetric flow rate*) es el volumen que pasa en un tiempo:

> Q = V / t

Se mide en L/min o en m³/h. Para pasar de L/min a m³/h se multiplica por 60 y se divide entre 1000: 100 L/min = 6 m³/h. Al revés, 1 m³/h = 16,7 L/min.

**¿Cuánto tarda?** t = V / Q. Cargar 4000 L a 100 L/min lleva 4000 / 100 = 40 minutos.

El **caudal másico** (*mass flow rate*) son los kilos que pasan en un tiempo:

> caudal másico = ρ × Q

Con el disolvente de 870 kg/m³ a 6 m³/h: 870 × 6 = 5220 kg/h. En pequeño: 100 L/min × 0,87 kg/L = 87 kg/min.

### Velocidad dentro del tubo
El caudal dice cuánto pasa; la velocidad, lo deprisa que corre el líquido. Las une el área del círculo interior del tubo:

> Q = v × A, con A = π × (D / 2)²

D es el **diámetro interior** en metros y π vale 3,1416. Para obtener m/s, el caudal va en m³/s: el valor en m³/h se divide entre 3600.

**Ejemplo 1.** 6 m³/h por un tubo de 50 mm de diámetro interior. A = 3,1416 × 0,025 × 0,025 = 0,001963 m². Q = 6 / 3600 = 0,001667 m³/s. v = 0,001667 / 0,001963 = 0,85 m/s.

**Ejemplo 2: el tubo se estrecha.** El líquido no se comprime: lo que entra por un extremo sale por el otro, así que el caudal es el mismo en todos los tramos. Es la **ecuación de continuidad** (*continuity equation*): v₁ × A₁ = v₂ × A₂. Si el tubo pasa de 50 mm a 25 mm, el diámetro es la mitad y el área, la cuarta parte. La velocidad se multiplica por cuatro: 0,85 × 4 = 3,4 m/s.

**Ejemplo 3: al revés.** ¿Qué caudal da 1 m/s en el tubo de 50 mm? Q = 1 × 0,001963 = 0,001963 m³/s = 7,07 m³/h, unos 118 L/min.

A más velocidad, más rozamiento y más electricidad estática. La nota técnica NTP 225 del Instituto Nacional de Seguridad y Salud en el Trabajo recomienda no pasar de 7 m/s con líquidos de elevada resistividad y quedarse por debajo de 1 m/s con suspensiones de sólidos en líquidos inflamables.

### Viscosidad
La **viscosidad** (*viscosity*) es la resistencia de un fluido a fluir: su rozamiento interno. Vuelca un vaso de agua y otro de miel: el agua cae al instante y la miel tarda. La miel es mucho más viscosa.

No es lo mismo que la densidad. La densidad es cuánto pesa un litro; la viscosidad, cuánto le cuesta moverse. Se mide en pascales por segundo (Pa·s) o en milipascales por segundo (mPa·s), que es lo mismo que el centipoise (cP) de las fichas antiguas.

**Cambia con la temperatura.** En los líquidos, al calentar baja: la miel tibia corre mejor que la fría. Al enfriar, sube.

**Por qué te importa:**

- **Al bombear.** Un líquido viscoso roza más: para el mismo caudal hace falta más presión, y con la misma bomba pasa menos.
- **Al filtrar y centrifugar.** El líquido tiene que atravesar la torta y la tela; si es más viscoso, pasa más despacio. Una filtración en frío suele ser más lenta que la misma en caliente.
- **Al vaciar.** Escurre mal y deja más producto pegado.

### Flujo ordenado y flujo revuelto
- **Régimen laminar** (*laminar flow*): el líquido avanza en capas ordenadas, como coches cada uno por su carril.
- **Régimen turbulento** (*turbulent flow*): avanza con remolinos, mezclándose, como el chorro de un grifo abierto a tope.

Para saber cuál toca se calcula el **número de Reynolds** (*Reynolds number*):

> Re = ρ × v × D / μ

ρ es la densidad (kg/m³), v la velocidad (m/s), D el diámetro interior (m) y μ (letra griega mu) la viscosidad (Pa·s). Las unidades se cancelan y queda un número sin unidad, que compara el impulso del líquido con el freno de su viscosidad. Umbrales habituales de libro de texto para tuberías: **laminar por debajo de unos 2000 a 2300, turbulento por encima de unos 4000**, y entre medias una zona de transición.

**Ejemplo 1: un líquido fluido.** Densidad 1000 kg/m³ y viscosidad 0,001 Pa·s (valores de ejemplo redondos, del orden de los del agua). En el tubo de 50 mm a 0,85 m/s: Re = 1000 × 0,85 × 0,05 / 0,001 = 42500. Turbulento.

**Ejemplo 2: un líquido espeso.** Densidad 1200 kg/m³ y viscosidad 1 Pa·s (valores de ejemplo para un jarabe espeso). Mismo tubo y velocidad: Re = 1200 × 0,85 × 0,05 / 1 = 51. Laminar.

### Pérdida de carga: la presión se gasta por el camino
Con el líquido circulando, un manómetro al final de una tubería marca menos que otro al principio. El rozamiento se come presión. Es la **pérdida de carga** (*pressure drop*).

| Si aumenta... | La pérdida de carga... |
|---|---|
| La longitud del tubo | Sube |
| El diámetro | Baja mucho |
| El caudal | Sube mucho |
| La viscosidad | Sube |
| Los codos, válvulas, filtros y estrechamientos | Sube: cada uno frena |

Una regla aproximada de libro de texto: **en régimen turbulento y con el mismo tubo, doblar el caudal multiplica la pérdida de carga por cuatro, más o menos**. Si a 3 m³/h una línea pierde 0,2 bar, a 6 m³/h perderá unos 0,8 bar.

Una válvula a medio abrir es una pérdida de carga puesta a propósito para regular. Un filtro de línea que se ensucia es una pérdida de carga que crece sola: el caudal baja sin que nadie toque nada.

### Altura, presión y velocidad se intercambian
Un líquido tiene energía de tres formas: por estar **alto**, por estar a **presión** y por ir **deprisa**. La idea de Bernoulli (*Bernoulli's principle*) es que esas tres formas se cambian unas por otras, como monedas, y que el rozamiento se queda con una parte.

**Ejemplo: trasvase por gravedad.** Un depósito tiene su nivel 3 m por encima del nivel del reactor de destino, los dos a la misma presión de gas. Esa altura equivale a un empuje de 870 × 9,81 × 3 = 25604 Pa = 0,256 bar. Es todo lo que hay para vencer el rozamiento de la línea. Y a medida que el depósito se vacía y el reactor se llena, la diferencia de altura baja y el caudal también.

**El sifón** (*siphon*) es el mismo caso con truco: el tubo sube primero por encima del nivel de origen y luego baja hasta un punto más bajo. Con el tubo lleno de líquido funciona; si entra aire en la parte alta, se corta. Una línea que hace sifón puede seguir vaciando un depósito con la bomba parada.

### Las cuatro maneras de trasvasar
En las cuatro se crea más presión en el origen que en el destino.

| Método | Cómo empuja | Ventajas | Riesgos y límites |
|---|---|---|---|
| **Gravedad** (*gravity transfer*) | El origen está más alto | Sencillo, sin máquinas | Lento, poco controlable; puede seguir solo por sifón |
| **Presión de nitrógeno** (*pressure transfer*) | Se presuriza el origen | Sin piezas móviles, mantiene inerte | El equipo debe aguantar la presión; al acabar, el gas pasa de golpe |
| **Vacío** (*vacuum transfer*) | Se baja la presión del destino | Si hay una fuga, entra aire en vez de salir producto | Altura limitada; evapora disolvente; el aire que entra estropea la inertización |
| **Bomba** (*pump*) | Una máquina da la presión | Caudal alto y regulable | Trabajo en seco, cavitación, fugas (lección de bombas) |

**Cuánto nitrógeno hace falta.** Para subir el disolvente de 870 kg/m³ a 6 m hay que vencer su columna: 870 × 9,81 × 6 = 51208 Pa = 0,51 bar. Con menos diferencia de presión el líquido no llega arriba.

**Por qué el vacío no sube un líquido a cualquier altura.** El vacío no tira del líquido. Quien empuja es la presión que hay sobre el origen, normalmente la atmósfera, que no pasa de 1 bar aproximadamente. La columna más alta que puede sostener es:

> h máxima = P atmosférica / (ρ × g)

- Con agua (1000 kg/m³) y vacío perfecto: 101325 / (1000 × 9,81) = 10,33 m. Es el máximo teórico.
- En la práctica el vacío no es perfecto. Con el destino a 200 mbar abs (20000 Pa) solo empujan 81325 Pa: 81325 / (1000 × 9,81) = 8,29 m, y falta descontar el rozamiento.
- Con disolventes volátiles es peor. Un líquido en vacío hierve cuando la presión baja hasta su **presión de vapor** (*vapour pressure*), y de ahí no se pasa. Por densidad, el disolvente de 870 kg/m³ subiría 101325 / (870 × 9,81) = 11,87 m. Pero si su presión de vapor es 0,25 bar (25000 Pa, valor de ejemplo), el tope es (101325 − 25000) / (870 × 9,81) = 8,94 m. Cuanto más caliente está, mayor es su presión de vapor y menos sube.

Con líquidos inflamables, la NTP 225 pide además evitar el vertido a chorro libre, usar tubos de llenado que lleguen al fondo, ir muy despacio mientras el extremo del tubo no esté sumergido y tener todo el conjunto unido entre sí y puesto a tierra.

### Golpe de ariete
Un líquido que corre por una tubería larga es una masa en movimiento, como un tren. Si cierras de golpe una válvula, la primera capa se para y todo lo que viene detrás choca contra ella. Como el líquido casi no se comprime, no hay colchón: la presión sube de golpe y viaja por la tubería como una onda. Es el **golpe de ariete** (*water hammer*). Suena como un martillazo y puede reventar juntas, mangueras e instrumentos. También ocurre al arrancar o parar de golpe una bomba.

Cómo se evita:

- **Cerrar y abrir despacio**, sobre todo las válvulas de un cuarto de vuelta, que cortan en un instante.
- **Bajar el caudal antes de cortar.**
- **Arrancar las bombas como diga el procedimiento.**

### Qué vigila y qué anota el operador
Antes:

1. **La ruta completa**: origen, válvulas, conexiones y destino.
2. **Que cabe**: nivel del destino y volumen que va a entrar.
3. **Por dónde respira cada equipo**: al origen le tiene que entrar gas (nitrógeno) para no quedar en vacío; del destino tiene que salir gas por su venteo.
4. **Tierra y mangueras.**
5. **La cuenta del tiempo**: volumen entre caudal.

Durante:

- **Caudal y presiones.** Un caudal que cae sin tocar nada indica algo que frena: filtro sucio, válvula a medias, líquido más frío y viscoso, u origen casi vacío.
- **Los dos niveles a la vez.** Lo que baja en el origen tiene que subir en el destino. Si no cuadra, el líquido va a otro sitio.
- **Ruidos y fugas**: golpes, vibraciones, goteos en bridas y mangueras.
- **El final**: cuando se acaba el líquido llega gas.

Después: cerrar despacio, dejar las válvulas como indica la hoja, quitar la presión que quede en la línea y respetar el tiempo de espera antes de abrir o tomar muestra en líquidos inflamables (la NTP 225 da un mínimo de 30 segundos para líquidos conductores y 1 minuto para los no conductores; tu procedimiento fija el suyo). Se anotan las horas, la cantidad real, las presiones y cualquier incidencia.

Los números de esta lección sirven para entender. En planta manda siempre el procedimiento vigente (SOP): el método de trasvase, las presiones, los caudales y los tiempos son los que diga tu hoja.
`,
  plant: `
Turno de tarde. La hoja pide cargar 2610 kg de tolueno en el reactor R-205 desde el depósito D-310, con la bomba P-310 y por el caudalímetro FT-310. La densidad escrita en la hoja es 0,87 kg/L, así que son 2610 / 0,87 = 3000 L. El caudal indicado es de 75 L/min.

Antes de empezar haces la cuenta: 3000 / 75 = 40 minutos. Si arrancas a las 15:10, deberías acabar hacia las 15:50.

Compruebas la ruta con tu compañera: salida de D-310, bomba, filtro de línea FL-310, entrada por el tubo buzo de R-205. Válvula hacia el colector de residuos, cerrada. R-205 está inertizado y con el venteo abierto hacia el lavador; D-310 recibe nitrógeno por su regulador. Pinzas de tierra puestas. Firmáis las dos.

Arrancas. El caudal sube a 75 L/min y se queda ahí. A las 15:35 llevas 1875 L y ves que el caudal ha bajado a 40 L/min. No has tocado nada. El manómetro de antes del filtro marca más que al principio y el de después, menos: el filtro se está tapando y se come la presión.

No abres más la válvula para compensar. Bajas el caudal, paras la bomba, cierras despacio la válvula de impulsión y avisas al jefe de turno. Mantenimiento cambia el elemento del FL-310 con su permiso de trabajo. Reanudas: quedan 3000 − 1875 = 1125 L, unos 15 minutos a 75 L/min.

Al terminar, el totalizador marca 3000 L, el nivel de D-310 ha bajado lo que tocaba y el de R-205 ha subido lo mismo. Anotas la parada, las horas y la incidencia del filtro.
`,
  batchRecord: `
En la hoja de producción (*batch record*) un trasvase aparece como una instrucción con origen, destino, cantidad y método, y casillas para anotar:

- **Origen y destino**: códigos de los dos equipos (p. ej. D-310 y R-205) y de la bomba, la manguera o el panel usados.
- **Verificación de la ruta**: realizado por y verificado por, antes de arrancar.
- **Método**: gravedad, presión de nitrógeno, vacío o bomba, con el valor de presión o de vacío realmente usado y su unidad (bar g, mbar abs).
- **Cantidad**: lectura del caudalímetro o del totalizador (L) o de la báscula (kg), y la densidad usada si hay que pasar de litros a kilos.
- **Caudal** o posición de la bomba, si la hoja lo fija (p. ej. no más de 75 L/min).
- **Hora de inicio y de fin**, y las paradas intermedias con su motivo.
- **Niveles** de origen y destino antes y después, si la hoja lo pide: tienen que cuadrar con la cantidad trasvasada.
- **Presión y temperatura** del equipo de destino durante la carga, sobre todo si es una adición sobre masa de reacción.
- **Lavado de línea** (*line flush*): disolvente y cantidad.
- **Incidencias**: caída de caudal, fuga, golpe en la línea, filtro obstruido, aviso al responsable de turno.

Se anota lo que marca el instrumento, con su unidad, en el momento. Si la cantidad real no coincide con la teórica, se anota la real y se avisa: no se «ajusta» el número.
`,
  terms: [
    { es: "Fluido", en: "Fluid", def: "Sustancia que fluye y toma la forma del recipiente: líquidos y gases. Los líquidos casi no se comprimen; los gases sí." },
    { es: "Presión", en: "Pressure", def: "Fuerza repartida en una superficie. Se mide en pascales (Pa) o en bar; 1 bar = 100000 Pa." },
    { es: "Presión hidrostática", en: "Hydrostatic pressure", def: "Presión que da una columna de líquido por su peso: densidad × gravedad × altura. No depende de la forma del depósito." },
    { es: "Presión diferencial", en: "Differential pressure", def: "Diferencia de presión entre dos puntos; se usa para medir nivel y para saber si un filtro se está tapando." },
    { es: "Caudal volumétrico", en: "Volumetric flow rate", def: "Volumen de fluido que pasa por unidad de tiempo (L/min, m³/h)." },
    { es: "Caudal másico", en: "Mass flow rate", def: "Masa de fluido que pasa por unidad de tiempo (kg/h). Es el caudal volumétrico multiplicado por la densidad." },
    { es: "Ecuación de continuidad", en: "Continuity equation", def: "El caudal es el mismo en todos los tramos de un tubo; donde el tubo se estrecha, el líquido corre más." },
    { es: "Viscosidad", en: "Viscosity", def: "Resistencia de un fluido a fluir. En los líquidos baja al calentar. Se mide en Pa·s o mPa·s." },
    { es: "Régimen laminar", en: "Laminar flow", def: "Flujo ordenado en capas, sin mezcla lateral; aparece con números de Reynolds bajos." },
    { es: "Régimen turbulento", en: "Turbulent flow", def: "Flujo con remolinos y mezcla; el habitual con disolventes en las tuberías de planta." },
    { es: "Número de Reynolds", en: "Reynolds number", def: "Número sin unidad (densidad × velocidad × diámetro / viscosidad) que indica si el flujo es laminar o turbulento." },
    { es: "Pérdida de carga", en: "Pressure drop", def: "Presión que se gasta en rozamiento a lo largo de tuberías, codos, válvulas y filtros." },
    { es: "Sifón", en: "Siphon", def: "Tubo lleno de líquido que sube y luego baja hasta un punto más bajo que el nivel de origen; sigue vaciando sin bomba." },
    { es: "Golpe de ariete", en: "Water hammer", def: "Subida brusca de presión cuando un líquido en movimiento se frena de golpe, por ejemplo al cerrar rápido una válvula." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Un depósito tiene 4 m de altura de un líquido de densidad 1000 kg/m³. Con g = 9,81 m/s², ¿qué presión da esa columna en el fondo, en bar? (1 bar = 100000 Pa)",
      answer: 0.392,
      tolerance: 0.02,
      unit: "bar",
      explain: "P = densidad × g × altura = 1000 × 9,81 × 4 = 39240 Pa. En bar: 39240 / 100000 = 0,392 bar.",
    },
    {
      kind: "choice",
      q: "Dos depósitos abiertos tienen 3 m de altura del mismo líquido. Uno es estrecho y el otro muy ancho. ¿Dónde hay más presión en el fondo?",
      options: [
        "En los dos igual: solo cuenta la altura de líquido",
        "En el ancho, porque contiene más kilos de líquido",
        "En el estrecho, porque el peso se concentra más",
        "No se puede saber sin conocer los litros de cada uno",
      ],
      answer: 0,
      explain: "La presión hidrostática es densidad × g × altura. El depósito ancho tiene más peso de líquido pero también más fondo donde repartirlo, y se compensa.",
    },
    {
      kind: "number",
      q: "Un transmisor en el fondo de un depósito mide 0,2 bar (20000 Pa) de columna de líquido. La densidad es 800 kg/m³ y g = 9,81 m/s². ¿Qué altura de líquido hay?",
      answer: 2.55,
      tolerance: 0.02,
      unit: "m",
      explain: "Altura = P / (densidad × g) = 20000 / (800 × 9,81) = 20000 / 7848 = 2,55 m.",
    },
    {
      kind: "number",
      q: "Hay que cargar 3000 L de disolvente a un caudal constante de 75 L/min. ¿Cuántos minutos tarda?",
      answer: 40,
      tolerance: 0.01,
      unit: "min",
      explain: "Tiempo = volumen / caudal = 3000 / 75 = 40 min.",
    },
    {
      kind: "number",
      q: "Por un tubo de 40 mm de diámetro interior pasan 9 m³/h. ¿A qué velocidad va el líquido? (área = 3,1416 × radio²; 1 h = 3600 s)",
      answer: 1.99,
      tolerance: 0.02,
      unit: "m/s",
      explain: "Área = 3,1416 × 0,02 × 0,02 = 0,001257 m². Caudal = 9 / 3600 = 0,0025 m³/s. Velocidad = 0,0025 / 0,001257 = 1,99 m/s.",
    },
    {
      kind: "choice",
      q: "Una tubería pasa de 50 mm a 25 mm de diámetro interior y el caudal no cambia. ¿Qué hace la velocidad del líquido en el tramo estrecho?",
      options: [
        "Se queda igual, porque el caudal es el mismo en los dos",
        "Se multiplica por cuatro, porque el área es la cuarta parte",
        "Se multiplica por dos, porque el diámetro es la mitad",
        "Se divide entre cuatro, porque el tubo frena el líquido",
      ],
      answer: 1,
      explain: "Con la mitad de diámetro el área es la cuarta parte. Como el caudal (velocidad × área) es el mismo, la velocidad se multiplica por cuatro.",
    },
    {
      kind: "number",
      q: "Un líquido de densidad 900 kg/m³ y viscosidad 0,003 Pa·s circula a 2 m/s por un tubo de 0,05 m de diámetro interior. ¿Cuánto vale el número de Reynolds?",
      answer: 30000,
      tolerance: 0.02,
      unit: "(sin unidad)",
      explain: "Re = densidad × velocidad × diámetro / viscosidad = 900 × 2 × 0,05 / 0,003 = 30000. Está por encima de 4000: régimen turbulento.",
    },
    {
      kind: "number",
      q: "Una línea pierde 0,3 bar cuando circulan 5 m³/h en régimen turbulento. Con la regla aproximada de que la pérdida crece con el cuadrado del caudal, ¿cuánto perderá a 10 m³/h?",
      answer: 1.2,
      tolerance: 0.02,
      unit: "bar",
      explain: "El caudal se dobla, así que la pérdida se multiplica por 2 × 2 = 4: 0,3 × 4 = 1,2 bar. Es una aproximación de libro de texto.",
    },
    {
      kind: "choice",
      q: "¿Por qué con vacío no se puede subir agua mucho más de unos 10 m, por bueno que sea el vacío?",
      options: [
        "Porque las bombas de vacío de planta no tienen potencia para más",
        "Porque el agua se vuelve más densa y pesada al estar en vacío",
        "Porque quien empuja es la atmósfera, y solo sostiene unos 10 m",
        "Porque por encima de 10 m el tubo siempre deja entrar el aire",
      ],
      answer: 2,
      explain: "El vacío no tira: empuja la presión atmosférica sobre el origen. Su máximo es 101325 / (1000 × 9,81) = 10,33 m de agua, y en la práctica menos.",
    },
    {
      kind: "choice",
      q: "Estás trasvasando con bomba por una línea larga y tienes que cortar. ¿Cómo evitas el golpe de ariete?",
      options: [
        "Cierro la válvula de bola de golpe para que el corte sea limpio",
        "Paro la bomba y abro enseguida todas las válvulas de la línea",
        "Dejo la bomba en marcha y cierro rápido la válvula de aspiración",
        "Bajo el caudal y cierro despacio, como indica el procedimiento",
      ],
      answer: 3,
      explain: "El golpe de ariete aparece cuando el líquido en movimiento se frena de golpe. Se evita reduciendo el caudal y cerrando despacio, sobre todo con válvulas de un cuarto de vuelta.",
    },
  ],
};
