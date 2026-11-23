import type { Lesson } from "./types";

export const atomosAFondo: Lesson = {
  slug: "atomos-a-fondo",
  level: 1,
  order: 4,
  title: "Átomos y tabla periódica a fondo: de qué está hecho todo",
  titleEn: "Atoms and the periodic table in depth: what everything is made of",
  minutes: 36,
  summary:
    "Qué hay dentro de un átomo, cómo se leen sus números, qué son los isótopos y los iones, por qué la tabla periódica es un mapa del comportamiento de los elementos, cómo se cuentan los átomos de una fórmula y por qué el paladio de un catalizador acaba siendo una impureza vigilada.",
  body: `
En la lección «Átomos y tabla periódica» viste que la materia está hecha de átomos, que cada elemento tiene un símbolo y que la tabla da la masa atómica. Aquí vas a abrir el átomo, leer sus números y entender por qué el sodio, el cloro o el paladio se comportan como lo hacen en la planta.

### Parte 1. El átomo por dentro
El acero del reactor, el disolvente o el producto del secadero están hechos de **átomos** (*atoms*). Un átomo tiene dos zonas:

- **El núcleo** (*nucleus*), en el centro. Es diminuto y concentra casi toda la masa.
- **La corteza** (*electron shell*), alrededor, donde se mueven los electrones. Ocupa casi todo el volumen, pero pesa muy poco.

Y tres tipos de partículas:

| Partícula | Inglés | Dónde está | Carga eléctrica | Masa, en unidades de masa atómica (u) |
|---|---|---|---|---|
| Protón | *proton* | Núcleo | Positiva, +1 | Casi 1 |
| Neutrón | *neutron* | Núcleo | Ninguna, 0 | Casi 1 |
| Electrón | *electron* | Corteza | Negativa, −1 | Unas 1800 veces menos que un protón |

La carga del protón y la del electrón son iguales en tamaño y de signo contrario: se anulan. El Real Decreto 2032/2009 de unidades legales de medida fija esa **carga elemental** (*elementary charge*) en 1,602176634 × 10⁻¹⁹ culombios; no hace falta recordar el número. Como un átomo tiene tantos electrones como protones, **en conjunto es neutro**.

**Una analogía para el tamaño (aproximada).** Si un átomo fuera un estadio de fútbol, el núcleo sería una canica en el centro del campo y los electrones andarían por las gradas; entre medias, casi todo es vacío. No es exacta: el núcleo real es entre diez mil y cien mil veces más pequeño que el átomo, y los electrones no son bolitas. Pero da la idea.

¿Por qué importa en la planta? Porque **las reacciones químicas solo tocan la corteza**. En el reactor los núcleos no cambian: cambia cómo se reparten los electrones. El núcleo dice qué elemento es; los electrones, cómo reacciona.

### Parte 2. Número atómico y número másico
Cada átomo se describe con dos números enteros:

- **Número atómico, Z** (*atomic number*): el número de protones. Es el carné de identidad del elemento: todo átomo con 6 protones es carbono; con 17, cloro; con 11, sodio. Si cambia Z, cambia el elemento.
- **Número másico, A** (*mass number*): protones más neutrones, todas las partículas del núcleo.

De ahí salen tres cuentas:

- Protones = Z.
- Neutrones = A − Z.
- Electrones = Z, si el átomo es neutro.

**Cómo se lee un símbolo.** Se escribe el número másico arriba a la izquierda y, a veces, Z abajo: ¹²₆C. En hojas y textos se usa el guion: carbono-12, C-12, Cl-35; el símbolo ya dice Z, así que basta con A.

**Cuatro ejemplos resueltos.** Números atómicos de la tabla: C 6, Na 11, Cl 17.

| Átomo | Z (protones) | A | Neutrones (A − Z) | Electrones (átomo neutro) |
|---|---|---|---|---|
| C-12 | 6 | 12 | 12 − 6 = 6 | 6 |
| Cl-35 | 17 | 35 | 35 − 17 = 18 | 17 |
| Cl-37 | 17 | 37 | 37 − 17 = 20 | 17 |
| Na-23 | 11 | 23 | 23 − 11 = 12 | 11 |

En el cloro cambian solo los neutrones.

### Parte 3. Isótopos y masa atómica
Los **isótopos** (*isotopes*) son átomos del mismo elemento (mismo Z) con distinto número de neutrones (distinto A). El Cl-35 y el Cl-37 son isótopos del cloro. Como tienen los mismos electrones, **se comportan igual en las reacciones**: el cloro del ácido clorhídrico o del diclorometano es siempre una mezcla de los dos, y en el reactor no se nota. Solo cambia un poco la masa.

**La unidad de masa atómica.** Pesar átomos en kilos es incómodo. Se usa la **unidad de masa atómica unificada** (*unified atomic mass unit*), símbolo u, también llamada **dalton** (Da). El Real Decreto 2032/2009 la acepta para usar con el Sistema Internacional y la define como la doceava parte de la masa de un átomo de carbono-12: por definición, un C-12 pesa exactamente 12 u.

**Por qué la masa de la tabla no es un número entero.** Casi todos los elementos son en la naturaleza una mezcla de isótopos. La tabla da la **masa atómica media** (*average atomic mass*) de esa mezcla, ponderada por cuánto hay de cada uno, como una nota final en la que el examen cuenta más que los ejercicios.

**La cuenta del cloro.** Valores de libro de texto, redondeados: cerca de un 76 % de Cl-35 y un 24 % de Cl-37. Para simplificar, la masa de cada isótopo se toma igual a su número másico.

- Aporte del Cl-35: 35 × 0,76 = 26,60
- Aporte del Cl-37: 37 × 0,24 = 8,88
- Masa atómica media: 26,60 + 8,88 = 35,48 u, unos 35,5 u.

La tabla da 35,45: la diferencia viene de redondear las abundancias y de que la masa real de cada isótopo es algo menor que su número másico. La idea clave: 35,45 no es la masa de ningún átomo concreto, sino la media de muchos. Con el carbono casi no se nota, porque casi todo es carbono-12 y una pequeña parte carbono-13: su media es 12,011.

En «El mol: contar moléculas pesando» verás para qué sirve: el mismo número, en gramos, es lo que pesa un mol de átomos, y con él se calculan las cargas del reactor.

### Parte 4. Los electrones, por capas
Los electrones se organizan en **capas** o **niveles de energía** (*electron shells*, *energy levels*), como los pisos de un edificio. Los de abajo, cerca del núcleo, están más sujetos; los de la última capa, menos. La física real habla de orbitales; aquí basta este modelo. Para los 20 primeros elementos funciona una regla simple: la primera capa admite 2 electrones, la segunda 8 y la tercera se llena con 8 antes de empezar la cuarta.

| Elemento | Z | Electrones por capa | Última capa |
|---|---|---|---|
| Hidrógeno, H | 1 | 1 | 1 |
| Carbono, C | 6 | 2, 4 | 4 |
| Nitrógeno, N | 7 | 2, 5 | 5 |
| Oxígeno, O | 8 | 2, 6 | 6 |
| Flúor, F | 9 | 2, 7 | 7 |
| Sodio, Na | 11 | 2, 8, 1 | 1 |
| Azufre, S | 16 | 2, 8, 6 | 6 |
| Cloro, Cl | 17 | 2, 8, 7 | 7 |
| Potasio, K | 19 | 2, 8, 8, 1 | 1 |
| Calcio, Ca | 20 | 2, 8, 8, 2 | 2 |

Los electrones de la última capa son los **electrones de valencia** (*valence electrons*): los más lejanos y flojos, los que se ceden, se ganan o se comparten. Por eso **deciden cómo reacciona un elemento**.

**La regla del octeto** (*octet rule*). Los gases nobles, como el neón (2, 8) o el argón (2, 8, 8), tienen la última capa llena y casi no reaccionan. Muchos átomos reaccionan de forma que acaban con 8 electrones en la última capa. Es una **tendencia útil**, no una ley: el hidrógeno se completa con 2; el boro, en algunos compuestos, se queda con menos de 8; el azufre o el fósforo pueden rodearse de más, como en el ácido sulfúrico; y hay moléculas con un número impar de electrones que no pueden cumplirla. Cómo se comparten electrones para formar moléculas lo verás en «Enlaces, moléculas y polaridad».

### Parte 5. Iones: átomos con carga
Si un átomo pierde o gana electrones, deja de ser neutro. Un átomo o grupo de átomos con carga es un **ion** (*ion*):

- **Catión** (*cation*): ha perdido electrones y queda positivo: Na⁺, Ca²⁺.
- **Anión** (*anion*): ha ganado electrones y queda negativo: Cl⁻, SO₄²⁻.

**Por qué el sodio pierde un electrón y el cloro gana uno.** El sodio tiene 2, 8, 1: si suelta ese electrón suelto, queda 2, 8, la capa llena del neón. El cloro tiene 2, 8, 7: si gana uno, queda 2, 8, 8, como el argón. Cuando se juntan, el electrón pasa del sodio al cloro y quedan Na⁺ y Cl⁻, que se atraen: es la sal común, NaCl.

Al formar un ion **cambian los electrones, nunca los protones**. Na⁺ sigue siendo sodio: 11 protones y 10 electrones. Cl⁻: 17 protones y 18 electrones. Ca²⁺: 20 protones y 18 electrones.

**Iones poliatómicos** (*polyatomic ions*). A veces la carga es de un grupo de átomos que viajan juntos como una pieza: sulfato SO₄²⁻ (un azufre y cuatro oxígenos, dos cargas negativas en total), nitrato NO₃⁻, hidróxido OH⁻, amonio NH₄⁺. En las reacciones de sales suelen pasar enteros de un compuesto a otro.

**Iones habituales en planta.**

| Ion | Nombre | Dónde lo encontrarás |
|---|---|---|
| Na⁺ | Sodio | Sosa (hidróxido de sodio), sales sódicas, aguas madres tras neutralizar |
| K⁺ | Potasio | Hidróxido y carbonato de potasio, sales potásicas |
| Ca²⁺, Mg²⁺ | Calcio, magnesio | Agua dura: forman la cal |
| Cl⁻ | Cloruro | Ácido clorhídrico, sal común, clorhidratos de principios activos |
| SO₄²⁻ | Sulfato | Ácido sulfúrico y sus sales |
| NO₃⁻ | Nitrato | Ácido nítrico, nitratos del agua de red |
| OH⁻ | Hidróxido | Bases como la sosa |
| H⁺ | Hidrógeno (protón) | Ácidos. En agua va unido a una molécula de agua |

Tres situaciones donde mandan los iones:

- **Aguas madres** (*mother liquors*). Si se neutraliza ácido clorhídrico con sosa, HCl + NaOH da NaCl + H₂O. La sal queda disuelta como Na⁺ y Cl⁻ en las aguas madres y en el filtrado de la centrífuga; por eso la torta se lava.
- **Agua dura** (*hard water*). El calcio y el magnesio del agua de red dejan cal al calentar. «Agua farmacéutica a fondo» explica cómo el descalcificador los cambia por sodio.
- **Conductividad** (*conductivity*). El agua pura casi no conduce la electricidad; la conducen los iones. Si sube la conductividad del agua purificada, hay sales donde no debería (misma lección).

H⁺ y OH⁻ tienen su propia lección: «Ácidos, bases y pH».

### Parte 6. La tabla periódica como mapa
La tabla periódica (*periodic table*) ordena los 118 elementos por su número atómico y coloca juntos a los que se parecen: sirve para adivinar cómo se comportará un elemento que no conoces.

- **Periodos** (*periods*): las 7 filas. Los elementos de una fila tienen el mismo número de capas: sodio, azufre y cloro, en el periodo 3, tienen tres.
- **Grupos** (*groups*): las 18 columnas. Los de una columna tienen los mismos electrones de valencia y **se comportan de forma parecida**: sodio y potasio en el grupo 1; flúor, cloro y bromo en el 17.

**Metales, no metales y semimetales.**

- **Metales** (*metals*): izquierda y centro, la gran mayoría. Brillan, conducen la electricidad y el calor y tienden a **perder** electrones. Hierro, sodio, paladio.
- **No metales** (*non-metals*): arriba a la derecha. Tienden a **ganar o compartir** electrones. Carbono, hidrógeno, oxígeno, nitrógeno, azufre, cloro: los de la química orgánica.
- **Semimetales** o metaloides (*metalloids*): en la frontera en escalera entre ambos, con propiedades intermedias, como el boro y el silicio.

**Los grupos con nombre propio.**

| Grupo | Nombre | Valencia | Comportamiento |
|---|---|---|---|
| 1 (sin el hidrógeno) | Metales alcalinos (*alkali metals*): litio, sodio, potasio | 1 | Muy reactivos; pierden su electrón con facilidad |
| 2 | Alcalinotérreos (*alkaline earth metals*): magnesio, calcio | 2 | Reactivos, algo menos |
| 17 | Halógenos (*halogens*): flúor, cloro, bromo, yodo | 7 | Muy reactivos; ganan un electrón con facilidad |
| 18 | Gases nobles (*noble gases*): helio, neón, argón | Capa llena | Casi no reaccionan |

El hidrógeno va arriba del grupo 1 por su único electrón, pero es un gas y no es un metal.

**Tres tendencias, sin fórmulas.** Piensa en el núcleo como un imán que tira de los electrones.

- **Tamaño del átomo** (*atomic radius*). Al bajar en un grupo crece, porque cada fila añade una capa. Hacia la derecha en un periodo se encoge: más protones tiran de las mismas capas. El potasio es mayor que el sodio; el cloro, menor que el sodio.
- **Perder o ganar electrones.** A la izquierda los átomos sueltan fácilmente sus pocos electrones de valencia; a la derecha, a los que les faltan pocos para llenar la capa, tienden a ganarlos. Al bajar en el grupo 1 el electrón está más lejos y más flojo: el potasio lo suelta más fácilmente que el sodio y es más reactivo.
- **Electronegatividad** (*electronegativity*): la fuerza con que un átomo atrae los electrones que comparte. Crece hacia la derecha y hacia arriba; el flúor es el mayor de todos, y el oxígeno, el nitrógeno y el cloro también son altos. Explica la polaridad del agua, que verás en «Enlaces, moléculas y polaridad».

**Los elementos que más verás en una planta de principios activos**, solo como idea:

| Elemento | Dónde aparece |
|---|---|
| C, H, O, N | Esqueleto de casi todos los principios activos y de disolventes como metanol, etanol, acetona, tolueno o acetato de etilo |
| S | Ácido sulfúrico, sulfatos, algunos principios activos |
| Cl | Ácido clorhídrico, clorhidratos, diclorometano (CH₂Cl₂) |
| Br, F | Reactivos de síntesis y algunos principios activos que los llevan en su molécula |
| Na, K | Bases (sosa, potasa, carbonatos) y sales sódicas o potásicas |
| Pd, Pt | Catalizadores, sobre todo de hidrogenación, como el paladio sobre carbón (Pd/C) |

### Parte 7. Por qué la tabla avisa de peligros
- **Metales alcalinos con agua.** La nota técnica NTP 237 del Instituto Nacional de Seguridad y Salud en el Trabajo (INSST) explica que litio, sodio y potasio descomponen el agua con rapidez: forman el hidróxido y liberan hidrógeno, un gas inflamable, con mucho calor. Con el potasio, ese calor basta para inflamar el hidrógeno, y si el metal está troceado el peligro aumenta. El potasio, más abajo en el grupo, reacciona con más violencia. Según la misma nota, magnesio y calcio hacen algo parecido con menos vigor.
- **Halógenos.** Con 7 electrones de valencia, tienden mucho a ganar uno. La misma NTP recoge, por ejemplo, que el flúor reacciona violentamente con el agua y forma ácido fluorhídrico.

Lo peligroso es el elemento libre o ciertos compuestos, no el elemento en cualquier forma: el sodio metálico reacciona con el agua; el Na⁺ de la sal común, no. Cómo se almacenan estos productos lo verás en «Almacenamiento, emergencias y residuos a fondo», y cómo leer sus peligros en «Pictogramas, frases H y P y fichas de datos de seguridad».

### Parte 8. Metales que no deben quedarse en el producto
El paladio o el platino aceleran una reacción y, en principio, no se consumen, pero un poco de metal puede quedarse en el producto, y el paciente no gana nada con él. De eso trata la guía **ICH Q3D** de impurezas elementales (*elemental impurities*). En «Impurezas en el API» (nivel 3) volverás a encontrarla; aquí miramos dentro de su revisión 2, de 2022, con el ojo de la tabla periódica.

**De dónde vienen.** La guía nombra cuatro fuentes: elementos añadidos a propósito, como los catalizadores; los que traen el principio activo, el agua o los excipientes; lo que aportan los equipos de fabricación; y lo que pasa desde el envase.

**La exposición diaria permitida** (*permitted daily exposure*, PDE): según la guía, la cantidad máxima aceptable de una impureza elemental que se puede tomar al día con un medicamento. Va en microgramos al día (µg/día) y depende de la vía. Para el paladio, la tabla de la guía da 100 µg/día por vía oral, 10 inyectado (parenteral) y 1 inhalado; para el platino, las mismas cifras.

**Las clases de elementos**, según toxicidad y probabilidad de aparecer:

| Clase | Elementos | Idea |
|---|---|---|
| 1 | Arsénico, cadmio, mercurio, plomo | Tóxicos, casi sin uso en fabricación; siempre se evalúan |
| 2A | Cobalto, níquel, vanadio | Tóxicos según la vía y bastante probables; siempre se evalúan |
| 2B | Plata, oro, iridio, osmio, paladio, platino, rodio, rutenio, selenio, talio | Poco abundantes; se evalúan si se añaden a propósito, como un catalizador |
| 3 | Bario, cromo, cobre, litio, molibdeno, antimonio, estaño | Poco tóxicos por vía oral; cuentan más en inyectables e inhalados |

Para otros elementos la guía no fija PDE, por su baja toxicidad o porque los tratan otras normas; entre ellos, sodio, potasio, calcio, magnesio y hierro. Los iones de la parte 5 no son el problema de esta guía.

**De la dosis a una concentración.** La guía permite dividir la PDE entre la cantidad de medicamento que se toma al día; en su opción más sencilla supone 10 g al día. Para el paladio oral: 100 µg/día entre 10 g/día da 10 µg/g, es decir, 10 partes por millón, el valor que da la propia guía. El límite de tu producto lo fija su especificación; esta cuenta solo explica de dónde sale. Para ti, la consecuencia es práctica: la filtración del catalizador y los lavados se hacen exactamente como dice la hoja.

### Parte 9. Fórmulas químicas: leer y contar átomos
Una **fórmula química** (*chemical formula*) dice qué átomos hay y cuántos de cada uno. El número pequeño de abajo (**subíndice**, *subscript*) se aplica al símbolo que tiene justo delante; si no hay número, es 1.

| Fórmula | Sustancia | Qué dice | Átomos |
|---|---|---|---|
| H₂O | Agua | 2 de hidrógeno y 1 de oxígeno | 3 |
| NaCl | Cloruro de sodio | 1 de sodio y 1 de cloro (iones Na⁺ y Cl⁻, 1 a 1) | 2 |
| H₂SO₄ | Ácido sulfúrico | 2 de hidrógeno, 1 de azufre y 4 de oxígeno | 7 |
| C₂H₅OH | Etanol | 2 de carbono, 6 de hidrógeno (5 + 1) y 1 de oxígeno | 9 |

En el etanol el hidrógeno sale dos veces porque se escribe aparte el grupo OH, el que lo hace alcohol. Al contar, se suman todos.

**Fórmulas con paréntesis.** El paréntesis encierra un grupo, a menudo un ion poliatómico, y el número de detrás multiplica **todo** lo de dentro.

**Ejemplo 1: hidróxido de calcio, Ca(OH)₂.** Ca 1; dentro, O 1 y H 1, por 2: O 2 y H 2. Total: 1 + 2 + 2 = 5 átomos. Es un Ca²⁺ con dos OH⁻: las cargas cuadran.

**Ejemplo 2: sulfato de amonio, (NH₄)₂SO₄.** Dentro, N 1 y H 4, por 2: N 2 y H 8. Fuera, S 1 y O 4 (el 4 solo afecta al oxígeno). Total: 2 + 8 + 1 + 4 = 15 átomos. Dos NH₄⁺ y un SO₄²⁻: dos cargas positivas y dos negativas.

**Ejemplo 3: acetona, (CH₃)₂CO**, un disolvente orgánico muy común. Dentro, C 1 y H 3, por 2: C 2 y H 6. Fuera, C 1 y O 1. Carbonos: 2 + 1 = 3. Total: 3 + 6 + 1 = 10 átomos. Resumida: C₃H₆O.

**Comprobación rápida.** En una sal, las cargas positivas y negativas suman cero; si no cuadra, revisa los subíndices.

Cómo se pasa de una fórmula a los kilos del reactor es el tema de «El mol: contar moléculas pesando» y «Ecuaciones químicas y estequiometría».

En planta manda siempre el procedimiento vigente (SOP): las fórmulas, cargas, límites y precauciones de tu producto son las que figuran en él y en la hoja de producción.
`,
  plant: `
Lote de ejemplo del intermedio ficticio INT-27 en la planta ficticia de la lección. En el reactor RX-305 se hace una hidrogenación con paladio sobre carbón (Pd/C) como catalizador. Al terminar, la hoja manda pasar la mezcla por el filtro de cartucho FL-306 para retener el catalizador. Lucía, la operadora, comprueba el número de cartucho, anota la presión diferencial al inicio y al final y guarda la muestra del filtrado para el laboratorio. El análisis de paladio no lo hace ella, pero sabe por qué existe: el paladio es un elemento de la clase 2B de ICH Q3D, añadido a propósito, y un cartucho roto lo dejaría pasar al producto.

En el paso siguiente, en el reactor RX-310, se neutraliza el exceso de ácido clorhídrico con sosa. La hoja indica añadirla despacio controlando la temperatura. Al terminar se forma cloruro de sodio, que queda disuelto como iones Na⁺ y Cl⁻. El producto cristaliza y se separa en la centrífuga CF-312. Las aguas madres, cargadas de sal, van al depósito de residuos que marca la hoja, y la torta se lava con agua purificada para arrastrar la sal que queda. Al final del lavado, Lucía toma una muestra del líquido de lavado para comprobar la conductividad (control de ejemplo): si sigue alta, quedan iones en la torta y hay que seguir lavando según el procedimiento.

Al revisar la lista de materiales encuentra «(NH₄)₂SO₄». Cuenta: 2 nitrógenos, 8 hidrógenos, 1 azufre y 4 oxígenos. Coincide con la etiqueta del saco. Todo el proceso, los equipos y el producto son ficticios.
`,
  batchRecord: `
- **Lista de materiales**: nombre, fórmula y código interno de cada reactivo (por ejemplo, NaOH, HCl, Pd/C, (NH₄)₂SO₄). Comprueba que la fórmula de la etiqueta coincide con la de la hoja antes de cargar.
- **Masas y cantidades**: las cargas se han calculado con masas atómicas y fórmulas; tú anotas lo pesado o dosificado real, con unidad, y la verificación por segunda persona si la pide la hoja.
- **Catalizador**: lote del catalizador, cantidad cargada, cómo se retiró (filtro y número de cartucho), presiones del filtro y muestra para análisis de metal residual.
- **Neutralizaciones**: velocidad de adición del ácido o la base, temperatura máxima alcanzada y pH final.
- **Lavados**: volumen de lavado, número de lavados y resultado de la conductividad o del control que indique la hoja.
- **Seguridad**: avisos ligados al elemento (metales reactivos con el agua, halógenos, catalizador que no debe secarse), con la referencia a la ficha de datos de seguridad.
- **Anomalías**: cualquier fórmula que no coincida, etiqueta dudosa o resultado fuera de rango se anota y se comunica antes de seguir.
`,
  terms: [
    { es: "Protón", en: "Proton", def: "Partícula del núcleo con carga positiva +1. Su número (Z) identifica al elemento." },
    { es: "Neutrón", en: "Neutron", def: "Partícula del núcleo sin carga, con una masa parecida a la del protón." },
    { es: "Electrón", en: "Electron", def: "Partícula de la corteza con carga negativa −1 y muy poca masa. Interviene en las reacciones." },
    { es: "Número másico", en: "Mass number (A)", def: "Número total de protones y neutrones del núcleo." },
    { es: "Isótopo", en: "Isotope", def: "Átomo de un elemento con un número de neutrones distinto al de otro átomo del mismo elemento." },
    { es: "Unidad de masa atómica unificada", en: "Unified atomic mass unit (u, Da)", def: "Doceava parte de la masa de un átomo de carbono-12; también llamada dalton." },
    { es: "Masa atómica media", en: "Average atomic mass", def: "Media ponderada de las masas de los isótopos de un elemento según su abundancia natural; es la que da la tabla." },
    { es: "Electrones de valencia", en: "Valence electrons", def: "Electrones de la última capa; deciden cómo reacciona el elemento." },
    { es: "Regla del octeto", en: "Octet rule", def: "Tendencia de muchos átomos a quedar con 8 electrones en la última capa; tiene excepciones." },
    { es: "Catión", en: "Cation", def: "Ion con carga positiva, formado al perder electrones (Na⁺, Ca²⁺)." },
    { es: "Anión", en: "Anion", def: "Ion con carga negativa, formado al ganar electrones (Cl⁻, SO₄²⁻)." },
    { es: "Ion poliatómico", en: "Polyatomic ion", def: "Grupo de átomos unidos que tiene carga en conjunto, como el sulfato o el amonio." },
    { es: "Electronegatividad", en: "Electronegativity", def: "Fuerza con la que un átomo atrae los electrones que comparte. Crece hacia la derecha y hacia arriba de la tabla." },
    { es: "Exposición diaria permitida", en: "Permitted daily exposure (PDE)", def: "Según ICH Q3D, cantidad máxima aceptable de una impureza elemental que se puede tomar al día con un medicamento." },
  ],
  quiz: [
    {
      kind: "number",
      q: "El cloro tiene número atómico Z = 17. ¿Cuántos neutrones tiene un átomo de cloro-37?",
      answer: 20,
      tolerance: 0.001,
      unit: "neutrones",
      explain: "Neutrones = A − Z = 37 − 17 = 20. Los protones son 17 y, si el átomo es neutro, los electrones también.",
    },
    {
      kind: "number",
      q: "El calcio tiene Z = 20. ¿Cuántos electrones tiene el ion calcio Ca²⁺ del agua dura?",
      answer: 18,
      tolerance: 0.001,
      unit: "electrones",
      explain: "El átomo neutro tiene 20 electrones; la carga 2+ indica que ha perdido 2: 20 − 2 = 18. Los protones siguen siendo 20.",
    },
    {
      kind: "number",
      q: "El potasio tiene Z = 19. ¿Cuántos neutrones tiene un átomo de potasio-39?",
      answer: 20,
      tolerance: 0.001,
      unit: "neutrones",
      explain: "Neutrones = A − Z = 39 − 19 = 20.",
    },
    {
      kind: "number",
      q: "Valores redondeados de ejemplo: el boro natural tiene un 20 % de boro-10 y un 80 % de boro-11. Tomando la masa de cada isótopo igual a su número másico, ¿cuál es la masa atómica media del boro, en u, con un decimal?",
      answer: 10.8,
      tolerance: 0.005,
      unit: "u",
      explain: "10 × 0,20 + 11 × 0,80 = 2,0 + 8,8 = 10,8 u. Está más cerca de 11 porque el boro-11 es el más abundante.",
    },
    {
      kind: "number",
      q: "¿Cuántos átomos hay en total en una unidad de sulfato de amonio, (NH₄)₂SO₄?",
      answer: 15,
      tolerance: 0.001,
      unit: "átomos",
      explain: "El 2 multiplica el paréntesis: N 2 y H 8. Fuera, S 1 y O 4. Total: 2 + 8 + 1 + 4 = 15.",
    },
    {
      kind: "number",
      q: "¿Cuántos átomos de oxígeno hay en una unidad de sulfato de aluminio, Al₂(SO₄)₃?",
      answer: 12,
      tolerance: 0.001,
      unit: "átomos de O",
      explain: "Cada sulfato lleva 4 oxígenos y el 3 multiplica todo el paréntesis: 4 × 3 = 12.",
    },
    {
      kind: "choice",
      q: "En el almacén hay un frasco de potasio metálico y una manguera de agua cerca. Sabes que el sodio reacciona con el agua. ¿Qué esperas del potasio?",
      options: [
        "Que reaccione con el agua, y con más violencia que el sodio",
        "Que no reaccione, porque es un metal distinto del sodio",
        "Que reaccione solo si el agua está muy caliente",
        "Que se disuelva sin más, como la sal común",
      ],
      answer: 0,
      explain: "Está en el mismo grupo que el sodio, el de los alcalinos, y más abajo: suelta su electrón con más facilidad. La NTP 237 del INSST indica que con el potasio el calor de la reacción basta para inflamar el hidrógeno.",
    },
    {
      kind: "choice",
      q: "Un compañero dice que el cloro del cloruro de sodio de las aguas madres «no es el mismo» porque en el análisis aparecen átomos de cloro de masa 35 y de masa 37. ¿Qué le contestas?",
      options: [
        "Que hay dos elementos distintos mezclados con el mismo símbolo",
        "Que son isótopos: el mismo elemento, con distinto número de neutrones",
        "Que el de masa 37 es un ion y el de masa 35 un átomo neutro",
        "Que el de masa 37 es una impureza elemental de la ICH Q3D",
      ],
      answer: 1,
      explain: "Los dos tienen 17 protones, así que son cloro. Cambian los neutrones (18 y 20). Los isótopos se comportan igual en las reacciones.",
    },
    {
      kind: "choice",
      q: "Tras una hidrogenación con Pd/C, la hoja exige filtrar por cartucho y enviar una muestra para analizar paladio. ¿Por qué?",
      options: [
        "Porque el paladio es un ion de agua dura que sube la conductividad",
        "Porque el paladio cambia el número atómico del producto",
        "Porque el paladio es un catalizador añadido a propósito y la ICH Q3D lo limita como impureza elemental",
        "Porque el paladio es un gas noble que se escapa al filtrar",
      ],
      answer: 2,
      explain: "La guía ICH Q3D pone el paladio en la clase 2B y pide evaluarlo cuando se añade a propósito, como un catalizador. Su exposición diaria permitida por vía oral es de 100 µg al día.",
    },
    {
      kind: "choice",
      q: "Tras lavar la torta en la centrífuga, la conductividad del líquido de lavado sigue alta. ¿Qué indica?",
      options: [
        "Que la torta está seca y se puede descargar",
        "Que el agua ya no tiene iones y el conductímetro falla",
        "Que hay demasiados neutrones en el producto",
        "Que aún quedan sales disueltas, como Na⁺ y Cl⁻, en la torta",
      ],
      answer: 3,
      explain: "La conductividad la dan los iones disueltos. Si sigue alta, el lavado no ha arrastrado toda la sal: se actúa como diga el procedimiento.",
    },
  ],
};
