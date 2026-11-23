import type { Lesson } from "./types";

export const termicoAFondo: Lesson = {
  slug: "analisis-termico-a-fondo",
  level: 8,
  order: 2,
  title: "Punto de fusión y análisis térmico a fondo",
  titleEn: "Melting point and thermal analysis in depth",
  minutes: 38,
  summary:
    "Qué es fundir y por qué un sólido puro funde en un intervalo estrecho, cómo lo bajan y lo ensanchan las impurezas y el disolvente retenido, cómo se mide el punto de fusión y se verifica el aparato, cómo se lee un termograma de DSC y se calibra con indio, qué cuenta la termogravimetría frente a la pérdida por secado, y qué pasa con tu lote cuando funde bajo.",
  body: `
En «Punto de fusión y DSC» viste las palabras. Aquí verás qué pasa dentro del cristal al fundir, cómo se leen las curvas de los equipos térmicos y qué hace la planta cuando un lote funde bajo. Las formas cristalinas están en «Polimorfismo, sales y solvatos a fondo» y el agua en «El agua en la muestra a fondo: Karl Fischer y pérdida por secado».

### Fundir, desde cero
Un **sólido cristalino** (*crystalline solid*) es como un muro de piezas de lego: moléculas en orden, sujetas por atracciones. Al calentar, vibran cada vez más fuerte, hasta que la vibración vence a la atracción, el orden se deshace y las moléculas se deslizan unas sobre otras. Eso es la **fusión** (*melting*).

Dos ideas que ya conoces de «La materia a fondo»:

- **Mientras funde, no sube la temperatura.** El calor se gasta en romper el orden, no en agitar más. Es la meseta del hielo que se queda en 0 °C hasta que no queda hielo.
- **Ese calor se puede medir.** Es el **calor de fusión** (*heat of fusion*), la energía que hay que dar a cada gramo para fundirlo. Lo verás más abajo como el área de un pico.

### Por qué un sólido puro funde en un intervalo estrecho
En un cristal puro todas las piezas son iguales y encajan igual: todas las uniones aguantan lo mismo y se rompen a la vez, como una fila de soldados que se sienta cuando suena la orden. Un producto puro y seco funde en muy pocos grados.

En la práctica no se ve un número único, sino un **intervalo de fusión** (*melting range*) con dos lecturas:

- **Inicio de fusión**: la temperatura a la que aparece el primer líquido.
- **Final de fusión**: la temperatura a la que ya no queda sólido.

Estrecho y en su sitio: producto limpio. Ancho o desplazado hacia abajo: hay algo más.

### Impurezas y disolvente retenido: funde antes y en más grados
Piensa en la sal de las carreteras heladas: el hielo con sal se deshace cuando el hielo solo aguantaría. Con un cristal de producto pasa algo parecido.

1. **La impureza estropea el muro.** Una molécula extraña metida entre las del producto no encaja bien. Alrededor de ella las uniones son más débiles, y por ahí empieza a fundir antes. El inicio baja.
2. **La impureza se disuelve en las primeras gotas.** Ese primer líquido no es producto puro, sino producto con la impureza disuelta, y un líquido así se mantiene líquido a menos temperatura que el producto solo. Por eso sigue fundiendo poco a poco mientras sube la temperatura.
3. **Al final, la impureza queda muy diluida.** Cuando casi todo es líquido, la impureza está repartida en mucho producto fundido y el final se acerca al del producto puro, aunque normalmente sin llegar.

Resultado: **el inicio baja mucho, el final baja poco y el intervalo se ensancha**. Cuanta más impureza, más se nota. La fórmula que lo relaciona con la cantidad de impureza no la necesitas.

El **disolvente retenido** (agua o disolvente del lavado que no se fue en el secadero) hace lo mismo: es una impureza más. Una muestra mal secada parece impura aunque químicamente esté limpia.

| Muestra | Inicio | Final | Intervalo |
|---|---|---|---|
| Producto puro y seco | En su valor | En su valor | Estrecho, pocos grados |
| Con impurezas de reacción | Más bajo | Algo más bajo | Ancho |
| Con disolvente retenido | Más bajo | Algo más bajo | Ancho; puede verse burbujeo o empañado |
| Otra forma cristalina | Distinto, puede ser más alto o más bajo | Distinto | Puede ser estrecho: es otro producto sólido, no uno sucio |

La última fila es la trampa: **otra forma cristalina no siempre funde «mal»**, funde «en otro sitio». La guía de la FDA sobre polimorfismo en sólidos farmacéuticos incluye el punto de fusión entre las propiedades que pueden cambiar de un polimorfo a otro.

### Qué dice y qué no dice el punto de fusión
La guía ICH Q6A, sobre especificaciones de principios activos, cita el punto o intervalo de fusión entre las propiedades fisicoquímicas que pueden entrar en la especificación (apartado 3.3.1 a), con el capilar como ejemplo de procedimiento.

Lo que da: una comprobación rápida de identidad y una alarma de pureza, secado y forma. Lo que no da: **qué** impureza hay ni **cuánta**; eso lo dicen la cromatografía de líquidos, la de gases y el Karl Fischer. Un punto de fusión bajo es una pregunta, no una respuesta.

### El método del capilar
El **capilar** (*capillary tube*) es un tubo de vidrio muy fino, cerrado por un extremo. El analista:

1. **Prepara la muestra**: seca y molida fina, para que caliente igual por todas partes.
2. **Llena el capilar** con una columna corta de polvo bien compactado, golpeándolo suavemente.
3. **Lo mete en el aparato**: un bloque metálico o un baño que se calienta con un programa, y una lupa o una cámara para mirar el polvo.
4. **Calienta rápido** hasta unos grados por debajo de la fusión esperada y **despacio** a partir de ahí.
5. **Anota inicio y final** de fusión.

**Por qué despacio cerca de la fusión.** El termómetro mide el bloque, no el polvo, y el polvo va un poco por detrás, como un asado que tarda en calentarse por dentro. Si el bloque sube muy deprisa, cuando el polvo funde el termómetro ya marca más: el aparato lee **más alto** de lo real. Por eso la velocidad de calentamiento, el punto en que se pasa de rápido a lento y la altura del polvo los fija el método de la farmacopea y del laboratorio. Esta lección no da esas cifras porque no se ha podido leer el texto oficial.

**Cuenta 1: cuánto tarda.** Programa de ejemplo: 10 °C/min desde 40 °C hasta 158 °C y luego 1 °C/min hasta 168 °C. Tramo rápido, (158 − 40) / 10 = 11,8 min; tramo lento, (168 − 158) / 1 = 10 min. Unos **22 minutos** por medida, sin preparar la muestra ni repetirla.

### El aparato automático
Los **aparatos automáticos** (*automatic melting point apparatus*) miden varios capilares a la vez con una cámara. Según los fabricantes, una forma habitual de detectar la fusión es medir la luz que atraviesa el capilar: el polvo es opaco y el líquido, transparente. La grabación queda como dato, y el analista la revisa: una muestra que se oscurece o burbujea antes de fundir no se lee igual que una que funde limpia.

### Verificar el aparato con sustancias de referencia
Un termómetro que lee medio grado de más da lotes falsamente buenos o falsamente malos. Por eso:

- La guía de la OMS sobre buenas prácticas en laboratorios de control de calidad (WHO TRS 957, anexo 1) dice que los **materiales de referencia** pueden hacer falta para calibrar o cualificar equipos (11.2), que el funcionamiento se verifica a intervalos según un plan (12.4), que para los termómetros de temperaturas de fusión se siguen los procedimientos de la Farmacopea Internacional (nota del 12.12) y que las calibraciones deben ser trazables a materiales de referencia certificados y al Sistema Internacional (13.2). Un **material de referencia certificado** (*certified reference material*) trae un certificado con el valor, su incertidumbre y su trazabilidad.

- ICH Q7 pide calibrar los equipos críticos según procedimientos y calendario (5.30), **no usar** los que no cumplen (5.34) e investigar si una desviación afectó a los lotes analizados desde la última calibración buena (5.35).

**Cuenta 2: una verificación que no cumple.** El certificado de una sustancia de referencia dice que funde a 135,0 °C y el procedimiento admite ± 0,5 °C (valores de ejemplo). El aparato da 135,6 °C. Desvío: 135,6 − 135,0 = **0,6 °C**, fuera de tolerancia. El aparato no se usa hasta repararlo y verificarlo, se revisan los resultados desde la última verificación correcta y no se «corrige a mano» ningún lote.

### DSC: medir el calor que entra y sale
La **calorimetría diferencial de barrido** (*differential scanning calorimetry*, DSC) calienta unos miligramos de muestra en un crisol, con un programa, junto a un crisol de referencia, y mide cuánto calor de más o de menos necesita la muestra para seguir el programa. Mientras no pasa nada, la curva es plana: la **línea base** (*baseline*). Cuando la muestra funde, absorbe calor y aparece un pico.

Cómo se lee un **termograma** (*thermogram*), la curva que sale:

| Lo que ves | Qué significa | Ejemplos |
|---|---|---|
| Pico **endotérmico** (*endothermic*): la muestra absorbe calor | Algo se rompe o se va | Fusión; salida del agua de un hidrato o del disolvente de un solvato |
| Pico **exotérmico** (*exothermic*): la muestra desprende calor | Algo se ordena o reacciona | Cristalización de un amorfo; paso a una forma más estable; **descomposición** |

Cada equipo dibuja los picos endotérmicos hacia arriba o hacia abajo según su convenio: mira siempre la flecha «endo» o «exo» del eje antes de interpretar.

Tres lecturas de cada pico:

- **Temperatura de inicio** (*onset temperature*): donde la curva se separa de la línea base; el programa suele calcularla cruzando la línea base con la tangente del flanco (inicio extrapolado). En una fusión limpia suele tomarse como temperatura de fusión.
- **Temperatura de pico** (*peak temperature*): el punto más alto del pico. No es lo mismo que el inicio: anota cuál de las dos pide la especificación.
- **Área del pico**: el calor total (potencia por tiempo bajo la curva). Dividido entre la masa da J/g: la **entalpía** (*enthalpy*) de fusión o de descomposición.

**Cuenta 3: entalpía desde el área.** Una muestra de 3,50 mg da un pico de fusión cuya área integra el programa: 420 mJ (valores de ejemplo). El equipo da el área en milijulios y la masa está en miligramos; como mJ entre mg es lo mismo que J entre g, la cuenta es una división: 420 / 3,50 = **120 J/g**.

### Calibrar el DSC con indio
Para fiarse de temperatura y área, el DSC se calibra con un metal muy puro de fusión bien conocida; uno muy usado es el **indio** (*indium*). Se funde un trocito pesado, se compara con el certificado y se ajustan la escala de temperatura y el factor que convierte el área en julios.

**De dónde sale cada valor.** La temperatura y la entalpía de fusión del indio vienen en el **certificado de su material de referencia**, y el laboratorio usa el de su lote. Esta lección no ha podido leer ese certificado: los números de la cuenta son **valores de ejemplo**, cercanos a los que se ven publicados en el buscador (unos 156,6 °C y 28,5 J/g), y no deben copiarse a ningún procedimiento.

**Cuenta 4: la calibración.** Certificado de ejemplo: 156,6 °C y 28,5 J/g. El equipo mide 157,1 °C y 27,9 J/g.

- Temperatura: lee 157,1 − 156,6 = **0,5 °C** de más; la calibración corrige ese desplazamiento.
- Calor: factor 28,5 / 27,9 = **1,0215**; el equipo daba un 2 % de menos.
- Una muestra que antes daba 120 J/g, con el factor: 120 × 1,0215 = **122,6 J/g**.

Después se mide otra vez el indio para comprobar que cae dentro de tolerancia.

### TGA: pesar mientras se calienta
La **termogravimetría** (*thermogravimetric analysis*, TGA) es una balanza muy sensible con el platillo dentro de un horno. Calienta la muestra con un programa y dibuja la masa frente a la temperatura. Si nada se va, la línea es plana. Si sale agua o disolvente, o el producto se descompone en gases, la masa baja.

La forma de la bajada cuenta de dónde viene lo que se va:

- **Bajada suave desde el principio**: líquido en la superficie de los cristales, el que moja la torta y debía haberse ido en el secadero.
- **Escalón neto a una temperatura concreta**: disolvente o agua **dentro de la red**, un **solvato** (*solvate*) o un **hidrato** (*hydrate*), que solo sale al romperse el cristal.
- **Caída grande a alta temperatura**: el producto se está descomponiendo.

**Cuenta 5: el escalón.** 10,000 mg de muestra pasan a 9,550 mg en un escalón (valores de ejemplo): (10,000 − 9,550) / 10,000 × 100 = **4,50 %**.

**Cuenta 6: lo que pesaría un solvato.** Un producto ficticio de 400,0 g/mol forma un solvato 1:1 con etanol. Con C 12,011, H 1,008 y O 15,999, el etanol (C₂H₅OH) pesa 2 × 12,011 + 6 × 1,008 + 15,999 = 46,069 g/mol. Solvato: 446,069 g/mol. Etanol en el cristal: 46,069 / 446,069 × 100 = **10,33 %**. Un escalón de ese tamaño en la TGA apunta a que el lote cristalizó como solvato.

**DSC y TGA juntos.** Fundir no cambia la masa: si el DSC da un pico endotérmico y la TGA no pierde nada a esa temperatura, es una fusión o un cambio de forma. Si a la vez hay pico endotérmico y escalón de masa, es el disolvente o el agua saliendo del cristal.

### TGA frente a pérdida por secado
| | Pérdida por secado (*loss on drying*, LOD) | TGA |
|---|---|---|
| Qué hace | Pesa antes y después de calentar a una temperatura y un tiempo fijos | Pesa sin parar mientras sube la temperatura |
| Qué da | Un número: lo que se fue en esas condiciones | Una curva: cuánto se va y a qué temperatura |
| Cantidad de muestra | Gramos | Miligramos |
| Para qué se usa | Control de rutina del secado y de liberación | Investigar: superficie o red, solvato o hidrato, descomposición |

Ninguna de las dos dice **qué** se ha ido: para eso están el Karl Fischer y la cromatografía de gases. Y un solvato puede pasar la LOD con su disolvente dentro, si en la estufa no se rompe la red; la TGA lo destapa al seguir calentando.

### La relación con el polimorfismo
ICH Q6A cita, para saber si hay varias formas, el punto de fusión (con microscopía de platina calefactora), el infrarrojo del sólido, la difracción de rayos X de polvo, el análisis térmico (DSC, TGA y DTA), el Raman, la microscopía óptica y la resonancia del sólido. La FDA dice que la difracción de polvo puede dar una prueba inequívoca de polimorfismo. En la práctica, DSC y punto de fusión dan la alarma y la difracción confirma la forma. Dos fusiones, o una fusión seguida de un pico exotérmico, son una pista de varias formas o de una transformación al calentar; lo interpreta el laboratorio.

### La otra cara: el DSC en seguridad de proceso
El DSC también dice **a qué temperatura un producto o una mezcla empieza a descomponerse dando calor**, y cuánto. La nota técnica de prevención (NTP) 527 del Instituto Nacional de Seguridad y Salud en el Trabajo (INSST) lo cita entre los calorímetros que muestran cómo varía la actividad exotérmica con la temperatura; el objetivo es fijar el límite por debajo del cual se trabaja con seguridad, con un **margen** respecto a la temperatura de descontrol. Como medida preventiva propone que el medio calefactor no pueda pasar de la temperatura de descomposición. La NTP 302 avisa de que la medida no es tan fácil como parece y de que extrapolar a las condiciones reales puede ser complejo.

Por eso el pico exotérmico de un DSC de cribado **no es una temperatura de trabajo**: es una señal de peligro, medida en miligramos, que seguridad de proceso convierte en límites con margen. Llegan a la hoja como temperatura máxima de camisa del reactor o de producto en el secadero y el molino.

**Cuenta 7: cuánto subiría.** Descomposición de 400 J/g y calor específico de 1,7 J/(g·K) (valores de ejemplo), sin pérdidas, como en «Calor de reacción a fondo»: 400 / 1,7 = **235 °C** de subida, igual para un kilo que para una tonelada. Las protecciones están en «El reactor a fondo».

### Qué pasa en planta cuando el lote funde bajo
Un resultado fuera de especificación se investiga según procedimiento (ICH Q7, 11.15). La guía de la FDA sobre resultados fuera de especificación (OOS) describe dos fases: el laboratorio busca primero un error de medida; si no lo hay, la investigación completa **revisa la producción y el muestreo**. Ahí entras tú.

| Causa en planta | Pista en el laboratorio | Qué se mira en la hoja |
|---|---|---|
| Secado incompleto | LOD alto; Karl Fischer (KF) o cromatografía de gases dicen qué es | Tiempo, vacío, temperatura de producto, control en proceso (IPC) de secado, muestra de dónde |
| Impurezas: reacción, lavado o aguas madres | Cromatografía de líquidos (HPLC) con impurezas altas | Temperaturas, tiempos, adiciones, volumen y temperatura del lavado |
| Otra forma o un solvato | DSC distinto, escalón en TGA, difracción de polvo distinta | Siembra, enfriamiento, disolvente, temperatura de secado |
| Muestra no representativa o mal cerrada | Repetición sobre otra muestra distinta | Punto y hora de muestreo, envase, identificación |

Qué haces tú como operador:

- **No lo arreglas por tu cuenta.** Ni secas «un poco más» ni mezclas con otro lote: ICH Q7 dice que los lotes fuera de especificación no deben mezclarse con otros para que cumplan (8.41). Seguir secando cuando un IPC dice que el paso no ha terminado es proceso normal (14.21); tras un resultado de liberación fuera de especificación, decide calidad.
- **Anotas y cuentas** lo que viste: aspecto de la torta, descarga húmeda o con grumos, valores raros del secadero, punto de muestreo.
- **Conservas** el lote identificado y en cuarentena (14.10) y las muestras como diga el procedimiento.
- **Sabes lo que viene.** Repetir un paso del proceso, como volver a secar o recristalizar, es reprocesar (14.20); cambiar el proceso es retrabajar y exige investigar antes (14.30).

Los números de esta lección son de ejemplo para entender. En planta y en el laboratorio manda siempre el procedimiento vigente (SOP) y la hoja de producción de tu lote.
`,
  plant: `
Turno de mañana en la planta ficticia. El intermedio ficticio **KT-77** se ha centrifugado en la **C-701** y se ha secado en el secadero de paletas a vacío **SP-702**. Todos los valores son de ejemplo.

La especificación dice: punto de fusión 151–154 °C. El laboratorio llama: el lote funde de 146 a 151 °C, con el polvo empañando el capilar antes de fundir. Han verificado el aparato con su sustancia de referencia esa misma mañana y cumple, así que no es un fallo de medida.

Tú no tocas el lote: está en bidones identificados en cuarentena. Calidad abre la investigación y te pide la hoja. Repasáis juntos el secado: el IPC dio LOD 0,4 % con un límite de 0,5 %, pero la muestra se tomó por la boca de muestreo superior a las 5 h, y la hoja pedía tomarla después de 10 minutos de giro tras parar el calor. En observaciones anotaste que la descarga del fondo salió con grumos húmedos.

El laboratorio mide sobre la muestra de liberación: LOD 1,6 %, KF 0,2 %; la cromatografía de gases encuentra el disolvente del lavado. Es secado incompleto, no impureza ni otra forma: el DSC y la difracción coinciden con el patrón. Calidad aprueba volver a secar con los parámetros validados y repetir el muestreo. Tras el nuevo secado, el lote funde de 151,5 a 153,5 °C y cumple. La acción preventiva: recordar en la hoja el punto y el momento del muestreo, que es lo que tu anotación ayudó a encontrar.
`,
  batchRecord: `
En la hoja de producción (*batch record*) y en lo que la acompaña verás y anotarás:

- **Secado**: temperatura de camisa y de producto, presión absoluta, tiempo, y la temperatura máxima de producto (puede venir de los estudios térmicos de seguridad).
- **IPC de secado**: hora, punto de muestreo, ensayo (LOD, KF) y resultado; la muestra según el procedimiento.
- **Observaciones de la descarga**: color, grumos, producto húmedo o pegado.
- **Cristalización** (si la hay antes): siembra, enfriamiento y disolvente, porque deciden la forma y, con ella, el punto de fusión.
- **Molienda**: temperatura de producto si la hoja la limita.
- **Resultados de liberación** que verás en el certificado: intervalo de fusión con inicio y final, y a veces DSC (temperatura de inicio) o forma cristalina.
- **Si hay un resultado fuera de especificación**: número de investigación, estado de cuarentena del lote, y lo que te pidan aportar; nada se corrige ni se tacha sin dejar rastro.
`,
  terms: [
    { es: "Fusión", en: "Melting", def: "Paso de sólido a líquido cuando la vibración de las moléculas vence al orden del cristal." },
    { es: "Intervalo de fusión", en: "Melting range", def: "Temperaturas entre el primer líquido visible (inicio) y la desaparición del último sólido (final)." },
    { es: "Calor de fusión", en: "Heat of fusion", def: "Energía que hay que dar a cada gramo de sólido para fundirlo, sin que suba su temperatura." },
    { es: "Tubo capilar", en: "Capillary tube", def: "Tubo de vidrio muy fino, cerrado por un extremo, donde se pone el polvo para medir el punto de fusión." },
    { es: "Material de referencia certificado", en: "Certified reference material", def: "Material con certificado que da el valor de una propiedad, su incertidumbre y su trazabilidad; sirve para verificar o calibrar equipos." },
    { es: "Calorimetría diferencial de barrido", en: "Differential scanning calorimetry (DSC)", def: "Técnica que calienta unos miligramos con un programa y mide el calor que absorben o desprenden frente a una referencia." },
    { es: "Termograma", en: "Thermogram", def: "Curva que da un equipo de análisis térmico: calor o masa frente a la temperatura." },
    { es: "Pico endotérmico", en: "Endothermic peak", def: "Pico en el que la muestra absorbe calor: fusión, salida de agua o disolvente del cristal." },
    { es: "Pico exotérmico", en: "Exothermic peak", def: "Pico en el que la muestra desprende calor: cristalización, cambio a forma estable o descomposición." },
    { es: "Temperatura de inicio", en: "Onset temperature", def: "Temperatura a la que la curva se separa de la línea base; en una fusión limpia corresponde al punto de fusión." },
    { es: "Línea base", en: "Baseline", def: "Tramo de la curva en el que la muestra no sufre ningún cambio; de ella se separan los picos." },
    { es: "Termogravimetría", en: "Thermogravimetric analysis (TGA)", def: "Técnica que pesa la muestra sin parar mientras la calienta y dibuja la masa frente a la temperatura." },
    { es: "Desolvatación", en: "Desolvation", def: "Salida del disolvente de dentro de la red de un solvato; en la TGA se ve como un escalón de masa." },
    { es: "Descomposición", en: "Decomposition", def: "Rotura de una sustancia por el calor en otras; a menudo da calor y gases y es un riesgo de proceso." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Un aparato de punto de fusión sube a 10 °C/min desde 40 °C hasta 160 °C y luego a 1 °C/min hasta 175 °C (valores de ejemplo). ¿Cuántos minutos dura una medida?",
      answer: 27,
      tolerance: 0.01,
      unit: "min",
      explain: "Tramo rápido: (160 − 40) / 10 = 12 min. Tramo lento: (175 − 160) / 1 = 15 min. Total: 12 + 15 = 27 min por medida, sin preparar la muestra.",
    },
    {
      kind: "number",
      q: "Una sustancia de referencia tiene certificado de 122,4 °C y el aparato la mide a 122,9 °C. ¿Cuántos grados se desvía el aparato?",
      answer: 0.5,
      tolerance: 0.01,
      unit: "°C",
      explain: "122,9 − 122,4 = 0,5 °C. Si la tolerancia del procedimiento es menor, el aparato no se usa hasta repararlo y verificarlo.",
    },
    {
      kind: "number",
      q: "En un DSC, una muestra de 2,80 mg da un pico de fusión con un área de 287,0 mJ. ¿Cuál es la entalpía de fusión en J/g?",
      answer: 102.5,
      tolerance: 0.01,
      unit: "J/g",
      explain: "mJ entre mg es lo mismo que J entre g: 287,0 / 2,80 = 102,5 J/g.",
    },
    {
      kind: "number",
      q: "En una TGA, 8,240 mg de muestra pasan a 7,869 mg en un único escalón. ¿Qué porcentaje de masa ha perdido?",
      answer: 4.5,
      tolerance: 0.01,
      unit: "%",
      explain: "(8,240 − 7,869) / 8,240 × 100 = 4,5 %. Un escalón neto a una temperatura concreta apunta a agua o disolvente dentro del cristal.",
    },
    {
      kind: "number",
      q: "Un producto ficticio de 320,0 g/mol forma un solvato 1:1 con etanol (46,069 g/mol). ¿Qué porcentaje de etanol tiene el solvato?",
      answer: 12.58,
      tolerance: 0.01,
      unit: "%",
      explain: "Solvato: 320,0 + 46,069 = 366,069 g/mol. Etanol: 46,069 / 366,069 × 100 = 12,58 %.",
    },
    {
      kind: "number",
      q: "El DSC de cribado de un intermedio da una descomposición de 540 J/g. Con un calor específico de 1,8 J/(g·K) y sin pérdidas, ¿cuántos grados subiría la masa?",
      answer: 300,
      tolerance: 0.01,
      unit: "°C",
      explain: "540 / 1,8 = 300 °C de subida. Las dos cifras van por gramo, así que vale igual para un kilo que para una tonelada.",
    },
    {
      kind: "choice",
      q: "La especificación dice 151–154 °C y el lote funde de 146 a 151 °C. ¿Qué indica ese resultado?",
      options: [
        "Que el lote es más puro, porque funde antes y con menos calor",
        "Que hay algo más en el sólido: impurezas o disolvente retenido",
        "Que el aparato está bien, porque el final cae dentro del intervalo",
        "Que hay que repetir la medida calentando más rápido el capilar",
      ],
      answer: 1,
      explain: "Inicio mucho más bajo e intervalo ancho es la huella de una impureza, y el disolvente retenido actúa igual. Qué es exactamente lo dicen la LOD, el KF, la cromatografía y el HPLC.",
    },
    {
      kind: "choice",
      q: "En un termograma de DSC aparece un pico exotérmico a 210 °C, muy por encima de la fusión. ¿Qué es lo más probable y qué importa en planta?",
      options: [
        "Una segunda fusión del producto, que no afecta al proceso",
        "La salida del agua del hidrato, que se arregla secando más",
        "Un error del equipo, porque una muestra pura no da picos así",
        "Una descomposición: marca un peligro y lleva a límites de temperatura",
      ],
      answer: 3,
      explain: "Las fusiones y la salida de agua o disolvente absorben calor. Un pico que desprende calor a alta temperatura suele ser una descomposición, y de ahí salen las temperaturas máximas de la hoja con su margen.",
    },
    {
      kind: "choice",
      q: "El DSC da un pico endotérmico a 112 °C y la TGA pierde un 5 % justo a esa temperatura. ¿Qué interpretación encaja?",
      options: [
        "Sale agua o disolvente de dentro del cristal: es un hidrato o un solvato",
        "Es la fusión del producto, porque fundir siempre hace perder masa",
        "Es una descomposición, porque toda pérdida de masa es descomposición",
        "Es humedad de la superficie, que siempre sale a una sola temperatura",
      ],
      answer: 0,
      explain: "Fundir no cambia la masa. Pico que absorbe calor más escalón de masa a la vez es la salida del agua o del disolvente de la red; la humedad de superficie sale poco a poco desde el principio.",
    },
    {
      kind: "choice",
      q: "Te comunican que tu lote ha salido fuera de especificación en punto de fusión. ¿Qué haces?",
      options: [
        "Mezclo el lote con otro bueno para que la media cumpla",
        "Vuelvo a secar unas horas más antes de que llegue calidad",
        "Mantengo el lote en cuarentena y aporto lo que anoté en la hoja",
        "Pido al laboratorio que repita la medida hasta que cumpla",
      ],
      answer: 2,
      explain: "ICH Q7 pide investigar el resultado y no mezclar lotes fuera de especificación para que cumplan. Repetir pasos del proceso lo decide calidad; tú conservas el lote y das tus datos.",
    },
  ],
};
