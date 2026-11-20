import type { Lesson } from "./types";

export const bombasAFondo: Lesson = {
  slug: "bombas-a-fondo",
  level: 11,
  order: 4,
  title: "Bombas a fondo: cómo elegir, arrancar y cuidar una bomba",
  titleEn: "Pumps in depth: how to choose, start and look after a pump",
  minutes: 40,
  summary:
    "Altura y presión, la curva de la bomba y la del sistema, cavitación y NPSH con cuentas resueltas, variador y leyes de afinidad, potencia, bombas de desplazamiento positivo una a una, cierres del eje, bombas de vacío, seguridad y la rutina del operador.",
  body: `
En la lección «Bombas» viste los tipos y los errores que las rompen. Aquí vas a entender el porqué, con números. Los datos de bombas e instalaciones de esta lección son **valores de ejemplo** inventados; los de tu bomba están en su placa, su curva y su manual.

### Qué hace una bomba: dar altura
Una bomba no «fabrica» líquido: le da energía. La forma más cómoda de medir esa energía es la **altura** o **carga** (*head*): los metros que la bomba sería capaz de subir el líquido por un tubo vertical.

Altura y presión son dos caras de lo mismo. Una columna de líquido aprieta en su base con esta presión:

**P = ρ · g · h**

- P es la presión, en pascales (Pa). 1 bar son 100 000 Pa.
- ρ es la densidad: los kilos que pesa un metro cúbico del líquido. La del agua ronda los 1000 kg/m³.
- g es la gravedad: 9,81 m/s².
- h es la altura de la columna, en metros.

Lo importante: una bomba centrífuga, a un caudal dado, da **la misma altura con cualquier líquido**, pero **distinta presión**, porque un líquido más ligero pesa menos. Ejemplo con una bomba que da 30 m:

| Líquido | Densidad (valor de ejemplo) | Cuenta | Presión que da la bomba |
|---|---|---|---|
| Agua | 1000 kg/m³ | 1000 × 9,81 × 30 = 294 300 Pa | 2,94 bar |
| Disolvente ligero | 800 kg/m³ | 800 × 9,81 × 30 = 235 440 Pa | 2,35 bar |

Si la misma bomba marca menos presión con disolvente que con agua, no está averiada: el líquido pesa menos. Por eso las curvas se dan en metros y no en bar.

### La centrífuga por dentro
- **Aspiración** (*suction*): la boca por donde entra el líquido, hacia el centro del rodete.
- **Rodete** (*impeller*): una rueda con álabes que gira deprisa y lanza el líquido hacia fuera.
- **Voluta** (*volute*): la carcasa en forma de caracol que recoge ese líquido rápido, lo frena y convierte su velocidad en presión.
- **Impulsión** (*discharge*): la boca de salida.
- **Eje** (*shaft*): une el rodete con el motor. Donde el eje atraviesa la carcasa está el **cierre**, que evita que el líquido se escape.

### Por qué tiene que estar llena: el cebado
La presión que da el rodete depende de la densidad de lo que tiene dentro (la fórmula de antes). El aire pesa muchísimo menos que un líquido, así que una centrífuga llena de aire casi no crea presión y no es capaz de aspirar el líquido hasta ella. Por eso hay que **cebarla** (*priming*): llenar de líquido la carcasa y la tubería de aspiración, y sacar el aire por el venteo, antes de arrancar.

Si en marcha entra aire (una junta de la aspiración que no cierra, un depósito que se vacía), el aire se acumula en el centro del rodete y puede cortar el paso del líquido: la bomba gira, pero no da caudal.

### La curva de la bomba y la curva del sistema
Una centrífuga no da un caudal fijo. Cuanto más caudal pasa, menos altura da. Eso es la **curva de la bomba** (*pump curve*), y la dibuja el fabricante.

La instalación, por su parte, «pide» una altura para dejar pasar el líquido. Es la **curva del sistema** (*system curve*) y tiene dos partes:

- **Altura estática** (*static head*): lo que hay que subir el líquido y la diferencia de presión entre los dos depósitos. No depende del caudal.
- **Pérdidas por rozamiento** (*friction losses*): lo que se pierde en tuberías, codos, válvulas y filtros. Crecen más o menos con el cuadrado del caudal: doble de caudal, cuatro veces más pérdidas.

La bomba trabaja donde las dos curvas se cruzan: el **punto de funcionamiento** (*operating point*). Ejemplo inventado, con altura estática de 8 m:

| Caudal (m³/h) | Altura que da la bomba (m) | Altura que pide el sistema, válvula abierta (m) | Altura que pide con la válvula medio cerrada (m) |
|---|---|---|---|
| 0 | 40 | 8 | 8 |
| 5 | 39 | 9 | 15 |
| 10 | 36 | 12 | 36 |
| 15 | 31 | 17 | 71 |
| 20 | 24 | 24 | 120 |

Con la válvula abierta, bomba y sistema coinciden en **20 m³/h y 24 m**. Ese es el caudal que tendrás.

Al **cerrar en parte la válvula de impulsión** añades rozamiento: la curva del sistema se empina. El nuevo cruce está en **10 m³/h y 36 m**. El caudal baja y la presión en la impulsión sube. Así se regula una centrífuga con una válvula, y un filtro que se ensucia hace lo mismo sin que nadie toque nada.

### Arranque, caudal mínimo y trabajo en seco
- **Arranque con la impulsión cerrada o casi cerrada.** En las centrífugas de rodete radial la potencia que pide el motor es mínima a caudal cero. Arrancar así descarga al motor mientras acelera; después la válvula se abre despacio. No vale para todas (las de flujo axial se arrancan con la válvula abierta): manda el manual.
- **No dejarla así.** Con la impulsión cerrada la energía del motor no se va con el líquido: se queda en el poco líquido de la carcasa y lo calienta, hasta poder hacerlo hervir.
- **Caudal mínimo** (*minimum flow*). Por debajo de un caudal que fija el fabricante la bomba se calienta y el líquido recircula dentro del rodete de forma inestable.
- **Trabajo en seco** (*dry running*). Las dos caras del cierre mecánico se lubrican y se enfrían con una película finísima del propio líquido. Sin líquido rozan en seco, se recalientan y el cierre acaba perdiendo.

### Cavitación y NPSH
Primero, la **presión de vapor** (*vapour pressure*). Un líquido hierve cuando la presión que tiene encima baja hasta su presión de vapor. Esa presión de vapor sube con la temperatura. El agua a 20 °C tiene una presión de vapor de 2,34 kPa; a 80 °C, de 47,4 kPa; y a 100 °C, de 101,3 kPa, que es la presión atmosférica: por eso hierve a 100 °C en una olla abierta. Es decir: **se puede hacer hervir un líquido sin calentarlo, solo bajándole la presión**.

Eso es lo que pasa en la **cavitación** (*cavitation*). El punto de menos presión de toda la instalación es la entrada del rodete. Si ahí la presión cae por debajo de la presión de vapor, el líquido hierve y se forman burbujas. Las burbujas viajan con el líquido hacia la zona de alta presión y allí se aplastan de golpe. Cada implosión es un martillazo diminuto contra el metal; miles por segundo acaban picando el rodete.

Para saber si una bomba cavitará se comparan dos números, los dos en metros:

- **NPSH disponible** (*NPSH available*): el margen que la instalación ofrece en la aspiración por encima de la presión de vapor.
- **NPSH requerido** (*NPSH required*): el margen que la bomba necesita para no cavitar. Lo da el fabricante en la curva y crece con el caudal.

La regla: **el disponible tiene que ser mayor que el requerido**, con un margen que fija el fabricante.

**NPSH disponible = (P superficie − P vapor) / (ρ · g) + altura del líquido sobre la bomba − pérdidas en la aspiración**

Las presiones van en pascales y en valor absoluto (contando desde el vacío). Si el líquido está por debajo de la bomba, la altura resta. En los tres ejemplos la bomba requiere 3 m.

**Ejemplo 1: agua fría, depósito abierto. Funciona.** Agua a 20 °C (densidad 998 kg/m³, presión de vapor 2340 Pa), depósito abierto a la atmósfera (101 300 Pa), nivel 2 m por encima de la bomba, pérdidas de 0,5 m.

1. Presión que sobra: 101 300 − 2340 = 98 960 Pa.
2. En metros: 98 960 / (998 × 9,81) = 10,11 m.
3. NPSH disponible = 10,11 + 2 − 0,5 = **11,61 m**. Mucho más que 3 m: no cavita.

**Ejemplo 2: la misma instalación con agua a 80 °C.** Densidad 972 kg/m³, presión de vapor 47 400 Pa.

1. 101 300 − 47 400 = 53 900 Pa.
2. 53 900 / (972 × 9,81) = 5,65 m.
3. NPSH disponible = 5,65 + 2 − 0,5 = **7,15 m**. Sigue funcionando, pero solo por calentar el agua has perdido casi 4,5 m de margen.

**Ejemplo 3: depósito bajo vacío con líquido hirviendo. Cavita.** Es el caso de un colector de destilado a vacío. Si el líquido está en su punto de ebullición, la presión de la superficie es igual a su presión de vapor y el primer término vale cero, sea cual sea el disolvente. Con el nivel 1,5 m sobre la bomba y 0,5 m de pérdidas:

NPSH disponible = 0 + 1,5 − 0,5 = **1,0 m**. Menos que 3 m: la bomba cavita.

**Cómo se reconoce:** ruido como de grava dentro de la bomba, vibración, y caudal y presión que caen o bailan.

**Qué hacer:** avisar y no dejarla cavitando. Lo que sube el NPSH disponible sale de la fórmula: más nivel en el depósito, líquido más frío y aspiración sin estorbos (válvula abierta del todo, filtro limpio). Lo que baja el requerido: menos caudal. Nunca se regula una centrífuga cerrando la aspiración.

### Variador y leyes de afinidad
Un **variador de frecuencia** (*variable frequency drive*, VFD) cambia la velocidad del motor. Las **leyes de afinidad** (*affinity laws*) dicen cómo cambia la curva de una centrífuga con la velocidad:

- El caudal cambia en proporción a la velocidad.
- La altura, con el cuadrado.
- La potencia, con el cubo.

Tres ejemplos al pasar de 50 Hz a 40 Hz (40 / 50 = 0,8):

1. Caudal: 20 m³/h × 0,8 = **16 m³/h**.
2. Altura: 0,8 × 0,8 = 0,64. Una altura de 40 m pasa a 40 × 0,64 = **25,6 m**.
3. Potencia: 0,8 × 0,8 × 0,8 = 0,512. Un consumo de 4 kW pasa a 4 × 0,512 = **2,05 kW**. Casi la mitad de energía por un 20 % menos de velocidad.

**Aviso.** Estas leyes mueven la curva de la bomba; el caudal real sigue siendo el cruce con la curva del sistema. En la instalación de la tabla, a 40 Hz la bomba cruza al sistema en 14,8 m³/h, no en 16, porque los 8 m de altura estática no bajan con la velocidad. Y a 20 Hz la bomba solo llega a 6,4 m: no vence los 8 m y no pasa nada de líquido, aunque esté girando.

### Potencia de una bomba
La **potencia hidráulica** es la energía por segundo que recibe el líquido:

**P = ρ · g · Q · H**

con el caudal Q en m³/s (los m³/h se dividen entre 3600) y la altura H en metros. Sale en vatios (W).

El **rendimiento** (*efficiency*) es la fracción aprovechada: potencia en el eje = potencia hidráulica / rendimiento.

- **Ejemplo 1.** Agua (1000 kg/m³), 20 m³/h y 24 m. P = 1000 × 9,81 × (20 / 3600) × 24 = 1308 W = **1,31 kW**. Con un rendimiento de 0,60, el eje necesita 1308 / 0,60 = 2180 W = **2,18 kW**.
- **Ejemplo 2.** El mismo punto con un disolvente de 800 kg/m³: 800 × 9,81 × (20 / 3600) × 24 = 1046 W = **1,05 kW**; en el eje, 1046 / 0,60 = 1744 W = **1,74 kW**. Más ligero, menos potencia.

### Bombas de desplazamiento positivo, una a una
Todas atrapan un volumen de líquido y lo empujan hacia la salida. No tienen una altura máxima como la centrífuga: con la impulsión cerrada siguen empujando y la presión sube hasta que algo cede. De ahí la **válvula de alivio** (*relief valve*), que abre un camino de retorno antes de llegar a ese punto.

| Bomba | Cómo funciona | Para qué se usa |
|---|---|---|
| **Membrana neumática** (*AODD*) | Dos membranas unidas por un eje. El aire comprimido empuja una y luego la otra; unas válvulas de bola dejan pasar el líquido en un solo sentido. | Trasvases de disolventes y suspensiones, vaciado de bidones. Se ceba sola y no lleva motor eléctrico. |
| **Engranajes** (*gear pump*) | Dos ruedas dentadas giran encajadas en una carcasa ajustada; el líquido viaja en los huecos entre dientes y pared. | Líquidos limpios y viscosos, caudal constante. |
| **Lóbulos** (*lobe pump*) | Parecida, pero con dos rotores de lóbulos que no llegan a tocarse; los sincronizan unos engranajes exteriores. | Productos viscosos o delicados. |
| **Peristáltica** (*peristaltic pump*) | Unos rodillos aplastan un tubo flexible y empujan el líquido, como al apretar un tubo de pasta de dientes. El líquido solo toca el tubo; no hay cierre ni válvulas. | Dosificar líquidos corrosivos o que no deben contaminarse. |
| **Pistón** (*piston pump*) | Un pistón aspira al retroceder y empuja al avanzar, con una válvula antirretorno a cada lado. | Presiones altas. Caudal a golpes. |
| **Dosificadora** (*metering pump*) | De pistón o de membrana, con la carrera o la velocidad ajustables para dar un caudal exacto. | Añadir reactivos poco a poco. |

**La excepción neumática.** La bomba de membrana neumática no puede dar más presión que la del aire que la mueve. Con la salida cerrada, las presiones se igualan y se para sola.

### En serie y en paralelo
Dos bombas **en serie** (una detrás de otra) dan el mismo caudal y **suman sus alturas**.

Dos bombas **en paralelo** (una al lado de otra, a la misma tubería) **suman sus caudales** a igual altura. Pero el caudal real no se duplica: al pasar más líquido el sistema pide más altura y el cruce queda por debajo del doble.

### El cierre del eje
- **Empaquetadura** (*gland packing*): anillos de cordón trenzado apretados alrededor del eje. Necesita gotear un poco para lubricarse y enfriarse, así que no vale para líquidos peligrosos.
- **Cierre mecánico simple** (*mechanical seal*): dos caras muy pulidas, una que gira con el eje y otra fija, separadas por una película de líquido.
- **Cierre mecánico doble**: dos cierres seguidos con un **líquido de barrera** (*barrier fluid*) entre ellos, a más presión que el producto. Si un cierre falla, lo que se mueve es el líquido de barrera, no el producto hacia la sala. Es lo que se usa cuando el líquido es un peligro para las personas o el ambiente.
- **Bombas sin cierre**: de **accionamiento magnético** (*magnetic drive pump*). El motor hace girar unos imanes exteriores que arrastran a otros imanes interiores a través de una pared fija y estanca. El eje no atraviesa la carcasa, así que no hay cierre que pueda fugar. Por eso se usan con disolventes tóxicos o inflamables.

### Bombas de vacío
Sacan gas de un equipo para bajar su presión. En una planta de API dan el vacío para destilar a menos temperatura, para secar, para filtrar y para los ciclos de inertización.

- **De anillo líquido** (*liquid ring pump*): un rodete descentrado gira dentro de una carcasa con algo de líquido. El líquido forma un anillo contra la pared y, entre los álabes, quedan cámaras de gas que se agrandan y se encogen. Tolera bien vapores y gotas. Su vacío máximo lo limita la presión de vapor del líquido del anillo.
- **Secas** (*dry vacuum pumps*), como las de tornillo: comprimen el gas entre rotores sin ningún líquido de trabajo. No contaminan el vapor y llegan a vacíos más profundos. Son más sensibles a las partículas.

### Seguridad
- **Atmósferas explosivas.** Donde se bombean disolventes inflamables la zona está clasificada (zona 0, 1 o 2 para gases y vapores) y los aparatos tienen que ser de la categoría que corresponde a esa zona.
- **Electricidad estática.** El líquido se carga al pasar por tuberías, filtros, válvulas y bombas, más cuanto más deprisa va. Bomba, tuberías, mangueras y recipientes se unen entre sí y a tierra.
- **Partes giratorias.** El acoplamiento entre motor y bomba va cubierto por un resguardo. Sin resguardo no se arranca.
- **Fugas por el cierre.** Un goteo de disolvente es a la vez un riesgo de incendio y de exposición. Se avisa.
- **Presión.** Antes de soltar una manguera o una brida, la línea se despresuriza y se vacía.
- **Consignación** (*lockout/tagout*). Antes de intervenir: separar la bomba de sus fuentes de energía (electricidad y aire comprimido), bloquear con candado, disipar la presión que quede y comprobar que no arranca.

### La rutina del operador
**Antes de arrancar:** identificar la bomba y la línea; resguardo puesto y tierra conectada; válvula de aspiración abierta del todo; bomba llena y venteada; impulsión como diga el procedimiento; nivel suficiente en el depósito de origen; nivel y presión del líquido de barrera si el cierre es doble; ninguna fuga.

**Arranque:** arrancar, comprobar que la presión de impulsión sube y abrir la impulsión despacio hasta el caudal pedido.

**Vigilancia:** presión de aspiración y de impulsión, caudal, ruido, vibración, temperatura, fugas y nivel del depósito de origen.

**Parada:** según el procedimiento; no dejar que el depósito se vacíe con la bomba en marcha; lavado de línea si toca; registrar.

| Síntoma | Causa probable |
|---|---|
| No da caudal | Bomba sin cebar o con aire; válvula de aspiración cerrada; filtro de aspiración obstruido; giro al revés tras un mantenimiento; depósito de origen vacío |
| Hace ruido de grava | Cavitación: poco nivel, líquido caliente, aspiración estrangulada, demasiado caudal |
| Se calienta | Impulsión cerrada o caudal por debajo del mínimo; trabajo en seco |
| Pierde por el cierre | Cierre mecánico gastado o dañado por trabajar en seco; en cierre doble, vigilar si baja el líquido de barrera |

En planta manda siempre el procedimiento vigente (SOP) y el manual del fabricante de cada bomba.
`,
  plant: `
Turno de tarde. Hay que trasvasar las aguas madres del lote ficticio KV-23 desde el colector V-310 al depósito T-520 con la bomba centrífuga P-311, que lleva cierre mecánico doble y variador.

Antes de arrancar repasas la lista: pinzas de tierra puestas, resguardo del acoplamiento en su sitio, válvula de aspiración abierta del todo, bomba venteada, nivel del líquido de barrera entre marcas. El V-310 marca un 60 %.

Arrancas con la impulsión casi cerrada. El manómetro de impulsión sube a 3,1 bar y abres despacio hasta que el caudalímetro marca 12 m³/h, lo que pide la hoja. Aspiración: 0,3 bar. Todo estable.

A los veinte minutos oyes un ruido nuevo, como si la bomba tragara grava. El manómetro de impulsión baila y el caudal ha caído a 9 m³/h. Miras el V-310: el nivel está en el 8 % y el líquido venía tibio de la etapa anterior. Poca altura sobre la bomba y presión de vapor alta: el NPSH disponible se ha quedado corto y la bomba cavita.

No la dejas así. Bajas la velocidad con el variador, el ruido desaparece, y avisas al jefe de turno. Termináis el trasvase a caudal reducido, vigilando el nivel, y paras la bomba antes de que el colector se vacíe para que no trabaje en seco.

En la hoja anotas la hora, lo que oíste, las lecturas y lo que hiciste. Al revisar, el nivel del líquido de barrera no ha bajado: el cierre no ha sufrido.
`,
  batchRecord: `
En la hoja de producción (*batch record*) el trasvase suele ser un paso con origen, destino, bomba y cantidad. Lo que anotas:

- **Equipos**: código de la bomba (p. ej. P-311) y de los depósitos de origen y destino.
- **Comprobaciones previas**: puesta a tierra conectada, válvulas alineadas y, si la hoja lo pide, verificación por una segunda persona.
- **Horas reales** de inicio y fin del trasvase.
- **Cantidad trasvasada**: por caudalímetro, por nivel o por peso, con su unidad.
- **Lecturas** que pida la hoja: presión de impulsión, caudal o frecuencia del variador. El valor real, no «correcto».
- **Lavado de línea** (*line flush*): disolvente y cantidad.
- **Cualquier anomalía** (ruido, caída de caudal, fuga, parada), con la hora, lo que hiciste y a quién avisaste. Si afecta al lote, se abre una desviación.

En el registro del equipo (*equipment logbook*) de la bomba se apunta el uso (lote y producto), la limpieza, y las incidencias y avisos a mantenimiento: fuga por el cierre, reposición de líquido de barrera, ruido o vibración anormal.

Todo se anota en el momento, con fecha, hora y firma.
`,
  terms: [
    { es: "Altura o carga", en: "Head", def: "Energía que la bomba da al líquido, medida en metros de columna de ese líquido. Se pasa a presión con P = ρ · g · h." },
    { es: "Cebado", en: "Priming", def: "Llenar de líquido la bomba y la aspiración y sacar el aire antes de arrancar. Una centrífuga con aire no aspira." },
    { es: "Voluta", en: "Volute", def: "Carcasa en forma de caracol que recoge el líquido que lanza el rodete y convierte su velocidad en presión." },
    { es: "Curva de la bomba", en: "Pump curve", def: "Gráfica del fabricante con la altura que da la bomba a cada caudal." },
    { es: "Curva del sistema", en: "System curve", def: "Altura que pide la instalación a cada caudal: altura estática más pérdidas por rozamiento." },
    { es: "Punto de funcionamiento", en: "Operating point", def: "Cruce de la curva de la bomba con la del sistema. Es el caudal y la altura reales." },
    { es: "Presión de vapor", en: "Vapour pressure", def: "Presión a la que un líquido hierve a una temperatura dada. Sube con la temperatura." },
    { es: "NPSH disponible", en: "NPSH available (NPSHa)", def: "Margen, en metros, que la instalación ofrece en la aspiración por encima de la presión de vapor." },
    { es: "NPSH requerido", en: "NPSH required (NPSHr)", def: "Margen, en metros, que la bomba necesita en la aspiración para no cavitar. Lo da el fabricante." },
    { es: "Leyes de afinidad", en: "Affinity laws", def: "Al cambiar la velocidad de una centrífuga, el caudal cambia en proporción, la altura con el cuadrado y la potencia con el cubo." },
    { es: "Rendimiento", en: "Efficiency", def: "Fracción de la potencia del eje que llega al líquido como potencia hidráulica." },
    { es: "Válvula de alivio", en: "Relief valve", def: "Válvula que abre un retorno cuando la presión sube demasiado. Protege a las bombas de desplazamiento positivo." },
    { es: "Líquido de barrera", en: "Barrier fluid", def: "Líquido limpio a presión entre los dos cierres de un cierre mecánico doble." },
    { es: "Bomba de accionamiento magnético", en: "Magnetic drive pump", def: "Bomba sin cierre en el eje: el giro se transmite con imanes a través de una pared estanca." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Una bomba centrífuga da una altura de 25 m. Bombea un disolvente de densidad 900 kg/m³ (valor de ejemplo). Con g = 9,81 m/s², ¿qué presión da, en bar? (1 bar = 100 000 Pa)",
      answer: 2.21,
      tolerance: 0.02,
      unit: "bar",
      explain: "P = ρ · g · h = 900 × 9,81 × 25 = 220 725 Pa, que entre 100 000 son 2,21 bar. Con agua la misma bomba daría más presión, porque el agua pesa más.",
    },
    {
      kind: "choice",
      q: "Una centrífuga que ayer movía agua hoy mueve un disolvente más ligero. Gira igual y el caudal es el mismo, pero el manómetro de impulsión marca menos. ¿Qué pasa?",
      options: [
        "El rodete está gastado y ya no llega a dar la misma altura que ayer",
        "Está cavitando por culpa de la baja densidad del disolvente de hoy",
        "Nada raro: da la misma altura y un líquido ligero es menos presión",
        "El manómetro se ha descalibrado al cambiar de un líquido a otro",
      ],
      answer: 2,
      explain: "Una centrífuga da la misma altura en metros con cualquier líquido, y la presión es P = ρ · g · h: con menos densidad sale menos presión sin que haya avería.",
    },
    {
      kind: "number",
      q: "Depósito cerrado con una presión absoluta en la superficie de 150 000 Pa. El líquido tiene una presión de vapor de 30 000 Pa y una densidad de 850 kg/m³ (valores de ejemplo). El nivel está 3 m por encima de la bomba y las pérdidas en la aspiración son 0,8 m. Con g = 9,81 m/s², ¿cuál es el NPSH disponible, en metros?",
      answer: 16.59,
      tolerance: 0.02,
      unit: "m",
      explain: "(150 000 − 30 000) / (850 × 9,81) = 14,39 m; más 3 m de nivel, menos 0,8 m de pérdidas: 16,59 m.",
    },
    {
      kind: "number",
      q: "Un colector trabaja a vacío y el disolvente que contiene está hirviendo, así que la presión en la superficie es igual a su presión de vapor. El nivel está 2,5 m por encima de la bomba y las pérdidas en la aspiración son 0,7 m. ¿Cuál es el NPSH disponible, en metros?",
      answer: 1.8,
      tolerance: 0.02,
      unit: "m",
      explain: "Con el líquido hirviendo el primer término de la fórmula vale cero. Queda la altura menos las pérdidas: 2,5 − 0,7 = 1,8 m.",
    },
    {
      kind: "choice",
      q: "Trasvasas con una centrífuga y empieza a sonar como si llevara grava dentro; el caudal cae. El depósito de origen está casi vacío y el líquido viene caliente. ¿Qué haces?",
      options: [
        "Reducir el caudal, avisar y no dejarla trabajando en ese estado",
        "Cerrar un poco la válvula de aspiración para estabilizar la bomba",
        "Subir la velocidad con el variador para recuperar el caudal perdido",
        "Seguir hasta acabar, porque el ruido no llega a dañar la bomba",
      ],
      answer: 0,
      explain: "Es cavitación: poco nivel y líquido caliente bajan el NPSH disponible. Menos caudal baja el NPSH requerido. Cerrar la aspiración o subir la velocidad lo empeora, y seguir así pica el rodete.",
    },
    {
      kind: "number",
      q: "Una bomba centrífuga consume 10 kW a 50 Hz. Con el variador la bajas a 35 Hz. Según las leyes de afinidad, ¿cuánta potencia consume ahora, en kW?",
      answer: 3.43,
      tolerance: 0.02,
      unit: "kW",
      explain: "La potencia cambia con el cubo de la velocidad: 35 / 50 = 0,7 y 0,7 × 0,7 × 0,7 = 0,343. Entonces 10 × 0,343 = 3,43 kW.",
    },
    {
      kind: "number",
      q: "Una centrífuga da 50 m de altura con la impulsión cerrada a 50 Hz. ¿Qué altura dará con la impulsión cerrada a 45 Hz, en metros?",
      answer: 40.5,
      tolerance: 0.02,
      unit: "m",
      explain: "La altura cambia con el cuadrado de la velocidad: 45 / 50 = 0,9 y 0,9 × 0,9 = 0,81. Entonces 50 × 0,81 = 40,5 m.",
    },
    {
      kind: "number",
      q: "Una bomba mueve 36 m³/h de agua (1000 kg/m³) y le da 30 m de altura. Su rendimiento es 0,65. Con g = 9,81 m/s², ¿qué potencia necesita en el eje, en kW?",
      answer: 4.53,
      tolerance: 0.02,
      unit: "kW",
      explain: "Q = 36 / 3600 = 0,01 m³/s. Potencia hidráulica = 1000 × 9,81 × 0,01 × 30 = 2943 W. En el eje: 2943 / 0,65 = 4528 W, es decir, 4,53 kW.",
    },
    {
      kind: "choice",
      q: "Alguien cierra la impulsión de una bomba de engranajes en marcha y, en otra línea, la de una bomba de membrana neumática. ¿Qué ocurre en cada una?",
      options: [
        "Las dos se paran solas sin daño, porque ambas mueven un volumen fijo",
        "En las dos sube la presión sin límite hasta que rompe alguna pieza",
        "La de engranajes se para sola y la neumática sigue subiendo presión",
        "La de engranajes sube presión hasta el alivio; la neumática se para",
      ],
      answer: 3,
      explain: "La de engranajes sigue empujando un volumen fijo y la presión sube hasta que abre la válvula de alivio o algo cede. La neumática no puede superar la presión del aire que la mueve y se para sola.",
    },
    {
      kind: "choice",
      q: "Hay que bombear a diario un disolvente tóxico e inflamable y se quiere evitar cualquier fuga por el eje. ¿Qué bomba encaja mejor?",
      options: [
        "Una centrífuga con empaquetadura bien apretada para que no gotee",
        "Una centrífuga de accionamiento magnético, sin cierre en el eje",
        "Una centrífuga con cierre mecánico simple y bandeja de goteo",
        "Una centrífuga cualquiera, colocada lejos del paso de personas",
      ],
      answer: 1,
      explain: "En la de accionamiento magnético el eje no atraviesa la carcasa, así que no hay cierre que pueda fugar. La empaquetadura necesita gotear para lubricarse y el cierre simple puede perder producto si falla.",
    },
  ],
};
