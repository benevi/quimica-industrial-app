import type { Lesson } from "./types";

export const reactorAFondo: Lesson = {
  slug: "reactor-a-fondo",
  level: 12,
  order: 2,
  title: "El reactor a fondo: agitación, intercambio de calor y protecciones",
  titleEn: "The reactor in depth: agitation, heat transfer and protections",
  minutes: 38,
  summary:
    "Cada parte del reactor y para qué sirve, cómo mezcla el agitador, cómo entra y sale el calor por la camisa, qué cuidados pide el vitrificado y qué protege al equipo de la sobrepresión.",
  body: `
En la lección anterior viste el reactor por fuera. Ahora lo abrimos pieza a pieza. La idea central: un reactor es una **olla cerrada** que hace tres cosas a la vez. **Mezcla**, **mueve calor** y **aguanta presión**. Casi todo lo que vigila el operador sale de ahí.

### Las partes, una a una

| Parte | En inglés | Para qué sirve |
|---|---|---|
| Cuerpo y tapa | *Shell and head* | El recipiente y su cierre superior. Aguantan la presión y el vacío de diseño |
| Boca de hombre | *Manway* | Abertura grande de la tapa para cargar sólidos, inspeccionar y limpiar. Al abrirla entra aire |
| Tubuladuras | *Nozzles* | Bocas con brida de la tapa: carga de líquidos, sondas, nitrógeno, venteo, salida de vapores |
| Agitador | *Agitator* | Motor, eje y un rodete (*impeller*) que mueve el líquido |
| Deflector | *Baffle* | Pieza fija que frena el giro del líquido para que se mezcle de verdad |
| Cierre del eje | *Shaft seal* | Tapa el hueco por donde el eje atraviesa la tapa |
| Camisa | *Jacket* | Doble pared por la que circula el fluido que calienta o enfría |
| Válvula de fondo | *Bottom outlet valve* | Descarga el contenido por el punto más bajo |
| Mirilla | *Sight glass* | Ventana para mirar dentro sin abrir |
| Sondas | *Probes* | Miden temperatura de masa, presión, nivel o pH |
| Línea de vapores y condensador | *Vapour line and condenser* | Sacan los vapores y los convierten otra vez en líquido |
| Disco de ruptura y válvula de seguridad | *Rupture disc and pressure safety valve* | Dejan salir la presión antes de que el reactor se rompa |

La guía ICH Q7 (apartado 5.13) pide que los reactores y las líneas fijas estén identificados. Por eso todo lleva su código.

### Agitación: para qué sirve

Piensa en una olla de sopa. Si no remueves, lo de abajo se quema y lo de arriba sigue frío. El agitador hace cuatro trabajos:

1. **Mezclar**: que todo el líquido tenga la misma composición.
2. **Mantener los sólidos en suspensión** (*solids suspension*): que el polvo o los cristales no se queden en el fondo.
3. **Repartir el calor**: llevar el líquido hasta la pared de la camisa y traerlo de vuelta.
4. **Dispersar lo que se añade**: que un reactivo que entra se reparta y reaccione, en vez de quedarse en una zona.

Según la NTP 527 del INSST, perder la agitación tiene dos efectos inmediatos: una mezcla pobre de los reactivos y una mala transferencia de calor. Con mezcla pobre los reactivos se acumulan, y si hay dos líquidos que no se mezclan pueden separarse en capas que reaccionan peligrosamente al volver a agitar. Por eso recomienda vigilar la velocidad de giro o el consumo del motor, y que la válvula de adición se cierre sola si el agitador falla.

### Tipos de agitador

El líquido puede moverse de dos maneras. En el **flujo axial** (*axial flow*) el rodete lo empuja hacia abajo o hacia arriba, a lo largo del eje, como un ventilador. En el **flujo radial** (*radial flow*) lo lanza hacia los lados, contra la pared.

| Agitador | En inglés | Cómo mueve el líquido | Cuándo se usa |
|---|---|---|---|
| Ancla | *Anchor* | Gira despacio, pegada a la pared | Productos viscosos y para mejorar el paso de calor en la pared |
| Turbina de palas inclinadas | *Pitched blade turbine* | Sobre todo axial | Uso general y reparto de sólidos |
| Hélice | *Propeller* | Axial, palas pequeñas y giro rápido | Líquidos poco viscosos |
| Impulsor de palas curvadas hacia atrás o turbina de retroceso | *Retreat curve impeller* | Radial, tres palas curvas | El clásico del reactor vitrificado |

El flujo axial es el que mejor levanta los sólidos del fondo. El impulsor de retroceso se monta muy cerca del fondo para poder trabajar con niveles muy distintos. En un reactor vitrificado el agitador y el deflector tienen formas redondeadas, porque el vidrio no soporta bien las aristas.

### Deflectores

Si remueves un vaso con una cuchara, el líquido gira entero y forma un embudo en el centro, el **vórtice** (*vortex*). Da vueltas, pero apenas se mezcla. El deflector es un obstáculo fijo que rompe ese giro. Según la NTP 528, los rompecorrientes aumentan la turbulencia y con ella la transferencia de calor y la velocidad de reacción. En los reactores vitrificados lo habitual es un solo deflector colgado de una tubuladura de la tapa, y muchas veces lleva dentro la sonda de temperatura.

### Volumen mínimo de agitación

El rodete solo mueve el líquido que toca. Si el nivel queda por debajo de las palas, el motor gira pero no mezcla nada. Lo mismo le pasa a la sonda de temperatura: si no está sumergida, mide el gas de arriba y no la masa. El **volumen mínimo de agitación** (*minimum stirring volume*) es la cantidad de líquido que hace falta para cubrir el rodete y la sonda. La cifra la da la documentación de cada reactor.

Por debajo de ese volumen no se agita, porque no sirve. Tampoco se calienta ni se enfría con la camisa, porque el calor no se reparte y la temperatura de la pantalla no es la del producto.

### El cierre del eje

El eje del agitador atraviesa la tapa, y ese hueco tiene que quedar cerrado para que no salgan vapores ni entre aire. Lo habitual es el **cierre mecánico** (*mechanical seal*): dos anillos con caras muy planas, uno que gira con el eje y otro fijo, apretados uno contra otro por un muelle.

En el cierre doble hay dos parejas de anillos, y entre ellas un **líquido de barrera** (*barrier fluid*). Ese líquido se mantiene a más presión que la que hay que cerrar. Así, si una cara falla, lo que escapa es líquido de barrera y no vapores del reactor. El sistema también se lleva el calor del rozamiento y repone el líquido perdido.

El operador vigila el **nivel** y la **presión** del depósito de líquido de barrera. Si el nivel baja, el cierre pierde líquido, hacia fuera o hacia dentro del reactor: se avisa y se anota. El líquido de barrera debe ser compatible con el producto, y la guía ICH Q7 (apartado 5.14) pide que los lubricantes y los fluidos de calefacción o refrigeración no entren en contacto con el producto de forma que alteren su calidad.

### Calentar y enfriar por la camisa

El calor pasa del fluido de la camisa a la masa a través de la pared. La cantidad de calor que pasa cada segundo se calcula así:

> Q = U × A × ΔT

- **Q** es la potencia: calor por segundo, en vatios (W). 1 kW son 1 kJ cada segundo.
- **A** es la superficie de pared con producto por dentro y camisa por fuera, en m².
- **ΔT** es la diferencia de temperatura entre camisa y masa. Es el empujón: cuanto mayor es, más deprisa pasa el calor.
- **U** es el coeficiente global de transferencia de calor (*overall heat transfer coefficient*), en W/(m²·K). Dice lo fácil que lo tiene el calor para cruzar. Baja si no hay agitación, si la pared está sucia o si el producto es espeso.

La NTP 527 usa esta misma expresión para el calor que un reactor intercambia con el exterior.

**Ejemplo didáctico.** Con U = 300 W/(m²·K), A = 12 m² y la camisa 40 °C por encima de la masa: 300 × 12 × 40 = 144 000 W, es decir, **144 kW**. Cuando la masa se acerca a la temperatura de la camisa y la diferencia es solo de 10 °C: 300 × 12 × 10 = **36 kW**, la cuarta parte. Por eso los últimos grados siempre tardan más.

No se sube la camisa sin límite para ir más rápido: el producto que toca la pared se calienta más que el resto, y el vitrificado tiene un límite de diferencia de temperatura.

### Por qué un reactor grande calienta y enfría peor

Imagina un reactor con forma de bote, igual de alto que de ancho, y con camisa en la pared lateral.

| Diámetro y altura | Volumen | Pared lateral | Superficie por cada m³ |
|---|---|---|---|
| 1 m | 0,785 m³ | 3,14 m² | 4,0 m² |
| 2 m | 6,28 m³ | 12,57 m² | 2,0 m² |

Al doblar el tamaño, el volumen se multiplica por 8 y la superficie solo por 4. Cada litro tiene la mitad de pared. Pasa igual en casa: una taza de café se enfría en minutos y una olla grande tarda horas. La NTP 528 lo confirma: los reactores de gran escala trabajan cerca de condiciones adiabáticas, es decir, casi sin poder soltar calor.

### Camisa simple y media caña

La camisa simple es una doble pared completa. La **media caña** (*half-pipe coil*) es un tubo partido por la mitad y soldado en espiral alrededor del cuerpo. El fluido corre más deprisa por ella y aguanta más presión en el lado del servicio. A cambio, los huecos entre vueltas no intercambian calor, así que se pierde parte de la superficie. En un reactor vitrificado la ventaja es pequeña, porque la capa de vidrio es la que más frena el paso del calor.

### Acero vitrificado: lo que hay que respetar

El vidrio aguanta muy bien que lo aprieten y muy mal que lo estiren. Por eso el fabricante lo deja «apretado» contra el acero al fabricarlo. Un cambio brusco de temperatura puede anular ese apriete y agrietarlo: es el **choque térmico** (*thermal shock*). Hay dos situaciones distintas:

- **Por el lado del vidrio**: al cargar un producto frío sobre una pared caliente, o caliente sobre una pared fría.
- **Por el lado del acero**: al meter en la camisa un fluido mucho más caliente o más frío que la pared.

El fabricante da los límites de diferencia de temperatura para cada caso y la hoja los recoge. Superarlos puede dejar el reactor fuera de servicio.

En cuanto a los productos químicos, el vidrio resiste casi todos los ácidos. Las excepciones son las que ya conoces: el ácido fluorhídrico, el ácido fosfórico concentrado y caliente, y las bases fuertes calientes.

Para encontrar poros o grietas, mantenimiento hace el **ensayo de chispa** (*spark test*). Con el reactor vacío, limpio y seco se pasa una escobilla conectada a alta tensión por toda la superficie. Donde el acero ha quedado al descubierto salta una chispa. El voltaje máximo lo fija el fabricante: pasarse puede dañar el propio vidrio.

### Disco de ruptura y válvula de seguridad

Son la última barrera. Según la NTP 527, si la presión no se alivia, el reactor sufre sobrepresión y, en el peor caso, explota.

| | Disco de ruptura (*rupture disc*) | Válvula de seguridad (*pressure safety valve, PSV*) |
|---|---|---|
| Qué es | Una lámina calibrada | Una válvula cerrada por un muelle |
| Qué hace | Revienta a su presión de rotura | Abre a su presión de tarado |
| Después | No vuelve a cerrar: hay que cambiarlo | Vuelve a cerrar cuando la presión baja |

A veces van **en serie**, con el disco debajo de la válvula. El disco cierra de forma estanca y mantiene la válvula limpia, sin contacto con el producto que podría corroerla o atascarla. Y la válvula vuelve a cerrar después, así que no se vacía todo el reactor. Entre los dos se coloca un manómetro o un indicador. En marcha normal no debe marcar presión. Si la marca, el disco tiene una fuga, y eso es grave: el disco rompe por diferencia de presión entre sus dos caras, de modo que con presión detrás rompería más tarde de lo debido. Se avisa de inmediato.

Regla del operador: no se tocan, no se tapan, no se cierra ninguna válvula en su camino y no se arranca si falta alguno. Si un disco rompe o una válvula salta, se para, se avisa y se registra.

### Por lotes, semicontinuo, reflujo y destilación

En el trabajo **por lotes** (*batch*) se carga todo, se deja reaccionar y se vacía. Según un dato recogido en la NTP 527, alrededor del 80 % de los procesos del sector farmacéutico son discontinuos. En el modo **semicontinuo** (*semi-batch*) se carga solo una parte y el resto se añade poco a poco. La NTP 527 explica por qué se usa en reacciones exotérmicas: si se pierde el control, se puede parar la entrada de reactivo.

El condensador permite dos operaciones distintas:

- **Reflujo** (*reflux*): el disolvente hierve, el vapor sube, se condensa y **vuelve al reactor**. La masa se queda a la temperatura de ebullición sin perder disolvente. Además, según la NTP 528, el disolvente se lleva calor al evaporarse, así que el reflujo también enfría.
- **Destilación** (*distillation*): el líquido condensado **se desvía a un depósito** y no vuelve. El reactor va perdiendo disolvente.

### Reacciones exotérmicas y acumulación

Las NTP 527 y 528 añaden tres ideas a lo que ya sabes de la reacción descontrolada:

- El calor que genera una reacción crece muy deprisa con la temperatura, de forma exponencial. El calor que retira la camisa crece solo en proporción a la diferencia de temperatura. Por encima de cierta temperatura, la camisa ya no alcanza.
- Enfriar de más también es peligroso. Si durante la adición la masa está demasiado fría, la reacción va lenta y el reactivo se **acumula** sin reaccionar. Por eso la hoja da una temperatura mínima además de la máxima.
- Debe conocerse la velocidad máxima de adición que la refrigeración puede manejar, y no superarla.

**Ejemplo didáctico.** Si la camisa puede retirar 30 kW y cada kilo de reactivo añadido desprende 150 kJ, la adición no puede pasar de 30 / 150 = 0,2 kg/s, que son **12 kg por minuto**. Para 600 kg harían falta, como mínimo, 50 minutos. En planta la hoja ya da el tiempo mínimo de adición.

### Cálculos del día a día

**Volumen de una carga.** Volumen = masa / densidad. Para 2610 kg de un disolvente de densidad 0,87 kg/L (la del tolueno): 2610 / 0,87 = **3000 L**.

**Porcentaje de llenado.** Llenado = volumen ocupado / volumen nominal × 100. En un reactor de 6000 L: 3000 / 6000 × 100 = **50 %**.

**Calor para calentar.** Q = m × cp × ΔT. Para llevar esos 2610 kg de 20 a 70 °C con cp = 1,7 kJ/(kg·K): 2610 × 1,7 × 50 = **221 850 kJ**.

**Tiempo aproximado.** Tiempo = calor / potencia. Si la camisa entrega de media 50 kW: 221 850 / 50 = 4437 s, unos **74 minutos**. Es una estimación: la potencia real baja según la masa se acerca a la temperatura de la camisa.

### Arranque y parada, paso a paso

**Antes de empezar**
1. Reactor identificado, limpio y liberado, con su etiqueta de estado.
2. Válvula de fondo cerrada. Boca de hombre y tubuladuras cerradas.
3. Disco de ruptura y válvula de seguridad en su sitio; manómetro entre ambos sin presión.
4. Líquido de barrera del cierre: nivel y presión correctos.
5. Servicios disponibles: fluido de camisa, frío en el condensador, nitrógeno, vacío.
6. Válvulas del condensador en la posición que pide la hoja: reflujo o destilación.

**En marcha**
1. Inertizar y cargar el disolvente.
2. Arrancar el agitador cuando el nivel supera el volumen mínimo. Comprobar las rpm.
3. Calentar o enfriar respetando la diferencia máxima entre camisa y masa.
4. Adiciones con agitación en marcha, dentro del intervalo de temperatura y sin superar la velocidad indicada.
5. Vigilar temperatura de masa, temperatura de camisa, presión, rpm y consumo del motor.

**Parada**
1. Llevar la masa a la temperatura de descarga, también sin choque térmico.
2. Mantener la agitación durante la descarga mientras el nivel lo permita, para que los sólidos no se queden en el fondo. Pararla al llegar al volumen mínimo.
3. Cerrar la válvula de fondo y cambiar la etiqueta de estado.

La guía ICH Q7 pide que cada actividad se registre en el momento en que se hace (apartado 2.15) y que toda desviación se documente y se explique (apartado 8.15).

En planta manda siempre el procedimiento vigente (SOP) y la hoja de producción de cada lote.
`,
  plant: `
Turno de mañana. Te toca el reactor vitrificado R-204, de 6000 L, para una etapa del intermedio ficticio AX-22.

La hoja dice: *«Cargar 2610 kg de tolueno. Agitar a 90 rpm. Calentar a 70 °C con diferencia máxima camisa-masa de 50 °C. Adicionar 600 kg de reactivo B en no menos de 60 min, con la masa entre 68 y 75 °C. Calentar después a reflujo y mantener 2 h.»*

Antes de cargar miras el manómetro que hay entre el disco de ruptura y la válvula de seguridad: marca cero. El depósito del líquido de barrera tiene el nivel entre las dos marcas. La válvula del condensador está en posición de reflujo.

Cargas el tolueno. Son 3000 L, la mitad del reactor, muy por encima del volumen mínimo de agitación de la ficha del equipo. Arrancas el agitador y la pantalla confirma 90 rpm.

Empiezas a calentar. Con la masa a 20 °C, la camisa no puede pasar de 70 °C. Según sube la masa, el sistema sube la camisa. Los últimos grados van lentos, como esperabas.

Durante la adición, a los 25 minutos, la temperatura de masa baja a 67 °C: el reactivo entra frío. Paras la bomba. No sigues añadiendo por debajo de 68 °C, porque el reactivo se acumularía sin reaccionar. Esperas a recuperar 70 °C, reanudas y anotas la parada con su hora y su motivo. Avisas al jefe de turno, que decide si se abre una desviación.
`,
  batchRecord: `
- Código del reactor, estado de limpieza y etiqueta de estado comprobados, con hora y firma.
- Comprobaciones previas: válvula de fondo cerrada, disco de ruptura y válvula de seguridad instalados, manómetro entre ambos sin presión, nivel y presión del líquido de barrera, servicios disponibles.
- Cantidad cargada de cada material (teórica y real), con código y lote.
- Hora de arranque del agitador y velocidad (rpm). Cualquier parada de agitación, con hora y duración.
- Temperatura de masa y de camisa a los intervalos que marque la hoja, y la diferencia entre ambas en un reactor vitrificado.
- Hora de inicio y fin de cada adición, temperatura mínima y máxima durante la adición, y paradas con su motivo.
- Posición del condensador (reflujo o destilación), hora de inicio del reflujo y tiempo mantenido. En destilación, volumen recogido.
- Presión o vacío del reactor.
- Hora de inicio y fin de la descarga y estado final del equipo.
- Cualquier alarma, salto de válvula de seguridad, rotura de disco o valor fuera de límite: se anota en el momento, se avisa y se trata como desviación.
`,
  terms: [
    { es: "Tubuladura", en: "Nozzle", def: "Boca con brida en la tapa o el cuerpo del reactor para conectar líneas, sondas o protecciones." },
    { es: "Rodete", en: "Impeller", def: "Pieza con palas, al final del eje del agitador, que mueve el líquido." },
    { es: "Flujo axial", en: "Axial flow", def: "Movimiento del líquido a lo largo del eje, hacia abajo o hacia arriba. Levanta bien los sólidos del fondo." },
    { es: "Flujo radial", en: "Radial flow", def: "Movimiento del líquido desde el rodete hacia la pared del reactor." },
    { es: "Impulsor de palas curvadas hacia atrás", en: "Retreat curve impeller", def: "Agitador de tres palas curvas y flujo radial, montado cerca del fondo. Típico del reactor vitrificado." },
    { es: "Deflector", en: "Baffle", def: "Pieza fija que rompe el giro del líquido y evita el vórtice para que la mezcla sea real." },
    { es: "Volumen mínimo de agitación", en: "Minimum stirring volume", def: "Cantidad de líquido necesaria para cubrir el rodete y la sonda. Por debajo no se agita ni se calienta." },
    { es: "Cierre mecánico", en: "Mechanical seal", def: "Dos anillos de caras planas, uno giratorio y otro fijo, que cierran el paso del eje por la tapa." },
    { es: "Líquido de barrera", en: "Barrier fluid", def: "Líquido a presión entre las dos parejas de anillos de un cierre doble. Se vigilan su nivel y su presión." },
    { es: "Coeficiente global de transferencia de calor", en: "Overall heat transfer coefficient (U)", def: "Número que indica lo fácil que pasa el calor por la pared, en W/(m²·K)." },
    { es: "Media caña", en: "Half-pipe coil", def: "Tubo partido por la mitad y soldado en espiral al cuerpo del reactor, que hace de camisa." },
    { es: "Ensayo de chispa", en: "Spark test", def: "Prueba con alta tensión que detecta poros o grietas en el vitrificado." },
    { es: "Válvula de seguridad", en: "Pressure safety valve (PSV)", def: "Válvula con muelle que abre a su presión de tarado y vuelve a cerrar cuando la presión baja." },
    { es: "Reflujo", en: "Reflux", def: "Hervir un disolvente, condensar su vapor y devolverlo al reactor." },
  ],
  quiz: [
    {
      kind: "choice",
      q: "Según la NTP 527, ¿qué dos efectos inmediatos tiene perder la agitación?",
      options: [
        "Mezcla pobre de los reactivos y mala transferencia de calor",
        "Subida de la presión y rotura del disco de ruptura",
        "Pérdida de disolvente y bajada del nivel del reactor",
        "Choque térmico en el vidrio y fuga por el cierre del eje",
      ],
      answer: 0,
      explain: "Sin agitación los reactivos no se reparten y se acumulan, y el calor no llega bien a la pared de la camisa. Al volver a agitar, lo acumulado puede reaccionar de golpe.",
    },
    {
      kind: "number",
      q: "Cargas 1740 kg de un disolvente de densidad 0,87 kg/L. ¿Qué volumen ocupa?",
      answer: 2000,
      tolerance: 0.01,
      unit: "L",
      explain: "Volumen = masa / densidad = 1740 / 0,87 = 2000 L.",
    },
    {
      kind: "choice",
      q: "¿Para qué sirve el deflector de un reactor?",
      options: [
        "Para medir el nivel del líquido sin abrir la boca de hombre",
        "Para romper el giro del líquido y que la mezcla sea real",
        "Para proteger el vidrio de los golpes al cargar sólidos",
        "Para repartir el nitrógeno durante la inertización",
      ],
      answer: 1,
      explain: "Sin deflector el líquido gira entero y forma un vórtice: da vueltas pero apenas se mezcla. El deflector rompe ese giro y aumenta la turbulencia.",
    },
    {
      kind: "number",
      q: "Un reactor de 6000 L de volumen nominal contiene 4200 L de masa. ¿Cuál es el porcentaje de llenado?",
      answer: 70,
      tolerance: 0.01,
      unit: "%",
      explain: "Llenado = 4200 / 6000 × 100 = 70 %.",
    },
    {
      kind: "choice",
      q: "El manómetro situado entre el disco de ruptura y la válvula de seguridad marca presión con el reactor en marcha normal. ¿Qué significa?",
      options: [
        "Que la válvula de seguridad está bien tarada y lista",
        "Que el reactor está correctamente inertizado",
        "Que el disco tiene una fuga y hay que avisar de inmediato",
        "Que el condensador está trabajando en reflujo",
      ],
      answer: 2,
      explain: "Ese espacio debe estar sin presión. Si la hay, el disco deja pasar gas. Como el disco rompe por diferencia de presión entre sus caras, con presión detrás rompería más tarde de lo debido.",
    },
    {
      kind: "number",
      q: "Hay que calentar 2000 kg de masa con cp = 2,0 kJ/(kg·K) de 20 a 65 °C. La camisa entrega de media 40 kW. ¿Cuántos minutos tarda aproximadamente?",
      answer: 75,
      tolerance: 0.02,
      unit: "min",
      explain: "Q = 2000 × 2,0 × 45 = 180 000 kJ. Tiempo = 180 000 / 40 = 4500 s, que son 75 min. Recuerda que 1 kW es 1 kJ cada segundo.",
    },
    {
      kind: "choice",
      q: "Durante una adición exotérmica, la temperatura de masa cae por debajo del mínimo que marca la hoja. ¿Por qué hay que parar la adición?",
      options: [
        "Porque el disolvente puede congelarse en la camisa",
        "Porque el agitador consume más con la masa fría",
        "Porque el vidrio sufre choque térmico con el frío",
        "Porque el reactivo se acumula sin reaccionar",
      ],
      answer: 3,
      explain: "Con la masa demasiado fría la reacción va lenta y el reactivo que entra se queda sin reaccionar. Cuando la temperatura suba, puede reaccionar todo de golpe. Lo explican las NTP 527 y 528.",
    },
    {
      kind: "number",
      q: "Una camisa tiene U = 250 W/(m²·K) y A = 8 m². La camisa está 30 °C por encima de la masa. ¿Qué potencia pasa a la masa?",
      answer: 60,
      tolerance: 0.01,
      unit: "kW",
      explain: "Q = U × A × ΔT = 250 × 8 × 30 = 60 000 W = 60 kW.",
    },
    {
      kind: "choice",
      q: "¿Qué diferencia hay entre trabajar a reflujo y destilar?",
      options: [
        "A reflujo el condensado vuelve al reactor; al destilar se desvía",
        "A reflujo se trabaja con vacío; al destilar, siempre a presión",
        "A reflujo el condensador está parado; al destilar, en marcha",
        "A reflujo no hay agitación; al destilar, el agitador gira",
      ],
      answer: 0,
      explain: "En las dos operaciones el disolvente hierve y el condensador lo convierte en líquido. A reflujo ese líquido vuelve al reactor; en destilación se recoge en otro depósito.",
    },
    {
      kind: "choice",
      q: "Un reactor tiene el doble de diámetro y de altura que otro de la misma forma. ¿Qué pasa con la superficie de camisa por cada litro?",
      options: [
        "Se duplica, porque la pared es mucho más grande",
        "No cambia, porque la forma del reactor es la misma",
        "Se reduce a la mitad: el volumen crece más que la pared",
        "Se multiplica por ocho, igual que el volumen total",
      ],
      answer: 2,
      explain: "Al doblar el tamaño, la superficie se multiplica por 4 y el volumen por 8. Cada litro tiene la mitad de pared para intercambiar calor, por eso los reactores grandes calientan y enfrían más despacio.",
    },
  ],
};
