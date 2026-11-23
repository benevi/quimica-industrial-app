import type { Lesson } from "./types";

export const capaFinaAFondo: Lesson = {
  slug: "capa-fina-a-fondo",
  level: 7,
  order: 6.5,
  title: "Cromatografía en capa fina a fondo",
  titleEn: "Thin-layer chromatography in depth",
  minutes: 38,
  summary:
    "La placa, el eluyente y la cubeta saturada desde cero; cómo se siembra, se desarrolla y se revela con luz ultravioleta y con reactivos; el Rf con cuentas resueltas; el ensayo límite de impurezas por comparación con una mancha de referencia; la capa fina en la identificación de farmacopea, en la limpieza y en el control de fin de reacción de una planta piloto; la HPTLC; y la seguridad con disolventes, ácido sulfúrico y lámparas.",
  body: `
En «Cromatografía a fondo: cómo se separan las sustancias y cómo se lee un cromatograma» viste el reparto entre una fase que se mueve y otra quieta; en «HPLC a fondo» y en la de gases, los equipos con columna. Aquí no hay columna ni bomba: hay una placa, un frasco con tapa y tus ojos. Es la **cromatografía en capa fina** (*thin-layer chromatography*, TLC), que el manual de formación de analistas de la agencia del medicamento de Estados Unidos (FDA, *ORA Lab Manual*, volumen IV, sección 3, de 2022) llama una forma de **cromatografía plana** (*planar chromatography*).

### La idea: una carrera sobre una hoja
El libro de instrumentación de Kuphaldt recuerda que la cromatografía nació separando pigmentos de plantas y que su nombre quiere decir «escribir con colores».

Pon una gota de tinta de rotulador cerca del borde de una tira de papel de cocina y mete ese borde en un poco de alcohol, sin mojar la gota. El alcohol sube y arrastra la tinta. Cada colorante se engancha más o menos a las fibras y la gota acaba convertida en una fila de manchas a distintas alturas.

En el laboratorio, la hoja es la **placa** (*plate*), el alcohol es la **fase móvil** o **eluyente** (*eluent*) y cada mancha es una sustancia. Cuanto más se agarra una sustancia a la placa, menos sube.

### La placa: la fase estacionaria
El cuadro comparativo del manual de la FDA describe la fase estacionaria como una capa fina y uniforme, seca, de un polvo muy fino, el **adsorbente** (*adsorbent*), como el **gel de sílice** (*silica gel*) o la celulosa, extendida sobre vidrio, plástico o una lámina de metal. Su temario cita placas de gel de sílice (con **aglutinante**, *binder*, y a veces con **aditivo fluorescente**), de celulosa y de alto rendimiento (HPTLC).

Los métodos oficiales españoles de análisis (BOE de 1977 y 1979) usan sobre todo placas de gel de sílice de 20 × 20 cm con una capa de 0,25 mm (0,40 mm si dos sustancias salen muy juntas), y también de **poliamida** sobre aluminio.

**Por qué separa.** Según el mismo cuadro, por **adsorción** (*adsorption*: la sustancia se pega a la superficie del polvo), por **reparto** o por las dos cosas. El gel de sílice es muy polar y, como viste en «Enlaces y fuerzas entre moléculas a fondo», lo polar atrae a lo polar: con un eluyente poco polar, lo polar se queda abajo y lo apolar sube. Dos ejemplos oficiales:

- En el método del BOE de antioxidantes en grasas, los galatos, con tres grupos OH polares, se quedan cerca del origen, y el BHT, con uno solo rodeado de grupos voluminosos, viaja casi con el frente.
- En el método europeo de esteroles del aceite de oliva (Reglamento CEE 2568/91, en el Diario Oficial publicado en el BOE), la placa se prepara básica sumergiéndola 10 segundos en potasa alcohólica. Así, los compuestos ácidos se quedan en la línea de aplicación y no estorban.

**Activar la placa.** Los métodos usan placas «previamente activadas». El europeo las seca dos horas al aire y una en estufa a 100 °C, las guarda en un desecador y obliga a usarlas en quince días como máximo.

### La fase móvil: el eluyente
Es una mezcla de disolventes en una proporción fija. Algunos de los métodos oficiales leídos:

| Método oficial | Placa | Eluyente (volúmenes) |
|---|---|---|
| Ésteres extraños en grasas (BOE 1979, n.º 43) | Gel de sílice G | Hexano y éter etílico, 92:8 |
| Esteroles del aceite de oliva (Reglamento 2568/91) | Gel de sílice básica | Benceno y acetona 95:5, o hexano y éter etílico 65:35 |
| Conservadores en carne (BOE 1979) | Poliamida con indicador fluorescente | 1: pentano, hexano y ácido acético 10:10:3; 2: benceno, acetato de etilo y ácido acético 85:10:5 |

Dos detalles de esos métodos: la mezcla se prepara justo antes de usarla y, según el método europeo, se cambia en cada prueba «para que las condiciones de elución sean perfectamente reproducibles». Y ojo al benceno: son métodos antiguos, e ICH Q3C lo pone en la clase 1, disolventes que se deben evitar (es cancerígeno).

### La cubeta saturada
La placa se desarrolla dentro de una **cubeta** o **cámara de desarrollo** (*developing chamber*): un recipiente de vidrio con tapa. El método europeo de esteroles da la receta:

1. Echar el eluyente hasta una altura de 1 cm, aproximadamente.
2. Cerrar con la tapa y esperar **media hora como mínimo**, «de forma que se alcance el equilibrio líquido-vapor».
3. Se pueden poner en las paredes tiras de papel de filtro mojadas en el eluyente: el tiempo de desarrollo se acorta casi en un tercio y la elución es más uniforme y regular.
4. Trabajar entre 15 y 20 °C.

Otro método del BOE lo resume así: el desarrollo se hace «en cámara saturada con el eluyente».

**Por qué saturar.** Piensa en un baño tras una ducha caliente: el aire está tan cargado de vapor que el espejo no se seca. En la cubeta saturada, el aire ya lleva todo el vapor de eluyente que admite, el líquido que sube por la placa no se evapora por el camino y el frente avanza parejo. Sin tapa o sin esperar, el resultado no se repite de un día a otro.

### Paso a paso: sembrar, desarrollar y secar
**1. Sembrar** (*spotting*). Con una **micropipeta** o una **microjeringa** se deposita la muestra disuelta cerca del borde de abajo. Los métodos del BOE piden:

- A 1 o 2 cm del borde inferior, según el método.
- En gotas pequeñas: una mancha de no más de 1 a 2 mm de diámetro, porque una mancha grande sube grande y se mezcla con las vecinas.
- Microlitros: de 2 a 3 µL en un método; 10 µL de muestra y 4 µL de cada patrón en otro.
- Los patrones a la derecha y a la izquierda de la muestra, a 10-15 mm unos de otros, y unos 10 mm libres en cada borde.

**2. Desarrollar** (*development*). Se mete la placa en la cubeta cuidando que las manchas queden **por encima** del líquido; un método pide que el líquido quede 5 mm por debajo. Si se moja, se disuelve en el baño. Se para cuando el **frente del disolvente** (*solvent front*) llega a unos 15 cm del origen, a 1 cm del borde de arriba o a dos tercios de la placa, según el método. En un método del BOE, 15 cm llevan de hora y media a dos horas.

**3. Secar.** Se saca la placa, se deja evaporar el eluyente al aire y, si el método lo pide, se repite el desarrollo dos o tres veces para separar manchas difíciles.

### El Rf: cuánto ha subido cada mancha
El manual de la FDA incluye entre los términos básicos el **origen** (*origin*), el **frente del disolvente** y el **valor Rf** (*Rf value*, factor de retardo). El Rf es un cociente entre dos distancias, medidas desde el origen:

> Rf = distancia del origen al centro de la mancha / distancia del origen al frente del disolvente

Como la mancha nunca adelanta al frente, el Rf va de 0 (no se ha movido) a 1 (ha viajado con el frente). Un Rf es a la capa fina lo que el tiempo de retención es al HPLC.

**Ejercicio resuelto 1. Las tablas del BOE.** El método oficial de antioxidantes da estos Rf «a título de orientación», con el frente a 15 cm del origen: NDHG 0,10; galato de propilo (GP) 0,14; galato de octilo (GO) 0,28; galato de dodecilo (GD) 0,35; BHA 0,75; BHT 0,98.

1. ¿A qué altura queda el BHA? Distancia = Rf × frente = 0,75 × 15,0 = **11,25 cm**.
2. Una mancha de la muestra sale a 11,2 cm. Rf = 11,2 / 15,0 = **0,75**: coincide con el BHA, y se confirma mirando el patrón de BHA de la misma placa.
3. NDHG y GP: 0,10 × 15,0 = 1,50 cm y 0,14 × 15,0 = 2,10 cm. Solo **0,6 cm** de separación con manchas de 1 a 2 mm que además se ensanchan al subir: por eso el método propone la capa de 0,40 mm para ese par.

**Ejercicio resuelto 2. El Rf es del sistema, no de la sustancia.** El método oficial de conservadores en carne da los Rf con sus dos eluyentes. Frente a 12,0 cm (valor de ejemplo):

| Sustancia | Rf eluyente 1 | Altura | Rf eluyente 2 | Altura |
|---|---|---|---|---|
| Éster etílico del ácido p-hidroxibenzoico | 0,21 | 2,52 cm | 0,56 | 6,72 cm |
| Ácido salicílico | 0,46 | 5,52 cm | 0,25 | 3,00 cm |

Con el eluyente 1 el ácido salicílico queda por encima del éster; con el 2, por debajo. Moraleja: un Rf solo vale con la placa, el eluyente, la saturación y la temperatura del método. El propio método lo resuelve sembrando los patrones en la misma placa, «lo cual nos evita medir los Rf».

### Revelar: ver lo que no se ve
Si las sustancias no tienen color, la placa desarrollada parece vacía. Según el manual de la FDA, que cita el capítulo 621 de la farmacopea estadounidense, las manchas se localizan:

1. **A simple vista**, con luz blanca o bajo **luz ultravioleta** de onda corta (254 nm) o larga (360 nm).
2. **Tras tratar la placa con reactivos** que las hacen visibles.

**La placa con indicador fluorescente.** El polvo lleva un aditivo que brilla bajo la lámpara de 254 nm. Una sustancia que absorbe esa luz no deja que llegue al aditivo: su mancha se ve oscura sobre el fondo que brilla. El manual de la FDA lo llama **apagamiento de la fluorescencia** (*fluorescence quenching*). Otras sustancias brillan por sí mismas: el método de conservadores eligió el ácido salicílico como referencia porque da fluorescencia azul bajo ultravioleta. Las manchas se marcan a lápiz mientras la lámpara está encendida, como pide el método europeo de esteroles: al apagarla, desaparecen.

**Los reactivos de revelado** (*visualization reagents*) se pulverizan sobre la placa seca con un **pulverizador** (*sprayer*). Ejemplos de los métodos oficiales leídos:

| Reactivo | Cómo se usa | Qué se ve |
|---|---|---|
| Ácido sulfúrico al 50 % | Pulverizar y quemar en placa calefactora a unos 300 °C | Manchas quemadas de triglicéridos y ésteres |
| 2,7-diclorofluoresceína | Pulverizar y mirar con ultravioleta | La banda de esteroles, comparada con la de referencia |
| Dicloroquinona clorimida al 1 % en etanol | Pulverizar y estufa a 100 °C de 10 a 15 min; vapor de amoníaco para intensificar | Manchas coloreadas de antioxidantes |
| Dicromato potásico y ácido tiobarbitúrico | Pulverizar y calentar a 80 °C de 5 a 10 min | Ácido sórbico rojo sobre fondo ocre |

Unos reactivos revelan muchas sustancias, como el sulfúrico; otros solo tiñen una familia, como los de «Identificar sustancias por sus reacciones a fondo».

### De ver a medir: el ensayo límite
El manual de la FDA dice que la capa fina es un método **cualitativo**, y explica cómo se estira:

- **Semicuantitativo** (*semi-quantitative*): comparando a ojo el tamaño y la intensidad de las manchas.
- **Cuantitativo**: midiendo las manchas con un **densitómetro** (*densitometry*), por fluorescencia o por apagamiento de fluorescencia; o rascando la mancha, sacando la sustancia con un disolvente y midiéndola con un espectrofotómetro.

Añade que la mayoría de las monografías de la farmacopea estadounidense que usan la capa fina para la **pureza cromatográfica** preparan una **disolución de referencia** de concentración conocida y baja. Si aparece una mancha secundaria con el mismo Rf y una intensidad parecida a la de una referencia de unos 2 µg, se puede informar «no más de 2 µg».

**Ejercicio resuelto 3. Un ensayo límite** (valores de ejemplo). Muestra disuelta a 20 mg/mL; se siembran 10 µL. Para la referencia, 0,5 mL de esa disolución se llevan a 100 mL, y se siembran otros 10 µL.

1. Muestra en la placa: 20 mg/mL × 10 µL = 200 µg (mg/mL por µL da µg).
2. Referencia: 20 × 0,5 / 100 = 0,1 mg/mL; en la placa, 0,1 × 10 = **1 µg**.
3. 1 µg frente a 200 µg: 1 / 200 × 100 = **0,5 %**.
4. Lectura: si ninguna mancha secundaria de la muestra es más intensa que la de la referencia, ninguna impureza pasa, a ojo, del 0,5 %.

El manual de la FDA propone sembrar la misma disolución de 1 a 500 µL y buscar la mancha más pequeña que se ve: por debajo, «no se ve» no quiere decir «no hay».

**Separar para analizar.** En el método de esteroles y en otro del BOE de grasas se raspa la banda que interesa, se extrae del polvo y se analiza por cromatografía de gases.

### Identificación, impurezas y limpieza
**Identificación de farmacopea.** En los ejercicios de formación de la FDA, el paracetamol de la farmacopea estadounidense se identifica con tres ensayos: infrarrojo, ultravioleta y capa fina (capítulo 201); y la solución oral de paracetamol, con HPLC y capa fina. Igual que con el tiempo de retención, un Rf solo no basta como identidad específica: ICH Q6A pide ensayos que distingan compuestos parecidos (lo tienes en «Identificar sustancias por sus reacciones a fondo»). La guía de la EMA sobre especificaciones de plantas medicinales acepta una combinación, por ejemplo HPLC y capa fina con densitómetro.

**Impurezas.** La guía ICH Q3A dice que técnicas de menor precisión, «por ejemplo, la cromatografía en capa fina», pueden ser aceptables si se justifican y se validan. Su sitio natural son los ensayos límite; las impurezas con cifra las has visto medir por HPLC en «HPLC a fondo».

**Limpieza.** La guía de la FDA sobre validación de limpieza (1993) cuenta el caso de una planta de principios activos que fabricaba esteroides potentes y otros productos en los mismos equipos. Solo buscaba restos del producto anterior, pero sus propias placas del agua de aclarado mostraban subproductos y productos de degradación. La FDA concluye que a veces hace falta un cribado por capa fina además del análisis químico. La guía de validación de la OMS (informe técnico 1019, anexo 3) pide lo mismo «cuando sea necesario» y cita la capa fina «de alta presión» (así la nombra) entre los métodos sensibles y específicos.

### HPTLC
La **capa fina de alto rendimiento** (*high-performance thin-layer chromatography*, HPTLC) tiene sus propias placas y se trabaja con equipos que sustituyen la mano y el ojo. La lista de equipos de la OMS para un laboratorio de control de calidad (informe técnico 957, anexo 1) da la idea: el laboratorio básico tiene equipo de capa fina, un aplicador de manchas, seis cubetas, pulverizadores y una lámpara ultravioleta; el mediano añade un **aplicador múltiple** (*multispotter*) y un **escáner** de placas (*TLC scanner*), el densitómetro que convierte cada mancha en un pico con área. Las cifras de partícula y de placa de la HPTLC están en la Farmacopea Europea, de pago: no se dan aquí.

### Capa fina en planta: el control de fin de reacción
El cuadro de la FDA la compara con el HPLC: fácil de usar, sin automatización habitual y con un equipo de menos de 500 dólares, frente a más de 20000. Por eso aparece en planta piloto: para contestar «¿queda material de partida?» sin hacer cola en el laboratorio.

ICH Q7 encaja con ese uso:

- En las primeras etapas pueden bastar controles menos exigentes; en el aislamiento y la purificación, más (8.31).
- Los puede hacer **personal de producción cualificado**, y todos los ensayos y resultados se documentan en la hoja de producción (8.33).
- Cuando una reacción se lleva hasta un objetivo, su final lo decide el análisis en proceso, no el reloj (8.20).
- Para lotes de ensayo clínico, los métodos pueden no estar validados aún, pero deben ser científicamente sólidos (19.80).

**Ejercicio resuelto 4. Leer la placa de un control** (valores de ejemplo). Frente a 8,0 cm. El patrón de material de partida sube a 5,2 cm y el producto a 2,8 cm.

1. Rf del material de partida: 5,2 / 8,0 = **0,65**. Rf del producto: 2,8 / 8,0 = **0,35**.
2. Separación: 5,2 − 2,8 = 2,4 cm: se distinguen bien.
3. La muestra del reactor se siembra a 10 mg/mL y una referencia de material de partida al 1 % de esa concentración (0,1 mg/mL), 5 µL de cada una: 50 µg frente a 0,5 µg.
4. Si en el carril de la muestra la mancha a Rf 0,65 es más débil que la referencia, queda menos de un 1 % aproximado: la reacción ha terminado según ese criterio.

### Los datos de una placa
La guía de integridad de datos de la OMS (informe técnico 1033, anexo 4) incluye las **placas de capa fina** junto a las fotografías y las imágenes, y pide una justificación documentada del método elegido. Cómo se conserva la evidencia lo fija tu procedimiento; lo que no vale es anotar «cumple» sin que nadie pueda comprobarlo. Más en «ALCOA+ a fondo: datos en los que se puede confiar».

### Seguridad
- **Hexano** (ficha ICSC 0279). Altamente inflamable; punto de inflamación de −22 °C; su vapor pesa más que el aire y se extiende a ras del suelo. Con exposiciones repetidas daña los nervios (polineuropatía). Valor límite ambiental de exposición diaria (VLA-ED) de 20 ppm, según la ficha (INSHT 2014). Su **temperatura de autoignición es de 225 °C**: una placa con restos de hexano sobre una placa calefactora a 300 °C puede arder sin chispa. Los métodos pulverizan y queman la placa ya seca.
- **Acetato de etilo** (ICSC 0367). Muy inflamable, punto de inflamación de −4 °C; VLA-ED de 200 ppm y VLA-EC (corta duración) de 400 ppm (INSST 2019, según la ficha).
- **Ácido sulfúrico** (ICSC 0362). Muy corrosivo para ojos, piel y vías respiratorias. La ficha pide evitar la formación de nieblas, y las nieblas de ácidos inorgánicos fuertes están clasificadas como cancerígenas: pulverizar es justo formar niebla, así que se hace con extracción localizada, gafas, guantes y pantalla. Para diluirlo, el ácido sobre el agua, despacio; nunca agua sobre el ácido.
- **Lámpara ultravioleta y placas.** La NTP 433 del INSST pide, en espectroscopia atómica, no mirar directamente las lámparas; con la lámpara ultravioleta de la capa fina vale la misma prudencia. Y, en la capa fina, avisa del riesgo de cortes con los bordes de las placas.
- Los restos de eluyente van al bidón de disolventes, nunca al desagüe.

En planta y en el laboratorio manda siempre el procedimiento vigente (SOP): placa, eluyente, revelado, criterio y registro son los de tu método.
`,
  plant: `
Planta piloto, turno de mañana. En el reactor piloto RP-110 (equipo ficticio) se fabrica el primer lote del intermedio TZ-15 (producto ficticio) a partir del material de partida MP-3. La hoja manda mantener a 60 °C y, a las 3 h, hacer un control en proceso por capa fina en el laboratorio de la planta piloto: «MP-3 no detectable o menos intenso que la referencia al 1 %».

La técnica, con la formación del procedimiento, prepara la cubeta con el eluyente del método, coloca papel de filtro en las paredes y la deja tapada 30 min. Mientras, tú tomas la muestra a las 09:00, la rotulas y la entregas.

Siembra tres carriles: patrón de MP-3, muestra del reactor y referencia al 1 %. Desarrolla hasta 8 cm, seca la placa y la mira con la lámpara de 254 nm. En el carril de la muestra hay una mancha a Rf 0,65, a la altura del patrón de MP-3, y se ve más intensa que la referencia: no cumple. Lo anotáis con la hora, el número de placa y una segunda persona que confirma la lectura.

La hoja lo prevé: una hora más a 60 °C y nueva muestra. A las 10:05 se repite la placa. La mancha a Rf 0,65 ya es más débil que la referencia. Cumple. Se anota, firma la segunda persona y el supervisor autoriza el enfriamiento. Ningún reloj decidió el final: lo decidió la placa.
`,
  batchRecord: `
En la hoja de producción (*batch record*) de una etapa con control en proceso por capa fina verás:

- **Instrucción**: momento de la toma (p. ej. a las 3 h a 60 °C), punto de muestreo, cantidad y quién hace el ensayo (laboratorio o personal de producción cualificado).
- **Datos del ensayo**: referencia del método, lote de placas, eluyente y su fecha de preparación, tiempo de saturación de la cubeta.
- **Carriles sembrados**: patrón, muestra y referencia, con concentraciones y volúmenes.
- **Lectura**: revelado usado (ultravioleta 254 nm, reactivo), Rf de las manchas de interés y comparación con la referencia, en palabras concretas: «mancha de MP-3 menos intensa que la referencia al 1 %».
- **Resultado y decisión**: conforme o no conforme, prolongar la reacción y repetir, o avisar. Cada repetición con su hora y su placa.
- **Firmas**: quien lee y quien verifica la lectura, y la referencia de la evidencia guardada según el procedimiento.
`,
  terms: [
    { es: "Cromatografía en capa fina", en: "Thin-layer chromatography (TLC)", def: "Cromatografía plana en la que el eluyente sube por una capa fina de adsorbente extendida sobre una placa y separa las manchas de una muestra." },
    { es: "Adsorbente", en: "Adsorbent", def: "Polvo muy fino, como el gel de sílice o la celulosa, que forma la fase estacionaria de la placa y retiene las sustancias en su superficie." },
    { es: "Gel de sílice", en: "Silica gel", def: "Adsorbente polar más usado en capa fina; retiene más las sustancias polares." },
    { es: "Eluyente", en: "Eluent", def: "Mezcla de disolventes que hace de fase móvil y sube por la placa arrastrando las sustancias." },
    { es: "Cubeta de desarrollo", en: "Developing chamber", def: "Recipiente con tapa donde se desarrolla la placa; se satura de vapor de eluyente antes de usarla." },
    { es: "Saturación de la cubeta", en: "Chamber saturation", def: "Equilibrio entre el eluyente líquido y su vapor dentro de la cubeta cerrada, que hace el desarrollo uniforme y repetible." },
    { es: "Origen", en: "Origin", def: "Línea o punto donde se siembra la muestra, por encima del nivel del eluyente." },
    { es: "Frente del disolvente", en: "Solvent front", def: "Altura máxima a la que llega el eluyente en la placa." },
    { es: "Valor Rf", en: "Rf value (retardation factor)", def: "Distancia del origen al centro de la mancha dividida entre la distancia del origen al frente; va de 0 a 1." },
    { es: "Indicador fluorescente", en: "Fluorescent indicator", def: "Aditivo de la placa que brilla con ultravioleta de 254 nm; las sustancias que absorben esa luz se ven como manchas oscuras." },
    { es: "Apagamiento de la fluorescencia", en: "Fluorescence quenching", def: "Pérdida del brillo del indicador allí donde una mancha absorbe la luz ultravioleta." },
    { es: "Reactivo de revelado", en: "Visualization reagent", def: "Disolución que se pulveriza sobre la placa para que las manchas incoloras se vean." },
    { es: "Densitometría", en: "Densitometry", def: "Medida instrumental de la intensidad de las manchas de una placa para cuantificar." },
    { es: "Capa fina de alto rendimiento", en: "High-performance thin-layer chromatography (HPTLC)", def: "Variante de la capa fina con placas propias, aplicación automática de las manchas y lectura con escáner." },
  ],
  quiz: [
    {
      kind: "number",
      q: "En una placa, el frente del disolvente ha subido 12,5 cm desde el origen y el centro de una mancha está a 5,0 cm del origen. ¿Cuál es su Rf?",
      answer: 0.4,
      tolerance: 0.02,
      unit: "",
      explain: "Rf = distancia de la mancha / distancia del frente = 5,0 / 12,5 = 0,4.",
    },
    {
      kind: "number",
      q: "Según el método oficial del BOE, el galato de octilo tiene un Rf de 0,28 y el frente se lleva a 15 cm del origen. ¿A cuántos centímetros del origen debe aparecer su mancha?",
      answer: 4.2,
      tolerance: 0.02,
      unit: "cm",
      explain: "Distancia = Rf × frente = 0,28 × 15 = 4,2 cm.",
    },
    {
      kind: "number",
      q: "Para un ensayo límite se siembran 10 µL de una muestra a 25 mg/mL y 10 µL de una referencia a 0,125 mg/mL. ¿A qué porcentaje de la muestra equivale la mancha de referencia?",
      answer: 0.5,
      tolerance: 0.02,
      unit: "%",
      explain: "Con el mismo volumen sembrado basta comparar concentraciones: 0,125 / 25 × 100 = 0,5 %.",
    },
    {
      kind: "number",
      q: "Un patrón está al 0,1 % (m/v), es decir, 0,1 g en 100 mL. Se siembran 4 µL. ¿Cuántos microgramos hay en la mancha?",
      answer: 4,
      tolerance: 0.02,
      unit: "µg",
      explain: "0,1 g / 100 mL = 1 mg/mL = 1 µg/µL; 1 × 4 = 4 µg.",
    },
    {
      kind: "choice",
      q: "Una compañera mete la placa en la cubeta recién llenada de eluyente y sin tapa, porque «hay prisa». ¿Qué problema hay?",
      options: [
        "Ninguno, la tapa solo sirve para que no entre polvo",
        "La cubeta no está saturada y el desarrollo no será uniforme",
        "El eluyente se vuelve más polar y todo sube con el frente",
        "La placa se activa demasiado y retiene todas las manchas",
      ],
      answer: 1,
      explain: "El método europeo pide cubeta tapada al menos media hora para el equilibrio líquido-vapor; sin saturación el frente no avanza parejo y el Rf no se repite.",
    },
    {
      kind: "choice",
      q: "Al meter la placa, el nivel del eluyente queda por encima de las manchas sembradas. ¿Qué pasará?",
      options: [
        "Las manchas subirán más deprisa y se separarán mejor",
        "Nada, porque el eluyente sube igual por toda la placa",
        "Las manchas se revelarán solas sin luz ultravioleta",
        "La muestra se disolverá en el baño en lugar de subir",
      ],
      answer: 3,
      explain: "Los métodos del BOE piden que las manchas queden por encima del líquido, unos 5 mm en uno de ellos; si se sumergen, la muestra pasa al baño.",
    },
    {
      kind: "choice",
      q: "En el método de conservadores del BOE, el ácido salicílico sube más que el éster etílico con el eluyente 1 y menos con el eluyente 2. ¿Qué enseña?",
      options: [
        "Que el Rf depende del sistema y hay que sembrar patrones",
        "Que uno de los dos eluyentes estaba mal preparado",
        "Que el ácido salicílico se descompone en la placa",
        "Que el Rf de una sustancia es fijo en cualquier eluyente",
      ],
      answer: 0,
      explain: "El orden se invierte al cambiar de eluyente: el Rf solo vale en las condiciones del método, y por eso se comparan las manchas con patrones de la misma placa.",
    },
    {
      kind: "choice",
      q: "Una placa con indicador fluorescente se mira con la lámpara de 254 nm y aparece una mancha oscura. ¿Qué significa?",
      options: [
        "Que la mancha es de una sustancia que no absorbe ultravioleta",
        "Que la placa tiene humedad y hay que volver a activarla",
        "Que la sustancia absorbe esa luz y apaga el brillo del fondo",
        "Que el eluyente no ha llegado a esa zona de la placa",
      ],
      answer: 2,
      explain: "Es el apagamiento de la fluorescencia que cita el manual de la FDA: la sustancia absorbe la luz de 254 nm y el indicador de debajo no brilla.",
    },
    {
      kind: "choice",
      q: "Tras desarrollar con un eluyente de hexano, se quiere revelar con sulfúrico y quemar la placa a unos 300 °C. ¿Qué precaución es clave?",
      options: [
        "Calentar primero y pulverizar después para ganar tiempo",
        "Secar bien la placa, porque el hexano se autoinflama a 225 °C",
        "Usar más ácido para que el revelado sea más rápido",
        "Hacerlo fuera de la vitrina para ver mejor las manchas",
      ],
      answer: 1,
      explain: "La ficha ICSC del hexano da 225 °C de autoignición, por debajo de los 300 °C de la placa calefactora; además el sulfúrico pulverizado forma niebla y va con extracción.",
    },
    {
      kind: "choice",
      q: "Haces tú el control en proceso por capa fina, como permite tu hoja. La mancha de material de partida parece «más o menos» igual que la referencia. ¿Qué haces?",
      options: [
        "Anotar «cumple», porque la diferencia a ojo es pequeña",
        "Repetir la placa en silencio hasta que salga más débil",
        "Tirar la placa y anotar el resultado del control anterior",
        "Anotar lo que ves, que otra persona verifique y seguir la hoja",
      ],
      answer: 3,
      explain: "ICH Q7 pide documentar todos los ensayos y resultados en la hoja de producción; una lectura dudosa se describe tal cual, la verifica una segunda persona y se actúa como diga el procedimiento.",
    },
  ],
};
