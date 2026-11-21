import type { Lesson } from "./types";

export const gravimetriaAFondo: Lesson = {
  slug: "gravimetria-a-fondo",
  level: 6,
  order: 6,
  title: "Gravimetría a fondo: medir pesando, cenizas y residuos",
  titleEn: "Gravimetric analysis in depth: measuring by weighing, sulphated ash and residues",
  minutes: 38,
  summary:
    "Cómo se convierte lo que se quiere medir en algo que se pueda pesar puro, la precipitación paso a paso, el factor gravimétrico con tres cuentas, la pesada a peso constante, las cenizas sulfatadas de un principio activo y lo que dice ICH Q6A, su relación con catalizadores y sales mal lavadas, la mufla y el desecador con seguridad, y los errores que hacen que el resultado salga alto o bajo.",
  body: `
En «Gravimetría: analizar pesando» viste la idea: el resultado sale de pesar. Aquí verás por qué funciona, cómo se hace, de dónde salen las cuentas y qué significa para tu lote un residuo alto. La pérdida por secado y la balanza tienen sus propias lecciones.

### Por qué te importa a ti, que estás en planta
Uno de los resultados de cada lote de principio activo suele ser el **residuo de ignición** o **cenizas sulfatadas** (*residue on ignition*, *sulphated ash*): un número pequeño, de décimas o centésimas por ciento. Si sale alto, la causa suele estar en la planta: una sal mal lavada en la centrífuga o un catalizador que pasó el filtro. Saber cómo se mide te explica por qué te piden la muestra así, por qué tarda y qué pudo pasar si el lote queda retenido.

### La idea: convertir lo que buscas en algo que se pueda pesar puro
La balanza es muy exacta, pero pesa todo lo que hay en el platillo: no distingue el sulfato del agua ni la sal del producto. La gravimetría lo resuelve con química: **transforma lo que quieres medir en una sustancia pura, de fórmula conocida, que se pueda separar y pesar sola**.

Piensa en saber cuánta arena hay en un cubo de agua turbia: cuelas el agua por un trapo, secas lo que queda y lo pesas. Has convertido «arena con agua» en «arena sola y seca», que sí se puede pesar.

**Ventajas:**

- **Es un método absoluto**: el resultado sale de masas y masas molares, sin curva de calibración ni patrón de la misma sustancia, como sí necesita la cromatografía.
- **Es exacta** si se trabaja bien, y el equipo es sencillo: balanza, estufa, mufla, crisoles y desecador.

**Inconvenientes:**

- **Es lenta**: cada calentamiento y enfriamiento lleva su tiempo y hay que repetirlos.
- **Es laboriosa**: una gota que salpica o un crisol mal enfriado cambian el resultado.
- **No es específica**: pesa todo lo que queda, sea lo que sea.

### Gravimetría por precipitación, paso a paso
La forma clásica es la **precipitación** (*precipitation*): se añade un reactivo que forma con lo que buscas un sólido muy poco soluble, que cae al fondo. Dos ejemplos de libro:

- El **sulfato** (SO₄²⁻) de una muestra se precipita con cloruro de bario. El bario y el sulfato forman **sulfato de bario** (BaSO₄), un polvo blanco casi insoluble en agua: Ba²⁺ + SO₄²⁻ da BaSO₄.
- El **cloruro** (Cl⁻) se precipita con nitrato de plata. La plata y el cloruro forman **cloruro de plata** (AgCl), también muy poco soluble: Ag⁺ + Cl⁻ da AgCl.

Los pasos son siempre los mismos:

| Paso | Qué se hace | Para qué |
|---|---|---|
| 1. Disolver | Se pesa la muestra con exactitud y se disuelve | Que todo lo que buscas esté libre en el líquido |
| 2. Precipitar | Se añade el reactivo despacio y con un poco de exceso | Que no quede nada sin reaccionar |
| 3. Digerir (*digestion*) | Se deja reposar el precipitado en caliente un tiempo | Los cristales pequeños crecen y el sólido se filtra mejor y arrastra menos impurezas |
| 4. Filtrar | Se pasa por un papel de filtro especial o un crisol filtrante | Separar el sólido del líquido |
| 5. Lavar | Se lava el sólido con poco líquido, varias veces | Quitar los restos de reactivo y de sales que lo mojan |
| 6. Secar o calcinar | En estufa o en mufla | Quitar el agua y, si hay papel, quemarlo |
| 7. Pesar | Tras enfriar en desecador, hasta peso constante | Tener la masa del sólido puro |

¿Te suena? Es lo que haces en planta: cristalizar en el reactor, separar en la centrífuga o el filtro, lavar la torta y secar. Y como en planta, si la torta no se lava bien, arrastra sales que no son producto.

### El factor gravimétrico, desde cero
Has pesado sulfato de bario, pero te preguntaban por el sulfato. ¿Cuánto sulfato hay dentro? Para eso está el **factor gravimétrico** (*gravimetric factor*). Es como la receta de un bizcocho: si de cada 233 g de bizcocho 96 g son harina, la harina es 96/233 del total. Con las masas molares (lo que pesa un mol, en g/mol) pasa igual, porque en cada BaSO₄ hay exactamente un sulfato:

> Factor = masa molar de lo que buscas / masa molar de lo que pesas, ajustado para que haya el mismo número de átomos del elemento clave arriba y abajo

Masas atómicas que se usan aquí (valores de la tabla periódica): bario 137,327; azufre 32,06; oxígeno 15,999; cloro 35,45; plata 107,868; sodio 22,990.

**Cuenta 1. El factor del sulfato en sulfato de bario.**

1. Sulfato, SO₄: 32,06 + 4 × 15,999 = 96,06 g/mol.
2. Sulfato de bario, BaSO₄: 137,327 + 96,06 = 233,38 g/mol.
3. Factor: 96,06 / 233,38 = **0,4116**. De cada gramo de sulfato de bario que pesas, 0,4116 g son sulfato.

**Cuenta 2. El factor del cloruro en cloruro de plata.**

1. Cloruro de plata, AgCl: 107,868 + 35,45 = 143,32 g/mol.
2. Factor: 35,45 / 143,32 = **0,2474**.

**Cuenta 3. Un análisis completo.** Pesas 0,5000 g de una sal (valor de ejemplo), la disuelves, precipitas el sulfato y, tras filtrar, lavar, calcinar y llegar a peso constante, pesas 0,7680 g de BaSO₄.

1. Sulfato en el precipitado: 0,7680 × 0,4116 = 0,3161 g.
2. Porcentaje en la muestra: 0,3161 / 0,5000 × 100 = **63,22 %** de sulfato.

El sulfato de sodio puro (Na₂SO₄, 142,04 g/mol) tendría 96,06 / 142,04 × 100 = 67,63 %: esta muestra lleva otra cosa dentro. Si te piden el azufre, solo cambia el numerador: 32,06 / 233,38 = 0,1374.

### Pesada a peso constante
Un crisol parece seco, pero lleva una capa finísima de humedad. Si lo pesas así y luego pierde esa humedad al calentarlo con la muestra, esa pérdida se mezcla con el resultado. Por eso crisol vacío y crisol con residuo se llevan a **peso constante** (*constant weight* o *constant mass*): se repite **calentar, enfriar en desecador y pesar** hasta que dos pesadas seguidas casi no se diferencian. Es como escurrir una bayeta: mientras cada pesada sea menor, sigue soltando agua.

**¿Cuánto es «casi lo mismo»?** Lo fija el método o el procedimiento. Como ejemplo de definición oficial, los métodos de la EPA estadounidense para pesar partículas (40 CFR 51, apéndice M) llaman peso constante a una diferencia no mayor de 0,5 mg o del 1 % de la masa neta, la que sea mayor, entre dos pesadas seguidas con al menos seis horas de desecador entre ellas. En esta lección usamos **0,5 mg como valor de ejemplo**.

Tabla de pesadas del crisol vacío (valores de ejemplo):

| Ciclo | Masa del crisol (g) | Diferencia con la anterior (mg) | ¿Peso constante? |
|---|---|---|---|
| 1 | 28,4538 | | |
| 2 | 28,4519 | 1,9 | No: ha perdido más de 0,5 mg |
| 3 | 28,4515 | 0,4 | Sí: 0,4 mg no supera 0,5 mg |

Se toma como tara la última pesada, 28,4515 g. Entre la primera y la tercera hay 2,3 mg: en un ensayo de cenizas con unos 2 mg de residuo, ese error se comería el resultado.

### El desecador: enfriar sin coger humedad
Un crisol caliente no se pesa: el aire que sube desde él falsea la lectura. Pero si se enfría al aire de la sala, coge humedad. El **desecador** (*desiccator*) es un recipiente de vidrio o plástico con tapa ajustada, con un **agente desecante** (*desiccant*) en el fondo que absorbe el agua del aire de dentro. El crisol se enfría ahí, en aire seco. Los métodos de la EPA citados piden, por ejemplo, sulfato de calcio anhidro con indicador de color. La tapa se abre lo justo, porque cada vez entra aire húmedo.

### Residuo de ignición o cenizas sulfatadas en un principio activo
Un principio activo típico es una molécula orgánica, hecha sobre todo de carbono, hidrógeno, oxígeno y nitrógeno. Al quemarse, esos átomos se van como gases. Lo que **no se quema** se queda en el crisol: la parte **inorgánica** (*inorganic*). Por ejemplo:

- **Sales**: sal común que se forma al neutralizar, sulfatos, carbonatos.
- **Restos de catalizador**: metales como el paladio o el níquel que se usan en hidrogenaciones.
- **Sílice** de un coadyuvante de filtración o del desgaste de algún material.
- **Metales** que vienen de los equipos o de las materias primas.

El ensayo, en grandes líneas (cada detalle lo fija el método oficial):

1. Se lleva el crisol vacío a peso constante y se anota su tara.
2. Se pesa en él la muestra con exactitud.
3. Se humedece con un poco de **ácido sulfúrico** y se calienta suave, en vitrina, hasta que dejan de salir humos y la materia orgánica se ha carbonizado.
4. Se calcina en la **mufla** (*muffle furnace*), un horno eléctrico cerrado. En el ejemplo de esta lección, a 600 °C (valor de ejemplo: la temperatura la fija el método).
5. Se enfría en desecador y se pesa; se repite hasta peso constante.

**¿Por qué ácido sulfúrico?** Sin él, lo que queda depende de la forma de cada resto: un cloruro, un carbonato o un óxido pesan distinto y algunos cambian con el calor. El ácido los convierte en **sulfatos**, una sola forma química estable a la temperatura del ensayo, y así el resultado es repetible. Lo que pesas no es la sal original sino su sulfato. Por ejemplo, la sal común se convierte en sulfato de sodio: 2 NaCl + H₂SO₄ da Na₂SO₄ + 2 HCl. Como 2 × 58,44 = 116,88 g de NaCl dan 142,04 g de Na₂SO₄, cada miligramo de sal común deja 142,04 / 116,88 = 1,22 mg de ceniza.

### Qué dicen las guías ICH
- **ICH Q6A** (especificaciones de nuevos principios activos, 1999), apartado 3.3.1, entre los ensayos específicos: la necesidad de incluir ensayos y criterios para las **impurezas inorgánicas** (por ejemplo, catalizadores) debe estudiarse durante el desarrollo, basándose en el conocimiento del proceso de fabricación. Los procedimientos y criterios de aceptación del **residuo de ignición o cenizas sulfatadas** deben seguir los precedentes de las farmacopeas. Otras impurezas inorgánicas pueden determinarse con otros procedimientos adecuados, por ejemplo espectroscopia de absorción atómica.
- **ICH Q4B, anexo 1(R1)** (versión de la FDA, 2017): declara intercambiables los textos de las farmacopeas europea, japonesa y estadounidense para este ensayo con dos condiciones: salvo que la monografía diga otra cosa, se elige una muestra, típicamente de **1 a 2 gramos**, que dé un residuo medible con exactitud pesando, **típicamente 1 miligramo**; y la mufla debe estar calibrada según las GMP. No fija límites: los pone cada monografía o especificación.

### La cuenta del residuo, con tres pasos
Valores de ejemplo, con la tara de la tabla anterior:

| Pesada | Masa (g) |
|---|---|
| Crisol vacío a peso constante | 28,4515 |
| Crisol con muestra | 30,4527 |
| Crisol con residuo, tras calcinar a peso constante | 28,4534 |

**Cuenta 1. Residuo en porcentaje.**

1. Masa de muestra: 30,4527 − 28,4515 = 2,0012 g.
2. Masa del residuo: 28,4534 − 28,4515 = 0,0019 g (1,9 mg).
3. Residuo: 0,0019 / 2,0012 × 100 = **0,095 %**.

**Cuenta 2. Comparación con un límite de ejemplo.** Si la especificación del producto dijera «no más del 0,1 %» (valor de ejemplo), 0,095 % **cumple**, pero por poco. Con 1,5 g de muestra, ese mismo límite equivale a un residuo máximo de 1,5 × 0,001 = 0,0015 g, es decir, 1,5 mg.

**Cuenta 3. Qué masa de muestra hace falta.** El residuo tiene que ser lo bastante grande para que la balanza lo pese con exactitud: según ICH Q4B, típicamente 1 mg. Si el límite es 0,1 %, ¿cuánta muestra hace falta para que una muestra justo en el límite deje 1 mg?

1. 0,1 % es 0,001 en tanto por uno.
2. Masa de muestra = residuo deseado / fracción = 0,001 g / 0,001 = **1 g**.

Con un límite de 0,05 % harían falta 2 g. Por eso el laboratorio pide muestra suficiente: con poca, el residuo es del tamaño del error de la pesada (recuerda el peso mínimo de «Balanzas y pesada a fondo»).

### Relación con las impurezas elementales y con tu planta
**ICH Q3D(R2)** (impurezas elementales, 2022) dice que pueden venir de catalizadores añadidos en la síntesis, de los equipos, del agua o de los envases, que no aportan beneficio al paciente y deben controlarse, y que, salvo justificación, el ensayo sea **específico para cada elemento**. Q3D no habla de cenizas, y las cenizas no son específicas: dan el inorgánico total, no si es paladio, níquel o sal. Son una alarma general.

Ejemplo (valores de ejemplo): 2 g de producto con un 0,05 % de sal sin lavar son 1,0 mg de NaCl, que dejan 1,22 mg de ceniza: un residuo de 0,061 %.

**Qué haces tú** si un lote da cenizas altas:

- **No repites nada por tu cuenta** ni tomas otra muestra «para ver si sale mejor». ICH Q7 (11.15) pide que todo resultado fuera de especificación se investigue y documente según un procedimiento, y que cualquier nuevo muestreo o nuevo análisis se haga según un procedimiento escrito.
- **Remites lo que sabes** a tu responsable: cómo fue el lavado de la torta (volumen, tiempos, el control que marque tu hoja), si el filtro del catalizador dio problemas o si hubo un incidente en la descarga.
- **Anotas los hechos en la hoja**, sin reescribir nada.

### Otros ensayos gravimétricos habituales
La misma idea, «pesar lo que queda», sirve para más cosas:

- **Residuo de evaporación de un disolvente** (*residue on evaporation*): se evapora un volumen de disolvente en un recipiente tarado y se pesa lo que queda. Mide la suciedad no volátil que trae el disolvente. Los métodos de la EPA citados evaporan 150 mL de la acetona de lavado en vitrina, desecan, pesan a peso constante y exigen menos de una parte por millón en peso de residuo; avisan de que la acetona de envase metálico probablemente dará un residuo alto. Ejemplo de cuenta (valores de ejemplo): 0,09 mg de residuo en 118,5 g de disolvente son 0,00009 / 118,5 × 1 000 000 = 0,76 ppm.
- **Materia insoluble** (*insoluble matter*): se disuelve la muestra, se filtra por un filtro tarado y se pesa lo que no se ha disuelto, como fibras o partículas.
- **Gravimetría por volatilización**: se mide lo que se pierde al calentar. La pérdida por secado es de este tipo; la ves en la lección de Karl Fischer a fondo.

### Equipos y seguridad
**La mufla.** Trabaja a cientos de grados. La NTP 433 del INSST recuerda que los dispositivos de calefacción del laboratorio tienen como riesgo principal las **quemaduras térmicas**, y la NTP 672 indica que los humos y gases calientes de las muflas pueden retirarse con una pequeña campana sobre ellas. En la práctica: crisoles siempre con **pinzas** largas, **guantes de protección térmica**, abrir la puerta despacio apartando la cara y dejar el crisol sobre una placa resistente al calor antes del desecador. Manda el manual del fabricante y el procedimiento.

**Los crisoles.** Los de **porcelana** son baratos y resisten el calor, pero son frágiles ante los cambios bruscos de temperatura. Los de **platino** son caros y casi no reaccionan con nada. Cada crisol se identifica para no confundir taras.

**El desecador.** La NTP 464 pide colocarlos donde no reciban golpes ni caídas y fuera del sol, y si se usan con vacío, protegerlos con una red o material resistente comprobado, no transportarlos nunca con vacío y poner un frasco de seguridad entre el desecador y la trompa de vacío.

**El ácido sulfúrico.** Concentrado, el reglamento CLP lo clasifica como corrosivo para la piel de categoría 1A, con la indicación H314: «Provoca quemaduras graves en la piel y lesiones oculares graves». Al calentar la muestra con él salen humos blancos que no se deben respirar. La NTP 433 indica que las operaciones con productos peligrosos, como los ácidos, deben hacerse en **vitrinas** adecuadas. Guantes resistentes al ácido (la NTP 464 recomienda PVC o policloropreno para trasvasar ácidos y bases, comprobando siempre que sean impermeables al producto), gafas o pantalla y bata.

**Si hay una quemadura térmica**, la NTP 432 indica lavar con abundante agua fría, no quitar la ropa pegada a la piel y tapar la zona con ropa limpia, y avisar según el plan del laboratorio.

### Fuentes de error y en qué sentido mueven el resultado
| Error | Qué pasa | Efecto en el residuo |
|---|---|---|
| Crisol no llevado a peso constante antes de usarlo | Durante la calcinación pierde su propia humedad, y esa pérdida se resta del residuo | **Bajo**, incluso negativo. Con la primera pesada (28,4538 g) como tara: (28,4534 − 28,4538) / 2,0012 × 100 = −0,02 % |
| Crisol enfriado fuera del desecador | Coge humedad del aire antes de pesar | **Alto**. Con 0,6 mg de agua de más: 2,5 / 2001,2 × 100 = 0,125 %, y el lote que cumplía pasa a no cumplir |
| Salpicaduras al calentar con el ácido | Se pierde parte de la muestra o del residuo fuera del crisol | **Bajo** |
| Calcinación incompleta | Queda carbón negro sin quemar, que pesa | **Alto**. Un residuo gris o negro es señal de alarma |
| Crisoles confundidos | Se usa la tara de otro crisol | Cualquiera: el resultado no vale |

Por eso el analista anota cada pesada al momento con el número de crisol, y por eso el ensayo tarda: mufla, enfriamientos y repeticiones hasta peso constante.

En planta y en el laboratorio manda siempre el procedimiento vigente (SOP): los tiempos, temperaturas, masas y límites de esta lección son de ejemplo salvo que se diga de dónde salen.
`,
  plant: `
En la planta ficticia se fabrica el intermedio VX-48 en el reactor R-205. La última etapa neutraliza con sosa una mezcla ácida, y en la neutralización se forma sal común disuelta. El producto cristaliza, se separa en la centrífuga CF-310 y la torta se lava con agua hasta que el control de la hoja de producción da el valor fijado. Luego se seca en el secadero SD-420.

El lote VX-48/0912 da en el laboratorio unas cenizas sulfatadas de 0,16 % frente a un límite de ejemplo de no más del 0,1 %. El laboratorio abre la investigación del resultado fuera de especificación.

Luis, el operador del turno de noche, recibe la pregunta del jefe de turno: ¿pasó algo en el lavado? Luis no toma otra muestra ni propone repetir nada. Revisa su hoja: el lavado se hizo con el volumen previsto, pero anotó en su momento que la centrífuga tuvo una parada por vibración a mitad del lavado y que, al rearrancar, la torta estaba agrietada. Una torta agrietada deja pasar el agua de lavado por las grietas, sin atravesar el sólido, y la sal se queda dentro.

Esa anotación, hecha en el momento, es clave para la investigación. El laboratorio confirma que su análisis fue correcto: crisoles a peso constante, enfriados en desecador y residuo blanco, bien calcinado. Calidad decide el destino del lote según el procedimiento de desviaciones. Para evitar que se repita, se revisa cómo actuar ante una parada de la centrífuga durante el lavado.
`,
  batchRecord: `
- **Datos de lavado de la torta** (centrífuga o filtro): volumen de agua o disolvente de lavado, número de lavados, tiempos y el control de fin de lavado que marque la hoja (por ejemplo, conductividad del agua de salida). Son los datos que la investigación mirará si las cenizas salen altas.
- **Incidencias durante el lavado o la filtración**: paradas, vibraciones, torta agrietada, filtro de catalizador con pérdida de presión anómala. Se anotan en el momento, con hora y firma.
- **Toma de muestra para el análisis final**: punto, cantidad y recipiente según el procedimiento. El laboratorio necesita cantidad suficiente, porque el ensayo de cenizas usa típicamente 1 a 2 g por determinación.
- **Resultado del certificado de análisis**: «Residuo de ignición / cenizas sulfatadas: 0,05 %; especificación: no más del 0,1 %» (valores de ejemplo). Tú no lo calculas; lo ves en el estado del lote.
- **Si el lote queda retenido por un resultado fuera de especificación**: no se recalcula, no se repite la muestra por iniciativa propia y no se corrige nada en la hoja. Se informa y se aportan los datos a la investigación.
`,
  terms: [
    { es: "Gravimetría", en: "Gravimetric analysis", def: "Análisis en el que el resultado sale de pesar una sustancia pura de fórmula conocida." },
    { es: "Precipitado", en: "Precipitate", def: "Sólido poco soluble que se forma al añadir un reactivo y que se separa del líquido para pesarlo." },
    { es: "Digestión del precipitado", en: "Digestion", def: "Reposo en caliente del precipitado para que sus cristales crezcan y se filtre mejor." },
    { es: "Factor gravimétrico", en: "Gravimetric factor", def: "Cociente entre la masa molar de lo que se busca y la de lo que se pesa; pasa de una masa a la otra." },
    { es: "Peso constante", en: "Constant weight / constant mass", def: "Situación en la que dos pesadas seguidas, tras calentar y enfriar, no difieren más que el valor fijado por el método." },
    { es: "Desecador", en: "Desiccator", def: "Recipiente cerrado con desecante donde se enfrían los crisoles sin que cojan humedad." },
    { es: "Desecante", en: "Desiccant", def: "Sólido que absorbe el agua del aire dentro del desecador." },
    { es: "Mufla", en: "Muffle furnace", def: "Horno eléctrico cerrado que alcanza cientos de grados para calcinar muestras." },
    { es: "Crisol", en: "Crucible", def: "Recipiente de porcelana, platino u otro material resistente al calor donde se calcina la muestra." },
    { es: "Calcinar", en: "To ignite", def: "Calentar a temperatura muy alta hasta quemar toda la materia orgánica." },
    { es: "Cenizas sulfatadas / residuo de ignición", en: "Sulphated ash / residue on ignition", def: "Residuo inorgánico que queda tras tratar la muestra con ácido sulfúrico y calcinarla, expresado en porcentaje." },
    { es: "Impurezas inorgánicas", en: "Inorganic impurities", def: "Sales, catalizadores, metales y otros restos que no forman parte de la molécula orgánica." },
    { es: "Residuo de evaporación", en: "Residue on evaporation", def: "Lo que queda al evaporar un disolvente; mide su suciedad no volátil." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Calcula el factor gravimétrico del cloruro en cloruro de plata. Masas atómicas: plata 107,87 y cloro 35,45.",
      answer: 0.2474,
      tolerance: 0.002,
      unit: "",
      explain: "Masa molar del AgCl: 107,87 + 35,45 = 143,32 g/mol. Factor: 35,45 / 143,32 = 0,2474.",
    },
    {
      kind: "number",
      q: "Pesas 1,1675 g de sulfato de bario. Con un factor gravimétrico de 0,4116, ¿cuántos gramos de sulfato contiene?",
      answer: 0.4805,
      tolerance: 0.002,
      unit: "g",
      explain: "Sulfato = 1,1675 × 0,4116 = 0,4805 g.",
    },
    {
      kind: "number",
      q: "Una muestra de 0,3000 g da 0,4305 g de cloruro de plata. Con un factor de 0,2474, ¿qué porcentaje de cloruro tiene la muestra?",
      answer: 35.5,
      tolerance: 0.005,
      unit: "%",
      explain: "Cloruro: 0,4305 × 0,2474 = 0,1065 g. Porcentaje: 0,1065 / 0,3000 × 100 = 35,5 %.",
    },
    {
      kind: "number",
      q: "Un crisol pesa 31,2046 g, 31,2039 g y 31,2036 g en tres ciclos seguidos de calcinación y desecador. ¿Cuántos miligramos de diferencia hay entre las dos últimas pesadas?",
      answer: 0.3,
      tolerance: 0.01,
      unit: "mg",
      explain: "31,2039 − 31,2036 = 0,0003 g = 0,3 mg. Con el criterio de ejemplo de 0,5 mg, el crisol ya está a peso constante.",
    },
    {
      kind: "number",
      q: "Crisol vacío a peso constante: 25,1204 g. Crisol con muestra: 27,1220 g. Crisol con residuo tras calcinar: 25,1236 g. ¿Cuál es el residuo de ignición en %?",
      answer: 0.16,
      tolerance: 0.01,
      unit: "%",
      explain: "Muestra: 27,1220 − 25,1204 = 2,0016 g. Residuo: 25,1236 − 25,1204 = 0,0032 g. Porcentaje: 0,0032 / 2,0016 × 100 = 0,16 %.",
    },
    {
      kind: "number",
      q: "El límite de cenizas es 0,1 % y se pesan 1,5 g de muestra. ¿Cuál es el residuo máximo, en miligramos, para que el lote cumpla?",
      answer: 1.5,
      tolerance: 0.01,
      unit: "mg",
      explain: "1,5 g × 0,001 = 0,0015 g = 1,5 mg.",
    },
    {
      kind: "number",
      q: "El límite de cenizas sulfatadas es 0,05 % y quieres que una muestra justo en el límite deje 1 mg de residuo. ¿Cuántos gramos de muestra necesitas?",
      answer: 2,
      tolerance: 0.01,
      unit: "g",
      explain: "0,05 % es 0,0005. Masa = 0,001 g / 0,0005 = 2 g.",
    },
    {
      kind: "choice",
      q: "Llega el resultado de tu lote: cenizas sulfatadas fuera de especificación. Recuerdas que la torta se agrietó durante el lavado en la centrífuga. ¿Qué haces?",
      options: [
        "Tomo otra muestra del saco del lote y la llevo al laboratorio a repetir",
        "Informo a mi responsable y aporto lo que anoté del lavado en la hoja",
        "Corrijo en la hoja el volumen de lavado para que cuadre con el resultado",
        "No digo nada: el resultado es cosa del laboratorio y no de la planta",
      ],
      answer: 1,
      explain: "ICH Q7 pide investigar todo resultado fuera de especificación según un procedimiento; repetir por iniciativa propia o tocar la hoja no se hace. Tu anotación del lavado es un dato clave.",
    },
    {
      kind: "choice",
      q: "Un analista con prisa deja enfriar el crisol con el residuo sobre la mesa, fuera del desecador, antes de pesarlo. ¿Qué le pasa al resultado?",
      options: [
        "Sale más bajo, porque el crisol pierde peso al enfriarse al aire libre",
        "No cambia, porque el residuo inorgánico ya no puede absorber nada",
        "Cambia al azar, a veces más alto y a veces más bajo, sin tendencia",
        "Sale más alto, porque el crisol y el residuo cogen humedad del aire",
      ],
      answer: 3,
      explain: "Al enfriarse al aire de la sala, crisol y residuo absorben humedad y pesan más: el residuo sale falsamente alto y un lote bueno puede parecer fuera de especificación.",
    },
    {
      kind: "choice",
      q: "¿Por qué se humedece la muestra con ácido sulfúrico antes de calcinarla en el ensayo de cenizas sulfatadas?",
      options: [
        "Para convertir los restos inorgánicos en sulfatos, una forma única y estable",
        "Para que la muestra se queme más deprisa y el ensayo dure menos horas",
        "Para disolver el crisol y que el residuo se pueda pesar sin su tara",
        "Para eliminar los metales del catalizador y que no cuenten en el residuo",
      ],
      answer: 0,
      explain: "Cloruros, carbonatos u óxidos pesan distinto y algunos cambian con el calor; al pasarlos todos a sulfatos el resultado es repetible. Por eso se llaman cenizas sulfatadas.",
    },
  ],
};
