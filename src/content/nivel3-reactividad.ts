import type { Lesson } from "./types";

export const reactividadOrganicaAFondo: Lesson = {
  slug: "reactividad-organica-a-fondo",
  level: 3,
  order: 4.5,
  title: "Cómo reaccionan las moléculas orgánicas a fondo",
  titleEn: "Organic reactivity in depth: how organic molecules react",
  minutes: 40,
  summary:
    "Nucleófilos y electrófilos, el grupo saliente y el carbocatión; sustitución nucleófila SN2 y SN1, eliminación y por qué gana al subir la temperatura, adición a dobles enlaces con la regla de Markovnikov, sustitución electrófila aromática, condensación (ésteres, amidas y el caso real de un sulfonato de etilo formado en un tanque mal secado), hidrólisis, y oxidación y reducción orgánicas; con ejercicios resueltos de completar productos y la impureza que explica cada tipo.",
  body: `
En «Grupos funcionales a fondo: cómo se comporta cada familia de compuestos en planta» viste **con qué** reacciona cada familia, y en «Reacciones en la fabricación de API a fondo: tipos, etapas y seguridad de reacción», **qué riesgo** trae cada tipo de reacción. Aquí das un paso más: **cómo** reaccionan las moléculas por dentro, es decir, el **mecanismo de reacción** (*reaction mechanism*). Es el bloque «Reactividad orgánica» de Química de 2.º de Bachillerato (Real Decreto 243/2022) y el resultado de aprendizaje «Analiza funciones orgánicas, describiendo el tipo de reacción que tiene lugar» del módulo 0066 del título de Laboratorio de Análisis y Control de Calidad.

¿Para qué le sirve a un operador? Porque cada impureza tiene una reacción detrás. Si sabes qué reacción compite con la tuya, entiendes por qué la hoja fija una temperatura máxima, un tiempo de espera o un equipo seco. Los mecanismos son química de libro de texto; productos, equipos y lo marcado como «valor de ejemplo» son inventados.

### Nucleófilos y electrófilos: los dos protagonistas
Casi toda la química orgánica es un electrón buscando dónde ir. En «Electrones, orbitales y tabla periódica a fondo» viste la **electronegatividad**: el cloro, el bromo, el oxígeno y el nitrógeno atraen los electrones del enlace más que el carbono. Por eso, en un enlace C–Cl, el carbono se queda un poco positivo (se escribe δ+, «delta más») y el cloro un poco negativo (δ−).

- **Nucleófilo** (*nucleophile*): «amigo del núcleo». Una especie **rica en electrones**, con un par de electrones libres o carga negativa, que busca un carbono positivo. Ejemplos: el ion hidróxido (OH⁻), el agua, el amoniaco, las aminas, los alcoholes, el ion bromuro (Br⁻).
- **Electrófilo** (*electrophile*): «amigo de los electrones». Una especie **pobre en electrones** que los acepta. Ejemplos: el carbono δ+ unido a un halógeno, el carbono de un grupo carbonilo (C=O), el protón (H⁺), el ion nitronio (NO₂⁺).

Piensa en un imán: el polo negativo del nucleófilo busca el polo positivo del electrófilo. En los libros, ese movimiento se dibuja con una **flecha curva** que sale del par de electrones del nucleófilo y llega al átomo que lo recibe.

Dos piezas más que verás en toda la lección:

- **Grupo saliente** (*leaving group*): el trozo que se va llevándose el par de electrones de su enlace, como el Br⁻ o el Cl⁻.
- **Carbocatión** (*carbocation*): un carbono que se ha quedado con solo tres enlaces y carga positiva. Es muy inestable y dura un instante. Cuantos más grupos de carbono lleva alrededor, más estable es: **terciario** (unido a tres carbonos) más que **secundario** (dos) más que **primario** (uno).

**El ADN también es un nucleófilo.** El addendum de la guía ICH M7 describe el acetaldehído como «un electrófilo fuerte, capaz de reaccionar con nucleófilos fuertes, por ejemplo las bases del ADN», y dice que el sulfato de dimetilo forma bases del ADN **alquiladas**. Un **agente alquilante** (*alkylating agent*) es un electrófilo que pega un grupo de carbono a un nucleófilo; si ese nucleófilo es el ADN, hay daño genético. Por eso ICH M7 vigila tanto a los reactivos electrófilos, como verás en «Impurezas a fondo: de dónde vienen, cuánto se permite y cómo las evita el operador».

### Los tipos de reacción, contados con piezas
| Tipo | Qué pasa | Cuentas de moléculas |
|---|---|---|
| **Sustitución** (*substitution*) | Un grupo entra y otro sale | 2 dan 2 |
| **Adición** (*addition*) | Dos moléculas se unen y desaparece un doble enlace | 2 dan 1 |
| **Eliminación** (*elimination*) | Una molécula pierde dos trozos y aparece un doble enlace | 1 da 2 (o más) |
| **Condensación** (*condensation*) | Dos moléculas se unen soltando una pequeña (agua, HCl) | 2 dan 2, con una pequeña |
| **Oxidación y reducción** | Gana oxígeno o pierde hidrógeno, o al revés | Según el reactivo |

### Sustitución nucleófila: SN2 y SN1
Un nucleófilo cambia el grupo saliente de un carbono. Hay dos caminos, y el que se siga depende sobre todo de **cuánto estorban los grupos** alrededor de ese carbono.

**SN2: en un solo paso.** La S es de sustitución, la N de nucleófila y el 2, de que en el paso que marca la velocidad intervienen **dos** moléculas. El nucleófilo entra por el lado **contrario** al grupo saliente, y a la vez que se forma el enlace nuevo se rompe el viejo. Los otros tres grupos del carbono se dan la vuelta, como un paraguas con el viento: es la **inversión de configuración** (*inversion of configuration*). Si ese carbono era quiral, sale la imagen especular del de partida (lo de las formas R y S está en «Isómeros y quiralidad a fondo: moléculas gemelas que no hacen lo mismo»). Como el nucleófilo tiene que llegar por detrás, el SN2 va bien en carbonos **primarios** y mal en **terciarios**, donde tres grupos le cierran el paso.

> CH₃CH₂Br + NaOH da CH₃CH₂OH + NaBr

Bromoetano y sosa dan etanol y bromuro de sodio. Comprobación: 2 C, 6 H, 1 O, 1 Br y 1 Na a cada lado.

**SN1: en dos pasos.** Primero se va el grupo saliente solo y queda un carbocatión, que es **plano**. Después llega el nucleófilo. El paso lento es el primero, en el que solo interviene **una** molécula (de ahí el 1): la velocidad no depende de cuánto nucleófilo haya. Como pide un carbocatión estable, el SN1 es propio de carbonos **terciarios**, y con nucleófilos débiles como el agua o un alcohol.

> (CH₃)₃CBr + H₂O da (CH₃)₃COH + HBr

El 2-bromo-2-metilpropano y el agua dan 2-metilpropan-2-ol (alcohol terc-butílico) y ácido bromhídrico.

Como el carbocatión es plano, el nucleófilo puede entrar por las dos caras. Si el carbono era quiral, se forma una **mezcla** de las dos formas especulares: el SN1 puede **racemizar**. Los textos avisan de que en la práctica la mezcla rara vez sale a partes iguales, porque el grupo saliente, al irse, tapa un poco una cara. Para el operador basta esto: un SN1 en un centro quiral puede crear la impureza enantiomérica.

| | SN2 | SN1 |
|---|---|---|
| Pasos | Uno | Dos, con carbocatión |
| Carbono que lo prefiere | Primario | Terciario |
| Nucleófilo | Fuerte (OH⁻, aminas) | Débil (agua, alcoholes) |
| Velocidad depende de | Sustrato y nucleófilo | Solo del sustrato |
| Carbono quiral | Inversión | Mezcla de formas |

**Ejercicio resuelto 1. Completa el producto.** El 1-bromopropano (CH₃CH₂CH₂Br) reacciona con metóxido de sodio (CH₃ONa).
1. ¿Quién es el nucleófilo? El metóxido, CH₃O⁻: oxígeno con carga negativa.
2. ¿Dónde está el electrófilo? El carbono δ+ unido al bromo, que es **primario**: SN2.
3. El CH₃O⁻ ocupa el sitio del Br⁻, que sale con el sodio.
> CH₃CH₂CH₂Br + CH₃ONa da CH₃CH₂CH₂OCH₃ + NaBr

Sale un **éter**, el 1-metoxipropano. Comprobación: 4 C, 10 H, 1 O, 1 Br, 1 Na a cada lado.

### Eliminación: la reacción que compite
Un nucleófilo con carga negativa también es una **base**: puede arrancar un protón. Si en vez de atacar al carbono del halógeno arranca un H del carbono **vecino**, el grupo saliente se va igual, pero los dos carbonos quedan unidos por un **doble enlace**. Es una **eliminación**. Como la sustitución, tiene dos versiones: **E2**, en un paso, y **E1**, que pasa por el carbocatión del SN1. Cuando hay varios H vecinos posibles, la **regla de Zaitsev** (*Zaitsev's rule*) dice que suele ganar el alqueno con más grupos de carbono en el doble enlace.

Con el 2-bromopropano y la sosa compiten dos productos:

> Sustitución: CH₃CHBrCH₃ + NaOH da CH₃CH(OH)CH₃ + NaBr
>
> Eliminación: CH₃CHBrCH₃ + NaOH da CH₂=CHCH₃ + NaBr + H₂O

El primero es propan-2-ol; el segundo, propeno, un gas. Si tu producto es el alcohol, el alqueno es una **impureza** (o una pérdida de rendimiento y un gas que va al venteo).

**Qué inclina la balanza** (reglas de libro de texto):

| Favorece la sustitución | Favorece la eliminación |
|---|---|
| Carbono primario | Carbono terciario |
| Nucleófilo poco básico | Base fuerte y voluminosa |
| **Temperatura baja** | **Temperatura alta** |

**Por qué el calor favorece la eliminación.** Hay dos maneras de verlo, y las dos ya las conoces:

- **Entropía.** En la eliminación salen más moléculas de las que entran (2 dan 3 en el ejemplo). En «Por qué ocurren las reacciones a fondo: energía, entropía y Gibbs» viste ΔG = ΔH − TΔS: un ΔS mayor pesa más cuanto más alta es T.
- **Velocidad.** La eliminación suele tener una energía de activación más alta, y en «Velocidad de reacción a fondo: por qué unas reacciones tardan horas y otras segundos» viste que la temperatura acelera más la reacción de colina más alta.

**Ejercicio resuelto 2. Cuánto crece la impureza (valores de ejemplo).** Una sustitución da a 40 °C un 2 % de alqueno y un 98 % de producto. La eliminación tiene una energía de activación de 100 kJ/mol y la sustitución, de 80 kJ/mol. Con Arrhenius, al pasar de 40 a 60 °C la eliminación se acelera × 10,03 y la sustitución × 6,33.
1. Proporción alqueno / producto a 40 °C: 2 / 98 = 0,0204.
2. A 60 °C: 0,0204 × 10,03 / 6,33 = 0,0323.
3. En porcentaje: 0,0323 / (1 + 0,0323) × 100 = **3,1 %**.

Veinte grados de más y la impureza crece más de la mitad. Por eso una consigna máxima de temperatura no es un número de adorno.

### Adición a dobles enlaces: la regla de Markovnikov
Un doble enlace C=C tiene un segundo par de electrones poco sujeto, más expuesto: hace de **nucleófilo**. Un electrófilo, como el H⁺ de un ácido, se le acerca y se lo lleva para unirse a uno de los dos carbonos; el otro se queda como carbocatión. Después llega el nucleófilo (Br⁻, Cl⁻ o agua) y se une a él. Dos moléculas dan una: es una **adición**.

Si el alqueno no es simétrico, ¿a qué carbono va el H? La **regla de Markovnikov** (*Markovnikov's rule*): el H va al carbono del doble enlace que **ya tenía más hidrógenos**, y el otro grupo, al carbono más sustituido. La razón moderna: así el carbocatión que se forma es el más estable (secundario mejor que primario, terciario mejor que secundario).

> CH₂=CHCH₃ + HBr da CH₃CHBrCH₃

El propeno y el bromuro de hidrógeno dan sobre todo **2-bromopropano**; el 1-bromopropano sale poco. La hidrogenación, que verás en «Hidrogenación a fondo: hidrógeno, catalizadores y reactores a presión», también es una adición (H₂ sobre el doble enlace), pero sobre un catalizador y sin carbocatión.

**Ejercicio resuelto 3. El gas de una desprotección.** En «Reacciones en la fabricación de API a fondo» viste que quitar un grupo Boc con ácido suelta **isobuteno**, (CH₃)₂C=CH₂. ¿Qué se forma si se encuentra con HCl?
1. El H⁺ va al CH₂, el carbono con más hidrógenos.
2. Queda un carbocatión **terciario** en el carbono central, muy estable.
3. El Cl⁻ se une a él.
> (CH₃)₂C=CH₂ + HCl da (CH₃)₃CCl

Sale el **2-cloro-2-metilpropano**, un cloruro de alquilo. La guía ICH M7 dedica una nota a los cloruros de alquilo monofuncionales, «de uso común en la síntesis de fármacos», como clase de carcinógenos conocida, y su addendum da límites propios al cloruro de metilo y al de etilo. Si se forma o no en tu proceso, y cuánto, lo dicen el desarrollo y el laboratorio; tú vigilas lo que fija la hoja: adición lenta, temperatura y venteo libre.

### Sustitución electrófila aromática
El anillo de benceno («Química orgánica a fondo: leer una fórmula y entender su nombre») tiene sus electrones repartidos y es muy estable. Un electrófilo fuerte puede atacarlo, pero en vez de añadirse, **cambia un H del anillo** por él: el anillo recupera su estabilidad soltando un H⁺. Es la **sustitución electrófila aromática** (*electrophilic aromatic substitution*).

El ejemplo clásico es la **nitración** (*nitration*): el ácido sulfúrico convierte el ácido nítrico en ion nitronio, NO₂⁺, el electrófilo que ataca el anillo.

> C₆H₆ + HNO₃ da C₆H₅NO₂ + H₂O (con H₂SO₄)

Benceno y ácido nítrico dan nitrobenceno y agua. De la misma familia son la cloración del anillo con cloro y un catalizador de cloruro de hierro(III), que suelta HCl, y la acilación de Friedel-Crafts. El nitrobenceno, hidrogenado, da anilina («Hidrogenación a fondo»): dos reacciones de esta lección seguidas.

Dos avisos de planta, de libro de texto: si sobra electrófilo o sube la temperatura, puede entrar un **segundo grupo** en el anillo (una impureza disustituida); y los compuestos nitro están entre los grupos energéticos de «Grupos funcionales a fondo».

**Cuenta (valores de ejemplo, masas redondeadas C 12, H 1, N 14, O 16).** 390 kg de benceno son 390 / 78 = 5 kmol. Necesitan 5 × 63 = 315 kg de HNO₃ y dan, como máximo teórico, 5 × 123 = **615 kg** de nitrobenceno y 5 × 18 = 90 kg de agua. Balance: 390 + 315 = 615 + 90 = 705 kg.

### Condensación: ésteres, amidas y un caso real
En una **condensación** el nucleófilo (el O de un alcohol o el N de una amina) ataca el carbono de un grupo ácido y se suelta una molécula pequeña.

- **Esterificación**: ácido + alcohol da éster + agua. Es un equilibrio; las cuentas están en «Equilibrio químico a fondo: empujar una reacción hacia donde interesa». Un poco de ácido fuerte la acelera porque hace más electrófilo el carbono del C=O.
- **Amidas**: con un cloruro de ácido, amina + R–COCl da amida + HCl («Reacciones en la fabricación de API a fondo»).

**Un caso real, documentado por la EMA.** Un antirretroviral, el **nelfinavir mesilato**, se forma en su último paso con **ácido metanosulfónico**. Según el informe de evaluación de la Agencia Europea de Medicamentos de 2007, el depósito de espera de ese ácido no estaba en el procedimiento de limpieza; tras un mantenimiento se limpió con **etanol** pero **no se secó**. El etanol que quedó reaccionó con el ácido:

> CH₃SO₃H + CH₃CH₂OH da CH₃SO₃CH₂CH₃ + H₂O

Una esterificación que da **metanosulfonato de etilo** (mesilato de etilo), una sustancia genotóxica. El informe dice que la reacción es **lenta a temperatura ambiente y depende del tiempo**: cuanto más tiempo juntos, más se forma. El ácido se guardó en el depósito hasta la campaña siguiente y algunos lotes del principio activo llegaron hasta **2300 ppm**. Los inspectores añadieron dos causas posibles: vapores de etanol que podían llegar al depósito por el diseño de las conexiones de las tuberías de etanol y nitrógeno, y una **transesterificación** lenta del metanosulfonato de metilo que traía el ácido como impureza. Y una general: falta de conocimiento del proceso. La EMA pidió además un límite de 3 ppm de metanosulfonato de etilo en el ácido.

Masas redondeadas (S 32): 96 + 46 = 124 + 18 = 142. Un alcohol, un ácido, tiempo y un equipo mal secado: una condensación que nadie quería, en un depósito de espera.

### Hidrólisis: la condensación al revés
El agua es un nucleófilo débil, pero con tiempo, calor, ácido o base rompe ésteres y amidas: es la **hidrólisis** (*hydrolysis*). Éster + agua da ácido + alcohol. Con sosa llega al final (la saponificación de «Grupos funcionales a fondo»); las amidas aguantan más. La guía ICH Q1A(R2) pide, en los ensayos de estrés de un principio activo, evaluar su **susceptibilidad a la hidrólisis en un amplio rango de pH**, porque es una vía típica de degradación. Ejemplo de libro: el ácido acetilsalicílico se hidroliza a ácido salicílico y ácido acético.

**Ejercicio resuelto 4 (valores de ejemplo).** Un principio activo ficticio es un éster etílico de 300 g/mol; su ácido pesa 272 g/mol (el éster menos C₂H₄, 28). Una suspensión de 100 kg espera caliente en agua y se hidroliza un 0,5 % de los moles.
1. Moles de éster: 100 / 300 = 0,3333 kmol.
2. Hidrolizados: 0,3333 × 0,005 = 0,001667 kmol.
3. Ácido formado: 0,001667 × 272 = **0,45 kg**, unos 450 g de impureza.

Por eso la hoja limita los tiempos de espera y la temperatura de los lavados acuosos.

### Oxidación y reducción orgánicas
En química orgánica se cuenta así («Oxidación y reducción a fondo: hidrogenaciones, oxidantes y corrosión»): ganar O o perder H es oxidarse. Lo que aporta la reactividad es **qué producto sale según el carbono**:

| Alcohol | Al oxidarlo da | Ejemplo |
|---|---|---|
| Primario (–CH₂OH) | Aldehído, y si sigue, ácido | Propan-1-ol da propanal, y luego ácido propanoico |
| Secundario (CH–OH) | Cetona | Butan-2-ol da butanona |
| Terciario | En condiciones normales, no se oxida | 2-metilpropan-2-ol |

La reducción va al revés: un **borohidruro de sodio** (NaBH₄) convierte un aldehído en alcohol primario y una cetona en alcohol secundario; los ésteres los deja. La impureza típica es la **sobreoxidación**: el aldehído que sigue hasta ácido si sobra oxidante o tiempo, o que se oxida con el aire.

### De la reacción a la impureza
| Si la reacción es... | La impureza típica es... | Lo que controla el operador |
|---|---|---|
| Sustitución | El alqueno de la eliminación; la otra forma quiral (SN1) | Temperatura máxima, base y velocidad de adición |
| Adición | El producto del otro carbono, o un haluro de alquilo | Equivalentes, temperatura, venteo |
| Sustitución aromática | Producto disustituido | Equivalentes, temperatura de adición |
| Condensación | Éster no deseado si hay alcohol donde no toca | Equipos limpios y **secos**, disolvente correcto |
| Hidrólisis | Ácido y alcohol del éster | pH, temperatura y tiempos de espera |
| Oxidación | Sobreoxidación | Cantidad de oxidante, tiempo, aire |

Los números de esta lección son para entender. En planta manda siempre el procedimiento vigente (SOP) y la hoja de producción de cada lote.
`,
  plant: `
Turno de tarde en el reactor R-412. La etapa 2 del intermedio ficticio QT-7 es una sustitución: un bromuro de alquilo reacciona con una amina en acetonitrilo. La hoja dice: *«Adicionar la amina en 90 min a T ≤ 35 °C. Mantener 4 h a 35 ± 2 °C. IPC: alqueno ≤ 0,30 %»* (valores de ejemplo).

A mitad de adición la temperatura de masa sube a 38 °C: el agua de la camisa ha llegado más caliente. Paras la bomba, como manda la hoja, y avisas. Sabes por qué: la amina es nucleófilo y también base, y a más temperatura gana la eliminación, que da el alqueno. La masa baja a 33 °C en diez minutos y reanudas con el visto bueno del responsable. Lo anotas todo con hora.

El IPC da un 0,21 % de alqueno: cumple.

Al día siguiente, antes de cargar ácido metanosulfónico en el depósito de espera D-415 para formar la sal del producto ficticio QT-9, ves que la etiqueta de limpieza dice «limpio con etanol» pero no tiene la casilla de secado firmada. No cargas. Avisas: un resto de alcohol junto a un ácido sulfónico puede esterificarse y formar un sulfonato de alquilo, una impureza que la especificación limita en partes por millón. Calidad revisa el registro, se seca el depósito según el procedimiento y se comprueba antes de cargar.
`,
  batchRecord: `
En la hoja de producción (*batch record*) de una etapa de síntesis verás y anotarás lo que controla la reacción buena frente a las que compiten:

- **Temperatura de adición y de mantenimiento**, con su máximo y su mínimo; cualquier salida, con hora, duración y aviso.
- **Velocidad y orden de adición**: hora de inicio y fin, caudal o tiempo total, y si se paró la bomba.
- **Equivalentes de cada reactivo**: kilos, lote y código; un exceso de electrófilo puede dar productos disustituidos.
- **Estado del equipo**: limpio y **seco**, con su etiqueta; en las etapas con ácidos sulfónicos, cloruros de ácido u organometálicos, el secado y su comprobación.
- **Tiempos de espera**: cuánto estuvo una suspensión o una fase acuosa esperando y a qué temperatura (hidrólisis).
- **IPC**: resultado del material de partida y de la impureza que vigila la hoja (alqueno, producto disustituido, ácido de hidrólisis).
- **Incidencias**: cualquier desviación de temperatura, tiempo, equipo o material, a quién se avisó y qué se decidió.
`,
  terms: [
    { es: "Mecanismo de reacción", en: "Reaction mechanism", def: "Descripción paso a paso de cómo se mueven los electrones y qué enlaces se rompen y se forman en una reacción." },
    { es: "Nucleófilo", en: "Nucleophile", def: "Especie rica en electrones (par libre o carga negativa) que ataca un átomo pobre en electrones, como OH⁻, el agua o una amina." },
    { es: "Electrófilo", en: "Electrophile", def: "Especie pobre en electrones que los acepta, como el H⁺, el ion nitronio o un carbono unido a un halógeno." },
    { es: "Grupo saliente", en: "Leaving group", def: "Trozo de la molécula que se va llevándose el par de electrones de su enlace, como Br⁻ o Cl⁻." },
    { es: "Carbocatión", en: "Carbocation", def: "Carbono con solo tres enlaces y carga positiva; es más estable cuanto más sustituido está (terciario, secundario, primario)." },
    { es: "Sustitución nucleófila", en: "Nucleophilic substitution (SN1, SN2)", def: "Reacción en la que un nucleófilo ocupa el sitio del grupo saliente; en un paso (SN2) o pasando por un carbocatión (SN1)." },
    { es: "Inversión de configuración", en: "Inversion of configuration", def: "Vuelta de los tres grupos de un carbono, como un paraguas con el viento, cuando el nucleófilo entra por detrás en un SN2." },
    { es: "Eliminación", en: "Elimination (E1, E2)", def: "Reacción en la que una molécula pierde dos trozos de carbonos vecinos y se forma un doble enlace; compite con la sustitución y la favorece el calor." },
    { es: "Regla de Markovnikov", en: "Markovnikov's rule", def: "En la adición de un H–X a un doble enlace no simétrico, el H va al carbono que ya tenía más hidrógenos, porque se forma el carbocatión más estable." },
    { es: "Sustitución electrófila aromática", en: "Electrophilic aromatic substitution", def: "Reacción en la que un electrófilo cambia un H de un anillo aromático sin romper el anillo, como la nitración." },
    { es: "Condensación", en: "Condensation", def: "Unión de dos moléculas soltando una pequeña, como el agua de una esterificación o el HCl de una amida." },
    { es: "Hidrólisis", en: "Hydrolysis", def: "Ruptura de un enlace, por ejemplo de un éster o una amida, por el agua, con ayuda de ácido, base o calor." },
    { es: "Agente alquilante", en: "Alkylating agent", def: "Electrófilo que une un grupo de carbono a un nucleófilo; si ese nucleófilo es el ADN puede causar daño genético." },
  ],
  quiz: [
    {
      kind: "number",
      q: "SN2 de bromoetano con sosa: CH₃CH₂Br + NaOH da CH₃CH₂OH + NaBr. Se cargan 218 kg de bromoetano (109 g/mol) con sosa en exceso. Con etanol = 46 g/mol, ¿cuántos kilos de etanol salen como máximo teórico?",
      answer: 92,
      tolerance: 0.01,
      unit: "kg",
      explain: "218 / 109 = 2 kmol de bromoetano; la ecuación da 1 de etanol por 1 de bromoetano: 2 × 46 = 92 kg.",
    },
    {
      kind: "number",
      q: "Nitración: C₆H₆ + HNO₃ da C₆H₅NO₂ + H₂O. Con 390 kg de benceno (78 g/mol) y nitrobenceno de 123 g/mol, ¿cuántos kilos de nitrobenceno se obtienen como máximo teórico?",
      answer: 615,
      tolerance: 0.01,
      unit: "kg",
      explain: "390 / 78 = 5 kmol de benceno, que dan 5 kmol de nitrobenceno: 5 × 123 = 615 kg.",
    },
    {
      kind: "number",
      q: "Por la regla de Markovnikov, el isobuteno (56 g/mol) y el HCl dan 2-cloro-2-metilpropano (92,5 g/mol), mol a mol. Si 112 kg de isobuteno reaccionaran por completo, ¿cuántos kilos de cloruro se formarían?",
      answer: 185,
      tolerance: 0.01,
      unit: "kg",
      explain: "112 / 56 = 2 kmol de isobuteno; 2 × 92,5 = 185 kg de 2-cloro-2-metilpropano.",
    },
    {
      kind: "number",
      q: "Un principio activo ficticio es un éster de 300 g/mol y su ácido de hidrólisis pesa 272 g/mol. En 100 kg se hidroliza un 0,5 % de los moles durante una espera caliente. ¿Cuántos kilos de ácido se forman?",
      answer: 0.45,
      tolerance: 0.02,
      unit: "kg",
      explain: "100 / 300 = 0,3333 kmol; × 0,005 = 0,001667 kmol; × 272 = 0,45 kg (0,4533), unos 450 g de impureza.",
    },
    {
      kind: "number",
      q: "Una sustitución da a 40 °C un 2 % de alqueno y un 98 % de producto. Al pasar a 60 °C la eliminación se acelera × 10,03 y la sustitución × 6,33 (valores de ejemplo). ¿Qué porcentaje de alqueno sale a 60 °C?",
      answer: 3.1,
      tolerance: 0.03,
      unit: "%",
      explain: "2 / 98 = 0,0204; × 10,03 / 6,33 = 0,0323; 0,0323 / 1,0323 × 100 = 3,1 %.",
    },
    {
      kind: "choice",
      q: "Un bromuro terciario se deja en agua tibia, sin ninguna base fuerte. ¿Qué mecanismo de sustitución es el esperable?",
      options: [
        "SN2, porque el agua entra por detrás del bromo en un paso",
        "SN1, porque el bromuro sale primero y queda un carbocatión estable",
        "Sustitución electrófila aromática, porque el agua es un electrófilo",
        "Ninguno: un carbono terciario no puede sustituirse nunca",
      ],
      answer: 1,
      explain: "En un carbono terciario los tres grupos cierran el paso al SN2, pero estabilizan el carbocatión; con un nucleófilo débil como el agua va por SN1.",
    },
    {
      kind: "choice",
      q: "En una sustitución con una amina, la masa sube 5 °C por encima de la consigna máxima. ¿Qué impureza es la que más probablemente aumenta y qué haces?",
      options: [
        "Un éster; sigo añadiendo para acabar antes",
        "Un producto disustituido del anillo; subo el agitador",
        "El alqueno de la eliminación; paro la adición, enfrío y aviso",
        "Ninguna, la temperatura solo cambia la velocidad global",
      ],
      answer: 2,
      explain: "La amina también es base; el calor favorece la eliminación frente a la sustitución. La hoja manda parar la adición, recuperar la temperatura y avisar.",
    },
    {
      kind: "choice",
      q: "El propeno, CH₂=CHCH₃, reacciona con HBr. ¿Cuál es el producto principal según la regla de Markovnikov?",
      options: [
        "1-bromopropano, porque el H va al carbono central",
        "Propan-2-ol, porque el HBr aporta un grupo OH",
        "Propano, porque el HBr hidrogena el doble enlace",
        "2-bromopropano, porque el H va al CH₂ y el Br al carbono central",
      ],
      answer: 3,
      explain: "El H⁺ se une al carbono con más hidrógenos (el CH₂) y deja un carbocatión secundario, más estable; el Br⁻ se une a él: 2-bromopropano.",
    },
    {
      kind: "choice",
      q: "Un depósito limpio con etanol y sin secar se llena con un ácido sulfónico que se guardará semanas. ¿Qué riesgo químico hay?",
      options: [
        "Esterificación lenta que forma un sulfonato de etilo genotóxico",
        "Ninguno, porque el etanol se evapora siempre al cerrar el depósito",
        "Una saponificación del ácido que lo convierte en jabón",
        "Una eliminación que da etileno y vacía el depósito",
      ],
      answer: 0,
      explain: "Alcohol y ácido sulfónico se esterifican; es lento a temperatura ambiente pero crece con el tiempo, como en el caso del nelfinavir mesilato que documentó la EMA en 2007.",
    },
    {
      kind: "choice",
      q: "Se oxida butan-2-ol, CH₃CH(OH)CH₂CH₃, un alcohol secundario. ¿Qué producto se espera?",
      options: [
        "Ácido butanoico, como cualquier alcohol oxidado",
        "Butanona, una cetona",
        "Butanal, un aldehído",
        "Nada, los alcoholes secundarios no se oxidan",
      ],
      answer: 1,
      explain: "Un alcohol secundario pierde el H del carbono y el del OH y queda C=O entre dos carbonos: una cetona, la butanona. El aldehído y el ácido salen de alcoholes primarios.",
    },
  ],
};
