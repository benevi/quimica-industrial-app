import type { Lesson } from "./types";

export const quiralidadAFondo: Lesson = {
  slug: "quiralidad-a-fondo",
  level: 3,
  order: 8,
  title: "Isómeros y quiralidad a fondo: moléculas gemelas que no hacen lo mismo",
  titleEn: "Isomers and chirality in depth: twin molecules that do not do the same thing",
  minutes: 38,
  summary:
    "Los tipos de isómeros con ejemplos reales, cómo reconocer un estereocentro en una fórmula, qué distingue a dos enantiómeros y qué no, R y S frente a (+) y (−), las cuentas del exceso enantiomérico en porcentaje y en kilos, los diastereómeros, cómo se fabrica un solo enantiómero en planta, la racemización y lo que piden ICH Q6A, la EMA y la FDA para controlarlo.",
  body: `
En «Isómeros y quiralidad» viste las ideas en pocas líneas. Aquí vas a reconocer un estereocentro en una fórmula, hacer las cuentas en porcentaje y en kilos, seguir una resolución por el reactor y la centrífuga y entender por qué la hoja limita a veces la temperatura o el pH. Las fórmulas se leen como en «El carbono y las fórmulas orgánicas».

### Misma fórmula, distinta molécula
Con las mismas piezas de construcción puedes montar un coche o un barco. Con las moléculas pasa igual. La **fórmula molecular** (*molecular formula*), por ejemplo C₃H₈O, dice qué átomos hay y cuántos, pero no cómo están unidos. Dos moléculas con la misma fórmula y distinta estructura son **isómeros** (*isomers*): sustancias distintas aunque pesen lo mismo (60,1 g por mol en este caso).

### Isómeros estructurales: los átomos se unen en otro orden
En los **isómeros estructurales** (*constitutional isomers*) cambia qué átomo va unido a cuál:

| Tipo | Qué cambia | Ejemplo, misma fórmula |
|---|---|---|
| **De cadena** (*chain isomers*) | La forma del esqueleto de carbonos: recto o ramificado | Butano (CH₃–CH₂–CH₂–CH₃) e isobutano o metilpropano (CH₃–CH(CH₃)–CH₃), los dos C₄H₁₀ |
| **De posición** (*positional isomers*) | El sitio donde va el mismo grupo | 1-propanol (CH₃–CH₂–CH₂–OH) y 2-propanol o isopropanol (CH₃–CH(OH)–CH₃), los dos C₃H₈O |
| **De función** (*functional isomers*) | El grupo funcional: la molécula es de otra familia | Etanol (CH₃–CH₂–OH, un alcohol) y dimetil éter (CH₃–O–CH₃, un éter), los dos C₂H₆O |

Las propiedades cambian porque lo que sujeta a unas moléculas con otras depende de su forma y sus grupos («Enlaces y fuerzas entre moléculas a fondo»). El etanol tiene un hidrógeno unido a oxígeno y forma puentes de hidrógeno: a temperatura ambiente es un líquido. El dimetil éter tiene el oxígeno entre dos carbonos, sin ese hidrógeno, y no forma esos puentes: es un gas. El 1-propanol y el 2-propanol se parecen más, pero tampoco hierven a la misma temperatura, y en una hoja no se cambia uno por otro.

### Estereoisómeros: mismas uniones, otra colocación en el espacio
En los **estereoisómeros** (*stereoisomers*) los átomos están unidos en el mismo orden; cambia hacia dónde apuntan en el espacio. Así los define la guía de la EMA sobre principios activos quirales.

El primer tipo es el **cis-trans** o **geométrico** (*cis-trans isomers*, *geometric isomers*). Un doble enlace no deja girar la molécula por ese punto, como dos tablas unidas con dos clavos. Si cada carbono del doble enlace lleva un grupo distinto del hidrógeno, esos grupos pueden quedar del mismo lado (**cis**, «de este lado» en latín) o en lados opuestos (**trans**, «al otro lado»).

Ejemplo: el 2-buteno, CH₃–CH=CH–CH₃. En el cis-2-buteno los dos CH₃ quedan del mismo lado del doble enlace; en el trans-2-buteno, en lados opuestos. La guía de la FDA de 1992 sobre fármacos estereoisómeros dice que los isómeros geométricos son química y farmacológicamente distintos, se separan sin técnicas quirales y se tratan como fármacos distintos.

### Quiralidad: la mano y el guante
Tus manos son imagen una de la otra en un espejo, pero no coinciden si las pones una encima de la otra: el pulgar queda al lado contrario. Por eso un guante derecho no entra bien en la mano izquierda. Lo que no coincide con su imagen en el espejo es **quiral** (*chiral*). Una taza no lo es.

La causa más común de quiralidad en una molécula es un **carbono asimétrico** o **estereocentro** (*stereocentre*, *stereogenic centre*): un carbono unido a **cuatro grupos distintos**. Sus cuatro enlaces apuntan a las esquinas de una pirámide de cuatro caras (un tetraedro), y con cuatro grupos distintos hay dos maneras de colocarlos, imagen especular una de otra, que no se superponen. Esas dos moléculas son los **enantiómeros** (*enantiomers*).

Cómo encontrar un estereocentro en una fórmula, paso a paso:

1. Descarta los CH₃ y CH₂: ya tienen dos hidrógenos iguales.
2. Descarta los carbonos de un doble enlace.
3. En cada carbono que queda, escribe sus cuatro vecinos y mira si son distintos. Cuenta el grupo entero: CH₃ y CH₂–CH₃ son grupos distintos.

Tres ejemplos reales y un contraejemplo:

| Molécula | Fórmula | El carbono central lleva | ¿Estereocentro? |
|---|---|---|---|
| Ácido láctico | CH₃–CH(OH)–COOH | H, CH₃, OH y COOH | Sí, uno |
| Alanina (un aminoácido) | CH₃–CH(NH₂)–COOH | H, CH₃, NH₂ y COOH | Sí, uno |
| Ibuprofeno | Ar–CH(CH₃)–COOH, donde Ar es el anillo con su cadena | H, CH₃, COOH y el anillo | Sí, uno |
| 2-propanol | CH₃–CH(OH)–CH₃ | H, OH y dos CH₃ | No: dos grupos iguales |

### En qué se parecen y en qué no dos enantiómeros
La guía de la EMA lo resume así: fuera de un ambiente quiral, los enantiómeros tienen propiedades fisicoquímicas idénticas, salvo que giran el plano de la luz polarizada en sentidos opuestos y en la misma cantidad. La FDA dice lo mismo. En la práctica:

- **Iguales:** punto de fusión y de ebullición, densidad, solubilidad en disolventes no quirales como agua, metanol o tolueno, y comportamiento en una HPLC normal. Por eso no se separan destilando ni cristalizando en un disolvente corriente.
- **Distintos:** el sentido en que giran la luz polarizada (la **rotación óptica**, *optical rotation*) y cómo reaccionan o se unen con **otra molécula quiral**.

Según la EMA, los seres vivos están hechos sobre todo de piezas quirales, aminoácidos L y azúcares D: el cuerpo es un ambiente quiral. En un fármaco, eso es lo que importa. Las enzimas y los receptores son como guantes: un enantiómero encaja y el otro entra mal o no entra.

Ejemplos de la FDA: el l-propranolol bloquea los receptores beta y el d-propranolol no; la granulocitopenia (bajada de unos glóbulos blancos) se relaciona con el isómero d de la levodopa. Pero los dos enantiómeros del ibuprofeno son antiinflamatorios. El otro enantiómero puede ser inactivo, tener otro efecto o actuar igual: se estudia, no se supone.

Sobre la talidomida, la ficha técnica autorizada por la EMA dice que tiene un centro quiral, que se usa como racemato de (+)-(R)- y (−)-(S)-talidomida y que es un teratógeno humano potente: produce malformaciones graves. Según la misma ficha, el cuerpo los distingue: se unen a las proteínas de la sangre en un 55 % el (R) y un 65 % el (S).

### R y S, (+) y (−): dos cosas distintas
Hay dos sistemas de nombres y no se deben mezclar.

**R y S** describen la **configuración** (*configuration*), cómo están colocados los cuatro grupos. En versión simplificada:

1. Ordena los cuatro grupos por el número atómico del átomo unido directamente al estereocentro: más número atómico, más prioridad. O (8) va antes que N (7), C (6) y H (1).
2. Si dos grupos empatan (dos carbonos), mira los átomos siguientes de cada uno: gana el que lleva átomos más pesados. Un COOH, con oxígenos, gana a un CH₃, con hidrógenos.
3. Mira la molécula con el grupo de menor prioridad apuntando hacia atrás, lejos de ti.
4. Recorre los otros tres del primero al tercero. Si giras como las agujas del reloj, es **R** (del latín *rectus*, derecha). Si giras al revés, es **S** (*sinister*, izquierda).

En el ácido láctico el orden es OH, COOH, CH₃ y H. La alanina de las proteínas, la L-alanina, es en este sistema la (S)-alanina.

**(+) y (−)** describen un **hecho medido**: hacia dónde gira la luz polarizada una disolución del producto en el **polarímetro** (*polarimeter*). (+) es a la derecha (dextrógiro) y (−) a la izquierda (levógiro). Las minúsculas **d** y **l** son la forma antigua de decir lo mismo, como en el l-propranolol de la FDA. Las mayúsculas D y L de aminoácidos y azúcares son otra cosa: un sistema antiguo de configuración.

**No hay relación directa entre R/S y (+)/(−)**: R y S salen de una regla de dibujo; (+) y (−), de una medida. En la talidomida, el enantiómero R es el (+), pero en otras moléculas el R es el (−). Nunca deduzcas uno del otro.

### Racemato y exceso enantiomérico, con números
Un **racemato** o **mezcla racémica** (*racemate*) es una mezcla 50:50 de los dos enantiómeros. ICH Q6A lo define como mezcla equimolar de dos enantiómeros, sin actividad óptica: los giros se anulan.

Cuando un enantiómero predomina, se mide con el **exceso enantiomérico** (*enantiomeric excess*, ee):

> ee (%) = (mayor − menor) / (mayor + menor) × 100

Y al revés, si conoces el ee y solo hay los dos enantiómeros:

> mayor (%) = (100 + ee) / 2 y menor (%) = (100 − ee) / 2

Un racemato tiene ee = 0 %; un enantiómero puro, ee = 100 %.

**Cuenta 1, de proporciones a ee.** Un lote tiene 99,5 % del enantiómero S y 0,5 % del R. ee = (99,5 − 0,5) / 100 × 100 = 99,0 %. Un 0,5 % del otro resta dos veces: el ee no es 99,5 %.

**Cuenta 2, de ee a proporciones.** Un intermedio sale con ee = 90 %. Mayor = (100 + 90) / 2 = 95 %; menor = (100 − 90) / 2 = 5 %.

**Cuenta 3, con kilos.** Un lote contiene 412 kg del enantiómero deseado y 8 kg del otro (valores de ejemplo). Total 420 kg. ee = (412 − 8) / 420 × 100 = 96,2 %.

**Cuenta 4, cuánto hay del no deseado.** Un lote de 250 kg de API tiene ee = 99,6 % (valor de ejemplo). Menor = (100 − 99,6) / 2 = 0,2 %. En kilos: 250 × 0,2 / 100 = 0,5 kg del enantiómero no deseado en el lote.

### Diastereómeros: cuando hay dos estereocentros
Cada estereocentro puede ser R o S, así que con n estereocentros el **número máximo de estereoisómeros** es 2 elevado a n. Es como lanzar monedas: con una hay 2 resultados; con dos, 4. Se dice «máximo» porque algunas moléculas simétricas tienen menos.

**Cuenta 5.** Con dos estereocentros: 2² = 4, que son RR, SS, RS y SR.

**Cuenta 6.** Con tres estereocentros: 2³ = 8.

RR y SS son imagen especular uno del otro: son enantiómeros. RS y SR, también. Pero RR y RS no: solo cambia uno de los dos centros. Los estereoisómeros que no son enantiómeros se llaman **diastereómeros** (*diastereomers*), según la definición de la EMA.

La diferencia práctica es enorme: los diastereómeros **sí tienen propiedades físicas distintas**, otro punto de fusión y otra solubilidad. La FDA dice que se separan sin técnicas quirales. En planta se pueden separar cristalizando o destilando, cosa imposible con dos enantiómeros.

### Cómo se fabrica un solo enantiómero
La guía de la EMA pide describir con detalle la etapa en la que se forma el estereocentro. En idea, hay tres caminos.

**1. Partir de un material ya quiral.** La naturaleza fabrica aminoácidos y azúcares de una sola mano. Si la materia prima ya trae el estereocentro bien colocado, se conserva durante la síntesis. La EMA pide caracterizar bien esa materia prima, con su pureza estereoisomérica y métodos estereoselectivos validados.

**2. Crear el estereocentro con preferencia por una mano.** Es la síntesis asimétrica (*asymmetric synthesis*). Con un **catalizador quiral** (*chiral catalyst*), una pequeña cantidad de una sustancia quiral que no se gasta, la reacción produce sobre todo uno de los dos enantiómeros. Es como un molde que solo deja salir guantes derechos. La FDA cita la síntesis asimétrica y la separación quiral a gran escala como los avances que permiten fabricar muchos enantiómeros puros a escala comercial.

**3. Fabricar el racemato y separarlo.** Es la **resolución** (*resolution*). La EMA enumera cuatro maneras: cristalización de diastereómeros, resolución cinética (química o con enzimas), cristalización preferencial y cromatografía. La más clásica en planta es la primera.

### La resolución por sales diastereoméricas, como operación de planta
El truco: si cada enantiómero se une a una misma molécula quiral, salen dos sales que ya no son imagen especular. Son diastereómeros y tienen distinta solubilidad. Es como poner a las dos manos el mismo guante derecho: la derecha queda cómoda y la izquierda no.

Supón una amina racémica ficticia, AX-7, y como **agente de resolución** (*resolving agent*) un ácido quiral puro, por ejemplo un enantiómero del ácido mandélico. Ácido y amina forman una sal («Ácidos, bases y pH a fondo»).

1. **Formar la sal.** En el reactor se disuelve el racemato y se añade el agente de resolución a la temperatura de la hoja. Se forman las dos sales diastereoméricas.
2. **Cristalizar.** Se enfría según la rampa de la hoja, a menudo sembrando con cristales de la sal correcta. Cristaliza sobre todo la sal menos soluble. La rampa y la siembra se explican en «Cristalización».
3. **Filtrar y lavar.** En la centrífuga o el filtro Nutsche se separa la torta (la sal buena) de las **aguas madres** (*mother liquor*), que se llevan casi todo el otro enantiómero. Se lava con disolvente frío.
4. **Comprobar.** Se toma muestra para el análisis en proceso (IPC); si no llega, la hoja puede pedir recristalizar. La EMA pide declarar cuántos ciclos de resolución se hacen normalmente.
5. **Liberar la base.** La sal se trata con una base, por ejemplo hidróxido de sodio en agua, y se extrae la amina libre a un disolvente orgánico, como tolueno. El agente de resolución queda en la fase acuosa como sal de sodio.

### Balance de una resolución (valores de ejemplo)
Todo son valores de ejemplo salvo la masa molar del ácido mandélico, C₈H₈O₃: 8 × 12,011 + 8 × 1,008 + 3 × 15,999 = 152,15 g/mol.

- Racemato AX-7: 300 kg, masa molar 150 g/mol. Moles: 300000 g / 150 g/mol = 2000 mol, 1000 mol de cada enantiómero.
- Se carga el agente de resolución para el enantiómero deseado: 1000 mol × 152,15 g/mol = 152,1 kg.
- Masa molar de la sal: 150 + 152,15 = 302,15 g/mol. Sal máxima posible: 1000 mol × 302,15 = 302,1 kg.
- Se aíslan 241,7 kg de sal, el 80 % del máximo.
- Amina contenida en esa sal: 241,7 × 150 / 302,15 = 120,0 kg. Si la liberación y la extracción recuperan el 95 %, quedan 114,0 kg.

La lección del balance: de 300 kg de racemato, como mucho 150 kg son del enantiómero bueno. Los 114,0 kg son un 38 % sobre el racemato, pero un 76 % sobre lo que de verdad se podía sacar.

### Racemización: cuando el producto puro vuelve a ser mezcla
La **racemización** (*racemisation*) es la conversión de un enantiómero en mezcla de los dos, que puede llegar al 50:50. Ocurre sobre todo cuando el estereocentro lleva un hidrógeno fácil de arrancar, por ejemplo junto a un grupo C=O. Un ácido o una base, ayudados por el calor, quitan ese hidrógeno; la molécula queda plana un instante en ese punto, «olvida» de qué mano era y, al recuperar el hidrógeno, puede salir de cualquiera de las dos.

Un lote de ee 99,6 % tiene un 0,2 % del otro enantiómero. Si por un exceso de temperatura baja a ee 98,0 %, pasa a un 1,0 %: cinco veces más impureza, que no se quita lavando ni secando porque se comporta igual que el producto. La racemización es una reacción más y, como todas, va más rápida con más temperatura y avanza con el tiempo («Velocidad de reacción a fondo»). Por eso la hoja limita, en algunas etapas, la temperatura máxima, el pH o el tiempo de espera.

La EMA pide demostrar las precauciones tomadas para mantener la configuración en las etapas siguientes, y que la pureza estereoquímica no cambie de forma inaceptable al fabricar el medicamento ni durante su vida útil. La FDA pide, en los estudios de estabilidad, un método capaz de evaluar la integridad estereoquímica.

### Cómo se controla
- **Rotación óptica.** El polarímetro mide cuánto gira la luz una disolución del producto. Un racemato da cero. Da una sola cifra para toda la muestra: no separa los dos enantiómeros ni los cuenta por separado. La EMA la cita entre los métodos más accesibles, junto con el punto de fusión y la cromatografía de líquidos con fase estacionaria quiral.
- **Cromatografía quiral.** Es una HPLC (repasa «HPLC: cromatografía líquida») con una columna cuyo relleno es quiral. Cada enantiómero se une al relleno de forma distinta, sale a otro tiempo y da su pico; con las áreas se calcula el porcentaje de cada uno.

### Lo que dicen ICH Q6A, ICH Q3A y la EMA
**ICH Q3A(R2)**, la guía de impurezas en nuevos principios activos, deja fuera de su ámbito las impurezas enantioméricas (apartado 2). Su glosario las define como compuestos con la misma fórmula molecular que el principio activo, distinta disposición en el espacio, que son su imagen especular no superponible.

**ICH Q6A**, sobre especificaciones, lo trata en el apartado 3.3.1 d), pruebas para nuevos principios activos quirales:

- Si el principio activo es sobre todo un enantiómero, el otro queda **excluido de los umbrales de identificación y de cualificación** de las guías de impurezas, por la dificultad práctica de cuantificarlo a esos niveles; por lo demás, se trata según sus principios.
- El otro enantiómero **se controla como las demás impurezas**, aunque las limitaciones técnicas pueden impedir aplicar los mismos límites. Puede controlarse en una materia prima o un intermedio, con justificación.
- La **valoración** (*assay*) debe ser enantioselectiva: con un método quiral, o con uno no quiral más un control adecuado de la impureza enantiomérica.
- La **identificación** debe distinguir los dos enantiómeros y el racemato.
- En el medicamento, el control del otro enantiómero se considera necesario salvo que se haya demostrado que la racemización no es significativa durante su fabricación ni en su almacenamiento.

La EMA lo dice sin rodeos: si se elige un solo enantiómero, el otro es una impureza.

En planta manda siempre el procedimiento vigente (SOP): los límites, muestras y criterios de tu proceso son los de tu hoja, no los de estos ejemplos.
`,
  plant: `
Turno de noche. En el reactor ficticio R-305 tienes la sal diastereomérica del intermedio inventado AX-7, recién cristalizada en isopropanol. Todos los valores son de ejemplo.

La hoja pide enfriar de 60 °C a 5 °C en 6 horas, sembrar a 45 °C y mantener 2 horas a 5 °C. Lo haces y anotas las horas. Pasas la suspensión a la centrífuga C-310, escurres y lavas con dos porciones de isopropanol frío. Las aguas madres van al tanque T-312: llevan casi todo el otro enantiómero y no se mezclan con nada sin orden escrita.

El IPC de la torta por HPLC quiral da ee 98,8 %, y la hoja pide 99,0 % como mínimo. No sigues ni recalculas nada por tu cuenta: avisas al encargado. Calidad decide recristalizar, como prevé el procedimiento. La segunda torta da ee 99,7 %.

Para liberar la amina, cargas la sal en el reactor R-306 con tolueno y agua y añades hidróxido de sodio diluido. La hoja limita la temperatura a 25 °C como máximo y pide separar las fases antes de 4 horas, porque en este proceso ficticio la base caliente y las esperas largas racemizan el producto. El TT-306 sube a 27 °C durante la adición. Paras la dosificación, esperas a que baje a 22 °C, reanudas y lo apuntas con la hora. La muestra final del secadero S-320 da ee 99,6 %, dentro de especificación.
`,
  batchRecord: `
- **Formación de la sal**: lote y cantidad del agente de resolución, temperatura de adición, hora de inicio y fin.
- **Cristalización**: rampa de enfriamiento, temperatura de siembra, lote de la siembra, tiempo de mantenimiento.
- **Filtración**: equipo, número de lavados y litros de cada uno, destino de las aguas madres.
- **IPC de pureza enantiomérica**: método («HPLC quiral»), resultado (por ejemplo «ee 99,7 %» o «enantiómero R 0,15 %»), criterio, firma y hora.
- **Recristalización**, si la hay: referencia a la orden o al paso previsto en el procedimiento.
- **Liberación de la base**: temperatura máxima registrada, pH de la fase acuosa, tiempo total con la base.
- **Desviaciones**: cualquier exceso de temperatura, pH o tiempo en una etapa limitada por racemización, con la hora y el aviso dado.
- **Especificación final**: «Rotación óptica específica» y «Enantiómero no deseado» con sus límites.
`,
  terms: [
    { es: "Isómero estructural", en: "Constitutional isomer", def: "Isómero en el que los átomos se unen en distinto orden: de cadena, de posición o de función." },
    { es: "Estereoisómero", en: "Stereoisomer", def: "Isómero con los mismos enlaces y distinta colocación de los átomos en el espacio." },
    { es: "Isómeros cis y trans", en: "Cis-trans isomers", def: "Estereoisómeros de un doble enlace con los grupos del mismo lado (cis) o en lados opuestos (trans)." },
    { es: "Estereocentro", en: "Stereocentre", def: "Átomo cuyo cambio de dos grupos crea otro estereoisómero; típicamente un carbono con cuatro grupos distintos." },
    { es: "Enantiómero", en: "Enantiomer", def: "Cada una de las dos formas de una molécula quiral que son imagen especular no superponible." },
    { es: "Diastereómero", en: "Diastereomer", def: "Estereoisómero que no es imagen especular de otro; tiene propiedades físicas distintas." },
    { es: "Configuración R o S", en: "R/S configuration", def: "Nombre que dice cómo están colocados los cuatro grupos de un estereocentro, según su prioridad." },
    { es: "Rotación óptica", en: "Optical rotation", def: "Giro del plano de la luz polarizada; (+) a la derecha y (−) a la izquierda." },
    { es: "Racemato", en: "Racemate", def: "Mezcla equimolar de dos enantiómeros; no gira la luz polarizada." },
    { es: "Exceso enantiomérico", en: "Enantiomeric excess (ee)", def: "(mayor − menor) / (mayor + menor) × 100: cuánto predomina un enantiómero." },
    { es: "Agente de resolución", en: "Resolving agent", def: "Sustancia quiral pura que forma sales diastereoméricas con un racemato para poder separarlo." },
    { es: "Racemización", en: "Racemisation", def: "Conversión de un enantiómero en mezcla de los dos, favorecida por calor, ácido o base." },
    { es: "Catalizador quiral", en: "Chiral catalyst", def: "Sustancia quiral que, en poca cantidad y sin gastarse, hace que se forme sobre todo un enantiómero." },
    { es: "Impureza enantiomérica", en: "Enantiomeric impurity", def: "El enantiómero no deseado presente en un principio activo desarrollado como un solo enantiómero." },
  ],
  quiz: [
    {
      kind: "number",
      q: "El HPLC quiral de un intermedio da un 97 % del enantiómero S y un 3 % del R. ¿Cuál es el exceso enantiomérico?",
      answer: 94,
      tolerance: 0.001,
      unit: "%",
      explain: "ee = (97 − 3) / (97 + 3) × 100 = 94 %. El 3 % del otro enantiómero resta dos veces.",
    },
    {
      kind: "number",
      q: "Un API sale con ee = 98,6 % y solo contiene los dos enantiómeros. ¿Qué porcentaje hay del enantiómero no deseado?",
      answer: 0.7,
      tolerance: 0.01,
      unit: "%",
      explain: "Menor = (100 − ee) / 2 = (100 − 98,6) / 2 = 0,7 %; el deseado es el 99,3 %.",
    },
    {
      kind: "number",
      q: "Un lote de 480 kg de API tiene ee = 99,0 %. ¿Cuántos kilos del enantiómero no deseado contiene?",
      answer: 2.4,
      tolerance: 0.01,
      unit: "kg",
      explain: "Menor = (100 − 99,0) / 2 = 0,5 %. En kilos: 480 × 0,5 / 100 = 2,4 kg.",
    },
    {
      kind: "number",
      q: "Un lote contiene 495 kg del enantiómero deseado y 5 kg del otro (valores de ejemplo). ¿Cuál es el exceso enantiomérico?",
      answer: 98,
      tolerance: 0.001,
      unit: "%",
      explain: "Total 500 kg. ee = (495 − 5) / 500 × 100 = 98 %.",
    },
    {
      kind: "number",
      q: "Una molécula tiene tres estereocentros. ¿Cuál es el número máximo de estereoisómeros posibles?",
      answer: 8,
      tolerance: 0.001,
      unit: "estereoisómeros",
      explain: "Cada estereocentro puede ser R o S: 2 elevado a 3 = 8 como máximo.",
    },
    {
      kind: "number",
      q: "Se resuelven 400 kg de un racemato por cristalización de sales diastereoméricas. ¿Cuántos kilos del enantiómero deseado se podrían obtener como máximo, aunque todo saliera perfecto?",
      answer: 200,
      tolerance: 0.001,
      unit: "kg",
      explain: "Un racemato es 50:50: solo la mitad es el enantiómero deseado, 400 / 2 = 200 kg. El resto sale con las aguas madres.",
    },
    {
      kind: "choice",
      q: "Una molécula con dos estereocentros puede existir como RR, SS, RS y SR. Un compañero pregunta qué pareja se puede separar por cristalización normal, sin técnica quiral.",
      options: [
        "RR y SS, porque tienen distinta configuración en los dos centros",
        "RS y SR, porque son las formas mezcladas de la molécula",
        "RR y RS, porque son diastereómeros y tienen distinta solubilidad",
        "Ninguna: todos los estereoisómeros tienen las mismas propiedades",
      ],
      answer: 2,
      explain: "RR y RS no son imagen especular: son diastereómeros, con propiedades físicas distintas. RR y SS, igual que RS y SR, son parejas de enantiómeros y se comportan igual en un disolvente normal.",
    },
    {
      kind: "choice",
      q: "En la liberación de la amina, la hoja dice «T ≤ 25 °C y separar fases antes de 4 h». La sonda de temperatura del reactor marca 31 °C y la separación se ha retrasado. ¿Qué riesgo químico hay detrás de esos límites?",
      options: [
        "Que el enantiómero racemice y aumente el otro, que no se quita lavando",
        "Que el producto cambie de fórmula molecular y pese más en el secadero",
        "Que el tolueno pase a ser quiral y gire la luz en el polarímetro",
        "Que la sal diastereomérica se vuelva a formar dentro de la fase acuosa",
      ],
      answer: 0,
      explain: "Calor, base y tiempo favorecen la racemización: sube el enantiómero no deseado y, como se comporta igual que el producto, no se elimina lavando ni secando. Se para, se anota y se avisa.",
    },
    {
      kind: "choice",
      q: "Según ICH Q6A, en un principio activo desarrollado como un solo enantiómero, ¿cómo se trata el enantiómero opuesto?",
      options: [
        "No hace falta controlarlo porque tiene las mismas propiedades físicas",
        "Solo se controla si el polarímetro marca un giro distinto de cero",
        "Se controla siempre con los mismos umbrales de identificación que el resto",
        "Se controla como las demás impurezas, pero excluido de esos umbrales",
      ],
      answer: 3,
      explain: "El apartado 3.3.1 d) de ICH Q6A lo excluye de los umbrales de identificación y cualificación por la dificultad de cuantificarlo, pero pide controlarlo como las demás impurezas.",
    },
    {
      kind: "choice",
      q: "El certificado de un intermedio dice «(R)-AX-7» y un compañero deduce que su disolución girará la luz a la derecha, (+). ¿Qué le dices?",
      options: [
        "Que tiene razón: R significa siempre dextrógiro, igual que d",
        "Que no se puede deducir: R/S es configuración y (+)/(−) es medida",
        "Que girará a la izquierda, porque R y (+) son siempre contrarios",
        "Que no girará nada, porque un solo enantiómero no es ópticamente activo",
      ],
      answer: 1,
      explain: "R y S salen de una regla de prioridades; (+) y (−) salen del polarímetro. En la talidomida el R es (+), pero en otras moléculas el R es (−).",
    },
  ],
};
