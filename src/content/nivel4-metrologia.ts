import type { Lesson } from "./types";

export const metrologiaAFondo: Lesson = {
  slug: "metrologia-a-fondo",
  level: 4,
  order: 8,
  title: "Metrología a fondo: error, incertidumbre, trazabilidad y calibración",
  titleEn: "Metrology in depth: error, uncertainty, traceability and calibration",
  minutes: 40,
  summary:
    "Qué es medir según el vocabulario internacional de metrología, los tipos de error, la estadística básica de unas lecturas repetidas, la incertidumbre con un presupuesto completo, cómo se compara un resultado con su especificación, la cadena de trazabilidad hasta el kilogramo y qué pasa con los lotes si un instrumento aparece fuera de tolerancia.",
  body: `
En la lección anterior viste las ideas básicas. Aquí, con definiciones oficiales y números, la pregunta de fondo: ¿cuánto te puedes fiar de un número?

### Medir es comparar
El vocabulario internacional de metrología (VIM, documento JCGM 200 del Comité Conjunto de Guías en Metrología) es el diccionario oficial de esta materia. Sus definiciones, en lenguaje llano:

- **Magnitud** (*quantity*): una propiedad de algo que se puede expresar con un número y una referencia. La masa de un saco, la temperatura de una masa de reacción. «25 kg» es un número (25) y una referencia (el kilogramo).
- **Medición** (*measurement*): el proceso de obtener de forma experimental uno o varios valores que se pueden atribuir razonablemente a una magnitud. El VIM añade que medir implica **comparar** magnitudes o contar entidades. Pesar es comparar la masa del saco con el kilogramo, a través de una báscula calibrada.
- **Mensurando** (*measurand*): la magnitud que se quiere medir, bien definida: «la masa de producto húmedo en el bidón», no «lo que marque la báscula».
- **Valor verdadero** (*true quantity value*): el valor que corresponde a la definición de la magnitud. El VIM dice que, en la práctica, **no se puede conocer**.
- **Valor medido** (*measured quantity value*): el valor que representa el resultado de la medida, lo que tú anotas.

La idea central: el valor verdadero nunca lo verás. Ves el valor medido, y la metrología dice **cuánto puede diferir** uno del otro.

### El error y sus dos caras
El **error de medida** (*measurement error*) es el valor medido menos un valor de referencia. Si una pesa patrón de 20,000 kg marca 20,01 kg, el error es +0,01 kg. Solo se conoce cuando se mide algo de valor conocido, como un patrón; al pesar un saco cualquiera, el error existe pero no lo sabes.

El VIM lo divide en dos partes:

- **Error sistemático** (*systematic error*): la parte que, al repetir la medida, se mantiene constante o cambia de forma predecible. Una báscula que siempre marca 10 g de más. Su estimación se llama **sesgo** (*bias*). Si se conoce, se puede compensar con una **corrección** (*correction*).
- **Error aleatorio** (*random error*): la parte que varía de forma impredecible de una lectura a otra. Vibraciones, corrientes de aire, cómo se apoya el saco. No se puede corregir, pero se reduce repitiendo y promediando.

**La diana.** Imagina cuatro tiradores de dardos:

| Tirador | Dónde caen los dardos | Error sistemático | Error aleatorio |
|---|---|---|---|
| A | Juntos y en el centro | Pequeño | Pequeño |
| B | Juntos, pero lejos del centro | Grande | Pequeño |
| C | Repartidos alrededor del centro | Pequeño | Grande |
| D | Repartidos y desplazados | Grande | Grande |

El centro es el valor verdadero; los dardos, las lecturas. La guía estadística de los laboratorios de la FDA usa la misma imagen con un arquero.

### Exactitud, veracidad y precisión
El VIM separa tres palabras que en la calle se mezclan:

- **Veracidad** (*trueness*): lo cerca que está la **media** de muchísimas lecturas repetidas del valor de referencia. Depende solo del error sistemático. El tirador B tiene mala veracidad.
- **Precisión** (*precision*): lo cerca que están las lecturas **entre sí**. Depende solo del error aleatorio y se expresa con la desviación típica. B es preciso; C, no.
- **Exactitud** (*accuracy*): lo cerca que está **una** lectura del valor verdadero. Necesita las dos cosas: solo A es exacto.

La precisión siempre se refiere a unas condiciones:

- **Repetibilidad** (*repeatability*): mismo procedimiento, operador, equipo y lugar, en poco tiempo. Es la dispersión mínima.
- **Precisión intermedia** (*intermediate precision*): mismo lugar, pero meses de por medio, otro analista u otra calibración.
- **Reproducibilidad** (*reproducibility*): lugares, operadores y equipos distintos.

Por eso dos laboratorios casi nunca dan el mismo número para una muestra: la reproducibilidad dispersa más que la repetibilidad.

### Estadística desde cero: diez lecturas
Valores de ejemplo: un técnico coloca diez veces una pesa patrón de 20,000 kg en la báscula de planta WS-205, que muestra 0,01 kg (10 g) como cifra más pequeña. Lee: 20,01 · 20,02 · 20,01 · 20,00 · 20,01 · 20,02 · 20,01 · 20,01 · 20,00 · 20,01 kg.

**Paso 1, la media** (*mean*): suma de las lecturas entre el número de lecturas. La suma es 200,10 kg; entre 10, **20,010 kg**.

**Paso 2, la desviación de cada lectura**: lectura menos media. Las dos lecturas de 20,02 dan +0,01 kg, las dos de 20,00 dan −0,01 kg y las seis de 20,01 dan cero:

| Lectura (kg) | Desviación (kg) | Desviación al cuadrado (kg²) |
|---|---|---|
| 20,01 (seis veces) | 0 | 0 |
| 20,02 (dos veces) | +0,01 | 0,0001 cada una |
| 20,00 (dos veces) | −0,01 | 0,0001 cada una |

**Paso 3, elevar al cuadrado y sumar.** Al cuadrado desaparecen los signos. Suma: 4 × 0,0001 = **0,0004 kg²**.

**Paso 4, dividir entre n − 1** (aquí 9): 0,0004 / 9 = 0,0000444 kg². La guía estadística de la FDA explica que dividir entre n solo vale cuando se mide la población entera; con una muestra de lecturas se usa n − 1.

**Paso 5, la raíz cuadrada**, que devuelve las unidades a kg: √0,0000444 = 0,00667 kg. Esa es la **desviación típica** (*standard deviation*, s): **s = 0,0067 kg**, unos 7 g.

La fórmula, s = √[ Σ (lectura − media)² / (n − 1) ], son los cinco pasos escritos juntos.

**Paso 6, la desviación típica relativa** o **coeficiente de variación** (*relative standard deviation*, RSD, o *coefficient of variation*, CV): s / media × 100 = 0,00667 / 20,010 × 100 = **0,033 %**. Sirve para comparar: 7 g en 20 kg es muy poco; en 50 g sería un desastre.

**El sesgo**: 20,010 − 20,000 = **+0,010 kg**. Báscula precisa y algo desplazada: el tirador B, en pequeño.

La media de 10 lecturas dispersa menos que una sola: s / √n = 0,0067 / √10 = 0,0021 kg. El VIM lo recoge: promediar suele reducir la incertidumbre.

### La incertidumbre: la duda razonable
La **incertidumbre de medida** (*measurement uncertainty*) es, según el VIM, un parámetro no negativo que caracteriza la dispersión de los valores que se pueden atribuir al mensurando a partir de la información disponible. En llano: **la duda razonable** que queda sobre el resultado después de medir bien.

No es el error: el error es una diferencia concreta que casi nunca conoces; la incertidumbre es la anchura de la duda, y sí se calcula. La guía de incertidumbre de los laboratorios de la FDA lo resume: una medida solo está completa si lleva su incertidumbre.

Cuatro escalones:

1. **Incertidumbre típica** (*standard uncertainty*, u): cada fuente de duda expresada como desviación típica.
2. **Incertidumbre típica combinada** (*combined standard uncertainty*, u_c): las de todas las fuentes juntas. Si son independientes, se combinan **en cuadratura**: se elevan al cuadrado, se suman y se saca la raíz. u_c = √(u₁² + u₂² + u₃² + …). Lo describen así la FDA y el anexo de buenas prácticas de laboratorio de la OMS (TRS 1052, anexo 4).
3. **Incertidumbre expandida** (*expanded uncertainty*, U): la combinada multiplicada por un **factor de cobertura** (*coverage factor*) k mayor que uno. U = k × u_c.
4. Con **k = 2**, el intervalo resultado ± U cubre aproximadamente el **95 %** de los valores razonables. La FDA usa k = 2 para el 95 % y k = 3 para el 99 %, y su guía estadística recuerda que en una curva normal el 95 % queda dentro de unas 2 desviaciones típicas (1,96, para ser exactos).

¿Por qué en cuadratura? Porque es muy improbable que todas las fuentes empujen a la vez y al máximo en el mismo sentido: sumarlas tal cual exageraría la duda.

### Tipo A y tipo B
El VIM distingue dos maneras de **evaluar** cada contribución:

- **Tipo A** (*Type A evaluation*): por estadística de lecturas repetidas. Es la desviación típica que acabas de calcular: u = s para una sola lectura, o s / √n si usas la media de n lecturas.
- **Tipo B** (*Type B evaluation*): por cualquier otra información. El VIM cita un certificado de calibración, un material de referencia certificado, la deriva, la clase de exactitud de un instrumento y límites deducidos de la experiencia.

Las tres fórmulas tipo B más usadas:

- **Certificado de calibración.** Da U y k. Se deshace la multiplicación: u = U / k. Si dice U = 0,010 kg con k = 2, u = 0,005 kg.
- **Tolerancia o límite «± a»** sin más información. Cualquier valor entre −a y +a se toma como igual de probable: es la **distribución rectangular** (*rectangular distribution*). Su incertidumbre típica es **u = a / √3**. El manual de análisis elemental de la FDA pone el ejemplo de una pipeta con ±1 %: 1 / √3 = 0,58 %.
- **Resolución** (*resolution*) de una pantalla digital. Si la última cifra salta de d en d, el valor real puede estar hasta media unidad de esa cifra por encima o por debajo: es una rectangular con a = d / 2, así que u = d / (2√3). Esta fórmula es de libro de texto: la GUM (JCGM 100:2008), que la recoge, no se pudo leer para esta lección.

### Un presupuesto de incertidumbre completo
Un **presupuesto de incertidumbre** (*uncertainty budget*) es, según el VIM, la lista de las contribuciones, su cálculo y su combinación. Valores de ejemplo para **una pesada de 25,00 kg** en la báscula WS-205:

| Fuente | Tipo | Dato de partida | Cálculo | u (g) | u² (g²) |
|---|---|---|---|---|---|
| Repetibilidad | A | s = 6,7 g (las diez lecturas) | u = s, una sola lectura | 6,7 | 44,4 |
| Calibración | B | Certificado: U = 10 g, k = 2 | 10 / 2 | 5,0 | 25,0 |
| Resolución | B | d = 10 g | 10 / (2 × √3) | 2,9 | 8,3 |
| Deriva entre calibraciones | B | Límite admitido ±20 g | 20 / √3 | 11,5 | 133,3 |
| **Suma de cuadrados** | | | | | **211,1** |

- Combinada: u_c = √211,1 = **14,5 g**.
- Expandida: U = 2 × 14,5 = **29 g**, unos **0,03 kg**.
- Resultado: **25,00 kg ± 0,03 kg** (k = 2, aproximadamente el 95 %).

Fíjate en qué manda: la deriva aporta 133 de los 211 g². Para pesar mejor, más decimales en pantalla casi no ayudan; ayuda vigilar la deriva. Para eso sirve el presupuesto: dice dónde está la duda.

En relativo: 29 g son el 0,12 % de 25 kg, pero el 1,5 % de 2 kg.

### Cómo se escribe un resultado
Un resultado completo lleva: valor, incertidumbre, unidad, el factor k y la probabilidad. «25,00 kg ± 0,03 kg (k = 2, aproximadamente 95 %)».

¿Cuántas cifras?

- La incertidumbre, con una o dos cifras significativas. La guía de la FDA dice que en la mayoría de los casos dos bastan.
- El valor, redondeado a la **misma posición decimal** que la incertidumbre (regla de libro de texto): «25,0037 kg ± 0,03 kg» inventa cifras.

### Incertidumbre y especificación
Valores de ejemplo: un principio activo ficticio debe tener una riqueza de 98,0 a 102,0 %, y el laboratorio sabe que su método de valoración tiene U = 0,6 % (k = 2).

**Ejemplo 1, claramente dentro.** Resultado 99,6 %: el intervalo, de 99,0 a 100,2 %, queda todo dentro.

**Ejemplo 2, dentro pero cerca.** Resultado 98,3 %: el intervalo, de 97,7 a 98,9 %, cruza el 98,0 %. El valor medido cumple, pero el verdadero podría, con poca probabilidad, estar fuera: es la **zona de duda** alrededor del límite.

Qué se hace lo dice una **regla de decisión** (*decision rule*) escrita **antes** de analizar. Hay dos familias:

- **Aceptación simple**: se compara el resultado con el límite y punto. 98,3 % cumple.
- **Con banda de guarda** (*guard band*): se acepta solo si el resultado está a cierta distancia del límite, por ejemplo una U. Con ella, 98,3 % no bastaría.

En farmacia manda la primera. El anexo de la OMS sobre laboratorios de control (TRS 1052, anexo 4, apartados 6.55, 6.59 y 6.66) explica que los límites de las farmacopeas y del registro **ya tienen en cuenta** la variación analítica normal, que no se aplican tolerancias adicionales a esos límites y que la decisión de usar la incertidumbre en una declaración de conformidad se documenta de antemano. A cambio, el laboratorio demuestra que su incertidumbre real no supera la prevista. Así que 98,3 % cumple, sin «casi». Un 97,9 %, en cambio, es un resultado fuera de especificación (*out of specification*, OOS), e ICH Q7 (11.15) obliga a investigarlo según un procedimiento; las repeticiones también siguen un procedimiento escrito, nunca se piden «a ver si sale mejor».

### Trazabilidad: la cadena hasta el kilogramo
La **trazabilidad metrológica** (*metrological traceability*) es, según el VIM, la propiedad de un resultado por la cual se puede relacionar con una referencia mediante una **cadena ininterrumpida y documentada de calibraciones**, cada una de las cuales **contribuye a la incertidumbre**.

La cadena de la báscula WS-205, de abajo arriba:

1. **La báscula WS-205** se calibra con pesas patrón de la planta.
2. **Las pesas patrón de trabajo** (*working standard*) de la planta las calibra un laboratorio de calibración externo con sus patrones de referencia.
3. **Los patrones de referencia** del laboratorio se calibran frente a patrones de nivel superior, hasta llegar al patrón nacional.
4. **El patrón nacional.** Según la Ley 32/2014 de Metrología, los patrones nacionales los custodia la Administración General del Estado y de ellos «se derivan todos los demás»; el Centro Español de Metrología (CEM) es el instituto nacional de metrología.
5. **La definición del kilogramo.** Hoy, el Real Decreto 2032/2009, modificado por el Real Decreto 493/2020, define el kilogramo fijando el valor numérico de la constante de Planck: 6,626 070 15 × 10⁻³⁴ J·s.

En cada escalón la incertidumbre crece: la de la báscula nunca es menor que la de sus pesas.

**Qué leer en un certificado de calibración:**

- Identificación del instrumento y de quién calibra.
- Los **valores** en cada punto frente al patrón, «tal como se encontró» y, si se ajustó, «tal como se deja».
- La **incertidumbre** de cada punto con su k. Un certificado sin incertidumbre rompe la cadena: según la definición del VIM, cada calibración aporta la suya.
- La **trazabilidad**: a qué patrones se refiere.
- La **fecha** de calibración y las condiciones.

**Laboratorios acreditados.** La **acreditación** (*accreditation*) es el reconocimiento formal de la competencia técnica de un laboratorio de ensayo o de calibración (definición de la Ley 21/1992 de Industria, citada en el Real Decreto 1715/2010). En España la otorga la Entidad Nacional de Acreditación (ENAC), designada por ese real decreto como único organismo nacional de acreditación. Un certificado de un laboratorio acreditado para esa magnitud da confianza en la cadena y en la incertidumbre.

### Calibración, verificación y ajuste: lo que falta
Calibrar, ajustar y verificar ya los conoces. Faltan tres piezas.

**El intervalo de calibración.** ICH Q7 (5.30) pide calibrar los equipos críticos según procedimientos escritos y un **calendario establecido**. La OMS (TRS 1052, anexo 4, apartado 5.33) pide una política que diga, para cada tipo de equipo, cada cuánto se calibra y tras qué sucesos hay que hacerlo; su apartado 5.39 cita entre ellos una reparación o un traslado. La edición anterior (TRS 957, anexo 1, 12.6) concretaba de qué depende: del tipo de equipo, de cuánto se usa y de lo que recomienda el fabricante, con ejemplos como pH-metros verificados con tampones certificados antes de usarlos y balanzas comprobadas a diario. Conviene mirar también el historial: si cada calibración aparece al límite, el intervalo es demasiado largo.

**El estado de calibración.** Q7 (5.33) pide que el estado de los equipos críticos se conozca y se pueda comprobar; la OMS (TRS 1052, anexo 4, 5.36) pide etiquetarlos con su estado y la fecha de la próxima actuación. Antes de usar una báscula miras la etiqueta. Si está vencida, no se usa (Q7 5.34).

**Si aparece fuera de tolerancia.** Q7 (5.35) obliga a investigar si la desviación pudo afectar a la calidad de lo fabricado con ese equipo **desde la última calibración correcta**. Valores de ejemplo: la calibración anual de la WS-205 encuentra un error de +0,08 kg con 50 kg, con un error máximo permitido de ±0,05 kg. La última calibración correcta fue hace doce meses. Hay que:

1. Retirar la báscula y etiquetarla como fuera de uso (OMS, TRS 1052, anexo 4, 5.40).
2. Sacar la lista de pesadas y lotes de esos doce meses.
3. Mirar las verificaciones diarias: si empezaron a fallar hace tres semanas, ayudan a acotar el impacto, aunque la investigación parte de la última calibración correcta.
4. Valorar cada lote: 0,08 kg en una carga de 50 kg es un 0,16 %. ¿Importa frente a la tolerancia de la receta? Lo decide calidad, no el turno, con el error que el certificado da en cada punto.

### Por qué te importa
Un «99,1 %» del laboratorio no es «exactamente 99,1». Con una U de 0,6 %, es «muy probablemente entre 98,5 y 99,7 %». Dos análisis de la misma muestra pueden dar 99,1 y 99,3 % sin que nadie se equivoque.

Por eso:

- Un resultado cerca del límite no se discute en el turno ni se pide repetirlo «por si acaso». Si cumple, cumple; si no, lo investigan laboratorio y calidad.
- Tus pesadas también tienen incertidumbre: báscula adecuada a la carga, etiqueta en vigor y verificación anotada.
- Si una báscula o una sonda te parece rara, dilo enseguida: menos lotes quedarán en duda.

En planta manda siempre el procedimiento vigente (SOP): fija básculas, verificaciones, intervalos y reglas de decisión.
`,
  plant: `
Valores y códigos de ejemplo. Victor carga 25,00 kg del intermedio ficticio IX-40 en el reactor R-301 usando la báscula WS-205. Antes de pesar mira la etiqueta: calibrada en marzo, próxima calibración en marzo del año siguiente. Hace la verificación diaria con la pesa patrón de 20,000 kg: marca 20,01 kg, dentro del criterio de ±0,02 kg del procedimiento. Lo anota y pesa.

Días después, el producto seco del secadero SD-303 da en el laboratorio una riqueza de 98,3 % frente a una especificación de 98,0 a 102,0 %. Un compañero dice: «Está justo, pidamos que lo repitan». La supervisora explica que el método tiene una incertidumbre de unos 0,6 %, que los límites ya cuentan con esa variación y que la regla de decisión del laboratorio es comparar el resultado con el límite. Cumple. Repetir sin motivo para «asegurar» no está permitido.

Meses más tarde, la calibración anual de la WS-205 encuentra un error de +0,08 kg con 50 kg, fuera del error máximo permitido de ±0,05 kg. Se retira la báscula, se abre una desviación y calidad saca la lista de lotes pesados con ella desde la última calibración correcta. Las verificaciones diarias muestran que empezó a fallar hace tres semanas: los dos lotes de ese periodo se evalúan con más detalle. Calidad mira en el certificado el error en el punto más cercano a cada carga y lo compara con la tolerancia de la receta antes de decidir.
`,
  batchRecord: `
- **Código de la báscula o del instrumento** usado en cada pesada o medida (WS-205, por ejemplo), para que se pueda rastrear si luego aparece fuera de tolerancia.
- **Estado de calibración comprobado**: casilla o firma que confirma que la etiqueta estaba en vigor.
- **Verificación diaria**: valor de la pesa patrón, lectura obtenida, criterio y resultado (cumple o no cumple), con fecha y firma.
- **Lecturas tal como salen**, con los decimales que muestra la pantalla: 25,00 kg, ni 25 ni 25,000.
- **Resultados del laboratorio** recibidos (riqueza, humedad) con su especificación y el «cumple» o «no cumple» del certificado de análisis, sin reinterpretarlos.
- **Incidencias**: báscula con etiqueta vencida, verificación fallida o lectura inestable, anotadas y comunicadas en el momento.
`,
  terms: [
    { es: "Mensurando", en: "Measurand", def: "Magnitud que se quiere medir, definida con el detalle necesario." },
    { es: "Valor verdadero", en: "True quantity value", def: "Valor que corresponde a la definición de la magnitud. En la práctica no se puede conocer." },
    { es: "Error de medida", en: "Measurement error", def: "Valor medido menos un valor de referencia." },
    { es: "Sesgo", en: "Bias", def: "Estimación del error sistemático; se puede compensar con una corrección." },
    { es: "Veracidad", en: "Trueness", def: "Proximidad entre la media de muchas lecturas repetidas y el valor de referencia." },
    { es: "Repetibilidad", en: "Repeatability", def: "Precisión con el mismo procedimiento, operador, equipo y lugar, en poco tiempo." },
    { es: "Reproducibilidad", en: "Reproducibility", def: "Precisión entre lugares, operadores y equipos distintos." },
    { es: "Desviación típica", en: "Standard deviation", def: "Medida de cuánto se separan las lecturas de su media; raíz de la suma de cuadrados de las desviaciones entre n − 1." },
    { es: "Coeficiente de variación", en: "Coefficient of variation (RSD)", def: "Desviación típica dividida entre la media, en porcentaje." },
    { es: "Incertidumbre de medida", en: "Measurement uncertainty", def: "Parámetro que caracteriza la dispersión de los valores que se pueden atribuir razonablemente al mensurando." },
    { es: "Incertidumbre expandida", en: "Expanded uncertainty", def: "Incertidumbre combinada multiplicada por el factor de cobertura k; con k = 2, aproximadamente el 95 %." },
    { es: "Presupuesto de incertidumbre", en: "Uncertainty budget", def: "Lista de las contribuciones a la incertidumbre, con su cálculo y su combinación." },
    { es: "Regla de decisión", en: "Decision rule", def: "Criterio, fijado de antemano, para declarar si un resultado cumple una especificación." },
    { es: "Acreditación", en: "Accreditation", def: "Reconocimiento formal de la competencia técnica de un laboratorio; en España la otorga ENAC." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Un pH-metro da cinco lecturas de la misma disolución tampón: 7,02 · 7,05 · 7,03 · 7,04 · 7,06. ¿Cuál es la media?",
      answer: 7.04,
      tolerance: 0.001,
      unit: "",
      explain: "Suma 35,20 entre 5 lecturas: 35,20 / 5 = 7,04.",
    },
    {
      kind: "number",
      q: "Cuatro pesadas de una misma muestra dan 10,2 · 10,4 · 10,3 · 10,5 g (media 10,35 g). ¿Cuál es la desviación típica, con dos decimales?",
      answer: 0.13,
      tolerance: 0.04,
      unit: "g",
      explain: "Desviaciones −0,15, +0,05, −0,05 y +0,15; sus cuadrados suman 0,05; entre n − 1 = 3 da 0,0167; la raíz es 0,129, es decir, 0,13 g.",
    },
    {
      kind: "number",
      q: "Seis inyecciones de un patrón dan una media de 99,6 % y una desviación típica de 0,15 %. ¿Cuál es el coeficiente de variación, en %?",
      answer: 0.15,
      tolerance: 0.02,
      unit: "%",
      explain: "CV = s / media × 100 = 0,15 / 99,6 × 100 = 0,1506, es decir, 0,15 %.",
    },
    {
      kind: "number",
      q: "Una medida de volumen tiene dos contribuciones independientes de incertidumbre típica: 0,03 mL y 0,04 mL. ¿Cuál es la incertidumbre típica combinada?",
      answer: 0.05,
      tolerance: 0.01,
      unit: "mL",
      explain: "En cuadratura: raíz de (0,03² + 0,04²) = raíz de (0,0009 + 0,0016) = raíz de 0,0025 = 0,05 mL. Sumarlas sin más (0,07) exageraría la duda.",
    },
    {
      kind: "number",
      q: "La incertidumbre típica combinada de una pesada es 0,012 kg. ¿Cuál es la incertidumbre expandida con k = 2?",
      answer: 0.024,
      tolerance: 0.01,
      unit: "kg",
      explain: "U = k × u_c = 2 × 0,012 = 0,024 kg, que cubre aproximadamente el 95 % de los valores razonables.",
    },
    {
      kind: "number",
      q: "Una sonda tiene un error máximo permitido de ±0,5 °C y no se sabe nada más, así que se trata como una distribución rectangular. ¿Cuál es su incertidumbre típica, con dos decimales?",
      answer: 0.29,
      tolerance: 0.02,
      unit: "°C",
      explain: "Rectangular: u = a / raíz de 3 = 0,5 / 1,732 = 0,289, es decir, 0,29 °C.",
    },
    {
      kind: "choice",
      q: "Diez lecturas de una pesa patrón de 20,000 kg salen todas entre 20,04 y 20,05 kg. ¿Cómo describirías la báscula según el VIM?",
      options: [
        "Es precisa y de buena veracidad, porque las lecturas están juntas",
        "Es precisa pero de veracidad pobre: tiene un sesgo de unos 0,04 kg",
        "Es poco precisa, porque las lecturas no coinciden con el patrón",
        "Es exacta, porque el error es pequeño comparado con 20 kg",
      ],
      answer: 1,
      explain: "Lecturas muy juntas indican buena precisión (poco error aleatorio). Su media está desplazada respecto al patrón: eso es un error sistemático, un sesgo, que empeora la veracidad.",
    },
    {
      kind: "choice",
      q: "La especificación de riqueza es de 98,0 a 102,0 % y el laboratorio informa 98,3 %, con una incertidumbre expandida del método de 0,6 %. Un compañero quiere pedir que lo repitan. ¿Qué es lo correcto?",
      options: [
        "Pedir dos repeticiones y quedarse con la media de las tres",
        "Considerar el lote fuera de especificación por estar cerca del límite",
        "Restar la incertidumbre al resultado y declarar que no cumple",
        "Aceptar el resultado: cumple según la regla de decisión del laboratorio",
      ],
      answer: 3,
      explain: "En farmacia los límites ya tienen en cuenta la variación analítica normal y la regla de decisión, fijada de antemano, compara el resultado con el límite. 98,3 % cumple. Repetir sin motivo para buscar otro número no se permite.",
    },
    {
      kind: "choice",
      q: "La calibración anual de una báscula crítica la encuentra fuera de su error máximo permitido. Según ICH Q7 5.35, ¿qué hay que investigar?",
      options: [
        "El impacto en lo fabricado con ella desde la última calibración correcta",
        "Solo el lote que se estaba pesando el día de la calibración",
        "Nada: basta con ajustarla y volver a calibrarla antes de usarla",
        "Solo los lotes de la última semana, si las pesadas parecían normales",
      ],
      answer: 0,
      explain: "ICH Q7 5.35 pide investigar si la desviación pudo afectar a la calidad de los intermedios o API fabricados con ese equipo desde la última calibración correcta. Las verificaciones diarias ayudan a acotar, pero no sustituyen la investigación.",
    },
    {
      kind: "choice",
      q: "Te llega el certificado de calibración externa de unas pesas patrón. ¿Qué dato, si falta, rompe la trazabilidad metrológica?",
      options: [
        "El nombre del técnico de planta que recibió el certificado",
        "El color o el material de la caja en la que vienen las pesas",
        "La incertidumbre de cada valor calibrado, con su factor k",
        "La fecha prevista para la próxima limpieza de la sala de pesadas",
      ],
      answer: 2,
      explain: "El VIM define la trazabilidad como una cadena ininterrumpida de calibraciones en la que cada una contribuye a la incertidumbre. Sin la incertidumbre de cada punto no se puede saber cuánto se fía uno del patrón.",
    },
  ],
};
