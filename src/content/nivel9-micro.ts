import type { Lesson } from "./types";

export const microAFondo: Lesson = {
  slug: "microbiologia-a-fondo",
  level: 9,
  order: 2,
  title: "Microbiología para el operador a fondo",
  titleEn: "Microbiology for plant operators in depth",
  minutes: 38,
  summary:
    "Qué son de verdad bacterias, hongos, esporas y virus y cuánto miden, cómo se multiplican, qué es una biopelícula, por qué las endotoxinas sobreviven a la bacteria muerta, de dónde viene la contaminación en una planta de API, qué dice ICH Q7, en qué se diferencian limpiar y desinfectar, y qué haces tú en el turno.",
  body: `
En «Microorganismos y contaminación» viste los nombres. Aquí los abrimos uno a uno, desde cero, y los llevamos al reactor, la centrífuga, el filtro, el secadero y la sala de envasado.

### Lo primero: qué es un microorganismo
Un **microorganismo** (*microorganism*) es un ser vivo tan pequeño que solo se ve con microscopio. En un medicamento no queremos ni los peligrosos ni demasiados de los demás: según la FDA, pueden infectar al paciente, dejarle toxinas o estropear el producto.

### Bacterias
Una **bacteria** (*bacterium*, en plural *bacteria*) es un ser vivo de **una sola célula**. Piensa en una bolsita cerrada con todo lo necesario para vivir dentro.

- Según el Instituto Nacional de Seguridad y Salud en el Trabajo (INSST), mide **pocos micrómetros**.
- La rodea una **membrana** y, por fuera, una **pared** que le da forma.
- Una tinción de laboratorio, la de **Gram**, las separa en dos grupos: **grampositivas** y **gramnegativas**. Las gramnegativas llevan en su pared las **endotoxinas**, que veremos más abajo.

### Hongos: mohos y levaduras
Los **hongos** (*fungi*) tienen un tipo de célula más complejo que el de las bacterias (el INSST los llama eucariotas; a las bacterias, procariotas). El INSST distingue dos formas:

- **Levaduras** (*yeasts*): hongos de una sola célula. La del pan es una levadura.
- **Mohos** (*moulds*): hongos de muchas células que forman hilos. Es la pelusa verde o negra del pan viejo o de una pared húmeda.

Los mohos sueltan **esporas** al aire. Según el INSST, su efecto principal en las personas son alergias por respirarlas o tocarlas.

### Esporas
Una **espora** (*spore*) es una forma de resistencia. La fabrican algunas bacterias, como las del género *Bacillus*, y los hongos. Piensa en una semilla.

La célula normal, la activa, se llama **forma vegetativa** (*vegetative cell*).

Las esporas aguantan muchos desinfectantes:

- La NTP 429 del INSST dice que el **etanol** es poco eficaz frente a la mayoría de esporas.
- La guía de la Administración de Alimentos y Medicamentos de Estados Unidos (FDA) sobre fabricación aséptica pone un ejemplo: el **alcohol isopropílico al 70 %** no sirve contra las esporas de *Bacillus*.
- Existe una palabra propia, **esporicida** (*sporicidal agent*): el anexo 1 de las normas europeas de fabricación (GMP) lo define como un agente que destruye las esporas de bacterias y hongos si se usa a la concentración y con el tiempo de contacto fijados.

### Virus
Un **virus** (*virus*) no es una célula. Según el INSST es una cubierta de proteínas con material genético dentro, mucho más pequeño que una bacteria. Y es un **parásito obligado**: solo se multiplica dentro de una célula viva.

Por eso, en un reactor o en una torta de producto químico un virus no se multiplica. Los virus preocupan sobre todo en los principios activos obtenidos de células o por biotecnología (guía ICH Q5A y apartado 18 de ICH Q7). En una planta de síntesis, el virus que importa es el que traes tú: ICH Q7 (3.24) aparta de las tareas con producto a quien tenga una enfermedad infecciosa.

### Cuánto miden: el micrómetro
Un **micrómetro** (µm) es la milésima parte de un milímetro: 1 mm = 1000 µm. Y un **nanómetro** (nm) es la milésima parte de un micrómetro: 1 µm = 1000 nm.

| Qué | Tamaño | Fuente |
|---|---|---|
| Bacteria típica | Pocos micrómetros | INSST |
| *Brevundimonas diminuta*, una bacteria muy pequeña | 0,3 µm de diámetro medio | FDA, fabricación aséptica |
| Poro de un filtro esterilizante | 0,2 o 0,22 µm (se consideran equivalentes) | FDA y anexo 1 |
| Virus grandes usados en ensayos | 250 a 300 nm (0,25 a 0,3 µm) | ICH Q5A, tabla A-1 |
| Virus pequeños (parvovirus) | 18 a 24 nm (unos 0,02 µm) | ICH Q5A, tabla A-1 |
| Partículas que se cuentan en una sala limpia | 0,5 µm y 5 µm | Anexo 1 |

En una raya de 1 mm caben, una detrás de otra, 1000 / 0,3 = unas 3333 bacterias de 0,3 µm. Y esa bacteria es unas 0,3 / 0,02 = 15 veces más ancha que un parvovirus. Por eso un filtro de 0,2 µm retiene bacterias, pero no virus pequeños ni, como verás, endotoxinas.

### Qué necesita un microbio para crecer
Para multiplicarse, una bacteria o un hongo necesita tres cosas, como una planta en una maceta:

1. **Agua disponible.** Sin agua libre no hay crecimiento. La FDA, en su borrador de guía de 2021 sobre calidad microbiológica de medicamentos no estériles, habla de **actividad de agua** (*water activity*, aw): mide el agua que el microbio puede usar, que no es lo mismo que cuánta agua contiene el producto. Un producto sólido y seco tiene actividad de agua baja y, en general, no deja crecer microbios. Pero la misma guía avisa: los que ya están dentro **no crecen, pero pueden sobrevivir**.
2. **Alimento.** Restos orgánicos, azúcares, proteínas, incluso la materia orgánica del agua.
3. **Una temperatura que les venga bien.** El laboratorio incuba sus placas a 30–35 °C para bacterias y a 20–25 °C para hongos (lo viste en «Ensayos microbiológicos: recuento y endotoxinas»): son temperaturas templadas, como las de una nave. El calor fuerte los frena: según la FDA, un agua que circula por encima de 75 °C es el ambiente menos favorable, y alrededor de 60 °C el control es solo marginal.

Quita una de las tres y el crecimiento se para.

### Cómo crecen: duplicaciones
Una bacteria se **divide en dos**, y cada mitad vuelve a dividirse. El tiempo que tarda la población en duplicarse se llama **tiempo de duplicación** (*doubling time*). Depende del microbio y de las condiciones; aquí usaremos valores de ejemplo.

Ejemplo con un tiempo de duplicación de 30 minutos (valor de ejemplo):

| Tiempo | Duplicaciones | Bacterias a partir de una |
|---|---|---|
| 0 h | 0 | 1 |
| 1 h | 2 | 4 |
| 5 h | 10 | 1024 |
| 10 h | 20 | 1048576 |

La regla es: **número final = número inicial × 2 elevado al número de duplicaciones**. En 10 horas caben 10 × 60 / 30 = 20 duplicaciones, y 2 elevado a 20 es 1048576: de una bacteria, más de un millón.

Es el **crecimiento exponencial** (*exponential growth*): al principio no se nota; de repente, se dispara. En la realidad no sigue así sin fin, pero la lección para ti es otra: **el tiempo de espera de algo mojado es peligroso**. Una torta húmeda o un agua de lavado que esperan un fin de semana pueden pasar de casi limpias a muy contaminadas. La FDA lo dice en su borrador: los tiempos de espera largos de disoluciones acuosas o suspensiones pueden dejar crecer microbios por encima de lo aceptable, y por eso hacen falta límites de tiempo en cada etapa.

### La biopelícula
Una **biopelícula** (*biofilm*) es una comunidad de microbios pegada a una superficie mojada y envuelta en una baba que ellos mismos fabrican. Puede formarse en tuberías, depósitos de agua, juntas, mangueras y en cualquier rincón donde el agua se quede quieta.

La Agencia Europea de Medicamentos (EMA) explica por qué preocupa: la capa protege a los microbios del roce del agua y de los desinfectantes, y si no se quita entera vuelve a crecer deprisa. Además suelta trozos de vez en cuando, así que un día la muestra sale limpia y al siguiente no.

Lo tienes desarrollado en «Agua farmacéutica a fondo». Para el turno: **agua parada, agua que se estropea**.

### Endotoxinas: el problema que sobrevive a la bacteria
Las **endotoxinas** (*endotoxins*) son unas moléculas de la membrana externa de las bacterias gramnegativas. Su nombre químico es **lipopolisacárido** (*lipopolysaccharide*, LPS). Según la guía técnica 40 de la FDA, se sueltan cuando la bacteria **muere y se rompe**. Ejemplos de bacterias que las producen: *Escherichia coli*, *Pseudomonas*, *Klebsiella*.

Si llegan a la sangre de un paciente, por ejemplo en una inyección, provocan reacciones que, según el anexo 1, van desde la fiebre hasta la muerte. Por eso se llaman también **pirógenos** (*pyrogens*): sustancias que dan fiebre.

Lo que no es intuitivo:

- **Matar la bacteria no quita la endotoxina.** Al contrario: al morir, la suelta. Una sanitización con agua caliente o un desinfectante matan microbios, pero las endotoxinas siguen ahí.
- **Los filtros esterilizantes no las retienen**, dice la FDA: pasan a través de un filtro que sí para a la bacteria.
- **El calor normal no las destruye.** La FDA recoge que algunos textos recomiendan, para destruirlas con calor seco, 250 °C durante 45 minutos. Eso se llama **despirogenación** (*depyrogenation*). Una sanitización a 70–80 °C queda muy lejos.
- **Bajar el recuento no baja las endotoxinas.** La FDA lo resume: si hubo muchos microbios y luego se eliminan, las endotoxinas que dejaron no se van con ellos.

Conclusión: las endotoxinas **se evitan, no se arreglan**, impidiendo que crezcan bacterias en el agua, las disoluciones y los equipos mojados. Importa sobre todo si tu API acabará en un inyectable.

### De dónde viene la contaminación en una planta de API
| Fuente | Cómo llega al producto | Qué la frena |
|---|---|---|
| **Personas** | Manos, ropa, enfermedades | Higiene y ropa de trabajo (ICH Q7, 3.2) |
| **Agua** | Proceso, lavado de torta, aclarados | Sistema de agua vigilado (ICH Q7, 4.3) |
| **Aire** | Polvo y esporas al abrir equipos | Aire tratado, equipo cerrado |
| **Materias primas** | Sobre todo las de origen natural; también el agua | Especificaciones y análisis |
| **Equipos mal limpiados o mojados** | Restos y agua que alimentan microbios | Limpieza, secado, tiempos máximos |
| **Tortas húmedas y disoluciones que esperan** | Agua y alimento durante horas | Límites de tiempo de la hoja |

Dos casos de la FDA (borrador de 2021):

- **Un secadero.** En 2016, un API llegó a los clientes con muchísimos hongos (*Aspergillus*). La causa apuntaba a humedad atrapada en los conductos del equipo de secado. Hubo que cambiarlos y retirar varios lotes a lo largo de un año.
- **El aire de secado.** En 2001 se retiraron 45 lotes de comprimidos por hongos. El origen era un excipiente: el aire usado para secarlo llevaba esporas de hongos de la temporada.

### Por qué en muchas etapas químicas el riesgo es menor
En una planta de síntesis química, muchas etapas son poco amables con los microbios: disolventes orgánicos con poca o ninguna agua, reflujos y destilaciones, ácidos o bases fuertes, filtraciones. La FDA lo reconoce: etapas con filtración, alta temperatura, pH extremo o disolventes orgánicos pueden dar un material con **menos carga microbiana** (*bioburden*). Y los líquidos con mucho alcohol u otros disolventes no acuosos tienen menos riesgo de que los microbios se multipliquen.

Pero «menos riesgo» no es «sin riesgo»:

1. **Que no crezcan no significa que mueran.** En un producto seco o en un disolvente, un microbio puede sobrevivir (FDA).
2. **El final del proceso es otra historia.** Después de la última purificación, el producto se lava, a menudo con agua, se descarga húmedo, se seca, se muele y se envasa. Ahí se expone a personas, aire y equipos, y ya no hay disolvente ni calor que lo proteja. ICH Q7 (8.52) pide precauciones especiales al manipular el API después de purificarlo.
3. **Hay procesos acuosos.** Cristalizaciones en agua, lavados con agua, disoluciones de sales que esperan. Ahí el riesgo existe.

Ninguna fuente da una cifra de disolvente o temperatura a partir de la cual no hay riesgo: lo decide la evaluación de riesgos de tu planta.

### Qué dice ICH Q7
Lo microbiológico aparece en varios apartados de la guía de buenas prácticas de los principios activos:

| Apartado | Qué pide, resumido |
|---|---|
| 3.2 | Higiene: ropa limpia, no tocar el producto, no comer en producción, apartar a quien tenga infecciones o heridas abiertas |
| 4.10 | Si el API tiene especificación microbiológica, las instalaciones se diseñan para limitar la exposición a microbios indeseables |
| 4.3 | Agua adecuada para su uso; si un API no estéril va a un medicamento estéril, en el agua de las etapas finales controlar recuento, microbios indeseables y endotoxinas (4.34) |
| 5.21 | Limpieza escrita: sanitización si procede, proteger el equipo limpio y tiempo máximo hasta limpiar |
| 8.20 | Cumplir los límites de tiempo de la instrucción maestra; si no, desviación |
| 8.50 | Los restos que pasan de lote a lote (por ejemplo, la capa de cristales húmedos que queda en la cesta de la centrífuga) no deben llevar contaminación microbiana |
| 11.13 y 11.23 | Si el API tiene especificación microbiológica o de endotoxinas, límites de acción y análisis de cada lote |
| 12.75 | Los estudios de limpieza deben tener en cuenta microbios y endotoxinas cuando hay que reducirlos en el API, por ejemplo si va a un producto estéril |

Fíjate en el **«si procede»**: ICH Q7 no pide lo mismo a todos los principios activos. Según ICH Q6A, el tipo de ensayo microbiológico depende de la naturaleza del API, de cómo se fabrica y del uso del medicamento final: un API para inyectables puede necesitar ensayo de endotoxinas, y uno estéril, de esterilidad. Lo propio de los productos estériles (grados A y B, procesos asépticos) está en el anexo 1 y no se aplica a un API no estéril.

### Limpiar no es desinfectar
Son dos cosas distintas, y el anexo 1 (glosario) las define por separado:

- **Limpiar** (*cleaning*): quitar la suciedad, los restos de producto o de desinfectante.
- **Desinfectar** (*disinfection*): reducir el número de microorganismos con un producto que daña su estructura, hasta el nivel adecuado para el uso.

El anexo 1 es la norma de los productos estériles, así que sus exigencias no se trasladan sin más a un API no estéril; pero sus definiciones ayudan a entender cualquier sala. El orden importa. El anexo 1 (apartado 4.33) dice que, para que la desinfección funcione, **antes hay que limpiar**. Es como intentar desinfectar un plato con grasa sin fregarlo antes. Para las salas de estériles, el mismo apartado pide usar más de un desinfectante, con distinto modo de acción, y de vez en cuando un esporicida.

**Sanitizar** (*sanitization*) es la palabra que usa ICH Q7: pide limpiar los equipos y, cuando proceda, sanitizarlos, es decir, reducir sus microbios.

### Desinfectantes habituales
Datos de la NTP 429 del INSST (1997) y de la FDA:

| Desinfectante | Lo que dice la fuente | Cuidado |
|---|---|---|
| Etanol | El más usado para la piel; poco eficaz frente a ciertos virus y la mayoría de esporas | Inflamable |
| Alcohol isopropílico | Se usa al 70 % en agua, con eficacia equivalente al etanol; al 70 % no mata esporas de *Bacillus* (FDA) | Inflamable |
| Hipoclorito sódico (lejía) | Activo frente a todos los microorganismos; como desinfectante general, 1 g/L de cloro libre | Oxidante y corrosivo para los metales; las diluciones son inestables y se preparan a diario |
| Peróxido de hidrógeno y ácido peracético | Se usan como sustitutos del glutaraldehído | Corrosivos y comburentes concentrados |
| Amonios cuaternarios | Buenos frente a bacterias y hongos; escasos frente a virus y esporas | Algunas *Pseudomonas* llegan a crecer en ellos |

Cuenta de la NTP 429: 250 mL de lejía de 40 g/L más 750 mL de agua dan 1 L de 40 × 250 / 1000 = 10 g/L de cloro libre.

- **El alcohol arde.** Rociarlo es manejar un inflamable: sigue las reglas de las atmósferas explosivas (ATEX).
- **Un desinfectante también se contamina.** La FDA cuenta que en 2011 se retiraron toallitas de alcohol contaminadas con *Bacillus cereus*. El anexo 1 (4.35) pide, en estériles, guardar las diluciones en envases limpios y solo el plazo fijado.

### Tiempo sucio y tiempo limpio
Lo viste en «Limpieza de equipos y validación de limpieza»; aquí va el porqué microbiológico.

- **Tiempo máximo sucio** (*dirty hold time*): lo más que puede esperar un equipo usado antes de empezar a limpiarlo. ICH Q7 (5.21) pide fijarlo cuando proceda. Si se pasa, los restos se pegan y, si están húmedos, alimentan microbios: la FDA cita las esperas largas antes de limpiar como causa de contaminación.
- **Tiempo máximo limpio** (*clean hold time*): lo más que puede esperar un equipo limpio sin usarse. Pasado ese tiempo, hay que volver a limpiarlo o comprobarlo.

El anexo 15 de las GMP europeas (10.8) pide definir ambos tiempos teniendo en cuenta lo que pasa entre fabricar y limpiar y entre limpiar y usar. Y la FDA insiste en el **secado**: el agua que queda en un equipo guardado favorece el crecimiento, así que se seca o se guarda de forma que se seque cuanto antes. Un equipo «limpio» pero con un charco en el fondo no está listo.

### Qué haces tú en el turno
- **Higiene.** Manos y ropa limpias, nada de comer ni beber en producción, no tocar el producto. Si tienes una infección o una herida abierta, dilo antes de entrar.
- **Vigila el reloj.** Anota las horas de fin de lote, de limpieza y de inicio del siguiente. Si se pasa el tiempo sucio o el limpio, avisa: es una desviación.
- **Nada mojado esperando.** Agua de lavado, suspensiones y tortas húmedas: respeta los tiempos máximos de la hoja. Si una centrífuga o un filtro se quedan con torta húmeda por una avería, avisa enseguida.
- **Seca y protege.** Tras limpiar, seca como diga el procedimiento, cierra bocas y conexiones y pon la etiqueta de estado.
- **Busca la humedad.** Condensación en un secadero, agua en un conducto, juntas que gotean: comunícalo.
- **Desinfectante correcto.** El indicado, a su dilución, dentro de plazo y sobre superficie ya limpia.

En planta manda siempre el procedimiento vigente (SOP): los tiempos, los desinfectantes y los controles de tu planta son los que diga.
`,
  plant: `
Lunes, 06:00. El lote ficticio ZT-0418 terminó la cristalización final en el reactor R-510 y se separó en la centrífuga C-520. El último lavado de la torta se hace con agua purificada.

Durante la noche, una avería del motor de la centrífuga dejó la última carga dentro: torta húmeda, a temperatura ambiente, desde las 02:00. Lucía, la operadora de mañana, mira la hoja: «Tiempo máximo de torta húmeda en centrífuga: 8 h» (valor de ejemplo). Han pasado 4 h. No hay disolvente que proteja la torta, porque el último lavado fue con agua. Avisa al jefe de turno y anota la hora en que se detectó.

Mantenimiento repara el motor a las 08:30. La torta se descarga a las 09:15 al secadero de bandejas S-530, dentro del tiempo. Lucía anota la hora de descarga y adjunta el aviso de avería.

Después toca limpiar la centrífuga. El tiempo máximo sucio de C-520 es de 48 h (valor de ejemplo). Lucía empieza a las 11:00, sigue el procedimiento de limpieza, aclara con agua purificada y seca con nitrógeno. Al inspeccionar con linterna ve una gota de agua en la junta de la tapa: la seca, la anota y pone la etiqueta «Limpio» con fecha, hora y firma. El tiempo máximo limpio empieza a contar ahora.

En la sala de envasado, antes de abrir el secadero, limpia la mesa y luego aplica el desinfectante de la sala, el que indica el procedimiento, de un envase etiquetado y dentro de plazo. Como es alcohol, comprueba que no hay focos de ignición cerca.
`,
  batchRecord: `
- **Tiempos del proceso**: hora de fin de cada etapa húmeda (lavado de torta, descarga de centrífuga o filtro) y hora de inicio de la siguiente, comparadas con los tiempos máximos de la hoja.
- **Agua usada**: calidad, punto de uso, volumen y hora; manguera identificada.
- **Incidencias que alargan una espera**: averías, paradas o retrasos, con la hora y a quién se avisó.
- **Registro de limpieza**: hora de fin del lote anterior, inicio y fin de la limpieza (tiempo sucio), productos de limpieza y desinfectantes con su lote y dilución, secado e inspección visual.
- **Estado del equipo**: etiqueta «Limpio» con fecha, hora y firma; al empezar un lote, comprobación de que el equipo está dentro de su tiempo limpio.
- **Sala**: limpieza y desinfección de superficies antes de exponer el producto, y comprobación de las condiciones de la sala.
- **Higiene**: en algunas plantas, confirmación de que el personal cumple los requisitos de entrada.
- **Resultados que llegan días después**: recuento microbiano y, si el API lo requiere, endotoxinas en el certificado del lote; el lote espera en cuarentena hasta tenerlos.
`,
  terms: [
    { es: "Microorganismo", en: "Microorganism", def: "Ser vivo tan pequeño que solo se ve con microscopio: bacterias, hongos y, en sentido amplio, virus." },
    { es: "Bacteria gramnegativa", en: "Gram-negative bacterium", def: "Bacteria con una membrana externa que contiene endotoxinas; se distingue con la tinción de Gram." },
    { es: "Levadura", en: "Yeast", def: "Hongo de una sola célula." },
    { es: "Moho", en: "Mould", def: "Hongo de muchas células que forma hilos y suelta esporas al aire." },
    { es: "Espora", en: "Spore", def: "Forma de resistencia de algunas bacterias y de los hongos; aguanta calor, sequedad y muchos desinfectantes." },
    { es: "Forma vegetativa", en: "Vegetative cell", def: "Célula activa que come y se divide, a diferencia de la espora." },
    { es: "Tiempo de duplicación", en: "Doubling time", def: "Tiempo que tarda una población de microbios en duplicar su número." },
    { es: "Actividad de agua", en: "Water activity (aw)", def: "Medida del agua que los microbios pueden usar en un producto; no es lo mismo que su contenido de agua." },
    { es: "Biopelícula", en: "Biofilm", def: "Comunidad de microbios pegada a una superficie mojada y protegida por una baba que ellos fabrican." },
    { es: "Endotoxina", en: "Endotoxin (lipopolysaccharide)", def: "Molécula de la pared de las bacterias gramnegativas que se libera al morir la célula y provoca fiebre si se inyecta." },
    { es: "Despirogenación", en: "Depyrogenation", def: "Proceso que elimina o inactiva pirógenos como las endotoxinas, por ejemplo con calor seco muy alto." },
    { es: "Desinfección", en: "Disinfection", def: "Reducción del número de microorganismos con un producto que daña su estructura o su metabolismo." },
    { es: "Agente esporicida", en: "Sporicidal agent", def: "Producto que destruye esporas de bacterias y hongos a la concentración y con el tiempo de contacto fijados." },
    { es: "Tiempo máximo sucio / limpio", en: "Dirty / clean hold time", def: "Tiempo máximo que un equipo puede esperar sucio antes de limpiarse, o limpio antes de usarse." },
  ],
  quiz: [
    {
      kind: "number",
      q: "En un agua de lavado olvidada hay 100 UFC. Si los microbios se duplican cada 2 horas (valor de ejemplo), ¿cuántas UFC habrá al cabo de 12 horas?",
      answer: 6400,
      tolerance: 0.01,
      unit: "UFC",
      explain: "En 12 h caben 12 / 2 = 6 duplicaciones: 100 × 2 elevado a 6 = 100 × 64 = 6400 UFC.",
    },
    {
      kind: "choice",
      q: "El agua de un depósito tuvo un recuento muy alto de bacterias gramnegativas. Se sanitiza a 80 °C y el recuento baja a cero. ¿Qué pasa con las endotoxinas?",
      options: [
        "Pueden seguir ahí: matar las bacterias no destruye sus endotoxinas",
        "Desaparecen también, porque mueren con las bacterias que las producen",
        "Se quedan retenidas en el filtro de 0,2 µm del punto de uso",
        "Se transforman en esporas y vuelven a crecer al bajar la temperatura",
      ],
      answer: 0,
      explain: "Las endotoxinas se liberan al morir la bacteria, no pasan por un filtro esterilizante y necesitan calor seco muy alto, por ejemplo 250 °C durante 45 minutos, para destruirse.",
    },
    {
      kind: "number",
      q: "Una bacteria mide 0,3 µm. ¿Cuántas cabrían, una detrás de otra, en una raya de 1 mm? (1 mm = 1000 µm; redondea a la unidad)",
      answer: 3333,
      tolerance: 0.01,
      unit: "bacterias",
      explain: "1000 µm / 0,3 µm = 3333 bacterias aproximadamente.",
    },
    {
      kind: "choice",
      q: "Vas a desinfectar la mesa de envasado, que tiene restos de polvo de producto. ¿Qué haces primero?",
      options: [
        "Rociar el desinfectante encima del polvo para que actúe mejor",
        "Limpiar los restos y después aplicar el desinfectante indicado",
        "Mezclar dos desinfectantes para cubrir más tipos de microbios",
        "Rociar alcohol y secar enseguida con un paño cualquiera",
      ],
      answer: 1,
      explain: "El anexo 1 (4.33) dice que para que la desinfección sea eficaz antes hay que limpiar: la suciedad protege a los microbios.",
    },
    {
      kind: "number",
      q: "Un reactor terminó el lote el lunes a las 22:00 y la limpieza empezó el miércoles a las 20:00. ¿Cuántas horas estuvo sucio?",
      answer: 46,
      tolerance: 0.01,
      unit: "h",
      explain: "Del lunes 22:00 al miércoles 22:00 son 48 h; dos horas menos: 46 h. Se compara con el tiempo máximo sucio de la hoja.",
    },
    {
      kind: "choice",
      q: "Una sala tiene esporas de Bacillus en la monitorización. Alguien propone desinfectar solo con alcohol isopropílico al 70 %. ¿Qué es lo correcto?",
      options: [
        "Usarlo dos veces seguidas, porque así llega a matar las esporas",
        "Usarlo más concentrado, al 100 %, para que sea esporicida",
        "Aplicar el esporicida que indique el procedimiento, como pide el anexo 1",
        "No hacer nada, porque las esporas no crecen en una sala seca",
      ],
      answer: 2,
      explain: "La FDA pone como ejemplo que el isopropanol al 70 % no mata esporas de Bacillus; por eso el programa incluye un esporicida, según el anexo 1 (4.33).",
    },
    {
      kind: "number",
      q: "Para preparar desinfectante mezclas 250 mL de lejía con 40 g/L de cloro libre y 750 mL de agua. ¿Qué concentración de cloro libre tiene la mezcla, en g/L?",
      answer: 10,
      tolerance: 0.01,
      unit: "g/L",
      explain: "Cloro: 40 × 0,25 = 10 g en 1 L de mezcla, es decir, 40 × 250 / 1000 = 10 g/L, como indica la NTP 429.",
    },
    {
      kind: "choice",
      q: "Tu API se fabrica en tolueno a reflujo, pero el último lavado de la torta es con agua y luego se seca y se envasa. ¿Dónde está el mayor riesgo microbiológico?",
      options: [
        "En la reacción en tolueno, porque el reflujo hace crecer a las bacterias",
        "En el almacén de tolueno, porque el disolvente es alimento para los mohos",
        "En ningún sitio, porque un API químico nunca tiene riesgo microbiológico",
        "En el lavado con agua, la torta húmeda, el secado y el envasado",
      ],
      answer: 3,
      explain: "Los disolventes y el calor limitan a los microbios; al final hay agua, espera y exposición a personas, aire y equipos, y ya nada protege el producto.",
    },
    {
      kind: "choice",
      q: "Al acabar la limpieza de un filtro-secador ves un charco de agua en el fondo. ¿Qué haces?",
      options: [
        "Lo seco como indique el procedimiento antes de dar el equipo por limpio",
        "Lo dejo, porque el agua de aclarado era agua purificada y está limpia",
        "Pongo la etiqueta de limpio y que lo seque el turno que lo vaya a usar",
        "Echo alcohol en el charco para que no crezcan bacterias en el agua",
      ],
      answer: 0,
      explain: "El agua que queda en un equipo guardado favorece el crecimiento de microbios; la FDA pide secar cuanto antes tras limpiar.",
    },
    {
      kind: "choice",
      q: "Un compañero tiene una herida abierta en la mano y fiebre, pero quiere entrar a descargar el secadero. Según ICH Q7 (3.24), ¿qué corresponde?",
      options: [
        "Que entre con doble guante, porque así ya no hay ningún riesgo",
        "Que lo comunique y no haga tareas que puedan afectar al producto",
        "Que entre solo si la herida está tapada con una tirita normal",
        "Que entre, porque ICH Q7 solo habla de la higiene en el laboratorio",
      ],
      answer: 1,
      explain: "ICH Q7 pide apartar de las tareas que puedan comprometer el API a quien tenga una enfermedad infecciosa o heridas abiertas hasta que se corrija o lo autorice personal médico cualificado.",
    },
  ],
};
