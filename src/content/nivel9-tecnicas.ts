import type { Lesson } from "./types";

export const tecnicasMicrobiologicasAFondo: Lesson = {
  slug: "tecnicas-microbiologicas-a-fondo",
  level: 9,
  order: 4.5,
  title: "Técnicas del laboratorio de microbiología a fondo",
  titleEn: "Microbiology laboratory techniques in depth",
  minutes: 40,
  summary:
    "Cómo trabaja por dentro el laboratorio de microbiología que analiza tus muestras: el microscopio y la tinción de Gram, los medios generales, selectivos y diferenciales, la siembra en masa, en superficie y por estría, la esterilización por autoclave, calor seco y filtración con sus bioindicadores, la cabina de seguridad biológica y los grupos de riesgo del RD 664/1997, la identificación, el número más probable, el antibiograma y los métodos rápidos.",
  body: `
En «Microbiología para el operador a fondo» viste qué son bacterias, hongos y esporas; en «Ensayos microbiológicos y de endotoxinas a fondo», las UFC, los controles, las endotoxinas y la monitorización de salas. Aquí entramos en el laboratorio de microbiología y vemos sus herramientas: con qué se mira, dónde se siembra, cómo se esteriliza, cómo se protege el analista y cómo se pone nombre y número a lo que crece.

Te importa porque tu muestra de torta húmeda acaba allí, porque tus frascos estériles salen a menudo de su autoclave y porque, si aparece un microbio en tu lote, la investigación empieza con un microscopio y una placa.

### El microscopio óptico
Un **microscopio óptico compuesto** (*compound light microscope*) usa dos lentes en serie: el **objetivo** (*objective*), junto a la muestra, y el **ocular** (*eyepiece*), junto al ojo. Sus aumentos se multiplican. El método MA-051 del Instituto Nacional de Seguridad y Salud en el Trabajo (INSST) lo dice con un ejemplo: un aumento total de unos 500 corresponde a un objetivo de 40× y un ocular de 12,5×.

Para bacterias, el Manual Analítico Bacteriológico de la agencia estadounidense FDA (*Bacteriological Analytical Manual*, BAM), capítulo 2, pide un objetivo de **inmersión en aceite** (*oil immersion*) de 95 a 100× y un ocular de 10×.

**Ejercicio resuelto 1.** Objetivo de 100× y ocular de 10×: 100 × 10 = **1000 aumentos**. Una bacteria de 1 µm se ve como si midiera 1 × 1000 = 1000 µm: 1 mm.

Con el objetivo de 100× se pone una gota de **aceite de inmersión** entre la lente y el portaobjetos. El BAM pide usar el líquido que indique el fabricante y no mancharlo en los objetivos que no son de inmersión, porque puede dañar el pegamento de la lente.

El mismo capítulo pide enfocar primero con poco aumento (más campo y menos riesgo de romper el portaobjetos), no soplar las lentes ni limpiarlas con pañuelos de papel, y regular el brillo con la lámpara, no con el diafragma, que resta nitidez.

### La tinción de Gram, paso a paso
Las bacterias son casi transparentes. Para verlas se **tiñen**. La **tinción de Gram** (*Gram stain*) es, según la nota técnica de prevención NTP 585 del INSST, la tinción diferencial más útil del laboratorio de microbiología. El BAM (reactivo R32) da este procedimiento:

| Paso | Reactivo | Tiempo |
|---|---|---|
| 1. Fijar | Frotis secado al aire y pasado por calor moderado | Unos segundos |
| 2. Colorante | Cristal violeta con oxalato amónico | 1 min |
| 3. Mordiente | Lugol de Gram (yodo y yoduro potásico) | 1 min |
| 4. Decolorar | Etanol del 95 % hasta que no suelte azul | Unos 30 s |
| 5. Contraste | Safranina | 10 a 30 s |

Entre pasos se lava con agua. El resultado, según el glosario del INSST (NTP 807):

- **Grampositivas** (*Gram-positive*): retienen el cristal violeta y quedan **azul violáceo**. Su pared es sobre todo peptidoglicano, sin membrana externa.
- **Gramnegativas** (*Gram-negative*): el alcohol les quita el violeta y la safranina las tiñe de **rosa**. Tienen poca capa de peptidoglicano y una membrana externa con lipopolisacárido, la endotoxina.

El paso crítico es el alcohol, y por eso el BAM marca cuándo parar. Al microscopio se anota también la **forma**: **cocos** (*cocci*, esferas) y **bacilos** (*rods*, bastones) son las más comunes (NTP 585). Hay excepciones: las micobacterias, por sus lípidos, no se tiñen bien con el Gram (NTP 585).

Para tu planta, un bacilo grampositivo puede ser un formador de esporas como *Bacillus*; uno gramnegativo apunta al agua y a las endotoxinas.

### Medios generales, selectivos y diferenciales
Un **medio de cultivo** (*culture medium*) es la comida del microbio. Si lleva **agar**, una sustancia sacada de algas, se vuelve sólido como una gelatina (NTP 807). El INSST distingue tres tipos:

| Tipo | Qué hace | Ejemplo del BAM |
|---|---|---|
| General o universal | Deja crecer a muchos microbios distintos | Agar para recuento en placa (*plate count agar*) |
| Selectivo | Lleva algo que frena a unos y deja crecer a otros | Caldo de bilis y verde brillante con lactosa, para coliformes |
| Diferencial | Hace que unos crezcan con un aspecto distinto | Agar de eosina y azul de metileno: *E. coli* da colonias de centro oscuro, a veces con brillo metálico |

Muchos medios son las dos cosas a la vez: en el agar Baird-Parker, *Staphylococcus aureus* da colonias de gris a negro azabache con halo (BAM, capítulo 12).

Preparar un medio tiene reglas, según la guía de la Organización Mundial de la Salud (OMS) para laboratorios de microbiología farmacéutica (TRS 961, anexo 2, apartado 5.2): agua sin sustancias que frenen microbios, tiempo y temperatura de esterilización del fabricante, nada de microondas para fundirlo (calienta desigual), repartirlo bajo flujo unidireccional y etiqueta con fecha y caducidad.

### Sembrar: en masa, en superficie y por estría
**Siembra en masa** (*pour plate*). El BAM (capítulo 3) pone 1 mL de cada dilución en una placa Petri y añade de 12 a 15 mL de agar fundido y enfriado a 45 ± 1 °C. Se mezcla girando la placa, se deja solidificar, se da la vuelta y se incuba 48 ± 2 h a 35 °C. Las colonias crecen dentro del agar. El BAM cuenta placas con 15 a 300 colonias.

**Siembra en superficie** (*spread plate*). Se ponen 0,1 mL sobre agar ya sólido y se extienden con una varilla de vidrio estéril acodada (BAM, capítulos 12 y 18). Las colonias quedan encima: se ven mejor y se pueden recoger. Para mohos y levaduras el BAM la considera mejor que la siembra en masa, porque en masa las colonias de la superficie crecen más deprisa y tapan a las de abajo.

**Ejercicio resuelto 2.** Se extienden 0,1 mL de una dilución con 0,01 g de producto por mL y crecen 45 colonias.

1. Producto sembrado: 0,1 mL × 0,01 g/mL = 0,001 g.
2. UFC/g = 45 / 0,001 = **45000 UFC/g**.

**Siembra por estría** (*streak plate*). Sirve para **aislar**, no para contar. Con un **asa** (*loop*) se toma un poco de crecimiento y se arrastra sobre el agar, en tramos sucesivos que van separando las células, hasta que al final quedan colonias sueltas. Cada colonia aislada viene, en principio, de una sola célula. Al repetir el aislamiento se obtiene un **cultivo puro** (*pure culture*), un único tipo de microorganismo (NTP 807). El BAM (capítulo 4) lo hace así: estría para aislamiento en agar de eosina y azul de metileno y, de ahí, hasta cinco colonias sospechosas a tubos nuevos.

La NTP 376 recomienda asas desechables: un asa caliente metida en un cultivo forma aerosoles.

### Esterilizar: qué significa
**Esterilización** (*sterilisation*) es el tratamiento que mata todos los organismos vivos, esporas incluidas (NTP 807). La desinfección, en cambio, no asegura la muerte de las esporas.

La guía de esterilización de la Agencia Europea de Medicamentos (EMA, EMA/CHMP/CVMP/QWP/850374/2015) explica que la muerte de los microbios es exponencial: siempre queda alguna probabilidad de que sobreviva uno. Por eso estéril se define con un **nivel de garantía de esterilidad** (*sterility assurance level*, SAL) de 10⁻⁶ o menos: como mucho una unidad no estéril por cada millón. Y la esterilidad **no se puede asegurar analizando**: se asegura con un proceso diseñado, validado y controlado.

### El autoclave: vapor a presión
El **autoclave** (*autoclave*) esteriliza con vapor de agua a presión (NTP 807): para tener vapor por encima de unos 100 °C hay que subir la presión. Según las tablas del NIST, el vapor saturado está a 121 °C con 2,05 bar absolutos (unos 1,04 bar por encima de la presión atmosférica) y a 134 °C con 3,04 bar absolutos.

La condición de referencia de la Farmacopea Europea, que recoge la EMA, es **121 °C durante al menos 15 minutos** en todas las unidades. Lo que importa:

- **Quitar el aire.** El aire aísla y el vapor no llega a la carga (FDA, guía de procesado aséptico de 2004). El anexo 1 de las normas europeas de fabricación (8.61) pide una prueba de eliminación de aire, normalmente diaria, y (8.60) una prueba de fugas, normalmente semanal, si el ciclo tiene vacío.
- **Carga seca al sacarla** y envases enteros (anexo 1, 8.56 y 8.57).
- **Registro de cada ciclo** con temperatura y tiempo; vigilar solo la presión no basta (OMS, TRS 961, 4.3.5).

### D, z y F0: cuánto mata un ciclo
- **Valor D** (*D-value*): tiempo que reduce los microbios vivos al 10 % (anexo 1, glosario). Cada D, una décima parte.
- **Valor z** (*z-value*): cuántos grados hay que subir para que el valor D se divida entre diez (anexo 1).
- **F0** (*F0 value*): letalidad de un ciclo de vapor expresada en minutos equivalentes a 121 °C, con z = 10 °C (EMA). La EMA pide un F0 de al menos 8 minutos.

**Ejercicio resuelto 3.** Un bioindicador lleva 10⁵ esporas con D a 121 °C de 1,5 minutos (valores de la tabla de la FDA para indicadores de vapor).

1. Reducciones en 15 minutos: 15 / 1,5 = 10.
2. Supervivientes esperados: 10⁵ × 10⁻¹⁰ = 10⁻⁵, es decir, una espora viva por cada cien mil bioindicadores.

**Y el F0.** Con z = 10 °C, cada 10 °C de diferencia multiplican o dividen el efecto por diez. Un minuto a 131 °C vale 10 minutos a 121 °C. Un minuto a 115 °C vale 10 elevado a (115 − 121)/10, es decir, 0,25 minutos. Veinte minutos a 115 °C dan 20 × 0,25 = **5 minutos de F0**: no llegan a los 8 que pide la EMA.

### Calor seco y despirogenación
El **calor seco** (*dry heat*) usa aire muy caliente en un horno o un túnel. La referencia es **160 °C durante al menos 2 horas** (EMA). Necesita más temperatura y más tiempo que el vapor, pero sirve para vidrio y metal y, sobre todo, destruye las endotoxinas (anexo 1, 8.66). A más de 220 °C durante un tiempo validado se usa para esterilizar y **despirogenar** a la vez, demostrando que la endotoxina baja al menos 3 logaritmos (EMA; anexo 1, 8.68): de 1000 UE a 1 UE. Todo el aire que entra al horno pasa por un filtro HEPA (anexo 1, 8.70).

### Filtración esterilizante
Lo que no aguanta calor se filtra. El anexo 1 (8.79) pide un filtro estéril de grado esterilizante, con poro nominal de **0,22 µm como máximo**, validado. Para validarlo se reta con *Brevundimonas diminuta*, una bacteria muy pequeña, con al menos 10⁷ por cm² de filtro (FDA 2004; EMA). Con 10 cm² de filtro (valor de ejemplo), 10⁷ × 10 = 10⁸ bacterias, y el filtrado debe salir estéril.

Además, la EMA pide comprobar la **integridad** del filtro antes de usarlo y, siempre, justo después, y una carga microbiana de no más de 10 UFC por 100 mL antes de filtrar. Recuerda de «Microbiología para el operador a fondo» que el filtro no retiene endotoxinas. Y el anexo 1 (8.71) es claro: la luz ultravioleta **no** es un método de esterilización.

### Bioindicadores y cintas
Un **bioindicador** (*biological indicator*, BI) es una población conocida de microbios, normalmente esporas, sobre un soporte, que se mete en la carga para comprobar que el ciclo mata (anexo 1 y EMA). La FDA (guía de 2007 sobre bioindicadores) recomienda:

| Proceso | Espora |
|---|---|
| Vapor | *Geobacillus stearothermophilus* |
| Calor seco | *Bacillus atrophaeus* |
| Óxido de etileno | *Bacillus atrophaeus* |
| Peróxido de hidrógeno | *Geobacillus stearothermophilus* |

Tras el ciclo se incuba: si no crece, las esporas murieron. El anexo 1 (8.42 y 8.43) pide un **control positivo** (un bioindicador sin esterilizar, que debe crecer), verificar la población de cada lote nuevo y evitar que sus esporas contaminen otras cosas.

La **cinta indicadora** (*autoclave tape*) cambia de color con el calor. Solo dice que el paquete **pasó** por el autoclave, no que esté estéril (anexo 1, 8.44; OMS, 4.3.5.4).

### Grupos de riesgo y niveles de contención
El Real Decreto 664/1997 protege a quien trabaja con agentes biológicos. Su artículo 3 los clasifica en cuatro grupos según el riesgo de infección:

| Grupo | Qué dice el artículo 3 | Ejemplos del anexo II |
|---|---|---|
| 1 | Poco probable que cause enfermedad | (no se listan) |
| 2 | Puede causar enfermedad; poco probable que se propague; suele haber tratamiento | *E. coli* (salvo cepas no patógenas), *S. aureus*, *P. aeruginosa*, *Aspergillus fumigatus*, *Candida albicans* |
| 3 | Enfermedad grave; riesgo de propagarse; suele haber tratamiento | *Mycobacterium tuberculosis*, *Bacillus anthracis*, *Salmonella typhi* |
| 4 | Enfermedad grave; muy probable que se propague; sin tratamiento | Virus del Ébola |

Un agente que no está en la lista no es por eso del grupo 1 (anexo II, nota 3), y en la duda se elige el grupo más peligroso (artículo 4.3). Cada grupo pide como mínimo su **nivel de contención** (artículo 15): grupo 2, nivel 2, y así. El anexo IV dice que el material infectado se maneje en **cabina de seguridad biológica**: «cuando proceda» en nivel 2, si la infección va por el aire en nivel 3, y siempre en nivel 4.

### La cabina de seguridad biológica
La NTP 1202 del INSST (2024) explica las **cabinas de seguridad biológica** (CSB; *biological safety cabinets*). Encierran el trabajo con un flujo de aire dirigido y filtros HEPA de clase H14, que retienen el 99,995 % de las partículas del tamaño más difícil, 0,3 µm.

| Clase | Protege a | Cómo |
|---|---|---|
| I | Persona y entorno, no la muestra | El aire entra por el frente, entre 0,7 y 1 m/s, y sale todo por HEPA |
| II | Persona, entorno y muestra | Además, aire estéril baja en flujo laminar sobre la mesa |
| III | Máxima protección | Cerrada, se trabaja con guantes, a menos 200 Pa como mínimo; para el grupo 4 |

**Cuenta.** Si el 99,995 % queda retenido, pasa el 0,005 %: de 1000000 de partículas, 50.

Además, la NTP avisa: una **cabina de flujo laminar no es una CSB** (protege la muestra, pero el aire sale hacia ti); se trabaja despacio, a 10 cm o más de la rejilla frontal, una sola persona y sin llamas; y **el HEPA no retiene gases ni vapores**, así que con disolventes volátiles la CSB normal no protege.


### Identificar el microbio
Identificar dice quiénes son:

1. **Aislar** por estría hasta tener un cultivo puro.
2. **Gram y forma** al microscopio.
3. **Pruebas bioquímicas**. Para *S. aureus*, el BAM usa la **catalasa** (salen burbujas de gas al añadir el reactivo) y la **coagulasa** (forma un coágulo firme en plasma). Para *E. coli*, gas de lactosa, Gram y cuatro pruebas químicas en tubo (indol, rojo de metilo, Voges-Proskauer y citrato, juntas conocidas por sus siglas en inglés como IMViC).
4. **Sistemas automáticos** de pruebas bioquímicas, que el BAM admite como alternativa.
5. **Métodos genéticos**: la FDA (2004) dice que son más exactos que los bioquímicos y muy útiles en investigaciones de fallos.

### El número más probable (NMP)
El **número más probable** (NMP; *most probable number*, MPN) no cuenta colonias, sino tubos positivos. Según el BAM (apéndice 2), se siembran tubos de caldo con cantidades decrecientes de muestra, para que unos reciban algún microbio y otros ninguno; el patrón de positivos da, por estadística, la concentración más probable. Es útil sobre todo por debajo de 100 por gramo.

**Ejercicio resuelto 4.** Tres tubos con 0,1 g, tres con 0,01 g y tres con 0,001 g. Dan gas 3, 1 y 0 tubos.

1. Resultado: 3-1-0.
2. La tabla 1 del BAM da **43 NMP/g** (intervalo de confianza del 95 %: de 9 a 180).
3. Si las cantidades hubieran sido diez veces menores (0,01, 0,001 y 0,0001 g), se multiplica por 10: 430 NMP/g, como hace el propio BAM.

Fíjate en el intervalo: el NMP es una estimación poco precisa.

### El antibiograma
Un **antibiograma** (*antimicrobial susceptibility test*) mide si un antibiótico frena a una bacteria. Es más propio del laboratorio clínico. Dos formas, según una ficha técnica de ampicilina inyectable publicada en la web de la FDA:

- **Difusión con disco** (*disk diffusion*): un disco con antibiótico sobre una placa sembrada; se mide en milímetros el **halo** sin crecimiento alrededor.
- **Dilución** (*dilution*): una serie de concentraciones del antibiótico; la **concentración mínima inhibitoria** (CMI; *minimum inhibitory concentration*, MIC) es la más baja de las probadas que frena el crecimiento.

El resultado se traduce en tres categorías: **sensible** (S), **intermedio** (I) y **resistente** (R). Para enterobacterias, esa ficha daba: halo de 17 mm o más, S; de 14 a 16, I; de 13 o menos, R; CMI de 8 µg/mL o menos, S; 16, I; 32 o más, R. Esos cortes cambian con los años: hoy la FDA reconoce los de la norma CLSI M100.

### Métodos rápidos
El anexo 1 (9.28) anima a usar **métodos rápidos** y automáticos para detectar antes la contaminación, siempre que una validación demuestre que son equivalentes o mejores que los clásicos (también 10.11 y OMS, 11.2). Ejemplos en las fuentes leídas:

- **Reacción en cadena de la polimerasa** (*polymerase chain reaction*, PCR): copia un trozo concreto del ADN del microbio hasta poder detectarlo (NTP 807).
- **Sustratos fluorogénicos** como el MUG: la mayoría de *E. coli* da una fluorescencia azulada bajo luz ultravioleta de 365 nm (BAM, capítulo 4).

### Qué haces tú
- **Usa solo material estéril en regla**: envase cerrado, en fecha, con su indicador. La cinta virada no basta si el envase está roto.
- **No contamines la muestra ni el entorno**: técnica aséptica, nada de desinfectante dentro y cierre rápido.
- **Anota** hora, punto, equipo y lote del kit.

En planta manda siempre el procedimiento vigente (SOP): los métodos, los ciclos y las cabinas de tu laboratorio son los que diga.
`,
  plant: `
Martes, 07:30. Marta, operadora de turno de mañana, prepara el muestreo microbiológico del lote ficticio LQ-2207 en la descarga de la centrífuga CF-612. Del armario saca el kit estéril MK-05: bolsa cerrada, fecha de esterilización y caducidad vigentes y la cinta del autoclave virada. Sabe que la cinta solo dice que pasó por el autoclave, así que revisa también que la bolsa no esté rota. Anota el lote del kit en la hoja.

A las 07:52 toma la torta, cierra el frasco y lo lleva al laboratorio de microbiología, donde lo recibe Óscar, el analista.

Cuatro días después aparecen en el recuento colonias que no esperaban (valores de ejemplo). Óscar las aísla por estría en una placa nueva hasta tener un cultivo puro, hace una tinción de Gram y ve bacilos grampositivos. Una tinción de esporas del mismo cultivo muestra esporas. Las pruebas de identificación apuntan a un *Bacillus*.

Calidad abre una investigación. Con la hoja de Marta en la mano, ven que el kit era correcto y que la muestra llegó a tiempo. La monitorización de la sala de descarga SD-61 de esa semana muestra un *Bacillus* parecido en una placa de contacto del suelo, junto a la puerta.

Mientras tanto, el autoclave AC-03 del laboratorio pasa su prueba diaria de eliminación de aire. En la validación anual, Óscar coloca bioindicadores de *Geobacillus stearothermophilus* junto a las sondas de temperatura en los puntos más fríos de la carga, más uno sin esterilizar como control positivo. El control crece; los de la carga, no.
`,
  batchRecord: `
En la hoja de producción (*batch record*) del lote, en los pasos de muestreo microbiológico, verás y anotarás:

- **Material estéril usado**: código y lote del kit o del frasco, fecha de esterilización o caducidad, integridad del envase y, si la hoja lo pide, que el indicador de esterilización ha virado.
- **Muestra**: punto o equipo, cantidad, fecha, hora y firma, con verificación de una segunda persona si el paso es crítico.
- **Entrega al laboratorio**: hora, persona que la recibe y condiciones de conservación hasta entonces.
- **Incidencias**: envase abierto o caído, kit caducado, derrame de una muestra, a quién se avisó y qué se hizo.
- **Estado del lote**: en cuarentena hasta tener los resultados microbiológicos.

En el registro del laboratorio, que no rellenas tú pero que puede consultarse en una investigación, constan el ciclo de autoclave con su número único, temperatura y tiempo (anexo 1, 8.45), los lotes de medios y los resultados de identificación.
`,
  terms: [
    { es: "Objetivo de inmersión", en: "Oil immersion objective", def: "Lente de 95 a 100 aumentos que trabaja con una gota de aceite entre ella y el portaobjetos para ver bacterias." },
    { es: "Tinción de Gram", en: "Gram stain", def: "Tinción diferencial que separa las bacterias en grampositivas (azul violáceo) y gramnegativas (rosa) según su pared." },
    { es: "Medio selectivo", en: "Selective medium", def: "Medio de cultivo con una sustancia que frena a unos microorganismos y deja crecer a otros." },
    { es: "Medio diferencial", en: "Differential medium", def: "Medio en el que distintos microorganismos crecen con un aspecto diferente, por ejemplo de otro color." },
    { es: "Siembra en masa", en: "Pour plate", def: "Siembra en la que la muestra se mezcla con el agar fundido y las colonias crecen dentro del medio." },
    { es: "Siembra en superficie", en: "Spread plate", def: "Siembra en la que un volumen pequeño se extiende sobre el agar ya sólido con una varilla estéril." },
    { es: "Siembra por estría", en: "Streak plate", def: "Arrastre del asa sobre el agar en tramos sucesivos para obtener colonias aisladas." },
    { es: "Nivel de garantía de esterilidad", en: "Sterility assurance level (SAL)", def: "Probabilidad de que sobreviva un microorganismo en una unidad tras esterilizar; estéril es 10⁻⁶ o menos." },
    { es: "Valor D", en: "D-value", def: "Tiempo o dosis de esterilización que reduce los microorganismos vivos al 10 %." },
    { es: "F0", en: "F0 value", def: "Letalidad de un ciclo de vapor expresada en minutos equivalentes a 121 °C con z = 10 °C." },
    { es: "Bioindicador", en: "Biological indicator", def: "Población conocida de microorganismos, normalmente esporas, que se pone en la carga para comprobar que el ciclo los mata." },
    { es: "Cabina de seguridad biológica", en: "Biological safety cabinet", def: "Recinto con flujo de aire dirigido y filtros HEPA que protege a la persona y al entorno de los agentes biológicos." },
    { es: "Número más probable", en: "Most probable number (MPN)", def: "Estimación estadística de la concentración de microorganismos a partir de cuántos tubos de una serie de diluciones dan positivo." },
    { es: "Concentración mínima inhibitoria", en: "Minimum inhibitory concentration (MIC)", def: "Menor concentración de antibiótico, de las probadas, que frena el crecimiento de la bacteria." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Un microscopio tiene un ocular de 10× y usas el objetivo de 40×. ¿Cuántos aumentos totales tienes?",
      answer: 400,
      tolerance: 0.01,
      unit: "aumentos",
      explain: "Los aumentos de objetivo y ocular se multiplican: 40 × 10 = 400 aumentos.",
    },
    {
      kind: "choice",
      q: "Tras una tinción de Gram ves bastones de color rosa. ¿Qué indica?",
      options: [
        "Bacilos grampositivos, con pared gruesa de peptidoglicano y sin membrana externa",
        "Cocos gramnegativos, que han retenido el cristal violeta tras el alcohol",
        "Bacilos gramnegativos, con membrana externa que lleva lipopolisacárido",
        "Esporas de moho, que solo toman la safranina porque no tienen pared",
      ],
      answer: 2,
      explain: "Las gramnegativas pierden el violeta con el alcohol y la safranina las tiñe de rosa; los bastones son bacilos, y su membrana externa lleva la endotoxina.",
    },
    {
      kind: "number",
      q: "Se extienden en superficie 0,1 mL de una dilución con 0,001 g de producto por mL y crecen 62 colonias. ¿Cuántas UFC/g tiene el producto?",
      answer: 620000,
      tolerance: 0.01,
      unit: "UFC/g",
      explain: "Producto sembrado: 0,1 × 0,001 = 0,0001 g; 62 / 0,0001 = 620000 UFC/g.",
    },
    {
      kind: "choice",
      q: "En el agar Baird-Parker crecen pocas especies y Staphylococcus aureus da colonias negras con halo. ¿Qué tipo de medio es?",
      options: [
        "Selectivo y diferencial a la vez, porque frena a otros y marca a su objetivo",
        "General, porque deja crecer a cualquier bacteria que haya en la muestra",
        "Solo diferencial, porque todos los microbios crecen igual pero con colores",
        "Solo de enriquecimiento, porque es un caldo líquido para recuperar dañados",
      ],
      answer: 0,
      explain: "Frena a la mayoría (selectivo) y hace que S. aureus tenga un aspecto propio, colonias de gris a negro con halo (diferencial).",
    },
    {
      kind: "number",
      q: "Un bioindicador lleva 10⁶ esporas con un valor D de 2 minutos a 121 °C. ¿Cuántas reducciones decimales (logaritmos) consigue una exposición de 12 minutos a 121 °C?",
      answer: 6,
      tolerance: 0.01,
      unit: "log",
      explain: "Cada D reduce a la décima parte: 12 / 2 = 6 reducciones, de 10⁶ a 10⁰, es decir, una espora viva esperada.",
    },
    {
      kind: "choice",
      q: "Un paquete de muestreadores sale del autoclave con la cinta indicadora virada, pero la bolsa tiene un corte. ¿Qué haces?",
      options: [
        "Lo uso, porque la cinta virada demuestra que el contenido está estéril",
        "Corto la parte rota de la bolsa y uso los muestreadores del otro extremo",
        "Lo uso si lo desinfecto antes con alcohol, porque así recupera la esterilidad",
        "No lo uso y aviso: la cinta solo indica que pasó por el autoclave",
      ],
      answer: 3,
      explain: "El anexo 1 (8.44) dice que estos indicadores solo muestran que hubo proceso, no que el contenido sea estéril; con el envase roto ya no está protegido.",
    },
    {
      kind: "number",
      q: "En un NMP con tres tubos por dilución salen 3-2-0. La tabla del BAM para 0,1, 0,01 y 0,001 g da 93 NMP/g, pero tus cantidades fueron 0,01, 0,001 y 0,0001 g. ¿Qué NMP/g informas?",
      answer: 930,
      tolerance: 0.01,
      unit: "NMP/g",
      explain: "Con cantidades diez veces menores se multiplica el valor de la tabla por 10: 93 × 10 = 930 NMP/g.",
    },
    {
      kind: "choice",
      q: "El laboratorio quiere manipular un cultivo de un agente del grupo 2 que suelta aerosoles y además usar acetona. ¿Qué es correcto según la NTP 1202?",
      options: [
        "Una cabina de flujo laminar horizontal basta, porque su HEPA lo retiene todo",
        "La CSB clase II protege del agente, pero su HEPA no retiene los vapores de acetona",
        "Cualquier CSB retiene los vapores de disolvente, porque el HEPA es H14",
        "Con agentes del grupo 2 nunca hace falta cabina, solo bata y guantes",
      ],
      answer: 1,
      explain: "La NTP 1202 avisa de que los filtros HEPA no filtran gases ni vapores; con químicos volátiles hay que adaptar la cabina o su extracción.",
    },
    {
      kind: "choice",
      q: "Un ciclo de vapor para un líquido se queda 20 minutos a 115 °C. ¿Cumple el F0 mínimo de 8 minutos de la EMA? (z = 10 °C)",
      options: [
        "Sí, porque cualquier ciclo de más de 15 minutos equivale a 121 °C",
        "Sí, porque 20 minutos a 115 °C dan unos 20 minutos de F0",
        "No, porque cada minuto a 115 °C vale 0,25 minutos: unos 5 minutos de F0",
        "No, porque por debajo de 121 °C el vapor no mata ningún microorganismo",
      ],
      answer: 2,
      explain: "Un minuto a 115 °C vale 10 elevado a (115 − 121)/10 = 0,25 minutos a 121 °C; 20 × 0,25 = 5 minutos, menos de 8.",
    },
    {
      kind: "number",
      q: "Un filtro HEPA H14 retiene el 99,995 % de las partículas de 0,3 µm. Si le llegan 200000 partículas de ese tamaño, ¿cuántas pasan?",
      answer: 10,
      tolerance: 0.01,
      unit: "partículas",
      explain: "Pasa el 100 − 99,995 = 0,005 %: 200000 × 0,00005 = 10 partículas.",
    },
  ],
};
