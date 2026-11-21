import type { Lesson } from "./types";

export const gruposFuncionalesAFondo: Lesson = {
  slug: "grupos-funcionales-a-fondo",
  level: 3,
  order: 4,
  title: "Grupos funcionales a fondo: cómo se comporta cada familia de compuestos en planta",
  titleEn: "Functional groups in depth: how each family of compounds behaves in the plant",
  minutes: 38,
  summary:
    "Familia por familia (hidrocarburos, halogenados, alcoholes, éteres, aldehídos y cetonas, ácidos, ésteres, aminas, amidas, nitrilos y grupos energéticos, haluros de ácido y anhídridos): cómo se reconocen en la fórmula y en el nombre, qué se nota en planta, con qué reaccionan, qué peligros tienen y cómo todo eso explica qué no se guarda junto.",
  body: `
En «Grupos funcionales» viste la tabla de las piezas que deciden cómo se porta una molécula. Aquí recorres las familias una a una para que, al leer un nombre en la hoja, sepas qué esperar.

### Cómo leer cada ficha
Cada familia lleva cinco apartados: **cómo se reconoce** (el grupo en la fórmula y la terminación del nombre), **qué notas en planta**, **con qué reacciona** según las notas técnicas de prevención (NTP) del Instituto Nacional de Seguridad y Salud en el Trabajo (INSST), **peligros** con las frases H de la tabla de clasificación armonizada del Reglamento CLP en su texto original de 2008 (se ha actualizado después: manda la ficha de datos de seguridad, FDS, de tu proveedor) y **ejemplos**. R es «el resto de la molécula».

Tres ideas que ya tienes:

- **Polaridad.** Un O–H o un N–H acercan la molécula al agua; las cadenas de C–H la alejan. Está en «Enlaces y fuerzas entre moléculas a fondo».
- **Ácido o base.** El ácido da un protón y la base lo acepta («Ácidos, bases y pH a fondo»).
- **Inflamable, en números.** El CLP llama líquido inflamable de categoría 1 (H224, «Líquido y vapores extremadamente inflamables») al de punto de inflamación por debajo de 23 °C que empieza a hervir a 35 °C o menos; de categoría 2 (H225, «Líquido y vapores muy inflamables»), al de punto de inflamación por debajo de 23 °C que hierve por encima de 35 °C; y de categoría 3 (H226, «Líquidos y vapores inflamables»), al de punto de inflamación entre 23 y 60 °C.

### 1. Hidrocarburos: alifáticos y aromáticos
**Cómo se reconocen.** Solo carbono e hidrógeno. Los **alcanos** (*alkanes*) terminan en **-ano** (heptano); los **alquenos** (*alkenes*), con un doble enlace, en **-eno**; los **aromáticos** (*aromatics*) llevan un anillo de benceno (tolueno).

**En planta.** Son **apolares**: no se mezclan con el agua y flotan (el tolueno pesa 0,87 kg/L). Cuanto más larga la cadena, más alto hierven: heptano 98 °C, tolueno 111 °C. Conducen mal la electricidad: la FDS del tolueno de la app avisa de que se carga de estática al bombearlo.

**Reaccionan** casi con nada, y por eso son buenos disolventes. El anillo aromático es especialmente estable por la **resonancia** (*resonance*) de sus dobles enlaces; un doble enlace suelto es más frágil (NTP 478), y monómeros como el estireno pueden **polimerizar** de golpe y romper el envase (NTP 479). Incompatibles, según la NTP 479: flúor, cloro, bromo, ácido crómico y peróxido sódico.

**Peligros.** Arden (heptano, hexano y tolueno son H225). Heptano y tolueno llevan **H304**, «Puede ser mortal en caso de ingestión y penetración en las vías respiratorias»: si alguien lo traga, no se provoca el vómito. El benceno lleva H350 (puede provocar cáncer) y es de clase 1 en la guía ICH Q3C de disolventes residuales.

### 2. Derivados halogenados
**Cómo se reconocen.** Cloro, bromo, flúor o yodo unidos al carbono; el nombre lleva **cloro-, bromo-, fluoro-**: diclorometano (CH₂Cl₂) y triclorometano o cloroformo (CHCl₃).

**En planta.** **Pesan**: el diclorometano tiene 1,33 kg/L, así que con agua la fase orgánica **queda abajo**, al revés que con tolueno. No se mezcla con el agua y hierve a 40 °C: se evapora deprisa de una torta o un charco.

**Reaccionan.** La unión carbono-halógeno es más fuerte cuanto más pequeño el halógeno: C–F, luego C–Cl, C–Br y C–I (NTP 478). La NTP 479 pone los **hidrocarburos clorados** entre lo que no se junta con **metales alcalinos y alcalinotérreos**, como el sodio.

**Peligros.** En la tabla de 2008 ni el diclorometano ni el cloroformo llevan frase de líquido inflamable. Pero existe **EUH018** («Al usarlo, pueden formarse mezclas aire-vapor explosivas o inflamables») para sustancias no clasificadas como inflamables, y el CLP cita como caso los hidrocarburos halogenados. Lo que sí son es **tóxicos**: el diclorometano lleva H351, «Se sospecha que provoca cáncer»; el cloroformo, H351, H302 («Nocivo en caso de ingestión»), H373 (daños en órganos por exposición repetida) y H315. En ICH Q3C, clase 2: 600 ppm y 60 ppm. Sus residuos van al contenedor de halogenados («Almacenamiento, emergencias y residuos a fondo»).

### 3. Alcoholes
**Cómo se reconocen.** Un **–OH** sobre un carbono; terminación **-ol**: metanol, etanol, propan-2-ol (isopropanol).

**En planta.** Los puentes de hidrógeno del O–H los hacen miscibles con el agua. Al crecer la cadena hierven más alto (metanol 65 °C, etanol 78 °C, isopropanol 82 °C) y se mezclan peor con ella.

**Reaccionan** con los metales alcalinos desprendiendo hidrógeno (FDS del metanol de la app); con los oxidantes (la NTP 479 los pone en las listas del peróxido de hidrógeno, el ácido crómico y el permanganato), que los llevan a aldehído y a ácido como viste en «Oxidación y reducción a fondo»; y con los ácidos, para formar ésteres.

**Peligros.** Los tres son H225: puntos de inflamación de unos 11, 13 y 12 °C, por debajo de 23 °C, y hierven por encima de 35 °C. El metanol es además tóxico por las tres vías (H301, H311, H331) y H370; el isopropanol, H319 («Provoca irritación ocular grave») y H336 («Puede provocar somnolencia o vértigo»). En ICH Q3C, metanol clase 2 (3000 ppm); etanol e isopropanol, clase 3.

### 4. Éteres
**Cómo se reconocen.** Un oxígeno entre dos carbonos, **R–O–R**, sin hidrógeno en el oxígeno. El nombre lleva **éter** (éter dietílico, terc-butil metil éter o MTBE); el THF (tetrahidrofurano) es un éter en anillo.

**En planta.** Muy volátiles. El éter dietílico es H224: por definición del CLP, empieza a hervir a 35 °C o menos. El THF hierve a 66 °C y se mezcla con el agua.

**Reaccionan** con poco: sin O–H no dan protones, y por eso sirven de disolvente para reactivos muy básicos, como los de Grignard («Tipos de reacción habituales en API»). Su punto débil es el oxígeno del aire: forman **peróxidos** al guardarse; la frase EUH019 y el ensayo con yoduro están en «Oxidación y reducción a fondo». La NTP 479 añade que el estabilizante puede haberse perdido si el disolvente se ha destilado o extraído, y que un recipiente cerrado mucho tiempo sin usarse se abre con precaución.

**Peligros.** THF: H225, H319, H335 («Puede irritar las vías respiratorias») y EUH019. Éter dietílico: H224, H302, H336, EUH019 y EUH066. MTBE: H225 y H315, sin EUH019 en la tabla de 2008. En ICH Q3C, THF clase 2 (720 ppm); MTBE y éter dietílico, clase 3.

### 5. Aldehídos y cetonas
**Cómo se reconocen.** Los dos tienen un **grupo carbonilo** (*carbonyl group*), C=O. En el **aldehído** (*aldehyde*) está en la punta, con un hidrógeno: –CHO, terminación **-al** (metanal o formaldehído). En la **cetona** (*ketone*) está entre dos carbonos: terminación **-ona** (propanona o acetona).

**En planta.** La acetona se mezcla con el agua y hierve a 56 °C. Como arrastra el agua y se evapora enseguida, sirve para aclarar un equipo y ayudar a secarlo; si tu limpieza la usa lo dice el procedimiento validado («Limpieza de equipos y validación de limpieza»).

**Reaccionan.** Los aldehídos se oxidan con facilidad a ácido. La NTP 479 hace la acetona incompatible con el **ácido nítrico concentrado y sus mezclas con sulfúrico**, y con el permanganato.

**Peligros.** Acetona: H225 (punto de inflamación de unos −20 °C), H319, H336 y **EUH066**, «La exposición repetida puede provocar sequedad o formación de grietas en la piel»; clase 3 en ICH Q3C. El formaldehído, solo como mención, lleva en 2008 H351, H331, H311, H301, H314 y H317.

### 6. Ácidos carboxílicos
**Cómo se reconocen.** El **grupo carboxilo** (*carboxyl group*), **–COOH**; nombre **ácido ...-oico** (ácido etanoico, el acético).

**En planta.** El acético es el ácido del vinagre y huele a él. Es un **ácido débil** (pKa 4,76, «Ácidos, bases y pH a fondo»).

**Reacciona** con las bases dando sal y agua (CH₃COOH + NaOH da CH₃COONa + H₂O) y con el bicarbonato soltando CO₂. Como sal pasa a la fase acuosa, al revés que las aminas. Incompatible, según la NTP 479, con ácido crómico, ácido nítrico, ácido perclórico, compuestos hidroxilo, etilenglicol, peróxidos y permanganatos.

**Peligros.** H226 y H314 («Provoca quemaduras graves en la piel y lesiones oculares graves»), de la categoría más grave (1A) al 90 % o más. Clase 3 en ICH Q3C.

### 7. Ésteres
**Cómo se reconocen.** **R–COO–R'**, un ácido y un alcohol unidos perdiendo agua; nombre **-ato de ...-ilo**. El acetato de etilo (CH₃COOCH₂CH₃) sale del ácido acético y el etanol.

**En planta.** Olor afrutado. El acetato de etilo hierve a 77 °C, se mezcla poco con el agua y flota: disolvente clásico de extracción.

**Reaccionan: la hidrólisis.** El agua rompe el éster en su ácido y su alcohol. Con un ácido como catalizador es un equilibrio y se queda a medias («Equilibrio químico»). Con una base fuerte llega al final, porque el ácido queda atrapado como sal: es la **saponificación** (*saponification*), la reacción de hacer jabón.

> CH₃COOCH₂CH₃ + NaOH da CH₃COONa + CH₃CH₂OH

Un mol de sosa por mol de éster. Comprobación: 4 C, 9 H, 3 O y 1 Na a cada lado.

**Cuenta.** Masas redondeadas (C 12, H 1, O 16, Na 23): acetato de etilo 88 g/mol, NaOH 40, acetato de sodio 82, etanol 46. Para 440 kg de acetato de etilo (valor de ejemplo): 440 / 88 = **5 kmol**, que piden 5 × 40 = **200 kg** de NaOH (400 kg de sosa al 50 %) y dan 5 × 82 = **410 kg** de acetato de sodio y 5 × 46 = **230 kg** de etanol. Balance: entran 640 kg y salen 640 kg.

**La lección práctica.** Si lavas con sosa una fase de acetato de etilo, el disolvente también se come la sosa, y más cuanto más caliente y más rato. La hoja fija reactivo, temperatura y tiempo del lavado.

**Peligros.** H225 (punto de inflamación de unos −4 °C), H319, H336 y EUH066; clase 3 en ICH Q3C. La NTP 479 lo pone entre los incompatibles del peróxido de hidrógeno.

### 8. Aminas
**Cómo se reconocen.** Un **nitrógeno** con uno, dos o tres grupos de carbono, primo del amoníaco; terminación **-amina**: trietilamina, (CH₃CH₂)₃N; anilina, con el nitrógeno sobre un anillo de benceno.

**En planta.** Olor fuerte, a pescado: ningún producto se huele a propósito, pero si lo notas, algo se escapa. Son **bases**.

**Reaccionan** con los ácidos formando sales y desprendiendo calor; con HCl, un **clorhidrato** (*hydrochloride*). La trietilamina atrapa el HCl de una reacción y sale como clorhidrato sólido, como en el ejemplo de «Grupos funcionales»; el paso de base libre a sal entre fases está en «Ácidos, bases y pH a fondo». La NTP 479 hace incompatibles la anilina con el ácido nítrico y el peróxido de hidrógeno, y los **nitritos** con las aminas.

**Peligros.** Trietilamina: H225, H332 («Nocivo en caso de inhalación»), H312 («Nocivo en contacto con la piel»), H302 y H314 de categoría 1A; clase 3 en ICH Q3C. La anilina es más seria: H331, H311, H301, H351, H341 («Se sospecha que provoca defectos genéticos»), H372, H318, H317 y H400.

### 9. Amidas
**Cómo se reconocen.** Un carbonilo unido a un nitrógeno, **–CO–N**; terminación **-amida**: N,N-dimetilformamida (DMF).

**En planta.** El DMF es un disolvente polar muy usado en reacciones. El **enlace amida** es muy estable: el agua sola no lo rompe, hace falta ácido o base fuerte y calor. Por eso aparece en tantos principios activos.

**El ejemplo de bolsillo: el paracetamol**, C₈H₉NO₂, 151 g/mol («El mol a fondo»). Es la N-(4-hidroxifenil)acetamida: un anillo de benceno con un –OH unido al anillo (un **fenol**, *phenol*) y, al otro lado, una amida. Una ruta clásica de libro de texto lo forma acetilando el 4-aminofenol con anhídrido acético (apartado 11).

**Peligros.** DMF: **H360D**, «Puede dañar al feto», más H332, H312 y H319; clase 2 en ICH Q3C (880 ppm). La NTP 479 incluye las N-alquilamidas entre las sustancias fácilmente peroxidables; en la tabla de 2008 el DMF no lleva EUH019: lo que valga para el tuyo, lo dice su FDS.

### 10. Nitrilos y grupos energéticos
**Nitrilos.** Grupo **–C≡N**, terminación **-nitrilo**. El acetonitrilo (CH₃CN): H225, H332, H312, H302 y H319; clase 2 en ICH Q3C (410 ppm).

**Grupos que hacen inestable una molécula.** La NTP 478 dice que examinar los grupos de una fórmula «puede dar una idea bastante aproximada de su reactividad» y lista grupos de carácter inestable. Entre ellos: **nitro** y polinitro (nombre con nitro-), **nitroso**, **azida** (azido-), **diazo** y sales de **diazonio**, **peróxidos** y perácidos, epóxidos y acetilénicos. Algunos llevan su propio oxígeno y pueden descomponerse **sin aire** (NTP 478, balance de oxígeno). Los golpes y el roce pueden iniciar la reacción, y los cristales suelen ser más sensibles que la disolución (NTP 478). La NTP 479 añade que ciertas sales de diazonio se descomponen al almacenarse y que las azidas no se juntan con ácidos; el CLP pone la azida sódica como ejemplo de EUH032, «En contacto con ácidos libera gases muy tóxicos». Y lo que se vende humedecido para quitarle su carácter explosivo lleva EUH001, «Explosivo en estado seco».

Si la hoja nombra uno de estos grupos, temperatura, secado y forma de rascar el sólido no se improvisan («Calor de reacción a fondo»).

### 11. Haluros de ácido y anhídridos
**Cómo se reconocen.** En el **haluro de ácido** (*acyl halide*) el –OH del ácido se ha cambiado por un cloro: **R–COCl**, **cloruro de ...-ilo** (cloruro de acetilo, CH₃COCl). En el **anhídrido** (*anhydride*) dos ácidos se han unido perdiendo agua: (CH₃CO)₂O, **anhídrido acético**.

**En planta.** No toleran el agua, ni la del aire: la NTP 1229 recuerda que estas reacciones pueden darse con la humedad ambiental y con la del cuerpo.

**Reaccionan.** Están hechos para reaccionar: con alcoholes dan ésteres; con aminas, amidas. Por eso también con el agua, desprendiendo calor y ácido. La NTP 479 pone anhídridos y halogenuros de ácido entre los compuestos que reaccionan fuertemente con el agua, y la NTP 237 da la reacción del cloruro de acetilo:

> CH₃COCl + H₂O da HCl + CH₃COOH
>
> (CH₃CO)₂O + H₂O da 2 CH₃COOH

**Cuenta.** Cloruro de acetilo, 78,5 g/mol (Cl 35,5). Si 157 kg (valor de ejemplo) se encuentran con agua: 157 / 78,5 = **2 kmol**, que dan 2 kmol de HCl (73 kg de un gas corrosivo) y 2 kmol de ácido acético (120 kg). Balance: 157 + 36 kg de agua = 73 + 120 = 193 kg.

**Peligros.** El CLP pone el cloruro de acetilo como ejemplo de **EUH014**, «Reacciona violentamente con el agua»; su entrada lleva H225, H314 y EUH014. El anhídrido acético, H226, H332, H302 y H314, y la NTP 479 lo hace incompatible con peróxido de hidrógeno y ácido perclórico. El cloruro de tionilo, con el que se fabrican cloruros de ácido, lleva EUH014 y EUH029 («En contacto con agua libera gases tóxicos»), y con poca agua suelta además dióxido de azufre (NTP 237). En planta: equipo seco e inertizado, adición lenta en frío, venteo hacia el lavador de gases y el agua final, despacio («Inertización a fondo», «El reactor a fondo»).

### Tabla resumen
| Familia | Grupo | Nombre | Ejemplo | Comportamiento clave |
|---|---|---|---|---|
| Hidrocarburos | Solo C y H | -ano; anillo bencénico | Heptano, tolueno | Apolares, flotan, arden, estática |
| Halogenados | C–Cl | cloro- | Diclorometano | Densos, volátiles, tóxicos |
| Alcoholes | –OH | -ol | Metanol | Miscibles, arden, se oxidan |
| Éteres | R–O–R | éter | THF, MTBE | Volátiles; peróxidos |
| Aldehídos | –CHO | -al | Formaldehído | Se oxidan a ácido |
| Cetonas | R–CO–R | -ona | Acetona | Volátil, miscible, aclarado |
| Ácidos | –COOH | ácido ...-oico | Ácido acético | Débiles; con bases, sales |
| Ésteres | R–COO–R' | -ato de ...-ilo | Acetato de etilo | Afrutados; la sosa los saponifica |
| Aminas | –N con R | -amina | Trietilamina | Básicas; con ácidos, clorhidratos |
| Amidas | –CO–N | -amida | DMF, paracetamol | Enlace muy estable |
| Nitrilos | –C≡N | -nitrilo | Acetonitrilo | Polar, inflamable, nocivo |
| Energéticos | nitro, azida, diazo, peróxido | nitro-, azido- | Nitrometano | Pueden descomponerse o explotar |
| Haluros de ácido y anhídridos | –COCl, (RCO)₂O | cloruro de ...-ilo | Cloruro de acetilo | Con agua: calor y ácido |

### De la familia a la estantería
La NTP 479 dice que las sustancias incompatibles se almacenan separadas, y la NTP 725 (2006) pide agrupar los productos por su riesgo respetando esas restricciones; su tabla general aparta los explosivos de todo y los comburentes de los inflamables. Es de 2006, anterior al Real Decreto 656/2017, cuyas reglas están en «Almacenamiento, emergencias y residuos a fondo». El porqué, familia a familia:

| No se guardan juntos | Por qué | Fuente |
|---|---|---|
| Ácidos y bases (acético o clorhídrico junto a sosa o aminas) | La neutralización desprende calor; entre fuertes, reacción violenta | NTP 479, tabla 3 |
| Oxidantes y orgánicos (alcoholes, acetona, ésteres, hidrocarburos) | El oxidante mete el comburente en la mezcla | NTP 479, tablas 3 y 4 |
| Haluros de ácido, anhídridos o metales alcalinos y agua | Calor, gases ácidos o hidrógeno | NTP 479, tabla 1; NTP 237 |
| Metales alcalinos e hidrocarburos clorados | Reacción violenta | NTP 479, tabla 4 |
| Azidas o cianuros y ácidos | Gases muy tóxicos | NTP 479; CLP, EUH032 |
| Nitritos y aminas | Incompatibles | NTP 479, tabla 4 |

La NTP 237 añade que lo que reacciona con el agua se aparta de los inflamables, porque un incendio se suele apagar con agua. Pero el cloruro de acetilo es las dos cosas; en un caso así decide la sección 7 de su FDS y tu procedimiento.

Nunca huelas un producto para identificarlo ni cambies un disolvente por otro «de la misma familia». Los números de esta lección son para entender y estimar. En planta manda siempre el procedimiento vigente (SOP).
`,
  plant: `
Turno de mañana en el reactor R-308. La etapa 4 del intermedio ficticio GF-21 acaba de terminar: el GF-21, un alcohol, se ha acetilado con cloruro de acetilo en diclorometano, con trietilamina para atrapar el HCl. En la mirilla ves la masa turbia: es el clorhidrato de trietilamina, sólido.

La hoja dice: *«Añadir 300 L de agua a T ≤ 20 °C en 40 min. Agitar 15 min. Decantar y separar la fase orgánica inferior al R-310.»*

Antes de abrir la válvula de agua piensas en familias. Puede quedar algo de cloruro de acetilo sin reaccionar: con el agua dará ácido clorhídrico y acético y calor. Por eso la adición es lenta, con la camisa en frío y el venteo abierto hacia el lavador de gases. La temperatura sube de 12 °C a 17 °C. El clorhidrato se disuelve en el agua y la turbidez desaparece.

Al decantar, recuerdas que el diclorometano pesa más que el agua: el producto está abajo. Separas mirando la interfase y etiquetas la fase acuosa, que irá a aguas con halogenados según la hoja.

En el R-310, el siguiente paso es un cambio de disolvente a acetato de etilo y un lavado con bicarbonato. Tu compañera propone acelerar usando sosa 4 M «que lava mejor». Le recuerdas que la sosa saponifica el acetato de etilo y que el bicarbonato es lo que fija la hoja; si alguien quiere cambiarlo, eso es un control de cambios, no una decisión de turno.
`,
  batchRecord: `
En la hoja de producción (*batch record*) de etapas con estos reactivos verás y anotarás:

- **Identidad de cada material**: nombre, código interno, lote y cantidad real. Si el nombre de la etiqueta y el de la hoja no coinciden (acetona y propanona), se comprueba por código y número CAS.
- **Avisos de familia**: «Reactivo sensible a la humedad: equipo seco e inertizado», «Disolvente con control de peróxidos: fecha de apertura», «Fase orgánica inferior».
- **Comprobaciones previas**: equipo seco (por ejemplo, agua en el aclarado anterior por debajo del límite), oxígeno tras la inertización, venteo alineado al lavador de gases.
- **Adiciones**: hora de inicio y fin, caudal, temperatura máxima frente al límite (T ≤ 20 °C en el apagado con agua).
- **Lavados**: reactivo y concentración (bicarbonato, no sosa, si así lo fija la hoja), temperatura, tiempo de agitación y pH de la fase acuosa.
- **Separación de fases**: qué fase va a qué equipo y cuál a residuo, con su etiqueta; los halogenados, en su contenedor.
- **Incidencias**: un aumento de temperatura mayor del esperado, humos, un olor que no debería haber o un bidón junto a otro incompatible se anotan y se avisa al responsable.
`,
  terms: [
    { es: "Grupo funcional", en: "Functional group", def: "Conjunto de átomos de una molécula que decide cómo se comporta y con qué reacciona." },
    { es: "Hidrocarburo aromático", en: "Aromatic hydrocarbon", def: "Hidrocarburo con un anillo de benceno, especialmente estable, como el tolueno." },
    { es: "Derivado halogenado", en: "Halogenated compound", def: "Compuesto con cloro, bromo, flúor o yodo unido al carbono, como el diclorometano." },
    { es: "Grupo carbonilo", en: "Carbonyl group", def: "Un carbono unido a un oxígeno por un doble enlace, C=O; está en aldehídos, cetonas, ácidos, ésteres y amidas." },
    { es: "Grupo carboxilo", en: "Carboxyl group", def: "El grupo –COOH de los ácidos carboxílicos, como el ácido acético." },
    { es: "Saponificación", en: "Saponification", def: "Hidrólisis de un éster con una base fuerte; da la sal del ácido y el alcohol, y llega hasta el final." },
    { es: "Clorhidrato", en: "Hydrochloride", def: "Sal que forma una amina al aceptar el protón del ácido clorhídrico." },
    { es: "Enlace amida", en: "Amide bond", def: "Unión –CO–N, muy estable, presente en muchos principios activos y en las proteínas." },
    { es: "Haluro de ácido", en: "Acyl halide", def: "Derivado de un ácido con un cloro en lugar del –OH, como el cloruro de acetilo; reacciona violentamente con el agua." },
    { es: "Anhídrido", en: "Anhydride", def: "Dos moléculas de ácido unidas perdiendo agua, como el anhídrido acético; con agua vuelve a dar el ácido." },
    { es: "Peróxido", en: "Peroxide", def: "Compuesto con un enlace oxígeno-oxígeno, débil; los éteres pueden formarlos al guardarse y pueden explotar." },
    { es: "Grupo energético", en: "Energetic group", def: "Grupo, como nitro, azida, diazo o peróxido, que hace inestable una molécula y puede hacerla explosiva." },
    { es: "Incompatibilidad", en: "Incompatibility", def: "Pareja de productos que al juntarse reaccionan de forma peligrosa; obliga a almacenarlos separados." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Saponificación ajustada: CH₃COOCH₂CH₃ + NaOH da CH₃COONa + CH₃CH₂OH. Si reaccionan del todo 264 kg de acetato de etilo (88 g/mol), ¿cuántos kg de acetato de sodio (82 g/mol) se forman?",
      answer: 246,
      tolerance: 0.01,
      unit: "kg",
      explain: "264 / 88 = 3 kmol de éster. La reacción es mol a mol: 3 kmol de acetato de sodio × 82 = 246 kg.",
    },
    {
      kind: "number",
      q: "¿Cuántos kg de NaOH pura hacen falta para saponificar por completo 176 kg de acetato de etilo? (Un mol de NaOH por mol de éster; acetato de etilo 88 g/mol, NaOH 40 g/mol.)",
      answer: 80,
      tolerance: 0.01,
      unit: "kg",
      explain: "176 / 88 = 2 kmol de éster, que necesitan 2 kmol de NaOH: 2 × 40 = 80 kg.",
    },
    {
      kind: "number",
      q: "Caen 235,5 kg de cloruro de acetilo (78,5 g/mol) sobre agua: CH₃COCl + H₂O da HCl + CH₃COOH. ¿Cuántos kmol de HCl se forman?",
      answer: 3,
      tolerance: 0.01,
      unit: "kmol",
      explain: "235,5 / 78,5 = 3 kmol de cloruro de acetilo, y cada mol da un mol de HCl: 3 kmol de HCl, más 3 kmol de ácido acético y calor.",
    },
    {
      kind: "choice",
      q: "Extraes el producto con diclorometano y agua. Al parar el agitador ves dos capas. ¿Dónde está la fase orgánica?",
      options: [
        "Abajo, porque el diclorometano es más denso que el agua",
        "Arriba, porque los disolventes orgánicos siempre flotan",
        "Mezclada con el agua, porque el diclorometano es miscible",
        "Depende solo de la temperatura de la camisa del reactor",
      ],
      answer: 0,
      explain: "El diclorometano pesa 1,33 kg/L y el agua 1,00 kg/L: la fase orgánica queda abajo, al revés que con tolueno o acetato de etilo.",
    },
    {
      kind: "choice",
      q: "La hoja pide lavar con bicarbonato una disolución del producto en acetato de etilo. Un compañero quiere usar sosa 4 M porque lava mejor. ¿Qué le dices?",
      options: [
        "Que sí, porque la sosa y el bicarbonato son bases y da igual cuál",
        "Que no: la sosa saponifica el acetato de etilo y cambiarlo es un control de cambios",
        "Que sí, siempre que la sosa se añada en caliente para acabar antes",
        "Que no, porque la sosa reacciona con el agua y desprende hidrógeno",
      ],
      answer: 1,
      explain: "Los ésteres se hidrolizan con bases fuertes: la sosa consume el disolvente y forma acetato de sodio y etanol. El reactivo del lavado lo fija la hoja.",
    },
    {
      kind: "choice",
      q: "Vas a cargar cloruro de acetilo. ¿Qué compruebas antes de empezar?",
      options: [
        "Que el reactor tiene agua de la limpieza para templar la adición",
        "Que la camisa está caliente para que reaccione más deprisa",
        "Que el equipo está seco e inertizado y el venteo va al lavador",
        "Que la boca de hombre está abierta para ver bien la carga",
      ],
      answer: 2,
      explain: "El cloruro de acetilo lleva EUH014: reacciona violentamente con el agua y suelta HCl. Equipo seco, nitrógeno, frío y venteo hacia el lavador de gases.",
    },
    {
      kind: "choice",
      q: "Encuentras en el almacén un bidón de THF abierto hace mucho tiempo, sin fecha de apertura. ¿Qué haces?",
      options: [
        "Lo usas en la siguiente carga para que no caduque más",
        "Lo destilas para quitarle el agua y el estabilizante",
        "Lo agitas fuerte para mezclar bien el estabilizante",
        "No lo usas ni lo fuerzas, lo apartas y avisas según el procedimiento",
      ],
      answer: 3,
      explain: "Los éteres forman peróxidos al guardarse (EUH019 en el THF). La NTP 479 pide precaución al abrir recipientes largo tiempo cerrados; la decisión es del responsable.",
    },
    {
      kind: "choice",
      q: "¿Qué pareja de productos no debe compartir cubeto en el almacén?",
      options: [
        "Heptano y tolueno, porque los dos son hidrocarburos",
        "Trietilamina y ácido clorhídrico, porque ácido y base reaccionan con calor",
        "Etanol e isopropanol, porque los dos son alcoholes miscibles",
        "Acetona y acetato de etilo, porque los dos son disolventes de clase 3",
      ],
      answer: 1,
      explain: "Una amina es una base: con un ácido forma una sal y desprende calor. Ácidos y bases van separados; los demás pares son de la misma familia o compatibles.",
    },
    {
      kind: "choice",
      q: "La hoja de una etapa nueva nombra un intermedio «azido» que hay que secar. ¿Qué te dice ese nombre?",
      options: [
        "Que es un disolvente y se puede secar a la temperatura que convenga",
        "Que es una sal sin riesgo, como el cloruro de sodio",
        "Que lleva un grupo energético: secado, temperatura y manejo no se improvisan",
        "Que es un ácido débil y basta con neutralizarlo con bicarbonato",
      ],
      answer: 2,
      explain: "La NTP 478 pone los compuestos azido entre los grupos de carácter inestable, y la NTP 479 los hace incompatibles con ácidos. Se sigue la hoja al pie de la letra.",
    },
    {
      kind: "choice",
      q: "¿Por qué el metanol, el etanol y el isopropanol son H225 y no H224?",
      options: [
        "Porque su punto de inflamación es menor de 23 °C pero hierven por encima de 35 °C",
        "Porque son tóxicos y la toxicidad baja la categoría de inflamable",
        "Porque se mezclan con agua y el agua los vuelve menos inflamables",
        "Porque su punto de inflamación es mayor de 60 °C y apenas arden",
      ],
      answer: 0,
      explain: "Según el CLP, la categoría 1 (H224) exige además hervir a 35 °C o menos. Estos alcoholes hierven a 65, 78 y 82 °C: categoría 2, H225.",
    },
  ],
};
