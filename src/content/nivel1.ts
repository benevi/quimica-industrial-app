import type { Lesson } from "./types";

export const nivel1: Lesson[] = [
  {
    slug: "la-materia",
    level: 1,
    order: 1,
    title: "La materia y sus estados",
    titleEn: "Matter and states of matter",
    minutes: 12,
    summary: "Sólido, líquido y gas; fusión, ebullición y solubilidad, la base de casi todas las etapas de planta.",
    body: `
Todo lo que ocupa espacio y tiene masa es **materia** (*matter*).

### Estados (*states*)
- **Sólido** (*solid*): forma fija. Tu API al final es un sólido.
- **Líquido** (*liquid*): toma la forma del recipiente. Disolventes, soluciones.
- **Gas** (*gas*): ocupa todo el espacio. Nitrógeno, vapores de disolvente.

### Cambios de estado
- **Fusión** (*melting*): sólido → líquido. El **punto de fusión** sirve para identificar un producto puro.
- **Ebullición / evaporación** (*boiling / evaporation*): líquido → gas. Con vacío, un líquido hierve a **menor temperatura**; por eso se destila a vacío, para no dañar el producto.
- **Condensación** (*condensation*): gas → líquido. Ocurre en el condensador del reactor.
- **Cristalización** (*crystallization*): un sólido aparece ordenado a partir de una disolución.

### Mezclas y sustancias puras
- **Sustancia pura** (*pure substance*): un solo componente (lo que queremos que sea el API).
- **Mezcla** (*mixture*): varios componentes. La mezcla de reacción lo es.

### Solubilidad (*solubility*)
Cuánto sólido se puede disolver en un líquido. Casi siempre **aumenta con la temperatura**: se disuelve en caliente y, al enfriar, el producto cristaliza. Este es el truco de la cristalización.
`,
    plant: `
Etapa típica: *"Calentar a 65 °C hasta disolución completa, filtrar en caliente y enfriar a 0–5 °C en 4 h"*.

1. En caliente, el producto se disuelve.
2. La filtración en caliente quita partículas insolubles.
3. Al enfriar, la solubilidad baja y el producto cristaliza; las impurezas se quedan en el líquido (aguas madres).
`,
    batchRecord: `
- "Comprobar visualmente disolución completa" (sí/no, hora, firma).
- Rampas de enfriamiento: temperatura y hora en varios puntos.
- Temperatura de ebullición o de destilación a cierto vacío.
`,
    terms: [
      { es: "Punto de fusión", en: "Melting point", def: "Temperatura a la que un sólido se convierte en líquido." },
      { es: "Punto de ebullición", en: "Boiling point", def: "Temperatura a la que un líquido hierve. Baja con el vacío." },
      { es: "Solubilidad", en: "Solubility", def: "Cantidad máxima de sustancia que se disuelve en un disolvente a una temperatura." },
      { es: "Cristalización", en: "Crystallization", def: "Formación de un sólido ordenado a partir de una disolución." },
      { es: "Aguas madres", en: "Mother liquor", def: "Líquido que queda tras separar los cristales; contiene impurezas y algo de producto." },
      { es: "Condensador", en: "Condenser", def: "Intercambiador frío que convierte vapores en líquido." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "¿Por qué se destila a vacío?",
        options: [
          "Para que el líquido hierva a menor temperatura",
          "Para que pese menos",
          "Para que no haga falta condensador",
          "Para aumentar la presión",
        ],
        answer: 0,
        explain: "A menor presión el punto de ebullición baja, así el producto no se calienta tanto.",
      },
      {
        kind: "choice",
        q: "En una cristalización, ¿dónde quedan mayoritariamente las impurezas?",
        options: ["En los cristales", "En las aguas madres", "En el condensador", "Se evaporan"],
        answer: 1,
        explain: "La idea de cristalizar es que el producto forme cristales y las impurezas se queden disueltas.",
      },
      {
        kind: "choice",
        q: "Una etapa dice: «calentar hasta disolución completa y enfriar lentamente hasta 0–5 °C». ¿Qué operación es?",
        options: [
          "Destilación",
          "Cristalización por enfriamiento",
          "Extracción",
          "Secado",
        ],
        answer: 1,
        explain: "Al enfriar baja la solubilidad y el producto cristaliza; las impurezas quedan en las aguas madres.",
      },
    ],
  },
  {
    slug: "atomos-y-tabla-periodica",
    level: 1,
    order: 2,
    title: "Átomos y tabla periódica",
    titleEn: "Atoms and the periodic table",
    minutes: 15,
    summary: "De qué está hecha la materia y cómo leer la tabla periódica para sacar la masa atómica.",
    body: `
### El átomo (*atom*)
La pieza más pequeña de un elemento. Tiene:
- **Núcleo** con **protones** (+) y **neutrones** (sin carga).
- **Electrones** (−) alrededor. Son los que participan en las reacciones.

### Elemento (*element*)
Tipo de átomo definido por su número de protones (**número atómico**, Z). Hay 118; en farmacia se usan pocos:

| Símbolo | Elemento | Z | Masa atómica (g/mol) |
|---|---|---|---|
| H | Hidrógeno (*hydrogen*) | 1 | 1,008 |
| C | Carbono (*carbon*) | 6 | 12,011 |
| N | Nitrógeno (*nitrogen*) | 7 | 14,007 |
| O | Oxígeno (*oxygen*) | 8 | 15,999 |
| Na | Sodio (*sodium*) | 11 | 22,990 |
| S | Azufre (*sulfur*) | 16 | 32,06 |
| Cl | Cloro (*chlorine*) | 17 | 35,45 |
| K | Potasio (*potassium*) | 19 | 39,098 |
| Pd | Paladio (*palladium*) | 46 | 106,42 |

El paladio aparece como **catalizador** (Pd/C) en hidrogenaciones.

### La tabla periódica (*periodic table*)
- **Filas** (periodos) y **columnas** (grupos). Los de una misma columna se comportan parecido.
- Izquierda: **metales** (Na, K reaccionan con agua). Derecha: **no metales** (O, N, Cl). Última columna: **gases nobles**, casi no reaccionan.
- En cada casilla, el número decimal es la **masa atómica**: la usarás para calcular masas molares.
`,
    plant: `
En una ficha de seguridad lees "hidruro de sodio (NaH)". Na está a la izquierda de la tabla (metal muy reactivo): reacciona violentamente con agua y desprende hidrógeno inflamable. Por eso se maneja en atmósfera de nitrógeno y sin humedad.
`,
    batchRecord: `
- Fórmulas de reactivos (NaOH, HCl, Pd/C…) en la lista de materiales.
- Masas molares en el cálculo de cargas.
- Avisos de seguridad ligados al elemento (metales reactivos, halógenos).
`,
    terms: [
      { es: "Átomo", en: "Atom", def: "Unidad más pequeña de un elemento." },
      { es: "Elemento", en: "Element", def: "Sustancia formada por un solo tipo de átomo." },
      { es: "Número atómico", en: "Atomic number (Z)", def: "Número de protones del núcleo." },
      { es: "Masa atómica", en: "Atomic mass", def: "Masa media de un átomo del elemento, en g/mol." },
      { es: "Catalizador", en: "Catalyst", def: "Sustancia que acelera una reacción sin consumirse." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "¿Qué partículas del átomo participan en las reacciones químicas?",
        options: ["Protones", "Neutrones", "Electrones", "Ninguna"],
        answer: 2,
        explain: "Las reacciones consisten en cambios en cómo se reparten los electrones.",
      },
      {
        kind: "choice",
        q: "¿Cuál es el símbolo del cloro?",
        options: ["C", "Cl", "Co", "Ch"],
        answer: 1,
        explain: "Cl. C es carbono y Co es cobalto.",
      },
      {
        kind: "number",
        q: "Calcula la masa molar del cloruro de sodio, NaCl (Na = 22,99; Cl = 35,45).",
        answer: 58.44,
        tolerance: 0.005,
        unit: "g/mol",
        explain: "22,99 + 35,45 = 58,44 g/mol.",
      },
    ],
  },
  {
    slug: "enlaces-y-polaridad",
    level: 1,
    order: 3,
    title: "Enlaces, moléculas y polaridad",
    titleEn: "Bonds, molecules and polarity",
    minutes: 12,
    summary: "Cómo se unen los átomos y por qué el agua y el aceite no se mezclan.",
    body: `
### Molécula (*molecule*)
Grupo de átomos unidos. Se escribe con una **fórmula** (*formula*):
- H₂O: 2 hidrógenos y 1 oxígeno.
- CH₃OH (metanol): 1 C, 4 H, 1 O.

### Tipos de enlace (*bond*)
- **Covalente** (*covalent*): los átomos **comparten** electrones. Típico de moléculas orgánicas (casi todos los API).
- **Iónico** (*ionic*): un átomo **cede** electrones a otro y quedan iones + y − que se atraen. Ejemplo: sal común, NaCl. Muchos API se venden como **sal** (clorhidrato, sodio…) para que sean más solubles o estables.

### Polaridad (*polarity*)
Si los electrones se reparten de forma desigual, la molécula tiene un lado algo positivo y otro algo negativo: es **polar**.
- Polares: agua, metanol, etanol, acetona.
- Apolares (*non-polar*): heptano, hexano, tolueno.

**Regla de oro: "lo semejante disuelve a lo semejante"** (*like dissolves like*). Lo polar se mezcla con lo polar; lo apolar con lo apolar. Agua y tolueno no se mezclan: forman **dos fases**.
`,
    plant: `
En una **extracción** (*extraction*) se añade agua a una disolución del producto en tolueno, se agita y se deja reposar. Se forman dos capas:
- Arriba, la menos densa (tolueno, 0,87 kg/L) con el producto.
- Abajo, el agua (1,00 kg/L) con las sales e impurezas polares.

Se descarga la fase inferior por la válvula de fondo vigilando el visor hasta ver la **interfase**.
`,
    batchRecord: `
- "Agitar 15 min, dejar decantar 30 min".
- "Separar fase inferior (acuosa) a residuo / a recipiente X".
- Identificación de qué fase se guarda y cuál se desecha (¡error típico y grave!).
`,
    terms: [
      { es: "Molécula", en: "Molecule", def: "Conjunto de átomos unidos por enlaces." },
      { es: "Enlace covalente", en: "Covalent bond", def: "Unión en la que los átomos comparten electrones." },
      { es: "Enlace iónico", en: "Ionic bond", def: "Unión por atracción entre iones de carga opuesta." },
      { es: "Polar / apolar", en: "Polar / non-polar", def: "Con o sin reparto desigual de cargas en la molécula." },
      { es: "Fase", en: "Phase / layer", def: "Cada una de las capas que se forman con líquidos que no se mezclan." },
      { es: "Interfase", en: "Interface", def: "Frontera entre dos fases." },
      { es: "Decantar", en: "Settle / decant", def: "Dejar reposar para que las fases se separen." },
      { es: "Sal (de un API)", en: "Salt form", def: "API combinado con un ácido o base para mejorar su solubilidad o estabilidad." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "¿Cuál de estos disolventes se mezcla bien con el agua?",
        options: ["Heptano", "Tolueno", "Metanol", "Aceite"],
        answer: 2,
        explain: "El metanol es polar, como el agua.",
      },
      {
        kind: "choice",
        q: "Mezclas diclorometano (1,33 kg/L) y agua. ¿Qué fase queda abajo?",
        options: ["El agua", "El diclorometano", "Ninguna, se mezclan", "Depende del color"],
        answer: 1,
        explain: "La fase más densa queda abajo. El diclorometano es más denso que el agua.",
      },
      {
        kind: "choice",
        q: "Extraes con tolueno (0,87 kg/L) y agua. ¿Dónde queda la fase orgánica?",
        options: [
          "Abajo",
          "Arriba, porque es menos densa que el agua",
          "Mezclada con el agua",
          "Depende de la velocidad del agitador",
        ],
        answer: 1,
        explain: "El tolueno no se mezcla con el agua y es menos denso: forma la capa superior.",
      },
    ],
  },
  {
    slug: "el-mol",
    level: 1,
    order: 4,
    title: "El mol: contar moléculas pesando",
    titleEn: "The mole",
    minutes: 18,
    summary: "El concepto más importante para entender una hoja de producción: moles, masa molar y equivalentes.",
    body: `
### ¿Por qué el mol?
Los átomos reaccionan **uno a uno** (o dos a uno…), pero no podemos contarlos. El **mol** (*mole*) es un "paquete" fijo de partículas: 6,022 × 10²³. Como una docena, pero enorme.

### Masa molar (*molar mass*, M)
Lo que pesa un mol, en **g/mol**. Se calcula sumando las masas atómicas:

> Agua, H₂O: 2 × 1,008 + 16,00 = **18,02 g/mol**
> Hidróxido de sodio, NaOH: 22,99 + 16,00 + 1,008 = **40,00 g/mol**

### La fórmula clave
> **moles = masa / masa molar**  (n = m / M)
> **masa = moles × masa molar**

Con kg en lugar de g obtienes **kmol** (mil moles). Las cuentas son iguales.

### Equivalentes (*equivalents*, eq)
Las hojas de producción expresan los reactivos en **equivalentes** respecto al material de partida:
- "1,0 eq" = mismos moles que el material de partida.
- "1,2 eq" = 20 % más moles (un exceso para asegurar que la reacción se completa).

Pasos para calcular una carga:
1. Moles del material de partida = masa / M.
2. Moles del reactivo = moles de partida × eq.
3. Masa del reactivo = moles × M del reactivo.
`,
    plant: `
Partes de **50,0 kg** de un compuesto A (M = 151,2 g/mol) y hay que añadir **1,1 eq** de NaOH (M = 40,00 g/mol).

1. kmol de A = 50,0 / 151,2 = 0,3307 kmol
2. kmol de NaOH = 0,3307 × 1,1 = 0,3638 kmol
3. Masa de NaOH = 0,3638 × 40,00 = **14,55 kg**

El paracetamol tiene precisamente M = 151,2 g/mol: es un buen ejemplo para practicar.
`,
    batchRecord: `
- Columna "eq" en la lista de materiales.
- Pesos teóricos calculados a partir del peso real del material de partida.
- Si el material de partida pesa algo distinto a lo previsto, las cargas se **recalculan** (y se verifican).
`,
    terms: [
      { es: "Mol", en: "Mole (mol)", def: "Cantidad de sustancia con 6,022 × 10²³ partículas." },
      { es: "Masa molar", en: "Molar mass (MW, M)", def: "Masa de un mol de sustancia, en g/mol." },
      { es: "Equivalente", en: "Equivalent (eq, equiv.)", def: "Moles de un reactivo por cada mol de material de partida." },
      { es: "Material de partida", en: "Starting material", def: "Sustancia principal de la que parte una etapa de síntesis." },
      { es: "Exceso", en: "Excess", def: "Cantidad de reactivo por encima de la estrictamente necesaria." },
    ],
    quiz: [
      {
        kind: "number",
        q: "¿Cuántos moles hay en 80,0 g de NaOH (M = 40,00 g/mol)?",
        answer: 2,
        tolerance: 0.01,
        unit: "mol",
        explain: "80,0 / 40,00 = 2,00 mol.",
      },
      {
        kind: "number",
        q: "Calcula la masa molar del metanol, CH₃OH (C = 12,01; H = 1,008; O = 16,00).",
        answer: 32.04,
        tolerance: 0.005,
        unit: "g/mol",
        explain: "12,01 + 4 × 1,008 + 16,00 = 32,04 g/mol.",
      },
      {
        kind: "number",
        q: "Tienes 0,500 kmol de material de partida y la hoja pide 1,5 eq de HCl (M = 36,46). ¿Cuántos kg de HCl puro?",
        answer: 27.35,
        tolerance: 0.01,
        unit: "kg",
        explain: "0,500 × 1,5 = 0,750 kmol; 0,750 × 36,46 = 27,35 kg.",
      },
    ],
  },
  {
    slug: "disoluciones",
    level: 1,
    order: 5,
    title: "Disoluciones y concentración",
    titleEn: "Solutions and concentration",
    minutes: 15,
    summary: "Soluto, disolvente, % en peso, molaridad y diluciones: cómo preparar y leer soluciones.",
    body: `
### Partes de una disolución (*solution*)
- **Soluto** (*solute*): lo que se disuelve (sal, producto).
- **Disolvente** (*solvent*): el líquido que disuelve (agua, metanol…).

### Formas de expresar la concentración (*concentration*)
| Expresión | Significado | Ejemplo |
|---|---|---|
| % p/p (*w/w*) | g de soluto en 100 g de disolución | NaOH 30 % p/p = 30 kg de NaOH en 100 kg de disolución |
| % p/v (*w/v*) | g de soluto en 100 mL de disolución | NaCl 0,9 % p/v |
| g/L | gramos por litro | 50 g/L |
| mol/L o M (*molarity*) | moles por litro | HCl 1 M |
| Volúmenes (*volumes, vol*) | L de disolvente por kg de producto | "10 vol de metanol" = 10 L por kg |

### Cuidado con las soluciones comerciales
El ácido clorhídrico se compra al ~37 % p/p y la sosa al 30–50 % p/p. Si necesitas 10 kg de HCl **puro**, cargas 10 / 0,37 = **27,0 kg** de HCl 37 %.

### Diluciones (*dilutions*)
> C₁ × V₁ = C₂ × V₂

Para preparar 100 L de NaOH 2 M a partir de NaOH 10 M: V₁ = 2 × 100 / 10 = 20 L de la concentrada + agua hasta 100 L.

Esta fórmula **con litros** solo vale cuando la concentración es **por volumen** (mol/L, g/L, % p/v). Si la concentración es **en peso** (% p/p, como la sosa al 50 % o el clorhídrico al 37 %), se hace la misma cuenta **con kilos**:

> C₁ × m₁ = C₂ × m₂

Para preparar 100 kg de sosa al 10 % p/p a partir de sosa al 50 % p/p: m₁ = 10 × 100 / 50 = 20 kg de la concentrada + 80 kg de agua. El motivo: al diluir cambia la densidad, así que los litros no se pueden sumar ni repartir en proporción, pero los kilos sí. Para pasar esos kilos a litros hace falta la densidad de cada solución.

⚠️ **Siempre el ácido sobre el agua**, nunca al revés: al diluir se desprende mucho calor.
`,
    plant: `
La hoja dice "Disolver en 8 vol de etanol". El material de partida pesa 25,0 kg → 8 × 25,0 = **200 L** de etanol (unos 158 kg, porque la densidad es 0,79).
`,
    batchRecord: `
- Preparación de soluciones (NaOH 2 M, HCl 1 M…) con pesos, volúmenes y verificación.
- Riqueza (*assay*) de la materia prima según su certificado (por ejemplo HCl 36,5 %).
- Volúmenes de disolvente calculados en "vol".
`,
    terms: [
      { es: "Soluto", en: "Solute", def: "Sustancia que se disuelve." },
      { es: "Disolvente", en: "Solvent", def: "Líquido en el que se disuelve el soluto." },
      { es: "Molaridad", en: "Molarity (M)", def: "Moles de soluto por litro de disolución." },
      { es: "Volúmenes", en: "Volumes (vol)", def: "Litros de disolvente por kg de material de partida." },
      { es: "Riqueza", en: "Assay / purity", def: "Porcentaje de sustancia pura en un material comercial." },
      { es: "Dilución", en: "Dilution", def: "Bajar la concentración añadiendo disolvente." },
    ],
    quiz: [
      {
        kind: "number",
        q: "¿Cuántos kg de NaOH puro hay en 60 kg de sosa al 50 % p/p?",
        answer: 30,
        tolerance: 0.01,
        unit: "kg",
        explain: "60 × 0,50 = 30 kg.",
      },
      {
        kind: "number",
        q: "Quieres 50 L de HCl 1 M a partir de HCl 12 M. ¿Cuántos litros de HCl 12 M necesitas?",
        answer: 4.17,
        tolerance: 0.01,
        unit: "L",
        explain: "V₁ = 1 × 50 / 12 = 4,17 L, y se completa con agua hasta 50 L (añadiendo el ácido sobre el agua).",
      },
      {
        kind: "choice",
        q: "Al diluir un ácido concentrado...",
        options: ["Se echa el agua sobre el ácido", "Se echa el ácido sobre el agua, despacio", "Da igual el orden", "Se calienta antes"],
        answer: 1,
        explain: "Así el calor se reparte en mucha agua y se evitan proyecciones.",
      },
    ],
  },
  {
    slug: "acidos-bases-ph",
    level: 1,
    order: 6,
    title: "Ácidos, bases y pH",
    titleEn: "Acids, bases and pH",
    minutes: 15,
    summary: "La escala de pH, la neutralización y por qué se ajusta el pH en tantas etapas.",
    body: `
### Ácidos y bases
- **Ácido** (*acid*): libera iones H⁺. Ejemplos: HCl, H₂SO₄, ácido acético.
- **Base** (*base / alkali*): capta H⁺ o libera OH⁻. Ejemplos: NaOH (sosa), KOH, bicarbonato, amoníaco.

### La escala de pH
Normalmente de 0 a 14 (con ácidos o bases muy concentrados puede salirse de ese rango):
- **< 7 ácido**, **7 neutro**, **> 7 básico**.
- Cada unidad es un factor **10**: pH 3 es diez veces más ácido que pH 4.

### Neutralización (*neutralization*)
Ácido + base → sal + agua. Ejemplo: HCl + NaOH → NaCl + H₂O.
Es **exotérmica** (desprende calor): por eso se añade despacio y con refrigeración.

### ¿Por qué se ajusta el pH en planta?
- Para **precipitar** el producto: muchos API son insolubles a cierto pH y solubles a otro.
- Para que el producto pase a la fase acuosa u orgánica en una extracción.
- Para **neutralizar** antes de enviar a residuos.

### Medir el pH
Con **pH-metro** (*pH meter*), que debe estar **calibrado** con tampones (*buffers*) de pH 4, 7 y 10, o con tiras indicadoras para controles rápidos.
`,
    plant: `
*"Ajustar a pH 6,5–7,0 con NaOH 2 M manteniendo T < 25 °C."*

Añades la sosa poco a poco vigilando la temperatura. Cerca del objetivo el pH cambia muy rápido con poca sosa, así que se añade gota a gota. Si te pasas a pH 7,8, **no corrijas por tu cuenta**: avisa, porque puede requerir desviación.
`,
    batchRecord: `
- pH inicial y final, con hora y firma.
- Cantidad de ácido o base añadida.
- Identificación del pH-metro y su calibración del día.
- Temperatura durante la adición.
`,
    terms: [
      { es: "Ácido", en: "Acid", def: "Sustancia que libera iones H⁺." },
      { es: "Base / álcali", en: "Base / alkali", def: "Sustancia que capta H⁺ o libera OH⁻." },
      { es: "Sosa cáustica", en: "Caustic soda (NaOH)", def: "Hidróxido de sodio, base fuerte y corrosiva." },
      { es: "Neutralización", en: "Neutralization", def: "Reacción entre un ácido y una base que da sal y agua." },
      { es: "Exotérmica", en: "Exothermic", def: "Que desprende calor." },
      { es: "Tampón", en: "Buffer", def: "Disolución de pH conocido y estable; sirve para calibrar." },
      { es: "Precipitar", en: "Precipitate", def: "Hacer que un sólido aparezca en una disolución." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "Una disolución tiene pH 2. Es...",
        options: ["Muy básica", "Neutra", "Ácida", "Ligeramente básica"],
        answer: 2,
        explain: "Por debajo de 7 es ácida; pH 2 es bastante ácida.",
      },
      {
        kind: "choice",
        q: "Te has pasado del pH objetivo durante un ajuste. ¿Qué haces?",
        options: [
          "Añado ácido hasta volver al rango y no digo nada",
          "Anoto el valor real, paro y aviso al supervisor",
          "Cambio el valor en la hoja",
          "Sigo con el siguiente paso",
        ],
        answer: 1,
        explain: "Se registra el dato real y se comunica: puede ser una desviación que hay que evaluar.",
      },
      {
        kind: "number",
        q: "¿Cuántas veces más ácida es una disolución de pH 3 que una de pH 5?",
        answer: 100,
        tolerance: 0.001,
        unit: "veces",
        explain: "Dos unidades de pH: 10 × 10 = 100 veces.",
      },
    ],
  },
];
