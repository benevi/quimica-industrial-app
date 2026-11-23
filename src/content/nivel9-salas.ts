import type { Lesson } from "./types";

export const salasAFondo: Lesson = {
  slug: "salas-limpias-a-fondo",
  level: 9,
  order: 6,
  title: "Salas limpias y zonas de producción a fondo",
  titleEn: "Cleanrooms and production areas in depth",
  minutes: 38,
  summary:
    "Qué es una partícula en el aire y de dónde sale, los grados A a D del anexo 1 con sus límites de partículas y de microorganismos, la diferencia entre clasificar y vigilar, qué zonas pide ICH Q7 a un API no estéril y qué haces tú al entrar material, al abrir un bidón o un secadero y ante una alarma o un resultado fuera de límite.",
  body: `
En «Salas limpias y su clasificación» viste qué es una sala limpia. En «Aire, presiones y salas a fondo» (nivel 14), la unidad de aire, los filtros HEPA, las renovaciones, la cascada de presiones y las esclusas. Aquí vamos a lo que se mide en la sala, a lo que exige la norma de un principio activo y a lo que haces tú.

### Qué es una partícula en suspensión
Una **partícula en suspensión** (*airborne particle*) es un trocito de materia, sólido o una gota, tan pequeño y ligero que flota en el aire en vez de caer enseguida. Las que cuentan en una sala limpia no se ven a simple vista.

Se miden en **micrómetros** (µm): un micrómetro es la millonésima parte de un metro, o la milésima parte de un milímetro. El anexo 1 de las normas europeas de correcta fabricación (EudraLex, volumen 4) cuenta dos tamaños:

- partículas **iguales o mayores que 0,5 µm**;
- partículas **iguales o mayores que 5 µm**, las «gruesas».

Hay dos familias:

- **Partículas totales** (*total particles*): todas, vivas o no. Las cuenta un **contador de partículas** (*particle counter*), un aparato que aspira un volumen conocido de aire y cuenta las partículas de cada tamaño. El resultado se tiene al momento; en el grado A se vigila de forma continua (anexo 1, 9.17).
- **Partículas viables** (*viable particles*): las que llevan microorganismos vivos capaces de crecer. El contador no las distingue: se recogen sobre un medio de cultivo, se incuban y se cuentan las colonias en **UFC** (unidades formadoras de colonias). El resultado tarda días, como viste en «Ensayos microbiológicos: recuento y endotoxinas».

### De dónde salen: sobre todo de nosotros
Las partículas salen del aire que entra, de los materiales, de los equipos y de las personas. El anexo 1 de 2022 (apartado 2.1) nombra como fuentes externas de contaminación al **personal**, los materiales y el entorno. Y las normas tratan a las personas como una fuente principal:

- **Apartado 7.2**: en la sala debe haber solo el número mínimo de personas necesario.
- **Apartado 7.7**: la higiene personal es esencial para evitar un desprendimiento excesivo de partículas y microorganismos, y hay que avisar de enfermedades que lo aumenten.
- **Apartado 7.18**: los movimientos deben ser lentos, controlados y metódicos para no desprender partículas y microorganismos por una actividad demasiado enérgica.

La prueba está en la propia tabla de límites: en el grado B el límite «en operación», con personas trabajando, es cien veces el de «en reposo», sin personas. Lo verás en la cuenta más abajo.

El otro gran foco es lo que entra: el apartado 4.10 dice que el paso de equipos y materiales hacia dentro y hacia fuera de las salas es **una de las mayores fuentes potenciales de contaminación**. Por eso el bidón que metes tiene su propia esclusa y su propio procedimiento.

### En reposo y en operación
Una misma sala no da los mismos números vacía que trabajando. El anexo 1 (apartado 4.29) define dos estados:

- **En reposo** (*at rest*): instalación terminada, aire acondicionado funcionando y equipos principales instalados, pero **parados y sin personas** en la sala.
- **En operación** (*in operation*): todo instalado y funcionando como lo define el fabricante, con el **número máximo de personas** previsto haciendo o simulando el trabajo normal.

Tras terminar una operación y limpiar, la sala debe volver a los límites de reposo después de un periodo de **limpieza del aire** (*clean up*), con un valor orientativo de menos de 20 minutos (4.29). Ese tiempo se fija al cualificar la sala y se respeta en los procedimientos.

### Los grados A, B, C y D
El anexo 1 (apartado 4.4) describe cuatro grados para fabricar productos estériles:

| Grado | Para qué es |
|---|---|
| A | Zona crítica de operaciones de alto riesgo: línea aséptica, llenado, envases abiertos. Normalmente con flujo de aire unidireccional local. |
| B | Sala de fondo que rodea al grado A en la preparación y el llenado asépticos. |
| C y D | Etapas menos críticas de productos llenados asépticamente, fondo de aisladores, o preparación y llenado de productos que se esterilizan al final en su envase. |

**Tabla 1 del anexo 1 (apartado 4.27): límites para clasificar la sala**, en partículas totales por metro cúbico de aire:

| Grado | ≥ 0,5 µm en reposo | ≥ 0,5 µm en operación | ≥ 5 µm en reposo | ≥ 5 µm en operación |
|---|---|---|---|---|
| A | 3520 | 3520 | No especificado | No especificado |
| B | 3520 | 352000 | No especificado | 2930 |
| C | 352000 | 3520000 | 2930 | 29300 |
| D | 3520000 | No predeterminado | 29300 | No predeterminado |

En el grado D, los límites en operación los fija cada fabricante con un análisis de riesgos y sus datos de rutina (nota b de la tabla).

**Tabla 2 del anexo 1 (apartado 4.31): límites de microorganismos al cualificar la sala**:

| Grado | Aire (UFC/m³) | Placa de sedimentación de 90 mm (UFC en 4 horas) | Placa de contacto de 55 mm (UFC por placa) |
|---|---|---|---|
| A | Sin crecimiento | Sin crecimiento | Sin crecimiento |
| B | 10 | 5 | 5 |
| C | 100 | 50 | 25 |
| D | 200 | 100 | 50 |

La **placa de sedimentación** (*settle plate*) se deja abierta como máximo 4 horas; la **placa de contacto** (*contact plate*) se apoya sobre una superficie.

### Clasificar no es lo mismo que vigilar
Aquí está una idea que mucha gente confunde. El anexo 1 (apartado 4.24) pide que la **cualificación** de la sala, que incluye la **clasificación**, se distinga claramente de la **monitorización ambiental** (*environmental monitoring*) del día a día.

| | Clasificación (parte de la cualificación) | Monitorización |
|---|---|---|
| Qué pregunta responde | ¿Esta sala alcanza el grado para el que se diseñó? | ¿Sigue alcanzándolo hoy, en este lote? |
| Cuándo | Al ponerla en marcha y en cada recualificación | De forma rutinaria, durante el trabajo |
| Qué mide | Partículas totales (4.26); la cualificación añade microorganismos, filtros, caudales, presiones y más (4.25) | Partículas, microorganismos, presiones, temperatura y humedad |
| Límites | Tablas 1 y 2 | Tablas 5 y 6, como límites de acción máximos |

Se recualifica como máximo cada **6 meses** en los grados A y B y cada **12 meses** en los C y D, y tras cambios importantes (4.32).

La **tabla 5** (apartado 9.15), la de vigilancia, copia la tabla 1 salvo en un detalle: para 5 µm pone 29 por m³ en el grado A y en el B en reposo, donde la tabla 1 decía «no especificado». Al clasificar no se exige contar las gruesas en A; al vigilar, sí.

La **tabla 6** (apartado 9.30) da los límites de acción de microorganismos en la vigilancia: los mismos números de la tabla 2 y una columna más, la **huella de guante** (*glove print*) de los cinco dedos de las dos manos: 5 UFC por guante en el grado B. Su nota (c) añade que en el grado A **cualquier** crecimiento obliga a investigar.

### Nivel de alerta y límite de acción
El glosario del anexo 1 define dos escalones:

- **Nivel de alerta** (*alert level*): aviso temprano de que algo se está desviando de lo normal. No obliga necesariamente a corregir, pero sí a mirar y hacer seguimiento.
- **Límite de acción** (*action limit*): si se supera, obliga a investigar y a corregir.

El apartado 9.9 dice que los límites de acción pueden ser más estrictos que los de las tablas, y que los niveles de alerta se fijan con los datos de cualificación y de tendencia. El 9.13 dice qué pasa al superar un límite de acción: investigación de la causa, evaluación del impacto en el producto, **incluidos los lotes fabricados entre la toma de muestra y el resultado**, y acciones correctivas y preventivas. Esto último es clave para ti: como el resultado microbiológico tarda días, un mal resultado puede afectar a lotes que ya salieron de tu sala.

### Cuentas sencillas con los límites
**Cuenta 1. De metros cúbicos a pies cúbicos.** Muchos contadores y documentos de Estados Unidos dan partículas por pie cúbico (ft³). Un pie cúbico son 0,028317 m³ y un metro cúbico son 35,31467 ft³ (tabla A-2 de la parte 98 del título 40 del código federal de EE. UU.).

- 3520 por m³ × 0,028317 = 99,7 por ft³, casi 100.
- 352000 por m³ × 0,028317 = 9968 por ft³, casi 10000.

Por eso la guía de la FDA de 2004 sobre fabricación aséptica llama «clase 100» a 3520 por m³ (ISO 5) y «clase 10000» a 352000 (ISO 7).

**Cuenta 2. Al revés.** Un contador marca 20000 partículas de 0,5 µm por ft³. En m³: 20000 × 35,31467 = 706293 por m³. Comparado con la tabla 1, supera el límite de un grado C en reposo (352000) y queda por debajo del de un grado C en operación (3520000).

**Cuenta 3. Cuánto aire mira el contador.** El anexo 1 (9.17) pide en el grado A un caudal de muestra de al menos 28 litros, aproximadamente 1 ft³, por minuto. En 28 litros, que son 0,028 m³, una sala justo en el límite de 3520 por m³ daría 3520 × 28 / 1000 = 98,56 partículas en ese minuto.

**Cuenta 4. Comparar un recuento con el límite.** En una sala grado C en operación (valor de ejemplo) el contador da 2100000 partículas de 0,5 µm por m³ y 31000 de 5 µm por m³.

- 0,5 µm: 2100000 / 3520000 × 100 = 59,7 % del límite. Cumple.
- 5 µm: 31000 frente a 29300. Supera el límite.

Basta con que **un** tamaño supere su límite para no cumplir.

**Cuenta 5. Reposo frente a operación.** Grado B, partículas de 0,5 µm: 352000 / 3520 = 100. Con personas trabajando se admiten cien veces más partículas. Ese salto lo producen sobre todo las personas y las máquinas en marcha.

### Qué exige ICH Q7 a un API no estéril
Ahora lo importante para tu planta. **El anexo 1 es para medicamentos estériles.** Su apartado 1 (ámbito) admite que algunos de sus principios, como la clasificación o la vigilancia, se usen en productos no estériles, pero entonces el fabricante debe documentar cuáles aplica y demostrar que los cumple. La norma de un principio activo es **ICH Q7**, y **no usa grados A, B, C ni D**. Lo que pide, por apartados:

- **1.3**: la exigencia de las normas debe **aumentar** a medida que el proceso avanza hacia las etapas finales, la purificación y el envasado. El procesado físico, como la molienda o la micronización, se hace como mínimo según esta guía.
- **4.10**: edificios diseñados para facilitar la limpieza y para minimizar la contaminación. Si el API tiene especificación microbiológica, también para limitar la exposición a microorganismos indeseables.
- **4.13**: flujo de materiales y personas pensado para evitar mezclas y contaminación.
- **4.14**: zonas definidas, u otros sistemas de control, para recepción y cuarentena, muestreo, producción, envasado y etiquetado, almacén, rechazos y laboratorio.
- **4.21**: ventilación, filtración y extracción que controlen presión, polvo, humedad, temperatura y, si procede, microorganismos, **según la etapa**, con especial atención a las zonas donde el API **queda expuesto al ambiente**.
- **4.40 a 4.42**: zonas **dedicadas** para materiales muy sensibilizantes, como penicilinas o cefalosporinas; valorarlas para productos muy potentes o tóxicos; y medidas para que las personas y los materiales no lleven contaminación de una zona dedicada a otra.
- **4.71 y 4.72**: procedimientos escritos de limpieza y de uso de agentes de limpieza y desinfección.
- **5.15**: equipos cerrados siempre que se pueda; si se abren, precauciones para minimizar la contaminación.
- **8.52**: precauciones contra la contaminación cuando se maneja el API **después de la purificación**.

En la práctica: la síntesis va en equipos cerrados, y la zona de **aislamiento final, secado, molienda y envasado**, donde la torta húmeda sale de la centrífuga o del filtro y el producto final se ve, es la que lleva sala con aire tratado, presiones y esclusas. La guía de la OMS sobre climatización para productos no estériles (TRS 1010, anexo 8) dice que sus principios pueden aplicarse a las etapas de acabado de los API, y que, si se especifica una clasificación, hay que decir en qué estado vale: construida, en reposo o en operación (apartado 4.5). La misma guía define la zona **controlada no clasificada** (*controlled not classified*): se controlan algunas condiciones, como la temperatura, pero no tiene clasificación de sala limpia. Qué es tu sala lo decide y documenta tu empresa.

**¿Y si el API es estéril?** ICH Q7 (1.3) se aplica solo **hasta justo antes** de esterilizar el API. La esterilización y el procesado aséptico siguen las normas de medicamentos; en Europa, el anexo 1, cuyo ámbito incluye expresamente las sustancias activas estériles. Ahí sí rigen los grados: zona A con fondo B para lo aséptico. Y un punto intermedio: si un API **no estéril** se va a usar para fabricar un medicamento estéril, ICH Q7 pide controlar microorganismos y endotoxinas en el agua de las etapas finales (4.34) y tenerlos en cuenta en los estudios de limpieza de equipos (12.75).

### Esclusas, contaminación cruzada y segregación
El anexo 1 (4.12) pide esclusas para personas y para materiales entre grados distintos, **separadas** siempre que se pueda. Si no se puede, separación en el tiempo por procedimiento. La última fase de la esclusa debe tener, en reposo, el mismo grado que la sala a la que da. Lo que pasa de una zona menos limpia a otra más limpia se limpia y desinfecta según el riesgo. Las puertas no se abren a la vez (4.13).

La **contaminación cruzada** (*cross-contamination*) es que un producto acabe con restos de otro. Se evita con **segregación** (*segregation*): zonas, equipos o turnos separados, y circuitos de personas y materiales que no se cruzan. La OMS (TRS 1010, 4.11) añade que, en lo posible, personas y materiales no deben pasar de una zona más limpia a una menos limpia y volver a la más limpia.

Un matiz de ICH Q7 (8.50): dentro del **mismo** producto se admite cierto arrastre controlado, como la capa de cristales húmedos que queda en la cesta de una centrífuga tras descargar, siempre que no arrastre productos de degradación ni contaminación microbiana.

### Limpieza y desinfección de salas
Limpiar y desinfectar no son lo mismo:

- **Limpiar** quita la suciedad visible y los restos.
- **Desinfectar** (*disinfection*) reduce, de forma irreversible, el número de microorganismos hasta un nivel adecuado (glosario del anexo 1).

El anexo 1 (4.33) pide un programa escrito y estas ideas:

1. **Limpiar antes de desinfectar**: sobre suciedad, el desinfectante no llega.
2. **Quitar los restos de desinfectante** después.
3. Usar **más de un tipo** de desinfectante, con distintos modos de acción, para que juntos sean eficaces contra bacterias y hongos.
4. Usar periódicamente un **esporicida** (*sporicidal agent*), que destruye esporas.
5. Vigilar para comprobar que el programa funciona y detectar microorganismos resistentes.

A alternar desinfectantes según un calendario se le suele llamar **rotación de desinfectantes** (*disinfectant rotation*). El anexo 1 no usa esa palabra, pero sí la idea: más de un agente y un esporicida periódico. La razón la da la guía de la FDA de 2004 (apartado sobre eficacia de la desinfección): muchos desinfectantes comunes no matan esporas; por ejemplo, el alcohol isopropílico al 70 % no es eficaz contra las esporas de *Bacillus*.

Además, la desinfección se **valida**, incluida la caducidad de las disoluciones preparadas (4.34), y en los grados A y B los desinfectantes deben ser estériles (4.35). En tu sala es un registro más: producto, dilución, fecha, superficies y quién.

### Qué haces tú
**Al entrar con material.** Lo entras por la esclusa o ventana de materiales, no por la de personas, salvo que el procedimiento diga otra cosa. Limpias o desinfectas su exterior como diga el procedimiento, y retiras lo que no se pueda limpiar si así está escrito: el anexo 1 (4.7) pide que lo que se usa en la sala genere pocas partículas y aguante la limpieza. No abres las dos puertas a la vez. No vuelves atrás a por algo olvidado sin repetir la secuencia.

**Al abrir un bidón o un secadero en sala.** Antes compruebas que la sala está en condiciones: presión, temperatura y humedad en rango y sala liberada. Abres solo lo necesario y el tiempo mínimo (ICH Q7, 5.15). Te mueves despacio. No tocas el producto con la mano, ni con guante, salvo con el útil previsto (ICH Q7, 3.22). No te pones entre el aire limpio y el producto, ni tapas rejillas. Cierras en cuanto terminas.

**Ante una alarma de presión diferencial.** Paras, cierras envases y bocas, miras las puertas, avisas y anotas hora, valor y producto expuesto, como explica «Aire, presiones y salas a fondo».

**Ante un resultado de monitorización fuera de límite.** No eres quien lo decide, pero sí quien da la información:

- Avisas a tu responsable y a calidad según el procedimiento.
- Cuentas qué pasó en esa zona: qué operación, qué personas, qué intervención, si hubo una alarma o un mantenimiento.
- No limpias por tu cuenta el punto antes de que se tome una nueva muestra si no te lo piden. La guía de la FDA de 2004, por ejemplo, considera inapropiado desinfectar los guantes justo antes de tomar la muestra de guantes: falsea el resultado.
- Esperas instrucciones sobre los lotes: el 9.13 obliga a mirar todos los fabricados desde la muestra hasta el resultado.

Las cifras de esta lección son las de las guías. Las de tu sala, sus límites de alerta y de acción y lo que haces en cada caso los fija tu empresa: en planta manda siempre el procedimiento vigente (SOP).
`,
  plant: `
Sala de acabado SA-03, donde se descarga y envasa el producto ficticio FX-207. La torta húmeda llega de la centrífuga CF-202 al secadero de vacío SD-302, que se descarga en sala a bidones. La empresa ha clasificado la sala con los límites de un grado D en reposo y ha fijado sus propios límites de vigilancia. Para las placas de contacto ha puesto un nivel de alerta de 15 UFC y un límite de acción de 25 UFC por placa. Todos los valores son de ejemplo.

El lunes, el técnico de calidad toma placas de contacto en la boca de descarga del SD-302, en la mesa de envasado y en el suelo junto a la esclusa de materiales. El jueves llega el resultado: la boca del secadero da 31 UFC, por encima del límite de acción; las otras dos placas cumplen.

Tu responsable te pregunta qué pasó el lunes en esa zona. Lo buscas en la hoja: a las 9:10 se abrió la boca para quitar un apelmazamiento con una espátula, y la desinfección de la mañana se hizo con una dilución preparada el viernes anterior, cuando el procedimiento le da 24 horas de vida. Lo cuentas tal cual.

Calidad abre una investigación que incluye los tres lotes envasados entre el lunes y el jueves, refuerza la desinfección de la boca y la limpieza con el esporicida del programa y repite el muestreo. No limpiaste el punto por tu cuenta antes del nuevo muestreo: lo hizo limpieza según el plan de calidad, y quedó registrado.
`,
  batchRecord: `
- **Antes de exponer producto**: sala liberada y limpia, con la referencia de su registro de limpieza y desinfección; presión diferencial, temperatura y humedad en rango, con hora, indicador y firma.
- **Entrada de materiales**: qué entró, por qué esclusa, cómo se limpió o desinfectó su exterior y a qué hora.
- **Apertura de equipos y envases**: hora de apertura y de cierre de la boca del secadero, de cada bidón o de cada bolsa; incidencias, como una intervención manual con útil, con su descripción.
- **Desinfección de la sala**: desinfectante usado, lote, dilución, fecha y hora de preparación y caducidad, superficies tratadas, quién lo hizo y quién lo comprobó.
- **Monitorización ambiental**: si la toma el operador, punto, tipo de muestra (placa de contacto, de sedimentación, aire o contador), hora de inicio y fin de exposición y firma. El resultado llega días después y lo registra calidad.
- **Alarmas e incidencias**: hora, valor, producto expuesto, a quién se avisó y número de la desviación, si se abre.
`,
  terms: [
    { es: "Partícula en suspensión", en: "Airborne particle", def: "Trocito de sólido o gota tan pequeño que flota en el aire; en sala limpia se cuentan las de 0,5 µm o más y las de 5 µm o más." },
    { es: "Partículas totales", en: "Total particles", def: "Todas las partículas del aire, vivas o no; se cuentan con un contador de partículas." },
    { es: "Partículas viables", en: "Viable particles", def: "Partículas que llevan microorganismos capaces de crecer; se cuentan en UFC tras incubar." },
    { es: "En reposo", en: "At rest", def: "Sala instalada, con el aire acondicionado en marcha y los equipos parados, sin personas." },
    { es: "En operación", en: "In operation", def: "Sala con los equipos funcionando y el número máximo de personas previsto trabajando." },
    { es: "Clasificación de sala", en: "Cleanroom classification", def: "Medida de partículas totales para comprobar que una sala alcanza su grado; forma parte de la cualificación." },
    { es: "Cualificación de sala", en: "Cleanroom qualification", def: "Conjunto de pruebas que demuestra que la sala sirve para su uso: filtros, caudales, presiones, microorganismos, recuperación y más." },
    { es: "Monitorización ambiental", en: "Environmental monitoring", def: "Vigilancia rutinaria de partículas, microorganismos y condiciones de la sala durante el trabajo." },
    { es: "Nivel de alerta", en: "Alert level", def: "Valor que avisa de una desviación temprana; obliga a mirar y hacer seguimiento." },
    { es: "Límite de acción", en: "Action limit", def: "Valor que, si se supera, obliga a investigar y a tomar acciones correctivas." },
    { es: "Huella de guante", en: "Glove print", def: "Muestra microbiológica de los cinco dedos de cada mano apoyados sobre una placa de cultivo." },
    { es: "Contaminación cruzada", en: "Cross-contamination", def: "Presencia en un producto de restos de otro producto distinto." },
    { es: "Esporicida", en: "Sporicidal agent", def: "Producto que destruye esporas de bacterias y hongos con la concentración y el tiempo de contacto adecuados." },
    { es: "Zona controlada no clasificada", en: "Controlled not classified (CNC) area", def: "Zona con algunas condiciones controladas, como la temperatura, pero sin clasificación de sala limpia." },
  ],
  quiz: [
    {
      kind: "number",
      q: "El límite de un grado A para partículas de 0,5 µm o más es de 3520 por m³. Si un pie cúbico son 0,028317 m³, ¿cuántas partículas por pie cúbico son?",
      answer: 99.7,
      tolerance: 0.01,
      unit: "partículas/ft³",
      explain: "3520 × 0,028317 = 99,7 partículas por pie cúbico, casi 100: de ahí el nombre antiguo de «clase 100».",
    },
    {
      kind: "number",
      q: "Un contador marca 20000 partículas de 0,5 µm o más por pie cúbico. Sabiendo que un metro cúbico son 35,31467 pies cúbicos, ¿cuántas son por metro cúbico?",
      answer: 706293,
      tolerance: 0.01,
      unit: "partículas/m³",
      explain: "20000 × 35,31467 = 706293 por m³: más que el límite de un grado C en reposo (352000) y menos que el de un grado C en operación (3520000).",
    },
    {
      kind: "number",
      q: "En el grado B, el límite de partículas de 0,5 µm es de 3520 por m³ en reposo y de 352000 por m³ en operación. ¿Cuántas veces mayor es el límite en operación?",
      answer: 100,
      tolerance: 0.01,
      unit: "veces",
      explain: "352000 / 3520 = 100. Con personas y máquinas trabajando se admiten cien veces más partículas.",
    },
    {
      kind: "number",
      q: "Un contador aspira 28 litros de aire en un minuto en una zona cuyo límite es de 3520 partículas por m³ (1 m³ son 1000 litros). Si la zona está justo en el límite, ¿cuántas partículas contará en ese minuto?",
      answer: 98.56,
      tolerance: 0.01,
      unit: "partículas",
      explain: "3520 × 28 / 1000 = 98,56 partículas en los 28 litros.",
    },
    {
      kind: "number",
      q: "En una sala grado C en operación el límite de partículas de 0,5 µm es de 3520000 por m³. El contador da 2100000 por m³. ¿Qué porcentaje del límite es, redondeado a una cifra decimal?",
      answer: 59.7,
      tolerance: 0.01,
      unit: "%",
      explain: "2100000 / 3520000 × 100 = 59,7 % del límite: cumple para ese tamaño, aunque hay que mirar también el de 5 µm.",
    },
    {
      kind: "choice",
      q: "Para clasificar una sala en reposo, ¿en qué estado debe estar según el anexo 1?",
      options: [
        "Con todo el personal trabajando y los equipos funcionando a plena carga",
        "Con el aire acondicionado parado y las puertas abiertas para ventilar",
        "Con el aire en marcha y los equipos instalados pero parados, sin personas",
        "Con una sola persona dentro, quieta junto al contador de partículas",
      ],
      answer: 2,
      explain: "El apartado 4.29 define el estado en reposo así: instalación completa y aire acondicionado funcionando, equipos instalados pero sin operar y sin personas en la sala.",
    },
    {
      kind: "choice",
      q: "Tu planta fabrica un API no estéril. Un compañero dice que la sala de envasado tiene que ser de grado A porque lo dice ICH Q7. ¿Qué le respondes?",
      options: [
        "ICH Q7 no usa grados: pide controlar el aire según la etapa, sobre todo donde el API queda expuesto",
        "Tiene razón: ICH Q7 exige grado A en el envasado de cualquier principio activo",
        "ICH Q7 exige grado D en toda la planta, también en la síntesis con equipos cerrados",
        "ICH Q7 no dice nada de salas, ventilación ni zonas para las etapas finales",
      ],
      answer: 0,
      explain: "Los grados son del anexo 1, para productos estériles. ICH Q7 (4.21) pide ventilación y filtración según la etapa y atención especial donde el API está expuesto; la clasificación concreta la decide la empresa.",
    },
    {
      kind: "choice",
      q: "Llega el resultado de una placa de contacto de la boca del secadero, por encima del límite de acción. Te piden que no toques nada hasta el nuevo muestreo. ¿Por qué?",
      options: [
        "Porque el desinfectante podría dañar la placa de cultivo del laboratorio",
        "Porque limpiar el punto antes de muestrear de nuevo falsearía el resultado",
        "Porque la boca del secadero no se limpia nunca entre un lote y otro",
        "Porque un resultado fuera de límite se anula solo si se espera una semana",
      ],
      answer: 1,
      explain: "La nueva muestra debe reflejar el estado real. Por la misma razón, la guía de la FDA de 2004 considera inapropiado desinfectar los guantes justo antes de tomar su muestra.",
    },
    {
      kind: "choice",
      q: "El programa de desinfección de tu sala alterna un desinfectante habitual con un esporicida cada cierto tiempo. ¿Cuál es la razón principal?",
      options: [
        "Que el esporicida es más barato y así se ahorra en productos de limpieza",
        "Que alternar productos evita tener que limpiar antes de desinfectar",
        "Que así se puede dejar de vigilar la sala con placas de cultivo",
        "Que muchos desinfectantes no matan esporas y hace falta un agente que sí",
      ],
      answer: 3,
      explain: "El anexo 1 (4.33) pide más de un tipo de desinfectante y un esporicida periódico. La FDA da un ejemplo: el alcohol isopropílico al 70 % no es eficaz contra esporas de Bacillus.",
    },
    {
      kind: "choice",
      q: "Tienes que meter en la sala de acabado un bidón vacío que viene del almacén. ¿Qué es lo correcto?",
      options: [
        "Entrarlo por la esclusa de personas, que está más cerca de la mesa",
        "Abrir las dos puertas de la esclusa a la vez para pasarlo más rápido",
        "Pasarlo por la esclusa de materiales y limpiar su exterior según el SOP",
        "Entrarlo tal cual y limpiarlo dentro de la sala cuando haya un hueco",
      ],
      answer: 2,
      explain: "El paso de materiales es una de las mayores fuentes de contaminación (anexo 1, 4.10). Va por su esclusa, se limpia o desinfecta según el riesgo y las puertas no se abren a la vez.",
    },
  ],
};
