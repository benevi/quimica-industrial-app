import type { Lesson } from "./types";

export const pictogramasYFdsAFondo: Lesson = {
  slug: "pictogramas-y-fds-a-fondo",
  level: 15,
  order: 1.5,
  title: "Etiquetas, pictogramas y fichas de seguridad a fondo: leer una FDS sección a sección",
  titleEn: "Hazard labels and safety data sheets in depth",
  minutes: 38,
  summary:
    "Las piezas de una etiqueta CLP y sus reglas, los nueve pictogramas con sustancias reales de planta, cómo se leen los códigos H y P, la ficha de datos de seguridad epígrafe a epígrafe, los valores límite del INSST y por qué el recipiente que rellenas tú también lleva etiqueta.",
  body: `
En la lección «Pictogramas, frases H y P y fichas de datos de seguridad» viste qué es cada cosa. Aquí aprendes a leerlas como un profesional: qué reglas tiene la etiqueta, qué hay en cada epígrafe de la ficha y qué decides con ella antes de tocar un producto.

### Dos documentos que dicen lo mismo
Un producto peligroso llega con una **etiqueta**, que es el resumen, y una **ficha de datos de seguridad** (FDS; *safety data sheet*, SDS), que es el documento completo. Las dos salen de la misma **clasificación** (*classification*): la decisión de qué peligros tiene según el Reglamento (CE) n.º 1272/2008, el Reglamento CLP. Por eso deben coincidir. La nota técnica NTP 1198 del Instituto Nacional de Seguridad y Salud en el Trabajo (INSST) pide a la empresa comprobar esa coherencia. Si ves que no coinciden, no decides tú cuál vale: avisas.

Según la misma nota, el proveedor entrega la FDS con el primer suministro aunque no se la pidan, en el idioma del país, y la actualiza cuando hay información nueva. La versión nueva llega gratis a quien recibió el producto en los 12 meses anteriores. Y la Guía técnica del INSST sobre agentes químicos dice que las fichas deben estar «a disposición del personal sin ninguna restricción».

### La etiqueta CLP, pieza a pieza
El artículo 17 del CLP enumera lo que lleva la etiqueta de un producto peligroso:

| Pieza | Qué miras tú |
|---|---|
| Proveedor: nombre, dirección y teléfono | A quién se pregunta |
| Identificadores del producto (artículo 18) | Que es el producto que pide la hoja |
| Pictogramas de peligro | Qué tipo de peligro |
| Palabra de advertencia: «Peligro» o «Atención» | Lo grave que es |
| Indicaciones de peligro (frases H) | Qué te puede hacer |
| Consejos de prudencia (frases P) | Qué haces para evitarlo |
| Información suplementaria (artículo 25) | Frases EUH y peligros extra |

La cantidad nominal solo es obligatoria en envases para el público. Reglas que conviene conocer:

- **El nombre es el mismo que en la ficha** (artículo 18). En una sustancia, un nombre y un número de identificación; en una mezcla, el nombre comercial y las sustancias que más pesan en su peligro para la salud.
- **Todo junto y en tu idioma** (artículos 17 y 32).
- **Bien pegada** al envase que contiene el producto y legible en horizontal en su posición normal (artículo 31).
- **Nada de «no tóxico», «no nocivo» o «ecológico»** (artículo 25).
- **Se actualiza.** Si el peligro aumenta, el proveedor cambia la etiqueta sin demora injustificada (artículo 30). Dos bidones del mismo producto pueden traer etiquetas distintas.

### Tamaños: un pictograma no es un sello diminuto
El anexo I del CLP, sección 1.2.1, pide símbolo negro sobre fondo blanco con marco rojo, en un cuadrado apoyado en un vértice. Cada pictograma cubre al menos una quinceava parte de la etiqueta, y nunca menos de 1 cm².

| Envase | Etiqueta mínima (mm) | Lado del pictograma con la regla de 1/15 (cálculo) |
|---|---|---|
| Hasta 3 litros | 52 × 74, si es posible | unos 16 mm |
| De 3 a 50 litros | 74 × 105 | unos 23 mm |
| De 50 a 500 litros | 105 × 148 | unos 32 mm |
| Más de 500 litros | 148 × 210 | unos 46 mm |

Cuenta de la tercera fila: 105 × 148 = 15540 mm²; un quinceavo son 1036 mm², un cuadrado de unos 32 mm de lado.

El Reglamento (UE) 2024/2865 fija tamaños mínimos de pictograma (de 10 × 10 mm en los envases más pequeños a 46 × 46 mm, con 23, 32 y 46 mm que coinciden con la tabla), letra de 1,2 a 2,0 mm de altura (medida en la x minúscula) según el envase, texto negro sobre blanco y una sola letra sin remates (*sans serif*). El Reglamento (UE) 2025/2439 retrasó ese formato al **1 de enero de 2028**. Desde el 1 de julio de 2026 se admiten etiquetas plegables y una **etiqueta digital** que se abre con un código, pero solo como complemento de la física. La Comisión ha propuesto simplificar otra vez estas normas: pueden volver a cambiar.

### Los nueve pictogramas, con sustancias de planta
Los ejemplos están en la clasificación armonizada del anexo VI del CLP (texto original de 2008; manda la ficha vigente). El del nitrógeno es la clasificación de la ficha de práctica de la app.

| Código | Símbolo | Peligros (anexo V) | Ejemplo |
|---|---|---|---|
| GHS01 | Bomba explotando | Explosivos, autorreactivas y peróxidos orgánicos A y B | Peróxido de dibenzoilo (H241) |
| GHS02 | Llama | Inflamables y pirofóricos; los que con agua desprenden gases inflamables | Tolueno (H225), ácido acético (H226) |
| GHS03 | Llama sobre un círculo | Comburentes | Peróxido de hidrógeno al 70 % o más (H271) |
| GHS04 | Bombona de gas | Gases a presión | Nitrógeno en botella (H280) |
| GHS05 | Corrosión | Corrosión de piel, lesiones oculares graves, corrosión de metales | Hidróxido de sodio, ácido acético (H314) |
| GHS06 | Calavera y tibias cruzadas | Toxicidad aguda 1 a 3 | Metanol (H301, H311, H331) |
| GHS07 | Signo de exclamación | Toxicidad aguda 4, irritación, sensibilización cutánea, somnolencia | Acetona (H319, H336) |
| GHS08 | Peligro para la salud | Cáncer, mutágenos, reproducción, sensibilización respiratoria, órganos, aspiración | Tolueno (H361d, H304, H373) |
| GHS09 | Medio ambiente | Acuático agudo 1 y crónico 1 y 2 | Hipoclorito de sodio en disolución (H400) |

Dos detalles que confunden:

- **No todo peligro lleva rombo.** Según el anexo V, no llevan pictograma, por ejemplo, los gases inflamables de categoría 2 ni el peligro acuático crónico 3 y 4 (H412, H413). Sin pez en la etiqueta no significa que se pueda tirar al desagüe.
- **Unos rombos tapan a otros** (artículo 26). Con la calavera no va la exclamación; con la corrosión no va la exclamación por irritar piel u ojos; con GHS08 por sensibilizante respiratorio no va GHS07 por sensibilizante cutáneo o irritante. Por eso el metanol lleva llama, calavera y peligro para la salud, y no exclamación.

### La palabra de advertencia: solo una
Cada categoría tiene asignada «Peligro» (*Danger*), «Atención» (*Warning*) o ninguna. Si figura «Peligro», no aparece «Atención» (artículo 20). El ácido acético es inflamable de categoría 3 («Atención») y corrosivo 1A («Peligro»): su etiqueta dice «Peligro».

Si ves un envase antiguo con un cuadrado naranja y una cruz de San Andrés, es el sistema anterior. La NTP 878 explica que las palabras de advertencia sustituyeron a aquellas letras (E, O, F, T, Xn, Xi y C).

### Cómo se lee un código H
Una **H** y tres cifras. La primera cifra es el tipo de peligro, como en las tres tablas del anexo III del CLP:

| Empieza por | Tipo | Ejemplos |
|---|---|---|
| H2 | Físico | H225 muy inflamable · H271 muy comburente · H290 corrosivo para los metales |
| H3 | Salud | H301 tóxico por ingestión · H304 aspiración · H314 quemaduras graves · H336 somnolencia |
| H4 | Medio ambiente | H400 muy tóxico para organismos acuáticos · H412 nocivo con efectos duraderos |

Tres añadidos:

- **Letras al final.** El anexo VI añade letras para concretar el efecto. En la reproducción, F es fertilidad y D es feto: H360F «Puede perjudicar a la fertilidad», H360D «Puede dañar al feto». En minúscula van con H361, la de sospecha: H361d «Se sospecha que daña al feto» es la del tolueno.
- **Huecos que rellena el proveedor.** H373 dice «Puede provocar daños en los órganos» y los órganos, si se conocen. Busca ese dato: te dice qué vigilar.
- **Frases EUH.** Peligros que añade la Unión Europea, en la información suplementaria. EUH066, «La exposición repetida puede provocar sequedad o formación de grietas en la piel», la lleva la acetona.

El documento de límites del INSST escribe las frases sin la H: «225-361d-304-373-315-336» son las del tolueno.

### Cómo se lee un código P
Una **P** y tres cifras; la primera dice para qué sirve (anexo IV del CLP): **P1** generales, para productos de consumo; **P2** prevención, como P210 (lejos de fuentes de ignición) o P280 (guantes y protección); **P3** respuesta, lo que haces si pasa algo; **P4** almacenamiento; **P5** eliminación, como P501.

Se combinan con el signo +: P303+P361+P353 es una sola instrucción para el contacto con la piel o el pelo. La etiqueta no lleva más de seis frases P salvo que la gravedad lo exija (artículo 28), así que **la lista completa está en la ficha**. Los textos han cambiado varias veces desde 2008: léelos en tu etiqueta, en tu ficha o en las de práctica de **[Fichas de seguridad](/fds)**.

### El código UFI de las mezclas
En algunas mezclas peligrosas verás «UFI» y un código: el identificador único de la fórmula (*unique formula identifier*, anexo VIII del CLP). Une la mezcla con la composición que el proveedor ha comunicado a los servicios de urgencias toxicológicas. En el texto español de 2017 la sigla era «IUF». En mezclas de uso industrial puede ir en la sección 1 de la ficha en vez de en la etiqueta.

### La ficha: reglas del documento
El anexo II de REACH, redactado por el Reglamento (UE) 2020/878, fija cómo se hace una FDS. Lo que te dice si la tuya es buena y vigente:

- La **primera página** lleva la fecha de emisión y, si se revisó, «Revisión: (fecha)» y la versión que sustituye. Los cambios, en la sección 16.
- **Páginas numeradas** con el total o con aviso de si sigue. Sin la última página, está incompleta.
- **Ningún epígrafe en blanco**: si un dato no aplica, lo dice y explica por qué.
- **Nada de «inocuo»** ni de «sin efectos para la salud».
- **Ficha ampliada.** Algunas llevan anexos con **escenarios de exposición** (*exposure scenarios*): las condiciones en que un uso se ha comprobado seguro. Según la NTP 1198, si tu uso no está cubierto, la empresa tiene que actuar.

### La ficha, sección a sección
Epígrafes del Reglamento 2020/878 y lo que buscas en planta:

| Sección | Epígrafes clave | Qué buscas |
|---|---|---|
| 1. Identificación | 1.1 identificador y UFI; 1.2 usos desaconsejados; 1.4 teléfono de emergencia | Que es tu producto y a quién llamar |
| 2. Peligros | 2.1 clasificación; 2.2 etiqueta; 2.3 otros peligros | El resumen; en 2.3, lo que no da pictograma: polvo explosivo, asfixia |
| 3. Composición | 3.1 sustancias; 3.2 mezclas | Qué lleva una mezcla |
| 4. Primeros auxilios | 4.1 por vía; 4.2 síntomas agudos y retardados; 4.3 atención médica | Si hace falta médico ya, si los efectos tardan y si quien socorre necesita protección |
| 5. Incendio | 5.1 medios apropiados y no apropiados; 5.2 peligros; 5.3 bomberos | Qué no se usa nunca y qué humos salen |
| 6. Vertido | 6.1 protegerse; 6.2 medio ambiente; 6.3 contener y limpiar | El orden ante un derrame |
| 7. Manipulación y almacenamiento | 7.1 manipulación; 7.2 almacenamiento e incompatibilidades | Tierra en trasvases, temperatura, material del envase |
| 8. Exposición y protección | 8.1 valores límite; 8.2 controles técnicos y equipo | Límites, extracción, guante (material, espesor, tiempo de paso), filtro |
| 9. Propiedades | 9.1 de la a) a la r) | Punto de inflamación, explosividad, densidad, presión de vapor |
| 10. Estabilidad y reactividad | 10.4 condiciones a evitar; 10.5 incompatibles; 10.6 descomposición | Con qué no se mezcla ni se calienta |
| 11. Toxicología | 11.1 por clase de peligro | Por qué es peligroso; escrita sobre todo para médicos |
| 12. Ecología | 12.1 a 12.7 | Daño al agua, persistencia |
| 13. Eliminación | 13.1 métodos | Cómo se trata el residuo; desaconseja el desagüe |
| 14. Transporte | 14.1 número ONU; 14.3 clase; 14.4 grupo de embalaje; 14.6 precauciones | Número de cuatro cifras tras «UN»; precauciones también para traslados dentro de la fábrica |
| 15. Reglamentación | 15.1 y 15.2 | Para técnicos de seguridad |
| 16. Otra información | Cambios, abreviaturas, frases H completas | Qué ha cambiado |

Tres matices que ahorran errores:

- **Mezclas, sección 9.** Si no hay punto de inflamación de la mezcla, la ficha da el del componente más bajo. Las cuentas con él están en «Atmósferas explosivas a fondo».
- **Secciones 5 y 10.** Los productos de la combustión van en la 5; los de descomposición por calor, uso o almacenamiento, en la 10.
- **Sección 8.** Cómo se pasa del dato de la ficha a un guante concreto está en «Los equipos de protección individual a fondo».

### Los valores límite: de dónde salen y cómo se usan
En España, los límites de la sección 8 salen del documento «Límites de exposición profesional para agentes químicos en España» del INSST, revisado cada año. La sección 8.1 debe darlos con su base legal. Edición de 2026:

| Agente | VLA-ED | VLA-EC | Notas |
|---|---|---|---|
| Tolueno | 50 ppm (192 mg/m³) | 100 ppm (384 mg/m³) | vía dérmica, VLB, VLI, r |
| Ácido acético | 10 ppm (25 mg/m³) | 20 ppm (50 mg/m³) | VLI |
| Hidróxido de sodio | no tiene | 2 mg/m³ | |

Qué es cada columna, cómo se pasa de ppm a mg/m³ y cómo se calcula una jornada está en «Exposición a productos químicos a fondo». Aquí, tres reglas que da el propio documento:

1. **No son una frontera** entre lo seguro y lo peligroso.
2. **No sirven para comparar** la toxicidad de dos productos: un límite más bajo no hace, por sí solo, «más tóxico».
3. **No valen, a priori, para una trabajadora embarazada o en lactancia**: cada límite se fija para un efecto concreto.

En las notas, «vía dérmica» es que la piel puede aportar mucho de lo absorbido; «VLB», que hay valor límite biológico; «VLI», que la Unión Europea fijó un valor indicativo; «r», que hay restricciones del anexo XVII de REACH.

### El recipiente que rellenas tú también lleva etiqueta
El Real Decreto 485/1997, anexo VII, apartado 4, dice que los recipientes y tuberías visibles con productos peligrosos se etiquetan según el CLP. Solo exceptúa recipientes de uso muy breve o de contenido cambiante, y con medidas alternativas equivalentes. En las tuberías, las etiquetas van a lo largo del tubo y cerca de válvulas y conexiones. La Guía técnica del INSST lo extiende a cualquier envase intermedio o temporal, y el Real Decreto 374/2001 (artículo 9) pide que el contenido y sus peligros sean siempre «claramente reconocibles».

En una planta de principios activos se suma la guía ICH Q7. Su apartado 8.11 pide que el recipiente al que se subdivide un material lleve nombre o código, número de recepción o de control, cantidad y, si procede, fecha de reanálisis; el 5.26, que los equipos indiquen contenido y estado de limpieza. El recipiente que rellenas lleva dos informaciones: calidad y seguridad.

**Ojo con las diluciones.** Al diluir, la clasificación puede cambiar. El anexo VI fija para el hidróxido de sodio corrosión 1A desde el 5 %, 1B entre el 2 y el 5 % e irritación entre el 0,5 y el 2 %: una sosa al 4 % sigue siendo corrosiva, con «Peligro». El ácido acético entre el 10 y el 25 % pasa a irritante de piel y ojos (la inflamabilidad de la dilución se determina aparte). La etiqueta de una dilución la define tu procedimiento, no se improvisa. Y nunca reutilices un envase con la etiqueta de otro producto.

### Caso práctico: una tarea nueva con tolueno
Te toca por primera vez cargar tolueno de un bidón a un reactor. Abres la ficha de tolueno de la app y sigues este orden:

1. **Sección 1 y primera página.** Coincide con el bidón y es la revisión vigente.
2. **Sección 2.** «Peligro»; llama, exclamación y peligro para la salud.
3. **Sección 9.** Punto de inflamación de unos 4 °C: a temperatura de sala ya hay vapor que puede arder. Densidad de vapor 3,1: baja al suelo.
4. **Sección 7.** Toma de tierra y enlace equipotencial, llenado lento sin caída libre, nitrógeno, material para atmósferas explosivas.
5. **Sección 10.** Incompatible con oxidantes fuertes: que no haya ninguno cerca.
6. **Sección 8.** VLA-ED 50 ppm, vía dérmica. Gafas de montura integral, guantes de Viton o de alcohol polivinílico (nitrilo solo para salpicaduras), ropa y calzado antiestáticos, filtro A si la ventilación no basta.
7. **Secciones 4, 5 y 6.** No provocar el vómito si alguien lo traga; nada de chorro de agua en un incendio; en un derrame, fuera fuentes de ignición y lejos de desagües.

Con eso decides en el orden de la jerarquía de control: sistema cerrado y extracción, después procedimiento y por último equipo de protección. Si la ficha pide algo que tu puesto no tiene, no empiezas: lo consultas con tu responsable.

En planta mandan siempre el procedimiento vigente (SOP) y la ficha vigente de tu proveedor, por encima de cualquier ejemplo de esta lección.
`,
  plant: `
Turno de mañana en la nave B. La hoja del lote FX-330 (producto ficticio) pide ajustar el pH en el reactor R-102 con 12,5 kg de sosa al 4 %, preparada en planta.

Victor saca la ficha de la sosa al 50 % (la de práctica de la app). En la sección 2 lee: corrosión, «Peligro», H314. En la 7: añadir la sosa al agua, nunca al revés, y nada de recipientes de aluminio. En la 8: pantalla facial sobre gafas de montura integral, guantes de puño largo, delantal y botas.

Comprueba que el lavaojos y la ducha de la zona funcionan. Toma 1 kg de sosa al 50 % del contenedor IBC-115 y lo vierte, despacio y agitando, sobre 11,5 kg de agua en una garrafa de polietileno de 25 L. La cuenta da 0,5 kg de hidróxido en 12,5 kg: un 4 %.

Antes de moverla, la garrafa lleva su etiqueta. La de seguridad, del modelo que define el procedimiento: «Hidróxido de sodio 4 %», el pictograma de corrosión, «Peligro» y H314, porque entre el 2 y el 5 % sigue siendo corrosiva. Y la de fabricación: código del material, número de control, peso neto y fecha de preparación.

Su compañera le pregunta si hace falta tanta etiqueta «para una garrafa que se gasta en media hora». Victor le enseña el procedimiento: no hay excepción para ese recipiente. Si se queda en la zona y alguien la confunde con agua, el error se paga en los ojos.
`,
  batchRecord: `
- Material, código y número de control del recipiente de origen, copiados de su etiqueta, no de memoria.
- Comprobación de que la etiqueta del producto coincide con el material que pide la hoja (identificador, concentración).
- Preparación de diluciones: cantidades pesadas, concentración resultante y quién lo verifica.
- Identificación del recipiente nuevo: etiqueta de seguridad y etiqueta de material, con peso y fecha.
- Equipo de protección exigido en la etapa, marcado como usado.
- Comprobación previa de lavaojos y ducha si se manipulan corrosivos, cuando la hoja lo pida.
- Cualquier etiqueta dañada, ilegible o que no coincide con la ficha se anota como incidencia y se avisa.
`,
  terms: [
    { es: "Clasificación", en: "Classification", def: "Decisión de qué clases y categorías de peligro tiene un producto según los criterios del Reglamento CLP. De ella salen la etiqueta y la ficha." },
    { es: "Identificador del producto", en: "Product identifier", def: "Nombre y número que identifican la sustancia o la mezcla. Debe ser el mismo en la etiqueta y en la ficha." },
    { es: "Clasificación armonizada", en: "Harmonised classification", def: "Clasificación fijada para toda la Unión Europea en el anexo VI del CLP. El proveedor debe usarla." },
    { es: "Categoría de peligro", en: "Hazard category", def: "Grado de gravedad dentro de una clase de peligro. Por ejemplo, corrosión cutánea 1A, 1B o 1C." },
    { es: "Información suplementaria", en: "Supplemental information", def: "Parte de la etiqueta para frases EUH y otros datos que no contradigan la clasificación." },
    { es: "Frase EUH", en: "EUH statement", def: "Indicación de peligro propia de la Unión Europea, que no recoge el sistema de Naciones Unidas." },
    { es: "Identificador único de la fórmula (UFI)", en: "Unique formula identifier (UFI)", def: "Código que une una mezcla peligrosa con la composición comunicada a los servicios de urgencias toxicológicas." },
    { es: "Etiqueta digital", en: "Digital label", def: "Versión electrónica de la etiqueta a la que se llega con un código. Complementa a la física, no la sustituye." },
    { es: "Epígrafe", en: "Subsection", def: "Apartado numerado dentro de una sección de la ficha, como el 8.1 o el 10.5." },
    { es: "Ficha ampliada", en: "Extended safety data sheet", def: "Ficha que lleva anexos con escenarios de exposición para cada uso." },
    { es: "Escenario de exposición", en: "Exposure scenario", def: "Condiciones de trabajo y medidas con las que el fabricante ha comprobado que un uso es seguro." },
    { es: "Material incompatible", en: "Incompatible material", def: "Sustancia o material con el que el producto puede reaccionar de forma peligrosa. Sección 10.5 de la ficha." },
    { es: "Número ONU", en: "UN number", def: "Número de cuatro cifras precedido de «UN» que identifica una mercancía peligrosa en el transporte. Sección 14.1." },
    { es: "Trasvase", en: "Transfer (decanting)", def: "Paso de un producto de un recipiente a otro. El recipiente nuevo se identifica igual que el original." },
  ],
  quiz: [
    {
      kind: "choice",
      q: "Un producto es tóxico agudo de categoría 3 y además irritante para la piel. ¿Qué pictogramas de salud lleva su etiqueta?",
      options: [
        "La calavera y el signo de exclamación",
        "Solo el signo de exclamación",
        "Solo la calavera y tibias cruzadas",
        "El peligro para la salud y la calavera",
      ],
      answer: 2,
      explain: "El artículo 26 del CLP dice que si va la calavera (GHS06) no va la exclamación (GHS07). La irritación sigue en su frase H, H315.",
    },
    {
      kind: "number",
      q: "Un bidón de 200 L lleva una etiqueta de 105 × 148 mm. Con la regla de que cada pictograma cubre al menos una quinceava parte de la etiqueta, ¿qué superficie mínima tiene cada pictograma?",
      answer: 1036,
      tolerance: 0.01,
      unit: "mm²",
      explain: "105 × 148 = 15540 mm², y 15540 / 15 = 1036 mm². Equivale a un cuadrado de unos 32 mm de lado.",
    },
    {
      kind: "choice",
      q: "En la etiqueta del tolueno lees H361d. ¿Qué te dice el código?",
      options: [
        "Peligro para la salud: se sospecha que daña al feto",
        "Peligro físico: líquido que desprende vapores densos",
        "Peligro ambiental: daña a los organismos acuáticos",
        "Peligro para la salud: se sabe que daña la fertilidad",
      ],
      answer: 0,
      explain: "H3 es salud. En la toxicidad para la reproducción, la d minúscula indica sospecha de daño al desarrollo del feto; la mayúscula sería efecto seguro o supuesto.",
    },
    {
      kind: "choice",
      q: "Te salpica un producto en el brazo y buscas en la etiqueta qué hacer. ¿Qué frases P miras primero?",
      options: [
        "Las que empiezan por P2, de prevención",
        "Las que empiezan por P4, de almacenamiento",
        "Las que empiezan por P5, de eliminación",
        "Las que empiezan por P3, de respuesta",
      ],
      answer: 3,
      explain: "Las P3 son de respuesta: contacto con piel u ojos, ingestión, incendio. La sección 4 de la ficha da los primeros auxilios completos.",
    },
    {
      kind: "number",
      q: "Mezclas 10 kg de sosa al 50 % en masa con 115 kg de agua. ¿Qué porcentaje en masa de hidróxido de sodio tiene la dilución?",
      answer: 4,
      tolerance: 0.01,
      unit: "%",
      explain: "Hidróxido: 10 × 0,5 = 5 kg. Total: 10 + 115 = 125 kg. 5 / 125 × 100 = 4 %.",
    },
    {
      kind: "choice",
      q: "Según los límites del anexo VI del CLP para el hidróxido de sodio, ¿cómo se clasifica esa disolución al 4 %?",
      options: [
        "Irritante cutáneo: exclamación y «Atención»",
        "Corrosivo cutáneo 1B: corrosión y «Peligro»",
        "Corrosivo cutáneo 1A: calavera y «Peligro»",
        "Sin clasificar: al 4 % ya no es peligrosa",
      ],
      answer: 1,
      explain: "Entre el 2 y el 5 % es corrosión cutánea 1B, con H314, pictograma de corrosión y «Peligro». Por debajo del 2 % pasaría a irritante.",
    },
    {
      kind: "number",
      q: "El VLA-EC del ácido acético es 20 ppm. Con su masa molar, 60,05 g/mol, y la fórmula mg/m³ = ppm × masa molar / 24,04, ¿cuánto vale en mg/m³? Redondea a unidades.",
      answer: 50,
      tolerance: 0.02,
      unit: "mg/m³",
      explain: "20 × 60,05 / 24,04 = 49,96, que se redondea a 50 mg/m³, el valor de la tabla del INSST.",
    },
    {
      kind: "choice",
      q: "Para un trasvase te ofrecen un bidón de aluminio. ¿Dónde compruebas si el aluminio es un material incompatible con el producto?",
      options: [
        "Sección 14, información relativa al transporte",
        "Sección 12, información ecológica",
        "Secciones 7.2 y 10.5, almacenamiento e incompatibles",
        "Sección 16, otra información y abreviaturas",
      ],
      answer: 2,
      explain: "El 7.2 da las condiciones de almacenamiento, incluidos los materiales del envase, y el 10.5 los materiales incompatibles. La sosa, por ejemplo, ataca el aluminio.",
    },
    {
      kind: "choice",
      q: "Pasas metanol a una garrafa limpia para usarlo durante el turno. ¿Qué identificación lleva la garrafa?",
      options: [
        "Ninguna, si se va a vaciar antes de acabar el turno",
        "Solo el nombre a rotulador, que es lo más rápido",
        "La etiqueta original del bidón, despegada y pegada",
        "Etiqueta de peligros y la de material, con lote y peso",
      ],
      answer: 3,
      explain: "El RD 485/1997 y la guía del INSST piden identificar también los envases temporales, y la ICH Q7 pide nombre, número de control y cantidad en el recipiente subdividido.",
    },
    {
      kind: "choice",
      q: "Tienes dos fichas del mismo producto. ¿Cómo sabes cuál es la más reciente y qué ha cambiado?",
      options: [
        "Por la fecha de revisión de la primera página y la sección 16",
        "Por el número de páginas: la más larga es la más nueva",
        "Por el teléfono de emergencia de la sección 1",
        "Por la cantidad de frases P que aparecen en la sección 2",
      ],
      answer: 0,
      explain: "El anexo II de REACH pide «Revisión: (fecha)» y la versión sustituida en la primera página, y los cambios en la sección 16.",
    },
  ],
};
