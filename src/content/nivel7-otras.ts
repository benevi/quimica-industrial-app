import type { Lesson } from "./types";

export const otrasTecnicasAFondo: Lesson = {
  slug: "otras-tecnicas-a-fondo",
  level: 7,
  order: 13.5,
  title: "Otras técnicas a fondo: difracción de rayos X, RMN, espectrometría de masas e ICP",
  titleEn: "Other analytical techniques in depth",
  minutes: 38,
  summary:
    "Qué pregunta responde cada técnica especial del laboratorio (forma cristalina, estructura, masa de las moléculas, metales), cómo se mide una nitrosamina en trazas con LC-MS, la cuenta del paladio con la opción 2a de ICH Q3D, el análisis elemental, la rotación óptica y la microscopía, cuándo se usa cada una y qué cuidas tú al tomar la muestra para que el resultado diga la verdad.",
  body: `
En «Otras técnicas: DRX, RMN, masas, ICP» viste una tabla con los nombres. Aquí vas a ver qué pregunta responde cada una y por qué una muestra mal tomada estropea el análisis. No las manejarás tú, pero sus resultados deciden si tu lote sale.

El infrarrojo y el UV están en «Espectroscopia a fondo»; la separación por columnas, en «Cromatografía a fondo», «HPLC a fondo» y «Cromatografía de gases a fondo»; la calorimetría (DSC) y la termogravimetría (TGA), en «Punto de fusión y análisis térmico a fondo». Aquí no se repiten.

### Cuatro preguntas, cuatro técnicas
Cada una contesta una pregunta distinta:

| Pregunta | Técnica | Qué devuelve |
|---|---|---|
| ¿En qué forma cristalina ha salido? | Difracción de rayos X de polvo (XRPD) | Un dibujo de picos que se compara con el de la forma buena |
| ¿Es de verdad la molécula que creemos? | Resonancia magnética nuclear (RMN) | Un espectro que retrata cómo están unidos los átomos |
| ¿Qué es esa impureza desconocida? ¿Hay trazas de algo peligroso? | Espectrometría de masas (MS), sola o con cromatografía | La masa de las moléculas y de sus trozos |
| ¿Cuánto metal queda? | ICP-OES e ICP-MS | Microgramos de cada elemento por gramo de producto |

### Difracción de rayos X de polvo: la huella del cristal
Por «Polimorfismo, sales y solvatos a fondo» sabes que una molécula puede apilarse de varias maneras. La **difracción de rayos X de polvo** (*X-ray powder diffraction*, XRPD; en español también DRX) es la técnica que dice cuál de esas formas tienes.

Piensa en un olivar plantado en filas: solo desde ciertas direcciones ves un pasillo limpio de punta a punta. Los rayos X son una luz invisible que atraviesa el polvo. Al chocar con las filas ordenadas de moléculas del cristal, solo salen reforzados en ciertos ángulos. El equipo recorre los ángulos y dibuja un gráfico: ángulo en el eje horizontal e intensidad en el vertical. Cada pico es uno de esos pasillos.

- **Cada forma cristalina tiene su propio dibujo.** Otra forma son otras filas y salen picos en otros sitios. El laboratorio compara el dibujo de tu lote con el de la forma de referencia.
- **Prueba fuerte.** La guía sobre polimorfismo de la agencia de medicamentos de Estados Unidos (*Food and Drug Administration*, FDA), de 2007, dice que la difracción de un monocristal es la prueba definitiva de que hay otra forma, y que la de polvo también puede dar una prueba inequívoca. La microscopía, el análisis térmico y la espectroscopia (infrarrojo, Raman y RMN del sólido) ayudan a caracterizarlas.

ICH Q6A, la guía de especificaciones, la cita para saber si un producto tiene varias formas. Su **árbol de decisión 4** pide primero buscar y caracterizar las formas posibles, y pone como ejemplo la XRPD, el DSC, la microscopía y la espectroscopia. Solo si las formas se comportan distinto y eso afecta al medicamento se fija un criterio de aceptación para la forma.

**Lo que esto significa para tu muestra.** La guía de la FDA avisa de que una forma puede convertirse en otra durante el secado, la molienda o la micronización, y también con la humedad y la temperatura. Una muestra para XRPD tiene que llegar al laboratorio tal como estaba el sólido en el equipo. Por eso, no la muelas, no la tamices, no la dejes al sol ni abierta, y llévala pronto. Un hidrato que pierde agua en la bandeja ya no es el sólido de tu lote. Si el método lo pide, el laboratorio la prepara después; eso lo decide su procedimiento, no tú.

### RMN: los núcleos como pequeños imanes
La **resonancia magnética nuclear** (*nuclear magnetic resonance*, NMR; en español, RMN) es la técnica de los químicos para ver el esqueleto de una molécula.

La idea, sin física profunda: el centro de algunos átomos, el **núcleo**, se comporta como un imán diminuto. Con frecuencia se usa el del hidrógeno (RMN de protón). Dentro del gran imán del equipo, esos imanes diminutos se alinean como las brújulas con el norte. El equipo les manda un pulso de ondas de radio, los núcleos lo absorben y, al volver a su sitio, devuelven una señal.

Cada hidrógeno responde a una frecuencia algo distinta según lo que tenga alrededor: no suena igual uno pegado a un oxígeno que uno en mitad de una cadena de carbonos. El resultado es un **espectro**, una fila de señales:

- **La posición de cada señal** dice en qué entorno está ese hidrógeno. Se mide en partes por millón respecto a una sustancia de referencia.
- **El tamaño de cada señal** crece con el número de hidrógenos que la producen.
- **Las señales que sobran** delatan otra sustancia: un disolvente o una impureza.

**Para qué se usa.** La guía de la Agencia Europea de Medicamentos (EMA) sobre la química de los principios activos (versión de 2026) enumera las pruebas de estructura que se presentan para una molécula nueva: análisis elemental con sus valores teóricos, infrarrojo, **espectros de RMN interpretados**, ultravioleta, **espectros de masas** y masa molecular, difracción de rayos X de un cristal, la ruta de síntesis y reacciones químicas que delatan la estructura. Es trabajo de desarrollo; Q6A y la guía de la FDA citan además la **RMN del sólido** para distinguir formas cristalinas.

En liberación la verás menos: para identificar el producto, Q6A pone como ejemplo el infrarrojo.

### Espectrometría de masas: pesar moléculas
La **espectrometría de masas** (*mass spectrometry*, MS) pesa moléculas. Para eso primero las convierte en **iones**, moléculas con carga eléctrica, y luego las separa según su masa dividida por su carga, que se escribe **m/z**. 

El manual de laboratorio de la FDA para medicamentos (ORA, volumen IV, sección 3) describe el detector de masas como muy sensible y capaz de identificar los **fragmentos** de la molécula original, lo que da información sobre su estructura. Es como reconocer un mueble desmontado por sus piezas.

**Sola o acoplada.** Una muestra real es una mezcla; por eso el espectrómetro suele ir detrás de un cromatógrafo:

- **LC-MS**: cromatografía de líquidos más masas. La columna separa las sustancias y el espectrómetro pesa cada una al salir.
- **GC-MS**: lo mismo con cromatografía de gases, para sustancias volátiles.

ICH Q6A dice que un solo tiempo de retención no basta para identificar una sustancia, pero acepta combinaciones en un solo ensayo como HPLC con masas o GC con masas.

**Cuándo entra en juego.** Cuando la cromatografía de líquidos (HPLC) de rutina muestra un pico desconocido por encima del umbral de identificación (los umbrales están en «Impurezas a fondo»), el laboratorio necesita saber qué es. La masa de ese pico y de sus fragmentos, junto con lo que se sabe del proceso, da la pista. En una investigación de un resultado fuera de especificación (repasa «Resultados fuera de especificación (OOS) a fondo»), saber qué es la impureza ayuda a saber de dónde viene.

### Trazas: nitrosaminas con LC-MS
En «Impurezas a fondo» viste qué son las nitrosaminas y por qué cada una tiene su propia **ingesta aceptable** (*acceptable intake*, AI). Aquí va la parte del análisis.

**Cuenta 1. El límite.** El documento de preguntas y respuestas de la EMA sobre nitrosaminas (EMA/409815/2020, revisión 23, octubre de 2025) usa para la N-nitrosodimetilamina (NDMA) una ingesta aceptable de **96,0 ng al día**. Un nanogramo (ng) es una milésima de microgramo. Para un medicamento con una dosis máxima de 500 mg al día (valor de ejemplo):

> 96,0 ng/día / 500 mg/día = 0,192 ng/mg = **0,192 ppm**, es decir, **192 ppb**

Una parte por billón (ppb) es mil veces menos que una ppm.

**Qué exige la EMA al método.** Debe ser lo bastante sensible. El **límite de cuantificación** (*limit of quantification*, LoQ), lo mínimo que se mide con exactitud y precisión aceptables, debe ser igual o menor que el límite si el ensayo es de rutina; como mucho el 30 % del límite si se usa para justificar analizar solo algunos lotes; y como mucho el 10 % si se usa para justificar quitar el ensayo de la especificación. Con los 192 ppb del ejemplo, eso da 57,6 ppb y 19,2 ppb.

**Cuenta 2. Un método real de la FDA.** En 2020 la FDA publicó un método de cromatografía de líquidos con masas de alta resolución (LC-HRMS) para la NDMA en metformina. Pesa 500 mg de principio activo y los extrae con 5,0 mL de metanol: 100 mg por mL. Su LoQ en la disolución es 3,0 ng/mL. Pasado a producto:

> 3,0 ng/mL / 100 mg/mL = 0,03 ng/mg = **0,03 ppm**

La fórmula del método es:

> NDMA (ppm) = (área de la muestra / área del patrón) × concentración del patrón (ng/mL) × volumen (mL) / peso (mg)

**Cuenta 3. Un resultado (valores de ejemplo).** Área de la muestra 18000, área media del patrón 12000, patrón de 3,0 ng/mL, 5,0 mL y 500 mg:

> 18000 / 12000 × 3,0 × 5,0 / 500 = **0,045 ppm** (45 ppb), por debajo de los 192 ppb del ejemplo

**Por qué hace falta tanta técnica.** El método de la FDA no mira cualquier masa: aísla el ion de la NDMA con un hidrógeno añadido, de m/z 75,0553, con una tolerancia de 15 partes por millón en la masa. La EMA explica por qué: se han visto **falsos positivos** de NDMA causados por la dimetilformamida (DMF), un disolvente corriente, que sale de la columna a la vez. Por eso pide masas exactas (MS/MS o alta resolución) y, como control, analizar también con un método de otro principio.

La EMA añade tres trampas para quien toma y prepara la muestra:

- Trazas de nitrosaminas en el agua, el aire, los plásticos y las gomas.
- Contaminación al preparar la muestra: guantes, membranas, disolventes.
- Nitrosaminas que se forman durante el propio análisis.

### ICP-OES e ICP-MS: los metales
Para medir metales hay que destruir la molécula y quedarse con los átomos. Los métodos de la FDA para elementos (manual de análisis elemental, secciones 4.4 y 4.7) lo hacen así:

1. **Digestión.** La muestra se descompone con ácido nítrico en un recipiente cerrado calentado con microondas.
2. **Nebulización.** La disolución se convierte en una niebla fina.
3. **Plasma.** La niebla entra en un **plasma de argón**: gas argón llevado a una temperatura altísima con energía de radiofrecuencia. Ahí se seca, se rompe en átomos y estos se excitan y emiten luz. Por eso se llama **plasma acoplado inductivamente** (*inductively coupled plasma*, ICP).

A partir de ahí hay dos caminos:

- **ICP-OES** (*optical emission spectrometry*; la FDA lo llama ICP-AES). Los átomos excitados emiten luz. El libro de instrumentación de Kuphaldt lo explica con una huella dactilar: cada elemento emite colores propios que no tiene ningún otro, porque sus electrones solo pueden saltar entre ciertos escalones de energía. El equipo separa la luz con una red de difracción y mide la intensidad de las líneas de cada elemento.
- **ICP-MS** (*mass spectrometry*). Los átomos convertidos en iones pasan a un espectrómetro de masas que los cuenta por su m/z.

**Hasta dónde llegan.** En los métodos de la FDA para alimentos, el límite de cuantificación del plomo es 6 mg/kg con ICP-AES y 10,9 µg/kg con ICP-MS: unas 550 veces menos. Los métodos no son idénticos, pero la idea vale: el ICP-MS es la herramienta de las trazas más bajas. La propia FDA avisa de que los límites más bajos solo se alcanzan con blancos muy limpios.

ICH Q3D (apartado 9) pide un ensayo adecuado, específico para cada elemento señalado por el análisis de riesgo, de farmacopea o alternativo adecuado.

### Paladio tras un acoplamiento: la cuenta de Q3D
Muchas síntesis unen dos trozos de molécula en una reacción de **acoplamiento** (*coupling*) con un catalizador de paladio. Q3D pone un ejemplo de principio activo fabricado con catalizadores de paladio y níquel. El paladio es de la **clase 2B**: se evalúa porque se añade a propósito. Su **exposición diaria permitida** (*permitted daily exposure*, PDE) por vía oral es **100 µg al día**. La clase y la PDE están en «Átomos y tabla periódica a fondo», donde también viste la opción 1 de la guía (suponer 10 g de medicamento al día: 10 µg/g).

**La opción 2a.** Q3D la describe como la opción 1 pero sin suponer 10 g: se divide la PDE entre la **ingesta diaria máxima real del medicamento**, y el resultado vale como concentración común para todos sus componentes, principio activo incluido.

> Concentración permitida (µg/g) = PDE (µg/día) / ingesta diaria del medicamento (g/día)

Ejemplo de la guía: con 2,5 g al día, 40 µg/g, cuatro veces más que con la opción 1.

**Cuenta 4. Valores de ejemplo.** Un comprimido ficticio cuya ingesta diaria máxima es de 2 g de medicamento:

> 100 / 2 = **50 µg/g** (50 ppm) de paladio en cada componente

**El umbral de control.** Q3D define un **umbral de control** (*control threshold*) del 30 % de la PDE: si el total de un elemento en el medicamento queda siempre por debajo, no hacen falta controles adicionales. Aquí, 30 µg al día, que con 2 g al día son 15 µg/g.

**Cuenta 5. Del laboratorio al lote (valores de ejemplo).** Se digieren 0,2000 g del principio activo y se llevan a 50 mL. El ICP-MS mide 40 µg/L de paladio:

> 40 µg/L × 0,050 L = 2,0 µg de paladio; 2,0 µg / 0,2000 g = **10 µg/g**

Con 2 g al día, el paciente tomaría 10 × 2 = 20 µg de paladio al día: el 20 % de la PDE, por debajo del umbral del 30 %. En un lote de 300 kg, esos 10 µg/g son 300 000 g × 10 µg/g = 3 000 000 µg = **3 g** de paladio repartidos en el polvo.

El límite de tu producto es el de su especificación. Q3D permite además que el ensayo sea **periódico** (no en todos los lotes) siguiendo los principios de Q6A, y nombra otras fuentes de metales que tocan la planta: los equipos de fabricación, que se controlan con su elección, su cualificación y las buenas prácticas de fabricación (*good manufacturing practice*, GMP), y el agua.

### Otras técnicas que oirás
**Análisis elemental CHN.** Da qué porcentaje de la muestra es carbono, hidrógeno y nitrógeno. La guía de la EMA lo pide en la prueba de estructura junto con sus **valores teóricos**, que salen de la fórmula. Ejemplo con el paracetamol, C₈H₉NO₂, y las masas atómicas del nivel 1 (C 12,011; H 1,008; N 14,007; O 15,999):

> Masa molar: 8 × 12,011 + 9 × 1,008 + 14,007 + 2 × 15,999 = 151,165 g/mol
>
> C: 96,088 / 151,165 = **63,56 %**; H: 9,072 / 151,165 = **6,00 %**; N: 14,007 / 151,165 = **9,27 %**

Si el resultado se aleja, sobra o falta algo: agua, disolvente, una sal.

**Rotación óptica.** Los productos quirales giran la luz polarizada (todo lo demás está en «Isómeros y quiralidad a fondo»). El manual de la FDA da la fórmula de la **rotación específica**:

> [α] = 100 × a / (l × c)

con a el giro medido en grados, l la longitud del tubo en decímetros y c la concentración en gramos por 100 mL. Valores de ejemplo: a = +1,25°, l = 1 dm, c = 2,5 g/100 mL; [α] = 100 × 1,25 / 2,5 = **+50°**. La temperatura debe mantenerse dentro de 0,5 °C de la indicada, según el mismo manual.

**Microscopía.** Mirar los cristales. Q6A cita la microscopía óptica y la de platina caliente (se ve el cristal mientras se calienta), y la guía de la EMA, la electrónica de barrido. Según la FDA, ayuda a caracterizar las formas cristalinas junto con la XRPD; además deja ver la forma y el tamaño de los cristales.

### Cuándo se usa cada una

| Momento | Técnicas típicas | Ejemplo |
|---|---|---|
| Desarrollo | RMN, masas, análisis elemental, rayos X de monocristal, XRPD | Demostrar la estructura y buscar formas cristalinas |
| Validación del proceso y del método | ICP-MS, LC-MS, XRPD | Demostrar que el proceso quita el paladio; que el método llega al LoQ |
| Liberación de lotes | Lo que pida la especificación: XRPD si se controla la forma, ICP si se controla un metal | «Forma cristalina conforme con la forma de referencia», «Pd ≤ límite» |
| Investigación de un OOS o de un pico nuevo | LC-MS, GC-MS, RMN, microscopía | Identificar una impureza desconocida |

### Lo que haces tú al tomar la muestra
El laboratorio mide lo que tú le das. Lo general está en «Muestreo en planta a fondo»; esto es lo propio de estas técnicas:

| Análisis | Cuidados del operador |
|---|---|
| XRPD | Sin moler, tamizar ni calentar; envase bien cerrado; llevarla pronto |
| Metales (ICP) | Envase y utensilio de plástico limpios; nada de metal ni vidrio si el procedimiento no lo indica; guantes sin polvo y sin color; no tocar el interior de la tapa |
| Nitrosaminas (LC-MS) | Solo el envase y los guantes que diga el procedimiento; nada de gomas ni plásticos improvisados; muestra cerrada |
| Todas | La cantidad pedida (por ejemplo, 10 g, valor de ejemplo), etiqueta completa, hora y punto de muestreo |

¿Por qué tanto cuidado? El manual de la FDA dice que el control de la contaminación evita falsos positivos. Pide utensilios de plástico mejor que de vidrio, cerámica o metal; espátulas no metálicas; guantes sin polvo, mejor sin color, porque el polvo y los colorantes pueden soltar elementos; y avisa de que el acero inoxidable puede ceder cromo, níquel, molibdeno, cobalto, vanadio y hierro. Una espátula de acero en una muestra para níquel puede fabricar un resultado malo.

En planta manda siempre el procedimiento vigente (SOP): envases, cantidades, puntos de muestreo y límites son los de tu hoja, no los de estos ejemplos.
`,
  plant: `
Turno de mañana en una planta ficticia. Todos los códigos y valores son de ejemplo.

En el reactor **R-412** ha terminado el acoplamiento con catalizador de paladio que da el intermedio inventado **INT-48**. La hoja manda pasar la mezcla por el filtro de cartucho **FL-415** para retener el catalizador. Anotas la presión diferencial al principio y al final y el número del cartucho.

Más adelante el producto final **AX-50** cristaliza, pasa por la centrífuga **C-420** y se seca en el secadero de vacío **SD-430**. Al terminar el secado tomas tres muestras:

- **Paladio (ICP-MS).** Frasco de polietileno que da el laboratorio, espátula de plástico y guantes de nitrilo sin polvo. No apoyas la tapa boca abajo sobre la mesa.
- **Forma cristalina (XRPD).** Tomas el polvo tal cual sale, sin deshacer los grumos con la espátula ni pasarlo por un tamiz, y cierras el envase en el acto.
- **Nitrosaminas.** Con el kit cerrado que indica el procedimiento.

Por la tarde llegan los resultados: paladio 10 µg/g frente a un límite de 50 µg/g; forma conforme con la forma de referencia; NDMA no detectada. Una semana antes, otro lote dio paladio alto. La investigación encontró que la muestra se había tomado con una cuchara de acero de otra zona. Se repitió con material correcto y el lote cumplió. Desde entonces el procedimiento pide utensilio de plástico identificado para metales.
`,
  batchRecord: `
- **Filtración del catalizador**: número de cartucho, presión diferencial al inicio y al final, hora, firma.
- **Muestras especiales**: análisis pedido (paladio, forma cristalina, nitrosaminas), punto de muestreo, hora, cantidad, tipo de envase y utensilio usados, número de muestra, firma.
- **Estado del envase**: «cerrado al tomar», y si la muestra esperó, dónde y cuánto tiempo.
- **Resultados recibidos**: el laboratorio los registra en su sistema informático (*laboratory information management system*, LIMS); en la hoja se anota el número de análisis o el estado de la muestra si el procedimiento lo pide.
- **Cualquier anomalía**: utensilio distinto del indicado, envase abierto, muestra caída o calentada. Se anota y se avisa en el momento: decidir si la muestra vale antes de analizarla ahorra una investigación después.
`,
  terms: [
    { es: "Difracción de rayos X de polvo", en: "X-ray powder diffraction (XRPD)", def: "Técnica que da un dibujo de picos propio de cada forma cristalina; según la FDA puede dar prueba inequívoca de polimorfismo." },
    { es: "Difractograma", en: "Diffraction pattern", def: "Gráfico de intensidad frente al ángulo que da la XRPD; se compara con el de la forma de referencia." },
    { es: "Resonancia magnética nuclear", en: "Nuclear magnetic resonance (NMR)", def: "Técnica que usa núcleos que se comportan como imanes diminutos para retratar cómo están unidos los átomos de una molécula." },
    { es: "Espectrometría de masas", en: "Mass spectrometry (MS)", def: "Técnica que convierte las moléculas en iones y los separa según su relación masa/carga (m/z)." },
    { es: "Relación masa/carga", en: "Mass-to-charge ratio (m/z)", def: "Masa de un ion dividida por su carga; es el eje en el que se lee un espectro de masas." },
    { es: "Cromatografía de líquidos con masas", en: "Liquid chromatography-mass spectrometry (LC-MS)", def: "Cromatografía de líquidos seguida de un espectrómetro de masas: separa y luego identifica o mide trazas." },
    { es: "Plasma acoplado inductivamente", en: "Inductively coupled plasma (ICP)", def: "Gas argón muy caliente, mantenido por radiofrecuencia, que rompe la muestra en átomos para medir elementos." },
    { es: "ICP-OES", en: "Inductively coupled plasma optical emission spectrometry", def: "Mide elementos por los colores de luz que emite cada uno en el plasma." },
    { es: "ICP-MS", en: "Inductively coupled plasma mass spectrometry", def: "Mide elementos contando sus iones en un espectrómetro de masas; llega a trazas más bajas que el ICP-OES." },
    { es: "Exposición diaria permitida", en: "Permitted daily exposure (PDE)", def: "Según ICH Q3D, cantidad máxima aceptable de un elemento al día con el medicamento; paladio oral, 100 µg/día." },
    { es: "Umbral de control", en: "Control threshold", def: "En ICH Q3D, el 30 % de la PDE; por debajo de forma constante no hacen falta controles adicionales." },
    { es: "Ingesta aceptable", en: "Acceptable intake (AI)", def: "Cantidad diaria de una impureza mutagénica, como una nitrosamina, con un riesgo despreciable; NDMA, 96,0 ng/día según la EMA." },
    { es: "Límite de cuantificación", en: "Limit of quantification (LoQ)", def: "Nivel más bajo que un método mide con exactitud y precisión aceptables." },
    { es: "Rotación específica", en: "Specific rotation", def: "Giro de la luz polarizada normalizado: [α] = 100 × a / (l × c), con l en dm y c en g/100 mL." },
  ],
  quiz: [
    {
      kind: "choice",
      q: "El laboratorio pide una muestra de fin de secado para XRPD. El polvo sale con grumos. ¿Qué haces?",
      options: [
        "La tomas tal cual, cierras el envase y la llevas pronto",
        "Deshaces los grumos en un mortero para que sea homogénea",
        "La pasas por un tamiz fino para quitar los grumos grandes",
        "La dejas airear abierta un rato para que pierda humedad",
      ],
      answer: 0,
      explain: "La FDA avisa de que moler, secar, la humedad y la temperatura pueden cambiar la forma cristalina. La muestra tiene que llegar como estaba en el equipo; la preparación la decide el método del laboratorio.",
    },
    {
      kind: "number",
      q: "Paladio, PDE oral 100 µg/día. Un medicamento ficticio tiene una ingesta diaria máxima de 4 g. ¿Qué concentración común de paladio permite la opción 2a de ICH Q3D en cada componente, en µg/g?",
      answer: 25,
      tolerance: 0.01,
      unit: "µg/g",
      explain: "Opción 2a: PDE entre la ingesta diaria real del medicamento. 100 / 4 = 25 µg/g.",
    },
    {
      kind: "choice",
      q: "En el HPLC de un lote aparece un pico desconocido por encima del umbral de identificación. ¿Qué técnica usará el laboratorio para saber qué es?",
      options: [
        "Karl Fischer, porque el pico seguramente es agua",
        "Polarimetría, porque mide el giro de la impureza",
        "LC-MS, que separa el pico y da su masa y sus fragmentos",
        "XRPD, porque el pico indica otra forma cristalina",
      ],
      answer: 2,
      explain: "La cromatografía separa la impureza y el espectrómetro de masas la pesa y la rompe en fragmentos, que dan información sobre su estructura.",
    },
    {
      kind: "number",
      q: "El analista digiere 0,2500 g de principio activo y lleva la disolución a 50 mL. El ICP-MS mide 30 µg/L de paladio. ¿Cuántos µg de paladio hay por gramo de producto?",
      answer: 6,
      tolerance: 0.01,
      unit: "µg/g",
      explain: "30 µg/L × 0,050 L = 1,5 µg; 1,5 / 0,2500 = 6 µg/g.",
    },
    {
      kind: "choice",
      q: "Vas a tomar una muestra para analizar níquel por ICP-MS. ¿Qué utensilio usas si el procedimiento dice «utensilio para metales»?",
      options: [
        "La cuchara de acero inoxidable de siempre, bien limpia",
        "Una espátula de plástico limpia, con guantes sin polvo",
        "Una cucharilla de vidrio, porque el vidrio no suelta nada",
        "La que esté más cerca, porque la cantidad de metal es mínima",
      ],
      answer: 1,
      explain: "El manual de la FDA avisa de que el acero inoxidable puede ceder cromo, níquel, molibdeno, cobalto, vanadio y hierro, y prefiere plástico a vidrio o metal, con guantes sin polvo.",
    },
    {
      kind: "number",
      q: "La EMA usa para la NDMA una ingesta aceptable de 96,0 ng/día. ¿Cuál es el límite en ppm para un medicamento con una dosis máxima de 300 mg al día?",
      answer: 0.32,
      tolerance: 0.01,
      unit: "ppm",
      explain: "96,0 ng/día / 300 mg/día = 0,32 ng/mg = 0,32 ppm, es decir, 320 ppb, como en el ejemplo de la propia EMA.",
    },
    {
      kind: "choice",
      q: "¿Por qué la EMA pide masas exactas (MS/MS o alta resolución) para medir NDMA?",
      options: [
        "Porque la NDMA no se puede separar en ninguna columna",
        "Porque con masas exactas el análisis dura bastante menos",
        "Porque así no hace falta un patrón de referencia de NDMA",
        "Porque la DMF ha dado falsos positivos al salir a la vez",
      ],
      answer: 3,
      explain: "La EMA cuenta que se han visto falsos positivos de NDMA por la DMF que sale a la vez de la columna; las masas exactas permiten distinguir el pico de verdad.",
    },
    {
      kind: "number",
      q: "Un polarímetro mide un giro de +0,80° con un tubo de 2 dm y una disolución de 2,0 g/100 mL. ¿Cuál es la rotación específica en grados?",
      answer: 20,
      tolerance: 0.01,
      unit: "°",
      explain: "[α] = 100 × a / (l × c) = 100 × 0,80 / (2 × 2,0) = 20°.",
    },
    {
      kind: "choice",
      q: "Un lote da paladio de 12 µg/g. Con una ingesta de 2 g al día y una PDE de 100 µg/día, ¿qué dice el umbral de control de Q3D?",
      options: [
        "Supera la PDE y el lote se rechaza directamente",
        "Son 24 µg/día, el 24 % de la PDE: bajo el umbral del 30 %",
        "Son 6 µg/día, muy lejos de cualquier límite de la guía",
        "El umbral de control solo vale para la clase 1 de Q3D",
      ],
      answer: 1,
      explain: "12 µg/g × 2 g/día = 24 µg/día, el 24 % de 100. El umbral de control es el 30 % de la PDE; el límite del producto lo fija su especificación.",
    },
    {
      kind: "choice",
      q: "Según ICH Q6A, ¿qué ensayo de identificación de un principio activo se considera específico?",
      options: [
        "Un solo tiempo de retención en el HPLC de rutina",
        "El aspecto del polvo comparado con el lote anterior",
        "Un infrarrojo, o una combinación como HPLC con masas",
        "El punto de fusión, siempre que esté dentro de rango",
      ],
      answer: 2,
      explain: "Q6A pone el infrarrojo como ejemplo de prueba específica y dice que un solo tiempo de retención no lo es; acepta combinaciones como HPLC/MS o GC/MS.",
    },
  ],
};
