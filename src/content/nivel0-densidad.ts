import type { Lesson } from "./types";

export const densidadAFondo: Lesson = {
  slug: "densidad-a-fondo",
  level: 0,
  order: 6,
  title: "Densidad a fondo: pasar de litros a kilos sin equivocarse",
  titleEn: "Density in depth: converting litres to kilograms without mistakes",
  minutes: 38,
  summary:
    "Qué es la densidad, sus unidades y equivalencias, la densidad relativa, por qué cambia con la temperatura, por qué una disolución pesa más que el agua, ocho cuentas de litros a kilos en planta, cómo se mide, qué flota y qué se hunde, y por qué los vapores de disolvente bajan al suelo.",
  body: `
En «Densidad: de litros a kilos» viste la fórmula y una tabla corta. Aquí verás de dónde salen esos números, por qué cambian y cómo usarlos sin errores.

### Una maleta llena de plumas o de libros
Llena una maleta de plumas y otra igual de libros. Ocupan lo mismo, pero la de libros cuesta levantarla: has metido mucha más materia en el mismo sitio. Eso es la **densidad** (*density*): cuánta masa cabe en un volumen. Con los líquidos pasa igual: un bidón de diclorometano pesa bastante más que el mismo bidón lleno de metanol.

### La fórmula y sus tres caras
La densidad se escribe con la letra griega **ρ** (ro):

> ρ = m / V

- **m** es la masa, lo que marca la báscula (en kilogramos o gramos).
- **V** es el volumen, el sitio que ocupa (en litros o metros cúbicos).

La misma relación, vista desde tres lados:

| Quieres saber | Haces |
|---|---|
| La densidad | ρ = m / V |
| La masa (de litros a kilos) | m = ρ × V |
| El volumen (de kilos a litros) | V = m / ρ |

Truco: si el líquido es más ligero que el agua, los kilos salen **menos** que los litros; si es más pesado, **más**. Comprueba que tu resultado va en ese sentido.

### Unidades y equivalencias
El Real Decreto 2032/2009, que fija las unidades legales de medida en España, da como unidad oficial de la densidad (que llama «densidad, masa en volumen») el **kilogramo por metro cúbico**, kg/m³. El mismo real decreto define el litro: 1 L = 1 dm³ = 1000 cm³ = 0,001 m³. Y la tonelada: 1 t = 1000 kg.

Con eso salen todas las equivalencias:

| Unidad | Igual a |
|---|---|
| 1 g/cm³ | 1 g/mL (un centímetro cúbico es un mililitro) |
| 1 g/mL | 1 kg/L (mil veces más gramos en mil veces más volumen) |
| 1 kg/L | 1000 kg/m³ (un metro cúbico son 1000 litros) |
| 1000 kg/m³ | 1 t/m³ |

Es decir: **g/cm³, g/mL, kg/L y t/m³ dan el mismo número**. Solo el kg/m³ da un número mil veces mayor.

Tres conversiones con datos de las fichas de la app:

1. Tolueno, 0,87 g/cm³. En kg/m³: 0,87 × 1000 = **870 kg/m³**.
2. Diclorometano, 1330 kg/m³. En kg/L: 1330 / 1000 = **1,33 kg/L**.
3. Sosa al 50 %, 1,52 g/cm³. En kg/L y en t/m³ es el mismo número: **1,52 kg/L = 1,52 t/m³**. Un metro cúbico pesa 1,52 toneladas.

### Densidad relativa
A veces la ficha no da la densidad, sino la **densidad relativa** (*relative density*): cuántas veces pesa la sustancia más que el mismo volumen de agua.

> densidad relativa = ρ de la sustancia / ρ del agua

Si el tolueno tiene 0,87 kg/L y el agua 1,00 kg/L, su densidad relativa es 0,87 / 1,00 = 0,87. Sin unidades.

¿Por qué sin unidades? Porque divides kg/L entre kg/L y las unidades se van. El Real Decreto 2032/2009 lo dice así: las magnitudes que son cociente de dos de la misma naturaleza tienen como unidad el número uno, que no se escribe. El Vocabulario Internacional de Metrología (VIM) las llama magnitudes de dimensión uno.

Dos detalles:

- Coincide con la densidad en kg/L solo si el agua de referencia pesa 1 kg/L, y eso pasa hacia los 4 °C. Un dato serio dice a qué temperatura están la sustancia y el agua.
- En los gases la referencia es el **aire**, no el agua. La ficha del tolueno de la app da «densidad de vapor 3,1 (aire = 1)» y la del nitrógeno, «densidad relativa 0,97 (aire = 1)». No mezcles las dos cosas: el tolueno líquido pesa menos que el agua (0,87), y su vapor pesa más que el aire (3,1).

**Peso específico** (*specific weight*). Es el peso por unidad de volumen (densidad por gravedad, en N/m³). En planta a veces se dice queriendo decir densidad; aquí usamos siempre densidad.

### Por qué la densidad cambia con la temperatura
Al calentar un líquido, sus moléculas se mueven más y se separan un poco. La masa es la misma, pero ocupa más sitio: se **dilata** (*thermal expansion*), y su densidad baja. Es lo que hace subir el líquido de un termómetro.

El VIM pone un ejemplo con una barra de acero: su longitud a 23 °C no es la de 20 °C, y si se quiere la de 20 °C hay que corregir. Con la densidad es igual: un valor sin temperatura está incompleto.

**El agua, calculada.** Esta tabla sale de la formulación IAPWS-IF97 (la de la asociación internacional para las propiedades del agua y el vapor), calculada a la presión atmosférica normal:

| Temperatura | Densidad del agua (kg/m³) | En kg/L, redondeado |
|---|---|---|
| 4 °C | 999,98 | 1,000 |
| 10 °C | 999,70 | 1,000 |
| 20 °C | 998,21 | 0,998 |
| 40 °C | 992,22 | 0,992 |
| 60 °C | 983,21 | 0,983 |
| 80 °C | 971,80 | 0,972 |

Fíjate en dos cosas:

- El agua es más densa hacia los 4 °C (el cálculo da el máximo cerca de 3,96 °C); por debajo vuelve a dilatarse un poco.
- 1000 kg de agua ocupan 1001,8 L a 20 °C y 1029,0 L a 80 °C: un 2,7 % más. Usar 1,00 kg/L vale en frío, no en caliente.

**Los disolventes se dilatan más que el agua.** Cuánto, depende de cada uno y su ficha o la hoja lo dirán. Para hacer números usamos un **coeficiente de dilatación** (*thermal expansion coefficient*) de 0,0012 por °C, **valor de ejemplo** del orden de un disolvente orgánico: cada grado que sube, el volumen crece un 0,12 %.

> V caliente = V frío × (1 + coeficiente × diferencia de temperatura)

**La cuenta.** Un disolvente de ejemplo tiene 0,800 kg/L a 15 °C (valor de ejemplo). ¿Cuántos litros ocupan 1000 kg a 15 °C y a 40 °C?

1. A 15 °C: V = 1000 / 0,800 = 1250 L.
2. Diferencia de temperatura: 40 − 15 = 25 °C.
3. A 40 °C: V = 1250 × (1 + 0,0012 × 25) = 1250 × 1,03 = **1287,5 L**.
4. Son **37,5 L más** con exactamente los mismos kilos.
5. Su densidad a 40 °C: 1000 / 1287,5 = 0,777 kg/L.

Por eso un depósito al sol sube de nivel sin que nadie cargue nada, y por eso no se llena hasta arriba.

### Mezclas y disoluciones
**Por qué la sosa al 50 % pesa tanto.** Las fichas de la app dan estas densidades a unos 20 °C:

| Producto | Densidad | Qué hay en un litro |
|---|---|---|
| Agua | 1,00 kg/L | 1 kg de agua |
| Ácido clorhídrico al 35 % | 1,17 kg/L | 1,17 kg, de ellos 0,41 kg de cloruro de hidrógeno |
| Sosa al 50 % | 1,52 kg/L | 1,52 kg, de ellos 0,76 kg de hidróxido de sodio |
| Ácido sulfúrico al 98 % | 1,84 kg/L | 1,84 kg, de ellos 1,80 kg de ácido |

Un litro de sosa al 50 % lleva 0,76 kg de hidróxido de sodio y 0,76 kg de agua; solo el agua, en un litro, pesaría 1 kg. El hidróxido de sodio mete mucha masa en poco sitio, como la arena que se cuela entre las piedras de un cubo lleno: el litro pesa un 52 % más. Un bidón de 200 L de sosa al 50 % pesa más de 300 kg, y un contenedor de 1000 L de ácido sulfúrico concentrado, más de 1800 kg.

**Los volúmenes no siempre se suman.** Si mezclas 50 mL de etanol con 50 mL de agua, obtienes algo menos de 100 mL. Las moléculas de los dos se atraen y se colocan más apretadas que por separado (lo verás en «Enlaces y fuerzas entre moléculas a fondo»). Es la **contracción de volumen** (*volume contraction*). La masa sí se suma siempre, así que la densidad de la mezcla no es la media de las dos densidades. Por eso las mezclas en planta se hacen y se calculan **en masa**, y la densidad de una mezcla se mide o se busca en una tabla, nunca se promedia.

**La densidad como chivato de la concentración.** Como la densidad de una disolución cambia con su concentración, hay **tablas de densidad y concentración** (*density-concentration tables*) para cada producto: mides la densidad a una temperatura dada y lees el porcentaje. Sirve como comprobación rápida; el dato oficial lo da el laboratorio. Aquí no damos valores: cada producto tiene su tabla.

### Ocho cuentas de planta, de fácil a difícil
Densidades de las fichas y lecciones de la app, a 20 °C, salvo los valores de ejemplo.

**1. Disolvente por volumen.** Cargar 400 L de metanol (0,79 kg/L): m = 400 × 0,79 = **316 kg**. Menos kilos que litros, como debe ser.

**2. Disolvente por masa.** La hoja pide 600 kg de tolueno (0,87 kg/L) y solo tienes caudalímetro de volumen. V = 600 / 0,87 = **689,7 L**, unos 690 L.

**3. Reactivo en disolución al 30 % en peso.** La receta pide 45 kg de reactivo puro, que llega en disolución al 30 % en peso con densidad 1,20 kg/L (valores de ejemplo). Primero la disolución que hace falta: 45 / 0,30 = 150 kg. Después el volumen: 150 / 1,20 = **125 L**. Si olvidas el 30 %, saldrían 37,5 L: menos de un tercio.

**4. Cuánta sosa pura hay en una carga.** Cargas 80 L de sosa al 50 % (1,52 kg/L). Masa de disolución: 80 × 1,52 = 121,6 kg. Hidróxido de sodio puro: 121,6 × 0,50 = **60,8 kg**. El resto es agua. En «El mol a fondo» verás cómo pasar esos kilos a moles.

**5. Lo que cabe en un bidón o un depósito.** Un bidón de 200 L se llena como máximo a 180 L (valores de ejemplo, para dejar sitio a la dilatación). Con diclorometano (1,33 kg/L): 180 × 1,33 = **239,4 kg**. Con metanol (0,79 kg/L): 180 × 0,79 = 142,2 kg. El mismo bidón, casi 100 kg de diferencia.

**6. El error de usar la densidad del agua.** Te piden 500 kg de tolueno y, por despiste, cuentas 1 kg = 1 L: cargas 500 L. En realidad entran 500 × 0,87 = **435 kg**, un 13 % de menos. Con diclorometano el error va al revés: 500 L son 500 × 1,33 = 665 kg, un 33 % de más.

**7. Un depósito de agua caliente que «pierde» nivel.** Un depósito tiene 2000 L de agua a 80 °C (0,9718 kg/L según la tabla). Masa: 2000 × 0,9718 = 1943,6 kg. Al enfriarse a 20 °C (0,9982 kg/L), ocupa 1943,6 / 0,9982 = 1947,1 L. El nivel baja **52,9 L** sin que salga ni una gota. Por eso los balances se comparan en kilos.

**8. Cargar por litros a una temperatura distinta de la de la tabla.** Necesitas 1000 kg del disolvente de ejemplo de antes (0,800 kg/L a 15 °C), pero el disolvente está a 40 °C. Si usas la densidad de 15 °C, cargas 1250 L. A 40 °C cada litro pesa 0,777 kg, así que solo entran 1250 × 0,777 = **971 kg**: casi un 3 % de menos. Harían falta 1287,5 L. La solución de planta es pesar o medir en masa.

### Cómo se mide la densidad
**Picnómetro** (*pycnometer*). Es un frasquito de vidrio con un volumen conocido con mucha exactitud. Se pesa vacío, se llena con la muestra a una temperatura controlada y se vuelve a pesar. Ejemplo con valores de ejemplo: picnómetro de 25,00 mL; vacío, 30,512 g; lleno, 52,318 g. ρ = (52,318 − 30,512) / 25,00 = **0,872 g/mL**. Su volumen se comprueba llenándolo de agua y usando la densidad del agua a esa temperatura. Es un método de laboratorio, lento y exacto.

**Areómetro o densímetro de flotación** (*hydrometer*). Un flotador de vidrio con lastre abajo y un vástago con escala. Por el principio de Arquímedes, un cuerpo que flota desplaza un peso de líquido igual al suyo: en un líquido ligero se hunde más; en uno denso, flota más alto. Se lee donde la superficie corta la escala.

Si te piden medir con un areómetro, lo general es:

- Probeta y areómetro limpios y secos, del rango adecuado.
- Medir y anotar la **temperatura** de la muestra: sin ella, la lectura no vale.
- Meterlo despacio y esperar a que flote quieto, sin tocar paredes ni fondo y sin burbujas pegadas.
- Leer con el ojo a la altura de la superficie. Junto al vástago el líquido forma una pequeña curva, el **menisco** (*meniscus*); el procedimiento o el propio areómetro dicen si se lee en la superficie plana o en lo alto del menisco.
- Si la temperatura no es la de referencia, corregir con la tabla que indique el procedimiento.

**Densímetro electrónico de tubo vibrante** (*oscillating U-tube density meter*). Un tubo fino en forma de U se llena con unos mililitros de muestra y se hace vibrar. Cuanta más masa dentro, más despacio vibra, como una cuerda de guitarra gruesa suena más grave. El aparato mide la frecuencia, controla la temperatura y da la densidad. Su enemigo son las burbujas.

**En línea, con el Coriolis.** Usa tubos que vibran y da a la vez la masa que pasa y la densidad («Instrumentos de medida a fondo»).

### Qué flota y qué se hunde
**Líquidos que no se mezclan.** Cuando dos líquidos son **inmiscibles** (*immiscible*), forman dos capas y el menos denso queda arriba. Tolueno (0,87) sobre agua (1,00); agua sobre diclorometano (1,33). Por qué no se mezclan está en «Enlaces y fuerzas entre moléculas a fondo» y cómo se separan, en «Extracción líquido-líquido y separación de fases». Una fase acuosa con mucha sal pesa más que el agua pura.

**Sólidos.** Se hunde si es más denso que el líquido; si no, flota. Tras una cristalización, los cristales suelen ser más densos que el disolvente y se van al fondo si paras el agitador: por eso se agita al descargar la suspensión a la centrífuga o al filtro.

**El hielo, la excepción.** Casi todo es más denso en sólido que en líquido; el agua no. Con la formulación de la IAPWS (*International Association for the Properties of Water and Steam*, la asociación internacional que fija las propiedades del agua y del vapor) para el hielo, el hielo a 0 °C tiene 916,7 kg/m³, frente a 999,8 kg/m³ del agua líquida a esa temperatura: al congelarse, el agua ocupa un 9 % más. Por eso el hielo flota y por eso una tubería de agua que se congela puede reventar.

### Densidad de los gases
Un gas tiene una densidad unas mil veces menor y muy sensible a presión y temperatura. Esta parte usa la masa molar y la constante de los gases, que todavía no has visto. Si te pierdes, quédate con la conclusión de cada ejemplo (qué gas pesa más que el aire y por qué importa) y vuelve aquí después de «El mol a fondo: contar moléculas pesando, paso a paso», donde sale la ecuación de los gases ideales. De esa ecuación se despeja:

> ρ = P × M / (R × T)

- **P**, presión absoluta en pascales.
- **M**, masa molar en kg/mol (los g/mol divididos entre 1000).
- **R** = 8,314 J/(mol·K).
- **T**, temperatura absoluta en kelvin: el Real Decreto 2032/2009 la relaciona con los grados Celsius como T = t + 273,15.

**Aire a 20 °C y 1 atmósfera** (101325 Pa; masa molar media del aire, 28,96 g/mol, dato de libro de texto):
ρ = 101325 × 0,02896 / (8,314 × 293,15) = **1,20 kg/m³**. Un metro cúbico de aire pesa algo más de un kilo.

**Vapor de tolueno puro a 20 °C.** El tolueno es C₇H₈. Con las masas atómicas de la IUPAC, M = 7 × 12,011 + 8 × 1,008 = 92,14 g/mol.
ρ = 101325 × 0,09214 / (8,314 × 293,15) = **3,83 kg/m³**. Más de tres veces el aire: 92,14 / 28,96 = 3,2. La ficha de la app da 3,1; la diferencia está en el redondeo y en los datos de partida, pero el mensaje es el mismo.

En planta: el vapor de una boca de carga o de un derrame **baja**, se arrastra por el suelo hacia fosos y desagües y puede encontrar una chispa lejos de donde salió. Ya diluido pesa menos (con un 2,86 % de tolueno en aire, la mezcla solo pesa un 6 % más que el aire), pero cerca del derrame está concentrado. Cómo se controla está en «Atmósferas explosivas a fondo».

**Nitrógeno.** M = 2 × 14,007 = 28,01 g/mol. A 20 °C pesa 28,01 / 28,96 = 0,97 veces el aire, como dice su ficha: casi igual, y se mezcla. Pero el nitrógeno recién evaporado de un tanque criogénico está muy frío. A −100 °C (valor de ejemplo): ρ = 101325 × 0,02801 / (8,314 × 173,15) = **1,97 kg/m³**, un 64 % más que el aire a 20 °C. Ese gas frío también baja a los puntos bajos, como avisa «Nitrógeno, aire comprimido y vacío a fondo».

### Errores típicos
- **Confundir g/mL con kg/m³.** 0,87 g/mL son 870 kg/m³, no 0,87. Con el número equivocado, la cuenta sale mil veces mal.
- **Olvidar la temperatura.** Si el producto está caliente o frío, la densidad a 20 °C ya no vale.
- **Olvidar la riqueza.** La densidad da la masa de disolución, no la de reactivo puro.
- **Usar la densidad de otra concentración.** El ácido clorhídrico al 35 % no pesa lo mismo que uno al 37 %.
- **Confundir la densidad aparente de un polvo con la de su sólido.** El polvo lleva aire entre los granos, así que su **densidad aparente** (*bulk density*) es mucho menor que la de sus cristales. Solo sirve para saber qué volumen ocupa («Manejo de sólidos a fondo»).

Todo lo anterior es para entender los números. En planta, la densidad que se usa, la temperatura a la que vale y cómo se mide los fija siempre el procedimiento vigente (SOP) y la hoja de producción.
`,
  plant: `
Turno de noche. En el reactor ficticio R-305 hay que preparar la etapa de neutralización del intermedio QX-12 (producto ficticio). La hoja pide cargar 360 kg de tolueno y 48 kg de sosa al 50 % (1,52 kg/L según su ficha).

El tolueno se carga desde el depósito D-12 por un caudalímetro de volumen. La hoja da la densidad de cálculo, 0,87 kg/L, a 20 °C: 360 / 0,87 = 413,8 L. Pero el depósito está en el exterior y la sonda marca 31 °C. No calculas por tu cuenta otra densidad: lo comunicas al supervisor, porque a esa temperatura cada litro pesa algo menos y la hoja dice qué hacer cuando el disolvente está fuera de rango. Esta vez la indicación es cargar contra la báscula del reactor, que da los kilos sin depender de la temperatura.

La sosa se carga desde un bidón sobre báscula. 48 kg son 48 / 1,52 = 31,6 L: muy poco volumen para tanto peso. Compruebas la etiqueta, la concentración y el lote, y pesas.

Al acabar, la báscula del reactor marca el tolueno más la sosa. Ves dos capas al parar el agitador para la toma de muestra: arriba el tolueno, más ligero; abajo la fase acuosa. Todo cuadra con las densidades. Anotas las pesadas, las temperaturas y la incidencia de la temperatura del D-12 en la hoja.
`,
  batchRecord: `
- **Cantidad pedida y unidad**: kg o L, tal como la pide la receta. Nunca cambies la unidad sin que lo diga la hoja.
- **Densidad de cálculo** usada para pasar de litros a kilos, con su temperatura de referencia.
- **Temperatura del líquido** en el momento de la carga, si la hoja la pide.
- **Lectura de báscula o del totalizador del caudalímetro**, antes y después, con identificación del equipo de medida y su estado de calibración.
- **Concentración o riqueza** del reactivo (por ejemplo, sosa al 50 %), lote del proveedor y número de envase.
- **Medidas de densidad** si se piden: método (areómetro, densímetro), lectura, temperatura y resultado corregido si lo indica el procedimiento.
- **Fases observadas** en decantaciones: cuál queda arriba y cuál abajo.
- **Verificación** de la carga por una segunda persona cuando la hoja lo exija, y cualquier incidencia (temperatura fuera de rango, nivel que no cuadra).
`,
  terms: [
    { es: "Densidad", en: "Density", def: "Masa por unidad de volumen: ρ = m / V. Unidad oficial, kg/m³; en planta, kg/L." },
    { es: "Densidad relativa", en: "Relative density", def: "Cociente entre la densidad de una sustancia y la de una referencia (agua para líquidos, aire para gases). No tiene unidades." },
    { es: "Peso específico", en: "Specific weight", def: "Peso por unidad de volumen, densidad por gravedad, en N/m³. En planta a veces se usa mal como sinónimo de densidad." },
    { es: "Dilatación térmica", en: "Thermal expansion", def: "Aumento de volumen de una sustancia al calentarse, que hace bajar su densidad." },
    { es: "Coeficiente de dilatación", en: "Thermal expansion coefficient", def: "Fracción en que crece el volumen por cada grado que sube la temperatura." },
    { es: "Contracción de volumen", en: "Volume contraction", def: "Al mezclar algunos líquidos, como etanol y agua, el volumen final es menor que la suma de los volúmenes." },
    { es: "Tabla de densidad y concentración", en: "Density-concentration table", def: "Tabla que relaciona la densidad de una disolución, a una temperatura, con su concentración." },
    { es: "Picnómetro", en: "Pycnometer", def: "Frasco de vidrio de volumen conocido que se pesa vacío y lleno para calcular la densidad." },
    { es: "Areómetro o densímetro de flotación", en: "Hydrometer", def: "Flotador con escala que se hunde más o menos según la densidad del líquido." },
    { es: "Menisco", en: "Meniscus", def: "Curva que forma la superficie de un líquido junto a la pared de un tubo o al vástago de un areómetro." },
    { es: "Densímetro de tubo vibrante", en: "Oscillating U-tube density meter", def: "Aparato que calcula la densidad a partir de la frecuencia de vibración de un tubo lleno de muestra." },
    { es: "Inmiscible", en: "Immiscible", def: "Se dice de dos líquidos que no se mezclan y forman dos capas; la menos densa queda arriba." },
    { es: "Densidad aparente", en: "Bulk density", def: "Masa de un polvo dividida entre el volumen que ocupa con el aire entre granos. Mucho menor que la del sólido." },
  ],
  quiz: [
    {
      kind: "number",
      q: "La hoja pide cargar 250 L de metanol, cuya densidad es 0,79 kg/L. ¿Cuántos kilos entran?",
      answer: 197.5,
      tolerance: 0.01,
      unit: "kg",
      explain: "Masa = densidad × volumen = 0,79 × 250 = 197,5 kg. Sale menos que los litros porque el metanol es más ligero que el agua.",
    },
    {
      kind: "number",
      q: "Necesitas 460 kg de diclorometano (densidad 1,33 kg/L) y solo puedes medir litros. ¿Cuántos litros cargas? Redondea a una decimal.",
      answer: 345.9,
      tolerance: 0.01,
      unit: "L",
      explain: "Volumen = masa / densidad = 460 / 1,33 = 345,9 L. Salen menos litros que kilos porque es más pesado que el agua.",
    },
    {
      kind: "number",
      q: "La receta pide 36 kg de reactivo puro. Llega en disolución al 30 % en peso con densidad 1,20 kg/L (valores de ejemplo). ¿Cuántos litros de disolución hay que cargar?",
      answer: 100,
      tolerance: 0.01,
      unit: "L",
      explain: "Primero la disolución: 36 / 0,30 = 120 kg. Después el volumen: 120 / 1,20 = 100 L. Si te olvidas del 30 % te salen solo 30 L.",
    },
    {
      kind: "number",
      q: "Un depósito tiene 3000 L de agua a 60 °C. A esa temperatura el agua tiene una densidad de 0,9832 kg/L. ¿Cuántos kilos de agua hay?",
      answer: 2949.6,
      tolerance: 0.005,
      unit: "kg",
      explain: "Masa = 3000 × 0,9832 = 2949,6 kg. Con 1,00 kg/L habrías dicho 3000 kg: unos 50 kg de más.",
    },
    {
      kind: "number",
      q: "Te piden 300 kg de tolueno (0,87 kg/L) y por error cargas 300 L, como si fuera agua. ¿Cuántos kilos te faltan respecto a lo pedido?",
      answer: 39,
      tolerance: 0.02,
      unit: "kg",
      explain: "300 L × 0,87 = 261 kg cargados. Faltan 300 − 261 = 39 kg, un 13 % de lo pedido.",
    },
    {
      kind: "number",
      q: "800 kg de un disolvente de densidad 0,800 kg/L a 15 °C se calientan a 40 °C. Con un coeficiente de dilatación de ejemplo de 0,0012 por °C, ¿cuántos litros más ocupan a 40 °C?",
      answer: 30,
      tolerance: 0.02,
      unit: "L",
      explain: "A 15 °C: 800 / 0,800 = 1000 L. A 40 °C: 1000 × (1 + 0,0012 × 25) = 1030 L. Ocupan 30 L más con la misma masa.",
    },
    {
      kind: "number",
      q: "La acetona tiene una masa molar de 58 g/mol y el aire, de 29 g/mol (redondeadas). ¿Cuántas veces pesa el vapor de acetona puro más que el aire, a la misma presión y temperatura?",
      answer: 2,
      tolerance: 0.02,
      unit: "veces",
      explain: "Con ρ = P × M / (R × T), a igual P y T la densidad es proporcional a M: 58 / 29 = 2. El vapor baja y se acumula en zonas bajas.",
    },
    {
      kind: "choice",
      q: "Te piden medir la densidad de una muestra con un areómetro. ¿Qué haces?",
      options: [
        "Leo la escala en cuanto lo meto y anoto solo el número que marca",
        "Lo empujo hasta el fondo de la probeta para que la lectura sea estable",
        "Mido y anoto la temperatura, espero a que flote quieto y leo con el ojo a la altura",
        "Agito la muestra con el areómetro dentro para quitarle las burbujas",
      ],
      answer: 2,
      explain: "Sin temperatura la lectura no vale; el areómetro debe flotar libre, sin tocar paredes ni fondo, y se lee con el ojo al nivel de la superficie, donde diga el procedimiento.",
    },
    {
      kind: "choice",
      q: "Una hoja de cálculo de ingeniería pide la densidad del tolueno en kg/m³ y alguien ha escrito 0,87. ¿Qué pasa?",
      options: [
        "Está mal: son 870 kg/m³ y el resultado saldrá mil veces equivocado",
        "Está bien: kg/m³ y kg/L dan siempre el mismo número",
        "Está mal: son 87 kg/m³ porque hay que multiplicar por cien",
        "Da igual, porque la densidad de un líquido no tiene unidades",
      ],
      answer: 0,
      explain: "Un metro cúbico son 1000 litros, así que 0,87 kg/L son 870 kg/m³. g/mL, g/cm³ y kg/L dan el mismo número; kg/m³ da mil veces más.",
    },
    {
      kind: "choice",
      q: "En el foso de una bomba de trasvase de tolueno hay un pequeño derrame. Un compañero dice que no pasa nada porque el vapor «se va por arriba». ¿Qué le contestas?",
      options: [
        "Tiene razón: los vapores calientes siempre suben y se ventilan solos",
        "Tiene razón: el tolueno pesa menos que el agua, así que su vapor flota",
        "Solo es peligroso si la temperatura de la sala supera los 40 °C",
        "No: el vapor de tolueno pesa unas tres veces más que el aire y se queda abajo",
      ],
      answer: 3,
      explain: "El vapor de tolueno tiene densidad de vapor 3,1 frente al aire: se acumula en fosos y zonas bajas. Que el líquido sea más ligero que el agua no dice nada del vapor.",
    },
  ],
};
