import type { Lesson } from "./types";

export const espectroscopiaAtomicaAFondo: Lesson = {
  slug: "espectroscopia-atomica-a-fondo",
  level: 7,
  order: 13.6,
  title: "Espectroscopia atómica y fluorescencia a fondo",
  titleEn: "Atomic spectroscopy and fluorescence in depth",
  minutes: 40,
  summary:
    "Absorción atómica de llama, horno de grafito y vapor frío, emisión en llama, ICP-OES e ICP-MS con sus interferencias, fluorescencia molecular, cuándo se usa cada técnica y cómo se calcula con ICH Q3D el límite de paladio de un catalizador.",
  body: `
En «Electrones, orbitales y tabla periódica a fondo: por qué cada elemento reacciona como reacciona» viste por qué cada átomo emite y absorbe sus propias rayas de luz, y una primera idea de la absorción atómica. En «Otras técnicas a fondo: difracción de rayos X, RMN, espectrometría de masas e ICP» viste el plasma de argón, la digestión con ácido, la opción 2a de ICH Q3D y el umbral de control del 30 %. Aquí entramos en los equipos: cómo funcionan, qué los engaña y cuándo se elige cada uno. La fuente principal es el manual de análisis elemental de la FDA (*Elemental Analysis Manual*, EAM), escrito para alimentos: sus ideas valen para un laboratorio de API, pero sus límites son de sus métodos, no de tu producto.

### La idea común: primero, átomos sueltos
Para medir un metal hay que dejarlo como **átomos libres** en estado gaseoso: la **atomización** (*atomization*). Antes, la muestra se digiere con ácido nítrico y agua oxigenada en recipientes cerrados con microondas. Hace falta un ácido fuerte: según la ficha del paladio de ICH Q3D, el paladio metálico resiste a la mayoría de reactivos salvo el agua regia y el ácido nítrico.

Hay tres maneras de atomizar, y cada una da una familia de técnicas:

| Atomizador | Técnicas | Cómo es |
|---|---|---|
| Llama | Absorción atómica de llama, emisión en llama | La disolución se aspira y se pulveriza dentro de una llama |
| Horno de grafito | Absorción atómica electrotérmica | Una gota de microlitros se calienta en un tubo de grafito |
| Plasma de argón | ICP-OES, ICP-MS | La niebla de la muestra entra en un gas ionizado muy caliente |

### Absorción atómica de llama
En la **absorción atómica de llama** (*flame atomic absorption spectrometry*, FAAS) la disolución se aspira a una llama de aire y acetileno (los gases que cita el método 4.1 de la FDA). La cruza la luz de una **lámpara de cátodo hueco** (*hollow cathode lamp*) o de una lámpara de descarga sin electrodos, **específica del elemento**: la de plomo emite las rayas del plomo y los átomos de plomo de la llama se las comen. Un monocromador deja pasar solo la raya elegida (283,3 o 217,0 nm para el plomo, 228,8 nm para el cadmio) y el detector mide cuánta luz falta: la **absorbancia** que ya conoces de «Espectroscopia a fondo: lo que la luz cuenta de una molécula (UV-Vis e infrarrojo)».

Lo que dice el método de la FDA:

- **Un elemento cada vez.** Cada elemento lleva su lámpara; el método hace primero toda la serie del plomo y luego repite para el cadmio.
- **Corrección de fondo obligatoria.** Otras sustancias de la muestra absorben o dispersan luz de forma no específica y darían resultados altos.
- **Una ventana de trabajo.** La zona lineal suele ir de 0,050 a 0,350-0,400 de absorbancia; la muestra se diluye hasta caer ahí. Y la llama necesita de 20 a 30 minutos encendida antes de dar resultados.
- **Las rayas casi nunca se pisan**: con lámparas del propio elemento, el solape con otro elemento es extremadamente raro.

**La concentración característica.** La FDA mide la sensibilidad del equipo con la **concentración característica** (*characteristic concentration*, c₀): la concentración que da una absorbancia de 0,0044. Se compara con la especificación del fabricante y debe quedar dentro del ±20 %.

**Ejercicio resuelto 1. ¿Por qué 0,0044?** La transmitancia es T = 10⁻ᴬ = 10⁻⁰'⁰⁰⁴⁴ = 0,990. Pasa el 99,0 % de la luz y se absorbe el 1,0 %. La concentración característica es, por tanto, la que se come el 1 % de la luz.

**Ejercicio resuelto 2. Comprobar el equipo (valores de ejemplo).** La recta de calibrado de un metal tiene una pendiente de 0,0550 de absorbancia por mg/L, y el fabricante da c₀ = 0,070 mg/L.

1. c₀ = 0,0044 / 0,0550 = 0,080 mg/L.
2. Margen del ±20 %: de 0,070 × 0,8 = 0,056 a 0,070 × 1,2 = 0,084 mg/L.
3. 0,080 está dentro. Con una pendiente de 0,0500, c₀ sería 0,088 mg/L, fuera: hay que revisar el equipo antes de analizar.

### El horno de grafito: picogramos
Cuando la llama no llega, se usa el **horno de grafito** (*graphite furnace atomic absorption spectrometry*, GFAAS). En vez de aspirar mililitros, un automuestreador deja **20 µL** de disolución sobre una plataforma dentro de un tubo de grafito, en atmósfera de argón. El tubo se calienta por pasos. Este es el programa del método 4.3 de la FDA para el plomo:

| Paso | Temperatura | Para qué sirve |
|---|---|---|
| 1 a 3 | 110, 130 y 200 °C | Secar la gota sin salpicar |
| 4 | 820 °C | Pirólisis: quemar la materia orgánica y las sales sin perder el plomo |
| 5 | 1700 °C | Atomizar: nube de átomos y lectura |
| 6 | 2400 °C | Limpiar el tubo para la siguiente gota |

La señal es un **pico** en el tiempo y se mide su área, en absorbancia por segundo (A·s). El método añade un **modificador de matriz** (*matrix modifier*), magnesio con fosfato de amonio, para que el plomo no se escape antes de tiempo, y **corrección de fondo por efecto Zeeman** (*Zeeman background correction*), que usa un imán para separar la absorción del átomo de la absorción ancha de las moléculas.

La sensibilidad del horno se da como **masa característica** (*characteristic mass*, m₀): la masa que da 0,0044 A·s. El equipo de ese método debe llegar al menos a 30 pg de plomo y 1,3 pg de cadmio. Un picogramo es una billonésima de gramo.

**Ejercicio resuelto 3. Cuántos átomos ve el horno (valores de ejemplo).** Se inyectan 20 µL de una disolución con 5 µg/L de plomo.

1. Volumen: 20 µL = 0,000020 L.
2. Masa: 0,000020 × 5 = 0,0001 µg = 0,1 ng = **100 pg**.
3. Señal esperada con m₀ = 30 pg: 0,0044 × 100 / 30 = **0,0147 A·s**, por encima del 0,012 A·s a partir del cual el método exige que dos inyecciones coincidan dentro del 7 %.

**Llama frente a horno.** Para el plomo, el límite de cuantificación en disolución es 1,0 mg/L (1000 µg/L) con llama y 2,7 µg/L con horno: 1000 / 2,7 = unas **370 veces** menos. El precio: el horno es lento y sufre más por la matriz.

**Qué lo engaña.** La FDA distingue interferencias de **memoria** (restos de una muestra muy cargada; se evitan con el paso de limpieza), **espectrales** (moléculas que absorben ancho; las combaten el modificador y el Zeeman) y de **matriz**, las peores: sales que impiden formar átomos libres. Se delatan por recuperaciones bajas y picos deformados, y se resuelven diluyendo o con adiciones estándar, resueltas con paladio en «Estadística del laboratorio a fondo: comparar, aceptar y rechazar resultados». Seguridad: el horno emite ultravioleta al atomizar (no se mira) y hay que estar a más de 3 pies (casi un metro) del imán del Zeeman.

**El mercurio** se mide por **vapor frío** (*cold vapour*, CVAAS; método 4.5 de la FDA): el cloruro de estaño lo pasa a mercurio metálico, que sale como vapor sin llama y se lee a 253,7 nm.

### Emisión en llama y fotometría de llama
Si en vez de medir la luz que falta se mide la que **emiten** los átomos calientes, la técnica es de **emisión** (*emission*). Con la llama se miden sobre todo el sodio y el potasio; el manual de la FDA da sus líneas de emisión: 589,59 y 766,49 nm. El **fotómetro de llama** (*flame photometer*) es la versión sencilla: llama, un filtro que deja pasar el color del elemento y un detector. El manual de química de medicamentos de la FDA (ORA, volumen IV, sección 3) la cita entre las técnicas en uso. Es para sodio y potasio a niveles altos, no para trazas de paladio.

### ICP-OES: muchos elementos a la vez
En el **ICP-OES** (*inductively coupled plasma optical emission spectrometry*; la FDA lo llama ICP-AES) el plasma de argón excita casi todos los elementos a la vez, y una red de difracción reparte su luz. El método 4.4 de la FDA mide 22 elementos, cada uno en su línea (plomo a 220,35 nm, níquel a 231,60 nm).

Su punto débil: el plasma excita **todo**, y un elemento con muchas líneas, como el hierro, puede pisar la raya del analito. La FDA pide:

- **Barrido de longitudes de onda** de cada disolución, superpuesto al de un patrón: un pico ancho o doble da resultados altos; un pico donde se mide el fondo, bajos o incluso negativos.
- **Corrección entre elementos** (*inter-element correction*) cuando hay aluminio, calcio, hierro, cromo, cobre, manganeso, titanio o vanadio por encima de 20 mg/L.
- **Varias líneas por elemento** cuando se puede, que deben coincidir dentro del ±10 %.

### ICP-MS: contar iones por su masa
En el **ICP-MS** el plasma convierte los átomos en iones y un espectrómetro de masas cuadrupolar los cuenta según su relación masa/carga (m/z). Llega mucho más abajo, con sus propios engaños:

| Interferencia | Qué es | Ejemplo de la FDA |
|---|---|---|
| Isobárica elemental | Otro elemento con un isótopo de la misma masa | ¹¹⁴Cd y ¹¹⁴Sn |
| Doble carga | Un ion con dos cargas cae en la mitad de su masa | ¹⁵⁰Sm²⁺ y ¹⁵⁰Nd²⁺ caen en 75, la del arsénico |
| Poliatómica | Una molécula formada en el plasma con la misma masa | ⁴⁰Ar³⁵Cl en el ⁷⁵As, si la muestra lleva cloruro |
| De matriz | Mucho sólido disuelto apaga la señal y ensucia los conos | Se pide menos de un 0,2 % de sólidos |

**Ejercicio resuelto 4. ¿Por qué no se separan?** El ⁷⁵As pesa 74,9216 y el ⁴⁰Ar³⁵Cl, 74,9312. Diferencia: 0,0096 unidades de masa. Un cuadrupolo típico no separa masas que difieren menos de una unidad: los ve juntos. El método 4.7 usa una **celda de colisión** (*collision cell*) con helio y discriminación por energía para atenuar los iones poliatómicos.

**El paladio también estorba.** La tabla de interferencias del método 4.7 incluye ¹⁰⁴Pd²⁺ sobre el ⁵²Cr y ¹⁰⁶Pd²⁺ sobre el ⁵³Cr: un API con mucho paladio puede dar un cromo falsamente alto. Por eso el laboratorio necesita saber qué catalizadores usa tu proceso.

**Dos controles internos del ICP-MS.**

- **Patrón interno** (*internal standard*, ISTD): elementos que se añaden a todas las disoluciones (el método usa germanio, rodio, iridio y bismuto) para corregir la deriva y parte del efecto matriz. Si su señal difiere más de un 40 % de la del blanco de calibración, la FDA recomienda diluir.
- **Dos isótopos** del mismo elemento: si sus resultados difieren más de un 20 % (por encima del límite de cuantificación), uno tiene una interferencia.

**Ejercicio resuelto 5 (valores de ejemplo).** El patrón interno da 100000 cuentas en el blanco y 55000 en una muestra: 55000 / 100000 = 55 %, una caída del 45 %, más del 40 %: se diluye y se repite. En otra muestra, el cadmio sale 4,0 µg/L por un isótopo y 5,2 µg/L por el otro. Diferencia relativa: (5,2 − 4,0) / media de ambos, 4,6 = 26 %, más del 20 %: uno de los dos isótopos tiene una interferencia (en el 114, el estaño sería sospechoso).

### Cuál se usa para qué
Límites de cuantificación en disolución para el plomo en los métodos de la FDA (cada método con sus condiciones; sirven para ver el orden de magnitud):

| Técnica | Plomo en disolución | Elementos por medida | Cuándo encaja |
|---|---|---|---|
| Absorción atómica de llama | 1,0 mg/L | Uno | Metales a niveles altos, equipo barato y robusto |
| Horno de grafito | 2,7 µg/L | Uno | Trazas de pocos elementos |
| ICP-OES | Detección en 0,17 mg/L | Decenas | Varios elementos a niveles medios y altos |
| ICP-MS | 0,11 µg/kg | Decenas | Trazas de muchos elementos a la vez |
| Emisión o fotometría de llama | Sin dato verificado | Uno o dos | Sodio y potasio altos |

**Ejercicio resuelto 6. ¿Llega la llama al paladio?** Un API con 10 µg/g de paladio (valor de ejemplo): se digieren 0,500 g y se llevan a 50 mL.

1. Paladio en la muestra: 0,500 × 10 = 5,0 µg.
2. En la disolución: 5,0 µg / 0,050 L = **100 µg/L**, es decir, 0,10 mg/L.

Si la llama de un laboratorio cuantificara desde 1 mg/L (valor de ejemplo, del orden del plomo en la FDA), no llegaría: haría falta horno o ICP.

### Fluorescencia molecular: la luz que devuelve la molécula
Algunas moléculas absorben luz de onda corta, casi siempre ultravioleta, y devuelven luz de onda más larga: eso es la **fluorescencia** (*fluorescence*). El manual ORA de la FDA lo explica con los tintes de microscopía: excitados con ultravioleta, devuelven luz visible. Kuphaldt da un ejemplo cotidiano: la quinina de la tónica brilla bajo luz negra.

**Ejercicio resuelto 7 (valores de ejemplo).** Una molécula se excita a 350 nm y emite a 450 nm. Energía del fotón que entra: 1240 / 350 = 3,54 eV. Del que sale: 1240 / 450 = 2,76 eV. Sale menos energía de la que entró: por eso la emisión está a una onda más larga que la excitación.

**Por qué es tan sensible.** En el analizador de dióxido de azufre que describe Kuphaldt, la lámpara y el detector (un fotomultiplicador) no están en línea recta y las paredes no reflejan: el detector solo recibe luz si hay moléculas que fluorescen. Sin ellas, la señal es cero.

**Su límite: la selectividad.** Solo fluorescen algunas sustancias, y otra que fluoresca en el mismo color estorba: en el analizador de Kuphaldt, un filtro quita la del óxido nítrico, que emite en otro color, pero los hidrocarburos aromáticos hay que separarlos antes.

**Dónde la verás.** El manual ORA la cita como técnica (capítulos USP 853 y 1853 de la farmacopea estadounidense), como **detector de fluorescencia** de un HPLC y en la capa fina, cuyas placas llevan un aditivo fluorescente que las manchas apagan bajo luz ultravioleta.

### El paladio con ICH Q3D: lo que faltaba
Ya conoces la PDE oral (100 µg al día), las opciones 1 y 2a y el umbral del 30 %. Tres piezas más:

**De dónde sale el 100.** La ficha del paladio parte del menor nivel con efecto observado (*LOEL*) en un estudio de por vida con ratones, 1,2 mg por kg y día, para una persona de 50 kg, dividido por factores de seguridad que suman 12 × 10 × 1 × 1 × 5 (el último, 5, porque se usó un nivel con efecto):

> PDE = 1,2 × 50 / (12 × 10 × 1 × 1 × 5) = 60 / 600 = 0,1 mg/día = **100 µg/día**

Para la vía parenteral divide la oral entre 10 (el paladio se absorbe poco por la boca): 10 µg al día; para la inhalación, entre 100: 1 µg al día. Con la opción 1 dan 1 y 0,1 µg/g.

**La opción 2b.** Permite límites distintos en cada componente si la suma de lo que aporta cada uno, masa diaria por concentración, no pasa de la PDE. En el ejemplo de la guía (comprimido de 2,5 g al día con 0,200 g de principio activo), el paladio solo puede venir del principio activo, así que su límite puede llegar a 100 / 0,200 = **500 µg/g**.

**La opción 3** mide el producto terminado frente a la PDE dividida entre su dosis diaria.

**Ejercicio resuelto 8. El ejemplo real de la guía.** En su evaluación de riesgos ilustrativa, el principio activo tiene 20 µg/g de paladio medido. Aporte diario: 0,200 g × 20 µg/g = **4 µg**, el 4 % de la PDE, muy por debajo del umbral de control de 30 µg: no hacen falta más controles.

Dos avisos de la guía: el ensayo debe ser **específico para cada elemento** (apartado 9), con procedimientos de farmacopea u otros adecuados; y si cambian la ruta, las materias primas, el proceso o los **equipos**, la evaluación de riesgos se repite (apartado 10). Qué opción usa tu producto lo dice su especificación.

### Del número del equipo al resultado del lote
La FDA calcula así la concentración en la muestra:

> Concentración = (S × FD − blanco) × V / m

con S la concentración leída en la disolución, FD la dilución posterior, el blanco del método, V el volumen de la disolución y m la masa digerida.

**Ejercicio resuelto 9 (valores de ejemplo).** Se digieren 0,2500 g de API y se llevan a 50 mL. El ICP-MS lee 8,0 µg/L de paladio (ya corregido con el patrón interno), sin dilución posterior, y el blanco del método da 0,2 µg/L.

1. (8,0 − 0,2) × 0,050 L = 0,39 µg de paladio.
2. 0,39 µg / 0,2500 g = **1,56 µg/g**.
3. Con 0,200 g de API al día: 1,56 × 0,200 = 0,31 µg al día, el 0,31 % de la PDE oral.

Lo que queda entre el límite de detección y el de cuantificación, la FDA lo informa como traza, no como un número firme.

### Lo que te toca a ti
Ninguna técnica sabe de dónde viene el metal. Los cuidados de la muestra están en «Otras técnicas a fondo» y en «Muestreo en planta a fondo: tomar una muestra que diga la verdad del lote». Además: anota lo raro de la filtración del catalizador (filtrado gris, cartucho cambiado), que ayuda a explicar un paladio alto, y avisa si cambia algo del equipo o del proceso, porque Q3D obliga a revisar la evaluación de riesgos.

Los números de esta lección son de los métodos de la FDA o valores de ejemplo y sirven para entender. En planta manda siempre el procedimiento vigente (SOP): la técnica, el límite y la toma de muestra de tu producto son los de su especificación y tu hoja.
`,
  plant: `
Planta ficticia. En el autoclave HZ-720 se ha hidrogenado un lote del intermedio ficticio QB-40 con paladio sobre carbón. Tras filtrar el catalizador en el filtro de cartucho FC-725, cristalizar en el reactor R-740, centrifugar en la CF-745 y secar en el secadero SD-750, sale el API ficticio LP-910. Todos los valores son de ejemplo.

En la filtración, Marta, la operadora, anotó que el filtrado salió algo gris los primeros minutos y que la presión diferencial del FC-725 bajó de golpe. Avisó, se cambió el cartucho y lo dejó escrito.

El laboratorio digiere 0,2500 g del LP-910 seco y lo lleva a 50 mL. El ICP-MS da 11,2 µg/g de paladio. La especificación interna del LP-910 pide como máximo 10 µg/g: fuera de especificación.

La analista revisa antes de concluir: el patrón interno está dentro del margen, el blanco es bajo, los dos isótopos del paladio coinciden y el material de referencia recupera bien. El resultado parece real. En la investigación, la anotación de Marta encaja: finos de catalizador pasaron mientras el cartucho fallaba. Además, el laboratorio avisa de otra cosa: con tanto paladio, el cromo del mismo análisis puede salir alto por los iones Pd²⁺ que caen en las masas 52 y 53, así que no lo informa sin revisar esa interferencia.

El lote se reprocesa según el procedimiento aprobado con una nueva filtración de pulido y recristalización, y el nuevo análisis da 2,1 µg/g. Sin la anotación del gris, la causa habría costado mucho más de encontrar.
`,
  batchRecord: `
En la hoja de producción (*batch record*) no verás espectros, pero sí lo que hace que el análisis de metales sea fiable:

- **Catalizador**: código, lote y cantidad cargada (en húmedo y en seco), firmada y verificada.
- **Filtración del catalizador**: filtro y número de cartucho, presión diferencial al inicio y al final, aspecto del filtrado (transparente o gris) y cambios de cartucho, con hora.
- **Muestra para metales**: punto de muestreo, envase y utensilio indicados por el procedimiento (sin acero ni vidrio si así lo dice), cantidad, hora, firma y etiqueta completa.
- **Resultado del laboratorio**: el valor con su unidad (por ejemplo 1,6 µg/g de Pd), no «cumple», y el límite de la especificación.
- **Equipos**: código del equipo usado, sobre todo si es distinto del habitual, porque los equipos son una fuente de impurezas elementales.
- **Incidencias**: filtrado gris, cartucho roto, contacto de la muestra con metal, envase abierto, y el aviso al responsable de turno.
- **Cambios**: cualquier cambio de proveedor, de catalizador o de equipo pasa por control de cambios antes de aplicarse.
`,
  terms: [
    { es: "Atomización", en: "Atomization", def: "Paso que convierte la muestra disuelta en átomos libres en estado gaseoso, en una llama, un horno de grafito o un plasma." },
    { es: "Absorción atómica de llama", en: "Flame atomic absorption spectrometry (FAAS)", def: "Técnica que mide cuánta luz de una lámpara del propio elemento absorben sus átomos dentro de una llama; mide un elemento cada vez." },
    { es: "Lámpara de cátodo hueco", en: "Hollow cathode lamp", def: "Fuente de luz que emite las rayas de un elemento concreto; hay una para cada elemento que se mide por absorción atómica." },
    { es: "Horno de grafito", en: "Graphite furnace (GFAAS)", def: "Tubo de grafito que seca, calcina y atomiza unos microlitros de muestra por pasos; llega a picogramos." },
    { es: "Modificador de matriz", en: "Matrix modifier", def: "Reactivo que se añade a la gota en el horno de grafito para que el analito no se pierda antes de la atomización." },
    { es: "Corrección de fondo", en: "Background correction", def: "Forma de restar la absorción o la emisión no específica de la muestra para quedarse solo con la del elemento; en el horno, a menudo por efecto Zeeman." },
    { es: "Concentración característica", en: "Characteristic concentration", def: "Concentración que da una absorbancia de 0,0044, es decir, que absorbe el 1 % de la luz; mide la sensibilidad de la absorción atómica." },
    { es: "Vapor frío", en: "Cold vapour (CVAAS)", def: "Absorción atómica del mercurio, que se reduce a metal y se lleva como vapor a la celda sin llama; se lee a 253,7 nm." },
    { es: "Fotometría de llama", en: "Flame photometry", def: "Medida de la luz que emiten en una llama elementos fáciles de excitar, como el sodio y el potasio." },
    { es: "Interferencia espectral", en: "Spectral interference", def: "Señal de otro elemento o molécula que cae en la misma raya o masa que el analito y falsea el resultado." },
    { es: "Interferencia poliatómica", en: "Polyatomic interference", def: "En ICP-MS, ion formado por varios átomos (como ArCl) con la misma masa nominal que el analito." },
    { es: "Patrón interno", en: "Internal standard (ISTD)", def: "Elemento que se añade a todas las disoluciones para corregir la deriva y parte del efecto matriz." },
    { es: "Fluorescencia", en: "Fluorescence", def: "Emisión de luz de onda más larga por una sustancia que ha absorbido luz de onda más corta, normalmente ultravioleta." },
    { es: "Opción 2b de Q3D", en: "Q3D Option 2b", def: "Forma de fijar límites distintos de un elemento en cada componente, siempre que la suma de lo que aporta cada uno al día no pase de la PDE." },
  ],
  quiz: [
    {
      kind: "number",
      q: "En absorción atómica, la concentración característica es la que da una absorbancia de 0,0044. ¿Qué porcentaje de la luz absorbe la muestra en ese punto? (T = 10 elevado a menos A)",
      answer: 1.0,
      tolerance: 0.05,
      unit: "%",
      explain: "T = 10 elevado a −0,0044 = 0,990: pasa el 99,0 % de la luz y se absorbe el 1,0 %.",
    },
    {
      kind: "choice",
      q: "El laboratorio tiene que medir trazas de paladio, níquel, plomo, arsénico, cadmio y mercurio en el mismo API, todos a niveles muy bajos. ¿Qué técnica encaja mejor?",
      options: [
        "Absorción atómica de llama, porque cada lámpara mide su elemento",
        "ICP-MS, que mide muchos elementos a la vez y llega a trazas",
        "Fotometría de llama, porque ve el color propio de cada metal",
        "Fluorescencia molecular, porque es la técnica más sensible",
      ],
      answer: 1,
      explain: "El ICP-MS mide decenas de elementos por medida y tiene los límites más bajos de los métodos de la FDA. La llama mide un elemento cada vez y no llega a trazas; la fotometría de llama es para sodio y potasio.",
    },
    {
      kind: "number",
      q: "Valores de ejemplo: en un horno de grafito se inyectan 20 µL de una disolución con 8 µg/L de plomo. ¿Cuántos picogramos de plomo entran en el tubo? (1 µg = 1000000 pg)",
      answer: 160,
      tolerance: 0.01,
      unit: "pg",
      explain: "20 µL = 0,000020 L; 0,000020 × 8 = 0,00016 µg = 160 pg.",
    },
    {
      kind: "choice",
      q: "En el horno de grafito, una muestra muy salada da picos deformados y una recuperación del patrón añadido del 60 %. Según la FDA, ¿qué se hace?",
      options: [
        "Se informa el resultado y se corrige multiplicando por 100/60",
        "Se sube la temperatura de limpieza para que el pico salga mejor",
        "Se diluye la disolución y se repite, o se usan adiciones estándar",
        "Se cambia la lámpara de cátodo hueco por la de otro elemento",
      ],
      answer: 2,
      explain: "Es una interferencia de matriz: las sales impiden formar átomos libres. La práctica habitual de la FDA es diluir y repetir o usar adiciones estándar.",
    },
    {
      kind: "number",
      q: "ICH Q3D da al paladio una PDE parenteral de 10 µg al día. Un inyectable ficticio se administra a razón de 2 g de producto al día como máximo. Con la opción 2a, ¿qué concentración máxima de paladio se permite?",
      answer: 5,
      tolerance: 0.01,
      unit: "µg/g",
      explain: "Concentración = PDE / dosis diaria = 10 / 2 = 5 µg/g.",
    },
    {
      kind: "number",
      q: "Opción 2b de ICH Q3D (valores de ejemplo): un comprimido lleva 0,250 g de API al día y el paladio solo puede venir del API. Con una PDE oral de 100 µg al día, ¿hasta qué concentración de paladio podría llegar el API?",
      answer: 400,
      tolerance: 0.01,
      unit: "µg/g",
      explain: "Toda la PDE puede venir del API: 100 / 0,250 = 400 µg/g. El límite real lo fija la especificación del producto.",
    },
    {
      kind: "choice",
      q: "En un ICP-MS, el arsénico (masa 75) sale alto en una muestra con mucho ácido clorhídrico. ¿Cuál es la explicación más probable?",
      options: [
        "El ion poliatómico ⁴⁰Ar³⁵Cl, que tiene la misma masa nominal que el ⁷⁵As",
        "El cloro absorbe la luz de la lámpara de arsénico dentro del plasma",
        "El ácido clorhídrico aporta arsénico porque siempre está contaminado",
        "El patrón interno se ha evaporado durante la digestión con microondas",
      ],
      answer: 0,
      explain: "El argón del plasma y el cloro de la muestra forman ⁴⁰Ar³⁵Cl, de masa 74,9312, que el cuadrupolo no separa del ⁷⁵As (74,9216). Se combate con la celda de colisión de helio.",
    },
    {
      kind: "number",
      q: "Valores de ejemplo: se digieren 0,5000 g de API y se llevan a 50 mL (0,050 L). El ICP-MS lee 6,0 µg/L de paladio y el blanco del método 0,4 µg/L, sin dilución posterior. ¿Cuántos µg/g de paladio tiene el API?",
      answer: 0.56,
      tolerance: 0.02,
      unit: "µg/g",
      explain: "(6,0 − 0,4) × 0,050 = 0,28 µg; 0,28 / 0,5000 = 0,56 µg/g.",
    },
    {
      kind: "choice",
      q: "¿Por qué un fluorímetro puede detectar cantidades muy pequeñas de una sustancia que fluoresce?",
      options: [
        "Porque mide la luz que falta, como el UV, pero con una cubeta más larga",
        "Porque calienta la muestra hasta romperla en átomos que brillan solos",
        "Porque usa una lámpara del propio elemento que nadie más absorbe",
        "Porque el detector no ve la lámpara: sin fluorescencia, la señal es cero",
      ],
      answer: 3,
      explain: "La lámpara y el detector no están en línea recta; el detector solo recibe luz si la sustancia fluoresce. No hay que buscar una pequeña diferencia entre dos señales grandes.",
    },
    {
      kind: "choice",
      q: "Durante la filtración del catalizador de paladio ves el filtrado gris unos minutos y luego vuelve a salir transparente. ¿Qué haces?",
      options: [
        "Nada: si ya sale transparente, el paladio queda retenido",
        "Lo anoto con la hora y aviso, aunque luego salga transparente",
        "Tomo yo la muestra de metales con una espátula de acero limpia",
        "Lo dejo pasar y confío en que el ICP del final lo detectará",
      ],
      answer: 1,
      explain: "El gris indica finos de catalizador que han pasado. Se anota y se avisa: ayuda a explicar un paladio alto y permite actuar a tiempo. La muestra se toma con el utensilio que diga el procedimiento, no con acero.",
    },
  ],
};
