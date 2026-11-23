import type { Lesson } from "./types";

export const equilibrioAFondo: Lesson = {
  slug: "equilibrio-a-fondo",
  level: 2,
  order: 11,
  title: "Equilibrio químico a fondo: empujar una reacción hacia donde interesa",
  titleEn: "Chemical equilibrium in depth: pushing a reaction where you want it",
  minutes: 38,
  summary:
    "Por qué algunas reacciones se quedan a medias, qué mide la constante de equilibrio y cómo se calcula cuánto producto sale, el cociente Q para saber hacia dónde va una mezcla, el principio de Le Châtelier con ejemplos de planta, la solubilidad de las sales poco solubles, el reparto entre dos fases en una extracción y por qué la hoja pide exceso, destilar o varias extracciones.",
  body: `
En «Equilibrio químico» viste que hay reacciones que van en los dos sentidos y que se las empuja hacia el producto con un exceso de reactivo o quitando el agua. Aquí vas a calcular **cuánto** producto se puede sacar como máximo y a ver la misma idea en las sales poco solubles y en las extracciones. Los ácidos débiles y los tampones están en «Ácidos, bases y pH a fondo», y la solubilidad en un disolvente, en «Disoluciones y solubilidad a fondo».

### Reacciones que se quedan a medias
Muchas reacciones avanzan hasta que se acaba el reactivo limitante («Reactivo limitante y exceso»). Otras se paran con reactivo y producto mezclados, por mucho que esperes. Son las **reacciones reversibles** (*reversible reactions*): mientras los reactivos forman producto, una parte del producto vuelve a deshacerse en reactivos.

Ejemplo de libro de texto, la **esterificación** (*esterification*): el ácido acético y el etanol forman acetato de etilo (un éster) y agua, y a la vez el agua rompe el éster y devuelve ácido y alcohol:

> ácido acético + etanol ⇌ acetato de etilo + agua

### El equilibrio no está quieto
Imagina dos piscinas unidas por un pasillo y dos personas, una en cada orilla, pasándose agua con cubos. Al principio toda el agua está a la izquierda: esa persona llena el cubo cada vez y la otra apenas devuelve nada. Cuanta más agua hay a la derecha, más devuelve la de ese lado. Llega un momento en que las dos pasan la misma cantidad por minuto. Desde fuera los niveles ya no cambian, pero las dos siguen trabajando sin parar.

Eso es el **equilibrio químico** (*chemical equilibrium*): la reacción hacia delante y la de vuelta siguen ocurriendo, pero a la misma velocidad. Es un **equilibrio dinámico** (*dynamic equilibrium*). Dos consecuencias:

- **Equilibrio no quiere decir mitad y mitad.** Los niveles de las dos piscinas pueden quedar muy distintos. Lo que dice el equilibrio es que ya no cambian.
- **Se llega desde los dos lados.** Partir de 1 mol de éster y 1 mol de agua lleva a la misma mezcla final que partir de 1 mol de ácido y 1 mol de etanol.

### La constante de equilibrio, K
Para cada reacción, a una temperatura dada, la mezcla de equilibrio cumple siempre una cuenta. Para una reacción sencilla A + B ⇌ C + D:

> K = [C] · [D] / ([A] · [B])

Los corchetes significan «concentración en mol/L» en el equilibrio, como en «Ácidos, bases y pH a fondo». Un mol son 6,02214076 × 10²³ partículas, según la definición legal del Sistema Internacional. Arriba van los productos, multiplicados; abajo, los reactivos. Si la ecuación lleva números delante (2 A + B ⇌ C), cada concentración se eleva a ese número: [A] al cuadrado. En esta lección todos los ejemplos son uno a uno.

K es la **constante de equilibrio** (*equilibrium constant*). Qué te dice su tamaño:

| K | Qué significa | Cómo se comporta |
|---|---|---|
| Muy grande (miles o más) | En el equilibrio casi todo es producto | La reacción va prácticamente hasta el final |
| Cerca de 1 (entre 0,1 y 10, más o menos) | Quedan cantidades apreciables de todo | La reacción se queda a medias; aquí hay que empujar |
| Muy pequeña | Casi todo sigue siendo reactivo | Apenas se forma producto |

K no depende de cuánto cargues ni de la agitación. **Cambia con la temperatura** y **no cambia con el catalizador**.

**Cálculo 1. K a partir de una mezcla de equilibrio.** En una reacción ficticia A + B ⇌ C + D se analiza la mezcla cuando ya no cambia (valores de ejemplo): [A] = 0,20 mol/L, [B] = 0,50 mol/L, [C] = 0,60 mol/L y [D] = 0,60 mol/L.

K = 0,60 × 0,60 / (0,20 × 0,50) = 0,36 / 0,10 = **3,6**

Hay más producto que reactivo, pero queda bastante reactivo sin convertir.

### Cuánto producto sale: la esterificación
Para el ácido acético con etanol, los libros de texto dan **K ≈ 4**. Tómalo como un valor aproximado de libro de texto para aprender a razonar.

Una comodidad: hay dos moléculas a cada lado, así que el volumen aparece dos veces arriba y dos abajo y se va. Se trabaja directamente con moles.

**Cálculo 2. Un mol de cada.** Empiezas con 1 mol de ácido acético y 1 mol de etanol. Llama x a los moles de éster que se forman. Por cada mol de éster se gasta un mol de ácido y uno de alcohol y sale un mol de agua:

| | Ácido acético | Etanol | Éster | Agua |
|---|---|---|---|---|
| Al principio | 1 | 1 | 0 | 0 |
| Cambia | − x | − x | + x | + x |
| En el equilibrio | 1 − x | 1 − x | x | x |

Se sustituye en K:

> x · x / ((1 − x) · (1 − x)) = 4

Las dos partes son cuadrados, así que se saca la raíz: x / (1 − x) = 2. Despejando, x = 2 − 2x; 3x = 2; **x = 0,667 mol**.

Solo se convierten **dos tercios** del ácido, un 66,7 %. El tercio restante no reaccionará por mucho que esperes.

**Cálculo 3. Con exceso de etanol.** Ahora cargas 1 mol de ácido y **3 moles** de etanol. El cuadro es igual, pero el etanol en el equilibrio es 3 − x:

> x · x / ((1 − x) · (3 − x)) = 4

Ya no es un cuadrado limpio. Multiplicando y ordenando sale una **ecuación de segundo grado**:

> 3x² − 16x + 12 = 0

Se resuelve con la fórmula de siempre: x = (16 ± raíz de (16² − 4 × 3 × 12)) / (2 × 3) = (16 ± raíz de 112) / 6 = (16 ± 10,583) / 6.

Salen dos soluciones: 4,43 y 0,903. La primera no tiene sentido, porque no puedes formar más éster que el ácido que tienes (1 mol). Vale **x = 0,903 mol**: la conversión del ácido sube del 66,7 % al **90,3 %**. Comprobación: 0,903² / (0,097 × 2,097) da 4.

| Moles de etanol por mol de ácido | Conversión del ácido en el equilibrio (K = 4) |
|---|---|
| 1 | 66,7 % |
| 2 | 84,5 % |
| 3 | 90,3 % |
| 5 | 94,5 % |
| 10 | 97,4 % |

Cada mol extra rinde menos que el anterior. El exceso de la hoja es un compromiso: más conversión, pero más volumen, más disolvente que destilar y más coste.

### El cociente Q: hacia dónde va la mezcla
La misma cuenta, hecha con las cantidades de un momento cualquiera, es el **cociente de reacción** (*reaction quotient*), Q. Compararlo con K te dice qué va a pasar:

| Comparación | Qué pasa |
|---|---|
| Q menor que K | Falta producto: la reacción avanza hacia delante |
| Q igual a K | Está en equilibrio: no cambia nada |
| Q mayor que K | Sobra producto: la reacción va hacia atrás |

**Ejemplo 1.** Mezclas 1 mol de cada uno de los cuatro: ácido, etanol, éster y agua. Q = 1 × 1 / (1 × 1) = 1, menor que 4: se forma más éster. Al final hay 1,33 mol de éster.

**Ejemplo 2. El etanol mojado.** Tienes la mezcla del cálculo 2 ya en equilibrio: 0,667 mol de éster y de agua, 0,333 de ácido y de etanol. Entra 1 mol de agua, por ejemplo con un etanol húmedo. Q = 0,667 × 1,667 / (0,333 × 0,333) = 10, mayor que 4. La reacción va hacia atrás: el agua rompe éster. Al volver al equilibrio quedan unos 0,54 mol de éster en vez de 0,67. Por eso la hoja fija un contenido en agua máximo para disolventes y reactivos.

### El principio de Le Châtelier, uno a uno
El **principio de Le Châtelier** (*Le Chatelier's principle*) lo resume: si a un equilibrio le cambias algo, se desplaza en el sentido que contrarresta ese cambio. Con Q y K se ve por qué: el cambio deja Q distinto de K y la reacción camina hasta que vuelven a coincidir.

**1. Añadir más de un reactivo (exceso).** Al añadir etanol, el denominador de Q crece, Q baja por debajo de K y se forma más éster. Es el cálculo 3. Se usa en exceso el reactivo **barato o fácil de quitar**, para convertir al máximo el caro, que suele ser el intermedio que viene de la etapa anterior.

**2. Quitar un producto.** Si un producto desaparece de la mezcla, el numerador de Q baja y la reacción no deja de avanzar para reponerlo. Quitándolo todo el tiempo, la reacción puede llegar casi al final. En planta:

- **Destilar el agua que se forma.** Se hace reflujo con un disolvente como el tolueno. Los vapores se llevan agua, se condensan y caen a un **separador Dean-Stark** (*Dean-Stark trap*): el agua, más densa y que no se mezcla con el tolueno, se queda en el fondo, y el tolueno rebosa y vuelve al reactor. El agua recogida se puede medir: cuando deja de aumentar, la reacción ya no forma más. Qué es un reflujo y por qué el tolueno y el agua hierven juntos por debajo de los dos puros está en «Destilación y concentración».
- **Destilar el metanol que se forma.** Algunas reacciones sueltan metanol, como la que convierte un éster metílico en una amida. El metanol es muy volátil (hierve a 65 °C) y se destila durante la reacción.
- **Precipitar el producto.** Si el producto no se disuelve en el medio y sale como sólido, deja de estar en la disolución y la reacción sigue formándolo.
- **Desprender un gas.** Si un producto es un gas que sale por el venteo, como el dióxido de carbono, se va de la mezcla y no puede volver. El riesgo está en la espuma y el caudal de gas, que se controlan con la velocidad de adición.

**3. Cambiar la temperatura.** Aquí no cambia Q: cambia la propia K. La regla de Le Châtelier trata el calor como si fuera un reactivo o un producto:

- En una reacción **exotérmica** (*exothermic*, desprende calor, como en «Calor de reacción y reacciones descontroladas»), el calor es un producto. **Calentar desplaza el equilibrio hacia los reactivos**: K baja y sale menos producto en el equilibrio. Al revés, enfriar favorece el producto.
- En una **endotérmica** (*endothermic*, absorbe calor), calentar favorece el producto.

La trampa: calentar **siempre acelera**. En una exotérmica reversible, en caliente llegas antes a un equilibrio peor; en frío, el equilibrio es mejor pero puedes tardar días. La temperatura de la hoja es un **compromiso entre velocidad y conversión** que fijó desarrollo. Subirla «para ir más rápido» puede dar menos producto y, en una exotérmica, más riesgo.

**4. La presión, en reacciones con gases (solo como idea).** Si en una reacción entre gases hay más moléculas de gas a un lado que al otro, subir la presión favorece el lado con menos moléculas de gas, porque así ocupan menos. En reacciones entre líquidos o sólidos la presión apenas mueve el equilibrio.

### Rápido no es lo mismo que lejos
Son dos preguntas distintas:

- **Qué rapidez**: lo estudia la **cinética** (*kinetics*), en «Velocidad de reacción y catalizadores». Depende de la temperatura, la concentración, la agitación y el catalizador.
- **Hasta dónde**: lo dice el **equilibrio**, con K. Depende de la temperatura y de las cantidades, no del catalizador.

Un **catalizador** (*catalyst*) acelera por igual la ida y la vuelta: llegas antes al mismo equilibrio. En la esterificación, un poco de ácido sulfúrico como catalizador te lleva antes al 66,7 % del cálculo 2, pero no más allá: para pasar hay que mover el equilibrio.

Si un control en proceso «no baja» porque ya está en equilibrio, esperar no sirve: la hoja dice qué hacer, no tú.

### Equilibrios de solubilidad: el producto de solubilidad
Una sal poco soluble en agua también está en equilibrio: el sólido suelta iones a la disolución y los iones vuelven a pegarse al cristal. Para una sal 1:1 ficticia, MCl, un cloruro con un ion M⁺ por cada Cl⁻:

> MCl sólido ⇌ M⁺ + Cl⁻

Su constante es el **producto de solubilidad** (*solubility product*), Ksp:

> Ksp = [M⁺] · [Cl⁻]

El sólido no entra en la cuenta mientras quede algo. Ksp pequeño, sal poco soluble.

**Cálculo 4. Solubilidad a partir de Ksp.** Para MCl, Ksp = 4,0 × 10⁻¹⁰ (valor de ejemplo). Si se disuelven s mol/L de sal, en el agua hay s de M⁺ y s de Cl⁻:

> s × s = 4,0 × 10⁻¹⁰, así que s = raíz de 4,0 × 10⁻¹⁰ = 2,0 × 10⁻⁵ mol/L

Con una masa molar de 300 g/mol (valor de ejemplo), son 0,006 g por litro: 6 mg/L.

**El efecto del ion común** (*common ion effect*). Ahora el agua ya lleva 0,10 mol/L de cloruro, por ejemplo de cloruro de sodio, y ese cloruro cuenta en Ksp:

> [M⁺] = 4,0 × 10⁻¹⁰ / 0,10 = 4,0 × 10⁻⁹ mol/L

La solubilidad baja de 2,0 × 10⁻⁵ a 4,0 × 10⁻⁹ mol/L: **5000 veces menos**. Añadir el ion que ya tiene la sal la hace precipitar más. Con Q se ve igual: si [M⁺] · [Cl⁻] supera Ksp, sobra y precipita hasta bajar a Ksp.

En planta se usa al **precipitar una sal del producto**: al formar un clorhidrato, la hoja puede pedir un pequeño exceso de ácido clorhídrico o una disolución de cloruro, para dejar menos clorhidrato disuelto. En disolventes orgánicos la cuenta exacta es más complicada, pero la idea es la misma. El exceso tiene límites (impurezas, otra forma sólida): por qué importan la sal y la forma sólida está en «Polimorfismo, sales y solvatos».

### Equilibrio de reparto entre dos fases
Agita tolueno y agua con un producto disuelto y deja reposar: el producto se reparte entre las dos capas, con moléculas que pasan y vuelven. Es otro equilibrio, con su constante, el **coeficiente de reparto** (*partition coefficient*):

> KD = concentración en la fase orgánica / concentración en la fase acuosa

Cómo se hace la operación en el reactor, cómo se separan las capas y cómo el pH mueve una amina de una fase a otra está en «Extracción líquido-líquido y separación de fases». Aquí, las cuentas.

**Cálculo 5. Una extracción.** Tienes 100 L de agua con 20 kg de producto y KD = 3 (valor de ejemplo). Añades 100 L de acetato de etilo y agitas. Llama f a la fracción que se queda en el agua. El acetato de etilo «vale» KD veces su volumen:

> f = V agua / (V agua + KD × V orgánico) = 100 / (100 + 3 × 100) = 0,25

Queda un 25 % en el agua y pasa un **75 %** al acetato de etilo: 15 kg de los 20.

**Cálculo 6. Dos extracciones con la mitad.** Con los mismos 100 L de acetato de etilo, pero en dos veces de 50 L:

- Primera: f = 100 / (100 + 3 × 50) = 0,40. Queda un 40 %.
- Segunda, sobre lo que queda: otra vez 0,40. Queda 0,40 × 0,40 = 0,16, un 16 %.

Pasa un **84 %**, 16,8 kg, frente al 75 % de una sola vez, con el mismo disolvente. En tres veces de 33,3 L quedaría 0,50 × 0,50 × 0,50 = 0,125: se extraería un 87,5 %.

| Disolvente total: 100 L | Queda en el agua | Extraído |
|---|---|---|
| Una vez 100 L | 25 % | 75 % |
| Dos veces 50 L | 16 % | 84 % |
| Tres veces 33,3 L | 12,5 % | 87,5 % |

Cada extracción se lleva una fracción fija de **lo que queda**, y cada vez empiezas con disolvente limpio, como al aclarar ropa en varias veces con poca agua. Por eso la hoja pide dos o tres lavados y no uno grande, y por eso no se juntan «para ahorrar tiempo».

### Equilibrio líquido-vapor
En «La materia a fondo» viste la presión de vapor: en una botella cerrada, las moléculas que escapan del líquido y las que vuelven acaban empatando. Es otro equilibrio dinámico, el **equilibrio líquido-vapor** (*vapour-liquid equilibrium*). Con una mezcla de dos líquidos, el vapor en equilibrio con ella sale más rico en el más volátil. Eso permite **destilar**: el vapor condensado no tiene la composición del líquido.

### Para qué te sirve todo esto en el turno
Ahora entiendes por qué la hoja pide cosas que parecen caprichos:

| Lo que pide la hoja | Por qué |
|---|---|
| Un exceso de un reactivo | Mueve el equilibrio hacia el producto del reactivo caro |
| Reflujo con Dean-Stark o destilar durante la reacción | Quita un producto (agua, metanol) para que la reacción llegue más lejos |
| Una temperatura concreta | Compromiso entre velocidad y conversión, y seguridad |
| Contenido en agua máximo de un disolvente | El agua puede hacer volver atrás la reacción |
| Exceso de ácido o de cloruro al precipitar una sal | Ion común: menos producto perdido en las aguas madres |
| Varias extracciones pequeñas | Sacan más que una grande con el mismo disolvente |

Lo que no te dan estas cuentas es permiso para cambiar nada. Más exceso, más temperatura o un lavado menos pueden cambiar impurezas, forma sólida o seguridad. Si algo no cuadra (el agua del Dean-Stark no llega, el control en proceso no baja), se anota y se avisa.

Los números de esta lección son de ejemplo para aprender a razonar. En planta manda siempre el procedimiento vigente (SOP) y la hoja de producción de tu lote.
`,
  plant: `
Turno de mañana en la planta ficticia. En el reactor **R-205** se esterifica el ácido ficticio **AC-20** con etanol, en tolueno y con un poco de ácido sulfúrico como catalizador. Todos los valores son de ejemplo.

La hoja dice: *«Cargar 400 mol de AC-20 y 3 equivalentes de etanol con agua ≤ 0,1 %. Reflujo separando agua en el Dean-Stark D-206. Continuar hasta que el agua recogida no aumente en 1 h. IPC: AC-20 ≤ 2,0 %.»*

Antes de cargar compruebas en el certificado que el etanol cumple el contenido en agua: un etanol mojado haría volver atrás la reacción. Haces la cuenta de cabeza: 400 mol de ácido dan, como mucho, 400 mol de agua, a 18 g/mol unos 7,2 kg, que son unos 7,2 L.

Empieza el reflujo. Cada hora miras la mirilla del D-206 y anotas el nivel de la capa de agua: 2,6 L, 4,8 L, 6,3 L, 7,0 L, 7,1 L. Entre la cuarta y la quinta hora casi no ha aumentado. Tomas muestra para el IPC: 1,4 %. Cumple.

Un compañero comenta que, para acabar antes, habría subido la temperatura de la camisa. Le explicas que la temperatura del reflujo la marca el disolvente que hierve, y que la reacción no avanza más por calentar, sino por quitar el agua. Al día siguiente la hoja pide dos lavados del tolueno con 150 L de bicarbonato cada uno, no uno de 300 L. Ya sabes por qué: dos lavados sacan más ácido residual que uno.
`,
  batchRecord: `
En la hoja de producción (*batch record*) de una reacción en equilibrio y de sus lavados verás y anotarás:

- **Cargas**: kg o mol de cada reactivo con su lote, y los equivalentes del reactivo en exceso, con la pesada verificada por un segundo operador.
- **Agua de los reactivos**: resultado del análisis de agua del disolvente o del reactivo frente a su límite, antes de cargar.
- **Reflujo o destilación**: hora de inicio, temperatura del producto y de la camisa, y presión si se trabaja a vacío.
- **Agua o destilado recogido**: volumen a cada hora que pida la hoja, comparado con el volumen teórico, y criterio de final (por ejemplo, «sin aumento en 1 h»).
- **IPC**: hora, resultado con su número real y decisión. Si no cumple, lo que diga la hoja, sin improvisar.
- **Precipitación de una sal**: cantidad de ácido o de disolución de cloruro añadida y temperatura.
- **Extracciones y lavados**: número de lavados, volumen de cada uno, tiempo de agitación y de decantación, fase que se conserva y destino de cada fase.
- **Incidencias**: cualquier valor fuera de rango o una recogida de agua que no llega a lo esperado, anotados tal cual y comunicados al responsable.
`,
  terms: [
    { es: "Reacción reversible", en: "Reversible reaction", def: "Reacción en la que los productos también vuelven a formar los reactivos, de modo que va en los dos sentidos a la vez." },
    { es: "Equilibrio dinámico", en: "Dynamic equilibrium", def: "Estado en que la reacción hacia delante y la de vuelta siguen ocurriendo a la misma velocidad, y las cantidades ya no cambian." },
    { es: "Constante de equilibrio", en: "Equilibrium constant (K)", def: "Cociente de las concentraciones de productos entre las de reactivos en el equilibrio; depende de la temperatura." },
    { es: "Cociente de reacción", en: "Reaction quotient (Q)", def: "La misma cuenta que K con las cantidades de un momento cualquiera; comparado con K dice hacia dónde avanza la reacción." },
    { es: "Conversión", en: "Conversion", def: "Fracción de un reactivo que se ha transformado, en tanto por ciento." },
    { es: "Esterificación", en: "Esterification", def: "Reacción de un ácido con un alcohol que forma un éster y agua; es reversible." },
    { es: "Principio de Le Châtelier", en: "Le Chatelier's principle", def: "Si se cambia algo a un equilibrio, este se desplaza en el sentido que contrarresta el cambio." },
    { es: "Separador Dean-Stark", en: "Dean-Stark trap", def: "Recipiente bajo el condensador que retiene el agua destilada y devuelve el disolvente al reactor." },
    { es: "Cinética", en: "Kinetics", def: "Estudio de la rapidez de una reacción; distinta de hasta dónde llega, que lo dice el equilibrio." },
    { es: "Producto de solubilidad", en: "Solubility product (Ksp)", def: "Constante de equilibrio de una sal poco soluble: el producto de las concentraciones de sus iones en la disolución saturada." },
    { es: "Efecto del ion común", en: "Common ion effect", def: "Bajada de la solubilidad de una sal cuando la disolución ya contiene uno de sus iones." },
    { es: "Coeficiente de reparto", en: "Partition coefficient (KD)", def: "Cociente de la concentración de una sustancia en la fase orgánica entre la de la fase acuosa, en equilibrio." },
    { es: "Equilibrio líquido-vapor", en: "Vapour-liquid equilibrium", def: "Estado en que las moléculas que se evaporan y las que se condensan se igualan; el vapor sale más rico en el componente más volátil." },
  ],
  quiz: [
    {
      kind: "number",
      q: "En una reacción ficticia A + B ⇌ C + D, la mezcla de equilibrio tiene [A] = 0,40 mol/L, [B] = 0,20 mol/L, [C] = 0,80 mol/L y [D] = 0,30 mol/L. ¿Cuánto vale K = [C]·[D] / ([A]·[B])?",
      answer: 3,
      tolerance: 0.01,
      unit: "",
      explain: "Arriba 0,80 × 0,30 = 0,24; abajo 0,40 × 0,20 = 0,08. K = 0,24 / 0,08 = 3.",
    },
    {
      kind: "number",
      q: "Una esterificación ácido + alcohol ⇌ éster + agua tiene K = 4. Partes de 1 mol de ácido y 1 mol de alcohol, sin éster ni agua. ¿Qué porcentaje del ácido se convierte en el equilibrio?",
      answer: 66.7,
      tolerance: 0.01,
      unit: "%",
      explain: "x² / (1 − x)² = 4, así que x / (1 − x) = 2 y x = 2/3 = 0,667 mol: se convierte un 66,7 % del ácido.",
    },
    {
      kind: "number",
      q: "La misma esterificación (K = 4), pero con 1 mol de ácido y 2 moles de alcohol. Sale la ecuación 3x² − 12x + 8 = 0. ¿Qué porcentaje del ácido se convierte en el equilibrio?",
      answer: 84.5,
      tolerance: 0.01,
      unit: "%",
      explain: "x = (12 − raíz de 48) / 6 = (12 − 6,928) / 6 = 0,845 mol; la otra solución (3,15) es imposible porque solo hay 1 mol de ácido. Conversión: 84,5 %.",
    },
    {
      kind: "number",
      q: "Una sal 1:1 ficticia MCl tiene Ksp = 1,0 × 10⁻¹⁰ (valor de ejemplo). ¿Cuál es su solubilidad en agua pura, en mol/L?",
      answer: 0.00001,
      tolerance: 0.01,
      unit: "mol/L",
      explain: "s × s = 1,0 × 10⁻¹⁰, así que s = raíz de 1,0 × 10⁻¹⁰ = 1,0 × 10⁻⁵ = 0,00001 mol/L.",
    },
    {
      kind: "number",
      q: "Un producto tiene KD = 9 entre acetato de etilo y agua (valor de ejemplo). Extraes 100 L de agua con 100 L de acetato de etilo en una sola vez. ¿Qué porcentaje del producto pasa al acetato de etilo?",
      answer: 90,
      tolerance: 0.01,
      unit: "%",
      explain: "Queda en el agua 100 / (100 + 9 × 100) = 0,10, un 10 %. Pasa al acetato de etilo el 90 %.",
    },
    {
      kind: "number",
      q: "Mismo producto (KD = 9) y mismos 100 L de agua, pero extraes dos veces con 50 L de acetato de etilo cada vez. ¿Qué porcentaje total pasa al acetato de etilo?",
      answer: 96.7,
      tolerance: 0.01,
      unit: "%",
      explain: "Cada vez queda 100 / (100 + 9 × 50) = 0,182. Tras dos: 0,182 × 0,182 = 0,033, un 3,3 %. Pasa un 96,7 %, más que el 90 % de una sola vez.",
    },
    {
      kind: "choice",
      q: "Una esterificación ya está en equilibrio en el reactor. Por un error de trasvase entra agua. ¿Qué pasa con el éster?",
      options: [
        "Parte del éster se rompe: Q supera a K y la reacción va hacia atrás",
        "Nada: una vez en equilibrio la reacción está parada del todo",
        "Se forma más éster, porque el agua diluye el ácido y lo activa",
        "Solo cambia la velocidad, pero el equilibrio no se mueve",
      ],
      answer: 0,
      explain: "El agua es un producto: al añadirla, Q crece por encima de K y la reacción retrocede hasta volver a K. Se anota y se avisa: no se corrige por tu cuenta.",
    },
    {
      kind: "choice",
      q: "En una reacción exotérmica reversible el IPC tarda en cumplir. Un compañero propone subir 15 °C la camisa «para acabar antes». ¿Qué le dices?",
      options: [
        "Que sí: más temperatura siempre da más producto al final",
        "Que no: acelera, pero mueve el equilibrio hacia los reactivos",
        "Que sí, siempre que se añada además más catalizador",
        "Que da igual, porque la temperatura no influye en el equilibrio",
      ],
      answer: 1,
      explain: "En una exotérmica, calentar baja K: llegas antes a un equilibrio peor, y además hay más riesgo. La temperatura la fija la hoja; si el IPC no cumple, se sigue lo que diga.",
    },
    {
      kind: "choice",
      q: "Durante un reflujo con Dean-Stark el agua recogida lleva dos horas sin aumentar, y aún no se ha llegado al volumen teórico. ¿Qué es lo correcto?",
      options: [
        "Añadir más catalizador por tu cuenta para que siga avanzando",
        "Vaciar el separador y echar el agua de nuevo al reactor",
        "Anotar los volúmenes, tomar el IPC si toca y avisar al responsable",
        "Dar la reacción por terminada sin IPC, porque ya no sale agua",
      ],
      answer: 2,
      explain: "Que no salga más agua indica que la reacción ya no avanza, pero si falta agua algo no cuadra (reactivo, temperatura, fuga). Se registra y decide quien corresponde según la hoja.",
    },
    {
      kind: "choice",
      q: "Al precipitar el clorhidrato de un producto, la hoja pide añadir un poco de disolución de cloruro de sodio al final. ¿Por qué?",
      options: [
        "Para que el catalizador recupere su actividad",
        "Para subir el pH y liberar la base libre",
        "Para que el producto se disuelva mejor y filtre más rápido",
        "Por el ion común: más cloruro deja menos clorhidrato disuelto",
      ],
      answer: 3,
      explain: "El cloruro es un ion que ya tiene la sal: al añadirlo, su solubilidad baja y precipita más producto, que no se pierde en las aguas madres.",
    },
  ],
};
