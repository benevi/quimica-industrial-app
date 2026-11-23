import type { Lesson } from "./types";

export const normasAFondo: Lesson = {
  slug: "normas-integridad-a-fondo",
  level: 20,
  order: 4,
  title: "Part 11, anexo 11 y sus borradores a fondo",
  titleEn: "Part 11, Annex 11 and the new drafts in depth",
  minutes: 38,
  summary:
    "Por qué hay una norma de Estados Unidos y otra europea, cuál se aplica a una planta española de API que exporta, 21 CFR Part 11 leída apartado por apartado, qué dejó de exigir la FDA en 2003, el anexo 11 de 2011 con lo que significa para el operador, los borradores de 2025 (anexo 11, capítulo 4 y anexo 22 de inteligencia artificial) y su estado a noviembre de 2026, y las guías de PIC/S, MHRA y OMS.",
  body: `
En la lección [Las normas: 21 CFR Part 11, Anexo 11 y guías de integridad de datos](/leccion/part-11-y-anexo-11) viste el mapa en una página. Aquí lo vas a leer con calma: qué dice cada texto, si obliga o solo recomienda y qué cambia para ti. Si vienes del desarrollo web, es como leer una especificación: hay partes normativas, partes informativas y borradores que aún no son versión estable.

### Ley, guía y borrador: no pesan lo mismo
Antes de leer ninguna norma conviene distinguir tres tipos de texto:

| Tipo | Ejemplo | ¿Obliga? |
|---|---|---|
| **Reglamento** (*regulation*) | 21 CFR Part 11 de la FDA | Sí: es derecho federal de Estados Unidos |
| **Guía oficial** (*guideline*, *guidance*) | Anexo 11 y parte II de las GMP europeas; guías de la FDA | Las europeas desarrollan directivas y las aplican los inspectores; las de la FDA se declaran no vinculantes y su «debería» (*should*) es recomendación |
| **Borrador** (*draft*) | Anexo 11 revisado de 2025 | No, hasta que se publique la versión definitiva con su fecha de entrada en vigor |

La guía de la FDA sobre integridad de datos de 2018 lo dice en su introducción.

### Dos mundos normativos: Estados Unidos y la Unión Europea
Cada autoridad inspecciona con sus reglas: la FDA (*Food and Drug Administration*) las de Estados Unidos; en la UE, la Comisión publica las GMP en **EudraLex, volumen 4**, y las aplican los inspectores de cada país.

**Qué se aplica en una planta española de API.** La base europea es la **parte II de EudraLex vol. 4**, «Requisitos básicos para principios activos usados como materiales de partida». Su introducción explica que nació en 2000 como anexo 18, reflejando el acuerdo de la UE con la guía ICH Q7, y que la directiva 2001/83/CE obliga a los fabricantes de medicamentos a usar solo principios activos fabricados según GMP. Para los sistemas informatizados tiene el apartado **5.4** (5.40 a 5.49): validar según complejidad y criticidad, impedir accesos y cambios no autorizados, registrar cada cambio con el valor anterior, quién y cuándo, comprobar los datos críticos tecleados, investigar incidencias, controlar los cambios y tener respaldo contra la pérdida de registros. El capítulo 6 añade que las firmas electrónicas deben estar autenticadas y ser seguras (6.18).

Fíjate en un detalle: el anexo 11 vigente dice que se aplica a todos los sistemas informatizados usados en actividades reguladas por las GMP, sin nombrar a los principios activos. El borrador de 2025 sí los nombra: se aplicaría a los sistemas usados en la fabricación de medicamentos **y de principios activos**.

**Si el cliente o el producto van a Estados Unidos.** Para los medicamentos, la autoridad de la FDA sobre las GMP sale de la ley, sección 501(a)(2)(B); el reglamento 21 CFR 211 es para medicamentos terminados, y para los principios activos la FDA remite a su guía ICH Q7 (lo dice su guía de integridad de datos de 2018). Part 11 se aplica a los registros electrónicos que exigen los reglamentos de la FDA o que se le envían. Cuáles de tus registros entran ahí lo decide Calidad en sus procedimientos; tú no lo decides, pero sí debes entender por qué tu sistema tiene ciertas pantallas.

### 21 CFR Part 11 leída: alcance
Part 11 se publicó el 20 de marzo de 1997 y entró en vigor el 20 de agosto de 1997. Tiene tres subpartes:

- **Subparte A, disposiciones generales.** 11.1 fija cuándo la FDA considera los registros y firmas electrónicos fiables y equivalentes al papel y a la firma manuscrita. Se aplica a los registros electrónicos creados, modificados, mantenidos, archivados, recuperados o transmitidos bajo cualquier requisito de registros de la FDA, pero **no** a registros en papel que se envían por medios electrónicos (11.1(b)). Los sistemas, sus controles y su documentación deben estar disponibles para la inspección (11.1(e)). 11.3 define los términos.
- **Subparte B, registros electrónicos**: 11.10, 11.30, 11.50 y 11.70.
- **Subparte C, firmas electrónicas**: 11.100, 11.200 y 11.300.

**Sistema cerrado y sistema abierto.** Un sistema es **cerrado** (*closed system*) cuando el acceso lo controlan las personas responsables del contenido de sus registros: el MES de tu planta, al que solo entran usuarios dados de alta por la empresa. Es **abierto** (*open system*) cuando el acceso no lo controlan esas personas. Un ejemplo posible es intercambiar registros firmados con un cliente a través de una plataforma de internet que gestiona un tercero; cómo se clasifica cada caso real lo decide Calidad. Para los abiertos, 11.30 pide todo lo de 11.10 que proceda y además medidas como el **cifrado** de documentos y normas adecuadas de **firma digital**, desde que se crea el registro hasta que lo recibe el destinatario.

### 11.10 punto por punto
11.10 pide, a quien usa sistemas cerrados, procedimientos y controles que aseguren la autenticidad, la integridad y, cuando proceda, la confidencialidad de los registros, y que quien firma no pueda negar después que la firma es suya. Los ejemplos de planta son ficticios.

| Letra | Qué exige | Ejemplo en tu planta |
|---|---|---|
| (a) | **Validación**: exactitud, fiabilidad, funcionamiento constante y capacidad de detectar registros no válidos o alterados | Antes de usar el MES para el reactor R-310 se probó que calcula bien y que rechaza un registro manipulado |
| (b) | Generar **copias exactas y completas**, legibles y en formato electrónico, para la inspección | Exportar el registro del lote con su audit trail |
| (c) | **Proteger** los registros para recuperarlos durante todo el periodo de conservación | Las tendencias del secadero SD-150 siguen legibles años después |
| (d) | **Limitar el acceso** a personas autorizadas | Sin usuario dado de alta no entras en el panel de la centrífuga CF-220 |
| (e) | **Audit trail** seguro, generado por el sistema y con fecha y hora; los cambios no ocultan lo anterior; se conserva tanto como el registro | Si corriges una temperatura, se ve el valor anterior y el nuevo |
| (f) | Comprobaciones que obliguen a seguir la **secuencia** permitida de pasos | El MES no deja cargar disolvente sin la medida de oxígeno registrada |
| (g) | Comprobaciones de **autoridad**: solo quien está autorizado usa el sistema, firma, altera un registro o hace la operación | Tu perfil de operador no puede aprobar el lote |
| (h) | Comprobaciones del **dispositivo** de origen de los datos, cuando proceda | El MES solo acepta la pesada de la balanza BP-27 asignada a ese paso |
| (i) | **Formación**, educación y experiencia de quien desarrolla, mantiene o usa el sistema | Te dan acceso después de la formación en el sistema |
| (j) | Normas escritas que hagan a cada persona **responsable** de lo hecho con su firma, para disuadir de falsificar | El procedimiento que firmas al recibir tu usuario |
| (k) | Control de la **documentación** del sistema y de sus versiones | El manual del MES está en su versión aprobada |

### Manifestación de la firma y vínculo firma-registro
- **11.50, manifestación de la firma** (*signature manifestations*). Un registro firmado indica el **nombre impreso** de quien firma, la **fecha y hora** y el **significado** (revisión, aprobación, responsabilidad o autoría). Estos datos tienen los mismos controles que el registro y aparecen en cualquier forma legible: pantalla o impresión.
- **11.70, vínculo firma-registro** (*signature/record linking*). Las firmas, electrónicas o manuscritas sobre registros electrónicos, quedan unidas a su registro de forma que no se puedan quitar, copiar ni trasladar a otro para falsificarlo por medios normales.

Cómo se ve todo esto en una pantalla real lo tienes en [MES y hoja de producción electrónica a fondo](/leccion/mes-y-ebr-a-fondo).

### Subparte C: la firma electrónica por dentro
- **11.100.** Cada firma es única de una persona y no se reutiliza ni se reasigna. Antes de darte una firma, la empresa verifica tu identidad. Además, la empresa certifica a la FDA, con una carta firmada a mano, que sus firmas electrónicas equivalen legalmente a las manuscritas (la última modificación de este apartado es de marzo de 2023).
- **11.200, componentes.** Si no es biométrica, usa al menos **dos componentes**, como un código de identificación y una contraseña. En una sesión continua, la primera firma usa todos los componentes y las siguientes al menos uno que solo puede usar su dueño; fuera de una sesión continua, cada firma usa todos. Solo la usa su dueño, y usarla otra persona exigiría la colaboración de dos o más. Las biométricas se diseñan para que nadie más pueda usarlas.
- **11.300, usuario y contraseña**: combinaciones únicas; revisión o renovación periódica, por ejemplo con caducidad; anulación de tarjetas o dispositivos perdidos; salvaguardas que avisen de inmediato de intentos de uso no autorizado; y pruebas periódicas de los dispositivos que generan códigos.

### La guía de la FDA de 2003: alcance y aplicación
En agosto de 2003, seis años después de la entrada en vigor, la FDA publicó la guía «Part 11, Electronic Records; Electronic Signatures — Scope and Application». Respondía a quejas de que algunas lecturas de Part 11 frenaban la tecnología y disparaban costes. Tiene tres ideas:

1. **Interpretación estrecha del alcance.** Part 11 se aplica a los registros que exigen las **normas predicado** (*predicate rules*, los reglamentos de base como 21 CFR 211) cuando se guardan en electrónico **en lugar** del papel, o además del papel si es el electrónico el que se usa para trabajar. Si imprimes, la impresión cumple las normas predicado y **trabajas con el papel**, en general Part 11 no se activa. La FDA recomienda documentar de antemano en cuál de los dos te apoyas.
2. **Discreción de aplicación** (*enforcement discretion*): la FDA no pretende sancionar por cuatro requisitos concretos de Part 11: **validación** (11.10(a)), **audit trail** (11.10(e) y (k)(2)), **conservación** (11.10(c)) y **copias** (11.10(b)). Tampoco por los sistemas en uso antes del 20 de agosto de 1997 (*legacy systems*) si cumplen cuatro condiciones: funcionaban antes de esa fecha, cumplían y cumplen las normas predicado y hay pruebas documentadas de que son aptos para su uso.
3. **Lo demás sigue exigiéndose.** Acceso limitado, comprobaciones de secuencia, de autoridad y de dispositivo, formación, responsabilidad por la firma, control de la documentación, controles de sistemas abiertos y **todos** los requisitos de firma electrónica (11.50, 11.70, 11.100, 11.200 y 11.300).

Discreción no significa «no hace falta»: las normas predicado siguen aplicándose, incluido que un cambio no oculte lo anterior, y la guía recomienda decidir validación y audit trail con una evaluación de riesgos documentada. La guía anunciaba una revisión de Part 11; a noviembre de 2026 el texto publicado en eCFR sigue siendo el de 1997, con enmiendas puntuales.

### El anexo 11 de 2011, apartado por apartado
El anexo 11 vigente es la «revisión 1», con entrada en vigor el 30 de junio de 2011. Su **principio**: la aplicación se valida y la infraestructura informática se cualifica; si un sistema sustituye a una operación manual, no debe empeorar la calidad del producto, el control del proceso ni la garantía de calidad, ni aumentar el riesgo global.

| Apdo. | Qué dice | Qué significa para ti |
|---|---|---|
| 1 Riesgos | Gestión de riesgos en todo el ciclo de vida; extensión de la validación según una evaluación documentada | Por eso unos sistemas tienen más controles que otros |
| 2 Personal | Cooperación entre dueño del proceso, dueño del sistema, Personas Cualificadas e informática | Sabes a quién avisar de un fallo |
| 3 Proveedores | Acuerdos formales con terceros, también con informática | Un técnico externo no toca el sistema sin estar previsto |
| 4 Validación | Ciclo de vida documentado, inventario, requisitos de usuario trazables, pruebas de límites y errores, migraciones comprobadas | Lo que ves en pantalla se probó antes |
| 5 Datos | Comprobaciones integradas en el intercambio electrónico | La balanza conectada evita teclear |
| 6 Exactitud | Comprobación adicional de datos críticos tecleados a mano | Segunda persona o validación electrónica |
| 7 Almacenamiento | Protección física y electrónica; copias de seguridad cuya restauración se comprueba | No guardas datos GMP en un USB |
| 8 Impresiones | Copias impresas claras; para la liberación, indicar si un dato cambió | Un informe que avisa de modificaciones |
| 9 Audit trail | Según el riesgo; motivo del cambio o borrado; disponible, legible y revisado periódicamente | Escribe siempre un motivo de verdad |
| 10 Cambios | Cambios y configuración solo de forma controlada | No «arreglas» nada por tu cuenta |
| 11 Evaluación periódica | Confirmar que sigue validado | Cuentan tus incidencias registradas |
| 12 Seguridad | Acceso controlado según criticidad; registro de altas y bajas de permisos y de quién introduce o cambia datos | Tu usuario es solo tuyo |
| 13 Incidencias | Comunicar y evaluar todas; causa raíz de las críticas | Avisas siempre, aunque parezca poco |
| 14 Firma electrónica | Mismo efecto que la manuscrita dentro de la empresa, unida al registro, con fecha y hora | Firmar en pantalla es firmar |
| 15 Liberación | Solo las Personas Cualificadas certifican, identificadas, con firma electrónica | El operador nunca libera |
| 16 Continuidad | Alternativa documentada y probada si el sistema cae | Hojas de contingencia |
| 17 Archivo | Datos archivados accesibles, legibles e íntegros; probar su recuperación si cambia el sistema | Nada se borra al cambiar de programa |

La práctica diaria de los apartados 7, 9, 12 y 17 está en [Usuarios, revisión del audit trail, copias de seguridad y archivo](/leccion/accesos-copias-y-archivo).

### Los borradores de 2025: qué son y en qué estado están
El 7 de julio de 2025 la Comisión Europea abrió una consulta pública sobre tres textos: el **capítulo 4 revisado** (documentación), el **anexo 11 revisado** y un **anexo 22 nuevo** sobre inteligencia artificial. La consulta cerró el 7 de octubre de 2025, a las 23:59 (hora de verano de Europa central). Según la página de la consulta, los redactó el grupo de inspectores GMP/GDP de la EMA con PIC/S.

**Estado a 21 de noviembre de 2026**, en la página oficial de EudraLex vol. 4: figuran como vigentes el «Annex 11 Computerised Systems (revision January 2011)» y el «Chapter 4 - Documentation (January 2011)», y no figura ningún anexo 22. Los tres siguen siendo **borradores**: no obligan, pueden cambiar y, mientras tanto, mandan los textos de 2011 y la parte II. La versión final traerá su fecha de entrada en vigor.

**Anexo 11 revisado (borrador).** El documento pasa de 5 a 19 páginas. Sigue teniendo 17 apartados, pero reorganizados: unos son nuevos y otros crecen mucho. Lo más importante para el operador:
- **Alarmas** (8, nuevo): las críticas las reconoce solo quien tiene permiso, con un comentario; todo va a un registro de alarmas no editable que se revisa.
- **Identidad y accesos** (11): cuentas únicas y personales; una cuenta compartida que pueda cambiar datos «constituye una violación de la integridad de datos»; contraseña que se cambia en el primer acceso; bloqueo tras varios intentos fallidos; cierre por inactividad que el usuario no puede desactivar; autenticación multifactor para entrar desde fuera; registro de cada entrada y salida.
- **Audit trail** (12): quién (con su rol), qué (valor anterior y nuevo), cuándo y por qué, con el sistema pidiendo el motivo; revisión por alguien no implicado y **antes de liberar el lote**, salvo que se justifique.
- **Firma electrónica** (13): reautenticación completa al firmar; no vale solo una tarjeta, un PIN o la sesión ya abierta; la firma muestra nombre completo, usuario, rol, significado, fecha y hora; si un registro firmado cambia, debe aparecer como no firmado; si se firma en papel un registro electrónico, se propone imprimir una suma de comprobación (*hash*) del registro en la hoja de firma.
- Seguridad (15), copias (16) y archivo (17) mucho más detallados: ver [Redes industriales y ciberseguridad a fondo](/leccion/ciberseguridad-ot-a-fondo).

**Capítulo 4 revisado (borrador).** Pide un **sistema de gobierno de datos** (*data governance*) dentro del sistema de calidad, basado en el riesgo, que cubra toda la vida del dato. Amplía ALCOA+ a **ALCOA++**, añadiendo **trazable**: poder seguir la historia, los cambios y la ubicación de un dato. Admite documentos en foto, vídeo y audio, exige una política de firmas, pide firmar electrónicamente los registros electrónicos evitando el híbrido y deja la responsabilidad de los datos producidos con inteligencia artificial o *scripts* en la empresa.

**Anexo 22 nuevo (borrador).** Seis páginas, para modelos de inteligencia artificial (IA) en **usos críticos** con impacto directo en el paciente, la calidad o la integridad de datos, por ejemplo para predecir o clasificar. Solo admite modelos **estáticos** (no siguen aprendiendo durante el uso) y **deterministas** (a igual entrada, igual salida). Dice que no se usen en aplicaciones GMP críticas los modelos dinámicos, los probabilísticos, la **IA generativa** ni los grandes modelos de lenguaje (*LLM*); en usos no críticos, una persona formada responde de cada resultado (*human-in-the-loop*). Pide uso previsto definido, criterios de aceptación al menos tan buenos como el proceso que sustituye, datos de prueba independientes de los de entrenamiento, registrar en las pruebas qué rasgos llevaron a cada decisión, un umbral de confianza para marcar «indeciso» y vigilancia con control de cambios.

### Guías complementarias y cómo encajan
- **PIC/S PI 041-1** (en vigor desde el 1 de julio de 2021), «Good Practices for Data Management and Integrity in Regulated GMP/GDP Environments». Escrita para los inspectores, interpreta los requisitos existentes; dice que no es obligatoria por ley y remite, entre otros, a los capítulos 5 y 6 de la parte II y al anexo 11.
- **MHRA**, «GxP Data Integrity Guidance and Definitions» (publicada el 9 de marzo de 2018, página actualizada en 2021), para todos los ámbitos GxP; PI 041-1 toma de ella su definición de integridad de datos.
- **OMS**, «Guideline on data integrity», anexo 4 del informe técnico TRS 1033 (2021): sustituye a la guía de 2016 (TRS 996, anexo 5) y cubre sistemas electrónicos, en papel e híbridos con los principios ALCOA+.
- **FDA**, «Data Integrity and Compliance With Drug CGMP» (diciembre de 2018): preguntas y respuestas sobre integridad de datos, no vinculantes.

Ninguna sustituye a la norma: explican cómo la leen los inspectores. Los principios de ALCOA+ los tienes en [ALCOA+: datos en los que se puede confiar](/leccion/alcoa-plus) y el ciclo de vida del sistema en [Mantener un sistema validado: cambios, incidencias y revisión periódica](/leccion/sistemas-en-operacion).

### Qué cambia para ti en el turno
Hoy: usuario propio, firma con significado, motivo real en cada corrección, avisar de cada incidencia y ningún dato GMP fuera del sistema. Si los borradores se aprueban tal cual, notarás comentarios al reconocer alarmas críticas, reautenticación en cada firma y más controles de acceso. Cómo se aplica todo esto en tu planta, y desde cuándo, lo fija el procedimiento vigente (SOP): en planta manda siempre el SOP.
`,
  plant: `
Planta ficticia de API. El principio activo FX-220 sale por la centrífuga CF-220 y el secadero SD-150 y se vende a un cliente europeo y a otro de Estados Unidos. Una mañana, el MES de la planta muestra una novedad: al reconocer la alarma crítica de alta temperatura del secadero, la pantalla pide un comentario obligatorio. Tu compañero refunfuña: «Esto es por el anexo 11 nuevo, que ya es ley».

Lo compruebas con el responsable de turno. Calidad ha hecho un análisis de diferencias (*gap analysis*) entre el anexo 11 de 2011 y el borrador de 2025 y ha decidido, por control de cambios, adelantar algunos controles que ya encajaban con la parte II y con Part 11. No es porque el borrador obligue: a noviembre de 2026 sigue sin versión final en EudraLex. La versión del MES y el cambio aprobado aparecen en el registro del lote.

Ese mismo día, el cliente estadounidense pide una copia electrónica del registro del lote con su audit trail para su auditoría. Es lo que prevé 21 CFR 11.10(b): copias exactas y completas, legibles y en formato electrónico. Calidad la prepara desde el sistema; nadie exporta tablas a mano ni hace capturas de pantalla.

Por la tarde, en la reunión de turno, se recuerda que la firma en el MES lleva nombre, fecha y hora y significado (11.50), y que la contraseña no se presta: según 11.10(j) y el procedimiento que firmaste al recibir tu usuario, respondes de todo lo hecho con ella.
`,
  batchRecord: `
En la hoja de producción (*batch record*), en papel o en el MES, estas normas se ven así:

- **Firmas electrónicas** con nombre, fecha y hora y significado («realizado», «verificado», «aprobado»). Si una firma no muestra los tres, se comunica.
- **Correcciones** con valor anterior visible, valor nuevo, usuario, fecha y hora y un motivo que explique lo que pasó, no «error».
- **Alarmas críticas reconocidas** con usuario y hora; si el sistema lo pide, el comentario de por qué se reconoció y qué se hizo.
- **Versión del sistema** con la que se hizo el lote, y la referencia del cambio si la versión cambió durante la campaña.
- **Incidencias informáticas** (caída, bloqueo, dato que no llegó) con su referencia y, si las hubo, las hojas de contingencia adjuntas.
- **Datos críticos tecleados a mano** con la comprobación de la segunda persona o del sistema.
- **Revisión del audit trail** firmada por Calidad antes de la liberación, cuando su procedimiento lo pide.
- Nada de lo anterior lo decide el operador: tú registras lo real, en el momento y con tu usuario.
`,
  terms: [
    { es: "Reglamento", en: "Regulation", def: "Norma con fuerza de ley, como 21 CFR Part 11 en Estados Unidos." },
    { es: "Guía", en: "Guideline / guidance", def: "Texto oficial que interpreta o desarrolla una norma; las guías de la FDA se declaran no vinculantes." },
    { es: "Borrador", en: "Draft", def: "Versión publicada para comentarios; no es obligatoria hasta que se apruebe la versión final con su fecha de entrada en vigor." },
    { es: "Normas predicado", en: "Predicate rules", def: "Reglamentos de base de la FDA que dicen qué registros hay que tener; Part 11 dice cómo deben ser cuando son electrónicos." },
    { es: "Sistema cerrado", en: "Closed system", def: "Sistema cuyo acceso controlan las personas responsables del contenido de sus registros (21 CFR 11.3)." },
    { es: "Sistema abierto", en: "Open system", def: "Sistema cuyo acceso no controlan las personas responsables del contenido de sus registros; exige medidas extra como cifrado y firma digital (11.30)." },
    { es: "Manifestación de la firma", en: "Signature manifestation", def: "Datos visibles de una firma electrónica: nombre impreso, fecha y hora y significado (11.50)." },
    { es: "Vínculo firma-registro", en: "Signature/record linking", def: "Unión de la firma con su registro para que no se pueda quitar, copiar ni trasladar a otro (11.70)." },
    { es: "Discreción de aplicación", en: "Enforcement discretion", def: "Decisión de la FDA de no sancionar ciertos requisitos de Part 11, explicada en su guía de 2003; las normas predicado se siguen aplicando." },
    { es: "Sistema heredado", en: "Legacy system", def: "En la guía de 2003, sistema que ya funcionaba antes del 20 de agosto de 1997." },
    { es: "Gobierno de datos", en: "Data governance", def: "Conjunto de medidas para que los datos sean fiables durante toda su vida, sea cual sea su formato." },
    { es: "ALCOA++", en: "ALCOA++", def: "En el borrador del capítulo 4, ALCOA+ más el principio de trazable." },
    { es: "Modelo estático", en: "Static model", def: "Modelo de inteligencia artificial con todos sus parámetros fijados, que no aprende durante el uso." },
    { es: "Persona en el circuito", en: "Human-in-the-loop (HITL)", def: "Uso de un modelo cuyo resultado revisa y decide una persona formada." },
  ],
  quiz: [
    {
      kind: "choice",
      q: "Trabajas en una planta española de API que vende a un cliente de Estados Unidos. ¿Qué marco normativo se aplica a sus sistemas informatizados?",
      options: [
        "Solo 21 CFR Part 11, porque es la norma más antigua y la de referencia",
        "Solo el borrador de anexo 11 de 2025, por ser el texto más reciente",
        "La parte II de EudraLex (ICH Q7) y, para lo que va a la FDA, Part 11",
        "Ninguno, porque un principio activo no es todavía un medicamento",
      ],
      answer: 2,
      explain: "La base europea para API es la parte II de EudraLex, que recoge ICH Q7; si los registros van a la FDA o los exigen sus reglamentos, entra Part 11. Qué registros exactos lo fija Calidad en sus procedimientos.",
    },
    {
      kind: "choice",
      q: "Tu empresa imprime cada informe de la balanza, la impresión cumple las normas predicado y el procedimiento dice que el registro oficial es el papel. Según la guía de la FDA de 2003, ¿qué pasa con Part 11 para ese registro?",
      options: [
        "En general no se activa, porque se trabaja con el papel y no con el electrónico",
        "Se aplica entera, porque la balanza tiene un ordenador dentro",
        "Se aplica solo la parte de firmas biométricas de la subparte C",
        "Queda prohibido imprimir, porque la FDA exige registros electrónicos",
      ],
      answer: 0,
      explain: "Con la interpretación estrecha de 2003, si usas el ordenador solo para generar papel que cumple las normas predicado y trabajas con ese papel, en general no se activa Part 11. La decisión se documenta de antemano.",
    },
    {
      kind: "choice",
      q: "¿Sobre qué requisitos de Part 11 anunció la FDA en 2003 que ejercería discreción de aplicación?",
      options: [
        "Firma electrónica, contraseñas, acceso limitado y formación",
        "Comprobaciones de secuencia, de autoridad y de dispositivo",
        "Controles de sistemas abiertos y vínculo firma-registro",
        "Validación, audit trail, conservación de registros y copias",
      ],
      answer: 3,
      explain: "Son 11.10(a), (e) y (k)(2), (c) y (b). Todo lo demás, incluidas las firmas (11.50 a 11.300), lo sigue exigiendo, y las normas predicado se aplican igual.",
    },
    {
      kind: "number",
      q: "La consulta pública de los borradores del capítulo 4, el anexo 11 y el anexo 22 abrió el 7 de julio de 2025 y cerró el 7 de octubre de 2025. ¿Cuántos días hay entre esas dos fechas? (julio tiene 31 días, agosto 31 y septiembre 30)",
      answer: 92,
      tolerance: 0.001,
      unit: "días",
      explain: "Del 7 al 31 de julio, 24 días; agosto, 31; septiembre, 30; del 1 al 7 de octubre, 7. Total: 24 + 31 + 30 + 7 = 92 días.",
    },
    {
      kind: "number",
      q: "Un lote de API sin fecha de reanálisis tiene fecha de caducidad en marzo de 2029. Según ICH Q7 (6.13), ¿hasta qué año como mínimo hay que conservar sus registros de producción?",
      answer: 2030,
      tolerance: 0.0001,
      unit: "año",
      explain: "Al menos 1 año después de la caducidad del lote: 2029 + 1 = 2030. Si tuviera fecha de reanálisis, serían 3 años desde su distribución completa.",
    },
    {
      kind: "choice",
      q: "Alguien propone usar un gran modelo de lenguaje (LLM) para que decida solo si un lote se aprueba o se rechaza. ¿Qué dice el borrador del anexo 22?",
      options: [
        "Que se puede, si el modelo tiene más de un año de entrenamiento",
        "Que la IA generativa y los LLM no deben usarse en aplicaciones GMP críticas",
        "Que se puede, siempre que el proveedor del modelo sea europeo",
        "Que el anexo 22 obliga a usar un LLM en todas las decisiones de lote",
      ],
      answer: 1,
      explain: "El borrador solo cubre modelos estáticos y deterministas y dice que la IA generativa y los LLM no se usen en aplicaciones críticas; en usos no críticos, una persona formada responde del resultado. Además, sigue siendo un borrador.",
    },
    {
      kind: "choice",
      q: "Según el borrador del anexo 11 (apartado 13.3), ¿cuál de estas formas de firmar un registro no sería aceptable?",
      options: [
        "Usuario y contraseña completos en la primera firma de la serie",
        "Contraseña sola en firmas seguidas justo después de la primera",
        "Acercar solo la tarjeta del lector, aprovechando la sesión abierta",
        "Biometría en firmas seguidas justo después de la primera completa",
      ],
      answer: 2,
      explain: "El borrador exige reautenticación completa al firmar; en firmas seguidas basta contraseña o biometría, pero no vale solo una tarjeta, un PIN o la sesión ya abierta.",
    },
    {
      kind: "choice",
      q: "¿Qué es un sistema abierto según 21 CFR 11.3?",
      options: [
        "Uno cuyo acceso no controlan los responsables del contenido de sus registros",
        "Uno que funciona con programas de código abierto y gratuitos",
        "Uno que está encendido y disponible las veinticuatro horas",
        "Uno que deja leer los registros a cualquier operador de la planta",
      ],
      answer: 0,
      explain: "La diferencia entre abierto y cerrado es quién controla el acceso. En los abiertos, 11.30 añade medidas como el cifrado y la firma digital.",
    },
    {
      kind: "number",
      q: "Part 11 entró en vigor el 20 de agosto de 1997 y la FDA publicó su guía de alcance y aplicación en agosto de 2003. ¿Cuántos años pasaron?",
      answer: 6,
      tolerance: 0.001,
      unit: "años",
      explain: "2003 − 1997 = 6 años. En ese tiempo la industria planteó que algunas lecturas de Part 11 frenaban la tecnología, y la guía respondió con una interpretación estrecha.",
    },
    {
      kind: "choice",
      q: "En noviembre de 2026 un compañero dice que el borrador del anexo 11 de 2025 ya es obligatorio porque es más moderno. ¿Qué es correcto?",
      options: [
        "Tiene razón: un borrador entra en vigor al cerrar su consulta",
        "No: EudraLex sigue mostrando vigente la revisión de enero de 2011",
        "Tiene razón: los borradores de PIC/S obligan en toda Europa",
        "No: el anexo 11 se derogó y ahora solo vale la guía de la MHRA",
      ],
      answer: 1,
      explain: "A 21 de noviembre de 2026 la página de EudraLex lista el anexo 11 de enero de 2011 y no publica el anexo 22. Un borrador no obliga; una empresa puede adelantar controles por decisión propia y control de cambios.",
    },
  ],
};
