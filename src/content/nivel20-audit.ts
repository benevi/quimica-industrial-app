import type { Lesson } from "./types";

export const auditAFondo: Lesson = {
  slug: "audit-trail-a-fondo",
  level: 20,
  order: 6,
  title: "Audit trail y firma electrónica a fondo",
  titleEn: "Audit trails and electronic signatures in depth",
  minutes: 38,
  summary:
    "Qué es un audit trail y qué debe guardar según Part 11, el anexo 11, PIC/S y la OMS, qué no lo es, cómo se configura (con una cuenta de relojes y zonas horarias), quién lo revisa, cuándo y qué busca, con un extracto ficticio analizado paso a paso; y la firma electrónica: componentes, significado, firmas en serie, firma frente a clic, firma híbrida y lo que haces tú en el turno y ante un inspector.",
  body: `
En [Audit trail y firma electrónica](/leccion/audit-trail-y-firma-electronica) viste las reglas básicas, y en [Las normas: 21 CFR Part 11, Anexo 11 y guías de integridad de datos](/leccion/part-11-y-anexo-11), el mapa de normas. Aquí vas más abajo: qué guarda el registro de auditoría (*audit trail*), cómo se configura y revisa, y qué significa de verdad teclear tu contraseña para firmar.

### Qué es un audit trail, con tus analogías
La guía de la FDA sobre integridad de datos de 2018 (*Data Integrity and Compliance With Drug CGMP*; escrita para medicamentos, la FDA dice que es coherente con su guía para API) lo define, en su apartado 1.c, como un registro electrónico seguro, generado por el ordenador y con fecha y hora, que permite **reconstruir el curso de los hechos** de la creación, modificación o borrado de un registro electrónico. La guía de la Organización Mundial de la Salud (OMS) sobre integridad de datos (informe técnico 1033, anexo 4, de 2021) lo resume en cuatro preguntas: quién, qué, cuándo y por qué.

Dos analogías de tu oficio:

- **Una tabla de solo inserción.** Imagina una tabla de base de datos en la que la aplicación solo puede añadir filas, nunca modificarlas ni borrarlas (en SQL, solo *insert*; nunca *update* ni *delete*). Cada cambio de un dato GMP añade una fila nueva con el valor anterior y el nuevo. El dato «vivo» puede cambiar; su historia, no.
- **El historial de git, pero sin reescritura.** Cada cambio es un *commit* con autor, fecha y mensaje. Pero sin *force push* ni *rebase*: nadie reescribe la historia, y el mensaje (el motivo) es obligatorio y tiene que servir.

El audit trail es un **metadato**: el dato es «consigna 60,0 °C»; los metadatos dicen quién la puso, cuándo, cuál había antes y por qué.

### Qué debe registrar
La guía PIC/S PI 041-1 (2021), apartado 9.6, es la más concreta. Cada entrada debe incluir:

| Pregunta | Qué guarda | Ejemplo |
|---|---|---|
| Quién | El usuario que hizo la acción | m.ruiz (operador) |
| Qué | La acción, con el valor anterior y el nuevo | Consigna TIC-204: 60,0 a 62,0 °C |
| Cuándo | Fecha y hora | 18/11/2026 03:12:40 |
| Por qué | El motivo | Ajuste según paso 7.3 de la hoja |
| Quién autoriza | Si se modifica un dato, quién autorizó el cambio | Supervisor de turno |

Cómo encaja cada norma:

- **21 CFR Part 11, 11.10(e)**: audit trail seguro, generado por el ordenador y con fecha y hora, de las entradas y acciones que crean, modifican o borran registros. Los cambios **no ocultan** lo anterior y el audit trail se conserva **al menos tanto** como el registro. Fíjate: Part 11 no habla del motivo.
- **Anexo 11 de las GMP europeas (2011), apartado 9**: según el riesgo, registro de los cambios y borrados relevantes para GMP, con **el motivo** documentado; disponible, legible y **revisado con regularidad**.
- **ICH Q7, 5.43** (la GMP de los API): registro de cada cambio de un dato, con la entrada anterior, quién lo cambió y cuándo.
- **PIC/S 9.6**, además: las entradas se registran **en tiempo real**. No vale poner la misma hora a varias acciones ni escribir todo al final. Su ejemplo: si el orden de adición de cuatro materias primas a un tanque es un parámetro crítico, cada adición se registra por separado y con su hora.

La guía de la FDA de 2003 sobre el alcance de Part 11 (*Scope and Application*) relajó la exigencia de 11.10(e), pero no la de las normas de base (*predicate rules*) sobre fechas, horas, secuencia y correcciones, y añade que el audit trail es especialmente adecuado cuando los usuarios crean, cambian o borran registros en el trabajo normal: justo lo que pasa en un MES, un DCS o un laboratorio.

Verás citado a menudo el **borrador de 2025 del anexo 11**. Es un borrador sometido a consulta, no una norma: a noviembre de 2026, la página de EudraLex sigue mostrando como vigente el anexo 11 de enero de 2011. Tómalo como pista de hacia dónde van las inspecciones.

### Qué no es audit trail
No todo lo que se parece a un log es un audit trail GMP. La pregunta clave es: **¿registra lo que una persona hizo a un dato GMP, con quién, qué, cuándo y por qué?**

| Registro | ¿Es audit trail? | Por qué |
|---|---|---|
| Log del sistema operativo o de errores del servidor | No, por sí solo | Registra eventos técnicos, no quién cambió qué dato. PIC/S (9.1.5.2) admite no capturar por completo los logs de error no críticos si se justifica |
| Lista de alarmas | No es lo mismo | Registra lo que hizo el proceso. El borrador del anexo 11 pide un registro de alarmas aparte (8.5); el reconocimiento sí es acción tuya y lo quiere en el audit trail con comentario (8.4 y 12.1) |
| Tendencias del histórico (temperatura cada segundo) | No | Son datos del proceso, no cambios hechos por personas |
| Control de cambios del sistema | No | PIC/S (9.6) avisa de no confundirlos: uno aprueba antes; el otro registra lo hecho |
| Registro de accesos e intentos fallidos | Sí, a nivel de sistema | La FDA (1.c) distingue audit trails de datos y de sistema, como intentos de acceso o borrado de archivos |

### Cómo se configura
**Siempre activo y bloqueado.** PIC/S (9.6) pide que la función esté activada y bloqueada en todo momento y que no se pueda desactivar, borrar ni modificar. Si un administrador puede hacerlo, debe quedar una entrada automática que lo diga. La OMS (11.11) pide activarlo al instalar el programa y comprobar periódicamente que sigue activo. Tú solo puedes leerlo.

**El reloj no es tuyo.** PIC/S (9.5) pide que los usuarios normales no tengan acceso a los relojes ni a las funciones de borrado de archivos y que el reloj del sistema operativo esté **sincronizado** con el de los sistemas conectados. La OMS (4.15) pide configurar y verificar la zona horaria y la sincronización y restringir quién puede cambiarlas.

**La zona horaria.** PIC/S (9.8) avisa: en sistemas globales puede hacer falta guardar la zona horaria para demostrar que el registro fue contemporáneo. El borrador del anexo 11 (12.2) la pide en el audit trail cuando aplique.

**Cuenta resuelta: comparar dos sistemas.** Con valores de ejemplo: el sistema de control (DCS) del reactor guarda la hora en tiempo universal coordinado (UTC); el MES, en hora local, que ese día va una hora por delante de UTC. Un inspector compara dos entradas:

| Sistema | Hora registrada | Acción |
|---|---|---|
| DCS | 09:41:20 (UTC) | m.ruiz cambia la consigna TIC-204 |
| MES | 10:47:50 (local) | m.ruiz confirma «consigna ajustada» en el paso 7.3 |

1. Se pasan las dos a la misma escala: 09:41:20 UTC + 1 h = 10:41:20 hora local.
2. Se restan: 10:47:50 − 10:41:20 = 6 min 30 s = 390 s = 6,5 min.
3. Se interpreta: o el operador confirmó en el MES seis minutos y medio después (¿era contemporáneo?), o los relojes no estaban sincronizados. Lo aclara el registro de sincronización de los relojes. Sin saber qué escala usa cada sistema, la diferencia parecería de 1 h 6 min 30 s: la zona horaria es parte del dato.

### La revisión del audit trail
**Quién.** La FDA (pregunta 7) lo compara con mirar los tachones de una hoja en papel: quien revisa el registro revisa también su audit trail, y la unidad de calidad aprueba todos los registros de producción y control, audit trails incluidos. PIC/S (9.6) pide que los críticos los revise de forma independiente el departamento que los genera, con el resto de registros, y que calidad lo verifique cuando haga falta. El borrador del anexo 11 (12.6) quiere que los revise alguien no implicado en la actividad.

**Cuándo y con qué frecuencia.** La FDA (pregunta 8): si la norma fija cuándo revisar el dato, el audit trail se revisa con la misma frecuencia; por ejemplo, tras cada paso significativo de fabricación y antes de liberar el lote. Si no la fija, se decide con una evaluación de riesgos. PIC/S (9.8) añade:

- La revisión del audit trail forma parte de la revisión rutinaria de datos, **antes** de usarlos para una decisión crítica como liberar el lote.
- Un procedimiento escrito dice cómo revisar, qué buscar y cómo hacer las búsquedas. La revisión se documenta.
- Cualquier variación significativa se **investiga** y se registra.
- Calidad programa además revisiones de audit trails, **aleatorias y dirigidas**, dentro de las autoinspecciones.

La OMS (12.3 a 12.6) fija la frecuencia según la criticidad del sistema y el tipo de información, y pide dejar evidencia de la revisión.

**Qué se busca.** PIC/S (9.6) propone centrarse en los cambios de datos y en lo anómalo o no autorizado (revisión por excepción). El borrador del anexo 11 (12.7) cita repeticiones, errores, omisiones y desviaciones no autorizadas, y pide verificar sobre todo **el motivo** de cada cambio.

### Un extracto ficticio, analizado paso a paso
Sistema de datos cromatográficos (*chromatography data system*, CDS) ficticio CDS-L2, control del intermedio ficticio IX-55, lote LT-2611-04. Límite de la impureza B: no más de 0,15 % (valor de ejemplo).

| N.º | Fecha y hora | Usuario | Acción | Anterior | Nuevo | Motivo |
|---|---|---|---|---|---|---|
| 1 | 18/11 07:58 | ana.r | Inicio de la secuencia SEQ-118 | | | |
| 2 | 18/11 08:03 | ana.r | Inyección «prueba», vial 5 (muestra del lote) | | Adquirida | Comprobar sistema |
| 3 | 18/11 08:31 | ana.r | Inyección 1, vial 6 (muestra) | Adquiriendo | Abortada | |
| 4 | 18/11 09:10 | ana.r | Resultado impureza B, integración automática | | 0,16 % | |
| 5 | 18/11 09:24 | ana.r | Integración manual del pico B (línea base) | 0,16 % | 0,14 % | Ajuste |
| 6 | 18/11 09:40 | ana.r | Borrado del resultado reprocesado 1 | Existe | Borrado | Duplicado |
| 7 | 18/11 23:52 | lab1 | Inicio de sesión fallido (3 veces) | | | |
| 8 | 19/11 11:15 | j.perez | Firma: revisado | | | |

Lo que haría un buen revisor, fila a fila:

1. **Fila 1.** Normal: lo demás debe encajar con esa secuencia.
2. **Fila 2.** Una inyección «de prueba» con la muestra real del lote. La FDA (pregunta 13) considera una práctica contraria a las GMP usar una muestra real en inyecciones de prueba, preparación o equilibrado para disimular que se ensaya hasta que cumple (*testing into compliance*). La idoneidad del sistema se hace con patrones. ¿Qué salió en esa inyección?
3. **Fila 3.** Una inyección abortada sin motivo. La FDA (pregunta 12) pide que las abortadas queden en el audit trail y se investiguen y justifiquen.
4. **Filas 4 y 5.** El resultado automático no cumplía (0,16 %) y, catorce minutos después, una integración manual lo deja en 0,14 %, con un motivo que no explica nada. PIC/S (9.7) pide integraciones manuales y reprocesados aprobados y controlados, conservando el original; la FDA (pregunta 14) no acepta guardar solo el resultado final. Es la señal más grave: un cambio que convierte un fuera de especificación en conforme.
5. **Fila 6.** Un borrado con motivo «duplicado». Hay que comprobar que de verdad era un duplicado y qué valor tenía.
6. **Fila 7.** Una cuenta genérica intentando entrar a medianoche. La FDA (pregunta 5) y la OMS (11.9) rechazan las cuentas compartidas: no identifican a nadie.
7. **Fila 8.** El revisor firmó. Si firmó sin preguntar por las filas 2 a 6, la revisión no sirvió.

Conclusión: el resultado no se aprueba y se investiga como resultado fuera de especificación (*out of specification*, OOS) y como posible problema de integridad de datos. La FDA (pregunta 15) pide investigar dentro del sistema de calidad cualquier sospecha de falsificación.

Y un extracto del audit trail del DCS del reactor ficticio R-204, en el mismo turno:

| Hora (UTC) | Usuario | Acción | Anterior | Nuevo | Motivo |
|---|---|---|---|---|---|
| 03:12:40 | m.ruiz | Consigna caudal FIC-204 | 120 kg/h | 180 kg/h | |
| 03:14:05 | m.ruiz | Lazo TIC-204 | Automático | Manual | Prueba |
| 03:40:30 | m.ruiz | Reconocer alarma TAH-204 | | Reconocida | |
| 03:55:10 | m.ruiz | Consigna caudal FIC-204 | 180 kg/h | 120 kg/h | Vuelta a receta |

Los caudales son valores de ejemplo. La lectura: se aceleró la adición un 50 % sin motivo, se pasó el lazo a manual con un motivo inútil, saltó una alarma de temperatura alta y se reconoció sin comentario, y unos 42 minutos y medio después se volvió a la receta. El audit trail cuenta qué pasó; el porqué tenía que estar en los motivos. El revisor tendrá que buscar a m.ruiz, y el lote espera.

### La firma electrónica
Part 11 (11.3) la define como un conjunto de símbolos que una persona ejecuta, adopta o autoriza como **equivalente legal** de su firma manuscrita. El anexo 11 (apartado 14) pide que tenga dentro de la empresa el mismo efecto que la manuscrita, quede unida para siempre a su registro e incluya fecha y hora. ICH Q7 (6.18) pide que esté autenticada y sea segura.

**Componentes.** Part 11 (11.200):

- Si **no es biométrica**, usa al menos **dos componentes** distintos, como un código de usuario y una contraseña.
- Si es **biométrica** (un rasgo físico o una acción repetible, únicos y medibles, como la huella; 11.3), debe diseñarse para que solo pueda usarla su dueño.
- Solo la usa su dueño legítimo, y usar la firma de otro debe exigir la colaboración de dos o más personas.

**Firmas en serie y sesiones.** Dentro de un único periodo continuo de acceso controlado, la primera firma usa todos los componentes y las siguientes, al menos uno que solo tú puedes ejecutar. Si las firmas no están en un periodo continuo, cada una lleva todos los componentes. Ejemplo: cinco firmas seguidas sin salir de la sesión suponen como mínimo 2 + 1 + 1 + 1 + 1 = 6 componentes tecleados; si cerraste la sesión entre una y otra, 5 × 2 = 10. El borrador de 2025 del anexo 11 (13.3) va más lejos: volver a autenticarse por completo en cada firma; en las inmediatamente seguidas, basta la contraseña o la biometría.

**Contraseñas.** Part 11 (11.300) pide combinaciones de usuario y contraseña únicas, revisadas o caducadas periódicamente, anular las tarjetas o dispositivos perdidos y detectar y comunicar enseguida cualquier intento de uso no autorizado.

**Qué muestra y a qué se une.** Part 11 (11.50) pide que el registro firmado muestre el **nombre** de quien firma, la **fecha y hora** y el **significado**: revisión, aprobación, responsabilidad o autoría. Y 11.70, que la firma quede unida a su registro y no se pueda recortar, copiar ni trasladar a otro. PIC/S (9.5) añade que, si se cambia un dato ya firmado, el registro debe aparecer como no firmado hasta revisarlo y firmarlo otra vez. Cada firma es de una sola persona y no se reasigna (11.100).

### Firma frente a «clic de aceptar»
Un botón de «Aceptar» que no pide credenciales es solo una confirmación: dice que alguien con la sesión abierta pulsó, no quién se responsabiliza de qué. Una firma electrónica:

- te vuelve a pedir tus componentes;
- muestra o pide el significado (realizado, revisado, aprobado);
- queda unida al registro con nombre, fecha y hora;
- y te hace responsable de lo que firmas (11.10(j)).

La OMS (11.14) es tajante: una imagen insertada de una firma o una nota al pie que diga «firmado electrónicamente» no basta si no sale de un proceso de firma validado.

### La firma híbrida
Es imprimir un registro electrónico y firmarlo a mano. El capítulo 4 de las GMP europeas (4.1) admite registros híbridos si está definida la relación entre papel y sistema. La guía de la FDA de 2003 recomienda decidir de antemano, y por escrito, si se confía en el registro electrónico o en el papel. Pero la guía de 2018 (pregunta 10) recuerda que, si el dato es dinámico, como un cromatograma, el papel no lo sustituye.

Los riesgos:

- **La firma no sabe si el dato cambió.** El electrónico se puede modificar después y la firma en papel sigue ahí. El borrador del anexo 11 (13.9) propone imprimir en la hoja de firma una huella digital (*hash*) del registro electrónico, para que cualquier cambio la invalide.
- **El papel es incompleto.** Puede no mostrar el audit trail, ni otras inyecciones, ni el espectro completo.
- **Más transcripción y más revisión.** PIC/S (9.10) desaconseja los sistemas híbridos y pide comprobaciones en cada paso entre papel y sistema y conservar el original tras transcribirlo.

### Qué haces tú en el turno
- **Nunca firmas por otro ni dejas que firmen por ti.** Ni con su contraseña, ni con su sesión abierta. Es falsificar un registro.
- **Cierras o bloqueas la sesión** al alejarte. PIC/S (9.5) pide además un cierre automático por inactividad que obligue a identificarse de nuevo.
- **Escribes motivos útiles.** El motivo es para alguien que lo leerá meses después sin poder preguntarte.

| Motivo inútil | Motivo útil |
|---|---|
| Error | Corrección de error de tecleo: 52,0 por 25,0 |
| Ajuste | Consigna a 62,0 °C según paso 7.3, aviso del supervisor de turno |
| Prueba | Lazo en manual por oscilación de TIC-204, aviso a instrumentación, OT de ejemplo 4471 |
| Ok | Alarma reconocida: subida por adición rápida, caudal devuelto a receta |

- **Si ves algo raro en un audit trail**, lo comunicas; no lo «arreglas» tú.

### Si en una auditoría te preguntan por una entrada
La FDA (pregunta 17) recuerda que todos los registros GMP, también los electrónicos, se pueden inspeccionar. Si te pregunta «¿qué pasó a las 03:14?»:

1. **Escucha la pregunta entera** y pide ver la entrada en pantalla o impresa.
2. **Cuenta solo lo que sabes**: qué hiciste, cuándo y por qué, con la hoja o el cuaderno delante.
3. **Si no lo recuerdas, dilo.** «No lo recuerdo; lo compruebo en la hoja del turno» es una respuesta honrada. Inventar o adornar es peor que no saber.
4. **No especules sobre lo que hicieron otros**: eso lo valora calidad.
5. **Si la entrada revela un error**, reconócelo: el audit trail ya lo muestra.

La forma de comportarse ante un inspector la fija tu empresa (quién acompaña, quién responde). En planta manda siempre el procedimiento vigente (SOP).
`,
  plant: `
Planta ficticia de intermedios, reactor R-204 de esmalte, lote LT-2611-04 del intermedio IX-55. Durante una inspección, la inspectora pide el audit trail del DCS de la noche del 18 de noviembre y lo filtra por usuario. Aparece una línea a las 03:14:05 UTC: lazo TIC-204 de automático a manual, motivo «Prueba». La entrada es de Marta, operadora del turno de noche.

Marta pide ver la línea en pantalla. Abre la hoja de producción del lote: en el paso 7.3 había anotado a las 04:15 hora local «TIC-204 oscila ±3 °C en automático, paso a manual, aviso a instrumentación (OT de ejemplo 4471)», con sus iniciales. Explica qué hizo, cuánto tiempo estuvo el lazo en manual y quién lo volvió a poner en automático, y reconoce que el motivo que escribió en el DCS no decía nada.

La inspectora anota que el motivo del DCS no es útil, pero la hoja de producción, la orden de trabajo y la explicación cuadran entre sí. Calidad abre una acción: lista de motivos predefinidos en el DCS y formación sobre motivos útiles. En la revisión del lote siguiente, el revisor encuentra motivos como «lazo en manual por oscilación, OT 4502» y ya no tiene que buscar a nadie.
`,
  batchRecord: `
- **Firmas electrónicas** en cada paso con tu nombre, fecha y hora y significado (realizado, verificado, revisado).
- En los cambios hechos en el DCS o el MES: el **motivo** queda en el audit trail; si la hoja pide anotarlo también en papel, el mismo motivo, útil y concreto, y la hora con su referencia (local o UTC) si el procedimiento lo indica.
- **Correcciones** en el EBR hechas con la función de corrección, nunca borrando: valor anterior, nuevo, quién, cuándo y por qué.
- **Reconocimientos de alarmas** con comentario cuando el sistema lo pide.
- En registros híbridos: el impreso firmado y fechado, con la referencia del registro electrónico al que corresponde.
- Al final del lote, el **informe de revisión del audit trail** firmado por quien lo revisó, antes de la liberación.
`,
  terms: [
    { es: "Registro de auditoría", en: "Audit trail", def: "Registro seguro, generado por el sistema y con fecha y hora, que permite reconstruir quién creó, cambió o borró un dato, cuándo y por qué." },
    { es: "Metadatos", en: "Metadata", def: "Información que da contexto a un dato: quién, cuándo, con qué equipo, en qué unidad." },
    { es: "Revisión del audit trail", en: "Audit trail review", def: "Comprobación documentada, por una persona autorizada, de los cambios, borrados y anomalías del audit trail antes de usar los datos." },
    { es: "Revisión por excepción", en: "Review by exception", def: "Revisión centrada en lo anómalo o no autorizado que marca el sistema, en lugar de en cada entrada." },
    { es: "Tiempo universal coordinado", en: "Coordinated Universal Time (UTC)", def: "Escala de tiempo de referencia mundial; muchos sistemas guardan la hora en ella y la muestran en hora local." },
    { es: "Integración manual", en: "Manual integration", def: "Cambio a mano de cómo el programa mide el área de un pico de un cromatograma; solo se hace de forma controlada y queda en el audit trail." },
    { es: "Ensayar hasta que cumpla", en: "Testing into compliance", def: "Repetir análisis o inyecciones hasta obtener el resultado deseado; práctica inaceptable." },
    { es: "Firma electrónica", en: "Electronic signature", def: "Símbolos que una persona ejecuta o autoriza como equivalente legal de su firma manuscrita." },
    { es: "Biometría", en: "Biometrics", def: "Identificación por un rasgo físico o una acción repetible únicos y medibles, como la huella dactilar." },
    { es: "Significado de la firma", en: "Signature meaning", def: "Lo que declara quien firma: autoría, revisión, aprobación o responsabilidad." },
    { es: "Firma híbrida", en: "Hybrid signature", def: "Firma manuscrita sobre la impresión de un registro electrónico." },
    { es: "Cierre por inactividad", en: "Inactivity logout", def: "Cierre automático de la sesión tras un tiempo sin uso, que obliga a identificarse otra vez." },
    { es: "Normas de base", en: "Predicate rules", def: "Requisitos GMP que dicen qué registros hay que tener; Part 11 dice cómo hacerlo en electrónico." },
  ],
  quiz: [
    {
      kind: "choice",
      q: "¿Qué pide el anexo 11 (apartado 9) que Part 11, 11.10(e), no menciona?",
      options: [
        "Que el audit trail tenga fecha y hora",
        "Que se conserve tanto como el registro",
        "Que se documente el motivo del cambio o borrado",
        "Que lo genere el propio ordenador",
      ],
      answer: 2,
      explain: "11.10(e) pide audit trail seguro, con fecha y hora, sin ocultar lo anterior y conservado como el registro; el motivo lo exige el anexo 11, apartado 9, y PIC/S 9.6.",
    },
    {
      kind: "number",
      q: "El DCS guarda la hora en UTC y el MES en hora local, que va 1 h por delante de UTC (valor de ejemplo). El DCS registra un cambio de consigna a las 09:41:20 UTC y el MES la confirmación a las 10:47:50 hora local. ¿Cuántos minutos pasaron entre ambas?",
      answer: 6.5,
      tolerance: 0.02,
      unit: "min",
      explain: "09:41:20 UTC + 1 h = 10:41:20 local; 10:47:50 − 10:41:20 = 6 min 30 s = 6,5 min.",
    },
    {
      kind: "choice",
      q: "En el CDS, el resultado automático de una impureza es 0,16 % (límite de ejemplo 0,15 %) y una integración manual posterior lo deja en 0,14 % con motivo «Ajuste». ¿Qué hace el revisor?",
      options: [
        "No lo aprueba y lo investiga según el procedimiento",
        "Lo aprueba, porque el último valor cumple",
        "Borra la entrada automática para dejar el informe limpio",
        "Pide repetir la inyección hasta que salga 0,14 %",
      ],
      answer: 0,
      explain: "PIC/S 9.7 exige integraciones controladas y conservar el original, y la FDA (preguntas 13 y 14) rechaza ensayar hasta que cumpla y guardar solo el resultado final.",
    },
    {
      kind: "number",
      q: "Firmas cinco pasos seguidos del EBR sin salir de la sesión, con firma de usuario y contraseña. Según Part 11 (11.200), ¿cuántos componentes como mínimo tecleas en total?",
      answer: 6,
      tolerance: 0,
      unit: "componentes",
      explain: "La primera firma lleva los 2 componentes y cada una de las 4 siguientes al menos 1: 2 + 4 = 6.",
    },
    {
      kind: "choice",
      q: "¿Cuál de estos registros es un audit trail GMP en el sentido de PIC/S 9.6?",
      options: [
        "El log de errores del sistema operativo del DCS",
        "La tendencia de temperatura del histórico",
        "La solicitud aprobada en el control de cambios",
        "«TIC-204: 60,0 a 62,0 °C, m.ruiz, con motivo»",
      ],
      answer: 3,
      explain: "El audit trail registra lo que una persona hizo a un dato GMP: quién, qué con valor anterior y nuevo, cuándo y por qué.",
    },
    {
      kind: "choice",
      q: "Según la FDA (pregunta 8), si la norma pide revisar los datos de fabricación antes de liberar el lote, ¿cuándo se revisa su audit trail?",
      options: [
        "Una vez al año, en la evaluación periódica",
        "Con la misma frecuencia: antes de liberar el lote",
        "Solo si hay una auditoría externa",
        "Cuando el sistema avise de un error",
      ],
      answer: 1,
      explain: "Si la frecuencia de revisión del dato está fijada, el audit trail se revisa con esa misma frecuencia; si no, se decide por riesgo.",
    },
    {
      kind: "choice",
      q: "Un analista hace una inyección «de prueba» con la muestra real del lote antes de la secuencia. ¿Qué dice la FDA (pregunta 13)?",
      options: [
        "Es correcto si después se borra del sistema",
        "Es correcto si la hace el supervisor del laboratorio",
        "Es contraria a las GMP si disimula ensayar hasta que cumpla",
        "Es obligatoria para la idoneidad del sistema",
      ],
      answer: 2,
      explain: "La idoneidad se hace con patrones según procedimiento; usar muestra real en pruebas o equilibrados para disimular el resultado es una práctica que la FDA cita en sus cartas de advertencia.",
    },
    {
      kind: "number",
      q: "Un lote de API con fecha de caducidad en mayo de 2029 tiene su EBR y el audit trail en el MES. Según ICH Q7 (6.13) y Part 11 (11.10(e)), ¿hasta qué año como mínimo se conserva el audit trail?",
      answer: 2030,
      tolerance: 0,
      unit: "año",
      explain: "Los registros se guardan al menos 1 año tras la caducidad (2029 + 1 = 2030) y el audit trail, al menos tanto como el registro: 2030.",
    },
    {
      kind: "choice",
      q: "Se imprime un cromatograma, el analista lo firma a mano y después alguien reprocesa el dato electrónico. ¿Cuál es el riesgo principal de esa firma híbrida?",
      options: [
        "Que la firma en papel siga aunque el dato haya cambiado",
        "Que el papel ocupe demasiado sitio en el archivo",
        "Que la tinta del bolígrafo no sea indeleble",
        "Que el inspector no pueda leer la firma a mano",
      ],
      answer: 0,
      explain: "La firma manuscrita no está unida al registro electrónico; el borrador del anexo 11 (13.9) propone imprimir una huella del registro para que cualquier cambio la invalide.",
    },
    {
      kind: "choice",
      q: "Un inspector te pregunta por una entrada tuya del audit trail de hace tres semanas que no recuerdas. ¿Qué respondes?",
      options: [
        "Lo que creo que probablemente pasó, para no quedar mal",
        "Que eso lo hizo seguramente otro compañero con mi sesión",
        "Que no hablo sin que esté delante mi jefe de turno",
        "Que no lo recuerdo y lo compruebo en la hoja del turno",
      ],
      answer: 3,
      explain: "Se cuenta solo lo que se sabe y se apoya en los registros; inventar o culpar a otro sin pruebas es peor que reconocer que no se recuerda.",
    },
  ],
};
