import type { Lesson } from "./types";

export const calculoDeResultadosAFondo: Lesson = {
  slug: "calculo-de-resultados-a-fondo",
  level: 6,
  order: 9.5,
  title: "Cálculo y expresión de resultados a fondo: cifras significativas, redondeo, base seca y comparación con la especificación",
  titleEn: "Calculating and reporting results in depth",
  minutes: 36,
  summary:
    "Por qué un resultado no puede saber más que su dato peor medido, cómo y cuándo se redondea (con los casos frontera), en qué se expresa un resultado (% m/m, ppm, tal cual, base seca o anhidra), la cadena completa de un análisis con patrón, réplicas y RSD, qué significa «cumple» frente a un límite, la incertidumbre en sencillo y qué anota el operador cuando recibe un control en proceso.",
  body: `
En «Cálculo y expresión de resultados» viste la media, la RSD, el redondeo y las unidades. Aquí verás por qué esas reglas son así, dónde está la trampa de cada una y cómo se juntan en un resultado.

### Del número de la pantalla al número del certificado
Un resultado de laboratorio casi nunca sale directo de un aparato. Es una cadena: se **miden** masas, volúmenes y áreas; se **calcula** con ellos; se **corrige** si el método lo pide (agua, pureza del patrón, diluciones); se **redondea** una sola vez y se **compara** con el límite. Si un paso falla, el número final puede pasar de «cumple» a «no cumple», o al revés.

### Cifras significativas: lo que el número dice que sabes
Un número medido también dice **cuánto lo conoces**. Las **cifras significativas** (*significant figures*) son las cifras que llevan información de verdad. El manual de laboratorio de la FDA (*ORA Laboratory Manual*, volumen III, sección 4, revisión de octubre de 2022) da las reglas:

- Toda cifra distinta de cero es significativa.
- La primera significativa es la primera distinta de cero empezando por la izquierda.
- Si hay coma decimal, la última significativa es la del final, sea cero o no.
- Se cuentan todas las que hay entre la primera y la última.

| Número | Cifras significativas | Por qué |
|---|---|---|
| 12,3 mg | 3 | Tres cifras distintas de cero |
| 12,30 mg | 4 | El cero final tras la coma cuenta: dice «sé la centésima» |
| 0,0250 g | 3 | Los ceros de la izquierda solo colocan la coma |
| 100,02 % | 5 | Los ceros entre cifras cuentan |

El mismo manual explica la idea de fondo: **el resultado final nunca debe tener más cifras significativas que el dato menos preciso** con el que se calculó. Una calculadora te da diez decimales; eso no significa que los sepas.

Dos reglas prácticas, del mismo manual:

- **Sumar y restar**: el resultado lleva **los decimales del dato con menos decimales**. Valores de ejemplo: cargas 1250 kg de agua medidos en una báscula que muestra kilos enteros, más 2,35 kg y 0,125 kg de dos aditivos. La calculadora da 1252,475 kg, pero el total se expresa **1252 kg**: el agua no se conoce mejor que el kilo.
- **Multiplicar y dividir**: el resultado lleva **las cifras significativas del dato que menos tiene**.

**Cuenta 1. El dato peor medido manda (valores de ejemplo).** En una valoración se encuentran 248,96 mg de producto en la muestra pesada.

- Si la muestra se pesó en una balanza analítica y marcó **0,2503 g**, el valor real está entre 0,25025 y 0,25035 g. La riqueza queda entre 99,44 y 99,48 %: se puede dar con un decimal, **99,5 %**.
- Si se pesó en una balanza que solo marca centésimas y dio **0,25 g**, el valor real puede estar entre 0,245 y 0,255 g. La riqueza queda entre **97,6 y 101,6 %**. La calculadora dirá 99,584 %, pero el número no vale para comparar con un límite de 98,0 a 102,0 %.

Por eso cada método dice con qué balanza se pesa. El manual de la FDA, resumiendo la farmacopea de Estados Unidos (USP), lo dice así para las valoraciones: todos los datos, como las pesadas, se miden con una precisión acorde con la que pide el propio método.

### Redondear una sola vez, al final y a los decimales del límite
La regla de redondeo (*rounding*) del manual de la FDA tiene dos partes:

1. Durante el cálculo se guarda **una cifra de más** y solo se redondea el resultado final. Si la cuenta la hace un programa validado, guarda todas; lo que no se hace es redondear a mano a mitad de la cuenta.
2. Al redondear se mira la cifra que sobra: si es **menor que 5, se quita**; si es **5 o mayor, se quita y la anterior sube uno**.

¿A cuántos decimales? A **los mismos que tiene el límite**. Si el límite es 90,0–110,0 %, con un decimal. Para impurezas, la guía ICH Q3A(R2) pide dos decimales por debajo del 1,0 % y uno desde el 1,0 %, con las reglas convencionales. Lo viste en [Especificaciones a fondo](/leccion/especificaciones-a-fondo).

**Cuenta 2. El caso frontera (valores de ejemplo).** El secado de un producto tiene un límite de pérdida por secado de «no más de 0,5 %». Mira qué pasa con varios resultados calculados y, al lado, con el mismo límite escrito como 0,50 %:

| Calculado | Con límite 0,5 % (un decimal) | Con límite 0,50 % (dos decimales) |
|---|---|---|
| 0,49 % | 0,5 %: cumple | 0,49 %: cumple |
| 0,54 % | 0,5 %: cumple | 0,54 %: no cumple |
| 0,546 % | 0,5 %: cumple | 0,55 %: no cumple |
| 0,55 % | 0,6 %: no cumple | 0,55 %: no cumple |

Tres ideas:

- **El límite incluye su extremo.** 0,49 % se expresa 0,5 %, y 0,5 % no supera 0,5 %. El manual de la FDA lo explica con la USP: un límite incluye sus extremos y todo lo de en medio, y se aplica **después** de redondear. Su propio ejemplo: con un límite de 0,2 %, un 0,24 % se expresa 0,2 % y cumple; un 0,25 % se expresa 0,3 % y no cumple.
- **Los decimales del límite cambian la decisión.** 0,54 % cumple «no más de 0,5 %» y no cumple «no más de 0,50 %». Quien calcula no la cambia.
- **Se redondea una vez.** Si redondeas 0,546 primero a 0,55 y luego a 0,5, te sale 0,6 y «no cumple». Lo correcto es ir directo de 0,546 a un decimal: 0,5. El doble redondeo puede subir un número que no debía subir.

**Cuenta 3. Redondear antes de tiempo (valores de ejemplo).** Especificación de riqueza: 98,0–102,0 % sobre sustancia anhidra. La riqueza tal cual sale 97,52 % y el agua por Karl Fischer, 0,44 %.

- Bien hecho: 97,52 × 100 / (100 − 0,44) = 97,951, que se expresa **98,0 %: cumple**.
- Redondeando antes: 97,5 × 100 / (100 − 0,4) = 97,892, que se expresa **97,9 %: no cumple**.

Los mismos datos, dos conclusiones.

**Una nota para quien programa.** Los ordenadores guardan los decimales en binario y muchos no son exactos. En Python, round(2.675, 2) da 2,67 (se guarda como 2,67499999…) y round(2.5) da 2; en JavaScript, (1.005).toFixed(2) da «1.00». Ninguno sigue la regla de «5 o mayor, sube». Por eso los programas del laboratorio se validan: hay que demostrar que redondean como dice el procedimiento.

### En qué se expresa un resultado
**Porcentaje en masa** (% m/m, a veces escrito % p/p): gramos de lo que se busca por cada 100 g de muestra. Es lo normal para la riqueza, el agua y las impurezas de un sólido.

**Partes por millón** (*parts per million*, ppm): gramos por cada millón de gramos. Es lo mismo que microgramos por gramo (µg/g) o miligramos por kilo (mg/kg). Como 1 % son 10000 ppm:

- 0,035 % × 10000 = 350 ppm.
- 412 ppm / 10000 = 0,0412 %.

Se usan para lo que hay muy poco. La guía ICH Q3C(R8) da, por ejemplo, 890 ppm para el tolueno y 3000 ppm para el metanol. Un tolueno de 412 ppm (valor de ejemplo) cumple con margen.

**Tal cual, base seca y base anhidra.** Un sólido lleva algo de agua o de disolvente. Ese «mojado» no es producto, así que la especificación dice sobre qué se expresa el resultado:

| Expresión | Sobre qué | Con qué se corrige |
|---|---|---|
| Tal cual (*as is*) | La muestra como llega, con su agua | No se corrige |
| Base seca (*dried basis*) | Como si no tuviera nada volátil | Pérdida por secado (*loss on drying*, LOD) |
| Base anhidra (*anhydrous basis*) | Como si no tuviera agua | Agua por Karl Fischer |

La fórmula es la misma, una regla de tres: **corregido = tal cual × 100 / (100 − % de LOD o de agua)**.

**Cuenta 4. La misma muestra, tres números (valores de ejemplo).** Riqueza tal cual 97,9 %; LOD 1,2 %; agua por Karl Fischer 0,3 %.

- Base seca: 97,9 × 100 / 98,8 = 99,089, que se expresa **99,1 %**.
- Base anhidra: 97,9 × 100 / 99,7 = 98,195, que se expresa **98,2 %**.

La diferencia entre LOD y Karl Fischer es disolvente: el LOD lo cuenta y el Karl Fischer no ([El agua en la muestra a fondo](/leccion/karl-fischer-a-fondo)). Usar una corrección en lugar de la otra da un resultado que no se compara con la especificación. Y la corrección sube también las impurezas: 0,144 % tal cual con un LOD del 3,0 % son 0,148 % en base seca, que se expresa 0,15 %.

### La cadena completa: un análisis con patrón
Todo junto, en una riqueza por HPLC con **patrón externo** (*external standard*) y valores de ejemplo. La fórmula está en [Cromatografía a fondo](/leccion/cromatografia-a-fondo); aquí interesa cada dato.

**Paso 1. ¿El sistema repite?** Se inyecta el patrón seis veces. Áreas: 1204310 · 1201870 · 1206540 · 1203120 · 1199980 · 1205260.

- Media: 7221080 / 6 = **1203513,3**.
- Desviaciones respecto a la media, al cuadrado y sumadas: 28185933.
- Entre n − 1 = 5: 5637187. Raíz cuadrada: desviación estándar **s = 2374,3**.
- RSD = 2374,3 / 1203513,3 × 100 = 0,197, que se expresa **0,20 %**.

Si dividieras entre n (6) en lugar de n − 1, saldría 0,18 %. El manual de la FDA explica que con una muestra de medidas se divide entre n − 1; entre n solo si se ha medido la población entera, algo raro en un laboratorio. Una hoja de cálculo puede usar una u otra: el método dice cuál. La forma de calcular s la tienes paso a paso en [Metrología a fondo](/leccion/metrologia-a-fondo).

**Paso 2. La riqueza del patrón.** El patrón no es puro al 100 %: su certificado le asigna una riqueza, aquí **99,6 %**, y dice cómo usarla. Ese número entra multiplicando. Olvidarlo sube el resultado medio punto.

**Paso 3. Las diluciones.** El patrón se pesa (25,12 mg) en 50 mL y se diluyen 5 mL a 50 mL: factor de dilución 10. Concentración final: 25,12 / 50 / 10 = **0,05024 mg/mL**. La muestra se pesa (50,38 mg) en 100 mL y se diluyen 5 mL a 50 mL: factor 10. Concentración final: **0,05038 mg/mL**.

**Paso 4. El cálculo.** Área media de dos inyecciones de la muestra: 1202670.

> riqueza tal cual = (1202670 / 1203513,3) × (0,05024 / 0,05038) × 99,6 = 0,99930 × 0,99722 × 99,6 = 99,254

**Paso 5. Corrección y redondeo.** Con un LOD de 0,3 %: 99,254 × 100 / 99,7 = 99,552, que se expresa **99,6 % en base seca**. Se calculó con todo y se redondeó una vez.

Dos errores y lo que hacen (calculados con los mismos datos):

| Error | Resultado |
|---|---|
| Olvidar la riqueza del patrón | 100,5 % en base seca en vez de 99,6 % |
| Tomar la muestra como si estuviera en 50 mL y no en 100 mL | 49,6 % tal cual: la mitad |

El primero es pequeño y pasa desapercibido. Por eso ICH Q7 (6.60) pide que el registro del laboratorio guarde todos los cálculos, con sus unidades y factores de conversión, y la firma de una segunda persona que revisa los datos originales.

### Las réplicas: cuándo su media es el resultado
La guía ICH Q2(R2) define el **resultado notificable** (*reportable result*): el que da el procedimiento analítico después del cálculo y de aplicar las réplicas que el propio procedimiento describe. La guía de la FDA sobre resultados fuera de especificación (2022) pone el ejemplo: en un HPLC se promedian las áreas de dos o tres inyecciones seguidas del mismo vial, y eso es un ensayo y un resultado. El método escrito dice cuántas réplicas y cuánto pueden diferir; si difieren más, los resultados no se usan.

Lo que no vale es promediar para tapar: juntar un resultado fuera de especificación con sus repeticiones para que la media cumpla. Lo tienes con sus cuentas en [Resultados fuera de especificación (OOS) a fondo](/leccion/oos-a-fondo).

### Comparar con la especificación
La guía ICH Q6A define la **especificación** (*specification*) como una lista de ensayos, referencias a los procedimientos analíticos y **criterios de aceptación** (*acceptance criteria*) apropiados, que son límites numéricos, intervalos u otros criterios. **Cumplir la especificación** quiere decir que el producto, analizado con esos procedimientos, cumple esos criterios.

Cómo se leen los límites:

- **«No más de 0,10 %»** (*not more than*, NMT, abreviatura que usan las guías ICH): el resultado redondeado tiene que ser 0,10 % o menos. 0,104 % se expresa 0,10 %: cumple. 0,105 % se expresa 0,11 %: no cumple. En un ejemplo de ICH Q3A, un 0,0963 % se informa como 0,10 % y no supera un umbral del 0,10 %.
- **«No menos de 95,0 %»** (*not less than*): 94,95 % se expresa 95,0 %: cumple; 94,94 % se expresa 94,9 %: no cumple. Es un ejemplo del manual de la FDA.
- **Un intervalo, «98,0–102,0 %»**: los dos extremos cuentan como dentro.

**Cumple o no cumple, y además el número.** La conclusión va acompañada del valor. ICH Q3A pide que, en el expediente de registro, los resultados de impurezas de los lotes se den con su número y no con palabras generales como «cumple». Un «cumple» solo no deja ver si el lote va justo.

### La incertidumbre, en sencillo
El vocabulario internacional de metrología (VIM, JCGM 200) define la **incertidumbre de medida** (*measurement uncertainty*) como un parámetro que caracteriza la dispersión de los valores que se pueden atribuir a lo que se mide. Dicho fácil: **la duda razonable** que queda después de medir bien. El mismo VIM explica que un resultado se expresa en general con un valor y su incertidumbre, aunque a menudo se da solo el valor si la duda es despreciable para su uso.

Valores de ejemplo: riqueza 98,1 %, límite 98,0–102,0 %, y el laboratorio sabe que su método tiene una incertidumbre de ± 0,6 %. El valor verdadero podría estar entre 97,5 y 98,7 %. ¿Qué se hace?

- **Se informa 98,1 % y cumple.** Los límites ya tienen en cuenta la variación normal del método; cómo se calcula la incertidumbre y por qué está en [Metrología a fondo](/leccion/metrologia-a-fondo).
- **No se repite para «mejorarlo».** Repetir hasta que salga mejor es lo que la FDA llama analizar hasta que cumpla (*testing into compliance*), y no se acepta.
- **Pero no se ignora.** La guía de la FDA dice que un resultado de riqueza bajo, aunque dentro de especificación, también debe preocupar y pide prudencia al decidir sobre el lote. Calidad lo mira y puede investigar la tendencia.

Un resultado cerca del límite no se arregla con la calculadora ni con un redondeo creativo: se informa como es.

### Errores típicos y cómo se evitan
| Error | Qué pasa | Cómo se evita |
|---|---|---|
| Redondear a mitad de cuenta | Cambia la conclusión (cuenta 3) | Calcular con todo y redondear al final, una vez |
| Doble redondeo | 0,546 acaba en 0,6 | Ir directo a los decimales del límite |
| Más decimales que el límite | 0,54 frente a «0,5» no se compara igual | Los decimales los fija la especificación |
| Promediar para esconder un OOS | La media cumple y un resultado no | Solo las réplicas que dice el método |
| Mezclar unidades | Un 0,0412 se lee como 412 | Escribir siempre la unidad: %, ppm, mg/kg |
| Olvidar la base seca o anhidra | Riqueza baja que no es real | Leer «sobre qué» en la especificación |
| Usar LOD donde va Karl Fischer | Se resta disolvente como si fuera agua | La corrección la dice el método |
| Olvidar la riqueza del patrón o un factor | Error pequeño escondido o error enorme | Hoja de cálculo validada y segunda revisión |

### Lo que te toca a ti: el control en proceso
ICH Q7 define el **control en proceso** (*in-process control*, IPC) como las comprobaciones durante la producción para vigilar el proceso y, si hace falta, ajustarlo, o para asegurar que el producto cumplirá su especificación. Dice también que los puede hacer personal de producción cualificado, que el proceso se puede ajustar sin aprobación previa de calidad solo dentro de límites ya aprobados por calidad, y que todos los ensayos y resultados se documentan en la hoja de producción.

Cuando te llega un IPC, como la pérdida por secado de tu secadero:

- **El número es el resultado notificable** que da el método, con sus decimales y su unidad. Tú no lo calculas ni lo redondeas.
- **Lo copias tal cual**: si el informe dice 0,5 %, escribes 0,5 %; si dice 0,47 %, escribes 0,47 %. Ni quitas ni añades cifras.
- **Si lo mides tú** con un instrumento de planta, escribes lo que marca la pantalla, en el momento (ICH Q7 pide registrar las actividades cuando se hacen) y con su unidad.
- **Anotas también** la muestra, la hora, el número del informe y lo que dice la hoja que hagas: seguir secando, descargar o avisar.
- **Si no cuadra**, no lo «corriges»: avisas.

ICH Q7 añade que un IPC hecho para vigilar o ajustar el proceso normalmente no necesita una investigación de resultado fuera de especificación: la hoja ya dice qué hacer. El análisis final del lote sí sigue todas las reglas de esta lección.

En planta manda siempre el procedimiento vigente (SOP): él dice qué decimales, qué base y qué regla de redondeo valen para cada ensayo.
`,
  plant: `
Lote ficticio FX-101, etapa de secado en el secadero de vacío SD-301 a 55–60 °C. La hoja de producción dice: *«Secar hasta LOD no más de 0,5 %. Tomar muestra y enviar a control en proceso. Si cumple, enfriar y descargar. Si no cumple, seguir secando 2 h y repetir.»*

A las tres horas tomas la primera muestra con el muestreador cerrado, la etiquetas y la llevas al laboratorio. El informe llega en el sistema: **LOD 1,84 %, no cumple** (valores de ejemplo). Lo anotas tal cual, con la hora y el número de informe, y sigues secando.

Dos horas después, segunda muestra. El informe dice: **LOD 0,5 %, cumple**. Un compañero mira por encima de tu hombro y te dice que el analista le ha comentado que «en realidad le salió 0,54». Te propone que pongas 0,54 «para ser más exacto», o que lo dejes en 0,5 «que queda mejor».

Ni una cosa ni la otra. Escribes lo que dice el informe: 0,5 %. El límite tiene un decimal, así que el resultado notificable se da con un decimal, y 0,54 se expresa 0,5, que no supera 0,5. Quien calcula, redondea y concluye es el laboratorio, con su método validado. Si tienes una duda sobre el informe, se la preguntas a la jefa de turno o al laboratorio; no la resuelves tú en la hoja.

Enfrías, descargas el SD-301 a los bidones identificados y pesas el producto seco. La báscula marca 118,6 kg: escribes 118,6 kg, no 119.

El laboratorio analizará después el lote final con su especificación completa: riqueza en base seca, impurezas con dos decimales, disolventes en ppm.
`,
  batchRecord: `
En la hoja de producción (*batch record*), en cada control en proceso verás y rellenarás:

- **Ensayo y límite**, ya impresos, con su unidad y sus decimales (p. ej. «LOD no más de 0,5 %»). El número de decimales del límite es parte de la instrucción.
- **Identificación de la muestra**: número de muestra, equipo (p. ej. SD-301), fecha y hora de la toma.
- **Resultado**: el valor del informe, copiado tal cual, con su unidad (0,5 %, no «0,50» ni «bien»). Si lo mides tú, el que marca el instrumento en ese momento.
- **Número del informe o referencia del sistema** del laboratorio, para que se pueda localizar el dato original.
- **Conclusión**: cumple o no cumple, al lado del número, nunca en su lugar.
- **Acción tomada** según la hoja: seguir secando, repetir la muestra, descargar, avisar.
- **Todas las muestras**, también las que no cumplían, en orden y con su hora.
- **Pesos y medidas** con todas las cifras que muestra el instrumento (118,6 kg).
- **Firmas** de quien lo hace y, si es un paso crítico, de quien lo verifica.

Lo que nunca verás bien hecho en una hoja: un número redondeado por el operador, un resultado sin unidad o un «cumple» sin el valor.
`,
  terms: [
    { es: "Cifras significativas", en: "Significant figures", def: "Cifras de un número que llevan información real de la medida; los ceros de la izquierda no cuentan." },
    { es: "Redondeo", en: "Rounding", def: "Quitar cifras al final de un número: si la que sobra es menor que 5 se quita; si es 5 o mayor, sube la anterior." },
    { es: "Doble redondeo", en: "Double rounding", def: "Error de redondear por etapas (0,546 a 0,55 y luego a 0,6) en lugar de una sola vez." },
    { es: "Resultado notificable", en: "Reportable result", def: "Resultado que da el procedimiento analítico tras el cálculo y las réplicas que el propio método describe." },
    { es: "Tal cual", en: "As is", def: "Resultado expresado sobre la muestra como llega, con su agua y sus volátiles." },
    { es: "Base seca", en: "Dried basis", def: "Resultado corregido como si la muestra no tuviera volátiles; se corrige con la pérdida por secado." },
    { es: "Base anhidra", en: "Anhydrous basis", def: "Resultado corregido como si la muestra no tuviera agua; se corrige con el agua por Karl Fischer." },
    { es: "Partes por millón", en: "Parts per million (ppm)", def: "Gramos por millón de gramos: igual a µg/g o mg/kg; 1 % son 10000 ppm." },
    { es: "Factor de dilución", en: "Dilution factor", def: "Volumen final entre volumen tomado; deshace la dilución para volver a la muestra." },
    { es: "Riqueza del patrón", en: "Reference standard assigned content", def: "Contenido que el certificado asigna al patrón; entra multiplicando en el cálculo." },
    { es: "Desviación estándar relativa", en: "Relative standard deviation (RSD)", def: "Desviación estándar entre la media, por 100; mide cuánto repiten las réplicas." },
    { es: "Criterio de aceptación", en: "Acceptance criterion", def: "Límite numérico, intervalo u otro criterio que debe cumplir el resultado de un ensayo." },
    { es: "No más de", en: "Not more than (NMT)", def: "Límite superior que incluye su valor: el resultado redondeado debe ser igual o menor." },
    { es: "Incertidumbre de medida", en: "Measurement uncertainty", def: "Parámetro que describe la duda razonable sobre el valor medido." },
  ],
  quiz: [
    {
      kind: "choice",
      q: "¿Cuántas cifras significativas tiene una pesada anotada como 0,0250 g?",
      options: [
        "Cinco, porque se cuentan todos los ceros",
        "Dos, porque el cero final no cuenta",
        "Tres: el 2, el 5 y el cero final",
        "Cuatro, porque cuenta el cero de delante",
      ],
      answer: 2,
      explain: "Los ceros de la izquierda solo colocan la coma. El cero final tras la coma sí cuenta: dice que se conoce la diezmilésima de gramo.",
    },
    {
      kind: "number",
      q: "Riqueza tal cual 98,2 %. Pérdida por secado 0,9 %. ¿Cuál es la riqueza en base seca, con un decimal?",
      answer: 99.1,
      tolerance: 0.001,
      unit: "%",
      explain: "98,2 × 100 / (100 − 0,9) = 98,2 × 100 / 99,1 = 99,09, que se expresa 99,1 %.",
    },
    {
      kind: "number",
      q: "Riqueza tal cual 97,8 %. Agua por Karl Fischer 0,5 %. La especificación pide la riqueza sobre sustancia anhidra. ¿Cuánto es, con un decimal?",
      answer: 98.3,
      tolerance: 0.001,
      unit: "%",
      explain: "97,8 × 100 / (100 − 0,5) = 97,8 × 100 / 99,5 = 98,29, que se expresa 98,3 %.",
    },
    {
      kind: "number",
      q: "El cromatógrafo de gases da un disolvente residual del 0,035 %. ¿Cuántas ppm son?",
      answer: 350,
      tolerance: 0.001,
      unit: "ppm",
      explain: "1 % son 10000 ppm: 0,035 × 10000 = 350 ppm.",
    },
    {
      kind: "number",
      q: "Tres réplicas dan 98,6 · 99,2 · 98,9 %. La media es 98,9 % y la desviación estándar (con n − 1) es 0,3. ¿Cuál es la RSD, con dos decimales?",
      answer: 0.3,
      tolerance: 0.02,
      unit: "%",
      explain: "RSD = 0,3 / 98,9 × 100 = 0,303, que se expresa 0,30 %.",
    },
    {
      kind: "choice",
      q: "Límite: no más de 0,5 %. El resultado calculado es 0,546 %. ¿Cómo se expresa y qué se concluye?",
      options: [
        "0,5 %: cumple, redondeando una sola vez",
        "0,55 %: no cumple, porque pasa de 0,5",
        "0,6 %: no cumple, tras redondear dos veces",
        "0,546 %: no cumple, sin redondear nada",
      ],
      answer: 0,
      explain: "Se redondea una vez a los decimales del límite: 0,546 a un decimal es 0,5, que no supera 0,5. Pasar por 0,55 y luego a 0,6 es el error del doble redondeo.",
    },
    {
      kind: "choice",
      q: "El mismo resultado calculado, 0,54 %, se compara con un límite escrito como «no más de 0,50 %». ¿Qué pasa?",
      options: [
        "Se expresa 0,5 % y cumple, como con el otro",
        "Se expresa 0,54 % y cumple por poco margen",
        "Se repite el análisis hasta que cumpla",
        "Se expresa 0,54 % y no cumple, al pasar de 0,50",
      ],
      answer: 3,
      explain: "El límite tiene dos decimales, así que el resultado también: 0,54 % es mayor que 0,50 %. Los decimales del límite cambian la decisión.",
    },
    {
      kind: "number",
      q: "Riqueza por patrón externo: cociente de áreas muestra / patrón 1,0040; cociente de concentraciones patrón / muestra 0,9950; riqueza del patrón 99,5 %. ¿Cuál es la riqueza tal cual, con un decimal?",
      answer: 99.4,
      tolerance: 0.001,
      unit: "%",
      explain: "1,0040 × 0,9950 × 99,5 = 99,399, que se expresa 99,4 %.",
    },
    {
      kind: "choice",
      q: "Te llega el control en proceso del secadero: «LOD 0,47 %, cumple». La hoja dice «LOD no más de 0,5 %». ¿Qué anotas?",
      options: [
        "0,5 %, redondeando como el límite",
        "0,47 %, cumple, con hora y número de informe",
        "Solo «cumple», porque es lo que importa",
        "0,470 %, para dar más precisión",
      ],
      answer: 1,
      explain: "Copias el resultado tal cual lo da el informe, con su unidad, la conclusión al lado y la referencia. No redondeas ni añades cifras: eso lo decide el método del laboratorio.",
    },
    {
      kind: "choice",
      q: "Riqueza 98,1 %, especificación 98,0–102,0 %, incertidumbre del método ± 0,6 %. ¿Qué es lo correcto?",
      options: [
        "Repetir hasta tener un valor más lejos del límite",
        "Informarlo como no cumple por la incertidumbre",
        "Informar 98,1 %, cumple, y que calidad valore el margen",
        "Promediarlo con el lote anterior para subirlo",
      ],
      answer: 2,
      explain: "Los límites ya cuentan con la variación normal del método: cumple. Pero no se repite para mejorarlo, y la FDA pide prudencia con resultados bajos aunque estén dentro.",
    },
  ],
};
