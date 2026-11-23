import type { Lesson } from "./types";

export const muestreoAFondo: Lesson = {
  slug: "muestreo-a-fondo",
  level: 5,
  order: 4,
  title: "Muestreo en planta a fondo: tomar una muestra que diga la verdad del lote",
  titleEn: "In-process sampling in depth: taking a sample that tells the truth about the batch",
  minutes: 38,
  summary:
    "Qué es una muestra representativa y por qué un análisis perfecto no salva una muestra mal tomada, qué son los controles en proceso según ICH Q7, cómo se muestrea en el reactor, la centrífuga, el filtro-secador, el secadero, el molino y el envasado, cuánto se purga y cuánto se saca, qué envase y qué etiqueta lleva la muestra, cómo muestrear sin hacerse daño y qué hacer con el resultado.",
  body: `
En «Por qué y cómo se muestrea» viste el plan de muestreo y la regla de la raíz cuadrada, que se usa sobre todo al recibir materiales («Recepción, muestreo y cuarentena a fondo»). En «Toma de muestras de sólidos y líquidos» viste los útiles. Aquí te centras en lo que haces tú durante la fabricación: sacar del equipo unos gramos que cuenten la verdad de cientos de kilos.

Las citas salen de ICH Q7 (normas de correcta fabricación, *Good Manufacturing Practice* o GMP, para principios activos), de la guía de muestreo de la Organización Mundial de la Salud (OMS, informe técnico n.º 929, anexo 4), del anexo 8 de las GMP europeas y del Instituto Nacional de Seguridad y Salud en el Trabajo (INSST). Lo que no sale de una norma se marca como práctica general.

### La sopa removida y la sopa sin remover
Una olla de sopa con fideos lleva un rato quieta: los fideos están en el fondo y arriba flota la grasa. Una cucharada de la superficie dice que la sopa no tiene fideos y está muy grasa. Es falso. Si remueves y luego pruebas, la cucharada se parece a toda la olla.

Una **muestra representativa** (*representative sample*) es esa cucharada buena: según la OMS, la tomada con un procedimiento pensado para que las distintas partes del lote estén representadas en su proporción.

El laboratorio solo analiza lo que le llevas. Con la cucharada de la superficie, un análisis perfecto te da un número exacto de algo que no es tu lote. El anexo 8 de las GMP europeas lo dice así: muestrear es tomar solo una fracción pequeña del lote, y de ensayos hechos con muestras no representativas no se pueden sacar conclusiones válidas sobre el conjunto.

### Por qué un lote no es igual en todas partes
Un material es **heterogéneo** (*non-uniform*) cuando no es igual en todos sus puntos. En planta pasa por tres motivos principales:

| Fenómeno | Qué pasa | Dónde lo verás |
|---|---|---|
| **Estratificación** (*stratification*) | Un líquido se separa en capas, como el aceite sobre el agua | Reactor con agitación parada tras una extracción; bidón de disolvente húmedo |
| **Sedimentación** (*settling*) | Los sólidos de una suspensión caen al fondo | Reactor con cristales tras la cristalización, si se para el agitador |
| **Segregación** (*segregation*) | En un polvo, los granos gruesos y los finos se separan al moverse | Tolva del molino, bidones de producto seco, saco que se ha transportado |

La OMS da como señales de falta de uniformidad las partículas de distinta forma, tamaño o color, las costras húmedas, los posos y las capas. Esas partes se muestrean aparte y no se juntan con el resto, porque mezclarlas puede ocultar una contaminación o una riqueza baja.

El propio muestreo puede provocar segregación. La OMS avisa: con una cuchara pequeña para el tamaño de los granos, los gruesos se caen; dar golpecitos a la cuchara para vaciarla separa los granos, y una sonda metida en vertical puede sacar granos de otro tamaño que metida en ángulo. Cada útil tiene su técnica, y la dice tu procedimiento.

### Los controles en proceso
Un **control en proceso** (*in-process control*, IPC) es, según el glosario de ICH Q7, una comprobación que se hace durante la producción para vigilar el proceso, ajustarlo si hace falta y asegurar que el intermedio o el principio activo cumplirá su especificación. Es como probar la sopa mientras se cocina, no cuando ya está servida.

Lo que dice ICH Q7 en su apartado 8.3:

- **8.30**: procedimientos escritos para vigilar y controlar los pasos que causan variabilidad en la calidad; los criterios salen del desarrollo o de los datos históricos.
- **8.31**: al principio del proceso pueden bastar controles menos estrictos; en los pasos finales, como aislamiento y purificación, se aprietan.
- **8.32**: los controles críticos, con sus puntos y métodos, van por escrito y los aprueba la unidad de calidad.
- **8.33**: los puede hacer **personal de producción cualificado**, y el proceso se puede ajustar sin permiso previo de calidad si el ajuste está dentro de límites aprobados por calidad. Todo se documenta en la hoja del lote.
- **8.34**: procedimientos escritos de muestreo, basados en prácticas científicamente sólidas.
- **8.35**: muestrear sin contaminar lo muestreado ni otros productos, y asegurar la integridad de la muestra después de tomarla.
- **8.36**: normalmente no hace falta investigar como fuera de especificación (*out of specification*, OOS) un control que sirve para vigilar o ajustar el proceso.

¿Quién los hace? Algunos tú mismo, en planta (un pH, un aspecto); ICH Q7 admite laboratorios de controles en proceso dentro de producción si no se estorban (4.16). Otros, el laboratorio de calidad. La muestra la sueles tomar tú.

Ejemplos típicos (los límites son valores de ejemplo):

| Control | Para qué | Ejemplo de criterio en la hoja |
|---|---|---|
| Conversión de la reacción | Saber si queda material de partida sin reaccionar | Material de partida ≤ 1,0 % por cromatografía |
| pH tras un ajuste | Comprobar que la adición de ácido o base llegó a su punto | pH 6,5 a 7,5 |
| Pérdida por secado (*loss on drying*, LOD) o agua | Saber si el secado ha terminado | LOD ≤ 0,5 % |
| Disolvente residual | Comprobar que el disolvente ha bajado de su límite | Tolueno ≤ límite de la especificación |
| Aspecto | Detectar color, turbidez o partículas raras | Suspensión blanca, sin partículas negras |
| Oxígeno antes de cargar | Comprobar la inertización | O₂ ≤ 2,0 % |

El oxígeno es especial: el medidor toma el gas en su punto de muestra. Como verás en «Inertización a fondo», la lectura vale para ese punto y ese momento, y deja de valer si se abre el equipo.

ICH Q7 relaciona los controles con el tiempo (8.20): cuando se trabaja hasta un objetivo, como un ajuste de pH, una hidrogenación o un secado hasta especificación, el final del paso lo decide el muestreo y el análisis, no el reloj.

### El reactor
**Por dónde.** Lo normal es una **válvula de muestreo** (*sampling valve*) en el fondo o en una línea de recirculación, o un **tomamuestras cerrado** (*closed sampling system*): un dispositivo que llena el frasco sin que el líquido ni sus vapores salgan al ambiente.

**Por qué no por la boca de hombre.** Meter un cazo por la boca de hombre parece más fácil, pero:

- **Rompe la inertización.** Entra aire, y el oxígeno que se midió antes ya no vale («Inertización a fondo»).
- **Te expone.** Salen vapores a tu cara justo donde estás asomado.
- **Puede dar una chispa.** La NTP 225 del INSST explica que, tras un trasvase, el líquido queda cargado de electricidad estática hasta que pasa su tiempo de relajación, y que puede saltar una chispa entre el líquido y un elemento metálico, como un muestreador introducido por la boca, justo donde suele estar la atmósfera inflamable. Las notas técnicas de prevención (NTP) 225 y 768 piden esperar ese tiempo antes de abrir tapas o tomar muestras: según la NTP 768, al menos 30 segundos para líquidos conductores y un minuto para los no conductores.

**El tramo muerto.** Entre el reactor y la salida de la válvula hay tubería donde el líquido no se mueve: el **tramo muerto** (*dead leg*). Lo que hay ahí puede ser de hace horas o estar más frío. Por eso, antes de llenar el frasco, se **purga**: se deja salir un volumen que arrastra lo estancado. Cuánto, lo fija tu procedimiento; la cuenta está más abajo.

**Paso a paso (práctica general; manda tu procedimiento):**

1. Lee en la hoja qué muestra, para qué análisis, cuánta y en qué envase.
2. Comprueba temperatura, presión y agitación. Si la hoja pide el agitador en marcha, que lo esté: así no hay capas ni sedimento.
3. Ponte la protección del procedimiento y, con inflamables, conecta la pinza de tierra si el tomamuestras la lleva.
4. Coloca el recipiente de purga, abre despacio y purga el volumen indicado.
5. Llena el frasco, ciérralo enseguida y cierra la válvula.
6. Etiqueta en el momento y anota la hora exacta.
7. Gestiona la purga según el procedimiento. Las muestras, dice la OMS, nunca se devuelven al lote.

**Muestra caliente o a presión.** Una muestra a 70 °C quema, suelta más vapor y cambia al enfriarse: aparecen cristales o se pierde disolvente. Y no se abre una toma de un equipo con presión si el tomamuestras no está hecho para ello: primero, las condiciones que diga el procedimiento.

### La centrífuga
La torta se muestrea con la centrífuga **parada** y en las condiciones seguras que verás en «La centrífuga a fondo». Nunca se mete la mano ni un útil con el cesto girando.

La torta no es igual en todas partes: la capa junto a la tela y la del centro reciben distinto lavado, y el borde puede estar más húmedo o sucio. ICH Q7 cita la capa de cristales húmedos que queda en el cesto tras descargar como resto que pasa al lote siguiente (8.50); tampoco representa la torta. El procedimiento dice de qué puntos y a qué profundidad se saca. Si rascas el borde, el análisis hablará del borde.

### El filtro-secador y el secadero
Con vacío y producto caliente el equipo no se abre así como así: en «El secado a fondo» se para el giro y se rompe el vacío con nitrógeno antes de muestrear. Algunos equipos tienen un tomamuestras que saca producto sin abrir la boca de hombre. Cómo es el tuyo, lo dice el procedimiento. Tres reglas generales:

- **Nitrógeno, no aire.** Si se rompe el vacío, se rompe con nitrógeno. El producto con disolvente sigue siendo inflamable.
- **Varios puntos.** No todo el equipo seca igual: bandejas de arriba y de abajo, paredes, fondo. El procedimiento fija los puntos.
- **Que no cambie la muestra.** Un polvo seco que absorbe agua coge humedad del aire: para agua o pérdida por secado, el envase se cierra en el acto.

### El molino y el envasado
En el molino y el envasado el producto pasa en continuo, y lo del principio puede no ser igual que lo del final: el molino se calienta, la tolva segrega los granos. La práctica general es muestrear **al principio, en medio y al final**, o cada cierto número de bidones, según tu procedimiento. Cómo se cierran y etiquetan los bidones está en «Envasado y etiquetado a fondo».

### Tres cuentas
**Cuenta 1: el volumen de purga del tramo muerto.** El tramo muerto es un cilindro. Su volumen es el área del círculo por la longitud: V = π × d² / 4 × L. Valores de ejemplo: diámetro interior 25 mm (0,025 m) y longitud 0,80 m.

V = 3,1416 × 0,025 × 0,025 / 4 × 0,80 = 0,000393 m³ = 393 mL

Si el procedimiento ficticio pide purgar tres veces el volumen del tramo (valor de ejemplo), purgas 3 × 393 = 1178 mL, unos 1,2 L, antes de llenar un frasco de 100 mL. La purga es mucho mayor que la muestra.

**Cuenta 2: cuántas muestras en un envasado.** Regla de ejemplo de una planta ficticia: muestrear el primer bidón, el último y uno de cada cinco entre medias. Con 18 bidones: el 1, el 5, el 10, el 15 y el 18. Son 5 muestras.

**Cuenta 3: cuánto se lleva el muestreo.** Lote de 300 kg (valores de ejemplo): 3 muestras de pérdida por secado de 10 g (30 g), 2 de disolvente residual de 10 g (20 g), 5 del envasado de 20 g (100 g), 150 g para liberación y 150 g de reserva. Total: 30 + 20 + 100 + 150 + 150 = 450 g = 0,45 kg. Frente al lote: 0,45 / 300 × 100 = 0,15 %. Poco, pero entra en el balance («Rendimiento y balance de materia a fondo»).

### Envases y etiqueta
La OMS pide un envase que no reaccione con la muestra ni la contamine, que la proteja de la luz, el aire y la humedad cuando haga falta, y cerrado, mejor con precinto. En concreto:

- **Líquidos**: frascos con tapón de rosca y junta inerte que no deje escapar vapores ni entrar humedad.
- **Sensibles a la luz**: vidrio ámbar, o vidrio incoloro envuelto en papel de aluminio o papel oscuro.
- **Poco aire dentro**: el espacio vacío del envase se deja al mínimo, para que la muestra se degrade lo menos posible.
- **Sensibles al aire**: procedimientos especiales, como llenar con nitrógeno, si están acordados con quien recibe la muestra.
- **Sólidos**: la OMS muestra bolsas y botes de rosca. El envase de cada material está en «Conservación, transporte y cadena de custodia».

Los útiles de muestreo, según la OMS, son inertes, están muy limpios y su limpieza se registra.

La **etiqueta** se pone en el momento de muestrear (OMS). Como mínimo, para una muestra de proceso: producto, lote, etapa, punto de muestreo, fecha y hora, quién la tomó y para qué análisis. La OMS añade la cantidad, las condiciones de conservación y las precauciones de manejo, y etiquetar las dos piezas de un bote de rosca para no mezclar tapas.

### Muestrear sin hacerte daño
La guía técnica del INSST sobre agentes químicos (2022) pone la toma de muestras entre las operaciones con riesgo por contacto que necesitan procedimiento de trabajo, y cuenta como fallo que ese procedimiento no exista o esté desactualizado. Y para unos cancerígenos prohibidos que solo se admiten como intermedios, pide muestrear sacando la menor cantidad posible, con equipos que eviten su dispersión: una buena idea para cualquier producto peligroso.

Los riesgos al muestrear:

- **Exposición** a vapores y polvo («Exposición a productos químicos a fondo»).
- **Salpicaduras, chorros y quemaduras** al abrir de golpe una válvula con presión o producto caliente. Abre despacio.
- **Electricidad estática** con disolventes inflamables: tiempo de relajación, puesta a tierra y útiles adecuados («Atmósferas explosivas a fondo»).
- **Equipo de protección**: el que pida la ficha de datos de seguridad y el procedimiento. La OMS añade que, si hace falta protección respiratoria, quien muestrea debe estar formado en su uso. Cómo se elige y se usa, en «Los equipos de protección individual a fondo».

### El tiempo: una muestra que espera es una muestra que miente
El proceso suele quedarse esperando el resultado, y ese tiempo a veces cuenta contra un **tiempo de espera** (*hold time*) máximo de la hoja. ICH Q7 pide cumplir los límites de tiempo de la instrucción maestra y documentar y evaluar las desviaciones (8.20). Por qué un producto empeora esperando lo viste en «Impurezas a fondo».

La muestra también cambia mientras espera: una mezcla de reacción sigue reaccionando en el frasco, una muestra caliente cristaliza, un frasco mal cerrado pierde disolvente o coge humedad. Se lleva enseguida y se anota la hora exacta de la toma: el resultado describe el lote en ese minuto.

### Qué pasa con el resultado
La hoja dice qué hacer con cada resultado:

| Resultado | Lo que suele pedir la hoja |
|---|---|
| Cumple | Continuar con el paso siguiente |
| No cumple, y la hoja lo prevé | Prolongar (más tiempo de reacción o de secado) y volver a muestrear; o ajustar dentro de los límites aprobados (8.33) |
| No cumple, y la hoja no dice qué hacer | Parar, avisar al responsable de turno y no improvisar |
| Muy distinto de lo habitual | Avisar aunque cumpla |

Nunca se toma «otra muestra» por tu cuenta porque la primera no ha gustado. La guía de la FDA sobre resultados fuera de especificación (2022) llama **analizar hasta que cumpla** (*testing into compliance*) a repetir ensayos hasta que sale uno bueno y olvidar los malos, y lo califica de acientífico e inaceptable. Un nuevo muestreo solo se hace según procedimientos fijados de antemano («Resultados OOS y OOT: cómo se investigan»). Si crees que tu muestra estaba mal tomada, lo dices y lo anotas; si se repite, lo decide el procedimiento.

### Muestras de análisis y muestras de reserva
La **muestra de análisis** se toma para analizarla ahora y decidir sobre el proceso o el lote. La **muestra de reserva** o de retención (*reserve sample*, *retention sample*) se guarda sin analizar, por si mañana hay que volver a mirar ese lote, por ejemplo ante una reclamación.

ICH Q7 (11.70 a 11.72): la reserva sirve para evaluar en el futuro la calidad del lote, no para estudios de estabilidad. Se guarda bien identificada, en el mismo envase del producto o en uno igual o más protector, y en cantidad para al menos dos análisis completos. Los plazos están en «Envasado y etiquetado a fondo». Para ti: la de análisis va al laboratorio; la de reserva, al archivo de muestras, y no se abre «para salir del paso».

### Errores típicos y su efecto
| Error | Qué produce |
|---|---|
| No purgar el tramo muerto | Analizas líquido viejo o frío: la conversión parece peor o mejor de lo que es |
| Muestra del borde de la torta | Humedad o impurezas que no son las del lote |
| Envase sucio o mal secado | Restos de otro producto o de agua: impurezas o humedad falsas |
| Etiqueta equivocada (etapa, hora o lote) | El resultado se asigna a otra muestra; decisiones sobre el lote equivocado |
| Muestra que se calienta o se evapora | Pierde disolvente: el residual sale bajo y das por seco algo que no lo está |
| Muestra que coge humedad | El agua sale alta: secas de más sin necesidad |

El anexo 8 de las GMP europeas pide formar a quien muestrea en mirar el aspecto del material y anotar cualquier circunstancia inesperada. Lo que te llame la atención, escríbelo: también es un dato.

Los números de esta lección son ejemplos para entender. En planta manda siempre el procedimiento vigente (SOP): puntos de muestreo, purgas, cantidades, envases y criterios son los de tu hoja.
`,
  plant: `
Lote ficticio KX-23, reactor R-210. La hoja dice: *«A las 4 h de reflujo, tomar muestra IPC por la válvula de fondo VM-210 con el agitador en marcha. Purgar 1,2 L. Criterio: material de partida ≤ 1,0 %. Si no cumple, prolongar 1 h y repetir.»*

El tramo de la VM-210 tiene 25 mm de diámetro interior y 0,80 m de largo: unos 393 mL, y la purga de la hoja equivale a tres volúmenes. Te pones la pantalla facial y los guantes de la hoja, conectas la pinza de tierra del tomamuestras y colocas el recipiente de purga. Abres despacio. Sale primero un líquido más claro y frío, lo que llevaba horas en el tramo. Cuando has purgado 1,2 L, llenas el frasco de vidrio de 100 mL, lo cierras y cierras la válvula. Etiquetas en el sitio: KX-23, etapa 2, VM-210, 10:42, tus iniciales, «IPC conversión». Llevas la muestra al laboratorio sin pararte.

Resultado: 2,4 %. No cumple. La hoja lo prevé: prolongas una hora y repites el muestreo con la misma purga. Segunda muestra, 11:51: 0,7 %. Cumple, y continúas.

Tu compañero del turno anterior te cuenta que una vez tomó la muestra sin purgar «porque tenía prisa» y salió 6 %: era líquido de antes del reflujo. Hubo que anotarlo y repetir según el procedimiento. Hoy, las dos muestras están en la hoja, también la que no cumplía.
`,
  batchRecord: `
En la hoja de producción (*batch record*) verás, en cada paso con muestreo, qué muestra tomar, de dónde, cuánta, para qué análisis y con qué criterio. ICH Q7 (6.52) pide que la hoja recoja cualquier muestreo hecho y los resultados de los controles en proceso. Anotarás:

- **Equipo y punto**: código del equipo y de la válvula o tomamuestras (p. ej. R-210, VM-210).
- **Condiciones al muestrear**: temperatura, presión, agitación en marcha o parada.
- **Purga**: volumen purgado, si la hoja lo pide.
- **Muestra**: fecha y hora exacta, cantidad, envase, número o etiqueta, quién la toma.
- **Envío**: hora de entrega al laboratorio, si se registra.
- **Resultado**: el valor real (2,4 %, no «no cumple»), el criterio y quién lo informa.
- **Decisión**: continuar, prolongar, ajustar o avisar, tal como dice la hoja, con firma.
- **Repeticiones**: cada nueva muestra con su hora y su resultado; ninguna se borra.
- **Muestras de reserva**: cantidad y destino.
- **Incidencias**: aspecto raro, capas, partículas, muestra mal tomada, purga no hecha y aviso al responsable de turno.
`,
  terms: [
    { es: "Muestra representativa", en: "Representative sample", def: "Muestra tomada de forma que las distintas partes del lote estén representadas en su proporción." },
    { es: "Control en proceso", en: "In-process control (IPC)", def: "Comprobación durante la producción para vigilar el proceso, ajustarlo si hace falta y asegurar que el producto cumplirá su especificación." },
    { es: "Heterogeneidad", en: "Non-uniformity", def: "Cuando un material no es igual en todos sus puntos, por capas, sedimento o separación de granos." },
    { es: "Estratificación", en: "Stratification", def: "Separación de un líquido en capas distintas." },
    { es: "Segregación", en: "Segregation", def: "Separación de los granos gruesos y finos de un polvo al moverlo o al muestrearlo." },
    { es: "Tramo muerto", en: "Dead leg", def: "Trozo de tubería donde el líquido no circula, como el que hay entre el reactor y la salida de una válvula de muestreo." },
    { es: "Purga", en: "Purge / flush", def: "Volumen que se deja salir antes de llenar la muestra para arrastrar el líquido estancado." },
    { es: "Tomamuestras cerrado", en: "Closed sampling system", def: "Dispositivo que llena el envase de muestra sin que el producto ni sus vapores salgan al ambiente." },
    { es: "Tiempo de relajación", en: "Relaxation time", def: "Espera tras un trasvase para que se disipe la electricidad estática del líquido antes de abrir o muestrear." },
    { es: "Tiempo de espera", en: "Hold time", def: "Tiempo máximo que la hoja permite entre dos operaciones o con el producto parado." },
    { es: "Muestra de reserva", en: "Reserve / retention sample", def: "Muestra de cada lote que se guarda sin analizar para una posible evaluación futura de su calidad." },
    { es: "Analizar hasta que cumpla", en: "Testing into compliance", def: "Práctica inaceptable de repetir ensayos o muestras hasta obtener un resultado bueno y olvidar los malos." },
  ],
  quiz: [
    {
      kind: "number",
      q: "El tramo muerto de una válvula de muestreo tiene 20 mm de diámetro interior y 1,5 m de longitud. ¿Qué volumen tiene, en mL? (V = π × d² / 4 × L)",
      answer: 471,
      tolerance: 0.02,
      unit: "mL",
      explain: "V = 3,1416 × 0,020 × 0,020 / 4 × 1,5 = 0,000471 m³ = 471 mL.",
    },
    {
      kind: "choice",
      q: "El reactor tiene tolueno recién trasvasado. Un compañero propone abrir la boca de hombre y meter un cazo metálico porque «es más rápido» que la válvula de muestreo. ¿Qué le dices?",
      options: [
        "Que vale si lleva guantes y lo hace en menos de un minuto",
        "Que no: entra aire, se expone a vapores y puede saltar una chispa",
        "Que vale si antes apaga el agitador para que no salpique",
        "Que vale si el cazo es de acero inoxidable y está limpio",
      ],
      answer: 1,
      explain: "Abrir rompe la inertización y expone al operador. Según la NTP 225, puede saltar una chispa entre el líquido cargado y un muestreador metálico introducido por la boca. Se usa el tomamuestras del procedimiento.",
    },
    {
      kind: "number",
      q: "Tu procedimiento pide purgar tres veces el volumen del tramo muerto. El tramo tiene 15 mm de diámetro interior y 2,0 m de longitud. ¿Cuántos mL purgas?",
      answer: 1060,
      tolerance: 0.02,
      unit: "mL",
      explain: "V = 3,1416 × 0,015 × 0,015 / 4 × 2,0 = 0,000353 m³ = 353 mL. Purga: 3 × 353 = 1060 mL (unos 1,06 L).",
    },
    {
      kind: "choice",
      q: "Tienes que muestrear la torta de la centrífuga parada. ¿Qué muestra es la más correcta?",
      options: [
        "La de los puntos y profundidades que fija el procedimiento",
        "La del borde, que es donde mejor llega la mano sin abrir más",
        "La capa de cristales que queda en el cesto tras descargar",
        "La primera que cae al abrir, porque es la más reciente",
      ],
      answer: 0,
      explain: "La torta no es igual en todas partes: borde, superficie y capa junto a la tela difieren. La capa que queda en el cesto tampoco representa el lote (ICH Q7 8.50). Se muestrea donde dice el procedimiento.",
    },
    {
      kind: "number",
      q: "Regla de ejemplo de envasado: muestrear el primer bidón, el último y uno de cada cinco entre medias (el 5, el 10, el 15...). El lote llena 26 bidones. ¿Cuántas muestras tomas?",
      answer: 7,
      tolerance: 0.001,
      unit: "muestras",
      explain: "Bidones 1, 5, 10, 15, 20, 25 y 26: son 7 muestras.",
    },
    {
      kind: "choice",
      q: "Tomas una muestra caliente para disolvente residual y la dejas en un frasco mal cerrado 40 minutos antes de llevarla. ¿Qué es lo más probable?",
      options: [
        "Nada: el disolvente residual no cambia con el tiempo",
        "Que el resultado salga más alto, porque coge disolvente del aire",
        "Que se pierda disolvente y el resultado salga más bajo que el real",
        "Que el laboratorio corrija el error con la hora de la etiqueta",
      ],
      answer: 2,
      explain: "Una muestra caliente y mal cerrada pierde vapores. El resultado sale bajo y puedes dar por seco un producto que no lo está. Se cierra en el acto y se lleva enseguida.",
    },
    {
      kind: "number",
      q: "En un lote de 120 kg se sacan en total 360 g de muestras. ¿Qué porcentaje del lote se lleva el muestreo?",
      answer: 0.3,
      tolerance: 0.02,
      unit: "%",
      explain: "360 g = 0,36 kg. 0,36 / 120 × 100 = 0,3 %.",
    },
    {
      kind: "choice",
      q: "El IPC de conversión da 1,8 % y la hoja pide ≤ 1,0 %, con la instrucción «si no cumple, prolongar 1 h y repetir». Sospechas que no purgaste bien. ¿Qué haces?",
      options: [
        "Tomo otra muestra ahora mismo, bien purgada, y anoto solo esa",
        "Anoto «cumple» porque seguro que el error es de la muestra",
        "Tiro el resultado y espero al turno siguiente para repetir",
        "Sigo la hoja, anoto el resultado y aviso de mi duda sobre la purga",
      ],
      answer: 3,
      explain: "Se anota el valor real y se sigue lo que dice la hoja. La duda se cuenta y se registra. Repetir muestras por tu cuenta hasta que salga bien es «analizar hasta que cumpla», inaceptable según la FDA.",
    },
    {
      kind: "number",
      q: "Un análisis completo del principio activo necesita 40 g. Según ICH Q7 (11.72), ¿cuántos gramos como mínimo debe tener la muestra de reserva?",
      answer: 80,
      tolerance: 0.001,
      unit: "g",
      explain: "ICH Q7 pide cantidad para al menos dos análisis completos: 2 × 40 = 80 g.",
    },
    {
      kind: "choice",
      q: "El laboratorio necesita repetir un análisis y alguien propone abrir la muestra de reserva del lote, que está en la muestroteca. ¿Qué es lo correcto?",
      options: [
        "Abrirla: es la muestra más parecida al lote que se tiene",
        "No abrirla por su cuenta: se guarda y se usa según procedimiento",
        "Abrirla y rellenarla después con producto de otro bidón del lote",
        "Abrirla solo si es del mismo turno que tomó la muestra de análisis",
      ],
      answer: 1,
      explain: "La reserva sirve para una posible evaluación futura de la calidad del lote (ICH Q7 11.70). No se usa para salir del paso ni se rellena; si hace falta, se usa según el procedimiento.",
    },
  ],
};
