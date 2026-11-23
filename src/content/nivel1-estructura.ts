import type { Lesson } from "./types";
export const estructuraElectronicaAFondo: Lesson = {
  slug: "estructura-electronica-a-fondo",
  level: 1,
  order: 12.5,
  title: "Electrones, orbitales y tabla periódica a fondo: por qué cada elemento reacciona como reacciona",
  titleEn: "Electronic structure and the periodic table in depth",
  minutes: 40,
  summary:
    "Cómo los colores que emite cada elemento descubrieron los escalones de energía del átomo, qué son los orbitales y los números cuánticos, cómo se escribe una configuración electrónica con el diagrama de Moeller, Pauli y Hund, cómo se saca de ella la casilla de la tabla, qué dicen los números reales de energía de ionización y afinidad electrónica, por qué el sodio, el cloro y el paladio se comportan tan distinto y cómo el laboratorio aprovecha todo esto en la absorción atómica y el ICP.",
  body: `
En «Átomos y tabla periódica a fondo: de qué está hecho todo» viste los electrones repartidos en capas (2, 8, 8…) y tres tendencias sin números. Ese modelo no explica por qué el cromo o el paladio llenan sus electrones de forma rara, ni por qué el laboratorio reconoce el plomo por una luz de 283,3 nanómetros. Aquí verás el modelo de los químicos (orbitales, números cuánticos y configuraciones) con datos reales del NIST (*National Institute of Standards and Technology*, el instituto de metrología de Estados Unidos). El hilo: el sodio de la sosa, el cloro del ácido clorhídrico y el paladio del catalizador.

### Parte 1. La pista de la luz: espectros de emisión y de absorción
Un vapor de un elemento muy caliente, o con una descarga eléctrica, brilla, pero no con todos los colores como una bombilla: da unas pocas rayas concretas, su **espectro de emisión** (*emission spectrum*). El libro de instrumentación de Tony Kuphaldt (*Lessons in Industrial Instrumentation*) lo compara con una **huella dactilar**: no hay dos elementos con el mismo.

Si haces pasar luz blanca por ese vapor, a la salida faltan colores: rayas negras. Es el **espectro de absorción** (*absorption spectrum*), y las rayas que faltan están en las mismas longitudes de onda que las que el elemento emite, como un negativo fotográfico de la misma huella.

La luz viaja en paquetes de energía llamados **fotones** (*photons*). Cada fotón lleva una energía fija que depende de su color, es decir, de su **longitud de onda** (*wavelength*, λ: la distancia entre dos crestas de la onda, que en la luz visible se mide en nanómetros): E = h · c / λ, donde h es la constante de Planck y c la velocidad de la luz. Cuanto más corta es la onda, más energía lleva el fotón. Lo verás aplicado en el laboratorio en «Espectroscopia a fondo: lo que la luz cuenta de una molécula (UV-Vis e infrarrojo)». Si un átomo solo emite y absorbe ciertos colores, es que **sus electrones solo pueden tener ciertas energías**: saltan entre escalones fijos, y cada salto deja o toma un fotón con la energía justa. Es la **cuantización de la energía** (*energy quantization*).

**El electronvoltio** (*electronvolt*, eV) es la energía que gana un electrón al pasar por una diferencia de potencial de un voltio; el Real Decreto 2032/2009 de unidades legales acepta su uso con el Sistema Internacional. Con las constantes exactas de ese decreto (h, c, la carga elemental y el número de Avogadro) salen dos atajos:

> E (eV) = 1240 / λ (nm)  y  1 eV por átomo = 96,49 kJ/mol


### Parte 2. El modelo de Bohr: un átomo con escalones
En 1913 Niels Bohr propuso un modelo para el átomo de hidrógeno: el electrón solo puede estar en ciertos niveles, numerados n = 1, 2, 3…, cada uno con una energía fija. En su modelo la energía del nivel n es:

> Eₙ = −13,6 eV / n²

El signo menos indica que el electrón está atado al núcleo. En el nivel 1, el **estado fundamental** (*ground state*), está a −13,6 eV; en el 2, a −3,40 eV; en el 3, a −1,51 eV. El 13,6 es la energía de ionización del hidrógeno, que el NIST da como 13,598 eV.

**Ejercicio resuelto 1. La raya roja del hidrógeno.** Según Kuphaldt, el hidrógeno da cuatro rayas visibles (656, 486, 434 y 410 nm), todas de saltos que acaban en el nivel 2 (serie de Balmer); la roja, de 656 nm, es el salto del 3 al 2. ¿Lo predice Bohr?

1. Energía del salto: ΔE = 13,598 × (1/2² − 1/3²) = 13,598 × (0,2500 − 0,1111) = 1,889 eV.
2. Longitud de onda del fotón: λ = 1240 / 1,889 = 656,4 nm.

Frente a los 656 nm medidos. Con los saltos del 4, del 5 y del 6 al 2 salen 486,3, 434,2 y 410,3 nm: cuadran las cuatro. La regla: **el salto más pequeño da el fotón menos energético y la onda más larga**.

**Dónde falla Bohr.** Sirve para el hidrógeno, de un solo electrón, pero no para átomos con muchos electrones.

### Parte 3. Del escalón a la nube: los orbitales
La mecánica cuántica, con Louis de Broglie, Werner Heisenberg y Erwin Schrödinger, cambió la imagen del electrón:

- **Onda y partícula a la vez**, como la luz.
- **Principio de incertidumbre de Heisenberg** (*uncertainty principle*): no se puede conocer a la vez, con toda exactitud, dónde está un electrón y cómo se mueve. Adiós a las órbitas con recorrido fijo.
- **Probabilidad.** Se calcula dónde es más probable encontrarlo. Kuphaldt lo compara con una ciudad bajo la niebla: no hay un sitio exacto, pero sí zonas de niebla más densa.

Esa zona de alta probabilidad es un **orbital** (*orbital*), y admite como mucho **dos electrones**. Los s son esferas; los p, dos lóbulos opuestos; los d y f, formas más complicadas.

**La analogía del anfiteatro** (de Kuphaldt). El núcleo es el escenario y los electrones, espectadores que quieren sentarse cerca, donde tienen menos energía. Como no caben todos, se llenan gradas más altas: las gradas son los niveles; las filas, los subniveles; los asientos, los electrones.

### Parte 4. Los cuatro números cuánticos
Cada electrón de un átomo queda descrito por cuatro números, como una dirección postal: ciudad, calle, portal y piso.

| Número cuántico | Símbolo | Qué indica | Valores posibles |
|---|---|---|---|
| Principal (*principal quantum number*) | n | El nivel o capa: tamaño y energía principal | 1, 2, 3, 4… (capas K, L, M, N…) |
| Secundario o azimutal (*angular momentum quantum number*) | l | El subnivel y la forma del orbital | De 0 a n − 1: l = 0 es s, 1 es p, 2 es d, 3 es f |
| Magnético (*magnetic quantum number*) | mₗ | Cuántos orbitales hay en el subnivel y cómo se orientan | De −l a +l: 2l + 1 valores |
| De espín (*spin quantum number*) | mₛ | Un giro propio del electrón, en uno de dos sentidos | +½ o −½ |

De ahí salen las capacidades, que Kuphaldt resume en una fórmula: un subnivel admite 2 × (2l + 1) electrones.

| Subnivel | l | Orbitales (2l + 1) | Electrones como máximo |
|---|---|---|---|
| s | 0 | 1 | 2 |
| p | 1 | 3 | 6 |
| d | 2 | 5 | 10 |
| f | 3 | 7 | 14 |

Cada nivel n tiene n subniveles (el 3 tiene 3s, 3p y 3d), así que admite 2n² electrones: 2, 8, 18 y 32. El «2, 8, 8» de las capas era un atajo que valía hasta el calcio.

### Parte 5. Tres reglas para llenar los orbitales
**1. Orden de llenado: el diagrama de Moeller** (*Madelung rule* o *aufbau principle*, de la palabra alemana «construir»). Los subniveles se llenan por orden de n + l creciente y, si empatan, primero el de n más bajo. Escrito en diagonales queda así, y es el orden que da Kuphaldt:

> 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, 5s, 4d, 5p, 6s, 4f, 5d, 6p, 7s, 5f, 6d, 7p

La sorpresa: el 4s se llena antes que el 3d. En el anfiteatro, la primera fila de la grada 4 resulta más cómoda que la última de la grada 3.

**2. Principio de exclusión de Pauli** (*Pauli exclusion principle*): dos electrones del mismo átomo no pueden tener los cuatro números cuánticos iguales. Consecuencia: en un orbital caben dos electrones, y con espines opuestos (↑↓).

**3. Regla de Hund** (*Hund's rule*): en orbitales de la misma energía, como los tres p, los electrones se reparten primero uno en cada orbital, con el mismo espín, y después se emparejan. Como en un autobús: primero se ocupan los asientos dobles vacíos.

La **configuración electrónica** (*electron configuration*) lista los subniveles con sus electrones en superíndice; para abreviar, el gas noble anterior va entre corchetes: [Ne] equivale a 1s² 2s² 2p⁶.

**Ejercicio resuelto 2. Cuatro configuraciones.**

- **Cloro, Z = 17.** Se llenan 1s² 2s² 2p⁶ 3s² (12 electrones) y quedan 5 para el 3p: [Ne] 3s² 3p⁵. En cajas, el 3p queda [↑↓] [↑↓] [↑ ]: le falta un electrón.
- **Potasio, Z = 19.** Tras el argón (18), el siguiente va al 4s, no al 3d: [Ar] 4s¹. Por eso el potasio se parece al sodio, [Ne] 3s¹.
- **Nitrógeno, Z = 7.** [He] 2s² 2p³. Por Hund: [↑ ] [↑ ] [↑ ], tres electrones desapareados.
- **Cromo, Z = 24, el metal que hace inoxidable al acero.** El diagrama predice [Ar] 4s² 3d⁴, pero Kuphaldt señala que la configuración real es [Ar] 4s¹ 3d⁵. Es una excepción: el diagrama de Moeller es una simplificación.

**Y el paladio, Z = 46.** El diagrama predice [Kr] 5s² 4d⁸, pero el paladio real es otra excepción: [Kr] 4d¹⁰, con el subnivel d completo y el 5s vacío. Basta con saber que hay excepciones y que manda el dato medido.

### Parte 6. De la configuración a la casilla de la tabla
La tabla se divide en cuatro **bloques** (*blocks*) según el último subnivel que se llena:

| Bloque | Último subnivel | Grupos | Ejemplos |
|---|---|---|---|
| s | ns | 1 y 2 (y el helio) | Sodio, potasio, magnesio |
| p | np | 13 a 18 | Carbono, oxígeno, cloro, argón |
| d | (n − 1)d | 3 a 12: metales de transición (*transition metals*) | Cromo, hierro, níquel, paladio, platino |
| f | (n − 2)f | Lantánidos y actínidos, la franja de abajo | Poco frecuentes en planta |

El bloque s tiene 2 columnas porque el subnivel s admite 2 electrones; el p, 6; el d, 10; el f, 14.

**Cómo situar un elemento:**

- **Periodo** = el n más alto de la configuración.
- **Grupo**: en el bloque s, el número de electrones s de la última capa; en el bloque p, 10 más los electrones s y p de la última capa; en el bloque d, la suma de los electrones s de la última capa y los d del nivel anterior.

**Ejercicio resuelto 3.** Un elemento tiene [Ne] 3s² 3p⁴. El n más alto es 3: periodo 3. Termina en p: bloque p. Electrones de la última capa: 2 + 4 = 6, así que grupo 10 + 6 = 16. Es el azufre: 10 electrones del neón más 6 dan Z = 16.

Para el paladio, [Kr] 4d¹⁰: bloque d, periodo 5 (el siguiente al del kriptón, aunque el 5s esté vacío) y grupo 0 + 10 = 10.

Como resume Kuphaldt, los electrones del núcleo de gas noble casi no intervienen; reaccionan los de fuera, los **electrones de valencia** (*valence electrons*): por eso litio (2s¹), sodio (3s¹) y potasio (4s¹) se parecen.

### Parte 7. Tendencias con números: la energía de ionización
La **energía de ionización** (*ionization energy*) es la energía mínima para arrancar el electrón más flojo de un átomo neutro en estado gaseoso, por ejemplo para pasar de Na a Na⁺ y un electrón libre. Cuanto más baja, más fácil forma un catión. Valores del NIST Chemistry WebBook, redondeados a dos decimales; los kJ/mol salen de multiplicar por 96,49 el valor sin redondear:

| Periodo 3 | Na | Mg | Al | Si | P | S | Cl | Ar |
|---|---|---|---|---|---|---|---|---|
| eV | 5,14 | 7,65 | 5,99 | 8,15 | 10,49 | 10,36 | 12,97 | 15,76 |
| kJ/mol | 496 | 738 | 578 | 787 | 1012 | 1000 | 1251 | 1521 |

| Grupo 1 | Li | Na | K | Rb | Cs |
|---|---|---|---|---|---|
| eV | 5,39 | 5,14 | 4,34 | 4,18 | 3,89 |

Tres lecturas:

- **Hacia la derecha sube.** Del sodio al argón se multiplica por tres: más protones tiran de electrones de la misma capa.
- **Hacia abajo baja.** El electrón de fuera está más lejos y los de dentro hacen de pantalla. El potasio necesita alrededor de un 16 % menos que el sodio, y reacciona con el agua más violentamente.
- **El salto al empezar periodo.** Del argón (15,76 eV) al potasio (4,34 eV) se desploma: el electrón nuevo estrena la capa 4. Kuphaldt muestra este diente de sierra como prueba de las capas.

**Dos «baches» que explican los orbitales:**

- **Mg 7,65 > Al 5,99.** El aluminio estrena el subnivel 3p, de más energía que el 3s: su electrón 3p sale con menos esfuerzo.
- **P 10,49 > S 10,36.** El fósforo tiene 3p³, tres desapareados según Hund; el azufre, 3p⁴, ya tiene dos electrones que se repelen en un orbital, y uno sale más fácil. (Periodo 2: nitrógeno 14,53 eV y oxígeno 13,62 eV.)

**Ejercicio resuelto 4.** ¿Cuánta energía hace falta para arrancar el electrón a 0,1 mol de átomos de sodio gaseoso? Por mol: 5,14 × 96,49 = 496 kJ/mol. Para 0,1 mol: 496 × 0,1 = 49,6 kJ. Es una cifra de átomos sueltos; en una reacción real el balance es otro.

### Parte 8. Afinidad electrónica, radio y electronegatividad
**Afinidad electrónica** (*electron affinity*): la energía que se libera cuando un átomo gaseoso captura un electrón y forma un anión, como de Cl a Cl⁻. Valores del NIST:

| Elemento | Cl | F | Br | I | H | Pd | Na |
|---|---|---|---|---|---|---|---|
| Afinidad (eV) | 3,61 | 3,40 | 3,36 | 3,06 | 0,75 | 0,56 | 0,55 |

Los halógenos, a un electrón de completar el subnivel p, liberan mucho; el cloro incluso supera al flúor. El sodio y el paladio apenas tienen afinidad.

**Radio atómico** (*atomic radius*): crece al bajar en un grupo, porque se añaden capas, y se encoge hacia la derecha, porque más protones tiran de la misma capa. **Electronegatividad** (*electronegativity*): la fuerza con que un átomo atrae los electrones de un enlace; crece hacia la derecha y hacia arriba, con el flúor en cabeza. Las tendencias se parecen porque todas miden cuánto tira el núcleo de los electrones de fuera. No damos cifras de radios ni de la escala de Pauling porque no hemos encontrado una tabla gratuita y fiable que citar. La polaridad de los enlaces está en «Enlaces y fuerzas entre moléculas a fondo: por qué unas cosas se disuelven y otras no».

### Parte 9. El hilo: sodio, cloro y paladio

| | Sodio | Cloro | Paladio |
|---|---|---|---|
| Z | 11 | 17 | 46 |
| Configuración | [Ne] 3s¹ | [Ne] 3s² 3p⁵ | [Kr] 4d¹⁰ |
| Bloque, periodo, grupo | s, 3, 1 | p, 3, 17 | d, 5, 10 |
| Energía de ionización | 5,14 eV | 12,97 eV | 8,34 eV |
| Afinidad electrónica | 0,55 eV | 3,61 eV | 0,56 eV |

- **El sodio** tiene un electrón solitario en 3s, lejos y apantallado: lo suelta con poca energía. Por eso en planta lo verás casi siempre como Na⁺, en la sosa o en las sales de las aguas madres.
- **El cloro** está a un electrón de completar el 3p: perder uno cuesta mucho y ganar uno libera energía. Lo verás como cloruro, Cl⁻.
- **El paladio** es un metal noble: no reacciona con el agua, y por eso el Pd/C (paladio sobre carbón, *palladium on carbon*) se puede manejar mojado, algo impensable con sodio metálico. Ojo: no se moja porque no reaccione, sino porque seco puede inflamarse solo al contacto con el aire, como verás en «Hidrogenación a fondo: hidrógeno, catalizadores y reactores a presión». Que retenga sus electrones bastante más que el sodio (8,34 eV frente a 5,14 eV) ayuda a entenderlo, pero no basta: la reactividad con el agua depende también de otras energías. Aun así puede dejar trazas en el producto: se filtra y se analiza («Impurezas a fondo: de dónde vienen, cuánto se permite y cómo las evita el operador»).

**Ejercicio resuelto 5. ¿Se pasan el electrón el Na y el Cl sueltos, en fase gas?** Arrancarlo al sodio cuesta 5,14 eV; dárselo al cloro devuelve 3,61 eV. Balance: 5,14 − 3,61 = 1,53 eV de coste por pareja; por mol, 1,53 × 96,49 = 148 kJ/mol. Lo que paga la cuenta en la sal es la atracción entre Na⁺ y Cl⁻ al formar el cristal; ese balance, el ciclo de Born-Haber, lo verás en «La forma de las moléculas a fondo: Lewis, RPECV e hibridación».

### Parte 10. En el laboratorio: llama, absorción atómica e ICP
**Emisión en una llama.** Una sal de sodio en una llama la tiñe de amarillo: los átomos calientes suben un electrón de escalón y, al bajar, emiten su raya. El manual de análisis elemental de la FDA (*Food and Drug Administration*, la agencia del medicamento de Estados Unidos; *Elemental Analysis Manual*, sección 4.4) da como línea de emisión del sodio 589,59 nm, y del potasio, 766,49 nm, en el límite entre el rojo y el infrarrojo.

**Ejercicio resuelto 6. La energía de la luz del sodio.** E = 1240 / 589,59 = 2,10 eV por fotón, o 2,10 × 96,49 = 203 kJ/mol. Es menos de la mitad de los 5,14 eV de su energía de ionización: la llama excita el átomo sin necesidad de arrancarle el electrón.

**Absorción atómica** (*atomic absorption spectrometry*, AAS). Usa el «negativo» del espectro. La disolución se aspira a una llama que deja el elemento en forma de átomos, y la atraviesa la luz de una **lámpara de cátodo hueco** (*hollow cathode lamp*) del mismo elemento que se busca: emite justo sus rayas, y los átomos las absorben. Cuanta más luz desaparece (más absorbancia), más elemento hay. El método 4.1 de la FDA para plomo y cadmio usa llama de aire y acetileno, lámparas específicas de cada elemento, 283,3 o 217,0 nm para el plomo y 228,8 nm para el cadmio, y dice que con estas lámparas las interferencias por rayas superpuestas son extremadamente raras.

**Plasma acoplado inductivamente** (*inductively coupled plasma*, ICP). En el ICP-OES (*optical emission spectrometry*, emisión óptica) los átomos excitados en un plasma de argón emiten sus rayas; en el ICP-MS (*mass spectrometry*, espectrometría de masas) se cuentan como iones. Es la técnica del análisis de paladio que verás en «Otras técnicas a fondo: difracción de rayos X, RMN, espectrometría de masas e ICP».

**Lo que te toca a ti.** Tu muestra decide el resultado: un recipiente de metal o una espátula oxidada pueden añadir justo el elemento que se mide. Usa el envase y el utensilio que indique el procedimiento.

En planta manda siempre el procedimiento vigente (SOP, *Standard Operating Procedure*): los controles de metales, los envases de muestra y los límites de tu producto son los que figuran en él y en la hoja de producción.
`,
  plant: `
Planta ficticia de la lección. En el autoclave AH-512 se ha hidrogenado el intermedio ficticio KT-40 con Pd/C. Marta, operadora, filtra la mezcla por el filtro de cartucho FC-514, que retiene el catalizador, y pasa el filtrado al reactor R-520. Allí se neutraliza el ácido clorhídrico sobrante con sosa: el sodio y el cloro acaban como iones Na⁺ y Cl⁻ disueltos, justo lo que predicen sus configuraciones.

La hoja pide dos muestras. La primera, del filtrado, para analizar paladio por ICP-MS. Marta usa el frasco de plástico que entrega el laboratorio y la espátula de plástico del kit; no un cazo de acero, porque el acero inoxidable lleva cromo y níquel, otros metales del bloque d que el laboratorio también puede vigilar. La segunda, del agua de lavado de la torta en la centrífuga CF-522, para comprobar que no quedan sales.

Al llevar las muestras, el analista le enseña el espectrómetro de absorción atómica del laboratorio y la vitrina con lámparas de cátodo hueco, una por elemento. «Para cada metal pongo su propia lámpara, porque los átomos solo absorben la luz de su propia huella», le explica. Marta recuerda la lección: los mismos escalones de energía que hacen que el sodio pierda su electrón 3s con facilidad son los que dan su luz característica.

El resultado de paladio sale por debajo del límite de la especificación y el lote sigue a secado en el secadero SD-530. Todo el proceso, los equipos, los productos y los resultados son ficticios.
`,
  batchRecord: `
- **Catalizador**: lote del Pd/C, cantidad cargada (en húmedo o en seco, como diga la hoja), filtro y número de cartucho usados para retirarlo, y presión diferencial al inicio y al final.
- **Muestras para metales**: punto de muestreo, hora, envase y utensilio usados (los que marque el procedimiento, normalmente de plástico limpio), identificación de la muestra y firma. Anota cualquier incidencia, como un envase abierto o un utensilio distinto del previsto.
- **Resultado de metales**: no lo calculas tú; llega del laboratorio (ICP o absorción atómica) con su referencia. Comprueba que el número de muestra coincide con el tuyo.
- **Neutralizaciones y lavados**: reactivo (por ejemplo, sosa o ácido clorhídrico), cantidad, temperatura máxima, pH final y resultado del control de lavado que pida la hoja.
- **Materiales de equipo**: si ves corrosión, óxido o arañazos en una superficie en contacto con producto, anótalo y avisa: puede aportar hierro, cromo o níquel.
- **Anomalías**: un resultado de metal fuera de límite o una muestra mal tomada se registra y se comunica antes de seguir, según el procedimiento.
`,
  terms: [
    { es: "Espectro de emisión", en: "Emission spectrum", def: "Conjunto de rayas de luz, de longitudes de onda fijas, que emite un elemento excitado; identifica al elemento como una huella dactilar." },
    { es: "Espectro de absorción", en: "Absorption spectrum", def: "Rayas que faltan en la luz blanca tras atravesar un vapor del elemento; están en las mismas longitudes de onda que su espectro de emisión." },
    { es: "Electronvoltio", en: "Electronvolt (eV)", def: "Energía que gana un electrón al pasar por una diferencia de potencial de un voltio. 1 eV por átomo equivale a 96,49 kJ/mol." },
    { es: "Estado fundamental", en: "Ground state", def: "La situación de menor energía de los electrones de un átomo." },
    { es: "Orbital", en: "Orbital", def: "Zona del espacio alrededor del núcleo donde es muy probable encontrar un electrón. Admite como mucho dos." },
    { es: "Números cuánticos", en: "Quantum numbers", def: "Los cuatro números (n, l, mₗ y mₛ) que describen a cada electrón de un átomo: nivel, subnivel, orientación del orbital y espín." },
    { es: "Principio de exclusión de Pauli", en: "Pauli exclusion principle", def: "Dos electrones de un mismo átomo no pueden tener los cuatro números cuánticos iguales; por eso caben dos por orbital, con espines opuestos." },
    { es: "Regla de Hund", en: "Hund's rule", def: "En orbitales de igual energía, los electrones se reparten primero uno por orbital, con el mismo espín, antes de emparejarse." },
    { es: "Diagrama de Moeller", en: "Madelung rule, aufbau order", def: "Orden de llenado de los subniveles por n + l creciente: 1s, 2s, 2p, 3s, 3p, 4s, 3d… Tiene excepciones, como el cromo o el paladio." },
    { es: "Configuración electrónica", en: "Electron configuration", def: "Reparto de los electrones de un átomo en sus subniveles, por ejemplo [Ne] 3s² 3p⁵ para el cloro." },
    { es: "Energía de ionización", en: "Ionization energy", def: "Energía mínima para arrancar el electrón más débilmente unido a un átomo neutro en estado gaseoso." },
    { es: "Afinidad electrónica", en: "Electron affinity", def: "Energía que se libera cuando un átomo gaseoso captura un electrón y forma un anión." },
    { es: "Metal de transición", en: "Transition metal", def: "Elemento del bloque d (grupos 3 a 12), como el cromo, el hierro, el níquel o el paladio." },
    { es: "Lámpara de cátodo hueco", en: "Hollow cathode lamp", def: "Fuente de luz de la absorción atómica, hecha del elemento que se mide, que emite justo las rayas de ese elemento." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Con el modelo de Bohr, Eₙ = −13,6 eV / n², calcula la longitud de onda, en nm, del fotón que emite el hidrógeno al bajar del nivel 4 al nivel 2. Usa E (eV) = 1240 / λ (nm) y da el resultado sin decimales.",
      answer: 486,
      tolerance: 0.01,
      unit: "nm",
      explain: "ΔE = 13,6 × (1/4 − 1/16) = 13,6 × 0,1875 = 2,55 eV. λ = 1240 / 2,55 = 486 nm, una de las cuatro rayas visibles del hidrógeno que cita Kuphaldt.",
    },
    {
      kind: "number",
      q: "¿Cuántos electrones caben como máximo en un subnivel d (l = 2)?",
      answer: 10,
      tolerance: 0.001,
      unit: "electrones",
      explain: "Capacidad = 2 × (2l + 1) = 2 × (2 × 2 + 1) = 2 × 5 = 10: cinco orbitales con dos electrones cada uno. Por eso el bloque d tiene 10 columnas.",
    },
    {
      kind: "number",
      q: "La energía de ionización del cloro es 12,97 eV por átomo. Con 1 eV por átomo = 96,49 kJ/mol, ¿cuánto es en kJ/mol? Redondea a la unidad.",
      answer: 1251,
      tolerance: 0.002,
      unit: "kJ/mol",
      explain: "12,97 × 96,49 = 1251 kJ/mol. Es dos veces y media la del sodio (496 kJ/mol): al cloro le cuesta mucho perder un electrón.",
    },
    {
      kind: "number",
      q: "La FDA da para el potasio una línea de emisión de 766,49 nm. ¿Qué energía lleva cada fotón, en eV, con dos decimales? Usa E (eV) = 1240 / λ (nm).",
      answer: 1.62,
      tolerance: 0.01,
      unit: "eV",
      explain: "E = 1240 / 766,49 = 1,62 eV. Es menos que los 2,10 eV de la línea del sodio de 589,59 nm: onda más larga, fotón menos energético.",
    },
    {
      kind: "number",
      q: "El nitrógeno (Z = 7) tiene la configuración [He] 2s² 2p³. Aplicando la regla de Hund, ¿cuántos electrones desapareados tiene?",
      answer: 3,
      tolerance: 0.001,
      unit: "electrones",
      explain: "Los tres electrones 2p se reparten uno en cada uno de los tres orbitales p, con el mismo espín, antes de emparejarse: 3 desapareados. Los 2s están emparejados.",
    },
    {
      kind: "choice",
      q: "Comparas cuatro metales y no metales por su primera energía de ionización según los datos del NIST. ¿Cuál pierde su electrón más fácilmente?",
      options: [
        "El potasio, [Ar] 4s¹, con 4,34 eV",
        "El sodio, [Ne] 3s¹, con 5,14 eV",
        "El magnesio, [Ne] 3s², con 7,65 eV",
        "El cloro, [Ne] 3s² 3p⁵, con 12,97 eV",
      ],
      answer: 0,
      explain: "La energía de ionización más baja es la del potasio: su electrón 4s está en una capa más alejada que el 3s del sodio. Por eso el potasio metálico reacciona con el agua con más violencia que el sodio.",
    },
    {
      kind: "choice",
      q: "En el laboratorio, el analista cambia la lámpara del espectrómetro de absorción atómica al pasar de analizar plomo a analizar cadmio. ¿Por qué?",
      options: [
        "Porque la lámpara de plomo se gasta tras cada análisis",
        "Porque cada elemento solo absorbe las rayas de su propia huella, y la lámpara de cátodo hueco de cadmio emite justo esas",
        "Porque el cadmio necesita una llama más caliente que el plomo",
        "Porque el plomo absorbe luz visible y el cadmio solo infrarroja",
      ],
      answer: 1,
      explain: "Los átomos absorben las mismas longitudes de onda que emiten. La lámpara se hace del elemento buscado; el método 4.1 de la FDA usa 228,8 nm para el cadmio y 283,3 o 217,0 nm para el plomo.",
    },
    {
      kind: "choice",
      q: "Un elemento tiene la configuración [Ne] 3s² 3p⁵. ¿Dónde está en la tabla y qué ion tiende a formar?",
      options: [
        "Periodo 2, grupo 15; tiende a formar un catión 3+",
        "Periodo 3, grupo 5; tiende a formar un catión 5+",
        "Periodo 3, grupo 17; tiende a ganar un electrón y formar un anión 1−",
        "Periodo 5, grupo 3; tiende a perder dos electrones s",
      ],
      answer: 2,
      explain: "El n más alto es 3: periodo 3. Termina en p con 2 + 5 = 7 electrones en la última capa: grupo 10 + 7 = 17. Es el cloro, que con un electrón más completa el 3p y forma Cl⁻.",
    },
    {
      kind: "choice",
      q: "Un compañero se extraña de que el Pd/C se cargue mojado con agua cuando el sodio metálico no puede tocarla. ¿Qué le explicas?",
      options: [
        "Que el paladio es un gas noble y no reacciona con nada",
        "Que el agua del Pd/C lleva sosa y neutraliza al paladio",
        "Que el paladio está en el grupo 1, como el sodio, pero es más pesado",
        "Que el paladio, del bloque d, es un metal noble que no reacciona con el agua; además, se carga mojado porque seco puede inflamarse solo",
      ],
      answer: 3,
      explain: "El sodio suelta su electrón 3s con poca energía y reacciona con el agua. El paladio, [Kr] 4d¹⁰, metal de transición del grupo 10, necesita bastante más energía para perder un electrón y es un metal noble. El agua del Pd/C es una medida de seguridad contra la inflamación espontánea, no solo una posibilidad. Aun así puede dejar trazas en el producto, y por eso se filtra y se analiza.",
    },
    {
      kind: "choice",
      q: "Al llenar los tres orbitales 2p del oxígeno ([He] 2s² 2p⁴), ¿cuál es el reparto correcto en el diagrama de cajas?",
      options: [
        "[↑↓] [↑↓] [ ], dos orbitales llenos y uno vacío",
        "[↑↑] [↑ ] [↑ ], dos electrones con el mismo espín en el mismo orbital",
        "[↑↓] [↑ ] [↑ ], primero uno en cada orbital y luego se empareja el cuarto",
        "[↑ ] [↑ ] [↑ ] y el cuarto electrón pasa al 3s",
      ],
      answer: 2,
      explain: "Por Hund, los tres primeros van uno por orbital con el mismo espín; el cuarto se empareja con espín opuesto, como exige Pauli. Ese par que se repele explica que el oxígeno tenga menor energía de ionización (13,62 eV) que el nitrógeno (14,53 eV).",
    },
  ],
};
