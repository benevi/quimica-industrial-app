import type { Lesson } from "./types";

export const aspectoAFondo: Lesson = {
  slug: "aspecto-y-solubilidad-a-fondo",
  level: 8,
  order: 8,
  title: "Aspecto, color, solubilidad y claridad a fondo",
  titleEn: "Appearance, colour, solubility and clarity in depth",
  minutes: 36,
  summary:
    "Qué pide ICH Q6A sobre la descripción y la identificación, cómo se describe un sólido, por qué un cambio de color, unos puntos negros o unos grumos son el primer aviso de un problema de planta, cómo se mira en condiciones controladas, cómo se mide el color con la absorbancia, qué significan los términos de solubilidad, cómo influyen la temperatura y el pH, qué es la claridad de una solución y qué hace el operador para que el lote salga con el aspecto que pide la especificación.",
  body: `
En «Aspecto, color y solubilidad» viste los ensayos en pocas líneas. Aquí verás por qué están en la especificación, qué dice de tu lote un color raro y cómo evitarlo en planta. Cuánto soluto cabe en un disolvente y la curva de solubilidad están en «Disoluciones y solubilidad a fondo: la base de la cristalización»; aquí no se repiten.

### El ensayo más sencillo de la especificación
La **especificación** (*specification*) de un principio activo es la lista de ensayos que tiene que pasar cada lote, con sus límites. La guía ICH Q6A, que dice qué ensayos lleva la especificación de un principio activo nuevo, llama **ensayos universales** (*universal tests*) a los que se aplican a todos: la descripción o aspecto, la identificación, la riqueza y las impurezas.

Sobre los dos primeros, Q6A (apartado 3.2.1) dice:

- **Descripción** (*description*): una afirmación **cualitativa**, es decir, con palabras y no con números, sobre el **estado** (sólido, líquido) y el **color** del principio activo. Y añade: si alguna de estas características **cambia durante el almacenamiento**, el cambio se investiga y se toman las medidas oportunas.
- **Identificación** (*identification*): tiene que demostrar que la sustancia es la que dice la etiqueta y, a ser posible, distinguirla de compuestos de estructura parecida que puedan estar presentes. Q6A pone como ejemplo la espectroscopia infrarroja, que ves en «Espectroscopia a fondo: lo que la luz cuenta de una molécula (UV-Vis e infrarrojo)». Una sola retención en cromatografía no se considera específica.

El aspecto **no demuestra** qué sustancia es: muchísimos productos son «polvo blanco». Pero se hace con los ojos, en segundos, y lo puede hacer cualquiera: tú al descargar el secadero, el almacén al recibir un bidón, el laboratorio al abrir la muestra. Es el **primer filtro**.

Para el medicamento terminado, Q6A (apartado 3.2.2) va un paso más allá: si el color cambia durante el almacenamiento, puede ser adecuado un **procedimiento cuantitativo**, es decir, medir el color con un número en vez de describirlo. Esa idea la verás más abajo con la absorbancia.

### Cómo se describe un sólido
Una descripción típica de especificación es una frase como «polvo cristalino blanco o casi blanco» (valor de ejemplo). Cada palabra tiene su sentido:

| Parte de la frase | Qué describe | Ejemplos |
|---|---|---|
| **Forma física** | Cómo se presenta el sólido | Polvo, polvo cristalino, cristales, gránulos, escamas |
| **Color** | El tono que se ve | Blanco, casi blanco, blanquecino, amarillo pálido |
| **Otros rasgos** | Lo que no debería haber, o lo que se espera | «Exento de partículas extrañas», «sin grumos», «higroscópico» |

Algunas palabras que conviene entender:

- **Cristalino** (*crystalline*): se ven, a veces con lupa, caras planas y brillos; el sólido tiene orden, como contaba «Polimorfismo, sales y solvatos a fondo: el mismo producto en distintas formas sólidas».
- **Casi blanco** (*almost white* u *off-white*): admite un ligerísimo tono, pero no es «amarillento». La frontera la marca el método del laboratorio, no la impresión de cada uno.
- **Partícula extraña** (*foreign particle*): un punto negro, una fibra, un trocito de plástico o de metal.

### Por qué el aspecto es el primer aviso de un problema de planta
El aspecto no mide con exactitud, pero detecta muchas averías antes que otros ensayos. ICH Q7 dice algo parecido de la limpieza: la inspección visual puede detectar contaminación grosera concentrada en zonas pequeñas que el muestreo y el análisis no detectarían (apartado 12.76).

Avisos típicos y causas **posibles** (la causa real la decide la investigación):

| Lo que ves | Qué puede haber detrás |
|---|---|
| **Tono amarillo, rosado o pardo** en un producto que debería ser blanco | **Degradación**: la molécula se ha roto o ha reaccionado, por ejemplo con el oxígeno del aire (**oxidación**), con la luz o por un calor excesivo. Muchas veces el producto de degradación tiene color aunque esté en muy poca cantidad |
| **Puntos negros o grises** | **Desgaste de equipo**: restos de una junta, del cierre del eje del agitador, de una manguera o de una cuchilla; óxido; producto quemado pegado a una pared caliente que se ha desprendido |
| **Fibras o trocitos de plástico** | Restos de bolsas, de telas o mangas filtrantes, de guantes o de material de limpieza |
| **Grumos o terrones** | **Humedad**: producto mal secado, o seco pero que ha tomado agua del aire en un envase mal cerrado. También una descarga o un tamizado que no se hizo como dice la hoja |
| **Color irregular**, zonas más oscuras | Mezcla mal homogeneizada, o una parte del lote que estuvo más caliente (por ejemplo, la que tocó la pared del secadero) |

ICH Q1A, la guía de estabilidad, apoya la primera fila: en los **ensayos de estrés** (*stress testing*) del principio activo se estudia el efecto de la temperatura, la humedad, la oxidación y la luz (fotólisis), y entre los «cambios significativos» de un medicamento en estabilidad está no cumplir los criterios de aspecto, como el color.

Q7 pide que las superficies del equipo en contacto con el producto **no alteren su calidad** (apartado 5.11) y que los lubricantes, fluidos de calefacción o refrigerantes no lo toquen de forma que lo alteren (apartado 5.14). Y define la **contaminación** como la introducción no deseada de impurezas químicas o microbiológicas, o de **materia extraña**, durante la producción, el muestreo, el envasado, el almacenamiento o el transporte.

### Mirar bien: la observación en condiciones controladas
«Lo he mirado y está blanco» no basta. Dos personas, con dos luces distintas, ven colores distintos. Por eso el laboratorio describe el aspecto **siempre igual**:

- Con la **misma cantidad** de muestra, en el mismo tipo de recipiente o superficie.
- Con la **misma luz** y sobre un **fondo** fijo. La guía de la FDA sobre inspección de partículas visibles en inyectables (borrador de 2021) pide que los puestos de inspección manual tengan un fondo de uno o más colores sólidos, por ejemplo **negro y blanco**, para dar contraste, y que la **intensidad de la luz** sea la adecuada y esté cualificada. El fondo blanco hace resaltar los puntos oscuros; el negro, las fibras claras y los brillos.
- Por personas **formadas**. La misma guía pide inspectores con visión de cerca normal (con gafas si hacen falta) y sin alteraciones de la visión de los colores.
- Comparando, si el método lo dice, con una **muestra de referencia** o con un lote patrón, uno al lado del otro.

La FDA recuerda además que detectar una partícula a simple vista es **probabilístico**: depende, entre otras cosas, de su tamaño y su forma. Una partícula pequeña puede verse en una inspección y no en la siguiente. Por eso se registra lo que se vio, se guarda la muestra y se avisa. La guía es para inyectables, no para un API en polvo, pero sus ideas valen para cualquier inspección visual seria.

### El color de una solución y las escalas de comparación
El color de un polvo blanco esconde mucho: una pequeña cantidad de impureza coloreada se nota más cuando el producto se **disuelve**. Por eso muchas especificaciones piden, además del aspecto del sólido, el **color de la solución** (*colour of solution*).

La idea general es sencilla. Se disuelve una cantidad pesada del producto en un volumen fijo de disolvente y la solución se compara con una **escala de soluciones de referencia** (*reference solutions*), una serie de soluciones de color conocido, cada una algo más intensa que la anterior, como la carta de colores de una tienda de pinturas. Se miran en tubos iguales, con la misma altura de líquido, luz y fondo. El resultado es del tipo «no más intensamente coloreada que la referencia número tal».

Las farmacopeas tienen métodos detallados para esas escalas; sus textos son de pago y no se reproducen aquí. Lo que importa entender es que **la concentración manda**. Una solución con el doble de producto tiene, aproximadamente, el doble de color. Si el método dice «1,0 g en 20 mL» y alguien disuelve 2,0 g, el resultado sale peor sin que el lote haya cambiado.

### Cuentas de la solución de ensayo
Las concentraciones se dan casi siempre como **masa por volumen**:

- **mg/mL**: miligramos de producto por mililitro de solución. 1 mg/mL es lo mismo que 1 g/L.
- **% p/v** (*weight/volume*): gramos en 100 mL. Un 5 % p/v son 5 g en 100 mL, es decir, 50 mg/mL.

**Cuenta 1.** El método pide disolver 1,0 g y completar a 20 mL (valores de ejemplo). 1,0 g son 1000 mg; 1000 / 20 = **50 mg/mL**, o un 5 % p/v.

**Cuenta 2.** Hay que preparar 40 mL de solución al 2,5 % p/v. En 100 mL irían 2,5 g; en 40 mL, 2,5 × 40 / 100 = **1,0 g**.

### La absorbancia: el color con un número
Comparar con los ojos depende de una persona. Para más objetividad, o para seguir el color de un lote durante meses, se mide con un **espectrofotómetro** en la zona **visible**, la que ven tus ojos. Cómo funciona, qué son la transmitancia y la absorbancia y la ley de Lambert-Beer están en «Espectroscopia a fondo: lo que la luz cuenta de una molécula (UV-Vis e infrarrojo)». Aquí solo se aplica.

Una solución se ve coloreada porque **absorbe** parte de la luz visible y a tus ojos llega el resto. Una solución amarillenta absorbe sobre todo azul y violeta, la luz de onda más corta del visible. Su absorbancia en esa zona **crece con la intensidad del color**.

Un criterio posible (valores de ejemplo): «absorbancia a 420 nm de la solución al 5 % p/v, en cubeta de 1 cm: no más de 0,150».

**Cuenta 3.** Un lote da A = 0,120. Cumple. ¿Cuánta luz pasa? T = 10 elevado a −0,120 = 0,759, un **75,9 %**.

**Cuenta 4.** Otro lote da A = 0,210: no cumple. Pasa el 61,7 % de la luz. En polvo quizá los dos parezcan «casi blancos»; el número los separa.

**Cuenta 5.** Por la ley de Lambert-Beer la absorbancia es proporcional a la concentración. Si el analista prepara por error la solución al doble de concentración, el lote de la cuenta 3 daría 0,120 × 2 = 0,240, y parecería fuera de especificación. Es uno de los errores de laboratorio que se buscan primero cuando un resultado no cumple.

### La solubilidad descrita con palabras
En la descripción de un principio activo aparece a menudo su **solubilidad** (*solubility*) en varios disolventes, con palabras como «fácilmente soluble en agua», «poco soluble en etanol» o «prácticamente insoluble en heptano».

Detrás hay una idea concreta: **cuántos mililitros de disolvente hacen falta para disolver un gramo de producto**. Cuanto menos disolvente, más soluble. La escala va de «muy soluble» (basta muy poco disolvente) a «prácticamente insoluble» (hace falta una cantidad enorme). La lección corta «Aspecto, color y solubilidad» muestra la escala; los límites exactos de cada término están en las farmacopeas, que son de pago, y en esta lección no se han podido comprobar en un documento gratuito, así que aquí no se repiten las cifras.

**Cuenta 6.** El laboratorio pone 200 mg de producto y añade agua poco a poco, agitando. Se disuelve del todo al llegar a 5,0 mL. Pasado a gramos: 0,200 g en 5,0 mL son 5,0 / 0,200 = **25 mL por gramo**, o 40 mg/mL. Con ese número se busca el término que corresponde en la tabla del método.

El resultado depende de la **temperatura**, que fija el método, y de agitar y esperar lo suficiente: un sólido puede tardar en disolverse aunque quepa.

### Qué cambia la solubilidad: temperatura y pH
**La temperatura.** En casi todos los sólidos, la solubilidad **sube al calentar** (lo explica la lección de disoluciones citada al principio). Un dato de solubilidad sin temperatura no sirve de nada.

**El pH.** Muchos principios activos son **bases** (aminas) o **ácidos**. Una amina en agua ácida toma un protón y queda con carga: se comporta como su **sal**, y las sales suelen disolverse mucho mejor en agua que la forma sin carga. Por eso el mismo producto puede ser «poco soluble en agua» y disolverse bien en ácido diluido. Lo viste en «Ácidos, bases y pH a fondo» y en «Polimorfismo, sales y solvatos a fondo».

La guía ICH M9 lo tiene en cuenta: para clasificar un principio activo como **altamente soluble**, su dosis más alta tiene que disolverse en 250 mL o menos de medio acuoso en todo el intervalo de **pH de 1,2 a 6,8**, a 37 ± 1 °C. La solubilidad se mide al menos a pH 1,2, 4,5 y 6,8, con tres repeticiones en cada condición, y se usa la **más baja** para clasificar. Q6A pone el mismo ejemplo de cuenta en su glosario:

**Cuenta 7.** Un compuesto tiene una solubilidad mínima de 1,0 mg/mL y una dosis máxima de 400 mg. Volumen necesario: 400 / 1,0 = **400 mL**. Como supera 250 mL, se considera poco soluble a esos efectos.

### Claridad y opalescencia de la solución
Una solución verdadera es **transparente**, aunque tenga color. Si se ve lechosa o turbia, hay algo **sin disolver** en partículas tan pequeñas que no se ven una a una, pero que desvían la luz: es la **opalescencia** (*opalescence*). El ensayo de **claridad** (*clarity*) mira justo eso.

Como con el color, la idea es comparar con **suspensiones de referencia** de turbidez conocida, en tubos iguales y con la misma luz. El resultado se expresa como «clara» o «no más opalescente que la referencia tal». Los métodos detallados también están en las farmacopeas y no se reproducen aquí.

Qué puede enturbiarla, como idea: **restos insolubles** (sales que no se lavaron, ayuda filtrante que pasó el filtro, fibras de una tela rota), **un producto de degradación** menos soluble o un **error de laboratorio** (disolvente equivocado, poca agitación, vidrio sucio).

### Partículas visibles
Las **partículas visibles** (*visible particulates*) son las que se ven a simple vista en la solución o en el sólido. La guía de la FDA las define como partículas móviles sin disolver, distintas de burbujas de gas, presentes sin querer, y las reparte en tres grupos:

| Tipo | De dónde vienen | Ejemplo en una planta de API (como idea) |
|---|---|---|
| **Inherentes** (*inherent*) | Son propias del producto | Raro en un API en polvo; más típico de algunos medicamentos biológicos |
| **Intrínsecas** (*intrinsic*) | Del equipo, la formulación o el envase: tubos, filtros, juntas, tapones | Un trozo de junta del filtro-secador |
| **Extrínsecas** (*extrinsic*) | Del entorno, ajenas al proceso | Una fibra de ropa, un insecto, pintura del techo |

Según la FDA, las extrínsecas pueden indicar un problema de buenas prácticas de la instalación, y la investigación debe examinar las partículas para entender su **origen** y fijar acciones correctoras y preventivas. Como idea, el laboratorio las aísla y las mira al microscopio o por infrarrojo para saber si son caucho, plástico, metal o producto quemado.

### Qué pasa con un lote de aspecto no conforme
Si el aspecto no cumple la especificación, el resultado es un **fuera de especificación** (*out of specification*, OOS). Q7 (apartado 11.15) pide investigarlo y documentarlo según un procedimiento, con análisis de los datos, valoración de si hay un problema significativo, reparto de acciones correctoras y conclusiones. Cómo se hace paso a paso está en «Resultados OOS y OOT: cómo se investigan» (nivel 10).

En el aspecto, la investigación tiene algunas particularidades:

- **Primero el laboratorio**: ¿se preparó bien la solución? ¿la luz, el fondo y el tubo eran los del método?
- **Después la planta**: tu hoja de producción. Temperaturas del secado, cortes de nitrógeno o de vacío, alarmas, cambios de junta, limpiezas. Tus comentarios permiten encontrar la causa.
- **La muestra se conserva**: el punto negro aislado es una prueba; nadie lo tira ni lo «limpia».
- **Mezclar no vale**: según Q7 (apartado 8.41), un lote fuera de especificación no se mezcla con otros para que cumpla.

El destino del lote lo decide la unidad de calidad, no el operador. Si la causa está en planta, se abre una desviación, como cuenta «Desviaciones y CAPA a fondo: de «ha pasado algo» a «no vuelve a pasar»».

### Cómo previene el operador los fallos de aspecto
Casi todo lo que estropea el aspecto se evita en planta:

- **Limpieza.** Q7 (apartado 5.21) pide procedimientos de limpieza detallados e **inspeccionar la limpieza del equipo justo antes de usarlo**, si es posible. Una costra de producto quemado de un lote anterior es el punto negro del siguiente.
- **Estado del equipo.** Juntas, cierres del eje, telas filtrantes y mangueras se desgastan. Si ves una junta mordida o una tela rota, avisa antes de cargar. Q7 pide equipos cerrados cuando sea adecuado y, si se abren, precauciones para no contaminar (apartado 5.15).
- **Inertización.** El nitrógeno quita el oxígeno que oxida el producto y lo amarillea. Hacer los ciclos completos y vigilar el oxígeno es también proteger el color; lo tienes en «Inertización a fondo: por qué, cuánto y cómo se calcula».
- **Temperatura de secado.** Un exceso de temperatura, aunque sea en la camisa, puede degradar el producto que toca la pared. Respeta la consigna y anota cualquier desviación; ver «El secado a fondo: la curva de secado y cuándo está seco».
- **Secado completo y envase cerrado.** Un producto húmedo o un envase mal cerrado dan grumos. Q7 pide envases limpios, que protejan contra el deterioro y la contaminación y que no alteren el producto (apartados 9.20 y 9.21). Cierra las bolsas como diga el procedimiento; ver «Envasado y etiquetado a fondo: el último paso antes de que el lote salga».
- **Mirar y anotar.** Describe el aspecto al descargar con palabras exactas: «polvo blanco con dos puntos negros de 1 mm aproximadamente» ayuda; «ok», no.

En planta manda siempre el procedimiento vigente (SOP) y la especificación aprobada de tu producto. Los productos, límites y cifras de esta lección son de ejemplo.
`,
  plant: `
Turno de mañana en la planta ficticia. El producto ficticio **LX-27** se cristaliza en el reactor **R-520**, se separa en la centrífuga **C-530** y se seca en el secadero de vacío **SD-540**. Su especificación (valores de ejemplo) dice: «polvo cristalino blanco o casi blanco, exento de partículas extrañas» y «absorbancia a 420 nm de la solución al 5 % p/v: no más de 0,150».

Al descargar el secadero, ves el polvo sobre la bandeja de muestreo, con la lámpara de la sala y sobre fondo blanco, como dice la hoja. Lo notas algo más amarillento que el lote anterior y ves tres puntos negros pequeños. No los quitas: anotas «polvo cristalino ligeramente amarillento, tres puntos negros de menos de 1 mm» y avisas al jefe de turno.

El laboratorio mide la solución: A = 0,210 a 420 nm. No cumple. Antes de nada revisa sus pesadas y su dilución: la solución se preparó bien. Calidad abre la investigación. En tu hoja aparecen dos datos: durante el secado saltó una alarma de temperatura de la camisa, que llegó a 75 °C durante 40 minutos con la consigna en 55 °C, y en el lote anterior se cambió la junta de la tapa del secadero. El laboratorio aísla los puntos negros y los identifica como un elastómero parecido al de la junta.

Mantenimiento encuentra un borde de la junta nueva rozando con la tapa y corrige el montaje. Calidad decide el destino del lote según el procedimiento. Tus anotaciones, con hora y detalle, han permitido encontrar las dos causas.
`,
  batchRecord: `
- **Inspección del equipo antes de cargar**: limpieza visual del reactor, la centrífuga y el secadero, con firma y hora; estado de juntas y telas si la hoja lo pide.
- **Inertización**: ciclos realizados y oxígeno medido.
- **Secado**: consigna y temperatura real de producto y camisa, vacío, tiempo; cualquier alarma, con hora y valores.
- **Aspecto en la descarga**: descripción con palabras exactas (color, forma, grumos, partículas), condiciones de observación si la hoja las pide, y comentario si algo no es lo habitual.
- **Muestras**: identificación, hora, envase y destino (laboratorio, muestra de retención).
- **Envasado**: tipo de bolsa y bidón, cierre, protección de la luz si procede, etiquetado.
- **Resultados del laboratorio que te lleguen**: aspecto, color de la solución, claridad, solubilidad; si algo no cumple, número de la investigación o desviación.
`,
  terms: [
    { es: "Aspecto o descripción", en: "Appearance / description", def: "Afirmación con palabras sobre el estado, la forma y el color del producto; ensayo universal de la especificación según ICH Q6A." },
    { es: "Identificación", en: "Identification", def: "Ensayo que demuestra que la sustancia es la que dice la etiqueta, por ejemplo por infrarrojo." },
    { es: "Ensayo universal", en: "Universal test", def: "Ensayo que se aplica a todos los principios activos: aspecto, identificación, riqueza e impurezas." },
    { es: "Partícula extraña", en: "Foreign particle", def: "Partícula que no es el producto: punto negro, fibra, plástico, metal." },
    { es: "Degradación", en: "Degradation", def: "Rotura o reacción de la molécula del producto por calor, luz, oxígeno o agua; a menudo da color." },
    { es: "Oxidación", en: "Oxidation", def: "Reacción con el oxígeno del aire u otro oxidante; causa típica de amarilleo." },
    { es: "Higroscópico", en: "Hygroscopic", def: "Que toma agua del aire con facilidad; puede formar grumos." },
    { es: "Color de la solución", en: "Colour of solution", def: "Ensayo que compara el color de una solución del producto con una escala de referencia o lo mide con absorbancia." },
    { es: "Solución de referencia", en: "Reference solution", def: "Solución o suspensión de color o turbidez conocidos con la que se compara la muestra." },
    { es: "Claridad", en: "Clarity", def: "Transparencia de una solución; una solución clara no tiene sólido en suspensión." },
    { es: "Opalescencia", en: "Opalescence", def: "Aspecto lechoso de una solución por partículas sin disolver que desvían la luz." },
    { es: "Partículas visibles", en: "Visible particulates", def: "Partículas sin disolver que se ven a simple vista; pueden ser inherentes, intrínsecas o extrínsecas." },
    { es: "Porcentaje masa/volumen", en: "Weight/volume percent (% p/v)", def: "Gramos de producto en 100 mL de solución; 5 % p/v son 50 mg/mL." },
  ],
  quiz: [
    {
      kind: "number",
      q: "El método pide disolver 1,5 g de producto y completar a 30 mL. ¿Qué concentración tiene la solución de ensayo, en mg/mL?",
      answer: 50,
      tolerance: 0.01,
      unit: "mg/mL",
      explain: "1,5 g son 1500 mg; 1500 / 30 = 50 mg/mL, que es lo mismo que un 5 % p/v.",
    },
    {
      kind: "number",
      q: "Hay que preparar 20 mL de solución al 2,5 % p/v del producto. ¿Cuántos gramos hay que pesar?",
      answer: 0.5,
      tolerance: 0.01,
      unit: "g",
      explain: "Un 2,5 % p/v son 2,5 g en 100 mL; en 20 mL, 2,5 × 20 / 100 = 0,5 g.",
    },
    {
      kind: "number",
      q: "La solución de un lote da una absorbancia de 0,180 a 420 nm. ¿Qué porcentaje de la luz pasa por la muestra (T = 10 elevado a menos A, en %)?",
      answer: 66.1,
      tolerance: 0.01,
      unit: "%",
      explain: "T = 10 elevado a −0,180 = 0,661, es decir, pasa el 66,1 % de la luz.",
    },
    {
      kind: "number",
      q: "En el ensayo de solubilidad, 200 mg de producto se disuelven del todo al añadir 5,0 mL de agua. ¿Cuántos mL de agua hacen falta por gramo de producto?",
      answer: 25,
      tolerance: 0.01,
      unit: "mL/g",
      explain: "0,200 g en 5,0 mL: 5,0 / 0,200 = 25 mL por gramo, o 40 mg/mL. Con ese número se busca el término en la tabla del método.",
    },
    {
      kind: "number",
      q: "Un principio activo tiene una solubilidad mínima de 0,5 mg/mL entre pH 1,2 y 6,8, y su dosis más alta es de 300 mg. ¿Qué volumen hace falta para disolver esa dosis, en mL?",
      answer: 600,
      tolerance: 0.01,
      unit: "mL",
      explain: "300 / 0,5 = 600 mL. Supera los 250 mL de ICH M9, así que no se consideraría altamente soluble.",
    },
    {
      kind: "choice",
      q: "Según ICH Q6A, ¿por qué el aspecto no basta para demostrar que el lote es el producto correcto?",
      options: [
        "Porque es cualitativo y muchas sustancias distintas tienen el mismo aspecto",
        "Porque el aspecto solo se mide en el medicamento terminado, no en el API",
        "Porque Q6A no incluye el aspecto entre los ensayos universales del API",
        "Porque el aspecto solo se comprueba durante los estudios de estabilidad",
      ],
      answer: 0,
      explain: "La descripción es una afirmación con palabras sobre estado y color; la identidad la demuestra un ensayo específico como el infrarrojo.",
    },
    {
      kind: "choice",
      q: "Al descargar el secadero ves que el producto, que suele ser blanco, tiene un tono amarillento. ¿Cuál de estas causas de planta es la más probable?",
      options: [
        "Un tamizado demasiado fino al final de la descarga",
        "Un exceso de nitrógeno en la inertización del secadero",
        "Una centrifugación más larga de lo habitual en la C-530",
        "Oxidación o degradación por aire o por calor excesivo",
      ],
      answer: 3,
      explain: "El color suele venir de productos de degradación, por ejemplo por oxígeno o por temperatura alta; el nitrógeno precisamente protege de la oxidación.",
    },
    {
      kind: "choice",
      q: "Encuentras tres puntos negros en la bandeja de muestreo. ¿Qué haces?",
      options: [
        "Los retiras con una espátula limpia para que la muestra salga bien",
        "Mezclas bien el lote para que queden repartidos y no se noten",
        "Los dejas, describes lo que ves en la hoja y avisas al jefe de turno",
        "Esperas al resultado del laboratorio antes de anotar nada en la hoja",
      ],
      answer: 2,
      explain: "Las partículas son la prueba para encontrar su origen (junta, equipo, entorno): se registran tal cual, se conservan y se avisa.",
    },
    {
      kind: "choice",
      q: "Un lote da color de la solución fuera de especificación. En la revisión, el laboratorio ve que preparó 2,0 g en 20 mL en vez de 1,0 g. ¿Qué significa?",
      options: [
        "Que el lote está degradado y hay que rechazarlo enseguida",
        "Que puede ser un error de laboratorio: con doble concentración, doble color",
        "Que hay que mezclar el lote con otro que tenga menos color",
        "Que el método está mal y debe cambiarse a 2,0 g en 20 mL",
      ],
      answer: 1,
      explain: "Por Lambert-Beer la absorbancia es proporcional a la concentración; un error de preparación demostrable se investiga en la fase de laboratorio del OOS.",
    },
    {
      kind: "choice",
      q: "Un lote envasado hace semanas presenta grumos al abrir el bidón, aunque salió del secadero con humedad correcta. ¿Qué es lo más probable?",
      options: [
        "Que el producto haya cambiado de color por la luz del almacén",
        "Que la centrífuga dejara la torta demasiado seca y compacta",
        "Que la inertización del reactor se hiciera con demasiados ciclos",
        "Que el envase no estuviera bien cerrado y el producto tomara agua",
      ],
      answer: 3,
      explain: "Un producto higroscópico toma agua del aire si la bolsa o el bidón no cierran bien; Q7 pide envases que protejan contra el deterioro.",
    },
  ],
};
