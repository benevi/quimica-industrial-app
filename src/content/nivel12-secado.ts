import type { Lesson } from "./types";

export const secadoAFondo: Lesson = {
  slug: "secado-a-fondo",
  level: 12,
  order: 13,
  title: "El secado a fondo: la curva de secado y cuándo está seco",
  titleEn: "Drying in depth: the drying curve and the end point",
  minutes: 30,
  summary:
    "Qué pasa dentro del secadero: de dónde sale el calor, por qué ayuda el vacío, cómo avanza la curva de secado, cómo se calcula la humedad y cómo se decide que el producto está seco.",
  body: `
En la lección «Secaderos» viste los equipos por fuera. Aquí vas a entender qué pasa dentro, para que sepas leer lo que te dicen los termómetros y el vacuómetro durante las horas que dura un secado.

### Qué significa secar
**Secar** (*drying*) es quitar el líquido que moja un sólido **evaporándolo**, es decir, convirtiéndolo en vapor. En una planta de principios activos ese líquido casi nunca es solo agua: suele ser el disolvente del último lavado. Aun así, en planta se le llama «humedad» (*moisture*) a todo el líquido que queda en la torta, sea agua o disolvente.

Para secar hacen falta dos cosas a la vez:

1. **Que entre calor.** Evaporar gasta calor. Lo notas en la piel: el sudor, al evaporarse, te enfría. Si no repones ese calor, el producto se enfría y deja de evaporar.
2. **Que salga el vapor.** Si el vapor se queda dentro, el secado se frena, igual que la ropa no se seca en un baño cerrado lleno de vaho.

| Pieza del secadero | Para qué sirve |
|---|---|
| Camisa o bandejas calientes | Dan calor al producto por contacto con una pared caliente |
| Gas caliente (aire o N₂) | En el lecho fluido trae el calor y, además, se lleva el vapor |
| Filtro de polvo | Retiene el polvo fino que el vapor arrastra hacia la salida |
| Condensador (*condenser*) | Enfría el vapor y lo vuelve líquido, que se recoge en un depósito |
| Bomba de vacío (*vacuum pump*) | Saca los gases y mantiene baja la presión |

### Por qué ayuda el vacío
Un líquido hierve cuando su vapor empuja con la misma fuerza que la presión que tiene encima. Al aire libre esa presión es la de la atmósfera, unos 1013 mbar, y el agua necesita llegar a 100 °C para vencerla. Si bajas la presión, el líquido lo tiene más fácil y **hierve a menos temperatura**.

| Presión absoluta | El agua hierve a |
|---|---|
| 1013 mbar (la atmósfera) | 100 °C |
| 200 mbar | 60 °C |
| 100 mbar | 46 °C |
| 50 mbar | 33 °C |
| 20 mbar | 17,5 °C |

Las cuatro filas de vacío salen de la **ecuación de Antoine** (*Antoine equation*), que relaciona la presión y la temperatura de ebullición: log₁₀(P) = A − B / (T + C), con P en bar y T en kelvin. Para el agua, la base de datos del NIST da A = 5,40221, B = 1838,675 y C = −31,737 entre 273 y 303 K, y A = 5,20389, B = 1733,926 y C = −39,485 entre 304 y 333 K. Cada disolvente tiene sus propios números, pero a todos les pasa lo mismo: a menos presión, hierven a menos temperatura.

Por eso con vacío se puede secar con la camisa a 50 o 60 °C un producto que no aguantaría 100 °C.

Un aviso sobre las unidades: la presión del secadero se da en milibares absolutos. «50 mbar» significa que dentro queda una presión veinte veces menor que la de la atmósfera. Cuanto más bajo es el número, mejor es el vacío.

### La curva de secado
Si apuntas la humedad del producto cada cierto tiempo y la dibujas, sale la **curva de secado** (*drying curve*). Tiene tres tramos.

| Periodo | Qué pasa | Temperatura del producto |
|---|---|---|
| Calentamiento (*warm-up period*) | El producto y el equipo cogen temperatura. Todavía se evapora poco | Sube hasta estabilizarse |
| Velocidad constante (*constant-rate period*) | La superficie de las partículas está mojada. Se evapora el líquido de fuera, siempre al mismo ritmo | Se queda estable y baja, muy por debajo de la camisa |
| Velocidad decreciente (*falling-rate period*) | La superficie ya está seca. El líquido tiene que salir del interior de cada partícula y cada vez sale menos | Sube poco a poco hacia la temperatura de la camisa |

El paso del segundo tramo al tercero ocurre en la **humedad crítica** (*critical moisture content*): la humedad a la que ya no queda líquido suficiente para mantener mojada toda la superficie.

**Por qué la temperatura se queda baja en el tramo constante.** Todo el calor que entra se gasta en evaporar, no en calentar. En un secadero de vacío el producto se queda cerca de la temperatura a la que hierve su disolvente a esa presión. En un secadero de gas caliente se queda cerca de la **temperatura de bulbo húmedo** (*wet-bulb temperature*) del gas, que es la que marca un termómetro envuelto en un trapo mojado.

**Por qué sube al final.** Cuando queda poco líquido, ya casi no hay evaporación que se lleve el calor. El calor de la camisa se emplea entonces en calentar el sólido. Por eso, cuando la temperatura del producto empieza a acercarse a la de la camisa, el secadero te está avisando de que el secado se termina. Es un aviso, no una prueba: el punto final lo decide siempre el análisis.

Piensa en una toalla tendida. Al principio está fría al tacto y pierde agua deprisa. Al final solo queda la humedad de dentro de las costuras, que es la que más tarda. En el secadero pasa igual: las últimas décimas de humedad son las más lentas. El secado termina, como mucho, en la **humedad de equilibrio** (*equilibrium moisture content*), por debajo de la cual el producto ya no baja en esas condiciones.

### Humedad en base húmeda y en base seca
La humedad se puede expresar de dos maneras, y dan números distintos.

- **Base húmeda** (*wet basis*): kilos de líquido divididos entre los kilos totales (sólido más líquido), por 100.
- **Base seca** (*dry basis*): kilos de líquido divididos entre los kilos de sólido seco, por 100.

Para pasar de una a otra:

- base seca = base húmeda / (100 − base húmeda) × 100
- base húmeda = base seca / (100 + base seca) × 100

**Ejemplo 1.** Una torta de 100 kg tiene 20 kg de disolvente y 80 kg de sólido. En base húmeda: 20 / 100 × 100 = 20 %. En base seca: 20 / 80 × 100 = 25 %. Con la fórmula: 20 / (100 − 20) × 100 = 25 %.

**Ejemplo 2.** Un informe da una humedad del 50 % en base seca. En base húmeda: 50 / (100 + 50) × 100 = 33,3 %.

En la industria se usa casi siempre la base húmeda, y la **pérdida por secado** (*loss on drying*, LOD) también lo es, porque divide entre el peso de la muestra húmeda. La base seca puede pasar del 100 %; la húmeda, nunca.

### Cálculos del secado
La clave de todos es la misma: **los kilos de sólido seco no cambian** durante el secado. Solo se va el líquido.

**Cálculo 1: kilos que hay que evaporar.** Cargas 120 kg de torta con un 25 % de humedad y hay que dejarla en un 0,5 %.
- Sólido seco: 120 × (1 − 0,25) = 90 kg.
- Masa final: esos 90 kg serán el 99,5 % del total, así que 90 / 0,995 = 90,45 kg.
- Disolvente que hay que evaporar: 120 − 90,45 = 29,55 kg.

**Cálculo 2: LOD con dos pesadas.** El laboratorio pesa 2,500 g de muestra, la calienta y vuelve a pesar: 2,470 g. LOD = (2,500 − 2,470) / 2,500 × 100 = 1,2 %.

**Cálculo 3: masa seca esperada.** Cargas 80 kg de torta y el análisis de la torta húmeda da un 18 % de LOD. Masa seca esperada: 80 × (1 − 0,18) = 65,6 kg.

**Cálculo 4: rendimiento del secado.** Descargas 64,9 kg. Rendimiento = 64,9 / 65,6 × 100 = 98,9 %. Lo que falta está en el filtro de polvo, pegado a las paredes o en las muestras. Las normas de fabricación de principios activos (ICH Q7) piden comparar el rendimiento real con el esperado e investigar las diferencias en los pasos críticos.

### Tipos de secadero y cuándo se usa cada uno

| Secadero | Cómo trabaja | Cuándo encaja | Pega |
|---|---|---|---|
| Estufa de bandejas de aire (*tray dryer*) | El producto está quieto en bandejas y pasa aire caliente | Producto mojado con agua que aguanta el calor | El sólido no se remueve |
| Estufa de bandejas de vacío (*vacuum tray dryer*) | Producto quieto, bandejas calientes y vacío | Productos sensibles al calor que piden un secado suave, sin movimiento | El sólido no se remueve |
| Cónico o bicónico rotativo (*double-cone dryer*) | Todo el recipiente gira despacio, con camisa y vacío | Cuando basta el volteo para mover y mezclar el sólido | El volteo puede desgastar los cristales |
| De paletas (*paddle dryer*) | Recipiente fijo con un eje de paletas que remueve el producto | Lotes grandes; las paletas deshacen aglomerados y reparten el calor | La agitación puede romper cristales |
| Filtro-secador agitado (*agitated filter dryer*) | Filtra, lava y seca en el mismo equipo; el calor entra sobre todo por contacto con la pared | Cuando interesa no trasvasar el producto ni exponerlo | El secado depende de que el agitador mueva bien la torta |
| Lecho fluido (*fluid bed dryer*) | Un gas caliente levanta las partículas y las mantiene flotando | Polvos y granulados sueltos; seca muy rápido | Lleva mal los grumos y la humedad desigual; puede desgastar las partículas |

### Cómo se sabe que está seco
Hay tres análisis y cada uno ve una cosa distinta.

| Análisis | Qué mide |
|---|---|
| LOD | Todo lo que se evapora al calentar: agua y disolventes juntos, sin distinguir cuánto hay de cada uno |
| Karl Fischer (KF) | Solo el agua |
| Cromatografía de gases (*gas chromatography*, GC) | Cada disolvente por separado |

Los límites de **disolventes residuales** (*residual solvents*) los marca la guía ICH Q3C, que los ordena en tres clases. Los límites se dan en partes por millón (ppm): 10 000 ppm son un 1 %.

| Clase | Qué significa | Ejemplos y límite |
|---|---|---|
| 1 | Hay que evitarlos | Benceno, 2 ppm |
| 2 | Hay que limitarlos | Acetonitrilo 410 ppm, diclorometano 600 ppm, tolueno 890 ppm, metanol 3000 ppm |
| 3 | Baja toxicidad | Etanol, acetona, 2-propanol, acetato de etilo, heptano: 5000 ppm (0,5 %) |

**Por qué un LOD bajo no garantiza un disolvente residual bajo.** Imagina un LOD de 0,3 % con una especificación de 0,5 %: cumple. Pero 0,3 % son 3000 ppm. Si todo eso fuera tolueno, habría más del triple de su límite de 890 ppm. El LOD suma todo y no sabe qué es cada cosa. Por eso la propia ICH Q3C solo acepta un método no específico como el LOD cuando los únicos disolventes presentes son de clase 3.

### Problemas típicos

| Problema | Qué pasa | Qué hacer |
|---|---|---|
| Grumos y bolas | El producto húmedo se apelmaza. La bola está seca por fuera y húmeda por dentro, y la muestra puede engañar | Avisar. Algunos equipos llevan un rompegrumos (*chopper*) |
| Costra | Se seca primero la capa de fuera y el interior sigue húmedo | Avisar; no forzar la temperatura |
| Producto pegado a la pared | Se forma una capa sobre la pared caliente. También se pega polvo donde condensa vapor en zonas frías | Anotarlo; se nota en la descarga y en el rendimiento |
| Degradación | Demasiada temperatura o demasiado tiempo estropean el producto | Nunca subir la camisa por encima del límite de la hoja |
| Polvo en el filtro | El vapor arrastra polvo fino, el filtro se tapona y el vacío empeora | Vigilar el vacío y avisar |
| Fugas | Entra aire. La presión no baja, el disolvente hierve a más temperatura y el secado se alarga. Además entra oxígeno | Avisar. Se comprueba aislando el equipo y viendo si la presión sube |

### Seguridad
- **Vapores inflamables.** Dentro hay vapor de disolvente. Para que no pueda arder se trabaja en atmósfera inerte: el nitrógeno baja el oxígeno por debajo del mínimo que necesita la llama.
- **Polvo combustible.** El producto seco y fino puede arder, y una nube de polvo puede explotar. Las capas de polvo sobre equipos calientes también pueden encenderse. Se limpia aspirando o con paño húmedo, nunca barriendo ni soplando. Un polvo mezclado con vapor de disolvente se enciende con menos energía que el polvo solo.
- **Electricidad estática** (*static electricity*). El polvo, al moverse, se carga, y una chispa basta para encender vapores o polvo. La defensa principal es la **puesta a tierra** (*earthing*) de todas las partes metálicas, unidas entre sí.
- **Superficies calientes.** La camisa y las bandejas queman, y son una posible fuente de ignición.
- **Romper el vacío con nitrógeno y enfriar antes de abrir.** Si el vacío se rompiera con aire, entraría oxígeno en un equipo caliente con vapores y polvo. Y un producto frío desprende menos vapor y no quema. Antes de abrir se comprueba que la presión es la atmosférica. Ojo también con el nitrógeno: no se puede respirar.

### Qué vigila y qué anota el operador
- Temperatura de camisa, temperatura de producto y presión absoluta, a los intervalos que marque la hoja.
- Agitación o giro, según el equipo.
- El condensado: al principio cae mucho líquido al depósito; al final, casi nada.
- Cualquier cosa rara: vacío que no baja, temperatura que sube antes de tiempo, ruidos del agitador.

La **toma de muestra** para el control en proceso (*in-process control*, IPC) se hace siguiendo un procedimiento escrito, de forma que la muestra represente al lote y no se contamine ni contamine el producto. Se cierra y se etiqueta en el momento, para que llegue al laboratorio tal como salió. El resultado y la decisión se anotan en la hoja. El secado no termina por reloj, sino cuando el análisis cumple.

En planta manda siempre el procedimiento vigente (SOP): los valores de esta lección son ejemplos para entender, no consignas de trabajo.
`,
  plant: `
En el secadero cónico rotativo SD-302 cargas 140 kg de torta del intermedio ficticio VT-210, lavada con agua, con un 20 % de humedad. La hoja dice: *«Secar a vacío (≤ 50 mbar) con camisa a 60 °C hasta LOD ≤ 0,5 %. Pedir el primer IPC cuando la temperatura de producto supere 50 °C.»*

Antes de empezar haces la cuenta: sólido seco, 140 × (1 − 0,20) = 112 kg. Habrá que evaporar unos 28 kg de agua.

Durante la primera hora el producto se calienta. Después, la temperatura de producto se queda clavada entre 33 y 35 °C durante horas, aunque la camisa está a 60 °C. Es lo esperado: a 50 mbar el agua hierve a unos 33 °C y todo el calor se gasta en evaporar. El condensado cae sin parar al depósito.

A la séptima hora la temperatura empieza a subir: 41, 48, 53 °C. Casi no cae condensado. Has pasado al periodo de velocidad decreciente. Paras el giro, rompes el vacío con nitrógeno y tomas la muestra según el procedimiento. LOD: 0,9 %. No cumple, así que sigues secando con los mismos parámetros.

Tres horas después, la segunda muestra da 0,4 %. Cumple. Enfrías el producto por debajo de 30 °C, rompes el vacío con nitrógeno, compruebas que la presión es la atmosférica y descargas 111,4 kg. Rendimiento del secado: 111,4 / 112 × 100 = 99,5 %.
`,
  batchRecord: `
- Peso de torta húmeda cargada y su humedad (LOD de la torta), con la masa seca esperada.
- Hora de inicio del vacío y de la calefacción.
- Tabla de seguimiento, a los intervalos que marque la hoja: hora, temperatura de camisa, temperatura de producto, presión absoluta y giro o agitación.
- Cada muestra de IPC: hora, quién la toma, análisis (LOD, Karl Fischer o disolventes residuales), resultado, especificación y decisión (seguir secando o dar por terminado).
- Hora de fin de secado, temperatura de producto al enfriar y confirmación de que el vacío se rompió con nitrógeno.
- Peso descargado, rendimiento calculado y su comparación con el rango esperado.
- Cualquier anomalía (vacío que no baja, grumos, producto pegado), con hora, firma y aviso al responsable.
`,
  terms: [
    { es: "Curva de secado", en: "Drying curve", def: "Gráfica de la humedad del producto frente al tiempo de secado." },
    { es: "Periodo de velocidad constante", en: "Constant-rate period", def: "Tramo en que se evapora el líquido de la superficie, siempre al mismo ritmo." },
    { es: "Periodo de velocidad decreciente", en: "Falling-rate period", def: "Tramo final en que el líquido sale del interior de las partículas, cada vez más despacio." },
    { es: "Humedad crítica", en: "Critical moisture content", def: "Humedad a la que termina el periodo constante y empieza el decreciente." },
    { es: "Humedad de equilibrio", en: "Equilibrium moisture content", def: "Humedad por debajo de la cual el producto ya no baja en esas condiciones." },
    { es: "Base húmeda", en: "Wet basis", def: "Humedad calculada dividiendo el líquido entre la masa total, sólido más líquido." },
    { es: "Base seca", en: "Dry basis", def: "Humedad calculada dividiendo el líquido entre la masa de sólido seco." },
    { es: "Temperatura de bulbo húmedo", en: "Wet-bulb temperature", def: "Temperatura de una superficie mojada que se evapora en una corriente de gas." },
    { es: "Ecuación de Antoine", en: "Antoine equation", def: "Fórmula que relaciona la presión con la temperatura a la que hierve un líquido." },
    { es: "Condensador", en: "Condenser", def: "Equipo que enfría el vapor y lo convierte de nuevo en líquido." },
    { es: "Cromatografía de gases", en: "Gas chromatography (GC)", def: "Análisis que separa y mide cada disolvente residual por separado." },
    { es: "Puesta a tierra", en: "Earthing / grounding", def: "Conexión de las partes metálicas a tierra para que no acumulen carga estática." },
  ],
  quiz: [
    {
      kind: "choice",
      q: "Secas a 50 mbar con la camisa a 60 °C. El producto ha estado horas a unos 33 °C y ahora sube hacia 55 °C. ¿Qué indica?",
      options: [
        "Hay una fuga de aire y el vacío se ha perdido del todo",
        "La camisa está fallando y calienta más de lo debido",
        "Queda poco líquido libre y el secado se acerca al final",
        "El producto se degrada y hay que parar de inmediato",
      ],
      answer: 2,
      explain: "Mientras hay líquido en la superficie, el calor se gasta en evaporar y el producto se queda frío. Cuando casi no queda, el calor calienta el sólido y su temperatura se acerca a la de la camisa. Es un aviso; el punto final lo confirma el análisis.",
    },
    {
      kind: "number",
      q: "Cargas 200 kg de torta con un 30 % de humedad (base húmeda) y hay que secarla hasta un 1 %. ¿Cuántos kilos de disolvente hay que evaporar?",
      answer: 58.6,
      tolerance: 0.01,
      unit: "kg",
      explain: "Sólido seco: 200 × 0,70 = 140 kg. Masa final: 140 / 0,99 = 141,4 kg. Hay que evaporar 200 − 141,4 = 58,6 kg.",
    },
    {
      kind: "choice",
      q: "¿Por qué el periodo de velocidad decreciente es el más lento?",
      options: [
        "El líquido tiene que salir del interior de las partículas",
        "La bomba de vacío pierde fuerza con el paso de las horas",
        "La camisa se enfría sola cuando el producto se calienta",
        "El condensador se llena y ya no admite más disolvente",
      ],
      answer: 0,
      explain: "La superficie ya está seca. El líquido que queda tiene que recorrer el interior de cada partícula hasta salir, y cada vez sale menos.",
    },
    {
      kind: "number",
      q: "Una muestra pesa 3,000 g antes del ensayo de pérdida por secado y 2,955 g después. ¿Cuál es el LOD?",
      answer: 1.5,
      tolerance: 0.02,
      unit: "%",
      explain: "(3,000 − 2,955) / 3,000 × 100 = 1,5 %.",
    },
    {
      kind: "number",
      q: "Una torta tiene un 15 % de humedad en base húmeda. ¿Cuánto es en base seca?",
      answer: 17.6,
      tolerance: 0.01,
      unit: "%",
      explain: "Base seca = 15 / (100 − 15) × 100 = 17,6 %. En base seca el número siempre sale mayor, porque se divide solo entre el sólido.",
    },
    {
      kind: "choice",
      q: "El LOD da 0,3 % (especificación ≤ 0,5 %). El último lavado fue con tolueno, de clase 2, con límite de 890 ppm. ¿Qué es cierto?",
      options: [
        "Cumple, porque 0,3 % son 300 ppm y el límite es 890 ppm",
        "Cumple, porque el LOD no detecta nunca el tolueno",
        "No cumple, porque un LOD de 0,3 % es siempre demasiado",
        "No basta: hay que medir el tolueno por cromatografía de gases",
      ],
      answer: 3,
      explain: "0,3 % son 3000 ppm. El LOD suma agua y disolventes sin distinguirlos, así que no demuestra que el tolueno esté por debajo de 890 ppm. ICH Q3C solo acepta el LOD cuando los únicos disolventes son de clase 3.",
    },
    {
      kind: "number",
      q: "Cargas 150 kg de torta con un LOD del 22 %. ¿Qué masa seca esperas obtener?",
      answer: 117,
      tolerance: 0.01,
      unit: "kg",
      explain: "150 × (1 − 0,22) = 117 kg de sólido seco.",
    },
    {
      kind: "number",
      q: "Esperabas 117 kg de producto seco y descargas 115,2 kg. ¿Cuál es el rendimiento del secado?",
      answer: 98.5,
      tolerance: 0.005,
      unit: "%",
      explain: "115,2 / 117 × 100 = 98,5 %. Lo que falta suele estar en el filtro de polvo, pegado a las paredes o en las muestras.",
    },
    {
      kind: "choice",
      q: "El secado ha terminado y dentro hubo disolvente inflamable. ¿Qué se hace antes de abrir para descargar?",
      options: [
        "Abrir cuanto antes para que el producto no coja humedad",
        "Enfriar el producto y romper el vacío con nitrógeno",
        "Romper el vacío con aire y esperar a que se enfríe solo",
        "Subir la camisa unos grados para apurar el secado",
      ],
      answer: 1,
      explain: "Con aire entraría oxígeno en un equipo caliente con vapores y polvo: los tres lados del triángulo del fuego. Se enfría, se rompe el vacío con nitrógeno y se comprueba que la presión es la atmosférica.",
    },
    {
      kind: "choice",
      q: "¿Qué mide el análisis de Karl Fischer?",
      options: [
        "Todo lo que se evapora al calentar la muestra",
        "Cada disolvente residual por separado, en ppm",
        "Solo el agua que contiene la muestra analizada",
        "La temperatura a la que hierve el disolvente",
      ],
      answer: 2,
      explain: "Karl Fischer es específico para el agua. El LOD mide todos los volátiles juntos y la cromatografía de gases mide cada disolvente.",
    },
  ],
};
