import type { Lesson } from "./types";

export const turnoYFactorHumanoAFondo: Lesson = {
  slug: "turno-y-factor-humano-a-fondo",
  level: 16,
  order: 4.5,
  title: "El turno y el factor humano a fondo: relevo, comunicación y cómo se evitan los errores",
  titleEn: "Shift work and human factors in depth",
  minutes: 38,
  summary:
    "Qué es el trabajo a turnos y qué dice la ley, cómo se hace un relevo que se comprueba contra el registro, los tipos de error humano según el INSST, las barreras que los frenan, la fatiga de la noche, la formación GMP y por qué avisar pronto de un error propio es lo correcto.",
  body: `
Una planta de principios activos no se apaga a las seis de la tarde. Cada pocas horas un equipo entrega la planta a otro. En ese momento, y de madrugada, es más fácil equivocarse. Esta lección explica por qué y cómo se evita.

### Qué es un turno y por qué la planta no para
Muchos pasos de un lote no se pueden dejar a medias: un enfriamiento lento para que crezcan los cristales dura horas y un secado de vacío sigue de noche. Parar a mitad puede estropear el lote o dejar un equipo en un estado inseguro. Por eso se suceden varios equipos de personas en el mismo puesto.

La nota técnica de prevención (NTP) 455 del Instituto Nacional de Seguridad y Salud en el Trabajo (INSST) llama **trabajo a turnos** (*shift work*) al que hacen grupos sucesivos, cada uno con su jornada, para cubrir entre 16 y 24 horas al día. Distingue tres formas:

| Sistema | Cómo es | Turnos |
|---|---|---|
| Discontinuo | Se para por la noche y el fin de semana | Mañana y tarde |
| Semicontinuo | Se para una vez por semana | Mañana, tarde y noche, con descanso el domingo |
| Continuo | No se para nunca: todo el día, todos los días | Más de tres turnos, con noche |

Una planta química de proceso continuo suele trabajar en el último. Las horas exactas de tus turnos las fija tu empresa.

### Lo que dice la ley
El Estatuto de los Trabajadores (texto refundido de 2015, publicado en el Boletín Oficial del Estado, BOE) define los conceptos y pone límites. Lo que más te afecta:

| Artículo | Qué dice |
|---|---|
| 36.1 | **Trabajo nocturno** (*night work*) es el que se hace entre las diez de la noche y las seis de la mañana |
| 36.1 | **Trabajador nocturno** es quien hace normalmente al menos tres horas de su jornada diaria en ese periodo, o al menos un tercio de su jornada anual |
| 36.1 | El trabajador nocturno no pasa de ocho horas diarias de promedio en quince días y no puede hacer horas extraordinarias |
| 36.3 | Trabajo a turnos: los trabajadores ocupan sucesivamente los mismos puestos según un ritmo, y trabajan a horas distintas según los días o semanas |
| 36.3 | En procesos continuos de 24 horas, nadie está en el turno de noche más de dos semanas seguidas, salvo que lo pida voluntariamente |
| 34.3 | Entre el final de una jornada y el comienzo de la siguiente hay como mínimo doce horas |
| 34.4 | Si la jornada continuada pasa de seis horas, hay un descanso de al menos quince minutos |

Hay excepciones para jornadas especiales y lo que pacte el convenio. Para tu caso, pregunta a recursos humanos.

### El relevo: el momento más delicado
El **relevo de turno** (*shift handover*) es la entrega de la planta de un turno al siguiente. La NTP 455 avisa de que en el cambio de turno las consignas pueden no transmitirse con precisión y que, con la prisa por marcharse, el turno que sale puede no comunicar incidencias o datos necesarios. Esa falta de comunicación puede dar origen a errores o incidentes.

Piensa en una carrera de relevos: el peligro de que caiga el testigo está en la zona de entrega, no en mitad de la recta.

Qué se transmite en un relevo:

| Qué | Ejemplo |
|---|---|
| Estado de cada equipo y de cada lote | «R-204 a reflujo desde las 03:10; lote 26-0418 en el paso 7» |
| Lo que quedó a medias | «Falta el segundo lavado de la torta en la C-201» |
| Incidencias y desviaciones abiertas | «Abierta la incidencia del control en proceso de las 02:00; calidad avisada» |
| Permisos de trabajo en vigor | «Mantenimiento en la bomba P-207 con permiso; consignada» |
| Alarmas inhibidas y equipos fuera de servicio | «Alarma de vibración de la C-202 inhibida hasta las 08:00, con autorización» |
| Muestras, materiales y avisos | «Muestra enviada al laboratorio; falta el resultado» |

Dos de estas filas tienen su propia lección. Los permisos de trabajo no pasan de un turno a otro sin más: según la NTP 562, que se explica en «Permisos de trabajo, consignación y espacios confinados a fondo», un permiso no supera el turno, y si el trabajo sigue se renueva con sus comprobaciones. Y las alarmas inhibidas o fuera de servicio quitan una capa de protección, por eso se repasan en cada relevo («Alarmas, enclavamientos y sistemas de seguridad a fondo»).

### De palabra y por escrito
Un buen relevo se hace de las dos maneras, y cada una cubre lo que la otra no:

- **De palabra, cara a cara.** Puedes preguntar en el momento: «¿cuántos litros?», «¿quién lo autorizó?».
- **Por escrito.** No depende de la memoria y se puede releer a las cuatro de la mañana. Cumple además lo que pide ICH Q7, la guía internacional de buenas prácticas para principios activos, en su apartado 2.15: registrar las actividades de calidad en el momento en que se hacen.

Lo hablado sin escribir se pierde. Lo escrito sin hablar se malinterpreta.

### Comprobar contra el registro, no dar por bueno
Una nota de relevo es un resumen hecho al final de un turno largo. No es la prueba. Hay tres fuentes y tienen que cuadrar:

1. **La nota o el parte de relevo**: lo que el compañero dice que ha pasado.
2. **El registro**: la hoja de producción y el registro electrónico del sistema de control.
3. **La planta**: lo que marcan los instrumentos y lo que ves con tus ojos en la ronda (válvulas, etiquetas, candados, niveles).

Si la nota dice «dos lavados hechos» y el totalizador del agua de lavado marca la mitad, no hay dos lavados. Manda lo que dicen el registro y los instrumentos. Es la idea del modo relevo del simulador del filtro-secador Nutsche de esta app.

Si algo no cuadra:

1. **Pon el equipo en un estado seguro** si hace falta (cerrar una válvula que no debería estar abierta, no arrancar).
2. **Pregunta** al compañero que sale, si sigue en la planta.
3. **Avisa al responsable de turno**: una discrepancia en el relevo es una incidencia.
4. **Anota** lo que has encontrado, con hora y firma, y sigue la hoja.

### Comunicación clara
Algunas costumbres que evitan malentendidos. Son prácticas de comunicación, no requisitos escritos en las guías leídas para esta lección:

- **Repite lo que has recibido.** «Entonces: C-201 con un solo lavado hecho, falta el segundo de 60 L». Si el otro te corrige, el error se ha quedado en la conversación.
- **Pregunta lo que no esté claro.** Preguntar no es desconfiar: es tu trabajo.
- **Números con unidad y códigos completos.** «La válvula de abajo» no vale; «XV-203 cerrada» sí.
- **Una sola fuente escrita.** Si el relevo está en libreta, en papel suelto y en el móvil, alguien leerá la versión vieja. Se usa el soporte que fije el procedimiento.
- **Fuera el «todo bien».** No se puede comprobar. Mejor el estado concreto de cada equipo.

### Qué es un error humano
La NTP 360 del INSST define el **error humano** (*human error*) como el comportamiento de una persona que excede el límite de tolerancia definido para la seguridad de un sistema. Y añade dos ideas importantes:

- **El error no tiene sentido de culpa.** Buscar culpables no sirve para encontrar las causas de los accidentes e incidentes.
- **La persona también arregla cosas.** Es capaz de anticipar, confirmar y recuperar fallos técnicos y errores propios y ajenos. En el relevo, tú eres la persona que detecta lo que el turno anterior no vio.

### Los tipos de error
No todos los errores son iguales, y cada tipo se frena con barreras distintas. La NTP 360 recoge varias clasificaciones. La más útil para ti es la de Norman, que distingue dos tipos, y aparte las transgresiones deliberadas:

| Tipo | Qué pasa | Ejemplo de planta | Qué lo frena |
|---|---|---|---|
| **Desliz** (*slip*), el despiste | Sabes lo que hay que hacer, pero la acción sale distinta de la que querías | Abres la XV-203 en vez de la XV-205, que está al lado | Etiquetas claras, válvulas bien separadas, segunda verificación |
| **Olvido** | Una acción prevista no se activa: te saltas un paso | No pones a cero el totalizador antes del lavado | Listas de comprobación, la hoja paso a paso |
| **Equivocación** (*mistake*), el error de conocimiento | Haces lo que querías, pero lo que querías estaba mal | Lees «200 mbar de vacío» como 200 mbar por debajo del ambiente | Formación, procedimientos claros, preguntar |
| **Transgresión deliberada** (*violation*) | Te saltas la norma a sabiendas, sin querer hacer daño | Arrancar la centrífuga sin la tapa bien cerrada «para ganar tiempo» | Supervisión, cultura, entender el porqué de la norma |

Dos matices. La NTP 360 deja las transgresiones fuera de su definición de error y dice que no son necesariamente censurables; cuando lo que se hace se aparta de lo escrito, a menudo indica que la instrucción no funciona en la práctica. Y en la lista de Norman el olvido va dentro de los deslices, como «pérdida o falta de activación»; aquí lo separamos porque en planta es muy frecuente.

La misma nota recoge el modelo de Rasmussen, con tres niveles según lo familiar que sea la tarea: **automatismos**, **reglas o procedimientos** y **conocimientos**. Lo que haces cada día va casi solo; una situación nueva te obliga a razonar desde cero.

### Por qué «error humano» no es una causa raíz
La NTP 360 dice que la etiqueta «error humano» es ambigua y puede ocultar problemas de organización del trabajo o de diseño del sistema. Para cada error hay un desajuste entre la persona y su puesto.

Las normas europeas de buenas prácticas de fabricación (*Good Manufacturing Practice*, GMP) lo convierten en regla. El capítulo 1 de EudraLex, volumen 4 (apartado 1.4, punto xiv), pide que, cuando se sospeche o concluya que la causa es un error humano, se justifique tras comprobar que no se ha pasado por alto un fallo del proceso, del procedimiento o del sistema. En la lección «Desviaciones y CAPA a fondo» tienes un caso resuelto con los cinco porqués y el diagrama de Ishikawa.

Si la conclusión de una investigación es «el operador se equivocó; se le vuelve a formar», falta la pregunta de fondo: ¿por qué a una persona formada le resultó fácil equivocarse?

### Las barreras que ayudan
La NTP 360 pide diseñar **sistemas tolerantes al error**: que, cuando alguien se equivoque, el error sea detectable y se pueda recuperar antes de que tenga consecuencias. Una barrera es cualquier cosa que impide el error o lo atrapa a tiempo.

| Barrera | Contra qué tipo de error | De dónde sale |
|---|---|---|
| Procedimiento claro, en lenguaje inequívoco y pensado para tu instalación | Equivocación, olvido | EudraLex cap. 1, 1.8 (iv) |
| Lista de comprobación | Olvido | Ejemplo: la del permiso de trabajo de la NTP 562 |
| Segunda persona que presencia o comprueba los pasos críticos | Desliz, olvido | ICH Q7, 6.52, 8.12 y 8.13 |
| Comprobación extra de los datos críticos tecleados a mano, por otra persona o por el sistema | Desliz | ICH Q7, 5.45 |
| Equipo identificado con su contenido y su estado de limpieza | Desliz, equivocación | ICH Q7, 5.26 |
| Pantallas que destacan lo importante y alarmas | Desliz, olvido | NTP 360 (priorizar señales); NTP 619 (las alarmas como medio de recuperación) |
| Relevo cara a cara y comprobado | Todos | NTP 455 |

La NTP 619 cita entre los factores que influyen en el error las distracciones, las interrupciones, el calor, el ruido y la organización de los turnos; y entre los de recuperación, la redundancia de personas y las alarmas. El entorno y los compañeros también son barreras.

Qué hace la segunda firma y qué no, lo tienes en «La hoja de producción a fondo». Una barrera que se firma sin mirar ya no es una barrera.

### La fatiga y el trabajo nocturno
La NTP 445 define la **fatiga mental** (*mental fatigue*) como una disminución temporal de la eficiencia mental y física, que depende de la intensidad y la duración de la actividad anterior. Se nota, entre otras cosas, en los errores: alguien fatigado puede trabajar como un inexperto sin notar que rinde menos. Describe también los **lapsus**: bloqueos breves de la atención que aparecen cuando una tarea exige vigilancia mucho tiempo seguido.

La NTP 455 explica qué hace la noche:

- **El cuerpo tiene un reloj de 24 horas** (los ritmos circadianos). Su temperatura baja hasta un mínimo de 35,5 a 36 °C entre las 2 y las 3 de la madrugada. Por muchas noches seguidas, la adaptación nunca es completa.
- **El sueño de día repara peor.** Con luz y ruido se reduce el sueño profundo, y la fatiga se acumula hasta poder volverse crónica.
- **El rendimiento baja de noche,** sobre todo entre las 3 y las 6 de la madrugada: menos atención, peor toma de decisiones y movimientos más lentos y menos precisos.
- **Los turnos de 12 horas** no son muy recomendables por la fatiga que suponen.

Medidas que propone la NTP 455, unas para la empresa y otras para ti:

| Para la organización | Para ti |
|---|---|
| Dejar para la madrugada solo las tareas imprescindibles y evitar las que exigen mucha atención entre las 3 y las 6 | Dormir en un sitio oscuro y silencioso |
| Turnos de noche y de tarde nunca más largos que los de mañana | Mantener un horario regular de comidas |
| Calendario de turnos conocido con antelación | No tomar comidas pesadas antes de acostarte |
| Comida caliente y equilibrada, y tiempo para comerla | Evitar alcohol, cafeína y estimulantes dos o tres horas antes de dormir |
| Vigilancia de la salud | Hacer ejercicio con regularidad |

En tu turno de noche: de madrugada lee dos veces cada número antes de anotarlo, pide la segunda verificación aunque tengas prisa y, si no estás en condiciones, dilo a tu responsable. No es debilidad: es información para organizar el turno.

### Formación GMP y cualificación del operador
La GMP europea empieza su capítulo 2, sobre el personal, con esta idea: fabricar bien un medicamento depende de las personas. Ese capítulo es para fabricantes de medicamentos; en principios activos la guía es ICH Q7, pero los dos dicen lo mismo en lo esencial.

| Qué se pide | EudraLex cap. 2 | ICH Q7 cap. 3 |
|---|---|---|
| Personal suficiente y cualificado por estudios, formación o experiencia | 2.1 | 3.10 |
| Responsabilidades por escrito | Principio y 2.3 | 3.11 |
| Formación para todo el que entra en producción, almacén o laboratorio, incluidos mantenimiento y limpieza | 2.10 | No lo detalla |
| Formación básica en GMP más la de las tareas asignadas, y formación continuada | 2.11 | 3.12 |
| Comprobar periódicamente que la formación funciona | 2.11 (eficacia práctica) | 3.12 |
| Registros de formación | 2.11 | 3.12 |

Por eso firmas la formación de cada procedimiento antes de hacer la tarea. La firma deja constancia de que te han formado en esa operación y en esa versión. Si una investigación pregunta si estabas cualificado para ese paso, la respuesta está en tu registro de formación, no en tu memoria. Sin formación registrada trabajas fuera del sistema, aunque lo hagas bien.

Cuando un procedimiento cambia de versión, lo habitual es formarse en lo que cambia antes de aplicarlo. Cómo se organiza lo decide tu empresa.

Sobre la higiene, el capítulo 2 pide además que el fabricante tenga instrucciones para que llegue a su conocimiento cualquier problema de salud que pueda afectar a la calidad del producto (2.16). Lo que pide ICH Q7 sobre higiene lo tienes en «El sistema de calidad a fondo».

### Cultura de calidad: hablar claro
A las cinco de la madrugada te das cuenta de que cargaste el lavado sin poner a cero el totalizador. Puedes callar o avisar ya.

Avisar ya es lo correcto, y no solo por honradez:

- **Con aviso temprano aún se puede actuar.** Calidad puede evaluar el lote o repetir una medida. Días después, en la revisión de la hoja, el margen es menor.
- **Las normas lo esperan.** La guía PI 041 sobre integridad de datos de la PIC/S (*Pharmaceutical Inspection Co-operation Scheme*, la red de cooperación entre inspecciones de medicamentos) pide a la dirección un ambiente de trabajo transparente y abierto, en el que se anime al personal a comunicar libremente fallos y errores para poder tomar acciones correctivas y preventivas. El capítulo 2 de EudraLex (2.9, xiii) pide un proceso de comunicación y escalado a tiempo de los problemas de calidad.
- **Tu error enseña.** Si el totalizador se olvida con facilidad, otro operador lo olvidará también. Tu aviso puede acabar en un cambio de la hoja.

La misma guía PIC/S distingue culturas abiertas, donde informar de un fallo es lo esperado, y cerradas, donde cuesta decir que algo ha ido mal. En una cultura cerrada los errores no desaparecen: solo dejan de verse.

### Tu relevo, en resumen
Llega con tiempo; escucha y lee; repite y pregunta; contrasta equipo por equipo con la hoja, el sistema de control y la planta; repasa permisos, alarmas inhibidas y equipos fuera de servicio; y firma que recibes el turno solo cuando sepas en qué estado está todo.

Los ejemplos y prácticas de esta lección sirven para entender. En planta manda siempre el procedimiento vigente (SOP): el formato del parte de relevo, quién firma, qué se revisa y cómo se comunica una discrepancia los fija tu empresa.
`,
  plant: `
Son las 05:50. Llegas al turno de mañana. Tu compañero del turno de noche te entrega la centrífuga C-201 con el lote ficticio FX-101, número 26-0418. Su parte de relevo dice: *«C-201: 2.ª carga centrifugada, 2 lavados de 60 L de agua fría hechos. Falta centrifugar en seco y descargar. Alarma de vibración de la C-201 inhibida: mantenimiento ha cambiado el sensor, todo bien.»* (Los volúmenes son valores de ejemplo.)

Repites en voz alta: «Dos lavados de 60 L, falta el secado en la cesta». Antes de firmar miras el panel. El totalizador de agua de lavado FQ-203, puesto a cero al empezar la carga, marca 60 L. En la hoja hay un solo lavado firmado. La alarma de vibración sigue inhibida, pero en el registro de alarmas inhibidas no hay ninguna entrada para ella y el permiso de mantenimiento de la noche está cerrado.

Dos discrepancias. No arrancas la centrífuga. Preguntas a tu compañero, que aún no se ha ido. Se queda pensando: escribió el parte antes de las cinco, cuando le llamaron del reactor R-204, y no llegó a hacer el segundo lavado. Él mismo lo dice y lo anota.

Avisas a la jefa de turno. Mantenimiento confirma que el sensor nuevo está montado y probado, y quita la inhibición con su registro. La alarma vuelve a estar activa. Haces el segundo lavado según la hoja: el FQ-203 llega a 120 L. Anotas la discrepancia del relevo, con hora, en el apartado de incidencias.

Nadie busca culpables. En la reunión de la semana se propone añadir al parte de relevo una casilla con la lectura de cada totalizador.
`,
  batchRecord: `
En la hoja de producción (*batch record*) y en el parte de relevo verás, y anotarás:

- **Entrega y recepción del turno**: fecha, hora, nombre y firma de quien entrega y de quien recibe, si tu procedimiento lo pide.
- **Estado de cada equipo y lote** al relevo: paso de la hoja en que está, lecturas clave (temperatura, presión, totalizadores) con su unidad.
- **Pasos a medias**: qué falta exactamente, con números («falta el 2.º lavado de 60 L»), no «casi terminado».
- **Incidencias y desviaciones abiertas**: número de referencia y a quién se avisó.
- **Permisos de trabajo en vigor** y equipos consignados o fuera de servicio, con su etiqueta.
- **Alarmas inhibidas o fuera de servicio**: cuál, quién lo autorizó, por qué y hasta cuándo.
- **Discrepancias del relevo**: lo que no cuadraba entre parte, registro y planta, con hora, a quién se avisó y qué se hizo.
- **Firma de cada paso por quien lo hizo**: si un paso lo terminaste tú, lo firmas tú; no firmas lo del turno anterior.
- **Segunda verificación** en los pasos críticos que la hoja marque.

Lo que no se anota en el relevo, para el turno siguiente no ha pasado.
`,
  terms: [
    { es: "Trabajo a turnos", en: "Shift work", def: "Organización en la que grupos sucesivos ocupan el mismo puesto según un ritmo, de modo que cada persona trabaja a horas distintas según los días o semanas." },
    { es: "Trabajo nocturno", en: "Night work", def: "Según el Estatuto de los Trabajadores, el que se hace entre las diez de la noche y las seis de la mañana." },
    { es: "Relevo de turno", en: "Shift handover", def: "Entrega de la planta del turno que sale al que entra: estado de equipos y lotes, pendientes, incidencias, permisos y alarmas inhibidas." },
    { es: "Parte de relevo", en: "Shift log / handover log", def: "Registro escrito del relevo. Se comprueba contra la hoja, el sistema de control y la planta; no sustituye a ninguno." },
    { es: "Error humano", en: "Human error", def: "Comportamiento de una persona que excede el límite de tolerancia definido para la seguridad de un sistema (NTP 360). No implica culpa." },
    { es: "Desliz", en: "Slip", def: "Error de ejecución: la acción que sale no es la que la persona quería hacer, como abrir la válvula de al lado." },
    { es: "Olvido", en: "Lapse / omission", def: "Una acción prevista no se llega a hacer; en la clasificación de Norman, una pérdida o falta de activación." },
    { es: "Equivocación", en: "Mistake", def: "Error en la intención: la acción sale como se quería, pero lo que se quería no era lo correcto. Suele venir de falta de conocimiento." },
    { es: "Transgresión deliberada", en: "Violation", def: "Saltarse una norma a sabiendas, sin intención de hacer daño. La NTP 360 la deja fuera de su definición de error." },
    { es: "Sistema tolerante al error", en: "Error-tolerant system", def: "Sistema diseñado para que un error se detecte y se recupere antes de que tenga consecuencias inaceptables." },
    { es: "Fatiga mental", en: "Mental fatigue", def: "Disminución temporal de la eficiencia mental y física por la intensidad y duración de la actividad anterior (NTP 445)." },
    { es: "Ritmo circadiano", en: "Circadian rhythm", def: "Ciclo de unas 24 horas de las funciones del cuerpo, como la temperatura o el sueño. El turno de noche lo desajusta." },
    { es: "Registro de formación", en: "Training record", def: "Prueba firmada de que una persona ha recibido la formación de una tarea o procedimiento. Lo piden EudraLex (2.11) e ICH Q7 (3.12)." },
    { es: "Cultura de calidad", en: "Quality culture", def: "Ambiente de trabajo abierto en el que se anima a comunicar fallos y errores para poder corregirlos (PIC/S PI 041, 6.3.1)." },
  ],
  quiz: [
    {
      kind: "choice",
      q: "Recibes el turno. El parte dice «2 lavados hechos», pero el totalizador de lavado marca la mitad y la hoja tiene un solo lavado firmado. ¿Qué haces?",
      options: [
        "Sigo el parte, porque lo ha escrito quien hizo el trabajo",
        "Anoto el segundo lavado como hecho para que la hoja cuadre",
        "Me fío del registro y la planta, aviso y hago lo que falta",
        "Espero al turno de noche siguiente para preguntar al compañero",
      ],
      answer: 2,
      explain: "La nota es un resumen; la prueba son el registro y los instrumentos. Una discrepancia en el relevo se avisa, se anota y se sigue la hoja: falta un lavado.",
    },
    {
      kind: "number",
      q: "Un turno va de 20:00 a 04:00. Según el Estatuto de los Trabajadores, ¿cuántas horas de ese turno son trabajo nocturno?",
      answer: 6,
      tolerance: 0.001,
      unit: "h",
      explain: "El trabajo nocturno va de las 22:00 a las 06:00. Dentro del turno quedan de 22:00 a 04:00: 6 horas.",
    },
    {
      kind: "choice",
      q: "Querías abrir la XV-205 y, sin darte cuenta, abres la XV-203, que está al lado. ¿Qué tipo de error es, según la clasificación de Norman de la NTP 360?",
      options: [
        "Un desliz: la acción salió distinta de la que querías hacer",
        "Una equivocación: tu intención de abrir la válvula era errónea",
        "Una transgresión deliberada de la norma de la planta",
        "Un error de demora, porque la válvula se abrió tarde",
      ],
      answer: 0,
      explain: "Sabías qué válvula abrir, pero la acción salió distinta. Es un desliz; se frena con etiquetas claras, buena disposición de las válvulas y segunda verificación.",
    },
    {
      kind: "number",
      q: "Sales de tu turno a las 22:00. Según el Estatuto de los Trabajadores, ¿a qué hora del día siguiente puede empezar, como pronto, tu próxima jornada? (Escribe la hora en número, sin minutos.)",
      answer: 10,
      tolerance: 0.001,
      unit: "h",
      explain: "Entre el final de una jornada y el comienzo de la siguiente median como mínimo doce horas: 22 + 12 = 34, es decir, las 10 del día siguiente.",
    },
    {
      kind: "choice",
      q: "Una investigación de desviación concluye: «causa raíz: error humano del operador; se le vuelve a formar». ¿Qué le falta?",
      options: [
        "Nada: si la persona se equivocó, esa es la causa raíz",
        "Firmar la conclusión por dos operadores del mismo turno",
        "Añadir una sanción para que el error no se vuelva a repetir",
        "Comprobar que no hay un fallo de proceso, procedimiento o sistema",
      ],
      answer: 3,
      explain: "EudraLex cap. 1 (1.4, xiv) pide justificar el error humano tras comprobar que no se ha pasado por alto un fallo del proceso, del procedimiento o del sistema.",
    },
    {
      kind: "number",
      q: "En el ejemplo de planta cada lavado es de 60 L. Tras recibir el turno haces el lavado que faltaba y el totalizador, puesto a cero al empezar la carga, marca 120 L. ¿Cuántos lavados lleva la torta?",
      answer: 2,
      tolerance: 0.001,
      unit: "lavados",
      explain: "Lavados = 120 / 60 = 2. Antes de tu lavado marcaba 60 L: solo había uno.",
    },
    {
      kind: "choice",
      q: "Mañana empiezas a usar una versión nueva de la SOP de descarga de la centrífuga y aún no te han formado en ella. ¿Qué haces?",
      options: [
        "La uso, porque la versión anterior ya la conocía bien",
        "Pido la formación, la firmo y después hago la tarea",
        "Hago la tarea y firmo la formación al acabar el turno",
        "Le pido a un compañero que firme la formación por mí",
      ],
      answer: 1,
      explain: "ICH Q7 (3.12) y EudraLex (2.11) piden formación en las operaciones que haces y registros de formación. Sin formación registrada en esa versión, no se hace la tarea.",
    },
    {
      kind: "number",
      q: "Tu turno de noche va de 22:00 a 06:00. ¿Cuántas horas de ese turno caen en la franja de 3 a 6 de la madrugada, la de menor rendimiento según la NTP 455?",
      answer: 3,
      tolerance: 0.001,
      unit: "h",
      explain: "De 03:00 a 06:00 hay 3 horas. La NTP 455 aconseja evitar en esa franja las tareas que exigen mucha atención.",
    },
    {
      kind: "choice",
      q: "A las 05:00 te das cuenta de que cargaste un lavado sin poner a cero el totalizador. Nadie lo ha visto. ¿Qué es lo correcto?",
      options: [
        "Callar, porque el lote seguramente seguirá cumpliendo",
        "Corregir la cifra de la hoja para que cuadre con lo previsto",
        "Avisar ya al responsable y dejarlo anotado con hora y firma",
        "Contarlo de palabra en el relevo, sin dejarlo por escrito",
      ],
      answer: 2,
      explain: "Con aviso temprano calidad aún puede evaluar y actuar. La guía PIC/S PI 041 (6.3.1) pide un ambiente que anime a comunicar fallos y errores.",
    },
    {
      kind: "choice",
      q: "En el relevo, la alarma de vibración de una centrífuga aparece inhibida, pero no hay ninguna entrada en el registro de alarmas inhibidas. ¿Qué haces?",
      options: [
        "Aviso al responsable de turno y no arranco hasta aclararlo",
        "La dejo inhibida, porque si alguien la inhibió tendría motivo",
        "Quito la inhibición yo mismo y arranco la centrífuga ya",
        "Lo anoto para comentarlo en la reunión de la próxima semana",
      ],
      answer: 0,
      explain: "Una alarma inhibida quita una capa de protección y debe tener autorización, motivo, plazo y registro. Sin registro es una discrepancia: se avisa antes de arrancar.",
    },
  ],
};
