import type { Lesson } from "./types";

export const nivel7: Lesson[] = [
  {
    slug: "espectroscopia-uv-vis",
    level: 7,
    order: 1,
    title: "Espectroscopía UV-Visible",
    titleEn: "UV-Vis spectroscopy",
    minutes: 15,
    summary: "Medir cuánta luz absorbe una disolución para saber su concentración: la ley de Lambert-Beer.",
    body: `
### La idea
Muchas moléculas **absorben luz** de ciertas longitudes de onda, en el **ultravioleta** (UV, 190–400 nm) o en el **visible** (400–800 nm). Cuanto más concentrada está la disolución, más luz absorbe.

### El equipo: espectrofotómetro (*spectrophotometer*)
Lámpara → selector de longitud de onda → **cubeta** (*cuvette*) con la muestra → detector. Las cubetas para UV son de **cuarzo** (el vidrio normal absorbe el UV). El camino óptico habitual es **1 cm**.

### Absorbancia y ley de Lambert-Beer
> **A = ε × b × c**

- A: absorbancia (sin unidades).
- ε: absortividad molar, característica de la sustancia a esa longitud de onda.
- b: camino óptico (cm).
- c: concentración.

Como ε y b son constantes, **A es proporcional a c**. En la práctica se compara con un **patrón**:

> c muestra = c patrón × A muestra / A patrón

La ley funciona bien en un rango; normalmente se trabaja con absorbancias entre 0,2 y 1,0 aproximadamente.

### Usos
- **Contenido** (*assay*) de un API que absorbe en UV.
- **Ensayo de disolución** de medicamentos.
- **Identificación**: el espectro (máximo de absorción) se compara con el del patrón.
- Es también el **detector** más habitual del HPLC.
`,
    plant: `
Patrón de 0,010 mg/mL: A = 0,500. Muestra: A = 0,480.

c muestra = 0,010 × 0,480 / 0,500 = **0,0096 mg/mL**.
`,
    batchRecord: `
Resultados de contenido o identificación en el informe analítico.
`,
    terms: [
      { es: "Espectrofotómetro", en: "Spectrophotometer", def: "Equipo que mide la luz que absorbe una muestra." },
      { es: "Absorbancia", en: "Absorbance", def: "Medida de cuánta luz absorbe una muestra." },
      { es: "Longitud de onda", en: "Wavelength (nm)", def: "Característica de la luz que determina su color o tipo." },
      { es: "Ley de Lambert-Beer", en: "Beer-Lambert law", def: "La absorbancia es proporcional a la concentración y al camino óptico." },
      { es: "Cubeta", en: "Cuvette / cell", def: "Recipiente transparente donde se coloca la muestra." },
    ],
    quiz: [
      {
        kind: "number",
        q: "Patrón 0,020 mg/mL con A = 0,600. Muestra con A = 0,540. ¿Concentración de la muestra?",
        answer: 0.018,
        tolerance: 0.001,
        unit: "mg/mL",
        explain: "0,020 × 0,540 / 0,600 = 0,018 mg/mL.",
      },
      {
        kind: "choice",
        q: "¿De qué material son las cubetas para medir en UV?",
        options: ["Vidrio normal", "Plástico cualquiera", "Cuarzo", "Metal"],
        answer: 2,
        explain: "El vidrio normal absorbe la luz UV; el cuarzo no.",
      },
    ],
  },
  {
    slug: "espectroscopia-infrarrojo",
    level: 7,
    order: 2,
    title: "Infrarrojo (IR) y Raman: la huella dactilar de la molécula",
    titleEn: "Infrared and Raman spectroscopy",
    minutes: 12,
    summary: "La técnica más usada para identificar materias primas y productos.",
    body: `
### La idea
Los enlaces de las moléculas **vibran** y absorben luz **infrarroja** a frecuencias concretas. El resultado es un **espectro** con muchos picos, distinto para cada sustancia: una auténtica **huella dactilar**.

El eje horizontal se expresa en **número de onda** (cm⁻¹), normalmente de 4000 a 400 cm⁻¹. La zona por debajo de ~1500 cm⁻¹ se llama precisamente **región de la huella dactilar** (*fingerprint region*).

### El equipo: FTIR
La mayoría son **FTIR** (*Fourier Transform Infrared*). La forma más sencilla de medir es con **ATR** (*Attenuated Total Reflectance*): se apoya un poco de muestra sobre un cristal (diamante) y se mide en segundos, sin preparar nada.

### Uso principal: identificación (*identification, ID*)
Se compara el espectro de la muestra con el de un **patrón** o una biblioteca. Si coinciden, la sustancia es la que dice la etiqueta. Es el ensayo de identidad de muchas materias primas y del API final.

### Raman
Técnica parecida que usa un láser. Existen equipos **portátiles** con los que se puede identificar el contenido de un bidón o un saco **a través del plástico o del vidrio**, en el almacén, sin abrirlo.

### El IR también ve diferencias de forma cristalina
Dos **polimorfos** del mismo API pueden dar espectros IR distintos.
`,
    plant: `
Llegan 12 sacos de materia prima. El procedimiento exige identificar **cada** saco. Con un Raman portátil se escanea cada uno en el almacén: el equipo da "PASS" si coincide con la referencia.
`,
    batchRecord: `
Identificación de materias primas antes de liberarlas; identidad del API en el CoA.
`,
    terms: [
      { es: "Espectroscopía infrarroja", en: "Infrared spectroscopy (IR, FTIR)", def: "Técnica que mide la absorción de luz infrarroja por los enlaces." },
      { es: "Número de onda", en: "Wavenumber (cm⁻¹)", def: "Unidad del eje de un espectro IR." },
      { es: "Región de la huella dactilar", en: "Fingerprint region", def: "Zona del espectro IR característica de cada molécula." },
      { es: "Reflectancia total atenuada", en: "Attenuated Total Reflectance (ATR)", def: "Accesorio IR que mide la muestra apoyada en un cristal." },
      { es: "Espectroscopía Raman", en: "Raman spectroscopy", def: "Técnica de identificación con láser; existe en equipos portátiles." },
      { es: "Identificación", en: "Identification (ID) test", def: "Ensayo que confirma que una sustancia es la que se espera." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "¿Para qué se usa sobre todo el IR en un laboratorio farmacéutico?",
        options: ["Para medir el agua", "Para identificar sustancias", "Para medir la temperatura", "Para contar microorganismos"],
        answer: 1,
        explain: "Su espectro es como una huella dactilar de la molécula.",
      },
      {
        kind: "choice",
        q: "¿Qué ventaja tiene el Raman portátil en el almacén?",
        options: [
          "Mide la pureza al 0,01 %",
          "Identifica el material a través del envase, sin abrirlo",
          "Calcula el rendimiento",
          "Sustituye a todos los análisis",
        ],
        answer: 1,
        explain: "Permite identificar cada recipiente rápidamente y sin exponer el producto.",
      },
    ],
  },
  {
    slug: "cromatografia-principios",
    level: 7,
    order: 3,
    title: "Cromatografía: cómo se separan las mezclas",
    titleEn: "Chromatography principles",
    minutes: 15,
    summary: "La técnica estrella del control de calidad: separar cada componente de una mezcla para medirlo.",
    body: `
### La idea
Imagina una carrera por un pasillo con obstáculos pegajosos. Unos corredores se pegan más y llegan tarde; otros apenas se pegan y llegan antes. La **cromatografía** separa los componentes de una mezcla igual:

- **Fase móvil** (*mobile phase*): el líquido o gas que avanza y arrastra la muestra.
- **Fase estacionaria** (*stationary phase*): el material fijo (dentro de una **columna**) al que los componentes se "pegan" más o menos.

Cada componente sale de la columna en un momento distinto: su **tiempo de retención** (*retention time, tR*).

### El cromatograma
El detector dibuja una línea con un **pico** (*peak*) por cada componente:
- La **posición** (tiempo de retención) dice **qué** es (comparando con un patrón).
- El **área** del pico dice **cuánto** hay.

### Tipos
- **Capa fina** (TLC): sobre una placa; rápida y barata, a veces para IPC.
- **Líquida de alta resolución** (HPLC/UPLC): la más usada para pureza y contenido.
- **De gases** (GC): para sustancias volátiles, como los disolventes.

### Calidad de la separación
- **Resolución** (*resolution, Rs*): cuánto se separan dos picos. Rs ≥ 1,5 suele significar separación completa hasta la línea base.
- **Factor de cola** (*tailing factor*): si el pico es simétrico. Un pico con mucha cola mide peor.
- **Platos teóricos** (*theoretical plates, N*): eficiencia de la columna.

Estos parámetros se comprueban en la **idoneidad del sistema** antes de cada análisis.
`,
    plant: `
El IPC de fin de reacción por HPLC muestra dos picos grandes: el material de partida a 4,2 min y el producto a 6,8 min. El laboratorio calcula cuánto material de partida queda a partir de las áreas.
`,
    batchRecord: `
Resultados IPC expresados en "% área" del material de partida o de impurezas.
`,
    terms: [
      { es: "Cromatografía", en: "Chromatography", def: "Técnica de separación de los componentes de una mezcla." },
      { es: "Fase móvil", en: "Mobile phase", def: "Líquido o gas que arrastra la muestra por la columna." },
      { es: "Fase estacionaria", en: "Stationary phase", def: "Material fijo de la columna que retiene los componentes." },
      { es: "Tiempo de retención", en: "Retention time (tR)", def: "Tiempo que tarda un componente en salir de la columna." },
      { es: "Cromatograma", en: "Chromatogram", def: "Gráfico con un pico por cada componente separado." },
      { es: "Resolución", en: "Resolution (Rs)", def: "Grado de separación entre dos picos." },
      { es: "Factor de cola", en: "Tailing factor", def: "Medida de la simetría de un pico." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "En un cromatograma, ¿qué indica el área de un pico?",
        options: ["Qué sustancia es", "Cuánta cantidad hay", "La temperatura", "La presión"],
        answer: 1,
        explain: "El tiempo de retención identifica; el área cuantifica.",
      },
      {
        kind: "choice",
        q: "¿Qué valor de resolución suele indicar dos picos separados por completo?",
        options: ["0,5", "1,0", "1,5 o más", "No existe ese parámetro"],
        answer: 2,
        explain: "Con Rs ≥ 1,5 los picos vuelven a la línea base entre ellos.",
      },
    ],
  },
  {
    slug: "hplc",
    level: 7,
    order: 4,
    title: "HPLC: cromatografía líquida",
    titleEn: "High-Performance Liquid Chromatography",
    minutes: 18,
    summary: "Cómo funciona un HPLC, cómo se calcula el contenido de un API y el porcentaje de impurezas.",
    body: `
### Partes de un HPLC
1. **Depósitos de fase móvil**: por ejemplo agua con tampón y acetonitrilo.
2. **Bomba** (*pump*): impulsa la fase móvil a alta presión (cientos de bar).
3. **Inyector automático** (*autosampler*): toma unos µL de cada vial.
4. **Columna** (*column*): tubo relleno de partículas muy finas. La más común es la **C18 de fase reversa** (*reversed phase*): retiene más lo poco polar.
5. **Horno de columna**: temperatura constante.
6. **Detector**, casi siempre **UV** (o de diodos, DAD). A veces **masas** (MS).
7. **Software** (CDS): controla el equipo y guarda los datos con audit trail.

### Isocrático y gradiente
- **Isocrático**: la fase móvil tiene siempre la misma composición.
- **Gradiente**: la composición cambia durante el análisis (más orgánico al final) para sacar componentes muy retenidos.

### Contenido (*assay*) con patrón externo
> % = (área muestra / área patrón) × (conc. patrón / conc. muestra) × pureza del patrón

### Impurezas por % área
> % impureza = área de la impureza / suma de áreas de todos los picos × 100

Cada impureza se compara con sus límites (ICH Q3A: por encima de ciertos umbrales hay que **informar**, **identificar** y **cualificar** la impureza).

### Secuencia típica
Blanco → idoneidad del sistema (inyecciones repetidas del patrón: RSD, resolución, cola) → patrones → muestras → patrón de control al final.
`,
    plant: `
Contenido del API: área patrón 1 520 300, área muestra 1 517 200, ambos a 0,1000 mg/mL, pureza del patrón 99,8 %.

% = 1 517 200 / 1 520 300 × 99,8 = **99,6 %**. Especificación 98,0–102,0 % → cumple.
`,
    batchRecord: `
IPC de reacción y de pureza; en el CoA final: contenido, impurezas individuales, impurezas totales.
`,
    terms: [
      { es: "Cromatografía líquida de alta resolución", en: "High-Performance Liquid Chromatography (HPLC)", def: "Cromatografía con fase móvil líquida a alta presión." },
      { es: "Fase reversa", en: "Reversed phase", def: "Modo de HPLC con columna apolar (C18) y fase móvil polar." },
      { es: "Gradiente", en: "Gradient elution", def: "Cambio de composición de la fase móvil durante el análisis." },
      { es: "Patrón externo", en: "External standard", def: "Patrón inyectado por separado para calcular la concentración de la muestra." },
      { es: "Detector de diodos", en: "Diode Array Detector (DAD/PDA)", def: "Detector UV que registra el espectro completo de cada pico." },
      { es: "Umbral de identificación", en: "Identification threshold (ICH Q3A)", def: "Nivel por encima del cual una impureza debe identificarse." },
    ],
    quiz: [
      {
        kind: "number",
        q: "Una impureza tiene área 2 500 y la suma de todas las áreas es 1 000 000. ¿% área?",
        answer: 0.25,
        tolerance: 0.001,
        unit: "%",
        explain: "2 500 / 1 000 000 × 100 = 0,25 %.",
      },
      {
        kind: "number",
        q: "Área muestra 980 000, área patrón 1 000 000, misma concentración, pureza del patrón 100,0 %. ¿Contenido?",
        answer: 98,
        tolerance: 0.001,
        unit: "%",
        explain: "980 000 / 1 000 000 × 100,0 = 98,0 %.",
      },
      {
        kind: "choice",
        q: "¿Qué es la columna C18 de fase reversa?",
        options: [
          "Una columna que retiene más lo poco polar",
          "Una columna para gases",
          "Un tipo de detector",
          "Una bomba",
        ],
        answer: 0,
        explain: "Su fase estacionaria es apolar: retiene más las moléculas poco polares.",
      },
    ],
  },
  {
    slug: "cromatografia-de-gases",
    level: 7,
    order: 5,
    title: "Cromatografía de gases (GC)",
    titleEn: "Gas chromatography",
    minutes: 12,
    summary: "La técnica para medir disolventes residuales y otras sustancias volátiles.",
    body: `
### Cómo funciona
- **Gas portador** (*carrier gas*): helio, hidrógeno o nitrógeno; es la fase móvil.
- **Inyector** caliente: vaporiza la muestra.
- **Columna capilar** muy larga (decenas de metros) dentro de un **horno** cuya temperatura sube durante el análisis (*temperature programme*).
- **Detector**: el más común es el **FID** (*Flame Ionization Detector*), que quema lo que sale y detecta los compuestos orgánicos. También **MS**.

### Espacio de cabeza (*headspace*)
Para **disolventes residuales** no se inyecta el API. La muestra se disuelve en un vial cerrado que se **calienta**; los disolventes pasan al gas de encima (el espacio de cabeza) y se inyecta solo ese gas. Así el API no ensucia el equipo.

### Disolventes residuales (ICH Q3C)
| Clase | Significado | Ejemplos |
|---|---|---|
| 1 | Evitar (tóxicos graves o dañinos para el medio ambiente) | Benceno, tetracloruro de carbono |
| 2 | Limitar (límites en ppm) | Metanol (3000 ppm), tolueno (890 ppm), diclorometano (600 ppm), acetonitrilo (410 ppm), THF (720 ppm) |
| 3 | Baja toxicidad (en general ≤ 5000 ppm) | Etanol, acetona, isopropanol, acetato de etilo, heptano |
`,
    plant: `
Antes de envasar el API se analizan los disolventes residuales por GC headspace. Si el tolueno sale por encima de 890 ppm, el lote no cumple: puede volver a secarse si el procedimiento lo prevé (reprocesado autorizado).
`,
    batchRecord: `
Disolventes residuales en el análisis final; a veces como IPC de fin de secado.
`,
    terms: [
      { es: "Cromatografía de gases", en: "Gas chromatography (GC)", def: "Cromatografía con un gas como fase móvil." },
      { es: "Gas portador", en: "Carrier gas", def: "Gas que arrastra la muestra por la columna." },
      { es: "Detector de ionización de llama", en: "Flame Ionization Detector (FID)", def: "Detector de GC muy usado para compuestos orgánicos." },
      { es: "Espacio de cabeza", en: "Headspace", def: "Técnica que analiza el gas que hay sobre una muestra calentada en un vial cerrado." },
      { es: "Disolventes residuales", en: "Residual solvents (ICH Q3C)", def: "Disolventes que quedan en el producto; tienen límites por su toxicidad." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "¿Qué técnica se usa para medir disolventes residuales en un API?",
        options: ["HPLC", "GC con espacio de cabeza", "Karl Fischer", "IR"],
        answer: 1,
        explain: "Los disolventes son volátiles: GC headspace es el método habitual.",
      },
      {
        kind: "choice",
        q: "¿A qué clase ICH Q3C pertenece el etanol?",
        options: ["Clase 1", "Clase 2", "Clase 3", "No está clasificado"],
        answer: 2,
        explain: "El etanol es de baja toxicidad: clase 3.",
      },
    ],
  },
  {
    slug: "potenciometria-conductimetria",
    level: 7,
    order: 6,
    title: "Potenciometría y conductimetría",
    titleEn: "Potentiometry and conductivity",
    minutes: 12,
    summary: "Medir con electrodos: el pH-metro bien calibrado y la conductividad del agua.",
    body: `
### El pH-metro
Un **electrodo de vidrio** genera un pequeño voltaje que depende del pH.

**Calibración** con al menos dos tampones (por ejemplo pH 4,01 y 7,00, o tres: 4, 7 y 10) que **abarquen** el pH a medir. El equipo calcula:
- **Pendiente** (*slope*): debería estar cerca del 100 % (criterio habitual, por ejemplo 95–105 %).
- **Punto cero** u *offset*.

Cuidados: el electrodo se guarda en su solución de conservación (nunca seco ni en agua destilada mucho tiempo), se enjuaga entre muestras y la temperatura se compensa (sonda de temperatura).

### Otros electrodos
Electrodos **selectivos de iones** (por ejemplo de fluoruro) y electrodos de **redox**. Los valoradores automáticos usan electrodos para detectar el punto final.

### Conductimetría
La **conductividad** (*conductivity*) mide cuánto conduce la electricidad una disolución, que depende de los **iones** disueltos. Se mide en **µS/cm**.

Uso principal: **calidad del agua purificada** y del agua para inyectables. El agua muy pura conduce muy poco (del orden de pocos µS/cm o menos). Las farmacopeas fijan los límites. También se usa para comprobar que el aclarado de un equipo ha eliminado el detergente.
`,
    plant: `
Al final de la limpieza de un reactor, la hoja dice "Aclarar con agua purificada hasta conductividad del agua de salida ≤ límite del procedimiento". Mides la conductividad del último aclarado: si cumple, la limpieza puede seguir con el muestreo de restos.
`,
    batchRecord: `
pH y conductividad con identificación del equipo y su calibración del día.
`,
    terms: [
      { es: "Electrodo de vidrio", en: "Glass electrode", def: "Electrodo sensible al pH." },
      { es: "Pendiente", en: "Slope", def: "Respuesta del electrodo respecto a la teórica, en %." },
      { es: "Conductividad", en: "Conductivity (µS/cm)", def: "Capacidad de una disolución para conducir la electricidad." },
      { es: "Agua purificada", en: "Purified water (PW)", def: "Agua de calidad farmacopea para uso farmacéutico." },
      { es: "Agua para inyectables", en: "Water for injection (WFI)", def: "Agua de máxima calidad, para productos inyectables." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "Vas a medir una muestra de pH 9. ¿Con qué tampones calibras?",
        options: ["Solo pH 4", "pH 4 y 7", "pH 7 y 10", "Ninguno"],
        answer: 2,
        explain: "La calibración debe abarcar el pH que se va a medir.",
      },
      {
        kind: "choice",
        q: "¿Qué indica una conductividad baja en el agua de aclarado?",
        options: [
          "Que hay muchos restos de detergente",
          "Que quedan pocos iones disueltos: el aclarado ha sido eficaz",
          "Que el agua está caliente",
          "Que el pH es bajo",
        ],
        answer: 1,
        explain: "Los detergentes y sales aumentan la conductividad.",
      },
    ],
  },
  {
    slug: "otras-tecnicas",
    level: 7,
    order: 7,
    title: "Otras técnicas: DRX, RMN, masas, ICP",
    titleEn: "Other techniques: XRPD, NMR, MS, ICP",
    minutes: 10,
    summary: "Técnicas más especializadas que verás nombradas en especificaciones y certificados.",
    body: `
No tendrás que manejarlas, pero sí entender qué miden:

| Técnica | En inglés | Qué mide | Para qué se usa |
|---|---|---|---|
| Difracción de rayos X de polvo | *X-ray powder diffraction (XRPD)* | Cómo están ordenadas las moléculas en el cristal | Identificar el **polimorfo** |
| Resonancia magnética nuclear | *NMR* | Cómo están unidos los átomos | Confirmar la **estructura** de la molécula |
| Espectrometría de masas | *Mass spectrometry (MS)* | La masa de las moléculas y sus fragmentos | Identificar **impurezas** (a menudo acoplada a HPLC: LC-MS) |
| Plasma acoplado inductivamente | *ICP-MS / ICP-OES* | Metales a niveles de ppm o ppb | **Impurezas elementales** (ICH Q3D), restos de catalizador |
| Calorimetría diferencial de barrido | *DSC* | Calor absorbido o desprendido al calentar | Punto de fusión, polimorfos |
| Termogravimetría | *TGA* | Pérdida de peso al calentar | Disolventes y agua ligados al cristal |
| Difracción láser | *Laser diffraction* | Tamaño de partícula | Control de molienda (d10, d50, d90) |
| Rotación óptica / polarimetría | *Optical rotation* | Desvío de la luz polarizada | Pureza de un **enantiómero** |
| HPLC quiral | *Chiral HPLC* | Separa enantiómeros | Pureza **enantiomérica** |
`,
    plant: `
En el CoA del API lees "Forma cristalina por XRPD: conforme con la forma I". Significa que el producto ha cristalizado en la forma correcta. Por eso la cristalización tiene parámetros tan estrictos.
`,
    batchRecord: `
Ensayos especiales en el CoA final o en investigaciones de desviaciones.
`,
    terms: [
      { es: "Difracción de rayos X de polvo", en: "X-ray powder diffraction (XRPD)", def: "Técnica que identifica la forma cristalina." },
      { es: "Resonancia magnética nuclear", en: "Nuclear Magnetic Resonance (NMR)", def: "Técnica que determina la estructura de una molécula." },
      { es: "Espectrometría de masas", en: "Mass spectrometry (MS)", def: "Técnica que mide la masa de moléculas y fragmentos." },
      { es: "ICP-MS", en: "Inductively Coupled Plasma Mass Spectrometry", def: "Técnica para medir metales en muy baja concentración." },
      { es: "Polarimetría", en: "Polarimetry / optical rotation", def: "Medida del giro de la luz polarizada por sustancias quirales." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "¿Qué técnica confirma la forma cristalina (polimorfo) del API?",
        options: ["Karl Fischer", "XRPD (difracción de rayos X)", "Conductimetría", "pH"],
        answer: 1,
        explain: "La difracción de rayos X ve el orden de las moléculas en el cristal.",
      },
      {
        kind: "choice",
        q: "¿Qué técnica usarías para medir restos de paladio en el API?",
        options: ["IR", "ICP-MS", "TLC", "LOD"],
        answer: 1,
        explain: "ICP-MS mide metales a niveles muy bajos (ICH Q3D).",
      },
    ],
  },
];
