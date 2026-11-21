import type { Lesson } from "./types";

export const reactivosPatronesAFondo: Lesson = {
  slug: "reactivos-patrones-a-fondo",
  level: 4,
  order: 10,
  title: "Reactivos, patrones y disoluciones a fondo: lo que el laboratorio usa para medir",
  titleEn: "Reagents, reference standards and solutions in depth: what the laboratory measures with",
  minutes: 38,
  summary:
    "Qué cambia entre calidades de reactivo, cómo se reciben y etiquetan, qué es un patrón primario, uno secundario y un material de referencia certificado, cómo se prepara y se valora una disolución, cómo se calcula el factor y qué le pasa a tu lote si algo de esto falla.",
  body: `
En «Reactivos, patrones y soluciones» viste los nombres. Aquí verás por qué existen, qué piden las normas y cómo se hacen las cuentas. Las concentraciones están en «El mol a fondo» y la regla C1 · V1 = C2 · V2 en «Disoluciones y solubilidad a fondo».

### Por qué te importa a ti, que trabajas en planta
Cuando tu lote sale del filtro-secador, una muestra baja al laboratorio de control de calidad (*quality control*, QC) y te devuelve un número: una riqueza, una impureza. Ese número sale de comparar tu muestra con algo que el laboratorio conoce muy bien: un patrón o una disolución de concentración conocida.

Es como una báscula ajustada con una pesa de referencia equivocada: pesa mal todo, aunque funcione perfecta. Si el patrón o la disolución fallan, el resultado de tu lote es falso en cualquier dirección: se rechaza un lote bueno o se aprueba uno malo.

Por eso la guía europea de normas de correcta fabricación (EudraLex, volumen 4, parte I, capítulo 6, punto 6.19) pide «especial atención» a reactivos, disoluciones, material de vidrio, patrones y medios de cultivo, preparados y controlados según procedimientos escritos, con un nivel de control proporcionado a su uso y a sus datos de estabilidad.

### Las calidades de reactivo: una convención comercial
Un **reactivo** (*reagent*) es cualquier sustancia que el laboratorio usa para hacer un ensayo: un ácido, una sal, un disolvente. Los fabricantes los venden en varias **calidades** (*grades*). Los nombres más corrientes son:

| Calidad | Para qué se piensa | Qué cambia |
|---|---|---|
| Técnica (*technical grade*) | Usos generales, limpieza, procesos poco exigentes | Pureza menos controlada; pocas impurezas declaradas |
| De síntesis (*for synthesis*) | Preparar otras sustancias | Pureza adecuada para reaccionar, no para medir |
| Para análisis (*analytical reagent*, PA) | Ensayos cuantitativos | Pureza alta y una lista de impurezas con su máximo, certificadas lote a lote |
| Para HPLC (*HPLC grade*) | Fase móvil y diluyente en cromatografía líquida | Además, pocas impurezas que den señal en el detector o dejen residuo |
| Para cromatografía de gases (*GC grade*) | Disolver muestras para GC | Pocas impurezas volátiles que salgan como picos |

Son nombres comerciales, no una ley: cada fabricante define qué garantiza en cada calidad, y lo que vale es el **certificado de análisis** de ese lote. Por eso aquí no damos cifras de pureza. El método analítico dice qué calidad usar. La guía de la Organización Mundial de la Salud (OMS) para laboratorios de control (WHO TRS 957, anexo 1) pide reactivos de calidad adecuada, incluidos los disolventes (punto 10.1), comprados a proveedores aprobados y con su certificado de análisis y, si hace falta, su ficha de datos de seguridad (10.2).

### El certificado de análisis del reactivo
El **certificado de análisis** (*certificate of analysis*, CoA) acompaña a cada lote. La OMS lo define como la lista de ensayos aplicados, con sus resultados y criterios de aceptación, que indica si cumple la especificación. Es lo mismo que se revisa en planta cuando llega un bidón de disolvente para el reactor.

### Recepción y etiquetado de reactivos
De cada frasco hay que poder saber cuándo llegó, cuándo se abrió, hasta cuándo vale y cómo se guarda:

| Qué se registra | EudraLex cap. 6 | OMS, TRS 957 anexo 1 |
|---|---|---|
| Fecha de recepción | 6.22: «cuando sea necesario», en el envase | 10.4 (c), en la etiqueta |
| Fecha de apertura | 6.21 | 10.4 (c) |
| Quién lo preparó o abrió | 6.21: firma de quien lo preparó | 10.5 (b): iniciales de quien preparó la disolución |
| Caducidad o reanálisis | 6.21: caducidad en la etiqueta | 10.4 (f): caducidad o fecha de reanálisis, justificada |
| Condiciones de conservación | 6.21: condiciones específicas | 10.4 (e) |
| Contenido, fabricante, concentración | | 10.4 (a), (b) y (d) |

EudraLex 6.22 admite que a veces haga falta un ensayo de identificación del reactivo al recibirlo o antes de usarlo. La OMS pide comprobar a la vista que el precinto está intacto (10.8) y rechazar los envases que parezcan manipulados (10.9).

La **fecha de reanálisis** (*retest date*) no es la caducidad: es cuando hay que volver a comprobar el material para seguir usándolo. La versión de 2024 de la guía de la OMS (TRS 1052, anexo 4, punto 5.69) da por válida la caducidad del fabricante antes de abrir, y pide fijar y justificar una nueva si no la hay o si, tras abrir o trasvasar, el aire o la humedad afectan al reactivo. Por eso importa la fecha de apertura.

### Patrones: la regla con la que se mide
Un **patrón** o **sustancia de referencia** (*reference standard*) es un material muy bien conocido con el que se compara la muestra. En HPLC el equipo solo da un pico: el laboratorio inyecta el patrón, de contenido conocido, y la muestra, y compara los dos picos. Si el patrón tiene menos pureza de la que dice su etiqueta, todos los resultados salen desplazados.

**Patrón primario** (*primary reference standard*). El glosario de ICH Q7, la guía de buenas prácticas para principios activos, lo define como una sustancia que ha demostrado, con un conjunto extenso de ensayos, ser material auténtico, y que debe ser de alta pureza. Puede venir de una fuente oficial, de síntesis independiente o de producción de alta pureza, purificada o no. La OMS considera primarios los patrones de las farmacopeas.

- **ICH Q7, 11.17.** Hay que documentar la fuente de cada patrón primario y llevar registro de su conservación y uso según las recomendaciones del proveedor. Los de una fuente oficial reconocida se usan normalmente sin analizarlos, si se guardan como dice el proveedor.
- **ICH Q7, 11.18.** Si no existe patrón oficial, se establece un «patrón primario interno», con los ensayos necesarios para demostrar del todo su identidad y su pureza, y se documentan.
- **EudraLex 6.20.** Los patrones deben ser adecuados para su uso, con su cualificación documentada. Si existe uno de farmacopea, se usa preferentemente como primario, y para lo que dice su monografía.

**Patrón secundario o de trabajo** (*secondary* o *working standard*). Es un material cuya calidad y pureza se han fijado comparándolo con un primario, y que se usa en los análisis de rutina (glosario de ICH Q7). La OMS lo llama a menudo patrón de trabajo «interno».

- **ICH Q7, 11.19.** Se prepara, identifica, analiza, aprueba y guarda de forma adecuada. Antes del primer uso, cada lote se compara con un primario; y se recualifica periódicamente según un protocolo escrito.
- **EudraLex 6.20.** Se permite usarlo una vez demostrada y documentada su trazabilidad al primario.

Es como la cinta métrica oficial guardada en un cajón: con ella se comprueban las cintas de trabajo, y son estas las que se gastan a diario.

**Material de referencia y material de referencia certificado.** El Vocabulario Internacional de Metrología (VIM, definición 5.13) llama **material de referencia** (*reference material*, RM) a un material suficientemente homogéneo y estable respecto a unas propiedades, que se ha comprobado apto para su uso en una medición. El **material de referencia certificado** (*certified reference material*, CRM, 5.14) además lleva un documento de un organismo competente con el valor de sus propiedades, su incertidumbre y su trazabilidad. La **trazabilidad metrológica** (*metrological traceability*, VIM 2.41) es poder relacionar un resultado con una referencia mediante una cadena documentada y sin cortes de calibraciones. La OMS pide que el resultado de un análisis sea trazable, cuando proceda, a una sustancia de referencia primaria (13.1): tu riqueza depende del patrón de trabajo, y este del primario.

### Por qué un patrón se trata con tanto cuidado
La OMS pide un registro de cada sustancia de referencia (número de identificación, origen, fecha de recepción, lote, uso previsto, conservación, caducidad o reanálisis; puntos 11.3 a 11.7), un responsable (11.8) y anotar su número en la hoja de trabajo cada vez que se usa (11.6). Y el punto 11.14: si al reanalizar un patrón no cumple, se revisan los ensayos hechos con él desde su control anterior. Un patrón deteriorado pone en duda todos los lotes analizados con él.

### Disoluciones preparadas en el laboratorio
Un ácido diluido, un tampón o una fase móvil también llevan etiqueta y registro. La OMS (10.5) pide nombre, fecha de preparación, iniciales, caducidad o reanálisis y concentración; EudraLex 6.21, las condiciones de conservación; ICH Q7 (11.16), procedimientos escritos y una fecha de «usar antes de» cuando proceda.

Una etiqueta típica, con datos de ejemplo:

> Ácido clorhídrico 1 mol/L · ref. registro DIS-0457 · preparado 03/11/2026 por A. G. · caduca 03/12/2026 · conservar a temperatura ambiente, bien cerrado

El **registro de preparación** recoge el resto: reactivos con su lote y caducidad, cantidades, balanza y material, y firma. La OMS pide registrar la preparación y la valoración de las disoluciones volumétricas (10.3), e ICH Q7 (6.60), que los registros de laboratorio incluyan o remitan a la preparación de patrones, reactivos y disoluciones patrón. Una disolución caduca porque cambia con el tiempo, y su plazo lo fija el procedimiento.

### Preparar disoluciones: tres cuentas
La idea: cuánta sustancia pura necesito y cuánto producto real la contiene. Son valores de ejemplo, salvo masas atómicas y fichas de la app.

**Cuenta 1. Desde un sólido puro: 500 mL de NaOH 0,1 mol/L.** Masa molar del NaOH con los valores de la tabla de la app: 22,990 + 15,999 + 1,008 = 39,997, unos 40,00 g/mol.

- Moles necesarios: 0,1 mol/L × 0,500 L = 0,0500 mol.
- Masa: 0,0500 × 40,00 = **2,000 g**.

Se disuelven y se enrasa a 500 mL en un matraz aforado. Sale «aproximadamente» 0,1 mol/L.

**Cuenta 2. Desde un sólido con pureza: disolución madre de un patrón.** Hay que preparar 250 mL de una disolución de 0,500 mg/mL del patrón de trabajo ficticio PT-KX9, cuya pureza en su certificado es 99,2 % (valor de ejemplo).

- Sustancia pura necesaria: 0,500 mg/mL × 250 mL = 125 mg.
- Como solo el 99,2 % es sustancia: 125 / 0,992 = **126,0 mg** de patrón.

Si se olvida la pureza, la disolución tiene un 0,8 % menos de lo que se cree, y el error pasa a todos los resultados.

**Cuenta 3. Desde un líquido concentrado: 1 L de HCl 1 mol/L desde ácido al 35 %.** La ficha CLORAC 35 de la app da una densidad de 1,17 kg/L. Masa molar del HCl: 1,008 + 35,45 = 36,46 g/mol.

- HCl puro necesario: 1 mol × 36,46 = 36,46 g.
- Ácido comercial que lo contiene: 36,46 / 0,35 = 104,17 g.
- En volumen: 104,17 / 1,17 = **89,0 mL** de ácido concentrado.

Primero agua en el matraz, después el ácido poco a poco y, ya frío, se enrasa a 1 L: siempre el ácido sobre el agua.

### Disoluciones valoradas y el factor
Una **disolución valorada** o **volumétrica** (*volumetric solution*, VS) es la de la bureta de una volumetría, como el NaOH 0,1 mol/L. El resultado del análisis sale directamente de su concentración.

La de la cuenta 1 no es exactamente 0,1000 mol/L: la pesada, la pureza real del sólido y el enrase tienen su error, y la sosa cambia con el tiempo (la ficha CAUSTIL 50 de la app recuerda que absorbe CO₂ del aire). No basta con la cuenta: hay que medirla.

**Valorar** o **normalizar** (*standardise*) es medir la concentración real haciendo reaccionar la disolución con una cantidad muy bien conocida de un **patrón primario volumétrico**. Para las bases, uno clásico es el **hidrogenoftalato de potasio** (*potassium hydrogen phthalate*, KHP), un sólido estable que se pesa con exactitud y que tiene un hidrógeno ácido: reacciona con el NaOH mol a mol.

El **factor** (*factor*) es el número que corrige la concentración nominal:

> factor = concentración real / concentración nominal

EudraLex 6.21 pide que en la etiqueta de una disolución volumétrica figuren la fecha de la última valoración y el último factor vigente. La OMS (10.6) pide nombre, molaridad, fecha de preparación, fecha de valoración, iniciales de quien hizo cada cosa y el factor, y recuerda que la disolución debe ser apta en el momento de usarla.

**Cuenta 4. Masa molar del hidrogenoftalato de potasio.** Su fórmula es KHC₈H₄O₄, es decir, C₈H₅KO₄. Con la tabla de la app:

| Elemento | Átomos | Masa atómica | Aporte |
|---|---|---|---|
| C | 8 | 12,011 | 96,088 |
| H | 5 | 1,008 | 5,040 |
| K | 1 | 39,098 | 39,098 |
| O | 4 | 15,999 | 63,996 |
| Total | | | **204,22 g/mol** |

Cuadra con un dato oficial: una norma federal de Estados Unidos (49 CFR 571.116) prepara un tampón 0,05 M disolviendo 10,21 g en 1 L, y 10,21 / 0,05 = 204,2 g/mol.

**Cuenta 5. El factor.** Se pesan 0,5106 g de KHP seco, se disuelven en agua y se valoran con el NaOH «0,1 mol/L». El gasto es 25,32 mL (valores de ejemplo).

- Moles de KHP: 0,5106 / 204,22 = 0,0025002 mol, es decir, 2,5002 mmol.
- Como la reacción es mol a mol, el NaOH gastado también son 2,5002 mmol.
- Concentración real: 2,5002 mmol / 25,32 mL = 0,09875 mol/L.
- Factor: 0,09875 / 0,1 = **0,9875**.

Se hacen varias valoraciones y se toma la media: con 0,9874, 0,9881 y 0,9869, la media es **0,9875**. Réplicas, diferencia admitida y frecuencia las fija el procedimiento. La masa se eligió para gastar unos 25 mL: 0,025 × 0,1 = 0,0025 mol de KHP, que son 0,0025 × 204,22 = 0,511 g.

**Cuenta 6. Usar el factor en un análisis.** El laboratorio valora la riqueza del intermedio ficticio AC-12 (masa molar 152,15 g/mol, reacción 1:1 con NaOH, valores de ejemplo). Muestra: 0,3020 g. Gasto: 19,65 mL de NaOH 0,1 mol/L con factor 0,9875.

- Moles de NaOH: 0,01965 L × 0,1 × 0,9875 = 0,0019404 mol.
- Masa de AC-12: 0,0019404 × 152,15 = 0,29524 g.
- Riqueza: 0,29524 / 0,3020 × 100 = **97,76 %**.

La técnica completa de la volumetría (indicador, blanco, punto final) está en «Volumetrías ácido-base», en el nivel 6.

### Diluciones en serie para una recta de calibrado
Un HPLC o un espectrofotómetro se calibran con una **recta de calibrado** (*calibration curve*): la señal de varias disoluciones de concentración conocida frente a su concentración. La guía ICH Q2(R2), sobre validación de métodos, recomienda al menos cinco concentraciones bien repartidas para estudiar la linealidad.

Una **dilución en serie** (*serial dilution*) prepara cada punto a partir del anterior. Partimos de la disolución madre de la cuenta 2 (0,500 mg/mL), con matraces aforados de 50 mL:

| Punto | Se toma | Se lleva a | Concentración |
|---|---|---|---|
| P5 | 10 mL de madre | 50 mL | 0,500 × 10 / 50 = **0,100 mg/mL** |
| P4 | 25 mL de P5 | 50 mL | 0,100 × 25 / 50 = **0,050 mg/mL** |
| P3 | 25 mL de P4 | 50 mL | **0,025 mg/mL** |
| P2 | 25 mL de P3 | 50 mL | **0,0125 mg/mL** |
| P1 | 25 mL de P2 | 50 mL | **0,00625 mg/mL** |

En microgramos por mililitro: 100, 50, 25, 12,5 y 6,25 µg/mL. Cada paso es la regla C1 · V1 = C2 · V2.

La pega: un error en un paso se arrastra a todos los siguientes. Por eso muchos métodos preparan cada punto desde la madre o una intermedia; lo decide el método validado.

### Agua, disolventes y gases del laboratorio
**Agua.** La OMS dice que el agua debe considerarse un reactivo: se usa la calidad que pida la farmacopea o el método aprobado (10.10), se protege de la contaminación al servirla y guardarla (10.11) y se comprueba con regularidad (10.12). Hay varias calidades de agua de laboratorio, definidas en normas y farmacopeas. La del grifo no sirve porque, como explica «Agua farmacéutica a fondo», lleva sales, cloro y microbios que pueden interferir en el ensayo.

**Disolventes para HPLC y gases para cromatografía.** La fase móvil del HPLC usa disolventes de calidad HPLC, y la cromatografía de gases un gas portador como helio, hidrógeno o nitrógeno: lo verás en el nivel 7. También llevan lote, certificado y caducidad.

### Errores típicos y lo que le hacen a tu lote
| Error | Qué pasa con el resultado |
|---|---|
| Patrón caducado o mal guardado | Si ha perdido pureza, la muestra parece tener más de lo que tiene: un lote flojo puede salir conforme |
| Disolución mal etiquetada | Se usa la concentración equivocada; todo cálculo con ella sale mal |
| Factor no actualizado | El resultado se desplaza en la misma proporción que el error del factor |
| Olvidar la pureza del patrón | Error fijo en todos los resultados de esa serie |
| Agua o disolvente de calidad equivocada | Señales que no son de la muestra |

**Un caso.** En la cuenta 6 sale 97,76 %. Si la especificación de AC-12 es «no menos del 98,0 %» (valor de ejemplo), el lote no cumple.

Si el analista usa un factor antiguo, 1,0012, de hace meses, las mismas cuentas dan 99,12 %; si olvida el factor (1,000), 99,00 %. En los dos casos el lote parece conforme.

El revisor ve que la última valoración está vencida y se abre una investigación según el procedimiento: se valora de nuevo el NaOH, se recalcula y se revisa qué otros análisis la usaron. Para ti es un lote retenido y una desviación. El error no estaba en el reactor, sino en una etiqueta.

En planta y en el laboratorio manda siempre el procedimiento vigente (SOP): las calidades de reactivo, las caducidades, las réplicas de cada valoración y las fórmulas que valen son las de tus procedimientos y los certificados de tus materiales.
`,
  plant: `
Turno de tarde. Terminas de descargar el filtro-secador ficticio FD-430 con el intermedio AC-12 y bajas la muestra al laboratorio con su etiqueta: producto, lote, punto de toma, fecha, hora y tus iniciales.

Una hora después llamas para preguntar por la riqueza, porque el siguiente paso depende de ella. Laura, la analista, te explica que aún no está. Ha ido a coger la bureta con el NaOH 0,1 mol/L, código VS-014, y la etiqueta dice: «Última valoración 07/11/2026, factor 0,9881, válida 14 días» (plazo de ejemplo). Hoy es 21/11. Está caducada y no la puede usar.

Así que primero valora la disolución: seca el hidrogenoftalato de potasio, pesa tres porciones, las valora y calcula el factor de cada una. La media sale 0,9875. Lo anota en el registro de la disolución con sus iniciales, pone etiqueta nueva y solo entonces analiza tu muestra.

Antes de empezar comprueba también el patrón de trabajo PT-KX9-03 en el registro de patrones: dentro de reanálisis, guardado en el desecador que indica su certificado, con su número anotado en la hoja de trabajo.

El resultado llega dos horas tarde, pero es un resultado en el que se puede confiar. Cuando te dicen «el análisis tarda», muchas veces es esto: el laboratorio comprueba sus reglas antes de medir tu lote.

Todo es ficticio: equipos, códigos, producto y números.
`,
  batchRecord: `
- **Toma de muestra.** Producto, lote, equipo y punto de toma, fecha, hora, cantidad e iniciales. Es lo que permite al laboratorio relacionar su resultado con tu lote.
- **Resultado del laboratorio.** Número de análisis, resultado, especificación y decisión (conforme o no conforme). No continúes la etapa que depende de él sin el resultado aprobado.
- **Controles en proceso que haces tú.** EudraLex 6.18 pide que los controles en proceso hechos por producción sigan métodos aprobados por control de calidad y se registren. Si en tu puesto haces un control con una disolución o un tampón, anota su código, lote, caducidad y, si es una disolución valorada, su factor y fecha de valoración.
- **Comprobación antes de usar.** Si un frasco o una disolución está caducada, sin etiqueta o con la etiqueta ilegible, no la uses: avisa y anótalo.
- **Desviaciones.** Si el laboratorio te comunica que un resultado está en investigación (por ejemplo, por un factor caducado), el lote queda retenido hasta que calidad decida.
`,
  terms: [
    { es: "Calidad de reactivo", en: "Reagent grade", def: "Nivel de pureza e impurezas controladas que el fabricante garantiza para un uso concreto." },
    { es: "Certificado de análisis", en: "Certificate of analysis (CoA)", def: "Documento de un lote con los ensayos hechos, sus resultados y los criterios de aceptación." },
    { es: "Fecha de reanálisis", en: "Retest date", def: "Fecha en que el material debe volver a comprobarse para seguir usándose." },
    { es: "Patrón primario", en: "Primary reference standard", def: "Sustancia auténtica de alta pureza, demostrada con ensayos extensos o de una fuente oficial como una farmacopea." },
    { es: "Patrón secundario o de trabajo", en: "Secondary or working standard", def: "Sustancia cuya pureza se fija comparándola con un primario y que se usa en la rutina." },
    { es: "Material de referencia", en: "Reference material (RM)", def: "Material homogéneo y estable en unas propiedades, apto para su uso en una medición (VIM 5.13)." },
    { es: "Material de referencia certificado", en: "Certified reference material (CRM)", def: "Material de referencia con un certificado que da valores, incertidumbre y trazabilidad (VIM 5.14)." },
    { es: "Trazabilidad metrológica", en: "Metrological traceability", def: "Poder relacionar un resultado con una referencia mediante una cadena documentada de calibraciones (VIM 2.41)." },
    { es: "Disolución valorada o volumétrica", en: "Volumetric solution (VS)", def: "Disolución de concentración medida con exactitud que se usa en la bureta." },
    { es: "Valorar una disolución", en: "Standardise", def: "Medir su concentración real haciéndola reaccionar con un patrón primario." },
    { es: "Factor", en: "Standardisation factor", def: "Concentración real dividida entre la nominal." },
    { es: "Hidrogenoftalato de potasio", en: "Potassium hydrogen phthalate (KHP)", def: "Sólido estable usado como patrón primario para valorar bases; masa molar 204,22 g/mol." },
    { es: "Recta de calibrado", en: "Calibration curve", def: "Gráfica de la señal del equipo frente a concentraciones conocidas." },
    { es: "Dilución en serie", en: "Serial dilution", def: "Serie de diluciones en la que cada disolución se prepara a partir de la anterior." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Valoras NaOH de concentración nominal 0,1 mol/L con 0,4084 g de hidrogenoftalato de potasio (204,22 g/mol, reacción 1:1). El gasto es 20,15 mL. ¿Cuál es el factor?",
      answer: 0.9925,
      tolerance: 0.002,
      unit: "",
      explain: "Moles de KHP: 0,4084 / 204,22 = 0,0019998 mol. Concentración real: 0,0019998 / 0,02015 = 0,09925 mol/L. Factor: 0,09925 / 0,1 = 0,9925.",
    },
    {
      kind: "choice",
      q: "Un compañero propone preparar una disolución para un análisis con agua del grifo «porque está limpia». ¿Qué le dices?",
      options: [
        "Que vale si se hierve antes durante unos minutos",
        "Que es un reactivo y se usa el agua que pide el método",
        "Que vale si se filtra por papel antes de usarla",
        "Que da igual, porque el agua no cuenta en el resultado",
      ],
      answer: 1,
      explain: "La OMS (TRS 957 anexo 1, 10.10) pide tratar el agua como un reactivo y usar la calidad que fije la farmacopea o el método. La del grifo lleva sales, cloro y microbios.",
    },
    {
      kind: "number",
      q: "Quieres que la valoración de un NaOH 0,1 mol/L gaste unos 30 mL. ¿Cuántos gramos de hidrogenoftalato de potasio (204,22 g/mol, reacción 1:1) debes pesar?",
      answer: 0.6127,
      tolerance: 0.01,
      unit: "g",
      explain: "Moles: 0,030 L × 0,1 mol/L = 0,0030 mol. Masa: 0,0030 × 204,22 = 0,6127 g.",
    },
    {
      kind: "choice",
      q: "El laboratorio va a usar un patrón de trabajo de un principio activo. ¿Qué tiene que haberse hecho antes de su primer uso, según ICH Q7?",
      options: [
        "Compararlo con un patrón primario para fijar su idoneidad",
        "Guardarlo un mes en el desecador para que se estabilice",
        "Disolverlo en agua del grifo y medir su conductividad",
        "Nada, porque viene con la etiqueta de su proveedor",
      ],
      answer: 0,
      explain: "ICH Q7 11.19: la idoneidad de cada lote de patrón secundario se determina antes del primer uso comparándolo con un primario, y se recualifica periódicamente.",
    },
    {
      kind: "number",
      q: "Hay que preparar 250 mL de NaOH 0,5 mol/L a partir de NaOH sólido puro (40,00 g/mol). ¿Cuántos gramos se pesan?",
      answer: 5,
      tolerance: 0.01,
      unit: "g",
      explain: "Moles: 0,5 × 0,250 = 0,125 mol. Masa: 0,125 × 40,00 = 5 g.",
    },
    {
      kind: "number",
      q: "Necesitas 100 mL de una disolución de 0,200 mg/mL de un patrón cuya pureza en el certificado es 98,5 %. ¿Cuántos miligramos de patrón pesas?",
      answer: 20.3,
      tolerance: 0.01,
      unit: "mg",
      explain: "Sustancia pura: 0,200 × 100 = 20 mg. Con la pureza: 20 / 0,985 = 20,3 mg.",
    },
    {
      kind: "choice",
      q: "Vas a hacer un control en proceso con una disolución valorada. Su etiqueta da el factor, pero la fecha de la última valoración está vencida. ¿Qué haces?",
      options: [
        "La usas con el factor de la etiqueta, que sigue escrito",
        "La usas con factor 1,000, que es lo más prudente",
        "No la usas, avisas y lo anotas según el procedimiento",
        "La mezclas con una disolución nueva para renovarla",
      ],
      answer: 2,
      explain: "EudraLex 6.21 pide en la etiqueta la última fecha de valoración y el factor vigente; si está vencida, no es apta para usarse hasta que se valore de nuevo.",
    },
    {
      kind: "number",
      q: "Para 500 mL de HCl 0,5 mol/L partes de ácido clorhídrico al 35 % en masa, densidad 1,17 kg/L, masa molar 36,46 g/mol. ¿Cuántos mililitros de ácido concentrado necesitas?",
      answer: 22.26,
      tolerance: 0.01,
      unit: "mL",
      explain: "Moles: 0,5 × 0,5 = 0,25 mol; HCl puro 0,25 × 36,46 = 9,115 g; ácido comercial 9,115 / 0,35 = 26,04 g; volumen 26,04 / 1,17 = 22,26 mL.",
    },
    {
      kind: "number",
      q: "Dilución en serie: tomas 5 mL de una madre de 2,00 mg/mL y los llevas a 50 mL. Después tomas 5 mL de esa disolución y los llevas a 25 mL. ¿Qué concentración tiene la última, en mg/mL?",
      answer: 0.04,
      tolerance: 0.01,
      unit: "mg/mL",
      explain: "Primera: 2,00 × 5 / 50 = 0,200 mg/mL. Segunda: 0,200 × 5 / 25 = 0,04 mg/mL.",
    },
    {
      kind: "choice",
      q: "Al reanalizar un patrón de trabajo, el resultado no cumple. ¿Qué pide la guía de la OMS para laboratorios de control de calidad?",
      options: [
        "Tirarlo y seguir trabajando con uno nuevo sin más",
        "Reetiquetarlo con una caducidad más corta y seguir usándolo",
        "Mezclarlo con un lote nuevo para recuperar la pureza",
        "Revisar los ensayos hechos con él desde su control anterior",
      ],
      answer: 3,
      explain: "WHO TRS 957 anexo 1, punto 11.14: se hace una revisión retrospectiva de los ensayos hechos con ese patrón desde su examen anterior, con análisis de riesgos.",
    },
  ],
};
