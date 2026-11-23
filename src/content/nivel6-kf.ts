import type { Lesson } from "./types";

export const karlFischerAFondo: Lesson = {
  slug: "karl-fischer-a-fondo",
  level: 6,
  order: 8,
  title: "El agua en la muestra a fondo: Karl Fischer y pérdida por secado",
  titleEn: "Water in the sample in depth: Karl Fischer and loss on drying",
  minutes: 38,
  summary:
    "Por qué importa el agua en un principio activo y en un disolvente, qué mide la pérdida por secado y qué mide el Karl Fischer, la reacción del yodo con el agua, el título del reactivo, la cuenta del culombimétrico con la constante de Faraday, la deriva, el manejo de la muestra y qué hace el operador cuando el resultado sale alto.",
  body: `
En la lección anterior viste qué es el Karl Fischer y sus dos versiones. Aquí vas a entender por qué el laboratorio se preocupa tanto por el agua, qué diferencia hay entre los dos análisis que la miden, de dónde salen las cuentas y por qué tu forma de tomar la muestra puede estropear el resultado.

### Por qué importa el agua
El agua es la sustancia más corriente del mundo y está en todas partes: en el aire, en las manos, en la superficie del vidrio. Por eso casi todo lo que sale de un proceso lleva algo de agua. A veces es un problema, a veces es parte del producto y siempre hay que saber cuánta hay.

**En el principio activo.** La guía ICH Q6A, que dice qué ensayos lleva la especificación de un principio activo nuevo, pide un ensayo de contenido en agua en tres casos: cuando el producto es higroscópico (*hygroscopic*), es decir, que chupa la humedad del aire como una esponja; cuando el agua lo degrada; y cuando es un hidrato estequiométrico, un cristal que lleva agua dentro de su estructura en una proporción fija. Lo de los hidratos lo viste en la lección de polimorfismo: allí el agua no sobra, forma parte del producto y tiene un mínimo y un máximo.

La guía de estabilidad ICH Q1A pide estudiar el efecto de la humedad sobre el principio activo y, si procede, su sensibilidad a ella en las condiciones de almacenamiento. Mucha agua puede favorecer que el producto se descomponga con el tiempo o que se apelmace.

**En el rendimiento.** Una báscula no distingue entre producto y agua. Si descargas 120 kg de un producto con un 3 % de agua, de producto seco tienes 120 × (1 − 0,03) = 116,4 kg. El rendimiento del lote se calcula sobre la base seca; si no restas el agua, te sale un rendimiento mejor que el real.

**En la carga de la etapa siguiente.** Supón que la hoja de la etapa siguiente pide 50,0 kg de intermedio seco y que el tuyo tiene un 2,5 % de agua (valor de ejemplo). Para meter 50,0 kg de producto de verdad tienes que cargar 50,0 / (1 − 0,025) = 51,28 kg. Y con esa carga entran en el reactor 51,28 × 0,025 = 1,28 kg de agua. En muchas plantas esta corrección la hace la hoja o el sistema con el resultado del laboratorio: por eso ese resultado tiene que llegar antes de cargar.

**En disolventes y reactivos.** Hay reacciones sensibles al agua (*moisture-sensitive*): reactivos que se destruyen con ella, o que reaccionan con ella antes que con el producto. Cada gota de agua que entra se come una parte del reactivo y puede dar impurezas. Por eso se mide el agua de un disolvente recuperado antes de reutilizarlo o del reactor antes de cargar un reactivo así. Para hacerte una idea: los 1,28 kg de agua del ejemplo anterior son 1280 / 18,015 = 71 moles de agua, que pueden destruir 71 moles de un reactivo que reaccione con el agua uno a uno.

### Dos análisis, dos preguntas
Hay dos maneras habituales de saber cuánta agua o cuánto «mojado» tiene un sólido, y no responden a la misma pregunta.

| | Pérdida por secado (*loss on drying*, LOD) | Karl Fischer (KF) |
|---|---|---|
| Qué hace | Pesa la muestra, la calienta y la vuelve a pesar | Hace reaccionar el agua con un reactivo químico |
| Qué mide | Todo lo que se va al calentar: agua y disolventes juntos | Solo el agua |
| Qué no ve | No sabe qué parte es agua y qué parte disolvente | No ve los disolventes |
| Equipo | Estufa o termobalanza y balanza analítica | Valorador Karl Fischer |

Una comparación: el LOD es como pesar la maleta antes y después de vaciarla; sabes cuánto has sacado, pero no si era ropa o libros. El KF es como contar solo los libros.

La guía ICH Q6A lo dice así: en algunos casos la pérdida por secado puede ser suficiente, pero se prefiere un método específico para el agua, como el Karl Fischer. En la práctica:

- **LOD** cuando lo que importa es «que esté seco», sea de agua o de disolvente, y se sabe qué volátiles puede haber. Es típico como control en proceso del secado.
- **KF** cuando importa el agua en concreto: hidratos, productos higroscópicos, disolventes antes de una reacción sensible al agua, análisis final del principio activo cuando la especificación lo pide.

### Cuenta 1: pérdida por secado con la tara del pesafiltro
La pesada se hace en un recipiente pequeño con tapa, el pesafiltro (*weighing bottle*), que antes se ha secado y pesado vacío. Valores de ejemplo:

| Pesada | Masa |
|---|---|
| Pesafiltro vacío y seco | 25,4120 g |
| Pesafiltro con muestra, antes de secar | 27,4120 g |
| Pesafiltro con muestra, después de secar | 27,3720 g |

Muestra: 27,4120 − 25,4120 = 2,0000 g. Lo perdido: 27,4120 − 27,3720 = 0,0400 g. LOD = 0,0400 / 2,0000 × 100 = **2,00 %**.

Fíjate en que se divide entre la masa de la muestra, no entre la del pesafiltro con muestra. Es un error típico.

### Cuenta 2: lo que dice la diferencia entre LOD y KF
Un lote da un LOD del 1,8 % y un KF del 0,4 % (valores de ejemplo). El KF dice que agua hay un 0,4 %. El LOD cuenta todo lo que se fue al calentar. La diferencia, 1,8 − 0,4 = **1,4 %**, es algo que se evapora pero no es agua: casi seguro, disolvente del último lavado. Un 1,4 % son 14000 ppm; en un lote de 120 kg, 120 × 0,014 = 1,68 kg de disolvente.

La diferencia solo es una pista. Para saber qué disolvente es y cuánto hay de cada uno, el laboratorio usa la cromatografía de gases.

### La reacción de Karl Fischer, en idea
El método lo publicó el químico alemán Karl Fischer en 1935. La idea de partida es sencilla:

- El **yodo** reacciona con el **agua** cuando también están presentes **dióxido de azufre**, una **base** y un **alcohol**, normalmente metanol.
- La base atrapa los ácidos que se forman, para que la reacción vaya completa. El reactivo original usaba piridina; hoy muchos reactivos usan otras bases.
- La proporción que importa: **un mol de yodo por cada mol de agua**.

Escrita de forma simplificada, con «base» en lugar de la fórmula concreta:

> I₂ + SO₂ + H₂O + CH₃OH + 3 base da productos (sales de la base)

No necesitas saber qué productos salen. Lo que necesitas es esto: el yodo se gasta mientras hay agua. Cuando el agua se acaba, el yodo que llega ya no tiene con quién reaccionar y queda libre. Ese momento es el punto final.

### Karl Fischer volumétrico
En el volumétrico, el yodo va dentro de un reactivo valorante (*titrant*) que una bureta automática añade gota a gota a la celda, un vaso cerrado con disolvente. Se mide cuántos mililitros hacen falta para gastar toda el agua de la muestra.

**El título.** Para pasar de mililitros a miligramos de agua hay que saber cuánta agua «vale» cada mililitro de reactivo. Ese número es el título o equivalente en agua (*titer*, *water equivalent*), en mg de agua por mL. No se fía del valor de la etiqueta: el reactivo coge humedad y pierde fuerza con el tiempo, así que el laboratorio lo determina con regularidad según su procedimiento.

> título (mg/mL) = mg de agua añadidos / mL gastados

**Cuenta 3: título con agua.** Se pesan 40,0 mg de agua y se gastan 8,02 mL de reactivo. Título = 40,0 / 8,02 = **4,99 mg/mL**. Pesar unas gotas de agua con exactitud es delicado; por eso también se usan patrones sólidos.

**El patrón de tartrato de sodio dihidratado.** Es un sólido estable que lleva dos moléculas de agua en su cristal: Na₂C₄H₄O₆·2H₂O. Su contenido teórico de agua sale de las masas molares. Con las masas atómicas de la tabla del nivel 1 (H 1,008; C 12,011; O 15,999; Na 22,990):

- Agua: 2 × 1,008 + 15,999 = 18,015 g/mol.
- Tartrato dihidratado: 2 × 22,990 + 4 × 12,011 + 8 × 1,008 + 8 × 15,999 = 230,08 g/mol. Los 8 hidrógenos y 8 oxígenos incluyen los del agua.
- Agua: 2 × 18,015 / 230,08 × 100 = **15,66 %**.

**Cuenta 4: título con tartrato.** Se pesan 160,0 mg de tartrato y se gastan 5,05 mL. Agua del patrón: 160,0 × 0,1566 = 25,06 mg. Título = 25,06 / 5,05 = **4,96 mg/mL**.

**El contenido de agua de la muestra.**

> agua (%) = mL gastados × título (mg/mL) / masa de muestra (mg) × 100

**Cuenta 5.** Un principio activo: muestra 300,0 mg, gasto 1,85 mL, título 4,96 mg/mL. Agua: 1,85 × 4,96 = 9,18 mg. Contenido: 9,18 / 300,0 × 100 = **3,06 %**.

**Cuenta 6.** Un intermedio casi seco: muestra 1200,0 mg, gasto 0,48 mL, título 5,01 mg/mL. Agua: 0,48 × 5,01 = 2,40 mg. Contenido: 2,40 / 1200,0 × 100 = **0,20 %**. Fíjate en que con poca agua el gasto es pequeño y cualquier error de lectura pesa mucho: por eso se toma más muestra.

### Karl Fischer culombimétrico
En el culombimétrico (*coulometric*) no hay bureta. La celda tiene un reactivo con yoduro, que es yodo «desmontado», y un electrodo generador. Al pasar corriente eléctrica, el yoduro se convierte en yodo justo donde hace falta. Cada molécula de yodo necesita dos electrones:

> 2 I⁻ da I₂ + 2 e⁻

El equipo mide cuánta electricidad ha tenido que pasar hasta gastar el agua. Esa electricidad es la carga, en culombios (C). Si la corriente es constante, carga = corriente × tiempo: un amperio durante un segundo es un culombio.

**La constante de Faraday.** Es la carga de un mol de electrones. El Real Decreto 2032/2009, que fija las unidades legales en España, recoge dos valores exactos del Sistema Internacional: la carga de un electrón, 1,602176634 × 10⁻¹⁹ C, y la constante de Avogadro, 6,02214076 × 10²³ por mol. Multiplicándolas:

> F = 1,602176634 × 10⁻¹⁹ × 6,02214076 × 10²³ = 96485 C/mol

**De la carga al agua, paso a paso, con 1 culombio:**

1. Moles de electrones: 1 / 96485 = 1,0364 × 10⁻⁵ mol.
2. Moles de yodo: la mitad, porque cada yodo pide dos electrones: 5,182 × 10⁻⁶ mol.
3. Moles de agua: los mismos que de yodo, uno a uno.
4. Masa de agua: 5,182 × 10⁻⁶ × 18,015 g/mol = 9,336 × 10⁻⁵ g = **93,36 µg**.

Cada culombio corresponde a unos 93,4 microgramos de agua. Por eso no hace falta título: la «regla» del culombimétrico es una constante de la naturaleza. Lo que sí hace falta es comprobar con un patrón que el equipo funciona bien.

**Cuenta 7.** Un disolvente recuperado: muestra 2,000 g, carga 1,50 C. Agua: 1,50 × 93,36 = 140,0 µg. Contenido: 140,0 µg / 2,000 g = 70,0 µg/g = **70 ppm** (0,0070 %).

**Cuenta 8.** El equipo pasa 0,100 A durante 45 s con una muestra de 0,5000 g. Carga: 0,100 × 45 = 4,5 C. Agua: 4,5 × 93,36 = 420,1 µg. Contenido: 420,1 / 0,5000 = 840 µg/g = **840 ppm** (0,084 %).

**Cuál se usa para qué.** Mira las cifras: el culombimétrico cuenta microgramos. Es la técnica para trazas de agua, como en disolventes que deben estar muy secos. Si una muestra tiene mucha agua, generar todo ese yodo con electricidad llevaría demasiado tiempo: para porcentajes de agua se usa el volumétrico. Los límites exactos de cada técnica los fija el método validado del laboratorio.

### El punto final y la deriva
**Cómo sabe el equipo que ha terminado.** En la celda hay un electrodo doble de platino, dos hilos muy juntos por los que el equipo intenta hacer pasar una corriente pequeña y constante. Mientras queda agua, todo el yodo que llega se gasta y entre los hilos casi no hay sustancias que dejen pasar la corriente: el equipo tiene que poner mucho voltaje. En cuanto sobra un poco de yodo libre, la corriente pasa con facilidad y el voltaje cae de golpe. Esa caída es el punto final. Se llama detección bipotenciométrica (*bipotentiometric indication*) y no necesita mirar ningún color.

**La deriva.** Ninguna celda es perfectamente estanca: siempre entra algo de humedad por juntas y tapones. El equipo la va valorando sin parar para mantener la celda seca, y mide cuánta agua entra por minuto. Eso es la deriva (*drift*), en µg/min en el culombimétrico. Una deriva alta y que no baja avisa de que la celda tiene una fuga, el desecante está agotado o el reactivo está gastado.

Durante el análisis esa agua sigue entrando, así que se resta:

> agua de la muestra = agua total medida − deriva × tiempo de análisis

**Cuenta 9.** Total medido 164 µg; deriva 8 µg/min (valor de ejemplo); el análisis duró 3 min. Agua de la deriva: 8 × 3 = 24 µg. Agua de la muestra: 164 − 24 = 140 µg. Con 1,000 g de muestra, **140 ppm**. Sin la corrección habría salido 164 ppm, un 17 % de más.

### La muestra: el aire húmedo es el enemigo
El aire de una sala lleva agua en forma de vapor. Un producto seco y frío, sobre todo si es higroscópico, la coge en cuanto lo dejas al aire. La guía ICH Q7 pide reevaluar los materiales cuando han estado expuestos a la humedad: el agua del aire cambia el producto.

Lo que eso significa para quien toma la muestra:

- Recipiente limpio, seco y con cierre hermético, el que diga el procedimiento.
- Llenarlo bien, para que quede poco aire dentro, y cerrarlo enseguida.
- No dejar la muestra abierta «para que se enfríe».
- Identificarla y llevarla sin demora. Si va a esperar, en las condiciones que diga el procedimiento.

En el laboratorio, la muestra se pesa deprisa y se mete en la celda por una boca con tapón o con jeringa.

**El horno de Karl Fischer.** Hay sólidos que no se disuelven en el reactivo o que reaccionan con él. Para esos se usa un horno: la muestra se calienta en un vial cerrado y un gas seco, por ejemplo nitrógeno, arrastra el agua evaporada hasta la celda. Solo el agua llega al reactivo; el sólido se queda en el vial.

**Interferencias.** Algunas sustancias engañan a la reacción:

- **Aldehídos y cetonas**, como la acetona, reaccionan con el metanol de los reactivos normales y forman agua, o gastan reactivo. El resultado sale falso. Para ellos existen reactivos especiales sin metanol.
- **Oxidantes**, que fabrican yodo por su cuenta a partir del yoduro: parece que hay menos agua.
- **Reductores**, que gastan yodo sin que haya agua: parece que hay más.

Esto lo resuelve el laboratorio al desarrollar y validar el método. A ti te toca una cosa: si cambia algo del proceso, como un disolvente de lavado nuevo, avisar, porque puede afectar al análisis.

### Seguridad y residuos
Los reactivos de Karl Fischer llevan disolventes y bases. Muchos llevan metanol. La ficha del metanol de esta app recoge su clasificación según el Reglamento CLP: líquido muy inflamable (H225), tóxico si se ingiere, si se toca o si se respira (H301, H311, H331) y que provoca daños en órganos (H370). Tiene un valor límite ambiental (VLA-ED) de 200 ppm con notación vía dérmica: atraviesa la piel. Por eso el reactivo se maneja en la vitrina o con el equipo cerrado, con gafas y guantes adecuados, y sin fuentes de ignición cerca. Para cualquier otro reactivo, manda su ficha de datos de seguridad.

Lo que sale de la celda es un residuo peligroso: disolvente orgánico con yodo, sales y la muestra. La NTP 480 del Instituto Nacional de Seguridad y Salud en el Trabajo clasifica los residuos de laboratorio por grupos, como disolventes halogenados, no halogenados y disoluciones acuosas, para entregarlos a un gestor autorizado. El grupo de los residuos de KF lo fija el procedimiento de tu centro. Nunca al desagüe.

### Por qué el operador debe saberlo
- **El secado se libera con un resultado.** La guía ICH Q7 dice que cuando se seca hasta una especificación, el final no lo marca el reloj sino el muestreo y el análisis en proceso. Tu secadero no ha terminado hasta que el LOD o el KF cumplen.
- **El análisis lleva su tiempo.** El KF da el resultado en minutos una vez la muestra está en el laboratorio; el LOD en estufa puede tardar bastante más, según el método. Súmale el transporte y la cola. Tenlo en cuenta al planificar la descarga.
- **Si sale alto,** sigue lo que diga la hoja: normalmente, seguir secando con los mismos parámetros y volver a muestrear. Lo explica la lección de secado a fondo. Que un control intermedio diga «todavía húmedo» no es un fallo, es el proceso hablando.
- **Lo que no se hace:** repetir el análisis de la misma muestra hasta que salga bien, mezclar con producto más seco o anotar otro valor. La guía de la FDA sobre resultados fuera de especificación (*out-of-specification*, OOS) llama a eso «analizar hasta cumplir» (*testing into compliance*) y lo considera inaceptable. Un resultado final que no cumple se comunica y se investiga.

Los números de esta lección son para entender. En planta y en el laboratorio manda siempre el procedimiento vigente (SOP): el método, el tipo de recipiente, el límite y lo que se hace con cada resultado son los de tu hoja.
`,
  plant: `
Turno de tarde. En el secadero de paletas a vacío SV-610 se seca el intermedio ficticio LT-58, lavado al final con un disolvente orgánico. La hoja dice: *«Secar a vacío con camisa a 55 °C. Control en proceso (IPC): LOD ≤ 0,5 % y KF ≤ 0,3 %. La etapa siguiente usa el reactivo RX-9, que se destruye con el agua.»*

A las seis horas tomas la primera muestra: rompes el vacío con nitrógeno, llenas el frasco de vidrio con cierre hermético casi hasta arriba, lo cierras enseguida y lo etiquetas. No lo dejas abierto aunque esté caliente.

Resultados: LOD 1,6 %, KF 0,3 %. El agua ya está casi en el límite, pero el LOD no cumple. La diferencia, 1,3 %, es disolvente que todavía no se ha ido. Sigues secando con los mismos parámetros, como dice la hoja.

Dos horas después, segunda muestra: LOD 0,4 % y KF 0,25 %. Cumplen los dos. Anotas ambos resultados con su hora, también los de la primera muestra.

En la etapa siguiente la hoja pide 60,0 kg de LT-58 seco. Con un 0,25 % de agua hay que cargar 60,0 / (1 − 0,0025) = 60,15 kg, y con ellos entran 0,150 kg de agua, unos 8,3 moles. El sistema hace la corrección con el resultado del laboratorio y añade el exceso de RX-9 previsto en la receta. Si hubieras cargado el producto con la primera muestra, el agua y el disolvente que quedaban habrían descuadrado la carga.

Al descargar, compruebas que los bidones quedan bien cerrados: el LT-58 es higroscópico y no puede coger humedad del almacén.
`,
  batchRecord: `
En la hoja de producción (*batch record*) del secado y de la carga siguiente verás:

- **Instrucción de muestreo**: cuándo se toma la muestra (tiempo o temperatura de producto), cómo (romper el vacío con nitrógeno, punto de muestreo) y en qué recipiente (cierre hermético).
- **Ensayo y límite**: LOD, Karl Fischer o los dos, cada uno con su especificación escrita (por ejemplo, LOD ≤ 0,5 % y KF ≤ 0,3 %).
- **Cada muestra**: fecha, hora, quién la toma, código de la muestra, resultado real del laboratorio con su unidad y decisión (seguir secando o dar por terminado). Se anotan todas, también las que no cumplen.
- **Base seca**: masa descargada y masa seca calculada con el contenido de agua o de volátiles.
- **Carga de la etapa siguiente**: masa a cargar corregida por el agua, con el resultado de KF en que se basa y su referencia.
- **Incidencias**: muestra que se quedó abierta, frasco mal cerrado, retraso en llevarla, cambio de disolvente de lavado. Todo se anota y se comunica al responsable.

Nunca se anota «cumple» sin el número, ni un valor distinto del que da el laboratorio.
`,
  terms: [
    { es: "Pérdida por secado", en: "Loss on drying (LOD)", def: "Porcentaje de masa que pierde una muestra al calentarla: agua y disolventes juntos, sin distinguirlos." },
    { es: "Contenido en agua", en: "Water content", def: "Porcentaje de agua de una muestra medido con un método específico para el agua, como el Karl Fischer." },
    { es: "Higroscópico", en: "Hygroscopic", def: "Que absorbe humedad del aire. Una muestra higroscópica cambia su contenido en agua si se deja abierta." },
    { es: "Reactivo valorante", en: "Titrant", def: "Reactivo que la bureta añade a la celda en el Karl Fischer volumétrico; contiene el yodo." },
    { es: "Título o equivalente en agua", en: "Titer / water equivalent", def: "Miligramos de agua que reaccionan con 1 mL de reactivo valorante. Se determina con agua o con un patrón." },
    { es: "Tartrato de sodio dihidratado", en: "Sodium tartrate dihydrate", def: "Patrón sólido con dos moléculas de agua en su cristal; su contenido teórico de agua es del 15,66 %." },
    { es: "Karl Fischer culombimétrico", en: "Coulometric Karl Fischer", def: "Variante en la que el yodo se genera con corriente eléctrica; el agua se calcula a partir de la carga. Para trazas." },
    { es: "Constante de Faraday", en: "Faraday constant", def: "Carga de un mol de electrones: unos 96485 C/mol. Sale de multiplicar la carga del electrón por la constante de Avogadro." },
    { es: "Culombio", en: "Coulomb (C)", def: "Unidad de carga eléctrica: la que pasa con una corriente de un amperio durante un segundo." },
    { es: "Punto final bipotenciométrico", en: "Bipotentiometric end point", def: "Detección del final con un electrodo doble de platino: el voltaje cae de golpe cuando aparece yodo libre." },
    { es: "Deriva", en: "Drift", def: "Agua que entra en la celda por unidad de tiempo, por ejemplo en µg/min. Se resta del resultado." },
    { es: "Horno de Karl Fischer", en: "Karl Fischer oven", def: "Accesorio que calienta la muestra en un vial y lleva el agua evaporada a la celda con un gas seco." },
    { es: "Interferencia", en: "Interference", def: "Sustancia de la muestra que reacciona con el reactivo o forma agua y falsea el resultado." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Pesafiltro vacío 30,1250 g; con la muestra 32,1250 g; después de secar 32,0890 g. ¿Cuál es la pérdida por secado?",
      answer: 1.8,
      tolerance: 0.01,
      unit: "%",
      explain: "Muestra: 32,1250 − 30,1250 = 2,0000 g. Perdido: 32,1250 − 32,0890 = 0,0360 g. LOD = 0,0360 / 2,0000 × 100 = 1,8 %.",
    },
    {
      kind: "number",
      q: "Un lote da un LOD del 1,25 % y un Karl Fischer del 0,35 %. ¿Qué porcentaje de volátiles que no son agua indica la diferencia?",
      answer: 0.9,
      tolerance: 0.01,
      unit: "%",
      explain: "El LOD cuenta todo lo volátil y el KF solo el agua: 1,25 − 0,35 = 0,9 %, casi seguro disolvente. Qué disolvente es lo dice la cromatografía de gases.",
    },
    {
      kind: "number",
      q: "Con H 1,008; C 12,011; O 15,999 y Na 22,990, ¿qué porcentaje teórico de agua tiene el tartrato de sodio dihidratado, Na₂C₄H₄O₆·2H₂O?",
      answer: 15.66,
      tolerance: 0.005,
      unit: "%",
      explain: "Agua: 18,015 g/mol. Tartrato dihidratado: 2 × 22,990 + 4 × 12,011 + 8 × 1,008 + 8 × 15,999 = 230,08 g/mol. Agua: 2 × 18,015 / 230,08 × 100 = 15,66 %.",
    },
    {
      kind: "number",
      q: "Para el título pesas 180,0 mg de tartrato de sodio dihidratado (15,66 % de agua) y gastas 5,64 mL de reactivo. ¿Cuál es el título?",
      answer: 5,
      tolerance: 0.01,
      unit: "mg/mL",
      explain: "Agua del patrón: 180,0 × 0,1566 = 28,19 mg. Título = 28,19 / 5,64 = 5,00 mg/mL, es decir, 5 mg/mL.",
    },
    {
      kind: "number",
      q: "Karl Fischer volumétrico: título 4,95 mg/mL, gasto 3,10 mL, muestra 500,0 mg. ¿Qué contenido de agua tiene la muestra?",
      answer: 3.07,
      tolerance: 0.01,
      unit: "%",
      explain: "Agua: 3,10 × 4,95 = 15,35 mg. Contenido: 15,35 / 500,0 × 100 = 3,07 %.",
    },
    {
      kind: "number",
      q: "Un Karl Fischer culombimétrico pasa una corriente de 0,100 A durante 20 s. Con F = 96485 C/mol, 2 electrones por yodo, 1 yodo por agua y agua de 18,015 g/mol, ¿cuántos microgramos de agua ha valorado?",
      answer: 186.7,
      tolerance: 0.01,
      unit: "µg",
      explain: "Carga: 0,100 × 20 = 2,0 C. Agua por culombio: 18,015 / (2 × 96485) = 93,36 µg. Agua: 2,0 × 93,36 = 186,7 µg.",
    },
    {
      kind: "number",
      q: "Culombimétrico: agua total medida 250 µg; deriva 5 µg/min; el análisis duró 4 min; muestra 2,300 g. ¿Cuál es el contenido de agua corregido, en ppm (µg/g)?",
      answer: 100,
      tolerance: 0.01,
      unit: "ppm",
      explain: "Agua de la deriva: 5 × 4 = 20 µg. Agua de la muestra: 250 − 20 = 230 µg. Contenido: 230 / 2,300 = 100 ppm.",
    },
    {
      kind: "choice",
      q: "Vas a tomar una muestra de producto seco y caliente para el Karl Fischer. ¿Qué haces?",
      options: [
        "Lo dejo enfriar en el frasco abierto para no empañar el vidrio",
        "Lo pongo en una bolsa abierta y la cierro al llegar al laboratorio",
        "Lleno bien el frasco hermético, lo cierro enseguida y lo etiqueto",
        "Tomo poca muestra en un frasco grande para que se enfríe antes",
      ],
      answer: 2,
      explain: "El producto seco puede coger humedad del aire enseguida. Frasco hermético, bien lleno para que quede poco aire y cerrado enseguida, según el procedimiento.",
    },
    {
      kind: "choice",
      q: "El control en proceso del secado da KF 0,8 % con un límite de 0,3 %. ¿Qué haces?",
      options: [
        "Sigo la hoja: seguir secando, nueva muestra y anoto ambos resultados",
        "Pido que repitan la misma muestra hasta que salga por debajo del límite",
        "Mezclo el lote con producto más seco de otro bidón para que cumpla",
        "Anoto 0,3 % porque la próxima muestra seguro que ya estará bien",
      ],
      answer: 0,
      explain: "Un control intermedio alto significa que el secado no ha terminado: se sigue secando y se vuelve a muestrear. Repetir hasta cumplir es lo que la FDA llama «testing into compliance» y es inaceptable.",
    },
    {
      kind: "choice",
      q: "El laboratorio debe medir el agua de un sólido que no se disuelve en el reactivo de Karl Fischer. ¿Qué solución es la habitual?",
      options: [
        "Usar la pérdida por secado y llamar agua a todo lo que se pierda",
        "Moler el sólido al aire durante un rato para que se disuelva mejor",
        "Echar más reactivo valorante hasta que el sólido acabe disuelto",
        "Un horno de KF que evapora el agua y la lleva a la celda con gas seco",
      ],
      answer: 3,
      explain: "El horno calienta la muestra en un vial y un gas seco arrastra solo el agua a la celda. La pérdida por secado no distingue agua de disolvente y moler al aire mete humedad.",
    },
  ],
};
