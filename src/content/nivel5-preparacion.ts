import type { Lesson } from "./types";

export const preparacionMuestraAFondo: Lesson = {
  slug: "preparacion-muestra-a-fondo",
  level: 5,
  order: 8,
  title: "Preparación de la muestra a fondo: de la muestra al vial que entra en el equipo",
  titleEn: "Sample preparation in depth: from the laboratory sample to the vial that goes into the instrument",
  minutes: 40,
  summary:
    "Qué le pasa a tu muestra desde que llega al laboratorio hasta que entra en el equipo: homogeneizar y cuartear, moler, secar o corregir a base seca, disolver, diluir, filtrar y guardar la disolución. Con las cuentas para preparar una disolución y para deshacer las diluciones hasta el resultado del lote, y los errores que convierten un lote bueno en uno rechazado.",
  body: `
En «Preparación de la muestra en el laboratorio» viste la lista de pasos. Aquí verás cada uno por dentro: por qué se hace, qué puede salir mal y cómo se calcula el resultado. El enrase está en «Material volumétrico a fondo», la pesada en «Balanzas y pesada a fondo» y los patrones en «Reactivos, patrones y disoluciones a fondo».

### Por qué te importa a ti, que estás en planta
Tú bajas al laboratorio un frasco con 500 g de producto del secadero. El cromatógrafo de líquidos (HPLC) que mide la riqueza solo acepta unas gotas de un líquido limpio. Entre tu frasco y esas gotas hay que mezclar, dividir, pesar unos miligramos, disolver, diluir, filtrar y llenar un vial. Cada paso puede cambiar el número que te llega, y a veces explica por qué el análisis tarda.

### Por qué hay que preparar la muestra
Casi ningún equipo analiza un sólido tal como sale del secadero. El HPLC necesita una disolución sin partículas; un equipo que mide metales, la muestra destruida y disuelta en ácido.

La preparación también mete error. La guía de la Organización Mundial de la Salud (OMS) para laboratorios de control (*WHO TRS 1052, anexo 4*, apéndice 3) separa el error en el de la **medida** del equipo y el de la **preparación** (pesadas y diluciones). En su ejemplo de una riqueza por HPLC da a cada uno la mitad del error total permitido; pesar 50,0 mg con una incertidumbre de 0,2 mg ya aporta un 0,4 %, y coger 1,0 mL con pipeta graduada, un 0,74 %.

La guía de la FDA sobre resultados fuera de especificación (*Investigating OOS Test Results*, 2022) admite que una investigación concluya que la muestra se preparó mal y no representaba al lote; una pista son resultados muy distintos entre porciones de la misma muestra.

### Los nombres de cada muestra
Por el camino, la muestra cambia de nombre. El reglamento europeo de muestreo de piensos (Reglamento (CE) 152/2009, anexo I) lo explica con palabras sencillas:

| Nombre | Qué es |
|---|---|
| Muestra elemental (*increment*) | Lo que se toma en un punto del lote |
| Muestra global (*aggregate sample*) | La suma de las muestras elementales |
| Muestra reducida (*reduced sample*) | Parte representativa de la global, obtenida al reducirla |
| Muestra final (*final sample*) | Parte de la reducida que va al laboratorio |

La guía de muestreo de la OMS (*TRS 929, anexo 4*) llama muestra final a la ya lista para el método. Lo que se pesa para un ensayo es la **porción de ensayo** (*test portion*). La guía de la OMS para laboratorios (*TRS 1052, anexo 4*, 6.7) dice que es habitual dividir la muestra en tres partes: para analizar, para confirmar y de reserva. Por eso te piden más cantidad de la que parece necesaria.

### Homogeneizar y reducir: el cuarteo paso a paso
Antes de dividir, se **homogeneiza** (*homogenize*): se mezcla para que todas las partes sean iguales. Un polvo se separa con el movimiento, como las nueces que suben en un bote de frutos secos que se agita. El reglamento 152/2009 pide además deshacer los grumos. Después se **reduce**, de dos formas:

**1. Cono y cuarteo** (*coning and quartering*). Es manual. Los pasos, tal como los describen el manual de muestreo de aduanas de la Comisión Europea y el glosario de la IUPAC (vistos solo en el buscador):

1. Echar la muestra sobre una superficie limpia, plana y que no absorba.
2. Formar con una pala un montón en forma de cono.
3. Aplastar la punta hasta dejar una torta redonda y plana.
4. Dividir la torta en cuatro partes iguales con una cruz.
5. Apartar dos cuartos opuestos.
6. Juntar los otros dos cuartos, volver a formar el cono y repetir hasta tener la cantidad necesaria.

Cada vuelta guarda dos de cuatro cuartos: **la mitad**.

**2. Divisores de muestra** (*sample dividers*). Aparatos que reparten la muestra en partes aproximadamente iguales; los hay fijos y rotatorios. El reglamento 152/2009 (anexo II) **no recomienda** el cono y cuarteo, porque las partes pueden tener un error de división elevado, y prefiere los divisores mecánicos. Qué se usa lo dice el procedimiento de tu laboratorio.

**Cuenta 1. Cuántos cuarteos.** De 500 g a unos 30 g. Cada cuarteo deja la mitad:

- 1.º: 500 / 2 = 250 g
- 2.º: 250 / 2 = 125 g
- 3.º: 125 / 2 = 62,5 g
- 4.º: 62,5 / 2 = **31,25 g**

Con **4 cuarteos** quedan unos 31 g; con 5 quedarían 15,6 g, demasiado poco.

### Moler y tamizar en el laboratorio
Si el sólido viene en terrones o cristales grandes, se muele (*grinding*) en un mortero o un molino pequeño y se tamiza (*sieving*) para que la porción sea uniforme y se disuelva rápido. El reglamento 152/2009 enumera los riesgos:

- **Calentamiento.** No se deben usar molinos que calienten la muestra de forma perceptible; para materiales sensibles al calor recomienda moler a mano.
- **Pérdida de volátiles y humedad.** Moler y tamizar lo más rápido posible, con poca exposición al aire y a la luz. Si la humedad cambia de forma significativa, se determina antes y después.
- **Contaminación.** El instrumental no debe aportar lo que se quiere medir (el reglamento lo dice de los oligoelementos, metales en cantidades pequeñas).
- **Cambio de forma cristalina.** La FDA (guía de polimorfismo de 2007) cita la molienda y la micronización entre los procesos que pueden transformar una forma cristalina en otra («Polimorfismo, sales y solvatos a fondo»).

Seguridad: el polvo de un principio activo se respira. La nota técnica de prevención (NTP) 432 del Instituto Nacional de Seguridad y Salud en el Trabajo (INSST) pide trabajar en vitrina siempre que sea posible.

### Secar antes o corregir después: tal cual y base seca
Un sólido lleva algo de agua o disolvente. El resultado se puede dar:

- **Tal cual** (*as is*): sobre la muestra con su agua.
- **Base seca** o **sustancia seca** (*dried basis*): como si no tuviera agua ni volátiles, para que el agua no cuente como producto que falta.

El método dice si se **seca antes** una porción (en estufa y a enfriar en un desecador, un recipiente cerrado con un secante, antes de pesar) o si se **analiza tal cual y se corrige** con el agua o la pérdida por secado (*loss on drying*, LOD) de otra porción. La OMS (*TRS 1052, anexo 4*, apéndice 3) distingue en sus fórmulas el cálculo con y sin esta corrección. Si hay un 1,8 % de volátiles, en 100 g hay 98,2 g de sólido seco: es una regla de tres.

**Cuenta 2. Conversión a base seca (valores de ejemplo).** Riqueza tal cual: 97,6 %. Pérdida por secado: 1,8 %.

Riqueza en base seca = 97,6 × 100 / (100 − 1,8) = 97,6 × 100 / 98,2 = **99,4 %**

Con una especificación de 98,0 a 102,0 % en base seca, cumple: comparar el 97,6 % tal cual con ese límite sería un error.

Si la muestra gana humedad del aire entre las dos medidas, la corrección no cuadra: el frasco se cierra enseguida.

### Disolver la muestra
**Elegir el disolvente.** El método fija el **diluyente** (*diluent*): uno en el que el producto se disuelva del todo, no se degrade y que el equipo acepte. No se cambia «porque disuelve mejor».

**Formas de disolver.** La guía de la FDA sobre validación de métodos (*Analytical Procedures and Methods Validation*, 2015) pide que el método describa la preparación: agitación, ultrasonidos (*sonication*) y su tiempo, extracción, dilución.

- **Agitar** a mano o con agitador.
- **Ultrasonidos**: el matraz va a un baño que vibra a una frecuencia que el oído no oye y deshace los grumos.
- **Calor suave**, solo si el método lo permite. La NTP 433 del INSST pide calentar los líquidos inflamables con sistemas que trabajen por debajo de su temperatura de autoignición, como un baño maría, y meter los recipientes en los baños calientes poco a poco.

**Comprobar que se ha disuelto todo.** Se mira el matraz a contraluz: ni partículas ni grumos. Lo que no se disuelve no se mide, y el resultado sale bajo. La OMS cita la extracción incompleta durante la preparación como fuente de error que el desarrollo del método debe descartar.

**Temperatura ambiente antes de enrasar.** El matraz aforado está calibrado a una temperatura. Si la disolución se ha calentado por cualquier motivo, se espera a que vuelva a temperatura ambiente y solo entonces se enrasa.

Seguridad: según la NTP 205 del INSST, la exposición a ultrasonidos por contacto afecta sobre todo a las manos; recomienda tapar los equipos que no se usan.

**Cuenta 3. Cuánto pesar.** El método pide una disolución de 0,50 mg/mL en un matraz de 100 mL (valores de ejemplo).

Masa = 0,50 mg/mL × 100 mL = **50,0 mg**

**Cuenta 4. La concentración real.** Nadie pesa 50,0 mg exactos. La balanza registra 50,8 mg, y ese es el peso que vale en el cálculo:

C = 50,8 mg / 100 mL = **0,508 mg/mL**

### Diluir para caer dentro del intervalo
Cada método mide bien solo entre una concentración mínima y una máxima de lo que llega al equipo: la ICH Q2(R2) lo llama **intervalo de trabajo** (*working range*). El glosario de la ICH Q14 distingue el de la muestra antes de prepararla y el del equipo; la dilución lleva de uno a otro.

El factor de cada paso es volumen final entre volumen tomado; en una cadena, los factores se multiplican.

**Cuenta 5. Factor total (valores de ejemplo).** De la disolución de 0,508 mg/mL se toman 2,0 mL y se llevan a 25 mL; de esta se toma 1,0 mL y se lleva a 20 mL.

- Primera dilución: 25 / 2,0 = 12,5
- Segunda dilución: 20 / 1,0 = 20
- Factor total: 12,5 × 20 = **250**

**Cuenta 6. Concentración final.**

C final = 0,508 / 250 = 0,002032 mg/mL = **2,03 µg/mL**

Con un intervalo de ejemplo de 1 a 5 µg/mL, cae dentro. Si no, manda el método: no se inventa una dilución.

### Deshacer las diluciones: del número del equipo al porcentaje del lote
El equipo da una concentración en el vial. El resultado del lote se calcula al revés: multiplicar por el factor, pasar a masa y dividir entre lo que se pesó.

**Cuenta 7. Riqueza (valores de ejemplo).** Se pesan 50,8 mg en un matraz de 100 mL; se diluye 5,0 mL a 50 mL (factor 10). El HPLC mide 0,0497 mg/mL en el vial.

- En el matraz de 100 mL: 0,0497 × 10 = 0,497 mg/mL
- Producto en el matraz: 0,497 × 100 = 49,7 mg
- Riqueza tal cual: 49,7 / 50,8 × 100 = **97,8 %**

Con una pérdida por secado de 0,9 %: 97,83 × 100 / 99,1 = **98,7 %** en base seca.

**Cuenta 8. Un metal en partes por millón (valores de ejemplo).** Se digieren 0,500 g de muestra y se llevan a 50 mL; se toman 5 mL y se llevan a 25 mL (factor 5). El equipo mide 4,0 µg/L.

- En los 50 mL: 4,0 × 5 = 20 µg/L
- Metal total: 20 µg/L × 0,050 L = 1,0 µg
- En la muestra: 1,0 µg / 0,500 g = **2,0 µg/g**, es decir 2,0 ppm

Un factor equivocado multiplica el error entero. Por eso la OMS (*TRS 1052, anexo 4*, 6.39) pide revisar cálculos y transcripciones de forma sistemática.

### Filtrar, extraer y centrifugar
**Filtrar antes de inyectar.** Las partículas atascan la columna del HPLC. Se usa un **filtro de jeringa** (*syringe filter*): la jeringa empuja la disolución a través de una membrana pequeña.

- **Tamaño de poro**: de fracciones de micra. El manual de la FDA para sus laboratorios cita 0,45 µm o menos para filtrar el medio de un ensayo de disolución.
- **Material compatible**: la membrana no debe disolverse en el diluyente ni retener el producto. Notas técnicas de fabricantes, vistas solo en el buscador, muestran membranas de nailon que retienen algunos principios activos y otras que no. La FDA pide que el método indique el tipo de filtro.
- **Descartar los primeros mililitros**: al principio la membrana retiene algo de producto o suelta sustancias propias; las primeras gotas no representan la disolución. Cuántos mililitros, lo fija el método validado.

**Extraer.** Si el producto está mezclado con otras cosas, a veces hay que sacarlo antes. En la **extracción líquido-líquido** se agita con un segundo líquido que no se mezcla con el primero y el producto pasa a uno de ellos, como en planta («Extracción líquido-líquido y separación de fases»). En la **extracción en fase sólida** (*solid phase extraction*, SPE) la disolución pasa por un cartucho que retiene unas sustancias y deja pasar otras; el manual de la FDA la incluye entre las columnas de cromatografía.

**Centrifugar.** Una centrífuga de laboratorio separa un sólido que no se disuelve del líquido claro, que es el que se analiza. La NTP 433 pide repartir la carga de forma simétrica y que no pueda arrancar con la tapa abierta ni abrirse girando.

### Derivatizar y digerir: solo la idea
- **Derivatizar** (*derivatization*): transformar el producto en otro compuesto que el equipo pueda medir. El manual de la FDA lo describe para cromatografía de gases, con compuestos que no se evaporan o se descomponen con el calor.
- **Digerir** (*digestion*): destruir la muestra con ácidos concentrados y calor para que los metales queden disueltos. El manual de la FDA describe la digestión en microondas en recipiente cerrado, con ácido nítrico hasta unos 200 °C. Así se preparan las muestras para las impurezas elementales («Impurezas a fondo»). La NTP 433 pide hacer las digestiones ácidas en vitrina, con guantes y gafas.

### Cuánto dura una disolución preparada
El producto disuelto puede degradarse con el tiempo o con la luz. La ICH Q2(R2) y la Q14 piden que el estudio de **robustez** (*robustness*) incluya la **estabilidad de las disoluciones** de muestra y de patrón durante el tiempo que dura el análisis, y la FDA pide que el método indique la estabilidad de las disoluciones y cómo se guardan.

Una secuencia de HPLC puede durar muchas horas. Los viales esperan su turno en el **automuestreador** (*autosampler*), que pincha cada vial e inyecta, así que el último se inyecta mucho después de prepararse. Si el método dice «estable 24 horas» (valor de ejemplo), una disolución de anteayer no vale. Los viales llevan un tapón con septo, una membrana que la aguja atraviesa; si cierra mal, el disolvente se evapora y la disolución se concentra.

La FDA y la OMS piden **guardar** las disoluciones, si son estables, cuando un resultado sale raro, hasta acabar la investigación. Reinyectarlas ayuda a separar un fallo del equipo de uno de preparación.

### Blancos, réplicas y duplicados
- **Blanco** (*blank*): se prepara igual que la muestra, pero sin muestra. El del diluyente demuestra que no hay picos que se confundan con el producto; el de reactivos de una digestión mide lo que aportan los ácidos. El manual de la FDA incluye blancos de reactivos en sus prácticas, y la OMS pide anotar todos los valores, también los del blanco.
- **Réplica** (*replicate*): repetir una medida. Inyectar dos veces el mismo vial comprueba el equipo, no la preparación.
- **Preparaciones independientes**, a menudo llamadas duplicados (*duplicate preparations*): pesar dos porciones distintas y prepararlas por separado de principio a fin. La FDA pide preparaciones replicadas en los ensayos cuantitativos, y la ICH Q2(R2) define una **determinación** como el valor de una sola preparación.

**Ejemplo (valores de ejemplo).** Preparación A: 99,1 %. Preparación B: 97,0 %. Diferencia: 2,1 %. El método fija que no deben diferir más de 1,0 %. No cumplen.

Qué no se hace: dar la media, 98,05 %, como si nada. La FDA advierte que promediar esconde la variabilidad. Qué se hace: se guardan las disoluciones, se revisan pesadas, volúmenes, disolución y cálculos, y se busca la causa. La OMS (*TRS 957, anexo 1*, 18.3) dice que, si se identifica un error, el resultado se invalida y se repite el análisis; si no se encuentra causa, el resultado no se puede descartar sin más.

### Errores típicos y su efecto en el resultado
| Error | Efecto en la riqueza |
|---|---|
| No homogeneizar o cuartear mal | Al azar, según la porción |
| Muestra higroscópica abierta | Más agua: tal cual, sale baja |
| Moler calentando | Pierde volátiles; puede cambiar la forma cristalina |
| No disolver todo | Baja |
| Enrasar en caliente | Alta |
| Filtro que retiene el producto o no descartar las primeras gotas | Baja |
| Vial mal tapado | Alta, por evaporación |
| Disolución fuera de su estabilidad | Baja la riqueza y suben las impurezas |
| Factor de dilución equivocado en el cálculo | Error grande, multiplicado |

**Caso narrado (todo ficticio).** Lote LT-27 del principio activo de ejemplo PX-5, especificación de riqueza de 98,0 a 102,0 % en base seca. Riqueza real: 99,2 %. La muestra llega con terrones. La analista acorta el baño de ultrasonidos y no mira el matraz a contraluz: un 1,8 % del producto queda sin disolver.

Resultado: 99,2 × (1 − 0,018) = **97,4 %**. Fuera de especificación. El lote queda retenido.

Se reinyecta la misma disolución y da lo mismo: no es el equipo. En el matraz guardado hay sólido. Error identificado, resultado invalidado y nueva preparación según el método: 99,1 %. El lote se salva, con dos días de retraso, un informe y formación para la analista.

### Lo que te toca a ti
Tú no preparas la disolución, pero sí la muestra de la que sale: tomarla según el procedimiento, cerrarla enseguida, identificarla y avisar si lleva terrones, costras o un color raro.

Las cantidades, tiempos y límites de esta lección son de ejemplo. En planta y en el laboratorio manda siempre el procedimiento vigente (SOP).
`,
  plant: `
Turno de mañana. Descargas el secadero de bandejas ficticio ST-212 con el intermedio de ejemplo QZ-9 y tomas la muestra de liberación según el procedimiento: tres puntos, bandejas de arriba, del medio y de abajo. En la bandeja de abajo ves terrones duros y algo más oscuros.

Recuerdas lo que pide la OMS al muestrear: si una parte del material tiene un aspecto distinto, no se mezcla con el resto, porque puede esconder un problema. Así que llenas un frasco aparte con los terrones, lo etiquetas como tal y lo anotas en la hoja.

En el laboratorio, Marta, la analista, homogeneiza la muestra normal, la reduce con el divisor de muestra hasta unos 30 g y pesa dos porciones independientes. Antes de enrasar espera a que los matraces vuelvan a temperatura ambiente después del baño de ultrasonidos, y filtra descartando los primeros mililitros como dice el método. Las dos preparaciones dan 99,3 % y 99,1 % en base seca: cumplen y coinciden.

Los terrones se analizan aparte: tienen más humedad. Calidad abre una incidencia y pide revisar el secado de la bandeja inferior. Gracias a que no los mezclaste, el problema se vio y el lote no salió con una zona mal secada escondida en la media.

Todo es ficticio: equipos, códigos, producto, personas y números.
`,
  batchRecord: `
- **Toma de muestra.** Producto, lote, equipo y punto de toma, fecha, hora, cantidad e iniciales. Sin esto, el laboratorio no puede relacionar su resultado con tu lote.
- **Aspecto de la muestra.** Terrones, costras húmedas, color distinto, partículas extrañas. La guía de muestreo de la OMS (*TRS 929, anexo 4*) los cita como señales de falta de uniformidad. Anótalo: el analista lo leerá antes de homogeneizar.
- **Muestras aparte.** Si separas una porción de aspecto distinto, anótalo con su propio número de muestra.
- **Cierre del envase.** Si el producto es higroscópico o lleva disolvente, el envase se cierra enseguida; si se quedó abierto, dilo.
- **Resultado del laboratorio.** Número de análisis, resultado, si es tal cual o en base seca, especificación y decisión. Compara siempre con el límite en la misma base.
- **Resultado en investigación.** Si te dicen que un resultado se está investigando, el lote queda retenido: no continúes la etapa que depende de él hasta que calidad lo apruebe.
`,
  terms: [
    { es: "Muestra global", en: "Aggregate sample", def: "Suma de las muestras tomadas en distintos puntos de un mismo lote." },
    { es: "Muestra reducida", en: "Reduced sample", def: "Parte representativa de la muestra global, obtenida al reducirla." },
    { es: "Porción de ensayo", en: "Test portion", def: "Cantidad de muestra que se pesa o se mide para hacer un ensayo." },
    { es: "Cono y cuarteo", en: "Coning and quartering", def: "Reducción manual: cono, torta plana, cuatro partes y se apartan dos opuestas." },
    { es: "Divisor de muestra", en: "Sample divider", def: "Aparato que reparte una muestra en partes aproximadamente iguales." },
    { es: "Base seca", en: "Dried basis", def: "Resultado calculado como si la muestra no tuviera agua ni volátiles." },
    { es: "Tal cual", en: "As is", def: "Resultado calculado sobre la muestra con su agua y sus volátiles." },
    { es: "Diluyente", en: "Diluent", def: "Disolvente que fija el método para disolver y diluir la muestra." },
    { es: "Factor de dilución", en: "Dilution factor", def: "Volumen final entre volumen tomado; en una cadena, se multiplican." },
    { es: "Intervalo de trabajo", en: "Working range", def: "Concentraciones más baja y más alta en las que el método da resultados fiables." },
    { es: "Filtro de jeringa", en: "Syringe filter", def: "Membrana pequeña que quita las partículas antes de inyectar la disolución." },
    { es: "Estabilidad de la disolución", en: "Solution stability", def: "Tiempo durante el que una disolución preparada da el mismo resultado." },
    { es: "Blanco", en: "Blank", def: "Preparación hecha igual que la muestra, pero sin muestra." },
    { es: "Preparaciones independientes", en: "Independent (duplicate) preparations", def: "Dos porciones pesadas y preparadas por separado de principio a fin." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Tienes 800 g de muestra y necesitas unos 50 g. Cada cono y cuarteo deja la mitad. ¿Cuántos cuarteos haces?",
      answer: 4,
      tolerance: 0.001,
      unit: "cuarteos",
      explain: "800 / 2 = 400; 400 / 2 = 200; 200 / 2 = 100; 100 / 2 = 50 g. Son 4 cuarteos.",
    },
    {
      kind: "choice",
      q: "Al preparar una muestra para el HPLC, la analista filtra la disolución con un filtro de jeringa. ¿Qué hace con las primeras gotas?",
      options: [
        "Las inyecta, porque son las más limpias del filtro",
        "Las devuelve al matraz para no perder producto",
        "Las descarta, en la cantidad que fija el método",
        "Las guarda como blanco del filtro para el final",
      ],
      answer: 2,
      explain: "Al principio la membrana puede retener producto o soltar sustancias propias, así que las primeras gotas no representan la disolución. El método validado fija cuánto se descarta.",
    },
    {
      kind: "number",
      q: "Una riqueza da 98,1 % tal cual. El agua de la muestra es 1,2 %. ¿Cuál es la riqueza en base seca, en %?",
      answer: 99.3,
      tolerance: 0.002,
      unit: "%",
      explain: "98,1 × 100 / (100 − 1,2) = 98,1 × 100 / 98,8 = 99,29, que se expresa como 99,3 %.",
    },
    {
      kind: "number",
      q: "El método pide pesar unos 40 mg y llevar a 50 mL. La balanza marca 40,6 mg. ¿Qué concentración real tiene la disolución, en mg/mL?",
      answer: 0.812,
      tolerance: 0.002,
      unit: "mg/mL",
      explain: "Se usa el peso real: 40,6 mg / 50 mL = 0,812 mg/mL.",
    },
    {
      kind: "choice",
      q: "Dos preparaciones independientes de la misma muestra dan 99,1 % y 97,0 %, y el método exige que no difieran más de 1,0 %. ¿Qué se hace?",
      options: [
        "Se guardan las disoluciones y se investiga la causa",
        "Se informa la media, 98,05 %, porque cumple",
        "Se informa solo 99,1 % por ser el más alto",
        "Se repite solo la preparación de 97,0 % y se olvida",
      ],
      answer: 0,
      explain: "La FDA advierte que promediar esconde la variabilidad. Se guardan las disoluciones, se revisan pesadas, volúmenes, disolución y cálculos; si se encuentra el error, se invalida y se repite.",
    },
    {
      kind: "number",
      q: "Tomas 5 mL de una disolución y los llevas a 100 mL. Después tomas 2 mL de esa y los llevas a 10 mL. ¿Cuál es el factor de dilución total?",
      answer: 100,
      tolerance: 0.001,
      unit: "",
      explain: "Primera dilución: 100 / 5 = 20. Segunda: 10 / 2 = 5. Total: 20 × 5 = 100.",
    },
    {
      kind: "choice",
      q: "La analista disuelve la muestra en el baño de ultrasonidos y la disolución ha quedado templada. ¿Qué hace antes de enrasar el matraz aforado?",
      options: [
        "Enrasa enseguida para no perder disolvente",
        "Añade un poco más de diluyente para compensar",
        "Lo mete en el congelador para ganar tiempo",
        "Espera a que vuelva a temperatura ambiente",
      ],
      answer: 3,
      explain: "El matraz está calibrado a una temperatura. Si se enrasa en caliente, al enfriar falta volumen y la disolución queda más concentrada: el resultado sale alto.",
    },
    {
      kind: "number",
      q: "Pesas 49,6 mg de muestra en un matraz de 100 mL y diluyes 5 mL a 50 mL (factor 10). El HPLC mide 0,0485 mg/mL en el vial. ¿Cuál es la riqueza tal cual, en %?",
      answer: 97.8,
      tolerance: 0.002,
      unit: "%",
      explain: "0,0485 × 10 = 0,485 mg/mL en el matraz; × 100 mL = 48,5 mg de producto; 48,5 / 49,6 × 100 = 97,78, que se expresa como 97,8 %.",
    },
    {
      kind: "choice",
      q: "Un compañero propone moler la muestra en un molino rápido que la calienta, para ganar tiempo. ¿Qué riesgo tiene?",
      options: [
        "Ninguno, porque el calor no afecta a un sólido seco",
        "Perder volátiles y cambiar la forma cristalina",
        "Solo que el molino se desgaste más deprisa",
        "Que la muestra pese más al salir del molino",
      ],
      answer: 1,
      explain: "El reglamento europeo 152/2009 pide no usar molinos que calienten la muestra, y la FDA cita la molienda entre los procesos que pueden cambiar la forma cristalina.",
    },
    {
      kind: "number",
      q: "Digieres 0,250 g de muestra y la llevas a 25 mL. Tomas 10 mL y los llevas a 50 mL (factor 5). El equipo mide 2,0 µg/L de un metal. ¿Cuántos µg/g (ppm) hay en la muestra?",
      answer: 1,
      tolerance: 0.002,
      unit: "µg/g",
      explain: "2,0 × 5 = 10 µg/L en los 25 mL; 10 × 0,025 L = 0,25 µg de metal; 0,25 / 0,250 g = 1 µg/g, es decir 1 ppm.",
    },
  ],
};
