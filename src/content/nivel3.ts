import type { Lesson } from "./types";
import { polimorfismoAFondo } from "./nivel3-polimorfismo";
import { impurezasAFondo } from "./nivel3-impurezas";
import { quiralidadAFondo } from "./nivel3-quiralidad";
import { organicaAFondo } from "./nivel3-organica";

const organica: Lesson[] = [
  {
    slug: "carbono-y-formulas",
    level: 3,
    order: 1,
    title: "El carbono y las fórmulas orgánicas",
    titleEn: "Carbon and organic formulas",
    minutes: 15,
    summary: "Por qué casi todos los principios activos son compuestos de carbono y cómo se leen sus fórmulas.",
    body: `
### Química orgánica (*organic chemistry*)
Es la química de los compuestos de **carbono** (C). Casi todos los principios activos (API) son moléculas orgánicas, y también la mayoría de los disolventes que usarás en planta.

### Por qué el carbono es especial
- Forma **4 enlaces** (es *tetravalente*).
- Se une consigo mismo formando **cadenas** largas, **ramificadas** y **anillos**.
- Se combina sobre todo con **H, O, N**, y también con halógenos (Cl, Br, F), S y P.

### Tipos de enlace carbono-carbono
| Enlace | Símbolo | Familia de hidrocarburo | Ejemplo |
|---|---|---|---|
| Simple (*single*) | C–C | Alcanos (*alkanes*) | Heptano |
| Doble (*double*) | C=C | Alquenos (*alkenes*) | Etileno |
| Triple (*triple*) | C≡C | Alquinos (*alkynes*) | Acetileno |
| Anillo aromático | ⬡ | Aromáticos (*aromatics*) | Tolueno, benceno |

Los **hidrocarburos** (*hydrocarbons*) solo tienen C e H.

### Formas de escribir una molécula
- **Fórmula molecular** (*molecular formula*): cuántos átomos de cada tipo. Etanol: C₂H₆O.
- **Fórmula semidesarrollada** (*condensed formula*): CH₃–CH₂–OH.
- **Fórmula de esqueleto** (*skeletal formula*): una línea en zigzag; cada vértice es un C y los H unidos al C no se dibujan. Es la que verás en fichas técnicas y certificados.

Dos moléculas pueden tener **la misma fórmula molecular** y ser distintas (isómeros, lo verás en la lección 4).

### Prefijos para contar carbonos
| Nº C | Prefijo | Alcano |
|---|---|---|
| 1 | met- | metano |
| 2 | et- | etano |
| 3 | prop- | propano |
| 4 | but- | butano |
| 5 | pent- | pentano |
| 6 | hex- | hexano |
| 7 | hept- | heptano |
| 8 | oct- | octano |

Con estos prefijos entiendes muchos nombres: **met**anol (1 C), **et**anol (2 C), **hept**ano (7 C).

### Nombres en planta
La IUPAC fija los nombres sistemáticos, pero en planta se usan mucho los **nombres comunes** (acetona = propanona) y los **números CAS** (*CAS Registry Number*), un código único para cada sustancia. El CAS es la forma segura de comprobar que un material es el correcto.
`,
    plant: `
Al recibir un bidón, la etiqueta pone "Propan-2-ol (isopropanol), CAS 67-63-0". La hoja de producción pide "2-propanol". Son la misma sustancia: lo confirmas por el **número CAS**, no por el nombre.
`,
    batchRecord: `
- Nombre del material, **código interno** y a veces número CAS.
- Fórmula molecular y masa molar en la ficha del producto (se usan para calcular moles y equivalentes).
`,
    terms: [
      { es: "Química orgánica", en: "Organic chemistry", def: "Química de los compuestos de carbono." },
      { es: "Hidrocarburo", en: "Hydrocarbon", def: "Compuesto formado solo por carbono e hidrógeno." },
      { es: "Alcano / alqueno / alquino", en: "Alkane / alkene / alkyne", def: "Hidrocarburos con enlaces simples, con algún doble o con algún triple." },
      { es: "Compuesto aromático", en: "Aromatic compound", def: "Molécula con un anillo tipo benceno, muy estable." },
      { es: "Fórmula molecular", en: "Molecular formula", def: "Indica cuántos átomos de cada elemento tiene la molécula." },
      { es: "Fórmula de esqueleto", en: "Skeletal formula", def: "Dibujo en zigzag donde cada vértice es un carbono." },
      { es: "Número CAS", en: "CAS Registry Number", def: "Código numérico único que identifica una sustancia química." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "¿Cuántos enlaces forma normalmente un átomo de carbono?",
        options: ["1", "2", "3", "4"],
        answer: 3,
        explain: "El carbono es tetravalente: forma 4 enlaces.",
      },
      {
        kind: "choice",
        q: "¿Cuántos carbonos tiene el heptano?",
        options: ["5", "6", "7", "8"],
        answer: 2,
        explain: "El prefijo hept- significa 7 carbonos.",
      },
      {
        kind: "number",
        q: "Calcula la masa molar del hexano, C₆H₁₄ (C = 12,011; H = 1,008).",
        answer: 86.18,
        tolerance: 0.005,
        unit: "g/mol",
        explain: "6 × 12,011 + 14 × 1,008 = 72,066 + 14,112 = 86,18 g/mol.",
      },
      {
        kind: "choice",
        q: "¿Cuál es la forma más segura de comprobar que un bidón contiene la sustancia correcta?",
        options: ["El color del bidón", "El nombre común", "El número CAS y el código interno", "El olor"],
        answer: 2,
        explain: "Un mismo producto tiene varios nombres; el número CAS y el código interno son únicos. Nunca se huele un producto.",
      },
    ],
  },
  {
    slug: "grupos-funcionales",
    level: 3,
    order: 3,
    title: "Grupos funcionales",
    titleEn: "Functional groups",
    minutes: 15,
    summary: "Las 'piezas' de las moléculas que deciden cómo reaccionan y cómo se comportan.",
    body: `
### Qué es un grupo funcional (*functional group*)
Un conjunto de átomos dentro de una molécula que le da **propiedades y reactividad** características. Moléculas muy distintas con el mismo grupo funcional reaccionan de forma parecida.

### Los más importantes
| Grupo | Estructura | Familia | Ejemplo en planta |
|---|---|---|---|
| Hidroxilo | –OH | Alcohol (*alcohol*) | Metanol, etanol, isopropanol |
| Éter | R–O–R | Éter (*ether*) | THF, MTBE |
| Carbonilo en extremo | –CHO | Aldehído (*aldehyde*) | Formaldehído |
| Carbonilo interno | R–CO–R | Cetona (*ketone*) | Acetona, MEK, MIBK |
| Carboxilo | –COOH | Ácido carboxílico (*carboxylic acid*) | Ácido acético |
| Éster | R–COO–R | Éster (*ester*) | Acetato de etilo |
| Amino | –NH₂, –NHR, –NR₂ | Amina (*amine*) | Trietilamina |
| Amida | –CO–N | Amida (*amide*) | DMF, DMAc |
| Halógeno | –Cl, –Br, –F | Haluro (*halide*) | Diclorometano |
| Nitrilo | –C≡N | Nitrilo (*nitrile*) | Acetonitrilo |

(R representa "el resto de la molécula").

### Qué te dice el grupo funcional
- **Ácido o base**: los ácidos carboxílicos son ácidos débiles; las aminas son bases. Por eso un API con amina puede formar una **sal** con HCl (clorhidrato).
- **Polaridad y solubilidad**: –OH, –COOH y –NH₂ hacen la molécula más **polar** y más soluble en agua. Las cadenas de C–H la hacen **apolar** (soluble en heptano, tolueno).
- **Reactividad**: un cloruro de ácido reacciona violentamente con agua; un éster se hidroliza con NaOH; las aminas reaccionan con ácidos desprendiendo calor.
- **Peligros**: los éteres (THF, éter etílico) pueden formar **peróxidos** explosivos al envejecer; por eso llevan estabilizante y fecha de apertura.

### Reacciones típicas en síntesis de API
- **Esterificación** (ácido + alcohol → éster + agua) e **hidrólisis** (la inversa).
- **Amidación** (ácido o derivado + amina → amida). Muy frecuente en fármacos.
- **Reducción** (por ejemplo cetona → alcohol) e **hidrogenación** (añadir H₂ con catalizador de Pd o Ni).
- **Oxidación** (alcohol → aldehído/cetona → ácido).
- **Formación de sal** (base + ácido) para purificar o aislar el API.
`,
    plant: `
En el paso 3 de un proceso ficticio se **acetila un alcohol**: sobre la solución del alcohol y **trietilamina** (una amina, base) se añade **cloruro de acetilo**. Se forma el éster (acetato) y se libera HCl, que la trietilamina neutraliza formando un sólido (clorhidrato de trietilamina). La reacción es **exotérmica**: por eso la adición del cloruro de acetilo es lenta y con la camisa en frío.
`,
    batchRecord: `
- Instrucciones del tipo "Adicionar cloruro de acetilo en ≥ 30 min manteniendo T ≤ 10 °C".
- Ensayos en proceso (IPC) que siguen la desaparición de un grupo (por ejemplo, éster < 1,0 % por HPLC).
`,
    terms: [
      { es: "Grupo funcional", en: "Functional group", def: "Agrupación de átomos que da a la molécula su reactividad típica." },
      { es: "Alcohol", en: "Alcohol", def: "Compuesto con grupo –OH unido a un carbono." },
      { es: "Cetona", en: "Ketone", def: "Compuesto con un C=O entre dos carbonos (acetona)." },
      { es: "Éster", en: "Ester", def: "Producto de un ácido y un alcohol (acetato de etilo)." },
      { es: "Amina", en: "Amine", def: "Compuesto nitrogenado básico derivado del amoniaco." },
      { es: "Amida", en: "Amide", def: "Grupo –CO–N, muy común en fármacos y en disolventes como DMF." },
      { es: "Peróxido", en: "Peroxide", def: "Compuesto inestable que pueden formar los éteres al envejecer; riesgo de explosión." },
      { es: "Hidrólisis", en: "Hydrolysis", def: "Rotura de una molécula por reacción con agua." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "El acetato de etilo es un…",
        options: ["Alcohol", "Éster", "Amina", "Cetona"],
        answer: 1,
        explain: "Acetato de etilo = ácido acético + etanol → éster.",
      },
      {
        kind: "choice",
        q: "¿Qué grupo funcional hace que una molécula sea básica y pueda formar un clorhidrato?",
        options: ["Éter", "Amina", "Alcano", "Éster"],
        answer: 1,
        explain: "Las aminas son bases: con HCl forman una sal llamada clorhidrato.",
      },
      {
        kind: "choice",
        q: "¿Por qué los bidones de THF llevan fecha de apertura y control?",
        options: [
          "Porque cambian de color",
          "Porque los éteres pueden formar peróxidos explosivos al envejecer",
          "Porque se congelan",
          "Por estética",
        ],
        answer: 1,
        explain: "Los éteres como THF forman peróxidos con el aire y la luz; se controla el tiempo desde la apertura y el estabilizante.",
      },
    ],
  },
  {
    slug: "disolventes-organicos",
    level: 3,
    order: 5,
    title: "Disolventes orgánicos y disolventes residuales",
    titleEn: "Organic solvents and residual solvents (ICH Q3C)",
    minutes: 18,
    summary: "Las propiedades que importan de cada disolvente y cuánto puede quedar en el API según ICH Q3C.",
    body: `
### Para qué se usan los disolventes
Disolver reactivos, controlar la temperatura de reacción, **extraer**, **cristalizar** y **lavar** el producto. Una planta de API mueve muchas toneladas de disolvente.

### Propiedades que debes conocer
- **Punto de ebullición** (*boiling point*): a qué temperatura hierve (marca si se puede destilar o secar fácilmente).
- **Punto de inflamación** (*flash point*): temperatura mínima a la que sus vapores pueden arder con una llama. Si está por debajo de la temperatura ambiente, el disolvente es **muy inflamable** y la zona puede ser ATEX.
- **Miscibilidad con agua** (*water miscibility*): si se mezcla con agua o forma dos fases. Esto decide si sirve para una extracción.
- **Polaridad**: lo polar disuelve lo polar ("lo semejante disuelve lo semejante").

| Disolvente | Ebullición (°C) | Inflamación (°C, aprox.) | ¿Miscible en agua? | Clase ICH Q3C |
|---|---|---|---|---|
| Diclorometano (DCM) | 40 | no inflamable en ensayo estándar | No | 2 |
| Acetona | 56 | −20 | Sí | 3 |
| Metanol | 65 | 11 | Sí | 2 |
| THF | 66 | −14 | Sí | 2 |
| Acetato de etilo | 77 | −4 | Poco | 3 |
| Etanol | 78 | 13 | Sí | 3 |
| Isopropanol | 82 | 12 | Sí | 3 |
| Heptano | 98 | −4 | No | 3 |
| Tolueno | 111 | 4 | No | 2 |

Valores de referencia redondeados; los exactos están en la **ficha de datos de seguridad** (FDS) de tu proveedor.

### Disolventes residuales: ICH Q3C
El API terminado siempre retiene trazas del disolvente. La guía **ICH Q3C** los clasifica por toxicidad:
- **Clase 1** (*to be avoided*): no se deben usar salvo justificación muy fuerte. Ejemplos: benceno (límite 2 ppm), tetracloruro de carbono (4 ppm).
- **Clase 2** (*to be limited*): tóxicos, con límite propio. Ejemplos: metanol 3000 ppm, tolueno 890 ppm, diclorometano 600 ppm, acetonitrilo 410 ppm, hexano 290 ppm, THF 720 ppm.
- **Clase 3** (*low toxic potential*): baja toxicidad; se aceptan hasta **5000 ppm (0,5 %)** sin más justificación. Ejemplos: etanol, acetona, acetato de etilo, isopropanol, heptano.

### De dónde salen los ppm
Cada disolvente tiene una **PDE** (*Permitted Daily Exposure*, exposición diaria permitida) en mg/día. Con la "opción 1" se supone que el paciente toma 10 g de producto al día:

**Límite (ppm) = 1000 × PDE (mg/día) / dosis (g/día)**

Metanol: PDE 30 mg/día → 1000 × 30 / 10 = **3000 ppm**.

### Cómo se mide
Por **cromatografía de gases con espacio de cabeza** (*headspace GC*, Ph. Eur. 2.4.24; la técnica se explica en el nivel 7). Como control rápido en planta se usa la **pérdida por desecación** (LOD): si el LOD está bajo, el disolvente total también.
`,
    plant: `
Un API se cristaliza en metanol y se lava con heptano. La especificación pide metanol ≤ 3000 ppm y heptano ≤ 5000 ppm. El secado se mantiene hasta que el **LOD** en proceso es ≤ 0,5 % y después el laboratorio confirma cada disolvente por GC.
`,
    batchRecord: `
- Lote y código de cada disolvente cargado.
- IPC de secado: "LOD ≤ 0,5 %".
- Resultado de disolventes residuales en el certificado de análisis (CoA).
`,
    terms: [
      { es: "Punto de inflamación", en: "Flash point", def: "Temperatura mínima a la que los vapores de un líquido pueden inflamarse con una llama." },
      { es: "Miscible", en: "Miscible", def: "Que se mezcla completamente con otro líquido sin formar dos fases." },
      { es: "Disolvente residual", en: "Residual solvent", def: "Disolvente que queda en el producto tras el secado." },
      { es: "Exposición diaria permitida", en: "Permitted Daily Exposure (PDE)", def: "Cantidad máxima aceptable por día de una sustancia sin riesgo para el paciente." },
      { es: "Partes por millón", en: "Parts per million (ppm)", def: "Miligramos por kilo: 10 000 ppm = 1 %." },
      { es: "Cromatografía de gases con espacio de cabeza", en: "Headspace gas chromatography", def: "Técnica que analiza los vapores de la muestra calentada; se usa para disolventes residuales." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "El benceno es un disolvente de clase…",
        options: ["1: evitar", "2: limitar", "3: baja toxicidad", "No está clasificado"],
        answer: 0,
        explain: "El benceno es cancerígeno: clase 1, con límite de 2 ppm si su uso es inevitable.",
      },
      {
        kind: "number",
        q: "El tolueno tiene una PDE de 8,9 mg/día. Con la opción 1 (10 g/día), ¿cuál es su límite en ppm?",
        answer: 890,
        tolerance: 0.01,
        unit: "ppm",
        explain: "1000 × 8,9 / 10 = 890 ppm.",
      },
      {
        kind: "choice",
        q: "¿Cuál de estos disolventes forma dos fases con agua y sirve para una extracción?",
        options: ["Metanol", "Acetona", "Tolueno", "Etanol"],
        answer: 2,
        explain: "Tolueno no es miscible con agua. Metanol, acetona y etanol sí lo son.",
      },
      {
        kind: "number",
        q: "¿A cuántos ppm equivale un 0,5 %?",
        answer: 5000,
        tolerance: 0.001,
        unit: "ppm",
        explain: "1 % = 10 000 ppm, así que 0,5 % = 5000 ppm (límite general de clase 3).",
      },
    ],
  },
  {
    slug: "isomeros-y-quiralidad",
    level: 3,
    order: 7,
    title: "Isómeros y quiralidad",
    titleEn: "Isomers and chirality",
    minutes: 15,
    summary: "Moléculas con la misma fórmula pero distinta forma, y por qué esa diferencia puede ser vital en un fármaco.",
    body: `
### Isómeros (*isomers*)
Moléculas con la **misma fórmula molecular** pero distinta estructura. Tienen propiedades distintas.
- **Isómeros estructurales** (*constitutional isomers*): los átomos se unen en distinto orden. Ejemplo: etanol (CH₃CH₂OH) y dimetiléter (CH₃OCH₃), ambos C₂H₆O. Uno es líquido a temperatura ambiente; el otro, un gas.
- **Estereoisómeros** (*stereoisomers*): mismos enlaces, distinta disposición en el espacio.

### Quiralidad (*chirality*)
Una molécula es **quiral** cuando no se puede superponer con su imagen en el espejo, como tus manos. Suele ocurrir cuando un carbono está unido a **cuatro grupos distintos** (*centro quiral* o *estereocentro*).

Las dos formas espejo se llaman **enantiómeros** (*enantiomers*) y se nombran **R** y **S**. Tienen el mismo punto de fusión y la misma solubilidad, pero:
- Giran la luz polarizada en sentidos opuestos (**rotación óptica**, *optical rotation*).
- En el cuerpo pueden tener efectos muy distintos, porque las proteínas también son quirales.

### Por qué importa en farmacia
El caso histórico es la **talidomida** (años 50–60): se relacionó uno de sus enantiómeros con malformaciones graves. Además, en el cuerpo los dos enantiómeros se interconvierten, así que separarlos no habría bastado. Desde entonces las autoridades exigen estudiar y controlar cada enantiómero.

Hoy muchos API se fabrican como **un solo enantiómero** y el otro se trata como una **impureza** con su propio límite.

### Términos que verás
- **Racemato** (*racemate*): mezcla 50:50 de los dos enantiómeros. No gira la luz.
- **Exceso enantiomérico** (*enantiomeric excess, ee*): ee (%) = (mayor − menor) / (mayor + menor) × 100.
- **Diastereómeros** (*diastereomers*): estereoisómeros que no son imagen especular (moléculas con dos o más centros quirales). Sí tienen propiedades físicas distintas, y por eso se pueden separar por cristalización.
- **Resolución** (*resolution*): separar un racemato, por ejemplo formando una sal con un ácido quiral y cristalizando uno de los diastereómeros.

### Cómo se controla
- **Rotación óptica** con polarímetro (Ph. Eur. 2.2.7).
- **HPLC quiral** (*chiral HPLC*): columna especial que separa enantiómeros y da el % de cada uno.
`,
    plant: `
En un proceso ficticio, el intermedio racémico se trata con ácido (R)-mandélico en isopropanol. Cristaliza la sal del enantiómero deseado y el otro queda en las aguas madre. El IPC pide **ee ≥ 99,0 %** por HPLC quiral antes de seguir.
`,
    batchRecord: `
- IPC "Pureza enantiomérica / ee por HPLC quiral".
- En la especificación del API: "Enantiómero (S): ≤ 0,15 %" o "Rotación óptica específica: entre +x° y +y°".
`,
    terms: [
      { es: "Isómero", en: "Isomer", def: "Molécula con la misma fórmula que otra pero distinta estructura." },
      { es: "Quiral", en: "Chiral", def: "Que no se puede superponer con su imagen especular." },
      { es: "Enantiómero", en: "Enantiomer", def: "Cada una de las dos formas espejo de una molécula quiral (R o S)." },
      { es: "Racemato", en: "Racemate", def: "Mezcla al 50 % de los dos enantiómeros." },
      { es: "Exceso enantiomérico", en: "Enantiomeric excess (ee)", def: "Cuánto predomina un enantiómero sobre el otro, en %." },
      { es: "Diastereómero", en: "Diastereomer", def: "Estereoisómero que no es imagen especular; tiene propiedades físicas distintas." },
      { es: "Rotación óptica", en: "Optical rotation", def: "Giro que produce una sustancia quiral sobre la luz polarizada." },
      { es: "Resolución", en: "Chiral resolution", def: "Separación de los enantiómeros de un racemato." },
    ],
    quiz: [
      {
        kind: "number",
        q: "Un lote contiene 98 % del enantiómero R y 2 % del S. ¿Cuál es el exceso enantiomérico?",
        answer: 96,
        tolerance: 0.001,
        unit: "%",
        explain: "ee = (98 − 2) / (98 + 2) × 100 = 96 %.",
      },
      {
        kind: "choice",
        q: "Dos enantiómeros tienen…",
        options: [
          "Distinto punto de fusión",
          "Distinta fórmula molecular",
          "Las mismas propiedades físicas, pero giran la luz en sentido contrario y pueden actuar distinto en el cuerpo",
          "Siempre el mismo efecto farmacológico",
        ],
        answer: 2,
        explain: "Los enantiómeros solo se distinguen ante otra cosa quiral: luz polarizada, columnas quirales o proteínas del cuerpo.",
      },
      {
        kind: "choice",
        q: "¿Qué técnica da el porcentaje de cada enantiómero?",
        options: ["Karl Fischer", "HPLC quiral", "Pérdida por desecación", "pH"],
        answer: 1,
        explain: "La HPLC con columna quiral separa los enantiómeros y los cuantifica.",
      },
    ],
  },
  {
    slug: "polimorfismo-y-sales",
    level: 3,
    order: 9,
    title: "Polimorfismo, sales y solvatos",
    titleEn: "Polymorphism, salts and solvates",
    minutes: 15,
    summary: "La misma molécula puede cristalizar de formas distintas, y eso cambia cómo funciona el medicamento.",
    body: `
### Formas sólidas de un API
El API no es solo "la molécula": también importa **cómo se ordenan** las moléculas en el sólido.
- **Cristalino** (*crystalline*): moléculas ordenadas en una red repetida.
- **Amorfo** (*amorphous*): sin orden. Suele disolverse más rápido, pero es menos estable.

### Polimorfismo (*polymorphism*)
Una misma molécula puede formar **varias redes cristalinas** distintas: forma I, forma II, etc. Cada polimorfo tiene distinto:
- Punto de fusión.
- **Solubilidad y velocidad de disolución** → afecta a cuánto fármaco llega a la sangre (*biodisponibilidad*).
- Estabilidad, fluidez del polvo y comportamiento al comprimir.

Caso real conocido: el **ritonavir** (1998). Apareció un polimorfo nuevo, más estable y mucho menos soluble, y las cápsulas dejaron de disolverse bien. Hubo que retirar el producto y reformularlo.

### Qué decide el polimorfo que obtienes en planta
- El **disolvente** de cristalización.
- La **temperatura** y la **velocidad de enfriamiento**.
- La **siembra** (*seeding*): añadir unos cristales de la forma correcta para que crezca esa.
- La agitación, el secado (temperatura y tiempo) y hasta la molienda.

Por eso estas condiciones son **parámetros críticos** y no se cambian sin control de cambios.

### Solvatos e hidratos
Cristales que incorporan moléculas de disolvente (**solvato**, *solvate*) o de agua (**hidrato**, *hydrate*). Un secado demasiado fuerte puede convertir un hidrato en la forma anhidra (y cambiar el producto).

### Sales (*salts*)
Muchos API son ácidos o bases. Se convierten en **sales** para mejorar la solubilidad, la estabilidad o la facilidad de cristalización:
- Bases (aminas) + HCl → **clorhidrato** (*hydrochloride*).
- Ácidos + NaOH → **sal sódica** (*sodium salt*).
- Otras: sulfato, maleato, mesilato, tartrato…

### Cómo se identifica la forma
- **Difracción de rayos X de polvo** (*X-ray powder diffraction, XRPD*, Ph. Eur. 2.9.33): la "huella dactilar" de cada polimorfo.
- **DSC**, **IR** y **TGA** (pérdida de peso al calentar, útil para solvatos).
`,
    plant: `
La hoja de cristalización dice: "Enfriar de 60 a 45 °C en ≥ 1 h, sembrar con 0,5 % de forma II, mantener 2 h, enfriar a 0–5 °C en ≥ 4 h". Si se enfría de golpe, puede salir la forma I o un sólido amorfo. El lote se analiza por XRPD para confirmar la forma II.
`,
    batchRecord: `
- Rampas de enfriamiento con tiempos mínimos, cantidad y lote de la **semilla**.
- Especificación del API: "Forma cristalina: conforme a la forma II por XRPD".
`,
    terms: [
      { es: "Polimorfismo", en: "Polymorphism", def: "Capacidad de una sustancia de cristalizar en varias estructuras distintas." },
      { es: "Amorfo", en: "Amorphous", def: "Sólido sin orden cristalino." },
      { es: "Siembra", en: "Seeding", def: "Adición de cristales de la forma deseada para dirigir la cristalización." },
      { es: "Biodisponibilidad", en: "Bioavailability", def: "Fracción del fármaco que llega a la sangre." },
      { es: "Clorhidrato", en: "Hydrochloride", def: "Sal formada por una base orgánica y ácido clorhídrico." },
      { es: "Difracción de rayos X de polvo", en: "X-ray powder diffraction (XRPD)", def: "Técnica que identifica la estructura cristalina de un sólido." },
      { es: "Anhidro", en: "Anhydrous", def: "Sin agua en su estructura." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "¿Por qué importa obtener siempre el mismo polimorfo?",
        options: [
          "Por el color",
          "Porque cambia la solubilidad y la disolución, y con ello cómo actúa el medicamento",
          "No importa",
          "Solo por el precio",
        ],
        answer: 1,
        explain: "Distintos polimorfos se disuelven distinto: cambia la biodisponibilidad (caso ritonavir).",
      },
      {
        kind: "choice",
        q: "¿Qué técnica es la 'huella dactilar' de una forma cristalina?",
        options: ["Karl Fischer", "XRPD", "pH", "Densidad"],
        answer: 1,
        explain: "La difracción de rayos X de polvo da un patrón característico de cada forma.",
      },
      {
        kind: "choice",
        q: "Para qué se siembra una cristalización",
        options: [
          "Para enfriarla",
          "Para que crezca la forma cristalina deseada de forma reproducible",
          "Para añadir disolvente",
          "Para medir el pH",
        ],
        answer: 1,
        explain: "Los cristales semilla guían la cristalización hacia la forma correcta y controlan el tamaño.",
      },
    ],
  },
  {
    slug: "impurezas-ich",
    level: 3,
    order: 11,
    title: "Impurezas en el API",
    titleEn: "Impurities in drug substances (ICH Q3A, Q3C, Q3D, M7)",
    minutes: 18,
    summary: "De dónde salen las impurezas, qué tipos hay y qué límites marcan las guías ICH.",
    body: `
### Qué es una impureza (*impurity*)
Cualquier componente del API que **no es el API**. Ninguna síntesis es perfecta, así que siempre hay impurezas: la clave es que estén **identificadas, controladas y por debajo de su límite**.

### Tipos (ICH Q3A)
1. **Orgánicas**: materiales de partida, intermedios, **subproductos** de reacciones secundarias, productos de **degradación**, reactivos.
2. **Inorgánicas**: sales, catalizadores metálicos (Pd, Ni), cenizas (*residue on ignition / sulphated ash*).
3. **Disolventes residuales**: los de ICH Q3C (lección anterior).

### Umbrales de ICH Q3A (dosis máxima diaria ≤ 2 g/día)
| Umbral | Valor | Qué significa |
|---|---|---|
| Notificación (*reporting*) | 0,05 % | Por encima, se informa el resultado |
| Identificación (*identification*) | 0,10 % o 1,0 mg/día (el menor) | Hay que saber qué estructura tiene |
| Cualificación (*qualification*) | 0,15 % o 1,0 mg/día (el menor) | Hay que demostrar que es segura a ese nivel |

Para dosis mayores de 2 g/día los umbrales bajan a 0,03 %, 0,05 % y 0,05 %.

Una impureza **especificada** tiene su propio límite en la especificación; las demás entran como "impureza no especificada, cada una ≤ 0,10 %" y en "impurezas totales".

### Impurezas elementales (ICH Q3D)
Metales que pueden venir de **catalizadores** (paladio, platino, níquel), de los reactivos o de los equipos. Se clasifican por toxicidad (clase 1: Cd, Pb, As, Hg) y tienen PDE en µg/día. Ejemplo: paladio por vía oral, 100 µg/día. Se analizan por **ICP-MS**.

### Impurezas mutagénicas (ICH M7)
Algunas impurezas pueden dañar el ADN (*mutagenic*), como ciertos agentes alquilantes o **nitrosaminas**. Se controlan a niveles muchísimo más bajos: para un tratamiento de por vida, el umbral general (*TTC, Threshold of Toxicological Concern*) es **1,5 µg/día**, y algunas nitrosaminas tienen límites aún más bajos.

### De dónde salen en planta y cómo las evitas
- Temperatura demasiado alta → subproductos y degradación.
- Adición rápida o en orden incorrecto → reacciones secundarias.
- Equipo mal limpiado → **contaminación cruzada** con otro producto.
- Agua o aire donde no deben → hidrólisis u oxidación.
- Lavado insuficiente de la torta → aguas madre (con impurezas) retenidas.

Seguir las instrucciones de la hoja (temperaturas, tiempos, orden y velocidad de adición) es **la principal herramienta** para controlar impurezas.
`,
    plant: `
Un API de 500 mg/día da una impureza desconocida a 0,12 %. Supera el umbral de identificación (0,10 %) pero no el de cualificación (0,15 %). Calidad abre una investigación y el laboratorio identifica la estructura: es un subproducto que aparece si la reacción supera 40 °C. Se revisa el registro de temperatura del lote.
`,
    batchRecord: `
- Límites de temperatura y tiempos de adición con su justificación ("para evitar la impureza B").
- IPC de impurezas por HPLC antes de pasar al siguiente paso.
- En el CoA: impurezas especificadas, no especificadas, totales, disolventes residuales y metales.
`,
    terms: [
      { es: "Impureza", en: "Impurity", def: "Cualquier componente del API que no es el propio API." },
      { es: "Subproducto", en: "By-product", def: "Sustancia no deseada formada en una reacción secundaria." },
      { es: "Producto de degradación", en: "Degradation product", def: "Impureza que se forma cuando el API se descompone." },
      { es: "Umbral de identificación", en: "Identification threshold", def: "Nivel por encima del cual hay que conocer la estructura de la impureza." },
      { es: "Cualificación", en: "Qualification", def: "Demostración de que una impureza es segura al nivel en que aparece." },
      { es: "Impureza elemental", en: "Elemental impurity", def: "Metal u otro elemento presente como impureza (ICH Q3D)." },
      { es: "Impureza mutagénica", en: "Mutagenic impurity", def: "Impureza capaz de dañar el ADN; se controla a niveles muy bajos (ICH M7)." },
      { es: "Contaminación cruzada", en: "Cross-contamination", def: "Paso de restos de un producto a otro." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "Para un API con una dosis máxima de 500 mg al día, una impureza desconocida a 0,12 %…",
        options: [
          "No requiere nada",
          "Debe identificarse, pero aún no supera el umbral de cualificación",
          "Debe cualificarse",
          "Es un disolvente residual",
        ],
        answer: 1,
        explain: "0,12 % supera el 0,10 % de identificación pero no el 0,15 % de cualificación. Con 500 mg al día mandan los porcentajes, porque 0,10 % y 0,15 % de 500 mg son 0,5 mg y 0,75 mg, menos que el otro límite de 1,0 mg al día. Con dosis mayores (por ejemplo 1 g al día) manda el límite de 1,0 mg al día y los umbrales en porcentaje bajan.",
      },
      {
        kind: "number",
        q: "Dosis diaria del API: 500 mg. ¿Cuántos mg/día de impureza suponen un 0,10 %?",
        answer: 0.5,
        tolerance: 0.001,
        unit: "mg/día",
        explain: "500 mg × 0,10 / 100 = 0,5 mg/día (menos de 1,0 mg/día, así que manda el 0,10 %).",
      },
      {
        kind: "choice",
        q: "El paladio residual de un catalizador es una impureza…",
        options: ["Orgánica", "Elemental (ICH Q3D)", "Disolvente residual", "Microbiológica"],
        answer: 1,
        explain: "Los metales de catalizadores se controlan según ICH Q3D.",
      },
      {
        kind: "choice",
        q: "¿Cuál es la mejor herramienta del operador para controlar las impurezas?",
        options: [
          "Añadir más reactivo",
          "Seguir exactamente las temperaturas, tiempos y orden de adición de la hoja",
          "Secar a más temperatura",
          "Saltarse los IPC",
        ],
        answer: 1,
        explain: "Las impurezas se forman al salir de las condiciones validadas: cumplir la hoja las previene.",
      },
    ],
  },
];

// Las lecciones «a fondo» van cada una en su archivo nivel3-tema.ts.
export const nivel3: Lesson[] = [...organica, polimorfismoAFondo, impurezasAFondo, quiralidadAFondo, organicaAFondo];
