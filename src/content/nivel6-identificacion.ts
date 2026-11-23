import type { Lesson } from "./types";

export const identificacionQuimicaAFondo: Lesson = {
  slug: "identificacion-quimica-a-fondo",
  level: 8,
  order: 2.5,
  title: "Identificar sustancias por sus reacciones a fondo",
  titleEn: "Identifying substances by their reactions in depth",
  minutes: 38,
  summary:
    "Cómo una reacción que se ve (un precipitado, un color, un gas, una llama) dice qué hay en una muestra; el ensayo en blanco y el límite de detección; los iones que reconoce el laboratorio, con el cloruro del agua de lavado de una torta como ejemplo de planta; el análisis elemental de carbono, hidrógeno, nitrógeno y halógenos con sus cuentas; los derivados y su punto de fusión; y por qué hoy la identidad de un API se confirma sobre todo por infrarrojo y HPLC.",
  body: `
En «Espectroscopia a fondo: lo que la luz cuenta de una molécula (UV-Vis e infrarrojo)» viste cómo el laboratorio confirma con un espectro que el saco que llega es lo que dice la etiqueta. Antes de que existieran esos equipos, los químicos identificaban las sustancias con tubos de ensayo, reactivos y los ojos. Esas reacciones siguen vivas en las farmacopeas, en los métodos oficiales del BOE y, a veces, en tu planta. Aquí verás cómo funcionan, cómo se calcula un análisis de elementos y por qué hoy mandan el infrarrojo y la cromatografía.

### Dos preguntas distintas: qué es y cuánto hay
El laboratorio se hace dos preguntas sobre una muestra:

- **Análisis cualitativo** (*qualitative analysis*): ¿qué hay? La respuesta es «sí» o «no», «es esto» o «no lo es».
- **Análisis cuantitativo** (*quantitative analysis*): ¿cuánto hay? La respuesta es un número con su unidad, como la riqueza del 99,5 % o el 0,3 % de agua.

Las valoraciones y la gravimetría del nivel 6 contestan la segunda; esta lección, la primera. En los métodos oficiales del Boletín Oficial del Estado (BOE), un ensayo cualitativo se expresa como «Positivo o negativo».

### La reacción de identificación, desde cero
Una **reacción de identificación** (*identification reaction*) da una señal visible que solo, o casi solo, produce la sustancia buscada. Las señales clásicas son cuatro:

| Señal | Qué ves | Ejemplo de esta lección |
|---|---|---|
| Precipitado (*precipitate*) | Aparece un sólido que enturbia el líquido | Cloruro con nitrato de plata |
| Color (*colour change*) | El líquido cambia de color | Almidón con yodo: azul negro |
| Gas (*gas evolution*) | Se desprende un gas que se detecta | Amoníaco que vuelve azul un papel indicador |
| Llama (*flame colour*) | La llama se tiñe de un color | Cobre con cloro: verde |

El reactivo es una llave: si su cerradura está en la muestra, «abre» con una señal. Tres ideas deciden si una prueba vale:

- **Selectividad** (*selectivity*). Otras sustancias pueden dar una señal parecida. Por eso los métodos fijan las condiciones: el ácido que se añade, la temperatura, el orden de los reactivos.
- **Límite de detección** (*limit of detection*). Por debajo de cierta cantidad la señal no se ve. El método oficial español que reconoce aceite de sésamo en otros aceites por una reacción de color da el suyo: el 0,25 % en mezcla con aceites de oliva y soja. Por debajo, «negativo» no quiere decir «cero».
- **Comparación**. El ojo engaña. Los métodos comparan con un **ensayo en blanco** (*blank test*), que repite todo sin muestra, y a veces con un **patrón** (*reference*) que sí contiene la sustancia.

**Por qué el blanco.** El reactivo puede traer de por sí un poco de lo que buscas. El método oficial español de jabones en aceite de oliva detecta cloruro con nitrato de plata y pide hacer el ensayo en blanco con el mismo ácido clorhídrico usado, comparar la turbidez de los dos tubos y añade: «Ligeras diferencias no deben interpretarse positivamente». En la identificación de magnesio del mismo método, si el blanco da positivo hay que preparar ácido nuevo y repetir. Un blanco que sale positivo no se ignora: invalida el ensayo.

### Reconocer iones en disolución
Un **ion** (*ion*) es un átomo o grupo de átomos con carga eléctrica («Electrones, orbitales y tabla periódica a fondo: por qué cada elemento reacciona como reacciona»). Una sal disuelta se separa en iones: la sal común da sodio (Na⁺) y cloruro (Cl⁻).

| Ion | Reactivo | Señal | De dónde sale aquí |
|---|---|---|---|
| Cloruro, Cl⁻ | Nitrato de plata, en medio ácido nítrico | Precipitado blanco y coposo de cloruro de plata, o turbidez si hay poco | Método oficial de jabones en aceite (BOE, 1977) |
| Sulfato, SO₄²⁻ | Cloruro de bario | Sólido blanco de sulfato de bario | «Gravimetría a fondo: medir pesando, cenizas y residuos» |
| Hierro(III), Fe³⁺ | Tiocianato | Color marrón rojizo | Indicador de la valoración de Volhard, en «Valoraciones redox, complexométricas y de precipitación a fondo» |
| Amonio, NH₄⁺ | Sosa y calor | Se libera amoníaco, que vuelve azul el papel de tornasol rojo | Método Kjeldahl (BOE, 1979) |
| Magnesio, Mg²⁺ | Quinalizarina y sosa | Precipitado fino azul; sin magnesio queda violeta azulado | Método oficial de jabones (BOE, 1977) |
| Calcio, Ca²⁺ | Reactivo de osazona | Turbidez con precipitado amarillo | Método oficial de jabones (BOE, 1977) |

Fíjate en la primera fila: la reacción dice «hay cloruro», no de dónde viene; igual da el de la sal común que el de un clorhidrato. Una reacción de iones identifica un trozo, no la molécula entera.

**Ejercicio resuelto 1. El agua de lavado de una torta** (valores de ejemplo). Los métodos oficiales usan esta prueba para saber cuándo un sólido está bien lavado: «lavar el precipitado con agua destilada hasta que el filtrado no dé precipitado con nitrato de plata». En planta pasa igual con una torta en la centrífuga o en el filtro Nutsche: las aguas madres llevan sal y el lavado la arrastra.

Datos: el líquido retenido tiene 30 000 mg/L de cloruro; cada lavado divide la concentración entre 5; el ensayo no ve turbidez por debajo de 10 mg/L. ¿Cuántos lavados hacen falta?

1. Tras el lavado 1: 30 000 / 5 = 6000 mg/L.
2. Tras el 2: 1200 mg/L. Tras el 3: 240 mg/L. Tras el 4: 48 mg/L. Todavía se ve.
3. Tras el 5: 9,6 mg/L, por debajo de 10.

Respuesta: **5 lavados**. «Sin turbidez» quiere decir «por debajo de lo que el ensayo ve», no «sin cloruro». Lavados y prueba los fija tu procedimiento.

### Ensayos a la llama
En «Electrones, orbitales y tabla periódica a fondo» viste por qué un átomo caliente emite colores propios: sus electrones saltan entre escalones fijos. El ensayo a la llama (*flame test*) lo usa de la forma más sencilla: se lleva un poco de muestra a la llama de un mechero y se mira el color. El sodio da un amarillo muy intenso, el de su línea de 589,59 nm que viste en esa lección.

**El ensayo de Beilstein** (*Beilstein test*). Un método oficial español busca así cloro de disolventes clorados en un aceite: se calienta un alambre de cobre pulido hasta que la llama no salga verde, se moja en la muestra y se vuelve a la llama. Si se tiñe de «un color verde definido», hay cloro: positivo. Dice «hay halógeno», no cuál ni cuánto.

**Los límites de la llama.** El color se juzga a ojo, y el amarillo intenso del sodio, que está en casi todo, tapa otros colores; los libros de texto miran a través de un vidrio azul de cobalto para filtrarlo. Hoy la llama se ha convertido en instrumento: la absorción atómica y el ICP (plasma de acoplamiento inductivo) miden la luz de cada elemento con un detector (lo tienes en «Otras técnicas a fondo: difracción de rayos X, RMN, espectrometría de masas e ICP»).

### Análisis elemental: qué elementos tiene una molécula
El **análisis elemental** (*elemental analysis*) responde: ¿qué porcentaje de la masa es carbono, hidrógeno, nitrógeno o halógeno? En «Otras técnicas a fondo» viste cómo se calculan los valores teóricos del paracetamol. Aquí verás cómo se obtienen los medidos.

**Carbono e hidrógeno: quemar y pesar lo que sale.** Se quema una muestra pesada con oxígeno en exceso. Todo el carbono acaba como dióxido de carbono (CO₂) y todo el hidrógeno, como agua (H₂O). Si se recogen y se miden, sabes cuánto carbono e hidrógeno había. Los analizadores CHN actuales lo hacen solos: queman unos miligramos, separan los gases y los miden.

Las cuentas usan las masas atómicas del nivel 1: C 12,011; H 1,008; N 14,007; O 15,999. Así, CO₂ = 44,009 g/mol y H₂O = 18,015 g/mol.

- En 44,009 g de CO₂ hay 12,011 g de carbono: fracción 12,011 / 44,009.
- En 18,015 g de agua hay 2 × 1,008 = 2,016 g de hidrógeno: fracción 2,016 / 18,015.

**Ejercicio resuelto 2. Del gas al porcentaje** (valores de ejemplo). Se queman 2,000 mg de un sólido blanco y se recogen 5,210 mg de CO₂ y 1,200 mg de agua.

1. Carbono: 5,210 × 12,011 / 44,009 = 1,422 mg. Porcentaje: 1,422 / 2,000 × 100 = **71,10 %**.
2. Hidrógeno: 1,200 × 2,016 / 18,015 = 0,1343 mg. Porcentaje: 0,1343 / 2,000 × 100 = **6,71 %**.

**Nitrógeno: el método Kjeldahl** (*Kjeldahl method*). Lo usan varios métodos oficiales españoles de análisis de alimentos. Sus pasos, según el BOE:

1. **Digestión.** La muestra se calienta con ácido sulfúrico concentrado y un catalizador hasta que el líquido queda transparente. El nitrógeno orgánico pasa a amonio.
2. **Destilación.** Se añade sosa en exceso: el amonio se convierte en amoníaco, que se destila y se recoge en ácido (bórico en el método de la leche). Otro método comprueba con papel de tornasol que ya no sale amoníaco.
3. **Valoración.** El amoníaco recogido se valora con ácido clorhídrico: un mol de ácido por mol de nitrógeno. Y se hace un ensayo en blanco con agua en lugar de muestra.

> % N = (V − V blanco) × c × 14,007 / masa de muestra (mg) × 100

con V en mL, c en mol/L y la masa en mg; mL × mol/L dan milimoles, y por 14,007 salen miligramos de nitrógeno.

**Ejercicio resuelto 3. Kjeldahl** (valores de ejemplo). Se digieren 200,0 mg del mismo sólido. Se gastan 14,75 mL de HCl 0,1000 mol/L; el blanco gasta 0,05 mL.

1. Volumen neto: 14,75 − 0,05 = 14,70 mL.
2. Nitrógeno: 14,70 × 0,1000 = 1,470 mmol, es decir, 1,470 × 14,007 = 20,59 mg.
3. Porcentaje: 20,59 / 200,0 × 100 = **10,30 %**.

**Ejercicio resuelto 4. La fórmula empírica.** Con C 71,10 %, H 6,71 % y N 10,36 % (valor del analizador CHN, valor de ejemplo), lo que falta hasta 100 se atribuye al oxígeno: 100 − 71,10 − 6,71 − 10,36 = 11,83 %. Se toman 100 g y se pasa cada masa a moles:

| Elemento | Moles en 100 g | Dividido entre 0,7394 |
|---|---|---|
| C | 71,10 / 12,011 = 5,920 | 8,01 |
| H | 6,71 / 1,008 = 6,657 | 9,00 |
| N | 10,36 / 14,007 = 0,7396 | 1,00 |
| O | 11,83 / 15,999 = 0,7394 | 1,00 |

Fórmula empírica: **C₈H₉NO**, la de la acetanilida (135,17 g/mol), cuyos valores teóricos son C 71,09 %, H 6,71 % y N 10,36 %. El Kjeldahl dio 10,30 %: cerca, pero el resultado se compara siempre con el criterio de aceptación del método.

**Halógenos.** El ensayo de Beilstein dice si hay halógeno. Para saber cuánto, el halógeno unido al carbono hay que pasarlo antes a ion, y el cloruro se valora con nitrato de plata como en «Valoraciones redox, complexométricas y de precipitación a fondo». En una sal clorhidrato el cloruro ya es ion y se valora directamente.

Para demostrar la estructura de una molécula nueva, la guía de la Agencia Europea de Medicamentos (EMA) sobre la química de los principios activos cita el análisis elemental con valores teóricos y las reacciones químicas características. Un porcentaje alejado del teórico delata agua, disolvente o una sal mal formada.

### Grupos funcionales: reacciones que reconocen una familia
En «Grupos funcionales a fondo: cómo se comporta cada familia de compuestos en planta» viste las reacciones de cada familia. Algunas la reconocen: un reactivo que solo reacciona con un grupo y da color o precipitado. Ejemplos de los métodos oficiales españoles:

- **Almidón con yodo.** «El almidón reacciona con el iodo dando coloración azul»; en presencia de almidón aparece un azul negro.
- **Ninhidrina** (*ninhydrin*). Con aminoácidos como la prolina da un color que el método oficial mide a 517 nm frente a una curva de patrones: la reacción de color convertida en análisis cuantitativo.
- **Reacción de Pavolini.** El aceite de sésamo da un color azul oscuro con furfurol y ácido sulfúrico; es la del límite de detección del 0,25 %.

Un ensayo de grupo funcional da el «apellido» de la molécula; miles de moléculas lo comparten, y para el nombre hacen falta más pruebas.

### Derivados y su punto de fusión
Antes de los espectros, para dar nombre a un compuesto se preparaba un **derivado** (*derivative*): un sólido nuevo, hecho con una reacción conocida, cuyo punto de fusión se compara con las tablas.

**¿Por qué no el punto de ebullición?** Porque compuestos distintos hierven casi a la vez. Las tres toluidinas (orto, meta y para), aminas aromáticas isómeras, hierven según el NIST (instituto de metrología de Estados Unidos) a 473, 476 y 474 K, es decir, entre 200 y 203 °C, con incertidumbres de 1 a 3 grados: el punto de ebullición no las distingue. Y muchas aminas son líquidas a temperatura ambiente: la anilina funde a 267,0 K (−6 °C), así que no hay punto de fusión que medir en el laboratorio.

**La solución: hacer un sólido.** Si la anilina se acetila (la misma reacción que forma el paracetamol en «Grupos funcionales a fondo»), sale la acetanilida, un sólido que, según el NIST, funde a 388 ± 2 K, unos 115 °C. El punto de fusión de un sólido cristalino es estrecho y fácil de medir, como viste en «Punto de fusión y análisis térmico a fondo».

**Ejercicio resuelto 5. Cuánto derivado sale** (valores de ejemplo). Se acetilan 0,931 g de anilina (C₆H₇N, 93,13 g/mol); un mol de anilina da un mol de acetanilida (135,17 g/mol).

1. Moles de anilina: 0,931 / 93,13 = 0,01000 mol, es decir, 10,00 mmol.
2. Acetanilida teórica: 10,00 mmol × 135,17 = 1352 mg = 1,352 g.
3. Se recogen 1,10 g tras recristalizar y secar. Rendimiento: 1,10 / 1,352 × 100 = **81,4 %**.

**El punto de fusión mixto** (*mixed melting point*). Sale de lo que viste en «Punto de fusión y análisis térmico a fondo»: una impureza baja el inicio de fusión y ensancha el intervalo. Se mide la mezcla de la muestra con una sustancia auténtica:

- Si son la misma sustancia, la mezcla no tiene impureza y funde igual que cada una por separado.
- Si son distintas, cada una ensucia a la otra: la mezcla funde antes y en más grados, aunque las dos por separado fundan a la misma temperatura.

**Ejercicio resuelto 6** (valores de ejemplo). Tu muestra funde a 113–115 °C; mezclada con acetanilida auténtica, igual; mezclada con otro sólido que también funde hacia 114 °C, a 96–106 °C. Es acetanilida.

### Por qué hoy mandan el infrarrojo y el HPLC
La guía ICH Q6A (Consejo Internacional de Armonización, *International Council for Harmonisation*), que fija qué ensayos lleva la especificación de un principio activo, pide que la identificación sea **específica** (*specific*): que distinga entre compuestos de estructura parecida que puedan estar presentes. Su ejemplo es el infrarrojo, y añade que un tiempo de retención cromatográfico solo no se considera específico, pero sí dos cromatografías de principio distinto o una combinación en un solo ensayo, como la cromatografía de líquidos de alta resolución (HPLC) con detector de diodos o con masas. El detalle está en «Espectroscopia a fondo» y en «HPLC a fondo: el equipo que da la riqueza y las impurezas de tu lote».

| | Reacción clásica | Infrarrojo o HPLC |
|---|---|---|
| Qué reconoce | Un ion, un grupo o un elemento | La molécula entera, o una huella característica |
| Isómeros y compuestos parecidos | Casi nunca los distingue | El infrarrojo distingue compuestos de estructura parecida |
| Cómo se lee | A ojo: turbidez, color | Espectro o cromatograma guardado en el sistema de datos |
| Cantidad y tiempo | Reactivos, derivados, recristalización | Miligramos y minutos |

Las reacciones clásicas no han desaparecido:

- **Las sales.** Q6A dice que, si el principio activo es una sal, la identificación debe ser específica para cada uno de sus iones, aunque basta un ensayo específico para la sal en sí. El cloruro de un clorhidrato se puede confirmar con nitrato de plata.
- **Las farmacopeas.** Q6A pide usar los procedimientos de farmacopea cuando sean adecuados. La Farmacopea Europea, de pago, reúne estas reacciones en un capítulo general de identificación de iones y grupos funcionales (el 2.3.1, según fuentes secundarias). Los ejercicios de formación de la FDA (*Food and Drug Administration*, la agencia del medicamento de Estados Unidos) muestran cómo se combinan hoy: el paracetamol de la Farmacopea de Estados Unidos se identifica con infrarrojo, ultravioleta y cromatografía en capa fina, y además se le mide el intervalo de fusión.
- **Los enantiómeros.** Q6A pide que la identidad de un principio activo de un solo enantiómero distinga los dos enantiómeros y la mezcla racémica. Ni una reacción de tubo ni el IR normal lo hacen; hace falta un método quiral («Isómeros y quiralidad a fondo: moléculas gemelas que no hacen lo mismo»).

### Lo que te toca a ti
- **Identidad de lo que entra.** ICH Q7 (7.30) pide al menos un ensayo de identidad de cada lote de material. Para materiales peligrosos o muy tóxicos que no se analizan en planta (7.32), la identidad se apoya en el certificado del proveedor y en el examen visual de envases, etiquetas y números de lote: ese examen muchas veces lo haces tú al recibir o cargar.
- **Nunca huelas para identificar.** El Kjeldahl detecta el amoníaco con papel de tornasol, no con la nariz.
- **Los reactivos también son peligrosos.** En la tabla de clasificación del Reglamento CLP (clasificación, etiquetado y envasado) de 2008, el nitrato de plata lleva H314 («Provoca quemaduras graves en la piel y lesiones oculares graves») y H410 («Muy tóxico para los organismos acuáticos, con efectos nocivos duraderos»); el cloruro de bario, H301 («Tóxico en caso de ingestión») y H332 («Nocivo en caso de inhalación»). Manda la ficha de datos de seguridad (FDS) del proveedor. Sus restos van a disoluciones acuosas con metales, nunca al desagüe («El laboratorio a fondo: material, equipos y trabajo seguro»).

En planta manda siempre el procedimiento vigente (SOP): qué ensayo se hace, con qué reactivo, cuántos lavados y qué se considera positivo los fija tu planta.
`,
  plant: `
Turno de tarde en la centrífuga C-305. Estás aislando el intermedio ficticio TQ-40, que precipita en agua con mucha sal. La hoja dice: *«Lavar la torta con agua purificada en porciones de 150 L. Tras el 4.º lavado, tomar muestra del agua de lavado en el punto de muestreo SP-305 y entregar al laboratorio para ensayo de cloruros. Continuar lavando hasta resultado conforme (máximo 7 lavados).»*

Tras el cuarto lavado tomas la muestra en un frasco limpio, etiquetado con lote, punto, hora y número de lavado. Mientras esperas, la centrífuga sigue girando como indica la hoja.

El laboratorio llama: con nitrato de plata, la muestra da una turbidez clara frente al blanco. No conforme. Haces el quinto lavado y entregas otra muestra: turbidez débil, todavía distinta del blanco. Tras el sexto, sin turbidez apreciable frente al blanco: conforme.

Un compañero comenta que, con cuatro lavados, «la sal ya estaba casi fuera» y que el sexto sobraba. Le recuerdas que el ensayo dice si queda cloruro por encima de lo que se ve, no si queda «casi nada», y que el número de lavados lo decide el resultado, como pide la hoja.

Anotas los tres resultados, con sus horas, el volumen real de cada lavado y el total de lavados. Si el séptimo no hubiera bastado, habrías parado y avisado a la jefa de turno: lo que sigue lo decide calidad.
`,
  batchRecord: `
En la hoja de producción (*batch record*) los ensayos de identificación y de control aparecen así:

- **Recepción y carga de materiales**: código, lote y estado (liberado por calidad) de cada material; para los que se aceptan con certificado del proveedor, casilla de examen visual de envase, etiqueta y número de lote, con firma.
- **Ensayos de control en planta**, si la hoja los pide (por ejemplo, cloruros en el agua de lavado): punto de muestreo, hora, número de lavado, resultado tal cual lo da el laboratorio o el ensayo («turbidez frente al blanco», «sin turbidez»), quién lo hizo y quién lo verificó.
- **Repeticiones**: cada lavado y cada resultado, también los no conformes, con su hora; nunca solo el último.
- **Límite de repeticiones**: si la hoja fija un máximo (por ejemplo, 7 lavados), qué se hizo al llegar a él y a quién se avisó.
- **Resultados del laboratorio** que liberan el paso o el lote (identidad, riqueza): número de análisis o referencia del certificado.
- **Incidencias**: un material con etiqueta que no coincide, un envase dañado, un resultado de identidad que no cumple; el material queda en cuarentena y no se carga.
`,
  terms: [
    { es: "Análisis cualitativo", en: "Qualitative analysis", def: "Análisis que responde qué hay en una muestra; su resultado es positivo o negativo." },
    { es: "Análisis cuantitativo", en: "Quantitative analysis", def: "Análisis que responde cuánto hay; su resultado es un número con unidad." },
    { es: "Reacción de identificación", en: "Identification reaction", def: "Reacción que da una señal visible (precipitado, color, gas o llama) con la sustancia buscada." },
    { es: "Precipitado", en: "Precipitate", def: "Sólido que se forma en un líquido al reaccionar dos sustancias disueltas, como el cloruro de plata." },
    { es: "Ensayo en blanco", en: "Blank test", def: "Repetición del ensayo sin muestra para ver lo que aportan los reactivos y comparar." },
    { es: "Límite de detección", en: "Limit of detection", def: "Cantidad más pequeña que un ensayo llega a ver; por debajo, el resultado sale negativo aunque haya algo." },
    { es: "Selectividad", en: "Selectivity", def: "Capacidad de un ensayo de responder a lo que se busca y no a otras sustancias presentes." },
    { es: "Ensayo a la llama", en: "Flame test", def: "Prueba que identifica elementos por el color que dan a una llama." },
    { es: "Ensayo de Beilstein", en: "Beilstein test", def: "Prueba con un alambre de cobre en la llama: un color verde indica halógeno en la muestra." },
    { es: "Análisis elemental", en: "Elemental analysis", def: "Medida del porcentaje en masa de carbono, hidrógeno, nitrógeno u otros elementos de una sustancia." },
    { es: "Método Kjeldahl", en: "Kjeldahl method", def: "Medida del nitrógeno por digestión con ácido sulfúrico, destilación del amoníaco y valoración." },
    { es: "Fórmula empírica", en: "Empirical formula", def: "Proporción más sencilla de números enteros entre los átomos de un compuesto, calculada a partir de sus porcentajes." },
    { es: "Derivado", en: "Derivative", def: "Compuesto sólido preparado a partir de la sustancia con una reacción conocida para medir su punto de fusión." },
    { es: "Punto de fusión mixto", en: "Mixed melting point", def: "Punto de fusión de la mezcla de la muestra con una sustancia auténtica; si baja y se ensancha, no son la misma." },
  ],
  quiz: [
    {
      kind: "choice",
      q: "Según ICH Q6A, ¿qué ensayo pone como ejemplo de identificación específica de un principio activo?",
      options: [
        "La espectroscopia infrarroja de la muestra frente al patrón",
        "Un único tiempo de retención en cromatografía de líquidos",
        "El color que da la muestra en la llama de un mechero",
        "Un precipitado blanco al añadir nitrato de plata",
      ],
      answer: 0,
      explain: "Q6A pone el infrarrojo como ejemplo y dice que un solo tiempo de retención no es específico; una reacción de iones solo reconoce un trozo de la molécula.",
    },
    {
      kind: "number",
      q: "Se queman 2,500 mg de una sustancia y se recogen 4,500 mg de CO₂. Con C = 12,011 y CO₂ = 44,009 g/mol, ¿qué porcentaje de carbono tiene?",
      answer: 49.13,
      tolerance: 0.01,
      unit: "% C",
      explain: "Carbono: 4,500 × 12,011 / 44,009 = 1,228 mg. Porcentaje: 1,228 / 2,500 × 100 = 49,13 %.",
    },
    {
      kind: "number",
      q: "Kjeldahl: se digieren 300,0 mg de muestra y el amoníaco gasta 16,20 mL de HCl 0,1000 mol/L; el blanco gasta 0,10 mL. Con N = 14,007, ¿qué porcentaje de nitrógeno tiene?",
      answer: 7.52,
      tolerance: 0.01,
      unit: "% N",
      explain: "Neto: 16,20 − 0,10 = 16,10 mL. Nitrógeno: 16,10 × 0,1000 × 14,007 = 22,55 mg. Porcentaje: 22,55 / 300,0 × 100 = 7,52 %.",
    },
    {
      kind: "number",
      q: "El agua retenida en una torta tiene 20 000 mg/L de cloruro y cada lavado deja la concentración en la cuarta parte. Si el ensayo con nitrato de plata solo es conforme por debajo de 50 mg/L, ¿cuántos lavados hacen falta como mínimo?",
      answer: 5,
      tolerance: 0.001,
      unit: "lavados",
      explain: "20000 × 0,25 da 5000; luego 1250, 312,5, 78,1 (cuatro lavados, aún por encima de 50) y 19,5 mg/L tras el quinto. Hacen falta 5 lavados.",
    },
    {
      kind: "number",
      q: "Se acetilan 1,862 g de anilina (93,13 g/mol) y se obtienen 2,30 g de acetanilida (135,17 g/mol). Un mol de anilina da un mol de acetanilida. ¿Cuál es el rendimiento?",
      answer: 85.1,
      tolerance: 0.01,
      unit: "%",
      explain: "1,862 / 93,13 = 0,01999 mol; teórico 0,01999 × 135,17 = 2,702 g. Rendimiento: 2,30 / 2,702 × 100 = 85,1 %.",
    },
    {
      kind: "choice",
      q: "Haces el ensayo de cloruros y el tubo del blanco, sin muestra, también se enturbia. ¿Qué significa?",
      options: [
        "Que la muestra tiene muchísimo cloruro y hay que diluirla",
        "Que el ensayo es positivo y se puede anotar como conforme",
        "Que los reactivos traen cloruro: el ensayo no vale y se repite",
        "Que la turbidez del blanco se puede ignorar porque no es muestra",
      ],
      answer: 2,
      explain: "El blanco mide lo que aportan los reactivos. Si da positivo, el ensayo no es válido: los métodos oficiales piden preparar reactivo nuevo y repetir.",
    },
    {
      kind: "choice",
      q: "El principio activo es un clorhidrato. ¿Por qué su especificación puede incluir una prueba de cloruro con nitrato de plata además del infrarrojo?",
      options: [
        "Porque el nitrato de plata distingue los dos enantiómeros",
        "Porque Q6A pide que la identidad de una sal cubra sus iones",
        "Porque el infrarrojo no sirve para ningún sólido cristalino",
        "Porque la prueba de cloruro da la riqueza exacta del lote",
      ],
      answer: 1,
      explain: "Según Q6A, si el principio activo es una sal, la identificación debe ser específica para cada ion, aunque basta un ensayo específico para la sal en sí.",
    },
    {
      kind: "choice",
      q: "Tu muestra funde a 113–115 °C. Mezclada al 50 % con una sustancia auténtica que también funde a 114 °C, la mezcla funde a 96–106 °C. ¿Qué concluyes?",
      options: [
        "Que son la misma sustancia, porque las dos funden a 114 °C",
        "Que el aparato está mal calibrado y hay que repetir la medida",
        "Que la muestra está húmeda y hay que secarla más tiempo",
        "Que no son la misma sustancia: cada una ensucia a la otra",
      ],
      answer: 3,
      explain: "Si fueran la misma, la mezcla fundiría igual. Una mezcla que funde antes y en más grados indica dos sustancias distintas: es el punto de fusión mixto.",
    },
    {
      kind: "choice",
      q: "En el ensayo de Beilstein la llama se tiñe de verde. ¿Qué te dice eso de la muestra?",
      options: [
        "Que la muestra es diclorometano puro y sin agua",
        "Que la muestra contiene sodio en gran cantidad",
        "Que contiene un halógeno, pero no cuál ni cuánto",
        "Que la muestra cumple la especificación de riqueza",
      ],
      answer: 2,
      explain: "El cobre con un halógeno tiñe la llama de verde. Es un ensayo cualitativo: dice que hay halógeno, no qué compuesto ni qué cantidad.",
    },
    {
      kind: "choice",
      q: "Para comprobar que el destilado de un Kjeldahl ya no lleva amoníaco, ¿cómo se hace?",
      options: [
        "Se huele el destilado con cuidado, abanicando con la mano",
        "Se mira si el destilado ha cambiado de color en el matraz",
        "Se toca una gota con el guante para notar si resbala",
        "Se comprueba con papel de tornasol, como indica el método",
      ],
      answer: 3,
      explain: "El método oficial usa papel de tornasol. Ningún producto se huele para identificarlo: es una exposición innecesaria.",
    },
  ],
};
