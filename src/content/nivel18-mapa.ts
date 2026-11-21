import type { Lesson } from "./types";

export const mapaAFondo: Lesson = {
  slug: "mapa-de-sistemas-a-fondo",
  level: 18,
  order: 2,
  title: "El mapa de sistemas de una planta a fondo",
  titleEn: "Plant systems architecture in depth",
  minutes: 38,
  summary:
    "Los niveles de una planta desde el sensor hasta el ERP, qué hace cada sistema y a qué ritmo, el viaje completo de los datos de un lote de principio activo, qué pasa cuando falla una interfaz, cómo se nombran los equipos, qué sistemas son GMP y qué haces tú cuando uno se cae.",
  body: `
En «El mapa de sistemas: de los sensores al ERP» viste la tabla de niveles y el viaje resumido de un lote. En «El sistema de control a fondo» te sentaste ante la pantalla del reactor. Aquí miras la planta entera como un arquitecto de software mira el diagrama de una aplicación web: servicios, bases de datos y llamadas entre ellos.

Si has desplegado una web con servidor, base de datos y API externa, ya tienes media lección hecha. Lo nuevo es lo industrial y lo GMP (*Good Manufacturing Practice*, normas de correcta fabricación).

### Antes de empezar: qué sabemos de ISA-95 y qué no
El modelo de niveles que verás en todas partes sale de la norma **ISA-95** (en su versión internacional, **IEC 62264**), cuyo nombre en inglés es *Enterprise-Control System Integration*: integrar los sistemas de la empresa con los de control. Es una norma **de pago**, y para esta lección no hemos podido leer ningún documento gratuito que reproduzca su texto. Lo que sigue es el resumen que repiten muchas fuentes públicas (fabricantes, revistas técnicas): una idea para ordenar la cabeza, no la letra de la norma.

Dos avisos sobre esos resúmenes:

- **No todos colocan igual el controlador.** Unos ponen en el nivel 1 los instrumentos y en el 2 todo el control (PLC, DCS, SCADA, pantallas). Otros, sobre todo al hablar de redes (el modelo Purdue), ponen los controladores en el 1 y la supervisión en el 2, como la lección corta. Todos comparten el orden: abajo lo físico y rápido, arriba el negocio y lo lento.
- **Las escalas de tiempo son orientativas.** Los resúmenes dan al nivel 4 meses, semanas y días, y al 3 turnos, horas y minutos, con pequeñas diferencias entre ellos. Aquí son solo una idea.

### Los cinco pisos del edificio
Piensa en la planta como un edificio de cinco pisos. En el sótano está la química; en el ático, las cuentas de la empresa.

| Nivel | Qué hace | Sistemas típicos | A qué ritmo piensa |
|---|---|---|---|
| 0 | El proceso físico: el producto se calienta, reacciona, se filtra, se seca | El reactor, la centrífuga, el filtro, el secadero | El de la propia química y física del proceso |
| 1 | Medir y actuar sobre el proceso | Transmisores, válvulas, motores; según el resumen, también los controladores | Milisegundos |
| 2 | Controlar y supervisar | PLC, DCS, SCADA, estaciones de operación (HMI) | Segundos |
| 3 | Gestionar las operaciones de fabricación | MES con su hoja de producción electrónica, LIMS, historiador, gestión de recetas de lote | Minutos, horas, turnos |
| 4 | Gestionar el negocio | ERP: planificación, compras, almacén, estado del stock | Días, semanas, meses |

Al lado del edificio, conectados a varios pisos, están la **gestión documental** (*Document Management System*, DMS), con los procedimientos vigentes; el **sistema de calidad electrónico** (*electronic Quality Management System*, eQMS), con desviaciones, CAPA y controles de cambios; y el **sistema de mantenimiento** (*Computerized Maintenance Management System*, CMMS), con órdenes de trabajo y calibraciones.

### Qué hace cada sistema, en una frase y con su analogía web

| Sistema | Qué hace | Si fuera una web |
|---|---|---|
| Instrumentos y actuadores | Convierten el mundo físico en señales y las señales en movimiento | El teclado, la cámara y la pantalla del usuario |
| Autómata (*programmable logic controller*, PLC) o controlador del sistema de control distribuido (*distributed control system*, DCS) | Ejecuta en bucle, sin parar, los lazos, las secuencias y los enclavamientos | Un proceso en segundo plano que nunca se reinicia |
| SCADA (*supervisory control and data acquisition*) y pantallas (*human-machine interface*, HMI) | Enseñan el proceso al operador y le dejan dar órdenes | El panel de administración |
| Historiador | Guarda cada medida con su hora, durante años | Una base de datos de series temporales con los registros de monitorización |
| Sistema de ejecución de fabricación (*manufacturing execution system*, MES) con la hoja de producción electrónica (*electronic batch record*, EBR) | Guía al operador paso a paso, comprueba lo que hace y registra el lote | El flujo de pago de una tienda, con sus validaciones de formulario |
| Sistema del laboratorio (*laboratory information management system*, LIMS) | Gestiona muestras, análisis, resultados y su aprobación | El servicio de verificación que aprueba o rechaza un pedido |
| Planificación de recursos (*enterprise resource planning*, ERP) | Planifica, compra, guarda el stock y sabe en qué estado está cada lote | El sistema de facturación y almacén del negocio |

**El controlador piensa en milisegundos.** El libro de texto libre de instrumentación de Tony Kuphaldt explica que el programa de un PLC se ejecuta en ciclos (*scan*) muy cortos, del orden de milisegundos. Por eso el MES no abre válvulas: manda una consigna y el controlador se encarga.

**El de arriba manda consignas, el de abajo las cumple.** El mismo libro llama **control de supervisión** (*supervisory control*) a esta idea: un ordenador de nivel superior envía las consignas y los controladores de base (*regulatory*) hacen el trabajo continuo de ajustar las válvulas. La consigna que llega por la red es una **consigna remota** (*remote setpoint*); la que teclea el operador en la carátula, una **consigna local**.

**El historiador recoge y sirve.** Según el capítulo de ciberseguridad del mismo libro, el historiador lee los datos del sistema de control a intervalos regulares, los guarda en un disco de gran capacidad, normalmente durante años, y se los sirve a quien los pida, sin que nadie lea directamente de los controladores.

### Escalas de tiempo: por qué no se mezclan los pisos
Entre el nivel 1 y el 4 hay una distancia enorme: milésimas de segundo frente a semanas. Con valores de ejemplo:

- El controlador del reactor ejecuta su programa cada 100 ms: 10 veces por segundo.
- El historiador guarda la temperatura una vez por segundo: un valor de cada 10 ciclos del controlador.
- En un día hay 24 × 3600 = 86400 segundos, así que una sola medida genera 86400 valores diarios.
- El MES solo necesita unos pocos: la temperatura al empezar y acabar el mantenimiento, el máximo.
- El ERP no quiere ninguno: solo cuántos kilos se consumieron y se produjeron.

Cada piso **resume** la información del de abajo. Si el ERP tuviera que tragarse los 86400 valores diarios de cada sensor, se ahogaría; si el controlador esperara una respuesta del ERP para abrir una válvula, el reactor no estaría controlado.

### El viaje de un lote, paso a paso
Sigamos un lote de un principio activo ficticio, el **API-XR55**, por todos los sistemas. Los números de orden, códigos y cantidades son valores de ejemplo.

| Paso | Sistema | Qué ocurre | Dato que nace o viaja |
|---|---|---|---|
| 1 | ERP | Planificación crea la orden de fabricación 4100778 para 250 kg de API-XR55 y reserva los materiales | Orden, receta maestra y versión, lista de materiales |
| 2 | ERP a MES | La orden baja al MES por una interfaz | Número de orden, cantidades teóricas, lotes de material propuestos |
| 3 | MES | El MES genera la hoja de producción electrónica del lote y la emite | Pasos, rangos, firmas que hará falta dar |
| 4 | Almacén y MES | Se pesan y entregan las materias primas; tú escaneas cada etiqueta | Lote de cada material, peso real, quién y cuándo |
| 5 | MES a DCS | El MES descarga al DCS los parámetros de la receta de control | Consignas, cantidades y tiempos del lote |
| 6 | DCS | Tú inicias las fases en la estación de operación; el controlador inertiza, carga, calienta y dosifica | Órdenes del operador, alarmas, estados de fase |
| 7 | Historiador | Recoge cada segundo temperaturas, presiones, caudales y apertura de válvulas | Series de datos con su hora |
| 8 | DCS e historiador a MES | El MES recibe los valores que tiene que figurar en el registro | Valores reales de los parámetros críticos |
| 9 | MES y LIMS | Tomas el control en proceso; el LIMS registra la muestra e imprime la etiqueta | Número de muestra, punto, hora, quién la tomó |
| 10 | LIMS | El laboratorio analiza, compara con la especificación y aprueba el resultado | Resultado, cumple o no cumple, analista y revisor |
| 11 | Centrífuga, secadero y MES | El producto se aísla, se seca y se envasa; cada bidón recibe su etiqueta | Peso de cada bidón, rendimiento real |
| 12 | MES a ERP | El MES informa del consumo real de materiales y del producto obtenido | Consumos y entrada de producto en stock en control de calidad (cuarentena) |
| 13 | LIMS, eQMS y MES | Calidad revisa la hoja de producción, el resultado final y las desviaciones abiertas | Revisión firmada, desviaciones cerradas |
| 14 | ERP | La unidad de calidad toma la decisión y el lote cambia de estado en el ERP | Lote liberado o rechazado, quién y cuándo |

La guía ICH Q7, la de GMP para principios activos, explica por qué el último paso es de calidad y no de producción: entre las responsabilidades de la unidad de calidad independiente, que no se delegan, está liberar o rechazar todos los API (apartado 2.22). Y antes de liberar, la unidad de calidad revisa y aprueba los registros de producción y de laboratorio de las etapas críticas (6.71) y todos los informes de desviaciones, investigaciones y resultados fuera de especificación (6.72).

Observa **dónde nace cada dato**: la orden, en el ERP; la medida, en el instrumento; el resultado, en el laboratorio. Los demás reciben copias. Es el sistema de registro de la lección corta.

### Interfaces: las API de la planta
Cada flecha de esa tabla es una **interfaz** (*interface*): una conexión por la que un sistema le pasa datos a otro. Son las llamadas entre servicios que conoces del desarrollo web, y fallan igual.

| Qué falla | En una web | En la planta | Qué ves tú |
|---|---|---|---|
| El receptor está caído | La API devuelve error 503 | El MES no puede enviar al ERP los consumos | Un aviso de «pendiente de enviar»; el lote sigue |
| El mensaje se pierde sin avisar | Una petición que nadie reintenta | Un resultado del LIMS que nunca llega al MES | Un paso esperando un dato que no aparece |
| El mensaje llega dos veces | Un pago cobrado dos veces | Un consumo de disolvente descontado dos veces del stock | Un stock que no cuadra |
| El mensaje llega alterado | Un campo mal parseado | Una coma decimal leída como separador de miles | Una cantidad absurda en pantalla |
| Los relojes no coinciden | Registros desordenados | La alarma aparece después de la acción que la causó | Una secuencia de hechos imposible |

El **anexo 11** de las GMP europeas, el de sistemas informatizados, pide en su apartado 5 que los sistemas que intercambian datos electrónicamente tengan comprobaciones integradas para que la entrada y el procesado sean correctos y seguros. La guía de integridad de datos de PIC/S (*Pharmaceutical Inspection Co-operation Scheme*), PI 041-1, concreta en su apartado 9.4: las interfaces se evalúan en la validación para asegurar una transferencia correcta y completa, con métodos como la transferencia segura, el cifrado o las sumas de comprobación (*checksums*). Añade que una transferencia automática bien diseñada y cualificada es mucho más fiable que una hecha a mano, y avisa de que guardar un dato primero en el disco local de un equipo da ocasión a borrarlo o cambiarlo antes de que llegue a su sitio.

La misma guía (9.1.6) propone el **mapa de flujo de datos** (*data flow map*), un dibujo de por dónde pasa cada dato, para ver los puntos débiles de los sistemas conectados. La tabla del viaje del lote es uno en forma de lista.

**Lo que tú puedes hacer** ante una interfaz rota es casi siempre lo mismo: no repetir la operación para «forzar» el envío (crearías el duplicado), anotar lo que ves con la hora y avisar. La cola de mensajes pendientes la gestiona sistemas, no el turno.

### El modelo físico: cómo se llama cada equipo
Para que todos los sistemas hablen del mismo reactor, hace falta un nombre único para cada equipo. Las normas de lotes (ISA-88, también de pago) y de integración (ISA-95) proponen un modelo jerárquico de equipos. De nuevo, no hemos leído su texto: lo que sigue es la idea que repiten los resúmenes públicos y la documentación de fabricantes, y tu planta puede usar otros nombres.

| Escalón | Qué es | Ejemplo ficticio |
|---|---|---|
| Empresa | La compañía dueña de todo | Empresa ficticia del curso |
| Planta (*site*) | Un lugar físico con sus edificios | Planta P1 |
| Área | Una zona de la planta | Área A2, síntesis |
| Célula de proceso (*process cell*) | Conjunto de equipos que fabrican un lote juntos | Tren de síntesis T2 |
| Unidad (*unit*) | Un equipo principal que contiene el producto, como un reactor | Reactor R-201 |
| Módulo de equipo (*equipment module*) | Un grupo de piezas que hace una función dentro de la unidad | Dosificación de disolvente DS-201 |
| Módulo de control (*control module*) | La pieza básica: una válvula, un motor, un transmisor | Válvula XV-2011 |

En el mismo tren T2, después del R-201, vendrían la centrífuga CF-202 y el secadero SD-203.

¿Para qué le sirve esto a un operador? Para leer las etiquetas de los equipos (*tags*). Si en la pantalla ves algo como P1-A2-R201-TT01 (valor de ejemplo), puedes leerlo de izquierda a derecha como una ruta de carpetas: planta, área, reactor, transmisor de temperatura número 1. Y para entender por qué un número de equipo mal escrito en el MES es un problema: el registro del lote diría que se fabricó en otro reactor.

### Qué sistemas son GMP y por qué importa
Un sistema es GMP cuando forma parte de una actividad regulada por las GMP. El anexo 11 lo dice así en su principio: se aplica a todas las formas de sistemas informatizados usados como parte de actividades reguladas por las GMP. Y añade dos ideas clave: la aplicación tiene que estar **validada** y la infraestructura informática, **cualificada**; y si un sistema sustituye a una operación manual, la calidad del producto, el control del proceso y la garantía de calidad no pueden empeorar.

ICH Q7 (apartado 5.4) lo concreta para principios activos: los sistemas relacionados con las GMP se validan, con una profundidad según su diversidad, complejidad y criticidad (5.40); tienen controles contra accesos o cambios no autorizados y contra omisiones de datos, como un sistema apagado que no los captura (5.43); sus incidencias que puedan afectar a la calidad o a los registros se registran e investigan (5.46); y sus cambios pasan por control de cambios (5.47).

PI 041-1 (apartado 9.3) pide un **inventario** de sistemas con su nombre, ubicación, función, criticidad (impacto GMP directo, indirecto o ninguno) y estado de validación. El anexo 11 (4.3) pide, para los críticos, una descripción con su disposición física y lógica, sus flujos de datos y sus interfaces. PI 041-1 da ejemplos de sistemas críticos: los que controlan la compra y el estado de materiales y productos, los que controlan y recogen datos de procesos críticos, los que generan datos para decidir la calidad o que van al registro del lote, y los que se usan para decidir la liberación.

Aplicado al mapa:

| Sistema | ¿GMP? | Por qué |
|---|---|---|
| DCS y PLC del reactor, la centrífuga o el secadero | Sí | Controlan y registran un proceso de fabricación crítico |
| MES y hoja de producción electrónica | Sí | Generan el registro de fabricación del lote |
| LIMS | Sí | Genera los datos con los que se decide la calidad |
| ERP, en lo que toca a stock y estado del lote | Sí | Controla el estado de materiales y productos y la liberación |
| Historiador | Según su uso | Si sus datos van al registro del lote o a una investigación, sí |
| DMS, eQMS y mantenimiento | Normalmente sí | Gestionan procedimientos, desviaciones y calibraciones de equipos críticos |
| Correo, nóminas, contabilidad | Normalmente no | No intervienen en la calidad del producto |

Cada empresa lo decide con su evaluación de riesgos documentada (anexo 11, apartado 1). **Por qué te importa**: en un sistema GMP cada acción tuya queda registrada con tu usuario, todo cambio pasa por control de cambios y todo fallo es una incidencia que se evalúa. Ahí no se instala nada ni se «arregla» nada por tu cuenta.

### Cuando un sistema se cae
El apartado 16 del anexo 11, «Continuidad de negocio», dice: para la disponibilidad de los sistemas informatizados que soportan procesos críticos, deben preverse medidas que aseguren la continuidad de esos procesos si el sistema se avería (por ejemplo, un sistema manual o alternativo). El tiempo necesario para poner en marcha la alternativa debe basarse en el riesgo y ser adecuado para cada sistema y para el proceso que soporta. Y estas medidas deben estar documentadas y probadas adecuadamente.

Tres consecuencias para ti:

- **Hay un plan para cada sistema, y no es el mismo.** El tiempo de reacción se decide por riesgo.
- **El plan está escrito y ensayado.** Suelen ser formularios de contingencia en papel, aprobados y numerados: sabe dónde están antes de necesitarlos.
- **Volver es parte del plan.** ICH Q7 admite registrar datos por un segundo medio además del ordenador (5.49) y pide un sistema de respaldo cuando una avería pudiera hacer perder registros para siempre (5.48). Cuando vuelve el sistema, lo que se anotó en papel se incorpora según el procedimiento, con referencia a la hoja de contingencia; si se teclean datos críticos, el anexo 11 (apartado 6) pide una comprobación adicional, por una segunda persona o por medios electrónicos validados.

Qué cambia según el piso que se cae (es orientativo; manda tu procedimiento):

| Se cae | Qué sigue funcionando | Qué haces |
|---|---|---|
| ERP | Planta, MES y LIMS, con lo que ya tenían | Sigues el lote; los movimientos de stock esperan |
| MES | El DCS sigue controlando el proceso | Pasas a la hoja de contingencia en papel |
| Historiador | El control y las pantallas en tiempo real | Anotas a mano los valores que pida el procedimiento |
| LIMS | El análisis puede seguir; el registro se retrasa | Etiquetas y registras la muestra como diga la contingencia |
| Interfaz entre dos sistemas | Cada sistema por separado | Anotas lo que no se transmite y avisas |
| Controlador del DCS | No es un fallo de registro: es un fallo de control | Llevas el equipo a posición segura según procedimiento de emergencia |

En todos los casos: anotas la hora de la caída y de la vuelta, avisas, no reconstruyes de memoria y la incidencia se registra y evalúa (anexo 11, apartado 13; ICH Q7, 5.46).

Los sistemas, códigos y cantidades de esta lección son ficticios. En planta manda siempre el procedimiento vigente (SOP).
`,
  plant: `
Turno de noche en la planta ficticia P1. El reactor R-201 del tren T2 lleva tres horas en la fase «Mantener» del lote 26-0931 de API-XR55, a 62 °C. Todo va bien.

A las 02:10 la tableta del MES muestra «Sin conexión con el servidor». La pantalla del DCS sigue viva: la temperatura sigue en 62,1 °C y la fase sigue en marcha. Lo que se ha caído es el piso 3, no el control.

Avisas a la jefa de turno, que llama a la guardia de sistemas y declara la contingencia. Del armario de documentación sacas el formulario de contingencia del MES para el R-201, con su número de copia. Anotas la hora de la caída, 02:10, y sigues los pasos en papel: la lectura de temperatura cada 15 min que pide el procedimiento, con hora, valor, tus iniciales y el reloj del DCS como referencia.

A las 03:25 toca tomar el control en proceso. El LIMS funciona: imprimes la etiqueta, tomas la muestra y anotas en la hoja de contingencia la hora y el número de muestra, que el MES no puede recoger.

A las 04:40 vuelve el MES. Sistemas comprueba que la cola de mensajes pendientes se ha vaciado sin duplicados: los dos consumos de disolvente aparecen una sola vez. Introduces en el MES las lecturas del papel con referencia a la hoja; tu compañero comprueba cada valor contra el original y firma la verificación. Anotas la hora de recuperación, 04:40. La hoja de contingencia se adjunta al lote y la jefa de turno abre la incidencia en el eQMS.
`,
  batchRecord: `
- **Cabecera**: número de orden del ERP, producto, número de lote, receta maestra y su versión, y la unidad donde se fabrica con su código completo (p. ej. R-201 del tren T2).
- **Datos que llegan de otros sistemas**: pesos de la báscula, valores del DCS y resultados del LIMS, con la marca de su origen. No los vuelves a escribir a mano.
- **Números que enlazan sistemas**: número de muestra del LIMS en cada control en proceso, número de desviación del eQMS si la hay, número de la hoja de contingencia si se usó.
- **Si hubo una caída**: hora de caída y de recuperación, sistema afectado, hojas de contingencia adjuntas, datos introducidos después con referencia al papel y la verificación de la segunda persona.
- **Avisos de interfaz**: si un dato no llegó o llegó raro, tu comentario con la hora y a quién avisaste.
- **Al final**: los consumos y el producto obtenido que el MES envía al ERP, y la decisión de calidad que cambia el estado del lote.
`,
  terms: [
    { es: "Integración empresa y control", en: "Enterprise-control system integration (ISA-95 / IEC 62264)", def: "Norma de pago que ordena los sistemas de una fábrica en niveles y describe qué información se pasan; en esta lección solo se usa su idea general." },
    { es: "Control de supervisión", en: "Supervisory control", def: "Un sistema de nivel superior envía consignas y los controladores de base hacen el ajuste continuo de las válvulas." },
    { es: "Consigna remota", en: "Remote setpoint", def: "Consigna que el controlador recibe de otro sistema por la red, en lugar de teclearla el operador." },
    { es: "Ciclo del controlador", en: "Scan", def: "Cada vuelta del programa de un PLC, que se repite sin parar; dura del orden de milisegundos." },
    { es: "Historiador", en: "Data historian", def: "Base de datos que recoge las medidas del sistema de control a intervalos regulares y las guarda durante años." },
    { es: "Orden de fabricación", en: "Process order / production order", def: "Encargo creado en el ERP para fabricar una cantidad de un producto con una receta y unos materiales." },
    { es: "Interfaz", en: "Interface", def: "Conexión por la que dos sistemas intercambian datos; debe validarse para que la transferencia sea correcta y completa." },
    { es: "Mapa de flujo de datos", en: "Data flow map", def: "Representación gráfica de por dónde pasa cada dato entre sistemas, útil para ver sus riesgos." },
    { es: "Suma de comprobación", en: "Checksum", def: "Método de verificación, citado por PI 041-1 para las interfaces, que permite detectar si un dato ha cambiado durante la transferencia." },
    { es: "Modelo físico de equipos", en: "Equipment hierarchy / physical model", def: "Jerarquía empresa, planta, área, célula, unidad, módulo de equipo y módulo de control para nombrar cada equipo." },
    { es: "Unidad", en: "Unit", def: "Equipo principal que contiene el producto durante una etapa del lote, como un reactor." },
    { es: "Inventario de sistemas", en: "Computerised system inventory", def: "Lista de todos los sistemas informatizados con su función, su criticidad GMP y su estado de validación." },
    { es: "Continuidad de negocio", en: "Business continuity", def: "Medidas previstas, documentadas y probadas para seguir trabajando si un sistema crítico se avería." },
    { es: "Hoja de contingencia", en: "Contingency form", def: "Formulario en papel aprobado que sustituye al sistema caído y luego se adjunta al registro del lote." },
  ],
  quiz: [
    {
      kind: "number",
      q: "El historiador guarda la temperatura del reactor una vez por segundo (valor de ejemplo). ¿Cuántos valores de esa sola medida guarda en un día de 24 horas?",
      answer: 86400,
      tolerance: 0.001,
      unit: "valores",
      explain: "Un día tiene 24 × 3600 = 86400 segundos; a un valor por segundo son 86400 valores de una sola medida.",
    },
    {
      kind: "choice",
      q: "A media fase de calentamiento, el ERP de la empresa deja de funcionar por una avería en el centro de datos. El DCS y el MES siguen bien. ¿Qué le pasa al reactor?",
      options: [
        "Se para el calentamiento, porque la orden de fabricación ya no existe",
        "El DCS pasa solo a manual y tienes que llevar la temperatura a mano",
        "Nada: el control vive en el DCS y el ERP no interviene en segundos",
        "Hay que abortar el lote y empezarlo otra vez cuando vuelva el ERP",
      ],
      answer: 2,
      explain: "El ERP trabaja en días y semanas y no manda sobre las válvulas. El control sigue en el controlador; lo que espera son los movimientos de stock, que se envían cuando el ERP vuelve.",
    },
    {
      kind: "number",
      q: "El controlador del reactor ejecuta su programa cada 50 ms y el historiador guarda un valor cada 1 s (valores de ejemplo). ¿Cuántos ciclos del controlador hay por cada valor guardado?",
      answer: 20,
      tolerance: 0.001,
      unit: "ciclos",
      explain: "1 s son 1000 ms; 1000 / 50 = 20 ciclos del controlador por cada valor que guarda el historiador.",
    },
    {
      kind: "choice",
      q: "El MES muestra «Consumo pendiente de enviar al ERP» tras la carga de 180 kg de tolueno. Un compañero propone repetir la confirmación del paso para que se envíe ya. ¿Qué haces?",
      options: [
        "No repito nada: anoto el aviso con la hora y aviso para que sistemas revise la cola",
        "Repito la confirmación dos veces más para asegurarme de que llega bien al ERP",
        "Anulo el paso en el MES y lo vuelvo a hacer desde el principio con otra carga",
        "Doy de baja yo mismo los 180 kg en el ERP desde el ordenador de la oficina",
      ],
      answer: 0,
      explain: "Repetir la operación es la forma clásica de crear un duplicado: el consumo se descontaría dos veces. La cola de mensajes la gestiona sistemas; tú anotas lo que ves y avisas.",
    },
    {
      kind: "choice",
      q: "Según ICH Q7, ¿quién decide liberar o rechazar un lote de principio activo, decisión que luego cambia su estado en el ERP?",
      options: [
        "El operador que firma el último paso de la hoja de producción",
        "La unidad de calidad independiente, que no puede delegarlo",
        "El ERP, de forma automática cuando recibe el último resultado",
        "El jefe de producción, tras comprobar el rendimiento del lote",
      ],
      answer: 1,
      explain: "ICH Q7 (2.22) pone entre las responsabilidades de la unidad de calidad independiente, que no se delegan, liberar o rechazar todos los API. El ERP solo refleja esa decisión.",
    },
    {
      kind: "number",
      q: "El MES se cae a las 02:10 y vuelve a las 04:40. El procedimiento de contingencia pide anotar la temperatura cada 15 min, empezando 15 min después de la caída y terminando en la hora de recuperación. ¿Cuántas lecturas anotas en papel?",
      answer: 10,
      tolerance: 0.001,
      unit: "lecturas",
      explain: "De 02:10 a 04:40 van 150 min; 150 / 15 = 10 lecturas, de 02:25 a 04:40.",
    },
    {
      kind: "choice",
      q: "En la pantalla ves la etiqueta P1-A2-R201-TT01, construida según el modelo físico de equipos de tu planta (valor de ejemplo). ¿Qué es lo más probable que identifique?",
      options: [
        "El lote número 201 del producto A2 fabricado en la planta P1",
        "La orden de fabricación 201 del área A2 creada en el ERP",
        "Una muestra del LIMS tomada en el punto 1 del reactor A2",
        "El transmisor de temperatura 1 del reactor R-201, área A2, planta P1",
      ],
      answer: 3,
      explain: "El modelo físico se lee como una ruta de carpetas: planta, área, unidad y módulo de control. TT es la sigla habitual de transmisor de temperatura.",
    },
    {
      kind: "choice",
      q: "Tras una caída del MES, tienes que introducir en el sistema las lecturas que anotaste en la hoja de contingencia. ¿Qué pide el anexo 11 para estos datos críticos tecleados a mano?",
      options: [
        "Nada especial, porque ya estaban firmados en papel por ti",
        "Que se borren las hojas de papel para que no haya dos originales",
        "Una comprobación adicional, por otra persona o por medios validados",
        "Que los introduzca el jefe de turno con su propio usuario y firma",
      ],
      answer: 2,
      explain: "El anexo 11 (apartado 6) pide, para datos críticos introducidos a mano, una comprobación adicional de su exactitud por un segundo operador o por medios electrónicos validados. La hoja en papel se conserva y se adjunta al lote.",
    },
    {
      kind: "choice",
      q: "Un instrumento del laboratorio guarda el resultado en su disco local y una persona lo copia más tarde a la carpeta del LIMS. ¿Qué riesgo señala la guía PIC/S PI 041-1?",
      options: [
        "Que en el disco local el dato puede borrarse o cambiarse antes de llegar",
        "Que el LIMS tarda más en mostrar el resultado al operador de planta",
        "Que el instrumento se calienta si guarda demasiados datos en su disco",
        "Ninguno, porque al final el resultado acaba en el sistema correcto",
      ],
      answer: 0,
      explain: "PI 041-1 (9.4) avisa de que guardar datos de forma temporal en el equipo local antes de transferirlos crea una oportunidad para borrarlos o manipularlos, y prefiere una transferencia automática, diseñada y cualificada.",
    },
    {
      kind: "number",
      q: "La orden de fabricación del ERP reserva 250,0 kg de un intermedio. Al cerrar el lote, el MES informa de un consumo real de 248,6 kg (valores de ejemplo). ¿Cuántos kilos de diferencia hay entre lo reservado y lo consumido?",
      answer: 1.4,
      tolerance: 0.01,
      unit: "kg",
      explain: "Diferencia = 250,0 − 248,6 = 1,4 kg. Al ERP debe llegar el consumo real, 248,6 kg, no el teórico; comprobar que lo que envió el MES es lo que recibió el ERP es la conciliación de la interfaz.",
    },
  ],
};
