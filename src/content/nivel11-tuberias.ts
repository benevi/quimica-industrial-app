import type { Lesson } from "./types";

export const tuberiasYValvulasAFondo: Lesson = {
  slug: "tuberias-y-valvulas-a-fondo",
  level: 11,
  order: 2.5,
  title: "Tuberías y válvulas a fondo: materiales, uniones, tipos de válvula y alineación de líneas",
  titleEn: "Piping and valves in depth",
  minutes: 38,
  summary:
    "Qué significan DN y PN, por qué se elige cada material, cómo sellan las bridas, las soldaduras y los clamps y por qué fallan las juntas, qué hace cada válvula y en qué posición está abierta, por qué una válvula automática falla abierta o cerrada, cómo se rotulan las tuberías y cómo se alinea una línea antes de un trasvase sin mandar el producto al sitio equivocado.",
  body: `
Esta lección amplía «Tuberías, válvulas y conexiones». El golpe de ariete está en «Fluidos a fondo» y la lista de válvulas de un alineamiento en «Leer un P&ID a fondo». Aquí verás de qué está hecho el tubo, por dónde fuga, cómo funciona cada válvula por dentro y qué haces con las manos al mover producto. Códigos y cifras de los ejemplos son **valores de ejemplo**, salvo que se diga de dónde salen.

### DN y PN: dos números que verás en todas partes
**Diámetro nominal** (*nominal size*, **DN**). La Directiva europea de equipos a presión (2014/68/UE, artículo 2) lo define como una cifra de identificación del tamaño, común a todos los elementos de un sistema de tuberías. Y añade algo importante: es **un número redondeado de referencia, sin relación estricta con las dimensiones de fabricación**. Se escribe DN seguido de un número: DN25, DN50, DN80.

Traducido: DN50 es una «talla», como la 42 de un zapato, para que tubo, válvula, brida y junta encajen. El agujero no mide exactamente 50 mm: depende del grosor de la pared. Para calcular un volumen, el diámetro interior real sale de las tablas del tubo.

**Presión nominal** (*nominal pressure*, **PN**). Es la «talla» de presión de bridas, válvulas y accesorios: PN10, PN16, PN40. Cuanto mayor el número, más presión aguanta la pieza. El libro de texto de instrumentación de Tony Kuphaldt explica lo mismo para las clases de presión americanas (150, 300, 600...) y da dos ideas que valen igual para el PN:

- **La presión admisible baja al subir la temperatura**, porque los metales se debilitan en caliente.
- **Las piezas que se unen tienen que ser de la misma clase y del mismo tamaño**, y la junta tiene que ser la adecuada para esa clase. Una brida de clase baja atornillada a una de clase alta es el punto débil de toda la línea.

En la placa de un equipo verás otras dos siglas que define la misma Directiva: **PS**, la presión máxima admisible para la que está diseñado, y **TS**, las temperaturas máxima y mínima admisibles. La Directiva aclara además que la presión de la que habla es **manométrica** y que el vacío se expresa con número negativo.

### Materiales: por qué cada uno
La guía ICH Q7 pide que las superficies en contacto con materias primas, intermedios o principios activos **no alteren su calidad** (apartado 5.11). Por eso el material se elige por el líquido que va a llevar.

| Material | Por qué se usa | Lo que tienes que respetar |
|---|---|---|
| Acero inoxidable 316L | Resiste la corrosión gracias al cromo, que forma una capa protectora | Los cloruros y los ácidos pueden atacarlo (lección «Oxidación y reducción a fondo») |
| Acero al carbono | Es el acero corriente, sin esa capa | Se oxida; con ácidos se disuelve (misma lección) |
| Tubería revestida de PTFE (politetrafluoroetileno, el teflón; *PTFE-lined*) | Tubo de acero por fuera para aguantar la presión y una funda de PTFE por dentro que aguanta productos muy corrosivos | No se usa fuera de sus límites de vacío y temperatura: los da el fabricante |
| Acero vitrificado (*glass-lined*) | Capa de vidrio sobre acero: resiste casi todos los ácidos | Choque térmico y golpes (lección «El reactor a fondo») |
| Vidrio | Resiste muchos productos y deja ver el líquido | Es frágil: no se golpea ni se aprieta de más |

La guía de la Organización Mundial de la Salud sobre agua para uso farmacéutico (TRS 1033, anexo 3, 2021) pide materiales que no cedan ni absorban sustancias y que resistan la corrosión, y recomienda en general el inoxidable 316L. De las tuberías revestidas de PTFE solo hay aquí información de fabricantes vista en un buscador (la funda es el punto débil en vacío): por eso no se dan cifras.

### Uniones: soldadura, bridas y clamp
**Soldadura** (*welding*). Los dos tubos se funden y quedan como una pieza. La Directiva de equipos a presión la llama **unión permanente**: solo se separa rompiéndola. No tiene junta que se gaste. La guía de la Organización Mundial de la Salud (OMS) pide para el agua farmacéutica soldadura orbital (una máquina que gira alrededor del tubo) con registros de cada soldadura.

**Brida con junta** (*flange and gasket*). Dos anillos de metal, uno en cada extremo, se atornillan con una junta en medio. Según Kuphaldt, la junta es de un material más blando que la brida y, al apretar los tornillos, se aplasta y tapa todos los caminos por donde podría salir el líquido. Se puede desmontar: por eso va donde hay equipos que se quitan para mantenimiento.

**Clamp sanitario** (*sanitary clamp*). Dos bridas pequeñas, lisas, unidas por una abrazadera exterior con una junta entre ellas. La guía de la FDA (*Food and Drug Administration*, la agencia del medicamento de Estados Unidos) sobre sistemas de agua de alta pureza dice que en un sistema de agua farmacéutica **no debe haber uniones roscadas**: todas deben ser sanitarias o soldadas a tope. El motivo, según Kuphaldt: entre los hilos de una rosca quedan huecos diminutos donde se refugian los microbios y la limpieza no llega.

### Por qué fallan las juntas
Una junta solo sella si está **bien elegida, bien colocada y bien apretada**. Lo que sale de las fuentes leídas:

- **Apriete desigual.** Kuphaldt explica que los tornillos de una brida se aprietan en cruz y en varias pasadas de fuerza creciente, para que la junta se aplaste igual por todo el círculo. Si un lado queda más apretado que el otro, el lado flojo fuga.
- **Junta o brida equivocadas.** Clase de presión distinta, tamaño distinto o junta no adecuada a esa clase: la unión entera queda comprometida.
- **Junta reutilizada.** Al montar una brida ciega, Kuphaldt habla de poner juntas nuevas. Una junta ya aplastada no vuelve a su forma.
- **Junta mal comprobada.** La guía de la OMS pide verificar que se usan las juntas y los diafragmas correctos y que están colocados y apretados correctamente.

Lo mismo pasa con la **empaquetadura** (*packing*) que sella el vástago de muchas válvulas. Kuphaldt advierte de un error típico: personal bienintencionado que aprieta de más las tuercas de la empaquetadura para cortar una fuga. Eso aumenta el rozamiento, la válvula se mueve mal y la empaquetadura se gasta antes. Si una empaquetadura bien apretada sigue perdiendo, lo que toca es cambiarla, no apretar más. Y esa decisión es de mantenimiento, no tuya.

### Válvulas por dentro
Hay dos grandes familias. Las de **cuarto de vuelta** (*rotary*) giran un elemento dentro del tubo: de abierta a cerrada en 90 grados. Las de **vástago** (*sliding-stem*) suben y bajan una pieza con un husillo: varias vueltas de volante.

| Válvula | Cómo funciona (Kuphaldt) | Para qué sirve | Cómo sabes si está abierta |
|---|---|---|---|
| Bola (*ball*) | Una esfera con un agujero; abierta cuando el agujero va en línea con el tubo | Abrir y cerrar; la de paso total no es buena para regular | Palanca paralela al tubo (lección corta) |
| Mariposa (*butterfly*) | Un disco que gira dentro del tubo | Abrir y cerrar en tamaños grandes; cierra mal si el asiento no es blando | Indicador de posición del actuador o de la palanca |
| Compuerta (*gate*) | Una placa que baja como una puerta corredera | Abrir y cerrar, no regular | En las de vástago ascendente, vástago fuera es abierta y vástago escondido es cerrada |
| Globo o asiento (*globe*) | Un tapón que se acerca o se aleja de un asiento | Regular el caudal | Volante; el indicador del actuador si es automática |
| Diafragma (*diaphragm*) | Una lámina flexible que se aprieta contra un resalte, como pellizcar una manguera | Suspensiones y servicios limpios; la guía de la OMS la prefiere para el agua farmacéutica | Indicador del volante o del actuador |
| Tres vías (*three-way*) | Tres bocas: une una de ellas con una u otra de las dos restantes | Desviar un caudal hacia dos destinos o mezclar dos | La flecha o la marca del cuerpo; míralo en el P&ID |

**Retención** (*check valve*). Se abre sola con el flujo en un sentido y se cierra sola si el flujo se invierte. Nadie la maneja y no tiene posición que elegir. No la cuentes como aislamiento: para separar un equipo se usan válvulas cerradas, bloqueos y bridas ciegas, como explica la lección de permisos.

**Válvula de fondo del reactor** (*bottom outlet valve*). En el punto más bajo; por ella sale todo. «El reactor a fondo» la pone en las comprobaciones previas: cerrada antes de cargar.

**Válvula de seguridad y disco de ruptura.** Están en «El reactor a fondo» y en «Alarmas, enclavamientos y sistemas de seguridad a fondo». La Directiva de equipos a presión los llama **accesorios de seguridad**. Tú no los ajustas, no los aíslas y no los tapas.

**Una válvula cerrada no siempre es estanca.** Kuphaldt explica que muchas válvulas de control no están pensadas para cortar del todo, y que por eso llevan válvulas manuales de bloqueo antes y después.

### Manuales y automáticas: la posición de fallo
Una válvula automática lleva un **actuador**. El más común es neumático: aire comprimido empuja una membrana o un pistón contra un **muelle**. La fuerza es presión por superficie: 1 bar sobre una membrana de 0,3 m de diámetro (valor de ejemplo) da 100000 × 3,1416 × 0,15 × 0,15 = 7069 N, lo que pesan unos 720 kg.

**Qué pasa si se va el aire.** Kuphaldt lo explica así: en una válvula neumática con muelle, al perder el aire **el muelle la lleva a una posición conocida**, abierta o cerrada. Las eléctricas, en cambio, suelen quedarse en la última posición. Y añade la regla clave:

- Una válvula que **necesita aire para abrir** (*air-to-open*) **falla cerrada** (FC).
- Una válvula que **necesita aire para cerrar** (*air-to-close*) **falla abierta** (FO).

**Cómo se elige.** La regla de Kuphaldt: primero se decide **qué posición es la más segura para el proceso** si todo falla, y después se elige el tipo de válvula. No por costumbre ni por comodidad. Su ejemplo es la refrigeración de un motor grande: si la válvula fallara cerrada, el motor se recalentaría; si falla abierta, solo trabajaría más frío. La única elección sensata es fallo abierto. En un reactor pasa igual con el agua de la camisa, y al revés con el vapor o con un reactivo que se dosifica: la tabla de casos está en «Leer un P&ID a fondo».

Dos detalles más:

- Para que **se quede donde está** al perder el aire (FL) hace falta un dispositivo que atrape el aire en el actuador.
- Algunos actuadores llevan un **volante** para mover la válvula a mano si falla el aire, y muchas válvulas de control tienen alrededor dos válvulas manuales de bloqueo y una de paso lateral (*bypass*). Usar ese volante o ese paso lateral cambia lo que controla el sistema: solo con el procedimiento y la autorización que pida.

### Rótulos y colores
ICH Q7 pide que las tuberías instaladas de forma permanente estén **identificadas** (apartado 4.23) y nombra en concreto las líneas de proceso fijas (5.13). Admite rotular cada línea, la documentación, el sistema de control u otros medios.

En España, el Real Decreto 485/1997 sobre señalización (anexo VII, apartado 4) obliga a etiquetar las tuberías visibles que contengan o puedan contener productos peligrosos. Las etiquetas van **a lo largo de la tubería**, en número suficiente y siempre **cerca de los puntos de especial riesgo, como válvulas y conexiones**. Se pueden sustituir por las señales de advertencia del propio decreto o por los pictogramas de peligro del reglamento CLP.

Los **colores** no los fija ese decreto: los recoge una norma de pago (UNE 1063). La nota técnica NTP 566 del INSST, del año 2000, reproduce su tabla de grupos, y en ella se leen, entre otros: verde para el agua, rojo para el vapor de agua, amarillo para los gases combustibles, naranja para los ácidos, violeta para las lejías y sepia para los líquidos combustibles. En su ejemplo, el aire de instrumentos va en azul, y la nota usa además la norma alemana DIN 2403. Es decir, **no hay un único código**: aprende el de tu planta. El color orienta; el rótulo, la flecha y el número de línea mandan.

### Purgas, venteos y drenajes
- **Venteo** (*vent*): válvula pequeña en un punto alto. Deja salir gas o aire. Se ventea antes de llenar una línea o una bomba.
- **Drenaje** (*drain*): válvula en un punto bajo para vaciar el líquido. La guía de la OMS pide que las tuberías de agua farmacéutica se puedan drenar, con una pendiente mínima recomendada de 1/100: 1 cm de caída por cada metro.
- **Purga** (*bleed*): en planta se llama así a la pequeña válvula que vacía o despresuriza el tramo que queda entre dos válvulas cerradas. Es la que se usa en el doble bloqueo y purga de «Leer un P&ID a fondo».

Dos riesgos de estos puntos:

- **Las ramas muertas** (*dead legs*): tramos sin salida donde el líquido queda parado. La guía de la FDA recuerda un criterio antiguo para agua caliente en circulación: que la rama sin uso no mida más de seis diámetros de esa rama. Y avisa de que en sistemas más fríos cualquier tramo parado puede criar una película de microbios.
- **Lo que queda dentro.** La línea guarda producto. Un tubo de 50 mm de diámetro interior (valor de ejemplo) y 30 m de largo contiene 3,1416 × 0,025 × 0,025 × 30 = 0,0589 m³: unos 59 L. Si se purga a un cubo, eso es residuo o pérdida de rendimiento, y hay que anotarlo.

### Alinear una línea antes de un trasvase
El alineamiento (*line-up*) es dejar cada válvula en su sitio para que el producto vaya de un origen a un destino, y solo ahí. La lista de válvulas y el recorrido andando están en «Leer un P&ID a fondo». Lo que añade esta lección es el orden y el porqué.

1. **Origen y destino.** Comprueba el código de los dos equipos en su placa, no solo en pantalla, su etiqueta de estado y que cabe lo que va a entrar. Para los materiales recibidos, ICH Q7 pide procedimientos que eviten descargarlos por error en las existencias que no son (apartado 7.21).
2. **Cerradas primero.** Todas las ramas que salen de la ruta: drenajes, tomas de muestra, retornos, ramas a otros equipos.
3. **Abre del destino hacia el origen**, si tu procedimiento no dice otra cosa: es la práctica habitual. Así, cuando abras la última, que suele ser la de salida del origen, el camino ya está completo y no queda producto empujando contra una válvula cerrada. Abre despacio, por el golpe de ariete.
4. **El orden importa.** La guía de la FDA cuenta un caso: en un sistema de agua, al abrir la válvula principal con la secundaria cerrada, el aire que quedó en el tramo tras vaciarlo contaminaba el sistema. La solución fue abrir primero la secundaria para lavar el tramo.
5. **Segunda persona.** ICH Q7 pide que las actividades críticas se hagan **presenciadas o con un control equivalente** (8.12 y 8.13) y que la hoja recoja la firma de quien hace y de quien comprueba cada paso crítico (6.52). Si la hoja pide verificación de ruta, la otra persona recorre la línea por su cuenta; no firma lo que tú le cuentas.
6. **Durante y al final.** Lo que baja en el origen tiene que subir en el destino («Fluidos a fondo»). Al terminar, cada válvula vuelve a la posición que dice la hoja y se comprueba.

Para cualquier trabajo de mantenimiento en una línea, el aislamiento con candados y etiquetas, las bridas ciegas y quién firma qué están en «Permisos de trabajo, consignación y espacios confinados a fondo». Kuphaldt describe una pieza útil para esos aislamientos: la **figura de ocho** (*spectacle blind*), un disco ciego unido a un anillo del mismo grosor. Montada con el anillo entre las bridas, la línea pasa; montada con el disco, queda cerrada, y la separación entre bridas no cambia.

### Fugas: qué haces
Una fuga de disolvente es riesgo de incendio, de exposición y de pérdida. Kuphaldt llama **emisión fugitiva** (*fugitive emission*) a cualquier escape no deseado al ambiente, sobre todo por vástagos de válvulas y ejes de bombas.

- **Aléjate y avisa** al responsable de turno, con el punto exacto.
- **Para y aísla si el procedimiento lo dice**, desde lejos del chorro.
- **No aprietes.** Ni bridas ni empaquetaduras con la línea en servicio. Es trabajo de mantenimiento con su permiso.
- **No abras nunca una brida con presión.** Antes, la línea se aísla, se despresuriza y se vacía. Con 3 bar dentro, un tapón de 50 mm de diámetro interior recibe 300000 × 0,001963 = 589 N, el peso de unos 60 kg. Kuphaldt da además una precaución para quien la abre: aflojar primero los tornillos del lado contrario al cuerpo, para que, si queda presión, el chorro salga hacia el otro lado.

### Errores típicos y qué anotas
- **Trasvase al depósito equivocado.** Según los resúmenes publicados de una investigación del Chemical Safety Board de Estados Unidos (2016), un camión descargó un ácido en la boca de llenado de otro producto, cercana y de aspecto parecido, y la mezcla soltó una nube tóxica. Se evita leyendo el rótulo, recorriendo la línea y con la segunda persona.
- **Una válvula que se queda abierta**: un drenaje entreabierto o una rama hacia otro reactor. El totalizador cuenta lo que no ha llegado.
- **Fiarse de la pantalla.** Que el sistema haya mandado abrir no significa que la válvula se haya movido: mira el final de carrera y el indicador de campo.

En la hoja anotas, en el momento, la ruta, quién la hizo y quién la verificó, las horas, la cantidad y cualquier incidencia. Una válvula encontrada mal no se corrige en silencio: se avisa y queda escrito.

Las cifras, colores y códigos de esta lección sirven para entender. En planta manda siempre el procedimiento vigente (SOP), junto con los planos y el código de colores de tu instalación.
`,
  plant: `
Lote FX-101. Toca pasar la solución caliente del reactor R-101 al cristalizador R-102 a través del filtro de línea F-301. La ruta es: válvula de fondo XV-105, filtro F-301 y entrada XV-106 a R-102. En el filtro hay un drenaje manual, V-305, y una toma de muestra, V-306, que deben estar cerradas (códigos de ejemplo).

Con tu compañera recorres la línea andando. Ves el rótulo de la tubería con su flecha hacia R-102. V-305 está cerrada. V-306, cerrada. R-102 tiene su etiqueta de estado de limpio y su nivel a cero. Anotáis la ruta y firmáis: tú como «realizado», ella como «verificado».

Abres primero la entrada XV-106 y compruebas en pantalla que su final de carrera confirma «abierta». Después abres la XV-105. El nivel de R-101 empieza a bajar y el de R-102 a subir al mismo ritmo.

A los pocos minutos ves gotear la brida de salida del F-301. Paras el trasvase como dice el procedimiento: cierras XV-105 y XV-106 desde el panel, avisas al jefe de turno y acotas la zona. No tocas los tornillos. Mantenimiento despresuriza y vacía el filtro con su permiso de trabajo, cambia la junta por una nueva de la clase correcta y aprieta en cruz.

Antes de reanudar, la jefa de turno hace que repitáis la verificación de ruta, porque la línea se ha abierto. Termináis el trasvase, cerráis XV-105 y XV-106 y anotáis la parada, la junta cambiada, el número del permiso y las horas.
`,
  batchRecord: `
En la hoja de producción (*batch record*) un trasvase o una carga por tubería suele llevar:

- **Ruta**: origen, destino y códigos de las válvulas, mangueras o paneles usados.
- **Verificación de la ruta antes de empezar**: realizado por y verificado por, con fecha y hora.
- **Posición de las válvulas críticas**: abiertas y cerradas, incluidos drenajes y tomas de muestra.
- **Comprobación de mangueras**: identificación y que su presión y temperatura de diseño cubren la operación, si el procedimiento lo pide.
- **Hora de inicio y fin**, cantidad trasvasada y niveles de origen y destino.
- **Lavado de línea**, con el disolvente y la cantidad, si la hoja lo pide.
- **Posición final** de cada válvula y comprobación.
- **Incidencias**: fuga, junta cambiada (con el número de permiso de trabajo), válvula encontrada fuera de posición, discrepancia entre la orden y el final de carrera, aviso al responsable.

Se anota lo que pasó y cuando pasó. Una válvula que estaba mal no se arregla sin decir nada: se avisa y queda escrito.
`,
  terms: [
    { es: "Diámetro nominal (DN)", en: "Nominal size (DN)", def: "Número redondeado que identifica el tamaño común de tubos, válvulas y bridas que encajan entre sí. No es el diámetro interior exacto." },
    { es: "Presión nominal (PN)", en: "Nominal pressure (PN)", def: "Referencia de la presión que aguanta una brida o un accesorio. La presión admisible real baja al subir la temperatura." },
    { es: "Presión máxima admisible (PS)", en: "Maximum allowable pressure (PS)", def: "Presión máxima para la que está diseñado un equipo, según su fabricante. Va en la placa." },
    { es: "Unión permanente", en: "Permanent joint", def: "Unión que solo se separa rompiéndola, como una soldadura." },
    { es: "Clamp sanitario", en: "Sanitary clamp fitting", def: "Unión de dos bridas lisas con una abrazadera y una junta, sin roscas donde se acumule suciedad." },
    { es: "Empaquetadura", en: "Valve packing", def: "Anillos que sellan el vástago de una válvula. Apretarlos de más la frena y la desgasta." },
    { es: "Válvula de compuerta", en: "Gate valve", def: "Válvula que corta el paso con una placa que baja como una puerta corredera; para abrir y cerrar, no para regular." },
    { es: "Válvula de tres vías", en: "Three-way valve", def: "Válvula con tres bocas que desvía un caudal hacia uno de dos destinos o mezcla dos caudales." },
    { es: "Aire para abrir", en: "Air-to-open", def: "Válvula automática que necesita aire para abrirse; al perderlo, el muelle la cierra (falla cerrada)." },
    { es: "Aire para cerrar", en: "Air-to-close", def: "Válvula automática que necesita aire para cerrarse; al perderlo, el muelle la abre (falla abierta)." },
    { es: "Rama muerta", en: "Dead leg", def: "Tramo de tubería sin salida donde el líquido queda parado y puede contaminarse." },
    { es: "Venteo", en: "Vent", def: "Válvula en un punto alto para dejar salir gas o aire." },
    { es: "Drenaje", en: "Drain", def: "Válvula en un punto bajo para vaciar el líquido de una línea o un equipo." },
    { es: "Emisión fugitiva", en: "Fugitive emission", def: "Escape no deseado de producto al ambiente, sobre todo por vástagos de válvulas y ejes de bombas." },
  ],
  quiz: [
    {
      kind: "choice",
      q: "En una tubería pone DN50. ¿Qué significa?",
      options: [
        "Que el diámetro interior mide exactamente 50 mm",
        "Que es una talla de referencia para que encajen las piezas",
        "Que la tubería aguanta 50 bar de presión",
        "Que la pared de la tubería tiene 50 mm de grosor",
      ],
      answer: 1,
      explain: "La Directiva de equipos a presión define el DN como un número redondeado de referencia, sin relación estricta con las dimensiones de fabricación. El diámetro interior real sale de las tablas del tubo.",
    },
    {
      kind: "choice",
      q: "Una válvula automática de agua de refrigeración de la camisa es de aire para cerrar. ¿Qué hace si se corta el aire de instrumentos?",
      options: [
        "Se abre, y el agua sigue pasando por la camisa",
        "Se cierra, y deja de entrar agua a la camisa",
        "Se queda en la última posición en que estaba",
        "Se mueve sola hasta la mitad de su recorrido",
      ],
      answer: 0,
      explain: "Si necesita aire para cerrar, al perderlo el muelle la abre: falla abierta (FO). Para la refrigeración es lo más seguro, como en el ejemplo del motor de Kuphaldt.",
    },
    {
      kind: "choice",
      q: "Según Kuphaldt, ¿cómo se decide si una válvula automática debe fallar abierta o cerrada?",
      options: [
        "Por costumbre: casi todas las plantas las montan cerradas",
        "Por la que sea más barata de comprar y de mantener",
        "Por la que el operador entienda más fácil en pantalla",
        "Por la posición más segura para el proceso si todo falla",
      ],
      answer: 3,
      explain: "La regla es decidir primero cuál es la posición más segura del proceso ante un fallo y elegir después el tipo de válvula, no por costumbre ni comodidad.",
    },
    {
      kind: "choice",
      q: "Durante un trasvase ves que gotea una brida. ¿Qué haces?",
      options: [
        "Aprieto los tornillos de la brida para cortar el goteo",
        "Pongo un cubo debajo y sigo con el trasvase",
        "Paro según el procedimiento, aíslo, aviso y no la toco",
        "Abro la brida para ver si la junta está bien",
      ],
      answer: 2,
      explain: "Una brida no se aprieta ni se abre en servicio. Se para, se aísla el tramo, se avisa y mantenimiento la repara con su permiso, tras despresurizar y vaciar.",
    },
    {
      kind: "choice",
      q: "Una empaquetadura de válvula, bien apretada, sigue perdiendo un poco. ¿Qué dice Kuphaldt que es lo correcto?",
      options: [
        "Cambiar la empaquetadura, no apretarla todavía más",
        "Apretar las tuercas hasta que deje de gotear del todo",
        "Echar grasa por fuera del vástago para sellarlo",
        "Dejarla así, porque todas las empaquetaduras gotean",
      ],
      answer: 0,
      explain: "Apretar de más aumenta el rozamiento y la desgasta antes. Si bien apretada sigue perdiendo, se sustituye, y es trabajo de mantenimiento.",
    },
    {
      kind: "number",
      q: "Una línea tiene un diámetro interior de 50 mm (0,05 m) y 30 m de largo. ¿Cuántos litros de líquido caben dentro? (área = 3,1416 × radio²; 1 m³ = 1000 L)",
      answer: 58.9,
      tolerance: 0.02,
      unit: "L",
      explain: "Área = 3,1416 × 0,025 × 0,025 = 0,001963 m². Volumen = 0,001963 × 30 = 0,0589 m³ = 58,9 L.",
    },
    {
      kind: "number",
      q: "Una línea con un diámetro interior de 50 mm (área 0,001963 m²) tiene 3 bar (300000 Pa) dentro. ¿Con qué fuerza, en newtons, empuja el líquido sobre un tapón que la cierra? (fuerza = presión × área)",
      answer: 589,
      tolerance: 0.02,
      unit: "N",
      explain: "Fuerza = 300000 × 0,001963 = 589 N, lo que pesan unos 60 kg. Por eso una brida no se abre con presión.",
    },
    {
      kind: "number",
      q: "Con el criterio antiguo que recuerda la FDA, una rama sin uso no debe medir más de seis diámetros de esa rama. ¿Cuántos milímetros como máximo para una rama de 25 mm de diámetro?",
      answer: 150,
      tolerance: 0.01,
      unit: "mm",
      explain: "Seis diámetros: 6 × 25 = 150 mm. La FDA avisa de que en sistemas fríos cualquier tramo parado puede contaminarse.",
    },
    {
      kind: "number",
      q: "La guía de la OMS recomienda una pendiente mínima de 1/100 para que una tubería de agua drene. ¿Cuántos metros debe bajar un tramo de 12 m?",
      answer: 0.12,
      tolerance: 0.02,
      unit: "m",
      explain: "Pendiente 1/100: 12 / 100 = 0,12 m, es decir, 12 cm de caída en 12 m.",
    },
    {
      kind: "choice",
      q: "Vas a alinear un trasvase del reactor al cristalizador. ¿Qué orden es el correcto?",
      options: [
        "Abro primero la válvula de fondo del reactor y luego las demás",
        "Compruebo ramas cerradas y abro del destino hacia el origen",
        "Abro todas a la vez desde el panel para ganar tiempo",
        "Abro las válvulas y después compruebo dónde está el destino",
      ],
      answer: 1,
      explain: "Primero se comprueba que las ramas están cerradas; luego, como práctica habitual, se abre desde el destino, de modo que al abrir la salida del origen el camino ya está completo. El orden exacto lo fija el procedimiento.",
    },
  ],
};
