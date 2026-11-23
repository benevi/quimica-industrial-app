import type { Lesson } from "./types";

export const formulacionInorganicaAFondo: Lesson = {
  slug: "formulacion-inorganica-a-fondo",
  level: 2,
  order: 13.2,
  title: "Nombrar y escribir compuestos inorgánicos a fondo: de la etiqueta a la fórmula",
  titleEn: "Inorganic nomenclature in depth",
  minutes: 38,
  summary:
    "Cómo se pasa del nombre de una etiqueta a la fórmula y de la fórmula al nombre: iones de planta y laboratorio, prefijos multiplicadores, números de oxidación entre paréntesis, óxidos, hidruros, hidróxidos, oxoácidos, sales e hidrogenosales, hidratos y los nombres comerciales que engañan, como lejía, lejía de sosa o bicarbonato.",
  body: `
En «Átomos y tabla periódica a fondo: de qué está hecho todo» viste qué es un ion y cómo se cuentan los átomos de una fórmula con paréntesis. En «Oxidación y reducción a fondo: hidrogenaciones, oxidantes y corrosión» aprendiste a calcular números de oxidación con cinco reglas (el oxígeno suele valer −2, el hidrógeno +1 y todo suma la carga total). Aquí juntas las dos cosas para hacer lo que haces cada día delante de un saco o un bidón: leer un nombre y saber qué fórmula hay dentro, o al revés.

### Parte 1. Por qué hace falta un idioma común
Un mismo producto puede aparecer con tres nombres. El hidróxido de sodio, NaOH, figura en su ficha internacional de seguridad química (*International Chemical Safety Card*, ICSC 0360, de la Organización Internacional del Trabajo, traducida por el Instituto Nacional de Seguridad y Salud en el Trabajo, INSST) también como «sosa cáustica», «hidrato de sodio» y «lejía de sosa». Si en la hoja de producción (*batch record*) pone un nombre y en la etiqueta otro, tienes que saber si son la misma sustancia o no.

Para eso existe la **nomenclatura** (*nomenclature*): reglas para que cada nombre corresponda a una sola fórmula. Las reglas internacionales las fija la Unión Internacional de Química Pura y Aplicada, la IUPAC (*International Union of Pure and Applied Chemistry*), y el currículo oficial de Física y Química de 1.º de Bachillerato (Real Decreto 243/2022) pide nombrar y formular sustancias simples, iones y compuestos inorgánicos con ellas. Esta lección explica las reglas tal como se usan en los nombres en español de las fichas ICSC; el texto completo de la IUPAC no se ha podido consultar, así que solo se cuenta lo que esas fichas confirman.

**Inorgánico** (*inorganic*) quiere decir, para esta lección, los compuestos sin esqueleto de carbono: sales, ácidos minerales, bases, óxidos. Las moléculas orgánicas tienen su propia lección: «Química orgánica a fondo: leer una fórmula y entender su nombre».

### Parte 2. La regla de oro: positivo delante en la fórmula, negativo delante en el nombre
Casi todo compuesto inorgánico se piensa como una parte positiva (catión) y una negativa (anión) que se atraen. Dos normas de escritura:

- **En la fórmula**, primero va la parte positiva: **Na**Cl, **Ca**O, **K**MnO₄.
- **En el nombre en español**, primero va la parte negativa, y después «de» y la positiva: cloruro **de sodio**, óxido **de calcio**, permanganato **de potasio**.

**Las cargas suman cero.** Un compuesto no tiene carga. Por eso los subíndices son los números que igualan las cargas positivas y negativas. El truco del **cruce de cargas** (*criss-cross*): la carga de uno pasa a ser el subíndice del otro, y luego se simplifica si se puede.

| Catión | Anión | Cruce | Fórmula | Comprobación |
|---|---|---|---|---|
| Ca²⁺ | Cl⁻ | Ca₁Cl₂ | CaCl₂ | +2 − 2 = 0 |
| Fe³⁺ | O²⁻ | Fe₂O₃ | Fe₂O₃ | 2 × (+3) + 3 × (−2) = 0 |
| Ca²⁺ | O²⁻ | Ca₂O₂ | CaO (se simplifica) | +2 − 2 = 0 |
| Na⁺ | SO₄²⁻ | Na₂(SO₄)₁ | Na₂SO₄ | 2 × (+1) − 2 = 0 |

Si el ion que se repite tiene varios átomos, va entre paréntesis: Ca(OH)₂, no CaOH₂.

### Parte 3. Los iones que más vas a ver
| Catión | Nombre | Anión | Nombre |
|---|---|---|---|
| H⁺ | Hidrógeno (protón) | Cl⁻ | Cloruro |
| Na⁺ | Sodio | Br⁻, I⁻, F⁻ | Bromuro, yoduro, fluoruro |
| K⁺ | Potasio | O²⁻ | Óxido |
| NH₄⁺ | Amonio | O₂²⁻ | Peróxido |
| Ca²⁺, Mg²⁺ | Calcio, magnesio | S²⁻ | Sulfuro |
| Cu²⁺ | Cobre(II) o cúprico | H⁻ | Hidruro |
| Fe²⁺ | Hierro(II) o ferroso | OH⁻ | Hidróxido |
| Fe³⁺ | Hierro(III) o férrico | CO₃²⁻, HCO₃⁻ | Carbonato, hidrogenocarbonato |

Los aniones de un solo átomo terminan en **-uro** (cloruro, sulfuro, hidruro), salvo el óxido. Los que llevan oxígeno se ven en la parte 7.

### Parte 4. Tres maneras de decir «cuántos»
Algunos metales, como el hierro o el cobre, pueden formar iones con distinta carga. Entonces el nombre tiene que decir cuál. Las fichas ICSC muestran tres formas, que conviven. Mira la del cloruro de hierro, FeCl₃ (ICSC 1499): da como nombres «cloruro férrico», «tricloruro de hierro» y «cloruro de hierro(III)».

**1. Prefijos multiplicadores** (*multiplicative prefixes*). Dicen cuántos átomos de cada tipo hay.

| Número | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|---|
| Prefijo | mono | di | tri | tetra | penta | hexa | hepta |

Ejemplos de las fichas: dióxido de carbono, CO₂ (ICSC 0021); trióxido de azufre, SO₃ (ICSC 1202); sulfuro de dihidrógeno, H₂S (ICSC 0165); sulfato de disodio, Na₂SO₄ (ICSC 0952). El «mono» casi siempre se omite; donde se usa, se contrae: la ficha ICSC 0023 se titula «monóxido de carbono», no «monoóxido».

**2. Número de oxidación en romanos** (*oxidation number*). Entre paréntesis, pegado al nombre del elemento y sin espacio: hierro(III), cobre(II). Es el número de oxidación que ya sabes calcular. La ficha del dicromato de potasio, K₂Cr₂O₇ (ICSC 1371), lo usa dentro del anión: «dicromato(VI) de dipotasio».

**3. Carga en cifras arábigas con su signo**: cobre(2+). La ficha ICSC 0751 del sulfato de cobre usa «sal de cobre(2+) del ácido sulfúrico».

**Los nombres antiguos en -oso e -ico.** Para metales con dos cargas, el nombre tradicional usa **-oso** para la menor e **-ico** para la mayor: férrico es hierro(III); cúprico, cobre(II). Siguen en etiquetas y fichas («cloruro férrico», «sulfato cúprico»), así que hay que reconocerlos.

**Cuándo no hace falta ningún número.** El sodio y el potasio solo forman iones +1; el calcio y el magnesio, +2. Por eso se dice «cloruro de sodio», nunca «cloruro de sodio(I)».

**Ejercicio resuelto 1. ¿Qué es FeCl₂ y en qué se diferencia de FeCl₃?**

1. El cloro como cloruro vale −1. En FeCl₂ hay dos: −2.
2. Para sumar cero, el hierro vale +2.
3. Nombre: cloruro de hierro(II), o dicloruro de hierro, o cloruro ferroso.
4. En FeCl₃ el hierro vale +3: cloruro de hierro(III), cloruro férrico.

Son dos sustancias distintas. En «Oxidación y reducción a fondo» viste que el ácido clorhídrico que ataca el acero forma justamente FeCl₂.

**Ejercicio resuelto 2. Escribe la fórmula del óxido de hierro(III).**

1. Hierro(III): Fe³⁺. Óxido: O²⁻.
2. Cruce: Fe₂O₃.
3. Comprobación: 2 × (+3) + 3 × (−2) = 6 − 6 = 0.

### Parte 5. Compuestos de dos elementos: óxidos, peróxidos, hidruros y sales binarias
**Óxidos** (*oxides*): un elemento con oxígeno a −2. Óxido de calcio, CaO, la «cal viva» de su ficha (ICSC 0409); dióxido de azufre, SO₂, que la ficha ICSC 0074 también llama «anhídrido sulfuroso»; monóxido de carbono, CO. Los nombres con «anhídrido» son antiguos: verás alguno en etiquetas viejas.

**Peróxidos** (*peroxides*): llevan el grupo O₂²⁻, dos oxígenos unidos, cada uno a −1. Peróxido de hidrógeno, H₂O₂, el «agua oxigenada» (ICSC 0164); peróxido de sodio, Na₂O₂, que su ficha (ICSC 1606) llama también «peróxido de disodio». Ojo: el subíndice 2 del oxígeno no se simplifica, porque el grupo O₂ es una pieza. Si simplificaras H₂O₂ a HO, perderías la sustancia.

**Hidruros** (*hydrides*): hidrógeno con otro elemento. Si el otro es un metal, el hidrógeno es H⁻ (hidruro), a −1. Un ejemplo es el tetrahidroborato de sodio, NaBH₄, que su ficha (ICSC 1670) llama también «borohidruro de sodio»: el anión es BH₄⁻. Con no metales, el nombre sistemático suena raro y se usa poco: la ficha del amoniaco, NH₃ (ICSC 0414), recoge como sinónimo «trihidruro de nitrógeno».

**Hidrácidos** (*hydracids*): el cloruro de hidrógeno, HCl, es un gas (ICSC 0163). Disuelto en agua es lo que en planta llamas **ácido clorhídrico**. Mismo HCl, distinto estado: por eso la etiqueta dice «ácido clorhídrico 35 %» y no «cloruro de hidrógeno».

**Sales binarias** (*binary salts*): un metal y un no metal. Cloruro de sodio, NaCl; cloruro de calcio, CaCl₂ (ICSC 1184); cloruro de hierro(III), FeCl₃.

### Parte 6. Hidróxidos: las bases de planta
Un **hidróxido** (*hydroxide*) es un catión metálico con iones OH⁻. Uno por cada carga positiva:

| Fórmula | Nombre | Nombre comercial (de su ficha ICSC) |
|---|---|---|
| NaOH | Hidróxido de sodio | Sosa cáustica, lejía de sosa (0360) |
| KOH | Hidróxido de potasio | Potasa cáustica, lejía de potasio (0357) |
| Ca(OH)₂ | Hidróxido de calcio, o dihidróxido de calcio | Cal apagada, cal hidratada (0408) |

**Cal viva y cal apagada no son lo mismo.** La cal viva es CaO, un óxido; la apagada, Ca(OH)₂, un hidróxido. Según su ficha, el óxido de calcio reacciona con el agua generando calor suficiente para inflamar materiales combustibles, y nunca se le echa agua encima. Confundirlas en un pedido no es un error de nombre: es un riesgo.

### Parte 7. Oxoácidos y oxoaniones: la familia del cloro
Un **oxoácido** (*oxoacid*) tiene hidrógeno, un elemento central y oxígeno: H₂SO₄, HNO₃, H₃PO₄. Si pierde sus hidrógenos como H⁺, queda un **oxoanión** (*oxoanion*): sulfato SO₄²⁻, nitrato NO₃⁻, fosfato PO₄³⁻. Cada H⁺ que se va deja una carga negativa.

El mismo elemento central puede llevar más o menos oxígeno. Los nombres tradicionales, que usan las fichas y las etiquetas, siguen un patrón. Mira el cloro, con cuatro oxoaniones, cada uno en una ficha ICSC como sal de sodio:

| Ácido | Anión | Nombre del anión | Sal de sodio (ficha) | Número de oxidación del Cl |
|---|---|---|---|---|
| HClO, ácido hipocloroso | ClO⁻ | Hipoclorito | NaClO (0482) | +1 |
| HClO₂, ácido cloroso | ClO₂⁻ | Clorito | NaClO₂ (1045) | +3 |
| HClO₃, ácido clórico | ClO₃⁻ | Clorato | NaClO₃ (1117) | +5 |
| HClO₄, ácido perclórico | ClO₄⁻ | Perclorato | Ácido en ficha 1006 | +7 |

Las fichas lo confirman: el clorito de sodio es la «sal de sodio del ácido cloroso» y el clorato, la «sal sódica del ácido clórico».

**El patrón, en una frase de clase:** el ácido terminado en **-oso** da un anión en **-ito**, y el terminado en **-ico** da uno en **-ato** («el oso toca el pito y el perico toca el silbato»). **Hipo-** quiere decir «aún menos oxígeno» y **per-**, «aún más».

**La misma lógica en otros elementos.** El cálculo del número de oxidación es el de siempre; aquí lo hago con el azufre del sulfito, SO₃²⁻: S + 3 × (−2) = −2, así que S = +4.

| Ácido | Anión | Número de oxidación del elemento central |
|---|---|---|
| H₂SO₄, sulfúrico | Sulfato, SO₄²⁻ | S +6 |
| H₂SO₃, sulfuroso | Sulfito, SO₃²⁻ | S +4 |
| HNO₃, nítrico | Nitrato, NO₃⁻ | N +5 |
| HNO₂, nitroso | Nitrito, NO₂⁻ | N +3 |
| H₂CO₃, carbónico | Carbonato, CO₃²⁻ | C +4 |
| H₃PO₄, fosfórico | Fosfato, PO₄³⁻ | P +5 |

La ficha del nitrito de sodio, NaNO₂ (ICSC 1120), lo llama «sal sódica del ácido nitroso»: -oso con -ito. Dos aniones con metal que verás como oxidantes: **permanganato**, MnO₄⁻ (Mn +7, «Oxidación y reducción a fondo»), y **dicromato**, Cr₂O₇²⁻ (Cr: 2 × Cr + 7 × (−2) = −2, Cr = +6, el «(VI)» del nombre de su ficha).

**Un nombre que rompe el patrón.** El tiosulfato de sodio, Na₂S₂O₃ (ICSC 1138), tiene como sinónimo antiguo «hiposulfito de sodio». No es un sulfito con menos oxígeno: es otra sustancia. Los nombres viejos no siempre siguen la regla; manda la fórmula.

**Ejercicio resuelto 3. Número de oxidación del cloro en el clorato de sodio, NaClO₃.**

1. Na vale +1; cada O, −2; la sustancia es neutra.
2. +1 + Cl + 3 × (−2) = 0.
3. Cl = 6 − 1 = **+5**. Coincide con la tabla: -ato del ácido -ico.

### Parte 8. Oxisales e hidrogenosales
Una **oxisal** (*oxosalt*) es un catión con un oxoanión: sulfato de sodio, Na₂SO₄; carbonato de potasio, K₂CO₃ (ICSC 1588, «carbonato de dipotasio»); nitrato de sodio, NaNO₃ (ICSC 0185, la «sal de Chile»); permanganato de potasio, KMnO₄ (ICSC 0672).

Si el ácido tenía varios hidrógenos y solo pierde una parte, el anión conserva hidrógeno: es una **hidrogenosal** (*hydrogen salt*, *acid salt*). El hidrógeno se nombra delante y pegado:

| Fórmula | Nombre sistemático | Nombre que verás en la etiqueta |
|---|---|---|
| NaHCO₃ | Hidrogenocarbonato de sodio | Bicarbonato de sodio (ICSC 1044) |
| NaHSO₃ | Hidrogenosulfito de sodio | Bisulfito de sodio, sulfito ácido de sodio (ICSC 1134) |
| NaH₂PO₄ | Dihidrogenofosfato de sodio | (sin ficha consultada) |

Los nombres de las dos primeras filas salen de sus fichas. El de la tercera se ha construido con la misma regla y no se ha comprobado en una ficha: tómalo como ejemplo de cómo funciona.

**Bicarbonato y carbonato no se cambian uno por otro.** Los dos neutralizan ácidos soltando dióxido de carbono (lo dice la ficha del bicarbonato), pero en cantidades distintas:

- Na₂CO₃ + 2 HCl da 2 NaCl + H₂O + CO₂ (un carbonato neutraliza dos HCl).
- NaHCO₃ + HCl da NaCl + H₂O + CO₂ (un bicarbonato neutraliza un HCl).

**Sales de amonio.** El catión NH₄⁺ se porta como un metal: cloruro de amonio, NH₄Cl (ICSC 1051); sulfato de amonio, (NH₄)₂SO₄.

**Hidratos.** Muchas sales cristalizan con agua dentro del cristal. La fórmula la añade tras un punto y el nombre con un prefijo: el sulfato de hierro(II) heptahidratado es FeSO₄·7H₂O (la base de datos del NIST, el instituto de metrología de Estados Unidos, lo registra como sal de hierro(2+) del ácido sulfúrico, heptahidrato, 1:1:7). La palabra **anhidro** (*anhydrous*) significa «sin agua»: varias fichas la llevan en el título, como la del carbonato de sodio. Para un principio activo, la misma idea se llama solvato o hidrato y se explica en «Polimorfismo, sales y solvatos a fondo: el mismo producto en distintas formas sólidas».

### Parte 9. Nombres comerciales que engañan
| En la etiqueta o en la conversación | Qué es | Fórmula | Fuente |
|---|---|---|---|
| Lejía | Hipoclorito de sodio en disolución | NaClO | ICSC 0482 |
| Lejía de sosa | Hidróxido de sodio | NaOH | ICSC 0360 |
| Ácido muriático | Ácido clorhídrico | HCl | NIST WebBook |
| Aceite de vitriolo | Ácido sulfúrico | H₂SO₄ | ICSC 0362 |
| Agua oxigenada | Peróxido de hidrógeno | H₂O₂ | ICSC 0164 |
| Ceniza de sosa | Carbonato de sodio | Na₂CO₃ | ICSC 1135 |
| Bicarbonato | Hidrogenocarbonato de sodio | NaHCO₃ | ICSC 1044 |
| Cal viva / cal apagada | Óxido / hidróxido de calcio | CaO / Ca(OH)₂ | ICSC 0409 y 0408 |

La trampa más peligrosa es la primera pareja: «lejía» y «lejía de sosa» comparten palabra pero son sustancias distintas. Y la lejía con un ácido desprende cloro, como explica «Ácidos, bases y pH a fondo: medir, ajustar y neutralizar sin riesgos». Ante la duda, no te fíes del nombre comercial: busca la fórmula y el número CAS de la etiqueta y compáralos con la hoja.

### Parte 10. De la fórmula a la masa molar
Saber la fórmula exacta importa porque de ella sale la **masa molar** (*molar mass*) con la que se calculan las cargas, como viste en «El mol a fondo: contar moléculas pesando, paso a paso». Uso valores redondeados: H 1; C 12; N 14; O 16; Na 23; S 32; Cl 35,5; K 39,1; Mn 54,9; Fe 55,8.

**Ejemplo 1. Permanganato de potasio, KMnO₄.** 39,1 + 54,9 + 4 × 16 = 39,1 + 54,9 + 64 = **158 g/mol**. Su ficha da 158.

**Ejemplo 2. Hipoclorito de sodio, NaClO.** 23 + 35,5 + 16 = **74,5 g/mol**. La ficha da 74,4 (con masas atómicas sin redondear).

**Ejemplo 3. Carbonato frente a bicarbonato para neutralizar 10 mol de HCl** (valor de ejemplo).

- Carbonato, Na₂CO₃: 2 × 23 + 12 + 3 × 16 = **106 g/mol**. Hacen falta 10 / 2 = 5 mol: 5 × 106 = **530 g**.
- Bicarbonato, NaHCO₃: 23 + 1 + 12 + 48 = **84 g/mol**. Hacen falta 10 mol: 10 × 84 = **840 g**.

Si la hoja pide carbonato y cargas la misma masa de bicarbonato, neutralizas bastante menos ácido de lo previsto: 530 g de bicarbonato son 530 / 84 = 6,3 mol y neutralizan 6,3 mol de HCl, no 10.

**Ejemplo 4. Anhidro frente a hidratado.** FeSO₄: 55,8 + 32 + 64 = 151,8 g/mol. FeSO₄·7H₂O: 151,8 + 7 × 18 = **277,8 g/mol**. Si una receta está hecha con la sal anhidra y se carga la misma masa de la hidratada, entra un 45 % menos de sulfato de hierro (151,8 / 277,8 = 0,55).

### Parte 11. Cómo comprobarlo en planta, en cinco pasos
1. Lee el nombre de la hoja y escribe la fórmula que esperas (cargas que suman cero).
2. Compara con la fórmula y el número CAS de la etiqueta: el CAS identifica la sustancia aunque cambie el nombre.
3. Fíjate en las palabras pequeñas: anhidro o hidratado, hidrogeno- o bi-, hipo- o per-, (II) o (III), «de sosa».
4. Comprueba la concentración si es una disolución: «ácido clorhídrico 35 %» no es HCl puro.
5. Si algo no cuadra, para y avisa antes de cargar. Una diferencia de nombre puede ser una sustancia distinta.

En planta manda siempre el procedimiento vigente (SOP): los nombres, códigos, fórmulas y cantidades de tus materiales son los de tu hoja de producción y tus etiquetas aprobadas.
`,
  plant: `
Lote de ejemplo del intermedio ficticio INT-58, en una planta ficticia. Marta prepara las cargas del reactor RX-412 con la lista de materiales de la hoja. El paso 6 pide «carbonato de sodio anhidro, Na₂CO₃, 18,0 kg» (valor de ejemplo) para neutralizar el ácido que queda tras la reacción.

En el palé del almacén encuentra sacos con la etiqueta del producto ficticio BASIX-H. Lee el nombre químico: «hidrogenocarbonato de sodio, NaHCO₃». La palabra «hidrogeno» le salta a la vista. Escribe al margen las dos masas molares, 106 y 84 g/mol, y ve que no es la misma sustancia ni neutraliza lo mismo por kilo. No carga. Avisa al jefe de turno, que confirma con almacén que el palé está mal asignado y trae el material correcto, con su CAS coincidente con la hoja. Marta anota el incidente.

Tras filtrar en el filtro FN-416 y centrifugar en la CF-415, la hoja indica lavar la línea de aguas madres con «disolución de hidróxido de sodio al 4 %». Un compañero trae un bidón rotulado a mano como «lejía». Marta pregunta: ¿lejía o lejía de sosa? Es hipoclorito. Lo devuelve: la hoja pide NaOH, y además en esa línea quedan restos ácidos que con hipoclorito desprenderían cloro.

Al final del lote, en el secadero SD-418, revisa que la etiqueta del producto lleve el código interno y no un nombre libre. Todo el proceso, los equipos, los productos y las cantidades son ficticios.
`,
  batchRecord: `
- **Lista de materiales**: nombre químico, fórmula, código interno y número CAS de cada material. Antes de cargar, comprueba que los cuatro coinciden con la etiqueta del envase.
- **Forma del material**: anhidro o hidratado, sólido o disolución, y la concentración (por ejemplo, ácido clorhídrico 35 % o hidróxido de sodio 50 %). Una forma distinta cambia la masa que hay que cargar.
- **Cantidad cargada**: masa o volumen real con su unidad, balanza o caudalímetro usado, firma y, si la hoja lo pide, verificación por segunda persona.
- **Nombres comerciales**: si la etiqueta usa un nombre comercial o antiguo (sosa, potasa, bicarbonato, lejía), anota también el químico que figura en la hoja; no traduzcas tú por tu cuenta.
- **Incompatibilidades**: las advertencias de la hoja y de la ficha de seguridad (por ejemplo, no mezclar hipoclorito con ácidos, no echar agua sobre la cal viva).
- **Anomalías**: cualquier diferencia de nombre, fórmula, CAS o forma se anota y se comunica antes de cargar, según el procedimiento de desviaciones.
`,
  terms: [
    { es: "Nomenclatura", en: "Nomenclature", def: "Conjunto de reglas para dar a cada sustancia un nombre que corresponda a una sola fórmula." },
    { es: "Catión", en: "Cation", def: "Ion con carga positiva; va delante en la fórmula y detrás en el nombre español (cloruro de sodio)." },
    { es: "Anión", en: "Anion", def: "Ion con carga negativa; va detrás en la fórmula y delante en el nombre español." },
    { es: "Prefijo multiplicador", en: "Multiplicative prefix", def: "Mono, di, tri, tetra...: indica cuántos átomos de cada elemento hay (trióxido de azufre, SO₃)." },
    { es: "Número de oxidación", en: "Oxidation number", def: "Carga ficticia de un átomo en un compuesto; en el nombre va en romanos entre paréntesis: hierro(III)." },
    { es: "Óxido", en: "Oxide", def: "Compuesto de un elemento con oxígeno a −2, como CaO o CO₂." },
    { es: "Peróxido", en: "Peroxide", def: "Compuesto con el grupo O₂²⁻, dos oxígenos unidos a −1 cada uno, como H₂O₂." },
    { es: "Hidruro", en: "Hydride", def: "Compuesto de hidrógeno con otro elemento; con metales el hidrógeno es H⁻, a −1." },
    { es: "Hidróxido", en: "Hydroxide", def: "Compuesto de un catión metálico con iones OH⁻, como NaOH o Ca(OH)₂." },
    { es: "Oxoácido", en: "Oxoacid", def: "Ácido formado por hidrógeno, un elemento central y oxígeno, como H₂SO₄ o HClO." },
    { es: "Oxoanión", en: "Oxoanion", def: "Anión con oxígeno que queda al perder un oxoácido sus H⁺: los de ácidos -oso acaban en -ito y los de ácidos -ico en -ato." },
    { es: "Hidrogenosal", en: "Hydrogen salt (acid salt)", def: "Sal cuyo anión conserva hidrógeno del ácido, como el hidrogenocarbonato de sodio (bicarbonato)." },
    { es: "Hidrato", en: "Hydrate", def: "Sal que cristaliza con agua dentro del cristal; se escribe con un punto: FeSO₄·7H₂O." },
    { es: "Anhidro", en: "Anhydrous", def: "Sin agua de cristalización; cambia la masa molar respecto al hidrato." },
  ],
  quiz: [
    {
      kind: "choice",
      q: "La hoja pide cargar hipoclorito de sodio para una etapa de limpieza. ¿Qué fórmula debe figurar en la etiqueta del bidón correcto?",
      options: ["NaClO", "NaClO₃", "NaCl", "NaOH"],
      answer: 0,
      explain: "Hipo- y -ito corresponden al anión con menos oxígeno de la familia del cloro, ClO⁻, con el cloro a +1. NaClO₃ es el clorato, NaCl el cloruro y NaOH la sosa.",
    },
    {
      kind: "choice",
      q: "En un saco ves la fórmula FeCl₃. ¿Qué nombre le corresponde?",
      options: ["Cloruro de hierro(II)", "Cloruro de hierro(III)", "Clorato de hierro(III)", "Cloruro ferroso"],
      answer: 1,
      explain: "Tres cloruros a −1 suman −3, así que el hierro vale +3: cloruro de hierro(III), también llamado cloruro férrico o tricloruro de hierro (ficha ICSC 1499). Ferroso sería hierro(II).",
    },
    {
      kind: "choice",
      q: "La hoja pide «carbonato de potasio». Sabiendo que el potasio es K⁺ y el carbonato CO₃²⁻, ¿qué fórmula esperas en la etiqueta?",
      options: ["KCO₃", "K(CO₃)₂", "K₂CO₃", "KHCO₃"],
      answer: 2,
      explain: "Hacen falta dos K⁺ para compensar las dos cargas negativas del carbonato: K₂CO₃. KHCO₃ sería el hidrogenocarbonato (bicarbonato) de potasio, otra sustancia.",
    },
    {
      kind: "choice",
      q: "Un saco lleva la fórmula NaHCO₃. ¿Cuál es su nombre sistemático?",
      options: ["Carbonato de sodio", "Hidróxido de sodio y carbono", "Carbonato de hidrógeno y disodio", "Hidrogenocarbonato de sodio"],
      answer: 3,
      explain: "El anión HCO₃⁻ conserva un hidrógeno del ácido carbónico: hidrogenocarbonato. Es el bicarbonato de sodio de la ficha ICSC 1044, distinto del carbonato Na₂CO₃.",
    },
    {
      kind: "choice",
      q: "Un compañero trae un bidón rotulado «lejía de sosa» para el lavado que la hoja describe como «hidróxido de sodio en disolución». ¿Qué haces?",
      options: [
        "Lo rechazas, porque lejía es siempre hipoclorito de sodio",
        "Compruebas en la etiqueta que es NaOH y su CAS, porque lejía de sosa es hidróxido de sodio",
        "Lo aceptas sin mirar, porque cualquier lejía sirve para lavar",
        "Lo mezclas con hipoclorito para tener las dos cosas en el mismo bidón",
      ],
      answer: 1,
      explain: "La ficha ICSC 0360 recoge «lejía de sosa» como sinónimo del hidróxido de sodio, mientras que «lejía» a secas es hipoclorito (ICSC 0482). Un rótulo a mano no basta: se comprueban la fórmula y el CAS de la etiqueta.",
    },
    {
      kind: "choice",
      q: "En el almacén piden «cal viva» para un tratamiento de efluentes. ¿Qué sustancia es y qué precaución recuerda su ficha?",
      options: [
        "Hidróxido de calcio, Ca(OH)₂; no tiene precauciones con el agua",
        "Carbonato de calcio, CaCO₃; desprende cloro con ácidos",
        "Óxido de calcio, CaO; reacciona con el agua generando mucho calor",
        "Cloruro de calcio, CaCl₂; es un oxidante fuerte",
      ],
      answer: 2,
      explain: "La cal viva es el óxido de calcio, CaO (ICSC 0409). La ficha avisa de que con el agua genera calor suficiente para inflamar combustibles. La cal apagada es Ca(OH)₂.",
    },
    {
      kind: "number",
      q: "Calcula el número de oxidación del cloro en el clorato de sodio, NaClO₃. Datos: Na +1, O −2, el compuesto es neutro.",
      answer: 5,
      tolerance: 0.001,
      unit: "",
      explain: "+1 + Cl + 3 × (−2) = 0, así que Cl = 6 − 1 = 5. Es +5, el del anión en -ato del ácido clórico.",
    },
    {
      kind: "number",
      q: "Calcula el número de oxidación del cromo en el ion dicromato, Cr₂O₇²⁻. Datos: O −2; la carga total del ion es −2.",
      answer: 6,
      tolerance: 0.001,
      unit: "",
      explain: "2 × Cr + 7 × (−2) = −2, así que 2 × Cr = 12 y Cr = 6. Por eso la ficha ICSC 1371 lo llama dicromato(VI) de dipotasio.",
    },
    {
      kind: "number",
      q: "Calcula la masa molar del permanganato de potasio, KMnO₄, con estas masas atómicas: K 39,1; Mn 54,9; O 16.",
      answer: 158,
      tolerance: 0.005,
      unit: "g/mol",
      explain: "39,1 + 54,9 + 4 × 16 = 39,1 + 54,9 + 64 = 158 g/mol, el mismo valor que da su ficha ICSC 0672.",
    },
    {
      kind: "number",
      q: "Hay que neutralizar 10 mol de HCl con carbonato de sodio, Na₂CO₃ (Na₂CO₃ + 2 HCl da 2 NaCl + H₂O + CO₂). Con Na 23, C 12 y O 16, ¿cuántos gramos de carbonato hacen falta?",
      answer: 530,
      tolerance: 0.01,
      unit: "g",
      explain: "Masa molar: 2 × 23 + 12 + 3 × 16 = 106 g/mol. Un carbonato neutraliza dos HCl: 10 / 2 = 5 mol, y 5 × 106 = 530 g. Con bicarbonato harían falta 840 g.",
    },
  ],
};
