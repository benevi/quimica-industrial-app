import type { Lesson } from "./types";

export const gasesDePlantaAFondo: Lesson = {
  slug: "gases-de-planta-a-fondo",
  level: 14,
  order: 4,
  title: "Nitrógeno, aire comprimido y vacío a fondo: los gases que mueven la planta",
  titleEn: "Nitrogen, compressed air and vacuum in depth: the gases that run the plant",
  minutes: 40,
  summary:
    "Qué gases hay en una planta de API y para qué sirve cada uno, la ley de Boyle con cuentas de botellas y de reactores, de dónde sale el nitrógeno, el nitrógeno líquido, la red y sus usos uno a uno, el aire comprimido y su agua, el vacío como servicio, las botellas, el aire con poco oxígeno y lo que piden ICH Q7 y el anexo 1.",
  body: `
En la lección anterior viste los gases de servicio en una página. En la de inertización calculaste los ciclos. Aquí vas a ver de dónde sale cada gas, cómo llega hasta tu reactor y qué vigilas tú cuando lo usas.

### Los gases de una planta de API

| Gas | Para qué se usa | Su riesgo principal |
|---|---|---|
| **Nitrógeno** (*nitrogen*) | Quitar el oxígeno de los equipos, empujar líquidos, romper el vacío, soplar y secar | Asfixia: quita el oxígeno también a las personas |
| **Aire de instrumentos** (*instrument air*) | Mover las válvulas neumáticas | Si falla, las válvulas se van solas a su posición de fallo |
| **Aire de proceso o de servicio** (*plant air*) | Herramientas, bombas de membrana, soplados sin disolvente | Presión; mete oxígeno donde no debe |
| **Aire respirable** (*breathing air*) | Equipos de respiración con línea de aire | Conectarse a la toma equivocada |
| **Vacío** (*vacuum*) | Destilar, secar, filtrar, cargar, inertizar | Entra aire por las fugas; el equipo puede aplastarse |
| **Hidrógeno** (*hydrogen*) | Algunas reacciones, las hidrogenaciones | Arde con mucha facilidad. Solo se menciona aquí |

### Un gas, desde cero
Un gas no tiene forma ni tamaño propios: ocupa todo el recipiente que le des. Tres números lo describen. El **volumen** es el sitio que ocupa. La **presión** es la fuerza con la que empuja las paredes. La **temperatura** es lo caliente que está.

Piensa en una jeringa con el extremo tapado. Si aprietas el émbolo hasta la mitad, el aire de dentro ocupa la mitad y empuja el doble. Esa es la **ley de Boyle** (*Boyle's law*): a temperatura constante, presión por volumen da siempre lo mismo.

> P1 × V1 = P2 × V2, con las presiones en absoluta

Recuerda la lección de inertización: absoluta = manométrica + atmosférica, y aquí redondeamos la atmósfera a 1 bar. Las cuentas que siguen son ideales. A presiones muy altas, como las de una botella, los gases reales se apartan algo de esta ley; la cifra exacta de una botella la da el proveedor.

**Cuenta 1. Cuánto gas hay en una botella.** Una botella de 50 litros a 200 bar a. Si todo ese gas saliera a 1 bar a ocuparía 200 × 50 / 1 = 10000 litros, es decir, 10 metros cúbicos. Dentro siempre se quedan 50 litros a 1 bar a, que no salen solos: aprovechables, 9950 litros.

**Cuenta 2. Cuánto dura.** Un punto de uso gasta 20 litros por minuto, medidos a presión ambiente (valor de ejemplo). La botella se cambia cuando baja a 10 bar a (valor de ejemplo). Gas útil: (200 − 10) × 50 = 9500 litros. Duración: 9500 / 20 = 475 minutos, casi 8 horas.

**Cuenta 3. Cuánto hace falta para presurizar.** Un reactor de 6000 litros, vacío de líquido, pasa de 0 bar g a 2 bar g, o sea, de 1 a 3 bar a. Gas añadido, medido a 1 bar a: 6000 × (3 − 1) = 12000 litros. Si el reactor tiene 4000 litros de líquido, solo se presurizan los 2000 de arriba: 4000 litros de gas.

**El metro cúbico normal** (*normal cubic metre*, Nm³). Un metro cúbico de gas no dice cuánto gas hay si no dices a qué presión y temperatura. Por eso los consumos se dan «en condiciones normales», unas condiciones de referencia acordadas. El reglamento español de equipos a presión llama condiciones normales a 15 °C y 1,013 bar absolutos. No todos los documentos usan la misma referencia: mira siempre cuál.

### De dónde sale el nitrógeno
El nitrógeno se saca del aire, que es nitrógeno en un 78,1 %.

| Fuente | Cómo funciona | A favor | En contra |
|---|---|---|---|
| **Tanque criogénico** (*cryogenic tank*) con evaporador | Un camión llena el tanque de nitrógeno líquido. El líquido pasa por un evaporador, se calienta con el ambiente y sale gas | Mucho gas en poco sitio: un litro de líquido da 691 de gas | Depende del camión; riesgos del líquido muy frío |
| **Generador por adsorción** (*pressure swing adsorption*, PSA) | Aire comprimido pasa por un material que retiene el oxígeno y deja pasar el nitrógeno | Se fabrica en la planta | La pureza depende del ajuste y del caudal; necesita aire comprimido bueno |
| **Generador de membranas** (*membrane generator*) | El aire comprimido pasa por fibras huecas; el oxígeno escapa por la pared y el nitrógeno sigue | Sencillo | En general, menos pureza |
| **Bloque de botellas** (*cylinder bundle*) | Varias botellas unidas a un colector | Reserva y consumos pequeños | Se agota; hay que cambiarlo |

La **pureza** es qué parte del gas es de verdad nitrógeno. Lo que falta es sobre todo oxígeno, y ya viste que ese oxígeno pone un suelo a la inertización. La pureza de tu red la fija tu planta.

La instrucción de depósitos criogénicos pide que el tanque esté preferentemente al aire libre, vallado y con un cartel que indique el gas, sus peligros y las medidas de seguridad.

### Nitrógeno líquido
Según la NTP 383 del Instituto Nacional de Seguridad y Salud en el Trabajo (INSST), el nitrógeno hierve a −196 °C a la presión de una atmósfera. Y un litro de líquido da 691 litros de gas a 15 °C y una atmósfera. Sus riesgos, según esa nota:

- **Quemaduras por frío**, por el líquido o por sus vapores. Al principio duelen poco; al deshelarse, mucho. El líquido se cuela bajo la ropa y alarga el contacto.
- **Tuberías con hielo.** Por fuera están cerca de 0 °C; por debajo, mucho más frías. No se tocan.
- **Materiales que se vuelven frágiles**: el acero dulce, el aluminio o el hormigón pierden resistencia y se agrietan.
- **Líquido atrapado entre dos válvulas.** Acaba evaporándose y la presión sube hasta reventar la tubería. Por eso esos tramos llevan dispositivos de descarga de presión.
- **Nube blanca a ras de suelo.** El gas frío condensa la humedad del aire. Muchas veces es la primera señal de una fuga. Nunca se entra en ella: no se ve, está muy fría y puede no tener oxígeno.
- **Asfixia.** Con la cifra de la nota, 10 litros de líquido derramados dan 6910 litros de gas.

La nota pide protección de cara y manos y ropa de fibra natural, seca, holgada para quitársela deprisa, sin bolsillos abiertos, mangas remangadas ni dobleces donde se quede el líquido. Si alguien se quema, agua templada en abundancia, nunca caliente, y atención médica.

### La red de nitrógeno
Del tanque o del generador sale una tubería principal a una presión de red, por ejemplo 6 bar g (valor de ejemplo). En cada punto de uso hay:

- **Una reductora** (*pressure regulator*), que baja la presión a la que admite el equipo. Un reactor no se conecta a la presión de red sin ella.
- **Una válvula antirretorno** (*check valve*), que solo deja pasar en un sentido. Si el reactor está a más presión que la red, sin ella el vapor o el producto subirían por la tubería de nitrógeno y saldrían en otro equipo. El anexo 1 de las normas europeas pide, en su apartado 6.20, mecanismos que impidan el retroceso cuando puede afectar al producto.
- **Un filtro en el punto de uso** cuando el gas toca el producto.

Las tuberías van identificadas. La guía ICH Q7, apartado 4.23, pide que la tubería fija esté identificada de forma apropiada. Los colores no los damos: cada planta tiene su código, y la norma española sobre ello es de pago.

### Los usos del nitrógeno, uno a uno

| Uso | Qué es | Qué vigilas |
|---|---|---|
| Inertizar | Cambiar el aire por nitrógeno antes de cargar | Presiones de cada ciclo y oxígeno medido |
| Mantener sobrepresión (*blanketing*) | Dejar el equipo con un poco de presión de nitrógeno para que no entre aire | Que la presión se mantiene; si cae, hay fuga o falta gas |
| Empujar líquidos | Presurizar el equipo de origen para que el líquido pase al de destino | Presión por debajo del máximo del equipo; venteo del destino abierto; cortar al acabar |
| Romper el vacío | Devolver a presión ambiente un equipo en vacío | Que entra nitrógeno y no aire; subir despacio |
| Soplar líneas y filtros | Empujar con gas el líquido que queda en una tubería | Hacia dónde sale; nunca hacia una persona |
| Secar la torta | Pasar nitrógeno a través del sólido en el filtro-secador | Caudal, presión y que el gas sale al sistema de venteo |
| Barrido | Paso continuo de nitrógeno por un equipo | Caudal y tiempo de la hoja; dónde descarga |

Dos avisos. Al empujar un líquido, cuando se acaba pasa gas de golpe al equipo de destino. Y todo el nitrógeno que entra en un equipo sale por algún sitio: si ese sitio es la sala, la sala pierde oxígeno.

### Aire comprimido
El camino es: **compresor** (*compressor*), **depósito pulmón** (*air receiver*), **secador** (*dryer*), **filtros** y red. El compresor aprieta el aire. El depósito guarda una reserva y amortigua los picos. El secador le quita el agua. Los filtros retienen partículas y gotas de aceite.

**Por qué lleva agua.** El aire de la calle tiene vapor de agua. A 7 bar g, es decir, 8 bar a, en cada metro cúbico de tubería hay apretados 8 metros cúbicos de aire de la calle, con el agua de los ocho. No cabe toda como vapor: la que sobra se hace líquida. La NTP 631 del INSST lo confirma: el aire comprimido arrastra agua condensada de la humedad del aire y aceite del compresor.

**El punto de rocío** (*dew point*). Saca un vaso frío de la nevera en verano: se moja por fuera. El aire que lo toca se enfría y ya no puede sostener su vapor. El punto de rocío es la temperatura a la que hay que enfriar un aire para que empiece a soltar agua. Cuanto más seco, más bajo. El del aire de la red debe quedar por debajo de la temperatura más fría de la red. Las clases de calidad del aire comprimido están en una norma de pago y no damos sus cifras.

**Las purgas de condensado** (*condensate drains*) sacan el agua del depósito, del secador y de los filtros. Una purga que no funciona manda agua a la red.

**Aire de instrumentos.** Las piezas que mueven una válvula neumática tienen pasos muy finos. El agua las oxida y en invierno se hiela; el aceite las ensucia. Por eso va seco y sin aceite. Si la presión cae, cada válvula se va sola a su posición de fallo, como viste en la lección de alarmas. Una alarma de baja presión de aire de instrumentos se avisa en el acto.

**Aire en contacto con el producto.** El anexo 1, apartado 6.18, pide para los gases que tocan el producto una calidad química, de partículas y microbiana apropiada, con sus parámetros especificados, incluidos aceite y agua. Ese anexo es para medicamentos estériles; se cita como referencia.

**Aire respirable.** Los equipos de línea de aire reciben, según el INSST, aire comprimido limpio y respirable. Solo se conectan a una toma de aire respirable. Nunca a una de aire de servicio. Nunca a una de nitrógeno: serían dos bocanadas.

### Tomas que no encajan, a propósito
La NTP 340 lo describe: donde conviven redes de nitrógeno y de aire comprimido, un error de conexión crea una atmósfera sin oxígeno.

Por eso las conexiones son distintas. En las botellas lo fija el reglamento: un acoplamiento de salida por familia de gas. El aire tiene el suyo, los inertes otro, el oxígeno otro, y los inflamables llevan la rosca a izquierdas. La instrucción de almacenamiento de botellas añade: no se fuerzan las conexiones que no ajustan ni se usan piezas intermedias, salvo las aprobadas por el fabricante del gas. Si no encaja, es que no es ahí. Un adaptador es la forma de saltarse la protección.

### El vacío como servicio
Las bombas las viste en la lección de bombas. Aquí interesa la red.

- **Antes de la bomba** hay un condensador y un depósito trampa. El vacío evapora disolvente; el condensador lo recoge y la trampa para gotas y polvo.
- **Las fugas van hacia dentro.** Lo que entra es aire. Se nota porque el vacío no llega o, con el equipo aislado, la presión sube sola.
- **El vacío se rompe con nitrógeno** en equipos con disolventes. Con aire, meterías oxígeno donde hay vapores inflamables.
- **No todo equipo aguanta vacío.** Un depósito no diseñado para ello puede aplastarse.

**Unidades.** El vacío se da en milibares absolutos (mbar abs): 1000 es el ambiente y 0 el vacío total. Según el real decreto de unidades de medida, 1 bar son 100 kPa y 1 mmHg son unos 133,322 Pa.

- 200 mbar abs = 0,2 bar a = 20 kPa. En un vacuómetro que cuenta desde el ambiente, −0,8 bar g.
- 100 mbar abs = 10000 Pa; 10000 / 133,322 = 75 mmHg.

### Botellas de gas comprimido
Una botella tiene el cuerpo, la ojiva, la válvula o grifo y una protección de la válvula: la caperuza o la tulipa. La válvula es la parte más débil. Reglas de la instrucción MIE APQ-5 y de la NTP 397:

- **De pie y sujetas**, por ejemplo con cadena. Válvula cerrada y caperuza puesta, también las vacías.
- **Llenas y vacías, en grupos separados.**
- **Se mueven en carro.** No se arrastran ni se ruedan tumbadas.
- **Lee la etiqueta.** El color informa, pero el contenido lo dice la etiqueta. El código de colores está en una norma de pago. Si no está identificada, no se usa.
- **Siempre con regulador**, el de ese gas. Antes de abrir, tornillo de regulación aflojado. La válvula se abre despacio, con la salida apuntando lejos de ti y de los demás.
- **Si la válvula va dura, no se fuerza**: se devuelve.
- **Fugas, con agua jabonosa.** Nunca con una llama.
- **Nada de grasa ni aceite** en válvulas y conexiones: con oxígeno pueden dar una explosión violenta.
- **No se trasvasa** de una botella a otra y **no se usa gas comprimido para limpiarse la ropa**.

### Cuando falta oxígeno
El aire tiene un 21 % de oxígeno. La NTP 223 del INSST recoge qué pasa cuando baja:

| Oxígeno | Consecuencias según la NTP 223 |
|---|---|
| 21 % | Concentración normal |
| 20,5 % | Mínimo para entrar sin equipos con suministro de aire |
| 18 % | Atmósfera deficiente: problemas de coordinación y respiración acelerada |
| 17 % | Riesgo de perder el conocimiento sin signo precursor |
| 12 a 16 % | Vértigo, dolor de cabeza, dificultad para respirar, alto riesgo de inconsciencia. En segundos o minutos |
| 6 a 10 % | Náuseas, pérdida de conciencia y muerte en 6 a 8 minutos |

**Por qué no se nota.** El nitrógeno no huele ni se ve, y la NTP 340 dice que su efecto asfixiante llega sin ningún signo previo en el cuerpo. La NTP 223 añade que la mayoría no reconoce el peligro hasta que está demasiado débil para escapar.

**Dónde se acumula**, según la NTP 340: salas por donde pasan tuberías de gas inerte, almacenes de botellas, laboratorios, fosos, zanjas, sótanos y galerías. El nitrógeno recién evaporado está muy frío y baja a los puntos más bajos. Una cuenta: en una sala de 30 metros cúbicos se evaporan 10 litros de líquido. Si esos 6910 litros de gas ocupan el sitio de otro tanto aire y se mezclan, el oxígeno queda en 21 × (30000 − 6910) / 30000 = 16,2 %. Es una estimación simplificada.

**Detectores.** Los hay fijos, con alarma en la sala, y personales, que llevas encima. La NTP 340 avisa de que son una ayuda y no una garantía: pueden estar mal ajustados o mal colocados.

**Si suena:** sal hacia aire limpio y avisa. No vuelvas a mirar. Si alguien ha caído dentro, no entres a por él: solo se entra con equipo de respiración autónomo.

### Calidad GMP de los gases
ICH Q7, apartado 4.20: los servicios que pueden afectar a la calidad, y cita vapor, gases, aire comprimido y climatización, se cualifican, se vigilan de forma apropiada y se actúa cuando se superan los límites. Y debe haber planos de esos sistemas.

Del anexo 1, además de los apartados 6.18 y 6.20: en procesos asépticos el gas se filtra en el punto de uso con un filtro esterilizante de 0,22 µm como máximo y se comprueba su integridad (6.19).

Para ti: un filtro de punto de uso tiene código, fecha de cambio y, si aplica, prueba de integridad.

### Qué vigila, qué anota y qué no hace nunca el operador
**Vigila:** presión de la red de nitrógeno y de aire de instrumentos; la presión con la que queda cada equipo; hielo o niebla junto al tanque; purgas con agua; su detector de oxígeno.

**Anota:** presiones reales, oxígeno medido, código del filtro de punto de uso, cambios de botella y cualquier alarma de servicios, con su hora.

**No hace nunca:** usar un adaptador, conectar un equipo de respiración a una toma que no sea de aire respirable, romper con aire el vacío de un equipo con disolvente, entrar en una nube fría, forzar una válvula de botella, buscar fugas con llama, engrasar conexiones, asomarse a un equipo con nitrógeno.

Los números de esta lección sirven para entender. En planta manda siempre el procedimiento vigente (SOP): las presiones, los caudales, la pureza del gas y los límites son los de tu hoja y los de tu planta.
`,
  plant: `
Turno de tarde. Vas a trasvasar 3000 litros de disolución del intermedio ficticio LM-52 del reactor R-310 al filtro-secador FS-420, empujando con nitrógeno. La hoja dice: *«Presurizar R-310 con nitrógeno hasta 1,5 bar g. No superar 2,0 bar g. Venteo de FS-420 abierto al lavador.»*

Antes miras el manómetro de la red de nitrógeno en el cuadro de la sala: 6,1 bar g (valor de ejemplo), lo normal. Compruebas el filtro de punto de uso FN-310: etiqueta con código y fecha de cambio en vigor. Lo anotas.

Abres el nitrógeno poco a poco por la reductora. El reactor sube a 1,5 bar g y el líquido empieza a pasar. Haces la cuenta para saber qué esperar: cuando hayan salido los 3000 litros, ese hueco estará lleno de gas a 2,5 bar a, unos 7500 litros de nitrógeno medidos a presión ambiente.

A media transferencia suena una alarma: baja presión en la red de nitrógeno. El manómetro del cuadro marca 3,8 bar g y sigue bajando. Cierras la válvula de nitrógeno del reactor y la de trasvase, y avisas a la jefa de turno.

El aviso llega de servicios: en el tanque criogénico TN-900 hay hielo grueso en la salida del evaporador y una niebla blanca a ras de suelo. Nadie entra en la niebla. Servicios cierra desde fuera, pasa la red al bloque de botellas de reserva y, cuando la presión vuelve a 6 bar g, te dan paso.

Compruebas que R-310 sigue con presión positiva: no ha entrado aire. Reanudas el trasvase y, al acabar, cortas el nitrógeno antes de que pase gas de golpe al filtro.

Anotas la alarma, las horas de parada y de reanudación, y las presiones.
`,
  batchRecord: `
En la hoja de producción (*batch record*) los gases aparecen en muchos pasos. Verás instrucciones con una presión y su unidad (bar g, bar a o mbar abs) y casillas como estas:

- **Presión de nitrógeno aplicada** en un trasvase, con el valor real leído (1,5 bar g, no «conforme») y el máximo permitido.
- **Presión con la que queda el equipo** al terminar el paso, cuando la hoja pide mantenerlo con nitrógeno.
- **Rotura de vacío**: con qué gas se rompe (nitrógeno) y hasta qué presión.
- **Vacío alcanzado** en mbar abs, y la prueba de estanqueidad si la hoja la pide: presión inicial, presión final y tiempo.
- **Filtro de gas en el punto de uso**: código del filtro, fecha de cambio en vigor y, si aplica, resultado de la prueba de integridad.
- **Secado con paso de nitrógeno**: caudal, presión y tiempo reales.
- **Incidencias de servicios**: alarma de baja presión de nitrógeno o de aire de instrumentos, con hora de inicio y de fin, qué se hizo y a quién se avisó.
- **Cambio de botella o de bloque**, si tu punto de uso funciona así: código o lote del gas y hora.

Fuera de la hoja de lote, los servicios tienen sus propios registros: rondas de la red, purgas, punto de rocío y pureza. No los rellenas tú siempre, pero una lectura rara que veas se comunica.

Se anota lo que marca el instrumento, con su unidad completa. «200 mbar» sin «abs» es un dato que puede leerse de dos maneras.
`,
  terms: [
    { es: "Ley de Boyle", en: "Boyle's law", def: "A temperatura constante, la presión absoluta de un gas por su volumen da siempre el mismo resultado: P1 × V1 = P2 × V2." },
    { es: "Metro cúbico normal", en: "Normal cubic metre (Nm³)", def: "Cantidad de gas que ocupa un metro cúbico en unas condiciones de referencia acordadas de presión y temperatura." },
    { es: "Tanque criogénico", en: "Cryogenic tank", def: "Depósito aislado que guarda un gas en forma de líquido muy frío, como el nitrógeno líquido." },
    { es: "Evaporador", en: "Vaporiser", def: "Equipo que calienta el líquido criogénico y lo convierte en gas antes de enviarlo a la red." },
    { es: "Generador por adsorción", en: "Pressure swing adsorption (PSA) generator", def: "Equipo que obtiene nitrógeno del aire comprimido reteniendo el oxígeno en un material." },
    { es: "Reductora de presión", en: "Pressure regulator", def: "Válvula que baja la presión de la red o de la botella a la que admite el punto de uso." },
    { es: "Válvula antirretorno", en: "Check valve / non-return valve", def: "Válvula que solo deja pasar en un sentido; evita que el producto suba a la red de gas." },
    { es: "Mantenimiento de sobrepresión", en: "Blanketing", def: "Dejar un equipo con una pequeña presión de nitrógeno para que, si hay una fuga, salga gas y no entre aire." },
    { es: "Depósito pulmón", en: "Air receiver", def: "Depósito que guarda una reserva de aire comprimido y amortigua los picos de consumo." },
    { es: "Punto de rocío", en: "Dew point", def: "Temperatura a la que hay que enfriar un aire para que empiece a soltar agua líquida. Cuanto más seco el aire, más bajo." },
    { es: "Purga de condensado", en: "Condensate drain", def: "Dispositivo que saca el agua que se acumula en depósitos, secadores y filtros de aire comprimido." },
    { es: "Aire respirable", en: "Breathing air", def: "Aire comprimido limpio y apto para respirar, el único al que se conecta un equipo de línea de aire." },
    { es: "Caperuza o tulipa", en: "Valve cap / valve guard", def: "Protección de la válvula de una botella de gas, su parte más débil, frente a golpes y caídas." },
    { es: "Filtro de punto de uso", en: "Point-of-use filter", def: "Filtro colocado justo antes de donde el gas entra en contacto con el producto." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Una botella de 50 litros contiene nitrógeno a 150 bar a. Con la ley de Boyle (cálculo ideal), ¿cuántos litros ocuparía todo ese gas a 1 bar a?",
      answer: 7500,
      tolerance: 0.01,
      unit: "litros",
      explain: "P1 × V1 = P2 × V2, así que V2 = 150 × 50 / 1 = 7500 litros a 1 bar a.",
    },
    {
      kind: "choice",
      q: "La manguera de tu equipo de línea de aire no encaja en la toma más cercana de la sala. Un compañero te ofrece un adaptador para que encaje. ¿Qué haces?",
      options: [
        "No lo uso: busco una toma de aire respirable identificada",
        "Lo uso, porque todas las tomas de la sala llevan aire a presión",
        "Lo uso solo si el manómetro de esa toma marca presión normal",
        "Lo uso un momento y lo retiro en cuanto termine la tarea",
      ],
      answer: 0,
      explain: "Las conexiones son distintas a propósito para que no se confunda un gas con otro. Si no encaja, esa toma no es de aire respirable y puede ser de nitrógeno; un adaptador anula la protección.",
    },
    {
      kind: "number",
      q: "Una botella de 50 litros está a 200 bar a y se cambia cuando baja a 20 bar a. El punto de uso gasta 30 litros por minuto medidos a 1 bar a. Con la ley de Boyle, ¿cuántos minutos dura?",
      answer: 300,
      tolerance: 0.01,
      unit: "minutos",
      explain: "Gas útil: (200 − 20) × 50 = 9000 litros a 1 bar a. Duración: 9000 / 30 = 300 minutos.",
    },
    {
      kind: "number",
      q: "Un reactor de 2500 litros, sin líquido dentro, está a 0 bar g y lo presurizas con nitrógeno hasta 1,5 bar g (ambiente = 1 bar). ¿Cuántos litros de nitrógeno, medidos a 1 bar a, has añadido?",
      answer: 3750,
      tolerance: 0.01,
      unit: "litros",
      explain: "En absoluta pasa de 1 a 2,5 bar a. Gas añadido: 2500 × (2,5 − 1) = 3750 litros medidos a 1 bar a.",
    },
    {
      kind: "choice",
      q: "En el panel aparece la alarma de baja presión de aire de instrumentos y la presión sigue cayendo. ¿Qué cabe esperar y qué haces?",
      options: [
        "Nada cambia: las válvulas se quedan donde estaban; sigo con la carga",
        "Las válvulas neumáticas irán a su posición de fallo; aviso en el acto",
        "Las válvulas se abrirán todas a la vez; cierro a mano el nitrógeno",
        "Solo fallan los manómetros de la sala; lo anoto al final del turno",
      ],
      answer: 1,
      explain: "Sin aire, el muelle lleva cada válvula neumática a su posición de fallo, unas cerradas y otras abiertas. Es un fallo de servicio que se avisa de inmediato y se actúa según el procedimiento.",
    },
    {
      kind: "number",
      q: "El vacuómetro de un secadero, que cuenta desde la presión ambiente, marca −0,9 bar g. Tomando el ambiente como 1 bar, ¿cuál es la presión absoluta en mbar?",
      answer: 100,
      tolerance: 0.01,
      unit: "mbar abs",
      explain: "Absoluta = manométrica + atmosférica = −0,9 + 1 = 0,1 bar a, que son 100 mbar abs.",
    },
    {
      kind: "number",
      q: "Un documento antiguo da un vacío de 80 mbar abs y tú lo quieres en milímetros de mercurio. Sabiendo que 1 mbar son 100 Pa y que 1 mmHg son 133,322 Pa, ¿cuántos mmHg son?",
      answer: 60,
      tolerance: 0.01,
      unit: "mmHg",
      explain: "80 mbar son 8000 Pa. 8000 / 133,322 = 60 mmHg.",
    },
    {
      kind: "choice",
      q: "Tu detector personal de oxígeno empieza a pitar junto al tanque de nitrógeno líquido y ves una niebla blanca a ras de suelo. ¿Qué haces?",
      options: [
        "Me agacho para ver de qué punto de la tubería sale la niebla",
        "Entro en la niebla a cerrar la válvula antes de que vaya a más",
        "Salgo hacia aire limpio, aviso y no entro en la niebla",
        "Apago el detector, que con el frío suele dar falsas alarmas",
      ],
      answer: 2,
      explain: "La niebla suele ser la primera señal de una fuga de gas licuado: está muy fría, no deja ver y puede no tener oxígeno. La NTP 383 pide no entrar nunca en ella; se sale, se avisa y actúa personal con equipo adecuado.",
    },
    {
      kind: "number",
      q: "Según la NTP 383, un litro de nitrógeno líquido produce 691 litros de gas a 15 °C y una atmósfera. Si se derraman y evaporan 4 litros de líquido, ¿cuántos litros de gas se forman?",
      answer: 2764,
      tolerance: 0.01,
      unit: "litros",
      explain: "4 × 691 = 2764 litros de gas nitrógeno, que desplazan el aire de la sala.",
    },
    {
      kind: "choice",
      q: "Has conectado el regulador a una botella de nitrógeno nueva y quieres comprobar que la conexión no fuga. Además, la válvula va muy dura. ¿Qué es lo correcto?",
      options: [
        "Acercar un mechero a la conexión y abrir la válvula con una llave",
        "Poner un poco de grasa en la rosca y apretar con más fuerza",
        "Escuchar si silba y dar unos golpes a la válvula para soltarla",
        "Agua jabonosa en la conexión; no forzar la válvula y devolverla",
      ],
      answer: 3,
      explain: "La NTP 397 indica comprobar la estanqueidad con agua jabonosa y prohíbe usar llama. Si la válvula presenta dificultad, la botella se devuelve al suministrador sin forzarla ni usar herramientas, y no se engrasa.",
    },
  ],
};
