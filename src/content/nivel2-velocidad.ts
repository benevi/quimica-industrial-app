import type { Lesson } from "./types";

export const leyDeVelocidadAFondo: Lesson = {
  slug: "ley-de-velocidad-a-fondo",
  level: 2,
  order: 9.5,
  title: "Ley de velocidad y catalizadores a fondo",
  titleEn: "Rate laws and catalysts in depth",
  minutes: 40,
  summary:
    "La velocidad instantánea como pendiente, la ley diferencial de velocidad y sus órdenes, cómo sacar los órdenes de una tabla de velocidades iniciales, el seudoorden cuando un reactivo va en exceso, las ecuaciones integradas de orden 0, 1 y 2 con su vida media, cómo saber el orden con los datos del IPC, y los catalizadores a fondo: dónde entran en la ley de velocidad, cuánto metal se carga, vida útil, venenos, regeneración y recuperación del paladio.",
  body: `
En «Velocidad de reacción a fondo: por qué unas reacciones tardan horas y otras segundos» viste la teoría de choques, Arrhenius, la idea práctica del orden, la vida media del primer orden y la acumulación. Cómo se maneja en planta el paladio sobre carbón, y su límite en el producto, lo verás en «Hidrogenación a fondo: hidrógeno, catalizadores y reactores a presión». Aquí no se repite: se construye la parte de números que piden la Química de 2.º de Bachillerato (Real Decreto 243/2022: «ley diferencial de la velocidad de una reacción química y los órdenes de reacción a partir de datos experimentales») y el módulo 0189 «Reactores químicos» del título de Química Industrial (Real Decreto 175/2008), que pide describir los tipos de catalizador, determinar su vida útil y describir las técnicas de recuperación y regeneración.

### Velocidad media y velocidad instantánea
El libro gratuito de instrumentación de Tony Kuphaldt explica la derivada con un ejemplo que te sirve tal cual: una bombona de propano sobre una báscula. Si pesas cada cierto tiempo, el caudal medio de cada tramo es la caída de masa dividida entre el tiempo, que en la gráfica es la **pendiente** (*slope*) del segmento que une dos puntos. Si los puntos se acercan sin límite, el segmento se convierte en la tangente a la curva y su pendiente es el caudal **en ese instante**: la **derivada** (*derivative*), que se escribe dm/dt.

Con una reacción es igual. La concentración de un reactivo A, que se escribe [A] y se mide en mol/L, baja con el tiempo:

- **Velocidad media** (*average rate*): −Δ[A] / Δt entre dos muestras. El signo menos hace que salga positiva, porque [A] baja.
- **Velocidad instantánea** (*instantaneous rate*): −d[A]/dt, la pendiente de la tangente en un momento.

Si la ecuación tiene números delante, se divide entre ellos para que la velocidad salga igual con cualquier sustancia: en 2 A da P desaparecen 2 mol de A por cada mol de P, y v = −½ × d[A]/dt = d[P]/dt.

### La ley diferencial de velocidad
La **ley de velocidad** (*rate law*) dice cómo depende la velocidad instantánea de las concentraciones. Para A + B que dan productos:

> v = k × [A]^m × [B]^n

- **k** es la constante de velocidad: depende de la temperatura (Arrhenius) y del catalizador, no de las concentraciones.
- **m** y **n** son los **órdenes parciales** (*partial orders*) respecto a A y a B; su suma es el **orden global** (*overall order*).
- Los órdenes **se miden**. No se leen en los números de la ecuación ajustada.

Dos ejemplos que verás en «Cómo reaccionan las moléculas orgánicas a fondo» (nivel 3), donde un reactivo rico en electrones, el **nucleófilo** (*nucleophile*), sustituye a un átomo de la molécula de partida, el **sustrato** (*substrate*): en la **SN2** el paso lento es el choque de sustrato y nucleófilo, v = k × [sustrato] × [nucleófilo], orden global 2; en la **SN1** solo interviene el sustrato, v = k × [sustrato], y más nucleófilo no la acelera.

**Las unidades de k delatan el orden.** Como v va siempre en mol/(L·s), k tiene que tener las unidades que hagan cuadrar la cuenta (cálculo de unidades):

| Orden global | Ley | Unidades de k |
|---|---|---|
| 0 | v = k | mol/(L·s) |
| 1 | v = k × [A] | 1/s (s⁻¹) |
| 2 | v = k × [A]² o k × [A] × [B] | L/(mol·s) |
| 3 | v = k × [A]² × [B] | L²/(mol²·s) |

Si en un informe ves k = 0,1 min⁻¹, ya sabes que es de primer orden (o de seudoprimer orden, que verás enseguida).

### Órdenes a partir de velocidades iniciales
El **método de las velocidades iniciales** (*initial rates method*) se hace en el laboratorio: se preparan varias mezclas, se cambia **una sola** concentración cada vez y se mide la velocidad al principio, cuando casi nada ha reaccionado todavía y las concentraciones son las que se pusieron.

**Ejemplo resuelto 1 (valores de ejemplo).** Reacción A + B a temperatura constante:

| Ensayo | [A] (mol/L) | [B] (mol/L) | v inicial (mol/(L·s)) |
|---|---|---|---|
| 1 | 0,10 | 0,10 | 2,0 × 10⁻⁴ |
| 2 | 0,20 | 0,10 | 8,0 × 10⁻⁴ |
| 3 | 0,10 | 0,20 | 4,0 × 10⁻⁴ |

1. **Orden en A.** Compara los ensayos 1 y 2: B no cambia y A se duplica. La velocidad pasa de 2,0 a 8,0, es decir, × 4 = 2². Orden **2** en A.
2. **Orden en B.** Ensayos 1 y 3: A no cambia y B se duplica. La velocidad × 2 = 2¹. Orden **1** en B.
3. **Ley:** v = k × [A]² × [B], orden global 3.
4. **k** con el ensayo 1: k = 2,0 × 10⁻⁴ / (0,10² × 0,10) = **0,20 L²/(mol²·s)**. Con los ensayos 2 y 3 sale lo mismo: así compruebas que no te has equivocado.
5. **Predicción.** Con [A] = [B] = 0,30 mol/L: v = 0,20 × 0,30² × 0,30 = **5,4 × 10⁻³ mol/(L·s)**.

**Cuando el factor no es redondo, se usan logaritmos.** El orden es m = log(v₂/v₁) / log(c₂/c₁). Si al triplicar una concentración la velocidad se multiplica por 5,2: m = log 5,2 / log 3 = **1,50**. Los órdenes no tienen por qué ser enteros; un orden de 1,5 es un dato experimental, no un error.

**Ejemplo resuelto 2: el catalizador también tiene orden (valores de ejemplo).** En un proceso con catalizador disuelto, el laboratorio mide la velocidad inicial con 0,5, 1,0 y 1,5 % molar de catalizador y obtiene 1,2, 2,4 y 3,6 × 10⁻³ mol/(L·min). Al triplicar el catalizador, la velocidad se triplica: orden **1** en el catalizador. Con la mitad de catalizador, la reacción va a la mitad: por eso se pesa con el mismo cuidado que un reactivo.

### Seudoorden: cuando un reactivo va en exceso
Si un reactivo va en gran exceso, su concentración casi no cambia durante la reacción y se puede meter dentro de la constante: k' = k × [B]^n. La reacción **parece** de primer orden en el otro: es de **seudoprimer orden** (*pseudo-first order*).

**Cuenta (valores de ejemplo).** Nucleófilo a 2,0 mol/L y sustrato a 0,10 mol/L. Cuando ha reaccionado todo el sustrato, el nucleófilo ha bajado a 1,9 mol/L: solo un **5 %**. Su concentración se puede tomar como constante.

Así está modelada la reacción del reactor **R-204** del simulador de la app: el intermedio ficticio AX-21 va en exceso y la reacción es de seudoprimer orden en el reactivo B, con k = 0,1 min⁻¹ a 70 °C y 90 kJ/mol de energía de activación (valores de ejemplo del simulador, en docs/simulador-reactor.md).

### Las ecuaciones integradas
Para planificar un lote interesa **cuánto queda a las t horas**. Se obtiene sumando (integrando) la ley diferencial trocito a trocito; las tres ecuaciones se han comprobado para esta lección integrando paso a paso con un ordenador.

| Orden | Ecuación integrada | Qué da una recta | Pendiente | Vida media |
|---|---|---|---|---|
| 0 | [A] = [A]₀ − k × t | [A] frente a t | −k | [A]₀ / (2 × k) |
| 1 | ln [A] = ln [A]₀ − k × t | ln [A] frente a t | −k | ln 2 / k = 0,693 / k |
| 2 | 1/[A] = 1/[A]₀ + k × t | 1/[A] frente a t | +k | 1 / (k × [A]₀) |

[A]₀ es la concentración al empezar; ln es el logaritmo neperiano, la tecla «ln» de la calculadora (qué significa, y el número e que lleva detrás, lo viste en «Logaritmos y exponenciales: las cuentas del pH, la presión de vapor y la velocidad»). La de orden 2 vale para un solo reactivo o para dos que empiezan con la misma concentración y se gastan uno a uno.

**Tres analogías para recordarlas:**

- **Orden 0: el grifo.** Un depósito que se vacía por un grifo a caudal fijo baja los mismos litros cada hora, esté lleno o casi vacío. Pasa cuando lo que manda no es la concentración, sino otra cosa: la bomba que dosifica, o el hidrógeno que consigue entrar en el líquido en una hidrogenación frenada por la agitación (lo de la transferencia de masa en «Hidrogenación a fondo»). La NTP 527 del INSST define la reacción de orden cero como aquella cuya velocidad es independiente de la concentración de los reactivos.
- **Orden 1: la cola.** Cada minuto se va el mismo **porcentaje** de lo que queda: la vida media no cambia.
- **Orden 2: el baile por parejas.** Hacen falta dos moléculas que se encuentren; cuando quedan pocas, cuesta cada vez más: la reacción arrastra una cola larga.

**Ejemplo resuelto 3: primer orden en el R-204.** Con k = 0,1 min⁻¹ a 70 °C, la vida media del reactivo B es 0,693 / 0,1 = **6,93 min**. Supón (valor de ejemplo) que al acabar la adición queda un 2 % de B y que el control en proceso (IPC, *in-process control*) pide B ≤ 0,5 %. De 2 % a 0,5 % hay dos vidas medias: t = ln(2 / 0,5) / 0,1 = **13,9 min** a 70 °C. Con Arrhenius y los 90 kJ/mol del simulador, a 60 °C k baja a 0,0388 min⁻¹, la vida media sube a **17,9 min** y el mismo tramo tarda **35,7 min**. A 50 °C la vida media sería de 48,8 min. Por qué esa lentitud en frío es peligrosa mientras se dosifica lo tienes en la lección de velocidad, apartado de la acumulación.

**Ejemplo resuelto 4: segundo orden y su cola (valores de ejemplo).** [A]₀ = 0,50 mol/L y k = 0,040 L/(mol·min).

1. Vida media: 1 / (0,040 × 0,50) = **50 min**. A los 50 min quedan 0,25 mol/L.
2. La segunda vida media empieza con 0,25 mol/L: 1 / (0,040 × 0,25) = **100 min**. Cada mitad tarda el doble que la anterior. A los 150 min quedan 0,125 mol/L.
3. ¿Cuándo se llega al 90 % de conversión, [A] = 0,050 mol/L? t = (1/0,050 − 1/0,50) / 0,040 = (20 − 2) / 0,040 = **450 min**.
4. Una de primer orden con la misma vida media de 50 min llega al 90 % en 3,32 vidas medias, unos **166 min**: la de segundo orden tarda casi el triple.

**Ejemplo resuelto 5: orden cero (valores de ejemplo).** Un sustrato a 0,80 mol/L se consume a 0,10 mol/(L·h) fijos. A las 3 h queda 0,80 − 0,10 × 3 = **0,50 mol/L**; se acaba a las 0,80 / 0,10 = **8 h**. La primera mitad tarda 4 h y la siguiente mitad, de 0,40 a 0,20 mol/L, solo 2 h: en orden cero la reacción no se frena al final, se para de golpe.

### Cómo saber el orden con los datos del IPC
Con varias muestras del mismo lote, el laboratorio calcula tres columnas y mira cuál forma una recta con el tiempo. Con muestras igual de espaciadas basta mirar los **saltos**: en una recta son todos iguales.

**Ejemplo resuelto 6 (valores de ejemplo, una muestra por hora):**

| t (h) | [A] (mol/L) | ln [A] | 1/[A] (L/mol) |
|---|---|---|---|
| 0 | 1,00 | 0,000 | 1,00 |
| 1 | 0,82 | −0,198 | 1,22 |
| 2 | 0,67 | −0,400 | 1,49 |
| 3 | 0,55 | −0,598 | 1,82 |
| 4 | 0,45 | −0,799 | 2,22 |

- Saltos de [A]: 0,18; 0,15; 0,12; 0,10. Cada vez menores: **no** es orden 0.
- Saltos de ln [A]: 0,198; 0,202; 0,198; 0,201. Iguales: **orden 1**, y la pendiente da k = **0,20 h⁻¹**.
- Saltos de 1/[A]: 0,22; 0,27; 0,33; 0,40. Cada vez mayores: **no** es orden 2.

Con muestras irregulares se dibuja la gráfica o se calcula la recta de regresión («Estadística del laboratorio a fondo: comparar, aceptar y rechazar resultados»).

**El atajo de las vidas medias.** Compara lo que tarda en gastarse la primera mitad con lo que tarda la mitad siguiente: si tarda **lo mismo**, primer orden; si tarda **el doble**, segundo orden; si tarda **la mitad**, orden cero.

### Dónde entra el catalizador en la ley de velocidad
Lo básico está en la lección de velocidad. Aquí, lo que cambia en los números:

| | Homogéneo (*homogeneous*) | Heterogéneo (*heterogeneous*) |
|---|---|---|
| Dónde está | Disuelto en la mezcla | Sólido en suspensión o en lecho |
| Ejemplos | Un ácido como el sulfúrico en una esterificación («Equilibrio químico a fondo») o cualquier compuesto que actúe disuelto en la mezcla | Paladio o platino sobre carbón; níquel en forma de aleación de níquel y aluminio, que la guía ICH Q3D (del Consejo Internacional de Armonización, *International Council for Harmonisation*) cita como catalizador de hidrogenación |
| En la ley de velocidad | Su concentración aparece con su orden, como en el ejemplo 2 | Cuenta la superficie activa, la cantidad cargada y cómo llegan los reactivos hasta ella (agitación, presión) |

**Cuánto catalizador es «poco».** Se suele expresar en porcentaje molar: moles de metal por cada 100 moles de sustrato. Con un ejemplo que volverá en «Hidrogenación a fondo» (0,4 kg de paladio para 200 kg de un intermedio de 160 g/mol), y la masa molar del paladio, 106,42 g/mol según el NIST:

1. Moles de sustrato: 200000 / 160 = **1250 mol**.
2. Moles de paladio: 400 / 106,42 = **3,76 mol**.
3. Porcentaje molar: 3,76 / 1250 × 100 = **0,30 % molar**.
4. Cada átomo de paladio convierte, de media, 1250 / 3,76 = unas **332 moléculas**.


### Vida útil y envenenamiento
Las conclusiones europeas sobre mejores técnicas disponibles (MTD) para la química orgánica de gran volumen de producción (Decisión de Ejecución (UE) 2017/2117, MTD 15), escritas para grandes instalaciones pero útiles como referencia, piden elegir el catalizador buscando un equilibrio entre su actividad, su selectividad, su **vida útil** (*service life*), «por ejemplo, vulnerabilidad a venenos del catalizador», y el uso de metales menos tóxicos. Además piden:

- **Proteger el catalizador** de venenos, por ejemplo pretratando las materias primas.
- **Optimizar** temperatura y presión para equilibrar conversión y vida útil.
- **Vigilar su rendimiento** con la eficiencia de conversión, por ejemplo con el calor de reacción.

La MTD 43 cita el **coque** como «tanto un veneno del catalizador como un residuo»; el azufre sobre metales está en la lección de velocidad.

**Cómo se ve en números.** Un catalizador con menos superficie activa da una k más pequeña. Si la velocidad fuese proporcional a la superficie libre (supuesto de ejemplo) y un veneno tapase el 30 %, k se multiplicaría por 0,7.

**Ejemplo resuelto 7: reutilizar un catalizador (valores de ejemplo).** Una etapa de primer orden reutiliza el catalizador filtrado del lote anterior. Llegar al 99 % de conversión exige ln(100) / k = 4,605 / k horas:

| Uso | k (h⁻¹) | Horas hasta el 99 % |
|---|---|---|
| 1 | 0,46 | 10,0 |
| 2 | 0,41 | 11,2 |
| 3 | 0,35 | 13,2 |
| 4 | 0,28 | 16,4 |

La tendencia es la señal de la vida útil: cada uso necesita más tiempo para llegar al mismo IPC. Cuántas veces se reutiliza y con qué criterio lo fija el proceso validado, no el turno. Si el catalizador se reutiliza en la planta, la guía ICH Q7 no lo nombra, pero sus apartados 14.40 a 14.43, sobre materiales recuperados, piden procedimientos aprobados, que el material recuperado cumpla una especificación adecuada a su uso y que su uso quede documentado.

### Regenerar o recuperar
**Regenerar** es devolverle actividad al catalizador. Las mismas conclusiones europeas (MTD 17, técnica d) recogen la regeneración de catalizadores y adsorbentes «por ejemplo por tratamiento térmico o químico», y la MTD 25 pide enviar el gas de la regeneración del catalizador de hidrogenación a un sistema de tratamiento. En esta app, el Pd/C gastado sigue el camino que verás en «Hidrogenación a fondo»: se guarda húmedo y se envía a recuperar el metal.

**Recuperar** es sacar el metal del catalizador gastado. Tres razones:

1. **Es un metal estratégico.** El Reglamento (UE) 2024/1252 incluye los metales del grupo del platino en su lista de materias primas estratégicas (anexo I) y en la de fundamentales (anexo II). ICH Q3D recuerda que el paladio es uno de los metales del grupo del platino.
2. **La ley lo prevé.** La Ley 7/2022 de residuos pone el reciclado por delante de la eliminación y, entre las operaciones de valorización de su anexo II, tiene una propia, la R08, «Valorización de componentes procedentes de catalizadores».
3. **Cuadrar el metal.** El paladio cargado tiene que aparecer: en la torta que va a recuperar, en el producto y en las aguas.

**Ejemplo resuelto 8 (valores de ejemplo).** Se cargaron 400 g de paladio. El análisis de la torta enviada a recuperar da 392 g: se recupera el 392 / 400 × 100 = **98 %**. Los 8 g restantes se buscan en filtrados, finos del filtro de pulido y producto. Lo del producto tiene su límite: ICH Q3D da al paladio una exposición diaria permitida (PDE) oral de 100 µg/día y define un **umbral de control** (*control threshold*) del 30 % de la PDE, **30 µg/día**: si el nivel de un elemento en el medicamento se mantiene siempre por debajo, no hacen falta controles adicionales. Con 10 g de medicamento al día, eso son 30 / 10 = **3 µg/g**.

Tu parte: torta húmeda y completa, recipiente identificado y pesado, finos recogidos y todo anotado.

### Para qué te sirve en el turno
| Lo que ves en la hoja o en la pantalla | Lo que hay detrás |
|---|---|
| «Cargar X kg de catalizador (base seca)» | Orden en el catalizador: menos cantidad, reacción más lenta |
| Un reactivo en exceso | Seudoorden: la vida media del otro es constante |
| IPC que cada vez tarda más con catalizador reutilizado | Pérdida de actividad: vida útil |
| Bidón de catalizador gastado con su peso | Recuperación del metal y balance del paladio |

En planta manda siempre el procedimiento vigente (SOP): tiempos, temperaturas, cantidades de catalizador, reutilizaciones y gestión del catalizador gastado son los de tu hoja de producción.
`,
  plant: `
Campaña de cinco lotes en el autoclave ficticio HZ-720, que reduce el intermedio ficticio LV-33 con un catalizador de platino sobre carbón que, según el proceso validado ficticio, puede usarse hasta tres veces. Todos los valores son de ejemplo.

En el lote 1, con catalizador nuevo, el IPC cumple a las 10 h. En el lote 2, con el mismo catalizador filtrado y cargado húmedo según la hoja, cumple a las 11,2 h. En el lote 3, a las 13,2 h. El técnico de proceso calcula con los resultados de las muestras de cada lote la constante de primer orden: 0,46; 0,41 y 0,35 h⁻¹. La bajada es la prevista y el tercer uso es el último.

En el lote 4 se carga catalizador nuevo, pero el IPC va lento desde el principio. Sacas la tendencia del consumo de gas: la curva arranca más plana que en el lote 1, con la misma agitación y presión. Avisas a la jefa de turno. El laboratorio encuentra que el lote de un disolvente recién recibido trae un compuesto de azufre por encima de lo habitual: un veneno del catalizador. Calidad abre una desviación y el disolvente queda bloqueado.

Las tortas de catalizador gastado de toda la campaña se guardan húmedas en bidones cerrados, identificados con el código de residuo de la planta y pesados. El balance de metal de la campaña, con el análisis de la torta y del producto, lo cierra el técnico con tus pesadas.
`,
  batchRecord: `
- **Catalizador**: código, lote, si es nuevo o reutilizado (y número de uso), peso húmedo, contenido en agua y metal en seco según certificado, y verificación de una segunda persona.
- **Condiciones**: temperatura, presión, velocidad del agitador y hora de inicio de la reacción.
- **IPC**: hora de cada muestra y resultado; si la hoja lo pide, tiempo hasta cumplir, para comparar entre lotes.
- **Consumo de reactivo o de gas**: lecturas a las horas indicadas; si la curva es más lenta que en otros lotes, anotarlo y avisar.
- **Materias primas**: lotes de disolventes y reactivos usados, porque un veneno puede llegar con cualquiera de ellos.
- **Catalizador gastado**: recipiente, estado húmedo comprobado, peso, etiqueta y destino (recuperación del metal).
- **Incidencias**: reacción lenta, cambio de lote de materia prima, catalizador fuera de su número de usos; siempre con hora, firma y aviso.
`,
  terms: [
    { es: "Velocidad instantánea", en: "Instantaneous rate", def: "Velocidad en un momento concreto: la pendiente de la tangente a la curva de concentración frente al tiempo, −d[A]/dt." },
    { es: "Ley de velocidad", en: "Rate law", def: "Ecuación v = k × [A]^m × [B]^n que relaciona la velocidad con las concentraciones; sus exponentes se miden." },
    { es: "Orden parcial", en: "Partial order", def: "Exponente de la concentración de un reactivo en la ley de velocidad." },
    { es: "Orden global", en: "Overall order", def: "Suma de los órdenes parciales; fija las unidades de la constante de velocidad." },
    { es: "Método de las velocidades iniciales", en: "Initial rates method", def: "Medir la velocidad al principio de varios ensayos cambiando una sola concentración cada vez para calcular los órdenes." },
    { es: "Seudoprimer orden", en: "Pseudo-first order", def: "Comportamiento de primer orden de una reacción en la que el otro reactivo va en gran exceso y su concentración casi no cambia." },
    { es: "Ecuación integrada", en: "Integrated rate law", def: "Fórmula que da la concentración que queda a cada tiempo; distinta para orden 0, 1 y 2." },
    { es: "Vida media", en: "Half-life", def: "Tiempo para gastar la mitad: constante en orden 1, se alarga en orden 2 y se acorta en orden 0." },
    { es: "Catálisis homogénea", en: "Homogeneous catalysis", def: "La que hace un catalizador disuelto en la misma fase que los reactivos; su concentración entra en la ley de velocidad." },
    { es: "Catálisis heterogénea", en: "Heterogeneous catalysis", def: "La que hace un catalizador sólido; cuentan su superficie activa y cómo llegan los reactivos a ella." },
    { es: "Vida útil del catalizador", en: "Catalyst service life", def: "Tiempo o número de usos en que el catalizador mantiene la actividad que necesita el proceso." },
    { es: "Regeneración del catalizador", en: "Catalyst regeneration", def: "Devolver actividad a un catalizador usado, por ejemplo con un tratamiento térmico o químico." },
    { es: "Recuperación del metal", en: "Precious metal recovery", def: "Valorización del metal de un catalizador gastado; en la Ley 7/2022 es la operación R08." },
    { es: "Umbral de control", en: "Control threshold", def: "Según ICH Q3D, el 30 % de la PDE de un elemento; por debajo de forma constante no hacen falta controles adicionales." },
  ],
  quiz: [
    {
      kind: "number",
      q: "En dos ensayos de velocidades iniciales solo cambia la concentración de A, que se duplica de 0,10 a 0,20 mol/L. La velocidad inicial pasa de 3,0 × 10⁻⁴ a 1,2 × 10⁻³ mol/(L·s). ¿Cuál es el orden respecto a A?",
      answer: 2,
      tolerance: 0.01,
      unit: "",
      explain: "La velocidad se multiplica por 1,2 × 10⁻³ / 3,0 × 10⁻⁴ = 4 al duplicar A. Como 4 = 2², el orden respecto a A es 2.",
    },
    {
      kind: "choice",
      q: "Un informe del laboratorio da para una etapa k = 0,15 min⁻¹. ¿Qué te dicen esas unidades?",
      options: [
        "Que la reacción es de orden cero y va a ritmo fijo",
        "Que la reacción es de segundo orden en el reactivo",
        "Que la reacción es de primer orden o de seudoprimer orden",
        "Que la constante no depende de la temperatura de la masa",
      ],
      answer: 2,
      explain: "Una k en 1/tiempo corresponde a orden global 1, también cuando otro reactivo va en exceso (seudoprimer orden). En orden 0 serían mol/(L·min) y en orden 2, L/(mol·min).",
    },
    {
      kind: "number",
      q: "Una reacción de primer orden tiene k = 0,1 min⁻¹. ¿Cuál es su vida media? (ln 2 = 0,693)",
      answer: 6.93,
      tolerance: 0.01,
      unit: "min",
      explain: "Vida media = 0,693 / k = 0,693 / 0,1 = 6,93 min.",
    },
    {
      kind: "number",
      q: "Al acabar una adición queda un 4 % de reactivo y la reacción sigue, de primer orden, con una vida media de 7 min. ¿Cuántos minutos hacen falta para llegar al 0,5 %?",
      answer: 21,
      tolerance: 0.01,
      unit: "min",
      explain: "De 4 % a 2 %, a 1 % y a 0,5 % son tres vidas medias: 3 × 7 = 21 min.",
    },
    {
      kind: "number",
      q: "Una reacción de segundo orden empieza con [A]₀ = 0,40 mol/L y tiene k = 0,050 L/(mol·min). ¿Cuál es su primera vida media?",
      answer: 50,
      tolerance: 0.01,
      unit: "min",
      explain: "En segundo orden, vida media = 1 / (k × [A]₀) = 1 / (0,050 × 0,40) = 50 min. La siguiente mitad tardará el doble.",
    },
    {
      kind: "number",
      q: "En una hidrogenación frenada por la entrada del gas, el sustrato baja a ritmo fijo de 0,12 mol/(L·h) desde 0,90 mol/L. ¿Qué concentración queda a las 5 h?",
      answer: 0.3,
      tolerance: 0.01,
      unit: "mol/L",
      explain: "Orden cero: [A] = [A]₀ − k × t = 0,90 − 0,12 × 5 = 0,3 mol/L.",
    },
    {
      kind: "choice",
      q: "Con las muestras de IPC de un lote, el laboratorio calcula [A], ln [A] y 1/[A]. Con muestras cada hora, los saltos de ln [A] son casi iguales y los de las otras dos columnas no. ¿Qué concluye?",
      options: [
        "Que la reacción es de primer orden y la pendiente da −k",
        "Que la reacción es de orden cero porque la cola se frena",
        "Que la reacción es de segundo orden por ser dos reactivos",
        "Que no se puede saber el orden sin velocidades iniciales",
      ],
      answer: 0,
      explain: "Si ln [A] forma una recta con el tiempo, la reacción es de primer orden y la pendiente vale −k. En orden 0 la recta la da [A] y en orden 2, 1/[A].",
    },
    {
      kind: "number",
      q: "Se cargan 0,30 kg de paladio (106,42 g/mol) para hidrogenar 1000 mol de sustrato. ¿Qué porcentaje molar de paladio es?",
      answer: 0.28,
      tolerance: 0.02,
      unit: "% molar",
      explain: "Moles de paladio = 300 / 106,42 = 2,82 mol. Porcentaje molar = 2,82 / 1000 × 100 = 0,28 % molar.",
    },
    {
      kind: "choice",
      q: "Con el catalizador en su tercer uso, como permite el proceso, el IPC tarda 13 h en cumplir; con catalizador nuevo tardaba 10 h. ¿Qué es lo más razonable?",
      options: [
        "Subir la temperatura por tu cuenta para recuperar las 3 horas",
        "Añadir catalizador nuevo encima para que vuelva a ir rápido",
        "Desechar el lote, porque el catalizador ya no sirve de nada",
        "Anotarlo: es la pérdida de actividad prevista por la vida útil",
      ],
      answer: 3,
      explain: "Que cada uso tarde algo más es la pérdida de actividad esperada; cuántos usos se permiten lo fija el proceso validado. Se anota y, si se sale de lo previsto, se avisa; no se cambian condiciones ni cargas por tu cuenta.",
    },
    {
      kind: "choice",
      q: "¿Por qué se guarda, pesa e identifica el catalizador de paladio gastado en lugar de tirarlo con la basura?",
      options: [
        "Porque así el catalizador se regenera solo dentro del bidón",
        "Porque su metal se recupera: es estratégico y la ley prevé la R08",
        "Porque el paladio gastado ya no es pirofórico y se puede almacenar",
        "Porque ICH Q3D obliga a reutilizarlo en el lote siguiente",
      ],
      answer: 1,
      explain: "El Reglamento (UE) 2024/1252 incluye los metales del grupo del platino entre las materias primas estratégicas y la Ley 7/2022 tiene la operación R08 de valorización de componentes de catalizadores. El peso cierra el balance del metal.",
    },
  ],
};
