import type { Lesson } from "./types";

export const nivel17: Lesson[] = [
  {
    slug: "lims",
    level: 17,
    order: 1,
    title: "LIMS: el sistema del laboratorio",
    titleEn: "Laboratory Information Management System",
    minutes: 15,
    summary: "Qué es un LIMS, qué hace con cada muestra y cómo se relaciona contigo como operador.",
    body: `
Un **LIMS** (*Laboratory Information Management System*) es el programa que gestiona **todo lo que pasa con las muestras** en el laboratorio de control de calidad.

### El viaje de una muestra en el LIMS
1. **Registro** (*login / sample registration*): se crea la muestra con su producto, lote, punto de muestreo y fecha. El LIMS genera una **etiqueta con código de barras**.
2. **Asignación de análisis** (*test assignment*): según la especificación, el LIMS sabe qué ensayos hay que hacer (HPLC, KF, LOD…).
3. **Recepción** en el laboratorio: se escanea la etiqueta. Queda registrado quién la recibió y cuándo (**cadena de custodia**).
4. **Introducción de resultados** (*result entry*): a mano o directamente desde el instrumento (balanza, KF, sistema de cromatografía).
5. **Comparación con la especificación**: el LIMS marca en rojo lo que está **fuera de especificación** (*OOS*).
6. **Revisión y aprobación** (*review / approval*): un segundo analista revisa y QA aprueba.
7. **Certificado de análisis** (*Certificate of Analysis, CoA*) y decisión de uso del lote.

### Otras funciones
- Gestión de **estabilidades** (muestras guardadas y analizadas a lo largo del tiempo).
- Control de **reactivos, patrones e instrumentos** (calibraciones, caducidades).
- **Tendencias** de resultados entre lotes.
- **Audit trail** de cada cambio.

### Qué tiene que ver contigo
Como operador, tú **tomas las muestras** del proceso (IPC, producto final). La etiqueta del LIMS y los datos que registras al muestrear (hora, punto, cantidad, quién) son el **inicio de la cadena**. Una muestra mal identificada invalida el análisis.
`,
    plant: `
Tomas el IPC de la etapa de reacción. Imprimes la etiqueta del LIMS para "Lote 24-0117, Etapa 2, IPC fin de reacción", la pegas en el vial, anotas la hora de toma en la hoja y la llevas al laboratorio. Allí la escanean: el LIMS sabe que hay que hacer un HPLC y que el límite es ≤ 1,0 %.
`,
    batchRecord: `
- Número de muestra del LIMS junto al paso de muestreo.
- Resultado del IPC y decisión (a veces el resultado llega impreso o se consulta en el LIMS).
- Al final, el CoA del lote.
`,
    terms: [
      { es: "Sistema de gestión de información de laboratorio", en: "LIMS", def: "Programa que gestiona muestras, análisis, resultados y aprobaciones del laboratorio." },
      { es: "Registro de muestra", en: "Sample login / registration", def: "Alta de una muestra en el LIMS con sus datos de identificación." },
      { es: "Fuera de especificación", en: "Out of Specification (OOS)", def: "Resultado que no cumple el límite establecido." },
      { es: "Certificado de análisis", en: "Certificate of Analysis (CoA)", def: "Documento con los resultados de un lote frente a sus especificaciones." },
      { es: "Cadena de custodia", en: "Chain of custody", def: "Registro de quién ha tenido la muestra en cada momento." },
      { es: "Sistema de datos cromatográficos", en: "Chromatography Data System (CDS)", def: "Software que controla los equipos de HPLC/GC y guarda sus datos." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "¿Qué hace el LIMS cuando un resultado no cumple la especificación?",
        options: ["Lo borra", "Lo marca como fuera de especificación (OOS)", "Lo redondea", "Nada"],
        answer: 1,
        explain: "El LIMS compara automáticamente con la especificación y señala el OOS para su investigación.",
      },
      {
        kind: "choice",
        q: "Se te cae la etiqueta del vial de muestra. ¿Qué haces?",
        options: [
          "Escribo el lote a mano en el vial",
          "Lo comunico y sigo el procedimiento; normalmente se repite la toma con etiqueta nueva",
          "Le pego la etiqueta de otra muestra",
          "Lo llevo igualmente al laboratorio",
        ],
        answer: 1,
        explain: "Una muestra sin identificación fiable no sirve; la trazabilidad es parte del dato.",
      },
    ],
  },
  {
    slug: "mes-y-ebr",
    level: 17,
    order: 2,
    title: "MES y hoja de producción electrónica",
    titleEn: "MES and electronic batch record",
    minutes: 15,
    summary: "Cómo funciona una hoja de producción en pantalla y qué cambia respecto al papel.",
    body: `
Muchas plantas sustituyen la hoja en papel por un **batch record electrónico** (*EBR, electronic batch record*) dentro de un **MES** (*Manufacturing Execution System*).

### Qué hace un MES
- Muestra **paso a paso** las instrucciones del lote en una pantalla o tableta.
- Pide **escanear** el código de barras del material, del recipiente y del equipo: si no coincide, **no deja continuar**.
- Recibe datos **directamente** de básculas, sensores y del sistema de control de planta.
- Comprueba los rangos: si un valor está fuera, lo marca como **excepción** y pide comentario.
- Pide **firma electrónica** en los pasos que lo requieren, y a veces una segunda firma de verificación.
- Genera al final el **informe de excepciones** (*review by exception*): QA revisa sobre todo lo que se salió de lo normal.

### Ventajas
- Menos errores de transcripción y cálculo.
- Imposible saltarse un paso u olvidar una casilla.
- Datos disponibles en tiempo real.

### Lo que no cambia
Las reglas ALCOA+ siguen igual: **tu usuario es tu firma**, se registra en el momento y no se comparte la sesión.
`,
    plant: `
En la pantalla aparece: "Paso 12: cargar 254,0 kg de metanol (rango 252,0–256,0)". Escaneas el contenedor, la báscula envía 254,3 kg automáticamente, firmas con tu usuario y contraseña, y un compañero firma la verificación. Si hubieras escaneado otro material, el sistema habría bloqueado el paso.
`,
    batchRecord: `
- Pasos con firma electrónica: nombre, fecha, hora y significado ("realizado", "verificado").
- Excepciones con comentario.
- Datos transferidos desde equipos (sin escribirlos a mano).
`,
    terms: [
      { es: "Sistema de ejecución de fabricación", en: "Manufacturing Execution System (MES)", def: "Software que guía y registra la fabricación en planta." },
      { es: "Hoja de producción electrónica", en: "Electronic Batch Record (EBR)", def: "Registro de lote en formato electrónico." },
      { es: "Revisión por excepción", en: "Review by exception", def: "Revisión centrada en los datos fuera de lo normal." },
      { es: "Código de barras", en: "Barcode", def: "Código que identifica materiales, recipientes y equipos al escanearlo." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "Escaneas un material que no corresponde al paso. ¿Qué hace normalmente el MES?",
        options: ["Lo acepta", "Bloquea el paso y avisa del error", "Cambia la receta", "Imprime un certificado"],
        answer: 1,
        explain: "La verificación por código de barras evita cargas equivocadas.",
      },
      {
        kind: "choice",
        q: "Un compañero te pide que firmes con su usuario porque ha olvidado la contraseña. ¿Qué haces?",
        options: ["Firmo, es un favor", "No: cada usuario es personal; debe pedir que le restablezcan la contraseña", "Le doy mi usuario", "Apunto su contraseña"],
        answer: 1,
        explain: "La firma electrónica equivale a la manuscrita: usarla por otro es falsificar.",
      },
    ],
  },
  {
    slug: "erp-y-trazabilidad",
    level: 17,
    order: 3,
    title: "ERP y trazabilidad de materiales",
    titleEn: "ERP and material traceability",
    minutes: 10,
    summary: "Cómo se sabe en todo momento dónde está cada lote y en qué estado.",
    body: `
El **ERP** (*Enterprise Resource Planning*, por ejemplo SAP) gestiona la parte de **negocio y logística**: compras, stock, almacenes, órdenes de fabricación y ventas.

### Lo que verás del ERP
- **Orden de fabricación** (*process order*): qué lote fabricar, cuánto y con qué materiales.
- **Estados de stock**: **cuarentena**, **liberado** (aprobado) o **bloqueado/rechazado**. Solo se puede consumir material liberado.
- **Consumos y entradas**: cada kg cargado al reactor se descuenta del stock; el producto obtenido entra como un lote nuevo.

### Trazabilidad (*traceability*)
Gracias al ERP, MES y LIMS se puede contestar en minutos:
- **Hacia atrás**: ¿qué lotes de materia prima se usaron en este lote de API?
- **Hacia delante**: ¿a qué clientes se envió este lote?

Esto es imprescindible si hay que **retirar** un producto del mercado (*recall*).

### Cómo se conectan los sistemas
ERP (qué fabricar y con qué) → MES (cómo se fabrica, paso a paso) → sistema de control de planta (DCS) que mueve válvulas y lee sensores. En paralelo, el LIMS gestiona las muestras y su aprobación, que el ERP usa para cambiar el estado del lote.
`,
    plant: `
Vas a cargar un saco de reactivo y el escáner dice "Lote en cuarentena". No se usa: el laboratorio aún no lo ha aprobado. Avisas al supervisor para comprobar si hay otro lote liberado.
`,
    batchRecord: `
- Número de orden de fabricación.
- Lotes de cada material consumido.
- Número de lote del producto obtenido y cantidad.
`,
    terms: [
      { es: "Planificación de recursos empresariales", en: "Enterprise Resource Planning (ERP)", def: "Sistema de gestión de compras, stock, producción y ventas." },
      { es: "Orden de fabricación", en: "Process / production order", def: "Instrucción del ERP para fabricar un lote." },
      { es: "Trazabilidad", en: "Traceability", def: "Capacidad de seguir un lote hacia atrás (materias primas) y hacia delante (clientes)." },
      { es: "Retirada de producto", en: "Recall", def: "Recuperación de un producto ya distribuido por un problema de calidad." },
      { es: "Sistema de control distribuido", en: "Distributed Control System (DCS)", def: "Sistema que controla automáticamente los equipos de planta." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "¿Qué estado debe tener un material para poder usarlo en producción?",
        options: ["Cuarentena", "Liberado (aprobado)", "Bloqueado", "Cualquiera"],
        answer: 1,
        explain: "Solo los materiales aprobados por calidad pueden consumirse.",
      },
      {
        kind: "choice",
        q: "¿Qué permite la trazabilidad hacia delante?",
        options: [
          "Saber qué materias primas se usaron",
          "Saber a qué clientes se envió un lote",
          "Saber quién limpió el reactor",
          "Saber el precio del lote",
        ],
        answer: 1,
        explain: "Hacia delante = hacia el cliente; hacia atrás = hacia las materias primas.",
      },
    ],
  },
  {
    slug: "audit-trail-y-firma-electronica",
    level: 17,
    order: 4,
    title: "Audit trail y firma electrónica",
    titleEn: "Audit trail and electronic signatures",
    minutes: 12,
    summary: "Las reglas de 21 CFR Part 11 y del Anexo 11 europeo que hacen que un dato electrónico sea fiable.",
    body: `
Los registros electrónicos deben ser tan fiables como el papel. Las dos normas de referencia son:
- **21 CFR Part 11** (FDA, EE. UU.): registros y firmas electrónicas.
- **Anexo 11** de las GMP europeas: sistemas informatizados.

### Audit trail (registro de auditoría)
Un registro **automático, seguro y con fecha y hora** que guarda **quién** hizo **qué**, **cuándo** y, en los cambios GMP, **por qué**. Ejemplo:

| Fecha y hora | Usuario | Acción | Valor anterior | Valor nuevo | Motivo |
|---|---|---|---|---|---|
| 18/11/2026 10:42 | jlopez | Modificar T reacción | 61,5 | 60,5 | Error de lectura |

El usuario **no puede** desactivarlo ni borrarlo. QA lo revisa antes de liberar el lote.

### Firma electrónica
- Es **personal e intransferible**, igual que la manuscrita.
- Suele tener **dos componentes**: usuario y contraseña.
- Al firmar quedan el **nombre**, la **fecha y hora** y el **significado** (realizado, revisado, aprobado).

### Buenas prácticas
- **No compartir** usuario ni contraseña. No dejarla apuntada.
- **Bloquear la sesión** (o cerrar) al alejarte del puesto.
- No usar la sesión de otra persona aunque esté abierta.
- Los relojes de los sistemas los controla informática: no se cambian.
`,
    plant: `
Te levantas a tomar una muestra y dejas el terminal del MES abierto. Un compañero introduce un dato con tu sesión. El audit trail dirá que fuiste tú. Por eso: **bloquear siempre** la sesión al irte.
`,
    batchRecord: `
- Firmas electrónicas con su significado.
- Informe de audit trail revisado por QA como parte de la liberación.
`,
    terms: [
      { es: "Registro de auditoría", en: "Audit trail", def: "Historial automático e inalterable de creación, cambio y borrado de datos." },
      { es: "Firma electrónica", en: "Electronic signature", def: "Firma en un sistema informático, legalmente equivalente a la manuscrita." },
      { es: "21 CFR Part 11", en: "21 CFR Part 11", def: "Norma de la FDA sobre registros y firmas electrónicas." },
      { es: "Anexo 11", en: "EU GMP Annex 11", def: "Anexo de las GMP europeas sobre sistemas informatizados." },
      { es: "Control de acceso", en: "Access control", def: "Gestión de quién puede entrar en un sistema y qué puede hacer." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "¿Qué cuatro cosas registra un buen audit trail en un cambio GMP?",
        options: [
          "Quién, qué, cuándo y por qué",
          "Solo el valor final",
          "El nombre del ordenador",
          "La opinión del usuario",
        ],
        answer: 0,
        explain: "Además suele guardar el valor anterior y el nuevo.",
      },
      {
        kind: "choice",
        q: "Vas a alejarte del terminal 5 minutos. ¿Qué haces?",
        options: ["Nada, vuelvo enseguida", "Bloqueo o cierro la sesión", "Le digo a un compañero que vigile", "Apago la pantalla"],
        answer: 1,
        explain: "Todo lo que se haga con tu sesión quedará a tu nombre.",
      },
    ],
  },
  {
    slug: "validacion-de-sistemas",
    level: 17,
    order: 5,
    title: "Validación de sistemas informatizados (GAMP 5)",
    titleEn: "Computerized system validation",
    minutes: 12,
    summary: "Cómo se demuestra que un programa GMP funciona bien y protege los datos.",
    body: `
Un sistema informatizado que afecta a la calidad (LIMS, MES, ERP, control de planta, software de un equipo de laboratorio) debe estar **validado**: demostrado y documentado que hace lo que debe.

### GAMP 5
Guía de la industria (ISPE) para validar sistemas con un enfoque **basado en riesgos**: más pruebas donde más riesgo hay. La 2.ª edición (2022) clasifica el software en categorías:

| Categoría | Tipo | Ejemplo | Esfuerzo de validación |
|---|---|---|---|
| 1 | Infraestructura | Sistema operativo, bases de datos | Bajo |
| 3 | Software estándar no configurado | Firmware de una balanza | Bajo-medio |
| 4 | Software configurado | LIMS o MES configurados para la planta | Medio-alto |
| 5 | Software a medida | Programa desarrollado para la empresa | Alto |

### Ciclo de vida
Requisitos del usuario (**URS**) → especificaciones → configuración o desarrollo → pruebas (IQ, OQ, PQ) → informe de validación → uso con **control de cambios**, copias de seguridad, gestión de accesos y revisiones periódicas → retirada (conservando los datos).

### Qué significa para ti
- Solo se usan **sistemas validados** y la versión aprobada.
- Si un sistema hace algo raro (calcula mal, se cuelga, muestra datos extraños), **se comunica**: puede ser una desviación.
- No se instalan programas ni se usan hojas de cálculo propias para datos GMP sin validar.
`,
    plant: `
Un compañero ha hecho una hoja de Excel para calcular las cargas "porque es más rápido". Aunque los números estén bien, no es un sistema validado ni controlado: los cálculos oficiales son los del MES o la hoja aprobada.
`,
    batchRecord: `
- Identificación del sistema y versión en los informes impresos.
- Los cálculos que hace el sistema validado no se rehacen a mano salvo que lo pida el procedimiento.
`,
    terms: [
      { es: "Validación de sistemas informatizados", en: "Computerized System Validation (CSV)", def: "Demostración documentada de que un sistema informático funciona según lo previsto." },
      { es: "GAMP 5", en: "GAMP 5", def: "Guía de ISPE para validar sistemas informatizados con un enfoque basado en riesgos." },
      { es: "Especificación de requisitos de usuario", en: "User Requirements Specification (URS)", def: "Documento que define lo que el sistema debe hacer." },
      { es: "Copia de seguridad", en: "Backup", def: "Copia de los datos para poder recuperarlos." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "¿Qué categoría GAMP suele tener un LIMS configurado para la planta?",
        options: ["Categoría 1", "Categoría 3", "Categoría 4", "No necesita validación"],
        answer: 2,
        explain: "Es software comercial configurado: categoría 4.",
      },
      {
        kind: "choice",
        q: "¿Se puede usar una hoja de cálculo personal para calcular cargas GMP?",
        options: [
          "Sí, si está bien hecha",
          "No, salvo que esté validada y controlada",
          "Sí, si la revisa el supervisor",
          "Sí, en el turno de noche",
        ],
        answer: 1,
        explain: "Las herramientas que generan datos GMP deben estar validadas y controladas.",
      },
    ],
  },
];
