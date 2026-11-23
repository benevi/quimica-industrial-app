import type { Lesson } from "./types";

export const disolventesAFondo: Lesson = {
  slug: "disolventes-a-fondo",
  level: 3,
  order: 6,
  title: "Disolventes a fondo: elegir, usar, recuperar y no dejar restos en el producto",
  titleEn: "Solvents in depth: choosing, using, recovering and leaving no residue in the product",
  minutes: 38,
  summary:
    "Para qué sirve cada disolvente en una planta de API y qué se le pide, sus propiedades en una tabla de diez, la guía ICH Q3C con sus clases, la PDE y las cuentas de ppm, de dónde salen los restos en el producto, la calidad del disolvente que entra, la recuperación por destilación, las emisiones y lo que comprueba el operador en cada carga y en cada bidón de residuo.",
  body: `
En «Disolventes orgánicos y disolventes residuales» viste las propiedades básicas y la fórmula de los ppm en una página. Aquí vas a seguir al disolvente durante toda su vida en la planta: por qué se elige, cuánto puede quedar en el producto, cómo se recupera y adónde va cuando ya no sirve. La polaridad, el secado, el balance, la inflamabilidad y la exposición tienen sus propias lecciones «a fondo» y aquí solo se nombran.

### Cinco trabajos para un disolvente
Un **disolvente** (*solvent*) es el líquido en el que se disuelven otras sustancias, como el agua del café. En una planta de principios activos (*Active Pharmaceutical Ingredient*, API) hace cinco trabajos, y en cada uno se le pide algo distinto.

| Trabajo | Qué hace el disolvente | Qué se le pide |
|---|---|---|
| **Medio de reacción** (*reaction medium*) | Disuelve los reactivos para que sus moléculas se encuentren, y reparte el calor | Que disuelva bien, que no reaccione con nada y que hierva a una temperatura que encaje con la de la reacción |
| **Extracción** (*extraction*) | Se lleva el producto de una fase a otra | Que no se mezcle con el agua, que su densidad sea distinta para que las fases se separen y que disuelva el producto y no las sales |
| **Cristalización** (*crystallisation*) | Tiene el producto disuelto en caliente y lo suelta al enfriar o al añadir un antidisolvente | Que disuelva mucho en caliente y poco en frío, y que dé la forma cristalina buscada |
| **Lavado de la torta** (*cake wash*) | Arrastra las aguas madres que mojan los cristales en la centrífuga o el filtro | Que se mezcle con las aguas madres, que no disuelva el producto y que se seque con facilidad |
| **Limpieza** (*cleaning*) | Disuelve los restos que quedan en el equipo | Que disuelva ese residuo concreto; la limpieza está validada con unos disolventes fijos |

La guía ICH Q3C lo dice con sus palabras: elegir bien el disolvente puede mejorar el rendimiento o decidir la forma del cristal, la pureza y la solubilidad, y por eso el disolvente puede ser un **parámetro crítico** del proceso. No es un líquido cualquiera que se cambia por otro que «hace lo mismo».

### Las propiedades que importan, en una tabla de diez
Cada columna responde a una pregunta de planta:

- **Punto de ebullición** (*boiling point*): ¿se puede destilar, se secará bien de la torta?
- **Densidad** (*density*): ¿va arriba o abajo del agua en una extracción? ¿cuántos kilos son estos litros?
- **Miscibilidad con agua** (*water miscibility*): ¿una fase o dos?
- **Punto de inflamación** (*flash point*): ¿arde ya a la temperatura de la sala?
- **Clase de ICH Q3C**: ¿cuánto puede quedar en el producto?

| Disolvente | Ebullición (°C) | Densidad (kg/L, 20 °C) | ¿Miscible con agua? | Punto de inflamación | Clase ICH Q3C (límite de la opción 1) |
|---|---|---|---|---|---|
| Agua | 100 | 1,00 | — | No arde | No está en la guía: no es un disolvente orgánico |
| Metanol | 65 | 0,79 | Sí | Unos 10 °C | 2 (3000 ppm) |
| Etanol | 78 | no lo damos | Sí | Menor de 23 °C | 3 |
| Isopropanol (2-propanol) | 82 | no lo damos | Sí | Menor de 23 °C | 3 |
| Acetona | 56 | 0,79 | Sí | Menor de 23 °C | 3 |
| Acetato de etilo | 77 | no lo damos | Poco | Menor de 23 °C | 3 |
| Tolueno | 111 | 0,87 | No | 4 °C | 2 (890 ppm) |
| Heptano | 98 | no lo damos | No | Menor de 23 °C | 3 |
| Diclorometano | 40 | 1,33 | No | Sin clase de inflamable en la tabla oficial del CLP | 2 (600 ppm) |
| Tetrahidrofurano (THF) | 66 | no lo damos | Sí | Menor de 23 °C | 2 (720 ppm) |

Ningún dato está inventado. Las clases y los límites son de la guía ICH Q3C; la ebullición, la miscibilidad y la densidad, de otras lecciones de la app y de sus fichas de datos de seguridad (FDS). Donde pone «no lo damos» no hemos podido leer el dato en una fuente fiable: míralo en la sección 9 de la FDS de tu proveedor. El punto de inflamación del tolueno es el de la nota técnica NTP 663 del Instituto Nacional de Seguridad y Salud en el Trabajo (INSST). «Menor de 23 °C» significa que la sustancia figura en la tabla oficial del Reglamento CLP (su anexo VI) como líquido inflamable de categoría 2 (H225), que exige justo eso; el número exacto está en la FDS.

Ocho de los diez arden a la temperatura de una sala. El diclorometano no figura como inflamable, pero en esa misma tabla del CLP es **sospechoso de provocar cáncer** (H351). Ningún disolvente es «el bueno» en todo.

### ICH Q3C a fondo
**Qué es un disolvente residual.** La guía ICH Q3C define los **disolventes residuales** (*residual solvents*) como sustancias químicas orgánicas volátiles que se usan o se producen al fabricar principios activos, excipientes o medicamentos, y que las técnicas prácticas de fabricación no eliminan del todo. Y añade una frase que lo resume todo: como los disolventes residuales **no tienen ningún beneficio terapéutico**, hay que eliminarlos todo lo posible.

**Las tres clases**, tal como las define la guía en su apartado 3.1:

| Clase | Nombre en la guía | Qué significa |
|---|---|---|
| 1 | Disolventes que hay que evitar (*to be avoided*) | Cancerígenos conocidos en personas, sospechosos fundados de serlo y peligrosos para el medio ambiente |
| 2 | Disolventes que hay que limitar (*to be limited*) | Cancerígenos en animales que no dañan los genes, o causantes posibles de otros daños irreversibles, como daño en el sistema nervioso o malformaciones en el feto. También los sospechosos de otros daños importantes pero reversibles |
| 3 | Disolventes de bajo potencial tóxico (*low toxic potential*) | Poco tóxicos para las personas; no necesitan un límite basado en la salud. Su PDE es de 50 mg al día o más |

**Por qué los de clase 1 se evitan.** La guía dice que no deben usarse en la fabricación por su toxicidad inaceptable o por su efecto dañino sobre el medio ambiente. Solo si su uso es inevitable para un medicamento que suponga un avance terapéutico importante, se limitan así (tabla 1 de la guía):

| Disolvente de clase 1 | Límite (ppm) | Motivo |
|---|---|---|
| Benceno | 2 | Cancerígeno |
| Tetracloruro de carbono | 4 | Tóxico y peligroso para el medio ambiente |
| 1,2-Dicloroetano | 5 | Tóxico |
| 1,1-Dicloroeteno | 8 | Tóxico |
| 1,1,1-Tricloroetano | 1500 | Peligroso para el medio ambiente |

El 1,1,1-tricloroetano está en la lista por el medio ambiente; su límite sale de revisar sus datos de seguridad. Si alguno de los cinco pudiera estar presente, la guía pide identificarlo y cuantificarlo.

**La exposición diaria permitida.** La **PDE** (*permitted daily exposure*) es la cantidad máxima de un disolvente residual que se acepta tomar al día con un medicamento, en mg/día. Sale de estudios en animales: la dosis más alta sin efecto se pasa a una persona de 50 kg y se divide entre factores de seguridad. No tienes que calcularla nunca: la tabla de la guía ya la da.

**Del mg/día a los ppm: la opción 1.** El laboratorio no da mg/día, da **ppm** (partes por millón): miligramos de disolvente por kilo de producto. Para pasar de uno a otro hace falta saber cuánto producto toma el paciente al día. La **opción 1** (*option 1*) supone el caso más prudente, 10 g de producto al día, y usa la ecuación (1) de la guía:

> ppm = 1000 × PDE / dosis

con la PDE en mg/día y la dosis en g/día. Recuerda: 1 % son 10 000 ppm.

**Cuenta 1: límite de un disolvente de clase 2.** Diclorometano, PDE 6,0 mg/día: 1000 × 6,0 / 10 = **600 ppm**. Con el hexano, PDE 2,9 mg/día: 1000 × 2,9 / 10 = **290 ppm**. Son los valores de la tabla 2 de la guía.

**Cuenta 2: comparar un análisis con el límite.** El laboratorio da un 0,18 % de metanol en un lote de 250 kg. En ppm: 0,18 × 10 000 = 1800 ppm. El límite del metanol es 3000 ppm: **cumple**. Dentro del lote van 1800 mg/kg × 250 kg = 450 000 mg, es decir, **450 g** de metanol repartidos en el producto. Otro caso: un 0,10 % de tolueno son 1000 ppm, y su límite es 890 ppm: **no cumple**, aunque «0,10 %» parezca muy poco. Pasa siempre a ppm antes de comparar.

**Cuenta 3: el límite de la clase 3.** La guía acepta sin más justificación 50 mg al día o menos de un disolvente de clase 3. Con la opción 1: 1000 × 50 / 10 = **5000 ppm, el 0,5 %**. Un resultado de 3200 ppm de heptano es un 0,32 %: cumple. La guía admite cantidades mayores si son realistas para el proceso y para las buenas prácticas de fabricación (GMP), pero eso lo justifica calidad, no la hoja.

**Cuenta 4: la opción 2.** Si se conoce la dosis máxima diaria del medicamento, la **opción 2** (*option 2*) usa la misma ecuación con esa dosis. Tolueno (PDE 8,9 mg/día) en un medicamento del que se toman como máximo 2,0 g al día: 1000 × 8,9 / 2,0 = **4450 ppm**. Y al revés: con una dosis de 25 g al día, el metanol quedaría en 1000 × 30 / 25 = **1200 ppm**, más estricto que los 3000 de la opción 1. La opción 2 se aplica al medicamento entero sumando los mg que aporta cada componente, y solo vale si se demuestra que el disolvente se ha reducido al mínimo práctico.

En el ejemplo de la guía con acetonitrilo (PDE 4,1 mg/día, 410 ppm), el principio activo lleva 800 ppm, pero el medicamento entero suma 3,64 mg/día y cumple. Por eso el límite de **tu** producto no lo calculas en planta: está en su especificación.

**Qué disolventes se miran.** Los que es «probable» que estén: según la guía (apartado 3.5), el del último paso y los de pasos anteriores que un proceso validado no elimina siempre. Y hay disolventes sin datos para fijar una PDE, como el éter isopropílico (tabla 4): si se usan, el fabricante justifica sus restos.

### De dónde vienen los restos en el producto
Cuando la centrífuga o el filtro terminan, el disolvente está en tres sitios:

1. **Mojando la torta**, entre los cristales. Es el que se va en el secadero.
2. **Atrapado dentro del cristal**. Un cristal que crece deprisa puede encerrar gotitas de aguas madres, como una burbuja dentro de un cubito de hielo.
3. **Formando parte del cristal**, en un **solvato** (*solvate*). Lo tienes explicado en «Enlaces y fuerzas entre moléculas a fondo» y en «Polimorfismo, sales y solvatos». La guía ICH Q3C aclara que no trata los solvatos, aunque su contenido de disolvente hay que evaluarlo y justificarlo.

Por eso el secado tiene un límite: el disolvente de fuera se va con calor y vacío, el de dentro tiene que atravesar el sólido y el de un solvato no sale sin cambiar el cristal. Más horas de secadero no siempre arreglan un resultado alto.

**El lavado cuenta.** Un proceso que cristaliza en un disolvente de clase 2 puede lavar la torta con uno de clase 3 para desplazar el primero. Un lavado corto, una torta agrietada, por la que el líquido pasa sin tocar todo el sólido, o mal escurrida dejan más restos.

**Cómo se mide.** La **pérdida por secado** (*loss on drying*, LOD) suma todo lo que se evapora; la **cromatografía de gases** (*gas chromatography*, GC) mide cada disolvente. La guía (apartado 3.4) solo admite el LOD si únicamente hay disolventes de clase 3. El porqué está en «El secado a fondo», y la técnica, en «Cromatografía de gases (GC)» del nivel 7.

### Calidad del disolvente que entra
Lo que el disolvente trae, lo deja en el producto. La guía ICH Q7 de buenas prácticas para principios activos fija el camino:

- **Especificación** (*specification*): se compra contra una especificación acordada, a proveedores aprobados por calidad (7.12).
- **Recepción** (7.20 y 7.24): se revisa cada envase (etiqueta, nombre del proveedor frente al nombre interno, daños, precintos) y recibe un número de lote o de recepción. Queda en **cuarentena** hasta que se analiza y se aprueba.
- **Depósitos** (7.21): antes de mezclar el disolvente que llega con el que ya hay, se identifica, se analiza si procede y se aprueba; y hay procedimientos para no descargarlo en el depósito equivocado.
- **Análisis** (7.30): al menos un ensayo de identidad por lote. El **certificado de análisis** (*certificate of analysis*, CoA) del proveedor puede sustituir a otros ensayos si hay un sistema para evaluar al proveedor.

**El agua de un disolvente.** Un disolvente orgánico puede traer agua disuelta, y en algunas reacciones el agua estorba. Su especificación puede fijar un máximo, que se mide por **Karl Fischer** (KF), la técnica de «Valoración Karl Fischer: medir el agua» del nivel 6.

**Antes de cargar.** ICH Q7 (8.12) pide que el personal de producción compruebe, antes de usarlos, que los materiales son los que indica la hoja de producción para ese producto. Esa comprobación es tuya.

### Recuperar disolventes por destilación
Un lote puede gastar varias veces más kilos de disolvente que de producto. Tirarlo cuesta dos veces, al comprarlo y al gestionarlo como residuo, y aumenta las emisiones. Por eso se **recupera** (*solvent recovery*): se destilan aguas madres, lavados o destilados, y lo que hierve antes pasa primero al condensador. Funciona bien cuando los puntos de ebullición están lejos. Hay dos casos difíciles:

- **Puntos de ebullición cercanos**: los dos líquidos se evaporan a la vez y el destilado sale mezclado.
- **Azeótropos** (*azeotropes*): mezclas que, a cierta composición, hierven como si fueran un solo líquido y dan un vapor con la misma composición que el líquido. Por mucho que destiles, el destilado no se hace más puro. Es como intentar separar dos personas que bajan siempre la escalera cogidas de la mano. Los ejemplos están en «Destilación y concentración».

Además, lo recuperado puede arrastrar agua, producto, reactivos o impurezas del lote. ICH Q7 lo controla en su apartado 14.4:

| Apartado | Qué dice |
|---|---|
| 14.40 | Recuperar reactivos, intermedios o principio activo de las aguas madres o los filtrados es aceptable si hay procedimientos aprobados y lo recuperado cumple una especificación adecuada a su uso |
| 14.41 | Los disolventes pueden recuperarse y reutilizarse en el mismo proceso o en otros, si la recuperación se controla y se vigila para que cumplan su estándar antes de reutilizarse o mezclarse con otros materiales aprobados |
| 14.42 | El disolvente nuevo y el recuperado pueden combinarse si los ensayos han demostrado que valen para todos los procesos en que se puedan usar |
| 14.43 | El uso de disolventes recuperados, aguas madres y otros materiales recuperados se documenta |

En la práctica, el recuperado tiene su código, su lote, su especificación y su estado de calidad, como uno comprado. Si la hoja dice «metanol recuperado aprobado», un depósito en cuarentena no vale.

### Emisiones: lo esencial del Real Decreto 117/2003
El disolvente que se escapa es un **compuesto orgánico volátil** (COV; *volatile organic compound*). Los umbrales y límites del decreto están en «Almacenamiento, emergencias y residuos a fondo» y su plan de gestión de disolventes en «Rendimiento y balance de materia a fondo». Tres cosas más que te tocan:

- **Disolvente orgánico halogenado**: el decreto lo define como el que tiene al menos un átomo de bromo, cloro, flúor o yodo por molécula. El diclorometano lo es.
- **Halogenados sospechosos de provocar cáncer o defectos genéticos**: los COV halogenados con H351 o H341 tienen un límite propio de 20 mg/Nm³ en los gases de salida cuando el caudal suma 100 g/h o más (artículo 5). Es el caso del diclorometano, H351.
- **El recuperado cuenta cada vez**: en el balance del anexo IV entra como entrada cada vez que se reutiliza, pero el «consumo» de la planta lo excluye.

### Sustituir un disolvente peligroso
La **sustitución** (*substitution*) es cambiar un agente peligroso por otro que lo sea menos, o por otro proceso. La NTP 673 del INSST la sitúa en lo más alto de la prevención (artículo 5 del Real Decreto 374/2001) y dice que la de disolventes es la más descrita y la de mejores resultados. Avisa de que casi siempre aparece un riesgo nuevo, menor, que también hay que evaluar.

La propia ICH Q3C empuja en la misma dirección: recomienda disolventes menos tóxicos y que, idealmente, se usen los de clase 3 cuando sea práctico. Un ejemplo sale de su tabla: el hexano es de clase 2 (290 ppm) y el heptano, un hidrocarburo de la misma familia, es de clase 3.

La industria publica guías de selección de disolventes; no las hemos podido leer, así que aquí solo queda la idea. Y en un proceso aprobado, cambiar de disolvente pasa por control de cambios: nunca se decide en el turno.

### Lo que hace el operador
**Antes de cargar:**
- Comprueba el **nombre exacto**, el **código** y el **lote** contra la hoja. «Metanol» y «metanol recuperado» son materiales distintos; «heptano» y «hexano» se parecen en la etiqueta y son de clases distintas.
- Comprueba el **estado de calidad**: etiqueta de aprobado, no de cuarentena ni de rechazado. Si es un depósito, mira su estado en el sistema o en la placa.
- Revisa el **recipiente**: sin abolladuras, fugas ni precintos rotos. La NTP 768 del INSST recuerda que el trasvase es la operación con más accidentes.
- Conecta la tierra antes de trasvasar, como explica «Atmósferas explosivas a fondo».

**Al cargar:**
- Carga por **caudalímetro** o por **peso** (células de carga o báscula), con el equipo que diga la hoja, y anota el valor real. Si hay que pasar litros a kilos, la densidad la da la hoja.

**Al recoger residuos:**
- **Halogenados aparte.** La NTP 480 del INSST llama disolvente halogenado al líquido orgánico con más de un 2 % de algún halógeno, y mete en ese grupo también las mezclas con no halogenados que pasen de ese 2 %. Un chorro de diclorometano convierte un bidón entero en residuo halogenado.
- **No mezcles disolventes en un mismo bidón sin instrucción.** La misma NTP pide no mezclar disolventes inmiscibles porque las dos fases dificultan el tratamiento. Y un disolvente sin mezclar se puede recuperar.
- Etiqueta el bidón y anota destino y cantidad, como en «Almacenamiento, emergencias y residuos a fondo».

En planta manda siempre el procedimiento vigente (SOP): qué disolvente se carga, de dónde sale, cuánto puede quedar en el producto y adónde va cada residuo lo fijan la hoja y la especificación de tu producto.
`,
  plant: `
Turno de noche. Lote ficticio LX-33-0207 del principio activo ficticio LX-33. La hoja dice: cristalizar en metanol en el reactor R-512, centrifugar en la C-520, lavar la torta con heptano y secar en el SD-530. Especificación del producto: metanol ≤ 3000 ppm, heptano ≤ 5000 ppm.

Para el metanol, la hoja permite «metanol recuperado aprobado» del depósito DR-15. Miras la placa: estado «cuarentena». No vale. Pides al almacén metanol nuevo: cuatro bidones del mismo lote, con etiqueta de aprobado. Compruebas código, lote y nombre contra la hoja, ves los precintos intactos, conectas la tierra y cargas por el caudalímetro FQ-512. Anotas los litros y los kilos.

Para el lavado te traen dos bidones. Uno pone «n-heptano» con el código de la hoja. El otro, «hexano». Son distintos, y el hexano es de clase 2. Devuelves el segundo y avisas a tu responsable.

Las aguas madres van, según la hoja, al depósito de recuperación de metanol. Los lavados de heptano, al bidón de no halogenados. En la limpieza del cesto se usa diclorometano: va a su propio bidón de halogenados, etiquetado y anotado.

Dos días después llega el análisis por GC: metanol 1800 ppm y heptano 2100 ppm. Los dos cumplen. En un lote de 250 kg, esos 1800 ppm son 450 g de metanol repartidos en todo el producto.
`,
  batchRecord: `
En la hoja de producción (*batch record*) verás, en cada paso con disolvente:

- **Material**: nombre exacto, código interno y lote de cada disolvente, nuevo o recuperado, y su estado de calidad («aprobado») comprobado antes de cargar.
- **Recipiente o depósito de origen**: número de bidón o código del depósito, con su estado.
- **Cantidad cargada**: el valor real del caudalímetro o de la báscula, con su unidad (L o kg), el equipo usado y su calibración vigente. Si hay conversión de litros a kilos, la densidad que da la hoja.
- **Firmas**: quien carga y quien verifica, si el paso es crítico, con fecha y hora.
- **Destino de cada corriente**: aguas madres, lavados y destilados («a recuperación», «a residuo halogenado», «a residuo no halogenado»), con cantidad y número de bidón o depósito.
- **Disolventes residuales**: resultado del análisis por GC de cada disolvente, frente a su límite en ppm de la especificación. Si solo hay disolventes de clase 3, puede ser una pérdida por secado.
- **Incidencias**: un bidón equivocado, un depósito en cuarentena, un resultado fuera de límite, con el aviso al responsable y la referencia de la desviación si se abre.
`,
  terms: [
    { es: "Disolvente residual", en: "Residual solvent", def: "Sustancia orgánica volátil usada o producida en la fabricación que queda en el producto porque las técnicas prácticas no la eliminan del todo." },
    { es: "Exposición diaria permitida", en: "Permitted daily exposure (PDE)", def: "Cantidad máxima de un disolvente residual que se acepta tomar al día con un medicamento, en mg/día." },
    { es: "Disolvente de clase 1", en: "Class 1 solvent", def: "Disolvente que hay que evitar: cancerígeno conocido o sospechoso fundado, o peligroso para el medio ambiente." },
    { es: "Disolvente de clase 2", en: "Class 2 solvent", def: "Disolvente que hay que limitar, con su propia PDE y su límite en ppm." },
    { es: "Disolvente de clase 3", en: "Class 3 solvent", def: "Disolvente de bajo potencial tóxico, con PDE de 50 mg/día o más; 5000 ppm con la opción 1." },
    { es: "Opción 1", en: "Option 1", def: "Forma de fijar el límite en ppm suponiendo 10 g de producto al día: ppm = 1000 × PDE / 10." },
    { es: "Opción 2", en: "Option 2", def: "Cálculo del límite con la dosis máxima diaria real del medicamento, sumando lo que aporta cada componente." },
    { es: "Solvato", en: "Solvate", def: "Cristal que lleva moléculas de disolvente dentro de su red; ese disolvente no se va con un secado normal." },
    { es: "Certificado de análisis", en: "Certificate of analysis (CoA)", def: "Documento del proveedor con los ensayos de un lote, sus límites y sus resultados numéricos." },
    { es: "Recuperación de disolventes", en: "Solvent recovery", def: "Separar por destilación el disolvente de aguas madres, lavados o destilados para volver a usarlo." },
    { es: "Azeótropo", en: "Azeotrope", def: "Mezcla que hierve como un solo líquido y da un vapor de la misma composición, así que no se purifica destilando." },
    { es: "Compuesto orgánico volátil", en: "Volatile organic compound (VOC)", def: "Compuesto orgánico con una presión de vapor de 0,01 kPa o más a 293,15 K, según el Real Decreto 117/2003." },
    { es: "Disolvente orgánico halogenado", en: "Halogenated organic solvent", def: "Disolvente con al menos un átomo de bromo, cloro, flúor o yodo por molécula, como el diclorometano." },
    { es: "Sustitución", en: "Substitution", def: "Cambiar un agente químico peligroso por otro menos peligroso o por otro proceso; la primera medida de prevención." },
  ],
  quiz: [
    {
      kind: "number",
      q: "El tetrahidrofurano (THF) tiene en ICH Q3C una PDE de 7,2 mg/día. Con la opción 1 (10 g de producto al día), ¿cuál es su límite en ppm?",
      answer: 720,
      tolerance: 0.01,
      unit: "ppm",
      explain: "ppm = 1000 × PDE / dosis = 1000 × 7,2 / 10 = 720 ppm, el valor de la tabla 2 de la guía.",
    },
    {
      kind: "number",
      q: "El laboratorio da un 0,12 % de tolueno en tu producto. ¿Cuántos ppm son? (1 % = 10 000 ppm)",
      answer: 1200,
      tolerance: 0.01,
      unit: "ppm",
      explain: "0,12 × 10 000 = 1200 ppm. El límite del tolueno con la opción 1 es 890 ppm: no cumple, aunque 0,12 % parezca poco.",
    },
    {
      kind: "number",
      q: "Un lote de 160 kg de producto tiene 2500 ppm de metanol. ¿Cuántos gramos de metanol lleva en total? (ppm = mg por kg)",
      answer: 400,
      tolerance: 0.01,
      unit: "g",
      explain: "2500 mg/kg × 160 kg = 400 000 mg = 400 g de metanol, repartidos por todo el lote. Cumple el límite de 3000 ppm.",
    },
    {
      kind: "number",
      q: "Con la opción 2 de ICH Q3C, ¿qué límite en ppm tendría el diclorometano (PDE 6,0 mg/día) en un medicamento del que se toman como máximo 1,5 g al día?",
      answer: 4000,
      tolerance: 0.01,
      unit: "ppm",
      explain: "ppm = 1000 × 6,0 / 1,5 = 4000 ppm. Solo vale si se demuestra que el disolvente se ha reducido al mínimo práctico; el límite de tu producto es el de su especificación.",
    },
    {
      kind: "number",
      q: "Un principio activo tiene 400 ppm de diclorometano y el paciente toma 2,5 g de él al día. ¿Cuántos mg de diclorometano toma al día? (400 ppm = 400 mg por kg = 0,4 mg por g)",
      answer: 1,
      tolerance: 0.01,
      unit: "mg/día",
      explain: "0,4 mg/g × 2,5 g = 1 mg/día, por debajo de la PDE del diclorometano, 6,0 mg/día.",
    },
    {
      kind: "number",
      q: "Un análisis da 3500 ppm de acetato de etilo, un disolvente de clase 3. ¿Qué porcentaje es?",
      answer: 0.35,
      tolerance: 0.01,
      unit: "%",
      explain: "3500 / 10 000 = 0,35 %. Está por debajo del 0,5 % (5000 ppm) que la guía acepta sin justificación para la clase 3.",
    },
    {
      kind: "choice",
      q: "El último paso del proceso usa tolueno y el lavado final es de heptano. El LOD del producto da 0,3 % y la especificación de LOD es 0,5 %. ¿Basta para dar por bueno el disolvente residual?",
      options: [
        "Sí, porque el LOD mide todo lo que se evapora",
        "No, la guía solo acepta el LOD si todo es de clase 3",
        "Sí, porque el heptano desplaza todo el tolueno",
        "No, el LOD solo sirve para medir el agua",
      ],
      answer: 1,
      explain: "ICH Q3C (3.4) solo admite un método no específico como el LOD si únicamente hay disolventes de clase 3. El tolueno es de clase 2: 0,3 % son 3000 ppm y su límite es 890 ppm. Hace falta GC.",
    },
    {
      kind: "choice",
      q: "Tras limpiar el cesto de la centrífuga te sobran 15 L de diclorometano sucio. El bidón de residuo no halogenado está al lado, casi vacío. ¿Qué haces?",
      options: [
        "Lo echo al de no halogenados, porque es poca cantidad",
        "Lo dejo evaporar en la cabina para no generar residuo",
        "Lo mezclo con el heptano del lavado para diluirlo",
        "Lo llevo al bidón de halogenados, etiquetado y anotado",
      ],
      answer: 3,
      explain: "El diclorometano lleva cloro: es halogenado. La NTP 480 mete en ese grupo cualquier mezcla con más de un 2 % de halógenos, así que estropearía el bidón entero. Evaporarlo es emitir un COV.",
    },
    {
      kind: "choice",
      q: "La hoja pide «metanol, código D-0110». El bidón que te traen pone «metanol» y tiene etiqueta de aprobado, pero el código es D-0115. ¿Qué haces?",
      options: [
        "No lo cargo, lo aparto y aviso a mi responsable",
        "Lo cargo, porque el nombre y el estado coinciden",
        "Lo cargo y anoto el código correcto de la hoja",
        "Lo cargo y anoto la diferencia al final del turno",
      ],
      answer: 0,
      explain: "ICH Q7 (8.12) pide comprobar antes de usarlo que el material es el que indica la hoja. Un código distinto puede ser otra calidad o un metanol recuperado. Se para, se aparta y se avisa.",
    },
    {
      kind: "choice",
      q: "La hoja permite usar «metanol recuperado aprobado» del depósito DR-15. La placa del depósito dice «cuarentena». ¿Qué significa?",
      options: [
        "Que puedo usarlo si el olor y el color son normales",
        "Que puedo usarlo si lo mezclo con metanol nuevo",
        "Que aún no está aprobado y no se puede cargar",
        "Que es metanol de otro proceso que vale para todos",
      ],
      answer: 2,
      explain: "ICH Q7 (14.41 y 14.42) solo permite reutilizarlo, o mezclarlo con el nuevo, cuando ha demostrado que cumple su estándar. En cuarentena aún no lo ha hecho: se pide metanol nuevo aprobado.",
    },
  ],
};
