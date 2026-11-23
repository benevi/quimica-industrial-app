import type { Lesson } from "./types";

export const cineticaAFondo: Lesson = {
  slug: "cinetica-a-fondo",
  level: 2,
  order: 9,
  title: "Velocidad de reacción a fondo: por qué unas reacciones tardan horas y otras segundos",
  titleEn: "Reaction kinetics in depth: why some reactions take hours and others seconds",
  minutes: 38,
  summary:
    "Qué es la velocidad de reacción y la conversión, por qué las moléculas tienen que chocar con energía y orientación, cómo influyen la concentración, la temperatura, la superficie, la agitación y los catalizadores, la regla de los 10 °C comprobada con Arrhenius, la vida media, el tiempo de reacción y el IPC de la hoja, la acumulación al dosificar y por qué pasarse de tiempo o de temperatura forma impurezas.",
  body: `
En «Velocidad de reacción y catalizadores» viste la lista de lo que acelera una reacción y que el final se decide con un control en proceso. Aquí vas a entender **por qué** pasa cada cosa, a hacer las cuentas y a leer con otros ojos las líneas de la hoja que hablan de tiempos, temperaturas y muestras.

### Qué es la velocidad de reacción
Piensa en una cola de gente que entra en un estadio. La velocidad es **cuántas personas pasan por los tornos cada minuto**. En una reacción es igual: la **velocidad de reacción** (*reaction rate*) es cuánto reactivo desaparece, o cuánto producto aparece, **por unidad de tiempo**.

Se expresa en concentración que cambia por tiempo, mol/(L·s) o mol/(L·h); en masa por tiempo, kg/h; o como porcentaje de conversión por hora. Un **mol** (*mole*) es un paquete fijo de moléculas, como una docena pero enorme; lo viste en «El mol: contar moléculas pesando». La concentración en mol/L dice cuántos paquetes hay en cada litro.

### Un seguimiento de reacción con muestras
**Valores de ejemplo, inventados para la lección.** En un reactor se carga un material de partida A a 0,80 mol/L y se calienta a la temperatura de reacción. Cada hora se toma una muestra y el laboratorio dice cuánto A queda, en porcentaje de lo que había al principio.

| Tiempo (h) | A que queda (%) | Conversión (%) | A (mol/L) |
|---|---|---|---|
| 0 | 100 | 0 | 0,80 |
| 1 | 50 | 50 | 0,40 |
| 2 | 25 | 75 | 0,20 |
| 3 | 12,5 | 87,5 | 0,10 |
| 4 | 6,25 | 93,75 | 0,05 |
| 5 | 3,1 | 96,9 | 0,025 |

En la primera hora desaparecen 0,40 mol/L: la velocidad media es **0,40 mol/(L·h)**. Entre la hora 4 y la 5 solo desaparecen 0,025 mol/L: **0,025 mol/(L·h)**, dieciséis veces menos. La reacción **se frena sola** según se gasta el reactivo, igual que la cola del estadio avanza más despacio cuando quedan pocos por entrar.

### La conversión y cómo se calcula
La **conversión** (*conversion*) es qué parte del reactivo inicial ya ha reaccionado:

> Conversión (%) = (cantidad inicial − cantidad que queda) / cantidad inicial × 100

La cantidad puede ir en kilos, en moles o en concentración, siempre que sea la del mismo reactivo y en las mismas unidades arriba y abajo.

**Cuenta 1 (valores de ejemplo).** Se cargan 250 kg de material de partida y, según el análisis, quedan 10 kg sin reaccionar: (250 − 10) / 250 × 100 = **96 %**.

**Cuenta 2 (valores de ejemplo).** La concentración baja de 0,80 a 0,12 mol/L: (0,80 − 0,12) / 0,80 × 100 = **85 %**.

La hoja no suele dar la conversión, sino el resultado del método del laboratorio, por ejemplo «material de partida ≤ 1,0 %». La conversión es la idea que hay detrás.

### La teoría de choques, desde cero
Las moléculas de un líquido no están quietas: se mueven, giran y chocan sin parar. La **teoría de choques** (*collision theory*) dice que, para que dos moléculas reaccionen, tienen que cumplirse tres cosas a la vez:

1. **Chocar.** Si no se encuentran, no hay reacción.
2. **Con energía suficiente.** La mayoría de los choques son flojos y las moléculas rebotan sin cambiar. Solo reaccionan si el choque supera un mínimo de energía: la **energía de activación** (*activation energy*, Ea), que se mide en kJ/mol.
3. **Con la orientación adecuada.** Las moléculas tienen partes que reaccionan y partes que no. Es como meter una llave: aunque empujes fuerte, si va al revés no entra.

La analogía de la **colina**: imagina que tienes que llevar una carretilla de un valle a otro más bajo. Al final bajas, pero antes hay que subir una loma. La altura de esa loma es la energía de activación. Si es baja, casi cualquier empujón basta y la reacción es rápida, aunque sea a temperatura ambiente. Si es alta, solo pasan unas pocas moléculas cada segundo y la reacción tarda horas. Esa es la respuesta a la pregunta del título: **unas reacciones tardan segundos y otras horas porque su colina tiene distinta altura**.

Que el valle de llegada esté más bajo significa que la reacción desprende calor: eso es termoquímica, en la lección «Calor de reacción a fondo». La velocidad depende de la loma.

### Los factores, uno a uno
**Concentración.** Más moléculas por litro, más choques por segundo. **Diluir frena**: si añades disolvente, las moléculas se encuentran menos.

**Temperatura.** Al calentar, las moléculas se mueven más deprisa y, sobre todo, **muchas más superan la colina**. Lo verás en números en el apartado siguiente.

**Superficie de contacto.** Cuando un reactivo es un sólido, solo reacciona por fuera. Un cubo de 1 cm de lado tiene 6 cm² de superficie. Pártelo en cubitos de 1 mm: salen 1000 cubitos con 60 cm² entre todos. **Diez veces más superficie** con la misma masa. Por eso un sólido en polvo fino reacciona o se disuelve mucho antes que en terrones.

Lo mismo pasa con **dos líquidos que no se mezclan**, por ejemplo una fase acuosa con sosa y una fase de tolueno. Las moléculas de una fase solo se encuentran con las de la otra en la **interfase** (*interface*), la frontera entre las dos. Si no se agita, hay una sola frontera plana y la reacción es lentísima. Si se agita fuerte, una fase se rompe en gotitas dentro de la otra y la frontera se multiplica, como con los cubitos.

**Agitación.** Por eso la agitación no es un detalle. Según la NTP 528 del INSST, los rompecorrientes aumentan la turbulencia, y esta afecta tanto a la transferencia de calor como a la velocidad de la reacción. En una reacción entre dos fases, **cambiar la velocidad del agitador cambia la velocidad de reacción**; por eso las rpm están en la hoja y no se tocan.

**Catalizador.** Abre un camino distinto con una colina más baja. Lo verás a fondo más abajo.

### La temperatura en números: Arrhenius y la regla de los 10 °C
La **ecuación de Arrhenius** (*Arrhenius equation*) se escribe así:

> k = A × e^(−Ea / (R × T))

(e es un número fijo, 2,718…, que sale en todo lo que crece o decrece en proporción a lo que hay; en la calculadora es la tecla eˣ. Lo viste en «Logaritmos y exponenciales: las cuentas del pH, la presión de vapor y la velocidad».)

Dicha en palabras: la **constante de velocidad** k (*rate constant*), que mide lo rápida que es la reacción, es igual a un número propio de cada reacción (A, que tiene que ver con cuántos choques hay y con qué orientación) multiplicado por la **fracción de choques que superan la colina**. Esa fracción es la parte e^(−Ea/(R×T)): crece mucho con la temperatura y es más pequeña cuanto más alta es la colina. R es la constante de los gases, 8,314 J/(mol·K), y T es la temperatura absoluta en kelvin, que es la temperatura Celsius más 273,15 (así lo define el Real Decreto 2032/2009 de unidades legales de medida).

Al pasar de 20 a 30 °C, la velocidad media de las moléculas solo sube un 1,7 %; lo que se multiplica es la fracción que supera la colina.

La **regla práctica**: *por cada 10 °C, la velocidad se multiplica por unos 2 o 3*. Es una **aproximación de libro de texto**, no una ley. Depende de la energía de activación y del rango de temperatura. Compruébalo con Arrhenius (cálculo hecho para la lección):

| Energía de activación (ejemplo) | De 20 a 30 °C | De 60 a 70 °C |
|---|---|---|
| 50 kJ/mol | × 1,97 | × 1,69 |
| 75 kJ/mol | × 2,76 | × 2,20 |
| 100 kJ/mol | × 3,87 | × 2,86 |

Entre 20 y 30 °C, el factor 2 corresponde a unos 51 kJ/mol y el factor 3 a unos 81 kJ/mol. Con colinas más altas el efecto es mayor, y a temperaturas más altas, cada salto de 10 °C pesa algo menos.

**Cuenta 1: calentar 20 °C más.** Con la regla, dos saltos de 10 °C: entre 2 × 2 = **4** y 3 × 3 = **9 veces** más rápida. Con Arrhenius y Ea = 75 kJ/mol, de 20 a 40 °C sale × 7,14, dentro de ese margen.

**Cuenta 2: enfriar.** Una etapa que a 60 °C termina en 2 h se hace a 40 °C por error. Con la regla, va entre 4 y 9 veces más lenta: necesitaría **entre 8 y 18 h**. Con Ea = 75 kJ/mol, el factor es 5,64 y saldrían unas 11,3 h. Enfriar de más no pone a salvo la reacción: la deja a medias.

**Cuenta 3: por qué una subida pequeña se realimenta.** La masa sube de 60 a 65 °C sin querer. Medio salto de 10 °C con la regla es multiplicar por la raíz de 2 o de 3: entre **1,41 y 1,73**. Con Ea = 75 kJ/mol sale 1,49. Es decir, la reacción va casi un 50 % más rápida y **desprende casi un 50 % más de calor por segundo**. Si la camisa no lo retira, la masa sube otros grados, la reacción se acelera otra vez, y así sucesivamente. La NTP 527 lo explica así: el calor que genera la reacción crece exponencialmente con la temperatura, y el que se retira crece solo de forma lineal. Ese crecimiento exponencial es justo el término de Arrhenius. Cuánto puede llegar a subir lo tienes en la lección «Calor de reacción a fondo» y en «Calor de reacción y reacciones descontroladas».

### Orden de reacción: la idea práctica
La pregunta útil es: **si duplico la concentración de un reactivo, ¿qué le pasa a la velocidad?**

| Orden respecto a ese reactivo | Al duplicar su concentración, la velocidad... |
|---|---|
| Cero (*zero order*) | No cambia |
| Uno (*first order*) | Se duplica |
| Dos (*second order*) | Se multiplica por 4 |

La NTP 527 define la reacción de orden cero como aquella cuya velocidad es independiente de la concentración de los reactivos. El orden **no se deduce de la ecuación química escrita**: se mide en el laboratorio.

### La vida media
En una reacción de **primer orden**, el tiempo que tarda en gastarse la mitad del reactivo es siempre el mismo, haya mucho o poco. Ese tiempo es la **vida media** (*half-life*, t½). Mira otra vez la tabla del seguimiento: cada hora queda la mitad que la hora anterior. Era una reacción de primer orden con una vida media de 1 h.

**Cuenta 1.** Vida media de 1,5 h (valor de ejemplo). ¿Cuánto queda a las 4,5 h? Son 4,5 / 1,5 = 3 vidas medias: ½ × ½ × ½ = **1/8**, el **12,5 %**.

**Cuenta 2.** Con vida media de 1 h, ¿cuánto hace falta para que quede menos del 1 %? Tras 6 vidas medias queda el 1,56 %; tras 7, el **0,78 %**. Hacen falta unas **7 h**.

La vida media constante solo vale para el primer orden. En las demás cambia según avanza.

### El tiempo de reacción en la hoja de producción
Ahora puedes leer tres tipos de instrucciones con otros ojos:

**«Mantener a 60 ± 2 °C un mínimo de 3 h».** La reacción necesita ese tiempo para llegar a su conversión a esa temperatura: tiempo y temperatura van juntos.

**«IPC a las 3 h: material de partida ≤ 1,0 %».** El **control en proceso** (*in-process control, IPC*) comprueba que la reacción ha llegado antes de seguir. La guía ICH Q7 (apartados 8.30 a 8.33) pide procedimientos escritos para vigilar el avance de las etapas, con controles y criterios de aceptación definidos a partir del desarrollo o de datos históricos, y que todos los resultados queden documentados en la hoja del lote. Además, el apartado 8.20 dice que cuando hay límites de tiempo en la instrucción maestra hay que cumplirlos, pero que pueden no ser apropiados cuando se trabaja hasta un valor objetivo, por ejemplo una hidrogenación, porque el final de la reacción lo decide el muestreo en proceso.

**«La conversión no ha llegado».** Significa que queda más reactivo del permitido. Puede deberse a una temperatura algo más baja, un reactivo distinto, poca agitación o un catalizador menos activo. Seguir así arrastraría reactivo sin gastar a la etapa siguiente.

Lo que hace el operador:

- No alarga ni acorta el tiempo por su cuenta, ni sube la temperatura «para acabar antes».
- Sigue exactamente lo que prevé la hoja para ese caso (por ejemplo, mantener 1 h y repetir) y lo que diga el laboratorio.
- Si la hoja no prevé el caso, para, avisa y espera instrucciones. Todo se anota en el momento.

### Dosificar frente a cargar de golpe
Cuando un reactivo se **dosifica** (*dosing*) poco a poco en una reacción rápida, cada gota reacciona casi según entra. La velocidad de reacción la marca la bomba: si paras la bomba, paras la reacción y el calor. A esto se le llama **control por dosificación** (*dose-controlled reaction*).

Si la reacción es lenta, porque la masa está fría o el catalizador no actúa, el reactivo entra pero **no reacciona**: se **acumula** (*accumulation*). La NTP 528 avisa de que un refrigerante demasiado frío durante la adición baja la velocidad de la reacción y lleva a la acumulación, con el consiguiente descontrol térmico; y que la temperatura de inicio debe ser lo bastante baja para no descomponer nada, pero lo bastante alta para que la reacción vaya rápida sin acumular.

**Cómo se nota en planta:** en una reacción exotérmica que debería calentar al dosificar, **la temperatura de masa no sube** o la camisa no tiene que enfriar. Esa calma es una señal de alarma: el calor está guardado en el reactivo sin reaccionar y, si la reacción arranca de golpe, sale todo junto. Qué hace la hoja en ese caso y por qué se para la dosificación lo tienes en «El reactor a fondo»; la NTP 527 lo trata en sus apartados de temperatura y adiciones.

### Catalizadores a fondo
Un **catalizador** (*catalyst*) abre un camino con una **colina más baja**. Tres reglas:

1. **Rebaja la energía de activación.** Con Arrhenius, y suponiendo el mismo factor A, bajar la colina de 100 a 80 kJ/mol a 60 °C multiplica la velocidad por unas 1370 veces (cálculo de ejemplo).
2. **No se consume.** Sale igual que entró; por eso basta poca cantidad y a veces se recupera.
3. **No cambia el equilibrio.** Llega antes al mismo final; no saca más producto del que permite el equilibrio (lo verás en «Equilibrio químico»).

Hay dos tipos:

| Tipo | Qué es | Ejemplo | Cómo se separa |
|---|---|---|---|
| **Homogéneo** (*homogeneous*) | Disuelto en la misma fase que los reactivos | Un ácido en pequeña cantidad | Con lavados, extracción o cristalización |
| **Heterogéneo** (*heterogeneous*) | Un sólido en el líquido | Paladio sobre carbón (Pd/C) | Por filtración |

En el **paladio sobre carbón**, el metal está repartido en granitos finísimos sobre carbón en polvo, para que haya mucha superficie: lo que ya sabes de los cubitos. Al acabar se retira **filtrando**, y el metal que quede en el producto se controla como impureza elemental (lo verás en «Impurezas en el API»).

El **envenenamiento del catalizador** (*catalyst poisoning*): algunas sustancias se pegan a la superficie activa y la tapan; un ejemplo clásico de libro de texto son los compuestos de azufre sobre los metales. El síntoma en planta es una reacción que va más lenta de lo normal o que no arranca. Por eso importan la limpieza del equipo y la calidad de cada materia prima.

**Seguridad:** algunos catalizadores metálicos, como el Pd/C usado con hidrógeno, son **pirofóricos** (*pyrophoric*): pueden inflamarse solos al contacto con el aire, sobre todo secos y con restos de disolvente. Lo verás en «Oxidación y reducción»: se manejan siempre como indique la hoja de cada etapa. Y la NTP 527 recuerda que cambiar un catalizador puede aumentar mucho la velocidad de reacción, y que trazas de hierro disueltas de un acero distinto pueden provocar una descomposición violenta: un catalizador que nadie había invitado.

Las **enzimas** (*enzymes*) son catalizadores biológicos; se usan en algunas síntesis, pero no se tratan en este temario.

Lo contrario de un catalizador es un **inhibidor** (*inhibitor*): una sustancia que frena o detiene una reacción. La NTP 527 cita la adición de un inhibidor como una de las medidas de protección para detener una reacción que se descontrola.

### Reacciones en serie y en paralelo: de dónde salen impurezas
Casi nunca hay una sola reacción en el reactor.

**En serie** (*consecutive reactions*): A da B, y B, si se le deja, da C. B es tu producto; C, una impureza. Al principio solo se forma B. Si te pasas de tiempo o de temperatura, el propio producto **sigue reaccionando** y se va convirtiendo en C. Como el pan tostado: si lo dejas más, se quema. La NTP 527 lo tiene en cuenta: si el producto deseado se descompone por una reacción consecutiva, el tipo de reactor y de operación cambian el rendimiento; y pide fijar un **tiempo máximo** a temperatura elevada, porque estar más del preciso puede descomponer material térmicamente inestable.

**En paralelo** (*parallel reactions*): A puede dar B (lo que quieres) o D (un subproducto) a la vez. Cuál gana depende de las condiciones. Si la reacción secundaria tiene una colina más alta, la temperatura la favorece más. Ejemplo de cálculo con Arrhenius: con una reacción principal de 60 kJ/mol y una secundaria de 100 kJ/mol, subir de 50 a 60 °C acelera la principal × 1,95 y la secundaria × 3,06. Más calor, más proporción de impureza.

Esos C y D son los **subproductos** y **productos de degradación** que verás en «Impurezas en el API». Por eso la hoja da a la vez un tiempo mínimo, para que la reacción llegue, y límites de temperatura y a veces de tiempo máximo, para que no se pase.

En planta manda siempre el procedimiento vigente (SOP) y la hoja de producción de cada lote.
`,
  plant: `
Turno de tarde. Reactor vitrificado R-318, de 4000 L, etapa 2 del intermedio ficticio KX-07. La hoja dice: *«Masa a 45 ± 3 °C. Dosificar 380 kg de reactivo C en no menos de 90 min. Si a los 10 min de adición la temperatura de masa no ha subido o la camisa no ha empezado a enfriar, detener la dosificación y avisar. Tras la adición, mantener a 45 ± 3 °C un mínimo de 2 h. IPC: material de partida ≤ 1,0 %. Si no cumple, mantener 1 h y repetir.»*

Arrancas la bomba dosificadora con la masa a 44 °C y el agitador a las rpm de la hoja. A los 10 minutos la masa sigue en 44 °C y la válvula de agua de la camisa no se ha movido. Por la lección sabes lo que puede significar: el reactivo entra pero no reacciona. Paras la bomba, anotas la hora y la cantidad añadida y avisas al jefe de turno. El laboratorio analiza el lote de reactivo C y encuentra que no cumple su especificación; producción y calidad abren una desviación. Tú no recalientas ni reanudas por tu cuenta.

Con el reactivo sustituido y la autorización registrada, reanudas: esta vez la masa sube a 46 °C en pocos minutos y la camisa empieza a enfriar. Al terminar la adición y las 2 h de mantenimiento, tomas la muestra de IPC según el procedimiento: 1,6 %. No cumple. Mantienes 1 h más sin tocar la temperatura y repites: 0,7 %. Cumple, y lo anotas todo.
`,
  batchRecord: `
- Temperatura de masa al iniciar la dosificación y agitador en marcha comprobado, con sus rpm.
- Hora de inicio y fin de cada dosificación, cantidad dosificada y caudal o tiempo total.
- Respuesta de la temperatura al empezar a dosificar (subida de la masa o apertura de la refrigeración) y paradas de dosificación con hora, cantidad añadida hasta ese momento y motivo.
- Hora de inicio del mantenimiento a temperatura, temperaturas registradas y tiempo total mantenido.
- Cada muestra de IPC: hora de toma, identificación de la muestra, resultado, criterio de la hoja y decisión (cumple, mantener y repetir).
- Cantidad, código y lote del catalizador, y su retirada (filtración) si la etapa lo usa.
- Cualquier valor fuera de rango, tiempo distinto del previsto o instrucción recibida del laboratorio o del jefe de turno: anotado en el momento, con firma, y comunicado como desviación cuando corresponda.
`,
  terms: [
    { es: "Velocidad de reacción", en: "Reaction rate", def: "Cantidad de reactivo que desaparece, o de producto que aparece, por unidad de tiempo; por ejemplo, en mol/(L·h)." },
    { es: "Conversión", en: "Conversion", def: "Porcentaje del reactivo inicial que ya ha reaccionado: (inicial − queda) / inicial × 100." },
    { es: "Teoría de choques", en: "Collision theory", def: "Idea de que las moléculas reaccionan solo si chocan con energía suficiente y con la orientación adecuada." },
    { es: "Energía de activación", en: "Activation energy (Ea)", def: "Energía mínima que debe tener un choque para que haya reacción; la altura de la colina, en kJ/mol." },
    { es: "Ecuación de Arrhenius", en: "Arrhenius equation", def: "k = A × e^(−Ea/(R×T)); relaciona la constante de velocidad con la temperatura y la energía de activación." },
    { es: "Constante de velocidad", en: "Rate constant (k)", def: "Número que mide lo rápida que es una reacción a una temperatura dada." },
    { es: "Orden de reacción", en: "Reaction order", def: "Cómo cambia la velocidad al cambiar la concentración de un reactivo; se mide en el laboratorio." },
    { es: "Vida media", en: "Half-life (t½)", def: "Tiempo en que se consume la mitad del reactivo; constante en una reacción de primer orden." },
    { es: "Interfase", en: "Interface", def: "Frontera entre dos fases que no se mezclan, donde se encuentran sus moléculas." },
    { es: "Catalizador heterogéneo", en: "Heterogeneous catalyst", def: "Catalizador sólido en un líquido, como el paladio sobre carbón; se retira por filtración." },
    { es: "Envenenamiento del catalizador", en: "Catalyst poisoning", def: "Pérdida de actividad porque una sustancia tapa la superficie activa del catalizador." },
    { es: "Inhibidor", en: "Inhibitor", def: "Sustancia que frena o detiene una reacción; lo contrario de un catalizador." },
    { es: "Reacciones en serie", en: "Consecutive reactions", def: "Reacciones en cadena en las que el producto deseado sigue reaccionando y da impurezas." },
    { es: "Reacciones en paralelo", en: "Parallel reactions", def: "Reacciones que compiten por el mismo reactivo y dan productos distintos." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Se cargan 1200 kg de material de partida y el análisis indica que quedan 30 kg sin reaccionar. ¿Cuál es la conversión?",
      answer: 97.5,
      tolerance: 0.005,
      unit: "%",
      explain: "Conversión = (1200 − 30) / 1200 × 100 = 97,5 %.",
    },
    {
      kind: "number",
      q: "La concentración de un reactivo baja de 0,50 a 0,04 mol/L durante la reacción. ¿Qué conversión se ha alcanzado?",
      answer: 92,
      tolerance: 0.005,
      unit: "%",
      explain: "Conversión = (0,50 − 0,04) / 0,50 × 100 = 92 %.",
    },
    {
      kind: "choice",
      q: "Dos moléculas chocan con mucha energía, pero no reaccionan. Según la teoría de choques, ¿qué explicación es posible?",
      options: [
        "Que el catalizador se haya consumido durante el choque",
        "Que hayan chocado con una orientación que no es la adecuada",
        "Que la energía de activación sea cero para esa reacción",
        "Que la reacción sea de orden cero respecto a las dos",
      ],
      answer: 1,
      explain: "Hacen falta tres cosas a la vez: chocar, con energía suficiente y con la orientación adecuada. Como una llave al revés, aunque empujes fuerte no entra.",
    },
    {
      kind: "number",
      q: "Con la regla aproximada de que la velocidad se multiplica por 3 cada 10 °C, ¿cuántas veces más rápida va una reacción si la masa está 20 °C más caliente?",
      answer: 9,
      tolerance: 0.001,
      unit: "veces",
      explain: "Dos saltos de 10 °C: 3 × 3 = 9 veces. Es una aproximación: el factor real depende de la energía de activación.",
    },
    {
      kind: "number",
      q: "Una etapa termina en 3 h a su temperatura normal. Por error se trabaja 20 °C más frío. Si la velocidad se duplica cada 10 °C, ¿cuántas horas tardaría ahora?",
      answer: 12,
      tolerance: 0.001,
      unit: "h",
      explain: "Dos saltos de 10 °C hacia abajo: va 2 × 2 = 4 veces más lenta. 3 h × 4 = 12 h.",
    },
    {
      kind: "choice",
      q: "Empiezas a dosificar un reactivo en una reacción exotérmica y, a los 10 minutos, la temperatura de masa no ha subido ni la camisa enfría. ¿Qué haces?",
      options: [
        "Subir la consigna de la camisa para que arranque la reacción",
        "Dosificar más deprisa para que se note la subida de temperatura",
        "Detener la dosificación, anotarlo y avisar: puede haber acumulación",
        "Seguir dosificando, porque la masa está dentro del intervalo",
      ],
      answer: 2,
      explain: "Si no sube la temperatura, el reactivo puede estar acumulándose sin reaccionar. Si después arranca, todo ese calor sale de golpe. Se para, se anota y se avisa, según la hoja.",
    },
    {
      kind: "number",
      q: "Una reacción de primer orden tiene una vida media de 1,5 h. ¿Qué porcentaje del reactivo inicial queda a las 4,5 h?",
      answer: 12.5,
      tolerance: 0.005,
      unit: "%",
      explain: "4,5 / 1,5 = 3 vidas medias. Queda ½ × ½ × ½ = 1/8, es decir, el 12,5 %.",
    },
    {
      kind: "number",
      q: "Al empezar una reacción de primer orden hay 400 kg de reactivo y su vida media es de 2 h. ¿Cuántos kilos quedan sin reaccionar a las 6 h?",
      answer: 50,
      tolerance: 0.005,
      unit: "kg",
      explain: "6 / 2 = 3 vidas medias: 400 / 2 / 2 / 2 = 50 kg.",
    },
    {
      kind: "choice",
      q: "Al terminar una hidrogenación con paladio sobre carbón (Pd/C), ¿qué afirmación es correcta?",
      options: [
        "El catalizador no se ha consumido y se retira filtrando, manejándolo como pirofórico",
        "El catalizador se ha gastado en la reacción y no queda nada que retirar del reactor",
        "El catalizador ha desplazado el equilibrio y por eso se obtiene más producto final",
        "El catalizador se disuelve en la masa y se elimina en el secado del producto final",
      ],
      answer: 0,
      explain: "Un catalizador no se consume ni cambia el equilibrio. El Pd/C es heterogéneo y se retira por filtración; puede inflamarse solo al aire, así que se maneja como indique la hoja.",
    },
    {
      kind: "choice",
      q: "El IPC de una etapa cumple, pero el reactor se quedó 3 h más a temperatura por un retraso. El análisis final muestra más cantidad de una impureza conocida. ¿Cuál es la explicación más probable?",
      options: [
        "El catalizador se envenenó y dejó de actuar durante la espera",
        "La reacción se hizo de orden cero al pasar más tiempo caliente",
        "El reactivo se acumuló sin reaccionar durante el tiempo de espera",
        "El producto siguió reaccionando en serie y formó esa impureza",
      ],
      answer: 3,
      explain: "En reacciones en serie el producto deseado puede seguir reaccionando si se le deja más tiempo o más temperatura. Por eso la hoja fija límites de tiempo y la NTP 527 pide un tiempo máximo a temperatura elevada.",
    },
  ],
};
