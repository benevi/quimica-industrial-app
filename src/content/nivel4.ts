import type { Lesson } from "./types";
import { reactivosPatronesAFondo } from "./nivel4-patrones";

const laboratorio: Lesson[] = [
  {
    slug: "material-y-seguridad-laboratorio",
    level: 4,
    order: 1,
    title: "Material y seguridad en el laboratorio",
    titleEn: "Lab equipment and lab safety",
    minutes: 15,
    summary: "El material básico de un laboratorio químico y las normas para trabajar en él sin riesgos.",
    body: `
### Material habitual
| Material | En inglés | Para qué sirve |
|---|---|---|
| Vaso de precipitados | *Beaker* | Mezclar y calentar; **no** mide volúmenes con precisión |
| Matraz Erlenmeyer | *Erlenmeyer flask* | Valoraciones y mezclas con agitación |
| Matraz aforado | *Volumetric flask* | Preparar un volumen **exacto** |
| Probeta | *Graduated cylinder* | Medir volúmenes de forma aproximada |
| Pipeta aforada / graduada | *Volumetric / graduated pipette* | Medir y transferir volúmenes exactos |
| Bureta | *Burette* | Añadir volumen gota a gota en valoraciones |
| Embudo y papel de filtro | *Funnel, filter paper* | Filtrar |
| Vidrio de reloj | *Watch glass* | Pesar sólidos, cubrir vasos |
| Desecador | *Desiccator* | Guardar muestras sin humedad |
| Estufa / mufla | *Oven / muffle furnace* | Secar / calcinar a alta temperatura |
| Campana extractora | *Fume hood* | Trabajar con vapores sin respirarlos |
| Vial | *Vial* | Contener muestras pequeñas |

### Normas de seguridad
- **EPI** siempre: bata, gafas de seguridad y guantes adecuados al producto.
- **Campana** para disolventes volátiles, ácidos concentrados y productos tóxicos. El cristal frontal, lo más bajo posible.
- **Nunca pipetear con la boca**: se usan peras o pipeteadores.
- **Ácido sobre agua**, nunca al revés.
- No comer, beber ni guardar alimentos en el laboratorio.
- Todo recipiente **etiquetado**: contenido, concentración, fecha, quién lo preparó y caducidad.
- Conocer dónde están la **ducha de seguridad**, el **lavaojos**, los extintores y la salida.
- Residuos en sus **contenedores** (disolventes halogenados, no halogenados, ácidos, bases…), nunca por el fregadero salvo que el procedimiento lo permita.
`,
    plant: `
Llevas una muestra de producto húmedo al laboratorio. Te piden dejarla en la campana porque contiene diclorometano. Aunque sea poca cantidad, el vapor es nocivo: la campana lo extrae.
`,
    batchRecord: `
En el laboratorio no se usa la hoja de producción, sino **cuadernos de laboratorio**, hojas de trabajo analíticas o el LIMS, con las mismas reglas ALCOA+.
`,
    terms: [
      { es: "Matraz aforado", en: "Volumetric flask", def: "Matraz con una marca que indica un volumen exacto." },
      { es: "Bureta", en: "Burette", def: "Tubo graduado con llave para añadir líquido de forma controlada." },
      { es: "Campana extractora", en: "Fume hood", def: "Cabina ventilada para trabajar con productos volátiles o tóxicos." },
      { es: "Lavaojos", en: "Eyewash station", def: "Fuente para lavar los ojos en caso de salpicadura." },
      { es: "Desecador", en: "Desiccator", def: "Recipiente cerrado con desecante para mantener muestras secas." },
      { es: "Mufla", en: "Muffle furnace", def: "Horno de alta temperatura para calcinar muestras." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "Para preparar exactamente 100,0 mL de una disolución, ¿qué usas?",
        options: ["Un vaso de precipitados", "Una probeta", "Un matraz aforado de 100 mL", "Un Erlenmeyer"],
        answer: 2,
        explain: "El matraz aforado está calibrado para contener un volumen exacto.",
      },
      {
        kind: "choice",
        q: "¿Dónde se trabaja con un disolvente volátil y nocivo?",
        options: ["En la mesa normal", "En la campana extractora", "Junto a la ventana", "En la estufa"],
        answer: 1,
        explain: "La campana extrae los vapores para que no los respires.",
      },
      {
        kind: "choice",
        q: "¿Dónde van los restos de diclorometano en el laboratorio?",
        options: [
          "Al fregadero con mucha agua",
          "Al contenedor de disolventes halogenados",
          "Al contenedor de no halogenados",
          "A la basura",
        ],
        answer: 1,
        explain: "El diclorometano lleva cloro: es halogenado y se gestiona aparte.",
      },
    ],
  },
  {
    slug: "balanzas-y-pesada",
    level: 4,
    order: 3,
    title: "Balanzas y cómo pesar bien",
    titleEn: "Balances and weighing",
    minutes: 15,
    summary: "Tipos de balanza, verificación diaria y técnica de pesada para obtener datos fiables.",
    body: `
### Tipos
- **Báscula de planta** (*floor scale*): cientos o miles de kg, resolución de gramos o decenas de gramos.
- **Balanza granatario** (*top-loading balance*): hasta unos kg, resolución de 0,01–0,1 g.
- **Balanza analítica** (*analytical balance*): hasta unos 200 g, resolución de **0,1 mg** (0,0001 g). Tiene cámara con puertas para evitar corrientes.
- **Microbalanza**: resolución de 0,001 mg o menos.

### Antes de pesar
1. Comprobar que está **nivelada** (burbuja centrada).
2. Comprobar que la **calibración** está en vigor (etiqueta).
3. Hacer la **verificación** del día con **pesas patrón** (*check weights*) si el procedimiento lo pide, y registrarla.
4. Respetar el **peso mínimo** (*minimum weight*): por debajo, el error relativo es demasiado grande. En farmacia se suele determinar según la USP general chapter 41 (precisión: dos veces la desviación estándar entre la masa pesada ≤ 0,10 %).

### Técnica
- **Tarar** (*tare*) el recipiente vacío (poner a cero).
- Cerrar las puertas y esperar a que el valor sea **estable**.
- Muestra y recipiente a **temperatura ambiente**: un objeto caliente parece pesar menos por las corrientes de aire.
- **Pesada por diferencia** (*weighing by difference*): pesar el recipiente con la muestra, transferir, volver a pesar. La diferencia es lo transferido. Útil con productos que absorben humedad.
- Registrar el valor completo (o imprimir el ticket).
`,
    plant: `
Debes pesar 25,0 kg de un sólido en una báscula de planta de 60 kg. Antes, verificas con la pesa patrón de 20 kg: marca 20,005 kg y el criterio es ±0,02 kg → cumple. Lo anotas en el cuaderno de la báscula y luego haces la pesada.
`,
    batchRecord: `
- Identificación de la báscula y su verificación del día.
- Tara, bruto y neto.
- Ticket impreso firmado.
`,
    terms: [
      { es: "Balanza analítica", en: "Analytical balance", def: "Balanza de alta precisión, normalmente de 0,1 mg." },
      { es: "Tara", en: "Tare", def: "Peso del recipiente que se descuenta para obtener el peso neto." },
      { es: "Peso neto / bruto", en: "Net / gross weight", def: "Neto: solo el producto. Bruto: producto más recipiente." },
      { es: "Pesa patrón", en: "Check weight / reference weight", def: "Pesa de masa conocida y certificada para verificar balanzas." },
      { es: "Peso mínimo", en: "Minimum weight", def: "Menor cantidad que se puede pesar con la precisión requerida." },
      { es: "Pesada por diferencia", en: "Weighing by difference", def: "Masa transferida calculada como diferencia entre dos pesadas." },
    ],
    quiz: [
      {
        kind: "number",
        q: "Pesas un vial con muestra: 12,3456 g. Tras transferir la muestra, el vial pesa 12,1234 g. ¿Cuánto has transferido?",
        answer: 0.2222,
        tolerance: 0.001,
        unit: "g",
        explain: "12,3456 − 12,1234 = 0,2222 g.",
      },
      {
        kind: "choice",
        q: "Sacas una muestra de la estufa a 105 °C y la pesas enseguida. ¿Qué problema hay?",
        options: [
          "Ninguno",
          "El objeto caliente crea corrientes de aire y el peso no es correcto",
          "Pesa más de lo normal siempre",
          "Se rompe la balanza",
        ],
        answer: 1,
        explain: "Se deja enfriar en un desecador hasta temperatura ambiente antes de pesar.",
      },
      {
        kind: "choice",
        q: "La etiqueta de calibración de la balanza está caducada. ¿Qué haces?",
        options: ["Peso igualmente", "No la uso y aviso", "Le pongo una etiqueta nueva", "Peso dos veces"],
        answer: 1,
        explain: "Un equipo fuera de calibración no puede usarse para datos GMP.",
      },
    ],
  },
  {
    slug: "material-volumetrico",
    level: 4,
    order: 5,
    title: "Material volumétrico y cómo medir volúmenes",
    titleEn: "Volumetric glassware",
    minutes: 12,
    summary: "Clases de material, enrase y menisco, y por qué no todo lo que tiene rayas mide igual de bien.",
    body: `
### Clases
- **Clase A**: tolerancia pequeña, para análisis. Lleva marcada la clase y su tolerancia.
- **Clase B**: tolerancia aproximadamente el doble, para usos menos exigentes.

### "In" y "Ex" (TC y TD)
- **In / TC** (*to contain*): contiene el volumen indicado. Ejemplo: matraz aforado.
- **Ex / TD** (*to deliver*): vierte el volumen indicado. Ejemplo: pipeta aforada (la gotita que queda en la punta **no** se sopla, salvo que lo indique).

### El menisco y el enrase
Los líquidos forman una curva en la superficie, el **menisco** (*meniscus*). Se enrasa con la **parte baja del menisco** tocando la marca, con los ojos **a la altura de la marca**. Mirar desde arriba o desde abajo da un error llamado **paralaje** (*parallax error*).

### Temperatura
El material está calibrado a **20 °C**. Las disoluciones calientes ocupan más volumen: se enrasa a temperatura ambiente.

### Micropipetas
Para volúmenes de microlitros (µL). Se usan con puntas desechables, se ajusta el volumen y se calibran periódicamente.

### Precisión de cada uno (de más a menos)
Pipeta aforada y matraz aforado > bureta > pipeta graduada > probeta > vaso de precipitados.
`,
    plant: `
En el laboratorio de planta preparas NaOH 1 M en un matraz aforado de 1 L. La disolución de NaOH en agua desprende calor: esperas a que se enfríe antes de enrasar. Si enrasaras en caliente, al enfriarse habría menos de 1 L y la concentración sería mayor.
`,
    batchRecord: `
- Identificación del material volumétrico usado (en análisis).
- Temperatura de las disoluciones si el método lo pide.
`,
    terms: [
      { es: "Menisco", en: "Meniscus", def: "Curva de la superficie de un líquido en un tubo." },
      { es: "Enrasar", en: "Make up to the mark", def: "Llevar el líquido justo hasta la marca de aforo." },
      { es: "Error de paralaje", en: "Parallax error", def: "Error al leer una escala desde un ángulo incorrecto." },
      { es: "Para contener / para verter", en: "To contain (TC, In) / to deliver (TD, Ex)", def: "Indica si el volumen marcado es el contenido o el que se vierte." },
      { es: "Micropipeta", en: "Micropipette", def: "Pipeta para volúmenes de microlitros con puntas desechables." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "¿Cómo se lee correctamente el volumen en un matraz aforado?",
        options: [
          "Con la parte alta del menisco",
          "Con la parte baja del menisco en la marca y los ojos a su altura",
          "Desde arriba",
          "Da igual",
        ],
        answer: 1,
        explain: "Así se evita el error de paralaje.",
      },
      {
        kind: "choice",
        q: "¿Qué material es menos preciso para medir volumen?",
        options: ["Pipeta aforada", "Bureta", "Matraz aforado", "Vaso de precipitados"],
        answer: 3,
        explain: "Las marcas de un vaso de precipitados son solo orientativas.",
      },
      {
        kind: "choice",
        q: "Una pipeta aforada marcada «Ex» o «TD»…",
        options: [
          "Contiene el volumen indicado",
          "Vierte el volumen indicado; la gota de la punta no se sopla salvo que se indique",
          "Mide cualquier volumen",
          "Solo sirve para agua",
        ],
        answer: 1,
        explain: "TD (to deliver) está calibrada para lo que vierte; la gota residual ya está tenida en cuenta.",
      },
    ],
  },
  {
    slug: "metrologia-calibracion",
    level: 4,
    order: 7,
    title: "Metrología: calibración, exactitud y precisión",
    titleEn: "Metrology and calibration",
    minutes: 15,
    summary: "Por qué los instrumentos se calibran y cómo distinguir un dato exacto de uno preciso.",
    body: `
### Exactitud y precisión
- **Exactitud** (*accuracy*): cuánto se acerca la medida al **valor verdadero**.
- **Precisión** (*precision*): cuánto se parecen **entre sí** varias medidas repetidas.

Piensa en una diana: dardos muy juntos pero lejos del centro = precisos pero no exactos. Dardos repartidos alrededor del centro = exactos de media pero poco precisos.

### Errores
- **Sistemático** (*systematic error*): siempre en el mismo sentido (balanza que marca 0,5 g de más). Afecta a la exactitud. La calibración lo **descubre y lo mide**; después se corrige **ajustando** el instrumento o aplicando la corrección que indica el certificado.
- **Aleatorio** (*random error*): varía al azar. Afecta a la precisión y se reduce repitiendo medidas.

### Calibración y verificación
- **Calibración** (*calibration*): comparar el instrumento con un **patrón** de valor conocido y documentar la diferencia. Calibrar no cambia nada en el instrumento: solo dice cuánto se equivoca.
- **Ajuste** (*adjustment*): actuar sobre el instrumento para que marque bien. Es una operación distinta; después de ajustar se vuelve a calibrar. Por eso los certificados dan el resultado «tal como se encontró» (*as found*) y «tal como se deja» (*as left*).
- **Verificación** (*check*): comprobación rápida, a menudo diaria, de que sigue dentro de tolerancia.
- **Trazabilidad metrológica**: el patrón se calibró con otro mejor, y así hasta los patrones nacionales e internacionales.

Cada instrumento GMP (balanzas, termómetros, sondas de presión, pH-metros, cromatógrafos) tiene un **plan de calibración** con frecuencia y tolerancias. La etiqueta indica la fecha de la próxima calibración.

### Incertidumbre (*uncertainty*)
Ninguna medida es perfecta. La incertidumbre es el **margen** dentro del que está el valor verdadero con una probabilidad conocida: 25,37 ± 0,02 kg.

### Instrumento fuera de calibración
Si una calibración sale fuera de tolerancia, se investiga el **impacto** en todos los datos medidos con ese instrumento desde la última calibración correcta.
`,
    plant: `
La sonda de temperatura del reactor R-101 se calibra cada 6 meses. En la calibración marca 1,8 °C más de lo real y la tolerancia es ±1,0 °C. Se abre una desviación para evaluar los lotes fabricados desde la calibración anterior.
`,
    batchRecord: `
- Instrumentos con número de identificación y calibración en vigor.
- Verificaciones diarias registradas en sus cuadernos.
`,
    terms: [
      { es: "Exactitud", en: "Accuracy", def: "Proximidad de una medida al valor verdadero." },
      { es: "Precisión", en: "Precision", def: "Proximidad entre medidas repetidas." },
      { es: "Calibración", en: "Calibration", def: "Comparación documentada de un instrumento con un patrón." },
      { es: "Patrón", en: "Standard / reference", def: "Objeto o material de valor conocido usado como referencia." },
      { es: "Incertidumbre de medida", en: "Measurement uncertainty", def: "Margen que acompaña a una medida e indica su fiabilidad." },
      { es: "Trazabilidad metrológica", en: "Metrological traceability", def: "Cadena ininterrumpida de calibraciones hasta un patrón nacional o internacional." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "Cinco pesadas dan 10,52 · 10,51 · 10,52 · 10,53 · 10,52 g y el valor real es 10,00 g. La balanza es…",
        options: ["Exacta y precisa", "Precisa pero no exacta", "Exacta pero no precisa", "Ni exacta ni precisa"],
        answer: 1,
        explain: "Los valores están muy juntos (precisa) pero lejos del valor real (no exacta): error sistemático.",
      },
      {
        kind: "choice",
        q: "¿Qué tipo de error descubre y mide la calibración?",
        options: ["El aleatorio", "El sistemático", "Ninguno", "El de redondeo"],
        answer: 1,
        explain: "El error sistemático va siempre en el mismo sentido, así que al comparar con un patrón se ve y se mide. Corregirlo es el paso siguiente: ajustar el instrumento o aplicar la corrección del certificado.",
      },
      {
        kind: "choice",
        q: "Una sonda sale fuera de tolerancia en su calibración. Además de ajustarla, ¿qué hay que hacer?",
        options: [
          "Nada más",
          "Evaluar el impacto en los datos y lotes medidos desde la última calibración correcta",
          "Cambiar la fecha de la etiqueta",
          "Seguir usándola hasta la próxima",
        ],
        answer: 1,
        explain: "Si la sonda medía mal, los lotes fabricados con ella pueden estar afectados: se abre una desviación.",
      },
    ],
  },
  {
    slug: "reactivos-patrones-soluciones",
    level: 4,
    order: 9,
    title: "Reactivos, patrones y soluciones",
    titleEn: "Reagents, standards and solutions",
    minutes: 15,
    summary: "Calidades de reactivos, patrones de referencia y cómo se preparan y etiquetan las soluciones.",
    body: `
### Calidades de reactivo (*reagent grade*)
- **Técnico** (*technical grade*): para usos generales.
- **Para análisis** (PA, *analytical reagent, ACS*): pureza alta y certificada.
- **Para HPLC / GC**: disolventes con muy pocas impurezas que interfieran en el análisis.
- **Calidad farmacopea** (Ph. Eur., USP): cumple la monografía de la farmacopea.

### Patrones (*standards*)
- **Patrón de referencia primario** (*primary reference standard*): material de pureza muy alta y conocida, por ejemplo de la Farmacopea Europea (EDQM) o de la USP.
- **Patrón secundario o de trabajo** (*working standard*): se calibra frente al primario y se usa en el día a día.

En HPLC, el resultado de la muestra se calcula comparándola con el patrón: si el patrón no es correcto, todos los resultados están mal.

### Soluciones valoradas (*standardized solutions*)
Una solución de NaOH "0,1 M" nunca es exactamente 0,1000 M. Se **valora** frente a un patrón primario y se calcula su **factor**:

> concentración real = concentración nominal × factor

Ejemplo: factor 0,987 → 0,1 × 0,987 = **0,0987 M**.

### Etiqueta de una solución preparada
Nombre y concentración · factor (si aplica) · fecha de preparación · **caducidad** · quién la preparó · referencia al registro de preparación.

### Caducidades
Reactivos, patrones y soluciones tienen fecha de caducidad o de **re-análisis** (*retest date*). Un reactivo caducado no se usa para análisis GMP.
`,
    plant: `
En el laboratorio de planta, la solución de HCl 1 M para ajustar pH en IPC tiene etiqueta con caducidad del 15/11/2026. Hoy es 18/11. No se usa: se prepara una nueva siguiendo el procedimiento.
`,
    batchRecord: `
- Lote y caducidad de reactivos y patrones en los registros analíticos.
- Factor de las soluciones valoradas usadas en los cálculos.
`,
    terms: [
      { es: "Reactivo para análisis", en: "Analytical reagent (AR, ACS)", def: "Reactivo de alta pureza certificada." },
      { es: "Patrón de referencia", en: "Reference standard", def: "Material de pureza conocida para comparar y calcular resultados." },
      { es: "Patrón de trabajo", en: "Working standard", def: "Patrón secundario calibrado frente a uno primario." },
      { es: "Factor", en: "Factor", def: "Relación entre la concentración real y la nominal de una solución valorada." },
      { es: "Fecha de re-análisis", en: "Retest date", def: "Fecha en la que un material debe volver a analizarse para seguir usándose." },
      { es: "Farmacopea", en: "Pharmacopoeia (Ph. Eur., USP)", def: "Libro oficial con especificaciones y métodos para sustancias farmacéuticas." },
    ],
    quiz: [
      {
        kind: "number",
        q: "Una solución de NaOH nominal 0,5 M tiene factor 1,012. ¿Cuál es su concentración real?",
        answer: 0.506,
        tolerance: 0.001,
        unit: "M",
        explain: "0,5 × 1,012 = 0,506 M.",
      },
      {
        kind: "choice",
        q: "¿Qué es un patrón de referencia primario?",
        options: [
          "Cualquier reactivo del laboratorio",
          "Un material de pureza muy alta y conocida, por ejemplo de una farmacopea",
          "La primera muestra del lote",
          "Un disolvente para HPLC",
        ],
        answer: 1,
        explain: "Es la referencia con la que se compara todo lo demás.",
      },
      {
        kind: "choice",
        q: "¿Qué es un patrón de trabajo (secundario)?",
        options: [
          "Un patrón sin ningún control",
          "Un patrón caracterizado frente a uno primario que se usa en el día a día",
          "El primer lote de producción",
          "Un reactivo de calidad técnica",
        ],
        answer: 1,
        explain: "Ahorra patrón primario y mantiene la trazabilidad, porque se calibra frente a él.",
      },
    ],
  },
  {
    slug: "buenas-practicas-laboratorio",
    level: 4,
    order: 11,
    title: "Buenas prácticas en el laboratorio de control de calidad",
    titleEn: "Good practices in the QC lab",
    minutes: 12,
    summary: "Cómo se trabaja en un laboratorio GMP: registros, revisión, idoneidad del sistema y resultados anómalos.",
    body: `
### GMP en el laboratorio (ICH Q7, capítulo 11)
El laboratorio de **control de calidad** (*Quality Control, QC*) analiza materias primas, productos intermedios, IPC, API final y estabilidades siguiendo **métodos aprobados** y **especificaciones**.

No hay que confundirlo con las **BPL** (*GLP, Good Laboratory Practice* de la OCDE), que se aplican a estudios no clínicos de seguridad, no a la fabricación.

### Principios del trabajo en QC
- **Método aprobado y vigente**, sin variaciones no autorizadas.
- **Hoja de trabajo o cuaderno** con todos los datos brutos: pesadas, volúmenes, diluciones, identificación de equipos, reactivos y patrones.
- **Datos originales** del instrumento (cromatogramas, tickets) conservados.
- **Idoneidad del sistema** (*system suitability*): antes de analizar muestras se comprueba que el equipo funciona bien en ese momento (por ejemplo, inyecciones repetidas del patrón con poca variación).
- **Revisión por un segundo analista** de cálculos y datos.
- **Nada de "ensayar hasta que cumpla"** (*testing into compliance*): repetir análisis hasta obtener un resultado bueno y quedarse con él está prohibido.

### Resultados anómalos
- **OOS** (*Out of Specification*): no cumple la especificación. Se investiga primero en el laboratorio (¿error de análisis?) y, si no se encuentra, en producción.
- **OOT** (*Out of Trend*): cumple, pero se sale de lo habitual. También se evalúa.

### Muestras de retención (*retention samples*)
De cada lote de API se guarda una cantidad para poder analizarla en el futuro si hay una reclamación.
`,
    plant: `
El IPC de humedad da 0,9 % y el límite es 0,5 %. El laboratorio no "repite hasta que salga bien": revisa primero si hubo un error analítico demostrable. Si no lo hay, el resultado es válido y producción sigue secando según la hoja.
`,
    batchRecord: `
- Resultados de IPC con su número de análisis.
- Referencia a investigaciones OOS si las hay.
`,
    terms: [
      { es: "Control de calidad", en: "Quality Control (QC)", def: "Laboratorio que analiza materiales y productos frente a especificaciones." },
      { es: "Idoneidad del sistema", en: "System suitability", def: "Comprobación de que el equipo analítico funciona bien antes de analizar." },
      { es: "Datos brutos", en: "Raw data", def: "Registros originales de un análisis (pesadas, cromatogramas, lecturas)." },
      { es: "Fuera de tendencia", en: "Out of Trend (OOT)", def: "Resultado que cumple pero se aparta del comportamiento habitual." },
      { es: "Muestra de retención", en: "Retention sample", def: "Cantidad de cada lote guardada para análisis futuros." },
      { es: "Buenas prácticas de laboratorio (OCDE)", en: "Good Laboratory Practice (GLP)", def: "Normas para estudios no clínicos de seguridad; no son las GMP del laboratorio de QC." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "Un análisis da OOS. ¿Qué está prohibido?",
        options: [
          "Investigar si hubo un error de laboratorio",
          "Repetirlo varias veces y quedarse con el resultado que cumple",
          "Avisar a QA",
          "Revisar los cálculos",
        ],
        answer: 1,
        explain: "Eso es «testing into compliance», una falta grave de integridad de datos.",
      },
      {
        kind: "choice",
        q: "¿Para qué sirve la idoneidad del sistema en HPLC?",
        options: [
          "Para limpiar el equipo",
          "Para comprobar que el equipo funciona bien antes de analizar las muestras",
          "Para calcular el rendimiento",
          "Para registrar la muestra en el LIMS",
        ],
        answer: 1,
        explain: "Si no se cumple la idoneidad, no se analizan muestras.",
      },
      {
        kind: "choice",
        q: "¿Las BPL (GLP de la OCDE) son las normas del laboratorio de control de calidad de una planta de API?",
        options: [
          "Sí",
          "No: el laboratorio de QC sigue las GMP (ICH Q7, capítulo 11); las BPL son para estudios no clínicos de seguridad",
          "Solo en EE. UU.",
          "Solo en microbiología",
        ],
        answer: 1,
        explain: "Es una confusión frecuente: GLP y GMP son sistemas distintos con fines distintos.",
      },
    ],
  },
];

// Las lecciones «a fondo» van cada una en su archivo nivel4-tema.ts.
export const nivel4: Lesson[] = [...laboratorio, reactivosPatronesAFondo];
