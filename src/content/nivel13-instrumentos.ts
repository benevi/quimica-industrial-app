import type { Lesson } from "./types";

export const instrumentosAFondo: Lesson = {
  slug: "instrumentos-a-fondo",
  level: 13,
  order: 2,
  title: "Instrumentos de medida a fondo: cómo miden los sensores de la planta y cuándo fiarse de ellos",
  titleEn: "Process instruments in depth: how plant sensors measure and when to trust them",
  minutes: 40,
  summary:
    "La cadena de medida, la señal de 4 a 20 mA con sus cuentas, qué significan rango, span y exactitud, cómo funcionan por dentro los sensores de temperatura, presión, nivel y caudal, qué es calibrar y cómo se nota que un instrumento miente.",
  body: `
En la lección anterior viste qué instrumento mide cada cosa. Aquí verás cómo mide cada uno por dentro, cómo viaja el dato hasta la pantalla y cómo darte cuenta de que un número es falso.

### La cadena de medida
Un número en la pantalla es el final de una cadena con cuatro eslabones:

1. El **sensor** (*sensor*): la pieza que toca el proceso y cambia con él, como un hilo de platino cuya resistencia cambia con la temperatura.
2. El **transmisor** (*transmitter*): la electrónica que convierte ese cambio en una señal normalizada y la envía por cable.
3. La **señal** (*signal*): lo que viaja por el cable, casi siempre una corriente de 4 a 20 miliamperios (mA).
4. El **indicador** (*indicator*) o el sistema de control: convierte la señal en un número con unidades y lo enseña, lo registra o lo usa para controlar.

Si falla un solo eslabón, el número es falso.

Un **indicador local** (un manómetro de aguja, un termómetro de esfera) se lee junto al equipo: no envía nada a la sala ni deja registro. Un transmisor sí, y el sistema lo guarda. Muchos puntos importantes llevan los dos.

### La señal de 4 a 20 mA
El transmisor no envía «73 grados». Envía una corriente: 4 mA cuando la medida está en el mínimo de su rango y 20 mA cuando está en el máximo. Entre medias sube en proporción.

**Por qué corriente y no tensión.** El cable y el transmisor forman un circuito cerrado, un lazo. La corriente es como el agua en una manguera sin fugas: la que entra por un extremo sale por el otro, sea corta o larga. La tensión (el voltaje) se parece a la presión del agua: se pierde a lo largo del cable. Por eso una señal de corriente llega igual con un cable corto que con uno muy largo, y aguanta mejor el ruido eléctrico.

**Por qué el cero está en 4 mA.** Es un «cero vivo» (*live zero*). Si el mínimo fuese 0 mA, el sistema no distinguiría «la medida vale cero» de «el cable está roto»: las dos darían 0 mA. Con el mínimo en 4 mA, una medida en el mínimo da 4 mA y un cable roto da 0 mA. Además, esos 4 mA alimentan el transmisor por los mismos dos hilos.

**Fuera de 4 a 20 mA.** Una señal claramente por debajo de 4 mA o por encima de 20 mA no es una medida: es un aviso de fallo (cable roto, sensor averiado, transmisor sin alimentación). Una recomendación del sector (NAMUR NE 43) fija los valores exactos, pero no es de acceso gratuito y aquí no damos sus cifras. En pantalla lo verás como un valor imposible o una alarma de fallo de señal.

### Convertir miliamperios en valor de proceso, y al revés
El **rango** (*range*) son los dos extremos entre los que mide el instrumento: 0 a 150 °C. El **alcance** (*span*) es la distancia entre ellos: 150 − 0 = 150 °C. Entre 4 y 20 mA hay 16 mA, así que:

> valor = mínimo + (mA − 4) / 16 × span

> mA = 4 + (valor − mínimo) / span × 16

1. **Rango 0 a 150 °C, llegan 12 mA.** (12 − 4) / 16 = 0,5, la mitad del recorrido. 0 + 0,5 × 150 = **75 °C**.
2. **Rango 0 a 150 °C, la temperatura es 90 °C. ¿Qué corriente envía?** 90 / 150 = 0,6. 4 + 0,6 × 16 = **13,6 mA**.
3. **Rango 0 a 6 bar, llegan 7,2 mA.** (7,2 − 4) / 16 = 0,2. 0,2 × 6 = **1,2 bar**.
4. **Rango −20 a 180 °C** (el span es 180 − (−20) = 200 °C), **llegan 10 mA.** (10 − 4) / 16 = 0,375. −20 + 0,375 × 200 = **55 °C**.
5. **Rango −1 a 3 bar g** (span 4 bar), **el reactor está a 0 bar g.** 1 / 4 = 0,25. 4 + 0,25 × 16 = **8 mA**.

En los dos últimos el rango no empieza en cero: ahí 4 mA no significa «cero», sino «el mínimo del rango».

### Las palabras con las que se juzga un instrumento
Las definiciones oficiales están en el Vocabulario Internacional de Metrología (VIM). En lenguaje llano:

- **Exactitud** (*accuracy*): lo cerca que está la medida del valor verdadero. El patrón dice 80,0 °C y la sonda marca 80,2 °C: es exacta.
- **Precisión** (*precision*) y **repetibilidad** (*repeatability*): lo parecidas que salen las medidas al repetirlas en las mismas condiciones. Una báscula que da tres veces 50,3 kg con una pesa de 50,0 kg es muy repetible y poco exacta.
- **Error** (*measurement error*): lo que marca el instrumento menos el valor de referencia. 80,2 − 80,0 = +0,2 °C.
- **Resolución** (*resolution*): el cambio más pequeño que el instrumento es capaz de mostrar. Una pantalla que salta de 0,1 en 0,1 °C.
- **Deriva** (*drift*): cambio lento de la indicación con el tiempo, debido al propio instrumento y no a lo que se mide. Un electrodo de pH que cada semana marca un poco más.
- **Tiempo de respuesta** (*response time*): lo que tarda la indicación en asentarse cuando lo medido cambia de golpe.

Ojo: muchos decimales en pantalla son resolución, no exactitud. Un indicador puede enseñar 80,24 °C y estar equivocado en 2 °C.

### El error en porcentaje del span
El error máximo permitido (en planta, la tolerancia) suele darse como un porcentaje del span. La cuenta es: error = porcentaje / 100 × span.

- **±0,5 % de un span de 200 °C:** 0,005 × 200 = **±1 °C**.
- **±0,25 % de un span de 6 bar:** 0,0025 × 6 = ±0,015 bar, es decir, **±15 mbar**.
- **±0,1 % de un span de 2000 kg** (un reactor sobre células de carga): 0,001 × 2000 = **±2 kg**.

Ese error vale lo mismo en toda la escala. Los ±2 kg son poco al cargar 1500 kg, pero al cargar 40 kg son 2 / 40 = 5 % de la carga. Por eso las cantidades pequeñas se pesan en una báscula pequeña. Todos son valores de ejemplo.

### Temperatura: Pt100 y termopar
**La Pt100** es una termorresistencia (*resistance temperature detector*, RTD): un hilo fino de platino cuya resistencia eléctrica sube con la temperatura de forma casi lineal. «Pt» es platino y «100» son los 100 ohmios (Ω) que tiene a 0 °C. El transmisor hace pasar una corriente muy pequeña por el hilo, mide la resistencia y la traduce a grados.

El problema son los cables: su resistencia se suma a la del platino. Según cuántos hilos lleguen a la sonda:

- **2 hilos:** se mide platino más cables, todo junto. Marca de más. Solo vale con cables muy cortos.
- **3 hilos:** el tercer hilo permite descontar la resistencia del cable, suponiendo que los hilos son iguales. Es lo más habitual.
- **4 hilos:** dos llevan la corriente y otros dos miden solo sobre el platino. Los cables dejan de influir: es la más exacta.

**El termopar** (*thermocouple*) son dos hilos de metales distintos soldados por la punta. Genera por sí solo una tensión muy pequeña que depende de la diferencia de temperatura entre la punta y el otro extremo, la unión fría o de referencia (*cold junction*). Como mide una diferencia, el equipo tiene que conocer la temperatura del extremo frío: es la compensación de unión fría. Los tipos más comunes se llaman K, J y T.

| | Pt100 | Termopar |
|---|---|---|
| Principio | Resistencia de un hilo de platino | Tensión generada por dos metales |
| Alimentación | Necesita una pequeña corriente | Genera su propia señal |
| Exactitud y estabilidad | La mejor de las dos | Menor |
| Respuesta | Casi lineal | No lineal: el equipo la corrige con tablas |
| Unión de referencia | No la necesita | Sí |

### La vaina y los fallos de la temperatura
La sonda no toca el producto. Va metida en una **vaina** (*thermowell*), un tubo metálico cerrado y soldado al equipo, que permite sacar la sonda sin abrir el reactor. El precio es el retraso: el calor tiene que atravesar la pared de la vaina, igual que tardas en notar el café caliente a través de una taza gruesa. Mientras calientas, la lectura va por detrás de la temperatura real. Si la punta no toca el fondo, queda aire en medio y el retraso crece mucho.

Fallos típicos:

- **Sonda fuera de la vaina o mal metida**: marca algo cercano a la temperatura de la sala y apenas se mueve.
- **Nivel bajo:** si el líquido no llega a la vaina, la sonda mide el gas de arriba, no el producto.
- **Cable roto o suelto:** valor imposible y alarma de fallo de señal.

### Presión
- **Manómetro de tubo Bourdon** (*Bourdon tube gauge*): dentro hay un tubo metálico curvado. La presión tiende a enderezarlo, como un matasuegras cuando soplas, y ese movimiento mueve la aguja.
- **Sello de diafragma** (*diaphragm seal*): una membrana metálica fina separa el producto del instrumento, y un líquido de relleno transmite la presión. En farmacia se usa porque la membrana queda enrasada con la pared, sin huecos donde se quede producto, y se limpia con el equipo; además protege el instrumento de productos corrosivos. Si ves una membrana dañada, avisa: el líquido de relleno podría llegar al producto.
- **Transmisores:** el de presión **manométrica** compara con el ambiente; el de presión **absoluta** compara con el vacío total (los dos conceptos están en la lección «Inertización a fondo»); el de presión **diferencial** (*differential pressure*) tiene dos tomas y mide la diferencia entre ellas: sirve para vigilar un filtro y para medir nivel y caudal.
- **Vacuómetro** (*vacuum gauge*): mide presiones por debajo de la atmosférica. Mira la unidad: mbar absolutos o bar g negativos.

**Si la toma se cierra o se tapona.** El instrumento se conecta al proceso por una toma estrecha, a menudo con una válvula de aislamiento. Si la válvula queda cerrada o la toma se tapona con producto, la presión de ese momento queda atrapada y el instrumento sigue marcándola, tan creíble como siempre, mientras el reactor hace otra cosa. Ninguna alarma lo avisa.

### Nivel
- **Por presión diferencial:** la columna de líquido da una presión en el fondo (la cuenta está en la lección «Fluidos a fondo»). Su punto débil es la densidad: con un líquido menos denso que el configurado, marca menos nivel del real.
- **Radar:** desde el techo envía microondas y mide lo que tarda en volver el eco de la superficie. No toca el producto.
- **Ultrasonidos** (*ultrasonic*): igual, pero con sonido. El sonido necesita un gas por el que viajar: no funciona en vacío, y los vapores le afectan.
- **Horquilla vibrante** (*vibrating fork*): una horquilla metálica que vibra. Cuando el líquido la cubre, la frecuencia baja y el interruptor cambia de estado. No mide cuánto hay: solo dice «el líquido ha llegado aquí». Es el típico interruptor de nivel alto (*level switch*) que para la carga antes de un rebose.
- **Células de carga** (*load cells*): el reactor entero se apoya sobre sensores de fuerza. No les afectan la espuma ni la densidad, pero sí todo lo que empuje o tire del reactor: tuberías rígidas, mangueras tensas, alguien apoyado, el líquido de las tuberías unidas.

Problemas reales:

- **Espuma:** absorbe el sonido de los ultrasonidos y puede afectar al radar. Nivel inestable o pérdida de eco.
- **Agitador:** las palas devuelven ecos al radar y a los ultrasonidos. La lectura salta con ritmo.
- **Cambio de densidad:** engaña a la presión diferencial. El nivel no cuadra con lo cargado.
- **Incrustaciones:** ensucian los sensores que tocan el producto y taponan las tomas. Lectura atascada.

### Caudal
| Caudalímetro | Cómo mide | Sirve para | A tener en cuenta |
|---|---|---|---|
| **Coriolis** | El líquido pasa por tubos que vibran; de la vibración salen el caudal en masa y la densidad | Dosificar disolventes y reactivos | El más exacto |
| **Electromagnético** (*magnetic flowmeter*) | El líquido cruza un campo magnético y genera una tensión proporcional a su velocidad | Agua y disoluciones acuosas | Solo líquidos conductores: no sirve con tolueno, heptano y otros disolventes orgánicos no conductores |
| **Vortex** | Un obstáculo crea remolinos; cuenta cuántos se forman por segundo | Líquidos, gases y vapor | Lleva un obstáculo dentro del tubo |
| **Placa de orificio** (*orifice plate*) | Un estrechamiento provoca una caída de presión que mide un transmisor diferencial; el caudal va con su raíz cuadrada | Vapor, agua caliente, gases | Poco exacta a caudales bajos; se desgasta |
| **Rotámetro** (*rotameter*) | Tubo vertical que se ensancha hacia arriba; el flotador sube más cuanto más caudal pasa | Comprobar a pie de equipo | Lectura local, a ojo |

El Coriolis es el preferido para dosificar porque da directamente kilogramos, que es lo que pide la receta. Los litros cambian con la temperatura; los kilogramos no.

El **totalizador** (*totalizer*) es el cuentakilómetros del caudalímetro: suma lo que ha pasado desde que se puso a cero.

### Analíticos en línea
- **pH:** un electrodo de vidrio y uno de referencia, a menudo juntos en una sola sonda, generan una tensión que depende de la acidez. Antes de medir se sumerge la sonda en disoluciones tampón (*buffer solutions*) de pH conocido, por ejemplo 4 y 7, y se ajusta. La membrana de vidrio envejece y se ensucia: responde más despacio y deriva. Por eso se limpia y se calibra con frecuencia. No debe quedarse seco, y la temperatura influye.
- **Conductividad:** cuánto conduce la electricidad el líquido, que depende de los iones disueltos. Vigila el agua purificada (lección del agua farmacéutica).
- **Oxígeno:** el analizador que confirma la inertización antes de cargar disolvente (lección «Inertización a fondo»).

### Calibración, ajuste y verificación
- **Calibrar** (*calibration*) es comparar lo que marca el instrumento con un patrón de valor conocido y dejar escrito cuánto se desvía. No cambia nada en el instrumento.
- **Ajustar** (*adjustment*) es actuar sobre el instrumento para que marque lo que debe. Según el VIM, la calibración va antes, y después de ajustar hay que calibrar otra vez.
- **Verificar** (*verification*) es aportar la prueba de que algo cumple un requisito, como la comprobación diaria de una báscula con una pesa patrón.

El patrón tiene que ser **trazable** (*traceable*): su valor está ligado a una referencia por una cadena ininterrumpida y documentada de calibraciones.

La guía ICH Q7 lo pide así en su apartado 5.3:

- **5.30:** los equipos de control, pesada, medida, vigilancia y ensayo críticos para la calidad se calibran según procedimientos escritos y un calendario establecido.
- **5.31 y 5.32:** con patrones trazables a patrones certificados, si existen, y guardando registros.
- **5.33:** el estado de calibración de los equipos críticos debe conocerse y poder comprobarse.
- **5.34:** los instrumentos que no cumplen los criterios de calibración no deben usarse.
- **5.35:** si un instrumento crítico se desvía, hay que investigar si pudo afectar a la calidad de lo fabricado con él desde la última calibración correcta.

El 5.33 es la **etiqueta de calibración** pegada en el instrumento: código, fecha de calibración y fecha de vencimiento. El 5.35 explica por qué una sonda fuera de tolerancia es grave: pone en duda los lotes hechos desde su última calibración buena.

### Una comprobación en tres puntos
Con valores de ejemplo: el transmisor TT-310 tiene rango 0 a 150 °C y una tolerancia de ±0,5 % del span: 0,005 × 150 = ±0,75 °C. El técnico lo compara con un patrón en tres puntos:

| Patrón | Marca el TT-310 | Error (marca − patrón) | ¿Dentro de ±0,75 °C? |
|---|---|---|---|
| 0,0 °C | 0,2 °C | +0,2 °C | Sí |
| 75,0 °C | 75,4 °C | +0,4 °C | Sí |
| 150,0 °C | 150,9 °C | +0,9 °C | No |

Basta un punto fuera para que no cumpla. Se hacen varios puntos porque un instrumento puede acertar abajo y fallar arriba, como aquí. En porcentaje del span, el peor error es 0,9 / 150 × 100 = 0,6 %, por encima del 0,5 % permitido. No se usa: se ajusta, se vuelve a calibrar y se investiga.

### Instrumentos en zona clasificada
Donde puede haber vapores inflamables, un instrumento eléctrico no puede ser una fuente de ignición. Un modo de protección es la **seguridad intrínseca** (*intrinsic safety*): el circuito tiene la energía limitada para que ni una chispa ni un calentamiento puedan encender la mezcla. Para ti significa no abrir cajas de instrumentos ni sustituir un aparato por otro «parecido». Lo demás está en la lección «Atmósferas explosivas a fondo».

### Cómo saber que un instrumento miente
Un instrumento averiado enseña su número con la misma seguridad que siempre. Tus herramientas:

- **Compara con otro instrumento.** Transmisor contra indicador local; nivel contra peso.
- **Compara con el balance.** El totalizador dice 800 kg cargados y las células de carga, 620 kg: uno miente.
- **Compara con la lógica del proceso.** Abres vapor y la temperatura no sube. Vacías el reactor y el nivel no baja.
- **Desconfía de la lectura congelada.** En un proceso vivo todo tiembla un poco: una tendencia perfectamente recta durante media hora no es estabilidad: es una señal muerta.

### Qué haces tú
1. **No corriges el dato.** No apuntas lo que «debería» marcar.
2. **Anotas lo que marca**, con el código del instrumento y la hora, y lo que marcan los otros.
3. **No avanzas** si el paso depende de esa medida, y dejas el equipo seguro.
4. **Avisas** a tu responsable de turno.
5. **Si la etiqueta está vencida**, no usas el instrumento para registros de la hoja y avisas.
6. **No tocas el instrumento:** ni ajustes ni golpecitos. Eso es trabajo de instrumentación.

En tu planta manda siempre el procedimiento vigente (SOP).
`,
  plant: `
Turno de tarde. Calientas el reactor R-310 para la etapa de disolución del intermedio ficticio NB-22 en isopropanol. La hoja pide llegar a 60 °C. El transmisor de producto TT-310 (una Pt100 en vaina, rango 0 a 150 °C) marca 24,0 °C.

Abres vapor a la camisa. A los veinte minutos, la temperatura de salida de la camisa, TT-312, va por 71 °C. El TT-310 sigue en 24,0 °C. Miras la tendencia: una línea completamente recta desde las 15:10.

No cuadra con la lógica del proceso: con la camisa a 71 °C y el agitador en marcha, el producto tiene que subir. Vas al equipo. El termómetro local de esfera TI-311 marca 52 °C.

Cierras el vapor para no pasarte de temperatura a ciegas y avisas a la jefa de turno. Anotas las tres lecturas con su hora: TT-310, 24,0 °C; TI-311, 52 °C; TT-312, 71 °C. No escribes 52 en la casilla del TT-310.

El instrumentista mide la señal del TT-310: 6,56 mA. Hace la cuenta: (6,56 − 4) / 16 × 150 = 24,0 °C. El transmisor y el cable están bien: envían fielmente lo que ve la sonda. El fallo está antes. Al mirar el cabezal lo encuentra: en el mantenimiento de la víspera, la sonda se quedó a medio meter en la vaina y está midiendo el aire de la sala.

La recoloca hasta el fondo. Poco después el TT-310 sube y se queda cerca del TI-311. Se abre una desviación, porque el TT-310 es un instrumento crítico, y Calidad decide cómo sigue el lote.
`,
  batchRecord: `
En la hoja de producción (*batch record*) los instrumentos aparecen de tres maneras:

- **Identificación:** cada lectura va con el código del instrumento que la dio (p. ej. TT-310, PT-310, WT-310). Si usas uno distinto del previsto, se anota cuál y por qué.
- **Estado de calibración:** casilla para confirmar que la etiqueta está vigente, con la fecha de vencimiento. En básculas, además, la verificación de uso con la pesa patrón y su resultado en cifras.
- **Lecturas:** el valor tal como lo da el instrumento, con su unidad y sus decimales (61,4 °C, no «60 más o menos»), fecha, hora y firma. En presión, si es absoluta o manométrica.
- **Totalizadores:** lectura inicial y final, y la diferencia. La cantidad cargada se compara con el peso del reactor si hay células de carga.
- **Calibraciones en el momento:** en pH, los tampones usados (lote y caducidad) y el resultado de la calibración antes de medir.
- **Lecturas dudosas:** lo que marcaba el instrumento sospechoso, lo que marcaban los otros, la hora, a quién avisaste y el número de la desviación. Nunca se sustituye un dato por otro «más lógico».
- **Límites:** la hoja trae el intervalo permitido; tú escribes el valor real y, si cae fuera, lo comunicas antes de seguir.
`,
  terms: [
    { es: "Sensor", en: "Sensor", def: "Parte del instrumento que está en contacto con el proceso y cambia con lo que se mide." },
    { es: "Transmisor", en: "Transmitter", def: "Electrónica que convierte lo que capta el sensor en una señal normalizada y la envía al sistema de control." },
    { es: "Cero vivo", en: "Live zero", def: "Usar 4 mA, y no 0 mA, para el mínimo del rango, de modo que un cable roto (0 mA) no se confunda con una medida." },
    { es: "Rango", en: "Range", def: "Valores mínimo y máximo entre los que mide el instrumento, por ejemplo 0 a 150 °C." },
    { es: "Alcance", en: "Span", def: "Diferencia entre el máximo y el mínimo del rango. De −20 a 180 °C, el span es 200 °C." },
    { es: "Exactitud", en: "Accuracy", def: "Cercanía entre el valor medido y el valor verdadero." },
    { es: "Repetibilidad", en: "Repeatability", def: "Cercanía entre medidas repetidas en las mismas condiciones. Un instrumento puede ser repetible y no ser exacto." },
    { es: "Deriva", en: "Drift", def: "Cambio lento de la indicación con el tiempo debido al propio instrumento y no a lo que se mide." },
    { es: "Termorresistencia Pt100", en: "Pt100 resistance temperature detector (RTD)", def: "Sensor de temperatura de hilo de platino con 100 Ω a 0 °C; su resistencia sube con la temperatura." },
    { es: "Unión fría", en: "Cold junction / reference junction", def: "Extremo del termopar opuesto a la punta de medida; su temperatura debe conocerse para calcular la de la punta." },
    { es: "Vaina", en: "Thermowell", def: "Tubo cerrado soldado al equipo donde se aloja la sonda de temperatura; permite sacarla sin abrir el proceso y retrasa la lectura." },
    { es: "Sello de diafragma", en: "Diaphragm seal", def: "Membrana con líquido de relleno que separa el producto del instrumento de presión y le transmite la presión." },
    { es: "Totalizador", en: "Totalizer", def: "Contador que acumula la cantidad total que ha pasado por un caudalímetro." },
    { es: "Ajuste", en: "Adjustment", def: "Actuar sobre el instrumento para que marque lo que debe. No es lo mismo que calibrar, que solo compara con un patrón." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Un transmisor de temperatura con rango 0 a 150 °C envía 10,4 mA (señal de 4 a 20 mA). ¿Qué temperatura indica?",
      answer: 60,
      tolerance: 0.01,
      unit: "°C",
      explain: "Valor = mínimo + (mA − 4) / 16 × span = 0 + (10,4 − 4) / 16 × 150 = 0,4 × 150 = 60 °C.",
    },
    {
      kind: "number",
      q: "Un transmisor de presión con rango 0 a 6 bar mide 4,5 bar. ¿Qué corriente envía por su señal de 4 a 20 mA?",
      answer: 16,
      tolerance: 0.01,
      unit: "mA",
      explain: "mA = 4 + (valor − mínimo) / span × 16 = 4 + 4,5 / 6 × 16 = 4 + 12 = 16 mA.",
    },
    {
      kind: "choice",
      q: "La temperatura del reactor aparece de golpe como fallo de señal y el instrumentista mide 0 mA en el lazo. ¿Qué es lo más probable?",
      options: [
        "Que el producto esté justo en el mínimo del rango del transmisor",
        "Que el producto se haya enfriado de golpe hasta los cero grados",
        "Que haya un cable roto o suelto, o un transmisor sin alimentación",
        "Que el transmisor necesite que el operador lo ajuste desde sala",
      ],
      answer: 2,
      explain: "El mínimo del rango son 4 mA, no 0 mA. Una corriente de 0 mA no es una medida: indica lazo abierto o sin alimentación. Para eso sirve el cero vivo.",
    },
    {
      kind: "number",
      q: "Un transmisor de temperatura tiene rango −20 a 180 °C y envía 14 mA (señal de 4 a 20 mA). ¿Qué temperatura indica?",
      answer: 105,
      tolerance: 0.01,
      unit: "°C",
      explain: "El span es 180 − (−20) = 200 °C. Valor = −20 + (14 − 4) / 16 × 200 = −20 + 125 = 105 °C. Hay que sumar el mínimo del rango.",
    },
    {
      kind: "number",
      q: "Un transmisor de temperatura con rango 0 a 250 °C tiene una tolerancia de ±0,5 % del span. ¿Cuántos grados de error se le permiten, en más o en menos?",
      answer: 1.25,
      tolerance: 0.01,
      unit: "°C",
      explain: "Span = 250 − 0 = 250 °C. Error permitido = 0,5 / 100 × 250 = 1,25 °C, en más o en menos.",
    },
    {
      kind: "choice",
      q: "Hay que dosificar tolueno, un disolvente orgánico que no conduce la electricidad, y la receta pide kilogramos. ¿Qué caudalímetro es el adecuado?",
      options: [
        "Un Coriolis, que mide directamente la masa que pasa",
        "Un electromagnético, que mide cualquier líquido limpio",
        "Un rotámetro, leyendo el flotador durante toda la carga",
        "Un electromagnético, corrigiendo luego con la densidad",
      ],
      answer: 0,
      explain: "El electromagnético solo funciona con líquidos conductores y el tolueno no lo es. El Coriolis mide masa con cualquier líquido y además da la densidad.",
    },
    {
      kind: "number",
      q: "Un reactor sobre células de carga tiene un span de 5000 kg y un error permitido de ±0,1 % del span. Si cargas solo 50 kg, ¿qué porcentaje de esa carga representa el error permitido?",
      answer: 10,
      tolerance: 0.01,
      unit: "%",
      explain: "Error permitido = 0,1 / 100 × 5000 = 5 kg. Sobre una carga de 50 kg: 5 / 50 × 100 = 10 %. Por eso las cantidades pequeñas se pesan en una báscula pequeña.",
    },
    {
      kind: "number",
      q: "En una calibración, el patrón marca 100,0 °C y el transmisor, de rango 0 a 200 °C, marca 100,6 °C. ¿Cuál es el error en porcentaje del span?",
      answer: 0.3,
      tolerance: 0.02,
      unit: "% del span",
      explain: "Error = lo que marca − patrón = 100,6 − 100,0 = 0,6 °C. Span = 200 °C. 0,6 / 200 × 100 = 0,3 % del span.",
    },
    {
      kind: "choice",
      q: "Calientas el reactor con vapor en la camisa. La temperatura de la camisa sube con normalidad, pero la del producto lleva veinte minutos clavada en el mismo valor, con una tendencia totalmente recta. ¿Qué haces?",
      options: [
        "Sigo calentando hasta que la lectura reaccione y anoto el valor final",
        "Anoto la temperatura que calculo que debe de tener ya el producto",
        "Doy unos golpes al cabezal de la sonda por si se ha quedado atascada",
        "Comparo con otro instrumento, anoto lo que marca cada uno y aviso",
      ],
      answer: 3,
      explain: "Una lectura congelada que contradice la lógica del proceso es sospechosa. Se compara, se anota lo que marca cada instrumento sin corregir nada, se deja el equipo seguro y se avisa.",
    },
    {
      kind: "choice",
      q: "El nivel de un depósito se mide por presión en el fondo y el transmisor está configurado para agua. Hoy el depósito contiene un disolvente menos denso que el agua. ¿Qué pasa con la lectura?",
      options: [
        "Marca el nivel correcto, porque la presión no depende del líquido",
        "Marca menos nivel del real, porque el líquido pesa menos",
        "Marca más nivel del real, porque el líquido ocupa más",
        "Marca siempre cero, porque el disolvente no es conductor",
      ],
      answer: 1,
      explain: "La presión en el fondo depende de la altura y de la densidad. Con un líquido menos denso, la misma altura da menos presión y el transmisor, que supone agua, calcula menos nivel del que hay.",
    },
  ],
};
