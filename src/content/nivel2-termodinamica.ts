import type { Lesson } from "./types";

export const termodinamicaAFondo: Lesson = {
  slug: "termodinamica-a-fondo",
  level: 2,
  order: 11.4,
  title: "Por qué ocurren las reacciones a fondo: energía, entropía y Gibbs",
  titleEn: "Chemical thermodynamics in depth",
  minutes: 40,
  summary:
    "Sistema y entorno, el primer principio con el trabajo que hace un gas al salir del reactor, la entalpía estándar de formación y la ley de Hess con datos del NIST (hidrogenaciones, neutralización y combustión), las energías de enlace como estimación, la entropía y el segundo principio, la energía de Gibbs y la temperatura de inversión, y la relación entre ΔG° y la constante de equilibrio.",
  body: `
En «Calor de reacción a fondo» aprendiste a usar la entalpía de reacción (ΔH) para saber cuánto calienta una carga. En «Equilibrio químico a fondo», que una reacción puede quedarse a medias, y en «Velocidad de reacción a fondo», por qué unas van deprisa y otras despacio. Aquí respondes a una pregunta anterior a todas: **¿por qué ocurre una reacción y de dónde sale su calor?** Es la termodinámica química (*chemical thermodynamics*) que pide el currículo de Química de 2.º de Bachillerato (Real Decreto 243/2022): primer principio, ley de Hess, entropía y energía de Gibbs.

Todos los datos de sustancias de esta lección son del NIST Chemistry WebBook, la base de datos del instituto de metrología de Estados Unidos. Lo marcado como «valor de ejemplo» es inventado.

### Sistema y entorno: dónde pones la frontera
Para hacer cuentas de energía, lo primero es decidir qué miras:

- **Sistema** (*system*): lo que estudias. Por ejemplo, la masa de reacción dentro del reactor R-204.
- **Entorno** (*surroundings*): todo lo demás. La camisa, el agua de refrigeración, el aire de la sala.

Entre los dos la energía solo puede pasar de dos formas:

| Forma | En inglés | Ejemplo en planta |
|---|---|---|
| **Calor** (*heat*, q) | Pasa por diferencia de temperatura | La camisa enfría la masa |
| **Trabajo** (*work*, w) | Pasa como fuerza que mueve algo | Un gas que se forma empuja el aire del venteo |

El calor pasa siempre por sí solo del cuerpo caliente al frío, nunca al revés: lo recuerda el libro de Kuphaldt *Lessons in Industrial Instrumentation*. Esa idea volverá con la entropía.

### Primer principio: la energía no se crea ni se pierde
La energía que guarda el sistema dentro (en sus enlaces y en el movimiento de sus moléculas) se llama **energía interna** (*internal energy*, U). El **primer principio** (*first law of thermodynamics*) dice que solo cambia por lo que entra o sale:

> ΔU = q + w

Criterio de signos de esta lección: q y w son **positivos si entran** en el sistema y negativos si salen. Es como una cuenta del banco: ingresos con más, gastos con menos.

**El trabajo de un gas que sale.** Cuando una reacción suelta gas, ese gas tiene que hacerse sitio: empuja la atmósfera por el venteo. Ese empujón es trabajo que hace el sistema hacia fuera. A presión constante vale P × ΔV, y para un gas ideal es lo mismo que Δn × R × T, donde Δn son los moles de gas que aparecen.

R es la **constante de los gases** (*gas constant*). Sale de multiplicar dos constantes que el Real Decreto 493/2020 fija como exactas, la de Avogadro (6,022 140 76 × 10²³ por mol) y la de Boltzmann (1,380 649 × 10⁻²³ J/K): R = 8,314 J/(mol·K).

**Ejemplo resuelto 1. Una desprotección que suelta gas.** En «Reacciones en la fabricación de API a fondo: tipos, etapas y seguridad de reacción» (nivel 3; API es el principio activo farmacéutico, *Active Pharmaceutical Ingredient*) verás una desprotección que suelta 1,6 kmol de gas (CO₂ e isobuteno), que a 25 °C y presión atmosférica ocupan 39,2 m³.

- Con volumen: 101,325 kPa × 39,2 m³ = **3972 kJ**.
- Con moles: 1600 mol × 8,314 × 298,15 K = 3 966 000 J = **3966 kJ**.

Coinciden salvo redondeo. Unos 4 MJ que no calientan la masa: se gastan en empujar el aire de fuera.

### La entalpía: el calor a presión constante
Un reactor de planta suele trabajar a presión casi constante, abierto al venteo o con un regulador de nitrógeno. Para no tener que restar siempre ese trabajo del gas, se usa otra magnitud: la **entalpía** (*enthalpy*, H). Su cambio, **ΔH**, es exactamente el calor que intercambia la reacción a presión constante. Por eso es el número que usa «Calor de reacción a fondo».

Las dos se relacionan con los moles de gas:

> ΔH = ΔU + Δn(gas) × R × T

Si no cambian los moles de gas, ΔH y ΔU casi coinciden.

### La entalpía estándar de formación
No hace falta medir el calor de cada reacción posible. Basta con una tabla de **entalpías estándar de formación** (*standard enthalpy of formation*, ΔfH°): el calor de formar **un mol** de una sustancia a partir de sus elementos, todo en **condiciones estándar** (*standard conditions*). El NIST da sus valores a 25 °C (298,15 K) y 1 bar.

Por convenio, la de un **elemento** en su forma estable (H₂ gas, O₂ gas, N₂ gas, carbono sólido) vale **cero**: no cuesta nada «formar» lo que ya existe. Lo explica también el libro de Kuphaldt.

| Sustancia | Estado | ΔfH° (kJ/mol) | S° (J/(mol·K)) |
|---|---|---|---|
| Agua | líquido | −285,83 | 69,95 |
| Agua | gas | −241,826 | 188,835 |
| Hidrógeno, H₂ | gas | 0 | 130,680 |
| Nitrógeno, N₂ | gas | 0 | 191,609 |
| Cloro, Cl₂ | gas | 0 | 223,081 |
| Cloruro de hidrógeno, HCl | gas | −92,31 | 186,902 |
| Amoniaco, NH₃ | gas | −45,94 | 192,77 |
| Metano, CH₄ | gas | −74,6 | — |
| Dióxido de carbono, CO₂ | gas | −393,51 | 213,785 |
| Eteno (etileno), C₂H₄ | gas | 52,4 | 219,32 |
| Etano, C₂H₆ | gas | −84,0 | — |
| Nitrobenceno | líquido | 12,5 | 224,3 |
| Anilina | líquido | 31,3 | 191,30 |
| Hidróxido de sodio | sólido | −425,93 | 64,46 |
| Cloruro de sodio | sólido | −411,12 | 72,11 |

La columna S° la usarás más adelante. **El estado importa**: agua líquida y vapor tienen valores distintos.

### La ley de Hess
La **ley de Hess** (*Hess's law*) dice que el calor de una reacción no depende del camino: igual que la altura que bajas de un monte al valle es la misma por la carretera o por el sendero. Por eso puedes pasar «por los elementos»: deshacer los reactivos en elementos y formar con ellos los productos. Queda una regla:

> ΔH°reacción = suma de ΔfH° de los productos − suma de ΔfH° de los reactivos

Cada valor se multiplica por su coeficiente en la ecuación ajustada.

**Ejemplo resuelto 2. Hidrógeno y cloro.** H₂ + Cl₂ da 2 HCl.

- Productos: 2 × (−92,31) = −184,62 kJ.
- Reactivos: 0 + 0 = 0 (son elementos).
- ΔH° = −184,62 − 0 = **−184,62 kJ** por cada 2 mol de HCl.

En «Calor de reacción a fondo», con energías de enlace, salía −183 kJ. Casi igual: lo verás más abajo.

**Ejemplo resuelto 3. Hidrogenar un doble enlace.** Una reacción que verás en planta en «Hidrogenación a fondo»: CH₂=CH₂ + H₂ da CH₃–CH₃, todo en gas.

- ΔH° = (−84,0) − (52,4 + 0) = **−136,4 kJ/mol**.

**Ejemplo resuelto 4. Reducir un nitro a amina.** Otra de «Hidrogenación a fondo» (nivel 12): C₆H₅NO₂ + 3 H₂ da C₆H₅NH₂ + 2 H₂O, con nitrobenceno, anilina y agua líquidos.

- Productos: 31,3 + 2 × (−285,83) = −540,36 kJ.
- Reactivos: 12,5 + 3 × 0 = 12,5 kJ.
- ΔH° = −540,36 − 12,5 = **−552,86 kJ/mol**, unos −553.

Cuatro veces más que el doble enlace. Pásalo a cifras de planta:

- **Por kilo de nitrobenceno.** Masa molar 123,11 g/mol: 552,86 / 123,11 = 4,491 kJ/g, es decir, **4491 kJ por kg**.
- **Por mol de hidrógeno.** 552,86 / 3 = **184,3 kJ** por mol de H₂. Con 2,016 g/mol, 1 kg de H₂ son 496 mol y dan 91 400 kJ. Si entra **1 kg de H₂ por hora**, la reacción da 91 400 / 3600 = **25,4 kW**. Es la cuenta que hay detrás de una idea que verás en «Hidrogenación a fondo»: el caudal de hidrógeno es tu indicador del calor.
- **Aumento adiabático.** Se hidrogenan 100 kg de nitrobenceno en una masa total de 1500 kg con cp = 2,5 kJ/(kg·K) (valores de ejemplo). Moles: 100 / 123,11 = 0,8123 kmol. Calor: 0,8123 × 552 860 = 449 100 kJ. ΔTad = 449 100 / (1500 × 2,5) = **119,8 °C**. Por eso la hoja limita el hidrógeno y no deja que se acumule nitro sin reaccionar.
- **Energía interna.** Desaparecen 3 mol de gas (Δn = −3): ΔU = −552,86 + 3 × 2,479 = **−545,4 kJ/mol**. Diferencia pequeña.

Son valores a 25 °C y con sustancias puras; en el reactor el número real cambia algo, y manda el que midió el laboratorio con un calorímetro.

### La neutralización y por qué no sale 57
En «Calor de reacción a fondo» usaste unos 57 kJ por mol de agua para un ácido fuerte con una base fuerte, **en disolución**. Con el NIST puedes calcular la neutralización «en seco»: sosa sólida con cloruro de hidrógeno gas.

**Ejemplo resuelto 5.** NaOH (sólido) + HCl (gas) da NaCl (sólido) + H₂O (líquido).

- Productos: −411,12 + (−285,83) = −696,95 kJ.
- Reactivos: −425,93 + (−92,31) = −518,24 kJ.
- ΔH° = −696,95 − (−518,24) = **−178,71 kJ/mol**.

¿Contradice los 57? No. Son **caminos distintos con puntos de partida distintos**. Hess te dice cómo encajan: el camino «en seco» equivale a disolver la sosa y el gas en agua, neutralizar en disolución (los 57 kJ) y sacar la sal del agua. Cada paso tiene su propio calor. La ficha internacional de seguridad química del hidróxido de sodio (ICSC 0360) avisa de uno de ellos: «el contacto con humedad y agua genera calor». No damos el calor de cada paso porque no está en el NIST.

Lección práctica: **un calor de reacción vale para la reacción escrita, con los estados escritos**.

### Energías de enlace: una estimación
Romper enlaces cuesta y formarlos libera: lo viste en «Calor de reacción a fondo». La **energía de enlace** (*bond energy*) se puede sacar del propio NIST, con las entalpías de formación de los átomos sueltos: H gas, 217,998 kJ/mol; Cl gas, 121,301 kJ/mol.

- H–H: romper H₂ en 2 H cuesta 2 × 217,998 = **436,0 kJ/mol**.
- Cl–Cl: 2 × 121,301 = **242,6 kJ/mol**.
- H–Cl: 217,998 + 121,301 − (−92,31) = **431,6 kJ/mol**.

Con estas tres, el balance de enlaces del ejemplo 2 da exactamente −184,62 kJ, porque en moléculas de dos átomos cada enlace es único.

En moléculas grandes no es así. Romper los cuatro enlaces C–H del metano cuesta 716,68 + 4 × 217,998 − (−74,6) = 1663,3 kJ; entre cuatro, **415,8 kJ/mol de media**. Pero un C–H no vale lo mismo en el metano que en la anilina: las tablas dan **energías medias** y la cuenta con enlaces es **una estimación**. Para cifras de seguridad se usan entalpías de formación o, mejor, una medida.

### El segundo principio y la entropía
Si solo importara la energía, todo lo espontáneo sería exotérmico. Pero un charco se evapora solo, y evaporar **toma** calor. Falta otra magnitud.

La **entropía** (*entropy*, S) mide, en palabras sencillas, de cuántas maneras puede repartirse la energía entre las moléculas: cuánto «desorden» o dispersión hay. Analogía: una caja de piezas de construcción ordenadas por colores. Agítala y se mezclan; agítala mil veces más y nunca vuelven a ordenarse solas. Hay muchísimas más formas de estar mezcladas que ordenadas.

Mira la columna S° de la tabla:

- El agua **gas** (188,8) tiene mucha más entropía que la **líquida** (69,95). En un gas las moléculas se mueven libres por todo el volumen.
- Los sólidos tienen poca: cloruro de sodio, 72,11.

Las S° del NIST son **entropías absolutas**: se miden calentando la sustancia desde muy cerca del cero absoluto (las notas del NIST hablan de calcular el tramo por debajo de 15 K o de extrapolar por debajo de 90 K). Por eso, a diferencia de ΔfH°, los elementos **no** tienen S° = 0. Se miden en **J/(mol·K)**, julios, no kilojulios.

**Regla rápida para el signo de ΔS de una reacción:** si **aparecen moles de gas**, la entropía sube; si **desaparecen**, baja. Se calcula igual que Hess:

> ΔS° = suma de S° de los productos − suma de S° de los reactivos

**Ejemplo resuelto 6.**

| Reacción | Gas | ΔS° (J/K por mol de reacción) |
|---|---|---|
| Agua líquida da vapor | Aparece 1 mol | 188,835 − 69,95 = **+118,9** |
| N₂ + 3 H₂ da 2 NH₃ | De 4 mol a 2 | 2 × 192,77 − 191,609 − 3 × 130,680 = **−198,1** |
| Nitrobenceno + 3 H₂ da anilina + 2 H₂O líquida | Desaparecen 3 mol | 191,30 + 2 × 69,95 − 224,3 − 3 × 130,680 = **−285,1** |
| H₂ + Cl₂ da 2 HCl | 2 mol a 2 mol | 2 × 186,902 − 130,680 − 223,081 = **+20,0** |

El **segundo principio** (*second law of thermodynamics*) dice que, en un proceso que ocurre solo (**espontáneo**, *spontaneous*), la entropía **total** (sistema más entorno) aumenta. El entorno también cuenta: el calor que la reacción le cede a presión constante, −ΔH, le aumenta la entropía en −ΔH / T.

**Ejemplo resuelto 7. ¿Hierve el agua a 25 °C y 1 bar?**

- Sistema: +118,9 J/K.
- Entorno: el agua le quita 44,00 kJ (−241,826 − (−285,83) = 44,004 kJ/mol). −44 004 / 298,15 = −147,6 J/K.
- Total: 118,9 − 147,6 = **−28,7 J/K**. Negativo: no hierve sola.

A 110 °C (383,15 K) el entorno pierde solo 44 004 / 383,15 = 114,8 J/K. Total: +4,0 J/K: **hierve**. Cuanto más caliente está el entorno, menos le «duele» ceder calor.

En planta: dos disolventes se mezclan solos, pero **nunca se separan solos**. Separarlos en «Destilación a fondo» cuesta vapor de caldera.

### La energía de Gibbs: juntar las dos cosas
Mirar siempre sistema y entorno es pesado. La **energía de Gibbs** (*Gibbs energy*, G), también llamada energía libre, lo junta en una cuenta que solo usa datos del sistema, a temperatura y presión constantes:

> ΔG = ΔH − T × ΔS

- **ΔG negativo**: la reacción puede ocurrir sola.
- **ΔG positivo**: no ocurre sola; ocurre la inversa.
- **ΔG = 0**: equilibrio.

**La trampa de unidades**: ΔH va en kJ y ΔS en J/K. Divide ΔS entre 1000 antes de multiplicar. T siempre en kelvin (°C + 273,15).

Con ΔH y ΔS hay cuatro casos:

| ΔH | ΔS | ΔG | Ejemplo |
|---|---|---|---|
| − (da calor) | + (más desorden) | Negativo siempre | H₂ + Cl₂ |
| + (toma calor) | − (más orden) | Positivo siempre | La inversa |
| − | − | Negativo solo en frío | NH₃, hidrogenaciones |
| + | + | Negativo solo en caliente | Evaporar agua |

En los dos últimos casos hay una **temperatura de inversión** (*crossover temperature*) donde ΔG = 0:

> T = ΔH / ΔS

**Ejemplo resuelto 8. Evaporar agua.** T = 44,004 / 0,118 885 = **370,1 K**, es decir, **97,0 °C**. El NIST da para el agua una temperatura de ebullición medida de 373,17 K, 100,0 °C. La cuenta acierta casi, pero no del todo: supone que ΔH y ΔS no cambian con la temperatura, y sí cambian un poco. **Úsala para tendencias, no para consignas.**

**Ejemplo resuelto 9. Amoniaco.** ΔH° = 2 × (−45,94) = −91,88 kJ; ΔS° = −0,1981 kJ/K.

- A 25 °C: ΔG° = −91,88 − 298,15 × (−0,1981) = **−32,8 kJ**. Favorable.
- Inversión: 91,88 / 0,1981 = 463,8 K = **190,6 °C**. Por encima, ya no.

Es la regla de Le Châtelier de «Equilibrio químico a fondo» vista con números: en una exotérmica que gasta gas, calentar va en contra.

**Ejemplo resuelto 10. El nitro.** ΔG° = −552,86 − 298,15 × (−0,2851) = **−467,8 kJ/mol**, y su inversión estaría a 1939 K. A cualquier temperatura de planta es enormemente favorable. Sin embargo, nitrobenceno e hidrógeno juntos, sin catalizador, apenas reaccionan. ¿Por qué?

### Lo que Gibbs no te dice
ΔG dice **si** una reacción puede ocurrir; **no dice cuándo**. La velocidad la marca la energía de activación de «Velocidad de reacción a fondo»: el catalizador de paladio baja ese repecho, pero no cambia ni ΔH ni ΔG. Una reacción con ΔG muy negativo puede estar dormida en un bidón durante años y despertar de golpe con calor o con un catalizador. **Que no reaccione ahora no significa que sea segura.**

### ΔG° y la constante de equilibrio
ΔG° (con el circulito, todo en estado estándar) está unido a la K de «Equilibrio químico a fondo»:

> ΔG° = −R × T × ln K, es decir, K = e^(−ΔG° / (R × T))

A 25 °C, R × T × ln 10 = 8,314 × 298,15 × 2,303 = **5,71 kJ/mol**. Regla práctica: **cada 5,7 kJ/mol de ΔG° multiplica o divide K por 10**.

| ΔG° a 25 °C (kJ/mol) | K | Qué significa |
|---|---|---|
| −20 | unos 3200 | Casi completa |
| −11,4 | unos 100 | Muy desplazada al producto |
| −5,7 | unos 10 | Bastante producto |
| 0 | 1 | Mitad y mitad, más o menos |
| +5,7 | unos 0,1 | Poco producto |

**Ejemplo resuelto 11. Amoniaco a dos temperaturas** (con ΔH y ΔS constantes, una aproximación).

- 25 °C: K = e^(32 814 / (8,314 × 298,15)) = **5,6 × 10⁵**.
- 400 °C (673,15 K): ΔG° = −91,88 + 673,15 × 0,1981 = +41,5 kJ. K = **6,0 × 10⁻⁴**.

Mil millones de veces menos. Calentar una exotérmica la acelera, pero la deja llegar menos lejos: el compromiso velocidad-conversión de la hoja.

**Un aviso honesto: la esterificación.** Con los datos del NIST de ácido acético, etanol, acetato de etilo y agua líquidos sale ΔH° = −6,2 kJ/mol, ΔS° = +11,5 J/K y ΔG° = −9,6 kJ/mol: K de unos **48**, no la K ≈ 4 de «Equilibrio químico a fondo», que es la que se mide en la mezcla. Las tablas describen sustancias **puras y separadas**; en el reactor están mezcladas y se influyen. Y K = 4 corresponde a ΔG° = −3,4 kJ/mol: una diferencia de solo 6,2 kJ/mol cambia K unas doce veces. Por eso **las K de proceso se miden**; las tablas dicen hacia dónde va una reacción, no cuánto rendirá.

### Para qué te sirve en el turno
| Lo que ves en la hoja o en planta | Lo que hay detrás |
|---|---|
| Caudal máximo de hidrógeno o de adición | ΔH por mol (Hess) y potencia de la camisa |
| «No superar X °C» en una reacción exotérmica | Equilibrio peor y posibles reacciones de ΔG negativo esperando |
| Un catalizador que se carga al final y en atmósfera inerte | ΔG muy negativo: solo falta que arranque |
| Vapor de caldera para destilar o secar | Separar y evaporar va contra la entropía o toma calor: hay que pagarlo |
| Venteo libre en reacciones que sueltan gas | El gas hace trabajo y ocupa volumen: ΔU y ΔH |

Ninguna de estas cuentas te autoriza a cambiar una consigna. Los números de la hoja los fijó desarrollo con medidas reales; en planta manda siempre el procedimiento vigente (SOP) y la hoja de producción de tu lote.
`,
  plant: `
Reunión de inicio de campaña en la sala de control. Mañana se hidrogena por primera vez el intermedio ficticio NX-14, que lleva un grupo nitro, en el autoclave ficticio HR-302 con catalizador de paladio. Todos los valores son de ejemplo.

La técnica de procesos enseña la hoja: *«Presión de H₂ 4 bar. Temperatura de masa 40 a 50 °C. Caudal máximo de hidrógeno 0,8 kg/h. Si la temperatura supera 55 °C, cerrar la válvula de hidrógeno y avisar.»*

Un compañero pregunta por qué el caudal está tan limitado si la camisa «va sobrada». Haces la cuenta en la pizarra con lo que sabes de Hess: una reducción de nitro como la del nitrobenceno da unos 184 kJ por mol de hidrógeno, unos 25 kW por cada kilo de hidrógeno por hora. Con 0,8 kg/h son unos 20 kW. La técnica confirma que el calorímetro del laboratorio dio un valor parecido para NX-14 y que la camisa del HR-302, con el agua a la temperatura de verano, quita con margen unos 30 kW.

Otro compañero se extraña de que la reacción «no arranque sola» si es tan favorable. La técnica lo explica: el ΔG es muy negativo, pero sin catalizador el nitro y el hidrógeno apenas reaccionan. Por eso el catalizador se carga húmedo, bajo nitrógeno y solo cuando el reactor está inertizado.

Al día siguiente, durante la hidrogenación, ves en el historiador que el caudal de hidrógeno y la diferencia masa-camisa suben y bajan juntos. Lo anotas en la hoja: el hidrógeno que entra es el calor que sale.
`,
  batchRecord: `
La termodinámica no aparece con su nombre en la hoja de producción (*batch record*), pero está detrás de muchas casillas:

- **Caudal de reactivo o de hidrógeno**: valor de consigna, máximo de la hoja y totalizador al principio y al final. El hidrógeno consumido se compara con el teórico (moles de H₂ por mol de producto).
- **Temperatura de masa y de camisa** a los intervalos marcados, con la diferencia entre ambas cuando la hoja la pide: es la potencia que está dando la reacción.
- **Presión del reactor** y estado del venteo en reacciones que sueltan gas, con hora de inicio y fin del desprendimiento.
- **Carga del catalizador**: lote, cantidad, estado (húmedo o seco) y comprobación previa de la inertización.
- **Límite de temperatura máxima** y acción tomada si se alcanza (cierre de alimentación, aviso), con hora y nombre.
- **Consumo de vapor o tiempo de destilación** cuando la hoja lo registra, para comparar con lotes anteriores.
- **Desviaciones**: cualquier caudal, temperatura o consumo fuera de lo previsto se anota en el momento y se comunica; no se corrige cambiando consignas por cuenta propia.
`,
  terms: [
    { es: "Sistema y entorno", en: "System and surroundings", def: "El sistema es lo que se estudia (la masa del reactor); el entorno, todo lo demás. Entre ellos pasa energía como calor o como trabajo." },
    { es: "Energía interna", en: "Internal energy (U)", def: "Energía que guarda el sistema en sus enlaces y en el movimiento de sus moléculas. Su cambio es ΔU = q + w." },
    { es: "Primer principio de la termodinámica", en: "First law of thermodynamics", def: "La energía no se crea ni se destruye: lo que gana el sistema lo pierde el entorno, como calor o como trabajo." },
    { es: "Trabajo de expansión", en: "Expansion work", def: "Energía que gasta un gas al hacerse sitio contra la presión exterior: P × ΔV, o Δn × R × T para un gas ideal." },
    { es: "Entalpía", en: "Enthalpy (H)", def: "Magnitud cuyo cambio, ΔH, es el calor que intercambia una reacción a presión constante." },
    { es: "Entalpía estándar de formación", en: "Standard enthalpy of formation (ΔfH°)", def: "Calor de formar un mol de sustancia a partir de sus elementos en condiciones estándar. Vale cero para los elementos en su forma estable." },
    { es: "Ley de Hess", en: "Hess's law", def: "El calor de una reacción no depende del camino: ΔH es la suma de ΔfH° de los productos menos la de los reactivos." },
    { es: "Energía de enlace", en: "Bond energy", def: "Energía necesaria para romper un mol de un enlace en fase gas. En moléculas grandes se usan valores medios, que solo dan una estimación." },
    { es: "Entropía", en: "Entropy (S)", def: "Medida de cuántas maneras puede repartirse la energía entre las moléculas; sube al pasar de sólido a líquido y a gas. Se da en J/(mol·K)." },
    { es: "Segundo principio de la termodinámica", en: "Second law of thermodynamics", def: "En todo proceso espontáneo, la entropía total del sistema y su entorno aumenta." },
    { es: "Proceso espontáneo", en: "Spontaneous process", def: "El que puede ocurrir solo, sin aporte continuo de energía desde fuera. No dice nada de lo rápido que va." },
    { es: "Energía de Gibbs", en: "Gibbs energy (G)", def: "Magnitud que combina entalpía y entropía, ΔG = ΔH − T × ΔS. Si ΔG es negativo a T y P constantes, la reacción puede ocurrir sola." },
    { es: "Temperatura de inversión", en: "Crossover temperature", def: "Temperatura a la que ΔG = 0 cuando ΔH y ΔS tienen el mismo signo: T = ΔH / ΔS." },
    { es: "Condiciones estándar", en: "Standard conditions", def: "Estado de referencia de las tablas: sustancias puras a 1 bar; el NIST da los valores a 25 °C (298,15 K)." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Con los datos del NIST, ΔfH° del metano gas = −74,6 kJ/mol, del CO₂ gas = −393,51 kJ/mol y del agua líquida = −285,83 kJ/mol. ¿Cuántos kJ libera la combustión CH₄ + 2 O₂ da CO₂ + 2 H₂O (líquida) por mol de metano?",
      answer: 890.57,
      tolerance: 0.01,
      unit: "kJ/mol",
      explain: "Productos: −393,51 + 2 × (−285,83) = −965,17. Reactivos: −74,6 + 0 = −74,6. ΔH° = −965,17 − (−74,6) = −890,57 kJ/mol: libera 890,57 kJ por mol. El O₂ es un elemento y su ΔfH° vale cero.",
    },
    {
      kind: "number",
      q: "La reducción de nitrobenceno a anilina tiene ΔH° = −552,86 kJ por mol de nitrobenceno, y su masa molar es 123,11 g/mol. ¿Cuántos kJ libera por cada kilo de nitrobenceno? Redondea a la unidad.",
      answer: 4491,
      tolerance: 0.01,
      unit: "kJ/kg",
      explain: "552,86 kJ/mol entre 123,11 g/mol = 4,491 kJ/g. Un kilo son 1000 g: 4491 kJ por kg.",
    },
    {
      kind: "number",
      q: "Para N₂ + 3 H₂ da 2 NH₃ (todo gas), las entropías estándar son N₂ = 191,609; H₂ = 130,680 y NH₃ = 192,77 J/(mol·K). ¿Cuántos J/K baja la entropía por mol de reacción? Da el valor sin signo con dos decimales.",
      answer: 198.11,
      tolerance: 0.01,
      unit: "J/K",
      explain: "ΔS° = 2 × 192,77 − 191,609 − 3 × 130,680 = 385,54 − 583,649 = −198,109 J/K. Baja unos 198,11 J/K: desaparecen 2 moles de gas.",
    },
    {
      kind: "number",
      q: "Una reacción tiene ΔH = −91,88 kJ y ΔS = −198,11 J/K, y suponemos que no cambian con la temperatura. ¿A qué temperatura, en °C, ΔG vale cero? Redondea a una décima.",
      answer: 190.6,
      tolerance: 0.01,
      unit: "°C",
      explain: "Primero las unidades: ΔS = −0,19811 kJ/K. T = ΔH / ΔS = 91,88 / 0,19811 = 463,8 K. En grados Celsius: 463,8 − 273,15 = 190,6 °C. Por debajo, ΔG es negativo.",
    },
    {
      kind: "number",
      q: "A 25 °C, cada 5,7 kJ/mol de ΔG° multiplica la constante de equilibrio por 10. Si una reacción tiene ΔG° = −11,4 kJ/mol a 25 °C, ¿cuánto vale K aproximadamente?",
      answer: 100,
      tolerance: 0.02,
      unit: "",
      explain: "−11,4 kJ/mol son dos veces 5,7: K = 10 × 10 = 100. Con la fórmula exacta, e^(11400 / (8,314 × 298,15)) da 99,4.",
    },
    {
      kind: "number",
      q: "Una reacción desprende 0,5 kmol de CO₂ a 25 °C (298,15 K) y presión atmosférica. Con R = 8,314 J/(mol·K), ¿cuántos kJ de trabajo hace el gas al empujar la atmósfera (Δn × R × T)? Redondea a la unidad.",
      answer: 1239,
      tolerance: 0.01,
      unit: "kJ",
      explain: "0,5 kmol son 500 mol. Trabajo = 500 × 8,314 × 298,15 = 1239400 J, unos 1239 kJ, que el sistema gasta en hacerse sitio y no calientan la masa.",
    },
    {
      kind: "choice",
      q: "Una reacción de planta tiene ΔH negativo y ΔS negativo (da calor y gasta gas). ¿Qué dice la termodinámica sobre la temperatura?",
      options: [
        "Que es favorable a cualquier temperatura, porque da calor",
        "Que es favorable en frío y deja de serlo por encima de T = ΔH / ΔS",
        "Que solo ocurre en caliente, porque necesita vencer la entropía",
        "Que la temperatura no influye en ΔG, solo en la velocidad",
      ],
      answer: 1,
      explain: "Con ΔH y ΔS negativos, ΔG = ΔH − T × ΔS es negativo a baja temperatura y se hace positivo por encima de la temperatura de inversión, como el amoniaco por encima de unos 190 °C.",
    },
    {
      kind: "choice",
      q: "Un bidón de un intermedio ficticio lleva meses en el almacén sin cambiar, aunque su descomposición tiene un ΔG muy negativo. Un compañero dice que entonces es estable. ¿Qué le respondes?",
      options: [
        "Que ΔG negativo solo dice que puede pasar; puede estar parada por cinética",
        "Que tiene razón: si ΔG fuera negativo, ya se habría descompuesto",
        "Que el bidón está mal etiquetado, porque ΔG negativo es instantáneo",
        "Que la entropía del bidón ha bajado y por eso ya no se descompone",
      ],
      answer: 0,
      explain: "La termodinámica dice si algo puede ocurrir, no cuándo. Una energía de activación alta la mantiene dormida, y el calor o un catalizador pueden arrancarla. Por eso se respetan las condiciones de almacén.",
    },
    {
      kind: "choice",
      q: "Calculas con el NIST la neutralización de sosa sólida con cloruro de hidrógeno gas y te sale −178,7 kJ/mol, pero tu lección decía unos 57 kJ/mol para ácido y base en disolución. ¿Qué pasa?",
      options: [
        "Que el NIST está mal y hay que usar siempre 57 kJ/mol",
        "Que la ley de Hess solo vale para reacciones en fase gas",
        "Que son reacciones distintas: disolver los reactivos y la sal también da o toma calor",
        "Que la diferencia es el error normal de cualquier tabla de datos",
      ],
      answer: 2,
      explain: "El camino en seco incluye disolver sosa y gas, neutralizar en agua y sacar la sal: cada paso tiene su calor. Un ΔH vale solo para la reacción escrita, con sus estados.",
    },
    {
      kind: "choice",
      q: "En una etapa exotérmica y reversible, un compañero propone subir la temperatura de 40 a 80 °C para que salga más producto. ¿Qué es lo correcto?",
      options: [
        "Hacerlo, porque a más temperatura siempre sale más producto",
        "Hacerlo solo si la camisa tiene frío de sobra para compensar",
        "Bajar a 20 °C, porque así se llega al equilibrio más deprisa",
        "No hacerlo: en una exotérmica, calentar baja K y lo fija la hoja",
      ],
      answer: 3,
      explain: "Calentar acelera, pero en una exotérmica ΔG° se hace menos negativo y K baja: se llega antes a un equilibrio peor. La temperatura es un compromiso que fijó desarrollo y no se cambia sin autorización.",
    },
  ],
};
