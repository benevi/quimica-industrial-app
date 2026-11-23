import type { Lesson } from "./types";

export const disolucionesAFondo: Lesson = {
  slug: "disoluciones-a-fondo",
  level: 1,
  order: 10,
  title: "Disoluciones y solubilidad a fondo: la base de la cristalización",
  titleEn: "Solutions and solubility in depth: the basis of crystallization",
  minutes: 38,
  summary:
    "Qué pasa cuando un sólido se disuelve, qué es la solubilidad y cómo se lee una curva de solubilidad, cuánto producto cristaliza y cuánto se pierde, por qué la cristalización purifica, cómo se diluye sin riesgo y qué disoluciones conducen la electricidad.",
  body: `
Las formas de expresar la concentración están en «Disoluciones y concentración» y en «El mol: contar moléculas pesando»; aquí no se repiten. Esta lección responde a otra pregunta: **cuánto soluto cabe** en un disolvente, de qué depende y cómo se aprovecha para purificar. Es la base de «Cristalización» (nivel 12) y del lavado de la torta.

### Soluto, disolvente y disolución, desde cero
Echa sal en un vaso de agua y remueve. Ya no la ves, pero el agua sabe salada: la sal sigue ahí, repartida. Eso es una **disolución** (*solution*): una mezcla tan íntima que se ve como una sola sustancia.

- **Soluto** (*solute*): lo que se disuelve, normalmente lo que está en menor cantidad (la sal, el producto).
- **Disolvente** (*solvent*): el líquido que lo acoge: agua, metanol, etanol, acetona, tolueno, heptano.
- Una disolución es **transparente** aunque tenga color. Si está turbia, hay sólido sin disolver: es una **suspensión** (*slurry*), como la que va del cristalizador a la centrífuga.

### Qué pasa con las partículas al disolver un sólido
Un cristal es como un muro de ladrillos ordenado: sus moléculas (o sus iones, si es una sal) están apiladas y se atraen. Al echarlo en un disolvente, las moléculas de disolvente se pegan a las de la capa exterior, las **rodean** y las **arrancan** del muro. Cada molécula de soluto se va por el líquido envuelta en disolvente, y capa a capa el cristal se deshace.

Que ocurra depende de las atracciones entre moléculas de «Enlaces, moléculas y polaridad»: el disolvente debe atraer al soluto al menos tanto como el soluto se atrae a sí mismo. De ahí «lo semejante disuelve a lo semejante» (*like dissolves like*).

**Agitar** y **moler** aceleran la disolución, pero no cambian cuánto se disuelve al final. Calentar acelera y, además, casi siempre deja disolver más.

### La solubilidad: cuánto cabe como máximo
Si sigues echando sal, llega un momento en que se queda en el fondo por mucho que remuevas. La **solubilidad** (*solubility*) es la cantidad máxima de soluto que admite una cantidad dada de disolvente, a una temperatura concreta.

Se expresa de dos formas habituales:

- **g de soluto por 100 g de disolvente**. Es la que usaremos aquí, porque con kilos las cuentas salen directas: 22 g por 100 g de etanol son 22 kg por cada 100 kg de etanol.
- **g/L**: gramos por litro de disolución, como verás en «Cristalización».

Mira siempre la base del dato: «por 100 g de **disolvente**» no es lo mismo que por 100 g de disolución.

Según cuánto soluto lleve, una disolución puede estar:

| Estado | Qué significa | Qué pasa si echas más soluto |
|---|---|---|
| **Insaturada** (*unsaturated*) | Lleva menos de lo que admite | Se disuelve |
| **Saturada** (*saturated*) | Lleva justo el máximo | Se queda sin disolver en el fondo |
| **Sobresaturada** (*supersaturated*) | Lleva más del máximo, de forma inestable | Basta un cristal para que el exceso salga como sólido |

La analogía del azúcar en el café: en un café caliente disuelves varias cucharadas; en un café con hielo, la segunda ya se queda en el fondo. Si endulzas mucho un café caliente y lo dejas enfriar, el azúcar que «sobra» puede formar cristalitos. A escala de reactor, eso es una cristalización por enfriamiento.

### La curva de solubilidad
Si se mide la solubilidad a varias temperaturas y se dibuja, sale la **curva de solubilidad** (*solubility curve*): temperatura en el eje horizontal y solubilidad en el vertical. Cada punto de la línea es una disolución saturada. Por debajo de la línea, la disolución está insaturada; por encima, sobresaturada.

Para casi todos los sólidos la curva **sube con la temperatura**: arrancar moléculas del cristal cuesta energía, y al calentar las moléculas se mueven con más fuerza y el disolvente arranca más. Hay excepciones, y por eso cada producto tiene su curva medida en el laboratorio.

Esta es la curva de un producto ficticio, **PX-12**, en etanol. Todos los valores son de ejemplo, inventados para esta lección:

| Temperatura | Solubilidad de PX-12 en etanol (valor de ejemplo) |
|---|---|
| 0 °C | 2,0 g por 100 g de etanol |
| 5 °C | 2,5 g por 100 g de etanol |
| 20 °C | 5,0 g por 100 g de etanol |
| 40 °C | 11,0 g por 100 g de etanol |
| 60 °C | 22,0 g por 100 g de etanol |

Se lee así: a 60 °C caben 22,0 g en cada 100 g de etanol; a 5 °C, solo 2,5 g. La curva no es una recta: de 40 a 60 °C la solubilidad se duplica.

### Cuatro cuentas con la curva
La hoja de un lote ficticio dice: cargar **400 kg de etanol** y **80,0 kg de PX-12 bruto** con una pureza del 97,5 %. Es decir, 78,0 kg de PX-12 y 2,0 kg de impurezas (valores de ejemplo).

**Cuenta 1. Cuánto PX-12 cabe disuelto a 60 °C.**
400 kg de etanol son 4 veces 100 kg: caben 22,0 × 4 = **88,0 kg**. Hay 78,0 kg, así que está insaturada y todo se disuelve, con un margen que asegura que no quede ningún cristal antes de la clarificación.

78,0 kg en 400 kg son 19,5 g por 100 g, entre 11,0 (40 °C) y 22,0 (60 °C). Interpolando en línea recta sale unos 55 °C, solo una estimación porque la curva no es recta: por debajo de esa temperatura la disolución está sobresaturada.

**Cuenta 2. Cuánto cristaliza al enfriar a 5 °C.**
A 5 °C solo caben 2,5 × 4 = 10,0 kg disueltos. El resto tiene que salir como sólido: 78,0 − 10,0 = **68,0 kg de cristales**, como máximo.

**Cuenta 3. Rendimiento teórico de la cristalización.**
El **rendimiento** (*yield*) teórico es lo recuperado entre lo que había: 68,0 / 78,0 × 100 = **87,2 %**. Es un techo: en la realidad se recupera algo menos (paredes, lavado, muestras).

**Cuenta 4. Cuánto se pierde en las aguas madres.**
Los 10,0 kg que siguen disueltos se van con el líquido que sale de la centrífuga, las **aguas madres** (*mother liquor*): 10,0 / 78,0 × 100 = **12,8 %** del producto. Por eso a veces se guardan para recuperar producto; lo decide el procedimiento.

Enfriar más abajo da más rendimiento (a 0 °C quedarían 8,0 kg disueltos), y usar menos disolvente también. Pero con menos disolvente quizá no se disuelve todo en caliente y la suspensión final sería demasiado espesa para agitarla. Las cantidades de la hoja son un equilibrio fijado por desarrollo; no se cambian.

### Por qué la cristalización purifica
Las impurezas del ejemplo son 2,0 kg. Supón que su solubilidad en etanol a 5 °C es 4,0 g por 100 g (valor de ejemplo). En 400 kg de etanol cabrían 16,0 kg de impureza, y solo hay 2,0 kg. La impureza **no llega a saturar**: sigue disuelta aunque enfríes, y se queda en las aguas madres. El producto, en cambio, está en gran cantidad, satura y cristaliza.

Además, un cristal crece ordenado, como un mosaico donde solo encajan las piezas de un dibujo: las moléculas de impureza, de otra forma, encajan mal y tienden a quedarse fuera.

Pero los cristales salen **mojados** de aguas madres. Supón que, tras centrifugar, la torta retiene 20 kg de líquido (valor de ejemplo). Las aguas madres pesan 400 + 10,0 + 2,0 = 412 kg y llevan 2,0 kg de impureza. En 20 kg de ellas van 20 × 2,0 / 412 = 0,097 kg, unos 0,1 kg de impureza. Si se secara así, esa impureza quedaría pegada a los 68,0 kg de producto: alrededor de un 0,14 %. Para quitarla se **lava la torta**.

### El lavado de la torta, y por qué con disolvente frío
El lavado sustituye las aguas madres por disolvente limpio; cómo se hace lo cuentan «La centrífuga a fondo» y «Filtros a fondo». Pero el disolvente de lavado también disuelve producto.

Supón 60 kg de etanol de lavado y el peor caso, que salga saturado de PX-12 (en la realidad el contacto es corto y sale por debajo de la saturación):

| Temperatura del lavado | Producto que puede redisolver, como máximo |
|---|---|
| 5 °C | 2,5 × 0,6 = 1,5 kg |
| 20 °C | 5,0 × 0,6 = 3,0 kg |
| 40 °C | 11,0 × 0,6 = 6,6 kg |

Lavar a 5 °C en vez de a 20 °C reduce la pérdida a la mitad. Por eso la hoja pide disolvente **frío**: arrastra las impurezas, que caben de sobra, y redisuelve el mínimo de producto. Un lavado templado por un fallo del frío se anota y se comunica.

### Sobresaturación, zona metaestable y siembra
Por debajo de unos 55 °C la disolución del ejemplo está sobresaturada, pero los cristales no salen enseguida: formar el **primer** cristal cuesta, porque las moléculas tienen que juntarse por azar en un grupito ordenado que no se deshaga.

La analogía: una botella de agua que se ha quedado unos grados por debajo de 0 °C en el congelador puede seguir líquida. Si la golpeas o le echas un trocito de hielo, se congela en segundos. Le faltaba un punto de partida.

Con las disoluciones pasa igual. Entre la curva de solubilidad y un límite algo por encima hay una franja, la **zona metaestable** (*metastable zone*), donde la disolución está sobresaturada pero no forma cristales por sí sola, o tarda mucho. Si se sobresatura más allá de esa franja, de golpe aparecen muchísimos cristales a la vez: es la **nucleación** (*nucleation*) espontánea.

La **siembra** (*seeding*) aprovecha esa franja: con la disolución un poco sobresaturada se añaden unos pocos cristales del propio producto, de la forma correcta. Son el «trocito de hielo»: el exceso se deposita sobre ellos y los hace crecer. Si se siembra demasiado caliente, la semilla se disuelve; si se siembra tarde, la nucleación espontánea puede haber empezado. Por eso la temperatura de siembra tiene un margen estrecho.

Por qué la rampa de enfriamiento es lenta:

- **Enfriar despacio** mantiene la disolución dentro de la zona metaestable: el producto crece sobre los cristales existentes, que salen grandes, ordenados y puros, y filtran y se lavan bien.
- **Enfriar de golpe** la saca de esa zona: aparecen muchísimos cristales diminutos, una torta de **finos** que filtra despacio y retiene aguas madres. Al crecer a toda prisa pueden atrapar impurezas y líquido dentro, y eso no se quita lavando.

La anchura de la zona metaestable la mide el laboratorio para cada producto; aquí no se dan números.

### Otras formas de sobresaturar: antidisolvente y evaporación
Solubilidad de PX-12 a 20 °C en otros disolventes (valores de ejemplo):

| Disolvente, a 20 °C | Solubilidad de PX-12 (valor de ejemplo) |
|---|---|
| Acetona | 25 g por 100 g |
| Metanol | 4 g por 100 g |
| Mezcla acetona y heptano, 1:1 en peso | 2 g por 100 g |
| Heptano | 0,1 g por 100 g |

**Cristalización por antidisolvente** (*antisolvent crystallization*). Un **antidisolvente** es un líquido en el que el producto casi no se disuelve, aquí el heptano. 50 kg de PX-12 en 250 kg de acetona a 20 °C son 20 g por 100 g, por debajo de 25: todo disuelto. Se añaden despacio 250 kg de heptano. En los 500 kg de mezcla 1:1 solo caben 2 × 5 = 10 kg: cristalizan 50 − 10 = **40 kg**, un 80 %. La velocidad de adición hace de rampa: añadirlo de golpe sobresatura de golpe.

**Cristalización por evaporación** (*evaporative crystallization*). Se quita disolvente destilando. Hay 40 kg de PX-12 en 800 kg de metanol. Enfriando tal cual a 20 °C caben 4 × 8 = 32 kg: solo cristalizan 8 kg, un 20 %. Si antes se destilan 600 kg y quedan 200 kg, caben 4 × 2 = 8 kg y cristalizan 40 − 8 = **32 kg**, un 80 %. Por eso la hoja fija el volumen residual de la destilación: decide el rendimiento, y pasarse puede dejar una pasta imposible de agitar.

### La solubilidad de los gases
Con los gases pasa lo **contrario** que con casi todos los sólidos: al calentar se disuelven **menos**. Al calentar agua en un cazo, antes de hervir salen burbujitas pegadas al fondo: es el aire disuelto que el agua caliente ya no retiene. En planta, al calentar un disolvente también se desprende gas disuelto, que sale por el venteo.

La solubilidad de un gas **sube con la presión** del gas que hay encima. Una bebida con gas se embotella a presión con dióxido de carbono; al abrirla, la presión baja y el gas sale. Un disolvente que ha estado al aire lleva oxígeno disuelto, además del que hay en el hueco del equipo. La inertización («Inertización a fondo») controla el oxígeno del gas; si un proceso es sensible al oxígeno disuelto, la hoja puede pedir además burbujear nitrógeno por el líquido.

### Diluir y mezclar: C1·V1 = C2·V2
Diluir es añadir disolvente: el soluto no cambia, solo se reparte en más líquido. De ahí:

> C1 · V1 = C2 · V2

C1 y V1 son la concentración y el volumen de la disolución concentrada; C2 y V2, los de la diluida que quieres. Como explica «Disoluciones y concentración», con litros solo vale si la concentración es por volumen (mol/L, g/L); si es en peso (% p/p), se hace igual pero con kilos: C1 · m1 = C2 · m2.

**Ejemplo 1. Sosa diluida en peso.** Preparar 500 kg de sosa al 4 % p/p a partir de sosa al 50 % p/p (la ficha ficticia CAUSTIL 50 de la app da una densidad de 1,52 kg/L). m1 = 4 × 500 / 50 = **40 kg** de sosa al 50 %, que son 40 / 1,52 = 26,3 L, y 500 − 40 = 460 kg de agua. Se carga primero el agua y después la sosa, poco a poco y con agitación.

**Ejemplo 2. Ácido clorhídrico diluido en peso.** Preparar 300 kg de ácido clorhídrico al 5 % p/p a partir del 35 % p/p (densidad 1,17 kg/L según la ficha ficticia CLORAC 35). m1 = 5 × 300 / 35 = **42,9 kg** de ácido concentrado, unos 36,6 L, y 257,1 kg de agua.

**Ejemplo 3. Sosa en mol/L.** Preparar 80 L de NaOH 0,5 mol/L a partir de NaOH 2 mol/L. V1 = 0,5 × 80 / 2 = **20 L** de la concentrada, y se completa con agua hasta 80 L. «Completar hasta» y no «añadir 60 L», porque los volúmenes al mezclar no siempre se suman exactamente.

**La regla de seguridad: siempre el ácido sobre el agua.** Diluir un ácido o una base concentrados **desprende calor**. La NTP 97 del Instituto Nacional de Seguridad y Salud en el Trabajo (INSST), sobre el ácido sulfúrico, pide añadir siempre el ácido al agua, en pequeñas proporciones y agitando, para que toda el agua absorba el calor; si no, el calor puede convertir el agua en vapor y esparcir el ácido caliente en todas direcciones. Un poco de ácido en mucha agua reparte el calor en mucho líquido; un poco de agua sobre mucho ácido recibe todo el calor de golpe, hierve y salpica. La NTP 1229 del INSST incluye la preparación de diluciones de ácidos o de bases entre las reacciones que calientan el producto y el recipiente. La ficha CAUSTIL 50 de la app dice lo mismo de la sosa.

**Mezclas de disolventes en % v/v.** El **% v/v** (*volume/volume*) son litros de un líquido en 100 L de mezcla. «Etanol 70 % v/v, 200 L» son 0,70 × 200 = 140 L de etanol y agua hasta 200 L: al mezclar etanol y agua el volumen final es algo menor que la suma, por eso se completa hasta el volumen final. «Heptano y acetato de etilo 3:1 en volumen» son 3 L de heptano por cada litro de acetato de etilo.

### Disoluciones que conducen la electricidad
Una sal, un ácido o una base disueltos en agua se separan en **iones** (*ions*), partículas con carga eléctrica: la sal común da iones sodio y cloruro; la sosa, sodio e hidróxido. Los iones se mueven y transportan corriente: son **electrolitos** (*electrolyte*). El azúcar o el etanol se disuelven como moléculas sin carga y apenas conducen.

Eso mide la **conductividad** (*conductivity*): el agua muy pura casi no conduce, y con sales disueltas conduce más. Por eso vigila en línea la pureza química del agua farmacéutica («Agua farmacéutica a fondo»).

### Presión de vapor de una disolución
Todo líquido tiene una **presión de vapor** (*vapour pressure*), la tendencia de sus moléculas a escapar al gas, que sube con la temperatura; hierve cuando iguala la presión de encima («Bombas a fondo»). Si se disuelve algo que no se evapora, como la sal, escapan menos moléculas de agua y la presión de vapor baja: hay que calentar un poco más para que hierva. Por eso el agua con sal hierve algo por encima de 100 °C, y una disolución concentrada en un reactor hierve algo por encima del disolvente puro.

Los números de esta lección son de ejemplo para aprender a razonar. En planta manda siempre el procedimiento vigente (SOP) y la hoja de producción de tu lote.
`,
  plant: `
Turno de tarde en la planta ficticia. En el reactor **R-310** se cristaliza el producto ficticio **PX-12** en etanol. Todos los valores son de ejemplo.

Ya están cargados 400 kg de etanol y 80,0 kg de PX-12 bruto. Calientas a 60 °C con agitación: al cabo de un rato el visor muestra un líquido transparente, sin una sola partícula. Anotas «disolución completa» y la hora. La disolución pasa por el filtro de cartucho al cristalizador **R-311**, también a 60 °C.

La hoja pide enfriar a 50 °C y sembrar con 0,4 kg de semilla de PX-12. Compruebas en el sistema de control que la temperatura es 50 °C y que la disolución sigue transparente: está sobresaturada, dentro de la zona metaestable, pero aún sin cristales. Añades la semilla, compruebas el lote de la semilla en la etiqueta y el segundo operador lo verifica contigo. A los veinte minutos el líquido se vuelve lechoso: los cristales crecen.

Empieza la rampa automática hasta 5 °C en 6 horas. A mitad de rampa salta una alarma de temperatura de la camisa: el frío ha fallado unos minutos y, al volver, el sistema ha bajado la temperatura más deprisa de lo previsto. No tocas nada por tu cuenta: anotas hora y temperaturas y avisas al jefe de turno, porque un enfriamiento brusco puede dar finos y es una posible desviación.

Al final, la centrífuga **C-320** separa los cristales. Las aguas madres van al depósito **T-330** para recuperar producto. El lavado se hace con 60 kg de etanol enfriado a 5 °C; antes de lavar compruebas en el indicador que el etanol está frío.
`,
  batchRecord: `
- **Cargas**: kg de disolvente y de producto bruto, con lote, pesada y verificación por un segundo operador.
- **Disolución**: temperatura alcanzada, hora y aspecto («disolución completa, transparente»).
- **Siembra**: temperatura de siembra, cantidad y lote de la semilla, aspecto antes y después.
- **Enfriamiento**: temperatura inicial y final, duración de la rampa, gráfico del sistema de control adjunto si la hoja lo pide; cualquier interrupción, con hora.
- **Antidisolvente o destilación**, cuando toque: cantidad y velocidad de adición del antidisolvente; volumen destilado y volumen residual.
- **Lavado**: cantidad y temperatura del disolvente de lavado.
- **Aguas madres**: cantidad y destino (depósito de recuperación o residuo).
- **Diluciones preparadas**: concentración de partida (riqueza del certificado), kg de concentrado y de agua, orden de adición y temperatura.
- Cualquier valor fuera de rango se anota tal cual y se comunica.
`,
  terms: [
    { es: "Disolución", en: "Solution", def: "Mezcla transparente y uniforme de un soluto repartido en un disolvente." },
    { es: "Solubilidad", en: "Solubility", def: "Cantidad máxima de soluto que admite una cantidad de disolvente a una temperatura dada." },
    { es: "Disolución saturada", en: "Saturated solution", def: "La que lleva justo el máximo de soluto que admite a esa temperatura." },
    { es: "Disolución insaturada", en: "Unsaturated solution", def: "La que lleva menos soluto del máximo; aún puede disolver más." },
    { es: "Sobresaturación", en: "Supersaturation", def: "Estado inestable con más soluto disuelto del que admite la disolución; es la fuerza que hace cristalizar." },
    { es: "Curva de solubilidad", en: "Solubility curve", def: "Gráfica o tabla de la solubilidad de un producto frente a la temperatura." },
    { es: "Zona metaestable", en: "Metastable zone", def: "Franja de sobresaturación en la que la disolución no forma cristales nuevos por sí sola, o tarda mucho." },
    { es: "Siembra", en: "Seeding", def: "Añadir cristales del propio producto a una disolución ligeramente sobresaturada para que crezcan sobre ellos." },
    { es: "Aguas madres", en: "Mother liquor", def: "Líquido que queda tras cristalizar y separar los cristales; lleva el producto que no cristalizó y las impurezas." },
    { es: "Rendimiento teórico", en: "Theoretical yield", def: "Máximo de producto que se puede recuperar según la solubilidad, en kg o en tanto por ciento de lo cargado." },
    { es: "Antidisolvente", en: "Antisolvent", def: "Líquido en el que el producto casi no se disuelve y que se añade para que cristalice." },
    { es: "Electrolito", en: "Electrolyte", def: "Sustancia que al disolverse se separa en iones y hace que la disolución conduzca la electricidad." },
    { es: "Porcentaje en volumen", en: "Volume percent (% v/v)", def: "Litros de un líquido en cada 100 L de mezcla." },
  ],
  quiz: [
    {
      kind: "number",
      q: "La curva de solubilidad de un producto ficticio en etanol da 11,0 g por 100 g de etanol a 40 °C. ¿Cuántos kg de producto caben disueltos como máximo en 300 kg de etanol a 40 °C?",
      answer: 33,
      tolerance: 0.01,
      unit: "kg",
      explain: "300 kg son 3 veces 100 kg: 11,0 × 3 = 33 kg. Por encima de esa cantidad, a 40 °C la disolución estaría sobresaturada.",
    },
    {
      kind: "number",
      q: "Tienes 50 kg de producto disueltos en 250 kg de etanol a 60 °C. La solubilidad a 5 °C es 2,5 g por 100 g de etanol. ¿Cuántos kg de cristales se obtienen como máximo al enfriar a 5 °C?",
      answer: 43.75,
      tolerance: 0.01,
      unit: "kg",
      explain: "A 5 °C caben 2,5 × 2,5 = 6,25 kg disueltos; cristalizan 50 − 6,25 = 43,75 kg.",
    },
    {
      kind: "number",
      q: "Con los mismos datos (50 kg de producto disueltos en 250 kg de etanol, solubilidad 2,5 g por 100 g a 5 °C), ¿cuál es el rendimiento teórico de la cristalización al enfriar a 5 °C, en tanto por ciento?",
      answer: 87.5,
      tolerance: 0.01,
      unit: "%",
      explain: "Cristalizan 43,75 kg de 50 kg: 43,75 / 50 × 100 = 87,5 %. El 12,5 % restante se queda en las aguas madres.",
    },
    {
      kind: "number",
      q: "Lavas la torta con 80 kg de etanol a 5 °C. La solubilidad del producto a 5 °C es 2,5 g por 100 g de etanol. En el peor caso, si el lavado saliera saturado, ¿cuántos kg de producto se redisolverían?",
      answer: 2,
      tolerance: 0.01,
      unit: "kg",
      explain: "80 kg son 0,8 veces 100 kg: 2,5 × 0,8 = 2 kg como máximo. Con el lavado a 20 °C (5,0 g por 100 g) serían el doble.",
    },
    {
      kind: "number",
      q: "Hay que preparar 250 kg de sosa al 8 % p/p a partir de sosa al 50 % p/p. Usando C1 · m1 = C2 · m2, ¿cuántos kg de sosa al 50 % necesitas?",
      answer: 40,
      tolerance: 0.01,
      unit: "kg",
      explain: "m1 = 8 × 250 / 50 = 40 kg de sosa al 50 % y 210 kg de agua. Primero el agua y después la sosa, poco a poco y con agitación.",
    },
    {
      kind: "number",
      q: "Hay que preparar 150 kg de ácido clorhídrico al 7 % p/p a partir de ácido clorhídrico al 35 % p/p. ¿Cuántos kg del ácido al 35 % necesitas?",
      answer: 30,
      tolerance: 0.01,
      unit: "kg",
      explain: "m1 = 7 × 150 / 35 = 30 kg de ácido al 35 % y 120 kg de agua, echando el ácido sobre el agua.",
    },
    {
      kind: "choice",
      q: "Tras cristalizar un producto, las impurezas casi no aparecen en los cristales lavados. ¿Por qué se quedan en las aguas madres?",
      options: [
        "Porque las impurezas pesan más y se van al fondo del reactor",
        "Porque el frío destruye las impurezas durante la rampa",
        "Porque están en poca cantidad y no llegan a saturar la disolución",
        "Porque la centrífuga gira más deprisa que las impurezas",
      ],
      answer: 2,
      explain: "La impureza cabe disuelta de sobra aunque se enfríe, así que sigue en el líquido; el producto, en gran cantidad, satura y cristaliza.",
    },
    {
      kind: "choice",
      q: "La hoja dice «sembrar a 50 °C». Por un despiste la disolución ha bajado a 42 °C sin sembrar y ya se ve turbia. ¿Qué haces?",
      options: [
        "Lo anotas tal cual, no sigues por tu cuenta y avisas al jefe de turno",
        "Calientas a 50 °C sin decir nada y siembras como pone la hoja",
        "Siembras el doble de semilla para compensar el retraso",
        "Continúas la rampa: la semilla ya no hace ninguna falta",
      ],
      answer: 0,
      explain: "La turbidez indica nucleación espontánea fuera de lo previsto: puede cambiar el tamaño o la forma del cristal. Se registra y decide quien corresponde según el SOP.",
    },
    {
      kind: "choice",
      q: "Calientas una mezcla de reacción y ves que sale gas por el venteo antes de llegar a hervir. ¿Cuál es la explicación más sencilla?",
      options: [
        "El disolvente se descompone en cuanto pasa de 30 °C",
        "Los gases disueltos se disuelven menos al calentar y se desprenden",
        "El nitrógeno de la inertización se convierte en líquido",
        "Al calentar, la solubilidad de los gases sube y el líquido los absorbe",
      ],
      answer: 1,
      explain: "Al revés que casi todos los sólidos, los gases se disuelven menos en caliente: el gas que llevaba disuelto el líquido sale.",
    },
    {
      kind: "choice",
      q: "Vas a preparar ácido sulfúrico diluido en un depósito. ¿Cuál es el orden correcto?",
      options: [
        "Primero el ácido y luego el agua de golpe, para mezclar mejor",
        "Primero el ácido y luego el agua poco a poco, sin agitar",
        "Agua y ácido a la vez por la misma tubería, para ganar tiempo",
        "Primero el agua y luego el ácido poco a poco, con agitación",
      ],
      answer: 3,
      explain: "Diluir el ácido desprende mucho calor; echándolo sobre el agua poco a poco y agitando, toda el agua absorbe el calor y no hierve ni salpica (NTP 97 del INSST).",
    },
  ],
};
