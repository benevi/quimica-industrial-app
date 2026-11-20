import type { Lesson } from "./types";
import { sistemaDeCalidadAFondo } from "./nivel16-calidad";
import { desviacionesYCapaAFondo } from "./nivel16-desviaciones";
import { cambiosYRiesgosAFondo } from "./nivel16-cambios";

const gmp: Lesson[] = [
  {
    slug: "gmp-e-ich-q7",
    level: 16,
    order: 1,
    title: "Qué son las GMP y la guía ICH Q7",
    titleEn: "GMP and ICH Q7",
    minutes: 15,
    summary: "Por qué existen las normas de correcta fabricación y cómo está organizada la guía que rige la fabricación de API.",
    body: `
### ¿Por qué existen las GMP?
Un paciente no puede analizar el medicamento que toma. Tiene que **confiar** en que contiene lo que dice, sin impurezas peligrosas ni contaminación. Las **Normas de Correcta Fabricación** (NCF), en inglés *Good Manufacturing Practice* (**GMP**), son las reglas que garantizan esa calidad **en cada lote**.

La idea clave: **la calidad no se analiza al final, se construye durante todo el proceso**. Un análisis solo revisa una muestra; si el proceso no está controlado, el resto del lote puede ser distinto.

### ICH Q7: las GMP de los principios activos
La **ICH** (*International Council for Harmonisation*) reúne a las autoridades de Europa, EE. UU., Japón y otros países. Su guía **Q7** es la norma GMP para fabricar **API**. En Europa es la **Parte II** de las GMP de la UE (EudraLex, volumen 4).

Capítulos principales de ICH Q7:

| Capítulo | Tema |
|---|---|
| 2 | Gestión de la calidad (unidad de calidad independiente) |
| 3 | Personal: formación, higiene, consultores |
| 4 | Edificios e instalaciones |
| 5 | Equipos de proceso: limpieza, calibración, sistemas informatizados |
| 6 | Documentación y registros |
| 7 | Gestión de materiales: recepción, cuarentena, muestreo |
| 8 | Producción y controles en proceso |
| 9 | Envasado y etiquetado |
| 10 | Almacenamiento y distribución |
| 11 | Controles de laboratorio |
| 12 | Validación |
| 13 | Control de cambios |
| 14 | Rechazo y reutilización de materiales (reprocesado y retrabajo) |
| 15 | Reclamaciones y retiradas |
| 16–17 | Fabricantes contratados y agentes |
| 18 | API por cultivo celular o fermentación |
| 19 | API para ensayos clínicos |

### GMP crecientes
Las GMP se aplican desde que entra en el proceso el **material de partida del API** (*API starting material*). Y su exigencia **aumenta** a medida que el proceso se acerca al producto final: las últimas etapas (purificación, secado, envasado) son las más controladas.

### Responsabilidades del operador
- Seguir los procedimientos tal y como están escritos.
- Registrar todo en el momento.
- Trabajar solo en lo que tienes formación documentada.
- Comunicar **inmediatamente** cualquier anomalía.
- Mantener la higiene y el orden del área.
`,
    plant: `
Un compañero te dice: "este paso siempre lo hacemos un poco distinto, va más rápido". Aunque funcione, hacerlo distinto al procedimiento aprobado es una **desviación**. Si de verdad es mejor, se propone un **cambio** y se aprueba antes de aplicarlo.
`,
    batchRecord: `
- Versión y fecha de aprobación de la hoja (solo se usa la vigente).
- Firmas de quien ejecuta y quien verifica.
- Referencias a procedimientos (SOP/PNT) para operaciones generales: limpieza, pesada, muestreo.
`,
    terms: [
      { es: "Normas de Correcta Fabricación", en: "Good Manufacturing Practice (GMP)", def: "Conjunto de normas que garantizan que los medicamentos se fabrican con calidad constante." },
      { es: "ICH Q7", en: "ICH Q7", def: "Guía internacional de GMP para principios activos (Parte II de las GMP europeas)." },
      { es: "Unidad de calidad", en: "Quality unit", def: "Departamento independiente de producción responsable de la calidad (QA y QC)." },
      { es: "Procedimiento normalizado de trabajo", en: "Standard Operating Procedure (SOP)", def: "Instrucción escrita y aprobada que describe cómo hacer una tarea." },
      { es: "Material de partida del API", en: "API starting material", def: "Material a partir del cual empiezan a aplicarse las GMP del API." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "¿Cuál es la idea central de las GMP?",
        options: [
          "Analizar mucho el producto final",
          "Construir la calidad en todo el proceso, no solo comprobarla al final",
          "Fabricar lo más rápido posible",
          "Que QA haga el trabajo de producción",
        ],
        answer: 1,
        explain: "El análisis final solo ve una muestra; la calidad depende de controlar cada paso.",
      },
      {
        kind: "choice",
        q: "¿Qué guía GMP se aplica a la fabricación de principios activos?",
        options: ["ISO 9001", "ICH Q7", "ICH Q1A", "La norma de seguridad alimentaria"],
        answer: 1,
        explain: "ICH Q7 es la guía de GMP para API (en Europa, Parte II de las GMP).",
      },
      {
        kind: "choice",
        q: "¿En qué etapas del proceso son más estrictas las GMP?",
        options: ["En las primeras", "En las finales, cerca del API puro", "Igual en todas", "Solo en el laboratorio"],
        answer: 1,
        explain: "La exigencia aumenta conforme el proceso se acerca al API final.",
      },
    ],
  },
  {
    slug: "buenas-practicas-documentacion",
    level: 16,
    order: 3,
    title: "Buenas prácticas de documentación",
    titleEn: "Good Documentation Practices (GDP)",
    minutes: 15,
    summary: "Tipos de documentos GMP y reglas para rellenar, corregir y firmar registros en papel.",
    body: `
### Tipos de documentos
- **Instrucciones** (qué hay que hacer): procedimientos (SOP/PNT), instrucciones de fabricación maestras (*master production record*), especificaciones, métodos analíticos.
- **Registros** (qué se ha hecho): hoja de producción del lote (*batch production record*), cuadernos de uso de equipos (*logbooks*), registros de limpieza, resultados de análisis.

Una hoja de producción es una **copia controlada** del documento maestro, emitida para un lote concreto y con su número de lote.

### Reglas de oro al registrar
1. **Tinta indeleble** (normalmente azul o negra). Nunca lápiz ni típex.
2. **En el momento** de hacer la tarea, ni antes ni después.
3. **Tu propia firma o iniciales**, y solo por lo que tú has hecho.
4. **Datos reales y completos**, con sus unidades y decimales.
5. **Sin huecos**: lo que no aplica se marca "N/A" con iniciales y fecha. Los espacios en blanco grandes se anulan con una línea.
6. **Fecha y hora** en el formato de la empresa (p. ej. DD/MMM/AAAA) y con el reloj oficial de la planta.

### Cómo corregir un error
1. Tachar con **una sola línea** de forma que el dato original **siga legible**.
2. Escribir al lado el valor correcto.
3. Poner **iniciales y fecha** de la corrección.
4. Añadir el **motivo** si el procedimiento lo pide (p. ej. "error de transcripción").

### Lo que nunca se hace
- Firmar por otra persona o "pre-firmar".
- Copiar datos de un papel suelto (salvo que el procedimiento lo prevea).
- Arrancar páginas, usar hojas no controladas o reescribir una hoja "para que quede limpia".
- Registrar un valor distinto al real "porque seguro que es un error del equipo".

### Registros impresos de equipos
Los tickets de báscula o los gráficos de registradores son **datos originales**: se adjuntan, se firman y se identifican con el lote.
`,
    plant: `
Al rellenar la carga de metanol escribes "245 kg" en lugar de "254 kg". Lo corriges así:

~~245~~ 254 kg  — JL 18/NOV/2026 «error de transcripción»

El 245 sigue legible, se ve quién lo corrigió, cuándo y por qué.
`,
    batchRecord: `
- Página "x de y" en cada hoja, para demostrar que no falta ninguna.
- Número de lote en todas las páginas.
- Tickets de báscula grapados en su paso, firmados.
- Registro de firmas e iniciales de quien interviene en el lote.
`,
    terms: [
      { es: "Buenas prácticas de documentación", en: "Good Documentation Practices (GDP)", def: "Normas para registrar y corregir datos en documentos GMP." },
      { es: "Registro de lote", en: "Batch production record (BPR)", def: "Documento donde se registra la fabricación de un lote concreto." },
      { es: "Instrucción maestra", en: "Master production record", def: "Documento aprobado del que se emite la hoja de cada lote." },
      { es: "Cuaderno de equipo", en: "Logbook", def: "Registro cronológico de uso, limpieza y mantenimiento de un equipo." },
      { es: "Copia controlada", en: "Controlled copy", def: "Documento emitido de forma oficial y trazable, con identificación única." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "Una casilla de la hoja no aplica a este lote. ¿Qué haces?",
        options: ["La dejo en blanco", "Escribo N/A con iniciales y fecha", "La tacho entera con rotulador", "Pongo un cero"],
        answer: 1,
        explain: "Así queda claro que se revisó y que no aplica; un hueco en blanco es un registro incompleto.",
      },
      {
        kind: "choice",
        q: "¿Qué es un ticket de báscula grapado a la hoja?",
        options: ["Un papel sin importancia", "Un dato original que forma parte del registro", "Una copia que se puede tirar", "Un borrador"],
        answer: 1,
        explain: "Es el registro original generado por el equipo; se conserva con el lote.",
      },
      {
        kind: "choice",
        q: "La hoja se ha manchado y está fea. ¿Puedes pasarla a limpio?",
        options: [
          "Sí, si copio bien los datos",
          "No: el original se conserva; si está dañada se comunica y se gestiona según procedimiento",
          "Sí, si firma el supervisor",
          "Sí, si nadie lo ve",
        ],
        answer: 1,
        explain: "Reescribir registros destruye el dato original. Es una falta grave de integridad de datos.",
      },
    ],
  },
  {
    slug: "desviaciones",
    level: 16,
    order: 5,
    title: "Desviaciones e investigaciones",
    titleEn: "Deviations and investigations",
    minutes: 15,
    summary: "Qué es una desviación, cómo se clasifica y cómo se busca la causa raíz.",
    body: `
### Qué es una desviación (*deviation*)
Cualquier **diferencia** respecto a lo aprobado: un parámetro fuera de rango, un paso hecho distinto, un equipo que falla, un material equivocado, un registro mal hecho.

### Qué hace el operador
1. **Parar** si hay riesgo para la seguridad o el producto, y poner el proceso en situación segura.
2. **Registrar** lo que ha pasado tal y como fue (hora, valores reales).
3. **Avisar** al supervisor de inmediato.
4. **No arreglarlo por tu cuenta** ni "maquillarlo".

Abrir una desviación **no es un castigo**: es la forma de aprender y evitar que se repita. Ocultarla sí es grave.

### Clasificación habitual
| Tipo | Ejemplo |
|---|---|
| **Crítica** | Puede afectar a la calidad del producto o a la seguridad del paciente: material equivocado cargado, o un **parámetro crítico** fuera de su rango (por ejemplo, la temperatura de una reacción marcada como crítica en la hoja) |
| **Mayor** | Se incumple un procedimiento o un parámetro **no crítico**, y hay que evaluar si afecta al producto: un tiempo de agitación no crítico superado en 30 min |
| **Menor** | Sin impacto en calidad: registro olvidado detectado y corregido el mismo día |

Un **parámetro crítico** (*critical parameter*) es, según la guía ICH Q7, el que debe mantenerse dentro de unos límites fijados de antemano para que el producto cumpla su especificación. En la hoja de producción suelen venir marcados. La misma guía pide **documentar y explicar toda desviación** e **investigar siempre las críticas** (ICH Q7, apartados 2.16 y 8.15).

Los nombres «mayor» y «menor» no vienen de la norma: cada empresa define sus categorías y criterios en su procedimiento, y quien clasifica la desviación es Calidad, no el operador.

### Investigación y causa raíz (*root cause*)
La pregunta no es "¿quién se equivocó?" sino "**¿por qué pudo pasar?**". Herramientas típicas:
- **5 porqués** (*5 Whys*): preguntar "¿por qué?" sucesivamente hasta llegar a la causa de fondo.
- **Diagrama de Ishikawa** o espina de pescado (*fishbone*): agrupa posibles causas en 6M: Mano de obra, Método, Máquina, Material, Medida y Medio ambiente.

### ¿Y si el lote no sale bien? Reprocesar, retrabajar, recuperar y mezclar
Cuando un lote o un intermedio no cumple, hay palabras que parecen iguales y no lo son. La guía ICH Q7 las separa así:

| Qué es | Ejemplo | ¿Se puede? |
|---|---|---|
| **Continuar el paso** | El control en proceso dice que el secado aún no ha terminado: se sigue secando | Sí. Es parte del proceso normal, no es reprocesar (ICH Q7, 14.21) |
| **Reprocesar** (*reprocessing*): repetir un paso que **ya forma parte** del proceso | Volver a cristalizar o a filtrar un lote | En general es aceptable, con evaluación y aprobación de Calidad. Si hay que hacerlo en la mayoría de los lotes, debe pasar a formar parte del proceso (14.20) |
| **Retrabajar** (*reworking*): aplicar un paso **distinto** de los del proceso | Purificar con otro disolvente que la hoja no contempla | Solo tras **investigar** por qué no cumple, y con evaluación, análisis y, si procede, estudios de estabilidad que demuestren que el producto es equivalente (14.30 y 14.31) |
| **Recuperar** (*recovery*) | Aprovechar el producto de las aguas madres, o destilar un disolvente para volver a usarlo | Sí, con procedimientos aprobados, si lo recuperado cumple su especificación y queda documentado (14.40 a 14.43) |
| **Mezclar lotes** (*blending*) | Juntar varios lotes pequeños en uno | Solo si **cada lote cumple por separado** antes de mezclar. Nunca se mezcla un lote fuera de especificación con otros para que el conjunto cumpla (8.41) |

Ninguna de estas decisiones es del operador: las toma Calidad y quedan escritas. Lo que sí es tuyo es avisar a tiempo y registrar lo que pasó.

Ejemplo de 5 porqués: la temperatura subió → la refrigeración no respondió → la válvula estaba cerrada → nadie la abrió tras el mantenimiento → el procedimiento de mantenimiento no incluía comprobar la posición de válvulas. **Causa raíz**: procedimiento incompleto.
`,
    plant: `
Durante una adición la temperatura llega a 31 °C y el máximo es 25 °C. Paras la adición, anotas la hora y el valor real (31 °C), avisas al supervisor. Él abre la desviación y QA evaluará si el lote está afectado (por ejemplo con análisis adicionales de impurezas).
`,
    batchRecord: `
- Número de desviación anotado en el paso afectado.
- Comentario con lo ocurrido, hora y firma.
- Al cierre del lote, lista de desviaciones y su estado.
`,
    terms: [
      { es: "Desviación", en: "Deviation", def: "Diferencia respecto a un procedimiento, parámetro o especificación aprobados." },
      { es: "Causa raíz", en: "Root cause", def: "Causa de fondo que, si se corrige, evita que el problema se repita." },
      { es: "Los 5 porqués", en: "5 Whys", def: "Técnica de preguntar «¿por qué?» varias veces para llegar a la causa raíz." },
      { es: "Diagrama de Ishikawa", en: "Fishbone / Ishikawa diagram", def: "Diagrama que agrupa posibles causas por categorías (6M)." },
      { es: "Evaluación de impacto", en: "Impact assessment", def: "Análisis de si una desviación afecta a la calidad del producto." },
      { es: "Reproceso", en: "Reprocessing", def: "Repetir un paso que ya forma parte del proceso establecido, por ejemplo volver a cristalizar." },
      { es: "Retrabajo", en: "Reworking", def: "Tratar un lote que no cumple con un paso distinto de los del proceso establecido. Exige investigación previa." },
      { es: "Mezcla de lotes", en: "Blending", def: "Unir lotes que cumplen cada uno su especificación para formar un lote homogéneo." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "Se carga por error un saco de un lote de materia prima distinto al indicado. ¿Qué haces?",
        options: [
          "Sigo, es el mismo producto",
          "Paro, registro lo ocurrido y aviso al supervisor",
          "Cambio el número de lote en la hoja",
          "Lo digo al final del turno",
        ],
        answer: 1,
        explain: "Es una desviación que hay que comunicar de inmediato y documentar tal cual ocurrió.",
      },
      {
        kind: "choice",
        q: "En una investigación, ¿cuál es la mejor pregunta?",
        options: ["¿Quién tiene la culpa?", "¿Por qué pudo pasar?", "¿Cómo lo ocultamos?", "¿Cuánto cuesta?"],
        answer: 1,
        explain: "Buscar la causa raíz evita que se repita; buscar culpables hace que la gente oculte problemas.",
      },
      {
        kind: "choice",
        q: "¿Qué son las 6M de Ishikawa?",
        options: [
          "Seis medidas de temperatura",
          "Mano de obra, Método, Máquina, Material, Medida y Medio ambiente",
          "Seis meses de investigación",
          "Seis firmas necesarias",
        ],
        answer: 1,
        explain: "Son las categorías donde se buscan posibles causas.",
      },
    ],
  },
  {
    slug: "capa-y-control-de-cambios",
    level: 16,
    order: 6,
    title: "CAPA y control de cambios",
    titleEn: "CAPA and change control",
    minutes: 12,
    summary: "Cómo se corrigen los problemas para que no vuelvan, y cómo se cambia algo sin romper el control.",
    body: `
### CAPA (*Corrective And Preventive Action*)
Acciones que salen de desviaciones, reclamaciones, auditorías o tendencias:
- **Corrección** (*correction*): arreglar lo inmediato (reparar la válvula).
- **Acción correctiva** (*corrective action*): eliminar la **causa raíz** para que **no se repita** (añadir al procedimiento la comprobación de válvulas).
- **Acción preventiva** (*preventive action*): evitar que pase algo parecido **en otro sitio** (revisar los procedimientos de los otros reactores).

Una CAPA tiene **responsable, fecha** y una **verificación de eficacia**: comprobar más tarde que de verdad funcionó.

### Control de cambios (*change control*)
Cualquier cambio que pueda afectar a la calidad se **propone, evalúa y aprueba antes** de hacerlo:
- Cambio de proveedor de una materia prima.
- Nuevo equipo o modificación de uno existente.
- Cambio de un parámetro del proceso o de un procedimiento.
- Cambio en un sistema informático.

Pasos: propuesta → evaluación de impacto (calidad, validación, regulatorio, seguridad) → aprobación por QA → ejecución → cierre con verificación.

Un cambio hecho sin control de cambios es una **desviación**, aunque el cambio sea una mejora.
`,
    plant: `
Mantenimiento quiere sustituir una bomba por otro modelo "igual pero más moderno". Aunque parezca equivalente, se abre un control de cambios: hay que evaluar materiales en contacto con el producto, caudal, limpieza y si hace falta cualificar la bomba nueva.
`,
    batchRecord: `
- Referencias a la versión del documento vigente tras un cambio.
- A veces, lotes "bajo control de cambios" con muestreo o controles adicionales.
`,
    terms: [
      { es: "Acción correctiva y preventiva", en: "Corrective and Preventive Action (CAPA)", def: "Acciones para eliminar la causa de un problema y evitar que aparezca." },
      { es: "Verificación de eficacia", en: "Effectiveness check", def: "Comprobación posterior de que una CAPA ha funcionado." },
      { es: "Control de cambios", en: "Change control", def: "Sistema para evaluar y aprobar cambios antes de aplicarlos." },
      { es: "Corrección", en: "Correction", def: "Arreglo inmediato del problema, sin atacar su causa." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "Un filtro se rompe. Se cambia por uno nuevo. Eso es…",
        options: ["Una acción correctiva", "Una corrección", "Una acción preventiva", "Un control de cambios"],
        answer: 1,
        explain: "Cambiar el filtro arregla lo inmediato. La acción correctiva atacaría por qué se rompió.",
      },
      {
        kind: "choice",
        q: "¿Cuándo se aprueba un cambio que afecta a la calidad?",
        options: ["Después de hacerlo", "Antes de hacerlo", "No hace falta si es una mejora", "Solo si lo pide un cliente"],
        answer: 1,
        explain: "El control de cambios exige evaluar y aprobar antes de ejecutar.",
      },
      {
        kind: "choice",
        q: "Tras una desviación por una válvula cerrada en el R-101, se revisan los procedimientos de los demás reactores para que no ocurra allí. ¿Qué es?",
        options: [
          "Una corrección",
          "Una acción correctiva",
          "Una acción preventiva",
          "Un control de cambios",
        ],
        answer: 2,
        explain: "Evitar que el problema aparezca en otro sitio donde aún no ha pasado es una acción preventiva.",
      },
    ],
  },
  {
    slug: "cualificacion-y-validacion",
    level: 16,
    order: 8,
    title: "Cualificación y validación",
    titleEn: "Qualification and validation",
    minutes: 15,
    summary: "Cómo se demuestra con pruebas documentadas que equipos, procesos, limpiezas y métodos funcionan.",
    body: `
**Validar** es demostrar, **con pruebas documentadas**, que algo hace de forma consistente lo que tiene que hacer. Para equipos se suele decir **cualificar**.

### Cualificación de equipos (EU GMP Anexo 15)
| Fase | Inglés | Pregunta |
|---|---|---|
| DQ | *Design Qualification* | ¿El diseño cumple lo que necesitamos? |
| IQ | *Installation Qualification* | ¿Está instalado como dice el diseño? |
| OQ | *Operational Qualification* | ¿Funciona en todo su rango de trabajo? |
| PQ | *Performance Qualification* | ¿Funciona bien con el proceso real, de forma repetida? |

### Validación del proceso (*process validation*)
Demostrar que el proceso produce lotes que cumplen especificaciones de forma **reproducible**. Tradicionalmente con **tres lotes consecutivos** que cumplen; hoy se completa con la **verificación continuada** del proceso.

### Validación de limpieza (*cleaning validation*)
Demostrar que la limpieza deja el equipo por debajo de los límites de **restos del producto anterior**, de detergente y de microorganismos. Se toman muestras con **hisopos** (*swabs*) y del **agua de aclarado** (*rinse*).

### Validación de métodos analíticos (ICH Q2)
Demostrar que un método de laboratorio mide bien: exactitud, precisión, especificidad, linealidad, límites de detección y cuantificación.

### Validación de sistemas informatizados (GAMP 5)
Demostrar que un software (LIMS, MES, control de planta) hace lo que debe y protege los datos.

### ¿Qué significa para ti?
Un proceso validado solo es válido **si se hace exactamente igual**. Por eso los rangos de la hoja no se discuten: son los que se demostraron.
`,
    plant: `
En un reactor recién instalado verás etiquetas "Equipo en cualificación – no usar en producción". Hasta que QA apruebe el informe de PQ, ese equipo no se usa para lotes comerciales.
`,
    batchRecord: `
- Equipos con su estado de cualificación vigente.
- En lotes de validación, muestreos y registros adicionales indicados en el protocolo.
- Parámetros críticos de proceso (CPP) marcados en la hoja.
`,
    terms: [
      { es: "Validación", en: "Validation", def: "Demostración documentada de que un proceso o sistema da siempre el resultado esperado." },
      { es: "Cualificación de instalación / operación / funcionamiento", en: "IQ / OQ / PQ", def: "Fases de cualificación de un equipo." },
      { es: "Validación de limpieza", en: "Cleaning validation", def: "Demostración de que la limpieza elimina restos por debajo de límites aceptables." },
      { es: "Parámetro crítico de proceso", en: "Critical Process Parameter (CPP)", def: "Parámetro cuya variación afecta a la calidad del producto." },
      { es: "Protocolo", en: "Protocol", def: "Documento aprobado que define pruebas y criterios de aceptación de una validación." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "¿Qué fase comprueba que el equipo está instalado según el diseño?",
        options: ["DQ", "IQ", "OQ", "PQ"],
        answer: 1,
        explain: "IQ: Installation Qualification.",
      },
      {
        kind: "choice",
        q: "¿Por qué no se pueden cambiar los rangos de la hoja aunque «funcione»?",
        options: [
          "Por tradición",
          "Porque son los que se demostraron en la validación; fuera de ellos no hay garantía",
          "Porque lo dice el supervisor",
          "Porque el software no deja",
        ],
        answer: 1,
        explain: "La validación solo cubre lo que se probó. Cambiarlo requiere control de cambios.",
      },
      {
        kind: "choice",
        q: "¿Qué fase de cualificación comprueba que el equipo funciona en todo su rango de trabajo, normalmente sin producto?",
        options: [
          "DQ",
          "IQ",
          "OQ",
          "PQ",
        ],
        answer: 2,
        explain: "OQ (Operational Qualification): alarmas, velocidades, temperaturas… en todo el rango. La PQ lo prueba con el proceso real.",
      },
    ],
  },
  {
    slug: "gestion-de-riesgos",
    level: 16,
    order: 10,
    title: "Gestión de riesgos de calidad (ICH Q9(R1))",
    titleEn: "Quality risk management",
    minutes: 12,
    summary: "Cómo se decide qué es importante: probabilidad y gravedad del daño, y la detectabilidad como ayuda.",
    body: `
No todo tiene la misma importancia. La **gestión de riesgos de calidad** (ICH Q9, revisada en 2023 como **Q9(R1)**) sirve para concentrar el esfuerzo donde más afecta al paciente. La revisión insiste en que las puntuaciones son **subjetivas**: hay que justificarlas con datos y no usar el número como excusa para no actuar.

### Riesgo
ICH Q9 define el **riesgo** (*risk*) como la combinación de dos cosas:
- **Probabilidad** (*probability*) de que ocurra un daño: ¿cuántas veces puede pasar?
- **Gravedad** (*severity*) de ese daño: ¿cuánto daño causaría?

Algunas herramientas añaden un tercer factor para estimar el riesgo:
- **Detectabilidad** (*detectability*): ¿lo detectaríamos antes de que llegue al paciente? No forma parte de la definición de riesgo, pero ayuda a priorizar: un fallo que se detecta siempre a tiempo preocupa menos que uno que pasa inadvertido.

### FMEA / AMFE
Una herramienta muy usada. Para cada fallo posible se puntúa gravedad (G), probabilidad (P) y detección (D), por ejemplo del 1 al 10, y se calcula el **número de prioridad de riesgo**:

> **NPR = G × P × D** (en inglés *RPN, Risk Priority Number*)

Cuanto mayor, antes hay que actuar. Ojo: en detección, **10 = muy difícil de detectar**. Y una **gravedad muy alta** se trata aunque el NPR salga bajo.

### Dónde se usa
Para decidir qué parámetros son críticos, qué validar, cómo clasificar una desviación, cuánto muestrear o qué cambios necesitan más pruebas.
`,
    plant: `
Fallo: "carga de un disolvente equivocado". G = 9 (impurezas desconocidas), P = 2 (hay doble verificación), D = 4 (el IPC lo detectaría en parte). NPR = 9 × 2 × 4 = 72.

Si se añade lectura de código de barras en la carga, P baja a 1 y el NPR baja a 36.
`,
    batchRecord: `
- Pasos con doble verificación o lectura de código: suelen venir de un análisis de riesgos.
- Parámetros marcados como críticos.
`,
    terms: [
      { es: "Gestión de riesgos de calidad", en: "Quality Risk Management (QRM)", def: "Proceso para evaluar, controlar y revisar los riesgos para la calidad (ICH Q9)." },
      { es: "Análisis modal de fallos y efectos", en: "FMEA (AMFE)", def: "Herramienta que puntúa cada fallo posible por gravedad, probabilidad y detección." },
      { es: "Número de prioridad de riesgo", en: "Risk Priority Number (RPN)", def: "Producto G × P × D usado para priorizar acciones." },
      { es: "Gravedad", en: "Severity", def: "Magnitud del daño que puede causar un fallo." },
    ],
    quiz: [
      {
        kind: "number",
        q: "Un fallo tiene gravedad 8, probabilidad 3 y detección 5. ¿Cuál es su NPR?",
        answer: 120,
        tolerance: 0.001,
        unit: "",
        explain: "8 × 3 × 5 = 120.",
      },
      {
        kind: "choice",
        q: "En un AMFE, una detección de 10 significa…",
        options: ["Que se detecta siempre", "Que es muy difícil de detectar", "Que no importa", "Que hay 10 controles"],
        answer: 1,
        explain: "La escala de detección se invierte: cuanto más difícil de detectar, mayor puntuación y mayor riesgo.",
      },
      {
        kind: "number",
        q: "Un fallo tiene G = 7, P = 4 y D = 6. Se mejora el IPC y la detección baja a D = 2. ¿Cuál es el nuevo NPR?",
        answer: 56,
        tolerance: 0.001,
        unit: "",
        explain: "7 × 4 × 2 = 56 (antes era 7 × 4 × 6 = 168).",
      },
    ],
  },
];

export const nivel16: Lesson[] = [...gmp, sistemaDeCalidadAFondo, desviacionesYCapaAFondo, cambiosYRiesgosAFondo];
