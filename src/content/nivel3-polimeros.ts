import type { Lesson } from "./types";

export const polimerosAFondo: Lesson = {
  slug: "polimeros-a-fondo",
  level: 3,
  order: 4.7,
  title: "Polímeros a fondo: plásticos, gomas y juntas de planta",
  titleEn: "Polymers in depth: plastics, rubbers and plant seals",
  minutes: 38,
  summary:
    "Qué es un monómero y un polímero, cómo se forman por adición y por condensación (con las cuentas), por qué unos plásticos se funden y otros no y qué hace elástica a una goma, qué son el PE, el PP, el PVC, el PTFE, el PVDF, el EPDM y los fluoroelastómeros que ves en juntas, bolsas, guantes y tuberías, qué puede soltar un plástico al producto (extraíbles y lixiviables), qué pasa cuando se calientan o se queman, y cómo se gestionan sus residuos.",
  body: `
En planta hay plástico por todas partes: la bolsa que toca el principio activo, el guante, la junta, el revestimiento de una tubería. Las juntas son el punto débil de los equipos frente a los productos químicos («Materiales de los equipos y corrosión a fondo: acero inoxidable, reactores vitrificados y aleaciones especiales», nivel 11), y un disolvente puede atravesar un guante («Los equipos de protección individual a fondo: elegir, ponerse, usar y quitarse», nivel 15). Aquí vas a entender **qué son** por dentro. Es el apartado «Polímeros» de Química de 2.º de Bachillerato (Real Decreto 243/2022): formación a partir de monómeros, clasificación, propiedades y riesgos medioambientales. Productos, equipos y lo marcado como «valor de ejemplo» son inventados.

### Qué es un polímero: un collar de cuentas
Imagina un collar hecho con miles de cuentas iguales enhebradas. Cada cuenta es una molécula pequeña; el collar entero es una molécula gigante.

- **Monómero** (*monomer*): la cuenta. El reglamento europeo REACH (registro, evaluación, autorización y restricción de sustancias químicas; Reglamento 1907/2006, artículo 3.6) lo define como la sustancia capaz de formar enlaces covalentes con una secuencia de otras moléculas en las condiciones de la reacción de polimerización.
- **Polímero** (*polymer*): el collar. Para REACH (artículo 3.5), una sustancia de moléculas en las que se repiten **unidades monoméricas** (*monomer units*): el monómero ya enganchado.
- **Polimerización** (*polymerisation*): la reacción que enhebra las cuentas.

Las moléculas de un polímero no miden todas lo mismo (REACH habla de una **distribución de pesos moleculares**): de un polímero se da una masa molar media. El número de cuentas de un collar es el **grado de polimerización** (*degree of polymerisation*).

**Ejercicio resuelto 1.** Una cadena de polietileno tiene una masa molar media de 280 000 g/mol (valor de ejemplo). El monómero es el etileno, C₂H₄, de 28,05 g/mol según el NIST (el instituto de normas y tecnología de Estados Unidos).
1. La unidad pesa lo mismo que el monómero: en esta reacción no se pierde ningún átomo.
2. Grado de polimerización = 280 000 / 28,05 = 9981: unas diez mil unidades en una sola molécula.

### Dos maneras de enhebrar: adición y condensación
**Polimerización por adición** (*addition polymerisation*). El monómero tiene un doble enlace C=C; la nota técnica de prevención NTP 302 del Instituto Nacional de Seguridad y Salud en el Trabajo (INSST) dice que los dobles enlaces pueden generar polimerizaciones por adición. Cada doble enlace se abre, como un eslabón, y las moléculas se enganchan una tras otra **sin soltar nada**.

> n CH₂=CH₂ da –(CH₂–CH₂)ₙ–

La n es el grado de polimerización. Sin subproducto, **la masa del polímero es la de los monómeros enganchados**: 1000 kg de etileno dan, como máximo, 1000 kg de polietileno.

Algo tiene que arrancar la cadena. La ficha internacional de seguridad química (ICSC, de la Organización Internacional del Trabajo, OIT, y la Organización Mundial de la Salud, OMS) del estireno dice que puede polimerizar por calentamiento suave y por la luz, los oxidantes, el oxígeno y los peróxidos. Ese es el peligro en planta: la NTP 479 avisa de que algunos monómeros (acetato de vinilo, acrilonitrilo, 1,3-butadieno, estireno…) pueden polimerizar rápidamente y provocar una explosión o la rotura del envase, y pide guardarlos en pequeñas cantidades y con **inhibidores de polimerización** (*polymerisation inhibitors*). La reacción fuera de control está en «Reacciones en la fabricación de API a fondo: tipos, etapas y seguridad de reacción».

Los monómeros de los plásticos de esta lección, con sus datos de la ICSC y del NIST:

| Monómero | Fórmula | Masa molar (g/mol) | Polímero | Sigla |
|---|---|---|---|---|
| Etileno | CH₂=CH₂ | 28,05 | Polietileno | PE |
| Propileno | CH₂=CH–CH₃ | 42,08 | Polipropileno | PP |
| Cloruro de vinilo | CH₂=CHCl | 62,50 | Policloruro de vinilo | PVC |
| Tetrafluoroetileno | CF₂=CF₂ | 100,02 | Politetrafluoroetileno | PTFE |
| Fluoruro de vinilideno | CH₂=CF₂ | 64,04 | Polifluoruro de vinilideno | PVDF |

Una vez enhebrado, el monómero ya no está: el cloruro de vinilo puede provocar cáncer según su ICSC, pero el PVC es otra sustancia. Lo que se vigila es el **monómero residual** (*residual monomer*), el que quede sin reaccionar.

**Polimerización por condensación** (*condensation polymerisation*). En «Cómo reaccionan las moléculas orgánicas a fondo» viste la condensación: dos moléculas se unen soltando una pequeña, casi siempre agua. Si cada monómero tiene **dos** grupos reactivos, uno en cada extremo, sale una cadena. Dos ejemplos de la Enciclopedia de Salud y Seguridad en el Trabajo de la OIT (capítulo 89, edición española del INSST):

- **Poliamida 6,6** (el nailon): de **hexametilendiamina** y **ácido adípico**. Se llama 6,6 porque los dos monómeros tienen seis átomos de carbono. Cada unión es una amida.
- **Poliéster** (como el PET, tereftalato de polietileno): de **etilenglicol** y **ácido tereftálico**. Cada unión es un éster.

**Ejercicio resuelto 2.** ¿Cuánta agua sale al hacer poliamida 6,6? Masas del NIST: hexametilendiamina C₆H₁₆N₂, 116,20 g/mol; ácido adípico C₆H₁₀O₄, 146,14 g/mol; agua, 18,02 g/mol.
1. En una cadena larga, cada pareja de monómeros forma **dos** enlaces amida (uno por cada lado), así que suelta dos moléculas de agua.
2. Unidad repetida: C₆H₁₆N₂ + C₆H₁₀O₄ − 2 H₂O = C₁₂H₂₂N₂O₂ (H: 16 + 10 − 4 = 22; O: 4 − 2 = 2).
3. Masas: 116,20 + 146,14 = 262,35 g; menos 2 × 18,02 = 36,03 g de agua; queda 226,32 g de polímero.
4. Agua = 36,03 / 262,35 = 13,7 %: de 1000 kg de monómeros salen unos 863 kg de polímero y 137 kg de agua.

### Termoplásticos, termoestables y elastómeros
La OIT (capítulo 77) divide los plásticos por cómo se portan con el calor; las gomas forman un tercer grupo.

- **Termoplásticos** (*thermoplastics*): se pueden ablandar una y otra vez con calor. Son cadenas sueltas, como espaguetis cocidos: al calentar resbalan unas sobre otras. Los más fabricados, según la OIT: polietileno y polipropileno (las **poliolefinas**), PVC y poliestireno. En planta: bolsas, bidones, big bags.
- **Termoestables** (*thermosets*): sufren un cambio químico al calentarlos y moldearlos, y ya no se pueden volver a transformar con calor. Las cadenas quedan atadas por puentes en una red, como un huevo cocido que ya no vuelve a ser líquido. Ejemplos de la OIT: resinas de fenol-formaldehído, epoxi, poliésteres insaturados y poliuretanos.
- **Elastómeros** (*elastomers*): gomas que, al estirarlas o aplastarlas, vuelven a su forma. Sus cadenas están unidas por puentes aquí y allá: entre puente y puente se pueden estirar, pero los puentes las devuelven a su sitio, como una red de pesca que se deforma sin deshacerse. En planta: juntas tóricas, membranas de válvula, guantes.

Esos puentes se ponen al **vulcanizar** (*vulcanisation*). Según BASEQUIM, del INSST, el caucho mezclado con agentes como el azufre o los peróxidos, a 100–250 °C y con presión, se vuelve elástico por **entrecruzamiento** (*cross-linking*) de sus cadenas.

**Un plástico nunca es solo polímero.** La OIT cuenta unas veinte clases de **aditivos** (*additives*): plastificantes, antioxidantes, estabilizantes frente al calor y la luz, lubricantes, cargas, colorantes. La Ley 7/2022 de residuos define **plástico** como el material compuesto por un polímero al que pueden haberse añadido aditivos u otras sustancias. Guarda la idea: entre lo que la Agencia Europea de Medicamentos (EMA) vigila que pase del plástico al producto están precisamente esas moléculas pequeñas (lo verás más abajo).

### Los plásticos de la planta
| Material | Dónde lo ves | Lo que conviene saber (y de qué fuente) |
|---|---|---|
| **PE** (polietileno), de alta y baja densidad | Bolsa interior del principio activo (API), bidones | Es el envase primario que toca el producto («Envasado y etiquetado a fondo: el último paso antes de que el lote salga») |
| **PP** (polipropileno) | Big bags, tuberías de agua | La EMA lo cita, con el PVDF, como termoplástico adecuado para agua farmacéutica. Muy aislante: big bags en «Manejo de sólidos a fondo: pesar, cargar, trasvasar y contener polvos» |
| **PVC** (policloruro de vinilo) | Guantes | Al sobrecalentarse desprende cloruro de hidrógeno (OIT, capítulo 77) |
| **PTFE** (politetrafluoroetileno) | Juntas, revestimientos de tuberías y válvulas | Resiste casi todos los productos, pero algunos lo atraviesan (permeación) y sobrecalentado da humos peligrosos |
| **PFA** (perfluoroalcoxi) | Revestimientos | Según el reglamento estadounidense 21 CFR 177.1550, es un copolímero de tetrafluoroetileno y perfluoropropilviniléter |
| **PVDF** (polifluoruro de vinilideno) | Tuberías de agua | La OMS pide unirlo por fusión; la FDA (la agencia del medicamento de Estados Unidos) avisa de que en caliente se comba y de que al principio suelta fluoruro |

En los envases verás a veces un número en un triángulo o unas siglas: es el sistema voluntario de identificación de la Decisión 97/129/CE, que indica la naturaleza del material: 1 PET, 2 HDPE (polietileno de alta densidad), 3 PVC, 4 LDPE (polietileno de baja densidad), 5 PP y 6 PS (poliestireno). No hemos comprobado si una norma posterior la ha sustituido.

**Ejercicio resuelto 3. Por qué al quemar PTFE o PVC salen gases ácidos.** Masas atómicas: C 12,01; F 19,00; Cl 35,45; H 1,008.
1. PTFE, unidad C₂F₄ (100,02 g/mol): flúor = 4 × 19,00 / 100,02 = **76 %** de la masa.
2. PVC, unidad C₂H₃Cl (62,50 g/mol): cloro = 35,45 / 62,50 = **56,7 %**.
3. Ese flúor y ese cloro tienen que ir a alguna parte: la ICSC del tetrafluoroetileno dice que al calentarlo intensamente da gases tóxicos y corrosivos, entre ellos fluoruro de hidrógeno, y el PVC sobrecalentado da cloruro de hidrógeno.

### Gomas y juntas: EPDM, nitrilo, fluoroelastómeros
Cada goma resiste unas cosas y otras no. Así lo resume la tabla 80.1 de la Enciclopedia de la OIT:

| Elastómero | Resiste | No resiste |
|---|---|---|
| Caucho natural | Uso general | Aceite; se hincha con los disolventes; oxígeno, ozono y luz ultravioleta |
| Nitrilo (NBR) | Aceite, disolventes, aceite vegetal | Se hincha con disolventes polares como las cetonas |
| Etileno-propileno (EPDM) | Intemperie, calor, bajas temperaturas | Aceite y disolventes |

Los **fluoroelastómeros** no están en esa tabla. El reglamento estadounidense de materiales en contacto con alimentos (21 CFR 177.2600) los describe como copolímeros de fluoruro de vinilideno y hexafluoropropileno, vulcanizados. En catálogos los verás como **FKM** (esta sigla y la de EPDM vienen de normas de pago; solo las hemos visto en fuentes técnicas del buscador). Qué aguanta cada calidad de FKM o de EPDM lo da la tabla de su fabricante, que no hemos podido leer en un documento gratuito.

**Por qué falla una junta.** Una goma es una red de cadenas. Un líquido compatible con ellas puede meterse en la red y hincharla: la OIT lo dice del caucho natural con los disolventes y del nitrilo con las cetonas. Y sus aditivos pueden salir hacia el líquido, como advierte la EMA para los plásticos. Sus efectos en la junta y el equipo están en «Materiales de los equipos y corrosión a fondo».

**Ejercicio resuelto 4. Medir el hinchamiento.** Al cambiar una junta tórica tras una campaña con acetona, mantenimiento la pesa: 14,26 g. Una nueva del mismo lote pesa 12,40 g (valores de ejemplo).
1. Ganancia = 14,26 − 12,40 = 1,86 g.
2. Hinchamiento en masa = 1,86 / 12,40 × 100 = **15,0 %**.
3. Ha absorbido disolvente y ya no sella como debe. Si era de nitrilo, encaja con lo que dice la OIT de las cetonas.

ICH Q7, la guía de buenas prácticas de fabricación de principios activos, dice en su apartado 6.17 que puede ser adecuado fijar especificaciones para materiales que puedan afectar de forma crítica a la calidad, y cita las **juntas** (*gaskets*). Y se cambia igual por igual («Mantenimiento a fondo: entregar un equipo, recibirlo y dejarlo listo para fabricar»).

### Guantes: un polímero entre el producto y tu piel
Según la NTP 1136, los guantes de protección química son normalmente de **elastómeros** (látex, PVC, nitrilo, neopreno, polietileno, butilo, alcohol polivinílico o PVA, y un fluoroelastómero que cita por su marca). Ahora entiendes la **permeación**: la NTP la describe como absorción en la cara externa, **difusión** a través del material y salida por la cara interna. Las moléculas de disolvente se cuelan entre las cadenas del polímero, sin agujero, como la tinta que empapa un papel. La OIT da dos ejemplos (capítulo 31): el PVA es buena barrera frente a casi todos los disolventes orgánicos pero se degrada con el agua, y el látex resiste el agua pero se disuelve fácilmente en tolueno y hexano. Niveles y marcado, en «Los equipos de protección individual a fondo».

### Lo que un plástico puede soltar al producto: extraíbles y lixiviables
ICH Q7 pide que las superficies que tocan el producto no alteren su calidad (5.11) y que los envases no sean reactivos, aditivos ni absorbentes (9.21). Con un plástico, «aditivo» significa que le pase al producto algo de lo que lleva dentro.

La guía de la EMA sobre materiales plásticos de envase primario (CPMP/QWP/4359/03, de 2005) vale también para envases de **principios activos**. Distingue:

- **Extraíbles** (*extractables*): lo que sale en un **estudio de extracción**, con un disolvente en condiciones extremas. Lo que *podría* salir.
- **Lixiviables** (*leachables*): lo que pasa de verdad al contenido en las condiciones de uso; ese paso es la **migración** (*migration*). Lo que *sale*.

Entre lo que puede migrar cita antioxidantes, plastificantes, catalizadores e iniciadores. Lo que pide:

| Caso | Qué pide la guía de la EMA |
|---|---|
| Cualquier plástico en contacto con un principio activo | Nombre químico del material y de sus monómeros, y especificación (con la monografía de la Farmacopea Europea si existe) |
| Principio activo sólido | Riesgo de interacción bajo: en general no hace falta estudio de interacción |
| Principio activo no sólido | Según el caso, composición completa y estudios de extracción, de migración y de toxicidad |

Para ti: la bolsa de tu API está **aprobada** con su especificación. Cambiarla por otra «igual» de otro proveedor es un cambio de envase primario, y pasa por control de cambios.

La guía de la EMA remite, cuando corresponde, a la legislación de alimentos. El Reglamento (UE) 10/2011, en su texto original, fija un **límite de migración global** (*overall migration limit*): 10 mg de componentes por decímetro cuadrado de superficie de contacto.

**Ejercicio resuelto 5. El cubo del reglamento.** Un cubo de 1 dm de lado contiene 1 L, es decir, 1 kg de alimento con densidad de agua.
1. Superficie: 6 caras de 1 dm × 1 dm = 6 dm².
2. Migración máxima: 6 × 10 = **60 mg**, en 1 kg: 60 mg/kg, la cifra que da el reglamento.
3. Una bolsa con 40 dm² en contacto con 25 kg de producto (valores de ejemplo) que cediera justo 10 mg/dm²: 400 mg en 25 kg = **16 mg/kg** (16 ppm). Cuanto más pequeño el envase, más superficie por kilo, como avisa el reglamento.

Ojo: ese reglamento es para alimentos. Para un principio activo manda su especificación; el ejercicio solo da el orden de magnitud.

### Plásticos que arden, se cargan y se descomponen
Avisos de la OIT (capítulo 77) que valen para tu planta:

- **Arden.** Los plásticos son combustibles, y en polvo fino pueden formar nubes explosivas.
- **Se cargan.** Son buenos aislantes eléctricos, así que acumulan electricidad estática que puede ser fuente de ignición («Atmósferas explosivas a fondo: por qué arde un disolvente y cómo se evita»).
- **Se descomponen con calor**, a temperaturas no muy superiores a las de su procesado. Según la tabla 77.10: el PTFE da hidrocarburos fluorados como el tetrafluoroetileno; el PVC, cloruro de hidrógeno y plastificantes; el polietileno, hidrocarburos y aldehídos.
- **Fiebre del humo de polímeros** (*polymer fume fever*): la OIT cuenta casos tras sobrecalentar PTFE. Una pieza de PTFE no se corta ni se calienta sin el procedimiento y el permiso de mantenimiento.

**El caso de la manguera de fosgeno.** En 2010, en una planta química de Estados Unidos, reventó una manguera de fosgeno y murió un trabajador. Según la Junta de Seguridad Química de Estados Unidos (CSB, *Chemical Safety Board*), tenía alma de PTFE y malla de acero inoxidable 304. El fosgeno atravesó el PTFE por **permeación**, se transformó en ácido clorhídrico y corroyó la malla, sobre todo bajo una etiqueta pegada con cinta adhesiva. El procedimiento pedía cambiarlas cada 30 días; al menos tres veces entre 2006 y 2010 siguieron en servicio de 4 a 7 meses.

### Residuos y medio ambiente
Lo general está en «Almacenamiento, emergencias y residuos a fondo: del bidón que llega al residuo que sale». Lo propio de los plásticos:

- **Limpio o contaminado.** En la Lista Europea de Residuos, un envase de plástico limpio es el 15 01 02; con restos de una sustancia peligrosa, el 15 01 10*, peligroso. Los guantes y trajes contaminados son «ropas protectoras contaminadas por sustancias peligrosas», 15 02 02*.
- **Quemar no es inofensivo.** La OIT pide que la incineración de residuos plásticos se haga en condiciones controladas, y que el PTFE y los uretanos se quemen donde los gases se evacuen a un lugar seguro.

### Lo que vigila el operador
| Lo que ves | Qué puede ser | Qué haces |
|---|---|---|
| Junta hinchada, blanda o pegajosa al desmontar | Absorbió disolvente | Anotar, guardarla si lo pide el procedimiento, avisar |
| Junta dura o agrietada | Envejecida o atacada (la OIT cita el ozono y la luz para el caucho natural) | Anotar y cambiarla igual por igual |
| Bolsa interior o envase de otro proveedor o sin lote | Material no aprobado | No usarlo; avisar |
| Revestimiento de PTFE abombado o con fisuras | Daño del revestimiento | Avisar; no seguir hasta que lo valore mantenimiento |
| Guante pegajoso, hinchado o endurecido | El producto ataca el polímero | Quitárselo, lavarse, avisar |

Los valores y ejemplos de esta lección sirven para entender. En planta manda siempre el procedimiento vigente (SOP): los materiales de juntas, envases y guantes, y qué hacer cuando fallan, son los que fijan tu especificación y tu hoja.
`,
  plant: `
Campaña del intermedio ficticio QZ-62. El lote anterior se hizo en tolueno; este, en acetona. La hoja pide trasvasar la acetona desde el depósito D-118 al reactor R-207 con la manguera flexible MF-07.

Al conectar la manguera, ves que la junta tórica del racor sobresale un poco de su alojamiento y está blanda al tacto. En la etiqueta del racor pone «junta NBR». La lista de repuestos del R-207 dice que, para la campaña en acetona, las juntas de esa conexión son de otro material, con su referencia.

No conectas. Avisas al jefe de turno y anotas: hora, paso de la hoja, código de la manguera, material de la etiqueta y lo que viste. El jefe de turno para el trasvase.

Mantenimiento desmonta la junta y la pesa: 14,26 g frente a 12,40 g de una nueva (valores de ejemplo). Un 15 % más: ha absorbido disolvente en la limpieza con acetona de la semana anterior. Según la tabla de la OIT, el nitrilo resiste aceites y disolventes, pero se hincha con disolventes polares como las cetonas.

Se cambia la junta por la de la lista, con su referencia y su lote, y se anota en la orden de trabajo y en la hoja. Calidad abre una desviación: la manguera MF-07 había quedado con la junta de la campaña anterior. La acción que se acuerda es añadir a la hoja de cambio de campaña una casilla «juntas de mangueras según lista de la campaña», con firma.
`,
  batchRecord: `
En la hoja de producción (*batch record*) y en los registros de mantenimiento verás:

- **Materiales de envase primario**: bolsas interiores con su referencia, lote y estado «aprobado». Si la bolsa que te llega no coincide con la de la hoja, no se usa.
- **Juntas cambiadas**: material, referencia y lote de la junta puesta, igual a la lista de repuestos; en un cambio de campaña, comprobación de que las juntas son las de la nueva campaña.
- **Inspección visual**: juntas, mangueras, revestimientos de PTFE, telas y sacos filtrantes, sin hinchamientos, grietas ni deformaciones.
- **Guantes y EPI**: el modelo que fija la instrucción de la etapa, con tu firma de «EPI revisado».
- **Monómeros o productos que polimerizan**, si los hubiera: estabilizante, fecha y temperatura de almacenamiento.
- **Incidencias**: junta hinchada, humo al cortar plástico, bolsa rota, con hora y aviso al responsable.
- **Residuos**: envases y guantes contaminados a su contenedor con su código; envases limpios separados por material.
`,
  terms: [
    { es: "Monómero", en: "Monomer", def: "Molécula pequeña capaz de unirse por enlaces covalentes a otras para formar un polímero (REACH, artículo 3.6)." },
    { es: "Polímero", en: "Polymer", def: "Sustancia formada por moléculas muy grandes en las que se repiten muchas unidades monoméricas; sus moléculas no miden todas lo mismo." },
    { es: "Grado de polimerización", en: "Degree of polymerisation", def: "Número de unidades monoméricas de una cadena; se calcula dividiendo la masa molar del polímero entre la de la unidad." },
    { es: "Polimerización por adición", en: "Addition polymerisation", def: "Unión de monómeros con doble enlace C=C, uno tras otro, sin soltar ningún subproducto. Así se forman PE, PP, PVC, PTFE y PVDF." },
    { es: "Polimerización por condensación", en: "Condensation polymerisation", def: "Unión de monómeros con dos grupos reactivos que suelta una molécula pequeña, casi siempre agua, en cada enlace. Así se forman poliamidas y poliésteres." },
    { es: "Inhibidor de polimerización", en: "Polymerisation inhibitor", def: "Sustancia que se añade a un monómero para evitar que polimerice solo durante el almacenamiento." },
    { es: "Termoplástico", en: "Thermoplastic", def: "Plástico de cadenas sueltas que se ablanda con el calor y se puede volver a moldear." },
    { es: "Termoestable", en: "Thermoset", def: "Plástico cuyas cadenas quedan unidas en una red al curarlo; ya no se funde, y a alta temperatura se descompone." },
    { es: "Elastómero", en: "Elastomer", def: "Polímero con pocos puentes entre cadenas que recupera su forma al deformarlo; se usa en juntas, membranas y guantes." },
    { es: "Vulcanización", en: "Vulcanisation", def: "Proceso con calor, presión y agentes como el azufre o los peróxidos que une las cadenas de un caucho (entrecruzamiento) y lo hace elástico y duradero." },
    { es: "Aditivo", en: "Additive", def: "Sustancia que se añade al polímero para darle una propiedad: plastificantes, antioxidantes, estabilizantes, cargas, colorantes." },
    { es: "Extraíbles", en: "Extractables", def: "Sustancias que salen de un plástico en un ensayo de extracción en condiciones extremas: lo que podría salir." },
    { es: "Lixiviables", en: "Leachables", def: "Sustancias que pasan de verdad del envase al producto en las condiciones de uso (migración)." },
    { es: "Fiebre del humo de polímeros", en: "Polymer fume fever", def: "Cuadro que sufren las personas que respiran los humos de PTFE sobrecalentado." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Una cadena de polietileno tiene una masa molar media de 280000 g/mol. La unidad monomérica, la del etileno, pesa 28 g/mol. ¿Cuál es su grado de polimerización?",
      answer: 10000,
      tolerance: 0.02,
      unit: "unidades",
      explain: "En la adición no se pierde ningún átomo, así que la unidad pesa lo mismo que el etileno: 280000 / 28 = 10000 unidades.",
    },
    {
      kind: "choice",
      q: "Un reactor transforma 500 kg de etileno en polietileno sin que salga ningún otro producto. ¿Qué tipo de polimerización es?",
      options: [
        "Condensación, porque se unen dos monómeros distintos",
        "Adición: se abre el doble enlace y no se suelta nada",
        "Vulcanización, porque las cadenas quedan entrecruzadas",
        "Condensación, porque se forma agua en cada enlace",
      ],
      answer: 1,
      explain: "El etileno tiene un doble enlace C=C; en la adición los monómeros se enganchan sin soltar subproducto, y la masa del polímero es la de los monómeros enganchados.",
    },
    {
      kind: "number",
      q: "Para hacer poliamida 6,6 reaccionan 1 kmol de hexametilendiamina y 1 kmol de ácido adípico. Cada pareja suelta 2 moléculas de agua (18 kg/kmol). ¿Cuántos kilos de agua se forman?",
      answer: 36,
      tolerance: 0.02,
      unit: "kg",
      explain: "Se forman 2 kmol de agua: 2 × 18 = 36 kg. Es una condensación: el polímero pesa menos que los monómeros cargados.",
    },
    {
      kind: "choice",
      q: "Al calentar una pieza vieja de resina epoxi curada no se ablanda; a más temperatura empieza a humear. ¿Por qué?",
      options: [
        "Porque es un termoplástico con mucho plastificante",
        "Porque le falta vulcanizar para que se funda bien",
        "Porque es un elastómero y solo se estira en frío",
        "Porque es un termoestable: sus cadenas forman una red",
      ],
      answer: 3,
      explain: "Las resinas epoxi son termoestables: al curarlas sus cadenas quedan unidas en una red, ya no se funden y, si se sigue calentando, se descomponen.",
    },
    {
      kind: "number",
      q: "La unidad del PTFE es C₂F₄, de 100 g/mol, y la masa atómica del flúor es 19 g/mol. ¿Qué porcentaje de la masa del PTFE es flúor?",
      answer: 76,
      tolerance: 0.02,
      unit: "%",
      explain: "4 × 19 = 76 g de flúor en 100 g: un 76 %. Por eso al descomponerse con calor da gases fluorados y fluoruro de hidrógeno.",
    },
    {
      kind: "choice",
      q: "En un cambio de campaña de tolueno a acetona, encuentras hinchada la junta de nitrilo (NBR) de una manguera. ¿Qué explica la tabla de la OIT y qué haces?",
      options: [
        "El nitrilo se hincha con cetonas como la acetona: avisas, anotas y se cambia según la lista",
        "El nitrilo no resiste el tolueno: la secas al aire y la vuelves a montar en la manguera",
        "Es normal en todas las gomas: aprietas más el racor para que no gotee el trasvase",
        "La acetona endurece el nitrilo: la dejas puesta porque así sella mucho mejor",
      ],
      answer: 0,
      explain: "La OIT dice que el NBR resiste aceite y disolventes pero se hincha con disolventes polares como las cetonas. Una junta hinchada no sella; se cambia igual por igual con la de la lista.",
    },
    {
      kind: "number",
      q: "Una junta tórica nueva pesa 12,40 g y la usada, tras una campaña con disolvente, 14,26 g. ¿Cuál es su hinchamiento en masa, en porcentaje?",
      answer: 15,
      tolerance: 0.02,
      unit: "%",
      explain: "Ganancia = 14,26 − 12,40 = 1,86 g. Hinchamiento = 1,86 / 12,40 × 100 = 15 %.",
    },
    {
      kind: "choice",
      q: "Compras ofrece una bolsa interior de polietileno de otro proveedor, más barata y «exactamente igual», para envasar el API. ¿Qué procede?",
      options: [
        "Usarla, porque el polietileno es siempre el mismo material",
        "Usarla solo en los bidones que van a clientes de confianza",
        "No usarla sin control de cambios: es otro envase primario",
        "Usarla si al tacto tiene el mismo grosor que la aprobada",
      ],
      answer: 2,
      explain: "La bolsa toca el API: está aprobada con su especificación. Otro proveedor puede usar otros aditivos que migren; la guía de la EMA pide identificar material y monómeros y cumplir la especificación.",
    },
    {
      kind: "number",
      q: "El Reglamento (UE) 10/2011 limita la migración global a 10 mg por dm². ¿Cuántos mg podría ceder como máximo un cubo de 1 dm de lado, por sus 6 caras, al kilo de alimento que contiene?",
      answer: 60,
      tolerance: 0.02,
      unit: "mg",
      explain: "Superficie = 6 caras × 1 dm² = 6 dm². Migración máxima = 6 × 10 = 60 mg, es decir, 60 mg por kg.",
    },
    {
      kind: "choice",
      q: "Mantenimiento quiere cortar con soplete un tramo de tubería revestida de PTFE para cambiarlo rápido. ¿Qué riesgo propio del polímero hay?",
      options: [
        "Ninguno: el PTFE no arde ni se descompone nunca",
        "Que el PTFE se vuelva conductor y dé una descarga",
        "Que el PTFE polimerice otra vez y tape la tubería",
        "Humos de PTFE sobrecalentado: fiebre del humo de polímeros",
      ],
      answer: 3,
      explain: "La OIT recoge casos de fiebre del humo de polímeros tras sobrecalentar PTFE, que además da gases fluorados. Se trabaja con el procedimiento y el permiso de mantenimiento.",
    },
  ],
};
