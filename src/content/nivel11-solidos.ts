import type { Lesson } from "./types";

export const solidosAFondo: Lesson = {
  slug: "solidos-a-fondo",
  level: 11,
  order: 10,
  title: "Manejo de sólidos a fondo: pesar, cargar, trasvasar y contener polvos",
  titleEn: "Solids handling in depth: weighing, charging, transferring and containing powders",
  minutes: 40,
  summary:
    "Por qué un polvo es más difícil de mover que un líquido; densidad aparente y cuentas de volumen; sacos, bidones y big bags de tipo A, B, C y D; la pesada según ICH Q7; las formas de cargar un reactor, de la más abierta a la más cerrada; polvo sobre disolvente inflamable, explosiones de polvo, contención, contaminación cruzada y balance de materia.",
  body: `
En la lección «Manejo de sólidos y balance de materia» viste en una página cómo se mueven los sólidos. Aquí vas a entender por qué dan tanta guerra, cómo se hacen las cuentas y qué te toca vigilar. Los límites de exposición y las zonas con riesgo de explosión tienen sus lecciones «a fondo» en el nivel 15: aquí solo se usa lo necesario.

### Por qué un sólido es más difícil que un líquido
Abres una válvula y el agua sale sola. La harina no: se pega al paquete, cae a golpes y levanta una nube. Un polvo es un montón de granos con aire entre ellos, y cada grano roza con sus vecinos. De ahí salen cinco problemas:

- **No fluye solo.** Hay que empujarlo, sacudirlo o arrastrarlo con gas.
- **Se apelmaza** (*caking*). Con humedad los granos se pegan y forman terrones, como la sal en un salero húmedo.
- **Hace puentes** (*bridging*). Sobre la boca de salida de una tolva se forma una bóveda de polvo que aguanta todo lo de arriba, y deja de salir.
- **Levanta polvo.** Lo más fino queda flotando: se respira y, si es combustible, puede arder.
- **Se carga de electricidad.** Los granos rozan entre sí y con las paredes. Según la nota técnica NTP 827 del Instituto Nacional de Seguridad y Salud en el Trabajo (INSST), esto es frecuente en los polvos orgánicos y ocurre sobre todo en el transporte neumático.

### Las propiedades de un polvo que te importan
**Tamaño de partícula** (*particle size*). Se mide en micrómetros (µm): 1000 µm son 1 mm. Cuanto más fino es un polvo, más flota, peor fluye y más fácil se enciende.

**Densidad aparente** (*bulk density*). Es lo que pesa el polvo dividido entre el volumen que ocupa tal como cae, contando el aire entre granos. Un kilo de plumas y uno de arroz no caben en el mismo saco. Se da en kg/L o en g/mL, que es el mismo número; 0,40 kg/L son 400 kg/m³.

**Densidad compactada** (*tapped density*). Es la del mismo polvo después de asentarlo a golpecitos, como cuando das unos toques al bote de café para que quepa más. Siempre es mayor que la aparente. Si al dividir la compactada entre la aparente sale un número cercano a 1, el polvo casi no se asienta y suele fluir bien. Cuanto mayor es el cociente, peor fluye.

**Humedad** (*moisture*). El líquido que queda en el sólido, en porcentaje del peso. Una torta de centrífuga con un 20 % de humedad tiene 20 kg de líquido por cada 100 kg.

**Higroscopicidad** (*hygroscopicity*). Tendencia a chupar agua del aire. Un producto higroscópico gana peso y se apelmaza si el envase queda abierto.

**Fluidez** (*flowability*). Un polvo **de flujo libre** (*free-flowing*) cae como el azúcar. Uno **cohesivo** (*cohesive*) se comporta como la harina.

**Ángulo de reposo** (*angle of repose*). Si viertes el polvo en un punto, forma un cono. El ángulo de su ladera con el suelo es el ángulo de reposo: montón plano, buen flujo; montón empinado, mal flujo.

### Tres cuentas con la densidad aparente
Volumen = masa / densidad aparente. Los datos son ejemplos.

**Ejemplo 1: qué volumen ocupa.** Tienes 120 kg de un polvo de densidad aparente 0,40 kg/L. 120 / 0,40 = 300 L.

**Ejemplo 2: cuántos envases.** Esos 300 L van a bidones con 50 L útiles: 300 / 50 = 6 bidones. Si llegan en sacos de 25 kg, 120 / 25 = 4,8: son 5 sacos, cuatro enteros y 20 kg del quinto.

**Ejemplo 3: si cabe.** El filtro-secador va a descargar 180 kg de producto seco de densidad aparente 0,50 kg/L en un contenedor de 500 L que se llena como máximo al 80 %. Volumen: 180 / 0,50 = 360 L. Límite: 500 × 0,80 = 400 L. Cabe. Con densidad compactada 0,60 kg/L, tras el transporte ocupará 180 / 0,60 = 300 L. El cociente entre las dos densidades es 0,60 / 0,50 = 1,2.

### Envases y contenedores
| Envase | Cómo es | Qué mirar |
|---|---|---|
| Saco (*bag*) | De papel o plástico, se abre y se vuelca | Peso, polvo al abrir, material del saco |
| Bidón con bolsa interior (*drum with liner*) | Bidón rígido con una o dos bolsas dentro | La bolsa: se cierra bien y no se sacude |
| Contenedor intermedio para graneles (*intermediate bulk container*, IBC) | Rígido, con válvula de descarga abajo | Se acopla al equipo; carga cerrada |
| Saca o big bag (*flexible intermediate bulk container*, FIBC) | Saco grande de tejido, colgado de sus asas | Su tipo electrostático |

La guía ICH Q7, el documento internacional de buenas prácticas de fabricación para principios activos, pide que lo guardado en bidones de fibra, sacos o cajas no esté en el suelo (apartado 7.41).

**Los cuatro tipos de big bag.** El documento del INSST «Riesgos debidos a la electricidad estática» (2015) explica que estas sacas llevan entre 500 y 1500 kg y suelen ser de polipropileno tejido, un material muy aislante. Recoge la clasificación de la norma UNE-EN 61340-4-4:

| Tipo | Qué es | ¿Vale con vapores inflamables alrededor? | ¿Toma de tierra? |
|---|---|---|---|
| A | Sin protección contra las cargas | No. Tampoco para productos inflamables | No |
| B | Antiestático: no deja propagarse las descargas | No. Sí para polvos inflamables sin vapores | No |
| C | Conductivo: hilos conductores unidos entre sí y tomas de tierra | Sí | Sí, siempre al llenar y al vaciar |
| D | Disipativo: suelta la carga poco a poco | Sí | La saca no; todo lo conductor y las personas de alrededor, sí |

Un tipo C sin conectar es un conductor aislado que acumula carga. La tabla de selección de ese documento da el tipo C en zonas con gas o vapor inflamable. El tipo va impreso en la saca: compruébalo contra la hoja.

### Pesada y dispensación
Un error de pesada lo arrastra todo el lote. Se pesa en una **sala de pesadas** (*dispensing room*) o una **cabina de pesada** (*weighing booth*), un puesto ventilado que se lleva el polvo lejos de tu cara. La secuencia:

1. **Báscula limpia, adecuada y comprobada.** ICH Q7 pide que los equipos de pesada tengan la exactitud adecuada a su uso (8.10), que los críticos se calibren según un programa (5.30) y que no se use un instrumento que no cumple (5.34). Miras la etiqueta de calibración y haces la comprobación diaria que pida el procedimiento.
2. **Tara** (*tare*). Pones el envase vacío y lo descuentas. Bruto = tara + neto.
3. **Identificación.** Antes de usar un material, producción verifica que es el que especifica la hoja (8.12): nombre, código y lote de la etiqueta contra la hoja.
4. **Pesada.** El valor real, con su unidad, y el código de la báscula.
5. **Etiqueta del envase nuevo.** Si un material se fracciona para usarlo después, el envase debe llevar: nombre o código del material, número de recepción o de control, peso en el nuevo envase y, si procede, fecha de reevaluación (8.11).
6. **Doble verificación.** Las pesadas críticas se hacen ante un testigo o con un control equivalente (8.12). La segunda persona mira la etiqueta y el indicador, no tu anotación.

### Cargar un sólido al reactor, de lo más abierto a lo más cerrado
| Método | Cómo se hace | Ventaja | Riesgo |
|---|---|---|---|
| A mano por la boca de hombre (*manway*) | Se abre la tapa y se vuelca el saco o el bidón | Sencillo, sin equipo | El más abierto: entra aire, salen vapores, nube en tu cara |
| Tolva con válvula (*hopper*) | El polvo se vuelca en una tolva y cae al abrir una válvula | El reactor solo se abre a la tolva | El vuelco sigue siendo abierto; puentes |
| Transporte por vacío (*vacuum conveying*) | Una lanza aspira el polvo y lo lleva por tubería a un receptor sobre el reactor | Sin cargar peso; reactor cerrado | El transporte neumático es de lo que más carga estática genera |
| Contenedor acoplado | Un IBC se sitúa sobre el reactor y se conecta | Carga cerrada y grande | Conexión y desconexión; puentes |
| Válvula de doble mariposa (*split butterfly valve*) | Media válvula en el contenedor y media en el reactor; solo abren unidas | No queda producto al aire al separar | Limpieza y estado de las juntas |
| Aislador o caja de guantes (*isolator*, *glove box*) | El envase se abre dentro de una caja cerrada | La mayor contención | Lento; guantes que revisar |

La boca de hombre abierta tiene dos problemas a la vez. Uno: **rompe la inertización.** Entra aire por una abertura grande y el polvo arrastra más aire entre sus granos. Lo que marcó el medidor de oxígeno antes de abrir ya no vale. Dos: **te expone.** Los vapores del disolvente y la nube de polvo salen justo a la altura de tu cara. El documento del INSST de 2015 pide controlar la carga de sólidos evitando la entrada incontrolada de aire, y recomienda válvulas de doble compuerta o alimentadores de tornillo.

### Polvo sobre disolvente inflamable: tres problemas juntos
Dentro hay vapor de disolvente, al caer el polvo hay nube y el polvo llega cargado. Las notas NTP 827 y 828 lo explican así:

- La chispa de un conductor aislado (un bidón metálico sobre suelo aislante, una persona) puede encender una nube de polvo.
- **Sacudir una bolsa de plástico recién vaciada en la boca de un reactor** es uno de los ejemplos de descarga que da la NTP 827.
- Un gas o vapor inflamable junto al polvo rebaja la energía necesaria para encenderlo, aunque el vapor esté por debajo de su límite inferior de explosividad. La mayoría de los vapores de disolventes se encienden con 0,2 a 1 mJ.

Las medidas:

1. **Tierra y conexión equipotencial de todo lo metálico:** reactor, tolva, embudo, bidón, pala. El documento del INSST de 2015 da como criterio general que la resistencia a tierra de las superficies conductoras no supere 1 MΩ.
2. **Tú también.** Con atmósferas que se encienden con menos de 30 mJ, las personas deben tener buena conducción a tierra: calzado y suelo adecuados (documento del INSST de 2015).
3. **Nada de plásticos aislantes.** Conectar a tierra un plástico aislante no le quita la carga. Con vapores inflamables se recomienda no usar bolsas ni recubrimientos no conductores, y no sacar la bolsa del bidón para sacudirla.
4. **Inertización.** Donde no se puede asegurar que no coincidan atmósfera explosiva y carga, la NTP 828 remite a las medidas clásicas, empezando por inertizar.
5. **Despacio.** La guía indica que limitar la velocidad de paso del material reduce la carga que se genera, y la NTP 29 pide limitar la caída libre para no formar nube. El ritmo lo fija tu procedimiento.

### Mover sólidos por la planta
| Sistema | Para qué sirve | Riesgo principal |
|---|---|---|
| Neumático en fase diluida (*dilute phase*) | Mucho gas y poco polvo, a alta velocidad | El que más carga genera; desgaste y rotura de granos |
| Neumático en fase densa (*dense phase*) | Poco gas y mucho polvo, en tapones lentos | Trabaja a más presión; atascos |
| Tornillo sinfín (*screw conveyor*) | Dosificar y mover distancias cortas | Piezas en movimiento; roce de la hélice |
| Cinta (*belt conveyor*) | Mover envases o graneles | Abierta: polvo; rodillos que rozan |
| Elevador de cangilones (*bucket elevator*) | Subir granel en vertical | Fricción de sus piezas; polvo dentro |
| Válvula rotativa (*rotary valve*) | Dosificar y separar dos equipos | Piezas en movimiento: nunca se mete la mano |

La NTP 828 dice que un flujo de alta densidad genera menos carga que uno con mucho aire y poco polvo. La guía advierte de que un transporte neumático a presión puede fugar por las juntas y formar nubes. La NTP 29 pide mantenimiento periódico de los elementos de fricción (cojinetes, hélices, cintas, cangilones) y cita las válvulas rotatorias como barrera para que una explosión no pase de un equipo a otro.

### Descargar equipos
- **Centrífuga.** Sale torta húmeda, a un contenedor o a una bolsa. Húmeda levanta poco polvo, pero lleva disolvente: vapores y tierra.
- **Filtro-secador.** El producto seco sale por la válvula lateral al contenedor acoplado. Es polvo fino y seco.
- **Secadero.** Descarga a bidones con bolsa o a un contenedor. Es polvo seco: extracción puesta y envase a tierra.

**Puentes en la tolva.** Si deja de salir producto y sabes que queda dentro, hay un puente o un «agujero de ratón» (*rathole*): solo baja el centro. Lo que no se hace: meter la mano o una barra por la boca con el equipo en marcha, asomarse a un equipo con nitrógeno, o golpear con una herramienta de acero. La guía recoge los golpes y la fricción entre metales como fuente de chispas. Lo que sí: los medios previstos en el equipo (vibrador, inyección de gas, agitador), el mazo que indique el procedimiento, y avisar si no basta.

### Explosiones de polvo
Hacen falta varias cosas a la vez. Según la guía del INSST y la NTP 29:

1. **Polvo combustible y fino.** Por encima de 0,5 mm la probabilidad de explosión es baja.
2. **En nube,** con concentración suficiente. Una nube explosiva suele ser tan densa que cuesta ver a más de un metro.
3. **Oxígeno** del aire.
4. **Una fuente de ignición** con energía suficiente.
5. **Un recinto cerrado.** Dentro de un equipo la presión no tiene por dónde salir; por eso hay paneles de venteo y discos de ruptura.

**La explosión secundaria.** La guía lo dice así: el polvo depositado puede ponerse en suspensión con ligeras corrientes de aire o por una explosión primaria, y provocar explosiones en cadena. La primera, pequeña, levanta el polvo de vigas y suelos; la segunda encuentra una nube que llena la sala.

Por eso **limpiar es una medida de seguridad.** Cualquier depósito de polvo que se vea a simple vista debe eliminarse. Y sin levantarlo: barrer y soplar son malas prácticas que crean la nube. Se aspira y se limpia en húmedo.

### Contención y exposición
Un líquido en una tubería no lo respiras; un polvo fino flota y va al aire que rodea tu cara. Por eso la NTP 1105 del INSST centra sus medidas en el polvo: confinar las operaciones que lo generan o poner **extracción localizada** (*local exhaust ventilation*) en el foco, y, para los productos más potentes, transferir sólidos solo con sistemas de contención (caja de guantes, cabina de pesada, aisladores flexibles, transporte neumático cerrado, válvula de mariposa partida). En las áreas donde se manipula principio activo en polvo pide un mínimo de 7 a 12 renovaciones de aire por hora, según la categoría. La guía de atmósferas explosivas pide situar la aspiración lo más cerca posible del foco. Las categorías y los límites están en «Exposición a productos químicos a fondo».

### Contaminación cruzada
El polvo que se escapa se posa en otro equipo o viaja en tu ropa. Si llega a otro producto, un paciente tomará algo que no debía. ICH Q7 pide:

- **Áreas dedicadas** para materiales muy sensibilizantes, como penicilinas o cefalosporinas (4.40), y a considerar para los de alta actividad o toxicidad (4.41).
- **Medidas para que personas y materiales no lleven contaminación** de un área dedicada a otra (4.42).
- **Ventilación y extracción** que controlen, entre otras cosas, el polvo y la presión del aire (4.21).
- **Equipos cerrados** siempre que sea apropiado; si se abren, precauciones (5.15).
- **Limpieza** del equipo no dedicado entre productos distintos (5.24) y equipo identificado con su contenido y su estado de limpieza (5.26).
- **Ropa limpia** y adecuada, que se cambia cuando toca (3.21).
- **Producción sin contaminar** con otros materiales (8.51), con especial cuidado tras la purificación (8.52).

En planta lo ves como esclusas (*airlocks*), cambio de ropa y etiquetas de «limpio» o «sucio». La NTP 1105 recomienda esclusas y vestuario de paso obligatorio para los productos más potentes.

### Balance de materia de un sólido
Lo que entra tiene que estar en algún sitio: envasado, en las muestras, en los filtros o pegado al equipo.

**Ejemplo 4.** Al secadero entran 150,0 kg de torta con un 20 % de humedad. Sólido seco: 150,0 × 0,80 = 120,0 kg. Se envasan 117,6 kg, las muestras suman 0,4 kg y del filtro de mangas se recuperan 0,8 kg. Queda en el equipo: 120,0 − 117,6 − 0,4 − 0,8 = 1,2 kg, un 1,0 %.

**Ejemplo 5: rendimiento** (*yield*). Si el rendimiento teórico era 125,0 kg: 117,6 / 125,0 × 100 = 94,1 %. Supón que la hoja da un rango esperado de 92 a 97 %: cumple.

ICH Q7 pide comparar el rendimiento real con el esperado en pasos designados, e investigar las desviaciones en pasos críticos (8.14). La **conciliación** (*reconciliation*) es cuadrar la cuenta: recibido = usado + devuelto + desechado. ICH Q7 admite que quede algo de un lote para el siguiente del mismo producto (los cristales húmedos del cesto de la centrífuga, lo pegado a un micronizador) si está controlado (8.50).

### Tamizado y molienda
Tamizar es pasar el polvo por una malla para romper grumos o retirar cuerpos extraños. Moler es romper las partículas. Las dos generan polvo y carga: en la tabla de la NTP 827 el tamizado es la operación que menos carga genera, y la molienda, el micronizado y el transporte neumático generan mucha más.

La NTP 1105 pide hacerlas con mecanismos que reduzcan las emisiones. Equipos, mallas y controles están en la lección «Molienda, micronización y tamizado».

### Qué vigila y qué anota el operador
1. Material, código y lote contra la hoja, antes de abrir nada.
2. Báscula: calibración vigente, comprobación diaria, tara.
3. Tierras: pinzas puestas y comprobadas; tipo de saca.
4. Oxígeno medido antes de cargar y después de cerrar.
5. Extracción en marcha y boca junto al foco.
6. Carga despacio; envases vacíos contados; bolsas sin sacudir.
7. Pesos reales de entrada y salida, con el código de la báscula.
8. Limpieza del polvo, sin barrer ni soplar.
9. Puentes, atascos, derrames o envases rotos: anotados y avisados.

Los números de esta lección sirven para entender. En planta manda siempre el procedimiento vigente (SOP): envases, tipo de saca, forma de carga, velocidad y límites son los de tu planta.
`,
  plant: `
Turno de mañana. Hay que cargar 120 kg del intermedio ficticio KV-31 al reactor R-205, que ya tiene 600 L de tolueno y está inertizado.

En la sala de pesadas SP-02, Itziar ya dejó ayer los seis bidones con bolsa interior, pesados en la báscula BS-14. Compruebas con ella cada etiqueta contra la hoja: nombre, código, lote y peso neto. La suma da 120,0 kg.

La hoja pide cargar por la tolva TV-205, con válvula de doble compuerta, sin abrir la boca de hombre. Conectas la pinza de tierra del primer bidón al punto de la tolva y el comprobador TT-205 da continuidad. Llevas el calzado antiestático. La extracción localizada está en marcha y su boca queda junto a la tolva.

Vuelcas el bidón despacio. La bolsa se queda dentro del bidón: no la sacas ni la sacudes. Cierras la compuerta de arriba, abres la de abajo y el polvo cae al reactor.

En el cuarto bidón deja de caer. Queda producto en la tolva: hay un puente. No metes la mano ni golpeas con la llave. Pulsas el vibrador de la tolva, como dice el procedimiento, y el polvo baja.

Al terminar cuentas los seis bidones vacíos. Aspiras el polvo de la tolva y del suelo con el aspirador de la zona y pasas un paño húmedo. El analizador AO-205 marca 0,9 % de oxígeno, por debajo del límite de la hoja.

Anotas pesos, horas, la lectura de oxígeno y el puente, y avisas a Unai, el jefe de turno.
`,
  batchRecord: `
En la hoja de producción (*batch record*) verás dos bloques.

**Pesada o dispensación**

- **Material**: nombre, código y lote, copiados de la etiqueta y comparados con la hoja.
- **Báscula**: su código (p. ej. BS-14), calibración vigente y comprobación diaria.
- **Pesos**: tara, bruto y neto reales, con su unidad, de cada envase, y la suma frente a la cantidad pedida y su tolerancia.
- **Etiqueta de cada envase fraccionado**: material, número de control, peso y, si procede, fecha de reevaluación.
- **Doble verificación**: firma de quien pesa y de quien comprueba, con fecha y hora.

**Carga del sólido**

- **Equipo**: reactor, tolva o sistema de carga usados, con su código.
- **Antes de cargar**: puesta a tierra comprobada (código del comprobador), oxígeno medido con su valor real, extracción en marcha.
- **Carga**: hora de inicio y de fin, número de envases cargados y de envases vacíos contados, peso total.
- **Después**: oxígeno tras cerrar, si la hoja lo pide; limpieza del polvo.
- **Incidencias**: puente, atasco, derrame, envase roto o peso que no cuadra, con el aviso al responsable de turno.

Al final de la etapa, el **rendimiento**: peso obtenido, rendimiento calculado y rango esperado. Se anota lo que marca la báscula, nunca el valor que «debería» salir.
`,
  terms: [
    { es: "Densidad aparente", en: "Bulk density", def: "Masa de un polvo dividida entre el volumen que ocupa tal como cae, contando el aire entre granos." },
    { es: "Densidad compactada", en: "Tapped density", def: "Densidad del polvo después de asentarlo a golpes. Siempre es mayor que la aparente." },
    { es: "Fluidez", en: "Flowability", def: "Facilidad con la que un polvo cae y se mueve. De flujo libre si cae solo; cohesivo si se pega." },
    { es: "Ángulo de reposo", en: "Angle of repose", def: "Ángulo de la ladera del cono que forma un polvo al verterlo. Cuanto más empinado, peor fluye." },
    { es: "Apelmazamiento", en: "Caking", def: "Formación de terrones por humedad, presión o tiempo de almacenamiento." },
    { es: "Puente o bóveda", en: "Bridging / arching", def: "Arco de polvo que se forma sobre la salida de una tolva y detiene la descarga." },
    { es: "Saca o big bag", en: "Flexible intermediate bulk container (FIBC)", def: "Saco grande de tejido para graneles. Se clasifica en los tipos A, B, C y D según su protección frente a la electricidad estática." },
    { es: "Tara", en: "Tare", def: "Peso del envase vacío, que se descuenta del peso bruto para obtener el neto." },
    { es: "Sala de pesadas", en: "Dispensing room / weighing room", def: "Sala donde se pesan y fraccionan los materiales de un lote, con control del polvo." },
    { es: "Válvula de doble mariposa", en: "Split butterfly valve (SBV)", def: "Válvula en dos mitades, una en el contenedor y otra en el equipo, que solo abre cuando están unidas." },
    { es: "Transporte neumático", en: "Pneumatic conveying", def: "Mover polvo por una tubería arrastrado por gas: en fase diluida (mucho gas, rápido) o en fase densa (poco gas, lento)." },
    { es: "Explosión secundaria", en: "Secondary dust explosion", def: "Explosión del polvo depositado que una primera explosión ha levantado y puesto en nube." },
    { es: "Contaminación cruzada", en: "Cross-contamination", def: "Llegada de un material o producto a otro distinto, por el aire, los equipos, la ropa o las personas." },
    { es: "Rendimiento", en: "Yield", def: "Cantidad de producto obtenida, comparada con la teórica o con la esperada." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Vas a cargar 90 kg de un polvo cuya densidad aparente es 0,45 kg/L. ¿Qué volumen ocupa?",
      answer: 200,
      tolerance: 0.01,
      unit: "L",
      explain: "Volumen = masa / densidad aparente = 90 / 0,45 = 200 L.",
    },
    {
      kind: "choice",
      q: "Vas a vaciar una saca (big bag) de polvo sobre un reactor con tolueno, en zona con vapores inflamables. Según el documento del INSST, ¿cuál sirve?",
      options: [
        "Una de tipo A, porque el reactor ya está puesto a tierra",
        "Una de tipo B, porque es antiestática y no pide tierra",
        "Una de tipo C, pero sin la pinza, para ir más deprisa",
        "Una de tipo C, con su toma de tierra bien conectada",
      ],
      answer: 3,
      explain: "Los tipos A y B no son aptos con sustancias inflamables en el ambiente. El tipo C sí, pero tiene que estar puesto a tierra al llenar y al vaciar; sin conectar es un conductor aislado.",
    },
    {
      kind: "number",
      q: "La hoja pide 172 kg de una materia prima que llega en sacos de 25 kg. ¿Cuántos sacos tienes que pedir al almacén como mínimo?",
      answer: 7,
      tolerance: 0.001,
      unit: "sacos",
      explain: "172 / 25 = 6,88. No se puede pedir una fracción de saco: se redondea hacia arriba, 7 sacos. Del séptimo se usan 22 kg.",
    },
    {
      kind: "choice",
      q: "Acabas de vaciar un bidón con bolsa de plástico en la boca de un reactor con disolvente. En la bolsa quedan restos pegados. ¿Qué haces?",
      options: [
        "Dejo la bolsa dentro del bidón y sigo el procedimiento",
        "Saco la bolsa y la sacudo bien sobre la boca del reactor",
        "Soplo la bolsa con aire comprimido para aprovecharlo",
        "Golpeo la bolsa contra el borde metálico de la boca",
      ],
      answer: 0,
      explain: "Sacudir una bolsa de plástico recién vaciada en la boca de un reactor es uno de los ejemplos de descarga electrostática de la NTP 827. La NTP 828 pide no sacar el recubrimiento del recipiente para sacudirlo.",
    },
    {
      kind: "number",
      q: "Un contenedor de 500 L va a recibir 240 kg de un producto seco de densidad aparente 0,60 kg/L. ¿Qué porcentaje del contenedor se llena?",
      answer: 80,
      tolerance: 0.01,
      unit: "%",
      explain: "Volumen = 240 / 0,60 = 400 L. Llenado = 400 / 500 × 100 = 80 %.",
    },
    {
      kind: "choice",
      q: "Estás descargando una tolva y deja de salir producto, aunque sabes que queda dentro. ¿Qué haces?",
      options: [
        "Meto el brazo por la boca de salida para deshacer el tapón",
        "Golpeo la pared de la tolva con una llave de acero grande",
        "Uso el vibrador o el medio previsto y, si no basta, aviso",
        "Me asomo por arriba para ver dónde se ha quedado el polvo",
      ],
      answer: 2,
      explain: "Es un puente. Se rompe con los medios previstos en el equipo y en el procedimiento. Ni manos dentro, ni golpes de acero (fuente de chispas), ni asomarse a un equipo que puede tener nitrógeno.",
    },
    {
      kind: "number",
      q: "A un secadero entran 80,0 kg de sólido seco. Se envasan 78,4 kg, las muestras suman 0,2 kg y del filtro de mangas se recuperan 0,6 kg. ¿Cuántos kg quedan en el equipo?",
      answer: 0.8,
      tolerance: 0.02,
      unit: "kg",
      explain: "Lo que entra menos todo lo que se ha contado: 80,0 − 78,4 − 0,2 − 0,6 = 0,8 kg.",
    },
    {
      kind: "choice",
      q: "Tras descargar el secadero queda una capa de polvo combustible bien visible sobre el equipo y el suelo. ¿Qué haces?",
      options: [
        "La dejo para el final de la campaña, que es poca cosa",
        "La aspiro y paso un paño húmedo, sin levantar nube",
        "La barro con un cepillo seco hacia el desagüe de la sala",
        "La soplo con aire comprimido para que no se vea nada",
      ],
      answer: 1,
      explain: "La guía del INSST pide eliminar cualquier depósito de polvo apreciable a simple vista y señala el barrido y el soplado como malas prácticas: levantan la nube. El polvo depositado es el combustible de una explosión secundaria.",
    },
    {
      kind: "number",
      q: "El rendimiento teórico de una etapa es 85,0 kg y se obtienen 78,2 kg de producto seco. ¿Cuál es el rendimiento en porcentaje?",
      answer: 92,
      tolerance: 0.01,
      unit: "%",
      explain: "Rendimiento = obtenido / teórico × 100 = 78,2 / 85,0 × 100 = 92 %.",
    },
    {
      kind: "choice",
      q: "Tienes que pesar una materia prima en una pesada marcada como crítica. Según ICH Q7 (apartado 8.12), ¿qué hace falta?",
      options: [
        "Que la pese yo solo dos veces y anote la media de ambas",
        "Que el almacén la mande ya pesada y yo copie su etiqueta",
        "Que haya un testigo o un control equivalente de la pesada",
        "Que anote el peso al acabar el turno, con todo ya cargado",
      ],
      answer: 2,
      explain: "ICH Q7 8.12: las operaciones críticas de pesada, medida o fraccionamiento deben hacerse ante un testigo o someterse a un control equivalente, y antes de usar un material se verifica que es el que especifica la hoja.",
    },
  ],
};
