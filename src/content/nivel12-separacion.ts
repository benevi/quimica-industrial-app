import type { Lesson } from "./types";

export const nivel12Separacion: Lesson[] = [
  {
    slug: "extraccion-liquido-liquido",
    level: 12,
    order: 5,
    title: "Extracción líquido-líquido y separación de fases",
    titleEn: "Liquid-liquid extraction and phase separation",
    minutes: 15,
    summary: "Cómo se pasa el producto de un líquido a otro aprovechando que no se mezclan.",
    body: `
### La idea
Dos líquidos **inmiscibles** (por ejemplo, agua y tolueno) forman **dos fases** (*phases*). El de menor densidad queda arriba. Ojo: **la fase orgánica no siempre es la de arriba**. El tolueno y el acetato de etilo pesan menos que el agua y flotan, pero el diclorometano y otros disolventes clorados pesan más y quedan **abajo**. Antes de separar hay que saber cuál es cuál. Cada sustancia se reparte entre las dos según dónde se disuelva mejor.

- **Fase orgánica** (*organic phase*): el disolvente orgánico.
- **Fase acuosa** (*aqueous phase*): el agua (a veces con sales, ácido o base).

### Coeficiente de reparto (*partition coefficient*)
K = concentración en la fase orgánica / concentración en la fase acuosa.
Con K = 4 y volúmenes iguales, tras **una** extracción queda en el agua 1/(1 + 4) = **20 %** del producto. Si en lugar de una extracción con todo el disolvente haces **dos con la mitad** cada vez, queda solo un 11 %: **varias extracciones pequeñas rinden más que una grande**.

### Jugar con el pH
- Una **amina** (base) en agua ácida se convierte en sal y pasa al **agua**; en agua básica vuelve a la forma neutra y pasa a la **fase orgánica**.
- Un **ácido carboxílico** hace lo contrario.
Así se separa el producto de impurezas ácidas, básicas o neutras: es el "lavado ácido" o "lavado básico" de la hoja.

### Pasos en el reactor
1. Añadir la segunda fase y **agitar** el tiempo indicado.
2. **Parar la agitación** y dejar **decantar** (*settle*).
3. **Separar**: abrir la válvula de fondo y sacar la fase inferior mirando la **mirilla** (*sight glass*) o el detector de interfase hasta ver la **interfase** (*interface*).
4. Decidir según la hoja qué fase se queda y cuál va a residuo.

### Problemas típicos
- **Emulsión** (*emulsion*): las fases no se separan bien. Ayuda esperar, añadir salmuera (agua con NaCl), calentar un poco o filtrar. Nunca se fuerza sin instrucción.
- **Capa intermedia** (*rag layer*): sólidos o "nata" entre fases; la hoja dice con qué fase se va.
- Equivocarse de fase = **perder el lote**. Por eso cada fase se **identifica y etiqueta** y no se tira nada hasta que el IPC lo confirma.
`,
    plant: `
Hoja: "Añadir 300 L de HCl 1 M. Agitar 20 min. Decantar ≥ 30 min. Separar la fase acuosa inferior (contiene el producto como clorhidrato) al tanque T-12. Conservar la fase orgánica en el reactor hasta resultado de IPC".
El operador anota hora de parada de agitación, hora de separación, volumen de cada fase y aspecto de la interfase.
`,
    batchRecord: `
- Tiempos de agitación y decantación (mínimos).
- Fase que se conserva, destino de cada fase y volúmenes.
- pH de la fase acuosa cuando se ajusta.
- IPC de la fase que se va a desechar (producto < x %).
`,
    terms: [
      { es: "Extracción líquido-líquido", en: "Liquid-liquid extraction", def: "Paso de una sustancia de un líquido a otro inmiscible." },
      { es: "Fase orgánica / acuosa", en: "Organic / aqueous phase", def: "Capa del disolvente orgánico / capa del agua." },
      { es: "Decantar", en: "Settle / decant", def: "Dejar reposar para que las fases se separen." },
      { es: "Interfase", en: "Interface", def: "Límite entre las dos fases líquidas." },
      { es: "Emulsión", en: "Emulsion", def: "Mezcla turbia de dos líquidos que tarda en separarse." },
      { es: "Coeficiente de reparto", en: "Partition coefficient", def: "Relación de concentraciones de una sustancia entre dos fases." },
      { es: "Salmuera", en: "Brine", def: "Solución de cloruro sódico en agua; ayuda a romper emulsiones." },
    ],
    quiz: [
      {
        kind: "number",
        q: "K = 4 y volúmenes iguales. ¿Qué % del producto queda en el agua tras una extracción?",
        answer: 20,
        tolerance: 0.01,
        unit: "%",
        explain: "Queda 1/(1 + 4) = 0,2, es decir, 20 %.",
      },
      {
        kind: "choice",
        q: "¿Qué rinde más con la misma cantidad total de disolvente?",
        options: ["Una extracción grande", "Varias extracciones pequeñas", "Igual", "Ninguna"],
        answer: 1,
        explain: "Con K = 4: una extracción deja un 20 %; dos con la mitad dejan un 11 %.",
      },
      {
        kind: "choice",
        q: "Antes de tirar una fase a residuos…",
        options: [
          "Se tira directamente",
          "Se identifica, se etiqueta y se espera al IPC que confirma que no contiene producto",
          "Se mezcla con la otra",
          "Se huele",
        ],
        answer: 1,
        explain: "Equivocarse de fase supone perder el lote: no se desecha hasta confirmarlo.",
      },
    ],
  },
  {
    slug: "destilacion",
    level: 12,
    order: 6,
    title: "Destilación y concentración",
    titleEn: "Distillation and concentration",
    minutes: 15,
    summary: "Separar líquidos por su punto de ebullición, concentrar soluciones y cambiar de disolvente.",
    body: `
### Qué es
Calentar una mezcla para **evaporar** el componente más volátil y **condensarlo** en otro sitio. En una planta de API se usa sobre todo para:
- **Concentrar** (*concentrate*): quitar disolvente para que el producto quede más concentrado o cristalice.
- **Cambio de disolvente** (*solvent swap*): destilar el disolvente A y añadir el B.
- **Recuperar disolventes** para reutilizarlos.
- **Secar azeotrópicamente**: quitar agua destilándola junto con un disolvente.

### Equipo
El vapor sale del reactor (calderín), sube por la **columna** o tubería de vapores, se enfría en el **condensador** (*condenser*, con agua o salmuera) y cae al **depósito de destilado** (*receiver*). Con **bomba de vacío** si se destila a presión reducida.

### Vacío y temperatura
A menor presión, menor punto de ebullición. El agua hierve a 100 °C a 1 atm y a unos 46 °C a 100 mbar. Destilar a vacío protege el producto del calor.

### Azeótropos (*azeotropes*)
Mezclas que hierven a temperatura fija y destilan con composición constante, así que no se separan por destilación simple. Ejemplos:
- Etanol–agua: el destilado no pasa de ~95,6 % de etanol en peso.
- Tolueno–agua: hierve a ~85 °C (por debajo de los dos puros). Se aprovecha para **arrastrar el agua** de una mezcla.

### Qué vigila el operador
- Temperatura de producto y camisa, **vacío**, caudal y temperatura del **agua del condensador** (si falla, los vapores escapan).
- **Volumen** de destilado y nivel del reactor: la hoja marca hasta qué volumen se concentra.
- **Espuma** (*foaming*) y arrastre de producto al condensador.
- Nunca concentrar **a sequedad** si la hoja no lo dice: puede haber descomposiciones peligrosas.
`,
    plant: `
"Concentrar a vacío (T producto ≤ 50 °C) desde 1000 L hasta 400 L. Añadir 600 L de isopropanol y volver a concentrar a 400 L. IPC: metanol residual ≤ 1,0 % por GC". Es un cambio de disolvente de metanol a isopropanol en dos ciclos.
`,
    batchRecord: `
- Vacío, T producto y T camisa al inicio y durante la destilación.
- Volumen final (lectura de nivel o de varilla) y volumen de destilado recogido.
- IPC de disolvente residual tras el cambio de disolvente.
`,
    terms: [
      { es: "Destilación", en: "Distillation", def: "Separación de líquidos por evaporación y condensación." },
      { es: "Condensador", en: "Condenser", def: "Intercambiador que enfría los vapores y los vuelve líquido." },
      { es: "Destilado", en: "Distillate", def: "Líquido recogido tras condensar los vapores." },
      { es: "Cambio de disolvente", en: "Solvent swap", def: "Sustituir un disolvente por otro mediante destilación." },
      { es: "Azeótropo", en: "Azeotrope", def: "Mezcla que destila sin cambiar de composición." },
      { es: "Destilación a vacío", en: "Vacuum distillation", def: "Destilación a presión reducida para bajar el punto de ebullición." },
      { es: "Espuma", en: "Foaming", def: "Formación de burbujas estables que pueden arrastrar producto." },
    ],
    quiz: [
      {
        kind: "number",
        q: "Concentras de 1000 L a 400 L. ¿Por cuánto se multiplica la concentración del producto?",
        answer: 2.5,
        tolerance: 0.01,
        unit: "veces",
        explain: "1000 / 400 = 2,5 veces más concentrado.",
      },
      {
        kind: "choice",
        q: "¿Por qué se destila a vacío?",
        options: [
          "Para que el disolvente hierva a menor temperatura y proteger el producto",
          "Para que destile más lento",
          "Para enfriar el condensador",
          "Para aumentar la presión",
        ],
        answer: 0,
        explain: "A menor presión, menor punto de ebullición.",
      },
      {
        kind: "choice",
        q: "Falla el agua del condensador durante una destilación. ¿Qué riesgo hay?",
        options: [
          "Ninguno",
          "Los vapores de disolvente no condensan y escapan o sobrepresionan",
          "El producto se enfría",
          "Mejora la destilación",
        ],
        answer: 1,
        explain: "Sin refrigeración los vapores no condensan: riesgo de emisión e incendio. Se para el calentamiento y se avisa.",
      },
    ],
  },
  {
    slug: "cristalizacion",
    level: 12,
    order: 7,
    title: "Cristalización",
    titleEn: "Crystallization",
    minutes: 18,
    summary: "El paso que purifica el API y decide su forma cristalina y su tamaño de partícula.",
    body: `
### Por qué es tan importante
La cristalización es la **principal etapa de purificación** de un API: las impurezas se quedan en el líquido (las **aguas madre**, *mother liquor*) y el producto sale como sólido puro. Además fija la **forma cristalina** (polimorfo) y el **tamaño de partícula**.

### Solubilidad y sobresaturación
- **Solubilidad** (*solubility*): máximo que se disuelve a una temperatura. Normalmente sube con la temperatura.
- **Sobresaturación** (*supersaturation*): hay más disuelto de lo que admite la solución. Es la "fuerza" que hace cristalizar.

### Cómo se genera la sobresaturación
| Método | En inglés | Cómo |
|---|---|---|
| Enfriamiento | *Cooling crystallization* | Se disuelve en caliente y se enfría |
| Antidisolvente | *Antisolvent crystallization* | Se añade un líquido en que el producto no se disuelve (por ejemplo heptano o agua) |
| Evaporación | *Evaporative* | Se quita disolvente destilando |
| Reacción / pH | *Reactive / pH shift* | Se forma una sal o se cambia el pH y el producto precipita |

### Nucleación y crecimiento
1. **Nucleación** (*nucleation*): aparecen los primeros cristales diminutos.
2. **Crecimiento** (*growth*): los cristales engordan.
Enfriar o añadir antidisolvente **despacio** da cristales grandes y puros. Hacerlo **de golpe** da muchos cristales finos, que filtran mal y atrapan impurezas (o sale otra forma, o incluso un aceite: *oiling out*).

### Siembra (*seeding*)
Añadir una pequeña cantidad de cristales de la forma correcta cuando la solución está ligeramente sobresaturada. Garantiza la forma y hace el proceso reproducible.

### Rendimiento teórico
Solubilidad 120 g/L a 60 °C y 15 g/L a 5 °C, en 500 L: como máximo cristalizan (120 − 15) × 500 = 52 500 g = **52,5 kg**. El resto queda en las aguas madre.

### Después
Maduración (*aging*) con agitación suave, **filtración o centrifugación**, **lavado de la torta** con disolvente frío y secado.
`,
    plant: `
"Disolver a 70 °C. Filtrar en caliente por filtro de cartucho de 1 µm (clarificación). Enfriar a 55 °C, sembrar con 0,3 kg de forma A, mantener 1 h. Enfriar a 0–5 °C en ≥ 5 h (rampa automática). Mantener 2 h y centrifugar". Si la rampa se interrumpe, el operador lo anota y avisa: un enfriamiento brusco es una posible desviación.
`,
    batchRecord: `
- Temperatura de disolución, de siembra y final; perfil de enfriamiento (gráfico del DCS adjunto).
- Lote y cantidad de semilla.
- Tiempo de maduración y aspecto (aparición de cristales).
- Volumen y destino de las aguas madre.
`,
    terms: [
      { es: "Cristalización", en: "Crystallization", def: "Formación de cristales sólidos a partir de una solución." },
      { es: "Aguas madre", en: "Mother liquor", def: "Líquido que queda tras separar los cristales; contiene las impurezas." },
      { es: "Sobresaturación", en: "Supersaturation", def: "Estado en que hay más soluto disuelto del que admite la solución." },
      { es: "Antidisolvente", en: "Antisolvent", def: "Líquido en el que el producto es poco soluble y que provoca su cristalización." },
      { es: "Nucleación", en: "Nucleation", def: "Formación de los primeros cristales." },
      { es: "Maduración", en: "Aging / digestion", def: "Mantener la suspensión con agitación para que los cristales crezcan." },
      { es: "Separación en aceite", en: "Oiling out", def: "El producto se separa como líquido aceitoso en vez de como cristal." },
      { es: "Clarificación", en: "Clarification / polish filtration", def: "Filtración de la solución para quitar partículas antes de cristalizar." },
    ],
    quiz: [
      {
        kind: "number",
        q: "Solubilidad 120 g/L a 60 °C y 15 g/L a 5 °C, 500 L de solución saturada a 60 °C. ¿Cuántos kg cristalizan como máximo al enfriar a 5 °C?",
        answer: 52.5,
        tolerance: 0.01,
        unit: "kg",
        explain: "(120 − 15) × 500 = 52 500 g = 52,5 kg.",
      },
      {
        kind: "choice",
        q: "Enfriar de golpe en vez de seguir la rampa suele dar…",
        options: [
          "Cristales más grandes y puros",
          "Cristales finos que filtran mal, atrapan impurezas o una forma distinta",
          "Más rendimiento sin inconvenientes",
          "Nada distinto",
        ],
        answer: 1,
        explain: "La sobresaturación brusca dispara la nucleación: cristales pequeños e impuros.",
      },
      {
        kind: "choice",
        q: "¿Dónde quedan la mayoría de las impurezas tras cristalizar?",
        options: ["En los cristales", "En las aguas madre", "En el condensador", "En el aire"],
        answer: 1,
        explain: "Por eso además se lava la torta: para quitar las aguas madre que la mojan.",
      },
    ],
  },
  {
    slug: "molienda-y-tamizado",
    level: 12,
    order: 14,
    title: "Molienda, micronización y tamizado",
    titleEn: "Milling, micronization and sieving",
    minutes: 12,
    summary: "Cómo se ajusta el tamaño de partícula del API seco y cómo se trabaja con polvo de forma segura.",
    body: `
### Para qué
El cliente (la planta de formulación) pide un **tamaño de partícula** concreto (d50, d90): afecta a la disolución del comprimido y a cómo fluye y se mezcla el polvo.

### Equipos
| Equipo | En inglés | Resultado |
|---|---|---|
| Molino cónico / calibrador | *Cone mill* | Rompe grumos (*delumping*), tamaño medio |
| Molino de martillos | *Hammer mill* | Partículas medianas |
| Molino de púas | *Pin mill* | Partículas finas |
| Molino de chorro de aire | *Jet mill / micronizer* | Partículas de pocos micrómetros (micronizado) |
| Tamiz vibratorio | *Vibrating sieve / sifter* | Separa por tamaño o quita cuerpos extraños |

### Parámetros
Velocidad del rotor, tamaño de la **malla o criba** (*screen*), presión de aire (micronizador), velocidad de alimentación. Cambian el tamaño final.

### Riesgos importantes
- **Explosión de polvo** (*dust explosion*): el polvo fino en el aire puede explotar con una chispa. Se trabaja con **puesta a tierra**, inertización con N₂ y equipos **ATEX**.
- **Exposición** a un principio activo potente: sistemas cerrados, aislador o EPI respiratorio según la evaluación.
- **Calor**: la molienda calienta y puede cambiar la forma cristalina.
- **Contaminación**: la malla rota o desgastada deja trozos de metal. Por eso se **revisa la integridad de la malla** antes y después, y muchas líneas llevan **detector de metales**.

### Control
IPC o ensayo final de tamaño de partícula por **difracción láser**. Rendimiento de la etapa (lo que se pierde en el equipo y los filtros).
`,
    plant: `
Antes de micronizar se comprueba que la malla del tamiz de seguridad está íntegra y se registra. Se procesan 50,0 kg y se recogen 48,6 kg: rendimiento 97,2 %. Al terminar se revisa de nuevo la malla: si estuviera rota, todo el lote quedaría en investigación por posibles partículas metálicas.
`,
    batchRecord: `
- Equipo, malla o criba usada (tamaño y número) y comprobación de integridad antes y después.
- Parámetros (velocidad, presión de aire) y tiempos.
- Pesos de entrada y salida, rendimiento, resultado del tamaño de partícula.
`,
    terms: [
      { es: "Molienda", en: "Milling", def: "Reducción del tamaño de partícula de un sólido." },
      { es: "Micronización", en: "Micronization", def: "Molienda muy fina, hasta pocos micrómetros, normalmente con chorro de aire." },
      { es: "Tamizado", en: "Sieving", def: "Separación de partículas por tamaño a través de una malla." },
      { es: "Malla / criba", en: "Screen / mesh", def: "Rejilla que limita el tamaño de partícula que pasa." },
      { es: "Explosión de polvo", en: "Dust explosion", def: "Combustión rapidísima de polvo fino suspendido en el aire." },
      { es: "Puesta a tierra", en: "Grounding / earthing", def: "Conexión eléctrica a tierra para evitar chispas de electricidad estática." },
      { es: "Detector de metales", en: "Metal detector", def: "Equipo que detecta partículas metálicas en el polvo." },
    ],
    quiz: [
      {
        kind: "number",
        q: "Entran 50,0 kg al molino y salen 48,6 kg. ¿Cuál es el rendimiento de la etapa?",
        answer: 97.2,
        tolerance: 0.002,
        unit: "%",
        explain: "48,6 / 50,0 × 100 = 97,2 %.",
      },
      {
        kind: "choice",
        q: "¿Por qué se comprueba la integridad de la malla antes y después?",
        options: [
          "Para limpiarla",
          "Para asegurar que no han pasado trozos de metal al producto",
          "Por estética",
          "Para pesarla",
        ],
        answer: 1,
        explain: "Una malla rota puede contaminar el lote con partículas metálicas.",
      },
      {
        kind: "choice",
        q: "¿Cuál es un riesgo de seguridad típico de la molienda?",
        options: ["Congelación", "Explosión de polvo", "Inundación", "Ninguno"],
        answer: 1,
        explain: "El polvo fino en el aire es combustible: puesta a tierra, inertización y equipos ATEX.",
      },
    ],
  },
  {
    slug: "limpieza-de-equipos",
    level: 12,
    order: 15,
    title: "Limpieza de equipos y validación de limpieza",
    titleEn: "Equipment cleaning and cleaning validation",
    minutes: 18,
    summary: "Cómo se evita que restos de un producto contaminen el siguiente y cómo se demuestra.",
    body: `
### Por qué es crítica
En una planta multiproducto el mismo reactor fabrica varios API. Si quedan restos del anterior, pasan al siguiente: **contaminación cruzada** (*cross-contamination*). Las GMP (ICH Q7, apartado 12.7) exigen procedimientos de limpieza **escritos y validados**.

### Tipos de limpieza
- **Entre lotes del mismo producto** (*minor cleaning / campaign cleaning*): más sencilla.
- **Cambio de producto** (*major cleaning / product changeover*): completa, validada, con muestreo.
- **CIP** (*Clean In Place*): sin desmontar, con boquillas y bolas de lavado. **COP** (*Clean Out of Place*): desmontando piezas.

### Pasos típicos
1. Vaciar y **pre-lavar** con el disolvente del proceso.
2. Lavar con el disolvente o solución de limpieza indicados (a veces caliente y en reflujo).
3. **Aclarar** (*rinse*).
4. **Secar** (N₂ o vacío) para que no queden charcos que favorezcan microbios o corrosión.
5. **Inspección visual**: el equipo debe estar **visualmente limpio** (*visually clean*).
6. **Muestreo** si toca: **frotis** (*swab*) de una superficie o **agua/disolvente de aclarado** (*rinse sample*).
7. **Etiqueta de estado** (*status label*): "Limpio", con fecha, hora, firma y producto anterior.

### Tiempos que importan
- **Tiempo sucio** (*dirty hold time*): máximo entre terminar el lote y empezar a limpiar. Si se supera, los restos se secan y se limpian peor.
- **Tiempo limpio** (*clean hold time*): máximo que el equipo puede estar limpio sin usarse antes de tener que relimpiar.

### Cómo se fija el límite
Hoy se basa en **toxicología**: la **PDE** del producto anterior (exposición diaria permitida). Fórmula básica:

**MACO = PDE × MBS / TDD**

- MACO (*Maximum Allowable Carryover*): cuánto residuo total se admite.
- PDE del producto anterior (mg/día).
- MBS (*Minimum Batch Size*): tamaño mínimo del lote siguiente.
- TDD (*Therapeutic Daily Dose*): dosis diaria máxima del producto siguiente.

Ejemplo: PDE 0,5 mg/día, lote siguiente 100 kg (100 000 000 mg), dosis siguiente 500 mg/día. MACO = 0,5 × 100 000 000 / 500 = 100 000 mg = 100 g. Repartido en 50 m² de superficie compartida da 2 g/m², es decir, **200 µg/cm²**. Es un límite muy alto: un residuo así se vería a simple vista (el límite de residuo visible suele estar en torno a 1–4 µg/cm²). Por eso siempre se aplica también el criterio de "visualmente limpio" y, si es más estricto, el límite práctico que fije la empresa. **Manda el límite más estricto.**

### Validación de limpieza (*cleaning validation*)
Se demuestra en **varias limpiezas consecutivas** (tradicionalmente **tres**; hoy el número se justifica con un análisis de riesgos) que el procedimiento deja el equipo por debajo del límite, con métodos analíticos validados y en los **puntos más difíciles** (válvulas, juntas, agitador, mirillas).
`,
    plant: `
Tras el último lote del producto X, el reactor R-201 tiene un tiempo sucio máximo de 72 h. El operador limpia según el procedimiento, marca cada paso en la hoja de limpieza, inspecciona con linterna, el laboratorio toma un frotis del agitador y cuelga la etiqueta "Limpio – pendiente de resultado". Hasta que Calidad libera el resultado no se carga el producto Y.
`,
    batchRecord: `
- Hoja o registro de limpieza: equipo, producto anterior, disolvente y volumen usados, hora de inicio y fin.
- Inspección visual y firma.
- Muestras de frotis / aclarado y resultado.
- Etiqueta de estado y registro en el diario de equipo (*equipment logbook*).
- Al empezar un lote: comprobación de que el equipo está limpio y dentro del tiempo limpio.
`,
    terms: [
      { es: "Contaminación cruzada", en: "Cross-contamination", def: "Paso de restos de un producto a otro distinto." },
      { es: "Validación de limpieza", en: "Cleaning validation", def: "Demostración documentada de que la limpieza deja el equipo por debajo del límite." },
      { es: "Visualmente limpio", en: "Visually clean", def: "Sin restos visibles en la inspección; criterio mínimo siempre exigido." },
      { es: "Frotis", en: "Swab sample", def: "Muestra tomada frotando una superficie con un hisopo." },
      { es: "Muestra de aclarado", en: "Rinse sample", def: "Muestra del líquido del último aclarado." },
      { es: "Tiempo sucio", en: "Dirty hold time", def: "Tiempo máximo entre el fin de uso y el inicio de la limpieza." },
      { es: "Tiempo limpio", en: "Clean hold time", def: "Tiempo máximo que un equipo limpio puede esperar sin relimpiarse." },
      { es: "Arrastre máximo admisible", en: "Maximum Allowable Carryover (MACO)", def: "Cantidad máxima de residuo del producto anterior admitida en el siguiente." },
      { es: "Etiqueta de estado", en: "Status label", def: "Etiqueta que indica si un equipo está sucio, limpio o en uso." },
    ],
    quiz: [
      {
        kind: "number",
        q: "MACO = 100 g y la superficie compartida es de 50 m². ¿Cuál es el límite en g/m²?",
        answer: 2,
        tolerance: 0.001,
        unit: "g/m²",
        explain: "100 g / 50 m² = 2 g/m².",
      },
      {
        kind: "choice",
        q: "El equipo se limpió hace más tiempo del 'tiempo limpio' permitido. ¿Qué haces antes de cargar?",
        options: [
          "Cargar, ya está limpio",
          "No cargar: relimpiar o seguir lo que diga el procedimiento y avisar",
          "Cambiar la fecha de la etiqueta",
          "Echar un poco de disolvente y cargar",
        ],
        answer: 1,
        explain: "Fuera del tiempo limpio validado, el estado ya no está garantizado. Cambiar la fecha sería falsificar un registro.",
      },
      {
        kind: "choice",
        q: "¿En qué base se fijan hoy los límites de limpieza?",
        options: [
          "En el color del producto",
          "En la toxicología del producto anterior (PDE)",
          "En lo que diga el operador",
          "En el precio",
        ],
        answer: 1,
        explain: "La PDE del producto anterior se usa en la fórmula del MACO.",
      },
    ],
  },
];
