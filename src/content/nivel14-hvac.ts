import type { Lesson } from "./types";

export const hvacYSalasAFondo: Lesson = {
  slug: "hvac-y-salas-a-fondo",
  level: 14,
  order: 6,
  title: "Aire, presiones y salas a fondo: cómo protege la ventilación al producto y a ti",
  titleEn: "Air, pressures and rooms in depth: how ventilation protects the product and you",
  minutes: 40,
  summary:
    "La unidad de tratamiento de aire pieza a pieza, los filtros y su eficiencia, las renovaciones por hora, la cascada de presiones en pascales, las esclusas, los grados A a D y qué haces tú cuando salta una alarma de presión.",
  body: `
Ya sabes que el aire va de la sala con más presión a la que tiene menos. Aquí abrimos la máquina, hacemos las cuentas y vemos qué te toca a ti.

### Los tres trabajos del aire tratado
Según la guía de la Organización Mundial de la Salud (OMS) sobre HVAC (*heating, ventilation and air-conditioning*) para productos no estériles, el sistema hace tres trabajos:

1. **Proteger el producto**: que no le caigan partículas, microorganismos ni polvo de otro producto.
2. **Protegerte a ti**: que el polvo de principio activo y los vapores no acaben en el aire que respiras.
3. **Dar condiciones de trabajo**: temperatura y humedad adecuadas para el producto y para las personas.

Los dos primeros a veces tiran en sentidos contrarios. Para proteger el producto conviene que la sala tenga **más** presión que el pasillo: el aire sale y la suciedad no entra. Para contener un producto potente conviene que tenga **menos**: el polvo no sale. La NTP 1105 del INSST recomienda presión negativa respecto a las áreas vecinas donde se manipula en polvo un principio activo de las categorías más potentes (3B y 4). Las dos cosas a la vez se consiguen con esclusas, como verás más abajo.

### La unidad de tratamiento de aire, por dentro
La **unidad de tratamiento de aire** (UTA; *air handling unit*, AHU) es un armario grande, en una zona técnica, que prepara el aire y lo empuja hacia las salas.

| Pieza, en orden | Qué hace |
|---|---|
| Toma de aire exterior | Entrada del aire de la calle, lejos de las salidas de aire sucio. |
| Prefiltros | Paran el polvo grueso y protegen a las piezas que vienen detrás. |
| Batería de frío (*cooling coil*) | Tubos fríos que enfrían el aire. Parte de su humedad se condensa, como en un vaso frío en verano: así también se seca. |
| Batería de calor (*heating coil*) | Tubos calientes que suben el aire a la temperatura pedida. |
| Deshumidificador | Si hace falta aire muy seco, un material desecante, como el gel de sílice, absorbe más humedad. |
| Humidificador | Añade vapor de agua si el aire queda demasiado seco. No siempre lo hay. |
| Ventilador (*fan*) | Da al aire el empuje para cruzar filtros y conductos. |
| Filtros finales | Filtros finos, a veces de muy alta eficiencia, que dejan el aire limpio. |
| Conductos (*ducts*) | Las «tuberías» del aire hasta cada sala. |
| Difusores o rejillas de impulsión | Por donde el aire tratado entra en la sala. |
| Rejillas de retorno | Por donde el aire sale de la sala. |
| Extracción | Salida del aire a la calle, con sus filtros si hacen falta. |

Entre medias hay **compuertas** (*dampers*) que reparten el caudal. La OMS pide que no se acumule agua condensada ni haya filtros justo detrás de un humidificador: un filtro húmedo cría bacterias.

Oirás hablar de **aire de impulsión** (entra en la sala ya tratado), de **retorno** (vuelve a la unidad) y de **extracción** (se expulsa a la atmósfera).

### Filtros: del prefiltro al HEPA
Un filtro de aire es una capa de fibras muy finas y enredadas. El aire encuentra camino entre ellas; las partículas tropiezan con las fibras y se quedan retenidas.

Se montan en escalera, de basto a fino, para que el fino no se llene enseguida: prefiltro, filtro fino y **filtro HEPA** (*high efficiency particulate air*).

La **eficiencia** es el porcentaje de partículas que el filtro retiene. La guía de la OMS (TRS 1010, tabla A8.1) reproduce las clases de la norma europea EN 1822: un HEPA de clase **H13** retiene el **99,95 %** y uno **H14**, el **99,995 %**, medido con el tamaño de partícula que peor atrapa el filtro (el «más penetrante»).

La cuenta, con 100000 partículas que llegan al filtro. Pasan 100000 × (100 − eficiencia) / 100:

| Filtro | Retiene | Pasan |
|---|---|---|
| Uno del 90 % (valor de ejemplo) | 90000 | 10000 |
| HEPA H13, 99,95 % | 99950 | 50 |
| HEPA H14, 99,995 % | 99995 | 5 |

Entre H13 y H14 pasan diez veces menos partículas.

**Filtro terminal.** El HEPA puede ir dentro de la unidad o al final del conducto, ya en la sala, junto a la rejilla de impulsión. La OMS señala una ventaja del montaje terminal: si falla el ventilador, ayuda a que el polvo de una sala no llegue a otra.

**La presión diferencial del filtro.** Para cruzar el filtro el aire pierde presión. Esa pérdida se mide con un manómetro entre la cara de entrada y la de salida. La NTP 1055 del INSST, que trata de vitrinas de laboratorio con filtro, lo explica: cuando el HEPA se llena de polvo (se **colmata**), su pérdida de presión aumenta, y eso se ve midiendo la presión diferencial entre sus dos caras. Añade que ese aumento no empeora la eficacia de filtración. El problema es que pasa menos aire.

- **Sube poco a poco**: el filtro se está colmatando y habrá que cambiarlo.
- **Baja de golpe**: si de pronto el aire pasa con menos esfuerzo, puede que el filtro esté roto o mal asentado. Es una sospecha que se confirma con un ensayo.

Ese ensayo es el **ensayo de integridad** o de fugas del filtro instalado: comprueba que no hay rasgaduras ni fugas por la junta. La OMS pide que los HEPA los cambie una persona competente y que después se haga ese ensayo.

### Aire recirculado o todo aire exterior
Muchos sistemas **recirculan**: devuelven a la unidad parte del aire de retorno, lo mezclan con aire exterior y lo vuelven a tratar. Otros son de **todo aire exterior** o de paso único.

El riesgo es repartir por las salas lo que el aire recogió en una.

- ICH Q7 (4.22): si se recircula aire a las zonas de producción, hay que controlar los riesgos de contaminación y de contaminación cruzada.
- OMS (TRS 1010, 6.5): el aire que pueda llevar **disolventes orgánicos** o materiales muy peligrosos normalmente no se recircula. Un filtro de partículas no para vapores.
- NTP 1105: admite recircular en las categorías 1 a 3A si hay lavado o filtrado suficiente; en las 3B y 4 recomienda paso único.

### Renovaciones de aire por hora
Las **renovaciones por hora** (*air changes per hour*) dicen cuántas veces cabe en la sala el aire que le entra en una hora (definición de la OMS):

> renovaciones por hora = caudal impulsado (m³/h) / volumen de la sala (m³)

El volumen es largo × ancho × alto.

- **Cuenta 1, las renovaciones.** Sala de 6 m × 5 m × 3 m: 90 m³. Recibe 1080 m³/h. Son 1080 / 90 = 12 renovaciones por hora.
- **Cuenta 2, el caudal necesario.** Sala de 150 m³ que necesita 10 renovaciones por hora: 10 × 150 = 1500 m³/h.
- **Cuenta 3, lo que dura una renovación.** Con 12 por hora: 60 / 12 = 5 minutos.

Ojo con la última: a los 5 minutos no se ha ido todo el aire viejo, porque el nuevo se mezcla con él, como al echar agua limpia en un cubo de agua turbia que rebosa. Con mezcla perfecta, la fórmula de dilución de la NTP 741 da que tras una renovación queda el 37 % del aire viejo y tras tres, el 5 %.

Cifras de referencia:

| Fuente | Qué dice |
|---|---|
| RD 486/1997, anexo III | Mínimo de 30 m³ de aire limpio por hora y trabajador en trabajos sedentarios en ambientes no calurosos ni contaminados por humo de tabaco; 50 m³ en los demás casos. |
| NTP 1105 (INSST) | Donde se manipula principio activo en polvo: mínimo de 7 renovaciones por hora en las categorías 1 y 2, 10 en las 3A y 3B y 12 en la 4. |
| OMS, TRS 1019 | Valor orientativo de 6 a 20 renovaciones por hora. |

El real decreto piensa en que las personas respiren bien: cuatro personas son 4 × 50 = 200 m³/h. Las otras dos piensan en diluir el polvo y piden mucho más.

### Presiones diferenciales entre salas
La **cascada de presiones** es una escalera: cada sala tiene algo más o algo menos de presión que la vecina, y el aire baja los escalones.

**El número.** El anexo 1 de las normas europeas (punto 4.14) pide entre salas contiguas de distinto grado una diferencia mínima de **10 pascales**, como valor orientativo. La OMS, para productos no estériles, sugiere entre 5 y 20 Pa: lo bastante para que el aire no se dé la vuelta, sin crear turbulencias.

**La unidad.** El **pascal** (Pa) es una presión muy pequeña. Un bar son 100000 Pa, así que 1 mbar son 100 Pa. En manómetros antiguos verás milímetros de columna de agua (mm c.a.): 1 mm c.a. son 9,81 Pa.

- Cuenta 1: 15 Pa a mbar: 15 / 100 = 0,15 mbar.
- Cuenta 2: 15 Pa a mm c.a.: 15 / 9,81 = 1,53 mm c.a.

Es muy poco: milímetro y medio de agua.

**Cómo se mide.** Con un **manómetro diferencial** (*differential pressure gauge*): tiene dos tomas, una en cada sala, y marca la diferencia. Los hay de columna de líquido, de aguja y electrónicos. La OMS pide que estén calibrados y que junto al indicador figuren el rango normal y los límites de alerta y de acción.

**Al abrir una puerta.** El aire se escapa por el hueco y la diferencia cae mientras está abierta. Por eso las alarmas de presión pueden llevar un **retardo**, unos segundos de espera para no sonar cada vez que alguien pasa. El anexo 1 (4.16) pide que esos retardos estén justificados, que las diferencias críticas se vigilen y registren de forma continua y que el aviso no se anule sin evaluarlo.

### Esclusas
Una **esclusa** (*airlock*) es un cuarto pequeño con dos o más puertas entre dos zonas. Las hay de personal y de materiales; para objetos pequeños existe la ventana de paso o **SAS** (*pass-through hatch*).

La OMS (TRS 1019) distingue tres tipos según las presiones:

| Tipo | Presiones | Qué consigue |
|---|---|---|
| **Cascada** | Más presión a un lado y menos al otro. | El aire va siempre en el mismo sentido. |
| **Sumidero** (*sink*) | La esclusa tiene menos presión que las dos zonas. | El aire de los dos lados entra en la esclusa. |
| **Burbuja** (*bubble*) | La esclusa tiene más presión que las dos zonas. | El aire limpio de la esclusa sale hacia los dos lados. |

Con una burbuja o un sumidero se resuelve el conflicto del principio: una sala de producto potente puede estar en depresión sin que le entre aire sucio del pasillo ni salga polvo hacia él.

El anexo 1 (4.13) pide que las puertas no se abran a la vez: con **enclavamiento** (*interlock*) en los grados A y B y, como mínimo, aviso visual o sonoro en los C y D. Y, cuando hace falta, un **tiempo de espera** entre cerrar una puerta y abrir la otra. Si la luz está en rojo, esperas.

### Grados A, B, C y D, y qué pinta aquí un API
El anexo 1 clasifica las salas de productos estériles en cuatro grados. Esta es su tabla 1, en partículas por metro cúbico de aire:

| Grado | ≥ 0,5 µm en reposo | ≥ 0,5 µm en operación | ≥ 5 µm en reposo | ≥ 5 µm en operación |
|---|---|---|---|---|
| A | 3520 | 3520 | No especificado | No especificado |
| B | 3520 | 352000 | No especificado | 2930 |
| C | 352000 | 3520000 | 2930 | 29300 |
| D | 3520000 | No predeterminado | 29300 | No predeterminado |

El **A** es la zona crítica, como el llenado aséptico; el **B**, la sala que lo rodea; el **C** y el **D**, para etapas menos críticas. En el D el límite en operación lo fija cada fabricante.

Lo importante: **ese anexo es para medicamentos estériles**. Admite que sus principios se usen en productos no estériles si el fabricante lo decide y lo documenta. La norma de un principio activo es ICH Q7, que no usa esos grados:

- 4.21: ventilación, filtración y extracción que controlen presión, polvo, humedad, temperatura y, si procede, microorganismos, **según la etapa de fabricación**, con especial atención donde el principio activo queda **expuesto al ambiente**.
- 8.52: precauciones contra la contaminación cuando se maneja el producto después de la purificación.

En planta eso suele traducirse en dos mundos:

- **Zona de síntesis**: equipos cerrados, disolventes, zona clasificada por riesgo de atmósfera explosiva. El producto no ve el aire de la sala.
- **Zona de acabado**: donde el producto final se descarga de la centrífuga o del filtro, se seca, se muele y se envasa. Queda expuesto y ya no hay etapa posterior que lo limpie. Es la zona de aire filtrado, presiones y esclusas. La guía de la OMS dice que sus principios pueden aplicarse a estas etapas finales.

La clasificación de tu sala la decide y documenta tu empresa.

### Flujo turbulento, flujo unidireccional y cabinas
En una sala normal el aire limpio entra, se mezcla con el de la sala y lo va diluyendo. Es el **flujo turbulento**: limpia por dilución.

En el **flujo unidireccional** (*unidirectional airflow*), antes llamado laminar, el aire avanza en una sola dirección, a velocidad constante y en líneas paralelas. No diluye: barre.

La **cabina de pesada** o de flujo descendente lo aplica a tu puesto. La OMS la describe así: el aire baja en vertical y el polvo se extrae por una encimera perforada; el operador no lo respira y el material queda protegido de lo que suelta el operador.

Para que funcione no puedes estorbar al aire:

- **No te pongas entre el aire limpio y el producto.** No metas la cabeza ni los brazos por encima del envase abierto: lo que sueltes cae dentro.
- **No te pongas entre el producto y la aspiración.** El polvo viaja hacia la rejilla; si estás en medio, pasa por tu cara. La NTP 741 da por incorrecto que el aire arrastre el contaminante hacia donde respira el trabajador.
- **No tapes rejillas** con sacos o bidones. La colocación de personas y bultos con que se cualificó el puesto es la que hay que mantener (OMS, 4.18 y 4.19).

### Temperatura y humedad
- **Por el producto.** Un sólido **higroscópico**, el que absorbe agua del aire, se apelmaza y gana peso si la sala está húmeda.
- **Por la seguridad.** Con aire muy seco la electricidad estática se acumula. El RD 486/1997 pide una humedad relativa entre el 30 y el 70 % en locales cerrados, y un mínimo del 50 % donde haya riesgo por electricidad estática.
- **Por ti.** El mismo real decreto pide entre 17 y 27 °C en trabajos sedentarios y entre 14 y 25 °C en trabajos ligeros, y admite que el proceso puede imponer limitaciones.

Los límites de tu sala pueden ser más estrechos, porque los marca el producto.

### Extracción localizada y lavadores, en breve
La OMS es clara: el polvo y los vapores se retiran en origen siempre que se pueda, y el HVAC no debe ser el mecanismo principal de control del polvo. Para eso está la **extracción localizada**, la boca que aspira junto al foco. Puede ir enclavada con la unidad de aire, porque extraer aire de una sala cambia su presión. El aire extraído se lava o se filtra antes de salir; el equipo que lo lava con un líquido es el **lavador de gases** (*scrubber*). Más en «Manejo de sólidos a fondo» y «Exposición a productos químicos a fondo».

### Vigilancia, cualificación y mantenimiento
Se vigilan y registran las presiones entre salas, la temperatura, la humedad, la presión diferencial de los filtros y, en salas clasificadas, las partículas y los microorganismos (nivel 9). Cada parámetro tiene límite de **alerta** y de **acción**.

ICH Q7 (4.20) pide que los servicios que afectan a la calidad, HVAC incluido, estén **cualificados** y vigilados. Según el anexo 1 (4.25), cualificar una sala incluye la integridad de los filtros, caudales, diferencias de presión, sentido del aire, temperatura, humedad y el **ensayo de recuperación**: cuánto tarda la sala en volver a estar limpia tras ensuciarla a propósito. Como orientación, menos de 20 minutos en el anexo 1 y de 15 a 20 en la OMS. El anexo 15 pide reevaluar los sistemas con la frecuencia adecuada.

Por eso cambiar un filtro no es un recambio cualquiera: lo hace personal competente, va seguido del ensayo de fugas y todo cambio en el sistema pasa por control de cambios (OMS, 12.10 y 13.6).

### Qué haces tú
**Vigilas y anotas** la presión diferencial, la temperatura y la humedad antes de abrir producto, y cualquier alarma del aire.

**Ante una alarma de presión o una parada de la unidad**, lo habitual en los procedimientos es:

1. Parar las operaciones con producto abierto y cerrar envases y bocas de carga.
2. Comprobar lo evidente: una puerta mal cerrada.
3. Avisar al responsable de turno.
4. Anotar la hora, el valor y qué producto estaba expuesto.
5. No reanudar hasta que la presión vuelva y pase el tiempo de recuperación del procedimiento.

**No haces nunca:**

- Dejar una puerta abierta o calzada, ni forzar un enclavamiento.
- Tapar una rejilla de impulsión o de retorno.
- Apagar una extracción porque hace ruido o da frío.
- Tocar compuertas, consignas o el cero de un manómetro.

En planta manda siempre el procedimiento vigente (SOP): las cifras de esta lección son las de las guías; las de tu sala las fijó tu empresa.
`,
  plant: `
Sala de acabado SL-02, donde se envasa el producto ficticio FX-101 que sale del secadero SD-301. La sala mide 6 m × 5 m × 3 m (90 m³) y la unidad de aire UTA-03 le impulsa 1080 m³/h: 12 renovaciones por hora. El aire llega por dos filtros HEPA terminales en el techo y sale por rejillas de retorno a ras de suelo. La sala trabaja a +15 Pa respecto al pasillo, con una esclusa de personal entre los dos. Todos los valores son de ejemplo.

Estás llenando bolsas dentro de la cabina de flujo descendente. A las 10:42 suena la alarma del manómetro PDI-214: la presión ha caído a +3 Pa y no sube. No es una puerta: las dos de la esclusa están cerradas. Dejas de llenar, cierras la bolsa en curso y el contenedor, y avisas a la responsable de turno. En el panel, la presión diferencial del prefiltro de la UTA-03 lleva días subiendo y hoy ha llegado a su límite: el filtro está colmatado y pasa menos aire del que la sala necesita.

Mantenimiento cambia el prefiltro. La presión vuelve a +15 Pa a las 11:20. El procedimiento de la sala pide esperar 20 minutos de recuperación antes de exponer producto, así que no reanudas hasta las 11:40. Anotas las horas, los valores y que había una bolsa abierta. Calidad abre una desviación para valorar el producto expuesto entre las 10:42 y el cierre de la bolsa.

Si lo que hubiera caído de golpe fuese la presión diferencial de un HEPA, la sospecha sería otra: un filtro roto. Ahí no bastaría con cambiarlo; haría falta el ensayo de integridad antes de volver a trabajar.
`,
  batchRecord: `
- **Antes de exponer producto**: presión diferencial de la sala respecto al pasillo (en Pa, con su signo), temperatura y humedad relativa, con la hora, el código del indicador y tu firma. Comprobación de que cada valor está dentro del rango de la hoja.
- **Estado de la sala**: sala limpia y liberada, puertas cerradas, esclusa operativa.
- **Durante la operación**: cualquier alarma del sistema de aire, con hora de inicio y de fin, el valor más bajo que se alcanzó y qué producto estaba abierto en ese momento.
- **Si hubo parada o alarma**: qué hiciste (parar, cerrar envases, avisar), a quién avisaste, la hora en que se recuperó la presión y la hora en que reanudaste tras el tiempo de recuperación. Número de la desviación, si se abre.
- **Cabina o extracción localizada**: comprobación de que está en marcha y, si el puesto tiene indicador, su lectura.
- Lo que no está en tu hoja pero existe: el registro continuo de presiones del sistema de vigilancia, los cambios de filtros y sus ensayos de integridad, que lleva mantenimiento.
`,
  terms: [
    { es: "Unidad de tratamiento de aire (UTA)", en: "Air handling unit (AHU)", def: "Equipo que filtra, enfría, calienta, seca o humedece el aire y lo impulsa hacia las salas." },
    { es: "Filtro HEPA", en: "High efficiency particulate air filter", def: "Filtro de muy alta eficiencia; la clase H13 retiene el 99,95 % y la H14 el 99,995 % de las partículas del tamaño más penetrante." },
    { es: "Filtro terminal", en: "Terminal filter", def: "Filtro montado al final del conducto, ya en la sala, junto a la rejilla de impulsión." },
    { es: "Colmatación", en: "Filter clogging (loading)", def: "Llenado progresivo del filtro con polvo; se nota porque sube su presión diferencial y pasa menos aire." },
    { es: "Ensayo de integridad", en: "Filter integrity (leak) test", def: "Comprobación de que el filtro instalado no tiene poros, rasgaduras ni fugas por la junta." },
    { es: "Aire recirculado", en: "Recirculated air", def: "Aire extraído de las salas que vuelve a la unidad para tratarse de nuevo, mezclado con aire exterior." },
    { es: "Renovaciones por hora", en: "Air changes per hour (ACH)", def: "Caudal de aire impulsado, en m³/h, dividido entre el volumen de la sala, en m³." },
    { es: "Presión diferencial", en: "Differential pressure", def: "Diferencia de presión entre dos puntos: dos salas, o las dos caras de un filtro." },
    { es: "Manómetro diferencial", en: "Differential pressure gauge", def: "Instrumento con dos tomas que marca la diferencia de presión entre ellas, normalmente en pascales." },
    { es: "Esclusa burbuja", en: "Bubble airlock", def: "Esclusa con más presión que las dos zonas que separa; su aire limpio sale hacia ambos lados." },
    { es: "Esclusa sumidero", en: "Sink airlock", def: "Esclusa con menos presión que las dos zonas que separa; recoge el aire de ambos lados." },
    { es: "Flujo unidireccional", en: "Unidirectional airflow (UDAF)", def: "Aire que avanza en una sola dirección, a velocidad constante y en líneas paralelas, barriendo las partículas." },
    { es: "Tiempo de recuperación", en: "Recovery (clean-up) time", def: "Tiempo que tarda una sala en volver a su nivel de limpieza después de una perturbación." },
    { es: "Ventana de paso (SAS)", en: "Pass-through hatch", def: "Armario con dos puertas para pasar objetos entre dos zonas sin abrir paso directo al aire." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Una sala de acabado mide 8 m de largo, 5 m de ancho y 3 m de alto. Recibe 1800 m³/h de aire. ¿Cuántas renovaciones por hora tiene?",
      answer: 15,
      tolerance: 0.01,
      unit: "renovaciones/h",
      explain: "Volumen: 8 × 5 × 3 = 120 m³. Renovaciones: 1800 / 120 = 15 por hora.",
    },
    {
      kind: "number",
      q: "Una sala de 200 m³ necesita 12 renovaciones de aire por hora. ¿Qué caudal de aire hay que impulsarle?",
      answer: 2400,
      tolerance: 0.01,
      unit: "m³/h",
      explain: "Caudal = renovaciones × volumen = 12 × 200 = 2400 m³/h.",
    },
    {
      kind: "number",
      q: "El manómetro diferencial de la sala marca 25 Pa. Sabiendo que 1 mbar son 100 Pa, ¿cuántos milibares son?",
      answer: 0.25,
      tolerance: 0.01,
      unit: "mbar",
      explain: "25 / 100 = 0,25 mbar. Un pascal es una presión muy pequeña: cien veces menor que un milibar.",
    },
    {
      kind: "number",
      q: "A un filtro HEPA de clase H13, con una eficiencia del 99,95 %, le llegan 200000 partículas. ¿Cuántas lo atraviesan?",
      answer: 100,
      tolerance: 0.01,
      unit: "partículas",
      explain: "Pasa el 100 − 99,95 = 0,05 %. 200000 × 0,05 / 100 = 100 partículas.",
    },
    {
      kind: "number",
      q: "Una sala tiene 20 renovaciones de aire por hora. ¿Cuántos minutos tarda en entrar un volumen de aire igual al de la sala?",
      answer: 3,
      tolerance: 0.01,
      unit: "min",
      explain: "60 minutos / 20 renovaciones = 3 minutos por renovación. Como el aire nuevo se mezcla con el viejo, a los 3 minutos todavía queda parte del aire anterior.",
    },
    {
      kind: "choice",
      q: "La presión diferencial del filtro HEPA de tu sala lleva meses subiendo despacio. Hoy, de un turno a otro, ha bajado mucho. ¿Qué es lo más prudente pensar?",
      options: [
        "Que el filtro puede estar roto o mal asentado: avisas y no expones producto",
        "Que el filtro se ha limpiado solo y ahora deja pasar el aire mejor que antes",
        "Que el filtro está más colmatado que ayer y hay que subir el caudal de aire",
        "Que es una variación normal del instrumento y no hace falta decir nada",
      ],
      answer: 0,
      explain: "Un filtro que se colmata sube de presión diferencial poco a poco. Una bajada brusca hace sospechar que el aire pasa sin filtrar por una rotura o una junta; se confirma con el ensayo de integridad.",
    },
    {
      kind: "choice",
      q: "En tu zona de síntesis se trabaja con disolventes inflamables. ¿Por qué ese aire normalmente no se recircula a las salas aunque pase por un filtro HEPA?",
      options: [
        "Porque el filtro HEPA se colmata enseguida con los vapores de disolvente",
        "Porque un filtro de partículas no retiene vapores y volverían a las salas",
        "Porque el aire recirculado siempre está más caliente que el aire exterior",
        "Porque la norma prohíbe recircular aire en cualquier planta farmacéutica",
      ],
      answer: 1,
      explain: "El HEPA atrapa partículas, no vapores. La guía de la OMS dice que el aire que pueda llevar disolventes orgánicos normalmente no se recircula. Recircular no está prohibido en general: ICH Q7 4.22 pide controlar el riesgo.",
    },
    {
      kind: "choice",
      q: "Una sala donde se muele un principio activo muy potente debe estar en depresión para que el polvo no salga, pero tampoco debe entrarle aire sucio del pasillo. ¿Qué esclusa lo resuelve?",
      options: [
        "Una esclusa sin ventilación propia, con las dos puertas siempre abiertas",
        "Una esclusa a la misma presión que el pasillo y que la sala de molienda",
        "Una esclusa burbuja, con más presión que la sala y que el pasillo",
        "Una esclusa en cascada con la sala a más presión que el pasillo",
      ],
      answer: 2,
      explain: "En la esclusa burbuja el aire limpio sale hacia los dos lados: hacia la sala, que sigue en depresión, y hacia el pasillo. Ni entra aire sucio en la sala ni sale polvo al pasillo.",
    },
    {
      kind: "choice",
      q: "Estás envasando producto final y salta la alarma de presión diferencial de la sala. Las puertas están cerradas y la presión no se recupera. ¿Qué haces?",
      options: [
        "Reconozco la alarma y termino el contenedor, que solo faltan dos bolsas",
        "Abro la puerta del pasillo para que entre aire y se iguale la presión",
        "Sigo trabajando más deprisa para acabar antes de que venga mantenimiento",
        "Paro, cierro los envases, aviso, anoto la hora y espero la recuperación",
      ],
      answer: 3,
      explain: "Sin la presión correcta puede estar entrando aire sin control sobre producto expuesto. Se para, se cierra, se avisa y se anota; se reanuda cuando la presión vuelve y pasa el tiempo de recuperación del procedimiento.",
    },
    {
      kind: "choice",
      q: "Pesas un sólido en una cabina de flujo descendente: el aire limpio baja del techo y el polvo se aspira por la encimera perforada. ¿Cuál es la forma correcta de trabajar?",
      options: [
        "Inclinado sobre el envase abierto, con la cabeza justo encima del producto",
        "Con los sacos vacíos apilados sobre la encimera para tenerlos a mano",
        "Sin cubrir el envase con el cuerpo ni tapar las perforaciones de la encimera",
        "Con la cabina apagada mientras se pesa, para que la balanza no oscile",
      ],
      answer: 2,
      explain: "Si te pones entre el aire limpio y el producto, lo que sueltes cae dentro; si tapas la aspiración, el polvo no se va. Y la cabina se diseña para no alterar la balanza: no se apaga.",
    },
  ],
};
