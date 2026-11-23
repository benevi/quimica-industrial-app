import type { Lesson } from "./types";

export const mantenimientoAFondo: Lesson = {
  slug: "mantenimiento-a-fondo",
  level: 14,
  order: 8,
  title: "Mantenimiento a fondo: entregar un equipo, recibirlo y dejarlo listo para fabricar",
  titleEn: "Maintenance in depth: handing over equipment, taking it back and making it ready for production",
  minutes: 40,
  summary:
    "Tu parte en el mantenimiento: detectar y describir una avería, pedir el trabajo, entregar el equipo limpio y seguro, recibirlo, probar que no fuga, vigilar la etiqueta de estado y la caducidad de la limpieza, y entender los indicadores que oirás en planta.",
  body: `
En la lección anterior viste los tipos de mantenimiento y la orden de trabajo en pocas líneas. Aquí vas a ver tu parte, paso a paso: avisar, entregar el equipo, recibirlo y comprobarlo. Los permisos y la consignación están en «Permisos de trabajo, consignación y espacios confinados a fondo»; la calibración, en «Instrumentos de medida a fondo»; la cualificación, en «Cualificación y validación a fondo». No se repiten aquí.

### Por qué el mantenimiento también es cosa tuya
El mecánico ve el reactor unas horas al año. Tú lo oyes, lo ves, lo hueles y lo tocas cada turno. Eres quien nota que hoy suena distinto que ayer. La NTP 577 del Instituto Nacional de Seguridad y Salud en el Trabajo (INSST) lo dice así: el personal implicado en las tareas suele ser el primero en detectar los fallos, y cualquier trabajador que detecte un defecto o un indicio de avería en los equipos que usa debe comunicarlo de inmediato a su mando directo.

### Los cuatro tipos, con el coche
| Tipo | Con el coche | En planta |
|---|---|---|
| **Correctivo** (*corrective maintenance*) | Se rompe el embrague y lo llevas al taller | Se repara cuando la avería ya se ha producido, para devolver el equipo a su estado normal de servicio |
| **Preventivo** (*preventive maintenance*) | Cambias el aceite cada tantos kilómetros, esté como esté | Intervenciones programadas a intervalos fijos de tiempo o de uso (horas de servicio) |
| **Predictivo** o según condición (*predictive maintenance*) | Miras el desgaste de las pastillas y las cambias cuando toca | Se miden parámetros del equipo (vibración, ruido, temperatura) para intervenir justo antes del fallo |
| **Autónomo** o de primer nivel (*autonomous maintenance*) | Miras tú la presión de las ruedas y el nivel de aceite | Lo que hace el operador: limpiar, inspeccionar, apretar o engrasar lo que el procedimiento le permita, y avisar |

Las tres primeras definiciones son las de la NTP 460. Esta nota añade un caso intermedio: una junta que fuga un poco y se cambia en la siguiente parada programada es un correctivo planificado, no un preventivo, porque nadie tenía previsto cambiarla a intervalos regulares. La NTP 1017, escrita para plantas químico-farmacéuticas, advierte de que el correctivo es el más peligroso: nace de un imprevisto, a menudo sin procedimiento específico y con prisa.

### Qué pide la norma
**ICH Q7**, la guía de buenas prácticas de fabricación (*good manufacturing practice*, GMP) para principios activos, apartado 5.2:

| Apartado | Qué dice |
|---|---|
| 5.20 | Debe haber calendarios y procedimientos de mantenimiento preventivo, con las responsabilidades asignadas |
| 5.21 | Procedimientos escritos para limpiar el equipo y para liberarlo después para fabricar. Deben incluir: quién limpia, cada cuánto, método y materiales, cómo desmontar y montar, cómo quitar la identificación del lote anterior, cómo proteger el equipo limpio hasta su uso, la inspección de limpieza justo antes de usarlo y, cuando proceda, el tiempo máximo entre el fin del proceso y la limpieza |
| 5.22 | Equipos y utensilios se limpian y se guardan de modo que no contaminen ni arrastren material |
| 5.23 | En campañas de lotes seguidos del mismo producto, se limpia a intervalos adecuados para que no se acumulen contaminantes |
| 5.24 | El equipo no dedicado se limpia entre productos distintos |
| 5.25 | Los criterios de aceptación de residuos y la elección de procedimientos y agentes de limpieza se definen y se justifican |
| 5.26 | El equipo debe estar identificado en cuanto a su contenido y su estado de limpieza |

El apartado 6.20 fija el registro: los registros de uso, limpieza y mantenimiento de los equipos principales deben mostrar la fecha, la hora si procede, el producto y el número de lote de cada lote procesado, y la persona que hizo la limpieza y el mantenimiento. El 6.21 permite no llevar un registro individual si el equipo está dedicado a un solo producto y los lotes se siguen en secuencia trazable; en ese caso los datos pueden ir en la hoja de producción (*batch record*) o aparte.

**EU GMP, capítulo 3:** las reparaciones y el mantenimiento no deben suponer ningún peligro para la calidad del producto (3.35). El equipo defectuoso se retira de la zona de producción si es posible o, al menos, se etiqueta claramente como defectuoso (3.44). Las piezas y herramientas que se guarden en producción van en cuartos o armarios reservados para ello (3.32).

**Real Decreto 1215/1997**, de equipos de trabajo:

- **Artículo 3.5:** el empresario debe mantener los equipos según las instrucciones del fabricante. Las operaciones de mantenimiento, reparación o transformación con riesgo específico solo pueden encargarse a personal especialmente capacitado.
- **Anexo II, 1.3 y 1.4:** un equipo no puede usarse sin sus elementos de protección. Antes de usarlo se comprueba que las protecciones y condiciones de uso son las adecuadas. Si hay deterioros o averías que comprometan la seguridad, deja de utilizarse.
- **Anexo II, 1.15:** cuando un equipo deba tener diario de mantenimiento, estará actualizado. La guía técnica del INSST recomienda llevarlo aunque ninguna norma lo exija, porque informa de lo que se hizo antes.

### Señales de aviso, equipo por equipo
| Equipo | Qué notas |
|---|---|
| Reactor | Ruido o vibración nuevos en el agitador; goteo por el cierre mecánico; nivel del líquido de barrera que baja; manchas, desconchones o puntos de óxido en el vitrificado; juntas resecas o deformadas; válvula de fondo que no cierra del todo |
| Centrífuga | Vibración mayor de lo habitual; zumbido o calor en los rodamientos; junta de la tapa dañada; tela rota (líquido filtrado turbio) |
| Filtro-secador | Juntas; placa o tela filtrante dañada (filtrado turbio); fuga por el cierre del agitador |
| Secadero | Junta de la puerta; vacío que tarda más en alcanzarse o que se pierde |
| Bombas | Lo viste en «Bombas a fondo»: fuga por el cierre, ruido, vibración |
| Válvulas y bridas | Goteos, costras de producto seco, volantes duros |
| Instrumentos | Lectura que no cuadra con otra, que salta o que se queda fija |

Describir bien una avería ahorra horas. Cinco datos:

1. **Qué:** el síntoma, sin diagnosticar. «Golpeteo metálico», no «rodamiento roto».
2. **Dónde:** código del equipo y parte exacta.
3. **Cuándo:** hora, y si es continuo o intermitente.
4. **En qué condiciones:** producto, lote, velocidad, temperatura, nivel.
5. **Qué se hizo:** paraste, bajaste la velocidad, avisaste a alguien.

### El aviso y la orden de trabajo
El aviso (*maintenance request*) es tu petición. La orden de trabajo (*work order*) es el documento con el que mantenimiento planifica, ejecuta y registra el trabajo. Según la NTP 460, cada reparación lleva su hoja con la necesidad y su prioridad, y cada equipo tiene un registro con todo lo que se le ha hecho. La NTP 1017 añade que una orden de trabajo debe acompañar toda intervención. Las prioridades las define cada planta; lo habitual es distinguir lo urgente (riesgo para personas, producto o medio ambiente) de lo que puede esperar a una parada.

Nada se arregla «de palabra». Sin orden no hay permiso, no hay registro, nadie evalúa si la pieza es la correcta y nadie libera el equipo después. El programa donde viven las órdenes se llama GMAO (*computerized maintenance management system*, CMMS). Puede ser un módulo del ERP, el programa de gestión general de la empresa, o estar conectado a él para pedir repuestos y cargar costes.

### Entregar el equipo
1. **Vaciar** equipo y líneas.
2. **Limpiar o descontaminar** hasta el nivel que pida el procedimiento. La NTP 1017 pide que, siempre que sea posible, se limpie antes de que entre mantenimiento y que lo haga producción, que conoce las sustancias. La inspección visual puede bastar, pero con productos muy potentes hace falta un análisis.
3. **Inertizar o ventilar**, según se vaya a abrir o no.
4. **Aislar y consignar.** Está en «Permisos de trabajo, consignación y espacios confinados a fondo».
5. **Etiquetar el estado:** «en mantenimiento».
6. **Informar de lo que contuvo:** producto, disolventes y sus fichas de datos de seguridad (*safety data sheets*, SDS).
7. **Documento de descontaminación** si una pieza sale del área. La NTP 1017 aconseja adjuntar el boletín de análisis a la lista de comprobación de limpieza, donde consta quién, cómo y cuándo limpió. Si no se puede garantizar la descontaminación completa, la pieza se limpia, se humedece para que no levante polvo y viaja en bolsa de plástico cerrada.
8. **Permiso de trabajo.**

Quién firma: tu mando firma que el equipo está preparado y el de mantenimiento, que acepta el trabajo. Tú firmas las comprobaciones que hiciste con tus manos.

### Durante la intervención
- **Herramientas** limpias y controladas. Es práctica habitual contarlas al entrar y al salir, igual que las piezas desmontadas. El recuento no está en las guías leídas: lo fija tu procedimiento.
- **Lubricantes y fluidos.** ICH Q7 5.14: lubricantes, fluidos de calefacción y refrigerantes no deben entrar en contacto con el producto de forma que alteren su calidad; cualquier desviación se evalúa; siempre que sea posible se usan lubricantes y aceites de grado alimentario (*food grade*).
- **Recambios.** Según la NTP 1017, en una reparación la sustitución debe ser siempre igual por igual (*like for like*). Si cambian las especificaciones del equipo (otro material de junta, otro modelo), es un cambio y pasa por control de cambios (ICH Q7 13.11 incluye los equipos).
- **Proteger el producto cercano.** ICH Q7 5.15: cuando un equipo se abre, se toman precauciones para minimizar la contaminación.
- **Zona limpia** al terminar.

### Recibir el equipo de vuelta
1. **Bloqueos y etiquetas** los retira quien los puso. Tú no quitas el candado de otro.
2. **Nada olvidado dentro:** herramientas, trapos, tornillos, plásticos. Mira con linterna.
3. **Montaje:** juntas del material correcto y bien asentadas, bridas con todos sus tornillos, resguardos puestos, tomas de tierra conectadas. Si se ha tocado un motor, sentido de giro comprobado como diga el procedimiento: dos cables cambiados lo hacen girar al revés.
4. **Prueba de estanqueidad** (*leak test*).
5. **Prueba en vacío, con agua o con disolvente,** antes de meter producto, si el procedimiento lo pide.
6. **Limpieza posterior.** El equipo abierto y tocado ya no está «limpio».
7. **Calibraciones:** un instrumento desmontado o sustituido se verifica o se calibra.
8. **Recualificación:** la decide la evaluación del cambio, no tú (Anexo 15 de EU GMP, 11.4).
9. **Liberación** (*release*). ICH Q7 5.21 pide un procedimiento escrito para liberar el equipo. Quién firma lo fija cada planta: lo habitual es producción y, según el caso, la unidad de calidad. Queda escrita en la orden de trabajo y en el registro del equipo.

Si la reparación toca las partes a presión, el Real Decreto 809/2021 exige una empresa reparadora habilitada o el fabricante, y una inspección de un organismo de control antes de volver al servicio (artículo 7). Cambiar una junta no cuenta como reparación a esos efectos.

### La prueba de estanqueidad, con números
Sirve para saber si lo que se abrió ha quedado bien cerrado. Los criterios de esta sección son valores de ejemplo: los reales están en tu procedimiento.

**Con presión de nitrógeno.** Se presuriza, se aísla el equipo y se mira cuánto cae la presión en un tiempo.

- Inicio: 1,50 bar g. A los 30 minutos: 1,47 bar g.
- Caída: 1,50 − 1,47 = 0,03 bar = 30 mbar.
- Ritmo: 30 mbar / 30 min = 1 mbar/min.
- Criterio de ejemplo: caída máxima de 50 mbar en 30 minutos. Como 30 es menor que 50, pasa.

**Con vacío.** Se hace vacío, se aísla y se mira cuánto sube la presión. Lo que entra por una fuga es aire.

- Inicio: 50 mbar abs. A los 15 minutos: 65 mbar abs.
- Subida: 65 − 50 = 15 mbar. Ritmo: 15 / 15 = 1 mbar/min.
- Criterio de ejemplo: máximo 2 mbar/min. Pasa.

**La temperatura engaña.** En un recipiente cerrado, la presión absoluta de un gas es proporcional a su temperatura absoluta, en kelvin (grados Celsius más 273,15). Un reactor a 2,50 bar a y 25 °C que se enfría hasta 20 °C baja a 2,50 × 293,15 / 298,15 = 2,458 bar a. Son 42 mbar menos sin ninguna fuga. Por eso la prueba se hace con la temperatura estable y se anota.

### La etiqueta de estado
| Estado | Qué significa |
|---|---|
| En uso | Con producto: indica cuál y qué lote |
| Sucio, pendiente de limpieza | Indica producto anterior y hora de fin |
| Limpio | Con fecha, hora, firma y caducidad de la limpieza |
| En mantenimiento | Entregado: no se toca ni se arranca |
| Fuera de servicio o averiado | No se usa |
| Pendiente de liberación tras reparación | Reparado, pero aún no aceptado |

ICH Q7 5.26 pide identificar contenido y estado de limpieza; el resto de estados y sus nombres son de cada planta.

### La limpieza caduca
Hay dos relojes. El **tiempo sucio** (*dirty hold time*) va del fin del proceso al inicio de la limpieza. ICH Q7 5.21 pide fijar ese máximo cuando proceda, y la guía de la FDA sobre validación de limpieza explica por qué: al secarse los residuos, limpiar es más difícil. El **tiempo limpio** (*clean hold time*) va del fin de la limpieza al uso. El Anexo 15 (10.8) pide tener en cuenta los dos para definirlos. La FDA añade que el equipo se seca antes de guardarlo y que nunca debe quedar agua estancada.

Cuenta de ejemplo, con un tiempo limpio de 72 horas (valor de ejemplo):

- Limpieza terminada el lunes a las 14:30.
- 72 horas son 3 días justos: caduca el jueves a las 14:30.
- Mantenimiento devuelve el equipo el viernes a las 10:00. Del lunes a las 14:30 al viernes a las 14:30 van 96 horas; menos 4,5 horas, son 91,5 horas.
- 91,5 es mayor que 72: la limpieza ha caducado. Y, además, el equipo se abrió. Se limpia de nuevo.

### El registro del equipo
El registro o libro del equipo (*equipment logbook*) es su memoria. Se anota en orden cronológico, sin huecos: cada lote (producto, número, fechas y horas), cada limpieza y quién la hizo, cada mantenimiento y quién lo hizo, con su orden de trabajo, las calibraciones, los cambios de estado y las incidencias. Cuando un lote sale mal, es lo primero que se abre: ¿qué se fabricó antes?, ¿se limpió?, ¿qué se tocó la semana pasada? Si el cambio de junta no está apuntado, nadie podrá relacionarlo con la partícula que apareció en el producto.

### Tres indicadores que oirás
Son cuentas aritméticas sencillas; cada planta decide qué tiempos mete en ellas. Un mes de ejemplo de una centrífuga:

- Tiempo previsto de marcha: 720 horas. Averías: 4, con 36 horas de parada en total.
- Tiempo en marcha: 720 − 36 = 684 horas.
- **Disponibilidad** (*availability*) = tiempo en marcha / tiempo previsto = 684 / 720 = 0,95 = 95 %.
- **Tiempo medio entre fallos** (*mean time between failures*, MTBF) = tiempo en marcha / número de fallos = 684 / 4 = 171 horas.
- **Tiempo medio de reparación** (*mean time to repair*, MTTR) = tiempo de parada / número de fallos = 36 / 4 = 9 horas.

Las tres cuadran entre sí: 171 / (171 + 9) = 0,95. Un MTBF que baja mes a mes avisa de que el equipo se está degradando.

### Paradas programadas
Una parada (*shutdown* o *turnaround*) es parar la planta o una línea para hacer lo que no se puede con el equipo en marcha: preventivos largos, correctivos planificados, calibraciones e inspecciones reglamentarias. El Real Decreto 809/2021 fija para los equipos a presión tres niveles de inspección periódica: A, en servicio; B, fuera de servicio; y C, fuera de servicio con prueba de presión. El usuario debe preparar los equipos para que se hagan con seguridad. Tu parte: vaciar, limpiar y entregar antes; recibir, probar y limpiar después.

### Lubricación y pequeños trabajos
No engrasar un rodamiento puede acabar en agarrotamiento o sobrecalentamiento, recuerda la guía técnica del Real Decreto 1215/1997. Lo que haces tú es solo lo que tu procedimiento te asigna, con el lubricante indicado y anotándolo. Reponer líquido de barrera o reapretar una brida puede ser tarea tuya en una planta y de mantenimiento en otra.

### Qué vigilas, qué anotas y qué no haces nunca
**Vigilas:** ruidos, vibraciones, fugas, niveles, juntas, etiquetas de estado y caducidades.

**Anotas:** la avería con sus cinco datos, el número de aviso, la entrega y la recepción con fecha y hora, las pruebas con sus lecturas reales y la liberación.

**No haces nunca:**

- Reparar por tu cuenta.
- Quitar un resguardo o trabajar sin él.
- Usar un equipo etiquetado como averiado o en mantenimiento.
- Arrancar tras un mantenimiento sin liberación escrita.
- Anotar «prueba correcta» sin las lecturas.

Esta lección explica el porqué. En planta manda siempre el procedimiento vigente (SOP) de tu empresa.
`,
  plant: `
Martes, 06:40. En la centrífuga CF-320 (ficticia), al acelerar con la torta del lote 0457 del intermedio IM-22, Marta oye un zumbido nuevo en el lado del accionamiento y nota la carcasa más caliente de lo normal. La vibración sigue por debajo de la alarma. Termina la descarga según el procedimiento, no carga otra vez y avisa a la jefa de turno.

Crea el aviso con cinco datos: zumbido continuo; rodamiento del lado del accionamiento de la CF-320; desde las 06:40; al pasar de media velocidad, con producto húmedo de isopropanol; descarga terminada y equipo parado. Lo apunta en el registro del equipo con el número de aviso.

Producción vacía y lava la cesta, inertiza, ventila y entrega la ficha de datos de seguridad del intermedio y del disolvente. Mantenimiento consigna con el permiso de trabajo y cuelga la etiqueta «en mantenimiento». Cambia el rodamiento por otro idéntico: es igual por igual y no hace falta control de cambios. Usa grasa de grado alimentario, como indica la orden.

Jueves, 11:00. El mecánico retira su candado. Marta mira con linterna: ni trapos ni tornillos. Tapa cerrada, junta en su sitio, resguardo puesto, tierra conectada. Giro en vacío: sentido correcto y sin ruido. Prueba con nitrógeno: de 0,50 a 0,49 bar g en 20 minutos, 10 mbar de caída frente a los 25 mbar admitidos (valores de ejemplo). La limpieza anterior ya no vale: se limpia de nuevo, se inspecciona y se etiqueta «limpio». La jefa de turno firma la liberación en la orden de trabajo y en el registro.
`,
  batchRecord: `
En la hoja de producción (*batch record*) y en los registros que la acompañan verías y anotarías:

- **Incidencia de equipo durante el lote:** hora, síntoma, qué se hizo, número de aviso u orden de trabajo y, si afecta al lote, la referencia de la desviación.
- **Identificación de los equipos principales usados**, con su código.
- **Comprobación previa al uso:** etiqueta «limpio» vigente, con la fecha y hora de la limpieza y su caducidad; si hubo mantenimiento, equipo liberado.
- **Prueba de estanqueidad**, si el procedimiento la pide: presión inicial, presión final, tiempo, temperatura, criterio y resultado. Siempre las lecturas reales, no solo «conforme».
- **Calibración:** que los instrumentos críticos están dentro de fecha.

En el registro del equipo (*equipment logbook*), en orden cronológico: el uso (producto, lote, inicio y fin), la limpieza y quién la hizo, la entrega a mantenimiento, el trabajo hecho y quién lo hizo, la recepción con sus comprobaciones, la limpieza posterior y la liberación con firma, fecha y hora.

Si te equivocas al anotar, se corrige como siempre: una raya que deje leer lo anterior, el dato correcto, fecha, firma y motivo.
`,
  terms: [
    { es: "Mantenimiento correctivo", en: "Corrective maintenance", def: "El que se hace cuando la avería ya se ha producido, para devolver el equipo a su estado normal de servicio." },
    { es: "Mantenimiento preventivo", en: "Preventive maintenance", def: "Intervenciones programadas a intervalos fijos de tiempo o de uso para reducir la probabilidad de avería." },
    { es: "Mantenimiento predictivo", en: "Predictive maintenance", def: "El que se decide midiendo el estado del equipo (vibración, ruido, temperatura) para intervenir justo antes del fallo." },
    { es: "Mantenimiento autónomo", en: "Autonomous maintenance", def: "Tareas sencillas que hace el propio operador según el procedimiento: limpiar, inspeccionar, engrasar y avisar." },
    { es: "Aviso de avería", en: "Maintenance request", def: "Petición escrita del operador a mantenimiento, con qué pasa, dónde, cuándo, en qué condiciones y qué se hizo." },
    { es: "Orden de trabajo", en: "Work order", def: "Documento con el que mantenimiento planifica, ejecuta y registra una intervención." },
    { es: "GMAO", en: "Computerized maintenance management system (CMMS)", def: "Programa informático donde se gestionan avisos, órdenes de trabajo, repuestos e historial de los equipos." },
    { es: "Igual por igual", en: "Like for like", def: "Sustituir una pieza por otra idéntica. Si la pieza es distinta, es un cambio y pasa por control de cambios." },
    { es: "Prueba de estanqueidad", en: "Leak test", def: "Comprobación de que un equipo cerrado no fuga, midiendo cuánto cae la presión o cuánto sube el vacío en un tiempo." },
    { es: "Etiqueta de estado", en: "Status label", def: "Etiqueta que dice cómo está el equipo: en uso, sucio, limpio, en mantenimiento o fuera de servicio." },
    { es: "Tiempo limpio", en: "Clean hold time", def: "Tiempo máximo que puede pasar entre el fin de la limpieza y el uso del equipo sin volver a limpiar." },
    { es: "Registro del equipo", en: "Equipment logbook", def: "Historial cronológico del uso, la limpieza y el mantenimiento de un equipo." },
    { es: "Disponibilidad", en: "Availability", def: "Tiempo que el equipo ha estado en marcha dividido entre el tiempo que estaba previsto que lo estuviera." },
    { es: "Tiempo medio entre fallos", en: "Mean time between failures (MTBF)", def: "Tiempo en marcha dividido entre el número de fallos en ese periodo." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Tras cambiar una junta presurizas el reactor con nitrógeno hasta 2,00 bar g y lo aíslas. A los 60 minutos, con la temperatura estable, el manómetro marca 1,94 bar g. ¿Cuánto ha caído la presión, en mbar?",
      answer: 60,
      tolerance: 0.01,
      unit: "mbar",
      explain: "Caída = 2,00 − 1,94 = 0,06 bar. Como 1 bar son 1000 mbar, la caída es de 60 mbar. Ese valor se compara con el máximo que admite el procedimiento.",
    },
    {
      kind: "choice",
      q: "El agitador del reactor empieza a hacer un ruido que ayer no hacía. ¿Cuál de estos avisos es el más útil para mantenimiento?",
      options: [
        "El agitador del reactor hace ruido, venid a verlo cuando podáis",
        "Rodamiento roto en el agitador, hay que cambiarlo cuanto antes",
        "Golpeteo desde las 14:10 en el reductor, a 90 rpm y con lote dentro",
        "El reactor no va bien desde hace días, lo dijo el turno de noche",
      ],
      answer: 2,
      explain: "Un buen aviso dice qué (el síntoma, sin diagnosticar), dónde, cuándo y en qué condiciones, y qué se hizo. «Rodamiento roto» es un diagnóstico que no te toca a ti.",
    },
    {
      kind: "number",
      q: "Prueba de vacío de un secadero: lo llevas a 80 mbar abs, lo aíslas y a los 12 minutos marca 104 mbar abs. ¿A qué ritmo ha subido la presión, en mbar por minuto?",
      answer: 2,
      tolerance: 0.01,
      unit: "mbar/min",
      explain: "Subida = 104 − 80 = 24 mbar. Ritmo = 24 / 12 = 2 mbar/min. Lo que entra en una prueba de vacío es aire de fuera.",
    },
    {
      kind: "choice",
      q: "Mantenimiento te devuelve la centrífuga. El mecánico dice que está lista, pero la orden de trabajo no tiene la liberación firmada. ¿Qué haces?",
      options: [
        "No arranco: compruebo, pruebo y espero a la liberación escrita",
        "Arranco ya, porque el mecánico es quien mejor conoce el equipo",
        "Arranco en vacío y, si no hace ruido, cargo el lote siguiente",
        "Firmo yo la liberación para no retrasar el lote que está esperando",
      ],
      answer: 0,
      explain: "ICH Q7 5.21 pide un procedimiento escrito para liberar el equipo antes de fabricar. Sin la liberación firmada por quien corresponde, el equipo no se usa.",
    },
    {
      kind: "number",
      q: "Un reactor se terminó de limpiar el martes a las 08:00. Su tiempo limpio es de 96 horas (valor de ejemplo). Ahora es jueves a las 20:00. ¿Cuántas horas quedan antes de que caduque la limpieza?",
      answer: 36,
      tolerance: 0.01,
      unit: "h",
      explain: "Del martes a las 08:00 al jueves a las 08:00 van 48 horas, y hasta las 20:00 otras 12: han pasado 60 horas. Quedan 96 − 60 = 36 horas.",
    },
    {
      kind: "choice",
      q: "Al cambiar la junta de la boca de hombre, en el almacén no queda la de PTFE que pide la lista de repuestos, pero hay una de otro material del mismo tamaño. ¿Qué procede?",
      options: [
        "Montarla, porque el tamaño es el mismo y cierra igual de bien",
        "Montarla y apuntarlo después en el registro del equipo",
        "Montarla solo para este lote y cambiarla en la próxima parada",
        "No montarla: no es igual por igual y exige control de cambios",
      ],
      answer: 3,
      explain: "Un material distinto cambia las especificaciones del equipo: ya no es una sustitución igual por igual, sino un cambio, y tiene que evaluarse por control de cambios antes de montarla.",
    },
    {
      kind: "number",
      q: "Un filtro-secador tenía previstas 500 horas de marcha en el mes y estuvo parado por averías 40 horas. ¿Cuál fue su disponibilidad, en porcentaje?",
      answer: 92,
      tolerance: 0.01,
      unit: "%",
      explain: "Tiempo en marcha = 500 − 40 = 460 horas. Disponibilidad = 460 / 500 = 0,92, es decir, 92 %.",
    },
    {
      kind: "choice",
      q: "Vas a cargar un reactor. La etiqueta dice «limpio», pero la fecha indica que el tiempo limpio se superó ayer. ¿Qué haces?",
      options: [
        "Cargo, porque la etiqueta dice limpio y nadie lo ha tocado",
        "No cargo: aviso y se limpia de nuevo según el procedimiento",
        "Cambio la fecha de la etiqueta por la de hoy y cargo el lote",
        "Lo miro por la mirilla y, si se ve limpio, cargo sin anotar nada",
      ],
      answer: 1,
      explain: "Pasado el tiempo limpio, el estado ya no está garantizado. Se avisa y se vuelve a limpiar según el procedimiento. Cambiar la fecha sería falsificar un registro.",
    },
    {
      kind: "number",
      q: "Una bomba estuvo en marcha 900 horas en un trimestre y tuvo 6 fallos. ¿Cuál es su tiempo medio entre fallos (MTBF), en horas?",
      answer: 150,
      tolerance: 0.01,
      unit: "h",
      explain: "MTBF = tiempo en marcha / número de fallos = 900 / 6 = 150 horas.",
    },
    {
      kind: "choice",
      q: "Una pieza del secadero tiene que ir al taller y no se puede garantizar que esté del todo descontaminada. Según la NTP 1017, ¿cómo sale de la zona de producción?",
      options: [
        "Tal cual, porque en el taller ya la limpiarán con sus medios",
        "Seca y soplada con aire comprimido para quitarle el polvo",
        "Limpia, humedecida y dentro de una bolsa de plástico cerrada",
        "Envuelta en trapos y con una nota pegada que diga cuidado",
      ],
      answer: 2,
      explain: "La NTP 1017 pide que producción limpie la pieza, la humedezca para que no genere polvo y la meta en una bolsa de plástico cerrada antes de llevarla al taller.",
    },
  ],
};
