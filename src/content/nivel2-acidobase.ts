import type { Lesson } from "./types";

export const acidoBaseAvanzadoAFondo: Lesson = {
  slug: "acido-base-avanzado-a-fondo",
  level: 2,
  order: 11.5,
  title: "Equilibrios ácido-base en profundidad",
  titleEn: "Acid-base equilibria in depth",
  minutes: 40,
  summary:
    "Arrhenius frente a Brønsted-Lowry, Ka y Kb y por qué Ka·Kb = Kw, el grado de disociación calculado sin aproximaciones con la ecuación de segundo grado, por qué el acetato sódico da pH básico y el cloruro amónico ácido, ácidos con varios protones y sustancias anfóteras, tampones con Henderson-Hasselbalch y su capacidad, y cómo el pH decide si una amina o un ácido va a la fase acuosa o a la orgánica en una extracción de planta.",
  body: `
En «Ácidos, bases y pH a fondo» viste el pH, fuertes y débiles, el pKa y la fórmula rápida para un ácido débil. Aquí va el siguiente escalón, el que pide la Química de 2.º de Bachillerato (Real Decreto 243/2022). Qué es un equilibrio está en «Equilibrio químico a fondo»; las curvas de valoración, en «Valoraciones ácido-base a fondo»; la extracción en el reactor, en «Extracción líquido-líquido a fondo». Todo es a 25 °C y en agua; lo marcado como «valor de ejemplo» es para practicar.

### Dos definiciones: Arrhenius y Brønsted-Lowry
La definición más antigua es la de **Arrhenius** (*Arrhenius acid and base*). El libro de instrumentación de Tony Kuphaldt la usa tal cual: un **ácido** es una sustancia que en agua produce iones H⁺; una base (él la llama cáustico o álcali) produce iones hidróxido, OH⁻. Funciona bien con el HCl o la sosa:

> HCl da H⁺ + Cl⁻  NaOH da Na⁺ + OH⁻

Tiene dos límites: **el amoníaco y las aminas no llevan OH⁻** y, sin embargo, son bases; y **exige agua**, cuando una amina en tolueno con cloruro de hidrógeno precipita su clorhidrato sin agua por medio.

La definición de **Brønsted-Lowry**, que ya conoces, lo resuelve: ácido es quien **da** un protón y base quien lo **acepta**, haya agua o no. El amoníaco es base porque acepta el protón del agua:

> NH₃ + H₂O ⇌ NH₄⁺ + OH⁻

El OH⁻ lo deja el agua al perder su protón. Toda base de Arrhenius es base de Brønsted, pero no al revés: desde aquí usamos Brønsted.

**Pares conjugados** (*conjugate acid-base pairs*). Cuando un ácido suelta su protón queda su base conjugada; cuando una base lo acepta queda su ácido conjugado. Cada par se diferencia en un solo protón: CH₃COOH y CH₃COO⁻ (ácido acético y acetato), NH₄⁺ y NH₃ (amonio y amoníaco), H₂O y OH⁻, H₃O⁺ y H₂O.

### Ka y Kb, escritas con calma
Para un ácido débil cualquiera, HA, en agua:

> HA + H₂O ⇌ H₃O⁺ + A⁻  Ka = [H₃O⁺]·[A⁻] / [HA]

El agua no aparece en la cuenta: hay tanta que su concentración casi no cambia («Equilibrio químico a fondo»). Para una base débil, B:

> B + H₂O ⇌ BH⁺ + OH⁻  Kb = [BH⁺]·[OH⁻] / [B]

Kb es la **constante de basicidad** (*base dissociation constant*), y pKb = −log Kb.

**La pieza clave: Ka·Kb = Kw.** Toma el ácido acético y su base conjugada, el acetato. El acetato también es una base débil:

> CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻  Kb = [CH₃COOH]·[OH⁻] / [CH₃COO⁻]

Multiplica la Ka del acético por la Kb del acetato. El acético y el acetato aparecen arriba en una y abajo en la otra, y se tachan. Queda:

> Ka × Kb = [H₃O⁺] × [OH⁻] = Kw = 1,0 × 10⁻¹⁴

Con logaritmos: **pKa + pKb = 14**. Cuanto más fuerte es el ácido, más débil es su base conjugada: el HCl deja un Cl⁻ que no capta protones; el acético deja un acetato con algo de fuerza como base.

**Ejercicio resuelto 1.** Usaremos dos valores de libro de texto como valores de ejemplo (los mismos de las demás lecciones de la app): pKa del ácido acético 4,76 y pKa del ion amonio, NH₄⁺, 9,25.

| Par | pKa del ácido | pKb de la base | Kb de la base |
|---|---|---|---|
| CH₃COOH / CH₃COO⁻ | 4,76 | 14 − 4,76 = 9,24 | 10⁻⁹·²⁴ = 5,75 × 10⁻¹⁰ |
| NH₄⁺ / NH₃ | 9,25 | 14 − 9,25 = 4,75 | 10⁻⁴·⁷⁵ = 1,78 × 10⁻⁵ |

De una amina se suele dar el pKa de su forma con protón (el NH₄⁺, no el NH₃); con esta cuenta pasas de uno a otro.

### El grado de disociación, sin trampas
El **grado de disociación** (*degree of dissociation*), α, es la fracción de moléculas de ácido que han soltado su protón: α = 0,05 es un 5 %. Si la concentración inicial es c, en el equilibrio hay:

| | HA | H₃O⁺ | A⁻ |
|---|---|---|---|
| Al principio | c | casi 0 | 0 |
| En el equilibrio | c·(1 − α) | c·α | c·α |

Sustituyendo en Ka y simplificando una c:

> Ka = c·α² / (1 − α)

En «Ácidos, bases y pH a fondo» usaste el atajo de suponer que (1 − α) vale 1. Sin atajo, se multiplica en cruz y se ordena:

> c·α² + Ka·α − Ka = 0

Es una **ecuación de segundo grado** (*quadratic equation*), la misma que resolviste en el exceso de etanol de «Equilibrio químico a fondo». Su solución con sentido (la positiva) es:

> α = [−Ka + raíz de (Ka² + 4·Ka·c)] / (2·c)

**Ejercicio resuelto 2. Ácido acético 0,001 mol/L.** Ka = 10⁻⁴·⁷⁶ = 1,738 × 10⁻⁵.

1. Ka² = 3,020 × 10⁻¹⁰.
2. 4·Ka·c = 4 × 1,738 × 10⁻⁵ × 0,001 = 6,951 × 10⁻⁸.
3. Suma: 6,982 × 10⁻⁸. Raíz: 2,642 × 10⁻⁴.
4. Restar Ka: 2,642 × 10⁻⁴ − 0,174 × 10⁻⁴ = 2,469 × 10⁻⁴.
5. Dividir entre 2·c = 0,002: **α = 0,1234, un 12,3 %**.
6. [H₃O⁺] = c·α = 1,234 × 10⁻⁴ mol/L. **pH = 3,91**.

Con el atajo saldría [H₃O⁺] = raíz de (Ka·c) = 1,318 × 10⁻⁴, α = 13,2 % y pH 3,88. Compara:

| Concentración del acético | α exacto | α con atajo | pH exacto | pH con atajo |
|---|---|---|---|---|
| 0,1 mol/L | 1,31 % | 1,32 % | 2,88 | 2,88 |
| 0,01 mol/L | 4,08 % | 4,17 % | 3,39 | 3,38 |
| 0,001 mol/L | 12,3 % | 13,2 % | 3,91 | 3,88 |

**Cuanto más diluido, más disociado.** Y el atajo vale mientras α es pequeño; cuando pasa de unos pocos por ciento, hay que resolver la ecuación entera.

**Ejercicio resuelto 3. El camino inverso: sacar Ka de una medida.** En el laboratorio se prepara un ácido desconocido 0,020 mol/L y el pHmetro marca 3,00 (valores de ejemplo). [H₃O⁺] = 10⁻³ mol/L, así que α = 0,001 / 0,020 = 5,0 %. Quedan sin disociar 0,020 − 0,001 = 0,019 mol/L.

> Ka = (0,001 × 0,001) / 0,019 = 5,26 × 10⁻⁵  pKa = 4,28

**Ejercicio resuelto 4. Una base débil: amoníaco 0,05 mol/L.** Con Kb = 1,778 × 10⁻⁵, la misma ecuación da [OH⁻] = 9,34 × 10⁻⁴ mol/L (α = 1,87 %). pOH = 3,03 y **pH = 14 − 3,03 = 10,97**.

### Hidrólisis de sales: cuando la sal no es neutra
Kuphaldt explica que el cloruro de sodio o el de potasio no cambian el pH del agua: sus iones no aportan ni quitan H⁺. No vale para todas las sales. Las fichas internacionales de seguridad química (ICSC) de la OIT lo dicen así: la disolución en agua del **acetato de sodio** «es una base débil» (ICSC 0565) y la del **cloruro de amonio** «es un ácido débil» (ICSC 1051).

La razón está en Ka·Kb = Kw. Al disolverse, la sal se separa en sus iones. Si uno de ellos es la pareja conjugada de un ácido o una base débil, reacciona con el agua. A esto se le llama **hidrólisis** (*hydrolysis*) de la sal.

| Sal que viene de | Ejemplo | Ion que reacciona con el agua | pH de la disolución |
|---|---|---|---|
| Ácido fuerte + base fuerte | NaCl, KCl | Ninguno | Neutro, 7 |
| Ácido débil + base fuerte | Acetato de sodio | El acetato capta protones y deja OH⁻ | Básico |
| Ácido fuerte + base débil | Cloruro de amonio, clorhidrato de una amina | El NH₄⁺ cede protones | Ácido |
| Ácido débil + base débil | Acetato de amonio | Los dos; gana el más fuerte | Depende de Ka y Kb |

**Ejercicio resuelto 5. Acetato de sodio 0,10 mol/L.** El Na⁺ no hace nada. El acetato es una base con Kb = 5,75 × 10⁻¹⁰:

> CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻

Kb es tan pequeña que aquí el atajo y la ecuación completa dan lo mismo: [OH⁻] = raíz de (5,75 × 10⁻¹⁰ × 0,10) = 7,59 × 10⁻⁶ mol/L. pOH = 5,12 y **pH = 8,88**. Solo un 0,008 % del acetato ha reaccionado, pero basta para mover el pH casi dos unidades. Es la misma razón por la que la equivalencia del acético con sosa cae en pH 8,73 en «Valoraciones ácido-base a fondo»: allí el acetato está a 0,05 mol/L, y con esta cuenta sale justo 8,73.

**Ejercicio resuelto 6. Cloruro de amonio 0,10 mol/L.** El Cl⁻ no hace nada. El NH₄⁺ es un ácido con Ka = 10⁻⁹·²⁵ = 5,62 × 10⁻¹⁰:

> NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺

[H₃O⁺] = raíz de (5,62 × 10⁻¹⁰ × 0,10) = 7,50 × 10⁻⁶ mol/L. **pH = 5,13**.

**En planta**: el clorhidrato de una amina se comporta como el cloruro de amonio (disolución ligeramente ácida) y la sal de sodio de un ácido carboxílico, como el acetato (ligeramente básica). Unas aguas madres que no dan pH 7 pueden deberlo solo a la sal disuelta.

### Ácidos con varios protones
Un **ácido poliprótico** (*polyprotic acid*) tiene más de un protón que ceder: el sulfúrico tiene dos y el fosfórico, tres. Los suelta uno detrás de otro, cada paso con su constante: Ka1 mayor que Ka2, y esta mayor que Ka3. Arrancar un protón positivo a algo que ya tiene carga negativa cuesta más.

**Ejercicio resuelto 7. Qué forma domina a cada pH.** Un diácido ficticio H₂X tiene pKa1 = 3,0 y pKa2 = 8,0 (valores de ejemplo). Puede estar como H₂X, HX⁻ o X²⁻. Calculado con las dos constantes:

| pH | H₂X | HX⁻ | X²⁻ |
|---|---|---|---|
| 1 | 99,0 % | 1,0 % | 0 % |
| 3 (= pKa1) | 50 % | 50 % | 0 % |
| 5,5 | 0,3 % | 99,4 % | 0,3 % |
| 8 (= pKa2) | 0 % | 50 % | 50 % |
| 10 | 0 % | 1,0 % | 99,0 % |

La regla de la tabla: **en cada pKa, mitad y mitad; dos unidades más allá, un 99 % de una forma**. Es la regla de dos unidades de «Extracción líquido-líquido a fondo», aplicada a cada escalón.

### Anfóteros: los que hacen de ácido y de base
Una sustancia **anfótera** (*amphoteric*, también *amphiprotic*) puede dar un protón o aceptarlo. La más común es el agua. El HX⁻ de la tabla también: puede perder su segundo protón o recuperar el primero. Igual el bicarbonato, HCO₃⁻, y el dihidrogenofosfato, H₂PO₄⁻.

Si disuelves la sal NaHX, la cuenta da un pH muy cercano a la media de los dos pKa: (3,0 + 8,0) / 2 = **5,5**. Para el diácido del ejemplo, a 0,1 mol/L, la cuenta completa da 5,50.

**Principios activos anfóteros.** Algunas moléculas tienen a la vez un grupo ácido (un carboxílico) y uno básico (una amina). Con un carboxílico de pKa 4,0 y una amina cuya forma con protón tiene pKa 9,0 (valores de ejemplo):

| pH | Con carga positiva | Sin carga neta | Con carga negativa |
|---|---|---|---|
| 2 | 99,0 % | 1,0 % | 0 % |
| 6,5 | 0,3 % | 99,4 % | 0,3 % |
| 11 | 0 % | 1,0 % | 99,0 % |

La forma «sin carga neta» puede tener las dos cargas a la vez, una positiva y otra negativa, y se llama **zwitterión** (*zwitterion*). El pH en el que la molécula no tiene carga neta es su **punto isoeléctrico** (*isoelectric point*), aquí (4,0 + 9,0) / 2 = 6,5. Siguiendo la regla de que lo que tiene carga prefiere el agua, cerca de ese pH estas moléculas suelen ser menos solubles en agua, y ajustando el pH a ese valor se pueden precipitar. Si eso vale para tu producto lo dice su desarrollo, no la cuenta: la guía ICH M9 pide medir la solubilidad de un principio activo a varios pH, incluido el de menor solubilidad.

### Tampones: cómo funcionan y cuánto aguantan
Kuphaldt define el **tampón** (*buffer solution*) como una disolución preparada para mantener un pH estable incluso con una pequeña contaminación. Por eso con tampones se calibra el pHmetro («pH y conductividad a fondo»).

**De dónde sale Henderson-Hasselbalch.** Despeja [H₃O⁺] de Ka: [H₃O⁺] = Ka·[HA] / [A⁻]. Toma −log a los dos lados:

> pH = pKa + log ([A⁻] / [HA])

Es la ecuación de **Henderson-Hasselbalch**. Solo vale cuando hay cantidades apreciables de las dos formas, que es justo lo que tiene un tampón.

**Ejercicio resuelto 8. Preparar un tampón de pH 5,00.** Se quiere 1 L de tampón acético-acetato con 0,10 mol en total (valores de ejemplo).

1. log ([A⁻]/[HA]) = 5,00 − 4,76 = 0,24.
2. [A⁻]/[HA] = 10⁰·²⁴ = 1,74.
3. Si HA + A⁻ = 0,10 mol: HA = 0,10 / 2,74 = 0,0365 mol y A⁻ = 0,0635 mol.
4. Cómo se hace en la práctica: se parte de 0,10 mol de ácido acético y se añaden 0,0635 mol de NaOH, que convierten en acetato exactamente esa parte.

La guía ICH M9 pide medir la solubilidad de un principio activo al menos a pH 1,2, 4,5 y 6,8, con tampones de farmacopea, y medir el pH **después** de añadir el principio activo, ajustándolo si hace falta: el propio producto puede mover el pH del tampón.

**La capacidad del tampón** (*buffer capacity*). Un tampón no es infinito: aguanta mientras le quede la forma que neutraliza lo que entra. Depende de dos cosas:

- **Cuánto tampón hay.** Más concentración, más capacidad.
- **La proporción entre las dos formas.** Aguanta más cuando están mitad y mitad, es decir, cuando pH = pKa. En la práctica, un tampón se usa entre pKa − 1 y pKa + 1.

**Ejercicio resuelto 9. Concentrado frente a diluido.** Dos tampones de 1 L a pH 4,76: el A con 0,10 mol de acético y 0,10 de acetato; el B, diez veces más diluido (0,010 y 0,010). A los dos se les añaden 0,005 mol de HCl, que el acetato convierte en acético.

- A: pH = 4,76 + log (0,095 / 0,105) = **4,72**.
- B: pH = 4,76 + log (0,005 / 0,015) = **4,28**.

¿Cuánto ácido aguanta cada uno antes de caer una unidad, de 4,76 a 3,76? El cociente tiene que pasar de 1 a 0,1. En el A, el acetato baja de 0,10 a 0,2 / 11 = 0,018 mol: hacen falta 0,082 mol de HCl. En el B, diez veces menos: 0,0082 mol.

**Ejercicio resuelto 10. Pasarse de la capacidad.** Al tampón A se le añade cada vez más HCl. Con la cuenta completa:

| HCl añadido (mol) | Acetato que queda (mol) | pH |
|---|---|---|
| 0 | 0,10 | 4,76 |
| 0,05 | 0,05 | 4,28 |
| 0,08 | 0,02 | 3,81 |
| 0,10 | 0 | 2,73 |
| 0,12 | 0 (sobra ácido fuerte) | 1,70 |

Mientras queda acetato el pH baja despacio; cuando se acaba, cae de golpe, como en el salto de una valoración.

### En planta: el pH decide la fase
En «Extracción líquido-líquido a fondo» tienes lo que queda en el agua tras una extracción: 1 / (1 + K × V orgánico / V acuoso), con K fijo. Con ácidos y bases no lo es: solo la forma **sin carga** pasa de verdad al orgánico; la forma con carga se queda en el agua. El reparto que se ve, llamado **coeficiente de distribución** (*distribution ratio*), D, es entonces:

> D = K de la forma sin carga × fracción sin carga

Para una amina (con pKa el de su forma con protón): fracción sin carga = 1 / (1 + 10^(pKa − pH)).
Para un ácido: fracción sin carga = 1 / (1 + 10^(pH − pKa)).

**Ejercicio resuelto 11.** La amina ficticia AM-7 tiene pKa 9,0 y K = 50 para su forma sin carga (valores de ejemplo). Se agitan volúmenes iguales de agua y acetato de etilo. Lo que queda en el agua es 1 / (1 + D):

| pH de la fase acuosa | Amina sin carga | D | Queda en el agua |
|---|---|---|---|
| 2 | 0,00001 % | 0,000005 | 100 % |
| 7 | 0,99 % | 0,495 | 66,9 % |
| 9 (= pKa) | 50 % | 25 | 3,85 % |
| 11 | 99,0 % | 49,5 | 1,98 % |
| 12 | 99,9 % | 49,95 | 1,96 % |

A pH 2 la amina está toda como sal y se queda en el agua, lejos de las impurezas neutras del disolvente. A pH 11 está casi toda libre y pasa al orgánico; subir a 12 apenas mejora y gasta más sosa. A pH 7 se queda a medias.

Si en la misma mezcla hay una impureza ácida, con pKa 4,5 y K = 20 (valores de ejemplo), a pH 11 queda en el agua un 99,999 %. A ese pH la amina va al orgánico y el ácido al agua: una separación limpia, decidida solo por el pH.

**Ejercicio resuelto 12. Cuánto ácido hace falta.** El orgánico lleva 30 kg de AM-7, de masa molar 250 g/mol (valores de ejemplo): 30000 / 250 = 120 mol. Para llevarla a 300 L de agua a pH 2, primero se da un protón a cada molécula: 120 mol de HCl. Después, para que sobren 0,01 mol/L de H₃O⁺ en 300 L, otros 3 mol. Total, unos 123 mol: 123 L de HCl 1 mol/L. Con menos, la amina se come el ácido, el pH no baja y parte sigue en el orgánico. Por eso se mide el pH de la **fase acuosa** después de agitar.

Los números de esta lección son para entender y estimar. En planta manda siempre el procedimiento vigente (SOP): reactivos, cantidades, pH, temperatura y qué fase se conserva son los de tu hoja de producción.
`,
  plant: `
Turno de mañana. En el reactor R-236 (ficticio) tienes 400 L de acetato de etilo con el intermedio ficticio AM-7, una amina, y restos de un ácido de la etapa anterior. La hoja dice: *«Cargar 300 L de agua. Ajustar con NaOH 4 M a pH 10,5–11,5 en fase acuosa, a T ≤ 25 °C. Agitar 20 min, decantar ≥ 30 min. Descargar la fase acuosa inferior a residuo de aguas básicas.»*

Antes de empezar piensas en la tabla: a pH 11 la amina está casi toda sin carga y se queda en el acetato de etilo, arriba; el ácido, ionizado, se va con el agua, abajo.

Añades la sosa por la bomba dosificadora con la camisa en frío. El primer tramo de sosa apenas mueve el pH: se la está comiendo el ácido de la etapa anterior, que hace de tampón. Luego el pH empieza a subir deprisa, como en la curva de valoración, y bajas el caudal. Paras de dosificar, agitas el tiempo de la hoja y tomas muestra de la fase acuosa. El pHmetro PH-236, calibrado esa mañana con tampones de pH 7 y 10 (los que encierran el valor a medir), marca 9,4.

No cumple. A ese pH, cerca del pKa, parte de la amina seguiría en el agua y se iría a residuo. No descargas: anotas 9,4, la hora y la temperatura, y sigues lo que la hoja prevé para un pH bajo (en este proceso, una adición más de sosa y otra medida, siempre dentro de la cantidad máxima escrita). La segunda medida da 10,9. Cumple. Decantas, descargas la fase acuosa mirando la mirilla, etiquetas el bidón de residuo y avisas al laboratorio para el control en proceso de la fase orgánica.
`,
  batchRecord: `
En la hoja de producción (*batch record*) de un lavado o una extracción con ajuste de pH verás y anotarás:

- **Reactivo de ajuste**: nombre y concentración (NaOH 4 M, HCl 1 M), lote, cantidad prevista y cantidad real cargada en kg o L, con la balanza o el caudalímetro usado.
- **Cantidad máxima**: si la hoja fija un tope de reactivo, comparar la cantidad real con ese tope; pasarlo no se decide sobre la marcha.
- **Temperatura**: máxima alcanzada durante la adición frente al límite.
- **pH de la fase acuosa**: valor real con decimales, medido tras agitar el tiempo indicado, con hora, temperatura de la muestra y firma; cada medida, aunque no cumpla, queda escrita.
- **pHmetro**: código del equipo, calibración del día con los tampones usados (pH y lote) y que encierran el valor a medir.
- **Fases**: cuál se conserva, cuál va a residuo o a otro equipo, volumen o peso de cada una y aspecto de la interfase.
- **Tampones preparados en planta**, si los hay: masas pesadas, volumen final y pH comprobado.
- **Incidencias**: pH fuera de rango, adición que no mueve el pH como se esperaba o cantidad máxima alcanzada sin llegar al pH: se anota, se para y se avisa al responsable.
`,
  terms: [
    { es: "Ácido de Arrhenius", en: "Arrhenius acid", def: "Sustancia que en agua produce iones H⁺. Su base produce iones OH⁻. No explica las bases sin OH⁻, como el amoníaco." },
    { es: "Par ácido-base conjugado", en: "Conjugate acid-base pair", def: "Dos especies que se diferencian en un solo protón, como el ácido acético y el acetato o el amonio y el amoníaco." },
    { es: "Constante de basicidad", en: "Base dissociation constant (Kb)", def: "Constante de equilibrio de una base débil con el agua. Para un par conjugado, Ka × Kb = Kw." },
    { es: "pKb", en: "pKb", def: "Menos el logaritmo de Kb. Para un par conjugado a 25 °C, pKa + pKb = 14." },
    { es: "Grado de disociación", en: "Degree of dissociation (α)", def: "Fracción de las moléculas de un ácido o una base débil que han reaccionado con el agua. Aumenta al diluir." },
    { es: "Ecuación de segundo grado", en: "Quadratic equation", def: "Ecuación con la incógnita al cuadrado; da el grado de disociación exacto sin suponer que α es pequeño." },
    { es: "Hidrólisis de una sal", en: "Salt hydrolysis", def: "Reacción con el agua de un ion de la sal que es pareja conjugada de un ácido o una base débil; hace que la disolución no sea neutra." },
    { es: "Ácido poliprótico", en: "Polyprotic acid", def: "Ácido con más de un protón que ceder, que los suelta uno detrás de otro, cada vez con más dificultad." },
    { es: "Anfótero", en: "Amphoteric (amphiprotic)", def: "Sustancia que puede dar y aceptar protones, como el agua, el bicarbonato o el HX⁻ de un diácido." },
    { es: "Zwitterión", en: "Zwitterion", def: "Molécula con una carga positiva y otra negativa a la vez, sin carga neta." },
    { es: "Punto isoeléctrico", en: "Isoelectric point", def: "pH en el que una molécula anfótera no tiene carga neta." },
    { es: "Ecuación de Henderson-Hasselbalch", en: "Henderson-Hasselbalch equation", def: "pH = pKa + log ([A⁻]/[HA]); da el pH de un tampón." },
    { es: "Capacidad del tampón", en: "Buffer capacity", def: "Cantidad de ácido o base que admite un tampón sin cambiar mucho de pH; es máxima cuando pH = pKa y crece con la concentración." },
    { es: "Coeficiente de distribución", en: "Distribution ratio (D)", def: "Reparto observado de un ácido o base entre las fases; es el coeficiente de reparto de la forma sin carga por la fracción sin carga, y cambia con el pH." },
  ],
  quiz: [
    {
      kind: "number",
      q: "El ion amonio tiene pKa 9,25 (valor de ejemplo). ¿Cuál es el pKb del amoníaco, su base conjugada, a 25 °C?",
      answer: 4.75,
      tolerance: 0.01,
      unit: "",
      explain: "Para un par conjugado, pKa + pKb = 14, porque Ka × Kb = Kw = 1,0 × 10⁻¹⁴. pKb = 14 − 9,25 = 4,75.",
    },
    {
      kind: "number",
      q: "Un ácido débil 0,040 mol/L da en el pHmetro pH 3,00 (valores de ejemplo). ¿Cuál es su grado de disociación, en %?",
      answer: 2.5,
      tolerance: 0.02,
      unit: "%",
      explain: "[H₃O⁺] = 10⁻³ mol/L, que es c·α. α = 0,001 / 0,040 = 0,025, es decir, un 2,5 %.",
    },
    {
      kind: "number",
      q: "Con el mismo dato de la pregunta anterior (ácido 0,040 mol/L, pH 3,00), ¿cuánto vale su Ka? Da el resultado multiplicado por 100000 (por ejemplo, 2,00 × 10⁻⁵ se escribe 2).",
      answer: 2.56,
      tolerance: 0.02,
      unit: "× 10⁻⁵",
      explain: "Ka = [H₃O⁺]·[A⁻]/[HA] = (0,001 × 0,001) / (0,040 − 0,001) = 10⁻⁶ / 0,039 = 2,56 × 10⁻⁵. Multiplicado por 100000 da 2,56.",
    },
    {
      kind: "number",
      q: "¿Qué pH tiene una disolución de acetato de sodio 0,10 mol/L a 25 °C? Datos: pKa del ácido acético 4,76 (valor de ejemplo), Kw = 1,0 × 10⁻¹⁴, y [OH⁻] = raíz de (Kb × c).",
      answer: 8.88,
      tolerance: 0.01,
      unit: "",
      explain: "Kb del acetato = 10⁻⁹·²⁴ = 5,75 × 10⁻¹⁰. [OH⁻] = raíz de (5,75 × 10⁻¹⁰ × 0,10) = 7,59 × 10⁻⁶ mol/L. pOH = 5,12 y pH = 14 − 5,12 = 8,88.",
    },
    {
      kind: "number",
      q: "Quieres un tampón acético-acetato de pH 5,26. Con pKa 4,76 (valor de ejemplo), ¿qué cociente [acetato]/[ácido acético] necesitas?",
      answer: 3.16,
      tolerance: 0.02,
      unit: "",
      explain: "Henderson-Hasselbalch: log (cociente) = 5,26 − 4,76 = 0,50. Cociente = 10⁰·⁵ = 3,16.",
    },
    {
      kind: "number",
      q: "Una amina ficticia con pKa 9,0 (de su forma con protón) tiene K = 50 para su forma sin carga. A pH 8 la fracción sin carga es 1/(1 + 10^(9 − 8)) = 0,0909. Con volúmenes iguales de agua y disolvente, ¿qué % queda en el agua? (queda 1/(1 + D), con D = K × fracción sin carga)",
      answer: 18,
      tolerance: 0.02,
      unit: "%",
      explain: "D = 50 × 0,0909 = 4,545. Queda en el agua 1 / (1 + 4,545) = 0,180, es decir, un 18 %.",
    },
    {
      kind: "choice",
      q: "Según la definición de Arrhenius, ¿por qué no se puede explicar que el amoníaco sea una base?",
      options: [
        "Porque el amoníaco es un gas y la definición solo vale para líquidos",
        "Porque el amoníaco no contiene OH⁻: lo genera al aceptar un protón del agua",
        "Porque el amoníaco es un ácido fuerte según Arrhenius y débil según Brønsted",
        "Porque Arrhenius solo trata sustancias orgánicas, y el amoníaco no lo es",
      ],
      answer: 1,
      explain: "Para Arrhenius una base libera OH⁻ propios. El NH₃ no tiene OH⁻: acepta un protón del agua (NH₃ + H₂O da NH₄⁺ + OH⁻), que es la definición de base de Brønsted-Lowry.",
    },
    {
      kind: "choice",
      q: "Disuelves en agua el clorhidrato de un principio activo, que es la sal de una amina con ácido clorhídrico. ¿Qué pH esperas, sin añadir nada más?",
      options: [
        "Exactamente 7, porque todas las sales son neutras",
        "Básico, porque la amina es una base",
        "Ligeramente ácido, porque la amina con protón cede algo de él al agua",
        "Muy ácido, igual que el ácido clorhídrico de partida",
      ],
      answer: 2,
      explain: "Es como el cloruro de amonio, cuya disolución es un ácido débil (ICSC 1051): el cloruro no hace nada y la amina con protón, ácido débil, cede algo de H⁺ al agua.",
    },
    {
      kind: "choice",
      q: "Un tampón de 1 L tiene 0,10 mol de ácido acético y 0,10 mol de acetato. Se le añaden por error 0,12 mol de HCl. ¿Qué pasa?",
      options: [
        "Se supera su capacidad: se agota el acetato, sobra ácido fuerte y el pH cae de golpe",
        "El pH apenas baja, porque los tampones resisten cualquier cantidad de ácido",
        "El pH sube, porque el acetato reacciona con el HCl y deja OH⁻ libres",
        "Nada: el ácido acético que ya había neutraliza el HCl añadido",
      ],
      answer: 0,
      explain: "El acetato solo neutraliza 0,10 mol de HCl. Los 0,02 mol que sobran son ácido fuerte y el pH baja de 4,76 a alrededor de 1,7: el tampón tiene una capacidad limitada.",
    },
    {
      kind: "choice",
      q: "Quieres que una amina con pKa 9 pase del agua al disolvente orgánico, y que una impureza ácida de pKa 4,5 se quede en el agua. ¿A qué pH ajustas la fase acuosa?",
      options: [
        "A pH 2, para que las dos especies tengan carga y vayan al agua",
        "A pH 4,5, para que el ácido quede mitad con carga y mitad sin ella",
        "A pH 7, porque es el pH neutro y no favorece a ninguna de las dos",
        "A pH 11, dos unidades por encima del pKa de la amina",
      ],
      answer: 3,
      explain: "A pH 11 la amina está un 99 % sin carga y pasa al orgánico, y el ácido, muy por encima de su pKa, está ionizado y se queda en el agua. A pH 7 la amina seguiría casi toda con carga.",
    },
  ],
};
