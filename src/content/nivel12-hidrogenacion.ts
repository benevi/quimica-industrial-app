import type { Lesson } from "./types";

export const hidrogenacionAFondo: Lesson = {
  slug: "hidrogenacion-a-fondo",
  level: 12,
  order: 2.7,
  title: "Hidrogenación a fondo: hidrógeno, catalizadores y reactores a presión",
  titleEn: "Catalytic hydrogenation in depth",
  minutes: 40,
  summary:
    "Qué es una hidrogenación catalítica y para qué se usa en un API, qué tiene de especial el hidrógeno, por qué el catalizador gastado arde solo, la secuencia nitrógeno, hidrógeno, nitrógeno con sus cuentas, cómo se sigue la reacción por el consumo de gas, por qué manda la agitación, qué metal puede quedar en el producto y qué haces si salta un detector de hidrógeno.",
  body: `
En «Reacciones en la fabricación de API a fondo» y en «Oxidación y reducción a fondo» viste la hidrogenación como tipo de reacción, su secuencia básica y sus dos riesgos grandes: el hidrógeno y el catalizador. Aquí vas a ver la operación entera desde el puesto del operador.

### Qué es una hidrogenación catalítica
Una **hidrogenación** (*hydrogenation*) añade hidrógeno a una molécula. El hidrógeno se usa como gas, H₂, y hace falta un **catalizador** (*catalyst*): un metal sobre el que el hidrógeno y la molécula se encuentran y reaccionan. Por eso se llama **hidrogenación catalítica** (*catalytic hydrogenation*). Cómo acelera un catalizador sin gastarse lo tienes en «Velocidad de reacción a fondo».

En la fabricación de API se usa sobre todo para tres trabajos:

| Para qué | Qué pasa | Ejemplo sencillo de libro |
|---|---|---|
| Quitar un **doble enlace** (*double bond*) | Los dos carbonos unidos por un doble enlace reciben un hidrógeno cada uno y quedan con enlace simple | CH₂=CH₂ + H₂ da CH₃–CH₃ (eteno a etano) |
| Pasar un **grupo nitro a amina** (*nitro to amine reduction*) | El –NO₂ pierde sus oxígenos, que salen como agua, y queda –NH₂ | C₆H₅NO₂ + 3 H₂ da C₆H₅NH₂ + 2 H₂O (nitrobenceno a anilina) |
| Quitar un **grupo protector** (*protecting group*) | Se rompe un enlace y el hidrógeno se queda con los dos trozos; se llama **hidrogenólisis** (*hydrogenolysis*) | R–O–CH₂–C₆H₅ + H₂ da R–OH + CH₃–C₆H₅ (un éter de bencilo suelta el alcohol y tolueno) |

Fíjate en el número delante del H₂: un doble enlace gasta un mol de hidrógeno; un nitro, tres. Con él se sabe cuánto gas debería entrar.

### El hidrógeno: lo que tienes que saber de él
**Es el gas más ligero.** Su molécula es la más pequeña que existe. La NTP 383 del Instituto Nacional de Seguridad y Salud en el Trabajo (INSST) da, a 15 °C y 1 atmósfera, una densidad del hidrógeno gas de 0,084 kg/m³ y una densidad relativa respecto al aire de 0,068. Es decir, pesa unas 15 veces menos que el aire (1 / 0,068 = 14,7). Dos consecuencias:

- **Se escapa con facilidad** por cualquier junta, rosca o cierre que no esté perfecto.
- **Sube y se acumula arriba**: bajo techos, en falsos techos y en los huecos altos de una sala. La guía técnica del INSST sobre atmósferas explosivas pide decidir la posición de los detectores según la densidad del gas y las zonas donde puede acumularse, como los falsos techos. Para el hidrógeno, en alto.

**Arde con muchísima facilidad.** El Reglamento CLP lo clasifica como gas inflamable de categoría 1 con la frase H220 «Gas extremadamente inflamable». Además, una nota de ese reglamento (la nota U) obliga a clasificar los gases como gases a presión cuando se comercializan; a un gas comprimido le corresponde H280 «Contiene gas a presión; peligro de explosión en caso de calentamiento». Sus límites de inflamabilidad exactos están en la sección 9 de su ficha de datos de seguridad; en esta lección no se dan porque no se han podido leer en una fuente oficial gratuita. Lo que sí dice el CLP es el criterio de la categoría 1: un gas que arde con el aire en mezclas del 13 % o menos, o cuya banda de inflamabilidad tiene al menos 12 puntos.

**Prende con una chispa diminuta.** La NTP 567 da 0,019 mJ como energía mínima de ignición de las atmósferas de hidrógeno, y la NTP 1138 toma 0,016 mJ como valor inferior. La guía de atmósferas explosivas dice que muchas mezclas necesitan solo décimas de milijulio y que el hidrógeno, el acetileno y el disulfuro de carbono se inflaman incluso por debajo. Una descarga de electricidad estática que ni notarías basta.

**Es el gas que más exige a los equipos eléctricos.** La misma guía lo pone como ejemplo del grupo IIC, el de los gases más fáciles de inflamar: un equipo eléctrico para esa sala lleva en su marcado IIC, o el gas entre paréntesis, como II (H2) («Atmósferas explosivas a fondo»).

### Los catalizadores
| Catalizador | Cómo es | Dato de ICH Q3D |
|---|---|---|
| **Paladio sobre carbón** (*palladium on carbon*, Pd/C) | Polvo negro de carbón con paladio repartido en granitos finísimos | El paladio, sobre distintos soportes, se usa como catalizador de hidrogenación |
| **Platino sobre carbón** (*platinum on carbon*, Pt/C) | Igual, con platino | El principal uso industrial del platino es como catalizador |
| **Níquel Raney** (*Raney nickel*) | Níquel muy poroso, obtenido de una aleación de níquel y aluminio | El níquel en forma de aleación de níquel y aluminio se usa como catalizador de hidrogenación |

**Por qué arden solos.** La NTP 479 del INSST incluye los **metales finamente divididos** entre los compuestos cuyo simple contacto con el oxígeno del aire puede provocar su inflamación espontánea. El CLP llama **pirofórico** (*pyrophoric*) al sólido que, aun en pequeñas cantidades, puede inflamarse en cinco minutos al entrar en contacto con el aire (frase H250). Después de la reacción el catalizador está peor: el metal tiene hidrógeno pegado a su superficie y está empapado de disolvente inflamable. Mojado, el agua o el disolvente le tapan el paso al aire; seco y al aire, puede arder sin chispa ni llama. De ahí las tres reglas de oro:

1. **Siempre mojado.** El fresco se maneja húmedo, en la forma que diga la hoja; el gastado se mantiene húmedo hasta que acaba en su recipiente con agua.
2. **Siempre con nitrógeno.** Se carga y se filtra en un equipo inertizado.
3. **Nunca junto al hidrógeno con aire.** El propio catalizador, en presencia de hidrógeno y aire, puede ser la fuente de ignición dentro del equipo.

**Cuánto metal cargas de verdad.** El catalizador húmedo se pesa con su agua. Valores de ejemplo: 16 kg de Pd/C al 5 % de paladio sobre base seca, con un 50 % de agua. Peso seco: 16 × 0,5 = **8 kg**. Paladio: 8 × 0,05 = **0,4 kg**. Por eso la hoja dice siempre si la cantidad va en húmedo o en seco.

### Cargar el catalizador
La forma exacta la marca tu hoja. Lo que no cambia:

- El reactor está **inertizado** y **sin hidrógeno** cuando se carga. Nunca se abre un reactor con hidrógeno para añadir catalizador.
- Se carga **húmedo**, a menudo como papilla en agua o en el disolvente, por el sistema cerrado previsto. Si cae polvo fuera, se moja enseguida y se recoge como diga el procedimiento; nunca se barre en seco ni se deja secar en el suelo.
- Pinzas de **puesta a tierra** conectadas antes de trasvasar.

### El reactor de hidrogenación
Se hace en un **autoclave** (*autoclave*), un reactor diseñado para trabajar a presión, con:

- Una **línea de hidrógeno** con válvula de aislamiento, regulador de presión y, a menudo, un **contador** (*flow totalizer*) o un **pulmón** (*buffer tank*): un depósito de hidrógeno cuya caída de presión dice cuánto gas ha entrado.
- Una **línea de nitrógeno** para las purgas.
- Un **venteo** que lleva los gases a un lugar seguro. La guía de atmósferas explosivas pide que el sitio adonde se dirigen las sustancias inflamables esté libre de riesgo, preferiblemente en el exterior y lejos de personas, fuentes de ignición y otros inflamables.
- **Válvula de seguridad y disco de ruptura**, que no se tocan («El reactor a fondo»), y **detectores de hidrógeno** en la sala.

### Las purgas: nitrógeno, hidrógeno, nitrógeno
Dentro del autoclave nunca deben estar a la vez oxígeno e hidrógeno: tendrías la mezcla que arde, el catalizador como posible fuente de ignición y un recipiente cerrado. La NTP 567 da para el hidrógeno una concentración límite de oxígeno del 5 % y pide quedarse de 2 a 3 puntos por debajo. Por eso la operación tiene tres fases de gas:

| Fase | Qué se quita | Con qué |
|---|---|---|
| 1. Inertizar | El aire, y con él el oxígeno | Nitrógeno |
| 2. Cargar hidrógeno | El nitrógeno, que diluiría el hidrógeno | Ciclos con hidrógeno |
| 3. Purgar al final | El hidrógeno, antes de abrir o trasvasar | Nitrógeno |

Las cuentas son las de «Inertización a fondo»: cada ciclo multiplica el gas viejo por la presión baja dividida entre la alta, siempre en **presión absoluta**. Valores de ejemplo, con ciclos de presión entre 1 bar a y 5 bar a (es decir, de 0 a 4 bar g), factor 1 / 5 = 0,2:

- **Fase 1.** Del aire, con 21 % de oxígeno, tres ciclos de nitrógeno: 21 × 0,2 × 0,2 × 0,2 = **0,17 %** de oxígeno. Se mide con el analizador antes de seguir.
- **Fase 2.** Tres ciclos con hidrógeno, venteando cada vez a un lugar seguro: el nitrógeno baja de 100 % a 100 × 0,008 = **0,8 %**, y el poco oxígeno que quedaba se diluye igual.
- **Fase 3.** Al terminar, se despresuriza al venteo y se hacen ciclos de nitrógeno. Partiendo de hidrógeno puro, tres ciclos dejan **0,8 %** de hidrógeno; con ciclos solo hasta 4 bar a, quedaría el 1,56 %, casi el doble. El número de ciclos y el límite los fija la hoja.

La presión no te dice qué gas hay: lo dice el analizador.

### Durante la reacción: presión, consumo y temperatura
Lo habitual es trabajar a **presión constante**: el regulador deja entrar hidrógeno a medida que la reacción lo gasta. La presión del reactor apenas se mueve; lo que cuenta la historia es **cuánto gas entra**.

**La cuenta del pulmón.** Valores de ejemplo: se hidrogenan 200 kg de un intermedio ficticio de masa molar 160 g/mol con un doble enlace. Moles: 200000 / 160 = **1250 mol**, que gastan 1250 mol de H₂. El hidrógeno sale de un pulmón de 2 m³ a 20 °C. Con la ley de los gases ideales, P × V = n × R × T, la caída de presión esperada es:

> ΔP = n × R × T / V = 1250 × 8,314 × 293,15 / 2 = 1523000 Pa, unos **15,2 bar**

En una caída de presión da igual que el manómetro marque bar g: la atmosférica se resta sola. A estas presiones el hidrógeno no es exactamente un gas ideal, pero la cuenta sirve para saber qué esperar.

**Cómo se ve en la pantalla.** Al principio el gas entra deprisa; luego el caudal baja y al final se para. Que se pare es una pista, no la prueba. La guía ICH Q7 lo dice en su apartado 8.20: los tiempos límite de la hoja pueden no ser adecuados cuando se trabaja hasta un objetivo, y pone como ejemplo la hidrogenación, porque el final de la reacción se decide con **muestreo y ensayo en proceso**. El apartado 8.33 permite que producción haga controles en proceso y ajuste el proceso solo dentro de límites aprobados por calidad, y todo queda en la hoja.

| Lo que ves | Qué puede ser | Qué haces |
|---|---|---|
| El consumo se para mucho antes de lo esperado | Catalizador envenenado o poco activo, agitación baja, reacción incompleta | Avisas; no subes presión ni temperatura por tu cuenta |
| Entra más gas del esperado | Fuga, o una reacción que va más allá de lo previsto | Avisas; compruebas detectores y uniones según el procedimiento |
| Con la entrada de hidrógeno cerrada, la presión del reactor baja sin consumo previsto | Fuga | Avisas y sigues el procedimiento de fugas |
| La temperatura sube más de lo normal | Reacción más rápida de lo previsto | Lo que mande la hoja: normalmente, cortar o reducir la entrada de hidrógeno y avisar |

### Transferencia de masa: por qué manda la agitación
Para reaccionar, el hidrógeno tiene que hacer un viaje en tres etapas:

1. **Pasar del gas al líquido.** Solo entra por la superficie de contacto entre gas y líquido: la de arriba y la de las burbujas.
2. **Cruzar el líquido** hasta el catalizador.
3. **Llegar a la superficie del metal**, donde le espera la molécula.

El hidrógeno se disuelve poco en los líquidos. Por eso, muchas veces lo que frena la reacción no es la química, sino lo deprisa que el gas consigue entrar en el líquido. A eso se le llama **transferencia de masa gas-líquido** (*gas-liquid mass transfer*). Tres consecuencias prácticas:

- **La agitación manda.** El agitador rompe el gas en burbujas, renueva la superficie y mantiene el catalizador en suspensión: tres de los trabajos que viste en «Agitación a fondo». Si el agitador se para, el consumo de hidrógeno cae casi a cero aunque el reactor esté lleno de gas.
- **La presión ayuda.** Por la ley de Henry, cuanto más presión de hidrógeno, más hidrógeno disuelto. Por eso la consigna de presión es un parámetro del proceso y no se cambia por tu cuenta.
- **El catalizador en el fondo no trabaja.** Si se asienta, la reacción se frena.

### El calor
Las hidrogenaciones desprenden calor. En una a presión constante, el calor que se genera va al ritmo del hidrógeno que entra: el caudal de hidrógeno es, a la vez, tu indicador de cuánto calor se está produciendo. La camisa lo retira con Q = U × A × ΔT («El reactor a fondo»).

Aquí la molécula a hidrogenar ya está dentro desde el principio; lo que se dosifica es el gas. Si la temperatura se escapa, quitar hidrógeno o bajar la agitación frena la reacción, y la hoja dice qué se hace. Y si el agitador se para y vuelve a arrancar, la reacción recupera de golpe su ritmo: no se rearranca sin seguir el procedimiento.

### Filtrar el catalizador sin que se seque
Tras la purga final con nitrógeno, la mezcla pasa a un filtro cerrado e inertizado («Filtros a fondo»). Reglas:

- La torta de catalizador **no se seca nunca**. No se sopla «hasta que salga seca» y no se deja al aire.
- Los lavados se hacen con la torta siempre cubierta de líquido.
- La torta se descarga húmeda a un recipiente con agua, cerrado y etiquetado como catalizador gastado.
- A menudo, detrás va un **filtro de pulido** (*polish filter*) para retener los granitos finos que se escapan. Si el filtrado sale gris o negro, han pasado finos: se avisa.

### Qué se hace con el catalizador usado
La lista europea de residuos tiene un código propio, 16 08 01, para los catalizadores usados que contienen paladio, platino y otros metales preciosos, y otro con asterisco, de residuo peligroso, el 16 08 07*, para los catalizadores usados contaminados con sustancias peligrosas. Cuál corresponde lo decide la planta. La Ley 7/2022 de residuos fija una jerarquía en la que el reciclado va antes que la eliminación; recuperar el metal de un catalizador es reciclarlo. A ti te toca que el residuo llegue mojado, identificado y completo.

### El metal que se queda en el producto
Un poco de metal puede atravesar el filtro y quedarse en el API. La guía **ICH Q3D** de impurezas elementales pide considerar en la evaluación de riesgos cualquier elemento añadido a propósito, como un catalizador. Sus valores para los metales de hidrogenación:

| Elemento | Clase | PDE oral | PDE parenteral | PDE por inhalación | Concentración oral (opción 1) |
|---|---|---|---|---|---|
| Paladio | 2B | 100 µg/día | 10 µg/día | 1 µg/día | 10 µg/g |
| Platino | 2B | 100 µg/día | 10 µg/día | 1 µg/día | 10 µg/g |
| Níquel | 2A | 200 µg/día | 20 µg/día | 6 µg/día | 20 µg/g |

La **exposición diaria permitida** (*permitted daily exposure*, PDE) es lo máximo aceptable al día. La opción 1 la pasa a concentración suponiendo 10 g de medicamento al día: 100 / 10 = 10 µg/g («Átomos y tabla periódica a fondo»).

**Cuánto metal puede quedarse.** Siguiendo el ejemplo de antes, cargaste 0,4 kg de paladio, es decir, 400 g. Si obtienes 300 kg de producto con un límite de 10 µg/g, en todo el lote caben como mucho 300000 × 10 = 3000000 µg, es decir, **3 g** de paladio. Eso es el 0,75 % de lo cargado. El filtro tiene que retener más del 99 % del metal. Un cartucho mal colocado o roto basta para que el lote no cumpla. El análisis se hace por ICP en el laboratorio («Otras técnicas a fondo: difracción de rayos X, RMN, espectrometría de masas e ICP»).

### Detectores de hidrógeno y qué haces si salta uno
Los detectores de gases inflamables suelen dar la lectura en **porcentaje del límite inferior de explosividad** (% del LIE). La relación entre % del LIE y % en volumen está en «Atmósferas explosivas a fondo». Un detector es una ayuda, no una garantía: puede estar mal ajustado o mal colocado.

Si salta una alarma de hidrógeno:

1. **No acciones interruptores**, ni para encender ni para apagar, ni uses aparatos que no sean para zona clasificada.
2. **Aléjate** de la zona y **avisa** por el medio que marque el plan de emergencia.
3. Si el procedimiento lo prevé y puedes hacerlo desde un lugar seguro, como la sala de control, **corta el hidrógeno** con la válvula de aislamiento.
4. No vuelvas a entrar hasta que lo autorice el responsable. Nunca busques una fuga con una llama.

### Lo que no hace nunca el operador
Abrir o trasvasar con hidrógeno dentro; meter hidrógeno sin la inertización comprobada; cargar catalizador seco o en un reactor con hidrógeno; cambiar consignas por su cuenta; dejar secar una torta de catalizador.

Los números de esta lección son de ejemplo y sirven para entender. En planta manda siempre el procedimiento vigente (SOP): presiones, ciclos, límites de oxígeno y de hidrógeno, cantidades de catalizador y actuaciones ante una alarma son los de tu hoja de producción.
`,
  plant: `
Turno de tarde en la planta ficticia. En el autoclave HZ-640 vas a hidrogenar 200 kg del intermedio ficticio TQ-12, de masa molar 160 g/mol, con 16 kg de Pd/C húmedo (5 % de paladio en seco y 50 % de agua). Todos los valores son de ejemplo.

Con el reactor cerrado haces tres ciclos de nitrógeno de 1 a 5 bar a. El analizador marca 0,2 % de oxígeno; la hoja pide 1,0 % como máximo. Anotas el valor y la hora. Cargas el catalizador en papilla por el sistema cerrado, con la pinza de tierra puesta, y repites la inertización.

Haces tres ciclos con hidrógeno, presurizas a la consigna y arrancas el agitador. Esperas una caída de unos 15,2 bar en el pulmón TK-641, de 2 m³. A las dos horas el caudal cae de golpe. Miras la pantalla: el agitador se ha parado por un disparo eléctrico. No lo rearrancas: avisas a la jefa de turno, que lo hace según el procedimiento. El consumo se recupera.

Al final la caída del pulmón es de 15,0 bar, cerca de lo esperado. El control en proceso confirma el final de la reacción. Despresurizas al venteo, haces tres ciclos de nitrógeno y pasas la mezcla al filtro FC-645 inertizado. La torta se lava cubierta de líquido y se descarga húmeda a un bidón con agua etiquetado como catalizador gastado. Tomas la muestra para el análisis de paladio.

Durante la limpieza suena el detector de hidrógeno GD-642, situado sobre el autoclave. No tocas interruptores: sales, avisas y mantenimiento encuentra una brida de la línea de venteo mal apretada.
`,
  batchRecord: `
- **Equipo**: código del autoclave, del pulmón o contador de hidrógeno, del filtro y del analizador de oxígeno, con su calibración vigente.
- **Catalizador**: código, lote, peso real, si es húmedo o seco, hora de carga y verificación de una segunda persona.
- **Inertización**: número de ciclos, presiones alcanzadas (con «abs» o «g») y oxígeno medido, con hora y firma, antes de cargar el catalizador y antes del hidrógeno.
- **Ciclos de hidrógeno**: número y presiones.
- **Hidrogenación**: consigna y presión real, temperatura, velocidad del agitador, lecturas del contador o del pulmón y hora en que se para el consumo.
- **Consumo**: esperado frente a real; cualquier diferencia grande se anota y se comunica.
- **Control en proceso**: hora de la muestra, resultado y decisión.
- **Purga final**: despresurización, ciclos de nitrógeno y, si la hoja lo pide, hidrógeno residual medido.
- **Filtración**: filtro y cartucho usados, confirmación de que la torta se mantuvo húmeda, aspecto del filtrado y muestra para el análisis de metal.
- **Residuo**: recipiente, etiqueta y cantidad de catalizador gastado.
- **Incidencias**: paradas del agitador, alarmas de detectores, fugas, avisos al responsable.
`,
  terms: [
    { es: "Hidrogenación catalítica", en: "Catalytic hydrogenation", def: "Reacción en la que una molécula gana hidrógeno a partir de hidrógeno gas sobre un catalizador metálico." },
    { es: "Hidrogenólisis", en: "Hydrogenolysis", def: "Hidrogenación que rompe un enlace; se usa, por ejemplo, para quitar grupos protectores de tipo bencilo." },
    { es: "Autoclave", en: "Autoclave", def: "Reactor diseñado para trabajar a presión, como el de las hidrogenaciones." },
    { es: "Paladio sobre carbón", en: "Palladium on carbon (Pd/C)", def: "Catalizador formado por paladio repartido en granitos finísimos sobre polvo de carbón." },
    { es: "Níquel Raney", en: "Raney nickel", def: "Catalizador de níquel muy poroso, obtenido de una aleación de níquel y aluminio." },
    { es: "Pirofórico", en: "Pyrophoric", def: "Según el CLP, sólido que aun en pequeñas cantidades puede inflamarse en cinco minutos en contacto con el aire (H250)." },
    { es: "Pulmón de hidrógeno", en: "Hydrogen buffer tank", def: "Depósito de hidrógeno que alimenta al reactor; su caída de presión dice cuánto gas ha entrado." },
    { es: "Consumo de hidrógeno", en: "Hydrogen uptake", def: "Cantidad de hidrógeno que gasta la reacción; se compara con la esperada por la estequiometría." },
    { es: "Transferencia de masa gas-líquido", en: "Gas-liquid mass transfer", def: "Paso del gas al líquido a través de la superficie de contacto; en una hidrogenación suele marcar la velocidad." },
    { es: "Ley de Henry", en: "Henry's law", def: "A más presión parcial de un gas sobre un líquido, más gas disuelto." },
    { es: "Envenenamiento del catalizador", en: "Catalyst poisoning", def: "Pérdida de actividad porque una sustancia tapa la superficie del metal; se nota en un consumo más lento o parado." },
    { es: "Filtro de pulido", en: "Polish filter", def: "Filtro fino que retiene las partículas que se escapan del filtro principal, como los finos de catalizador." },
    { es: "Exposición diaria permitida", en: "Permitted daily exposure (PDE)", def: "Según ICH Q3D, cantidad máxima aceptable de una impureza elemental que se puede tomar al día con un medicamento." },
    { es: "Detector de hidrógeno", en: "Hydrogen detector", def: "Instrumento fijo o portátil que mide hidrógeno en el aire, normalmente en % del límite inferior de explosividad." },
  ],
  quiz: [
    {
      kind: "choice",
      q: "¿En qué orden se cambian los gases del autoclave en una hidrogenación?",
      options: [
        "Hidrógeno para desplazar el aire, después nitrógeno y al final aire",
        "Nitrógeno para quitar el aire, después hidrógeno y al final nitrógeno",
        "Aire durante la carga, después hidrógeno y al final otra vez aire",
        "Nitrógeno para quitar el aire, después hidrógeno y al final aire",
      ],
      answer: 1,
      explain: "Primero nitrógeno para quitar el oxígeno, luego hidrógeno y, antes de abrir, otra vez nitrógeno para quitar el hidrógeno. Así nunca coinciden oxígeno e hidrógeno dentro del equipo.",
    },
    {
      kind: "number",
      q: "El autoclave está lleno de nitrógeno a 1 bar a. Haces 3 ciclos con hidrógeno puro, subiendo hasta 4 bar a y bajando a 1 bar a. ¿Qué porcentaje de nitrógeno queda?",
      answer: 1.56,
      tolerance: 0.02,
      unit: "% N₂",
      explain: "Factor por ciclo: 1 / 4 = 0,25. Tras tres ciclos: 100 × 0,25 × 0,25 × 0,25 = 1,56 %.",
    },
    {
      kind: "number",
      q: "La reacción se alimenta desde un pulmón de 1,5 m³ a 20 °C (293,15 K). Su presión cae 12 bar. Con R = 8,314 J/(mol·K) y la ley de los gases ideales, ¿cuántos moles de hidrógeno han entrado en el reactor?",
      answer: 739,
      tolerance: 0.01,
      unit: "mol",
      explain: "12 bar = 1200000 Pa. n = ΔP × V / (R × T) = 1200000 × 1,5 / (8,314 × 293,15) = 739 mol.",
    },
    {
      kind: "number",
      q: "Valores de ejemplo: la hoja pide 12 kg de Pd/C húmedo con un 50 % de agua y un 5 % de paladio sobre base seca. ¿Cuántos gramos de paladio cargas?",
      answer: 300,
      tolerance: 0.01,
      unit: "g",
      explain: "Peso seco: 12 × 0,5 = 6 kg. Paladio: 6 × 0,05 = 0,3 kg, es decir, 300 g.",
    },
    {
      kind: "number",
      q: "ICH Q3D da al níquel una PDE oral de 200 µg al día. Si la dosis máxima diaria del medicamento es de 4 g, ¿qué concentración máxima de níquel se permite?",
      answer: 50,
      tolerance: 0.01,
      unit: "µg/g",
      explain: "Concentración = PDE / dosis diaria = 200 / 4 = 50 µg/g.",
    },
    {
      kind: "choice",
      q: "A mitad de la hidrogenación el caudal de hidrógeno cae casi a cero y ves que el agitador está parado. ¿Qué explica la caída?",
      options: [
        "Que la reacción ha terminado y el agitador se para solo al final",
        "Que el hidrógeno ya no puede subir porque pesa más que el líquido",
        "Que el catalizador se ha disuelto en el disolvente al parar",
        "Que sin agitación casi no pasa gas al líquido ni llega al catalizador",
      ],
      answer: 3,
      explain: "El hidrógeno tiene que disolverse y llegar al catalizador; el agitador hace burbujas, renueva la superficie y mantiene el catalizador en suspensión. No se rearranca por tu cuenta: se avisa y se sigue el procedimiento.",
    },
    {
      kind: "choice",
      q: "Filtras el Pd/C gastado y la torta empieza a verse seca por arriba. Un compañero propone soplar con nitrógeno un rato más para descargarla antes. ¿Qué haces?",
      options: [
        "La mantengo cubierta de líquido y la descargo húmeda al bidón con agua",
        "Soplo con nitrógeno hasta que quede seca, porque así pesa menos",
        "Abro el filtro para que se seque al aire antes de descargarla",
        "La descargo seca en una bolsa y la llevo a la papelera de residuos",
      ],
      answer: 0,
      explain: "El catalizador gastado es metal muy dividido con hidrógeno y disolvente; seco y al aire puede arder solo. Se mantiene húmedo y se guarda en un recipiente con agua, etiquetado.",
    },
    {
      kind: "choice",
      q: "¿Dónde es más lógico colocar un detector fijo de hidrógeno en la sala del autoclave?",
      options: [
        "A ras de suelo, porque el hidrógeno se acumula en los fosos",
        "Junto a la puerta, porque es donde siempre circula más el aire",
        "En alto, sobre el equipo y bajo el techo, donde se acumula",
        "Dentro del armario eléctrico, porque allí saltan las chispas",
      ],
      answer: 2,
      explain: "Según la NTP 383, su densidad relativa respecto al aire es 0,068: sube. La guía de atmósferas explosivas del INSST pide colocar los detectores según la densidad del gas y las zonas donde se acumula.",
    },
    {
      kind: "choice",
      q: "El consumo de hidrógeno se ha parado a las 3 horas, como otras veces. ¿Qué dice ICH Q7 sobre cómo se decide el final de una hidrogenación?",
      options: [
        "Que basta con cumplir el tiempo fijado en la hoja de producción",
        "Que el final se decide con muestreo y ensayo en proceso",
        "Que el operador decide el final según el ruido del agitador",
        "Que el final se decide cuando el pulmón se queda sin presión",
      ],
      answer: 1,
      explain: "ICH Q7, 8.20, pone la hidrogenación como ejemplo en que los tiempos límite pueden no ser adecuados, porque el final se determina con muestreo y ensayo en proceso.",
    },
    {
      kind: "choice",
      q: "Suena la alarma del detector de hidrógeno de la sala del autoclave mientras estás junto al cuadro de luces. ¿Qué haces?",
      options: [
        "Apago las luces de la sala para quitar fuentes de ignición",
        "Busco la fuga con un mechero para encontrarla más deprisa",
        "Silencio la alarma y sigo trabajando hasta que vuelva a sonar",
        "No toco interruptores, salgo de la zona y aviso según el plan",
      ],
      answer: 3,
      explain: "Accionar un interruptor puede dar la chispa, y el hidrógeno prende con 0,019 mJ según la NTP 567. Se sale, se avisa y, si el procedimiento lo prevé y es seguro, se corta el hidrógeno desde lejos.",
    },
  ],
};
