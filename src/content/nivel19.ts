import type { Lesson } from "./types";

/** Nivel 19. Los sistemas en el día a día: LIMS, MES, SCADA y ERP (SAP). */
export const nivel19: Lesson[] = [
  {
    slug: "lims",
    level: 19,
    order: 1,
    title: "LIMS: el sistema del laboratorio",
    titleEn: "Laboratory Information Management System",
    minutes: 15,
    summary: "Qué es un LIMS, qué hace con cada muestra y cómo se relaciona contigo como operador.",
    body: `
Un **LIMS** (*Laboratory Information Management System*) es el programa que gestiona **todo lo que pasa con las muestras** en el laboratorio de control de calidad.

### El viaje de una muestra en el LIMS
1. **Registro** (*login / sample registration*): se crea la muestra con su producto, lote, punto de muestreo y fecha. El LIMS genera una **etiqueta con código de barras**.
2. **Asignación de análisis** (*test assignment*): según la especificación, el LIMS sabe qué ensayos hay que hacer (HPLC, KF, LOD…).
3. **Recepción** en el laboratorio: se escanea la etiqueta. Queda registrado quién la recibió y cuándo (**cadena de custodia**).
4. **Introducción de resultados** (*result entry*): a mano o directamente desde el instrumento (balanza, KF, sistema de cromatografía).
5. **Comparación con la especificación**: el LIMS marca en rojo lo que está **fuera de especificación** (*OOS*).
6. **Revisión y aprobación** (*review / approval*): un segundo analista revisa y QA aprueba.
7. **Certificado de análisis** (*Certificate of Analysis, CoA*) y decisión de uso del lote.

### Otras funciones
- Gestión de **estabilidades** (muestras guardadas y analizadas a lo largo del tiempo).
- Control de **reactivos, patrones e instrumentos** (calibraciones, caducidades).
- **Tendencias** de resultados entre lotes.
- **Audit trail** de cada cambio.

### Qué tiene que ver contigo
Como operador, tú **tomas las muestras** del proceso (IPC, producto final). La etiqueta del LIMS y los datos que registras al muestrear (hora, punto, cantidad, quién) son el **inicio de la cadena**. Una muestra mal identificada invalida el análisis.
`,
    plant: `
Tomas el IPC de la etapa de reacción. Imprimes la etiqueta del LIMS para "Lote 24-0117, Etapa 2, IPC fin de reacción", la pegas en el vial, anotas la hora de toma en la hoja y la llevas al laboratorio. Allí la escanean: el LIMS sabe que hay que hacer un HPLC y que el límite es ≤ 1,0 %.
`,
    batchRecord: `
- Número de muestra del LIMS junto al paso de muestreo.
- Resultado del IPC y decisión (a veces el resultado llega impreso o se consulta en el LIMS).
- Al final, el CoA del lote.
`,
    terms: [
      { es: "Sistema de gestión de información de laboratorio", en: "LIMS", def: "Programa que gestiona muestras, análisis, resultados y aprobaciones del laboratorio." },
      { es: "Registro de muestra", en: "Sample login / registration", def: "Alta de una muestra en el LIMS con sus datos de identificación." },
      { es: "Fuera de especificación", en: "Out of Specification (OOS)", def: "Resultado que no cumple el límite establecido." },
      { es: "Certificado de análisis", en: "Certificate of Analysis (CoA)", def: "Documento con los resultados de un lote frente a sus especificaciones." },
      { es: "Cadena de custodia", en: "Chain of custody", def: "Registro de quién ha tenido la muestra en cada momento." },
      { es: "Sistema de datos cromatográficos", en: "Chromatography Data System (CDS)", def: "Software que controla los equipos de HPLC/GC y guarda sus datos." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "¿Qué hace el LIMS cuando un resultado no cumple la especificación?",
        options: ["Lo borra", "Lo marca como fuera de especificación (OOS)", "Lo redondea", "Nada"],
        answer: 1,
        explain: "El LIMS compara automáticamente con la especificación y señala el OOS para su investigación.",
      },
      {
        kind: "choice",
        q: "Se te cae la etiqueta del vial de muestra. ¿Qué haces?",
        options: [
          "Escribo el lote a mano en el vial",
          "Lo comunico y sigo el procedimiento; normalmente se repite la toma con etiqueta nueva",
          "Le pego la etiqueta de otra muestra",
          "Lo llevo igualmente al laboratorio",
        ],
        answer: 1,
        explain: "Una muestra sin identificación fiable no sirve; la trazabilidad es parte del dato.",
      },
      {
        kind: "choice",
        q: "¿Qué ventaja tiene que el resultado pase directamente del instrumento al LIMS?",
        options: [
          "Ninguna",
          "Evita errores de transcripción y conserva el dato original",
          "Permite cambiarlo después sin dejar rastro",
          "Hace el análisis químico más rápido",
        ],
        answer: 1,
        explain: "Cada copia a mano es una oportunidad de error. La interfaz directa mantiene el dato original y su audit trail.",
      },
    ],
  },
  {
    slug: "mes-y-ebr",
    level: 19,
    order: 2,
    title: "MES y hoja de producción electrónica",
    titleEn: "MES and electronic batch record",
    minutes: 15,
    summary: "Cómo funciona una hoja de producción en pantalla y qué cambia respecto al papel.",
    body: `
Muchas plantas sustituyen la hoja en papel por un **batch record electrónico** (*EBR, electronic batch record*) dentro de un **MES** (*Manufacturing Execution System*).

### Qué hace un MES
- Muestra **paso a paso** las instrucciones del lote en una pantalla o tableta.
- Pide **escanear** el código de barras del material, del recipiente y del equipo: si no coincide, **no deja continuar**.
- Recibe datos **directamente** de básculas, sensores y del sistema de control de planta.
- Comprueba los rangos: si un valor está fuera, lo marca como **excepción** y pide comentario.
- Pide **firma electrónica** en los pasos que lo requieren, y a veces una segunda firma de verificación.
- Genera al final el **informe de excepciones** (*review by exception*): QA revisa sobre todo lo que se salió de lo normal.

### Ventajas
- Menos errores de transcripción y cálculo.
- Imposible saltarse un paso u olvidar una casilla.
- Datos disponibles en tiempo real.

### Lo que no cambia
Las reglas ALCOA+ siguen igual: **tu usuario es tu firma**, se registra en el momento y no se comparte la sesión.
`,
    plant: `
En la pantalla aparece: "Paso 12: cargar 254,0 kg de metanol (rango 252,0–256,0)". Escaneas el contenedor, la báscula envía 254,3 kg automáticamente, firmas con tu usuario y contraseña, y un compañero firma la verificación. Si hubieras escaneado otro material, el sistema habría bloqueado el paso.
`,
    batchRecord: `
- Pasos con firma electrónica: nombre, fecha, hora y significado ("realizado", "verificado").
- Excepciones con comentario.
- Datos transferidos desde equipos (sin escribirlos a mano).
`,
    terms: [
      { es: "Sistema de ejecución de fabricación", en: "Manufacturing Execution System (MES)", def: "Software que guía y registra la fabricación en planta." },
      { es: "Hoja de producción electrónica", en: "Electronic Batch Record (EBR)", def: "Registro de lote en formato electrónico." },
      { es: "Revisión por excepción", en: "Review by exception", def: "Revisión centrada en los datos fuera de lo normal." },
      { es: "Código de barras", en: "Barcode", def: "Código que identifica materiales, recipientes y equipos al escanearlo." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "Escaneas un material que no corresponde al paso. ¿Qué hace normalmente el MES?",
        options: ["Lo acepta", "Bloquea el paso y avisa del error", "Cambia la receta", "Imprime un certificado"],
        answer: 1,
        explain: "La verificación por código de barras evita cargas equivocadas.",
      },
      {
        kind: "choice",
        q: "Un compañero te pide que firmes con su usuario porque ha olvidado la contraseña. ¿Qué haces?",
        options: ["Firmo, es un favor", "No: cada usuario es personal; debe pedir que le restablezcan la contraseña", "Le doy mi usuario", "Apunto su contraseña"],
        answer: 1,
        explain: "La firma electrónica equivale a la manuscrita: usarla por otro es falsificar.",
      },
      {
        kind: "choice",
        q: "En un MES, la báscula envía 258,1 kg y el rango del paso es 252,0–256,0 kg. ¿Qué ocurre?",
        options: [
          "El sistema lo acepta sin más",
          "El MES marca una excepción, pide comentario y el paso queda señalado para la revisión de QA",
          "El operador cambia el valor",
          "El MES redondea a 256,0",
        ],
        answer: 1,
        explain: "Los valores fuera de rango no se ocultan: se registran tal cual, se comentan y se revisan (revisión por excepción).",
      },
    ],
  },
  {
    slug: "scada-e-historiador",
    level: 19,
    order: 3,
    title: "SCADA, historiador y datos de proceso",
    titleEn: "SCADA, process historian and process data",
    minutes: 15,
    summary: "Qué pasa con una medida desde el sensor hasta el gráfico del lote, y dónde puede perderse o falsearse.",
    body: `
En la lección [DCS, PLC, SCADA y recetas](/leccion/dcs-scada-recetas) viste qué hace cada sistema. Aquí miramos lo que interesa a sistemas y a calidad: **el camino del dato** y sus riesgos.

### El viaje de una temperatura
1. La sonda **Pt100** del reactor convierte la temperatura en una resistencia; el transmisor la envía como señal de **4–20 mA**.
2. El **PLC** lee la señal en cada ciclo (milisegundos) y la convierte a °C con su **escalado** (por ejemplo, 4 mA = 0 °C y 20 mA = 150 °C).
3. El **SCADA** la publica como una **variable** (*tag*), por ejemplo "R201_TT01". Cada lectura tiene **valor**, **marca de tiempo** (*timestamp*) y **calidad** (buena, dudosa, mala si el sensor falla).
4. El **historiador** la guarda en su base de datos de series temporales; de ahí salen las **tendencias** (*trends*) que se adjuntan al lote.
5. El **MES** o el informe de lote leen del historiador los valores que el registro necesita.

### Riesgos para la integridad del dato
- **Compresión del historiador**: para no guardar millones de puntos, el historiador descarta los que no cambian más de una **banda muerta** (*deadband*) o se ajustan a una línea (algoritmo *swinging door*). Si la banda es demasiado ancha, **un pico de temperatura puede desaparecer** del registro. Los parámetros de compresión de las variables GMP se justifican y se prueban en la validación.
- **Interpolación**: un gráfico dibuja líneas entre puntos guardados; lo que se ve entre dos puntos **no se midió**.
- **Hora**: si el reloj del PLC y el del servidor no coinciden, los eventos salen desordenados. Todos se sincronizan.
- **Escalado o calibración mal configurados**: el sistema muestra un número exacto pero falso.
- **Usuarios genéricos**: muchas HMI antiguas tienen un usuario "OPERADOR" compartido. Así ninguna acción es **atribuible**. Lo correcto es usuario personal; si el equipo no lo permite, se ponen controles compensatorios (registro en papel de quién está en el puesto) y se planifica su sustitución.

### Alarmas y eventos: también son registros GMP
El SCADA guarda un **registro de alarmas y eventos** (*alarm and event log*): cuándo saltó una alarma, quién la **reconoció** (*acknowledge*) y cuándo, y cada **cambio de consigna** (*setpoint*) con su usuario. Si una temperatura se salió de rango, QA lo verá aquí aunque nadie lo haya escrito en la hoja.

### Impresiones y datos electrónicos
Una impresión del gráfico es útil, pero **no sustituye** al dato electrónico: no tiene todos los metadatos (calidad, audit trail). El Anexo 11 (apartado 8) pide poder obtener **copias impresas claras** de los datos guardados electrónicamente, y que en los registros que soportan la liberación del lote se indique si algún dato ha cambiado desde que se introdujo.
`,
    plant: `
En el lote 26-0412 la temperatura de reacción debía mantenerse en 55–60 °C. El gráfico impreso muestra una línea plana a 58 °C. Pero el registro de alarmas del SCADA tiene una alarma de alta temperatura a las 10:14, reconocida a las 10:15 por el usuario "mgarcia". Al revisar, se ve que la banda muerta de esa variable estaba en 5 °C: el historiador no guardó el pico de 61,8 °C. Se abre una desviación y se corrige la compresión con control de cambios.
`,
    batchRecord: `
- **Tendencias** de temperatura, presión y agitación del historiador, adjuntas al lote o revisadas en pantalla.
- **Informe de alarmas y eventos** del periodo del lote.
- En la hoja: tu reconocimiento y comentario de cada alarma relevante.
`,
    terms: [
      { es: "Variable de proceso", en: "Tag", def: "Nombre con el que el SCADA identifica una medida o una orden, con su valor, hora y calidad." },
      { es: "Marca de tiempo", en: "Timestamp", def: "Fecha y hora asociadas a un dato." },
      { es: "Banda muerta", en: "Deadband", def: "Variación mínima para que el sistema guarde un nuevo valor." },
      { es: "Tendencia", en: "Trend", def: "Gráfico de una variable a lo largo del tiempo." },
      { es: "Reconocer una alarma", en: "Acknowledge an alarm", def: "Confirmar en el sistema que el operador ha visto la alarma; queda registrado con usuario y hora." },
      { es: "Consigna", en: "Setpoint", def: "Valor que el sistema de control intenta mantener." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "¿Qué riesgo tiene una banda muerta demasiado ancha en el historiador?",
        options: [
          "Que el disco se llene",
          "Que se pierdan picos o cambios reales del proceso en el registro",
          "Que la HMI vaya lenta",
          "Ninguno",
        ],
        answer: 1,
        explain: "El historiador descarta los cambios menores que la banda; un pico corto puede no quedar guardado.",
      },
      {
        kind: "choice",
        q: "Una HMI solo tiene un usuario «OPERADOR» para todo el turno. ¿Qué principio ALCOA+ incumple?",
        options: ["Legible", "Atribuible", "Duradero", "Disponible"],
        answer: 1,
        explain: "Con un usuario compartido no se sabe quién hizo cada acción.",
      },
      {
        kind: "choice",
        q: "Una señal de 4–20 mA está escalada a 0–150 °C. ¿Qué temperatura corresponde a 12 mA?",
        options: ["60 °C", "75 °C", "90 °C", "120 °C"],
        answer: 1,
        explain: "12 mA está a mitad del rango de 4 a 20 mA, así que corresponde a la mitad de 0–150 °C: 75 °C.",
      },
    ],
  },
  {
    slug: "erp-y-trazabilidad",
    level: 19,
    order: 4,
    title: "ERP y trazabilidad de materiales",
    titleEn: "ERP and material traceability",
    minutes: 10,
    summary: "Cómo se sabe en todo momento dónde está cada lote y en qué estado.",
    body: `
El **ERP** (*Enterprise Resource Planning*, por ejemplo SAP) gestiona la parte de **negocio y logística**: compras, stock, almacenes, órdenes de fabricación y ventas.

### Lo que verás del ERP
- **Orden de fabricación** (*process order*): qué lote fabricar, cuánto y con qué materiales.
- **Estados de stock**: **cuarentena**, **liberado** (aprobado) o **bloqueado/rechazado**. Solo se puede consumir material liberado.
- **Consumos y entradas**: cada kg cargado al reactor se descuenta del stock; el producto obtenido entra como un lote nuevo.

### Trazabilidad (*traceability*)
Gracias al ERP, MES y LIMS se puede contestar en minutos:
- **Hacia atrás**: ¿qué lotes de materia prima se usaron en este lote de API?
- **Hacia delante**: ¿a qué clientes se envió este lote?

Esto es imprescindible si hay que **retirar** un producto del mercado (*recall*).

### Cómo se conectan los sistemas
ERP (qué fabricar y con qué) → MES (cómo se fabrica, paso a paso) → sistema de control de planta (DCS) que mueve válvulas y lee sensores. En paralelo, el LIMS gestiona las muestras y su aprobación, que el ERP usa para cambiar el estado del lote.

**Practica:** en el [simulador de ERP tipo SAP](/sap) puedes crear una orden, consumir lotes y ver cómo cambia su estado.
`,
    plant: `
Vas a cargar un saco de reactivo y el escáner dice "Lote en cuarentena". No se usa: el laboratorio aún no lo ha aprobado. Avisas al supervisor para comprobar si hay otro lote liberado.
`,
    batchRecord: `
- Número de orden de fabricación.
- Lotes de cada material consumido.
- Número de lote del producto obtenido y cantidad.
`,
    terms: [
      { es: "Planificación de recursos empresariales", en: "Enterprise Resource Planning (ERP)", def: "Sistema de gestión de compras, stock, producción y ventas." },
      { es: "Orden de fabricación", en: "Process / production order", def: "Instrucción del ERP para fabricar un lote." },
      { es: "Trazabilidad", en: "Traceability", def: "Capacidad de seguir un lote hacia atrás (materias primas) y hacia delante (clientes)." },
      { es: "Retirada de producto", en: "Recall", def: "Recuperación de un producto ya distribuido por un problema de calidad." },
      { es: "Sistema de control distribuido", en: "Distributed Control System (DCS)", def: "Sistema que controla automáticamente los equipos de planta." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "¿Qué estado debe tener un material para poder usarlo en producción?",
        options: ["Cuarentena", "Liberado (aprobado)", "Bloqueado", "Cualquiera"],
        answer: 1,
        explain: "Solo los materiales aprobados por calidad pueden consumirse.",
      },
      {
        kind: "choice",
        q: "¿Qué permite la trazabilidad hacia delante?",
        options: [
          "Saber qué materias primas se usaron",
          "Saber a qué clientes se envió un lote",
          "Saber quién limpió el reactor",
          "Saber el precio del lote",
        ],
        answer: 1,
        explain: "Hacia delante = hacia el cliente; hacia atrás = hacia las materias primas.",
      },
      {
        kind: "choice",
        q: "Necesitas saber qué lotes de materia prima se usaron en un lote de API. ¿Qué trazabilidad es?",
        options: [
          "Hacia delante",
          "Hacia atrás",
          "Lateral",
          "No es trazabilidad",
        ],
        answer: 1,
        explain: "Hacia atrás: del producto a sus materiales de origen. Hacia delante: del producto a sus clientes.",
      },
    ],
  },
  {
    slug: "sap-en-planta",
    level: 19,
    order: 5,
    title: "SAP en la planta: órdenes, movimientos y decisión de empleo",
    titleEn: "SAP in the plant: process orders, goods movements and usage decision",
    minutes: 18,
    summary: "Los módulos y transacciones de SAP que tocan un lote de API, de la orden de proceso a la liberación.",
    body: `
**SAP** es el ERP más usado en la industria química y farmacéutica. La versión actual es **SAP S/4HANA**; muchas plantas aún usan la anterior, **SAP ECC**. La lógica de negocio es casi la misma.

### Los módulos que verás
| Módulo | Para qué |
|---|---|
| **PP-PI** (*Production Planning for Process Industries*) | Recetas maestras y órdenes de proceso |
| **MM** (*Materials Management*) | Materiales, stock y movimientos de mercancía |
| **QM** (*Quality Management*) | Lotes de inspección, resultados y decisión de empleo |
| **WM / EWM** (*(Extended) Warehouse Management*) | Ubicaciones dentro del almacén |
| **PM** (*Plant Maintenance*) | Órdenes de mantenimiento y calibración |

### El flujo de un lote, transacción a transacción
| Paso | Transacción | Qué hace |
|---|---|---|
| 1 | **COR1** | Crear la orden de proceso a partir de la receta maestra |
| 2 | **COR2** | Modificar la orden; desde aquí se **libera** (a partir de ese momento ya se puede fabricar) |
| 3 | **MIGO**, movimiento **261** | Salida de mercancía: consumir lotes de materia prima para la orden |
| 4 | **COR6N** | Notificar cada fase (hecha, cuánto se obtuvo) |
| 5 | **MIGO**, movimiento **101** | Entrada de mercancía: el producto entra en stock **en control de calidad** |
| 6 | **QA32** | Ver la lista de lotes de inspección pendientes |
| 7 | **QE51N** | Registrar los resultados del laboratorio |
| 8 | **QA11** | **Decisión de empleo** (*usage decision*): aceptar o rechazar el lote |
| — | **MMBE** / **MSC3N** | Consultar stock / ver los datos de un lote |

### Tipos de stock
- **Libre utilización** (*unrestricted*): se puede consumir o vender.
- **En control de calidad** (*quality inspection*): esperando la decisión de QA. No se puede consumir.
- **Bloqueado** (*blocked*): no se puede usar.

La decisión de empleo **A (aceptado)** traspasa el stock a libre utilización; **R (rechazado)**, a bloqueado. Cuando el material entra con un **tipo de inspección** activo (por ejemplo, el **04** para entradas desde producción, o el **01** para compras), SAP crea el **lote de inspección** automáticamente.

### Clases de movimiento más comunes
| Clase | Movimiento |
|---|---|
| **101** | Entrada de mercancía (desde orden o pedido) |
| **102** | Anulación de la 101 |
| **261** | Salida de mercancía para una orden |
| **262** | Anulación de la 261 |
| **311** | Traslado entre almacenes |
| **321** | De control de calidad a libre utilización |

### Por qué SAP es un sistema GMP
Si SAP decide qué lote se puede consumir o vender, es **GMP**: debe estar **validado** (normalmente GAMP categoría 4), con perfiles de usuario que separen funciones. Por ejemplo, quien registra resultados no debería poder tomar también la decisión de empleo. Y en SAP **nada se borra**: un error se corrige con un **documento de anulación** (102, 262…), que deja rastro, igual que un audit trail.

**Practica:** haz el recorrido completo en el [simulador de ERP](/sap), con datos ficticios.
`,
    plant: `
Vas a cargar el reactivo ficticio **RX-3**. En la tableta escaneas el bidón: el lote 2604-RX3 sale **en control de calidad**. El MES no deja continuar. El supervisor consulta en **MMBE** y ve otro lote del mismo material en **libre utilización**: se usa ese. Si se hubiera consumido el bloqueado por error, la corrección sería un movimiento **262** y una desviación, nunca "borrar" el consumo.
`,
    batchRecord: `
- Número de **orden de proceso** y de **lote** de SAP.
- Lotes consumidos (salidas 261) con su cantidad.
- Cantidad obtenida (entrada 101) y rendimiento.
- Número del **lote de inspección** y fecha de la **decisión de empleo**.
`,
    terms: [
      { es: "Orden de proceso", en: "Process order", def: "Orden de fabricación en SAP PP-PI, creada desde una receta maestra." },
      { es: "Clase de movimiento", en: "Movement type", def: "Código de SAP que define qué hace un movimiento de stock: 101 entrada, 261 consumo…" },
      { es: "Lote de inspección", en: "Inspection lot", def: "Registro de QM que agrupa los análisis que hay que hacer a un lote." },
      { es: "Decisión de empleo", en: "Usage decision", def: "Aceptación o rechazo del lote de inspección en QM; cambia el estado del stock." },
      { es: "Libre utilización", en: "Unrestricted-use stock", def: "Stock que se puede consumir o expedir." },
      { es: "Documento de anulación", en: "Reversal document", def: "Movimiento que deshace otro dejando rastro de ambos." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "¿Qué clase de movimiento registra el consumo de materia prima para una orden?",
        options: ["101", "261", "311", "321"],
        answer: 1,
        explain: "261 es la salida de mercancía para una orden; 101 es la entrada del producto.",
      },
      {
        kind: "choice",
        q: "Tras la entrada 101 desde producción, ¿en qué stock queda normalmente el lote de API?",
        options: ["Libre utilización", "En control de calidad", "Bloqueado", "En tránsito"],
        answer: 1,
        explain: "El tipo de inspección 04 crea un lote de inspección y el stock queda en control de calidad hasta la decisión de empleo.",
      },
      {
        kind: "choice",
        q: "Se consumió por error un lote equivocado. ¿Cómo se corrige en SAP?",
        options: [
          "Borrando el documento",
          "Con un movimiento de anulación (262) y una desviación",
          "Editando la cantidad a cero",
          "No se puede corregir",
        ],
        answer: 1,
        explain: "SAP no borra documentos: se anulan con otro documento y el error se investiga como desviación.",
      },
      {
        kind: "choice",
        q: "¿Qué transacción registra la decisión de empleo?",
        options: ["COR1", "MIGO", "QA11", "MMBE"],
        answer: 2,
        explain: "QA11 registra la decisión de empleo del lote de inspección.",
      },
    ],
  },
];
