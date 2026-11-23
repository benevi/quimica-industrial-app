import type { Lesson } from "./types";

export const csvAFondo: Lesson = {
  slug: "validacion-de-sistemas-a-fondo",
  level: 21,
  order: 2,
  title: "Validación de sistemas informatizados a fondo: el enfoque por riesgo",
  titleEn: "Computerised system validation in depth: the risk-based approach",
  minutes: 38,
  summary:
    "Qué significa validar un sistema informatizado, en qué se diferencia de probar software y de cualificar un equipo, cómo decide el riesgo qué se valida y cuánto (con un AMFE resuelto), las categorías de software de GAMP 4, el papel del proveedor, la guía CSA de la FDA, las hojas de cálculo y lo que te toca a ti como usuario.",
  body: `
En [Validación de sistemas informatizados (GAMP 5)](/leccion/validacion-de-sistemas) viste la idea general y en [Validar un sistema paso a paso: del URS al informe](/leccion/ciclo-de-vida-validacion), los documentos. Aquí verás la pregunta de fondo: **por qué unos sistemas se validan con muchas pruebas firmadas y otros con muy pocas**, y quién lo decide.

### Qué significa validar
Un **sistema informatizado** (*computerised system*), según el anexo 11 de las normas GMP europeas (EudraLex, volumen 4), es un conjunto de software y hardware que juntos cumplen ciertas funciones. La guía PI 011-3 de PIC/S (la organización que agrupa a las inspecciones farmacéuticas de muchos países) lo dibuja más amplio: el ordenador, **más** el proceso controlado, **más** su entorno, con personas y procedimientos.

**Validar** es demostrar, con pruebas documentadas, que el sistema hace lo que debe, de forma fiable, **para su uso previsto** (*intended use*). La norma estadounidense 21 CFR Part 11, en su apartado 11.10(a), dice para qué: asegurar la exactitud, la fiabilidad, el funcionamiento previsto constante y la capacidad de detectar registros no válidos o alterados.

Tres palabras mandan:

- **Documentadas.** Lo que no queda documentado no se puede demostrar.
- **Fiable.** No basta con que funcione el día de la demostración.
- **Uso previsto.** No se valida «el programa», sino lo que tu planta hace con él.

### Probar no es validar: lo que ya sabes de desarrollo web
Tú ya has escrito tests. La PI 011-3 (12.1) recoge los tres niveles que conoces: unitarias, de integración y de aceptación del cliente. ¿Qué añade la validación?

| En desarrollo web | En validación GMP |
|---|---|
| Los tests los escribe y los mira el equipo de desarrollo | Las pruebas contra los requisitos de usuario son responsabilidad de la empresa usuaria (PI 011-3, nota 22) |
| Pasa el CI y se despliega | Hay una aceptación formal y un paso controlado a producción (PI 011-3, 13.6) |
| El log del CI se borra a los días | La evidencia se guarda como registro GMP: quién probó, cuándo y con qué resultado |
| Se prueba el código | Se prueba el sistema **en su uso**: con la receta, los usuarios y los datos de la planta |
| Un fallo es un *bug* en el *backlog* | Un fallo es una incidencia de prueba que se resuelve antes de aceptar |

La PI 011-3 lo dice en el 7.1: no se puede atribuir un alto nivel de confianza a un sistema basándose **solo** en pruebas que confirman que el software funciona; la calidad se construye desde el desarrollo. En el 13.3 añade que, en sistemas complejos, las pruebas de cualificación dan una confianza **limitada** sobre el código oculto. Por eso importa tanto el proveedor.

La guía de la FDA sobre integridad de datos (2018, pregunta 3) da un ejemplo de desarrollador: cualificar la plataforma del MES **no** demuestra que una receta concreta creada en él calcule bien. Es saber que el *framework* funciona sin saber si tu aplicación calcula bien el carrito. Cada flujo de trabajo GMP es un uso previsto que se comprueba.

### Validar un sistema y cualificar un equipo
En [Cualificación y validación a fondo](/leccion/validacion-a-fondo) viste la cualificación de equipos con el anexo 15: IQ (instalado según el diseño aprobado), OQ (funciona en los intervalos de operación previstos) y PQ (rinde de forma eficaz y reproducible con el proceso aprobado).

Con los sistemas informatizados se usan las mismas siglas, pero el principio del anexo 11 separa dos cosas: **la aplicación se valida y la infraestructura informática se cualifica**. Servidor, red y sistema operativo se cualifican (están instalados como se diseñó); el programa que hace el trabajo GMP se valida (hace lo que la planta necesita). El anexo 15 remite al anexo 11 para estos sistemas.

Ejemplo: el reactor ficticio R-105 tiene su IQ, OQ y PQ como equipo. Su sistema de control es otra cosa: hay que demostrar que la consigna llega al lazo, que el enclavamiento corta la adición cuando debe y que la tendencia guarda los datos sin huecos.

### Qué se valida y con qué profundidad
El apartado 1 del anexo 11 es la clave de esta lección: la gestión de riesgos se aplica en todo el ciclo de vida, pensando en el paciente, la integridad de datos y la calidad del producto, y **la extensión de la validación** se decide con una evaluación de riesgos justificada y documentada. ICH Q7, la guía GMP de los principios activos (la de tu planta), dice lo mismo en el 5.40: la profundidad y el alcance de la validación dependen de la diversidad, la complejidad y la criticidad de la aplicación.

El primer filtro es el **impacto GMP**. La PI 041-1 de PIC/S pide un inventario de los sistemas con su función, su criticidad (por ejemplo, impacto GMP directo, indirecto o ninguno) y su estado de validación. Como críticos cita, entre otros, los que controlan el estado de los materiales, los que controlan procesos críticos, los que generan datos de la hoja de producción y los que intervienen en la liberación. La guía de la FDA de 2003 sobre Part 11 pone el ejemplo contrario: validar no es importante para un procesador de textos que solo se usa para redactar procedimientos.

Después se baja de nivel, porque dentro de un sistema no todas las funciones pesan igual. ICH Q9(R1), en su anexo II, cita la gestión de riesgos para fijar la extensión de la validación: parámetros críticos, requisitos y diseño, revisión de código, extensión y métodos de prueba, y fiabilidad de registros y firmas electrónicos.

### El AMFE aplicado a un sistema: un ejemplo resuelto
En [Control de cambios y gestión de riesgos a fondo](/leccion/cambios-y-riesgos-a-fondo) tienes el proceso de ICH Q9(R1) y un AMFE de una carga de sólido; aquí lo aplicamos a un sistema. El **AMFE** (*FMEA, Failure Mode and Effects Analysis*) evalúa, según el anexo I.2 de ICH Q9(R1), los modos de fallo posibles y su efecto probable; con gravedad, probabilidad y detectabilidad pasa a ser FMECA (I.3), que da una puntuación para ordenar los fallos.

ICH Q9(R1) no fija ninguna fórmula ni escala. La nota técnica NTP 679 del INSST explica el método en español: el **índice de prioridad de riesgo** (IPR, que también verás como NPR o *RPN, Risk Priority Number*) es el producto de los tres factores, y usa escalas del 1 al 10. Ojo con la detección: cuanto **peor** se detecta un fallo, **más alta** es su nota.

> NPR = G × F × D (gravedad × frecuencia × detección)

Sistema ficticio: el terminal de pesada TP-12, una balanza con su programa de pesada que envía el peso al MES. Escala de 1 a 10, valores de ejemplo; el NPR máximo es 10 × 10 × 10 = 1000.

| N.º | Modo de fallo de la función | G | F | D | NPR |
|---|---|---|---|---|---|
| 1 | Acepta un peso fuera de tolerancia sin bloquear | 8 | 3 | 7 | 168 |
| 2 | Envía al MES el peso con la unidad equivocada | 9 | 2 | 4 | 72 |
| 3 | Asigna el peso a otra orden de proceso | 9 | 3 | 5 | 135 |
| 4 | Pierde la conexión y el peso no llega al MES | 5 | 4 | 2 | 40 |
| 5 | El ticket impreso sale ilegible | 3 | 4 | 2 | 24 |
| 6 | No descuenta la tara | 7 | 2 | 6 | 84 |

Cuenta del fallo 1: 8 × 3 = 24 y 24 × 7 = 168. Criterio de este ejemplo: se actúa sobre todo NPR de 100 o más y sobre toda gravedad de 9 o más. Entran los fallos 1, 3 (los dos por NPR) y 2 (por gravedad, aunque su NPR sea 72).

| N.º | Control y prueba | G | F | D | NPR nuevo |
|---|---|---|---|---|---|
| 1 | Bloqueo configurado fuera de tolerancia; prueba guionizada de los límites justo dentro y justo fuera | 8 | 1 | 2 | 16 |
| 2 | Unidad fijada en el dato maestro y comprobación de rango en el MES; prueba guionizada de la interfaz | 9 | 1 | 2 | 18 |
| 3 | Escaneo obligatorio de la orden y del recipiente; prueba guionizada con una orden equivocada | 9 | 2 | 2 | 36 |

La gravedad no baja: pesar mal sigue siendo igual de grave. Bajan la frecuencia y la detección. Los fallos 4, 5 y 6 quedan por debajo del criterio y se cubren con pruebas más ligeras, como desconectar el cable durante una pesada y ver qué pasa. Ese es el enfoque por riesgo: **las pruebas más rigurosas van donde el AMFE lo dice**. Y el anexo 11 (4.7) pide considerar justo eso: límites de parámetros y de datos, y gestión de errores.

### Las categorías de software de GAMP 4
**GAMP** (*Good Automated Manufacturing Practice*) es una guía de pago de la asociación ISPE. Solo citamos lo que reproduce gratis, con permiso, la PI 011-3 de PIC/S (2007, aún en su lista de publicaciones): la tabla de categorías de **GAMP 4**, que orienta la estrategia de validación:

| Cat. | Tipo | Lo que dice la tabla | Ejemplo ficticio de planta |
|---|---|---|---|
| 1 | Sistema operativo | Registrar la versión; se pone a prueba indirectamente al probar la aplicación | El sistema operativo del servidor del historiador HIS-01 |
| 2 | *Firmware* | No configurable: registrar versión, calibrar y verificar frente a los requisitos. Configurable: además, registrar la configuración. A medida: como la 5 | La balanza BL-204 y el medidor de oxígeno AO-3 |
| 3 | Paquetes de software estándar | Registrar versión y configuración del entorno, verificar frente a los requisitos; plantearse auditar al proveedor si es crítico y complejo | El programa del valorador Karl Fischer KF-02, usado tal como viene |
| 4 | Paquetes configurables | Registrar versión y configuración, verificar frente a los requisitos; normalmente auditar al proveedor si es crítico y complejo; lo programado a medida, como la 5 | El MES y el SCADA de la planta, configurados con sus recetas y pantallas |
| 5 | Software a medida | Auditar al proveedor y validar el sistema completo | Un programa de etiquetado hecho por encargo para la planta |

La PI 011-3 (15.2) avisa: muchos sistemas abarcan varias categorías, todo sistema crítico necesita un enfoque global por riesgo y, si algo no encaja en la tabla, decide el criterio de la empresa, que es lo que mirará el inspector. La tabla no habla de hojas de cálculo.

Después vino GAMP 5 (la guía CSA de la FDA cita su segunda edición). Es de pago y no hemos podido leer si cambió las categorías; la tabla de la lección corta del nivel no tiene la 2. Si en tu planta ves otras, manda tu procedimiento.

### El proveedor: aprovechar su trabajo sin fiarse a ciegas
Casi ningún sistema de planta se programa en casa. El anexo 11 lo regula así:

- **3.1** Si un tercero suministra, instala, configura, integra, valida, mantiene (también por acceso remoto) o modifica el sistema, tiene que haber un **acuerdo formal** con sus responsabilidades. El departamento de informática propio se trata igual.
- **3.2** La competencia y la fiabilidad del proveedor son claves al elegirlo; si hace falta **auditarlo** se decide con una evaluación de riesgos.
- **3.3** La documentación de los productos comerciales estándar (*COTS, commercial off-the-shelf*) la **revisa el usuario** para comprobar que cubre sus requisitos.
- **4.5** El usuario toma todas las medidas razonables para asegurarse de que el sistema se desarrolló con un sistema de calidad adecuado, y evalúa al proveedor.

ICH Q7 (5.42) añade que el software comercial ya cualificado no necesita el mismo nivel de pruebas. La PI 011-3 (11.5) propone cuestionarios, auditorías compartidas y grupos de usuarios, y avisa de que, para un sistema crítico, el sistema de calidad certificado del proveedor por sí solo difícilmente será la última palabra. Y la PI 041-1 (9.3) cierra la puerta al atajo: no hay que **confiar solo** en el paquete de cualificación del proveedor; la validación incluye pruebas propias de integridad de datos en el uso normal.

En tu mundo: es como fiarte de los tests de una librería de npm muy usada, pero hacer tú las pruebas de integración con tus datos.

### La FDA y la garantía del software (CSA)
Oirás hablar mucho de **CSA** (*Computer Software Assurance*). La página oficial de la FDA, a 21 de noviembre de 2026, dice:

- La guía vigente es «Computer Software Assurance for Production and Quality Management System Software», **final**, emitida el **3 de febrero de 2026**. Sustituye a la versión final del 24 de septiembre de 2025.
- La han preparado los centros de **productos sanitarios** (CDRH) y de productos biológicos (CBER), en consulta con el de medicamentos (CDER).
- Su alcance es el software usado en la **producción o en el sistema de gestión de calidad de productos sanitarios**. No es una guía para fabricantes de medicamentos ni de principios activos, y como todas las guías de la FDA, no es vinculante.

Importa porque sus ideas encajan con el enfoque por riesgo y se citan mucho en la industria:

- Partir del **uso previsto** de cada función.
- Separar las funciones de **alto riesgo de proceso** (por ejemplo, las que mantienen parámetros como temperatura o presión, o deciden si un producto es aceptable con poca o ninguna revisión humana) de las que no lo son (por ejemplo, registrar datos solo para vigilarlos).
- Elegir la prueba según el riesgo. **Guionizadas** (*scripted testing*): casos escritos de antemano. **No guionizadas** (*unscripted testing*): por escenarios, adivinación de errores o exploratorias, en las que el probador diseña la prueba sobre la marcha. Para alto riesgo sugiere guionizadas o mezcla; para lo demás admite las no guionizadas.
- **Aprovechar** el trabajo del proveedor y los controles que ya tiene el proceso.
- Un registro proporcionado: uso previsto, resultado del análisis de riesgo, qué se probó, problemas encontrados, conclusión, quién y cuándo y, si hace falta, aprobación firmada; sin más evidencia de la necesaria para el riesgo.

CSA no elimina la evidencia: la concentra donde está el riesgo. En una planta europea de principios activos siguen mandando el anexo 11 e ICH Q7. El borrador de anexo 11 de 2025, que dice aplicarse también a los principios activos, va en la misma línea (4.3: la estrategia y el esfuerzo de validación se fijan según el uso previsto y los riesgos), pero sigue siendo un borrador: ver [Part 11, anexo 11 y sus borradores a fondo](/leccion/normas-integridad-a-fondo).

### Hojas de cálculo y sistemas pequeños
La hoja de cálculo es el caso típico de planta. La guía CSA lo explica así: si una hoja comercial solo sirve para **anotar** lecturas, puede bastar con evaluar al proveedor e instalarla y configurarla bien; si lleva **fórmulas propias** que calculan datos de producción o calidad, aparecen riesgos nuevos y puede hacer falta validarla. La guía de la FDA de 2018 llama **dinámico** al registro de una hoja cuyas fórmulas o entradas se pueden cambiar.

Un caso de prueba de la hoja ficticia HC-207, que calcula la masa de reactivo a cargar corrigiendo por su riqueza (valores de ejemplo):

> masa a cargar = masa teórica al 100 % / (riqueza en % / 100)

| Caso | Entradas | Resultado esperado (calculado aparte) | Qué prueba |
|---|---|---|---|
| 1 | 120,0 kg; 98,5 % | 120,0 / 0,985 = 121,83 kg | Cálculo normal |
| 2 | 120,0 kg; 100,0 % | 120,00 kg | Límite superior válido |
| 3 | 120,0 kg; 101 % | Mensaje de error, sin resultado | Dato fuera de rango |
| 4 | Celda de fórmula | No se puede escribir | Protección de la hoja |

El resultado esperado se calcula **fuera** de la hoja. Si la fórmula dividiera por 98,5 en vez de por 0,985, daría 1,22 kg y el caso 1 lo cazaría.

Dos ideas más para sistemas sencillos. La PI 041-1 (8.9): balanzas, pH-metros y equipos que no guardan datos e imprimen directamente dan un original en papel que firma y fecha quien lo genera, con el lote o la muestra, y se adjunta al registro. La PI 011-3 (13.3): en algunos PLC y sistemas de lógica básica la prueba funcional puede bastar. Pequeño no es sin control: es control proporcionado.

### Tu papel: usuario clave, pruebas y fallos
El anexo 11 (apartado 2) pide colaboración entre dueño del proceso, dueño del sistema, Personas Cualificadas e informática. Tú entras como **usuario clave** (*key user*):

- **Requisitos.** Sabes cómo se trabaja de verdad: con guantes, con prisa, de noche. Eso se escribe como requisito.
- **Pruebas de aceptación.** Según la PI 011-3 (4.8), la PQ es la prueba de aceptación del usuario en su entorno, contra los requisitos de usuario. Ejecutas guiones, anotas lo que **de verdad** ves y firmas. Un fallo se anota como fallo: no se repite hasta que salga bien sin dejar rastro.
- **Formación.** La PI 011-3 (15.3) incluye entre los registros de validación los de formación de los operadores. Lo normal es no usar el sistema sin la formación registrada que pida tu procedimiento.
- **Fallos en el uso.** El anexo 11 (13) pide comunicar y evaluar **todas** las incidencias, no solo las caídas y los errores de datos. ICH Q7 (5.46) pide registrar e investigar las que puedan afectar a la calidad o a la fiabilidad de los registros. Un cálculo raro o una pantalla que no refresca se avisan aunque parezcan poco.

Qué pasa luego con ellos lo ves en [Mantener un sistema validado: cambios, incidencias y revisión periódica](/leccion/sistemas-en-operacion).

En planta manda siempre el procedimiento vigente (SOP): la categoría de cada sistema, la escala de riesgo y qué pruebas te tocan los fija tu empresa en sus procedimientos.
`,
  plant: `
La planta (ficticia) va a sustituir la hoja de cálculo de cargas HC-207 por una función nueva del MES MES-1 que calcula la masa de reactivo según la riqueza del lote. Te nombran usuario clave junto a una compañera de laboratorio.

En la reunión de riesgos repasáis las funciones. El cálculo de la carga y el bloqueo de lotes no liberados salen con gravedad máxima: llevarán pruebas guionizadas con capturas firmadas. El informe de consumo de nitrógeno del turno, que nadie usa para decidir sobre el lote, queda en una prueba exploratoria con un registro breve. El proveedor aporta sus pruebas de la plataforma; el equipo de validación revisa que cubran los requisitos, pero las recetas de la planta las prueba la planta.

En el entorno de validación ejecutas el guion del cálculo: 120,0 kg al 98,5 % deben dar 121,83 kg, y el MES da 121,83 kg. Pasa. En el caso de riqueza 101 % el MES acepta el dato y calcula 118,81 kg en lugar de dar error. Anotas el resultado obtenido tal cual, marcas «no pasa», adjuntas la captura y avisas al responsable de la prueba. Se abre una incidencia de prueba, el proveedor configura el límite de entrada en una versión nueva y repites el caso: ahora el MES muestra el error. Pasa.

Antes del arranque recibes la formación registrada. La hoja HC-207 se retira según el procedimiento y deja de estar en la carpeta de la planta.
`,
  batchRecord: `
- En la hoja de producción o en el informe del MES aparece la **identificación y versión** del sistema validado que hizo el cálculo o registró el dato.
- Si usas una hoja de cálculo validada, anotas su **código y versión** (por ejemplo, HC-207 v3, valor de ejemplo) y se guarda o imprime el resultado según el procedimiento; nunca usas una copia propia.
- Los tickets de balanzas y equipos que imprimen directamente se **firman, fechan e identifican** con el lote y se adjuntan a la hoja.
- Si un sistema falla durante el lote (cálculo raro, dato que no llega, pantalla congelada), anotas qué viste, la hora y a quién avisaste; la referencia de la incidencia o desviación queda unida al lote.
- Durante una validación, lo que firmas en los guiones de prueba son los **resultados obtenidos reales**, con su evidencia, no los esperados.
`,
  terms: [
    { es: "Sistema informatizado", en: "Computerised system", def: "Conjunto de software y hardware que cumple funciones GMP; en sentido amplio incluye el proceso controlado, las personas y los procedimientos." },
    { es: "Uso previsto", en: "Intended use", def: "Lo que la planta hace realmente con un sistema o una función; es lo que se valida." },
    { es: "Validación de sistemas informatizados", en: "Computerised system validation (CSV)", def: "Demostración documentada de que un sistema hace lo que debe de forma fiable para su uso previsto." },
    { es: "Cualificación de la infraestructura", en: "IT infrastructure qualification", def: "Verificación documentada de que servidores, redes y sistemas operativos están instalados y funcionan como se diseñó." },
    { es: "Inventario de sistemas", en: "System inventory", def: "Lista de los sistemas con su función, su criticidad GMP y su estado de validación." },
    { es: "Análisis modal de fallos y efectos", en: "Failure Mode and Effects Analysis (FMEA)", def: "Herramienta que estudia cómo puede fallar cada función y qué efecto tendría, para priorizar controles y pruebas." },
    { es: "Número de prioridad de riesgo", en: "Risk Priority Number (RPN)", def: "Producto de gravedad, frecuencia y detección en un AMFE; sirve para ordenar los fallos." },
    { es: "Categoría de software", en: "Software category", def: "Clasificación de GAMP según el tipo de software (sistema operativo, firmware, estándar, configurable, a medida) que orienta la validación." },
    { es: "Software comercial estándar", en: "Commercial off-the-shelf (COTS)", def: "Software que se vende ya hecho y cuya idoneidad respalda un amplio número de usuarios." },
    { es: "Software a medida", en: "Bespoke / custom software", def: "Programa diseñado individualmente para un proceso concreto de una empresa." },
    { es: "Garantía del software", en: "Computer Software Assurance (CSA)", def: "Enfoque de una guía de la FDA para software de producción y calidad de productos sanitarios que ajusta las pruebas al riesgo." },
    { es: "Prueba no guionizada", en: "Unscripted testing", def: "Prueba en la que el probador no sigue pasos escritos de antemano, como la exploratoria o por escenarios." },
    { es: "Usuario clave", en: "Key user", def: "Persona del proceso que aporta requisitos, ejecuta pruebas de aceptación y forma a sus compañeros." },
  ],
  quiz: [
    {
      kind: "choice",
      q: "El equipo de informática dice que el MES ya está validado porque la plataforma pasó todas las pruebas del proveedor. Se va a crear una receta nueva con cálculos de carga. ¿Qué es correcto?",
      options: [
        "La receta nueva no necesita nada, porque la plataforma ya pasó sus pruebas",
        "Basta con que el proveedor firme un certificado de que su plataforma es fiable",
        "La receta es un uso previsto nuevo y sus pasos y cálculos se comprueban también",
        "Solo hay que validarla si un inspector lo pide en la próxima auditoría GMP",
      ],
      answer: 2,
      explain: "La guía de la FDA de 2018 lo explica con este ejemplo: cualificar la plataforma del MES no demuestra que una receta concreta calcule bien. Cada flujo de trabajo GMP es un uso previsto que se comprueba.",
    },
    {
      kind: "choice",
      q: "Según el principio del anexo 11, ¿qué se valida y qué se cualifica?",
      options: [
        "Se valida la aplicación y se cualifica la infraestructura informática",
        "Se cualifica la aplicación y se valida la infraestructura informática",
        "Se validan los dos por igual y con los mismos protocolos de prueba",
        "Solo se cualifica el servidor; la aplicación ya la prueba el proveedor",
      ],
      answer: 0,
      explain: "El anexo 11 dice: la aplicación debe validarse y la infraestructura informática (servidores, red, sistema operativo) debe cualificarse.",
    },
    {
      kind: "number",
      q: "En el AMFE de un sistema, un modo de fallo tiene gravedad 7, frecuencia 4 y detección 5 (escala de 1 a 10). ¿Cuál es su número de prioridad de riesgo?",
      answer: 140,
      tolerance: 0.001,
      unit: "",
      explain: "NPR = G × F × D = 7 × 4 × 5 = 28 × 5 = 140.",
    },
    {
      kind: "number",
      q: "Un fallo tiene gravedad 8, frecuencia 3 y detección 6. Se añade una comprobación automática y la detección pasa a 2, sin cambiar lo demás. ¿Cuál es el NPR nuevo?",
      answer: 48,
      tolerance: 0.001,
      unit: "",
      explain: "Antes: 8 × 3 × 6 = 144. Después: 8 × 3 × 2 = 48. La gravedad no cambia; baja la detección.",
    },
    {
      kind: "choice",
      q: "En un AMFE con escala del 1 al 10, ¿qué significa una nota de detección 9 para un fallo?",
      options: [
        "Que el fallo se descubre casi siempre antes de que llegue a hacer daño",
        "Que el fallo es casi imposible de descubrir a tiempo con los controles actuales",
        "Que el fallo ocurre casi en cada lote y por eso se detecta con mucha facilidad",
        "Que el fallo es muy grave y puede llegar a dañar al paciente o al producto",
      ],
      answer: 1,
      explain: "En el AMFE la detección va al revés que las otras notas: cuanto peor se detecta el fallo, más alta es la nota y más sube el NPR (NTP 679 del INSST).",
    },
    {
      kind: "choice",
      q: "Según la tabla de GAMP 4 que reproduce la PI 011-3, ¿en qué categoría encaja el MES de la planta configurado con sus recetas y pantallas?",
      options: [
        "Categoría 1, porque funciona sobre un servidor con su sistema operativo",
        "Categoría 2, porque lleva firmware dentro de los terminales de planta",
        "Categoría 3, porque es un paquete comercial que se usa tal como viene",
        "Categoría 4, paquete configurable, con lo programado a medida como la 5",
      ],
      answer: 3,
      explain: "Es un paquete comercial configurado para la planta: categoría 4. La tabla dice que cualquier programación a medida dentro de él se gestiona como categoría 5.",
    },
    {
      kind: "choice",
      q: "La guía Computer Software Assurance de la FDA (versión de febrero de 2026), ¿a qué software se aplica?",
      options: [
        "Al software de producción y calidad de los fabricantes de productos sanitarios",
        "A todo el software de las plantas europeas de principios activos farmacéuticos",
        "Solo al software que funciona como producto sanitario en sí mismo",
        "A cualquier programa informático que se venda en los Estados Unidos",
      ],
      answer: 0,
      explain: "Su alcance es el software usado en la producción o el sistema de gestión de calidad de productos sanitarios. Excluye el software que es producto sanitario y no es vinculante.",
    },
    {
      kind: "number",
      q: "Una hoja de cálculo validada calcula la masa de reactivo a cargar como masa teórica al 100 % dividida entre la riqueza en tanto por uno. Para preparar el resultado esperado de un caso de prueba: masa teórica 250 kg y riqueza 96,0 %. ¿Qué masa debe dar, en kg y con dos decimales?",
      answer: 260.42,
      tolerance: 0.001,
      unit: "kg",
      explain: "Riqueza en tanto por uno: 96,0 / 100 = 0,960. Masa = 250 / 0,960 = 260,42 kg. El resultado esperado se calcula fuera de la hoja.",
    },
    {
      kind: "choice",
      q: "El proveedor de un sistema de pesada entrega un paquete completo de cualificación muy bien hecho. ¿Qué dice la PI 041-1 de PIC/S?",
      options: [
        "Que con ese paquete ya no hace falta ninguna prueba más por parte de la planta",
        "Que hay que repetir todas las pruebas del proveedor una por una en la planta",
        "Que no se confía solo en él: la validación incluye pruebas propias en uso normal",
        "Que el paquete del proveedor no vale nada y debe descartarse por completo",
      ],
      answer: 2,
      explain: "Se aprovecha el trabajo del proveedor, pero no se confía solo en él: la validación incluye pruebas propias de integridad de datos en el uso normal y previsto.",
    },
    {
      kind: "choice",
      q: "Eres usuario clave en la prueba de aceptación de un sistema nuevo. Un paso del guion da un resultado distinto del esperado. ¿Qué haces?",
      options: [
        "Repito el paso hasta que salga bien y anoto solo el último resultado",
        "Anoto lo que he visto de verdad, marco que no pasa y aviso al responsable",
        "Cambio el resultado esperado del guion para que coincida con lo obtenido",
        "Lo dejo sin anotar y se lo comento al proveedor en el próximo café",
      ],
      answer: 1,
      explain: "En un guion se firma el resultado obtenido real con su evidencia. Un fallo se registra como incidencia de prueba, se analiza y se repite la prueba tras corregirlo.",
    },
  ],
};
