import type { Lesson } from "./types";
import { trazabilidadAFondo } from "./nivel17-trazabilidad";
import { recepcionAFondo } from "./nivel17-recepcion";
import { envasadoAFondo } from "./nivel17-envasado";

const logistica: Lesson[] = [
  {
    slug: "recepcion-y-cuarentena",
    level: 17,
    order: 1,
    title: "Recepción de materiales y estados de calidad",
    titleEn: "Goods receipt and quality status",
    minutes: 15,
    summary: "Qué pasa desde que llega un camión hasta que un material se puede usar.",
    body: `
### El recorrido de un material
1. **Llegada**: se comprueba el albarán (*delivery note*) contra el pedido, que el **proveedor está aprobado** y el estado de los envases (roturas, precintos, etiquetas legibles).
2. **Registro** en el ERP: se le asigna un **número de lote interno** y queda en **cuarentena** (*quarantine*). Se etiqueta.
3. **Muestreo** por personal formado, en una zona o cabina adecuada, y análisis según la especificación.
4. **Decisión de Calidad**: **aprobado** (*released / approved*) o **rechazado** (*rejected*).
5. Ubicación en el almacén según el estado.

ICH Q7 (sección 7) pide que los materiales se mantengan en cuarentena hasta su análisis o examen y su aprobación, y que se puedan identificar los envases con su estado.

### Estados típicos
| Estado | En inglés | ¿Se puede usar? |
|---|---|---|
| Cuarentena | *Quarantine* | No |
| Muestreado | *Sampled* | No (pendiente de resultado) |
| Aprobado / liberado | *Released / approved* | Sí |
| Rechazado | *Rejected* | No; se separa y se devuelve o destruye |
| Bloqueado | *Blocked / on hold* | No (investigación en curso) |

El estado puede indicarse con **etiquetas de colores**, con **zonas físicas separadas** o, cada vez más, solo en el **sistema informático** (ERP/WMS) con lectura de código de barras. Lo que manda es el procedimiento de tu empresa.

### Proveedores
Solo se compra a **proveedores aprobados** tras una evaluación (cuestionarios, auditorías, historial). Los materiales críticos se reciben con el **certificado de análisis** del proveedor, que se verifica con análisis propios.
`,
    plant: `
Llega un lote de 16 bidones de un reactivo. Uno tiene el precinto roto. El almacenero registra la recepción, separa ese bidón, lo etiqueta como bloqueado y avisa a Calidad. Los otros 15 quedan en cuarentena hasta el resultado del laboratorio.
`,
    batchRecord: `
- En la hoja de fabricación se anota el **lote interno** de cada material cargado y se comprueba que está **aprobado** y dentro de su fecha de reanálisis o caducidad.
`,
    terms: [
      { es: "Cuarentena", en: "Quarantine", def: "Estado de un material que aún no se puede usar porque espera la decisión de Calidad." },
      { es: "Aprobado / liberado", en: "Released / approved", def: "Material autorizado por Calidad para su uso." },
      { es: "Rechazado", en: "Rejected", def: "Material que no cumple; no se puede usar." },
      { es: "Albarán", en: "Delivery note", def: "Documento que acompaña la mercancía." },
      { es: "Proveedor aprobado", en: "Approved supplier", def: "Proveedor evaluado y autorizado por Calidad." },
      { es: "Lote interno", en: "Internal batch number", def: "Número que la empresa asigna al lote recibido para su trazabilidad." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "Un material en cuarentena…",
        options: [
          "Se puede usar si hay prisa",
          "No se puede usar hasta que Calidad lo apruebe",
          "Se puede usar la mitad",
          "Está caducado",
        ],
        answer: 1,
        explain: "Solo los materiales aprobados se usan en producción.",
      },
      {
        kind: "choice",
        q: "Llega un envase con el precinto roto. ¿Qué se hace?",
        options: [
          "Usarlo primero",
          "Separarlo, identificarlo como bloqueado y avisar a Calidad",
          "Tirarlo sin decir nada",
          "Volver a precintarlo",
        ],
        answer: 1,
        explain: "Un precinto roto puede indicar contaminación o manipulación: Calidad decide.",
      },
      {
        kind: "choice",
        q: "Llega un camión con materia prima. ¿Qué se comprueba primero?",
        options: [
          "El color del camión",
          "El albarán frente al pedido, que el proveedor está aprobado y el estado de envases, precintos y etiquetas",
          "Nada: se descarga y luego se mira",
          "Solo el peso total",
        ],
        answer: 1,
        explain: "Antes de dar entrada se verifica documentación, proveedor y estado físico; después el material queda en cuarentena.",
      },
    ],
  },
  {
    slug: "almacenamiento",
    level: 17,
    order: 3,
    title: "Almacenamiento: condiciones, FEFO y fechas",
    titleEn: "Storage: conditions, FEFO and dating",
    minutes: 15,
    summary: "Cómo se guardan materiales y producto para que no se degraden ni se confundan.",
    body: `
### Condiciones de almacenamiento
Cada material tiene sus condiciones (en la etiqueta y la especificación):
- **Temperatura ambiente controlada** (por ejemplo, "no conservar por encima de 25 °C").
- **Refrigerado** (2–8 °C).
- **Congelado**.
- Protegido de la **luz** o de la **humedad**.

Los almacenes GMP tienen **registro continuo de temperatura** (y humedad cuando importa), con alarmas. Se hace un **mapeo térmico** (*temperature mapping*) para saber dónde están los puntos más fríos y calientes.

### Orden de salida
- **FEFO** (*First Expired, First Out*): sale primero lo que caduca antes. Es la regla preferida.
- **FIFO** (*First In, First Out*): sale primero lo que entró antes.

### Fechas
- **Fecha de caducidad** (*expiry date*): después de esta fecha **no se usa**.
- **Fecha de reanálisis** (*retest date*): habitual en API y materias primas. Llegada esa fecha, el material se **vuelve a analizar** y, si cumple, se puede usar (ICH Q7 11.6). Un API con fecha de reanálisis de 24 meses fabricado en marzo de 2026 debe reanalizarse antes de usarse a partir de marzo de 2028.

### Separación de químicos peligrosos
La normativa de almacenamiento de productos químicos (**RD 656/2017** y sus instrucciones técnicas, APQ) pide separar incompatibles:
- Inflamables lejos de **oxidantes**.
- **Ácidos** separados de **bases**.
- Cubetos de retención (*bunds*) para recoger derrames.
- Armarios o almacenes específicos para inflamables.

### Orden y limpieza
Palés en buen estado, nada en el suelo, pasillos libres, plagas controladas (*pest control*), zonas identificadas. Una confusión en el almacén se convierte en un **error de carga** en producción.
`,
    plant: `
Hay dos lotes aprobados del mismo disolvente: el A caduca en junio y el B en septiembre. Aunque el B está más a mano, el operador coge el A (FEFO). El escáner del ERP lo confirma.
`,
    batchRecord: `
- Comprobación en la carga: lote aprobado y dentro de fecha.
- Condiciones de almacenamiento del producto intermedio entre etapas y su **tiempo máximo de espera** (*hold time*).
`,
    terms: [
      { es: "FEFO", en: "First Expired, First Out", def: "Sale primero lo que caduca antes." },
      { es: "FIFO", en: "First In, First Out", def: "Sale primero lo que entró antes." },
      { es: "Fecha de caducidad", en: "Expiry date", def: "Fecha a partir de la cual el material no debe usarse." },
      { es: "Fecha de reanálisis", en: "Retest date", def: "Fecha en que el material debe volver a analizarse antes de usarse." },
      { es: "Mapeo térmico", en: "Temperature mapping", def: "Estudio de la distribución de temperaturas de un almacén o cámara." },
      { es: "Cubeto de retención", en: "Bund / secondary containment", def: "Recinto que recoge un posible derrame." },
      { es: "Tiempo de espera", en: "Hold time", def: "Tiempo máximo que un intermedio puede esperar antes de la siguiente etapa." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "Según FEFO, ¿qué lote usas primero?",
        options: ["El que llegó último", "El que caduca antes", "El más grande", "El más cercano"],
        answer: 1,
        explain: "First Expired, First Out.",
      },
      {
        kind: "choice",
        q: "Un API ha superado su fecha de reanálisis. ¿Se puede usar?",
        options: [
          "Nunca",
          "Solo si se reanaliza y cumple, según el procedimiento",
          "Sí, sin más",
          "Solo la mitad",
        ],
        answer: 1,
        explain: "La fecha de reanálisis obliga a volver a analizar; la de caducidad, en cambio, impide el uso.",
      },
      {
        kind: "choice",
        q: "¿Qué no debe almacenarse junto a disolventes inflamables?",
        options: ["Otros inflamables en su armario", "Oxidantes", "Etiquetas", "Palés vacíos en su zona"],
        answer: 1,
        explain: "Oxidante + combustible = riesgo de incendio grave.",
      },
    ],
  },
  {
    slug: "envasado-y-etiquetado",
    level: 17,
    order: 5,
    title: "Envasado y etiquetado del API",
    titleEn: "API packaging and labelling",
    minutes: 15,
    summary: "El último paso en planta: meter el producto en sus envases sin errores ni contaminación.",
    body: `
### Cómo se envasa un API
Normalmente en **doble bolsa de polietileno** (*double PE liner*), cerrada con bridas, dentro de un **bidón** de cartón (*fibre drum*) o de plástico (HDPE). A veces con **desecante** o **atmósfera de nitrógeno**. Se cierra con un **precinto de seguridad** (*tamper-evident seal*) numerado.

El material de envase en contacto con el producto debe estar **especificado y aprobado**: si se cambia la bolsa por otra "parecida", es un cambio que se evalúa.

### Despeje de línea (*line clearance*)
Antes de empezar, se comprueba que en la sala y los equipos **no queda nada** del lote o producto anterior: producto, etiquetas, envases, documentos. Lo hace el operador y lo verifica otra persona. Es la principal defensa contra **mezclas** y **etiquetas equivocadas** (ICH Q7, sección 9).

### Etiquetas
Las etiquetas del API llevan como mínimo: **nombre** del producto, **número de lote**, y la información necesaria de almacenamiento, fecha de reanálisis o caducidad y peso. Se imprimen o se emiten de forma controlada:
- Se emite el número exacto necesario.
- Se comprueba la primera etiqueta (texto, lote) y se adjunta un **especimen** al registro.
- Al terminar se hace la **conciliación**: emitidas = usadas + destruidas + devueltas. Una diferencia sin explicar se investiga, porque podría haber una etiqueta en el envase equivocado.

### Pesos
Cada envase se pesa en báscula calibrada: **bruto**, **tara** y **neto**. Neto = bruto − tara.

### Muestras de retención (*reserve samples*)
De cada lote de API se guarda una muestra en un envase equivalente al comercial. ICH Q7 (11.7) pide conservarla, si el API tiene **caducidad**, **1 año tras la caducidad o 3 años tras la distribución, lo que sea más largo**; si tiene **fecha de reanálisis**, **3 años después de distribuir el lote por completo**. La cantidad debe bastar para al menos **dos análisis completos**.
`,
    plant: `
Se emiten 20 etiquetas para un lote que se envasará en 18 bidones. Se usan 18, una se destruye porque se imprimió torcida y sobra 1, que se devuelve. 18 + 1 + 1 = 20: la conciliación cuadra.
`,
    batchRecord: `
- Despeje de línea: realizado por / verificado por, con hora.
- Etiquetas emitidas, usadas, destruidas y devueltas; especimen adjunto.
- Para cada envase: número, peso bruto, tara, neto, número de precinto.
- Muestras de retención tomadas.
`,
    terms: [
      { es: "Despeje de línea", en: "Line clearance", def: "Comprobación de que no quedan restos del lote anterior antes de empezar." },
      { es: "Precinto de seguridad", en: "Tamper-evident seal", def: "Precinto que muestra si el envase se ha abierto." },
      { es: "Conciliación de etiquetas", en: "Label reconciliation", def: "Cuadre entre etiquetas emitidas, usadas, destruidas y devueltas." },
      { es: "Peso bruto / tara / neto", en: "Gross / tare / net weight", def: "Peso total / del envase vacío / del producto." },
      { es: "Muestra de retención", en: "Reserve / retention sample", def: "Muestra de cada lote que se guarda por si hay que reanalizar o investigar." },
      { es: "Bidón de cartón", en: "Fibre drum", def: "Envase cilíndrico de cartón prensado muy usado para API." },
    ],
    quiz: [
      {
        kind: "number",
        q: "Se emiten 200 etiquetas; se usan 182, se destruyen 12 y se devuelven 4. ¿Cuántas faltan por explicar?",
        answer: 2,
        tolerance: 0.001,
        unit: "etiquetas",
        explain: "200 − (182 + 12 + 4) = 2 etiquetas sin explicar: se investiga.",
      },
      {
        kind: "number",
        q: "Un bidón pesa 27,35 kg en bruto y su tara es 2,10 kg. ¿Cuál es el peso neto?",
        answer: 25.25,
        tolerance: 0.001,
        unit: "kg",
        explain: "27,35 − 2,10 = 25,25 kg.",
      },
      {
        kind: "choice",
        q: "¿Para qué sirve el despeje de línea?",
        options: [
          "Para limpiar el suelo",
          "Para asegurar que no quedan materiales ni etiquetas del lote anterior",
          "Para contar a las personas",
          "Para medir la temperatura",
        ],
        answer: 1,
        explain: "Evita mezclas y etiquetados equivocados, errores graves para el paciente.",
      },
    ],
  },
  {
    slug: "trazabilidad-y-distribucion",
    level: 17,
    order: 7,
    title: "Trazabilidad, distribución, devoluciones y retiradas",
    titleEn: "Traceability, distribution, returns and recalls",
    minutes: 12,
    summary: "Cómo se sigue un lote hasta el cliente y qué pasa si hay que retirarlo.",
    body: `
### Trazabilidad (*traceability*)
Tiene dos direcciones:
- **Hacia atrás**: de un lote de API a todos los lotes de materias primas, equipos, personas y registros que intervinieron.
- **Hacia delante**: de un lote a todos los clientes que lo recibieron.
Se consigue con los números de lote, el ERP y registros completos. Sin trazabilidad, una retirada es imposible.

### Distribución
Los API se distribuyen siguiendo las **Buenas Prácticas de Distribución** para principios activos (*GDP for active substances*, directrices de la Comisión Europea de 2015):
- Solo a clientes autorizados y desde almacenes controlados.
- Transporte en las **condiciones** indicadas (temperatura, protección), con registro si es necesario.
- Documentación que permita la trazabilidad (lote, cantidad, fecha, destinatario).

### Liberación
Un lote de API solo se envía cuando **Calidad lo ha liberado** tras revisar el registro del lote completo (incluidas las desviaciones) y los resultados analíticos.

### Devoluciones (*returns*)
Un API devuelto se pone en **cuarentena**. Solo puede volver al stock si Calidad evalúa que sus condiciones de almacenamiento y transporte no han afectado a su calidad (ICH Q7, sección 14).

### Reclamaciones y retiradas
- **Reclamación** (*complaint*): un cliente comunica un problema. Se registra, se investiga y se responde.
- **Retirada** (*recall*): si un lote puede ser un riesgo, se retira del mercado. Debe haber un procedimiento probado para hacerlo rápido, gracias a la trazabilidad hacia delante.
`,
    plant: `
Un cliente reclama partículas negras en un bidón. Con el número de lote, Calidad localiza en la hoja de fabricación el equipo de molienda usado, la revisión de la malla, el operador y los lotes de bolsas. Encuentra que una junta del molino se había desgastado y abre una CAPA. Gracias a la trazabilidad hacia delante sabe qué otros clientes recibieron el mismo lote.
`,
    batchRecord: `
- Todos los números de lote, equipos, firmas y horas: son la base de la trazabilidad.
- Número de lote del API en cada envase y en la documentación de expedición.
`,
    terms: [
      { es: "Trazabilidad", en: "Traceability", def: "Capacidad de seguir la historia y el destino de un lote." },
      { es: "Buenas Prácticas de Distribución", en: "Good Distribution Practice (GDP)", def: "Normas para almacenar y transportar medicamentos y principios activos." },
      { es: "Liberación del lote", en: "Batch release", def: "Decisión de Calidad que autoriza el uso o la venta de un lote." },
      { es: "Devolución", en: "Return", def: "Producto que el cliente devuelve; queda en cuarentena hasta que Calidad decida." },
      { es: "Reclamación", en: "Complaint", def: "Comunicación de un posible problema de calidad." },
      { es: "Retirada", en: "Recall", def: "Retirada del mercado de un lote por un posible riesgo." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "Saber a qué clientes fue un lote es trazabilidad…",
        options: ["Hacia atrás", "Hacia delante", "Lateral", "No es trazabilidad"],
        answer: 1,
        explain: "Hacia delante: del lote a sus destinos.",
      },
      {
        kind: "choice",
        q: "Un cliente devuelve un bidón de API. ¿Qué se hace?",
        options: [
          "Se vende a otro cliente",
          "Se pone en cuarentena y Calidad evalúa si puede volver al stock",
          "Se tira siempre",
          "Se reprocesa sin más",
        ],
        answer: 1,
        explain: "Hay que comprobar que no se ha visto afectado por el transporte o el almacenamiento.",
      },
      {
        kind: "choice",
        q: "¿Quién decide que un lote de API se puede enviar al cliente?",
        options: ["El operador", "Calidad (liberación del lote)", "El transportista", "El cliente"],
        answer: 1,
        explain: "Calidad libera el lote tras revisar el registro y los análisis.",
      },
    ],
  },
];

// Las lecciones «a fondo» van cada una en su archivo nivel17-tema.ts.
export const nivel17: Lesson[] = [...logistica, trazabilidadAFondo, recepcionAFondo, envasadoAFondo];
