import type { Lesson } from "./types";

export const balanceAFondo: Lesson = {
  slug: "balance-a-fondo",
  level: 2,
  order: 5,
  title: "Rendimiento y balance de materia a fondo: que cuadren los kilos del lote",
  titleEn: "Yield and mass balance in depth: making the batch kilos add up",
  minutes: 38,
  summary:
    "Rendimiento en masa frente a rendimiento molar, corrección por riqueza y por humedad, la base seca, lo que pide ICH Q7 sobre rendimientos y rangos esperados, el balance de un lote completo etapa a etapa, el balance del producto y del disolvente, la conciliación y cómo se usa todo esto para investigar un lote que no cuadra.",
  body: `
En «Rendimiento, pureza y balance de materia» viste las fórmulas en una página. Aquí vas a seguir los kilos de un lote entero, del primer saco al último bidón, y a usar esas cuentas como lo hace un investigador. La riqueza de un reactivo, los equivalentes y el cálculo del rendimiento teórico se explican en la lección «Estequiometría a fondo»: aquí se usan sin repetirlos.

### La idea: los kilos no desaparecen
En «La materia a fondo» viste que la masa se conserva. En un lote eso se convierte en una regla de contable: **cada kilo que entra tiene que estar en algún sitio** cuando acaba. En el producto, en un bidón de aguas madres, en el depósito de destilado, en una muestra o pegado a una pared.

Es como la caja de un bar al cerrar: si faltan 2 euros, será el redondeo; si faltan 200, algo ha pasado.

### Rendimiento teórico, real y porcentual
- **Rendimiento teórico** (*theoretical yield*): lo que saldría si no se perdiera nada. La guía ICH Q7 lo define así: la cantidad que se produciría, según el material que se va a usar, sin ninguna pérdida ni error.
- **Rendimiento real** (*actual yield*): lo que pesas de verdad.
- **Rendimiento porcentual**: real / teórico × 100.

En planta conviven dos maneras de expresarlo y no son lo mismo:

- **Rendimiento en masa** (*weight yield*): kg de producto por kg de material de partida. Solo divide pesos.
- **Rendimiento molar** (*molar yield*): moles de producto obtenidos por moles que podían salir. Es el que dice cuánto de la reacción se ha aprovechado.

Si el producto y el material de partida tienen masas molares distintas, el rendimiento en masa engaña. Una molécula que gana átomos pesa más; una que los pierde, menos.

**Ejemplo 1: el producto pesa más que el material de partida** (valores de ejemplo). Se cargan 100,0 kg del material de partida ficticio MP-7 (masa molar 180 g/mol, supuesto puro) y cada molécula da una del producto KR-40 (250 g/mol). Moles: 100,0 / 180 = 0,5556 kmol. Teórico: 0,5556 × 250 = **138,9 kg**. Se obtienen 118,0 kg.
- En masa: 118,0 / 100,0 = 1,18 kg/kg. Dicho en porcentaje, «118 %».
- Molar: 118,0 / 138,9 × 100 = **85,0 %**.

Ese «118 %» no es un error: el producto lleva los átomos que aportó el reactivo.

**Ejemplo 2: el producto pesa menos.** Una etapa quita a la molécula un grupo de átomos que la protegía: se cargan 150,0 kg de un intermedio de 320 g/mol y sale un producto de 220 g/mol. Teórico: 150,0 / 320 × 220 = **103,1 kg**. Se obtienen 92,0 kg.
- En masa: 92,0 / 150,0 = 0,61 kg/kg. Parece un desastre.
- Molar: 92,0 / 103,1 × 100 = **89,2 %**. Es una etapa buena.

**Ejemplo 3: una sal.** Se hace la sal clorhídrica de una base de 300 g/mol: cada molécula toma una de ácido clorhídrico (36,46 g/mol) y la sal pesa 336,46 g/mol. Con 200,0 kg de base, teórico: 200,0 / 300 × 336,46 = **224,3 kg**. Se obtienen 210,0 kg: 1,05 kg/kg en masa, **93,6 %** molar.

Tu hoja dirá cuál usa; compara siempre con el rango en esa misma forma.

### Rendimiento corregido: humedad y riqueza
La báscula pesa juntos el producto, el líquido que lo moja y sus impurezas. Por eso un producto húmedo o impuro **rinde de más** si no se corrige.

- **Pérdida por secado** (*loss on drying*, LOD): el porcentaje de peso que pierde una muestra al secarla en el laboratorio. Es, sobre todo, el disolvente o el agua que quedaba.
- **Base seca** (*dry basis*): el peso que quedaría sin ese líquido. Masa en base seca = masa × (1 − LOD / 100).
- **Riqueza o valoración** (*assay*): el porcentaje del material que es de verdad el producto. El certificado del laboratorio dice si se expresa sobre el producto tal cual (*as is*) o en base seca: no es lo mismo.

**Ejemplo 4: humedad** (valores de ejemplo). Se pesan 125,0 kg con una pérdida por secado del 8,0 %. Teórico: 130,0 kg. Base seca: 125,0 × 0,92 = 115,0 kg. Sin corregir: 125,0 / 130,0 = 96,2 %. Corregido: 115,0 / 130,0 = **88,5 %**. Casi 8 puntos eran disolvente.

**Ejemplo 5: riqueza.** Se obtienen 110,0 kg de un producto seco con una riqueza del 95,0 % tal cual. Producto puro: 110,0 × 0,95 = 104,5 kg. Teórico: 120,0 kg. Sin corregir, 91,7 %; corregido, **87,1 %**.

**Ejemplo 6: las dos cosas.** Con el teórico del ejemplo 1 (138,9 kg) se pesan 140,0 kg. La pérdida por secado es del 3,0 % y la riqueza, del 98,0 % en base seca. Puro: 140,0 × 0,97 × 0,98 = 133,1 kg. Sin corregir sale un imposible 100,8 %; corregido, **95,8 %**. Si un rendimiento pasa del 100 %, lo primero es mirar la humedad y la riqueza.

### Lo que pide ICH Q7
La guía ICH Q7 de buenas prácticas de fabricación para principios activos trata el rendimiento en varios apartados. Lo que se anota en cada paso está en «La hoja de producción a fondo»; aquí, lo que toca al rendimiento:

| Apartado | Qué dice |
|---|---|
| 6.41 | La instrucción maestra incluye los **rangos de rendimiento esperado** en las fases que corresponda |
| 6.52 | La hoja del lote recoge el **rendimiento real** en las fases o momentos que corresponda, y las pesadas de cada material |
| 8.14 | El rendimiento real se compara con el esperado en los pasos designados. Los rangos se fijan con datos de laboratorio, planta piloto o fabricación. Las desviaciones de rendimiento en pasos críticos se investigan para ver su efecto en la calidad |
| 8.15 | Toda desviación se documenta y se explica; las críticas se investigan |
| 6.53 | Procedimientos para investigar desviaciones críticas, que se extienden a otros lotes que puedan estar afectados |

El **rango de rendimiento esperado** (*expected yield range*) es la franja impresa en tu hoja, por ejemplo «82,0 a 90,0 %» (valor de ejemplo). La guía define el rendimiento esperado como la cantidad, o el porcentaje del teórico, que se prevé obtener según datos anteriores. No es una meta: es lo normal. Salir por arriba es tan sospechoso como por abajo.

**Si tu rendimiento cae fuera del rango:**
1. No repitas la pesada hasta que «salga», ni redondees, ni cambies el teórico.
2. Revisa contigo y con un segundo operador las cuentas, las unidades y que la báscula sea la anotada y esté vigente.
3. Anota el valor real tal cual y avisa al responsable de turno.
4. Deja el producto identificado y no tires nada que pueda servir para investigar: aguas madres, lavados, el contenido del filtro de polvo. Qué se guarda y cuánto tiempo lo dice el procedimiento.
5. Se abre la desviación que indique el procedimiento. Calidad decide el alcance.

### El balance de un lote completo
Este es el proceso ficticio del producto KR-40, en tres operaciones. Todos los pesos son valores de ejemplo.

1. **Reacción en el reactor R-310.** Se cargan 100,0 kg de MP-7 y 600,0 kg de metanol. Se añaden 80,0 kg de una disolución del reactivo RG-2 (40,0 kg de RG-2 en 40,0 kg de metanol). Tras la reacción se destila metanol para concentrar. El reactor tiene **células de carga** (*load cells*), básculas bajo sus patas que pesan el contenido.
2. **Cristalización y centrifugado.** En el mismo reactor se añaden 250,0 kg de agua, que hace de antidisolvente, y se enfría. La suspensión pasa a la centrífuga C-320, donde la torta se lava con 60,0 kg de una mezcla fría de metanol y agua a partes iguales.
3. **Secado** en el secadero de vacío S-330, con condensador.

**Etapa 1: reacción y destilación**

| Entradas | kg | Salidas | kg |
|---|---|---|---|
| MP-7 | 100,0 | Destilado al depósito de recuperación | 300,0 |
| Metanol | 600,0 | Muestra de control en proceso | 0,5 |
| Disolución de RG-2 | 80,0 | Masa en el reactor (células de carga) | 477,0 |
| **Total** | **780,0** | **Total medido** | **777,5** |

No justificado: 2,5 kg, un 0,32 %. Es razonable: algo de vapor de metanol pasa por el condensador al venteo.

**Etapa 2: cristalización y centrifugado**

| Entradas | kg | Salidas | kg |
|---|---|---|---|
| Masa del reactor | 477,0 | Muestra de la suspensión | 0,3 |
| Agua | 250,0 | Aguas madres (*mother liquor*) | 578,0 |
| Lavado de metanol y agua | 60,0 | Lavados recogidos | 61,5 |
| | | Torta húmeda | 145,0 |
| **Total** | **787,0** | **Total medido** | **784,8** |

No justificado: 2,2 kg, un 0,28 %: película en las paredes del reactor, cristales en el cesto de la centrífuga y algo de evaporación. Salen más lavados de los que entran porque el lavado empuja aguas madres que mojaban la torta.

**Etapa 3: secado**

| Entradas | kg | Salidas | kg |
|---|---|---|---|
| Torta húmeda | 145,0 | Condensado del secadero | 25,4 |
| | | Producto seco envasado | 118,2 |
| | | Muestra para el laboratorio | 0,2 |
| **Total** | **145,0** | **Total medido** | **143,8** |

No justificado: 1,2 kg, un 0,83 %. La torta tenía un 18,0 % de pérdida por secado: 145,0 × 0,82 = 118,9 kg de sólido y 26,1 kg de líquido. Del sólido salieron 118,4 kg: 0,5 kg se quedaron en el equipo y en su filtro de polvo. Del líquido se condensaron 25,4 kg: 0,7 kg se fueron como vapor hacia la bomba de vacío.

**El lote entero.** Entradas: 100,0 + 600,0 + 80,0 + 250,0 + 60,0 = **1090,0 kg**. Salidas medidas: 300,0 + 0,5 + 0,3 + 578,0 + 61,5 + 25,4 + 118,2 + 0,2 = **1084,1 kg**. No justificado: 5,9 kg.

> % no justificado = (entradas − salidas medidas) / entradas × 100 = 5,9 / 1090,0 × 100 = **0,54 %**

La masa del reactor sale de la etapa 1 y entra en la 2: en la cuenta global se anula. Las etapas dicen **dónde** está la diferencia. Si la hoja fijara, por ejemplo, un máximo del 1 % no justificado (valor de ejemplo), este lote cumple.

### Balance del producto: dónde está cada kilo de KR-40
El balance total cuadra, pero no dice si el producto está en el bidón o en el residuo. Para eso se sigue un solo componente. El control en proceso de la etapa 1 indicó que se formaron unos **129,0 kg** de KR-40 (un 92,9 % del teórico de 138,9 kg). El laboratorio analiza cada corriente:

| Dónde | Cuenta | kg de KR-40 |
|---|---|---|
| Producto seco (riqueza 99,5 %) | 118,2 × 0,995 | 117,6 |
| Aguas madres (1,50 % de KR-40) | 578,0 × 0,0150 | 8,7 |
| Lavados (0,80 %) | 61,5 × 0,0080 | 0,5 |
| Muestras | | 0,3 |
| Paredes, cesto, filtro de polvo | por diferencia | 1,9 |
| **Total** | | **129,0** |

El rendimiento corregido del lote es 117,6 / 138,9 = **84,7 %**. Y ahora sabes por qué no es mayor: de cada 100 kg posibles, unos 7 no llegaron a formarse en la reacción y unos 6 se quedaron disueltos en las aguas madres.

**Por qué el laboratorio analiza las aguas madres.** En «Disoluciones y solubilidad a fondo» viste que siempre queda producto disuelto. Analizarlo sirve para:
- **Ver si la cristalización funcionó.** Con un 3,0 % en vez de un 1,5 %, se perderían 578,0 × 0,030 = 17,3 kg en lugar de 8,7 kg.
- **Decidir si se recupera.** ICH Q7 (14.40) admite recuperar reactivos, intermedios o principio activo de las aguas madres o los filtrados si hay un procedimiento aprobado y lo recuperado cumple su especificación. Su uso se documenta (14.43).
- **Investigar**: separa «se perdió al cristalizar» de «no se formó».

### Balance de disolvente: el metanol
Con el mismo lote. Entra metanol en tres sitios: 600,0 kg puro, 40,0 kg en la disolución de RG-2 y 30,0 kg en el lavado. Total: **670,0 kg**. El laboratorio da la proporción de metanol de cada corriente (valores de ejemplo):

| Corriente | kg | Metanol | kg de metanol | Destino |
|---|---|---|---|---|
| Destilado | 300,0 | 99,8 % | 299,4 | Recuperación |
| Condensado del secadero | 25,4 | 55 % | 14,0 | Recuperación |
| Aguas madres | 578,0 | 56,3 % | 325,4 | Residuo |
| Lavados | 61,5 | 45 % | 27,7 | Residuo |
| **Suma medida** | | | **666,5** | |

Pérdida por venteos y vacío: 670,0 − 666,5 = **3,5 kg**, un 0,52 %. Se recupera el 46,8 % (313,4 kg) y va a residuo el 52,7 % (353,1 kg).

El disolvente recuperado puede volver al proceso: ICH Q7 (14.41 y 14.42) lo admite si la recuperación está controlada, el disolvente cumple su estándar antes de reutilizarse y, si se mezcla con disolvente nuevo, los ensayos demuestran que vale. 
**El medio ambiente.** El metanol que se escapa es un **compuesto orgánico volátil** (*volatile organic compound*, COV). El Real Decreto 117/2003, del BOE, limita estas emisiones y en su anexo I incluye la fabricación de productos farmacéuticos; los umbrales y límites están en «Almacenamiento, emergencias y residuos a fondo». Lo nuevo aquí es su anexo IV: la planta hace un **plan de gestión de disolventes**, que es exactamente un balance de masa. Suma las entradas (el disolvente comprado y el recuperado que se reutiliza) y reparte las salidas: gases residuales, disolvente en el agua, en los productos, en los residuos recogidos, recuperado para reutilizar y emisiones no capturadas por ventanas, puertas y respiraderos. Ese plan solo es bueno si cada lote ha anotado bien sus destilados y residuos.

### Conciliación de materiales y de etiquetas
El balance cuenta kilos de proceso. La **conciliación** (*reconciliation*) cuenta unidades y cantidades de un material: lo que se recibió = lo usado + lo devuelto + lo desechado. La idea básica está en «Rendimiento, pureza y balance de materia» y el despeje de línea en «Envasado y etiquetado del API».

**Un material** (valores de ejemplo). El almacén entrega 100,4 kg de MP-7 en cuatro bidones. Se cargan 100,0 kg, quedan 0,1 kg pegados a las bolsas, que van a residuo, y se devuelven 0,3 kg. 100,0 + 0,1 + 0,3 = 100,4: cuadra.

**Las etiquetas.** ICH Q7 (9.31) pide procedimientos para conciliar las etiquetas emitidas, usadas y devueltas, y evaluar cualquier diferencia entre envases etiquetados y etiquetas emitidas. Esas diferencias se investigan y la investigación la aprueba calidad. Una etiqueta que falta puede estar en el bidón equivocado.

### Usar el balance para investigar
El balance dice **en qué etapa** y **en qué corriente** está la diferencia.

**Caso 1: rendimiento bajo con el balance total cuadrado** (valores de ejemplo). Un lote de KR-40 da 104,5 kg de producto seco con riqueza del 99,4 %: 103,9 kg puros, un **74,8 %**, por debajo del rango. El balance total deja solo un 0,5 % sin justificar: no hay fuga ni transferencia perdida. El control en proceso dio los mismos 129,0 kg formados: la reacción fue bien. Las aguas madres, 580,0 kg, tienen un 3,9 % de KR-40: 22,6 kg, frente a los 8,7 kg normales. El producto estaba disuelto. La tendencia del reactor muestra que la cristalización acabó a 15 °C en vez de a 5 °C por un fallo del frío. Las aguas madres guardadas permiten valorar una recuperación aprobada.

**Caso 2: los kilos se pierden en una sola etapa.** Otro lote da un **80,1 %** sin corregir, también bajo. Las etapas 1 y 2 cuadran. En la 3, la torta húmeda pesó 145,0 kg con un 18,0 % de pérdida por secado (118,9 kg de sólido), pero solo se envasan 111,3 kg. Faltan 7,6 kg de sólido en el secadero, y el filtro de polvo está limpio. La comprobación de la báscula de envasado con una pesa patrón de 50 kg marca 47,0 kg. Pesados en otra báscula calibrada, los bidones suman 118,2 kg. La báscula estaba descalibrada. ICH Q7 (5.35) pide investigar qué lotes pudo afectar desde la última calibración buena.

**Otras pistas que da el balance:**

| Lo que ves | Causa probable |
|---|---|
| Faltan muchos kilos en el total (por ejemplo, 40 kg) | Fuga, derrame, transferencia a otro equipo o pesada sin anotar |
| La torta pesa más de lo normal y el producto seco tiene menos riqueza | Torta mal lavada o mal escurrida: lleva aguas madres con sus impurezas |
| Rendimiento sin corregir alto y pérdida por secado alta | Producto húmedo: secado incompleto |
| Falta líquido en el secadero | Vapor que pasa el condensador: condensador caliente o poco vacío |

### Qué anota el operador para que el balance se pueda hacer
Si una corriente no se pesó, el balance tiene un agujero que nadie puede rellenar después.

- **Todas las pesadas**, de entrada y de salida: cargas, adiciones, destilados, aguas madres, lavados, torta, producto, condensados.
- **Las de residuos y muestras también**, aunque sean pequeñas: el bidón de aguas madres que va a residuo es una salida del balance.
- **Con su báscula**: código, calibración vigente y comprobación del día. Si usas otra, se anota cuál.
- **Con fecha y hora**, en el momento, y el valor real, con su unidad y sus decimales.
- **Bruto, tara y neto** de cada envase.
- **Incidencias**: un derrame, un bidón que se cambió, una transferencia interrumpida. Medio kilo derramado y anotado está justificado; sin anotar, es un misterio.

Los números de esta lección son ejemplos para entender. En planta manda siempre el procedimiento vigente (SOP): qué se pesa, qué rango vale y qué hacer si no cuadra lo fija tu planta.
`,
  plant: `
Turno de tarde. El lote ficticio KR-40-0412 acaba de salir del secadero S-330 y la hoja pide cerrar el balance antes de entregarla.

Lucía, la responsable de turno, te pasa la hoja con todas las pesadas del lote. Las cargas al reactor R-310 están con la báscula de suelo BS-31 y la doble firma. El destilado se pesó en el depósito de recuperación DR-12: 300,0 kg. Los bidones de aguas madres y de lavados de la centrífuga C-320, en la báscula BS-33: 578,0 y 61,5 kg, con su etiqueta de residuo o de muestra para el laboratorio.

Falta un dato: el condensado del secadero. Vas al depósito del condensador, lo vacías a un bidón tarado y lo pesas en la BS-33: 25,4 kg netos. Lo anotas con la hora.

Los cinco bidones de producto, pesados en la báscula de envasado BS-40 tras su comprobación diaria con la pesa patrón, suman 118,2 kg. La muestra para el laboratorio, 0,2 kg.

Sumas en la hoja: entran 1090,0 kg y salen 1084,1 kg. El 0,54 % sin justificar está por debajo del límite de la hoja. El laboratorio da la pérdida por secado y la riqueza del producto, y el rendimiento corregido sale 84,7 %, dentro del rango.

Lucía revisa tus cuentas y firma como verificadora. Las aguas madres quedan etiquetadas a la espera de su análisis.
`,
  batchRecord: `
En la hoja de producción (*batch record*) del lote verás, al final de cada etapa y del lote:

- **Pesadas de entrada**: material, lote, báscula, bruto, tara y neto, hora, quien pesa y quien verifica.
- **Pesadas de salida**: destilados, aguas madres, lavados, torta húmeda, condensados, producto seco y muestras, cada una con su báscula y su hora. También los residuos.
- **Resultados del laboratorio** que entran en el cálculo: pérdida por secado, riqueza, contenido de producto en las aguas madres.
- **Rendimiento teórico**, ya impreso o calculado en la hoja.
- **Rendimiento real**, sin corregir y corregido, en la forma que diga la hoja (molar o en masa).
- **Rango de rendimiento esperado** y la casilla de «cumple» o «no cumple».
- **Balance**: total de entradas, total de salidas medidas, kilos y porcentaje no justificados, y su límite si la hoja lo fija.
- **Conciliación** de materiales y de etiquetas.
- **Verificación** de los cálculos por una segunda persona.
- Si algo queda fuera: la **referencia de la desviación** abierta.
`,
  terms: [
    { es: "Rendimiento teórico", en: "Theoretical yield", def: "Cantidad que se obtendría según lo cargado si no hubiera ninguna pérdida ni error." },
    { es: "Rendimiento real", en: "Actual yield", def: "Cantidad de producto obtenida y pesada de verdad." },
    { es: "Rendimiento esperado", en: "Expected yield", def: "Cantidad o porcentaje del teórico que se prevé obtener, según datos anteriores; en la hoja va como un rango." },
    { es: "Rendimiento en masa", en: "Weight yield", def: "Kilos de producto por kilo de material de partida. No tiene en cuenta las masas molares." },
    { es: "Rendimiento molar", en: "Molar yield", def: "Moles de producto obtenidos frente a los que podían salir, en porcentaje." },
    { es: "Pérdida por secado", en: "Loss on drying (LOD)", def: "Porcentaje de peso que pierde una muestra al secarla: sobre todo disolvente o agua." },
    { es: "Base seca", en: "Dry basis", def: "Cantidad referida al material sin su líquido: masa × (1 − pérdida por secado / 100)." },
    { es: "Riqueza o valoración", en: "Assay", def: "Porcentaje del material que es de verdad el producto, tal cual o en base seca." },
    { es: "Balance de materia", en: "Mass balance", def: "Comparación de todo lo que entra con todo lo que sale de una etapa o de un lote." },
    { es: "No justificado", en: "Unaccounted", def: "Diferencia entre entradas y salidas medidas de un balance, en kilos o en porcentaje de las entradas." },
    { es: "Balance por componentes", en: "Component balance", def: "Balance de una sola sustancia, el producto o un disolvente, siguiéndola en cada corriente." },
    { es: "Aguas madres", en: "Mother liquor", def: "Líquido que queda tras cristalizar o aislar; puede llevar producto, materiales sin reaccionar e impurezas." },
    { es: "Plan de gestión de disolventes", en: "Solvent management plan", def: "Balance de masa de los disolventes de una instalación, según el anexo IV del Real Decreto 117/2003." },
    { es: "Conciliación", en: "Reconciliation", def: "Cuadre entre lo recibido de un material o de etiquetas y lo usado, devuelto y desechado." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Se cargan 80,0 kg de un material de partida de 200 g/mol. Cada molécula da una de producto, de 260 g/mol. Se obtienen 92,0 kg de producto puro. ¿Cuál es el rendimiento molar?",
      answer: 88.5,
      tolerance: 0.005,
      unit: "%",
      explain: "Teórico = 80,0 / 200 × 260 = 104,0 kg. Rendimiento molar = 92,0 / 104,0 × 100 = 88,5 %. En masa serían 1,15 kg/kg, que no es un porcentaje de rendimiento.",
    },
    {
      kind: "number",
      q: "Se pesan 130,0 kg de producto con una pérdida por secado del 6,0 %. ¿Cuántos kg son en base seca?",
      answer: 122.2,
      tolerance: 0.002,
      unit: "kg",
      explain: "Base seca = 130,0 × (1 − 0,060) = 122,2 kg. Los otros 7,8 kg son líquido.",
    },
    {
      kind: "number",
      q: "Un lote da 95,0 kg de producto seco con una riqueza del 97,0 % tal cual. El teórico es 105,0 kg. ¿Cuál es el rendimiento corregido por riqueza?",
      answer: 87.8,
      tolerance: 0.005,
      unit: "%",
      explain: "Producto puro = 95,0 × 0,970 = 92,15 kg. Rendimiento = 92,15 / 105,0 × 100 = 87,8 %. Sin corregir habría salido 90,5 %.",
    },
    {
      kind: "choice",
      q: "El rendimiento de tu etapa sale 78,4 % y el rango de la hoja es de 82,0 a 90,0 %. ¿Qué haces?",
      options: [
        "Repito la pesada hasta que salga dentro del rango",
        "Anoto el valor real, reviso las cuentas y aviso",
        "Corrijo el teórico de la hoja para que cuadre",
        "Lo anoto como 82,0 % porque la diferencia es poca",
      ],
      answer: 1,
      explain: "ICH Q7 (8.14) pide comparar con el rango e investigar las desviaciones de rendimiento en pasos críticos. Se anota lo real, se revisa con otra persona, se avisa y se sigue el procedimiento de desviaciones.",
    },
    {
      kind: "number",
      q: "En un lote entran 850,0 kg en total. La suma de todas las salidas pesadas es 841,5 kg. ¿Qué porcentaje queda sin justificar?",
      answer: 1,
      tolerance: 0.01,
      unit: "%",
      explain: "No justificado = 850,0 − 841,5 = 8,5 kg. Porcentaje = 8,5 / 850,0 × 100 = 1 %.",
    },
    {
      kind: "number",
      q: "Las aguas madres de un lote pesan 620,0 kg y el laboratorio da un 2,5 % de producto disuelto. ¿Cuántos kg de producto van en ellas?",
      answer: 15.5,
      tolerance: 0.005,
      unit: "kg",
      explain: "620,0 × 2,5 / 100 = 15,5 kg de producto, que no llegan al bidón salvo que se recuperen con un procedimiento aprobado.",
    },
    {
      kind: "choice",
      q: "Un lote da un rendimiento sin corregir del 103 %. El laboratorio mide una pérdida por secado del 6 %, cuando lo normal es menos del 0,5 %. ¿Qué es lo más probable?",
      options: [
        "Que la reacción ha rendido más de lo previsto",
        "Que el teórico de la hoja está mal calculado",
        "Que el producto está húmedo: secado incompleto",
        "Que ha entrado materia prima de otro lote",
      ],
      answer: 2,
      explain: "La báscula pesa el producto y el líquido que lo moja. Corregido a base seca, el rendimiento baja unos 6 puntos y vuelve a ser posible; el secado incompleto se anota y se comunica.",
    },
    {
      kind: "number",
      q: "Entran 500,0 kg de metanol en un lote. Se recogen 240,0 kg de destilado con un 99,0 % de metanol, 400,0 kg de aguas madres con un 55,0 % y 30,0 kg de condensado con un 90,0 %. ¿Cuántos kg de metanol quedan sin justificar?",
      answer: 15.4,
      tolerance: 0.01,
      unit: "kg",
      explain: "Metanol medido = 240,0 × 0,990 + 400,0 × 0,550 + 30,0 × 0,900 = 237,6 + 220,0 + 27,0 = 484,6 kg. Sin justificar = 500,0 − 484,6 = 15,4 kg, el 3,1 %: venteos, vacío o algo sin pesar.",
    },
    {
      kind: "number",
      q: "Para el envasado de un lote se emitieron 12 etiquetas. Se pegaron 9 en bidones, se destruyó 1 mal impresa y se devolvió 1. ¿Cuántas etiquetas faltan por justificar?",
      answer: 1,
      tolerance: 0.001,
      unit: "etiquetas",
      explain: "Emitidas 12 − (9 usadas + 1 destruida + 1 devuelta) = 1 etiqueta. ICH Q7 (9.31) pide investigar la diferencia: podría estar en un envase equivocado.",
    },
    {
      kind: "choice",
      q: "El balance de un lote cuadra en las etapas de reacción y de centrífuga, pero en el secadero faltan 7 kg de sólido y su filtro de polvo está limpio. ¿Qué compruebas primero?",
      options: [
        "La báscula de envasado, con una pesa patrón",
        "La temperatura de la camisa del reactor",
        "El número de lote del metanol cargado",
        "La velocidad del agitador al cristalizar",
      ],
      answer: 0,
      explain: "La diferencia está en una sola etapa y no está en el equipo: lo siguiente es la medida de salida. Si la báscula falla, ICH Q7 (5.35) pide investigar los lotes afectados desde la última calibración buena.",
    },
  ],
};
