import type { Lesson } from "./types";

export const nivel11: Lesson[] = [
  {
    slug: "tuberias-y-valvulas",
    level: 11,
    order: 1,
    title: "Tuberías, válvulas y conexiones",
    titleEn: "Piping, valves and fittings",
    minutes: 15,
    summary: "Cómo se mueven los fluidos por la planta y qué hace cada tipo de válvula.",
    body: `
### Tuberías (*piping*)
- **Diámetro nominal** (*DN, nominal diameter*): tamaño de referencia en mm (DN25, DN50…). En planos americanos se usan pulgadas (1", 2").
- **Presión nominal** (*PN*): presión máxima de diseño a temperatura de referencia (PN10, PN16…).
- **Materiales**: acero inoxidable **AISI 316L** (el más común en farma), acero **vitrificado** (*glass-lined*) para ácidos, **Hastelloy** para corrosivos fuertes, tuberías con **revestimiento de PTFE** (*PTFE-lined*).
- **Identificación**: cada línea lleva una etiqueta o código de colores con el **fluido** y una **flecha** con el sentido del flujo. Aprende el código de tu planta.

### Conexiones
- **Bridas** (*flanges*) con **juntas** (*gaskets*): uniones desmontables. Una junta mal elegida o mal apretada es una fuga.
- **Brida ciega** (*blind flange*) y **disco ciego / figura de ocho** (*spectacle blind*): para aislar una línea de forma segura antes de un mantenimiento.
- **Mangueras** (*hoses*) y **paneles de conexión** (*transfer panels*): unen distintas líneas con codos móviles. Conectar el codo equivocado manda el producto al sitio equivocado. Por eso se comprueba y se registra.
- **Tri-clamp**: conexión sanitaria rápida, típica en zonas de producto final.

### Válvulas (*valves*)
| Válvula | En inglés | Uso típico |
|---|---|---|
| De bola | *Ball valve* | Abrir/cerrar rápido (¼ de vuelta) |
| De mariposa | *Butterfly valve* | Abrir/cerrar en diámetros grandes |
| De asiento / globo | *Globe valve* | Regular caudal |
| De diafragma | *Diaphragm valve* | Fluidos limpios o corrosivos, zona estéril |
| De retención | *Check valve* | Impide el retroceso del fluido |
| De fondo de reactor | *Bottom outlet valve* | Descargar el reactor |
| Válvula de control | *Control valve* | La mueve el sistema de control (DCS) para regular |
| Válvula de seguridad | *Safety / relief valve (PSV)* | Se abre sola si la presión supera el tarado |
| Disco de ruptura | *Rupture disc* | Se rompe a una presión fija; protege el equipo |

### Válvulas manuales y automáticas: abrir y cerrar
- **Manual**: la mueve el operador con una **palanca** (bola, mariposa: ¼ de vuelta) o un **volante** (asiento, diafragma: varias vueltas). En las de palanca, **palanca paralela a la tubería = abierta**; perpendicular = cerrada.
- **Automática todo/nada** (*on/off valve*, en el P&ID suele llamarse **XV**): la abre o la cierra el sistema de control con un **actuador neumático** (*pneumatic actuator*) que recibe aire de instrumentos a través de una **electroválvula** (*solenoid valve*).
- **Válvula de control** (*control valve*, **FCV**, **TCV**…): no solo abre o cierra, sino que se queda en cualquier posición intermedia (0–100 %) que le pide el controlador.

**Posición de fallo** (*fail-safe position*): qué hace la válvula si se corta el aire o la electricidad. Se elige para que el proceso quede **seguro**:
| Posición de fallo | Abreviatura | Ejemplo |
|---|---|---|
| Falla cerrada | **FC** (*fail closed*) | Entrada de vapor a la camisa, adición de un reactivo |
| Falla abierta | **FO** (*fail open*) | Agua de refrigeración de la camisa, venteo a scrubber |
| Se queda donde está | **FL** (*fail last / fail locked*) | Algunas válvulas de proceso |

**¿Cómo sabes si está realmente abierta o cerrada?** Que el DCS haya **mandado** abrir no garantiza que la válvula se haya **movido**. Las automáticas llevan **finales de carrera** (*limit switches*, en el P&ID **ZSO** = abierta y **ZSC** = cerrada) que confirman la posición. Si la orden y la posición no coinciden, salta una **alarma de discrepancia** (*valve discrepancy / feedback alarm*). En campo, mira el **indicador mecánico** del actuador.

**Buenas prácticas al abrir y cerrar**
- Abre **despacio** las líneas de vapor, de presión o calientes (golpe de ariete, proyecciones).
- **Nunca fuerces** una válvula atascada con barras o "palancas" improvisadas: avisa a mantenimiento.
- Válvula en **mando local** (*local/manual override*) = el sistema ya no la controla: solo según procedimiento y dejándolo anotado.
- Al terminar, deja cada válvula en la **posición que indica la hoja** (normalmente cerrada) y compruébalo.

### Reglas de oro
- Comprueba la **ruta completa** antes de transferir: origen, válvulas abiertas, destino, sin otras salidas abiertas.
- Nunca manipules una **PSV** ni un **disco de ruptura**: son la última protección contra una explosión.
- Las válvulas manuales críticas pueden ir **bloqueadas con candado** o con precinto: solo se abren según procedimiento.
`,
    plant: `
Transferencia del reactor R-101 al R-102. El operador revisa en el panel de conexión que el codo une la salida de R-101 con la entrada de R-102, comprueba que la válvula hacia el tanque de residuos está cerrada y lo marca en la hoja. Un segundo operador lo verifica (*second-person verification*) antes de arrancar la bomba.
`,
    batchRecord: `
- "Verificar ruta de transferencia R-101 → R-102: realizado por / verificado por".
- Identificación de mangueras o codos usados.
- Comprobaciones de estanqueidad (prueba de fugas con N₂).
`,
    terms: [
      { es: "Diámetro nominal", en: "Nominal diameter (DN)", def: "Tamaño de referencia de una tubería." },
      { es: "Brida", en: "Flange", def: "Unión atornillada entre tuberías o equipos." },
      { es: "Junta", en: "Gasket", def: "Pieza que sella una unión entre bridas." },
      { es: "Brida ciega", en: "Blind flange", def: "Brida sin agujero que cierra una línea." },
      { es: "Válvula de retención", en: "Check valve", def: "Válvula que solo deja pasar el fluido en un sentido." },
      { es: "Válvula de seguridad", en: "Pressure safety valve (PSV)", def: "Válvula que se abre sola para aliviar sobrepresión." },
      { es: "Disco de ruptura", en: "Rupture disc", def: "Membrana que se rompe a una presión fijada para proteger el equipo." },
      { es: "Panel de conexión", en: "Transfer panel", def: "Panel con codos móviles para unir líneas distintas." },
      { es: "Válvula automática todo/nada", en: "On/off valve (XV)", def: "Válvula que el sistema de control abre o cierra mediante un actuador." },
      { es: "Actuador neumático", en: "Pneumatic actuator", def: "Mecanismo que mueve una válvula con aire comprimido." },
      { es: "Posición de fallo", en: "Fail-safe position (FC / FO)", def: "Posición que toma la válvula si se pierde el aire o la señal: cerrada, abierta o quieta." },
      { es: "Final de carrera", en: "Limit switch (ZSO / ZSC)", def: "Sensor que confirma que la válvula ha llegado a abierta o a cerrada." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "¿Qué válvula impide que el fluido vuelva hacia atrás?",
        options: ["Bola", "Mariposa", "Retención", "Globo"],
        answer: 2,
        explain: "La válvula de retención (check valve) solo permite el paso en un sentido.",
      },
      {
        kind: "choice",
        q: "Una válvula de seguridad (PSV) gotea un poco. ¿Qué haces?",
        options: [
          "Apretarla tú mismo",
          "Avisar a tu responsable y a mantenimiento; no manipularla",
          "Taparla",
          "Ignorarlo",
        ],
        answer: 1,
        explain: "Las PSV son elementos de seguridad: solo las tocan personas autorizadas con permiso de trabajo.",
      },
      {
        kind: "choice",
        q: "La válvula de entrada de vapor a la camisa es FC (falla cerrada). ¿Qué pasa si se corta el aire de instrumentos?",
        options: [
          "Se abre del todo y sigue calentando",
          "Se cierra y deja de entrar vapor: el reactor queda en posición segura",
          "Se queda a medias",
          "Depende del operador",
        ],
        answer: 1,
        explain: "FC significa que sin aire el muelle del actuador la cierra. Para calefacción, lo seguro es cortar el calor.",
      },
      {
        kind: "choice",
        q: "El DCS muestra que ha mandado abrir la XV-205, pero el final de carrera ZSO no se activa y salta una alarma de discrepancia. ¿Qué haces?",
        options: [
          "Doy por abierta la válvula porque el sistema la ha mandado abrir",
          "No continúo la transferencia: compruebo en campo el indicador de la válvula y aviso; puede estar atascada o sin aire",
          "Puenteo el final de carrera",
          "Golpeo la válvula hasta que se mueva",
        ],
        answer: 1,
        explain: "La orden no garantiza el movimiento. El final de carrera confirma la posición real; si no coincide, se investiga antes de seguir.",
      },
      {
        kind: "choice",
        q: "Antes de una transferencia, ¿qué compruebas?",
        options: [
          "Solo que la bomba funciona",
          "La ruta completa: origen, válvulas, conexiones y destino",
          "El color de la tubería",
          "Nada si tienes prisa",
        ],
        answer: 1,
        explain: "Un error de ruta envía producto al sitio equivocado o provoca un derrame.",
      },
    ],
  },
  {
    slug: "bombas",
    level: 11,
    order: 2,
    title: "Bombas",
    titleEn: "Pumps",
    minutes: 15,
    summary: "Tipos de bomba, cómo se usan y los errores que las rompen.",
    body: `
### Para qué
Una **bomba** (*pump*) da energía a un líquido para moverlo a otro sitio o a más altura. También se transfiere con **presión de N₂** o con **vacío**, sin bomba.

### Dos grandes familias
**Centrífugas** (*centrifugal pumps*)
- Un **rodete** (*impeller*) que gira lanza el líquido hacia fuera.
- El caudal baja si sube la resistencia de la línea. Se regula con una **válvula en la impulsión** o con **variador de frecuencia** (*VFD*).
- Si se cierra la impulsión unos segundos no pasa nada grave, pero mucho tiempo **calienta** el líquido.

**De desplazamiento positivo** (*positive displacement*)
- Mueven un volumen fijo por ciclo: **membrana neumática** (*AODD, air-operated double diaphragm*), **engranajes** (*gear*), **lóbulos**, **peristáltica**, **pistón**.
- **Nunca** se cierra la impulsión con la bomba en marcha: la presión sube hasta romper algo. Llevan **válvula de alivio**.
- La de membrana neumática es muy común en plantas químicas: aguanta trabajar en vacío y suspensiones, y no tiene motor eléctrico (útil en zonas ATEX).

### Problemas típicos
- **Trabajar en seco** (*dry running*): sin líquido, el **cierre mecánico** (*mechanical seal*) se quema. Muchas bombas llevan protección por falta de caudal.
- **Cavitación** (*cavitation*): en la aspiración la presión baja tanto que el líquido hierve y forma burbujas que implosionan. Suena como "grava" y destroza el rodete. Causas: aspiración obstruida, líquido muy caliente o volátil, depósito con poco nivel. Se relaciona con el **NPSH** (*Net Positive Suction Head*).
- **Fugas por el cierre**: avisar; puede ser disolvente inflamable o producto tóxico.

### Leyes de afinidad (centrífugas)
El caudal es proporcional a la velocidad de giro. Con un variador: si pasas de 50 Hz a 40 Hz, el caudal baja aproximadamente al 80 %.
`,
    plant: `
Al trasvasar una suspensión con una bomba de membrana, el operador nota golpes irregulares y el caudal cae: la aspiración se está quedando sin líquido. Para la bomba antes de que trabaje en seco y lo anota en la hoja.
`,
    batchRecord: `
- Equipo de transferencia usado (bomba, N₂ o vacío) e identificación.
- Hora de inicio y fin de la transferencia y volumen trasvasado.
- Lavado de línea (*line flush*) con disolvente para arrastrar el producto que queda en la tubería.
`,
    terms: [
      { es: "Bomba centrífuga", en: "Centrifugal pump", def: "Bomba con rodete giratorio; el caudal depende de la resistencia de la línea." },
      { es: "Bomba de desplazamiento positivo", en: "Positive displacement pump", def: "Bomba que mueve un volumen fijo por ciclo." },
      { es: "Bomba de membrana neumática", en: "Air-operated double diaphragm pump (AODD)", def: "Bomba accionada por aire comprimido, típica en química." },
      { es: "Rodete", en: "Impeller", def: "Pieza giratoria de una bomba centrífuga." },
      { es: "Cierre mecánico", en: "Mechanical seal", def: "Sello que evita fugas en el eje de la bomba." },
      { es: "Cavitación", en: "Cavitation", def: "Formación y colapso de burbujas de vapor en la bomba, que la daña." },
      { es: "Variador de frecuencia", en: "Variable frequency drive (VFD)", def: "Equipo que cambia la velocidad del motor." },
      { es: "Lavado de línea", en: "Line flush", def: "Paso de disolvente para arrastrar el producto que queda en la tubería." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "¿Qué no debes hacer nunca con una bomba de desplazamiento positivo en marcha?",
        options: [
          "Abrir la aspiración",
          "Cerrar la válvula de impulsión",
          "Comprobar el caudal",
          "Vigilar fugas",
        ],
        answer: 1,
        explain: "Mueve un volumen fijo: con la salida cerrada la presión sube hasta romper la bomba o la línea.",
      },
      {
        kind: "number",
        q: "Una centrífuga da 10 m³/h a 50 Hz. Si el variador baja a 40 Hz, ¿qué caudal aproximado dará?",
        answer: 8,
        tolerance: 0.01,
        unit: "m³/h",
        explain: "El caudal es proporcional a la velocidad: 10 × 40 / 50 = 8 m³/h.",
      },
      {
        kind: "choice",
        q: "La bomba suena como si bombeara grava. ¿Qué está pasando probablemente?",
        options: ["Funciona perfecto", "Cavitación", "Está apagada", "Sobra líquido"],
        answer: 1,
        explain: "El ruido de grava es típico de la cavitación: revisar la aspiración y el nivel.",
      },
    ],
  },
  {
    slug: "calor-vapor-intercambiadores",
    level: 11,
    order: 3,
    title: "Calor, vapor e intercambiadores",
    titleEn: "Heat transfer, steam and heat exchangers",
    minutes: 18,
    summary: "Cómo se calienta y se enfría en planta, y cuánta energía hace falta.",
    body: `
### Formas de transmitir calor
- **Conducción** (*conduction*): a través de un sólido (la pared del reactor).
- **Convección** (*convection*): con un fluido en movimiento (el líquido agitado, el aceite de la camisa).
- **Radiación** (*radiation*): sin contacto (una superficie muy caliente).

### Cuánto calor hace falta
**Q = m × cp × ΔT**
- m: masa (kg). cp: calor específico (*specific heat*). Agua: 4,18 kJ/(kg·°C). Muchos disolventes orgánicos: 1,7–2,5.
- ΔT: subida de temperatura.
Calentar 1000 kg de agua de 20 a 80 °C: 1000 × 4,18 × 60 = 250 800 kJ ≈ 250,8 MJ.

### Vapor (*steam*)
El servicio de calefacción más usado. Cede mucha energía al **condensar** (calor latente, *latent heat*, entre 2100 y 2200 kJ/kg a las presiones habituales).
- La temperatura del vapor saturado depende de su **presión**: a 1 bar g ≈ 120 °C; a 3 bar g ≈ 144 °C.
- **Condensado** (*condensate*): el agua que resulta. Los **purgadores** (*steam traps*) lo sacan sin dejar escapar vapor. Si fallan, la camisa se inunda y calienta mal.
- **Golpe de ariete** (*water hammer*): si se mete vapor de golpe en una línea con condensado, se producen golpes violentos. Se abre **despacio** y drenando.
- Peligro: quemaduras graves. El vapor seco es **invisible**.

### Fluido térmico (*thermal fluid / heat transfer fluid*)
Aceite especial que circula por la camisa y permite **calentar y enfriar** con el mismo circuito, de unos −30 a +200 °C según el fluido. Muchos reactores multipropósito trabajan así.

### Intercambiadores de calor (*heat exchangers*)
- **Carcasa y tubos** (*shell and tube*): un fluido por dentro de los tubos y otro por fuera. Típico como condensador.
- **De placas** (*plate heat exchanger*): placas onduladas, muy eficientes y compactos.
- **Serpentín** (*coil*) dentro del reactor, y la propia **camisa** (*jacket*).
- **Contracorriente** (*countercurrent*): los dos fluidos van en sentidos opuestos y se aprovecha mejor la energía.

### Choque térmico en vitrificado
Los reactores vitrificados (*glass-lined*) no aguantan cambios bruscos de temperatura entre la camisa y el contenido: el vidrio puede **romperse**. Por eso la hoja limita la diferencia de temperatura (ΔT máx.).
`,
    plant: `
La hoja dice: "Calentar a reflujo con fluido térmico. ΔT camisa–producto ≤ 60 °C (reactor vitrificado)". El sistema de control limita la temperatura de camisa, pero el operador comprueba el gráfico y anota las temperaturas cada 30 min.
`,
    batchRecord: `
- Temperatura de producto y de camisa, hora de llegada a la temperatura objetivo.
- Medio de calefacción o refrigeración usado.
- Desviaciones de temperatura y duración.
`,
    terms: [
      { es: "Calor específico", en: "Specific heat (cp)", def: "Energía necesaria para subir 1 °C un kilo de sustancia." },
      { es: "Calor latente", en: "Latent heat", def: "Energía que se absorbe o cede al cambiar de estado sin cambiar la temperatura." },
      { es: "Vapor saturado", en: "Saturated steam", def: "Vapor de agua en equilibrio con el líquido; su temperatura depende de la presión." },
      { es: "Condensado", en: "Condensate", def: "Agua formada al condensar el vapor." },
      { es: "Purgador", en: "Steam trap", def: "Dispositivo que elimina el condensado y retiene el vapor." },
      { es: "Golpe de ariete", en: "Water hammer", def: "Golpe de presión en una tubería por condensado o cierre brusco." },
      { es: "Fluido térmico", en: "Thermal fluid", def: "Aceite que circula por la camisa para calentar o enfriar." },
      { es: "Intercambiador de calor", en: "Heat exchanger", def: "Equipo que pasa calor de un fluido a otro sin mezclarlos." },
    ],
    quiz: [
      {
        kind: "number",
        q: "¿Cuántos MJ hacen falta para calentar 1000 kg de agua de 20 a 80 °C? (cp = 4,18 kJ/kg·°C)",
        answer: 250.8,
        tolerance: 0.01,
        unit: "MJ",
        explain: "1000 × 4,18 × 60 = 250 800 kJ = 250,8 MJ.",
      },
      {
        kind: "choice",
        q: "¿Por qué se abre despacio el vapor en una línea fría?",
        options: [
          "Para ahorrar",
          "Para evitar el golpe de ariete por el condensado acumulado",
          "Porque lo dice el fabricante sin motivo",
          "Para que suene menos",
        ],
        answer: 1,
        explain: "El vapor que choca con condensado provoca golpes violentos que pueden romper tuberías.",
      },
      {
        kind: "choice",
        q: "¿Por qué se limita la diferencia de temperatura en un reactor vitrificado?",
        options: [
          "Para que caliente más rápido",
          "Porque un choque térmico puede romper el vidrio",
          "Para ahorrar vapor",
          "No se limita",
        ],
        answer: 1,
        explain: "El vitrificado es frágil ante cambios bruscos de temperatura.",
      },
    ],
  },
  {
    slug: "frio-y-refrigeracion",
    level: 11,
    order: 4,
    title: "Frío y refrigeración",
    titleEn: "Cooling and refrigeration",
    minutes: 12,
    summary: "Los servicios de frío de la planta y por qué un fallo de refrigeración es una emergencia.",
    body: `
### Para qué hace falta frío
- Quitar el calor de reacciones **exotérmicas** (*exothermic*).
- **Cristalizar** a baja temperatura.
- **Condensar** vapores en destilaciones y en los venteos.
- Conservar materiales sensibles.

### Servicios de frío (de menos a más frío)
| Servicio | En inglés | Temperatura típica |
|---|---|---|
| Agua de torre | *Cooling tower water* | 25–30 °C |
| Agua fría | *Chilled water* | 5–10 °C |
| Agua glicolada / salmuera | *Glycol / brine* | por debajo de 0 °C (−10 a −20 °C) |
| Fluido térmico con unidad de frío | *Thermal fluid* | hasta −30 °C o menos |
| Nitrógeno líquido | *Liquid nitrogen* | −196 °C (se usa en intercambiadores especiales) |

Las temperaturas exactas dependen de la planta.

### Reacciones exotérmicas y fuga térmica
Si una reacción desprende calor más rápido de lo que la camisa puede quitar, la temperatura sube, la reacción se acelera y desprende aún más calor. Es la **reacción descontrolada** o **fuga térmica** (*thermal runaway*): puede acabar en sobrepresión, rotura del reactor o incendio.

Medidas de control:
- **Adición dosificada** (*semi-batch*): el reactivo se añade poco a poco. Si falla el frío, **se para la adición** y la reacción se frena.
- Límites de temperatura con **alarmas** y **enclavamientos** que cortan la adición.
- Estudios de seguridad (DSC, calorimetría de reacción) que fijan la temperatura máxima segura.

### Qué hace el operador
- Comprobar antes de empezar que el servicio de frío está disponible y a la temperatura correcta.
- Vigilar la temperatura durante adiciones exotérmicas.
- Si la temperatura sube fuera de control: **parar la adición**, aplicar el máximo frío y avisar, según el procedimiento de emergencia.
`,
    plant: `
Adición de un reactivo exotérmico: "Adicionar en ≥ 2 h manteniendo T ≤ 15 °C. Si T > 15 °C, detener la adición hasta T ≤ 10 °C". A mitad de adición se para el compresor de glicol y la temperatura sube a 16 °C. El enclavamiento cierra la válvula de adición, el operador avisa al jefe de turno y lo registra como incidencia.
`,
    batchRecord: `
- Temperaturas durante la adición y velocidad de adición.
- Paradas de adición con hora y motivo.
- Disponibilidad de servicios comprobada antes de empezar.
`,
    terms: [
      { es: "Exotérmica", en: "Exothermic", def: "Reacción que desprende calor." },
      { es: "Fuga térmica / reacción descontrolada", en: "Thermal runaway", def: "Aumento de temperatura que se autoacelera y deja de controlarse." },
      { es: "Agua glicolada", en: "Glycol water", def: "Mezcla de agua y glicol que no se congela por debajo de 0 °C." },
      { es: "Agua de torre", en: "Cooling tower water", def: "Agua enfriada por evaporación en una torre." },
      { es: "Adición dosificada", en: "Semi-batch / dosing-controlled addition", def: "Añadir un reactivo poco a poco para controlar el calor." },
      { es: "Calorimetría de reacción", en: "Reaction calorimetry", def: "Medida del calor que desprende una reacción para diseñarla con seguridad." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "Durante una adición exotérmica falla la refrigeración. ¿Qué es lo primero?",
        options: [
          "Añadir más rápido para terminar antes",
          "Parar la adición y avisar según el procedimiento",
          "Abrir el reactor",
          "Seguir igual",
        ],
        answer: 1,
        explain: "Sin adición no se genera más calor: es la forma más rápida de frenar la reacción.",
      },
      {
        kind: "choice",
        q: "¿Qué servicio consigue temperaturas por debajo de 0 °C?",
        options: ["Agua de torre", "Agua glicolada o salmuera", "Vapor", "Aire comprimido"],
        answer: 1,
        explain: "El glicol o la salmuera no se congelan a 0 °C y permiten enfriar por debajo.",
      },
      {
        kind: "choice",
        q: "¿Por qué una adición dosificada (semi-batch) es más segura que cargar todo el reactivo de golpe?",
        options: [
          "Porque es más rápida",
          "Porque si falla el frío se para la adición y deja de generarse calor; con todo cargado no se puede frenar",
          "Porque usa menos reactivo",
          "Porque no necesita agitación",
        ],
        answer: 1,
        explain: "Con la adición controlada, el calor generado depende de lo que se añade: parar la bomba frena la reacción.",
      },
    ],
  },
  {
    slug: "solidos-y-balances",
    level: 11,
    order: 5,
    title: "Manejo de sólidos y balance de materia",
    titleEn: "Solids handling and mass balance",
    minutes: 15,
    summary: "Cómo se cargan y se mueven los sólidos, y cómo se comprueba que no se 'pierde' material.",
    body: `
### Formas de manipular sólidos
- **Sacos y bidones** (*bags, drums*): carga manual por la boca de hombre (*manway*) o una estación de vaciado de sacos.
- **Big bags / FIBC** (*Flexible Intermediate Bulk Container*): sacos grandes (500–1000 kg) con estación de descarga.
- **Contenedores IBC** de acero o **contenedores con válvula de cierre** (*split butterfly valve*): carga **contenida**, sin exponer al operador.
- **Transporte neumático o por vacío** (*pneumatic / vacuum conveying*): el polvo viaja por una tubería arrastrado por gas.
- **Tornillos sinfín** (*screw feeders*) y carga por **gravedad**.

### Riesgos
- **Electricidad estática**: el polvo cargando en un reactor con disolvente puede dar una chispa e incendiar los vapores. Por eso se **inertiza** antes y se usan sacos y equipos **antiestáticos** con puesta a tierra.
- **Exposición** a polvo activo: contención, extracción localizada y EPI.
- **Ergonomía**: sacos de 25 kg, posturas. Ayudas mecánicas.

### Balance de materia (*mass balance*)
Principio: **lo que entra = lo que sale + lo que se acumula**. En un lote:

Entradas (cargas) = producto + aguas madre + lavados + destilados + residuos + pérdidas.

Sirve para:
- Detectar errores de carga o de pesada.
- Calcular el **rendimiento** (*yield*).
- Investigar desviaciones: si "faltan" kilos, algo ha ido a otro sitio (fuga, transferencia equivocada, evaporación).

### Balance de energía
Igual que con la materia: el calor que entra (camisa, reacción) = el que sale (camisa, condensador) + el que se acumula (sube la temperatura). Es la base del diseño seguro de las reacciones exotérmicas.

### Conciliación (*reconciliation*)
Las GMP piden **conciliar** materiales: comprobar que lo usado + lo devuelto + lo desechado = lo recibido para el lote. Se aplica sobre todo a etiquetas y material de acondicionamiento, y también a materias primas.
`,
    plant: `
Se cargan 120 kg de materia prima, 400 kg de disolvente y 30 kg de reactivo (550 kg). Al final se miden 410 kg de filtrado y 125 kg de torta húmeda. Faltan 15 kg, coherentes con el disolvente evaporado al venteo durante la reacción. Si faltaran 100 kg, habría que investigar.
`,
    batchRecord: `
- Pesos de cada carga con la identificación de la báscula y el lote del material.
- Pesos o volúmenes de salidas: producto, aguas madre, residuos.
- Rendimiento y, si aplica, conciliación con sus límites.
`,
    terms: [
      { es: "Big bag", en: "Flexible Intermediate Bulk Container (FIBC)", def: "Saco grande de 500–1000 kg para sólidos." },
      { es: "Boca de hombre", en: "Manway", def: "Abertura grande en la parte superior del reactor." },
      { es: "Transporte neumático", en: "Pneumatic conveying", def: "Transporte de polvo por tubería con aire o nitrógeno." },
      { es: "Electricidad estática", en: "Static electricity", def: "Carga eléctrica acumulada que puede producir chispas." },
      { es: "Balance de materia", en: "Mass balance", def: "Comparación entre lo que entra y lo que sale de un proceso." },
      { es: "Conciliación", en: "Reconciliation", def: "Comprobación de que cuadran las cantidades recibidas, usadas y desechadas." },
      { es: "Rendimiento", en: "Yield", def: "Cantidad de producto obtenida respecto a la esperada." },
    ],
    quiz: [
      {
        kind: "number",
        q: "Entran 120 + 400 + 30 kg. Salen 410 kg de filtrado y 125 kg de torta. ¿Cuántos kg faltan en el balance?",
        answer: 15,
        tolerance: 0.001,
        unit: "kg",
        explain: "550 − (410 + 125) = 15 kg.",
      },
      {
        kind: "choice",
        q: "¿Por qué se inertiza el reactor antes de cargar polvo sobre un disolvente?",
        options: [
          "Para que pese menos",
          "Porque la electricidad estática del polvo puede encender los vapores",
          "Para enfriar",
          "No hace falta",
        ],
        answer: 1,
        explain: "Sin oxígeno no hay incendio aunque salte una chispa.",
      },
      {
        kind: "choice",
        q: "En el balance de un lote faltan muchos kilos sin explicación. ¿Qué indica?",
        options: [
          "Nada",
          "Un posible error de carga, fuga o transferencia equivocada que hay que investigar",
          "Que el lote es mejor",
          "Que la báscula está bien",
        ],
        answer: 1,
        explain: "El balance de materia sirve justamente para detectar estas anomalías.",
      },
    ],
  },
];
