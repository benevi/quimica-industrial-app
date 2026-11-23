import type { Lesson } from "./types";

export const oosAFondo: Lesson = {
  slug: "oos-a-fondo",
  level: 10,
  order: 6,
  title: "Resultados fuera de especificación (OOS) a fondo",
  titleEn: "Out-of-specification results in depth",
  minutes: 38,
  summary:
    "Qué es un resultado fuera de especificación, uno fuera de tendencia y uno atípico; cómo se investiga según la guía de la FDA de 2022 (fase de laboratorio y fase completa con producción); por qué no se repite el análisis hasta que cumpla; cuándo vale un promedio y cuándo engaña; cómo se vigila una tendencia con un gráfico de control; qué te preguntarán como operador y qué se decide con el lote.",
  body: `
En «Resultados OOS y OOT: cómo se investigan» viste la idea general. Aquí lees de cerca las guías, con cuentas resueltas, y ves dónde entras tú.

Piensa en un termómetro que marca 39 °C. Antes de tratar la fiebre se comprueba el termómetro. Si está bien, el problema está en el paciente. Una investigación de un resultado fuera de especificación sigue ese orden: primero la medida (el laboratorio) y después el proceso (la planta).

### Tres palabras que no son lo mismo
La **especificación** (*specification*) es la lista de ensayos con sus criterios de aceptación («Especificaciones y métodos analíticos»).

| Término | Qué es | Ejemplo (valores de ejemplo) |
|---|---|---|
| **Fuera de especificación** (*out of specification*, OOS) | Resultado que no cumple el criterio de aceptación | Riqueza 97,6 % con especificación 98,0–102,0 % |
| **Fuera de tendencia** (*out of trend*, OOT) | Cumple la especificación pero se sale de lo que se esperaba por la serie de resultados anteriores | Una impureza que en los últimos lotes salía entre 0,04 y 0,06 % hoy sale 0,11 %, con límite 0,15 % |
| **Resultado atípico** (*outlier*) | Valor muy distinto de los demás de una misma serie | Réplicas de 99,6; 99,8; 99,7 y 101,9 %: el último se aleja del resto |

Las definiciones vienen de guías que puedes leer gratis:

- La guía de la FDA (la agencia del medicamento de Estados Unidos) llama OOS a todo resultado fuera de las especificaciones del registro, la farmacopea o el fabricante, también en ensayos de laboratorio en proceso. Deja fuera los controles que solo sirven para ajustar el equipo en tiempo real. ICH Q7 dice algo parecido en su apartado 8.36: normalmente no hace falta investigar como OOS un control hecho para vigilar o ajustar el proceso.
- La guía de la OMS para laboratorios de control (serie de informes técnicos 1052, de 2024, anexo 4) separa el **OOS sospechoso** (el primer resultado, todavía sin investigar) del **OOS confirmado** (el que ya se ha investigado a fondo y sigue fuera). Y define el OOT como un resultado de una serie que cumple los criterios de aceptación pero cae fuera del intervalo esperado o de los criterios de control estadístico del proceso.
- Para la FDA, un *outlier* puede venir de un fallo al aplicar el método **o de la variabilidad real de la muestra**. Nunca se supone que la culpa es del ensayo.

Un OOT no incumple, pero avisa de que algo ha cambiado; la FDA dice que buena parte de su guía sirve para ellos.

### Qué piden las normas
| Qué | Dónde |
|---|---|
| Todo OOS se investiga y se documenta según un procedimiento: análisis de los datos, valorar si hay un problema importante, repartir las acciones correctoras y concluir. Repetir el ensayo o tomar otra muestra, solo según un procedimiento escrito | ICH Q7, 11.15 |
| Se guardan registros completos de las investigaciones OOS | ICH Q7, 6.61 |
| Los informes de desviación, investigación y OOS se revisan con la hoja del lote antes de liberarlo | ICH Q7, 6.72 |
| Un lote fuera de especificación no se mezcla con otros para que el conjunto cumpla | ICH Q7, 8.41 |
| La revisión anual de calidad del producto repasa los lotes que no cumplieron la especificación y si las acciones correctoras fueron adecuadas | ICH Q7, 2.50 |
| El laboratorio tiene un procedimiento para investigar resultados OOS y OOT; ciertos datos se registran de forma que permitan ver tendencias | EudraLex vol. 4, parte I, capítulo 6, 6.7 (iv) y 6.9 |
| Los OOS y las tendencias atípicas importantes del programa de estabilidad se investigan; si afectan a lotes ya en el mercado, se comunican a las autoridades | EudraLex, capítulo 6, 6.35 |

Ojo con el alcance. ICH Q7 es la guía de GMP para principios activos; el capítulo 6 de EudraLex es para medicamentos, aunque sus ideas sobre OOS y tendencias son las mismas. La guía de la FDA (*Investigating Out-of-Specification (OOS) Test Results for Pharmaceutical Production*, revisión 1, mayo de 2022) es una recomendación, no una ley, y dice que se aplica también a los principios activos.

### Fase I: la investigación en el laboratorio
La FDA pide una investigación completa, a tiempo, imparcial, documentada y científica, que diga si el fallo está en **la medida** o en **la fabricación**.

**Lo que hace el analista**

- Usa solo instrumentos calibrados y no usa un sistema que no pasa la idoneidad («HPLC a fondo»).
- Compara sus datos con la especificación **antes de tirar** nada. Si el resultado es inesperado y sin explicación evidente, **guarda las preparaciones** (si son estables) y **avisa al supervisor**.
- Si el error es evidente (se derramó la disolución, no se pasó toda la muestra), lo anota en el momento. Y no termina un análisis que sabe que no valdrá «a ver qué sale».

**Lo que hace el supervisor**, sin ideas preconcebidas sobre la causa, según la guía:

1. Repasa el método con el analista y confirma que lo conoce y lo aplicó bien.
2. Examina los datos brutos (cromatogramas, espectros) en busca de algo raro.
3. Comprueba que los cálculos son correctos y que nadie ha cambiado sin autorización las fórmulas automáticas.
4. Confirma que los instrumentos funcionaban.
5. Comprueba que patrones, disolventes y reactivos eran los correctos y cumplían.
6. Mira si el método se comportó como en su validación y en su historial.
7. Documenta todo y lo conserva.

Las hipótesis se prueban con las preparaciones guardadas: si se sospecha un fallo pasajero del equipo, se vuelve a inyectar la misma disolución.

La regla de cierre: con **prueba clara** de error de laboratorio, el resultado se invalida; si no está claro, se pasa a la fase II. Un OOS no se atribuye a un error analítico sin demostrar la causa. Y los errores de laboratorio deberían ser raros: si se repiten, apuntan a formación, mantenimiento o calibración.

### Fase II: la investigación completa, con producción
Si el laboratorio no encuentra error y el resultado parece correcto, empieza la investigación a escala completa, con un procedimiento definido de antemano. La dirige la **unidad de calidad** (QA) e incluye a todos los departamentos que puedan estar implicados: fabricación, desarrollo del proceso, mantenimiento e ingeniería. La guía pide darle **la máxima prioridad**.

Se revisan **por completo los registros de fabricación** y el muestreo. El informe escrito recoge:

1. El motivo de la investigación.
2. Qué partes del proceso pudieron causar el problema.
3. El resultado de la revisión de documentos, con la causa real o probable.
4. Si el problema ya había pasado antes.
5. Las acciones correctoras tomadas.

Aunque el lote se rechace, la investigación sigue: hay que saber si afecta a **otros lotes o productos**. Y un OOS puede revelar un defecto de diseño del proceso, como una etapa con mucha variación o una materia prima mal controlada; entonces hay que rediseñar.

### Qué te preguntará el investigador
Aquí entras tú. Lo que sigue es buena práctica, no texto de la guía. Te pueden preguntar:

- **La muestra**: de qué punto la tomaste, a qué hora, con qué recipiente, si el equipo estaba en marcha o parado, si la etiqueta era la correcta («Muestreo en planta a fondo»).
- **El proceso**: horas de cada carga y adición, temperaturas, presiones, tiempos de agitación, alarmas que saltaron y qué se hizo.
- **Lo que no está en ningún campo y lo que cambió**: un ruido raro, un filtro que tardó más, una pieza nueva, otro lote de materia prima.

El investigador compara tu lote con los anteriores. Si la hoja dice «adición: 13:05 a 13:37», puede ver que este lote fue más rápido. Si dice solo «hecho», no ve nada. Por eso una hoja completa, con valores reales y horas, es la mejor herramienta de una investigación («La hoja de producción a fondo»). Y en la entrevista, hechos: separa lo que viste de lo que supones («Desviaciones y CAPA a fondo»).

### Repetir el ensayo o tomar otra muestra
Son dos cosas distintas y la guía las separa:

| | Repetición del ensayo (*retest*) | Nuevo muestreo (*resample*) |
|---|---|---|
| Qué se analiza | Otra porción de **la misma muestra original**, del mismo material homogéneo | Unidades adicionales recogidas en el muestreo original, o **una muestra nueva** del lote |
| Cuándo tiene sentido | Para investigar un fallo del instrumento o un posible error al manejar la muestra, como una dilución mal hecha | Cuando la investigación concluye que la muestra original estaba mal preparada y no representaba al lote |
| Quién | A menudo otro analista, al menos igual de experimentado que el primero | Según el procedimiento de muestreo; con los mismos métodos validados |

Una pista de muestra mal preparada: porciones de la misma muestra con resultados muy distintos, sin error en el análisis. Si el método de muestreo era malo de por sí, se desarrolla uno nuevo aprobado por QA. Y la muestra original debe ser lo bastante grande para permitir más ensayos.

Para ti: **nunca tomas otra muestra porque la primera «no ha gustado»**. Un nuevo muestreo lo autoriza QA y se anota en la hoja con su referencia.

### Por qué no se analiza «hasta que cumpla»
La FDA cuenta que en sus inspecciones ha visto empresas que repiten el análisis hasta obtener un resultado que cumple y luego descartan el OOS sin justificación. Lo llama **analizar hasta que cumpla** (*testing into compliance*) y dice que es acientífico e inaceptable.

Es como lanzar una moneda hasta que salga cara y decir que la moneda «es de cara». Las reglas de la guía:

- El **número máximo** de repeticiones se fija **de antemano** en un procedimiento escrito, según la variabilidad del método.
- Ese número **no se cambia** según los resultados que vayan saliendo.
- El procedimiento marca un punto en el que se acaba de analizar y se evalúa el lote. Si entonces los resultados no son satisfactorios, el lote es sospechoso: se rechaza o se retiene hasta seguir investigando.
- Si hubo un **error de laboratorio claro**, el resultado nuevo sustituye al original, pero **los datos originales se guardan** con la explicación, fecha y firmas.
- Si **no se encontró error**, no hay base científica para invalidar el OOS. Se informan **todos** los resultados, los que cumplen y los que no, y todos cuentan para decidir sobre el lote.

### Los promedios: cuándo valen y cuándo engañan
Un promedio (*average*) puede ser correcto si **forma parte del método**. La guía pone ejemplos: en la rotación óptica se promedian varias lecturas, y en una valoración por HPLC se promedian dos o tres inyecciones de la misma preparación. Eso cuenta como **un ensayo y un resultado**, el **resultado notificable** (*reportable result*). El método aprobado dice cuántas réplicas y cuánto pueden diferir entre sí; si difieren más, no se usan.

Lo que no vale es **promediar el resultado OOS original con las repeticiones** hechas durante la investigación: esconde la variación, y engaña sobre todo cuando unos resultados están fuera y otros dentro.

**Cuenta resuelta** (valores de ejemplo). Especificación de riqueza: 98,0–102,0 %. El primer resultado da 97,6 % y la repetición da 98,8 %.

> promedio = (97,6 + 98,8) / 2 = 196,4 / 2 = 98,2 %

El 98,2 % cumple, pero **no se puede informar así**: uno de los dos resultados está fuera, y el promedio lo tapa. Se evalúan los dos por separado.

Hay un caso aún más claro. Si el propio método pide varias preparaciones para dar un resultado y unas salen fuera y otras dentro, todas dentro de la variabilidad conocida del método, la FDA dice que las que cumplen no son más fiables: el promedio se trata como OOS aunque cumpla. No pasa con las inyecciones repetidas de un mismo vial que cumplen el criterio de variabilidad: una sola no hace OOS el resultado.

Los dos ejemplos de la guía, con especificación 90–110 %:

| Resultados | Promedio | Qué dice |
|---|---|---|
| 89, 90 y 91 % | 90 % | Las repeticiones tienden a **confirmar** el OOS |
| 80, 85 y 105 % | 90 % | No lo confirman: hay **mucha variación** y el dato no es fiable |

El mismo promedio cuenta dos historias: se miran los resultados individuales.

En los ensayos que miden **cómo de homogéneo** es un producto (uniformidad de una mezcla o de contenido), el promedio no vale: esconde justo lo que se quiere ver.

### Resultados atípicos y pruebas estadísticas
Hay pruebas estadísticas que señalan valores extremos (*outlier tests*). La guía de la FDA pone límites:

- Se decide **de antemano** si se usan, cuál y con cuántos datos como mínimo, y se escribe en el procedimiento.
- En ensayos químicos validados con poca variación y muestra homogénea, la prueba **no sirve para invalidar** un resultado: no dice la causa. Solo informa de cuánto se aleja el dato de la media.
- En ensayos que miden la variabilidad del producto, como la uniformidad de contenido o la disolución, no se aplica: el valor «raro» puede ser real y decir que el producto no es uniforme.

### Cómo termina: confirmado, invalidado o no concluyente
Decide QA. Un primer OOS no significa que el lote falle, sino que hay que investigar.

| Conclusión | Qué pasa con el lote |
|---|---|
| **Invalidado**: se observó y documentó un hecho que causó el resultado | El resultado no se usa para juzgar el lote |
| **Confirmado**: la causa afecta a la calidad del lote | El lote no cumple y se rechaza; la investigación pasa a ser de **fallo del lote** y se extiende a otros lotes o productos relacionados |
| **No concluyente**: ni se encuentra causa ni se confirma | El OOS se tiene en cuenta por completo al decidir |

En el caso no concluyente QA podría llegar a liberar, solo tras una investigación completa que demuestre que el OOS no refleja la calidad del lote. La guía pone un ejemplo: especificación 90,0–110,0 %, primer resultado 89,5 %, siete repeticiones entre 98,8 y 99,1 %, sin error de laboratorio, sin nada raro en fabricación, con un proceso robusto y otros ensayos coherentes. Y añade: QA debe pecar **siempre de prudente**.

La guía avisa también de que un resultado bajo **dentro** de especificación debe preocupar: puede caer por debajo del límite antes de la caducidad.

Rechazado el lote, se puede analizar sin límite para encontrar la causa: ya no se busca que cumpla.

### Tendencias y gráficos de control
Un OOS se ve solo. Un OOT hay que buscarlo. EudraLex pide registrar resultados, rendimientos y controles ambientales de forma que se puedan ver tendencias, e investigar los datos fuera de tendencia (6.9). También pide vigilar la tendencia de los parámetros críticos (6.16).

La herramienta clásica es el **gráfico de control** (*control chart*). ICH Q9(R1) lo cita en su anexo de herramientas estadísticas, entre ellos el gráfico de Shewhart. Se dibuja cada resultado por lote, una línea en la media y dos **límites de control** (*control limits*). Lo habitual es ponerlos a tres desviaciones estándar de la media; los criterios exactos de tu planta están en su procedimiento.

La **desviación estándar** (*standard deviation*) mide cuánto se separan los datos de su media.

**Cuenta resuelta** (valores de ejemplo). Riqueza de los diez últimos lotes, en %: 99,4; 99,8; 99,6; 100,0; 99,5; 99,7; 99,9; 99,6; 99,8; 99,7.

1. Media: la suma es 997,0; entre 10 da **99,70 %**.
2. Diferencia de cada dato con la media, al cuadrado: 0,09; 0,01; 0,01; 0,09; 0,04; 0; 0,04; 0,01; 0,01; 0. La suma es 0,30.
3. Se divide entre el número de datos menos uno (9): 0,30 / 9 = 0,0333.
4. Raíz cuadrada: desviación estándar ≈ **0,18 %**.
5. Límite inferior: 99,70 − 3 × 0,18 = **99,16 %**. Límite superior: 99,70 + 3 × 0,18 = **100,24 %**.

El lote siguiente da 98,9 %. Cumple la especificación (98,0–102,0 %), pero está por debajo de 99,16 %: es un **OOT**. Se investiga antes de que el siguiente sea un OOS.

### Resultados de estabilidad
En los estudios de estabilidad (lo viste en «Estudios de estabilidad») se analiza el mismo lote durante años, y el producto puede estar ya en uso. EudraLex (capítulo 6, 6.35) pide investigar los OOS y las tendencias atípicas importantes. Si se confirma un OOS o una tendencia negativa importante en lotes ya liberados al mercado, se comunica a las autoridades competentes y se valora el impacto en esos lotes según el capítulo 8 (reclamaciones y retiradas). ICH Q7 (11.50) pide para los principios activos un programa continuo de estabilidad cuyos resultados confirmen las condiciones de almacenamiento y la fecha de re-análisis.

### Causa raíz, CAPA y decisión sobre el lote
Un OOS confirmado se trata con las herramientas de una desviación: causa raíz (5 porqués, Ishikawa), corrección, acción correctiva y preventiva, y verificación de eficacia. Están en «Desviaciones y CAPA a fondo».

Mientras, el lote espera en **cuarentena** hasta que QA revise el informe OOS con la hoja (ICH Q7, 6.72). Las salidas posibles:

- **Rechazar** el lote.
- **Reprocesar**, repitiendo un paso que ya forma parte del proceso, como una recristalización (ICH Q7, 14.20), y volver a analizar.
- **Retrabajar** con un paso distinto, solo tras investigar por qué no cumple y demostrar que el producto queda equivalente (14.30 y 14.31).
- **Nunca** mezclarlo con lotes buenos para que el conjunto cumpla (8.41).

Ninguna de estas decisiones es tuya («Desviaciones e investigaciones»); lo tuyo es que la hoja cuente la verdad del lote.

### En planta manda el procedimiento
El número de repeticiones, quién hace cada fase, los plazos, las reglas de los gráficos de control y cómo se anota un nuevo muestreo los fija el procedimiento vigente (SOP) de tu empresa. En planta manda siempre ese procedimiento.
`,
  plant: `
Lote 0512 de FX-101, un producto ficticio. La especificación pide la impureza B en 0,15 % como máximo, y el laboratorio da 0,19 %.

La analista guarda las disoluciones y avisa a su supervisor. Repasan cálculos, patrones, idoneidad del sistema y cromatogramas; reinyectan la misma disolución y sale igual. No hay error de laboratorio: el OOS pasa a fase II y el lote sigue en cuarentena.

Andrés, de QA, reúne a Producción, Mantenimiento y Desarrollo, y lee la hoja de producción del reactor R-101. Victor había anotado la adición del reactivo de 13:05 a 13:37, dentro del intervalo de la hoja (30 a 90 minutos). En los diez lotes anteriores la adición había durado entre 55 y 65 minutos. Victor, en la entrevista, recuerda que la bomba dosificadora P-104 era nueva y que la pantalla mostraba más caudal que la anterior. En este proceso ficticio, la impureza B se forma más cuanto más deprisa entra el reactivo.

Mantenimiento confirma que la P-104 se cambió el mes anterior y que nadie revisó el caudal en la hoja. La investigación se extiende a los dos lotes fabricados desde el cambio: uno dio 0,12 %, dentro pero fuera de tendencia.

QA decide reprocesar el lote 0512 con la recristalización que ya forma parte del proceso, y volver a analizarlo. La hoja pasa a pedir un caudal y una duración de adición más estrechos, con la lectura del caudalímetro anotada. Se revisan las hojas de los demás equipos con bomba nueva. Sin las horas que Victor escribió, nadie habría visto que esa adición fue la más rápida de todas.
`,
  batchRecord: `
En la **hoja de producción** (*batch record*):

- Los datos que usará una investigación: horas reales de inicio y fin de cada carga y adición, temperaturas y presiones, alarmas y lo que se hizo, cambios de turno.
- En cada toma de muestra: punto de muestreo, hora, recipiente, identificación de la muestra, estado del equipo y tu firma.
- Si QA autoriza un **nuevo muestreo**: la referencia de la investigación OOS, quién lo autorizó, hora, punto y cantidad, igual que una muestra normal.
- El estado del lote: en **cuarentena** hasta que QA cierre la investigación y lo libere o lo rechace.
- Si se reprocesa: el paso repetido, con su referencia a la decisión de QA.

Lo que nunca verás ni harás: corregir un dato para que «cuadre» con el análisis, tomar una muestra extra por tu cuenta o anotar de memoria algo que no apuntaste en su momento.

Al revisar el lote, QA junta la hoja con el informe OOS, como pide ICH Q7 (6.72), antes de decidir.
`,
  terms: [
    { es: "Resultado fuera de especificación", en: "Out-of-specification (OOS) result", def: "Resultado que no cumple el criterio de aceptación de la especificación. Se investiga y se documenta según un procedimiento (ICH Q7, 11.15)." },
    { es: "OOS sospechoso", en: "Suspected OOS result", def: "El primer resultado fuera de especificación, todavía sin investigar (OMS, TRS 1052, anexo 4)." },
    { es: "OOS confirmado", en: "Confirmed OOS result", def: "Resultado que, tras una investigación completa, sigue fuera de especificación." },
    { es: "Resultado fuera de tendencia", en: "Out-of-trend (OOT) result", def: "Resultado que cumple la especificación pero cae fuera de lo esperado según la serie anterior o los criterios de control estadístico." },
    { es: "Resultado atípico", en: "Outlier", def: "Valor muy distinto de los demás de una serie. Puede ser un error o la variabilidad real de la muestra." },
    { es: "Fase I", en: "Phase I: laboratory investigation", def: "Revisión que hacen el analista y su supervisor para ver si hubo un error en el laboratorio." },
    { es: "Fase II", en: "Phase II: full-scale OOS investigation", def: "Investigación que dirige QA, con producción y otros departamentos, cuando no se encuentra error de laboratorio." },
    { es: "Repetición del ensayo", en: "Retest", def: "Análisis de otra porción de la misma muestra original y homogénea." },
    { es: "Nuevo muestreo", en: "Resampling", def: "Análisis de unidades adicionales del muestreo original o de una muestra nueva del lote, según un procedimiento." },
    { es: "Analizar hasta que cumpla", en: "Testing into compliance", def: "Repetir ensayos hasta obtener uno que cumple y descartar el OOS sin justificación. La FDA lo considera inaceptable." },
    { es: "Resultado notificable", en: "Reportable result", def: "Resultado final de una ejecución completa del método, tal como lo define el método aprobado." },
    { es: "Gráfico de control", en: "Control chart", def: "Gráfico de los resultados lote a lote con su media y unos límites de control, para ver tendencias." },
    { es: "Investigación no concluyente", en: "Inconclusive investigation", def: "La que ni encuentra la causa del OOS ni lo confirma. El OOS cuenta por completo al decidir sobre el lote." },
  ],
  quiz: [
    {
      kind: "choice",
      q: "La especificación de una impureza es 0,15 % como máximo. En los últimos lotes salió entre 0,04 y 0,06 %, y hoy sale 0,11 %. ¿Qué es?",
      options: [
        "Un OOS, porque ha subido mucho",
        "Un resultado normal, porque cumple",
        "Un OOT: cumple, pero rompe la tendencia",
        "Un error de laboratorio seguro",
      ],
      answer: 2,
      explain: "Está por debajo del límite, así que no es OOS, pero se sale de lo esperado por la serie anterior: es un resultado fuera de tendencia y se evalúa.",
    },
    {
      kind: "number",
      q: "Especificación de riqueza: 98,0–102,0 %. El primer resultado da 97,6 % y la repetición 98,8 %. ¿Cuánto vale el promedio de los dos, en %?",
      answer: 98.2,
      tolerance: 0.002,
      unit: "%",
      explain: "(97,6 + 98,8) / 2 = 98,2 %. Cumple, pero no se puede informar así: uno de los dos está fuera y la FDA dice que promediar el OOS con las repeticiones esconde la variación.",
    },
    {
      kind: "choice",
      q: "Una analista obtiene un resultado inesperado y no ve ninguna explicación. ¿Qué debe hacer primero, según la guía de la FDA?",
      options: [
        "Guardar las disoluciones, si son estables, y avisar al supervisor",
        "Tirar las disoluciones y empezar el análisis desde cero",
        "Repetir el análisis tres veces y quedarse con la media",
        "Pedir al operador de planta una muestra nueva del lote",
      ],
      answer: 0,
      explain: "La guía pide conservar las preparaciones para poner a prueba las hipótesis de error y avisar al supervisor, que empieza la evaluación de inmediato.",
    },
    {
      kind: "choice",
      q: "¿Qué es una repetición del ensayo (retest) según la guía de la FDA?",
      options: [
        "Analizar una muestra nueva tomada otra vez del secadero",
        "Repetir la fabricación del lote con el mismo procedimiento",
        "Volver a calcular el resultado con otra fórmula distinta",
        "Analizar otra porción de la misma muestra original homogénea",
      ],
      answer: 3,
      explain: "El retest usa el mismo material homogéneo que dio el OOS. Tomar una muestra nueva del lote es un nuevo muestreo (resample), y solo se hace según un procedimiento.",
    },
    {
      kind: "choice",
      q: "Un laboratorio repite un análisis cinco veces hasta que uno cumple y descarta los otros cuatro sin encontrar error. ¿Qué es?",
      options: [
        "Una práctica correcta si el último resultado cumple",
        "Analizar hasta que cumpla, inaceptable según la FDA",
        "Una prueba estadística de resultados atípicos",
        "Un nuevo muestreo autorizado por la unidad de calidad",
      ],
      answer: 1,
      explain: "La FDA lo llama «testing into compliance»: el número de repeticiones se fija de antemano y, si no hay error demostrado, todos los resultados se informan y cuentan.",
    },
    {
      kind: "number",
      q: "La riqueza de los últimos lotes tiene una media de 99,5 % y una desviación estándar de 0,2 %. Con límites a tres desviaciones estándar, ¿cuánto vale el límite de control inferior, en %?",
      answer: 98.9,
      tolerance: 0.002,
      unit: "%",
      explain: "99,5 − 3 × 0,2 = 99,5 − 0,6 = 98,9 %. Un lote por debajo de ese valor sería fuera de tendencia aunque cumpliera la especificación.",
    },
    {
      kind: "choice",
      q: "Especificación 90–110 %. Resultados: 80, 85 y 105 %, con promedio 90 %. ¿Qué dice la guía de la FDA de este caso?",
      options: [
        "Que el lote cumple porque el promedio está dentro",
        "Que confirma el OOS porque todos están por debajo",
        "Que hay mucha variación y el dato no es fiable",
        "Que basta con descartar el 80 % por ser atípico",
      ],
      answer: 2,
      explain: "Con el mismo promedio, 89, 90 y 91 % tienden a confirmar el OOS, mientras que 80, 85 y 105 % muestran mucha variación. Se juzga con los resultados individuales, no con el promedio.",
    },
    {
      kind: "choice",
      q: "En la investigación de un OOS te preguntan a qué hora terminó la adición del reactivo. En la hoja anotaste «13:37». ¿Por qué importa ese dato?",
      options: [
        "Permite comparar este lote con los anteriores y ver qué cambió",
        "Solo sirve para calcular las horas extra del turno de tarde",
        "No importa: la investigación OOS es solo del laboratorio",
        "Sirve para decidir qué analista repite el análisis",
      ],
      answer: 0,
      explain: "En la fase II se revisan por completo los registros de fabricación. Las horas y los valores reales permiten ver si el lote se fabricó distinto de los demás.",
    },
    {
      kind: "choice",
      q: "Según EudraLex (capítulo 6, 6.35), ¿qué se hace si en el programa de estabilidad se confirma un OOS en lotes ya en el mercado?",
      options: [
        "Se espera al siguiente punto de análisis por si mejora",
        "Se promedia con los resultados anteriores del lote",
        "Se anota en el informe anual y no se hace nada más",
        "Se comunica a las autoridades competentes y se valora el impacto",
      ],
      answer: 3,
      explain: "El apartado 6.35 pide investigar y comunicar a las autoridades todo OOS confirmado o tendencia negativa importante que afecte a lotes liberados, y valorar el impacto según el capítulo 8.",
    },
    {
      kind: "choice",
      q: "En una valoración química validada y muy precisa, una prueba estadística señala un resultado OOS como atípico. ¿Puede invalidarse por eso?",
      options: [
        "Sí, la prueba estadística demuestra que fue un error",
        "No: la prueba no dice la causa y solo sirve como información",
        "Sí, siempre que el promedio de los demás cumpla",
        "No, salvo que lo pida el jefe de producción",
      ],
      answer: 1,
      explain: "La guía de la FDA dice que en ensayos químicos validados con poca variación la prueba de atípicos no identifica la causa y no debe usarse para invalidar el resultado.",
    },
  ],
};
