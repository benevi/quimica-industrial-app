import type { Lesson } from "./types";

export const validacionAFondo: Lesson = {
  slug: "validacion-de-metodos-a-fondo",
  level: 10,
  order: 4,
  title: "Validación de métodos analíticos a fondo",
  titleEn: "Analytical method validation in depth",
  minutes: 38,
  summary:
    "Por qué un método de laboratorio tiene que demostrar que sirve antes de decidir sobre tu lote, qué pide de verdad ICH Q2(R2) y su tabla de ensayos, las cuentas resueltas de recuperación, RSD, recta de calibrado y límites de detección y cuantificación, el ciclo de vida de ICH Q14, la transferencia, la verificación de métodos de farmacopea y la revalidación cuando cambia algo en planta.",
  body: `
En «Validación de métodos analíticos (ICH Q2)» viste la lista de características. Aquí vas a leer la guía, hacer las cuentas con datos y entender por qué un cambio de disolvente en tu centrífuga afecta al laboratorio.

### Por qué hay que demostrar que un método sirve
Piensa en la báscula donde pesas una carga. Antes de fiarte de ella se ha comprobado con pesas conocidas, en todo el intervalo en que se usa. Si nadie lo ha hecho, el número que marca puede ser cualquiera.

Con un método de laboratorio pasa lo mismo, y hay más cosas que pueden fallar. El método es la receta completa del análisis: cómo se pesa, se disuelve y se diluye la muestra, qué equipo se usa y con qué fórmula sale el número. Una receta así puede confundir una impureza con tu producto, dar siempre de más o de menos, dar resultados que bailan con la misma muestra o no ver una impureza pequeña que sí está.

La **validación** (*validation*) lo descarta con datos y por escrito. Según ICH Q2(R2), su objetivo es demostrar que el método es **adecuado para su uso previsto** (*fit for the intended purpose*). La guía, adoptada el 1 de noviembre de 2023, se aplica a los métodos de liberación y de estabilidad y, según el riesgo, a otros métodos de la estrategia de control.

La analogía tiene un límite: el equipo se **cualifica** (lo viste en «Cualificación y validación a fondo», del nivel 16) y el método se **valida**. Se necesitan las dos cosas: ICH Q7 (apartado 12.82) pide considerar la cualificación del equipo de análisis antes de validar el método.

### Validación e idoneidad del sistema: no son lo mismo
En «Cromatografía a fondo» viste la **idoneidad del sistema** (*system suitability test*, SST), que ICH Q2(R2) considera parte del propio método. La validación se hace una vez, antes de usar el método en rutina, y demuestra que la receta sirve. La idoneidad se hace en cada serie y demuestra que hoy, en este equipo, la receta funciona como cuando se validó. En planta sería la diferencia entre validar el proceso y hacer las comprobaciones previas del reactor antes de cada lote.

### El protocolo antes, el informe después
ICH Q2(R2) pide que, antes del estudio, se escriba un **protocolo de validación** (*validation protocol*) con el uso previsto del método, las características que se van a validar y sus **criterios** de aceptación. Los resultados se resumen en un **informe de validación** (*validation report*). Primero se dice qué se considera bueno y después se mide. La guía no da números de aceptación: los fija cada protocolo. Los criterios de las cuentas son **valores de ejemplo**.

### Las características, una a una
**Especificidad o selectividad** (*specificity/selectivity*). Que otras sustancias (impurezas, productos de degradación, la matriz) no interfieran. Especificidad es el estado ideal, medir sin ninguna duda la sustancia buscada; selectividad es relativa. Se demuestra comprobando que no hay interferencia (por ejemplo, añadiendo impurezas y viendo que la riqueza no cambia) o comparando con un **método ortogonal** (*orthogonal procedure*), basado a ser posible en otro principio de medida. Si un solo método no basta, se combinan dos: la guía pone el ejemplo de una valoración para la riqueza completada con un ensayo de impurezas.

Un método que detecta los cambios durante el almacenamiento es **indicador de estabilidad** (*stability-indicating*); se demuestra con muestras sometidas a estrés, como viste en «Estudios de estabilidad».

**Intervalo** (*range*) **y respuesta** (*response*). Del resultado más bajo al más alto con respuesta, exactitud y precisión adecuadas. La guía distingue el **intervalo informable** (*reportable range*), en las unidades de la especificación, y el **intervalo de trabajo** (*working range*), lo que llega al equipo tras preparar la muestra. Ejemplos de la tabla 2 de la guía:

| Uso del método | Extremo bajo | Extremo alto |
|---|---|---|
| Riqueza de un producto | 80 % del contenido declarado o del límite inferior | 120 % del contenido declarado o del límite superior |
| Impurezas | Umbral de notificación | 120 % del criterio de aceptación |

La **respuesta** es la capacidad de dar una señal ligada a la concentración por una función conocida. Si esa función es una recta, se habla de **linealidad** (*linearity*). La guía recomienda al menos cinco concentraciones, una recta por **mínimos cuadrados** (*least squares*), y dar el gráfico, la pendiente, la ordenada en el origen, el coeficiente de correlación o de determinación y los **residuos** (*residuals*). También admite respuestas que no son rectas, con su propio modelo.

**Exactitud** (*accuracy*). Cercanía al valor verdadero o de referencia. Se demuestra con un material de referencia, con un **estudio de adición** (*spiking study*), añadiendo una cantidad conocida, o con un método ortogonal. La guía pone como ejemplo 3 concentraciones por 3 réplicas y pide la **recuperación media** con su **intervalo de confianza**.

**Precisión** (*precision*). Cuánto se parecen entre sí varias medidas de la misma muestra homogénea. Tiene tres niveles:

- **Repetibilidad** (*repeatability*): mismas condiciones, poco tiempo. La guía pide al menos 9 determinaciones por el intervalo (3 concentraciones por 3 réplicas) o al menos 6 al 100 % de la concentración de ensayo.
- **Precisión intermedia** (*intermediate precision*): dentro del mismo laboratorio, con otros días, condiciones ambientales, analistas o equipos.
- **Reproducibilidad** (*reproducibility*): entre laboratorios distintos, con un ensayo interlaboratorio. Normalmente no se pide para el registro; se considera para las farmacopeas o al analizar en varios centros.

Se dan la desviación estándar, la desviación estándar relativa y un intervalo de confianza. Piensa en una diana: dardos juntos pero lejos del centro es preciso e inexacto; repartidos alrededor del centro, exacto de media pero impreciso. Un método validado tiene que ser las dos cosas.

**Límite de detección** (*detection limit*, DL; en español LD) **y de cuantificación** (*quantitation limit*, QL; en español LC). El LD es la menor cantidad que se detecta, aunque no se pueda dar su valor exacto. El LC es la menor que se mide con precisión y exactitud adecuadas. Pueden estimarse a ojo, con la relación señal-ruido (vista en «Cromatografía a fondo») o con la desviación estándar de la respuesta y la pendiente, como en la cuenta 4. Para impurezas, el LC tiene que ser igual o menor que el **umbral de notificación** (*reporting threshold*).

**Robustez** (*robustness*). Cumplir lo esperado ante pequeñas variaciones deliberadas de los parámetros (por ejemplo, el caudal), incluida la estabilidad de las disoluciones. Según Q2(R2) y Q14 se estudia normalmente en el desarrollo, antes de validar.

### Qué ensayo necesita qué: la tabla de Q2(R2)
No todo método necesita todo. La tabla 1 de la guía lo resume («sí» es que normalmente se hace):

| Característica | Identificación | Impurezas: cuantitativo | Impurezas: ensayo límite | Riqueza o potencia |
|---|---|---|---|---|
| Especificidad | Sí | Sí | Sí | Sí |
| Respuesta (modelo de calibrado) | No | Sí | No | Sí |
| Límite inferior | No | LC (a veces también LD) | LD | No |
| Exactitud | No | Sí | No | Sí |
| Repetibilidad | No | Sí | No | Sí |
| Precisión intermedia | No | Sí | No | Sí |

Una **identificación** solo dice «es» o «no es»: le basta la especificidad, con positivos frente al patrón y sustancias parecidas que no deben dar positivo. Un **ensayo límite** solo dice si una impureza está por encima o por debajo de un valor: necesita saber hasta dónde ve (LD). Un ensayo **cuantitativo** da un número que debe ser exacto y preciso en todo el intervalo.

### Cuenta 1: recuperación en un estudio de adición (valores de ejemplo)
Impureza B de un API ficticio, límite 0,15 %, muestra a 1,0 mg/mL (1000 µg/mL). El intervalo va del umbral de notificación, 0,05 % (0,50 µg/mL), al 120 % del límite, 0,18 % (1,80 µg/mL); el límite son 1,50 µg/mL.

La muestra sin adición da 0,21 µg/mL de impureza B. Se le añaden 1,50 µg/mL de patrón de impureza B y se mide 1,68 µg/mL.

> recuperación (%) = (encontrado en la muestra con adición − encontrado sin adición) / añadido × 100

Recuperación = (1,68 − 0,21) / 1,50 × 100 = 1,47 / 1,50 × 100 = **98,0 %**.

Hay que restar lo que la muestra ya traía: si no, saldría 1,68 / 1,50 × 100 = 112 %, y parecería que el método da de más.

Con 3 niveles y 3 réplicas:

| Añadido (µg/mL) | Recuperaciones (%) | Media del nivel (%) |
|---|---|---|
| 0,50 | 97,6 · 99,3 · 98,8 | 98,6 |
| 1,50 | 98,0 · 100,7 · 99,1 | 99,3 |
| 1,80 | 101,2 · 99,4 · 100,3 | 100,3 |

Recuperación media de las nueve: **99,4 %**. Si el protocolo ficticio pedía una media entre 90 % y 110 % (criterio de ejemplo), cumple.

### Cuenta 2: repetibilidad con seis réplicas (valores de ejemplo)
Seis preparaciones independientes de la misma muestra de API, cada una pesada y disuelta desde cero, al 100 % de la concentración de ensayo. Riquezas: 99,6 · 100,1 · 99,8 · 100,4 · 99,5 · 100,0 %. Ojo: no son seis inyecciones del mismo vial, como en la idoneidad, sino seis preparaciones enteras: así se incluye el error de pesar y diluir.

1. **Media**: suma 599,4 / 6 = 99,9 %.
2. **Diferencias con la media**: −0,3 · 0,2 · −0,1 · 0,5 · −0,4 · 0,1.
3. **Al cuadrado**: 0,09 · 0,04 · 0,01 · 0,25 · 0,16 · 0,01. Suma: 0,56.
4. **Entre n − 1 = 5**: 0,56 / 5 = 0,112 (la varianza).
5. **Raíz**: desviación estándar s = √0,112 = 0,33 %.
6. **RSD** = s / media × 100 = 0,335 / 99,9 × 100 = **0,33 %**.

**Intervalo de confianza del 95 %** de la media: media ± t × s / √n. Con 6 datos (5 grados de libertad), t = 2,571. Mitad del intervalo: 2,571 × 0,335 / √6 = 0,35. Intervalo: de 99,55 % a 100,25 %. Es la zona donde, con un 95 % de confianza, está la media verdadera.

### Cuenta 3: recta de calibrado por mínimos cuadrados (valores de ejemplo)
Linealidad de la riqueza por HPLC: concentración de ensayo 0,50 mg/mL, cinco patrones del 80 % al 120 %.

| Patrón | Concentración x (mg/mL) | Área y |
|---|---|---|
| 1 | 0,40 | 4012 |
| 2 | 0,45 | 4498 |
| 3 | 0,50 | 5003 |
| 4 | 0,55 | 5511 |
| 5 | 0,60 | 5994 |

Se busca la recta y = b · x + a que deja la menor suma de residuos al cuadrado.

1. **Medias**: x̄ = 0,50 mg/mL; ȳ = 25018 / 5 = 5003,6.
2. **Diferencias con la media**: en x, −0,10 · −0,05 · 0 · 0,05 · 0,10; en y, −991,6 · −505,6 · −0,6 · 507,4 · 990,4.
3. **Sxx** (suma de diferencias de x al cuadrado) = 0,01 + 0,0025 + 0 + 0,0025 + 0,01 = 0,025.
4. **Sxy** (suma de los productos de las diferencias) = 99,16 + 25,28 + 0 + 25,37 + 99,04 = 248,85.
5. **Pendiente** (*slope*): b = Sxy / Sxx = 248,85 / 0,025 = **9954** unidades de área por mg/mL.
6. **Ordenada en el origen** (*y-intercept*): a = ȳ − b · x̄ = 5003,6 − 9954 × 0,50 = **26,6**. Es un 0,53 % de la respuesta al 100 %: pequeña, como debe ser, porque sin producto no debería haber área.
7. **Coeficiente de correlación** (*correlation coefficient*): r = Sxy / √(Sxx · Syy). Con Syy = 2477249,2 (la suma de las diferencias de y al cuadrado): r = 248,85 / 248,86 = **0,99996**; su cuadrado, el **coeficiente de determinación** R², es 0,99992.
8. **Residuos** (área medida menos área de la recta): 3,8 · −7,9 · −0,6 · 9,7 · −5,0. Repartidos a ambos lados, sin forma de curva.

Un r cercano a 1 no basta: una curva suave también puede darlo. Por eso se piden además el gráfico y los residuos. La misma cuenta, con absorbancias, está en «Espectroscopia a fondo».

### Cuenta 4: límites de detección y cuantificación con 3,3σ/S y 10σ/S (valores de ejemplo)
ICH Q2(R2) da estas fórmulas:

> LD = 3,3 · σ / S     LC = 10 · σ / S

S es la pendiente de la recta de calibrado; σ, la desviación estándar de la respuesta. Para σ, la guía admite la de varios blancos, o la de una recta hecha a propósito con concentraciones cercanas al LD y al LC: su **desviación estándar residual** o la de las ordenadas en el origen.

Recta específica de la impureza B: 0,05 · 0,10 · 0,15 · 0,20 · 0,25 µg/mL, con áreas 10,4 · 20,1 · 31,2 · 40,6 · 50,9. Con las mismas cuentas de antes: S = 203 unidades de área por µg/mL y a = 0,19. Los residuos son 0,06 · −0,39 · 0,56 · −0,19 · −0,04; la suma de sus cuadrados es 0,507. La desviación estándar residual divide entre n − 2 = 3, porque la recta ya ha usado dos datos para fijar pendiente y ordenada: σ = √(0,507 / 3) = 0,411.

- LD = 3,3 × 0,411 / 203 = **0,0067 µg/mL**
- LC = 10 × 0,411 / 203 = **0,020 µg/mL**

Pasado a porcentaje de la muestra (1000 µg/mL): LC = 0,020 / 1000 × 100 = 0,0020 %. El umbral de notificación de ICH Q3A(R2) para una dosis máxima diaria de hasta 2 g es 0,05 %. El LC queda unas 25 veces por debajo. Un LC estimado se confirma luego con muestras en torno a ese nivel, salvo que quede muy por debajo del límite de notificación (la guía pone como ejemplo unas 10 veces) y se justifique.

### ICH Q14: el método tiene un ciclo de vida
ICH Q14, adoptada el mismo día, trata del desarrollo y de la vida del método; la validación es una parte de ese ciclo. Ideas clave:

- **Enfoque mínimo o mejorado** (*minimal* o *enhanced approach*). El mínimo, o tradicional, sigue siendo válido. El mejorado añade análisis de riesgos y experimentos para conocer qué parámetros influyen y sus intervalos aceptables.
- **Perfil analítico objetivo** (*analytical target profile*, ATP): qué tiene que medir el método y con qué calidad, antes de elegir la técnica. Sirve de base para validar y para juzgar cambios.
- **Estrategia de control del método**: los parámetros que hay que controlar y la idoneidad del sistema, de la que depende la validez del resultado.
- **Seguimiento continuo** de la tendencia de los resultados, para intervenir antes de que el método falle.
- **Cambios**: dentro del mismo principio de medida, se revalida lo afectado; si cambia el principio (por ejemplo, de una valoración a un HPLC), se valida el método nuevo por completo y se comparan resultados.

### Transferencia y verificación de métodos de farmacopea
**Transferencia** (*method transfer*). Cuando un método validado pasa de un laboratorio a otro, por ejemplo del de desarrollo al de control de tu planta, el que lo recibe demuestra que obtiene resultados equivalentes: Q2(R2) habla de revalidar total o parcialmente o comparar muestras representativas. El capítulo 6 de las normas europeas de correcta fabricación de medicamentos (EudraLex, volumen 4, parte I) pide un protocolo con las pruebas, la formación, los patrones y muestras y criterios de aceptación basados en la validación vigente.

**Métodos de farmacopea.** ICH Q7 (apartado 12.80) dice que los métodos se validan salvo que estén en la farmacopea correspondiente u otra referencia reconocida, pero que la idoneidad de todos se **verifica** en las condiciones reales de uso y se documenta. Verificar no es validar de nuevo: es comprobar que la receta funciona con tu producto, tu equipo y tu laboratorio. La guía de la FDA de 2015 sobre procedimientos analíticos cita, entre lo que influye en esa verificación, que la ruta de síntesis cambie el perfil de picos del cromatograma.

### Revalidación tras cambios
ICH Q2(R2) define la **revalidación** (*revalidation*) como demostrar que el método sigue sirviendo después de un cambio en el producto, en el proceso o en el propio método. Puede ser completa o parcial, y su alcance depende de qué características afecta el cambio. La guía de la FDA de 2015 cita como motivos un cambio de equipo o de reactivo y cambios del proceso, como una nueva ruta de síntesis; ICH Q14 añade que, si cambia el producto o el proceso, puede hacer falta revisar si el método sigue siendo adecuado. ICH Q7 pide registrar toda modificación de un método validado con su motivo y sus datos (12.83) y pasar por control de cambios los cambios de métodos (13.11).

### Lo que significa para ti en planta
**Un método no validado no puede liberar tu lote.** La unidad de calidad libera o rechaza cada API (ICH Q7, 2.22) comparando sus resultados con la especificación. Si el método no ha demostrado que sirve, su número no demuestra nada: tu lote puede tener una impureza que el método no separa. Por eso lo que decide sobre un lote sale de un método validado o, si es de farmacopea, verificado.

**Un cambio en planta puede dejar ciego al laboratorio.** Un disolvente de lavado distinto, otra temperatura u otro orden de etapas pueden traer impurezas nuevas o restos de otro disolvente. El método se validó con el proceso antiguo: quizá la impureza nueva sale debajo de otro pico, o el método de disolventes residuales ni busca el nuevo. El análisis diría «cumple» sin haber mirado.

Por eso nunca cambias un disolvente, una etapa ni un parámetro por tu cuenta, aunque parezca mejor. Una mejora va por control de cambios, donde calidad evalúa también los métodos, y los primeros lotes tras el cambio se evalúan (ICH Q7, 13.15). Y si en un turno pasa algo distinto de la hoja, se anota tal cual.

Los números de esta lección son de ejemplo para entender las cuentas. En planta y en el laboratorio manda siempre el procedimiento vigente (SOP): los métodos, sus criterios y lo que se hace ante un cambio son los que diga tu empresa.
`,
  plant: `
Lote 26-073 del API ficticio TR-58. En la centrífuga C-412 la torta se lava con metanol y después pasa al secadero SD-415. Desarrollo de procesos propone cambiar el lavado a isopropanol, porque deja la torta más fácil de secar. Nada de esto se toca sin un control de cambios.

En la reunión de evaluación, la analista de control de calidad levanta la mano. El método de disolventes residuales por cromatografía de gases del TR-58 está validado para metanol y tolueno: su especificidad, su intervalo y su LC se demostraron solo con esos dos. El isopropanol no está en el método. Además, el método de impurezas por HPLC se validó con las impurezas del proceso actual: si el nuevo disolvente arrastra o forma algo distinto, hay que comprobar que no sale debajo del pico del producto.

Calidad decide antes del primer lote con el cambio: revalidación parcial del método de disolventes (especificidad, respuesta, LC, exactitud y precisión para el isopropanol) y estudio de especificidad del método de impurezas con muestras del lavado nuevo. Los tres primeros lotes con isopropanol llevan análisis adicionales y quedan en cuarentena hasta que se evalúen.

Tú, en tu turno, haces el lavado con lo que dice la versión de la hoja que tienes delante, que todavía es metanol. Un compañero comenta que «el isopropanol ya está aprobado, me lo dijo el de desarrollo». No lo usas: hasta que no llega la hoja nueva, aprobada y con formación, manda la vigente.
`,
  batchRecord: `
La validación no se ve en la hoja de producción (*batch record*), pero se apoya en ella:

- **Muestras para el laboratorio**: punto de muestreo, hora, cantidad, recipiente y etiqueta tal como pide la hoja. El método validado supone una muestra tomada así; otra forma de tomarla puede dar un resultado que no es comparable.
- **Resultados que te llegan** (controles en proceso, por ejemplo): vienen de métodos validados o verificados. Anota el valor y la referencia que dé la hoja, no un «cumple».
- **Disolventes, lotes de materias primas y parámetros reales**: el laboratorio los usa para saber si el lote se fabricó dentro de lo que el método conoce.
- **Incidencias y desviaciones**: cualquier cambio respecto a la hoja (un disolvente de otro proveedor, una temperatura que se pasó, una etapa repetida) se anota con hora y firma. Puede hacer que el laboratorio revise si su método sigue siendo adecuado.
- **Referencia al control de cambios**: en los lotes fabricados tras un cambio, la hoja puede indicar el número del control de cambios y los análisis adicionales previstos.
- **Estado del lote**: en cuarentena hasta que la unidad de calidad lo libere.
`,
  terms: [
    { es: "Validación de un método analítico", en: "Analytical procedure validation", def: "Demostración documentada de que un método analítico es adecuado para su uso previsto (ICH Q2(R2))." },
    { es: "Especificidad o selectividad", en: "Specificity / selectivity", def: "Grado en que otras sustancias no interfieren en la medida de la sustancia buscada." },
    { es: "Intervalo informable", en: "Reportable range", def: "Resultados, en las unidades de la especificación, entre los que el método tiene exactitud y precisión adecuadas." },
    { es: "Linealidad", en: "Linearity", def: "Respuesta del método en forma de recta frente a la concentración, en todo el intervalo." },
    { es: "Exactitud", en: "Accuracy", def: "Cercanía entre el resultado medido y el valor verdadero o de referencia." },
    { es: "Recuperación", en: "Recovery", def: "Porcentaje de una cantidad añadida que el método encuentra, restando lo que la muestra ya traía." },
    { es: "Repetibilidad", en: "Repeatability", def: "Precisión en las mismas condiciones durante poco tiempo." },
    { es: "Precisión intermedia", en: "Intermediate precision", def: "Precisión dentro del mismo laboratorio con otros días, analistas, equipos o condiciones." },
    { es: "Reproducibilidad", en: "Reproducibility", def: "Precisión entre laboratorios distintos, medida con un ensayo interlaboratorio." },
    { es: "Límite de cuantificación", en: "Quantitation limit (QL)", def: "Menor cantidad que el método mide con precisión y exactitud adecuadas; puede estimarse como 10σ/S." },
    { es: "Robustez", en: "Robustness", def: "Capacidad del método de cumplir lo esperado ante pequeñas variaciones deliberadas de sus parámetros." },
    { es: "Perfil analítico objetivo", en: "Analytical target profile (ATP)", def: "Descripción de qué debe medir un método y con qué calidad, base para desarrollarlo, validarlo y cambiarlo (ICH Q14)." },
    { es: "Transferencia de métodos", en: "Analytical method transfer", def: "Demostración documentada de que un laboratorio receptor obtiene resultados equivalentes con un método validado." },
    { es: "Revalidación", en: "Revalidation", def: "Demostrar de nuevo, total o parcialmente, que el método sirve tras un cambio en el producto, el proceso o el propio método." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Una muestra sin adición da 0,30 µg/mL de una impureza. Se le añaden 2,00 µg/mL de patrón de esa impureza y el método encuentra 2,26 µg/mL. ¿Cuál es la recuperación?",
      answer: 98,
      tolerance: 0.005,
      unit: "%",
      explain: "Se resta lo que ya traía la muestra: (2,26 − 0,30) / 2,00 × 100 = 1,96 / 2,00 × 100 = 98 %.",
    },
    {
      kind: "number",
      q: "Seis preparaciones de la misma muestra dan una riqueza media de 100,2 % con una desviación estándar de 0,45 %. ¿Cuál es la RSD?",
      answer: 0.45,
      tolerance: 0.02,
      unit: "%",
      explain: "RSD = s / media × 100 = 0,45 / 100,2 × 100 = 0,449, que redondeado da 0,45 %.",
    },
    {
      kind: "number",
      q: "Para una impureza, la desviación estándar de la respuesta es σ = 0,50 unidades de área y la pendiente de la recta es S = 250 unidades de área por µg/mL. ¿Cuál es el límite de cuantificación?",
      answer: 0.02,
      tolerance: 0.02,
      unit: "µg/mL",
      explain: "LC = 10 × σ / S = 10 × 0,50 / 250 = 0,02 µg/mL. El LD sería 3,3 × 0,50 / 250 = 0,0066 µg/mL.",
    },
    {
      kind: "number",
      q: "En una recta de calibrado, la suma de los productos de las diferencias (Sxy) es 300 y la suma de las diferencias de x al cuadrado (Sxx) es 0,030. ¿Cuál es la pendiente?",
      answer: 10000,
      tolerance: 0.005,
      unit: "unidades de área por mg/mL",
      explain: "Pendiente = Sxy / Sxx = 300 / 0,030 = 10000 unidades de área por mg/mL.",
    },
    {
      kind: "number",
      q: "El LC de un método de impurezas es 0,40 µg/mL y la muestra se prepara a 1,0 mg/mL (1000 µg/mL). ¿A qué porcentaje de la muestra equivale el LC?",
      answer: 0.04,
      tolerance: 0.02,
      unit: "%",
      explain: "0,40 / 1000 × 100 = 0,04 %. Queda por debajo de un umbral de notificación de 0,05 %, como pide ICH Q3A(R2).",
    },
    {
      kind: "choice",
      q: "Según la tabla 1 de ICH Q2(R2), ¿qué característica se demuestra normalmente en un ensayo de identificación?",
      options: [
        "Solo la especificidad, con positivos y sustancias parecidas",
        "Exactitud, repetibilidad y precisión intermedia completas",
        "El límite de cuantificación y la recta de calibrado entera",
        "La reproducibilidad entre varios laboratorios distintos",
      ],
      answer: 0,
      explain: "Una identificación solo dice «es» o «no es»: le basta demostrar especificidad, con resultados positivos frente al patrón y negativos con sustancias parecidas.",
    },
    {
      kind: "choice",
      q: "Un compañero propone lavar la torta de la centrífuga con otro disolvente «que es igual de bueno». ¿Qué tiene que ver eso con los métodos analíticos?",
      options: [
        "Nada: los métodos del laboratorio no dependen del proceso",
        "El método puede no ver el disolvente nuevo; va por control de cambios",
        "Solo hay que avisar al laboratorio después del primer lote",
        "Basta con que el operador anote el nuevo disolvente en la hoja",
      ],
      answer: 1,
      explain: "El método se validó con el proceso actual. Un disolvente nuevo puede dejar restos o impurezas que el método no busca o no separa; se evalúa en el control de cambios y puede pedir revalidación.",
    },
    {
      kind: "choice",
      q: "Tu laboratorio va a usar un método de la farmacopea para un ensayo del API. Según ICH Q7, ¿qué hay que hacer?",
      options: [
        "Nada: lo que está en la farmacopea vale tal cual",
        "Validarlo entero desde cero como si fuera propio",
        "Verificar y documentar que sirve en las condiciones reales de uso",
        "Pedir permiso a la farmacopea para poder usarlo",
      ],
      answer: 2,
      explain: "ICH Q7 (12.80): los métodos de farmacopea no necesitan validación completa, pero su idoneidad se verifica en las condiciones reales de uso y se documenta.",
    },
    {
      kind: "choice",
      q: "Dos analistas del mismo laboratorio, en días distintos y con dos HPLC distintos, analizan la misma muestra. ¿Qué característica se está estudiando?",
      options: [
        "La repetibilidad del método",
        "La reproducibilidad del método",
        "La especificidad del método",
        "La precisión intermedia del método",
      ],
      answer: 3,
      explain: "Variaciones de días, analistas y equipos dentro del mismo laboratorio son precisión intermedia. La reproducibilidad compara laboratorios distintos.",
    },
    {
      kind: "choice",
      q: "Un lote cumple todos los análisis, pero uno de ellos se hizo con un método propio que nunca se validó. ¿Qué pasa?",
      options: [
        "Se libera, porque el resultado ha salido dentro del límite",
        "Se libera si el operador firma que el lote fue normal",
        "Ese resultado no demuestra nada y el lote no puede liberarse así",
        "Se libera la mitad del lote y la otra mitad se guarda",
      ],
      answer: 2,
      explain: "Si el método no ha demostrado que sirve, su número puede ser falso. La unidad de calidad solo libera con resultados de métodos validados o verificados.",
    },
  ],
};
