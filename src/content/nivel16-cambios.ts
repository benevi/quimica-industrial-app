import type { Lesson } from "./types";

export const cambiosYRiesgosAFondo: Lesson = {
  slug: "cambios-y-riesgos-a-fondo",
  level: 16,
  order: 11,
  title: "Control de cambios y gestión de riesgos a fondo: cambiar sin romper nada",
  titleEn: "Change control and risk management in depth: changing without breaking anything",
  minutes: 35,
  summary:
    "El recorrido completo de un cambio según ICH Q7, la diferencia entre sustituir igual por igual y cambiar, el proceso de gestión de riesgos de ICH Q9(R1) con sus herramientas, y un AMFE resuelto de la carga de un sólido a un reactor.",
  body: `
Ya sabes que un cambio se aprueba antes de hacerlo y que el riesgo se puntúa con gravedad, probabilidad y detección. Aquí vas a recorrer el camino entero de un cambio y vas a ver una valoración de riesgos resuelta de principio a fin.

### Por qué nada se cambia sobre la marcha
En una cocina de casa, si se acaba la mantequilla usas aceite y no pasa nada. En una planta de principios activos eso no se puede hacer, por una razón sencilla: el proceso está **validado**. Alguien demostró con lotes y con análisis que, haciendo exactamente esto, con estos materiales y estos equipos, el producto sale bien. Esa demostración solo vale para lo que se probó. Si cambias una pieza, ya nadie ha demostrado nada.

Además, un cambio pequeño puede tener efectos que no se ven. Un proveedor nuevo puede traer el mismo producto con otras impurezas. Tú no lo notarías en el turno, y el análisis final quizá tampoco.

Por eso ICH Q7 dedica su sección 13 al **control de cambios** (*change control*). El apartado 13.10 pide un sistema formal para evaluar todos los cambios que puedan afectar a la producción y al control del intermedio o del principio activo.

### Qué cosas son un cambio
El apartado 13.11 da la lista. Los procedimientos escritos deben cubrir la identificación, la documentación, la revisión y la aprobación de los cambios en:

| Lo que dice el 13.11 | Ejemplo de planta |
|---|---|
| Materias primas | Otro fabricante del mismo disolvente |
| Especificaciones | Un límite de humedad más estrecho |
| Métodos analíticos | Otra columna en el análisis del laboratorio |
| Instalaciones | Mover una pared de la sala de carga |
| Sistemas de apoyo | Otro filtro en la línea de nitrógeno |
| Equipos, incluido el hardware informático | Una bomba de otro modelo, un ordenador de control nuevo |
| Pasos del proceso | Agitar 30 minutos más, cargar en otro orden |
| Materiales de etiquetado y de envasado | Otro tipo de bolsa interior del bidón |
| Programas informáticos | Una versión nueva del sistema de control |

Otros dos apartados lo refuerzan: el 7.14 manda tratar según la sección 13 el cambio de la fuente de suministro de una materia prima crítica, y el 5.47 pide que los cambios en un sistema informatizado se autoricen, documenten y prueben.

### El recorrido de un cambio, paso a paso

1. **Propuesta.** Alguien escribe qué quiere cambiar y por qué. El 13.12 pide que las propuestas las redacten, revisen y aprueben las unidades de la organización que corresponda.
2. **Evaluación del impacto.** El 13.13 pide evaluar el posible impacto del cambio sobre la calidad del intermedio o del principio activo. Aquí entra la gestión de riesgos, que verás en la segunda parte.
3. **Clasificación.** El mismo 13.13 dice que los cambios se pueden clasificar, por ejemplo como **menores o mayores**, según su naturaleza, su alcance y el efecto que puedan tener en el proceso. Eso ayuda a decidir cuántas pruebas, validación y documentación hacen falta. Qué es menor y qué es mayor lo define cada empresa.
4. **Aprobación por la unidad de calidad.** El 13.12 exige que la unidad de calidad (*quality unit*) revise y apruebe la propuesta. El 2.22 pone la aprobación de los cambios que puedan afectar a la calidad entre las responsabilidades que esa unidad no puede delegar. Lo que se aprueba es una propuesta: algo que todavía no se ha hecho.
5. **Pruebas o revalidación.** El 13.13 deja al juicio científico decidir qué ensayos y qué estudios de validación adicionales justifican un cambio en un proceso validado.
6. **Documentos.** El 13.14 pide asegurar que se revisan todos los documentos afectados, como la hoja de producción (*batch record*) y los procedimientos.
7. **Formación.** El 3.12 pide que la formación cubra las operaciones que hace cada persona. Lo habitual es formar al turno en lo nuevo antes de implantarlo y dejar registro.
8. **Implantación.** Se hace el cambio, en la fecha y de la forma aprobadas.
9. **Primeros lotes.** El 13.15 pide evaluar los primeros lotes producidos o analizados con el cambio.
10. **Fechas de reanálisis o de caducidad.** El 13.16 pide evaluar si un cambio crítico puede afectar a la fecha de reanálisis (*retest date*) o de caducidad (*expiry date*). Si hace falta, se ponen muestras del producto fabricado con el cambio en un estudio de estabilidad.
11. **Aviso a los clientes.** El 13.17 pide avisar a los fabricantes de la forma farmacéutica, es decir, a quienes convierten tu principio activo en comprimidos o inyectables, de los cambios que puedan afectar a su calidad.

### Igual por igual o cambio
No todo lo que hace mantenimiento es un cambio. Poner una pieza nueva idéntica a la vieja es una **sustitución igual por igual** (*like-for-like*). ICH Q7 no usa esa expresión: es una práctica habitual, y el criterio lo fija el procedimiento de cada empresa.

| Situación | Lo habitual |
|---|---|
| Junta nueva del mismo material, medida y referencia | Igual por igual: orden de mantenimiento y registro |
| Junta del mismo tamaño pero de otro material | Cambio: el material toca el producto |
| Bomba «equivalente» de otro modelo | Cambio: hay que evaluarla |

La palabra que debe ponerte en guardia es «equivalente». Si alguien tiene que opinar si dos cosas son iguales, ya no es igual por igual: esa opinión es justo la evaluación que pide el control de cambios.

### Cambios temporales y de emergencia
Dos figuras que tampoco aparecen en ICH Q7 y que muchas empresas recogen en sus procedimientos:

- **Cambio temporal**: vale para un tiempo o un número de lotes definido y tiene fecha de fin. Al acabar, se vuelve a la situación anterior o se tramita como cambio permanente.
- **Cambio de emergencia**: una avería obliga a actuar ya. Se actúa con una autorización rápida de quien marca el procedimiento y la documentación completa se cierra después.

Ninguno de los dos es un atajo para saltarse a la unidad de calidad.

### Qué haces tú
- **No improvisas.** Si la hoja dice 40 °C y tú crees que a 45 °C iría mejor, trabajas a 40 °C.
- **Propones por el cauce.** Tus ideas valen: se las cuentas a tu responsable y se tramitan como propuesta de cambio.
- **Si descubres algo cambiado sin papeles, paras y avisas.** Una válvula distinta de la de ayer, una hoja con un número de versión que nadie te ha explicado, un bidón de un proveedor que no conoces. No decides tú si «da igual»: avisas al responsable de turno antes de seguir y queda registrado. El 6.11 pide que la emisión, la revisión y la retirada de los documentos estén controladas, así que una versión nueva siempre tiene detrás una aprobación que alguien puede enseñarte.

### Segunda parte: el proceso de gestión de riesgos
La evaluación del impacto del paso 2 no se hace a ojo. Se hace con la **gestión de riesgos de calidad** (*quality risk management*) de ICH Q9(R1). Ya sabes que el riesgo combina la probabilidad de un daño y su gravedad. Ahora verás el proceso completo, que la guía dibuja en su figura 1.

| Bloque | Pasos | Qué se hace |
|---|---|---|
| **Valoración del riesgo** (*risk assessment*, 4.3) | Identificación de peligros | Buscar qué puede ir mal |
| | Análisis del riesgo | Estimar la probabilidad y la gravedad; algunas herramientas añaden la detectabilidad |
| | Evaluación del riesgo | Comparar el resultado con unos criterios fijados |
| **Control del riesgo** (*risk control*, 4.4) | Reducción | Bajar el riesgo cuando supera el nivel aceptable |
| | Aceptación | Decidir, con información, que el riesgo que queda se asume |
| **Comunicación** (*risk communication*, 4.5) | En cualquier momento | Compartir la información entre quien decide y los demás |
| **Revisión** (*risk review*, 4.6) | Después | Volver a mirar el resultado cuando hay conocimiento o experiencia nuevos |

El apartado 4.3 propone tres preguntas para empezar:

1. ¿Qué puede ir mal?
2. ¿Qué probabilidad hay de que vaya mal?
3. ¿Qué consecuencias tendría?

Es lo mismo que haces antes de un viaje largo en coche. Qué puede ir mal: un pinchazo. Probabilidad: baja. Consecuencias: quedarte tirado de noche. Control: llevas rueda de repuesto. Revisión: miras su presión de vez en cuando.

### Lo que añadió la revisión de 2023
La guía es de 2005 y la revisión R1 se adoptó en enero de 2023. Comparando los dos textos, la revisión trae cuatro apartados nuevos.

- **Subjetividad** (5.3). Dos personas puntúan distinto el mismo fallo. La guía dice que la subjetividad puede afectar a todas las etapas. Aparece por los sesgos, por preguntas de riesgo mal definidas y por escalas de puntuación mal diseñadas. No se elimina del todo, pero se controla: atendiendo a los sesgos y a las suposiciones, usando bien las herramientas y aprovechando al máximo los datos.
- **Formalidad** (5.1). No es formal o informal: es una escala continua. Depende de tres factores: la incertidumbre (lo que no se sabe), la importancia de la decisión y la complejidad. A más de cualquiera de los tres, más formalidad: equipo de varios departamentos, herramienta reconocida, informe propio. La falta de recursos no justifica aplicar menos.
- **Decisiones basadas en el riesgo** (5.2). Unas son muy estructuradas, otras menos, y otras se toman con reglas ya fijadas, como un procedimiento que dice qué hacer sin repetir el análisis. Si tu instrucción dice «si la temperatura pasa de 50 °C, para la carga», alguien valoró ese riesgo antes y lo convirtió en regla.
- **Disponibilidad de producto** (6.1). Los problemas de calidad y de fabricación son una causa importante de desabastecimiento. La definición de daño de la guía incluye la pérdida de disponibilidad: que un paciente se quede sin su medicamento también es un daño.

### Las herramientas del anexo I
La guía avisa de que ninguna herramienta sirve para todo y de que no siempre hace falta una muy formal.

| Herramienta | Qué hace, según el anexo I | Ejemplo de planta |
|---|---|---|
| Métodos básicos (I.1) | Diagramas de flujo, hojas de comprobación, diagrama de causa y efecto | Dibujar los pasos de una descarga de centrífuga |
| AMFE (*FMEA*, I.2) | Evalúa los modos de fallo posibles y su efecto probable | Qué puede fallar en una carga de sólido |
| *FMECA* (I.3) | Añade gravedad, probabilidad y detectabilidad; da una puntuación relativa para ordenar los fallos | La tabla con puntuaciones de más abajo |
| Árbol de fallos (*FTA*, I.4) | Parte de un fallo y baja hacia sus causas, unidas con «y» y «o» | Investigar por qué un lote salió húmedo del secadero |
| *HACCP* (I.5) | Siete pasos; fija puntos críticos de control, sus límites y su vigilancia | Vigilar el filtro final antes del envasado |
| *HAZOP* (I.6) | Aplica palabras guía (no, más, parte de) a los parámetros para encontrar desviaciones | «Más temperatura» en un reactor |
| Análisis preliminar de peligros (*PHA*, I.7) | Usa la experiencia previa para identificar peligros; típico al principio de un proyecto | Primeras ideas sobre una sala nueva |
| Clasificación y filtrado de riesgos (*risk ranking and filtering*, I.8) | Combina varios factores en una puntuación para comparar riesgos muy distintos | Ordenar proveedores para decidir a cuál auditar antes |
| Herramientas estadísticas (I.9) | Gráficos de control, histogramas, diagramas de Pareto, entre otras | Gráfico de control del rendimiento lote a lote |

En el día a día oirás llamar AMFE también a la tabla con puntuaciones.

### Un AMFE resuelto: la carga de un sólido
Operación ficticia: cargar a mano 120 kg del intermedio KV-22, en sacos, por la boca de hombre del reactor R-310, que ya contiene disolvente bajo nitrógeno.

Escala de este ejemplo, del 1 al 5. Cada empresa define la suya; ICH Q9 no fija ninguna.

| Puntos | Gravedad (G) | Probabilidad (P) | Detección (D) |
|---|---|---|---|
| 1 | Sin efecto en la calidad | Muy rara | Se detecta siempre antes de seguir |
| 2 | Efecto leve | Rara | Casi siempre |
| 3 | Desviación; el lote se salva | Ocasional | A veces |
| 4 | Lote probablemente rechazado | Frecuente | Rara vez |
| 5 | Posible daño a personas o al paciente | Casi segura | No se detecta a tiempo |

El número de prioridad de riesgo es NPR = G × P × D. Con esta escala va de 1 a 125.

| N.º | Modo de fallo | G | P | D | NPR |
|---|---|---|---|---|---|
| 1 | Se carga un saco de otro material | 5 | 2 | 3 | 30 |
| 2 | Se carga una cantidad incorrecta | 4 | 3 | 2 | 24 |
| 3 | Cae un cuerpo extraño (trozo de saco, brida) | 4 | 3 | 4 | 48 |
| 4 | Entra aire por la boca de hombre y se pierde la inertización | 5 | 3 | 2 | 30 |
| 5 | Se carga demasiado deprisa y se forman grumos | 3 | 3 | 3 | 27 |
| 6 | No se anota el lote del saco en la hoja | 3 | 2 | 2 | 12 |

Criterio de este ejemplo: se actúa sobre todo fallo con NPR de 20 o más y sobre todo fallo con gravedad 5. El fallo 6 queda por debajo.

| N.º | Acción propuesta | G | P | D | NPR nuevo |
|---|---|---|---|---|---|
| 1 | Leer el código de barras de cada saco antes de abrirlo | 5 | 2 | 1 | 10 |
| 2 | Báscula verificada y segunda persona que comprueba la pesada | 4 | 2 | 1 | 8 |
| 3 | Rejilla en la boca de carga y recuento de sacos y bridas | 4 | 2 | 2 | 16 |
| 4 | Tolva de carga con doble válvula y barrido de nitrógeno; medir el oxígeno después | 5 | 1 | 1 | 5 |
| 5 | Tiempo mínimo de carga escrito en la hoja | 3 | 2 | 3 | 18 |
| 6 | Ninguna: se acepta | 3 | 2 | 2 | 12 |

Fíjate en que aquí la gravedad no baja en ningún fallo: las acciones tocan la probabilidad o la detección. Y los fallos 1 y 4 se tratan aunque su número no sea el más alto, porque su gravedad es la máxima.

La tolva del fallo 4 trae un problema nuevo: es un equipo más que limpiar. El 4.4 de ICH Q9 lo avisa: las medidas de reducción pueden introducir riesgos nuevos, y puede hacer falta volver a la valoración. Se añade el fallo 7, «tolva mal limpiada entre productos»: G 5, P 2, D 3, NPR 30. Con su limpieza escrita en el procedimiento y una comprobación visual firmada pasa a P 1 y D 2: NPR 10.

### Riesgo residual y aceptación
Después de las acciones ningún fallo queda en cero. Lo que queda es el **riesgo residual** (*residual risk*).

ICH Q9 lo dice en el 4.4: para algunos daños, ni las mejores prácticas eliminan el riesgo del todo. La **aceptación del riesgo** (*risk acceptance*) es una decisión informada de asumir lo que queda, y el nivel aceptable se decide caso por caso. No es mirar hacia otro lado: el fallo 6 se acepta porque se ha estudiado.

Y aceptar no es para siempre. Si un día aparece un cuerpo extraño pese a la rejilla, el 4.6 pide revisar: se vuelve a la tabla.

### Cómo se enlazan las dos partes
- **Todo cambio pasa por una evaluación de riesgos.** ICH Q10, la guía del sistema de calidad farmacéutico, lo dice en su apartado 3.2.3: la gestión de riesgos debe usarse para evaluar los cambios propuestos, con un esfuerzo y una formalidad proporcionales al riesgo.
- **Muchas valoraciones de riesgos acaban en cambios.** La tolva del fallo 4 es un equipo nuevo: no se instala sin su control de cambios.
- **Un cambio obliga a revisar los riesgos.** El 4.6 de ICH Q9 cita el control de cambios entre los sucesos que hacen revisar una valoración anterior.

Cómo se clasifica un cambio, quién lo aprueba, qué escala se usa y qué haces tú en cada caso lo dice el procedimiento de tu empresa: en planta manda siempre el procedimiento vigente (SOP).
`,
  plant: `
Planta ficticia, reactor R-310. El AMFE de la carga del intermedio KV-22 propuso una tolva de carga con doble válvula, la TC-310. Como es un equipo nuevo en contacto con el producto, se tramitó el control de cambios CC-041 y se clasificó como mayor.

Antes de usarla pasó todo esto: Garantía de Calidad aprobó la propuesta, ingeniería cualificó la tolva, se revisaron la hoja de producción (ahora en versión 05) y el procedimiento de limpieza, y Nuria, la jefa de turno, formó a los tres turnos con registro firmado. El cambio pide vigilar los tres primeros lotes con una medida de oxígeno adicional después de la carga.

Hoy fabricas el segundo de esos lotes. Compruebas que tu hoja es la versión 05 y que cita el CC-041. Cargas por la tolva, cierras la doble válvula y mides el oxígeno: 0,4 %. Lo anotas.

A media carga, la junta de la tapa de la tolva pierde. Íñigo, de mantenimiento, mira en el almacén: la junta de la misma referencia está agotada. Tiene otra de la misma medida y de otro material. «Entra igual», dice.

Paras. No es igual por igual: el material es distinto y toca el producto. Avisas a Nuria. Ella llama a Garantía de Calidad. Marta revisa la documentación del material, autoriza la junta como cambio temporal para este lote, con fecha de fin, y pide una inspección de la junta al terminar.

Anotas la parada, la hora, la referencia de la junta puesta y el número de la autorización. La carga sigue cuarenta minutos más tarde.

Nadie ha decidido a pie de reactor si la junta «da igual».
`,
  batchRecord: `
En la hoja de producción (*batch record*) un cambio deja varias huellas:

- **Versión de la hoja**: número de versión y fecha de entrada en vigor en la cabecera. Antes de empezar compruebas que trabajas con la vigente y no con una copia antigua.
- **Referencia del cambio**: a veces la hoja cita el número del control de cambios que originó la versión nueva (p. ej. CC-041).
- **Lote bajo evaluación**: una nota del tipo «primer lote tras el cambio» con muestras o controles adicionales. Los haces y los anotas todos, con su valor real, hora y firma.
- **Pasos nuevos**: casillas que antes no existían (lectura de código de barras, recuento de sacos y bridas, medida de oxígeno tras la carga, segunda firma en la pesada). Suelen venir de una valoración de riesgos.
- **Equipo usado**: el código del equipo realmente usado (p. ej. tolva TC-310). Si no coincide con el que nombra la hoja, no lo corriges tú: avisas.
- **Material**: fabricante y lote de cada saco o bidón. Si el fabricante no es el de siempre, paras y preguntas antes de cargar.
- **Intervenciones de mantenimiento**: número de la orden, pieza sustituida y su referencia, y quién autorizó seguir.
- **Incidencias**: cualquier cosa distinta de lo descrito, con hora, a quién avisaste y qué se decidió.

Lo que nunca verás en una hoja bien llevada es un cambio hecho a mano por el operador: un parámetro tachado y «mejorado», un paso añadido en el margen o un equipo sustituido sin referencia.
`,
  terms: [
    { es: "Control de cambios", en: "Change control", def: "Sistema formal para evaluar, aprobar y documentar los cambios que pueden afectar a la producción y al control del producto antes de hacerlos (ICH Q7, sección 13)." },
    { es: "Unidad de calidad", en: "Quality unit", def: "Unidad independiente de producción que reúne garantía de calidad y control de calidad. Aprueba los cambios que pueden afectar a la calidad." },
    { es: "Cambio menor / cambio mayor", en: "Minor change / major change", def: "Ejemplo de clasificación de los cambios según su naturaleza, su alcance y su efecto en el proceso. El criterio lo define cada empresa." },
    { es: "Sustitución igual por igual", en: "Like-for-like replacement", def: "Cambiar una pieza por otra idéntica en material, medida y referencia. Práctica de empresa: qué se admite lo fija el procedimiento." },
    { es: "Cambio temporal", en: "Temporary change", def: "Cambio autorizado para un tiempo o un número de lotes definido, con fecha de fin. Práctica de empresa." },
    { es: "Fecha de reanálisis", en: "Retest date", def: "Fecha a partir de la cual un material debe volver a analizarse para comprobar que sigue siendo apto para su uso." },
    { es: "Valoración del riesgo", en: "Risk assessment", def: "Identificar los peligros y analizar y evaluar los riesgos asociados. Primer bloque del proceso de ICH Q9." },
    { es: "Peligro", en: "Hazard", def: "Fuente posible de daño. El riesgo es la probabilidad de que ese daño ocurra combinada con su gravedad." },
    { es: "Control del riesgo", en: "Risk control", def: "Decisiones para reducir el riesgo hasta un nivel aceptable o para aceptarlo." },
    { es: "Riesgo residual", en: "Residual risk", def: "Riesgo que queda después de aplicar los controles. Nunca es cero." },
    { es: "Aceptación del riesgo", en: "Risk acceptance", def: "Decisión informada de asumir un riesgo concreto. El nivel aceptable se decide caso por caso." },
    { es: "Modo de fallo", en: "Failure mode", def: "Manera concreta en que una operación o un equipo puede fallar, por ejemplo cargar un saco equivocado." },
    { es: "Subjetividad", en: "Subjectivity", def: "Diferencias en cómo cada persona percibe y puntúa un riesgo. No se elimina del todo; se controla con datos, buenas escalas y atención a los sesgos." },
    { es: "Formalidad", en: "Formality", def: "Grado de rigor, estructura y documentación de una valoración de riesgos. Crece con la incertidumbre, la importancia y la complejidad." },
  ],
  quiz: [
    {
      kind: "number",
      q: "En el AMFE de la carga de sólido, el fallo «cae un cuerpo extraño» tiene G = 4, P = 3 y D = 4. ¿Cuál es su número de prioridad de riesgo?",
      answer: 48,
      tolerance: 0.001,
      unit: "",
      explain: "NPR = G × P × D = 4 × 3 × 4 = 48. Es el más alto de la tabla y el primero que se trata.",
    },
    {
      kind: "choice",
      q: "Mantenimiento no encuentra la junta original de una tapa y propone montar otra de la misma medida y de otro material. ¿Cómo se trata?",
      options: [
        "Como igual por igual, porque la medida de la junta es la misma",
        "Como una corrección, porque solo arregla la fuga de la tapa",
        "Como un cambio, porque el material nuevo toca el producto",
        "Como nada especial, si la junta nueva no pierde al probarla",
      ],
      answer: 2,
      explain: "Igual por igual exige una pieza idéntica, también en material. Otro material en contacto con el producto es un cambio y se evalúa antes; el criterio exacto lo fija el procedimiento de la empresa.",
    },
    {
      kind: "number",
      q: "Tras poner una rejilla y un recuento de sacos y bridas, el fallo «cae un cuerpo extraño» queda con G = 4, P = 2 y D = 2. ¿Cuál es el nuevo NPR?",
      answer: 16,
      tolerance: 0.001,
      unit: "",
      explain: "NPR = 4 × 2 × 2 = 16. Antes era 48: ha bajado a un tercio sin que cambie la gravedad.",
    },
    {
      kind: "choice",
      q: "Empiezas el turno y ves que la válvula de fondo del reactor es de otro modelo. Nadie te ha avisado y la hoja no dice nada. ¿Qué haces?",
      options: [
        "Avisar al responsable de turno antes de usarla y dejarlo registrado",
        "Usarla con cuidado y comentarlo al final del turno si da problemas",
        "Anotar tú mismo el modelo nuevo en la hoja y seguir con el lote",
        "Pedir a mantenimiento que vuelva a montar la válvula que había",
      ],
      answer: 0,
      explain: "Un equipo distinto sin papeles puede ser un cambio no controlado. No decides tú si da igual: paras, avisas y queda registrado.",
    },
    {
      kind: "choice",
      q: "Se te ocurre que cargar el sólido en dos mitades evitaría los grumos. La hoja dice cargarlo de una vez. ¿Qué es lo correcto?",
      options: [
        "Probarlo en un lote y, si sale bien, contarlo después al responsable",
        "Hacerlo siempre así, porque es una mejora y no afecta a la calidad",
        "Olvidarlo, porque un operador no puede opinar sobre el proceso",
        "Seguir la hoja y proponer la idea a tu responsable como cambio",
      ],
      answer: 3,
      explain: "Los pasos del proceso están en la lista del apartado 13.11 de ICH Q7. La idea se propone por el cauce y, hasta que se apruebe, se trabaja como dice la hoja.",
    },
    {
      kind: "number",
      q: "Con una escala del 1 al 5 para gravedad, probabilidad y detección, ¿cuál es el NPR más alto posible?",
      answer: 125,
      tolerance: 0.001,
      unit: "",
      explain: "El máximo es 5 × 5 × 5 = 125. El mínimo es 1 × 1 × 1 = 1: con esta escala ningún fallo llega a cero.",
    },
    {
      kind: "choice",
      q: "Se ha implantado un cambio aprobado en el proceso. Según el apartado 13.15 de ICH Q7, ¿qué hay que hacer después?",
      options: [
        "Repetir siempre la validación completa del proceso de fabricación",
        "Evaluar los primeros lotes producidos o analizados con el cambio",
        "Avisar a la autoridad sanitaria antes de fabricar el siguiente lote",
        "Volver al proceso anterior durante tres lotes para poder comparar",
      ],
      answer: 1,
      explain: "El 13.15 pide evaluar los primeros lotes producidos o analizados con el cambio. Por eso a veces verás lotes con controles adicionales.",
    },
    {
      kind: "number",
      q: "El fallo «se carga un saco de otro material» tiene G = 5, P = 2 y D = 3. Con la lectura de código de barras la detección pasa a D = 1. ¿Cuántos puntos baja el NPR?",
      answer: 20,
      tolerance: 0.001,
      unit: "puntos",
      explain: "Antes: 5 × 2 × 3 = 30. Después: 5 × 2 × 1 = 10. Baja 30 − 10 = 20 puntos.",
    },
    {
      kind: "choice",
      q: "Para evitar la entrada de aire se instala una tolva de carga. Ahora hay un equipo más que limpiar entre productos. Según ICH Q9, ¿qué corresponde?",
      options: [
        "Nada: el riesgo de la entrada de aire ya ha quedado reducido",
        "Retirar la tolva, porque una medida no puede crear riesgos",
        "Aceptar el riesgo nuevo sin estudiarlo, porque es residual",
        "Volver a la valoración y evaluar el riesgo nuevo de la tolva",
      ],
      answer: 3,
      explain: "El apartado 4.4 de ICH Q9 avisa de que las medidas de reducción pueden introducir riesgos nuevos y de que puede hacer falta revisar la valoración. Además, la tolva necesita su control de cambios.",
    },
    {
      kind: "choice",
      q: "Dos turnos puntúan el mismo fallo: uno pone probabilidad 2 y el otro 4. Según ICH Q9(R1), ¿cómo se controla esa diferencia?",
      options: [
        "Con datos, escalas bien definidas y atención a los sesgos",
        "Tomando siempre la puntuación más baja de las dos propuestas",
        "Dejando que decida el turno con más antigüedad en la planta",
        "Quitando la probabilidad del cálculo para evitar la discusión",
      ],
      answer: 0,
      explain: "El apartado 5.3 dice que la subjetividad no se elimina del todo, pero se controla atendiendo a sesgos y suposiciones, usando bien las herramientas y aprovechando al máximo los datos.",
    },
  ],
};
