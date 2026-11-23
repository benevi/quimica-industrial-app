import type { Lesson } from "./types";

export const agitacionAFondo: Lesson = {
  slug: "agitacion-a-fondo",
  level: 12,
  order: 2.5,
  title: "Agitación a fondo: rodetes, potencia y mezcla en el reactor",
  titleEn: "Agitation and mixing in depth",
  minutes: 38,
  summary:
    "Para qué se agita, cómo es un agitador por dentro, qué hace cada tipo de rodete, qué dicen el número de Reynolds y la potencia, por qué doblar las rpm multiplica el consumo por ocho y qué hace el operador si el agitador se para en mitad de una adición.",
  body: `
En «El reactor a fondo» viste las piezas del reactor. Aquí nos quedamos solo con el agitador: por qué gira a la velocidad que gira, qué significan las rpm y los amperios de la pantalla y qué hacer cuando algo cambia. De él dependen la mezcla, la temperatura y, en una reacción que desprende calor, la seguridad.

### Para qué se agita

Piensa en un vaso de cacao en polvo con leche. Sin remover, el polvo se queda en el fondo y, si lo calientas, lo de abajo se quema. La cuchara hace cuatro trabajos, los mismos que el agitador:

1. **Mezclar** (*blending*): que todo el líquido tenga la misma composición y la misma temperatura.
2. **Mantener los sólidos en suspensión** (*solids suspension*): que los cristales o el polvo no se asienten en el fondo.
3. **Dispersar** (*dispersion*): repartir en gotas o burbujas algo que no se mezcla solo, como un segundo líquido o un gas.
4. **Llevar el calor a la camisa**: traer el líquido hasta la pared, donde se calienta o se enfría, y devolverlo al centro.

El libro de texto de Tony Kuphaldt *Lessons in Industrial Instrumentation* lo resume: para mezclar, solo el flujo con remolinos garantiza una mezcla completa, y para intercambiar calor todo el líquido tiene que llegar a tocar la pared.

### El agitador por dentro

| Parte | En inglés | Qué hace |
|---|---|---|
| Motor eléctrico | *Electric motor* | Da el giro. Gira mucho más rápido que el rodete |
| Variador de frecuencia | *Variable frequency drive* (VFD) | Cambia la velocidad del motor cambiando la frecuencia de la corriente |
| Reductor | *Gearbox* | Baja la velocidad y, a cambio, multiplica la fuerza de giro |
| Cierre mecánico | *Mechanical seal* | Tapa el paso del eje por la tapa del reactor |
| Eje | *Shaft* | Barra que baja desde la tapa hasta el rodete |
| Rodete | *Impeller* | Las palas que empujan el líquido |
| Deflector | *Baffle* | Pieza fija dentro del reactor que frena el giro del líquido |

**El motor y el variador.** En un motor de corriente alterna la velocidad depende de la frecuencia. El libro de Kuphaldt da la velocidad de sincronismo: S = 120 × f / n, con f en hercios y n el número de polos. Con 50 Hz y 4 polos: 120 × 50 / 4 = **1500 rpm**; el motor real gira algo menos. El variador cambia la frecuencia y con ella la velocidad: es lo que hay detrás de la consigna de rpm de la pantalla.

**El reductor.** Si el motor da 1450 rpm (valor de ejemplo) y el rodete debe girar a 90 rpm, el reductor divide la velocidad entre 1450 / 90 = **16,1**. Es como los piñones de una bicicleta: según Kuphaldt, en una pareja de engranajes el pequeño tiene más velocidad y menos par, y el grande más par y menos velocidad. El par (*torque*) es la fuerza de giro que hace falta para mover un líquido espeso.

**El cierre mecánico doble.** Ya lo viste en «El reactor a fondo»: dos parejas de anillos y, entre ellas, un **líquido de barrera** (*barrier fluid*) a más presión que el reactor. Si una cara falla, lo que escapa es líquido de barrera y no vapores del reactor. Para ti son dos lecturas: **nivel** y **presión** del depósito de barrera, dentro de marcas antes de arrancar y durante todo el lote.

### Los rodetes: cómo empuja cada uno

El rodete puede mover el líquido de dos formas. En el **flujo axial** (*axial flow*) lo empuja a lo largo del eje, hacia abajo o hacia arriba, como un ventilador de techo. En el **flujo radial** (*radial flow*) lo lanza hacia los lados, contra la pared, como cuando giras rápido una cuchara plana.

| Rodete | En inglés | Flujo | Para qué se usa |
|---|---|---|---|
| Palas inclinadas | *Pitched blade turbine* | Sobre todo axial | Uso general. Levanta bien los sólidos del fondo |
| Turbina Rushton | *Rushton turbine* | Radial | Disco con palas planas verticales. Corta mucho el líquido: se usa para dispersar gas |
| Hélice | *Propeller* | Axial | Palas pequeñas que giran rápido. Líquidos poco viscosos |
| Ancla | *Anchor* | Rasca cerca de la pared | Gira despacio pegada a la pared. Productos espesos y mejor paso de calor en la pared |
| Impulsor de retroceso | *Retreat curve impeller* | Radial | Tres palas curvadas hacia atrás, montado muy cerca del fondo. El clásico del reactor vitrificado |

- **Para mantener sólidos en suspensión, mejor flujo axial.** El chorro baja, barre el fondo y sube por la pared arrastrando los cristales.
- **La turbina Rushton trabaja bien con gas**, pero su chorro radial no es el mejor para levantar sólidos. A veces se montan dos rodetes en el mismo eje: uno abajo para el gas y otro de palas inclinadas encima.
- **El impulsor de retroceso**, al ir tan bajo, sigue cubierto con poco líquido y permite trabajar con niveles muy distintos. En el vitrificado las piezas son redondeadas, porque el vidrio no aguanta bien las aristas.

El tipo de rodete lo decide el diseño del proceso; saber cuál tienes te ayuda a entender lo que ves.

### Laminar o turbulento: el número de Reynolds del agitador

En «Fluidos a fondo» aprendiste el número de Reynolds de una tubería: Re = ρ × v × D / μ. El Real Decreto 2032/2009, de unidades legales de medida, lo recoge como número sin unidad: Re = ρvl/η, con una velocidad y una longitud características.

En un tanque agitado la velocidad la da el rodete y la longitud es su diámetro. Se escribe así:

> Re = ρ × N × D² / μ

- **ρ** es la densidad del líquido, en kg/m³.
- **N** es la velocidad de giro en **vueltas por segundo**. Se pasa desde las rpm dividiendo entre 60: 90 rpm son 1,5 vueltas por segundo.
- **D** es el diámetro del rodete, en metros (de punta a punta de las palas, no el del reactor).
- **μ** es la viscosidad, en Pa·s.

Las unidades, kg/m³ × 1/s × m² / (kg/(m·s)), se cancelan: queda un número sin unidad.

**Ejemplo 1: un disolvente fluido.** Rodete de 0,9 m a 90 rpm (1,5 vueltas por segundo), líquido de densidad 870 kg/m³ (la del tolueno) y viscosidad 0,001 Pa·s (valor de ejemplo, del orden del agua). Re = 870 × 1,5 × 0,9² / 0,001 = 870 × 1,5 × 0,81 / 0,001 = **1057050**. Pasa del millón: el líquido se mueve a remolinos, en régimen turbulento.

**Ejemplo 2: una masa espesa.** Mismo rodete y misma velocidad, pero densidad 1100 kg/m³ y viscosidad 5 Pa·s (valores de ejemplo para una pasta espesa, como una miel). Re = 1100 × 1,5 × 0,81 / 5 = **267**. Casi cuatro mil veces menor: manda la viscosidad, el líquido se mueve en capas y se mezcla mal.

Qué significa para ti:

- **Cuanto mayor es Re, más turbulento** y mejor se mezcla y pasa el calor.
- **La viscosidad cambia con la temperatura.** Al enfriar, la masa se espesa y Re baja.
- **Las fronteras entre laminar, transición y turbulento en un tanque agitado no son las de la tubería** y dependen del rodete. Los textos de ingeniería de mezcla dan valores para cada caso; en esta lección no los damos porque no se pudieron comprobar en un documento leído.

### La potencia: por qué unas pocas rpm de más cuestan tanto

Empujar líquido cuesta energía. La potencia que el rodete entrega al líquido es:

> P = Np × ρ × N³ × D⁵

- **P** es la potencia, en vatios (W).
- **Np** es el **número de potencia** (*power number*). Es un número sin unidad que depende de la forma del rodete, de los deflectores y del régimen. Lo da el fabricante o el diseño.
- **ρ**, **N** y **D**, como antes: densidad, vueltas por segundo y diámetro del rodete en metros.

Compruébalo con las unidades: kg/m³ × 1/s³ × m⁵ = kg·m²/s³, que es justo el vatio. Por eso Np no lleva unidad.

En régimen turbulento y con deflectores, Np se mantiene casi constante, y entonces la fórmula dice dos cosas muy prácticas.

**La velocidad va al cubo.** Si doblas las rpm, la potencia se multiplica por 2 × 2 × 2 = **8**. En «La centrífuga a fondo» verás que la fuerza G va con el cuadrado de las rpm; aquí es todavía más fuerte, con el cubo.

**El diámetro va a la quinta.** Un rodete un poco más grande consume mucho más. Pasar de 0,9 a 1,0 m (un 11 % más) multiplica la potencia por (1,0 / 0,9)⁵ = **1,69**.

**Ejemplo con números.** Tomamos el rodete de 0,9 m del ejemplo 1, a 90 rpm, en un líquido de 870 kg/m³, con Np = 1,4 (valor de ejemplo; no es el de ningún rodete concreto):

| Velocidad | Cuenta | Potencia al líquido |
|---|---|---|
| 45 rpm (0,75 vueltas/s) | 1,4 × 870 × 0,75³ × 0,9⁵ | 0,30 kW |
| 90 rpm (1,5 vueltas/s) | 1,4 × 870 × 1,5³ × 0,9⁵ = 1,4 × 870 × 3,375 × 0,59 | 2,43 kW |
| 120 rpm (2 vueltas/s) | 2,43 × (120 / 90)³ = 2,43 × 2,37 | 5,75 kW |
| 180 rpm (3 vueltas/s) | 2,43 × 8 | 19,4 kW |

De 90 a 180 rpm se pasa de 2,43 a 19,4 kW. Por eso el control limita la velocidad máxima.

**La densidad cuenta.** La potencia va en proporción a ρ. El mismo rodete en agua (1000 kg/m³) en lugar de tolueno pide 1000 / 870 = 1,15 veces más.

**Toda esa potencia acaba en calor.** El trabajo del rodete se convierte en calor dentro de la masa. Con 2,43 kW durante una hora en 2610 kg de masa con cp = 1,7 kJ/(kg·K), sin camisa que lo retire: 2,43 × 3600 / (2610 × 1,7) = unos **2 °C por hora**. Poco al lado de una reacción, pero real.

### Velocidad de punta

La punta de la pala recorre una circunferencia en cada vuelta. Su velocidad es:

> Velocidad de punta = π × D × N

Con D en metros y N en vueltas por segundo sale en m/s. En el ejemplo: 3,14 × 0,9 × 1,5 = **4,24 m/s**, unos 15 km/h.

La **velocidad de punta** (*tip speed*) indica lo fuerte que «corta» la pala. Importa cuando hay cristales: los textos de cristalización relacionan una velocidad de punta alta con cristales que chocan con la pala y se rompen, aunque cuánto pesa ese efecto depende del caso. Por eso en una cristalización la hoja puede dar una velocidad máxima además de una mínima.

### Vórtice y deflectores

Sin deflectores, el líquido termina girando entero con el rodete, como el agua de un vaso que remueves en círculo. En el centro se forma un embudo, el **vórtice** (*vortex*). El líquido da vueltas, pero las capas apenas se cruzan: hay poca mezcla de arriba abajo. Si el embudo es profundo, el rodete además puede tragar gas del espacio de cabeza.

El deflector es un obstáculo fijo que rompe ese giro y lo convierte en remolinos. La nota técnica de prevención NTP 528 del Instituto Nacional de Seguridad y Salud en el Trabajo (INSST) lo recomienda en reactores discontinuos y semicontinuos agitados: los rompecorrientes aumentan la turbulencia, y con ella la velocidad de transferencia de calor y la de la reacción.

Un vórtice profundo por la mirilla, o una superficie que gira «en bloque», se anota y se comenta.

### Nivel mínimo para arrancar

El rodete solo mueve el líquido que lo cubre. Con el rodete al aire o a medio cubrir no mezcla aunque la pantalla marque rpm, las palas golpean al entrar y salir del líquido y la sonda puede medir el gas en vez de la masa. Por eso cada reactor tiene un **volumen mínimo de agitación** (*minimum stirring volume*), que da la documentación del equipo. En el simulador del reactor R-204 de esta app es de 500 L (valor de ejemplo). La regla es la misma al cargar y al descargar: se arranca cuando el nivel supera el mínimo y se para al bajar de él.

### Agitación y calor: cómo se enlaza todo

En «El reactor a fondo» viste que el calor que pasa por la camisa es Q = U × A × ΔT, y que U baja si no hay agitación. La NTP 528 lo concreta: la velocidad de transferencia de calor depende de la velocidad y el tipo de agitación, del tipo de superficie, del fluido y de la geometría del recipiente.

Una forma sencilla de imaginarlo: pegada a la pared hay una capa de líquido casi quieto que el calor cruza despacio. Agitar renueva esa capa; sin agitación, el líquido junto a la pared apenas cambia y U cae.

**Ejemplo con el modelo del simulador.** En el reactor R-204 de la app, U vale 300 W/(m²·K) a 90 rpm y, con el agitador parado, baja a la quinta parte, 60 W/(m²·K) (valores de ejemplo del modelo). Con la carga de la hoja y el reactivo B ya dentro, la superficie mojada es de unos 9,6 m². Con la camisa 10 °C más fría que la masa:

- Agitando: 300 × 9,6 × 10 = 28800 W = **28,8 kW** retirados, casi todo lo que da de sí la camisa.
- Parado: 60 × 9,6 × 10 = 5760 W = **5,8 kW** retirados.

La camisa sigue fría, pero el frío ya no llega a la masa.

**Y la acumulación.** En «Calor de reacción a fondo» y en «El reactor a fondo» viste que un reactivo que entra y no reacciona se acumula. Sin agitación el reactivo se queda en una zona, sin mezclarse. La NTP 527 del INSST lo dice así: la pérdida de agitación tiene dos efectos inmediatos, una mezcla pobre de los reactivos y una mala transferencia de calor. Una mezcla pobre lleva a acumular reactivos y, si hay más de una fase, a capas separadas que reaccionarán rápida y peligrosamente, **sobre todo si se restablece la agitación**.

**Ejemplo didáctico de por qué no se rearranca a la ligera.** Con los números de «El reactor a fondo» (cada kilo de reactivo desprende 150 kJ y la camisa retira como mucho unos 30 kW), imagina que el agitador se para y entran 100 kg de reactivo sin mezclarse antes de cortar la adición. Ahí hay 100 × 150 = 15000 kJ esperando. Si al rearrancar el agitador reacciona todo en 2 minutos, se liberan 15000 / 120 = **125 kW**, más de cuatro veces lo que puede retirar la camisa. Y cuanto más sube la temperatura, más rápido reacciona.

### Qué vigila el operador

| Lectura | Qué esperas | Qué te puede estar diciendo si cambia |
|---|---|---|
| Velocidad (rpm) | La de la hoja, estable | Si baja o marca cero: disparo del motor, fallo del variador o corte de corriente |
| Consumo del motor (amperios o kW) | Estable para esa velocidad y ese producto | Sube: masa más espesa, más sólidos o más densa, o algo que roza. Baja con rpm normales: nivel bajo, rodete al aire o suelto, mucho gas |
| Ruido y vibración | Los de siempre | Golpes, chirridos o vibración nueva: rodamiento, reductor, eje o rodete tocando algo |
| Líquido de barrera | Nivel y presión dentro de marcas | Nivel que baja: el cierre pierde. Presión que cae: no protege |
| Fugas y olor junto al cierre | Nada | Vapor, gotas o restos de producto junto al eje |
| Mirilla | Superficie movida, sin vórtice profundo | Superficie quieta con rpm en pantalla, o vórtice muy hondo |

Fíjate en una trampa: **las rpm solas no prueban que se esté agitando**. La velocidad suele medirse en el motor o en el eje. Si el rodete se ha soltado o está al aire, el eje gira igual y la pantalla marca 90 rpm. El consumo, en cambio, baja, porque el motor ya no empuja líquido. La NTP 527 pide detectar la pérdida de agitación por la velocidad de giro o por el consumo de potencia: mirar las dos lecturas juntas es lo más seguro.

Sobre la vibración, Kuphaldt recuerda que la fuerza de un desequilibrio en una pieza que gira crece con el cuadrado de la velocidad. Si aparece una vibración nueva, se avisa a mantenimiento en el momento.

### Si el agitador se para durante una adición

La NTP 527 pide tres cosas: detectar la pérdida de agitación, tener procedimientos de emergencia para el fallo del agitador y que la válvula de los reactivos esté enclavada con el agitador para cortar la adición si falla. En el R-204 del simulador es el enclavamiento I-01: por debajo de 45 rpm se para la bomba dosificadora P-205.

Lo que haces, en este orden:

1. **Comprueba que la adición se ha parado.** Que la bomba esté parada y la válvula cerrada. Si el enclavamiento no ha actuado, párala tú.
2. **No rearranques el agitador por tu cuenta.** Aunque el motor se deje rearmar, ya no sabes cuánto reactivo hay acumulado sin reaccionar.
3. **Avisa al responsable** (jefe de turno o responsable de proceso) y sigue el procedimiento de emergencia del agitador.
4. **Vigila temperatura y presión de la masa** y mantén el frío que pida el procedimiento.
5. **Anota todo con su hora**: cuándo se paró, la temperatura, cuánto reactivo había entrado, qué alarmas saltaron y qué se decidió.

Si se rearranca, cuándo y cómo lo decide el responsable según el procedimiento de tu planta.

La guía ICH Q7 pide registrar cada actividad en el momento en que se hace (apartado 2.15) y documentar y explicar toda desviación (apartado 8.15). Una parada de agitación, aunque dure un minuto, es un dato del lote.

En planta manda siempre el procedimiento vigente (SOP) y la hoja de producción de cada lote.
`,
  plant: `
Turno de tarde en el reactor vitrificado R-204, con impulsor de retroceso. Hay 2610 kg de tolueno a 70 °C y la hoja pide añadir 600 kg del reactivo B con la bomba P-205 en no menos de 60 minutos, a 90 rpm y con la masa entre 68 y 75 °C.

Antes de empezar has anotado lo de siempre: 90 rpm, consumo del motor estable en su valor habitual, nivel y presión del líquido de barrera dentro de marcas.

A los 35 minutos de adición ves que el consumo del motor sube poco a poco. Lo anotas y avisas al jefe de turno. Dos minutos después salta la alarma de disparo del motor del agitador por sobreintensidad. Las rpm caen a cero y, al pasar por 45 rpm, el enclavamiento para la P-205.

Compruebas en la pantalla que la bomba está parada y cierras además la válvula manual de B, como dice el procedimiento. No rearmas el motor. Llevan entrados unos 350 kg de B y no sabes cuánto ha reaccionado.

Llamas al jefe de turno. Mientras llega, vigilas la masa: 72 °C y subiendo despacio, aunque la camisa está fría. Es lo esperado: sin agitación, el frío no llega a la masa. Anotas cada pocos minutos temperatura de masa, temperatura de camisa y presión.

El jefe de turno y el responsable de proceso revisan los datos y deciden. Mantenimiento encuentra el motivo de la sobreintensidad y lo repara. El rearranque se hace como dice el procedimiento, con la orden del responsable y contigo vigilando temperatura y presión. Todo queda en la hoja con su hora y se abre una desviación.
`,
  batchRecord: `
- Comprobaciones antes de arrancar: nivel y presión del líquido de barrera, nivel por encima del volumen mínimo de agitación, con hora y firma.
- Hora de arranque del agitador, consigna y velocidad real (rpm).
- Consumo del motor (amperios o kW) a los intervalos que marque la hoja, sobre todo durante las adiciones y la cristalización.
- Cualquier cambio de velocidad, con la hora, el valor nuevo y quién lo autoriza.
- Paradas de agitación, aunque sean cortas: hora de inicio y fin, motivo y estado de la adición en ese momento.
- Alarmas del agitador (disparo, velocidad baja, nivel de barrera) y actuación de enclavamientos, con hora.
- En una parada durante una adición: cantidad añadida hasta la parada, temperatura y presión de la masa, a quién se avisó y qué se decidió.
- Ruidos, vibraciones, fugas o vórtices anormales observados, aunque el lote siga.
- Hora de parada del agitador al terminar o al bajar el nivel del mínimo en la descarga.
`,
  terms: [
    { es: "Rodete", en: "Impeller", def: "Conjunto de palas al final del eje que empuja el líquido." },
    { es: "Reductor", en: "Gearbox", def: "Engranajes entre el motor y el eje que bajan la velocidad y aumentan la fuerza de giro." },
    { es: "Variador de frecuencia", en: "Variable frequency drive (VFD)", def: "Equipo que cambia la velocidad de un motor de corriente alterna cambiando la frecuencia que le llega." },
    { es: "Par", en: "Torque", def: "Fuerza de giro que hace el eje. Hace falta más par para mover un líquido espeso." },
    { es: "Turbina de palas inclinadas", en: "Pitched blade turbine", def: "Rodete de palas inclinadas con flujo sobre todo axial. Levanta bien los sólidos del fondo." },
    { es: "Turbina Rushton", en: "Rushton turbine", def: "Disco con palas planas verticales y flujo radial. Se usa sobre todo para dispersar gas." },
    { es: "Impulsor de retroceso", en: "Retreat curve impeller", def: "Rodete de tres palas curvadas hacia atrás, montado cerca del fondo. Típico del reactor vitrificado." },
    { es: "Número de Reynolds del agitador", en: "Impeller Reynolds number", def: "Re = ρ × N × D² / μ. Número sin unidad: cuanto mayor, más turbulenta es la mezcla." },
    { es: "Número de potencia", en: "Power number (Np)", def: "Número sin unidad que depende del rodete y del régimen. Con él, P = Np × ρ × N³ × D⁵." },
    { es: "Velocidad de punta", en: "Tip speed", def: "Velocidad del extremo de la pala: π × D × N. Indica lo fuerte que corta el rodete." },
    { es: "Vórtice", en: "Vortex", def: "Embudo que se forma en el centro cuando el líquido gira entero con el rodete. Indica poca mezcla." },
    { es: "Volumen mínimo de agitación", en: "Minimum stirring volume", def: "Cantidad de líquido que cubre el rodete y la sonda. Por debajo no se agita." },
    { es: "Líquido de barrera", en: "Barrier fluid", def: "Líquido a presión entre las dos parejas de anillos del cierre doble. Se vigilan su nivel y su presión." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Un rodete de 0,6 m de diámetro gira a 120 rpm. ¿Cuál es su velocidad de punta? Usa velocidad de punta = π × D × N, con N en vueltas por segundo.",
      answer: 3.77,
      tolerance: 0.02,
      unit: "m/s",
      explain: "120 rpm son 2 vueltas por segundo. Velocidad de punta = 3,1416 × 0,6 × 2 = 3,77 m/s.",
    },
    {
      kind: "choice",
      q: "Durante una adición de reactivo, el agitador dispara y el enclavamiento para la bomba. El motor se deja rearmar. ¿Qué haces?",
      options: [
        "Rearmo el motor enseguida para que el frío vuelva a llegar a la masa",
        "Reanudo la adición a la mitad de caudal hasta que vuelva la agitación",
        "Confirmo la adición parada, no rearranco, aviso al responsable y anoto",
        "Subo la consigna de rpm para compensar el tiempo que ha estado parado",
      ],
      answer: 2,
      explain: "Sin agitación el reactivo se acumula sin reaccionar. Según la NTP 527, al restablecer la agitación puede reaccionar rápida y peligrosamente, así que el rearranque lo decide el responsable.",
    },
    {
      kind: "number",
      q: "Un líquido de densidad 1000 kg/m³ y viscosidad 0,002 Pa·s se agita con un rodete de 0,5 m a 120 rpm. ¿Cuánto vale el número de Reynolds del agitador, Re = ρ × N × D² / μ?",
      answer: 250000,
      tolerance: 0.01,
      unit: "(sin unidad)",
      explain: "N = 120 / 60 = 2 vueltas por segundo. Re = 1000 × 2 × 0,25 / 0,002 = 250000. Es un número sin unidad.",
    },
    {
      kind: "choice",
      q: "La pantalla marca las 90 rpm de la hoja, pero el consumo del motor ha bajado mucho respecto a lo habitual. ¿Qué puede indicar?",
      options: [
        "Que el rodete no está empujando líquido: nivel bajo, rodete al aire o suelto",
        "Que la masa se ha vuelto más espesa y el agitador trabaja mejor",
        "Que el líquido de barrera está a más presión de la necesaria",
        "Que la camisa está retirando más calor del previsto",
      ],
      answer: 0,
      explain: "Las rpm se miden en el motor o en el eje y pueden ser normales aunque el rodete no empuje nada. Un consumo que baja indica que el motor no mueve líquido. Por eso se miran las dos lecturas.",
    },
    {
      kind: "number",
      q: "En régimen turbulento con Np constante, un agitador consume 3 kW a 60 rpm. ¿Cuánto consumirá el mismo agitador, con el mismo líquido, a 120 rpm?",
      answer: 24,
      tolerance: 0.01,
      unit: "kW",
      explain: "La potencia va con el cubo de la velocidad. El doble de rpm da 2 × 2 × 2 = 8 veces más: 3 × 8 = 24 kW.",
    },
    {
      kind: "choice",
      q: "En una suspensión de cristales, ¿qué tipo de flujo levanta mejor los sólidos del fondo?",
      options: [
        "El flujo radial, porque lanza el líquido contra la pared con fuerza",
        "El flujo axial, porque el chorro barre el fondo y sube por la pared",
        "El vórtice, porque concentra el giro del líquido en el centro",
        "El flujo laminar, porque mueve el líquido en capas ordenadas",
      ],
      answer: 1,
      explain: "El rodete de palas inclinadas empuja el líquido a lo largo del eje: barre el fondo y arrastra los cristales hacia arriba. El vórtice y el flujo laminar mezclan mal.",
    },
    {
      kind: "number",
      q: "Calcula la potencia que entrega al líquido un rodete con Np = 2 (valor de ejemplo), de 0,8 m de diámetro, a 60 rpm, en un líquido de 1000 kg/m³. Usa P = Np × ρ × N³ × D⁵.",
      answer: 655,
      tolerance: 0.01,
      unit: "W",
      explain: "60 rpm es 1 vuelta por segundo. 0,8⁵ = 0,32768. P = 2 × 1000 × 1 × 0,32768 = 655 W, unos 0,66 kW.",
    },
    {
      kind: "choice",
      q: "En la ronda ves que el nivel del depósito de líquido de barrera del cierre ha bajado desde el turno anterior. ¿Qué significa y qué haces?",
      options: [
        "Es normal: el líquido se gasta con el giro y se repone al final del lote",
        "Indica que el reactor está a menos presión y conviene subirla",
        "Indica que el agitador gira más deprisa y hay que bajar la consigna",
        "El cierre está perdiendo líquido; aviso a mi responsable y lo anoto",
      ],
      answer: 3,
      explain: "El nivel de barrera solo baja si el cierre pierde líquido, hacia fuera o hacia el reactor. Se avisa y se anota, porque el cierre deja de proteger.",
    },
    {
      kind: "number",
      q: "Con el agitador en marcha, una camisa tiene U = 300 W/(m²·K). Con el agitador parado, U baja a 60 W/(m²·K). Con A = 10 m² y la camisa 25 °C más fría que la masa, ¿cuántos kW retira la camisa con el agitador parado?",
      answer: 15,
      tolerance: 0.01,
      unit: "kW",
      explain: "Q = U × A × ΔT = 60 × 10 × 25 = 15000 W = 15 kW. Agitando serían 300 × 10 × 25 = 75 kW: cinco veces más.",
    },
    {
      kind: "choice",
      q: "Has empezado a cargar el disolvente y el nivel todavía no cubre el rodete. Un compañero te dice que arranques ya el agitador para ganar tiempo. ¿Qué haces?",
      options: [
        "Lo arranco a la máxima velocidad para que salpique y moje las paredes",
        "Espero a superar el volumen mínimo de agitación que fija la ficha del equipo",
        "Lo arranco a poca velocidad, porque así el rodete no se daña",
        "Lo arranco y enciendo la camisa para adelantar el calentamiento",
      ],
      answer: 1,
      explain: "Con el rodete al aire no se mezcla, las palas golpean al entrar y salir del líquido y la sonda puede medir el gas. Se arranca al superar el volumen mínimo.",
    },
  ],
};
