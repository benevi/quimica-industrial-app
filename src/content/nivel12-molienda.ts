import type { Lesson } from "./types";

export const moliendaAFondo: Lesson = {
  slug: "molienda-a-fondo",
  level: 12,
  order: 14.5,
  title: "Molienda y tamizado a fondo: tamaño de partícula, molinos y polvo combustible",
  titleEn: "Milling and sieving in depth",
  minutes: 40,
  summary:
    "Por qué se muele un principio activo, las cuatro maneras de romper un cristal y los molinos que las usan, cómo se trabaja con un tamiz y por qué se revisa la malla antes y después, qué cambia en el producto al molerlo, por qué el polvo fino explota (pentágono, energía mínima de ignición, Kst y clases St), qué medidas lo evitan, cómo se contiene un activo potente y qué vigila y anota el operador.",
  body: `
En «Molienda, micronización y tamizado» viste qué molinos hay y qué riesgos tienen. En «Tamaño de partícula a fondo», cómo mide el laboratorio el d10, el d50 y el d90. Aquí verás cómo rompe un cristal cada molino, qué le pasa al producto al molerlo, por qué su polvo puede explotar y qué vigilas y anotas tú. Cómo se pesa, se carga y se contiene un polvo está en «Manejo de sólidos a fondo».

Una micra o micrómetro (µm) es la milésima parte de un milímetro.

### Por qué se muele un principio activo
Tu planta fabrica el principio activo (*API, active pharmaceutical ingredient*). La planta de formulación, tu cliente, lo mezcla con excipientes y hace los comprimidos. Le importa el tamaño de los granos por tres razones.

**1. La disolución.** El activo hace efecto cuando se disuelve, y lo que se disuelve es la superficie de cada grano. Una cuenta:

- Una esfera de 100 µm partida en esferas de 10 µm da 10 × 10 × 10 = **1000 esferas** con el mismo volumen.
- La superficie va con el cuadrado del diámetro. Una de 100 µm: 100 × 100 = 10 000. Mil de 10 µm: 1000 × 10 × 10 = 100 000.
- Mismo peso, **diez veces más superficie**.

ICH Q6A (apartado 3.3.1 b) dice que en algunos principios activos el tamaño puede afectar mucho a la velocidad de disolución, a la biodisponibilidad (cuánto fármaco llega a la sangre) o a la estabilidad.

**2. La uniformidad de contenido** (*content uniformity*): que cada comprimido lleve la misma dosis. Es una de las razones del árbol de decisión n.º 3 de Q6A para fijar un límite de tamaño. Piensa en pasas en una masa: si son enormes, un trozo lleva tres y otro ninguna; picadas, todos llevan casi lo mismo.

**3. La especificación.** Por eso la especificación puede traer un límite, por ejemplo «D90 ≤ 120 µm» (valor de ejemplo). Moler y micronizar entran en las buenas prácticas de ICH Q7 (apartado 1.3).

También se muele o se tamiza para **romper grumos** (*delumping*) del secadero («El secado a fondo»).

### Cuatro maneras de romper un cristal
La guía de la FDA (la agencia del medicamento de Estados Unidos) *SUPAC: Manufacturing Equipment Addendum* (2014), sobre cambios de equipos (SUPAC, *scale-up and post-approval changes*), define cuatro mecanismos:

| Mecanismo | En inglés | Qué hace, según la FDA | Para imaginarlo |
|---|---|---|---|
| **Impacto** | *Impact* | Fuerza instantánea perpendicular a la superficie, por choque con otra partícula o con el molino | Un martillazo |
| **Atrición** | *Attrition* | Fuerza paralela a la superficie | Frotar con una lija |
| **Compresión** | *Compression* | Fuerza aplicada despacio, hacia el centro de la partícula | Un cascanueces |
| **Corte** | *Cutting* | Fuerza de cizalla | Unas tijeras |

Para la guía, una «partícula» es también un grupo de granos pegados, un **aglomerado** (*agglomerate*).

### Los molinos, uno a uno
| Molino | En inglés | Clase en la guía SUPAC | Cómo rompe |
|---|---|---|---|
| **De martillos** | *Hammer mill* | De impacto | Un rotor con martillos golpea el producto a gran velocidad |
| **De púas** | *Pin mill* | De impacto, subclase de púas o discos | Las partículas chocan contra púas montadas en discos que giran |
| **Cónico o calibrador** | *Cone mill* | De tamiz, con impulsor giratorio | Un impulsor frota el producto contra una criba; sobre todo rompe grumos |
| **De chorro de aire o micronizador** | *Jet mill, micronizer* | De energía de fluido | Un gas a gran velocidad lanza las partículas unas contra otras |

Lo que añade la guía:

- **Impacto**: las subclases se distinguen por los cabezales, los revestimientos de la cámara y los **clasificadores** (*classifiers*), las piezas que deciden qué partícula ya puede salir.
- **Tamiz** (*screening mills*): rompen por atrición forzada a través de una criba; a esto también se le llama desaglomerar.
- **Energía de fluido** (*fluid energy mills*): también se le llama **micronizar** (*micronizing*) y **no tienen piezas móviles**.
- Hay además molinos de corte, de compresión y de bolas (*tumbling mills*).

Los catálogos dan el tamaño que consigue cada molino. No van aquí porque no los he podido comprobar en una fuente oficial gratuita; manda tu especificación. Los parámetros de un micronizador están en «Tamaño de partícula a fondo».

### Tamices y tamizadoras
Una **tamizadora vibratoria** (*vibratory sifter*) hace vibrar una malla para que el polvo avance y lo fino pase. Sirve para separar por tamaño y para retener lo que no debe estar en el producto: un grumo duro, un cuerpo extraño.

**La malla.** El texto de tamizado armonizado por las farmacopeas europea, japonesa y estadounidense (que reproduce gratis la EMA en el anexo 12 de ICH Q4B) describe los **tamices** (*sieves*) del laboratorio: malla de hilo tejido con agujeros casi cuadrados, de acero inoxidable o, menos recomendable, de latón. La abertura se da en **micrómetros**; el **número de malla** (*mesh number*) sale en su tabla solo para convertir, y cuanto mayor, más fino: malla 20 = 850 µm, malla 60 = 250 µm, malla 100 = 150 µm.

**La integridad.** El mismo texto pide examinar los tamices **antes de usarlos**, buscando deformaciones y roturas, **sobre todo en la unión de la malla con el marco**. En planta, con más motivo: una malla rota deja pasar grumos y suelta hilo metálico al producto. ICH Q7 llama contaminación a la entrada no deseada de impurezas o de **materia extraña** (*foreign matter*). Por eso se comprueba **antes y después**: si al terminar aparece rota, no sabes cuándo se rompió, y todo lo tamizado desde la última comprobación buena queda en investigación.

Cómo se comprueba (a contraluz, contando hilos, con una prueba concreta) no lo dice ninguna guía gratuita que haya leído: lo dice tu procedimiento.

**Imanes.** La NTP 29 del Instituto Nacional de Seguridad y Salud en el Trabajo (INSST) recomienda separadores magnéticos que quiten trozos de metal antes del molino: un metal golpeado dentro es una chispa.

### Qué le cambia al producto la molienda
1. **Más finos.** Parte se va con el aire al **filtro de mangas** (*bag filter*), mangas de tela que limpian el aire antes de soltarlo. Los finos fluyen peor.
2. **Calor.** La energía de cada golpe y cada roce acaba en calor. Un molino sobrecargado, o con un cojinete gastado, calienta el producto.
3. **Otra forma cristalina.** La guía de la FDA sobre polimorfismo (2007) cita la molienda y la micronización entre los procesos que pueden cambiar la forma cristalina de un activo («Polimorfismo, sales y solvatos a fondo»).
4. **Carga electrostática.** La NTP 827 del INSST da la carga típica por kilo de polvo:

| Operación | Carga (culombios por kilo) |
|---|---|
| Tamizado | de 10⁻¹¹ a 10⁻⁹ |
| Trituración y molienda | de 10⁻⁷ a 10⁻⁶ |
| Micronizado | de 10⁻⁷ a 10⁻⁴ |

Con los valores más altos: 10⁻⁴ / 10⁻⁹ = 100 000. Micronizar puede cargar el polvo cien mil veces más que tamizar.

### El gran riesgo: la explosión de polvo
Un azucarillo arde mal; el azúcar en polvo flotando arde de golpe, porque cada mota está rodeada de oxígeno. La NTP 427 del INSST incluye los productos farmacéuticos entre los polvos que pueden explotar.

**El pentágono.** La agencia de seguridad laboral de Estados Unidos (OSHA) llama **pentágono de la explosión de polvo** (*dust explosion pentagon*) a las cinco condiciones que deben darse a la vez, las mismas que enumera el INSST:

1. **Combustible**: polvo que arde y es fino (por encima de 0,5 mm la probabilidad es baja).
2. **Dispersión**: el polvo en nube.
3. **Oxígeno**.
4. **Ignición** con energía suficiente.
5. **Confinamiento**: un recinto cerrado.

Quita una y no hay explosión. Un molino junta tres: fabrica polvo fino, lo pone en nube y lo encierra. La guía técnica del INSST pone el interior de los molinos como ejemplo de zona 20 (atmósfera explosiva permanente), y los talleres de molienda y los filtros de mangas como ejemplos de zona 22.

**Basta muy poco.** Según la NTP 402, en muchos polvos la concentración mínima que explota está entre 0,01 y 0,05 kg/m³. Valor de ejemplo: 0,03 kg/m³ en una cámara de 2 m³ son 0,03 × 2 = 0,06 kg: **60 gramos** en el aire. Y lo grueso no protege: la nota avisa de que un poco de fino formado por roce puede bastar.

**Qué pasa dentro.** Una deflagración: un frente de llama más lento que el sonido que dura, según la NTP 396, de 100 a 200 milisegundos. En un recinto cerrado la presión puede subir a diez o más veces la absoluta inicial.

**La explosión secundaria.** La primera, pequeña, levanta el polvo de suelos y vigas, y la segunda encuentra una nube que llena el edificio. La NTP 396 dice que las secundarias llegan a destruir instalaciones enteras. Es lo que la Junta de Seguridad Química de Estados Unidos (CSB) concluyó del caso de la refinería de Imperial Sugar en 2008: polvo de azúcar acumulado, una primera explosión en un transportador cerrado y explosiones secundarias por los edificios de envasado.

### Energía mínima de ignición, Kst y clases St
**Energía mínima de ignición** (*minimum ignition energy*), EMI: la chispa más pequeña que enciende la nube. Según la NTP 827 va, en los polvos, de menos de 1 mJ (milijulio) a más de 10 J; los vapores de casi todos los disolventes se encienden con 0,2 a 1 mJ.

La chispa de una pieza metálica aislada vale E = ½ × C × U², con C su capacidad eléctrica y U su tensión. Valores de ejemplo: un aro de tamiz sin tierra de 100 pF (picofaradios) cargado a 12 000 V:

E = 0,5 × 100 × 10⁻¹² × 12 000 × 12 000 = 0,0072 J = **7,2 mJ**

Por eso todo lo metálico va a tierra. La estática a fondo está en «Atmósferas explosivas a fondo».

**La violencia: el Kst.** La EMI dice lo fácil que es encender el polvo; el **Kst**, lo violenta que es la explosión. En el laboratorio se hace explotar el polvo en un recipiente normalizado (la NTP 427 cita los de 20 litros y 1 m³) y se mide lo más rápido que sube la presión, el **gradiente máximo de presión** (*maximum rate of pressure rise*), en bar/s. En un recipiente grande sube más despacio, así que se corrige con la «ley cúbica» de las NTP 402 y 427:

**Kst = (dP/dt)máx × V^(1/3)**, con V en m³ y Kst en bar·m/s («St» viene de *Staub*, polvo en alemán)

**Cuenta resuelta.** Valores de ejemplo: en 20 litros (0,020 m³) la presión sube como máximo a 700 bar/s. La raíz cúbica de 0,020 es 0,2714, y Kst = 700 × 0,2714 = **190 bar·m/s**.

| Clase (NTP 402, tabla 2) | Kst (bar·m/s) | Explosividad |
|---|---|---|
| St 0 | 0 | Nula |
| St 1 | de 0 a 200 | Débil o moderada |
| St 2 | de 201 a 300 | Fuerte |
| St 3 | más de 300 | Muy fuerte |

El ejemplo es St 1. «Débil» no es inofensiva: según la NTP 427, sin venteo la presión puede llegar a 10 bar manométricos o más, y casi ninguna instalación lo aguanta. La misma nota dice que el polvo de carbón es menos explosivo que la aspirina en polvo, y esta menos que el aluminio.

**Moler cambia el Kst.** La NTP 403 cuenta un caso real: un sistema de supresión se diseñó con muestras poco representativas, que dieron 72 bar·m/s. Siete meses después hubo una explosión en la molienda de cebada malteada, y el producto ya molido dio 151: el doble. Por eso la NTP 427 pide ensayar muestras con la sequedad y la finura del proceso.

### Las medidas, aplicadas al molino
El orden general está en «Atmósferas explosivas a fondo». En la molienda:

- **Quitar oxígeno o nube.** Moler con nitrógeno hasta un oxígeno por debajo del límite propio de ese polvo, que se mide en el laboratorio (NTP 29; los ciclos, en «Inertización a fondo»). La NTP 402 añade que por debajo de unos 10 mbar las explosiones de polvo ya no son posibles y que con una humedad del orden del 50 % no se forman mezclas explosivas.
- **Quitar la ignición** (NTP 29): todas las masas metálicas unidas y a tierra, separadores magnéticos, mantenimiento de cojinetes y piezas que rozan, corte por sobreintensidad en motores que se pueden sobrealimentar y equipos ATEX (para atmósferas explosivas) de la categoría de la zona.
- **Atenuar** (NTP 396): **venteo** (*explosion venting*), una membrana que se rompe y suelta presión, llamas y polvo ardiendo hacia una zona segura; **supresión** (*explosion suppression*), que detecta la explosión que empieza y descarga un extintor en milisegundos; **aislamiento** (*explosion isolation*), válvulas de cierre rápido o barreras químicas para que la llama no viaje por las tuberías.

La NTP 427 dice que el venteo no se debe usar si el polvo es excesivamente tóxico o su Kst pasa de 300; entonces pide otras medidas con asesoramiento de especialistas. Soltar una nube de principio activo potente al exterior puede no ser aceptable.

**Limpiar sin soplar.** La guía del INSST pone el soplado y el barrido entre las malas prácticas que crean atmósferas explosivas. Se aspira y después se limpia en húmedo.

### El polvo que respiras
Moler y micronizar dan el polvo más fino del proceso, el que más flota. La NTP 1105 del INSST, para la industria farmacéutica, pide en sus categorías de más riesgo:

- Moler, tamizar y micronizar con **mecanismos reductores de emisiones**, y transferir el sólido con sistemas de contención.
- **Filtros HEPA** (*high efficiency particulate air*, de alta eficacia para partículas) de clase 13 o superior en la salida del aire, de cambio seguro y con **prueba de integridad en cada cambio** en las categorías más altas.
- Nada de barrer: aspirar con filtro HEPA antes de limpiar en húmedo y, en las categorías 3B y 4, nada de aire ni agua a alta presión.

Cambiar mangas, abrir el molino o desmontar la criba son los momentos de más exposición: ahí van el equipo de protección individual (EPI) y la extracción que fije la evaluación de riesgos («Exposición a productos químicos a fondo» y «Los equipos de protección individual a fondo»).

### Limpiar entre lotes
Un molino tiene muchos rincones: cámara, criba, rotor, juntas, mangas. ICH Q7 pide procedimientos con instrucciones para desmontar y montar cuando haga falta (5.21) y limpiar el equipo no dedicado entre productos distintos (5.24). Admite que pase algo al siguiente lote **del mismo producto** si está controlado, con el ejemplo del **residuo pegado a la pared de un micronizador** (8.50), y reconoce que el frotis (*swab*) puede ser poco práctico en equipos complicados como los micronizadores (12.73). Límites y validación: «Limpieza de equipos y validación de limpieza».

### Qué vigila el operador
| Lo que ves | Qué te dice | Qué haces |
|---|---|---|
| **Velocidad** del rotor o presión del gas | Fija el tamaño final | La de la hoja; no se sube para ir más rápido |
| **Caudal de alimentación** | Mucho de golpe atasca y calienta | El ritmo de la hoja |
| **Corriente del motor** | Si sube, el molino está sobrecargado | Bajar la alimentación según el procedimiento y avisar |
| **Temperatura** del producto | Calor de la molienda | Anotar; si pasa del límite, parar y avisar |
| **Presión diferencial del filtro de mangas** | Sube despacio si se tapan; si cae de golpe, puede haber una manga rota | Avisar; con una caída brusca, parar según el procedimiento |
| **Ruido o vibración** nuevos | Cuerpo extraño o cojinete gastado: fricción y posible chispa | Parar y avisar; no abrir en marcha |
| **Oxígeno**, si se muele con nitrógeno | Inertización correcta | El valor real, con hora |

El **rendimiento** (*yield*) es lo que sale entre lo que entra; lo que falta está en el filtro, en las muestras o pegado al equipo. ICH Q7 (8.14) pide compararlo con el esperado e investigar las desviaciones en pasos críticos. El tamaño lo mide el laboratorio como control en proceso (*in-process control*, IPC) o ensayo final, por ejemplo por difracción láser: d10, d50 y d90, en «Tamaño de partícula a fondo».

Los números de esta lección sirven para entender. En planta manda siempre el procedimiento vigente (SOP, *standard operating procedure*): molino, criba, velocidades, límites y comprobación de la malla son los de tu hoja.
`,
  plant: `
Lote ficticio FX-101, ya seco en el secadero SD-301. La hoja pide molerlo en el molino de púas ML-501 con nitrógeno, pasarlo por la tamizadora TZ-502 con malla de 500 µm y dejarlo con D90 ≤ 120 µm (valor de ejemplo).

Antes de empezar compruebas lo que pide la hoja: equipo limpio con su etiqueta, pinzas de tierra puestas, malla de la TZ-502 íntegra según el procedimiento, imán de la tolva limpio. Inertizas el ML-501 y el analizador marca 3,1 % de oxígeno, con un límite de ejemplo del 5 %: lo anotas con la hora.

Entran 120,0 kg. A la media hora la presión diferencial del filtro de mangas FM-503 cae de golpe y el panel da alarma. Paras la alimentación según el procedimiento y avisas. Mantenimiento encuentra una manga despegada de su anillo: el polvo estaba pasando a la salida. Se cambia con la protección que pide la evaluación de riesgos y se registra como incidencia.

Al terminar salen 117,4 kg. Del filtro se recuperan 1,4 kg y las muestras suman 0,2 kg. Faltan 120,0 − 117,4 − 1,4 − 0,2 = 1,0 kg, pegados al molino. Rendimiento: 117,4 / 120,0 × 100 = 97,8 %.

Revisas la malla de la TZ-502 otra vez: íntegra. El laboratorio da D10 = 9 µm, D50 = 41 µm y D90 = 108 µm: cumple. Calidad revisa la incidencia del filtro antes de decidir sobre el lote.
`,
  batchRecord: `
En la hoja de producción (*batch record*) de una molienda verás instrucciones y casillas para:

- **Equipos**: código del molino, de la tamizadora y del filtro de mangas, con su estado de limpieza (etiqueta, producto anterior).
- **Criba y malla**: abertura en µm y número o identificación de la pieza; **comprobación de integridad antes y después**, con hora y firma, y la del imán o el detector de metales si la línea lo tiene.
- **Seguridad**: pinzas de tierra comprobadas; oxígeno medido si se muele con nitrógeno, con el valor real y la hora.
- **Parámetros**: velocidad del rotor o presión del gas, caudal de alimentación, temperatura; a veces, lecturas cada cierto tiempo.
- **Tiempos**: hora de inicio y de fin, y de cada parada.
- **Pesos**: entrada, salida, lo recuperado del filtro, las muestras, con el código de la báscula; **rendimiento** calculado y comparado con el rango esperado.
- **Muestras para el control en proceso (IPC)**: punto, hora, quién; el resultado llega como d10, d50 y d90 en µm y se compara con el límite.
- **Incidencias**: alarmas, cambios de manga, malla dañada, ruidos, con hora y aviso al responsable.

Se anota lo que marca el instrumento, no lo esperado.
`,
  terms: [
    { es: "Molienda", en: "Milling", def: "Reducción del tamaño de partícula de un sólido por impacto, atrición, compresión o corte." },
    { es: "Atrición", en: "Attrition", def: "Reducción de tamaño por una fuerza paralela a la superficie de la partícula, como al frotar con una lija." },
    { es: "Molino de impacto", en: "Impact mill", def: "Molino que rompe las partículas por choque mecánico a gran velocidad; los de martillos y los de púas lo son." },
    { es: "Molino de tamiz o cónico", en: "Screening mill / cone mill", def: "Molino que hace pasar el producto a través de una criba con un impulsor; se usa sobre todo para romper grumos." },
    { es: "Micronizador", en: "Jet mill / micronizer", def: "Molino de energía de fluido, sin piezas móviles: un gas a gran velocidad hace chocar y rozar las partículas entre sí." },
    { es: "Clasificador", en: "Classifier", def: "Parte del molino que decide qué partículas son ya bastante pequeñas para salir." },
    { es: "Tamizadora vibratoria", en: "Vibratory sifter", def: "Equipo que hace vibrar una malla para separar por tamaño o retener grumos y cuerpos extraños." },
    { es: "Integridad de la malla", en: "Screen integrity", def: "Estado de la malla sin roturas ni deformaciones; se comprueba antes y después de usarla." },
    { es: "Filtro de mangas", en: "Bag filter", def: "Filtro de mangas de tela que limpia de polvo el aire que sale del molino; su presión diferencial indica si se tapa o se rompe." },
    { es: "Pentágono de la explosión de polvo", en: "Dust explosion pentagon", def: "Las cinco condiciones de una explosión de polvo: combustible, dispersión, oxígeno, ignición y confinamiento." },
    { es: "Energía mínima de ignición", en: "Minimum ignition energy (MIE)", def: "Energía de la chispa más pequeña capaz de encender una nube de polvo o una mezcla de vapor en su concentración más fácil." },
    { es: "Kst", en: "Kst / deflagration index", def: "Medida de la violencia de la explosión de un polvo: gradiente máximo de presión por la raíz cúbica del volumen, en bar·m/s." },
    { es: "Clase de explosión St", en: "Dust explosion class (St)", def: "Clasificación de los polvos por su Kst: St 0 nula, St 1 hasta 200, St 2 de 201 a 300 y St 3 más de 300 bar·m/s." },
    { es: "Supresión de explosiones", en: "Explosion suppression", def: "Sistema que detecta una explosión que empieza y descarga un agente extintor en milisegundos." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Entran al molino 86,0 kg de producto seco y se envasan 84,6 kg de producto molido. ¿Cuál es el rendimiento de la molienda?",
      answer: 98.4,
      tolerance: 0.005,
      unit: "%",
      explain: "Rendimiento = 84,6 / 86,0 × 100 = 98,4 %. Lo que falta está en el filtro, en las muestras o pegado al equipo.",
    },
    {
      kind: "number",
      q: "En el ensayo de un polvo en un recipiente de 20 litros (0,020 m³, cuya raíz cúbica es 0,2714) la presión sube como máximo a 600 bar/s. ¿Cuál es su Kst en bar·m/s? Redondea a número entero.",
      answer: 163,
      tolerance: 0.01,
      unit: "bar·m/s",
      explain: "Kst = (dP/dt)máx × V^(1/3) = 600 × 0,2714 = 163 bar·m/s. Es un polvo de clase St 1.",
    },
    {
      kind: "number",
      q: "Una pieza metálica sin conectar a tierra tiene una capacidad de 200 pF (200 × 10⁻¹² F) y se carga a 8000 V. ¿Qué energía tendría su chispa, en milijulios? Usa E = ½ × C × U².",
      answer: 6.4,
      tolerance: 0.01,
      unit: "mJ",
      explain: "E = 0,5 × 200 × 10⁻¹² × 8000 × 8000 = 0,0064 J = 6,4 mJ. Sobra para encender el vapor de casi cualquier disolvente, que se enciende con 0,2 a 1 mJ.",
    },
    {
      kind: "number",
      q: "Una partícula esférica de 60 µm se parte en esferas de 20 µm con el mismo volumen total. ¿Por cuántas veces se multiplica la superficie? (Volumen proporcional al diámetro al cubo y superficie al diámetro al cuadrado.)",
      answer: 3,
      tolerance: 0.01,
      unit: "veces",
      explain: "Salen (60 / 20) × (60 / 20) × (60 / 20) = 27 esferas. Superficie: 27 × 20 × 20 = 10800 frente a 60 × 60 = 3600. 10800 / 3600 = 3 veces más superficie.",
    },
    {
      kind: "number",
      q: "De un lote de 60,0 kg que pasa por el micronizador se recuperan 0,9 kg del filtro de mangas. ¿Qué porcentaje del lote ha ido a parar al filtro?",
      answer: 1.5,
      tolerance: 0.01,
      unit: "%",
      explain: "0,9 / 60,0 × 100 = 1,5 %. Es polvo muy fino: cuenta para el balance y es el que más fácil se respira y se dispersa.",
    },
    {
      kind: "choice",
      q: "El informe de seguridad de un principio activo da un Kst de 230 bar·m/s. ¿En qué clase de explosión de polvo está, según la tabla de la NTP 402?",
      options: [
        "St 1, explosividad débil o moderada",
        "St 0, explosividad nula",
        "St 3, explosividad muy fuerte",
        "St 2, explosividad fuerte",
      ],
      answer: 3,
      explain: "St 2 va de 201 a 300 bar·m/s y se califica de fuerte. St 1 llega hasta 200 y St 3 empieza por encima de 300.",
    },
    {
      kind: "choice",
      q: "Terminas de tamizar un lote y, al revisar la malla como pide la hoja, ves un desgarro junto al marco. La revisión del principio estaba bien. ¿Qué haces?",
      options: [
        "Lo anoto, aviso al responsable y el producto tamizado queda pendiente de investigación",
        "Cambio la malla, vuelvo a tamizar el lote entero y no hace falta anotar la rotura",
        "Lo anoto como correcto, porque al empezar la malla estaba íntegra y se rompió al final",
        "Saco a mano los trozos de hilo que vea en el producto y sigo con el siguiente lote",
      ],
      answer: 0,
      explain: "No sabes cuándo se rompió: todo lo tamizado desde la última comprobación buena puede llevar hilo metálico o grumos. Se registra y decide Calidad.",
    },
    {
      kind: "choice",
      q: "Al acabar el turno hay una capa fina de polvo de producto sobre el molino y las bandejas. ¿Cómo se limpia?",
      options: [
        "Con aire comprimido, que la quita deprisa y no deja nada en los rincones",
        "Con aspirador apto para la zona y después en húmedo, como diga el procedimiento",
        "Barriendo con escoba hacia el sumidero y luego pasando una bayeta seca",
        "Se deja hasta la limpieza general de la semana, porque es poca cantidad",
      ],
      answer: 1,
      explain: "Soplar o barrer levanta la nube que alimenta una explosión secundaria y te expone al activo. Se aspira y luego se limpia en húmedo.",
    },
    {
      kind: "choice",
      q: "Durante la micronización, la presión diferencial del filtro de mangas, que iba subiendo poco a poco, cae de golpe casi a cero. ¿Qué es lo más probable?",
      options: [
        "Las mangas se han limpiado solas y el filtro funciona mejor que antes",
        "El producto ha dejado de tener finos y ya no llega polvo al filtro",
        "Una manga se ha roto o soltado y el polvo está pasando sin filtrar",
        "El sensor de presión diferencial necesita solo una recalibración",
      ],
      answer: 2,
      explain: "Si el aire ya no encuentra la resistencia de la tela, pasa sin filtrar. Se avisa y se para según el procedimiento: es exposición y pérdida de producto.",
    },
    {
      kind: "choice",
      q: "Según la guía SUPAC de la FDA, ¿cómo reduce el tamaño un molino de energía de fluido o micronizador?",
      options: [
        "Con martillos que giran a gran velocidad dentro de una cámara con criba",
        "Apretando el producto despacio entre dos rodillos que giran en sentido contrario",
        "Con un impulsor que frota el producto contra una criba en forma de cono",
        "Con choques y roces entre partículas lanzadas por gas, sin piezas móviles",
      ],
      answer: 3,
      explain: "La guía dice que reduce el tamaño por impacto y atrición entre partículas a gran velocidad, que también se llama micronizar y que no tiene piezas móviles.",
    },
  ],
};
