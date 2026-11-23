import type { Lesson } from "./types";

export const accesosAFondo: Lesson = {
  slug: "accesos-y-archivo-a-fondo",
  level: 20,
  order: 8,
  title: "Usuarios, copias de seguridad y archivo a fondo",
  titleEn: "User access, backup and archiving in depth",
  minutes: 38,
  summary:
    "Cómo nace, cambia y se cierra una cuenta en un sistema GMP, por qué no hay usuarios compartidos ni administradores que fabriquen, una matriz de perfiles de ejemplo para un MES y un LIMS, la diferencia entre copia de seguridad y archivo con sus cuentas, cuánto tiempo se guardan los registros, cómo se siguen leyendo dentro de veinte años y qué te toca a ti en el turno.",
  body: `
El resumen está en [Usuarios, revisión del audit trail, copias de seguridad y archivo](/leccion/accesos-copias-y-archivo), y la defensa de la red frente a ataques en [Redes industriales y ciberseguridad a fondo](/leccion/ciberseguridad-ot-a-fondo). Aquí vas a lo de dentro: quién puede hacer qué en cada sistema y cómo se conserva un dato para que dentro de muchos años alguien pueda leerlo y fiarse de él. Roles, permisos, *backups* y migraciones te sonarán del desarrollo web; la diferencia es que cada fila es un registro GMP (*Good Manufacturing Practice*, buenas prácticas de fabricación).

### Por qué importa quién entra
Un registro GMP solo vale si se sabe **quién** lo hizo. En papel lo garantiza tu firma; en un sistema, tu **usuario**: todo lo que se hace con él queda a tu nombre. Las normas:

- **21 CFR Part 11** (la norma de la FDA, la agencia del medicamento de EE. UU., sobre registros electrónicos), apartado **11.10(d)**: limitar el acceso al sistema a personas autorizadas. Apartado **11.10(g)**: comprobaciones de autoridad (*authority checks*), para que solo quien está autorizado pueda usar el sistema, firmar, alterar un registro o hacer cada operación.
- **Anexo 11** de las GMP europeas (versión de 2011, la vigente), apartado **12**: controles físicos o lógicos que limiten el acceso a personas autorizadas (12.1), con un nivel de control según lo crítico que sea el sistema (12.2); que quede registro de cuándo se crea, cambia o anula una autorización de acceso (12.3); y que el sistema registre quién introduce, cambia, confirma o borra datos, con fecha y hora (12.4).
- **ICH Q7**, la guía GMP de los principios activos, apartado **5.43**: controles suficientes para impedir accesos o cambios no autorizados.

Dos guías explican cómo hacerlo: la de la FDA *Data Integrity and Compliance With Drug CGMP* (diciembre de 2018) y la de PIC/S, la cooperación de inspecciones farmacéuticas, **PI 041-1** (julio de 2021).

También verás citado el **borrador de 2025 del anexo 11**, que la Comisión Europea sometió a consulta pública del 7 de julio al 7 de octubre de 2025 junto con el capítulo 4 y un anexo 22 nuevo sobre inteligencia artificial. Es un borrador: a 21 de noviembre de 2026, la página oficial de EudraLex sigue dando como vigentes el anexo 11 y el capítulo 4 de enero de 2011, y no recoge ningún anexo 22. Lo que cito de él es orientación, no obligación.

### El ciclo de vida de una cuenta
**1. Alta.** La petición la autoriza personal adecuado, por ejemplo tu responsable directo y el dueño del sistema (*system owner*), y llega al administrador de forma trazable, según procedimiento (PI 041-1, 9.5). Antes de entregar una firma electrónica, la empresa verifica la identidad de la persona (Part 11, 11.100(b)), y quien usa el sistema debe tener la formación adecuada (11.10(i)). Al entrar por primera vez, el sistema te deja crear tu propia contraseña: PI 041-1 considera incompatible con la integridad de datos un sistema donde solo el administrador puede crearlas, porque entonces la contraseña no es confidencial.

**2. Cambio.** Si sustituyes un mes al jefe de turno, te dan su rol y, al volver, te lo quitan. El borrador lo pide de forma expresa: accesos y roles se conceden, modifican y retiran a tiempo cuando alguien entra, cambia o deja su actividad GMP (11.2). El fallo típico es el contrario: permisos que se suman y nunca se restan.

**3. Baja.** La persona deja la empresa o el área. Su acceso se retira enseguida. La cuenta se **desactiva**, no se borra, para que sus registros sigan diciendo quién los hizo. Y su identificador no se da a otra persona: Part 11 exige que cada firma electrónica sea única de una persona y que no se reutilice ni se reasigne a nadie (11.100(a)).

Una tarjeta de acceso perdida se anula enseguida (Part 11, 11.300(c)). Y cada paso deja rastro: el anexo 11 (12.3) pide registrar creación, cambio y anulación de cada autorización.

### Mínimo privilegio y segregación de funciones
**Mínimo privilegio** (*least privilege*): cada rol tiene el nivel de acceso mínimo necesario para su trabajo. PI 041-1 (9.5) pide varios roles (como mínimo, normal y administrador); dar a todos el mismo rol, que sería el de administrador, no es aceptable. Los usuarios normales no deben tener acceso a partes críticas como el **reloj del sistema** o las funciones de **borrado de archivos**.

**Segregación de funciones** (*segregation of duties*): tareas incompatibles, en personas distintas. Dos reglas:

- **Quien hace no aprueba.** PI 041-1 (9.3) pide que la autorización para generar datos esté separada de la autorización para verificarlos, y que se pruebe en la validación.
- **El administrador no fabrica ni analiza.** La FDA (2018, pregunta 4) dice que el rol de administrador, con permisos para cambiar archivos y configuración, se asigne a personas independientes de quienes responden del contenido del registro. PI 041-1 añade que no tenga interés en el resultado: un supervisor de laboratorio no administra el sistema de cromatografía de su laboratorio; suele hacerlo informática. En empresas pequeñas puede ser alguien designado de calidad o producción, con una segunda cuenta normal para el trabajo diario y cada acción de administrador registrada y aprobada.

### Cuentas genéricas: por qué están prohibidas
Una cuenta genérica la usan varias personas: «turno_noche», «balanza1», «lab». En GMP rompe la base del registro:

- Con credenciales compartidas el sistema no puede identificar a una persona concreta, y no cumple la norma (FDA 2018, pregunta 5).
- PI 041-1 (9.5) pide prohibir las contraseñas compartidas, **incluso para ahorrar licencias**.
- La única excepción: una cuenta compartida de **solo lectura**, que no permita cambiar datos ni configuración, sirve para consultar. No sirve para nada que deba ser atribuible, como la revisión por una segunda persona (FDA 2018, pregunta 5). El borrador del anexo 11 (11.1) llama a lo demás violación de la integridad de datos.

Si un equipo antiguo solo admite un usuario, PI 041-1 acepta, sin alternativa posible, un registro en papel controlado de quién lo usó, justificado y con más revisión de datos.

### Una matriz de perfiles de ejemplo
La matriz de perfiles (*role matrix*) es la tabla que dice qué puede hacer cada rol. Esta es un **ejemplo inventado** para un MES ficticio (MES-FX, la hoja de producción electrónica) y un LIMS ficticio (LIMS-QX, el sistema del laboratorio). La de tu planta está en su procedimiento y en la validación de cada sistema.

| Acción | Operador | Jefe de turno | Analista | Calidad (QA) | Administrador (TI) |
|---|---|---|---|---|---|
| MES-FX: ejecutar un paso y registrar pesadas | Sí | Sí | No | No | No |
| MES-FX: firmar como segunda persona | Sí, nunca su propio paso | Sí, nunca su propio paso | No | No | No |
| MES-FX: corregir un dato con motivo | Sí, el suyo | Sí, con su firma | No | No | No |
| MES-FX: revisión de producción del lote | No | Sí | No | No | No |
| MES-FX: revisión de calidad y decisión del lote | No | No | No | Sí | No |
| LIMS-QX: registrar un resultado | No | No | Sí | No | No |
| LIMS-QX: revisar un resultado | No | No | Sí, nunca el suyo | Sí | No |
| LIMS-QX: aprobar el resultado | No | No | No | Sí | No |
| Ambos: consultar el estado de una muestra o un lote | Solo lectura | Solo lectura | Sí | Sí | No lo necesita |
| Ambos: crear usuarios y asignar roles | No | No | No | No | Sí, con petición aprobada |
| Ambos: cambiar reloj, configuración o audit trail | No | No | No | No | Solo por control de cambios |

Nadie aprueba lo suyo y quien crea usuarios no genera datos. Menos permisos, menos daño si hay un error o una contraseña robada.

### Revisión periódica de accesos
Quedan cambios de área y sustituciones sin cerrar. Por eso se revisa:

- El sistema debe poder sacar una **lista de usuarios con acceso real**, con su identificación y su rol, y esa lista se usa en las revisiones periódicas (PI 041-1, 9.5).
- Part 11 (11.300(b)) pide comprobar, retirar o revisar periódicamente los identificadores y contraseñas emitidos.
- El borrador del anexo 11 (11.11) detalla la idea: cada responsable confirma que su gente sigue necesitando lo que tiene, se documenta y se actúa. La frecuencia, según el riesgo. Ninguna de estas normas da una cifra fija.

**Cuenta resuelta** (valores de ejemplo): el MES-FX tiene 150 cuentas activas. La revisión encuentra 9 que no deberían estar así: 5 de personas que cambiaron de área y 4 roles de sustitución sin retirar. Porcentaje: 9 / 150 × 100 = 6 %. Cada una se corrige, y calidad valora si alguna se usó para algo que no debía. El sistema también debe listar los intentos de entrada, buenos y fallidos, con usuario, rol, fecha y hora (PI 041-1, 9.5).

### Contraseñas, bloqueo y cierre de sesión
- **Únicas**: no puede haber dos personas con la misma combinación de usuario y contraseña (Part 11, 11.300(a)).
- **Fuertes**: PI 041-1 pide una política que el sistema haga cumplir, más estricta con datos críticos; el borrador (11.5), longitud suficiente y mezcla de mayúsculas, minúsculas, números y símbolos. Ningún documento leído da una longitud en caracteres: la fija tu empresa.
- **Intentos no autorizados**: Part 11 (11.300(d)) pide impedirlos y comunicarlos de inmediato a seguridad. El borrador (11.7), bloquear la cuenta tras un número definido de fallos y que solo la desbloquee el administrador tras descartar una intrusión.
- **Cierre por inactividad**: tras un tiempo sin uso, «más corto que largo», y para volver hay que identificarse (PI 041-1).
- **Acceso remoto**: el borrador (11.6) pide autenticación multifactor para entrar en sistemas críticos desde fuera de la planta.

### Copia de seguridad y archivo: dos cosas distintas
| | Copia de seguridad (*backup*) | Archivo (*archive*) |
|---|---|---|
| Para qué | Recuperar el sistema y sus datos tras un fallo, un borrado o un ataque | Conservar los datos cerrados durante todo el periodo de conservación |
| Qué guarda | Datos, metadatos y audit trail; según el riesgo, también aplicaciones y configuración | Datos y metadatos ya cerrados, protegidos contra cambios y borrado |
| Anexo 11 vigente | 7.1: datos protegidos y accesibles todo el periodo; 7.2: copias regulares, con integridad y restauración comprobadas en la validación y vigiladas periódicamente | 17: comprobar accesibilidad, legibilidad e integridad; si cambia el sistema, asegurar y probar que se pueden recuperar |

Cuidado con las palabras: la FDA (2018, pregunta 1e) llama *backup* a una **copia fiel conservada todo el periodo de conservación**, equivalente a lo que otras guías llaman archivo; una copia temporal para recuperarse de un fallo no cumple ese requisito.

**PI 041-1 (9.9)** pide que las copias guarden datos, metadatos y audit trail, y se puedan restaurar enteras; que tengan los mismos controles que el original (en un disco portátil, que no se pueda borrar); que las rutinarias estén en un lugar **remoto y separado físicamente**, y las de archivo también separadas del original y de las copias; y que la **restauración** de lo archivado se pruebe con regularidad.

El borrador (16) pone ejemplos: copias horarias, diarias, semanales y mensuales conservadas una semana, un mes, un trimestre o años; fuera de la misma red que el original; y pruebas de restauración documentadas (16.6).

En informática se usa mucho la **regla 3-2-1**: tres copias, en dos soportes distintos, una fuera de las instalaciones. Es una **práctica habitual**, no un requisito de las normas leídas; lo que estas piden es la separación física y la restauración probada. Una copia nunca restaurada es una suposición: puede estar incompleta o sin el audit trail.

### Cuentas de copias (valores de ejemplo)
**Capacidad.** El LIMS-QX hace una copia completa semanal de 400 GB y una incremental diaria, solo con lo cambiado, de 8 GB los otros 6 días. Se conservan 5 semanas en cada uno de los dos lugares separados.

- Una semana: 400 + 6 × 8 = 448 GB.
- Cinco semanas: 448 × 5 = 2240 GB.
- Dos lugares: 2240 × 2 = 4480 GB.

**Tiempo de restauración.** Se restaura la copia completa a 250 MB/s, tomando 1 GB = 1000 MB: 400000 / 250 = 1600 s, unos 26,7 minutos. Con las 6 incrementales (48 GB, 192 s más) son 1792 s, unos 29,9 minutos. Si el procedimiento fija un tiempo máximo de recuperación (RTO, *Recovery Time Objective*), solo una prueba real dice si se cumple.

**Punto de recuperación.** Con una copia diaria a las 23:00, si el servidor falla a las 16:40 del día siguiente, faltan 17 h 40 min (17,7 h) de datos. Ese hueco máximo es el RPO (*Recovery Point Objective*); en planta lo cubren la contingencia y los originales, como el ticket de la balanza.

### Cuánto tiempo se guardan los registros
**Para un principio activo (ICH Q7).** Un procedimiento fija qué se conserva y durante cuánto (6.12). El 6.13 da los mínimos para los registros de producción, control y distribución:

- Al menos **1 año después de la fecha de caducidad** del lote.
- Si el API tiene **fecha de reanálisis**, al menos **3 años después de que el lote se haya distribuido por completo**.

Deben estar fácilmente disponibles en la planta donde se hizo el trabajo, o recuperarse enseguida por medios electrónicos (6.15), como originales o copias fieles, con medios para leerlos e imprimirlos (6.16).

**Para un medicamento (capítulo 4).** El capítulo 4 de EudraLex está en la parte I, la de los medicamentos. Su apartado 4.11 pide conservar la documentación del lote 1 año después de la caducidad o al menos 5 años después de que la Persona Cualificada (*Qualified Person*) certifique el lote, **lo que sea más largo**. El 4.10 pide saber qué registro corresponde a cada actividad y dónde está; el 4.12, guardar los datos crudos que respaldan la autorización del medicamento (validación, estabilidad) mientras siga en vigor.

**El audit trail** se guarda al menos tanto como su registro (Part 11, 11.10(e)). Son mínimos: otras leyes o tu empresa pueden fijar más (PI 041-1, 8.10.1).

### Cuentas de fechas resueltas (valores de ejemplo)
**API con caducidad.** El lote AX-27-031 del API ficticio AX-27 caduca el 28/02/2029. Registros como mínimo hasta el 28/02/2030.

**API con reanálisis.** El lote KZ-28-112 tiene fecha de reanálisis y su último envío sale el 05/09/2028. Mínimo: 05/09/2028 + 3 años = 05/09/2031. Se cuenta desde la distribución completa, no desde la fecha de reanálisis.

**Medicamento del cliente.** Un comprimido ficticio hecho con tu API caduca el 30/06/2031, y la Persona Cualificada lo certifica el 15/07/2028. Caducidad + 1 año = 30/06/2032. Certificación + 5 años = 15/07/2033. Manda la más tardía: 15/07/2033.

### Que se pueda leer dentro de veinte años
Guardar no basta: hay que poder **abrir y entender** el dato cuando formatos y programas ya hayan envejecido.

- **Migrar a tiempo**, antes de que la plataforma se quede sin soporte (PI 041-1, 9.3).
- **Tras una actualización**, los datos archivados deben leerse con el programa nuevo, convertidos si hace falta; si no se puede, se mantiene el programa antiguo, por ejemplo en un entorno virtual (PI 041-1, 9.4).
- **Migrar se hace con protocolo escrito** y verificando que han pasado todos los datos (PI 041-1, 9.4); el borrador (17.2), con una suma de comprobación (*checksum*) antes de borrar el origen, como el hash de una descarga.
- **Formato**: en 2003 la FDA aceptó archivar en papel, microfilm o PDF si se conservaban contenido y significado. Las guías posteriores incluyen ahí los metadatos, y PI 041-1 admite un formato que pierda funciones, como el reprocesado de un cromatograma, solo tras una evaluación de riesgo documentada.
- **Soportes de duración limitada**, como un CD: el borrador (17.4) pide usarlos solo el tiempo verificado y pasar los datos a soporte nuevo a tiempo.
- **Retirar un sistema**: antes, procedimientos que aseguren que sus datos se seguirán leyendo, por ejemplo pasándolos a otro sistema (PI 041-1, 9.9).

### El archivo en papel
Hojas, tickets de balanza y registros de limpieza también se archivan. PI 041-1 (8.10) pide:

- Un sistema que describa cada paso: identificación de cajas, lista de registros por caja, plazo y ubicación.
- Acceso al archivo **solo para personas autorizadas**, con registro de cada documento que sale y vuelve.
- Protección contra fuego, líquidos (agua, disolventes), roedores y humedad, y contra quien intente cambiar o sustituir registros.
- Legibilidad todo el periodo: de una impresión no permanente, como el **papel térmico** de muchas balanzas, se conserva una **copia fiel verificada** (*true copy*).

**Destrucción documentada** (8.11): proceso escrito, registro que lo demuestre, medidas para no destruir por error lo vigente y permiso solo para muy pocas personas. Para datos electrónicos, lo mismo (9.9).

### Qué haces tú en el turno
- **Tu usuario es solo tuyo.** No lo prestas, no usas el de otro y no trabajas con una sesión que alguien dejó abierta. Bloqueas al alejarte.
- **No apuntas la contraseña.** Si crees que alguien la conoce, la cambias y avisas.
- **Si ves que puedes hacer algo que no deberías**, como aprobar un paso o cambiar una consigna fuera de tu rol, no lo usas «porque está ahí»: lo comunicas a tu responsable para que se corrija. Es un fallo del control de accesos, no un favor.
- **Ningún dato GMP en el escritorio ni en un USB.** En local se pueden borrar o cambiar (PI 041-1, 9.4), y los USB, sobre todo personales, se controlan (9.5). Los datos viven en el sistema validado.
- **Tickets y hojas** se adjuntan como dice el procedimiento; no se tiran ni se guardan «para luego».

En planta manda siempre el procedimiento vigente (SOP): roles, plazos y pasos concretos son los de tu empresa.
`,
  plant: `
Lunes, turno de mañana. Iker entra en el terminal del MES-FX junto al filtro-secador ficticio FD-402 con su usuario y su contraseña. Al abrir la orden del lote AX-27-031 ve un botón que antes no tenía: «Revisión de producción del lote».

Recuerda por qué: el mes pasado sustituyó dos semanas al jefe de turno y le dieron ese rol. Ya ha vuelto a su puesto de operador, pero el rol sigue activo. Podría revisar lotes, incluso los suyos. No lo toca.

Se lo dice a Marta, la jefa de turno, y ella abre una petición al dueño del sistema. Esa tarde informática retira el rol. La petición, la retirada y la fecha quedan registradas. Calidad consulta el audit trail y comprueba que el rol no se usó.

A media mañana, un compañero le pide que copie a un USB las pesadas de la balanza ficticia BP-07 «para hacer un Excel en la oficina». Iker le explica que los datos ya están en el MES-FX y que el informe se saca desde allí con un perfil de consulta. No se copian a un USB ni se dejan en un escritorio.

El viernes, informática hace la prueba trimestral de restauración del LIMS-QX en un servidor de pruebas. Restaura una copia de un lote antiguo y calidad comprueba que aparecen el resultado, sus metadatos y su audit trail completos. Todo queda documentado.

Ninguno de los tres hechos sale en la hoja del lote, pero los tres protegen que lo que firma Iker valga.
`,
  batchRecord: `
- **Cada firma o registro electrónico** muestra tu nombre completo, la fecha y hora y su significado (realizado, verificado, revisado). Comprueba que es tu nombre.
- **Segunda persona**: el verificador es otra persona, con su propio usuario. El sistema no debe aceptar que seas tú.
- **Tickets de la balanza**: el original se adjunta según procedimiento. Si es papel térmico, se conserva además la copia fiel verificada que indique el SOP.
- **Contingencia**: si el MES-FX cayó, hojas en papel preaprobadas adjuntas y referencia de la incidencia.
- **Incidencia de accesos**: si detectaste un rol o un acceso indebido, la referencia de la incidencia o la desviación, nunca contraseñas ni detalles técnicos que no pida el procedimiento.
- **Al cerrar el lote**: el registro pasa a ser de solo lectura y se archiva con su ubicación y plazo; eso lo gestiona documentación o calidad, no se anota a mano en tu hoja.
`,
  terms: [
    { es: "Mínimo privilegio", en: "Least privilege", def: "Dar a cada rol solo el nivel de acceso necesario para su trabajo." },
    { es: "Segregación de funciones", en: "Segregation of duties", def: "Separar entre personas distintas tareas incompatibles, como generar y verificar un dato, o administrar el sistema y producir datos." },
    { es: "Matriz de perfiles", en: "Role matrix", def: "Tabla que dice qué puede hacer cada rol en un sistema." },
    { es: "Comprobación de autoridad", en: "Authority check", def: "Control del sistema que deja hacer cada operación solo a quien está autorizado (21 CFR 11.10(g))." },
    { es: "Cuenta genérica", en: "Shared (generic) account", def: "Usuario que comparten varias personas; no permite saber quién hizo cada acción." },
    { es: "Revisión periódica de accesos", en: "Periodic user access review", def: "Comprobación documentada de que cada cuenta y cada rol siguen siendo necesarios." },
    { es: "Cierre por inactividad", en: "Inactivity logout", def: "Cierre automático de la sesión tras un tiempo sin uso; para volver hay que identificarse." },
    { es: "Copia de seguridad", en: "Backup", def: "Copia de datos, metadatos y audit trail para recuperar un sistema tras un fallo o un borrado." },
    { es: "Archivo", en: "Archive", def: "Conservación protegida de datos cerrados durante todo su periodo de conservación." },
    { es: "Prueba de restauración", en: "Restore test", def: "Restaurar de verdad una copia y comprobar que los datos están completos y se pueden leer." },
    { es: "Periodo de conservación", en: "Retention period", def: "Tiempo mínimo durante el que un registro debe guardarse y estar disponible." },
    { es: "Copia fiel", en: "True copy", def: "Copia verificada que conserva todo el contenido y el significado del original." },
    { es: "Migración de datos", en: "Data migration", def: "Paso controlado y verificado de datos de un sistema o formato a otro." },
  ],
  quiz: [
    {
      kind: "choice",
      q: "Vas a tomar una muestra y un compañero te pide que no cierres tu sesión del MES porque él tiene que registrar una carga y la suya tarda en abrir. ¿Qué haces?",
      options: [
        "La dejo abierta, porque así se ahorra tiempo",
        "La dejo abierta y anoto en la hoja quién la usó",
        "La bloqueo; él entra con su usuario o avisa",
        "Le digo mi contraseña para que entre luego",
      ],
      answer: 2,
      explain: "Todo lo que se haga con tu sesión queda a tu nombre. Part 11 pide limitar el acceso a personas autorizadas (11.10(d)) y PI 041-1 prohíbe credenciales compartidas.",
    },
    {
      kind: "choice",
      q: "En el terminal de pesadas hay un usuario «turno_noche» que usan todos los operadores de noche para registrar pesadas. ¿Por qué no es aceptable?",
      options: [
        "No identifica a la persona que hizo cada pesada",
        "Solo porque gasta más licencias del sistema",
        "Solo es un problema si la pesada sale mal",
        "Porque el nombre del usuario es demasiado corto",
      ],
      answer: 0,
      explain: "Con credenciales compartidas no se puede atribuir cada acción a una persona (FDA 2018, pregunta 5). PI 041-1 las prohíbe incluso para ahorrar licencias; solo valen cuentas compartidas de solo lectura.",
    },
    {
      kind: "number",
      q: "Valores de ejemplo. Un LIMS hace una copia completa semanal de 400 GB y una incremental diaria de 8 GB los otros 6 días. Se conservan 5 semanas de copias en cada uno de dos lugares separados. ¿Cuántos GB de capacidad hacen falta en total?",
      answer: 4480,
      tolerance: 0.01,
      unit: "GB",
      explain: "Una semana: 400 + 6 × 8 = 448 GB. Cinco semanas: 448 × 5 = 2240 GB. Dos lugares: 2240 × 2 = 4480 GB.",
    },
    {
      kind: "number",
      q: "Valores de ejemplo. Una copia completa de 400 GB se restaura a 250 MB/s. Tomando 1 GB = 1000 MB, ¿cuántos minutos tarda la restauración?",
      answer: 26.7,
      tolerance: 0.02,
      unit: "min",
      explain: "400 × 1000 = 400000 MB. 400000 / 250 = 1600 s. 1600 / 60 = 26,7 min. Solo una prueba real confirma si se cumple el tiempo de recuperación fijado.",
    },
    {
      kind: "number",
      q: "Valores de ejemplo. Un lote de un API con fecha de caducidad caduca el 28/02/2029. Según ICH Q7 (6.13), ¿hasta qué año, como mínimo, deben conservarse sus registros de producción?",
      answer: 2030,
      tolerance: 0,
      unit: "año",
      explain: "Al menos 1 año después de la caducidad: 28/02/2029 + 1 año = 28/02/2030, es decir, el año 2030.",
    },
    {
      kind: "number",
      q: "Valores de ejemplo. Un medicamento caduca el 30/06/2031 y la Persona Cualificada certificó el lote el 15/07/2028. Según el capítulo 4 (4.11), ¿hasta qué año, como mínimo, se conserva la documentación del lote?",
      answer: 2033,
      tolerance: 0,
      unit: "año",
      explain: "Caducidad + 1 año = 30/06/2032; certificación + 5 años = 15/07/2033. Manda la más larga: hasta el 15/07/2033, año 2033.",
    },
    {
      kind: "choice",
      q: "Pasaste dos semanas como sustituto del jefe de turno. Ya has vuelto a operador y el MES te sigue mostrando la opción de revisión de producción del lote. ¿Qué es lo correcto?",
      options: [
        "Usarla solo con los lotes de compañeros",
        "Esperar a la próxima revisión de accesos",
        "Usarla si el jefe de turno no está",
        "No usarla y avisar para que se retire",
      ],
      answer: 3,
      explain: "Los roles se retiran a tiempo cuando cambia el puesto (borrador del anexo 11, 11.2) y cada rol debe ser el mínimo necesario (PI 041-1, 9.5). Avisar permite corregirlo y comprobar que no se usó.",
    },
    {
      kind: "number",
      q: "Valores de ejemplo. Un MES tiene 150 cuentas activas y la revisión periódica encuentra 9 con accesos que no corresponden. ¿Qué porcentaje de cuentas hay que corregir?",
      answer: 6,
      tolerance: 0.01,
      unit: "%",
      explain: "9 / 150 × 100 = 6 %. Cada cuenta se corrige y se valora si se usó para algo indebido.",
    },
    {
      kind: "choice",
      q: "La planta va a retirar un sistema de cromatografía antiguo. Sus cromatogramas de lotes todavía dentro de su plazo de conservación no se pueden convertir al programa nuevo. ¿Qué es lo correcto?",
      options: [
        "Imprimir los resultados finales y borrar todo",
        "Mantener el programa antiguo, por ejemplo virtualizado",
        "Guardar solo los PDF de los informes firmados",
        "Borrarlos, porque el lote ya está liberado",
      ],
      answer: 1,
      explain: "PI 041-1 (9.4) pide mantener el programa antiguo, por ejemplo en un entorno virtual, si los datos no se pueden convertir; un PDF o una impresión pierden metadatos y el reprocesado.",
    },
    {
      kind: "choice",
      q: "La impresora de la balanza saca los tickets en papel térmico, que con los años se borra. ¿Qué pide PI 041-1 (8.10) para que el registro siga legible?",
      options: [
        "Repasar el ticket con bolígrafo cuando se borre",
        "Pasar los valores a mano a una hoja nueva",
        "Conservar una copia fiel verificada del ticket",
        "Guardarlo con el lote, aunque se acabe borrando",
      ],
      answer: 2,
      explain: "Para impresiones no permanentes, como el papel térmico, se conserva una copia fiel (true copy) verificada, además de archivar según procedimiento.",
    },
  ],
};
