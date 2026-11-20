import type { Lesson } from "./types";

export const lazosAFondo: Lesson = {
  slug: "lazos-a-fondo",
  level: 13,
  order: 6,
  title: "Lazos de control a fondo: consigna, PID, manual y automático",
  titleEn: "Control loops in depth: setpoint, PID, manual and automatic",
  minutes: 40,
  summary:
    "Cómo piensa un controlador: error, acción proporcional, integral y derivativa con sus cuentas, por qué un reactor responde despacio, qué mandas tú en manual, en automático y en cascada, el rango partido, las rampas y las señales de un lazo o una válvula que van mal.",
  body: `
En la lección anterior viste qué es un lazo de control. Aquí vas a entender cómo decide el controlador cuánto abrir la válvula, por qué a veces se pasa o tarda, y qué mandas tú en cada modo.

### Medir, comparar, actuar
Piensa en la ducha. Notas el agua con la piel (mides). La comparas con cómo la quieres (comparas). Giras el grifo (actúas). Y repites. Eso es un **lazo cerrado** (*closed loop*): el resultado vuelve al principio y corrige la siguiente actuación.

Un controlador hace lo mismo sin parar. En su carátula (*faceplate*) ves tres valores:

| Sigla | Qué es |
|---|---|
| **PV** (*process variable*) | Lo que mide el sensor ahora |
| **SP** (*set point*), consigna | Lo que se quiere |
| **OP** (*output*), salida | La orden al elemento final, del 0 al 100 % |

El **error** es la diferencia: **error = SP − PV**. Con SP = 70 °C y PV = 64 °C, el error es 70 − 64 = **6 °C**: faltan 6 grados. Con PV = 73 °C, el error es 70 − 73 = **−3 °C**: sobran 3.

Por dentro, el controlador trabaja en tanto por ciento del rango del transmisor. Si el rango es de 0 a 200 °C, un error de 10 °C es 10 / 200 = 5 %. En esta lección el transmisor de ejemplo mide de 0 a 100 °C, para que 1 °C sea un 1 %.

### Lazo abierto y lazo cerrado
En **lazo abierto** (*open loop*) se actúa sin mirar el resultado: abres el grifo «tres cuartos» y te metes sin probar. Un controlador en manual es un lazo abierto: la corrección eres tú.

### Acción directa y acción inversa
El controlador tiene que saber hacia dónde mover la salida cuando la PV sube.

- **Acción inversa** (*reverse action*): si la PV sube, la salida baja.
- **Acción directa** (*direct action*): si la PV sube, la salida sube.

Razónalo con una válvula que abre más cuanta más señal recibe:

- **Calentar con vapor.** La temperatura sube por encima de la consigna. Hay que dar menos vapor: la salida debe bajar. PV sube, salida baja: **acción inversa**.
- **Enfriar con agua.** La temperatura sube. Hay que dar más agua fría: la salida debe subir. PV sube, salida sube: **acción directa**.

Si se configura al revés, el lazo empuja en el sentido equivocado: cuanto más caliente, más vapor.

**La posición de fallo de la válvula** también cuenta. Una válvula neumática se va sola a una posición segura si pierde el aire: cerrada (*fail closed*) o abierta (*fail open*). Lo habitual es que la de vapor cierre al fallar y que una de refrigeración abra, pero lo decide el diseño de seguridad de cada instalación. Una válvula que abre al fallar funciona al revés: más señal la cierra. Eso da la vuelta al razonamiento, y el diseño lo compensa. A ti te toca saber, de cada lazo, si en pantalla el 100 % significa válvula abierta o señal máxima.

### Control todo o nada
El termostato de casa es un control **todo o nada** (*on-off*): caldera encendida o apagada. Para no conmutar sin parar lleva **histéresis** (*hysteresis*): un margen entre el punto de encendido y el de apagado. Con consigna de 21 °C y un margen de ±0,5 °C (valor de ejemplo), enciende a 20,5 °C y apaga a 21,5 °C.

Oscila siempre, porque solo sabe dar todo o nada. Basta donde esa oscilación no importa, como el nivel de un depósito entre un mínimo y un máximo. No basta para la temperatura de una reacción.

### Acción proporcional
La idea: cuanto mayor es el error, mayor es la corrección.

> Salida = ganancia × error + sesgo

La **ganancia** (*gain*, Kc) dice cuánto cambia la salida por cada 1 % de error. El **sesgo** (*bias*) es la salida cuando el error es cero. Esta fórmula es la de acción inversa; en acción directa el término del error cambia de signo.

Con ganancia 2 y sesgo 50 % (valores de ejemplo):

- Error de 6 %: 2 × 6 + 50 = **62 %**.
- Error de −10 %: 2 × (−10) + 50 = **30 %**.
- Error de 30 %: 2 × 30 + 50 = 110 %. La válvula no pasa del 100 %, así que la salida se queda en **100 %**: está **saturada**.

Algunos fabricantes no usan ganancia, sino **banda proporcional** (*proportional band*, BP): cuánto tiene que cambiar la PV, en tanto por ciento del rango, para que la salida recorra del 0 al 100 %.

> BP = 100 / ganancia

- Ganancia 2: BP = 100 / 2 = **50 %**.
- Ganancia 0,5: BP = 100 / 0,5 = **200 %**.
- Ganancia 4: BP = 100 / 4 = **25 %**.

Van al revés: banda estrecha es ganancia alta, un controlador que reacciona fuerte.

**El error permanente.** Un controlador solo proporcional casi nunca clava la consigna. Un tanque de ejemplo se queda a una temperatura igual a 10 + salida. Consigna 60 °C, ganancia 1, sesgo 50 %. Todo cuadra: error cero, salida 50 %, 60 °C.

Ahora entra producto más frío y el tanque pasa a quedarse a una temperatura igual a la salida, sin los 10 de antes. Para volver a 60 °C haría falta una salida del 60 %. Pero el controlador solo da más del 50 % si hay error. Se queda donde las dos cosas cuadran: a 55 °C, el error es 5 y la salida es 1 × 5 + 50 = 55 %, que da justo 55 °C. Ahí se para, **5 °C por debajo**. Es el **error permanente** (*offset*).

Con ganancia 4 se quedaría a 58 °C (4 × 2 + 50 = 58 %): el error baja a 2 °C, pero no a cero. Y la ganancia no se puede subir sin límite, porque el lazo empieza a oscilar.

### Acción integral
La integral arregla ese error. Va **sumando el error con el tiempo**: mientras quede error, por pequeño que sea, sigue empujando la salida. Solo se queda quieta cuando el error es cero.

Su ajuste es el **tiempo integral** (*integral time*, Ti), en **minutos por repetición**: el tiempo que tarda la integral en añadir, con el error constante, lo mismo que ya puso la proporcional.

Ejemplo con ganancia 2, Ti = 10 minutos y un error constante del 5 %:

- La proporcional pone 2 × 5 = 10 %.
- La integral añade otro 10 % cada 10 minutos, es decir, **1 % por minuto**. A los 4 minutos ha añadido **4 %**.

En general: aporte de la integral = ganancia × error × tiempo / Ti. Un Ti corto es una integral rápida. Otros fabricantes lo dan al revés, en **repeticiones por minuto**: 10 minutos por repetición son 1 / 10 = 0,1 repeticiones por minuto.

**La saturación de la integral** (*reset windup*). Si el error dura mucho y la salida no puede hacer más, la integral sigue sumando en vacío. Pasa cuando la válvula ya está al 100 %, como al calentar un reactor frío, o cuando el lazo estuvo en manual y no mandaba sobre la válvula. Con el ejemplo anterior y un error del 20 % durante 30 minutos, la integral acumula 2 × 20 × 30 / 10 = 120 %: pide más de lo que existe.

Cuando la PV por fin llega a la consigna, esa suma solo se deshace con error de signo contrario. La válvula sigue abierta de más y tú ves un **rebasamiento** grande. Los controladores actuales llevan protección (*anti-windup*). En una simulación sencilla hecha para esta lección, el mismo lazo rebasó una consigna de 70 °C en unos 2 °C con protección y en más de 9 °C sin ella.

### Acción derivativa
La derivativa mira **la velocidad a la que cambia** el error, no su tamaño. Si la temperatura sube deprisa hacia la consigna, frena antes de llegar, como el conductor que levanta el pie cuando el coche se embala.

Su ajuste es el **tiempo derivativo** (*derivative time*, Td). Aporte = ganancia × Td × velocidad de cambio. Con ganancia 2, Td = 1 minuto y la PV subiendo un 3 % por minuto: 2 × 1 × 3 = 6. La derivativa **quita un 6 %** de salida.

Su problema es el ruido. Una señal que tiembla un 0,5 % de un segundo al siguiente «cambia» a 0,5 × 60 = 30 % por minuto, y la derivativa respondería con 2 × 1 × 30 = 60 % de golpe. Por eso se usa poco en caudal y presión, que son señales nerviosas, y sí en temperatura, que es lenta y limpia.

### El PID junto
El controlador **PID** suma las tres acciones:

> Salida = ganancia × [ error + (suma del error en el tiempo) / Ti + Td × (velocidad de cambio del error) ] + sesgo

En palabras: la proporcional mira el presente, la integral el pasado y la derivativa el futuro inmediato.

Cada fabricante usa su variante: ganancia o banda proporcional, minutos por repetición o repeticiones por minuto, y formas en que la ganancia no multiplica a las tres acciones. Los parámetros de un sistema no valen sin más para otro.

### Cómo responde un lazo
La PV nunca responde al instante.

- **Tiempo muerto** (*dead time*): el rato en que no pasa nada, como el agua caliente que tarda en llegar por la tubería.
- **Constante de tiempo** (*time constant*): mide la lentitud. Es el tiempo que tarda la PV en hacer el 63 % del cambio total. Tras cinco constantes de tiempo ha hecho más del 99 %.
- **Rebasamiento** (*overshoot*): lo que la PV se pasa de la consigna.
- **Oscilación**: la PV sube y baja alrededor de la consigna.
- **Tiempo de establecimiento** (*settling time*): lo que tarda en quedarse quieta junto a la consigna.

Un lazo de caudal o de presión es **rápido**: responde en segundos. La temperatura de un reactor es un lazo **lento**: minutos u horas.

¿Por qué? Hay mucha masa que calentar, y el calor tiene que cruzar la pared, como viste en la lección del reactor. Con los números de aquella lección (2000 kg de masa, calor específico de 2,0 kJ/(kg·K), U = 300 W/(m²·K) y A = 12 m²), la constante de tiempo es masa × calor específico / (U × A) = 4 000 000 / 3600 = 1111 segundos, unos **19 minutos**. Además hay que calentar antes la propia camisa y la pared, y el sensor va dentro de una vaina que retrasa la lectura.

### Sintonía
**Sintonizar** (*tuning*) es elegir ganancia, Ti y Td para un lazo concreto.

| Lazo | Qué ves en la tendencia |
|---|---|
| Agresivo (demasiada ganancia o integral muy rápida) | Se pasa de la consigna, oscila, la válvula no para de moverse |
| Perezoso (poca ganancia o integral lenta) | Tarda mucho en llegar y en corregir una perturbación |
| Bien sintonizado | Llega sin tardar, se pasa poco o nada y se queda quieto |

La sintonía la hace instrumentación y control, no el operador. En una planta farmacéutica, además, es un cambio en un sistema informatizado validado. ICH Q7 pide un sistema formal de control de cambios, y que los cambios en sistemas informatizados se autoricen, documenten y prueben. El Anexo 11 de las normas europeas pide lo mismo para la configuración. Tu parte es ver el síntoma, avisar y dejarlo registrado.

### Manual y automático
| Modo | Qué fijas tú | Qué hace el controlador |
|---|---|---|
| **Manual** | La salida (OP) | Nada: mantiene la salida que le diste |
| **Automático** | La consigna (SP) | Mueve la salida para llevar la PV a la consigna |

En manual mandas sobre la válvula. Si subes la salida del 30 al 45 %, la válvula abre 15 puntos más. Con una válvula de ejemplo que deja pasar 800 kg/h abierta del todo, y un caudal proporcional a la apertura, pasas de 240 a 360 kg/h. La temperatura hará lo que resulte, y nadie la corrige.

**Transferencia sin salto** (*bumpless transfer*). Al pasar de manual a automático, el controlador arranca desde la salida que tenías: si estaba al 45 %, empieza en 45 % y corrige desde ahí, sin golpe en la válvula.

**Seguimiento de la consigna** (*setpoint tracking*). En muchos lazos, mientras estás en manual la consigna va copiando a la PV. Así, al volver a automático el error es cero. Después tienes que **poner tú la consigna** que toca. Otros lazos conservan la consigna anterior. Comprueba siempre la consigna tras cambiar de modo.

**Cuándo se pasa a manual:** cuando lo dice el procedimiento; por ejemplo, con un sensor averiado o en una prueba de válvula. **Riesgos:** nadie corrige. Si arranca una reacción que da calor, la válvula se queda donde la dejaste. Si pasas un lazo a manual, vigílalo, anótalo y díselo al relevo.

### Control en cascada
En un reactor hay dos temperaturas: la de la masa, que es la que importa, y la de la camisa, que es la que la válvula cambia deprisa. El **control en cascada** (*cascade control*) pone un controlador para cada una:

- El **maestro** (*master* o *primary*) mide la temperatura de la masa. Su salida no va a ninguna válvula: es la **consigna** del esclavo.
- El **esclavo** (*slave* o *secondary*) mide la temperatura de la camisa y mueve las válvulas para cumplir esa consigna.

Ejemplo de escala: la salida del maestro, del 0 al 100 %, equivale a una consigna de camisa de −10 a 130 °C (valores de ejemplo). Con el maestro al 50 %, la camisa debe ir a −10 + 0,50 × 140 = **60 °C**. Al 75 %, a −10 + 0,75 × 140 = **95 °C**.

Mejora el control porque el esclavo es rápido. Si baja la presión del vapor, la camisa lo nota en seguida y el esclavo lo corrige antes de que la masa se entere. En una simulación de ejemplo, la misma perturbación en el servicio desvió la masa unos 3 °C con un solo lazo y menos de 0,5 °C en cascada.

El esclavo tiene tres modos:

| Modo del esclavo | Quién pone su consigna | Qué mandas tú |
|---|---|---|
| **Cascada** (*cascade*, consigna remota) | El maestro | La consigna de la masa, en el maestro |
| **Automático local** | Tú | La consigna de la camisa. El maestro queda fuera de juego |
| **Manual** | Nadie | La salida a las válvulas. Los dos controladores quedan fuera |

**Límite entre camisa y masa.** La camisa no puede estar mucho más caliente o más fría que la masa. En cascada se acota la consigna del esclavo a «temperatura de masa ± diferencia máxima». Con masa a 20 °C y una diferencia máxima de 50 °C, aunque el maestro pida 95 °C, la consigna de camisa se queda en **70 °C** y va subiendo con la masa.

### Rango partido
En **rango partido** (*split range*), una sola salida mueve dos válvulas, cada una en una mitad del recorrido. Ejemplo declarado para esta lección: del 0 al 50 % trabaja la válvula de frío y del 50 al 100 % la de calor.

| Salida | Válvula de frío | Válvula de calor |
|---|---|---|
| 0 % | 100 % abierta | Cerrada |
| 25 % | 50 % abierta | Cerrada |
| 50 % | Cerrada | Cerrada |
| 75 % | Cerrada | 50 % abierta |
| 100 % | Cerrada | 100 % abierta |

Las cuentas: apertura de frío = (50 − salida) × 2; apertura de calor = (salida − 50) × 2.

- Salida 20 %: frío (50 − 20) × 2 = **60 %**; calor cerrada.
- Salida 35 %: frío (50 − 35) × 2 = **30 %**.
- Salida 80 %: calor (80 − 50) × 2 = **60 %**; frío cerrada.

Una salida del 40 % no es «calentar poco»: es enfriar un poco.

### Relación y anticipativo, solo la idea
**Control de relación** (*ratio control*): mantiene un caudal en proporción fija con otro. Si un caudal debe ser el doble que otro y el primero mide 100 kg/h, la consigna del segundo es 200 kg/h.

**Control anticipativo** (*feedforward*): mide la perturbación antes de que afecte y corrige de antemano, sin esperar al error. Es ajustar el grifo en cuanto oyes que alguien tira de la cadena. Suele combinarse con un lazo cerrado, que corrige lo que la anticipación no acierta.

### Rampas de consigna
Con una **rampa** (*setpoint ramp*) la consigna avanza a una velocidad fija, en grados por minuto, y la PV la sigue de cerca.

> Duración = (consigna final − consigna inicial) / velocidad

- De 20 a 70 °C a 0,5 °C/min: 50 / 0,5 = **100 minutos**.
- Enfriar de 65 a 5 °C a 0,4 °C/min: 60 / 0,4 = **150 minutos**.

Si la PV se queda atrás de la rampa con la salida en el tope, el equipo no da más. Se avisa; no se fuerza.

### El elemento final: la válvula de control
La salida del controlador llega a una **válvula de control** (*control valve*). Su **posicionador** (*positioner*) es un pequeño controlador propio: compara la posición pedida con la real del vástago y ajusta el aire hasta que coinciden. Según el diseño, la válvula es **lineal** o **isoporcentual** (*equal percentage*); basta con que te suene.

Una válvula puede **quedarse pegada** (*stiction*): el vástago no se mueve con cambios pequeños de señal y, cuando al fin se suelta, da un salto. El controlador sube la salida poco a poco, la válvula salta y se pasa, el controlador baja, y vuelta a empezar. En la tendencia ves la salida en **diente de sierra** y la PV a saltos, en escalones, sin asentarse nunca. Es una avería mecánica: se avisa a mantenimiento. No se arregla tocando la sintonía.

### Qué vigilas, qué anotas y qué no haces
**Vigilas:** que cada lazo esté en el modo que pide la etapa; que la PV siga a la consigna; que la salida no lleve mucho rato en 0 o en 100 %; que la tendencia no oscile; que la diferencia entre camisa y masa respete su límite.

**Anotas:** consignas con su hora, cambios de modo con su motivo y cualquier comportamiento raro, avisando al responsable.

**No haces:** cambiar ganancia, Ti o Td; puentear un enclavamiento o un límite; dejar un lazo en manual sin vigilancia ni registro.

Esta lección explica cómo funcionan los lazos en general. Los modos permitidos, las consignas y las rampas de tu planta están en sus documentos: allí manda siempre el procedimiento vigente (SOP).
`,
  plant: `
Reactor ficticio R-301, vitrificado. El lazo TIC-301 mide la temperatura de la masa y es el maestro. El lazo TIC-302 mide la temperatura de la camisa, es el esclavo y trabaja en rango partido: del 0 al 50 % la válvula de frío TV-302A, del 50 al 100 % la de calor TV-302B.

La hoja pide enfriar de 65 a 5 °C con una rampa de 0,4 °C/min para cristalizar el producto ficticio FX-301. Calculas la duración: 60 / 0,4 = 150 minutos. Si empiezas a las 14:10, la rampa termina a las 16:40.

A los 40 minutos la consigna de la rampa va por 65 − 0,4 × 40 = 49 °C, pero la masa marca 53 °C y se va quedando atrás. Miras la carátula del esclavo: salida al 46 %, lejos del tope, así que frío hay. Entonces ves el modo: TIC-302 está en automático local, con una consigna de camisa fija de 45 °C. Alguien lo sacó de cascada durante una comprobación y no lo devolvió. El maestro lleva un rato pidiendo más frío sin que nadie le escuche.

No tocas nada por tu cuenta. Avisas al jefe de turno. Con su autorización y siguiendo el procedimiento, el esclavo vuelve a cascada. La transferencia es sin salto: la salida arranca en el 46 % que tenía y baja poco a poco; con el 30 % la válvula de frío queda abierta (50 − 30) × 2 = 40 %. La masa recupera la rampa en unos minutos, sin tirón, porque el límite de diferencia entre camisa y masa sigue activo.

Queda anotado: hora, lazo encontrado en automático local, temperatura de masa 4 °C por encima de la rampa, aviso y vuelta a cascada. Calidad decidirá si ese retraso afecta a la cristalización.
`,
  batchRecord: `
- **Consignas** (*set points*) que fijas tú, con su hora: temperatura de masa, velocidad de la rampa, consigna final.
- **Hora de inicio y de fin de cada rampa**, y si la duración real coincide con la calculada.
- **Temperatura de masa y de camisa** a los intervalos que marque la hoja, y la diferencia entre ambas cuando hay un límite.
- **Modo de los lazos** en las etapas críticas, si la hoja lo pide: cascada, automático o manual.
- **Cambios de modo**: hora, lazo, de qué modo a cuál, motivo y quién lo autorizó. El sistema suele guardar además su propio registro de quién cambió qué y cuándo.
- **Comportamientos anómalos**: oscilación, salida mucho tiempo en 0 o 100 %, PV que no sigue a la consigna, válvula que va a saltos. Con hora, a quién avisaste y qué se hizo.
- **Tendencias** (*trends*) impresas o adjuntas de las etapas críticas, cuando la hoja las pide.
- Lo que no verás nunca como tarea tuya: cambiar la ganancia, el tiempo integral o el derivativo. Eso va por control de cambios.
`,
  terms: [
    { es: "Error", en: "Error", def: "Diferencia entre la consigna y la variable de proceso: SP − PV." },
    { es: "Acción inversa / acción directa", en: "Reverse action / direct action", def: "Sentido del controlador: en inversa la salida baja cuando la PV sube; en directa la salida sube cuando la PV sube." },
    { es: "Histéresis", en: "Hysteresis", def: "Margen entre el punto de encendido y el de apagado en un control todo o nada." },
    { es: "Ganancia", en: "Gain", def: "Cuánto cambia la salida por cada 1 % de error en la acción proporcional." },
    { es: "Banda proporcional", en: "Proportional band", def: "Otra forma de dar la ganancia: BP = 100 / ganancia, en tanto por ciento." },
    { es: "Error permanente", en: "Offset", def: "Error que no desaparece en un control solo proporcional." },
    { es: "Tiempo integral", en: "Integral time / reset time", def: "Minutos que tarda la integral en repetir el aporte de la proporcional con error constante." },
    { es: "Saturación de la integral", en: "Reset windup / integral windup", def: "Acumulación de la integral cuando la salida ya no puede hacer más; causa rebasamiento." },
    { es: "Tiempo muerto", en: "Dead time", def: "Tiempo que pasa desde que cambia la salida hasta que la PV empieza a moverse." },
    { es: "Rebasamiento", en: "Overshoot", def: "Lo que la PV se pasa de la consigna antes de asentarse." },
    { es: "Transferencia sin salto", en: "Bumpless transfer", def: "Cambio de modo en el que la salida arranca desde el valor que tenía, sin golpe en la válvula." },
    { es: "Maestro y esclavo", en: "Master and slave (primary and secondary)", def: "En cascada, el maestro fija la consigna del esclavo, y el esclavo mueve la válvula." },
    { es: "Rango partido", en: "Split range", def: "Una sola salida que mueve dos válvulas, cada una en una parte del recorrido." },
    { es: "Válvula pegada", en: "Stiction", def: "Rozamiento que impide a la válvula seguir cambios pequeños; se mueve a saltos." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Un controlador de temperatura tiene la consigna en 85 °C y el sensor marca 78,5 °C. ¿Cuánto vale el error (SP − PV)?",
      answer: 6.5,
      tolerance: 0.01,
      unit: "°C",
      explain: "Error = SP − PV = 85 − 78,5 = 6,5 °C. Es positivo: faltan grados para llegar a la consigna.",
    },
    {
      kind: "choice",
      q: "Un lazo enfría un reactor con agua fría. Su válvula abre más cuanta más señal recibe. Si la temperatura sube por encima de la consigna, ¿qué debe hacer la salida y cómo se llama esa acción?",
      options: [
        "Debe bajar, para dar menos agua: es acción inversa",
        "Debe quedarse quieta hasta que actúe la integral",
        "Debe subir, para dar más agua fría: es acción directa",
        "Debe subir, para dar más agua fría: es acción inversa",
      ],
      answer: 2,
      explain: "Si la temperatura sube hace falta más agua fría, así que la salida debe subir. PV sube y salida sube: eso es acción directa. Para calentar con vapor es al revés, acción inversa.",
    },
    {
      kind: "number",
      q: "Un controlador solo proporcional tiene ganancia 1,5 y sesgo del 40 %. El error es del 8 %. ¿Cuál es la salida?",
      answer: 52,
      tolerance: 0.01,
      unit: "%",
      explain: "Salida = ganancia × error + sesgo = 1,5 × 8 + 40 = 12 + 40 = 52 %.",
    },
    {
      kind: "number",
      q: "Un controlador tiene ganancia 2,5. ¿Cuál es su banda proporcional?",
      answer: 40,
      tolerance: 0.01,
      unit: "%",
      explain: "BP = 100 / ganancia = 100 / 2,5 = 40 %. Ganancia alta significa banda estrecha.",
    },
    {
      kind: "number",
      q: "Un controlador tiene ganancia 1,5 y tiempo integral de 6 minutos por repetición. El error se mantiene constante en el 4 % durante 9 minutos. ¿Cuánto ha añadido la acción integral a la salida en ese tiempo?",
      answer: 9,
      tolerance: 0.02,
      unit: "%",
      explain: "Aporte de la integral = ganancia × error × tiempo / Ti = 1,5 × 4 × 9 / 6 = 9 %. La proporcional pone 6 % y la integral repite ese 6 % cada 6 minutos: en 9 minutos, una vez y media.",
    },
    {
      kind: "choice",
      q: "Calientas un reactor frío. La salida lleva 40 minutos al 100 % y la masa por fin llega a la consigna, pero la válvula sigue muy abierta y la temperatura se pasa varios grados. ¿Cuál es la explicación más probable?",
      options: [
        "La integral ha acumulado error con la salida en el tope y tarda en deshacerlo",
        "La acción derivativa ha amplificado el ruido del sensor de temperatura",
        "El controlador está configurado en acción directa en lugar de inversa",
        "La válvula de calor se ha quedado pegada y se mueve dando saltos",
      ],
      answer: 0,
      explain: "Es la saturación de la integral: con la salida ya al 100 %, la integral sigue sumando error y luego solo lo deshace con error de signo contrario, es decir, pasándose de la consigna. Tú lo anotas y avisas; la protección y la sintonía son cosa de instrumentación.",
    },
    {
      kind: "number",
      q: "Un lazo trabaja en rango partido: del 0 al 50 % de salida actúa la válvula de frío (100 % abierta con salida 0 %, cerrada con salida 50 %) y del 50 al 100 % la de calor. La salida está en el 30 %. ¿Qué apertura tiene la válvula de frío?",
      answer: 40,
      tolerance: 0.01,
      unit: "%",
      explain: "Apertura de frío = (50 − salida) × 2 = (50 − 30) × 2 = 40 %. La válvula de calor está cerrada, porque la salida está por debajo del 50 %.",
    },
    {
      kind: "number",
      q: "La hoja pide enfriar la masa de 65 °C a 5 °C con una rampa de consigna de 0,4 °C/min. ¿Cuántos minutos dura la rampa?",
      answer: 150,
      tolerance: 0.01,
      unit: "min",
      explain: "Duración = (65 − 5) / 0,4 = 60 / 0,4 = 150 min, es decir, dos horas y media.",
    },
    {
      kind: "choice",
      q: "En un reactor con cascada, el esclavo (temperatura de camisa) está en automático local con consigna de 45 °C. Cambias la consigna de masa en el maestro de 60 a 50 °C. ¿Qué ocurre?",
      options: [
        "El esclavo baja su consigna enseguida, porque el maestro siempre tiene prioridad",
        "El maestro pasa a manual por sí solo y abre del todo la válvula de frío",
        "Las dos válvulas se cierran hasta que alguien devuelva el lazo a cascada",
        "Nada en la camisa: sigue a 45 °C, porque el esclavo no escucha al maestro",
      ],
      answer: 3,
      explain: "En automático local la consigna del esclavo la pone el operador y el maestro queda fuera de juego. Solo en modo cascada la salida del maestro es la consigna del esclavo. Por eso hay que comprobar el modo de los dos lazos.",
    },
    {
      kind: "choice",
      q: "La tendencia de un lazo de caudal muestra la salida en diente de sierra y el caudal a saltos, sin asentarse, desde hace una hora. ¿Qué haces?",
      options: [
        "Bajo yo mismo la ganancia del controlador hasta que deje de oscilar",
        "Lo anoto, aviso al responsable y a mantenimiento, y sigo el procedimiento",
        "Paso el lazo a manual y lo dejo así sin registrarlo hasta el relevo",
        "Fuerzo la válvula desde campo para ayudar al lazo a encontrar su sitio",
      ],
      answer: 1,
      explain: "Ese dibujo apunta a una válvula pegada, que es una avería mecánica. El operador no cambia la sintonía ni fuerza equipos: registra lo que ve, avisa y actúa según el procedimiento. Los parámetros solo se cambian por control de cambios.",
    },
  ],
};
