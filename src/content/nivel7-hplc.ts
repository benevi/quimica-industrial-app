import type { Lesson } from "./types";

export const hplcAFondo: Lesson = {
  slug: "hplc-a-fondo",
  level: 7,
  order: 8,
  title: "HPLC a fondo: el equipo que da la riqueza y las impurezas de tu lote",
  titleEn: "HPLC in depth: the instrument behind your batch's assay and impurities",
  minutes: 40,
  summary:
    "El cromatógrafo de líquidos módulo a módulo y sus fallos típicos, la columna C18 desde cero, la fase móvil con su tampón y su pH, las cuentas de consumo y de tiempo de una secuencia, cómo se ordena la secuencia de un lote, los problemas más corrientes, la cualificación del equipo y por qué un control en proceso por HPLC tarda horas.",
  body: `
En la lección anterior viste las partes de un HPLC y las fórmulas del contenido y de las impurezas. La teoría de la separación, los parámetros de los picos, la idoneidad del sistema y la integración van en «Cromatografía a fondo». Aquí vas a ver el equipo por dentro, la columna, la fase móvil, el trabajo de un día y por qué tu control en proceso no llega en cinco minutos.

### Para qué sirve, en una frase
El HPLC separa los componentes de una muestra disuelta y mide cuánto hay de cada uno. De él sale la **riqueza** (*assay*) de tu producto, sus **impurezas** una a una y la respuesta a la pregunta de fin de reacción: cuánto material de partida queda.

La guía de buenas prácticas de cromatografía de la Organización Mundial de la Salud (OMS, informe técnico 1025, anexo 4, de 2020) añade la validación de la limpieza: el HPLC puede decidir si un equipo está bastante limpio.

### El equipo, módulo a módulo
Es una pequeña planta: depósitos, bomba, válvula de carga, separación, medida y control. El manual de laboratorio de la FDA (*ORA Laboratory Manual*, volumen IV, sección 3) organiza la formación de sus analistas con estas piezas: columnas, fase móvil, inyección, bombas, detectores y datos.

| Módulo | Función | Fallos típicos |
|---|---|---|
| **Reservorios** (*solvent reservoirs*) | Frascos de fase móvil con tubo y filtro | Frasco vacío, filtro sucio, fase móvil caducada |
| **Desgasificador** (*degasser*) | Quita el aire disuelto en la fase móvil | Burbujas: presión que salta y línea base sucia |
| **Bomba** (*pump*) | Empuja la fase móvil a caudal constante, a cientos de bar | Juntas gastadas, válvulas antirretorno sucias, burbujas: caudal irregular |
| **Mezclador del gradiente** | Mezcla los líquidos en la proporción del método | Proporción mal hecha: picos desplazados |
| **Inyector automático** (*autosampler*) | Pincha cada vial e inyecta unos microlitros | Aguja sucia que arrastra muestra a la siguiente (*carry-over*) |
| **Horno de columna** (*column oven*) | Temperatura fija | Si varía, los picos se desplazan |
| **Columna** (*column*) | Separa | Se obstruye o se degrada con el uso |
| **Detector** (*detector*) | Convierte lo que sale en señal | Lámpara gastada, celda sucia o con burbujas |
| **Sistema de datos** (*chromatography data system*, CDS) | Controla, guarda, integra y calcula | Permisos mal dados, copias de seguridad olvidadas |

**El bucle de inyección.** El inyector llena un tubito de volumen conocido, el **bucle** (*sample loop*), y una válvula lo pone en el camino de la fase móvil, como una esclusa. Los dos métodos del Instituto Nacional de Seguridad y Salud en el Trabajo (INSST) consultados inyectan 10 y 20 µL.

**La bomba y la presión.** La bomba fija el caudal, no la presión. La presión es la resistencia de la columna al paso del líquido, como soplar por una pajita llena de arena. Es el primer chivato: si sube, algo se tapa; si cae de golpe, hay una fuga o la bomba no aspira. Una pequeña **pulsación** (*pulsation*) de los pistones es normal; una oscilación grande, no.

**El detector.** El más corriente es el **ultravioleta** (*UV detector*): una luz atraviesa una celda diminuta y, cuando pasa una sustancia que la absorbe, llega menos luz al otro lado (la ley de Beer-Lambert de «Espectroscopía UV-Visible»). Dos versiones:

- **De longitud de onda fija o variable**: mide a un solo color de luz, el del método.
- **De diodos** (*diode array detector*, DAD o PDA): mide todo el espectro a la vez y ayuda a ver si un pico esconde otra sustancia.

La OMS cita como detectores opcionales el de **fluorescencia** (*fluorescence*), el de **índice de refracción** (*refractive index*), otros dos menos corrientes y el de **espectrometría de masas** (*mass spectrometry*, MS), que pesa las moléculas y ayuda a identificar una impureza desconocida.

**El sistema de datos.** La OMS pide usuarios con permisos según su función, fecha y hora bloqueadas, **pista de auditoría** (*audit trail*) activa desde la instalación y revisada en cada secuencia, y copias de seguridad en otro sitio. Es ALCOA+, como en tu hoja de producción.

### La columna a fondo
**Qué hay dentro.** Un tubo lleno de partículas de sílice de unas pocas micras (milésimas de milímetro). En los dos métodos del INSST consultados la columna mide 150 mm de largo y 4,6 mm de diámetro interior, con relleno de 3,5 µm.

**La C18, desde cero.** A la sílice se le pegan cadenas de 18 átomos de carbono, como trocitos de cera: apolares, sin carga, enemigas del agua. Recuerda de «Enlaces y fuerzas entre moléculas a fondo»: lo polar se mezcla con lo polar y lo apolar con lo apolar. La fase móvil es sobre todo agua, muy polar, y cada molécula se reparte entre el líquido que corre y las cadenas que se quedan quietas:

- Una molécula **polar** está a gusto en el agua, viaja con ella y **sale pronto**.
- Una molécula **apolar** se refugia en las cadenas C18, pasa mucho tiempo parada y **sale tarde**.

Se llama **fase inversa** (*reversed phase*) porque en la **fase normal** (*normal phase*) es al revés: la parte fija es la polar. Si subes el disolvente orgánico de la fase móvil, esta se vuelve menos polar y todo sale antes.

**Partícula, longitud y diámetro, como ideas.** Partícula más fina: picos más estrechos, pero mucha más presión. Columna más larga: más separación, más tiempo y más presión. Diámetro menor: menos caudal y menos disolvente.

**Presión, caudal y partícula.** Con el mismo líquido y la misma columna, la presión es proporcional al caudal: doble caudal, doble presión. Y crece con el inverso del cuadrado del diámetro de partícula: con partícula la mitad de gruesa, la presión se multiplica por (1 / 0,5)² = 4. Como en la torta de un filtro Nutsche: sólido más fino, más cuesta pasar. Por eso la OMS pide un caudal adecuado a la columna «sin superar la contrapresión máxima recomendada».

**La precolumna** (*guard column*). Un cartucho corto delante de la columna que se sacrifica atrapando partículas y sustancias que se pegarían para siempre: el filtro que pones antes de una bomba cara.

**Cuidado, almacenamiento y vida.** La OMS pide comprar las columnas a proveedores aprobados, comprobarlas al recibirlas, vigilar su eficacia (los platos teóricos), equilibrarlas antes de analizar, registrar su identificación, sus inyecciones y sus lavados, lavarlas según procedimiento y guardarlas sin que se dañen. Con el uso se ensucian y se degradan; cuando dejan de cumplir la idoneidad del sistema, se cambian.

### La fase móvil
**Los ingredientes.** Agua purificada y **acetonitrilo** (*acetonitrile*) o **metanol** (*methanol*), a menudo con un **tampón** (*buffer*) en el agua. El método del INSST para formaldehído usa 45 % de acetonitrilo y 55 % de agua; el de creatinina, tampón de pH 3,2 y acetonitrilo 95:5. Los reactivos son de **calidad HPLC** (*HPLC grade*).

**Por qué el pH cambia la retención.** En «Ácidos, bases y pH a fondo» viste que un ácido débil suelta o no su protón según el pH frente a su pKa. La forma **con carga** (ionizada) es muy polar y sale pronto; la forma **sin carga** se pega más a la C18 y sale tarde. Un ácido débil está sin carga a pH bajo; una base débil, a pH alto. La fracción ionizada de un ácido sale de la ecuación de Henderson-Hasselbalch:

> % ionizado = 100 / (1 + 10^(pKa − pH))

Para un ácido de pKa 4,8 (valor de ejemplo):

| pH de la fase móvil | % ionizado | Qué pasa |
|---|---|---|
| 2,8 | 0,99 % | Sin carga: sale tarde y estable |
| 4,8 | 50 % | Mitad y mitad: un pequeño cambio de pH mueve mucho el pico |
| 6,8 | 99 % | Con carga: sale pronto |

Por eso el tampón mantiene fijo el pH, y el método lo elige lejos del pKa de las sustancias, donde un cambio pequeño no lo descoloca todo.

**Filtración y desgasificación.** La OMS pide filtrar, desgasificar y presurizar cuando haga falta la fase móvil, prepararla con procedimiento autorizado, registrar su preparación y su uso, y usarla dentro de un plazo justificado. Se filtra porque una partícula tapa la columna; se desgasifica porque el aire disuelto forma burbujas al bajar la presión, como una gaseosa al abrirla. Los métodos del INSST filtran con membrana de 0,45 µm.

**Isocrático y gradiente.** En **isocrático** (*isocratic*) la composición no cambia. En **gradiente** (*gradient*) la bomba sube el orgánico: primero salen bien separadas las polares y al final el orgánico alto arrastra las muy apolares. Al terminar hay que volver a la composición inicial y **reequilibrar** la columna. Ejemplo (valores de ejemplo), A = tampón acuoso, B = acetonitrilo, 1,0 mL/min:

| Tiempo (min) | % A | % B | Qué ocurre |
|---|---|---|---|
| 0 | 90 | 10 | Inicio |
| 20 | 10 | 90 | Subida lineal |
| 25 | 10 | 90 | Lavado |
| 25,1 | 90 | 10 | Vuelta al inicio |
| 35 | 90 | 10 | Fin del reequilibrado |

### Preparar 1 L de fase móvil con tampón
Valores de ejemplo: tampón de acetato amónico 20 mmol/L y acetonitrilo en proporción 70:30.

**Cuenta 1: la sal.** Acetato amónico, CH₃COONH₄ (C₂H₇NO₂), con las masas atómicas del nivel 1 (C 12,011; H 1,008; N 14,007; O 15,999):

> M = 2 × 12,011 + 7 × 1,008 + 14,007 + 2 × 15,999 = 77,083 g/mol

Para 1 L a 20 mmol/L hacen falta 0,020 mol:

> masa = 0,020 mol × 77,083 g/mol = 1,542 g

Se pesa, se disuelve en agua purificada, se enrasa a 1 L, se ajusta el pH si el método lo pide y se filtra.

**Cuenta 2: la mezcla.** 1000 mL × 70 / 100 = 700 mL de tampón y 1000 × 30 / 100 = 300 mL de acetonitrilo, medidos por separado y luego mezclados: al mezclar agua y disolvente orgánico el volumen final no siempre es la suma exacta.

La misma cuenta aparece en el método del INSST para creatinina: 2,16 g de 1-octanosulfonato de sodio (C₈H₁₇NaO₃S, 216,27 g/mol) en 1 L «para obtener una concentración de 10 mmol/l». En efecto, 2,16 / 216,27 = 0,00999 mol.

### Cuentas de equipo
**Volumen de fase móvil.**

> volumen = caudal × tiempo de cada inyección × número de inyecciones

Con el gradiente del ejemplo y 24 inyecciones: 1,0 × 35 × 24 = 840 mL. Del canal B, siguiendo el programa, salen 15,54 mL por inyección: 373 mL de acetonitrilo en toda la secuencia. Se suma la purga y el equilibrado, con margen.

**Tiempo de la secuencia.** Número de inyecciones × duración: 24 × 35 = 840 min = 14 h. Por eso muchas secuencias trabajan solas por la noche.

**Volumen muerto y tiempo muerto, como idea.** Entre las partículas y dentro de sus poros hay líquido: es el **volumen muerto** (*dead volume* o *void volume*). Una sustancia que no se pega nada sale cuando ha pasado ese volumen, en el **tiempo muerto** (*dead time*). Una columna de 150 × 4,6 mm tiene un volumen de π × (0,23 cm)² × 15 cm = 2,49 mL. Si un 65 % es líquido (valor de ejemplo), el volumen muerto es 1,62 mL y, a 1,0 mL/min, el tiempo muerto es de unos 1,6 min. Nada sale antes.

### La secuencia de análisis de un lote
La guía de la FDA de 2015 *Analytical Procedures and Methods Validation for Drugs and Biologics* pide que el procedimiento describa los tiempos de equilibrado y el orden de inyección: blancos, muestras, controles, la disolución de sensibilidad en los métodos de impurezas y los patrones que mantienen válida la idoneidad del sistema durante todo el análisis. La OMS lo llama **conjunto de muestras** (*sample set*) y pide comprobar viales y orden antes de empezar.

Ejemplo de secuencia de 24 inyecciones (valores de ejemplo; el número y el orden reales los fija el método):

| Orden | Inyección | N.º | Para qué |
|---|---|---|---|
| 1 | Blanco (diluyente) | 1 | Ver que no hay picos que molesten ni restos |
| 2 | Idoneidad del sistema (patrón repetido) | 6 | Comprobar que el sistema funciona como pide el método |
| 3 | Patrones de trabajo | 2 | La referencia para calcular |
| 4 | Muestras (6 viales, 2 inyecciones cada uno) | 12 | El análisis en sí |
| 5 | Patrones de control intercalados | 3 | Tras cada 4 de muestra y al final: el sistema siguió estable |
| | **Total** | **24** | |

La OMS pide definir cuántos **patrones de control intercalados** (*bracketing standards*) lleva la secuencia y comprobar que cumplen; si uno falla, el procedimiento del laboratorio dice qué resultados quedan en duda. Y no recomienda las «inyecciones de prueba» fuera del conjunto de muestras: si un procedimiento las permite, se guardan con los demás resultados.

### Problemas típicos
Lo arregla el analista, no tú, pero así entiendes por qué un análisis se retrasa.

| Síntoma | Causas probables | Qué hace el analista |
|---|---|---|
| Presión alta | Filtro, precolumna o columna obstruidos; muestra sin filtrar; tampón cristalizado en los tubos | Busca el tramo tapado pieza a pieza; cambia precolumna o filtro; lava |
| Presión que fluctúa | Burbujas en la bomba; válvulas antirretorno sucias; desgasificador averiado; fuga | Purga la bomba, revisa el desgasificador, racores y juntas |
| Línea base con ruido o deriva | Burbujas en la celda; lámpara gastada; fase móvil sucia; temperatura inestable; columna sin equilibrar | Desgasifica, equilibra más, prepara fase móvil nueva, revisa la lámpara |
| Picos anchos o con cola | Columna gastada; pH mal ajustado; muestra disuelta en un disolvente más fuerte que la fase móvil | Comprueba el pH, cambia precolumna o columna, revisa la preparación |
| Tiempos de retención que se desplazan | Composición o pH de la fase móvil distintos; horno a otra temperatura; caudal irregular; falta de equilibrado | Revisa fase móvil, horno y caudal; equilibra |
| Picos fantasma (*ghost peaks*) | Arrastre de la inyección anterior; fase móvil o diluyente contaminados | Inyecta blancos, limpia la aguja, prepara reactivos nuevos |

La OMS pide investigar los picos de forma anómala. Un resultado fuera de especificación se investiga como OOS (nivel 10).

### Cualificación del equipo y validación del método
Una prueba que el **equipo** funciona; la otra, que el **método** sirve para lo que se quiere medir.

**Cualificación** (*qualification*). Para la OMS es la evidencia documentada de que un equipo está bien instalado, funciona y da los resultados esperados. Para cromatógrafos cita las etapas URS (requisitos del usuario), DQ (diseño), FAT y SAT (pruebas en fábrica y en planta), IQ (instalación), OQ (funcionamiento) y PQ (prestaciones), más mantenimiento y calibración por escrito y un análisis de causa e impacto si algo sale fuera de calibración. Su guía de laboratorios de control (informe técnico 957, anexo 1) añade que tras una reparación importante se recualifica, y que un equipo con resultados sospechosos se retira y se etiqueta. Es la idea de «Cualificación y validación a fondo», del nivel 16, aplicada a un instrumento.

**Validación del método.** ICH Q2(R2), adoptada el 1 de noviembre de 2023, pide demostrar **especificidad** (mide lo que debe sin interferencias), **intervalo** (*range*) con respuesta adecuada (la **linealidad**, si es una recta), **exactitud** y **precisión**. La **robustez**, aguantar pequeños cambios deliberados de los parámetros del método (por ejemplo, el caudal), se estudia en el desarrollo según ICH Q14. Para la riqueza de un producto, la tabla de ejemplos de Q2(R2) propone un intervalo del 80 % al 120 % del contenido declarado o de los límites de especificación. Más en «Validación de métodos analíticos» (nivel 10). La guía de la FDA de 1994 *Validation of Chromatographic Methods* figura como retirada desde el 25 de noviembre de 2024 en la lista de la propia FDA.

### Seguridad: disolventes y residuos
Límites de exposición del INSST (edición de 2021, la que se ha podido leer); el VLA-ED es el valor límite ambiental de exposición diaria:

| Disolvente | VLA-ED | Notas | Indicaciones de peligro |
|---|---|---|---|
| Acetonitrilo | 40 ppm (68 mg/m³) | Vía dérmica | H225, H332, H312, H302, H319 |
| Metanol | 200 ppm (266 mg/m³) | Vía dérmica | H225, H331, H311, H301, H370 |

Los dos son líquidos y vapores muy inflamables (H225). El acetonitrilo es nocivo por inhalación, piel e ingestión y provoca irritación ocular grave; el metanol es tóxico por las tres vías y provoca daños en los órganos. «Vía dérmica» quiere decir que la piel contribuye mucho a la exposición: el guante adecuado importa tanto como la vitrina. La nota técnica de prevención (NTP) 461 del INSST lista el acetonitrilo también como cianuro de metilo. Manda la ficha de datos de seguridad y la edición vigente de los límites.

**Residuos.** La fase móvil usada va a un bidón cerrado y etiquetado, nunca al desagüe. La NTP 480 del INSST separa los **disolventes no halogenados** (alcoholes, nitrilos y otros, con menos de un 2 % de halógenos) de los halogenados y pide no juntar disolventes que no se mezclan entre sí.

### Por qué te importa a ti
Del HPLC salen el **control en proceso** (*in-process control*, IPC) de fin de reacción, la **riqueza** y las **impurezas** individuales y totales del certificado de análisis, la **identificación** por tiempo de retención y, a veces, la verificación de la **limpieza** de un equipo.

**Por qué un control en proceso no es instantáneo.** Valores de ejemplo desde que la muestra entra en el laboratorio: 30 min de preparación (pesar, disolver, diluir, filtrar), 20 min de equilibrado, una secuencia corta de 10 inyecciones de 15 min (blanco, cinco de idoneidad, un patrón, dos de tu muestra y un patrón de control final), 150 min, y 15 min de revisión por una segunda persona. Total: 215 min, unas tres horas y media. La idoneidad no se puede saltar. Por eso la hoja te pide tomar la muestra en su momento, rotularla bien y mantener el reactor como indique mientras esperas: una muestra mal tomada obliga a empezar de nuevo.

En planta manda siempre el procedimiento vigente (SOP): los tiempos, los límites y lo que se hace mientras se espera un resultado son los de tu planta.
`,
  plant: `
En el reactor R-301 (equipo ficticio) termina la adición de reactivo del lote FX-24-117 del intermedio INT-7 (producto ficticio). La hoja manda mantener a 45 °C con agitación y tomar una muestra a las 2 h para el control en proceso: el material de partida debe quedar por debajo del 1,0 % en área (valor de ejemplo).

Victor toma la muestra a las 10:00 con el tomamuestras cerrado, la rotula con lote, etapa, hora y su firma, y la lleva al laboratorio. Allí la registran a las 10:15.

La analista ya tiene preparado el cromatógrafo HP-701 (equipo ficticio) con la columna C18 COL-034, que lleva 412 inyecciones registradas. Al arrancar, la presión sube a 160 bar cuando lo normal con ese método son 110 bar (valores de ejemplo). En vez de lanzar la secuencia, cambia la precolumna, que estaba sucia, y la presión vuelve a 112 bar. Anota el cambio en el cuaderno del equipo.

La secuencia corta tiene 10 inyecciones de 15 min. La idoneidad del sistema cumple; la muestra da un 0,6 % de material de partida y el patrón de control final también cumple. La segunda revisora aprueba el resultado y el laboratorio lo comunica a planta a las 13:55, casi cuatro horas después de tomar la muestra.

Mientras tanto, el R-301 ha seguido a 45 °C, como dice la hoja. Con el resultado conforme, el supervisor autoriza pasar a la etapa de enfriamiento.
`,
  batchRecord: `
- **Toma de muestra para IPC por HPLC**: hora exacta, punto de muestreo, condiciones del reactor en ese momento (temperatura, agitación), identificación del recipiente y firma.
- **Espera del resultado**: hora de entrega al laboratorio y condiciones de mantenimiento del reactor mientras tanto; si el tiempo de espera supera lo previsto, se anota.
- **Resultado**: valor recibido (por ejemplo, material de partida en % de área), especificación del IPC, conforme o no conforme, referencia del análisis del laboratorio, quién lo comunica y a qué hora.
- **Decisión**: continuar, prolongar la reacción y repetir el IPC, o parar y avisar, según la hoja. Una nueva muestra lleva su propia hora y su propio número.
- En la liberación del lote verás los datos del HPLC en el certificado de análisis: riqueza, impurezas individuales y totales.
`,
  terms: [
    { es: "Cromatografía líquida de alta resolución", en: "High-performance liquid chromatography (HPLC)", def: "Técnica que separa los componentes de una muestra disuelta empujándola con un líquido a presión a través de una columna rellena." },
    { es: "Fase inversa", en: "Reversed phase", def: "Modo de HPLC con relleno apolar (como la C18) y fase móvil polar; las sustancias más apolares salen más tarde." },
    { es: "Precolumna", en: "Guard column", def: "Cartucho corto delante de la columna que retiene partículas y sustancias que la estropearían." },
    { es: "Bucle de inyección", en: "Sample loop", def: "Tubito de volumen conocido que se llena de muestra y una válvula introduce en la corriente de fase móvil." },
    { es: "Desgasificador", en: "Degasser", def: "Módulo que quita el aire disuelto de la fase móvil para que no forme burbujas." },
    { es: "Tampón", en: "Buffer", def: "Disolución que mantiene el pH casi constante; en HPLC fija la retención de ácidos y bases." },
    { es: "Elución isocrática", en: "Isocratic elution", def: "Análisis con la composición de la fase móvil constante." },
    { es: "Elución en gradiente", en: "Gradient elution", def: "Análisis en el que la proporción de disolvente orgánico cambia según un programa." },
    { es: "Contrapresión", en: "Backpressure", def: "Presión que opone la columna al paso de la fase móvil; sube con el caudal y con partículas más finas." },
    { es: "Volumen muerto", en: "Dead volume (void volume)", def: "Volumen de líquido dentro de la columna; una sustancia que no se retiene sale al pasar ese volumen." },
    { es: "Patrón de control intercalado", en: "Bracketing standard", def: "Inyección de patrón entre grupos de muestras para comprobar que el sistema sigue estable." },
    { es: "Arrastre", en: "Carry-over", def: "Restos de una inyección que aparecen en la siguiente." },
    { es: "Cualificación del equipo", en: "Equipment qualification", def: "Evidencia documentada de que un equipo está bien instalado, funciona y da los resultados esperados (URS, DQ, IQ, OQ, PQ)." },
    { es: "Sistema de datos cromatográficos", en: "Chromatography data system (CDS)", def: "Programa que controla el equipo, guarda la señal, integra los picos y calcula, con pista de auditoría." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Un método trabaja a 1,2 mL/min, cada inyección dura 40 min y la secuencia tiene 18 inyecciones. ¿Cuánta fase móvil se gasta, sin contar purgas ni equilibrado?",
      answer: 864,
      tolerance: 0.01,
      unit: "mL",
      explain: "Volumen = caudal × tiempo × inyecciones = 1,2 × 40 × 18 = 864 mL. Hay que preparar más para la purga y el equilibrado.",
    },
    {
      kind: "number",
      q: "Una secuencia tiene 30 inyecciones de 25 min cada una. ¿Cuántas horas tarda en total?",
      answer: 12.5,
      tolerance: 0.01,
      unit: "h",
      explain: "30 × 25 = 750 min; 750 / 60 = 12,5 h. Por eso muchas secuencias trabajan solas por la noche.",
    },
    {
      kind: "number",
      q: "Hay que preparar 2 L de tampón de acetato amónico 25 mmol/L. La masa molar del acetato amónico es 77,083 g/mol. ¿Cuántos gramos se pesan?",
      answer: 3.854,
      tolerance: 0.005,
      unit: "g",
      explain: "Moles = 0,025 mol/L × 2 L = 0,050 mol. Masa = 0,050 × 77,083 = 3,854 g.",
    },
    {
      kind: "number",
      q: "Un HPLC marca 150 bar a 1,0 mL/min con una columna y una fase móvil dadas. Si el caudal sube a 1,4 mL/min con lo demás igual, ¿qué presión cabe esperar?",
      answer: 210,
      tolerance: 0.02,
      unit: "bar",
      explain: "Con el mismo líquido y la misma columna la presión es proporcional al caudal: 150 × 1,4 / 1,0 = 210 bar.",
    },
    {
      kind: "number",
      q: "El volumen muerto de una columna es de 1,5 mL y el caudal es de 0,75 mL/min. ¿Cuál es el tiempo muerto aproximado?",
      answer: 2,
      tolerance: 0.02,
      unit: "min",
      explain: "Tiempo muerto = volumen muerto / caudal = 1,5 / 0,75 = 2 min. Ninguna sustancia puede salir antes.",
    },
    {
      kind: "number",
      q: "Una impureza ácida tiene pKa 4,2 y la fase móvil está a pH 2,2. Con % ionizado = 100 / (1 + 10^(pKa − pH)), ¿qué porcentaje está ionizado?",
      answer: 0.99,
      tolerance: 0.02,
      unit: "%",
      explain: "10^(4,2 − 2,2) = 100; 100 / (1 + 100) = 0,99 %. Casi toda está sin carga: se retiene más en la C18 y su pico es estable.",
    },
    {
      kind: "choice",
      q: "Una C18 separa dos sustancias del lote: una muy polar y otra muy apolar. Con una fase móvil rica en agua, ¿cuál sale primero?",
      options: [
        "La polar, porque está a gusto en el agua",
        "La apolar, porque no le gusta la columna",
        "Las dos a la vez, porque la C18 no separa",
        "La que tenga la molécula más pesada",
      ],
      answer: 0,
      explain: "La polar pasa casi todo el tiempo en la fase móvil acuosa y sale pronto; la apolar se refugia en las cadenas C18 y sale tarde.",
    },
    {
      kind: "choice",
      q: "Tras una tanda de muestras con sólido en suspensión que no se filtraron bien, la presión del HPLC pasa de 110 a 190 bar. ¿Cuál es la causa más probable?",
      options: [
        "La lámpara del detector está gastada",
        "Partículas que obstruyen precolumna o columna",
        "La fecha del sistema de datos está mal",
        "La fase móvil lleva demasiado acetonitrilo",
      ],
      answer: 1,
      explain: "La presión sube cuando algo se tapa. Por eso las muestras se filtran y por eso se pone una precolumna, que se cambia antes que la columna.",
    },
    {
      kind: "choice",
      q: "El laboratorio prepara una fase móvil nueva y los picos del lote salen 0,8 min antes que ayer, con el mismo equipo y columna. ¿Qué es lo primero que se revisa?",
      options: [
        "El rótulo de la muestra que trajo el operador",
        "La lámpara y la celda del detector",
        "La composición y el pH de la fase móvil nueva",
        "El número de serie del inyector automático",
      ],
      answer: 2,
      explain: "Un cambio de composición o de pH de la fase móvil mueve los tiempos de retención. También influyen el horno, el caudal y el equilibrado.",
    },
    {
      kind: "choice",
      q: "Tomas a las 10:00 la muestra de IPC por HPLC y a las 11:00 preguntas por qué no hay resultado. ¿Qué respuesta es correcta?",
      options: [
        "Que el HPLC tarda un minuto y algo falla",
        "Que solo se espera por la firma del supervisor",
        "Que se puede inyectar ya sin hacer la idoneidad",
        "Que preparar, equilibrar, inyectar y revisar lleva horas",
      ],
      answer: 3,
      explain: "La muestra se prepara, la columna se equilibra, se inyectan blanco, idoneidad, patrones y muestra, y una segunda persona revisa. Saltarse la idoneidad invalida el resultado.",
    },
  ],
};
