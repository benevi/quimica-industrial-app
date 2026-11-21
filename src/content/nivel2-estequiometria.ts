import type { Lesson } from "./types";

export const estequiometriaAFondo: Lesson = {
  slug: "estequiometria-a-fondo",
  level: 2,
  order: 3,
  title: "Estequiometría a fondo: de la ecuación a los kilos que cargas",
  titleEn: "Stoichiometry in depth: from the equation to the kilos you charge",
  minutes: 40,
  summary:
    "Qué dice de verdad una ecuación química y cómo se ajusta, el camino de cálculo de kilos a kilomoles y vuelta, los equivalentes de la hoja de producción con reactivos puros y en disolución, la corrección por riqueza y agua, qué pasa si una carga sale mal, el rendimiento teórico de una etapa y de varias, la tabla de cargas y los errores típicos.",
  body: `
Ya conoces la ecuación química («Ecuaciones químicas y estequiometría»), el limitante («Reactivo limitante y exceso») y el paso de kilos a kilomoles («El mol a fondo»). Esta lección lo lleva a la hoja de producción con ejemplos resueltos de planta. Intenta cada uno antes de leer la solución.

Masas atómicas redondeadas como en «El mol a fondo» (H 1, C 12, N 14, O 16, Na 23, S 32, Cl 35,5); en planta, las de la hoja. En los libros la ecuación lleva una flecha; aquí se escribe «da».

### Qué dice de verdad una ecuación
Piensa en una receta: «2 rebanadas de pan + 1 loncha de queso dan 1 bocadillo». Cuenta **piezas**, no gramos: una loncha no pesa lo que dos rebanadas.

Una ecuación química es igual. Los números de delante, los **coeficientes estequiométricos** (*stoichiometric coefficients*), cuentan moléculas o, lo que es lo mismo, **moles**. Nunca kilos.

> CH₄ + 2 O₂ da CO₂ + 2 H₂O

Se lee: 1 kmol de metano con 2 kmol de oxígeno da 1 kmol de CO₂ y 2 kmol de agua. En kilos, 16 kg de metano gastan 64 kg de oxígeno, no 32 kg: la proporción 1 : 2 en moles es 16 : 64 en masa, porque cada molécula pesa distinto.

Lo que sí se conserva es la masa total: 16 + 64 = 80 kg a la izquierda y 44 + 36 = 80 kg a la derecha.

### Por qué hay que ajustar antes de calcular
Una ecuación **ajustada** (*balanced*) tiene los mismos átomos de cada elemento a cada lado. Sin ajustar, la proporción entre moles es falsa y todo lo que sale después también: la carga, el producto, el gas.

El método más sencillo es **por tanteo** (*balancing by inspection*):

1. Escribe las fórmulas. Nunca se tocan: solo cambian los coeficientes.
2. Empieza por el elemento que aparece en menos sustancias. Deja para el final el hidrógeno y el oxígeno, y sobre todo el elemento que aparece solo, como el O₂.
3. Corrige un coeficiente cada vez y vuelve a contar todo.

**Ajuste 1. Combustión del metano.** Sin ajustar: CH₄ + O₂ da CO₂ + H₂O.
- Carbono: 1 a cada lado. Bien.
- Hidrógeno: 4 a la izquierda, 2 a la derecha. Pones 2 H₂O.
- Oxígeno: a la derecha 2 + 2 = 4; a la izquierda, 2. Pones 2 O₂.
- Resultado: **CH₄ + 2 O₂ da CO₂ + 2 H₂O**. C 1 = 1; H 4 = 4; O 4 = 4.

**Ajuste 2. Neutralizar ácido sulfúrico con sosa.** Sin ajustar: H₂SO₄ + NaOH da Na₂SO₄ + H₂O.
- Azufre: 1 = 1.
- Sodio: el sulfato de sodio tiene 2. Pones 2 NaOH.
- Hidrógeno: 2 del ácido más 2 de las dos sosas, 4. A la derecha hay 2 en una agua. Pones 2 H₂O.
- Oxígeno: 4 + 2 = 6 a la izquierda; 4 + 2 = 6 a la derecha.
- Resultado: **H₂SO₄ + 2 NaOH da Na₂SO₄ + 2 H₂O**. El ácido sulfúrico cede dos hidrógenos («Ácidos, bases y pH a fondo»): gasta dos de sosa.

**Ajuste 3. Una reacción con paréntesis.** El sulfato de aluminio, que se usa para depurar agua, con sosa da hidróxido de aluminio: Al₂(SO₄)₃ + NaOH da Al(OH)₃ + Na₂SO₄. El número detrás de un paréntesis multiplica todo lo de dentro: (SO₄)₃ son 3 S y 12 O; (OH)₃ son 3 O y 3 H.
- Aluminio: 2 a la izquierda. Pones 2 Al(OH)₃.
- Grupo sulfato: 3 a la izquierda. Pones 3 Na₂SO₄. Si un grupo como el SO₄ pasa entero de lado, cuéntalo como una pieza.
- Sodio: a la derecha 3 × 2 = 6. Pones 6 NaOH.
- Grupo OH: 6 en la sosa y 2 × 3 = 6 en el hidróxido de aluminio.
- Resultado: **Al₂(SO₄)₃ + 6 NaOH da 2 Al(OH)₃ + 3 Na₂SO₄**. Recuento final: Al 2 = 2; S 3 = 3; Na 6 = 6; H 6 = 6; O 12 + 6 = 18 a la izquierda y 6 + 12 = 18 a la derecha.

**Ajuste 4. Combustión del tolueno.** El tolueno, C₇H₈, es un disolvente de planta. Si arde con oxígeno suficiente da CO₂ y agua: C₇H₈ + O₂ da CO₂ + H₂O.
- Carbono: 7. Pones 7 CO₂.
- Hidrógeno: 8. Pones 4 H₂O.
- Oxígeno de la derecha: 7 × 2 + 4 × 1 = 18. Hacen falta 18 átomos, es decir, 9 moléculas de O₂.
- Resultado: **C₇H₈ + 9 O₂ da 7 CO₂ + 4 H₂O**.

Cada molécula de tolueno necesita nueve de oxígeno para arder entera. Cómo se evita que arda lo ves en «Atmósferas explosivas a fondo» e «Inertización a fondo».

### El camino de cálculo, siempre igual
Con la ecuación ajustada, toda pregunta de cantidades sigue el mismo camino:

| Paso | Qué haces | Cuenta |
|---|---|---|
| 1 | Kilos de A a kilomoles de A | kmol = kg / M |
| 2 | Kilomoles de A a kilomoles de B | por la proporción de coeficientes |
| 3 | Kilomoles de B a kilos de B | kg = kmol × M |
| 4 | Comprobar | ¿la masa total cuadra?, ¿el resultado es razonable? |

La proporción del paso 2 solo vale en moles: saltarse los pasos 1 y 3 es el error más grave.

**Camino 1. Cuánto reactivo B para una carga de A.** La sosa rompe el acetato de etilo en acetato de sodio y etanol, una **saponificación** (*saponification*):

> C₄H₈O₂ + NaOH da C₂H₃NaO₂ + C₂H₅OH

Masas molares: acetato de etilo 88; NaOH 40; acetato de sodio 82; etanol 46. ¿Cuánta NaOH pura para 176 kg de acetato de etilo?
1. 176 / 88 = 2,000 kmol de acetato de etilo.
2. Proporción 1 : 1, así que 2,000 kmol de NaOH.
3. 2,000 × 40 = **80,0 kg de NaOH**.

**Camino 2. Cuánto producto como máximo.** Con la misma reacción: 2,000 kmol de acetato de sodio, 2,000 × 82 = **164 kg**, y 2,000 kmol de etanol, 2,000 × 46 = **92 kg**. Paso 4: entran 176 + 80 = 256 kg y salen 164 + 92 = 256 kg. Cuadra.

**Camino 3. Cuánto gas sale.** El bicarbonato de sodio neutraliza restos de ácido y desprende CO₂:

> NaHCO₃ + HCl da NaCl + H₂O + CO₂

El bicarbonato, NaHCO₃, tiene M = 23 + 1 + 12 + 48 = 84. Se añaden 42 kg.
1. 42 / 84 = 0,500 kmol de bicarbonato.
2. Proporción 1 : 1, así que 0,500 kmol de CO₂, que son 500 mol.
3. En masa: 0,500 × 44 = **22,0 kg de CO₂**.
4. En volumen: en «El mol a fondo» calculaste con P · V = n · R · T que un mol de gas ocupa unos 24,1 L a 20 °C y 1 atm. Con la cuenta completa, 500 × 8,314 × 293,15 / 101325 = **12,0 m³** de gas.

Cuarenta y dos kilos de sólido dan doce metros cúbicos de gas, más que el volumen de muchos reactores. Añadido de golpe, el gas y la espuma suben la presión o desbordan el equipo: por eso se añade poco a poco y con el venteo libre. Con carbonato de sodio cambia la proporción: Na₂CO₃ + 2 HCl da 2 NaCl + H₂O + CO₂, un mol de gas por cada dos de ácido.

**Camino 4. Cuánta base para neutralizar el ácido que se forma.** Algunas reacciones dan un ácido como subproducto. Ejemplo clásico de clase, la anilina con cloruro de acetilo:

> C₆H₇N + C₂H₃ClO da C₈H₉NO + HCl

Masas molares: anilina 93; cloruro de acetilo 78,5; acetanilida 135; HCl 36,5. Partes de 186 kg de anilina.
1. 186 / 93 = 2,000 kmol de anilina.
2. Se forman 2,000 kmol de HCl, 2,000 × 36,5 = 73,0 kg.
3. HCl + NaOH da NaCl + H₂O es 1 : 1: hacen falta 2,000 kmol de NaOH, **80,0 kg** de NaOH pura.

### Los equivalentes de la hoja de producción
La hoja rara vez dice «carga 2,200 kmol». Dice **«carga 1,10 equivalentes de B»**. Un **equivalente** (*equivalent*, equiv o eq) en una hoja de síntesis son los moles de un reactivo por cada mol del **reactivo de referencia** (*reference reagent*), normalmente el material de partida o el limitante, que tiene 1,00 eq.

> moles de B = moles de referencia × eq de B
> masa de B = moles de B × M de B

En los cuatro ejemplos el proceso es ficticio: el intermedio ZN-1 (M = 250 kg/kmol, valor de ejemplo) se carga como referencia, 500 kg puros: 500 / 250 = **2,000 kmol**.

**Equivalentes 1. Un reactivo puro.** 1,10 eq de anhídrido acético (C₄H₆O₃, M = 102). Moles: 2,000 × 1,10 = 2,200 kmol. Masa: 2,200 × 102 = **224,4 kg**.

**Equivalentes 2. Una base en disolución en peso.** 1,20 eq de NaOH, que llega como sosa al 50 % en peso (densidad 1,52 kg/L, de la ficha de seguridad de la app).
1. Moles: 2,000 × 1,20 = 2,400 kmol de NaOH.
2. NaOH pura: 2,400 × 40 = 96,0 kg.
3. Disolución: solo la mitad es NaOH, así que 96,0 / 0,50 = **192,0 kg de sosa al 50 %**.
4. Si se carga por volumen: 192,0 / 1,52 = **126,3 L**.

**Equivalentes 3. Un reactivo en disolución molar.** 0,50 eq de ácido clorhídrico 2 mol/L (disolución preparada, valor de ejemplo). Moles: 2,000 × 0,50 = 1,000 kmol = 1000 mol. Volumen: 1000 / 2 = **500 L**. Si se pesa, la densidad la da la hoja; no la inventes.

**Equivalentes 4. Un ácido concentrado.** 1,10 eq de HCl desde clorhídrico al 35 % (densidad 1,17 kg/L, de la ficha de la app).
1. Moles: 2,000 × 1,10 = 2,200 kmol. HCl puro: 2,200 × 36,5 = 80,3 kg.
2. Disolución: 80,3 / 0,35 = **229,4 kg**.
3. Volumen: 229,4 / 1,17 = **196,1 L**.

**Por qué se trabaja con exceso.** Como viste en «Reactivo limitante y exceso», el exceso asegura que el de referencia, normalmente el más caro, reaccione entero y cubre lo que se pierde por humedad o reacciones secundarias. Cada exceso está fijado y validado.

### Reactivos que no vienen puros
La **riqueza** o **pureza** (*assay*) dice qué porcentaje en masa de un material es la sustancia que reacciona; el resto son impurezas o agua. La da el certificado de análisis del lote.

> masa a cargar = masa pura necesaria / (riqueza / 100)

**Riqueza 1. El reactivo en exceso.** En el ejemplo de equivalentes 1 hacían falta 224,4 kg de anhídrido acético puro. Si el lote tiene un 98,0 % de riqueza: 224,4 / 0,980 = **229,0 kg**. Se carga más, porque parte del peso no reacciona.

**Riqueza 2. El reactivo de referencia.** Ahora es el ZN-1 el que tiene una riqueza del 97,5 %, y se cargan 500 kg de material.
1. ZN-1 puro: 500 × 0,975 = 487,5 kg; 487,5 / 250 = **1,950 kmol**.
2. Anhídrido puro: 1,950 × 1,10 = 2,145 kmol; 2,145 × 102 = **218,8 kg**.
3. Con su riqueza del 98,0 %: 218,8 / 0,980 = **223,3 kg** de anhídrido.

Sin corregir la riqueza del ZN-1 cargarías 2,200 kmol de anhídrido: 2,200 / 1,950 = 1,13 eq, no 1,10. Por eso la carga se calcula con el peso **real** y la riqueza **real** del material de partida.

**Contenido en agua, como idea.** Muchos materiales traen agua, que el laboratorio mide por ejemplo por Karl Fischer. Pesa, no es producto y a veces reacciona: el anhídrido acético con agua da ácido acético (C₄H₆O₃ + H₂O da 2 C₂H₄O₂). Si los 500 kg de ZN-1 tuvieran un 0,5 % de agua (valor de ejemplo), serían 2,5 kg: 2,5 / 18 = 0,139 kmol, que gastarían 0,139 × 102 = 14,2 kg de anhídrido. Cómo se combinan la riqueza y el agua en cada cálculo lo fija la hoja.

### Qué pasa si me equivoco en la carga
La teoría está en «Reactivo limitante y exceso». Aquí, dos casos de planta con el anhídrido de 1,10 eq.

**Caso 1. Cargo un 10 % menos.** En vez de 224,4 kg entran 202,0 kg: 1,10 × 0,90 = **0,99 eq**. El anhídrido pasa a ser el limitante: queda al menos un 1 % de ZN-1 sin reaccionar, y en la práctica más, porque el exceso cubría pérdidas. El control en proceso (*in-process control*, IPC) de material de partida residual puede salir fuera de límite, y ese ZN-1 es una impureza.

**Caso 2. Cargo el doble por error.** Entran 2,20 eq: el exceso pasa del 10 % al 120 %. Hay más reactivo que eliminar en los lavados, pueden aparecer impurezas nuevas y, si la reacción da calor o gas, habrá más de lo previsto («Calor de reacción y reacciones descontroladas»).

En los dos casos el operador **no corrige por su cuenta** añadiendo o quitando reactivo: para, avisa a su responsable, lo anota tal cual y se abre una **desviación** (*deviation*). Calidad y producción deciden.

### El rendimiento teórico de una etapa
El **rendimiento teórico** (*theoretical yield*) es lo que se obtendría sin pérdidas ni errores, a partir de lo que se carga. Se calcula siempre con el **reactivo limitante**, que en una hoja suele ser el de referencia.

Sigue el ejemplo de la riqueza 2. La etapa ficticia es: ZN-1 + anhídrido acético da ZN-2 + ácido acético, en proporción 1 : 1, con ZN-2 de M = 292 (valor de ejemplo; cuadra con 250 + 102 = 292 + 60). El limitante tiene 1,950 kmol puros:

> rendimiento teórico = 1,950 × 292 = **569,4 kg de ZN-2**

Con los 500 kg sin corregir saldrían 584 kg: un teórico inflado da un rendimiento falsamente bajo.

El **rendimiento real** (*actual yield*) es lo que se obtiene tras filtrar, centrifugar y secar. Si salen 512 kg: 512 / 569,4 × 100 = 89,9 %. La corrección por pureza y qué hacer fuera de rango están en «Rendimiento, pureza y balance de materia».

### Varias etapas: los rendimientos se multiplican
Un principio activo casi nunca sale de una sola reacción. Se fabrica un **intermedio** (*intermediate*), se aísla y es el material de partida de la etapa siguiente. Cada etapa aprovecha solo una parte de lo que recibe, así que el rendimiento global es el producto de los rendimientos:

> rendimiento global = R₁ × R₂ × ... (en tanto por uno)

**Varias etapas 1. Dos etapas al 90 %.** 0,90 × 0,90 = 0,81, es decir, **81 %** global, no 90 % ni 180 %. Como un descuento del 10 % sobre otro del 10 %.

**Varias etapas 2. En kilos.** Proceso ficticio: ZN-1 da ZN-2 (90 %) y ZN-2 da ZN-3 (M = 350, valor de ejemplo, proporción 1 : 1, 85 %). Partes de 2,000 kmol de ZN-1 puro.
1. Etapa 1: 2,000 × 0,90 = 1,800 kmol de ZN-2, 1,800 × 292 = 525,6 kg.
2. Etapa 2: 1,800 × 0,85 = 1,530 kmol de ZN-3, 1,530 × 350 = **535,5 kg**.
3. Global: 1,530 / 2,000 = 0,765, el **76,5 %**, igual que 0,90 × 0,85. Sin pérdidas habrías obtenido 2,000 × 350 = 700 kg.

En planta, las cargas de la etapa 2 se calculan con el peso real y la riqueza real del ZN-2 que salió del secadero, no con el teórico.

### Cómo aparecen estas cuentas en la hoja
La guía ICH Q7 de buenas prácticas para principios activos pide que las instrucciones maestras den la cantidad o la proporción de cada material con su unidad y, si la cantidad no es fija, el cálculo para cada tamaño de lote. De ahí la **tabla de cargas** (valores de los ejemplos):

| Material | M (kg/kmol) | eq | kmol | Riqueza | kg a cargar | Tolerancia (valor de ejemplo) | kg reales |
|---|---|---|---|---|---|---|---|
| ZN-1 | 250 | 1,00 | 1,950 | 97,5 % | 500,0 (peso real) | no aplica | 500,0 |
| Anhídrido acético | 102 | 1,10 | 2,145 | 98,0 % | 223,3 | ± 0,5 % | |

ICH Q7 pide además que las pesadas y medidas críticas las presencie otra persona o tengan un control equivalente, con las firmas de quien hace y quien comprueba cada paso crítico. Por eso el cálculo lo **verifica una segunda persona** rehaciendo la cuenta.

Con la tolerancia de ± 0,5 % (valor de ejemplo), sobre 229,0 kg de anhídrido valen de 227,9 a 230,1 kg. Si la báscula marca 230,4 kg, te has pasado un 0,6 %: fuera de tolerancia. No quitas producto ni compensas en otra carga: lo anotas tal cual, avisas y se gestiona como desviación. ICH Q7 pide documentar y explicar cualquier desviación y comparar el rendimiento real con el esperado en las etapas fijadas.

### Errores típicos y cómo evitarlos
- **Confundir kg con kmol.** «H₂SO₄ + 2 NaOH: para 98 kg de ácido, 196 kg de sosa.» Falso: 98 kg son 1 kmol; hacen falta 2 kmol de NaOH, 80 kg. Antes de aplicar la proporción, pregúntate: ¿esto son moles?
- **Olvidar el ajuste.** Con «H₂SO₄ + NaOH» sin ajustar calcularías la mitad de sosa.
- **No corregir la riqueza.** Con anhídrido al 98 %, cargar 224,4 kg en lugar de 229,0 kg deja 1,08 eq.
- **Usar el volumen en vez de la masa.** Si cargas 196,1 kg de clorhídrico al 35 % creyendo que son los 196,1 L del cálculo, metes un 14,5 % menos de lo necesario. Pasa siempre por la densidad («Densidad: de litros a kilos»).

Los procesos, productos y números de esta lección son ejemplos para aprender las cuentas. En planta manda siempre el procedimiento vigente (SOP): las cantidades, equivalentes, riquezas y tolerancias que valen son las de tu hoja de producción y los certificados de tus materiales.
`,
  plant: `
Turno de tarde en el reactor ficticio R-305. La etapa 1 del proceso ficticio ZN empieza con la carga del intermedio ZN-1, que se pesa en la báscula de la sala de sólidos: 500,0 kg netos. El certificado del lote dice riqueza 97,5 %.

La hoja de producción trae la tabla de cargas, pero el anhídrido acético de 1,10 eq queda en blanco hasta que se conocen el peso y la riqueza reales del ZN-1. Haces la cuenta: 500,0 × 0,975 / 250 = 1,950 kmol; 1,950 × 1,10 × 102 = 218,8 kg puros; con el 98,0 % de riqueza del anhídrido, 223,3 kg. Tu compañera de turno la rehace por su cuenta sin mirar la tuya y le sale lo mismo. Las dos firmáis el cálculo.

Antes de dosificar el anhídrido desde el depósito D-330, compruebas el rango: con ± 0,5 % (valor de ejemplo) valen de 222,2 a 224,4 kg. La báscula del depósito marca 223,5 kg cargados. Dentro.

Al terminar, el IPC da material de partida residual dentro de límite. La suspensión pasa a la centrífuga C-310 y el sólido al secadero S-320. Salen 508,6 kg de ZN-2 seco frente a un teórico de 569,4 kg: 89,3 %. La hoja da un rango esperado de 85 a 92 % (valor de ejemplo): cumple.

Al día siguiente, la etapa 2 no se calcula con los 569,4 kg teóricos, sino con los 508,6 kg reales y la riqueza que el laboratorio dé al ZN-2.
`,
  batchRecord: `
En la hoja de producción (*batch record*) la estequiometría aparece en la **tabla de cargas** (*charge table*) de cada etapa. Verás y anotarás:

- **Reactivo de referencia**: peso real de la báscula, número de lote y riqueza del certificado, y los kmol puros que resultan.
- **Columnas de cada reactivo**: masa molar, equivalentes, kmol, riqueza, kilos (o litros y densidad) a cargar y tolerancia.
- **Cálculo de la carga** con el peso y la riqueza reales, con la firma de quien calcula y la de quien verifica tras rehacerlo.
- **Carga real**: lo que marca la báscula o el caudalímetro, con su unidad, la hora y la firma de quien lo presencia.
- **Comprobación de la tolerancia**: dentro o fuera. Si está fuera, no se compensa: se anota tal cual, se avisa y se pone la referencia de la desviación.
- **Gases previstos**, como el CO₂ de una neutralización con bicarbonato, y la instrucción de añadir poco a poco con el venteo libre.
- **Rendimiento teórico** calculado con el limitante, el rendimiento real y el rango esperado.
- En procesos de varias etapas, el **peso y la riqueza del intermedio** que entra, tomados del lote real.
`,
  terms: [
    { es: "Estequiometría", en: "Stoichiometry", def: "Cálculo de las cantidades de reactivos y productos a partir de la ecuación ajustada." },
    { es: "Coeficiente estequiométrico", en: "Stoichiometric coefficient", def: "Número delante de cada fórmula en la ecuación; indica la proporción en moles, no en masa." },
    { es: "Ajustar por tanteo", en: "Balancing by inspection", def: "Cambiar los coeficientes, nunca las fórmulas, hasta que haya los mismos átomos de cada elemento a cada lado." },
    { es: "Equivalente", en: "Equivalent (equiv, eq)", def: "En una hoja de síntesis, moles de un reactivo por cada mol del reactivo de referencia." },
    { es: "Reactivo de referencia", en: "Reference reagent", def: "Reactivo al que se refieren los equivalentes; tiene 1,00 eq y suele ser el material de partida o el limitante." },
    { es: "Riqueza", en: "Assay / purity", def: "Porcentaje en masa de la sustancia que reacciona en un material; obliga a cargar más masa." },
    { es: "Contenido en agua", en: "Water content", def: "Agua que trae un material, medida por ejemplo por Karl Fischer; pesa, no es producto y puede gastar reactivo." },
    { es: "Rendimiento teórico", en: "Theoretical yield", def: "Producto que se obtendría sin pérdidas ni errores, calculado con el reactivo limitante." },
    { es: "Rendimiento real", en: "Actual yield", def: "Producto que se obtiene de verdad al final de la etapa." },
    { es: "Rendimiento global", en: "Overall yield", def: "Rendimiento de varias etapas seguidas: el producto de los rendimientos de cada una." },
    { es: "Intermedio", en: "Intermediate", def: "Producto de una etapa que se aísla y sirve de material de partida de la siguiente." },
    { es: "Tabla de cargas", en: "Charge table", def: "Parte de la hoja de producción con cada material, sus equivalentes, moles, kilos, tolerancia y carga real." },
    { es: "Tolerancia de carga", en: "Charge tolerance", def: "Margen aceptado alrededor de la cantidad calculada; fuera de él, se avisa y se abre una desviación." },
    { es: "Saponificación", en: "Saponification", def: "Rotura de un éster con una base, como el acetato de etilo con sosa, que da una sal y un alcohol." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Ajusta la combustión de la acetona: C₃H₆O + O₂ da CO₂ + H₂O. Si los coeficientes de la acetona, el CO₂ y el agua son 1, 3 y 3, ¿qué coeficiente lleva el O₂?",
      answer: 4,
      tolerance: 0.001,
      unit: "mol de O₂",
      explain: "A la derecha hay 3 × 2 + 3 × 1 = 9 átomos de O. La acetona aporta 1, así que faltan 8, que son 4 moléculas de O₂: C₃H₆O + 4 O₂ da 3 CO₂ + 3 H₂O.",
    },
    {
      kind: "number",
      q: "H₂SO₄ + 2 NaOH da Na₂SO₄ + 2 H₂O. ¿Cuántos kg de NaOH pura (M = 40) hacen falta para neutralizar 49 kg de ácido sulfúrico puro (M = 98)?",
      answer: 40,
      tolerance: 0.005,
      unit: "kg",
      explain: "49 / 98 = 0,5 kmol de ácido. La proporción 1 : 2 da 1,0 kmol de NaOH, y 1,0 × 40 = 40 kg.",
    },
    {
      kind: "number",
      q: "Se neutraliza ácido clorhídrico con 53 kg de carbonato de sodio (M = 106): Na₂CO₃ + 2 HCl da 2 NaCl + H₂O + CO₂. ¿Cuántos kg de CO₂ (M = 44) se desprenden?",
      answer: 22,
      tolerance: 0.005,
      unit: "kg",
      explain: "53 / 106 = 0,5 kmol de carbonato. Proporción carbonato : CO₂ = 1 : 1, así que 0,5 kmol de CO₂, y 0,5 × 44 = 22 kg.",
    },
    {
      kind: "number",
      q: "Una neutralización desprende 1,5 kmol de CO₂ que salen por el venteo a 20 °C (293,15 K) y 101325 Pa. Con R = 8,314 J/(mol·K), ¿qué volumen ocupan en m³?",
      answer: 36.1,
      tolerance: 0.01,
      unit: "m³",
      explain: "1,5 kmol = 1500 mol. V = n · R · T / P = 1500 × 8,314 × 293,15 / 101325 = 36,1 m³.",
    },
    {
      kind: "number",
      q: "Cargas 360 kg de reactivo de referencia puro (M = 180). La hoja pide 1,15 eq de un reactivo B puro de M = 60. ¿Cuántos kg de B cargas?",
      answer: 138,
      tolerance: 0.005,
      unit: "kg",
      explain: "360 / 180 = 2,0 kmol de referencia. B: 2,0 × 1,15 = 2,3 kmol, y 2,3 × 60 = 138 kg.",
    },
    {
      kind: "number",
      q: "Hacen falta 1,5 kmol de NaOH (M = 40) y se carga sosa al 50 % en peso de densidad 1,52 kg/L. ¿Cuántos litros de sosa son?",
      answer: 78.9,
      tolerance: 0.01,
      unit: "L",
      explain: "NaOH pura: 1,5 × 40 = 60 kg. Sosa al 50 %: 60 / 0,50 = 120 kg. Volumen: 120 / 1,52 = 78,9 L.",
    },
    {
      kind: "number",
      q: "El cálculo de una carga da 150,0 kg de reactivo puro. El certificado del lote dice riqueza 96,0 %. ¿Cuántos kg del material tienes que cargar?",
      answer: 156.25,
      tolerance: 0.002,
      unit: "kg",
      explain: "Masa a cargar = 150,0 / 0,960 = 156,25 kg. Se carga más, porque el 4 % del peso no es el reactivo.",
    },
    {
      kind: "number",
      q: "Un principio activo ficticio se fabrica en tres etapas con rendimientos del 92 %, 88 % y 95 %. ¿Cuál es el rendimiento global, en %?",
      answer: 76.9,
      tolerance: 0.005,
      unit: "%",
      explain: "Los rendimientos se multiplican: 0,92 × 0,88 × 0,95 = 0,769, es decir, 76,9 %.",
    },
    {
      kind: "choice",
      q: "Para la reacción H₂SO₄ + 2 NaOH da Na₂SO₄ + 2 H₂O, un compañero dice: «Como la proporción es 1 : 2, para 98 kg de ácido cargo 196 kg de NaOH pura». ¿Qué le contestas?",
      options: [
        "Tiene razón: la proporción de la ecuación vale igual para kilos que para moles",
        "No: la proporción es en moles; 98 kg son 1 kmol y hacen falta 2 kmol, 80 kg de NaOH",
        "No: la ecuación está mal ajustada y la proporción correcta en kilos es 1 : 1",
        "Tiene razón solo si la sosa viene al 50 % en peso y se carga por volumen",
      ],
      answer: 1,
      explain: "Los coeficientes cuentan moles. 98 / 98 = 1 kmol de ácido, que gasta 2 kmol de NaOH: 2 × 40 = 80 kg. Con 196 kg cargaría casi 2,5 veces la sosa necesaria.",
    },
    {
      kind: "choice",
      q: "La hoja pide 229,0 kg de anhídrido acético con tolerancia de ± 0,5 % y la báscula marca 230,4 kg ya cargados en el reactor. ¿Qué haces?",
      options: [
        "Nada: un 0,6 % de más es despreciable y se anota como 229,0 kg",
        "Quitas el exceso del reactor por la boca de hombre hasta 229,0 kg",
        "Lo anotas tal cual, avisas a tu responsable y se gestiona como desviación",
        "Reduces otra carga de la etapa para compensar el reactivo de más",
      ],
      answer: 2,
      explain: "El rango válido es de 227,9 a 230,1 kg: 230,4 kg está fuera. No se corrige por cuenta propia ni se cambia el dato: se registra el valor real, se avisa y Calidad y producción deciden dentro de la desviación.",
    },
  ],
};
