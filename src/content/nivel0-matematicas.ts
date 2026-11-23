import type { Lesson } from "./types";

export const matematicasAFondo: Lesson = {
  slug: "matematicas-a-fondo",
  level: 0,
  order: 2,
  title: "Las cuentas de planta a fondo: porcentajes, proporciones, redondeos y gráficas",
  titleEn: "Plant calculations in depth: percentages, proportions, rounding and graphs",
  minutes: 40,
  summary:
    "Decimales y la coma, fracciones y porcentajes desde cero, regla de tres directa e inversa, potencias de diez, ppm y prefijos, despejar una fórmula, redondeo y cifras significativas, medias y rangos, leer una gráfica, la calculadora y qué hacer cuando una cuenta de la hoja no cuadra.",
  body: `
En «Matemáticas útiles para planta» viste las cuatro herramientas básicas. Aquí se practican despacio, con todos los pasos y muchos ejemplos de planta. Tapa cada solución e inténtalo antes.

### Los decimales y la coma
En 12,5 kg hay 12 kilos y medio más; lo que los separa es el **separador decimal** (*decimal separator*). El Real Decreto 2032/2009, de unidades legales de medida, admite la coma o el punto, prefiere la coma y pide que, entre +1 y −1, el separador vaya precedido de cero: **0,25**, nunca «,25».

Las calculadoras y muchos programas usan el **punto**: 0,25 se teclea 0.25. En una hoja de cálculo depende de la configuración regional del ordenador.

Para operar:

- **Sumar y restar**: se alinean las comas. 12,5 + 0,75 + 3,125 = **16,375 kg**.
- **Multiplicar** por un número menor que 1 da un resultado **más pequeño**: 2,5 × 0,4 = 1,0.
- **Dividir** entre un número menor que 1 da un resultado **más grande**: 7,2 / 0,5 = **14,4**.

**Números grandes.** El real decreto dice que pueden repartirse en grupos de tres cifras separados por un espacio, que esos grupos **no se separan nunca por puntos ni por comas** y que, con solo cuatro cifras, lo usual es no separar. Se escribe 12 500 kg o 12500 kg, nunca «12.500 kg». En un registro, «1.250 kg» puede leerse como mil doscientos cincuenta o, con la convención inglesa, como uno coma veinticinco: un error de mil veces. Entre número y unidad va siempre un espacio: 25 °C, 3 %, 120 L.

### Fracciones desde cero
Una **fracción** (*fraction*) es una división: 3/4, «tres cuartos», es 3 entre 4, tres trozos de una pizza cortada en cuatro. Para pasarla a decimal se divide (3 / 4 = 0,75) y para pasarla a porcentaje se multiplica por 100 (75 %).

| Fracción | Decimal | Porcentaje |
|---|---|---|
| 1/2 | 0,5 | 50 % |
| 1/4 | 0,25 | 25 % |
| 3/4 | 0,75 | 75 % |
| 1/8 | 0,125 | 12,5 % |
| 1/3 | 0,333… | 33,3 % |

El tercio no acaba nunca: se redondea solo al final.

### Porcentajes: qué es un 1 %
**Por ciento** (*percent*) es «de cada cien». El real decreto lo dice así: el símbolo % representa el número 0,01. Es decir, **1 % = 1/100 = 0,01** y 12 % = 0,12.

Casi todas las cuentas son una de estas:

| Pregunta | Cuenta |
|---|---|
| ¿Cuánto es el p % de un total? | parte = total × p / 100 |
| ¿Qué porcentaje es la parte del total? | p = parte / total × 100 |
| Sé la parte y el %: ¿cuál es el total? | total = parte / (p / 100) |
| ¿Cuánto ha cambiado? | cambio % = (nuevo − viejo) / viejo × 100 |

El **total** (la base) es aquello de lo que hablas: el lote, la muestra, la consigna. Con la base equivocada, el porcentaje sale mal.

### Diez ejemplos de planta con porcentajes
Todos los valores son de ejemplo.

1. **Humedad de una torta.** 250 kg de torta con una pérdida por secado (*loss on drying*, LOD) del 12 %. Disolvente: 250 × 12 / 100 = **30 kg**; sólido seco: **220 kg**.
2. **Pureza.** 150 kg de producto bruto al 96,5 %: 150 × 0,965 = **144,75 kg** de producto puro y 5,25 kg de impurezas.
3. **Rendimiento.** Esperados 182 kg, obtenidos 167,4 kg: 167,4 / 182 × 100 = 91,978… = **92,0 %**.
4. **Concentración.** 40 kg de hidróxido de sodio en 500 kg de disolución: 40 / 500 × 100 = **8 % p/p**. La base es la disolución, no el agua.
5. **Tolerancia de carga.** 320,0 kg ± 1 %. El 1 % de 320 son 3,2 kg: de **316,8** a **323,2 kg**. 323,5 kg está fuera.
6. **Desviación respecto a la consigna.** Consigna 400 kg/h, lectura 372 kg/h: (372 − 400) / 400 × 100 = **−7 %**; el signo menos dice que va por debajo. Con grados Celsius no se hacen porcentajes, porque 0 °C no es «nada de temperatura»: la tolerancia se da en grados, «65 ± 2 °C».
7. **Total a partir de la parte.** Necesitas 60 kg de sólido seco y la torta tiene un 25 % de disolvente, o sea un 75 % de sólido: 60 / 0,75 = **80 kg** de torta.
8. **Aumento.** Un lote se amplía un 20 %; el agua pasa de 850 L a 850 × 1,20 = **1020 L**.
9. **Rendimientos encadenados.** Etapa 1 al 90 % y etapa 2 al 85 %: no se suman ni se promedian, se multiplican. 0,90 × 0,85 = **76,5 %**.
10. **Puntos porcentuales.** Una impureza pasa de 0,08 % a 0,12 %: sube 0,04 **puntos porcentuales** (*percentage points*), pero en proporción sube (0,12 − 0,08) / 0,08 × 100 = **50 %**. Di cuál de las dos.

### El error típico: porcentajes de bases distintas
Dos porcentajes solo se suman si son **de la misma base**. Un caudal de 100 que sube un 10 % y luego baja un 10 % queda en 110 × 0,90 = **99**: el segundo 10 % es de 110. Si pierdes un 10 % en el filtro y un 15 % en el secadero, no pierdes un 25 %: te queda el 76,5 %. Si dudas, pasa a kilos: los kilos sí se suman.

### Proporciones y regla de tres
Dos cantidades son **directamente proporcionales** (*directly proportional*) si, cuando una se duplica, la otra también; **inversamente proporcionales** (*inversely proportional*) si, cuando una se duplica, la otra se queda en la mitad. Lo más seguro es **reducir a la unidad**: cuánto toca por cada uno, y luego multiplicar.

**Ejemplo 1. Escalar una receta (directa).** La receta es para 40 kg de materia prima A y pide 220 L de metanol y 12,0 kg de reactivo B. Tu lote lleva 52,5 kg de A. Factor: 52,5 / 40 = 1,3125. Metanol: 220 × 1,3125 = **288,75 L**. Reactivo B: 12,0 × 1,3125 = **15,75 kg**.

**Ejemplo 2. Trasvase con más caudal (inversa).** Pasar 2400 L a 60 L/min lleva 2400 / 60 = 40 min; a 80 L/min, 2400 / 80 = **30 min**.

**Ejemplo 3. Cargas de centrífuga (inversa).** 900 kg de suspensión en cargas de 150 kg son 6 cargas; en cargas de 180 kg, 900 / 180 = **5 cargas**.

**Ejemplo 4. Dilución (inversa).** 2 L de una disolución de 10 g/L llevados a 5 L con agua: la sal es la misma, 10 × 2 = 20 g, ahora en 5 L: **4 g/L**.

**Ejemplo 5. Mezcla 3:1.** 600 L de heptano y acetato de etilo «3:1 en volumen» son 4 partes de 600 / 4 = 150 L: **450 L** de heptano y **150 L** de acetato de etilo.

**Cuándo no es proporcional.** La regla de tres solo vale si la relación es una recta. No lo es en la **pérdida de carga** de una tubería, que crece más o menos con el cuadrado del caudal («Fluidos a fondo»); en los **ciclos de inertización**, donde cada ciclo multiplica el oxígeno por el mismo factor («Inertización a fondo: por qué, cuánto y cómo se calcula»); ni en el **secado**, donde las últimas décimas de humedad son las más lentas («El secado a fondo»).

### Potencias de diez y notación científica
Una **potencia de diez** (*power of ten*) dice cuántos ceros: 10³ = 1000, y un exponente negativo es dividir: 10⁻³ = 0,001. En **notación científica** (*scientific notation*) se escribe un número entre 1 y 10 por una potencia de diez: 2 500 000 = 2,5 × 10⁶ y 0,00035 = 3,5 × 10⁻⁴. Multiplicar por 10ⁿ mueve la coma n puestos a la derecha; por 10⁻ⁿ, a la izquierda.

Los **prefijos** (*prefixes*) son potencias de diez con nombre (tabla del real decreto):

| Prefijo | Símbolo | Factor |
|---|---|---|
| mega | M | 10⁶ = 1 000 000 |
| kilo | k | 10³ = 1000 |
| mili | m | 10⁻³ = 0,001 |
| micro | µ | 10⁻⁶ = 0,000 001 |

**M** es mega y **m** es mili: mil millones de veces menos. Y nunca se usan con el minuto, la hora ni el día.

Cinco conversiones:

1. 2,5 MJ = 2,5 × 10⁶ J = **2 500 000 J**.
2. 350 µg = 3,5 × 10⁻⁴ g = **0,35 mg**.
3. 0,045 kg = **45 g** = **45 000 mg**.
4. 750 mbar = **0,75 bar** = **75 kPa**, porque 1 bar = 100 000 Pa según el real decreto.
5. 12 mL = 12 × 10⁻³ L = **0,012 L**.

**Porcentaje, ppm y ppb.** Las tres son «partes de cada tantas»: % es 10⁻²; ppm (*parts per million*), 10⁻⁶; ppb (*parts per billion*), 10⁻⁹. La «b» es del *billion* inglés, mil millones; el billón español es un millón de millones. Equivalencias: 1 % = 10 000 ppm y 1 ppm = 1000 ppb. En masa, 1 ppm es 1 mg por kg. Ejemplos: 0,05 % = **500 ppm**; 3000 ppm = **0,3 %**; 25 ppb = **0,025 ppm**. Con % o ppm, el real decreto pide decir de qué magnitud hablas: en peso, en volumen.

### Despejar una incógnita
**Despejar** (*to solve for*) es dejar sola la letra que no conoces. Una fórmula es una balanza en equilibrio: lo que hagas a un lado, hazlo al otro. Lo que **multiplica** pasa al otro lado **dividiendo**, lo que **divide** pasa **multiplicando** y lo que **suma** pasa **restando**.

**Ejemplo 1. Q = m × cp × ΔT, despejar m.** Q es el calor que se da o se quita (en kJ); m, la masa; ΔT, cuántos grados sube o baja, y cp, el **calor específico** (*specific heat capacity*): la energía que hace falta para subir un grado un kilo de esa sustancia. Lo verás explicado despacio en «Energía, calor y temperatura: julios, kilovatios y calor específico», y la fórmula vuelve en «Calor de reacción y reacciones descontroladas» y en «Intercambio de calor y frío a fondo». ¿Cuánta agua (cp = 4,18 kJ/(kg·K)) calientas 25 °C con 50 000 kJ? Partes de m × 4,18 × 25 = 50 000. El 4,18 y el 25 pasan dividiendo: m = 50 000 / 104,5 = 478,47… = **478,5 kg**.

**Ejemplo 2. Despejar cp.** Con 30 000 kJ, 600 kg de un líquido suben 20 °C (valores de ejemplo): cp = Q / (m × ΔT) = 30 000 / 12 000 = **2,5 kJ/(kg·K)**.

**Ejemplo 3. Densidad = m / V** («Densidad: de litros a kilos»). Para 200 kg de tolueno (0,87 kg/L): V pasa multiplicando y la densidad dividiendo, V = 200 / 0,87 = **229,9 L**. La masa de 150 L de acetona (0,79 kg/L): m = 150 × 0,79 = **118,5 kg**.

**Ejemplo 4. C1 · V1 = C2 · V2** («Disoluciones y solubilidad a fondo»). Tienes 20 L a 30 g/L. Para dejarla a 5 g/L: V2 = 30 × 20 / 5 = **120 L**. Si la llevas a 80 L: C2 = 30 × 20 / 80 = **7,5 g/L**.

**Compruébalo** en la fórmula: 478,5 × 4,18 × 25 = 50 003 kJ, casi los 50 000.

### Redondeo y cifras significativas
**Redondear** (*to round*) es quitar cifras del final. La regla convencional: se mira la primera cifra que se quita; si es de 0 a 4, la anterior se queda igual, y si es de 5 a 9, sube uno.

1. 12,346 a dos decimales: se quita un 6, sube: **12,35**.
2. 0,0963 a dos decimales: sube el 9 y arrastra: **0,10**.
3. 7,95 a un decimal: **8,0**. El cero se escribe: dice que se da un decimal.
4. 99,449 a un decimal: **99,4**. Si redondeas a trozos (99,45 y luego 99,5) sale otro número: se redondea **una sola vez**.

Algunas normas tratan el 5 exacto de otra manera; vale la regla de tu procedimiento.

**Cifras significativas** (*significant figures*): las que informan de la medida. Los ceros de la izquierda no cuentan (0,0052 tiene dos) y los de la derecha tras la coma sí (25,0 tiene tres: dice «sé la décima»).

**No redondees en los pasos intermedios.** Si en la receta redondeas el factor 1,3125 a 1,3, salen 286 L de metanol en vez de 288,75 L. Se calcula con todo y se redondea solo el resultado final, a los decimales que pida la hoja.

**Para comparar con una especificación.** ICH Q3A(R2), la guía de impurezas en principios activos nuevos, pide dar los resultados con dos decimales por debajo del 1,0 % y con uno desde el 1,0 %, con las reglas convencionales de redondeo. La nota 2 de su anexo 2 añade que, para ver si se supera un umbral en %, el resultado se redondea **a los mismos decimales que el umbral** y se compara directamente. En sus ejemplos, con un umbral del 0,10 %, un resultado bruto de 0,0963 % se informa como 0,10 % y no lo supera; con uno del 0,15 %, un 0,1649 % se informa como 0,16 % y sí lo supera. Ese redondeo lo hace el laboratorio según su método («Cálculo y expresión de resultados»).

**En el registro, lo que marca el instrumento.** El vocabulario internacional de metrología (VIM) define la **resolución de un dispositivo visualizador** (*resolution of a displaying device*) como la menor diferencia entre indicaciones que se puede distinguir con sentido. Si la báscula muestra décimas y marca 125,3 kg, se anota **125,3 kg**: ni 125 (pierdes información) ni 125,30 (inventas una cifra). Si marca 125,0, se escribe 125,0. ICH Q7 pide que la hoja recoja los resultados reales de los parámetros críticos y los pesos y medidas de cada material.

### Medias, máximo, mínimo y rango
En un mantenimiento a 60–65 °C anotas la temperatura de masa cada 15 minutos (valores de ejemplo): 62,4 · 62,9 · 63,5 · 64,1 · 63,8 · 63,2 · 62,7 · 62,0 °C.

- **Media** (*mean*): suma entre número de lecturas. 504,6 / 8 = 63,075 = **63,1 °C**.
- **Máximo** (*maximum*) **64,1 °C** y **mínimo** (*minimum*) **62,0 °C**.
- **Rango** (*range*): 64,1 − 62,0 = **2,1 °C**.

**La media sola no basta**: puede esconder un pico de 66 °C; por eso se miran el máximo y el mínimo. Cuánto se separan los valores de la media lo mide la **desviación típica** (*standard deviation*), que verás en «Cálculo y expresión de resultados».

### Leer una gráfica
Antes que la curva, mira los **ejes** (*axes*): qué magnitud, qué **unidades** y qué **escala**. Un eje que no empieza en cero exagera los cambios. Las tendencias en pantalla se explican en «El sistema de control a fondo: pantallas, recetas y registro electrónico»; aquí, solo las cuentas.

- **Pendiente** (*slope*) = (y2 − y1) / (x2 − x1). Si el eje horizontal es el tiempo, es una **velocidad de cambio**: grados por minuto, humedad por hora.
- **Interpolar** (*to interpolate*) es estimar un valor entre dos puntos suponiendo que entre ellos la curva es recta: y = y1 + (y2 − y1) × (x − x1) / (x2 − x1).

**Ejemplo 1. Enfriamiento.** A las 09:00 la masa está a 78 °C y a las 09:40 a 46 °C. Pendiente = (46 − 78) / 40 = **−0,8 °C/min**. Hasta 30 °C faltan 16 °C: 16 / 0,8 = 20 min, hacia las 10:00 si el ritmo se mantiene (una previsión, no una medida).

**Ejemplo 2. Solubilidad.** Un producto ficticio QR-7 disuelve 3,2 g por 100 g de agua a 10 °C y 7,6 g a 30 °C (valores de ejemplo). A 25 °C: 3,2 + (7,6 − 3,2) × 15 / 20 = 3,2 + 3,3 = **6,5 g por 100 g**.

**Ejemplo 3. Secado.** La LOD en el secadero (valores de ejemplo): 18 % a 0 h, 9 % a 2 h, 3 % a 4 h, 1,2 % a 6 h y 0,6 % a 8 h. Al principio baja (18 − 9) / 2 = 4,5 % por hora; al final, solo 0,3 % por hora. ¿Cuándo pasa por el 2 %? Entre 4 y 6 h: 4 + (3 − 2) / (3 − 1,2) × 2 = **5,1 h**. El punto final lo decide el análisis.

### La calculadora
- **Tecla %**: cada modelo la trata a su manera; para el 15 %, multiplica por 0,15.
- **Paréntesis**: la calculadora multiplica y divide antes de sumar y restar. (5,000 − 4,880) / 5,000 × 100 = **2,4 %**; sin paréntesis, 5 − 4,88 / 5 da 4,024, un disparate.
- **Notación científica**: la tecla EXP (o ×10ˣ) ya incluye el «× 10». 3,5 × 10⁻⁴ se teclea 3.5 EXP −4. Si tecleas 10 EXP 4, entiende 10 × 10⁴ = 100 000.
- **Comprobar a ojo**: redondea los datos y calcula de cabeza el **orden de magnitud** (*order of magnitude*). 220 × 1,3125 es «unos 220 × 1,3, cerca de 290». Si sale 2887,5 o 28,9, has tecleado mal.

Errores típicos: coma por punto, dividir al revés (182 / 167,4), mezclar gramos y kilos y no mirar el signo.

### Las cuentas en GMP: se hacen y se verifican
ICH Q7, la guía de buenas prácticas para principios activos, pide que la instrucción maestra incluya la cuenta de cada carga para cada tamaño de lote cuando la cantidad no es fija; que las pesadas y medidas críticas tengan un testigo o un control equivalente; que en la hoja firmen quien hace y quien supervisa o comprueba cada paso crítico; y que se compare el rendimiento real con el esperado. De ahí las casillas «calculado por» y «verificado por»: quien verifica rehace la cuenta.

**Si una cuenta de la hoja no te cuadra**:

1. No la corrijas por tu cuenta ni sigas con «tu» número.
2. Rehazla despacio: quizá el error es tuyo.
3. Si sigue sin cuadrar, para ese paso y avisa a tu responsable.
4. La corrección se hace como pide ICH Q7: con fecha y firma, dejando legible lo escrito. Lo que se aparte de lo previsto se documenta («Desviaciones y CAPA a fondo»).

En planta manda siempre el procedimiento vigente (SOP): cuántos decimales, qué regla de redondeo y quién verifica lo dice él.
`,
  plant: `
Lote ficticio HB-118 del intermedio ficticio TZ-40 en el reactor RX-210. La receta está escrita para 40 kg de materia prima y pide 220 L de metanol; hoy la materia prima pesada en la báscula BS-06 es de 52,5 kg (valores de ejemplo).

Laura, operadora del turno, calcula el factor de escala: 52,5 / 40 = 1,3125. Para ir más deprisa lo redondea a 1,3 y anota 286 L de metanol.

Marcos, el operador que verifica, no mira el número: rehace la cuenta con la calculadora, sin redondear el factor, y le sale 220 × 1,3125 = 288,75 L. No tacha nada ni escribe encima. Avisa a Laura y al jefe de turno antes de empezar la carga.

El jefe de turno revisa la hoja: el procedimiento pide calcular con el factor completo y anotar el volumen con un decimal. La casilla se corrige como dice el procedimiento de documentación: una raya que deja leer 286 L, el valor correcto 288,8 L al lado, fecha, firma y el motivo, «error de redondeo en el factor». Laura carga 288,8 L desde el caudalímetro FI-212 y anota la lectura real del totalizador, 288,9 L, que está dentro de la tolerancia de la hoja.

Al final del turno, Marcos comprueba también el rendimiento de la etapa: 167,4 kg obtenidos frente a 182 kg esperados, un 92,0 %, dentro del intervalo esperado que da la hoja. Lo anota con su firma en «verificado por».
`,
  batchRecord: `
- Cálculos de cargas escalados al tamaño real del lote, con el factor de escala completo y el resultado con los decimales que pide la casilla.
- Casillas de «calculado por» y «verificado por», con firma y fecha: quien verifica rehace la cuenta.
- Pesadas y lecturas de caudalímetro tal como las da el instrumento, con su unidad y sin redondear de más ni de menos.
- Tolerancias de carga (por ejemplo ± 1 %) y comprobación de que la lectura real está dentro.
- Temperaturas, presiones y tiempos: valores reales, a veces con máximo y mínimo del periodo.
- Rendimiento de la etapa en %, comparado con el intervalo esperado.
- Resultados del laboratorio (humedad, pureza, impurezas) ya redondeados por el laboratorio según su método.
- Correcciones con raya que deja leer el valor original, fecha, firma y motivo; nunca tachones ni corrector.
- Referencia a la desviación si una cuenta o una lectura no cuadra con lo previsto.
`,
  terms: [
    { es: "Separador decimal", en: "Decimal separator", def: "Signo que separa la parte entera de la decimal; en España, preferiblemente la coma." },
    { es: "Fracción", en: "Fraction", def: "División escrita como dos números con una raya; 3/4 es 3 entre 4." },
    { es: "Porcentaje", en: "Percentage", def: "Partes de cada cien; el símbolo % equivale a 0,01." },
    { es: "Punto porcentual", en: "Percentage point", def: "Diferencia entre dos porcentajes; de 0,08 % a 0,12 % hay 0,04 puntos." },
    { es: "Proporcionalidad directa", en: "Direct proportionality", def: "Relación en que si una cantidad se duplica, la otra también." },
    { es: "Proporcionalidad inversa", en: "Inverse proportionality", def: "Relación en que si una cantidad se duplica, la otra se reduce a la mitad." },
    { es: "Notación científica", en: "Scientific notation", def: "Número entre 1 y 10 multiplicado por una potencia de diez, como 3,5 × 10⁻⁴." },
    { es: "Prefijo", en: "Prefix", def: "Nombre de una potencia de diez delante de la unidad: kilo, mili, micro, mega." },
    { es: "Partes por millón", en: "Parts per million (ppm)", def: "Una parte de cada millón, 10⁻⁶; en masa, 1 mg por kg." },
    { es: "Despejar", en: "To solve for", def: "Reordenar una fórmula para dejar sola la incógnita." },
    { es: "Redondeo", en: "Rounding", def: "Quitar cifras del final de un número según una regla, una sola vez y al final." },
    { es: "Cifras significativas", en: "Significant figures", def: "Cifras de un valor que dicen algo de la medida; los ceros de la izquierda no cuentan." },
    { es: "Rango", en: "Range", def: "Diferencia entre el valor máximo y el mínimo de una serie." },
    { es: "Pendiente", en: "Slope", def: "Cuánto cambia el eje vertical por cada unidad del horizontal; con el tiempo, una velocidad." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Descargas 180 kg de torta húmeda y el laboratorio da una pérdida por secado del 15 %. ¿Cuántos kilos de disolvente lleva la torta?",
      answer: 27,
      tolerance: 0.01,
      unit: "kg",
      explain: "Parte = total × p / 100 = 180 × 15 / 100 = 27 kg de disolvente; el sólido seco son 153 kg.",
    },
    {
      kind: "number",
      q: "Se esperaban 240 kg de producto seco y se han obtenido 213,6 kg. ¿Cuál es el rendimiento?",
      answer: 89,
      tolerance: 0.01,
      unit: "%",
      explain: "Rendimiento = obtenido / esperado × 100 = 213,6 / 240 × 100 = 89 %.",
    },
    {
      kind: "number",
      q: "La etapa de reacción rinde un 92 % y la de cristalización un 85 %. ¿Cuál es el rendimiento global de las dos etapas?",
      answer: 78.2,
      tolerance: 0.01,
      unit: "%",
      explain: "Los rendimientos encadenados se multiplican, no se suman ni se promedian: 0,92 × 0,85 = 0,782, es decir, 78,2 %.",
    },
    {
      kind: "number",
      q: "Una receta escrita para 30 kg de materia prima pide 245 L de etanol. Tu lote lleva 36 kg. ¿Cuántos litros de etanol tocan?",
      answer: 294,
      tolerance: 0.01,
      unit: "L",
      explain: "Factor de escala: 36 / 30 = 1,2. Etanol: 245 × 1,2 = 294 L. Es una regla de tres directa.",
    },
    {
      kind: "number",
      q: "Un resultado de impureza es 0,035 % en peso. ¿Cuántas ppm son?",
      answer: 350,
      tolerance: 0.01,
      unit: "ppm",
      explain: "1 % = 10000 ppm, así que 0,035 × 10000 = 350 ppm.",
    },
    {
      kind: "number",
      q: "Hay que cargar 260 kg de diclorometano, de densidad 1,33 kg/L, con un caudalímetro que mide litros. ¿Cuántos litros son? Da el resultado con un decimal.",
      answer: 195.5,
      tolerance: 0.01,
      unit: "L",
      explain: "Densidad = m / V, despejando V = m / densidad = 260 / 1,33 = 195,49, que redondeado a un decimal es 195,5 L.",
    },
    {
      kind: "number",
      q: "Con Q = m × cp × ΔT: dispones de 62700 kJ para calentar agua (cp = 4,18 kJ/(kg·K)) 30 °C. ¿Cuántos kilos de agua puedes calentar?",
      answer: 500,
      tolerance: 0.01,
      unit: "kg",
      explain: "Se despeja la masa: m = Q / (cp × ΔT) = 62700 / (4,18 × 30) = 62700 / 125,4 = 500 kg.",
    },
    {
      kind: "number",
      q: "En la tendencia de un reactor lees 25 °C a las 10:00 y 43 °C a las 10:24. ¿Cuál es la velocidad media de calentamiento en °C/min?",
      answer: 0.75,
      tolerance: 0.02,
      unit: "°C/min",
      explain: "Pendiente = (43 − 25) / 24 = 18 / 24 = 0,75 °C/min, que son 45 °C por hora.",
    },
    {
      kind: "choice",
      q: "El umbral de una impureza es 0,15 % y el valor bruto calculado es 0,154 %. Siguiendo la regla de la nota 2 del anexo 2 de ICH Q3A, ¿qué se concluye?",
      options: [
        "Que lo supera, porque 0,154 es mayor que 0,150",
        "Que no lo supera: redondeado a dos decimales es 0,15 %",
        "Que lo supera, porque 0,154 se redondea siempre hacia arriba",
        "Que no se puede comparar hasta repetir el análisis entero",
      ],
      answer: 1,
      explain: "El resultado se redondea a los mismos decimales que el umbral (0,154 a 0,15 %) y se compara directamente: 0,15 no supera 0,15. El redondeo lo hace el laboratorio según su método.",
    },
    {
      kind: "choice",
      q: "Al verificar la hoja ves que tu compañero ha calculado 286 L de metanol con un factor redondeado, y a ti te sale 288,75 L. ¿Qué haces?",
      options: [
        "Avisas a tu compañero y al responsable antes de cargar",
        "Tachas su número y escribes el tuyo encima sin decir nada",
        "Firmas la casilla, porque la diferencia es muy pequeña",
        "Cargas tu valor y dejas la hoja como estaba para no liarla",
      ],
      answer: 0,
      explain: "Una cuenta que no cuadra no se corrige por tu cuenta: se avisa, se corrige según el procedimiento con fecha, firma y el valor original legible, y solo entonces se carga.",
    },
  ],
};
