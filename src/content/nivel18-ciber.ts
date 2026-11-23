import type { Lesson } from "./types";

export const ciberAFondo: Lesson = {
  slug: "ciberseguridad-ot-a-fondo",
  level: 18,
  order: 6,
  title: "Redes industriales y ciberseguridad a fondo",
  titleEn: "Industrial networks and OT cybersecurity in depth",
  minutes: 38,
  summary:
    "Por qué la red de planta no se protege igual que la de oficina, cómo se comunican de verdad sensores, controladores y pantallas, qué son las zonas, los conductos y la DMZ industrial, qué amenazas están documentadas, qué leyes se aplican en España a noviembre de 2026, qué pide el anexo 11 y qué te toca hacer a ti en el turno, incluido trabajar en modo degradado.",
  body: `
En «Redes industriales y ciberseguridad» viste lo básico; usuarios, firmas, copias y contingencia en papel están en «El sistema de control a fondo: pantallas, recetas y registro electrónico» y en «Usuarios, revisión del audit trail, copias de seguridad y archivo». Aquí vas más abajo: cómo viajan los datos por la planta, por qué son frágiles, cómo se separan las redes, qué dice la ley y qué haces tú cuando algo raro pasa en la pantalla. Muchas ideas te sonarán del desarrollo web; la diferencia es que aquí, detrás del servidor, hay un reactor con disolvente caliente.

### Lo que está en juego
El libro gratuito de Tony Kuphaldt (*Lessons in Industrial Instrumentation*) lo resume así: la diferencia principal entre un sistema de control industrial y un sistema informático de oficina es que el primero **maneja procesos físicos reales**; el segundo maneja información. Una válvula que se abre cuando no debe puede ser un accidente.

En una planta de principios activos hay además un segundo riesgo: los **datos GMP**. Si un ataque borra, cifra o cambia registros de lote, ya no se puede demostrar cómo se fabricó ese lote. Un caso real y documentado: la Agencia Europea de Medicamentos (*European Medicines Agency*, EMA) sufrió un ciberataque en 2020. En su nota del 25 de enero de 2021 explicó que parte de los documentos robados se publicaron en internet **manipulados**: correos auténticos, pero seleccionados, mezclados y con títulos añadidos por los atacantes. El atacante no solo roba: también puede alterar datos.

### TI y TO: dos mundos con prioridades distintas
**TI** es la tecnología de la información (*Information Technology*, IT): ordenadores de oficina, correo, ERP. **TO** es la tecnología de operación (*Operational Technology*, OT): controladores (PLC y DCS), pantallas de operador (HMI, *Human-Machine Interface*), redes de planta.

En seguridad informática se habla de tres propiedades: **confidencialidad** (que solo lo vea quien debe), **integridad** (que no se altere) y **disponibilidad** (que funcione cuando se necesita). En la oficina se suele poner primero la confidencialidad. En planta el orden se da la vuelta: lo primero es que el control **siga funcionando** y que lo que mide y manda **sea verdad**, y por encima de todo está la seguridad de las personas. Reiniciar un portátil para un parche cuesta unos minutos; reiniciar el controlador de un reactor en plena adición deja el proceso sin control.

| Aspecto | Oficina (TI) | Planta (TO) |
|---|---|---|
| Qué protege sobre todo | Los datos y su confidencialidad | Que el proceso siga bajo control y sea seguro |
| Vida de los equipos | Pocos años | Hardware con soporte de décadas, sobre sistemas operativos que caducan mucho antes |
| Parches | Automáticos y frecuentes | Se prueban antes y pasan por control de cambios; a veces no existen |
| Reiniciar | Molesto | Puede exigir parar la planta |
| Cortafuegos | Deja pasar casi todo y bloquea lo malo conocido | Bloquea todo y deja pasar solo lo imprescindible |
| Cambios | Los hace informática | Equipo validado: cada cambio documentado y probado |

Kuphaldt explica la vida útil: mucho software de control funciona sobre sistemas operativos de consumo, que se abandonan mucho antes de lo que la industria renueva su control; actualizarlos suele obligar a interrumpir el control, y a veces es imposible. En GMP, además, un parche es un cambio en un sistema validado: ICH Q7 (5.47) pide que se autorice, documente y pruebe. Y la guía de integridad de datos de PIC/S (PI 041-1, 1 de julio de 2021) pide **aislar** todo lo posible los servidores con sistemas operativos sin soporte.

### Las redes industriales, explicadas a alguien que sabe TCP/IP
**Primero, cables con corriente.** Durante décadas cada instrumento tenía su propio par de cables y mandaba su medida como una corriente de 4 a 20 mA (lo viste en «SCADA, historiador y datos de proceso»). Un cable, un dato.

**Después, los buses de campo** (*fieldbus*). Redes digitales en las que muchos instrumentos comparten un cable (*multi-drop*) y hablan por turnos, enviando además diagnósticos y alarmas. Se ahorra cable, pero Kuphaldt señala la otra cara: un fallo en ese cable puede dejar sin control ni medida a **todos** sus equipos a la vez.

**Hoy, Ethernet industrial.** Es la Ethernet que conoces (norma IEEE 802.3), con IP, TCP y UDP. Los protocolos industriales viajan como un mensaje más dentro de TCP/IP: piensa en ellos como en el HTTP de los equipos de planta. Kuphaldt añade que muchos equipos usan UDP porque es más sencillo de programar en el procesador limitado de un PLC.

**El problema de fondo: protocolos que obedecen a quien les hable.** Muchos protocolos industriales nacieron cuando la red de planta era un cable cerrado. Kuphaldt describe uno de los más veteranos, creado en 1979 y todavía muy usado: un mensaje lleva la dirección del equipo destino, un código numérico de orden (leer un valor, escribir un bit, escribir un número) y los datos. El equipo está programado para entender esos códigos y responder cuando los recibe. En su forma básica no hay contraseña ni nada que diga quién envía la orden. Además, admite una dirección especial, la 0, que llega a todos los equipos del cable a la vez.

Traducido a tu mundo: es una API interna con un endpoint de escritura **sin autenticación**. Si alguien no autorizado llega a esa red, el equipo no distingue su orden de la del sistema de control. Por eso en planta la seguridad no puede descansar en el protocolo: descansa en **quién puede llegar a la red**.

### Separar redes: del aislamiento total a la DMZ
**Aislamiento físico** (*air gap*). La red de control no tiene ningún cable hacia otra red. Kuphaldt recomienda usarlo siempre que se pueda, pero avisa de que no es invencible: un controlador puede infectarse por una memoria USB conectada a la estación de ingeniería. El aislamiento tiene que incluir también los dispositivos portátiles y el acceso físico a cables y armarios.

**Cortafuegos** (*firewall*). Cuando sí hace falta pasar datos, se pone un cortafuegos que filtra según una lista de reglas (*Access Control List*, ACL). Kuphaldt lo describe así: cada red a un lado del cortafuegos es una **zona** de comunicación y el cortafuegos es un **conducto** entre zonas que solo deja pasar ciertos mensajes. Y marca una diferencia clave: en oficina se suele usar **lista negra** (*blacklist*: todo pasa menos lo prohibido); en control se suele usar **lista blanca** (*whitelist*: nada pasa salvo lo expresamente permitido), porque el tráfico legítimo de planta es poco y siempre entre los mismos equipos. Es la idea de «denegar por defecto» que conoces de los grupos de seguridad de un servidor en la nube.

**DMZ industrial** (*demilitarized zone*). Es una red intermedia, entre dos cortafuegos, donde están los servidores por los que pasa todo intercambio. Su objetivo es que **ningún tráfico pase directo** de una red a otra: todo pasa por un servidor de la DMZ, que solo hace lo justo. El ejemplo típico es el historiador: lee los controladores y sirve los datos a la oficina, así que nadie de la oficina necesita hablar con un PLC. Si te ayuda: es un proxy inverso con una sola función. Para atacar la red de control, primero habría que comprometer el servidor de la DMZ: una capa más.

**Diodo de datos** (*data diode*). Solo deja pasar datos en un sentido: desde fuera se lee, pero no se escribe.

**Y la norma ISA/IEC 62443.** Es la serie internacional de normas de ciberseguridad para automatización industrial. Es **de pago** y no la hemos leído: aquí las zonas, los conductos y la DMZ se explican como lo hace un texto gratuito (Kuphaldt) y como lo piden los textos GMP. El diseño concreto de tu planta lo deciden ingeniería y sistemas.

El borrador de 2025 del anexo 11 pide justo esto: redes segmentadas, cortafuegos tan estrictos como sea posible y revisión periódica de sus reglas, porque con el tiempo se abren puertos que nadie cierra.

### Amenazas reales y documentadas
**Programas de secuestro** (*ransomware*). Cifra datos y sistemas y pide un rescate. La Directiva europea NIS2 (considerando 54) habla de un aumento exponencial de estos ataques en la Unión. El caso NotPetya, de junio de 2017, enseña otra cosa: según el Gobierno británico, se disfrazó de operación criminal, pero su objetivo principal era causar daño y desorganizar; por su diseño indiscriminado se extendió más allá de sus objetivos en Ucrania y afectó a empresas de toda Europa, con costes de cientos de millones de libras. No hace falta ser el objetivo para ser la víctima.

**Memorias USB y dispositivos personales.** El caso más estudiado de ataque a controladores, Stuxnet, iba contra los PLC que controlaban centrífugas de enriquecimiento de uranio. Según Kuphaldt, su primera versión probablemente entró por una memoria USB, saltándose el aislamiento de la red, y el código alterado manipulaba velocidades y válvulas mientras a los operadores las lecturas **les parecían normales**. PIC/S PI 041-1 (apartado 9.5) añade un riesgo menos conocido: hay dispositivos USB que engañan al ordenador haciéndose pasar por otro aparato, por ejemplo un teclado, y pueden arrancar programas. Por eso pide controlar los dispositivos USB privados (memorias, cámaras, móviles, teclados) en los equipos con datos GMP.

**Accesos remotos de proveedores.** El fabricante del equipo a menudo necesita entrar a distancia para diagnosticar. PIC/S señala como punto a vigilar las actualizaciones remotas que hace el proveedor por la red, y pide autenticación adicional (por ejemplo, un código de un token) para entrar desde internet a sistemas con datos críticos. NIS2, en su artículo 21, incluye la seguridad de la cadena de suministro entre las medidas mínimas. En la práctica, el acceso del proveedor está autorizado, limitado en el tiempo, vigilado y registrado.

**Phishing** (*phishing*). Un mensaje extraño o anónimo para que reveles información o descargues un archivo infectado. Su variante dirigida (*spear phishing*) parece venir de alguien de confianza, como un compañero. El borrador del anexo 11 pide formación periódica en ciberseguridad y medir su eficacia, por ejemplo con **pruebas simuladas**: no te extrañe recibir un correo falso de tu propia empresa para ver si lo reportas.

**Las personas de dentro y los descuidos.** Kuphaldt incluye a empleados descontentos o que ya se han ido y cuyas cuentas siguen abiertas, las contraseñas compartidas, las contraseñas de fábrica que nunca se cambiaron y los accesos «de atajo» que dejan los programadores.

### El marco legal en España, a noviembre de 2026
Lo gestionan la dirección y sistemas, pero conviene que sepas por qué tu empresa se lo toma en serio. Comprobado en el BOE el 21 de noviembre de 2026:

| Norma | Qué es | Estado |
|---|---|---|
| Ley 8/2011, de protección de las infraestructuras críticas | Sus sectores estratégicos incluyen la **industria química** y la **salud**. Un operador designado como crítico debe tener, entre otras cosas, un plan de seguridad del operador y un responsable de seguridad y enlace | Vigente |
| Real Decreto-ley 12/2018, de seguridad de las redes y sistemas de información | Traspuso la primera directiva europea (2016/1148). Se aplica a los operadores de servicios esenciales de esos sectores y a ciertos servicios digitales. Para entidades privadas, el equipo de respuesta de referencia es el INCIBE-CERT | Vigente |
| Real Decreto 43/2021 | Lo desarrolla: responsable de la seguridad de la información y notificación de incidentes | Vigente |
| Directiva (UE) 2022/2555, NIS2 | Sustituye a la de 2016. Su anexo I (sectores de alta criticidad) incluye en el sector sanitario a las entidades que fabrican productos farmacéuticos de base y especialidades farmacéuticas (NACE Rev. 2, división 21), en general desde el tamaño de mediana empresa | Los Estados debían trasponerla antes del 17 de octubre de 2024. En el BOE no aparece todavía ninguna ley española que la trasponga |

- **Que tu empresa sea «operador crítico» u «operador de servicios esenciales» no se deduce del sector**: lo decide la Administración, y la Ley 8/2011 (artículo 15) pide confidencialidad sobre la información de las infraestructuras estratégicas. No lo supongas.
- **NIS2 todavía no es ley española**. Una directiva obliga a los Estados a aprobar su propia ley; mientras, rigen el Real Decreto-ley 12/2018 y el Real Decreto 43/2021. Aun así, NIS2 marca el camino: su artículo 21 pide, entre otras medidas, gestión de incidentes, continuidad y copias de seguridad, seguridad de la cadena de suministro, «ciberhigiene» básica y formación, control de accesos y autenticación multifactor cuando proceda. Su artículo 23 fija los plazos de notificación de un incidente significativo: una **alerta temprana en 24 horas**, una **notificación en 72 horas** y un **informe final como muy tarde un mes** después de la notificación.

### Lo que pide la normativa GMP
La ciberseguridad también es GMP, porque protege los datos con los que se libera un lote.

- **Anexo 11, apartado 12 (seguridad)**, versión vigente de 2011. Pide controles físicos o lógicos para que solo las personas autorizadas accedan al sistema, como llaves, tarjetas, códigos personales con contraseña o biometría (12.1); que el nivel de control dependa de lo crítico que sea el sistema (12.2); que quede registro de cuándo se crea, cambia o anula una autorización de acceso (12.3); y que el sistema registre la identidad de quien introduce, cambia, confirma o borra datos, con fecha y hora (12.4).
- **Anexo 11, otros apartados**: datos protegidos física y electrónicamente contra daños, y copias de seguridad periódicas cuya restauración se comprueba (7); toda incidencia se comunica y se evalúa, y la causa de las críticas se investiga (13); y plan de continuidad con un sistema manual o alternativo, documentado y probado (16).
- **ICH Q7**: controles contra el acceso no autorizado o los cambios de datos (5.43), registrar e investigar las incidencias informáticas que puedan afectar a la calidad o a los registros (5.46) y un respaldo si una avería puede hacer perder registros (5.48).
- **PIC/S PI 041-1 (9.5)**: usuarios individuales sin contraseñas compartidas, cierre por inactividad, cortafuegos con reglas mínimas y revisadas, y control de los USB.

**El borrador de 2025.** El 7 de julio de 2025 la Comisión Europea publicó para consulta una revisión del anexo 11; la consulta cerró el 7 de octubre de 2025. A 21 de noviembre de 2026 la página oficial de EudraLex sigue mostrando como vigente la revisión de enero de 2011, así que el borrador **no es obligatorio todavía**. Su apartado 15 es mucho más detallado: redes segmentadas, sistemas sin soporte aislados, parches a tiempo, puertos USB desactivados por defecto en servidores y ordenadores críticos salvo teclado o ratón, nada de dispositivos usados fuera de la empresa sin escanear, plan de recuperación probado y conexiones remotas cifradas. Su apartado 11 añade autenticación multifactor para entrar desde fuera y bloqueo tras varios intentos fallidos.

### Lo que te toca a ti en el turno
Casi todas las medidas las ponen ingeniería y sistemas, pero la última barrera eres tú.

**Siempre:**
- **Nada de USB, móviles ni portátiles** en un equipo de control, ni para cargar el móvil. Ni tuyos ni de una visita.
- **Tu usuario es solo tuyo.** No lo prestes ni uses el de otro.
- **No dejes sesiones abiertas.** Bloquea o cierra al levantarte, aunque haya cierre automático.
- **No dejes conectar a nadie por su cuenta.** Un técnico externo trabaja solo con autorización, por la vía prevista y con supervisión.
- **Reporta los correos sospechosos** por el canal que diga tu empresa. Y si ya hiciste clic, dilo enseguida: avisar pronto vale más que la vergüenza.

**Señales de que algo raro pasa en la pantalla:**

| Lo que ves | Por qué es sospechoso |
|---|---|
| El cursor se mueve solo, se abren ventanas que nadie ha pedido | Alguien o algo puede estar manejando el equipo |
| Una consigna, un modo o una válvula cambian sin orden de nadie del turno | El registro de eventos mostrará un usuario o un origen que no cuadran |
| Mensajes de rescate, archivos que no se abren, pantallas en negro | Señal típica de ransomware |
| Te pide la contraseña de forma inesperada, o aparece conectado un usuario que no está en la sala | Posible robo de credenciales |
| Fallos de comunicación en muchos equipos a la vez, lentitud anormal | Puede ser una avería de red o un ataque: no lo decides tú |
| La pantalla dice que todo va bien, pero el campo dice otra cosa (un manómetro o un indicador local, un ruido, una mirilla) | Las lecturas pueden estar falseadas o congeladas |

**Qué haces:**
1. **No toques más de lo necesario** ni reinicies, apagues o desconectes nada por tu cuenta, salvo que el procedimiento lo diga.
2. **Lleva el proceso a condición segura según el procedimiento.** El sistema instrumentado de seguridad sigue ahí: Kuphaldt recuerda que debe ir en una plataforma independiente del control normal.
3. **Anota la hora** y lo que viste, con el reloj que diga el procedimiento.
4. **Avisa de inmediato** al jefe de turno y al responsable de sistemas de planta por el contacto que fije tu empresa. El anexo 11 (13) pide que toda incidencia se comunique y se evalúe.

### Trabajar en modo degradado
Kuphaldt pide que todo plan de respuesta a ciberataques incluya una cadena de mando, cómo restaurar los sistemas y **formas de seguir operando al mínimo** mientras no están disponibles; el anexo 11 (16) lo pide documentado y probado. Para ti significa:
- Seguir **solo** el procedimiento de contingencia: qué equipos pueden seguir en marcha, cuáles se paran, qué operaciones se suspenden.
- Registrar en las **hojas de contingencia en papel** preaprobadas, con hora de inicio y fin del modo degradado. No reconstruyas datos de memoria.
- Comprobar las lecturas importantes con los **indicadores locales** de campo cuando el procedimiento lo pida.
- No reanudar hasta que lo autoricen: sistemas comprueba los equipos y calidad evalúa los datos afectados.

Los nombres de equipos y los ejemplos de esta lección son ficticios. En planta manda siempre el procedimiento vigente (SOP).
`,
  plant: `
Turno de noche. La centrífuga ficticia **CF-220** está en el paso de lavado del lote 26-1187 del intermedio ficticio **INT-48**, controlada desde la estación de operador HMI-03.

A las 02:14 ves que la consigna de velocidad de la CF-220 ha pasado de 900 a 1200 rpm (valores de ejemplo) sin que nadie del turno la haya tocado. En el registro de eventos el cambio aparece con el usuario «ingenieria01», y nadie de ingeniería está en planta. Un minuto después se abre sola una ventana de diagnóstico.

No intentas «arreglarlo» desde la pantalla ni reinicias la estación. Aplicas el procedimiento de incidencia del sistema de control: con la jefa de turno, la centrífuga se lleva a parada segura desde el mando local de campo, como indica el SOP. Anotas la hora, lo que viste y el usuario que aparecía. La jefa de turno avisa al responsable de sistemas de planta por el teléfono de guardia.

Sistemas desconecta de forma controlada el enlace con la DMZ y confirma que la cuenta «ingenieria01» había quedado autorizada para un acceso remoto del proveedor que debía haberse cerrado la semana anterior. Se activa el modo degradado: el resto de la sala sigue con las hojas de contingencia en papel y el lote queda en espera. Se abren una incidencia informática y una desviación, y calidad evalúa qué datos del lote pueden estar afectados.
`,
  batchRecord: `
- La ciberseguridad no es un paso del lote, pero sus efectos sí se registran.
- Si hubo modo degradado: hora de inicio y fin, hojas de contingencia en papel adjuntas y firmadas, y referencia de la incidencia informática.
- Cualquier cambio de consigna, de modo o de receta que nadie del turno haya hecho: anotado como comentario con la hora y comunicado; quedará como desviación.
- Comprobaciones con indicadores locales hechas durante la contingencia, con su valor y hora.
- Referencia de la desviación abierta y de la evaluación de calidad sobre los datos del lote afectados.
- Nunca en la hoja: contraseñas, direcciones de red ni detalles de la incidencia que no pida el procedimiento.
`,
  terms: [
    { es: "Tecnología de operación", en: "Operational Technology (OT)", def: "Equipos y redes que controlan el proceso físico: controladores, pantallas de operador, buses de campo." },
    { es: "Bus de campo", en: "Fieldbus", def: "Red digital por la que varios instrumentos comparten un mismo cable y hablan por turnos con el sistema de control." },
    { es: "Ethernet industrial", en: "Industrial Ethernet", def: "Ethernet con TCP/IP usada en la red de control, por la que viajan los protocolos industriales como un mensaje más." },
    { es: "Aislamiento físico", en: "Air gap", def: "Separación sin ninguna conexión entre la red de control y cualquier otra red; no protege de USB ni de portátiles." },
    { es: "Cortafuegos", en: "Firewall", def: "Equipo o programa que deja pasar o bloquea mensajes entre redes según una lista de reglas." },
    { es: "Lista blanca", en: "Whitelist", def: "Política que bloquea todo salvo lo expresamente permitido; la habitual en redes de control." },
    { es: "Zona y conducto", en: "Zone and conduit", def: "Una zona es un grupo de equipos en la misma red protegida; un conducto es el paso controlado entre zonas." },
    { es: "Zona desmilitarizada industrial", en: "Industrial DMZ", def: "Red intermedia entre dos cortafuegos, con los servidores por los que pasa todo intercambio entre la red de oficina y la de control." },
    { es: "Diodo de datos", en: "Data diode", def: "Dispositivo que solo permite enviar datos en un sentido: desde fuera se puede leer, pero no escribir." },
    { es: "Programa de secuestro", en: "Ransomware", def: "Programa malicioso que cifra datos y sistemas y pide un rescate para liberarlos." },
    { es: "Suplantación dirigida", en: "Spear phishing", def: "Engaño que parece venir de alguien de confianza para que reveles datos o abras un archivo infectado." },
    { es: "Autenticación multifactor", en: "Multi-factor authentication (MFA)", def: "Entrada que exige dos pruebas distintas, por ejemplo contraseña y un código de un token." },
    { es: "Operador de servicios esenciales", en: "Operator of essential services", def: "Entidad designada por la Administración que presta un servicio esencial dependiente de redes; tiene obligaciones del Real Decreto-ley 12/2018." },
    { es: "Modo degradado", en: "Degraded mode", def: "Forma de seguir operando al mínimo, según un procedimiento de contingencia, mientras un sistema crítico no está disponible." },
  ],
  quiz: [
    {
      kind: "choice",
      q: "¿Por qué en planta no se instalan los parches de seguridad de forma automática, como en la oficina?",
      options: [
        "Porque los equipos de planta nunca tienen fallos de seguridad",
        "Porque está prohibido por la Ley 8/2011 de infraestructuras críticas",
        "Porque reiniciar puede parar el proceso y todo cambio validado se prueba antes",
        "Porque los parches solo sirven para ordenadores con conexión a internet",
      ],
      answer: 2,
      explain: "Reiniciar un controlador puede dejar el proceso sin control, y ICH Q7 (5.47) pide que todo cambio en un sistema informatizado se autorice, documente y pruebe. Por eso los parches se prueban antes y pasan por control de cambios.",
    },
    {
      kind: "choice",
      q: "Un protocolo industrial veterano ejecuta cualquier orden bien formada que le llega con su dirección, sin contraseña. ¿Qué consecuencia tiene para la seguridad?",
      options: [
        "La seguridad depende de impedir que alguien no autorizado llegue a esa red",
        "Ninguna, porque los mensajes industriales viajan siempre cifrados",
        "Que basta con cambiar la contraseña del PLC cada mes para estar seguros",
        "Que solo puede atacarse desde dentro de la sala de control",
      ],
      answer: 0,
      explain: "Si el protocolo no comprueba quién manda, el equipo no distingue una orden legítima de una ajena. Por eso la defensa está en segmentar y controlar quién llega a la red de control.",
    },
    {
      kind: "choice",
      q: "¿Qué hace una DMZ industrial con el historiador de planta?",
      options: [
        "Lo conecta directamente a internet para que la oficina vea los datos",
        "Lo pone entre dos cortafuegos: la oficina lee sus datos sin tocar los PLC",
        "Lo sustituye por una copia en Excel para que nadie entre en la red",
        "Lo apaga por la noche para que no pueda ser atacado",
      ],
      answer: 1,
      explain: "La DMZ obliga a que todo pase por un servidor intermedio entre dos cortafuegos; la oficina consulta al historiador, y nadie de la oficina necesita llegar a los controladores.",
    },
    {
      kind: "choice",
      q: "Un técnico del proveedor llega a planta y quiere conectar su portátil al armario del PLC «como hace siempre». No te consta ningún permiso. ¿Qué haces?",
      options: [
        "Le dejo conectar si me enseña su tarjeta de la empresa proveedora",
        "Le dejo conectar pero me quedo mirando lo que hace",
        "Le presto mi usuario de la HMI para que no tenga que conectar nada",
        "No le dejo conectar y aviso al jefe de turno para que siga el procedimiento",
      ],
      answer: 3,
      explain: "Los portátiles ajenos no se conectan a la red de control. El acceso del proveedor se autoriza, se limita y se registra según procedimiento; tú no lo permites ni prestas tu usuario.",
    },
    {
      kind: "choice",
      q: "A las 03:10 ves que la consigna de temperatura del reactor ha cambiado y el registro muestra un usuario que no está en planta. ¿Qué es lo correcto?",
      options: [
        "Reiniciar la estación de operador para cortar la conexión del intruso",
        "Asegurar el proceso según SOP, anotar la hora y avisar de inmediato",
        "Devolver la consigna a su valor y no contarlo para no parar el lote",
        "Desenchufar el cable de red del controlador del reactor",
      ],
      answer: 1,
      explain: "Tú no investigas ni reinicias por tu cuenta: aseguras el proceso según el procedimiento, registras lo que viste y avisas al jefe de turno y a sistemas. El anexo 11 (13) pide comunicar y evaluar toda incidencia.",
    },
    {
      kind: "choice",
      q: "A noviembre de 2026, ¿qué normas españolas regulan la seguridad de redes y sistemas de los operadores de servicios esenciales?",
      options: [
        "Solo la Directiva NIS2, que se aplica directamente a todas las empresas",
        "Ninguna, porque NIS2 derogó todas las normas anteriores",
        "El Real Decreto-ley 12/2018 y el Real Decreto 43/2021, que siguen vigentes",
        "Únicamente el anexo 11 de las normas GMP europeas",
      ],
      answer: 2,
      explain: "Una directiva necesita una ley nacional que la trasponga, y en el BOE no aparece todavía la de NIS2. Siguen vigentes el Real Decreto-ley 12/2018 y su desarrollo, el Real Decreto 43/2021.",
    },
    {
      kind: "number",
      q: "Una contraseña de n caracteres elegidos entre C posibles admite S = C^n combinaciones. Con C = 62 (mayúsculas, minúsculas y cifras), ¿cuántas veces más combinaciones tiene una contraseña de 10 caracteres que una de 8?",
      answer: 3844,
      tolerance: 0.01,
      unit: "veces",
      explain: "S10 / S8 = 62^10 / 62^8 = 62^2 = 3844 veces más combinaciones. Dos caracteres más multiplican mucho el trabajo de quien intenta adivinarla.",
    },
    {
      kind: "number",
      q: "Según el artículo 23 de la Directiva NIS2, ¿cuántas horas como máximo pueden pasar desde que se tiene constancia de un incidente significativo hasta la notificación del incidente (no la alerta temprana)?",
      answer: 72,
      tolerance: 0.01,
      unit: "h",
      explain: "NIS2 fija una alerta temprana en 24 horas y la notificación del incidente en 72 horas, y un informe final como muy tarde un mes después de esa notificación.",
    },
    {
      kind: "number",
      q: "Valor de ejemplo: el servidor de recetas hace una copia de seguridad cada 4 horas. La última se hizo a las 12:00 y un ransomware cifra el servidor a las 15:30. Si se restaura esa copia, ¿cuántas horas de cambios se pierden como máximo?",
      answer: 3.5,
      tolerance: 0.01,
      unit: "h",
      explain: "De las 12:00 a las 15:30 hay 3,5 horas: todo lo cambiado en ese tiempo no está en la copia. Por eso la frecuencia de las copias se decide según el riesgo.",
    },
    {
      kind: "number",
      q: "Valor de ejemplo: en una zona de control hay 3 estaciones de operador que deben hablar con 4 controladores, y nada más. Con lista blanca, si cada pareja estación-controlador necesita una regla, ¿cuántas reglas de permiso hacen falta?",
      answer: 12,
      tolerance: 0.01,
      unit: "reglas",
      explain: "3 estaciones × 4 controladores = 12 reglas de permiso. Todo lo demás queda bloqueado por defecto, que es la idea de la lista blanca.",
    },
  ],
};
