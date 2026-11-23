import type { Lesson } from "./types";

export const limpiezaAFondo: Lesson = {
  slug: "limpieza-a-fondo",
  level: 12,
  order: 15.5,
  title: "Limpieza de equipos a fondo: procedimientos, validación y estados de limpieza",
  titleEn: "Equipment cleaning in depth",
  minutes: 38,
  summary:
    "Qué deja un lote dentro del equipo, qué exige la norma leída de verdad, los cuatro factores que limpian, la secuencia de una limpieza con sus tiempos y etiquetas, cómo se comprueba que el equipo está limpio, los riesgos para ti y los errores que convierten una limpieza en una desviación.",
  body: `
En la lección «Limpieza de equipos y validación de limpieza» viste los pasos y las siglas. En «Cualificación y validación a fondo» (nivel 16) está explicado cómo se calcula el límite de residuo a partir de la toxicología. Aquí no repetimos esa cuenta: nos centramos en lo que haces tú, con el equipo delante y la hoja de limpieza en la mano.

### Qué deja un lote dentro del equipo
Cuando vacías un reactor, dentro no queda «nada»: queda una película de líquido en las paredes, polvo pegado en la tapa, cristales en el eje del agitador y en la válvula de fondo, y restos en tuberías, juntas y mirillas. Es como cocinar un postre en la olla del guiso sin fregarla: sabrá a guiso.

La guía de validación de la Organización Mundial de la Salud (OMS, *Technical Report Series* n.º 1019, anexo 3, apéndice 3, apartado 1.2) enumera qué puede contaminar un producto:

| Qué queda | Ejemplo en una planta de API | Por qué importa |
|---|---|---|
| **Restos del producto anterior** | Cristales del lote anterior en el agitador | Pasan al siguiente producto: **contaminación cruzada** (*cross-contamination*) |
| **Productos de descomposición** (*degradants*) | Restos que se han ido alterando con el calor o con los ácidos y bases de la limpieza | Son sustancias nuevas que el siguiente análisis quizá no busca |
| **Restos de la limpieza** | Detergente, ácido, base o disolvente de lavado | No forman parte del proceso del siguiente producto |
| **Microorganismos** | Agua estancada en una válvula | Crecen en el agua que se deja dentro |

ICH Q7 define la contaminación cruzada en su glosario como la contaminación de un material o producto con otro material o producto. Un resto del producto anterior no le aporta nada a quien toma el siguiente medicamento y puede hacerle daño (guía de la Agencia Europea de Medicamentos, EMA, sobre límites basados en la salud, resumen inicial).

### Qué dice la norma, apartado por apartado
ICH Q7 es la guía de buenas prácticas de fabricación (GMP) de los principios activos. La parte II del volumen 4 de EudraLex, la guía GMP europea, recoge en estos apartados el mismo texto con la misma numeración.

**ICH Q7, 5.21.** Debe haber procedimientos escritos de limpieza y de **liberación** (*release*) del equipo para su uso, con detalle suficiente para que los operadores limpien cada tipo de equipo de forma reproducible y eficaz. Deben incluir:

- quién es responsable de limpiar;
- los calendarios de limpieza y, cuando proceda, de sanitización;
- los métodos y materiales, incluida la dilución de los agentes de limpieza;
- cuando proceda, cómo desmontar y volver a montar cada pieza;
- cómo quitar o tachar la identificación del lote anterior;
- cómo proteger el equipo limpio de la contaminación antes de usarlo;
- la inspección de limpieza inmediatamente antes de usar el equipo, si es posible;
- el tiempo máximo entre el fin del proceso y la limpieza, cuando proceda.

**5.22 a 5.26.** El equipo se limpia y se guarda de forma que no contamine. En producción continua o en **campaña** (*campaign*: varios lotes seguidos del mismo producto) se limpia a intervalos adecuados para que no se acumulen contaminantes, por ejemplo degradados o microorganismos (5.23). El equipo no dedicado se limpia entre productos distintos (5.24). Los criterios de aceptación de residuos y la elección de procedimientos y agentes de limpieza se definen y se justifican (5.25). Y el equipo debe estar **identificado** en cuanto a su contenido y su **estado de limpieza** (5.26).

**6.20.** Los registros de uso, limpieza y mantenimiento de los equipos principales muestran la fecha, la hora si procede, el producto y el lote de cada lote fabricado en el equipo, y la persona que limpió.

**12.70 a 12.76.** Los procedimientos de limpieza normalmente se validan. El muestreo incluye hisopo, aclarado u otros métodos para detectar residuos solubles e insolubles (12.73). Después de validar, se vigila a intervalos que la limpieza sigue funcionando, con análisis e inspección visual donde sea posible; la inspección visual puede detectar suciedad gruesa concentrada en zonas pequeñas que el muestreo no encontraría (12.76).

**Anexo 15 de EudraLex, apartado 10.** Está escrito para medicamentos; en principios activos su apartado «Principio» lo admite como orientación complementaria y opcional. Tres ideas que te tocan de lleno:

- La comprobación visual es una parte importante de los criterios, pero en general no basta sola. Y limpiar y analizar una y otra vez hasta que el resultado sale bien no es aceptable (10.2).
- Hay que tener en cuenta el tiempo entre fabricar y limpiar y entre limpiar y usar, para definir los tiempos sucio y limpio (10.8).
- Si la limpieza es manual, su eficacia se confirma con una frecuencia justificada (10.15).

**Preguntas y respuestas de la EMA (2018).** Dos respuestas cambian tu día a día. En cada cambio de producto se espera análisis químico, salvo que un análisis de riesgos documentado justifique otra cosa (pregunta 7). Y quien hace la inspección visual necesita formación específica, revisión periódica de la vista y una evaluación práctica de su competencia (pregunta 8).

### Los cuatro factores que limpian
Una sartén con restos pegados se friega mejor con agua caliente, jabón, frotando y con un rato de remojo. Son cuatro palancas que se compensan: si no puedes frotar, necesitas más tiempo o más temperatura.

En la industria de la limpieza esto se conoce como **círculo de Sinner** (*Sinner's circle*) o **TACT**, por las iniciales en inglés:

| Factor | Qué es | En el reactor |
|---|---|---|
| **Tiempo** (*time*) | Cuánto dura el contacto | Minutos de agitación o recirculación del lavado |
| **Acción mecánica** (*action*) | Fuerza que arranca la suciedad | Agitador, chorro de la bola de lavado, caudal y presión |
| **Química o concentración** (*chemistry, concentration*) | Qué líquido disuelve el resto y a qué concentración | Disolvente del proceso o detergente diluido |
| **Temperatura** (*temperature*) | Calor del líquido de lavado | Camisa caliente, lavado a reflujo |

No hemos encontrado este círculo en el texto de una norma oficial. Pero sus factores sí aparecen: la guía de la OMS pide considerar en el protocolo el agente de limpieza y su concentración, el volumen, el tiempo y la temperatura, el caudal, la presión y los aclarados (apéndice 3, 4.2). Por eso la hoja de limpieza te da cifras para cada uno, y saltarte una no se compensa «a ojo».

### Tipos de limpieza
- **Manual.** Con cepillos, mangueras y paños, a menudo con el equipo abierto o desmontado. Es la más variable: depende de quién la hace (Anexo 15, 10.15).
- **Limpieza en el sitio** (*clean in place*, CIP). Sin desmontar: el líquido entra por **bolas de lavado** (*spray balls*) o **cabezales giratorios** (*rotating spray heads*) instalados en la tapa, moja paredes y agitador y sale por el fondo. Es más repetible. Exige que el chorro llegue a todo: un caudal bajo deja zonas sin mojar.
- **Limpieza con disolvente a reflujo** (*solvent reflux cleaning*). Se carga disolvente limpio, se calienta hasta que hierve y el vapor sube, se condensa en la tapa, en la columna y en el condensador y cae de nuevo. Ese condensado es disolvente limpio que lava justo las zonas altas que el líquido del fondo no toca. Lo viste en «El reactor a fondo».

**¿Por qué tan a menudo disolvente y no agua con jabón?** La guía de la OMS pide elegir el agente de limpieza según la solubilidad de lo que hay que quitar, el material del equipo, la seguridad y lo fácil que sea eliminarlo y detectarlo (apéndice 3, 4.3). En síntesis química el resto suele ser una sustancia orgánica que se disuelve bien en el disolvente del proceso. Ese disolvente ya está en la planta, tiene su especificación y su límite de residuo en el producto. Un detergente, en cambio, es un residuo nuevo: la OMS pide conocer su composición, demostrar que se elimina en los aclarados y fijar su límite (apéndice 3, 7.1 a 7.3). Si el proceso es en agua, como el del lote FX-101 del simulador, el «disolvente del proceso» es el agua.

### La secuencia típica, con valores de ejemplo
Cada paso tiene su razón. Las cifras de esta tabla son **valores de ejemplo** para un reactor de 1000 L: las de tu planta están en su procedimiento.

| Paso | Qué haces | Valor de ejemplo | Para qué |
|---|---|---|---|
| 1. Vaciado | Vaciar al máximo, incluido el fondo y las líneas | Hasta que el indicador de nivel marca vacío y la mirilla no muestra líquido | Cuanto menos quede, menos hay que limpiar |
| 2. Prelavado | Enjuague rápido con disolvente o agua | 100 L, 10 min de agitación | Arrastrar lo grueso antes de que se seque |
| 3. Lavado | Disolvente caliente o detergente diluido, con agitación o CIP | 300 L a 60 °C, 60 min | Disolver lo que queda pegado |
| 4. Aclarados | Varios enjuagues con líquido limpio | 3 aclarados de 100 L | Quitar el lavado y lo que este ha disuelto |
| 5. Muestra de aclarado | Recoger el último aclarado en el punto indicado | 500 mL en frasco etiquetado | Que el laboratorio mida el residuo |
| 6. Secado | Barrer con nitrógeno o hacer vacío | Hasta que no se vea líquido | Que no quede líquido donde crezcan microbios |
| 7. Inspección visual | Linterna, espejo o boroscopio, sin entrar | Lista de puntos de la hoja | Ver lo que ningún análisis promedia |
| 8. Etiqueta y registro | Cambiar el estado y firmar | «Limpio, pendiente de resultado» | Que nadie lo use por error |

**Por qué varios aclarados y no uno grande.** Al vaciar, siempre queda una película de líquido. Supón, como modelo sencillo con valores de ejemplo, que tras cada vaciado quedan 2 L mojando el equipo y que el lavado acaba con 10 g/L de residuo disuelto. Cada aclarado añade 98 L limpios, se mezcla y se vacía:

| Aclarado | Cuenta | Residuo en el líquido |
|---|---|---|
| 1 | 10 g/L × 2 / 100 | 0,2 g/L = 200 mg/L |
| 2 | 0,2 g/L × 2 / 100 | 4 mg/L |
| 3 | 4 mg/L × 2 / 100 | 0,08 mg/L |

Cada aclarado multiplica el residuo por 0,02. Si te saltas el tercero, dejas 4 mg/L en vez de 0,08 mg/L: cincuenta veces más. La realidad es peor que el modelo, porque el residuo pegado a la pared no se mezcla al momento. Pero la lección vale: los aclarados se cuentan uno a uno y ninguno sobra.

**Por qué se seca.** La FDA (*Food and Drug Administration*, la agencia del medicamento de Estados Unidos) pide que el equipo se seque antes de guardarlo y que nunca quede agua estancada tras la limpieza (guía de inspección de 1993). La OMS dice lo mismo (apéndice 3, 8.4).

### Los dos relojes: tiempo sucio y tiempo limpio
- **Tiempo sucio máximo** (*dirty hold time*). Desde que termina el lote hasta que empieza la limpieza. Si se pasa, los restos se secan y se pegan: la FDA recuerda que el secado de los residuos afecta directamente a la eficacia de la limpieza.
- **Tiempo limpio máximo** (*clean hold time*). Desde que termina la limpieza hasta que se usa el equipo. Si se pasa, ya no se puede asegurar que siga limpio y seco: hay que relimpiar antes de usar.

Los dos se demuestran en la validación (OMS, TRS 1033, anexo 2, 5.11). Ejemplo con valores inventados: el R-101 se vacía el 18/11 a las 16:00 y su tiempo sucio máximo es de 48 h, así que la limpieza debe empezar antes del 20/11 a las 16:00. La limpieza termina el 19/11 a las 02:00 y su tiempo limpio máximo es de 72 h: el reactor solo puede usarse hasta el 22/11 a las 02:00.

### Estados y etiquetas: un registro GMP
ICH Q7 pide que el equipo esté identificado en cuanto a contenido y estado de limpieza (5.26), pero no dice cómo. Lo que sigue es práctica habitual; cada planta tiene su sistema, en etiqueta de papel o en pantalla:

| Estado | Qué significa | Qué no puedes hacer |
|---|---|---|
| **Sucio** | Vaciado tras un lote; corre el tiempo sucio | Cargar nada |
| **En limpieza** | Limpieza empezada y no terminada | Usarlo ni darlo por limpio |
| **Limpio, pendiente de resultado** | Limpieza e inspección hechas; falta el análisis | Cargar el producto siguiente sin la liberación |
| **Limpio y liberado** | Con producto anterior, fecha y hora de fin y fecha de caducidad | Usarlo pasada la caducidad |
| **Fuera de servicio** | Avería, mantenimiento o cualificación | Usarlo para producción |

Una etiqueta de estado es un registro GMP como cualquier otro. Cambiarla sin haber hecho lo que dice es falsificar un registro. Y ojo con lo que dice 5.21: se quita o se tacha la identificación del lote anterior, para que no convivan dos etiquetas contradictorias.

### Cómo se comprueba que está limpio
| Método | Cómo es | Qué ve y qué no |
|---|---|---|
| **Inspección visual** (*visual inspection*) | Mirar todas las superficies indicadas, con luz y, si hace falta, espejo o boroscopio | Suciedad gruesa y localizada. No ve residuos por debajo de lo visible |
| **Hisopo** (*swab*) | Se frota una superficie de área conocida con un hisopo humedecido y se analiza | Lo pegado en ese punto. No ve el resto del equipo |
| **Aclarado** (*rinse*) | Se analiza el último líquido de aclarado | Llega a todo lo que moja, incluidas las tuberías. No ve lo que no se disuelve |

La FDA lo explica con la «olla sucia»: para saber si una olla con restos secos está limpia no miras el agua del aclarado, miras la olla. Por eso la OMS pide combinar normalmente dos o tres métodos y hacer la inspección visual siempre que sea posible y seguro (TRS 1033, anexo 2, 5.4).

**El hisopo y la recuperación.** El hisopo no recoge todo lo que hay. El laboratorio mide qué porcentaje recupera, y la OMS considera bueno más del 80 %, razonable más del 50 % y dudoso menos del 50 % (apéndice 3, 9.9). Ejemplo: el hisopo de un cuadrado de 10 cm × 10 cm (100 cm²) trae 3,2 µg y la recuperación es del 80 %. En la superficie había 3,2 / 0,80 = 4,0 µg, es decir, 0,04 µg/cm². Si frotas fuera de la plantilla o de otra manera, el número no vale.

**Los análisis.** La OMS prefiere métodos específicos, como la cromatografía de líquidos de alta resolución (HPLC), que busca la sustancia concreta (TRS 1033, anexo 2, 5.9). El **carbono orgánico total** (TOC) mide toda la materia orgánica sin decir cuál es; el Anexo 15 lo admite, junto con la conductividad, cuando no se puede analizar el residuo concreto (10.6.2). Un detalle lógico: tras un aclarado con tolueno o metanol el TOC no sirve, porque el propio disolvente es carbono orgánico.

**Quién decide.** Tú haces y registras: limpieza, inspección y toma de muestras. El laboratorio analiza. La liberación del equipo la da quien diga tu procedimiento, normalmente Calidad. En la validación, la OMS pide registros firmados por el operador, comprobados por producción y revisados por garantía de calidad (apéndice 3, 4.9).

### Cambio de producto o limpieza entre lotes
| | Entre lotes del mismo producto (campaña) | Cambio de producto |
|---|---|---|
| Por qué | Evitar que se acumulen degradados o microbios (ICH Q7, 5.23) | Evitar la contaminación cruzada (5.24) |
| Criterio | La FDA (1993) y la OMS (apéndice 3, 1.5) dicen que basta «visiblemente limpio» y que no necesita validación | Limpieza validada, con análisis en cada cambio salvo justificación (EMA, pregunta 7) |
| Límite de la campaña | La validación fija su duración máxima, en tiempo o en número de lotes (Anexo 15, 10.9) | |

Si la hoja dice «limpieza entre lotes» y el siguiente producto es otro, para y pregunta: no es la misma limpieza.

### Riesgos para ti
- **Disolvente caliente.** Un lavado a reflujo con tolueno trabaja cerca de su ebullición, unos 111 °C, con un líquido cuyo punto de inflamación es de 4 °C. Equipo inertizado, puesta a tierra y equipos de protección: lo tienes en «Atmósferas explosivas a fondo».
- **Abrir el equipo.** Al abrir la boca de hombre salen vapores. Primero se ventila y se mide, según el procedimiento.
- **Espacio confinado.** El interior de un reactor, de un filtro o de un depósito es un espacio confinado. No entres nunca sin permiso de trabajo: ni para frotar una mancha ni para «ver mejor».
- **El nitrógeno del secado.** Tras secar con nitrógeno, dentro hay una atmósfera que no se respira. No metas la cabeza por la boca de hombre. Lo explican «Inertización a fondo» y «Permisos de trabajo, consignación y espacios confinados a fondo».
- **Centrífuga y agitador.** Para limpiar a mano la cesta de una centrífuga o el agitador, el equipo se consigna antes (misma lección de permisos).

### Errores típicos
| Error | Por qué es grave |
|---|---|
| Firmar «limpio» antes de hacer la inspección | Es un registro falso, aunque luego estuviera limpio |
| Saltarse un aclarado «porque ya sale claro» | El residuo puede multiplicarse por cincuenta y no se ve |
| Usar el equipo con el tiempo limpio caducado | Lo que se validó ya no cubre ese equipo |
| Empezar a limpiar con el tiempo sucio pasado sin avisar | La limpieza validada puede no bastar con restos secos |
| Tomar el hisopo fuera del punto o del área marcados | El resultado no se puede comparar con el límite |
| Repetir el aclarado hasta que el análisis sale bien, sin registrarlo | Es lo que la OMS y el Anexo 15 rechazan: esconde una limpieza que no funciona |

Los equipos, cifras y productos de esta lección son ficticios. En planta manda siempre el procedimiento vigente (SOP).
`,
  plant: `
Lote FX-101 terminado. A las 16:00 del 18/11 la centrífuga C-201 descarga la última torta y el reactor R-101 queda vacío. Tu primera tarea no es limpiar: es cambiar las dos etiquetas a «Sucio», tachar la identificación del lote y pedir la orden de limpieza. Empieza a correr el tiempo sucio: 48 h (valor de ejemplo).

El siguiente producto será otro, el intermedio ficticio KZ-30: es un cambio de producto. Tu hoja de limpieza del R-101 dice (valores de ejemplo): prelavado con 100 L de agua purificada; lavado con 300 L de agua purificada a 80 °C, recirculando 60 min por la bola de lavado con el agitador a 60 rpm; tres aclarados de 100 L; muestra de 500 mL del tercer aclarado para HPLC de FX-101 y TOC; secado con nitrógeno. Agua caliente, porque el FX-101 se disuelve mejor en caliente: por eso cristaliza al enfriar.

En la inspección, con linterna desde la boca de hombre y sin asomar la cabeza, ves una película blanca bajo el álabe inferior del agitador. No firmas «limpio». Lo anotas, avisas a la jefa de turno y se repite el lavado como dice el procedimiento, con su registro. En la segunda inspección no queda nada. El laboratorio toma un hisopo de 100 cm² en ese álabe y otro en la válvula de fondo.

La C-201 se consigna antes de abrirla. Su tela filtrante, difícil de limpiar, se retira y se cambia por una nueva, como pide la hoja. La cesta se lava con agua caliente y se aclara.

A las 02:00 del 19/11 terminas. Etiquetas: «Limpio, pendiente de resultado», con caducidad el 22/11 a las 02:00 (72 h). El resultado llega por la mañana: 0,2 mg/L de FX-101 en el aclarado, por debajo del límite del protocolo. Calidad libera los dos equipos.
`,
  batchRecord: `
La limpieza tiene su propia hoja, el registro de limpieza (*cleaning record*), y deja huella en el diario del equipo (*equipment logbook*). Lo que verás y anotarás:

- **Identificación**: código del equipo (p. ej. R-101), producto y lote anterior, y tipo de limpieza: entre lotes de campaña o cambio de producto.
- **Tiempo sucio**: hora de fin del lote y hora de inicio de la limpieza, para comprobar que no se pasó del máximo.
- **Cada paso**: agente de limpieza con su lote, volumen o peso real, dilución si la hay, temperatura real, tiempo real y velocidad de agitación o caudal de CIP. El valor medido, no «según SOP».
- **Aclarados**: uno por línea, con su volumen y su hora. Un aclarado sin línea propia no se puede demostrar.
- **Desmontaje y montaje**: piezas desmontadas, juntas o telas cambiadas, comprobación del montaje.
- **Muestras**: tipo (hisopo o aclarado), punto, área o volumen, hora, código de la muestra y firma.
- **Inspección visual**: puntos revisados según la lista, resultado de cada uno, medios usados (linterna, espejo, boroscopio) y firma de quien inspecciona, con su formación vigente.
- **Secado**: medio usado y comprobación de que no queda líquido.
- **Estado final**: etiqueta colocada, fecha y hora de fin y caducidad del tiempo limpio.
- **Liberación**: resultado del análisis y firma de quien libera.
- **Incidencias**: cualquier repetición, tiempo pasado o paso no hecho, con aviso al responsable y número de desviación si lo hay.

Al empezar el lote siguiente, la hoja de producción te pedirá comprobar el estado del equipo: etiqueta «Limpio y liberado», producto anterior correcto y caducidad no vencida. Mira el reloj antes de firmar.
`,
  terms: [
    { es: "Contaminación cruzada", en: "Cross-contamination", def: "Contaminación de un material o producto con otro material o producto (glosario de ICH Q7)." },
    { es: "Liberación del equipo", en: "Equipment release", def: "Decisión registrada de que un equipo limpio puede usarse para el siguiente lote; la toma quien diga el procedimiento, normalmente Calidad." },
    { es: "Círculo de Sinner", en: "Sinner's circle (TACT)", def: "Modelo de la industria de la limpieza con cuatro factores que se compensan: tiempo, acción mecánica, química o concentración y temperatura." },
    { es: "Limpieza en el sitio", en: "Clean in place (CIP)", def: "Limpieza sin desmontar el equipo, con líquido que entra por bolas o cabezales de lavado fijos." },
    { es: "Bola de lavado", en: "Spray ball", def: "Pieza perforada instalada en la tapa que reparte el líquido de limpieza por las paredes del equipo." },
    { es: "Limpieza a reflujo", en: "Solvent reflux cleaning", def: "Lavado con disolvente que hierve en el equipo; el condensado limpio cae por la tapa, la columna y el condensador." },
    { es: "Aclarado", en: "Rinse", def: "Enjuague con líquido limpio que retira el agente de lavado y lo que este ha disuelto." },
    { es: "Tiempo sucio máximo", en: "Dirty hold time", def: "Tiempo máximo entre el fin del lote y el comienzo de la limpieza." },
    { es: "Tiempo limpio máximo", en: "Clean hold time", def: "Tiempo máximo entre el fin de la limpieza y el uso del equipo; pasado, hay que relimpiar." },
    { es: "Estado de limpieza", en: "Cleanliness status", def: "Situación del equipo (sucio, en limpieza, limpio, fuera de servicio) que debe estar identificada en él." },
    { es: "Hisopo", en: "Swab", def: "Material inerte en el extremo de un mango que se frota sobre un área conocida para recoger el residuo y analizarlo." },
    { es: "Recuperación", en: "Recovery", def: "Porcentaje del residuo presente en la superficie que el método de muestreo consigue recoger y medir." },
    { es: "Verificación de limpieza", en: "Cleaning verification", def: "Análisis tras un lote o una campaña que demuestra que los residuos están por debajo del límite fijado." },
    { es: "Campaña", en: "Campaign", def: "Serie de lotes seguidos del mismo producto en el mismo equipo." },
  ],
  quiz: [
    {
      kind: "choice",
      q: "La hoja te pide lavar 60 min a 60 °C, pero la camisa solo llega a 45 °C. Según el círculo de Sinner, ¿qué pasa?",
      options: [
        "Nada: la temperatura del lavado no influye en lo bien que limpia",
        "Puedes compensarlo tú solo alargando el lavado lo que te parezca",
        "Falla un factor validado: no sigues, lo anotas y avisas al responsable",
        "Basta con hacer un aclarado más al final para que quede igual",
      ],
      answer: 2,
      explain: "Los cuatro factores se compensan, pero la combinación válida es la que fija el procedimiento. Cambiarla a ojo es salirse de la limpieza validada: se anota y se avisa.",
    },
    {
      kind: "number",
      q: "La limpieza del reactor terminó el 20/11 a las 09:30. Su tiempo limpio máximo es de 72 h. Quieres cargarlo el 23/11 a las 11:00. ¿Cuántas horas han pasado desde el fin de la limpieza?",
      answer: 73.5,
      tolerance: 0.01,
      unit: "h",
      explain: "Del 20/11 09:30 al 23/11 09:30 hay 72 h, y hasta las 11:00 hora y media más: 73,5 h. Supera las 72 h: no se carga sin relimpiar o lo que diga el procedimiento.",
    },
    {
      kind: "number",
      q: "Un lote terminó el 22/11 a las 07:00 y la limpieza empezó el 24/11 a las 09:00. ¿Cuántas horas estuvo sucio el equipo?",
      answer: 50,
      tolerance: 0.01,
      unit: "h",
      explain: "Del 22/11 07:00 al 24/11 07:00 hay 48 h, más 2 h hasta las 09:00: 50 h. Si el tiempo sucio máximo fuera 48 h, habría que anotarlo y avisar.",
    },
    {
      kind: "number",
      q: "Modelo sencillo: el lavado acaba con 8 g/L de residuo. Tras cada vaciado quedan 5 L mojando el equipo y cada aclarado añade 95 L limpios, se mezcla y se vacía. ¿Qué concentración de residuo tendrá el segundo aclarado, en mg/L?",
      answer: 20,
      tolerance: 0.01,
      unit: "mg/L",
      explain: "Cada aclarado multiplica por 5 / 100 = 0,05. Primero: 8 × 0,05 = 0,4 g/L. Segundo: 0,4 × 0,05 = 0,02 g/L = 20 mg/L.",
    },
    {
      kind: "choice",
      q: "Tras el último aclarado inspeccionas con linterna y ves una película blanca en el eje del agitador. ¿Qué haces?",
      options: [
        "No lo doy por limpio: lo anoto, aviso y sigo lo que diga el SOP",
        "Firmo limpio, porque el análisis del aclarado ya lo detectará",
        "Entro en el reactor con un paño para quitarla rápidamente",
        "La dejo, porque en el siguiente lote se disolverá sola",
      ],
      answer: 0,
      explain: "Con residuo visible el equipo no está limpio, y el aclarado puede no recogerlo. Entrar sin permiso es entrar en un espacio confinado. Se registra, se avisa y se sigue el procedimiento.",
    },
    {
      kind: "number",
      q: "Un hisopo de un cuadrado de 5 cm × 5 cm trae 2,1 µg de residuo. La recuperación validada del método es del 70 %. ¿Cuánto residuo había por cm² de superficie?",
      answer: 0.12,
      tolerance: 0.02,
      unit: "µg/cm²",
      explain: "Residuo real: 2,1 / 0,70 = 3,0 µg. Área: 5 × 5 = 25 cm². Por cm²: 3,0 / 25 = 0,12 µg/cm².",
    },
    {
      kind: "choice",
      q: "El último aclarado del reactor se ha hecho con metanol. ¿Por qué no sirve medirle el TOC para ver si queda producto?",
      options: [
        "Porque el TOC solo se puede medir en muestras que estén calientes",
        "Porque el TOC solo detecta microorganismos y no restos químicos",
        "Porque el metanol se evapora antes de que llegue al laboratorio",
        "Porque el metanol es carbono orgánico y tapa al residuo que buscas",
      ],
      answer: 3,
      explain: "El TOC mide todo el carbono orgánico sin distinguir de dónde viene. En un aclarado con disolvente orgánico casi todo es disolvente; hace falta un método específico como el HPLC.",
    },
    {
      kind: "number",
      q: "La hoja pide 250 L de solución de detergente al 2 % en volumen. ¿Cuántos litros de detergente concentrado necesitas?",
      answer: 5,
      tolerance: 0.01,
      unit: "L",
      explain: "2 % de 250 L = 0,02 × 250 = 5 L de concentrado, completando con agua hasta 250 L.",
    },
    {
      kind: "choice",
      q: "Has secado el reactor con nitrógeno y la lista de inspección incluye el interior de la tapa. ¿Cómo lo inspeccionas?",
      options: [
        "Metiendo la cabeza por la boca de hombre un momento, sin respirar",
        "Desde fuera con linterna, espejo o boroscopio; entrar requiere permiso",
        "Entrando rápido, porque el nitrógeno no es tóxico ni huele a nada",
        "Abriendo la boca de hombre y esperando cinco minutos antes de entrar",
      ],
      answer: 1,
      explain: "Dentro hay una atmósfera sin oxígeno y el interior es un espacio confinado. Se inspecciona desde fuera con medios auxiliares, como prevé la EMA, y solo se entra con permiso de trabajo.",
    },
    {
      kind: "choice",
      q: "Acaba un lote del producto A. El siguiente en el mismo reactor es el producto B. La hoja que te han dado es la de limpieza entre lotes de campaña. ¿Qué haces?",
      options: [
        "La uso: una limpieza entre lotes vale igual para cualquier producto",
        "Hago la de campaña y luego añado por mi cuenta un aclarado más",
        "Paro y pregunto: un cambio de producto pide su limpieza validada",
        "Limpio solo hasta que se vea limpio, que es el criterio habitual",
      ],
      answer: 2,
      explain: "Entre lotes del mismo producto puede bastar con visiblemente limpio, pero un cambio de producto exige la limpieza validada y, salvo justificación, análisis en cada cambio.",
    },
  ],
};
