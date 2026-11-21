import type { Lesson } from "./types";

export const polimorfismoAFondo: Lesson = {
  slug: "polimorfismo-a-fondo",
  level: 3,
  order: 10,
  title: "Polimorfismo, sales y solvatos a fondo: el mismo producto en distintas formas sólidas",
  titleEn: "Polymorphism, salts and solvates in depth: the same product in different solid forms",
  minutes: 40,
  summary:
    "Qué es un cristal y un amorfo, por qué la misma molécula cristaliza de varias formas y cuál es la estable, qué mueve una forma a otra en planta, cómo se reconocen, qué son los solvatos e hidratos y cómo se calcula su agua, por qué se hace una sal y cómo se pasa de sal a base libre, y qué dice ICH Q6A del polimorfo y del tamaño de partícula.",
  body: `
En «Polimorfismo, sales y solvatos» viste las palabras. Aquí vas a entender qué hay detrás, qué lo mueve en planta y cómo se hacen las cuentas. La solubilidad y la siembra están en «Disoluciones y solubilidad a fondo» y el secado en «El secado a fondo».

### Cristal y amorfo, desde cero
Imagina una caja de piezas de lego iguales. Puedes montarlas de dos maneras:

- **En orden**: cada pieza encajada con la de al lado, fila tras fila, siempre con el mismo patrón. Eso es un **sólido cristalino** (*crystalline solid*). El patrón que se repite en las tres direcciones es la **red cristalina** (*crystal lattice*).
- **A montón**: las piezas echadas en un cubo, tocándose, pero sin orden. Eso es un **sólido amorfo** (*amorphous solid*). La guía de la FDA sobre polimorfismo lo define así: moléculas en una disposición desordenada, sin una red cristalina reconocible.

El montón se deshace antes y el muro aguanta más.

### Polimorfos: las mismas piezas, montadas de dos formas
Con las mismas piezas puedes levantar dos muros ordenados distintos: uno con las piezas en vertical y otro con las piezas tumbadas. Eso son dos **polimorfos** (*polymorphs*): la misma molécula, la misma fórmula, pero distinta red cristalina. Se llaman forma I y forma II, o forma A y forma B.

La guía ICH Q6A, sobre especificaciones de principios activos nuevos, define el **polimorfismo** (*polymorphism*) como la existencia de distintas formas cristalinas de la misma sustancia, y dice que puede incluir también los solvatos, los hidratos (a los que llama «pseudopolimorfos», *pseudopolymorphs*) y las formas amorfas. La FDA usa la misma idea amplia.

Lo importante: **la molécula no cambia**. Una cromatografía ve la misma sustancia en las dos formas. Hacen falta técnicas que «vean» el orden, no la molécula.

La guía de la FDA cuenta el caso de un principio activo con al menos veinte formas, de las que solo unas pocas aparecen en las condiciones del proceso.

### Por qué importa la forma en un medicamento
La guía de la FDA enumera propiedades que pueden cambiar de un polimorfo a otro, entre ellas el punto de fusión, la reactividad, la solubilidad aparente, la velocidad de disolución y la densidad, y otras que afectan a la fabricación, como la higroscopicidad, la forma de la partícula y la fluidez. Concluye que el polimorfismo puede afectar a la calidad, la seguridad y la eficacia del medicamento.

| Propiedad | Qué pasa si sale otra forma |
|---|---|
| Solubilidad y velocidad de disolución | Si el fármaco solo se absorbe tan deprisa como se disuelve, una forma menos soluble puede hacer que llegue menos a la sangre |
| Estabilidad | Una forma puede transformarse en otra durante el almacenamiento o degradarse antes |
| Fluidez y compactación | El polvo fluye o se comprime distinto en la planta que hace los comprimidos |
| Filtración y secado | Otra forma suele traer otra forma de cristal: filtra, se lava y se seca distinto |

ICH Q6A, en su apartado 3.3.1 c), lo dice así: cuando se ha demostrado que las diferencias entre formas afectan al comportamiento del medicamento, a su biodisponibilidad o a su estabilidad, hay que especificar el estado sólido adecuado. La forma entra en la especificación.

Los **árboles de decisión 4(1) a 4(3)** de Q6A ordenan el razonamiento: se buscan y caracterizan las formas posibles; si tienen propiedades distintas (solubilidad, estabilidad, punto de fusión) y eso afecta a la seguridad, el comportamiento o la eficacia del medicamento, se fija un criterio de aceptación para la forma en el principio activo.

### Forma estable y formas metaestables
De todas las formas de un producto, a una temperatura dada, hay una que es la más estable: la que «menos energía tiene», como una bola en el fondo de un valle. Las demás son **metaestables** (*metastable*): bolas en un hoyo a media ladera, quietas hasta que un empujón las hace rodar hacia abajo.

De ahí salen tres ideas de libro de texto:

- **La forma estable es la menos soluble.** Su red está más «a gusto» y cuesta más deshacerla. Una forma metaestable se disuelve algo más.
- **Una metaestable puede pasar a la estable**, no al revés, si algo le da el empujón.
- **En algunos productos, cuál es la estable depende de la temperatura**: por debajo de cierta temperatura manda una forma y por encima, otra.

La FDA explica que en el desarrollo se suele elegir la forma más estable, la de menos riesgo de transformarse, aunque a veces se elige una metaestable para que el medicamento se absorba mejor; y pide cautela en ese caso, porque la fabricación puede cambiar la forma.

### Qué mueve una forma a otra, y qué la controla en planta
La guía de la FDA cita como causas de transformación el secado, la molienda, la micronización, la granulación húmeda y la compactación, y también la humedad y la temperatura. En planta se traduce en estos parámetros:

| Parámetro | Por qué decide la forma |
|---|---|
| Disolvente y su composición, incluida el agua | Cada disolvente favorece una forma; el agua puede dar un hidrato |
| Temperatura | Decide cuánta sobresaturación hay y, en algunos productos, qué forma es la estable |
| Velocidad de enfriamiento o de adición de antidisolvente | Despacio crece la forma sembrada; de golpe puede salir otra |
| Siembra: forma, cantidad, lote y temperatura | La semilla de la forma correcta dirige la cristalización hacia ella |
| Tiempo de maduración | En la suspensión, la forma metaestable se disuelve algo más y la estable crece a su costa: la **transformación en suspensión** (*solvent-mediated transformation*) necesita su tiempo |
| Secado: temperatura del producto, vacío y tiempo | El calor puede transformar la forma o sacar el disolvente de un solvato |
| Molienda: molino, velocidad, temperatura | El golpe y el calor pueden cambiar la forma |
| Humedad del ambiente y del envase | Un producto seco puede tomar agua y pasar a hidrato, o un amorfo cristalizar |

La FDA añade que la transformación no es grave si ocurre siempre igual, dentro de un proceso validado con las variables críticas entendidas y controladas. La clave es **siempre igual**.

**Por qué una planta puede «perder» una forma o ver aparecer una nueva.** Si se fabrica una forma metaestable y un día aparece la estable, sus cristales hacen de semilla: un resto en la centrífuga o en un filtro puede empujar los lotes siguientes hacia ella. Y un cambio que parece inocente (disolvente con más agua, enfriamiento más rápido) puede dar una forma nunca vista.

Un ejemplo de hoja para el clorhidrato del producto ficticio **VX-30**, que se fabrica en su **forma B** (todo son valores de ejemplo):

| Paso | Instrucción | Por qué es crítica |
|---|---|---|
| 1 | Disolver 150,0 kg de VX-30 base en 900 L de etanol a 60 ± 2 °C | Sin restos de cristales de otra forma |
| 2 | Añadir el ácido clorhídrico en 60 min como mínimo, de 55 a 65 °C | Formar la sal sin sobresaturar de golpe |
| 3 | Enfriar a 50 ± 2 °C y sembrar con 0,75 kg de semilla de forma B (lote aprobado) | Temperatura de siembra y forma de la semilla |
| 4 | Mantener 2 h a 50 °C | Maduración: que crezca solo la forma B |
| 5 | Enfriar a 0–5 °C a 10 °C/h como máximo | Enfriar más deprisa puede dar forma A |
| 6 | Mantener 2 h como mínimo; IPC de forma por XRPD | Confirmar la forma antes de separar |
| 7 | Secar a 50 mbar abs como máximo, producto a 45 °C como máximo | Por encima, la forma B pasa a forma A (dato de ejemplo) |
| 8 | Moler en el molino cónico con la criba y la velocidad indicadas | Sin calentar el producto por encima del límite |

ICH Q7, la guía de buenas prácticas para principios activos, pide anotar los resultados reales de los parámetros críticos (apartado 6.52), cumplir los tiempos que fije la hoja (8.20) y documentar y explicar cualquier desviación (8.15).

### Cómo se reconoce la forma
Aquí solo la idea; las técnicas están en «Punto de fusión y DSC» (nivel 8), «Infrarrojo (IR) y Raman: la huella dactilar de la molécula» y «Otras técnicas: DRX, RMN, masas, ICP» (nivel 7).

- **Difracción de rayos X de polvo** (*X-ray powder diffraction*, XRPD). Los rayos X rebotan en las capas ordenadas del cristal y dan un dibujo de picos propio de cada forma, como una huella dactilar; un amorfo no da picos, solo una joroba ancha. Según la FDA, la difracción de polvo puede dar una prueba inequívoca de que dos formas son distintas.
- **Calorimetría diferencial de barrido** (*differential scanning calorimetry*, DSC). Cada forma funde a su temperatura, y un solvato muestra la salida del disolvente.
- **Infrarrojo del sólido.** La misma molécula colocada de otra manera cambia un poco sus uniones con las vecinas, y el espectro cambia algo.
- **Termogravimetría** (*thermogravimetric analysis*, TGA). Pesa la muestra mientras la calienta: un hidrato pierde de golpe el peso de su agua.

ICH Q6A cita estas técnicas, además de la microscopía, el Raman y la resonancia magnética del sólido.

### Solvatos e hidratos: disolvente dentro del cristal
A veces el producto cristaliza con moléculas de disolvente **dentro** de la red, como piezas de otro color encajadas en el muro. Es un **solvato** (*solvate*). Si el disolvente es agua, es un **hidrato** (*hydrate*). Según la FDA, la cantidad puede ser **estequiométrica** (proporción fija, por ejemplo una molécula de agua por molécula de producto) o no estequiométrica. Si no hay agua, la forma es **anhidra** (*anhydrous*).

La diferencia con el disolvente que moja la torta:

| Disolvente que moja la torta | Disolvente del solvato |
|---|---|
| Está por fuera de los cristales, entre ellos | Es parte de la red cristalina |
| Se va al secar, a la temperatura y el vacío de la hoja | Solo sale si se rompe la red, normalmente a una temperatura concreta |
| Quitarlo no cambia el producto | Quitarlo da otra forma sólida (**desolvatación**, *desolvation*), y a veces un amorfo |

Por eso un hidrato se puede estropear al **secar demasiado**: si el secado se pasa de temperatura o de tiempo, pierde el agua de su red y deja de ser la forma especificada. Y al revés: si el producto debe ser la forma sin disolvente y cristaliza como solvato, un secado con **poca temperatura** o poco tiempo no rompe la red, y el disolvente se queda dentro aunque la superficie esté seca. En los dos casos manda la hoja, no más horas ni más grados «por si acaso».

ICH Q6A, en el apartado 3.3.1 e), pide controlar el contenido de agua cuando el principio activo es un **hidrato estequiométrico**, y prefiere un método específico para el agua, como el Karl Fischer, frente a la pérdida por secado. Las dos cuentas siguientes dicen qué valor esperar.

**Cuenta 1: el agua de un monohidrato.** Masas atómicas estándar redondeadas: H 1,008 y O 15,999. Agua: 2 × 1,008 + 15,999 = 18,015 g/mol. El producto ficticio **PX-40** tiene una masa molar de 382,4 g/mol sin agua (valor de ejemplo). Su monohidrato lleva una molécula de agua por molécula de producto: 382,4 + 18,015 = 400,415 g/mol. Agua en el cristal: 18,015 / 400,415 × 100 = **4,50 %**. Si el Karl Fischer de un lote da un 2,9 %, ha perdido parte del agua de su red: o se secó de más o no es todo monohidrato.

**Cuenta 2: lo que pierde al deshidratarlo.** Si 250 kg de PX-40 monohidrato se convirtieran en la forma anhidra, perderían 250 × 0,0450 = **11,25 kg** de agua y quedarían 238,75 kg. Esa misma pérdida, en tanto por ciento, es el escalón que vería la termogravimetría.

### Sales: por qué y cómo
Muchos principios activos son **bases** (casi siempre aminas) o **ácidos**. En «Ácidos, bases y pH a fondo» viste que una amina puede estar como base libre o, si acepta un protón, como sal. Una **sal** (*salt*) se forma al juntar un ácido con una base:

> base + ácido = sal

Con una amina y ácido clorhídrico, la amina toma el protón (H⁺) del ácido y queda con carga positiva; el cloruro (Cl⁻), con carga negativa, es su **contraión** (*counterion*). Se atraen y cristalizan juntos. Con ácido clorhídrico la sal es un **clorhidrato** (*hydrochloride*); con hidróxido de sodio, un ácido da una **sal sódica** (*sodium salt*).

**Por qué se hace una sal:** para que se disuelva mejor, para que sea más estable o para que cristalice mejor y se purifique. La guía de la FDA sobre cocristales recuerda que para formar una sal la molécula necesita grupos que puedan ganar o perder un protón.

**Cómo se escribe.** «VX-30 clorhidrato», «clorhidrato de VX-30» o «VX-30·HCl» son lo mismo: una molécula de VX-30 por una de HCl (1:1). Si la molécula tiene dos aminas puede formar un **diclorhidrato** (·2HCl), que gasta el doble de ácido. Una sal también puede ser hidrato: «VX-30·HCl·H₂O».

### El factor entre la sal y la base libre
La sal pesa más que la base, que es la parte que actúa como medicamento. El **factor de conversión** (*conversion factor*) dice qué fracción de la sal es base:

> factor = masa molar de la base / masa molar de la sal

Datos para las tres cuentas: VX-30 base, 285,3 g/mol (valor de ejemplo). HCl: 1,008 + 35,45 = 36,46 g/mol. Clorhidrato 1:1: 285,3 + 36,46 = 321,76 g/mol. Factor: 285,3 / 321,76 = **0,8867**.

**Cuenta 3: base contenida en la sal.** 120,0 kg de VX-30·HCl puro contienen 120,0 × 0,8867 = **106,4 kg** de base. Los 13,6 kg restantes son el ácido.

**Cuenta 4: ácido para formar la sal de una carga.** Se cargan 150,0 kg de VX-30 base. Moles: 150 000 g / 285,3 g/mol = 525,76 mol. Mismos moles de HCl: 525,76 × 36,46 = 19 169 g, **19,17 kg** de HCl puro. Si se usa ácido clorhídrico al 35 % en peso (como la ficha ficticia CLORAC 35 de la app): 19,17 / 0,35 = **54,77 kg** de ácido. Si la hoja pide un exceso (por ejemplo 1,05 equivalentes), se multiplica por él. La cuenta de moles está en «Estequiometría a fondo: de la ecuación a los kilos que cargas».

**Cuenta 5: la riqueza expresada como base libre.** El certificado de un lote de VX-30·HCl da una riqueza del 99,2 % como clorhidrato. Como base libre: 99,2 × 0,8867 = **87,96 %**. Si la siguiente etapa pide 50,0 kg de VX-30 expresados como base, hay que cargar 50,0 / 0,8796 = 56,84 kg del producto. Mira siempre sobre qué va expresado el dato: sal o base, con agua o sin ella.

### Cocristales y amorfos, solo una mención
Un **cocristal** (*co-crystal*) es un cristal con dos o más moléculas distintas en la misma red, normalmente el principio activo y otra sustancia llamada **coformador** (*coformer*). Según la guía de la FDA de 2018, se diferencia de una sal en que sus componentes no se unen por cargas, y a efectos regulatorios se trata como un polimorfo del principio activo. Sirve para moléculas que no pueden formar sales. Las **formas amorfas** se fabrican a veces a propósito; sin orden, tienden a cristalizar con el calor o la humedad.

### Hábito y tamaño de partícula
La misma forma puede dar cristales muy distintos. El **hábito cristalino** (*crystal habit*) es la forma externa del cristal: **agujas**, **placas** o **prismas**. Depende del disolvente, la velocidad de cristalización y la agitación.

| Hábito | Filtración y lavado | Secado y polvo |
|---|---|---|
| Prismas compactos | Torta abierta: filtra y se lava bien | Fluye bien |
| Placas | Se apilan como hojas: la torta se cierra | Puede apelmazarse |
| Agujas finas | Se enredan como un fieltro: filtra despacio y retiene aguas madres | Se rompen al agitar; polvo voluminoso que fluye mal |

El manejo de polvos está en «Manejo de sólidos a fondo» y el ajuste del tamaño en «Molienda, micronización y tamizado». Sobre el tamaño, ICH Q6A (apartado 3.3.1 b) dice que en algunos principios activos para medicamentos sólidos o suspensiones puede afectar mucho a la disolución, la biodisponibilidad o la estabilidad, y que entonces hay que medirlo y fijar criterios de aceptación. Su **árbol de decisión 3** pregunta si el tamaño es crítico para la disolución, la solubilidad o la biodisponibilidad, para fabricar el medicamento, para su estabilidad, para la uniformidad de contenido o para su aspecto: con un sí a cualquiera, se fija un criterio. Si el medicamento es una disolución, no hace falta. El ensayo puede ser un control en proceso o de liberación (2.4). ICH Q7 pide que, cuando las propiedades físicas son críticas, las mezclas de lotes se validen con el tamaño de partícula y las densidades aparente y compactada (8.45).

### Lo que haces tú como operador
- **Respetar exactamente** temperaturas, tiempos, velocidades de enfriamiento y de adición, y la siembra: forma, lote, cantidad y temperatura, con segundo operador si la hoja lo pide.
- **No acelerar** un enfriamiento ni un secado, ni subir la temperatura para ganar tiempo.
- **Anotar cualquier cambio de aspecto**: color, cristales distintos (agujas donde siempre hay prismas), suspensión más espesa, torta que filtra peor o retiene más líquido. Son pistas de otra forma o de otro hábito.
- **Avisar**: una forma equivocada no se arregla sola. Repetir la cristalización del proceso es reprocesar (Q7, 14.20); recristalizar con otro disolvente es retrabajar, y exige investigar antes (14.30). Lo decide calidad, no el turno.

Los números de esta lección son de ejemplo para entender. En planta manda siempre el procedimiento vigente (SOP) y la hoja de producción de tu lote.
`,
  plant: `
Turno de noche en la planta ficticia. En el reactor **R-520** se cristaliza el clorhidrato del producto ficticio **VX-30** en su forma B. Todos los valores son de ejemplo.

La sal ya está formada y la disolución está a 50 °C. Antes de sembrar compruebas con tu compañero la etiqueta de la semilla: «VX-30·HCl, forma B», lote aprobado, 0,75 kg. Sembráis, anotáis hora y temperatura, y empieza la maduración de 2 horas.

A la media hora el responsable de mantenimiento avisa de que la unidad de frío tiene que parar a las seis para una reparación. Alguien propone empezar ya el enfriamiento a 20 °C/h «para que dé tiempo». Tú sabes que la hoja dice 10 °C/h como máximo y que la nota del paso 5 avisa de que deprisa puede salir la forma A. No cambias nada: llamas al jefe de turno, que decide con producción y calidad aplazar la reparación.

El enfriamiento sigue a su ritmo. La muestra del IPC confirma forma B por XRPD. En la centrífuga **C-530** la torta filtra como siempre y al lavar ves prismas brillantes.

Al pasar la torta al secadero **SD-540** observas que en un bidón hay grumos más claros que el resto. Lo anotas y lo comunicas. El secado va a 45 °C de producto como máximo: el sistema de control limita la camisa y tú vigilas la temperatura del producto y el vacío. Al final, el laboratorio confirma forma B, pérdida por secado conforme y tamaño de partícula dentro de especificación. Los grumos claros resultan ser producto apelmazado de la misma forma; tu anotación queda en la hoja.
`,
  batchRecord: `
En la hoja de producción (*batch record*) de una cristalización con forma controlada verás y anotarás:

- **Disolvente**: identidad, lote y cantidad; si la hoja lo pide, contenido de agua del disolvente.
- **Formación de la sal**: kg de base y de ácido, riqueza del ácido, equivalentes, tiempo y temperatura de adición.
- **Siembra**: forma, lote y cantidad de semilla, temperatura real de siembra, hora y verificación por un segundo operador.
- **Maduración**: hora de inicio y de fin, temperatura mantenida.
- **Enfriamiento**: temperatura inicial y final, duración real y velocidad; gráfico del sistema de control adjunto si se pide.
- **IPC**: forma por XRPD o aspecto al microscopio, con resultado y hora.
- **Separación y lavado**: tiempo de filtración, aspecto de la torta, temperatura del lavado.
- **Secado**: temperatura de producto y de camisa, presión absoluta, tiempo; LOD o Karl Fischer y su resultado. Si el producto es un hidrato, el límite de agua tiene mínimo y máximo.
- **Molienda**: equipo, criba, velocidad, temperatura del producto.
- **Observaciones**: color, hábito de los cristales, filtrabilidad, grumos; cualquier valor fuera de rango tal cual, con hora y aviso.
- **Resultados de liberación**: forma cristalina conforme, tamaño de partícula, agua, riqueza (indicando si es como sal o como base).
`,
  terms: [
    { es: "Sólido cristalino", en: "Crystalline solid", def: "Sólido con las moléculas colocadas según un patrón que se repite en las tres direcciones." },
    { es: "Sólido amorfo", en: "Amorphous solid", def: "Sólido sin orden: las moléculas no forman una red cristalina reconocible." },
    { es: "Red cristalina", en: "Crystal lattice", def: "Patrón ordenado y repetido con que se colocan las moléculas o iones en un cristal." },
    { es: "Polimorfo", en: "Polymorph", def: "Cada una de las formas cristalinas distintas de una misma sustancia; misma molécula, distinta red." },
    { es: "Forma metaestable", en: "Metastable form", def: "Forma que se mantiene pero que, con un empujón (tiempo, calor, disolvente, humedad), puede pasar a la forma estable." },
    { es: "Transformación en suspensión", en: "Solvent-mediated transformation", def: "Paso de una forma metaestable a la estable dentro del líquido: la primera se disuelve y la segunda crece." },
    { es: "Solvato", en: "Solvate", def: "Cristal que lleva moléculas de disolvente dentro de su red." },
    { es: "Hidrato", en: "Hydrate", def: "Solvato en el que el disolvente es agua; por ejemplo, un monohidrato lleva una molécula de agua por molécula de producto." },
    { es: "Desolvatación", en: "Desolvation", def: "Salida del disolvente de la red de un solvato; da otra forma sólida o un amorfo." },
    { es: "Contraión", en: "Counterion", def: "Ion de carga contraria que acompaña al principio activo en una sal, como el cloruro en un clorhidrato." },
    { es: "Base libre", en: "Free base", def: "La amina sin el ácido: la parte de la sal que actúa como medicamento." },
    { es: "Factor de conversión sal-base", en: "Salt-to-base conversion factor", def: "Masa molar de la base dividida entre la de la sal; fracción de la sal que es base." },
    { es: "Cocristal", en: "Co-crystal", def: "Cristal con el principio activo y otra molécula en la misma red, unidas sin cargas." },
    { es: "Hábito cristalino", en: "Crystal habit", def: "Forma externa de los cristales (agujas, placas, prismas); afecta a la filtración, el secado y la fluidez." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Un producto ficticio tiene una masa molar de 245,0 g/mol sin agua y forma un monohidrato. Con H 1,008 y O 15,999, ¿qué porcentaje de agua tiene el monohidrato?",
      answer: 6.85,
      tolerance: 0.01,
      unit: "%",
      explain: "Agua: 2 × 1,008 + 15,999 = 18,015 g/mol. Monohidrato: 245,0 + 18,015 = 263,015 g/mol. Agua: 18,015 / 263,015 × 100 = 6,85 %.",
    },
    {
      kind: "number",
      q: "Con el mismo monohidrato (6,85 % de agua en su red), ¿cuántos kg de agua perderían 180 kg si se deshidrataran por completo en el secadero?",
      answer: 12.33,
      tolerance: 0.01,
      unit: "kg",
      explain: "180 × 18,015 / 263,015 = 12,33 kg. El producto dejaría de ser el monohidrato y pasaría a otra forma.",
    },
    {
      kind: "number",
      q: "Una base ficticia tiene una masa molar de 350,0 g/mol y forma un clorhidrato 1:1 (HCl = 36,46 g/mol). ¿Cuántos kg de base hay en 80,0 kg del clorhidrato puro?",
      answer: 72.45,
      tolerance: 0.01,
      unit: "kg",
      explain: "Sal: 350,0 + 36,46 = 386,46 g/mol. Factor: 350,0 / 386,46 = 0,9057. Base: 80,0 × 0,9057 = 72,45 kg.",
    },
    {
      kind: "number",
      q: "Vas a formar el clorhidrato 1:1 de 200,0 kg de esa misma base (350,0 g/mol). ¿Cuántos kg de HCl puro (36,46 g/mol) hacen falta, sin exceso?",
      answer: 20.83,
      tolerance: 0.01,
      unit: "kg",
      explain: "Moles de base: 200000 / 350,0 = 571,43 mol. HCl: 571,43 × 36,46 = 20834 g, es decir 20,83 kg de HCl puro.",
    },
    {
      kind: "number",
      q: "El certificado del clorhidrato de esa base da una riqueza del 98,5 % como clorhidrato. Con un factor sal-base de 0,9057, ¿cuál es la riqueza expresada como base libre?",
      answer: 89.21,
      tolerance: 0.01,
      unit: "%",
      explain: "98,5 × 0,9057 = 89,21 %. Es el mismo lote: solo cambia sobre qué se expresa el dato.",
    },
    {
      kind: "choice",
      q: "La forma A y la forma B de un producto dan el mismo resultado en el HPLC. ¿Qué significa?",
      options: [
        "Que A y B son la misma forma cristalina y basta con un solo ensayo",
        "Que una de las dos está contaminada y hay que repetir el análisis",
        "Que es la misma molécula colocada de otra manera; la forma se ve por XRPD",
        "Que el HPLC está averiado, porque dos polimorfos dan picos distintos",
      ],
      answer: 2,
      explain: "Los polimorfos tienen la misma molécula y solo cambia el orden en el sólido. Un ensayo químico no los distingue; la difracción de rayos X de polvo sí.",
    },
    {
      kind: "choice",
      q: "La hoja dice enfriar a 10 °C/h como máximo tras sembrar con forma B. Va a parar el frío y te piden enfriar a 20 °C/h para terminar antes. ¿Qué haces?",
      options: [
        "Sigo la hoja y aviso al jefe de turno: enfriar más rápido puede dar otra forma",
        "Enfrío a 20 °C/h y lo anoto después en observaciones, porque es temporal",
        "Enfrío a 20 °C/h y añado más semilla para compensar el enfriamiento",
        "Paro el agitador para que no se formen cristales mientras no hay frío",
      ],
      answer: 0,
      explain: "La velocidad de enfriamiento es un parámetro crítico de la forma. Cambiarla no lo decide el turno: se avisa y decide quien corresponda, con calidad.",
    },
    {
      kind: "choice",
      q: "El producto debe ser un monohidrato con agua entre 4,2 y 4,8 % por Karl Fischer. El lote da 2,9 %. ¿Qué es lo más probable?",
      options: [
        "Que el lote ha quedado húmedo y hay que secarlo más horas",
        "Que se ha secado de más y ha perdido parte del agua de su red",
        "Que el Karl Fischer mide también el disolvente y da de menos",
        "Que el resultado es bueno, porque cuanta menos agua mejor",
      ],
      answer: 1,
      explain: "En un hidrato el agua es parte de la red: un valor bajo indica que el secado ha roto parte del hidrato. Secar más lo empeoraría; se comunica y se investiga.",
    },
    {
      kind: "choice",
      q: "Al centrifugar ves agujas finas que forman un fieltro y filtran muy despacio, cuando siempre salen prismas. ¿Qué haces?",
      options: [
        "Nada: el hábito no importa porque la molécula es la misma",
        "Subo la velocidad de la centrífuga al máximo para acabar a tiempo",
        "Añado más disolvente de lavado para arrastrar las agujas finas",
        "Lo anoto con hora y aviso: puede ser otro hábito u otra forma",
      ],
      answer: 3,
      explain: "Un cambio de aspecto de los cristales es una pista de que algo ha cambiado en la cristalización. Se anota tal cual y se comunica para que se evalúe.",
    },
    {
      kind: "choice",
      q: "Según el árbol de decisión 3 de ICH Q6A, ¿cuándo se fija un criterio de aceptación para el tamaño de partícula del principio activo?",
      options: [
        "Siempre, sea cual sea el principio activo y el medicamento",
        "Solo cuando el medicamento final es una disolución inyectable",
        "Si es crítico para disolución, fabricación, estabilidad o aspecto",
        "Nunca: el tamaño solo lo controla quien fabrica el comprimido",
      ],
      answer: 2,
      explain: "El árbol pregunta si el tamaño es crítico para cinco cosas; si la respuesta es sí a cualquiera, se fija un criterio. En medicamentos en disolución no hace falta.",
    },
  ],
};
