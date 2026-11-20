import type { Lesson } from "./types";

export const permisosAFondo: Lesson = {
  slug: "permisos-a-fondo",
  level: 15,
  order: 9,
  title: "Permisos de trabajo, consignación y espacios confinados a fondo",
  titleEn: "Permits to work, lockout/tagout and confined spaces in depth",
  minutes: 38,
  summary:
    "Cómo se entrega un equipo a mantenimiento sin que nadie salga herido: quién firma qué en un permiso, cómo se dejan sin energía un reactor o una centrífuga, y por qué no se entra nunca en un reactor sin medir, ventilar y tener a alguien fuera.",
  body: `
En la lección anterior viste qué son un permiso, un candado y un espacio confinado. Aquí vas a ver cómo funcionan por dentro y qué te toca a ti, con las guías del Instituto Nacional de Seguridad y Salud en el Trabajo (INSST) en la mano.

Esas guías se llaman Notas Técnicas de Prevención (NTP). Son buenas prácticas: ellas mismas dicen que no son obligatorias salvo que una norma las recoja. La obligación legal está en los reales decretos y la forma concreta de trabajar la fija tu planta.

### Parte 1. El permiso de trabajo

### Por qué existe
Piensa en dejar el coche en el taller. Tú sabes que el freno de mano falla. El mecánico sabe cambiar unas pastillas. Si no os decís nada, cada uno tiene media información, y el accidente está en la mitad que falta.

La NTP 562 lo explica igual. Muchos accidentes graves vienen de la falta de comunicación entre quien hace un trabajo, casi siempre mantenimiento o una empresa externa, y quien es responsable de la instalación. Producción conoce el estado y el contenido del equipo. Quien ejecuta conoce el trabajo y sus peligros. El **permiso de trabajo** (*permit to work*), que la NTP llama autorización de trabajo, obliga a juntar las dos mitades por escrito antes de empezar.

La NTP señala tres rasgos esenciales: va firmado por las dos partes, dura un tiempo limitado y lleva una lista de comprobación.

### Qué trabajos lo necesitan
La NTP 562 los llama trabajos especiales, los haga personal propio o externo:

| Tipo | Qué es, según la NTP 562 | Ejemplo en tu planta |
|---|---|---|
| Trabajo en caliente (*hot work*) | Operaciones con calor, chispas, llamas o altas temperaturas cerca de polvos, líquidos o gases inflamables, o en recipientes que los contengan o los hayan contenido | Soldar un soporte junto a un reactor |
| Trabajo en frío (*cold work*) | Sin generar calor, pero en instalaciones por las que circulan o se almacenan fluidos peligrosos | Cambiar un tramo de tubería o reparar una bomba |
| Espacio confinado (*confined space*) | Interior de depósitos, cisternas, fosos y espacios donde el aire puede no ser respirable | Entrar en un reactor |
| Trabajo eléctrico | Trabajos sobre equipos eléctricos con tensión o cerca de ellos | Revisar el cuadro de un motor |
| Otros trabajos especiales | Los que por sus características supongan riesgos importantes | Los decide cada empresa |

La NTP no nombra los trabajos en altura. En muchas plantas tienen permiso propio: eso lo decide la empresa dentro de «otros». La NTP añade que, para consignar máquinas, conviene tener un procedimiento específico aparte del permiso.

### Quién interviene y qué firma
| Figura en la NTP 562 | Quién suele ser | Qué hace y qué firma |
|---|---|---|
| Responsable de la unidad funcional | El mando de producción del área | Deja la instalación practicable y sin riesgos, o informa de los que quedan. Da la información y las medidas de protección. Pide y adjunta las comprobaciones. Comprueba que los medios de emergencia están listos. Firma que ha inspeccionado en persona y que los trabajos preparatorios están hechos |
| Responsable de ejecución | El mando de mantenimiento o de la empresa externa | No ordena empezar sin el permiso bien extendido. Inspecciona en persona el lugar y el equipo de seguridad. Verifica que su gente está capacitada y le da instrucciones. Firma que el trabajo puede hacerse con garantías |
| Quien realiza el trabajo | El mecánico, el soldador | Firma que está enterado. Lleva el permiso encima. Usa las protecciones indicadas. Para y avisa si cambian las condiciones |
| Persona de vigilancia | Alguien designado para ello | La nombra el responsable de ejecución cuando el trabajo es muy peligroso o aislado. Formada en primeros auxilios, lucha contra incendios y salvamento |

### Qué lleva escrito
Según la NTP 562, el permiso debería constar de:

- Fecha, periodo y turno de validez.
- Lugar del trabajo y descripción.
- Riesgos existentes y previsibles.
- Comprobación de que el equipo está en condiciones (la lista de comprobación).
- Normas, procedimientos e instrucciones a seguir.
- Protecciones colectivas e individuales.
- Comprobaciones o ensayos durante el trabajo y su frecuencia.
- Si es personal externo, empresa y teléfono de emergencia.
- Quién autoriza y a quién se autoriza.
- Duración.

### El recorrido de un permiso
1. **Solicitud.** Se pide el trabajo y se decide qué permiso hace falta.
2. **Preparación del equipo por producción.** Vaciar, limpiar, enfriar, despresurizar, aislar, medir. Es tu parte.
3. **Comprobación en el lugar.** Los dos responsables inspeccionan en persona. No se firma desde el despacho.
4. **Firmas.** Unidad funcional, ejecución y quien hace el trabajo.
5. **Ejecución.** El permiso está en el tajo. Desde que se extiende y hasta que se cancela es la instrucción principal y va por delante de cualquier otra. Además, el responsable comunica de palabra lo más importante.
6. **Cambios.** Si las condiciones cambian de forma sustancial, o el trabajo dura más de lo previsto, se renueva. Quien trabaja para y avisa.
7. **Cambio de turno.** La NTP dice que el permiso no superará en ningún caso el turno de trabajo. Si el trabajo sigue, hay renovación con sus comprobaciones. La NTP 30, su antecesora, explica el motivo: evitar que se incorpore gente que no conoce el estado de los trabajos.
8. **Cierre.** Quien trabaja entrega el permiso a su mando. El original vuelve al responsable que autorizó y este lo pasa al responsable de la unidad para su archivo. El formulario anota día y hora de terminación.

### Tu papel como operador
Tú entregas el equipo seguro y lo recibes de vuelta. La lista de comprobación del modelo de la NTP 562 es casi una lista de tu trabajo. Cada punto se contesta con sí, no o no procede:

- El equipo está despresurizado, enfriado, limpio e inertizado.
- El explosímetro da ambiente correcto y la atmósfera es respirable.
- El equipo está libre de corrosivos y de tóxicos.
- Se han vaciado y purgado las tuberías.
- Están interrumpidas las conexiones eléctricas.
- Hay bridas ciegas en la entrada de productos y en la entrada de vapor a serpentines.
- Hay ventilación adecuada, la zona está señalizada, los accesos están despejados y hay medios contra incendios cerca.

Un «no» significa que falta algo obligatorio: según la NTP 30, se anota quién lo hará y cuándo. Antes de firmar o de decir «está listo», ve y míralo. La firma dice «inspeccionado personalmente».

### Parte 2. Consignación

### Qué es y qué dice la ley
El Real Decreto 1215/1997 (anexo II, apartado 1.14) obliga a que el mantenimiento, ajuste, desbloqueo, revisión o reparación que suponga un peligro se haga tras tres cosas: parar o desconectar el equipo, comprobar que no quedan energías residuales peligrosas y evitar su puesta en marcha o conexión accidental mientras dure. Su anexo I exige que todo equipo tenga dispositivos claramente identificables para separarlo de cada una de sus fuentes de energía.

La NTP 1117 llama **consignación** (*lockout/tagout*, LOTO) a cuatro acciones, en este orden:

1. **Separar** el equipo de todas las fuentes de energía posibles.
2. **Bloquear** los dispositivos de separación, por ejemplo con candados.
3. **Disipar o retener** la energía acumulada que pueda ser peligrosa.
4. **Verificar**, con un procedimiento de trabajo seguro, que lo anterior ha surtido efecto.

La etiqueta acompaña al candado y avisa de que el equipo está fuera de servicio. La NTP es tajante: etiquetar sin bloquear no equivale a consignar. Tampoco vale el paro de emergencia como separación, salvo para trabajos menores previstos.

### Las energías de un reactor y de una centrífuga
La analogía es una olla a presión. La apagas, pero sigue caliente y con presión. Apagar no es dejar sin energía.

| Energía | Dónde está | Cómo se corta, disipa o retiene |
|---|---|---|
| Eléctrica | Motor del agitador o de la cesta | Seccionador bloqueado en abierto. Puede quedar tensión residual o condensadores cargados |
| Mecánica por inercia | Cesta de la centrífuga que sigue girando | Frenos y esperar a la parada total |
| Mecánica acumulada | Muelles, piezas que pueden caer por su peso | Descargar o sujetar con bloqueos mecánicos |
| Neumática | Aire de las válvulas automáticas | Válvula de corte y despresurizar |
| Hidráulica | Grupo hidráulico | Parar la bomba y quitar la presión residual |
| Presión | Reactor o línea presurizados | Válvulas de corte y despresurización |
| Térmica | Camisa caliente o muy fría | Barreras y tiempo: puede tardar mucho en disiparse |
| Química | Producto en el equipo y en las líneas | Vaciar, purgar y aislar las líneas |

Las energías eléctrica, mecánica, neumática, hidráulica y térmica salen de la NTP 1117, pensada para máquinas. La presión del proceso y el producto los cubre la lista del permiso (despresurizado, vaciado y purgado, bridas ciegas). El vacío no aparece en las guías leídas: es práctica habitual llevar el equipo a presión atmosférica antes de abrir.

### Candados
La NTP 52, de 1983 y hoy sustituida por la 1117, lo explicaba con un ejemplo. Si el dispositivo solo admite un candado y lo pone el trabajador A, el trabajador B se queda sin sitio para el suyo. Por eso el interruptor o la válvula deben poder llevar a la vez el candado de cada persona que trabaja, con adaptadores múltiples. Mientras quede uno puesto, no se puede accionar. Cada uno retira el suyo al acabar y quien retira el último avisa al encargado. La NTP 1117 mantiene los dispositivos de «uno o varios candados». Quitar los fusibles no sustituye al candado: alguien puede reponerlos sin preguntar.

Práctica habitual de empresa, no leída en estas guías: la llave siempre en el bolsillo de quien trabaja, cajas de consignación para grupos grandes y la prueba de arranque, que es pulsar marcha para ver que no pasa nada. La norma exige verificar; el cómo lo fija tu procedimiento.

### Aislar líneas de proceso
Una válvula cerrada puede fugar o alguien puede abrirla. La NTP 223 pide, para entrar en un recinto, instalar **bridas ciegas** (*blind flanges*) en las tuberías, incluidas las de purga y las de inertización. La NTP 340 pide bloquear las fuentes de gas inerte o desconectar las conexiones. La NTP 52 muestra volantes de válvula bloqueados con cadena.

En planta oirás hablar también de doble bloqueo y purga y de discos ciegos. No aparecen en las guías leídas para esta lección: están en tu procedimiento.

### Parte 3. Espacios confinados

### Qué son
Según la NTP 223, un recinto confinado es cualquier espacio con aberturas limitadas de entrada y salida y ventilación natural desfavorable, donde pueden acumularse contaminantes tóxicos o inflamables o faltar oxígeno, y que no está pensado para que alguien esté dentro de forma continuada.

La NTP cita reactores, tanques, cisternas, arquetas subterráneas, pozos, fosos y depósitos abiertos. Estos últimos cuentan aunque estén abiertos por arriba, si la profundidad dificulta la ventilación.

### Los riesgos
**Generales**: equipos que arrancan sin aviso, atrapamiento con el agitador o los deflectores, electrocución, caídas, objetos que caen, calor o frío, ruido, poca luz y mala comunicación con el exterior.

**Específicos**, por la atmósfera: asfixia, incendio o explosión e intoxicación.

| Dato | Fuente |
|---|---|
| El aire tiene un 21 % de oxígeno | NTP 223 y NTP 340 |
| Para trabajar dentro, el oxígeno no debe bajar del 20,5 %. Si no se consigue con aire fresco, equipos respiratorios semiautónomos o autónomos | NTP 223 |
| Por debajo del 16 % la situación es peligrosa | NTP 340 |
| Al 10 % la asfixia mortal es casi segura | NTP 340 |
| Por encima del 25 % del límite inferior de inflamabilidad, el recinto es muy peligroso | NTP 223 |
| Si se puede superar el 5 % de ese límite, la medición es continua | NTP 223 |

El **límite inferior de inflamabilidad** (*lower flammable limit*) es la cantidad mínima de vapor en el aire para que la mezcla arda. El explosímetro no da el porcentaje de vapor: da qué parte de ese límite se ha alcanzado.

La NTP 223 avisa: las señales de falta de oxígeno no se notan con facilidad y la mayoría no reconoce el peligro hasta que está demasiado débil para salir. Con los tóxicos tampoco te fíes de la nariz: el sulfuro de hidrógeno deja de olerse en cantidades grandes y el monóxido de carbono no huele.

### Las medidas
- **Autorización de entrada.** Para la NTP 223 es la base de todo. Firmada por producción y mantenimiento, válida para una sola jornada.
- **Medir la atmósfera.** Antes de entrar, desde fuera o desde zona segura, y de forma continuada mientras pueda cambiar. Oxígeno, inflamables y tóxicos. Cuidado con los rincones donde el aire no se renueva.
- **Aislar el recinto.** Frente a la energía (agitador, tensión) con enclavamientos inviolables, y frente a la entrada de sustancias con bridas ciegas. Señalizar que hay gente dentro.
- **Ventilar.** La ventilación natural suele ser insuficiente: se usa la forzada. La velocidad del aire no será inferior a 0,5 m/s donde están las personas. Nunca se ventila con oxígeno.
- **Vigilancia exterior continuada.** Una persona fuera, instruida, en contacto continuo, visual o por otro medio eficaz. Quien está dentro va sujeto con arnés y cuerda desde fuera. Fuera hay medios de rescate y protección respiratoria para emergencias.
- **Formación.** Riesgos, medidores, rescate, comunicación, y simulacros periódicos.

### Por qué mueren los rescatadores
La NTP 223 dice que estos accidentes son graves para quien trabaja y para quienes le auxilian de inmediato sin medidas de seguridad. Ves a un compañero caído y el cuerpo te pide bajar. Lo que le ha tumbado sigue ahí.

La NTP 340 lo ordena. No actúes con precipitación: el peligro para quien rescata es inminente. Si puedes sacarlo sin entrar, con el arnés y el cable, hazlo cuanto antes, sin dejar pasar más de tres minutos, y pide ayuda. Si hay que entrar, solo con equipo de respiración autónomo y, si es posible, pidiendo ayuda antes.

### El reactor inertizado con nitrógeno
El nitrógeno te protege del fuego y te quita el aire. La NTP 340 recuerda que los gases inertes no tienen color, olor ni sabor. Dos bocanadas bastan para perder la consciencia. Asomar la cabeza por la boca del recipiente puede ser suficiente.

Antes de entrar en un equipo que ha estado inertizado, la NTP 340 pide:

1. Bloquear las fuentes de gas inerte o desconectarlas.
2. Ventilar con aire, nunca con oxígeno, con una cantidad de aire de al menos tres veces la del recinto.
3. Analizar la atmósfera en varios puntos con una sonda.
4. Si no sale bien, volver a ventilar y a medir.

Durante el trabajo se sigue midiendo. El medidor ayuda, pero no es una garantía absoluta: puede estar mal ajustado o mal colocado. La NTP avisa de otro error clásico: conectar por equivocación nitrógeno donde debía ir aire comprimido.

### Trabajos en caliente
Son los que generan calor, chispas o llama cerca de inflamables: soldar, cortar, esmerilar, taladrar. Con disolventes cerca, la chispa es lo que falta para el fuego.

Por eso se mide antes. El modelo de la NTP 562 tiene la casilla «el explosímetro da ambiente correcto», pero no da una cifra. Las cifras que da la NTP 223 son para recintos confinados: 25 % y 5 % del límite inferior de inflamabilidad. El valor máximo para autorizar un trabajo en caliente lo fija tu planta en su procedimiento.

Dentro de un recinto, la NTP 223 pide extracción localizada para los humos de soldadura. La NTP 340 recuerda que la soldadura con gas de protección emite gas inerte: en las pausas se sacan los equipos del recinto, porque cerrar la válvula no basta.

### Tres casos
**Caso 1.** El permiso para cambiar una válvula vale hasta las 14:00 y el mecánico pide veinte minutos más. No se alarga de palabra: se renueva, con comprobación del turno entrante.

**Caso 2.** Vas a entregar la centrífuga. El seccionador está abierto y con candado, pero la cesta aún gira. No está consignada: queda energía por inercia. Se espera a la parada total y se verifica.

**Caso 3.** El vigilante ve al compañero desplomarse dentro del reactor. Da la alarma y tira del cable desde fuera. No entra. Si hay que entrar, lo hace quien lleve equipo de respiración autónomo.

En planta manda siempre el procedimiento vigente (SOP) y el permiso de trabajo. Esta lección te ayuda a entenderlos; no los sustituye.
`,
  plant: `
Hay que revisar por dentro el agitador del reactor R-101 después de una campaña con disolvente. El jueves, Lucía, jefa de turno, abre un permiso de entrada en espacio confinado.

Marta, la operadora, prepara el equipo. Vacía el reactor, lo lava según el procedimiento y lo deja enfriar hasta temperatura ambiente. Lo lleva a presión atmosférica. Cierra el nitrógeno y mantenimiento desconecta la línea y coloca bridas ciegas en las entradas de producto, de nitrógeno y de vapor. El electricista abre el seccionador del agitador y Marta, Andrés (el mecánico) y el electricista ponen cada uno su candado con su etiqueta. Marta pulsa marcha en el panel local: no arranca.

Se abre la boca de hombre y se ventila con un ventilador de aire. Desde fuera, con sonda, miden arriba, a media altura y en el fondo: 20,9 % de oxígeno, 0 % del límite inferior de inflamabilidad. Lucía y el encargado de mantenimiento suben, miran y firman. Andrés firma el enterado.

Andrés entra con arnés y cable. Iván se queda en la boca, sin otra tarea, con el medidor en continuo y un equipo de respiración autónomo a mano. A las 13:40 el trabajo no ha terminado. Andrés sale. El turno de tarde hace su propia comprobación y renueva el permiso.

Al acabar, cada uno retira su candado. Marta recibe el equipo, comprueba que no quedan herramientas dentro y lo anota como pendiente de limpieza.
`,
  batchRecord: `
Lo que sigue describe una práctica habitual. Los impresos y los nombres exactos los fija tu planta.

- **En el permiso de trabajo**: equipo y lugar, tipo de trabajo, validez desde y hasta (fecha y hora), lista de comprobación con sí, no o no procede, resultados de las mediciones con su hora, equipos de protección, nombre del vigilante, firmas del responsable de la unidad, del responsable de ejecución y de quien hace el trabajo, y día y hora de terminación. Rellénalo en el momento, con tinta, sin casillas en blanco.
- **En el registro de uso del equipo** (*equipment log*): la guía ICH Q7 (apartado 6.20) pide que los registros de uso, limpieza y mantenimiento de los equipos principales muestren fecha, hora si procede, producto, número de lote y la persona que hizo la limpieza y el mantenimiento. Ahí se anota la intervención y quién la hizo.
- **En la hoja de producción** (*batch record*): el permiso no forma parte de la hoja del lote. Lo que sí verás es la comprobación previa del equipo: identificado, limpio y liberado para usar. Un equipo con permiso abierto o candados puestos no se usa para producir.
- **Al recibir el equipo de vuelta**: permiso cerrado, candados retirados por sus dueños, bridas ciegas quitadas y conexiones repuestas según el procedimiento, sin herramientas ni trapos dentro, y limpieza antes de volver a producción.
`,
  terms: [
    { es: "Permiso de trabajo", en: "Permit to work", def: "Documento firmado por quien responde de la instalación y por quien hace el trabajo, que fija las condiciones para un trabajo especial. La NTP 562 lo llama autorización de trabajo." },
    { es: "Trabajo en caliente", en: "Hot work", def: "Operación que genera calor, chispas, llamas o altas temperaturas cerca de productos inflamables: soldar, cortar, esmerilar, taladrar." },
    { es: "Trabajo en frío", en: "Cold work", def: "Trabajo sin generación de calor en instalaciones por las que circulan o se almacenan fluidos peligrosos." },
    { es: "Responsable de la unidad funcional", en: "Area owner / issuing authority", def: "Mando del área donde se trabaja. Deja la instalación sin riesgos o informa de los que quedan, y firma el permiso." },
    { es: "Responsable de ejecución", en: "Performing authority", def: "Mando de quien hace el trabajo. Inspecciona el lugar, instruye a su gente y firma que puede trabajarse con garantías." },
    { es: "Consignación", en: "Lockout/tagout (LOTO)", def: "Separar el equipo de sus energías, bloquear los dispositivos de separación, disipar o retener la energía acumulada y verificar el resultado." },
    { es: "Dispositivo de separación", en: "Isolating device", def: "Elemento que corta una fuente de energía: seccionador eléctrico, válvula de corte. Debe poder bloquearse." },
    { es: "Energía acumulada o residual", en: "Stored / residual energy", def: "La que queda tras desconectar: presión en tuberías, inercia de piezas que giran, muelles, condensadores, calor." },
    { es: "Puesta en marcha intempestiva", en: "Unexpected start-up", def: "Arranque no deseado de un equipo por un fallo, una acción humana inoportuna o el retorno de la energía." },
    { es: "Brida ciega", en: "Blind flange", def: "Tapa maciza atornillada que cierra una tubería para que nada pueda pasar aunque se abra una válvula." },
    { es: "Recinto o espacio confinado", en: "Confined space", def: "Espacio con aberturas limitadas y mala ventilación natural, donde pueden acumularse contaminantes o faltar oxígeno, no pensado para estar dentro de forma continuada." },
    { es: "Límite inferior de inflamabilidad", en: "Lower flammable limit (LFL)", def: "Concentración mínima de vapor en el aire para que la mezcla pueda arder. El explosímetro mide el porcentaje de ese límite." },
    { es: "Explosímetro", en: "Combustible gas detector", def: "Medidor de lectura directa de atmósferas inflamables. Suele medir también el oxígeno." },
    { es: "Equipo de respiración autónomo", en: "Self-contained breathing apparatus (SCBA)", def: "Equipo que da aire propio a quien lo lleva. La NTP 340 lo exige para entrar a rescatar a alguien en una atmósfera con gas inerte." },
  ],
  quiz: [
    {
      kind: "choice",
      q: "Mantenimiento va a cambiar una junta en la línea de carga del reactor R-101. El mecánico llega con prisa y dice que el permiso ya lo firmará luego su encargado. ¿Qué haces?",
      options: [
        "Le dejas empezar si la línea está vacía y tú te quedas mirando",
        "Le dejas empezar y avisas después a tu jefa de turno por teléfono",
        "No entregas la línea hasta que el permiso tenga las firmas de las dos partes",
        "Firmas tú en nombre de su encargado para no retrasar el trabajo",
      ],
      answer: 2,
      explain: "Según la NTP 562, el responsable de ejecución no debe ordenar el inicio sin la autorización correctamente extendida, y lo esencial del sistema es la firma de las dos partes.",
    },
    {
      kind: "choice",
      q: "Un permiso para reparar una bomba se extendió por la mañana. Son las 14:10, ha entrado el turno de tarde y el trabajo sigue. ¿Qué dice la NTP 562?",
      options: [
        "El permiso no supera el turno: hay que renovarlo antes de continuar",
        "El permiso vale hasta que se acabe el trabajo, tarde lo que tarde",
        "Basta con que el mecánico avise de palabra al operador entrante",
        "El permiso vale una semana si no cambia el tipo de trabajo",
      ],
      answer: 0,
      explain: "La NTP 562 dice que la autorización no superará en ningún caso el turno de trabajo y que se renueva si la duración supera lo previsto o cambian las condiciones.",
    },
    {
      kind: "choice",
      q: "Revisas un permiso antes de entregar el equipo. Tiene lugar, descripción, riesgos, protecciones y firmas. ¿Qué dato de los que pide la NTP 562 falta?",
      options: [
        "El número de lote del último producto fabricado",
        "El nombre del fabricante del equipo y su año",
        "La marca de las herramientas que se van a usar",
        "La fecha, el periodo y el turno de validez",
      ],
      answer: 3,
      explain: "La validez (fecha, periodo y turno) es el primer apartado que la NTP 562 pide en la autorización. Sin ella nadie sabe cuándo deja de valer.",
    },
    {
      kind: "choice",
      q: "Para entregar la centrífuga CF-201, el electricista ha colgado una etiqueta de «no conectar» en el seccionador, sin candado. ¿Está consignada?",
      options: [
        "Sí, porque la etiqueta ya avisa a todo el mundo",
        "No: etiquetar sin bloquear no equivale a consignar",
        "Sí, si además se avisa por megafonía a la planta",
        "No, pero solo porque falta la firma en la etiqueta",
      ],
      answer: 1,
      explain: "La NTP 1117 dice expresamente que el simple etiquetado del dispositivo de corte, sin su bloqueo, no equivale a la consignación de la máquina.",
    },
    {
      kind: "choice",
      q: "¿En qué orden van las cuatro acciones de la consignación según la NTP 1117?",
      options: [
        "Separar, bloquear, disipar o retener la energía acumulada, verificar",
        "Bloquear, verificar, separar, disipar o retener la energía acumulada",
        "Verificar, separar, disipar o retener la energía acumulada, bloquear",
        "Disipar o retener la energía acumulada, separar, verificar, bloquear",
      ],
      answer: 0,
      explain: "Primero se separa de las fuentes de energía, luego se bloquean los dispositivos de separación, después se disipa o retiene la energía acumulada y por último se verifica.",
    },
    {
      kind: "choice",
      q: "El seccionador de la centrífuga está abierto y con candado. Al acercarte oyes que la cesta todavía gira. El mecánico quiere abrir la tapa ya. ¿Qué haces?",
      options: [
        "Le dejas abrir, porque sin corriente ya no hay peligro",
        "Le dejas abrir si se pone guantes y gafas de seguridad",
        "No se abre: queda energía por inercia hasta la parada total",
        "Quitas el candado un momento para frenar con el motor",
      ],
      answer: 2,
      explain: "La NTP 1117 cita los elementos que siguen moviéndose por inercia como energía acumulada. Hay que disiparla (frenos, parada total) y verificar antes de dar el equipo por consignado.",
    },
    {
      kind: "choice",
      q: "Dos mecánicos y un electricista van a trabajar en el mismo agitador. Solo hay un candado, el del electricista. ¿Qué es lo correcto?",
      options: [
        "Con un candado basta si los tres están en la misma zona",
        "El electricista deja su llave colgada junto al cuadro",
        "Se quita el candado y se deja solo la etiqueta de aviso",
        "Cada uno pone el suyo, con un adaptador de varios candados",
      ],
      answer: 3,
      explain: "La NTP 52 explicaba que el dispositivo debe admitir el candado de cada operario y que no puede accionarse hasta retirar el último; la NTP 1117 mantiene los dispositivos de uno o varios candados.",
    },
    {
      kind: "choice",
      q: "Antes de entrar en el reactor, el medidor marca 19 % de oxígeno con la ventilación en marcha. ¿Qué haces según la NTP 223?",
      options: [
        "Se entra, porque 19 % está muy cerca del 21 % del aire",
        "No se entra así: el oxígeno no debe ser inferior al 20,5 %",
        "Se entra un momento con una mascarilla contra el polvo",
        "Se entra si la persona aguanta bien la respiración",
      ],
      answer: 1,
      explain: "La NTP 223 fija que el oxígeno no debe ser inferior al 20,5 %; si no se consigue con aire fresco, el trabajo se hace con equipos respiratorios semiautónomos o autónomos.",
    },
    {
      kind: "choice",
      q: "Eres el vigilante en la boca del reactor. Tu compañero deja de contestar y lo ves caído en el fondo. No tienes equipo de respiración autónomo. ¿Qué haces?",
      options: [
        "Bajas rápido a por él aguantando la respiración",
        "Te asomas dentro para ver mejor qué le ha pasado",
        "Das la alarma y tiras del cable desde fuera, sin entrar",
        "Vas tú mismo a buscar ayuda a la sala de control",
      ],
      answer: 2,
      explain: "La NTP 340 indica que solo se penetra en la atmósfera peligrosa con equipo de respiración autónomo; si la víctima lleva arnés y cable, se la saca desde fuera cuanto antes y se pide ayuda.",
    },
    {
      kind: "choice",
      q: "Un reactor ha estado inertizado con nitrógeno y hay que entrar a inspeccionarlo. ¿Qué secuencia pide la NTP 340?",
      options: [
        "Cortar o desconectar el nitrógeno, ventilar con aire, medir en varios puntos",
        "Abrir la boca de hombre, esperar diez minutos y entrar sin más medidas",
        "Ventilar con oxígeno puro para recuperar antes el aire respirable",
        "Medir una vez en la boca de hombre y entrar si no huele a nada",
      ],
      answer: 0,
      explain: "La NTP 340 pide bloquear o desconectar las fuentes de gas inerte, ventilar con aire (nunca con oxígeno) y analizar la atmósfera en distintos puntos, repitiendo si hace falta. El nitrógeno no huele.",
    },
  ],
};
