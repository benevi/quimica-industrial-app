import type { Lesson } from "./types";

export const organicaAFondo: Lesson = {
  slug: "organica-a-fondo",
  level: 3,
  order: 2,
  title: "Química orgánica a fondo: leer una fórmula y entender su nombre",
  titleEn: "Organic chemistry in depth: reading a formula and understanding its name",
  minutes: 38,
  summary:
    "Las formas de escribir una molécula, cómo se lee una fórmula de esqueleto y se cuentan sus átomos, las familias de hidrocarburos, la nomenclatura paso a paso con disolventes reales de planta, el número CAS, cómo se ve un principio activo por partes, la notación de sales e hidratos y los errores típicos al leer una etiqueta.",
  body: `
En «El carbono y las fórmulas orgánicas» viste los cuatro enlaces del carbono y los prefijos para contar carbonos; en «Enlaces y fuerzas entre moléculas a fondo», el enlace simple, doble y triple. Aquí aprendes a leer la fórmula y el nombre de una etiqueta, una ficha de datos de seguridad o una hoja de producción, y a saber si es lo que pide la hoja.

### Por qué hay tantos compuestos de carbono
Piensa en una pieza de construcción con cuatro enganches: con ella sola haces filas, filas con ramas y anillos. El carbono es esa pieza:

- **Cuatro enlaces por átomo**: siempre le quedan enganches libres para otros carbonos, para hidrógenos o para otros átomos (oxígeno, nitrógeno, cloro).
- **Cadenas**: los carbonos se unen entre sí en filas largas.
- **Ramas y anillos**: la fila puede ramificarse o cerrarse sobre sí misma.
- **Enlaces simples, dobles y triples** entre carbonos.

Cada combinación es una sustancia distinta, con su punto de ebullición, su toxicidad y su reactividad. Por eso hay tantos compuestos orgánicos, y por eso casi todos los principios activos y la mayoría de los disolventes lo son: carbono e hidrógeno con algo de oxígeno, nitrógeno o cloro, en la forma que haga falta.

### Cinco formas de escribir la misma molécula
Del modo más largo al más corto, con el etanol:

| Forma | En inglés | Etanol | Qué te dice |
|---|---|---|---|
| Molecular | *molecular formula* | C₂H₆O | Solo cuántos átomos hay de cada elemento |
| Desarrollada | *structural formula* | Todos los átomos y todas las rayas (ver abajo) | Cada enlace, uno por uno |
| Semidesarrollada | *condensed formula* | CH₃–CH₂–OH o CH₃CH₂OH | Qué átomos van en cada carbono |
| De esqueleto | *skeletal formula* | Una línea con un pico y «OH» al final | Solo el armazón; es la de las fichas técnicas |
| Lineal informática | *SMILES* | CCO | Texto para programas y bases de datos; solo como mención, en planta no se usa |

**La desarrollada, con palabras**: dos C unidos por una raya. El primero tiene tres rayas más, a tres H. El segundo, dos rayas a dos H y una a una O, que tiene una raya a una H. Cada C tiene cuatro rayas. Siempre cuatro.

**La de esqueleto, con palabras**: una línea quebrada de dos tramos, como una V abierta. El extremo libre de la izquierda es un carbono (CH₃). El pico es otro carbono (CH₂). En el otro extremo está escrito OH. Los carbonos no se escriben y los hidrógenos unidos a carbono tampoco: se sobreentienden.

La molecular sola no identifica la sustancia: el etanol y el dimetiléter tienen los dos C₂H₆O («Isómeros y quiralidad»). Hace falta la estructura o un identificador como el número CAS.

**El mismo ejercicio con el paracetamol**, un principio activo sencillo:

- **Molecular**: C₈H₉NO₂.
- **Semidesarrollada**: HO–C₆H₄–NH–CO–CH₃. El C₆H₄ es un anillo de benceno al que le faltan dos hidrógenos porque tiene dos cosas enganchadas.
- **De esqueleto, con palabras**: un hexágono con tres rayas dobles alternas (a veces, un círculo dentro). En un vértice, una raya hacia «OH». En el vértice opuesto, una raya hacia «N» con su «H»; del N sale otra raya a un vértice sin letra, que tiene una raya doble hacia «O» y una raya corta que acaba en un extremo libre (un CH₃).

### Cómo se lee una fórmula de esqueleto
Seis reglas:

1. **Cada vértice es un carbono.** Cada pico o esquina de la línea.
2. **Cada extremo libre, sin letra, es un carbono.** Normalmente un CH₃.
3. **Los demás átomos se escriben con su letra**: O, N, Cl. Y los hidrógenos unidos a ellos también se escriben (OH, NH).
4. **Una raya doble es un enlace doble** y cuenta dos; una triple cuenta tres.
5. **Los hidrógenos de un carbono no se dibujan**: se calculan. Hidrógenos = 4 − rayas que salen de ese carbono.
6. **El anillo de benceno** es un hexágono con rayas dobles alternas o con un círculo dentro.

### Contar átomos y pasar a masa molar
Con las reglas sacas la fórmula molecular. Con ella, la masa molar, como explica «El mol a fondo» (aquí no se repite el método). Masas atómicas redondeadas, como allí: H 1, C 12, N 14, O 16, Cl 35,5.

**Ejemplo 1. Tolueno.** Hexágono con tres rayas dobles alternas y una raya corta que sale de un vértice y acaba sin letra.
- Carbonos: 6 del anillo + 1 del extremo = 7.
- Hidrógenos: en el anillo, cada vértice ya usa tres enlaces (una raya simple y una doble). El vértice que lleva la rama gasta el cuarto en ella: 0 H. Los otros cinco vértices: 1 H cada uno = 5. El extremo: 4 − 1 = 3. Total: 8.
- Fórmula: **C₇H₈**. Masa molar: 7 × 12 + 8 × 1 = **92 g/mol**.

**Ejemplo 2. Acetato de etilo.** Zigzag: extremo libre; vértice con una raya doble hacia «O»; raya a una «O» escrita en la línea; dos tramos más, el último en un extremo libre.
- Carbonos: el primer extremo, el vértice del C=O y los dos tras la O = 4.
- Hidrógenos: primer extremo 3; el carbono del C=O, 4 − (1 + 2 + 1) = 0; el siguiente, 2; el último extremo, 3. Total: 8.
- Oxígenos: 2. Fórmula: **C₄H₈O₂**. Masa molar: 48 + 8 + 32 = **88 g/mol**.

**Ejemplo 3. Ibuprofeno**, un principio activo. Hexágono de benceno con dos ramas en vértices opuestos. A un lado, un tramo a un vértice (un CH₂) y otro tramo a un vértice (un CH) del que salen dos extremos libres (dos CH₃). Al otro lado, un tramo a un vértice (un CH) con un extremo libre colgando (un CH₃) y un tramo a un carbono con una raya doble a «O» y una raya a «OH».
- Carbonos: rama izquierda 4 + anillo 6 + rama derecha 3 = 13.
- Hidrógenos: rama izquierda 2 + 1 + 3 + 3 = 9; anillo, cuatro vértices libres = 4; rama derecha 1 + 3 + el H del OH = 5. Total: 18.
- Fórmula: **C₁₃H₁₈O₂**. Masa molar: 156 + 18 + 32 = **206 g/mol**. Con masas más precisas (C 12,011; H 1,008; O 15,999), 206,28 g/mol; en una carga, la que dé la hoja.

### Hidrocarburos: las familias
Los **hidrocarburos** (*hydrocarbons*), solo de carbono e hidrógeno, se separan por sus enlaces:

| Familia | Enlace típico | Terminación | Ejemplo | Fórmula |
|---|---|---|---|---|
| Alcanos (*alkanes*) | Solo simples | -ano | Heptano | C₇H₁₆ |
| Alquenos (*alkenes*) | Algún doble | -eno | Eteno (etileno), CH₂=CH₂ | C₂H₄ |
| Alquinos (*alkynes*) | Algún triple | -ino | Etino (acetileno), HC≡CH | C₂H₂ |
| Aromáticos (*aromatics*) | Anillo de benceno | -benceno o nombre propio | Tolueno | C₇H₈ |

**Saturado e insaturado.** Un alcano está **saturado** (*saturated*): cada carbono lleva todos los hidrógenos que le caben. Por eso los alcanos de cadena abierta siguen la regla CₙH₂ₙ₊₂: heptano, 7 carbonos y 2 × 7 + 2 = 16 hidrógenos. Un doble o un triple enlace gasta enganches que podrían llevar hidrógenos: la molécula es **insaturada** (*unsaturated*).

**Lineal, ramificada o cíclica.** La cadena puede ser una fila (**lineal**, *straight-chain*), tener ramas (**ramificada**, *branched*) o cerrarse en anillo (**cíclica**, *cyclic*). Un anillo gasta dos hidrógenos: el ciclohexano, seis carbonos en hexágono, es C₆H₁₂, no C₆H₁₄ como el hexano.

**El benceno, sin teoría.** Es un anillo de seis carbonos con un hidrógeno cada uno, C₆H₆. Se dibuja con tres rayas dobles alternas, pero los seis enlaces del anillo son iguales: los electrones de esos dobles enlaces están repartidos por todo el anillo, y por eso a veces se dibuja con un círculo dentro. Ese reparto lo hace muy estable: aguanta reacciones que romperían un doble enlace normal. Muchos principios activos llevan uno o varios.

**Disolventes de planta de estas familias** (otros nombres según la guía ICH Q3C y las fichas internacionales de seguridad química del INSST):

| Disolvente | Familia | Semidesarrollada | Otros nombres |
|---|---|---|---|
| Heptano | Alcano lineal | CH₃(CH₂)₅CH₃ | n-heptano |
| Ciclohexano | Alcano cíclico | Anillo de seis CH₂ | Hexametileno, hexahidrobenceno |
| Tolueno | Aromático | C₆H₅–CH₃ | Metilbenceno, toluol |
| Xilenos | Aromáticos | C₆H₄(CH₃)₂ | Dimetilbenceno, xilol |

La «n-» de n-heptano significa cadena lineal. En CH₃(CH₂)₅CH₃, el CH₂ se repite cinco veces.

Hay tres xilenos: los dos metilos en vértices vecinos (orto-xileno, 1,2-dimetilbenceno), separados por un vértice (meta, 1,3-) o enfrentados (para, 1,4-). Ojo: según ICH Q3C, el «xileno» como disolvente suele ser una mezcla de unos 60 % de m-xileno, 14 % de p-xileno y 9 % de o-xileno, con 17 % de etilbenceno. «Xileno» en una etiqueta no siempre es una sola sustancia.

### Nomenclatura IUPAC paso a paso
La **IUPAC** (*International Union of Pure and Applied Chemistry*) fija los **nombres sistemáticos** (*systematic names*): de la estructura sale el nombre, y del nombre, la estructura.

1. **Busca la cadena más larga** (o el anillo) que contenga el grupo principal y cuenta sus carbonos. Da la raíz: met (1), et (2), prop (3), but (4), pent (5), hex (6), hept (7), oct (8).
2. **Pon la terminación** según el grupo funcional principal (tabla abajo).
3. **Numera la cadena** desde el extremo que dé el número más bajo al grupo principal. Ese número es el **localizador** (*locant*).
4. **Nombra las ramas** como prefijos con su número: metil (CH₃–), etil, cloro (Cl), metoxi (CH₃O–). Dos iguales: di-; tres: tri-; cuatro: tetra-.

| Terminación | Familia | Ejemplo | Semidesarrollada |
|---|---|---|---|
| -ano | Alcano | Heptano | CH₃(CH₂)₅CH₃ |
| -eno | Alqueno | Eteno | CH₂=CH₂ |
| -ino | Alquino | Etino | HC≡CH |
| -ol | Alcohol | Propan-2-ol | (CH₃)₂CHOH |
| -al | Aldehído | Etanal (acetaldehído) | CH₃CHO |
| -ona | Cetona | Propanona | CH₃COCH₃ |
| ácido -oico | Ácido carboxílico | Ácido etanoico | CH₃COOH |
| -oato de -ilo | Éster | Etanoato de etilo | CH₃COOCH₂CH₃ |
| -amina | Amina | N,N-dietiletanamina (trietilamina) | N(CH₂CH₃)₃ |
| -amida | Amida | Metanamida (formamida) | HCONH₂ |

**Ocho nombres de planta, descifrados** (nombre y semidesarrollada según ICH Q3C; sinónimos también de las fichas del INSST):

1. **Propan-2-ol (2-propanol, isopropanol)**, (CH₃)₂CHOH. Prop: 3 carbonos. -ol: alcohol. -2-: el OH va en el carbono 2, el del medio. Las dos formas, «propan-2-ol» y «2-propanol», aparecen en documentos oficiales y son lo mismo.
2. **Propanona (acetona)**, CH₃COCH₃. Tres carbonos y -ona: cetona, con el C=O en el carbono del medio. No necesita número: en el extremo sería un aldehído, propanal, otra sustancia.
3. **Etanoato de etilo (acetato de etilo)**, CH₃COOCH₂CH₃. Los ésteres se nombran en dos partes: «etanoato» viene del ácido (2 carbonos con el C=O), «de etilo» del alcohol (2 carbonos tras la O).
4. **Ácido etanoico (ácido acético)**, CH₃COOH. Dos carbonos; el grupo –COOH da «ácido … -oico».
5. **Metil terc-butil éter (MTBE)**, (CH₃)₃COCH₃. Nombre por piezas: un metilo y un terc-butilo unidos por una O (éter). «Terc-butilo» es un grupo de 4 carbonos cuyo carbono central va unido a otros tres. El sistemático es 2-metoxi-2-metilpropano: cadena de 3 carbonos y en el carbono 2, un metilo y un metoxi.
6. **Diclorometano (DCM, cloruro de metileno)**, CH₂Cl₂. Metano (1 carbono) con dos cloros: di + cloro. No lo confundas con el cloruro de metilo (clorometano, CH₃Cl), que tiene un solo cloro y es otra sustancia.
7. **Tetrahidrofurano (THF)**: un pentágono con cuatro vértices de carbono y uno de oxígeno, C₄H₈O. El furano es ese anillo con dos dobles enlaces; «tetrahidro» dice que se le han añadido cuatro hidrógenos y ya no quedan dobles. ICH Q3C da también oxaciclopentano.
8. **N,N-dimetilformamida (DMF)**, HCON(CH₃)₂. Formamida (la amida de un carbono) con dos metilos. «N,N» son localizadores: los dos metilos van sobre el nitrógeno, no sobre un carbono.

### Nombres comunes y sistemáticos: por qué conviven
Los **nombres comunes** (*common* o *trivial names*), como acetona o tolueno, son anteriores a las reglas y cortos, y el comercio los sigue usando. Los sistemáticos son largos pero exactos. Pistas de raíz: «form-» es un carbono (de fórmico) y «acet-», dos (de acético).

En la sección 1 de una ficha de datos de seguridad verás el nombre y, a menudo, una lista de **sinónimos** (*synonyms*). Las fichas internacionales del INSST dan para el alcohol isopropílico: isopropanol, propan-2-ol, 2-propanol, 2-hidroxipropano y 1-metiletanol. Cinco nombres, una sustancia.

### El número CAS
El **número CAS** (*CAS Registry Number*) es un código asignado por el Chemical Abstracts Service (de ahí sus siglas) a cada sustancia. Tiene tres grupos de cifras separados por guiones, y la última es de control: una errata se nota. La prueba: toma las cifras antes del último guion, empieza por la derecha y multiplica la primera por 1, la segunda por 2, la tercera por 3… Suma, y la última cifra de la suma debe ser la cifra de control. Para el propan-2-ol, 67-63-0: 3 × 1 + 6 × 2 + 7 × 3 + 6 × 4 = 60, que acaba en 0. Cumplen todos los de esta lección.

Se usa en etiquetas y fichas porque un nombre puede escribirse de cinco formas y el CAS solo de una. Ejemplos de las fichas del INSST y de la app:

| Sustancia | CAS | Fíjate en |
|---|---|---|
| Metanol | 67-56-1 | Un carbono |
| Etanol | 64-17-5 | Dos carbonos: otra sustancia, otro número |
| Propan-1-ol (1-propanol) | 71-23-8 | OH en el extremo |
| Propan-2-ol (isopropanol) | 67-63-0 | OH en el medio: otro número |
| o-Xileno | 95-47-6 | Metilos vecinos |
| p-Xileno | 106-42-3 | Metilos enfrentados: otro número |

El 1-propanol y el 2-propanol tienen la misma fórmula, C₃H₈O, y nombres casi iguales, pero son sustancias distintas. El metanol y el etanol se escriben con una letra de diferencia, y el metanol es tóxico por ingestión, inhalación y contacto con la piel.

Lo que el CAS no te dice: **la concentración**. La ficha de la sosa al 50 % de la app identifica el componente por el CAS del hidróxido de sodio, 1310-73-2, el mismo del sólido. Y el ácido clorhídrico al 35 % lleva el CAS del cloruro de hidrógeno, 7647-01-0. Mira siempre el porcentaje.

**La regla en la carga**: comprueba el **código interno** del material y el **nombre** con lo que pide la hoja, y además el lote y el estado de calidad (lo tienes en «Recepción de materiales y estados de calidad»). Si algo no coincide letra a letra, no cargas: avisas.

### Un principio activo, por partes
Un principio activo se lee igual, por piezas: un armazón (aquí, un anillo aromático), grupos funcionales enganchados (los de «Grupos funcionales») y alguna cadena.

| Principio activo | Fórmula | Masa molar (redondeada) | Anillo | Grupos funcionales | Cadena |
|---|---|---|---|---|---|
| Paracetamol | C₈H₉NO₂ | 151 g/mol | Benceno con dos ramas enfrentadas | –OH (fenol) y –NH–CO–CH₃ (amida) | Solo el CH₃ de la amida |
| Ácido acetilsalicílico | C₉H₈O₄ | 180 g/mol | Benceno con dos ramas vecinas | –COOH (ácido) y –O–CO–CH₃ (éster) | Solo el CH₃ del éster |
| Ibuprofeno | C₁₃H₁₈O₂ | 206 g/mol | Benceno con dos ramas enfrentadas | –COOH (ácido) | Isobutilo a un lado; CH(CH₃) al otro |

Fíjate en el nombre «ácido acetilsalicílico»: es el **ácido salicílico** (C₇H₆O₃, 138 g/mol; ficha del INSST con CAS 69-72-7) con un grupo acetilo (CH₃–CO–) añadido en su OH. Un nombre está dentro del otro y son sustancias distintas, con fórmulas distintas y fichas distintas.

### Sales e hidratos: cómo se escriben
Muchos principios activos son una **sal** (*salt*) o un **hidrato** (*hydrate*), y el nombre lo dice. Por qué se hacen está en «Polimorfismo, sales y solvatos»; aquí, cómo se leen:

- **Clorhidrato de X** (*X hydrochloride*): la base X más una molécula de cloruro de hidrógeno. Se escribe «X · HCl». El punto centrado significa «junto con», no «por».
- **Sal sódica de X** o «X sódico»: el ácido X ha cambiado un H por un Na.
- **X monohidrato** (*monohydrate*): «X · H₂O», una molécula de agua por cada X en el cristal. Dihidrato, «· 2 H₂O».
- **Anhidro** (*anhydrous*): sin agua en el cristal.

La masa molar se suma: con una base ficticia de 250 g/mol (valor de ejemplo), el clorhidrato es 250 + 36,5 = 286,5 g/mol, y el clorhidrato monohidrato, 250 + 36,5 + 18 = 304,5 g/mol. Si cargas la base libre en vez del clorhidrato, o el anhidro en vez del hidrato, los kilos no dan los moles previstos. Y son materiales distintos: en las fichas del INSST, la sal de trisodio del ácido nitrilotriacético tiene un CAS para la forma anhidra (5064-31-3) y otro para el monohidrato (18662-53-8).

### Errores típicos al leer etiquetas
| Error | Ejemplo | Cómo evitarlo |
|---|---|---|
| Confundir nombres parecidos | Metanol por etanol; 1-propanol por 2-propanol; ácido salicílico por acetilsalicílico | Comprobar código y nombre completos, letra a letra |
| Leer solo la raíz | «Acet-» aparece en acetona, acetato de etilo, ácido acético y acetonitrilo | Leer la terminación: -ona, -ato, -ico, -nitrilo |
| Ignorar «ácido» o «sal de» | Ácido acético frente a acetato de sodio | Leer la palabra delante y detrás del nombre |
| Ignorar «· HCl» o «hidrato» | Base libre por clorhidrato; anhidro por monohidrato | Comparar la forma exacta con la hoja |
| No mirar la concentración | Sosa al 50 % frente a una disolución diluida; etanol anhidro frente a etanol con agua | Leer el porcentaje junto al nombre |

En planta manda siempre el procedimiento vigente (SOP): qué material se carga, con qué código y cómo se verifica.
`,
  plant: `
Turno de noche. La hoja del intermedio ficticio LZ-12 en el reactor R-117 pide: *«Cargar 300 L de propan-2-ol, código MP-2041»* (valores de ejemplo). En la zona de disolventes hay dos contenedores de 1000 L juntos. La etiqueta del primero dice «Propan-1-ol, alcohol n-propílico, CAS 71-23-8». La del segundo, «Alcohol isopropílico (propan-2-ol, isopropanol), CAS 67-63-0», con el código interno MP-2041 y la etiqueta de aprobado.

Tu compañero de turno coge el primero: «Es propanol, es lo mismo». Le explicas que no: el número del nombre dice dónde va el OH, el CAS es distinto y el código interno no es el de la hoja. Cargáis el segundo. Anotas código, lote y cantidad, y tu compañero lo verifica.

Más tarde la hoja pide añadir el principio activo ficticio FX en forma de «clorhidrato monohidrato, código MP-5520». El saco de la báscula lleva «FX · HCl», sin «· H₂O». No cargas: el código no coincide y la forma tampoco. Avisas al responsable de turno, que confirma que ese saco es de otra etapa y lo devuelve al almacén. Lo anotas como incidencia en la hoja.
`,
  batchRecord: `
En la hoja de producción (*batch record*) la lectura de nombres aparece en cada carga:

- **Material pedido**: nombre (común o sistemático), código interno y, a veces, el número CAS y la forma (base, clorhidrato, hidrato, anhidro).
- **Material cargado**: código y lote leídos en la etiqueta, cantidad y unidad, hora, firma del operador y de quien verifica.
- **Concentración**: para ácidos, bases y disoluciones, el porcentaje de la etiqueta (por ejemplo, «sosa al 50 %»).
- **Estado de calidad**: aprobado, con su etiqueta o su estado en el sistema.
- **Datos para el cálculo**: fórmula molecular y masa molar que da la hoja o la especificación; se usan para pasar de kilos a moles, no se recalculan por tu cuenta.
- **Incidencias**: cualquier diferencia entre la etiqueta y la hoja (nombre, código, forma o concentración), a quién se avisó y qué se decidió.
`,
  terms: [
    { es: "Fórmula molecular", en: "Molecular formula", def: "Cuántos átomos de cada elemento tiene la molécula, como C₂H₆O. No dice cómo están unidos." },
    { es: "Fórmula desarrollada", en: "Structural formula", def: "Dibujo con todos los átomos y todos los enlaces, uno por uno." },
    { es: "Fórmula semidesarrollada", en: "Condensed formula", def: "Fórmula en línea que agrupa los hidrógenos de cada carbono, como CH₃CH₂OH." },
    { es: "Fórmula de esqueleto", en: "Skeletal formula", def: "Dibujo de líneas y ángulos: cada vértice y cada extremo libre es un carbono y sus hidrógenos no se dibujan." },
    { es: "Saturado", en: "Saturated", def: "Hidrocarburo solo con enlaces simples: cada carbono lleva todos los hidrógenos que le caben." },
    { es: "Insaturado", en: "Unsaturated", def: "Con algún enlace doble o triple entre carbonos." },
    { es: "Aromático", en: "Aromatic", def: "Que contiene un anillo de benceno, de seis carbonos con los electrones de sus dobles enlaces repartidos; muy estable." },
    { es: "Nombre sistemático", en: "Systematic name (IUPAC name)", def: "Nombre construido con las reglas de la IUPAC a partir de la estructura." },
    { es: "Nombre común", en: "Common name / trivial name", def: "Nombre tradicional y corto, como acetona o tolueno, que no sigue las reglas sistemáticas." },
    { es: "Localizador", en: "Locant", def: "Número que indica en qué carbono (o en qué átomo, como N) va un grupo o una rama." },
    { es: "Sinónimo", en: "Synonym", def: "Otro nombre de la misma sustancia; las fichas de seguridad suelen listarlos." },
    { es: "Número CAS", en: "CAS Registry Number", def: "Código de tres grupos de cifras, con la última de control, que identifica una sustancia. No indica la concentración." },
    { es: "Clorhidrato", en: "Hydrochloride", def: "Sal de una base orgánica con cloruro de hidrógeno; se escribe X · HCl." },
    { es: "Hidrato", en: "Hydrate", def: "Sólido cristalino que incorpora agua en su red; X · H₂O es un monohidrato." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Fórmula de esqueleto: una línea en zigzag de tres tramos (dos extremos libres y dos vértices), con una raya del segundo carbono a «OH». ¿Cuántos hidrógenos tiene la molécula en total, contando el del OH?",
      answer: 10,
      tolerance: 0.001,
      unit: "átomos de H",
      explain: "Cada carbono lleva 4 − rayas hidrógenos: extremo 3, carbono del OH 1, vértice 2, extremo 3. Son 9, más 1 del OH: 10. Es el butan-2-ol, C₄H₁₀O.",
    },
    {
      kind: "number",
      q: "Calcula la masa molar del propan-2-ol, C₃H₈O, con C = 12, H = 1 y O = 16.",
      answer: 60,
      tolerance: 0.005,
      unit: "g/mol",
      explain: "3 × 12 + 8 × 1 + 16 = 36 + 8 + 16 = 60 g/mol.",
    },
    {
      kind: "number",
      q: "El tetrahidrofurano se dibuja como un pentágono: un vértice con la letra O y cuatro vértices sin letra, todos con enlaces simples. Con C = 12, H = 1 y O = 16, ¿cuál es su masa molar?",
      answer: 72,
      tolerance: 0.005,
      unit: "g/mol",
      explain: "Cuatro carbonos con 2 rayas cada uno, así que 4 − 2 = 2 H cada uno: C₄H₈O. 48 + 8 + 16 = 72 g/mol.",
    },
    {
      kind: "number",
      q: "El metil terc-butil éter es (CH₃)₃COCH₃. Saca la fórmula molecular y calcula la masa molar con C = 12, H = 1 y O = 16.",
      answer: 88,
      tolerance: 0.005,
      unit: "g/mol",
      explain: "Carbonos: 3 + 1 + 1 = 5; hidrógenos: 9 + 3 = 12; un oxígeno: C₅H₁₂O. 60 + 12 + 16 = 88 g/mol.",
    },
    {
      kind: "number",
      q: "Ibuprofeno: anillo de benceno (6 carbonos); a un lado una rama de 4 carbonos (CH₂ y un CH con dos CH₃); al otro, un CH con un CH₃ y un grupo COOH. ¿Cuántos átomos de carbono tiene?",
      answer: 13,
      tolerance: 0.001,
      unit: "átomos de C",
      explain: "4 de la rama + 6 del anillo + 1 del CH + 1 del CH₃ + 1 del COOH = 13. Fórmula C₁₃H₁₈O₂.",
    },
    {
      kind: "number",
      q: "Un principio activo ficticio tiene una base de 250 g/mol (valor de ejemplo). La hoja pide su clorhidrato monohidrato, X · HCl · H₂O. Con HCl = 36,5 g/mol y H₂O = 18 g/mol, ¿cuál es su masa molar?",
      answer: 304.5,
      tolerance: 0.005,
      unit: "g/mol",
      explain: "Se suman las piezas: 250 + 36,5 + 18 = 304,5 g/mol. La base sola daría otros moles con los mismos kilos.",
    },
    {
      kind: "choice",
      q: "La hoja pide «propan-2-ol, código MP-2041». El contenedor que tienes delante dice «propan-1-ol, CAS 71-23-8». ¿Qué haces?",
      options: [
        "No cargo: son sustancias distintas y el código no coincide",
        "Cargo: los dos son propanol y tienen la misma fórmula",
        "Cargo y anoto en la hoja que he usado el nombre parecido",
        "Cargo la mitad de cada uno para repartir la diferencia",
      ],
      answer: 0,
      explain: "El número dice dónde va el OH: 1-propanol y 2-propanol son isómeros distintos, con CAS distintos. Si el código y el nombre no coinciden con la hoja, no se carga y se avisa.",
    },
    {
      kind: "choice",
      q: "Dos bidones llevan el mismo número CAS, 1310-73-2 (hidróxido de sodio). ¿Qué te falta comprobar antes de usar uno?",
      options: [
        "Nada: mismo CAS quiere decir mismo material y misma forma",
        "La concentración: el CAS es el mismo para el sólido y la sosa al 50 %",
        "Solo el color del bidón, que indica la concentración",
        "El nombre común, que siempre cambia con la concentración",
      ],
      answer: 1,
      explain: "El CAS identifica la sustancia, no cuánta hay en la mezcla. La ficha de la sosa al 50 % lleva el mismo CAS que el sólido: hay que leer el porcentaje y el código interno.",
    },
    {
      kind: "choice",
      q: "Te piden traer ácido acetilsalicílico y en la estantería encuentras un saco de ácido salicílico. ¿Qué es correcto?",
      options: [
        "Es lo mismo; «acetil» es solo un nombre comercial",
        "Es la forma hidratada del ácido acetilsalicílico",
        "Es otra sustancia: le falta el acetilo y tiene otra fórmula",
        "Es su sal sódica y sirve si se ajustan los kilos",
      ],
      answer: 2,
      explain: "El ácido salicílico es C₇H₆O₃ y el acetilsalicílico, C₉H₈O₄: el segundo lleva un acetilo más. Un nombre dentro de otro no los hace iguales.",
    },
    {
      kind: "choice",
      q: "La hoja pide «diclorometano». La etiqueta del bidón dice «cloruro de metileno (DCM)», con el código interno de la hoja. Un compañero dice que es otra cosa. ¿Quién tiene razón?",
      options: [
        "Él: el cloruro de metileno es el clorometano, con un cloro",
        "Él: un sinónimo nunca puede figurar en una etiqueta válida",
        "Nadie: hay que oler el bidón para saberlo con seguridad",
        "Tú: es un sinónimo del diclorometano y el código coincide",
      ],
      answer: 3,
      explain: "Cloruro de metileno y DCM son sinónimos del diclorometano, CH₂Cl₂. El que tiene un cloro es el cloruro de metilo. Manda el código interno; un producto nunca se huele.",
    },
  ],
};
