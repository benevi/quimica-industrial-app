import type { Lesson } from "./types";

export const particulaAFondo: Lesson = {
  slug: "tamano-de-particula-a-fondo",
  level: 8,
  order: 6,
  title: "Tamaño de partícula a fondo",
  titleEn: "Particle size analysis in depth",
  minutes: 40,
  summary:
    "Qué significa el tamaño de un grano que no es una bola, cómo se lee una distribución (D10, D50, D90 y span), por qué no es lo mismo contar por número que por volumen, cómo trabajan el tamizado analítico, la difracción láser y el microscopio, por qué ICH Q6A puede meter el tamaño en la especificación del principio activo, qué etapas de planta lo deciden y cómo una mala muestra de polvo lo falsea.",
  body: `
En «Tamaño de partícula y tamizado» viste qué son el d10, el d50 y el d90, y en «Molienda, micronización y tamizado», con qué máquinas se ajusta el tamaño. Aquí verás de dónde salen esos números, qué puede engañar al laboratorio y qué depende de ti. Cómo fluye un polvo está en «Manejo de sólidos a fondo».

Una micra o micrómetro (µm) es la milésima parte de un milímetro: 1000 µm son 1 mm.

### ¿Cuánto mide un grano que no es una bola?
Una canica tiene un diámetro. Un cristal casi nunca es una bola: puede ser una aguja, una placa o un prisma. Es como preguntar cuánto mide un lápiz: ¿el largo o el grosor?

Por eso se usa el **diámetro equivalente** (*equivalent diameter*): el diámetro de una esfera que se parece a la partícula en una cosa concreta. El texto de microscopía armonizado por las farmacopeas europea, japonesa y estadounidense (reproducido gratis por la EMA con el anexo 12 de ICH Q4B) define varios, como el **diámetro de área proyectada** (*projected area diameter*), el del círculo con la misma área que la sombra de la partícula, y pide decir siempre qué diámetro se ha medido y qué forma tienen las partículas.

**Dos cuentas para verlo.** Valores de ejemplo.

1. **Un cubo de 10 µm de lado.** Su volumen es 10 × 10 × 10 = 1000 µm³. La esfera del mismo volumen tiene un diámetro d = (6 × V / π)^(1/3) = (6 × 1000 / 3,1416)^(1/3) = (1909,9)^(1/3) = **12,4 µm**. El mismo cubo «mide» 10 µm de lado y 12,4 µm como esfera equivalente.
2. **Una aguja de 50 × 5 × 5 µm.** Vista desde arriba, su sombra es un rectángulo de 50 × 5 = 250 µm². El círculo de la misma área tiene d = raíz de (4 × A / π) = raíz de (4 × 250 / 3,1416) = raíz de 318,3 = **17,8 µm**. La esfera del mismo volumen (50 × 5 × 5 = 1250 µm³) da (6 × 1250 / 3,1416)^(1/3) = **13,4 µm**. Y su longitud son 50 µm.

Misma aguja, tres números: 50, 17,8 y 13,4 µm. Ninguno es falso. La guía de la FDA sobre medicamentos con nanomateriales (2022) avisa de que instrumentos distintos pueden dar resultados distintos para el mismo atributo. La consecuencia: **un resultado de tamaño solo se compara con otro medido por el mismo método.**

### De una partícula a millones: la distribución
Un polvo tiene muchísimas partículas de tamaños distintos. El resultado es una **distribución de tamaños de partícula** (*particle size distribution*, PSD): cuánto material hay de cada tamaño. Se dibuja como **histograma** (*histogram*), una barra por intervalo de tamaño, o como **curva acumulada** (*cumulative curve*): para cada tamaño, el porcentaje de material más pequeño que él, de 0 a 100 %.

Con valores de ejemplo, un informe de difracción láser podría dar esto (porcentaje en volumen):

| Intervalo (µm) | % en el intervalo | % acumulado por debajo del límite superior |
|---|---|---|
| 0 a 10 | 4 | 4 |
| 10 a 20 | 8 | 12 |
| 20 a 40 | 18 | 30 |
| 40 a 60 | 22 | 52 |
| 60 a 80 | 18 | 70 |
| 80 a 120 | 16 | 86 |
| 120 a 200 | 11 | 97 |
| 200 a 300 | 3 | 100 |

La columna acumulada se hace sumando: 4, 4 + 8 = 12, 12 + 18 = 30, y así hasta 100. En ella se leen:

- **D10**: el tamaño por debajo del cual está el 10 % del material.
- **D50**: el del 50 %, la **mediana** (*median*). La mitad del material es más pequeña y la otra mitad, más grande.
- **D90**: el del 90 %. Solo el 10 % del material es más grande.

Los verás escritos d10, D10 o Dv10 (la «v» indica que es en volumen).

**Cómo se calcula el D50 del ejemplo.** El 50 % cae entre 40 µm (30 % acumulado) y 60 µm (52 %). Se reparte en línea recta (es una aproximación; el programa del equipo usa todos sus intervalos):

D50 = 40 + (50 − 30) / (52 − 30) × (60 − 40) = 40 + 20 / 22 × 20 = 40 + 18,2 = **58 µm**

Igual: el 10 % cae entre 10 µm (4 %) y 20 µm (12 %): D10 = 10 + (10 − 4) / 8 × 10 = **17,5 µm**. El 90 % cae entre 120 µm (86 %) y 200 µm (97 %): D90 = 120 + (90 − 86) / 11 × 80 = **149 µm**.

**El span.** Dos lotes con el mismo D50 pueden ser muy distintos: uno de granos parecidos y otro de polvo fino mezclado con granos gordos. El **span** mide la anchura de la distribución. La guía de la FDA de 2002 sobre productos nasales y de inhalación lo define así:

**span = (D90 − D10) / D50**

En el ejemplo: (149 − 17,5) / 58 = 131,5 / 58 = **2,27**. No tiene unidades (micras entre micras). Cuanto mayor, más mezclados están los tamaños.

### Por número o por volumen: no es lo mismo
Imagina un bote con **una** partícula de 100 µm y **mil** partículas de 10 µm. El volumen de una esfera va con el cubo del diámetro, así que:

- Una de 100 µm: 100 × 100 × 100 = 1 000 000 (en las mismas unidades).
- Mil de 10 µm: 1000 × 10 × 10 × 10 = 1 000 000.

**Contando partículas**, las pequeñas son 1000 de 1001: el 99,9 %. **Pesando o midiendo volumen**, la mitad del material está en la partícula grande y la otra mitad en las mil pequeñas: 50 % y 50 %.

- **La difracción láser da una distribución en volumen.** Lo dice una presentación de la FDA de 2024 sobre sus laboratorios de inhalación. El tamizado da porcentajes en peso; como masa = densidad × volumen, para granos de un mismo producto el peso va de la mano del volumen.
- **El microscopio cuenta partículas**, una a una: da una distribución en número.

En volumen, unas pocas partículas gordas pesan mucho en el D90; en número, los finos llenan la cuenta. La guía de la FDA de nanomateriales pide indicar si la distribución es en intensidad, en volumen o en número.

### Método 1: el tamizado analítico
Es uno de los métodos más antiguos y el más fácil de imaginar: una torre de tamices (*sieve stack*), cada uno con una malla de agujeros cuadrados más pequeños que el de arriba. El polvo se pone arriba, se agita la torre y cada grano se queda en el primer tamiz que no puede atravesar. Se pesa lo que queda en cada uno.

Según el anexo 12 de ICH Q4B, los textos de las farmacopeas europea (2.9.38), japonesa (3.04) y estadounidense (capítulo 786) son intercambiables. Lo que sigue sale del texto que reproduce ese anexo en la versión publicada por la EMA:

- **Para qué tamaños.** Está pensado para cuando al menos el 80 % de las partículas son mayores de 75 µm. Más finas pesan tan poco que se pegan entre sí y a la malla.
- **Qué mide.** El lado del agujero cuadrado más pequeño por el que pasa la partícula: una aguja larga puede pasar de punta.
- **Cuánta muestra.** Si no se indica otra cosa, de 25 a 100 g con tamices de 200 mm.
- **Cuándo se acaba.** Se agita 5 minutos, se pesa cada tamiz y se repite hasta que ninguno cambie más del 5 % o de 0,1 g (hasta un 20 % si el tamiz tiene menos del 5 % del total).
- **Controles.** Si más del 50 % queda en un solo tamiz, se repite con un tamiz intermedio. Las pérdidas no pueden pasar del 5 %. La humedad y la electricidad estática falsean el resultado, y si lo retenido son agregados formados al tamizar, el análisis no vale.

**Cuenta resuelta.** Valores de ejemplo: 50,0 g de muestra; tamices de 710, 500, 355, 250, 180, 125 y 90 µm y el fondo (*pan*). Al llegar al final pesas lo retenido en cada uno:

| Tamiz (µm) | Retenido (g) | % retenido | % retenido acumulado | % que pasa |
|---|---|---|---|---|
| 710 | 0,0 | 0,0 | 0,0 | 100,0 |
| 500 | 1,2 | 2,4 | 2,4 | 97,6 |
| 355 | 4,6 | 9,3 | 11,7 | 88,3 |
| 250 | 9,8 | 19,8 | 31,5 | 68,5 |
| 180 | 14,5 | 29,3 | 60,8 | 39,2 |
| 125 | 11,3 | 22,8 | 83,6 | 16,4 |
| 90 | 5,4 | 10,9 | 94,5 | 5,5 |
| Fondo | 2,7 | 5,5 | 100,0 | 0,0 |

Paso a paso:

1. **Total recuperado:** 0,0 + 1,2 + 4,6 + 9,8 + 14,5 + 11,3 + 5,4 + 2,7 = 49,5 g.
2. **Pérdida:** 50,0 − 49,5 = 0,5 g, es decir, 0,5 / 50,0 × 100 = **1,0 %**. Menos del 5 %: vale.
3. **% retenido** en cada tamiz, aquí sobre lo recuperado (cómo se hace en tu laboratorio lo dice su procedimiento): en el de 180 µm, 14,5 / 49,5 × 100 = **29,3 %**. Ningún tamiz pasa del 50 %.
4. **Acumulado:** se van sumando de arriba abajo. **% que pasa** = 100 − acumulado. Por el tamiz de 250 µm pasa el 68,5 % del material.
5. **D50 aproximado:** el 50 % que pasa está entre 180 µm (39,2 %) y 250 µm (68,5 %): 180 + (50 − 39,2) / (68,5 − 39,2) × 70 = 180 + 10,8 / 29,3 × 70 = 180 + 25,8 = **unas 206 µm**.

El tamiz de 710 µm, por el que pasa todo, lo pide el texto armonizado para expresar el resultado como acumulado que pasa.

### Método 2: la difracción láser
Cuando las partículas son demasiado finas para el tamiz, el texto armonizado pide pensar en otro método. Uno de ellos es la difracción láser. La idea, explicada por los fabricantes de estos equipos: un rayo láser atraviesa una nube de partículas y cada partícula desvía un poco de luz. **Las grandes la desvían poco, casi en línea recta; las pequeñas, en ángulos más abiertos.** Unos detectores colocados a distintos ángulos miden cuánta luz llega a cada uno, y un programa calcula qué mezcla de tamaños explica ese dibujo de luz. El resultado se da como esferas equivalentes, en volumen.

La muestra se presenta al láser de dos maneras:

- **Dispersión seca** (*dry dispersion*): el polvo pasa arrastrado por aire a presión.
- **Dispersión húmeda** (*wet dispersion*): el polvo va suspendido en un líquido, el **dispersante** (*dispersant*), a veces con un agente humectante o con ultrasonidos para separar los granos.

**Qué puede salir mal.**

- **Aglomerados sin deshacer** (*agglomerates*): varios cristales pegados cuentan como uno grande y el D90 sube. El microscopio enseña los racimos.
- **Dispersión excesiva**: demasiada presión o ultrasonidos parten los cristales y el resultado sale más fino que el producto.
- **La muestra se disuelve**: si el dispersante disuelve el principio activo, los finos desaparecen y el resto encoge.
- **Muestra no representativa**: la porción analizada no es como el lote.

Lo de no disolver la muestra lo dice el texto armonizado de microscopía para su ensayo: el medio se elige pensando en la solubilidad del producto. La guía de la FDA de nanomateriales añade que diluir o secar una muestra puede cambiarla, y la de 2002 pide definir con detalle el equipo, la teoría de cálculo, la versión del programa y el rango de medida. Por eso los ajustes están fijados en el método validado.

### Método 3: el microscopio
El microscopio óptico enseña la forma de cada partícula. Según el texto armonizado sirve, en general, para partículas de **1 µm o más**, es especialmente útil con partículas no esféricas y sirve de base para calibrar métodos más rápidos.

Enseña lo que el láser no ve: agujas donde siempre hay prismas, cristales rotos, racimos. El texto armonizado nombra formas como **acicular** (aguja), **placa** y **equidimensional** (*equant*, parecida en sus tres dimensiones). Con un **microscopio de luz polarizada** (*polarizing microscope*) se comprueba si las partículas son cristalinas: brillan con colores y se apagan al girar la platina.

**Cuenta resuelta: medir con la escala del ocular.** El microscopio lleva una regla grabada en el ocular, sin unidades: solo divisiones. Se calibra con un **micrómetro de platina** (*stage micrometer*), un portaobjetos con una regla de longitud conocida. Valores de ejemplo: 100 µm del micrómetro ocupan 40 divisiones del ocular.

1. Cada división vale 100 / 40 = **2,5 µm**.
2. Una partícula ocupa 18 divisiones: 18 × 2,5 = **45 µm**.

Se calibra cada objetivo por separado.

### Por qué la especificación de un principio activo puede incluir el tamaño
La guía ICH Q6A fija qué ensayos lleva la especificación de un principio activo nuevo. En su apartado 3.3.1 b dice que, en algunos principios activos destinados a medicamentos sólidos o suspensiones, el tamaño de partícula puede afectar mucho a la velocidad de disolución, a la biodisponibilidad (cuánto fármaco llega a la sangre) o a la estabilidad, y que en esos casos se mide con un procedimiento adecuado y con criterios de aceptación.

El **árbol de decisión n.º 3** de Q6A, «Fijar criterios de aceptación para la distribución del tamaño de partícula del principio activo», hace dos preguntas seguidas:

1. **¿El medicamento es una forma sólida o un líquido con principio activo sin disolver?** Si es que no (por ejemplo, un inyectable en disolución), no hace falta criterio de tamaño: el principio activo se va a disolver entero.
2. Si es que sí: ¿el tamaño es crítico para la disolución, la solubilidad o la biodisponibilidad, para fabricar el medicamento, para su estabilidad, para la uniformidad de contenido (que cada comprimido lleve la misma dosis) o para su aspecto?

**Con un sí a cualquiera, se fija un criterio de aceptación. Con un no a todas, no se requiere.** El apartado 2.4 añade que el ensayo de tamaño puede hacerse como control en proceso o como ensayo de liberación, según su importancia para el producto.

ICH Q7, la guía de buenas prácticas para principios activos, añade:

- La manipulación física del tamaño, como **moler o micronizar**, se hace al menos con las normas de esa guía (apartado 1.3).
- Si las propiedades físicas son críticas, **las mezclas de lotes se validan** comprobando, entre otras cosas, el tamaño de partícula y las densidades aparente y compactada (8.45).
- **Un lote fuera de especificación no se mezcla con otros para que cumpla** (8.41).
- Volver a pasar un lote por un paso que ya forma parte del proceso establecido, como **la molienda**, se considera en general aceptable (14.20). Si hay que hacerlo en la mayoría de los lotes, debe incluirse en el proceso normal.

### Qué etapas de planta deciden el tamaño
El laboratorio mide el tamaño, pero lo fabrica la planta:

| Etapa | Cómo influye | Qué haces tú |
|---|---|---|
| **Cristalización** | Enfriar o añadir antidisolvente despacio da cristales grandes; de golpe, muchos finos (lección «Cristalización») | Seguir la rampa de temperatura, el tiempo de adición y la siembra tal cual |
| **Agitación** | Mantiene los cristales en suspensión; las agujas finas se rompen al agitar («Polimorfismo, sales y solvatos a fondo») | Velocidad de la hoja; no subirla «para que vaya mejor» |
| **Centrífuga** | Los finos filtran y lavan mal; unir varias cargas de una misma cristalización es parte del proceso, no una mezcla de lotes (ICH Q7, 8.40) | Anotar tiempos de carga y centrifugado y cualquier torta que filtra peor |
| **Secado** | El volteo o las paletas pueden romper o desgastar cristales; la humedad desigual forma grumos («El secado a fondo») | Respetar la velocidad del agitador y los tiempos; avisar de bolas o grumos |
| **Molienda** | La velocidad, la malla, la presión de aire y la alimentación fijan el tamaño final | Parámetros exactos y registrados; integridad de la malla antes y después |

La guía de la FDA de 2002 da como controles de un micronizador la velocidad de alimentación, la presión y el caudal de aire, el tamaño del producto que entra, cuántas veces se microniza y si se reutilizan restos de lotes anteriores.

### El muestreo de polvos y la segregación
Un polvo con granos de distintos tamaños tiende a separarse cuando se mueve, vibra o cae: es la **segregación** (*segregation*), como las migas que acaban en el fondo de una caja de cereales. Una muestra tomada solo de arriba o solo de abajo da otro tamaño.

Lo que dice la guía de muestreo de la OMS (informe técnico n.º 929, anexo 4):

- Hay riesgo de segregación de los graneles durante el transporte, y el plan de muestreo debe tenerlo en cuenta.
- Si la cuchara es pequeña para el tamaño de los granos, los grandes se caen y la muestra sale sesgada.
- La cucharada se toma de un solo movimiento. No se dan golpecitos a la cuchara para vaciarla: eso segrega la muestra.
- Una sonda (*thief*) metida en vertical puede sacar granos de distinto tamaño que metida en ángulo.

Los puntos, los útiles y los envases están en «Muestreo en planta a fondo».

### Si el resultado no cumple
Un D90 fuera de especificación no se arregla por tu cuenta. Se investiga: el laboratorio revisa su análisis y producción, el lote. Tu hoja (rampas, velocidades, tiempos, parámetros del molino, estado de la malla, cualquier cosa rara) es media investigación. Si se decide volver a moler, se hace como permita el proceso aprobado y queda registrado.

En planta manda siempre el procedimiento vigente (SOP): los métodos, los límites y los parámetros de tu producto son los suyos, no los de los ejemplos de esta lección.
`,
  plant: `
Lote ficticio AX-52, principio activo para comprimidos. La especificación del ejemplo pide, por difracción láser en volumen, D90 ≤ 150 µm.

Turno de noche. En el cristalizador R-305 la hoja dice: enfriar de 60 a 5 °C en 6 horas y agitar a 80 rpm. A las dos horas salta una alarma del agua glicolada y la temperatura baja más rápido de lo previsto durante 20 minutos. Lo corriges, lo anotas con hora y avisas a la jefa de turno.

La torta de la centrífuga CF-310 tarda más de lo normal en escurrir: lo apuntas. El producto pasa al secadero de paletas SD-320 y luego al molino de púas ML-330 con la velocidad y la malla de la hoja. Antes y después compruebas la malla: íntegra.

Tomas la muestra del bidón según el procedimiento: con la sonda en el ángulo indicado, de un solo movimiento, sin golpear el útil. El laboratorio da D10 = 4 µm, D50 = 38 µm y D90 = 142 µm: cumple. Pero el microscopio enseña muchos finos y el span sale (142 − 4) / 38 = 3,6, más ancho que en los lotes anteriores.

Calidad cruza el informe con tu hoja: el enfriamiento brusco explica los finos, y los finos, la centrífuga lenta. El lote cumple su especificación, pero tu anotación de la noche ha servido para abrir una acción y revisar la alarma del glicol.
`,
  batchRecord: `
En la hoja de producción (*batch record*) el tamaño de partícula aparece por dos lados: los parámetros que lo fabrican y la muestra que lo mide.

- **Cristalización**: temperatura inicial y final, rampa de enfriamiento real (gráfico del sistema de control si se adjunta), tiempo de adición del antidisolvente, siembra (lote, cantidad, temperatura) y velocidad del agitador.
- **Centrífuga y secado**: tiempos de cada carga, velocidad del agitador o del volteo, temperatura y vacío, y cualquier grumo, bola o torta que filtra peor de lo normal.
- **Molienda**: código del molino, malla o criba usada, velocidad, presión de aire si es un micronizador, ritmo de alimentación, hora de inicio y fin, y comprobación de la integridad de la malla antes y después.
- **Muestreo**: punto, útil, hora, quién toma la muestra y etiqueta; si la hoja pide varias muestras (principio, medio y final), todas.
- **Resultado**: lo recibes del laboratorio como D10, D50 y D90 en µm, a veces con el span, y la referencia del método. Se compara con el límite que trae la especificación.
- **Incidencias**: alarmas de temperatura, paradas del agitador, cambios de malla, con hora, firma y aviso al responsable.

Se anota el valor real, nunca el esperado.
`,
  terms: [
    { es: "Distribución de tamaños de partícula", en: "Particle size distribution (PSD)", def: "Cuánto material hay de cada tamaño en un polvo. Se da como histograma o como curva acumulada." },
    { es: "Diámetro equivalente", en: "Equivalent diameter", def: "Diámetro de una esfera que se parece a una partícula irregular en una propiedad concreta: su volumen, el área de su sombra, etc." },
    { es: "Curva acumulada", en: "Cumulative curve", def: "Gráfica que da, para cada tamaño, el porcentaje de material más pequeño que ese tamaño." },
    { es: "D50 o mediana", en: "D50 / median", def: "Tamaño por debajo del cual está la mitad del material." },
    { es: "D90", en: "D90", def: "Tamaño por debajo del cual está el 90 % del material; solo el 10 % es más grande." },
    { es: "Span", en: "Span", def: "Anchura de la distribución: (D90 − D10) / D50. Sin unidades; cuanto mayor, más mezclados están los tamaños." },
    { es: "Distribución en volumen", en: "Volume-weighted distribution", def: "Reparto que cuenta cuánto volumen de material hay en cada tamaño. Es la que da la difracción láser." },
    { es: "Distribución en número", en: "Number-weighted distribution", def: "Reparto que cuenta cuántas partículas hay de cada tamaño, como hace el microscopio." },
    { es: "Tamizado analítico", en: "Analytical sieving", def: "Ensayo que separa el polvo con una torre de tamices y pesa lo retenido en cada uno." },
    { es: "Difracción láser", en: "Laser diffraction", def: "Método que calcula el tamaño a partir de cómo desvían las partículas un rayo láser: las grandes lo desvían poco y las pequeñas en ángulos más abiertos." },
    { es: "Dispersante", en: "Dispersant", def: "Líquido en el que se suspende el polvo para medirlo por vía húmeda. No debe disolver la muestra." },
    { es: "Aglomerado", en: "Agglomerate", def: "Grupo de partículas unidas que se comporta como una sola más grande. Las guías no usan siempre la palabra igual: el método de tu laboratorio dice cómo tratarlos." },
    { es: "Segregación", en: "Segregation", def: "Separación de los granos finos y gruesos de un polvo al moverlo, transportarlo o muestrearlo." },
    { es: "Micrómetro de platina", en: "Stage micrometer", def: "Portaobjetos con una regla de longitud conocida que sirve para calibrar la escala del ocular del microscopio." },
  ],
  quiz: [
    {
      kind: "number",
      q: "El laboratorio da D10 = 20 µm, D50 = 80 µm y D90 = 180 µm. ¿Cuál es el span?",
      answer: 2,
      tolerance: 0.01,
      unit: "",
      explain: "Span = (D90 − D10) / D50 = (180 − 20) / 80 = 160 / 80 = 2. No tiene unidades.",
    },
    {
      kind: "number",
      q: "En un tamizado se recuperan 40,0 g en total y en el tamiz de 250 µm quedan 9,0 g. ¿Qué porcentaje del material ha quedado retenido en ese tamiz?",
      answer: 22.5,
      tolerance: 0.01,
      unit: "%",
      explain: "% retenido = 9,0 / 40,0 × 100 = 22,5 %.",
    },
    {
      kind: "number",
      q: "En un tamizado, el porcentaje retenido acumulado hasta el tamiz de 180 µm (sumando ese tamiz y todos los de encima) es 60,8 %. ¿Qué porcentaje del material pasa por el tamiz de 180 µm?",
      answer: 39.2,
      tolerance: 0.01,
      unit: "%",
      explain: "Lo que pasa es lo que no se ha quedado: 100 − 60,8 = 39,2 %.",
    },
    {
      kind: "number",
      q: "Se ponen 50,0 g de muestra en la torre de tamices y al final se recuperan 48,2 g sumando todos los tamices y el fondo. ¿Qué porcentaje se ha perdido?",
      answer: 3.6,
      tolerance: 0.01,
      unit: "%",
      explain: "Pérdida = 50,0 − 48,2 = 1,8 g. En porcentaje: 1,8 / 50,0 × 100 = 3,6 %. Está por debajo del 5 % que admite el texto armonizado.",
    },
    {
      kind: "number",
      q: "Al calibrar un microscopio, 100 µm del micrómetro de platina ocupan 50 divisiones del ocular. Una partícula ocupa 18 divisiones. ¿Cuánto mide?",
      answer: 36,
      tolerance: 0.01,
      unit: "µm",
      explain: "Cada división vale 100 / 50 = 2 µm. La partícula mide 18 × 2 = 36 µm.",
    },
    {
      kind: "number",
      q: "El volumen de una esfera va con el cubo de su diámetro. ¿Cuántas partículas esféricas de 10 µm hacen falta para tener el mismo volumen que una sola de 50 µm?",
      answer: 125,
      tolerance: 0.001,
      unit: "partículas",
      explain: "(50 / 10) × (50 / 10) × (50 / 10) = 5 × 5 × 5 = 125. Por eso una sola partícula gorda pesa tanto en una distribución en volumen.",
    },
    {
      kind: "choice",
      q: "Según el árbol de decisión n.º 3 de ICH Q6A, ¿en qué caso no hace falta un criterio de tamaño de partícula para el principio activo?",
      options: [
        "Cuando el medicamento es una disolución y el activo va disuelto",
        "Cuando el medicamento es un comprimido de liberación inmediata",
        "Cuando el tamaño afecta a la uniformidad de contenido",
        "Cuando el medicamento es una suspensión oral con activo sin disolver",
      ],
      answer: 0,
      explain: "La primera pregunta del árbol es si el medicamento es sólido o un líquido con el activo sin disolver. Si es una disolución, no se requiere criterio de tamaño.",
    },
    {
      kind: "choice",
      q: "En la difracción láser por vía húmeda, el resultado sale cada vez más fino cuanto más tiempo circula la muestra por la celda. ¿Cuál es la explicación más probable?",
      options: [
        "El láser se calienta y mide las partículas más grandes",
        "Los aglomerados se juntan más con el tiempo en la celda",
        "El dispersante está disolviendo parte del principio activo",
        "La muestra se ha tomado con una sonda metida en ángulo",
      ],
      answer: 2,
      explain: "Si el líquido disuelve el producto, los finos desaparecen y el resto encoge. El medio se elige pensando en la solubilidad del producto.",
    },
    {
      kind: "choice",
      q: "Vas a tomar una muestra de polvo seco de un bidón para el ensayo de tamaño. ¿Qué haces?",
      options: [
        "Golpear la cuchara contra el bote para vaciarla del todo",
        "Usar el útil del procedimiento y tomar cada porción de un solo movimiento",
        "Coger solo de la superficie, que es lo más cómodo y rápido",
        "Agitar el bote de muestra abierto para que se mezcle bien",
      ],
      answer: 1,
      explain: "La guía de muestreo de la OMS pide tomar la cucharada de un solo movimiento y no dar golpecitos a la cuchara, porque eso segrega la muestra.",
    },
    {
      kind: "choice",
      q: "Un lote da D90 = 170 µm con un límite de 150 µm. Un compañero propone mezclarlo con otro lote más fino para que el conjunto cumpla. ¿Qué dice ICH Q7?",
      options: [
        "Es correcto si la mezcla final se analiza y cumple el límite",
        "Es correcto si los dos lotes son del mismo producto y del mismo mes",
        "Es correcto si lo firma el jefe de turno en la hoja de producción",
        "No se mezcla un lote fuera de especificación para que cumpla",
      ],
      answer: 3,
      explain: "ICH Q7 (8.41) prohíbe mezclar lotes fuera de especificación con otros para cumplir la especificación. Se investiga y se decide según el proceso aprobado.",
    },
  ],
};
