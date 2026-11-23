import type { Lesson } from "./types";

export const extraccionAFondo: Lesson = {
  slug: "extraccion-a-fondo",
  level: 12,
  order: 5.5,
  title: "Extracción líquido-líquido a fondo: fases, lavados y separación en el reactor",
  titleEn: "Liquid-liquid extraction in depth",
  minutes: 38,
  summary:
    "Qué fase queda arriba y cómo saberlo, la cuenta del reparto con varias extracciones, los lavados ácidos y básicos con números, la separación en el reactor paso a paso, cómo se ve la interfase, qué hacer con una emulsión o una capa intermedia, los riesgos y los errores que cuestan un lote.",
  body: `
En «Extracción líquido-líquido y separación de fases» viste la idea: dos líquidos que no se mezclan, el producto que se reparte entre los dos y la válvula de fondo para separar. Aquí vas a ver lo que pasa de verdad en el reactor: por qué las capas quedan en un orden concreto, cuánto producto se pierde en cada paso, cómo se mueve una sustancia de una fase a otra con el pH y qué hace el operador desde que para el agitador hasta que cierra la válvula.

### Por qué no se mezclan, en pocas líneas
Para mezclarse, las moléculas de un líquido tienen que meterse entre las del otro. El agua es muy **polar** (*polar*): sus moléculas se enganchan fuerte entre sí con puentes de hidrógeno. El tolueno es casi **apolar** (*non-polar*): sus moléculas solo se atraen por fuerzas débiles. El agua no suelta sus enganches para hacer sitio a una molécula que no le ofrece nada a cambio, y cada líquido se queda con los suyos. Forman dos **fases** (*phases*) separadas por una frontera, la **interfase** (*interface*). Lo tienes explicado a fondo en «Enlaces y fuerzas entre moléculas a fondo».

Lo mismo decide dónde va cada sustancia disuelta: las sales y lo que tiene carga eléctrica prefieren el agua; lo orgánico sin carga prefiere el disolvente orgánico. La extracción entera se basa en eso.

Un matiz importante: «no se mezclan» no quiere decir «nada». Algunos disolventes, como el acetato de etilo, se disuelven un poco en agua (en la tabla de «Disolventes a fondo» figura como «poco» miscible). Por eso, después de agitar, el volumen de cada fase puede no ser exactamente el que cargaste.

### Qué fase queda arriba
Queda arriba la fase menos densa, la que pesa menos por litro. No depende de cuál sea «la orgánica», sino de los números:

| Líquido | Densidad (kg/L, hacia 20 °C) | Con agua queda |
|---|---|---|
| Agua | 1,00 (0,998 a 20 °C) | — |
| Tolueno | 0,87 | Arriba |
| Acetato de etilo | Algo menos que el agua; la cifra exacta, en la sección 9 de la ficha de datos de seguridad (FDS) de tu proveedor | Arriba |
| Diclorometano | 1,33 | Abajo |

Las cifras del agua, el tolueno y el diclorometano son las de «Densidad a fondo» y de la ficha del tolueno de la app. Para el acetato de etilo no damos número porque no lo hemos podido leer en una fuente oficial.

Tres cosas que cambian la foto:

- **Lo que va disuelto cuenta.** Una fase orgánica muy cargada de producto o una fase acuosa con mucha sal no pesan lo mismo que el líquido puro. La hoja de producción (*batch record*) te dice cuál es la fase de arriba en ese paso concreto; no lo deduzcas por costumbre.
- **Cuanto más se parecen las densidades, más despacio se separan.** Lo que empuja una gota hacia arriba o hacia abajo es la diferencia de peso entre la gota y el líquido que la rodea. Con poca diferencia, la gota apenas se mueve: la decantación tarda más y la interfase sale menos nítida.
- **Un mismo proceso puede cambiar de orden.** Si una etapa usa tolueno (arriba) y la siguiente diclorometano (abajo), la fase que se conserva pasa de la de arriba a la de abajo. Es el escenario típico del error grave.

### El reparto: la cuenta que hay detrás de «tres extracciones»
El **coeficiente de reparto** (*partition coefficient*) K es la concentración en la fase orgánica dividida entre la concentración en la acuosa, cuando ya no cambia nada. En «Equilibrio químico a fondo» tienes las cuentas con K = 3. Aquí va la fórmula general para varias extracciones iguales, cada una con disolvente limpio:

> fracción que queda en el agua = (1 / (1 + K × V orgánico / V acuoso))ⁿ

donde n es el número de extracciones y V orgánico el volumen de cada una.

**Ejemplo 1.** Tienes 600 L de fase acuosa con 40 kg de producto y K = 5 (valores de ejemplo). Dispones de 600 L de acetato de etilo en total.

| Cómo lo repartes | Queda en el agua | Kg que se pierden en el agua |
|---|---|---|
| 1 vez 600 L | 16,67 % | 6,67 |
| 2 veces 300 L | 8,16 % | 3,27 |
| 3 veces 200 L | 5,27 % | 2,11 |
| 4 veces 150 L | 3,90 % | 1,56 |
| 6 veces 100 L | 2,63 % | 1,05 |

Fíjate en dos cosas. La primera: con el mismo disolvente, partirlo en tres saca casi 4,6 kg más que hacerlo de una vez. La segunda: cada extracción extra gana menos que la anterior. Por eso la hoja fija un número concreto de extracciones; cada una cuesta horas de reactor.

**Ejemplo 2: cuando K es pequeño.** Mismo caso, pero K = 0,5 (el producto prefiere el agua). Una vez 600 L deja el 66,7 % en el agua; dos veces 300 L, el 64,0 %; tres veces 200 L, el 63,0 %. Partir apenas sirve. Cuando el reparto es tan malo, no se arregla con más extracciones: se cambia el K. Y la herramienta para cambiarlo es el pH.

### Lavar: la misma cuenta al revés
Un **lavado** (*wash*) es una extracción en la que lo que quieres sacar es la impureza, y el producto se queda en el orgánico. La cuenta es la misma, mirada desde la fase orgánica.

**Ejemplo 3.** Una fase orgánica de 500 L lleva una sal que estorba, con K = 0,2 (prefiere el agua; valor de ejemplo). Cada lavado deja en el orgánico 1 / (1 + V agua / (K × V orgánico)) de lo que había.

- Dos lavados de 100 L: cada uno deja 1 / (1 + 100 / 100) = 0,5. Quedan 0,5 × 0,5 = 25 %.
- Un lavado de 200 L: deja 1 / (1 + 200 / 100) = 33,3 %.

Otra vez, dos lavados pequeños limpian más que uno grande con la misma agua.

### Lavados ácidos y básicos: mover una sustancia con el pH
En «Ácidos, bases y pH a fondo» viste que una amina en medio ácido se convierte en sal y se va al agua, y que un ácido hace lo contrario. Aquí va el número que hay detrás.

Un ácido débil está en parte sin carga y en parte con carga (ionizado). La proporción la marca su **pKa** (*acid dissociation constant, pKa*): el pH al que la mitad está de cada forma. La forma sin carga puede pasar al orgánico; la ionizada, con carga, se queda casi entera en el agua.

Ejemplo con el ácido acético, que tiene pKa 4,76. Porcentaje ionizado según el pH del agua, con la ecuación de Henderson-Hasselbalch:

| pH de la fase acuosa | Acético ionizado |
|---|---|
| 2,76 | 0,99 % |
| 4,76 | 50 % |
| 6,76 | 99,01 % |
| 7,76 | 99,9 % |

La regla práctica que sale de la tabla: **dos unidades de pH por encima del pKa, el ácido está ionizado al 99 %**. Por eso, para quitar un ácido de una fase orgánica, se lava con agua básica: el ácido se ioniza y se queda en el agua. Con una amina es al revés: con la fase acuosa ácida se ioniza y se va al agua; al subir el pH vuelve a la forma sin carga y regresa al orgánico.

Consecuencia de operador: el pH de la fase acuosa decide dónde está tu producto. Si la hoja pide «pH de la fase acuosa ≥ 8» y mides 6,5, el lavado no ha hecho lo que debía, aunque hayas agitado el tiempo justo. Se anota el valor real y se sigue lo que diga la hoja; no se corrige por tu cuenta.

**El bicarbonato hace gas.** Un lavado básico frecuente es con bicarbonato de sodio en agua. Como viste en «Ácidos, bases y pH a fondo», al reaccionar con un ácido suelta dióxido de carbono (CO₂) y hace espuma. En un reactor cerrado eso es presión. Por eso la hoja suele pedir añadirlo despacio, con agitación y con el venteo en la posición que indique: vigila la presión y la espuma en la mirilla.

### La operación en el reactor, paso a paso
1. **Comprobaciones previas.** Reactor inertizado con nitrógeno, válvula de fondo cerrada, destino de cada fase preparado y etiquetado, línea de descarga montada hasta el depósito que dice la hoja, pinzas de tierra puestas si hay elementos móviles.
2. **Cargar la segunda fase.** El volumen y la temperatura de la hoja. Si es ácida o básica, despacio y con frío, porque neutralizar desprende calor.
3. **Agitar el tiempo de la hoja.** La agitación rompe las fases en gotas y multiplica la superficie de contacto: así el producto pasa de una a otra. El tiempo y la velocidad están fijados; más fuerza no es mejor, porque gotas demasiado finas tardan mucho en volver a juntarse.
4. **Parar el agitador** y anotar la hora. Desde ese momento corre el tiempo de decantación.
5. **Decantar** (*settle*) el tiempo indicado, que suele ser un mínimo: «decantar ≥ 30 min». Las gotas suben o bajan y se juntan en dos capas.
6. **Observar la interfase** por la mirilla del reactor con la luz encendida: si es nítida, turbia o tiene una capa intermedia. Se anota.
7. **Descargar la fase de abajo** abriendo la válvula de fondo, primero con caudal normal y, al acercarte al volumen esperado, despacio. Así ves llegar la interfase y tienes tiempo de cerrar.
8. **Cerrar** en cuanto aparece la fase de arriba en la mirilla de la línea o cambia el detector. Anotar volumen o peso descargado, hora y destino.
9. **Seguir según la hoja**: la fase de arriba se queda en el reactor o se descarga a otro sitio, y nada se tira hasta que lo diga la hoja, normalmente tras un control en proceso (*in-process control*, IPC).

**Saber cuánto esperas.** Antes de abrir, calcula cuánta fase de abajo debería salir. Si cargaste 300 L de diclorometano, son unos 300 × 1,33 = 399 kg. Si la báscula o el caudalímetro van muy por debajo y ya ves la otra fase, o muy por encima y aún no la ves, algo no cuadra: cierra y avisa antes de seguir.

### Ver la interfase
- **Mirilla del reactor** (*sight glass*): sirve para ver el aspecto de las capas mientras reposan.
- **Mirilla de línea** (*in-line sight glass*): un tramo de vidrio en la tubería de salida. Ahí ves pasar la fase de abajo y el cambio de aspecto cuando llega la otra: color, brillo o turbidez distintos.
- **Sonda de conductividad** (*conductivity probe*) en la línea de fondo. Una fase acuosa con sales, ácido o base conduce la electricidad gracias a sus iones. Un disolvente como el tolueno apenas conduce: la nota técnica de prevención NTP 225 del Instituto Nacional de Seguridad y Salud en el Trabajo (INSST) pone a los hidrocarburos aromáticos por encima de 10¹² Ω·cm de resistividad. Cuando la fase acuosa se acaba y entra el orgánico, la conductividad cae de golpe. Qué hace el sistema con esa señal (alarma, cierre) y qué haces tú lo dice el procedimiento del equipo.
- **Radar de onda guiada** (*guided-wave radar*) y otros medidores de interfase. El libro de texto de instrumentación de Tony Kuphaldt explica que el radar de onda guiada puede medir una interfase entre dos líquidos, pero que una interfase poco definida, como una emulsión, le cuesta.
- **Visores de nivel externos.** El mismo libro avisa: un visor de vidrio montado por fuera del depósito solo muestra bien la interfase si sus dos tomas están sumergidas. Si una queda en la fase de arriba, puede marcar una interfase que no es la real.

Ningún sensor sustituye a mirar. Si la mirilla y el detector no dicen lo mismo, se para y se avisa.

### Capa intermedia y emulsiones
Una **emulsión** (*emulsion*) es una de las fases dispersa en la otra en gotas tan finas que no se juntan: se ve una zona lechosa en vez de una línea. La **capa intermedia** (*rag layer*) es una franja entre las dos fases, a menudo con aspecto de nata o de trapo, donde se acumulan gotas, partículas y suciedad.

Causas habituales que describen los manuales de laboratorio (información vista en fragmentos de buscador, no en un documento oficial): **partículas finas** sólidas, que se ponen en la frontera y no dejan que las gotas se unan; **sustancias que actúan como jabón**, que estabilizan las gotas; y **agitar demasiado fuerte**. A eso súmale lo visto arriba: poca diferencia de densidad.

Qué hace el operador:

1. **Esperar.** Muchas emulsiones se rompen solas con tiempo. Si la hoja da un tiempo máximo, se respeta y se anota la hora en que la interfase quedó clara.
2. **No forzar.** No se agita «un poco para ver», no se sube la temperatura ni se añade nada que la hoja no diga.
3. **Avisar** al responsable si al acabar el tiempo sigue sin separar.
4. **Solo si la hoja o el procedimiento lo prevén**: añadir salmuera, calentar o enfriar a una temperatura concreta, o filtrar la mezcla para quitar los sólidos que estabilizan la emulsión. Son pasos que cambian el proceso; por eso tienen que estar escritos y aprobados.
5. **La capa intermedia tiene destino escrito.** La hoja dice si va con la fase de abajo, con la de arriba o aparte. No se decide sobre la marcha, porque puede llevar producto o impurezas.

### Separadores y centrífugas de líquidos
Cuando la decantación por gravedad es lenta, existen **separadoras centrífugas** (*centrifugal separators*): giran y la fuerza centrífuga, muchas veces mayor que la gravedad, lleva la fase pesada hacia fuera y deja la ligera cerca del eje. Hay modelos de discos y extractores centrífugos que mezclan y separan en continuo. Es la misma idea de la fuerza G de «La centrífuga a fondo», aplicada a dos líquidos en vez de a un sólido y un líquido. Los detalles de estos equipos solo los hemos visto en material de fabricantes, así que no damos cifras. Si tu planta tiene uno, su procedimiento manda.

### Riesgos
**Electricidad estática.** La NTP 225 del INSST cita expresamente como situaciones que generan mucha carga la decantación de dos líquidos no miscibles, el trasvase simultáneo de dos fases y la presencia de agua en los hidrocarburos. Recomienda trasvasar a menos de 1 m/s cuando hay agua o mezclas insolubles y esperar después un tiempo de relajación antes de abrir o muestrear: 30 segundos para líquidos conductores y 1 minuto para los no conductores. Según la misma nota, el acetato de etilo (1,0 × 10⁹ Ω·cm) conduce bastante más que el tolueno, pero también ha habido accidentes con él manejado en malas condiciones. La puesta a tierra y lo demás están en «Atmósferas explosivas a fondo».

**Inertización.** Al vaciar la fase de abajo queda un hueco en el reactor, y ese hueco tiene que llenarse de nitrógeno, no de aire. Lo viste en «Inertización a fondo».

**Gas y presión.** Lavados con bicarbonato o neutralizaciones: CO₂, calor y espuma.

**Exposición.** Las fases llevan disolvente; tomar muestras y abrir líneas se hace con los controles que pida la hoja; el porqué está en «Exposición a productos químicos a fondo».

**Residuos.** Cada fase que no se aprovecha es un residuo con su destino: los disolventes halogenados, como el diclorometano, van aparte de los no halogenados, y las aguas ácidas o básicas, a su propio depósito. Lo tienes en «Almacenamiento, emergencias y residuos a fondo» y en «Disolventes a fondo». Si una fase va a recuperación, la guía ICH Q7 (apartado 14.4) lo admite siempre que haya procedimientos aprobados y quede documentado.

### Errores típicos y cómo se evitan
| Error | Qué pasa | Cómo se evita |
|---|---|---|
| Mandar la fase buena al residuo | Se pierde el producto del lote | Leer qué fase se conserva en este paso; identificar y etiquetar las dos; no tirar nada hasta el IPC |
| Cortar tarde | Parte de la fase de arriba se va con la de abajo | Calcular el volumen esperado, bajar despacio al final, vigilar mirilla y detector |
| Cortar pronto | Queda fase de abajo en el reactor y contamina el paso siguiente | Igual: volumen esperado y mirilla |
| Acortar la decantación | Gotas de una fase en la otra | Respetar el tiempo mínimo y anotar las horas reales |
| Agitar más fuerte «para que extraiga mejor» | Emulsión | Velocidad y tiempo de la hoja |
| Juntar dos extracciones en una | Más producto perdido | Hacer el número de extracciones de la hoja |
| No medir el pH de la fase acuosa | El producto acaba en la fase equivocada | Medir y anotar el valor real |

Un ejemplo de «cortar tarde»: la fase orgánica de 500 L lleva 40 kg de producto, 0,08 kg por litro. Si se escapan 20 L con la acuosa, se van 1,6 kg, un 4 % del lote, y además la fase acuosa ya no es «solo agua».

La guía ICH Q7 (apartado 8.20) pide cumplir los tiempos límite que fije la instrucción de fabricación y documentar cualquier desviación. Los números de esta lección son para entender. En planta manda siempre el procedimiento vigente (SOP): volúmenes, tiempos, pH, temperatura y destino de cada fase son los de tu hoja.
`,
  plant: `
Turno de noche. En el reactor R-310 tienes el intermedio ficticio DX-44 disuelto en 450 L de diclorometano, con restos de ácido acético de la etapa anterior. La hoja dice: *«Añadir 250 L de bicarbonato de sodio al 5 % en 30 min a T ≤ 25 °C, venteo abierto al lavador. Agitar 15 min a 80 rpm. Decantar ≥ 30 min. Verificar pH de la fase acuosa ≥ 7,5. Descargar la fase orgánica inferior al R-312. Fase acuosa superior a T-55 (aguas básicas). Capa intermedia: con la fase acuosa.»* (valores de ejemplo).

Antes de empezar te paras en una línea: hoy la fase buena es la de **abajo**. Ayer, en tolueno, era la de arriba. Lo marcas en la hoja con tu compañero.

Añades el bicarbonato. Burbujea y la espuma sube en la mirilla; bajas el caudal de la bomba hasta que se calma. Agitas, paras a las 02:10 y esperas. A las 02:40 la interfase está casi nítida, con una franja fina de aspecto de nata. Mides el pH de la fase acuosa: 8,1. Cumple.

Esperas unos 450 × 1,33 = 598,5 kg de fase orgánica, y el R-312 está sobre células de carga. Abres la válvula de fondo. A 540 kg bajas el caudal. A 593 kg la sonda de conductividad CD-310 salta y en la mirilla de línea ves llegar la nata: cierras. La capa intermedia se queda en el reactor y sale con la fase acuosa, como pide la hoja.

Etiquetas las dos fases. La fase acuosa no sale hacia el T-55 hasta que el laboratorio confirma que no lleva DX-44. Anotas horas, pesos, pH, aspecto de la interfase y destino.
`,
  batchRecord: `
En la hoja de producción (*batch record*) de una extracción o un lavado verás instrucciones como las del ejemplo y casillas para anotar. La guía ICH Q7 (apartado 6.52) pide registrar, entre otras cosas, fechas y horas, los equipos principales, los resultados reales de los parámetros críticos, los muestreos, los resultados en proceso, las firmas de quien hace y de quien verifica y cualquier desviación.

- **Equipo**: reactor y depósitos de destino (p. ej. R-310, R-312, T-55), y sonda o pHmetro usados.
- **Cargas**: disolvente o disolución añadida, concentración, lote y cantidad real.
- **Tiempos**: inicio y fin de la agitación, velocidad del agitador, hora de parada y hora de inicio de la descarga (el tiempo de decantación real, no «≥ 30 min»).
- **Temperatura** durante la adición y la separación.
- **pH de la fase acuosa**: valor real con decimales, hora y equipo.
- **Aspecto de la interfase**: nítida, turbia, emulsión o capa intermedia, y cuánto tardó en aclarar.
- **Cada fase**: volumen o peso descargado, a qué depósito va y con qué etiqueta; la capa intermedia, con su destino.
- **IPC**: muestra de la fase que se va a desechar o recuperar, con el resultado antes de liberarla.
- **Verificación**: firma de un segundo operador en la elección de la fase que se conserva si la hoja lo pide.
- **Incidencias**: emulsión que no rompe, espuma o presión al añadir bicarbonato, desacuerdo entre mirilla y detector, cantidades que no cuadran con lo esperado. Se anotan en el momento y se comunican.
`,
  terms: [
    { es: "Fase ligera / fase pesada", en: "Light phase / heavy phase", def: "La fase menos densa, que queda arriba, y la más densa, que queda abajo. No coincide siempre con orgánica y acuosa." },
    { es: "Tiempo de decantación", en: "Settling time", def: "Tiempo de reposo, con el agitador parado, para que las dos fases se separen. En la hoja suele ser un mínimo." },
    { es: "Lavado", en: "Wash", def: "Extracción en la que se quita una impureza de la fase que contiene el producto." },
    { es: "Lavado ácido / lavado básico", en: "Acid wash / basic wash", def: "Lavado con agua ácida o básica para pasar a ella una sustancia que, con ese pH, queda con carga." },
    { es: "pKa", en: "pKa (acid dissociation constant)", def: "pH al que un ácido débil está la mitad ionizado y la mitad sin carga. Dos unidades por encima, está ionizado al 99 %." },
    { es: "Forma ionizada", en: "Ionised form", def: "La forma con carga eléctrica de una sustancia; prefiere el agua y casi no pasa al disolvente orgánico." },
    { es: "Capa intermedia", en: "Rag layer / cuff", def: "Franja entre las dos fases con gotas, partículas o suciedad acumuladas. La hoja dice con qué fase se va." },
    { es: "Romper una emulsión", en: "Break an emulsion", def: "Conseguir que una emulsión se separe en dos fases: esperando o con los medios que prevea la hoja." },
    { es: "Mirilla de línea", en: "In-line sight glass", def: "Tramo de vidrio en una tubería para ver pasar el líquido; en la descarga, muestra la llegada de la otra fase." },
    { es: "Sonda de conductividad", en: "Conductivity probe", def: "Sensor que mide cuánto conduce la electricidad un líquido. Distingue una fase acuosa con iones de un disolvente orgánico." },
    { es: "Radar de onda guiada", en: "Guided-wave radar", def: "Medidor de nivel que envía microondas por una varilla; algunos modelos miden también la interfase entre dos líquidos." },
    { es: "Separadora centrífuga", en: "Centrifugal separator", def: "Máquina que separa dos líquidos de distinta densidad haciéndolos girar, en lugar de esperar a que decanten." },
    { es: "Tiempo de relajación", en: "Relaxation time", def: "Espera tras un trasvase para que se disipe la carga estática antes de abrir o muestrear." },
  ],
  quiz: [
    {
      kind: "choice",
      q: "En el reactor tienes diclorometano con el producto y agua de lavado. Paras el agitador. ¿Dónde está la fase orgánica?",
      options: [
        "Arriba, porque la fase orgánica siempre queda arriba",
        "Mezclada con el agua, porque el diclorometano es polar",
        "Abajo, porque el diclorometano (1,33 kg/L) pesa más que el agua",
        "Depende solo de la temperatura a la que se haya agitado",
      ],
      answer: 2,
      explain: "Queda abajo la fase más densa. El diclorometano, con 1,33 kg/L, es más denso que el agua: la fase orgánica es la inferior.",
    },
    {
      kind: "number",
      q: "Un producto tiene K = 4 entre acetato de etilo y agua. La fase acuosa son 400 L. Haces dos extracciones de 200 L cada una con acetato de etilo limpio. ¿Qué porcentaje del producto queda en el agua?",
      answer: 11.11,
      tolerance: 0.02,
      unit: "%",
      explain: "Cada extracción deja 1 / (1 + 4 × 200 / 400) = 1 / 3. Tras dos: (1 / 3) × (1 / 3) = 0,1111, es decir, 11,11 %. Una sola de 400 L habría dejado el 20 %.",
    },
    {
      kind: "number",
      q: "Has cargado 300 L de diclorometano (densidad 1,33 kg/L) y vas a descargar la fase orgánica inferior a un depósito sobre báscula. ¿Cuántos kilos esperas, aproximadamente?",
      answer: 399,
      tolerance: 0.02,
      unit: "kg",
      explain: "Masa = volumen × densidad = 300 × 1,33 = 399 kg. Si la báscula se aleja mucho de esa cifra al ver la interfase, algo no cuadra: se cierra y se avisa.",
    },
    {
      kind: "number",
      q: "El ácido acético tiene pKa 4,76. La fase acuosa de un lavado está a pH 6,76. ¿Qué porcentaje del acético está ionizado?",
      answer: 99.01,
      tolerance: 0.01,
      unit: "%",
      explain: "Ionizado = 1 / (1 + 10^(4,76 − 6,76)) = 1 / (1 + 0,01) = 0,9901, es decir, 99,01 %. Dos unidades de pH por encima del pKa, casi todo tiene carga y se queda en el agua.",
    },
    {
      kind: "number",
      q: "La fase orgánica de arriba son 600 L con 30 kg de producto repartido por igual. Al descargar la fase acuosa de abajo cortas tarde y se van 15 L de fase orgánica al residuo. ¿Cuántos kilos de producto has perdido?",
      answer: 0.75,
      tolerance: 0.02,
      unit: "kg",
      explain: "Concentración: 30 / 600 = 0,05 kg/L. Perdido: 0,05 × 15 = 0,75 kg, un 2,5 % del lote, además de contaminar la fase acuosa con disolvente.",
    },
    {
      kind: "choice",
      q: "Ha pasado el tiempo mínimo de decantación y entre las fases sigue una zona lechosa de un palmo. La hoja no dice nada de salmuera. ¿Qué haces?",
      options: [
        "Espero según la hoja, anoto el aspecto y la hora y aviso al responsable",
        "Añado unos sacos de sal, que es lo que se hace siempre con emulsiones",
        "Agito otra vez fuerte un par de minutos para que se rompa la emulsión",
        "Descargo hasta la zona lechosa y la mando con la fase que me parezca",
      ],
      answer: 0,
      explain: "Una emulsión no se fuerza. Se espera, se anota y se avisa. Sal, calor o filtración solo si la hoja o el procedimiento lo prevén, y el destino de la capa intermedia está escrito.",
    },
    {
      kind: "choice",
      q: "Estás descargando la fase acuosa inferior y la lectura de la sonda de conductividad de la línea cae de golpe. ¿Qué significa y qué haces?",
      options: [
        "Que la sonda está sucia; sigo descargando hasta el volumen de la hoja",
        "Que el agua se ha enfriado; espero a que la lectura vuelva a subir",
        "Que falta sal en el lavado; anoto y continúo con la descarga normal",
        "Que llega la fase orgánica, que apenas conduce: cierro y miro la mirilla",
      ],
      answer: 3,
      explain: "La fase acuosa conduce por sus iones; un disolvente como el tolueno apenas conduce. La caída marca la interfase: se cierra y se confirma en la mirilla de línea.",
    },
    {
      kind: "choice",
      q: "Vas a trasvasar por tubería una mezcla de tolueno con algo de agua arrastrada. ¿Qué recomienda la NTP 225 del INSST?",
      options: [
        "Trasvasar lo más deprisa posible para estar menos tiempo expuesto",
        "Trasvasar a menos de 1 m/s y esperar antes de abrir o muestrear",
        "Nada especial: el agua conduce y descarga la electricidad estática",
        "Llenar el depósito a chorro libre desde arriba para ver el caudal",
      ],
      answer: 1,
      explain: "La NTP 225 cita el agua en los hidrocarburos y el trasvase de dos fases como grandes generadores de carga. Con agua o mezclas insolubles recomienda menos de 1 m/s y un tiempo de relajación antes de abrir o muestrear.",
    },
    {
      kind: "choice",
      q: "Añades bicarbonato de sodio en agua a una fase orgánica que contiene un ácido. ¿Por qué la hoja pide hacerlo despacio y con el venteo abierto?",
      options: [
        "Porque el bicarbonato se congela si entra deprisa en el reactor",
        "Porque el bicarbonato es inflamable y no debe tocar el nitrógeno",
        "Porque al reaccionar con el ácido suelta CO₂: gas, espuma y presión",
        "Porque si entra deprisa el pH de la fase acuosa ya no se puede medir",
      ],
      answer: 2,
      explain: "El bicarbonato neutraliza el ácido y libera dióxido de carbono. En un reactor cerrado eso es espuma y presión: se añade despacio, con el venteo como diga la hoja, vigilando presión y mirilla.",
    },
    {
      kind: "choice",
      q: "Un producto tiene K = 0,5 (prefiere el agua). Un compañero propone pasar de tres extracciones a seis para sacarlo al orgánico. ¿Qué le respondes?",
      options: [
        "Con un K tan bajo partir apenas mejora; lo que cambia el reparto es el pH",
        "Seis extracciones lo sacarán todo, porque cada una saca la misma cantidad",
        "Da igual el número: con K pequeño el producto nunca pasa al orgánico",
        "Es mejor hacer una sola extracción grande con todo el disolvente junto",
      ],
      answer: 0,
      explain: "Con K = 0,5 y el mismo disolvente total, partir en tres deja un 63,0 % en el agua y en seis un 61,9 %, frente al 66,7 % de una sola vez. Lo que mueve el producto es cambiar su forma con el pH, y eso lo fija la hoja.",
    },
  ],
};
