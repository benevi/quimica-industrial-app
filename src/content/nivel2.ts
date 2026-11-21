import type { Lesson } from "./types";

const reacciones: Lesson[] = [
  {
    slug: "ecuaciones-y-estequiometria",
    level: 2,
    order: 1,
    title: "Ecuaciones químicas y estequiometría",
    titleEn: "Chemical equations and stoichiometry",
    minutes: 18,
    summary: "Cómo se escribe una reacción, cómo se ajusta y cómo se calculan las cantidades que reaccionan.",
    body: `
### La ecuación química (*chemical equation*)
Describe una reacción: a la izquierda los **reactivos** (*reactants*), a la derecha los **productos** (*products*).

> 4-aminofenol + anhídrido acético → paracetamol + ácido acético
> C₆H₇NO + C₄H₆O₃ → C₈H₉NO₂ + C₂H₄O₂

Es una versión simplificada de una síntesis clásica del paracetamol, buena para practicar.

### Ajustar una ecuación (*balancing*)
En una reacción **los átomos no se crean ni se destruyen**: solo se reorganizan. Debe haber los mismos átomos de cada elemento a cada lado.

Comprobación en el ejemplo:
- C: 6 + 4 = 10 · a la derecha 8 + 2 = 10 ✔
- H: 7 + 6 = 13 · a la derecha 9 + 4 = 13 ✔
- N: 1 · 1 ✔ · O: 1 + 3 = 4 · 2 + 2 = 4 ✔

Si no cuadra, se ponen **coeficientes** delante: CH₄ + **2** O₂ → CO₂ + **2** H₂O.

### Estequiometría (*stoichiometry*)
Los coeficientes indican **en qué proporción de moles** reaccionan las sustancias. En el ejemplo, todo es 1:1:1:1: **1 mol** de aminofenol da **1 mol** de paracetamol.

Pasos para calcular cuánto producto sale como máximo (**rendimiento teórico**):
1. Pasar el reactivo principal a moles (masa / masa molar).
2. Aplicar la proporción de la ecuación.
3. Pasar los moles de producto a masa (moles × masa molar).
`,
    plant: `
Partes de **50,0 kg** de 4-aminofenol (M = 109,13 g/mol).

1. 50,0 / 109,13 = 0,4582 kmol de aminofenol.
2. Proporción 1:1 → 0,4582 kmol de paracetamol como máximo.
3. 0,4582 × 151,16 = **69,26 kg** de paracetamol teórico.

Si el proceso pide 1,1 eq de anhídrido acético (M = 102,09): 0,4582 × 1,1 × 102,09 = **51,45 kg** de anhídrido.
`,
    batchRecord: `
- Cantidad teórica de producto (para calcular el rendimiento).
- Cargas de reactivos calculadas a partir del peso real del material de partida.
- Columnas de masa molar, eq y kmol en la lista de materiales.
`,
    terms: [
      { es: "Reactivo", en: "Reactant / reagent", def: "Sustancia que se consume en una reacción." },
      { es: "Producto", en: "Product", def: "Sustancia que se forma en una reacción." },
      { es: "Ajustar una ecuación", en: "Balance an equation", def: "Poner coeficientes para que haya los mismos átomos a ambos lados." },
      { es: "Estequiometría", en: "Stoichiometry", def: "Relación entre las cantidades de reactivos y productos de una reacción." },
      { es: "Rendimiento teórico", en: "Theoretical yield", def: "Máxima cantidad de producto que se puede obtener según la ecuación." },
      { es: "Subproducto", en: "By-product", def: "Sustancia que se forma junto al producto deseado (aquí, el ácido acético)." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "¿Qué indica una ecuación química ajustada?",
        options: [
          "Que la reacción es rápida",
          "Que hay los mismos átomos de cada elemento a ambos lados",
          "Que el producto es puro",
          "Que la reacción desprende calor",
        ],
        answer: 1,
        explain: "Los átomos se conservan: solo cambian de compañeros.",
      },
      {
        kind: "number",
        q: "En 2 H₂ + O₂ → 2 H₂O, ¿cuántos moles de agua se forman con 6 mol de H₂ y oxígeno suficiente?",
        answer: 6,
        tolerance: 0.001,
        unit: "mol",
        explain: "La proporción H₂ : H₂O es 2 : 2, es decir 1 : 1. Se forman 6 mol de agua.",
      },
      {
        kind: "number",
        q: "Con 50,0 kg de 4-aminofenol (M = 109,13) y proporción 1:1, ¿cuántos kg de paracetamol (M = 151,16) se obtienen como máximo?",
        answer: 69.26,
        tolerance: 0.005,
        unit: "kg",
        explain: "50,0 / 109,13 = 0,4582 kmol; 0,4582 × 151,16 = 69,26 kg.",
      },
    ],
  },
  {
    slug: "reactivo-limitante",
    level: 2,
    order: 2,
    title: "Reactivo limitante y exceso",
    titleEn: "Limiting reagent and excess",
    minutes: 12,
    summary: "Qué reactivo se acaba primero, por qué se usan excesos y qué pasa con lo que sobra.",
    body: `
### Reactivo limitante (*limiting reagent*)
Es el que **se acaba primero** y por tanto **decide cuánto producto sale**. Los demás quedan en **exceso** (*excess*).

Para saber cuál es: pasa todo a **moles** y compáralo con la proporción de la ecuación. Con proporción 1:1, el que tenga **menos moles** es el limitante.

### ¿Por qué se usan excesos?
- Para que el reactivo caro o importante (normalmente el material de partida) **reaccione por completo**.
- Porque parte del reactivo se pierde (evaporación, humedad, reacciones secundarias).

Ejemplo: "1,2 eq de anhídrido acético" = 20 % más moles de los necesarios.

### El exceso tiene un precio
Lo que sobra hay que **eliminarlo** después (lavados, destilación, neutralización) y puede generar **impurezas**. Por eso el exceso está definido y validado: ni más ni menos.
`,
    plant: `
Cargas por error 30,0 kg de aminofenol (M = 109,13) y 25,0 kg de anhídrido (M = 102,09):
- Aminofenol: 0,2749 kmol
- Anhídrido: 0,2449 kmol

El limitante es el **anhídrido**: quedará aminofenol sin reaccionar, que es una impureza. Esto es una desviación: se para y se avisa.
`,
    batchRecord: `
- Equivalentes de cada reactivo.
- IPC de "material de partida residual ≤ x %" para comprobar que el limitante se ha consumido.
`,
    terms: [
      { es: "Reactivo limitante", en: "Limiting reagent", def: "Reactivo que se consume primero y determina la cantidad de producto." },
      { es: "Exceso", en: "Excess", def: "Cantidad de reactivo por encima de la necesaria según la estequiometría." },
      { es: "Conversión", en: "Conversion", def: "Porcentaje del reactivo limitante que ha reaccionado." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "Reacción 1:1. Tienes 2,0 kmol de A y 2,5 kmol de B. ¿Cuál es el limitante?",
        options: ["A", "B", "Ninguno", "Los dos"],
        answer: 0,
        explain: "A tiene menos moles y la proporción es 1:1, así que se acaba antes.",
      },
      {
        kind: "number",
        q: "Tienes 0,800 kmol de material de partida. La hoja pide 1,25 eq de reactivo. ¿Cuántos kmol de reactivo cargas?",
        answer: 1,
        tolerance: 0.001,
        unit: "kmol",
        explain: "0,800 × 1,25 = 1,00 kmol.",
      },
      {
        kind: "number",
        q: "Reacción 1:1. Tienes 0,450 kmol de A y 0,500 kmol de B. ¿Cuántos kmol de producto se forman como máximo?",
        answer: 0.45,
        tolerance: 0.001,
        unit: "kmol",
        explain: "El limitante es A (0,450 kmol), así que se forman como máximo 0,45 kmol de producto.",
      },
    ],
  },
  {
    slug: "rendimiento-y-balance",
    level: 2,
    order: 4,
    title: "Rendimiento, pureza y balance de materia",
    titleEn: "Yield, purity and mass balance",
    minutes: 12,
    summary: "Cómo se calcula el rendimiento de una etapa y por qué no se puede entender sin la pureza.",
    body: `
### Rendimiento (*yield*)
> **Rendimiento (%) = producto obtenido / producto teórico × 100**

Nunca es del 100 %: hay pérdidas en las aguas madres, en los lavados, en los equipos y por reacciones secundarias.

### Rendimiento corregido por pureza
Si el producto no es 100 % puro, parte de su peso es impureza o disolvente. El rendimiento "real" se calcula con el **contenido** (*assay*):

> producto puro = peso × riqueza (%) / 100

### Rendimiento en peso
En planta a veces se usa el **rendimiento en peso**: kg de producto por kg de material de partida (p. ej. 1,18 kg/kg). Es más sencillo pero no tiene en cuenta las masas molares.

### Balance de materia (*mass balance*)
Todo lo que entra tiene que salir por algún sitio: producto + aguas madres + lavados + residuos + pérdidas. Si el balance no cuadra, puede haber un error de pesada, un derrame o una fuga.

### Rendimientos fuera de rango
Cada hoja tiene un **rango esperado** (p. ej. 80–90 %). Un rendimiento fuera de rango, **alto o bajo**, se investiga:
- **Bajo**: pérdidas, reacción incompleta.
- **Alto**: el producto puede estar **húmedo** o con impurezas. ¡Un rendimiento "demasiado bueno" también es sospechoso!
`,
    plant: `
Teórico: 69,26 kg. Obtenido: 58,9 kg de producto seco.

Rendimiento = 58,9 / 69,26 × 100 = **85,0 %**. Rango de la hoja: 80–90 % → cumple.
`,
    batchRecord: `
- Peso de producto obtenido, rendimiento calculado y rango esperado.
- Verificación del cálculo por un segundo operador.
- Si está fuera de rango: referencia a la desviación.
`,
    terms: [
      { es: "Rendimiento", en: "Yield", def: "Producto obtenido frente al teórico, en %." },
      { es: "Riqueza / contenido", en: "Assay", def: "Porcentaje de sustancia pura en un material." },
      { es: "Balance de materia", en: "Mass balance", def: "Cuenta de todo lo que entra y sale de una etapa." },
      { es: "Pérdidas", en: "Losses", def: "Producto que no se recupera (aguas madres, lavados, equipos)." },
    ],
    quiz: [
      {
        kind: "number",
        q: "Teórico 69,26 kg, obtenido 58,9 kg. ¿Rendimiento?",
        answer: 85.0,
        tolerance: 0.002,
        unit: "%",
        explain: "58,9 / 69,26 × 100 = 85,0 %.",
      },
      {
        kind: "choice",
        q: "El rendimiento sale del 104 %. ¿Qué es lo más probable?",
        options: [
          "Una reacción excelente",
          "El producto está húmedo o hay un error de pesada o de cálculo",
          "Se ha creado materia",
          "Nada, se anota y se sigue",
        ],
        answer: 1,
        explain: "No se puede obtener más que el teórico. Hay que revisar y comunicar.",
      },
      {
        kind: "number",
        q: "Obtienes 60,0 kg de producto con una riqueza del 98,5 %. ¿Cuántos kg de producto puro son?",
        answer: 59.1,
        tolerance: 0.001,
        unit: "kg",
        explain: "60,0 × 98,5 / 100 = 59,1 kg.",
      },
    ],
  },
  {
    slug: "calor-de-reaccion",
    level: 2,
    order: 6,
    title: "Calor de reacción y reacciones descontroladas",
    titleEn: "Reaction heat and thermal runaway",
    minutes: 18,
    summary: "Por qué tantas adiciones se hacen despacio y con refrigeración: la seguridad térmica de las reacciones.",
    body: `
### Exotérmicas y endotérmicas
- **Exotérmica** (*exothermic*): desprende calor. La mayoría de las reacciones de planta (neutralizaciones, adiciones de reactivos activos, hidrogenaciones).
- **Endotérmica** (*endothermic*): absorbe calor. Por ejemplo, disolver algunas sales.

### El balance de calor
En un reactor, la temperatura sube si **el calor generado** es mayor que **el calor que retira la camisa**. Hay dos formas de controlarlo:
1. **Controlar la velocidad de adición** (*dosing rate*): si el reactivo se añade poco a poco, el calor sale poco a poco.
2. **Refrigeración** suficiente en la camisa.

### Reacción descontrolada (*thermal runaway*)
Si la temperatura sube, la reacción se acelera, genera más calor, sube más la temperatura… Es un círculo que puede acabar en **ebullición violenta, sobrepresión, rotura del reactor o incendio**.

Situaciones peligrosas:
- Fallo de refrigeración o de agitación.
- Añadir el reactivo demasiado rápido.
- **Acumulación** (*accumulation*): añadir reactivo que **no está reaccionando** (por ejemplo porque la temperatura está demasiado baja) y que luego reacciona de golpe.

### Aumento adiabático de temperatura
Cuánto subiría la temperatura si **no se retirara nada de calor**:

> ΔT adiabático = calor de reacción (kJ por kg de **masa total** de reacción) / calor específico (kJ/kg·K)

El calor va referido a toda la masa que hay en el reactor (reactivos y disolvente), no solo al reactivo. Si el dato viene en kJ por mol o por kg de reactivo, primero hay que repartirlo entre toda la masa.

Con 250 kJ/kg y 2,0 kJ/(kg·K): ΔT = **125 °C**. Si partes de 20 °C, podrías llegar a 145 °C: por encima del punto de ebullición de muchos disolventes.

### Reglas para el operador
- **Agitación en marcha** antes de añadir reactivos (sin agitar, el reactivo se acumula).
- Respetar la velocidad de adición y los límites de temperatura.
- Si la temperatura sube sin control: **parar la adición**, máxima refrigeración y avisar, según el procedimiento de emergencia.
`,
    plant: `
*"Añadir NaOH 30 % en 2 h manteniendo T ≤ 25 °C. Si T > 25 °C, detener la adición."*

A los 40 minutos la T llega a 25,5 °C. Detienes la bomba, esperas a que baje con la refrigeración, reanudas más despacio, y lo registras todo. Si se ha superado un límite crítico, además se comunica como desviación.
`,
    batchRecord: `
- Hora de inicio y fin de la adición y T máxima alcanzada.
- Registros de T cada pocos minutos durante adiciones exotérmicas.
- Comprobación de que el agitador funciona antes de la adición.
`,
    terms: [
      { es: "Exotérmica", en: "Exothermic", def: "Reacción que desprende calor." },
      { es: "Endotérmica", en: "Endothermic", def: "Reacción que absorbe calor." },
      { es: "Reacción descontrolada", en: "Thermal runaway", def: "Aumento de temperatura que acelera la reacción y se realimenta." },
      { es: "Acumulación", en: "Accumulation", def: "Reactivo añadido que aún no ha reaccionado y puede hacerlo de golpe." },
      { es: "Velocidad de adición", en: "Dosing / addition rate", def: "Cantidad de reactivo añadida por unidad de tiempo." },
      { es: "Aumento adiabático de temperatura", en: "Adiabatic temperature rise", def: "Subida de temperatura si no se retira nada de calor." },
      { es: "Calor específico", en: "Specific heat capacity (cp)", def: "Energía necesaria para subir 1 °C un kilo de sustancia." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "¿Por qué el agitador debe estar en marcha antes de una adición exotérmica?",
        options: [
          "Para que suene menos la bomba",
          "Para que el reactivo se mezcle y reaccione sin acumularse",
          "Para enfriar el motor",
          "No hace falta",
        ],
        answer: 1,
        explain: "Sin agitación el reactivo se acumula y puede reaccionar de golpe al arrancar el agitador.",
      },
      {
        kind: "number",
        q: "Calor de reacción 180 kJ/kg y calor específico 1,8 kJ/(kg·K). ¿Cuál es el aumento adiabático de temperatura?",
        answer: 100,
        tolerance: 0.001,
        unit: "°C",
        explain: "180 / 1,8 = 100 °C.",
      },
      {
        kind: "choice",
        q: "Durante una adición, la temperatura sube por encima del límite. ¿Qué es lo primero?",
        options: ["Añadir más deprisa para acabar antes", "Detener la adición", "Apagar el agitador", "Abrir la boca de hombre"],
        answer: 1,
        explain: "Detener la adición corta la fuente de calor. Luego refrigeración y aviso.",
      },
    ],
  },
  {
    slug: "velocidad-y-catalisis",
    level: 2,
    order: 8,
    title: "Velocidad de reacción y catalizadores",
    titleEn: "Reaction rate and catalysis",
    minutes: 12,
    summary: "Qué hace que una reacción vaya más rápida y cómo se sabe que ha terminado.",
    body: `
### ¿De qué depende la velocidad? (*reaction rate*)
- **Temperatura**: a más temperatura, más rápido. Regla orientativa: la velocidad **se multiplica por 2 o 3 cada 10 °C**. Por eso un pequeño exceso de temperatura puede acelerar mucho una reacción (o una descomposición).
- **Concentración**: más concentrado, más choques entre moléculas, más rápido.
- **Agitación y contacto**: en mezclas de dos fases o con sólidos, la reacción solo ocurre donde se tocan.
- **Tamaño de partícula**: un sólido en polvo fino reacciona más rápido que en trozos.
- **Catalizador** (*catalyst*).

### Catalizadores
Aceleran la reacción **sin consumirse**. Ejemplos en API:
- **Pd/C** (paladio sobre carbón) en hidrogenaciones.
- Ácidos o bases en pequeña cantidad.
- **Enzimas** (catalizadores biológicos).

Los catalizadores de metal se retiran después por filtración y se controla el **metal residual** en el API (guía ICH Q3D de impurezas elementales; más detalle en el nivel 3).

### ¿Cuándo ha terminado la reacción?
No se sabe "a ojo". Se toma una muestra y se analiza: **control en proceso** (*IPC, in-process control*), normalmente por HPLC o TLC (técnicas que verás en el nivel 7). Ejemplo: "material de partida ≤ 0,5 %". Si no cumple, se espera y se repite según la hoja.
`,
    plant: `
La hoja dice *"Mantener a 60 ± 2 °C. IPC a las 3 h: material de partida ≤ 1,0 %. Si no cumple, mantener 1 h más y repetir."*

A las 3 h el IPC da 1,8 % → sigues 1 h. A las 4 h da 0,6 % → cumple, pasas al siguiente paso. Registras ambos resultados.
`,
    batchRecord: `
- Tiempo de reacción y temperatura.
- Muestras IPC con hora, resultado y decisión.
- Cantidad de catalizador y su eliminación (filtración).
`,
    terms: [
      { es: "Velocidad de reacción", en: "Reaction rate", def: "Rapidez con que se consumen reactivos o se forman productos." },
      { es: "Catalizador", en: "Catalyst", def: "Sustancia que acelera una reacción sin consumirse." },
      { es: "Control en proceso", en: "In-process control (IPC)", def: "Análisis durante el proceso para decidir si se continúa." },
      { es: "Impurezas elementales", en: "Elemental impurities (ICH Q3D)", def: "Restos de metales (como el paladio) en el producto." },
      { es: "Cromatografía en capa fina", en: "Thin-layer chromatography (TLC)", def: "Análisis rápido que separa los componentes de una muestra sobre una placa." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "¿Cómo se sabe que una reacción ha terminado?",
        options: ["Por el color", "Por el tiempo que dice la hoja, sin más", "Con un análisis de control en proceso (IPC)", "Por el olor"],
        answer: 2,
        explain: "El IPC mide cuánto reactivo queda y permite decidir.",
      },
      {
        kind: "number",
        q: "Si la velocidad se duplica cada 10 °C, ¿cuántas veces más rápida es una reacción a 50 °C que a 20 °C?",
        answer: 8,
        tolerance: 0.001,
        unit: "veces",
        explain: "Tres saltos de 10 °C: 2 × 2 × 2 = 8 veces.",
      },
      {
        kind: "choice",
        q: "El IPC a las 3 h da 1,8 % de material de partida (límite ≤ 1,0 %). La hoja dice «mantener 1 h y repetir». ¿Qué haces?",
        options: [
          "Subir la temperatura para acabar antes",
          "Mantener 1 h más en las condiciones de la hoja y repetir el IPC",
          "Pasar al siguiente paso",
          "Anotar 1,0 %",
        ],
        answer: 1,
        explain: "Se sigue exactamente lo previsto en la hoja; cambiar la temperatura por tu cuenta sería una desviación.",
      },
    ],
  },
  {
    slug: "equilibrio-quimico",
    level: 2,
    order: 10,
    title: "Equilibrio químico",
    titleEn: "Chemical equilibrium",
    minutes: 12,
    summary: "Reacciones que no llegan al final y cómo se las empuja hacia el producto.",
    body: `
### Reacciones reversibles (*reversible reactions*)
Algunas reacciones pueden ir en los dos sentidos: los productos vuelven a formar reactivos. Se escribe con doble flecha:

> ácido + alcohol ⇌ éster + agua

Llega un momento en que las dos velocidades se igualan y las cantidades ya no cambian: es el **equilibrio** (*equilibrium*). No significa que haya cantidades iguales, sino que **dejan de cambiar**.

### Principio de Le Châtelier
Si se cambian las condiciones, el equilibrio **se desplaza para compensar**. Así se empuja hacia el producto:
- **Exceso de un reactivo** (por ejemplo, más alcohol).
- **Retirar un producto**: destilar el agua que se forma (con un separador **Dean-Stark**) o precipitar el producto.
- **Temperatura**: en una reacción exotérmica, enfriar favorece los productos (pero va más lenta). En una endotérmica, calentar favorece los productos.

### Equilibrios que verás
- **pH y sales**: la formación de una sal de un API es un equilibrio ácido-base.
- **Solubilidad**: la cristalización es un equilibrio entre sólido y disolución.
`,
    plant: `
En una esterificación la hoja dice *"Reflujo con tolueno separando agua en el Dean-Stark hasta que no se recoja más agua"*. Al quitar el agua, el equilibrio se desplaza hacia el éster. Registras el volumen de agua recogido.
`,
    batchRecord: `
- Volumen de agua o destilado retirado.
- Tiempo de reflujo y temperatura.
`,
    terms: [
      { es: "Reacción reversible", en: "Reversible reaction", def: "Reacción que puede ocurrir en los dos sentidos." },
      { es: "Equilibrio químico", en: "Chemical equilibrium", def: "Estado en que las cantidades de reactivos y productos dejan de cambiar." },
      { es: "Principio de Le Châtelier", en: "Le Chatelier's principle", def: "Un equilibrio se desplaza para compensar un cambio en las condiciones." },
      { es: "Reflujo", en: "Reflux", def: "Hervir y condensar los vapores devolviéndolos al reactor." },
      { es: "Separador Dean-Stark", en: "Dean-Stark trap", def: "Dispositivo que separa y retira el agua del destilado durante un reflujo." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "En una reacción que forma agua, ¿cómo se aumenta la cantidad de producto?",
        options: ["Añadiendo agua", "Retirando el agua que se forma", "Parando la agitación", "No se puede"],
        answer: 1,
        explain: "Según Le Châtelier, al retirar un producto el equilibrio se desplaza para formar más.",
      },
      {
        kind: "choice",
        q: "En el equilibrio químico…",
        options: [
          "Siempre hay la misma cantidad de reactivos y productos",
          "La reacción se ha parado del todo",
          "Las cantidades dejan de cambiar porque las dos reacciones van a la misma velocidad",
          "Solo quedan productos",
        ],
        answer: 2,
        explain: "Es un equilibrio dinámico: las dos reacciones siguen, pero se compensan.",
      },
      {
        kind: "choice",
        q: "En una reacción exotérmica en equilibrio, ¿qué hace enfriar sobre la cantidad de producto en el equilibrio?",
        options: [
          "La disminuye",
          "La aumenta, aunque la reacción vaya más lenta",
          "No cambia nada",
          "Detiene la reacción para siempre",
        ],
        answer: 1,
        explain: "Según Le Châtelier, quitar calor favorece el sentido que lo desprende: el de los productos.",
      },
    ],
  },
  {
    slug: "oxidacion-reduccion",
    level: 2,
    order: 12,
    title: "Oxidación y reducción",
    titleEn: "Oxidation and reduction (redox)",
    minutes: 15,
    summary: "Reacciones en las que se intercambian electrones, muy comunes en síntesis y con riesgos propios.",
    body: `
### La idea
- **Oxidación** (*oxidation*): una sustancia **pierde electrones** (en orgánica, a menudo gana oxígeno o pierde hidrógeno).
- **Reducción** (*reduction*): una sustancia **gana electrones** (en orgánica, a menudo gana hidrógeno o pierde oxígeno).

Siempre van juntas: lo que uno pierde, otro lo gana. Por eso se llaman **redox**.
- El **oxidante** (*oxidizing agent*) se reduce.
- El **reductor** (*reducing agent*) se oxida.

### Ejemplos en planta
| Tipo | Reactivo | Riesgo principal |
|---|---|---|
| Hidrogenación (reducción) | H₂ + catalizador Pd/C | H₂ muy inflamable; el catalizador seco con disolvente puede **inflamarse solo** (pirofórico) |
| Reducción con hidruros | NaBH₄, LiAlH₄ | Desprenden **H₂** con agua o ácidos |
| Oxidación | Peróxido de hidrógeno (agua oxigenada) | Libera oxígeno y calor; puede descomponerse de forma violenta |
| Oxidación | Hipoclorito sódico (lejía) | **Con ácidos libera cloro, un gas tóxico** (frase EUH031 de su etiqueta). Nunca se mezcla con ácidos ni con sus residuos |

### Reglas de seguridad
- Los oxidantes **nunca** se mezclan con disolventes o materia orgánica fuera del procedimiento.
- El catalizador de Pd/C se maneja **húmedo** y bajo nitrógeno.
- Las hidrogenaciones se hacen en reactores preparados para presión, con inertización antes y después.
`,
    plant: `
Fin de una hidrogenación: *"Despresurizar, purgar 3 veces con N₂, filtrar el catalizador manteniéndolo húmedo con disolvente."* Si la torta de catalizador se seca al aire, puede arder. Por eso se mantiene húmeda y se guarda en un recipiente con agua.
`,
    batchRecord: `
- Presión de hidrógeno, temperatura y consumo de H₂.
- Purgas con nitrógeno antes y después.
- Cantidad de catalizador cargado y recuperado.
`,
    terms: [
      { es: "Oxidación", en: "Oxidation", def: "Pérdida de electrones." },
      { es: "Reducción", en: "Reduction", def: "Ganancia de electrones." },
      { es: "Oxidante", en: "Oxidizing agent / oxidizer", def: "Sustancia que oxida a otra y se reduce." },
      { es: "Reductor", en: "Reducing agent", def: "Sustancia que reduce a otra y se oxida." },
      { es: "Hidrogenación", en: "Hydrogenation", def: "Adición de hidrógeno a una molécula, normalmente con catalizador." },
      { es: "Pirofórico", en: "Pyrophoric", def: "Que puede inflamarse solo al contacto con el aire." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "En una reacción redox, el oxidante…",
        options: ["Se oxida", "Se reduce", "No cambia", "Se evapora"],
        answer: 1,
        explain: "El oxidante quita electrones a otra sustancia y por tanto él los gana: se reduce.",
      },
      {
        kind: "choice",
        q: "¿Por qué el catalizador de Pd/C se mantiene húmedo?",
        options: ["Para que pese más", "Porque seco puede inflamarse al aire", "Para que reaccione menos", "Por limpieza"],
        answer: 1,
        explain: "El Pd/C seco con restos de disolvente o hidrógeno es pirofórico.",
      },
      {
        kind: "choice",
        q: "Se carga borohidruro de sodio (NaBH₄). ¿Qué gas puede desprender si entra en contacto con agua o ácido?",
        options: [
          "Oxígeno",
          "Hidrógeno, muy inflamable",
          "Nitrógeno",
          "Cloro",
        ],
        answer: 1,
        explain: "Los hidruros reaccionan con agua y ácidos liberando H₂: hace falta venteo e inertización.",
      },
    ],
  },
  {
    slug: "reacciones-en-api",
    level: 2,
    order: 14,
    title: "Tipos de reacción habituales en API",
    titleEn: "Common reaction types in API manufacturing",
    minutes: 15,
    summary: "Un mapa de las reacciones que más verás, qué hacen y qué riesgo tiene cada una.",
    body: `
No necesitas saber el mecanismo de cada reacción, pero sí **qué hace** y **qué hay que vigilar**.

| Reacción | Qué hace | Qué vigilar |
|---|---|---|
| **Formación de sal** (*salt formation*) | Une el API con un ácido (HCl, ácido maleico…) o una base para mejorar solubilidad o estabilidad | pH, temperatura, cristalización |
| **Hidrólisis** (*hydrolysis*) | Rompe un enlace usando agua (con ácido o base) | Exotermia al neutralizar, pH final |
| **Esterificación / amidación** | Une un ácido con un alcohol (éster) o con una amina (amida) | Retirar agua, equivalentes |
| **Acilación** (*acylation*) | Añade un grupo acilo (por ejemplo, con anhídrido acético) | Exotermia, adición lenta |
| **Alquilación** (*alkylation*) | Añade un grupo alquilo (por ejemplo, metilo) | Reactivos tóxicos (algunos agentes alquilantes son mutagénicos) |
| **Hidrogenación** | Añade H₂ con catalizador | Presión, H₂ inflamable, catalizador pirofórico |
| **Reacción de Grignard** | Forma enlaces carbono-carbono con un compuesto de magnesio | **Nada de agua**: reacciona violentamente |
| **Acoplamientos con paladio** (*Suzuki*, *Buchwald*) | Une dos fragmentos de molécula | Inertización (el catalizador no tolera O₂), metal residual |
| **Protección / desprotección** | "Tapa" temporalmente una parte de la molécula y luego la "destapa" | Desprenden gases (CO₂, isobuteno) en algunas desprotecciones |

### Impurezas mutagénicas
Algunos reactivos (por ejemplo ciertos agentes alquilantes) pueden dañar el ADN. Su nivel en el API está muy limitado por la guía **ICH M7**. Por eso se controlan tan estrictamente las etapas que los usan y las que los eliminan.
`,
    plant: `
En la hoja ves "Etapa 3: desprotección Boc con HCl en isopropanol". No hace falta saber química orgánica para notar lo importante: **desprende gas** (CO₂ e isobuteno), así que hay que asegurar que la salida de gases (venteo) está abierta y que la adición es lenta.
`,
    batchRecord: `
- Nombre de la etapa y tipo de reacción.
- Avisos de seguridad específicos (desprendimiento de gas, exotermia, sensibilidad al agua).
- IPC de fin de reacción.
`,
    terms: [
      { es: "Formación de sal", en: "Salt formation", def: "Reacción del API con un ácido o una base para obtener una sal." },
      { es: "Hidrólisis", en: "Hydrolysis", def: "Ruptura de un enlace por acción del agua." },
      { es: "Alquilación", en: "Alkylation", def: "Introducción de un grupo alquilo en una molécula." },
      { es: "Reactivo de Grignard", en: "Grignard reagent", def: "Compuesto organomagnésico muy reactivo con el agua." },
      { es: "Acoplamiento", en: "Coupling reaction", def: "Reacción que une dos fragmentos, a menudo con catalizador de paladio." },
      { es: "Grupo protector", en: "Protecting group", def: "Grupo que protege temporalmente una parte de la molécula." },
      { es: "Impureza mutagénica", en: "Mutagenic impurity (ICH M7)", def: "Impureza que puede dañar el ADN; tiene límites muy bajos." },
      { es: "Venteo", en: "Vent", def: "Salida de gases del equipo hacia un sistema de tratamiento." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "¿Qué reacción es especialmente peligrosa si entra agua?",
        options: ["Hidrólisis", "Formación de sal", "Reacción de Grignard", "Cristalización"],
        answer: 2,
        explain: "Los reactivos de Grignard reaccionan violentamente con el agua.",
      },
      {
        kind: "choice",
        q: "¿Para qué se forma una sal de un API?",
        options: [
          "Para que sepa salado",
          "Para mejorar su solubilidad o estabilidad",
          "Para aumentar el rendimiento siempre",
          "Para eliminar el disolvente",
        ],
        answer: 1,
        explain: "Muchos fármacos se comercializan como sal (por ejemplo, clorhidrato) por estas razones.",
      },
      {
        kind: "choice",
        q: "Una desprotección Boc con HCl desprende CO₂ e isobuteno. ¿Qué compruebas antes de empezar la adición?",
        options: [
          "Que el venteo está abierto hacia su tratamiento y que la adición será lenta",
          "Que el reactor está cerrado herméticamente",
          "Nada especial",
          "Que el agitador está parado",
        ],
        answer: 0,
        explain: "Un gas que se desprende en un reactor cerrado sube la presión. El venteo libre y la adición lenta lo controlan.",
      },
    ],
  },
];

// Las lecciones «a fondo» van cada una en su archivo nivel2-tema.ts.
export const nivel2: Lesson[] = [...reacciones];
