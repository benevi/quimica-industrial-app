import type { Lesson } from "./types";

export const geometriaMolecularAFondo: Lesson = {
  slug: "geometria-molecular-a-fondo",
  level: 1,
  order: 12.7,
  title: "La forma de las moléculas a fondo: Lewis, RPECV e hibridación",
  titleEn: "Molecular geometry in depth",
  minutes: 40,
  summary:
    "Cómo dibujar una estructura de Lewis completa con sus cargas formales, cómo predecir la forma de una molécula con la teoría de repulsión de pares de electrones (RPECV), qué es la hibridación sp, sp² y sp³, por qué el anillo aromático es plano, cómo se calcula la energía reticular de la sal con el ciclo de Born-Haber y por qué la forma decide la polaridad, la solubilidad y la quiralidad de lo que fabricas.",
  body: `
En «Enlaces y fuerzas entre moléculas a fondo: por qué unas cosas se disuelven y otras no» viste que el agua es polar porque está doblada en V y el CO₂ apolar porque es recto. Allí la forma se daba hecha; aquí aprenderás a deducirla tú. Los tipos de enlace y las fuerzas entre moléculas no se repiten: repásalos allí si hace falta.

### Por qué le importa la forma a un operador
Una molécula es un objeto en tres dimensiones, como una pieza de mecano. Su forma decide tres cosas que ves en planta:

- **Si es polar o no**, y por tanto en qué disolvente se disuelve y en qué fase queda al decantar.
- **Si puede ser quiral**: si existe en dos versiones, «de mano derecha» y «de mano izquierda».
- **Cómo se apilan las moléculas en un cristal**, y con ello la forma sólida que sale de la centrífuga.

Se llega a la forma en tres pasos: estructura de Lewis, cargas formales y regla de repulsión.

### Paso 1. La estructura de Lewis completa, con método
El **diagrama de Lewis** (*Lewis structure*) ya lo conoces: los electrones de valencia como puntos o rayas. Para no equivocarte con moléculas nuevas, sigue siempre este orden:

1. **Suma los electrones de valencia** de todos los átomos. Si es un ion positivo, resta uno por cada carga; si es negativo, suma uno.
2. **Elige el átomo central**: suele ser el que puede formar más enlaces y el menos electronegativo. El hidrógeno nunca va en el centro: solo forma un enlace.
3. **Une el central con cada átomo de fuera con un enlace simple**. Cada raya gasta 2 electrones.
4. **Completa el octeto de los átomos de fuera** con pares solitarios (el hidrógeno se queda con 2).
5. **Lo que sobre, al átomo central**, en pares.
6. **Si al central le faltan electrones para el octeto**, convierte un par solitario de un vecino en un segundo enlace (doble) o en un tercero (triple).
7. **Comprueba la cuenta**: electrones en enlaces más electrones solitarios tienen que dar el total del paso 1.

**Ejercicio resuelto 1. El diclorometano, CH₂Cl₂**, un disolvente de extracción muy usado.

- Paso 1. Carbono 4 + dos hidrógenos 1 + 1 + dos cloros 7 + 7 = **20 electrones**.
- Paso 2. Central: el carbono, que forma cuatro enlaces.
- Paso 3. Cuatro enlaces simples C–H, C–H, C–Cl, C–Cl: 4 × 2 = 8 electrones gastados. Quedan 20 − 8 = 12.
- Paso 4. Cada cloro necesita 6 más para su octeto (ya tiene 2 en el enlace): 3 pares solitarios cada uno, 2 × 6 = 12. Quedan 12 − 12 = 0.
- Pasos 5 y 7. No sobra nada y el carbono ya tiene 8. Comprobación: 8 en enlaces + 12 solitarios = 20. Cuadra.

### Paso 2. Cargas formales: quién «ha perdido» o «ha ganado» electrones
A veces hay varias formas de dibujar la misma molécula. La **carga formal** (*formal charge*) ayuda a elegir. Es una cuenta de contabilidad: cada átomo se queda con sus pares solitarios enteros y con la mitad de los electrones de sus enlaces.

**Carga formal = electrones de valencia − electrones solitarios − (electrones de enlace / 2)**

Tres reglas para usarla:

- La suma de las cargas formales de todos los átomos es igual a la carga de la molécula (cero) o del ion.
- La mejor estructura es la que tiene cargas formales más cerca de cero.
- Si tiene que haber una carga negativa, mejor sobre el átomo más electronegativo.

**Ejercicio resuelto 2. La amina que se convierte en clorhidrato.** Muchos principios activos llevan un nitrógeno de amina. En el amoníaco, NH₃, el nitrógeno tiene tres enlaces y un par solitario. Su carga formal: 5 − 2 − (6 / 2) = 5 − 2 − 3 = **0**.

Al añadir ácido clorhídrico para hacer el **clorhidrato** (*hydrochloride*), un H⁺ se engancha a ese par solitario. El nitrógeno queda con cuatro enlaces y ningún par solitario, como en el ion amonio, NH₄⁺ (5 + 4 − 1 = 8 electrones). Su carga formal: 5 − 0 − (8 / 2) = **+1**, que coincide con la carga del ion. En el ion hidronio, H₃O⁺, el oxígeno queda igual: 6 − 2 − (6 / 2) = **+1**.

**Por qué el CO₂ se dibuja O=C=O.** Podrías dibujar O≡C–O: un triple enlace a un lado y uno simple al otro; también cumple el octeto. Pero el oxígeno del triple enlace tendría 6 − 2 − 3 = +1 y el del simple, 6 − 6 − 1 = −1. En O=C=O los tres átomos tienen carga formal 0. Gana O=C=O.

### Resonancia: cuando un solo dibujo no basta
El ion **acetato** (*acetate*), CH₃COO⁻, sale del ácido acético al neutralizarlo. Tiene 24 electrones de valencia (8 de los dos carbonos, 3 de los hidrógenos, 12 de los dos oxígenos y 1 más por la carga). Al dibujarlo, un oxígeno queda con enlace doble (carga formal 6 − 4 − 2 = 0) y el otro con enlace simple y tres pares solitarios (6 − 6 − 1 = −1). Pero ¿cuál de los dos lleva el doble? Los dos dibujos valen igual.

La realidad no salta de uno a otro: es una mezcla fija de ambos, con la carga negativa repartida entre los dos oxígenos. Es la **resonancia** (*resonance*), y los dibujos son **formas resonantes** (*resonance structures*). Una mula no es medio tiempo caballo y medio tiempo burro: es siempre una mezcla. Repartir la carga estabiliza el ion, igual que en el anillo de benceno que verás en «Química orgánica a fondo: leer una fórmula y entender su nombre».

**Excepciones al octeto.** En el trifluoruro de boro, BF₃ (3 + 3 × 7 = 24 electrones), el boro forma tres enlaces simples y se queda con 6 electrones, todos con carga formal 0. El azufre y el fósforo pueden rodearse de más de ocho, como en el ácido sulfúrico.

### Paso 3. La teoría RPECV: los electrones se apartan entre sí
La **teoría de repulsión de los pares de electrones de la capa de valencia** (*valence shell electron pair repulsion*, VSEPR; en español, RPECV) dice algo muy simple: los grupos de electrones que rodean a un átomo central se repelen, porque todos tienen carga negativa, y se colocan lo más lejos posible unos de otros.

Ata globos por el nudo: dos se ponen en línea; tres, en un triángulo plano; cuatro, hacia las esquinas de una pirámide de base triangular. Se apartan solos.

Lo que cuenta es el número de **zonas de electrones** (*electron domains*) alrededor del átomo central. Una zona es un enlace simple, un par solitario o un enlace doble o triple, que **cuenta como una sola zona** porque todos sus electrones van hacia el mismo vecino.

| Zonas de electrones | Disposición | Ángulo entre zonas | Ejemplo sin pares solitarios |
|---|---|---|---|
| 2 | Lineal (*linear*) | 180° | CO₂ |
| 3 | Triangular plana (*trigonal planar*) | 120° | BF₃ |
| 4 | Tetraédrica (*tetrahedral*) | 109,5° | CH₄ |

Son ángulos de pura geometría: en línea, 180°; en un plano, 360° / 3 = 120°; en el tetraedro, 109,5° (el ángulo cuyo coseno vale −1/3).

### Disposición de los electrones frente a forma de la molécula
La trampa que más confunde: los pares solitarios ocupan sitio, pero **no cuentan en la forma**, que se describe solo por dónde están los átomos.

| Molécula | Electrones de valencia | Zonas en el central | Pares solitarios | Disposición | Forma de la molécula | ¿Polar? |
|---|---|---|---|---|---|---|
| CO₂ | 16 | 2 (dos dobles) | 0 | Lineal | Lineal, 180° | No |
| BF₃ | 24 | 3 | 0 | Triangular plana | Triangular plana, 120° | No |
| CH₄ | 8 | 4 | 0 | Tetraédrica | Tetraédrica, 109,5° | No |
| NH₃ | 8 | 4 | 1 | Tetraédrica | **Piramidal** (*trigonal pyramidal*) | Sí |
| H₂O | 8 | 4 | 2 | Tetraédrica | **Angular** o en V (*bent*) | Sí |

El amoníaco tiene cuatro zonas, como el metano, pero una es un par solitario: mirando solo los átomos, ves una pirámide con el nitrógeno arriba. En el agua, dos zonas son pares solitarios y quedan dos hidrógenos: una V.

**Los pares solitarios empujan más.** Un par solitario está sujeto a un solo núcleo y se ensancha, como un globo más inflado. Aprieta a los enlaces y cierra sus ángulos por debajo de 109,5°. Con dos pares solitarios, el agua cierra más que el amoníaco. Lo que importa es el orden: metano 109,5°, amoníaco algo menos, agua menos todavía (los valores medidos no se dan aquí: no se pudieron comprobar en una fuente leída).

**Ejercicio resuelto 3. ¿Qué forma tiene el diclorometano y por qué es polar?** Del ejercicio 1: cuatro enlaces simples y ningún par solitario, así que cuatro zonas y forma tetraédrica, con ángulos cercanos a 109,5°. Los enlaces C–Cl son polares y los C–H casi no; los dos cloros quedan a un lado del tetraedro y los dos hidrógenos al otro, y los tirones no se anulan: es **polar**. En el tetracloruro de carbono, CCl₄, cuatro tirones iguales hacia las cuatro esquinas se anulan y la molécula es apolar. Misma forma, distinta simetría, distinta polaridad.

Igual en la tabla: los tres B–F del BF₃, a 120° en un plano, se anulan; los del NH₃, piramidal, no.

### Hibridación: cómo hace el carbono para tener cuatro brazos iguales
RPECV dice qué forma sale, pero no cómo encajan los electrones. Para eso se usa el **orbital** (*orbital*): la zona alrededor del núcleo donde es más probable encontrar un electrón. En la capa de valencia del carbono, el nitrógeno o el oxígeno hay dos tipos:

- Un **orbital s**: una esfera alrededor del núcleo, sin dirección preferida.
- Tres **orbitales p**: cada uno con forma de dos lóbulos opuestos, como un reloj de arena, apuntando según los tres ejes del espacio, a 90° entre sí.

Con esos orbitales tal cual, el metano tendría enlaces a 90° y uno distinto de los otros; pero sus cuatro C–H son iguales y forman 109,5°. La explicación es la **hibridación** (*hybridisation*): el átomo «mezcla» sus orbitales s y p en orbitales nuevos, iguales entre sí, orientados como pide RPECV. Como mezclar pintura: con un bote blanco y tres azules salen cuatro botes del mismo celeste.

| Zonas de electrones | Se mezclan | Hibridación | Orbitales p que quedan sin mezclar | Ángulo | Ejemplo |
|---|---|---|---|---|---|
| 4 | s + 3 p | **sp³** | 0 | 109,5° | Carbono del metano, del heptano o de un CH₃ |
| 3 | s + 2 p | **sp²** | 1 | 120° | Carbono de un C=O, de un C=C o del benceno |
| 2 | s + 1 p | **sp** | 2 | 180° | Carbono del CO₂ o de un triple enlace C≡N |

La regla práctica es la misma de RPECV: **cuenta las zonas del átomo y sabrás su hibridación**.

### Enlaces sigma y pi: por qué el doble enlace no gira
Hay dos maneras de solapar orbitales:

- **De frente**, a lo largo de la línea entre los dos núcleos: es un **enlace sigma** (*sigma bond*, σ). Todo enlace simple es un σ.
- **De lado**, con los dos orbitales p que quedaron sin mezclar, paralelos entre sí, por encima y por debajo de la línea: es un **enlace pi** (*pi bond*, π).

Un enlace doble es un σ más un π; un triple, un σ más dos π. El enlace π solo existe si los dos orbitales p siguen paralelos. Si intentas girar un extremo, se dejan de solapar y el π se rompe. Por eso el doble enlace es rígido, como dos tablas unidas con dos clavos, y por eso existen los isómeros cis y trans, que verás en «Isómeros y quiralidad a fondo: moléculas gemelas que no hacen lo mismo».

**Ejercicio resuelto 4. La acetona, CH₃–CO–CH₃.**

- Carbonos de los extremos (CH₃): cuatro enlaces simples, cuatro zonas: **sp³**, tetraédricos.
- Carbono central (C=O): enlace doble al oxígeno y dos simples a los CH₃. Tres zonas (el doble cuenta como una): **sp²**, triangular plano, con ángulos de unos 120°.
- Enlaces σ: seis C–H + dos C–C + uno dentro del C=O = **9**. Enlaces π: **1**, el segundo del C=O.

Un caso sp: en el acetonitrilo, CH₃–C≡N, el carbono del triple enlace tiene dos zonas y la línea C–C≡N es recta.

### Por qué el anillo aromático es plano
En el benceno, C₆H₆, cada carbono tiene tres vecinos: dos carbonos del anillo y un hidrógeno. Tres zonas: **sp²**, con sus tres enlaces σ en un plano a 120°. Y 120° es justo el ángulo interior de un hexágono regular: (6 − 2) × 180° / 6 = 120°. El anillo encaja sin forzar nada.

A cada carbono le queda un orbital p sin mezclar, perpendicular al anillo. Los seis p se solapan de lado con sus vecinos y forman una nube π repartida por todo el anillo: la resonancia del benceno vista con orbitales. Ese solapamiento exige que los seis p estén paralelos, es decir, que el anillo sea **plano**; doblado, se perdería la estabilidad extra.

Cuenta: seis C–C σ y seis C–H σ = 12 σ, más 3 π repartidos.

En un principio activo, esas partes planas y rígidas conviven con cadenas sp³ que giran, y cómo se apila esa mezcla en el cristal influye en su forma sólida («Polimorfismo, sales y solvatos a fondo: el mismo producto en distintas formas sólidas»).

### La forma decide: polaridad, solubilidad y quiralidad
- **Polaridad y solubilidad.** CH₂Cl₂ frente a CCl₄ y NH₃ frente a BF₃: no basta con saber qué enlaces hay, hay que saber hacia dónde apuntan. De la polaridad sale «lo semejante disuelve a lo semejante».
- **Quiralidad.** Un carbono **sp³** tiene sus cuatro grupos en las esquinas de un tetraedro. Si los cuatro son distintos, hay dos maneras de colocarlos, imagen especular una de otra: es un estereocentro. Un carbono **sp²** es plano y su imagen en el espejo es la misma molécula girada: no puede ser estereocentro. Por eso la racemización ocurre cuando un estereocentro pasa un instante a ser plano: al volver a sp³, el grupo puede entrar por cualquiera de las dos caras.

### Sólidos iónicos: la energía reticular y el ciclo de Born-Haber
En una sal no hay moléculas con forma propia: hay una red de iones. Su fortaleza se mide con la **energía reticular** (*lattice energy*): la energía necesaria para separar un mol del sólido en sus iones gaseosos, muy alejados entre sí. Aquí la tomamos con signo positivo: lo que cuesta romper la red.

No se mide directamente: se calcula con un rodeo. Como la energía no se crea ni se pierde, ir del sodio y el cloro a la sal por un camino o por otro da lo mismo, igual que subir al tercer piso por la escalera o en ascensor. Es el **ciclo de Born-Haber** (*Born-Haber cycle*).

**Ejercicio resuelto 5. Energía reticular del cloruro de sodio.** Datos del NIST Chemistry WebBook, redondeados a una décima de kJ/mol (las energías en electronvoltios se pasan con 1 eV = 96,485 kJ/mol):

| Paso | Qué pasa | kJ/mol |
|---|---|---|
| 1 | Sodio sólido a sodio gas, Na(s) a Na(g) | +107,5 |
| 2 | Medio mol de Cl₂ gas a cloro atómico, ½ Cl₂(g) a Cl(g) | +121,3 |
| 3 | Arrancar un electrón al sodio gas (energía de ionización, 5,139 eV) | +495,8 |
| 4 | El cloro gas capta ese electrón (afinidad electrónica, 3,613 eV) | −348,6 |
| 5 | Los iones gaseosos forman la red (menos la energía reticular) | −U |
| Total | Formación del NaCl sólido desde sus elementos | −411,1 |

El camino largo (pasos 1 a 5) tiene que dar lo mismo que el directo:

107,5 + 121,3 + 495,8 − 348,6 − U = −411,1

376,0 − U = −411,1

U = 376,0 + 411,1 = **787,1 kJ/mol**, unos 787 kJ/mol.

(Se usa una pequeña simplificación habitual en los libros: tratar la energía de ionización y la afinidad electrónica como si fueran entalpías. No cambia la idea.)

La lectura: los pasos 1 a 4 juntos **cuestan** 376,0 kJ/mol; formar iones sueltos no compensa. Lo que hace que la sal exista es el paso 5: la red libera muchísima energía. Por eso la sal funde tan alto y no se disuelve en heptano; en agua sí, porque el agua, al rodear cada ion, devuelve energía comparable a la que cuesta deshacer la red.

La atracción entre cargas crece con su valor y baja con la distancia (ley de Coulomb): iones con carga doble o más pequeños dan redes más fuertes.

### Metales: la idea de bandas
El «mar de electrones» de un metal se afina así: al juntar muchísimos átomos, sus orbitales forman niveles tan cercanos que hacen una franja continua, una **banda** (*energy band*). En un metal está a medio llenar y los electrones pasan a niveles vacíos casi sin coste: conducen. En un aislante, como el vidrio de una mirilla, hay un salto grande hasta la siguiente banda vacía y la corriente no pasa.

### En el laboratorio de control de calidad
Los enlaces vibran según los átomos que unen y su forma, y eso lee el infrarrojo («Espectroscopia a fondo: lo que la luz cuenta de una molécula (UV-Vis e infrarrojo)»). «Identificación conforme» significa que la huella del lote coincide con la del patrón.

En planta manda siempre el procedimiento vigente (SOP): cuánto ácido se añade para formar la sal, con qué disolvente y a qué temperatura lo fija la hoja de producción, no la teoría.
`,
  plant: `
Turno de mañana en el reactor R-318. La hoja de producción del intermedio ficticio QV-52 dice: *«Base libre de QV-52 disuelta en isopropanol a 50 °C. Añadir disolución de cloruro de hidrógeno en isopropanol durante 60 minutos. Enfriar a 5 °C en 4 horas. Filtrar en el filtro-secador FD-406.»* (Todos los valores son de ejemplo.)

Ahora entiendes lo que pasa dentro. La molécula de QV-52 tiene un nitrógeno de amina, sp³, con un par solitario y forma piramidal. Cada H⁺ que llega se engancha a ese par solitario: el nitrógeno pasa a tener cuatro enlaces, forma tetraédrica y carga formal +1. La base libre, neutra y con su parte apolar, estaba cómoda en isopropanol; la sal, con su carga positiva y su ion cloruro, ya no, y empieza a cristalizar. A los 25 minutos ves por la mirilla que la disolución se enturbia. Anotas la hora.

La molécula también lleva un anillo aromático plano y un estereocentro, un carbono sp³ con cuatro grupos distintos. La hoja limita la temperatura durante la adición: no la subes «para que vaya más rápido». Un exceso de calor y ácido podría dejar plano ese carbono un instante y racemizar parte del producto, y eso solo lo vería el laboratorio cuando ya fuera tarde.

En el FD-406 la torta se lava con isopropanol frío. El laboratorio confirma la identidad del clorhidrato por infrarrojo y la pureza quiral por cromatografía con columna quiral.
`,
  batchRecord: `
En la hoja de producción (*batch record*) no vas a ver dibujos de Lewis ni ángulos de enlace, pero sí sus consecuencias. Lo que verías y anotarías:

- **Formación de la sal**: código y lote del ácido (por ejemplo, cloruro de hidrógeno en isopropanol), cantidad añadida, hora de inicio y de fin de la adición y temperatura durante toda ella.
- **Aparición de sólido**: hora a la que se enturbia o aparecen cristales, y si se sembró, la cantidad y el lote de la semilla.
- **Límites de temperatura** en pasos sensibles para el estereocentro: valor real registrado y cualquier salida del intervalo, comunicada al momento.
- **Disolventes**: cuál se usa en cada paso. Cambiar uno por otro «parecido» puede cambiar la polaridad del medio y lo que cristaliza: no se hace sin autorización.
- **Muestras en proceso**: identidad y pureza quiral que pida la hoja, con hora de toma y etiqueta.
- **Producto**: nombre completo tal como figura en la hoja (base libre, clorhidrato, hidrato…), porque son sustancias distintas con pesos distintos.
- **Incidencias**: adición más rápida de lo previsto, subida de temperatura, cristalización antes o después de lo habitual.
`,
  terms: [
    { es: "Estructura de Lewis", en: "Lewis structure", def: "Dibujo de una molécula con todos sus electrones de valencia, en enlaces o en pares solitarios." },
    { es: "Carga formal", en: "Formal charge", def: "Electrones de valencia del átomo menos sus electrones solitarios menos la mitad de sus electrones de enlace." },
    { es: "Resonancia", en: "Resonance", def: "Situación en que la molécula real es una mezcla fija de varios dibujos de Lewis válidos." },
    { es: "Teoría RPECV", en: "VSEPR theory", def: "Modelo que predice la forma de una molécula porque las zonas de electrones del átomo central se alejan al máximo." },
    { es: "Zona de electrones", en: "Electron domain", def: "Enlace (simple, doble o triple) o par solitario alrededor de un átomo; cada uno cuenta como una." },
    { es: "Tetraédrica", en: "Tetrahedral", def: "Disposición de cuatro zonas hacia las esquinas de un tetraedro, a 109,5° entre sí." },
    { es: "Piramidal", en: "Trigonal pyramidal", def: "Forma de una molécula como el amoníaco: tres átomos de base y el central arriba, con un par solitario." },
    { es: "Angular", en: "Bent", def: "Forma en V de una molécula como el agua, con dos átomos unidos y dos pares solitarios en el central." },
    { es: "Orbital", en: "Orbital", def: "Zona alrededor del núcleo donde es más probable encontrar un electrón; los s son esféricos y los p, de dos lóbulos." },
    { es: "Hibridación", en: "Hybridisation", def: "Mezcla de orbitales s y p de un átomo para formar orbitales iguales orientados según la forma de la molécula." },
    { es: "Enlace sigma", en: "Sigma bond", def: "Enlace formado por solapamiento frontal de orbitales en la línea entre los núcleos; todo enlace simple lo es." },
    { es: "Enlace pi", en: "Pi bond", def: "Enlace por solapamiento lateral de orbitales p paralelos; impide el giro del doble enlace." },
    { es: "Energía reticular", en: "Lattice energy", def: "Energía necesaria para separar un mol de un sólido iónico en sus iones gaseosos." },
    { es: "Ciclo de Born-Haber", en: "Born-Haber cycle", def: "Camino de pasos que permite calcular la energía reticular a partir de energías medibles." },
  ],
  quiz: [
    {
      kind: "number",
      q: "El diclorometano es CH₂Cl₂. El carbono aporta 4 electrones de valencia, cada hidrógeno 1 y cada cloro 7. ¿Cuántos electrones de valencia hay en total en su estructura de Lewis?",
      answer: 20,
      tolerance: 0.001,
      unit: "electrones",
      explain: "Carbono 4 + dos hidrógenos 2 + dos cloros 14 = 20 electrones: 8 en los cuatro enlaces y 12 en los seis pares solitarios de los cloros.",
    },
    {
      kind: "number",
      q: "Al formar el clorhidrato, el nitrógeno de una amina (5 electrones de valencia) queda con cuatro enlaces simples y ningún par solitario. ¿Cuál es su carga formal?",
      answer: 1,
      tolerance: 0.001,
      unit: "",
      explain: "Carga formal = 5 − 0 − (8 / 2) = 5 − 4 = 1, es decir, +1, igual que el nitrógeno del ion amonio NH₄⁺.",
    },
    {
      kind: "number",
      q: "La acetona es CH₃–CO–CH₃: seis enlaces C–H, dos enlaces C–C simples y un enlace doble C=O. ¿Cuántos enlaces sigma tiene la molécula?",
      answer: 9,
      tolerance: 0.001,
      unit: "enlaces σ",
      explain: "Cada enlace simple es un σ y el doble C=O aporta un σ y un π: 6 + 2 + 1 = 9 enlaces σ y 1 enlace π.",
    },
    {
      kind: "number",
      q: "Ciclo de Born-Haber del NaCl, en kJ/mol: sublimar el sodio +107,5; atomizar medio mol de cloro +121,3; ionizar el sodio +495,8; el cloro capta el electrón −348,6; formación del NaCl sólido desde sus elementos −411,1. ¿Cuánto vale la energía reticular U?",
      answer: 787.1,
      tolerance: 0.005,
      unit: "kJ/mol",
      explain: "107,5 + 121,3 + 495,8 − 348,6 − U = −411,1, así que 376,0 − U = −411,1 y U = 376,0 + 411,1 = 787,1 kJ/mol.",
    },
    {
      kind: "number",
      q: "En el benceno, C₆H₆, cada carbono es sp² y le queda un orbital p sin mezclar. Los seis orbitales p forman la nube π del anillo. ¿A cuántos enlaces π equivale, contando dos electrones por enlace π?",
      answer: 3,
      tolerance: 0.001,
      unit: "enlaces π",
      explain: "Seis orbitales p con un electrón cada uno aportan 6 electrones π; a dos por enlace, 6 / 2 = 3 enlaces π repartidos por todo el anillo.",
    },
    {
      kind: "choice",
      q: "El amoníaco, NH₃, tiene cuatro zonas de electrones alrededor del nitrógeno, una de ellas un par solitario. ¿Qué forma tiene la molécula?",
      options: [
        "Triangular plana, con ángulos de 120°",
        "Piramidal, con el nitrógeno en lo alto",
        "Lineal, con todos los átomos en fila",
        "Tetraédrica, con cuatro hidrógenos",
      ],
      answer: 1,
      explain: "Los electrones se disponen en tetraedro, pero el par solitario no se ve en la forma: con tres hidrógenos de base y el nitrógeno arriba queda una pirámide.",
    },
    {
      kind: "choice",
      q: "BF₃ y NH₃ tienen tres enlaces polares cada uno. ¿Por qué el BF₃ es apolar y el NH₃ es polar?",
      options: [
        "Porque el boro es un metal y el nitrógeno no",
        "Porque el flúor tira menos que el hidrógeno",
        "Porque BF₃ es plano a 120° y NH₃ es piramidal",
        "Porque el BF₃ tiene un par solitario de más",
      ],
      answer: 2,
      explain: "En el BF₃ los tres tirones están en un plano a 120° y se anulan; en el NH₃ el par solitario empuja los enlaces hacia un lado y los tirones no se anulan.",
    },
    {
      kind: "choice",
      q: "En el disolvente CCl₄ y en el CH₂Cl₂ el carbono es tetraédrico. Un compañero dice que los dos tienen que ser igual de polares. ¿Qué le contestas?",
      options: [
        "El CH₂Cl₂ es polar porque sus tirones no se anulan",
        "Tiene razón: misma forma, misma polaridad",
        "El CCl₄ es el polar porque tiene más cloro",
        "Ninguno es polar porque el carbono no tira",
      ],
      answer: 0,
      explain: "En el CCl₄ cuatro tirones iguales hacia las esquinas del tetraedro se anulan; en el CH₂Cl₂ los cloros quedan de un lado y los hidrógenos del otro, y la molécula es polar.",
    },
    {
      kind: "choice",
      q: "¿Por qué el anillo de benceno de un principio activo es plano?",
      options: [
        "Porque sus carbonos son sp³ y forman 109,5°",
        "Porque el hidrógeno no deja que se doble",
        "Porque los anillos de seis siempre son planos",
        "Porque sus orbitales p deben estar paralelos",
      ],
      answer: 3,
      explain: "Cada carbono es sp², a 120°, que es el ángulo del hexágono; el p sobrante de cada uno solo se solapa con los vecinos si todos están paralelos, y eso exige un anillo plano.",
    },
    {
      kind: "choice",
      q: "Un intermedio tiene un estereocentro junto a un C=O. La hoja limita la temperatura durante una adición de base. ¿Qué riesgo explica la forma de las moléculas?",
      options: [
        "Que el anillo aromático deje de ser plano",
        "Que el carbono pase un instante a sp² plano y racemice",
        "Que el doble enlace C=O pase a ser triple",
        "Que el producto pase a ser un sólido iónico",
      ],
      answer: 1,
      explain: "Si la base arranca el hidrógeno del estereocentro, ese carbono queda plano (sp²) un instante y, al recuperarlo, puede salir por cualquiera de las dos caras: parte del producto pasa al otro enantiómero.",
    },
  ],
};
