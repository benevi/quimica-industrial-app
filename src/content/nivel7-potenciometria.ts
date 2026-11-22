import type { Lesson } from "./types";

export const potenciometriaAFondo: Lesson = {
  slug: "potenciometria-a-fondo",
  level: 7,
  order: 11.5,
  title: "pH y conductividad a fondo: electrodos, calibración y medida en planta y en el laboratorio",
  titleEn: "Potentiometry and conductivity in depth",
  minutes: 38,
  summary:
    "Por qué un electrodo de vidrio da una tensión que depende del pH, de dónde salen los 59,16 mV por unidad, cómo se calcula la pendiente y el punto cero al calibrar, qué corrige la compensación de temperatura y qué no, cómo se cuida el electrodo, qué mide de verdad un conductímetro y cómo se mide bien en planta y en el laboratorio.",
  body: `
En «Potenciometría y conductimetría» viste que el pHmetro se calibra con tampones y que la conductividad vigila el agua; qué es el pH está en «Ácidos, bases y pH a fondo». Aquí verás cómo funciona el aparato por dentro, las cuentas de una calibración y cuándo una medida no es de fiar.

### Qué es un potencial
Dos depósitos de agua unidos por un tubo: si uno está más alto, el agua baja hacia el otro. La empuja la diferencia de altura. Con la electricidad pasa igual: las cargas se mueven si hay una diferencia de **potencial** (*electrical potential*) entre dos puntos. Esa diferencia es la **tensión** o voltaje, en voltios (V). Un milivoltio (mV) es la milésima parte.

La **potenciometría** (*potentiometry*) mide una tensión para deducir una concentración. El pHmetro es un voltímetro muy especial que, en lugar de milivoltios, muestra unidades de pH.

### Por qué el vidrio «siente» el pH
El electrodo de medida es un tubo con la punta cerrada en forma de bulbo. Ese bulbo es de un vidrio fabricado a propósito, que deja intercambiar iones hidrógeno (H⁺) con el líquido. Dentro lleva un tampón de pH 7.

Si fuera hay más H⁺ que dentro, se crea una tensión a través del vidrio. Si hay menos, se crea una tensión de signo contrario. Si el líquido de fuera también tiene pH 7, la tensión es cero. Es como una puerta entre dos salas: cuanto más distinta la gente a cada lado, más empujón.

Para medir esa tensión hace falta un segundo punto de contacto con la muestra: el **electrodo de referencia** (*reference electrode*). Su tensión no cambia con el pH. Toca la muestra a través de un orificio o una pieza porosa, el **diafragma** (*junction*). Hoy lo normal es el **electrodo combinado** (*combination electrode*), que lleva los dos en un solo cuerpo. Muchos traen además una sonda de temperatura.

Un matiz: el vidrio nota la **actividad** (*activity*) de los H⁺, la parte que actúa de verdad, más que su concentración. En disoluciones diluidas casi coinciden.

### La ecuación de Nernst y los 59,16 mV
La relación entre tensión y pH la da la **ecuación de Nernst** (*Nernst equation*). Para el electrodo de pH, con su tampón interno de pH 7, queda así:

> E = (2,303 × R × T / F) × (7 − pH)

E es la tensión, en voltios; T, la temperatura absoluta en kelvin (°C + 273,15); R, la constante de los gases, 8,314 J/(mol·K); F, la constante de Faraday, 96485 C/mol, la carga de un mol de electrones; y 2,303 pasa de logaritmo natural a decimal.

De dónde salen R y F: el Real Decreto 2032/2009 de unidades legales fija la carga elemental, la constante de Boltzmann y el número de Avogadro. Multiplicando el número de Avogadro por la carga elemental sale F = 96485,33 C/mol; por la constante de Boltzmann, R = 8,3145 J/(mol·K).

El trozo que va delante del paréntesis es la **pendiente teórica** (*theoretical slope*): los milivoltios que cambia el electrodo por cada unidad de pH. A 25 °C (298,15 K):

> 2,302585 × 8,31446 × 298,15 / 96485,33 = 0,05916 V = 59,16 mV por unidad de pH

La única variable es la temperatura:

| Temperatura | Pendiente teórica |
|---|---|
| 0 °C | 54,20 mV/pH |
| 20 °C | 58,17 mV/pH |
| 25 °C | 59,16 mV/pH |
| 40 °C | 62,14 mV/pH |
| 50 °C | 64,12 mV/pH |
| 60 °C | 66,10 mV/pH |

Un electrodo ideal a 25 °C da 0 mV a pH 7, +177,5 mV a pH 4 y −177,5 mV a pH 10. La señal es pequeña: una décima de pH son 5,9 mV.

### Una señal débil detrás de una resistencia enorme
El vidrio conduce muy mal: en el ejemplo del libro de Kuphaldt, la pareja de electrodos tiene 700 millones de ohmios. El pHmetro necesita una entrada de resistencia mucho mayor todavía. Y el cable cuenta: con esa resistencia y unos 9 m de cable coaxial, Kuphaldt calcula que la lectura tarda casi 3 segundos en seguir un cambio brusco. Por eso los cables son cortos, para retrasar menos y captar menos ruido eléctrico, o llevan un **preamplificador** (*preamplifier*) junto a la sonda. Tú no cambias un cable por otro más largo ni tiras de él.

### Pendiente y punto cero reales
El electrodo real no es el ideal. Se describe con dos números:

- **Pendiente real** (*slope*): los mV por unidad de pH que da de verdad, en porcentaje de la teórica. Suele salir algo por debajo y baja al envejecer el vidrio.
- **Punto cero** (*zero point*, u *offset*): la tensión en pH 7, o el pH al que la tensión vale cero. En teoría, 0 mV a pH 7. Se desplaza si el diafragma está sucio o se ha contaminado el tampón interno.

Dos números definen una recta: por eso bastan dos tampones.

### Calibrar con dos tampones, con números
Valores de ejemplo, todo a 25 °C:

| Tampón | Lectura |
|---|---|
| pH 7,00 | +6,0 mV |
| pH 4,01 | +176,5 mV |

**Paso 1, pendiente real.** Diferencia de tensión entre diferencia de pH: (176,5 − 6,0) / (7,00 − 4,01) = 170,5 / 2,99 = 57,02 mV/pH.

**Paso 2, en porcentaje.** 57,02 / 59,16 × 100 = 96,4 %.

**Paso 3, punto cero.** El offset es +6,0 mV. El pH al que el electrodo daría 0 mV es 7 + 6,0 / 57,02 = 7,11.

**Paso 4, medir.** Una muestra da +95,0 mV: pH = 7 − (95,0 − 6,0) / 57,02 = 5,44. Si el aparato no se hubiera calibrado y usara la recta ideal, mostraría 7 − 95,0 / 59,16 = 5,39. Cinco centésimas de error sin que nada lo avise.

El equipo hace estas cuentas y muestra pendiente y offset: tú los lees y los anotas.

**Tres tampones.** Con 4, 7 y 10 hay dos tramos: uno ácido y uno básico. Siguiendo el ejemplo, si el tampón pH 10,01 lee −163,5 mV, la pendiente del tramo básico es (6,0 + 163,5) / 3,01 = 56,31 mV/pH, un 95,2 %. Cada tramo puede tener la suya.

**Qué tampones elegir.** Los que encierren el pH que vas a medir. Kuphaldt lo explica así: para medir entre 7,5 y 9 se calibra con 7 y 10. Fuera del tramo calibrado, la recta se alarga a ciegas.

### Calibrar, ajustar y verificar
El Vocabulario Internacional de Metrología (VIM) separa calibrar (relacionar lo que marca el equipo con los valores de unos patrones) del **ajuste** (*adjustment*), al que, avisa, a menudo se llama mal «autocalibración». Lo que hace el pHmetro al guardar la nueva recta es, en rigor, un ajuste. Luego se **verifica**, por ejemplo midiendo un tampón de control que no se usó para ajustar.

Las guías de la Organización Mundial de la Salud (OMS) para laboratorios de control (TRS 957) lo piden así: el pHmetro se verifica con tampones certificados antes de usarlo. El tampón debe ser **trazable** (*traceable*): su valor se relaciona con una referencia por una cadena documentada de calibraciones (VIM 2.41). Por eso se anotan lote y caducidad. Más en «Instrumentos de medida a fondo».

### Cuándo el electrodo no vale
Según Kuphaldt, una pendiente baja puede indicar que hay que cambiar la sonda. ¿Cuánto es «baja»? Los criterios (pendiente mínima y máxima, offset máximo) los fija tu procedimiento. Aquí usamos como valor de ejemplo 95 a 105 %.

Con valores de ejemplo, un electrodo viejo da +18 mV en pH 7,00 y +166 mV en pH 4,01: (166 − 18) / 2,99 = 49,50 mV/pH, un 83,7 %. No se usa.

La guía ICH Q7, de buenas prácticas de fabricación de principios activos, es clara (5.34): un instrumento que no cumple los criterios de calibración no se usa. Se limpia el electrodo, se comprueba que no está seco, que el diafragma no está tapado y que tiene electrolito si es de los que se rellenan, se recalibra con tampones nuevos y, si sigue sin cumplir, se retira, se etiqueta y se avisa.

### Temperatura: dos efectos que no son lo mismo
**Efecto 1: la pendiente cambia.** Es lo que se ve en la tabla de Nernst. La **compensación de temperatura** (*automatic temperature compensation*, ATC) mide la temperatura con la sonda y usa la pendiente correcta. Ejemplo con el electrodo calibrado antes a 25 °C (57,02 mV/pH): a 50 °C su pendiente pasa a 57,02 × 323,15 / 298,15 = 61,80 mV/pH. Una muestra a 50 °C da −110,0 mV:

- Con compensación: 7 − (−110,0 − 6,0) / 61,80 = 8,88.
- Sin compensación: 7 − (−116,0) / 57,02 = 9,03.

Quince centésimas. El error crece cuanto más lejos de 7 está la muestra y de la temperatura de calibración. La cuenta es simplificada: supone que el punto cero no se mueve.

**Efecto 2: el pH de la muestra cambia de verdad.** Esto no lo corrige nada. El ejemplo de Kuphaldt: el agua pura es neutra a cualquier temperatura, pero su pH es 7,00 solo a 25 °C; a 60 °C es 6,51. Por eso el método dice a qué temperatura se mide.

### Cuidados del electrodo
- **Siempre húmedo.** El vidrio funciona porque está hidratado. Se guarda como indique el fabricante, con su capuchón o en su disolución de conservación.
- **Se gasta aunque no se use.** Según Kuphaldt, la hidratación va desprendiendo capas finas del vidrio: la vida es limitada incluso en el estante.
- **Nada de frotar.** El bulbo es muy frágil: nunca toalla, cepillo ni nada abrasivo (Kuphaldt). Se limpia con líquidos.
- **Limpiar según la suciedad.** Kuphaldt da esta lista orientativa; la disolución exacta la fija el fabricante:

| Suciedad | Limpieza |
|---|---|
| Grasas y aceites | Tensioactivo no iónico o metanol |
| Proteínas | Disolución ácida de pepsina |
| Minerales, incrustaciones | Disolución ácida |
| Sulfuros, crecimiento microbiano | Disolución de tiourea |
| Sales | Agua desionizada |

Siempre se acaba con un enjuague de agua desionizada.

- **Diafragma sucio.** Si se tapa, el punto cero se desplaza. Kuphaldt recomienda remojar en disolución de limpieza tibia o en agua desionizada.
- **Disolventes orgánicos.** Según el manual de laboratorio de la FDA, la agencia de medicamentos de Estados Unidos, el pH en metanol o en metanol con agua al 50 % no es exacto: el electrodo necesita su superficie recubierta de agua. Manda el método validado.
- **Error alcalino** (*alkaline error*). A pH muy alto y con mucho sodio, el vidrio empieza a responder también al sodio y marca un pH más bajo que el real. A partir de qué pH ocurre depende del vidrio, y para esas medidas hay electrodos especiales.

### Conductividad: qué mide
En un metal la corriente la llevan electrones. En un líquido la llevan los **iones** (*ions*), átomos o moléculas con carga. Cuantos más iones, más conduce. El agua pura apenas tiene: es casi aislante.

La conductividad es **inespecífica** (*non-specific*). Dice cuántos iones hay en conjunto, no cuáles. Sirve cuando cualquier ion es indeseable, como en el agua purificada, o cuando ya sabes cuál es el único que hay.

El aparato mide la **conductancia** (*conductance*), G, lo contrario de la resistencia, en siemens (S), un amperio por voltio. Pero G depende también del tamaño y la separación de los electrodos. Para tener un dato del líquido se usa la **constante de celda** (*cell constant*), θ: la separación dividida por el área de los electrodos.

> conductividad = G × θ, en S/cm (θ en cm⁻¹)

En agua se usa el microsiemens por centímetro (µS/cm). 1 mS/cm = 1000 µS/cm.

Con valores de ejemplo: una celda de θ = 0,1 cm⁻¹ mide G = 8,0 µS. La conductividad es 8,0 × 0,1 = 0,80 µS/cm.

**La constante de celda se comprueba** con una disolución patrón certificada. Con valores de ejemplo: el patrón tiene 100,0 µS/cm a 25 °C y la celda mide G = 980 µS. Entonces θ = 100,0 / 980 = 0,1020 cm⁻¹, un 2,0 % por encima de su valor nominal de 0,100. Si ese 2,0 % cabe en la tolerancia lo dice tu método.

### Dos, cuatro o ningún electrodo
- **Celda de dos electrodos** (*two-electrode cell*): dos placas metálicas a las que, con el tiempo, se les pegan depósitos aislantes. Kuphaldt avisa: entonces lee bajo, justo hacia el lado que parece bueno.
- **Celda de cuatro electrodos** (*four-electrode cell*): dos electrodos meten la corriente y otros dos, por los que casi no pasa corriente, miden la tensión del líquido. La suciedad de los electrodos apenas afecta.
- **Celda toroidal o sin electrodos** (*toroidal* o *electrodeless*): dos bobinas en un anillo por el que pasa el líquido. Casi no se ensucia y Kuphaldt la prefiere por robusta, pero no es lo bastante sensible para el agua de alta pureza farmacéutica.

### Compensación a 25 °C
La conductividad cambia con la temperatura. Un ejemplo de Kuphaldt: en agua pura a 60 °C hay unas tres veces más iones H⁺ y OH⁻ que a 25 °C. Por eso los resultados se refieren a una temperatura, normalmente 25 °C, y el equipo corrige con un **coeficiente de temperatura** (*temperature coefficient*). La fórmula lineal habitual:

> conductividad a 25 °C = conductividad medida / (1 + α × (T − 25))

Con α = 0,02 por °C (valor de ejemplo; el real depende del líquido y lo fija el equipo o el método): a 35 °C mides 2,6 µS/cm. A 25 °C serían 2,6 / (1 + 0,02 × 10) = 2,17 µS/cm.

Para el agua farmacéutica, cómo se trata la temperatura y qué límites aplican lo dice el método de farmacopea que recoge tu procedimiento. El resto está en «Agua farmacéutica a fondo».

### pH en planta y en el laboratorio
**Sondas en línea.** Miden de forma continua y mandan la señal al sistema de control. En un depósito abierto, como el de efluentes que muestra Kuphaldt, la sonda cuelga de un soporte y se saca con facilidad. En tuberías a presión se usan sondas de inserción: la de Kuphaldt entra por una válvula de bola; se afloja, se sube la sonda, se cierra la válvula y solo entonces se suelta. Nunca se suelta una sonda con el equipo en presión fuera de su sistema de retirada.

Sacar una sonda para calibrarla deja el lazo sin medida: se hace según el procedimiento, con el lazo en manual si toca y avisando a la sala de control. Cómo funcionan manual y automático está en «Lazos de control a fondo».

**Medidas en muestra.**

- **Papel indicador** (*pH paper*): rápido, aproximado. El manual de la FDA pide a sus analistas conocer el intervalo y la exactitud de cada tipo de papel. Vale para una orientación, nunca para un límite con decimales.
- **pHmetro portátil**: lo mismo que el de laboratorio, pero en campo. Se calibra y verifica igual; lo difícil es controlar la temperatura de la muestra y la limpieza.
- **pHmetro de laboratorio**: muestra a temperatura controlada, tampones frescos, verificación. Es el que manda cuando hay dudas.

La muestra se enfría o se calienta mientras llega, y si arrastra fase orgánica no vale. Cómo tomarla está en «Muestreo en planta a fondo».

La ICH Q7 (8.33) permite al personal de producción cualificado hacer controles en proceso y ajustar dentro de límites aprobados por calidad, documentándolo en la hoja.

### Tres casos de planta
**Ajuste de pH en una extracción.** La hoja pide pH de la fase acuosa entre 9,0 y 9,5 (valor de ejemplo). Se para el agitador, se deja separar y se mide la fase acuosa, no la mezcla. Una gota de disolvente en el bulbo falsea la lectura. Por qué el pH decide dónde va el producto está en «Extracción líquido-líquido a fondo».

**Control del agua purificada.** El conductímetro en línea del anillo da alarma si sube. El manual de la FDA propone a sus analistas medir el pH de agua desionizada y explicar por qué la lectura es inestable y no da 7,00. Una pista, de Kuphaldt: el agua pura tiene tan pocos iones que es casi aislante. La pureza del agua se vigila con conductividad, no con pH.

**Neutralización de un efluente.** El pH no es lineal. Un depósito de 10 m³ con ácido clorhídrico a pH 2, sin otras sustancias (valores de ejemplo):

| Paso | H⁺ a neutralizar | NaOH necesario |
|---|---|---|
| De pH 2 a pH 3 | 90 mol | 3600 g |
| De pH 3 a pH 4 | 9 mol | 360 g |
| De pH 4 a pH 7 | 1 mol | 40 g |

Y 40 g más de sosa, 1 mol de OH⁻ en 10000 L, llevan el pH a 10. Cerca de la neutralidad, una nada mueve el pH varias unidades: se añade despacio, con buena agitación y una sonda que responda bien. Un efluente real lleva otras sustancias que amortiguan: manda la sonda, no la cuenta. Más en «Almacenamiento, emergencias y residuos a fondo».

### Errores típicos

| Error | Qué pasa | Cómo se evita |
|---|---|---|
| Tampones caducados o reutilizados | Recta falsa | Tampón fresco, lote y caducidad anotados |
| Calibrar fuera del tramo | Error en la muestra | Tampones que encierren el valor |
| No mirar la pendiente | Electrodo gastado en uso | Anotar pendiente y offset |
| Electrodo seco o frotado | Lenta, deriva | Guardarlo húmedo, solo enjuagar |
| Medir caliente sin decirlo | pH no comparable | Medir a la temperatura del método |
| Celda de conductividad sucia | Lee bajo | Limpieza y comprobación con patrón |
| Anotar «cumple» | Dato perdido | Valor real con decimales |

Los números de esta lección son para entender. En planta manda siempre el procedimiento vigente (SOP): tampones, criterios de pendiente, temperaturas, límites y frecuencia de calibración son los de tu método y tu hoja.
`,
  plant: `
Turno de tarde. En el reactor R-215 se lava una disolución del intermedio ficticio LM-30 en acetato de etilo con sosa diluida. La hoja dice: *«Ajustar pH de la fase acuosa a 9,0–9,5. Medir con pHmetro PH-07 calibrado con tampones 7 y 10. Pendiente 95–105 %.»* (valores de ejemplo).

Calibras el PH-07 en el laboratorio de planta. Pendiente: 88 %. No cumple. Miras la punta: una película grasienta del lote anterior. La limpias como dice el procedimiento para grasas, enjuagas con agua desionizada y recalibras con tampones de un frasco recién abierto. Ahora: pendiente 97,8 %, offset +4 mV. Verificas con un tampón de control y da su valor. Anotas los dos intentos.

En el reactor, la sonda en línea AT-215 marca 9,6. Paras el agitador, esperas la separación que pide la hoja y tomas muestra de la fase acuosa por la válvula de muestreo. La dejas llegar a 25 °C. El PH-07 marca 9,21.

No cuadra con la sonda en línea: hay casi cuatro décimas. Lo comunicas a la jefa de turno. La muestra está dentro de límites y la hoja dice que manda la medida en muestra, así que el lote sigue. Instrumentación revisa la AT-215: el diafragma está medio tapado. La sacan con su sistema de retirada, con el lazo en manual, y la limpian.

En la hoja quedan el valor real, la hora, la temperatura de la muestra, el equipo y las dos lecturas de la AT-215.
`,
  batchRecord: `
En la hoja de producción (*batch record*) verás instrucciones como «medir pH de la fase acuosa: 9,0–9,5 a 20–25 °C» o «conductividad del último aclarado ≤ límite». Y casillas para:

- **Equipo**: código del pHmetro o conductímetro (p. ej. PH-07) o de la sonda en línea (p. ej. AT-215), con su etiqueta de calibración vigente.
- **Calibración del día**: tampones usados con su lote y caducidad, pendiente en porcentaje y offset en mV que dio el equipo, y resultado de la verificación con tampón de control.
- **Intentos fallidos**: si la primera calibración no cumplió, se anota también, con lo que se hizo.
- **Medida**: valor real con sus decimales (9,21, no «cumple»), unidad, temperatura de la muestra, fecha, hora y firma.
- **Fase o punto medido**: fase acuosa, punto de uso del agua, salida del efluente.
- **Conductividad**: valor en µS/cm, si está compensada a 25 °C o no según el método, y código de la celda.
- **Comparación con la sonda en línea**, si la hoja lo pide: las dos lecturas.
- **Incidencias**: lectura inestable, electrodo cambiado, diferencia entre sonda y muestra, aviso al responsable.
- **Ajustes de pH**: reactivo, cantidad y hora de cada adición, y pH tras cada una.
`,
  terms: [
    { es: "Potenciometría", en: "Potentiometry", def: "Técnica que deduce una concentración midiendo una tensión entre dos electrodos." },
    { es: "Electrodo de referencia", en: "Reference electrode", def: "Electrodo cuya tensión no cambia con el pH; cierra el circuito con la muestra a través del diafragma." },
    { es: "Electrodo combinado", en: "Combination electrode", def: "Sonda que reúne en un cuerpo el electrodo de vidrio y el de referencia, a menudo con sonda de temperatura." },
    { es: "Diafragma", en: "Junction", def: "Pieza porosa u orificio por el que el electrodo de referencia toca la muestra; si se tapa, la lectura se desplaza y se vuelve inestable." },
    { es: "Ecuación de Nernst", en: "Nernst equation", def: "Relación entre la tensión de un electrodo y la actividad de un ion; para el pH da 59,16 mV por unidad a 25 °C." },
    { es: "Pendiente", en: "Slope", def: "mV que da el electrodo por unidad de pH; se expresa en porcentaje de la teórica." },
    { es: "Punto cero", en: "Zero point / offset", def: "Tensión del electrodo en pH 7, o pH al que su tensión vale cero; en teoría, 0 mV a pH 7." },
    { es: "Compensación de temperatura", en: "Temperature compensation (ATC)", def: "Corrección que usa la temperatura medida para aplicar la pendiente correcta; no corrige el cambio real del pH de la muestra." },
    { es: "Error alcalino", en: "Alkaline error", def: "A pH muy alto y con mucho sodio, el vidrio responde también al sodio y marca menos pH del real." },
    { es: "Conductancia", en: "Conductance", def: "Lo contrario de la resistencia; se mide en siemens (S)." },
    { es: "Constante de celda", en: "Cell constant", def: "Separación entre los electrodos dividida por su área, en cm⁻¹; conductividad = conductancia × constante de celda." },
    { es: "Celda de cuatro electrodos", en: "Four-electrode cell", def: "Celda con dos electrodos de corriente y dos de medida de tensión; la suciedad de los electrodos apenas le afecta." },
    { es: "Coeficiente de temperatura", en: "Temperature coefficient", def: "Cuánto cambia la conductividad por grado; se usa para referir el resultado a 25 °C." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Con la ecuación de Nernst, la pendiente teórica es 2,303 × R × T / F. Con R = 8,3145 J/(mol·K), F = 96485 C/mol y una muestra a 40 °C (313,15 K), ¿cuántos mV por unidad de pH da un electrodo ideal?",
      answer: 62.15,
      tolerance: 0.01,
      unit: "mV/pH",
      explain: "2,303 × 8,3145 × 313,15 / 96485 = 0,06215 V, es decir, 62,15 mV por unidad de pH.",
    },
    {
      kind: "number",
      q: "Calibras a 25 °C (pendiente teórica 59,16 mV/pH). El tampón pH 7,00 da +2,0 mV y el tampón pH 4,01 da +173,0 mV. ¿Qué pendiente tiene el electrodo, en porcentaje de la teórica?",
      answer: 96.67,
      tolerance: 0.01,
      unit: "%",
      explain: "Pendiente real: (173,0 − 2,0) / 2,99 = 57,19 mV/pH. En porcentaje: 57,19 / 59,16 × 100 = 96,67 %.",
    },
    {
      kind: "number",
      q: "Un electrodo calibrado tiene una pendiente de 57,00 mV/pH y un offset de +3,0 mV (tensión a pH 7). Una muestra da −54,0 mV. Con pH = 7 − (E − offset) / pendiente, ¿qué pH tiene?",
      answer: 8,
      tolerance: 0.01,
      unit: "pH",
      explain: "pH = 7 − (−54,0 − 3,0) / 57,00 = 7 + 57,0 / 57,00 = 8.",
    },
    {
      kind: "number",
      q: "Una celda de conductividad tiene una constante de 0,1 cm⁻¹ y mide una conductancia de 12,5 µS. ¿Qué conductividad tiene el agua?",
      answer: 1.25,
      tolerance: 0.01,
      unit: "µS/cm",
      explain: "Conductividad = conductancia × constante de celda = 12,5 × 0,1 = 1,25 µS/cm.",
    },
    {
      kind: "number",
      q: "Mides 3,3 µS/cm a 40 °C. El equipo usa la corrección lineal con un coeficiente de 0,02 por °C (valor de ejemplo). ¿Qué conductividad da referida a 25 °C?",
      answer: 2.54,
      tolerance: 0.01,
      unit: "µS/cm",
      explain: "3,3 / (1 + 0,02 × 15) = 3,3 / 1,3 = 2,54 µS/cm.",
    },
    {
      kind: "choice",
      q: "Calibras el pHmetro y la pendiente sale 84 %. Tu procedimiento pide entre 95 y 105 %. ¿Qué haces?",
      options: [
        "Lo limpio, reviso el diafragma, uso tampones frescos, recalibro y, si no cumple, lo retiro y aviso",
        "Mido igualmente, porque el pHmetro ya ha guardado la nueva recta de calibración",
        "Anoto 95 % en la hoja, porque la diferencia con el mínimo es pequeña",
        "Calibro solo con el tampón 7, porque así el equipo no calcula la pendiente",
      ],
      answer: 0,
      explain: "Un instrumento que no cumple los criterios de calibración no se usa (ICH Q7, 5.34). Se intenta recuperar y, si no, se retira; se anotan todos los intentos.",
    },
    {
      kind: "choice",
      q: "Tu pHmetro tiene compensación de temperatura. Mides una muestra a 60 °C que el método pide medir a 25 °C. ¿Qué es cierto?",
      options: [
        "La compensación lo corrige todo y el resultado vale igual que a 25 °C",
        "La compensación corrige la pendiente del electrodo, pero no el cambio real del pH de la muestra",
        "La compensación solo funciona en conductividad, no en pH",
        "A 60 °C el electrodo no responde y la lectura será siempre 7",
      ],
      answer: 1,
      explain: "La compensación aplica la pendiente de Nernst correcta. El pH de la muestra cambia de verdad con la temperatura: el agua pura, por ejemplo, tiene pH 6,51 a 60 °C.",
    },
    {
      kind: "choice",
      q: "Vas a controlar un lavado en el que el pH esperado está entre 8 y 9. ¿Con qué tampones calibras?",
      options: [
        "Con 4 y 7, porque son los más habituales",
        "Solo con 7, porque es el punto cero",
        "Con 7 y 10, porque encierran el valor a medir",
        "Con 4 y 10, porque así se cubre todo sin hacer más",
      ],
      answer: 2,
      explain: "Los tampones deben encerrar el pH que se va a medir; fuera del tramo calibrado la recta se alarga a ciegas.",
    },
    {
      kind: "choice",
      q: "El conductímetro de dos electrodos de un tanque marca cada semana algo menos, aunque el agua no ha cambiado. ¿Qué es lo más probable?",
      options: [
        "El agua se purifica sola con el tiempo y la lectura es buena",
        "La temperatura ha bajado y eso siempre aumenta la conductividad",
        "La constante de celda ha subido y por eso la lectura se dobla",
        "Los electrodos se han ensuciado con depósitos y la celda lee por debajo",
      ],
      answer: 3,
      explain: "Los depósitos aislantes en una celda de dos electrodos hacen que el equipo crea que el líquido conduce menos: lee bajo, hacia el lado que parece bueno.",
    },
    {
      kind: "choice",
      q: "Neutralizas un efluente ácido con sosa y estás en pH 5. ¿Por qué la hoja pide añadir despacio a partir de ahí?",
      options: [
        "Porque cerca de la neutralidad muy poca sosa mueve el pH varias unidades",
        "Porque a pH 5 la sonda deja de medir y hay que usar papel indicador",
        "Porque la sosa solo reacciona con el ácido por encima de pH 7",
        "Porque a partir de pH 5 la neutralización ya no desprende nada de calor",
      ],
      answer: 0,
      explain: "El pH es logarítmico: en 10 m³ de ácido fuerte, 40 g de sosa llevan de pH 4 a 7 y otros 40 g de 7 a 10. Hay que añadir poco a poco.",
    },
  ],
};
