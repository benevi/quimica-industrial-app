import type { Lesson } from "./types";
import { maestrosAFondo } from "./nivel18-maestros";
import { mapaAFondo } from "./nivel18-mapa";
import { ciberAFondo } from "./nivel18-ciber";

/** Nivel 18. Arquitectura de sistemas GMP: el mapa, los datos y la ciberseguridad. */
const sistemas: Lesson[] = [
  {
    slug: "sistemas-isa-95",
    level: 18,
    order: 1,
    title: "El mapa de sistemas: de los sensores al ERP",
    titleEn: "The plant systems map (ISA-95 / Purdue model)",
    minutes: 15,
    summary: "Qué programas hay en una planta de API, en qué capa vive cada uno y qué datos se pasan entre ellos.",
    body: `
En una planta GMP no hay "un programa": hay una **cadena de sistemas**, cada uno con su trabajo. Para ordenarlos se usa la norma **ISA-95** (internacional: **IEC 62264**), que los coloca en **niveles**, desde el proceso físico hasta el negocio.

### Los niveles de ISA-95

| Nivel | Qué hay | Ejemplos | Ritmo de los datos |
|---|---|---|---|
| **4. Negocio y logística** | Planificación, compras, stock, ventas | **ERP** (planificación de recursos empresariales, *Enterprise Resource Planning*; p. ej. SAP S/4HANA) | Días, semanas |
| **3. Gestión de operaciones** | Cómo se fabrica y se analiza cada lote | **MES** (*Manufacturing Execution System*), **LIMS** (sistema del laboratorio, *Laboratory Information Management System*), historiador de planta, gestión de almacén (*Warehouse Management System*, WMS) | Turnos, horas, minutos |
| **2. Supervisión** | Ver y mandar sobre el proceso | **SCADA** (supervisión y adquisición de datos), pantallas **HMI** (*Human-Machine Interface*), estaciones del **DCS** (sistema de control distribuido) | Segundos |
| **1. Control básico** | Leer sensores y mover actuadores | **PLC** (autómata programable), controladores, tarjetas de entradas y salidas (E/S) | Milisegundos |
| **0. Proceso físico** | El reactor y sus instrumentos | Sondas de temperatura, válvulas, bombas | Tiempo real |

El **modelo Purdue** es la misma idea aplicada a redes y ciberseguridad (lo verás en la lección de ciberseguridad).

### IT y OT: dos mundos
- **IT** (*Information Technology*): niveles 3–4. Servidores, bases de datos, aplicaciones web. Lo primero es la **confidencialidad** de los datos.
- **OT** (*Operational Technology*): niveles 0–2. Equipos que mueven el proceso en tiempo real. Lo primero es la **disponibilidad** y la **seguridad de las personas**: un PLC no se puede reiniciar "para instalar una actualización" con el reactor a 80 °C.

### Cómo viaja un lote por los sistemas
1. El **ERP** crea la **orden de proceso**: qué producto, cuántos kg, con qué materiales.
2. El **MES** la recibe y la convierte en instrucciones paso a paso (la hoja de producción electrónica).
3. El **DCS/PLC** ejecuta la receta: abre válvulas, calienta, dosifica.
4. Los sensores mandan las medidas al **historiador**; el MES recoge las que necesita el registro del lote.
5. El **LIMS** gestiona las muestras de control y sus resultados.
6. Al final, el MES informa al ERP de **consumos** y **producto obtenido**, y el LIMS de la **decisión de calidad**, que cambia el estado del lote en el ERP.

### Otros sistemas que también son GMP
- **eQMS** (*electronic Quality Management System*): desviaciones, CAPA, control de cambios, reclamaciones.
- **Gestor documental** (*DMS, Document Management System*): procedimientos (SOP) y su versión vigente.
- **GMAO** (*CMMS, Computerized Maintenance Management System*): mantenimiento y calibraciones.
- **Sistema de datos cromatográficos** (*CDS*): los datos crudos del HPLC.

Un sistema es **GMP** (o *GxP*) si crea, guarda o procesa datos que sirven para decidir sobre la calidad del producto. Si lo es, tiene que estar **validado**: en principios activos lo exige la parte II de las GMP europeas (ICH Q7, apartado 5.40), y el **Anexo 11** sirve de referencia europea para hacerlo.

### El "sistema de registro"
Para cada dato hay que saber **dónde vive el original** (*system of record*). Si el peso de una carga lo registra la báscula y pasa al MES, el registro GMP es el del MES. Una copia en Excel nunca es el original.
`,
    plant: `
Lote 26-0412 del intermedio ficticio **INT-12**. A las 7:00 el ERP libera la orden de proceso 1000231. En la tableta del MES aparece el paso "Cargar 180,0 kg de tolueno". El DCS abre la válvula de dosificación y el caudalímetro totaliza 180,2 kg; el historiador guarda la curva de caudal y el MES registra el total. A media mañana tomas el IPC: el LIMS imprime la etiqueta. Cuando calidad toma la decisión de empleo, el lote pasa en el ERP de **"en control de calidad"** a **"libre utilización"**.

Cinco sistemas distintos han tocado el mismo lote, y todos dejan rastro.
`,
    batchRecord: `
- Número de **orden de proceso** del ERP en la cabecera.
- Datos que llegan **automáticamente** de equipos (pesos, temperaturas): llevan una marca que indica su origen.
- Número de muestra del LIMS en cada IPC.
- Referencias a desviaciones abiertas en el eQMS, si las hay.
`,
    terms: [
      { es: "ISA-95", en: "ISA-95 / IEC 62264", def: "Norma que ordena los sistemas de una fábrica en niveles, del proceso físico al ERP." },
      { es: "Modelo Purdue", en: "Purdue model", def: "Modelo de referencia de capas de red industrial, usado para separar IT y OT." },
      { es: "Tecnología de operación", en: "Operational Technology (OT)", def: "Sistemas que controlan el proceso físico en tiempo real: PLC, DCS, SCADA." },
      { es: "Sistema de gestión de calidad electrónico", en: "eQMS", def: "Software para desviaciones, CAPA, control de cambios y reclamaciones." },
      { es: "Gestión de mantenimiento asistida por ordenador", en: "CMMS (GMAO)", def: "Sistema que planifica y registra el mantenimiento y las calibraciones." },
      { es: "Sistema de registro", en: "System of record", def: "El sistema donde vive el dato original con su audit trail." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "¿En qué nivel de ISA-95 está el MES?",
        options: ["Nivel 1", "Nivel 2", "Nivel 3", "Nivel 4"],
        answer: 2,
        explain: "El MES gestiona las operaciones de fabricación (nivel 3), entre el ERP (nivel 4) y el control de planta (niveles 1–2).",
      },
      {
        kind: "choice",
        q: "¿Qué prioriza la OT frente a la IT?",
        options: [
          "La confidencialidad de los datos",
          "La disponibilidad y la seguridad del proceso",
          "La velocidad de internet",
          "El diseño de las pantallas",
        ],
        answer: 1,
        explain: "En planta, parar o reiniciar un controlador puede ser peligroso; la prioridad es que el proceso siga funcionando con seguridad.",
      },
      {
        kind: "choice",
        q: "El peso de una carga lo envía la báscula al MES y alguien lo copia también en un Excel. ¿Cuál es el dato original?",
        options: ["El del Excel", "El del MES", "Los dos por igual", "Ninguno"],
        answer: 1,
        explain: "El sistema de registro es el MES, que lo recibe directamente con su audit trail. El Excel es una copia no controlada.",
      },
      {
        kind: "choice",
        q: "¿Qué sistema cambia el estado del lote a «libre utilización» cuando calidad lo aprueba?",
        options: ["El PLC", "El historiador", "El ERP, a partir de la decisión registrada", "La HMI"],
        answer: 2,
        explain: "El ERP guarda el estado de stock de cada lote; la decisión de calidad (desde el LIMS o el módulo QM) lo cambia.",
      },
    ],
  },
  {
    slug: "datos-maestros-e-integracion",
    level: 18,
    order: 3,
    title: "Datos maestros, bases de datos e interfaces",
    titleEn: "Master data, databases and interfaces",
    minutes: 18,
    summary: "Por qué un dato maestro mal puesto estropea todos los lotes, cómo guardan los datos los sistemas y cómo se los pasan.",
    body: `
### Datos maestros y datos de transacción
- **Datos maestros** (*master data*): se definen una vez y se usan en cada lote. Código y descripción del material, unidad, periodo de reanálisis, receta maestra, especificaciones del LIMS, usuarios y perfiles.
- **Datos de transacción** (*transactional data*): se crean con cada operación. Órdenes, consumos, pesadas, resultados.

Un error en un dato de transacción afecta a **un lote**. Un error en un **dato maestro** afecta a **todos los lotes** que lo usen. Por eso los datos maestros GMP se cambian con **control de cambios** y con **verificación por una segunda persona** (*four-eyes principle*).

### Cómo guardan los datos: bases de datos relacionales
LIMS, MES y ERP guardan casi todo en **bases de datos relacionales** (Oracle, SQL Server, SAP HANA). Los datos están en **tablas** unidas por **claves**:

| Tabla | Clave primaria | Ejemplo de columnas |
|---|---|---|
| MATERIAL | codigo_material | descripcion, unidad, reanalisis_meses |
| LOTE | id_lote | codigo_material (clave ajena), fecha_fabricacion, estado |
| RESULTADO | id_resultado | id_lote (clave ajena), ensayo, valor, usuario, fecha_hora |

Una consulta para ver el agua (Karl Fischer) de un lote sería:

~~~sql
SELECT r.ensayo, r.valor, r.usuario, r.fecha_hora
FROM resultado r
WHERE r.id_lote = '26-0412' AND r.ensayo = 'KF';
~~~

**Regla de oro**: los datos GMP **solo se cambian a través de la aplicación**, que pide motivo y deja audit trail. Un *UPDATE* directo sobre la base de datos se salta todos los controles. Por eso el acceso de escritura a la base de datos está restringido a administradores, separado de los usuarios del proceso, y sus acciones también quedan registradas. Los cambios "por detrás" (*back-end changes*) son uno de los hallazgos de integridad de datos más graves en las inspecciones.

### Cómo se pasan los datos: interfaces
| Tipo | Ejemplo |
|---|---|
| **Fichero** | Un CSV que el instrumento deja en una carpeta y el LIMS recoge |
| **Mensajes / servicios web** | APIs REST o SOAP; en SAP, los mensajes **IDoc** |
| **OPC UA** | Estándar industrial (IEC 62541) para leer datos de PLC y SCADA |
| **Middleware** | Una capa intermedia que traduce y enruta mensajes |

El Anexo 11 (apartado 5) pide que los sistemas que intercambian datos tengan **comprobaciones integradas** para que la entrada y el procesado sean correctos y seguros. En la práctica, una interfaz validada demuestra que:
- El dato llega **completo** y **sin alterar** (mismos decimales, misma unidad).
- Si algo falla, **no se pierde en silencio**: hay cola de errores, aviso y reproceso.
- Se puede **conciliar**: lo que salió de un sistema coincide con lo que entró en el otro.

### Trampas clásicas
- **Separador decimal**: "1,500" en España es uno y medio; en inglés, mil quinientos. Un CSV mal interpretado multiplica una carga por mil.
- **Unidades**: g frente a kg, % frente a fracción.
- **Hora**: un sistema en UTC y otro en hora local, o el cambio de horario de verano, desordenan los registros. Todos los relojes GMP se **sincronizan** con un servidor de hora (*NTP*) y no los cambia el usuario.
`,
    plant: `
En el maestro de materiales alguien dio de alta el disolvente ficticio **SOL-07** con periodo de reanálisis de **36 meses** en vez de **12**. Durante meses, el ERP dejó usar bidones que deberían haberse reanalizado. Afectó a **14 lotes**. Se abrió una desviación, y la CAPA fue exigir verificación de una segunda persona en cada alta de material y revisar todos los maestros.

Un error en un solo dato, multiplicado por cada lote que lo usó.
`,
    batchRecord: `
- Los datos maestros no aparecen como tales, pero **todo lo que ves sale de ellos**: descripción del material, rangos de cada paso, límites de los IPC.
- Si un rango impreso no te cuadra con el procedimiento, **avísalo**: puede ser un error de maestro.
`,
    terms: [
      { es: "Datos maestros", en: "Master data", def: "Datos de referencia que se definen una vez y se usan en muchas operaciones: materiales, recetas, especificaciones." },
      { es: "Principio de los cuatro ojos", en: "Four-eyes principle", def: "Un cambio crítico lo hace una persona y lo verifica otra." },
      { es: "Clave primaria", en: "Primary key", def: "Columna que identifica cada fila de una tabla de forma única." },
      { es: "Interfaz", en: "Interface", def: "Conexión por la que dos sistemas intercambian datos." },
      { es: "OPC UA", en: "OPC Unified Architecture", def: "Estándar industrial de comunicación entre equipos y sistemas de planta." },
      { es: "Protocolo de hora de red", en: "Network Time Protocol (NTP)", def: "Servicio que sincroniza los relojes de todos los sistemas." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "¿Por qué un error en un dato maestro es más grave que en un dato de transacción?",
        options: [
          "Porque los maestros son más caros",
          "Porque afecta a todos los lotes que usan ese dato",
          "Porque no se puede corregir",
          "No es más grave",
        ],
        answer: 1,
        explain: "El dato maestro se reutiliza en cada operación: su error se multiplica.",
      },
      {
        kind: "choice",
        q: "Un administrador corrige un resultado con un UPDATE directo en la base de datos del LIMS. ¿Qué problema hay?",
        options: [
          "Ninguno, el valor final es correcto",
          "Se salta la aplicación: sin motivo, sin revisión y quizá sin audit trail. Es un fallo grave de integridad de datos",
          "Solo que tarda más",
          "Que no avisó al operador",
        ],
        answer: 1,
        explain: "Los datos GMP solo se cambian por la aplicación, que pide motivo y registra el cambio.",
      },
      {
        kind: "choice",
        q: "Un instrumento exporta «2,5» y el LIMS lo lee como 25. ¿Qué ha fallado?",
        options: ["El instrumento", "La interpretación del separador decimal en la interfaz", "El analista", "Nada"],
        answer: 1,
        explain: "Coma y punto decimal son una trampa clásica; la validación de la interfaz debe probarlo.",
      },
    ],
  },
  {
    slug: "ciberseguridad-ot",
    level: 18,
    order: 5,
    title: "Redes industriales y ciberseguridad",
    titleEn: "OT networks and cybersecurity (IEC 62443)",
    minutes: 15,
    summary: "Cómo se protege la red de planta, qué dice la norma IEC 62443 y qué te toca a ti como usuario.",
    body: `
Un ataque informático en una planta química no solo roba datos: puede **parar la producción**, **destruir registros GMP** o, en el peor caso, afectar al **control del proceso**. En 2017 el *ransomware* NotPetya paralizó durante semanas la fabricación de una gran farmacéutica: no iba dirigido contra ella, entró por la red y se extendió.

### Defensa en profundidad (*defense in depth*)
No hay una sola barrera, sino **capas**: si una falla, la siguiente frena el ataque.

### Segmentar la red: el modelo Purdue
La red se divide en capas, igual que ISA-95:
- **Nivel 4–5**: red corporativa (correo, ERP, internet).
- **Nivel 3,5: DMZ industrial**: zona intermedia. Ningún tráfico pasa **directo** de la red de oficina a la de planta; todo pasa por servidores intermedios (por ejemplo, una réplica del historiador o un servidor de salto).
- **Nivel 3**: MES, historiador de planta.
- **Niveles 0–2**: DCS, PLC, SCADA. **Sin acceso a internet**.

### IEC 62443: la norma de ciberseguridad industrial
- Divide la planta en **zonas** (grupos de equipos con las mismas necesidades de seguridad) unidas por **conductos** (las comunicaciones permitidas entre zonas, filtradas por cortafuegos).
- Define **niveles de seguridad** (*Security Levels*, SL 1 a 4) según lo sofisticado del atacante del que hay que protegerse.
- Reparte responsabilidades entre el propietario de la planta, el integrador y el fabricante de los equipos.

### Medidas típicas
- **Acceso remoto** de proveedores solo por un servidor de salto, con **doble factor** (*MFA*), por tiempo limitado y registrado.
- **Parches**: en OT no se instalan automáticamente. Se prueban antes, y en un sistema validado pasan por **control de cambios**.
- **Lista blanca de aplicaciones** (*application whitelisting*): en la estación solo puede ejecutarse lo autorizado.
- **Puertos USB** bloqueados en las HMI.
- **Copias de seguridad** fuera de línea, para poder recuperar tras un *ransomware*.
- **Inventario** de todos los equipos conectados.

### Normativa
- El **Anexo 11** (apartado 12, Seguridad) pide controles físicos y lógicos para que solo las personas autorizadas accedan a los sistemas y a los datos.
- La Directiva europea **NIS2** (UE 2022/2555) incluye a los fabricantes de productos farmacéuticos de base y de preparados farmacéuticos entre las entidades del sector sanitario con obligaciones de ciberseguridad.

### Lo que te toca a ti
- **Nunca** conectes un USB, un móvil (ni para cargarlo) ni un portátil a una HMI o a un equipo de planta.
- Desconfía de correos con prisa, adjuntos o enlaces raros (*phishing*) y repórtalos.
- Si una pantalla hace algo extraño (se mueve sola, pide contraseñas inesperadas, aparecen mensajes de rescate), **avisa enseguida** al supervisor y a sistemas.
`,
    plant: `
Un técnico externo llega para revisar la centrífuga y quiere conectar su portátil directamente al PLC "como siempre". El procedimiento lo impide: la conexión se hace desde la estación de ingeniería autorizada, con un permiso de trabajo, un cambio aprobado y la sesión registrada. Tú no lo dejas conectar por tu cuenta: avisas al supervisor.
`,
    batchRecord: `
- La ciberseguridad no aparece como un paso del lote, pero si un incidente informático afecta a la producción, se registra como **desviación** y se evalúa qué datos del lote pueden estar afectados.
`,
    terms: [
      { es: "Defensa en profundidad", en: "Defense in depth", def: "Proteger con varias capas de seguridad independientes." },
      { es: "Zona desmilitarizada industrial", en: "Industrial DMZ", def: "Red intermedia entre la red corporativa y la de planta; no se permite tráfico directo entre ambas." },
      { es: "Zonas y conductos", en: "Zones and conduits (IEC 62443)", def: "Grupos de equipos con la misma necesidad de seguridad y las comunicaciones permitidas entre ellos." },
      { es: "Autenticación multifactor", en: "Multi-factor authentication (MFA)", def: "Acceso que pide dos pruebas distintas, por ejemplo contraseña y código del móvil." },
      { es: "Secuestro de datos", en: "Ransomware", def: "Programa malicioso que cifra los datos y pide un rescate." },
      { es: "Suplantación por correo", en: "Phishing", def: "Engaño por correo o mensaje para robar contraseñas o instalar malware." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "¿Para qué sirve la DMZ industrial?",
        options: [
          "Para navegar más rápido",
          "Para que no haya tráfico directo entre la red de oficina y la de planta",
          "Para guardar las copias de seguridad",
          "Para dar internet a los PLC",
        ],
        answer: 1,
        explain: "Todo intercambio pasa por servidores intermedios controlados; así un ataque en la oficina no llega directo al control.",
      },
      {
        kind: "choice",
        q: "Tu móvil se queda sin batería y la HMI tiene un puerto USB. ¿Qué haces?",
        options: ["Lo cargo un rato", "No lo conecto nunca a un equipo de planta", "Lo conecto si está apagado", "Pregunto a un compañero"],
        answer: 1,
        explain: "Cualquier dispositivo USB puede introducir malware o alterar el equipo.",
      },
      {
        kind: "choice",
        q: "En IEC 62443, ¿qué es un conducto?",
        options: [
          "Una tubería de proceso",
          "Un canal de comunicación permitido y controlado entre dos zonas",
          "Un cable de alimentación",
          "Un tipo de virus",
        ],
        answer: 1,
        explain: "Las zonas agrupan equipos; los conductos son las comunicaciones permitidas entre ellas, filtradas.",
      },
    ],
  },
];

// Las lecciones «a fondo» van cada una en su archivo nivel18-tema.ts.
export const nivel18: Lesson[] = [...sistemas, maestrosAFondo, mapaAFondo, ciberAFondo];
