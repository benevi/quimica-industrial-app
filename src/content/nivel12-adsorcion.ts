import type { Lesson } from "./types";

export const adsorcionYAbsorcionAFondo: Lesson = {
  slug: "adsorcion-y-absorcion-a-fondo",
  level: 12,
  order: 7.7,
  title: "Adsorción, absorción y evaporación a fondo",
  titleEn: "Adsorption, absorption and evaporation in depth",
  minutes: 40,
  summary:
    "Cómo el carbón activo y los secuestrantes quitan color y paladio, qué es una isoterma sin fórmulas pesadas, el tratamiento con carbón y la filtración en caliente, el polvo combustible, el lavador de gases con la cuenta de la sosa para el HCl, los evaporadores y la economía de vapor, la sedimentación con la ley de Stokes y el secadero de lecho fluido.",
  body: `
Esta lección junta operaciones que el temario oficial de Química Industrial agrupa: adsorción, absorción, evaporación, sedimentación y fluidización. Lo que ya conoces solo se enlaza: el paladio y el catalizador gastado, en «Hidrogenación a fondo: hidrógeno, catalizadores y reactores a presión»; concentrar en el reactor, en «Destilación a fondo: reflujo, vacío y cambio de disolvente en el reactor»; la decantación de dos líquidos, en «Extracción líquido-líquido a fondo: fases, lavados y separación en el reactor».

### Adsorber y absorber: una letra de diferencia
| | Adsorción (*adsorption*) | Absorción (*absorption*) |
|---|---|---|
| Qué pasa | Una sustancia se queda **pegada a la superficie** de un sólido | Un gas **entra dentro** de un líquido y se disuelve o reacciona en él |
| Comparación | El polvo que se pega a un trapo | El azúcar que se disuelve en el café |
| En planta | Carbón activo que quita color; secuestrante que atrapa paladio | Lavador de gases que retiene el HCl en sosa |

En la adsorción, el sólido que atrapa es el **adsorbente** (*adsorbent*) y lo atrapado, el **adsorbato**. Cuanta más superficie tiene el sólido, más puede retener. Por eso los adsorbentes son sólidos muy porosos, llenos de huecos por dentro, como una esponja: el **carbón activo** (*activated carbon*) es el más conocido. Ya lo viste quitando el cloro del agua en «Agua farmacéutica a fondo: cómo se produce, se reparte y se vigila», y la adsorción del oxígeno en los generadores de nitrógeno en «Nitrógeno, aire comprimido y vacío a fondo: los gases que mueven la planta».

### La isoterma, sin fórmulas
El adsorbente no lo atrapa todo. Llega un momento en que el reparto entre el sólido y el líquido ya no cambia: es el **equilibrio**. La curva que dice cuánto retiene cada kilo de adsorbente según lo que queda en el líquido, a temperatura constante, se llama **isoterma de adsorción** (*adsorption isotherm*). «Iso-terma» significa «misma temperatura». La mide el laboratorio de desarrollo para cada producto y cada adsorbente.

Esta es la isoterma de un secuestrante de paladio ficticio, SQ-7, en la disolución de un intermedio. **Todos los valores son de ejemplo.**

| Paladio que queda en el líquido | Paladio retenido por kilo de SQ-7 |
|---|---|
| 0,5 mg/L | 1000 mg/kg |
| 1 mg/L | 2000 mg/kg |
| 2 mg/L | 3900 mg/kg |
| 5 mg/L | 7500 mg/kg |
| 10 mg/L | 9500 mg/kg |
| 20 mg/L | 10500 mg/kg |
| 40 mg/L | 11000 mg/kg |

Tres ideas que salen de la tabla:

1. **Abajo es casi recta.** Con poco paladio en el líquido, el doble en el líquido da el doble en el sólido.
2. **Arriba se aplana.** Los huecos del sólido se van llenando y llega un tope: el adsorbente está **saturado**.
3. **Para dejar el líquido muy limpio hace falta mucho sólido.** El equilibrio se alcanza con lo que *queda* en el líquido. Si quieres que quede 1 mg/L, cada kilo solo retiene lo que marca esa fila, 2000 mg, aunque al principio hubiera mucho más paladio.

Dos cosas más, que el Instituto Nacional de Seguridad y Salud en el Trabajo (INSST) describe en su método para captar vapores con tubos de carbón activo (MTA/MA-032/A98): la capacidad del carbón **baja si sube la temperatura**, y otras sustancias presentes, incluido el vapor de agua, **compiten** por los mismos huecos. Un carbón no atrapa solo lo que tú quieres: también retiene algo de producto, y se nota en el rendimiento.

### Ejercicio resuelto 1: cuánto secuestrante hace falta
Valores de ejemplo. Tras una hidrogenación tienes 2000 L de disolución con 200 kg de producto y 30 mg/L de paladio. El límite del producto es 10 µg/g, la concentración de la opción 1 de la guía ICH Q3D para el paladio por vía oral («Hidrogenación a fondo»).

1. **Paladio total:** 30 mg/L × 2000 L = 60000 mg = 60 g.
2. **Si todo acabara en el producto:** 60000000 µg / 200000 g = **300 µg/g**. Treinta veces el límite.
3. **Lo máximo que puede quedar:** 10 µg/g × 200000 g = 2000000 µg = 2 g, es decir, 2 g / 2000 L = **1 mg/L** en el líquido (caso peor: todo el paladio disuelto acaba en el producto).
4. **Lo que hay que retirar:** (30 − 1) mg/L × 2000 L = 58000 mg.
5. **Lo que retiene cada kilo** cuando quedan 1 mg/L: 2000 mg/kg (tabla).
6. **Secuestrante:** 58000 / 2000 = **29 kg**.

### Ejercicio resuelto 2: dos tratamientos mejor que uno
Mismo caso, pero en dos tandas de 14,5 kg: se añade, se agita, se filtra y se repite. En la zona baja la isoterma es casi recta, unos 2000 mg/kg por cada mg/L que queda. Cada tanda divide el paladio entre 1 + 2000 × 14,5 / 2000 = 15,5:

- Tras la primera: 30 / 15,5 = 1,94 mg/L.
- Tras la segunda: 1,94 / 15,5 = **0,125 mg/L**, unos 1,25 µg/g en el producto.

Con el mismo secuestrante en total, ocho veces menos paladio que en una sola tanda. Es la lógica de «varias extracciones pequeñas mejor que una grande». A cambio, se filtra dos veces.

Por eso un **secuestrante de metales** (*metal scavenger*) es útil: es un sólido con grupos químicos que atrapan un metal concreto. La guía ICH Q11, en sus preguntas y respuestas, cita el uso de secuestrantes junto a la extracción y la destilación entre las operaciones que eliminan impurezas. Cuál se usa, cuánto y cuántas veces lo fija la hoja; el paladio lo confirma el análisis por ICP («Espectroscopia atómica y fluorescencia a fondo»).

### Lecho fijo y ruptura
A veces el adsorbente va empaquetado en un cartucho y el líquido pasa a través. La primera capa se satura, luego la siguiente, y la zona saturada avanza como una mancha. Cuando llega al final, el líquido sale con la sustancia que debía quedarse dentro: es la **ruptura** (*breakthrough*). El INSST la define, para sus tubos de carbón, como el momento en que la salida alcanza el 5 % de la concentración de entrada. El volumen máximo por cartucho lo da el procedimiento, y se respeta aunque el filtrado «se vea bien»: la ruptura no se ve.

### El tratamiento con carbón en el reactor, paso a paso
Se usa sobre todo para quitar **color** y restos de impurezas. La guía ICH Q7 llama al carbón activo y a las ayudas filtrantes **coadyuvantes de proceso** (*process aids*): materiales que ayudan a fabricar pero no participan en la reacción, y para los que pueden hacer falta especificaciones (apartado 6.17). El carbón se recibe y se aprueba como cualquier material.

Secuencia típica (los tiempos y cantidades, los de tu hoja):

1. **Producto disuelto** a la temperatura de la hoja y reactor inertizado.
2. **Carga del carbón** por el sistema cerrado previsto, a menudo como papilla en el disolvente.
3. **Agitación** el tiempo que marque la hoja, para llegar cerca del equilibrio.
4. **Filtración en caliente** por un filtro con ayuda filtrante (*filter aid*) y después por un **filtro de pulido** (*polish filter*) que retiene los finos de carbón.
5. **Enjuague** del filtro con disolvente caliente, para recuperar el producto que moja la torta.

**Por qué en caliente.** En «Cristalización a fondo: solubilidad, sobresaturación y siembra» viste una disolución saturada a 64 °C. Si se filtra por debajo de esa temperatura, el producto cristaliza en la torta, mezclado con el carbón, y se pierde. Por eso se mantienen calientes el filtro y las líneas, y por eso un filtro frío o una línea atascada son un aviso inmediato.

**Si el filtrado sale gris,** han pasado finos de carbón: se para y se avisa. Un lote con carbón no se arregla después de cristalizar.

### Los riesgos del carbón
- **Polvo combustible.** La ficha internacional de seguridad química del carbono (ICSC 0702, escrita para el carbono puro no fibroso) dice que es altamente inflamable en forma de polvo, que las partículas finas forman mezclas explosivas con el aire y que, seco, se carga de electricidad estática con el vertido o el transporte. La NTP 427 del INSST da, para los polvos, límites inferiores de explosividad de 10 a 500 g/m³, y añade que los finos son los que más pesan en la ignición.
- **Mezclas híbridas.** Echar polvo a un reactor con vapor de disolvente es el peor caso: la misma NTP 427 dice que incluso un poco de gas inflamable aumenta mucho la violencia de la explosión de una nube de polvo. Por eso se carga con el reactor inertizado, con puesta a tierra y por el sistema cerrado («Atmósferas explosivas a fondo: por qué arde un disolvente y cómo se evita»).
- **Calentamiento propio.** La ICSC 0702 añade que el carbono puede incendiarse espontáneamente en contacto con el aire y le asigna la clase de peligro 4.2 de la ONU para el transporte. Si el carbón lleva paladio, además, rigen las reglas del catalizador pirofórico: siempre mojado.
- **Limpieza.** La guía técnica del INSST sobre atmósferas explosivas pide limpiar el polvo por aspiración o con paños húmedos, **nunca barriendo ni soplando**, porque eso lo pone en suspensión.

La torta de carbón usada se descarga húmeda a su recipiente cerrado y etiquetado.

### Absorción: el lavador de gases
Muchas reacciones sueltan gases ácidos. El cloruro de hidrógeno (HCl) es el típico. Su ficha ICSC 0163 dice que es un gas más denso que el aire, corrosivo para ojos, piel y vías respiratorias, soluble en agua (67 g en 100 mL a 30 °C) y que reacciona violentamente con las bases. El venteo del reactor no puede soltarlo a la atmósfera: lo manda al **lavador de gases** (*scrubber*).

La NTP 338 del INSST explica que estas torres de absorción funcionan disolviendo y neutralizando el contaminante con una disolución adecuada, cuya cantidad se calcula, en principio, con la **estequiometría** de la reacción, y que debe haber la suficiente para tratarlo todo. Con sosa:

> HCl + NaOH da NaCl + H₂O

Un mol de sosa por mol de HCl, y sale sal y agua. Los números de neutralizar con sosa los tienes en «Ácidos, bases y pH a fondo: medir, ajustar y neutralizar sin riesgos». Lo nuevo aquí es el equipo: una **columna de relleno** (*packed column*), un tubo lleno de piezas que dan mucha superficie mojada; el gas sube, la sosa baja **a contracorriente** (*countercurrent*) impulsada por una bomba de recirculación, y por arriba sale el gas limpio. Lo que vigilas lo fija tu hoja, empezando por el pH o la concentración de la sosa y el caudal de recirculación. La guía británica de gestión de residuos químicos, al hablar de los lavadores, pide mantener su líquido al pH correcto y reponerlo o cambiarlo con la frecuencia adecuada.

### Ejercicio resuelto 3: la sosa para el HCl
Valores de ejemplo. Una reacción libera 14,6 kg de HCl gas. El lavador tiene 500 kg de sosa al 10 % en masa. Masas molares del NIST: HCl 36,461 g/mol, NaOH 39,997 g/mol, NaCl 58,443 g/mol.

1. **Moles de HCl:** 14600 / 36,461 = 400,4 mol.
2. **Sosa pura que se gasta:** 400,4 × 39,997 = 16015 g = **16,0 kg**.
3. **Sosa en el lavador:** 500 × 0,10 = 50 kg. Al acabar quedan 50 − 16,0 = **34,0 kg**, el 68 %.
4. **Sal que se forma:** 400,4 × 58,443 = 23400 g = **23,4 kg** de NaCl disuelta.
5. **Si se repusiera con sosa al 20 %** (valor de ejemplo), 16,0 kg de sosa pura son 16,0 / 0,20 = **80,1 kg** de disolución.

La NTP 338 dice que la cantidad se calcula «en principio» con la estequiometría; la cantidad real, con su margen, la fija la hoja. La neutralización, además, desprende calor. Si el pH baja del límite, o la bomba de recirculación se para, el gas sale sin tratar: se avisa y se sigue el procedimiento, **sin seguir añadiendo el reactivo que suelta el HCl**.

### Evaporación y evaporadores
**Evaporar** (*evaporation*) es quitar disolvente hirviéndolo para **concentrar** una disolución. Interesa lo que queda, no lo que sale. En una planta de API casi siempre se hace en el propio reactor («Destilación a fondo»); las plantas grandes usan además **evaporadores** (*evaporators*), equipos hechos solo para eso.

La clave es el calor latente. El libro de instrumentación de Tony Kuphaldt da para el agua 539,1 cal/g a presión atmosférica, es decir, 539,1 × 4,184 = **2256 kJ por kilo** evaporado. Y el vapor que sale guarda casi todo ese calor.

**La idea del múltiple efecto.** En un evaporador simple, un kilo de vapor de calefacción evapora, como mucho, en torno a un kilo de agua. Pero el vapor que sale del producto sigue siendo vapor: se puede usar para calentar un segundo evaporador que trabaje a menor presión, donde el líquido hierve a menos temperatura. Y el de ese, un tercero. Es el **evaporador de múltiple efecto** (*multiple-effect evaporator*). Los kilos evaporados por kilo de vapor se llaman **economía de vapor** (*steam economy*). La guía de inspección de la FDA sobre sistemas de agua de alta pureza (1993) ya contaba que la mayoría de los sistemas nuevos de agua para inyectables usaban destiladores de múltiple efecto.

### Ejercicio resuelto 4: el vapor de una concentración
Valores de ejemplo. Hay que evaporar 3000 kg de agua.

- **Calor:** 3000 × 2256 = 6768000 kJ, unos 6,77 GJ.
- **Con 500 kW** de calefacción: 6768000 / 500 = 13536 s, unas **3,8 horas**.
- **Vapor, en el caso ideal:** con un efecto, unos 3000 kg; con tres efectos, unos 3000 / 3 = **1000 kg**.

Es una cuenta ideal: en la realidad cada efecto rinde algo menos.

Hay varios tipos de evaporador, como el de película descendente (*falling film*), el de circulación forzada (*forced circulation*) o el de película agitada (*wiped film*); cuál tiene tu planta y por qué lo explica el manual del equipo.

### Sedimentación y decantación de sólidos
Si dejas reposar una suspensión, los cristales caen al fondo: es la **sedimentación** (*sedimentation*). Después se puede retirar el líquido de arriba, el **sobrenadante** (*supernatant*), sin arrastrar el sólido: eso es **decantar**. En planta sirve, por ejemplo, para retirar parte de las aguas madres antes de filtrar.

La velocidad de caída de una partícula pequeña la da la **ley de Stokes** (*Stokes' law*). El BOE de 31 de marzo de 1976, en sus métodos oficiales de análisis de suelos, la usa para medir partículas por sedimentación. Dicha con palabras, la velocidad crece con el **cuadrado del diámetro** y con la diferencia de densidad entre el sólido y el líquido, y baja con la viscosidad del líquido:

> v = g × Δρ × d² / (18 × η)

**Ejercicio resuelto 5.** Cristales de 50 µm, 300 kg/m³ más densos que el agua (valor de ejemplo), en agua a 30 °C, cuya viscosidad, según ese BOE, es 0,008007 poise (0,0008007 Pa·s):

- v = 9,807 × 300 × (0,000050)² / (18 × 0,0008007) = 0,00051 m/s, es decir, **0,51 mm/s**. Para bajar un metro: unos **33 minutos**.
- Con finos de 10 µm, cinco veces más pequeños, la velocidad es 5 × 5 = **25 veces menor**: 0,020 mm/s, y el mismo metro tarda unas **13,6 horas**.

Por eso los finos casi no sedimentan. Cuando la gravedad no basta, la centrífuga la multiplica («La centrífuga a fondo: fuerza G, ciclo completo y qué hacer cuando vibra»).

### El lecho fluidizado
Pon arena sobre un fondo agujereado y sopla aire desde abajo. Con poco aire, la arena no se mueve: es un **lecho fijo**. Si aumentas el aire, llega un punto en que el empuje del gas sujeta el peso de los granos: se separan y la arena se mueve como un líquido que hierve. Es un **lecho fluidizado** (*fluidized bed*). La guía SUPAC de la FDA sobre equipos describe así el secadero de lecho fluido: las partículas están expandidas, sostenidas por el arrastre del gas, y sólidos y gas se mezclan y se comportan como un líquido en ebullición. Si sigues aumentando el gas, se lleva las partículas: es el **arrastre** (*entrainment*), y el polvo acaba en los filtros de polvo del secadero.

**Ejercicio resuelto 6: la presión diferencial del lecho.** Cuando el lecho está fluidizado, el gas sostiene todo su peso, así que la caída de presión a través del lecho es, aproximadamente, el peso del lecho entre el área de la placa. Valores de ejemplo: 250 kg de producto sobre una placa de 0,8 m²:

> ΔP = 250 × 9,807 / 0,8 = 3065 Pa, unos **30,6 mbar**

Por eso, una vez fluidizado, la presión diferencial del lecho apenas sube aunque aumentes el gas. Si cae de golpe, puede que el gas haya abierto un canal y pase sin sostener el producto. Si el producto está apelmazado, no fluidiza. Las dos cosas se avisan.

Riesgos del lecho fluido: es polvo seco moviéndose con gas caliente, justo las condiciones de la nube explosiva. Por eso llevan puesta a tierra, protección contra explosiones como el venteo de alivio que describe la NTP 427 y, cuando el producto viene mojado de disolvente inflamable, pueden trabajar con nitrógeno en vez de aire, la inertización que la guía de atmósferas explosivas admite también para polvos.

### Qué vigila el operador
En todas estas operaciones el patrón es el mismo: material aprobado y pesado con verificación, equipo inertizado y a tierra cuando hay polvo o disolvente, la variable que dice si funciona (temperatura de filtración, pH del lavador, presión diferencial del lecho, tiempo de reposo) anotada con su hora, y el análisis como prueba final. Lo que no cuadre se para y se avisa.

Los números de esta lección son de ejemplo y sirven para entender. En planta manda siempre el procedimiento vigente (SOP): cantidades de carbón y secuestrante, temperaturas, límites del lavador y consignas del lecho fluido son los de tu hoja de producción.
`,
  plant: `
Turno de tarde. En el reactor R-512 tienes disuelto en etanol el intermedio ficticio PZ-17, que viene de una hidrogenación. La hoja dice: *«Calentar a 65–70 °C. Cargar 12 kg de carbón activo CA-3 como papilla en etanol por la línea de carga cerrada. Agitar 60 min. Filtrar en caliente por F-513 (con ayuda filtrante) y por el cartucho de pulido F-514 al reactor R-515. Enjuagar con 80 L de etanol a 65 °C. IPC: color de la disolución y paladio por ICP.»*

Antes de nada compruebas lo que no se ve: R-512 inertizado y con la medida de oxígeno anotada, pinza de tierra conectada en el bidón de papilla, filtro F-513 y líneas con el traceado caliente a temperatura. Lote del carbón aprobado en la etiqueta.

Cargas la papilla, agitas y anotas la hora. Al empezar a filtrar, la mirilla de R-515 muestra un líquido gris. Paras la transferencia y avisas a la jefa de turno: han pasado finos. Mantenimiento encuentra el cartucho F-514 mal asentado en su alojamiento. Lo cambian, se devuelve el filtrado a R-512 según el procedimiento de la hoja y se vuelve a filtrar: ahora sale amarillo claro y transparente.

Mientras tanto, el lavador LG-900 del venteo trabaja con sosa al 10 %: anotas su pH y el caudal de la bomba de recirculación cada hora, como pide la hoja.

La torta de carbón se queda húmeda en F-513 y se descarga a un bidón cerrado con etiqueta de residuo. El laboratorio da paladio por debajo del límite y el color, conforme.
`,
  batchRecord: `
En la hoja de producción (*batch record*) de estas operaciones verás casillas como estas:

- **Carbón activo o secuestrante**: código, número de lote aprobado, cantidad pesada real (12,0 kg, no «12 kg aprox.»), quién pesa y quién verifica.
- **Condiciones del tratamiento**: temperatura de carga y de contacto, hora de inicio y fin de la agitación, velocidad del agitador.
- **Filtración en caliente**: temperatura de la masa al filtrar, filtro y cartucho usados (F-513, F-514), aspecto del filtrado, volumen de enjuague.
- **IPC**: color y paladio, con resultado, fecha y hora; si no cumple, la segunda tanda que diga la hoja y su nuevo análisis.
- **Lavador de gases**: pH o concentración de la sosa al inicio, durante y al final, caudal de recirculación, reposiciones con su cantidad.
- **Evaporación o concentración**: presión, temperaturas, volumen o densidad final.
- **Decantación**: tiempo real de reposo y volumen retirado.
- **Lecho fluido**: temperatura del gas de entrada y salida, presión diferencial del lecho y de las mangas, humedad de las muestras.
- **Incidencias**: filtrado gris, cartucho cambiado, polvo derramado, pH bajo en el lavador; con hora, aviso y firma.
- **Residuos**: torta de carbón o secuestrante, descargada húmeda, con su etiqueta.
`,
  terms: [
    { es: "Adsorción", en: "Adsorption", def: "Retención de una sustancia en la superficie de un sólido, como el carbón activo." },
    { es: "Absorción", en: "Absorption", def: "Paso de un gas al interior de un líquido, donde se disuelve o reacciona; es lo que hace un lavador de gases." },
    { es: "Carbón activo", en: "Activated carbon", def: "Carbón muy poroso usado como adsorbente para quitar color e impurezas; ICH Q7 lo pone como ejemplo de coadyuvante de proceso." },
    { es: "Isoterma de adsorción", en: "Adsorption isotherm", def: "Curva que dice cuánto retiene cada kilo de adsorbente según lo que queda en el líquido o el gas, a temperatura constante." },
    { es: "Secuestrante de metales", en: "Metal scavenger", def: "Sólido con grupos químicos que atrapan un metal concreto, como el paladio, para retirarlo de una disolución." },
    { es: "Coadyuvante de proceso", en: "Process aid", def: "Material que ayuda a fabricar sin participar en la reacción, como una ayuda filtrante o el carbón activo (ICH Q7)." },
    { es: "Ruptura", en: "Breakthrough", def: "Momento en que un lecho de adsorbente se satura y la sustancia empieza a salir con el líquido o el gas tratado." },
    { es: "Lavador de gases", en: "Scrubber", def: "Equipo que hace pasar un gas por un líquido que retiene o neutraliza sus contaminantes, por ejemplo HCl en sosa." },
    { es: "Columna de relleno", en: "Packed column", def: "Tubo lleno de piezas que dan mucha superficie mojada, donde el gas y el líquido se cruzan a contracorriente." },
    { es: "Economía de vapor", en: "Steam economy", def: "Kilos de disolvente evaporados por cada kilo de vapor de calefacción; aumenta con el número de efectos." },
    { es: "Evaporador de múltiple efecto", en: "Multiple-effect evaporator", def: "Serie de evaporadores en la que el vapor que sale de uno calienta al siguiente, que trabaja a menor presión." },
    { es: "Sedimentación", en: "Sedimentation / settling", def: "Caída de las partículas sólidas al fondo de un líquido en reposo; su velocidad la da la ley de Stokes." },
    { es: "Lecho fluidizado", en: "Fluidized bed", def: "Capa de partículas sostenida por un gas que sube, en la que sólidos y gas se mezclan como un líquido que hierve." },
    { es: "Mezcla híbrida", en: "Hybrid mixture", def: "Mezcla de polvo combustible y gas o vapor inflamable en el aire; explota con más violencia que el polvo solo." },
  ],
  quiz: [
    {
      kind: "choice",
      q: "En el reactor echas carbón activo para quitar color y en el venteo el HCl pasa a la sosa del lavador. ¿Qué operación es cada una?",
      options: [
        "Las dos son absorción, porque el color y el gas acaban dentro",
        "El carbón absorbe el color y la sosa adsorbe el gas del venteo",
        "El carbón adsorbe el color y la sosa absorbe el HCl del venteo",
        "Las dos son adsorción, porque siempre hay un sólido que retiene",
      ],
      answer: 2,
      explain: "Adsorber es pegar a la superficie de un sólido (el carbón); absorber es que un gas entre en un líquido y se disuelva o reaccione (el HCl en la sosa).",
    },
    {
      kind: "number",
      q: "Una reacción libera 7,3 kg de HCl gas que van al lavador. Con masas molares de 36,461 g/mol para el HCl y 39,997 g/mol para la sosa, ¿cuántos kilos de NaOH pura se gastan como mínimo?",
      answer: 8.01,
      tolerance: 0.02,
      unit: "kg",
      explain: "Moles de HCl: 7300 / 36,461 = 200,2 mol. Un mol de NaOH por mol de HCl: 200,2 × 39,997 = 8008 g, es decir, 8,01 kg.",
    },
    {
      kind: "choice",
      q: "Acaba el tratamiento con carbón y la hoja pide filtrar a 65–70 °C. El traceado del filtro está averiado y el filtro está a 40 °C. ¿Qué haces?",
      options: [
        "No filtro y aviso: el producto cristalizaría en la torta con el carbón",
        "Filtro igual, porque el carbón se retiene a cualquier temperatura",
        "Filtro más despacio para que el líquido tenga tiempo de calentarse",
        "Enfrío también el reactor a 40 °C para que no haya diferencia",
      ],
      answer: 0,
      explain: "Por debajo de la temperatura de saturación el producto cristaliza en el filtro mezclado con el carbón y se pierde; la filtración es en caliente por eso. Se avisa y se sigue el procedimiento.",
    },
    {
      kind: "number",
      q: "Tienes 1500 L de disolución con 20 mg/L de paladio y quieres dejar 1 mg/L. La isoterma del secuestrante dice que, cuando quedan 1 mg/L, cada kilo retiene 2000 mg. ¿Cuántos kilos de secuestrante hacen falta en una sola tanda?",
      answer: 14.25,
      tolerance: 0.02,
      unit: "kg",
      explain: "Hay que retirar (20 − 1) × 1500 = 28500 mg. Cada kilo retiene 2000 mg: 28500 / 2000 = 14,25 kg.",
    },
    {
      kind: "number",
      q: "Por la ley de Stokes, la velocidad de caída va con el cuadrado del diámetro. Si unos cristales de 50 µm caen a cierta velocidad, ¿cuántas veces más despacio caen unos finos de 25 µm del mismo producto en el mismo líquido?",
      answer: 4,
      tolerance: 0.01,
      unit: "veces",
      explain: "El diámetro es la mitad, y la velocidad va con el diámetro al cuadrado: 2 × 2 = 4 veces más despacio.",
    },
    {
      kind: "choice",
      q: "Tras el tratamiento con carbón, el filtrado que llega al reactor siguiente sale gris. ¿Qué haces?",
      options: [
        "Sigo: el gris se irá en la cristalización y en el lavado de la torta",
        "Añado más carbón al reactor siguiente para que atrape el gris",
        "Subo la presión del filtro para acabar antes y lo anoto al final",
        "Paro la transferencia y aviso: han pasado finos de carbón",
      ],
      answer: 3,
      explain: "El gris son finos de carbón que han atravesado el filtro, a menudo por un cartucho de pulido mal asentado o roto. Se para, se avisa y se sigue el procedimiento; no se arregla después.",
    },
    {
      kind: "number",
      q: "Un secadero de lecho fluido tiene 180 kg de producto sobre una placa de 0,6 m². Con g = 9,81 m/s², ¿qué presión diferencial aproximada, en mbar, esperas en el lecho cuando está fluidizado? (100 Pa = 1 mbar)",
      answer: 29.43,
      tolerance: 0.02,
      unit: "mbar",
      explain: "El gas sostiene el peso del lecho: ΔP = 180 × 9,81 / 0,6 = 2943 Pa, es decir, 29,43 mbar.",
    },
    {
      kind: "choice",
      q: "Mientras se dosifica un reactivo que suelta HCl, el pH de la sosa del lavador baja por debajo del límite de la hoja. ¿Qué es lo correcto?",
      options: [
        "Paro la bomba de recirculación para que la sosa no se gaste más",
        "Aviso y sigo el procedimiento, sin seguir dosificando por mi cuenta",
        "Sigo dosificando: el pH volverá a subir cuando acabe la reacción",
        "Abro el venteo directo a la atmósfera hasta que se recupere",
      ],
      answer: 1,
      explain: "Con la sosa agotada el HCl sale sin tratar. Se avisa y se sigue el procedimiento, que normalmente pide parar la adición y reponer la sosa; nunca se para la recirculación ni se ventea a la atmósfera.",
    },
    {
      kind: "number",
      q: "Hay que evaporar 1200 kg de agua. En el caso ideal, un kilo de vapor evapora un kilo de agua en cada efecto. ¿Cuántos kilos de vapor de calefacción harían falta con un evaporador de tres efectos?",
      answer: 400,
      tolerance: 0.01,
      unit: "kg",
      explain: "En el caso ideal cada kilo de vapor evapora un kilo en cada uno de los tres efectos: 1200 / 3 = 400 kg de vapor. En la realidad hace falta algo más.",
    },
    {
      kind: "choice",
      q: "Al cargar carbón activo se ha caído un poco de polvo junto a la boca del reactor. ¿Cómo se limpia?",
      options: [
        "Con aire comprimido, para que no quede nada en las rendijas",
        "Barriendo en seco y echándolo después al contenedor general",
        "Por aspiración adecuada o con paño húmedo, según el procedimiento",
        "Se deja hasta el final del turno para no interrumpir la carga",
      ],
      answer: 2,
      explain: "El polvo de carbón es combustible y puede formar una nube explosiva. La guía técnica del INSST pide aspiración o paños húmedos y nunca barrer ni soplar, porque eso lo pone en suspensión.",
    },
  ],
};
