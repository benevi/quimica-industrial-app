import type { Lesson } from "./types";

export const nivel9: Lesson[] = [
  {
    slug: "microorganismos-y-contaminacion",
    level: 9,
    order: 1,
    title: "Microorganismos y contaminación",
    titleEn: "Microorganisms and contamination",
    minutes: 12,
    summary: "Qué son bacterias, hongos y endotoxinas, de dónde vienen y por qué importan en un API.",
    body: `
### Tipos de microorganismos
- **Bacterias** (*bacteria*): seres de una sola célula. Se clasifican en **Gram positivas** (pared gruesa) y **Gram negativas** (con una membrana externa que contiene **endotoxinas**).
- **Hongos** (*fungi*): **mohos** (*moulds*) y **levaduras** (*yeasts*).
- **Esporas** (*spores*): formas de resistencia de algunas bacterias y hongos; aguantan calor y desinfectantes.

### Fuentes de contaminación
1. **Personas**: la principal. Perdemos millones de partículas de piel cada día.
2. **Agua**: el agua estancada en tuberías favorece el crecimiento.
3. **Aire**: polvo y partículas.
4. **Materias primas**, sobre todo las naturales.
5. **Equipos** mal limpiados o mal secados.

### ¿Importa en un API?
Muchos procesos de síntesis química usan disolventes orgánicos y temperaturas que **no favorecen** a los microorganismos. Pero las **etapas finales** (sobre todo si hay agua), el **envasado** y los API destinados a **inyectables** sí requieren control microbiológico. Las especificaciones de API suelen incluir **recuento microbiano** y, a veces, **endotoxinas**.

### Endotoxinas (*endotoxins*)
Restos de la pared de las bacterias Gram negativas. Aunque las bacterias estén muertas, las endotoxinas producen **fiebre** si llegan a la sangre. **No se destruyen** con la esterilización normal: hacen falta temperaturas muy altas (despirogenación con calor seco a unos 250 °C) o evitarlas desde el principio.
`,
    plant: `
El agua purificada que se usa en el último lavado del producto tiene control microbiológico. Si el API se va a usar para fabricar un medicamento estéril (por ejemplo, un inyectable), ICH Q7 (apartado 4.34) pide controlar además las **endotoxinas** (restos de bacterias que provocan fiebre) en el agua de las últimas etapas. Si el sistema de agua da un resultado alto, puede afectar a los lotes en los que se usó.
`,
    batchRecord: `
Identificación del agua usada (punto de uso), cumplimiento de su análisis y tiempos máximos de almacenamiento de soluciones acuosas.
`,
    terms: [
      { es: "Bacteria Gram negativa", en: "Gram-negative bacteria", def: "Bacteria con membrana externa que contiene endotoxinas." },
      { es: "Moho / levadura", en: "Mould / yeast", def: "Tipos de hongos." },
      { es: "Espora", en: "Spore", def: "Forma de resistencia de algunos microorganismos." },
      { es: "Endotoxina", en: "Endotoxin / pyrogen", def: "Sustancia de la pared bacteriana que provoca fiebre." },
      { es: "Despirogenación", en: "Depyrogenation", def: "Eliminación de endotoxinas, por ejemplo con calor seco muy alto." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "¿Cuál es la principal fuente de contaminación microbiana en una sala?",
        options: ["Los equipos", "Las personas", "Las paredes", "La luz"],
        answer: 1,
        explain: "Las personas desprenden continuamente partículas y microorganismos.",
      },
      {
        kind: "choice",
        q: "¿Se eliminan las endotoxinas al matar las bacterias?",
        options: ["Sí, siempre", "No: siguen ahí y producen fiebre", "Solo con alcohol", "Solo con frío"],
        answer: 1,
        explain: "Las endotoxinas resisten la esterilización habitual.",
      },
      {
        kind: "choice",
        q: "¿Qué etapas de un API de síntesis química necesitan más control microbiológico?",
        options: [
          "Las primeras reacciones en disolventes orgánicos",
          "Las etapas finales con agua, el envasado y los API destinados a inyectables",
          "Ninguna",
          "Solo el almacén de disolventes",
        ],
        answer: 1,
        explain: "Los disolventes y temperaturas de síntesis no favorecen a los microbios; el agua y la exposición final sí.",
      },
    ],
  },
  {
    slug: "recuento-microbiano-endotoxinas",
    level: 9,
    order: 2,
    title: "Ensayos microbiológicos: recuento y endotoxinas",
    titleEn: "Microbial enumeration and endotoxin testing",
    minutes: 15,
    summary: "Cómo se cuentan los microorganismos de una muestra y cómo se miden las endotoxinas.",
    body: `
### Recuento microbiano (*microbial enumeration*, Ph. Eur. 2.6.12)
Se siembra la muestra en **medios de cultivo** (*culture media*) y se incuba. Cada microorganismo vivo forma una **colonia** visible. El resultado se expresa en **UFC/g** (unidades formadoras de colonias, *CFU*).

- **TAMC** (*Total Aerobic Microbial Count*): bacterias y hongos aerobios, en agar de soja y caseína (**TSA**), a 30–35 °C, 3–5 días.
- **TYMC** (*Total Yeasts and Moulds Count*): hongos, en agar **Sabouraud**, a 20–25 °C, 5–7 días.

Para sustancias de uso farmacéutico no estériles, la Ph. Eur. (5.1.4) fija como criterio general **TAMC ≤ 10³ UFC/g** y **TYMC ≤ 10² UFC/g**.

### Microorganismos específicos (Ph. Eur. 2.6.13)
Se buscan algunos que no deben estar, por ejemplo ***Escherichia coli***, ***Salmonella***, ***Pseudomonas aeruginosa*** o ***Staphylococcus aureus***, según el uso del producto.

### Endotoxinas: ensayo LAL (Ph. Eur. 2.6.14)
Usa un reactivo de la sangre del cangrejo herradura (***Limulus***) que reacciona con las endotoxinas (formando un gel, cambiando la turbidez o el color). El resultado se da en **UE/mg** (unidades de endotoxina). Existe una alternativa sin origen animal: el **factor C recombinante** (Ph. Eur. 2.6.32).

### Técnica aséptica (*aseptic technique*)
En el laboratorio de microbiología se trabaja en **cabinas de flujo laminar** o de seguridad biológica, con material estéril, para no contaminar la muestra.
`,
    plant: `
Resultado de un lote: TAMC 50 UFC/g, TYMC < 10 UFC/g, E. coli ausente en 1 g. Especificación: TAMC ≤ 1000, TYMC ≤ 100, E. coli ausente → cumple.
`,
    batchRecord: `
Resultados microbiológicos en el CoA. Tardan días, por eso el lote puede esperar en cuarentena a estos resultados.
`,
    terms: [
      { es: "Unidad formadora de colonias", en: "Colony Forming Unit (CFU)", def: "Unidad que cuenta microorganismos vivos capaces de crecer." },
      { es: "Medio de cultivo", en: "Culture medium", def: "Preparado nutritivo para hacer crecer microorganismos." },
      { es: "Recuento total de aerobios", en: "Total Aerobic Microbial Count (TAMC)", def: "Recuento de bacterias y hongos aerobios." },
      { es: "Recuento de mohos y levaduras", en: "Total Yeasts and Moulds Count (TYMC)", def: "Recuento de hongos." },
      { es: "Ensayo LAL", en: "Limulus Amebocyte Lysate test", def: "Ensayo de endotoxinas con reactivo de cangrejo herradura." },
      { es: "Cabina de flujo laminar", en: "Laminar airflow cabinet", def: "Cabina con aire filtrado para trabajar sin contaminar." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "¿En qué unidades se da un recuento microbiano de un sólido?",
        options: ["mg/mL", "UFC/g", "ppm", "%"],
        answer: 1,
        explain: "Unidades formadoras de colonias por gramo.",
      },
      {
        kind: "choice",
        q: "¿Qué detecta el ensayo LAL?",
        options: ["Agua", "Endotoxinas", "Disolventes", "Metales"],
        answer: 1,
        explain: "Es el ensayo clásico de endotoxinas bacterianas.",
      },
      {
        kind: "number",
        q: "¿Cuántas UFC/g son 10³ UFC/g?",
        answer: 1000,
        tolerance: 0.001,
        unit: "UFC/g",
        explain: "10³ = 1000 UFC/g.",
      },
    ],
  },
  {
    slug: "salas-limpias",
    level: 9,
    order: 3,
    title: "Salas limpias y su clasificación",
    titleEn: "Clean rooms and classification",
    minutes: 15,
    summary: "Cómo se protege el producto en las etapas finales: aire filtrado, presiones y grados de limpieza.",
    body: `
### ¿Qué es una sala limpia? (*clean room*)
Una sala donde se controla el número de **partículas** y **microorganismos** en el aire, gracias a:
- **Filtros HEPA** (*High Efficiency Particulate Air*) en la impulsión de aire.
- Muchas **renovaciones** de aire por hora.
- **Cascada de presiones** (*pressure cascade*): la sala más limpia tiene más presión, así el aire sale de ella y no entra suciedad. Se vigila con **manómetros diferenciales** en las puertas.
- Superficies lisas y fáciles de limpiar, **esclusas** (*airlocks*) para personas y materiales.

### Clasificación
La norma **ISO 14644-1** clasifica por partículas por m³ de aire. Las GMP europeas (**Anexo 1**) usan **grados**:

| Grado GMP | Uso típico | Equivalencia aproximada en reposo |
|---|---|---|
| A | Operaciones asépticas críticas | ISO 5 |
| B | Entorno del grado A | ISO 5 |
| C | Etapas menos críticas de productos estériles | ISO 7 |
| D | Etapas de menor riesgo | ISO 8 |

Para **API no estériles**, las etapas finales (secado, molienda, envasado) suelen hacerse en salas controladas, a menudo con requisitos parecidos a un grado D. Los **API estériles** requieren grados A/B.

### Monitorización ambiental (*environmental monitoring*)
- **Contadores de partículas**.
- **Placas de sedimentación** (*settle plates*): se dejan abiertas para que caigan microorganismos.
- **Placas de contacto** (*contact plates*): se apoyan en superficies, guantes o ropa.
- **Muestreadores activos de aire**.

Los resultados tienen **niveles de alerta y de acción**.
`,
    plant: `
El manómetro de la puerta de la sala de envasado debería marcar una presión positiva (por ejemplo, +15 Pa respecto al pasillo). Marca 0 Pa. No entras a trabajar con producto expuesto: avisas, porque puede estar entrando aire sucio.
`,
    batchRecord: `
Comprobación de presiones diferenciales, temperatura y humedad de la sala antes de exponer el producto.
`,
    terms: [
      { es: "Sala limpia", en: "Clean room", def: "Sala con partículas y microorganismos controlados en el aire." },
      { es: "Filtro HEPA", en: "HEPA filter", def: "Filtro de aire de muy alta eficacia." },
      { es: "Cascada de presiones", en: "Pressure cascade", def: "Diferencias de presión entre salas para que el aire vaya de lo limpio a lo menos limpio." },
      { es: "Esclusa", en: "Airlock", def: "Pequeña sala entre dos zonas para pasar sin mezclar el aire." },
      { es: "Monitorización ambiental", en: "Environmental monitoring (EM)", def: "Control periódico de partículas y microorganismos de las salas." },
      { es: "Placa de contacto", en: "Contact plate (RODAC)", def: "Placa de cultivo que se apoya en una superficie para tomar muestra." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "¿Por qué la sala más limpia tiene más presión que el pasillo?",
        options: [
          "Para que la puerta cierre mejor",
          "Para que el aire salga de ella y no entre suciedad del pasillo",
          "Para que haga menos ruido",
          "No tiene más presión",
        ],
        answer: 1,
        explain: "El aire siempre va de mayor a menor presión.",
      },
      {
        kind: "choice",
        q: "¿Qué grado GMP es el más exigente?",
        options: ["A", "B", "C", "D"],
        answer: 0,
        explain: "El grado A es para las operaciones asépticas críticas.",
      },
      {
        kind: "choice",
        q: "¿Qué muestra una placa de contacto?",
        options: [
          "Las partículas del aire",
          "Los microorganismos de la superficie, guante o ropa sobre la que se apoya",
          "La presión de la sala",
          "La temperatura",
        ],
        answer: 1,
        explain: "Se apoya el agar sobre la superficie, se incuba y se cuentan las colonias.",
      },
    ],
  },
  {
    slug: "vestimenta-y-comportamiento",
    level: 9,
    order: 4,
    title: "Vestimenta y comportamiento en zonas limpias",
    titleEn: "Gowning and clean-room behaviour",
    minutes: 10,
    summary: "Cómo vestirse y moverse para no ser tú la fuente de contaminación.",
    body: `
### Higiene personal
- Manos limpias, uñas cortas, **sin joyas**, relojes ni maquillaje.
- No entrar con enfermedades contagiosas, heridas abiertas o quemaduras solares sin comunicarlo.
- Nada de comida, bebida, chicle ni tabaco.

### Vestimenta (*gowning*)
Se sigue el **orden** del procedimiento, normalmente **de arriba abajo** y de "sucio" a "limpio": gorro, mascarilla, buzo o bata, calzas o calzado específico, guantes. Las esclusas tienen un **banco de separación**: un lado "sucio" y otro "limpio". Muchos procedimientos piden **comprobar en el espejo** que todo está bien colocado.

### Comportamiento
- **Movimientos lentos**: moverse rápido levanta partículas.
- No hablar innecesariamente cerca del producto expuesto.
- No tocarse la cara ni la mascarilla con los guantes; si se tocan superficies no limpias, **desinfectar o cambiar** guantes.
- Puertas: cerrarlas siempre; no abrir dos puertas de una esclusa a la vez (suelen tener **enclavamiento**).
- No subir nada al área sin limpiarlo según el procedimiento.

### Formación y cualificación
Para trabajar en algunas zonas hay que estar **cualificado** en vestimenta (a veces con placas de contacto sobre guantes y ropa).
`,
    plant: `
Sales un momento de la sala de envasado al pasillo. Para volver a entrar repites la secuencia de la esclusa, cambias guantes y no abres la segunda puerta hasta que la primera esté cerrada.
`,
    batchRecord: `
A veces se registra la entrada a la sala o la comprobación de vestimenta.
`,
    terms: [
      { es: "Vestimenta", en: "Gowning", def: "Ropa específica para entrar en zonas controladas." },
      { es: "Buzo", en: "Coverall", def: "Prenda de una pieza que cubre todo el cuerpo." },
      { es: "Banco de separación", en: "Step-over bench", def: "Banco que separa la zona sucia de la limpia en una esclusa." },
      { es: "Enclavamiento de puertas", en: "Door interlock", def: "Sistema que impide abrir dos puertas a la vez." },
      { es: "Cualificación de vestimenta", en: "Gowning qualification", def: "Prueba de que una persona se viste correctamente sin contaminar." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "¿Por qué hay que moverse despacio en una sala limpia?",
        options: ["Por cortesía", "Porque moverse rápido levanta partículas", "Para no cansarse", "No importa"],
        answer: 1,
        explain: "Las personas son la principal fuente de partículas.",
      },
      {
        kind: "choice",
        q: "Tocas con el guante una superficie no limpia. ¿Qué haces?",
        options: ["Sigo trabajando", "Desinfecto o cambio los guantes según el procedimiento", "Me limpio en el buzo", "Me quito los guantes y sigo sin ellos"],
        answer: 1,
        explain: "Los guantes contaminados transfieren la contaminación al producto.",
      },
      {
        kind: "choice",
        q: "¿En qué orden suele ponerse la vestimenta de una zona limpia?",
        options: [
          "De abajo arriba: calzas primero",
          "De arriba abajo: gorro, mascarilla, buzo, calzas y guantes al final",
          "Guantes primero",
          "No hay orden",
        ],
        answer: 1,
        explain: "De arriba abajo, para que lo que cae no ensucie lo ya puesto; los guantes, al final. Manda siempre el procedimiento.",
      },
    ],
  },
];
