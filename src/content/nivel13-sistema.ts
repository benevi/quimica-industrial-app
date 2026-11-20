import type { Lesson } from "./types";

export const sistemaDeControlAFondo: Lesson = {
  slug: "sistema-de-control-a-fondo",
  level: 13,
  order: 8,
  title: "El sistema de control a fondo: pantallas, recetas y registro electrónico",
  titleEn: "The control system in depth: displays, recipes and electronic records",
  minutes: 40,
  summary:
    "Cómo llega una medida desde el reactor hasta tu pantalla, qué significa cada símbolo y cada estado, cómo se lee una tendencia, cómo avanza una receta de lote y qué queda registrado con tu nombre.",
  body: `
En la lección anterior viste los nombres: PLC, DCS, SCADA, receta, fase. Aquí te sientas en la sala de control: qué hay detrás de la pantalla, qué te dice cada dibujo y qué queda escrito cada vez que pulsas un botón.

Cada planta dibuja las pantallas a su manera. Aquí aprendes las ideas que se repiten.

### De la planta a la pantalla, capa a capa
Piensa en el cuerpo: los sentidos notan, el cerebro decide y los músculos actúan. Un sistema de control hace lo mismo con sensores, un procesador y actuadores.

| Capa | Qué es y para qué sirve | Si falla |
|---|---|---|
| Campo | Instrumentos que miden; válvulas y motores que actúan | El sistema se queda ciego o manco en ese punto |
| Entradas y salidas | Tarjetas donde llegan los cables: traducen señal eléctrica a números y al revés | Se pierden las señales de esa tarjeta |
| Controlador | Ordenador industrial (PLC o controlador del DCS): ejecuta lazos, secuencias y enclavamientos | Se pierde el control de la parte de planta que lleva |
| Red | Cables y equipos que unen controladores, servidores y pantallas | Las pantallas dejan de recibir datos |
| Servidores | Reparten datos, guardan alarmas, gestionan recetas y usuarios | Según el servidor: pantallas, recetas o registro |
| Estación de operación | Tu pantalla, teclado y ratón (*human-machine interface*, HMI): ver y mandar | No ves ni mandas desde ese puesto |
| Historiador | Base de datos de medidas con su hora (*historian*), para tendencias e informes | Puede quedar un hueco en los datos guardados |

La idea más importante de la tabla: **el programa que controla el reactor corre en el controlador, no en tu pantalla**. La pantalla es una ventana. Si una estación se queda colgada, el controlador sigue midiendo y moviendo válvulas; lo que has perdido es la vista desde ese puesto. Por eso suele haber más de una estación. Lo que ocurre si falla el propio controlador o la corriente depende del diseño de tu planta y está en el procedimiento.

### PLC, DCS y SCADA en la práctica

| Sistema | Dónde lo encontrarás | Qué verás tú |
|---|---|---|
| PLC con su panel | Un equipo que viene «con su cerebro»: una centrífuga, un filtro-secador | Una pantalla táctil junto a la máquina, con las pantallas de ese equipo y nada más |
| DCS | Una planta o un área entera, con muchos reactores y lazos | Varias estaciones iguales en la sala de control; desde cualquiera ves toda el área |
| SCADA | Un programa de supervisión que reúne los datos de varios PLC | Pantallas en un ordenador que muestran equipos controlados por PLC distintos |

En la práctica se mezclan: el reactor puede estar en el DCS y la centrífuga tener su PLC. Si una orden puede darse en dos sitios, el procedimiento dice desde cuál.

### Señales: digitales y analógicas, entradas y salidas
Una señal **digital** solo tiene dos valores: sí o no, como un interruptor de la luz. Una señal **analógica** puede tomar cualquier valor dentro de un rango, como el mando de volumen de una radio. Un convertidor traduce la señal analógica a números; si falla, la pantalla puede mostrar un valor distinto del que mide el sensor.

**Entrada** es lo que llega al controlador desde la planta. **Salida** es lo que el controlador manda a la planta. Cruzando las dos ideas salen cuatro tipos:

| Tipo | Sigla | Ejemplo en el reactor |
|---|---|---|
| Entrada digital (*digital input*) | DI | El final de carrera que dice «la válvula de fondo está cerrada» |
| Salida digital (*digital output*) | DO | La orden de marcha del agitador |
| Entrada analógica (*analog input*) | AI | El transmisor de temperatura del producto |
| Salida analógica (*analog output*) | AO | La apertura, de 0 a 100 %, de la válvula de control de vapor |

Un final de carrera (*limit switch*) es un interruptor que se acciona cuando la válvula llega al final de su recorrido.

**Ejemplo de recuento** (valores de ejemplo). Un reactor tiene 6 válvulas todo o nada, cada una con su orden y sus dos finales de carrera; un agitador con orden de marcha, confirmación de marcha y señal de fallo; 3 transmisores (temperatura, presión, nivel) y 2 válvulas de control.

- Salidas digitales: 6 + 1 = 7. Entradas digitales: 6 × 2 + 2 = 14.
- Entradas analógicas: 3. Salidas analógicas: 2.
- Total: 7 + 14 + 3 + 2 = 26 señales.

### Las pantallas

| Pantalla | Qué muestra | Para qué la usas |
|---|---|---|
| Sinóptico general (*overview*) | Toda el área en pequeño, con el estado de cada equipo | Ver de un vistazo dónde pasa algo |
| Pantalla de unidad | Un equipo con sus tuberías, válvulas y medidas | Trabajar en ese reactor, filtro o secadero |
| Carátula de un lazo (*faceplate*) | Ventana de un solo instrumento o equipo | Ver el valor medido (PV), la consigna (SP), la salida y el modo; cambiar la consigna |
| Tendencias (*trends*) | Curvas de las medidas frente al tiempo | Ver cómo ha evolucionado una variable |
| Lista de alarmas (*alarm summary*) | Alarmas activas o sin reconocer, con hora y prioridad | Atender alarmas en orden |
| Pantalla de secuencia o receta | Los pasos del lote, cuál está activo y qué espera | Seguir el lote y contestar al sistema |

**Convenciones habituales.** Un color indica el estado de cada equipo (abierto o cerrado, en marcha o parado) y otro las alarmas. Lo corriente es que una alarma sin reconocer parpadee y deje de hacerlo al reconocerla, aunque siga activa. Pero no hay un código único: el color que en una planta significa «abierta» puede significar «cerrada» en otra. Apréndete la leyenda de la tuya.

**Navegación.** Se va de lo general a lo particular: sinóptico, unidad, carátula. Al pulsar sobre un equipo se abre su carátula, y desde ella suele llegarse a su tendencia y a sus alarmas.

### Estados de un equipo en pantalla
**Una válvula todo o nada** con dos finales de carrera da cuatro combinaciones:

| Final «abierta» | Final «cerrada» | Lo que significa |
|---|---|---|
| No | Sí | Cerrada |
| Sí | No | Abierta |
| No | No | En tránsito: se está moviendo. Normal durante unos segundos |
| Sí | Sí | Imposible: un final de carrera está fallando |

El sistema compara siempre dos cosas: la **orden** que ha dado y la **confirmación** que recibe. Si ordena abrir y, pasado el tiempo previsto para el recorrido, no llega la confirmación de abierta, salta una **alarma de discrepancia**: lo ordenado y lo confirmado no coinciden. La válvula puede no haberse movido, haberse quedado a medias o haberse movido bien y fallar el final de carrera. Desde la pantalla no puedes saber cuál.

Qué haces: no repitas la orden una y otra vez ni des por buena la posición. Mira qué paso depende de esa válvula, pide que se compruebe en campo según el procedimiento y avisa.

**Un motor** (un agitador, una bomba) suele mostrar: disponible (se puede arrancar), en marcha, parado y fallo (ha saltado su protección). También tiene discrepancia: orden de marcha sin confirmación.

**Modos.** En automático, el equipo obedece a la secuencia o al lazo. En manual, obedece al operador desde la carátula. Fuera de servicio, no se puede operar. Un equipo que se queda en manual no obedece a la secuencia: es una causa típica de que un lote no avance.

### Tendencias: leer una curva
Una tendencia es una gráfica con el tiempo en horizontal y el valor en vertical. Mira primero las dos escalas: una subida de 2 °C parece un precipicio si la escala va de 60 a 64 °C y ni se nota si va de 0 a 200 °C.

Qué buscar:

- **PV frente a SP.** Juntas, ves si la medida sigue a la consigna y si se pasa.
- **Rampa.** Una línea inclinada y recta: la variable cambia a velocidad constante.
- **Escalón.** Un salto vertical. Una temperatura real no salta 10 °C en un segundo: sospecha del instrumento o de la señal.
- **Oscilación.** Sube y baja alrededor de la consigna.
- **Lectura congelada.** Una línea perfectamente plana mucho rato, cuando lo demás cambia. Una medida real casi siempre tiembla un poco. No prueba un fallo, pero es motivo para comprobar el instrumento.

**Velocidad de calentamiento en tres cuentas** (valores de ejemplo). En la tendencia lees dos puntos: a las 10:10 hay 32 °C y a las 10:40 hay 47 °C.

1. Diferencia de temperatura: 47 − 32 = 15 °C.
2. Diferencia de tiempo: de 10:10 a 10:40 van 30 min.
3. Velocidad: 15 / 30 = 0,5 °C/min, que son 0,5 × 60 = 30 °C/h.

Con eso puedes prever. Si la consigna es 65 °C, faltan 65 − 47 = 18 °C. A 0,5 °C/min son 18 / 0,5 = 36 min: llegará hacia las 11:16 si la velocidad se mantiene. Es una previsión, no una medida.

La tendencia **en tiempo real** se va dibujando mientras miras. La **histórica** sale del historiador: eliges un día y unas horas pasadas, para revisar un lote o investigar una desviación.

### El control por lotes: receta, operaciones y fases
La norma de referencia, ISA-88, es de pago. Lo que sigue es su modelo tal como lo describe la documentación pública de fabricantes; tu sistema puede usar otros nombres.

Una **receta** es como una receta de cocina escrita para una máquina. Su parte de «pasos» es el **procedimiento**, que ya conoces: se divide en procedimientos de unidad (todo lo que se hace en el reactor), estos en **operaciones** («Preparación», «Reacción», «Descarga») y estas en **fases**. Un lote en el reactor recorre, por ejemplo, las fases inertizar, cargar, calentar, mantener, enfriar y descargar. La fase es el escalón más bajo: la que de verdad mueve válvulas y motores.

La **receta maestra** (*master recipe*) es la plantilla aprobada de un producto. De ella se crea, para cada lote, una **receta de control** (*control recipe*): la copia que se ejecuta, con el número de lote y sus valores concretos.

Los **parámetros de receta** son los números que la receta pasa a cada fase: cantidades (kilos que cargar), consignas (temperatura de reacción) y tiempos (minutos de mantenimiento). El operador no los cambia por su cuenta.

### Estados de una fase y órdenes del operador
Cada fase está siempre en un estado. En la documentación de fabricante consultada aparecen estos:

| Estado | Qué significa |
|---|---|
| En reposo (*idle*) | Lista, sin empezar |
| En marcha (*running*) | Ejecutándose |
| Retenida (*held*) | Detenida de forma ordenada; se puede reanudar |
| Parada (*stopped*) | Detenida por una orden de parar; ya no continúa |
| Abortada (*aborted*) | Detenida por una orden de abortar; ya no continúa |
| Completa (*complete*) | Ha terminado bien |

Y las órdenes: iniciar (*start*), retener (*hold*), reanudar (*restart*), parar (*stop*), abortar (*abort*) y reiniciar (*reset*), que devuelve la fase a reposo. El sistema solo acepta las órdenes que tienen sentido en cada estado: no se puede reanudar una fase que no está retenida. Algunos sistemas añaden una pausa, distinta de la retención.

**Mensajes y preguntas al operador** (*prompts*). La receta se detiene y pregunta: «Confirme carga manual de 25 kg de catalizador», «Introduzca el peso real cargado». Contesta solo lo que has hecho o medido tú, después de hacerlo. Un dato crítico tecleado a mano lleva una comprobación adicional, de una segunda persona o del propio sistema: lo piden el anexo 11 de las GMP europeas (punto 6) e ICH Q7 (5.45).

### Secuencias, pasos y transiciones
Por dentro, una fase es una secuencia: **pasos** unidos por **condiciones de transición**. El sistema no pasa al paso siguiente hasta que la condición se cumple. Por ejemplo: «pasa al paso siguiente cuando la temperatura llegue a 65 °C y hayan transcurrido 30 min».

Una secuencia que «se queda parada» casi nunca está rota: está esperando. La pantalla de secuencia muestra el paso activo y, normalmente, sus condiciones, con una marca en las que ya se cumplen. La que falta es tu pista. Si no las muestra, repásalas: ¿se alcanzó la temperatura?, ¿ha pasado el tiempo?, ¿hay una válvula sin confirmar, un equipo en manual o una pregunta sin contestar?

La secuencia no se «empuja» saltando el paso. Si existe un salto manual, queda registrado y el procedimiento lo reserva a quien está autorizado.

### Enclavamientos y permisivos desde la pantalla
Un **permisivo** es una condición que debe cumplirse para poder empezar algo: el agitador no arranca si el nivel es bajo. Un **enclavamiento** impide una acción o lleva el equipo a posición segura. Un equipo que no obedece a tu orden suele tener un permisivo sin cumplir, y su carátula acostumbra a mostrar cuál. Se resuelve la causa; nunca se rodea la protección. Lo tienes en la lección de alarmas y enclavamientos.

### El registro electrónico de lote

**El sistema registra solo**: los valores de proceso con su hora; las alarmas (cuándo saltan, se reconocen y desaparecen); cada acción del operador, con usuario y hora; y el inicio y fin de cada fase con sus parámetros.

**La persona sigue haciendo**: las comprobaciones visuales, la confirmación y firma de los pasos manuales, la verificación de los pasos críticos y los comentarios sobre lo anormal.

ICH Q7 (6.52) pide que el registro de lote recoja fechas y horas, los resultados reales de los parámetros críticos y las firmas de quien hace y de quien comprueba cada paso crítico.

**Usuarios y niveles de acceso.** El anexo 11 (punto 12.1) pide controles para que solo entren personas autorizadas. Suele haber varios niveles, cada uno con el mínimo que necesita: por ejemplo, operador, supervisor (autoriza ciertas acciones) e ingeniería (cambia la configuración). La guía de integridad de datos de PIC/S (PI 041-1, apartado 9.5) dice que las cuentas compartidas deben prohibirse, porque no permiten saber quién hizo cada cosa. El anexo 11 (12.4) pide que quede registrado quién introduce, cambia, confirma o borra un dato, con fecha y hora. Lo que se haga con tu usuario lo has hecho tú.

**Firma electrónica.** Según el anexo 11 (punto 14), tiene dentro de la empresa el mismo efecto que tu firma a mano, queda unida para siempre a su registro e incluye fecha y hora. La norma estadounidense 21 CFR 11 añade que la firma muestra tu nombre, la fecha y hora y su significado (11.50) y que es de una sola persona y no se reutiliza (11.100). Cuando el sistema te pide la contraseña para confirmar un paso, estás firmando.

**Registro de auditoría** (*audit trail*). Es la lista, generada por el sistema, de los cambios y borrados de datos relevantes, con su motivo; debe poder leerse y se revisa con regularidad (anexo 11, punto 9). ICH Q7 (5.43) pide que quede registro de cada cambio de un dato: la entrada anterior, quién lo cambió y cuándo. Cambiar una consigna, pasar un lazo a manual o corregir un peso deja huella: es lo que permite reconstruir un lote.

### La hora del sistema
Para reconstruir qué pasó hay que ordenar los hechos: saltó la alarma, se cerró la válvula, alguien cambió la consigna. Si los relojes del controlador, del servidor y de la báscula no coinciden, ese orden se pierde. Por eso la guía PI 041-1 (9.5) pide que los relojes de los sistemas conectados estén sincronizados y que solo personal autorizado pueda tocarlos. Para ti: no cambies la hora de un equipo; si un reloj va mal, avisa; y al anotar una hora a mano usa el reloj que diga el procedimiento, no tu móvil.

### Si se cae una pantalla, el sistema o la comunicación

- **Una estación colgada.** El control sigue en el controlador. Pasa a otra estación y avisa.
- **Todas las pantallas sin datos.** No ves el proceso: se aplica el procedimiento de contingencia y se avisa de inmediato.
- **El historiador o el servidor de recetas.** El proceso puede seguir, pero puede perderse registro.

ICH Q7 pide un sistema de respaldo si una avería puede causar la pérdida permanente de registros (5.48), y admite registrar los datos por un segundo medio además del ordenador (5.49). El anexo 11 (punto 16) pide tener previsto un sistema manual o alternativo, documentado y probado. Para ti: pasas a papel con el formato de contingencia, anotas las horas de caída y de recuperación, registras a mano lo que pide el procedimiento y avisas. Toda incidencia del sistema se comunica y se evalúa (anexo 11, punto 13; ICH Q7, 5.46). No reconstruyas datos de memoria.

Al volver el sistema, comprueba en qué paso está la secuencia: un paso no debe repetirse por error.

### Ciberseguridad básica para el operador
- Nada de memorias USB propias, ni cargar el móvil en un ordenador de planta: la guía PI 041-1 pide controlar los dispositivos USB privados.
- No compartas tu sesión ni tu contraseña, ni trabajes con la de otro.
- Bloquea la pantalla o cierra la sesión al alejarte, aunque exista un cierre automático por inactividad.

### Buenas prácticas en la sala de control
- **Relevo de turno.** Repasa con quien sale: paso de cada lote, alarmas activas, equipos en manual o fuera de servicio y preguntas pendientes. Quien entra abre su propia sesión.
- **No reconozcas alarmas sin mirarlas.** Reconocer en bloque borra el aviso de que algo era nuevo.
- **No fuerces señales.** Hacer creer al sistema que una señal vale otra cosa anula una protección: solo con permiso formal.

Los números de esta lección son ejemplos. En planta manda siempre el procedimiento vigente (SOP).
`,
  plant: `
Turno de tarde. El reactor R-310 ejecuta la receta de control del lote 0427 del intermedio ficticio NB-22. La operación «Reacción» está en la fase «Calentar», con consigna de 65 °C.

A las 16:20 miras la pantalla de secuencia: la fase sigue en el paso 3, «Abrir vapor a camisa», desde hace cuatro minutos. La lista de condiciones del paso tiene una sin marcar: «XV-314 confirmada abierta». En la pantalla de unidad, la válvula de vapor XV-314 parpadea con una alarma de discrepancia: tiene orden de abrir y ningún final de carrera activo.

No repites la orden ni saltas el paso. Abres la tendencia del TT-310: la temperatura del producto lleva cuatro minutos plana en 31 °C, así que el vapor no está llegando. Avisas a la jefa de turno, que envía a un compañero a campo: la válvula se ha quedado a medio recorrido porque la llave del aire de instrumentos del actuador estaba casi cerrada tras un trabajo de mantenimiento.

Con el aire restablecido, la válvula abre, llega la confirmación, la condición se marca y la secuencia avanza sola. A las 16:40 lees 35 °C y a las 17:00, 45 °C: 10 °C en 20 min, 0,5 °C/min. Faltan 20 °C, unos 40 min.

A las 17:42 la fase «Calentar» pasa a completa y la receta pregunta: «Confirme carga manual de 25 kg de catalizador CT-9 e introduzca el peso real». Cargas, tecleas 25,2 kg y firmas con tu usuario y tu contraseña; tu compañera verifica el peso con los suyos.

En el comentario del lote escribes lo ocurrido con la XV-314 y sus horas. La jefa de turno abre la incidencia.
`,
  batchRecord: `
En un lote con receta automática, buena parte de la hoja de producción (*batch record*) es el informe que genera el sistema. En él verás, y en él dejas, lo siguiente:

- **Cabecera**: producto, número de lote, receta maestra y su versión, equipo (p. ej. R-310).
- **Fases**: hora de inicio y de fin de cada una, su estado final (completa, parada, abortada) y los parámetros con los que se ejecutó (consigna, cantidad, tiempo).
- **Valores reales** de los parámetros críticos, con su hora, y las tendencias adjuntas de las etapas que el procedimiento indique.
- **Preguntas contestadas**: el texto de la pregunta, tu respuesta (p. ej. 25,2 kg), tu usuario, fecha y hora, y la verificación de la segunda persona cuando el dato es crítico.
- **Firmas electrónicas**: nombre, fecha y hora, y significado (realizado, verificado, revisado).
- **Alarmas** del lote: hora en que saltaron, quién las reconoció y cuándo, y cuándo desaparecieron.
- **Intervenciones manuales**: retenciones y reanudaciones, lazos pasados a manual, consignas cambiadas, con su motivo.
- **Comentarios** del operador sobre lo anormal, escritos en el momento.
- **Si hubo caída del sistema**: hora de la caída y de la recuperación, hojas de contingencia en papel adjuntas y referencia de la incidencia o desviación.

Lo que tú anotas a mano (comprobaciones visuales, pasos fuera del sistema) lleva la hora del reloj que indique el procedimiento, para que encaje con la del informe.
`,
  terms: [
    { es: "Estación de operación", en: "Operator station / HMI", def: "Pantalla, teclado y ratón desde los que el operador ve el proceso y da órdenes. Es una ventana al controlador, no el controlador." },
    { es: "Entradas y salidas", en: "Inputs and outputs (I/O)", def: "Señales que llegan al controlador desde la planta (entradas) y órdenes que el controlador manda a la planta (salidas)." },
    { es: "Señal digital", en: "Digital (discrete) signal", def: "Señal que solo tiene dos valores, sí o no: un final de carrera, una orden de marcha." },
    { es: "Señal analógica", en: "Analog signal", def: "Señal que puede tomar cualquier valor dentro de un rango: una temperatura, la apertura de una válvula de control." },
    { es: "Final de carrera", en: "Limit switch", def: "Interruptor que se acciona cuando una válvula llega al final de su recorrido y confirma que está abierta o cerrada." },
    { es: "Carátula", en: "Faceplate", def: "Ventana de un solo lazo o equipo, con su valor medido, consigna, salida, modo y alarmas." },
    { es: "Sinóptico", en: "Overview / process graphic", def: "Pantalla con el dibujo del proceso y el estado de sus equipos." },
    { es: "Alarma de discrepancia", en: "Discrepancy alarm", def: "Alarma que salta cuando la orden dada a un equipo y la confirmación recibida no coinciden pasado el tiempo previsto." },
    { es: "Tendencia", en: "Trend", def: "Gráfica de una o varias medidas frente al tiempo, en tiempo real o histórica." },
    { es: "Receta de control", en: "Control recipe", def: "Copia de la receta maestra que se ejecuta para un lote concreto, con su número de lote y sus valores." },
    { es: "Condición de transición", en: "Transition condition", def: "Condición que debe cumplirse para que una secuencia pase de un paso al siguiente." },
    { es: "Pregunta al operador", en: "Operator prompt", def: "Mensaje con el que la receta se detiene y pide a la persona una confirmación o un dato." },
    { es: "Permisivo", en: "Permissive", def: "Condición que tiene que cumplirse para que el sistema deje empezar una acción." },
    { es: "Registro de auditoría", en: "Audit trail", def: "Lista generada por el sistema de los cambios y borrados de datos, con quién, cuándo y por qué." },
  ],
  quiz: [
    {
      kind: "number",
      q: "En la tendencia de un reactor lees dos puntos: a las 14:05 la temperatura es 28 °C y a las 14:45 es 52 °C. ¿Cuál es la velocidad media de calentamiento?",
      answer: 0.6,
      tolerance: 0.02,
      unit: "°C/min",
      explain: "Diferencia de temperatura: 52 − 28 = 24 °C. Diferencia de tiempo: de 14:05 a 14:45 van 40 min. Velocidad: 24 / 40 = 0,6 °C/min.",
    },
    {
      kind: "choice",
      q: "El reactor está calentando en automático y tu estación de operación se queda colgada. ¿Qué es lo más probable que esté pasando y qué haces?",
      options: [
        "El calentamiento se ha detenido; espero a que la pantalla vuelva sola",
        "Se ha perdido el lote; apago y enciendo el armario del controlador",
        "El controlador sigue controlando; paso a otra estación y aviso",
        "La receta se ha abortado; la inicio de nuevo desde otra pantalla",
      ],
      answer: 2,
      explain: "El programa corre en el controlador, no en la pantalla: lo que se pierde es la vista desde ese puesto. Se pasa a otra estación, se comprueba el proceso y se avisa según el procedimiento.",
    },
    {
      kind: "number",
      q: "La temperatura del reactor es 52 °C y sube a 0,6 °C/min. La consigna es 70 °C. Si la velocidad se mantiene, ¿cuántos minutos faltan para alcanzarla?",
      answer: 30,
      tolerance: 0.02,
      unit: "min",
      explain: "Faltan 70 − 52 = 18 °C. A 0,6 °C/min: 18 / 0,6 = 30 min.",
    },
    {
      kind: "choice",
      q: "Das orden de abrir a una válvula todo o nada. Pasa el tiempo de recorrido y no se activa ninguno de sus dos finales de carrera. Salta una alarma de discrepancia. ¿Qué haces?",
      options: [
        "Miro qué paso depende de ella, pido comprobarla en campo y aviso",
        "Repito la orden de abrir varias veces hasta que la alarma se quite",
        "Reconozco la alarma y sigo, porque la orden de abrir ya está dada",
        "Salto el paso de la secuencia para que el lote no pierda más tiempo",
      ],
      answer: 0,
      explain: "La discrepancia dice que orden y confirmación no coinciden, pero no dice por qué: la válvula puede no haberse movido, haberse quedado a medias o tener un final de carrera averiado. Hay que comprobarlo y avisar, no dar la posición por buena.",
    },
    {
      kind: "number",
      q: "Un reactor tiene 5 válvulas todo o nada (cada una con 1 orden y 2 finales de carrera), 1 agitador (1 orden de marcha, 1 confirmación de marcha y 1 señal de fallo), 4 transmisores y 2 válvulas de control. ¿Cuántas señales suma en total entre DI, DO, AI y AO?",
      answer: 24,
      tolerance: 0.001,
      unit: "señales",
      explain: "Salidas digitales: 5 + 1 = 6. Entradas digitales: 5 × 2 + 2 = 12. Entradas analógicas: 4. Salidas analógicas: 2. Total: 6 + 12 + 4 + 2 = 24 señales.",
    },
    {
      kind: "choice",
      q: "La fase «Mantener» lleva parada más tiempo del previsto. No hay ninguna alarma activa. ¿Cómo averiguas qué pasa?",
      options: [
        "Aborto la fase y la inicio otra vez para que empiece de cero",
        "Miro el paso activo y qué condición de transición falta por cumplirse",
        "Paso todos los equipos a manual y termino la fase a mano yo mismo",
        "Cambio el tiempo de mantenimiento de la receta para que avance ya",
      ],
      answer: 1,
      explain: "Una secuencia parada casi siempre está esperando una condición: una temperatura, un tiempo, una válvula sin confirmar, un equipo en manual o una pregunta sin contestar. La pantalla de secuencia muestra el paso activo y, normalmente, la condición que falta.",
    },
    {
      kind: "number",
      q: "La receta sube la consigna de temperatura en rampa desde 20 °C hasta 65 °C a 30 °C/h. ¿Cuántos minutos dura la rampa?",
      answer: 90,
      tolerance: 0.02,
      unit: "min",
      explain: "Hay que subir 65 − 20 = 45 °C. A 30 °C/h son 45 / 30 = 1,5 h, es decir, 1,5 × 60 = 90 min.",
    },
    {
      kind: "choice",
      q: "Durante un calentamiento, la tendencia de la temperatura del producto dibuja una línea perfectamente plana desde hace quince minutos, mientras la de la camisa sigue subiendo. ¿Qué piensas?",
      options: [
        "Que el producto ya ha alcanzado la consigna y la fase está completa",
        "Que es lo normal: una temperatura bien controlada no se mueve nada",
        "Que la escala de tiempo está mal y basta con ampliar la gráfica",
        "Que la lectura puede estar congelada: pido comprobar el instrumento",
      ],
      answer: 3,
      explain: "Una medida real casi siempre tiembla un poco y, con la camisa subiendo, el producto debería calentarse. Una línea perfectamente plana no prueba un fallo, pero es motivo para comprobar el instrumento y avisar antes de fiarse del valor.",
    },
    {
      kind: "choice",
      q: "La receta pregunta «Introduzca el peso real cargado». Tu compañero, que ha hecho la carga, no tiene sesión abierta y te pide que lo teclees y firmes tú. ¿Qué haces?",
      options: [
        "Lo tecleo y firmo yo: lo importante es que el dato quede escrito",
        "Él abre su sesión y lo firma: cada uno firma lo que ha hecho",
        "Le dejo mi contraseña para que lo firme con mi usuario esta vez",
        "Contesto el peso teórico de la receta para que el lote continúe",
      ],
      answer: 1,
      explain: "La firma electrónica es de una sola persona y tiene el mismo efecto que la firma a mano: lo que se firme con tu usuario lo has hecho tú. Quien hizo la carga la confirma con su propia sesión, y las cuentas compartidas deben prohibirse.",
    },
    {
      kind: "choice",
      q: "A mitad de lote el servidor que guarda los datos deja de funcionar. El reactor sigue controlado. ¿Qué haces con el registro?",
      options: [
        "Espero a que vuelva y reconstruyo de memoria los datos que falten",
        "No anoto nada: lo que no guarda el sistema no forma parte del lote",
        "Copio luego los valores de un lote anterior, que serán muy parecidos",
        "Paso a papel según contingencia, anoto las horas de caída y aviso",
      ],
      answer: 3,
      explain: "ICH Q7 (5.48 y 5.49) y el anexo 11 (punto 16) piden un respaldo o un medio alternativo cuando una avería puede hacer perder registros. Se aplica el procedimiento de contingencia en papel, se anotan las horas de caída y de recuperación y se comunica la incidencia; nunca se reconstruye de memoria.",
    },
  ],
};
