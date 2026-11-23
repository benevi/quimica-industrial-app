import type { Lesson } from "./types";

export const materialesYCorrosionAFondo: Lesson = {
  slug: "materiales-y-corrosion-a-fondo",
  level: 11,
  order: 2.7,
  title: "Materiales de los equipos y corrosión a fondo: acero inoxidable, reactores vitrificados y aleaciones especiales",
  titleEn: "Materials of construction and corrosion in depth",
  minutes: 38,
  summary:
    "Por qué el material de un equipo es una cuestión de calidad del producto, qué tipos de corrosión puede ver el operador, cómo se protege el acero inoxidable, qué destruye un reactor vitrificado y qué se hace al ver una mancha, y qué cuidar en aleaciones especiales, plásticos fluorados, vidrio y juntas.",
  body: `
En «Tuberías y válvulas a fondo» viste una tabla con los materiales de planta, y en «Oxidación y reducción a fondo» que la corrosión es una reacción química. Aquí vas a ver el porqué de cada material, cómo se estropea y, sobre todo, qué puedes notar tú en el turno antes de que el problema llegue al producto.

### Por qué el material importa en una planta de API
Un equipo de planta tiene dos trabajos a la vez: aguantar (presión, temperatura, golpes, productos agresivos) y no ensuciar el producto. Las normas lo dicen así:

- **ICH Q7, apartado 5.11** (dentro de 5.1, «Diseño y construcción»): los equipos se construyen de forma que las superficies que tocan materias primas, intermedios o principios activos (API, *Active Pharmaceutical Ingredient*) no alteren su calidad más allá de las especificaciones oficiales o establecidas.
- **ICH Q7, apartado 5.14**: lo que usa el equipo para funcionar (lubricantes, fluidos de calefacción o de frío) no debe tocar el producto de forma que altere su calidad.
- Las normas europeas de fabricación (EudraLex, volumen 4, capítulo 3, punto 3.39) y las de Estados Unidos (21 CFR 211.65) usan tres palabras: la superficie no debe ser **reactiva** (*reactive*: no reacciona con el producto), **aditiva** (*additive*: no le suelta nada) ni **absorbente** (*absorptive*: no se queda con parte de él).

¿Qué puede soltar un equipo? Metal. La guía ICH Q3D, sobre impurezas elementales, pone los **equipos de fabricación** entre las fuentes de metales en el medicamento, y dice que el cromo puede llegar por desprendimiento (*leaching*) desde los equipos. También señala que los procesos para fabricar un principio activo suelen ser bastante más agresivos con los equipos que los de fabricar el comprimido final. Es decir: tu sección es la que más castiga los materiales. Los límites de metales están en «Impurezas a fondo».

Y la seguridad: la Directiva europea de equipos a presión (2014/68/UE, anexo I) pide materiales con resistencia química suficiente al fluido (punto 4.1) y, cuando haga falta, una **tolerancia de corrosión** (*corrosion allowance*): un espesor extra de pared pensado para irse gastando (punto 2.6). Un equipo corroído es un equipo que puede perder.

### Qué es la corrosión, en dos líneas
La **corrosión** (*corrosion*) es la oxidación del metal: el metal pierde electrones, pasa a ion y se va disolviendo o se convierte en óxido. Lo explica «Oxidación y reducción a fondo». Lo importante aquí: es lenta, casi siempre silenciosa y empieza por dentro, donde tú no ves.

El reglamento europeo de etiquetado (CLP, anexo I, 2.16) da una idea del ritmo que se considera peligroso: una sustancia lleva la frase H290 «Puede ser corrosivo para los metales» si en el ensayo corroe acero o aluminio a más de **6,25 mm por año** a 55 °C. Seis milímetros al año es la pared entera de muchas tuberías.

### Los tipos de corrosión que puede ver el operador
| Tipo | Qué pasa | Cómo se ve | Dónde mirar |
|---|---|---|---|
| **General o uniforme** (*uniform corrosion*) | Toda la superficie se gasta poco a poco | Óxido repartido, pared que pierde espesor | Acero al carbono: soportes, exterior de camisas, tuberías de servicios |
| **Por picaduras** (*pitting*) | La capa protectora se rompe en un punto y el metal se disuelve hacia dentro | Puntos diminutos, a veces con una mancha de óxido alrededor; el agujero puede ser profundo | Inoxidable en contacto con cloruros |
| **En rendijas** (*crevice corrosion*) | El ataque empieza en un hueco estrecho donde el líquido queda parado | Óxido o manchas en el borde de una junta o bajo un depósito | Bajo juntas, bridas, abrazaderas, restos de producto pegado |
| **Bajo tensión** (*stress corrosion cracking*) | Un metal estirado (por soldadura, apriete o presión) y un medio agresivo hacen grietas finas | Grietas como pelos, a menudo junto a soldaduras; una fuga que aparece sin aviso | Inoxidable con cloruros en caliente |
| **Galvánica** (*galvanic corrosion*) | Dos metales distintos que se tocan, mojados por un líquido, forman una pila: el menos noble se come | Corrosión justo en la unión de los dos metales | Tornillos, bridas o soportes de un metal sobre otro |

Dos lecciones de esta tabla:

- **Las peores son las que no se ven.** Una picadura o una grieta bajo tensión pueden atravesar la pared con la superficie casi intacta. La guía de la FDA (*Food and Drug Administration*, la agencia del medicamento de Estados Unidos) sobre sistemas de agua de alta pureza cuenta el caso de un intercambiador de inoxidable: se vaciaba el agua de refrigeración cuando no se usaba, la humedad que quedaba con el aire corroyó los tubos, y aparecieron **agujeros diminutos** (*pinholes*). La recomendación fue no vaciarlos.
- **Los huecos y lo parado son el enemigo.** Juntas mal asentadas, restos de producto pegados, líquido que se queda en un punto bajo. Por eso la limpieza no solo sirve para el siguiente producto: también protege el equipo («Limpieza de equipos a fondo»).

El reglamento español de equipos a presión (Real Decreto 809/2021) obliga a inspecciones periódicas. En la de nivel B, con el equipo fuera de servicio, un organismo de control revisa las zonas con más esfuerzo y más corrosión y **mide espesores**. Tú no haces esa inspección, pero ves el equipo todos los días.

### El acero inoxidable: 304 y 316L
El **acero inoxidable** (*stainless steel*) es hierro con cromo y, según el tipo, níquel (ICH Q3D lo describe como una aleación de hierro con cromo y níquel). Su truco ya lo conoces: el cromo forma con el oxígeno una **capa pasiva** (*passive layer*), una película finísima e invisible de óxido que separa el metal del líquido. Si se raya, se rehace sola con oxígeno.

Los dos tipos que verás en las placas, con la numeración del AISI (*American Iron and Steel Institute*, el instituto estadounidense del hierro y el acero):

| Tipo | Qué es | Dónde se usa |
|---|---|---|
| **304** (AISI 304) | El inoxidable «de cocina» | Estructuras, cubiertas, equipos sin contacto con productos agresivos |
| **316L** (AISI 316L) | Lleva además molibdeno, que mejora la resistencia a picaduras y rendijas con cloruros. La **L** (*low carbon*) indica poco carbono, lo que lo protege mejor en las zonas soldadas | Equipos y tuberías en contacto con producto; agua farmacéutica |

Las guías de agua de la Organización Mundial de la Salud (OMS, TRS 1033, anexo 3) y de la Agencia Europea de Medicamentos (EMA) citan el 316L como material adecuado, y la de la OMS pide materiales que no cedan sustancias, no las retengan y resistan la corrosión. En este libro no damos los porcentajes de cada elemento: los fija la norma del material, que es de pago.

**Qué destruye la capa pasiva.** Tres cosas, y juntas son mucho peores:

1. **Cloruros** (Cl⁻). Están en el ácido clorhídrico, en la sal, en las salmueras de frío y en la lejía.
2. **Calor.** Lo que en frío ataca poco, en caliente ataca mucho, sobre todo en la corrosión bajo tensión.
3. **Medio ácido.** El ácido disuelve la capa y además ataca el metal.

Por eso hay dos productos de limpieza que en un equipo de inoxidable se usan solo si el procedimiento lo dice, y con su concentración, temperatura y tiempo:

- **El hipoclorito de sodio** (lejía): oxida y lleva cloruros. Las fuentes técnicas consultadas lo dan como causa de picaduras en inoxidable si el contacto es continuo, y recomiendan aclarar bien y no usarlo caliente.
- **El ácido clorhídrico**: ácido y con cloruros a la vez. Su ficha de seguridad dice que con metales desprende hidrógeno y pide guardarlo en plástico, acero ebonitado o vidrio, no en metal.

Y una regla del día a día: **no dejar líquidos con cloruros parados** en un equipo de inoxidable más tiempo del que permite el procedimiento, ni dejar que se sequen dentro (al evaporarse, los cloruros se concentran).

**Pasivación.** **Pasivar** (*passivation*) es tratar una superficie de inoxidable limpia, normalmente con un ácido, para que la capa pasiva quede completa. La OMS recomienda considerarlo tras la instalación de un sistema de agua y tras modificaciones importantes, con un procedimiento escrito que fije la disolución, la concentración, la temperatura y el tiempo de contacto, y guardar los registros. Lo hace el personal o la empresa que diga el procedimiento, no el operador por su cuenta.

**Rouge.** En sistemas de agua purificada y de vapor limpio de inoxidable aparece a veces una película de color rojizo a pardo: es el **rouge** (en francés, «rojo»), un depósito de corrosión formado sobre todo por óxidos de hierro. La guía de la EMA sobre agua para inyectables lo nombra como ataque corrosivo del inoxidable y avisa de que limpiar a la fuerza, rascando, puede dañar la superficie y empeorarlo. Si ves una mancha rojiza en un punto de uso, en una mirilla o en un depósito de agua, se anota y se avisa. Cómo se quita (con un tratamiento químico, en inglés *derouging*, y una nueva pasivación) lo decide ingeniería con su procedimiento. Cómo se vigila un sistema de agua está en «Agua farmacéutica a fondo».

### El acero vitrificado: por qué y qué lo rompe
El **acero vitrificado** o **esmaltado** (*glass-lined steel*) es un recipiente de acero con una capa de vidrio fundida por dentro. El acero aguanta la presión; el vidrio aguanta el producto. Cómo está hecho y por qué el vidrio queda «apretado» contra el acero lo tienes en «El reactor a fondo».

**Por qué es tan común en química de API.** Muchas etapas trabajan con ácidos, cloruros y disolventes que atacarían el inoxidable. El vidrio resiste casi todos los ácidos, es liso (se limpia bien y el producto se pega poco) y no suelta metal mientras esté entero.

**Sus enemigos, uno a uno:**

| Enemigo | Por qué le hace daño | Qué haces tú |
|---|---|---|
| **Choque térmico** | Un salto brusco de temperatura entre camisa y masa (o al cargar algo frío sobre la pared caliente) puede agrietar el vidrio | Respetar la diferencia máxima que da la hoja; cambiar de vapor a frío como diga el procedimiento («Intercambio de calor y frío a fondo») |
| **Golpes** | El vidrio es frágil: una herramienta, un trozo de metal o un sólido duro que cae desde la boca de hombre lo desconcha | No meter herramientas metálicas sin protección; cargar sólidos sin dejarlos caer de golpe; no golpear tubuladuras ni la sonda |
| **Álcalis calientes** | Las bases fuertes, como la sosa, disuelven el vidrio, y más cuanto más calientes y concentradas | Limpiezas con sosa solo a la concentración y temperatura de la hoja |
| **Ácido fluorhídrico y fluoruros** | Atacan el vidrio a cualquier concentración | Nunca en un vitrificado; si un proceso los genera, lo decide ingeniería |
| **Ácido fosfórico concentrado y caliente** | Excepción a la regla de los ácidos | Lo que diga la ficha del equipo |

Fíjate en un detalle: **los límites concretos** (diferencia de temperatura, temperatura máxima, concentración de sosa) **los da el fabricante de cada equipo** y los recogen la hoja y el procedimiento. En esta lección no hay cifras porque dependen del vidrio y del equipo, y no pudimos leerlas en un documento gratuito.

**La prueba de chispa.** Para buscar poros y grietas, mantenimiento hace el **ensayo de chispa** o **de alto voltaje** (*spark test, high-voltage test*): con el reactor vacío, limpio y seco, pasa una escobilla con alta tensión por toda la superficie; donde el acero queda al descubierto, salta una chispa. Se hace con el equipo consignado y con permiso de trabajo («Permisos de trabajo, consignación y espacios confinados a fondo»), y el voltaje lo fija el fabricante.

**Qué haces si ves una mancha o un desconchado.** Por la mirilla, con la linterna o al abrir la boca de hombre puedes ver un punto oscuro, una mancha de óxido, un borde brillante o una zona sin vidrio. Esto es lo que se hace:

1. **No sigues** con el siguiente paso de la hoja, ni cargas ni calientas «para terminar».
2. **Avisas** al responsable de turno. No tocas la zona ni intentas limpiarla con un objeto duro.
3. **Anotas** qué viste, dónde, a qué hora y en qué paso del lote. Si puedes, foto según el procedimiento.

¿Por qué tan serio? Por dos riesgos a la vez:

- **Contaminar el producto.** Donde falta vidrio, el producto toca acero. Si el medio es ácido, el acero se disuelve y el metal pasa al lote.
- **Perforar el equipo.** El acero que hay debajo del vidrio no está pensado para tocar el producto. Un ácido puede ir comiéndolo hasta atravesar la pared y llegar a la camisa. Y entonces se mezclan producto y fluido de servicio.

Lo que pase después (prueba de chispa, reparación, por ejemplo con tapones de tantalio, que es lo habitual según la información de reparación consultada, o retirada del equipo) lo decide mantenimiento con el fabricante, y calidad decide qué pasa con el lote. Y si el material o la reparación cambian, pasa por control de cambios («Mantenimiento a fondo»).

### Aleaciones especiales, plásticos y vidrio
Cuando ni el inoxidable ni el vitrificado sirven, hay otros materiales. Ninguno es «el que aguanta todo»: cada uno tiene su punto débil.

| Material | Para qué se usa | Su punto débil |
|---|---|---|
| **Aleaciones de níquel-cromo-molibdeno** | Medios demasiado corrosivos para el inoxidable, por ejemplo con cloruros | Tampoco resisten todo: cada aleación tiene su tabla de resistencia del fabricante, y un cambio de material pasa por control de cambios |
| **Tantalio** (*tantalum*) | Metal muy resistente a los ácidos; piezas pequeñas, sondas y reparaciones de vitrificado | Algunas fuentes técnicas citan su fragilización con hidrógeno: lo valora ingeniería |
| **PTFE y PFA** (plásticos fluorados) | Juntas, revestimientos de tuberías, válvulas y fuelles; resisten casi todos los productos químicos | Algunos productos los atraviesan muy despacio (**permeación**, *permeation*) y un revestimiento puede despegarse o hundirse con vacío si no está diseñado para él |
| **Vidrio de borosilicato** (*borosilicate glass*) | Mirillas, columnas y tuberías de vidrio; deja ver el proceso | Frágil: choque térmico, golpes y apriete excesivo de bridas. Le atacan los mismos que al vitrificado (fluorhídrico, álcalis calientes) |

PTFE es la sigla de politetrafluoroetileno, y PFA la de perfluoroalcoxi: dos plásticos con mucho flúor. Los límites de presión, vacío y temperatura de las tuberías revestidas y del vidrio los da el fabricante («Tuberías y válvulas a fondo»).

### Juntas y elastómeros
Una **junta** (*gasket, seal*) es la pieza blanda entre dos piezas duras. Muchas son de PTFE; otras son de **elastómeros** (*elastomers*), gomas que vuelven a su forma tras aplastarlas: las juntas tóricas (*O-rings*), las membranas de las válvulas.

El elastómero es el punto más débil frente a los productos químicos. Un disolvente o un ácido que no le va puede **hincharlo, encogerlo, ablandarlo o agrietarlo**. Una junta hinchada se sale de su sitio; una encogida deja paso. Cada elastómero resiste unos productos y no otros: no hay goma universal, y la tabla de compatibilidad la da el fabricante.

Lo que dicen las guías leídas:

- La OMS pide que juntas y membranas de los sistemas de agua sean adecuadas en todas las condiciones de trabajo (también en la sanitización) y que se compruebe que se montan las correctas y bien apretadas.
- La EMA pide revisar con regularidad juntas tóricas y juntas, y cambiarlas, dentro del mantenimiento preventivo.
- La nota técnica de prevención NTP 1017 del Instituto Nacional de Seguridad y Salud en el Trabajo (INSST) pide cambiar «igual por igual»: si no queda la junta del material de la lista de repuestos, no se pone otra «parecida» («Mantenimiento a fondo»).

### Lo que vigila el operador
| Lo que ves | Qué puede ser | Qué haces |
|---|---|---|
| Mancha oscura, óxido o desconchado en el vitrificado | Vidrio dañado | Parar, avisar, anotar |
| Puntos de óxido o manchas rojizas en el inoxidable | Picaduras, rendijas, rouge | Anotar y avisar |
| Goteo en brida, junta o válvula | Junta incompatible, mal apretada o envejecida | Avisar; no apretar por tu cuenta si el procedimiento no lo prevé |
| Junta hinchada, agrietada o pegajosa al desmontar | Elastómero atacado | Anotar en la hoja de limpieza o mantenimiento |
| Condensado o fluido de camisa con color, o producto en la camisa | Posible perforación | Avisar de inmediato |
| Mirilla rayada o con fisuras | Vidrio que puede romper | Avisar; lo valora mantenimiento antes de seguir |
| El laboratorio informa de más hierro, cromo o níquel que en otros lotes | Metal que viene del equipo | Calidad investiga; tus anotaciones de la inspección son clave |

Cada observación va al registro: el libro del equipo, la orden de trabajo y, si toca un lote, la hoja de producción. Una mancha anotada a tiempo es una reparación; una mancha que nadie anotó puede ser un lote rechazado y un equipo perforado.

Los valores y ejemplos de esta lección sirven para entender. En planta manda siempre el procedimiento vigente (SOP): los materiales, los límites de temperatura, los productos de limpieza y qué hacer ante un daño son los de tu equipo y tu hoja.
`,
  plant: `
Turno de noche. Lote del intermedio ficticio LM-48 en el reactor vitrificado R-310, de 4000 L. La etapa trabaja en medio de ácido clorhídrico diluido, por eso va en vitrificado y no en inoxidable.

Antes de la carga de sólidos, la hoja pide inspeccionar el interior por la mirilla con la linterna. Junto a la tubuladura de carga ves un punto oscuro con un borde brillante, del tamaño de una lenteja. En la inspección del lote anterior no estaba anotado.

No cargas. Avisas al jefe de turno y anotas: hora, paso de la hoja, posición del punto («tubuladura de carga, lado de la boca de hombre») y que el reactor estaba vacío y frío. El jefe de turno para el lote en ese paso y llama a mantenimiento.

Al día siguiente, con el reactor limpio, seco, consignado y con permiso de trabajo, mantenimiento hace la prueba de chispa: salta chispa en ese punto. Es un desconchado, probablemente por un golpe en una carga anterior. La reparación la decide mantenimiento con el fabricante.

Calidad abre una desviación y pide al laboratorio que analice los metales en el lote anterior. Valor de ejemplo: hierro 3 ppm, en línea con los lotes anteriores. Con ese dato y tus anotaciones, calidad decide qué pasa con los dos lotes y en qué reactor sigue el LM-48.

En la reunión del turno se añade una nota a la hoja: «Al cargar sólidos, usar la manga y no dejar caer el big bag sobre la tubuladura».
`,
  batchRecord: `
En la hoja de producción (*batch record*) y en el libro del equipo verás:

- **Identificación del equipo y su material**: código (p. ej. R-310) y tipo (vitrificado, inoxidable 316L). Si la hoja dice un reactor, no se usa otro de distinto material sin control de cambios.
- **Inspección visual antes de usar**: casilla «interior sin daños visibles» con firma. Si ves algo, no marcas «correcto»: describes lo que ves y dónde.
- **Diferencia de temperatura camisa-masa** en los vitrificados, a los intervalos que pida la hoja, con el máximo escrito en ella.
- **Limpieza**: producto (sosa, hipoclorito, ácido), concentración, temperatura y tiempo realmente usados, y aclarado. Que el producto de limpieza sea compatible con el material del equipo ya lo ha comprobado quien escribió el procedimiento; tú cumples sus límites.
- **Juntas cambiadas**: material y referencia de la junta puesta, igual al de la lista de repuestos.
- **Incidencias**: manchas, óxido, desconchados, goteos, mirillas dañadas, con hora y aviso al responsable.
- **Resultados de metales**, si el producto tiene especificación de impurezas elementales: los anota el laboratorio, no producción.

Se anota lo que se ve, aunque parezca pequeño.
`,
  terms: [
    { es: "Corrosión", en: "Corrosion", def: "Oxidación del metal por el medio que lo rodea: el metal se disuelve o se convierte en óxido y pierde espesor o resistencia." },
    { es: "Corrosión por picaduras", en: "Pitting corrosion", def: "Ataque concentrado en puntos donde se rompe la capa protectora; hace agujeros pequeños y profundos. Típica del inoxidable con cloruros." },
    { es: "Corrosión en rendijas", en: "Crevice corrosion", def: "Ataque que empieza en huecos estrechos donde el líquido queda parado: bajo juntas, bridas o depósitos." },
    { es: "Corrosión bajo tensión", en: "Stress corrosion cracking", def: "Grietas finas que aparecen cuando un metal sometido a tensión está en un medio agresivo, por ejemplo inoxidable con cloruros en caliente." },
    { es: "Corrosión galvánica", en: "Galvanic corrosion", def: "Corrosión del metal menos noble cuando dos metales distintos se tocan mojados por un líquido conductor." },
    { es: "Capa pasiva", en: "Passive layer", def: "Película finísima de óxido de cromo que protege al acero inoxidable y se rehace sola con oxígeno." },
    { es: "Pasivación", en: "Passivation", def: "Tratamiento químico de una superficie de inoxidable limpia para que su capa pasiva quede completa; se hace con procedimiento escrito y se registra." },
    { es: "Rouge", en: "Rouge", def: "Película rojiza a parda, sobre todo de óxidos de hierro, que aparece en sistemas de agua y vapor limpio de acero inoxidable." },
    { es: "Acero vitrificado o esmaltado", en: "Glass-lined steel", def: "Acero con una capa de vidrio fundida por dentro: el acero aguanta la presión y el vidrio aguanta el producto." },
    { es: "Ensayo de chispa", en: "Spark test / high-voltage test", def: "Prueba con alta tensión sobre el vitrificado limpio y seco: salta chispa donde el acero queda al descubierto." },
    { es: "Tolerancia de corrosión", en: "Corrosion allowance", def: "Espesor extra de pared previsto en el diseño para que el equipo pueda perder metal por corrosión sin dejar de ser seguro." },
    { es: "Elastómero", en: "Elastomer", def: "Material tipo goma que recupera su forma tras deformarse; se usa en juntas tóricas y membranas y es sensible a los productos químicos." },
    { es: "Permeación", en: "Permeation", def: "Paso muy lento de una sustancia a través de un plástico sin que haya agujero, por ejemplo a través de un revestimiento de PTFE." },
    { es: "Impurezas elementales", en: "Elemental impurities", def: "Metales y otros elementos en el producto que no aportan nada al paciente; una de sus fuentes son los equipos de fabricación (ICH Q3D)." },
  ],
  quiz: [
    {
      kind: "choice",
      q: "¿Qué apartado de ICH Q7 pide que las superficies en contacto con materias, intermedios o API no alteren su calidad?",
      options: [
        "El apartado 5.11, en «Diseño y construcción» de los equipos",
        "El apartado 5.14, sobre lubricantes y fluidos de servicio",
        "El apartado 13.11, sobre control de cambios del equipo",
        "El apartado 5.12, sobre el rango cualificado de trabajo",
      ],
      answer: 0,
      explain: "ICH Q7 5.11 pide que las superficies que tocan materias primas, intermedios o API no alteren su calidad más allá de las especificaciones. El 5.14 trata los lubricantes y fluidos de servicio.",
    },
    {
      kind: "choice",
      q: "Al revisar por la mirilla un reactor vitrificado antes de cargar, ves un punto oscuro con borde brillante en la pared. ¿Qué haces?",
      options: [
        "Cargas con cuidado y lo anotas al terminar el lote",
        "Lo frotas con un cepillo metálico para ver si es suciedad",
        "No sigues, avisas al responsable y anotas qué y dónde lo viste",
        "Bajas la temperatura de camisa para no dañar más el vidrio",
      ],
      answer: 2,
      explain: "Puede ser un desconchado: el producto tocaría acero (contaminación con metal) y un ácido podría perforar la pared. Se para, se avisa y se anota; nunca se rasca con un objeto duro.",
    },
    {
      kind: "choice",
      q: "¿Qué combinación es la más peligrosa para la capa pasiva de un equipo de acero inoxidable 316L?",
      options: [
        "Agua purificada fría circulando de forma continua",
        "Disolución con cloruros, ácida y caliente, que queda parada",
        "Etanol a temperatura ambiente durante un aclarado corto",
        "Nitrógeno seco para inertizar el equipo antes de cargar",
      ],
      answer: 1,
      explain: "Cloruros, calor y medio ácido atacan la capa pasiva, y juntos mucho más. Si además el líquido queda parado o se seca, los cloruros se concentran y aparecen picaduras.",
    },
    {
      kind: "choice",
      q: "Un compañero propone limpiar un reactor vitrificado con sosa concentrada muy caliente para ir más rápido. ¿Qué le dices?",
      options: [
        "Que vale, porque el vidrio aguanta casi todos los productos",
        "Que vale si después se aclara con ácido caliente",
        "Que se puede hacer si se sube la agitación al máximo",
        "Que no: la sosa caliente disuelve el vidrio; manda la hoja",
      ],
      answer: 3,
      explain: "El vidrio resiste casi todos los ácidos, pero las bases fuertes calientes, el fluorhídrico y el fosfórico concentrado y caliente lo atacan. Los límites los da el fabricante y los recoge la hoja.",
    },
    {
      kind: "choice",
      q: "En un sistema de agua purificada de inoxidable ves una película rojiza en el interior de un punto de uso. ¿Qué es lo más probable y qué haces?",
      options: [
        "Es rouge, un depósito de óxidos de hierro: lo anotas y avisas",
        "Es cal del agua: la rascas con una espátula y sigues",
        "Es restos de producto: lo limpias con lejía caliente",
        "Es normal en el 316L y no hace falta anotarlo",
      ],
      answer: 0,
      explain: "El rouge es corrosión del inoxidable. La EMA avisa de que rascarlo puede dañar la superficie y empeorarlo; lo trata ingeniería con su procedimiento, y tú lo anotas y avisas.",
    },
    {
      kind: "choice",
      q: "Al cambiar la junta tórica de una válvula, la del material de la lista no está y hay otra del mismo tamaño de otro elastómero. ¿Qué procede?",
      options: [
        "Ponerla, porque para sellar solo importa el tamaño",
        "Ponerla y vigilar si gotea en el primer lote",
        "No ponerla: se cambia igual por igual",
        "Ponerla doble para que aguante mejor",
      ],
      answer: 2,
      explain: "Un elastómero no compatible puede hincharse, encogerse o agrietarse. La NTP 1017 pide sustituir igual por igual; cambiar el material es un cambio.",
    },
    {
      kind: "number",
      q: "Según el CLP, una sustancia es corrosiva para los metales si corroe acero a más de 6,25 mm por año. A ese ritmo exacto, ¿cuántos milímetros de pared se perderían en 73 días (año de 365 días)?",
      answer: 1.25,
      tolerance: 0.02,
      unit: "mm",
      explain: "73 días son 73 / 365 = 0,2 años. Pérdida = 6,25 × 0,2 = 1,25 mm.",
    },
    {
      kind: "number",
      q: "La pared de un depósito de acero medía 12,0 mm al instalarlo y en la inspección, 4 años después, mide 11,4 mm (valores de ejemplo). ¿Cuál ha sido la velocidad media de corrosión, en mm por año?",
      answer: 0.15,
      tolerance: 0.02,
      unit: "mm/año",
      explain: "Pérdida = 12,0 − 11,4 = 0,6 mm. Velocidad = 0,6 / 4 = 0,15 mm/año.",
    },
    {
      kind: "number",
      q: "Un equipo tiene una tolerancia de corrosión de 3 mm y pierde 0,15 mm por año (valores de ejemplo). Si el ritmo no cambia, ¿en cuántos años se gastaría la tolerancia entera?",
      answer: 20,
      tolerance: 0.02,
      unit: "años",
      explain: "Años = 3 / 0,15 = 20 años. Por eso se miden espesores en las inspecciones: si el ritmo sube, ese plazo se acorta.",
    },
    {
      kind: "number",
      q: "El laboratorio encuentra 10 ppm de hierro en un lote de 250 kg (valores de ejemplo; 1 ppm = 1 mg por kg). ¿Cuántos gramos de hierro hay en todo el lote?",
      answer: 2.5,
      tolerance: 0.02,
      unit: "g",
      explain: "10 mg/kg × 250 kg = 2500 mg = 2,5 g de hierro.",
    },
  ],
};
