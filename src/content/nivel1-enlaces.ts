import type { Lesson } from "./types";

export const enlacesAFondo: Lesson = {
  slug: "enlaces-a-fondo",
  level: 1,
  order: 6,
  title: "Enlaces y fuerzas entre moléculas a fondo: por qué unas cosas se disuelven y otras no",
  titleEn: "Chemical bonds and intermolecular forces in depth: why some things dissolve and others do not",
  minutes: 38,
  summary:
    "Por qué se unen los átomos, cómo son los enlaces iónico, covalente y metálico, qué es la electronegatividad, por qué una molécula es polar o apolar, qué fuerzas mantienen juntas a las moléculas y cómo todo eso explica lo que ves en planta: qué hierve antes, qué capa queda arriba, qué disolvente limpia un residuo y por qué un antidisolvente hace cristalizar.",
  body: `
En la lección «Enlaces, moléculas y polaridad» viste la regla de oro: lo semejante disuelve a lo semejante. Aquí vas a entender por qué funciona, empezando dentro de la molécula y acabando entre moléculas.

### Por qué se unen los átomos
Los electrones de la capa más externa del átomo, los **electrones de valencia** (*valence electrons*), son los que forman los enlaces.

Piensa en una pelota en lo alto de una cuesta: rueda sola hasta el fondo, donde queda estable. Los átomos se unen por lo mismo: unidos quedan en una situación de menos energía, más estable que por separado. Esa unión es el **enlace químico** (*chemical bond*).

Una regla práctica: muchos átomos tienden a rodearse de **ocho electrones** en su capa externa, como los gases nobles, que casi no reaccionan. Es la **regla del octeto** (*octet rule*). Al hidrógeno le bastan dos. Tiene excepciones, pero sirve para casi todo lo que verás en planta. Hay dos caminos para llegar ahí:

- **Ceder o captar electrones**: un átomo da electrones y otro los recibe. Es el enlace iónico.
- **Compartir electrones**: dos átomos ponen electrones en común. Es el enlace covalente.

### Enlace iónico: ceder electrones
El sodio (Na) tiene un electrón de valencia y lo suelta con facilidad. Al cloro (Cl), con siete, le falta uno para llegar a ocho. El sodio se lo cede y quedan dos **iones** (*ions*), átomos con carga eléctrica: el sodio, Na⁺, y el cloruro, Cl⁻.

Las cargas opuestas se atraen, como los polos de un imán: es el **enlace iónico** (*ionic bond*). Y cada Na⁺ atrae a todos los Cl⁻ que tiene alrededor, y al revés. Así se forma una **red cristalina** (*crystal lattice*): millones de iones en un orden que se repite, como cajas bien apiladas en un almacén. En la sal no hay «moléculas» de NaCl: la fórmula solo dice que hay un sodio por cada cloro.

De esa red salen las propiedades de las sales:

| Propiedad | Por qué |
|---|---|
| Son sólidas a temperatura ambiente | Todos los iones se sujetan unos a otros en todas direcciones |
| Funden a temperatura muy alta | Hay que soltar una red entera de atracciones fuertes: la sal no se funde en una sartén |
| Sólidas no conducen la electricidad; disueltas, sí | En el cristal los iones están fijos; en el agua se mueven, y una carga que se mueve es corriente |

**En planta:**

- **Cloruro de sodio en las aguas de lavado.** Cuando se neutraliza ácido clorhídrico con hidróxido de sodio queda cloruro de sodio, y al lavar con agua se va a la fase acuosa. La salmuera ayuda además a romper emulsiones, como viste en «Extracción líquido-líquido y separación de fases».
- **Sales del principio activo.** Un **clorhidrato** (*hydrochloride*) es la sal de una base orgánica con ácido clorhídrico; se fabrica para mejorar la solubilidad, la estabilidad o la cristalización. Lo tienes en «Polimorfismo, sales y solvatos» (nivel 3). La idea aquí: una parte de la molécula pasa a ser un ion, y eso cambia dónde se disuelve.

### Enlace covalente: compartir electrones
Dos átomos que atraen los electrones con fuerza parecida no se los quitan: los comparten. Cada uno pone un electrón y forman un **par compartido** que queda entre los dos núcleos y los une, como una cuerda que sujetan dos personas a la vez. Es el **enlace covalente** (*covalent bond*). Pueden compartir uno, dos o tres pares:

| Enlace | Pares compartidos | Electrones compartidos | Se dibuja | Ejemplo |
|---|---|---|---|---|
| Simple (*single bond*) | 1 | 2 | C–H | Metano, CH₄ |
| Doble (*double bond*) | 2 | 4 | C=O | Dióxido de carbono, CO₂; acetona |
| Triple (*triple bond*) | 3 | 6 | N≡N | Nitrógeno del aire, N₂ |

Así se forma una **molécula** (*molecule*): un grupo definido de átomos con su fórmula fija. A diferencia de la sal, aquí sí hay piezas sueltas: el agua líquida es un montón de moléculas de H₂O.

**¿Por qué casi todos los principios activos y disolventes son moleculares?** Porque están hechos de carbono, hidrógeno, oxígeno y nitrógeno, átomos que atraen los electrones con fuerzas no tan distintas como para cederlos: comparten. El carbono, además, forma cuatro enlaces y se encadena consigo mismo (lo verás en «El carbono y las fórmulas orgánicas», nivel 3).

### Los diagramas de puntos de Lewis
El **diagrama de Lewis** (*Lewis structure*) dibuja los electrones de valencia como puntos alrededor del símbolo; cada par compartido puede dibujarse como una raya. Aquí, descrito con palabras:

| Molécula | Electrones de valencia | Cómo es el dibujo |
|---|---|---|
| Agua, H₂O | Oxígeno 6 + hidrógenos 1 + 1 = 8 | Oxígeno en el centro con una raya a cada hidrógeno (2 pares compartidos) y **2 pares solitarios** (*lone pairs*) que no forman enlace. El oxígeno cuenta 8; cada hidrógeno, 2 |
| Metano, CH₄ | Carbono 4 + cuatro hidrógenos = 8 | Carbono en el centro con cuatro rayas, una a cada hidrógeno (4 pares compartidos). Sin pares solitarios |
| Dióxido de carbono, CO₂ | Carbono 4 + oxígenos 6 + 6 = 16 | O=C=O: un enlace doble a cada lado (4 pares, 8 electrones) y 2 pares solitarios en cada oxígeno (8 electrones más). Cada átomo cuenta 8 |

La cuenta siempre cuadra: en el CO₂, 8 en enlaces + 8 solitarios = 16.

### Enlace metálico, en un párrafo
En un metal, cada átomo suelta sus electrones de valencia a un «mar» común que recorre todo el trozo, y los átomos, ya positivos, quedan sumergidos en él. Es el **enlace metálico** (*metallic bond*). Como esos electrones se mueven libres, el metal conduce bien la electricidad y el calor: por eso la pinza de tierra de un reactor de acero descarga la electricidad estática por el metal, y por eso la camisa pasa el calor al producto. Y los metales se doblan sin romperse, porque los átomos se deslizan dentro del mar sin perder la unión.

### Electronegatividad: quién tira más de la cuerda
Vuelve a la cuerda: si una de las dos personas tira más, la cuerda se desplaza hacia ella. La **electronegatividad** (*electronegativity*) es la fuerza con la que un átomo tira de los electrones de un enlace. Para planta basta con este orden:

- El **flúor** es el que más tira de todos. Detrás vienen el **oxígeno**, y luego el **cloro** y el **nitrógeno**.
- El **carbono** y el **hidrógeno** tiran casi igual, y mucho menos que el oxígeno.
- Los metales como el **sodio** tiran muy poco.

Según la diferencia entre los dos átomos:

| Diferencia de electronegatividad | Qué pasa con los electrones | Tipo de enlace | Ejemplo |
|---|---|---|---|
| Casi ninguna | Se reparten por igual | Covalente apolar | C–H, H–H |
| Moderada | Se acercan más a uno de los dos | Covalente **polar** (*polar bond*) | O–H, C=O, C–Cl |
| Muy grande | Uno se los queda | Iónico | Na⁺ Cl⁻ |

En un enlace polar, el átomo que tira más queda con una pequeña carga parcial negativa, δ⁻ (delta menos), y el otro con una positiva, δ⁺. No son cargas enteras como las de un ion. Esa pareja de cargas parciales es un **dipolo** (*dipole*).

### Molécula polar o apolar: importa la forma
Una molécula puede tener enlaces polares y ser apolar: depende de su forma. Si dos personas tiran de una argolla con la misma fuerza en sentidos opuestos, la argolla no se mueve. Si tiran formando una V, la argolla se va hacia ese lado.

- **Dióxido de carbono.** Cada enlace C=O es polar, pero la molécula es recta, O=C=O: los dos tirones son iguales y opuestos y se anulan. Es una **molécula apolar** (*non-polar molecule*) con enlaces polares.
- **Agua.** Los dos enlaces O–H son polares y la molécula está doblada en V, porque los pares solitarios del oxígeno empujan a los hidrógenos hacia un lado. Los tirones no se anulan: el lado del oxígeno queda algo negativo y el de los hidrógenos, algo positivo. Es una **molécula polar** (*polar molecule*), y muy polar.
- **Metano.** Cuatro enlaces C–H casi apolares, repartidos de forma simétrica. Apolar. Los hidrocarburos, solo de carbono e hidrógeno, como el heptano o el tolueno, son apolares por la misma razón.

### Enlace y fuerza intermolecular: dos cosas distintas
- El **enlace** une los átomos **dentro** de una molécula. Es fuerte. Para romperlo hay que hacer química: una reacción.
- Las **fuerzas intermoleculares** (*intermolecular forces*) atraen unas moléculas **a otras**. Son mucho más débiles que un enlace. Para vencerlas basta con calentar, hervir o disolver.

Piensa en cada molécula como una pieza montada con imanes potentes: los enlaces. Las piezas se pegan entre sí con tiras de velcro: las fuerzas intermoleculares. Cuando el agua hierve, despegas el velcro, pero cada molécula sigue entera: el vapor sigue siendo H₂O.

Entre moléculas sin carga hay tres tipos de fuerzas. De la más débil a la más fuerte, comparando moléculas de tamaño parecido:

| Fuerza | En inglés | De dónde sale | Quién la tiene |
|---|---|---|---|
| **Fuerzas de dispersión** | *London dispersion forces* | Los electrones se mueven y crean desequilibrios pasajeros que atraen a la vecina un instante | Todas las moléculas; las únicas en las apolares. Crecen con el tamaño |
| **Dipolo-dipolo** | *Dipole-dipole* | El lado δ⁺ de una molécula polar atrae al lado δ⁻ de la vecina | Moléculas polares: acetona, diclorometano, acetato de etilo |
| **Puentes de hidrógeno** | *Hydrogen bonds* | Un hidrógeno unido a oxígeno, nitrógeno o flúor queda muy δ⁺ y se pega a un par solitario vecino | Agua, metanol, etanol, isopropanol; aminas y O–H de muchos principios activos |

Dos matices. A pesar del nombre, el puente de hidrógeno **no es un enlace** dentro de la molécula: es mucho más débil que un enlace covalente. Y la dispersión, débil en moléculas pequeñas, suma muchos puntos de contacto en una molécula larga y puede pesar más que un dipolo; por eso el orden vale para tamaños parecidos.

Cuando hay iones aparece una cuarta, la **ion-dipolo** (*ion-dipole*). Al echar sal en agua, las moléculas de agua rodean cada ion: el lado del oxígeno (δ⁻) hacia el Na⁺ y el de los hidrógenos (δ⁺) hacia el Cl⁻. Muchas atracciones pequeñas juntas sacan los iones de la red uno a uno. El heptano no tiene dipolos para hacerlo: la sal no se disuelve en él.

### Consecuencia 1: punto de ebullición y volatilidad
Hervir es despegar del todo las moléculas para que pasen a gas. Cuanto más fuerte el velcro, más alto el **punto de ebullición** (*boiling point*). Un líquido que se evapora con facilidad es **volátil** (*volatile*).

| Sustancia | Masa de una molécula (g/mol, redondeada) | Fuerzas principales | Hierve a (°C, a presión atmosférica) |
|---|---|---|---|
| Nitrógeno, N₂ | 28 | Solo dispersión, pequeña | −196 |
| Diclorometano | 85 | Dispersión y dipolo-dipolo | 40 |
| Acetona | 58 | Dispersión y dipolo-dipolo | 56 |
| Metanol | 32 | Puentes de hidrógeno | 65 |
| Heptano | 100 | Solo dispersión, pero molécula larga | 98 |
| Agua | 18 | Muchos puentes de hidrógeno | 100 |
| Tolueno | 92 | Dispersión, molécula grande | 111 |

Fíjate en tres cosas:

- **El agua es la más ligera de la tabla y casi la que hierve más alto.** El nitrógeno pesa más y hierve unos 300 grados más abajo. Cada molécula de agua forma puentes de hidrógeno por sus dos hidrógenos y por los dos pares solitarios de su oxígeno, y se engancha en red con sus vecinas.
- **Una molécula de metanol pesa casi el doble que una de agua, y aun así el metanol hierve antes.** Solo tiene un O–H por molécula. Su ficha de seguridad de la app da una presión de vapor de 12,9 kPa a 20 °C, y el agua tiene 2,34 kPa a esa temperatura: unas 5,5 veces más vapor.
- **El diclorometano y la acetona son muy volátiles.** Son polares, pero sin hidrógenos unidos a oxígeno no forman puentes de hidrógeno entre ellos. Se evaporan deprisa de un charco, de una torta húmeda o por una junta mal cerrada: olor, exposición y, en la acetona, vapores inflamables.
- **El heptano y el tolueno no tienen dipolos y hierven alto**: son moléculas grandes y la dispersión, sumada a lo largo de toda la molécula, pesa.

Qué pasa con el punto de ebullición al bajar la presión lo tienes en «Bombas a fondo» y «El secado a fondo».

### Consecuencia 2: viscosidad
La **viscosidad** (*viscosity*) es lo que le cuesta a un líquido fluir: la miel es viscosa; el agua, poco. Si las moléculas se enganchan mucho, al moverse tienen que despegarse todo el rato y el líquido fluye peor. La sosa al 50 % de las fichas de la app se describe como viscosa. En planta lo notas en que baja más despacio por una línea, la bomba trabaja más y el reactor tarda más en vaciarse. Casi todos los líquidos se vuelven más viscosos al enfriarse.

### Consecuencia 3: tensión superficial, solo la idea
En la superficie de un líquido, las moléculas no tienen vecinas por arriba y las de abajo tiran de ellas hacia dentro: el líquido se comporta como si tuviera una piel tensa. Es la **tensión superficial** (*surface tension*), y por eso el agua forma gotas redondas. Sustancias como los jabones debilitan esa piel y el líquido atrapa aire y hace **espuma** (*foam*). En un reactor, la espuma puede subir hacia el condensador al agitar o destilar: si la ves en la mirilla, sigue lo que diga la hoja.

### «Lo semejante disuelve a lo semejante», explicado
Para disolverse, las moléculas de una sustancia tienen que separarse entre sí y meterse entre las del disolvente. Solo ocurre si las nuevas atracciones son parecidas o mejores que las que se rompen.

- **Sales en agua.** El agua rompe la red con atracciones ion-dipolo. En heptano o tolueno no hay nada que tire de los iones: la sal no se disuelve.
- **Orgánicos apolares en heptano o tolueno.** Se atraen por dispersión y el disolvente ofrece lo mismo: se mezclan. En agua no: el agua no suelta sus puentes de hidrógeno para hacer sitio a una molécula que no le ofrece nada a cambio.
- **Metanol y agua.** Los dos forman puentes de hidrógeno, también el uno con el otro: se mezclan en cualquier proporción, son **miscibles** (*miscible*). Igual el etanol, y la acetona, que acepta puentes de hidrógeno del agua en su oxígeno.
- **Agua y tolueno.** Son **inmiscibles** (*immiscible*): forman dos **fases** (*phases*) y la menos densa queda arriba. El tolueno (0,87 kg/L) flota sobre el agua (1,00 kg/L); el diclorometano (1,33 kg/L) se va al fondo. Es la base de «Extracción líquido-líquido y separación de fases».

**Moléculas con una parte polar y otra apolar.** Muchas tienen una «cabeza» polar, como un O–H o una amina, y una «cola» apolar de carbonos e hidrógenos. Cuanto más larga la cola, más se parecen a un aceite y menos se disuelven en agua: el metanol y el etanol se mezclan con ella; un alcohol de cadena larga, no. Los principios activos suelen ser así, anillos de carbono con grupos polares pegados, y por eso muchos se disuelven bien en un disolvente intermedio y mal en los extremos. Al convertir una amina en clorhidrato, la cabeza pasa a ser un ion y la molécula prefiere el agua: es el truco del lavado ácido.

**Disolventes de planta, de más polar a menos polar.** Ordenación cualitativa por grupos; dentro de un grupo no se ordenan entre sí, salvo los alcoholes. La miscibilidad sale de «Disolventes orgánicos y disolventes residuales».

| Grupo | Disolventes | Fuerzas que ofrecen | ¿Se mezcla con agua? |
|---|---|---|---|
| Muy polar | Agua | Muchos puentes de hidrógeno | — |
| Polar, con O–H | Metanol, etanol, isopropanol (en este orden: la cola crece y la polaridad baja) | Puentes de hidrógeno y algo de dispersión | Sí |
| Polar, sin O–H | Acetona | Dipolo-dipolo; acepta puentes de hidrógeno | Sí |
| Polaridad intermedia | Tetrahidrofurano (THF), acetato de etilo, diclorometano | Dipolo-dipolo y dispersión | THF sí; acetato de etilo poco; diclorometano no |
| Poco polar | Tolueno | Sobre todo dispersión | No |
| Apolar | Heptano | Solo dispersión | No |

### El antidisolvente en una cristalización
En «Cristalización» (nivel 12) viste que se puede cristalizar añadiendo un **antidisolvente** (*antisolvent*), un líquido en el que el producto no se disuelve. Ahora ves por qué funciona.

Un producto con parte polar está disuelto en isopropanol, que lo sujeta con puentes de hidrógeno. Añades heptano poco a poco. El heptano solo ofrece dispersión y no puede sujetar la parte polar. Cada molécula de producto tiene cada vez menos disolvente que la sujete y le compensa más pegarse a otras moléculas de producto. Se juntan, se ordenan y forman cristales. Con un producto poco polar en un orgánico pasa lo mismo al añadir agua: el agua prefiere engancharse consigo misma. La velocidad, la temperatura y la siembra deciden el tamaño y la forma: eso es cosa de «Cristalización».

### En el secado: disolvente atrapado y solvatos
El disolvente que moja la superficie de los cristales se va con calor y vacío, como explica «El secado a fondo». Hay dos casos más difíciles:

- **Disolvente atrapado dentro del cristal.** Un cristal que creció deprisa puede encerrar gotitas de aguas madre, rodeadas de sólido, que no llegan a la superficie para evaporarse.
- **Solvatos e hidratos.** Las moléculas de disolvente o de agua forman parte de la red cristalina, sujetas al producto por fuerzas intermoleculares, a menudo puentes de hidrógeno. Es un **solvato** (*solvate*) o un **hidrato** (*hydrate*). Sacarlas deshace esa red y el producto puede pasar a ser otra forma sólida (lo tienes en «Polimorfismo, sales y solvatos»).

Por eso un disolvente que no baja en el análisis no siempre se arregla con más horas de secado. Se avisa y se sigue el procedimiento.

### En la limpieza: elegir el disolvente que disuelve el residuo
La misma regla decide qué limpia qué. Un residuo de sales se va con agua. Un residuo orgánico apolar, como una grasa o un intermedio pegajoso, no se va con agua por mucha que eches: necesita un disolvente orgánico. Un producto suele limpiarse bien con el disolvente en el que se disolvía en el proceso, y por eso muchas limpiezas empiezan con él. El resto está en «Limpieza de equipos y validación de limpieza». Cambiar el disolvente por otro «que limpia igual» no lo decides tú: la limpieza está validada con unos disolventes concretos.

En planta manda siempre el procedimiento vigente (SOP): qué disolvente se usa, en qué orden y cuánto.
`,
  plant: `
Turno de tarde. En el reactor R-214 está terminando la reacción del intermedio ficticio TQ-38, disuelto en tolueno. La hoja pide lavar con 400 L de agua (valor de ejemplo), agitar 20 minutos y decantar. Al parar el agitador, ves en la mirilla dos capas: la de arriba es el tolueno con el producto; la de abajo, el agua con el cloruro de sodio que formó la reacción. Bajas la fase acuosa por la válvula de fondo mirando la interfase y la mandas al recipiente que indica la hoja, etiquetada, sin tirarla hasta que el laboratorio confirme que no lleva producto.

Después se destila el tolueno a vacío, se cambia a isopropanol y la hoja pide añadir heptano en 2 horas a 40 °C (valores de ejemplo). Entiendes lo que pasa: el isopropanol sujetaba al producto por su parte polar; el heptano no puede, y el producto empieza a cristalizar. A la media hora ves la suspensión volverse turbia. Anotas la hora.

La suspensión pasa a la centrífuga C-305, se lava la torta con heptano frío y va al secadero S-402. El análisis en proceso de disolventes da isopropanol alto tras las horas previstas. No alargas el secado por tu cuenta: avisas. Calidad sospecha isopropanol atrapado en los cristales y decide qué hacer.

Para limpiar R-214 la hoja pide primero isopropanol, que disuelve los restos del producto, y después agua para las sales. Lo anotas paso a paso.
`,
  batchRecord: `
En la hoja de producción (*batch record*) estas ideas aparecen en instrucciones concretas, y tú anotas lo que pasa de verdad:

- **Lavados y separaciones**: volumen de agua o salmuera añadido, tiempo de agitación y de decantación, qué fase se conserva (arriba o abajo) y a qué recipiente va cada una, con su etiqueta.
- **Aspecto de la interfase**: nítida, con emulsión o con capa intermedia, y el tiempo que tardó en separarse.
- **Cambio de disolvente**: volumen destilado, disolvente nuevo cargado (código y lote) y temperatura.
- **Adición de antidisolvente**: código y lote, cantidad, hora de inicio y de fin, temperatura, y hora a la que aparece turbidez o cristales.
- **Lavado de la torta**: disolvente, cantidad y temperatura.
- **Secado**: resultados en proceso de disolventes residuales o pérdida por desecación, con su hora; si no bajan, el aviso y quién lo recibió.
- **Limpieza**: disolventes usados en cada paso, en el orden que marca el procedimiento, con volúmenes y horas.
- **Incidencias**: espuma, emulsión que no rompe, olor fuerte de disolvente en la sala.
`,
  terms: [
    { es: "Electrones de valencia", en: "Valence electrons", def: "Electrones de la capa más externa del átomo; son los que forman los enlaces." },
    { es: "Regla del octeto", en: "Octet rule", def: "Tendencia de muchos átomos a rodearse de ocho electrones en su capa externa al formar enlaces." },
    { es: "Ion", en: "Ion", def: "Átomo o grupo de átomos con carga eléctrica por haber ganado o perdido electrones." },
    { es: "Red cristalina", en: "Crystal lattice", def: "Ordenación repetida de iones, átomos o moléculas en un sólido cristalino." },
    { es: "Enlace doble", en: "Double bond", def: "Enlace covalente en el que dos átomos comparten dos pares de electrones, es decir, cuatro electrones." },
    { es: "Par solitario", en: "Lone pair", def: "Par de electrones de valencia que no forma parte de ningún enlace." },
    { es: "Diagrama de Lewis", en: "Lewis structure", def: "Dibujo de una molécula con sus electrones de valencia como puntos o rayas." },
    { es: "Electronegatividad", en: "Electronegativity", def: "Fuerza con la que un átomo atrae los electrones de un enlace." },
    { es: "Dipolo", en: "Dipole", def: "Pareja de cargas parciales, positiva y negativa, separadas en un enlace o una molécula." },
    { es: "Fuerzas intermoleculares", en: "Intermolecular forces", def: "Atracciones entre moléculas distintas; mucho más débiles que los enlaces dentro de la molécula." },
    { es: "Fuerzas de dispersión", en: "London dispersion forces", def: "Atracción débil y pasajera entre moléculas por desequilibrios momentáneos de sus electrones; la tienen todas." },
    { es: "Puente de hidrógeno", en: "Hydrogen bond", def: "Atracción entre un hidrógeno unido a oxígeno, nitrógeno o flúor y un par solitario de otra molécula." },
    { es: "Inmiscible", en: "Immiscible", def: "Que no se mezcla con otro líquido y forma dos fases." },
    { es: "Volátil", en: "Volatile", def: "Que se evapora con facilidad a temperatura ambiente." },
  ],
  quiz: [
    {
      kind: "number",
      q: "En un enlace doble C=O se comparten dos pares de electrones. El CO₂ (O=C=O) tiene dos enlaces dobles. ¿Cuántos electrones comparten en total sus dos enlaces?",
      answer: 8,
      tolerance: 0.001,
      unit: "electrones",
      explain: "Cada enlace doble son 2 pares, es decir, 4 electrones; dos enlaces dobles: 2 × 4 = 8 electrones.",
    },
    {
      kind: "number",
      q: "El CO₂ tiene 16 electrones de valencia (4 del carbono y 6 de cada oxígeno). Si 8 están en los enlaces, ¿cuántos pares solitarios quedan en la molécula?",
      answer: 4,
      tolerance: 0.001,
      unit: "pares",
      explain: "Quedan 16 − 8 = 8 electrones sin enlazar, que forman 8 / 2 = 4 pares solitarios, dos en cada oxígeno.",
    },
    {
      kind: "choice",
      q: "Al vaciar el reactor queda en las paredes una costra de cloruro de sodio. ¿Con qué se disuelve mejor?",
      options: [
        "Con agua, que rodea los iones",
        "Con heptano, que es muy volátil",
        "Con tolueno caliente a reflujo",
        "Con nitrógeno seco a presión",
      ],
      answer: 0,
      explain: "La sal es una red de iones; el agua, polar, los saca uno a uno con atracciones ion-dipolo. El heptano y el tolueno no tienen dipolos con los que sujetarlos.",
    },
    {
      kind: "choice",
      q: "Una mezcla de tolueno (0,87 kg/L) y agua (1,00 kg/L) reposa en el reactor. ¿Qué ves en la mirilla?",
      options: [
        "Una sola fase turbia y uniforme",
        "Dos fases, con el agua arriba",
        "Dos fases, con el tolueno arriba",
        "Tres fases, por la densidad media",
      ],
      answer: 2,
      explain: "Agua y tolueno son inmiscibles porque no comparten el mismo tipo de fuerzas; forman dos fases y la menos densa, el tolueno, queda arriba.",
    },
    {
      kind: "choice",
      q: "Tres bandejas abiertas, una con agua, otra con metanol y otra con acetona, a la misma temperatura. ¿Cuál se queda vacía antes?",
      options: [
        "La de agua, por ser la más ligera",
        "La de acetona, sin puentes de hidrógeno",
        "La de metanol, por ser alcohol",
        "Las tres a la vez, por la temperatura",
      ],
      answer: 1,
      explain: "La acetona solo tiene dipolo-dipolo y dispersión entre sus moléculas: es la más volátil (hierve a 56 °C). El agua, con muchos puentes de hidrógeno, es la que más tarda.",
    },
    {
      kind: "choice",
      q: "¿Qué ocurre con las moléculas de agua cuando el agua hierve en la camisa del reactor?",
      options: [
        "Se rompen en hidrógeno y oxígeno",
        "Se convierten en iones H⁺ y OH⁻",
        "Pierden sus enlaces covalentes O–H",
        "Se separan entre sí pero siguen enteras",
      ],
      answer: 3,
      explain: "Hervir vence las fuerzas intermoleculares (el velcro), no los enlaces (los imanes): el vapor sigue siendo H₂O.",
    },
    {
      kind: "choice",
      q: "El producto está disuelto en isopropanol y la hoja pide añadir heptano poco a poco. ¿Para qué?",
      options: [
        "Para que el producto cristalice",
        "Para que el producto se disuelva más",
        "Para bajar el punto de ebullición",
        "Para separar dos fases y decantar",
      ],
      answer: 0,
      explain: "El heptano es un antidisolvente: solo ofrece dispersión y no sujeta la parte polar del producto, que prefiere pegarse a otras moléculas de producto y cristaliza.",
    },
    {
      kind: "choice",
      q: "El CO₂ tiene dos enlaces C=O polares. ¿Por qué la molécula es apolar?",
      options: [
        "Porque el carbono tira más que el oxígeno",
        "Porque es recta y los tirones se anulan",
        "Porque sus enlaces son iónicos y no polares",
        "Porque no tiene ningún par solitario",
      ],
      answer: 1,
      explain: "Los dos oxígenos tiran con la misma fuerza en sentidos opuestos, como dos personas en los extremos de una cuerda: el efecto se anula. El agua, doblada en V, no los anula y es polar.",
    },
    {
      kind: "choice",
      q: "Tras limpiar con agua, en el reactor sigue una película pegajosa de un intermedio apolar. ¿Qué es lo razonable?",
      options: [
        "Repetir el lavado con más agua caliente",
        "Dejarlo, el agua ya ha hecho lo posible",
        "Seguir la hoja: un disolvente orgánico",
        "Usar el disolvente que haya más a mano",
      ],
      answer: 2,
      explain: "Un residuo apolar no se disuelve en agua por mucha que eches; necesita un disolvente orgánico que ofrezca dispersión, y cuál se usa lo fija el procedimiento de limpieza validado.",
    },
    {
      kind: "choice",
      q: "El agua (18 g/mol) hierve a 100 °C y el nitrógeno (28 g/mol) a −196 °C. ¿Qué lo explica?",
      options: [
        "Que el nitrógeno es más pesado",
        "Que el agua tiene enlaces iónicos",
        "Que el nitrógeno tiene un enlace triple",
        "Los puentes de hidrógeno del agua",
      ],
      answer: 3,
      explain: "Entre moléculas de N₂ solo hay dispersión débil; las de agua se enganchan con puentes de hidrógeno y hace falta mucha más energía para separarlas. El enlace triple está dentro de la molécula y no cuenta al hervir.",
    },
  ],
};
