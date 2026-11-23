import type { Lesson } from "./types";

export const materiaAFondo: Lesson = {
  slug: "materia-a-fondo",
  level: 1,
  order: 2,
  title: "La materia a fondo: estados, cambios de estado y mezclas",
  titleEn: "Matter in depth: states, changes of state and mixtures",
  minutes: 38,
  summary:
    "El modelo de partículas, qué es de verdad la temperatura, los seis cambios de estado, la presión de vapor y por qué el vacío hace hervir a menos temperatura, mezclas y cómo se separan, pureza en tanto por ciento y la conservación de la masa, con cuentas de planta.",
  body: `
En «La materia y sus estados» viste el vocabulario básico. Aquí vas a entender **por qué** pasan esas cosas, y lo que ocurre en un reactor, una centrífuga, un filtro o un secadero dejará de ser magia.

### Materia y sustancia
**Materia** (*matter*) es todo lo que tiene masa y ocupa sitio: el acero del reactor, el metanol del tanque, el nitrógeno de la línea. Hasta el aire pesa.

Una **sustancia** (*substance*) es una clase concreta de materia, siempre con la misma composición y las mismas propiedades. El agua es una sustancia; el metanol, otra.

### Propiedades físicas y propiedades químicas
- **Propiedades físicas** (*physical properties*): se miden **sin convertir** la sustancia en otra. Color, olor, densidad, punto de fusión, punto de ebullición, solubilidad.
- **Propiedades químicas** (*chemical properties*): describen cómo la sustancia **se transforma** en otras. Si arde, si reacciona con el agua, si se descompone al calentarla, si corroe un metal, si se estropea con el oxígeno del aire.

| Ejemplo | Tipo de propiedad |
|---|---|
| El metanol hierve a 65 °C | Física |
| El tolueno es menos denso que el agua (0,87 frente a 1,00 kg/L) | Física |
| El metanol arde | Química |
| El hidruro de sodio reacciona con violencia con el agua | Química |

Las fichas de datos de seguridad (*safety data sheets*) reúnen las propiedades físicas en su sección 9.

### Cambio físico y cambio químico
- **Cambio físico** (*physical change*): la sustancia cambia de aspecto, de estado o de sitio, pero **sigue siendo la misma**. Si disuelves azúcar en agua y evaporas el agua, recuperas el azúcar.
- **Cambio químico** (*chemical change*): las sustancias del principio desaparecen y aparecen **sustancias nuevas**, con otras propiedades. Es lo que llamamos una **reacción química** (*chemical reaction*). Un huevo frito no vuelve a ser huevo crudo.

| Operación de planta | Tipo de cambio | Por qué |
|---|---|---|
| Disolver el producto en metanol | Físico | El producto sigue ahí, repartido en el líquido |
| Cristalizar enfriando | Físico | El mismo producto vuelve a ser sólido |
| Destilar metanol | Físico | El metanol pasa a vapor y vuelve a líquido |
| Secar la torta | Físico | Solo se va el disolvente |
| Neutralizar ácido clorhídrico con sosa en el reactor | Químico | Salen sustancias nuevas: sal y agua |

Ojo: el calor, un cambio de color o un gas son pistas, no pruebas. Diluir ácido sulfúrico en agua calienta mucho y en planta se trata como una dilución, no como una reacción. Lo que define un cambio químico es que aparecen sustancias distintas.

### El modelo de partículas
La materia está hecha de partículas diminutas (átomos y moléculas, que verás después) que **nunca están quietas** y que **se atraen**. El estado depende de quién gana el pulso: la agitación, que las separa, o la atracción, que las junta.

En una plaza llena de gente: en el **sólido**, todos cogidos del brazo en filas, balanceándose en su sitio. En el **líquido**, se rozan y se escurren entre los demás, siempre pegados a alguien. En el **gas**, cada uno corre por su cuenta y solo se tropiezan de vez en cuando.

| Estado | Cómo se mueven las partículas | Cuánto se atraen | Forma y volumen |
|---|---|---|---|
| **Sólido** (*solid*) | Vibran en un sitio fijo | Mucho: muy juntas y ordenadas | Forma y volumen propios |
| **Líquido** (*liquid*) | Se deslizan unas sobre otras | Bastante: juntas, sin orden fijo | Volumen propio; toma la forma del recipiente |
| **Gas** (*gas*) | Vuelan en línea recta y chocan | Casi nada: muy separadas | Ocupa todo el recipiente |

El gas se comprime porque tiene mucho hueco, y empuja las paredes porque sus partículas chocan contra ellas sin parar: eso es su **presión** (*pressure*).

### Qué es la temperatura
Para las partículas, la **temperatura** (*temperature*) mide **con cuánta energía se agitan**, en promedio. Más temperatura es más agitación.

Al enfriar, la agitación baja, y hay un límite por abajo: el **cero absoluto** (*absolute zero*). La escala kelvin empieza a contar ahí, así que no tiene números negativos.

El Real Decreto 2032/2009 de unidades legales de medida dice tres cosas que te interesan:

- El **kelvin** (K) es la unidad de temperatura del Sistema Internacional y se define con la constante de Boltzmann, que liga temperatura y energía de agitación.
- La temperatura Celsius es la temperatura en kelvin menos 273,15 K.
- Un grado Celsius es igual de grande que un kelvin: una diferencia de temperaturas vale lo mismo en las dos escalas.

Dicho en una fórmula:

> T (K) = t (°C) + 273,15     y     t (°C) = T (K) − 273,15

Tres conversiones:

1. Sala a 25 °C: 25 + 273,15 = **298,15 K**.
2. Salmuera de la camisa a −10 °C: −10 + 273,15 = **263,15 K**.
3. Un dato de 300 K en una fórmula: 300 − 273,15 = **26,85 °C**.

Si el reactor pasa de 20 °C a 65 °C, ha subido 45 °C, que son también 45 K. Los kelvin salen en fórmulas; en la hoja verás grados Celsius.

### Los seis cambios de estado
Dar calor agita más las partículas y les deja romper la atracción; quitarlo hace lo contrario.

| Cambio | De qué a qué | Dónde lo ves en planta |
|---|---|---|
| **Fusión** (*melting*) | Sólido a líquido | El punto de fusión que el laboratorio usa para identificar el producto |
| **Solidificación** (*freezing, solidification*) | Líquido a sólido | Una línea de agua que se congela en invierno |
| **Vaporización** (*vaporization*) | Líquido a gas | El disolvente que hierve al destilar o se evapora en el secadero |
| **Condensación** (*condensation*) | Gas a líquido | El condensador del reactor y del secadero |
| **Sublimación** (*sublimation*) | Sólido a gas, sin pasar por líquido | El hielo seco (dióxido de carbono sólido) que «humea» sin mojar; la liofilización |
| **Deposición** (*deposition*) | Gas a sólido, sin pasar por líquido | La escarcha de un congelador; el hielo de una trampa fría en una línea de vacío |

La **liofilización** (*freeze-drying*) congela el producto y hace sublimar el hielo a vacío; aquí solo la nombramos.

Cristalizar no es solidificar. Al solidificar, una sustancia pura pasa entera a sólido. Al cristalizar, una sustancia **disuelta** sale en cristales y el disolvente sigue líquido. Y el frío también cristaliza disoluciones: la ficha de la sosa al 50 % de la app avisa de que cristaliza hacia los 12–13 °C.

### La meseta: la temperatura que se queda quieta
Calienta agua en un cazo: el termómetro sube, llega a 100 °C y se para, aunque el fuego siga igual. Un hielo que funde se queda en 0 °C hasta que no queda hielo. Ese tramo plano es la **meseta** (*plateau*).

¿Adónde va el calor? A romper la atracción entre partículas, no a agitarlas más. Ese calor «escondido» es el **calor latente** (*latent heat*); cuánto vale y cómo se calcula lo tienes en «Vapor y calderas a fondo».

En planta lo verás así:

- Al destilar, la temperatura de masa se queda en el punto de ebullición aunque la camisa esté más caliente.
- En el secadero, la temperatura de producto se queda plana durante horas mientras se evapora el disolvente y sube cuando queda poco. Es una pista, no el criterio de fin: eso lo da el análisis («El secado a fondo»).

### Evaporación y ebullición
- **Evaporación** (*evaporation*): ocurre **solo en la superficie** y a **cualquier temperatura**. Un charco se seca sin hervir. Las partículas de la superficie que van más rápidas escapan al aire.
- **Ebullición** (*boiling*): ocurre **en todo el líquido**, con burbujas de vapor que nacen dentro y suben. Solo pasa a una temperatura concreta para cada presión.

Por evaporación un bidón de disolvente abierto pierde líquido y llena la zona de vapor sin que nadie lo caliente.

### La presión de vapor, desde cero
Imagina una botella cerrada con un poco de metanol y el resto vacío. Algunas partículas de la superficie se escapan al hueco: el líquido «quiere» escapar. Vuelan, chocan con las paredes y algunas vuelven al líquido. Al rato se llega a un empate: escapan tantas como vuelven, y el vapor de encima empuja con una presión fija.

Esa presión es la **presión de vapor** (*vapour pressure*) del líquido a esa temperatura. Es la medida de las «ganas de escapar» de un líquido.

Sube con la temperatura porque al calentar hay más partículas con energía para soltarse, y sube cada vez más deprisa. Mira el agua:

| Temperatura del agua | Presión de vapor |
|---|---|
| 20 °C | 23 mbar |
| 40 °C | 74 mbar |
| 60 °C | 200 mbar |
| 80 °C | 474 mbar |
| 100 °C | 1013 mbar, la de la atmósfera |

Al pasar de 20 a 100 °C, la presión de vapor del agua se multiplica por más de cuarenta.

### Hervir es empatar con la presión de encima
Un líquido **hierve** cuando su presión de vapor **iguala a la presión que tiene encima**: solo entonces la burbuja que nace dentro aguanta y no se aplasta. Esa temperatura es el **punto de ebullición** (*boiling point*).

Al aire libre, encima está la atmósfera, unos 1013 mbar, y el agua llega a esa presión de vapor a 100 °C. Si bajas la presión de encima, el líquido empata antes, a menos temperatura; por eso en la montaña el agua hierve por debajo de 100 °C.

| Presión absoluta encima del agua | Hierve a |
|---|---|
| 1013 mbar (atmósfera) | 100 °C |
| 200 mbar | 60 °C |
| 100 mbar | 46 °C |
| 50 mbar | 33 °C |

Es la base de **destilar y secar a vacío** (*vacuum*): bajas la presión, el disolvente hierve a menos temperatura y el producto no se calienta tanto. Y al revés: si se pierde el vacío, el punto de ebullición sube y la destilación se frena aunque la camisa siga caliente. Estos números son del agua; cada líquido tiene su tabla.

### Volatilidad
Un líquido es más **volátil** (*volatile*) cuanto más alta es su presión de vapor a una misma temperatura. Con datos de las fichas de la app:

| Sustancia | Presión de vapor a 20 °C | Punto de ebullición a presión ambiente |
|---|---|---|
| Nitrógeno | (es un gas) | −196 °C |
| Metanol | 129 mbar | 65 °C |
| Agua | 23 mbar | 100 °C |
| Tolueno | no la damos | 111 °C |

A 20 °C el metanol tiene una presión de vapor más de cinco veces mayor que el agua: es más volátil, y al destilar una mezcla de los dos el vapor sale más rico en metanol.

La presión de vapor vuelve en «Bombas a fondo» (si la presión en la entrada de la bomba baja hasta ella, el líquido hierve dentro: es la **cavitación**) y en «Atmósferas explosivas a fondo» (un disolvente volátil echa vapores inflamables a temperatura ambiente).

### Sustancias puras y mezclas
Una **sustancia pura** (*pure substance*) tiene una sola clase de partícula. Hay dos tipos:

- **Elemento** (*element*): una sola clase de átomo. El nitrógeno de inertizar o el paladio de un catalizador.
- **Compuesto** (*compound*): varias clases de átomos unidos siempre en la misma proporción, como el agua o el metanol. Solo se separa en sus elementos con un cambio químico.

Una **mezcla** (*mixture*) junta sustancias que conservan sus propiedades y se separan con cambios físicos. Es **homogénea** (*homogeneous*) si se ve igual en todos sus puntos, como una **disolución** (*solution*), y **heterogénea** (*heterogeneous*) si se distinguen las partes, a simple vista o al microscopio.

| Mezcla de planta | Tipo | Qué hay dentro |
|---|---|---|
| El producto disuelto en metanol caliente | Homogénea (disolución) | Un sólido repartido en un líquido |
| El aire | Homogénea | Nitrógeno, oxígeno, argón y otros gases |
| La masa del reactor tras cristalizar | Heterogénea: **suspensión** (*suspension, slurry*) | Cristales sólidos flotando en las aguas madres |
| La capa turbia entre las fases de una extracción | Heterogénea: **emulsión** (*emulsion*) | Gotitas de un líquido dentro de otro con el que no se mezcla |
| La espuma de un reactor que hierve | Heterogénea: **espuma** (*foam*) | Burbujas de gas atrapadas en un líquido |
| La nube al descargar un secadero | Heterogénea: **polvo en aire** (*dust cloud*) | Partículas sólidas en un gas |

La nube de polvo se respira y, si el polvo es combustible, puede arder de golpe («Atmósferas explosivas a fondo»).

### Separar mezclas: cada método aprovecha una diferencia
Separar es gran parte del trabajo de planta; cada método aprovecha una propiedad física en la que los componentes son distintos.

| Método | Diferencia que aprovecha | Equipo de planta | Lección de equipos |
|---|---|---|---|
| **Decantación** (*settling, decanting*) | Densidad, en líquidos que no se mezclan | Reactor en reposo, vaciando la fase de abajo por el visor | «Extracción líquido-líquido y separación de fases» |
| **Filtración** (*filtration*) | Tamaño: el sólido no pasa por la tela | Filtro Nutsche, filtro-secador | «Filtros: Nutsche y filtro-secador» |
| **Centrifugación** (*centrifugation*) | Tamaño, con el giro empujando el líquido por la tela | Centrífuga | «La centrífuga» |
| **Evaporación y secado** (*evaporation, drying*) | Volatilidad: el líquido se evapora y el sólido no | Secadero; concentración en el reactor | «Secaderos» |
| **Destilación** (*distillation*) | Volatilidad entre líquidos | Columna y condensador | «Destilación y concentración» |
| **Cristalización** (*crystallization*) | Solubilidad, que cambia con la temperatura o con el disolvente | Reactor o cristalizador | «Cristalización» |
| **Extracción líquido-líquido** (*liquid-liquid extraction*) | Solubilidad distinta en dos líquidos que no se mezclan | Reactor con agitador | La misma de la decantación |
| **Tamizado** (*sieving*) | Tamaño de partícula, entre sólidos | Tamiz | «Molienda, micronización y tamizado» |

Suelen ir encadenados: cristalizas, centrifugas o filtras, y secas.

### Pureza: por qué nunca es del 100 %
Un principio activo «puro» es el que casi todo lo que hay en el bidón es el producto, y lo demás está identificado y bajo sus límites. La guía ICH Q7 define **impureza** (*impurity*) como cualquier componente del intermedio o del principio activo que no es la sustancia deseada. Nunca llega al 100 % porque:

- La reacción no es perfecta: queda material de partida y salen **subproductos**.
- Los cristales retienen algo de **aguas madres** (*mother liquor*), que la ICH Q7 define como el líquido que queda tras cristalizar o aislar y que puede contener materiales sin reaccionar, intermedios, algo de principio activo e impurezas.
- El secado nunca quita la última molécula de disolvente, y el producto puede degradarse un poco.

La pureza se expresa en **tanto por ciento en masa** (*mass percent*, % m/m o % p/p):

> % de un componente = masa del componente / masa total × 100

Tres cuentas, con valores de ejemplo:

1. **Impureza en un lote.** Un lote de 250 kg tiene un 0,08 % de una impureza: 250 × 0,08 / 100 = **0,2 kg**, es decir, 200 g.
2. **Pureza de una mezcla.** Un sólido de 50,0 kg contiene 48,5 kg de producto y el resto son impurezas y disolvente. Pureza = 48,5 / 50,0 × 100 = **97,0 %**.
3. **Sólido seco en una torta húmeda.** De la centrífuga sale una torta de 180 kg con un 22 % de humedad (todo el líquido que la moja, agua o disolvente). Sólido seco = 180 × (1 − 0,22) = **140,4 kg**; los otros 39,6 kg los evaporará el secadero.

Los límites de cada impureza los verás en «Impurezas en el API».

### La masa se conserva
Es la ley más útil para un operador: **en un sistema cerrado la masa total no cambia**, ni en un cambio físico ni en uno químico. Las partículas se reparten o se recombinan, pero no se crean ni se destruyen: es la **conservación de la masa** (*conservation of mass*). En una reacción los átomos solo cambian de pareja. Con las masas molares (lo que pesa un mol de cada sustancia; lo verás en «El mol: contar moléculas pesando»):

> ácido clorhídrico + hidróxido de sodio da cloruro de sodio + agua
> 36,46 g + 40,00 g = 76,46 g     y     58,44 g + 18,02 g = 76,46 g

Si «falta» masa, se ha ido por algún sitio: un gas por el venteo, disolvente hacia la bomba de vacío, producto pegado a las paredes o a la tela. Por eso la ICH Q7 pide comparar los rendimientos reales con los esperados e investigar las desviaciones en las etapas críticas.

**Cuenta 1: disolver y cristalizar** (valores de ejemplo). Disuelves 100 kg de producto bruto en 600 kg de metanol: tienes 700 kg de disolución. Enfrías y cristalizan 85 kg. Si los cristales salieran sin líquido, las aguas madres pesarían 700 − 85 = **615 kg**: los 600 kg de metanol y los 15 kg de sólido que siguen disueltos, con casi todas las impurezas. En la realidad la torta se lleva parte de esas aguas madres, pero la suma sigue cuadrando.

**Cuenta 2: secar** (valores de ejemplo). Entran en el secadero 150 kg de torta húmeda y salen 118,5 kg de producto seco. La torta ha perdido 150 − 118,5 = **31,5 kg** de disolvente evaporado, que debería aparecer casi entero en el depósito del condensador. Si hay mucho menos, algo se escapa por la bomba de vacío o por una fuga: coméntalo al supervisor.

En planta manda siempre el procedimiento vigente (SOP) y la hoja de producción de tu lote: esta lección explica el porqué, y el cómo y los límites los pone el procedimiento.
`,
  plant: `
En el reactor R-205 preparas la recristalización del intermedio ficticio RX-330. Cargas 120 kg de producto bruto, un sólido amarillento, y 720 kg de metanol: 840 kg dentro (valores de ejemplo).

Calientas con la camisa. La temperatura de masa sube hasta unos 65 °C y ahí se queda, aunque la camisa siga más caliente: el metanol ha llegado a su punto de ebullición a presión ambiente y está a reflujo. El vapor sube al condensador E-205, se hace líquido y vuelve a caer. Ves una disolución transparente: una mezcla homogénea.

Enfrías en rampa. Aparecen los primeros cristales y la masa se vuelve lechosa: ya es una suspensión. Al final de la rampa la descargas a la centrífuga C-410. Sale una torta de 125 kg con un 18 % de humedad, según el análisis: 102,5 kg de sólido seco y 22,5 kg de metanol. Por el otro lado, al tanque de aguas madres van unos 715 kg (840 − 125).

La torta pasa al secadero SD-512, a 100 mbar de vacío. Durante horas, la temperatura de producto se queda plana muy por debajo de la de la camisa mientras el metanol se evapora, y el depósito del condensador recoge el condensado. Al final pesas 103,0 kg de seco. La torta ha perdido 22,0 kg; en el depósito del condensador mides 21,6 kg. La diferencia es pequeña y la anotas tal cual: un poco de vapor que se lleva la bomba de vacío.
`,
  batchRecord: `
- Pesos reales de cada carga (producto bruto, disolvente), con báscula, hora y firma.
- Temperatura de masa y de camisa, y la temperatura de reflujo observada.
- Comprobación visual de «disolución completa» y de aparición de cristales, con hora.
- Rampa de enfriamiento: temperatura y hora en cada punto que pida la hoja.
- Presión de vacío (mbar absolutos) en destilaciones y secados.
- Peso de torta húmeda, resultado de humedad o pérdida por secado, y peso de producto seco.
- Volumen o peso de aguas madres y de condensado recogido.
- Rendimiento de la etapa frente al esperado; si se sale del rango, se avisa y se documenta.
`,
  terms: [
    { es: "Sustancia", en: "Substance", def: "Clase concreta de materia, con composición y propiedades siempre iguales." },
    { es: "Propiedad física", en: "Physical property", def: "La que se mide sin transformar la sustancia en otra: densidad, punto de ebullición, solubilidad." },
    { es: "Cambio químico", en: "Chemical change", def: "Transformación en la que aparecen sustancias nuevas; es una reacción química." },
    { es: "Modelo de partículas", en: "Particle model", def: "Idea de que la materia está hecha de partículas que se agitan y se atraen; explica los estados." },
    { es: "Kelvin", en: "Kelvin (K)", def: "Unidad de temperatura del Sistema Internacional. T (K) = t (°C) + 273,15." },
    { es: "Cero absoluto", en: "Absolute zero", def: "0 K, o −273,15 °C: la temperatura más baja posible, donde empieza la escala kelvin." },
    { es: "Sublimación", en: "Sublimation", def: "Paso directo de sólido a gas, sin pasar por líquido." },
    { es: "Meseta", en: "Plateau", def: "Tramo en el que la temperatura no cambia mientras dura un cambio de estado." },
    { es: "Presión de vapor", en: "Vapour pressure", def: "Presión que ejerce el vapor de un líquido en equilibrio con él. Sube con la temperatura." },
    { es: "Volátil", en: "Volatile", def: "Que tiene una presión de vapor alta y se evapora con facilidad." },
    { es: "Mezcla heterogénea", en: "Heterogeneous mixture", def: "Mezcla en la que se distinguen las partes, como una suspensión o una emulsión." },
    { es: "Suspensión", en: "Suspension / slurry", def: "Sólido en partículas repartido en un líquido sin disolverse." },
    { es: "Tanto por ciento en masa", en: "Mass percent (% w/w)", def: "Masa de un componente dividida entre la masa total, por cien." },
    { es: "Conservación de la masa", en: "Conservation of mass", def: "En un sistema cerrado la masa total no cambia, ni en cambios físicos ni químicos." },
  ],
  quiz: [
    {
      kind: "number",
      q: "El agua de la camisa está a 37 °C. ¿Cuánto es en kelvin?",
      answer: 310.15,
      tolerance: 0.001,
      unit: "K",
      explain: "T (K) = t (°C) + 273,15 = 37 + 273,15 = 310,15 K.",
    },
    {
      kind: "number",
      q: "Un lote de 400 kg de principio activo contiene un 0,05 % en masa de una impureza. ¿Cuántos gramos de impureza hay en el lote?",
      answer: 200,
      tolerance: 0.01,
      unit: "g",
      explain: "400 × 0,05 / 100 = 0,2 kg, que son 200 g.",
    },
    {
      kind: "number",
      q: "Una muestra de sólido contiene 97,2 g de producto, 1,6 g de impurezas y 1,2 g de disolvente. ¿Cuál es la pureza del producto en tanto por ciento en masa?",
      answer: 97.2,
      tolerance: 0.005,
      unit: "%",
      explain: "Masa total: 97,2 + 1,6 + 1,2 = 100 g. Pureza: 97,2 / 100 × 100 = 97,2 %.",
    },
    {
      kind: "number",
      q: "La centrífuga descarga 220 kg de torta húmeda con un 18 % en masa de humedad. ¿Cuántos kg de sólido seco contiene?",
      answer: 180.4,
      tolerance: 0.005,
      unit: "kg",
      explain: "Sólido seco = 220 × (1 − 0,18) = 220 × 0,82 = 180,4 kg. Los otros 39,6 kg son líquido.",
    },
    {
      kind: "number",
      q: "Disuelves 80 kg de producto bruto en 520 kg de etanol. Al enfriar cristalizan 68 kg. Suponiendo que los cristales se separan sin llevarse líquido, ¿cuántos kg pesan las aguas madres?",
      answer: 532,
      tolerance: 0.005,
      unit: "kg",
      explain: "Total: 80 + 520 = 600 kg. Aguas madres: 600 − 68 = 532 kg, con el etanol y los 12 kg de sólido que siguen disueltos.",
    },
    {
      kind: "number",
      q: "Entran en el secadero 160 kg de torta húmeda y salen 128,8 kg de producto seco. ¿Cuántos kg de disolvente se han evaporado?",
      answer: 31.2,
      tolerance: 0.005,
      unit: "kg",
      explain: "Por conservación de la masa: 160 − 128,8 = 31,2 kg, que deberían aparecer casi enteros en el depósito del condensador.",
    },
    {
      kind: "choice",
      q: "¿Cuál de estas operaciones de planta es un cambio químico?",
      options: [
        "Disolver el producto bruto en metanol caliente hasta ver la disolución transparente",
        "Secar la torta a vacío hasta que el análisis de humedad dé conforme",
        "Neutralizar ácido clorhídrico con sosa en el reactor, formando sal y agua",
        "Destilar el metanol y recogerlo en el depósito del condensador",
      ],
      answer: 2,
      explain: "En la neutralización aparecen sustancias nuevas, sal y agua. Disolver, secar y destilar dejan las sustancias como estaban: son cambios físicos.",
    },
    {
      kind: "choice",
      q: "Destilas agua a 100 mbar y la masa hierve a unos 46 °C. De pronto el vacío empeora y la presión sube a 200 mbar. ¿Qué esperas?",
      options: [
        "Que el punto de ebullición suba hacia 60 °C y la destilación se frene",
        "Que el punto de ebullición baje y la destilación vaya más deprisa",
        "Que la temperatura de ebullición no cambie, porque solo depende del líquido",
        "Que el agua deje de evaporarse del todo y se forme hielo en el reactor",
      ],
      answer: 0,
      explain: "Un líquido hierve cuando su presión de vapor iguala a la de encima. Con más presión hace falta más temperatura: el agua a 200 mbar hierve a unos 60 °C.",
    },
    {
      kind: "choice",
      q: "Calientas metanol a reflujo a presión ambiente. La camisa sube a 80 °C pero la temperatura de masa se queda en unos 65 °C. ¿Qué pasa?",
      options: [
        "La sonda de temperatura de masa está averiada y hay que cambiarla",
        "El agitador se ha parado y el calor no llega a la masa",
        "Falta metanol y hay que cargar más antes de seguir",
        "Es normal: el calor se gasta en hervir y la temperatura queda en meseta",
      ],
      answer: 3,
      explain: "El metanol hierve a 65 °C a presión ambiente. Mientras hierve, el calor que entra se gasta en convertir líquido en vapor y la temperatura no sube.",
    },
    {
      kind: "choice",
      q: "Al acabar la cristalización tienes en el reactor cristales flotando en metanol. ¿Qué mezcla es y con qué se separa?",
      options: [
        "Una disolución homogénea, que se separa decantando las dos fases",
        "Una suspensión heterogénea, que se separa en la centrífuga o el filtro",
        "Una emulsión de dos líquidos, que se separa con un tamiz vibratorio",
        "Una sustancia pura, que no necesita ninguna separación posterior",
      ],
      answer: 1,
      explain: "Sólido en un líquido sin disolver es una suspensión. Se separa por tamaño: la tela de la centrífuga o del filtro retiene los cristales y deja pasar las aguas madres.",
    },
  ],
};
