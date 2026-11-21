import type { Lesson } from "./types";

export const plantaAFondo: Lesson = {
  slug: "planta-a-fondo",
  level: 0,
  order: 8,
  title: "Una planta de principios activos a fondo: cómo se organiza y qué pasa en un turno",
  titleEn: "An API plant in depth: how it is organised and what happens during a shift",
  minutes: 38,
  summary:
    "El mapa de todo el temario: qué es un principio activo, las definiciones básicas de ICH Q7, el recorrido de un lote por la planta, las áreas, quién decide qué, un turno hora a hora, la documentación y tus derechos y obligaciones en prevención.",
  body: `
La lección anterior te dio una primera foto de la planta. Esta es el mapa completo: qué se fabrica, por dónde pasa un lote, quién hace cada cosa, qué se escribe y en qué lección del temario se explica cada pieza a fondo. Vuelve a ella cuando te pierdas.

### Qué es un principio activo y qué no es
ICH Q7 es la guía internacional de normas de correcta fabricación (*good manufacturing practice*, GMP) para principios activos. Su glosario (apartado 20) define el **principio activo** (*active pharmaceutical ingredient*, API) como la sustancia destinada a fabricar un medicamento que, dentro de él, se convierte en el ingrediente activo: la parte que cura, alivia, previene o ayuda a diagnosticar.

El **medicamento** (*drug product*) es, según el mismo glosario, la forma farmacéutica en su envase final, lista para venderse: el comprimido en su blíster, el jarabe en su frasco.

Piensa en una fábrica de harina y una panadería. Tu planta es la fábrica de harina: hace un ingrediente, casi siempre un polvo, que sale en bidones. La planta de medicamentos lo mezcla con excipientes (sustancias sin efecto), le da forma y lo envasa. Después el medicamento pasa por la distribución y llega al paciente, normalmente en una farmacia.

| Eslabón | Recibe | Entrega |
|---|---|---|
| Proveedores | Sus propias materias. | Materias primas con su certificado. |
| Planta de API (la tuya) | Materias primas. | API envasado y liberado. |
| Planta de medicamento | API y excipientes. | Medicamento envasado. |
| Distribución y farmacia | Medicamento. | El medicamento, al paciente. |

**¿Por qué la calidad se construye en cada paso?** Porque el análisis final mira una muestra y solo busca lo que espera encontrar. Si en tu planta entra una impureza o se mezclan dos productos, el laboratorio siguiente puede no verlo. ICH Q7 lo refleja en su alcance (1.3): las exigencias GMP aumentan desde las primeras etapas hasta la purificación y el envasado, y la molienda o micronización se hacen, como mínimo, con las exigencias de la guía.

### Las palabras que vas a oír cada día
Leídas en ICH Q7. Casi todas vienen del glosario (apartado 20); si no, se indica de dónde.

| Término | Qué dice ICH Q7 | Ejemplo ficticio |
|---|---|---|
| **Material de partida del API** (*API starting material*) | Materia prima, intermedio o API que queda incorporado como fragmento estructural importante de la molécula del API (glosario y 1.3). Desde su entrada se aplica la guía. | El compuesto PX-A comprado a un proveedor aprobado. |
| **Intermedio** (*intermediate*) | Material producido en el proceso que aún sufre un cambio molecular o una purificación antes de ser API. Puede aislarse o no. | El sólido húmedo que sale de la etapa 1. |
| **Lote** (*batch* o *lot*) | Cantidad de material producida de modo que se espera homogénea dentro de unos límites. | Todo lo que sale de una carga del reactor R-102. |
| **Número de lote** (*batch number*) | Combinación única de números, letras o símbolos que identifica un lote y permite reconstruir su historia de producción y distribución. | PX27-26-014 (valor de ejemplo). |
| **Hoja de producción** (*batch production record*) | No está en el glosario: la describe el apartado 6.5. Se prepara para cada lote con toda la información de su producción y control, y se comprueba antes de entregarla (6.50). | La hoja que recibes al empezar. |
| **Procedimiento** (*procedure*, en planta SOP) | Descripción documentada de las operaciones, las precauciones y las medidas relacionadas con la fabricación. | La limpieza de la centrífuga CF-202. |
| **Especificación** (*specification*) | Lista de ensayos, métodos y criterios de aceptación que un material debe cumplir para ser aceptable. | El límite de agua del producto. |
| **Cuarentena** (*quarantine*) | Estado de un material aislado a la espera de que se decida su aprobación o rechazo. | Bidones recién llegados. |
| **Liberación** (*release*) | Sin definición propia en el glosario. Ningún material se libera ni se usa antes de que la unidad de calidad termine su evaluación (2.17); liberar o rechazar los API es tarea suya (2.22). | Calidad aprueba el lote. |
| **Desviación** (*deviation*) | Apartarse de una instrucción aprobada o de un estándar establecido. | La temperatura salió del rango diez minutos. |

Dos más: **control en proceso** (*in-process control*), las comprobaciones durante la producción para vigilar y, si hace falta, ajustar el proceso; y **aguas madres** (*mother liquor*), el líquido que queda tras cristalizar o aislar el sólido.

### El recorrido de un lote, etapa a etapa
El viaje de un lote ficticio del producto PX-27. Equipos y proceso son inventados; el orden es el típico de una síntesis química.

| N.º | Etapa | Equipo | Qué hace el operador | Documento | Lección a fondo |
|---|---|---|---|---|---|
| 1 | Recepción y muestreo de materias primas | Muelle y sala de muestreo | Revisa etiquetas y daños, deja el material en cuarentena, muestrea. | Registro de recepción, etiqueta de estado. | «Recepción de materiales y estados de calidad» |
| 2 | Pesada | Básculas de la sala de pesadas | Pesa lo aprobado, etiqueta; otra persona verifica. | Hoja de producción, verificación de báscula. | «Manejo de sólidos a fondo: pesar, cargar, trasvasar y contener polvos» |
| 3 | Reacción | Reactor R-102 | Inertiza, carga, dosifica, vigila temperatura y presión. | Hoja de producción, gráfico del sistema de control. | «El reactor a fondo: agitación, intercambio de calor y protecciones» |
| 4 | Tratamiento: extracción y filtración | Reactor, filtro FL-103 | Separa fases, lava, filtra sólidos que sobran. | Hoja de producción. | «Extracción líquido-líquido y separación de fases» y «Filtros a fondo: el filtro Nutsche y el filtro-secador agitado, paso a paso» |
| 5 | Cristalización | Cristalizador CR-104 | Enfría según la rampa, siembra si se indica. | Hoja de producción. | «Cristalización» |
| 6 | Centrifugación | Centrífuga CF-202 | Carga, separa aguas madres, lava y descarga la torta. | Hoja de producción, registro de uso. | «La centrífuga a fondo: fuerza G, ciclo completo y qué hacer cuando vibra» |
| 7 | Secado | Secadero SD-302 | Seca con la temperatura y el vacío de la hoja; muestrea. | Hoja de producción, control en proceso. | «El secado a fondo: la curva de secado y cuándo está seco» |
| 8 | Molienda | Molino MO-501 | Muele o tamiza en la zona de acabado. | Hoja de producción, registro de limpieza. | «Molienda, micronización y tamizado» |
| 9 | Envasado | Puesto de envasado | Llena, pesa, cierra, etiqueta y cuadra etiquetas. | Hoja de producción, conciliación de etiquetas. | «Envasado y etiquetado del API» |
| 10 | Muestreo y análisis | Laboratorio de control de calidad | Toma o entrega la muestra; el laboratorio analiza. | Registro de muestreo, registros de laboratorio. | «Por qué y cómo se muestrea» |
| 11 | Liberación por calidad | Calidad | No libera: responde a las dudas de la revisión. | Revisión del lote, certificado de análisis. | «El certificado de análisis y la liberación del lote» |
| 12 | Almacenamiento y envío | Almacén | Almacén lo ubica y solo lo envía liberado. | Registros de almacén y distribución. | «Trazabilidad, distribución, devoluciones y retiradas» |

Entre lote y lote se limpian los equipos («Limpieza de equipos y validación de limpieza»). Los registros de uso y limpieza de los equipos principales indican fecha, producto, lote y quién limpió (ICH Q7, 6.20), y el estado de cada equipo («limpio», «en uso») se ve en el propio equipo, en un documento o en el sistema de control (8.16).

### Las áreas de la planta y por qué están separadas
ICH Q7 pide que el flujo de materiales y personas evite confusiones y contaminaciones (4.13) y que haya zonas definidas, u otros controles, para recepción y cuarentena, material rechazado, material aprobado, producción, envasado y laboratorio (4.14).

| Área | Por qué va aparte |
|---|---|
| Almacén | Cuarentena, rechazado y aprobado no pueden confundirse (4.14 y 10.11). |
| Sala de pesadas | Se abren envases y se genera polvo: hay que proteger producto y persona. |
| Zona de síntesis | Disolventes inflamables y reacciones con calor y presión. |
| Zona de acabado limpia | Tras la purificación no hay etapa que quite la suciedad: ICH Q7 pide precauciones al manejar el API purificado (8.52). |
| Laboratorio de control de calidad | Normalmente separado de producción; algunos controles en proceso pueden hacerse cerca si nadie se perjudica (4.16). |
| Servicios | Vapor, gases, aire comprimido, ventilación: si afectan a la calidad, se cualifican y vigilan (4.20). |
| Vestuarios, comedor y oficinas | Comer, beber y fumar solo fuera de fabricación (3.23); aseos separados pero accesibles (4.15). |

### Quién es quién y quién firma qué
Punto de partida (ICH Q7, 2.10): la calidad es responsabilidad de todas las personas que intervienen en la fabricación. Pero no todos deciden lo mismo.

| Quién | Qué hace y qué firma |
|---|---|
| Operador | Ejecuta la hoja, vigila, muestrea, limpia. Firma lo que hace él. |
| Verificador | Presencia las pesadas críticas, que necesitan testigo o control equivalente (8.12). |
| Jefe de turno | Organiza el turno, resuelve incidencias, firma la supervisión de pasos críticos (6.52). |
| Jefe de producción | Responde de las instrucciones de producción y de revisar las hojas (2.3). |
| Garantía de calidad (*quality assurance*, QA) | Revisa hojas, desviaciones y cambios, aprueba documentos, libera o rechaza. |
| Control de calidad (*quality control*, QC) | Analiza y firma los registros de laboratorio y el certificado de análisis. |
| Mantenimiento e ingeniería | Reparan, calibran, modifican instalaciones; firman órdenes de trabajo y calibraciones. |
| Almacén | Recibe, ubica, entrega a producción y expide. |
| Seguridad y medio ambiente | Evalúa riesgos, interviene en permisos especiales y gestiona residuos. |

La pieza clave es la **unidad de calidad** (*quality unit*): independiente de producción y con las funciones de QA y QC, en departamentos separados o en un solo grupo según el tamaño de la empresa (2.13). Tiene quince responsabilidades que no delega (2.22); entre ellas, liberar o rechazar los API, revisar los registros de etapas críticas antes de liberar, asegurar que se investigan las desviaciones críticas, aprobar especificaciones, instrucciones maestras y procedimientos, y aprobar los cambios que pueden afectar a la calidad. La lista entera está en «El sistema de calidad a fondo: quién decide qué en una planta de API».

Más firmas: la instrucción maestra la firma quien la prepara y, de forma independiente, alguien de la unidad de calidad (6.40); cada hoja de lote se numera, fecha y firma al entregarla (6.51); y quién puede liberar está designado por escrito (2.14).

### Un turno contado hora a hora
Un turno de mañana inventado en la zona de síntesis. Horarios y equipos son valores de ejemplo.

| Hora | Qué pasa |
|---|---|
| 5:45 | Vestuario: ropa limpia, calzado y protección del área. |
| 6:00 | Relevo: lees el libro de turno y la hoja del lote en curso, preguntas lo que no esté claro. |
| 6:20 | Comprobaciones: etiquetas de estado, alarmas activas, servicios, básculas verificadas, materiales aprobados. |
| 6:45 | Mantenimiento cambia una junta en una bomba: antes, permiso de trabajo y consignación firmados. |
| 7:00 | Carga de disolvente y sólidos con verificación. Anotas cada peso y lote en el momento. |
| 9:40 | Alarma de temperatura alta: aplicas la respuesta del procedimiento, avisas y lo anotas. |
| 11:00 | Muestra del control en proceso; apuntas resultado, hora y firma. |
| 12:30 | Trasvase y limpieza; registro de limpieza y cambio de etiqueta de estado. |
| 13:30 | Repasas tu parte de la hoja y escribes el libro de turno: lote, alarma, permiso abierto. |
| 14:00 | Relevo de salida, cara a cara. |

Casi cada fila termina en un registro. Y el capítulo 3 de ICH Q7 habla de ti. **Formación** (3.1): personal suficiente y cualificado (3.10), responsabilidades por escrito (3.11) y formación regular, impartida por personas cualificadas, sobre tus operaciones y las GMP de tu puesto, registrada y evaluada (3.12). Por eso solo haces lo que tienes firmado como formado. **Higiene** (3.2): buenos hábitos (3.20), ropa limpia y protección de cabeza, cara, manos o brazos cuando haga falta para proteger el producto (3.21), nada de contacto directo con el API (3.22), comida fuera de fabricación (3.23) y avisar si tienes una enfermedad infecciosa o una herida abierta (3.24).

### La documentación, columna vertebral de la planta
En las plantas se repite: **«lo que no está escrito no se ha hecho»**. No es una cita de ninguna norma, es un resumen. Si mañana preguntan cuánto cargaste, la única respuesta válida es la hoja. Lo que sí dicen las normas:

- Toda actividad relacionada con la calidad se registra en el momento en que se hace (ICH Q7, 2.15).
- Se anota con tinta indeleble, en el espacio previsto, justo después de la tarea, identificando a quien anota; las correcciones llevan fecha y firma y dejan leer lo original (6.14).
- Los documentos se aprueban y distribuyen según procedimientos (6.10) y sus versiones se controlan (6.11).
- Cada paso importante recoge fechas, equipos, pesos y lotes de materias primas, valores reales de parámetros críticos, muestreos, firmas, resultados, rendimientos y desviaciones (6.52).
- Los registros se guardan al menos un año tras la caducidad del lote; con fecha de reanálisis, al menos tres años tras distribuirlo entero (6.13).

Las GMP europeas de medicamentos (EudraLex, volumen 4, parte I, capítulo 4) dicen lo mismo: registrar en el momento de cada acción (4.8) y corregir con firma y fecha dejando leer lo anterior (4.9). Para principios activos, la Unión Europea tiene la parte II del mismo volumen.

Detrás está la idea de que un dato debe ser fiable: quién lo anotó, legible, anotado cuando pasó, original y exacto. Se llama ALCOA y se explica en «ALCOA+: datos en los que se puede confiar». Cómo se rellena y revisa la hoja está en «La hoja de producción a fondo: de la instrucción maestra a la revisión del lote».

### Tus derechos y obligaciones en prevención
ICH Q7 avisa (1.1) de que no trata la seguridad del personal ni el medio ambiente: eso lo regula la ley de cada país. En España, la Ley 31/1995, de Prevención de Riesgos Laborales.

**Derechos.** Protección eficaz en seguridad y salud, que incluye información, consulta y participación, formación, parar ante un riesgo grave e inminente y vigilancia de la salud (artículo 14.1). Formación teórica y práctica al entrar y cuando cambien tus funciones o equipos, centrada en tu puesto y sin coste para ti (artículo 19). Información directa sobre los riesgos de tu puesto (artículo 18.1).

**Obligaciones (artículo 29).** Velar, según tus posibilidades y cumpliendo las medidas de prevención, por tu seguridad y por la de quienes puedan verse afectados por tu trabajo. En particular:

1. Usar bien máquinas, herramientas y sustancias peligrosas.
2. Usar correctamente los equipos de protección.
3. No anular los dispositivos de seguridad.
4. Informar de inmediato a tu superior directo, y a prevención, de lo que con motivos razonables veas como un riesgo.
5. Contribuir a cumplir lo que fije la autoridad competente.
6. Cooperar con la empresa para que el trabajo sea seguro.

No cumplirlas es un incumplimiento laboral (29.3).

**Parar ante un riesgo grave e inminente (artículo 21).** Puedes interrumpir tu actividad y abandonar el lugar, si hace falta, cuando consideres que hay un riesgo grave e inminente para tu vida o tu salud (21.2), y no puedes sufrir perjuicio por ello salvo mala fe o negligencia grave (21.4). Permisos y consignación están en «Permisos de trabajo, consignación y espacios confinados a fondo».

### El mapa del temario
Así encajan los 22 niveles de la app con tu trabajo.

| Nivel | Título | Para qué te sirve |
|---|---|---|
| 0 | Arranque | Cuentas, unidades y este mapa. |
| 1 | Fundamentos de química | De qué están hechas las sustancias, el pH. |
| 2 | Reacciones químicas | Cuánto cargar, cuánto calor sale, qué rendimiento esperar. |
| 3 | Química orgánica | Nombres de productos, disolventes e impurezas. |
| 4 | El laboratorio | Pesar bien, calibración. |
| 5 | Muestreo y preparación de muestras | Muestrear sin estropear la muestra. |
| 6 | Análisis químico clásico | Qué significa un resultado de agua o de valoración. |
| 7 | Análisis instrumental | Qué mide el laboratorio con HPLC o GC. |
| 8 | Ensayos físicos y fisicoquímicos | Tamaño de partícula, pérdida por secado. |
| 9 | Microbiología y áreas limpias | Comportarte en la zona de acabado. |
| 10 | Calidad analítica | Especificaciones, resultados fuera de especificación, certificado. |
| 11 | Fluidos, sólidos y energía | Tuberías, bombas, vapor, frío. |
| 12 | Operaciones de planta | Reactores, centrífugas, filtros y secaderos. |
| 13 | Instrumentación y control | Pantallas, alarmas, diagramas. |
| 14 | Mantenimiento y servicios auxiliares | Agua, nitrógeno, aire, ventilación. |
| 15 | Seguridad y medio ambiente | Riesgos, protección, atmósferas explosivas, permisos, residuos. |
| 16 | GMP y calidad | Hoja, desviaciones, cambios, validación. |
| 17 | Acondicionamiento y almacén | Recepción, envasado, etiquetas, trazabilidad. |
| 18 | Arquitectura de sistemas | Cómo se conectan los sistemas informáticos. |
| 19 | LIMS, MES, SCADA y ERP | Los programas del turno. |
| 20 | Integridad de datos y registros electrónicos | Registrar y firmar en electrónico con garantías. |
| 21 | Validación de sistemas informatizados | Por qué un sistema se valida antes de usarse. |

Si empiezas en planta, la ruta del operador recorre lo imprescindible en orden.

Esta lección es un mapa general basado en ICH Q7 y en la Ley 31/1995. En tu planta manda siempre el procedimiento vigente (SOP).
`,
  plant: `
Lunes, 6:00. Álex, operador nuevo (personaje ficticio), entra en el turno de mañana de la zona de síntesis de una planta ficticia que fabrica el principio activo PX-27. El lote PX27-26-014 (valor de ejemplo) está en el reactor R-102: el turno de noche ha terminado la inertización y ha dejado anotado en el libro de turno que falta la carga de sólidos.

Álex lee la hoja del lote. Comprueba que la versión es la vigente, que los pasos anteriores están firmados y que los tres sacos de materia prima junto al reactor tienen etiqueta de aprobado con el mismo número de recepción que figura en la hoja. Uno de ellos lleva etiqueta de cuarentena: no lo toca y avisa al jefe de turno, que llama a almacén. En diez minutos traen el saco correcto. Álex anota el incidente en el libro de turno.

A las 7:10 carga los sólidos con un compañero que verifica cada peso en la báscula de la sala de pesadas. A las 11:00 toma la muestra del control en proceso; el resultado está dentro del criterio de la hoja y lo apunta con hora y firma. Por la tarde, el lote pasará a cristalización, después a la centrífuga CF-202 y al secadero SD-302.

Dos semanas después, la unidad de calidad revisa la hoja completa, el certificado de análisis y el informe de una pequeña desviación de temperatura, y libera el lote. Solo entonces almacén puede enviarlo a la planta de medicamentos del cliente.
`,
  batchRecord: `
- **Cabecera**: producto, número de lote, tamaño del lote, versión de la instrucción maestra, fecha y firma de quien entrega la hoja (ICH Q7, 6.51).
- **Comprobaciones previas**: equipo limpio y con su etiqueta de estado, calibraciones vigentes, materiales aprobados.
- **Materias primas**: nombre o código, número de lote o de recepción, peso real, firma de quien pesa y de quien verifica.
- **Equipos**: identificación de cada equipo principal usado (por ejemplo R-102, CF-202, SD-302, MO-501).
- **Parámetros críticos**: valor real anotado en el momento, con hora (temperaturas, presiones, tiempos).
- **Muestreos y controles en proceso**: hora, quién muestreó, resultado y si cumple el criterio.
- **Rendimiento real** de las etapas indicadas, comparado con el esperado (ICH Q7, 8.14).
- **Envasado**: número de bidones, peso de cada uno y etiqueta representativa.
- **Desviaciones**: descripción breve y número del informe.
- **Firmas** de quien hace y de quien supervisa o verifica cada paso crítico, y al final la revisión de producción y la de calidad.
`,
  terms: [
    { es: "Principio activo", en: "Active pharmaceutical ingredient (API), drug substance", def: "Sustancia destinada a fabricar un medicamento, que en él aporta el efecto farmacológico." },
    { es: "Medicamento", en: "Drug (medicinal) product", def: "La forma farmacéutica en su envase final, destinada a venderse." },
    { es: "Material de partida del API", en: "API starting material", def: "Materia prima, intermedio o API que se incorpora como fragmento estructural importante del API. Desde su entrada en el proceso se aplican las GMP de ICH Q7." },
    { es: "Intermedio", en: "Intermediate", def: "Material producido en el proceso que aún sufre un cambio molecular o una purificación antes de ser API." },
    { es: "Lote", en: "Batch / lot", def: "Cantidad de material producida de modo que se espera homogénea dentro de unos límites." },
    { es: "Número de lote", en: "Batch number / lot number", def: "Código único que identifica un lote y permite reconstruir su historia de producción y distribución." },
    { es: "Hoja de producción", en: "Batch production record", def: "Registro de toda la producción y el control de un lote, preparado a partir de la instrucción maestra vigente." },
    { es: "Procedimiento", en: "Procedure (SOP)", def: "Descripción documentada de las operaciones, precauciones y medidas relacionadas con la fabricación." },
    { es: "Especificación", en: "Specification", def: "Lista de ensayos, métodos y criterios de aceptación que debe cumplir un material para ser aceptable." },
    { es: "Cuarentena", en: "Quarantine", def: "Estado de un material aislado a la espera de que se decida su aprobación o rechazo." },
    { es: "Desviación", en: "Deviation", def: "Apartarse de una instrucción aprobada o de un estándar establecido." },
    { es: "Unidad de calidad", en: "Quality unit", def: "Unidad independiente de producción que cumple las funciones de garantía y de control de calidad." },
    { es: "Control en proceso", en: "In-process control", def: "Comprobación durante la producción para vigilar y, si hace falta, ajustar el proceso." },
    { es: "Libro de turno", en: "Shift logbook", def: "Registro donde cada turno deja escrito el estado de la planta y lo pendiente para el siguiente." },
  ],
  quiz: [
    {
      kind: "number",
      q: "El recorrido del lote de esta lección va de la recepción de materias primas al envío: recepción y muestreo, pesada, reacción, tratamiento, cristalización, centrifugación, secado, molienda, envasado, muestreo y análisis, liberación, y almacenamiento y envío. ¿Cuántas etapas tiene?",
      answer: 12,
      tolerance: 0.01,
      unit: "etapas",
      explain: "Contando la lista una a una salen 12 etapas, las mismas filas que la tabla del recorrido.",
    },
    {
      kind: "number",
      q: "La etapa 1 de un proceso ficticio tiene un rendimiento del 85 % y la etapa 2, del 90 %. ¿Cuál es el rendimiento global de las dos etapas juntas?",
      answer: 76.5,
      tolerance: 0.01,
      unit: "%",
      explain: "Los rendimientos se multiplican: 0,85 × 0,90 = 0,765, es decir, 76,5 %. No se suman ni se promedian.",
    },
    {
      kind: "choice",
      q: "El análisis de un lote de API ha salido bien, pero la hoja tiene una desviación sin cerrar. El jefe de producción quiere enviarlo hoy. ¿Quién decide si el lote se libera?",
      options: [
        "La unidad de calidad, tras revisar la hoja y la desviación",
        "El jefe de producción, porque el análisis ha salido bien",
        "El jefe de turno que estaba cuando pasó la desviación",
        "Almacén, que es quien tiene que preparar el envío",
      ],
      answer: 0,
      explain: "Liberar o rechazar los API es una responsabilidad de la unidad de calidad que no se delega (ICH Q7, 2.22), y las desviaciones se revisan antes de liberar (6.72).",
    },
    {
      kind: "choice",
      q: "Junto al reactor hay un saco del material correcto, pero con etiqueta de cuarentena. El jefe de turno dice que el análisis «seguro que sale bien». ¿Qué haces?",
      options: [
        "Lo cargas y lo anotas como aprobado para no parar el lote",
        "No lo cargas, avisas y esperas un saco aprobado por calidad",
        "Lo cargas si el jefe de turno firma la casilla en tu lugar",
        "Cargas solo la mitad y dejas el resto para el turno de tarde",
      ],
      answer: 1,
      explain: "Ningún material se usa antes de que la unidad de calidad termine su evaluación (ICH Q7, 2.17). La cuarentena se respeta aunque haya prisa.",
    },
    {
      kind: "choice",
      q: "Acabas de pesar 25,4 kg de un sólido crítico. ¿Qué pide ICH Q7 para esa pesada?",
      options: [
        "Anotarla al final del turno junto con las demás pesadas",
        "Redondearla a 25 kg para que cuadre con la hoja maestra",
        "Que la presencie un testigo o tenga un control equivalente",
        "Que la apruebe garantía de calidad antes de cargarla",
      ],
      answer: 2,
      explain: "Las pesadas críticas se hacen con testigo o con un control equivalente (ICH Q7, 8.12), y el valor real se anota en el momento (6.14).",
    },
    {
      kind: "choice",
      q: "En la hoja escribiste por error 135 °C en lugar de 35 °C. ¿Cómo lo corriges?",
      options: [
        "Tachas hasta que no se lea y escribes el valor bueno encima",
        "Usas corrector blanco y vuelves a escribir el valor bueno",
        "Arrancas la página y pides una hoja nueva a calidad",
        "Una raya que deje leer el original, el valor bueno, fecha y firma",
      ],
      answer: 3,
      explain: "Las correcciones llevan fecha y firma y dejan leer la anotación original (ICH Q7, 6.14; EudraLex, capítulo 4, 4.9). El motivo se añade si el procedimiento lo pide.",
    },
    {
      kind: "choice",
      q: "Durante la descarga de la centrífuga notas un fuerte olor a disolvente y te mareas. Tu jefe no contesta al teléfono. ¿Qué te reconoce la Ley 31/1995?",
      options: [
        "El derecho a parar y salir si crees que hay riesgo grave e inminente",
        "Nada: debes seguir hasta que tu jefe autorice parar la descarga",
        "Solo el derecho a pedir una mascarilla al final del turno",
        "El derecho a parar, pero perdiendo la paga de ese tiempo",
      ],
      answer: 0,
      explain: "El artículo 21.2 reconoce el derecho a interrumpir la actividad y abandonar el lugar ante un riesgo grave e inminente, y el 21.4 dice que no puedes sufrir perjuicio por ello salvo mala fe o negligencia grave.",
    },
    {
      kind: "choice",
      q: "Un compañero ha puesto un puente en el final de carrera de la tapa de la centrífuga «porque fallaba». ¿Qué dice el artículo 29 de la Ley 31/1995?",
      options: [
        "Que está permitido si el equipo sigue funcionando",
        "Que no se deben anular los dispositivos de seguridad",
        "Que solo es falta si se produce un accidente",
        "Que basta con anotarlo en el libro de turno",
      ],
      answer: 1,
      explain: "El artículo 29.2, punto 3.º, obliga a no poner fuera de funcionamiento los dispositivos de seguridad, y el punto 4.º a informar de inmediato del riesgo a tu superior.",
    },
    {
      kind: "choice",
      q: "¿Qué documento consultas para saber cómo se limpia la centrífuga CF-202 antes del lote siguiente?",
      options: [
        "El certificado de análisis del último lote",
        "El libro de turno del turno anterior",
        "El procedimiento de limpieza vigente del equipo",
        "La especificación del producto terminado",
      ],
      answer: 2,
      explain: "Las operaciones y precauciones se describen en un procedimiento (glosario de ICH Q7) y la limpieza queda registrada con fecha, producto, lote y quién la hizo (6.20).",
    },
    {
      kind: "choice",
      q: "¿Por qué la molienda y el envasado del API se hacen en una zona de acabado limpia y separada de la síntesis?",
      options: [
        "Porque allí no hay ningún riesgo químico para el operador",
        "Porque así lo pide el cliente en su pedido de compra",
        "Porque las máquinas de esa zona son más caras",
        "Porque tras purificar no queda otra etapa que limpie el producto",
      ],
      answer: 3,
      explain: "ICH Q7 pide precauciones para evitar contaminaciones al manejar el API ya purificado (8.52) y zonas definidas para producir y envasar (4.14).",
    },
  ],
};
