import type { Lesson } from "./types";

export const energiaYCalor: Lesson = {
  slug: "energia-y-calor",
  level: 1,
  order: 2.2,
  title: "Energía, calor y temperatura: julios, kilovatios y calor específico",
  titleEn: "Energy, heat and temperature",
  minutes: 20,
  summary:
    "Qué es la energía y el trabajo, por qué calor y temperatura no son lo mismo, la potencia en kW y la energía en kWh, el calor específico del agua y del tolueno, la fórmula Q = m × cp × ΔT con cuatro ejemplos de planta y cómo entra y sale el calor de un reactor por la camisa.",
  body: `
En planta pasas el turno calentando y enfriando: subir la masa del reactor a reflujo, bajarla para cristalizar, secar una torta con la camisa caliente. Todo eso es mover **energía**. Esta lección te da las palabras y una sola fórmula para entenderlo. Se apoya en dos lecciones anteriores: en «Unidades de medida a fondo» viste el julio y el vatio, y en «La materia a fondo» que la temperatura mide lo que se agitan las partículas.

### Qué es la energía
La **energía** (*energy*) es lo que permite mover algo o cambiarlo. El libro de instrumentación de Tony Kuphaldt la describe como «lo que permite o produce movimiento», incluido el movimiento de los átomos dentro de una sustancia. Tiene muchas formas y pasa de una a otra:

- La corriente eléctrica que hace girar el motor del agitador.
- El calor que trae el vapor a la camisa.
- La energía guardada en los reactivos, que sale como calor en una reacción («Calor de reacción y reacciones descontroladas»).

La regla de oro es la **conservación de la energía** (*conservation of energy*): la energía no se crea ni se destruye, solo cambia de forma o de sitio. Si el reactor gana calor, ese calor ha salido de algún sitio: del vapor, de la reacción o del motor.

### Trabajo: empujar a lo largo de un camino
El **trabajo** (*work*) es la energía que se gasta al empujar algo y moverlo en la dirección del empuje. Subir un saco a la tolva es trabajo; sujetarlo quieto, no.

Su unidad, como la de cualquier energía, es el **julio** (*joule*, J): empujar con un newton a lo largo de un metro, como viste en «Unidades de medida a fondo». Un ejemplo para hacerte una idea: un saco de 25 kg pesa 25 × 9,81 = 245 newtons, así que subirlo un metro cuesta unos **245 J**. Un julio es poquísimo; por eso en planta se cuenta en kilojulios (kJ, mil julios) y megajulios (MJ, un millón).

### Calor y temperatura no son lo mismo
En la calle se dice «hace calor» por «hace mucha temperatura». En planta hay que separarlas:

- La **temperatura** (*temperature*) dice **lo agitadas que están** las partículas de una cosa. Se mide con un termómetro, en °C.
- El **calor** (*heat*) es **energía que pasa** de un cuerpo a otro porque están a distinta temperatura. Se mide en julios.

Piensa en una taza de café a 80 °C y en una piscina a 25 °C. El café está a más temperatura, pero la piscina guarda muchísima más energía, porque tiene muchísima más agua. Si echas el café en la piscina, la piscina apenas se calienta: hay poco calor que repartir entre mucha masa.

El calor siempre viaja **de lo caliente a lo frío**, solo, sin que nadie lo empuje. Deja la taza en la mesa: el café se enfría, la mesa y el aire se templan un poco, y el paso de calor se para cuando todo está a la misma temperatura. Sin diferencia de temperatura no pasa calor. Para sacar calor de algo frío y echarlo a algo más caliente hace falta una máquina que gaste energía, como la enfriadora de la planta («Intercambio de calor y frío a fondo»).

### Potencia: lo rápido que pasa la energía
Imagina que llenas un cubo con un grifo. El agua del cubo es la **energía**; lo abierto que está el grifo es la **potencia** (*power*): cuánta energía pasa cada segundo.

La unidad de potencia es el **vatio** (*watt*, W): un julio cada segundo. El Real Decreto 2032/2009 lo define así (W = J/s). En planta se usa el **kilovatio** (kW): mil julios, es decir, **1 kJ cada segundo**.

Si conoces la potencia y el tiempo, sabes la energía:

> energía = potencia × tiempo

De ahí sale el **kilovatio hora** (*kilowatt-hour*, kWh), la unidad de la factura de la luz: un kilovatio durante una hora. Como una hora son 3600 segundos, **1 kWh = 3600 kJ**.

| Unidad | Qué mide | Equivalencia |
|---|---|---|
| J, kJ, MJ | Energía (calor, trabajo) | 1 kJ = 1000 J; 1 MJ = 1000 kJ |
| W, kW | Potencia: energía por segundo | 1 kW = 1 kJ cada segundo |
| kWh | Energía | 1 kWh = 3600 kJ |

Un hervidor de agua de 2 kW (valor de ejemplo) encendido 3 minutos gasta 2 kJ/s × 180 s = **360 kJ**, que son 0,1 kWh. No confundas kW con kWh: el primero es el grifo; el segundo, el agua del cubo.

### Calor específico: lo que cuesta calentar cada sustancia
Con la misma camisa, un reactor lleno de tolueno se calienta antes que uno lleno de agua. Cada sustancia «pide» una cantidad distinta de energía para subir un grado. Esa cantidad es el **calor específico** (*specific heat capacity*, cp): la energía que hace falta para subir **1 °C un kilo** de sustancia. El Real Decreto 2032/2009 la llama **capacidad térmica másica** y le da la unidad J/(kg·K); en planta se usa kJ/(kg·K). Recuerda que una subida de 1 °C es igual que una de 1 K.

| Sustancia (líquida, a unos 25 °C) | Calor específico |
|---|---|
| Agua | 4,18 kJ/(kg·K) |
| Metanol | 2,55 kJ/(kg·K) |
| Acetona | 2,18 kJ/(kg·K) |
| Tolueno | 1,70 kJ/(kg·K) |

El agua es la que más cuesta calentar de la tabla: hacen falta 4,18 kJ para subir un grado un kilo. Eso son unas diecisiete veces los 245 J de subir el saco de 25 kg a un metro. El tolueno necesita menos de la mitad que el agua. Cuanto **más bajo** es el calor específico, **más fácil** es calentar y enfriar la sustancia, y más sube su temperatura con el mismo calor. El calor específico cambia algo con la temperatura; el valor de tu producto lo da su ficha o el procedimiento. En otras lecciones verás 2,0 kJ/(kg·K) como valor de ejemplo para un disolvente: está dentro de este rango.

### La fórmula del calor sensible
El calor que cambia la temperatura de algo sin cambiar su estado se llama **calor sensible** (*sensible heat*), porque se nota en el termómetro. Se calcula así:

> Q = m × cp × ΔT

- **Q**: el calor que entra o sale, en kJ.
- **m**: la masa, en kg.
- **cp**: el calor específico, en kJ/(kg·K).
- **ΔT** («delta T»): cuántos grados sube o baja, temperatura final menos inicial.

Las unidades se tachan solas: kg × kJ/(kg·K) × K deja kJ.

**Ejemplo 1: calentar agua.** 500 kg de agua de 20 a 50 °C suben 30 °C:
Q = 500 × 4,18 × 30 = **62 700 kJ**. En kilovatios hora: 62 700 / 3600 = 17,4 kWh.

**Ejemplo 2: el mismo calor a dos líquidos.** Das 10 000 kJ a 200 kg de agua y otros 10 000 kJ a 200 kg de tolueno. Despejando ΔT = Q / (m × cp):
- Agua: 10 000 / (200 × 4,18) = **12,0 °C**.
- Tolueno: 10 000 / (200 × 1,70) = **29,4 °C**.

Con el mismo calor y la misma masa, el tolueno sube unas 2,5 veces más. Por eso una reacción que suelta calor dentro de un disolvente lo calienta mucho más que si fuera agua.

**Ejemplo 3: potencia y tiempo.** La camisa de un reactor da 50 kW de forma constante (valor de ejemplo). ¿Cuánto tarda en calentar el agua del ejemplo 1? Tiempo = energía / potencia = 62 700 kJ / 50 kJ/s = 1254 s, unos **21 minutos**. Los mismos 500 kg de tolueno, también 30 °C, piden 500 × 1,70 × 30 = 25 500 kJ: 25 500 / 50 = 510 s, unos **8,5 minutos**. En la realidad la potencia no es constante y hay pérdidas, así que tarda más: lo verás en el último apartado.

**Ejemplo 4: enfriar.** Hay que enfriar 800 kg de tolueno de 60 a 20 °C. ΔT = 20 − 60 = −40 °C, y Q = 800 × 1,70 × (−40) = −54 400 kJ. El signo menos dice que el calor **sale**: la camisa tiene que **retirar 54 400 kJ**.

### Calor latente: cuando el termómetro se para
En «La materia a fondo» viste la meseta: mientras un líquido hierve, el calor se gasta en convertirlo en vapor y la temperatura no sube. Ese es el **calor latente** (*latent heat*), y la fórmula Q = m × cp × ΔT no sirve para él; sus números están en «Vapor y calderas a fondo».

### Cómo entra y sale el calor de un reactor
El reactor tiene una **camisa** (*jacket*): una segunda pared alrededor, por la que circula vapor, agua o un fluido térmico. El calor cruza la pared del reactor desde el lado caliente al frío. Para calentar, la camisa va más caliente que la masa; para enfriar, más fría. Cuánto calor pasa cada segundo depende de cuatro cosas:

1. **La diferencia de temperatura** entre camisa y masa. Cuanto mayor, más calor por segundo. Por eso, cuando la masa se acerca a la temperatura de la camisa, el calentamiento se frena y los últimos grados son los más lentos.
2. **La superficie mojada**: la parte de la pared que toca el líquido. Con poca carga, menos superficie y menos calor.
3. **La agitación.** Sin agitar, el líquido pegado a la pared se calienta y se queda ahí. La nota técnica de prevención NTP 528, del Instituto Nacional de Seguridad y Salud en el Trabajo (INSST), cuenta la velocidad y el tipo de agitación entre los factores que afectan a la transferencia de calor en un reactor.
4. **El estado de la pared**: suciedad o costras frenan el paso, como un abrigo.

Y a veces el calor nace dentro: una reacción que desprende calor lo suelta en la masa, y la camisa tiene que llevárselo al mismo ritmo.

Lo verás con números en el nivel 11 («Vapor y calderas a fondo» e «Intercambio de calor y frío a fondo») y en el nivel 12 («El reactor a fondo», con la fórmula de la camisa, y «Agitación a fondo»).

### Lo que hace el operador
- Mira siempre **dos temperaturas**: la de la masa y la de la camisa. La diferencia te dice si el calor está pasando.
- Si la camisa está caliente y la masa no sube, algo falla: agitador parado, camisa con condensado, válvula cerrada. Avisa.
- Un calentamiento con agua tarda más que con disolvente: es física, no una avería.

Los valores de ejemplo sirven para entender. En planta manda siempre el procedimiento vigente (SOP).
`,
  plant: `
Turno de mañana. En el reactor R-118 tienes 1000 kg de tolueno a 20 °C para una etapa del intermedio ficticio QT-17. La hoja dice: *«Calentar la masa a 60 °C (58–62 °C) con agua caliente en camisa. Anotar hora de inicio y de llegada.»*

Haces la cuenta en un papel aparte solo para entender lo que vas a ver: 1000 × 1,70 × 40 = 68 000 kJ. Si la camisa diera de media unos 40 kW (valor de ejemplo), serían 68 000 / 40 = 1700 s, unos 28 minutos. Arrancas el agitador, compruebas que gira y abres el agua caliente. La masa llega a 60 °C a los 31 minutos: dentro de lo esperable, porque los últimos grados tardan más.

Por la tarde, el mismo reactor recibe 1000 kg de agua para un lavado, también de 20 a 60 °C. Tu compañero, nuevo en el turno, se extraña: lleva casi una hora calentando y aún no ha llegado. ¿Avería? Le explicas que no: el agua necesita 4,18 kJ por kilo y grado y el tolueno 1,70, así que con la misma camisa el agua pide unas dos veces y media más energía: 167 200 kJ, unos 70 minutos a 40 kW.

Aun así, miráis juntos las dos temperaturas. La camisa está a su consigna, la diferencia con la masa va bajando poco a poco y el agitador gira. Todo cuadra. Anotáis la hora de llegada y no hay nada que comunicar.
`,
  batchRecord: `
En la hoja de producción (*batch record*) no apuntas julios ni kilovatios: apuntas lo que miden los instrumentos y lo que pide la instrucción. En una etapa de calentar o enfriar verás casillas como estas:

- **Medio de la camisa** (vapor, agua caliente, agua de refrigeración, fluido térmico) y su consigna o presión, si la hoja lo pide.
- **Temperatura de masa** y, si se pide, **temperatura de camisa**, a los intervalos marcados, con hora.
- **Hora de inicio y hora de llegada** a la temperatura objetivo, y la temperatura alcanzada dentro de su rango.
- **Agitador en marcha** y sus revoluciones, si la hoja lo pide.
- **Observaciones**: si el calentamiento o el enfriamiento tarda mucho más de lo habitual, o si la camisa está caliente y la masa no sube, se anota y se avisa al responsable de turno.
`,
  terms: [
    { es: "Energía", en: "Energy", def: "Lo que permite mover algo o cambiarlo. No se crea ni se destruye: cambia de forma o de sitio. Se mide en julios." },
    { es: "Trabajo", en: "Work", def: "Energía que se gasta al empujar algo y moverlo en la dirección del empuje. Se mide en julios." },
    { es: "Julio", en: "Joule (J)", def: "Unidad de energía, trabajo y calor del Sistema Internacional: empujar con un newton a lo largo de un metro." },
    { es: "Temperatura", en: "Temperature", def: "Medida de lo agitadas que están las partículas de una sustancia. Se mide en °C o en K." },
    { es: "Calor", en: "Heat", def: "Energía que pasa de un cuerpo caliente a otro más frío por su diferencia de temperatura." },
    { es: "Potencia", en: "Power", def: "Energía que pasa o se gasta cada segundo. Se mide en vatios." },
    { es: "Kilovatio", en: "Kilowatt (kW)", def: "Mil vatios: 1 kJ cada segundo." },
    { es: "Kilovatio hora", en: "Kilowatt-hour (kWh)", def: "Energía de un kilovatio durante una hora: 3600 kJ." },
    { es: "Calor específico", en: "Specific heat capacity (cp)", def: "Energía para subir 1 °C un kilo de sustancia, en kJ/(kg·K). Agua: 4,18; tolueno: 1,70." },
    { es: "Calor sensible", en: "Sensible heat", def: "Calor que cambia la temperatura sin cambiar el estado. Q = m × cp × ΔT." },
    { es: "Calor latente", en: "Latent heat", def: "Calor que se gasta en un cambio de estado, como hervir, sin que suba la temperatura." },
    { es: "Camisa", en: "Jacket", def: "Segunda pared alrededor del reactor por la que circula el fluido que lo calienta o lo enfría." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Hay que calentar 500 kg de agua de 20 a 50 °C. Con cp del agua = 4,18 kJ/(kg·K), ¿cuántos kJ hacen falta?",
      answer: 62700,
      tolerance: 0.01,
      unit: "kJ",
      explain: "Q = m × cp × ΔT = 500 × 4,18 × 30 = 62700 kJ.",
    },
    {
      kind: "choice",
      q: "Das la misma cantidad de calor a 200 kg de agua (cp = 4,18) y a 200 kg de tolueno (cp = 1,70), los dos a 20 °C. ¿Qué pasa?",
      options: [
        "Los dos suben lo mismo, porque tienen la misma masa y el mismo calor",
        "El tolueno sube unas 2,5 veces más, porque su calor específico es menor",
        "El agua sube más, porque su calor específico es más alto que el del tolueno",
        "Ninguno cambia de temperatura hasta que empiezan a hervir los dos",
      ],
      answer: 1,
      explain: "ΔT = Q / (m × cp): con el mismo Q y la misma m, sube más el de cp más bajo. 4,18 / 1,70 = 2,46, así que el tolueno sube unas 2,5 veces más.",
    },
    {
      kind: "number",
      q: "¿Cuánto calor hace falta para calentar 200 kg de tolueno (cp = 1,70 kJ/(kg·K)) de 20 a 50 °C?",
      answer: 10200,
      tolerance: 0.01,
      unit: "kJ",
      explain: "Q = 200 × 1,70 × 30 = 10200 kJ.",
    },
    {
      kind: "number",
      q: "Un equipo consume 5 kWh. ¿Cuántos kJ son? (1 kWh = 3600 kJ)",
      answer: 18000,
      tolerance: 0.01,
      unit: "kJ",
      explain: "5 kWh × 3600 kJ/kWh = 18000 kJ.",
    },
    {
      kind: "number",
      q: "Hay que dar 36 000 kJ a una masa con una camisa que aporta 40 kW constantes (1 kW = 1 kJ/s). Sin pérdidas, ¿cuántos minutos tarda?",
      answer: 15,
      tolerance: 0.01,
      unit: "min",
      explain: "Tiempo = energía / potencia = 36000 / 40 = 900 s, que son 15 min.",
    },
    {
      kind: "number",
      q: "A 100 kg de agua (cp = 4,18 kJ/(kg·K)) le das 8360 kJ. ¿Cuántos grados sube?",
      answer: 20,
      tolerance: 0.01,
      unit: "°C",
      explain: "ΔT = Q / (m × cp) = 8360 / (100 × 4,18) = 8360 / 418 = 20 °C.",
    },
    {
      kind: "choice",
      q: "Una chispa diminuta está muy caliente y un depósito de 2000 kg de agua está a 40 °C. ¿Qué es correcto?",
      options: [
        "La chispa tiene más temperatura y también guarda más energía que el agua",
        "Los dos guardan la misma energía, porque los dos están calientes",
        "El agua tiene más temperatura, porque tiene mucha más masa que la chispa",
        "La chispa tiene más temperatura, pero el agua guarda mucha más energía",
      ],
      answer: 3,
      explain: "La temperatura dice lo agitadas que están las partículas; la energía guardada depende además de la masa y del calor específico. La chispa es diminuta y el depósito, enorme.",
    },
    {
      kind: "choice",
      q: "Calientas un reactor con la camisa a 80 °C. La masa sube rápido al principio y cada vez más despacio al acercarse a 75 °C. ¿Por qué?",
      options: [
        "Porque baja la diferencia de temperatura entre camisa y masa y pasa menos calor",
        "Porque el calor específico de la masa se multiplica al acercarse a 75 °C",
        "Porque la camisa deja de calentar cuando la masa pasa de 70 °C",
        "Porque el termómetro de masa pierde precisión a temperaturas altas",
      ],
      answer: 0,
      explain: "El calor pasa por la diferencia de temperatura: cuanto más se acerca la masa a la camisa, menor es esa diferencia y menos calor entra cada segundo. Los últimos grados son los más lentos.",
    },
    {
      kind: "choice",
      q: "La camisa está a su consigna, bien caliente, pero la masa casi no sube. Ves que el agitador está parado. ¿Qué es lo más probable?",
      options: [
        "El calor específico de la masa ha bajado y ya no se puede calentar",
        "La masa ha llegado a su meseta de ebullición y es normal que no suba",
        "Sin agitar, el líquido junto a la pared no se renueva y pasa mucho menos calor",
        "La camisa enfría en vez de calentar porque el agitador manda sobre ella",
      ],
      answer: 2,
      explain: "La agitación es uno de los factores de los que depende el paso de calor en un reactor (NTP 528). Agitador parado: menos calor y mezcla desigual. Se avisa y se sigue el procedimiento.",
    },
    {
      kind: "number",
      q: "Hay que enfriar 800 kg de tolueno (cp = 1,70 kJ/(kg·K)) de 60 a 20 °C. ¿Cuántos kJ tiene que retirar la camisa?",
      answer: 54400,
      tolerance: 0.01,
      unit: "kJ",
      explain: "Q = 800 × 1,70 × (20 − 60) = −54400 kJ. El signo menos dice que el calor sale: hay que retirar 54400 kJ.",
    },
  ],
};
