# Fuentes de la lección «El mapa de sistemas de una planta a fondo» (mapa-de-sistemas-a-fondo)

Sesión de verificación: 21 de noviembre de 2026. Documentos descargados con curl (`curl -sL -A "Mozilla/5.0"`), pasados a texto con `pdftotext -layout` (PDF) o limpiando el HTML, y leídos en los apartados citados. Copias de trabajo en `scratchpad/src_isa/`.

Documentos leídos de verdad:

- **EudraLex vol. 4, anexo 11 «Computerised Systems»** (revisión 1, en vigor desde el 30 de junio de 2011). https://health.ec.europa.eu/system/files/2016-11/annex11_01-2011_en_0.pdf. El enlace nuevo de la página de EudraLex (`/document/download/8d305550-...`) devolvió una página JavaScript en lugar del PDF; se usó el enlace antiguo. La página https://health.ec.europa.eu/medicinal-products/eudralex/eudralex-volume-4_en sigue listando «Annex 11 Computerised Systems (revision January 2011)».
- **ICH Q7** «Good Manufacturing Practice Guide for Active Pharmaceutical Ingredients». https://database.ich.org/sites/default/files/Q7%20Guideline.pdf
- **PIC/S PI 041-1** «Good practices for data management and integrity in regulated GMP/GDP environments» (1 de julio de 2021). https://picscheme.org/docview/4234
- **Tony Kuphaldt, «Lessons in Industrial Instrumentation»**, en control.com (licencia Creative Commons Attribution 4.0):
  - https://control.com/textbook/basic-process-control-strategies/supervisory-control/
  - https://control.com/textbook/programmable-logic-controllers/ladder-diagram-ld-programming/
  - https://control.com/textbook/instrumentation-cyber-security/design-based-fortifications/

Lecciones del repositorio leídas para no repetir: `src/content/nivel18.ts` (las tres), `src/content/nivel13-sistema.ts`, `src/content/nivel19.ts`, `src/content/nivel20.ts`, `src/content/nivel20-alcoa.ts` (encabezados).

## Afirmaciones normativas y técnicas

| Afirmación de la lección | Fuente | Cómo se comprobó |
|---|---|---|
| ISA-95 se llama en inglés *Enterprise-Control System Integration* y su versión internacional es IEC 62264 | Fragmentos de buscador (páginas de fabricante y de revistas técnicas sobre ISA-95) | **Fragmento de buscador**. No se pudo abrir ninguna página: isa.org, webstore.iec.ch, siemens.com, controlglobal.com, docs.aws.amazon.com y reference.opcfoundation.org dan error de red desde esta sesión |
| ISA-95 e ISA-88 son de pago | Encargo (BRIEF-N18) y catálogo de ISA, no abierto | No comprobado en la web de ISA (host bloqueado); la lección lo dice tal cual |
| No se ha leído ningún documento gratuito que reproduzca el texto de ISA-95 | Hecho de esta sesión | La lección lo declara de forma explícita |
| Niveles 0 a 4: 0 proceso físico; 1 medir y actuar (sensores, actuadores); 2 control y supervisión (DCS, PLC, SCADA, HMI); 3 gestión de operaciones de fabricación (MES, gestión de lotes, historiador); 4 negocio y logística (ERP) | Fragmentos de buscador (resúmenes de fabricante, revista técnica, OPC Foundation) | **Fragmento de buscador**. Presentado en la lección como idea, no como texto de la norma |
| Los resúmenes no coinciden en dónde va el controlador (nivel 1 o 2); el modelo Purdue de redes pone los controladores en el 1 | Fragmentos de buscador; lección corta `sistemas-isa-95` y `ciberseguridad-ot` del repositorio | **Fragmento de buscador** + leído en el repositorio |
| Escalas de tiempo: nivel 4 meses, semanas, días; nivel 3 días/turnos, horas, minutos | Fragmentos de buscador (resumen de la OPC Foundation sobre ISA-95; revista técnica) | **Fragmento de buscador**. Los fragmentos diferían entre sí; la lección lo dice y no da cifras exactas |
| Columna «A qué ritmo piensa» (milisegundos, segundos, minutos-horas-turnos, días-semanas-meses) | Milisegundos: Kuphaldt (abajo). Resto: fragmentos de buscador | Milisegundos leído; resto **fragmento de buscador**, presentado como idea |
| El programa de un PLC se ejecuta en ciclos (*scan*) cuya duración es muy corta, del orden de milisegundos | Kuphaldt, «Ladder Diagram (LD) programming»: «the duration of a single PLC program scan is typically very short: measured in milliseconds» | Leído en el documento |
| Control de supervisión: un ordenador superior envía consignas y los controladores de base (*regulatory*) hacen el control continuo; para el controlador es una consigna remota frente a la local del operador | Kuphaldt, «Supervisory Control» (modos manual, automático con SP local, automático con SP remoto) | Leído en el documento |
| El historiador lee los datos del sistema de control a intervalos regulares, los guarda en un disco de gran capacidad, normalmente durante años, y los sirve a quien los pide sin leer directamente de los controladores | Kuphaldt, «Design-based fortifications», apartado DMZ («poll process data ... at regular intervals», «typically years», «without need for direct reading from the controllers») | Leído en el documento |
| Unidad de calidad independiente: entre sus responsabilidades, que no se delegan, liberar o rechazar todos los API | ICH Q7, 2.22 punto 1 | Leído en el documento |
| Antes de liberar, la unidad de calidad revisa y aprueba los registros de producción y laboratorio de etapas críticas | ICH Q7, 6.71 | Leído en el documento |
| Todos los informes de desviaciones, investigaciones y OOS se revisan antes de liberar | ICH Q7, 6.72 | Leído en el documento |
| Los sistemas que intercambian datos deben tener comprobaciones integradas para la entrada y el procesado correctos y seguros | Anexo 11, apartado 5 | Leído en el documento |
| Interfaces evaluadas en validación para transferencia correcta y completa; verificación por transferencia segura, cifrado y sumas de comprobación | PI 041-1, 9.4, «Data transfer and migration», expectativa 1 | Leído en el documento |
| Una transferencia automática bien diseñada y cualificada es mucho más fiable que una manual | PI 041-1, 9.4 («Well designed and qualified automated data transfer is much more reliable than any manual data transfer conducted by humans») | Leído en el documento |
| Guardar datos temporalmente en el equipo local antes de transferirlos da ocasión a borrarlos o manipularlos | PI 041-1, 9.4 | Leído en el documento |
| El mapa de flujo de datos ayuda a entender riesgos, sobre todo en sistemas interconectados; definición de *data flow map* | PI 041-1, 9.1.6 y glosario | Leído en el documento |
| Anexo 11 se aplica a todas las formas de sistemas informatizados usados en actividades reguladas por GMP; aplicación validada e infraestructura cualificada; sustituir una operación manual no debe empeorar calidad, control del proceso ni garantía de calidad | Anexo 11, «Principle» | Leído en el documento |
| Validación de sistemas GMP según diversidad, complejidad y criticidad | ICH Q7, 5.40 | Leído en el documento |
| Controles contra accesos o cambios no autorizados y contra omisiones de datos (sistema apagado que no captura) | ICH Q7, 5.43 | Leído en el documento |
| Incidencias que puedan afectar a la calidad o a la fiabilidad de registros se registran e investigan | ICH Q7, 5.46 | Leído en el documento |
| Cambios por procedimiento de control de cambios | ICH Q7, 5.47 | Leído en el documento |
| Respaldo si una avería pudiera causar la pérdida permanente de registros | ICH Q7, 5.48 | Leído en el documento |
| Datos pueden registrarse por un segundo medio además del ordenador | ICH Q7, 5.49 | Leído en el documento |
| Inventario con nombre, ubicación, función, criticidad (impacto GMP directo, indirecto o ninguno) y estado de validación | PI 041-1, 9.3, expectativa 2 | Leído en el documento |
| Ejemplos de sistemas críticos (compra y estado de materiales y productos; control y adquisición de datos de procesos críticos; datos para decidir la calidad o incluidos en el registro de lote; decisión de liberación) | PI 041-1, 9.3, expectativa 2, «items to be checked» | Leído en el documento |
| Para sistemas críticos, descripción actualizada con disposición física y lógica, flujos de datos e interfaces | Anexo 11, 4.3 | Leído en el documento |
| Decisión basada en evaluación de riesgos documentada | Anexo 11, apartado 1 | Leído en el documento |
| Tabla «¿GMP?» por sistema | Aplicación de anexo 11 (principio, 1) y PI 041-1 (9.3) a sistemas genéricos; «DMS, eQMS y mantenimiento: normalmente sí» apoyado además en ICH Q7 2.22 punto 12 (sistemas eficaces de mantenimiento y calibración de equipos críticos) | Razonamiento sobre lo leído; la lección dice que cada empresa lo decide por riesgo |
| Texto del apartado 16 (continuidad de negocio): previsiones para la continuidad de procesos críticos si el sistema se avería, p. ej. sistema manual o alternativo; tiempo para ponerlo en marcha basado en el riesgo y adecuado al sistema y al proceso; documentadas y probadas | Anexo 11, apartado 16 | Leído en el documento (traducción propia) |
| Comprobación adicional de datos críticos introducidos a mano, por un segundo operador o medios electrónicos validados | Anexo 11, apartado 6 | Leído en el documento |
| Todas las incidencias se notifican y evalúan | Anexo 11, apartado 13 | Leído en el documento |
| Analogías web (error 503, reintentos, duplicados, campos mal parseados, relojes) y tabla de fallos de interfaz | Conocimiento general de desarrollo de software, usado como analogía; el riesgo de pérdida, alteración o transcripción incorrecta en las interfaces sí está en PI 041-1, 9.4 | Analogía declarada; parte normativa leída |
| Separador decimal y relojes como trampas de interfaz | Lección `datos-maestros-e-integracion` del repositorio (nivel18.ts) y PI 041-1 9.5 citado en nivel13-sistema.ts | Leído en el repositorio; no se añade cifra |
| Modelo físico de equipos: empresa, planta, área, célula de proceso, unidad, módulo de equipo, módulo de control; unidad = equipo que contiene el producto, como un reactor | Fragmentos de buscador (resúmenes públicos de ISA-88 y documentación de fabricante) | **Fragmento de buscador**. La lección lo presenta como idea y avisa de que la planta puede usar otros nombres |
| Etiqueta P1-A2-R201-TT01 y su lectura; TT como transmisor de temperatura | Valor de ejemplo declarado; TT usado ya en el repositorio (nivel13-sistema.ts, TT-310) | Valor de ejemplo |
| Tabla «Qué cambia según el piso que se cae» | Razonamiento a partir de los niveles y de nivel13-sistema.ts (el control corre en el controlador); declarada «orientativa; manda tu procedimiento» | Razonamiento declarado |

## Cálculos (recalculados con python)

| Cálculo | Resultado |
|---|---|
| Segundos de un día: 24 × 3600 | 86400 (texto y pregunta 1) |
| Ciclo de 100 ms: 1000 / 100 | 10 por segundo (texto, valor de ejemplo) |
| Ciclos por valor guardado: 1000 / 50 | 20 (pregunta 3) |
| Lecturas de contingencia de 02:10 a 04:40 cada 15 min: 150 / 15 | 10 (pregunta 6; de 02:25 a 04:40) |
| Diferencia reservado y consumido: 250,0 − 248,6 | 1,4 kg (pregunta 10) |

## Valores de ejemplo declarados

Producto API-XR55, orden 4100778, lote 26-0931, planta P1, área A2, tren T2, reactor R-201, dosificación DS-201, válvula XV-2011, centrífuga CF-202, secadero SD-203, etiqueta P1-A2-R201-TT01, 250 kg, 248,6 kg, 180 kg de tolueno, 62 °C, ciclo de 100 ms y 50 ms, historiador a 1 s, lecturas cada 15 min, horas del caso de planta. Todo ficticio.

## Lo que quería incluir y dejé fuera

- **El texto de ISA-95 / IEC 62264**: definiciones oficiales de los niveles, sus escalas de tiempo exactas, las partes de la norma y los modelos de información entre niveles 3 y 4. No hay documento gratuito accesible desde esta sesión (todos los hosts que lo resumen dan error de red). Solo se usó la idea general, marcada como fragmento.
- **El modelo de jerarquía de equipos de ISA-95** (centro de trabajo, unidad de trabajo) frente al de ISA-88: los fragmentos no permitían distinguirlos con seguridad; la lección usa un único modelo «como idea».
- **Cifras de escalas de tiempo por nivel** (p. ej. microsegundos para el nivel 0): los fragmentos discrepaban; se dejaron como idea cualitativa.
- **NIST SP 800-82 r3** y documentos de CISA, ENISA, INCIBE y CCN-CERT sobre el modelo Purdue: hosts no accesibles (nvlpubs.nist.gov, www.cisa.gov, www.enisa.europa.eu, www.incibe.es, www.ccn-cert.cni.es dan error de red).
- **Borrador 2025 del anexo 11**: no se buscó su texto; la lección cita solo el anexo 11 vigente de 2011 (la propia página de EudraLex sigue listando la revisión de enero de 2011).
- **Tiempos concretos de recuperación (RTO) por sistema**: no hay fuente; el anexo 11 solo dice que se basan en el riesgo.
