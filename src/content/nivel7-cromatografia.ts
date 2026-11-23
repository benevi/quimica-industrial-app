import type { Lesson } from "./types";

export const cromatografiaAFondo: Lesson = {
  slug: "cromatografia-a-fondo",
  level: 7,
  order: 6,
  title: "Cromatografía a fondo: cómo se separan las sustancias y cómo se lee un cromatograma",
  titleEn: "Chromatography in depth: how substances separate and how to read a chromatogram",
  minutes: 38,
  summary:
    "Por qué cada sustancia sale de la columna a su hora, qué dice cada parte de un cromatograma, cómo se calculan k′, α, resolución, platos, cola y repetibilidad, qué es la idoneidad del sistema, cómo se integra un pico y cómo se pasa de áreas a riqueza e impurezas.",
  body: `
En la lección anterior viste la idea general. Aquí vas a leer un cromatograma con números, hacer las cuentas del laboratorio y entender cuándo un resultado se puede dar por bueno. Vale igual para la cromatografía líquida (HPLC) y la de gases (GC).

### La idea desde cero: una calle de tiendas
Imagina una calle llena de tiendas. Por la acera avanza una corriente de gente, siempre a la misma velocidad: es la **fase móvil** (*mobile phase*), el líquido o el gas que empuja la muestra por la columna. Las tiendas no se mueven: son la **fase estacionaria** (*stationary phase*), el relleno fijo de la columna.

Suelta en la entrada tres grupos de paseantes a la vez. Al primero no le interesa ninguna tienda y llega al final el primero. Al segundo le gustan un poco: entra, sale, entra en otra, y llega más tarde. Al tercero le encantan y llega el último. En la acera todos avanzan igual; dentro de una tienda nadie avanza. Lo único que los distingue es **qué parte del tiempo pasan dentro de las tiendas**.

En la columna, cada molécula va y viene entre las dos fases: es el **reparto** (*partition*). El manual de formación de analistas de la agencia del medicamento de Estados Unidos (FDA) define la cromatografía como un método de separación en el que los componentes se reparten entre una fase quieta y otra que se mueve en una dirección. Cada sustancia tiene su propia afinidad por la fase estacionaria y por eso sale a una hora distinta.

### El cromatograma, pieza a pieza
El detector, a la salida de la columna, mide lo que sale y lo dibuja frente al tiempo: es el **cromatograma** (*chromatogram*).

| Parte | Qué es | Qué te dice |
|---|---|---|
| **Línea base** (*baseline*) | La línea casi plana cuando solo sale fase móvil | El «cero» del detector; si sube, baja u ondula, algo no va bien |
| **Ruido** (*noise*) | Pequeñas oscilaciones de la línea base | Pone el límite a lo pequeño que se puede ver |
| **Pico** (*peak*) | La «montaña» que aparece cuando sale una sustancia | Que ahí ha salido algo |
| **Tiempo de retención** (*retention time*, tR) | Tiempo desde la inyección hasta la cima del pico | **Qué** es, comparándolo con un patrón |
| **Tiempo muerto** (*dead time*, t0) | Tiempo que tarda en salir algo que no se retiene nada | Lo que tarda la fase móvil en recorrer la columna |
| **Altura** (*peak height*) | Distancia de la línea base a la cima | Cantidad, pero se usa menos |
| **Área** (*peak area*) | Superficie entre el pico y la línea base | **Cuánto** hay |

Dos ideas clave:

1. **La identidad sale del tiempo.** Si el patrón sale a 6,00 minutos y tu muestra tiene un pico a 6,00 minutos en las mismas condiciones, muy probablemente es tu producto. Solo «muy probablemente»: dos sustancias pueden salir a la vez, y por eso el método se valida.
2. **La cantidad sale del área.** El manual de la FDA lo resume así: las áreas y las alturas suelen ser proporcionales a la cantidad que sale; se usan sobre todo las áreas, que pueden ser menos exactas si un pico interfiere con otro.

El tiempo muerto es el paseante que no entra en ninguna tienda; la FDA lo ve como una pequeña perturbación de la línea base, el frente de disolvente. Restándolo al tiempo de retención obtienes el **tiempo de retención corregido** (*adjusted retention time*, t′R = tR − t0): el tiempo que la sustancia ha pasado «dentro de las tiendas».

Las impurezas se nombran a menudo por su **tiempo de retención relativo** (*relative retention time*, RRT): su tiempo entre el del producto. Una impureza a 5,22 min con el producto a 6,00 min tiene un RRT de 5,22 / 6,00 = 0,87.

### Un cromatograma de ejemplo
Para las cuentas usaremos este cromatograma inventado de un principio activo ficticio, el KR-7, con una impureza A muy cerca (todos son valores de ejemplo):

| Dato | Valor |
|---|---|
| Tiempo muerto, t0 | 1,20 min |
| Impureza A: tiempo de retención | 5,40 min |
| Impureza A: anchura en la base | 0,36 min |
| KR-7: tiempo de retención | 6,00 min |
| KR-7: anchura en la base, W | 0,40 min |
| KR-7: anchura a media altura, Wh | 0,235 min |
| KR-7: anchura al 5 % de la altura, W0,05 | 0,30 min |
| KR-7: distancia del frente del pico a la vertical de la cima, al 5 % de la altura, f | 0,13 min |

La anchura en la base no es donde el pico «parece» acabar: la FDA la define como la distancia entre los puntos donde las tangentes a los dos lados del pico cortan la línea base.

### Las fórmulas, de dónde salen
La FDA publicó en noviembre de 1994 la guía *Reviewer Guidance: Validation of Chromatographic Methods*, a la que su guía de 2015 sobre procedimientos analíticos remitía para la idoneidad del sistema. La FDA la **retiró el 25 de noviembre de 2024** y ya no está en su web, así que aquí no se citan sus cifras. Las fórmulas salen de dos documentos de la FDA vigentes: su manual de análisis de plaguicidas (*Pesticide Analytical Manual*, sección 602, enero de 1994) y su manual de formación en análisis de medicamentos (*ORA Lab Manual*, volumen IV, sección 3, 2022).

### Factor de retención k′
También se llama **factor de capacidad** (*capacity factor*). Mide cuánto se retiene una sustancia, comparando el tiempo que pasa en las tiendas con el que pasa en la acera:

> k′ = (tR − t0) / t0

Cuenta para el KR-7: k′ = (6,00 − 1,20) / 1,20 = 4,80 / 1,20 = **4,0**. Pasa cuatro veces más tiempo retenido que avanzando.

Cuenta para la impureza A: k′ = (5,40 − 1,20) / 1,20 = 4,20 / 1,20 = **3,5**.

Un k′ cercano a cero significa que el pico sale pegado al tiempo muerto, mezclado con lo que no se retiene. El manual de plaguicidas de la FDA dice que un k de 2 a 10 para el componente más retenido suele ser óptimo, aunque puede ser mayor en separaciones difíciles.

### Factor de selectividad α
Compara la retención de dos picos vecinos. Se pone siempre el mayor arriba, así que α vale 1 o más:

> α = k′2 / k′1

Cuenta: α = 4,0 / 3,5 = **1,14**. Si α fuera 1, las dos sustancias saldrían a la vez. La FDA la describe como la capacidad de una columna con su fase móvil para dar distinto reparto a dos sustancias.

### Resolución Rs
La resolución (*resolution*) mide si dos picos están separados de verdad. Tiene en cuenta la distancia entre las cimas y lo anchos que son:

> Rs = 2 × (tR2 − tR1) / (W1 + W2)

Cuenta: Rs = 2 × (6,00 − 5,40) / (0,36 + 0,40) = 1,20 / 0,76 = **1,58**.

¿Qué significa ese número? Con dos picos ideales (en forma de campana) de anchura parecida, con Rs = 1,0 cada pico mete en el terreno del otro un 2,3 % de su área; con Rs = 1,5, un 0,13 % (separados hasta la línea base); con Rs = 2,0, menos de un 0,01 %. Por eso una impureza pequeña junto a un pico grande necesita mucha resolución: el 2,3 % de un pico enorme puede superar a la impureza entera.

El manual de plaguicidas de la FDA pide una resolución mayor que 1 para reducir el error de cuantificación. Su manual de verificación de métodos (*ORA-LAB.5.4.5*) acepta, si el método no fija otra cosa, una resolución mayor que 1,3 como prueba de que no hay interferencia. Manda lo que fije cada método.

### Número de platos teóricos N
Mide la **eficiencia** (*efficiency*) de la columna: lo estrechos que salen los picos para el tiempo que tardan. Más platos, picos más finos. Hay dos fórmulas, según la anchura que midas:

> Con la anchura en la base: N = 16 × (tR / W)²
>
> Con la anchura a media altura: N = 5,54 × (tR / Wh)²

Cuenta por la base: N = 16 × (6,00 / 0,40)² = 16 × 15² = 16 × 225 = **3600**.

Cuenta por la media altura: N = 5,54 × (6,00 / 0,235)² = 5,54 × 25,53² = 5,54 × 651,9 = **3611**.

Salen casi iguales porque el pico es casi ideal; el método dice cuál usar. Si N baja mucho con la misma columna y el mismo método, la columna se está estropeando: el manual de plaguicidas de la FDA pide calcular y anotar los platos de cada columna nueva para compararlos después.

### Factor de cola T
Un pico con **cola** (*tailing*) baja despacio por detrás, como si las moléculas rezagadas se quedaran enganchadas; el programa no sabe bien dónde acaba y el área pierde exactitud. El manual de formación de la FDA lo calcula al 5 % de la altura:

> T = W0,05 / (2 × f)

Cuenta: T = 0,30 / (2 × 0,13) = 0,30 / 0,26 = **1,15**.

Si T = 1, el pico es simétrico; mayor que 1, tiene cola; menor que 1, tiene **frente** (*fronting*). El manual de plaguicidas usa una medida parecida, el **factor de asimetría** (*asymmetry factor*, As), tomada al 10 % de la altura. No son intercambiables: el método dice cuál se usa.

### Repetibilidad de las inyecciones
Antes de las muestras se inyecta varias veces el mismo patrón: si el equipo va bien, las áreas salen casi iguales. Se mide con la **desviación estándar relativa** (*relative standard deviation*, RSD): desviación estándar entre media, en porcentaje.

Ejemplo con seis inyecciones del patrón de KR-7 (valores de ejemplo): 1520300, 1518900, 1523400, 1517600, 1521800 y 1519500.

1. **Media**: suma 9121500 y divide entre 6: **1520250**.
2. **Desviación estándar** (*standard deviation*, s): diferencias con la media al cuadrado, sumadas, entre 6 − 1 = 5 y raíz: s = 2085.
3. **RSD** = 2085 / 1520250 × 100 = **0,14 %**.

¿Cuántas inyecciones? El manual de verificación de métodos de la FDA dice que, si el método no fija otra cosa, se usan cinco cuando el límite de RSD es de 2,0 % o menos, y seis cuando es mayor de 2,0 %.

### La idoneidad del sistema
Estas cuentas se juntan en la **prueba de idoneidad del sistema** (*system suitability test*, SST). Las buenas prácticas de la Organización Mundial de la Salud (OMS) para laboratorios de control de calidad la definen como una prueba que se hace **antes de empezar el análisis**, y se repite a lo largo de la serie, para asegurar que el procedimiento cumple los criterios fijados en su validación. ICH Q2(R2) dice que forma parte del propio procedimiento y se fija durante su desarrollo.

¿Por qué cada vez? La validación demostró que el método funciona, no que funcione hoy en este equipo, como las comprobaciones previas de un reactor ya cualificado. Una idoneidad típica comprueba, con el patrón:

| Criterio | Qué vigila |
|---|---|
| Resolución entre los dos picos más difíciles | Que la separación sigue siendo buena |
| Factor de cola | Que el pico se puede integrar bien |
| Platos teóricos | Que la columna no se ha estropeado |
| RSD de las inyecciones repetidas | Que inyector, bomba y detector son estables |

Los límites los fija cada método. ICH Q2(R2) dice que, en separaciones críticas, la especificidad (*specificity*) se puede demostrar con la resolución entre los dos componentes que salen más cerca.

**Si no cumple, no hay resultado.** La guía de la FDA sobre resultados fuera de especificación (OOS, revisión de mayo de 2022) dice que un sistema que no cumple la idoneidad no debe usarse. Si las inyecciones de control muestran que el equipo fallaba, los datos del periodo sospechoso se identifican y no se usan, y se busca la causa antes de decidir qué datos se aprovechan. El valor de tu lote no se informa: se corrige y se repite según el procedimiento.

Está prohibido inyectar la muestra del lote «de prueba» para ver qué sale: la guía de integridad de datos de la FDA lo llama **analizar hasta que cumpla** (*testing into compliance*).

### La integración: cómo mide el área el programa
El programa del cromatógrafo (*chromatography data system*, CDS) mide las áreas en tres pasos:

1. **Encuentra la línea base** a cada lado del pico.
2. **Decide dónde empieza y dónde acaba** el pico, según unos ajustes llamados **parámetros de integración** (*integration parameters*).
3. **Suma la superficie** entre la curva y la línea base.

Con picos solapados, con cola o sobre una línea base que se mueve, el programa tiene que decidir por dónde cortar, y cada decisión da un área distinta. La FDA lo dice claro: un registro cromatográfico «dinámico» permite cambiar la línea base y reprocesar, de modo que los picos pueden parecer más pequeños o más grandes. Por eso en GMP la integración está muy vigilada:

- Según la guía de integridad de datos de la FDA, el **registro de auditoría** (*audit trail*) de una serie de HPLC incluye usuario, fecha y hora, parámetros de integración y el detalle de cualquier reprocesado, con su justificación. Si se reprocesa, hay procedimiento escrito y se conserva cada resultado, no solo el último.
- Según la guía de integridad de datos de PIC/S, las **integraciones manuales** (*manual integration*) se hacen de forma aprobada y controlada, solo cuando hace falta y por personas designadas; el dato original se conserva y cada cambio lo revisa al menos una persona formada.

El porqué está en las lecciones de integridad de datos.

### De áreas a resultados: patrón externo
Para la **riqueza** (*assay*) se inyecta un patrón de pureza conocida y se compara:

> Riqueza (%) = (Área muestra / Área patrón) × (Conc. patrón / Conc. muestra) × Pureza del patrón (%)

Ejemplo (valores de ejemplo): el patrón se prepara con 25,06 mg en 50 mL (0,5012 mg/mL) y tiene una pureza del 99,7 %. La muestra, con 25,17 mg en 50 mL (0,5034 mg/mL). Área media del patrón: 1520250 (la de la idoneidad). Área de la muestra: 1508700.

1. Cociente de áreas: 1508700 / 1520250 = 0,9924.
2. Cociente de concentraciones: 0,5012 / 0,5034 = 0,9956.
3. Riqueza = 0,9924 × 0,9956 × 99,7 = **98,5 %**.

El área de la muestra es menor, pero también se pesó algo más de muestra que de patrón: la fórmula lo corrige.

### De áreas a resultados: normalización
Para las **impurezas** se usa a menudo la **normalización de áreas** (*area normalisation*): cada pico se divide entre la suma de todos.

> % de un pico = Área del pico / Suma de todas las áreas × 100

Ejemplo (valores de ejemplo): impureza A 2150, impureza B 860, KR-7 1508700, impureza C 1290. Suma: 1513000.

- Impureza A: 2150 / 1513000 × 100 = **0,14 %**
- Impureza B: 860 / 1513000 × 100 = **0,06 %**
- Impureza C: 1290 / 1513000 × 100 = **0,09 %**
- Total de impurezas: 4300 / 1513000 × 100 = **0,28 %**

Esta cuenta supone que todas las sustancias dan la misma señal por gramo y que todas salen y se ven.

### El factor de respuesta relativo
No siempre es así: una impureza puede absorber menos luz ultravioleta que el producto y dar menos área con la misma cantidad. El **factor de respuesta relativo** (*relative response factor*, RRF) compara la señal de la impureza con la del producto a igual concentración. ICH Q2(R2) dice que, si la respuesta es distinta, se calcula el RRF, y que, si queda fuera del intervalo 0,8 a 1,2, se aplica un factor de corrección. Si la impureza sale sobreestimada, puede aceptarse no corregir.

Con un RRF de 0,6 (valor de ejemplo), el 0,0568 % por área de la impureza B se corrige dividiendo: 0,0568 / 0,6 = 0,09 %.

### El patrón interno
Se añade a muestra y patrón una cantidad conocida de otra sustancia, el **patrón interno** (*internal standard*), y se usa el cociente entre el área del producto y la suya. Según el manual de la FDA, compensa que el volumen inyectado no se repite exactamente, sobre todo con inyección manual en GC; los inyectores automáticos han reducido esa necesidad.

### Límite de detección y de cuantificación
Lo más pequeño que se puede ver lo limita el ruido. ICH Q2(R2) da dos niveles:

- **Límite de detección** (*detection limit*, DL): lo mínimo que se detecta con fiabilidad. Una relación **señal-ruido** (*signal-to-noise ratio*) de 3:1 se considera aceptable para estimarlo.
- **Límite de cuantificación** (*quantitation limit*, QL): lo mínimo que se puede medir con fiabilidad. Se considera aceptable una relación de al menos 10:1.

Ejemplo (valores de ejemplo): con un ruido de 0,05 unidades, un pico de 0,45 tiene una señal-ruido de 9: se ve, pero no se puede cuantificar con fiabilidad. Cómo se miden señal y ruido lo fija el método.

### Por qué te importa a ti
El perfil de impurezas de tu lote sale de un cromatograma. Una impureza nueva es un pico que antes no estaba; una que sube es un área que ha crecido. Es información de proceso: puede venir de una materia prima distinta, una temperatura que se pasó, una reacción más larga o un secado demasiado caliente. Tus anotaciones de temperaturas, tiempos e incidencias permiten encontrar la causa. Y si un resultado tarda, puede ser que la idoneidad no cumplió y hubo que repetir la serie.

Los números de esta lección son de ejemplo para entender las cuentas. En planta y en el laboratorio manda siempre el procedimiento vigente (SOP): el método fija los criterios de idoneidad, cómo se integra y cómo se calcula cada resultado.
`,
  plant: `
Lote 24-118 del intermedio ficticio LX-22, en el reactor R-305. La hoja pide un control en proceso al terminar la adición: tomar muestra y esperar el resultado del HPLC antes de enfriar.

Durante la adición, el lazo de temperatura tuvo un pico: la camisa no enfrió a tiempo y la masa llegó a 47 °C durante unos 12 minutos, cuando el máximo de la hoja es 45 °C. Lo anotaste con la hora y avisaste a la jefa de turno, que abrió el registro de incidencia.

Tomas la muestra, la etiquetas y la llevas al laboratorio. La analista te explica después lo que pasó con ella. Primero inyectó seis veces el patrón: la RSD salió 0,21 %, la resolución entre el LX-22 y su impureza más cercana 2,4 y el factor de cola 1,1. La idoneidad cumplía, así que el equipo era fiable ese día.

En tu muestra apareció un pico pequeño a un tiempo de retención relativo de 0,87 que no sale en los lotes anteriores. Su área era el 0,15 % del total, con una señal-ruido muy por encima de 10, así que es un pico real, no ruido.

El laboratorio cruza el dato con tu anotación de 47 °C. Producción y calidad estudian si la subida de temperatura explica el pico nuevo y deciden, según el procedimiento, qué se hace con el lote. Sin tu anotación, ese pico habría sido un misterio.
`,
  batchRecord: `
El cromatograma no lo verás en la hoja de producción, pero sí lo que se deriva de él y lo que el laboratorio necesita de ti:

- **Toma de muestra para control en proceso**: punto, hora, cantidad, identificación del recipiente y tu firma.
- **Condiciones en el momento de la muestra**: temperatura, tiempo desde el final de la adición o de la reacción, lo que pida la hoja.
- **Resultado recibido**: valor numérico, por ejemplo «material de partida 0,4 % área» o «impureza A 0,12 %», con su límite y la decisión (continuar, prolongar la reacción, avisar).
- **Referencia del análisis**: número de análisis o de muestra del laboratorio que permite encontrar el cromatograma original.
- **Esperas**: si el paso siguiente no puede empezar sin el resultado, la hora de recepción.
- **Incidencias del proceso**: cualquier desviación de temperatura, tiempo o carga, aunque parezca pequeña. Es lo que permitirá explicar un pico nuevo.

Nunca se anota un resultado «de palabra» sin el número ni se sigue adelante sin el resultado si la hoja lo exige.
`,
  terms: [
    { es: "Fase móvil", en: "Mobile phase", def: "Líquido (HPLC) o gas (GC) que avanza por la columna y arrastra la muestra." },
    { es: "Fase estacionaria", en: "Stationary phase", def: "Relleno fijo de la columna con el que las sustancias interaccionan más o menos y que las retiene." },
    { es: "Tiempo muerto", en: "Dead time (t0)", def: "Tiempo que tarda en salir de la columna algo que no se retiene nada." },
    { es: "Factor de retención", en: "Retention factor / capacity factor (k′)", def: "Cociente entre el tiempo que una sustancia pasa retenida y el tiempo muerto: (tR − t0) / t0." },
    { es: "Factor de selectividad", en: "Selectivity factor (α)", def: "Cociente entre los factores de retención de dos picos, con el mayor arriba. Si vale 1, no se separan." },
    { es: "Resolución", en: "Resolution (Rs)", def: "Separación entre dos picos teniendo en cuenta su anchura: 2 × (tR2 − tR1) / (W1 + W2)." },
    { es: "Platos teóricos", en: "Theoretical plates (N)", def: "Medida de la eficiencia de la columna: cuanto mayor, más estrechos salen los picos." },
    { es: "Factor de cola", en: "Tailing factor (T)", def: "Medida de la simetría de un pico al 5 % de su altura: 1 es simétrico, más de 1 tiene cola." },
    { es: "Desviación estándar relativa", en: "Relative standard deviation (RSD)", def: "Desviación estándar dividida entre la media, en porcentaje; mide la repetibilidad de las inyecciones." },
    { es: "Idoneidad del sistema", en: "System suitability test (SST)", def: "Comprobación hecha antes y durante cada análisis de que el sistema cumple los criterios del método; si no cumple, los datos no se usan." },
    { es: "Integración", en: "Peak integration", def: "Cálculo del área de cada pico por el programa: línea base, inicio y fin del pico y superficie." },
    { es: "Normalización de áreas", en: "Area normalisation", def: "Expresar cada pico como porcentaje de la suma de las áreas de todos los picos." },
    { es: "Factor de respuesta relativo", en: "Relative response factor (RRF)", def: "Cociente entre la señal de una impureza y la del producto a igual concentración; corrige su porcentaje." },
    { es: "Relación señal-ruido", en: "Signal-to-noise ratio (S/N)", def: "Altura de la señal frente al ruido de la línea base; 3:1 para el límite de detección y al menos 10:1 para el de cuantificación según ICH Q2(R2)." },
  ],
  quiz: [
    {
      kind: "number",
      q: "En un cromatograma, el tiempo muerto es 1,50 min y el producto sale a 7,50 min. ¿Cuál es su factor de retención k′?",
      answer: 4,
      tolerance: 0.01,
      unit: "",
      explain: "k′ = (tR − t0) / t0 = (7,50 − 1,50) / 1,50 = 6,00 / 1,50 = 4.",
    },
    {
      kind: "number",
      q: "Con un tiempo muerto de 1,50 min, una impureza sale a 6,60 min y el producto a 7,50 min. ¿Cuál es el factor de selectividad α entre los dos?",
      answer: 1.18,
      tolerance: 0.01,
      unit: "",
      explain: "k′ impureza = (6,60 − 1,50) / 1,50 = 3,4; k′ producto = (7,50 − 1,50) / 1,50 = 4,0. α = 4,0 / 3,4 = 1,18.",
    },
    {
      kind: "number",
      q: "Dos picos salen a 7,80 y 8,40 min, con anchuras en la base de 0,42 y 0,46 min. ¿Cuál es la resolución Rs?",
      answer: 1.36,
      tolerance: 0.01,
      unit: "",
      explain: "Rs = 2 × (8,40 − 7,80) / (0,42 + 0,46) = 1,20 / 0,88 = 1,36.",
    },
    {
      kind: "number",
      q: "Un pico sale a 9,00 min con una anchura en la base de 0,45 min. ¿Cuántos platos teóricos tiene la columna, calculados por la anchura en la base?",
      answer: 6400,
      tolerance: 0.01,
      unit: "platos",
      explain: "N = 16 × (tR / W)² = 16 × (9,00 / 0,45)² = 16 × 20² = 16 × 400 = 6400.",
    },
    {
      kind: "number",
      q: "Al 5 % de la altura, un pico mide 0,36 min de ancho y la distancia de su frente a la vertical de la cima es 0,15 min. ¿Cuál es su factor de cola T?",
      answer: 1.2,
      tolerance: 0.01,
      unit: "",
      explain: "T = W0,05 / (2 × f) = 0,36 / (2 × 0,15) = 0,36 / 0,30 = 1,2. Mayor que 1: el pico tiene algo de cola.",
    },
    {
      kind: "number",
      q: "Cinco inyecciones del patrón dan áreas de 985400, 990100, 987700, 983900 y 989200. La media es 987260 y la desviación estándar 2587. ¿Cuál es la RSD?",
      answer: 0.26,
      tolerance: 0.03,
      unit: "%",
      explain: "RSD = s / media × 100 = 2587 / 987260 × 100 = 0,26 %.",
    },
    {
      kind: "number",
      q: "Patrón: área 1025600, concentración 0,4980 mg/mL, pureza 99,5 %. Muestra: área 1012300, concentración 0,5010 mg/mL. ¿Cuál es la riqueza por patrón externo?",
      answer: 97.6,
      tolerance: 0.005,
      unit: "%",
      explain: "Riqueza = (1012300 / 1025600) × (0,4980 / 0,5010) × 99,5 = 0,9870 × 0,9940 × 99,5 = 97,6 %.",
    },
    {
      kind: "number",
      q: "Un cromatograma tiene cuatro picos con áreas 3460 (impureza X), 1210, 1198500 (producto) y 2330. ¿Qué porcentaje es la impureza X por normalización de áreas?",
      answer: 0.29,
      tolerance: 0.03,
      unit: "%",
      explain: "Suma = 3460 + 1210 + 1198500 + 2330 = 1205500. Impureza X = 3460 / 1205500 × 100 = 0,29 %.",
    },
    {
      kind: "choice",
      q: "El método pide una RSD de las inyecciones del patrón de 2,0 % como máximo y sale 2,6 %. La muestra de tu lote ya está en la secuencia. ¿Qué pasa con su resultado?",
      options: [
        "Se informa igual, porque la diferencia con el límite es pequeña",
        "Se informa, pero con una nota que diga que el equipo variaba",
        "No se usa: se busca la causa y se repite según el procedimiento",
        "Se inyecta antes la muestra del lote para ver si sale bien",
      ],
      answer: 2,
      explain: "Si la idoneidad no cumple, el sistema no debe usarse y los datos de ese periodo no valen (guía OOS de la FDA). Inyectar la muestra «de prueba» sería analizar hasta que cumpla.",
    },
    {
      kind: "choice",
      q: "Una impureza sale como un hombro pegado al pico del producto y la analista ve que, moviendo la línea base, su área cambia. ¿Qué exige un entorno GMP?",
      options: [
        "Que cualquier cambio siga un procedimiento, quede en el audit trail y se revise",
        "Que se elija la integración que deja la impureza por debajo del límite",
        "Que se borre la primera integración y se guarde solo la buena",
        "Que no se mire el cromatograma y se acepte lo que dé el programa",
      ],
      answer: 0,
      explain: "FDA y PIC/S piden integraciones manuales y reprocesados controlados, con el dato original conservado, cada resultado guardado, audit trail con parámetros y justificación, y revisión por otra persona.",
    },
  ],
};
