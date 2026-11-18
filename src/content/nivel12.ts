import type { Lesson } from "./types";
import { nivel12Separacion } from "./nivel12-separacion";

const equipos: Lesson[] = [
  {
    slug: "reactor-y-servicios",
    level: 12,
    order: 1,
    title: "El reactor y sus servicios",
    titleEn: "The reactor and utilities",
    minutes: 15,
    summary: "Partes de un reactor, cómo se calienta y enfría, y qué servicios necesita para funcionar.",
    body: `
El **reactor** (*reactor, vessel*) es el corazón de la planta: un depósito cerrado donde se cargan los materiales, se mezclan y se calientan o enfrían.

### Tipos según el material
- **Acero inoxidable** (*stainless steel*, AISI 316L): resistente y fácil de limpiar. No aguanta bien ácidos con cloruros (HCl).
- **Acero vitrificado** (*glass-lined*): acero recubierto por dentro de vidrio. Aguanta ácidos, pero el vidrio puede **romperse por golpes o por choque térmico** (cambios bruscos de temperatura). Por eso hay límites de diferencia de temperatura entre camisa y masa.
- **Hastelloy** u otras aleaciones: para condiciones muy corrosivas.

### Partes
| Parte | En inglés | Para qué sirve |
|---|---|---|
| Camisa | *Jacket* | Doble pared por la que circula el fluido térmico |
| Agitador | *Agitator* | Mezcla. Se controla la velocidad (rpm) |
| Deflector | *Baffle* | Rompe el remolino para mezclar mejor |
| Boca de hombre | *Manway* | Abertura para cargar sólidos o inspeccionar |
| Visor | *Sight glass* | Ventana para ver el interior |
| Sonda de temperatura | *Temperature probe* | Mide la temperatura de masa |
| Condensador | *Condenser* | Convierte los vapores en líquido |
| Válvula de fondo | *Bottom outlet valve* | Descarga el contenido |
| Disco de ruptura / válvula de seguridad | *Rupture disc / safety valve* | Protegen si sube demasiado la presión |

### Servicios (*utilities*)
- **Vapor** (*steam*): para calentar.
- **Agua de refrigeración / torre** (*cooling water*): enfriar hasta unos 25–30 °C.
- **Agua glicolada o salmuera** (*glycol, brine*): enfriar por debajo de 0 °C.
- **Aceite térmico** (*thermal oil*): calentar y enfriar con un solo fluido.
- **Nitrógeno** (*nitrogen*): inertizar.
- **Vacío** (*vacuum*): destilar y secar.
- **Aire comprimido** (*compressed air*): mover válvulas automáticas.
`,
    plant: `
Te piden calentar de 20 °C a 60 °C. En el panel ves dos temperaturas:
- **T masa**: la del producto (lo que importa para el proceso).
- **T camisa**: la del fluido que calienta, siempre por delante.

Si el reactor es vitrificado y el procedimiento dice "ΔT máxima camisa-masa 60 °C", no puedes meter vapor a 150 °C con la masa a 20 °C: el vidrio podría agrietarse.
`,
    batchRecord: `
- Identificación del reactor (p. ej. R-101) y su estado de limpieza.
- Velocidad de agitación (rpm), T masa y T camisa a intervalos.
- Comprobación de servicios antes de empezar (N₂, vacío, refrigeración).
`,
    terms: [
      { es: "Reactor", en: "Reactor / vessel", def: "Depósito cerrado donde se realizan las operaciones químicas." },
      { es: "Acero vitrificado", en: "Glass-lined steel", def: "Acero recubierto de vidrio por dentro, resistente a ácidos y frágil ante golpes y choques térmicos." },
      { es: "Agitador", en: "Agitator / stirrer", def: "Elemento giratorio que mezcla el contenido." },
      { es: "Boca de hombre", en: "Manway", def: "Abertura superior del reactor para cargas e inspección." },
      { es: "Servicios", en: "Utilities", def: "Vapor, agua, salmuera, nitrógeno, vacío, aire… que necesita la planta." },
      { es: "Choque térmico", en: "Thermal shock", def: "Daño por un cambio brusco de temperatura." },
      { es: "Disco de ruptura", en: "Rupture disc", def: "Membrana que se rompe para liberar presión y proteger el equipo." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "¿Qué temperatura indica cómo está realmente el producto dentro del reactor?",
        options: ["La de camisa", "La de masa", "La del condensador", "La ambiente"],
        answer: 1,
        explain: "La temperatura de masa es la del contenido. La de camisa es la del fluido que calienta o enfría.",
      },
      {
        kind: "choice",
        q: "¿Qué riesgo especial tiene un reactor vitrificado?",
        options: [
          "Se corroe con cualquier ácido",
          "El vidrio puede romperse por golpes o cambios bruscos de temperatura",
          "No se puede calentar",
          "No admite agitación",
        ],
        answer: 1,
        explain: "Por eso hay límites de diferencia de temperatura y se evitan golpes al cargar sólidos.",
      },
      {
        kind: "choice",
        q: "Necesitas enfriar la masa a −10 °C. ¿Qué servicio usarás?",
        options: ["Agua de torre", "Vapor", "Salmuera o agua glicolada", "Aire comprimido"],
        answer: 2,
        explain: "El agua de torre no baja de unos 25 °C; para temperaturas bajo cero se usa salmuera o glicol.",
      },
    ],
  },
  {
    slug: "carga-e-inertizacion",
    level: 12,
    order: 2,
    title: "Carga de materiales e inertización",
    titleEn: "Charging and inerting",
    minutes: 15,
    summary: "Cómo se cargan sólidos y líquidos de forma segura y por qué se trabaja con nitrógeno.",
    body: `
### Antes de cargar
1. Comprobar que el equipo está **limpio y liberado** (*clean, released*) y que la etiqueta de estado es correcta.
2. Verificar que el material es el **correcto**: código, nombre, **lote** y estado **aprobado**.
3. Comprobar la **báscula** (verificación diaria).
4. Comprobar válvulas: que el fondo está cerrado y las líneas abiertas al sitio correcto.

### Inertización (*inerting*)
Muchos disolventes son **inflamables**. Para que haya fuego hacen falta tres cosas: **combustible + oxígeno + fuente de ignición** (el triángulo del fuego).
Como no podemos quitar el combustible (el disolvente), **quitamos el oxígeno** llenando el reactor de **nitrógeno**.

Métodos habituales:
- **Barrido** (*sweep*): pasar nitrógeno de forma continua.
- **Ciclos de vacío y nitrógeno** (*vacuum/N₂ purge cycles*): hacer vacío y romperlo con nitrógeno, varias veces.
- **Ciclos de presión** (*pressure purge*): presurizar con N₂ y despresurizar.

Se comprueba con un **medidor de oxígeno**: el límite típico es **O₂ < 5 %** (lo define cada procedimiento).

### Electricidad estática (*static electricity*)
Al verter líquidos o polvos se generan cargas que pueden dar una chispa. Por eso: **pinzas de puesta a tierra** (*earthing / grounding clamps*) en bidones y contenedores, y cargas de sólidos inflamables con sistemas cerrados.

### Orden de carga
El orden importa: no es lo mismo echar ácido sobre agua que agua sobre ácido. Sigue **exactamente** el orden de la hoja.
`,
    plant: `
La hoja dice: *"Inertizar R-102 con 3 ciclos vacío/N₂. Verificar O₂ < 5 %. Cargar 450 kg de tolueno."*

Haces los tres ciclos, el medidor marca 2,1 % O₂ → cumple. Lo anotas con hora y firma. Conectas la pinza de tierra al contenedor de tolueno antes de bombear.
`,
    batchRecord: `
- Número de ciclos de inertización y % O₂ medido.
- Material: código, lote, cantidad teórica y real, quién carga y quién verifica.
- Comprobación de puesta a tierra.
`,
    terms: [
      { es: "Inertizar", en: "Inert / purge", def: "Sustituir el aire de un equipo por un gas inerte (nitrógeno) para evitar incendios." },
      { es: "Triángulo del fuego", en: "Fire triangle", def: "Combustible, oxígeno y fuente de ignición: los tres elementos necesarios para el fuego." },
      { es: "Puesta a tierra", en: "Earthing / grounding", def: "Conexión eléctrica que descarga la electricidad estática." },
      { es: "Equipo liberado", en: "Released equipment", def: "Equipo limpio y autorizado para usarse en el siguiente lote." },
      { es: "Atmósfera explosiva", en: "Explosive atmosphere (ATEX)", def: "Mezcla de aire con gases, vapores o polvos que puede explotar." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "¿Para qué se inertiza un reactor con nitrógeno?",
        options: ["Para enfriarlo", "Para quitar el oxígeno y evitar incendios", "Para limpiarlo", "Para que pese menos"],
        answer: 1,
        explain: "Sin oxígeno suficiente, el disolvente no puede arder aunque haya una chispa.",
      },
      {
        kind: "choice",
        q: "Después de inertizar, el medidor marca 7 % O₂ y el límite es 5 %. ¿Qué haces?",
        options: [
          "Cargo igualmente, es casi lo mismo",
          "Anoto 5 %",
          "No cargo; repito la inertización según el procedimiento y, si no baja, aviso",
          "Abro la boca de hombre para ventilar",
        ],
        answer: 2,
        explain: "No se continúa fuera de límite. Se repite lo que diga el procedimiento y se comunica si no se consigue.",
      },
      {
        kind: "choice",
        q: "¿Qué tres elementos forman el triángulo del fuego?",
        options: [
          "Agua, aire y calor",
          "Combustible, oxígeno y fuente de ignición",
          "Nitrógeno, oxígeno y vapor",
          "Presión, temperatura y tiempo",
        ],
        answer: 1,
        explain: "Si falta uno de los tres, no hay fuego.",
      },
    ],
  },
  {
    slug: "centrifuga",
    level: 12,
    order: 3,
    title: "La centrífuga",
    titleEn: "The centrifuge",
    minutes: 15,
    summary: "Cómo separa la centrífuga el sólido del líquido, sus fases de trabajo y los riesgos principales.",
    body: `
Después de cristalizar tenemos una **suspensión** (*slurry, suspension*): cristales sólidos en un líquido. Hay que separarlos.

La **centrífuga** (*centrifuge*) hace girar la suspensión muy rápido dentro de una **cesta** (*basket*) con una **tela filtrante** (*filter cloth / filter bag*). El líquido atraviesa la tela y el sólido se queda pegado a la pared formando una **torta** (*cake*).

### Tipos habituales
- **Vertical de descarga por arriba o por abajo** (*top/bottom discharge*), con **rascador** (*peeler / plough*) para sacar la torta.
- **Horizontal de rasqueta** (*horizontal peeler centrifuge*).
- **De tela invertida** (*inverting filter centrifuge*): la tela se da la vuelta para soltar la torta.

### Ciclo típico
1. **Inertizar** la centrífuga (casi siempre se trabaja con disolventes).
2. **Alimentar** (*feed*) la suspensión a velocidad media, repartiéndola de forma uniforme.
3. **Centrifugar** (*spin*) para escurrir las aguas madres.
4. **Lavar** la torta (*cake wash*) con disolvente limpio para arrastrar impurezas.
5. **Escurrir** (*spin dry*) a alta velocidad.
6. **Descargar** (*discharge*) el sólido húmedo (*wet cake*).

### Riesgos
- **Desequilibrio** (*imbalance*): si la carga no se reparte, vibra mucho. Hay sensores que la paran.
- Disolventes inflamables: **inertización y control de O₂**.
- Piezas girando: nunca abrir hasta parada total y con el bloqueo correcto.
`,
    plant: `
La hoja dice: *"Alimentar a 600 rpm, centrifugar a 1000 rpm 15 min, lavar con 2 × 50 L de metanol frío, escurrir a 1200 rpm 30 min."*

Vas anotando rpm, tiempos y volúmenes. Si salta la alarma de vibración, paras siguiendo el procedimiento y avisas: **no** se reinicia sin más.
`,
    batchRecord: `
- Número de cargas (*loads*) de centrífuga y peso de torta húmeda de cada una.
- Velocidades, tiempos, volúmenes de lavado, % O₂.
- A veces una muestra de las aguas de lavado (por ejemplo para ver si ya salen limpias).
`,
    terms: [
      { es: "Centrífuga", en: "Centrifuge", def: "Equipo que separa sólido y líquido haciéndolos girar a gran velocidad." },
      { es: "Suspensión", en: "Slurry / suspension", def: "Mezcla de partículas sólidas en un líquido." },
      { es: "Torta", en: "Cake / filter cake", def: "Capa de sólido que queda retenida en el filtro." },
      { es: "Tela filtrante", en: "Filter cloth / filter bag", def: "Tejido que deja pasar el líquido y retiene el sólido." },
      { es: "Producto húmedo", en: "Wet cake", def: "Sólido que sale de la centrífuga o filtro todavía con disolvente." },
      { es: "Desequilibrio", en: "Imbalance", def: "Reparto desigual de la carga en la cesta, que provoca vibraciones." },
      { es: "Lavado de torta", en: "Cake wash", def: "Paso de disolvente limpio a través de la torta para quitar impurezas." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "En la centrífuga, ¿dónde queda el producto?",
        options: ["En el líquido que sale", "Retenido en la tela formando la torta", "En el condensador", "En el nitrógeno"],
        answer: 1,
        explain: "El sólido queda en la cesta como torta; el líquido (aguas madres) atraviesa la tela.",
      },
      {
        kind: "choice",
        q: "¿Para qué se lava la torta?",
        options: [
          "Para disolver el producto",
          "Para arrastrar las aguas madres con impurezas que quedan en el sólido",
          "Para enfriar la centrífuga",
          "Para pesar más",
        ],
        answer: 1,
        explain: "El lavado sustituye el líquido impuro por disolvente limpio.",
      },
      {
        kind: "number",
        q: "Has descargado 3 cargas de 42,5 kg, 44,0 kg y 41,8 kg de producto húmedo. ¿Total?",
        answer: 128.3,
        tolerance: 0.001,
        unit: "kg",
        explain: "42,5 + 44,0 + 41,8 = 128,3 kg.",
      },
    ],
  },
  {
    slug: "filtros",
    level: 12,
    order: 4,
    title: "Filtros: Nutsche y filtro-secador",
    titleEn: "Filters: Nutsche and filter-dryer",
    minutes: 12,
    summary: "Separar sólidos por presión o vacío, y los filtros de pulido que quitan partículas.",
    body: `
Un **filtro** (*filter*) separa sólido y líquido sin girar: empuja el líquido a través de una tela o placa con **presión** de nitrógeno o lo aspira con **vacío**.

### Filtro Nutsche (*Nutsche filter*)
Recipiente con un fondo perforado y una tela. Se carga la suspensión, se aplica presión de N₂ por arriba y el líquido sale por abajo.

### Filtro-secador agitado (*agitated filter dryer, AFD*)
Un Nutsche con **agitador** que sube y baja y **camisa** calefactora. En el mismo equipo se **filtra, lava, seca y descarga**, sin exponer el producto. Muy usado en API porque reduce manipulaciones y contaminación.

### Filtros de pulido (*polish filters*)
Filtros de cartucho (*cartridge filters*) que quitan partículas finas de una disolución **antes de cristalizar** el producto final. Suelen ser de 0,2–1 µm.

### Lo que se vigila
- **Presión diferencial** (*differential pressure, ΔP*): la diferencia de presión entre antes y después del filtro. Si sube mucho, el filtro se está **colmatando** (*clogging*).
- **Tiempo de filtración**: un filtrado muy lento puede indicar cristales demasiado finos.
- **Integridad del filtro**: en filtros de pulido se hace a veces un **test de integridad** (*integrity test*).
- La torta no debe **agrietarse** (*crack*) antes del lavado: el disolvente se iría por las grietas sin lavar.
`,
    plant: `
Filtras en un filtro-secador a 1,5 barg de N₂. Al principio el ΔP es 0,3 bar; a la mitad sube a 1,2 bar y el caudal casi se para. Lo anotas y avisas: puede ser tela colmatada o cristales demasiado finos.
`,
    batchRecord: `
- Presión de filtración y ΔP, hora de inicio y fin.
- Volúmenes de lavado y si la torta se mantuvo cubierta de líquido.
- Identificación del cartucho de pulido y resultado del test de integridad.
`,
    terms: [
      { es: "Filtro Nutsche", en: "Nutsche filter", def: "Filtro cerrado con fondo perforado que filtra por presión o vacío." },
      { es: "Filtro-secador agitado", en: "Agitated filter dryer (AFD)", def: "Equipo que filtra, lava y seca en el mismo recipiente." },
      { es: "Presión diferencial", en: "Differential pressure (ΔP)", def: "Diferencia de presión a ambos lados de un filtro." },
      { es: "Colmatación", en: "Clogging / blinding", def: "Obstrucción progresiva del filtro." },
      { es: "Filtro de pulido", en: "Polish filter", def: "Filtro fino que quita partículas de una disolución." },
      { es: "Test de integridad", en: "Integrity test", def: "Prueba que confirma que un filtro no está dañado." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "La presión diferencial del filtro sube mucho. ¿Qué indica normalmente?",
        options: ["Que filtra mejor", "Que el filtro se está colmatando", "Que el producto está seco", "Nada importante"],
        answer: 1,
        explain: "Más ΔP significa más resistencia al paso del líquido: el filtro se está obstruyendo.",
      },
      {
        kind: "choice",
        q: "¿Qué ventaja tiene el filtro-secador agitado?",
        options: [
          "Es más barato que un reactor",
          "Filtra, lava y seca sin sacar el producto del equipo",
          "No necesita nitrógeno",
          "No hace falta limpiarlo",
        ],
        answer: 1,
        explain: "Menos manipulaciones significa menos riesgo de contaminación y de exposición.",
      },
    ],
  },
  {
    slug: "secaderos",
    level: 12,
    order: 5,
    title: "Secaderos",
    titleEn: "Dryers",
    minutes: 15,
    summary: "Cómo se quita el disolvente del producto húmedo y cómo se sabe que ya está seco.",
    body: `
El sólido que sale de la centrífuga o del filtro está **húmedo** de disolvente (a veces un 10–30 %). El **secadero** (*dryer*) lo elimina con **calor** y, casi siempre, **vacío**.

### Tipos
| Tipo | En inglés | Cómo funciona |
|---|---|---|
| Estufa de bandejas | *Tray dryer* | El producto se extiende en bandejas dentro de una cámara con vacío |
| Secadero cónico / de doble cono | *Conical / double-cone dryer* | Recipiente que gira o tiene un tornillo interno que remueve el sólido |
| Secadero de paletas | *Paddle dryer* | Paletas giratorias que mueven el producto sobre paredes calientes |
| Filtro-secador | *Filter dryer* | El mismo equipo de la filtración |
| Lecho fluido | *Fluid bed dryer* | Aire o N₂ caliente que hace "flotar" el polvo |

### Parámetros
- **Temperatura** de camisa o de producto: limitada para no **degradar** el API ni cambiar su forma cristalina.
- **Vacío**: el disolvente se evapora a menor temperatura.
- **Tiempo** y **agitación** (si la hay). Agitar demasiado puede romper los cristales.

### ¿Cuándo está seco? Punto final (*end point*)
Se toma una muestra (IPC) y se analiza:
- **LOD** (*loss on drying*, pérdida por secado): cuánto peso pierde al calentarlo. Por ejemplo, especificación ≤ 0,5 %.
- **Karl Fischer (KF)**: mide solo el **agua**.
- **Disolventes residuales** por GC (*residual solvents*): cuánto queda de cada disolvente, según ICH Q3C.

### Riesgos
- Polvos y vapores inflamables, vacío, superficies calientes.
- **Exposición** al API al tomar muestras o descargar: usar EPI y sistemas cerrados.
`,
    plant: `
La hoja dice: *"Secar a vacío (≤ 50 mbar) con T camisa 45 °C hasta LOD ≤ 0,5 %. Primer IPC a las 8 h."*

A las 8 h el LOD da 1,2 % → sigue secando. A las 12 h da 0,3 % → cumple. Se registran las dos muestras, con hora y resultado, y la decisión.
`,
    batchRecord: `
- T camisa, T producto y vacío cada cierto tiempo.
- Muestras IPC: hora, análisis, resultado, especificación y decisión.
- Peso del producto seco y rendimiento final.
`,
    terms: [
      { es: "Secadero", en: "Dryer", def: "Equipo que elimina el disolvente de un sólido húmedo." },
      { es: "Pérdida por secado", en: "Loss on drying (LOD)", def: "% de peso que pierde una muestra al calentarla; mide todos los volátiles." },
      { es: "Karl Fischer", en: "Karl Fischer (KF)", def: "Análisis que mide el contenido de agua." },
      { es: "Disolventes residuales", en: "Residual solvents", def: "Disolventes que quedan en el producto final; están limitados por ICH Q3C." },
      { es: "Punto final", en: "End point", def: "Momento en que se cumple la especificación y la etapa puede terminar." },
      { es: "Control en proceso", en: "In-process control (IPC)", def: "Análisis durante el proceso para decidir si se continúa." },
      { es: "Degradación", en: "Degradation", def: "Descomposición del producto, por ejemplo por exceso de temperatura." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "¿Por qué se seca a vacío?",
        options: [
          "Para que el disolvente se evapore a menor temperatura y no dañar el producto",
          "Para que pese más",
          "Porque es obligatorio por ley",
          "Para enfriar el producto",
        ],
        answer: 0,
        explain: "Con vacío el disolvente hierve a menos temperatura, así el API no se degrada.",
      },
      {
        kind: "choice",
        q: "La especificación es LOD ≤ 0,5 % y la muestra da 0,8 %. ¿Qué haces?",
        options: [
          "Descargar el producto",
          "Seguir secando y tomar otra muestra según la hoja",
          "Anotar 0,5 %",
          "Subir la temperatura al máximo",
        ],
        answer: 1,
        explain: "Aún no se ha alcanzado el punto final. Se sigue con los parámetros aprobados.",
      },
      {
        kind: "number",
        q: "Una muestra de 2,000 g pesa 1,990 g después del ensayo de LOD. ¿Cuál es el LOD?",
        answer: 0.5,
        tolerance: 0.01,
        unit: "%",
        explain: "(2,000 − 1,990) / 2,000 × 100 = 0,5 %.",
      },
    ],
  },
];

export const nivel12: Lesson[] = [...equipos, ...nivel12Separacion];
