import type { Lesson } from "./types";

export const desviacionesYCapaAFondo: Lesson = {
  slug: "desviaciones-y-capa-a-fondo",
  level: 16,
  order: 7,
  title: "Desviaciones y CAPA a fondo: de «ha pasado algo» a «no vuelve a pasar»",
  titleEn: "Deviations and CAPA in depth: from «something happened» to «it will not happen again»",
  minutes: 34,
  summary:
    "El recorrido completo de una desviación y quién hace cada paso, cómo se escribe el registro inicial, cómo se evalúa el impacto, un caso resuelto con los 5 porqués y el diagrama de Ishikawa, los tres tipos de acción de una CAPA, la verificación de eficacia y las tendencias.",
  body: `
En las dos lecciones anteriores viste qué es una desviación y qué es una CAPA. Aquí vas a seguir una desviación desde que alguien la ve hasta que se comprueba que no ha vuelto, con tu parte en cada paso.

Piensa en una avería del coche. Paras en el arcén (contención) y llamas a la grúa (aviso). El taller mira si se ha dañado algo más (impacto), busca por qué se rompió (causa raíz) y lo arregla para que no se repita (acciones). A los meses compruebas que no ha vuelto a fallar (eficacia). Una desviación recorre ese camino, pero por escrito.

### Qué exige la norma y qué pone la empresa
La norma dice poco y la empresa concreta mucho.

| Qué | De dónde sale |
|---|---|
| Toda desviación se documenta y se explica. Las críticas se investigan, y la investigación y sus conclusiones quedan por escrito | ICH Q7, apartados 2.16 y 8.15 |
| Producción se asegura de que todas las desviaciones de producción se comunican y se evalúan | ICH Q7, apartado 2.3, punto 4 |
| Calidad se asegura de que las desviaciones críticas se investigan y se resuelven. Esa responsabilidad no se puede delegar | ICH Q7, apartado 2.22, punto 4 |
| La hoja de producción recoge cada desviación observada, su evaluación y la investigación, o la referencia a ella si se guarda aparte | ICH Q7, apartado 6.52 |
| Hay un procedimiento escrito para investigar las desviaciones críticas, y la investigación se extiende a otros lotes que puedan estar relacionados | ICH Q7, apartado 6.53 |
| Los informes de desviación y de investigación se revisan antes de liberar el lote | ICH Q7, apartado 6.72 |
| Las categorías «mayor» y «menor», los plazos, los formularios, el programa informático y quién firma cada casilla | Procedimiento de cada empresa |

### El recorrido, paso a paso
Este reparto es el habitual, no norma; el tuyo está en el procedimiento.

| Paso | Quién suele hacerlo | Qué se hace |
|---|---|---|
| 1. Detección | Quien lo ve, casi siempre el operador | Darse cuenta de que algo no es como dice la hoja |
| 2. Contención inmediata | Operador, según la instrucción | Dejar el proceso en situación segura y no seguir como si nada |
| 3. Aviso | Operador a su jefe de turno | Avisar en el momento, no al final del turno |
| 4. Registro inicial | Operador | Escribir los hechos en la hoja y en el formulario |
| 5. Clasificación | Calidad | Decidir si es crítica o no, según el riesgo |
| 6. Investigación | Equipo: Producción, Calidad, Mantenimiento y quien haga falta | Reunir datos, hablar con quien estaba y revisar registros |
| 7. Evaluación de impacto | Calidad, con datos de Producción | Ver si afecta a este lote, a otros lotes y al equipo |
| 8. Causa raíz | Equipo de investigación | Encontrar por qué pudo pasar |
| 9. Acciones | Responsables con nombre y fecha | Corregir, y evitar que se repita |
| 10. Cierre | Calidad | Revisar que todo está hecho y documentado |
| 11. Verificación de eficacia | Calidad, con datos de planta | Comprobar más adelante que las acciones funcionaron |

Los pasos 1 a 4 son tuyos. En los demás aportas datos.

### El registro inicial: hechos, no opiniones
El registro inicial es la foto del suceso. Si sale movida, la investigación empieza mal.

Un buen registro contesta seis preguntas: **qué** pasó, **dónde** (equipo, lote, paso de la hoja), **cuándo** (fecha y hora), **cuánto** (valor real y valor que pedía la hoja), **quién lo vio** y **qué se hizo en el momento**.

Y deja fuera tres cosas: opiniones, culpables y conclusiones. Eso lo dirá la investigación.

El suceso: en la centrífuga CF-201, el segundo lavado de la torta llevó menos etanol del indicado.

**Mal escrito**

> Fallo en el lavado por despiste. Se echó algo menos de etanol de la cuenta. No afecta al producto. Solucionado.

No dice equipo, lote, hora ni cantidades. «Despiste» es una opinión y señala a alguien. «No afecta al producto» es una conclusión que no te toca. «Solucionado» no explica qué se hizo.

**Bien escrito**

> 14/03, 03:40 h. Centrífuga CF-201, lote 0457 de FX-101, paso 12 (segundo lavado de torta). La hoja pide 100 L de etanol. Cierro la válvula cuando el totalizador FQ-201 marca 100 L. A las 03:55 veo en el histórico de la pantalla que al empezar el lavado marcaba 40 L. Volumen real cargado: 60 L. Faltan 40 L. Dejo la centrífuga en espera, sin descargar, y no añado etanol. Aviso a la jefa de turno, Marta R., a las 03:58. Firmado: Lucía G.

No dice por qué el totalizador marcaba 40 L: Lucía aún no lo sabe, así que no lo escribe.

### Evaluación de impacto
Evaluar el impacto es preguntarse hasta dónde llega el daño. Las preguntas habituales:

1. **¿Afecta a un parámetro crítico?** ¿El volumen de lavado está marcado como crítico en la hoja?
2. **¿Afecta a la calidad de este lote?** El lavado arrastra impurezas y aguas madres. Con menos etanol puede quedar más impureza en la torta.
3. **¿Afecta a otros lotes?** Si el totalizador no se puso a cero esta vez, puede que tampoco se pusiera otras veces. ICH Q7 (6.53) pide extender la investigación a los lotes que puedan estar relacionados.
4. **¿Afecta al equipo o a un instrumento?** Si el fallo fuera de un instrumento crítico mal calibrado, ICH Q7 (5.35) pide investigar si afectó a lo fabricado desde la última calibración correcta.

En el caso de la CF-201, Calidad revisó el histórico del totalizador de los lotes anteriores. En dos de ellos el contador tampoco partía de cero en el segundo lavado. Esos dos lotes entraron en la investigación.

Estas respuestas no las das tú, pero salen de tus datos.

### Cuánto se investiga: lo decide el riesgo
Una firma olvidada y corregida el mismo día no se investiga igual que un parámetro crítico fuera de rango.

Lo dicen dos guías. ICH Q10 (apartado 3.2.2) pide que el esfuerzo, la formalidad y la documentación de la investigación sean proporcionales al nivel de riesgo, en línea con ICH Q9. E ICH Q9(R1) lo tiene en su apartado 3 como uno de sus dos principios. El otro es que el riesgo se evalúa con conocimiento científico y pensando en proteger al paciente.

¿Qué sube el nivel de exigencia? El apartado 5.1 de ICH Q9(R1) cita tres factores: la **importancia** de la decisión para la calidad, la **incertidumbre** (lo poco que se sabe del problema) y la **complejidad**. El mismo apartado advierte que la falta de recursos no sirve para justificar un análisis menos riguroso.

Que haya poco riesgo permite una investigación más corta, pero la desviación se documenta y se explica siempre.

### Causa raíz: un caso resuelto
Seguimos con la CF-201.

**Los 5 porqués** (*5 Whys*). Se pregunta «¿por qué?» hasta llegar a algo que se pueda cambiar.

1. ¿Por qué entraron 60 L y no 100 L? Porque la válvula se cerró cuando el totalizador marcaba 100 L, pero había empezado en 40 L.
2. ¿Por qué empezó en 40 L? Porque no se puso a cero después del primer lavado.
3. ¿Por qué no se puso a cero? Porque la hoja no lo pide. Solo dice «cargar 100 L de etanol».
4. ¿Por qué la hoja no lo pide? Porque se escribió cuando el etanol se medía en un depósito con marcas de nivel. El caudalímetro con totalizador se instaló hace seis meses.
5. ¿Por qué no se actualizó la hoja al instalarlo? Porque el control de cambios del caudalímetro revisó los planos y la calibración, pero no las instrucciones de producción afectadas.

**Causa raíz**: el cambio de sistema de medida no llegó a la instrucción. Si el equipo se hubiera parado en el segundo porqué, la conclusión habría sido «el operador no puso a cero».

**El diagrama de Ishikawa** (*fishbone diagram*). Se repasan seis familias de causas para no quedarse con la primera idea.

| Familia (6M) | Qué se miró | Resultado |
|---|---|---|
| Mano de obra | ¿La operadora estaba formada en el paso? | Sí, pero la formación era del sistema antiguo |
| Método | ¿La hoja dice cómo medir los 100 L? | No menciona el totalizador ni la puesta a cero |
| Máquina | ¿El totalizador se pone a cero solo? | No. Hay que pulsar un botón |
| Material | ¿El etanol era el correcto? | Sí. Descartado |
| Medida | ¿El caudalímetro estaba calibrado? | Sí. Descartado |
| Medio ambiente | ¿Había algo especial esa noche? | Turno de noche con dos centrífugas a la vez. Contribuye, no es la causa |

ICH Q9(R1) cita este diagrama entre las herramientas básicas (anexo I.1). El diagrama abre el abanico de causas y los porqués profundizan en la rama que importa.

### Por qué «error humano» casi nunca es la causa raíz
Decir «error humano» es como decir que alguien se cayó «por la gravedad»: es cierto y no sirve. Interesa por qué a una persona formada le resultó fácil equivocarse.

Las preguntas que van detrás:

- **Formación**: ¿se enseñó este paso, con este equipo, y se comprobó que se entendió?
- **Procedimiento**: ¿la instrucción es clara, está completa y coincide con el equipo real?
- **Carga de trabajo**: ¿cuántas cosas atendía la persona a la vez? ¿A qué hora del turno?
- **Diseño del equipo**: ¿el equipo invita al error? ¿Se lee bien la pantalla?

Las GMP europeas para medicamentos (EudraLex, volumen 4, capítulo 1, apartado 1.4, punto xiv) piden esto: cuando se sospecha o se concluye que la causa es un error humano, hay que justificarlo y haber comprobado antes que no se ha pasado por alto un fallo del proceso, del procedimiento o del sistema. Ese capítulo va dirigido a fabricantes de medicamentos; en principios activos la guía es ICH Q7, que no trata el error humano. ICH Q9(R1) añade que el diseño de los equipos no debería ser vulnerable al error humano (apartado 6.1 y anexo II.9).

El mismo punto del capítulo 1 dice que, si no se puede determinar la causa raíz verdadera, se identifica la más probable y se actúa sobre ella.

### CAPA: tres acciones que no son lo mismo
ICH Q10 (apartado 3.2.2) pide un sistema para aplicar acciones correctivas y preventivas que salgan de investigar reclamaciones, rechazos, no conformidades, retiradas, desviaciones, auditorías, inspecciones y tendencias. Su glosario define dos acciones: la **correctiva** evita que algo se **repita** y la **preventiva** evita que algo **llegue a ocurrir**. La palabra «corrección» no está en ese glosario: es el nombre habitual del arreglo inmediato.

| Acción | Pregunta que responde | En el caso de la CF-201 |
|---|---|---|
| **Corrección** (*correction*) | ¿Cómo arreglo lo que ya ha pasado? | Calidad decide qué se hace con el lote 0457 y con los dos anteriores |
| **Acción correctiva** (*corrective action*) | ¿Cómo quito la causa para que no se repita aquí? | Cambiar la hoja: «poner a cero el totalizador; anotar lectura inicial y lectura final» |
| **Acción preventiva** (*preventive action*) | ¿Dónde más podría pasar, aunque aún no haya pasado? | Revisar las hojas de los otros equipos con totalizador, y añadir al formulario de control de cambios la casilla «instrucciones afectadas» |

### Verificación de eficacia
Hacer la acción no basta. Tras un tratamiento, lo que cuenta es que estés curado, no que te hayas tomado las pastillas. ICH Q10 dice que en fabricación comercial la eficacia de las acciones debe evaluarse (tabla II del apartado 3.2.2).

Cómo se comprueba es práctica de empresa. Lo habitual es fijar antes tres cosas: **qué** se va a mirar, **durante cuánto tiempo** o cuántos lotes, y **qué resultado** cuenta como éxito. En el caso de la CF-201: en los veinte lotes siguientes, todas las hojas tienen anotadas la lectura inicial y la final, y no hay ninguna desviación de volumen de lavado.

Si el problema reaparece, la CAPA no fue eficaz y se reabre el análisis.

### Tendencias: contar para ver
Una gota de agua en el suelo no preocupa a nadie. La misma gota en el mismo sitio todas las semanas es una fuga.

Por eso las desviaciones se cuentan y se agrupan por equipo, paso, tipo y turno. ICH Q10 incluye las tendencias entre las fuentes de una CAPA (3.2.2) y pide a la dirección revisar indicadores de los procesos de desviaciones y CAPA (4.1). ICH Q7 pide además una revisión de calidad del producto, normalmente anual, que repase las desviaciones críticas y si las acciones correctivas fueron adecuadas (2.50).

¿Qué indica una misma desviación menor repetida diez veces? Que no es menor. Cada una por separado no afecta al producto, pero juntas dicen que hay una causa de fondo sin resolver, o que la acción que se tomó no funcionó. Muchas empresas la investigan entonces como un problema mayor.

Si las desviaciones pequeñas no se registran, la tendencia no se ve.

### La entrevista de investigación
Si estabas en el turno, te preguntarán. El objetivo es reconstruir lo que pasó, no buscar un culpable. Esto es buena práctica, no norma:

- **Cuenta lo que viste e hiciste**, en orden y con horas si las recuerdas.
- **Separa lo que sabes de lo que supones.** «Vi el totalizador en 100 L» es un hecho. «Creo que nadie lo puso a cero» es una suposición: dilo así.
- **Si no lo recuerdas, di que no lo recuerdas.** No rellenes huecos para quedar bien.
- **Cuenta cómo se hace de verdad el trabajo**, aunque no coincida con el papel.
- **No acuerdes una versión** con los compañeros antes de hablar. Cada uno cuenta la suya.
- **Aporta lo que dificultó la tarea**: una pantalla que no se lee, una instrucción ambigua, dos equipos a la vez.

### Tres casos para pensar

**Caso 1.** En el secadero SD-301 anotas la temperatura cada hora. Al repasar la hoja ves que falta la lectura de las 02:00. Recuerdas que rondaba los 45 °C. ¿La escribes?
*Resolución*: no escribes de memoria un dato como si lo hubieras anotado en su momento. Avisas, y se registra el hueco tal como es. Si el sistema de control guardó el valor, se recupera de ahí según el procedimiento, indicando de dónde sale.

**Caso 2.** Una junta de la boca de carga del reactor R-101 pierde. Mantenimiento la cambia y la desviación se cierra. Es la cuarta junta en tres meses. ¿Qué falta?
*Resolución*: cambiar la junta es una corrección. Cuatro veces en tres meses es una tendencia: hay que buscar por qué se rompen (material, apriete, disolvente, temperatura) y definir una acción correctiva.

**Caso 3.** Una investigación concluye: «error del operador; se le vuelve a formar». Dos meses después otro operador comete el mismo fallo. ¿Qué ha pasado?
*Resolución*: la verificación de eficacia ha fallado. Que lo repita otra persona indica que la causa está en el método o en el equipo, no en quien lo hizo. Se reabre el análisis.

### En planta manda el procedimiento
Los plazos, las categorías, los formularios y quién firma los fija el procedimiento vigente (SOP) de tu empresa. En planta manda siempre ese procedimiento.
`,
  plant: `
Turno de noche. Lucía centrifuga el lote 0457 de FX-101 en la centrífuga CF-201 y atiende también la CF-202. La hoja pide dos lavados de la torta con 100 L de etanol cada uno. En el segundo, cierra la válvula cuando el totalizador FQ-201 marca 100 L. Al repasar la pantalla antes de firmar, ve que el contador había empezado en 40 L: solo han entrado 60 L.

No añade los 40 L que faltan por su cuenta. Deja la centrífuga en espera, sin descargar, y avisa a Marta, la jefa de turno. Escribe en la hoja lo que ha visto, con horas y litros, y Marta abre la desviación.

Por la mañana, Andrés, de Calidad, la clasifica y reúne al equipo. Revisan el histórico del totalizador y encuentran dos lotes anteriores con el mismo problema: entran en la investigación. Con los 5 porqués llegan a la causa: hace seis meses se cambió el depósito con marcas de nivel por un caudalímetro, y nadie actualizó la hoja para pedir la puesta a cero.

Calidad decide qué hacer con los tres lotes. La hoja se cambia para anotar la lectura inicial y la final. Se revisan las hojas de los demás equipos con totalizador. Veinte lotes después, Andrés comprueba que todas las hojas tienen las dos lecturas y que no ha habido más desviaciones de lavado. Solo entonces se cierra la CAPA.

En la entrevista, Lucía contó algo que no estaba en ningún papel: los veteranos ponían a cero «de costumbre», pero a ella nadie se lo había enseñado.
`,
  batchRecord: `
En la **hoja de producción** (*batch record*):

- En el paso afectado, el **valor real** junto al que pedía la hoja: «cargados 60 L; indicado 100 L».
- **Fecha y hora** de lo ocurrido y de cuándo te diste cuenta, si no coinciden.
- Lo que hiciste en el momento: «centrífuga en espera, sin descargar».
- A quién avisaste y a qué hora.
- El **número de la desviación**, cuando te lo den, anotado en ese paso.
- Tu firma. Las correcciones, con una sola raya, fecha, firma y motivo.

En el **registro de la desviación**:

- Equipo, producto, lote y paso de la hoja.
- Descripción de los hechos: qué, dónde, cuándo, cuánto, quién lo vio.
- Acciones inmediatas que se tomaron.
- Nada de causas, culpables ni conclusiones sobre el producto: esas casillas las rellena la investigación.

Más adelante verás añadidos por otras personas: la clasificación, la evaluación de impacto, la causa raíz, las acciones con responsable y fecha, y la verificación de eficacia. ICH Q7 (6.72) pide que los informes de desviación e investigación se revisen antes de liberar el lote.
`,
  terms: [
    { es: "Desviación", en: "Deviation", def: "Apartarse de una instrucción aprobada o de un estándar establecido (definición de ICH Q7)." },
    { es: "Desviación crítica", en: "Critical deviation", def: "La que afecta a algo que debe mantenerse dentro de criterios fijados para que el producto cumpla su especificación. ICH Q7 obliga a investigarla." },
    { es: "Contención inmediata", en: "Immediate containment", def: "Lo que se hace en el momento para dejar el proceso seguro y que el problema no vaya a más." },
    { es: "Registro inicial", en: "Initial report", def: "Primera descripción escrita del suceso, solo con hechos: qué, dónde, cuándo, cuánto, quién lo vio y qué se hizo." },
    { es: "Evaluación de impacto", en: "Impact assessment", def: "Análisis de si la desviación afecta al lote, a otros lotes o al equipo." },
    { es: "Causa raíz", en: "Root cause", def: "Causa de fondo que, si se elimina, evita que el problema se repita." },
    { es: "Causa contribuyente", en: "Contributing factor", def: "Circunstancia que facilitó el problema sin ser su causa de fondo, como la carga de trabajo de ese turno." },
    { es: "Error humano", en: "Human error", def: "Fallo de una persona. Rara vez es la causa raíz: detrás suele haber formación, procedimiento, carga de trabajo o diseño del equipo." },
    { es: "Corrección", en: "Correction", def: "Arreglo inmediato de lo que ya ha pasado. Actúa sobre el efecto, no sobre la causa." },
    { es: "Acción correctiva", en: "Corrective action", def: "Acción para eliminar la causa de un problema detectado y evitar que se repita (ICH Q10)." },
    { es: "Acción preventiva", en: "Preventive action", def: "Acción para eliminar la causa de un problema posible y evitar que llegue a ocurrir (ICH Q10)." },
    { es: "Verificación de eficacia", en: "Effectiveness check", def: "Comprobación posterior, con un criterio fijado de antemano, de que las acciones han funcionado." },
    { es: "Tendencia", en: "Trend", def: "Patrón que aparece al contar y agrupar sucesos: la misma desviación repetida en un equipo, paso o turno." },
    { es: "Proporcional al riesgo", en: "Commensurate with the level of risk", def: "Principio de ICH Q9(R1) e ICH Q10: a más riesgo, más esfuerzo, formalidad y documentación." },
  ],
  quiz: [
    {
      kind: "choice",
      q: "Durante el lavado en la centrífuga CF-201 ves que han entrado 60 L de etanol y la hoja pide 100 L. ¿Qué haces primero?",
      options: [
        "Añado los 40 L que faltan y anoto 100 L en la hoja",
        "Sigo con la descarga y lo comento al acabar el turno",
        "Dejo el equipo en situación segura, aviso y registro los hechos",
        "Anoto 100 L, que es lo que marcaba el totalizador",
      ],
      answer: 2,
      explain: "Los primeros pasos son contención, aviso y registro de los hechos. Añadir etanol por tu cuenta es una decisión que no te toca, y anotar 100 L sería registrar un dato falso.",
    },
    {
      kind: "choice",
      q: "¿Cuál de estos registros iniciales está bien escrito?",
      options: [
        "«02:10 h, SD-301, lote 0460: temperatura de producto 68 °C; máximo de la hoja 60 °C. Corto calefacción y aviso»",
        "«Temperatura alta en el secadero por descuido del turno de tarde. Ya está controlado y sin problema»",
        "«El secadero se ha pasado un poco de temperatura. No creo que afecte al producto. Seguimos»",
        "«Fallo del lazo de control, como siempre. Mantenimiento debería revisarlo de una vez por todas»",
      ],
      answer: 0,
      explain: "El primero da hora, equipo, lote, valor real, valor indicado y lo que se hizo. Los otros contienen culpables, opiniones o conclusiones, y les faltan datos.",
    },
    {
      kind: "choice",
      q: "Según ICH Q7 (apartado 6.53), al investigar una desviación crítica, ¿qué pasa con los demás lotes?",
      options: [
        "No se miran: cada lote tiene su propia hoja y su propia investigación",
        "La investigación se extiende a los lotes que puedan estar relacionados",
        "Se rechazan todos los lotes fabricados en el mismo mes en ese equipo",
        "Solo se miran si el cliente presenta después una reclamación",
      ],
      answer: 1,
      explain: "ICH Q7, apartado 6.53: la investigación debe extenderse a otros lotes que puedan estar asociados al fallo o a la desviación. No dice que se rechacen: dice que se investiguen.",
    },
    {
      kind: "choice",
      q: "Una junta del reactor R-101 pierde y Mantenimiento la cambia por una nueva igual. ¿Qué tipo de acción es?",
      options: [
        "Una acción preventiva, porque evita fugas futuras",
        "Una acción correctiva, porque elimina la causa",
        "Una verificación de eficacia de la junta anterior",
        "Una corrección, porque arregla el efecto inmediato",
      ],
      answer: 3,
      explain: "Cambiar la junta arregla lo que ya ha pasado, sin tocar por qué se rompió. Es una corrección. La acción correctiva atacaría la causa: el material, el apriete o el disolvente.",
    },
    {
      kind: "choice",
      q: "Tras la desviación de la CF-201 se revisan las hojas del filtro FN-401, que también usa totalizador y donde nunca ha habido un fallo. ¿Qué es?",
      options: [
        "Una corrección del lote afectado",
        "Una acción preventiva",
        "Una acción correctiva",
        "Una contención inmediata",
      ],
      answer: 1,
      explain: "Actúa sobre la causa de un problema que allí todavía no ha ocurrido. Según el glosario de ICH Q10, la acción preventiva evita que algo llegue a ocurrir; la correctiva evita que se repita.",
    },
    {
      kind: "choice",
      q: "Una investigación concluye «error del operador» y la única acción es volver a formarle. ¿Qué le falta?",
      options: [
        "Nada: si falló una persona, formar a esa persona es suficiente",
        "Una sanción, para que el resto del turno tome nota del fallo",
        "Comprobar si falló la formación, el procedimiento, la carga o el equipo",
        "Repetir la formación a toda la planta, por si acaso se repite",
      ],
      answer: 2,
      explain: "«Error humano» casi nunca es la causa raíz. Antes de aceptarlo hay que haber descartado fallos del proceso, del procedimiento o del sistema, como pide el capítulo 1 de las GMP europeas (1.4, punto xiv).",
    },
    {
      kind: "choice",
      q: "¿Cómo se decide cuánto esfuerzo dedicar a investigar una desviación, según ICH Q10 (3.2.2) e ICH Q9(R1)?",
      options: [
        "En proporción al nivel de riesgo de la desviación",
        "Todas se investigan igual, con el mismo informe largo",
        "Según el tiempo libre que tenga Calidad esa semana",
        "Según el coste del lote: los caros se investigan más",
      ],
      answer: 0,
      explain: "El esfuerzo, la formalidad y la documentación deben ser proporcionales al nivel de riesgo. Y la falta de recursos no justifica rebajar el rigor (ICH Q9(R1), apartado 5.1).",
    },
    {
      kind: "choice",
      q: "En ocho meses hay diez desviaciones menores iguales: falta una firma en el mismo paso de la hoja. ¿Qué indica?",
      options: [
        "Nada: cada una es menor y no afecta al producto",
        "Que diez operadores distintos han sido descuidados",
        "Que el sistema de desviaciones registra demasiado",
        "Que hay una causa de fondo sin resolver en ese paso",
      ],
      answer: 3,
      explain: "Una misma desviación repetida es una tendencia: señala una causa de fondo (por ejemplo, una casilla mal colocada en la hoja) o una acción anterior que no funcionó. Hay que investigarla como conjunto.",
    },
    {
      kind: "choice",
      q: "¿Cuál de estas es una verificación de eficacia bien planteada?",
      options: [
        "«La hoja nueva ya está aprobada y distribuida»",
        "«En los 20 lotes siguientes no hay desviaciones de lavado»",
        "«Todos los operadores han firmado la formación»",
        "«El jefe de turno opina que ya no volverá a pasar»",
      ],
      answer: 1,
      explain: "La eficacia se comprueba mirando si el problema ha dejado de ocurrir, con un criterio y un plazo fijados de antemano. Aprobar la hoja o firmar la formación solo demuestra que la acción se hizo.",
    },
    {
      kind: "choice",
      q: "En la entrevista te preguntan si el totalizador estaba a cero al empezar. No lo miraste. ¿Qué contestas?",
      options: [
        "«No lo miré. Vi 100 L al cerrar la válvula»",
        "«Sí, estaba a cero, como siempre»",
        "«Seguro que lo dejó así el turno anterior»",
        "«Lo que hayan dicho mis compañeros»",
      ],
      answer: 0,
      explain: "En una entrevista se cuentan hechos y se dice con claridad lo que no se sabe. Inventar un dato o señalar a otro turno sin haberlo visto desvía la investigación.",
    },
  ],
};
