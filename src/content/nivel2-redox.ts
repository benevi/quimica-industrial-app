import type { Lesson } from "./types";

export const redoxAFondo: Lesson = {
  slug: "redox-a-fondo",
  level: 2,
  order: 13,
  title: "Oxidación y reducción a fondo: hidrogenaciones, oxidantes y corrosión",
  titleEn: "Oxidation and reduction in depth: hydrogenations, oxidisers and corrosion",
  minutes: 40,
  summary:
    "Qué significa de verdad oxidarse y reducirse, cómo se calculan los números de oxidación, cómo se ajusta una reacción contando electrones, cuánto hidrógeno se desprende o se consume, por qué una hidrogenación y un oxidante piden tantas precauciones y por qué se corroe el acero.",
  body: `
En «Oxidación y reducción» viste la idea en una tabla. Aquí vas a reconocer quién se oxida, hacer las cuentas y entender cada precaución de la hoja.

### Parte 1. Perder y ganar electrones
Las reacciones solo tocan los electrones de la corteza del átomo («Átomos y tabla periódica a fondo»). Una reacción **redox** (*redox reaction*) es aquella en la que unos electrones pasan de una sustancia a otra.

- **Oxidación** (*oxidation*): una sustancia **pierde** electrones.
- **Reducción** (*reduction*): una sustancia **gana** electrones.

Para recordarlo: al ganar electrones, que son negativos, la carga **se reduce**.

**Por qué siempre van juntas.** Un electrón no desaparece: si uno lo suelta, otro lo recoge, como en un pago. No hay oxidación sin reducción.

**Agente oxidante y agente reductor.** Los nombres confunden, así que despacio:

- El **agente oxidante** (*oxidising agent*) es el que **oxida a otro**: le quita electrones. Al quedárselos, **él se reduce**.
- El **agente reductor** (*reducing agent*) es el que **reduce a otro**: le da electrones. Al darlos, **él se oxida**.

Como un ladrón: deja a la víctima sin cartera (la oxida) y él sale ganando (se reduce).

**Las ideas antiguas, que siguen siendo útiles.** Antes de conocer los electrones se llamaba oxidación a **ganar oxígeno**, como el hierro que se cubre de herrumbre, y reducción a **perder oxígeno** o **ganar hidrógeno**. En química orgánica se sigue pensando así:

| Si una molécula... | Es una... | Ejemplo |
|---|---|---|
| Gana oxígeno o pierde hidrógeno | Oxidación | Un alcohol que pasa a ácido |
| Gana hidrógeno o pierde oxígeno | Reducción | Una hidrogenación |

Las dos ideas dicen lo mismo: el oxígeno atrae mucho los electrones y el hidrógeno los cede, así que un carbono que gana oxígeno «pierde» parte de sus electrones.

### Parte 2. Números de oxidación
Para saber quién pierde y quién gana se usa el **número de oxidación** (*oxidation number*, también *oxidation state*): una carga ficticia que se asigna a cada átomo como si los electrones de cada enlace se los quedara entero el átomo que más los atrae. Es contabilidad, no una carga real, pero funciona.

**Reglas sencillas**, en este orden:

1. Un elemento sin combinar (Fe, Zn, H₂, O₂, Cl₂) vale **0**.
2. Un ion de un solo átomo vale su carga: Na⁺ es +1; Cl⁻, −1. El sodio y el potasio valen +1 en sus compuestos.
3. El **hidrógeno** suele valer **+1** (en los hidruros metálicos, como el NaH, −1).
4. El **oxígeno** suele valer **−2** (en los peróxidos, como el H₂O₂, −1).
5. Todos suman **0** en una molécula neutra, o la carga del ion si es un ion.

**Seis ejemplos resueltos.**

| Sustancia | Cuenta | Resultado |
|---|---|---|
| Agua, H₂O | 2 × (+1) + O = 0 | O = −2, H = +1 |
| Peróxido de hidrógeno, H₂O₂ | 2 × (+1) + 2 × O = 0 | O = −1 (por eso es especial) |
| Cloruro de sodio, NaCl | +1 + Cl = 0 | Cl = −1 |
| Ácido sulfúrico, H₂SO₄ | 2 × (+1) + S + 4 × (−2) = 0 | S = +6 |
| Permanganato de potasio, KMnO₄ | +1 + Mn + 4 × (−2) = 0 | Mn = +7 |
| Metanol, CH₃OH | C + 4 × (+1) + (−2) = 0 | C = −2 |

El oxígeno del agua oxigenada está a medio camino: puede bajar a −2 (formando agua), y por eso oxida, o subir a 0 (oxígeno gas) al descomponerse. El manganeso a +7 está en su valor más alto y tiende a ganar electrones: el permanganato es un oxidante fuerte.

**El carbono que se oxida paso a paso.** Compara el carbono del metanol con el de sus «descendientes» al oxidarse:

| Sustancia | Fórmula | Número de oxidación del carbono |
|---|---|---|
| Metanol (alcohol) | CH₃OH | −2 |
| Formaldehído | CH₂O | 0 |
| Ácido fórmico (ácido) | HCOOH | +2 (cuenta: C + 2 × (+1) + 2 × (−2) = 0) |
| Dióxido de carbono | CO₂ | +4 |

Cada paso gana oxígeno o pierde hidrógeno, y el número del carbono sube de 2 en 2: de alcohol a ácido, el carbono se ha oxidado. El CO₂ es el final del camino; la combustión de un disolvente es una oxidación muy rápida que acaba ahí.

### Parte 3. Ajustar una reacción contando electrones
En «Ecuaciones químicas y estequiometría» se ajustaba contando átomos. En una redox se cuadran también **los electrones: los perdidos tienen que ser los ganados**. El método:

1. Escribe los números de oxidación y busca los que cambian.
2. Cuenta cuántos electrones pierde el que se oxida y cuántos gana el que se reduce.
3. Multiplica para que los dos números sean iguales (el mínimo común múltiplo).
4. Termina de ajustar los demás átomos y comprueba.

**Ejemplo 1. Hierro con cloro.** Fe + Cl₂ da FeCl₃.

- Hierro: de 0 a +3, **pierde 3**: se oxida; es el reductor.
- Cloro: de 0 a −1; el Cl₂ tiene dos átomos, así que **gana 2**: se reduce; es el oxidante.
- Mínimo común múltiplo de 3 y 2: 6. Hacen falta 2 Fe (6 perdidos) y 3 Cl₂ (6 ganados).

> 2 Fe + 3 Cl₂ da 2 FeCl₃

Comprobación: 2 Fe y 6 Cl a cada lado.

**Ejemplo 2. Cinc con ácido clorhídrico.** Zn + HCl da ZnCl₂ y H₂.

- Cinc: de 0 a +2, **pierde 2**: se oxida.
- Hidrógeno: de +1 en el HCl a 0 en el H₂; una molécula de H₂ necesita dos, así que **gana 2**.
- El cloro sigue a −1: solo acompaña.

> Zn + 2 HCl da ZnCl₂ + H₂

El oxidante es el ion H⁺ del ácido. Por eso la ficha de datos de seguridad del ácido clorhídrico de la app dice que con metales desprende hidrógeno, y lleva la frase H290 «Puede ser corrosivo para los metales». Con el hierro del acero al carbono: Fe + 2 HCl da FeCl₂ + H₂.

### Parte 4. Cuánto hidrógeno sale de un metal
De «El mol a fondo» se usan dos cosas: moles = masa / masa molar, y un mol de gas ideal ocupa unos 22,4 L a 0 °C y 1 atmósfera. Masas atómicas redondeadas: Fe 55,85; Zn 65,4.

**Cuenta: 1 kg de virutas de hierro que caen en un depósito de ácido clorhídrico** (valor de ejemplo).

1. Moles de hierro: 1000 / 55,85 = **17,9 mol**; la ecuación da 1 H₂ por Fe: 17,9 mol de H₂.
2. Volumen a 0 °C y 1 atm: 17,9 × 22,4 = **401 L**, unos 0,40 m³ (a 20 °C, unos 431 L).
3. Masa: 17,9 × 2 = unos 36 g.

Treinta y seis gramos que ocupan cuatrocientos litros y, como verás, arden con una chispa diminuta. Por eso la ficha de la app manda guardar el ácido clorhídrico en plástico, acero ebonitado o vidrio, nunca en metal.

### Parte 5. La hidrogenación catalítica
Reducir una molécula orgánica suele ser añadirle hidrógeno. Una forma de hacerlo es la **hidrogenación catalítica** (*catalytic hydrogenation*): el hidrógeno gas (H₂) reacciona con la molécula sobre la superficie de un **catalizador** metálico, a menudo **paladio sobre carbón** (*palladium on carbon*, Pd/C): polvo de carbón con paladio repartido en su superficie. Acelera la reacción sin consumirse («Velocidad de reacción y catalizadores»).

**En planta, en orden**, en un reactor a presión:

1. **Carga** del sustrato, del disolvente y del catalizador, húmedo, en la forma y el orden que marque la hoja.
2. **Inertización**: ciclos de nitrógeno hasta bajar el oxígeno por debajo del límite de la hoja. La NTP 567 del Instituto Nacional de Seguridad y Salud en el Trabajo (INSST) da una concentración límite de oxígeno del 5 % para el hidrógeno y pide quedarse de un 2 a un 3 % por debajo («Inertización a fondo»).
3. **Presurización con hidrógeno** hasta la consigna, con agitación: el gas tiene que disolverse y llegar al catalizador.
4. **Reacción**: se vigilan presión, temperatura y **consumo de hidrógeno**. Si el consumo se detiene, el control en proceso confirma si ha terminado.
5. **Despresurización** al venteo y **purga con nitrógeno** antes de abrir nada. Las dos purgas, antes y después, impiden lo mismo: que hidrógeno y aire se junten dentro del equipo.
6. **Filtración del catalizador** bajo nitrógeno y sin dejar que se seque («Filtros a fondo»).

**Riesgo 1: el hidrógeno.** El Reglamento CLP clasifica el hidrógeno como **gas inflamable de categoría 1**, con la frase H220 «Gas extremadamente inflamable». Según el reglamento, son de categoría 1 los gases que arden con el aire en mezclas del 13 % o menos, o con una **banda de inflamabilidad** (*flammability range*), la distancia entre la mezcla más pobre y la más rica que arden, de al menos 12 puntos. Además, prende con muy poca energía: la NTP 567 da 0,019 mJ como energía mínima de ignición de las atmósferas de hidrógeno (la NTP 1138 toma 0,016 mJ), y recuerda que chispas insignificantes bastan: una descarga de electricidad estática que ni notarías. Sus límites de inflamabilidad en porcentaje están en su ficha de datos de seguridad; aquí no se dan porque no se han podido leer en una fuente oficial.

**Riesgo 2: el catalizador, que arde solo.** La NTP 479 del INSST incluye los **metales finamente divididos** y los **hidruros** entre los compuestos que, en contacto con el aire, pueden **inflamarse espontáneamente**. El catalizador gastado es metal muy dividido y empapado en disolvente: seco y al aire, puede arder sin chispa. El CLP llama **pirofórico** (*pyrophoric*) al sólido que, aun en pequeñas cantidades, puede inflamarse en cinco minutos al aire, con la frase H250 «Se inflama espontáneamente en contacto con el aire». Por eso, como dice «Oxidación y reducción», el Pd/C se maneja húmedo y bajo nitrógeno, y la torta se guarda con agua en el recipiente que indique el procedimiento.

**Cuenta: consumo teórico de hidrógeno.** Valores de ejemplo: un intermedio ficticio con un grupo nitro (–NO₂) se reduce a amina (–NH₂):

> R–NO₂ + 3 H₂ da R–NH₂ + 2 H₂O

Se cargan 500 kg de intermedio, de masa molar 250 g/mol.

1. Moles de intermedio: 500000 g / 250 g/mol = **2000 mol** (2 kmol).
2. Cada mol consume 3 mol de H₂: 2000 × 3 = **6000 mol** de H₂ (6 kmol).
3. En **metros cúbicos normales** (*normal cubic metres*, m³N o Nm³), aquí tomados a 0 °C y 1 atm. Ojo: como viste en «Nitrógeno, aire comprimido y vacío a fondo», no todos los documentos usan la misma referencia (el reglamento de equipos a presión usa 15 °C y 1,013 bar), así que mira siempre cuál. Con 0 °C y 1 atm: 6000 × 22,4 L = 134400 L = **134 m³N**.
4. En masa: 6000 × 2 g = **12 kg** de hidrógeno.

Doce kilos que llenarían un salón hasta el techo. Si el contador marca mucho menos al pararse el consumo, la reacción puede estar incompleta; si marca mucho más, algo no cuadra (una fuga, una reacción distinta). En los dos casos se avisa. Y mira las condiciones de referencia de la hoja: el Real Decreto 2032/2009 recuerda que los datos se refieren hoy a 1 bar y antes de 1982 a la atmósfera normal.

**Otras reducciones: los hidruros metálicos** (*metal hydrides*), solo como mención: el hidruro de litio y aluminio (LiAlH₄) o el borohidruro de sodio (NaBH₄). La NTP 237 del INSST explica que sus reacciones con el agua son exotérmicas y liberan hidrógeno capaz de inflamarse, por ejemplo LiAlH₄ + 4 H₂O da Al(OH)₃ + LiOH + 4 H₂. En el anexo VI del CLP, el hidruro de litio y aluminio y el hidruro de sodio llevan la frase H260 «En contacto con el agua desprende gases inflamables que pueden inflamarse espontáneamente». Por eso se cargan en equipo seco e inertizado, y el agua o el ácido del final se añaden despacio y con el venteo libre.

### Parte 6. Oxidaciones y oxidantes
Un **oxidante** arranca electrones con fuerza. Los habituales:

| Oxidante | Fórmula | Qué dice el CLP |
|---|---|---|
| Peróxido de hidrógeno (agua oxigenada) | H₂O₂ | Concentrado (70 % o más): líquido comburente de categoría 1, H271. Del 50 % al 70 %: categoría 2, H272 |
| Permanganato de potasio | KMnO₄ | Sólido comburente de categoría 2, H272 |
| Hipoclorito de sodio (lejía) | NaClO | Corrosivo, H314; con un 5 % o más de cloro activo, EUH031 (con ácidos libera un gas tóxico) |
| Oxígeno | O₂ | Gas comburente, H270 |

Textos oficiales: H271 «Puede provocar un incendio o una explosión; muy comburente»; H272 «Puede agravar un incendio; comburente»; H270 «Puede provocar o agravar un incendio; comburente». Pictograma: llama sobre un círculo. **Comburente** (*oxidiser*), según el CLP, es lo que, sin ser necesariamente combustible, puede provocar o favorecer la combustión de otros materiales, por lo general al desprender oxígeno.

**Por qué un oxidante junto a un combustible es peligroso.** El fuego necesita combustible, comburente y una fuente de ignición. El aire trae el comburente diluido, con un 21 % de oxígeno; un oxidante concentrado lo pone **dentro de la propia mezcla**. La NTP 630 del INSST lo muestra con el oxígeno: por encima del 25 % la mayoría de los materiales pueden arder, incluso de forma explosiva, y los aceites y grasas son especialmente peligrosos.

**Incompatibilidades.** Algunas de la NTP 479 del INSST:

| Producto | No debe juntarse con |
|---|---|
| Oxidantes en general | Materias inflamables, hidruros, sulfuros, aluminio, magnesio o circonio en polvo |
| Reductores en general | Nitratos, peróxidos, halogenatos, flúor |
| Peróxido de hidrógeno | Metanol, etanol, acetato de etilo, ácido acético, glicerina |
| Permanganato de potasio | Alcoholes, acetona, materia orgánica, la mayoría de los metales |
| Hipocloritos | Ácidos y carbón activado |
| Ácido clorhídrico | Hipocloritos: se desprende cloro |
| Líquidos inflamables | Peróxido de hidrógeno, ácido nítrico, halógenos |

Los disolventes de planta (metanol, etanol, acetona, acetato de etilo) están en la columna de la derecha. Por eso los oxidantes **se almacenan separados** de inflamables y reductores («Almacenamiento, emergencias y residuos a fondo»), y su derrame no se recoge con serrín ni trapos, que son materia orgánica combustible.

**Peróxidos que aparecen solos.** Algunos disolventes forman **peróxidos** mientras están guardados, y pueden explotar. La NTP 479 pone los **éteres** entre las sustancias fácilmente peroxidables y pide precauciones al abrir un recipiente que lleva mucho tiempo cerrado sin usarse. El CLP tiene una frase para ello, EUH019 «Puede formar peróxidos explosivos», que en la tabla del anexo VI del texto de 2008 llevan el éter dietílico y el tetrahidrofurano (THF). La NTP 479 describe un ensayo de detección con yoduro de potasio: lo hace quien diga el procedimiento.

### Parte 7. Redox en el agua y los residuos
Solo como idea. El **cloro** y el **hipoclorito** desinfectan porque oxidan: la guía de agua farmacéutica de la Organización Mundial de la Salud (OMS) cita la desinfección con ozono o hipoclorito de sodio entre los tratamientos del agua potable, y el ozono, el peróxido de hidrógeno o el ácido peracético para sanitizar los sistemas. «Agua farmacéutica a fondo» explica por qué ese cloro se quita con un reductor antes de la ósmosis.

### Parte 8. La corrosión es una redox
La **corrosión** (*corrosion*) del hierro es una oxidación: el hierro (0) pierde electrones y pasa a +2 y luego a +3, y el oxígeno disuelto en el agua los gana. Hacen falta agua y oxígeno a la vez. La herrumbre es porosa: no protege, y la corrosión sigue por debajo.

**Por qué resiste el acero inoxidable.** El inoxidable lleva cromo. Con el oxígeno se forma en su superficie una **capa pasiva** (*passive layer*): una película de óxido de cromo invisible, pero continua y adherida, que separa el metal del medio. Si se raya, con oxígeno se rehace sola: es como un barniz que se repara.

**Qué la ataca.**

- **Los cloruros** (Cl⁻, del ácido clorhídrico, la sal o la lejía) rompen la capa en puntos concretos. Allí el metal se disuelve hacia dentro: una **picadura** (*pitting*), un agujero pequeño y profundo, casi invisible por fuera. La guía de la FDA sobre sistemas de agua de alta pureza cuenta que tubos de inoxidable de un intercambiador, vaciados con restos de humedad y aire, acabaron con agujeros diminutos (*pinholes*).
- **Los ácidos fuertes**, sobre todo calientes, disuelven la capa y el metal, desprendiendo hidrógeno como en la parte 4.

Por eso las etapas con ácidos o cloruros se hacen en **acero vitrificado** (*glass-lined steel*) o en aleaciones especiales, como viste en «Tuberías, válvulas y conexiones». Los cuidados del vidrio están en «El reactor a fondo».

**Limpiar y pasivar.** La guía ICH Q7 pide que las superficies que tocan materias, intermedios o principios activos no alteren su calidad, y un acero corroído suelta metal al producto. La guía de la OMS recomienda considerar el **pasivado** (*passivation*) de los sistemas de acero inoxidable tras la instalación y tras modificaciones importantes, con un procedimiento escrito que fije disolución, concentración, temperatura y tiempo de contacto, y con registro. Pasivar es tratar la superficie limpia para que la capa pasiva quede completa; lo hace quien indique el procedimiento.

### Parte 9. Pilas y electrodos, solo como idea
Si el que pierde electrones y el que los gana se separan y se unen con un cable, los electrones viajan por él: es una **pila** (*electrochemical cell*), y entre sus dos **electrodos** (*electrodes*) aparece una tensión. El **electrodo de pH** genera una tensión que depende de la acidez. La **conductividad** mide otra cosa: cuántos iones llevan la corriente. Su calibración y sus fallos están en «Instrumentos de medida a fondo».

### Parte 10. Qué vigila y qué no hace nunca el operador
**Vigila:**

- El oxígeno medido antes de meter hidrógeno, y presión, temperatura y consumo durante la hidrogenación.
- Que el catalizador gastado sigue húmedo y bajo nitrógeno.
- Las etiquetas (H220, H250, H260, H270, H271, H272, EUH019) y la fecha de apertura de los éteres.
- Óxido, picaduras o restos de ácido en los equipos de acero: se anotan y se avisa.

**No hace nunca:**

- Abrir un equipo con hidrógeno sin despresurizar y purgar con nitrógeno según la hoja.
- Dejar secar una torta de catalizador o tirarla a una papelera.
- Juntar un oxidante con disolventes, materia orgánica o reductores, recoger su derrame con serrín o trapos, o mezclar lejía con ácidos.
- Usar un éter abierto hace mucho o de fecha dudosa sin la comprobación de peróxidos que pida el procedimiento.
- Dejar ácido o salmuera parados en un equipo de inoxidable más tiempo del que permite el procedimiento.

Los números y ejemplos de esta lección sirven para entender. En planta manda siempre el procedimiento vigente (SOP): las presiones, los límites de oxígeno, los tiempos y las precauciones de tu producto son los de tu hoja de producción.
`,
  plant: `
Lote de ejemplo del intermedio ficticio NX-31 en la planta ficticia de la lección. En el reactor de presión HR-512 se reduce un grupo nitro con hidrógeno y Pd/C. La hoja da los datos de ejemplo: 500 kg de intermedio de masa molar 250 g/mol y un consumo teórico de 134 m³N de hidrógeno.

Iván, el operador, comprueba que la boca de hombre está cerrada y hace los ciclos de nitrógeno: el analizador marca 0,8 % de oxígeno, por debajo del 2 % de la hoja. Anota el valor y la hora. Presuriza con hidrógeno a la consigna y arranca la agitación. Durante las horas siguientes registra presión, temperatura y lectura del contador de hidrógeno.

El consumo se para en 98 m³N, lejos de los 134 esperados. Iván no sube la presión ni la temperatura por su cuenta: avisa a la jefa de turno. El control en proceso confirma reacción incompleta, y el responsable decide los pasos según el procedimiento.

Al final despresuriza al venteo, purga tres veces con nitrógeno y pasa la mezcla al filtro cerrado FC-514 bajo nitrógeno. Antes de soplar la torta, comprueba que la hoja manda dejarla húmeda con disolvente, y la descarga a un bidón con agua etiquetado como catalizador gastado.

En el pasillo ve que alguien ha dejado un bidón de peróxido de hidrógeno junto a los bidones de metanol. No lo mueve a ciegas: mira la etiqueta (H271), avisa y lo llevan al almacén de comburentes. Todo es ficticio.
`,
  batchRecord: `
- **Inertización antes del hidrógeno**: número de ciclos, presiones alcanzadas y oxígeno medido, con hora y firma.
- **Hidrogenación**: consigna y presión real de hidrógeno, temperatura, velocidad de agitación, lecturas del contador de hidrógeno y hora de fin de consumo.
- **Consumo de hidrógeno**: teórico (por ejemplo, 134 m³N) frente a real; cualquier diferencia grande se anota y se comunica.
- **Fin de reacción**: resultado del control en proceso antes de despresurizar.
- **Purga final**: despresurización al venteo y ciclos de nitrógeno antes de abrir o trasvasar.
- **Catalizador**: lote y cantidad cargada; filtración bajo nitrógeno; confirmación de que la torta se mantuvo húmeda; recipiente y etiqueta del residuo.
- **Oxidantes**: producto, concentración y frase de peligro (H271, H272); velocidad de adición y temperatura máxima si la hoja lo pide.
- **Disolventes peroxidables**: fecha de apertura del envase y resultado de la comprobación de peróxidos si la exige el procedimiento.
- **Estado del equipo**: corrosión, picaduras o restos observados durante la inspección o la limpieza.
`,
  terms: [
    { es: "Oxidación", en: "Oxidation", def: "Pérdida de electrones; en orgánica, a menudo ganar oxígeno o perder hidrógeno. Sube el número de oxidación." },
    { es: "Reducción", en: "Reduction", def: "Ganancia de electrones; en orgánica, a menudo ganar hidrógeno o perder oxígeno. Baja el número de oxidación." },
    { es: "Agente oxidante", en: "Oxidising agent", def: "Sustancia que quita electrones a otra y, al hacerlo, se reduce." },
    { es: "Agente reductor", en: "Reducing agent", def: "Sustancia que da electrones a otra y, al hacerlo, se oxida." },
    { es: "Número de oxidación", en: "Oxidation number", def: "Carga ficticia de un átomo calculada como si todos sus enlaces fueran iónicos. Sirve para saber quién se oxida y quién se reduce." },
    { es: "Hidrogenación catalítica", en: "Catalytic hydrogenation", def: "Reducción con hidrógeno gas sobre un catalizador metálico, como el paladio sobre carbón." },
    { es: "Paladio sobre carbón", en: "Palladium on carbon (Pd/C)", def: "Catalizador de hidrogenación formado por paladio repartido sobre polvo de carbón. Gastado y seco puede arder al aire." },
    { es: "Metro cúbico normal", en: "Normal cubic metre (Nm³)", def: "Cantidad de gas que ocuparía un metro cúbico en unas condiciones fijas, en esta lección 0 °C y 1 atm. La hoja dice cuáles usa." },
    { es: "Pirofórico", en: "Pyrophoric", def: "Según el CLP, sólido o líquido que puede inflamarse en pocos minutos en contacto con el aire (frase H250)." },
    { es: "Hidruro metálico", en: "Metal hydride", def: "Reductor como el LiAlH₄ o el NaBH₄; con agua libera hidrógeno inflamable." },
    { es: "Comburente", en: "Oxidiser", def: "Producto que puede provocar o favorecer la combustión de otros, por lo general al desprender oxígeno (frases H270, H271, H272)." },
    { es: "Peróxido", en: "Peroxide", def: "Compuesto con dos oxígenos unidos, cada uno con número de oxidación −1. Algunos éteres los forman al envejecer y pueden explotar." },
    { es: "Capa pasiva", en: "Passive layer", def: "Película finísima de óxido de cromo que protege al acero inoxidable. La atacan los cloruros y los ácidos." },
    { es: "Picadura", en: "Pitting", def: "Corrosión en un punto que forma un agujero pequeño y profundo; típica de los cloruros sobre el inoxidable." },
  ],
  quiz: [
    {
      kind: "number",
      q: "¿Cuál es el número de oxidación del manganeso en el permanganato de potasio, KMnO₄? (K vale +1 y O vale −2.)",
      answer: 7,
      tolerance: 0.001,
      unit: "",
      explain: "La suma debe ser 0: +1 + Mn + 4 × (−2) = 0, así que Mn = +7, su valor más alto. Por eso el permanganato es un oxidante fuerte.",
    },
    {
      kind: "number",
      q: "¿Cuál es el número de oxidación del nitrógeno en el ácido nítrico, HNO₃? (H vale +1 y O vale −2.)",
      answer: 5,
      tolerance: 0.001,
      unit: "",
      explain: "+1 + N + 3 × (−2) = 0, así que N = +5. Es un nitrógeno muy oxidado: el ácido nítrico concentrado es incompatible con líquidos inflamables según la NTP 479.",
    },
    {
      kind: "number",
      q: "Reacción: Zn + 2 HCl da ZnCl₂ + H₂. Se disuelven 130,8 g de cinc (masa molar 65,4 g/mol). Tomando 22,4 L por mol de gas a 0 °C y 1 atm, ¿cuántos litros de hidrógeno se desprenden en esas condiciones?",
      answer: 44.8,
      tolerance: 0.02,
      unit: "L",
      explain: "Moles de cinc: 130,8 / 65,4 = 2 mol. La ecuación da 1 mol de H₂ por mol de Zn: 2 mol. Volumen: 2 × 22,4 = 44,8 L.",
    },
    {
      kind: "number",
      q: "Caen 2 kg de virutas de hierro (masa molar 55,85 g/mol) en un depósito de ácido clorhídrico: Fe + 2 HCl da FeCl₂ + H₂. Con 22,4 L por mol a 0 °C y 1 atm, ¿cuántos metros cúbicos de hidrógeno pueden desprenderse en esas condiciones? Da un decimal.",
      answer: 0.8,
      tolerance: 0.02,
      unit: "m³",
      explain: "Moles de hierro: 2000 / 55,85 = 35,8 mol, y otros tantos de H₂. Volumen: 35,8 × 22,4 = 802 L, es decir, unos 0,8 m³ de un gas que arde con una chispa mínima.",
    },
    {
      kind: "number",
      q: "Valores de ejemplo: se hidrogenan 300 kg de un intermedio de masa molar 150 g/mol que tiene un doble enlace; cada mol consume 1 mol de H₂. Con 22,4 L por mol, ¿cuál es el consumo teórico de hidrógeno en metros cúbicos normales (0 °C y 1 atm)?",
      answer: 44.8,
      tolerance: 0.02,
      unit: "m³N",
      explain: "Moles: 300000 / 150 = 2000 mol, que consumen 2000 mol de H₂. Volumen: 2000 × 22,4 = 44800 L = 44,8 m³N, unos 4 kg de hidrógeno.",
    },
    {
      kind: "number",
      q: "Una reducción de un grupo nitro a amina sigue R–NO₂ + 3 H₂ da R–NH₂ + 2 H₂O. Si se cargan 4 kmol de intermedio, ¿cuántos kmol de hidrógeno se consumen en teoría?",
      answer: 12,
      tolerance: 0.001,
      unit: "kmol",
      explain: "La ecuación pide 3 mol de H₂ por cada mol de intermedio: 4 × 3 = 12 kmol de hidrógeno.",
    },
    {
      kind: "choice",
      q: "Filtras el Pd/C gastado de una hidrogenación. La torta del filtro empieza a verse seca por arriba y un compañero propone soplar con aire para acabar antes. ¿Qué haces?",
      options: [
        "Soplar con aire unos minutos, porque así la torta pesa menos y se descarga mejor",
        "No soplar con aire: mantener la torta húmeda y bajo nitrógeno como dice la hoja, y avisar",
        "Dejar el filtro abierto para que el disolvente se evapore más deprisa",
        "Rascar la torta seca a un cubo de basura normal para ganar tiempo",
      ],
      answer: 1,
      explain: "El catalizador gastado es metal muy dividido con hidrógeno y disolvente; la NTP 479 incluye los metales finamente divididos entre los que se inflaman solos al aire. Se mantiene húmedo y bajo nitrógeno.",
    },
    {
      kind: "choice",
      q: "Vas a abrir la válvula de hidrógeno de un reactor recién cargado. ¿Qué debe estar comprobado y anotado antes?",
      options: [
        "Que el reactor está a la temperatura de reacción, sin importar el gas que tiene dentro",
        "Que el agitador está parado para que el hidrógeno no se mezcle",
        "Que la boca de hombre está entreabierta para ventilar",
        "Que se ha inertizado con nitrógeno y el oxígeno medido está por debajo del límite de la hoja",
      ],
      answer: 3,
      explain: "Si el hidrógeno entra sobre aire se forma una mezcla inflamable dentro del equipo. La NTP 567 da una concentración límite de oxígeno del 5 % para el hidrógeno y pide margen por debajo.",
    },
    {
      kind: "choice",
      q: "Al limpiar, alguien quiere echar los restos de lejía (hipoclorito de sodio) al mismo bidón de residuos ácidos con ácido clorhídrico. ¿Qué le dices?",
      options: [
        "Que no: el hipoclorito con ácido clorhídrico desprende cloro, un gas tóxico",
        "Que sí: los dos son líquidos acuosos y se diluyen entre sí",
        "Que sí, siempre que se haga despacio y con guantes",
        "Que no, pero solo porque el bidón se puede llenar demasiado",
      ],
      answer: 0,
      explain: "La NTP 479 recoge que el ácido clorhídrico con hipocloritos desprende cloro, y el CLP asigna la frase EUH031 a la lejía con un 5 % o más de cloro activo. Cada residuo va a su recipiente según el procedimiento.",
    },
    {
      kind: "choice",
      q: "En el almacén encuentras un bidón de THF abierto hace mucho tiempo, con la etiqueta EUH019. Te piden cargarlo tal cual en el reactor de la siguiente etapa. ¿Qué es lo correcto?",
      options: [
        "Cargarlo, porque el THF es solo inflamable y el reactor está inertizado",
        "Añadirle agua oxigenada para limpiar lo que haya dentro antes de cargarlo",
        "No cargarlo y avisar: puede haber formado peróxidos explosivos con el tiempo",
        "Cargarlo más caliente para que se mezcle mejor con el resto de la carga",
      ],
      answer: 2,
      explain: "EUH019 es «Puede formar peróxidos explosivos». La NTP 479 incluye los éteres entre los peroxidables y pide precaución con envases viejos; la comprobación la hace quien diga el procedimiento. Y el agua oxigenada es un oxidante: nunca se añade a un disolvente.",
    },
  ],
};
