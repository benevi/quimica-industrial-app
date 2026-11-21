import type { Lesson } from "./types";

export const volumetricoAFondo: Lesson = {
  slug: "volumetrico-a-fondo",
  level: 4,
  order: 6,
  title: "Material volumétrico a fondo: medir volúmenes con exactitud",
  titleEn: "Volumetric glassware in depth: measuring volumes accurately",
  minutes: 38,
  summary:
    "Para contener y para verter, la técnica correcta de cada pieza, el menisco y el paralaje, cómo cambia el volumen con la temperatura, la calibración pesando agua, exactitud y precisión con cinco repeticiones, y por qué un error de medio mililitro puede rechazar un lote bueno.",
  body: `
En «Material volumétrico y cómo medir volúmenes» conociste las piezas y la regla del menisco. Aquí verás la técnica de cada una, de dónde salen los errores y cómo se comprueba que una pipeta mide bien.

### Por qué te importa a ti, que estás en planta
Con tu muestra, el analista pesa, disuelve en un matraz, toma una parte con una pipeta y la diluye en otro matraz antes de meterla en el equipo. El resultado que te llega (por ejemplo, la riqueza del producto) se calcula con esos volúmenes. Si uno está mal, el número está mal aunque el equipo funcione perfecto, y un resultado falsamente bajo puede dejar retenido un lote que estaba bien.

### Para contener y para verter
- **Para contener** (*to contain*, TC, marcado «In»): el volumen marcado es el que hay **dentro** al llegar a la marca. El manual de orientación de laboratorio de la FDA dice que muchos matraces aforados están calibrados así.
- **Para verter** (*to deliver*, TD, marcado «Ex»): el volumen marcado es el que **sale** al vaciarlo. Según ese manual, muchas pipetas aforadas están calibradas para verter un volumen dado tras un tiempo de vaciado dado.

¿Por qué no da lo mismo? Al vaciar un recipiente mojado, una película de líquido se queda en la pared y una gotita en la punta. La pipeta para verter ya está calibrada contando con eso. El matraz para contener, no: si lo vacías, sale algo menos de lo que marca. Por eso el matraz sirve para **preparar** un volumen exacto y la pipeta, para **trasladarlo**.

### Aforado, graduado, clase A y clase B
- **Aforado** (*volumetric*): una sola marca, un solo volumen. Es lo más exacto.
- **Graduado** (*graduated*): una escala con muchas marcas (pipeta graduada, bureta, probeta). Mide volúmenes distintos a cambio de algo de exactitud.

La **clase A** tiene tolerancias estrechas, para análisis; la **clase B**, más amplias. Las tolerancias oficiales están en normas de pago y en la farmacopea, que no reproducimos. El manual de la FDA da, como posibles respuestas de un ejercicio y advirtiendo que dependen del fabricante, estos valores, que usaremos como tolerancias de ejemplo:

| Material | Valor del manual de la FDA |
|---|---|
| Pipeta aforada clase A de 10 mL | 0,02 mL |
| Matraz aforado clase A de 100 mL | 0,08 mL |
| Pipeta graduada de 10 mL (tipo Mohr) | 0,04 mL |
| Micropipeta de 1 mL | 0,02 mL |
| Micropipeta de 10 µL | 0,5 µL |
| Probeta de 100 mL | 0,5 mL |
| Vaso graduado de 250 mL | 10 mL |

La Organización Mundial de la Salud (OMS) da para el trabajo rutinario con material clase A unas incertidumbres objetivo algo mayores, porque suman la variación del propio analista: matraz de 100 mL, 0,12 %; matraz de 10 mL, 0,50 %; pipeta aforada de 10 mL, 0,25 %; de 1 mL, 0,98 %. **Cuanto más pequeño el volumen, mayor el error relativo.**

### El menisco y el paralaje, desde cero
En un tubo de vidrio fino, el agua «trepa» un poco por la pared y su superficie forma una curva hundida en el centro: el **menisco** (*meniscus*). Pasa porque el agua se agarra al vidrio con más fuerza que a sí misma.

- **Menisco cóncavo** (hundido): agua y casi todas las disoluciones. Se lee en el **punto más bajo**.
- **Menisco convexo** (abombado): un líquido que no moja el vidrio, como el mercurio. Se lee en el **punto más alto**.

El **error de paralaje** (*parallax error*) aparece cuando no miras de frente, como el copiloto que ve desplazada la aguja del reloj del coche:

- **Desde arriba**, el menisco parece más alto de lo que está: crees que has llegado y te quedas **corto**.
- **Desde abajo**, parece más bajo: sigues echando y **te pasas**.

El truco: la raya delantera y la trasera del aforo deben verse como una sola línea. Entonces tus ojos están a su altura.

### La temperatura cambia el volumen
Casi todo el material volumétrico está calibrado a **20 °C**. Al calentarse, el agua se dilata: la misma masa ocupa más sitio (lo viste en «Densidad a fondo»). Densidades del agua a presión atmosférica, calculadas con la formulación IAPWS-IF97:

| Temperatura | Densidad del agua (g/mL) |
|---|---|
| 15 °C | 0,999101 |
| 20 °C | 0,998206 |
| 21 °C | 0,997995 |
| 22 °C | 0,997773 |
| 23 °C | 0,997541 |
| 25 °C | 0,997048 |
| 40 °C | 0,992224 |

**Cuenta: de 20 a 25 °C.** Tienes 100,00 mL de agua a 20 °C. Su masa: 100 × 0,998206 = 99,8206 g. La masa no cambia al calentar, así que a 25 °C ocupa 99,8206 / 0,997048 = **100,116 mL**: 0,116 mL más, un 0,12 %. La tolerancia de ejemplo del matraz de 100 mL es 0,08 mL: cinco grados ya meten más error que el propio matraz.

**Al revés, que es lo peligroso.** Si enrasas un matraz de 100 mL a 25 °C y se enfría a 20 °C, quedan 100 × 0,997048 / 0,998206 = 99,884 mL. Si lo enrasas a 40 °C (porque al disolver se calentó), quedan 100 × 0,992224 / 0,998206 = **99,401 mL**: un 0,6 % menos y una concentración un 0,6 % mayor de lo que dice la etiqueta.

El vidrio también cambia algo de tamaño, mucho menos que el líquido; no lo calculamos porque no tenemos un dato verificado. Regla práctica: enrasa con la disolución a temperatura del laboratorio, sin calentar el cuello con la mano, y anota la temperatura si el método lo pide.

### El matraz aforado, paso a paso
1. Comprueba volumen, clase, limpieza y que no tiene golpes.
2. Disuelve el sólido en un vaso o en el propio matraz con parte del disolvente.
3. Pasa la disolución con un embudo y enjuaga vaso y embudo varias veces, echando los lavados al matraz: lo que queda en el vaso es soluto perdido.
4. Llena hasta poco por debajo del cuello, mezcla con un giro suave y espera a que esté a temperatura ambiente.
5. Completa con frasco lavador y, al final, gota a gota, hasta que el fondo del menisco toque la marca con los ojos a su altura. Si te pasas, no se saca líquido: se prepara de nuevo.
6. Tapa y **homogeneiza** invirtiendo el matraz varias veces. Sin esto, arriba y abajo hay concentraciones distintas.

### Pipeta aforada y graduada, paso a paso
Nunca se pipetea con la boca: la nota técnica NTP 433 del Instituto Nacional de Seguridad y Salud en el Trabajo (INSST) lo prohíbe y pide aspiradores de caucho o de cremallera que ajusten bien, los **pipeteadores** (*pipette fillers*).

1. Pipeta limpia, sin la punta desportillada y con marcas legibles.
2. **Enjuágala con la propia disolución** dos o tres veces y tira esos lavados; si quedaba agua dentro, diluiría lo que mides.
3. Aspira un poco por encima de la marca, con la punta siempre sumergida.
4. Seca el exterior de la punta y, con la pipeta vertical y la marca a la altura de los ojos, baja hasta que el menisco toque la marca. Quita la gota que cuelga tocando la pared de un vaso de desecho.
5. Vacía en el recipiente con la punta apoyada en la pared interior.
6. Cuando deje de caer, **espera** el tiempo que indique la pipeta o el procedimiento y retírala rozando la pared.
7. **No soples** la gotita de la punta: la pipeta para verter ya la tiene contada. Solo se sopla si la pipeta lo indica.

El manual de la FDA enumera las variables de una pipeta de 10 mL: tiempo de vaciado, gotas en la pared por suciedad, temperatura, enrase del menisco, ángulo de vaciado, la última gota, el enjuague con la disolución y la calibración. Cada paso de la lista controla una de ellas.

En la **pipeta graduada** el volumen es la diferencia entre dos lecturas de la escala; las dos se leen con el mismo cuidado.

### La bureta, paso a paso
Tubo largo graduado con llave, para añadir volumen poco a poco en una valoración.

1. Limpia y sin fugas por la llave; enjuagada dos o tres veces con la disolución.
2. Llénala por encima del cero y **quita el embudo**, que podría gotear y añadir volumen sin que lo veas.
3. **Purga**: abre la llave del todo un momento para llenar la punta y echar las burbujas. Una burbuja que sale a mitad de valoración se cuenta como volumen gastado sin haberse añadido.
4. Enrasa en cero o anota la lectura inicial exacta.
5. Al acabar, espera a que baje la película de las paredes y lee a la altura del menisco. Gasto = lectura final − lectura inicial.

### La probeta: solo para aproximar
La probeta (*graduated cylinder*) tiene una tolerancia de ejemplo de 0,5 mL en 100 mL, seis veces la del matraz. Sirve para un disolvente de lavado o cuando el método dice «unos 100 mL»; nunca para llevar a volumen un patrón o una muestra que se van a cuantificar.

### Micropipetas de émbolo
Para microlitros (1 µL es la milésima parte de 1 mL) se usan **micropipetas de émbolo** (*piston pipettes*): el émbolo aspira un colchón de aire que arrastra el líquido a una **punta** (*tip*) desechable. Buena técnica, según guías de laboratorio y fabricantes:

- Punta del modelo correcto, bien encajada, nueva para cada muestra.
- **Prehumectar** (*pre-wetting*): aspirar y expulsar el líquido un par de veces antes de la toma buena, para igualar el aire de dentro con el líquido.
- Pulsar hasta el primer tope, sumergir poco y en vertical y soltar despacio: muy hondo se moja el exterior; muy poco, entra aire.
- Dispensar con la punta en la pared hasta el segundo tope, a velocidad constante y sin soltar el émbolo de golpe.
- Micropipeta, puntas y líquido a la misma temperatura.

El procedimiento de equipos de la FDA pide comprobar exactitud y precisión de pipetas mecánicas, micropipetas, buretas mecánicas y dosificadores pesando agua, al recibirlos y como mínimo cada 6 meses.

### Dosificadores y diluidores
El **dosificador de botella** (*bottle-top dispenser*) se rosca sobre el frasco y suelta el volumen ajustado al bajar un émbolo; la NTP 433 recomienda un dispensador automático para algunos reactivos, porque evita trasvasar corrosivos a mano. El **diluidor** (*diluter*) toma un volumen de muestra y lo empuja con disolvente en un solo gesto. Los dos se purgan de burbujas y se calibran pesando agua como el resto.

### Calibración gravimétrica: pesar el agua
El manual de la FDA lo explica así: todo el material volumétrico puede calibrarse pesando el agua vertida, porque la masa se mide con más exactitud que el volumen, con una tabla de densidades del agua. Recomienda agua recién hervida, porque los gases disueltos cambian un poco su densidad. Según el Vocabulario Internacional de Metrología (VIM), calibrar es relacionar lo que indica el instrumento con el valor de un patrón; aquí, la balanza calibrada y la densidad del agua.

El método: mide la temperatura del agua, pesa el agua vertida (o la contenida), calcula **volumen = masa / densidad** y **error = volumen medido − nominal**, y compáralo con la tolerancia.

**Cuenta 1. Pipeta aforada de 10 mL a 21 °C.** Agua vertida: 9,9752 g. Volumen: 9,9752 / 0,997995 = **9,9952 mL**. Error: −0,0048 mL, dentro de 0,02 mL. Cumple.

**Cuenta 2. Matraz aforado de 100 mL a 22 °C.** Es para contener: se pesa seco y vacío (62,4183 g) y lleno hasta la marca (162,1518 g). Agua: 99,7335 g. Volumen: 99,7335 / 0,997773 = **99,9561 mL**. Error: −0,0439 mL, dentro de 0,08 mL. Cumple.

**Cuenta 3. Micropipeta ajustada a 1000 µL a 23 °C.** Agua: 0,9921 g. Volumen: 0,9921 / 0,997541 = 0,9945 mL = **994,5 µL**. Error: −5,5 µL (−0,55 %), dentro de 20 µL. Cumple.

**El empuje del aire, como idea.** La balanza pesa en aire, y el aire empuja hacia arriba el agua y las pesas de calibración de la balanza, cada uno según su volumen. Con valores de ejemplo (aire de 1,2 kg/m³ y pesas de 8000 kg/m³), la corrección es de un 0,1 % hacia arriba. Aquí no la aplicamos; tu laboratorio sigue su procedimiento.

### Exactitud y precisión: cinco repeticiones de una pipeta
El VIM distingue:

- **Exactitud** (*accuracy*): cercanía de un valor medido al valor verdadero.
- **Precisión** (*precision*): cercanía entre sí de medidas repetidas en las mismas condiciones; suele expresarse con la desviación típica.
- **Error sistemático** (*systematic error*): la parte del error que se mantiene o varía de forma previsible; si se conoce, se corrige.
- **Error aleatorio** (*random error*): la parte que varía de forma impredecible.

Una pipeta de 10 mL se pesa cinco veces a 20 °C: 9,9781; 9,9841; 9,9751; 9,9811; 9,9771 g. Entre 0,998206 dan 9,996; 10,002; 9,993; 9,999; 9,995 mL.

**La media**: 49,985 / 5 = **9,997 mL**. Error sistemático estimado: 9,997 − 10 = −0,003 mL.

**La desviación típica** (*standard deviation*), desde cero:

1. Resta la media a cada valor: −0,001; +0,005; −0,004; +0,002; −0,002 mL.
2. Eleva cada resta al cuadrado, para que los signos no se anulen: 0,000001; 0,000025; 0,000016; 0,000004; 0,000004.
3. Súmalos: 0,000050.
4. Divide entre el número de medidas menos uno (4): 0,0000125. Se resta uno porque la media ya salió de esos mismos datos.
5. Raíz cuadrada: **s = 0,0035 mL**, un 0,035 % de la media. Python (statistics.stdev) da lo mismo.

La pipeta es precisa (valores casi iguales) y exacta (media a 0,003 mL del nominal). Una pipeta con la punta rota podría dar cinco valores igual de juntos alrededor de 9,960 mL: precisa pero no exacta. Una mala técnica dispersa los valores: crece el error aleatorio.

### Limpieza, secado, almacenamiento e inspección
- **Limpio de verdad**: según la FDA, si el agua escurre en película continua sin formar gotas, está limpio. Gotas pegadas: grasa, y la pipeta vierte menos.
- **Cómo limpiar**: detergente de laboratorio y aclarados con agua corriente y purificada. La NTP 464 del INSST pide descartar la mezcla crómica salvo que no haya alternativa, porque lleva dicromato potásico, clasificado como cancerígeno, y para aclarar y secar con disolvente propone isopropanol en vez de metanol, por ser menos tóxico.
- **Secado**: una guía del instituto de metrología de Estados Unidos (NIST), vista solo en el buscador, advierte que la estufa puede dilatar el vidrio aforado de forma permanente y sacarlo de calibración; otros estudios dicen que a temperaturas moderadas no cambia. Sin haber leído la fuente, la regla prudente: seca al aire o como digan el fabricante y el procedimiento. El material para verter enjuagado con la disolución no necesita estar seco; el material para contener que se pesa vacío, sí.
- **Almacenamiento**: tapado, sin polvo, en su sitio y sin apilar piezas sueltas.
- **Inspección**: la NTP 433 pide desechar las piezas con el más mínimo defecto y las que hayan recibido un golpe fuerte aunque no se vea grieta. Además: punta sin desportillar, marcas de aforo y de clase legibles, llave de bureta sin fugas.

### Preparar una disolución y una dilución
La fórmula C1 · V1 = C2 · V2 está en «Disoluciones y solubilidad a fondo». Aquí la usamos con el esquema de un ejemplo de la OMS: pesar, llevar a volumen y diluir.

**Cuenta 1. Disolución madre.** 50,0 mg de patrón llevados a 50 mL en matraz aforado: 50,0 / 50 = **1,00 mg/mL**.

**Cuenta 2. Primera dilución.** 1,0 mL con pipeta, llevado a 10 mL: 1,00 × 1,0 / 10 = **0,100 mg/mL**. Dilución 1 en 10.

**Cuenta 3. Segunda dilución.** 5,00 mL de esa, llevados a 100 mL: 0,100 × 5,00 / 100 = **0,00500 mg/mL** (5,00 µg/mL). Dilución 1 en 20; desde la madre, 1 en 200.

Cada paso suma su error; por eso los métodos prefieren pocas diluciones y piezas lo más grandes que permita el método.

### Errores típicos y su efecto en el resultado
| Error | Qué pasa con el volumen | Qué pasa con la disolución |
|---|---|---|
| Enrasar mirando desde arriba | Falta líquido | Más concentrada |
| Pasarse del aforo | Sobra líquido | Más diluida |
| Enrasar en caliente | Al enfriar queda menos | Más concentrada |
| Soplar la gota de una pipeta para verter | Sale de más | Toma con más soluto |
| No enjuagar la pipeta con la disolución | Se mezcla con agua de dentro | Toma con menos soluto |
| Burbuja en la punta de la bureta | Lectura falsa | Valoración errónea |
| No homogeneizar | Concentración desigual | Resultado al azar |
| Pipeta sucia o desportillada | Vierte menos | Error sistemático |

**Cuenta del lote bueno rechazado (valores de ejemplo).** La especificación de riqueza es de 98,0 a 102,0 % y la riqueza real, 98,4 %. El analista se pasa del aforo y su matraz de 100 mL queda con 100,6 mL. La muestra está más diluida y el resultado sale 98,4 × 100 / 100,6 = **97,81 %**: fuera de especificación por 0,6 mL.

La ICH Q7 pide investigar y documentar todo resultado fuera de especificación (*out-of-specification*, OOS), y la guía de la OMS incluye en esa revisión comprobar que se usó el material de vidrio correcto. Si se identifica el error, el resultado se invalida y se repite el análisis; si no se encuentra, el resultado no se puede descartar.

### Lo que te toca a ti
Tú no enrasas matraces, pero tu muestra entra en ellos: tomarla bien, identificarla y entregarla a tiempo es la primera parte de un resultado correcto.

Las tolerancias de esta lección son de ejemplo. En planta y en el laboratorio manda siempre el procedimiento vigente (SOP): material, clase, tolerancias, tiempos y calibraciones son los que diga el tuyo.
`,
  plant: `
Lote ficticio TZ-40 del principio activo de ejemplo TZ. Has descargado el secadero SD-305 y tomado la muestra para el análisis de liberación, con su etiqueta y la hora en la hoja.

Por la tarde llega el aviso: riqueza 97,8 %, y la especificación es de 98,0 a 102,0 %. El lote queda retenido y no se envasa. Tu jefa de turno te pide la hoja del secado: todo en rango, sin incidencias.

El laboratorio abre la investigación del resultado fuera de especificación. La analista revisa con su supervisor la lista de comprobación: cálculos, balanza BA-03 calibrada, patrón vigente, cromatógrafo correcto. Al revisar el material de vidrio aparece el problema: el matraz aforado de 100 mL de la muestra, código MV-100-12, tiene el aforo medio borrado y nadie lo había retirado. Con la marca casi invisible, el enrase quedó por encima.

El error está identificado, así que el resultado se invalida y se repite el análisis con material nuevo y la misma muestra: 98,5 % y 98,4 % en la repetición. Cumple. El lote sigue su camino tras la revisión de calidad, con un día de retraso.

El matraz MV-100-12 se retira y se desecha, y el laboratorio revisa todo el material del cajón. A ti te queda la lección: tu muestra estaba bien, y aun así un error de menos de un mililitro en otro sitio paró tu lote.
`,
  batchRecord: `
El material volumétrico vive en el laboratorio, pero en la hoja de producción (*batch record*) y en lo que la rodea verás su huella:

- **Toma de muestra**: equipo (p. ej. SD-305), punto, hora, cantidad, recipiente e identificación de la muestra, con tu firma. Es la primera línea del resultado.
- **Resultado del laboratorio**: el valor que llega (98,5 %, no «cumple»), con la referencia del análisis y si es aprobado, rechazado o en investigación.
- **Estado del lote**: retenido mientras haya un resultado fuera de especificación abierto; no se envasa ni se mezcla.
- **Si preparas una disolución en planta** (un ácido o una base para ajustar pH, por ejemplo): material o equipo usado, volumen o masa, concentración, temperatura si la hoja lo pide, fecha, caducidad y firma.
- **Si usas una probeta o un vaso graduado en planta**: solo para cantidades que la hoja da como aproximadas; si el volumen es crítico, se mide como diga la hoja.
- **Incidencias**: material roto, desportillado o sin marcas, se aparta y se anota según el procedimiento.

Siempre se anota el valor medido o recibido, con su unidad, nunca el esperado.
`,
  terms: [
    { es: "Material para contener", en: "To contain (TC, In)", def: "Material calibrado para que el volumen marcado sea el que hay dentro al llegar a la marca, como el matraz aforado." },
    { es: "Material para verter", en: "To deliver (TD, Ex)", def: "Material calibrado para que el volumen marcado sea el que sale al vaciarlo, contando con lo que se queda en las paredes, como la pipeta aforada." },
    { es: "Material aforado", en: "Volumetric glassware (single mark)", def: "Pieza con una sola marca para un solo volumen; es la más exacta." },
    { es: "Material graduado", en: "Graduated glassware", def: "Pieza con escala de varias marcas, como la bureta, la pipeta graduada o la probeta." },
    { es: "Menisco", en: "Meniscus", def: "Curva de la superficie de un líquido en un tubo. Cóncavo se lee abajo; convexo, arriba." },
    { es: "Error de paralaje", en: "Parallax error", def: "Error de lectura por no tener los ojos a la altura de la marca." },
    { es: "Homogeneizar", en: "Mix by inversion", def: "Invertir varias veces el matraz tapado para igualar la concentración en todo el volumen." },
    { es: "Pipeteador", en: "Pipette filler", def: "Aspirador de caucho o de cremallera para llenar pipetas sin usar la boca." },
    { es: "Micropipeta de émbolo", en: "Piston pipette", def: "Pipeta de microlitros con émbolo, colchón de aire y punta desechable." },
    { es: "Prehumectar", en: "Pre-wetting", def: "Aspirar y expulsar el líquido un par de veces antes de la toma buena." },
    { es: "Calibración gravimétrica", en: "Gravimetric calibration", def: "Comprobar un material volumétrico pesando el agua que contiene o vierte y pasándola a volumen con la densidad del agua." },
    { es: "Desviación típica", en: "Standard deviation", def: "Medida de cuánto se separan las medidas repetidas de su media; expresa la precisión." },
    { es: "Error sistemático", en: "Systematic error", def: "Parte del error que se repite igual en cada medida; afecta a la exactitud." },
    { es: "Error aleatorio", en: "Random error", def: "Parte del error que varía de forma impredecible entre medidas; afecta a la precisión." },
  ],
  quiz: [
    {
      kind: "choice",
      q: "Necesitas trasladar exactamente 25 mL de una disolución a un vaso. ¿Qué pieza usas?",
      options: [
        "Una pipeta aforada de 25 mL, marcada para verter (Ex o TD)",
        "Un matraz aforado de 25 mL, que está marcado para contener",
        "Una probeta de 25 mL, que tiene la escala más fácil de leer",
        "Un vaso de precipitados de 50 mL con su raya de 25 mL",
      ],
      answer: 0,
      explain: "La pipeta para verter está calibrada para el volumen que sale. Un matraz para contener vierte algo menos de lo que marca, y probeta y vaso son solo aproximados.",
    },
    {
      kind: "number",
      q: "Calibras una pipeta aforada de 25 mL. El agua vertida pesa 24,9530 g a 22 °C, donde la densidad del agua es 0,997773 g/mL. ¿Qué volumen vierte?",
      answer: 25.009,
      tolerance: 0.0002,
      unit: "mL",
      explain: "Volumen = masa / densidad = 24,9530 / 0,997773 = 25,009 mL. Error: +0,009 mL.",
    },
    {
      kind: "number",
      q: "Tienes 500,00 mL de agua a 20 °C (densidad 0,998206 g/mL) y se calienta a 25 °C (densidad 0,997048 g/mL). ¿Qué volumen ocupa ahora?",
      answer: 500.58,
      tolerance: 0.00005,
      unit: "mL",
      explain: "Masa = 500 × 0,998206 = 499,103 g. A 25 °C: 499,103 / 0,997048 = 500,58 mL. Ha crecido 0,58 mL sin añadir nada.",
    },
    {
      kind: "number",
      q: "Una micropipeta ajustada a 200 µL dispensa agua que pesa 0,1987 g a 20 °C (densidad 0,998206 g/mL). ¿Cuántos microlitros ha dispensado?",
      answer: 199.1,
      tolerance: 0.002,
      unit: "µL",
      explain: "0,1987 / 0,998206 = 0,19906 mL, que son 199,1 µL. Error: −0,9 µL, un −0,47 %.",
    },
    {
      kind: "choice",
      q: "Al enrasar un matraz aforado lo miras desde arriba y paras cuando el menisco parece tocar la marca. ¿Qué ocurre?",
      options: [
        "Nada: desde arriba se ve mejor el fondo del menisco",
        "Sobra líquido y la disolución queda más diluida",
        "Falta líquido y la disolución queda más concentrada",
        "Solo cambia el resultado si el líquido es mercurio",
      ],
      answer: 2,
      explain: "Desde arriba el menisco parece más alto de lo que está: paras antes de llegar, falta volumen y la disolución sale más concentrada. Hay que tener los ojos a la altura de la marca.",
    },
    {
      kind: "number",
      q: "Tres repeticiones de una pipeta dan 10,010; 10,004 y 10,007 mL. ¿Cuál es su desviación típica (dividiendo entre n − 1)?",
      answer: 0.003,
      tolerance: 0.02,
      unit: "mL",
      explain: "Media: 30,021 / 3 = 10,007. Restas: +0,003; −0,003; 0. Cuadrados: 0,000009 + 0,000009 + 0 = 0,000018. Entre 3 − 1 = 2: 0,000009. Raíz: 0,003 mL.",
    },
    {
      kind: "choice",
      q: "Vas a empezar una valoración y ves una burbuja de aire en la punta de la bureta, por debajo de la llave. ¿Qué haces?",
      options: [
        "Empiezo igual: la burbuja no está en la escala graduada",
        "Purgo abriendo la llave hasta echar la burbuja y luego enraso",
        "Resto a ojo un mililitro al volumen final de la valoración",
        "Golpeo la bureta con el embudo puesto para que suba sola",
      ],
      answer: 1,
      explain: "Si la burbuja sale durante la valoración, su volumen se cuenta como gastado sin haberse añadido. Se purga antes, se quita el embudo y se enrasa.",
    },
    {
      kind: "number",
      q: "Tomas 2,0 mL de una disolución de 0,500 mg/mL con pipeta y los llevas a 50 mL en un matraz aforado. ¿Qué concentración tiene la diluida?",
      answer: 0.02,
      tolerance: 0.001,
      unit: "mg/mL",
      explain: "C2 = C1 × V1 / V2 = 0,500 × 2,0 / 50 = 0,02 mg/mL, es decir, 20 µg/mL. Dilución 1 en 25.",
    },
    {
      kind: "number",
      q: "Una muestra tiene una riqueza real de 99,1 % (valor de ejemplo). El analista se pasa del aforo y su matraz de 100 mL queda con 100,5 mL. ¿Qué riqueza dará el análisis?",
      answer: 98.61,
      tolerance: 0.0002,
      unit: "%",
      explain: "La muestra queda más diluida: 99,1 × 100 / 100,5 = 98,61 %. Medio mililitro de más baja el resultado casi medio punto.",
    },
    {
      kind: "choice",
      q: "Coges una pipeta aforada para un análisis y ves que tiene la punta un poco desportillada, aunque la marca se lee bien. ¿Qué haces?",
      options: [
        "La uso: la marca de aforo se lee bien y es lo que cuenta",
        "La uso, pero soplo la última gota para compensar la punta",
        "La lavo con mezcla crómica y la vuelvo a poner en el cajón",
        "La aparto, no la uso y sigo el procedimiento para retirarla",
      ],
      answer: 3,
      explain: "Una punta rota cambia lo que vierte la pipeta y corta. La NTP 433 del INSST pide desechar el material con el más mínimo defecto; se aparta según el procedimiento.",
    },
  ],
};
