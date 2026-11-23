import type { Lesson } from "./types";

export const estadisticaLaboratorioAFondo: Lesson = {
  slug: "estadistica-laboratorio-a-fondo",
  level: 6,
  order: 9.7,
  title: "Estadística del laboratorio a fondo: comparar, aceptar y rechazar resultados",
  titleEn: "Laboratory statistics in depth: comparing, accepting and rejecting results",
  minutes: 40,
  summary:
    "La campana de Gauss, el intervalo de confianza con la t de Student, las pruebas t (frente a un valor de referencia, dos medias y datos pareados) y la prueba F, las pruebas de valores atípicos de Grubbs y Dixon y por qué la FDA no deja usarlas para invalidar un ensayo químico, cuántas réplicas hacen falta, el método de adiciones estándar y los gráficos de control del laboratorio. Todo con ejemplos resueltos para hoja de cálculo.",
  body: `
La media, la desviación estándar (s) y la RSD (desviación estándar relativa) ya las calculaste paso a paso en [Metrología a fondo: error, incertidumbre, trazabilidad y calibración](/leccion/metrologia-a-fondo) y en [Cálculo y expresión de resultados a fondo: cifras significativas, redondeo, base seca y comparación con la especificación](/leccion/calculo-de-resultados-a-fondo). Aquí das el paso siguiente: usar esos números para **decidir**. Los números de todas las cuentas son **valores de ejemplo**.

### La campana: por qué los resultados se reparten así
Si analizas muchas veces la misma muestra homogénea, cada resultado lleva un poco de error aleatorio. Si dibujas cuántas veces sale cada valor, aparece una campana: la **distribución normal** (*normal distribution*) o campana de Gauss.

El manual de estadística de los laboratorios de la FDA (*Food and Drug Administration*, la agencia del medicamento de Estados Unidos) (*ORA Laboratory Manual*, volumen III, sección 4, revisión de octubre de 2022) resume sus propiedades:

- Queda definida por dos números: el valor verdadero (μ, se lee «mu») y la desviación estándar verdadera (σ, «sigma»).
- Pasarse es tan probable como quedarse corto, y los errores grandes son menos probables que los pequeños.
- La curva nunca toca el eje: un resultado muy alejado es raro, pero no imposible.

Y la regla que más vas a usar:

| Distancia a la media | Parte de los resultados dentro |
|---|---|
| ± 1σ | 68 % |
| ± 1,96σ (unas 2σ) | 95 % |
| ± 3σ | 99,7 % |

Como los sacos de 25 kg de una ensacadora: casi todos cerca de 25, pocos lejos y casi ninguno muy lejos.

### De pocos datos a una conclusión: la t de Student
Esa tabla vale si conoces σ, y eso exige muchísimos datos. Con 3, 5 o 6 réplicas solo tienes s, una **estimación** de σ. El manual de la FDA explica que entonces los límites de confianza se **ensanchan** con un factor, t, de la **distribución t de Student** (*Student's t distribution*), que depende de la confianza y del número de datos.

El número de datos entra como **grados de libertad** (*degrees of freedom*, gl): para una media, n − 1. Valores críticos de t para el 95 % (bilateral), recalculados con Python (biblioteca SciPy):

| gl | 1 | 2 | 3 | 4 | 5 | 6 | 9 | 19 | infinitos |
|---|---|---|---|---|---|---|---|---|---|
| t | 12,706 | 4,303 | 3,182 | 2,776 | 2,571 | 2,447 | 2,262 | 2,093 | 1,960 |

Con pocos datos, t es mucho mayor que 1,96: es el precio de no conocer σ.

El **intervalo de confianza** (*confidence interval*) de la media es:

> media ± t × s / √n

La guía ICH Q2(R2) pide dar la exactitud y la precisión de un método con un intervalo de confianza del 100(1 − α) % (con α = 0,05, del 95 %).

**Ejercicio resuelto 1.** Cinco réplicas de riqueza: 99,2 · 99,6 · 99,4 · 99,8 · 99,5 %.

1. Media: 497,5 / 5 = **99,50 %**.
2. Diferencias con la media al cuadrado: 0,09 · 0,01 · 0,01 · 0,09 · 0. Suma: 0,20. Entre n − 1 = 4: 0,05. Raíz: **s = 0,224 %**.
3. t con 4 gl: 2,776.
4. Semiancho: 2,776 × 0,224 / √5 = **0,28 %**.
5. Intervalo: de **99,22 a 99,78 %**.

Si hubieras usado 1,96 en vez de t, saldría ± 0,20 %: un intervalo más estrecho de lo que permiten cinco datos.

**En la hoja de cálculo** (datos en A1:A5): =PROMEDIO(A1:A5), =DESVEST.M(A1:A5), =CONTAR(A1:A5) y, para t, =DISTR.T.INV(0,05;4), que da la t bilateral (en inglés, TINV; la versión moderna es T.INV.2T). Los nombres en español cambian entre versiones y programas: comprueba el tuyo con la tabla (con 4 gl, 2,776).

### Cómo razona una prueba de significación
Todas siguen el esquema de un juicio:

1. **Hipótesis nula** (*null hypothesis*): «no hay diferencia»; lo observado es solo azar. Es la presunción de inocencia.
2. Se calcula un número con los datos: el **estadístico** (t, F, G…).
3. Se compara con un **valor crítico** para un **nivel de significación** (*significance level*) fijado antes, normalmente α = 0,05: un 5 % de riesgo de ver una diferencia que no existe.
4. Si lo **supera**, la diferencia es **significativa**: demasiado grande para ser azar.

«No significativo» no quiere decir «igual»: con esos datos no se puede demostrar la diferencia. Y «significativo» no quiere decir «importante»: una diferencia de 0,05 % puede ser real e irrelevante frente a la especificación. Si la hoja de cálculo da la **probabilidad** (*p-value*), menor que 0,05 es significativo al 5 %.

### Prueba t frente a un valor de referencia
Sirve para saber si un método tiene **sesgo** (*bias*): se analiza una muestra de valor conocido, como un material de referencia, y se compara la media con ese valor.

> t = |valor de referencia − media| / (s / √n),  con n − 1 gl

**Ejercicio resuelto 2.** Muestra de control con valor asignado 99,80 %. Seis resultados: 99,5 · 99,6 · 99,4 · 99,7 · 99,5 · 99,6 %.

1. Media 99,55 %; s = 0,105 %.
2. s / √n = 0,105 / 2,449 = 0,0428.
3. t = (99,80 − 99,55) / 0,0428 = **5,84**.
4. t crítico, 5 gl: 2,571.

5,84 > 2,571: el método da **significativamente de menos**, unos 0,25 puntos. Como las réplicas son muy precisas, la prueba detecta un sesgo tan pequeño. Toca buscar la causa: patrón, dilución, integración.

### Prueba F: ¿repiten igual de bien?
Para comparar la **precisión** de dos series (analistas, equipos, métodos) se usa la **prueba F** (*F-test*): el cociente de sus varianzas (s²), con la mayor arriba.

> F = s² mayor / s² menor,  con (n₁ − 1) y (n₂ − 1) gl

Si no sabes de antemano cuál debería ser mejor, la prueba es bilateral y se busca F al 0,025 por arriba. Para 5 y 5 gl, F crítico = **7,15** (recalculado; con una sola cola al 0,05 serían 5,05). En la hoja: =INV.F.CD(0,025;5;5).

### Prueba t de dos medias
Dos series independientes de la misma muestra homogénea. Si la prueba F no ve diferencia de precisión, se juntan las dos s en una **s combinada** (*pooled standard deviation*):

> s_p = √{[(n₁ − 1)·s₁² + (n₂ − 1)·s₂²] / (n₁ + n₂ − 2)}
>
> t = |media₁ − media₂| / [s_p × √(1/n₁ + 1/n₂)],  con n₁ + n₂ − 2 gl

**Ejercicio resuelto 3.** La analista A obtiene 99,3 · 99,6 · 99,5 · 99,4 · 99,7 · 99,5 % y el analista B, 99,7 · 99,9 · 99,6 · 100,0 · 99,8 · 99,7 %.

1. A: media 99,50 %, s² = 0,0200. B: media 99,78 %, s² = 0,0217.
2. F = 0,0217 / 0,0200 = **1,08**, menor que 7,15: precisión equivalente.
3. s_p = √[(5 × 0,0200 + 5 × 0,0217) / 10] = 0,144 %.
4. t = 0,283 / (0,144 × √(1/6 + 1/6)) = 0,283 / 0,0833 = **3,40**.
5. t crítico, 10 gl: 2,228. 3,40 > 2,228: **diferencia significativa**.

Repiten igual de bien, pero uno de los dos tiene sesgo. Es lo que se mira en una precisión intermedia o en una transferencia ([Validación de métodos analíticos a fondo](/leccion/validacion-de-metodos-a-fondo)). Si la F sí sale significativa, se usa una variante para varianzas distintas. La función PRUEBA.T da la probabilidad y pide el tipo: 1 pareada, 2 igual varianza, 3 varianza distinta.

### Datos pareados: misma muestra, dos métodos
A veces cada muestra se mide **con los dos métodos**. Entonces lo que importa es la **diferencia dentro de cada pareja**, y se aplica la t de una sola serie a esas diferencias:

> t = media de las diferencias / (s de las diferencias / √n),  con n − 1 gl

**Ejercicio resuelto 4.** En planta hay una termobalanza (un analizador rápido de humedad) junto al secadero, y se quiere saber si da lo mismo que el método oficial de estufa del laboratorio. Seis muestras de distintos momentos del secado, en %:

| Muestra | Estufa | Termobalanza | Diferencia |
|---|---|---|---|
| 1 | 0,42 | 0,38 | 0,04 |
| 2 | 1,15 | 1,08 | 0,07 |
| 3 | 2,30 | 2,21 | 0,09 |
| 4 | 0,78 | 0,74 | 0,04 |
| 5 | 3,05 | 2,93 | 0,12 |
| 6 | 1,60 | 1,55 | 0,05 |

1. Media de las diferencias: 0,41 / 6 = 0,0683 %; s = 0,0319 %.
2. t = 0,0683 / (0,0319 / √6) = **5,25**. t crítico con 5 gl: 2,571.

La termobalanza da **siempre algo de menos**, y es significativo. Tratando las columnas como series independientes, t saldría 0,12 y no verías nada: las muestras son tan distintas (de 0,4 a 3 %) que esa dispersión tapa la diferencia. Emparejar la quita del medio.

### Valores atípicos: Grubbs y Dixon
Un **valor atípico** (*outlier*) es un resultado muy alejado del resto de su serie. Hay pruebas para decir si se aleja «demasiado».

**Prueba de Grubbs** (*Grubbs' test*): distancia del dato sospechoso a la media, medida en desviaciones estándar.

> G = |dato sospechoso − media| / s

**Prueba de Dixon** (*Dixon's Q test*): hueco entre el dato sospechoso y su vecino, dividido entre el recorrido (máximo menos mínimo).

> Q = hueco / recorrido

Valores críticos al 95 %, buscando el dato más extremo por cualquier lado (Grubbs, recalculados con su fórmula a partir de t y comprobados por simulación; Dixon, por simulación con dos millones de series al azar):

| n | 3 | 4 | 5 | 6 | 7 | 8 | 10 |
|---|---|---|---|---|---|---|---|
| G crítico | 1,154 | 1,481 | 1,715 | 1,887 | 2,020 | 2,127 | 2,290 |
| Q crítico | 0,97 | 0,83 | 0,71 | 0,63 | 0,57 | | |

En la hoja, con n en B1: t es \`=DISTR.T.INV(0,05/B1;B1-2)\` y, con esa t en B2, G crítico es \`=(B1-1)/RAIZ(B1)*RAIZ(B2^2/(B1-2+B2^2))\`.

**Ejercicio resuelto 5.** Cuatro réplicas: 99,6 · 99,8 · 99,7 · 101,9 %.

- Media 100,25 %; s = 1,103 %. G = (101,9 − 100,25) / 1,103 = **1,50**, mayor que 1,481.
- Q = (101,9 − 99,8) / (101,9 − 99,6) = 2,1 / 2,3 = **0,91**, mayor que 0,83.

Las dos pruebas dicen que 101,9 es atípico. ¿Se puede tirar? **En un ensayo químico de liberación, no por eso.**

### Lo que dice la FDA sobre las pruebas de atípicos
La guía de la FDA *Investigating Out-of-Specification (OOS) Test Results for Pharmaceutical Production* (revisión 1, mayo de 2022, la vigente según la página de la FDA revisada el 1 de agosto de 2024) les dedica un apartado. Traducido:

- Un atípico puede venir de un fallo al aplicar el método **o de la variabilidad de la muestra**. «Nunca debe suponerse que la causa de un atípico es un error del procedimiento de ensayo, y no la variabilidad propia de la muestra».
- Su uso se decide **de antemano** en un procedimiento: qué prueba, con qué parámetros y con cuántos resultados como mínimo.
- En **ensayos químicos validados** con poca variabilidad y muestra homogénea, la prueba de atípicos «es solo un análisis estadístico de los datos». «No identificará la causa de una observación extrema y, por tanto, no debe usarse para invalidar el resultado sospechoso». Solo sirve **como información**, para ver cuánto se aleja el dato de la media. Una nota la apoya en una sentencia de 1993 de un tribunal federal de Estados Unidos (caso Barr Laboratories).
- En ensayos **biológicos**, muy variables, puede ser apropiada; la guía remite al capítulo 111 de la Farmacopea de Estados Unidos (USP), que avisa de que rechazar observaciones solo por su tamaño, sin investigar la causa, debe hacerse con moderación.
- **No se aplican** cuando lo que se mide es la variabilidad del producto (uniformidad de contenido, disolución): el dato «raro» puede ser real.

La estadística dice **que** un dato es raro, no **por qué**. Si el 101,9 % salió así porque una parte del lote es distinta, tirarlo esconde justo lo que había que ver. Un dato se invalida solo con un error concreto encontrado y documentado, como verás en [Resultados fuera de especificación (OOS) a fondo](/leccion/oos-a-fondo).

### ¿Cuántas réplicas hacen falta?
El semiancho del intervalo, t × s / √n, baja por dos lados al subir n: crece √n y baja t. Con s = 0,30 %:

| n | 2 | 3 | 4 | 6 | 7 | 10 | 20 |
|---|---|---|---|---|---|---|---|
| Semiancho (%) | 2,70 | 0,75 | 0,48 | 0,32 | 0,28 | 0,22 | 0,14 |

Con dos réplicas, t = 12,706: la media apenas dice nada. De 2 a 4 réplicas se gana muchísimo; de 10 a 20, poco. Se busca la menor n con t × s / √n ≤ E, siendo E el semiancho que quieres; como t depende de n, se prueba fila a fila.

**Ejercicio resuelto 6.** s = 0,30 % y quieres E ≤ 0,30 %. Con n = 6: 2,571 × 0,30 / 2,449 = 0,315: no llega. Con n = 7: 2,447 × 0,30 / 2,646 = 0,277: sí. Hacen falta **7 réplicas**.

Hay mínimos escritos: la guía ICH Q2(R2) (Consejo Internacional de Armonización, *International Council for Harmonisation*) pide, para la repetibilidad, al menos 9 determinaciones en el intervalo (3 concentraciones por 3 réplicas) o al menos 6 al 100 %. Y con 3 datos, G nunca puede pasar de (n − 1)/√n = 1,155, con un crítico de 1,154: la prueba de Grubbs casi nunca decide nada. Por eso la FDA pide fijar el mínimo en el procedimiento.

### Adiciones estándar: cuando la muestra estorba
A veces la muestra disuelta no responde igual que un patrón en disolvente limpio: sales o restos del producto frenan o ayudan a la señal. Es el **efecto matriz** (*matrix effect*). El manual de análisis elemental de la FDA (*Elemental Analysis Manual*, sección 3.6, versión 3.0 de 2021) dice que, ante una interferencia de matriz, lo habitual es diluir y repetir o usar **adiciones estándar** (*standard additions*). Su ejemplo: en un queso con mucha sal, la pendiente de la recta de adiciones del plomo sale en torno al 75 % de la de un patrón en ácido nítrico.

La idea: se añade patrón en cantidades conocidas **a porciones de la propia muestra**, que así sufre la misma matriz. Se dibuja señal frente a cantidad añadida y se prolonga la recta hacia atrás hasta señal cero: la distancia de ese corte al origen es lo que traía la muestra. Si la señal es proporcional a lo que hay en el matraz, señal = b × (x₀ + añadido). Sin adición, la señal es b × x₀, que es la ordenada en el origen a. Por tanto:

> x₀ = ordenada en el origen / pendiente

**Ejercicio resuelto 7.** Paladio residual en un principio activo (API) ficticio, por absorción atómica. Se digieren 0,500 g y se llevan a 50,0 mL. Se toman cuatro porciones de 10,0 mL, se les añade patrón y se enrasan a 20,0 mL (factor 2). Concentración añadida en el matraz (µg/L) y absorbancia: 0 y 0,062; 5 y 0,118; 10 y 0,171; 15 y 0,229.

1. Recta por mínimos cuadrados (=PENDIENTE y =INTERSECCION.EJE en la hoja): pendiente b = 0,01108 por µg/L; ordenada a = 0,0619; r = 0,9999.
2. x₀ = 0,0619 / 0,01108 = **5,59 µg/L** en el matraz.
3. En la disolución digerida: 5,59 × 2 = 11,17 µg/L. En 50,0 mL: 11,17 × 0,0500 = 0,559 µg.
4. En el sólido: 0,559 µg / 0,500 g = **1,1 µg/g = 1,1 ppm**.

Con un patrón en ácido de pendiente 0,0148 (la de la muestra es el 75 %), habría salido 0,84 ppm: un 25 % de menos sin aviso.

El manual de la FDA pone condiciones: todas las disoluciones, con sus adiciones, dentro del intervalo lineal; r de al menos 0,995 en esos métodos; y avisa de que hay un límite al efecto matriz que las adiciones pueden corregir. Su coste: una recta por muestra.

### Gráficos de control del laboratorio
En [Resultados fuera de especificación (OOS) a fondo](/leccion/oos-a-fondo) verás el gráfico de control de los resultados de los lotes. El laboratorio usa además otro para **vigilarse a sí mismo**: en cada serie analiza una **muestra de control** (*control sample*) estable y homogénea. Si el método cambia, se ve ahí antes que en los lotes. La guía de la Organización Mundial de la Salud (OMS) para laboratorios de control (TRS 1052, anexo 4, 6.71) cita los gráficos de control entre las formas de asegurar la validez de los resultados.

El manual de estadística de la FDA lo construye así:

- **Línea central**: media de al menos 10 resultados previos, mejor 20.
- **Límites interiores**, de aviso: media ± 2s. Ahí caen el 95 % de los resultados; salir es un aviso de posible sesgo.
- **Límites exteriores**, de acción: media ± 3s. Salir indica sesgo y pide acción correctora.
- Aunque todo esté dentro, un patrón no aleatorio también avisa: por ejemplo, **ocho puntos seguidos** por encima o por debajo de la media.

**Ejercicio resuelto 8.** Veinte resultados de la muestra de control, con media 99,565 % y s = 0,080 %. Aviso: de 99,41 a 99,73 %. Acción: de 99,33 a 99,81 %.

- Sale 99,76 %: entre aviso y acción. Se mira con atención la serie.
- Sale 99,85 %: fuera del límite de acción. Pide acción correctora: se busca la causa antes de seguir.
- Ocho series seguidas entre 99,58 y 99,70 %: dentro, pero todas sobre la media. Algo ha cambiado (un patrón nuevo, una columna) y se investiga.

### Lo que significa para ti en planta
Tú no harás estas pruebas, pero te tocan. Si un resultado de tu lote sale raro, nadie lo «quita» con Grubbs: se investiga, empezando por tu hoja de producción. Y si la muestra de control se sale del gráfico, tus resultados esperan: mejor eso que un número malo.

En planta y en el laboratorio manda siempre el procedimiento vigente (SOP): las pruebas, los niveles de significación y las réplicas son los que diga tu empresa.
`,
  plant: `
Lote ficticio FX-214 del intermedio LX-50. Hasta ahora, cada muestra del secadero de vacío SD-305 bajaba al laboratorio para la pérdida por secado en estufa, y el secadero esperaba casi una hora por resultado. Calidad estudia usar una termobalanza junto al equipo.

Durante tres lotes, tú tomas las muestras como dice la hoja, y cada una se reparte en dos: una para la termobalanza y otra, con su etiqueta, para la estufa del laboratorio. Anotas la hora, el punto de toma y el número de cada muestra en las dos hojas.

El laboratorio junta las parejas y hace una prueba t pareada: la termobalanza da de media 0,07 puntos menos, y la diferencia es significativa (valores de ejemplo). No es mucho, pero cerca de un límite de 0,5 % podría decir «cumple» cuando la estufa diría «no cumple». Calidad decide que, de momento, la termobalanza sirve para saber cuándo mandar la muestra, pero el resultado que decide sigue siendo el de la estufa, y lo pasa por control de cambios.

Semanas después, una muestra de LX-50 da en la estufa 0,62 %, cuando las otras dos réplicas daban 0,41 y 0,43 %. Un compañero comenta que «con Grubbs eso se quita». La jefa de turno le explica que no: el laboratorio abre la investigación, mira la balanza, la estufa y el cálculo, y te pregunta de qué punto del secadero tomaste esa muestra y si viste grumos. Tú lo tienes anotado.
`,
  batchRecord: `
En la hoja de producción (*batch record*) la estadística no se ve, pero tus anotaciones la hacen posible:

- **Cada muestra con su identificación**: equipo (p. ej. SD-305), punto de toma, fecha, hora y número de muestra. Sin esto no se pueden emparejar datos ni investigar un atípico.
- **Muestras divididas** para comparar métodos: la misma referencia en las dos partes y el destino de cada una.
- **Lecturas de un instrumento de planta** (como una termobalanza), tal cual salen, con su unidad y la identificación del equipo.
- **Todas las réplicas y repeticiones**, también las que parecen raras: nunca se borra un valor porque «se sale».
- **Observaciones** del aspecto de la muestra (grumos, color, zonas húmedas): pueden explicar un atípico.
- **Referencia del informe** del laboratorio y la conclusión al lado del número.
- **Firmas** de quien hace y, si es paso crítico, de quien verifica.
`,
  terms: [
    { es: "Distribución normal", en: "Normal distribution", def: "Curva en forma de campana que describe cómo se reparten los resultados cuando solo hay error aleatorio." },
    { es: "Grados de libertad", en: "Degrees of freedom", def: "Número de datos que quedan libres tras calcular lo necesario; para una media, n − 1." },
    { es: "Distribución t de Student", en: "Student's t distribution", def: "Distribución que ensancha los límites de confianza cuando σ se estima con pocos datos." },
    { es: "Intervalo de confianza", en: "Confidence interval", def: "Zona, media ± t × s / √n, donde con una confianza dada está la media verdadera." },
    { es: "Hipótesis nula", en: "Null hypothesis", def: "Supuesto de partida de una prueba: no hay diferencia y lo observado es solo azar." },
    { es: "Nivel de significación", en: "Significance level", def: "Riesgo aceptado de ver una diferencia que no existe; normalmente 0,05." },
    { es: "Prueba t", en: "t-test", def: "Compara una media con un valor de referencia o dos medias entre sí." },
    { es: "Datos pareados", en: "Paired data", def: "Parejas de resultados de la misma muestra medida de dos formas; se analizan sus diferencias." },
    { es: "Prueba F", en: "F-test", def: "Compara la precisión de dos series con el cociente de sus varianzas." },
    { es: "Valor atípico", en: "Outlier", def: "Resultado muy alejado del resto de su serie; puede ser un error o variabilidad real." },
    { es: "Prueba de Grubbs", en: "Grubbs' test", def: "Prueba de atípicos que mide la distancia del dato a la media en desviaciones estándar." },
    { es: "Prueba de Dixon", en: "Dixon's Q test", def: "Prueba de atípicos que divide el hueco del dato con su vecino entre el recorrido." },
    { es: "Adiciones estándar", en: "Standard additions", def: "Calibrado añadiendo patrón a la propia muestra para que sufra la misma matriz." },
    { es: "Gráfico de control", en: "Control chart", def: "Gráfico de resultados con una línea central y límites de aviso (2s) y de acción (3s)." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Cuatro réplicas de riqueza dan una media de 99,40 % con s = 0,25 %. El valor de t para el 95 % con 3 grados de libertad es 3,182. ¿Cuál es el semiancho del intervalo de confianza, en %, con dos decimales?",
      answer: 0.4,
      tolerance: 0.03,
      unit: "%",
      explain: "t × s / √n = 3,182 × 0,25 / 2 = 0,398, que se expresa 0,40 %: el intervalo va de 99,00 a 99,80 %.",
    },
    {
      kind: "choice",
      q: "Con tres réplicas, un compañero calcula el intervalo de confianza como media ± 1,96 × s / √n. ¿Qué falla?",
      options: [
        "Con s estimada de pocos datos hay que usar t, que con 2 gl vale 4,303",
        "Nada: 1,96 vale para cualquier número de réplicas",
        "Habría que dividir entre n y no entre √n",
        "El 1,96 solo se usa para impurezas, no para la riqueza",
      ],
      answer: 0,
      explain: "1,96 vale cuando se conoce σ. Con s calculada de pocos datos, el intervalo se ensancha con la t de Student: con 2 grados de libertad, 4,303.",
    },
    {
      kind: "number",
      q: "Una muestra de control tiene un valor asignado de 99,80 %. Cuatro resultados dan media 99,62 % y s = 0,12 %. ¿Cuánto vale t?",
      answer: 3,
      tolerance: 0.01,
      unit: "",
      explain: "t = (99,80 − 99,62) / (0,12 / √4) = 0,18 / 0,06 = 3. Es menor que el crítico con 3 gl, 3,182: con estos datos no se demuestra sesgo.",
    },
    {
      kind: "number",
      q: "El método A da s = 0,30 % y el método B, s = 0,12 %, con seis réplicas cada uno. ¿Cuánto vale F?",
      answer: 6.25,
      tolerance: 0.01,
      unit: "",
      explain: "F = 0,30² / 0,12² = 0,09 / 0,0144 = 6,25. Es menor que el crítico bilateral para 5 y 5 gl, 7,15: no se demuestra diferencia de precisión.",
    },
    {
      kind: "choice",
      q: "Ocho muestras del secadero, cada una de un momento distinto del secado, se miden con la termobalanza y con la estufa. ¿Qué prueba corresponde?",
      options: [
        "Una prueba F entre las dos columnas de resultados",
        "Una prueba t pareada con las ocho diferencias",
        "Una prueba de Grubbs sobre la columna de la estufa",
        "Una prueba t de dos medias independientes",
      ],
      answer: 1,
      explain: "Cada muestra se mide con los dos métodos: se analizan las diferencias de cada pareja. Tratarlas como series independientes deja que la variación entre muestras tape la diferencia entre métodos.",
    },
    {
      kind: "number",
      q: "Cinco réplicas: 98,9 · 99,5 · 99,6 · 99,4 · 99,5 %. La media es 99,38 % y s = 0,2775 %. ¿Cuánto vale G de Grubbs para 98,9, con dos decimales?",
      answer: 1.73,
      tolerance: 0.02,
      unit: "",
      explain: "G = (99,38 − 98,9) / 0,2775 = 1,73, mayor que el crítico para n = 5, 1,715. Estadísticamente es atípico, pero eso no basta para invalidarlo.",
    },
    {
      kind: "choice",
      q: "En un ensayo de uniformidad de contenido, una unidad sale muy distinta de las demás y la prueba de Grubbs la marca como atípica. ¿Qué dice la guía de la FDA?",
      options: [
        "Se quita y se recalcula la media sin ella",
        "Se repite solo esa unidad hasta que se parezca",
        "Las pruebas de atípicos no se aplican: puede ser un producto no uniforme",
        "Se promedia con la unidad anterior para suavizarla",
      ],
      answer: 2,
      explain: "La guía dice que las pruebas de atípicos no tienen aplicación cuando se evalúa la variabilidad del producto, como la uniformidad de contenido: el dato raro puede ser real.",
    },
    {
      kind: "number",
      q: "En unas adiciones estándar, la recta de señal frente a µg/L añadidos tiene ordenada en el origen 0,084 y pendiente 0,021 por µg/L. ¿Qué concentración traía la disolución medida, en µg/L?",
      answer: 4,
      tolerance: 0.01,
      unit: "µg/L",
      explain: "x₀ = ordenada / pendiente = 0,084 / 0,021 = 4 µg/L. Luego se deshacen las diluciones para llegar a la muestra sólida.",
    },
    {
      kind: "choice",
      q: "El gráfico de control de la muestra de control tiene media 99,57 %, aviso a ± 2s (99,41 a 99,73 %) y acción a ± 3s (99,33 a 99,81 %). Hoy sale 99,76 %. ¿Qué es?",
      options: [
        "Un resultado fuera de especificación del lote",
        "Un resultado fuera de control: se para todo",
        "Un resultado normal que no merece atención",
        "Un aviso: entre los límites de 2s y 3s, se vigila la serie",
      ],
      answer: 3,
      explain: "Está fuera de los límites de aviso (2s) pero dentro de los de acción (3s). El manual de la FDA lo trata como aviso de posible sesgo; salir de 3s pide acción correctora.",
    },
    {
      kind: "number",
      q: "Un método tiene s = 0,20 % y quieres que el semiancho del intervalo del 95 % no pase de 0,25 %. Con t = 3,182 (n = 4) y t = 2,776 (n = 5), ¿cuántas réplicas necesitas como mínimo?",
      answer: 5,
      tolerance: 0,
      unit: "réplicas",
      explain: "Con n = 4: 3,182 × 0,20 / 2 = 0,318, no llega. Con n = 5: 2,776 × 0,20 / 2,236 = 0,248, sí. Hacen falta 5 réplicas.",
    },
  ],
};
