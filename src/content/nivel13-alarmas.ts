import type { Lesson } from "./types";

export const alarmasYSeguridadAFondo: Lesson = {
  slug: "alarmas-y-seguridad-a-fondo",
  level: 13,
  order: 10,
  title: "Alarmas, enclavamientos y sistemas de seguridad a fondo",
  titleEn: "Alarms, interlocks and safety systems in depth",
  minutes: 42,
  summary:
    "Qué es de verdad una alarma, cómo se leen sus tipos, prioridades y estados en pantalla, en qué se diferencian un permisivo y un disparo, por qué nunca se puentea una protección y cómo encajan las capas que protegen la planta, desde el lazo de control hasta la seta de emergencia.",
  body: `
En la lección «Alarmas, enclavamientos y sistemas de seguridad» viste el mapa general. Aquí lo recorremos despacio. La idea central: la planta se protege por **capas**, y tú eres una de ellas.

Todos los códigos y valores de esta lección son **valores de ejemplo**, inventados para el reactor ficticio R-401 que ya conoces de la lección sobre los planos P&ID.

### Qué es una alarma y qué no
Una **alarma** (*alarm*) es una señal sonora y visual de que algo se ha salido de lo normal **y exige una acción tuya en un tiempo limitado**. Si no hay nada que hacer, no es una alarma.

Un **evento** (*event*), como «Agitador en marcha», solo queda en el registro. Un **aviso** (*alert*), como «Revisión del agitador dentro de 5 días», se tiene en cuenta. En el coche, el testigo de «puerta abierta» es un aviso; el de presión de aceite es una alarma: o paras, o rompes el motor.

Tener demasiadas alarmas es peligroso. Hay tres males típicos:

- **Avalancha de alarmas** (*alarm flood*): tras un fallo entran decenas en pocos segundos y la importante se pierde entre las demás.
- **Alarmas molestas** (*nuisance alarms*): saltan sin que haya nada que hacer, o entran y salen sin parar. Enseñan a no mirar.
- **Alarmas permanentes** (*stale alarms*): llevan días activas y se vuelven parte del paisaje.

El final de ese camino está documentado. La NTP 238 del INSST cita, entre los errores humanos y de organización, la «desconexión de sistemas de seguridad a causa de frecuentes falsas alarmas». Y la NTP 529, al analizar el accidente de Bhopal, recoge entre las deficiencias que la alarma de temperatura del depósito estaba desconectada.

Por eso una alarma que salta sin motivo ni se aguanta ni se apaga: se comunica para que la corrijan.

### Tipos de alarma

| Tipo | Cuándo salta | Ejemplo en R-401 |
|---|---|---|
| Alta y baja (H, L) | La medida cruza un valor fijo | TAH-401 a 65 °C |
| Muy alta y muy baja (HH, LL) | Cruza un segundo valor, más alejado | TAHH-412 a 70 °C, con disparo |
| Desviación (*deviation*) | La medida se aleja de la consigna | ±3 °C sobre la consigna |
| Velocidad de cambio (*rate of change*) | La medida cambia demasiado deprisa | Más de 2 °C/min |
| Discrepancia (*discrepancy*) | Lo ordenado y lo que ocurre no coinciden | Se ordena cerrar XV-411 y no confirma «cerrada» |
| Fallo de instrumento (*bad measurement*) | La señal no es creíble | Sonda con el circuito abierto |

Las H y L avisan pronto, con margen para que actúes. Las HH y LL marcan el punto en que la planta ya no espera al operador.

**Cuenta 1, desviación.** Esta alarma sigue a la consigna. Con consigna de 60 °C y margen de ±3 °C salta a 60 + 3 = **63 °C** por arriba y a 60 − 3 = **57 °C** por abajo. Si la receta cambia la consigna a 40 °C, la misma alarma salta a 43 y a 37 °C sin que nadie toque nada.

**Cuenta 2, velocidad de cambio.** El límite es 2 °C/min. La masa pasa de 58 a 63 °C en 2 minutos: ha subido 5 °C, así que va a 5 / 2 = **2,5 °C/min**. Es más que 2: la alarma salta, aunque 63 °C siga por debajo de la alta de 65 °C. Avisa de una reacción que se acelera antes de que llegue al límite.

**Fallo de instrumento.** La NTP 528 explica que un termopar con el circuito abierto se detecta fácilmente si el instrumento lleva entonces la señal al 0 o al 100 % de la escala. La misma nota avisa de que lo más frecuente es la pérdida gradual de precisión, y esa solo se descubre calibrando o comparando con otro sensor.

### Prioridades
La **prioridad** (*priority*) sale de dos preguntas: qué gravedad tiene lo que pasará si nadie actúa y cuánto tiempo hay para actuar. Tabla de ejemplo (cada planta define la suya):

| Prioridad | Si nadie actúa | Tiempo para actuar | Ejemplo |
|---|---|---|---|
| Baja | Molestia o retraso | Más de 30 min | Filtro F-407 sucio |
| Media | Lote fuera de rango | De 10 a 30 min | TAH-401 |
| Alta | Lote perdido o equipo dañado | Menos de 10 min | Velocidad de cambio en la adición |
| Crítica | Daño a personas o al entorno | Inmediato | TAHH-412, PAHH-402 |

Se atiende primero la de mayor prioridad, no la más reciente. Si casi todas fueran críticas, la prioridad no serviría.

### La vida de una alarma en pantalla

| Estado | Qué significa |
|---|---|
| Normal | No hay alarma |
| Activa sin reconocer | El problema está ahí y nadie ha dicho «la he visto»; suena |
| Activa reconocida | Alguien la ha visto; el problema sigue |
| Vuelta a normal sin reconocer | El problema se fue solo, pero nadie lo ha visto |

El último estado te dice que pasó algo mientras no mirabas: no se borra sin averiguar qué fue. Colores y parpadeos cambian de un sistema a otro.

Cuatro botones que no hacen lo mismo:

- **Silenciar** (*silence*): calla la bocina. Nada más.
- **Reconocer** (*acknowledge*): le dices al sistema «la he visto». **Reconocer no es resolver.**
- **Inhibir temporalmente** (*shelve*): sacar una alarma de la lista un tiempo, con motivo y temporizador.
- **Fuera de servicio** (*out of service*): alarma anulada por mantenimiento, con el instrumento en reparación.

Las dos últimas quitan una capa de protección. Por eso exigen autorización, motivo escrito, plazo y registro, y se repasan en cada relevo. El anexo 1 de las normas GMP europeas dice de la señal de aviso de presión diferencial de una sala que no debe anularse sin una evaluación.

**Banda muerta y retardo.** Si la medida oscila justo en el límite, la alarma entra y sale sin parar. Es el **traqueteo** (*chattering*). Tiene dos remedios:

- **Banda muerta** o histéresis (*deadband, hysteresis*): la alarma entra en un valor y no se retira hasta que la medida se aleja un poco más. **Cuenta 3.** Alarma alta en 65 °C con banda muerta de 1 °C: entra al llegar a 65 y no se retira hasta bajar de 65 − 1 = **64 °C**. Si la temperatura baila entre 64,6 y 65,2 °C, ves una sola alarma en vez de una por vaivén.
- **Retardo** (*on-delay, off-delay*): la condición tiene que durar un tiempo. Con un retardo de 10 s, un pico de 3 s no da alarma. El anexo 1 pide que los retardos se evalúen y se justifiquen.

Ninguno de estos ajustes lo toca el operador.

### Qué haces ante una alarma
1. **Mira**: qué alarma es, de qué equipo y con qué prioridad.
2. **Entiende**: abre la tendencia. ¿Sube deprisa o despacio?
3. **Comprueba con otro instrumento**: otra sonda, el termómetro local. Mientras no se demuestre que es el instrumento, se trata como real.
4. **Actúa** según la respuesta definida para esa alarma.
5. **Avisa** al responsable de turno.
6. **Anota**: hora, valor, qué hiciste y cuándo volvió a normal.

La respuesta a cada alarma tiene que estar **escrita**; el anexo 1 lo pide para esa señal de presión diferencial. Hay un motivo práctico: en un ejercicio de la NTP 328, a que el operario vea la lectura a tiempo y actúe bien se le asigna una probabilidad de fallo de 10⁻¹, una de cada diez, que la nota llama «muy alta».

### Permisivos y disparos
Un **enclavamiento** (*interlock*) es una lógica automática que no espera al operador. Hay dos familias:

- **Permisivo** (*permissive*): condición para poder **empezar**. Como el coche automático que no arranca si no pisas el freno.
- **Disparo** (*trip*): acción automática cuando se **cruza un límite** con el equipo ya en marcha. Como el diferencial de casa.

Ejemplos típicos (los del reactor van después; los de tu planta están en su documentación):

| Equipo | Permisivo | Disparo |
|---|---|---|
| Centrífuga | No gira con la tapa abierta ni sin inertizar; la tapa no abre hasta que la cesta para | Vibración alta: para |
| Filtro-secador | La descarga no abre con presión dentro | Presión alta: corta el nitrógeno de empuje |
| Secadero | No calienta sin el vacío que pida la receta | Temperatura de producto muy alta: corta la calefacción |

La **matriz de causa y efecto** (*cause and effect matrix*) resume qué causa provoca qué acción. Ejemplo inventado para R-401:

| Causa | Tipo | Efecto automático |
|---|---|---|
| Nivel LI-403 bajo el mínimo de agitación | Permisivo | El agitador M-401 no arranca |
| Oxígeno AI-413 sobre el límite | Permisivo | XV-405 (disolvente) no abre |
| Agitador parado | Permisivo y disparo | XV-411 (adición) no abre o se cierra |
| TALL-401, temperatura muy baja en la adición | Disparo | Cierra XV-411 |
| TAHH-412, temperatura muy alta | Disparo | Cierra XV-411 y el vapor TV-401A; abre el agua TV-401B |
| PAHH-402, presión muy alta | Disparo | Cierra XV-411 y el vapor TV-401A |
| LSHH-403, nivel muy alto | Disparo | Cierra XV-405 y XV-411 |
| Seta HS-400 pulsada | Disparo manual | Lleva todo al estado seguro |

Cada fila tiene su razón. Sin agitación, o con la masa fría, el reactivo se acumula sin reaccionar: por eso se corta la adición. La NTP 527 recomienda detenerla si el agitador falla. Cada disparo deja además una alarma. Después de un disparo no se rearma por cuenta propia: primero la causa, después la autorización.

### Puentear o forzar un enclavamiento
**Puentear** (*bypass*) o **forzar** (*override*) es hacer que la lógica ignore una condición. Es una causa clásica de accidente: la protección molesta, se anula «solo un momento», se olvida, y el día que hace falta no está.

La NTP 529 cuenta un caso. En un reactor de óxido de etileno, el indicador de flujo y su alarma habían sido desconectados. Un día el operario olvidó abrir una válvula manual y nada lo detectó. El reactor explotó, con dos heridos graves. La nota señala la negligencia de tener esa alarma fuera de servicio.

Lo habitual, y lo que concretará tu SOP:

- Lo autoriza por escrito quien diga el procedimiento, nunca el operador solo.
- Lleva una **medida compensatoria** (*compensating measure*): por ejemplo, una persona vigilando esa variable en un instrumento local.
- Tiene tiempo limitado; al retirarlo se comprueba que la protección vuelve a funcionar.
- Queda registrado y se traspasa en el relevo.

Tú nunca lo haces por tu cuenta: ni con un cable, ni desde la pantalla.

### Las capas de protección
De dentro afuera:

1. **Diseño del proceso**: por ejemplo, añadir el reactivo poco a poco.
2. **Control básico**: los lazos que mantienen la consigna.
3. **Alarmas con respuesta del operador.**
4. **Sistema instrumentado de seguridad**: los disparos automáticos.
5. **Alivio**: válvula de seguridad y disco de ruptura.
6. **Contención**: cubeto, depósito de recogida.
7. **Plan de emergencia.**

Suele explicarse con lonchas de **queso suizo**: cada capa tiene agujeros, y el accidente pasa cuando se alinean. La NTP 1066 lo dice sin queso: siempre existe la posibilidad de que fallen a la vez todas las capas. Por eso no se regala ninguna.

**Cuenta 4.** La NTP 328 recuerda la regla: si hace falta que fallen varias cosas a la vez, la probabilidad es el producto. Supón que el operador falla una de cada diez veces (0,1) y el disparo automático una de cada cien (0,01). Que fallen los dos: 0,1 × 0,01 = **0,001**, una de cada mil. Solo vale si las capas son independientes: si comparten sensor, una avería tumba las dos. El estudio que hace estas cuentas en serio se llama **análisis de capas de protección** (*layer of protection analysis, LOPA*).

### SIS, SIF y SIL
El **sistema instrumentado de seguridad** (*safety instrumented system, SIS*) es el conjunto de sensores, lógica y válvulas dedicado solo a proteger. Cada tarea concreta que hace es una **función instrumentada de seguridad** (*safety instrumented function, SIF*). Ejemplo: «si la temperatura es muy alta, cerrar la adición». Tiene tres piezas: un **sensor** (TT-412), una **lógica** (*logic solver*) y un **elemento final** (*final element*), la válvula XV-411.

¿Por qué separado del control básico? Porque si el sensor que controla es el mismo que protege, su avería provoca el problema y a la vez ciega la protección. La NTP 527 recomienda instrumentos de temperatura independientes y redundantes. La NTP 509 añade que los sensores esenciales se pueden triplicar y decidir por votación de dos de cada tres: un sensor averiado ni dispara en falso ni ciega la función.

La **probabilidad de fallo en demanda** (*probability of failure on demand, PFD*) es la fracción de veces que la función falla cuando se la necesita. La NTP 417 la llama indisponibilidad por demanda: fallos divididos entre demandas. Su inverso es el **factor de reducción del riesgo** (*risk reduction factor*):

Factor de reducción = 1 / PFD

- PFD = 0,1: 1 / 0,1 = **10**.
- PFD = 0,01: 1 / 0,01 = **100**. Falla una de cada 100 veces y corta las otras 99: el accidente es 100 veces menos frecuente.
- PFD = 0,005: 1 / 0,005 = **200**.

El **nivel de integridad de la seguridad** (*safety integrity level, SIL*) clasifica las funciones en cuatro escalones, del 1 al 4: cuanto más alto, menor es la PFD que se exige. La tabla exacta está en normas de pago (IEC 61508 e IEC 61511) y ningún documento gratuito consultado la reproduce, así que aquí no se da. El SIL lo fija ingeniería; tu parte es no degradarlo.

### Fallo oculto y pruebas periódicas
Un lazo de control averiado se nota enseguida. Una protección, no: pasa la vida esperando. La NTP 417 lo llama **fallo en espera** y pone de ejemplo las válvulas de seguridad y las alarmas: se estropean por corrosión, suciedad o envejecimiento. Es un **fallo oculto** (*hidden failure*): solo se descubre probando, o el día que hace falta.

La **prueba periódica** (*proof test*) simula la condición y comprueba la cadena entera: el sensor lo ve, la lógica decide, la válvula se mueve de verdad. La NTP 509 lo aplica a las válvulas de seguridad, que pueden pegarse por los sedimentos del proceso: su fiabilidad mejora con pruebas e inspecciones periódicas.

Durante una prueba la protección puede estar anulada: va con su permiso y su medida compensatoria. Si la prueba falla, no se arranca.

### Dispositivos de alivio
El disco de ruptura y la válvula de seguridad están explicados en «El reactor a fondo». Son mecánicos: no miden ni regulan. **No son sistemas de control** y no se cuenta con ellos para trabajar. Descargan por una línea propia hacia un lugar seguro; en R-401, al depósito TK-490. La NTP 342 pide una descarga segura, donde no cause riesgos, y evitar toda válvula de cierre entre el equipo y su válvula de seguridad. Si un alivio actúa, es que todas las capas anteriores han fallado: se para, se avisa y se abre desviación.

### Parada de emergencia y fallo de servicios
La **seta de emergencia** (*emergency stop*) es el pulsador rojo sobre fondo amarillo. Según la NTP 86 queda enclavada al pulsarla. El Real Decreto 1644/2008 pide que pare el proceso peligroso en el menor tiempo posible **sin crear nuevos riesgos**, que al desbloquearla la máquina no rearranque sola, y que sirva para apoyar otras protecciones, no para sustituirlas.

Lo que no hace: no apaga un fuego, no vacía el equipo y no frena una reacción ya lanzada; solo deja de alimentarla.

Parar no es apagarlo todo. Cada equipo va a su **estado seguro** (*safe state*). Ejemplo para R-401:

| Elemento | Estado seguro | Por qué |
|---|---|---|
| XV-411, adición | Cerrada | No entra más reactivo |
| TV-401A, vapor | Cerrada | No entra más calor |
| TV-401B, agua | Abierta | Se sigue enfriando |
| Agitador M-401 | En marcha | Sin agitación la camisa no enfría la masa |
| PV-402, venteo al lavador | Abierta | No se encierra presión |

Es un ejemplo: en otra instalación la seta puede parar también el agitador. La NTP 86 ya advertía de que una parada de emergencia puede dejar en marcha circuitos cuya interrupción crearía un peligro, como la refrigeración.

Los servicios también fallan. La NTP 238 lista el corte eléctrico, la falta de nitrógeno y la de aire comprimido de instrumentación.

- Sin **electricidad** paran agitador y bombas.
- Sin **nitrógeno** se pierde la inertización: no se carga ni se abre.
- Sin **frío** no se puede retirar calor: adición cortada.
- Sin **aire de instrumentos** las válvulas neumáticas se van solas a su posición de fallo.

Sin aire, el muelle de una válvula neumática la deja **cerrada al fallo** (*fail closed*) o **abierta al fallo** (*fail open*). En R-401 el vapor cierra y el agua abre.

Al volver el servicio no se rearranca a ciegas: según la NTP 527, una masa sin agitar puede separarse en capas que reaccionan rápida y peligrosamente al restablecer la agitación.

### Alarmas en un entorno GMP
Algunas alarmas protegen el producto: la temperatura de una reacción, la de una cámara, la presión diferencial de una sala.

- La guía **ICH Q7** no usa la palabra alarma, pero pide que el registro del lote incluya los resultados reales de los parámetros críticos y toda desviación observada (6.52), que toda desviación se documente y se explique, y la crítica se investigue (8.15), y que los incidentes de los sistemas informatizados que puedan afectar a la calidad se registren e investiguen (5.46).
- El **anexo 11** pide que todos los incidentes se comuniquen y se evalúen (punto 13).
- El **anexo 1**, para estériles, muestra el criterio: las alarmas se reconocen y se evalúan por tendencias, y las críticas se revisan de inmediato (5.2).

¿Cuándo lleva una alarma a una desviación? Cuando el parámetro salió del rango de la hoja, o cuando no puedes demostrar que estuvo dentro, como con un fallo de sonda en un paso crítico. Lo decide la unidad de calidad; tu parte es que quede anotado.

### Qué vigila, qué anota y qué no hace nunca el operador
**Vigila**: al empezar el turno, qué hay activo, inhibido o puenteado; las tendencias; que los instrumentos coincidan.

**Anota**: hora, etiqueta, valor, acción, a quién avisó y hora de vuelta a normal; todo disparo; todo puente, con su permiso.

**Nunca**: reconocer sin mirar; silenciar y olvidar; puentear o forzar; cambiar un límite; rearmar un disparo sin conocer la causa; cerrar una válvula en el camino de un alivio; callarse una alarma.

En planta manda siempre el procedimiento vigente (SOP): los límites, las prioridades y las respuestas son los de tu instalación, no los de estos ejemplos.
`,
  plant: `
Turno de noche. Estás en la adición del reactivo B sobre el intermedio ficticio LK-31 en el reactor R-401. La hoja dice: *«Adicionar 400 kg de reactivo B en no menos de 90 min, con la masa entre 57 y 63 °C. Consigna 60 °C.»* Todos los valores son de ejemplo.

A las 02:10 la masa está a 60,5 °C. A las 02:14 salta una alarma de prioridad alta: velocidad de cambio en TIC-401. Abres la tendencia: de 60,5 a 62,9 °C en un minuto. La alarma de desviación (63 °C) aún no ha saltado.

Miras la segunda sonda, la TT-412: marca 63,1 °C. Coinciden, así que no es el instrumento. Es real.

La respuesta escrita de esa alarma dice: cerrar la adición, comprobar la refrigeración, avisar. Cierras XV-411. En pantalla, la válvula de agua TV-401B está al 100 %, pero el caudal de agua es bajo. Llamas a la jefa de turno.

La temperatura sigue subiendo unos minutos, porque queda reactivo sin reaccionar. Entran la desviación a 63 °C y la alta a 65 °C. Reconoces cada una; siguen activas. A 66,8 °C la curva se dobla y empieza a bajar. No ha llegado a los 70 °C del disparo TAHH-412.

Mantenimiento encuentra un filtro obstruido en la línea de agua. Nadie reanuda la adición hasta que la temperatura vuelve al rango, la causa está corregida y la jefa de turno lo autoriza por escrito.

Anotas las horas y los valores reales, y se abre una desviación: la masa ha estado fuera del rango de la hoja.

En ningún momento has cambiado un límite ni has inhibido una alarma para que dejara de sonar.
`,
  batchRecord: `
En la hoja de producción (*batch record*) y en sus anexos verás:

- **Parámetros críticos con su rango**: por ejemplo, temperatura de adición entre 57 y 63 °C. Tú anotas el valor real, con hora y firma.
- **Alarmas del lote**: muchas plantas adjuntan o revisan el listado de alarmas y eventos del sistema de control. De cada alarma relevante anotas hora de entrada, etiqueta (TAH-401), valor alcanzado, acción tomada, a quién avisaste y hora de vuelta a normal.
- **Disparos**: qué enclavamiento actuó, qué dejó cerrado o parado, causa encontrada y quién autorizó el rearme.
- **Puentes e inhibiciones**: número de permiso, motivo, medida compensatoria, hora de inicio y de retirada, y la comprobación posterior.
- **Comprobaciones previas**: en algunos procesos, la hoja pide confirmar antes de empezar que los enclavamientos están en servicio y que no hay puentes activos.
- **Desviación**: si un parámetro salió del rango, o no se puede demostrar que estuvo dentro, la referencia de la desviación abierta.
- **Relevo**: alarmas activas, inhibidas y puentes vigentes al cambiar de turno.

Se anota lo que pasó, no lo que debería haber pasado. Una alarma que no consta en la hoja pero sí en el registro del sistema es un problema de integridad de datos.
`,
  terms: [
    { es: "Alarma", en: "Alarm", def: "Señal de que algo se ha salido de lo normal y exige una acción del operador en un tiempo limitado." },
    { es: "Avalancha de alarmas", en: "Alarm flood", def: "Entrada de muchas alarmas en muy poco tiempo, de modo que la importante se pierde entre las demás." },
    { es: "Alarma de desviación", en: "Deviation alarm", def: "Alarma que salta cuando la medida se aleja de la consigna más de un margen; se mueve con la consigna." },
    { es: "Alarma de velocidad de cambio", en: "Rate-of-change alarm", def: "Alarma que salta cuando la medida sube o baja más deprisa de lo permitido." },
    { es: "Reconocer", en: "Acknowledge", def: "Indicar al sistema que has visto la alarma. No la resuelve ni la quita si la causa sigue." },
    { es: "Inhibir temporalmente", en: "Shelve", def: "Sacar una alarma de la lista durante un tiempo, con motivo, plazo y registro. Exige autorización." },
    { es: "Banda muerta", en: "Deadband (hysteresis)", def: "Margen que la medida debe recorrer de vuelta para que la alarma se retire; evita que entre y salga sin parar." },
    { es: "Permisivo", en: "Permissive", def: "Condición que debe cumplirse para que una orden de arranque o apertura tenga efecto." },
    { es: "Disparo", en: "Trip", def: "Acción automática de un enclavamiento cuando una variable cruza su límite con el equipo en marcha." },
    { es: "Matriz de causa y efecto", en: "Cause and effect matrix", def: "Tabla que indica qué causa provoca qué acción automática en cada equipo." },
    { es: "Puente", en: "Bypass (override)", def: "Anulación temporal de un enclavamiento. Solo con autorización escrita, plazo y medida compensatoria." },
    { es: "Función instrumentada de seguridad", en: "Safety instrumented function (SIF)", def: "Protección automática formada por sensor, lógica y elemento final, separada del control básico." },
    { es: "Probabilidad de fallo en demanda", en: "Probability of failure on demand (PFD)", def: "Fracción de las veces que una protección no actúa cuando se la necesita. Su inverso es el factor de reducción del riesgo." },
    { es: "Prueba periódica", en: "Proof test", def: "Comprobación programada de que una protección funciona de principio a fin, para descubrir fallos ocultos." },
  ],
  quiz: [
    {
      kind: "number",
      q: "La consigna de temperatura de un reactor es 70 °C y la alarma de desviación está ajustada en ±4 °C. ¿A qué temperatura salta la alarma de desviación alta?",
      answer: 74,
      tolerance: 0.005,
      unit: "°C",
      explain: "La alarma de desviación sigue a la consigna: 70 + 4 = 74 °C por arriba (y 70 − 4 = 66 °C por abajo).",
    },
    {
      kind: "number",
      q: "La temperatura de la masa pasa de 52 °C a 61 °C en 3 minutos. ¿A qué velocidad está subiendo? (La alarma de velocidad de cambio está en 2 °C/min, así que piensa también si salta.)",
      answer: 3,
      tolerance: 0.01,
      unit: "°C/min",
      explain: "Ha subido 61 − 52 = 9 °C en 3 minutos: 9 / 3 = 3 °C/min. Es más que 2 °C/min, así que la alarma de velocidad de cambio salta.",
    },
    {
      kind: "number",
      q: "Una alarma de temperatura alta está ajustada en 80 °C con una banda muerta de 1,5 °C. Ya ha saltado. ¿Por debajo de qué temperatura tiene que bajar la masa para que la alarma se retire?",
      answer: 78.5,
      tolerance: 0.005,
      unit: "°C",
      explain: "La alarma entra a 80 °C y no se retira hasta que la medida recorre la banda muerta de vuelta: 80 − 1,5 = 78,5 °C.",
    },
    {
      kind: "number",
      q: "Una función de seguridad tiene una probabilidad de fallo en demanda de 0,004. ¿Cuál es su factor de reducción del riesgo?",
      answer: 250,
      tolerance: 0.01,
      unit: "",
      explain: "Factor de reducción del riesgo = 1 / PFD = 1 / 0,004 = 250: el suceso peligroso es 250 veces menos frecuente que sin esa función.",
    },
    {
      kind: "number",
      q: "Ante una subida de temperatura hay dos capas independientes: el operador, que falla 1 de cada 10 veces (0,1), y un disparo automático, que falla 2 de cada 100 veces (0,02). ¿Cuál es la probabilidad de que fallen las dos a la vez?",
      answer: 0.002,
      tolerance: 0.01,
      unit: "",
      explain: "Si las capas son independientes, la probabilidad de que fallen a la vez es el producto: 0,1 × 0,02 = 0,002, es decir, 2 de cada 1000 veces.",
    },
    {
      kind: "choice",
      q: "Salta la alarma de temperatura alta del reactor. La reconoces y deja de parpadear, pero sigue en la lista con el valor por encima del límite. ¿Qué significa?",
      options: [
        "Que el sistema ya ha corregido la temperatura por su cuenta",
        "Que el problema continúa: falta entender la causa y actuar",
        "Que la alarma era falsa y se puede seguir con la adición",
        "Que hay que inhibirla para que no moleste en la pantalla",
      ],
      answer: 1,
      explain: "Reconocer solo le dice al sistema que la has visto. La alarma sigue activa mientras la causa siga: toca mirar la tendencia, comprobar con otro instrumento, actuar según la respuesta escrita, avisar y anotar.",
    },
    {
      kind: "choice",
      q: "Das la orden de arrancar la centrífuga y no arranca: en pantalla aparece que el oxígeno está por encima del límite. ¿Qué tipo de enclavamiento es y qué haces?",
      options: [
        "Un disparo; se rearma y se vuelve a intentar hasta que arranque",
        "Una alarma molesta; se silencia y se arranca en modo manual",
        "Un fallo de la pantalla; se pide a un compañero que lo fuerce",
        "Un permisivo; se inertiza de nuevo y se mide antes de arrancar",
      ],
      answer: 3,
      explain: "Es un permisivo: una condición para poder empezar. No se fuerza ni se rodea; se cumple la condición (inertizar y medir el oxígeno) y, si no se consigue, se avisa.",
    },
    {
      kind: "choice",
      q: "El enclavamiento de nivel muy alto de un reactor salta en falso por tercera vez en el turno y retrasa la carga. Un compañero propone puentearlo «hasta acabar el lote». ¿Qué corresponde?",
      options: [
        "Parar, avisar y pedir que se revise; un puente solo va con autorización escrita",
        "Puentearlo entre los dos y anotarlo al final del turno en la hoja de relevo",
        "Desconectar el cable del interruptor, que es más rápido que usar la pantalla",
        "Seguir cargando a ojo por la mirilla y reconocer la alarma cada vez que salte",
      ],
      answer: 0,
      explain: "Un enclavamiento que salta en falso se comunica para que lo reparen. Puentear exige autorización escrita de quien diga el procedimiento, tiempo limitado, medida compensatoria y registro: el operador nunca lo hace por su cuenta.",
    },
    {
      kind: "choice",
      q: "Se corta el aire de instrumentos en la planta. La válvula de vapor de la camisa es «cerrada al fallo» y la de agua de refrigeración es «abierta al fallo». ¿Qué ocurre en el reactor?",
      options: [
        "Las dos válvulas se quedan quietas en la posición que tenían antes",
        "Las dos se abren del todo y la camisa recibe vapor y agua a la vez",
        "El vapor se cierra y el agua se abre: el reactor queda enfriando",
        "El vapor se abre y el agua se cierra: el reactor queda calentando",
      ],
      answer: 2,
      explain: "Sin aire, el muelle lleva cada válvula a su posición de fallo: la de vapor cierra y la de agua abre. Por eso esas posiciones se eligen en el diseño: el fallo deja el equipo en su estado seguro.",
    },
    {
      kind: "choice",
      q: "Durante un paso crítico, la sonda de temperatura da alarma de fallo de instrumento y durante 20 minutos no hay lectura fiable. Después la sonda vuelve y marca un valor dentro del rango. ¿Qué haces?",
      options: [
        "Nada: la temperatura final está en rango y el lote es conforme",
        "Rellenar los 20 minutos con el último valor bueno que se conocía",
        "Borrar la alarma del registro, porque fue un fallo del instrumento",
        "Anotarlo y avisar: no se puede demostrar el rango y puede ser desviación",
      ],
      answer: 3,
      explain: "Si no puedes demostrar que el parámetro crítico estuvo dentro del rango, hay un hueco en los datos. Se anota lo ocurrido con sus horas, se avisa y la unidad de calidad decide si es desviación. Nunca se rellenan ni se borran datos.",
    },
  ],
};
