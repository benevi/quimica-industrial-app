import type { Lesson } from "./types";

export const electroquimicaAFondo: Lesson = {
  slug: "electroquimica-a-fondo",
  level: 2,
  order: 13.5,
  title: "Electroquímica a fondo: pilas, electrólisis y corrosión",
  titleEn: "Electrochemistry in depth: cells, electrolysis and corrosion",
  minutes: 40,
  summary:
    "Cómo se escriben y se ajustan las semirreacciones por el método del ion-electrón en medio ácido y básico, qué pasa en el ánodo, el cátodo y el puente salino, qué es un potencial estándar y cómo se calcula la fuerza electromotriz, la ecuación de Nernst general y su parentesco con el electrodo de pH, la electrólisis y las leyes de Faraday con el cálculo de una cuba de cloro-sosa, los recubrimientos, el Karl Fischer culombimétrico, la corrosión galvánica y la protección catódica.",
  body: `
En «Oxidación y reducción a fondo» aprendiste a ajustar una redox contando electrones, y la pila salía «solo como idea». Aquí la abrimos: la **electroquímica** (*electrochemistry*) estudia las redox cuando los electrones viajan por un cable. Está detrás del pHmetro («pH y conductividad a fondo»), del Karl Fischer culombimétrico («El agua en la muestra a fondo»), de la corrosión («Materiales de los equipos y corrosión a fondo») y del cloro y la sosa que compra tu planta.

Lo marcado como «valor de ejemplo» es inventado para practicar.

### Las tres unidades que vas a usar
Según el Real Decreto 2032/2009 de unidades legales (redacción del Real Decreto 493/2020): la carga se mide en **culombios** (C = A·s, un amperio durante un segundo); la corriente, en **amperios** (A); y la diferencia de potencial o **fuerza electromotriz**, en **voltios** (V = W/A, es decir, julio por culombio). Como **julio = culombio × voltio**, la energía de una corriente es carga por voltaje: esa multiplicación une la electricidad con la energía de Gibbs.

**La constante de Faraday** (*Faraday constant*, F) es la carga de un mol de electrones. El mismo real decreto fija como exactas la carga elemental, e = 1,602176634 × 10⁻¹⁹ C, y la constante de Avogadro, N_A = 6,02214076 × 10²³ por mol:

> F = e × N_A = 96485,33 C/mol, que redondeamos a **96485 C/mol**

### Semirreacciones y método del ion-electrón en medio ácido
Una **semirreacción** (*half-reaction*) es la mitad de una redox con los electrones a la vista, como las dos líneas de un pago: quien paga (oxidación, Fe²⁺ da Fe³⁺ + e⁻) y quien cobra (reducción, Cl₂ + 2 e⁻ da 2 Cl⁻). Sirven para ajustar reacciones en agua, para ver qué pasa en cada electrodo y para usar la tabla de potenciales.

Cuando hay iones con oxígeno (permanganato, dicromato, sulfito) en agua, el ajuste más seguro es el **método del ion-electrón** (*ion-electron method*). En **medio ácido** (*acidic medium*):

1. Escribe las dos semirreacciones solo con las especies que cambian.
2. Ajusta los átomos que no son O ni H.
3. Ajusta los **oxígenos** añadiendo **H₂O** donde falten.
4. Ajusta los **hidrógenos** añadiendo **H⁺** donde falten.
5. Ajusta la **carga** añadiendo **electrones** al lado más positivo.
6. Multiplica para que los electrones perdidos sean los ganados, suma y simplifica.

**Ejemplo resuelto 1. Dicromato con hierro(II)**, en ácido sulfúrico.

*Reducción.* Cr₂O₇²⁻ da Cr³⁺.

- Cromo: Cr₂O₇²⁻ da **2** Cr³⁺.
- Oxígenos: faltan 7 a la derecha: Cr₂O₇²⁻ da 2 Cr³⁺ + **7 H₂O**.
- Hidrógenos: hay 14 a la derecha: **14 H⁺** + Cr₂O₇²⁻ da 2 Cr³⁺ + 7 H₂O.
- Carga: izquierda 14 − 2 = +12; derecha 2 × 3 = +6. Faltan 6 cargas negativas a la izquierda:

> Cr₂O₇²⁻ + 14 H⁺ + 6 e⁻ da 2 Cr³⁺ + 7 H₂O

*Oxidación.* Fe²⁺ da Fe³⁺ + e⁻.

*Igualar electrones.* 6 ganados frente a 1 perdido: la oxidación por 6.

> Cr₂O₇²⁻ + 6 Fe²⁺ + 14 H⁺ da 2 Cr³⁺ + 6 Fe³⁺ + 7 H₂O

**Comprobación**: 2 Cr, 6 Fe, 7 O y 14 H a cada lado; carga −2 + 12 + 14 = **+24** a la izquierda y 6 + 18 = **+24** a la derecha. Si la carga no cuadra, la ecuación está mal aunque cuadren los átomos.

Así sale también la del permanganato con hierro(II) que verás en «Valoraciones redox, complexométricas y de precipitación a fondo»: MnO₄⁻ + 8 H⁺ + 5 e⁻ da Mn²⁺ + 4 H₂O, y la del hierro por 5.

### El método en medio básico
En **medio básico** (*basic medium*) no hay H⁺ libres que añadir: abunda el OH⁻. El truco más seguro:

1. Ajusta como si fuera ácido (pasos 1 a 5).
2. Suma a **los dos lados** tantos OH⁻ como H⁺ haya.
3. Junta cada H⁺ con su OH⁻ para formar H₂O y simplifica el agua repetida.

**Ejemplo resuelto 2. Permanganato con sulfito** en medio básico: el manganeso acaba en dióxido de manganeso (MnO₂), un sólido pardo, y el sulfito (SO₃²⁻) en sulfato (SO₄²⁻).

*Reducción, primero «en ácido»*: MnO₄⁻ + 4 H⁺ + 3 e⁻ da MnO₂ + 2 H₂O. Se suman 4 OH⁻ a cada lado; los 4 H⁺ y 4 OH⁻ forman 4 H₂O; se quitan 2 H₂O de cada lado:

> MnO₄⁻ + 2 H₂O + 3 e⁻ da MnO₂ + 4 OH⁻

*Oxidación, primero «en ácido»*: SO₃²⁻ + H₂O da SO₄²⁻ + 2 H⁺ + 2 e⁻. Se suman 2 OH⁻ a cada lado y se simplifica:

> SO₃²⁻ + 2 OH⁻ da SO₄²⁻ + H₂O + 2 e⁻

*Igualar*: 3 y 2 electrones, mínimo común múltiplo 6. Reducción por 2, oxidación por 3, sumar y simplificar (se van 3 H₂O y 6 OH⁻ de cada lado):

> 2 MnO₄⁻ + 3 SO₃²⁻ + H₂O da 2 MnO₂ + 3 SO₄²⁻ + 2 OH⁻

Comprobación: 2 Mn, 3 S, 18 O y 2 H por lado; carga −8 a los dos lados. El mismo oxidante da Mn²⁺ en ácido y MnO₂ en básico: por eso la hoja dice en qué medio se hace una adición.

### La pila por dentro: ánodo, cátodo y puente salino
Si los reactivos se tocan, los electrones saltan directamente y solo sale calor. Si se **separan** en dos recipientes unidos por un cable, los electrones van por el cable: es una **pila** o **celda galvánica** (*galvanic cell*), que convierte una reacción espontánea en electricidad. Según el glosario de la Decisión de Ejecución 2013/732/UE (mejores técnicas disponibles del cloro-álcali), el **electrodo** (*electrode*) es el conductor que toca la parte no metálica del circuito; en el **ánodo** (*anode*) ocurre la **oxidación** y en el **cátodo** (*cathode*), la **reducción**. Truco: ánodo y oxidación empiezan por vocal; cátodo y reducción, por consonante.

El glosario avisa de que la polaridad «puede ser positiva o negativa»: en una **cuba de electrólisis** el ánodo es el **positivo**; en una **pila**, el **negativo**, porque de él salen los electrones al cable. Nunca cambia dónde se oxida y dónde se reduce.

**El puente salino** (*salt bridge*). Si en un vaso se acumulan cargas positivas y en el otro negativas, la reacción se para al instante. Hace falta un camino para los **iones** que una las disoluciones sin mezclarlas: un tubo con sal o una pieza porosa. El método oficial de análisis de suelos publicado en el BOE en 1976 ya medía el pH frente a un electrodo de calomelanos «con puente salino», cuidando el contacto eléctrico «a través del capilar del puente salino». Su pariente es el **diafragma** del electrodo de referencia de tu pHmetro: si se tapa, la lectura deriva.

**Ejemplo: la pila de hidrógeno y oxígeno**, en medio ácido:

> Ánodo: H₂ da 2 H⁺ + 2 e⁻
>
> Cátodo: O₂ + 4 H⁺ + 4 e⁻ da 2 H₂O

Global: 2 H₂ + O₂ da 2 H₂O, como en un incendio de hidrógeno, pero con los electrones por un cable. El libro de Kuphaldt *Lessons in Industrial Instrumentation* explica que la mayoría de los detectores portátiles de gases usan **celdas electroquímicas** que generan una pequeña corriente con el gas: pilas en miniatura.

### Potenciales estándar y fuerza electromotriz
Cada semirreacción tiene una «fuerza» para llevarse electrones, su **potencial de reducción**, que como una altura se mide desde una referencia. Por convenio, el cero es el **electrodo estándar de hidrógeno** (*standard hydrogen electrode*): 2 H⁺ + 2 e⁻ da H₂, con H⁺ de actividad 1 e hidrógeno a 1 bar.

El **potencial estándar** (*standard electrode potential*, E°) es el de cada semirreacción escrita como reducción, con todo en estado estándar y a 25 °C. Ordenados, forman la **serie electroquímica**: arriba, E° muy positivos (oxidantes fuertes); abajo, muy negativos (su forma reducida es un reductor fuerte, como los metales que se oxidan con facilidad).

La **fuerza electromotriz** (*electromotive force*, fem) de una pila es la diferencia:

> fem = E°(cátodo) − E°(ánodo)

Si sale positiva, la pila funciona sola en ese sentido.

**Aviso honesto.** No hemos podido leer una tabla de potenciales en una fuente gratuita accesible. Solo damos **dos valores**: el cero del hidrógeno (convenio) y el del oxígeno, calculado abajo con datos del NIST. Los demás pares son **valores de ejemplo**; en el laboratorio se usa la tabla que indique el método.

**Ejemplo resuelto 3** (valores de ejemplo). Par A⁺/A con E° = +0,40 V y par M²⁺/M con E° = −0,50 V. El ánodo es el de potencial más bajo, M, que se oxida. fem = 0,40 − (−0,50) = **0,90 V**.

### De voltios a kilojulios: ΔG = −nFE
Si n moles de electrones cruzan una fem E, la energía eléctrica es n × F × E, y sale de la energía de Gibbs de la reacción («Por qué ocurren las reacciones a fondo: energía, entropía y Gibbs»):

> ΔG = −n × F × E (y en estado estándar, ΔG° = −n × F × E°)

Fem positiva, ΔG negativo: reacción espontánea.

**Ejemplo resuelto 4. El potencial del oxígeno, calculado.** Con los datos del NIST Chemistry WebBook (los mismos que en la lección de Gibbs): agua líquida ΔfH° = −285,83 kJ/mol y S° = 69,95 J/(mol·K); H₂, S° = 130,680; O₂, S° = 205,152.

Reacción: H₂ + ½ O₂ da H₂O líquida, con n = 2 electrones.

1. ΔH° = −285,83 kJ (elementos a cero).
2. ΔS° = 69,95 − 130,680 − 0,5 × 205,152 = **−163,31 J/K**.
3. ΔG° = −285,83 − 298,15 × (−0,16331) = **−237,14 kJ**.
4. E° = 237140 / (2 × 96485) = **1,229 V**.

Como el hidrógeno es el cero, el par O₂/H₂O vale **+1,229 V**: el oxígeno es un buen oxidante.

**Y al revés: de E° a K.** Uniendo ΔG° = −R·T·ln K, de la lección de Gibbs, con ΔG° = −n·F·E°:

> ln K = n × F × E° / (R × T)

Con 0,90 V y n = 2 (ejemplo 3), K es de unos 10³⁰; con solo 0,10 V, K = e^(2 × 96485 × 0,10 / (8,314 × 298,15)) = **unos 2400**: pocas décimas de voltio cambian mucho.

### La ecuación de Nernst general
Fuera del estado estándar (1 mol/L, gases a 1 bar), el potencial cambia según la **ecuación de Nernst** (*Nernst equation*):

> E = E° − (R × T / (n × F)) × ln Q

Q es el **cociente de reacción** de «Equilibrio químico a fondo»: productos entre reactivos, cada uno elevado a su coeficiente (los sólidos y el agua no cuentan). A 25 °C, pasando a logaritmo decimal:

> E = E° − (0,05916 / n) × log Q

Ese **0,05916 V** es la pendiente de 59,16 mV por unidad de pH que verás en «pH y conductividad a fondo». Kuphaldt explica que toda medida potenciométrica se basa en Nernst: el electrodo de pH es una **pila de concentración**, igual a los dos lados del vidrio salvo en la concentración de H⁺, así que su E° es cero y solo queda el logaritmo.

**Ejemplo resuelto 5. El oxígeno y el hidrógeno dependen del pH.** En la semirreacción O₂ + 4 H⁺ + 4 e⁻ da 2 H₂O, con O₂ a 1 bar, Q = 1/[H⁺]⁴. Como log(1/[H⁺]⁴) = 4 × pH:

> E = 1,229 − (0,05916 / 4) × 4 × pH = 1,229 − 0,05916 × pH

- A pH 0: 1,229 V. A pH 7: 1,229 − 0,414 = **0,815 V**.
- El hidrógeno sigue la misma pendiente: E = −0,05916 × pH, es decir, −0,414 V a pH 7.

La diferencia sigue siendo 1,229 V: la fem de la pila de hidrógeno no depende del pH, pero cada mitad sí. El oxígeno oxida más en ácido.

### La electrólisis: la pila al revés
La **electrólisis** (*electrolysis*) es, según el glosario de la decisión 2013/732/UE, el paso de una corriente continua por una sustancia iónica, fundida o disuelta, que provoca reacciones en los electrodos: se fuerza una reacción que no ocurriría sola. Kuphaldt pone el ejemplo del agua: romperla en hidrógeno y oxígeno pide aportar energía.

**Cuánta tensión hace falta.** Al menos la fem de la reacción inversa espontánea. Para descomponer agua:

- **Mínimo termodinámico**: 1,229 V, del ejemplo 4.
- **Tensión termoneutra**: con ΔH en lugar de ΔG, 285830 / (2 × 96485) = **1,481 V**. Por encima de ella, la cuba se calienta; la diferencia entre 1,229 y 1,481 es el término T·ΔS de la lección de Gibbs.

La cuba real necesita más. El glosario llama **sobretensión** (*overpotential*) a la diferencia entre el potencial termodinámico de una semirreacción y el observado, que gasta más energía de la prevista. Súmale la resistencia del líquido y de la membrana.

### Las leyes de Faraday y el cálculo de una cuba
Las **leyes de Faraday** (*Faraday's laws of electrolysis*): la masa formada en un electrodo es proporcional a la carga, y cada sustancia sale según su masa molar dividida entre los electrones que pide:

> m = (I × t / F) × (M / n) × rendimiento de corriente

I en amperios, t en segundos, M en g/mol, n electrones por unidad. El **rendimiento de corriente** (*current efficiency*), que cita la decisión 2013/732/UE, es la fracción de carga que va a la reacción buscada; el resto se pierde en reacciones secundarias.

**La cuba de cloro-sosa.** Según esa decisión, el cloro-álcali produce cloro, hidrógeno e hidróxido de sodio o de potasio por **electrólisis de salmuera** (*brine*, disolución saturada o casi de cloruro de sodio), con ánodo y cátodo separados por una **membrana** o un **diafragma sin amianto**; la celda de mercurio no es mejor técnica en ningún caso.

> Ánodo (+): 2 Cl⁻ da Cl₂ + 2 e⁻
>
> Cátodo (−), medio básico: 2 H₂O + 2 e⁻ da H₂ + 2 OH⁻
>
> Global: 2 NaCl + 2 H₂O da Cl₂ + H₂ + 2 NaOH

La membrana separa los dos lados: el cloro sale por el del ánodo; el hidrógeno y la sosa, por el del cátodo.

**Ejemplo resuelto 6. Un día de cuba** (valores de ejemplo: 10000 A durante 24 h, rendimiento de corriente 95 %, tensión de celda 3,0 V; masas molares del NIST: Cl₂ 70,906; NaOH 39,997; H₂ 2,016 g/mol).

1. Carga: 10000 × 86400 s = 8,64 × 10⁸ C.
2. Moles de electrones: 8,64 × 10⁸ / 96485 = **8955 mol**.
3. Cloro: 2 electrones por Cl₂: 8955 / 2 × 0,95 = 4253 mol; 4253 × 70,906 = **301,6 kg**.
4. Sosa: 1 electrón por NaOH: 8955 × 0,95 × 39,997 = **340,3 kg**.
5. Hidrógeno: tantos moles como de cloro: 4253 × 2,016 = **8,6 kg**.
6. Energía: 3,0 V × 10000 A × 24 h = 720 kWh, que son 720 / 0,3016 = **2387 kWh por tonelada de cloro**.

Al 100 % saldrían 317,5 kg. La decisión pide aprovechar el hidrógeno coproducido como reactivo o combustible.

### Recubrimientos electrolíticos
Si en el cátodo se reduce un ion metálico, el metal se deposita en capa sobre la pieza, que es el cátodo: es el **recubrimiento electrolítico** (*electroplating*).

**Ejemplo resuelto 7. Niquelado** (valores de ejemplo): Ni²⁺ + 2 e⁻ da Ni; 50 A durante 2 h con un 90 % de rendimiento; M(Ni) = 58,693 g/mol (NIST).

> m = (50 × 7200 / 96485) × (58,693 / 2) × 0,90 = **98,5 g**

Las reacciones secundarias se comen el resto de la corriente.

### El Karl Fischer culombimétrico es una electrólisis
El Karl Fischer culombimétrico, que verás en «El agua en la muestra a fondo», genera yodo con corriente: 2 I⁻ da I₂ + 2 e⁻, una **oxidación**, que ocurre en el **ánodo** del electrodo generador. Sus 93,36 µg de agua por culombio son Faraday puro: 18,015 / (2 × 96485).

**Ejemplo resuelto 8.** ¿Cuánto tarda en valorar 1 mg de agua a 100 mA? Carga: 1000 / 93,36 = 10,71 C. Tiempo: 10,71 / 0,100 = **107 s**. Con 10 mg serían casi 18 minutos: el culombimétrico es para trazas.

### Corrosión galvánica y protección catódica
La corrosión del hierro es una pila sin cable: el metal es ánodo (Fe da Fe²⁺ + 2 e⁻), el oxígeno disuelto se reduce en otro punto de la pieza (O₂ + 2 H₂O + 4 e⁻ da 4 OH⁻) y el agua con sales hace de puente salino.

**Pares galvánicos.** Si dos metales distintos se tocan y los moja un líquido conductor, el de potencial más bajo se convierte en ánodo y se come más deprisa («Materiales de los equipos y corrosión a fondo»). La instrucción técnica MI-IP03 de instalaciones petrolíferas, en la redacción del Real Decreto 1523/1999, da un caso de planta: los tubos de acero enterrados no se unen a una red de tierra con metales «galvánicamente desfavorables para el acero, como el cobre»; si la red es de cobre, los tanques se unen a una tierra local de zinc y se aíslan del cobre.

**Protección catódica** (*cathodic protection*): se obliga al acero a ser **cátodo**. Dos formas:

- **Ánodo de sacrificio** (*sacrificial anode*): se une al acero un metal más fácil de oxidar, que se gasta en su lugar y se repone.
- **Corriente impresa** (*impressed current*): una fuente de corriente continua empuja electrones hacia la pieza protegida.

La MI-IP03 pide comprobar cada tres meses el funcionamiento de los aparatos de corriente impresa de los tanques enterrados.

### Lo que esto significa en tu turno
| Lo que ves | Lo que hay detrás |
|---|---|
| Pendiente del pHmetro de 59,16 mV/pH a 25 °C | Nernst con n = 1 |
| Deriva del electrodo de referencia | Diafragma o puente salino tapado |
| Cloro y sosa de proveedor | Fabricados por electrólisis de salmuera |
| Tornillo de un metal sobre una pieza de otro, con óxido | Par galvánico |
| Rectificador de protección catódica con alarma | La pieza enterrada puede quedar sin proteger: se avisa |

Los números de esta lección sirven para entender. En planta manda siempre el procedimiento vigente (SOP) y la hoja de tu lote.
`,
  plant: `
Planta ficticia de la lección, turno de tarde. En el reactor vitrificado R-318 se oxida un intermedio ficticio con una disolución acuosa de permanganato de potasio, en medio básico. La hoja indica pH de la masa entre 10 y 11 antes de empezar la adición y avisa: en este medio se forma un sólido pardo, dióxido de manganeso, que luego se filtra en el filtro FP-322.

Nuria, la operadora, mide el pH de la muestra: 9,2. No empieza la adición. Sabe por qué: en medio ácido o casi neutro el permanganato no sigue la misma reacción y la estequiometría de la hoja dejaría de valer. Avisa a la jefa de turno, que manda ajustar con sosa según el procedimiento. Nueva medida: 10,4. Anota las dos lecturas, la hora y la cantidad de sosa añadida.

Durante la ronda, Nuria pasa junto al depósito enterrado de gasóleo de la caldera, protegido por corriente impresa. El rectificador muestra una alarma de corriente baja. No toca el equipo: lo anota y avisa a mantenimiento, porque sin corriente el acero enterrado vuelve a ser ánodo.

Al final del turno el laboratorio pide una muestra para Karl Fischer culombimétrico del disolvente recuperado DR-07. Nuria la toma en un frasco seco y cerrado: sabe que el culombimétrico cuenta microgramos y que cualquier gota de humedad del aire se vería. Todos los equipos, productos y valores son ficticios.
`,
  batchRecord: `
- **Medio de reacción**: pH medido antes de cada adición de oxidante o reductor, con hora y firma; ajustes realizados (producto, cantidad).
- **Adición de oxidante**: producto, concentración, cantidad, velocidad de adición y temperatura máxima alcanzada.
- **Aspecto**: aparición de sólidos o cambios de color previstos por la hoja (por ejemplo, el sólido pardo del dióxido de manganeso en medio básico) y cualquier aspecto inesperado.
- **Calibración del pHmetro**: tampones usados, pendiente y punto cero, antes de medir el pH de la etapa.
- **Muestras para Karl Fischer**: recipiente, hora de toma y hora de entrega al laboratorio.
- **Gases recibidos** (hidrógeno, cloro, nitrógeno): lote o certificado del proveedor cuando la hoja lo pida.
- **Estado de equipos**: corrosión en uniones de metales distintos, alarmas de protección catódica o de rectificadores, anotadas y comunicadas.
`,
  terms: [
    { es: "Semirreacción", en: "Half-reaction", def: "Mitad de una reacción redox escrita por separado, con los electrones a la vista: una de oxidación y otra de reducción." },
    { es: "Método del ion-electrón", en: "Ion-electron method", def: "Forma de ajustar redox en disolución: se ajustan átomos, oxígenos con agua, hidrógenos con H⁺ (u OH⁻ en medio básico) y carga con electrones." },
    { es: "Ánodo", en: "Anode", def: "Electrodo donde ocurre la oxidación. Positivo en una cuba de electrólisis y negativo en una pila." },
    { es: "Cátodo", en: "Cathode", def: "Electrodo donde ocurre la reducción. Negativo en una cuba de electrólisis y positivo en una pila." },
    { es: "Puente salino", en: "Salt bridge", def: "Camino de iones entre las dos mitades de una pila que cierra el circuito sin que se mezclen las disoluciones." },
    { es: "Potencial estándar", en: "Standard electrode potential", def: "Potencial de una semirreacción escrita como reducción, en estado estándar, medido frente al electrodo de hidrógeno, que vale cero por convenio." },
    { es: "Fuerza electromotriz", en: "Electromotive force", def: "Diferencia de potencial de una pila: potencial del cátodo menos potencial del ánodo. Se mide en voltios." },
    { es: "Ecuación de Nernst", en: "Nernst equation", def: "E = E° − (R·T/(n·F))·ln Q. Da el potencial fuera del estado estándar; es la base del electrodo de pH." },
    { es: "Constante de Faraday", en: "Faraday constant", def: "Carga de un mol de electrones: carga elemental por constante de Avogadro, 96485 C/mol." },
    { es: "Electrólisis", en: "Electrolysis", def: "Reacción química forzada al pasar una corriente continua por una sustancia iónica fundida o disuelta." },
    { es: "Rendimiento de corriente", en: "Current efficiency", def: "Fracción de la carga que pasa por una cuba que se aprovecha en la reacción deseada." },
    { es: "Sobretensión", en: "Overpotential", def: "Tensión extra, por encima de la termodinámica, que hace falta para que una semirreacción ocurra a la velocidad deseada; se pierde como calor." },
    { es: "Corrosión galvánica", en: "Galvanic corrosion", def: "Corrosión acelerada del metal que hace de ánodo cuando dos metales distintos se tocan en un medio conductor." },
    { es: "Protección catódica", en: "Cathodic protection", def: "Hacer que la pieza de acero sea cátodo, con un ánodo de sacrificio o con corriente impresa, para que no se corroa." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Con la carga elemental e = 1,602176634 × 10⁻¹⁹ C y la constante de Avogadro N_A = 6,02214076 × 10²³ por mol, ¿cuánto vale la constante de Faraday en C/mol? Redondea a unidades.",
      answer: 96485,
      tolerance: 0.0005,
      unit: "C/mol",
      explain: "F = e × N_A = 1,602176634 × 10⁻¹⁹ × 6,02214076 × 10²³ = 96485,33 C/mol, que redondeado da 96485 C/mol: la carga de un mol de electrones.",
    },
    {
      kind: "choice",
      q: "Al ajustar Cr₂O₇²⁻ da 2 Cr³⁺ en medio ácido por el método del ion-electrón, ya has añadido 7 H₂O a la derecha. ¿Qué toca a continuación?",
      options: [
        "Añadir 7 OH⁻ a la izquierda para ajustar los oxígenos que faltan",
        "Añadir 14 H⁺ a la izquierda y después 6 electrones para cuadrar la carga",
        "Añadir 6 electrones a la derecha porque el cromo pierde electrones",
        "Multiplicar toda la semirreacción por 7 para igualar los oxígenos",
      ],
      answer: 1,
      explain: "Los 7 H₂O traen 14 hidrógenos, que se ajustan con 14 H⁺ a la izquierda. Carga: +12 a la izquierda y +6 a la derecha, así que se añaden 6 e⁻ a la izquierda: el cromo se reduce de +6 a +3.",
    },
    {
      kind: "choice",
      q: "La hoja dice que una adición de permanganato se hace en medio básico y que se formará un sólido pardo. Un compañero propone hacerla en ácido para que no ensucie el filtro. ¿Qué le dices?",
      options: [
        "Que da igual el medio porque el permanganato siempre gana cinco electrones",
        "Que en ácido el sólido saldría igual, pero más fino y más fácil de filtrar",
        "Que sí, siempre que se añada el doble de permanganato para compensar",
        "Que no: en ácido da Mn²⁺ con 5 electrones y en básico MnO₂ con 3",
      ],
      answer: 3,
      explain: "Con el método del ion-electrón: en ácido MnO₄⁻ + 8 H⁺ + 5 e⁻ da Mn²⁺ + 4 H₂O; en básico MnO₄⁻ + 2 H₂O + 3 e⁻ da MnO₂ + 4 OH⁻. Cambian los electrones, la proporción y los productos. Manda la hoja.",
    },
    {
      kind: "choice",
      q: "En una cuba de electrólisis de salmuera, ¿en qué electrodo se forma el cloro y qué signo tiene?",
      options: [
        "En el ánodo, que en la cuba es el positivo, porque el cloruro se oxida",
        "En el cátodo, que es el negativo, porque el cloro gana electrones",
        "En el ánodo, que en la cuba es el negativo, porque de él salen electrones",
        "En la membrana, que separa el cloro sin necesidad de electrodos",
      ],
      answer: 0,
      explain: "2 Cl⁻ da Cl₂ + 2 e⁻ es una oxidación, y la oxidación ocurre siempre en el ánodo. En una cuba de electrólisis el ánodo es el positivo; según el glosario de la decisión 2013/732/UE, allí se produce la oxidación.",
    },
    {
      kind: "number",
      q: "Valores de ejemplo: una pila tiene como cátodo un par con E° = +0,40 V y como ánodo otro con E° = −0,50 V. ¿Cuál es su fuerza electromotriz estándar, en voltios?",
      answer: 0.9,
      tolerance: 0.01,
      unit: "V",
      explain: "fem = E°(cátodo) − E°(ánodo) = 0,40 − (−0,50) = 0,90 V. Es positiva: la pila funciona sola en ese sentido.",
    },
    {
      kind: "number",
      q: "Una pila de fem 0,80 V intercambia n = 2 mol de electrones por mol de reacción. Con F = 96485 C/mol y ΔG = −n·F·E, ¿cuántos kJ de energía eléctrica puede dar como máximo por mol de reacción? (Es el valor de ΔG sin el signo.)",
      answer: 154.4,
      tolerance: 0.01,
      unit: "kJ/mol",
      explain: "ΔG = −n × F × E = −2 × 96485 × 0,80 = −154376 J por mol: la pila puede dar como máximo 154,4 kJ por mol de reacción. ΔG negativo y fem positiva dicen lo mismo: reacción espontánea.",
    },
    {
      kind: "number",
      q: "El par O₂/H₂O tiene E° = 1,229 V y su potencial a 25 °C sigue E = 1,229 − 0,05916 × pH (oxígeno a 1 bar). ¿Cuánto vale a pH 7? Da tres decimales.",
      answer: 0.815,
      tolerance: 0.005,
      unit: "V",
      explain: "E = 1,229 − 0,05916 × 7 = 1,229 − 0,414 = 0,815 V. Es la misma pendiente de 59,16 mV por unidad de pH del electrodo de vidrio: las dos salen de la ecuación de Nernst.",
    },
    {
      kind: "number",
      q: "Valores de ejemplo: una cuba de cloro-sosa trabaja a 10000 A durante 24 horas con un rendimiento de corriente del 95 %. En el ánodo, 2 Cl⁻ da Cl₂ + 2 e⁻. Con F = 96485 C/mol y M(Cl₂) = 70,906 g/mol, ¿cuántos kg de cloro produce?",
      answer: 301.6,
      tolerance: 0.01,
      unit: "kg",
      explain: "Carga: 10000 × 86400 = 8,64 × 10⁸ C. Electrones: 8,64 × 10⁸ / 96485 = 8955 mol. Cloro: 8955 / 2 × 0,95 = 4253 mol, que son 4253 × 70,906 = 301,6 kg.",
    },
    {
      kind: "number",
      q: "Valores de ejemplo: se niquela una pieza con 20 A durante 1 hora y un rendimiento de corriente del 100 %. La reacción es Ni²⁺ + 2 e⁻ da Ni. Con F = 96485 C/mol y M(Ni) = 58,693 g/mol, ¿cuántos gramos de níquel se depositan?",
      answer: 21.9,
      tolerance: 0.01,
      unit: "g",
      explain: "Carga: 20 × 3600 = 72000 C. Electrones: 72000 / 96485 = 0,7462 mol. Níquel: 0,7462 / 2 = 0,3731 mol, que son 0,3731 × 58,693 = 21,9 g.",
    },
    {
      kind: "choice",
      q: "En la ronda ves que el rectificador de protección catódica por corriente impresa de un tanque enterrado marca una alarma y cero amperios. ¿Qué haces?",
      options: [
        "Nada: el tanque es de acero y aguanta años sin protección",
        "Subir la tensión del rectificador hasta que vuelva a marcar corriente",
        "Anotarlo y avisar a mantenimiento: sin corriente, el acero vuelve a ser ánodo y se corroe",
        "Desconectar la tierra del tanque para que no le llegue corriente de otros equipos",
      ],
      answer: 2,
      explain: "La corriente impresa obliga al acero a ser cátodo. Sin ella vuelve a corroerse. La MI-IP03 pide comprobar esos aparatos cada tres meses; tú anotas y avisas, no ajustas ni desconectas por tu cuenta.",
    },
  ],
};
