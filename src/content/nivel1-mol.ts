import type { Lesson } from "./types";

export const molAFondo: Lesson = {
  slug: "mol-a-fondo",
  level: 1,
  order: 8,
  title: "El mol a fondo: contar moléculas pesando, paso a paso",
  titleEn: "The mole in depth: counting molecules by weighing, step by step",
  minutes: 38,
  summary:
    "Por qué se cuentan las moléculas por paquetes, la definición oficial del mol, la masa molar con siete sustancias de planta, gramos, moles, moléculas y kilomoles, la composición en masa, la fórmula empírica, de litros a moles, los moles de un gas con P·V = n·R·T, todas las formas de dar una concentración y los errores típicos.",
  body: `
En la lección «El mol: contar moléculas pesando» viste la idea y la fórmula n = m / M. Esta lección es de práctica: muchos ejemplos resueltos, paso a paso, con números de planta. Hazlos tú antes de leer la solución.

### Por qué hace falta el mol
En la tienda no se cuentan los huevos uno a uno: se piden por docenas. En la papelería el papel se vende por resmas de 500 hojas. Cuando las cosas son pequeñas y muchas, se cuentan por paquetes.

Con las moléculas una docena no sirve de nada. Una gota de agua de 0,05 g (valor de ejemplo) tiene unos 1,7 × 10²¹ moléculas: un 17 seguido de veinte ceros. Hace falta un paquete enorme. Ese paquete es el **mol** (*mole*).

La definición legal en España está en el Real Decreto 2032/2009, de unidades legales de medida, apartado 2.6:

> «El mol, símbolo mol, es la unidad SI de cantidad de sustancia. Un mol contiene exactamente 6,022 140 76 × 10²³ entidades elementales.»

El mismo texto añade que esa cifra es el valor fijo de la **constante de Avogadro** (*Avogadro constant*), N_A = 6,022 140 76 × 10²³ mol⁻¹, y que una **entidad elemental** (*elementary entity*) puede ser un átomo, una molécula, un ion, un electrón o cualquier otra partícula que se especifique. Por eso hay que decir de qué: un mol de agua son 6,022 × 10²³ moléculas de agua.

¿Por qué ese número tan raro? Un átomo de carbono pesa unos 12 dalton (la unidad de masa atómica, que el real decreto define como 1/12 de la masa del átomo de carbono 12). Y un mol de átomos de carbono pesa unos 12 gramos. Lo que pesa un átomo en dalton es lo que pesa un mol en gramos. Esa coincidencia es la que te deja contar pesando.

### Masa molar: lo que pesa un paquete
La **masa molar** (*molar mass*, M) es lo que pesa un mol de una sustancia. Se da en gramos por mol (g/mol). Se calcula con la fórmula química y las masas atómicas, en cuatro pasos:

1. Lee la fórmula y apunta cada elemento.
2. Cuenta los átomos de cada uno. El número pequeño de abajo va detrás del símbolo al que se refiere; si no hay número, es 1.
3. Multiplica cada número de átomos por la masa atómica del elemento.
4. Suma.

Las masas atómicas salen de la tabla periódica, como viste en «Átomos y tabla periódica». En los ejemplos uso estos valores redondeados, que son los de clase:

| Elemento | Valor estándar | Redondeado para las cuentas |
|---|---|---|
| Hidrógeno, H | 1,008 | 1 |
| Carbono, C | 12,011 | 12 |
| Nitrógeno, N | 14,007 | 14 |
| Oxígeno, O | 15,999 | 16 |
| Sodio, Na | 22,990 | 23 |
| Azufre, S | 32,06 | 32 |
| Cloro, Cl | 35,45 | 35,5 |

Con los redondeados el error es menor del 0,2 % en todas las sustancias de la lección. En planta usa la masa molar que da la hoja.

**Ejemplo 1. Agua, H₂O.** Dos H y un O. 2 × 1 + 1 × 16 = **18 g/mol**.

**Ejemplo 2. Cloruro de sodio (la sal común), NaCl.** Un Na y un Cl. 23 + 35,5 = **58,5 g/mol**.

**Ejemplo 3. Hidróxido de sodio (la sosa), NaOH.** Un Na, un O, un H. 23 + 16 + 1 = **40 g/mol**.

**Ejemplo 4. Ácido sulfúrico, H₂SO₄.** Dos H, un S y cuatro O. 2 × 1 + 32 + 4 × 16 = 2 + 32 + 64 = **98 g/mol**.

**Ejemplo 5. Etanol, C₂H₅OH.** Cuidado: el H aparece dos veces. C: 2. H: 5 + 1 = 6. O: 1. 2 × 12 + 6 × 1 + 16 = 24 + 6 + 16 = **46 g/mol**.

**Ejemplo 6. Tolueno, C₇H₈.** 7 × 12 + 8 × 1 = 84 + 8 = **92 g/mol**.

**Ejemplo 7. Paracetamol, C₈H₉NO₂**, un principio activo real y sencillo. C: 8 × 12 = 96. H: 9 × 1 = 9. N: 1 × 14 = 14. O: 2 × 16 = 32. Suma: 96 + 9 + 14 + 32 = **151 g/mol**.

| Sustancia | Fórmula | M redondeada (g/mol) | M con valores estándar (g/mol) |
|---|---|---|---|
| Agua | H₂O | 18 | 18,015 |
| Cloruro de sodio | NaCl | 58,5 | 58,440 |
| Hidróxido de sodio | NaOH | 40 | 39,997 |
| Ácido sulfúrico | H₂SO₄ | 98 | 98,072 |
| Etanol | C₂H₅OH | 46 | 46,069 |
| Tolueno | C₇H₈ | 92 | 92,141 |
| Paracetamol | C₈H₉NO₂ | 151 | 151,165 |
| Metanol | CH₃OH | 32 | 32,042 |

### Las tres conversiones básicas
Todo se reduce a tres cuentas:

| Quiero pasar de | Hago | Fórmula |
|---|---|---|
| Gramos a moles | Divido por la masa molar | n = m / M |
| Moles a gramos | Multiplico por la masa molar | m = n × M |
| Moles a número de moléculas | Multiplico por la constante de Avogadro | N = n × N_A |

**Gramos a moles.**
- 36 g de agua: 36 / 18 = **2 mol**.
- 10 g de NaOH: 10 / 40 = **0,25 mol**.
- 500 g de paracetamol: 500 / 151 = **3,31 mol**.

**Moles a gramos.**
- 0,25 mol de ácido sulfúrico: 0,25 × 98 = **24,5 g**.
- 3 mol de etanol: 3 × 46 = **138 g**.

**Moles a moléculas.**
- 2 mol de agua: 2 × 6,022 × 10²³ = **1,204 × 10²⁴ moléculas**.
- 1 g de agua: primero a moles, 1 / 18 = 0,0556 mol; luego 0,0556 × 6,022 × 10²³ = **3,35 × 10²² moléculas**.

### En planta: kilos y kilomoles
En un reactor se cargan kilos. Si divides **kilos** entre la masa molar, el resultado sale en **kilomoles** (*kilomole*, kmol). Un kilomol son 1000 mol. La masa molar en g/mol es el mismo número que en kg/kmol: el tolueno tiene 92 g/mol, o sea, 92 kg/kmol.

**Carga 1.** La hoja pide 250 kg de tolueno. 250 / 92 = **2,717 kmol**, es decir, 2717 mol.

**Carga 2.** 120 kg de ácido sulfúrico puro. 120 / 98 = **1,224 kmol**.

**Carga 3.** 75,5 kg de paracetamol. 75,5 / 151 = **0,500 kmol**.

Y al revés: si la hoja te da kilomoles, multiplicas por la masa molar y te salen kilos. 6,25 kmol de NaOH son 6,25 × 40 = 250 kg.

Con kilomoles se calculan los equivalentes de las cargas («El mol: contar moléculas pesando») y lo que reacciona y se forma («Ecuaciones químicas y estequiometría», en el nivel 2). Aquí solo practicas el paso a moles.

### Composición en masa: cuánto pesa cada elemento
La **composición en masa** (*mass percent composition*) dice qué parte del peso de un compuesto es de cada elemento:

> % del elemento = (masa de ese elemento en un mol / masa molar) × 100

**El cloro en la sal, NaCl.** En un mol hay 35,5 g de cloro y el mol pesa 58,5 g. 35,5 / 58,5 × 100 = **60,7 %**. En un saco de 100 kg de sal hay 60,7 kg de cloro.

**El nitrógeno en el paracetamol, C₈H₉NO₂.** Un átomo de N: 14 g en un mol de 151 g. 14 / 151 × 100 = **9,27 %**.

### La fórmula empírica, solo como idea
El laboratorio puede hacer un **análisis elemental** (*elemental analysis*): quema una muestra y mide qué porcentaje es carbono, hidrógeno, oxígeno o nitrógeno. Con eso se saca la proporción de átomos, que es la **fórmula empírica** (*empirical formula*). Ejemplo: un compuesto da 40,0 % de C, 6,7 % de H y 53,3 % de O.

1. Imagina 100 g: hay 40,0 g de C, 6,7 g de H y 53,3 g de O.
2. Pasa a moles: C 40,0 / 12 = 3,33; H 6,7 / 1 = 6,7; O 53,3 / 16 = 3,33.
3. Divide por el más pequeño: C 1; H 2,01, o sea 2; O 1.
4. Fórmula empírica: **CH₂O**.

La fórmula empírica da la proporción, no el tamaño de la molécula. Si además se sabe que la masa molar es 60 g/mol, como el ácido acético, la molécula es el doble de CH₂O (que pesa 30): C₂H₄O₂. Es una cuenta de laboratorio, no de planta.

### Líquidos: del volumen a la masa y a los moles
Si un líquido se carga por litros (caudalímetro o mirilla graduada), son dos pasos:

> masa = densidad × volumen  y después  moles = masa / masa molar

La densidad ya la viste en «Densidad: de litros a kilos». Las de estos ejemplos son las de esa lección y las de las fichas de seguridad de la app, a 20 °C.

**Ejemplo 1. 500 L de metanol** (densidad 0,79 kg/L, M = 32). Masa: 500 × 0,79 = 395 kg. Moles: 395 / 32 = **12,34 kmol**.

**Ejemplo 2. 50 L de ácido sulfúrico concentrado al 98 %** (densidad 1,84 kg/L). Masa de la disolución: 50 × 1,84 = 92 kg. Pero solo el 98 % es ácido: 92 × 0,98 = 90,16 kg. Moles: 90,16 / 98 = **0,920 kmol**. Si te olvidas de la riqueza, te salen 0,939 kmol: un 2 % de más.

**Ejemplo 3. Tolueno por el caudalímetro.** El totalizador marca 1200 L (densidad 0,87 kg/L, M = 92). Masa: 1200 × 0,87 = 1044 kg. Moles: 1044 / 92 = **11,35 kmol**.

La densidad cambia con la temperatura: si se carga por volumen, la hoja dice qué densidad usar.

### Moles en los gases: P · V = n · R · T
Un gas no se pesa: se miden su presión, su volumen y su temperatura, y juntas dicen cuántos moles hay. Es la **ecuación de los gases ideales** (*ideal gas law*):

> P · V = n · R · T

- **P** es la presión **absoluta**, en pascales (Pa). 1 bar = 100000 Pa.
- **V** es el volumen del gas, en metros cúbicos (m³). Un metro cúbico son 1000 litros.
- **n** son los moles de gas.
- **T** es la temperatura **absoluta**, en kelvin (K). El real decreto la relaciona así con la de grados Celsius: T = t + 273,15. A 20 °C, T = 293,15 K.
- **R** es la **constante de los gases** (*gas constant*): 8,314 J/(mol·K). Un julio es un pascal por metro cúbico, así que con Pa y m³ las unidades cuadran solas.

Despejando: **n = P · V / (R · T)**. «Ideal» quiere decir que se toma el gas como si sus moléculas no se estorbaran. A las presiones de un reactor el error es pequeño; en una botella a 200 bar, no tanto.

**El volumen molar.** ¿Cuánto ocupa un mol de gas a 0 °C y 1 atmósfera? El real decreto dice que la atmósfera normal son 101325 Pa. Con V = n · R · T / P: 1 × 8,314 × 273,15 / 101325 = 0,02241 m³ = **22,4 L**. Es el volumen molar (*molar volume*), igual para cualquier gas ideal. A 1 bar en lugar de 1 atm salen 22,7 L, y a 20 °C y 1 atm, 24,1 L. El real decreto avisa de que hoy los datos se refieren a 1 bar y antes de 1982 a la atmósfera normal: mira siempre las condiciones de un dato.

**Gas 1. Nitrógeno en el espacio de cabeza de un reactor.** Por encima del líquido quedan 2 m³ de gas (valor de ejemplo). El manómetro marca 0,5 bar g y la temperatura es 25 °C.
1. Presión absoluta: 0,5 + 1 = 1,5 bar a = 150000 Pa (atmósfera redondeada a 1 bar).
2. Temperatura absoluta: 25 + 273,15 = 298,15 K.
3. n = 150000 × 2 / (8,314 × 298,15) = **121 mol** de nitrógeno.
4. Si lo quieres en masa: el N₂ tiene M = 28 g/mol, así que 121 × 28 = 3388 g, unos **3,4 kg**.

**Gas 2. El gas que desprende una reacción.** Una etapa desprende 10 mol de CO₂ (valor de ejemplo) que salen por el venteo a 20 °C y 1 atm. V = 10 × 8,314 × 293,15 / 101325 = 0,2405 m³ = **240 L**. Pesa solo 10 × 44 = 440 g, pero ocupa como un bidón grande: por eso el venteo debe estar libre cuando una reacción da gas.

**Gas 3. Calentar un recipiente cerrado.** Un depósito cerrado, con solo nitrógeno dentro, está a 0,2 bar g (1,2 bar a) a 20 °C. Se calienta a 80 °C. Ni los moles ni el volumen cambian, así que la presión crece en la misma proporción que la temperatura absoluta:

> P₂ = P₁ × T₂ / T₁ = 1,2 × 353,15 / 293,15 = **1,45 bar a**, o sea, 0,45 bar g.

Si hubieras usado grados Celsius, 1,2 × 80 / 20 = 4,8 bar a: cuatro veces más, y falso. Es la misma ecuación que la ley de Boyle de «Nitrógeno, aire comprimido y vacío a fondo», solo que allí se deja fija la temperatura y aquí el volumen. Un aviso: esta cuenta es solo para el gas. Si dentro hay disolvente, al calentar también se evapora y la presión sube mucho más; eso se ve en «El reactor a fondo».

### Concentraciones: todas las formas
La **concentración** (*concentration*) dice cuánto soluto hay en una cantidad de disolución. La lección «Disoluciones y concentración» explica las diluciones y la riqueza de los productos comerciales; aquí tienes todas las formas con un ejemplo de cada una.

| Forma | Qué significa | Ejemplo resuelto |
|---|---|---|
| **Molaridad** (*molarity*), mol/L | Moles de soluto por litro de disolución | 40 kg de NaOH (1 kmol) en 500 L de disolución: 1000 / 500 = **2 mol/L** |
| **% en masa** (% m/m, *w/w*) | Gramos de soluto en 100 g de disolución | 20 kg de sal en 80 kg de agua: 20 / 100 × 100 = **20 % m/m** |
| **% masa por volumen** (% m/v, *w/v*) | Gramos de soluto en 100 mL de disolución | 25 g en 500 mL: 25 / 500 × 100 = **5 % m/v** |
| **% en volumen** (% v/v) | Mililitros de soluto en 100 mL de disolución | 70 L de etanol con agua hasta 100 L: **70 % v/v** |
| **Gramos por litro** (g/L) | Gramos de soluto en un litro | 15 kg en 600 L: 15000 / 600 = **25 g/L** |
| **Partes por millón** (ppm) | Partes de soluto por cada millón de partes | 1 ppm en masa = 1 mg por kg |

Tres apuntes:

- En el % m/m se divide por la **disolución entera**, soluto más disolvente: 20 / (20 + 80), no 20 / 80.
- En el % v/v, al mezclar etanol y agua los volúmenes no se suman exactos. Por eso se dice «hasta 100 L» y no «más 30 L de agua».
- El real decreto define ppm como 10⁻⁶ y pide decir siempre de qué magnitud se habla. «ppm en masa» y «ppm en volumen», que se usa en gases, no son lo mismo.

**Las ppm en un principio activo.** El disolvente que queda en el producto seco se da en ppm en masa. La guía ICH Q3C (versión R8) fija para el metanol un límite de 3000 ppm. En 50 kg de producto, 3000 mg/kg × 50 kg = 150000 mg = **150 g** de metanol como máximo. Para los disolventes de la clase 3, los de baja toxicidad, la misma guía considera aceptables sin más justificación 5000 ppm, que es el 0,5 %: para pasar de ppm a %, divide entre 10000.

### De % en masa a mol/L
Muchos reactivos vienen en % m/m, pero a veces te piden mol/L. Hace falta la densidad. Método: piensa en un litro.

1. Lo que pesa un litro: densidad × 1000.
2. Lo que de eso es soluto: por la riqueza.
3. A moles: entre la masa molar.

**Sosa al 50 %** (densidad 1,52 kg/L según la ficha de seguridad de la app). Un litro pesa 1520 g; la mitad es NaOH: 760 g; 760 / 40 = **19,0 mol/L**. Para cargar 1 kmol de NaOH harían falta 1000 / 19 = 52,6 L de esa sosa.

**Ácido clorhídrico al 35 %** (densidad 1,17 kg/L según la ficha de la app; el de tu planta puede ir al 37 % y entonces su densidad es otra, la de su ficha). HCl: M = 1 + 35,5 = 36,5. Un litro pesa 1170 g; 1170 × 0,35 = 409,5 g de HCl; 409,5 / 36,5 = **11,2 mol/L**.

### Errores típicos
- **Confundir gramos con moles.** 100 kg de NaOH son 2,5 kmol; 100 kg de paracetamol son 0,66 kmol. Mismo peso, distinto número de moléculas.
- **Mezclar gramos y kilos.** Kilos entre g/mol dan kilomoles, no moles.
- **Olvidar pasar a kelvin.** En P · V = n · R · T, en grados Celsius a 0 °C saldría una división por cero.
- **Mezclar litros y metros cúbicos.** Con R = 8,314, el volumen va en m³. 2000 L son 2 m³; si pones 2000, te salen mil veces más moles.
- **Usar presión manométrica.** En el gas 1, con 0,5 bar g en vez de 1,5 bar a salen 40 mol en vez de 121: un tercio.

Los números de esta lección son para aprender a hacer las cuentas. En planta manda siempre el procedimiento vigente (SOP): las masas molares, densidades, riquezas y concentraciones que valen son las de tu hoja de producción y los certificados de tus materiales.
`,
  plant: `
Turno de mañana en el reactor ficticio R-212. La etapa del intermedio ficticio KT-7 empieza así en la hoja: *«Cargar 600 L de metanol por FT-212. Cargar 250 kg de tolueno por báscula. Densidad de cálculo del metanol: 0,79 kg/L.»*

Antes de empezar haces las cuentas para saber qué esperar. Metanol: 600 × 0,79 = 474 kg, que son 474 / 32 = 14,8 kmol. Tolueno: 250 / 92 = 2,72 kmol. Anotas en tu hoja los kilos de metanol que corresponden a los litros, para que la verificadora los compare.

El totalizador de FT-212 se para en 601 L. Lo anotas tal cual, con la unidad, y la verificadora lo firma.

Después la hoja pide una disolución de sosa al 50 % del depósito D-230 y da la concentración como 19 mol/L. Compruebas que cuadra: un litro pesa 1,52 kg; la mitad, 760 g, es NaOH; 760 / 40 = 19 mol/L. Cuadra.

Al terminar, el reactor queda cerrado con nitrógeno a 0,3 bar g y 22 °C, y la hoja avisa: *«No superar 1,0 bar g al calentar a reflujo.»* Tu compañero dice que, como pasarás de 22 a 64 °C, la presión se triplicará. Le enseñas la cuenta con kelvin: 1,3 × 337,15 / 295,15 = 1,48 bar a, unos 0,5 bar g solo por el gas. Lo que de verdad hará subir la presión es el vapor del metanol, y para eso está la consigna de la hoja y la alarma del sistema de control.
`,
  batchRecord: `
En la hoja de producción (*batch record*) los moles aparecen sobre todo en la lista de materiales y en las cargas. Verás:

- **Lista de materiales** con columnas de masa molar (g/mol), cantidad teórica (kg), kilomoles (kmol) y equivalentes.
- **Carga por peso**: la masa real de la báscula, con su unidad, y la firma de quien verifica.
- **Carga por volumen**: los litros leídos en el caudalímetro o la mirilla, la densidad de cálculo que da la hoja y los kilos que resultan.
- **Riqueza** de los ácidos y bases según su certificado, por ejemplo NaOH 50 % m/m, y la cantidad de sustancia pura que se calcula con ella.
- **Concentración de las disoluciones** que se preparan, con su forma completa: mol/L, % m/m, % m/v, g/L o ppm.
- **Presiones** siempre con su tipo, bar g o bar a, y **temperaturas** en °C. Si hay que hacer una cuenta de gases, se pasa a absoluta y a kelvin aparte.
- **Resultados de análisis** como disolvente residual o agua en ppm o en %, con su límite al lado.

Si una masa molar, una densidad o una riqueza de la hoja no coincide con la del certificado o la etiqueta, no se corrige por tu cuenta: se para y se avisa.
`,
  terms: [
    { es: "Mol", en: "Mole (mol)", def: "Unidad de cantidad de sustancia: exactamente 6,022 140 76 × 10²³ entidades elementales, según el Real Decreto 2032/2009." },
    { es: "Constante de Avogadro", en: "Avogadro constant (N_A)", def: "Número de entidades por mol: 6,022 140 76 × 10²³ mol⁻¹, un valor fijado por definición." },
    { es: "Entidad elemental", en: "Elementary entity", def: "Lo que se cuenta en un mol: un átomo, una molécula, un ion, un electrón u otra partícula especificada." },
    { es: "Masa molar", en: "Molar mass (M)", def: "Masa de un mol de una sustancia, en g/mol; se calcula sumando las masas atómicas de su fórmula." },
    { es: "Kilomol", en: "Kilomole (kmol)", def: "Mil moles. Kilos divididos entre la masa molar dan kilomoles." },
    { es: "Composición en masa", en: "Mass percent composition", def: "Porcentaje del peso de un compuesto que corresponde a cada elemento." },
    { es: "Fórmula empírica", en: "Empirical formula", def: "Proporción más sencilla de átomos de un compuesto, obtenida del análisis elemental." },
    { es: "Ecuación de los gases ideales", en: "Ideal gas law", def: "P · V = n · R · T, que relaciona presión absoluta, volumen, moles y temperatura absoluta de un gas." },
    { es: "Constante de los gases", en: "Gas constant (R)", def: "8,314 J/(mol·K); con la presión en Pa y el volumen en m³ da los moles directamente." },
    { es: "Temperatura absoluta", en: "Absolute (thermodynamic) temperature", def: "Temperatura en kelvin: los grados Celsius más 273,15." },
    { es: "Volumen molar", en: "Molar volume", def: "Volumen que ocupa un mol de gas ideal: unos 22,4 L a 0 °C y 1 atm." },
    { es: "Molaridad", en: "Molarity (mol/L)", def: "Moles de soluto por litro de disolución." },
    { es: "Partes por millón", en: "Parts per million (ppm)", def: "Una parte de cada millón; en masa, 1 ppm = 1 mg/kg. Hay que decir si es en masa o en volumen." },
    { es: "Riqueza", en: "Assay / purity", def: "Porcentaje en masa de la sustancia pura en un producto comercial, como la sosa al 50 %." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Calcula la masa molar del ácido acetilsalicílico, C₉H₈O₄, con C = 12, H = 1 y O = 16.",
      answer: 180,
      tolerance: 0.005,
      unit: "g/mol",
      explain: "C: 9 × 12 = 108. H: 8 × 1 = 8. O: 4 × 16 = 64. Suma: 108 + 8 + 64 = 180 g/mol.",
    },
    {
      kind: "number",
      q: "¿Cuántos moles hay en 117 g de cloruro de sodio, NaCl (Na = 23; Cl = 35,5)?",
      answer: 2,
      tolerance: 0.01,
      unit: "mol",
      explain: "M = 23 + 35,5 = 58,5 g/mol. n = 117 / 58,5 = 2 mol.",
    },
    {
      kind: "number",
      q: "La hoja pide cargar 368 kg de tolueno, C₇H₈ (C = 12; H = 1). ¿Cuántos kilomoles son?",
      answer: 4,
      tolerance: 0.01,
      unit: "kmol",
      explain: "M = 7 × 12 + 8 × 1 = 92 kg/kmol. 368 / 92 = 4 kmol.",
    },
    {
      kind: "number",
      q: "¿Qué porcentaje en masa del ácido sulfúrico, H₂SO₄, es azufre? Usa H = 1, S = 32 y O = 16.",
      answer: 32.65,
      tolerance: 0.01,
      unit: "% de S",
      explain: "M = 2 + 32 + 64 = 98 g/mol. % de S = 32 / 98 × 100 = 32,65 %.",
    },
    {
      kind: "number",
      q: "El espacio de cabeza de un reactor tiene 3 m³ de nitrógeno. El manómetro marca 1 bar g (atmósfera = 1 bar, 1 bar = 100000 Pa) y la temperatura es 27 °C. Con R = 8,314 J/(mol·K), ¿cuántos moles de nitrógeno hay?",
      answer: 240.4,
      tolerance: 0.01,
      unit: "mol",
      explain: "P = 1 + 1 = 2 bar a = 200000 Pa. T = 27 + 273,15 = 300,15 K. n = 200000 × 3 / (8,314 × 300,15) = 240,4 mol.",
    },
    {
      kind: "number",
      q: "Se disuelven 30 kg de NaOH (M = 40 g/mol) y se completa con agua hasta 300 L de disolución. ¿Cuál es la molaridad?",
      answer: 2.5,
      tolerance: 0.01,
      unit: "mol/L",
      explain: "30 / 40 = 0,75 kmol = 750 mol. 750 / 300 = 2,5 mol/L.",
    },
    {
      kind: "number",
      q: "El ácido sulfúrico al 98 % m/m tiene una densidad de 1,84 kg/L y M = 98 g/mol. ¿Cuál es su concentración en mol/L?",
      answer: 18.4,
      tolerance: 0.01,
      unit: "mol/L",
      explain: "Un litro pesa 1840 g; el 98 % es ácido: 1840 × 0,98 = 1803,2 g; 1803,2 / 98 = 18,4 mol/L.",
    },
    {
      kind: "number",
      q: "Un depósito cerrado con solo nitrógeno está a 1,0 bar a y 20 °C. Se calienta a 60 °C sin que cambien el volumen ni los moles. ¿A qué presión absoluta llega, en bar a?",
      answer: 1.14,
      tolerance: 0.01,
      unit: "bar a",
      explain: "En kelvin: 293,15 K y 333,15 K. P₂ = 1,0 × 333,15 / 293,15 = 1,14 bar a. Con grados Celsius habría salido el triple, que es falso.",
    },
    {
      kind: "choice",
      q: "Un compañero dice que 100 kg de NaOH (M = 40) y 100 kg de paracetamol (M = 151) contienen las mismas moléculas, porque pesan lo mismo. ¿Qué le contestas?",
      options: [
        "Tiene razón: a igual peso, igual número de moléculas siempre",
        "Tiene razón solo si los dos están a la misma temperatura",
        "Hay más de paracetamol, porque su molécula es más grande",
        "Hay más de NaOH: 2,5 kmol frente a 0,66 kmol de paracetamol",
      ],
      answer: 3,
      explain: "Los moles son masa entre masa molar: 100 / 40 = 2,5 kmol de NaOH y 100 / 151 = 0,66 kmol de paracetamol. Cada molécula de paracetamol pesa más, así que en el mismo peso caben menos.",
    },
    {
      kind: "choice",
      q: "Para calcular los moles de nitrógeno de un reactor con P · V = n · R · T, el manómetro marca 0,5 bar g. ¿Qué presión pones en la fórmula?",
      options: [
        "0,5 bar, que es lo que marca el manómetro de la tapa",
        "La absoluta: 0,5 + 1 = 1,5 bar a, pasada a 150000 Pa",
        "La absoluta, 1,5 bar a, escrita tal cual en bar en la fórmula",
        "Da igual cuál, porque luego la temperatura va en grados Celsius",
      ],
      answer: 1,
      explain: "La ecuación pide presión absoluta y, con R = 8,314, en pascales: 1,5 bar a = 150000 Pa. Con la manométrica salen un tercio de los moles, y la temperatura va en kelvin, no en grados Celsius.",
    },
  ],
};
