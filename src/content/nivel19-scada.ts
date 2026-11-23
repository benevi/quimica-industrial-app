import type { Lesson } from "./types";

export const scadaAFondo: Lesson = {
  slug: "scada-e-historiador-a-fondo",
  level: 19,
  order: 5.5,
  title: "SCADA e historiador a fondo: pantallas, tendencias y datos de proceso",
  titleEn: "SCADA and process historian in depth",
  minutes: 38,
  summary:
    "Qué hay detrás de cada dibujo de la pantalla de supervisión, qué guarda el historiador (etiqueta, valor, hora y calidad), por qué el muestreo y la compresión por banda muerta pueden esconder un pico, por qué importa la hora, cómo se diagnostica con una tendencia, qué datos son registro GMP y quién puede cambiar qué, por qué una captura o un Excel no son el dato original y qué haces si ves un dato raro.",
  body: `
En [SCADA, historiador y datos de proceso](/leccion/scada-e-historiador) seguiste el viaje de una temperatura hasta el gráfico; en [El sistema de control a fondo](/leccion/sistema-de-control-a-fondo), las pantallas y los estados de los equipos, y en [Alarmas, enclavamientos y sistemas de seguridad a fondo](/leccion/alarmas-y-seguridad-a-fondo), la vida de una alarma. Aquí bajamos al dato: qué es cada número de la pantalla, cómo lo guarda el historiador (*process historian*), cuándo te engaña una tendencia y qué vale como registro del lote.

Los códigos de equipo, las horas y los valores numéricos de esta lección son **valores de ejemplo**, salvo los que se citan de una norma o de otra lección.

### Detrás de cada dibujo hay una etiqueta
El libro libre de instrumentación de Tony Kuphaldt (*Lessons in Industrial Instrumentation*, capítulo de las interfaces persona-máquina) explica que las pantallas modernas funcionan **por etiquetas** (*tag-based*): cada objeto gráfico está asociado al menos a una etiqueta, y cada etiqueta apunta a un dato de la memoria del controlador mediante una base de datos de etiquetas guardada en la pantalla. Un dibujo de válvula no «es» la válvula: es un componente que lee una etiqueta y cambia de color según su valor.

Es un *frontend* que lee y escribe en una API, con campos de solo lectura y campos editables. El mismo libro da dos reglas de diseño:

- Las etiquetas que vienen de **entradas reales** (un pulsador, un final de carrera, una sonda) se configuran **de solo lectura** en la pantalla: si la pantalla pudiera escribirlas, se pelearía con la señal de campo.
- **Nunca más de un elemento escribe en el mismo dato.** Si el programa del controlador y un botón de la pantalla escriben a la vez en el mismo bit, uno gana y otro pierde, con resultados extraños. Es una condición de carrera.

Añade que la pantalla puede restringir lo que ve y cambia cada usuario según sus privilegios, y que una buena interfaz parte de saber **la información mínima** que el usuario necesita ver y manejar. Existen normas específicas sobre diseño de pantallas de proceso, pero son de pago y ningún documento gratuito leído para esta lección las reproduce, así que aquí no se dan sus reglas.

### Una pantalla de supervisión, como la verás en el turno
Imagina la pantalla del reactor ficticio R-204 del [simulador del reactor](/simulador/reactor) de esta app:

| Zona | Qué ves | Qué te dice |
|---|---|---|
| Cabecera | Lote, fase activa, usuario conectado, fecha y hora del sistema | Quién firma lo que hagas y con qué reloj queda registrado |
| Banda de alarmas | Las últimas alarmas, con prioridad y hora | Si hay algo que atender antes que lo que estabas haciendo |
| Sinóptico | Reactor, camisa, condensador, válvulas, bombas, con sus valores | El estado del proceso de un vistazo |
| Carátula abierta (*faceplate*) | Por ejemplo, la del lazo TIC-204 | Valor medido (PV), consigna (SP), salida (OUT), modo y límites |

**La carátula, campo a campo.** En TIC-204 lees PV 70,2 °C, SP 70,0 °C, OUT 38 % y el modo. Los tres modos que verás en el simulador son:

- **Manual**: la salida la pones tú; el lazo no corrige nada.
- **Automático**: tú pones la consigna y el controlador mueve la salida.
- **Cascada**: la consigna no la pones tú, se la da otro lazo. En R-204, el lazo de la masa (TIC-204) le da la consigna al de la camisa (TIC-204J). Si cambias el lazo de la camisa a automático, «cortas» la cascada: el de la masa deja de mandar.

La consigna que llega de otro lazo o sistema es **remota** (*remote setpoint*); la tuya, **local** (lo viste en [El mapa de sistemas de una planta a fondo](/leccion/mapa-de-sistemas-a-fondo)).

Antes de tocar nada: ¿qué modo tiene?, ¿quién manda la consigna?, ¿entre qué valores me deja la hoja cambiarla? Cada cambio queda registrado con tu usuario.

### El historiador por dentro: cuatro columnas
Kuphaldt explica que guardar datos durante mucho tiempo ocupa mucha memoria, así que el controlador solo «sirve» el valor actual y la pantalla o el historiador guardan el pasado. Piensa en una tabla de series temporales con cuatro columnas:

| Etiqueta | Marca de tiempo | Valor | Calidad |
|---|---|---|---|
| R204_TI204A | 22/11/2026 10:14:20 | 70,2 | Buena |
| R204_TI204A | 22/11/2026 10:14:30 | 70,3 | Buena |
| R204_TI204A | 22/11/2026 10:14:40 | 70,3 | Dudosa |

La **calidad** (*quality* o *status*) dice si el valor es de fiar. Kuphaldt lo explica con los instrumentos de bus de campo: cada señal viaja con su estado, buena, mala o dudosa (*good, bad, uncertain*), y un estado más fino da el motivo, como «fallo del sensor». Ojo: ante una entrada mala, un bloque puede estar configurado para mantener el último valor bueno, y eso, en una tendencia, parece una línea plana. La FDA (guía de 2018 *Data Integrity and Compliance With Drug CGMP*, pregunta 1b) recuerda que un dato no significa nada sin sus metadatos.

### Muestreo: lo que pasa entre dos fotos no existe
Kuphaldt lo explica con una imagen: muestrear una señal es como seguir un objeto en movimiento haciéndole fotos fijas. **Lo que cambia entre dos muestras no lo detecta el sistema** y no aparece en los datos. Da además dos reglas:

- El teorema de Nyquist fija como mínimo absoluto **dos muestras** por ciclo de la oscilación que quieres ver.
- Lo realista es **diez o más** muestras por ciclo.

Con muy pocas muestras aparece el **solapamiento** (*aliasing*): el sistema «ve» una oscilación mucho más lenta de la real. Kuphaldt subraya lo peligroso: el dato es completamente falso pero completamente creíble.

**Cuenta 1.** Una temperatura oscila con un periodo de 2 min, es decir, 120 s. Con la regla de diez muestras por ciclo hace falta guardar un punto cada 120 / 10 = **12 s** como mucho. El mínimo de Nyquist sería 120 / 2 = 60 s, y con él la oscilación apenas se distinguiría.

**Cuenta 2.** Con un punto por minuto (10:00:00 y 10:01:00), un pico que va de las 10:00:10 a las 10:00:50 no cae en ninguna muestra: en la tendencia **no ha ocurrido**.

### Compresión por banda muerta: el pico que se queda en el camino
Aunque se muestree deprisa, el historiador no suele guardarlo todo. La forma más sencilla de compresión funciona así: se guarda un valor nuevo **solo si se aleja del último guardado más que la banda muerta** (*deadband*). Si no, se descarta. Hay variantes, como la puerta giratoria (*swinging door*) de la lección corta; aquí va el principio, calculado a mano.

**Cuenta 3.** Valores de ejemplo. El último punto guardado es 60,0 °C. La hoja pide no pasar de 61,0 °C. La sonda da una lectura cada 10 s:

| Segundo | Lectura | Banda de 1,5 °C | Banda de 0,5 °C |
|---|---|---|---|
| 10 | 60,2 | Descarta | Descarta |
| 20 | 60,6 | Descarta | Guarda 60,6 |
| 30 | 61,1 | Descarta | Descarta |
| 40 | 61,4 | Descarta | Guarda 61,4 |
| 50 | 61,3 | Descarta | Descarta |
| 60 | 60,9 | Descarta | Descarta |
| 70 | 60,4 | Descarta | Guarda 60,4 |
| 80 | 60,1 | Descarta | Descarta |

1. Con banda de 1,5 °C, una lectura solo se guarda si pasa de 60,0 + 1,5 = 61,5 °C o baja de 60,0 − 1,5 = 58,5 °C. Ninguna lo hace: la tendencia dibuja una línea plana en 60,0 °C.
2. Pero tres lecturas (61,1; 61,4 y 61,3 °C) superaron el límite de 61,0 °C durante unos 30 s, con un máximo de 61,4 °C. El registro dice «todo bien» y no es verdad.
3. Con banda de 0,5 °C se guardan tres puntos y el máximo, 61,4 °C, queda registrado.

La regla que te llevas: **con compresión, la tendencia puede esconder cualquier subida menor que la banda**. Por eso la banda de las variables críticas se elige, se justifica y se prueba en la validación, y se cambia solo con control de cambios (anexo 11 de las GMP europeas, punto 10). No la toca el operador. Si una alarma saltó y la tendencia no lo muestra, ese desacuerdo se comunica: apunta a compresión o muestreo mal ajustados.

### La hora: el dato que ordena todos los demás
El historiador recibe datos de varios controladores, y las alarmas, las acciones del operador y el MES tienen cada uno su reloj. Si no coinciden, la historia del lote se desordena.

**Cuenta 4.** El reloj del controlador del reactor va 4 min por detrás de la hora oficial. La alarma de temperatura alta aparece con hora 10:14. El cambio de consigna de la camisa, registrado por el servidor con la hora correcta, aparece a las 10:16. Leído tal cual, la alarma saltó **antes** de su causa. Corregido: 10:14 + 4 min = **10:18**: primero el cambio de consigna y dos minutos después la alarma. Sin corregir, la investigación buscaría otra causa.

Lo que piden las guías:

- PIC/S PI 041-1 (2021), apartado 9.5: el reloj del sistema operativo debe estar **sincronizado** con el de los sistemas conectados, y el acceso a todos los relojes, restringido a personal autorizado.
- La guía de la FDA de 2003 sobre el alcance de Part 11 (*Scope and Application*) pide que las marcas de tiempo se usen sabiendo con claridad qué referencia horaria emplean, y que la documentación del sistema lo explique. El ejemplo de UTC frente a hora local lo tienes en [Audit trail y firma electrónica a fondo](/leccion/audit-trail-a-fondo).

Para ALCOA+, la hora sostiene dos atributos: **contemporáneo** (se registró cuando pasó) y **coherente** (los hechos aparecen en orden lógico). Lo tienes desarrollado en [ALCOA+ a fondo](/leccion/alcoa-a-fondo).

### Leer una tendencia para diagnosticar
En la lección del sistema de control viste las escalas, la rampa, el escalón y la lectura congelada. Tres hábitos más:

**Elige la ventana de tiempo.** En el simulador del R-204 puedes ver 30 min, 2 h u 8 h. La corta enseña el detalle (una oscilación); la larga, la forma del lote (una rampa lenta). El simulador guarda un punto cada 10 s: lo que dure menos no lo verás.

**Mira PV, SP y OUT juntas.** Kuphaldt explica que un registro con las tres es muy útil para diagnosticar. Una salida que se mueve mucho mientras la PV sigue a la consigna **no es un problema**: el controlador está compensando perturbaciones. Lo sospechoso es otra cosa: la PV se separa de la consigna y la salida está ya al 100 %. El controlador pide todo lo que puede y no basta: falta capacidad (camisa sucia, poco caudal del fluido térmico, una válvula que no abre del todo).

**Compara con un lote de referencia.** La forma más potente de leer una tendencia es superponerla a la del lote anterior o a una curva de referencia de lotes buenos, que en la industria suele llamarse **curva dorada** (*golden batch*). Lo que cambia entre ambas es tu pista.

**Cuenta 5.** En [El reactor a fondo](/leccion/reactor-a-fondo) calculaste que calentar 2610 kg de 20 a 70 °C pide 221850 kJ y que, con 50 kW de media, se tarda 221850 / 50 = 4437 s, unos **74 min**. La pendiente media es 50 / 74 = 0,68 °C/min. Hoy la camisa solo entrega 40 kW de media (valor de ejemplo): 221850 / 40 = 5546 s, unos **92 min**, y la pendiente baja a 50 / 92 = 0,54 °C/min. La rampa tarda un 25 % más. La causa no está escrita en la curva, pero la lista de sospechosos sí:

| Lo que ves en la tendencia | Qué puede ser | Qué compruebas |
|---|---|---|
| Rampa más lenta que en los lotes anteriores, camisa más caliente de lo habitual respecto a la masa | Pared sucia: el coeficiente U baja y pasa menos calor con la misma diferencia | El tiempo de calentamiento de los últimos lotes: si se alarga lote a lote, algo se ensucia |
| Rampa más lenta y camisa que no llega a su consigna | Poco caudal o poca potencia del fluido térmico | Salida del lazo de camisa, bombas y válvulas del servicio |
| Rampa más lenta tras un cambio en el agitador | Agitación baja: también baja U | Velocidad del agitador frente a la hoja |

En el simulador del reactor lo puedes practicar: la avería «camisa sucia» deja el coeficiente U en el 60 % de su valor durante todo el lote, y la «sonda congelada» deja fija TT-204A mientras TT-204B sigue subiendo.

### El historiador como registro GMP
No todo lo que guarda el historiador es registro del lote, pero mucho sí. La guía de la FDA de 2018 (pregunta 12) lo resume: cuando se generan para cumplir un requisito GMP, **todos los datos pasan a ser registro GMP**. ICH Q7, la guía de GMP para principios activos, pide en el registro de lote (6.52) los **resultados reales de los parámetros críticos del proceso**, las fechas y horas y toda desviación observada. El anexo 11 (punto 1) pide basar en una evaluación de riesgos documentada el alcance de la validación y de los controles de integridad de datos; en la práctica, esa evaluación dice qué etiquetas son críticas.

| Dato del sistema | ¿Registro del lote? |
|---|---|
| Tendencia de la temperatura de reacción, si es parámetro crítico | Sí |
| Registro de alarmas y eventos del periodo del lote | Sí: muestra lo que pasó aunque nadie lo escribiera |
| Cambios de consigna y de modo, con usuario, hora y motivo | Sí: es el audit trail |
| Temperatura de un servicio sin impacto en el producto | Según la evaluación de riesgos |

**El audit trail de las consignas.** Cada cambio de consigna o de modo deja la entrada anterior, quién y cuándo (ICH Q7, 5.43; Part 11, 11.10(e)) y su motivo (anexo 11, punto 9). Cómo se revisa lo tienes en [Audit trail y firma electrónica a fondo](/leccion/audit-trail-a-fondo).

**Quién puede cambiar qué.** Part 11 pide limitar el acceso a personas autorizadas (11.10(d)), comprobar que cada persona solo hace las operaciones para las que tiene permiso (11.10(g)) y comprobaciones del sistema que impongan el orden permitido de pasos (11.10(f)). La FDA (pregunta 4) recomienda limitar **por medios técnicos** la capacidad de cambiar parámetros de proceso y datos, y dar el papel de administrador a personas independientes de quienes generan el contenido. Un reparto típico, de ejemplo:

| Papel | Puede | No puede |
|---|---|---|
| Operador | Consignas dentro de los límites de la hoja, modos que permita el procedimiento, reconocer alarmas | Límites de alarma, banda muerta del historiador, pantallas, relojes |
| Ingeniería | Cambiar la configuración con control de cambios | Liberar lotes |
| Administrador | Usuarios y permisos | Generar o aprobar datos de lote |

Un caso útil: la FDA (pregunta 5) admite **cuentas compartidas de solo lectura** para ver datos, porque no permiten modificar nada; para cualquier acción, en cambio, cada persona usa su usuario.

### Exportar datos para un informe
Para una investigación te pedirán «la temperatura de anoche». Lo que dicen las normas:

- Part 11 (11.10(b)): **copias exactas y completas**, legibles por personas y en formato electrónico. El anexo 11 (punto 8) pide impresiones claras y, para la liberación, que indiquen si algún dato cambió.
- FDA 2018 (pregunta 9): una copia electrónica vale como copia verdadera si conserva **el contenido y el significado** del original, **incluidos todos los metadatos**. La guía de 2003 añade que, si el sistema permite buscar, ordenar o hacer tendencias, la copia debería permitirlo también cuando sea razonable.
- PIC/S (7.7.3): muchos registros electrónicos deben conservarse en formato **dinámico**, el que permite interactuar con el dato. Y la copia de un registro electrónico se hace por medios electrónicos, sin PDF si se pierden metadatos (7.7).

**Por qué una captura de pantalla no es el dato.** La FDA (pregunta 1d) llama **estático** a un registro fijo, como el papel o una imagen electrónica. Una captura es una foto de la tendencia: lleva la escala y la ventana que eligió quien la hizo, no tiene los valores guardados ni su calidad, y no deja ampliar el pico. Sirve para ilustrar un informe, nunca como dato original.

**Por qué un Excel tampoco.** La misma pregunta 1d pone como ejemplo de registro **dinámico** la hoja de cálculo cuyas fórmulas o celdas se pueden modificar. Una vez exportados, los valores se pueden cambiar sin que nada lo registre, y se pierden la calidad y el audit trail. PIC/S (7.8.2) avisa además de que los informes resumen se quedan cortos por naturaleza: a menudo les faltan datos y metadatos críticos, y con ellos no se puede revisar el original. Y PIC/S (9.4) pide que los datos vayan directos al almacenamiento seguro, no copiados desde un disco local donde se pueden alterar.

En tu web sería igual: una captura del panel de métricas no es la base de datos. Lo correcto en planta es usar la función de informe o exportación validada del sistema, dejar constancia de qué etiquetas, qué periodo y qué consulta se usaron, y que el original siga en el historiador.

### Si ves un dato raro
| Lo que ves | Qué haces | Qué no haces nunca |
|---|---|---|
| Lectura congelada: plana mientras el proceso cambia, o con calidad dudosa | Comparas con otra sonda o un indicador local, avisas, anotas hora y valores | Seguir el lote fiándote de ella |
| Hueco en la tendencia | Anotas desde cuándo y hasta cuándo, registras a mano lo que pida el procedimiento de contingencia y avisas | Rellenarlo de memoria o copiar valores de otro lote |
| Hora mal en una pantalla o en un equipo | Avisas y anotas la diferencia con el reloj de referencia | Cambiar tú el reloj |

ICH Q7 pide controles contra la omisión de datos, con el ejemplo de un sistema apagado que no captura (5.43), admite un segundo medio de registro (5.49) y pide registrar e investigar los incidentes (5.46), igual que el anexo 11 (punto 13). Un hueco o un reloj desajustado no los arreglas tú: los haces visibles.

Los códigos, valores y repartos de permisos de esta lección son ejemplos. En planta manda siempre el procedimiento vigente (SOP): él dice qué pantallas usas, qué datos son críticos y cómo se exportan y se archivan en tu empresa.
`,
  plant: `
Planta ficticia, reactor R-204, lote LT-2611-09 del intermedio ficticio AX-22. Turno de mañana. Al empezar el calentamiento, Andrés abre la tendencia de 8 h y superpone la del lote anterior, como pide la hoja. El lote anterior llegó de 20 a 70 °C en 74 min; este va por 45 °C a los 47 min, con una pendiente de unos 0,53 °C/min. La camisa va más caliente que la masa de lo habitual y la salida del lazo TIC-204J está al 100 %.

No toca la consigna de camisa: la hoja fija su límite. Avisa a la jefa de turno, que llama a mantenimiento. El servicio de fluido térmico está bien: todo apunta a una camisa sucia, que se limpiará cuando el reactor quede libre. Andrés anota en la hoja la hora de inicio y fin del calentamiento y la referencia del aviso.

A las 11:32, ya en la adición, la sonda TT-204A marca 72,0 °C durante seis minutos sin moverse ni una décima; TT-204B sube de 72,1 a 73,4 °C. La calidad de TT-204A pasa a dudosa. Andrés cambia el control a TT-204B, como indica el procedimiento, avisa a instrumentación y anota las dos lecturas con su hora.

Por la tarde, calidad pide la temperatura de la adición para la revisión. Un compañero propone mandar una captura de la tendencia. La supervisora genera en su lugar el informe validado del historiador con las etiquetas, el periodo y la calidad de cada punto, y lo adjunta al expediente con la referencia de la consulta. La captura queda solo como ilustración.
`,
  batchRecord: `
- **Tendencias** de los parámetros críticos que indique la hoja (por ejemplo, temperatura de masa y camisa durante el calentamiento y la adición), como informe del historiador con sus etiquetas, periodo y referencia, no como captura.
- **Hora de inicio y fin** de cada calentamiento o enfriamiento, para compararla con los lotes anteriores.
- **Cambios de consigna y de modo** que hayas hecho, con su motivo, que deben coincidir con el audit trail del sistema.
- **Lecturas comprobadas** en otra sonda o en un indicador local cuando una medida parezca congelada, con su hora.
- **Incidencias de datos**: huecos en la tendencia (desde y hasta), relojes desajustados (diferencia observada), calidad dudosa o mala de una etiqueta crítica, con la referencia del aviso.
- Si hubo contingencia, los valores tomados a mano en el formato de papel, con la hora del reloj de referencia.
`,
  terms: [
    { es: "Historiador de proceso", en: "Process historian", def: "Base de datos de series temporales que guarda, para cada etiqueta, el valor, la marca de tiempo y la calidad durante años." },
    { es: "Etiqueta", en: "Tag", def: "Nombre de un dato del sistema de control (una medida, una consigna, un estado) al que se asocian los objetos de la pantalla y los registros del historiador." },
    { es: "Base de datos de etiquetas", en: "Tag database", def: "Tabla de la pantalla que relaciona cada etiqueta con un dato de la memoria del controlador y con su permiso de lectura o escritura." },
    { es: "Calidad del dato", en: "Data quality (status)", def: "Metadato que indica si un valor es de fiar: buena, dudosa o mala, por ejemplo por sensor roto o fallo de comunicación." },
    { es: "Periodo de muestreo", en: "Sampling interval", def: "Tiempo entre dos lecturas guardadas. Lo que ocurre entre ellas no queda registrado." },
    { es: "Solapamiento", en: "Aliasing", def: "Error por muestrear demasiado despacio: el sistema ve una oscilación más lenta que la real, falsa pero creíble." },
    { es: "Compresión por banda muerta", en: "Deadband compression", def: "Técnica del historiador que solo guarda un valor nuevo si se aleja del último guardado más que la banda; puede esconder subidas menores que ella." },
    { es: "Consigna remota", en: "Remote setpoint", def: "Consigna que un lazo recibe de otro lazo o de otro sistema, no del operador." },
    { es: "Cascada", en: "Cascade mode", def: "Modo en el que un lazo maestro da la consigna a un lazo esclavo; en R-204, el de la masa al de la camisa." },
    { es: "Salida del controlador", en: "Controller output (OUT)", def: "Lo que el controlador pide al elemento final, de 0 a 100 %. Si está al 100 % y la medida no llega, falta capacidad." },
    { es: "Curva dorada", en: "Golden batch", def: "Tendencia de referencia de uno o varios lotes buenos con la que se compara el lote en curso." },
    { es: "Sincronización horaria", en: "Time synchronisation", def: "Ajuste de los relojes de todos los sistemas conectados a una misma referencia, con acceso restringido." },
    { es: "Registro dinámico", en: "Dynamic record", def: "Registro electrónico que permite interactuar con el dato (ampliar, reprocesar, buscar); una captura o un papel son estáticos." },
    { es: "Cuenta de solo lectura", en: "Read-only account", def: "Usuario que puede ver datos pero no modificar nada; la FDA la admite compartida solo para consultar." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Una presión oscila con un periodo de 3 min. Siguiendo la regla práctica de guardar al menos 10 muestras por ciclo, ¿cada cuántos segundos como máximo debe guardar el historiador un punto?",
      answer: 18,
      tolerance: 0.02,
      unit: "s",
      explain: "3 min son 180 s. Con 10 muestras por ciclo: 180 / 10 = 18 s como máximo entre muestras.",
    },
    {
      kind: "choice",
      q: "En la tendencia, la temperatura de reacción es una línea plana en 60,0 °C, pero el registro de alarmas muestra una alarma de temperatura alta a las 03:10. ¿Qué haces?",
      options: [
        "Lo comunico: la compresión o el muestreo pueden estar escondiendo el pico",
        "Doy por buena la tendencia, porque el historiador guarda todos los valores",
        "Borro la alarma del registro para que el lote quede coherente con la curva",
        "Pido a ingeniería que me deje bajar yo la banda muerta de esa etiqueta",
      ],
      answer: 0,
      explain: "Con compresión por banda muerta o un muestreo lento, una subida corta o menor que la banda puede no guardarse. El desacuerdo entre alarma y tendencia se comunica; la banda la cambia ingeniería con control de cambios.",
    },
    {
      kind: "number",
      q: "El último valor guardado de una temperatura es 70,0 °C y la banda muerta de compresión es 2,0 °C. Con la compresión simple de la lección, ¿qué temperatura tiene que superar la lectura para que el historiador guarde un punto nuevo hacia arriba?",
      answer: 72,
      tolerance: 0.001,
      unit: "°C",
      explain: "Solo se guarda un valor que se aleje del último guardado más que la banda: 70,0 + 2,0 = 72 °C. Cualquier subida que no pase de ahí queda fuera de la tendencia.",
    },
    {
      kind: "choice",
      q: "Calidad te pide los datos de temperatura de la adición de anoche para una investigación. ¿Qué entregas?",
      options: [
        "Una captura de pantalla de la tendencia con la escala bien ajustada",
        "Un Excel con los valores copiados a mano desde la pantalla del turno",
        "El informe o la exportación validada del historiador, con su referencia",
        "Una foto con el móvil de la pantalla, para que se vea que es original",
      ],
      answer: 2,
      explain: "Una copia válida conserva contenido, significado y metadatos (FDA 2018, pregunta 9). Una captura es estática y pierde puntos y calidad; un Excel se puede modificar sin registro. El original sigue en el historiador.",
    },
    {
      kind: "number",
      q: "El reloj del controlador va 3 min por detrás de la hora oficial. Una alarma aparece en su registro a las 14:20. ¿A qué hora oficial ocurrió? Da la respuesta como minutos después de las 14:00.",
      answer: 23,
      tolerance: 0.001,
      unit: "min",
      explain: "Si el reloj va retrasado, la hora real es la registrada más el retraso: 14:20 + 3 min = 14:23, es decir, 23 min después de las 14:00.",
    },
    {
      kind: "choice",
      q: "Calentando, la temperatura de masa se separa poco a poco de su consigna y la salida del lazo de la camisa lleva diez minutos al 100 %. ¿Qué indica la tendencia?",
      options: [
        "Que el controlador está mal sintonizado y hay que pasarlo a manual",
        "Que falta capacidad de calentar: camisa sucia, poco caudal o válvula",
        "Que la sonda de masa está congelada y la lectura no sirve de nada",
        "Que todo es normal, porque una salida que se mueve no es un problema",
      ],
      answer: 1,
      explain: "Con la salida al máximo, el controlador ya pide todo lo que puede y no basta. La causa está en la capacidad de transmitir calor: pared sucia, poco caudal o potencia del fluido térmico, una válvula que no abre del todo.",
    },
    {
      kind: "number",
      q: "Un calentamiento de 20 a 70 °C suele tardar 74 min. Hoy la tendencia muestra una pendiente media de 0,5 °C/min. Si se mantiene, ¿cuántos minutos tardará en total?",
      answer: 100,
      tolerance: 0.02,
      unit: "min",
      explain: "Hay que subir 70 − 20 = 50 °C. A 0,5 °C/min: 50 / 0,5 = 100 min, 26 min más que lo habitual: motivo para comparar con los lotes anteriores y avisar.",
    },
    {
      kind: "choice",
      q: "La tendencia de un reactor tiene un hueco de 25 minutos esta madrugada por una caída de comunicación. ¿Qué haces?",
      options: [
        "Copio los valores del mismo tramo del lote anterior, que es muy parecido",
        "Dibujo a mano una línea recta entre los dos extremos del hueco",
        "No hago nada, porque lo que no guarda el sistema no forma parte del lote",
        "Anoto desde y hasta cuándo, uso el registro de contingencia y aviso",
      ],
      answer: 3,
      explain: "ICH Q7 (5.43) pide controles contra la omisión de datos y (5.46) registrar e investigar los incidentes; el anexo 11 (13) pide comunicarlos y evaluarlos. El hueco se hace visible, nunca se rellena.",
    },
    {
      kind: "choice",
      q: "Un técnico de procesos quiere consultar tendencias desde la oficina con una cuenta compartida del historiador. ¿Qué dice la guía de la FDA de 2018?",
      options: [
        "Que nunca se admiten cuentas compartidas, ni siquiera para ver datos",
        "Que se admiten si la cuenta es de solo lectura y no permite modificar",
        "Que se admiten siempre que la contraseña se cambie cada semana",
        "Que se admiten para cualquier acción si lo autoriza el supervisor",
      ],
      answer: 1,
      explain: "La FDA (pregunta 5) admite cuentas compartidas de solo lectura para ver datos, porque no permiten modificar nada; cualquier acción tiene que ser atribuible a una persona con su propio usuario.",
    },
    {
      kind: "choice",
      q: "En la pantalla del reactor ves que la hora del sistema va 6 minutos adelantada respecto al reloj de referencia de la sala. ¿Qué haces?",
      options: [
        "Aviso y anoto la diferencia; no cambio el reloj",
        "Corrijo yo la hora del sistema para que cuadre",
        "Anoto en la hoja la hora del móvil a partir de ahora",
        "Resto 6 min de memoria a todo lo que anote hoy",
      ],
      answer: 0,
      explain: "PIC/S PI 041-1 (9.5) pide relojes sincronizados y acceso a ellos restringido a personal autorizado. El operador avisa y deja constancia de la diferencia para que se pueda reconstruir el orden de los hechos.",
    },
  ],
};
