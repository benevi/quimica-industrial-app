import type { Lesson } from "./types";

export const diagramasDeFasesAFondo: Lesson = {
  slug: "diagramas-de-fases-a-fondo",
  level: 2,
  order: 11.3,
  title: "Diagramas de fases a fondo: cuándo algo es sólido, líquido o gas",
  titleEn: "Phase diagrams in depth",
  minutes: 40,
  summary:
    "El mapa presión-temperatura del agua y del CO₂ con su punto triple y su punto crítico, la regla de las fases, la sublimación y la liofilización, la ecuación de Antoine con las constantes del NIST, la ley de Raoult y los diagramas de dos líquidos, los azeótropos, el eutéctico y la pureza por punto de fusión, y la crioscopia, la ebulloscopia y la ósmosis con cuentas.",
  body: `
En «La materia a fondo: estados, cambios de estado y mezclas» viste que un líquido hierve cuando su presión de vapor iguala a la presión de encima, y en «Los gases a fondo» apareció la temperatura crítica. Aquí juntas todo en una sola herramienta, y verás la ecuación de Antoine, que volverá con el tolueno del R-204 en «Destilación a fondo»: el **diagrama de fases** (*phase diagram*), un mapa que dice en qué estado está una sustancia, o una mezcla, para cada presión y temperatura.

Los datos de sustancias son del NIST Chemistry WebBook, la base de datos del instituto de metrología de Estados Unidos. Lo marcado como «valor de ejemplo» es inventado.

### Fase, componente y el mapa
Una **fase** (*phase*) es una parte de la materia con el mismo aspecto y las mismas propiedades en todos sus puntos. Agua líquida con hielo flotando son dos fases. Agua con sal disuelta es una sola.

El libro de instrumentación de Tony Kuphaldt (*Lessons in Industrial Instrumentation*) lo explica así: en el diagrama de fases se pone la presión en un eje y la temperatura en el otro. Unas líneas curvas separan las zonas de sólido, líquido y vapor. Cada punto de una línea es una pareja de presión y temperatura en la que conviven las dos fases de cada lado: la línea líquido-vapor es la de **ebullición**, la de sólido-líquido es la de **fusión** y la de sólido-vapor es la de **sublimación** (*sublimation*).

### El diagrama del agua
| Punto | Temperatura | Presión | Fuente |
|---|---|---|---|
| **Punto triple** (*triple point*) | 0,01 °C | 0,0061 bar (6,1 mbar) | Kuphaldt; NIST |
| Ebullición normal | 100,0 °C | 1,013 bar | NIST |
| **Punto crítico** (*critical point*) | unos 374 °C (647 K) | 220,64 bar | NIST |

- **Punto triple**: donde se cruzan las tres líneas. Solo ahí conviven hielo, agua y vapor a la vez.
- **Punto crítico**: donde termina la línea líquido-vapor. Por encima de la **temperatura crítica** ninguna presión mantiene el agua líquida.
- **La línea de fusión** del agua está casi vertical y se inclina un poco hacia la izquierda: al apretar, el hielo funde a algo menos temperatura. Kuphaldt explica por qué: el agua es rara y **se dilata al congelarse**. La mayoría de las sustancias, como el CO₂, se contraen al solidificar y su línea se inclina hacia la derecha.

Si estás a 1 bar y calientas, recorres una línea horizontal: cruzas la fusión a 0 °C y la ebullición a 100 °C. Si estás a 50 °C y bajas la presión, recorres una línea vertical hacia abajo: cuando cruzas la curva de ebullición, el agua hierve. Eso es secar o destilar a vacío.

### La regla de las fases: cuántas cosas puedes cambiar
Kuphaldt da la **regla de las fases de Gibbs** (*Gibbs phase rule*):

> grados de libertad + fases = componentes + 2

Los **grados de libertad** (*degrees of freedom*) son cuántas variables (presión, temperatura) puedes cambiar sin que desaparezca una fase. Con una sola sustancia (un componente) suman 3:

| Situación | Fases | Grados de libertad | Qué significa |
|---|---|---|---|
| Agua líquida en un depósito | 1 | 2 | Puedes cambiar P y T por separado |
| Agua hirviendo | 2 | 1 | Si fijas P, la T queda fijada |
| Agua en el punto triple | 3 | 0 | P y T fijas mientras duren las tres fases |

Por eso en una caldera la presión del vapor dice su temperatura, y por eso un reactor a reflujo con un disolvente puro tiene la masa a la temperatura que marca la presión, por mucho que suba la camisa.

### El diagrama del CO₂, el hielo seco y el punto crítico
| Punto | Temperatura | Presión |
|---|---|---|
| Punto triple | −56,57 °C (216,58 K) | 5,185 bar |
| Punto crítico | 31,03 °C (304,18 K) | 73,80 bar |
| Sublimación a 1 atm | −78,5 °C | 1,013 bar |

Datos del NIST; la sublimación es de la ficha internacional de seguridad química ICSC 0021, y las constantes de Antoine del sólido que da el NIST llevan a −78,4 °C.

La diferencia con el agua: el punto triple del CO₂ está **por encima** de la presión atmosférica. A 1 atm el CO₂ nunca puede ser líquido: el sólido pasa directamente a gas. Es el **hielo seco** (*dry ice*), y Kuphaldt lo explica justo así: no se licúa al calentarlo, sublima.

La botella de CO₂ de «Los gases a fondo», a 20 °C, tiene líquido porque está por debajo de 31 °C. Por encima ya no habría líquido ni superficie: un solo fluido, el **fluido supercrítico** (*supercritical fluid*).

### Sublimación y liofilización
Si la presión está por debajo de la del punto triple (6,1 mbar en el agua), el mapa no tiene zona de líquido: el hielo que se calienta pasa a vapor sin fundir. Es la base de la **liofilización** (*freeze-drying, lyophilization*).

La guía de la FDA para inspeccionar la liofilización de inyectables (*Guide to Inspections of Lyophilization of Parenterals*, 1993) la define como quitar el agua de un producto congelado y puesto a vacío, de modo que el hielo pase de sólido a vapor sin pasar por líquido. Tiene tres etapas:

1. **Congelación** (*freezing*): el producto se congela por debajo de su punto eutéctico (lo verás más abajo).
2. **Secado primario** (*primary drying*): sublimación del hielo a vacío. La guía pide mantener la temperatura del producto al menos 4 o 5 grados por debajo del punto eutéctico.
3. **Secado secundario** (*secondary drying*): se quita, por **desorción** (*desorption*), el agua que queda pegada al sólido.

Si el producto se calienta de más en el secado primario, aparece el **colapso por fusión** (*meltback*): parte del hielo funde en vez de sublimar. La guía lo relaciona con humedad atrapada y con cambios en la forma física del principio activo. En una planta de API es rara; se usa en inyectables. La idea es la del mapa: por debajo del punto triple, secar es sublimar.

### La curva de presión de vapor y la ecuación de Antoine
La línea líquido-vapor del diagrama es la **curva de presión de vapor** (*vapour pressure curve*). El NIST la da con la ecuación de Antoine en esta forma, con P en bar y T en kelvin:

> log P = A − B / (T + C)

| Sustancia | A | B | C | Intervalo (K) |
|---|---|---|---|---|
| Tolueno | 4,07827 | 1343,943 | −53,773 | 308,52 a 384,66 |
| n-Heptano | 4,02832 | 1268,636 | −56,199 | 299,07 a 372,43 |
| Etanol | 5,37229 | 1670,409 | −40,191 | 273 a 351,70 |
| Agua | 5,20389 | 1733,926 | −39,485 | 304 a 333 |

«Destilación a fondo» usa para el tolueno la otra forma, con milímetros de mercurio y grados Celsius (A = 6,95464, B = 1344,8, C = 219,482). Las dos cuadran: pasar de bar a mmHg suma log 750,06 = 2,8751 a la A (sale 6,9534) y pasar de kelvin a °C suma 273,15 a la C (sale 219,377). Las dos dan 110,6 °C a la presión atmosférica normal y la misma presión de vapor en todos los puntos comprobados entre 20 y 110 °C.

**Ejercicio resuelto 1. Presión de vapor del tolueno a 70 °C.**

1. Kelvin: T = 70 + 273,15 = 343,15 K.
2. T + C = 343,15 − 53,773 = 289,377.
3. B / (T + C) = 1343,943 / 289,377 = 4,6443.
4. log P = 4,07827 − 4,6443 = −0,5660.
5. P = 10 elevado a −0,5660 = **0,2716 bar**, unos 272 mbar.

Es el dato de la planta de «Destilación a fondo»: con la masa a 70 °C, el tolueno no hierve hasta bajar de unos 272 mbar.

**Ejercicio resuelto 2. ¿A qué temperatura se seca etanol a 100 mbar?** Cada juego de constantes vale solo en su intervalo. Despejando, T = B / (A − log P) − C. Con P = 0,1 bar, log P = −1: T = 1670,409 / 6,37229 + 40,191 = 302,33 K, es decir, **29,2 °C**. A presión atmosférica el etanol hierve a 78,3 °C. Es la razón de «El secado a fondo»: en el tramo constante, la torta se queda cerca de esa temperatura aunque la camisa esté más caliente.

### Mezclas de dos líquidos: la ley de Raoult
En una mezcla de dos líquidos parecidos, cada uno «escapa» en proporción a lo que hay de él en el líquido. Es la **ley de Raoult** (*Raoult's law*):

> p de cada líquido = x × p°

x es su **fracción molar** en el líquido (moles de él entre moles totales) y p° su presión de vapor puro a esa temperatura. La presión total es la suma (la ley de Dalton de «Los gases a fondo»), y la composición del vapor es y = p / P total. Una mezcla que la cumple se llama **ideal** (*ideal solution*); las reales se apartan más o menos.

**Ejercicio resuelto 3. Heptano y tolueno a 95 °C**, mitad y mitad en moles, tratados como mezcla ideal (una aproximación). Con Antoine del NIST: p° del heptano = 915,3 mbar; p° del tolueno = 635,8 mbar.

| | Heptano | Tolueno | Total |
|---|---|---|---|
| En el líquido (x) | 0,50 | 0,50 | 1 |
| Presión parcial | 0,5 × 915,3 = 457,6 mbar | 0,5 × 635,8 = 317,9 mbar | **775,5 mbar** |
| En el vapor (y) | 457,6 / 775,5 = **0,59** | 0,41 | 1 |

El vapor sale **más rico en el más volátil**: de 50 % a 59 % de heptano. Si condensas ese vapor y lo vuelves a hervir a 95 °C, el nuevo vapor lleva un 67 %. Cada paso de hervir y condensar enriquece un poco: eso hacen los platos de una columna; el cuello corto de un reactor separa poco. La relación 915,3 / 635,8 = 1,44 es la **volatilidad relativa** (*relative volatility*): cuanto más cerca de 1, más difícil separar.

Si se dibuja a presión fija la temperatura frente a la composición, salen dos curvas que forman una «lente»: la **curva de burbuja** (*bubble point curve*), donde el líquido empieza a hervir, y debajo de ella está todo líquido; y la **curva de rocío** (*dew point curve*), donde el vapor empieza a condensar, y encima de ella está todo vapor. Entre las dos conviven líquido y vapor de composiciones distintas.

**Un soluto que no se evapora.** Si lo que se disuelve es un sólido, como el producto, solo el disolvente aporta presión de vapor, y su x es menor que 1: la presión de vapor baja y hay que calentar algo más para hervir. Por eso, en el simulador del R-204, la masa a reflujo queda en unos 115 °C y no en los 112,3 °C del tolueno puro a esa presión.

### Azeótropos: cuando la destilación se atasca
Cuando las moléculas de los dos líquidos se atraen mucho menos o mucho más que entre iguales, la mezcla se aparta tanto de Raoult que la lente se deforma y las dos curvas se tocan en un punto. Ahí el vapor tiene **la misma composición que el líquido**: es un **azeótropo** (*azeotrope*). Destilando nunca se pasa de él.

- **De mínimo punto de ebullición**: la mezcla hierve por debajo de los dos puros. Es el caso de etanol y agua citado en «Destilación y concentración».
- **De máximo punto de ebullición**: hierve por encima de los dos.
- **Heterogéneo**: dos líquidos que casi no se mezclan, como tolueno y agua, hierven juntos por debajo de los dos. La cuenta de «Destilación a fondo» da 84,4 °C a 1013 mbar y es la base del secado azeotrópico.

En planta se nota porque la temperatura de vapor se queda quieta y la cromatografía de gases da siempre la misma proporción por mucho que destiles. Los datos medidos de azeótropos homogéneos no los hemos podido leer en una fuente gratuita, así que aquí no damos cifras: el procedimiento ya los tiene en cuenta.

### Sólido y líquido: el diagrama eutéctico
Mezcla dos sólidos que fundidos se disuelven entre sí pero que cristalizan por separado: el producto A y una impureza B. El diagrama temperatura-composición tiene forma de V:

- A la izquierda, la línea que baja desde el punto de fusión de A puro: por encima, todo líquido; por debajo, cristales de A en líquido.
- A la derecha, lo mismo desde el punto de fusión de B.
- Las dos líneas se cruzan en el **punto eutéctico** (*eutectic point*), la temperatura más baja a la que todavía hay líquido. Por debajo, todo es sólido. La guía de la FDA lo define como el punto del diagrama donde están presentes todas las fases y ni la temperatura ni la composición del líquido pueden cambiar sin que desaparezca una.

**Ejercicio resuelto 4** (valores de ejemplo). El producto A funde a 150 °C con un calor de fusión de 30 kJ/mol y la impureza B a 120 °C con 25 kJ/mol. Con la ecuación de una mezcla ideal, el eutéctico sale a **100,8 °C**, con un 32,5 % en moles de A. Y el producto con solo un 1 % en moles de B termina de fundir a 149,5 °C: medio grado menos, y empieza a fundir mucho antes, en el eutéctico.

Esa es la explicación con mapa de lo que el laboratorio mide en «Punto de fusión y análisis térmico a fondo»: la impureza hace que el inicio baje mucho, el final baje poco y el intervalo se ensanche.

**La cuenta de pureza.** Para poca impureza, el descenso del final de la fusión es aproximadamente:

> ΔT = R × T² × x / ΔH fusión

con T el punto de fusión del puro en kelvin, x la fracción molar de impureza y R = 8,314 J/(mol·K).

**Ejercicio resuelto 5. Ácido benzoico**, que el NIST da como patrón de calibración: punto triple 395,52 K y calor de fusión 18,006 kJ/mol. Con un 1 % en moles de impureza:

> ΔT = 8,314 × 395,52² × 0,01 / 18006 = **0,72 K**

Cada décima de grado cuenta.

### Propiedades coligativas: contar partículas
Las **propiedades coligativas** (*colligative properties*) dependen de **cuántas** partículas de soluto hay, no de cuáles. Son cuatro: la bajada de la presión de vapor (Raoult), la subida del punto de ebullición, la bajada del punto de congelación y la presión osmótica. Se cuentan con la **molalidad** (*molality*, m): moles de soluto por kilo de disolvente. Una sal como el cloruro de sodio se separa en dos iones y cuenta doble: es el **factor de van't Hoff** (*van't Hoff factor*), i = 2. Las fórmulas valen para disoluciones diluidas.

**Crioscopia** (*cryoscopy*): ΔT congelación = i × Kf × m.
**Ebulloscopia** (*ebullioscopy*): ΔT ebullición = i × Kb × m.

Kf y Kb son las **constantes crioscópica y ebulloscópica** del disolvente. Salen de su calor latente: K = R × T² / L, con L en J/kg. Con los calores latentes del agua de Kuphaldt (79,7 cal/g de fusión y 539,1 cal/g de vaporización, con 1 cal = 4,184 J):

- Kf = 8,314 × 273,15² / 333465 = **1,86 K·kg/mol**
- Kb = 8,314 × 373,15² / 2255594 = **0,513 K·kg/mol**

**Ejercicio resuelto 6. Sal en agua.** 29,22 g de cloruro de sodio (0,50 mol, con 58,44 g/mol) en 1 kg de agua: m = 0,50 y i = 2. Congela 2 × 1,86 × 0,50 = **1,86 °C** más abajo y hierve 2 × 0,513 × 0,50 = **0,51 °C** más arriba. 

**Ejercicio resuelto 7. Masa molar por crioscopia.** Se disuelven 5,00 g de una sustancia ficticia que no se disocia en 100 g de agua y la congelación baja 0,62 °C. m = 0,62 / 1,86 = 0,333 mol/kg; en 0,100 kg hay 0,0333 mol; M = 5,00 / 0,0333 = **150 g/mol**.

### Ósmosis y presión osmótica
Separa agua pura y agua salada con una membrana que deja pasar el agua pero no la sal: el agua pasa hacia el lado salado. Es la **ósmosis** (*osmosis*). La presión que habría que aplicar al lado salado para frenarla es la **presión osmótica** (*osmotic pressure*, π):

> π = i × c × R × T

con c en mol/L, R = 0,083145 L·bar/(mol·K) y T en kelvin.

**Ejercicio resuelto 8. Suero al 0,9 %** (9 g/L de cloruro de sodio) a 37 °C: c = 9 / 58,44 = 0,154 mol/L; π = 2 × 0,154 × 0,083145 × 310,15 = **7,9 bar**, en la cuenta ideal.

**Ejercicio resuelto 9. La ósmosis inversa del agua de planta.** Un agua de alimentación con 1000 mg/L de sal, a 25 °C: π = 2 × (1 / 58,44) × 0,083145 × 298,15 = **0,85 bar**. La bomba de la ósmosis inversa de «Agua farmacéutica a fondo» tiene que empujar por encima de eso para que el agua vaya al revés, del lado salado al limpio, y el rechazo, más concentrado, pide cada vez más.

### Qué te llevas al turno
| Lo que ves | El mapa que hay detrás |
|---|---|
| Masa a reflujo que no sube aunque suba la camisa | Dos fases, un grado de libertad: P fija la T |
| Secadero con el producto frío durante horas | Curva de presión de vapor del disolvente a esa presión |
| Destilado que no mejora por más que destiles | Azeótropo |
| Punto de fusión bajo y ancho | Eutéctico e impurezas |
| Salmuera que no congela a 0 °C | Crioscopia |
| Bomba de ósmosis inversa a varios bar | Presión osmótica |

Estas cuentas sirven para entender lo que ves, no para cambiar consignas. En planta manda siempre el procedimiento vigente (SOP) y la hoja de producción de tu lote.
`,
  plant: `
Turno de noche en la planta ficticia. En el reactor R-207 hay que concentrar una disolución del intermedio ficticio TQ-58 en tolueno y después cambiar a heptano. La hoja dice: *«Concentrar a 300 mbar abs con la masa ≤ 75 °C. Añadir heptano y destilar a 300 mbar hasta temperatura de vapor ≤ 63 °C. IPC: tolueno por cromatografía de gases ≤ 5 %.»* (Valores de ejemplo.)

Antes de empezar haces la cuenta con Antoine: a 300 mbar el tolueno puro hierve a unos 72,7 °C. Bajas el vacío por escalones y la masa empieza a hervir a unos 74 °C: algo más arriba que el tolueno puro, porque el TQ-58 disuelto baja la presión de vapor del disolvente. Cuadra.

Al añadir heptano, la temperatura de vapor baja: el heptano es más volátil y a 300 mbar hierve a unos 61,8 °C. Con la cuenta de Raoult, una mezcla con un 20 % en moles de tolueno herviría a unos 63,7 °C y con un 5 %, a unos 62,2 °C. Ves en el historiador cómo la temperatura de vapor baja despacio mientras se va el tolueno. Al llegar a 62,8 °C pides la muestra: el laboratorio da un 3,8 % de tolueno. Cumple.

Al final del lote, el laboratorio llama por el producto seco del lote anterior: funde de 146 a 149 °C cuando la especificación pide un intervalo de 148 a 150 °C. Recuerdas el diagrama eutéctico: el inicio bajo y el intervalo ancho apuntan a algo más en el sólido, impureza o disolvente. No tocas nada: lo anotas, avisas al jefe de turno y das tus datos del secado.
`,
  batchRecord: `
- **Presión absoluta** (mbar abs) en cada escalón de vacío y durante la destilación o el secado: el valor real leído.
- **Temperatura de masa y temperatura de vapor** a los intervalos de la hoja; la temperatura de vapor dice qué está destilando.
- **Temperatura a la que empieza a hervir** a cada presión, si la hoja la pide: comparada con la esperada, avisa de fugas o de una composición distinta.
- **Volúmenes** de disolvente añadido y de destilado en los cambios de disolvente.
- **IPC** de composición (cromatografía de gases, Karl Fischer) con hora, resultado y límite.
- **Punto o intervalo de fusión** del producto en el certificado: inicio y final.
- En la ósmosis inversa del agua (si la llevas): presión de alimentación, de permeado y de rechazo, y conductividad.
- Cualquier valor fuera de lo esperado se anota en el momento, con hora y aviso.
`,
  terms: [
    { es: "Diagrama de fases", en: "Phase diagram", def: "Mapa de presión frente a temperatura (o temperatura frente a composición) que dice qué fases hay en cada condición." },
    { es: "Fase", en: "Phase", def: "Parte de la materia con el mismo aspecto y propiedades en todos sus puntos, como el hielo o el agua líquida." },
    { es: "Punto triple", en: "Triple point", def: "Única presión y temperatura en que conviven sólido, líquido y vapor. En el agua, 0,01 °C y 6,1 mbar." },
    { es: "Punto crítico", en: "Critical point", def: "Final de la curva líquido-vapor. Por encima de su temperatura ninguna presión mantiene el líquido." },
    { es: "Regla de las fases", en: "Gibbs phase rule", def: "Grados de libertad más fases igual a componentes más dos. Con una sustancia hirviendo, fijar la presión fija la temperatura." },
    { es: "Liofilización", en: "Freeze-drying / lyophilization", def: "Secado de un producto congelado a vacío, en el que el hielo pasa a vapor sin fundir." },
    { es: "Ley de Raoult", en: "Raoult's law", def: "En una mezcla ideal, la presión parcial de cada líquido es su fracción molar por su presión de vapor puro." },
    { es: "Volatilidad relativa", en: "Relative volatility", def: "Cociente entre las presiones de vapor de dos líquidos; cuanto más cerca de 1, más difícil separarlos destilando." },
    { es: "Curva de burbuja", en: "Bubble point curve", def: "Temperaturas a las que una mezcla líquida empieza a hervir, según su composición." },
    { es: "Azeótropo", en: "Azeotrope", def: "Mezcla cuyo vapor tiene la misma composición que el líquido; destilando no se puede pasar de ella." },
    { es: "Punto eutéctico", en: "Eutectic point", def: "Temperatura y composición más bajas a las que todavía hay líquido en una mezcla de dos sólidos." },
    { es: "Propiedad coligativa", en: "Colligative property", def: "La que depende del número de partículas disueltas y no de su clase: presión de vapor, ebullición, congelación y presión osmótica." },
    { es: "Constante crioscópica", en: "Cryoscopic constant (Kf)", def: "Grados que baja la congelación por cada mol de partículas por kilo de disolvente; 1,86 K·kg/mol en el agua." },
    { es: "Presión osmótica", en: "Osmotic pressure", def: "Presión que frena el paso de disolvente a través de una membrana hacia la disolución: π = i × c × R × T." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Con la ecuación de Antoine del NIST para el tolueno, log P = 4,07827 − 1343,943 / (T − 53,773), con P en bar y T en kelvin, ¿cuál es su presión de vapor a 70 °C (343,15 K), en mbar?",
      answer: 271.6,
      tolerance: 0.01,
      unit: "mbar",
      explain: "T − 53,773 = 289,377; 1343,943 / 289,377 = 4,6443; log P = 4,07827 − 4,6443 = −0,5660; P = 0,2716 bar, es decir, 271,6 mbar.",
    },
    {
      kind: "number",
      q: "A 95 °C, el heptano puro tiene una presión de vapor de 915 mbar y el tolueno de 636 mbar. En una mezcla ideal con un 40 % en moles de heptano y un 60 % de tolueno, ¿cuál es la presión total de vapor, según Raoult?",
      answer: 747.6,
      tolerance: 0.01,
      unit: "mbar",
      explain: "Heptano: 0,40 × 915 = 366 mbar. Tolueno: 0,60 × 636 = 381,6 mbar. Total: 366 + 381,6 = 747,6 mbar. El vapor lleva 366 / 747,6, un 49 % de heptano, más que el 40 % del líquido.",
    },
    {
      kind: "number",
      q: "Se disuelven 18,0 g de glucosa (180 g/mol, no se disocia) en 500 g de agua. Con Kf = 1,86 K·kg/mol, ¿cuántos grados baja el punto de congelación?",
      answer: 0.372,
      tolerance: 0.01,
      unit: "°C",
      explain: "Moles: 18,0 / 180 = 0,100 mol. Molalidad: 0,100 / 0,500 = 0,200 mol/kg. ΔT = 1 × 1,86 × 0,200 = 0,372 °C.",
    },
    {
      kind: "number",
      q: "Se disuelven 3,00 g de una sustancia que no se disocia en 50,0 g de agua y la congelación baja 0,744 °C. Con Kf = 1,86 K·kg/mol, ¿cuál es su masa molar?",
      answer: 150,
      tolerance: 0.01,
      unit: "g/mol",
      explain: "Molalidad: 0,744 / 1,86 = 0,400 mol/kg. En 0,0500 kg hay 0,400 × 0,0500 = 0,0200 mol. M = 3,00 / 0,0200 = 150 g/mol.",
    },
    {
      kind: "number",
      q: "Un agua de alimentación de una ósmosis inversa lleva 2000 mg/L de cloruro de sodio (58,44 g/mol, i = 2) a 25 °C (298,15 K). Con π = i × c × R × T y R = 0,083145 L·bar/(mol·K), ¿qué presión osmótica tiene, en bar?",
      answer: 1.7,
      tolerance: 0.02,
      unit: "bar",
      explain: "c = 2 / 58,44 = 0,0342 mol/L. π = 2 × 0,0342 × 0,083145 × 298,15 = 1,697 bar, unos 1,7 bar. La bomba tiene que empujar por encima de eso.",
    },
    {
      kind: "number",
      q: "El ácido benzoico funde a 395,52 K con un calor de fusión de 18006 J/mol. Con ΔT = R × T² × x / ΔH y R = 8,314 J/(mol·K), ¿cuántos kelvin baja el final de su fusión con un 0,5 % en moles de impureza (x = 0,005)?",
      answer: 0.36,
      tolerance: 0.03,
      unit: "K",
      explain: "ΔT = 8,314 × 395,52² × 0,005 / 18006 = 0,361 K, unos 0,36 K: la mitad que con un 1 % de impureza.",
    },
    {
      kind: "choice",
      q: "Un reactor con tolueno puro está a reflujo con el control de presión fijo. Un compañero sube la camisa diez grados para que la masa se caliente más. ¿Qué pasará con la temperatura de masa?",
      options: [
        "Subirá diez grados, porque la camisa está más caliente",
        "Se quedará igual: con dos fases y presión fija, la T está fijada",
        "Bajará, porque el vapor se lleva más calor latente",
        "Oscilará hasta que el agitador reparta el calor",
      ],
      answer: 1,
      explain: "Con un componente y dos fases solo hay un grado de libertad. Si la presión no cambia, la temperatura de ebullición tampoco: sale más vapor, pero la masa no se calienta más.",
    },
    {
      kind: "choice",
      q: "En el almacén se usa hielo seco para enviar muestras frías. ¿Por qué no deja charcos al calentarse a presión atmosférica?",
      options: [
        "Porque el CO₂ líquido se evapora en cuanto toca el aire de la sala",
        "Porque el hielo seco se disuelve en el aire húmedo del almacén",
        "Porque su punto crítico, 31 °C, está por encima de la temperatura ambiente",
        "Porque el punto triple del CO₂ está a 5,185 bar, por encima de 1 atm",
      ],
      answer: 3,
      explain: "Por debajo de la presión del punto triple no existe el líquido: a 1 atm el CO₂ sólido sublima directamente a gas, a unos −78,5 °C.",
    },
    {
      kind: "choice",
      q: "Durante el secado primario de un liofilizador ves que la temperatura de producto sube por encima del punto eutéctico indicado en la hoja. ¿Qué es lo correcto?",
      options: [
        "Anotarlo con hora y valores y avisar: puede haber colapso por fusión",
        "Subir el vacío al máximo para recuperar la temperatura sin decir nada",
        "Seguir: en el secado primario el producto debe fundir para secar",
        "Abrir la cámara para comprobar a simple vista si el producto está bien",
      ],
      answer: 0,
      explain: "La guía de la FDA pide mantener el producto al menos 4 o 5 grados por debajo del eutéctico. Por encima, parte del hielo funde en vez de sublimar (meltback). Se registra y decide quien corresponde.",
    },
    {
      kind: "choice",
      q: "En un cambio de disolvente, la temperatura de vapor lleva una hora quieta y la cromatografía de gases del destilado da siempre la misma proporción de los dos disolventes. ¿Qué es lo más probable?",
      options: [
        "Que el condensador se haya quedado sin agua de refrigeración",
        "Que la sonda de temperatura de vapor esté congelada",
        "Que la mezcla esté destilando como azeótropo y no se separe más así",
        "Que el producto se haya descompuesto y desprenda un gas",
      ],
      answer: 2,
      explain: "Un azeótropo hierve a temperatura fija y da un vapor con la misma composición que el líquido: destilando no se pasa de él. Se sigue lo que diga la hoja y se avisa.",
    },
  ],
};
