import type { Lesson } from "./types";

export const cristalizacionAFondo: Lesson = {
  slug: "cristalizacion-a-fondo",
  level: 12,
  order: 7.5,
  title: "Cristalización a fondo: solubilidad, sobresaturación y siembra",
  titleEn: "Crystallization in depth",
  minutes: 38,
  summary:
    "Cómo se lee la curva de solubilidad de un proceso, qué pasa dentro del cristalizador entre la siembra y el final de la rampa, por qué enfriar deprisa da finos, cuánto producto se queda en las aguas madres, qué estropea la pureza, por qué importa la forma cristalina y qué vigila y anota el operador cuando algo sale mal.",
  body: `
En «Cristalización» viste las palabras, y en «Disoluciones y solubilidad a fondo» aprendiste qué es la solubilidad, qué es una disolución sobresaturada y cómo se hacen las cuentas de rendimiento con una curva. Aquí no se repite: vas a meterte dentro del cristalizador y seguir un lote de principio a fin, con los números del proceso FX-101 del simulador. La forma cristalina, los solvatos y las sales están en «Polimorfismo, sales y solvatos a fondo»; aquí solo se toca lo que depende de ti durante la cristalización.

### La curva de solubilidad de un proceso
Cada producto tiene su curva, medida en el laboratorio de desarrollo. Esta es la del producto ficticio del lote FX-101 en agua. **Todos los valores son de ejemplo**, inventados para esta lección; de 0 a 20 °C coinciden con los que usa el simulador para calcular lo que se pierde en las aguas madres (*mother liquor*).

| Temperatura | Producto que cabe disuelto, en gramos por litro de líquido (valor de ejemplo) |
|---|---|
| 0 °C | 5,0 g/L |
| 5 °C | 7,5 g/L |
| 10 °C | 10 g/L |
| 20 °C | 15 g/L |
| 30 °C | 30 g/L |
| 40 °C | 60 g/L |
| 50 °C | 115 g/L |
| 60 °C | 220 g/L |
| 70 °C | 430 g/L |

Fíjate en la forma: abajo, en frío, la curva es casi plana; arriba sube muy deprisa. Entre 60 y 70 °C la solubilidad casi se duplica. Eso tiene una consecuencia práctica: **los primeros grados que enfrías por debajo de la saturación liberan muchísimo producto**, y los últimos, en frío, muy poco.

**¿A qué temperatura está saturada la disolución del lote?** Supón 130,0 kg de producto disueltos en 420 L (valor de ejemplo). Eso son 130 000 / 420 = 309,5 g/L. En la tabla, 309,5 g/L cae entre 60 °C (220) y 70 °C (430). Interpolando en línea recta: 60 + 10 × (309,5 − 220) / (430 − 220) = **unos 64 °C**. Por encima de 64 °C todo está disuelto; por debajo, la disolución tiene más producto del que admite.

Por eso la hoja del FX-101 manda disolver a 80 °C, con margen, y filtrar en caliente por el cartucho F-301.

### Dos líneas y tres zonas
En «Disoluciones y solubilidad a fondo» viste que entre la curva de solubilidad y un límite algo por encima hay una franja, la **zona metaestable** (*metastable zone*), donde la disolución está sobresaturada pero no forma cristales por sí sola, o tarda mucho. Si dibujas las dos líneas sobre el mismo gráfico salen tres zonas:

| Zona | Dónde está | Qué pasa |
|---|---|---|
| Insaturada (*undersaturated*) | Por encima de la temperatura de saturación (más caliente) | Los cristales se disuelven, también la semilla |
| Metaestable (*metastable*) | Unos grados por debajo de la saturación | Los cristales que ya hay crecen; casi no aparecen cristales nuevos |
| Inestable o lábil (*labile*) | Más frío todavía, más allá del límite | Aparecen de golpe muchísimos cristales nuevos |

La anchura de la zona metaestable no es una constante del producto: según la literatura técnica de cristalización, cambia con la velocidad de enfriamiento, la agitación, el volumen, las impurezas y hasta con la historia de la disolución. El laboratorio la mide en las condiciones del proceso, y de ahí sale la temperatura de siembra de tu hoja. Aquí no se dan números de anchura.

### Nacer o crecer: el reparto de la sobresaturación
Piensa en la **sobresaturación** (*supersaturation*) como en una tarta: es el producto «sobrante» que tiene que salir del líquido. Solo puede ir a dos sitios:

- A **crear cristales nuevos**: la **nucleación** (*nucleation*). La espontánea, sin cristales previos, es la **nucleación primaria** (*primary nucleation*). Cuando ya hay cristales, los choques entre ellos, con el agitador y con las paredes arrancan trocitos que se convierten en cristales nuevos: es la **nucleación secundaria** (*secondary nucleation*).
- A **engordar los cristales que ya existen**: el **crecimiento** (*crystal growth*).

Si la tarta se reparte entre pocos cristales que crecen, salen cristales grandes. Si se gasta en crear millones de núcleos, salen millones de cristales pequeños: los **finos** (*fines*).

Una cuenta de geometría ayuda a ver por qué los finos dan tantos problemas. Imagina cristales como cubitos. La masa de un cubo va con el lado al cubo; la superficie, con el lado al cuadrado. Para tener la **misma masa** de producto en cubitos de la **mitad de lado** hacen falta 2 × 2 × 2 = **8 veces más cristales**, y la superficie total se **duplica**. Con un tercio de lado: 27 veces más cristales y el triple de superficie. Más superficie significa más aguas madres pegadas a los cristales, y huecos más pequeños por donde el líquido pasa peor.

### La siembra a fondo
La **siembra** (*seeding*) consiste en añadir cristales del propio producto, de la forma correcta, para que la sobresaturación se gaste en hacerlos crecer en vez de en crear núcleos nuevos. Tres preguntas:

**Dónde.** Dentro de la zona metaestable: por debajo de la temperatura de saturación, para que la semilla no se disuelva, y antes de llegar al límite, para que no se haya disparado ya la nucleación espontánea. En el FX-101 la hoja manda sembrar a **58–62 °C**, unos grados por debajo de los 64 °C de saturación del ejemplo.

| Si siembras… | Qué pasa |
|---|---|
| Por encima de la saturación (por ejemplo, a 68 °C) | La semilla se disuelve: es como no haber sembrado |
| Dentro del rango de la hoja | La semilla queda en suspensión y empieza a crecer |
| Tarde, ya muy frío | Puede haber nucleado sola: la forma y el tamaño ya no los controla la semilla |

**Qué.** Semilla de la forma cristalina especificada, de un lote aprobado, identificada en su etiqueta y, si la hoja lo pide, verificada por un segundo operador. Una semilla de otra forma dirige la cristalización hacia esa otra forma.

**Cuánta.** La fija la hoja; depende del producto y no hay una cifra general que valga para todos. Pesarla mal (de menos) deja la sobresaturación sin sitio donde ir y vuelve la nucleación espontánea.

Después de sembrar, la hoja suele pedir un rato de **maduración** (*aging*) a temperatura constante, para que la semilla «agarre» antes de empezar a enfriar. Señal de que ha ido bien: la suspensión se va enturbiando poco a poco y de forma pareja. Señal de que algo va mal: la semilla desaparece (sembraste caliente) o, de pronto, la masa se vuelve blanca y espesa en un minuto (nucleación de golpe).

### La rampa de enfriamiento
La hoja del FX-101 pide enfriar hasta 0–5 °C en **120 minutos como mínimo** y mantener a esa temperatura **60 minutos como mínimo**. Si se cuenta desde 60 °C hasta 0 °C, la velocidad media máxima es 60 / 120 = **0,5 °C por minuto**, 30 °C por hora. En la auditoría de hojas del simulador hay un lote que bajó en 95 minutos: de 60 a 3 °C son 57 / 95 = 0,6 °C por minuto, más rápido de lo permitido.

Que la duración sea «como mínimo» no es casual. Al principio de la rampa hay pocos cristales y poca superficie donde depositar producto, y además es justo donde la curva es más empinada: cada grado libera mucho producto. Si se enfría deprisa en ese tramo, la sobresaturación se acumula, sale de la zona metaestable y nuclea. Por eso, en muchos procesos, la rampa no es una recta: va despacio al principio y más deprisa al final, cuando ya hay mucha superficie de cristal y la curva es casi plana. El perfil exacto lo define desarrollo y lo ejecuta el sistema de control en modo automático; tú lo vigilas.

**La camisa y la pared.** El calor sale por la pared, que siempre está más fría que la masa. Junto a la pared el líquido está más frío y, por tanto, más sobresaturado que en el centro. Si la diferencia entre camisa y masa es muy grande, el producto cristaliza **sobre la pared**: son las **incrustaciones** (*encrustation*). Esa costra frena el paso del calor (el ensuciamiento de «Intercambio de calor y frío a fondo»), se suelta a trozos y ensucia el lote. Y en un reactor vitrificado como el R-102, meter glicol a −10 °C con la masa a 80 °C es un **choque térmico** que puede agrietar el vidrio («El reactor a fondo»). En el simulador, programar la rampa en menos de 30 minutos rompe el vidrio del R-102.

### Enfriar deprisa: finos que filtran mal
Un enfriamiento demasiado rápido produce finos, y los finos se pagan aguas abajo:

- **Filtran despacio.** En «Filtros a fondo» verás que la finura de los cristales hace la torta menos permeable, y en «La centrífuga a fondo», que una torta de finos escurre peor.
- **Retienen más aguas madres.** En el simulador, una torta buena sale de la centrífuga C-201 con un 13 % de líquido y una de finos con un 25 % (valores del simulador). Con 130 kg de producto seco: 130 / (1 − 0,13) = 149,4 kg de torta húmeda, con 19,4 kg de líquido; o 130 / (1 − 0,25) = 173,3 kg, con **43,3 kg** de líquido. Más del doble de aguas madres, con sus impurezas, y más líquido que evaporar en el secadero.
- **Se lavan peor**, porque el líquido de lavado busca los caminos fáciles y deja zonas sin lavar.

### El rendimiento: cuánto se queda en las aguas madres
La cuenta es siempre la misma:

> masa cristalizada = masa disuelta al principio − solubilidad a la temperatura final × volumen de líquido

Con los 130,0 kg disueltos en 420 L del ejemplo (tomando el volumen como constante, una simplificación):

| Temperatura final | Se queda disuelto | Cristaliza | Rendimiento de la etapa |
|---|---|---|---|
| 3 °C (6,5 g/L) | 6,5 × 420 = 2730 g = 2,73 kg | 127,27 kg | 97,9 % |
| 10 °C (10 g/L) | 4,20 kg | 125,80 kg | 96,8 % |
| 20 °C (15 g/L) | 6,30 kg | 123,70 kg | 95,2 % |

Terminar a 20 °C en vez de a 3 °C se lleva más del doble de producto al tanque de aguas madres.

Dos matices. Primero, la tabla supone que se ha llegado al equilibrio: por eso existe el **mantenimiento** final de 60 minutos, para que la sobresaturación que queda se gaste en los cristales. En el simulador, mantener menos de 60 minutos cuesta 1,5 kg (valor del simulador). Segundo, la tabla es un techo: luego se pierde algo más en el lavado, que también redisuelve producto (por eso el agua de lavado va fría, como explica «Disoluciones y solubilidad a fondo»).

La guía de buenas prácticas para principios activos, ICH Q7, pide comparar el rendimiento real con el esperado en las etapas fijadas e investigar las desviaciones de rendimiento en pasos críticos (apartado 8.14). Y permite recuperar producto de las aguas madres solo con procedimientos aprobados y si lo recuperado cumple especificaciones (apartado 14.40).

### Impurezas: por qué purifica y qué lo estropea
La guía ICH Q11, sobre desarrollo y fabricación de principios activos, cita la cristalización como una de las operaciones que eliminan impurezas, y dice que las propiedades físicas del principio activo se deciden en la última cristalización y en las operaciones posteriores, como la molienda.

La cristalización purifica porque la impureza no llega a saturar y sigue disuelta, y porque en una red ordenada encajan mal las moléculas distintas (lo viste en «Disoluciones y solubilidad a fondo»). Lo que lo estropea:

| Problema | Qué pasa | De dónde viene |
|---|---|---|
| **Oclusión** (*occlusion* o *inclusion*) | El cristal crece tan deprisa que encierra gotitas de aguas madres dentro | Sobresaturación alta: enfriar o añadir antidisolvente de golpe |
| **Aglomerados** (*agglomerates*) | Cristales pegados entre sí que encierran aguas madres en los huecos | Nucleación de golpe, agitación insuficiente |
| **Superficie mojada** | Las aguas madres que mojan los cristales llevan impurezas | Muchos finos, lavado insuficiente o torta agrietada |
| **Impureza que encaja** | Una impureza muy parecida al producto se cuela en la red | Química del proceso; no lo arregla el operador |

La clave de las dos primeras: **lo que está dentro del cristal o del aglomerado no se quita lavando**. El lavado solo limpia la superficie. Por eso un lote cristalizado deprisa puede dar impurezas altas aunque el lavado haya sido perfecto.

### La forma cristalina: por qué importa aquí
La misma molécula puede cristalizar en distintas formas, los **polimorfos** (*polymorphs*). Las técnicas para distinguirlas y qué es un solvato están en «Polimorfismo, sales y solvatos a fondo». Aquí, lo que toca a la cristalización.

ICH Q6A, la guía de especificaciones de principios activos nuevos, dice en su apartado 3.3.1 c) que, cuando las diferencias entre formas afectan al comportamiento del medicamento, a su biodisponibilidad o a su estabilidad, hay que especificar el estado sólido adecuado. Su árbol de decisión 4 lo ordena así:

1. ¿Pueden formarse distintos polimorfos? Se hace un cribado. Si no, no hace falta más.
2. Si sí, se caracterizan las formas (difracción de rayos X de polvo, calorimetría y termoanálisis, microscopía, espectroscopía).
3. ¿Tienen propiedades distintas, como solubilidad, estabilidad o punto de fusión? Si no, no hace falta ensayo.
4. ¿Eso afecta a la seguridad, al comportamiento o a la eficacia del medicamento? Si sí, se fija un criterio de aceptación para el contenido de polimorfo en el principio activo.

Un caso real, según la evaluación publicada por la Agencia Europea de Medicamentos (EMA) de un medicamento con **ritonavir**: se conocen dos formas, I y II. La forma II es la más estable y mucho menos soluble que la I, pero en la síntesis se forma normalmente la I. La presentación en cápsulas duras se retiró por dificultades de fabricación, y en 1999 se autorizaron unas cápsulas blandas desarrolladas para superar los problemas de disolución de las duras.

Para ti: siembra con la forma correcta, respeta temperaturas y rampas, y no dejes restos en los equipos. Un resto de otra forma en el cristalizador o en la centrífuga puede hacer de semilla en el lote siguiente.

### Qué vigila el operador y qué anota
| Qué | Por qué | Qué anotas |
|---|---|---|
| Temperatura de la masa | Es la que decide la sobresaturación | Temperatura de disolución, de siembra y final, con hora |
| Temperatura de la camisa (entrada y salida) | Una diferencia grande con la masa da incrustaciones o choque térmico | Si la hoja lo pide, y cualquier alarma |
| Consigna y modo de la rampa | En automático, el sistema sigue el perfil; en manual, nadie lo sigue | Hora de inicio y de fin, duración real; gráfico de tendencia si se pide |
| Agitación | Mantiene los cristales en suspensión y reparte el frío; demasiado fuerte rompe cristales | Velocidad, y si sube el consumo del motor (suspensión espesa) |
| Momento de la nube | Hora y temperatura a la que se enturbia; si no cuadra con lo habitual, algo ha cambiado | Hora, temperatura y aspecto |
| Sondas de proceso, si las hay | Miden en el propio equipo | Lectura y hora |
| Control en proceso (IPC) | Confirma que se puede pasar a separar | Resultado y hora |

Sobre las sondas: la guía de la FDA (*Food and Drug Administration*, la agencia del medicamento de Estados Unidos) sobre tecnología analítica de procesos (*process analytical technology*, PAT), de 2004, distingue la medida **en línea** (*in-line*: el sensor está dentro y la muestra no sale del proceso), **en derivación** (*on-line*: la muestra se desvía y puede volver) y **junto a la línea** (*at-line*: la muestra se saca y se analiza al lado). Cita el tamaño y la forma de partícula entre los atributos físicos que conviene entender. Algunas plantas tienen en el cristalizador sondas de turbidez o de tamaño de partícula; si la tuya no las tiene, el aviso de la nube es tu vista por la mirilla y la temperatura.

### Problemas típicos y qué hace el operador
| Lo que ves | Causa probable | Qué haces |
|---|---|---|
| **No cristaliza**: a la temperatura habitual sigue transparente | Semilla disuelta, más disolvente del debido, concentración baja | No improvisas otra siembra ni cambias la rampa: avisas al responsable |
| **Cristaliza de golpe**: la masa se pone blanca y espesa, sube el consumo del agitador | Sin semilla o sembrado tarde, enfriamiento brusco | Avisas; vigilas el agitador; anotas hora y temperatura |
| **Aceite** (*oiling out*): gotas o capa aceitosa en vez de cristales | Sobresaturación muy alta; el producto se separa como líquido, y ese líquido disuelve bien las impurezas | Avisas: el producto que cristalice de ese aceite puede salir impuro |
| **Incrustaciones**: costra en la pared, la masa se enfría cada vez peor | Camisa demasiado fría respecto a la masa | Avisas; se anota para la limpieza |
| **Rampa interrumpida**: falla el frío o salta una alarma | Servicio de frío, válvula, sonda | Anotas la hora y la temperatura en que se paró; avisas: un enfriamiento distinto al de la hoja es una posible desviación |

Cualquier valor fuera de rango se anota tal cual, con hora y aviso: ICH Q7 pide documentar y explicar toda desviación (apartado 8.15). Repetir una cristalización del proceso es un reprocesado que la guía admite (apartado 14.20), pero lo decide calidad, nunca el turno.

Los números de esta lección son de ejemplo para entender. En planta manda siempre el procedimiento vigente (SOP) y la hoja de producción de tu lote.
`,
  plant: `
Turno de tarde. En el cristalizador vitrificado ficticio **R-102** tienes la disolución del lote FX-101: unos 420 L a 80 °C, recién pasados por el filtro de cartucho F-301. Todos los valores son de ejemplo.

Pones la rampa hasta 60 °C en automático. A 60,5 °C la masa está transparente: bien, todavía no ha nucleado. Tu compañero y tú comprobáis la etiqueta de la semilla (forma especificada, lote aprobado, cantidad de la hoja), sembráis por la boca de carga con nitrógeno y anotáis 60,5 °C y la hora. A los diez minutos la masa empieza a enturbiarse de forma pareja: la semilla ha agarrado.

Arrancas la rampa de 120 minutos hacia 2 °C. A 35 °C salta una alarma: la diferencia entre la camisa y la masa supera el límite del sistema de control porque el glicol ha llegado más frío de lo normal. La rampa no se para sola. No tocas la consigna para «recuperar tiempo»: avisas al jefe de turno, que habla con servicios. Diez minutos después el glicol vuelve a su temperatura y la alarma se borra. Anotas la alarma, su duración y la temperatura de la masa.

La rampa termina en 128 minutos, a 2 °C. Mantienes 60 minutos. En la centrífuga C-201 la torta escurre como siempre y el agua de lavado sale a 4 °C. En la hoja quedan la siembra, la rampa real, la alarma con su hora y el aviso dado.
`,
  batchRecord: `
En la hoja de producción (*batch record*) de una cristalización por enfriamiento con siembra verás y anotarás:

- **Disolución**: temperatura alcanzada, aspecto transparente y hora; filtración en caliente (filtro y presión diferencial).
- **Siembra**: temperatura real de siembra frente al rango de la hoja (58–62 °C en el FX-101), lote, forma y cantidad de semilla, hora y firma del segundo operador si se pide.
- **Maduración tras la siembra**: hora de inicio y de fin, temperatura mantenida, aspecto (si la semilla ha agarrado).
- **Rampa**: temperatura inicial y final, hora de inicio y de fin, duración real (en el FX-101, 120 minutos como mínimo hasta 0–5 °C); gráfico de tendencia si se pide.
- **Mantenimiento final**: temperatura y duración (en el FX-101, 60 minutos como mínimo).
- **Observaciones**: hora y temperatura de la nube, aspecto de la suspensión, consumo del agitador, incrustaciones, aceite.
- **Alarmas e incidencias**: cuáles, cuándo, cuánto duraron y a quién se avisó.
- **Aguas madres**: volumen y destino; si la hoja lo pide, muestra.
- **Rendimiento**: real frente al esperado, cuando la hoja lo pida.

Siempre el valor real que marca el instrumento, nunca el de la consigna.
`,
  terms: [
    { es: "Curva de solubilidad", en: "Solubility curve", def: "Gráfico de cuánto producto cabe disuelto a cada temperatura; cada punto es una disolución saturada." },
    { es: "Temperatura de saturación", en: "Saturation temperature", def: "Temperatura a la que una disolución de concentración dada queda justo saturada; por debajo está sobresaturada." },
    { es: "Zona metaestable", en: "Metastable zone", def: "Franja por debajo de la saturación donde los cristales existentes crecen pero casi no nacen cristales nuevos." },
    { es: "Nucleación primaria", en: "Primary nucleation", def: "Aparición espontánea de cristales en una disolución que no tenía ninguno." },
    { es: "Nucleación secundaria", en: "Secondary nucleation", def: "Aparición de cristales nuevos a partir de los que ya hay, por choques entre ellos, con el agitador o con las paredes." },
    { es: "Crecimiento", en: "Crystal growth", def: "Engorde de los cristales existentes al depositarse sobre ellos el producto disuelto." },
    { es: "Siembra", en: "Seeding", def: "Añadir cristales del producto, de la forma correcta, dentro de la zona metaestable para controlar forma y tamaño." },
    { es: "Rampa de enfriamiento", en: "Cooling ramp / cooling profile", def: "Velocidad o perfil con que se baja la temperatura de la masa, fijado por la hoja." },
    { es: "Finos", en: "Fines", def: "Cristales muy pequeños; filtran mal, retienen aguas madres y se lavan peor." },
    { es: "Oclusión", en: "Occlusion / inclusion", def: "Aguas madres atrapadas dentro de un cristal que creció demasiado deprisa; no se quitan lavando." },
    { es: "Aglomerado", en: "Agglomerate", def: "Grupo de cristales pegados entre sí que puede encerrar aguas madres en sus huecos." },
    { es: "Incrustación", en: "Encrustation", def: "Costra de producto cristalizado sobre la pared fría del equipo; frena el paso del calor." },
    { es: "Separación en aceite", en: "Oiling out", def: "El producto se separa como un líquido aceitoso en vez de como cristal, normalmente por sobresaturación muy alta." },
    { es: "Medida en línea", en: "In-line measurement", def: "Medida con el sensor dentro del proceso, sin sacar la muestra; la guía PAT de la FDA la distingue de on-line y at-line." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Una disolución lleva 290 g/L de producto. Según la curva de ejemplo, la solubilidad es 220 g/L a 60 °C y 430 g/L a 70 °C. Interpolando en línea recta, ¿a qué temperatura queda saturada?",
      answer: 63.3,
      tolerance: 0.01,
      unit: "°C",
      explain: "60 + 10 × (290 − 220) / (430 − 220) = 60 + 10 × 70 / 210 = 63,3 °C. Por debajo de esa temperatura está sobresaturada.",
    },
    {
      kind: "number",
      q: "Hay 150,0 kg de producto disueltos en 500 L. Se enfría a 5 °C, donde la solubilidad es 7,5 g/L. Tomando el volumen como constante, ¿cuántos kg cristalizan como máximo?",
      answer: 146.25,
      tolerance: 0.01,
      unit: "kg",
      explain: "Queda disuelto 7,5 × 500 = 3750 g = 3,75 kg. Cristaliza 150,0 − 3,75 = 146,25 kg.",
    },
    {
      kind: "number",
      q: "Un lote tiene 400 L de aguas madres. La solubilidad es 15 g/L a 20 °C y 5 g/L a 0 °C. ¿Cuántos kg más se pierden en las aguas madres si la cristalización termina a 20 °C en vez de a 0 °C?",
      answer: 4,
      tolerance: 0.01,
      unit: "kg",
      explain: "A 20 °C quedan 15 × 400 = 6000 g = 6 kg; a 0 °C, 5 × 400 = 2000 g = 2 kg. Diferencia: 6 − 2 = 4 kg.",
    },
    {
      kind: "number",
      q: "La hoja pide bajar de 60 °C a 0 °C en 120 minutos como mínimo. ¿Cuál es la velocidad media máxima de enfriamiento, en °C por minuto?",
      answer: 0.5,
      tolerance: 0.01,
      unit: "°C/min",
      explain: "60 / 120 = 0,5 °C por minuto, es decir, 30 °C por hora como máximo de media.",
    },
    {
      kind: "number",
      q: "Imagina los cristales como cubitos. Si la misma masa de producto sale en cristales con la mitad de lado, ¿cuántas veces más cristales hay?",
      answer: 8,
      tolerance: 0.001,
      unit: "veces",
      explain: "La masa va con el lado al cubo: 2 × 2 × 2 = 8 veces más cristales. La superficie total se duplica.",
    },
    {
      kind: "number",
      q: "Una torta de 130 kg de producto seco sale de la centrífuga con un 25 % de líquido (en peso de torta húmeda). ¿Cuántos kg de líquido lleva?",
      answer: 43.3,
      tolerance: 0.01,
      unit: "kg",
      explain: "Torta húmeda = 130 / (1 − 0,25) = 173,3 kg. Líquido = 173,3 − 130 = 43,3 kg. Con un 13 % serían solo 19,4 kg.",
    },
    {
      kind: "choice",
      q: "La hoja pide sembrar a 58–62 °C y la disolución está saturada a unos 64 °C. Por un error de lectura siembras a 68 °C. ¿Qué es lo más probable?",
      options: [
        "La semilla se disuelve y es como no haber sembrado",
        "La semilla crece mejor porque hay más producto disuelto",
        "Se forma un aceite en lugar de cristales al momento",
        "Cristaliza de golpe todo el lote en pocos segundos",
      ],
      answer: 0,
      explain: "A 68 °C la disolución está insaturada: la semilla se disuelve. Se anota y se avisa; no se improvisa otra siembra sin instrucción.",
    },
    {
      kind: "choice",
      q: "Un lote cristalizado de golpe da impurezas altas aunque el lavado de la torta fue correcto. ¿Cuál es la explicación más probable?",
      options: [
        "El agua de lavado estaba demasiado fría y no disolvió nada",
        "Hay aguas madres atrapadas dentro de cristales y aglomerados",
        "La semilla era de la forma cristalina correcta y aprobada",
        "La centrífuga giró a más velocidad de la habitual ese día",
      ],
      answer: 1,
      explain: "Al crecer deprisa, los cristales y aglomerados encierran aguas madres con impurezas. Eso está dentro y el lavado solo limpia la superficie.",
    },
    {
      kind: "choice",
      q: "Durante la rampa salta una alarma de diferencia excesiva entre camisa y masa. ¿Qué riesgo de producto vigila esa alarma, además del choque térmico?",
      options: [
        "Que el producto se disuelva otra vez en las aguas madres",
        "Que la semilla cambie de forma cristalina en la camisa",
        "Que el producto cristalice sobre la pared fría e incruste",
        "Que suba la presión del reactor por encima del tarado",
      ],
      answer: 2,
      explain: "Junto a la pared fría el líquido está más sobresaturado y el producto cristaliza allí: incrustaciones que frenan el calor y se sueltan a trozos.",
    },
    {
      kind: "choice",
      q: "En la mirilla ves gotas aceitosas en vez de cristales durante el enfriamiento. ¿Qué haces?",
      options: [
        "Subo la agitación al máximo para romper las gotas",
        "Bajo la camisa al mínimo para que cristalice ya",
        "Añado más semilla de otro lote que tengo a mano",
        "Lo anoto con hora y temperatura y aviso al responsable",
      ],
      answer: 3,
      explain: "Es separación en aceite (oiling out): el aceite disuelve impurezas y el producto puede salir impuro. Se anota y se avisa; no se improvisa.",
    },
  ],
};
