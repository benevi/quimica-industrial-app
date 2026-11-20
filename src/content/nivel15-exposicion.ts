import type { Lesson } from "./types";

export const exposicionAFondo: Lesson = {
  slug: "exposicion-a-fondo",
  level: 15,
  order: 7,
  title: "Exposición a productos químicos a fondo: cómo entra un tóxico en el cuerpo y cómo se mide el riesgo",
  titleEn: "Chemical exposure in depth: how a toxic substance enters the body and how the risk is measured",
  minutes: 35,
  summary:
    "Peligro, riesgo y dosis; las cuatro vías de entrada; qué significan de verdad el VLA-ED y el VLA-EC, cómo se pasa de ppm a mg/m³ y cómo se calcula la exposición de una jornada; las notas «vía dérmica», «Sen» y C1A o C1B; qué obliga la ley a tu empresa y qué te toca a ti.",
  body: `
En la lección anterior viste que existen límites de exposición y sistemas de contención. Aquí vas a entender de dónde salen los números, cómo se calcula la exposición de un turno y qué significan las notas de cada límite.

### Peligro, riesgo y dosis
Un tigre es peligroso siempre. Pero el riesgo no es el mismo detrás de un cristal que suelto en la sala.

El Real Decreto 374/2001, la norma española sobre agentes químicos en el trabajo, lo define así en su artículo 2:

- **Peligro** (*hazard*): «la capacidad intrínseca de un agente químico para causar daño». Es una propiedad del producto. No cambia.
- **Riesgo** (*risk*): «la posibilidad de que un trabajador sufra un determinado daño derivado de la exposición». Depende de cómo se trabaja.

Entre uno y otro está la **exposición** (*exposure*): que el producto llegue a tocarte o a entrar en ti. Y con ella, la **dosis** (*dose*): cuánto entra. De ahí el dicho «la dosis hace el veneno»: una misma sustancia puede no hacer nada en cantidad muy pequeña y hacer daño en cantidad mayor. Prevenir es bajar la dosis: menos concentración, menos tiempo, menos contacto.

### Efectos: rápidos o lentos, en el sitio o lejos
**¿Cuándo aparece?**

- **Efecto agudo** (*acute effect*): enseguida, tras una exposición corta. Como una quemadura al tocar la plancha.
- **Efecto crónico** (*chronic effect*): tras exposiciones repetidas durante meses o años. Como el daño de fumar: ningún cigarrillo suelto lo explica.

**¿Dónde aparece?**

- **Efecto local** (*local effect*): en el punto de contacto, como la piel o los ojos.
- **Efecto sistémico** (*systemic effect*): el producto se absorbe, viaja por el cuerpo y daña un órgano lejano. La guía técnica del INSST pone como ejemplos el hígado y el riñón.

Un mismo producto puede tener varios. El documento de límites del INSST recoge para el tolueno, entre otras, dos frases de peligro: H336, «puede provocar somnolencia o vértigo» (agudo y sistémico), y H373, «puede provocar daños en los órganos tras exposiciones prolongadas o repetidas» (crónico y sistémico). Para el cloruro de hidrógeno recoge H314, «provoca quemaduras graves en la piel y lesiones oculares graves» (agudo y local).

El efecto crónico es el traicionero: no avisa.

### Las cuatro vías de entrada
Según la guía técnica del INSST, el contacto se produce normalmente por inhalación o por la piel, y también es posible por vía digestiva o parenteral.

| Vía | Cómo ocurre en planta | Qué la corta |
|---|---|---|
| **Inhalatoria** (*inhalation*) | Vapores al abrir la boca de hombre, polvo al descargar la centrífuga o el secadero, toma de muestra | Sistema cerrado, extracción localizada y, si no basta, protección respiratoria |
| **Dérmica** (*dermal*) | Salpicaduras, guantes o ropa contaminados, vapores que se condensan en la piel, polvo que se deposita | Guantes y ropa adecuados al producto, cambiar la ropa mojada, lavarse |
| **Digestiva** (*ingestion*) | Manos sucias que tocan comida o la boca; comer o beber en zona | No comer ni beber en zona, lavado de manos |
| **Parenteral** (*parenteral*) | El producto entra por una herida, un corte o un pinchazo | Tapar las heridas, cuidado con objetos cortantes |

**Por qué la inhalación es la principal.** Respirar no se puede dejar de hacer, y el aire contaminado muchas veces no se ve ni se huele. El documento del INSST lo refleja: sus límites valoran la exposición «principalmente por inhalación».

**Por qué algunos productos atraviesan la piel.** La piel es una barrera, pero no es impermeable a todo. Según la guía del INSST, la velocidad de entrada depende de la sustancia, del medio en el que va y del estado de la piel. Para algunos productos la piel aporta tanto o más que el aire. El metanol y el tolueno, dos disolventes muy corrientes, llevan la nota «vía dérmica» en la tabla del INSST. Que un líquido no pique ni queme no significa que no esté entrando.

### Cómo está el producto en el aire
- **Gas**: sustancia que ya es gas a temperatura ambiente, como el cloruro de hidrógeno.
- **Vapor** (*vapour*): la parte de un líquido que ha pasado al aire.
- **Materia particulada**: partículas que flotan. Si son sólidas es **polvo** (*dust*). Si son gotitas es **niebla** (*mist*). El **humo** (*fume*) son partículas muy finas de procesos en caliente, como los humos de soldadura.

Para gases y vapores el límite se da en ppm y en mg/m³. Para partículas, solo en mg/m³.

Salvo que se indique otra cosa, los límites de partículas se refieren a la **fracción inhalable** (*inhalable fraction*), y algunos productos tienen un límite aparte para la **fracción respirable** (*respirable fraction*). El documento no define cada fracción (remite a una norma técnica de pago), así que aquí no lo hacemos.

### Los valores límite ambientales
El documento «Límites de exposición profesional para agentes químicos en España» lo publica el INSST y se revisa cada año. Esta lección usa la edición de 2026.

Los **valores límite ambientales** (VLA) son valores de referencia para la concentración en el aire. Representan condiciones a las que se cree que «la mayoría de los trabajadores pueden estar expuestos día tras día, durante toda su vida laboral, sin sufrir efectos adversos para su salud».

- Dice la mayoría, no todos.
- Los límites no son «una barrera definida de separación entre situaciones seguras y peligrosas». Estar justo por debajo no es estar a salvo.
- Solo valoran lo que respiras. Lo que entra por la piel no se ve en una medición de aire.

Hay dos tipos:

- **VLA-ED**, de exposición diaria (*time-weighted average*, TWA). Es «el valor de referencia para la Exposición Diaria». Y la exposición diaria es «la concentración media del agente químico en la zona de respiración del trabajador medida o calculada de forma ponderada con respecto al tiempo, para la jornada laboral real y referida a una jornada estándar de ocho horas diarias». Está pensado para 8 horas diarias y 40 semanales.
- **VLA-EC**, de corta duración (*short-term exposure limit*, STEL). Es el valor de referencia para la concentración media «medida o calculada para cualquier período de quince minutos a lo largo de la jornada laboral». Ninguna exposición corta de la jornada debe superarlo.

La **zona de respiración** (*breathing zone*) es el aire que rodea tu cara. Por eso se mide junto a ti y no en mitad de la sala.

**Los picos también cuentan.** Entre el VLA-ED y el VLA-EC solo se admiten ratos de 15 minutos como máximo, no más de cuatro por jornada y separados al menos una hora. Si un producto no tiene VLA-EC, en ningún caso se debe superar 5 veces su VLA-ED.

### De ppm a mg/m³
- **ppm** (partes por millón): de cada millón de partes de aire, cuántas son del producto. Es contar invitados.
- **mg/m³**: cuántos miligramos de producto hay en cada metro cúbico de aire. Es pesarlos.

Para pasar de contar a pesar hace falta la masa molar del producto, en gramos por mol. La fórmula del documento es:

> mg/m³ = ppm × masa molar / 24,04

El 24,04 son los litros que ocupa un mol de gas a 20 °C y 101,3 kPa.

**Ejemplo 1.** Tolueno, 50 ppm, masa molar 92,14 g/mol: 50 × 92,14 / 24,04 = 191,6 mg/m³. La tabla da 192.

**Ejemplo 2.** Isopropanol, 200 ppm, masa molar 60,10 g/mol: 200 × 60,10 / 24,04 = 500 mg/m³. La tabla da 500.

El tolueno tiene además un VLA-EC de 100 ppm (384 mg/m³). El metanol tiene un VLA-ED de 200 ppm (266 mg/m³) y no tiene VLA-EC. Son valores de 2026 y pueden cambiar: vale el dato de la ficha de datos de seguridad vigente.

### La exposición de una jornada, paso a paso
En un turno no respiras siempre lo mismo. La **exposición diaria** (ED) reparte todo como si fuera una única concentración constante durante 8 horas. La fórmula del documento es:

> ED = (c₁ × t₁ + c₂ × t₂ + ...) / 8

Cada c es una concentración y cada t las horas pasadas en ella. Los tiempos suman la jornada real y se divide siempre entre 8. Es como una nota media con asignaturas de distinto peso.

**Ejemplo 1.** Tolueno. Dos horas cargando a 120 mg/m³, cinco horas en sala a 20 mg/m³ y una hora fuera de zona, a 0.

ED = (120 × 2 + 20 × 5 + 0 × 1) / 8 = 340 / 8 = 42,5 mg/m³

Frente al VLA-ED de 192 mg/m³, es el 22 % del límite. Falta comparar los 15 minutos peores con el VLA-EC de 384 mg/m³.

**Ejemplo 2: un turno de 12 horas.** Tolueno a 150 mg/m³ todo el turno.

ED = (150 × 12) / 8 = 225 mg/m³

En 8 horas habría sido 150, por debajo de 192. En 12 horas da 225 y lo supera: misma concentración, más aire contaminado respirado.

### Las notas de la tabla
| Nota | Qué significa | Qué cambia para ti |
|---|---|---|
| **Vía dérmica** | La piel puede aportar una parte importante de lo absorbido | Medir el aire no basta. Guantes y ropa correctos aunque no huela |
| **Sen** | Sensibilizante: puede provocar alergia | Reducir el contacto todo lo posible, por todas las vías |
| **C1A, C1B** | Carcinógeno: se sabe (1A, pruebas en personas) o se supone (1B, pruebas en animales) | Se aplica el Real Decreto 665/1997 |
| **M1A, M1B** | Mutágeno: induce mutaciones hereditarias | Igual |
| **TR1A, TR1B** | Tóxico para la reproducción: fertilidad o desarrollo de los descendientes | Igual |

El benceno, por ejemplo, figura con C1A, M1B y vía dérmica.

### Sensibilizantes: la alergia que se queda
Un **sensibilizante** (*sensitiser*) puede enseñar a tus defensas a reaccionar contra él. El documento del INSST lo describe en dos tiempos:

1. Al principio la respuesta puede ser pequeña o no existir.
2. Una vez sensibilizada la persona, la siguiente exposición puede producir respuestas intensas «incluso a muy bajas concentraciones».

Es como un perro guardián que aprende un olor: desde ese día ladra con un simple rastro. Las manifestaciones más comunes son rinitis, asma, eczema y urticaria de contacto. Para algunas personas la única solución es no volver a exponerse.

El límite pretende evitar que te sensibilices, pero no protege a quien ya lo está.

### Cancerígenos, mutágenos y tóxicos para la reproducción
Aquí falla «la dosis hace el veneno»: para los mutágenos y la mayoría de los cancerígenos no se pueden identificar niveles sin riesgo, dice el documento del INSST. Solo se sabe que a menos exposición, menos riesgo. Por eso el Real Decreto 665/1997 exige, por este orden: **sustituir** el producto si es técnicamente posible (artículo 4); si no, usarlo en un **sistema cerrado** (*closed system*) (artículo 5.2); y si tampoco, reducir la exposición a un valor tan bajo como sea técnicamente posible (artículo 5.3). Cumplir el límite no exime de seguir reduciendo (artículo 5.4).

### Valores límite biológicos
El **valor límite biológico** (VLB) no mide el aire: te mide a ti. Se analiza un indicador en orina, sangre o aire exhalado; para el metanol, el metanol en orina. Recoge lo que ha entrado por todas las vías, también por la piel. Superarlo una vez no prueba por sí solo una exposición excesiva, pero obliga a investigar.

### Lo que la ley exige a tu empresa
Del Real Decreto 374/2001, lo que tú ves en planta:

- **Evaluación de riesgos** (artículo 3). Usa la ficha de datos de seguridad, los límites, las cantidades y la duración de la exposición. Una actividad nueva no empieza sin evaluar.
- **Medidas, por orden de prioridad** (artículo 5). Primero, sustituir el producto. Si no se puede: a) aislar el producto con procedimientos, controles técnicos y equipos que eviten el escape o el contacto; b) ventilación y otras protecciones colectivas, preferentemente en el origen; c) protección individual, cuando lo anterior no baste.
- **Vigilancia de la salud** (artículo 6).
- **Información y formación** (artículo 9). Tienes derecho a conocer los resultados de la evaluación, los productos, sus riesgos y límites, y las fichas de datos de seguridad.

Por eso la máscara es lo último: solo te protege a ti y solo mientras la llevas bien puesta.

### Principios activos potentes: límites y bandas internas
Muchos principios activos e intermedios no aparecen en la tabla del INSST. Para ellos las empresas calculan su propio **límite de exposición ocupacional** (*occupational exposure limit*, OEL) y agrupan los productos en **bandas de exposición ocupacional** (*occupational exposure bands*, OEB).

Que quede muy claro: **las bandas no son una norma legal**. Son una herramienta interna. Cada empresa tiene su escala, y la banda 3 de una puede no coincidir con la de otra. Vale la de tu planta.

Como referencia, la NTP 1105 del INSST (2018), una guía de buenas prácticas no obligatoria, propone cinco categorías.

| Categoría | OEL | Recomendación para el polvo |
|---|---|---|
| 1 | más de 1000 µg/m³ | Confinar o usar extracción localizada a partir de 1 kg |
| 2 | de 1000 a 100 µg/m³ | Lo mismo a partir de 100 g |
| 3A | de 100 a 10 µg/m³ | Lo mismo, más barreras para que el producto no migre |
| 3B | de 10 a 1 µg/m³ | Prohibido manipular polvo sin sistemas de contención |
| 4 | menos de 1 µg/m³ | Transferir sólidos solo con sistemas de contención |

Un microgramo (µg) es la milésima parte de un miligramo.

La **contención en origen** (*containment at source*) consiste en encerrar el producto donde está, en lugar de protegerte cuando ya ha salido. La NTP nombra, entre otros:

- **Sistema cerrado**: el producto va por tuberías y equipos cerrados y no ve el aire de la sala.
- **Caja de guantes** (*glove box*) o **aislador** (*isolator*): una caja cerrada en la que trabajas desde fuera, con las manos en guantes unidos a la pared.
- **Válvula de mariposa partida** (*split butterfly valve*): una válvula en dos mitades, una en el contenedor y otra en el equipo, para conectar y desconectar sin dejar producto al aire.
- **Cabina de pesada** (*weighing booth*): un puesto ventilado para pesar y manipular polvo.

Clasificar en categorías no sustituye a la evaluación de riesgos ni a las mediciones.

### Higiene personal: cortar la vía de la boca
El Real Decreto 374/2001 incluye las medidas higiénicas entre sus principios generales (artículo 4). El Real Decreto 665/1997 las detalla para cancerígenos, mutágenos y tóxicos para la reproducción (artículo 6):

- Prohibido comer, beber o fumar en las zonas con riesgo.
- Lugares separados para la ropa de trabajo y la de calle.
- La empresa lava y descontamina la ropa de trabajo. Está «rigurosamente prohibido» llevársela a casa.
- Las personas expuestas tienen, dentro de la jornada, hasta diez minutos para asearse antes de cada comida y otros diez antes de salir.

El porqué: el polvo que no ves viaja en las manos y en la ropa. Si comes sin lavarte, entra por la boca.

### Vigilancia de la salud y qué hacer si notas algo
La **vigilancia de la salud** (*health surveillance*) son los reconocimientos médicos ligados a tu exposición. Según el artículo 6 del Real Decreto 374/2001, la empresa debe hacerla cuando la evaluación muestre un riesgo para la salud. Si el médico encuentra un daño atribuible a un producto, te informa en persona y la empresa revisa la evaluación y las medidas.

Si notas síntomas, como mareo, tos, picor de ojos, piel enrojecida o pitidos al respirar:

1. Sal de la zona, a aire limpio.
2. Avisa a tu responsable y di con qué producto estabas.
3. Sigue los primeros auxilios de la ficha de datos de seguridad y acude al servicio médico.

No esperes a que se repita. Unos síntomas que vuelven con la misma tarea pueden ser la pista de una sensibilización.

### Qué haces tú
- Lee los límites y sus notas en la sección 8 de la ficha de datos de seguridad.
- Comprueba que la extracción o la contención funcionan antes de abrir nada, y anótalo.
- Acorta los ratos con producto abierto. El tiempo cuenta en la fórmula.
- Usa el guante y la protección respiratoria que marca el procedimiento, no los que tengas a mano.
- Lávate antes de comer o beber. La ropa de trabajo se queda en planta.
- Avisa de inmediato de un derrame, una extracción que no tira o un síntoma. La Ley de Prevención de Riesgos Laborales (artículo 29) te obliga a informar de las situaciones de riesgo.

En planta manda siempre el procedimiento vigente (SOP) y la ficha de datos de seguridad del producto.
`,
  plant: `
Marta lleva tres semanas en la planta. Hoy le toca cargar tolueno al reactor R-210 y, por la tarde, descargar de la centrífuga CF-310 el intermedio ficticio FX-INT-07, que en la escala interna de la empresa es de banda 3.

A primera hora, Íker, técnico del servicio de prevención, le cuelga una bomba de muestreo con el captador junto al cuello del buzo. «Tiene que estar en tu zona de respiración», le explica. «Trabaja como cualquier otro día».

La carga de tolueno se hace por línea cerrada, pero hay que conectar y desconectar la manguera. Marta comprueba antes que la extracción localizada del punto de carga está en marcha y lo anota. En la sección 8 de la ficha lee: VLA-ED 192 mg/m³, VLA-EC 384 mg/m³, vía dérmica. Por eso lleva los guantes que marca el procedimiento y no los finos de nitrilo.

Días después llega el informe. Dos horas en la zona de carga a 96 mg/m³, cinco horas en sala de control a 8 mg/m³ y una hora de descanso a 0. Íker hace la cuenta con ella: (96 × 2 + 8 × 5 + 0 × 1) / 8 = 29 mg/m³, el 15 % del límite. La muestra de 15 minutos durante la desconexión dio 150 mg/m³, por debajo de 384.

Para el FX-INT-07 no hay valor del INSST. La descarga se hace con una bolsa continua acoplada a la centrífuga, y la muestra, con un muestreador cerrado. Al terminar, Marta nota un picor nuevo en la muñeca, justo donde acaba el guante. No lo deja pasar: avisa a su jefa de turno y pasa por el servicio médico antes de irse. La ropa de trabajo se queda en la planta.
`,
  batchRecord: `
En la **hoja de producción** (*batch record*):

- En las etapas con producto abierto (carga, toma de muestra, descarga), la indicación de los controles exigidos: sistema cerrado, extracción localizada, banda interna del producto y equipos de protección individual.
- Una casilla de comprobación previa: extracción o contención en marcha y verificada, con hora y firma, antes de abrir el equipo.
- La hora de inicio y de fin de cada operación abierta. Sirven también para saber cuánto ha durado la exposición.
- Cualquier incidencia: derrame, extracción parada, bolsa rota, apertura no prevista. Se anota en el momento y se comunica; si procede, se abre una desviación.

En otros registros relacionados:

- **Registro de comprobación de la extracción o del aislador**: lecturas y revisiones según el procedimiento.
- **Hoja de medición higiénica**, si ese día llevas una bomba de muestreo: tareas realizadas y sus horas, que el servicio de prevención necesita para calcular la exposición diaria.
- **Parte de incidente o de primeros auxilios** si has tenido una salpicadura o síntomas.
- **Registro de entrega y cambio de equipos de protección individual** (filtros, guantes).

Lo que no vas a ver en la hoja de producción son tus resultados médicos: la Ley de Prevención de Riesgos Laborales (artículo 22) los declara confidenciales y te los comunican a ti.
`,
  terms: [
    { es: "Peligro", en: "Hazard", def: "Capacidad intrínseca de un agente químico para causar daño. Es una propiedad del producto." },
    { es: "Riesgo", en: "Risk", def: "Posibilidad de que un trabajador sufra un daño por la exposición. Depende de cómo se trabaja." },
    { es: "Dosis", en: "Dose", def: "Cantidad de producto que entra en el cuerpo." },
    { es: "Efecto sistémico", en: "Systemic effect", def: "Daño en un órgano alejado del punto de contacto, después de que el producto se absorba y se reparta por el cuerpo." },
    { es: "Zona de respiración", en: "Breathing zone", def: "Espacio alrededor de la cara del que el trabajador toma el aire que respira. Ahí se mide la exposición." },
    { es: "Exposición diaria (ED)", en: "Daily exposure", def: "Concentración media de la jornada real, ponderada con el tiempo y referida a una jornada estándar de 8 horas." },
    { es: "VLA-ED", en: "Time-weighted average limit (TWA)", def: "Valor de referencia del INSST para la exposición diaria, pensado para 8 horas diarias y 40 semanales." },
    { es: "VLA-EC", en: "Short-term exposure limit (STEL)", def: "Valor de referencia del INSST para la concentración media de cualquier período de 15 minutos." },
    { es: "Valor límite biológico (VLB)", en: "Biological limit value", def: "Valor de referencia para un indicador medido en orina, sangre o aire exhalado, que refleja lo absorbido por todas las vías." },
    { es: "Vía dérmica", en: "Skin notation", def: "Nota de la tabla del INSST: la absorción por la piel puede ser importante y medir el aire puede no bastar." },
    { es: "Sensibilizante", en: "Sensitiser", def: "Producto que puede provocar una alergia; después, cantidades muy pequeñas bastan para desencadenar la reacción." },
    { es: "Banda de exposición ocupacional", en: "Occupational exposure band (OEB)", def: "Categoría interna de una empresa que agrupa productos según su límite de exposición y fija la contención necesaria. No es una norma legal." },
    { es: "Contención en origen", en: "Containment at source", def: "Encerrar el producto en el punto donde se manipula para que no llegue al aire de la sala." },
    { es: "Vigilancia de la salud", en: "Health surveillance", def: "Examen de cada trabajador para determinar su estado de salud en relación con la exposición a agentes químicos." },
  ],
  quiz: [
    {
      kind: "number",
      q: "El tolueno tiene un VLA-ED de 50 ppm y una masa molar de 92,14 g/mol. Con la fórmula del INSST (volumen molar 24,04), ¿cuánto es en mg/m³?",
      answer: 191.6,
      tolerance: 0.01,
      unit: "mg/m³",
      explain: "mg/m³ = ppm × masa molar / 24,04 = 50 × 92,14 / 24,04 = 191,6 mg/m³, que la tabla del INSST redondea a 192.",
    },
    {
      kind: "number",
      q: "El isopropanol tiene un VLA-EC de 400 ppm y una masa molar de 60,10 g/mol. ¿Cuánto es en mg/m³ con la fórmula del INSST?",
      answer: 1000,
      tolerance: 0.01,
      unit: "mg/m³",
      explain: "mg/m³ = ppm × masa molar / 24,04 = 400 × 60,10 / 24,04 = 1000 mg/m³, el mismo valor que da la tabla del INSST.",
    },
    {
      kind: "number",
      q: "En un turno de 8 horas pasas 3 horas a 90 mg/m³ de tolueno, 4 horas a 30 mg/m³ y 1 hora fuera de zona, a 0. ¿Cuál es tu exposición diaria (ED)?",
      answer: 48.75,
      tolerance: 0.01,
      unit: "mg/m³",
      explain: "ED = (90 × 3 + 30 × 4 + 0 × 1) / 8 = (270 + 120) / 8 = 390 / 8 = 48,75 mg/m³.",
    },
    {
      kind: "number",
      q: "Tu exposición diaria a tolueno ha sido de 48 mg/m³ y el VLA-ED es de 192 mg/m³. ¿Qué porcentaje del límite representa?",
      answer: 25,
      tolerance: 0.01,
      unit: "%",
      explain: "48 / 192 = 0,25, es decir, el 25 % del VLA-ED. Cumple el límite diario, pero aún hay que comprobar los picos contra el VLA-EC.",
    },
    {
      kind: "number",
      q: "Haces un turno de 12 horas respirando todo el tiempo 100 mg/m³ de un disolvente. ¿Qué exposición diaria (ED) se compara con el VLA-ED?",
      answer: 150,
      tolerance: 0.01,
      unit: "mg/m³",
      explain: "Los tiempos suman la jornada real y se divide siempre entre 8: ED = 100 × 12 / 8 = 150 mg/m³. A igual concentración, más horas dan más exposición.",
    },
    {
      kind: "choice",
      q: "La ficha del metanol indica un VLA-ED con la nota «vía dérmica». Te cae metanol en la manga y no notas nada. ¿Qué haces?",
      options: [
        "Sigo trabajando, porque si no pica ni quema es que no hay daño",
        "Sigo, porque la medición de aire del mes pasado salió bien",
        "Me quito la prenda mojada, me lavo la zona y aviso a mi responsable",
        "Me pongo la máscara, que es la protección que corta esa vía",
      ],
      answer: 2,
      explain: "La nota «vía dérmica» avisa de que la piel puede aportar mucho a lo que absorbes y de que medir el aire no basta; que no pique no significa que no entre.",
    },
    {
      kind: "choice",
      q: "Un compañero lleva años con un producto con la nota «Sen» sin problemas. Ahora tose y le pita el pecho cada vez que se abre ese bidón, aunque esté lejos. ¿Qué es lo más probable?",
      options: [
        "Se ha sensibilizado: ahora reacciona a cantidades muy pequeñas y debe ir al servicio médico",
        "Es un resfriado, porque durante años no le había pasado nada con ese producto",
        "La concentración ha superado seguro el VLA-EC y basta con ventilar más la sala",
        "Se le pasará si sigue expuesto, porque el cuerpo acaba acostumbrándose al producto",
      ],
      answer: 0,
      explain: "Tras sensibilizarse, la exposición siguiente puede dar respuestas intensas incluso a muy bajas concentraciones; el límite no protege a quien ya está sensibilizado.",
    },
    {
      kind: "choice",
      q: "Según el artículo 5 del Real Decreto 374/2001, cuando no se puede sustituir el producto, ¿en qué orden se aplican las medidas?",
      options: [
        "Protección individual, después ventilación y por último aislar el producto",
        "Ventilación general, después protección individual y por último formación",
        "Vigilancia de la salud, después protección individual y por último ventilación",
        "Aislar el producto, después ventilación y protección colectiva, y por último protección individual",
      ],
      answer: 3,
      explain: "El orden de prioridad es: a) procedimientos, controles técnicos y equipos que aíslen el agente; b) ventilación y protección colectiva en el origen; c) protección individual cuando lo anterior no basta.",
    },
    {
      kind: "choice",
      q: "Un compañero que viene de otra empresa dice: «Este intermedio es banda 3, así que con la extracción de siempre vale, como en mi antigua planta». ¿Qué le respondes?",
      options: [
        "Tiene razón: las bandas están fijadas por ley y son iguales en todas las empresas",
        "Las bandas son internas de cada empresa: aquí vale nuestra escala y nuestro procedimiento",
        "Tiene razón, pero solo si el producto no aparece en la tabla de límites del INSST",
        "Las bandas solo sirven para el almacén, así que en producción no hay que mirarlas",
      ],
      answer: 1,
      explain: "Las bandas (OEB) y los OEL internos son una herramienta de cada empresa, no una norma; la misma cifra puede significar cosas distintas en dos plantas.",
    },
    {
      kind: "choice",
      q: "Acabas de descargar un intermedio en polvo y llega la hora del bocadillo. ¿Qué es lo correcto?",
      options: [
        "Comer en la zona con los guantes puestos, para no tocar la comida con las manos",
        "Sacudirme bien la ropa con aire comprimido y comer en la sala de control",
        "Salir de la zona, quitarme la protección y lavarme antes de comer en el lugar previsto",
        "Comer rápido en la zona, porque una exposición tan corta apenas suma en la fórmula",
      ],
      answer: 2,
      explain: "El polvo viaja en manos y ropa y entra por la boca: por eso se prohíbe comer y beber en zona y se da tiempo para asearse antes de cada comida.",
    },
  ],
};
