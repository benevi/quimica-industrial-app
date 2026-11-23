import type { Lesson } from "./types";

export const operacionesLaboratorioAFondo: Lesson = {
  slug: "operaciones-laboratorio-a-fondo",
  level: 5,
  order: 8.5,
  title: "Separar y purificar en el banco del laboratorio a fondo",
  titleEn: "Separating and purifying at the laboratory bench in depth",
  minutes: 40,
  summary:
    "Las operaciones básicas del laboratorio químico montadas pieza a pieza y con seguridad: filtrar por gravedad y a vacío, extraer con embudo de decantación y Soxhlet, destilar, usar el rotavapor, recristalizar, sublimar, secar en estufa y centrifugar, cada una junto a su hermana de planta y con sus cuentas.",
  body: `
En «El laboratorio a fondo: material, equipos y trabajo seguro» viste el material y las normas generales, y en «Preparación de la muestra a fondo: de la muestra al vial que entra en el equipo», cómo se prepara una muestra. Aquí montas en el banco las operaciones que separan y purifican, una por una, junto a su hermana de planta, cuya teoría está en el nivel 12.

### Por qué te importa a ti, que estás en planta
Un filtro Nutsche es un embudo Büchner de dos metros cuadrados. Un reactor que concentra a vacío es un rotavapor de miles de litros. La física es la misma; cambian el tamaño, el tiempo y los riesgos. Por eso desarrollo ensaya cada etapa en el banco antes de llevarla a planta.

Las mismas operaciones salen en las normas. La guía ICH Q7 (apartado 14.20) considera en general aceptable reprocesar un lote repitiendo una cristalización u otro paso del proceso establecido, como una destilación o una filtración. Y el módulo 1250 del Real Decreto 290/2023 (Técnico en Operaciones de Laboratorio) enumera filtración, decantación, centrifugación, destilación, evaporación, secado, cristalización, liofilización y extracción.

| En el banco | En la planta | Lección a fondo |
|---|---|---|
| Embudo Büchner y matraz Kitasato | Filtro Nutsche y filtro-secador agitado | «Filtros a fondo: el filtro Nutsche y el filtro-secador agitado, paso a paso» |
| Embudo de decantación | Reactor con válvula de fondo y mirilla | «Extracción líquido-líquido a fondo: fases, lavados y separación en el reactor» |
| Destilación y rotavapor | Reactor con condensador, a presión normal o a vacío | «Destilación a fondo: reflujo, vacío y cambio de disolvente en el reactor» |
| Recristalización en matraz | Cristalizador | «Cristalización a fondo: solubilidad, sobresaturación y siembra» |
| Sublimación | Liofilizador | «La materia a fondo: estados, cambios de estado y mezclas» |
| Estufa y desecador | Secadero | «El secado a fondo: la curva de secado y cuándo está seco» |
| Centrífuga de tubos | Centrífuga de cesta | «La centrífuga a fondo: fuerza G, ciclo completo y qué hacer cuando vibra» |

### Lo que comparten todos los montajes
La nota técnica de prevención NTP 464 del Instituto Nacional de Seguridad y Salud en el Trabajo (INSST), sobre operaciones básicas del laboratorio químico, pide antes de empezar: leer el procedimiento con espíritu crítico, tener el material adecuado, usar la mínima cantidad de producto, llevar la protección necesaria y saber qué hacer si algo sale mal. La NTP 433 añade montar sin tensiones, con soportes y pinzas.

Para el calor, la NTP 464 pide **mantas calefactoras** (*heating mantles*) o baños sobre un **elevador** (*lab jack*), una plataforma que sube y baja: si algo se descontrola, se baja y el calor se retira enseguida. En planta, ese gesto es cortar el fluido de la camisa.

### Filtrar por gravedad y a vacío
**Por gravedad** (*gravity filtration*): un embudo con papel de filtro y el líquido que cae por su propio peso. Es lento y sirve sobre todo cuando interesa el líquido claro, como el filtro de cartucho de planta. Un método oficial publicado en el Boletín Oficial del Estado (BOE) en 1987 pide «filtrar sobre filtro previamente húmedo».

**A vacío** (*vacuum filtration*): cuando lo que interesa es el sólido. El montaje, de abajo arriba:

1. **Matraz Kitasato** (*filter flask*): un matraz de vidrio grueso con una salida lateral para el vacío. Bien sujeto con pinza.
2. **Junta** de goma que cierra entre el matraz y el embudo.
3. **Embudo Büchner** (*Büchner funnel*): de porcelana, con el fondo plano y agujereado. El manual de análisis de residuos de la agencia del medicamento y los alimentos de Estados Unidos (FDA, *Pesticide Analytical Manual*) usa uno de 12 cm de diámetro.
4. **Papel de filtro** del diámetro justo, que tape todos los agujeros, mojado con el disolvente para que se pegue (consejos de manuales universitarios, vistos en el buscador).
5. Entre el Kitasato y la fuente de vacío, un **frasco de seguridad** (*safety trap*).

Se abre el vacío, se vierte la suspensión, se lava la torta con disolvente frío y se deja escurrir: un Nutsche abierto en miniatura.

**El montaje seguro**, según la NTP 464:

- Kitasato de vidrio de buena calidad, en perfecto estado y fijado sin tensiones.
- Si filtra mal porque el sólido tapona, **más vacío no acelera**: solo aumenta el riesgo de implosión. Mejor filtrar en porciones pequeñas o cambiar a presión, vigilando que el papel no se rompa.
- Con una **trompa de agua** (*water aspirator*), que hace vacío con un chorro de agua, al cerrar el grifo despacio el agua puede volver al matraz: se cierra primero la llave entre el aparato y la trompa.
- El paso del vacío a la presión normal, despacio.

El manual de la FDA añade: si el filtrado empieza a hervir dentro del Kitasato, se reduce el vacío («Destilación a fondo» explica por qué hierve).

**Cuenta 1. Lo que aprieta el aire.** Büchner de 12 cm de diámetro, vacío a 200 mbar abs y atmósfera a 1013 mbar. Diferencia: 813 mbar = 81300 Pa. Superficie: π × 0,06 × 0,06 = 0,0113 m². Fuerza: 81300 × 0,0113 = **919 N**, como si apoyaras 94 kg encima del papel. Esa misma fuerza aprieta sobre todo el vidrio del Kitasato: por eso se usa vidrio de pared gruesa y se protege.

**Cuenta 2. Del banco a la planta.** En el banco se filtran 50 g en ese Büchner: 0,050 / 0,0113 = 4,4 kg/m². En el filtro ficticio FD-402, de 2,0 m², 200 kg: 100 kg/m² (valores de ejemplo). La torta de planta será unas 23 veces más gruesa y, como verás en «Filtros a fondo», frenará mucho más el líquido.

**Cuenta 3. El tope de la trompa.** Una trompa no baja de la presión de vapor del agua que la mueve, porque esa agua herviría. Con la ecuación de Antoine y las constantes del agua del instituto de metrología de Estados Unidos (NIST), a 20 °C son 23 mbar; para más vacío se usa una bomba.

### Extraer con el embudo de decantación
El **embudo de decantación** (*separatory funnel*) es un recipiente de vidrio en forma de pera con tapón arriba y llave abajo: el reactor de una extracción en miniatura. Qué fase queda arriba y la cuenta del reparto están en «Extracción líquido-líquido a fondo».

Paso a paso:

1. Embudo sujeto en un aro, **llave cerrada** y un vaso debajo.
2. Cargar las dos fases y tapar.
3. Invertir el embudo, sujetando tapón y llave, y **abrir la llave apuntando hacia el fondo de la vitrina**: al agitar, el disolvente se evapora y sube la presión.
4. Agitar, aliviar otra vez y repetir hasta que ya no salga gas.
5. Dejar reposar en el aro hasta ver una interfase nítida.
6. **Quitar el tapón** y abrir la llave: con el tapón puesto no entra aire y el líquido sale mal.
7. Cerrar justo cuando la interfase llega a la llave.

La NTP 464 advierte que el momento de aliviar la presión es el de más riesgo: proyecciones y vapores muy concentrados. Pide guantes impermeables, ropa de protección y, con sustancias peligrosas, trabajar en vitrina aunque sea incómodo.

**Emulsiones.** El manual de la FDA agita con cuidado para no provocarlas, añade disolución saturada de cloruro sódico y deja reposar al menos 30 minutos; si no se rompe, la centrifuga 5 minutos a 1500 rpm. En planta manda la hoja; en el banco, el método.

**Cuenta 4. Tres veces mejor que una.** 100 mL de fase acuosa, coeficiente de reparto K = 4 (valor de ejemplo) y 60 mL de disolvente. Con la fórmula del reparto (se explica en «Extracción líquido-líquido a fondo», nivel 12):

- Una vez 60 mL: queda en el agua 1 / (1 + 4 × 60 / 100) = 1 / 3,4 = **29,4 %**.
- Tres veces 20 mL: (1 / (1 + 4 × 20 / 100))³ = (1 / 1,8)³ = **17,1 %**.

Con el mismo disolvente, partirlo en tres saca un 83 % del producto en lugar de un 71 %.

### Extraer un sólido: el Soxhlet
Para sacar algo de dentro de un sólido se usa el **extractor Soxhlet** (*Soxhlet extractor*): abajo, un matraz con disolvente que se calienta; en medio, una cámara con un **cartucho** (*thimble*) de papel grueso con la muestra; arriba, un refrigerante. El vapor se condensa y gotea sobre la muestra; cuando la cámara se llena, un **sifón** (*siphon*) la vacía de golpe al matraz con lo disuelto, y el ciclo se repite (descripción de manuales universitarios, vista en el buscador).

Un método oficial de 1987 publicado en el BOE (grasa en galletas) lo usa así: muestra en el cartucho tapada con algodón desengrasado, éter etílico **exento de peróxidos**, unas **ocho horas** sifonando, matraz receptor secado y tarado, evaporar el disolvente, secar en estufa y pesar.

**Cuenta 5. Grasa por diferencia de pesadas** (valores de ejemplo). Muestra: 10,012 g. Matraz vacío: 105,2310 g. Matraz con la grasa: 105,7430 g. Grasa = (105,7430 − 105,2310) / 10,012 × 100 = **5,11 %**.

**El montaje seguro**, según la NTP 464: cualquier fuga de vapor del disolvente inflamable puede incendiarse. Baño maría o de aceite a la temperatura justa para que hierva, vitrina, extintor y manta ignífuga cerca y, en extracciones largas, control del agua del refrigerante.

En planta, el pariente es lavar o resuspender el sólido en el equipo, como verás en «Filtros a fondo».

### Destilar: simple, fraccionada y a vacío
**Destilación simple** (*simple distillation*): balón con el líquido, una cabeza con un termómetro que mide la temperatura del vapor, un refrigerante y un matraz colector. La NTP 464 pide revisar material y estanqueidad, echar **trocitos de porcelana porosa** antes de calentar para regular la ebullición, trabajar en vitrina y vigilar la temperatura de autoinflamación; si se para el agua del refrigerante, salen vapores inflamables. Separa bien cuando un líquido hierve mucho antes que el otro; si hierven cerca, no basta.

**Destilación fraccionada** (*fractional distillation*): entre el balón y la cabeza se pone una **columna** (*fractionating column*). El vapor se condensa y se vuelve a evaporar muchas veces a lo largo de ella, y cada vez se enriquece en el líquido más volátil. Es la versión de banco de las torres que describe el libro de instrumentación de Tony Kuphaldt: bandejas donde el vapor que sube se cruza con el líquido que baja, más calientes abajo que arriba.

**Cuenta 6. Etapa a etapa.** Mezcla al 50 % en moles de hexano y heptano, a presión atmosférica. Cuenta simplificada: mezcla ideal (ley de Raoult) con las constantes de Antoine del NIST.

| Etapa | Hexano en el líquido | Hierve a | Hexano en el vapor |
|---|---|---|---|
| 1 | 50,0 % | 80,5 °C | 71,4 % |
| 2 | 71,4 % | 75,0 °C | 86,4 % |
| 3 | 86,4 % | 71,5 °C | 94,3 % |
| 4 | 94,3 % | 69,9 °C | 97,7 % |

Una destilación simple es la primera fila: 71 % de hexano. Una columna que equivalga a cuatro etapas da casi un 98 %, y la temperatura baja hacia arriba, como en la torre.

**Destilación a vacío** (*vacuum distillation*): por qué hierve antes y la ecuación de Antoine están en «Destilación a fondo». En el banco, la NTP 464 añade el montaje: un capilar que hace borbotear aire o gas inerte para regular la ebullición, vigilando que no se tapone si empieza a cristalizar algo; **primero el vacío y después el calor**; al acabar, **enfriar antes de romper el vacío**, porque el aire en un balón caliente puede inflamar el residuo; y volver a la presión normal despacio.

**Los peróxidos.** Según la NTP 464, los éteres forman peróxidos explosivos al envejecer; al destilarlos, el peróxido se concentra y explota cuando queda casi solo. Por eso se hace antes una prueba de peróxidos.

### El rotavapor
El **rotavapor** (*rotary evaporator*) concentra a vacío: el balón gira en un baño caliente, el disolvente se evapora, se condensa en un refrigerante y cae a un colector. Las reglas de la NTP 464 (no llenar demasiado, no llevar a sequedad si puede haber peróxidos, enfriar antes de romper el vacío) ya las viste en «El laboratorio a fondo».

El manual de la FDA da una secuencia completa: refrigerante y matraz colector a −15 °C con agua y etilenglicol; vacío aplicado **despacio**, regulado con una válvula de aguja, para que no haga espuma; y solo con el vacío completo, el balón entra en el baño a 35 °C.

**Cuenta 7. Por qué basta un baño a 35 °C.** Con las constantes de Antoine del NIST para el metanol: a 1013 mbar hierve a 64,5 °C; a 200 mbar, a **28,2 °C**. A 35 °C su presión de vapor es de 280 mbar. A 200 mbar, el baño a 35 °C está unos 7 °C por encima de la ebullición: el metanol se evapora sin calentar el producto, y el refrigerante a −15 °C lo condensa en vez de mandarlo a la bomba.

### Recristalizar
**Recristalizar** (*recrystallization*) es purificar un sólido disolviéndolo y volviéndolo a cristalizar: la cristalización del lote ficticio FX-101 que verás en «Cristalización a fondo», en un matraz.

1. Elegir un disolvente que disuelva mucho producto en caliente y poco en frío.
2. Disolver el sólido en la **mínima cantidad** de disolvente caliente.
3. Filtrar en caliente si quedan partículas, como el FX-101 pasa por su cartucho antes de enfriar.
4. Enfriar despacio: un enfriamiento brusco da finos y encierra impurezas.
5. Filtrar en Büchner y lavar con disolvente **frío**, que redisuelve menos producto.
6. Secar y comprobar la pureza, por ejemplo con el punto de fusión («Punto de fusión y análisis térmico a fondo»).

**Cuenta 8. El rendimiento máximo** (valores de ejemplo). 10 g de producto bruto. Solubilidad: 25 g por 100 mL en caliente y 2 g por 100 mL a 0 °C.

- Disolvente mínimo: 10 / 25 × 100 = **40 mL**.
- Lo que se queda disuelto en frío: 2 / 100 × 40 = 0,8 g.
- Rendimiento máximo: (10 − 0,8) / 10 × 100 = **92 %**.

Con un 20 % de disolvente de más (48 mL) se pierden 0,96 g y el techo baja al 90,4 %.

### Sublimar
**Sublimar** (*sublimation*) es pasar de sólido a gas sin pasar por líquido («La materia a fondo»). En el laboratorio sirve para purificar algunos sólidos: se calientan a vacío y el vapor vuelve a sólido sobre un **dedo frío** (*cold finger*), un tubo refrigerado; las impurezas que no subliman se quedan abajo (descripción de manuales universitarios, vista en el buscador).

La clave es el **punto triple** (*triple point*), la presión y temperatura a las que conviven sólido, líquido y gas: por debajo de esa presión, el líquido no puede existir. Datos del NIST:

- **Dióxido de carbono**: 5,185 bar y −56,6 °C, unas cinco veces la presión atmosférica: a presión normal no puede ser líquido, y el hielo seco sublima.
- **Agua**: 0,0061 bar, es decir, 6,1 mbar: para que el hielo sublime sin fundirse, hay que bajar de 6,1 mbar.

Esa es la hermana de planta: el **liofilizador** (*freeze dryer*), que congela el producto y sublima el hielo a vacío.

### Secar en estufa y desecador
La **estufa** (*drying oven*) seca muestras a temperatura controlada; la **estufa de vacío** (*vacuum oven*) lo hace a menos temperatura, como la estufa de bandejas de vacío que verás en «El secado a fondo». Su seguridad está en «El laboratorio a fondo»; la NTP 464 añade temperaturas moderadas, sin superar en ningún punto la de autoinflamación, y que un sólido empapado de un líquido volátil se puede secar en frío.

El método de humedad del BOE de 1987 enseña a secar bien:

- **Capa fina**: un pesasustancias con tapa, con como mucho 0,3 g de muestra por centímetro cuadrado.
- **Tapar antes de sacar** de la estufa y enfriar en el **desecador** antes de pesar (por qué, en «Gravimetría a fondo: medir pesando, cenizas y residuos»).
- **Duplicados**: no pueden diferir más de 0,1 puntos.

**Cuenta 9. La capa fina.** Para 5 g de muestra con 0,3 g/cm² como máximo: 5 / 0,3 = **16,7 cm²** de fondo, como mínimo. Es la idea del agitador del secadero: más superficie por la que sale el vapor. Qué mide la pérdida por secado lo tienes en «El agua en la muestra a fondo: Karl Fischer y pérdida por secado».

### Centrifugar en el laboratorio
La centrífuga de tubos usa la misma fórmula que la de planta («La centrífuga a fondo», nivel 12): fuerza G = 0,00001118 × radio (cm) × rpm². Por eso los métodos bien escritos dan la fuerza en g y no solo las rpm: con otro rotor, las mismas rpm dan otra fuerza.

**Cuenta 10. Pequeña pero fuerte.** Rotor de 10 cm de radio a 4000 rpm: 0,00001118 × 10 × 4000² = **1789 g**. La cesta de planta de 1 m de diámetro a 1200 rpm da 805 g. Y los 1500 rpm del manual de la FDA, con un rotor de 15 cm (valor de ejemplo), serían 377 g.

La NTP 433 cita rotura del rotor, heridas, explosión con atmósfera inflamable y **bioaerosoles** (*bioaerosols*), gotitas con microorganismos que flotan en el aire. Pide carga simétrica, tapa con enclavamiento y un procedimiento para roturas.

### Errores típicos
| Error | Qué pasa |
|---|---|
| Subir el vacío para que filtre más rápido | No filtra mejor y aumenta el riesgo de implosión |
| Calentar antes de hacer vacío | La ebullición se dispara de golpe y arrastra producto |
| Romper el vacío con el balón caliente | El aire puede inflamar el residuo |
| Recristalizar con disolvente de sobra | Se pierde producto en las aguas madres |
| Fijar las rpm de otro equipo | Fuerza G distinta |

En el laboratorio y en planta manda siempre el procedimiento vigente (SOP): los montajes, las presiones y las cantidades son los que diga el tuyo.
`,
  plant: `
Turno de mañana. El laboratorio de desarrollo ensaya en el banco la nueva etapa de purificación del intermedio ficticio KZ-14 antes de llevarla al cristalizador CR-305 y al filtro-secador FD-402.

La técnica disuelve 20 g de producto bruto en la mínima cantidad de etanol caliente, en un matraz sobre una manta calefactora montada en un elevador. Filtra en caliente, deja enfriar despacio y filtra los cristales en un Büchner de 12 cm sobre un Kitasato sujeto con pinza, con frasco de seguridad hacia la bomba. La torta tapona: en vez de abrir más el vacío, filtra el resto en dos porciones. Lava con etanol frío y seca en estufa de vacío.

Concentra las aguas madres en el rotavapor: refrigerante frío, vacío aplicado despacio y, solo después, el balón al baño. Al acabar, saca el balón del baño, lo deja enfriar girando y rompe el vacío poco a poco.

Su informe recoge lo que interesa a planta: 18,1 g de producto seco (90,5 %), una torta de 3 mm que filtró en 6 minutos y un tiempo de enfriamiento mínimo. Producción lo traduce a kilos por metro cuadrado del FD-402 y prevé una filtración mucho más larga que en el banco.

Una semana después, tu lote del KZ-14 en planta sigue la misma secuencia, a otra escala: disolver en caliente en el CR-305, filtrar por el cartucho, enfriar por rampa, filtrar en el FD-402 y lavar con etanol frío. Todos los códigos y cifras son de ejemplo.
`,
  batchRecord: `
En tu hoja de producción (*batch record*) no verás un Büchner, pero sí las operaciones que nacieron en el banco y lo que te une con el laboratorio:

- **Operación y equipo**: filtración en FD-402, concentración a vacío en R-311, cristalización en CR-305 (códigos de ejemplo), con su paso de la hoja.
- **Presiones con su unidad**: vacío en mbar abs, no «vacío bueno»; presión de filtración y diferencia de presión.
- **Orden de las maniobras**: hora de inicio del vacío y hora de inicio del calor; hora de enfriamiento y de rotura del vacío con nitrógeno.
- **Volúmenes y pesos reales**: disolvente cargado, destilado recogido, aguas madres, lavados y torta húmeda.
- **Temperaturas**: de disolución, de filtración en caliente, final del enfriamiento y del disolvente de lavado.
- **Muestras para el laboratorio**: punto, hora, cantidad y etiqueta; resultado del control en proceso con su número de análisis.
- **Disolventes recuperados**: destino de cada destilado o aguas madres, según la hoja.
- **Incidencias**: filtración más lenta de lo habitual, emulsión que no rompe, espuma al hacer vacío, corte del agua del condensador.
`,
  terms: [
    { es: "Embudo Büchner", en: "Büchner funnel", def: "Embudo de porcelana con el fondo plano y agujereado sobre el que se pone papel de filtro; filtra a vacío. Es el Nutsche del laboratorio." },
    { es: "Matraz Kitasato", en: "Filter flask", def: "Matraz de vidrio grueso con salida lateral para el vacío, sobre el que se coloca el embudo Büchner." },
    { es: "Frasco de seguridad", en: "Safety trap", def: "Recipiente entre el aparato a vacío y la fuente de vacío que recoge retornos de agua o líquido arrastrado." },
    { es: "Trompa de agua", en: "Water aspirator", def: "Aparato que hace vacío con un chorro de agua; no puede bajar de la presión de vapor de esa agua." },
    { es: "Embudo de decantación", en: "Separatory funnel", def: "Recipiente de vidrio con tapón y llave para agitar dos líquidos que no se mezclan y separarlos." },
    { es: "Extractor Soxhlet", en: "Soxhlet extractor", def: "Aparato que extrae un sólido con disolvente que se evapora, se condensa sobre la muestra y vuelve al matraz por un sifón, en ciclos." },
    { es: "Cartucho de extracción", en: "Extraction thimble", def: "Recipiente de papel grueso que contiene la muestra dentro del Soxhlet." },
    { es: "Destilación fraccionada", en: "Fractional distillation", def: "Destilación con una columna en la que el vapor se condensa y se evapora muchas veces, enriqueciéndose en el líquido más volátil." },
    { es: "Rotavapor", en: "Rotary evaporator", def: "Equipo que concentra disoluciones evaporando el disolvente a vacío mientras el balón gira en un baño caliente." },
    { es: "Recristalización", en: "Recrystallization", def: "Purificar un sólido disolviéndolo en caliente en la mínima cantidad de disolvente y dejándolo cristalizar al enfriar." },
    { es: "Sublimación", en: "Sublimation", def: "Paso directo de sólido a gas; en el laboratorio se usa para purificar sólidos con un dedo frío." },
    { es: "Punto triple", en: "Triple point", def: "Presión y temperatura a las que conviven sólido, líquido y gas de una sustancia." },
    { es: "Elevador de laboratorio", en: "Lab jack", def: "Plataforma regulable en altura bajo la manta o el baño que permite retirar el calor al instante." },
    { es: "Bioaerosol", en: "Bioaerosol", def: "Gotitas o partículas con microorganismos suspendidas en el aire; un riesgo al abrir una centrífuga." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Un Büchner de 9 cm de diámetro filtra con el Kitasato a 300 mbar abs y la atmósfera a 1013 mbar. ¿Qué fuerza, en newtons y sin decimales, aprieta el aire sobre el papel? (1 mbar = 100 Pa; superficie = π × radio²)",
      answer: 454,
      tolerance: 0.02,
      unit: "N",
      explain: "Diferencia: 1013 − 300 = 713 mbar = 71300 Pa. Superficie: π × 0,045 × 0,045 = 0,00636 m². Fuerza: 71300 × 0,00636 = 454 N, como unos 46 kg encima del papel.",
    },
    {
      kind: "choice",
      q: "Filtras a vacío en un Büchner y la torta se tapona: el líquido apenas pasa. ¿Qué haces?",
      options: [
        "Abro el vacío al máximo para que empuje con más fuerza",
        "Rasco la torta con la espátula mientras sigue el vacío",
        "Filtro el resto en porciones pequeñas, según el método",
        "Desmonto el Büchner con vacío y vacío el papel a mano",
      ],
      answer: 2,
      explain: "La NTP 464 dice que, si la filtración es mala por el propio producto, más vacío no mejora ni el rendimiento ni el tiempo, pero sí el riesgo de implosión. Se filtra en porciones pequeñas o como diga el método.",
    },
    {
      kind: "number",
      q: "Tienes 50 mL de fase acuosa con un producto de coeficiente de reparto K = 3 y haces dos extracciones de 25 mL cada una. ¿Qué porcentaje del producto queda en el agua?",
      answer: 16,
      tolerance: 0.02,
      unit: "%",
      explain: "Cada extracción deja 1 / (1 + 3 × 25 / 50) = 1 / 2,5 = 0,4. Dos extracciones: 0,4 × 0,4 = 0,16, es decir, queda un 16 % en el agua.",
    },
    {
      kind: "choice",
      q: "Acabas de agitar un embudo de decantación con un disolvente volátil. ¿Cómo sueltas la presión?",
      options: [
        "Embudo invertido, llave abierta hacia el fondo de la vitrina",
        "Embudo derecho, quitando el tapón hacia tu cara para ver",
        "Abriendo la llave con el embudo derecho sobre el vaso",
        "Dejándolo cerrado: la presión se va sola al reposar",
      ],
      answer: 0,
      explain: "Se invierte y se abre la llave apuntando lejos de las personas, dentro de la vitrina. La NTP 464 avisa de proyecciones y vapores muy concentrados justo en ese momento.",
    },
    {
      kind: "number",
      q: "Un Soxhlet extrae la grasa de 5,000 g de muestra. El matraz receptor pesaba 98,4120 g vacío y 98,9870 g con la grasa seca. ¿Qué porcentaje de grasa tiene la muestra?",
      answer: 11.5,
      tolerance: 0.02,
      unit: "%",
      explain: "Grasa: 98,9870 − 98,4120 = 0,5750 g. Porcentaje: 0,5750 / 5,000 × 100 = 11,5 %.",
    },
    {
      kind: "choice",
      q: "Terminas una destilación a vacío en el banco. ¿En qué orden actúas?",
      options: [
        "Rompo el vacío con aire y después apago la manta",
        "Apago la bomba con el balón caliente dentro del baño",
        "Rompo el vacío de golpe para acabar cuanto antes",
        "Retiro el calor, dejo enfriar y rompo el vacío despacio",
      ],
      answer: 3,
      explain: "La NTP 464 pide enfriar antes de detener el vacío, porque el aire en un balón caliente puede inflamar el residuo, y volver a la presión normal de manera lenta.",
    },
    {
      kind: "number",
      q: "Una centrífuga de laboratorio tiene un rotor de 12 cm de radio y gira a 3000 rpm. ¿Cuántas g de fuerza centrífuga relativa (fuerza G) da? Usa fuerza G = 0,00001118 × r (cm) × rpm².",
      answer: 1207,
      tolerance: 0.02,
      unit: "g",
      explain: "Fuerza G = 0,00001118 × 12 × 3000 × 3000 = 0,00001118 × 12 × 9000000 = 1207 g, más que la cesta de planta de 1 m a 1200 rpm (805 g).",
    },
    {
      kind: "choice",
      q: "Al aplicar vacío en el rotavapor, la disolución del balón empieza a hacer espuma y sube hacia el refrigerante. ¿Qué haces?",
      options: [
        "Meto el balón más hondo en el baño para que hierva antes",
        "Subo el vacío poco a poco con la válvula hasta que baje",
        "Cierro el agua del refrigerante para que no condense",
        "Lo dejo seguir: la espuma acaba en el colector y no pasa nada",
      ],
      answer: 1,
      explain: "El manual de la FDA aplica el vacío despacio, regulado con una válvula de aguja, para que no haga espuma, y solo con el vacío completo mete el balón en el baño. La espuma arrastra producto al colector.",
    },
    {
      kind: "number",
      q: "Quieres recristalizar 20 g de producto. Su solubilidad es 40 g por 100 mL en caliente y 3 g por 100 mL en frío. Con la mínima cantidad de disolvente, ¿cuál es el rendimiento máximo en porcentaje?",
      answer: 92.5,
      tolerance: 0.02,
      unit: "%",
      explain: "Disolvente mínimo: 20 / 40 × 100 = 50 mL. En frío quedan disueltos 3 / 100 × 50 = 1,5 g. Rendimiento máximo: (20 − 1,5) / 20 × 100 = 92,5 %.",
    },
    {
      kind: "choice",
      q: "Dos disolventes de una mezcla hierven con solo 30 °C de diferencia y una destilación simple no los separa bien. ¿Qué montaje usas?",
      options: [
        "Un rotavapor sin refrigerante para ir más rápido",
        "Una destilación simple calentando con más fuerza",
        "Una destilación fraccionada, con columna sobre el balón",
        "Un embudo de decantación para separarlos en dos capas",
      ],
      answer: 2,
      explain: "En la columna el vapor se condensa y se evapora muchas veces y se enriquece en el más volátil: en el ejemplo hexano y heptano, del 71 % de una sola etapa a casi el 98 % con cuatro.",
    },
  ],
};
