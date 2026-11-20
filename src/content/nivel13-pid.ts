import type { Lesson } from "./types";

export const pidAFondo: Lesson = {
  slug: "pid-a-fondo",
  level: 13,
  order: 4,
  title: "Leer un P&ID a fondo: seguir una línea, entender un lazo y preparar una maniobra",
  titleEn: "Reading a P&ID in depth: following a line, understanding a loop and preparing a line-up",
  minutes: 38,
  summary:
    "Los tres planos de una planta, el código de letras completo con quince etiquetas descifradas, el número de lazo, la posición de fallo de cada válvula razonada, un reactor ficticio recorrido etiqueta a etiqueta y cómo usar el plano para alinear válvulas y aislar un equipo.",
  body: `
En la lección anterior aprendiste qué es un P&ID y a descifrar etiquetas sencillas. Aquí vas a usarlo como un operador: para seguir una tubería de punta a punta, entender qué instrumento manda sobre qué válvula y preparar una maniobra sin sorpresas.

Un aviso. El código de letras viene de una norma de pago (ISA-5.1). Aquí va lo que reproducen de ella guías gratuitas, entre ellas el libro de texto abierto de Tony Kuphaldt, y solo las letras de uso general. Los dibujos cambian de una empresa a otra: cada juego de planos trae su **leyenda** (*legend sheet*), y la de tu planta manda sobre lo que leas aquí.

### Tres planos para tres preguntas
Piensa en una ciudad: hay un esquema del metro, un callejero y un plano de las tuberías de cada calle. Es la misma ciudad, pero cada mapa sirve para una cosa.

| Plano | Pregunta que contesta | Qué lleva | Qué no lleva |
|---|---|---|---|
| **Diagrama de bloques** (*block flow diagram*) | ¿Qué etapas tiene el proceso y en qué orden? | Un rectángulo por etapa (reacción, filtración, secado) y flechas entre ellas | Equipos concretos, válvulas, instrumentos |
| **Diagrama de flujo de proceso** (*process flow diagram*, PFD) | ¿Qué equipos principales hay y qué corre entre ellos? | Equipos principales, corrientes principales y sus condiciones de trabajo (caudal, temperatura, presión) | Cada válvula manual, cada línea pequeña, el detalle de los instrumentos |
| **Diagrama de tuberías e instrumentación** (*piping and instrumentation diagram*, P&ID) | ¿Por dónde va exactamente cada tubería y qué la mide y la gobierna? | Todas las tuberías, válvulas, instrumentos y lazos de control, cada uno con su etiqueta | Distancias, alturas y recorrido real de los tubos; el cableado de cada instrumento, que va en otros documentos |

El P&ID no está a escala. Dos válvulas dibujadas juntas pueden estar en pisos distintos. El plano dice qué está conectado con qué y en qué orden, no dónde está.

### El código de letras, con más detalle
La primera letra dice qué se mide. Las siguientes, qué hace el instrumento con esa medida. Entre ambas puede haber una letra que matiza la variable: un modificador. La dificultad es que una misma letra significa cosas distintas según el sitio que ocupa:

| Letra | Como primera letra (qué se mide) | Como modificador | Como letra siguiente (qué hace) |
|---|---|---|---|
| A | Análisis (pH, oxígeno) | | Alarma |
| C | | | Controlador |
| D | | Diferencial: la resta de dos medidas | |
| E | Tensión eléctrica | | Elemento primario: el sensor |
| F | Caudal (*flow*) | | |
| H | | | Alto (*high*) |
| I | | | Indicador |
| L | Nivel (*level*) | | Bajo (*low*) |
| P | Presión | | |
| Q | Cantidad | Totalizador: va sumando | |
| R | | | Registrador (*recorder*) |
| S | Velocidad (*speed*) | Seguridad | Interruptor (*switch*) |
| T | Temperatura | | Transmisor |
| V | | | Válvula |
| W | Peso (*weight*) | | |
| Y | | | Relé, cálculo o conversión de señal |

Una casilla vacía solo significa que ese uso no entra en esta lección. Recuerda además la Z (posición) y la X (la de las válvulas todo o nada, XV). HH y LL son muy alto y muy bajo.

Regla para leer: primera letra, mira si la segunda es un modificador (D, Q o S), y lo que queda son funciones, en orden.

### Quince etiquetas descifradas
1. **TE-401**: T temperatura, E elemento. El sensor de temperatura en sí, metido en su vaina.
2. **TT-401**: transmisor de temperatura. Convierte lo que nota el sensor en una señal que viaja al sistema de control.
3. **TIC-401**: temperatura, indicador, controlador. Muestra la temperatura y además decide cuánto abrir las válvulas para llevarla a la consigna.
4. **TR-401**: registrador de temperatura. Guarda la curva de temperatura a lo largo del tiempo.
5. **TAH-401**: temperatura, alarma, alta.
6. **TV-401**: temperatura, válvula. La válvula de control del lazo de temperatura. Aunque por ella pase vapor, se llama T porque obedece a la temperatura. En muchas plantas la verás como TCV.
7. **PT-402**: transmisor de presión.
8. **PIC-402**: indicador y controlador de presión.
9. **PDI-407**: presión, diferencial, indicador. Marca la diferencia de presión entre dos puntos, por ejemplo antes y después de un filtro. Si sube, el filtro se está atascando.
10. **LT-403**: transmisor de nivel.
11. **LSHH-403**: nivel, interruptor, muy alto. No da un número: cambia de estado cuando el líquido llega a una altura fija, y suele disparar un enclavamiento.
12. **FT-405**: transmisor de caudal. Dice cuánto pasa en cada momento.
13. **FQI-405**: caudal, totalizador, indicador. Suma todo lo que ha pasado y lo muestra. Es el cuentakilómetros; el FT es el velocímetro.
14. **PSV-404**: presión, seguridad, válvula. La válvula de seguridad. Aquí la S es el modificador «seguridad», no un interruptor.
15. **PSE-404**: presión, seguridad, elemento. El disco de ruptura. En algunas plantas lo verás como RD (*rupture disc*).

Fíjate en la trampa de la S: en LSHH es un interruptor y en PSV es seguridad. La posición lo decide.

### El número de lazo
Un lazo (*loop*) es el conjunto que controla una variable: el que mide, el que decide y el que actúa. Todos llevan el mismo número. TE-401, TT-401, TIC-401, TAH-401 y TV-401 son el lazo 401, aunque estén dibujados en esquinas distintas de la hoja. Un instrumento con otro número pertenece a otro sistema.

Para seguir un lazo en el plano:

1. Busca el sensor pegado al equipo (TE o TT).
2. Sigue su línea de señal hasta el controlador (TIC).
3. Sigue la línea que sale del controlador hasta la válvula (TV).
4. Mira en qué tubería está esa válvula y qué fluido lleva.

Así sabes contestar a «¿qué pasa si este sensor falla?»: el controlador decide con un dato malo y mueve esa válvula.

Si un lazo tiene dos piezas iguales, se distinguen con una letra al final: TV-401A y TV-401B.

### Círculos y líneas de señal
Como viste, un círculo solo es un instrumento en campo; con una raya horizontal, uno de panel o sala de control; y el círculo dentro de un cuadrado es una función del sistema de control. Úsalo: antes de ir a buscar un instrumento, mira su símbolo. Si es una función del sistema de control, no hay aparato que mirar en campo; se ve en pantalla.

Las líneas que unen los círculos no son tuberías: son señales. La eléctrica se dibuja a trazos. La leyenda distingue además, con trazos propios, la señal neumática (aire a presión que mueve una válvula) y el tubo capilar (un tubito que une un sensor con su indicador). Apréndelos de la leyenda de tu planta.

### Válvulas, actuadores y posición de fallo
La válvula se dibuja casi siempre como dos triángulos unidos por la punta, como una pajarita, y un detalle interior distingue el tipo. Encima lleva el símbolo del actuador, lo que la mueve: volante o palanca si es manual, actuador neumático o motor eléctrico si es automática.

La posición de fallo es lo que hace la válvula cuando se queda sin aire o sin señal. Se indica con letras junto al símbolo, y a veces con una flecha:

- **FC** (*fail closed*): cierra al fallar. Es la que necesita aire para abrir; sin aire, el muelle la cierra.
- **FO** (*fail open*): abre al fallar.
- **FL** (*fail last* o *fail locked*): se queda como estaba. Necesita un dispositivo añadido que atrape el aire en el actuador.

Se elige preguntando: si falla todo, ¿cómo queda el proceso más seguro? Y para todas a la vez, porque un fallo del aire de instrumentos mueve muchas válvulas en el mismo instante.

| Válvula | Posición de fallo habitual | Razonamiento |
|---|---|---|
| Vapor a la camisa | FC | Si falla, deja de entrar calor. Un reactor que se enfría solo rara vez es un peligro; uno que se sigue calentando sin control, sí. |
| Agua de refrigeración a la camisa | FO | Si falla, el agua sigue pasando. Perder la refrigeración es una de las causas clásicas de una reacción fuera de control. |
| Adición de reactivo | FC | Si falla, deja de entrar reactivo. Lo que no entra no puede reaccionar ni acumularse. |
| Venteo hacia el condensador y el lavador | FO | Si falla, el reactor queda comunicado con el venteo y la presión no puede subir encerrada. |

Son los casos habituales, no una ley: hay procesos donde lo seguro es lo contrario. Vale lo que diga el P&ID de tu equipo.

Para las válvulas manuales hay otras marcas, que indican la posición normal: **NC** (*normally closed*, normalmente cerrada) y **NO** (*normally open*, normalmente abierta). Y dos más para las que no se deben tocar: **LO** (*locked open*, abierta con candado) y **LC** (*locked closed*, cerrada con candado). No confundas FC con NC: la primera dice qué hace una válvula automática al fallar; la segunda, cómo está una manual en operación normal.

### Los dispositivos de alivio
Son la última defensa contra la sobrepresión.

- **Válvula de seguridad** (PSV): se abre sola cuando la presión llega a su tarado y vuelve a cerrar cuando baja.
- **Disco de ruptura** (PSE o RD): una lámina que revienta a una presión fijada. No vuelve a cerrar: hay que parar y poner uno nuevo. A veces se monta debajo de la válvula de seguridad para protegerla del producto.

Busca dos cosas en el plano. Primera, a dónde descargan: con fluidos peligrosos, la descarga va canalizada a un lugar seguro y controlado, no a la sala. Sigue esa línea hasta el final. Segunda, que entre el equipo y su válvula de seguridad no haya una válvula que alguien pueda cerrar. Si la hay, la verás marcada como abierta con candado.

### Las líneas también tienen etiqueta
Cada tubería lleva un número de línea. No hay un formato universal: cada empresa tiene el suyo y está en la leyenda. Lo habitual es que diga el diámetro, el fluido, un número de orden, la clase de material y si lleva aislamiento.

Un ejemplo inventado para esta lección, que no es de ninguna planta: **50-DS-4012-A1-N**.

| Trozo | Significado en este ejemplo inventado |
|---|---|
| 50 | Diámetro nominal: DN 50 |
| DS | Fluido: disolvente |
| 4012 | Número de orden de la línea |
| A1 | Clase de material (tipo de tubo, juntas y bridas) |
| N | Sin aislamiento |

Además verás:

- **Flechas** sobre la línea: el sentido normal del flujo. Con una válvula mal puesta, el líquido puede ir al revés.
- **Conectores entre hojas** (*off-page connectors*): una línea que acaba en el borde con una caja que dice de qué hoja viene o a cuál va. Una línea que «termina» casi nunca termina.
- **Límites de batería** (*battery limits*): la raya que marca dónde acaba una unidad y empieza otra o los servicios generales.

### Los equipos
El reactor se dibuja como un recipiente visto de lado. La camisa es un segundo contorno que lo envuelve, con sus entradas y salidas de servicio. El agitador, un eje vertical con el motor arriba. El condensador, un intercambiador encima, unido a la tapa por la línea de vapores. Una bomba suele ser un círculo con su salida; filtros e intercambiadores tienen su figura en la leyenda.

Las etiquetas de equipo (R, P, E, C y un número) son propias de cada planta. No hay una norma que obligue a llamar R a un reactor.

### Un recorrido completo: el reactor R-401
Todo lo que sigue es ficticio y está simplificado: una camisa real lleva además purgadores, drenajes y válvulas de cambio de servicio. Léelo despacio, imaginando la hoja.

En el centro está el reactor R-401, con su camisa y su agitador. Encima, el condensador E-401. Por la izquierda llegan los servicios y el disolvente; por la derecha sale el venteo; por abajo, la descarga.

**Lazo de temperatura, 401.** Dentro del reactor, en una vaina, está el sensor TE-401. Su transmisor TT-401 envía la señal al controlador TIC-401. De este salen dos líneas de señal hacia la camisa: a TV-401A, en la línea de vapor, y a TV-401B, en la de agua de refrigeración. Si falta temperatura, abre la A; si sobra, cierra la A y abre la B.

**Lazo de presión, 402.** En la tapa, PT-402 informa a PIC-402, que mueve PV-402, en la línea de venteo después del condensador.

**Nivel, 403.** LT-403 da el nivel, que se ve en pantalla como LI-403. Más arriba está el interruptor LSHH-403.

**Alivio, 404.** En la tapa, el disco PSE-404 y, encima, la válvula PSV-404. Descargan por una línea propia al depósito de recogida TK-490.

**Carga de disolvente, 405.** La línea llega por un conector desde la hoja del colector de disolventes. Pasa por la válvula manual V-405, el filtro F-407, el caudalímetro FT-405 y la válvula automática XV-405, y entra por la tapa.

**Venteo.** Los vapores suben a E-401. Lo que condensa vuelve al reactor. Lo que no, sigue por PV-402 hasta un conector hacia el lavador de gases.

| Etiqueta | Qué es | Qué hace | Si falla |
|---|---|---|---|
| TE-401 / TT-401 | Sensor y transmisor de temperatura | Miden la temperatura de la masa | |
| TIC-401 | Controlador de temperatura | Compara con la consigna y manda sobre las dos válvulas | |
| TAH-401 | Alarma de temperatura alta | Avisa al operador | |
| TV-401A | Válvula de control de vapor | Calienta | FC |
| TV-401B | Válvula de control de agua | Enfría | FO |
| PT-402 / PIC-402 | Transmisor y controlador de presión | Miden la presión y la regulan | |
| PV-402 | Válvula de control del venteo | Deja salir gas hacia el lavador | FO |
| LT-403 / LI-403 | Transmisor e indicación de nivel | Dicen cuánto líquido hay | |
| LSHH-403 | Interruptor de nivel muy alto | Cierra XV-405 | |
| PSE-404 / PSV-404 | Disco de ruptura y válvula de seguridad | Alivian la sobrepresión hacia TK-490 | |
| FT-405 / FQI-405 | Caudalímetro y totalizador | Miden el caudal y suman lo cargado | |
| XV-405 | Válvula automática de carga | Abre o corta el disolvente | FC |
| PDI-407 | Indicador de presión diferencial | Vigila el atasco del filtro F-407 | |

### Usar el P&ID para trabajar
**Recorrer la línea** (*walk the line*). Antes de mover producto, se sigue la ruta primero con el dedo sobre el plano y luego andando por la planta, de origen a destino, comprobando con los ojos cada válvula y cada rama. El plano dice lo que debería haber; solo el recorrido dice lo que hay.

**Preparar un alineamiento** (*line-up*). Es la lista de válvulas con la posición que debe tener cada una. Ejemplo: trasvasar de R-401 a la centrífuga C-501 con la bomba P-401. La ruta es: válvula de fondo XV-406, aspiración V-410, bomba, impulsión V-411, entrada a la centrífuga V-412. Pero de esa ruta salen ramas, y cada rama es un sitio por donde el producto puede escaparse:

| Válvula | Dónde está | Posición |
|---|---|---|
| XV-406 | Fondo del reactor | Abierta |
| V-410 | Aspiración de P-401 | Abierta |
| V-411 | Impulsión de P-401 | Abierta |
| V-412 | Entrada a C-501 | Abierta |
| V-407 | Rama de drenaje | Cerrada |
| V-408 | Toma de muestra | Cerrada |
| V-409 | Retorno al reactor | Cerrada |
| V-413 | Rama hacia el reactor R-402 | Cerrada |

Una lista que solo nombra las válvulas que se abren está a medias. Las cerradas importan tanto como las abiertas.

**Buscar por dónde puede ir un líquido donde no debe.** En cada bifurcación de la ruta, pregúntate qué hay al otro lado de la rama y qué lo separa de tu producto. Mira también los servicios: una línea de nitrógeno o de agua conectada al equipo es otro camino posible.

**Localizar puntos de aislamiento.** Para un permiso de trabajo hay que separar el equipo de todo lo que le llega: producto, vapor, agua, nitrógeno, venteo, drenajes. El P&ID es la herramienta para no olvidar ninguno: se marcan todas las líneas que tocan el equipo y, en cada una, el punto de corte. Después se bloquea cada corte, se elimina la presión o el producto que haya quedado dentro y se verifica. Para entrar en un equipo no basta con cerrar válvulas: se colocan bridas ciegas en las tuberías. Oirás hablar de **doble bloqueo y purga** (*double block and bleed*): dos válvulas cerradas en serie y, entre ellas, una purga abierta que demuestra que la primera no pasa. Qué aislamiento hace falta en cada caso lo decide el permiso, no tú.

### El P&ID es un documento controlado
Un plano que no coincide con la planta es peor que no tener plano, porque te fías de él. Por eso el P&ID tiene número, revisión y fecha, y la copia válida es la vigente. Se llama **as built** al plano que refleja lo que se construyó de verdad, no lo que se proyectó.

La guía ICH Q7 lo pide en su apartado 5.16: debe mantenerse un juego de planos actualizados de los equipos y de las instalaciones críticas, y pone como ejemplo la instrumentación y los servicios. El apartado 4.20 pide que haya planos de los sistemas de servicios. Y al cualificar un equipo se verifica que tuberías e instrumentos están instalados conforme a los planos.

De ahí que cualquier cambio físico (una válvula nueva, una línea anulada, un instrumento cambiado de sitio) pase por control de cambios. Q7 exige un sistema formal para evaluar los cambios en instalaciones y equipos (13.10 y 13.11) y que, al implantarlos, se revisen todos los documentos afectados (13.14). El P&ID es uno de ellos. Lo tienes desarrollado en la lección «Control de cambios y gestión de riesgos a fondo» del nivel 16.

Si en campo ves algo que no está en el plano, o al revés, no lo arregles tú ni lo ignores: avisa.

### Errores típicos del principiante
- Leer la S siempre como interruptor, o la primera letra como el fluido de la tubería. TV-401A lleva vapor y se llama T.
- Creer que el plano está a escala y buscar una válvula «al lado» de otra.
- Seguir una línea hasta el borde de la hoja y dar por hecho que ahí acaba.
- Confundir una línea de señal con una tubería.
- Confundir FC con NC.
- Preparar un alineamiento mirando solo la ruta y olvidando las ramas.
- Fiarse de una copia vieja del plano, o del plano sin recorrer la línea.

El reactor, las etiquetas y el número de línea de esta lección son inventados. En planta mandan la leyenda de tus planos y el procedimiento vigente (SOP).
`,
  plant: `
Turno de tarde. La hoja pide cargar 800 L de etanol en el reactor R-401 para el lote del intermedio ficticio MT-22. Antes de tocar nada, abres el P&ID vigente de R-401 y compruebas en el cajetín que la revisión es la misma que cita el procedimiento.

Sigues la línea de carga con el dedo: conector desde el colector de disolventes, válvula manual V-405, filtro F-407 con su PDI-407, caudalímetro FT-405 con el totalizador FQI-405, válvula automática XV-405 y tapa del reactor. Hay una rama entre el filtro y el caudalímetro: una purga con la válvula V-414, marcada NC.

Sales a planta y recorres la línea andando. V-405, cerrada, como toca antes de empezar. Al llegar a la purga ves que V-414 está entreabierta y que debajo hay un cubo con un dedo de líquido. Alguien purgó la línea y no la cerró del todo. Si hubieras abierto la carga, parte del etanol habría ido al suelo, y el totalizador habría contado un disolvente que nunca llegó al reactor.

No la cierras sin más y sigues. Avisas al jefe de turno, cerráis V-414, se retira el cubo como residuo y se anota la incidencia. Terminas el recorrido, pones el FQI-405 a cero, abres V-405 y das la orden de carga. XV-405 abre y su final de carrera lo confirma.

Durante la carga miras tres cosas: el caudal en FT-405, el PDI-407 del filtro, que se mantiene bajo, y el nivel LI-403, que sube. Al llegar a 800 L en el FQI-405, XV-405 cierra. Cierras V-405 y anotas la lectura.
`,
  batchRecord: `
En la hoja de producción (*batch record*) las instrucciones no describen los equipos: los nombran por su etiqueta. Saber leer el P&ID es lo que te permite entender qué te están pidiendo. Verás y anotarás:

- **Instrucciones con etiquetas**: «Cargar 800 L de etanol por FQI-405», «Ajustar TIC-401 a 60 °C», «Comprobar PDI-407 por debajo del límite del procedimiento».
- **Verificación de la ruta**: una casilla de «línea recorrida y alineamiento comprobado», con la firma de quien lo hace y, si es un paso crítico, la de una segunda persona.
- **Lista de alineamiento**: cada válvula con su etiqueta y la posición encontrada, abierta o cerrada. Se anota lo que has visto, no lo que debería estar.
- **Lecturas reales**: lectura inicial y final del totalizador FQI-405 y la cantidad cargada, con su unidad, fecha, hora y firma.
- **Instrumentos usados**: la etiqueta del instrumento con el que tomas cada dato, tal como figura en el plano.
- **Plano de referencia**: algunos procedimientos citan el número y la revisión del P&ID; comprueba que usas esa revisión.
- **Incidencias**: una válvula encontrada en posición distinta de la esperada, una diferencia entre el plano y la planta, un instrumento que no aparece en el plano. Se anotan y se avisa al responsable de turno.

Nunca se corrige a mano una copia del plano para «dejarlo bien»: una diferencia entre plano y planta se comunica y se resuelve por control de cambios.
`,
  terms: [
    { es: "Diagrama de flujo de proceso", en: "Process flow diagram (PFD)", def: "Plano con los equipos y las corrientes principales y sus condiciones de trabajo. No detalla cada válvula ni cada instrumento." },
    { es: "Leyenda", en: "Legend sheet", def: "Hoja que explica los símbolos, las abreviaturas y el formato de las etiquetas de un juego de planos. Manda sobre cualquier regla general." },
    { es: "Número de lazo", en: "Loop number", def: "Número que comparten todos los instrumentos que trabajan juntos sobre una misma variable, del sensor a la válvula." },
    { es: "Modificador", en: "Modifier letter", def: "Letra que matiza la variable medida: D diferencial, Q totalizador, S seguridad." },
    { es: "Totalizador", en: "Totalizer", def: "Instrumento que suma todo el caudal que ha pasado. En la etiqueta se indica con la Q, como en FQI." },
    { es: "Presión diferencial", en: "Differential pressure", def: "Diferencia de presión entre dos puntos, por ejemplo antes y después de un filtro. En la etiqueta se indica con la D, como en PDI." },
    { es: "Posición de fallo", en: "Failure position (FC, FO, FL)", def: "Lo que hace una válvula automática al quedarse sin aire o sin señal: cerrar, abrir o quedarse como estaba." },
    { es: "Normalmente cerrada / normalmente abierta", en: "Normally closed (NC) / normally open (NO)", def: "Posición que tiene una válvula manual en operación normal. No es lo mismo que la posición de fallo." },
    { es: "Disco de ruptura", en: "Rupture disc (PSE, RD)", def: "Lámina que revienta a una presión fijada para aliviar el equipo. No vuelve a cerrar y hay que sustituirla." },
    { es: "Número de línea", en: "Line number", def: "Etiqueta de una tubería. Suele indicar diámetro, fluido, número de orden, clase de material y aislamiento, con el formato propio de cada empresa." },
    { es: "Conector entre hojas", en: "Off-page connector", def: "Marca en el borde del plano que indica de qué hoja viene una línea o a cuál continúa." },
    { es: "Alineamiento", en: "Line-up", def: "Lista de válvulas con la posición que debe tener cada una, abierta o cerrada, para una maniobra." },
    { es: "Recorrer la línea", en: "Walk the line", def: "Seguir andando la ruta completa, de origen a destino, comprobando en campo cada válvula y cada rama antes de la maniobra." },
    { es: "Plano conforme a obra", en: "As-built drawing", def: "Plano que refleja la instalación tal como está construida de verdad. Se mantiene al día mediante control de cambios." },
  ],
  quiz: [
    {
      kind: "number",
      q: "En una lista de instrumentos aparecen estas doce etiquetas: TE-401, TT-401, TIC-401, TV-401A, TV-401B, TAH-401, PT-402, PIC-402, LT-403, PSV-404, FT-405 y FQI-405. ¿Cuántas pertenecen al lazo 401?",
      answer: 6,
      tolerance: 0.001,
      unit: "etiquetas",
      explain: "Pertenecen al lazo 401 las que llevan ese número: TE-401, TT-401, TIC-401, TV-401A, TV-401B y TAH-401. Son 6. Las letras A y B del final solo distinguen dos válvulas del mismo lazo.",
    },
    {
      kind: "choice",
      q: "En la línea de carga hay un filtro con un instrumento PDI-407. Durante la carga su lectura va subiendo poco a poco. ¿Qué te está diciendo?",
      options: [
        "Que la presión dentro del reactor está subiendo y hay que ventear",
        "Que el caudal de disolvente aumenta porque la válvula abre más",
        "Que la diferencia de presión en el filtro crece: se está atascando",
        "Que el totalizador ha llegado a la cantidad que pedía la hoja",
      ],
      answer: 2,
      explain: "P es presión, D es diferencial e I es indicador: marca la diferencia de presión entre la entrada y la salida del filtro. Si crece, el filtro opone cada vez más resistencia.",
    },
    {
      kind: "choice",
      q: "La hoja pide cargar 800 L de disolvente. En la línea hay un FT-405 y un FQI-405. ¿En cuál lees los litros que llevas cargados?",
      options: [
        "En el FQI-405, porque la Q indica que suma lo que ha pasado",
        "En el FT-405, porque la T indica que mide el total cargado",
        "En cualquiera de los dos, porque comparten número de lazo",
        "En ninguno: los litros cargados solo se ven en el nivel LT",
      ],
      answer: 0,
      explain: "F es caudal, Q es totalizador e I es indicador: el FQI suma todo lo que ha pasado. El FT es el transmisor de caudal y da lo que pasa en cada momento.",
    },
    {
      kind: "choice",
      q: "En el plano de un reactor aparece la etiqueta LSHH-403 unida por una línea de señal a la válvula de carga. ¿Qué es?",
      options: [
        "Un transmisor de nivel que da la altura de líquido en pantalla",
        "Una alarma de nivel bajo que avisa de que el reactor se vacía",
        "Una válvula de seguridad que alivia el nivel hacia otro depósito",
        "Un interruptor de nivel muy alto que actúa sobre esa válvula",
      ],
      answer: 3,
      explain: "L es nivel, S en esa posición es interruptor y HH es muy alto. No da un número: cambia de estado al llegar el líquido a una altura fija y, en este caso, actúa sobre la válvula de carga.",
    },
    {
      kind: "choice",
      q: "Un compañero dice que la PSV-404 es «un interruptor de presión con válvula». ¿Tiene razón?",
      options: [
        "Sí: la S significa interruptor en cualquier posición de la etiqueta",
        "No: aquí la S es el modificador seguridad; es la válvula de seguridad",
        "Sí: toda etiqueta que empieza por PS es un presostato de proceso",
        "No: la P es de purga y la S de salida; es la válvula de drenaje",
      ],
      answer: 1,
      explain: "Justo después de la primera letra, la S actúa como modificador y significa seguridad: PSV es presión, seguridad, válvula. En LSHH la S va en el sitio de las funciones y sí es un interruptor.",
    },
    {
      kind: "choice",
      q: "Se corta el aire de instrumentos. En la camisa del reactor, la válvula de vapor TV-401A es FC y la de agua de refrigeración TV-401B es FO. ¿Cómo queda el reactor?",
      options: [
        "Con el vapor abierto y el agua cerrada: sigue calentando",
        "Con el vapor cerrado y el agua abierta: deja de calentar y enfría",
        "Con las dos válvulas cerradas: ni calienta ni enfría el reactor",
        "Con las dos válvulas tal como estaban antes de fallar el aire",
      ],
      answer: 1,
      explain: "FC es cierra al fallar y FO es abre al fallar. Sin aire, el vapor se corta y el agua queda pasando: el reactor va hacia el lado seguro, que es dejar de calentar y mantener la refrigeración.",
    },
    {
      kind: "choice",
      q: "Hay que elegir la posición de fallo de la válvula automática que dosifica un reactivo a un reactor donde ocurre una reacción que desprende calor. ¿Cuál es la razonable y por qué?",
      options: [
        "FC: si falla, deja de entrar reactivo y no se acumula ni reacciona más",
        "FO: si falla, entra todo el reactivo y la reacción termina mucho antes",
        "FL: si falla, sigue dosificando igual y el lote no se retrasa nada",
        "Da igual: la posición de fallo solo importa en las válvulas de vapor",
      ],
      answer: 0,
      explain: "La pregunta es cómo queda el proceso más seguro si falla todo. Cortar la entrada de reactivo detiene el aporte de lo que genera calor. Lo que vale en tu equipo es lo que diga su P&ID.",
    },
    {
      kind: "number",
      q: "Para trasvasar de R-401 a la centrífuga C-501, el producto pasa por la válvula de fondo XV-406, la aspiración V-410, la bomba P-401, la impulsión V-411 y la entrada V-412. De la ruta salen cuatro ramas con las válvulas V-407 (drenaje), V-408 (toma de muestra), V-409 (retorno al reactor) y V-413 (hacia R-402). ¿Cuántas de esas ocho válvulas deben quedar abiertas?",
      answer: 4,
      tolerance: 0.001,
      unit: "válvulas",
      explain: "Abiertas solo las de la ruta: XV-406, V-410, V-411 y V-412. Son 4. Las de las cuatro ramas (V-407, V-408, V-409 y V-413) deben estar cerradas y comprobadas.",
    },
    {
      kind: "choice",
      q: "Recorriendo una línea antes de un trasvase encuentras una válvula manual en una rama que no aparece en el P&ID vigente. ¿Qué haces?",
      options: [
        "La cierro, la dibujo a mano en mi copia del plano y sigo adelante",
        "La ignoro: si no está en el plano es que no afecta a la maniobra",
        "No sigo: aviso al responsable; plano y planta deben coincidir",
        "La abro un momento para ver a dónde va y así saber qué anotar",
      ],
      answer: 2,
      explain: "Un plano que no coincide con la planta no sirve para decidir. La diferencia se comunica y se resuelve por control de cambios; ICH Q7 pide planos actualizados (5.16) y revisar los documentos afectados por un cambio (13.14).",
    },
    {
      kind: "choice",
      q: "Mantenimiento va a desmontar la bomba P-401 y te piden ayudar a preparar el aislamiento con el P&ID. ¿Cómo lo usas?",
      options: [
        "Miro solo la aspiración y la impulsión, que son las dos líneas de la bomba",
        "Cierro la válvula más cercana a la bomba y doy el equipo por aislado",
        "Decido yo si basta una válvula o hace falta doble bloqueo y purga",
        "Marco todas las líneas que llegan a la bomba y el corte de cada una",
      ],
      answer: 3,
      explain: "El plano sirve para no olvidar ninguna conexión: proceso, drenajes, purgas y servicios. Cada punto de corte se bloquea y se verifica, y el tipo de aislamiento lo fija el permiso de trabajo.",
    },
  ],
};
