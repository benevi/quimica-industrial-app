import type { Lesson } from "./types";

export const densidadAFondo: Lesson = {
  slug: "densidad-y-viscosidad-a-fondo",
  level: 8,
  order: 4,
  title: "Densidad y viscosidad en el laboratorio a fondo",
  titleEn: "Density and viscosity testing in depth",
  minutes: 38,
  summary:
    "Cómo mide el laboratorio la densidad de un líquido con picnómetro y con densímetro de tubo vibrante, por qué siempre a temperatura fija, cómo se saca de ella la concentración de una mezcla de etanol y agua, qué son la densidad aparente y compactada de un polvo con el índice de Carr y la razón de Hausner, y qué son la viscosidad dinámica y cinemática, cómo se miden y qué tienen que ver con el reactor, la bomba y el filtro.",
  body: `
En «Densidad a fondo: pasar de litros a kilos sin equivocarse» aprendiste qué es la densidad y a usarla para cargar. En «Fluidos a fondo: presión, caudal y por qué un líquido se mueve por una tubería» viste por primera vez la viscosidad. Y la lección corta «Densidad y viscosidad» de este nivel te dio los nombres de los aparatos. Aquí entras en el laboratorio de control de calidad: cómo se miden estas propiedades con exactitud, qué cuentas hay detrás del número que te llega y qué dicen de tu lote.

### Por qué el laboratorio mide estas cosas
Tres motivos, todos con una norma detrás:

- **Recepción.** La guía ICH Q7 (buenas prácticas de fabricación de principios activos) pide al menos un ensayo de identidad de cada lote de material que entra en fábrica (apartado 7.30). Para un disolvente, la densidad es un ensayo rápido que avisa de un bidón equivocado.
- **Control en proceso** (*in-process control*). ICH Q7 permite que personal de producción cualificado haga controles en proceso y ajuste el proceso dentro de límites aprobados por calidad, documentándolo todo en la hoja de producción (apartado 8.33). Una medida de densidad en planta es uno de esos controles.
- **Especificación.** La guía ICH Q6A dice que un ensayo entra en la especificación cuando influye en la calidad del lote. Cita las propiedades fisicoquímicas del principio activo como ensayos que se eligen caso por caso y, para los medicamentos líquidos orales bastante viscosos, la viscosidad y la densidad relativa.

### El picnómetro, paso a paso
El **picnómetro** (*pycnometer*) es un frasquito de vidrio con un tapón atravesado por un capilar: al taparlo, sale el líquido sobrante y dentro queda siempre el mismo volumen. La idea es pesar ese volumen fijo.

**Paso 1: averiguar su volumen real con agua.** No te fías del volumen grabado: lo mides. Con valores de ejemplo:

1. Picnómetro vacío, limpio y seco: 31,2054 g.
2. Lleno de agua purificada a 20,0 °C: 56,1580 g.
3. Masa de agua: 56,1580 − 31,2054 = 24,9526 g.
4. El agua a 20 °C tiene 0,998206 g/mL (calculado con la formulación IAPWS, la de la asociación internacional para las propiedades del agua).
5. Volumen: 24,9526 / 0,998206 = **24,9974 mL**.

**Paso 2: la muestra.** Lo vacías, lo secas, lo llenas con la muestra a la misma temperatura y pesas: 54,3280 g (valor de ejemplo).

1. Masa de muestra: 54,3280 − 31,2054 = 23,1226 g.
2. Densidad: 23,1226 / 24,9974 = **0,9250 g/mL**.

**La corrección del aire.** El aire empuja hacia arriba todo lo que pesas, un poco más cuanto más volumen tiene. En los métodos exactos se corrige con esta fórmula, que sale de que ese empuje afecta igual al agua y a la muestra porque ocupan el mismo volumen:

> ρ muestra = ρ aire + (masa de muestra / masa de agua) × (ρ agua − ρ aire)

Con aire de 0,0012 g/mL: 0,0012 + (23,1226 / 24,9526) × (0,998206 − 0,0012) = **0,9251 g/mL**. Cambia en la cuarta decimal. Si la corrección se aplica o no, lo dice el método.

Los fallos que estropean la medida: una burbuja dentro, el exterior mojado al pesar, la muestra a otra temperatura distinta de la del agua y una balanza sin calibrar («Balanzas y pesada a fondo: del gramo al kilo con un resultado en el que se pueda confiar»).

### El densímetro de tubo vibrante
Es el aparato de casi todos los laboratorios. Dentro hay un tubo de vidrio en forma de U, de unos pocos mililitros, que vibra como un diapasón. Piensa en un muelle con un peso colgado: si le añades peso, rebota más despacio. Con el tubo pasa igual: lleno de un líquido más denso, cada vibración tarda más.

El tiempo de una vibración se llama **periodo** (*period*), letra τ (tau). De la física del muelle sale que la densidad es una recta si se usa el periodo al cuadrado:

> ρ = A × τ² − B

A y B son las **constantes del aparato**, propias de cada tubo. Se obtienen con el **ajuste** (*adjustment*) con dos sustancias de densidad conocida, normalmente aire y agua.

**La cuenta del ajuste** (periodos de ejemplo, en milisegundos, a 20 °C):

| Sustancia | Densidad conocida (g/cm³) | Periodo medido (ms) |
|---|---|---|
| Aire | 0,0012 | 2,500000 |
| Agua | 0,998206 | 2,640000 |

1. A = (0,998206 − 0,0012) / (2,640000² − 2,500000²) = 0,997006 / 0,719600 = **1,3855**.
2. B = A × 2,500000² − 0,0012 = **8,6582**.

**Una muestra.** En la recepción de un tolueno el aparato mide τ = 2,6224 ms. ρ = 1,3855 × 2,6224² − 8,6582 = **0,8699 g/cm³**. La ficha de datos de seguridad de la app da 0,87 g/cm³: cuadra.

El aparato hace esta cuenta solo y controla la temperatura del tubo. Tú tienes que saber tres cosas:

- **Las burbujas mienten hacia abajo.** Una burbuja quita masa al tubo: la densidad sale más baja que la real. El aparato suele tener una cámara para verlas.
- **El agua del día.** Antes de medir se comprueba con agua que da su valor; si no, se limpia el tubo o se ajusta de nuevo.
- **Lo que queda dentro.** Un resto de la muestra anterior o de disolvente de lavado cambia la siguiente lectura.

### Por qué siempre a temperatura fija
Al calentarse, un líquido se dilata y su densidad baja. Mira el agua, calculada con la formulación IAPWS:

| Temperatura | Densidad del agua (g/mL) |
|---|---|
| 15 °C | 0,999101 |
| 20 °C | 0,998206 |
| 25 °C | 0,997048 |

Entre 15 y 25 °C baja 0,00205 g/mL: unos **0,0002 g/mL por grado**. Los disolventes y sus mezclas se dilatan más que el agua (su cifra depende de cada uno y no la damos aquí). Más adelante verás que en una mezcla de etanol y agua 0,0002 g/mL equivalen a un 0,1 % de concentración. Un grado mal controlado ya mueve el resultado. Por eso la especificación siempre da la temperatura, normalmente 20 °C, y el aparato o el baño la mantiene fija.

### Densidad relativa
La **densidad relativa** (*relative density*) divide la densidad de la muestra entre la del agua. No tiene unidades, pero sí dos temperaturas, que se escriben así: d²⁰₂₀ (muestra a 20 °C, agua a 20 °C) o d²⁰₄ (muestra a 20 °C, agua a 4 °C). Con una muestra de 0,8700 g/mL a 20 °C:

- d²⁰₂₀ = 0,8700 / 0,998206 = **0,8716**.
- d²⁰₄ = 0,8700 / 0,999975 = **0,8700**. Con el agua a 4 °C casi coincide con la densidad en g/mL.

Difieren en la tercera decimal. Por eso no se compara un resultado con un límite sin mirar cuál de las dos pide la especificación.

### De la densidad a la concentración: etanol y agua
Muchas disoluciones tienen una relación fija entre densidad y concentración. La mejor estudiada es la mezcla de etanol y agua: hay una fórmula oficial, la de las tablas alcoholimétricas internacionales de la Organización Internacional de Metrología Legal (OIML), que en España recogía una orden ministerial de 1988 (hoy derogada) copiando una directiva europea de 1976. Calculada con esa fórmula, a 20 °C:

| Etanol en masa | Densidad (g/mL) |
|---|---|
| 0 % (agua) | 0,9982 |
| 10 % | 0,9818 |
| 20 % | 0,9686 |
| 30 % | 0,9538 |
| 40 % | 0,9351 |
| 50 % | 0,9138 |
| 60 % | 0,8911 |
| 70 % | 0,8676 |
| 80 % | 0,8434 |
| 90 % | 0,8179 |
| 100 % (etanol) | 0,7892 |

Cuanto más etanol, menos densa: el etanol pesa menos que el agua.

**Leer la tabla.** La muestra del picnómetro dio 0,9250 g/mL a 20 °C. Está entre el 40 % (0,9351) y el 50 % (0,9138). Interpolar es suponer que entre dos filas la tabla es una recta:

1. Distancia desde la fila del 40 %: 0,9351 − 0,9250 = 0,0101.
2. Distancia entre filas: 0,9351 − 0,9138 = 0,0213.
3. Concentración: 40 + 10 × 0,0101 / 0,0213 = **44,7 % en masa**.

La fórmula completa da 44,9 %. La diferencia sale de que la tabla no es una recta entre filas tan separadas. Por eso el laboratorio usa la tabla oficial con filas muy juntas o la función que trae el densímetro, nunca una tabla de diez filas.

**Masa o volumen.** La misma norma define dos maneras de dar la concentración: el título en masa (% mas), masa de etanol entre masa de mezcla, y el título en volumen (% vol), volumen de etanol puro a 20 °C entre volumen de mezcla a 20 °C. Se pasa de una a otra así:

> % vol = % mas × ρ mezcla / ρ etanol

Para la muestra: 44,9 × 0,9250 / 0,7892 = **52,6 % vol**. El mismo líquido da dos números muy distintos: comprueba siempre qué unidad pide la hoja.

**La contracción, con números.** Mezcla 50 mL de etanol y 50 mL de agua a 20 °C. Masas: 50 × 0,7892 = 39,46 g y 50 × 0,9982 = 49,91 g, en total 89,37 g, con un 44,2 % de etanol en masa. La fórmula da a esa mezcla 0,9265 g/mL, así que ocupa 89,37 / 0,9265 = 96,5 mL. Faltan **3,5 mL**. Por eso las mezclas se preparan pesando.

**Lo que la densidad no puede decir.** El metanol de la app tiene 0,79 g/cm³ y el etanol puro, 0,7892 g/mL: con la densidad no se distinguen. Sirve para ver que un bidón no es diclorometano (1,33) ni agua, pero la identidad completa la dan otros ensayos, como el infrarrojo que verás en «Espectroscopia a fondo: lo que la luz cuenta de una molécula (UV-Vis e infrarrojo)». Y en una mezcla de tres componentes, una sola densidad no basta para saber cuánto hay de cada uno.

### Polvos: densidad aparente y compactada
Ya sabes de «Manejo de sólidos a fondo: pesar, cargar, trasvasar y contener polvos» que un polvo lleva aire entre los granos. El laboratorio mide dos densidades:

- **Densidad aparente** (*bulk density*): masa del polvo entre el volumen que ocupa vertido sin golpear, en una probeta graduada.
- **Densidad compactada** (*tapped density*): la del mismo polvo después de golpear la probeta de forma mecánica hasta que el volumen casi no baja más.

El método está en la Farmacopea Europea (capítulo 2.9.34), la japonesa (3.01) y la estadounidense (capítulo 616). La guía ICH Q4B, en su anexo 13, declaró los tres intercambiables y señala que no traen límites de aceptación: los pone cada especificación. Los detalles (cantidad de muestra, número de golpes) están en esos textos, que son de pago, y no se reproducen aquí.

**Las cuentas.** Con valores de ejemplo: 50,0 g de polvo ocupan 125 mL vertidos (V₀) y 100 mL después de golpear (V_f).

1. Densidad aparente: 50,0 / 125 = **0,400 g/mL**.
2. Densidad compactada: 50,0 / 100 = **0,500 g/mL**.
3. **Índice de Carr o de compresibilidad** (*compressibility index*): cuánto se ha encogido, en porcentaje. 100 × (125 − 100) / 125 = **20 %**. Con densidades es lo mismo: 100 × (0,500 − 0,400) / 0,500 = 20 %.
4. **Razón de Hausner** (*Hausner ratio*): 125 / 100 = 0,500 / 0,400 = **1,25**.

Las dos miden lo mismo y se pasa de una a otra con una cuenta: índice de Carr = 100 × (1 − 1 / Hausner). Con 1,25: 100 × (1 − 0,8) = 20 %.

**Qué significan.** Un polvo que apenas se asienta (Hausner cerca de 1, Carr pequeño) suele fluir bien: sus granos ruedan unos sobre otros. Uno que se asienta mucho suele ser cohesivo, con granos que se pegan y forman puentes. La farmacopea tiene una tabla que clasifica la fluidez según estos valores; es de pago y no se reproduce en esta lección. El límite de tu producto lo da su especificación.

**El aire que hay dentro.** Si el sólido de los cristales tiene 1,30 g/mL (valor de ejemplo), en el polvo vertido de 0,400 g/mL el aire ocupa 1 − 0,400 / 1,30 = **0,69**: un 69 % del volumen.

**Por qué te importa en el envasado.** Un bidón tiene 120 L útiles (valor de ejemplo). Con el polvo vertido caben 120 × 0,400 = 48 kg; si se asentara hasta la compactada, 120 × 0,500 = 60 kg. Un lote de 300 kg pide 300 / 48 = 6,25, es decir, **7 bidones**, o 300 / 60 = 5 si se asienta del todo. Por eso un producto con la densidad aparente fuera de lo normal descuadra los bidones previstos y queda un hueco de aire arriba que se asienta en el viaje («Envasado y etiquetado a fondo: el último paso antes de que el lote salga»).

**Y al cliente.** Quien fabrica comprimidos o cápsulas llena por volumen: si el polvo es más ligero, entra menos masa de principio activo en cada hueco. Por eso algunas especificaciones de principio activo incluyen estas densidades.

**Qué la cambia en planta.** El tamaño y la forma de los cristales («Tamaño de partícula y tamizado»), que vienen de la cristalización; la molienda; la humedad residual del secado; y la forma de descargar el secadero.

### Viscosidad: dinámica y cinemática
La **viscosidad** (*viscosity*) es el rozamiento interno de un fluido. Imagina el líquido como una baraja de cartas: si empujas la carta de arriba, cada una arrastra a la de debajo. Cuanto más cuesta que resbalen, más viscoso es. Hay dos formas de darla.

**Viscosidad dinámica** (*dynamic viscosity*), letra η (eta). Es la fuerza que hay que hacer para que las capas resbalen unas sobre otras a una velocidad dada. Su unidad legal es el **pascal segundo** (Pa·s), según el Real Decreto 2032/2009 de unidades legales. En el laboratorio se usa el **milipascal segundo** (mPa·s), la milésima parte. En fichas antiguas verás el centipoise (cP), que vale lo mismo que el mPa·s.

**Viscosidad cinemática** (*kinematic viscosity*), letra ν (ni). Es la dinámica dividida entre la densidad:

> ν = η / ρ

Su unidad sale de dividir: Pa·s entre kg/m³ da **m²/s**. En la práctica se usa el **mm²/s**, la millonésima parte, que en fichas antiguas es el centistokes (cSt). Es la que mide un viscosímetro de tubo, donde el líquido cae por su propio peso: uno más denso cae con más fuerza.

**Una cuenta con agua a 20 °C** (formulación IAPWS): η = 1,0016 mPa·s y ρ = 0,998206 g/mL. ν = 1,0016 / 0,998206 = **1,0034 mm²/s**. Truco de unidades: mPa·s divididos entre g/mL dan directamente mm²/s.

### Cómo se mide
**Viscosímetro capilar** (*capillary viscometer*). Un tubo de vidrio con un capilar fino y dos marcas. Se llena, se deja caer el líquido por su peso dentro de un baño a temperatura fija y se cronometra cuánto tarda el menisco en pasar de una marca a otra. La viscosidad cinemática es ese tiempo por la constante del tubo, que viene en su certificado de calibración:

> ν = K × t

Con K = 0,01000 mm²/s² y t = 152,4 s (valores de ejemplo): ν = 0,01000 × 152,4 = **1,524 mm²/s**. Si la muestra tiene 0,9250 g/mL, su viscosidad dinámica es η = 1,524 × 0,9250 = **1,410 mPa·s**. El cronómetro, el termómetro del baño y la constante del tubo tienen que estar calibrados.

**Viscosímetro rotacional** (*rotational viscometer*). Un husillo (*spindle*) gira dentro de la muestra y el aparato mide la fuerza de giro que necesita para mantener la velocidad. Cuanto más viscosa, más cuesta girar. Da la viscosidad dinámica y sirve también para pastas y suspensiones, que no bajarían por un capilar. El resultado solo vale con su husillo, su velocidad y su temperatura anotados, por lo que verás a continuación.

### Newtonianos y no newtonianos
- **Fluido newtoniano** (*Newtonian fluid*): su viscosidad no depende de lo deprisa que lo muevas. El agua y los disolventes de planta se comportan así: removerlos rápido o despacio no los hace más espesos.
- **Fluido no newtoniano** (*non-Newtonian fluid*): su viscosidad cambia con el movimiento. Ejemplos de casa:
  - **Se vuelve más fluido al moverlo** (*shear thinning*): el kétchup no sale del bote hasta que lo agitas, y la pintura se extiende bien con la brocha pero no gotea de la pared.
  - **Se vuelve más espeso al moverlo** (*shear thickening*): la maicena con un poco de agua parece líquida si metes el dedo despacio y se pone dura si la golpeas.
  - **Cambia con el tiempo de agitación** (*thixotropy*): un yogur removido se vuelve más líquido y tarda en recuperarse.

Una suspensión espesa de cristales en el reactor puede comportarse como no newtoniana. Por eso, en un viscosímetro rotacional, la misma muestra puede dar 850 mPa·s a 10 revoluciones por minuto y 420 mPa·s a 50 (valores de ejemplo): no es un error, es el producto.

### La temperatura, otra vez
Al calentar un líquido, su viscosidad **baja**, y mucho más deprisa que su densidad. El agua, con la formulación IAPWS:

| Temperatura | Viscosidad del agua (mPa·s) |
|---|---|
| 5 °C | 1,518 |
| 20 °C | 1,002 |
| 40 °C | 0,653 |
| 60 °C | 0,466 |
| 80 °C | 0,354 |

De 5 a 80 °C se divide por más de cuatro, mientras la densidad apenas baja un 3 %. Por eso un viscosímetro sin baño termostático no sirve.

### Qué tiene que ver con tu planta
- **Suspensiones en el reactor.** Cuanto más espesa la suspensión, peor se mezcla y peor pasa el calor a la camisa («El reactor a fondo: agitación, intercambio de calor y protecciones»). Si al parar el agitador los cristales se van al fondo es porque son más densos que el líquido: se agita al descargar.
- **Bombeo.** Con un líquido más viscoso, la tubería frena más y la bomba da menos caudal («Bombas a fondo: cómo elegir, arrancar y cuidar una bomba»).
- **Filtración y centrifugado.** Según la ley de Darcy de «Filtros a fondo: el filtro Nutsche y el filtro-secador agitado, paso a paso», el caudal que cruza la torta es inversamente proporcional a la viscosidad. Si todo lo demás no cambia, unas aguas madres parecidas al agua filtran a 20 °C 1,002 / 0,466 = **2,15 veces más despacio** que a 60 °C: una filtración de 60 minutos pasaría a unos 129. Lo mismo vale para el escurrido en la centrífuga.

### Si el resultado no cumple
Si una densidad de recepción no cuadra, el material no se usa: queda en cuarentena hasta que el laboratorio y calidad decidan («Recepción, muestreo y cuarentena a fondo: ningún material entra sin pasar el control»). Si es la densidad aparente del lote final, el laboratorio abre una investigación de resultado fuera de especificación (*out of specification*, OOS) y te preguntarán por la cristalización, el secado, la molienda y la descarga. Si es un control en proceso para ajustar el proceso, ICH Q7 dice que normalmente no hace falta una investigación OOS (apartado 8.36): se sigue lo que diga la hoja.

Todo lo anterior es para entender los números. En planta y en el laboratorio mandan siempre el procedimiento vigente (SOP), el método analítico aprobado y la hoja de producción.
`,
  plant: `
Lote ficticio VX-220. En el reactor R-412 se prepara la mezcla de etanol y agua para cristalizar. La hoja pide 44 a 46 % de etanol en masa y un control en proceso de densidad con el densímetro portátil DM-12, calibrado.

Tomas la muestra por la válvula de muestreo, con el agitador en marcha, y la llevas al DM-12. Antes compruebas el aparato con agua: marca 0,9982 g/mL a 20,0 °C. Cuadra. Llenas el tubo despacio, miras que no entren burbujas y esperas a que la temperatura del tubo se estabilice en 20,0 °C. Lectura: 0,9250 g/mL. El aparato la convierte con la tabla alcoholimétrica: 44,9 % en masa. Está dentro. Anotas la lectura, la concentración, la temperatura, el código del aparato y la hora.

Dos turnos después, el filtro-secador FD-405 descarga 300 kg de VX-220 seco. La hoja prevé 7 bidones de 120 L útiles. El laboratorio mide densidad aparente 0,40 g/mL y compactada 0,50 g/mL: razón de Hausner 1,25, dentro de la especificación del cliente. Al llenar caben unos 48 kg por bidón: seis llenos (288 kg) y un séptimo con los 12 kg restantes, como estaba previsto. Cuadra con la densidad aparente.

Una semana después, en otro lote, el agua del filtro tarda el doble en pasar. No calientas por tu cuenta: avisas al jefe de turno, que mira la temperatura de las aguas madres. Está más fría de lo que dice la hoja, y el líquido frío es más viscoso. Se sigue el procedimiento y se anota la incidencia.
`,
  batchRecord: `
- **Control en proceso de densidad**: código del densímetro y su calibración vigente, comprobación con agua antes de medir, lectura en g/mL con todas sus decimales, temperatura de medida y resultado convertido (por ejemplo, % de etanol en masa), con fecha, hora y firma.
- **Unidad de la concentración**: % en masa o % en volumen, la que pida la hoja.
- **Recepción de disolventes**: número de lote del proveedor y referencia del boletín del laboratorio con la densidad de identidad.
- **Cristalización y filtración**: temperatura de la suspensión y de las aguas madres al filtrar, y tiempos de filtración, que dependen de la viscosidad.
- **Envasado del producto seco**: número de bidones, masa neta de cada uno y cualquier diferencia con los previstos.
- **Resultados del laboratorio** que figuren en la hoja, como la densidad aparente y compactada, con su referencia.
- **Incidencias**: burbujas o lecturas que no se estabilizan, filtración más lenta de lo normal, temperatura fuera de rango y a quién se avisó.

Se anota lo que marca el aparato, nunca el valor esperado.
`,
  terms: [
    { es: "Picnómetro", en: "Pycnometer", def: "Frasco de vidrio de volumen fijo que se pesa vacío, lleno de agua y lleno de muestra para calcular la densidad." },
    { es: "Densímetro de tubo vibrante", en: "Oscillating U-tube density meter", def: "Aparato que calcula la densidad a partir del periodo de vibración de un tubo en U lleno de muestra." },
    { es: "Ajuste con aire y agua", en: "Air and water adjustment", def: "Medida de dos sustancias de densidad conocida para obtener las constantes A y B del densímetro." },
    { es: "Densidad relativa", en: "Relative density", def: "Densidad de la muestra dividida entre la del agua, con las dos temperaturas indicadas, como d²⁰₂₀ o d²⁰₄." },
    { es: "Tabla alcoholimétrica", en: "Alcoholometric table", def: "Tabla oficial que relaciona la densidad de una mezcla de etanol y agua con su concentración en masa o en volumen." },
    { es: "Densidad aparente", en: "Bulk density", def: "Masa de un polvo dividida entre el volumen que ocupa vertido, sin golpear." },
    { es: "Densidad compactada", en: "Tapped density", def: "Masa de un polvo dividida entre su volumen después de golpear la probeta hasta que casi no baja más." },
    { es: "Índice de Carr", en: "Compressibility index (Carr index)", def: "Cuánto se encoge un polvo al compactarlo, en porcentaje: 100 × (V₀ − V_f) / V₀." },
    { es: "Razón de Hausner", en: "Hausner ratio", def: "Densidad compactada entre densidad aparente, o V₀ / V_f. Cuanto más cerca de 1, menos se asienta el polvo." },
    { es: "Viscosidad dinámica", en: "Dynamic viscosity", def: "Resistencia de un fluido a que sus capas resbalen. Unidad legal, Pa·s; en el laboratorio, mPa·s." },
    { es: "Viscosidad cinemática", en: "Kinematic viscosity", def: "Viscosidad dinámica dividida entre la densidad. Unidad m²/s; en la práctica, mm²/s." },
    { es: "Viscosímetro capilar", en: "Capillary viscometer", def: "Tubo de vidrio en el que se cronometra la caída del líquido entre dos marcas; da la viscosidad cinemática." },
    { es: "Viscosímetro rotacional", en: "Rotational viscometer", def: "Aparato que hace girar un husillo en la muestra y mide la fuerza de giro; da la viscosidad dinámica." },
    { es: "Fluido no newtoniano", en: "Non-Newtonian fluid", def: "Fluido cuya viscosidad cambia según lo deprisa que se mueve o el tiempo que se agita, como el kétchup o una suspensión espesa." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Un picnómetro calibrado tiene 25,000 mL a 20 °C. Vacío pesa 30,1250 g y lleno de muestra a 20 °C, 52,0000 g. Sin corrección del aire, ¿cuál es la densidad de la muestra en g/mL?",
      answer: 0.875,
      tolerance: 0.002,
      unit: "g/mL",
      explain: "Masa de muestra: 52,0000 − 30,1250 = 21,8750 g. Densidad: 21,8750 / 25,000 = 0,875 g/mL.",
    },
    {
      kind: "number",
      q: "En una probeta, 60,0 g de polvo ocupan 144 mL vertidos y 120 mL después de golpearla. ¿Cuál es la razón de Hausner?",
      answer: 1.2,
      tolerance: 0.01,
      unit: "",
      explain: "Razón de Hausner = V₀ / V_f = 144 / 120 = 1,2. Es lo mismo que densidad compactada (0,500) entre aparente (0,417).",
    },
    {
      kind: "number",
      q: "Un polvo tiene densidad aparente 0,45 g/mL y compactada 0,54 g/mL. ¿Cuál es su índice de Carr, en porcentaje? Redondea a una decimal.",
      answer: 16.7,
      tolerance: 0.01,
      unit: "%",
      explain: "Índice de Carr = 100 × (0,54 − 0,45) / 0,54 = 16,7 %. Comprobación: la razón de Hausner es 1,2 y 100 × (1 − 1 / 1,2) da lo mismo.",
    },
    {
      kind: "number",
      q: "Un disolvente tiene una viscosidad dinámica de 0,59 mPa·s y una densidad de 0,87 g/mL (valores de ejemplo). ¿Cuál es su viscosidad cinemática en mm²/s? Redondea a tres decimales.",
      answer: 0.678,
      tolerance: 0.01,
      unit: "mm²/s",
      explain: "ν = η / ρ = 0,59 / 0,87 = 0,678 mm²/s. Los mPa·s divididos entre g/mL dan directamente mm²/s.",
    },
    {
      kind: "number",
      q: "En un viscosímetro capilar de constante 0,003 mm²/s² la muestra tarda 250 s en pasar entre las marcas. Su densidad es 0,79 g/mL. ¿Cuál es su viscosidad dinámica en mPa·s?",
      answer: 0.5925,
      tolerance: 0.01,
      unit: "mPa·s",
      explain: "Cinemática: ν = 0,003 × 250 = 0,75 mm²/s. Dinámica: η = 0,75 × 0,79 = 0,5925 mPa·s.",
    },
    {
      kind: "number",
      q: "Hay que envasar 240 kg de un producto de densidad aparente 0,40 kg/L en bidones de 120 L útiles. Sin contar con que se asiente, ¿cuántos bidones hacen falta?",
      answer: 5,
      tolerance: 0.001,
      unit: "bidones",
      explain: "Volumen: 240 / 0,40 = 600 L. Bidones: 600 / 120 = 5.",
    },
    {
      kind: "choice",
      q: "Con el densímetro de tubo vibrante, una muestra de etanol y agua da 0,9201 g/mL y en la pantalla se ve una burbuja dentro del tubo. ¿Qué haces?",
      options: [
        "Anoto 0,9201 porque el aparato corrige las burbujas por su cuenta",
        "Resto a mano un valor fijo para compensar el aire de la burbuja",
        "Repito la medida tras llenar sin burbujas; la burbuja da una densidad baja",
        "Caliento la muestra para que la burbuja se disuelva y anoto el valor",
      ],
      answer: 2,
      explain: "La burbuja quita masa al tubo y la lectura sale más baja que la real. Se vacía, se vuelve a llenar despacio y se anota la medida válida, según el procedimiento.",
    },
    {
      kind: "choice",
      q: "¿Por qué la especificación de densidad de un disolvente indica siempre una temperatura, por ejemplo 20 °C?",
      options: [
        "Porque la densidad baja al calentar y un grado ya mueve la cuarta decimal",
        "Porque a 20 °C el disolvente deja de evaporarse y no pierde masa",
        "Porque los densímetros solo funcionan a esa temperatura exacta",
        "Porque así lo exige la ficha de seguridad para el transporte",
      ],
      answer: 0,
      explain: "Un líquido se dilata al calentarse. En el agua son unos 0,0002 g/mL por grado y en los disolventes más; sin temperatura fija, los resultados no se pueden comparar con el límite.",
    },
    {
      kind: "choice",
      q: "Con un viscosímetro rotacional, la misma suspensión da 850 mPa·s a 10 rpm y 420 mPa·s a 50 rpm. ¿Qué significa?",
      options: [
        "Que el aparato está averiado, porque la viscosidad no puede cambiar",
        "Que la muestra se ha calentado entre una medida y otra",
        "Que hay que hacer la media y anotar 635 mPa·s como resultado",
        "Que es un fluido no newtoniano y hay que anotar husillo y velocidad",
      ],
      answer: 3,
      explain: "Es un fluido que se vuelve más fluido al moverlo más deprisa. El valor solo tiene sentido con su husillo, su velocidad y su temperatura, como diga el método.",
    },
    {
      kind: "choice",
      q: "En la recepción, la densidad de un bidón etiquetado como metanol da 0,79 g/mL. Un compañero dice que eso ya prueba que es metanol. ¿Qué le contestas?",
      options: [
        "Que sí, porque cada líquido tiene una densidad distinta de los demás",
        "Que no basta: el etanol da casi lo mismo y faltan otros ensayos",
        "Que no, porque la densidad de recepción solo sirve para pasar litros a kilos",
        "Que sí, siempre que la medida se haya hecho a 20 °C exactos",
      ],
      answer: 1,
      explain: "El metanol tiene 0,79 g/cm³ y el etanol puro 0,7892 g/mL: la densidad descarta errores groseros, como diclorometano o agua, pero no separa todos los líquidos. Por eso hay ensayos como el infrarrojo.",
    },
  ],
};
