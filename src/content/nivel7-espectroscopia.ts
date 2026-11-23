import type { Lesson } from "./types";

export const espectroscopiaAFondo: Lesson = {
  slug: "espectroscopia-a-fondo",
  level: 7,
  order: 4,
  title: "Espectroscopia a fondo: lo que la luz cuenta de una molécula (UV-Vis e infrarrojo)",
  titleEn: "Spectroscopy in depth: what light tells us about a molecule (UV-Vis and infrared)",
  minutes: 38,
  summary:
    "Qué es la luz y cómo se mide, de nanómetros a números de onda; transmitancia y absorbancia; la ley de Lambert-Beer con su recta de calibrado por mínimos cuadrados; el espectrofotómetro UV-Vis por dentro y sus comprobaciones; el infrarrojo, sus bandas y el FTIR con ATR; y por qué un resultado de identidad que no cumple deja tu material bloqueado.",
  body: `
En las dos lecciones anteriores viste qué hacen el UV-Visible y el infrarrojo. Aquí verás de dónde salen sus números y cómo decide el laboratorio que el saco que acabas de recibir contiene lo que dice la etiqueta.

### La luz desde cero
La luz es una **onda** (*wave*), como las que hace una piedra en un estanque. Tres palabras la describen:

- **Longitud de onda** (*wavelength*, símbolo λ, lambda): la distancia entre dos crestas seguidas. En el laboratorio se mide en **nanómetros** (nm). Un nanómetro es la milmillonésima parte de un metro (10⁻⁹ m).
- **Frecuencia** (*frequency*, símbolo ν, ni): cuántas crestas pasan por un punto en un segundo. Se mide en hercios (Hz), es decir, veces por segundo.
- **Energía** (*energy*) de cada «paquete» de luz, que se llama **fotón** (*photon*).

Las tres están atadas entre sí. La luz viaja en el vacío a una velocidad fija, c = 299 792 458 m/s; es un valor exacto por definición, y así lo recoge el Real Decreto 2032/2009 de unidades legales. Por eso:

> ν = c / λ  y  E = h · ν

donde h es la constante de Planck, también exacta: 6,626 070 15 × 10⁻³⁴ J·s.

La regla: **onda corta, frecuencia alta y fotón con más energía**. La luz ultravioleta de 254 nm tiene 1,18 × 10¹⁵ Hz y fotones de 7,82 × 10⁻¹⁹ J, energía suficiente para mover electrones dentro de una molécula.

### El espectro electromagnético y las zonas del laboratorio
Toda la familia de ondas, de los rayos X a las ondas de radio, se llama **espectro electromagnético** (*electromagnetic spectrum*). El manual de química de medicamentos de los laboratorios de la FDA (*ORA Laboratory Manual*, volumen IV, sección 3) dice que la espectrofotometría se hace en las tres zonas más accesibles del espectro: ultravioleta, visible e infrarrojo. Los límites que siguen son valores aproximados de libro de texto:

| Zona | Longitud de onda aproximada | Qué le hace a la molécula |
|---|---|---|
| Ultravioleta (UV) | 200 a 400 nm | Mueve electrones |
| Visible (Vis) | 400 a 780 nm | Mueve electrones; es la luz que ven tus ojos |
| Infrarrojo medio (IR) | 2500 a 25 000 nm | Hace vibrar los enlaces |

### Nanómetros y números de onda
En el infrarrojo se usa el **número de onda** (*wavenumber*, ṽ): cuántas ondas caben en un centímetro, en cm⁻¹. Crece con la energía: más cm⁻¹, fotón más enérgico.

Como 1 cm son 10 000 000 nm (10⁷ nm), el paso es una división:

> ṽ (cm⁻¹) = 10⁷ / λ (nm)  y  λ (nm) = 10⁷ / ṽ (cm⁻¹)

**Cuenta 1.** El grupo C=O de muchas moléculas absorbe cerca de 1700 cm⁻¹. ¿Qué longitud de onda es? λ = 10⁷ / 1700 = 5882 nm, es decir, 5,88 micrómetros.

**Cuenta 2.** Un filtro deja pasar luz de 3000 nm. ¿Qué número de onda es? ṽ = 10⁷ / 3000 = 3333 cm⁻¹.

Así, 4000 cm⁻¹ son 2500 nm y 400 cm⁻¹ son 25 000 nm. Un fotón de 1700 cm⁻¹ lleva 3,38 × 10⁻²⁰ J, unas 23 veces menos que el de 254 nm: no mueve electrones, solo sacude enlaces.

### Qué le pasa a la luz al atravesar una muestra
Piensa en una cortina: si es fina pasa casi toda la luz; si es gruesa, poca. Una disolución hace lo mismo.

- **Intensidad incidente** (I₀): la luz que entra en la muestra.
- **Intensidad transmitida** (I): la que sale por el otro lado.
- **Transmitancia** (*transmittance*, T): la fracción que pasa, T = I / I₀. Va de 0 (no pasa nada) a 1 (pasa todo); a menudo se da en tanto por ciento.
- **Absorbancia** (*absorbance*, A): el logaritmo decimal del inverso de la transmitancia. Es la definición que recoge el manual de la FDA:

> A = log (1 / T) = −log T

¿Por qué el logaritmo? Porque cada capa igual de muestra quita la misma *fracción* de luz. Con el logaritmo, la absorbancia sale proporcional a la concentración.

**Cuenta 1.** Pasa la mitad de la luz: T = 0,50. A = −log 0,50 = 0,301.

**Cuenta 2.** Pasa el 10 %: T = 0,10. A = −log 0,10 = 1,000. Con A = 2 pasa solo el 1 %.

**Cuenta 3.** El equipo marca A = 0,500. ¿Cuánta luz pasa? T = 10⁻⁰·⁵⁰⁰ = 0,316, un 31,6 %.

Con A = 2 al detector le llega una centésima parte de la luz: el ruido del equipo pesa mucho y la lectura empeora.

### La ley de Lambert-Beer
Es la regla que convierte una absorbancia en una concentración:

> A = ε · b · c

- **A**: absorbancia, sin unidades.
- **ε** (épsilon): **absortividad molar** (*molar absorptivity*), cuánto absorbe esa sustancia a esa longitud de onda. Es como su «color propio». Unidades: L/(mol·cm).
- **b**: **camino óptico** (*path length*), el grosor de líquido que cruza la luz, en cm. Según la FDA, la cubeta típica es de 1 cm.
- **c**: concentración, en mol/L.

**¿Por qué es lineal?** Con el doble de moléculas en el camino de la luz, el doble de absorbancia. Igual si duplicas el grosor de la cubeta.

**Cuenta 1: concentración con un ε dado.** Un principio activo ficticio tiene ε = 15 000 L/(mol·cm) a su máximo (valor de ejemplo). En cubeta de 1 cm da A = 0,450. c = A / (ε · b) = 0,450 / (15 000 × 1) = 3,00 × 10⁻⁵ mol/L. Si su masa molar es 250 g/mol (valor de ejemplo), son 3,00 × 10⁻⁵ × 250 = 0,0075 g/L, es decir, 7,50 mg/L.

**Cuenta 2: ε a partir de un patrón.** Un patrón de 2,00 × 10⁻⁵ mol/L da A = 0,620 en 1 cm. ε = A / (b · c) = 0,620 / (1 × 2,00 × 10⁻⁵) = 31 000 L/(mol·cm).

**Sus límites.** La ley es una aproximación que funciona bien solo dentro de un margen:

- **Concentraciones altas.** Las moléculas se influyen entre sí y llega muy poca luz al detector: la recta se curva hacia abajo. Por eso se diluye.
- **Luz no monocromática.** La ley supone una sola longitud de onda. Si pasa una franja ancha y la sustancia absorbe distinto en cada parte, la recta se tuerce.

El mismo manual cita la Farmacopea de Estados Unidos: para muchas sustancias farmacéuticas, unos 10 µg/mL dan absorbancias de 0,2 a 0,8 en el UV o el visible. Esa es la zona cómoda de trabajo.

### La recta de calibrado
Muchos métodos usan varios patrones y una **recta de calibrado** (*calibration curve*). La guía ICH Q2(R2), sobre validación de métodos, pide evaluar la linealidad con un mínimo de cinco concentraciones repartidas por el intervalo, calcular la recta por **mínimos cuadrados** (*least squares*) y presentar el gráfico, la pendiente, la ordenada en el origen y el coeficiente de correlación o de determinación. También pide mirar los **residuos** (*residuals*), la distancia de cada punto a la recta.

**Cuenta 3: cinco patrones de ejemplo.**

| Patrón | Concentración (mg/L) | Absorbancia |
|---|---|---|
| 1 | 2,0 | 0,105 |
| 2 | 4,0 | 0,208 |
| 3 | 6,0 | 0,314 |
| 4 | 8,0 | 0,412 |
| 5 | 10,0 | 0,521 |

Los mínimos cuadrados buscan la recta A = m · c + n con la menor suma de residuos al cuadrado. Con python:

- Media de las concentraciones: 6,0 mg/L. Media de las absorbancias: 0,312.
- **Pendiente** (*slope*): m = 2,072 / 40,0 = 0,0518 L/mg. Cada mg/L más sube la absorbancia 0,0518.
- **Ordenada en el origen** (*y-intercept*): n = 0,312 − 0,0518 × 6,0 = 0,0012. Casi cero, como debe ser: sin producto, sin absorbancia.
- **Coeficiente de determinación** (*coefficient of determination*, R²): 0,9998. Cuanto más cerca de 1, mejor se ajustan los puntos a la recta.
- Residuos: el mayor es −0,0036 (patrón 4), repartidos a ambos lados, sin curva.

**Cuenta 4: interpolar una muestra.** La muestra de riqueza se prepara pesando 35,0 mg en 100 mL y diluyendo 2,00 mL hasta 100 mL: concentración teórica 35,0 / 100 × 2 / 100 = 0,00700 mg/mL, es decir, 7,00 mg/L. Da A = 0,362. Despejando la recta: c = (0,362 − 0,0012) / 0,0518 = 6,965 mg/L. Riqueza = 6,965 / 7,00 × 100 = 99,5 % (cuenta de ejemplo con patrón al 100 % y sin corregir agua). La muestra cae dentro de la recta: se **interpola** (*interpolate*). Fuera de los patrones no se lee nada, salvo que el método validado lo justifique.

### El espectrofotómetro UV-Vis por dentro
El manual de la FDA enumera sus piezas:

- **Fuente** (*source*): lámpara de **deuterio** y lámpara de **tungsteno-halógeno**. De libro de texto: la de deuterio da el UV y la de tungsteno el visible.
- **Monocromador** (*monochromator*): abre la luz blanca como un prisma abre un arcoíris, y una rendija deja pasar solo una franja estrecha.
- **Compartimento de muestra** con la **cubeta** (*cuvette*): el manual cita cubetas de sílice (cuarzo), de vidrio y de plástico. De libro de texto: el vidrio y la mayoría de plásticos absorben el UV, así que tapan la señal; para medir en el UV hace falta cuarzo. Vidrio y plástico sirven para el visible. Una huella de dedo en la cara por la que pasa la luz también absorbe: las cubetas se cogen por las caras esmeriladas.
- **Detector** (*detector*): fotomultiplicador o fotodiodos, a veces en fila (**matriz de diodos**, *diode array*), que ve todas las longitudes de onda a la vez.

**El blanco** (*blank*). Antes de la muestra se mide la cubeta con el disolvente solo. El equipo toma esa lectura como «cero absorbancia», y así lo que absorben el disolvente y la cubeta no se cuenta como producto. Según la FDA, muestra y patrón se miden cada uno frente a su blanco y uno inmediatamente detrás del otro.

**Doble haz** (*double beam*). La guía de la OMS para laboratorios de control de calidad (WHO TRS 957, anexo 1) lista equipos de un haz y de doble haz. La idea: la luz se parte en dos caminos, muestra y referencia, que se comparan a la vez; si la lámpara flojea, flojea en los dos y el error se anula.

### Las comprobaciones del equipo
La guía de la OMS pide retirar, etiquetar y no usar un equipo con resultados sospechosos hasta repararlo y volver a cualificarlo, y remite a guías de cualificación de espectrofotómetros que esta lección no ha podido leer. El manual de la FDA dice:

- **Exactitud de longitud de onda** (*wavelength accuracy*): se mide un **filtro de óxido de holmio**, que tiene picos en posiciones conocidas, y se comparan con los valores tabulados. La FDA pide verificar la longitud de onda en la instalación y una vez al año, y la lectura del blanco cada día de uso.
- **Exactitud de absorbancia** (*photometric accuracy*): se miden disoluciones de **dicromato de potasio** y se comparan con valores tabulados.
- **Linealidad**: con varios patrones, en un intervalo de 0,1 a 2,0 de absorbancia.
- Según la FDA, si el máximo de absorción aparece a más de 1 nm de la longitud de onda que dice la monografía, puede hacer falta recalibrar.

La **luz parásita** (*stray light*) es luz que llega al detector sin haber pasado por donde debía. Hace que la absorbancia leída sea más baja que la real, sobre todo cuando es alta. Las farmacopeas tienen un ensayo para medirla; sus cifras no se dan aquí porque no se han podido leer en una fuente gratuita.

### Para qué sirve el UV-Vis en un laboratorio de API
- **Riqueza** (*assay*): como en la cuenta 4.
- **Disolución** (*dissolution*), como idea: en comprimidos se mide cuánto principio activo pasa a un líquido con el tiempo; la FDA pone un ejemplo con lectura UV.
- **Identificación**: el espectro de la muestra tiene que coincidir con el del patrón, con sus máximos en el mismo sitio.
- **Control de limpieza**, como idea: tras limpiar un reactor, el aclarado o el frotis se analiza para ver si queda producto. ICH Q7 (apartado 12.74) pide métodos validados y lo bastante sensibles para detectar el límite fijado. Si el producto absorbe en UV, el UV puede ser una opción; qué técnica se usa lo decide el método validado.

### El infrarrojo: enlaces que vibran como muelles
Piensa en dos bolas unidas por un muelle: si las estiras y sueltas, vibran a un ritmo propio. Los **enlaces** (*bonds*) son los muelles. Según la física de libro de texto, el ritmo depende de:

- **La fuerza del muelle**: un enlace triple es más rígido que uno doble, y este más que uno sencillo. Más rígido, frecuencia más alta.
- **El peso de las bolas**: un átomo ligero, como el hidrógeno, vibra más deprisa.

Si llega luz IR con justo la frecuencia de un muelle, la molécula la absorbe: cada grupo de átomos absorbe en su zona.

Un **espectro IR** (*IR spectrum*) es un gráfico con el número de onda en el eje horizontal, normalmente de 4000 a 400 cm⁻¹ y de mayor a menor, y la transmitancia en el vertical. Cada absorción aparece como un valle hacia abajo, que se llama **banda** (*band*).

### Bandas de grupos funcionales
Valores aproximados de libro de texto; la posición exacta cambia con la molécula y con el estado sólido o líquido.

| Enlace | Zona aproximada (cm⁻¹) | Cómo suele verse |
|---|---|---|
| O–H (alcoholes, agua) | 3200 a 3600 | Banda ancha y redondeada |
| N–H (aminas, amidas) | 3300 a 3500 | Más estrecha que la del O–H |
| C–H | 2850 a 3100 | Varias bandas finas |
| C≡N (nitrilos) | 2210 a 2260 | Fina, en una zona casi vacía |
| C=O (cetonas, ésteres, amidas, ácidos) | 1650 a 1750 | Muy intensa, la más fácil de ver |

Encaja con la regla del muelle: los enlaces con hidrógeno salen arriba y el triple C≡N por encima del doble C=O. El manual de la FDA comprueba el equipo con una película de **poliestireno**: sus bandas deben salir a 3026,27; 2849,9; 1601,0; 1027,7 y 906,5 cm⁻¹, con un margen de 2 cm⁻¹.

Por debajo de unos 1500 cm⁻¹ está la **región de la huella dactilar** (*fingerprint region*): bandas que dependen de la molécula entera. Dos sustancias con los mismos grupos tienen distinta huella.

### El equipo: FTIR y ATR
Casi todos los equipos actuales son **FTIR** (*Fourier transform infrared*). El manual de la FDA lo explica así: en vez de un monocromador, la luz pasa por un **interferómetro** (*interferometer*). El equipo registra una señal de intensidad frente al tiempo, el **interferograma** (*interferogram*), y el ordenador la convierte en el espectro normal con un cálculo llamado **transformada de Fourier**. La ventaja, según la FDA: entra más luz, porque no hay rendijas, y todas las longitudes de onda llegan al detector durante toda la medida, así que el espectro sale más rápido.

Para preparar la muestra, el manual cita varias formas:

- **ATR** (*attenuated total reflectance*, reflexión total atenuada): la muestra sólida se apoya directamente sobre un cristal, de diamante u otro. De libro de texto: la luz viaja por dentro del cristal rebotando, y en cada rebote «se asoma» un poquito fuera y toca la muestra. Es la forma habitual de medir sólidos: sin preparar nada y en un par de minutos.
- **Pastilla de KBr** (*KBr pellet*): la muestra seca y en polvo se muele con bromuro de potasio y se prensa hasta formar un disco que deja pasar la luz.

### Identificar un principio activo
El laboratorio mide la muestra y un **patrón de referencia** (*reference standard*) de la misma forma y **superpone** los espectros: todas las bandas, en las mismas posiciones, con intensidades relativas parecidas y sin bandas de más. El criterio exacto lo fija el método.

La guía ICH Q6A, que dice qué ensayos lleva la especificación de un principio activo nuevo, es clara: la identificación debe poder distinguir entre compuestos de estructura parecida que puedan estar presentes, y debe ser específica para la sustancia, «por ejemplo, la espectroscopia infrarroja». Añade que identificar solo por un tiempo de retención en cromatografía no se considera específico.

ICH Q2(R2) explica cómo se demuestra al validar: resultado positivo con muestras que contienen la sustancia, comparable al del patrón; negativo con las que no; y negativo también con sustancias de estructura parecida.

**Polimorfos.** ICH Q6A cita el IR del sólido entre las técnicas para ver si una sustancia tiene varias formas cristalinas. El porqué lo viste en la lección de polimorfismo; por eso patrón y muestra se miden en el mismo estado físico.

**Enantiómeros.** Recuerda de la lección de quiralidad que dos enantiómeros, fuera de un ambiente quiral, tienen propiedades idénticas: sus espectros IR en disolución son iguales. ICH Q6A dice que, para un principio activo de un solo enantiómero, la identidad debe distinguir los dos enantiómeros y la mezcla racémica, y que puede hacer falta un ensayo específico o un método quiral. El IR no basta para eso.

### Por qué te importa a ti
ICH Q7 pide al menos un ensayo de identidad de cada lote de material que entra, con pocas excepciones, y que el material quede en **cuarentena** (*quarantine*) hasta que se muestree, se analice y se libere. Si además hay que identificar cada envase, lo dice el procedimiento de tu planta. Por eso el laboratorio te pide muestras de cada saco o bidón, bien etiquetadas, sin mezclar.

Si la identidad no cumple, el material no se usa. El resultado fuera de especificación se investiga (ICH Q7, apartado 11.15), y mientras tanto el material sigue bloqueado; si se rechaza, se identifica y se controla en cuarentena (7.44). Esa carga no entra en tu reactor, aunque la hoja diga que toca. Y la identidad de tu producto final se confirma antes de que el lote salga.

En planta manda siempre el procedimiento vigente (SOP): el método de análisis, los criterios de identidad y qué hacer con un resultado que no cumple los fija tu empresa.
`,
  plant: `
Turno de tarde en recepción. Llegan seis bidones de un reactivo ficticio, RX-22, para el lote del intermedio ficticio KT-40, que se carga en el reactor R-207 a la mañana siguiente. El procedimiento de ejemplo pide identificar cada bidón por IR.

Tomas una muestra de cada bidón con un tomamuestras limpio, en un frasco etiquetado con el código del material, el número de recepción y el número de bidón. Los seis bidones quedan con la etiqueta amarilla de cuarentena.

En el laboratorio, la analista mide cada muestra en el FTIR con ATR, IR-02, y superpone cada espectro con el del patrón de RX-22. Cinco coinciden. El del bidón 4 tiene todas las bandas del patrón y una de más, ancha y redondeada, entre 3200 y 3600 cm⁻¹: la zona del O–H. Puede indicar agua o un alcohol que no debería estar ahí.

El resultado es «no conforme». Calidad abre una investigación. El bidón 4 queda bloqueado, separado y con su etiqueta, mientras se investiga; si se confirma el resultado, se rechaza. Calidad decide también si los otros cinco, del mismo lote del proveedor, se liberan o esperan al final de la investigación. Esta vez los libera. A ti te llega el aviso: para el lote KT-40 hay 5 bidones, no 6. El jefe de turno revisa con planificación si la carga cuadra o si hay que esperar otra entrega. Tú no tocas el bidón 4 ni le cambias la etiqueta.

A la mañana siguiente, al cargar, anotas en la hoja los números de los cinco bidones, cada uno con su estado «liberado» comprobado en el sistema.
`,
  batchRecord: `
La identidad la mide el laboratorio, pero tú la ves en la hoja de producción (*batch record*):

- **Materiales de partida**: código del material, número de lote o recepción y número de cada envase cargado.
- **Estado**: casilla para comprobar que cada envase está **liberado** (etiqueta y sistema), con firma. Un envase en cuarentena o rechazado no se carga.
- **Muestras que tomas**: punto de muestreo, número de envase, fecha, hora y firma, tal como pida el plan de muestreo.
- **Resultados en proceso o de producto**: a veces la hoja recoge una riqueza por UV de una muestra de control; se anota el valor que da el informe del laboratorio, con su unidad (por ejemplo, 99,5 %), no «cumple».
- **Producto final**: la identidad por IR del principio activo aparece en el certificado de análisis (*CoA*) del lote, no en tu hoja, pero sin ella el lote no sale.
- **Incidencias**: si un material no está liberado a la hora de cargar, se anota la espera y el aviso al responsable.
`,
  terms: [
    { es: "Longitud de onda", en: "Wavelength (λ)", def: "Distancia entre dos crestas seguidas de una onda de luz. En UV-Vis se da en nanómetros." },
    { es: "Número de onda", en: "Wavenumber (cm⁻¹)", def: "Número de ondas que caben en un centímetro; es 10⁷ dividido por la longitud de onda en nm. Se usa en el IR." },
    { es: "Fotón", en: "Photon", def: "Paquete de energía de la luz. Cuanto más corta la onda, más energía lleva." },
    { es: "Transmitancia", en: "Transmittance (T)", def: "Fracción de la luz que atraviesa la muestra: luz que sale dividida por luz que entra." },
    { es: "Absorbancia", en: "Absorbance (A)", def: "Logaritmo decimal del inverso de la transmitancia, A = −log T. Es proporcional a la concentración." },
    { es: "Absortividad molar", en: "Molar absorptivity (ε)", def: "Cuánto absorbe una sustancia a una longitud de onda, por mol/L y por cm de camino óptico." },
    { es: "Camino óptico", en: "Path length (b)", def: "Grosor de muestra que atraviesa la luz; en una cubeta típica, 1 cm." },
    { es: "Recta de calibrado", en: "Calibration curve", def: "Recta que relaciona la absorbancia con la concentración, calculada con varios patrones por mínimos cuadrados." },
    { es: "Coeficiente de determinación", en: "Coefficient of determination (R²)", def: "Número de 0 a 1 que dice lo bien que se ajustan los puntos a la recta; cerca de 1, buen ajuste." },
    { es: "Blanco", en: "Blank", def: "Cubeta con el disolvente solo, que el equipo toma como absorbancia cero." },
    { es: "Monocromador", en: "Monochromator", def: "Pieza que separa la luz en longitudes de onda y deja pasar solo una franja estrecha." },
    { es: "Luz parásita", en: "Stray light", def: "Luz que llega al detector sin pasar por donde debe; hace que la absorbancia leída sea más baja que la real." },
    { es: "Interferómetro", en: "Interferometer", def: "Pieza del FTIR que sustituye al monocromador; da un interferograma que el ordenador convierte en espectro." },
    { es: "Reflexión total atenuada", en: "Attenuated total reflectance (ATR)", def: "Forma de medir el IR apoyando la muestra sobre un cristal, sin preparar pastillas." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Una banda IR aparece a 1650 cm⁻¹. ¿A qué longitud de onda corresponde, en nanómetros?",
      answer: 6061,
      tolerance: 0.005,
      unit: "nm",
      explain: "λ (nm) = 10⁷ / ṽ (cm⁻¹) = 10000000 / 1650 = 6061 nm, unos 6,06 micrómetros.",
    },
    {
      kind: "number",
      q: "Un equipo trabaja con luz de 2900 nm. ¿Qué número de onda es, en cm⁻¹?",
      answer: 3448,
      tolerance: 0.005,
      unit: "cm⁻¹",
      explain: "ṽ = 10⁷ / λ = 10000000 / 2900 = 3448 cm⁻¹, en la zona de los enlaces O–H y N–H.",
    },
    {
      kind: "number",
      q: "Por una muestra pasa el 25 % de la luz (T = 0,25). ¿Qué absorbancia marca el equipo?",
      answer: 0.602,
      tolerance: 0.01,
      unit: "",
      explain: "A = −log T = −log 0,25 = 0,602.",
    },
    {
      kind: "number",
      q: "Una muestra da A = 0,700. ¿Qué porcentaje de la luz la atraviesa?",
      answer: 19.95,
      tolerance: 0.01,
      unit: "%",
      explain: "T = 10 elevado a −0,700 = 0,1995, es decir, 19,95 %, casi una quinta parte de la luz.",
    },
    {
      kind: "number",
      q: "Una sustancia tiene ε = 12 500 L/(mol·cm) (valor de ejemplo). En cubeta de 1 cm da A = 0,600. ¿Cuál es su concentración en µmol/L?",
      answer: 48,
      tolerance: 0.01,
      unit: "µmol/L",
      explain: "c = A / (ε · b) = 0,600 / (12500 × 1) = 0,000048 mol/L, es decir, 48 µmol/L.",
    },
    {
      kind: "number",
      q: "La recta de calibrado es A = 0,0518 · c + 0,0012, con c en mg/L. Una muestra da A = 0,260. ¿Qué concentración tiene?",
      answer: 5,
      tolerance: 0.01,
      unit: "mg/L",
      explain: "c = (0,260 − 0,0012) / 0,0518 = 4,996, es decir, 5 mg/L, dentro de la recta de 2 a 10 mg/L: se interpola.",
    },
    {
      kind: "choice",
      q: "El método pide medir la riqueza a 230 nm. En el cajón hay cubetas de plástico, de vidrio óptico, de vidrio común y de cuarzo. ¿Cuál se usa?",
      options: [
        "La de plástico, que no se rompe al limpiarla",
        "La de vidrio óptico, que es la más transparente",
        "Cualquiera, porque el blanco corrige la cubeta",
        "La de cuarzo, porque deja pasar la luz UV",
      ],
      answer: 3,
      explain: "A 230 nm el vidrio y la mayoría de plásticos absorben la luz y tapan la señal; el cuarzo deja pasar el UV.",
    },
    {
      kind: "choice",
      q: "Antes de medir la muestra, la analista mide una cubeta solo con el disolvente. ¿Para qué?",
      options: [
        "Para fijar el cero y no contar el disolvente",
        "Para calentar la lámpara antes de la muestra",
        "Para limpiar la cubeta con el propio disolvente",
        "Para comprobar la longitud de onda del equipo",
      ],
      answer: 0,
      explain: "Es el blanco: el equipo toma esa lectura como absorbancia cero, así lo que absorben disolvente y cubeta no cuenta como producto.",
    },
    {
      kind: "choice",
      q: "El IR de un bidón recibido tiene una banda que no está en el patrón. El laboratorio da la identidad como no conforme. ¿Qué pasa con ese bidón?",
      options: [
        "Se carga si el resto de bidones cumple bien",
        "Se cambia su etiqueta a liberado tras avisar",
        "Sigue bloqueado mientras se investiga el resultado",
        "Se mezcla con los otros para diluir el problema",
      ],
      answer: 2,
      explain: "Según ICH Q7 el material queda en cuarentena hasta su liberación y un resultado fuera de especificación se investiga; no se usa ni se toca su etiqueta.",
    },
    {
      kind: "choice",
      q: "Según ICH Q6A, ¿qué identificación de un principio activo no se considera específica por sí sola?",
      options: [
        "Un espectro IR que coincide con el del patrón",
        "Un solo tiempo de retención en cromatografía",
        "Un HPLC con detector de matriz de diodos",
        "Dos cromatografías basadas en principios distintos",
      ],
      answer: 1,
      explain: "Q6A pone el IR como ejemplo de ensayo específico y dice que un solo tiempo de retención no lo es; dos cromatografías distintas o HPLC con diodos sí suelen aceptarse.",
    },
  ],
};
