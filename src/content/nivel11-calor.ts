import type { Lesson } from "./types";

export const calorYFrioAFondo: Lesson = {
  slug: "calor-y-frio-a-fondo",
  level: 11,
  order: 8,
  title: "Intercambio de calor y frío a fondo: cómo se calienta y se enfría un proceso",
  titleEn: "Heat transfer and cooling in depth: how a process is heated and cooled",
  minutes: 40,
  summary:
    "Qué es el calor y cómo se cuenta, el balance entre dos corrientes, los intercambiadores y su diferencia de temperatura media logarítmica, el ensuciamiento, los condensadores, de dónde sale el frío de la planta y qué hacer cuando falla.",
  body: `
En las dos lecciones anteriores viste los servicios de calor y de frío por encima. Aquí aprendes a hacer las cuentas y a entender qué pasa dentro de un intercambiador y de una máquina de frío. La idea central: **el calor no se crea ni desaparece, solo cambia de sitio**. Enfriar algo es llevarse su calor a otra parte.

### Calor y temperatura no son lo mismo
La **temperatura** (*temperature*) dice lo caliente que está algo. El **calor** (*heat*) es energía que pasa de un cuerpo caliente a otro más frío. Una chispa de soldadura está a muchísima temperatura, pero lleva tan poco calor que no calienta nada. Una bañera de agua templada está a poca temperatura y guarda muchísimo calor. Piensa en dos depósitos de agua: la temperatura es la altura del nivel y el calor es la cantidad de agua.

| Unidad | Qué mide | Equivalencia |
|---|---|---|
| Julio (J) y kilojulio (kJ) | Energía: cantidad de calor | 1 kJ = 1000 J |
| Kilovatio (kW) | Potencia: calor por segundo | 1 kW = 1 kJ cada segundo |
| Kilovatio hora (kWh) | Energía, como en la factura de la luz | 1 kWh = 3600 kJ |

Un cambio de 10 °C es también un cambio de 10 kelvin (K).

### Las tres formas de pasar el calor
- **Conducción** (*conduction*): el calor atraviesa un material sin que este se mueva. El mango de una sartén se calienta así. En planta, así cruza el calor la pared de un tubo o de un reactor.
- **Convección** (*convection*): el calor lo transporta un fluido que se mueve. Al remover la sopa subes líquido caliente del fondo. En planta lo hacen el agitador y el fluido que corre por la camisa.
- **Radiación** (*radiation*): el calor viaja sin contacto, como el que notas en la cara delante de una brasa. Según la NTP 528 del Instituto Nacional de Seguridad y Salud en el Trabajo (INSST), todos los materiales emiten radiación según su temperatura.

El aislamiento de las tuberías, el calorifugado (*insulation*), frena las tres.

### Calor específico
No todas las sustancias cuestan lo mismo de calentar. El **calor específico** (*specific heat*, cp) es la energía que hace falta para subir 1 °C un kilo de sustancia. El del agua líquida es 4,18 kJ/(kg·K), uno de los más altos. En esta lección usamos para un disolvente orgánico un valor de ejemplo de 2,0 kJ/(kg·K): el real está en la ficha de cada disolvente. Por eso el agua tarda más en calentarse que un disolvente, y por eso es tan buena para llevarse calor.

> Q = m × cp × ΔT

Q es el calor en kJ, m la masa en kg y ΔT el cambio de temperatura (final menos inicial).

**Ejemplo 1: dos líquidos.** Calentar 500 kg de agua de 20 a 60 °C: 500 × 4,18 × 40 = **83 600 kJ**. Con 500 kg del disolvente de ejemplo: 500 × 2,0 × 40 = **40 000 kJ**, menos de la mitad.

**Ejemplo 2: enfriar.** Enfriar 1500 kg de una masa con cp = 2,0 de 70 a 20 °C: 1500 × 2,0 × (20 − 70) = −150 000 kJ. El signo menos dice que el calor sale: hay que **retirar 150 000 kJ**. En una hora, eso pide una potencia de frío de 150 000 / 3600 = **41,7 kW**.

**Ejemplo 3: temperatura final.** A 1200 kg de una masa con cp = 2,5 (valor de ejemplo) que está a 15 °C le das 90 000 kJ. ΔT = Q / (m × cp) = 90 000 / (1200 × 2,5) = 30 °C. Acaba a **45 °C**.

### Balance de calor entre dos corrientes
Si no hay pérdidas, el calor que pierde el lado caliente es el que gana el lado frío.

**Ejemplo 4.** Para retirar los 150 000 kJ del ejemplo 2 usas agua de refrigeración que entra a 25 °C y sale a 35 °C. Cada kilo de agua se lleva 4,18 × 10 = 41,8 kJ. Hacen falta 150 000 / 41,8 = **3589 kg de agua**. Si solo pasaran 3000 kg, esa agua se calentaría 150 000 / (3000 × 4,18) = **12,0 °C** y saldría a 37 °C. Menos caudal, agua más caliente a la salida.

### Mezclar dos líquidos a distinta temperatura
Es el mismo balance: lo que pierde el caliente lo gana el frío. Si al mezclarse no se desprende ni se absorbe calor, la temperatura final es una media en la que pesa más quien tiene más masa y más calor específico:

> T final = (m1 × cp1 × T1 + m2 × cp2 × T2) / (m1 × cp1 + m2 × cp2)

**Ejemplo 5.** Mezclas 800 kg de agua a 20 °C con 200 kg de agua a 70 °C. Al ser el mismo líquido, el cp se va de la cuenta: (800 × 20 + 200 × 70) / 1000 = **30 °C**.

Ojo: muchas mezclas reales sí desprenden calor al mezclarse, y entonces esta cuenta no vale.

### El intercambiador de calor
Un **intercambiador de calor** (*heat exchanger*) son dos fluidos separados por una pared metálica. El calor cruza la pared; los fluidos no se tocan.

| Tipo | Dónde lo ves | A favor y en contra |
|---|---|---|
| Carcasa y tubos o haz tubular (*shell and tube*) | Condensadores, enfriadores de servicios | Robusto. Más voluminoso que el de placas |
| De placas (*plate*) | Circuitos de agua y de glicol | Según la NTP 528: menos volumen para la misma superficie y más fácil de limpiar; a cambio dependen de sus juntas y trabajan a presiones bajas, hasta unos 30 bar |
| Doble tubo (*double pipe*) | Enfriadores pequeños, tomas de muestra | Un tubo dentro de otro. Sencillo, con poca superficie |
| Serpentín (*coil*) | Dentro de depósitos y de algunos reactores | Según la NTP 528: más barato que la camisa y con mejor paso de calor, pero complica la limpieza |
| Camisa (*jacket*) | Reactores, filtros secadores | Interior liso y fácil de limpiar. Su superficie la limita el tamaño del equipo |

### En paralelo y en contracorriente
Los dos fluidos pueden avanzar juntos, en **corrientes paralelas** (*co-current flow*), o cruzarse en sentidos opuestos, en **contracorriente** (*countercurrent flow*).

Toma este caso: un disolvente caliente se enfría de 80 a 50 °C con agua que se calienta de 20 a 40 °C.

| | Extremo 1 | Extremo 2 |
|---|---|---|
| En paralelo | 80 − 20 = 60 °C | 50 − 40 = 10 °C |
| En contracorriente | 80 − 40 = 40 °C | 50 − 20 = 30 °C |

En paralelo hay un empujón enorme al principio y casi ninguno al final: el último tramo apenas trabaja. Además, el agua nunca puede salir más caliente de lo que sale el disolvente. En contracorriente el empujón está repartido por todo el equipo, y el agua sí podría salir más caliente que la salida del disolvente. Por eso casi siempre se conectan en contracorriente.

### La diferencia de temperatura media logarítmica
En la camisa usabas Q = U × A × ΔT. En un intercambiador la diferencia de temperatura cambia de un extremo a otro, así que hace falta una media. La media normal no sirve: la diferencia no baja en línea recta, cae rápido al principio y despacio después. La media correcta es la **diferencia de temperatura media logarítmica** (*log mean temperature difference*, LMTD):

> ΔTml = (ΔT1 − ΔT2) / ln(ΔT1 / ΔT2)

ΔT1 y ΔT2 son las diferencias en cada extremo, y «ln» es la tecla de logaritmo natural de la calculadora.

**Ejemplo 6: en paralelo.** ΔT1 = 60 y ΔT2 = 10. Resta: 50. Cociente: 60 / 10 = 6, y ln(6) = 1,792. ΔTml = 50 / 1,792 = **27,9 °C**.

**Ejemplo 7: en contracorriente.** ΔT1 = 40 y ΔT2 = 30. Resta: 10. Cociente: 1,333, y ln(1,333) = 0,288. ΔTml = 10 / 0,288 = **34,8 °C**.

La media normal daría 35 °C en los dos casos: casi acierta en contracorriente y falla mucho en paralelo.

**Ejemplo 8: superficie necesaria.** La cuenta completa es Q = U × A × ΔTml. Pasa 1,0 kg/s de disolvente (cp = 2,0) que se enfría 30 °C: Q = 1,0 × 2,0 × 30 = 60 kW. Con un valor de ejemplo de U = 500 W/(m²·K), en contracorriente A = 60 000 / (500 × 34,8) = **3,45 m²**. En paralelo harían falta 60 000 / (500 × 27,9) = **4,30 m²**, un 25 % más.

### Ensuciamiento
Con el tiempo, en la pared se pegan cal, lodo, algas, óxido o producto. Es el **ensuciamiento** (*fouling*). Esa capa es como un jersey puesto sobre el tubo: el calor cruza peor y U baja. La NTP 528 avisa de que esta pérdida es especialmente grave si el intercambiador refrigera una reacción exotérmica, y de que la suciedad además reduce el caudal máximo que pasa.

**Ejemplo 9.** Si el intercambiador del ejemplo 8 se ensucia y U baja de 500 a 350, con la misma superficie y las mismas temperaturas solo pasa 350 × 3,45 × 34,8 = 42 000 W, **42 kW** en vez de 60.

El operador lo nota así: para el mismo trabajo hace falta agua más fría o más caudal, la válvula de control trabaja cada vez más abierta, los enfriamientos tardan más que en lotes anteriores y sube la diferencia de presión entre la entrada y la salida.

### Condensadores
En el **reflujo** y en la **destilación**, que ya conoces, el condensador quita calor al vapor de disolvente hasta volverlo líquido. Según la NTP 528, el reflujo es además una forma de refrigerar, siempre que el condensador tenga capacidad suficiente.

Qué se vigila:
- **Temperatura de salida del agua o del glicol.** Si sube, llega más vapor del previsto o pasa menos caudal (ejemplo 4).
- **El venteo** (*vent*). Lo que el condensador no condensa sigue camino hacia el venteo. Una línea de venteo caliente indica que el condensador no da abasto.
- **Que no se inunde ni se congele.** La NTP 528 cita tres fallos del condensador: la entrada de vapor bloqueada, el condensador inundado de líquido y el condensador congelado, que puede ocurrir con un servicio demasiado frío para ese producto.

Si falla el frío del condensador, el disolvente sigue hirviendo pero ya no vuelve como líquido: los vapores salen por el venteo, el reactor pierde disolvente, puede subir la presión y hay vapores inflamables donde no deben estar. Se corta la calefacción y se avisa.

### Los servicios de frío y hasta dónde llega cada uno
Las temperaturas típicas las tienes en la lección anterior. Lo que limita a cada uno es esto:

| Servicio | Qué lo limita |
|---|---|
| Agua de torre (*cooling tower water*) | El aire de la calle: no baja de su temperatura de bulbo húmedo |
| Agua fría (*chilled water*) de una enfriadora (*chiller*) | El agua se congela a 0 °C, así que se trabaja unos grados por encima |
| Agua glicolada (*glycol water*) o salmuera (*brine*) | El punto de congelación de la mezcla |
| Nitrógeno líquido (*liquid nitrogen*) | Hierve a −195,8 °C a presión atmosférica |

El glicol es un anticongelante, como el del coche: mezclado con agua **baja el punto de congelación**. Las tablas de mezclas de etilenglicol y agua no coinciden del todo entre sí: con un 30 % de glicol en volumen dan entre unos −13 y unos −17 °C, y con un 50 %, entre unos −33 y unos −38 °C. La cifra que vale es la de la ficha del fluido de tu planta. Si alguien repone con agua sola, el circuito queda aguado y puede congelarse dentro de la máquina de frío.

### De dónde sale el frío: el ciclo de compresión
El frío no se fabrica. Una máquina de frío saca calor de un sitio y lo echa en otro, como el frigorífico de casa, que enfría por dentro y tiene la rejilla de atrás caliente. Lo hace con un fluido, el **refrigerante** (*refrigerant*), que da vueltas por un circuito cerrado. Las cuatro piezas las define el Reglamento de seguridad para instalaciones frigoríficas (Real Decreto 552/2019):

1. **Evaporador** (*evaporator*). El refrigerante líquido, a baja presión, hierve tomando calor de lo que se quiere enfriar. Aquí se produce el frío.
2. **Compresor** (*compressor*). Sube mecánicamente la presión de ese vapor, que con ello se calienta.
3. **Condensador**. El vapor a alta presión cede calor al agua de torre o al aire y vuelve a ser líquido.
4. **Válvula de expansión** (*expansion valve*). Deja pasar el líquido de la presión alta a la baja. Al perder presión se enfría y vuelve al evaporador.

Las cuentas cuadran: el calor que sale por el condensador es el que entró por el evaporador más la energía del compresor. Si el evaporador retira 100 kW y el compresor consume 30 kW, el condensador tiene que echar fuera **130 kW**. Sin agua de torre la enfriadora se para: no tiene dónde dejar el calor.

El refrigerante no suele ir hasta el reactor. Enfría un **fluido secundario** (*secondary fluid*), agua o glicol, que es el que se bombea a las camisas y a los condensadores.

### Torres de refrigeración
En la torre de refrigeración (*cooling tower*) el agua caliente cae en forma de lluvia mientras un ventilador hace pasar aire. Una pequeña parte del agua se evapora, y para evaporarse roba calor al resto.

La **temperatura de bulbo húmedo** (*wet-bulb temperature*) es la que marca un termómetro envuelto en un paño mojado al que le da el aire. Es el tope de lo que puede enfriar la evaporación, y la torre se queda siempre algo por encima. Por eso en verano, y más con bochorno, el agua de torre llega más caliente.

El agua templada y pulverizada es un sitio ideal para la bacteria *Legionella*, que según el Real Decreto 487/2022 se multiplica entre 20 y 50 °C y se contagia al respirar gotitas. Ese real decreto exige, entre otras cosas:

- limpieza y desinfección del sistema completo al menos dos veces al año;
- análisis de *Legionella* como mínimo cada mes, y control diario del pH, la temperatura y el biocida;
- separadores de gotas que dejen escapar menos del 0,002 % del agua que circula;
- parar la instalación, limpiar y desinfectar si el recuento llega a 10 000 unidades formadoras de colonias (UFC) por litro.

Para ti: no usar esa agua para otra cosa y avisar si ves la balsa sucia o un separador roto.

### Fluidos térmicos para temperaturas altas
El vapor da más temperatura cuanto más presión tiene, y eso obliga a equipos más robustos. Un **fluido térmico** (*thermal fluid*), normalmente un aceite, se calienta en una caldera o con resistencias y circula como líquido, sin la presión que pediría el vapor. Va por circuito cerrado. Una fuga de aceite caliente quema: se avisa y no se toca.

### Una sola corriente o vapor y agua alternos
Hay dos maneras de dar servicio a una camisa:

- **Vapor y agua alternos.** Por la misma camisa entra vapor para calentar y agua para enfriar.
- **Una sola corriente** (*single-fluid system*). Un único fluido térmico circula siempre por la camisa, y un grupo de intercambiadores lo calienta o lo enfría fuera. La temperatura cambia de forma suave.

¿Por qué el cambio de vapor a agua fría se hace despacio y purgando? Al acabar de calentar, la camisa está llena de vapor y condensado. Si entra agua fría de golpe, el vapor se condensa bruscamente y el agua se lanza a ocupar el hueco: es el **golpe de ariete** (*water hammer*), que sacude tuberías y juntas. Y la pared pasa en segundos de muy caliente a fría: el **choque térmico** (*thermal shock*) que viste en el reactor a fondo y que puede romper el vitrificado. Por eso primero se cierra el vapor, se despresuriza y se purga el condensado, y después se introduce el agua poco a poco, respetando la diferencia máxima de temperatura de la hoja.

### Si falla el frío durante una reacción exotérmica
Entre las causas, las NTP 527 y 528 citan la avería de la bomba, el fallo eléctrico, las válvulas, las obstrucciones, la congelación y la fuga de refrigerante. Qué haces:

1. **Paras la adición.** Según la NTP 527, la respuesta típica ante una alarma es interrumpir la entrada de reactivos para que no se acumulen. Si lo hace el enclavamiento, compruebas que la válvula ha cerrado.
2. **Mantienes la agitación.** Sin agitación el poco frío que quede no llega a la masa.
3. **Cortas la calefacción** y pones el frío disponible al máximo.
4. **Avisas** al jefe de turno y sigues el procedimiento de emergencia. Las medidas extremas que cita la NTP 527 (añadir un diluyente frío, despresurizar, añadir un inhibidor o verter el contenido a otro recipiente) solo existen si el proceso se diseñó con ellas, y no se improvisan.
5. **Sigues mirando** la temperatura y la presión, y lo anotas todo con su hora.

La NTP 528 recuerda lo contrario: un refrigerante demasiado frío durante la adición frena la reacción y el reactivo se acumula. Ni más frío del que pide la hoja ni menos.

### Qué vigila y qué anota el operador
- Antes de empezar: servicios de frío disponibles y a su temperatura.
- Temperaturas de masa y de camisa, y su diferencia.
- Temperatura de entrada y de salida del servicio en condensadores e intercambiadores.
- Presión del reactor y estado del venteo.
- Tiempos de calentamiento y de enfriamiento, comparados con lotes anteriores.
- Toda alarma, parada de adición o fallo de servicio, con su hora.

En planta manda siempre el procedimiento vigente (SOP) y la hoja de producción de cada lote.
`,
  plant: `
Turno de tarde, en pleno julio. Estás destilando disolvente en el reactor R-310 para concentrar el intermedio ficticio BN-40. Los vapores suben al condensador de carcasa y tubos E-311, que trabaja con agua de torre, y el destilado cae al depósito D-312.

La hoja dice: *«Destilar a presión atmosférica hasta recoger 900 L. Agua del condensador: salida no superior a 38 °C. Si se supera, reducir la calefacción.»*

Al empezar, el agua entra a 27 °C y sale a 33 °C. Una hora después entra a 29 °C, porque fuera aprieta el bochorno, y sale a 39 °C. Haces la cuenta: antes se calentaba 6 °C y ahora 10 °C. Con la misma calefacción, eso solo puede ser menos caudal de agua. Tocas con cuidado la línea de venteo después del condensador: está tibia, y antes estaba fría.

No esperas. Bajas la consigna de la camisa para que hierva menos disolvente, compruebas que la válvula de agua del E-311 está abierta del todo y avisas a la jefa de turno. Mantenimiento encuentra el filtro de la línea de agua medio taponado de lodo. Lo limpian, el caudal se recupera y el agua vuelve a salir a 34 °C. El venteo se enfría.

Subes otra vez la calefacción poco a poco y terminas la destilación. Anotas las temperaturas de entrada y de salida con su hora, el tiempo con la calefacción reducida y la incidencia. La jefa de turno abre una desviación para valorar si se perdió disolvente por el venteo.
`,
  batchRecord: `
En la hoja de producción (*batch record*) las instrucciones de calor y frío traen siempre un servicio, un objetivo y un límite. Verás y anotarás:

- **Servicios comprobados antes de empezar**: agua de torre, agua fría o glicol disponibles, con la temperatura de suministro leída y la hora.
- **Temperatura de masa y de camisa** a los intervalos que marque la hoja, y la diferencia entre ambas si el reactor es vitrificado (la hoja da el máximo).
- **Rampas**: hora de inicio y de fin de cada calentamiento y enfriamiento, y temperatura alcanzada. No se anota «conforme»: se anota el valor.
- **Condensador**: código del equipo, temperatura de entrada y de salida del agua o del glicol, posición de reflujo o destilación y volumen destilado.
- **Cambios de servicio en la camisa** (de vapor a agua, por ejemplo): hora y confirmación de la purga, si la hoja lo pide.
- **Adiciones exotérmicas**: temperatura mínima y máxima durante la adición, y cada parada con su hora y su motivo.
- **Incidencias**: alarma de temperatura alta, fallo de un servicio de frío, venteo caliente, caudal bajo. Se anotan en el momento, se avisa y el responsable decide si se abre una desviación.
- **Instrumentos**: código de la sonda o del indicador usado cuando la hoja lo pide.

Nunca se anota la temperatura que «debería» haber: se anota la que marca el instrumento, con su unidad.
`,
  terms: [
    { es: "Calor", en: "Heat", def: "Energía que pasa de un cuerpo caliente a otro más frío. Se mide en julios (J) o kilojulios (kJ)." },
    { es: "Potencia térmica", en: "Heat duty / thermal power", def: "Calor que pasa por segundo. Se mide en kilovatios: 1 kW es 1 kJ cada segundo." },
    { es: "Conducción", en: "Conduction", def: "Paso del calor a través de un material sin que este se mueva, como en la pared de un tubo." },
    { es: "Convección", en: "Convection", def: "Transporte de calor por un fluido en movimiento, como el líquido agitado de un reactor." },
    { es: "Balance de calor", en: "Heat balance", def: "Cuenta en la que el calor que pierde una corriente es igual al que gana la otra, si no hay pérdidas." },
    { es: "Contracorriente", en: "Countercurrent flow", def: "Disposición en la que los dos fluidos de un intercambiador circulan en sentidos opuestos. Aprovecha mejor la superficie." },
    { es: "Corrientes paralelas", en: "Co-current flow / parallel flow", def: "Disposición en la que los dos fluidos entran por el mismo extremo y avanzan en el mismo sentido." },
    { es: "Diferencia de temperatura media logarítmica", en: "Log mean temperature difference (LMTD)", def: "Media correcta de la diferencia de temperatura entre los dos fluidos a lo largo de un intercambiador." },
    { es: "Ensuciamiento", en: "Fouling", def: "Capa de cal, lodo o producto pegada a la pared de un intercambiador, que frena el paso del calor." },
    { es: "Enfriadora", en: "Chiller", def: "Máquina de frío que enfría agua o glicol con un ciclo de compresión de refrigerante." },
    { es: "Refrigerante", en: "Refrigerant", def: "Fluido que da vueltas por la máquina de frío: toma calor al evaporarse y lo cede al condensarse." },
    { es: "Fluido secundario", en: "Secondary fluid", def: "Agua, glicol o salmuera que lleva el frío desde la máquina hasta los equipos de proceso." },
    { es: "Temperatura de bulbo húmedo", en: "Wet-bulb temperature", def: "Temperatura de un termómetro con un paño mojado al aire. Es el tope de enfriamiento de una torre." },
    { es: "Torre de refrigeración", en: "Cooling tower", def: "Equipo que enfría agua evaporando una pequeña parte de ella en una corriente de aire." },
  ],
  quiz: [
    {
      kind: "number",
      q: "¿Cuánto calor hace falta para calentar 800 kg de un disolvente con cp = 2,0 kJ/(kg·K) de 25 a 65 °C?",
      answer: 64000,
      tolerance: 0.01,
      unit: "kJ",
      explain: "Q = m × cp × ΔT = 800 × 2,0 × 40 = 64000 kJ.",
    },
    {
      kind: "choice",
      q: "Una chispa de soldadura está mucho más caliente que el agua de una bañera, pero no calienta la sala. ¿Por qué?",
      options: [
        "Porque la chispa solo da calor por conducción directa",
        "Porque el agua tiene siempre más temperatura que el metal",
        "Porque tiene mucha temperatura pero muy poco calor",
        "Porque la temperatura y el calor se miden en kilovatios",
      ],
      answer: 2,
      explain: "La temperatura dice lo caliente que está algo; el calor es la cantidad de energía. La chispa es diminuta: tiene mucha temperatura y casi nada de energía que ceder.",
    },
    {
      kind: "number",
      q: "A 400 kg de agua a 20 °C le aportas 50 160 kJ. Con cp = 4,18 kJ/(kg·K), ¿a qué temperatura queda?",
      answer: 50,
      tolerance: 0.01,
      unit: "°C",
      explain: "ΔT = Q / (m × cp) = 50 160 / (400 × 4,18) = 30 °C. Temperatura final: 20 + 30 = 50 °C.",
    },
    {
      kind: "number",
      q: "Hay que retirar 125 400 kJ de una masa con agua de refrigeración que entra a 25 °C y sale a 35 °C. Con cp del agua = 4,18 kJ/(kg·K), ¿cuántos kilos de agua hacen falta?",
      answer: 3000,
      tolerance: 0.01,
      unit: "kg",
      explain: "Cada kilo de agua se lleva 4,18 × 10 = 41,8 kJ. Hacen falta 125 400 / 41,8 = 3000 kg de agua.",
    },
    {
      kind: "number",
      q: "Mezclas 300 kg de agua a 80 °C con 700 kg de agua a 20 °C, sin pérdidas de calor. ¿Qué temperatura final tiene la mezcla?",
      answer: 38,
      tolerance: 0.01,
      unit: "°C",
      explain: "Al ser el mismo líquido, T final = (300 × 80 + 700 × 20) / 1000 = 38 000 / 1000 = 38 °C.",
    },
    {
      kind: "choice",
      q: "Un enfriador debe bajar un disolvente de 80 a 50 °C con agua que entra a 20 °C. ¿Qué gana conectándolo en contracorriente?",
      options: [
        "Reparte mejor la diferencia de temperatura y pide menos superficie",
        "Hace que el agua de servicio no se caliente al pasar por el equipo",
        "Evita que la pared se ensucie y que suba la caída de presión",
        "Permite retirar más calor del que cede el disolvente caliente",
      ],
      answer: 0,
      explain: "En contracorriente la diferencia de temperatura se reparte por todo el equipo y la media logarítmica es mayor, así que la misma superficie pasa más calor. El balance no cambia: el agua gana justo lo que pierde el disolvente.",
    },
    {
      kind: "number",
      q: "En un intercambiador en contracorriente, el fluido caliente entra a 100 °C y sale a 60 °C, y el frío entra a 20 °C y sale a 50 °C. ¿Cuál es la diferencia de temperatura media logarítmica? Dato: ln(1,25) = 0,223.",
      answer: 44.8,
      tolerance: 0.02,
      unit: "°C",
      explain: "Extremos: ΔT1 = 100 − 50 = 50 °C y ΔT2 = 60 − 20 = 40 °C. ΔTml = (50 − 40) / ln(50 / 40) = 10 / 0,223 = 44,8 °C.",
    },
    {
      kind: "number",
      q: "Un intercambiador debe pasar 90 kW con U = 600 W/(m²·K) y una diferencia de temperatura media logarítmica de 30 °C. ¿Qué superficie necesita?",
      answer: 5,
      tolerance: 0.01,
      unit: "m²",
      explain: "Q = U × A × ΔTml, así que A = 90 000 / (600 × 30) = 5 m². Ojo con las unidades: 90 kW son 90 000 W.",
    },
    {
      kind: "choice",
      q: "Durante una adición exotérmica se para la bomba de glicol y la temperatura de la masa empieza a subir. ¿Qué haces?",
      options: [
        "Paro el agitador para que la masa genere menos calor",
        "Acelero la adición para terminar antes de que suba más",
        "Abro la boca de hombre para que la masa se enfríe sola",
        "Paro la adición, mantengo la agitación y doy el aviso",
      ],
      answer: 3,
      explain: "Parar la adición corta la entrada de reactivo, que es lo que alimenta el calor. La agitación se mantiene porque sin ella el frío que quede no llega a la masa. Después se avisa y se sigue el procedimiento de emergencia.",
    },
    {
      kind: "choice",
      q: "Lote tras lote, el mismo enfriamiento tarda más y la válvula de agua trabaja cada vez más abierta. ¿Qué es lo más probable?",
      options: [
        "Que el calor específico del producto haya ido subiendo",
        "Que el intercambiador se esté ensuciando y pase peor el calor",
        "Que el agua de torre esté llegando cada vez más fría",
        "Que el equipo se haya conectado en contracorriente",
      ],
      answer: 1,
      explain: "La capa de suciedad frena el paso del calor (baja U): para el mismo trabajo hace falta más caudal o agua más fría, y los tiempos se alargan. Se avisa para que se revise y se limpie.",
    },
  ],
};
