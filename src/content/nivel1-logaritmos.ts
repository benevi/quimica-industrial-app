import type { Lesson } from "./types";

export const logaritmosYExponenciales: Lesson = {
  slug: "logaritmos-y-exponenciales",
  level: 1,
  order: 10.9,
  title: "Logaritmos y exponenciales: las cuentas del pH, la presión de vapor y la velocidad",
  titleEn: "Logarithms and exponentials",
  minutes: 28,
  summary:
    "Exponentes con decimales, raíz cuadrada, el logaritmo decimal y sus tres reglas, las escalas logarítmicas, el número e y el ln, el crecimiento y el decaimiento exponencial, y las teclas de la calculadora para el pH, la ecuación de Antoine, la vida media, Arrhenius y los ciclos de inertización.",
  body: `
A partir de aquí vas a encontrar fórmulas con «log», «ln», «e» y exponentes con decimales: el pH, la presión de vapor de un disolvente, la velocidad de una reacción o los ciclos para quitar el oxígeno de un reactor. Basta con entender qué pregunta responde cada tecla y hacer las cuentas en orden. Esta lección parte de cero y resuelve cada ejemplo con las teclas de una calculadora científica.

### 1. Repaso: potencias y exponentes
En «Las cuentas de planta a fondo: porcentajes, proporciones, redondeos y gráficas» viste las **potencias de diez** (*powers of ten*) y la notación científica: 10³ = 1000 y 10⁻³ = 0,001. Aquí solo hacen falta cuatro reglas más sobre el **exponente** (*exponent*), el número pequeño de arriba:

| Regla | Ejemplo | En palabras |
|---|---|---|
| Multiplicar suma exponentes | 10³ × 10² = 10⁵ | 1000 × 100 = 100 000 |
| Dividir resta exponentes | 10⁵ / 10² = 10³ | 100 000 / 100 = 1000 |
| Potencia de potencia multiplica | (10²)³ = 10⁶ | 100 × 100 × 100 |
| Exponente cero | 10⁰ = 1 | Cualquier número elevado a 0 vale 1 |

**Exponentes con decimales.** Un exponente no tiene por qué ser entero. 10^0,5 es un número que, multiplicado por sí mismo, da 10: vale 3,162. Y 10 elevado a −4,76 es un número entre 10⁻⁵ y 10⁻⁴. No se calcula de cabeza: se usa la tecla **10ˣ**.

**Ejemplo resuelto 1. ¿Cuánto vale 10 elevado a −4,76?**
1. Busca la tecla 10ˣ. En casi todas las calculadoras científicas es la segunda función de la tecla «log»: se pulsa «Shift» (o «2nd») y luego «log».
2. Teclea el exponente con el signo negativo de la tecla (−), no con la tecla de restar: (−) 4,76.
3. Pulsa «=». Sale 1,7378 × 10⁻⁵, que se redondea a **1,74 × 10⁻⁵**.

Comprobación a ojo: −4,76 está entre −5 y −4, así que el resultado tiene que estar entre 0,00001 y 0,0001. Cuadra. Este número es la constante de acidez del ácido acético, que verás en «Ácidos, bases y pH a fondo: medir, ajustar y neutralizar sin riesgos».

### 2. La raíz cuadrada
La **raíz cuadrada** (*square root*, √) responde a la pregunta «¿qué número, multiplicado por sí mismo, da este?». √9 = 3 porque 3 × 3 = 9. √0,01 = 0,1 porque 0,1 × 0,1 = 0,01. Es lo mismo que elevar a ½: √x = x^0,5. Por eso √10 = 10^0,5 = 3,162.

**Ejemplo resuelto 2. Una raíz con una división dentro.** En «Los gases a fondo: presión, mezclas y gases licuados» verás la fórmula α = √(Kp / (Kp + 4 × P)). Con Kp = 0,333 y P = 1 bar:
1. Primero lo de dentro del paréntesis de abajo: 0,333 + 4 × 1 = 4,333.
2. Divide: 0,333 / 4,333 = 0,07685.
3. Raíz: √0,07685 = **0,277**.

En la calculadora, abre la raíz y mete toda la división dentro: √( 0,333 ÷ ( 0,333 + 4 × 1 ) ) =. Si olvidas los paréntesis, la máquina hace la raíz solo del 0,333 y el resultado es otro.

**Ejemplo resuelto 3.** √(1,74 × 10⁻⁵ × 0,1) = √(1,74 × 10⁻⁶) = **1,32 × 10⁻³**. Es la concentración de H⁺ de un ácido acético 0,1 mol/L: la verás en la lección «a fondo» de ácidos y bases.

### 3. El logaritmo decimal: la pregunta al revés
El **logaritmo decimal** (*base-10 logarithm*, log) es la operación inversa de 10ˣ. Responde a: «¿a qué potencia hay que elevar 10 para obtener este número?».

| Número | Como potencia de 10 | log |
|---|---|---|
| 1000 | 10³ | 3 |
| 10 | 10¹ | 1 |
| 1 | 10⁰ | 0 |
| 0,1 | 10⁻¹ | −1 |
| 0,001 | 10⁻³ | −3 |

Tres cosas que se ven en la tabla:
- Un número mayor que 1 tiene logaritmo positivo; entre 0 y 1, negativo.
- Cada vez que el número se multiplica por 10, el logaritmo sube 1.
- El logaritmo de 0 o de un número negativo **no existe**: la calculadora da error. Si te pasa, has metido mal un dato.

**Ejemplo resuelto 4. log 0,005.** Teclea «log» 0,005 «=». Sale −2,30. Comprobación: 0,005 está entre 0,001 (log −3) y 0,01 (log −2), así que su logaritmo está entre −3 y −2. Cuadra. Para volver atrás: 10ˣ (−) 2,30 = 0,005. Las teclas log y 10ˣ se deshacen una a la otra; al número que sale de 10ˣ se le llama a veces **antilogaritmo** (*antilogarithm*).

**Ejemplo resuelto 5. log 150.** «log» 150 «=» da **2,1761**. Entre log 100 = 2 y log 1000 = 3. Este mismo número sale en la ecuación de Antoine del apartado 5.

### 4. Las tres reglas que lo hacen útil
1. **log (a × b) = log a + log b.** El logaritmo convierte multiplicaciones en sumas.
2. **log (a / b) = log a − log b.** Y divisiones en restas.
3. **log (aⁿ) = n × log a.** Y potencias en multiplicaciones.

**Ejemplo resuelto 6. El pH de [H⁺] = 2,5 × 10⁻³ mol/L.** El **pH** se define como menos el logaritmo de la concentración de iones H⁺: pH = −log [H⁺]. Lo verás en «Ácidos, bases y pH».
- Con la regla 1, a mano: log (2,5 × 10⁻³) = log 2,5 + log 10⁻³ = 0,398 + (−3) = −2,602. Cambiado de signo, **pH = 2,60**.
- Con la calculadora: (−) «log» ( 2,5 × 10ˣ (−) 3 ) =, o bien con la tecla de notación científica. Sale 2,60.

**Ejemplo resuelto 7. Una resta de logaritmos.** En la lección «a fondo» de ácidos y bases verás la ecuación de Henderson-Hasselbalch (*Henderson-Hasselbalch equation*), pH = pKa + log ([base] / [ácido]). Con pKa = 4,76, 0,09 mol de base y 0,11 mol de ácido: log (0,09 / 0,11) = log 0,818 = −0,087. pH = 4,76 − 0,087 = **4,67**. Con la regla 2 se llega a lo mismo: log 0,09 − log 0,11 = −1,046 − (−0,959) = −0,087.

### 5. Escalas logarítmicas: cada paso es un factor 10
Una **escala logarítmica** (*logarithmic scale*) es la que cuenta potencias en vez de cantidades. La del pH es la más conocida: **cada unidad de pH es un factor 10** en la concentración de H⁺. Pasar de pH 5 a pH 3 no es «un poco más ácido»: la concentración de H⁺ pasa de 10⁻⁵ a 10⁻³ mol/L, es decir, se multiplica por 10⁻³ / 10⁻⁵ = **100**.

**La presión de vapor con la ecuación de Antoine.** La **presión de vapor** (*vapour pressure*) de un líquido sube muy deprisa con la temperatura, y por eso se escribe con su logaritmo. Es la **ecuación de Antoine** (*Antoine equation*), que verás en «Diagramas de fases a fondo: cuándo algo es sólido, líquido o gas» y en «Destilación a fondo: reflujo, vacío y cambio de disolvente en el reactor»:

> log P = A − B / (C + T)

Para el tolueno, con P en milímetros de mercurio (mmHg) y T en °C, las constantes que usa la app son A = 6,95464, B = 1344,8 y C = 219,482.

**Ejemplo resuelto 8. Presión de vapor del tolueno a 70 °C.**
1. C + T = 219,482 + 70 = 289,482.
2. B / 289,482 = 1344,8 / 289,482 = 4,6455.
3. log P = 6,95464 − 4,6455 = 2,3091.
4. P = 10ˣ 2,3091 = **203,8 mmHg**. Pasado a milibares (1 mmHg = 1,33322 mbar), son 271,6 mbar.

El paso 4 es el importante: la fórmula da el logaritmo de la presión, no la presión.

**Ejemplo resuelto 9. El camino inverso: ¿a qué temperatura hierve el tolueno a 200 mbar abs?** Despejando, T = B / (A − log P) − C.
1. 200 mbar son 20 000 Pa, y 20 000 / 133,322 = 150,0 mmHg.
2. log 150,0 = 2,1761.
3. A − log P = 6,95464 − 2,1761 = 4,7785.
4. 1344,8 / 4,7785 = 281,4.
5. T = 281,4 − 219,482 = **61,9 °C**. A 760 mmHg la misma cuenta da 110,6 °C, su punto de ebullición normal.

### 6. El número e y el logaritmo neperiano
Imagina algo que crece un 100 % en un tiempo dado. Si crece de golpe al final, pasa de 1 a 2. Si crece la mitad cada medio tiempo, sobre lo que ya hay, llega a (1 + 1/2)² = 2,25. Repartido en 12 trozos, a (1 + 1/12)¹² = 2,613. En 365 trozos, a 2,7146. Cuanto más finos son los trozos, más se acerca a un número fijo, que no se pasa nunca:

> **e = 2,71828…**

Ese número, el **número e** (*Euler's number*), aparece siempre que algo crece o decrece **en proporción a lo que hay en cada instante**: un reactivo que se gasta, el calor que se pierde, el oxígeno que se diluye. La **función exponencial** (*exponential function*) es eˣ.

Su inversa es el **logaritmo neperiano** o natural (*natural logarithm*, ln): «¿a qué potencia hay que elevar e para obtener este número?». En la calculadora, **ln** es una tecla y **eˣ** suele ser su segunda función.

- e¹ = 2,72 y ln e = 1.
- ln 1 = 0, como log 1.
- Las tres reglas del apartado 4 valen igual para ln.
- **ln x = 2,303 × log x**, porque ln 10 = 2,303. Ejemplo: ln 1000 = 2,303 × 3 = 6,908.
- **ln 2 = 0,693**. Este número sale en la vida media.

### 7. Crecer y decrecer en proporción
**El primer orden.** En muchas reacciones, cada minuto se gasta el mismo porcentaje del reactivo que queda. La fracción que queda sin reaccionar al cabo de un tiempo t es:

> fracción que queda = e^(−k × t)

k es la **constante de velocidad** (*rate constant*), en min⁻¹ o en h⁻¹. Lo verás en «Velocidad de reacción a fondo: por qué unas reacciones tardan horas y otras segundos» y en «Ley de velocidad y catalizadores a fondo».

**Ejemplo resuelto 10. La vida media en el reactor R-204 del simulador.** La reacción ficticia del simulador del reactor tiene k = 0,1 min⁻¹ a 70 °C. La **vida media** (*half-life*, t½) es el tiempo en que queda la mitad: e^(−k × t) = 0,5. Tomando ln en los dos lados, −k × t = ln 0,5 = −0,693, y despejando:

> t½ = ln 2 / k = 0,693 / 0,1 = **6,93 min**

Al cabo de 20 min queda e^(−0,1 × 20) = e^(−2). Teclas: eˣ ( (−) 0,1 × 20 ) =. Sale 0,135: queda un **13,5 %**.

**Ejemplo resuelto 11. ¿Cuánto tarda en bajar de 2 % a 0,5 %?** El control en proceso (IPC, *in-process control*) pide que quede como mucho un 0,5 % del reactivo, y al acabar de dosificar queda un 2 %. Hay que dividir entre 4. Con ln: t = ln (2 / 0,5) / k = ln 4 / 0,1 = 1,386 / 0,1 = **13,9 min**. Son dos vidas medias justas, porque 2 × 6,93 = 13,9.

**Arrhenius: un poco de temperatura, mucha velocidad.** La **ecuación de Arrhenius** (*Arrhenius equation*), k = A × e^(−Ea / (R × T)), dice cómo cambia k con la temperatura. Ea es la energía de activación en J/mol, R = 8,314 J/(mol·K) y T la temperatura en kelvin (°C + 273,15). Como T está dentro de un exponente, un cambio pequeño de temperatura multiplica k por mucho.

**Ejemplo resuelto 12. El R-204 a 60 °C en vez de 70 °C**, con los 90 kJ/mol (90 000 J/mol) del simulador. Para comparar dos temperaturas, k₆₀ / k₇₀ = e^(−Ea / R × (1/T₆₀ − 1/T₇₀)):
1. Ea / R = 90 000 / 8,314 = 10 825 K.
2. 1 / 333,15 = 0,0030017 y 1 / 343,15 = 0,0029142. La resta: 0,0000875.
3. 10 825 × 0,0000875 = 0,947.
4. e^(−0,947) = 0,388.
5. k₆₀ = 0,1 × 0,388 = **0,0388 min⁻¹**. La vida media pasa a 0,693 / 0,0388 = **17,9 min**.

Diez grados menos y la reacción va 2,6 veces más lenta. Por qué eso es peligroso mientras se dosifica, lo verás en las lecciones de velocidad de reacción.

**La inertización: una serie que se multiplica.** En cada ciclo de vacío y nitrógeno, el oxígeno se multiplica por el mismo factor, el cociente entre la presión baja y la alta en absoluta. Tras n ciclos: O₂ = 21 % × (P baja / P alta)ⁿ. Lo verás en «Inertización a fondo: por qué, cuánto y cómo se calcula».

**Ejemplo resuelto 13. ¿Cuántos ciclos para bajar de 21 % a menos de 2 %, con vacío a 200 mbar abs y nitrógeno hasta 1000 mbar abs?** El factor es 0,2. Hay que resolver 21 × 0,2ⁿ = 2. Con la regla 3 del logaritmo: n = log (2 / 21) / log 0,2 = (−1,021) / (−0,699) = 1,46. Los ciclos son enteros, así que se redondea hacia arriba: **2 ciclos**. Comprobación: 21 × 0,2 × 0,2 = 0,84 %. Con la bomba a 500 mbar abs, n = −1,021 / (−0,301) = 3,39: hacen falta **4 ciclos** (1,31 %).

En el barrido continuo con nitrógeno, en el caso ideal, cada volumen de equipo que pasa multiplica el oxígeno por e⁻¹ = 0,37. Para bajar de 21 % a 2 % hacen falta ln (21 / 2) = **2,4 volúmenes**.

### 8. Errores típicos con la calculadora
- **log por ln, o al revés.** El pH de [H⁺] = 0,001 con ln sale 6,91 en vez de 3. Antoine, el pH y el pKa usan log; la vida media, Arrhenius y la exponencial del primer orden usan ln y eˣ.
- **Los paréntesis del exponente.** e^(−Ea / (R × T)) se teclea eˣ ( (−) Ea ÷ ( R × T ) ). Sin el paréntesis de abajo, la máquina divide entre R y luego multiplica por T.
- **El signo menos.** Para un exponente negativo usa la tecla (−), no la de restar.
- **10ˣ frente a la tecla de notación científica.** 10ˣ 3 da 1000. La tecla de notación científica ya lleva el «× 10» dentro, como viste en las cuentas de planta a fondo.
- **Las unidades de k.** Si k está en h⁻¹, t sale en horas. No mezcles minutos y horas.
- **Kelvin en Arrhenius.** 70 °C son 343,15 K. Con grados Celsius la cuenta no sale.
- **Comprueba a ojo.** Antes de dar por bueno un resultado, mira entre qué potencias de 10 tiene que caer.

Los números de esta lección sirven para entender las fórmulas. En planta manda siempre el procedimiento vigente (SOP, *standard operating procedure*): las presiones, los tiempos, los límites y las cuentas son los que diga tu hoja.
`,
  plant: `
Turno de mañana en el reactor ficticio R-204, con tolueno y el intermedio ficticio AX-21. Antes de empezar, haces de cabeza las cuentas de la hoja para saber qué esperar.

- **Inertización.** La hoja pide 3 ciclos de vacío a 150 mbar abs, rompiendo con nitrógeno hasta 1000 mbar abs. El factor es 0,15: el oxígeno debería pasar de 21 % a 3,15 %, a 0,47 % y a 0,07 %. Si el analizador marca mucho más, no se sigue: algo falla (una fuga, un vacío que no llegó).
- **Reacción.** A 70 °C la vida media del reactivo B es 6,93 min. Al acabar la adición, el IPC da 2 % de B y la hoja pide 0,5 % como máximo: esperas cumplir en unos 14 min. Si la masa se ha quedado a 60 °C, la vida media sube a 17,9 min y tardará más del doble. No es motivo para subir la temperatura por tu cuenta: se avisa y se sigue lo que diga la hoja.
- **Destilación.** A 200 mbar abs el tolueno puro hierve a unos 61,9 °C. Si la masa hierve algo más arriba, lo normal es que sea por lo que lleva disuelto. Si hierve muy por debajo, mira la presión.
- **Lavado.** La fase acuosa da pH 3. La hoja pide pH 5 o más: hay cien veces más H⁺ de lo permitido, no «un poco».
`,
  batchRecord: `
- Presiones anotadas en absoluta («abs») o relativa («g»), con la presión realmente alcanzada en cada ciclo de inertización y el O₂ medido.
- Valores de pH con los decimales que pide el procedimiento; recuerda que una unidad de pH es un factor 10.
- Temperatura de la masa y del condensador, y presión de destilación, que se comparan con la temperatura esperada por Antoine.
- Tiempos de reacción, hora de cada muestra de IPC y su resultado.
- Casillas de «calculado por» y «verificado por» en las cuentas hechas a mano.
`,
  terms: [
    { es: "Exponente", en: "Exponent", def: "Número pequeño que indica cuántas veces se multiplica la base por sí misma; puede ser negativo o con decimales." },
    { es: "Raíz cuadrada", en: "Square root", def: "Número que, multiplicado por sí mismo, da el número dado; equivale a elevar a 0,5." },
    { es: "Logaritmo decimal", en: "Base-10 logarithm (log)", def: "Potencia a la que hay que elevar 10 para obtener un número: log 1000 = 3, log 0,001 = −3." },
    { es: "Antilogaritmo", en: "Antilogarithm", def: "Operación inversa del logaritmo: el número que sale con la tecla 10ˣ (o eˣ para el ln)." },
    { es: "Número e", en: "Euler's number (e)", def: "Constante 2,71828… que aparece en todo lo que crece o decrece en proporción a lo que hay." },
    { es: "Logaritmo neperiano", en: "Natural logarithm (ln)", def: "Potencia a la que hay que elevar e para obtener un número; ln x = 2,303 × log x." },
    { es: "Función exponencial", en: "Exponential function", def: "La función eˣ; describe el crecimiento o el decaimiento en proporción a la cantidad presente." },
    { es: "Escala logarítmica", en: "Logarithmic scale", def: "Escala en la que cada paso es un factor fijo, como el pH, donde cada unidad es un factor 10." },
    { es: "Vida media", en: "Half-life", def: "Tiempo en que se gasta la mitad del reactivo; en primer orden vale ln 2 / k = 0,693 / k." },
    { es: "Constante de velocidad", en: "Rate constant", def: "Número k que mide lo rápida que es una reacción; depende de la temperatura según Arrhenius." },
    { es: "Orden de magnitud", en: "Order of magnitude", def: "Potencia de 10 más cercana a un valor; sirve para comprobar a ojo si una cuenta tiene sentido." },
  ],
  quiz: [
    {
      kind: "choice",
      q: "¿Cuánto vale log 0,005?",
      options: ["−3,30", "−2,30", "2,30", "−0,70"],
      answer: 1,
      explain: "Con la tecla log sale −2,30. Cuadra: 0,005 está entre 0,001 (log −3) y 0,01 (log −2).",
    },
    {
      kind: "number",
      q: "Calcula 10 elevado a −4,76 con la tecla 10ˣ. El resultado es un número por 10⁻⁵: escribe solo el número que va delante, con dos decimales.",
      answer: 1.74,
      tolerance: 0.01,
      unit: "× 10⁻⁵",
      explain: "Shift log, luego (−) 4,76 y =: sale 1,7378 × 10⁻⁵, es decir, 1,74 × 10⁻⁵.",
    },
    {
      kind: "number",
      q: "Una fase acuosa tiene [H⁺] = 2,5 × 10⁻³ mol/L. ¿Cuál es su pH? (pH = −log [H⁺])",
      answer: 2.6,
      tolerance: 0.01,
      unit: "",
      explain: "log (2,5 × 10⁻³) = log 2,5 + log 10⁻³ = 0,398 − 3 = −2,602. Cambiado de signo, el pH es 2,60.",
    },
    {
      kind: "number",
      q: "¿Cuánto vale e¹ redondeado a dos decimales?",
      answer: 2.72,
      tolerance: 0.005,
      unit: "",
      explain: "e = 2,71828…, que con dos decimales es 2,72. En la calculadora: eˣ 1 =.",
    },
    {
      kind: "number",
      q: "Una reacción de primer orden tiene k = 0,1 min⁻¹. ¿Cuál es su vida media? (ln 2 = 0,693)",
      answer: 6.93,
      tolerance: 0.01,
      unit: "min",
      explain: "t½ = ln 2 / k = 0,693 / 0,1 = 6,93 min. Es la vida media del reactor R-204 del simulador a 70 °C.",
    },
    {
      kind: "number",
      q: "Con esa misma reacción (k = 0,1 min⁻¹), ¿qué porcentaje del reactivo queda sin reaccionar a los 20 min? Usa fracción que queda = e^(−k × t).",
      answer: 13.5,
      tolerance: 0.02,
      unit: "%",
      explain: "e^(−0,1 × 20) = e^(−2) = 0,135, es decir, queda un 13,5 %.",
    },
    {
      kind: "number",
      q: "Con la ecuación de Antoine del tolueno, log P = 6,95464 − 1344,8 / (219,482 + T), con P en mmHg y T en °C, ¿cuál es su presión de vapor a 50 °C?",
      answer: 92.1,
      tolerance: 0.02,
      unit: "mmHg",
      explain: "219,482 + 50 = 269,482; 1344,8 / 269,482 = 4,9903; log P = 6,95464 − 4,9903 = 1,9643; P = 10 elevado a 1,9643 = 92,1 mmHg.",
    },
    {
      kind: "number",
      q: "Inertizas con ciclos de vacío hasta 400 mbar abs y nitrógeno hasta 1000 mbar abs. ¿Cuántos ciclos hacen falta, como mínimo, para bajar del 21 % a menos del 2 % de oxígeno?",
      answer: 3,
      tolerance: 0,
      unit: "ciclos",
      explain: "Factor 0,4. n = log (2 / 21) / log 0,4 = −1,021 / −0,398 = 2,57, que se redondea hacia arriba: 3 ciclos. Comprobación: 21 × 0,4 × 0,4 × 0,4 = 1,34 %.",
    },
    {
      kind: "choice",
      q: "El pH de un lavado baja de 5 a 3. ¿Qué le ha pasado a la concentración de H⁺?",
      options: ["Ha bajado a la mitad", "Ha subido un 2 %", "Se ha multiplicado por 2", "Se ha multiplicado por 100"],
      answer: 3,
      explain: "Cada unidad de pH es un factor 10: de 10⁻⁵ a 10⁻³ mol/L, la concentración se multiplica por 10 × 10 = 100.",
    },
    {
      kind: "choice",
      q: "Un compañero calcula el pH de [H⁺] = 0,001 mol/L y le sale 6,91. ¿Qué ha pasado?",
      options: [
        "Ha usado la tecla ln en vez de log: el pH correcto es 3",
        "La disolución es casi neutra",
        "Ha olvidado pasar a kelvin",
        "Ha usado la tecla 10ˣ en vez de log",
      ],
      answer: 0,
      explain: "−ln 0,001 = 6,91, porque ln x = 2,303 × log x. El pH se calcula con log: −log 0,001 = 3.",
    },
  ],
};
