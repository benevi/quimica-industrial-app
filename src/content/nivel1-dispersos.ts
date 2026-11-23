import type { Lesson } from "./types";

export const sistemasDispersosAFondo: Lesson = {
  slug: "sistemas-dispersos-a-fondo",
  level: 1,
  order: 10.7,
  title: "Coloides, emulsiones, espumas y tensioactivos a fondo",
  titleEn: "Colloids, emulsions, foams and surfactants in depth",
  minutes: 38,
  summary:
    "Qué distingue una disolución, un coloide y una suspensión, por qué una gota pequeña tarda días en separarse (ley de Stokes), cómo es un tensioactivo y qué es una micela, por qué se forma una emulsión en una extracción y cómo se rompe, de dónde sale la espuma en reactores y destilaciones, qué hace un antiespumante y cómo limpia un detergente.",
  body: `
En «La materia a fondo: estados, cambios de estado y mezclas» viste que una emulsión, una espuma y una suspensión son mezclas heterogéneas, y en «Disoluciones y solubilidad a fondo: la base de la cristalización», qué es una disolución. Aquí vas a ver lo que hay entre las dos: mezclas que parecen una sola sustancia pero no lo son, por qué algunas no se separan nunca solas y qué tiene que ver todo eso con la extracción, la espuma de un reactor y el detergente de la limpieza.

### Tres tamaños de mezcla
Echa sal en agua: desaparece. Echa harina: el agua se vuelve blanca y, al rato, la harina se va al fondo. Echa una gota de leche: el agua se pone lechosa y no se aclara por mucho que esperes. Son tres mezclas distintas, y lo que las distingue es el **tamaño** de lo que va repartido.

| Mezcla | Qué va repartido | Aspecto | ¿Se separa sola al reposar? |
|---|---|---|---|
| **Disolución** (*solution*) | Moléculas o iones sueltos | Transparente (aunque tenga color) | No |
| **Coloide** (*colloid*) | Gotitas, partículas o burbujas de 1 a 1000 nm | Transparente, opalescente o lechoso | No, o tarda muchísimo |
| **Suspensión** (*suspension*) | Partículas mayores | Turbio | Sí: el sólido acaba en el fondo |

Un **nanómetro** (nm) es la milésima parte de una micra (µm), y una micra es la milésima parte de un milímetro. La guía de la FDA (*Food and Drug Administration*, la agencia del medicamento de Estados Unidos) sobre medicamentos con nanomateriales (2022) define los coloides como sistemas en los que una fase, la **fase dispersa** (*dispersed phase*), está repartida en otra, la **fase continua** (*continuous phase*), con un tamaño de la dispersa de 1 a 1000 nm. Más grande que eso es una suspensión.

Los coloides se nombran según qué está repartido en qué:

| Fase dispersa | Fase continua | Nombre | En planta |
|---|---|---|---|
| Líquido | Líquido | **Emulsión** (*emulsion*) | La capa lechosa de una extracción |
| Gas | Líquido | **Espuma** (*foam*) | La que sube por la mirilla al destilar |
| Sólido | Líquido | Coloide sólido en líquido (*sol*) | Una «disolución» que no acaba de quedar transparente |
| Sólido o líquido | Gas | **Aerosol** (*aerosol*) | Humo, niebla de pulverizar |

Las gotas de una emulsión o las burbujas de una espuma pueden pasar de 1000 nm; se siguen llamando así. La idea clave: cuanto más pequeño lo disperso, más estable la mezcla.

### Efecto Tyndall: la prueba de la linterna
Una disolución deja pasar la luz sin desviarla. Las partículas de un coloide, en cambio, desvían parte de la luz hacia los lados, y el haz se ve dentro del líquido, como el rayo de sol en una habitación con polvo. Es el **efecto Tyndall** (*Tyndall effect*). El temario de seguridad del Instituto Nacional de Seguridad y Salud en el Trabajo (INSST) lo cita en los detectores ópticos de humo: detectan el humo por la difusión de luz (efecto Tyndall).

Cuando la hoja pide «disolución completa, transparente», mira con la luz de la mirilla: si el haz se marca o hay un brillo lechoso, queda algo muy fino sin disolver. Se anota tal cual. El laboratorio mide esa desviación de luz con un nefelómetro, como viste en «Refractometría, polarimetría y turbidez a fondo».

### Por qué una gota pequeña no se separa: la ley de Stokes
Una gota de tolueno en agua sube porque pesa menos que el agua que desplaza; el agua la frena, como el aire frena un paracaídas. Cuando empuje y freno se igualan, la gota sube a velocidad constante. Esa velocidad la da la **ley de Stokes** (*Stokes' law*), la misma que usa el método oficial del Boletín Oficial del Estado (BOE) de 1976 para medir el tamaño de partícula de un suelo por sedimentación:

> v = g · Δρ · d² / (18 · η)

- **v**: velocidad de subida o de caída, en m/s.
- **g**: gravedad, 9,807 m/s².
- **Δρ**: diferencia de densidad entre la gota y el líquido que la rodea, en kg/m³.
- **d**: diámetro de la gota o partícula, en m.
- **η**: viscosidad del líquido que la rodea, en Pa·s (viste qué es en «Enlaces y fuerzas entre moléculas a fondo»).

Es una aproximación para gotas pequeñas que se mueven despacio, una a una. Pero dice tres cosas que valen siempre: la velocidad crece con el **cuadrado del diámetro**, con la **diferencia de densidad**, y baja con la **viscosidad**.

**Ejercicio resuelto 1. Una gota de tolueno de 10 µm en agua a 20 °C.** Datos del instituto de metrología de Estados Unidos (NIST) a 20 °C: agua 998,21 kg/m³ y viscosidad 1,0016 mPa·s (0,0010016 Pa·s); tolueno 866,89 kg/m³.

1. Δρ = 998,21 − 866,89 = 131,32 kg/m³.
2. d = 10 µm = 0,00001 m, y d² = 1 × 10⁻¹⁰ m².
3. v = 9,807 × 131,32 × 1 × 10⁻¹⁰ / (18 × 0,0010016) = 7,14 × 10⁻⁶ m/s, unos 0,43 mm por minuto.
4. Para subir 1 m (altura de líquido de ejemplo): 1 / 7,14 × 10⁻⁶ = 140000 s, unas **39 horas**.

Repite la cuenta con otros tamaños:

| Diámetro de la gota | Tiempo para subir 1 m (agua a 20 °C) |
|---|---|
| 100 µm | 23 minutos |
| 10 µm | 39 horas |
| 1 µm | 162 días |
| 0,1 µm | 44 años |

Dividir el diámetro entre 10 multiplica el tiempo por 100. Por eso la hoja fija la velocidad de agitación de una extracción: gotas más finas son horas de decantación.

**Ejercicio resuelto 2. La misma gota a 50 °C.** Según el NIST, a 50 °C el agua tiene 988,04 kg/m³ y 0,54652 mPa·s, y el tolueno 838,76 kg/m³.

1. Δρ = 988,04 − 838,76 = 149,28 kg/m³: algo mayor.
2. v = 9,807 × 149,28 × 1 × 10⁻¹⁰ / (18 × 0,00054652) = 1,49 × 10⁻⁵ m/s.
3. Tiempo para 1 m: 67200 s, unas **19 horas**: menos de la mitad que a 20 °C.

Casi todo el efecto viene de la viscosidad, que a 50 °C es la mitad: por eso algunas hojas piden decantar en caliente. Calentar cambia más cosas (lo que se disuelve, la estabilidad, los vapores): solo si la hoja lo dice.

### Por qué un coloide no se junta: estabilidad
Si dos gotas de una emulsión chocan y se funden en una mayor, eso es la **coalescencia** (*coalescence*). Con gotas más grandes, Stokes juega a favor y la emulsión se rompe. Un coloide estable es uno en el que las gotas o partículas chocan y **no** se juntan. Dos cosas lo consiguen:

- **Carga eléctrica.** Si todas las partículas tienen carga del mismo signo, se repelen, como dos imanes enfrentados. El método del BOE de 1976 lo aprovecha al revés: para que las partículas de un suelo no se apelotonen, añade un dispersante que provoca fuerzas eléctricas de repulsión entre ellas.
- **Una capa protectora** en la superficie de cada gota, que impide que se toquen. Esa capa la forman los tensioactivos.

### Tensioactivos: una cabeza que quiere agua y una cola que la odia
En «Enlaces y fuerzas entre moléculas a fondo» viste la **tensión superficial** (*surface tension*): la «piel» de un líquido. Un **tensioactivo** (*surfactant*) es una sustancia que la debilita. El Reglamento (UE) 2026/405, de detergentes y tensioactivos, lo define como una sustancia orgánica que consta de uno o varios **grupos hidrófilos** (*hydrophilic*, que atraen el agua) y uno o varios **grupos hidrófobos** (*hydrophobic*, que la rechazan) y que puede, a la vez:

- bajar la tensión superficial del agua por debajo de 45 mN/m;
- formar capas de una molécula de grueso en la superficie agua y aire;
- formar emulsiones, microemulsiones o micelas;
- pegarse a la superficie entre el agua y un sólido.

Imagina una cerilla: la cabeza busca el agua y el palo, largo y graso, huye de ella. En la frontera entre agua y aceite cada molécula pone la cabeza en el agua y la cola en el aceite, y forra la gota: esa es la capa protectora.

El mismo reglamento obliga a declarar en la etiqueta de un detergente los tensioactivos por tipos: **aniónicos**, **catiónicos**, **anfotéricos** y **no iónicos**, además del jabón. El nombre dice la carga de la cabeza: negativa (anión), positiva (catión), una de cada o ninguna. Lo verás en la ficha de un detergente de limpieza.

### Micelas y concentración micelar crítica
Si echas un poco de tensioactivo en agua, sus moléculas van primero a la superficie. Cuando ya no caben, empiezan a agruparse dentro del agua en bolitas con las colas hacia dentro y las cabezas hacia fuera: son las **micelas** (*micelles*). La guía de la FDA de 2022 las define como partículas de tamaño coloidal en equilibrio con las moléculas o iones disueltos de los que se forman.

La concentración a partir de la cual aparecen se llama **concentración micelar crítica** (*critical micelle concentration*, CMC). Por debajo, el tensioactivo casi solo trabaja en las superficies; por encima, además hay micelas, y el interior graso de cada una puede alojar grasa: así un detergente «se lleva» un aceite que el agua sola no disuelve. Cada tensioactivo tiene su CMC, que cambia con la temperatura y con lo que haya disuelto; el fabricante del detergente y la validación de limpieza la tienen en cuenta.

**Ejercicio resuelto 3. Preparar un detergente.** La hoja pide 300 L de disolución del detergente ficticio DX-30 al 1,5 % v/v. Su ficha dice que la CMC equivale a un 0,1 % v/v del producto (valores de ejemplo).

1. Volumen de concentrado: 300 × 1,5 / 100 = **4,5 L**, y agua hasta 300 L.
2. Comparar con la CMC: 1,5 / 0,1 = 15 veces por encima: hay micelas de sobra para retener la grasa.
3. Si por error se cargan 0,45 L, la disolución queda al 0,15 %: apenas por encima de la CMC. Moja, pero retiene mucha menos grasa. La concentración es un parámetro de la limpieza, como el tiempo y la temperatura.

### Emulsiones en una extracción: por qué se forman
Lo que hace el operador ante una emulsión está en «Extracción líquido-líquido a fondo». Aquí va el porqué. La FDA, en la misma guía, define la emulsión como dos líquidos que no se mezclan, uno repartido en gotas en el otro, **generalmente estabilizada por uno o más agentes emulsionantes**. Hacen falta tres cosas a la vez:

1. **Energía que rompa las gotas.** El agitador corta una fase en gotas. Cuanto más fuerte y más rato, más finas.
2. **Algo que las proteja.** En una mezcla de reacción no hay detergente añadido, pero puede haber sustancias con una parte polar y otra grasa (subproductos, sales de ácidos orgánicos, restos de reactivos) que hacen de tensioactivo sin que nadie las haya puesto. Las partículas sólidas muy finas también se colocan en la frontera y estorban.
3. **Poca fuerza que las separe**: poca diferencia de densidad o un líquido viscoso. Es Stokes otra vez.

**Ejercicio resuelto 4. Cuánta superficie crea el agitador.** Un litro de tolueno (0,001 m³) partido en gotas iguales de diámetro d tiene una superficie total de 6 × V / d (la de una esfera dividida entre su volumen es 6 / d):

| Diámetro de las gotas | Superficie de 1 L de tolueno |
|---|---|
| 1 mm | 6 m² |
| 100 µm | 60 m² |
| 10 µm | 600 m² |

Gotas diez veces más finas dan diez veces más frontera, y basta un poco de impureza tensioactiva para forrarla.

Según la fase continua hay emulsiones de **aceite en agua** (*oil-in-water*, O/W) y de **agua en aceite** (*water-in-oil*, W/O).

### Cómo se rompe una emulsión, y por qué funciona
| Método | Qué cambia | Por qué ayuda |
|---|---|---|
| Esperar | Nada | Las gotas tienen tiempo de chocar y fundirse |
| Calentar | Baja la viscosidad | Stokes: la gota sube o baja más deprisa (ejercicio 2) |
| Añadir salmuera | Cambia la fase acuosa | Ver abajo |
| Centrifugar | Multiplica la gravedad | En la fórmula, g pasa a ser muchas veces g |
| Filtrar | Quita los sólidos finos | Retira lo que estabilizaba la frontera |
| Cambiar el pH | Cambia la carga de ácidos y aminas | Un tensioactivo «accidental» puede dejar de serlo |

El manual de análisis de plaguicidas de la FDA lo hace en el embudo: agita con cuidado para no provocar la emulsión, añade disolución saturada de cloruro sódico si se forma, deja reposar al menos 30 minutos y, si no se rompe, centrifuga 5 minutos a 1500 rpm. Por qué funciona la sal lo explican los manuales de varias maneras (la fase acuosa se hace más densa y disuelve peor lo orgánico); no lo hemos podido leer en una fuente oficial, así que lo dejamos en la práctica, no en la teoría.

En planta, todos los métodos salvo esperar **cambian el proceso**. Solo se aplican si están en la hoja o en el procedimiento, en el orden y con las cantidades que digan.

### Espumas en reactores y destilaciones
Una espuma es gas atrapado en finas películas de líquido. Un líquido puro casi no la sostiene: la burbuja sube, revienta y ya está. Para que dure hace falta algo que forre las películas, igual que en la emulsión; el reglamento de detergentes recoge justo eso, que un tensioactivo forma capas en la superficie entre agua y aire.

En un reactor, el gas sale de cuatro sitios:

- **Una reacción que desprende gas**, como el dióxido de carbono (CO₂) de neutralizar con bicarbonato («Ácidos, bases y pH a fondo»).
- **La ebullición**, sobre todo al bajar la presión en una destilación a vacío («Destilación a fondo: reflujo, vacío y cambio de disolvente en el reactor»).
- **Gas disuelto que se desprende** al calentar («Disoluciones y solubilidad a fondo»).
- **Nitrógeno burbujeado** por el líquido.

**Ejercicio resuelto 5. Cuánto ocupa la espuma.** Si una espuma es un 90 % de gas en volumen (valor de ejemplo), cada litro de espuma tiene 0,1 L de líquido. 100 L de líquido convertidos en espuma ocupan 100 / (1 − 0,90) = **1000 L**. En un reactor con poco hueco libre, una fracción pequeña del contenido que espume basta para llegar a la tapa.

Qué provoca la espuma:

- **Arrastre** de líquido con producto al condensador, al destilado o al venteo.
- **Medidas de nivel falsas.** Según el libro de instrumentación de Tony Kuphaldt, la espuma puede engañar a los medidores de nivel por eco: el ultrasonido da un eco débil en la superficie de la espuma y otro debilitado en la del líquido. Lo tienes también en «Instrumentos de medida a fondo».
- **Subidas de presión**, si el gas se forma más deprisa de lo que sale.

**Antiespumantes.** Un **antiespumante** (*antifoam, defoaming agent*) es un aditivo que rompe las películas de la espuma. En el laboratorio, el método oficial del BOE de 1976 añade una gota de alcohol amílico si la superficie de la probeta se cubre de espuma. En alimentos, el reglamento de Estados Unidos (21 CFR 173.340) admite como antiespumante el dimetilpolisiloxano, una silicona, con un máximo de 10 partes por millón (ppm) en el alimento.

**Ejercicio resuelto 6. Cuánto es 10 ppm.** En 2000 kg de masa, 10 ppm son 2000 × 10 / 1000000 = 0,02 kg = **20 g**. Un antiespumante se dosifica en gramos, no en kilos, y se pesa con la balanza adecuada.

Ese límite es de alimentos y sirve solo para ver la escala. En una planta de principio activo (API), el antiespumante es un material más que entra en el lote: se usa solo si la hoja lo prevé, y se registra con su peso y su número de lote, como pide ICH Q7 (apartado 6.52) para todas las materias primas. Si no está en la hoja, la espuma se controla con lo que sí está: añadir o calentar más despacio, bajar el vacío por escalones y vigilar la mirilla. Si aun así sube, se para el paso y se avisa.

### Tensioactivos en la limpieza de equipos
«Limpieza de equipos a fondo: procedimientos, validación y estados de limpieza» explica los pasos y los cuatro factores (tiempo, acción mecánica, química y temperatura). El tensioactivo es la parte química cuando se limpia con agua:

1. **Moja.** Al bajar la tensión superficial, el agua se extiende por la pared de acero o vidrio en vez de formar gotas, y entra en rendijas.
2. **Despega.** Las colas se meten en la película grasa y las cabezas tiran de ella hacia el agua.
3. **Se la lleva.** La grasa queda en micelas o en gotitas emulsionadas, y las partículas, forradas y en suspensión, sin volver a pegarse. Por eso la concentración no debe quedar por debajo de lo que pide la hoja.

La FDA, en su guía de inspección de la validación de limpieza, señala dos problemas del detergente. Muchos proveedores no dan su composición exacta, lo que complica buscar sus restos. Y no forma parte del proceso: se espera que tras la limpieza no quede detergente, o niveles muy bajos, y que se elimine con facilidad; si no, hay que elegir otro. Por eso los aclarados se cuentan uno a uno.

Los productos, equipos y cifras de los ejemplos son ficticios o de ejemplo. En planta manda siempre el procedimiento vigente (SOP).
`,
  plant: `
Turno de noche en la planta ficticia. En el reactor **R-215** se lava una fase orgánica en tolueno del intermedio ficticio **IX-40** con agua y bicarbonato. La hoja pide agitar a 80 rpm durante 15 minutos y decantar al menos 45 minutos a 25 °C (valores de ejemplo).

Al añadir el bicarbonato sale CO₂ y la espuma sube en la mirilla. Bajas el caudal de la bomba, como prevé la hoja, y la espuma se calma sin llegar a la tapa. El radar de nivel marca un valor que salta: lo anotas y no te fías de él hasta que la espuma desaparece.

Paras el agitador a las 03:10. A las 03:55 la interfase no está nítida: hay una franja lechosa de unos diez centímetros. Con una linterna por la mirilla ves que el haz se marca dentro de la franja, pero no en la fase de arriba. No subes la agitación «para mezclar mejor» ni calientas: la hoja no lo dice. Anotas la hora y el aspecto y avisas a la jefa de turno.

Ella consulta el procedimiento: para este paso está previsto añadir 20 L de salmuera saturada, agitar a 40 rpm dos minutos y decantar otros 30 minutos. Lo haces con la verificación de un segundo operador. A las 04:40 la interfase está nítida. Descargas la fase acuosa al depósito **T-260** vigilando la mirilla de línea, y la franja que quedaba va con la fase acuosa, como indica la hoja.

En la limpieza posterior del R-215 con el detergente ficticio DX-30, el tercer aclarado aún hace algo de espuma. La hoja pide un aclarado más en ese caso: lo haces y la muestra final sale sin espuma.
`,
  batchRecord: `
- **Extracción o lavado**: velocidad y tiempo de agitación reales, hora de parada, tiempo de decantación y aspecto de la interfase (nítida, turbia, franja lechosa y su altura aproximada).
- **Emulsión**: hora en que se detecta, a quién se avisa, medida aplicada según el procedimiento (cantidad de salmuera, temperatura, tiempo extra) y hora en que la interfase queda nítida; destino de la capa intermedia.
- **Espuma**: momento en que aparece (adición, calentamiento, vacío), qué se hizo (caudal, escalón de vacío) y si llegó al condensador o al venteo.
- **Antiespumante**, solo si la hoja lo prevé: nombre, número de lote, cantidad pesada y verificación.
- **Aspecto de disoluciones**: «transparente» solo si lo es al mirar con luz; cualquier opalescencia se anota.
- **Limpieza con detergente**: lote y concentración preparada (litros de concentrado y de agua), temperatura, tiempos y número de aclarados; espuma o restos en el último aclarado.
- Lecturas de nivel dudosas por espuma, con la hora.
`,
  terms: [
    { es: "Coloide", en: "Colloid", def: "Mezcla en la que una fase está repartida en otra con un tamaño de 1 a 1000 nm; no se separa sola o tarda muchísimo." },
    { es: "Fase dispersa", en: "Dispersed phase", def: "Lo que está repartido en gotas, partículas o burbujas dentro de la otra fase." },
    { es: "Fase continua", en: "Continuous phase", def: "El medio en el que está repartida la fase dispersa: el agua de una emulsión de aceite en agua." },
    { es: "Suspensión", en: "Suspension", def: "Mezcla con partículas sólidas mayores que las de un coloide, que acaban depositándose." },
    { es: "Efecto Tyndall", en: "Tyndall effect", def: "Desviación de la luz por las partículas de un coloide, que hace visible un haz dentro del líquido o del gas." },
    { es: "Ley de Stokes", en: "Stokes' law", def: "Fórmula de la velocidad a la que sube o cae una gota o partícula pequeña: v = g · Δρ · d² / (18 · η)." },
    { es: "Coalescencia", en: "Coalescence", def: "Unión de dos gotas o burbujas que chocan en una mayor; rompe emulsiones y espumas." },
    { es: "Emulsión", en: "Emulsion", def: "Un líquido repartido en gotas dentro de otro con el que no se mezcla, normalmente estabilizado por un emulsionante." },
    { es: "Espuma", en: "Foam", def: "Gas atrapado en finas películas de líquido." },
    { es: "Tensioactivo", en: "Surfactant", def: "Sustancia con una parte hidrófila y otra hidrófoba que baja la tensión superficial y forma emulsiones o micelas." },
    { es: "Micela", en: "Micelle", def: "Agrupación de moléculas de tensioactivo, con las colas hacia dentro, en equilibrio con las moléculas disueltas." },
    { es: "Concentración micelar crítica", en: "Critical micelle concentration (CMC)", def: "Concentración de un tensioactivo a partir de la cual empieza a formar micelas." },
    { es: "Antiespumante", en: "Antifoam, defoaming agent", def: "Aditivo que rompe las películas de una espuma; en planta, solo si la hoja lo prevé." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Según la ley de Stokes, la velocidad de una gota es proporcional al cuadrado de su diámetro. Una gota de 20 µm sube a 1,7 mm por minuto. Con el mismo líquido y la misma temperatura, ¿a cuántos mm por minuto subiría una gota de 10 µm?",
      answer: 0.425,
      tolerance: 0.02,
      unit: "mm/min",
      explain: "Diámetro a la mitad: velocidad entre 2 × 2 = 4. 1,7 / 4 = 0,425 mm/min. Por eso agitar demasiado, que hace gotas más finas, alarga tanto la decantación.",
    },
    {
      kind: "number",
      q: "Una emulsión tarda 30 horas en separarse a 20 °C. Al calentar, la viscosidad del agua baja a la mitad y la diferencia de densidad apenas cambia. Según la ley de Stokes, ¿cuántas horas tardaría ahora?",
      answer: 15,
      tolerance: 0.02,
      unit: "h",
      explain: "La velocidad es inversa a la viscosidad: con la mitad de viscosidad, doble de velocidad y mitad de tiempo, 30 / 2 = 15 h. Calentar solo se hace si la hoja lo prevé.",
    },
    {
      kind: "number",
      q: "Se reparten 2 L de disolvente (0,002 m³) en gotas iguales de 20 µm de diámetro (0,00002 m). Con superficie = 6 × V / d, ¿cuántos m² de frontera entre fases se crean?",
      answer: 600,
      tolerance: 0.02,
      unit: "m²",
      explain: "6 × 0,002 / 0,00002 = 600 m². Cuanto más finas las gotas, más frontera y más fácil que una impureza la forre y estabilice la emulsión.",
    },
    {
      kind: "number",
      q: "Una espuma tiene un 95 % de gas en volumen. ¿Cuántos litros de espuma forman 50 L de líquido?",
      answer: 1000,
      tolerance: 0.02,
      unit: "L",
      explain: "Cada litro de espuma lleva 0,05 L de líquido: 50 / (1 − 0,95) = 1000 L. Un poco de líquido espumado llena el hueco libre de un reactor.",
    },
    {
      kind: "number",
      q: "La hoja pide 400 L de disolución de un detergente ficticio al 2 % v/v. ¿Cuántos litros de concentrado hay que medir?",
      answer: 8,
      tolerance: 0.02,
      unit: "L",
      explain: "400 × 2 / 100 = 8 L de concentrado y agua hasta 400 L. La concentración es uno de los factores de la limpieza: ni más ni menos de lo que dice la hoja.",
    },
    {
      kind: "number",
      q: "Una hoja ficticia prevé un antiespumante a 20 ppm (partes por millón en masa) sobre 1500 kg de masa de reacción. ¿Cuántos gramos hay que pesar?",
      answer: 30,
      tolerance: 0.02,
      unit: "g",
      explain: "1500 × 20 / 1000000 = 0,03 kg = 30 g. Se pesa, se registra con su lote y se verifica, como cualquier material del lote (ICH Q7, 6.52).",
    },
    {
      kind: "choice",
      q: "Tras disolver un producto, el líquido parece claro, pero al iluminar la mirilla con una linterna el haz se ve marcado dentro del líquido. ¿Qué indica?",
      options: [
        "Que la disolución está perfecta, porque el haz solo se ve en líquidos puros",
        "Que hay partículas o gotitas muy finas sin disolver que desvían la luz",
        "Que el producto ha cambiado de color y hay que repetir la carga entera",
        "Que la linterna está mal enfocada y no se debe registrar nada",
      ],
      answer: 1,
      explain: "Es el efecto Tyndall: una disolución verdadera no desvía la luz; un coloide sí. No es «transparente»: se anota tal cual y se avisa según la hoja.",
    },
    {
      kind: "choice",
      q: "En una extracción, el compañero del turno anterior subió la agitación de 60 a 120 rpm «para extraer mejor» y ahora no hay manera de que separen las fases. ¿Cuál es la explicación más probable?",
      options: [
        "El tolueno se ha vuelto más denso que el agua por la agitación",
        "La agitación ha disuelto el agua en el tolueno de forma permanente",
        "Las gotas son más finas: hay más frontera y tardan mucho más en subir",
        "La fuerte agitación ha calentado la masa por encima de su ebullición",
      ],
      answer: 2,
      explain: "Más agitación rompe las gotas más: la velocidad de subida cae con el cuadrado del diámetro y cualquier impureza tensioactiva forra mejor la frontera. Se anota la desviación y se avisa.",
    },
    {
      kind: "choice",
      q: "Durante la destilación a vacío, la espuma sube por la mirilla del cuello. La hoja no menciona antiespumante, pero en el almacén hay uno. ¿Qué haces?",
      options: [
        "Paras la bajada de presión, reduces el calor según la hoja y avisas",
        "Añades unos gramos del antiespumante del almacén y sigues destilando",
        "Subes la temperatura de la camisa para que la espuma reviente sola",
        "Abres el venteo del reactor al aire para que la espuma tenga salida",
      ],
      answer: 0,
      explain: "Un antiespumante es un material del lote: solo se añade si la hoja lo prevé. La espuma se controla parando el escalón de vacío y quitando calor; si no se calma, se avisa.",
    },
    {
      kind: "choice",
      q: "Según la guía de la FDA sobre validación de limpieza, ¿qué se espera de un detergente usado para limpiar un equipo?",
      options: [
        "Que quede una capa fina en el equipo para proteger al lote siguiente",
        "Que se use la mayor concentración posible aunque cueste aclararlo",
        "Que su composición no importe, porque no forma parte del producto",
        "Que se elimine con facilidad y no queden restos, o muy pocos, tras limpiar",
      ],
      answer: 3,
      explain: "La FDA recuerda que el detergente no forma parte del proceso: debe eliminarse fácilmente y no quedar, o en niveles muy bajos; si no, hay que elegir otro.",
    },
  ],
};
