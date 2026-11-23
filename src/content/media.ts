/**
 * Imágenes, señales y vídeos que acompañan a las lecciones.
 *
 * Reglas:
 * - Solo material con licencia libre (dominio público o Creative Commons) de Wikimedia Commons,
 *   con autor, licencia y enlace al original (se muestran bajo cada imagen y en /creditos).
 * - Nunca fotos ni documentos de empresas reales del usuario.
 * - Vídeos de YouTube de fuentes fiables (organismos públicos, universidades, fabricantes),
 *   comprobados a mano: existen, se pueden incrustar y su contenido encaja con la lección.
 * - Los archivos están en public/media (fotos y esquemas, JPG reescalado a ≤1000 px de ancho)
 *   y public/media/senales (señales ISO 7010, PNG). Las conversiones de SVG/TIF a JPG y los
 *   reescalados son las únicas modificaciones.
 */

export type LicenseKey =
  | "PD"
  | "CC0"
  | "CC BY 2.0"
  | "CC BY 2.5"
  | "CC BY 3.0"
  | "CC BY 4.0"
  | "CC BY-SA 2.5"
  | "CC BY-SA 3.0"
  | "CC BY-SA 4.0";

export const licenses: Record<LicenseKey, { label: string; url?: string }> = {
  PD: { label: "Dominio público" },
  CC0: { label: "CC0 1.0", url: "https://creativecommons.org/publicdomain/zero/1.0/deed.es" },
  "CC BY 2.0": { label: "CC BY 2.0", url: "https://creativecommons.org/licenses/by/2.0/deed.es" },
  "CC BY 2.5": { label: "CC BY 2.5", url: "https://creativecommons.org/licenses/by/2.5/deed.es" },
  "CC BY 3.0": { label: "CC BY 3.0", url: "https://creativecommons.org/licenses/by/3.0/deed.es" },
  "CC BY 4.0": { label: "CC BY 4.0", url: "https://creativecommons.org/licenses/by/4.0/deed.es" },
  "CC BY-SA 2.5": { label: "CC BY-SA 2.5", url: "https://creativecommons.org/licenses/by-sa/2.5/deed.es" },
  "CC BY-SA 3.0": { label: "CC BY-SA 3.0", url: "https://creativecommons.org/licenses/by-sa/3.0/deed.es" },
  "CC BY-SA 4.0": { label: "CC BY-SA 4.0", url: "https://creativecommons.org/licenses/by-sa/4.0/deed.es" },
};

export interface MediaImage {
  /** Archivo en public/media. */
  file: string;
  /** Texto alternativo (qué se ve). */
  alt: string;
  /** Pie de foto didáctico, con el término en inglés. */
  caption: string;
  author: string;
  license: LicenseKey;
  /** Nombre exacto del archivo en Wikimedia Commons. */
  commons: string;
  /** Formato de la imagen. Los esquemas se muestran sobre fondo blanco. */
  kind?: "foto" | "esquema";
}

export const commonsUrl = (name: string) => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(name.replace(/ /g, "_"))}`;

export const images = {
  "planta-reactores": {
    file: "planta-reactores.jpg",
    alt: "Nave de proceso con reactores agitados, tuberías y plataformas",
    caption: "Nave de reactores agitados (agitated reactors): arriba de cada uno, el motor y el reductor que mueven el agitador; alrededor, tuberías, válvulas, instrumentos y plataformas de acceso.",
    author: "PEO ACWA (U.S. Army)",
    license: "CC BY 2.0",
    commons: "Pueblo Chemical Agent - Agitated reactor (motor).jpg",
  },
  "planta-bidones-api": {
    file: "planta-bidones-api.jpg",
    alt: "Persona de la FDA con una tablilla revisando bidones de principio activo en un almacén",
    caption: "Bidones de principio activo a granel (bulk drug substance) con su etiqueta de lote. Las autoridades inspeccionan cómo se identifican, almacenan y registran.",
    author: "U.S. Food and Drug Administration",
    license: "PD",
    commons: "Examining Bulk Drug Containers (FDA 100) (8250838700).jpg",
  },
  "epi-gafas": {
    file: "epi-gafas.jpg",
    alt: "Gafas de seguridad de montura integral",
    caption: "Gafas de montura integral (safety goggles): cierran alrededor de los ojos y protegen de salpicaduras, cosa que unas gafas normales no hacen.",
    author: "DJSparky",
    license: "CC BY-SA 4.0",
    commons: "Safety Goggles.jpg",
  },
  "epi-guante-nitrilo": {
    file: "epi-guante-nitrilo.jpg",
    alt: "Guante desechable de nitrilo azul",
    caption: "Guante desechable de nitrilo (nitrile glove). Protege de salpicaduras breves; para contacto prolongado con un disolvente concreto hay que elegir el guante según la FDS (tiempo de paso, breakthrough time).",
    author: "Desconocido",
    license: "PD",
    commons: "Disposable nitrile glove.jpg",
  },
  "epi-semimascara": {
    file: "epi-semimascara.jpg",
    alt: "Dibujo de una semimáscara con dos filtros laterales",
    caption: "Semimáscara con filtros (half-mask respirator). El color y la letra del filtro indican contra qué protege: por ejemplo A (marrón) para vapores orgánicos y P3 (blanco) para partículas.",
    author: "Another-anon-artist-234",
    license: "CC0",
    commons: "Half-mask-respirator.jpg",
    kind: "esquema",
  },
  "emergencia-ducha-lavaojos": {
    file: "emergencia-ducha-lavaojos.jpg",
    alt: "Ducha de emergencia con lavaojos amarillo en una pared",
    caption: "Ducha de emergencia y lavaojos (emergency shower and eyewash). Tras una salpicadura en los ojos, lavar al menos 15 minutos con los párpados abiertos.",
    author: "Korn966",
    license: "CC BY-SA 4.0",
    commons: "Emergency eyewash and shower.jpg",
  },
  "emergencia-equipos": {
    file: "emergencia-equipos.jpg",
    alt: "Pared con lavaojos, extintores y señales de emergencia",
    caption: "Equipos de emergencia (safety equipment) en un punto fijo y señalizado. Antes de empezar el turno, conviene saber dónde están.",
    author: "Cjp24",
    license: "CC BY-SA 3.0",
    commons: "Safety equipment.jpg",
  },
  "valvula-bola": {
    file: "valvula-bola.jpg",
    alt: "Válvula de bola grande vista de frente, con el paso abierto",
    caption: "Válvula de bola de paso total (full bore ball valve): una esfera con un agujero gira un cuarto de vuelta. Maneta en línea con la tubería = abierta; atravesada = cerrada.",
    author: "Arian petro idea",
    license: "CC BY-SA 4.0",
    commons: "Ball Valve - Full Bore.jpg",
  },
  "valvula-mariposa": {
    file: "valvula-mariposa.jpg",
    alt: "Válvula de mariposa con palanca en la salida de un depósito",
    caption: "Válvula de mariposa (butterfly valve) en la salida de un depósito: un disco gira dentro del tubo. Es ligera y se usa mucho en diámetros grandes.",
    author: "Bitjungle",
    license: "CC BY-SA 4.0",
    commons: "Butterfly valve on tank outlet.jpg",
  },
  "valvula-diafragma-corte": {
    file: "valvula-diafragma-corte.jpg",
    alt: "Válvula de diafragma sanitaria con actuador neumático, seccionada",
    caption: "Válvula de diafragma sanitaria en corte (diaphragm valve): una membrana separa el producto del mecanismo, por eso se usa en agua purificada y salas limpias.",
    author: "Edgarr emu.ee",
    license: "CC0",
    commons: "Sanitary Diaphragm Valve Cutaway.jpg",
  },
  "valvula-asiento-esquema": {
    file: "valvula-asiento-esquema.jpg",
    alt: "Esquema en corte de una válvula de asiento con sus partes rotuladas en inglés",
    caption: "Válvula de asiento o de globo (globe valve) en corte: vástago (stem), tapa (bonnet), obturador (plug) y cuerpo (body). Regula bien el caudal; es la típica válvula de control.",
    author: "Petteri Aimonen",
    license: "PD",
    commons: "Globe valve diagram.svg",
    kind: "esquema",
  },
  mirilla: {
    file: "mirilla.jpg",
    alt: "Mirilla de vidrio en una tubería con líquido",
    caption: "Mirilla (sight glass): permite ver si pasa líquido, su color o si hay burbujas, sin abrir el equipo.",
    author: "jasonwoodhead23",
    license: "CC BY 2.0",
    commons: "Sight glass.jpg",
  },
  "reactor-agitado-esquema": {
    file: "reactor-agitado-esquema.jpg",
    alt: "Esquema de un tanque agitado con motor, agitador, camisa y deflectores, con rótulos en español",
    caption: "Esquema de un reactor agitado (agitated vessel): motor, eje y agitador (impeller), camisa (jacket) por donde circula el fluido térmico y deflectores (baffles) que evitan el remolino.",
    author: "Daniele Pugliesi; traducción de Pitana",
    license: "CC BY-SA 4.0",
    commons: "Agitated vessel-es.svg",
    kind: "esquema",
  },
  "reactor-vidriado-corte": {
    file: "reactor-vidriado-corte.jpg",
    alt: "Corte de un reactor de acero vidriado mostrando la camisa y el agitador",
    caption: "Reactor de acero vidriado en corte (glass-lined reactor): por dentro lleva una capa de vidrio que resiste los ácidos; por fuera, la camisa de calefacción y refrigeración.",
    author: "JurecGermany",
    license: "CC BY-SA 4.0",
    commons: "Glass-lined BE6300 Cross Section view.jpg",
  },
  "reactor-vidriado-interior": {
    file: "reactor-vidriado-interior.jpg",
    alt: "Interior brillante de un depósito vidriado con su agitador",
    caption: "Interior de un depósito vidriado con su agitador: el vidrio es frágil frente a golpes y cambios bruscos de temperatura (choque térmico, thermal shock). Por eso hay límites de ΔT entre camisa y masa.",
    author: "JurecGermany",
    license: "PD",
    commons: "Bioresit - emaillierter Ruehrbehaelter für biokorrosive Prozesse.jpg",
  },
  "reactores-encamisados": {
    file: "reactores-encamisados.jpg",
    alt: "Dos depósitos de acero con una camisa de media caña soldada en espiral por fuera",
    caption: "Depósitos encamisados (jacketed vessels) con camisa de media caña: por ese tubo en espiral circula vapor, agua de refrigeración o salmuera para calentar o enfriar el contenido.",
    author: "PEO ACWA (U.S. Army)",
    license: "CC BY 2.0",
    commons: "Jacketed vessels.jpg",
  },
  "reactor-media-cana": {
    file: "reactor-media-cana.jpg",
    alt: "Dibujo de un reactor con un serpentín de media caña soldado por fuera",
    caption: "Camisa de media caña (half-pipe coil jacket): un tubo partido soldado en espiral por fuera del reactor. Aguanta más presión que una camisa convencional.",
    author: "SecurityFanBoy",
    license: "CC BY-SA 4.0",
    commons: "Batch reactor half coil cooling jacket.tif",
    kind: "esquema",
  },
  "reactor-serpentin-interno": {
    file: "reactor-serpentin-interno.jpg",
    alt: "Dibujo de un reactor con un serpentín de refrigeración dentro",
    caption: "Serpentín interno (internal cooling coil): añade superficie de intercambio dentro de la masa, útil cuando la reacción desprende mucho calor.",
    author: "SecurityFanBoy",
    license: "CC BY-SA 4.0",
    commons: "Batch reactor with internal cooling coil.tif",
    kind: "esquema",
  },
  "bomba-bidon": {
    file: "bomba-bidon.jpg",
    alt: "Bomba manual de trasiego con contador montada sobre un bidón",
    caption: "Bomba de bidón (drum pump) para trasvasar líquidos. Con disolventes inflamables tiene que ser apta ATEX y estar conectada a tierra (earthing) para evitar chispas por electricidad estática.",
    author: "Alf van Beem",
    license: "PD",
    commons: "Barrel Transfer or Drum Pumps pic1.JPG",
  },
  "celula-carga": {
    file: "celula-carga.jpg",
    alt: "Célula de carga bajo la pata de un depósito",
    caption: "Célula de carga (load cell) bajo la pata de un depósito: mide el peso del contenido. Así se controla cuánto se ha cargado sin depender del nivel.",
    author: "GRALISTAIR",
    license: "CC BY-SA 4.0",
    commons: "Load Cell fitted under a chemical tank.jpg",
  },
  "disco-ruptura": {
    file: "disco-ruptura.jpg",
    alt: "Disco de ruptura metálico abierto tras actuar",
    caption: "Disco de ruptura usado (rupture disk): una lámina que se rompe a una presión fijada y deja escapar gases antes de que reviente el equipo. Una vez roto hay que cambiarlo.",
    author: "Hans-Peter Scholz",
    license: "CC BY-SA 3.0",
    commons: "Rupture disk used 01.jpg",
  },
  "valvula-seguridad": {
    file: "valvula-seguridad.jpg",
    alt: "Válvula de seguridad de muelle, de color azul, montada en una línea",
    caption: "Válvula de seguridad (safety relief valve): un muelle la mantiene cerrada y se abre sola al superar la presión de tarado; a diferencia del disco, vuelve a cerrar.",
    author: "Desconocido",
    license: "CC BY-SA 3.0",
    commons: "Relief valve01.jpg",
  },
  "centrifugas-cesta-historicas": {
    file: "centrifugas-cesta-historicas.jpg",
    alt: "Batería de centrífugas de cesta antiguas en una fábrica de azúcar",
    caption: "Batería de centrífugas de cesta (basket centrifuges) en una azucarera antigua. El principio es el mismo que hoy: la cesta perforada gira, el líquido sale por la tela y el sólido queda dentro.",
    author: "Autor desconocido (colección Tropenmuseum)",
    license: "CC BY-SA 3.0",
    commons: "COLLECTIE TROPENMUSEUM Centrifuge-batterij in een suikerfabriek TMnr 10011795.jpg",
  },
  "cesta-centrifuga": {
    file: "cesta-centrifuga.jpg",
    alt: "Render de una cesta perforada de centrífuga",
    caption: "Cesta perforada de una centrífuga (basket). Por dentro lleva la tela filtrante (filter cloth); la torta (cake) se forma contra la pared al girar.",
    author: "R. Castelnuovo",
    license: "PD",
    commons: "Pusher Rotor.png",
    kind: "esquema",
  },
  "nutsche-encamisado": {
    file: "nutsche-encamisado.jpg",
    alt: "Filtro nutsche de vidrio encamisado sobre un bastidor, con el motor del agitador arriba",
    caption: "Filtro nutsche (nutsche filter) a escala piloto: un recipiente con fondo filtrante. Se filtra con presión de nitrógeno o vacío y la torta se lava y se descarga.",
    author: "Rudyher27",
    license: "CC BY-SA 4.0",
    commons: "Nutsche Filter .jpg",
  },
  "filtro-secador-anfd": {
    file: "filtro-secador-anfd.jpg",
    alt: "Varios filtros-secadores agitados de acero inoxidable en un taller",
    caption: "Filtro-secador agitado (agitated nutsche filter dryer, ANFD): filtra, lava y seca en el mismo equipo cerrado, sin exponer al operador al producto.",
    author: "Infoshivshakti",
    license: "CC BY-SA 4.0",
    commons: "Agitated Nutsche Filter Dryer ANFD.jpg",
  },
  "filtro-secador-anfd-2": {
    file: "filtro-secador-anfd-2.jpg",
    alt: "Filtro-secador agitado instalado, visto de frente",
    caption: "Otro filtro-secador (ANFD). En secado, la camisa calienta, se aplica vacío y el agitador remueve la torta para que el disolvente salga antes.",
    author: "ShivShaktiWiki",
    license: "CC BY-SA 4.0",
    commons: "ANFD 1..jpg",
  },
  buchner: {
    file: "buchner.jpg",
    alt: "Embudo Büchner de porcelana visto de frente",
    caption: "Embudo Büchner (Büchner funnel): la versión de laboratorio del filtro nutsche. Papel de filtro sobre una placa perforada y vacío por debajo.",
    author: "Ichwarsnur",
    license: "CC BY-SA 4.0",
    commons: "Büchnertrichter frontal 02.jpg",
  },
  "filtro-prensa": {
    file: "filtro-prensa.jpg",
    alt: "Filtro prensa de placas",
    caption: "Filtro prensa (filter press): muchas placas con telas apretadas entre sí. Muy usado en aguas y química general; en API se prefieren equipos cerrados.",
    author: "Smetanin Maksim Vladimirovich",
    license: "CC BY-SA 3.0",
    commons: "Filter-press 2008.jpg",
  },
  "estufa-vacio": {
    file: "estufa-vacio.jpg",
    alt: "Estufa de vacío de laboratorio",
    caption: "Estufa de vacío (vacuum oven): al bajar la presión, el disolvente hierve a menor temperatura y el producto se seca sin degradarse.",
    author: "Smokefoot",
    license: "CC BY 4.0",
    commons: "Vacuum oven.jpg",
  },
  "lecho-fluido": {
    file: "lecho-fluido.jpg",
    alt: "Secador de lecho fluido de laboratorio",
    caption: "Secador de lecho fluido (fluid bed dryer): aire caliente sube desde abajo y mantiene el polvo en suspensión. Seca rápido, pero hay que vigilar la electricidad estática y las explosiones de polvo.",
    author: "Utkarshsingh.1992",
    license: "CC BY-SA 3.0",
    commons: "Fluidised Bed Dryer.jpeg",
  },
  "liofilizador-bandejas": {
    file: "liofilizador-bandejas.jpg",
    alt: "Persona cargando bandejas en un liofilizador",
    caption: "Liofilizador de bandejas (freeze dryer): congela el producto y retira el agua por sublimación al vacío. Se usa con productos muy sensibles al calor.",
    author: "Desconocido",
    license: "PD",
    commons: "Lyophilizer tray type.jpg",
  },
  manometro: {
    file: "manometro.jpg",
    alt: "Manómetro industrial de esfera",
    caption: "Manómetro (pressure gauge): indicación local de presión. Fíjate en las unidades de la esfera (bar, kPa) y en si mide presión relativa o absoluta.",
    author: "Palagiri",
    license: "CC BY-SA 3.0",
    commons: "Industrial instruments pressure gauge.jpg",
  },
  termopar: {
    file: "termopar.jpg",
    alt: "Termopar tipo K con su conector",
    caption: "Termopar tipo K (thermocouple): dos metales distintos unidos generan una tensión que depende de la temperatura. En reactores también son muy comunes las sondas Pt100 (RTD).",
    author: "Harke",
    license: "PD",
    commons: "Thermocouple K (2).jpg",
  },
  "caudalimetro-coriolis": {
    file: "caudalimetro-coriolis.jpg",
    alt: "Caudalímetro másico Coriolis con sus tubos en U a la vista",
    caption: "Caudalímetro Coriolis (Coriolis flow meter): mide directamente el caudal másico (kg/h) y la densidad. Muy usado para dosificar reactivos.",
    author: "Bitjungle",
    license: "CC BY-SA 4.0",
    commons: "Coriolis Flow Meter.jpg",
  },
  "radar-nivel": {
    file: "radar-nivel.jpg",
    alt: "Medidor de nivel por radar y un interruptor de nivel alto en la tapa de un depósito",
    caption: "Medidor de nivel por radar (radar level transmitter) junto a un interruptor de nivel alto (high level switch): el primero mide de forma continua, el segundo da la alarma o el enclavamiento.",
    author: "Steve Mueller 1919",
    license: "CC BY-SA 4.0",
    commons: "LevelPro Radar Level Sensor & High Level Switch.jpg",
  },
  "sala-control": {
    file: "sala-control.jpg",
    alt: "Sala de control con varias pantallas de supervisión",
    caption: "Sala de control (control room): desde aquí se siguen las variables, alarmas y recetas del DCS/SCADA de toda la planta.",
    author: "PEO ACWA (U.S. Army)",
    license: "CC BY 2.0",
    commons: "Pueblo Chemical Agent-Destruction Pilot Plant Control Room (8748550756).jpg",
  },
  "sala-control-operadores": {
    file: "sala-control-operadores.jpg",
    alt: "Operadores trabajando en puestos con varias pantallas",
    caption: "Operadores de sala de control (control room operators): vigilan el proceso, responden a las alarmas y coordinan con el personal de campo.",
    author: "PEO ACWA (U.S. Army)",
    license: "CC BY 2.0",
    commons: "Blue Grass Chemical Agent-Destruction Pilot Plant Control Room Operators (33545979468).jpg",
  },
  "zonas-atex": {
    file: "zonas-atex.jpg",
    alt: "Esquema de un depósito con las zonas ATEX 0, 1 y 2 marcadas alrededor",
    caption: "Zonas ATEX alrededor de un depósito: zona 0 (atmósfera explosiva siempre o mucho tiempo, dentro), zona 1 (probable en funcionamiento normal) y zona 2 (rara y breve).",
    author: "Belsatex",
    license: "CC BY-SA 4.0",
    commons: "Zonas atex.jpg",
    kind: "esquema",
  },
  guantera: {
    file: "guantera.jpg",
    alt: "Caja de guantes de laboratorio con dos guantes largos",
    caption: "Caja de guantes o aislador (glovebox): el producto queda dentro de una caja cerrada y se manipula a través de guantes. Es la contención para sustancias muy potentes.",
    author: "Rune.welsh",
    license: "CC BY-SA 3.0",
    commons: "Glovebox.jpg",
  },
  "guantera-uso": {
    file: "guantera-uso.jpg",
    alt: "Persona con gafas trabajando con las manos dentro de una caja de guantes",
    caption: "Trabajo en caja de guantes (glovebox): antes de usarla se comprueba la integridad de los guantes y la presión de la caja.",
    author: "UCL Mathematical & Physical Sciences",
    license: "CC BY 3.0",
    commons: "Scientist using a glovebox.jpg",
  },
  "vitrina-gases": {
    file: "vitrina-gases.jpg",
    alt: "Vitrina de gases de laboratorio con la guillotina medio bajada",
    caption: "Vitrina de gases (fume hood): aspira los vapores lejos del usuario. Trabaja con la guillotina (sash) lo más baja posible.",
    author: "Desconocido",
    license: "PD",
    commons: "Fume hood.jpg",
  },
  "consignacion-loto": {
    file: "consignacion-loto.jpg",
    alt: "Candados y etiquetas de consignación colocados en un interruptor",
    caption: "Consignación (lockout/tagout, LOTO): cada persona que interviene pone su propio candado y su etiqueta. Mientras haya un candado, el equipo no se puede poner en marcha.",
    author: "NAVFAC (U.S. Navy)",
    license: "PD",
    commons: "Lockout Tagout (14853353063).jpg",
  },
  "estacion-consignacion": {
    file: "estacion-consignacion.jpg",
    alt: "Panel de pared con candados, etiquetas y dispositivos de bloqueo",
    caption: "Estación de consignación (lockout station): candados personales, etiquetas y bloqueos para válvulas e interruptores, siempre a mano.",
    author: "Henrysz",
    license: "CC BY 4.0",
    commons: "Lockout Station at National Synchrotron Light Source II.jpg",
  },
  cromatograma: {
    file: "cromatograma.jpg",
    alt: "Cromatograma con varios picos sobre una línea base y sus tiempos de retención",
    caption: "Cromatograma (chromatogram): cada pico es un compuesto. La posición (tiempo de retención, retention time) dice qué es; el área del pico dice cuánto hay.",
    author: "Heliagon",
    license: "CC BY-SA 3.0",
    commons: "Chromatogram in English.svg",
    kind: "esquema",
  },
  "hplc-equipo": {
    file: "hplc-equipo.jpg",
    alt: "Equipo de HPLC modular sobre una mesa, con su ordenador",
    caption: "Equipo de HPLC modular: botellas de fase móvil (mobile phase), bomba, inyector automático (autosampler), horno de columna y detector, apilados y controlados desde el ordenador.",
    author: "Dqwyy",
    license: "CC0",
    commons: "High-performance liquid chromatography.jpg",
  },
  "hplc-antiguo": {
    file: "hplc-antiguo.jpg",
    alt: "Equipo de HPLC antiguo de laboratorio",
    caption: "Otro HPLC (high-performance liquid chromatography): los módulos cambian según el fabricante, pero siempre están la bomba, el inyector, la columna y el detector.",
    author: "Kjaergaard",
    license: "PD",
    commons: "Hplc.JPG",
  },
  "balanza-analitica": {
    file: "balanza-analitica.jpg",
    alt: "Balanza analítica con cámara de pesada acristalada",
    caption: "Balanza analítica (analytical balance): pesa hasta 0,1 mg. Las puertas de cristal evitan que las corrientes de aire muevan la lectura.",
    author: "U.S. Drug Enforcement Administration",
    license: "PD",
    commons: "Analytical balance mettler ae-260.jpg",
  },
  "matraz-aforado": {
    file: "matraz-aforado.jpg",
    alt: "Matraz aforado con su tapón y la marca de enrase",
    caption: "Matraz aforado (volumetric flask): contiene un volumen exacto a la temperatura indicada cuando el menisco toca la línea de enrase.",
    author: "Hannes Grobe",
    license: "CC BY-SA 2.5",
    commons: "Volumetric flask hg.jpg",
  },
  "material-vidrio": {
    file: "material-vidrio.jpg",
    alt: "Probetas y vasos de precipitados de vidrio",
    caption: "Material de vidrio de laboratorio (laboratory glassware): probetas (graduated cylinders) y vasos de precipitados (beakers). Solo el material aforado sirve para medir volúmenes exactos.",
    author: "Ajay Kumar Chaurasiya",
    license: "CC BY-SA 4.0",
    commons: "Laboratory Glasswares.jpg",
  },
  "karl-fischer": {
    file: "karl-fischer.jpg",
    alt: "Valorador Karl Fischer con su celda de valoración",
    caption: "Valorador Karl Fischer (KF titrator): mide el agua de una muestra. El reactivo reacciona con el agua y un electrodo detecta el punto final.",
    author: "Datamax",
    license: "PD",
    commons: "KF Titrator.jpg",
  },
  phmetro: {
    file: "phmetro.jpg",
    alt: "pH-metro de sobremesa con electrodo",
    caption: "pH-metro (pH meter) con su electrodo. Se calibra cada día con tampones (buffers) de pH conocido antes de medir.",
    author: "OER CampLev",
    license: "CC BY-SA 4.0",
    commons: "PH-Meter METTLER TOLEDO FiveEasy.jpg",
  },
  "tabla-periodica": {
    file: "tabla-periodica.jpg",
    alt: "Tabla periódica de los elementos en español",
    caption: "Tabla periódica (periodic table). Cada casilla da el número atómico, el símbolo y la masa atómica; los colores agrupan familias con comportamiento parecido.",
    author: "2012rc; traducción de The Photographer",
    license: "CC BY 3.0",
    commons: "Periodic table large-es-updated-2018.svg",
    kind: "esquema",
  },
  "intercambiador-carcasa-tubos": {
    file: "intercambiador-carcasa-tubos.jpg",
    alt: "Intercambiador de carcasa y tubos instalado en una planta",
    caption: "Intercambiador de carcasa y tubos (shell and tube heat exchanger): un fluido va por dentro de los tubos y otro por fuera, dentro de la carcasa.",
    author: "Alnitak3",
    license: "CC BY-SA 4.0",
    commons: "Shell and tube heat exchanger.jpg",
  },
  "haz-tubular": {
    file: "haz-tubular.jpg",
    alt: "Haz de tubos de un intercambiador antes de montarlo",
    caption: "Haz tubular (tube bundle) antes del montaje. Las placas transversales (baffles) obligan al fluido de la carcasa a zigzaguear y mejoran el intercambio.",
    author: "Harald the Bard",
    license: "CC BY-SA 4.0",
    commons: "Tube bundle of a shell & tube heat exchanger (before assembly).jpg",
  },
  "purgador-vapor": {
    file: "purgador-vapor.jpg",
    alt: "Esquema en corte de un purgador de vapor de cubeta invertida",
    caption: "Purgador de vapor de cubeta invertida (steam trap): deja salir el condensado y retiene el vapor. Si falla, la camisa se llena de agua y calienta mal.",
    author: "Palagiri",
    license: "CC BY-SA 4.0",
    commons: "Inverted bucket steam trap-1.jpg",
    kind: "esquema",
  },
  "bomba-corte": {
    file: "bomba-corte.jpg",
    alt: "Bomba centrífuga seccionada mostrando el rodete y la voluta",
    caption: "Bomba centrífuga en corte (cut-away pump): el rodete (impeller) gira y lanza el líquido hacia la voluta (volute), que convierte la velocidad en presión.",
    author: "S.J. de Waard",
    license: "CC BY 2.5",
    commons: "Pump (Cut-Away).JPG",
  },
  "bomba-centrifuga-esquema": {
    file: "bomba-centrifuga-esquema.jpg",
    alt: "Esquema de una bomba centrífuga con aspiración central e impulsión lateral",
    caption: "Esquema de bomba centrífuga (centrifugal pump): el líquido entra por el centro (aspiración, suction) y sale por el lateral (impulsión, discharge).",
    author: "MokeryJ; Magasjukur2",
    license: "CC BY-SA 3.0",
    commons: "Centrifugal Pump.svg",
    kind: "esquema",
  },
  "columna-destilacion": {
    file: "columna-destilacion.jpg",
    alt: "Esquema de una columna de destilación con platos, condensador, calderín y reflujo, rotulado en español",
    caption: "Columna de destilación (distillation column): el calderín (reboiler) evapora, el condensador arriba condensa y parte del líquido vuelve como reflujo (reflux) para mejorar la separación.",
    author: "MAG; traducción de Senda1234",
    license: "CC BY-SA 4.0",
    commons: "Distillation Column (Tower)-es.png",
    kind: "esquema",
  },
  densimetro: {
    file: "densimetro.jpg",
    alt: "Densímetro flotando en una probeta con líquido",
    caption: "Densímetro de flotación (hydrometer): flota más alto cuanto más denso es el líquido. La lectura se hace en la escala, a la altura del menisco.",
    author: "SG0039",
    license: "CC0",
    commons: "Taking Hydrometer Reading.png",
    kind: "esquema",
  },
  "vestuario-sala-limpia": {
    file: "vestuario-sala-limpia.jpg",
    alt: "Sala de vestuario con banco divisorio, estanterías de prendas y espejo",
    caption: "Vestuario de sala limpia (gowning room): el banco separa el lado «sucio» del lado «limpio». Las prendas (mono, capucha, mascarilla, guantes, cubrebotas) se ponen en un orden fijo para no contaminarlas.",
    author: "M. Lopez / Rubin Observatory / NSF / AURA",
    license: "CC BY 4.0",
    commons: "Gowning Room October 2019 (rubin-gowning1-20191024).jpg",
  },
  "pid-real": {
    file: "pid-real.jpg",
    alt: "Diagrama de tuberías e instrumentos antiguo de un reactor experimental",
    caption: "Un P&ID real (piping and instrumentation diagram) de una instalación experimental de los años 50: equipos, líneas, válvulas e instrumentos con sus etiquetas.",
    author: "U.S. Atomic Energy Commission",
    license: "PD",
    commons: "Organic Moderated Reactor Experiment P&ID.jpg",
    kind: "esquema",
  },
  "destilacion-simple": {
    file: "destilacion-simple.jpg",
    alt: "Esquema rotulado en inglés de un montaje de destilación simple de laboratorio, con matraz, termómetro, refrigerante y colector",
    caption: "Montaje de destilación simple (simple distillation): el matraz se calienta, el vapor sube hasta el termómetro, se enfría en el refrigerante (condenser) y gotea en el colector. Así se separa un líquido de lo que lleva disuelto.",
    author: "Fadingblitz",
    license: "CC0",
    commons: "Simple distillation apparatus labelled.svg",
    kind: "esquema",
  },
  "aceite-agua": {
    file: "aceite-agua.jpg",
    alt: "Recipiente transparente con una capa de aceite flotando sobre agua",
    caption: "Aceite y agua no se mezclan (immiscible liquids): forman dos capas y el menos denso, el aceite, queda arriba. Es una mezcla heterogénea: se ven sus partes a simple vista.",
    author: "Linda116",
    license: "CC BY-SA 4.0",
    commons: "Oil and water don't mix.png",
  },
  "diagrama-fases-agua": {
    file: "diagrama-fases-agua.jpg",
    alt: "Diagrama de fases del agua con las zonas de sólido, líquido y gas, el punto triple y el punto crítico",
    caption: "Diagrama de fases del agua (phase diagram): para cada presión y temperatura dice si el agua es sólido, líquido o gas. Las líneas son los cambios de estado; el punto triple y el punto crítico son sus extremos. Ojo: el eje de presión es logarítmico.",
    author: "Cmglee; versión simplificada de Manlleus",
    license: "CC BY-SA 3.0",
    commons: "Phase diagram of water simplified.svg",
    kind: "esquema",
  },
  "modelo-bohr": {
    file: "modelo-bohr.jpg",
    alt: "Dibujo del modelo de Bohr con un núcleo y tres órbitas circulares; un electrón salta de una a otra y emite luz",
    caption: "Modelo atómico de Bohr (Bohr model): los electrones solo pueden estar en ciertas órbitas (n = 1, 2, 3…). Al bajar de una órbita a otra emiten luz de una energía fija (ΔE = hν). Es un modelo simplificado, pero explica los colores de los espectros.",
    author: "JabberWok (Wikipedia en inglés)",
    license: "CC BY-SA 3.0",
    commons: "Bohr atom model.svg",
    kind: "esquema",
  },
  "tabla-bloques": {
    file: "tabla-bloques.jpg",
    alt: "Tabla periódica con los elementos coloreados en cuatro bloques s, p, d y f",
    caption: "Tabla periódica por bloques (s, p, d and f blocks): el color indica en qué tipo de orbital entra el último electrón. Por eso los elementos de una misma columna se parecen.",
    author: "Double sharp, a partir de un trabajo de Offnfopt",
    license: "CC BY-SA 4.0",
    commons: "Simple Periodic Table Chart-blocks.svg",
    kind: "esquema",
  },
  "orbitales-atomicos": {
    file: "orbitales-atomicos.jpg",
    alt: "Nubes de probabilidad de los orbitales s, p, d y f para los niveles 1 a 4",
    caption: "Orbitales atómicos (atomic orbitals) del hidrógeno: no son órbitas, sino las zonas donde es probable encontrar al electrón. Los s son esféricos; los p, de dos lóbulos; los d y f, más complejos.",
    author: "Geek3",
    license: "CC BY-SA 4.0",
    commons: "Atomic-orbital-clouds spdf m0.png",
    kind: "esquema",
  },
  "regla-hund": {
    file: "regla-hund.jpg",
    alt: "Diagrama de cajas con la configuración del nitrógeno bien y mal rellenada",
    caption: "Regla de Hund (Hund's rule) con el nitrógeno: en los tres orbitales 2p los electrones se colocan primero de uno en uno y con el mismo espín (correct) antes de emparejarse (incorrect).",
    author: "CK-12 Foundation; vectorizado por Adrignola",
    license: "PD",
    commons: "Orbital diagram nitrogen - Hund's Rule.svg",
    kind: "esquema",
  },
  "nacl-red": {
    file: "nacl-red.jpg",
    alt: "Modelo de esferas de la red cristalina del cloruro de sodio, con esferas verdes y moradas alternadas",
    caption: "Red iónica del cloruro de sodio (sodium chloride crystal lattice): iones Na⁺ (morados) y Cl⁻ (verdes) alternados en un cubo. No hay moléculas sueltas, sino una red enorme unida por atracción eléctrica: por eso la sal funde a 801 °C.",
    author: "Benjah-bmm27",
    license: "PD",
    commons: "Sodium-chloride-3D-ionic.png",
    kind: "esquema",
  },
  "agua-dipolo": {
    file: "agua-dipolo.jpg",
    alt: "Molécula de agua angular con las cargas parciales y la flecha del momento dipolar",
    caption: "La molécula de agua es angular y polar (dipole moment): el oxígeno atrae más los electrones y queda con carga parcial negativa; los hidrógenos, positiva. De ahí que el agua disuelva bien las sales.",
    author: "Arcturus10",
    license: "CC BY-SA 4.0",
    commons: "Water molecule - structure and dipole moment.png",
    kind: "esquema",
  },
  "puentes-hidrogeno": {
    file: "puentes-hidrogeno.jpg",
    alt: "Modelo de moléculas de agua unidas por puentes de hidrógeno, rotulado en español",
    caption: "Puentes de hidrógeno entre moléculas de agua (hydrogen bonds): el hidrógeno de una molécula se atrae con el oxígeno de la vecina. Son mucho más débiles que un enlace, pero explican por qué el agua hierve a 100 °C.",
    author: "Magasjukur2; modificado por Alejandro Porto",
    license: "CC BY-SA 3.0",
    commons: "3D model hydrogen bonds in water-es.jpg",
    kind: "esquema",
  },
  "nacl-poliedros": {
    file: "nacl-poliedros.jpg",
    alt: "Estructura del cloruro de sodio con octaedros de coordinación alrededor de cada ion",
    caption: "Estructura del NaCl con sus poliedros de coordinación (coordination polyhedra): cada ion queda rodeado por seis del signo contrario formando un octaedro.",
    author: "Goran tek-en",
    license: "CC BY-SA 4.0",
    commons: "NaCl polyhedra.svg",
    kind: "esquema",
  },
  "curva-solubilidad-cuso4": {
    file: "curva-solubilidad-cuso4.jpg",
    alt: "Gráfica de la solubilidad del sulfato de cobre en agua frente a la temperatura, creciente",
    caption: "Curva de solubilidad (solubility curve) del sulfato de cobre: a más temperatura se disuelve más. Al enfriar una disolución saturada, lo que sobra cristaliza: es la base de la cristalización en planta.",
    author: "Baihuiqian",
    license: "CC BY-SA 3.0",
    commons: "Solubility curve of copper sulfate.png",
    kind: "esquema",
  },
  "indicador-azul-bromotimol": {
    file: "indicador-azul-bromotimol.jpg",
    alt: "Tres tubos con azul de bromotimol: amarillo, verde y azul",
    caption: "Indicador azul de bromotimol (bromothymol blue) en medio ácido (amarillo), neutro (verde) y básico (azul). Un indicador cambia de color en una zona concreta de pH.",
    author: "Brandon Fesser (bfesser)",
    license: "PD",
    commons: "Bromothymol blue colors.jpg",
  },
  "indicador-escala-ph": {
    file: "indicador-escala-ph.jpg",
    alt: "Matraces colocados en círculo con disoluciones de colores, del rojo al azul pasando por el amarillo y el verde",
    caption: "Escala de pH con un indicador universal (universal indicator): cada pH, de 0 a 14, da un color. Sirve para estimar el pH; para medirlo con exactitud se usa el pH-metro.",
    author: "TheChimist",
    license: "CC BY-SA 4.0",
    commons: "Colored pH indicator (circle).png",
  },
  "energia-catalizador": {
    file: "energia-catalizador.jpg",
    alt: "Diagrama de energía de una reacción con y sin catalizador",
    caption: "Perfil de energía de una reacción (reaction energy profile): los reactivos tienen que superar una barrera, la energía de activación (Ea). El catalizador (catalyst) ofrece un camino con una barrera más baja; el punto de partida y el de llegada no cambian.",
    author: "Smokefoot; vectorizado por D. Ilyin",
    license: "CC0",
    commons: "CatalysisScheme-en.svg",
    kind: "esquema",
  },
  "pila-daniell": {
    file: "pila-daniell.jpg",
    alt: "Dos vasos con disoluciones de cinc y de cobre unidos por un puente salino y un polímetro que marca 1,07 V",
    caption: "Pila Daniell (Daniell cell) montada en el laboratorio: el cinc se oxida (pierde electrones) y el cobre se reduce (los gana). Los electrones van por el cable y el polímetro mide la tensión: 1,07 V frente a los 1,10 V teóricos.",
    author: "Taweetham",
    license: "CC BY-SA 4.0",
    commons: "Daniell cell demonstration.jpg",
  },
  "pila-galvanica": {
    file: "pila-galvanica.jpg",
    alt: "Esquema de una pila galvánica con dos electrodos, un puente salino y el sentido de los electrones",
    caption: "Esquema de una pila galvánica (galvanic cell): en el ánodo hay oxidación y en el cátodo, reducción. La misma química explica la corrosión: el metal que se oxida se va disolviendo.",
    author: "Gringer, a partir de un dibujo de Tinux",
    license: "CC BY-SA 3.0",
    commons: "Galvanic Cell.svg",
    kind: "esquema",
  },
  "oxido-hierro": {
    file: "oxido-hierro.jpg",
    alt: "Superficie de hierro cubierta de óxido rojizo",
    caption: "Herrumbre sobre hierro (rust): el hierro se oxida con el oxígeno y el agua del aire. Es una reacción redox lenta que se come el metal; en planta se evita con acero inoxidable, vidriado o recubrimientos.",
    author: "Laitr Keiows",
    license: "CC BY-SA 3.0",
    commons: "Rust on iron.jpg",
  },
  "etanol-desarrollada": {
    file: "etanol-desarrollada.jpg",
    alt: "Fórmula desarrollada del etanol con todos sus átomos y enlaces",
    caption: "Fórmula desarrollada del etanol (structural formula): se dibujan todos los átomos y todos los enlaces. Es la más clara para empezar, pero ocupa mucho.",
    author: "Lukáš Mižoch",
    license: "PD",
    commons: "Ethanol-structure.svg",
    kind: "esquema",
  },
  "etanol-esqueleto": {
    file: "etanol-esqueleto.jpg",
    alt: "Fórmula de esqueleto del etanol: una línea en zigzag terminada en OH",
    caption: "Fórmula de esqueleto del etanol (skeletal formula): cada vértice y cada extremo de línea es un carbono, y los hidrógenos unidos al carbono no se dibujan. Es la forma habitual en fichas y certificados.",
    author: "Bryan Derksen",
    license: "PD",
    commons: "Ethanol-2D-skeletal.svg",
    kind: "esquema",
  },
  "embudo-decantacion": {
    file: "embudo-decantacion.jpg",
    alt: "Embudo de decantación en un soporte con una capa amarilla de aceite sobre agua coloreada",
    caption: "Embudo de decantación (separatory funnel): se agitan dos líquidos que no se mezclan, se dejan reposar y se separan las capas abriendo la llave de abajo. Es la extracción líquido-líquido del laboratorio.",
    author: "PRHaney",
    license: "CC BY-SA 3.0",
    commons: "Separatory funnel with oil and colored water.jpg",
  },
  rotavapor: {
    file: "rotavapor.jpg",
    alt: "Rotavapor de laboratorio con el matraz girando en un baño de agua y el refrigerante en espiral",
    caption: "Rotavapor (rotary evaporator): el matraz gira en un baño caliente y a vacío, así el disolvente se evapora rápido y a baja temperatura y se recoge condensado en otro matraz. Es la forma habitual de quitar el disolvente en el laboratorio.",
    author: "Gmhofmann",
    license: "PD",
    commons: "Rotationsverdampfer.jpg",
  },
  "destilacion-vacio-lab": {
    file: "destilacion-vacio-lab.jpg",
    alt: "Montaje de destilación a vacío de laboratorio sobre una mesa, con matraces, refrigerante y tubos",
    caption: "Destilación a vacío (vacuum distillation) en el laboratorio: al bajar la presión, el líquido hierve a menor temperatura y no se degrada. Es el mismo principio que una destilación a vacío en el reactor.",
    author: "KiveVictor",
    license: "CC BY 4.0",
    commons: "Laboratory vacuum distillation apparatus on a benchtop.jpg",
  },
  "quiralidad-manos": {
    file: "quiralidad-manos.jpg",
    alt: "Dos manos enfrentadas como en un espejo, cada una con una molécula de aminoácido",
    caption: "Quiralidad (chirality): las dos moléculas son imagen especular una de la otra, como la mano izquierda y la derecha, y no se pueden superponer. Son enantiómeros (enantiomers).",
    author: "Original de la NASA (autor desconocido); vectorizado por Perhelion",
    license: "PD",
    commons: "Chirality with hands.svg",
    kind: "esquema",
  },
  "paracetamol-cristales": {
    file: "paracetamol-cristales.jpg",
    alt: "Cristales de paracetamol de colores vistos al microscopio con luz polarizada",
    caption: "Cristales de paracetamol al microscopio con luz polarizada (polarized light microscopy). La forma y el tamaño del cristal (hábito, crystal habit) dependen de cómo se cristaliza, y una misma sustancia puede tener varias formas cristalinas (polimorfos).",
    author: "Rzhevsky Stanislav",
    license: "CC BY 4.0",
    commons: "Paracetamol crystals in polarized light.jpg",
  },
  "drx-difractograma": {
    file: "drx-difractograma.jpg",
    alt: "Gráfica de un difractograma de rayos X de polvo con varios picos estrechos",
    caption: "Difractograma de rayos X de polvo (X-ray powder diffraction pattern), simulado para el azul de Prusia. Cada forma cristalina da sus picos en posiciones propias: así se distinguen los polimorfos.",
    author: "ClioBatali",
    license: "CC BY-SA 4.0",
    commons: "Prussian Blue Powder XRD Profile, Simulated.jpg",
    kind: "esquema",
  },
  erlenmeyer: {
    file: "erlenmeyer.jpg",
    alt: "Matraz Erlenmeyer de vidrio vacío",
    caption: "Matraz Erlenmeyer (Erlenmeyer flask): su forma cónica deja agitar sin salpicar. Es el recipiente típico de las valoraciones; sus marcas de volumen son solo orientativas.",
    author: "Hannes Grobe",
    license: "CC BY-SA 2.5",
    commons: "Erlenmeyer flask hg.jpg",
  },
  "filtracion-vacio-esquema": {
    file: "filtracion-vacio-esquema.jpg",
    alt: "Esquema en corte de un embudo Büchner sobre un matraz Kitasato conectado al vacío",
    caption: "Filtración a vacío (vacuum filtration): el embudo Büchner con su papel encaja en el matraz Kitasato (Büchner flask) con una junta, y la salida lateral va al vacío. El líquido pasa abajo y el sólido queda en el papel.",
    author: "Benjah-bmm27",
    license: "PD",
    commons: "Vacuum-filtration-diagram.png",
    kind: "esquema",
  },
  kitasato: {
    file: "kitasato.jpg",
    alt: "Matraz Kitasato de 500 mL con su tubuladura lateral",
    caption: "Matraz Kitasato (Büchner flask): de vidrio grueso para aguantar el vacío, con una salida lateral donde se conecta la trompa o la bomba de vacío.",
    author: "Mike V. UCE",
    license: "CC BY-SA 4.0",
    commons: "Matraz Kitasato de 500 mL.jpg",
  },
  "pipeta-aforada": {
    file: "pipeta-aforada.jpg",
    alt: "Pipeta aforada de 50 mL con su bulbo central y la marca de enrase",
    caption: "Pipeta aforada (volumetric pipette) de 50 mL: tiene una sola marca y mide ese volumen con mucha exactitud. Se enrasa con el fondo del menisco a la altura de los ojos.",
    author: "Zelda F. Scott",
    license: "CC BY-SA 3.0",
    commons: "Volumetric pipette.JPG",
  },
  "bureta-esquema": {
    file: "bureta-esquema.jpg",
    alt: "Dibujo de una bureta vertical con su llave",
    caption: "Bureta (burette): tubo graduado con llave para añadir un líquido gota a gota y leer cuánto se ha gastado. Es el instrumento de las valoraciones.",
    author: "Lucasbosch",
    license: "CC BY-SA 3.0",
    commons: "Burette vertical.svg",
    kind: "esquema",
  },
  "pipeta-graduada": {
    file: "pipeta-graduada.jpg",
    alt: "Pipeta graduada de vidrio con escala a lo largo del tubo",
    caption: "Pipeta graduada (graduated pipette): tiene escala y permite medir distintos volúmenes, con menos exactitud que una pipeta aforada.",
    author: "Paweena.S",
    license: "CC BY-SA 4.0",
    commons: "Mohr pipette.jpg",
  },
  micropipeta: {
    file: "micropipeta.jpg",
    alt: "Micropipeta de laboratorio",
    caption: "Micropipeta (micropipette): mide volúmenes pequeños, de microlitros, con puntas desechables. Se ajusta el volumen en la rueda y se calibra periódicamente.",
    author: "Microrao",
    license: "CC BY-SA 4.0",
    commons: "Micropipette 2.jpg",
  },
  "valoracion-demostracion": {
    file: "valoracion-demostracion.jpg",
    alt: "Persona añadiendo líquido con una bureta a un matraz Erlenmeyer durante una demostración",
    caption: "Una valoración (titration) de verdad: la bureta añade el reactivo poco a poco sobre la muestra del matraz mientras se agita, hasta que el indicador cambia de color.",
    author: "UCL (University College London)",
    license: "CC BY 2.0",
    commons: "School level titration demonstration.jpg",
  },
  "valoracion-fenolftaleina": {
    file: "valoracion-fenolftaleina.jpg",
    alt: "Matraz Erlenmeyer con disolución rosa pálido tras una valoración con fenolftaleína",
    caption: "Punto final con fenolftaleína (phenolphthalein end point): la disolución pasa de incolora a rosa pálido que dura. Si queda rosa intenso, te has pasado.",
    author: "Usuario 384",
    license: "CC BY-SA 4.0",
    commons: "Phenolphthalein in Flask.jpg",
  },
  "curvas-valoracion-acido-debil": {
    file: "curvas-valoracion-acido-debil.jpg",
    alt: "Curvas de valoración de varios ácidos débiles con una base fuerte, con el salto en el punto de equivalencia",
    caption: "Curvas de valoración (titration curves) de un ácido débil con una base fuerte a varias concentraciones: el pH sube poco a poco y da un salto brusco en el punto de equivalencia (equivalence point). Cuanto más diluido, más pequeño el salto.",
    author: "Petergans",
    license: "CC BY-SA 4.0",
    commons: "Weak acid titrations.png",
    kind: "esquema",
  },
  desecador: {
    file: "desecador.jpg",
    alt: "Dos desecadores de vidrio, uno de ellos con llave de vacío, con gel de sílice azul en el fondo",
    caption: "Desecadores (desiccators): recipientes cerrados con un desecante (gel de sílice azul) en el fondo. Los crisoles y pesasustancias se enfrían dentro antes de pesar para que no cojan humedad del aire. El de la izquierda es de vacío.",
    author: "Rifleman 82 (Wikipedia en inglés)",
    license: "CC BY-SA 3.0",
    commons: "Desiccator.jpg",
  },
  mufla: {
    file: "mufla.jpg",
    alt: "Horno de mufla de laboratorio con la puerta cerrada",
    caption: "Horno de mufla (muffle furnace): este modelo llega a 1150 °C. Se usa para calcinar la muestra en un crisol y medir las cenizas o el residuo de calcinación.",
    author: "Cjp24",
    license: "CC BY-SA 3.0",
    commons: "Muffle furnace.jpg",
  },
  espectrofotometro: {
    file: "espectrofotometro.jpg",
    alt: "Espectrofotómetro UV-visible de sobremesa junto a un ordenador y un baño termostático",
    caption: "Espectrofotómetro UV-visible (UV-Vis spectrophotometer): mide cuánta luz de cada longitud de onda absorbe la muestra. Este modelo tiene control de temperatura de la cubeta.",
    author: "TimVickers",
    license: "PD",
    commons: "DU640 spectrophotometer.jpg",
  },
  "cubeta-espectrofotometro": {
    file: "cubeta-espectrofotometro.jpg",
    alt: "Mano colocando una cubeta de plástico en el portacubetas de un espectrofotómetro",
    caption: "Colocar la cubeta (cuvette) en el espectrofotómetro: se coge por las caras esmeriladas y las caras transparentes se orientan hacia el haz de luz. Una huella en la cara óptica falsea la lectura.",
    author: "KhomchatK",
    license: "CC BY-SA 4.0",
    commons: "Placing a cuvette in the spectrophotometry machine.jpg",
  },
  "espectro-ir-etanol": {
    file: "espectro-ir-etanol.jpg",
    alt: "Espectro infrarrojo del etanol con transmitancia frente a número de onda",
    caption: "Espectro infrarrojo del etanol (IR spectrum): la banda ancha hacia 3300 cm⁻¹ es el O–H, las de hacia 2900 cm⁻¹ son los C–H y la muy intensa hacia 1050 cm⁻¹, el C–O. Cada molécula da un patrón propio, como una huella dactilar.",
    author: "Andel",
    license: "CC0",
    commons: "EtOH IR.svg",
    kind: "esquema",
  },
  "espectro-electromagnetico": {
    file: "espectro-electromagnetico.jpg",
    alt: "Esquema del espectro electromagnético en español, de las ondas de radio a los rayos gamma",
    caption: "Espectro electromagnético (electromagnetic spectrum): la luz visible es una franja estrecha. Justo a su lado están el ultravioleta (UV), que usan los detectores de HPLC, y el infrarrojo (IR), que hace vibrar las moléculas.",
    author: "Crates, a partir del original de Inductiveload",
    license: "PD",
    commons: "EM Spectrum Properties es.svg",
    kind: "esquema",
  },
  transmitancia: {
    file: "transmitancia.jpg",
    alt: "Dibujo de un haz de luz que atraviesa una cubeta de concentración c y longitud l y sale más débil",
    caption: "Transmitancia y absorbancia (transmittance, absorbance): entra luz I₀ y sale I, más débil. Cuanto más concentrada la disolución (c) y más larga la cubeta (l), más absorbe: es la ley de Beer-Lambert.",
    author: "Marmot2019",
    license: "CC BY-SA 4.0",
    commons: "Transmittance.svg",
    kind: "esquema",
  },
  "tlc-secuencia": {
    file: "tlc-secuencia.jpg",
    alt: "Secuencia en cinco pasos de una placa de cromatografía en capa fina en su cubeta",
    caption: "Cromatografía en capa fina (thin-layer chromatography, TLC), paso a paso: se pone la muestra en la línea de base, la placa entra en la cubeta con el eluyente, que sube por capilaridad, y cada compuesto avanza una distancia distinta.",
    author: "Quantockgoblin; trabajo derivado de Shakiestone",
    license: "PD",
    commons: "Tlc sequence.svg",
    kind: "esquema",
  },
  "tlc-tinta": {
    file: "tlc-tinta.jpg",
    alt: "Placa de capa fina con la tinta negra separada en manchas de varios colores",
    caption: "Tinta negra separada en una placa de TLC (TLC plate): lo que parecía un solo color son varios colorantes que suben a distinta velocidad.",
    author: "Natrij (Wikipedia en inglés)",
    license: "CC BY-SA 3.0",
    commons: "TLC black ink.jpg",
  },
  "tlc-uv": {
    file: "tlc-uv.jpg",
    alt: "Placa de capa fina iluminada con luz ultravioleta en la que se ven manchas oscuras",
    caption: "Placa de TLC bajo luz ultravioleta (UV visualization): la placa lleva un indicador que brilla y los compuestos aparecen como manchas oscuras. Se comparan con un patrón para saber si son lo mismo.",
    author: "CharacterLook8405",
    license: "CC0",
    commons: "TLC Plate - Feb 2024.jpg",
  },
  "cromatografo-gases": {
    file: "cromatografo-gases.jpg",
    alt: "Sistema de cromatografía de gases de laboratorio con varios módulos",
    caption: "Sistema de cromatografía de gases (gas chromatograph) de laboratorio, aquí para medir acrilonitrilo en el aire. Los equipos actuales son más compactos, pero mantienen las partes: inyector, horno con la columna y detector.",
    author: "Linda Bartlett (National Cancer Institute)",
    license: "PD",
    commons: "Gas chromatograph.jpg",
  },
  "cromatografo-gases-esquema": {
    file: "cromatografo-gases-esquema.jpg",
    alt: "Esquema de un cromatógrafo de gases: botella de gas portador, inyector, columna en el horno, detector y registro",
    caption: "Esquema de un cromatógrafo de gases (GC): el gas portador (carrier gas) arrastra la muestra vaporizada por la columna, dentro de un horno, y el detector señala cada compuesto al salir.",
    author: "Offnfopt, a partir de un dibujo de Rune Welsh",
    license: "PD",
    commons: "Gas chromatograph-vector.svg",
    kind: "esquema",
  },
  "gc-ms": {
    file: "gc-ms.jpg",
    alt: "Cromatógrafo de gases con espectrómetro de masas con la puerta del horno abierta",
    caption: "Cromatógrafo de gases acoplado a masas (GC-MS) con la puerta abierta: dentro del horno se ve la columna enrollada. El espectrómetro de masas identifica cada compuesto por su masa.",
    author: "Polimerek",
    license: "CC BY-SA 4.0",
    commons: "GCMS open.jpg",
  },
  "rmn-etanol": {
    file: "rmn-etanol.jpg",
    alt: "Espectro de RMN de protón del etanol con sus grupos de picos",
    caption: "Espectro de RMN de protón del etanol (¹H NMR spectrum): cada grupo de picos corresponde a hidrógenos en un entorno distinto (CH₃, CH₂ y OH). Sirve para confirmar la estructura de una molécula.",
    author: "Andel",
    license: "CC0",
    commons: "1H NMR Ethanol Coupling shown.svg",
    kind: "esquema",
  },
  "punto-fusion": {
    file: "punto-fusion.jpg",
    alt: "Vista de cerca a través de la lupa de un aparato de punto de fusión, con el capilar iluminado dentro del bloque caliente",
    caption: "Lo que se ve por la lupa de un aparato de punto de fusión (melting point apparatus): el capilar con la muestra dentro del bloque caliente. Se calienta despacio y se anota a qué temperatura empieza y termina de fundir. Un producto impuro funde antes y en un intervalo más ancho.",
    author: "IreBerte",
    license: "CC BY 4.0",
    commons: "Melting Point.jpg",
  },
  "dsc-termograma": {
    file: "dsc-termograma.jpg",
    alt: "Termograma de DSC con un pico ancho de calor desprendido",
    caption: "Termograma de DSC (differential scanning calorimetry) de un adhesivo de resina epoxi calentado a 10 °C/min bajo nitrógeno: el pico es el calor desprendido (exotérmico) al curar la resina. En un API la fusión también sale como un pico, pero de calor absorbido (endotérmico).",
    author: "Cjp24",
    license: "PD",
    commons: "Crosslinking-DSC.png",
    kind: "esquema",
  },
  "viscosimetro-ubbelohde": {
    file: "viscosimetro-ubbelohde.jpg",
    alt: "Viscosímetro capilar de Ubbelohde de vidrio montado en un laboratorio",
    caption: "Viscosímetro capilar de Ubbelohde (Ubbelohde viscometer): se mide el tiempo que tarda el líquido en bajar entre dos marcas; multiplicado por la constante del viscosímetro da la viscosidad cinemática.",
    author: "Vis M",
    license: "CC BY-SA 4.0",
    commons: "Ubbelohde viscometer at Lab.jpg",
  },
  tamices: {
    file: "tamices.jpg",
    alt: "Tres tamices de laboratorio de distinta luz de malla",
    caption: "Tamices de laboratorio (test sieves) de 1700, 500 y 250 µm: cada malla deja pasar las partículas más pequeñas que su abertura.",
    author: "BMK",
    license: "CC BY-SA 3.0",
    commons: "Laboratory sieves BMK.jpg",
  },
  tamizadora: {
    file: "tamizadora.jpg",
    alt: "Tamizadora de laboratorio con una columna de tamices apilados",
    caption: "Tamizadora (sieve shaker) con la columna de tamices: arriba el de malla más gruesa y abajo el más fino. Se pesa lo que queda en cada tamiz para obtener la distribución de tamaños.",
    author: "Hannes Grobe",
    license: "CC BY 3.0",
    commons: "Sieve-ro-tap hg.jpg",
  },
  microscopio: {
    file: "microscopio.jpg",
    alt: "Microscopio óptico de laboratorio escolar",
    caption: "Microscopio óptico (light microscope): con aumentos de hasta unas 1000 veces permite ver bacterias y levaduras, que a simple vista son invisibles.",
    author: "Kvr.lohith",
    license: "CC BY-SA 4.0",
    commons: "Microscope - school laboratory (1).jpg",
  },
  "placa-agar-revision": {
    file: "placa-agar-revision.jpg",
    alt: "Investigadora sosteniendo una placa de Petri con colonias a contraluz",
    caption: "Revisión de una placa de Petri (Petri dish) con agar: cada punto es una colonia (colony) formada por millones de bacterias a partir de una sola.",
    author: "David McClenaghan, CSIRO",
    license: "CC BY 3.0",
    commons: "CSIRO ScienceImage 3567 Examining an agar dish for bacterial colonies as part of the bioremediation project.jpg",
  },
  "placa-colonias": {
    file: "placa-colonias.jpg",
    alt: "Placa de Petri con muchas colonias blancas pequeñas sobre agar",
    caption: "Colonias sobre agar en placa de Petri: en un recuento cada colonia cuenta como una unidad formadora de colonias (UFC, colony forming unit, CFU), porque nace de una célula o espora viable.",
    author: "USDA Forest Service, Región 6 (Forest Health Protection)",
    license: "PD",
    commons: "1963. Colonies of Bt on agar in petri dish. Each colony represents a viable spore. Corvallis, OR. (34581728012).jpg",
  },
  autoclave: {
    file: "autoclave.jpg",
    alt: "Autoclave de sobremesa de laboratorio con la puerta abierta",
    caption: "Autoclave de laboratorio (autoclave): esteriliza con vapor a presión, normalmente a 121 °C. Se usa para los medios de cultivo, el material y los residuos biológicos.",
    author: "Nadina Wiórkiewicz (Nadine90)",
    license: "CC BY-SA 3.0",
    commons: "Laboratory autoclave (cropped).jpg",
  },
  "cabina-flujo-laminar": {
    file: "cabina-flujo-laminar.jpg",
    alt: "Persona trabajando con guantes dentro de una cabina de flujo laminar",
    caption: "Trabajo en cabina de flujo laminar (laminar flow cabinet): el aire filtrado HEPA barre la superficie de trabajo para no contaminar la muestra. Las manos y los objetos se mueven despacio para no romper el flujo.",
    author: "Sunmosk",
    license: "CC BY 4.0",
    commons: "Working inside the laminar flow cabinet.jpg",
  },
} satisfies Record<string, MediaImage>;

export type ImageId = keyof typeof images;

export interface Sign {
  file: string;
  code: string;
  label: string;
  commons: string;
}

const iso = (code: string, label: string): Sign => ({
  file: `iso7010-${code}.png`,
  code: `ISO 7010 ${code}`,
  label,
  commons: `ISO 7010 ${code}.svg`,
});

export const signs = {
  E002: iso("E002", "Salida de emergencia"),
  E003: iso("E003", "Primeros auxilios"),
  E011: iso("E011", "Lavaojos de emergencia"),
  E012: iso("E012", "Ducha de seguridad"),
  M003: iso("M003", "Protección auditiva obligatoria"),
  M004: iso("M004", "Protección ocular obligatoria"),
  M008: iso("M008", "Calzado de seguridad obligatorio"),
  M009: iso("M009", "Guantes de protección obligatorios"),
  M010: iso("M010", "Ropa de protección obligatoria"),
  M013: iso("M013", "Pantalla facial obligatoria"),
  M014: iso("M014", "Casco obligatorio"),
  M016: iso("M016", "Mascarilla obligatoria"),
  M017: iso("M017", "Protección respiratoria obligatoria"),
  M021: iso("M021", "Desconectar antes de mantenimiento o reparación"),
  P002: iso("P002", "Prohibido fumar"),
  P003: iso("P003", "Prohibido llamas abiertas, fuego y fumar"),
  P011: iso("P011", "No apagar con agua"),
  P022: iso("P022", "Prohibido comer y beber"),
  W001: iso("W001", "Peligro general"),
  W012: iso("W012", "Riesgo eléctrico"),
  W016: iso("W016", "Materias tóxicas"),
  W021: iso("W021", "Materias inflamables"),
  W023: iso("W023", "Materias corrosivas"),
  W029: iso("W029", "Botellas de gas a presión"),
  EX: {
    file: "ex-atex.png",
    code: "Marcado Ex",
    label: "Marcado de equipo apto para atmósferas explosivas (en su placa)",
    commons: "EX-logo.svg",
  },
} satisfies Record<string, Sign>;

export type SignId = keyof typeof signs;

/** Autoría de las señales (todas de Wikimedia Commons, dominio público). */
export const signCredit = (id: SignId) =>
  id === "EX"
    ? { author: "Christophe Yamahata", license: "PD" as LicenseKey }
    : { author: "Comunidad Wikimedia, según la norma ISO 7010", license: "PD" as LicenseKey };

export interface Video {
  /** Id del vídeo en YouTube. */
  id: string;
  title: string;
  channel: string;
  lang: "es" | "en";
  /** Duración, mm:ss. */
  duration: string;
  /** Por qué verlo y en qué fijarse. */
  why: string;
}

/**
 * Simulación interactiva PhET (Universidad de Colorado Boulder), en español. Se carga dentro de la lección al pulsar.
 * Las versiones publicadas desde marzo de 2026 tienen licencia CC BY-NC 4.0 (uso no comercial): válida para esta edición
 * personal; para la edición de operador habrá que revisarlo.
 */
export interface Sim {
  /** Nombre de la simulación en la web de PhET (p. ej. "ph-scale"). */
  sim: string;
  title: string;
  /** Qué hacer con ella y en qué fijarse. */
  why: string;
}

export const phetUrl = (sim: string) => `https://phet.colorado.edu/sims/html/${sim}/latest/${sim}_es.html`;
export const phetPage = (sim: string) => `https://phet.colorado.edu/es/simulations/${sim}`;
export const phetCredit = "PhET Interactive Simulations, University of Colorado Boulder (phet.colorado.edu), CC BY-NC 4.0";

export interface LessonMedia {
  images?: ImageId[];
  /** Simulaciones interactivas PhET. */
  sims?: Sim[];
  /** Muestra la tabla de los 9 pictogramas oficiales GHS/CLP. */
  ghs?: boolean;
  signs?: { title: string; ids: SignId[] }[];
  videos?: Video[];
}

const enNote = "En inglés: activa los subtítulos automáticos en español (rueda dentada › Subtítulos › Traducir automáticamente).";
export const englishVideoNote = enNote;

export const lessonMedia: Record<string, LessonMedia> = {
  "planta-de-api": {
    images: ["planta-reactores", "reactores-encamisados", "sala-control-operadores", "planta-bidones-api"],
    videos: [
      {
        id: "ftnLJ6VDwS8",
        title: "Batch Reactor (animación)",
        channel: "ChemicalEngineering",
        lang: "en",
        duration: "0:43",
        why: "Animación corta de un reactor discontinuo (por lotes): carga, agitación, calentamiento por camisa y descarga. Es la unidad básica de una planta de API.",
      },
    ],
  },
  "pictogramas-y-fds": {
    ghs: true,
    signs: [{ title: "Señales de advertencia que verás en planta (ISO 7010)", ids: ["W001", "W016", "W021", "W023", "W029"] }],
    videos: [
      {
        id: "MmE9Z37Qsro",
        title: "¿Qué significan los pictogramas CLP?",
        channel: "QUIMI-REACH",
        lang: "es",
        duration: "1:40",
        why: "Repaso rápido de los nueve pictogramas y de qué peligro indica cada uno.",
      },
      {
        id: "7Nwbls5igDc",
        title: "Clasificación, etiquetado y envasado de sustancias (CLP)",
        channel: "Universitat Politècnica de València (UPV)",
        lang: "es",
        duration: "7:38",
        why: "Explica cómo se lee una etiqueta CLP: palabra de advertencia, frases H y P, pictogramas e identificador del proveedor.",
      },
    ],
  },
  epi: {
    images: ["epi-gafas", "epi-guante-nitrilo", "epi-semimascara"],
    signs: [
      {
        title: "Señales de obligación (azules, ISO 7010)",
        ids: ["M004", "M013", "M009", "M017", "M016", "M010", "M008", "M014", "M003"],
      },
    ],
    videos: [
      {
        id: "lYkBEfhCBlo",
        title: "Mascarillas autofiltrantes frente a partículas",
        channel: "INSST (Instituto Nacional de Seguridad y Salud en el Trabajo)",
        lang: "es",
        duration: "8:55",
        why: "Del organismo oficial español: tipos FFP1/FFP2/FFP3, cómo ponérsela y cómo comprobar el ajuste.",
      },
    ],
  },
  "emergencias-y-residuos": {
    images: ["emergencia-ducha-lavaojos", "emergencia-equipos"],
    signs: [
      { title: "Señales de salvamento (verdes, ISO 7010)", ids: ["E011", "E012", "E003", "E002"] },
      { title: "Prohibición", ids: ["P011"] },
    ],
    videos: [
      {
        id: "kgZsu3Tbylw",
        title: "Señalización de seguridad",
        channel: "INSST",
        lang: "es",
        duration: "13:45",
        why: "Colores y formas de las señales (prohibición, obligación, advertencia, salvamento y lucha contra incendios) según el RD 485/1997.",
      },
    ],
  },
  "tuberias-y-valvulas": {
    images: ["valvula-bola", "valvula-mariposa", "valvula-asiento-esquema", "valvula-diafragma-corte", "mirilla"],
    videos: [
      {
        id: "dOf2qRBM83k",
        title: "Tipos de válvulas",
        channel: "Mundoindustrial",
        lang: "es",
        duration: "12:01",
        why: "Recorre bola, mariposa, compuerta, globo, retención y diafragma, con cortes animados de cómo se mueve cada una.",
      },
    ],
  },
  "reactor-y-servicios": {
    images: ["reactor-agitado-esquema", "reactor-vidriado-corte", "reactor-vidriado-interior", "reactores-encamisados", "reactor-media-cana", "reactor-serpentin-interno"],
    videos: [
      {
        id: "ftnLJ6VDwS8",
        title: "Batch Reactor (animación)",
        channel: "ChemicalEngineering",
        lang: "en",
        duration: "0:43",
        why: "Cómo circula el fluido térmico por la camisa y cómo se mezcla la masa en un reactor por lotes.",
      },
      {
        id: "ZO2WOWJv2pI",
        title: "Spark test en un reactor vidriado",
        channel: "De Dietrich Process Systems",
        lang: "en",
        duration: "1:27",
        why: "El fabricante enseña la prueba de chispa (spark test) que detecta poros o grietas en el vidrio. Así se ve lo delicado que es el revestimiento.",
      },
    ],
  },
  "carga-e-inertizacion": {
    images: ["bomba-bidon", "celula-carga", "mirilla"],
    signs: [{ title: "Señales relacionadas", ids: ["W021", "W029"] }],
    videos: [
      {
        id: "RqbPqgmWNwU",
        title: "Nitrogen – Tank Entry",
        channel: "Methanex",
        lang: "en",
        duration: "1:42",
        why: "Por qué el nitrógeno que usamos para inertizar es peligroso para las personas: no huele, no se ve y desplaza el oxígeno. Nunca asomarse a una boca de hombre inertizada.",
      },
    ],
  },
  "calor-de-reaccion": {
    images: ["disco-ruptura", "valvula-seguridad"],
    videos: [
      {
        id: "C561PCq5E1g",
        title: "Fugitivo: explosión en los Laboratorios T2",
        channel: "U.S. Chemical Safety Board (CSB)",
        lang: "es",
        duration: "9:29",
        why: "Caso real de reacción descontrolada (runaway) en un reactor por lotes al fallar la refrigeración. Explica por qué se vigila la temperatura y por qué existen el disco de ruptura y la válvula de seguridad.",
      },
    ],
  },
  centrifuga: {
    images: ["centrifugas-cesta-historicas", "cesta-centrifuga"],
    videos: [
      {
        id: "sFi5PDqdFbM",
        title: "Krauss-Maffei HZ Peeler centrifuge: principio de funcionamiento",
        channel: "ANDRITZ",
        lang: "en",
        duration: "3:02",
        why: "Animación del ciclo completo de una centrífuga horizontal de pelador: llenado, centrifugado, lavado de la torta, secado por giro y descarga con la cuchilla (peeler).",
      },
      {
        id: "n7EAXXX1pF4",
        title: "Vertical peeler centrifuge (animación)",
        channel: "HEINKEL",
        lang: "en",
        duration: "2:00",
        why: "La versión vertical, muy común en plantas de API. Compara cómo se descarga la torta con la del vídeo anterior.",
      },
    ],
  },
  filtros: {
    images: ["nutsche-encamisado", "filtro-secador-anfd", "buchner", "filtro-prensa"],
    videos: [
      {
        id: "90nsS5daZJI",
        title: "How ANFD works",
        channel: "Mechanim",
        lang: "en",
        duration: "3:02",
        why: "Animación de un filtro-secador agitado: filtración con presión, lavado de la torta, alisado con el agitador, secado y descarga.",
      },
    ],
  },
  secaderos: {
    images: ["filtro-secador-anfd-2", "estufa-vacio", "lecho-fluido", "liofilizador-bandejas"],
    videos: [
      {
        id: "Z5wVWJxH2Ss",
        title: "Secador cónico de vacío (tipo Nauta)",
        channel: "Prolific 3D Tech",
        lang: "es",
        duration: "1:16",
        why: "Un tornillo recorre la pared de un cono y remueve el polvo mientras la camisa calienta y el vacío arrastra el disolvente.",
      },
      {
        id: "80VhS6rH4WQ",
        title: "Rotocone vacuum dryer",
        channel: "Prolific 3D Tech",
        lang: "en",
        duration: "1:51",
        why: "Secador de doble cono que gira entero (sin agitador). Fíjate en la entrada de vacío por el eje y en la descarga por abajo.",
      },
    ],
  },
  "medidas-de-proceso": {
    images: ["manometro", "termopar", "caudalimetro-coriolis", "radar-nivel", "celula-carga"],
    videos: [
      {
        id: "zS77qnlEPg0",
        title: "Pressure Transmitter Explained",
        channel: "RealPars",
        lang: "en",
        duration: "5:33",
        why: "Qué hay dentro de un transmisor de presión y la diferencia entre presión absoluta, relativa (manométrica) y diferencial.",
      },
      {
        id: "4mQ3o1t4Ssg",
        title: "Temperature Sensor Types",
        channel: "RealPars",
        lang: "en",
        duration: "11:20",
        why: "Termopares, sondas RTD (Pt100) y termistores: cómo funcionan y cuándo se usa cada uno.",
      },
    ],
  },
  "dcs-scada-recetas": {
    images: ["sala-control", "sala-control-operadores"],
    videos: [
      {
        id: "jXRksET5vNo",
        title: "What is DCS?",
        channel: "RealPars",
        lang: "en",
        duration: "8:29",
        why: "Qué es un sistema de control distribuido, cómo se reparte entre controladores, red y pantallas de operador, y en qué se diferencia de un PLC con SCADA.",
      },
    ],
  },
  "alarmas-y-enclavamientos": {
    images: ["radar-nivel", "sala-control"],
    videos: [
      {
        id: "YpI62uNSNXw",
        title: "BP Texas City (animación en español)",
        channel: "U.S. Chemical Safety Board (CSB)",
        lang: "es",
        duration: "6:20",
        why: "Una columna se llenó de más porque el nivel y la alarma de nivel alto no avisaron bien. Muestra por qué no se ignoran ni se puentean alarmas.",
      },
    ],
  },
  "incendio-y-atex": {
    images: ["zonas-atex", "lecho-fluido"],
    signs: [{ title: "Señales y marcado", ids: ["EX", "W021", "P003", "P002"] }],
    videos: [
      {
        id: "Jg7mLSG-Yws",
        title: "Infierno: explosión de polvo en Imperial Sugar",
        channel: "U.S. Chemical Safety Board (CSB)",
        lang: "es",
        duration: "9:29",
        why: "Explosión de polvo de azúcar acumulado. Cualquier polvo orgánico fino (también muchos API) puede explotar: limpieza y control de fuentes de ignición.",
      },
    ],
  },
  "exposicion-y-contencion": {
    images: ["guantera", "guantera-uso", "vitrina-gases", "epi-semimascara"],
    signs: [{ title: "Señales relacionadas", ids: ["W016", "M017"] }],
  },
  "permisos-y-consignacion": {
    images: ["consignacion-loto", "estacion-consignacion"],
    signs: [{ title: "Señales relacionadas", ids: ["M021", "W012"] }],
    videos: [
      {
        id: "cpDAIcChnf8",
        title: "Manejo de energías peligrosas: bloqueo y etiquetado (LOTO)",
        channel: "Steelpro Colombia",
        lang: "es",
        duration: "5:02",
        why: "Los pasos de la consignación: avisar, parar, aislar, bloquear con candado, etiquetar y comprobar energía cero antes de intervenir.",
      },
    ],
  },
  "toma-de-muestras": {
    images: ["planta-bidones-api", "guantera"],
  },
  "mantenimiento-gmp": {
    images: ["estacion-consignacion", "disco-ruptura"],
  },
  "alcoa-plus": {
    videos: [
      {
        id: "AeCGy7PeYo0",
        title: "ALCOA y ALCOA+ en la industria farmacéutica",
        channel: "Pharmaguideline",
        lang: "es",
        duration: "5:24",
        why: "Repasa uno a uno los principios de integridad de datos con ejemplos de registros bien y mal hechos.",
      },
    ],
  },
  "buenas-practicas-documentacion": {
    videos: [
      {
        id: "2gHjlnthU0Y",
        title: "GMP: las buenas prácticas documentales",
        channel: "GxP Plus Capacitación",
        lang: "es",
        duration: "3:28",
        why: "Cómo se escribe y se corrige un registro GMP: tinta indeleble, tachar con una línea, fecha, firma y motivo.",
      },
    ],
  },
  "gmp-e-ich-q7": {
    images: ["planta-bidones-api"],
    videos: [
      {
        id: "JnYULkE2neU",
        title: "Buenas prácticas de manufactura",
        channel: "Superintendencia de Regulación Sanitaria (El Salvador)",
        lang: "es",
        duration: "4:39",
        why: "Introducción de una autoridad sanitaria a qué son las GMP y por qué protegen al paciente.",
      },
    ],
  },
  "el-mol": {
    videos: [
      {
        id: "Mc3-NpQWWZA",
        title: "¿Qué es un mol?",
        channel: "Breaking Vlad",
        lang: "es",
        duration: "5:29",
        why: "Explica el mol como «una docena muy grande» y cómo pasar de gramos a moles con la masa molar.",
      },
    ],
  },
  densidad: {
    images: ["densimetro"],
    videos: [
      {
        id: "hKrDXOqGvBA",
        title: "Densidad, masa y volumen",
        channel: "Susi Profe",
        lang: "es",
        duration: "9:25",
        why: "Ejercicios resueltos de densidad paso a paso, con cambio de unidades.",
      },
    ],
  },
  "densidad-viscosidad": { images: ["densimetro", "viscosimetro-ubbelohde"] },
  "atomos-y-tabla-periodica": { images: ["tabla-periodica", "modelo-bohr", "tabla-bloques"] },
  "acidos-bases-ph": { images: ["phmetro", "indicador-azul-bromotimol"] },
  "potenciometria-conductimetria": { images: ["phmetro"] },
  "balanzas-y-pesada": { images: ["balanza-analitica"] },
  "material-volumetrico": { images: ["matraz-aforado", "material-vidrio", "pipeta-aforada", "bureta-esquema"] },
  "material-y-seguridad-laboratorio": {
    images: ["material-vidrio", "vitrina-gases", "epi-gafas", "erlenmeyer"],
    signs: [{ title: "Señales del laboratorio", ids: ["P022", "M004", "M009", "E011"] }],
  },
  "cromatografia-principios": { images: ["cromatograma", "tlc-secuencia", "tlc-tinta"] },
  hplc: {
    images: ["hplc-equipo", "hplc-antiguo", "cromatograma"],
    videos: [
      {
        id: "_wbzerZFrcc",
        title: "Cromatografía líquida de alta eficacia (HPLC)",
        channel: "Universitat Politècnica de València (UPV)",
        lang: "es",
        duration: "10:03",
        why: "Partes del equipo, fase móvil y estacionaria, y cómo se interpreta el cromatograma.",
      },
      {
        id: "SWL89H5CBUI",
        title: "HPLC explicado",
        channel: "Daura Vega-Moreno (ULPGC)",
        lang: "es",
        duration: "5:13",
        why: "Resumen de una profesora universitaria: separación por afinidad con la columna y detección.",
      },
    ],
  },
  "karl-fischer": {
    images: ["karl-fischer"],
    videos: [
      {
        id: "DdnHVQXp948",
        title: "Método Karl Fischer explicado paso a paso",
        channel: "Scharlab",
        lang: "es",
        duration: "2:08",
        why: "Del fabricante de reactivos: diferencia entre KF volumétrico y culombimétrico y cómo se hace una determinación.",
      },
    ],
  },
  bombas: {
    images: ["bomba-corte", "bomba-centrifuga-esquema"],
    videos: [
      {
        id: "pOGPmAhwa1U",
        title: "Principios básicos de la bomba centrífuga",
        channel: "Mentalidad De Ingeniería",
        lang: "es",
        duration: "10:36",
        why: "Animación 3D del rodete y la voluta, curvas de la bomba y por qué no se debe hacer funcionar en seco ni con la impulsión cerrada mucho tiempo.",
      },
    ],
  },
  "calor-vapor-intercambiadores": {
    images: ["intercambiador-carcasa-tubos", "haz-tubular", "purgador-vapor"],
    videos: [
      {
        id: "wvreJ3oLsD8",
        title: "Intercambiadores de calor industriales",
        channel: "Mentalidad De Ingeniería",
        lang: "es",
        duration: "12:54",
        why: "Carcasa y tubos, placas y otros tipos, con animaciones de por dónde va cada fluido.",
      },
    ],
  },
  destilacion: {
    images: ["columna-destilacion"],
    videos: [
      {
        id: "hBd8vqyxwps",
        title: "Columnas de destilación fraccionada: partes",
        channel: "El aula de Cinthia Reyes",
        lang: "es",
        duration: "4:42",
        why: "Recorre las partes de la columna (calderín, platos, condensador, reflujo) con un esquema.",
      },
    ],
  },
  "vestimenta-y-comportamiento": {
    images: ["vestuario-sala-limpia"],
    videos: [
      {
        id: "uvhaPu1-fdE",
        title: "Aseptic Gowning for the Cleanroom",
        channel: "BioNetwork",
        lang: "en",
        duration: "14:45",
        why: "Demostración completa del vestido para sala limpia: lavado de manos, orden de las prendas y cómo no tocar la cara externa del mono.",
      },
    ],
  },
  "salas-limpias": { images: ["vestuario-sala-limpia"] },
  "pid-y-simbologia": { images: ["pid-real", "valvula-asiento-esquema", "reactor-agitado-esquema"] },
  "la-materia": { images: ["destilacion-simple", "aceite-agua"] },
  "materia-a-fondo": { images: ["diagrama-fases-agua", "aceite-agua"] },
  "atomos-a-fondo": { images: ["orbitales-atomicos", "regla-hund", "tabla-bloques"] },
  "enlaces-y-polaridad": { images: ["nacl-red", "agua-dipolo"] },
  "enlaces-a-fondo": { images: ["puentes-hidrogeno", "nacl-poliedros", "agua-dipolo"] },
  disoluciones: { images: ["curva-solubilidad-cuso4"] },
  "disoluciones-a-fondo": { images: ["curva-solubilidad-cuso4", "filtracion-vacio-esquema"] },
  "acidos-bases-a-fondo": { images: ["indicador-escala-ph", "indicador-azul-bromotimol"] },
  "velocidad-y-catalisis": { images: ["energia-catalizador"] },
  "cinetica-a-fondo": { images: ["energia-catalizador"] },
  "oxidacion-reduccion": { images: ["pila-daniell"] },
  "redox-a-fondo": { images: ["pila-galvanica", "oxido-hierro"] },
  "carbono-y-formulas": { images: ["etanol-desarrollada", "etanol-esqueleto"] },
  "organica-a-fondo": { images: ["etanol-esqueleto", "etanol-desarrollada"] },
  "disolventes-organicos": { images: ["embudo-decantacion"] },
  "disolventes-a-fondo": { images: ["rotavapor", "destilacion-vacio-lab"] },
  "isomeros-y-quiralidad": { images: ["quiralidad-manos"] },
  "quiralidad-a-fondo": { images: ["quiralidad-manos"] },
  "polimorfismo-y-sales": { images: ["paracetamol-cristales"] },
  "polimorfismo-a-fondo": { images: ["paracetamol-cristales", "drx-difractograma"] },
  "laboratorio-seguridad-a-fondo": { images: ["filtracion-vacio-esquema", "kitasato", "erlenmeyer"] },
  "volumetrico-a-fondo": { images: ["pipeta-aforada", "pipeta-graduada", "micropipeta"] },
  "preparacion-muestra-a-fondo": { images: ["micropipeta", "embudo-decantacion"] },
  "volumetrias-acido-base": { images: ["valoracion-demostracion", "valoracion-fenolftaleina", "bureta-esquema"] },
  "valoraciones-a-fondo": { images: ["curvas-valoracion-acido-debil", "valoracion-fenolftaleina", "indicador-azul-bromotimol"] },
  gravimetria: { images: ["desecador"] },
  "gravimetria-a-fondo": { images: ["mufla", "desecador"] },
  "espectroscopia-uv-vis": { images: ["espectrofotometro", "cubeta-espectrofotometro"] },
  "espectroscopia-infrarrojo": { images: ["espectro-ir-etanol"] },
  "espectroscopia-a-fondo": { images: ["espectro-electromagnetico", "transmitancia", "espectro-ir-etanol"] },
  "cromatografia-a-fondo": { images: ["tlc-uv", "tlc-secuencia"] },
  "cromatografia-de-gases": { images: ["cromatografo-gases", "cromatografo-gases-esquema"] },
  "gc-a-fondo": { images: ["cromatografo-gases-esquema", "gc-ms"] },
  "otras-tecnicas": { images: ["rmn-etanol", "drx-difractograma"] },
  "otras-tecnicas-a-fondo": { images: ["rmn-etanol", "gc-ms"] },
  "punto-de-fusion-dsc": { images: ["punto-fusion", "dsc-termograma"] },
  "analisis-termico-a-fondo": { images: ["dsc-termograma", "punto-fusion"] },
  "densidad-y-viscosidad-a-fondo": { images: ["viscosimetro-ubbelohde"] },
  "tamano-de-particula": { images: ["tamices", "tamizadora"] },
  "tamano-de-particula-a-fondo": { images: ["tamizadora"] },
  "aspecto-y-solubilidad-a-fondo": { images: ["curva-solubilidad-cuso4"] },
  "microorganismos-y-contaminacion": { images: ["microscopio", "placa-agar-revision"] },
  "microbiologia-a-fondo": { images: ["microscopio"] },
  "recuento-microbiano-endotoxinas": { images: ["placa-colonias"] },
  "ensayos-microbiologicos-a-fondo": { images: ["placa-colonias", "autoclave", "cabina-flujo-laminar"] },
  "estructura-electronica-a-fondo": { images: ["modelo-bohr", "orbitales-atomicos", "regla-hund", "tabla-bloques"] },
  "geometria-molecular-a-fondo": { images: ["agua-dipolo", "nacl-red"] },
  "diagramas-de-fases-a-fondo": { images: ["diagrama-fases-agua", "curva-solubilidad-cuso4", "punto-fusion"] },
  "electroquimica-a-fondo": { images: ["pila-daniell", "pila-galvanica", "oxido-hierro"] },
  "acido-base-avanzado-a-fondo": { images: ["curvas-valoracion-acido-debil", "indicador-azul-bromotimol"] },
  "ley-de-velocidad-a-fondo": { images: ["energia-catalizador"] },
  "operaciones-laboratorio-a-fondo": { images: ["filtracion-vacio-esquema", "embudo-decantacion", "destilacion-vacio-lab", "rotavapor"] },
  "identificacion-quimica-a-fondo": { images: ["punto-fusion", "espectro-ir-etanol"] },
  "capa-fina-a-fondo": { images: ["tlc-secuencia", "tlc-tinta", "tlc-uv"] },
  "espectroscopia-atomica-a-fondo": { images: ["espectro-electromagnetico", "modelo-bohr"] },
  "tecnicas-microbiologicas-a-fondo": { images: ["microscopio", "autoclave", "cabina-flujo-laminar", "placa-colonias"] },
};

/**
 * Simulaciones PhET comprobadas: su versión HTML5 en español existe (comprobado el 23/11/2026).
 * Una simulación nueva se añade aquí primero; check:media no admite otras.
 */
export const phetSims = [
  "density", "states-of-matter", "states-of-matter-basics", "gas-properties", "gases-intro", "diffusion",
  "build-an-atom", "isotopes-and-atomic-mass", "models-of-the-hydrogen-atom", "molecule-shapes", "molecule-shapes-basics",
  "molecule-polarity", "build-a-molecule", "atomic-interactions", "concentration", "molarity", "beers-law-lab",
  "acid-base-solutions", "ph-scale", "ph-scale-basics", "balancing-chemical-equations", "reactants-products-and-leftovers",
  "molecules-and-light", "plinko-probability", "curve-fitting", "least-squares-regression", "energy-forms-and-changes",
  "unit-rates", "graphing-lines",
] as const;

/** Simulaciones PhET por lección. Se suman a lo que la lección tenga en lessonMedia. */
export const lessonSims: Record<string, Sim[]> = {
  "acido-base-avanzado-a-fondo": [
    { sim: "acid-base-solutions", title: "Soluciones ácido-base", why: "Compara un ácido fuerte con uno débil a la misma concentración: mira cuántas moléculas se disocian y cómo cambia el pH." },
  ],
  "estadistica-laboratorio-a-fondo": [
    { sim: "plinko-probability", title: "Probabilidad Plinko", why: "Deja caer cientos de bolas y mira cómo se forma la campana de Gauss: así se reparten los resultados de un análisis repetido." },
  ],
  "diagramas-de-fases-a-fondo": [
    { sim: "states-of-matter", title: "Estados de la materia", why: "En la pantalla «Cambios de fase» calienta, enfría o comprime la sustancia y sigue su punto en el diagrama de fases." },
  ],
  "gases-a-fondo": [
    { sim: "gases-intro", title: "Gases: introducción", why: "Fija la temperatura, el volumen o la presión y comprueba con números las leyes de Boyle, Charles y Gay-Lussac." },
    { sim: "gas-properties", title: "Propiedades de los gases", why: "Bombea partículas pesadas y ligeras, calienta o comprime la caja y mira cómo responde la presión: P·V = n·R·T en movimiento." },
  ],
  "estructura-electronica-a-fondo": [
    { sim: "models-of-the-hydrogen-atom", title: "Modelos del átomo de hidrógeno", why: "Compara el modelo de Bohr con el cuántico y mira qué rayas de luz salen cuando el electrón baja de nivel." },
  ],
  "geometria-molecular-a-fondo": [
    { sim: "molecule-shapes", title: "Geometría molecular", why: "Añade enlaces y pares solitarios al átomo central y mira cómo se reparten en el espacio y cambian los ángulos." },
    { sim: "molecule-shapes-basics", title: "Geometría molecular: conceptos básicos", why: "Empieza por aquí: forma moléculas sencillas y nombra su geometría antes de pasar a la versión completa." },
  ],
  densidad: [{ sim: "density", title: "Densidad", why: "Cambia la masa y el volumen de un bloque y míralo flotar o hundirse en el agua: la densidad decide." }],
  "densidad-a-fondo": [{ sim: "density", title: "Densidad", why: "Mide la masa y el volumen de bloques misteriosos y calcula su densidad para saber de qué material son." }],
  "la-materia": [{ sim: "states-of-matter-basics", title: "Estados de la materia: conceptos básicos", why: "Calienta y enfría agua, oxígeno o neón y mira cómo se mueven las partículas en sólido, líquido y gas." }],
  "materia-a-fondo": [
    { sim: "states-of-matter", title: "Estados de la materia", why: "Relaciona la temperatura con el movimiento de las partículas y mira el cambio de estado en el diagrama de fases." },
    { sim: "diffusion", title: "Difusión", why: "Quita la pared entre dos gases y mira cómo se mezclan solos: más rápido cuanto más calientes y más ligeros." },
  ],
  "atomos-y-tabla-periodica": [{ sim: "build-an-atom", title: "Construye un átomo", why: "Añade protones, neutrones y electrones: el número de protones decide el elemento; los neutrones, el isótopo; los electrones, la carga." }],
  "atomos-a-fondo": [
    { sim: "build-an-atom", title: "Construye un átomo", why: "Comprueba el número atómico, el másico y la carga de un ion construyéndolo partícula a partícula." },
    { sim: "isotopes-and-atomic-mass", title: "Isótopos y masa atómica", why: "Mezcla isótopos y mira cómo sale la masa atómica media que aparece en la tabla periódica." },
  ],
  "enlaces-y-polaridad": [{ sim: "molecule-polarity", title: "Polaridad de las moléculas", why: "Cambia la electronegatividad de los átomos y mira aparecer las cargas parciales y el dipolo." }],
  "enlaces-a-fondo": [
    { sim: "molecule-polarity", title: "Polaridad de las moléculas", why: "Pon la molécula en un campo eléctrico: las polares se orientan; las simétricas, aunque tengan enlaces polares, no." },
    { sim: "atomic-interactions", title: "Interacciones atómicas", why: "Acerca dos átomos y mira la curva de energía: a qué distancia se atraen y cuándo se repelen." },
  ],
  disoluciones: [{ sim: "concentration", title: "Concentración", why: "Añade soluto o agua y mira cómo cambia el color y la concentración; llega a saturar la disolución." }],
  "disoluciones-a-fondo": [
    { sim: "molarity", title: "Molaridad", why: "Cambia los moles de soluto y el volumen y comprueba la fórmula M = n / V sin hacer cuentas." },
    { sim: "concentration", title: "Concentración", why: "Diluye y evapora: la cantidad de soluto no cambia, solo el volumen (C₁·V₁ = C₂·V₂)." },
  ],
  "acidos-bases-ph": [{ sim: "ph-scale-basics", title: "Escala de pH: conceptos básicos", why: "Mide el pH de líquidos de casa y mira qué pasa al diluirlos con agua." }],
  "acidos-bases-a-fondo": [
    { sim: "ph-scale", title: "Escala de pH", why: "Relaciona el pH con la concentración de H₃O⁺ y OH⁻ en escala logarítmica: un punto de pH es un factor 10." },
    { sim: "acid-base-solutions", title: "Disoluciones ácido-base", why: "Compara un ácido fuerte con uno débil a la misma concentración: cuántas moléculas se disocian y qué pH da." },
  ],
  "ecuaciones-y-estequiometria": [{ sim: "balancing-chemical-equations", title: "Balanceo de ecuaciones químicas", why: "Ajusta ecuaciones con los coeficientes y comprueba en la balanza que hay los mismos átomos a cada lado." }],
  "estequiometria-a-fondo": [{ sim: "balancing-chemical-equations", title: "Balanceo de ecuaciones químicas", why: "Practica el ajuste en el modo juego, con niveles de dificultad creciente." }],
  "reactivo-limitante": [{ sim: "reactants-products-and-leftovers", title: "Reactivos, productos y sobrantes", why: "Prepara sándwiches y luego moléculas: el ingrediente que se acaba primero decide cuánto producto sale y cuánto sobra." }],
  "espectroscopia-uv-vis": [{ sim: "beers-law-lab", title: "Laboratorio de la ley de Beer", why: "Cambia la concentración, el ancho de la cubeta y la longitud de onda y mira la absorbancia: A = ε·b·c." }],
  "espectroscopia-a-fondo": [
    { sim: "beers-law-lab", title: "Laboratorio de la ley de Beer", why: "Comprueba que la absorbancia es proporcional a la concentración y que la transmitancia no lo es." },
    { sim: "molecules-and-light", title: "Moléculas y luz", why: "Ilumina moléculas con microondas, infrarrojo, visible y ultravioleta y mira qué hace cada luz: rotar, vibrar o excitar electrones." },
  ],
  "espectroscopia-infrarrojo": [{ sim: "molecules-and-light", title: "Moléculas y luz", why: "Con luz infrarroja las moléculas vibran: es lo que mide un espectro IR." }],
  "calculo-de-resultados-a-fondo": [{ sim: "plinko-probability", title: "Probabilidad Plinko", why: "Deja caer bolas y mira cómo se forma la campana de Gauss: así se reparten los resultados de las réplicas." }],
  "validacion-de-metodos-a-fondo": [{ sim: "least-squares-regression", title: "Regresión por mínimos cuadrados", why: "Pon puntos de calibración y mira la recta que mejor se ajusta y su coeficiente de correlación r." }],
};

/** Imágenes, señales, vídeos y simulaciones de una lección (undefined si no tiene). */
export function mediaFor(slug: string): LessonMedia | undefined {
  const m = lessonMedia[slug];
  const sims = lessonSims[slug];
  if (!sims) return m;
  return { ...m, sims: [...(m?.sims ?? []), ...sims] };
}
