import type { Lesson } from "./types";

export const balanzasAFondo: Lesson = {
  slug: "balanzas-a-fondo",
  level: 4,
  order: 4,
  title: "Balanzas y pesada a fondo: del gramo al kilo con un resultado en el que se pueda confiar",
  titleEn: "Balances and weighing in depth: from grams to kilograms with a result you can trust",
  minutes: 38,
  summary:
    "Masa y peso, por qué una balanza se ajusta en su sitio, tipos de balanza y báscula, Max, Min, d y e, las cuatro clases de exactitud legales, cómo mide una balanza por dentro, cada fuente de error y cómo evitarla, la comprobación con pesas patrón, el peso mínimo, cuatro técnicas de pesada y cómo se registra una pesada con integridad de datos.",
  body: `
En «Balanzas y cómo pesar bien» viste los tipos de balanza, la tara y la pesada por diferencia. Aquí verás qué mide de verdad una balanza, qué dice la ley de ella, de dónde salen sus errores y cómo se demuestra con números que un resultado vale.

¿Por qué te importa en planta? Casi todo resultado que te devuelve el laboratorio empieza pesando una pequeña cantidad de la muestra que tú sacaste. Si esa pesada está mal, el resultado de tu lote está mal. Y en planta pesas tú, con los mismos principios.

### Masa y peso no son lo mismo
La **masa** (*mass*) es la cantidad de materia de un objeto. Se mide en kilogramos y no cambia: un bidón de 25 kg tiene la misma masa en Bilbao o en la Luna.

El **peso** (*weight*) es la fuerza con la que la Tierra tira de esa masa. Su unidad es el newton (N). El Real Decreto 2032/2009 de unidades legales define el newton como kg·m/s²: masa por aceleración. Con un dato de física de libro de texto, un objeto de 1 kg pesa unos 9,8 N.

El kilogramo no depende de ningún objeto: el RD 2032/2009, en su texto actualizado en 2020, lo define fijando el valor de la constante de Planck. De esa definición baja una cadena de pesas, de mejor a peor, hasta la que usas cada mañana.

### La balanza mide fuerza, no masa
Una balanza electrónica no «ve» los kilos: nota cuánto empuja la carga sobre el platillo, una fuerza, y la convierte en masa con un ajuste hecho con pesas de masa conocida.

Ese ajuste depende de la **gravedad** (*gravity*) del sitio. Física de libro de texto: la gravedad cambia un poco con la latitud y la altitud, así que la misma pesa empuja algo más o algo menos según dónde esté. Una balanza ajustada en otro lugar puede marcar distinto en el tuyo.

El anexo VI del Real Decreto 244/2016 define el instrumento de pesaje como el que determina la masa «utilizando la acción de la gravedad», y pide que los ensayos que dependen de la gravedad se hagan en el lugar de uso, salvo que ya se haya tenido en cuenta la de ese lugar. Por eso una balanza se vuelve a comprobar si se cambia de sitio: la guía de la OMS de laboratorios de control de calidad (TRS 1052, punto 5.39) incluye el traslado entre los cambios que obligan a recualificar, y el manual de laboratorio de la FDA (ORA-LAB.5.5) pide calibrar la balanza cuando se mueve o se repara.

### Los tipos, con sus nombres
De menos a más carga: **semimicro** (*semi-micro balance*), entre la microbalanza y la analítica; **analítica** (*analytical balance*), con su cámara de puertas o paravientos (*draft shield*); **de precisión o granatario** (*precision / top-loading balance*), de platillo abierto; **báscula de plataforma** (*platform scale*) para sacos, y **báscula de suelo** (*floor scale*) para bidones y big bags. Las cifras de cada modelo están en su placa.

### Max, Min, d y e: lo que dice la placa
El Real Decreto 244/2016 obliga a que la placa de un instrumento de pesaje lleve, entre otras cosas:

- **Max**: el alcance máximo, la carga más grande que puede pesar.
- **Min**: el alcance mínimo legal.
- **d**: el **intervalo de escala real** (*actual scale interval*), el salto de la última cifra de la pantalla. Es lo que en otras lecciones llamamos resolución.
- **e**: el **intervalo de escala de verificación** (*verification scale interval*), que también verás llamado escalón de verificación. Es el valor con el que se calculan los errores permitidos.
- La **clase de exactitud** (*accuracy class*), dentro de un óvalo.

En una báscula sencilla d = e. En una analítica que enseña una cifra más, d es más pequeño que e: el RD pide entonces que e sea como mucho diez veces d. Por ejemplo, d = 0,1 mg y e = 1 mg. Además, la pantalla no puede indicar por encima de Max + 9 e.

### Las cuatro clases de exactitud
El RD 244/2016 define cuatro clases (cuadro 1 de su anexo VI, resumido):

| Clase | Nombre | e | Número de escalones n = Max / e |
|---|---|---|---|
| I | Especial | 1 mg o más | 50000 o más |
| II | Fina | de 1 mg a 50 mg | de 100 a 100000 |
| II | Fina | 0,1 g o más | de 5000 a 100000 |
| III | Media | de 0,1 g a 2 g | de 100 a 10000 |
| III | Media | 5 g o más | de 500 a 10000 |
| IIII | Ordinaria | 5 g o más | de 100 a 1000 |

Dos ejemplos con valores de ejemplo:

1. **Analítica de Max 220 g y e = 1 mg.** n = 220 / 0,001 = 220000. Pasa de 100000, así que no cabe en la clase II: es clase I.
2. **Báscula de suelo de Max 60 kg y e = 20 g.** n = 60000 / 20 = 3000. Con e de 5 g o más y n entre 500 y 10000: clase III. Su Min es 20 e = 400 g.

El RD incluye entre los usos regulados la «determinación de la masa en la fabricación y los análisis efectuados en los laboratorios farmacéuticos». La Orden ICT/155/2020 regula el control en servicio: verificación periódica cada dos años y verificación tras reparación o modificación. Qué balanzas de tu empresa entran ahí lo decide metrología o calidad. Esa verificación legal no sustituye a la calibración GMP: son controles distintos.

### El error máximo permitido en servicio
La Orden ICT/155/2020 fija cuánto puede equivocarse un instrumento ya instalado. Va por tramos de carga y se mide en escalones e:

| Error máximo permitido | Clase I | Clase II | Clase III | Clase IIII |
|---|---|---|---|---|
| ±1 e | hasta 50000 e | hasta 5000 e | hasta 500 e | hasta 50 e |
| ±2 e | hasta 200000 e | hasta 20000 e | hasta 2000 e | hasta 200 e |
| ±3 e | más de 200000 e | hasta 100000 e | hasta 10000 e | hasta 1000 e |

Son el doble de los exigidos a un instrumento nuevo. En la báscula del ejemplo, con e = 20 g: una carga de 5 kg son 250 e, ±20 g; una de 25 kg son 1250 e, ±40 g; una de 50 kg son 2500 e, ±60 g.

El vocabulario internacional de metrología (VIM, entrada 4.26) avisa de que el error máximo permitido no debe llamarse «tolerancia». En planta oirás «tolerancia» para el criterio de tu SOP, que puede ser más estricto que el legal.

### Cómo mide una balanza por dentro
Solo el principio:

- **Compensación electromagnética** (*electromagnetic force compensation*), propia de las balanzas más exactas, como las analíticas. El platillo va unido a una bobina metida en un imán. Al poner la carga, el platillo intenta bajar; un sensor lo nota y la electrónica manda corriente por la bobina hasta devolverlo a su sitio. La corriente necesaria crece con la fuerza, y de ahí sale la masa. Es como sujetar una bandeja para que no baje.
- **Célula de carga** (*load cell*), propia de balanzas sencillas y de básculas grandes. Una pieza de metal se dobla un poquito con la carga. Pegadas a ella van **galgas extensométricas** (*strain gauges*), hilos que cambian su resistencia eléctrica al estirarse. Es la misma célula de los reactores pesados de «Instrumentos de medida a fondo».

### Las fuentes de error, una a una
El manual de laboratorio de la FDA enumera como errores típicos la balanza sin nivelar, las puertas abiertas, las manos húmedas, la muestra sin enfriar, la carga estática, las vibraciones y corrientes de aire y la muestra que gana o pierde humedad en el platillo. Uno a uno:

| Fuente | Qué pasa | Cómo se evita |
|---|---|---|
| **Nivelación** (*levelling*) | Inclinada, la carga no empuja en vertical | Burbuja centrada antes de empezar; el RD exige un indicador de nivel cuando proceda |
| **Corrientes de aire** (*draughts*) | El aire empuja el platillo y el número baila | Puertas del paravientos cerradas; lejos de puertas, rejillas y campanas |
| **Vibraciones** (*vibrations*) | Golpes y motores mueven el platillo | Mesa firme o antivibración; no apoyarse en la mesa |
| **Temperatura** (*temperature*) | Un objeto caliente calienta el aire, que sube y lo empuja: marca de menos. La mano dentro de la cámara hace lo mismo | Enfriar en desecador; usar pinzas. En clase I la ley solo obliga a garantizar un margen de temperatura de 5 °C como mínimo |
| **Electricidad estática** (*electrostatic charge*) | Polvos secos y envases de plástico se cargan; la carga atrae o repele la balanza y la lectura deriva | Envases de vidrio o metal; ionizador si el SOP lo prevé |
| **Humedad** (*humidity*) | Una muestra que absorbe agua (*hygroscopic*) gana masa mientras la miras | Recipiente cerrado, pesada rápida o por diferencia; la OMS pide salas de pesada con temperatura y humedad controladas |
| **Magnetismo** (*magnetism*) | Un objeto magnético o imantado tira del mecanismo | Nada de imanes ni agitadores magnéticos cerca. La norma de pesas de 1974 ya pedía pesas finas prácticamente amagnéticas |
| **Flotabilidad** (*air buoyancy*) | El aire empuja hacia arriba todo objeto, como el agua a un barco | Idea a continuación |
| **Carga excéntrica** (*eccentric load*) | Una carga en una esquina puede dar otra lectura | Carga en el centro del platillo |

**La flotabilidad, como idea.** El aire empuja hacia arriba con una fuerza igual a lo que pesa el aire desplazado, y un objeto voluminoso desplaza más aire que una pesa pequeña y densa de la misma masa. La norma española de pesas de 1974, ya derogada, tomaba como referencia aire de 1,2 kg/m³ y pesas de 8000 kg/m³. Con física de libro de texto, al pesar agua (1000 kg/m³) la diferencia relativa es 1,2 × (1/1000 − 1/8000) = 0,00105, unos 0,1 g por cada 100 g. En el trabajo diario no se corrige; si un método muy exacto lo necesita, lo dice.

### Calibración, ajuste y verificación de la balanza
Las tres palabras las viste en «Metrología: calibración, exactitud y precisión». Un matiz para balanzas: el VIM (entrada 2.39) advierte que el ajuste se llama a menudo, por error, «autocalibración». La pesa interna que muchas analíticas mueven solas hace un ajuste.

**Pesas patrón y sus clases.** Las pesas se ordenan en clases según lo bien ajustadas que están. La norma española de 1974, derogada en 2015, usaba las clases E1, E2, F1, F2 y M1, de más a menos exacta, con errores tolerados para una pesa de 1 kg de 1,5 mg en E2, 5 mg en F1 y 50 mg en M1. Hoy el valor y la clase de tu pesa los da su certificado, pero la idea sigue: una analítica pide una pesa fina y una báscula de suelo se conforma con una más basta.

**Trazabilidad.** Es la cadena ininterrumpida y documentada de calibraciones que une tu resultado con la referencia (VIM, 2.41). ICH Q7 (5.31) pide patrones trazables, y la FDA, calibrar pesas y balanzas en un laboratorio acreditado.

**Con qué frecuencia.** La guía de la OMS de 2010 (TRS 957, anexo 1, 12.6), sustituida en 2024 por la TRS 1052, ponía como ejemplo comprobar la balanza a diario con su ajuste interno, regularmente con pesas de control y recualificarla cada año con pesas certificadas. La FDA pide verificarla cada día de uso y calibrarla cada año. La frecuencia la fija tu SOP.

**Las pruebas de una calibración.** Tres ideas:

- **Repetibilidad** (*repeatability*): pesar varias veces la misma pesa. La Orden ICT/155/2020 pide que la diferencia máxima entre pesadas no supere el error máximo permitido.
- **Excentricidad** (*eccentricity*): poner la pesa en el centro y en las esquinas. La misma orden pide que ninguna posición se salga del error permitido.
- **Linealidad** (*linearity*): comprobar con cargas pequeñas, medianas y grandes que el error no crece en algún tramo.

### Tres cuentas de la comprobación diaria
Todos son valores de ejemplo.

1. **Error frente al patrón.** En la analítica pones la pesa de control de 100,0000 g y la pantalla marca 100,0003 g. Error = lo que marca − el valor de la pesa = 100,0003 − 100,0000 = **+0,0003 g**, es decir, +0,3 mg.
2. **Error en porcentaje.** 0,0003 / 100 × 100 = **0,0003 %**. En la báscula de 60 kg, la pesa de 20 kg marca 20,040 kg: 0,040 / 20 × 100 = **0,2 %**.
3. **¿Cumple?** El SOP de la analítica fija ±0,5 mg: +0,3 mg cumple. El de la báscula fija ±20 g: +40 g no cumple.

Ojo a la repetibilidad en la misma báscula: tres pesadas de la pesa de 20 kg dan 20,000, 20,020 y 20,000 kg. La diferencia máxima es 20 g. A 20 kg (1000 e) el error permitido en servicio es ±40 g: cumple.

**Si la comprobación no cumple:**

1. **No la uses.** ICH Q7 (5.34): un instrumento que no cumple sus criterios de calibración no debe usarse.
2. **Etiquétala** fuera de uso. La OMS (TRS 1052, 5.40) pide retirar y marcar el equipo hasta repararlo y recualificarlo.
3. **Avisa** a tu responsable y a mantenimiento o metrología, y anótalo.
4. **No la ajustes tú** si tu SOP no lo autoriza, y no repitas la prueba hasta que «salga».
5. **Piensa hacia atrás.** ICH Q7 (5.35) pide investigar si afectó a lo pesado desde la última comprobación buena, que es el punto desde el que se revisa.

### Peso mínimo: por qué una balanza grande no sirve para pesar poco
Si pesas diez veces lo mismo, no salen diez números iguales. Esa dispersión, la **desviación estándar** (*standard deviation*, s), es parecida pese lo que pese, así que cuanto menos pesas, mayor es comparada con lo pesado.

El **peso mínimo** (*minimum weight*) es la menor cantidad que se puede pesar cumpliendo un error relativo máximo. No es el Min legal de la placa: el Min de la analítica del ejemplo (clase I, con d en lugar de e) sería 100 d = 10 mg, mientras que su peso mínimo, como verás, sale de 240 mg.

La regla vigente es la del capítulo general ‹41› de la Farmacopea de Estados Unidos (USP), la que viste en «Balanzas y cómo pesar bien»: dos veces la desviación estándar, dividido por lo pesado, no debe pasar del 0,10 % (2 × s / lo pesado ≤ 0,001). Su texto es de pago. Para practicar el cálculo usamos aquí la **regla anterior**, la que todavía reproduce el manual de laboratorio de la FDA en un ejercicio de formación: tres veces la desviación estándar de al menos diez pesadas, dividido por lo pesado, no debe pasar de 0,001 (0,1 %). Despejando: peso mínimo = 3 × s / 0,001 = 3000 × s. Ojo: es una regla antigua; con la vigente (2 × s) los pesos mínimos salen un tercio menores. Tu laboratorio usa la regla de su SOP.

1. **Analítica con s = 0,08 mg** (valor de ejemplo): 3000 × 0,08 = **240 mg** (con la regla vigente, 2000 × 0,08 = 160 mg). Si pesas 20 mg en ella, el error relativo es 3 × 0,08 / 20 × 100 = **1,2 %**: doce veces el límite.
2. **Granatario con s = 0,005 g** (valor de ejemplo): 3000 × 0,005 = **15 g**. Para pesar 2 g de un reactivo no sirve.

En planta, una báscula de suelo con s = 10 g (valor de ejemplo) tendría un peso mínimo de 30 kg. Por eso 800 g de catalizador no se pesan en la báscula de los bidones.

### Técnicas de pesada, con un ejemplo de cada una
**Pesada directa con tara.** Pones el recipiente, pulsas tara (la pantalla vuelve a cero) y añades producto. Ejemplo: un vaso de 52,3318 g tarado; añades hasta que marca 0,5012 g. El neto es 0,5012 g y el bruto, 52,8330 g.

**Pesada por diferencia.** Pesas el recipiente con el producto, viertes y vuelves a pesar el recipiente. Ejemplo: el pesasustancias con muestra pesa 18,4527 g; tras echarla al matraz, 18,2049 g. Transferido: 18,4527 − 18,2049 = 0,2478 g. Lo que se queda pegado no cuenta, porque se pesa en el recipiente.

**Líquidos volátiles.** Un disolvente que se evapora pierde masa mientras lo miras y la lectura baja sin parar. Se pesa en un recipiente con tapón, tapado entre lecturas. Con valores de ejemplo: si un matraz abierto pierde 0,2 mg cada 10 s, en un minuto son 1,2 mg perdidos antes de que anotes nada.

**Pesada en atmósfera controlada.** Un producto que se estropea con el aire o la humedad se pesa en una caja de guantes (*glove box*) llena de nitrógeno seco, con la balanza dentro. Ejemplo: un reactivo que chupa humedad se pesa allí en un vial con tapón, y el vial sale cerrado al laboratorio.

### Registrar la pesada con integridad de datos
Para las normas GMP, una pesada que no está bien registrada no se puede demostrar. Lo que se pide:

- **Impresora o sistema conectado.** El RD 244/2016 exige una impresión correcta, legible, indeleble y duradera. Si los datos van a un sistema informático, ICH Q7 (5.40) pide que esté validado.
- **El tique** que imprime la balanza (en el ejemplo de planta: fecha, hora, código y valores) se pega o se adjunta a la hoja como diga el SOP.
- **Quién pesa y quién verifica.** ICH Q7 (6.14) pide anotar justo después, de forma indeleble e identificando a quien anota; las correcciones, fechadas y firmadas, dejan leer lo original. Para las pesadas críticas, el 8.12 pide un testigo o un control equivalente (lo ves en «Manejo de sólidos a fondo»).
- **No redondear.** Se escribe lo que marca, con todas sus cifras. Si marca 0,2478 g, no escribes 0,25 g.
- **Unidad siempre.** El RD solo admite microgramo, miligramo, gramo, kilogramo y tonelada. Un «250» sin unidad puede ser 250 mg o 250 g.

### La báscula de planta y la balanza de laboratorio
Misma idea, distinta escala. Las dos miden fuerza, tienen Max, d y e, se nivelan, sufren la carga excéntrica y el aire y se comprueban con pesas trazables. En el laboratorio hablas de décimas de miligramo y en planta, de decenas de gramos, pero la comprobación diaria, el peso mínimo y el registro siguen la misma lógica.

Todo lo de esta lección es formación general. En planta y en el laboratorio manda siempre el procedimiento vigente (SOP).
`,
  plant: `
Tienes que cargar 40,25 kg de una base ficticia, BX-12, en el reactor R-301. La pesada es crítica según la hoja. Vas a la sala de pesadas con la báscula de plataforma BP-205: Max 150 kg, e = d = 50 g, clase III (valores de ejemplo).

Primero, la báscula. Burbuja centrada, etiqueta de calibración en vigor, plataforma limpia. Pones la pesa de control de 20 kg en el centro: marca 20,00 kg. El SOP fija ±50 g: cumple. La pones luego en una esquina, como pide la prueba de excentricidad de tu SOP: 20,05 kg, también dentro. Lo anotas en el libro de la báscula con tu firma.

Colocas el bidón vacío con bolsa interior, que pesa 0,95 kg, y pulsas tara. Cargas el polvo con la pala, despacio al final, y paras cuando marca 40,25 kg. La puerta de la sala está cerrada y el extractor no apunta a la plataforma: el número está quieto.

Tu compañera Itziar, la verificadora, mira la pantalla, no tu hoja. Imprimes el tique: fecha, hora, BP-205, tara 0,95 kg, neto 40,25 kg. Firmáis los dos.

Por la tarde el laboratorio te pide una muestra del producto seco en un frasco bien cerrado. El analista pesará unos 300 mg en la balanza analítica BA-07, por encima de su peso mínimo de 240 mg (el del ejemplo de la lección), y el frasco cerrado evita que el polvo coja humedad antes de llegar.
`,
  batchRecord: `
**Comprobación de la báscula o balanza**
- Código del equipo (p. ej. BP-205) y etiqueta de calibración vigente con su fecha de vencimiento.
- Nivel comprobado (casilla).
- Pesa de control usada (código y valor nominal), lectura obtenida, error y criterio del SOP.
- Resultado: cumple o no cumple. Si no cumple: equipo etiquetado fuera de uso, aviso y número de incidencia.

**Pesada**
- Material, código y lote, comprobados contra la hoja antes de usarlo.
- Tara, bruto y neto, con su unidad y todas las cifras que marca la pantalla.
- Tique impreso adjunto o pegado.
- Firma, fecha y hora de quien pesa y de quien verifica (pesadas críticas).

**Si el material se fracciona para usarlo después**
- Etiqueta del recipiente nuevo con nombre o código, número de lote o control, peso y fecha de reanálisis si procede (ICH Q7 8.11).

**Del laboratorio, lo que verás**
- El certificado de análisis no lleva la pesada, pero si el analista detecta una balanza fuera de criterio, puede abrirse una investigación que afecte a tu lote.
`,
  terms: [
    { es: "Masa", en: "Mass", def: "Cantidad de materia de un objeto. Se mide en kilogramos y no depende del lugar." },
    { es: "Peso", en: "Weight", def: "Fuerza con la que la gravedad tira de una masa. Se mide en newtons y cambia un poco con el lugar." },
    { es: "Alcance máximo y mínimo", en: "Maximum and minimum capacity (Max, Min)", def: "Carga más grande que puede pesar el instrumento y carga mínima legal que figura en su placa." },
    { es: "Intervalo de escala real", en: "Actual scale interval (d)", def: "Salto de la última cifra que enseña la pantalla." },
    { es: "Escalón de verificación", en: "Verification scale interval (e)", def: "Valor que sirve para clasificar el instrumento y calcular sus errores máximos permitidos." },
    { es: "Clase de exactitud", en: "Accuracy class", def: "Categoría legal del instrumento: I especial, II fina, III media, IIII ordinaria." },
    { es: "Error máximo permitido", en: "Maximum permissible error", def: "Error extremo que una norma o especificación admite para un instrumento." },
    { es: "Pesa patrón", en: "Reference weight / test weight", def: "Pesa de masa conocida y certificada, trazable, con la que se comprueba o calibra una balanza." },
    { es: "Excentricidad", en: "Eccentricity", def: "Diferencia de lectura al poner la misma carga en el centro o en una esquina del platillo." },
    { es: "Repetibilidad", en: "Repeatability", def: "Lo que se parecen las pesadas repetidas de una misma carga en las mismas condiciones." },
    { es: "Peso mínimo", en: "Minimum weight", def: "Menor cantidad que se puede pesar sin pasar de un error relativo máximo fijado." },
    { es: "Flotabilidad del aire", en: "Air buoyancy", def: "Empuje hacia arriba que el aire ejerce sobre todo objeto, mayor cuanto más volumen ocupa." },
    { es: "Compensación electromagnética", en: "Electromagnetic force compensation", def: "Principio de la balanza que devuelve el platillo a su sitio con una bobina y mide la corriente necesaria." },
    { es: "Célula de carga", en: "Load cell", def: "Pieza metálica con galgas extensométricas que se deforma con la carga y cambia una señal eléctrica." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Comprobación diaria de una balanza analítica: pones la pesa de control de 200,0000 g y la pantalla marca 200,0004 g. ¿Cuál es el error, en miligramos?",
      answer: 0.4,
      tolerance: 0.01,
      unit: "mg",
      explain: "Error = lo que marca − valor de la pesa = 200,0004 − 200,0000 = 0,0004 g, es decir, +0,4 mg.",
    },
    {
      kind: "number",
      q: "En la báscula de suelo pones la pesa de control de 20 kg y marca 20,030 kg. ¿Cuál es el error en porcentaje respecto a la pesa?",
      answer: 0.15,
      tolerance: 0.01,
      unit: "%",
      explain: "Error = 20,030 − 20,000 = 0,030 kg. En porcentaje: 0,030 / 20 × 100 = 0,15 %.",
    },
    {
      kind: "number",
      q: "Una balanza analítica tiene una desviación estándar de 0,06 mg (valor de ejemplo). Con la regla anterior de la lección, «3 × s dividido por lo pesado no pasa de 0,001», ¿cuál es su peso mínimo en miligramos?",
      answer: 180,
      tolerance: 0.01,
      unit: "mg",
      explain: "Peso mínimo = 3 × s / 0,001 = 3000 × 0,06 = 180 mg. Por debajo, el error relativo pasa del 0,1 %. Con la regla vigente de la USP (2 × s) saldrían 120 mg.",
    },
    {
      kind: "number",
      q: "Pesada por diferencia: el pesasustancias con la muestra pesa 15,8342 g y, tras echar la muestra al matraz, 15,5867 g. ¿Cuántos gramos has transferido?",
      answer: 0.2475,
      tolerance: 0.001,
      unit: "g",
      explain: "Transferido = 15,8342 − 15,5867 = 0,2475 g. Lo que se queda pegado al recipiente no cuenta, porque se vuelve a pesar con él.",
    },
    {
      kind: "number",
      q: "Un bidón vacío pesa 2,35 kg y la hoja pide 25,00 kg netos de producto. Si no usas la tecla de tara, ¿qué bruto tiene que marcar la báscula al terminar?",
      answer: 27.35,
      tolerance: 0.001,
      unit: "kg",
      explain: "Bruto = tara + neto = 2,35 + 25,00 = 27,35 kg. Con la tecla de tara, la pantalla marcaría directamente 25,00 kg.",
    },
    {
      kind: "number",
      q: "Una báscula de clase III tiene Max 60 kg y e = 20 g. Según la Orden ICT/155/2020, en clase III el error máximo permitido en servicio es ±1 e hasta 500 e, ±2 e hasta 2000 e y ±3 e hasta 10000 e. ¿Cuál es el error máximo permitido, en gramos, para una carga de 25 kg?",
      answer: 40,
      tolerance: 0.01,
      unit: "g",
      explain: "25 kg son 25000 / 20 = 1250 e, que está entre 500 e y 2000 e: le toca ±2 e = ±2 × 20 = 40 g.",
    },
    {
      kind: "choice",
      q: "Por la mañana compruebas la balanza con la pesa de control y el error sale fuera del criterio del SOP. Tienes prisa porque el laboratorio espera tu muestra pesada. ¿Qué haces?",
      options: [
        "No la uso, la etiqueto fuera de uso, aviso y lo anoto",
        "Pulso el ajuste interno y repito hasta que cumpla",
        "Peso igualmente y anoto la desviación al final del turno",
        "Uso otra pesa de control hasta encontrar una que cumpla",
      ],
      answer: 0,
      explain: "ICH Q7 5.34: un instrumento que no cumple sus criterios no se usa. La OMS pide retirarlo y marcarlo, y ICH Q7 5.35 pide investigar lo pesado desde la última comprobación buena.",
    },
    {
      kind: "choice",
      q: "Pesas un polvo muy seco en una navecilla de plástico y la lectura no se queda quieta: sube y baja aunque las puertas están cerradas. ¿Cuál es la causa más probable y qué haces?",
      options: [
        "La balanza está mal nivelada; la nivelo y peso",
        "Carga electrostática; uso un recipiente de vidrio o el ionizador del SOP",
        "El polvo pesa demasiado; cambio a la báscula de suelo",
        "Falta tara; vuelvo a tarar a mitad de la pesada",
      ],
      answer: 1,
      explain: "Los polvos secos y los envases de plástico se cargan de electricidad estática, que tira del platillo. El manual de la FDA incluye no eliminar la carga estática entre los errores típicos.",
    },
    {
      kind: "choice",
      q: "Sacas un crisol de la estufa a 105 °C y quieres pesarlo para un análisis de humedad. ¿Qué es lo correcto?",
      options: [
        "Pesarlo en caliente, que así no coge humedad del aire",
        "Pesarlo con la puerta abierta para que se disipe el calor",
        "Dejarlo enfriar en un desecador y pesarlo a temperatura ambiente",
        "Pesarlo y restar a ojo lo que pesa el aire caliente",
      ],
      answer: 2,
      explain: "Un objeto caliente calienta el aire de la cámara, que sube y lo empuja: marca de menos. El desecador evita que coja humedad mientras se enfría.",
    },
    {
      kind: "choice",
      q: "En la báscula de plataforma pones el bidón en una esquina porque así llegas mejor con la pala. ¿Qué riesgo tiene y qué haces?",
      options: [
        "Ninguno, la báscula siempre marca igual en cualquier punto",
        "Que la tara se borre; tararé otra vez al terminar",
        "Que se dispare el alcance máximo; peso en dos veces",
        "Error de excentricidad; centro el bidón antes de pesar",
      ],
      answer: 3,
      explain: "La lectura puede cambiar según dónde esté la carga. La Orden ICT/155/2020 limita ese error, pero lo correcto es pesar con la carga centrada.",
    },
  ],
};
