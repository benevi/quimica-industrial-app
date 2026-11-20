import type { Lesson } from "./types";

const control: Lesson[] = [
  {
    slug: "medidas-de-proceso",
    level: 13,
    order: 1,
    title: "Medidas de proceso: temperatura, presión, nivel y caudal",
    titleEn: "Process measurements: temperature, pressure, level and flow",
    minutes: 18,
    summary: "Qué instrumentos miden las variables de planta y cómo saber si te puedes fiar de ellos.",
    body: `
### Temperatura (*temperature*)
- **Pt100 / RTD** (*Resistance Temperature Detector*): una resistencia de platino de 100 Ω a 0 °C cuyo valor sube con la temperatura. Precisa, la más usada en reactores.
- **Termopar** (*thermocouple*): dos metales distintos que generan un pequeño voltaje. Aguanta temperaturas muy altas.
- Va dentro de una **vaina** (*thermowell*) para poder sacarla sin abrir el equipo.

### Presión (*pressure*)
- **Manómetro** (*pressure gauge*): indicador local de aguja.
- **Transmisor de presión** (*pressure transmitter*): envía la señal al sistema de control.
- **Presión relativa** (bar g, *gauge*) y **absoluta** (bar a, *absolute*): bar a = bar g + 1,013. Un vacío de 200 mbar absolutos equivale a unos −0,81 bar g.

### Nivel (*level*)
- **Radar** o **ultrasonidos** desde arriba.
- **Presión diferencial** (*DP level*): la presión del líquido en el fondo indica la altura.
- **Células de carga** (*load cells*): pesan el reactor entero. Muy usadas para dosificar.
- **Mirilla** (*sight glass*) y **visor de nivel** para comprobación visual.

### Caudal (*flow*)
- **Electromagnético** (*magnetic flowmeter*): solo para líquidos conductores (agua, soluciones acuosas).
- **Coriolis**: mide directamente la **masa**; sirve para disolventes orgánicos. Muy usado para dosificar.
- **Vórtex**, **placa de orificio**, **rotámetro** (*rotameter*, tubo con flotador, lectura local).

### Otras medidas
**pH en línea**, **oxígeno** (para controlar la inertización), **conductividad**, **humedad**.

### Señal 4–20 mA
Muchos transmisores envían una corriente de 4 mA (cero de escala) a 20 mA (fondo de escala). Si la señal baja de 4 mA, el instrumento está **averiado o desconectado**: por eso no se usa 0 mA como cero.
Ejemplo: transmisor de 0–10 bar que envía 12 mA → (12 − 4) / 16 × 10 = 5 bar.

### Calibración (*calibration*)
Comparar el instrumento con un **patrón trazable** (*traceable standard*) y comprobar que el error está dentro de la **tolerancia**. Los instrumentos **críticos para GMP** (los que deciden la calidad: temperatura de reacción, báscula de carga) tienen un plan de calibración. Antes de usarlos se mira la **etiqueta de calibración**: si está caducada, no se usa y se avisa.
`,
    plant: `
La hoja pide "Pesar 85,0 kg ± 0,5 kg en la báscula B-05". Antes de pesar, el operador comprueba la etiqueta de calibración (válida hasta el mes próximo) y hace la **verificación diaria** con una pesa patrón de 50 kg: lee 50,02 kg, dentro de tolerancia. Lo anota y pesa.
`,
    batchRecord: `
- Identificación del instrumento (báscula, termómetro) y estado de calibración.
- Verificaciones diarias o de uso.
- Lecturas con unidades y cifras significativas tal como las da el instrumento.
`,
    terms: [
      { es: "Sonda Pt100", en: "Pt100 / RTD", def: "Sensor de temperatura de resistencia de platino." },
      { es: "Termopar", en: "Thermocouple", def: "Sensor de temperatura que genera un pequeño voltaje." },
      { es: "Transmisor", en: "Transmitter", def: "Instrumento que envía la medida al sistema de control." },
      { es: "Presión relativa / absoluta", en: "Gauge / absolute pressure", def: "Presión respecto a la atmósfera / respecto al vacío total." },
      { es: "Célula de carga", en: "Load cell", def: "Sensor que mide peso." },
      { es: "Caudalímetro Coriolis", en: "Coriolis flowmeter", def: "Caudalímetro que mide directamente la masa." },
      { es: "Calibración", en: "Calibration", def: "Comparación con un patrón trazable para conocer el error del instrumento. Corregirlo (ajustar) es una operación aparte." },
      { es: "Patrón trazable", en: "Traceable standard", def: "Referencia cuya exactitud está ligada a patrones nacionales o internacionales." },
    ],
    quiz: [
      {
        kind: "number",
        q: "Un transmisor de nivel de 0–150 cm envía 8 mA (escala 4–20 mA). ¿Qué nivel indica?",
        answer: 37.5,
        tolerance: 0.01,
        unit: "cm",
        explain: "(8 − 4) / 16 × 150 = 37,5 cm.",
      },
      {
        kind: "choice",
        q: "La etiqueta de calibración del termómetro está caducada. ¿Qué haces?",
        options: [
          "Usarlo igual",
          "No usarlo para registros GMP y avisar a tu responsable / metrología",
          "Quitar la etiqueta",
          "Cambiar la fecha",
        ],
        answer: 1,
        explain: "Un instrumento fuera de calibración no garantiza la medida. Manipular la etiqueta sería falsificar.",
      },
      {
        kind: "choice",
        q: "¿Qué caudalímetro mide directamente la masa y sirve para disolventes orgánicos?",
        options: ["Electromagnético", "Coriolis", "Rotámetro", "Manómetro"],
        answer: 1,
        explain: "El electromagnético necesita líquidos conductores; el Coriolis mide masa con cualquier líquido.",
      },
    ],
  },
  {
    slug: "pid-y-simbologia",
    level: 13,
    order: 3,
    title: "Diagramas P&ID y nomenclatura de instrumentos",
    titleEn: "P&ID diagrams and instrument tags (ISA 5.1)",
    minutes: 15,
    summary: "Cómo leer el 'mapa' de la planta y entender códigos como TIC-101 o PSV-205.",
    body: `
### Tipos de diagramas
- **Diagrama de bloques**: cada etapa del proceso es un rectángulo.
- **Diagrama de flujo de proceso** (*PFD, Process Flow Diagram*): equipos principales y corrientes, con caudales y temperaturas de diseño.
- **P&ID** (*Piping and Instrumentation Diagram*): **todas** las tuberías, válvulas, instrumentos y lazos de control. Es el documento de referencia para operar y para hacer mantenimiento.

### Códigos de instrumentos (norma ISA 5.1)
Formato: **letras + número de lazo**. La **primera letra** es la variable medida; las siguientes, la función.

| Primera letra | Variable | Letras siguientes | Función |
|---|---|---|---|
| T | Temperatura | I | Indicador |
| P | Presión | T | Transmisor |
| L | Nivel (*level*) | C | Controlador |
| F | Caudal (*flow*) | A | Alarma |
| W | Peso (*weight*) | V | Válvula |
| A | Análisis (pH, O₂) | S | Interruptor (*switch*) |
| S | Velocidad (*speed*) | E | Elemento primario (sensor) |
| Z | Posición (*position*) | Y | Relé o electroválvula |
| X | Sin clasificar (se usa para válvulas todo/nada: **XV**) | SO / SC | Interruptor de abierto / cerrado (*ZSO*, *ZSC*) |

Con **H** y **L** se indica alto (*high*) y bajo (*low*); **HH** y **LL**, muy alto y muy bajo.

Ejemplos:
- **TT-101**: transmisor de temperatura del lazo 101.
- **TIC-101**: indicador-controlador de temperatura (el que regula).
- **PSV-205**: válvula de seguridad de presión.
- **LAHH-310**: alarma de nivel muy alto.
- **FV-120**: válvula de control de caudal (*flow valve*): la primera letra es la variable del lazo (F, caudal) y la V indica que es la válvula. En muchas plantas la verás escrita **FCV-120**; es una costumbre extendida, pero la forma de la norma es FV.
- **XV-130**: válvula automática todo/nada; sus finales de carrera son **ZSO-130** (abierta) y **ZSC-130** (cerrada).

### Símbolos básicos
- **Círculo**: instrumento suelto. Sin raya: instalado **en campo**, junto al equipo. Con una **raya horizontal continua**: en un sitio al que llega el operador, como el panel o la sala de control. Con raya **discontinua**: detrás del panel, no accesible normalmente.
- **Círculo dentro de un cuadrado**: función del **sistema de control** (pantalla y control compartidos, como en un DCS). Es el símbolo que más verás en un P&ID moderno: el indicador o el controlador no es un aparato suelto, sino una pantalla del sistema.
- Las formas exactas cambian algo entre ediciones de la norma y entre empresas: cada P&ID trae una hoja de **leyenda** (*legend sheet*) que manda.
- Líneas continuas gruesas: tuberías de proceso. Líneas discontinuas: señales eléctricas.
- Cada equipo lleva su **código**: R-101 (reactor), P-101 (bomba), E-101 (intercambiador), T-101 o TK-101 (tanque), C-101 (centrífuga, aunque varía según la empresa).

### Por qué importa al operador
- Para **seguir una ruta** de transferencia o un procedimiento de aislamiento.
- Para identificar sin ambigüedad el instrumento del que hablas cuando avisas.
- Cualquier cambio físico en planta debe reflejarse en el P&ID mediante **control de cambios**: un P&ID desactualizado es un riesgo.
`,
    plant: `
El jefe de turno dice: "Comprueba el TI-102 de la camisa del R-101". En el P&ID localizas el lazo 102: un termómetro local en la salida de la camisa. Vas al reactor, lees 34 °C y lo comparas con el TT-101 del producto, que marca 25 °C en el DCS.
`,
    batchRecord: `
- Las instrucciones citan equipos e instrumentos por su código: "Ajustar TIC-101 a 60 °C", "Comprobar PI-103 ≤ 0,2 bar g".
`,
    terms: [
      { es: "P&ID", en: "Piping and Instrumentation Diagram", def: "Diagrama con todas las tuberías, válvulas e instrumentos." },
      { es: "PFD", en: "Process Flow Diagram", def: "Diagrama de flujo con los equipos y corrientes principales." },
      { es: "Lazo", en: "Loop", def: "Conjunto de sensor, controlador y elemento final que controla una variable." },
      { es: "Código de instrumento", en: "Instrument tag", def: "Identificación de un instrumento según la norma ISA 5.1 (TIC-101)." },
      { es: "Elemento final", en: "Final control element", def: "Lo que actúa sobre el proceso, normalmente una válvula de control." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "¿Qué es un PIC-201?",
        options: [
          "Una bomba",
          "Un indicador-controlador de presión del lazo 201",
          "Un tanque",
          "Una alarma de temperatura",
        ],
        answer: 1,
        explain: "P = presión, I = indicador, C = controlador.",
      },
      {
        kind: "choice",
        q: "En un P&ID, LAHH significa…",
        options: [
          "Nivel bajo",
          "Alarma de nivel muy alto",
          "Válvula de caudal",
          "Temperatura alta",
        ],
        answer: 1,
        explain: "L = nivel, A = alarma, HH = muy alto.",
      },
      {
        kind: "choice",
        q: "Se ha añadido una válvula en planta pero el P&ID no se ha actualizado. ¿Es un problema?",
        options: [
          "No, es solo papel",
          "Sí: el P&ID es la referencia para operar y aislar equipos; debe pasar por control de cambios",
          "Solo si la válvula es grande",
          "Solo en auditorías",
        ],
        answer: 1,
        explain: "Un P&ID desactualizado puede llevar a aislar mal un equipo o a errores de operación.",
      },
    ],
  },
  {
    slug: "lazos-de-control",
    level: 13,
    order: 5,
    title: "Lazos de control y controladores PID",
    titleEn: "Control loops and PID controllers",
    minutes: 15,
    summary: "Cómo el sistema mantiene sola una temperatura o una presión y qué significan SP, PV y OP.",
    body: `
### El lazo de control (*control loop*)
1. El **sensor** mide la variable: **PV** (*Process Variable*, valor real).
2. El **controlador** la compara con la **consigna**: **SP** (*Setpoint*).
3. Calcula una **salida**: **OP** o **OUT** (*Output*, en %), que mueve el **elemento final** (una válvula de vapor, de agua fría, un variador).
4. El proceso cambia, el sensor lo mide… y así continuamente: es un **lazo cerrado** (*closed loop*, *feedback*).

**Error** = SP − PV.

### Tipos de control
- **Todo/nada** (*on/off*): la válvula está abierta o cerrada. La variable oscila alrededor de la consigna.
- **PID**: el más habitual. Tres acciones:
  - **P, proporcional**: corrige más cuanto mayor es el error.
  - **I, integral**: corrige el error que se mantiene en el tiempo, hasta que desaparece.
  - **D, derivativa**: se anticipa si el error cambia rápido.
  Los parámetros los ajusta un especialista (*tuning*). El operador **no** los cambia.

### Modos de un controlador
| Modo | En inglés | Qué pasa |
|---|---|---|
| Automático | *Auto* | El controlador mueve la salida para seguir el SP |
| Manual | *Manual* | El operador fija la salida (%) directamente |
| Cascada | *Cascade* | El SP lo da otro controlador (por ejemplo, el de producto fija el de camisa) |

**Control en cascada en un reactor**: el controlador de temperatura del producto (maestro) le dice al de la camisa (esclavo) a qué temperatura debe ir la camisa. Responde mejor que un lazo simple.

### Señales de que algo va mal
- PV muy lejos del SP durante mucho tiempo con la salida al 100 % o al 0 %: falta capacidad de calor o frío, válvula atascada o sensor averiado.
- Oscilaciones fuertes: lazo mal ajustado o válvula con problemas.
- Un lazo en **manual** cuando debería estar en automático: nadie está corrigiendo.
`,
    plant: `
TIC-101 en cascada: SP de producto 60 °C, PV 52 °C y la salida de la camisa al 100 % desde hace 40 min. El vapor no llega a la camisa. El operador avisa y comprueba la válvula manual de entrada de vapor: estaba cerrada tras un mantenimiento.
`,
    batchRecord: `
- Consignas fijadas por el operador (SP) con hora, cuando la hoja lo pide.
- Cambios de modo (manual/automático) con motivo, si están permitidos.
- Gráficos de tendencia (*trends*) adjuntos de etapas críticas.
`,
    terms: [
      { es: "Variable de proceso", en: "Process variable (PV)", def: "Valor real medido." },
      { es: "Consigna", en: "Setpoint (SP)", def: "Valor que se quiere mantener." },
      { es: "Salida", en: "Output (OP)", def: "Señal del controlador al elemento final, en %." },
      { es: "Controlador PID", en: "PID controller", def: "Controlador con acción proporcional, integral y derivativa." },
      { es: "Lazo cerrado", en: "Closed loop / feedback", def: "Control que mide el resultado y corrige continuamente." },
      { es: "Control en cascada", en: "Cascade control", def: "Un controlador da la consigna a otro." },
      { es: "Ajuste de lazo", en: "Loop tuning", def: "Ajuste de los parámetros PID por un especialista." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "SP = 60 °C, PV = 52 °C y OP = 100 % desde hace mucho. ¿Qué sugiere?",
        options: [
          "Todo correcto",
          "Falta energía en la camisa: válvula cerrada o atascada, falta de vapor o sensor averiado",
          "El controlador está apagado",
          "El SP está mal escrito",
        ],
        answer: 1,
        explain: "El controlador pide el máximo pero la temperatura no llega: algo limita el calor.",
      },
      {
        kind: "choice",
        q: "¿Quién cambia los parámetros P, I y D de un lazo?",
        options: ["Cualquier operador", "Un especialista de control, con control de cambios", "Nadie nunca", "El laboratorio"],
        answer: 1,
        explain: "El ajuste afecta al comportamiento del proceso validado.",
      },
      {
        kind: "choice",
        q: "En modo manual…",
        options: [
          "El controlador sigue la consigna solo",
          "El operador fija directamente la salida y nadie corrige automáticamente",
          "El lazo está en cascada",
          "La válvula se cierra siempre",
        ],
        answer: 1,
        explain: "En manual el controlador no corrige: hay que vigilar la variable.",
      },
    ],
  },
  {
    slug: "dcs-scada-recetas",
    level: 13,
    order: 7,
    title: "DCS, PLC, SCADA y recetas",
    titleEn: "DCS, PLC, SCADA and batch recipes (ISA-88)",
    minutes: 15,
    summary: "Los sistemas que automatizan la planta y cómo se organiza una receta de lote.",
    body: `
### Los sistemas
- **PLC** (*Programmable Logic Controller*): ordenador industrial que controla una máquina o un equipo (una centrífuga, un secadero).
- **DCS** (*Distributed Control System*): sistema que controla toda la planta o un área grande, con muchos lazos y equipos coordinados.
- **SCADA** (*Supervisory Control and Data Acquisition*): software de supervisión que muestra y registra datos de PLC.
- **HMI** (*Human-Machine Interface*): la pantalla donde el operador ve el proceso y da órdenes.
- **Historiador** (*historian*): base de datos que guarda todas las medidas con hora. De ahí salen los gráficos que se adjuntan al lote.

### Recetas por lotes (ISA-88)
La norma **ISA-88** organiza la automatización de procesos por lotes en niveles:
- **Procedimiento** (*procedure*): el lote completo.
- **Procedimiento de unidad** (*unit procedure*): lo que se hace en un equipo (reacción en R-101).
- **Operación** (*operation*): una etapa (carga, reacción, destilación).
- **Fase** (*phase*): la acción básica (calentar, dosificar, agitar, inertizar).

La **receta maestra** (*master recipe*) es la aprobada. Cada lote ejecuta una **receta de control** (*control recipe*) copiada de ella. Los **parámetros** (temperaturas, tiempos, cantidades) están en la receta y no se cambian sin control de cambios.

### Interacción del operador
- **Arrancar** fases, **confirmar** pasos manuales (por ejemplo, "Carga de sólido realizada"), **responder a preguntas** del sistema.
- Las acciones quedan registradas con **usuario, fecha y hora**: es parte del registro del lote.
- **Usuario personal**: nunca se comparte contraseña ni se deja la sesión abierta para otro (ALCOA+: atribuible).

### GMP de los sistemas
Un sistema que controla o registra datos GMP es un **sistema informatizado** validado (EU GMP Anexo 11, GAMP 5): pruebas, control de acceso, *audit trail*, copias de seguridad. Lo verás a fondo en el bloque de Sistemas informáticos (niveles 18 a 21).
`,
    plant: `
El DCS ejecuta la operación "Reacción". Al llegar a la fase "Carga manual de sólido", se para y pide confirmación. El operador carga, escanea el código del saco y confirma con su usuario. El sistema sigue con la fase "Calentar a 60 °C".
`,
    batchRecord: `
- En lotes con receta automática, el registro del lote incluye el **informe de lote** (*batch report*) del DCS: fases, parámetros, alarmas y confirmaciones del operador.
- Si hay hoja en papel, se indica qué pasos hace el sistema y cuáles el operador.
`,
    terms: [
      { es: "PLC", en: "Programmable Logic Controller", def: "Controlador industrial programable para un equipo o máquina." },
      { es: "DCS", en: "Distributed Control System", def: "Sistema de control de planta con muchos lazos coordinados." },
      { es: "SCADA", en: "Supervisory Control and Data Acquisition", def: "Sistema de supervisión y adquisición de datos." },
      { es: "HMI", en: "Human-Machine Interface", def: "Pantalla de interacción entre operador y sistema." },
      { es: "Historiador", en: "Historian", def: "Base de datos con el historial de medidas del proceso." },
      { es: "Receta maestra", en: "Master recipe", def: "Receta aprobada de la que se copian las de cada lote." },
      { es: "Fase", en: "Phase (ISA-88)", def: "Acción básica de una receta automática: calentar, dosificar, agitar." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "Según ISA-88, 'calentar a 60 °C' dentro de una operación de reacción es una…",
        options: ["Procedimiento", "Fase", "Planta", "Receta maestra"],
        answer: 1,
        explain: "La fase es la acción básica de la receta.",
      },
      {
        kind: "choice",
        q: "Un compañero te pide que confirmes un paso en el DCS con tu usuario porque él no tiene sesión. ¿Qué haces?",
        options: [
          "Confirmarlo",
          "No: cada uno confirma solo lo que ha hecho con su propio usuario",
          "Darle tu contraseña",
          "Dejar tu sesión abierta",
        ],
        answer: 1,
        explain: "El registro debe ser atribuible a quien hizo la acción (ALCOA+).",
      },
      {
        kind: "choice",
        q: "¿Dónde se guardan las medidas con hora que luego se adjuntan como gráficos al lote?",
        options: ["En el PLC solo", "En el historiador", "En el P&ID", "En la FDS"],
        answer: 1,
        explain: "El historiador registra las variables en el tiempo.",
      },
    ],
  },
  {
    slug: "alarmas-y-enclavamientos",
    level: 13,
    order: 9,
    title: "Alarmas, enclavamientos y sistemas de seguridad",
    titleEn: "Alarms, interlocks and safety instrumented systems",
    minutes: 15,
    summary: "Cómo responde la planta cuando algo se sale de lo normal y por qué nunca se puentea una protección.",
    body: `
### Alarmas (*alarms*)
Avisan al operador de que una variable está fuera de lo normal y **requiere una acción**.
- **Prioridad** (*priority*): alta, media, baja. Atiende primero las de mayor prioridad.
- Pasos: **reconocer** (*acknowledge*) la alarma, **diagnosticar**, **actuar** según el procedimiento de respuesta, y comprobar que vuelve a la normalidad.
- Reconocer no es resolver: una alarma reconocida pero activa sigue indicando un problema.
- Demasiadas alarmas a la vez (*alarm flood*) y alarmas que saltan constantemente son peligrosas porque hacen que se ignoren. La norma **ISA-18.2** trata de cómo gestionarlas.

### Enclavamientos (*interlocks*)
Lógica automática que **impide** una acción o **lleva el equipo a estado seguro** sin esperar al operador. Ejemplos:
- No se puede arrancar la centrífuga si la tapa está abierta.
- Si el O₂ en el reactor supera el límite, se bloquea la carga de sólidos.
- Si la temperatura supera el máximo, se cierra la válvula de adición.
- No se puede abrir la válvula de fondo si el reactor está a presión.

### Sistemas instrumentados de seguridad (*SIS, Safety Instrumented System*)
Protección independiente del control normal, diseñada según **IEC 61511** con un nivel de integridad **SIL** (*Safety Integrity Level*). Actúa como última barrera instrumentada antes de las protecciones mecánicas (PSV, discos de ruptura).

### Capas de protección
1. Diseño del proceso.
2. Control básico (DCS).
3. Alarmas y respuesta del operador.
4. Enclavamientos / SIS.
5. Protección mecánica (PSV, disco de ruptura).
6. Contención y respuesta a emergencias.

### Puentes (*bypass / override*)
Anular un enclavamiento o una alarma **solo** está permitido con un **permiso** formal, autorizado, con medidas alternativas y tiempo limitado. Puentear por comodidad elimina una capa de protección: es la causa de muchos accidentes graves.
`,
    plant: `
Salta "TAHH-101: temperatura muy alta en R-101". El enclavamiento cierra la válvula de adición automáticamente. El operador reconoce la alarma, comprueba que el frío está al máximo, avisa al jefe de turno y registra la hora. No se reanuda la adición hasta que la temperatura vuelve al rango y el responsable lo autoriza.
`,
    batchRecord: `
- Alarmas ocurridas durante el lote (del informe del DCS) y acciones tomadas.
- Desviaciones abiertas por alarmas críticas.
- Si hubo un puente autorizado: número de permiso.
`,
    terms: [
      { es: "Alarma", en: "Alarm", def: "Aviso de que una variable está fuera de lo normal y requiere acción." },
      { es: "Reconocer", en: "Acknowledge", def: "Indicar al sistema que has visto la alarma; no la resuelve." },
      { es: "Enclavamiento", en: "Interlock", def: "Lógica automática que impide una acción o lleva al estado seguro." },
      { es: "Sistema instrumentado de seguridad", en: "Safety Instrumented System (SIS)", def: "Sistema independiente que protege contra peligros graves." },
      { es: "Nivel de integridad de seguridad", en: "Safety Integrity Level (SIL)", def: "Medida de la fiabilidad exigida a una función de seguridad." },
      { es: "Puente / anulación", en: "Bypass / override", def: "Desactivación temporal de una protección; solo con permiso formal." },
      { es: "Avalancha de alarmas", en: "Alarm flood", def: "Muchas alarmas a la vez que saturan al operador." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "Reconocer una alarma significa que…",
        options: [
          "El problema está resuelto",
          "Has visto la alarma; aún debes diagnosticar y actuar",
          "La alarma se elimina para siempre",
          "Se para la planta",
        ],
        answer: 1,
        explain: "Reconocer solo confirma que la has visto.",
      },
      {
        kind: "choice",
        q: "Un enclavamiento impide arrancar la centrífuga y tienes prisa. ¿Qué haces?",
        options: [
          "Puentearlo",
          "Averiguar la causa y avisar; solo se anula con permiso formal autorizado",
          "Desconectar el sensor",
          "Pedir a un compañero que lo puentee",
        ],
        answer: 1,
        explain: "Puentear por comodidad elimina una protección y es causa de accidentes graves.",
      },
      {
        kind: "choice",
        q: "¿Cuál es la última barrera mecánica contra una sobrepresión?",
        options: ["La alarma", "La PSV o el disco de ruptura", "El P&ID", "El historiador"],
        answer: 1,
        explain: "Las protecciones mecánicas actúan aunque fallen el control y los enclavamientos.",
      },
    ],
  },
];

// Las lecciones «a fondo» van cada una en su archivo nivel13-tema.ts.
export const nivel13: Lesson[] = [...control];
