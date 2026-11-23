import type { Lesson } from "./types";

export const valoracionesAFondo: Lesson = {
  slug: "valoraciones-a-fondo",
  level: 6,
  order: 2,
  title: "Valoraciones ácido-base a fondo: curvas, indicadores y cálculo de la riqueza",
  titleEn: "Acid-base titrations in depth: curves, indicators and assay calculation",
  minutes: 38,
  summary:
    "Cómo cambia el pH mientras se valora, por qué hay un salto, cómo se elige el indicador, cómo encuentra el punto final un valorador automático, las valoraciones por retroceso y en medio no acuoso, y el cálculo completo de una riqueza con blanco, factor y base seca.",
  body: `
En «Volumetrías ácido-base» viste la idea y una cuenta sencilla. Aquí verás qué pasa en el vaso mientras cae el valorante, cuándo parar y cómo sale, número a número, el 99,2 % del certificado de tu lote.

### Valorar, desde cero
Imagina un saco de tornillos sin contar y cajitas con un número conocido de tuercas. Enroscas una tuerca en cada tornillo hasta que no queda ninguno libre: por las cajitas gastadas sabes cuántos tornillos había.

Una **valoración** (*titration*) hace lo mismo con moléculas:

- El **analito** (*analyte*) es lo que quieres medir: el principio activo, el ácido de una materia prima.
- El **valorante** (*titrant*) es la disolución de concentración conocida de la bureta.
- Se añade valorante hasta que reacciona **todo** el analito. Volumen por concentración da los moles de valorante; la ecuación de la reacción dice a cuántos moles de analito equivalen.

### Por qué se sigue usando para la riqueza
El manual de laboratorio de la agencia de medicamentos de Estados Unidos (FDA, *ORA Laboratory Manual*) recuerda que el análisis farmacéutico empezó con valoraciones y hoy se apoya mucho en la cromatografía (HPLC). Aun así, el manual incluye en la formación de sus analistas valoraciones acuosas, no acuosas y potenciométricas, y riquezas por valoración.

El resultado sale de una reacción y una cuenta: volumen, concentración y proporción de la reacción. No hace falta un patrón del mismo principio activo, como en cromatografía. Es rápida, barata y, bien hecha, muy precisa.

Su límite: **no es específica** (*non-specific*). La sosa reacciona con todo lo ácido del vaso, producto o impureza. ICH Q6A (especificaciones) dice que, si la riqueza se hace por valoración, se combina con un ensayo adecuado de impurezas; ICH Q2(R2) (validación) pone el mismo ejemplo, y el manual de la FDA sobre validación llama a las valoraciones inespecíficas por naturaleza. Por eso tu lote lleva riqueza por valoración y, además, impurezas por cromatografía.

### La curva de valoración
Si apuntas el pH tras cada adición obtienes la **curva de valoración** (*titration curve*): pH frente a mililitros añadidos.

**Caso 1: ácido fuerte con base fuerte.** 25,00 mL de HCl 0,1000 mol/L (2,500 mmol) valorados con NaOH 0,1000 mol/L. Calculado con python, a 25 °C, con el producto iónico del agua Kw = 1,0 × 10⁻¹⁴:

| NaOH (mL) | Sobra (mmol) | pH |
|---|---|---|
| 0 | 2,500 HCl | 1,00 |
| 10,00 | 1,500 HCl | 1,37 |
| 20,00 | 0,500 HCl | 1,95 |
| 24,00 | 0,100 HCl | 2,69 |
| 24,90 | 0,010 HCl | 3,70 |
| **25,00** | **nada: NaCl y agua** | **7,00** |
| 25,10 | 0,010 NaOH | 10,30 |
| 26,00 | 0,100 NaOH | 11,29 |
| 30,00 | 0,500 NaOH | 11,96 |
| 40,00 | 1,500 NaOH | 12,36 |

Cada fila: lo que sobra entre el volumen total, y logaritmo. Ejemplo a 20,00 mL: 0,500 mmol / 45 mL = 0,0111 mol/L, pH = −log 0,0111 = 1,95.

Durante 24 mL el pH apenas sube de 1 a 2,7. Entre 24,90 y 25,10 mL, dos décimas de mililitro, salta de 3,70 a 10,30: más de seis unidades. Es el **salto de pH** (*pH jump*), como un vaso que se llena despacio y se desborda en la última gota.

El **punto de equivalencia** (*equivalence point*) es el volumen en el que los moles de base añadidos igualan a los de ácido: aquí, 25,00 mL. En un ácido fuerte con una base fuerte cae en pH 7,00.

**Caso 2: ácido débil con base fuerte.** Mismo volumen y concentración, pero de ácido acético, con el valor de libro de texto pKa = 4,76 (el mismo de «Ácidos, bases y pH a fondo»). Calculado con python:

| NaOH añadido (mL) | pH |
|---|---|
| 0 | 2,88 |
| 5,00 | 4,16 |
| **12,50 (semiequivalencia)** | **4,76** |
| 20,00 | 5,36 |
| 24,00 | 6,14 |
| 24,90 | 7,16 |
| **25,00 (equivalencia)** | **8,73** |
| 25,10 | 10,30 |
| 26,00 | 11,29 |
| 30,00 | 11,96 |

Tres diferencias con el caso 1:

- **Empieza más alto** (2,88 y no 1,00), porque el acético solo suelta una pequeña parte de sus protones.
- **A mitad de camino, pH = pKa.** A 12,50 mL hay tanto acético como acetato, y Henderson-Hasselbalch da pH = pKa + log 1 = 4,76. Es el **punto de semiequivalencia** (*half-equivalence point*).
- **La equivalencia cae en pH 8,73, no en 7.** El vaso tiene acetato de sodio, una base débil que capta algún protón del agua y deja OH⁻ libres. Y **el salto es más corto**: de 7,16 a 10,30, tres unidades en lugar de seis.

Después de la equivalencia las dos curvas coinciden, porque lo que manda es la sosa sobrante.

### Punto de equivalencia y punto final no son lo mismo
El punto de equivalencia es el volumen exacto que pide la estequiometría, y nadie lo ve. Lo que se ve es el **punto final** (*end point*): el cambio de color o el salto que detecta el equipo. Un buen método lo hace caer dentro del salto, tan cerca de la equivalencia que la diferencia, el **error de valoración** (*titration error*), sea despreciable.

### Indicadores: un ácido débil con color
Un **indicador** (*indicator*) es un ácido débil cuya forma ácida tiene un color y cuya forma básica tiene otro. Se echan unas gotas, tan poco que no consume valorante apreciable. Como el acético en la semiequivalencia, está mitad y mitad cuando el pH iguala su pKa; por debajo domina un color y por encima el otro. El tramo de pH en que se ve el cambio es su **intervalo de viraje** (*transition range*).

Dos clásicos, con intervalos aproximados de libro de texto (cada tabla los da con una o dos décimas de diferencia):

| Indicador | Intervalo de viraje aproximado | Color ácido / básico |
|---|---|---|
| **Fenolftaleína** (*phenolphthalein*) | pH 8,2 a 10,0 | incolora / rosa |
| **Rojo de metilo** (*methyl red*) | pH 4,4 a 6,2 | rojo / amarillo |

La regla para elegir: **el intervalo de viraje tiene que caer dentro del salto**. Comprobado con python sobre las dos curvas:

- **HCl con fenolftaleína:** vira entre 25,00 y 25,05 mL. Bien.
- **HCl con rojo de metilo:** vira entre 24,98 y 25,00 mL. Bien: en el salto del ácido fuerte caben los dos.
- **Acético con fenolftaleína:** vira entre 24,99 y 25,05 mL. Bien.
- **Acético con rojo de metilo:** cambiaría poco a poco entre 7,6 y 24,1 mL, y terminaría casi un mililitro antes de la equivalencia. Inservible.

### Valoración potenciométrica: el electrodo decide
En los laboratorios de control de calidad lo habitual es la **valoración potenciométrica** (*potentiometric titration*): un electrodo de pH sumergido en el vaso registra la curva entera y un **valorador automático** (*autotitrator*) añade el valorante, mide y calcula. Es más objetiva que el ojo, sirve con muestras coloreadas o turbias y deja la curva registrada. Las guías de la Organización Mundial de la Salud (OMS) para laboratorios de control citan un documento específico de cualificación de valoradores automáticos: es un equipo que se cualifica, como los demás instrumentos.

El equipo busca dónde la curva es más empinada, el **punto de máxima pendiente** (*inflection point*), con la **primera derivada** (*first derivative*): cuánto sube el pH por mililitro entre cada par de lecturas.

Datos de ejemplo (calculados con python para un ácido débil de pKa 4,76, con equivalencia real en 19,86 mL), lecturas cada 0,10 mL:

| V (mL) | pH | ΔpH | Punto medio (mL) | ΔpH/ΔV (por mL) |
|---|---|---|---|---|
| 19,50 | 6,49 | | | |
| 19,60 | 6,64 | 0,15 | 19,55 | 1,5 |
| 19,70 | 6,85 | 0,21 | 19,65 | 2,1 |
| 19,80 | 7,28 | 0,43 | 19,75 | 4,3 |
| 19,90 | 9,76 | 2,48 | **19,85** | **24,8** |
| 20,00 | 10,30 | 0,54 | 19,95 | 5,4 |
| 20,10 | 10,53 | 0,23 | 20,05 | 2,3 |
| 20,20 | 10,69 | 0,16 | 20,15 | 1,6 |

La cuenta de una fila: entre 19,80 y 19,90 mL el pH sube 9,76 − 7,28 = 2,48; dividido por 0,10 mL da 24,8 por mL. El máximo está en el punto medio 19,85 mL: ese es el punto final, a 0,01 mL de la equivalencia real. Cómo dosifica e interpola un equipo real lo fija el método.

### Valoración por retroceso
Si la sustancia se disuelve mal, reacciona despacio o no da un punto final claro, se hace una **valoración por retroceso** (*back titration*):

1. Se añade a la muestra un **exceso conocido** de un reactivo valorado.
2. Se deja reaccionar. Parte del reactivo se gasta con la muestra; el resto sobra.
3. Se valora **lo que sobra** con un segundo valorante.
4. Lo gastado por la muestra = lo añadido − lo sobrante.

Es como pagar con un billete de 50 euros y deducir el precio a partir del cambio.

**Ejemplo completo (valores de ejemplo).** La base ficticia BX-9 (M = 246,30 g/mol) se disuelve mal en agua y reacciona con 2 HCl por molécula. Se pesan 0,1500 g, se añaden 25,00 mL de HCl 0,1 mol/L con factor 1,0012 y se valora el ácido sobrante con NaOH 0,1 mol/L con factor 0,9985. Gasto: 12,99 mL.

- HCl añadido: 25,00 × 0,1 × 1,0012 = 2,5030 mmol.
- HCl sobrante (1:1 con NaOH): 12,99 × 0,1 × 0,9985 = 1,2971 mmol.
- HCl gastado por la muestra: 2,5030 − 1,2971 = 1,2059 mmol.
- BX-9 (2 HCl por molécula): 1,2059 / 2 = 0,6030 mmol.
- Masa: 0,6030 × 246,30 = 148,5 mg.
- Riqueza: 148,5 / 150,0 × 100 = **99,0 %**.

El manual de la FDA advierte que el retroceso con una segunda disolución valorada aumenta la posibilidad de error: dos valorantes, dos factores. Por eso se reserva para cuando la directa no es posible.

### Valoraciones en medio no acuoso
Muchos principios activos son aminas tan débiles que en agua apenas captan protones: el agua, también base débil, compite con ellas por el protón del valorante. La curva casi no tiene salto y no hay punto final que detectar.

La solución es cambiar de disolvente. En ácido acético anhidro (sin agua) el agua ya no compite, el **ácido perclórico** (*perchloric acid*) actúa como un ácido muy fuerte y aparece un salto que el electrodo detecta. Es la **valoración no acuosa** (*non-aqueous titration*) que el manual de la FDA incluye en la formación de sus analistas.

Ojo con la seguridad. La nota técnica NTP 479 del Instituto Nacional de Seguridad y Salud en el Trabajo (INSST), en su tabla de incompatibilidades, lista el ácido perclórico como incompatible con el anhídrido acético, el alcohol, el papel, la madera, las grasas y los aceites, y el ácido acético como incompatible con el ácido perclórico. Este valorante junta justo esas sustancias: se prepara y se usa solo según su procedimiento escrito, por personal formado y con los medios que marque su ficha de seguridad.

### El cálculo de la riqueza, paso a paso
La cadena de siempre:

1. **Volumen neto** = gasto de la muestra − gasto del blanco (mL).
2. **Moles de valorante** = volumen neto × concentración nominal × factor.
3. **Moles de analito** = moles de valorante × proporción de la reacción.
4. **Masa de analito** = moles × masa molar.
5. **Riqueza tal cual** = masa de analito / masa de muestra × 100.
6. **Riqueza en base seca** = riqueza tal cual × 100 / (100 − % de pérdida por desecación o de agua).

Los pasos 2 a 4 se juntan en el **equivalente en masa por mililitro**: «1 mL de valorante 0,1 mol/L equivale a tantos mg de sustancia», que vale 0,1 × M / protones que intercambia cada molécula. El manual de la FDA lo explica con el **peso equivalente** (*equivalent weight*): masa molar dividida por el número de protones que intervienen.

**Cuenta 1. Directa (valores de ejemplo).** Ácido ficticio AB-21, M = 166,13 g/mol, reacciona 1:1 con NaOH. Muestra 0,3005 g; NaOH 0,1 mol/L, factor 1,0021; gasto 18,02 mL; sin blanco.
Moles de NaOH: 18,02 × 0,1 × 1,0021 = 1,8058 mmol. Masa: 1,8058 × 166,13 = 299,99 mg. Riqueza: 299,99 / 300,5 × 100 = **99,83 %**.

**Cuenta 2. Con blanco y equivalente (valores de ejemplo).** El mismo análisis con un blanco de 0,05 mL. Equivalente: 0,1 × 166,13 / 1 = 16,613 mg por mL. Volumen neto: 18,02 − 0,05 = 17,97 mL. Masa: 17,97 × 1,0021 × 16,613 = 299,16 mg. Riqueza: 299,16 / 300,5 × 100 = **99,55 %**. Cinco centésimas de mililitro han movido el resultado casi tres décimas.

**Cuenta 3. Diácido y base seca (valores de ejemplo).** Diácido ficticio DK-4, M = 260,24 g/mol, con dos protones: cada molécula gasta 2 NaOH. Muestra 0,2510 g; gasto 19,18 mL; blanco 0,04 mL; factor 0,9987; pérdida por desecación 0,45 %.
Equivalente: 0,1 × 260,24 / 2 = 13,012 mg por mL. Volumen neto: 19,14 mL. Masa: 19,14 × 0,9987 × 13,012 = 248,73 mg. Tal cual: 248,73 / 251,0 × 100 = 99,09 %. Base seca: 99,09 × 100 / 99,55 = **99,54 %**. Si olvidas dividir por 2, sale el doble.

**Cuenta 4. No acuosa, con todo (valores de ejemplo).** Base ficticia PA-88, M = 311,38 g/mol, 1:1 con ácido perclórico 0,1 mol/L en ácido acético, factor 1,0043. Muestra 0,5500 g; gasto 17,47 mL; blanco 0,08 mL; agua por Karl Fischer 0,30 %.

| Paso | Dato o cuenta | Resultado |
|---|---|---|
| Masa de muestra | balanza, ticket impreso | 0,5500 g |
| Gasto muestra | valorador | 17,47 mL |
| Gasto blanco | valorador | 0,08 mL |
| Volumen neto | 17,47 − 0,08 | 17,39 mL |
| Factor del valorante | etiqueta, fecha vigente | 1,0043 |
| Equivalente | 0,1 × 311,38 / 1 | 31,138 mg/mL |
| Masa de PA-88 | 17,39 × 1,0043 × 31,138 | 543,82 mg |
| Riqueza tal cual | 543,82 / 550,0 × 100 | 98,88 % |
| Agua | Karl Fischer | 0,30 % |
| Riqueza base anhidra | 98,88 × 100 / 99,70 | **99,2 %** |

Ese **99,2 %** llega al certificado, calculado con todos los decimales y redondeado al final («Cálculo y expresión de resultados»). Sin restar el blanco habría salido 99,6 %; sin corregir el agua, 98,9 %.

### El blanco y su corrección
El **blanco** (*blank*) es la misma valoración, con los mismos disolventes, reactivos e indicador, sin muestra. Mide lo que consume todo lo que no es tu producto, como una traza ácida del disolvente. Se resta del gasto de la muestra, como en las cuentas 2 a 4.

En el retroceso se usa al revés: se valora el mismo exceso de reactivo sin muestra, y lo gastado por la muestra es el gasto del blanco menos el de la muestra.

La OMS pide anotar de inmediato todos los valores de cada ensayo, blancos incluidos, en la hoja de trabajo analítica, con información suficiente para repetir el ensayo o recalcular el resultado.

### Fuentes de error y cómo se controlan

| Error | Qué pasa | Cómo se controla |
|---|---|---|
| **CO₂ del aire en la sosa** | CO₂ + 2 NaOH da Na₂CO₃ + H₂O. El carbonato es una base más débil: la sosa vale menos que su factor y el salto se emborrona. | Frasco cerrado y factor revalorado cuando diga el procedimiento. La FDA recuerda que el NaOH sólido absorbe agua tan deprisa que no se prepara pesándolo: se valora. |
| **Burbuja en la bureta** | Si sale una burbuja de 0,05 mL, cuenta como gastado un volumen que no cayó al vaso: en 18 mL, un 0,28 %. | Purgar y revisar la bureta antes de empezar. |
| **Punto final pasado** | Valorante de más que no reaccionó: riqueza alta. | Adición lenta al final; mejor, potenciometría. |
| **Temperatura** | Los líquidos se dilatan: más caliente, menos moles por mililitro que cuando se valoró. | La temperatura que fije el método. La FDA forma a sus analistas en convertir un volumen medido a su equivalente a 20 °C y a 25 °C. |
| **Muestra mal pesada** | Pesa 0,3005 g y se anota 0,3050 g: la cuenta 1 da 98,36 % en vez de 99,83 %. | Ticket de la balanza, sin copiar a mano. |
| **Factor caducado** | El resultado arrastra el error del valorante. | Factor y fecha de valoración en la etiqueta, como piden la OMS y EudraLex. |

ICH Q2(R2) pide demostrar la **repetibilidad** (*repeatability*) del método con al menos 6 determinaciones al 100 % de la concentración de ensayo, o 9 repartidas por el intervalo; y el manual de la FDA, al menos tres determinaciones en paralelo para valorar una disolución. Las réplicas delatan los errores que cambian de una vez a otra; uno fijo, como un factor equivocado, solo se ve revisando.

### Por qué te importa a ti
El 99,2 % no lo «da la máquina»: es la cadena de la cuenta 4. Si tu muestra estaba húmeda porque el secadero no terminó, la riqueza tal cual baja. Si el producto lleva un ácido de una etapa anterior mal lavado, la valoración lo cuenta como producto: por eso se acompaña de cromatografía. Y si sale fuera de especificación (*out of specification*, OOS), la guía de la FDA sobre estos resultados manda revisar los datos brutos y comprobar que las cuentas que los convierten en el resultado son correctas: las de esta lección.

En planta y en el laboratorio manda siempre el procedimiento vigente (SOP): método, indicador, réplicas, blanco y cálculo son los que fije él.
`,
  plant: `
Lunes, turno de mañana. Has descargado la centrífuga CF-302 y el producto húmedo del lote ficticio PA-88/112 está en el secadero de bandejas SB-305. La hoja pide tomar una muestra al final del secado para pérdida por desecación y riqueza.

Tomas la muestra con el muestreador limpio, en el frasco etiquetado, y la llevas al laboratorio. La analista te explica que la riqueza se hace por valoración no acuosa con ácido perclórico, con un valorador automático, y que primero pasará la muestra por Karl Fischer, porque la riqueza se da en base anhidra.

A media mañana llega el resultado: agua 1,8 %, cuando el límite de la hoja es 0,5 %. La riqueza tal cual sale 97,4 %. La analista te dice que la valoración en sí está bien: el blanco es normal y el factor del valorante está vigente. Simplemente, en cada gramo pesado hay agua que no es producto.

Sigues lo que marca la hoja para un secado incompleto: avisas al responsable de turno, que decide prolongar el secado. Anotas la hora, la temperatura y el vacío del SB-305. Tras el tiempo indicado, nueva muestra: agua 0,3 %, riqueza tal cual 98,9 % y riqueza en base anhidra 99,2 %. Ahora todo cuadra.

La lección para ti: una riqueza baja no siempre significa un producto impuro. A veces significa que el secadero todavía no ha terminado su trabajo.
`,
  batchRecord: `
En la hoja de producción (*batch record*) verás la toma de muestra para riqueza y, en la hoja de análisis del laboratorio, el cálculo completo. Lo que anota cada uno:

- **Operador, en la hoja de producción**: equipo del que sale la muestra (p. ej. SB-305), fecha y hora de toma, número de muestra y de lote, cantidad, envase y firma. Si se repite la toma, se anotan las dos con su motivo.
- **Analista, en la hoja de trabajo analítica**: masa de muestra con el ticket de la balanza, identificación del valorante con su factor y la fecha de valoración, gasto de cada réplica y del blanco, punto final del valorador (con la curva adjunta o trazable), cálculo y resultado frente a especificación.
- **Resultado que te llega**: riqueza con los decimales de la especificación (p. ej. 99,2 %), si es tal cual o en base seca o anhidra, y «cumple» o «no cumple».
- **Si no cumple**: no se repite el análisis «hasta que salga»; se abre la investigación que marque el procedimiento y el lote espera.

Nunca se anota el valor esperado: se anota lo medido.
`,
  terms: [
    { es: "Valoración", en: "Titration", def: "Análisis que mide una sustancia añadiendo un reactivo de concentración conocida hasta que reacciona toda." },
    { es: "Analito", en: "Analyte", def: "Sustancia que se quiere medir en la muestra." },
    { es: "Curva de valoración", en: "Titration curve", def: "Gráfica del pH frente al volumen de valorante añadido." },
    { es: "Salto de pH", en: "pH jump", def: "Subida brusca del pH en pocas gotas alrededor del punto de equivalencia." },
    { es: "Punto de equivalencia", en: "Equivalence point", def: "Volumen en el que el valorante añadido corresponde exactamente, según la reacción, al analito presente." },
    { es: "Punto final", en: "End point", def: "Momento en que se detecta el fin de la valoración, por color o por el electrodo. Debe caer dentro del salto." },
    { es: "Punto de semiequivalencia", en: "Half-equivalence point", def: "Mitad del volumen de equivalencia; en un ácido débil, allí el pH es igual al pKa." },
    { es: "Intervalo de viraje", en: "Transition range", def: "Tramo de pH en el que un indicador cambia de color." },
    { es: "Valoración potenciométrica", en: "Potentiometric titration", def: "Valoración en la que un electrodo registra la curva y el punto final se toma donde la pendiente es máxima." },
    { es: "Primera derivada", en: "First derivative", def: "Cuánto cambia el pH por cada mililitro añadido; su máximo marca el punto final." },
    { es: "Valoración por retroceso", en: "Back titration", def: "Se añade un exceso conocido de reactivo y se valora el sobrante." },
    { es: "Valoración no acuosa", en: "Non-aqueous titration", def: "Valoración en un disolvente distinto del agua, como el ácido acético, para bases o ácidos muy débiles." },
    { es: "Equivalente en masa por mililitro", en: "Titrimetric equivalent", def: "Masa de sustancia que corresponde a 1 mL de valorante de la concentración indicada." },
    { es: "Blanco", en: "Blank", def: "La misma valoración sin muestra; su gasto se resta del de la muestra." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Valoras 25,00 mL de HCl 0,1000 mol/L con NaOH 0,1000 mol/L. ¿Qué pH hay después de añadir 20,00 mL de NaOH?",
      answer: 1.95,
      tolerance: 0.01,
      unit: "",
      explain: "Sobran 2,500 − 2,000 = 0,500 mmol de HCl en 45,00 mL: 0,0111 mol/L. pH = −log 0,0111 = 1,95.",
    },
    {
      kind: "number",
      q: "Valoras ácido acético (pKa 4,76, valor de libro de texto) con NaOH. La equivalencia está en 25,00 mL. ¿Qué pH marca el electrodo cuando has añadido 12,50 mL?",
      answer: 4.76,
      tolerance: 0.005,
      unit: "",
      explain: "12,50 mL es la semiequivalencia: hay tanto ácido como acetato y pH = pKa + log 1 = 4,76.",
    },
    {
      kind: "number",
      q: "Tienes 20,00 mL de un ácido 0,1250 mol/L que reacciona 1:1 con NaOH 0,1000 mol/L. ¿Qué volumen de NaOH hace falta para llegar a la equivalencia?",
      answer: 25,
      tolerance: 0.002,
      unit: "mL",
      explain: "20,00 × 0,1250 = 2,500 mmol de ácido; 2,500 / 0,1000 = 25 mL de NaOH.",
    },
    {
      kind: "choice",
      q: "Debes valorar un ácido débil con NaOH. La curva calculada salta de pH 7,2 a 10,3 en la equivalencia. ¿Qué indicador eliges?",
      options: [
        "Rojo de metilo, porque cambia de color con el pH ácido",
        "Ninguno: un ácido débil no se puede valorar",
        "Fenolftaleína, porque su viraje cae dentro del salto",
        "Cualquiera que cambie de color, el error es mínimo",
      ],
      answer: 2,
      explain: "La fenolftaleína vira hacia pH 8,2 a 10,0, dentro del salto. El rojo de metilo viraría mucho antes de la equivalencia.",
    },
    {
      kind: "number",
      q: "Riqueza de un ácido ficticio (M = 150,00 g/mol, 1:1 con NaOH). Muestra 0,2000 g; NaOH 0,1 mol/L con factor 0,9950; gasto 13,30 mL; sin blanco. ¿Riqueza en %?",
      answer: 99.25,
      tolerance: 0.002,
      unit: "%",
      explain: "13,30 × 0,1 × 0,9950 = 1,3234 mmol; × 150,00 = 198,50 mg; 198,50 / 200,0 × 100 = 99,25 %.",
    },
    {
      kind: "number",
      q: "Retroceso: a 0,3600 g de una base ficticia (M = 200,0 g/mol, 1:1 con HCl) se añaden 30,00 mL de HCl 0,1000 mol/L. El sobrante gasta 12,40 mL de NaOH 0,1000 mol/L. ¿Riqueza en %?",
      answer: 97.78,
      tolerance: 0.002,
      unit: "%",
      explain: "HCl añadido 3,000 mmol; sobrante 1,240 mmol; gastado 1,760 mmol; × 200,0 = 352,0 mg; 352,0 / 360,0 × 100 = 97,78 %.",
    },
    {
      kind: "number",
      q: "Gasto de la muestra 18,10 mL, gasto del blanco 0,15 mL, factor 1,000 y equivalente 16,00 mg de sustancia por mL. La muestra pesaba 0,2900 g. ¿Riqueza en %?",
      answer: 99.03,
      tolerance: 0.002,
      unit: "%",
      explain: "Volumen neto 18,10 − 0,15 = 17,95 mL; 17,95 × 16,00 = 287,2 mg; 287,2 / 290,0 × 100 = 99,03 %.",
    },
    {
      kind: "number",
      q: "Un diácido ficticio (M = 260,24 g/mol) gasta 2 NaOH por molécula. ¿Cuántos mg de diácido equivalen a 1 mL de NaOH 0,1 mol/L?",
      answer: 13.012,
      tolerance: 0.002,
      unit: "mg/mL",
      explain: "0,1 mmol de NaOH por mL neutraliza 0,05 mmol de diácido: 0,1 × 260,24 / 2 = 13,012 mg por mL.",
    },
    {
      kind: "choice",
      q: "En una valoración potenciométrica, el valorador registra estas subidas de pH cada 0,10 mL: 0,21, 0,43, 2,48 y 0,54. ¿Dónde pone el punto final?",
      options: [
        "En el tramo de 2,48, donde la pendiente es máxima",
        "En el tramo de 0,21, el primero en que el pH sube",
        "En el último tramo, cuando la subida vuelve a bajar",
        "En el volumen en que el pH vale exactamente 7,00",
      ],
      answer: 0,
      explain: "El punto final se toma donde la primera derivada es máxima, en el centro del tramo de mayor subida.",
    },
    {
      kind: "choice",
      q: "El laboratorio te dice que la riqueza de tu lote sale baja en base tal cual pero bien en base anhidra, y que el agua por Karl Fischer está alta. ¿Qué es lo más probable?",
      options: [
        "El valorante está caducado y hay que tirar el lote",
        "El blanco se ha restado dos veces en la cuenta",
        "El producto tiene una impureza ácida que no se ve",
        "El secado no ha terminado: la muestra lleva agua",
      ],
      answer: 3,
      explain: "El agua pesa pero no es producto: baja la riqueza tal cual. Si en base anhidra cumple, toca revisar el secado según la hoja.",
    },
  ],
};
