import type { Lesson } from "./types";

export const erpAFondo: Lesson = {
  slug: "erp-y-sap-a-fondo",
  level: 19,
  order: 6,
  title: "ERP y SAP en la planta a fondo",
  titleEn: "ERP and SAP on the plant floor in depth",
  minutes: 38,
  summary:
    "Qué es un ERP y qué parte usa una planta de API, los objetos que verás (material, lote, orden de proceso, receta, lote de inspección, decisión de empleo, clases de movimiento), el recorrido completo de un lote con su cuenta de stock y su rendimiento, cómo encajan los estados de stock con la cuarentena de ICH Q7, la trazabilidad desde el ERP, por qué se valida y cómo se corrige un error sin borrar nada.",
  body: `
En [SAP en la planta: órdenes, movimientos y decisión de empleo](/leccion/sap-en-planta) viste las transacciones y las clases de movimiento. Aquí verás cómo se mueve cada kilo dentro del sistema, cómo se comprueba que las cuentas cuadran y cómo se corrige un error. Lo practicarás en el [simulador de ERP](/sap) de la app, con sus mismos códigos y datos.

### Un ERP es una sola aplicación con una sola base de datos
Piensa en una tienda web hecha a trozos: el catálogo en una base de datos, el almacén en una hoja de cálculo y la facturación en otro programa, con alguien copiando datos entre ellos cada noche.

Un **ERP** (*Enterprise Resource Planning*, planificación de recursos empresariales) es lo contrario: una gran aplicación, con muchos **módulos** (*modules*), que leen y escriben en la **misma base de datos**. Cuando el almacén descuenta 240 kg de una materia prima, compras, producción, calidad y contabilidad ven el mismo número al instante, porque es la misma fila de la misma tabla.

La consecuencia para ti: **lo que contabilizas lo ve toda la empresa**. Un consumo mal registrado es un stock falso para compras, un lote mal trazado para calidad y un coste mal calculado.

### Qué parte del ERP usa una planta de API
La documentación gratuita de SAP describe el escenario de calidad en producción con estos componentes, entre otros: **PP-PI** (*Production Planning for Process Industries*) para la fabricación por lotes y recetas de las industrias química, farmacéutica y alimentaria, con **órdenes de proceso** (*process orders*); **QM** (*Quality Management*) para las inspecciones durante la producción y en la entrada desde producción; y **CO** (*Controlling*) para los costes. El stock y sus movimientos viven en **MM** (*Materials Management*): su gestión de inventario (MM-IM) registra también las entradas de los pedidos a proveedores. Cómo encaja el ERP con el MES, el LIMS y el sistema de control lo tienes en [El mapa de sistemas de una planta a fondo](/leccion/mapa-de-sistemas-a-fondo).

### Los objetos que verás, con los nombres del simulador
Cada objeto es un registro de una tabla con su clave. Los códigos son los del simulador (ficticios).

| Objeto | Qué es | En el simulador |
|---|---|---|
| **Material** (*material*) | La ficha de cada cosa que se compra o fabrica, con código y unidad | RM-1001 Intermedio B, RM-2001 tolueno, RM-3001 hidróxido de sodio al 50 %, FG-5001 API-X; todos en kg |
| **Lote** (*batch*) | Una cantidad concreta de un material, con su número, su stock y su fecha | B1001A, 300 kg, libre, caduca el 30/09/2027 |
| **Receta maestra** (*master recipe*) | Qué componentes y qué fases hacen falta para una cantidad base de producto | Receta 50000001: por 100 kg de FG-5001, 120 kg de RM-1001, 400 kg de RM-2001 y 30 kg de RM-3001; fases 0010 a 0040 |
| **Orden de proceso** (*process order*) | La instrucción de fabricar un lote concreto, copiada de la receta | Orden 1000001, 200 kg de FG-5001 |
| **Movimiento de mercancía** (*goods movement*) | Cada entrada, salida o traslado de stock, con su **clase de movimiento** (*movement type*) | 261 salida para la orden, 101 entrada del producto |
| **Lote de inspección** (*inspection lot*) | El expediente de calidad de un lote: qué ensayos tocan y qué resultados hay | 890000000001, creado al dar entrada al API |
| **Decisión de empleo** (*usage decision*) | La decisión de calidad sobre el lote de inspección | A (aceptado) o R (rechazado) |

Los datos maestros (material, receta) se explican en [Datos maestros e integración a fondo](/leccion/datos-maestros-a-fondo). Aquí nos centramos en lo que nace en cada lote.

### Los estados de la orden de proceso
La orden pasa por **estados del sistema** (*system status*). La documentación de SAP confirma que una orden recién creada tiene el estado **CRTD** y que, mientras no se libere, no se pueden notificar fases, imprimir los papeles de planta, crear la receta de control (*control recipe*) ni hacer movimientos de mercancía para ella. Al liberarla, el estado pasa a **REL** y esas restricciones desaparecen. También recoge el estado **PCNF** (parcialmente notificada). El simulador añade **CNF** (todas las fases notificadas: ya se puede dar entrada al producto) y **DLV** (producto entregado: la orden ya no admite consumos). En él, COR1 crea, COR2 libera y COR6N notifica.

### Las clases de movimiento, comprobadas
Según la documentación de gestión de inventario de SAP, la clase de movimiento controla qué cantidades y cuentas se actualizan y qué campos se piden. Estas son las útiles en una planta de API, como las describe esa documentación (versión R/3 4.6C, aún publicada; tu sistema puede variar):

| Clase | Qué hace |
|---|---|
| **101** | Entrada para un pedido o una orden; se puede elegir el tipo de stock de destino (libre, calidad o bloqueado) si no va imputada a consumo |
| **102** | Anulación de la 101 |
| **122** | Devolución al proveedor o a producción; distinta de la anulación, pide motivo |
| **261** | Salida de mercancía para una orden (de fabricación, de mantenimiento…) |
| **262** | Anulación de la 261 |
| **311** | Traslado de libre utilización entre almacenes (*storage locations*) |
| **321** | De control de calidad a libre. No se usa en materiales gestionados por QM: ahí traspasa la decisión de empleo |
| **343** | De bloqueado a libre utilización |
| **349** | De bloqueado a control de calidad |
| **551 / 553 / 555** | Desguace (*scrapping*) desde libre, calidad y bloqueado |
| **701** | Diferencia de inventario en libre; la genera el sistema tras un recuento |

Dos reglas de la misma fuente: **la clase de anulación es la clase + 1** (la de 101 es 102; la de 261, 262), y una empresa puede crear **clases propias**, que empiezan por 9, X, Y o Z: si ves una, pregunta qué hace. El simulador solo tiene la 261 y la 101.

### El recorrido de un lote, documento a documento
Hacemos en el simulador, desde el estado inicial, la orden de las misiones: 200 kg de FG-5001. El simulador numera cada operación de su registro desde 4900000001.

**Primero, el escalado de la receta.** Cantidad de cada componente = cantidad por 100 kg × 200 / 100:

- RM-1001: 120 × 2 = **240 kg**
- RM-2001: 400 × 2 = **800 kg**
- RM-3001: 30 × 2 = **60 kg**

**Segundo, elegir lotes válidos.** En MMBE, el RM-1001 tiene cuatro lotes: B1001A (300 kg, libre), B1001B (250 kg, en control de calidad), B1001C (180 kg, libre pero caducado el 31/10/2026; el simulador está a 18/11/2026) y B1001D (400 kg, libre). El ERP muestra 880 kg en libre, pero **utilizables solo hay 700**: los de B1001A y B1001D. Del hidróxido, el N3001A está bloqueado (rechazado por Calidad) y el N3001B (200 kg) está libre.

| Doc. | Transacción | Qué se registra | Efecto en el stock |
|---|---|---|---|
| 4900000001 | COR1 | Orden 1000001, 200 kg de FG-5001, estado CRTD | Ninguno |
| 4900000002 | COR2 | Orden liberada, estado REL | Ninguno |
| 4900000003 | MIGO 261 | 240 kg del lote B1001A | B1001A: 300 a 60 kg |
| 4900000004 | MIGO 261 | 800 kg del lote T2001A | T2001A: 2500 a 1700 kg |
| 4900000005 | MIGO 261 | 60 kg del lote N3001B | N3001B: 200 a 140 kg |
| 4900000006 a 09 | COR6N | Fases 0010, 0020, 0030 y 0040; en la última, 184 kg obtenidos | Ninguno |
| 4900000010 | MIGO 101 | Entrada de 184 kg: nace el lote API0001 y el lote de inspección 890000000001 | API0001: 184 kg en control de calidad |
| 4900000011 | QE51N | Resultados: valoración 99,6 %, agua 0,21 %, impureza 0,06 % | Ninguno |
| 4900000012 | QA11 | Decisión A, aceptado | API0001: de calidad a libre |

Los 184 kg son un **valor de ejemplo** dentro de los que usa el examen del simulador (entre el 90 y el 94 % de la orden).

### La cuenta de stock, resuelta
**Consumos.** Entraron en el reactor 240 + 800 + 60 = **1100 kg** de materiales.

**Stock del RM-1001 después.** B1001A queda con 300 − 240 = 60 kg. El libre total pasa de 880 a 640 kg; el utilizable, de 700 a 60 + 400 = **460 kg**. El B1001C sigue contando como libre y sigue sin servir: una cifra de stock no es un permiso de uso.

**Rendimiento.** ICH Q7 llama **rendimiento teórico** (*theoretical yield*) a lo que se obtendría sin pérdidas ni errores, y **esperado** (*expected yield*) al previsto según datos anteriores. En el simulador, la cantidad de la orden hace de teórico:

> rendimiento = 184 / 200 × 100 = **92,0 %**
> merma = 200 − 184 = **16 kg**, es decir, un **8,0 %**

ICH Q7 (8.14) pide comparar el real con el esperado e investigar las desviaciones en etapas críticas. El simulador no acepta más del 105 % de la orden ni menos del 50 %.

**Por qué 1100 kg dan 184 kg.** En este proceso ficticio, el tolueno es el disolvente y sale con las aguas madres y en el secadero, no en el producto. El ERP no cuadra la masa total, sino cada material: lo que había, menos lo que salió, igual a lo que queda. El balance de materia del proceso se estudia en [Rendimiento y balance de materia a fondo: que cuadren los kilos del lote](/leccion/balance-a-fondo).

**Tolerancias de consumo.** El simulador avisa si un consumo supera el 102 % de lo previsto y no deja notificar la carga (fase 0010) si alguno no llega al 98 %. Para el RM-1001, la ventana es de 240 × 0,98 = 235,2 kg a 240 × 1,02 = 244,8 kg. Estas cifras son del simulador; las de tu planta las fija su procedimiento.

### Estados de stock y cuarentena de ICH Q7
SAP maneja tres **tipos de stock** (*stock types*) para cada lote. ICH Q7 no habla de SAP, pero pide que cada lote tenga un número y que haya «un sistema que identifique el estado de cada lote» (7.24). Así encajan:

| Tipo de stock | En ICH Q7 | Qué pide ICH Q7 |
|---|---|---|
| **En control de calidad** (*quality inspection stock*) | Cuarentena: estado de un material aislado físicamente o por otro medio eficaz, a la espera de aprobarlo o rechazarlo (glosario) | Los materiales recibidos se mantienen en cuarentena hasta muestrearlos, examinarlos o analizarlos y liberarlos (7.20) |
| **Libre utilización** (*unrestricted-use stock*) | Material aprobado | No se usa nada antes de que la unidad de calidad termine su evaluación, salvo sistemas previstos para ello (2.17) |
| **Bloqueado** (*blocked stock*) | Rechazado o retenido | Los rechazados se identifican y controlan con un sistema de cuarentena que impida su uso no autorizado (7.44) |

El tipo de stock es ese «otro medio eficaz»: el ERP no deja consumir un lote en calidad o bloqueado, y por eso es GMP. La documentación de SAP añade que un material con QM que entra en stock de control de calidad **solo sale de él mediante la decisión de empleo**, y que el tipo de inspección **03** es para la inspección durante la producción y el **04** para la entrada desde producción: si Calidad libera, el stock pasa solo a libre. Es lo que hace QA11 en el simulador.

Liberar o rechazar los API es responsabilidad indelegable de la unidad de calidad (ICH Q7, 2.22). Las zonas y estados del almacén físico los tienes en [Almacenamiento a fondo](/leccion/almacen-a-fondo).

### Trazabilidad hacia atrás y hacia delante desde el ERP
Cada 261 une un lote de componente con una orden; cada 101 une la orden con el lote de producto. Encadenando documentos, el ERP reconstruye el árbol del lote. SAP lo ofrece como **lista de utilización de lotes** (*batch where-used list*), con dos análisis:

- **De arriba abajo** (*top-down*): todos los lotes que se usaron para fabricar un lote dado. Es la **trazabilidad hacia atrás**.
- **De abajo arriba** (*bottom-up*): todos los lotes en los que se usó un lote dado como componente. Es la **trazabilidad hacia delante**.

La documentación sugiere usarlos juntos: con el primero encuentras el componente defectuoso y con el segundo, en qué productos acabó y a qué clientes fueron. También muestra los lotes del proveedor. Y avisa: la lista se forma con los **movimientos de inventario y sus anulaciones**, y **solo aparecen los lotes con una entrada o una salida contabilizada**. Un lote elegido para la orden pero cuyo consumo nadie contabilizó no existe para la trazabilidad. En el ejemplo, hacia atrás API0001 viene de B1001A, T2001A y N3001B por la orden 1000001. El árbol completo, con devoluciones y retiradas, está en [Trazabilidad, devoluciones y retiradas a fondo](/leccion/trazabilidad-a-fondo).

### Por qué el ERP se valida
El anexo 11 de las GMP europeas se aplica a todo sistema informatizado usado en actividades GMP: la aplicación se **valida** y la infraestructura se **cualifica**. ICH Q7 (5.40) lo dice para API, con una profundidad según la complejidad y criticidad del sistema.

¿Todo el ERP es GMP? No necesariamente. La guía de integridad de datos de PIC/S (PI 041-1, 9.3) pone como sistemas críticos los que controlan la compra y el **estado de materiales y productos**, los que dan datos al registro del lote y los que se usan para decidir la liberación: en un ERP, los tipos de stock, los consumos por lote, la entrada del producto y la decisión de empleo. Las nóminas, no. La extensión se decide con una evaluación de riesgos documentada (anexo 11, apartado 1).

**GAMP, como idea.** La industria usa la guía GAMP, de la asociación ISPE (de pago). La guía gratuita PIC/S PI 011-3 reproduce las categorías de GAMP 4, entre ellas **paquetes configurables** (se registra versión y configuración y se verifica contra los requisitos del usuario) y **software a medida** (se audita al proveedor y se valida todo). Un ERP comercial se configura para cada empresa, y un programa propio añadido sería software a medida; la guía avisa de que los sistemas grandes mezclan categorías y piden un enfoque de riesgo global (15.2). Las versiones actuales de GAMP no las hemos leído: sigue en [Validación de sistemas informatizados (GAMP 5)](/leccion/validacion-de-sistemas).

**Separar funciones.** PI 041-1 (9.5) pide dar a cada usuario el mínimo acceso necesario y separar funciones (*segregation of duties*): quien contabiliza consumos no toma decisiones de empleo. El anexo 11 pide registrar cada alta, cambio y baja de autorizaciones (12.3) y controlar los cambios de configuración (apartado 10). Hay un borrador de revisión del anexo 11 publicado para consulta; qué versión rige te lo dice Calidad.

### Los errores típicos y cómo se corrigen sin borrar
La documentación de SAP para la industria de proceso es clara: un movimiento mal contabilizado **no se cambia en el documento de material**; se anula y se contabiliza de nuevo. La anulación va con referencia al original y crea un **documento de anulación** (*reversal document*): quedan los dos, como pide ICH Q7 (6.14) en papel, donde la corrección no tapa lo anterior. Y el error se comunica según el procedimiento; si afecta a lo que pasó en el reactor, es una desviación (más en [Desviaciones y CAPA a fondo](/leccion/desviaciones-y-capa-a-fondo)).

**Error 1. Consumo en el lote equivocado.** Cargas los sacos del B1001D, pero contabilizas los 240 kg contra el B1001A. Los dos son válidos y el sistema no protesta: el ERP dice B1001A 60 kg y B1001D 400 kg; en el almacén hay 300 y 160. La trazabilidad apunta a un lote que no entró. Corrección: **262** del documento malo (B1001A vuelve a 300 kg) y **261** correcta de 240 kg del B1001D (queda en 160 kg). Lo detecta quien compara la hoja de producción con el ERP.

Si el error es físico (cargaste un saco en cuarentena), no lo arregla el ERP: es una desviación grave. El simulador bloquea los consumos de lotes en calidad, bloqueados o caducados.

**Error 2. Movimiento duplicado.** La pantalla tarda, pulsas otra vez y salen dos 261 de 800 kg de tolueno. El ERP descuenta 1600 kg: el T2001A muestra 2500 − 1600 = **900 kg**, aunque en el tanque hay 1700. El simulador avisa, porque 1600 kg pasan del 102 % previsto (816 kg). Corrección: **262** de uno de los dos documentos; el stock vuelve a 1700 kg. Nunca «compensas» haciendo una entrada inventada.

**Error 3. Unidad de medida.** Todos los materiales del simulador van en kg. Si copias el peso de un ticket en gramos (60 kg = 60000 g) y escribes 60000, el simulador lo rechaza porque el lote solo tiene 200 kg. Si te pasas al revés y escribes 0,06, lo acepta, pero no deja notificar la carga: 0,06 kg está muy por debajo del mínimo de 58,8 kg. Mira la unidad del campo, no solo el número.

**Lo que no se hace nunca:** borrar, pedir a alguien que «lo quite de la base de datos», ajustar el inventario para que cuadre o contabilizar con el usuario de otro. El anexo 11 pide audit trail de los cambios GMP con su motivo (apartado 9) y una comprobación adicional para los datos críticos tecleados a mano (apartado 6), igual que ICH Q7 (5.43 y 5.45).

### Practica en el simulador
En el [simulador de ERP](/sap) haz las diez misiones, de MMBE y C203 a la decisión de empleo. La novena fabrica un segundo lote con una impureza del 0,14 % (máximo 0,1 %) que obliga a rechazarlo. La décima pasa al ERP el lote FX-101 que fabricaste en el simulador de planta. Cuando las hagas sin pistas, pasa al examen cronometrado.

En planta manda siempre el procedimiento vigente (SOP): los códigos, las pantallas y las tolerancias de tu ERP pueden ser distintos de los del simulador.
`,
  plant: `
Turno de mañana en la sala del reactor ficticio RX-210. La orden 4207713 (valor de ejemplo) pide 360 kg de la materia prima ficticia MP-77, y en el palé hay dos lotes del mismo material: MP-77-0412 y MP-77-0415.

La hoja de producción dice que toca el MP-77-0415. Cargas sus sacos y, en el terminal de la sala, contabilizas el consumo. Al repasar antes de firmar ves que el desplegable se quedó en MP-77-0412, el primero de la lista: el ERP ha descontado 360 kg de un lote que sigue entero en el palé.

No tocas nada más. Avisas al jefe de turno y anotas en la hoja lo que ha pasado, con la hora. El responsable con permiso hace la anulación 262 del documento malo y la 261 correcta contra el MP-77-0415. En el registro quedan tres documentos: el error, su anulación y el bueno. En la hoja, un comentario con los números de documento.

Al final del lote, el secadero ficticio SD-420 descarga 331 kg (valor de ejemplo) para un teórico de 350 kg: rendimiento del 94,6 %, dentro del rango esperado de la hoja. La entrada 101 deja el lote en control de calidad.

Dos semanas después, Calidad hace un simulacro de trazabilidad con el MP-77-0412. El ERP lo muestra sin consumos y el palé tiene sus sacos intactos: todo cuadra. Si nadie hubiera corregido el consumo, el árbol habría apuntado a un lote que nunca entró en el reactor.
`,
  batchRecord: `
En la hoja de producción (*batch record*), en papel o en el MES, verás casillas que tienen su reflejo en el ERP:

- **Número de orden de proceso** y número de lote del producto.
- **Cada consumo**: material, lote, cantidad con su unidad y, si la hoja lo pide, el número de documento del movimiento 261.
- **Comprobación de estado**: que cada lote cargado estaba en libre utilización y dentro de fecha.
- **Notificación de cada fase**, en el orden de la receta.
- **Cantidad obtenida, rendimiento** y su comparación con el rango esperado.
- **Entrada del producto** (101): cantidad, número de lote y número del lote de inspección.
- **Correcciones**: número del documento erróneo, del de anulación (102, 262) y del correcto, con comentario, fecha y firma.
- **Incidencias del sistema**: caídas, mensajes de error o movimientos pendientes, con la hora y a quién avisaste.

La decisión de empleo no la verás en tu hoja: la toma Calidad, al final, después de revisar todo lo anterior.
`,
  terms: [
    { es: "Planificación de recursos empresariales", en: "Enterprise Resource Planning (ERP)", def: "Aplicación de gestión con muchos módulos que comparten una misma base de datos: compras, stock, producción, calidad, ventas y costes." },
    { es: "Módulo", en: "Module", def: "Parte del ERP dedicada a un área, como MM (materiales), PP-PI (producción de proceso) o QM (calidad)." },
    { es: "Orden de proceso", en: "Process order", def: "Instrucción de fabricar un lote concreto, copiada de la receta maestra, con sus componentes, fases y estado." },
    { es: "Receta maestra", en: "Master recipe", def: "Dato maestro con los componentes y las fases para una cantidad base de producto." },
    { es: "Estado del sistema", en: "System status", def: "Código que indica en qué punto está una orden (CRTD, REL, PCNF…) y qué se puede hacer con ella." },
    { es: "Movimiento de mercancía", en: "Goods movement", def: "Entrada, salida o traslado de stock contabilizado en el ERP." },
    { es: "Clase de movimiento", en: "Movement type", def: "Código de tres cifras que define qué hace un movimiento: 101 entrada, 261 salida para una orden, 321 de calidad a libre." },
    { es: "Documento de material", en: "Material document", def: "Registro que deja cada movimiento de mercancía; no se cambia, se anula." },
    { es: "Documento de anulación", en: "Reversal document", def: "Movimiento que deshace otro con referencia a él; quedan los dos. Su clase es la original más uno." },
    { es: "Stock en control de calidad", en: "Quality inspection stock", def: "Tipo de stock de un lote que espera la decisión de calidad; equivale a la cuarentena de ICH Q7." },
    { es: "Stock de libre utilización", en: "Unrestricted-use stock", def: "Tipo de stock que se puede consumir o expedir." },
    { es: "Stock bloqueado", en: "Blocked stock", def: "Tipo de stock que no se puede usar, por ejemplo un lote rechazado." },
    { es: "Lista de utilización de lotes", en: "Batch where-used list", def: "Función que reconstruye de qué lotes salió un lote (de arriba abajo) y en qué lotes se usó (de abajo arriba)." },
    { es: "Separación de funciones", en: "Segregation of duties", def: "Repartir permisos para que una misma persona no haga y apruebe la misma operación crítica." },
  ],
  quiz: [
    {
      kind: "choice",
      q: "Contabilizaste por error una salida 261 de 120 kg. ¿Con qué clase de movimiento se anula, según la regla de SAP?",
      options: ["102, la anulación de una entrada", "122, devolución a producción", "262, la clase original más uno", "311, traslado entre almacenes"],
      answer: 2,
      explain: "La clase de anulación es la clase original más uno: la de 101 es 102 y la de 261 es 262. Quedan los dos documentos.",
    },
    {
      kind: "number",
      q: "La receta 50000001 pide 120 kg de RM-1001 por cada 100 kg de FG-5001. ¿Cuántos kg de RM-1001 necesita una orden de 250 kg?",
      answer: 300,
      tolerance: 0.001,
      unit: "kg",
      explain: "Cantidad = 120 × 250 / 100 = 300 kg. El ERP escala la receta al tamaño de la orden.",
    },
    {
      kind: "number",
      q: "Una orden de 200 kg de FG-5001 (que en el simulador hace de cantidad teórica) termina con 188 kg obtenidos. ¿Qué rendimiento en porcentaje se notifica?",
      answer: 94,
      tolerance: 0.005,
      unit: "%",
      explain: "Rendimiento = 188 / 200 × 100 = 94 %. La merma es de 12 kg, un 6 %.",
    },
    {
      kind: "number",
      q: "Del RM-1001 hay en MMBE: B1001A 300 kg libre, B1001B 250 kg en calidad, B1001C 180 kg libre pero caducado y B1001D 400 kg libre. Consumes 240 kg del B1001A. ¿Cuántos kg quedan que se puedan usar de verdad?",
      answer: 460,
      tolerance: 0.001,
      unit: "kg",
      explain: "Utilizables son los libres y en fecha: B1001A, que queda en 300 − 240 = 60 kg, y B1001D, con 400 kg. Total 60 + 400 = 460 kg.",
    },
    {
      kind: "choice",
      q: "La pantalla se quedó pensando, pulsaste dos veces y hay dos salidas 261 iguales de tolueno. ¿Qué es lo correcto?",
      options: [
        "Avisar y anular uno de los dos documentos con una 262 que deje rastro",
        "Pedir a sistemas que borre el documento repetido de la base de datos",
        "Hacer una entrada 101 de tolueno por la misma cantidad para compensar",
        "Dejarlo así y descontarlo del consumo del siguiente lote de la orden",
      ],
      answer: 0,
      explain: "Un documento de material no se borra ni se cambia: se anula con referencia a él. Una entrada inventada falsearía el stock y la trazabilidad.",
    },
    {
      kind: "choice",
      q: "¿Qué tipo de stock de SAP corresponde a la cuarentena que define ICH Q7?",
      options: [
        "Libre utilización, porque el lote ya está físicamente en el almacén",
        "Bloqueado, porque cualquier lote nuevo se considera rechazado",
        "Stock en tránsito, porque el lote aún va de camino a la planta",
        "En control de calidad, a la espera de que se apruebe o se rechace",
      ],
      answer: 3,
      explain: "ICH Q7 define la cuarentena como el estado de un material aislado física o eficazmente hasta decidir si se aprueba o se rechaza: es el stock en control de calidad.",
    },
    {
      kind: "choice",
      q: "El API-X está gestionado por QM y su lote está en control de calidad. Un compañero propone pasarlo a libre con una 321 porque «el análisis ya salió bien». ¿Qué le dices?",
      options: [
        "Que vale, porque la 321 traspasa de control de calidad a libre",
        "Que no: en materiales con QM el traspaso lo hace la decisión de empleo",
        "Que vale, siempre que lo anote después en la hoja de producción",
        "Que no: primero hay que bloquearlo con una 343 y luego liberarlo",
      ],
      answer: 1,
      explain: "Según la documentación de SAP, la 321 no se usa en materiales gestionados por QM: solo la decisión de empleo de Calidad saca el lote del stock de control de calidad.",
    },
    {
      kind: "choice",
      q: "Un proveedor avisa de un problema con un lote suyo. ¿Qué análisis de la lista de utilización de lotes dice en qué lotes de API acabó?",
      options: [
        "De abajo arriba: en qué lotes se usó un lote como componente",
        "De arriba abajo: de qué lotes se hizo un lote determinado",
        "El resumen de stock del material en el almacén del API",
        "La lista de lotes de inspección pendientes de Calidad",
      ],
      answer: 0,
      explain: "El análisis de abajo arriba sigue el lote hacia delante, hasta los productos y los clientes. El de arriba abajo va hacia atrás, a los componentes.",
    },
    {
      kind: "number",
      q: "El lote de tolueno T2001A tenía 2500 kg. Se contabilizaron por error dos salidas 261 de 800 kg cada una, aunque solo se cargaron 800 kg. ¿Cuántos kg muestra el ERP antes de corregir?",
      answer: 900,
      tolerance: 0.001,
      unit: "kg",
      explain: "El ERP descuenta las dos: 2500 − 800 − 800 = 900 kg. En el tanque hay 1700 kg; tras anular un documento con una 262, el ERP vuelve a 1700 kg.",
    },
    {
      kind: "choice",
      q: "Hay que decidir qué funciones del ERP de la planta se validan como sistema GMP. ¿Cuáles, como mínimo?",
      options: [
        "Solo las pantallas que usa el operador en la sala de producción",
        "Ninguna, porque el ERP es un programa comercial ya probado",
        "Las nóminas y la contabilidad, porque afectan a toda la empresa",
        "Las que controlan el estado de los lotes, los consumos y la liberación",
      ],
      answer: 3,
      explain: "PIC/S PI 041-1 pone como críticos los sistemas que controlan el estado de materiales y productos y los que se usan para decidir la liberación. La extensión se fija con una evaluación de riesgos (anexo 11).",
    },
  ],
};
