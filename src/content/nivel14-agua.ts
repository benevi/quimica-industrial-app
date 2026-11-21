import type { Lesson } from "./types";

export const aguaAFondo: Lesson = {
  slug: "agua-a-fondo",
  level: 14,
  order: 2,
  title: "Agua farmacéutica a fondo: cómo se produce, se reparte y se vigila",
  titleEn: "Pharmaceutical water in depth: how it is produced, distributed and monitored",
  minutes: 40,
  summary:
    "Qué lleva el agua del grifo, qué calidad pide cada etapa de un principio activo, qué quita cada equipo del tren de tratamiento, por qué el anillo nunca se para, qué es el biofilm, cómo se sanitiza y se muestrea, y qué hace el operador en cada toma de agua.",
  body: `
En la lección anterior viste las calidades de agua y los valores de la farmacopea. Aquí vas a entender qué hay detrás: qué se le quita al agua, con qué equipo, cómo se guarda y qué te toca a ti cada vez que abres un punto de uso.

### Por qué el agua es una materia prima distinta
El agua es lo que más se usa en una planta de principios activos: entra en reacciones, lava tortas en la centrífuga y en el filtro, y aclara los equipos tras la limpieza. Pero un bidón de disolvente se analiza y se aprueba antes de usarlo, y el agua no: se saca de un sistema que la da al momento, sin análisis previo ni liberación de lote. Así lo explica la guía de la Organización Mundial de la Salud (OMS) sobre agua de uso farmacéutico. Además, los resultados microbiológicos tardan días, porque hay que dejar crecer las colonias. Cuando llegan, el agua ya está dentro del producto.

Por eso se confía en un sistema bien diseñado y vigilado, no en analizar al final.

### Qué lleva el agua del grifo
El agua del grifo es limpia para beber, pero no es agua sola. Lleva:

- **Sales disueltas.** Calcio, magnesio, sodio, cloruros, sulfatos, nitratos. Son las que dejan la cal en la ducha.
- **Materia orgánica.** Sustancias con carbono que el agua arrastra por el camino. Una guía de inspección de la Administración de Alimentos y Medicamentos de Estados Unidos (FDA) cuenta el caso de una planta que tomaba agua de un río y encontró plaguicidas de los campos vecinos.
- **Cloro.** Se añade para que no crezcan microbios por el camino.
- **Partículas.** Arena fina, óxido.
- **Microorganismos.** Pocos, pero vivos.
- **Endotoxinas.** Trozos de la pared de ciertas bacterias.

En España la calidad del agua de consumo la fija el Real Decreto 3/2023. Su anexo I admite, por ejemplo, una conductividad de hasta 2500 µS/cm a 20 °C, 50 mg/L de nitrato, 5,0 mg/L de carbono orgánico total y un recuento de colonias a 22 °C de 100 UFC por mililitro. Un agua así es sana, pero cambia con la estación y con el origen, y para un medicamento eso es demasiada variación.

### Qué calidad pide la norma para un principio activo
La guía ICH Q7, la de las buenas prácticas de fabricación de principios activos, dice en su apartado 4.3:

- **4.30:** hay que demostrar que el agua es adecuada para su uso.
- **4.31:** salvo que se justifique otra cosa, el agua de proceso debe cumplir como mínimo las guías de la OMS para agua de bebida.
- **4.32:** si el agua potable no basta, se fijan especificaciones propias: características físicas y químicas, recuento microbiano, microorganismos indeseables y endotoxinas.
- **4.33:** si la planta trata el agua para darle una calidad definida, el tratamiento se valida y se vigila con límites de acción.
- **4.34:** si un principio activo no estéril va a un medicamento estéril, en el agua de las etapas finales de aislamiento y purificación se vigilan recuento microbiano, microorganismos indeseables y endotoxinas.

La Agencia Europea de Medicamentos (EMA) lo concreta en una tabla. Lo que toca a una planta de síntesis:

| Tipo de principio activo | Etapa | Calidad mínima |
|---|---|---|
| Sin requisito de esterilidad ni de ausencia de pirógenos | Síntesis de intermedios, aislamiento final y purificación | Agua potable (purificada si hace falta más pureza química) |
| No estéril, sólido, para un medicamento inyectable | Aislamiento final y purificación | Agua purificada |
| Estéril y sin pirógenos | Aislamiento final y purificación | Agua para inyectables |

Para la limpieza, la misma guía admite agua potable en el aclarado inicial y pide que el **aclarado final** se haga con la misma calidad de agua con que se fabrica ese principio activo.

Son mínimos: tu planta puede usar agua purificada (*purified water*, PW) en más etapas. El agua para inyectables (*water for injections*, WFI) se reserva para lo estéril o lo que acaba en una inyección.

Hay calidades intermedias que no son de farmacopea: el **agua descalcificada** (sin cal) y el **agua desionizada** (sin sales, pasada por resinas). La FDA pide atención especial a esta última, porque se contamina con facilidad.

### Los parámetros que se vigilan
**Conductividad** (*conductivity*). El agua pura casi no conduce la electricidad. La conducen los iones, es decir, las sales disueltas. Por eso, al quitar sales, la conductividad baja. Es una medida rápida de pureza química y se tiene en línea, de forma continua. Un aviso de la FDA: la conductividad no dice nada de los microbios.

**Carbono orgánico total** (*total organic carbon*, TOC). Mide cuánta materia orgánica hay, contando el carbono que contiene. La materia orgánica es impureza y, además, alimento para las bacterias.

**Recuento microbiano.** El laboratorio pone el agua, o el filtro por el que la ha pasado, sobre un medio con alimento y espera. Cada microbio vivo, o cada grupito, se multiplica hasta formar una mancha visible: una colonia. Por eso no se cuentan «bacterias», sino **unidades formadoras de colonias** (UFC; *colony forming units*, CFU). Una colonia es 1 UFC.

**Endotoxinas** (*endotoxins*). Son piezas de la pared de las bacterias gramnegativas y se sueltan cuando la bacteria muere y se rompe. Inyectadas en una persona provocan desde fiebre hasta la muerte. Y matar la bacteria no las elimina: la FDA recuerda que los filtros esterilizantes no las retienen y que destruirlas con calor seco exige temperaturas como 250 °C durante 45 minutos, muy lejos de las de una sanitización con agua caliente. Lo sensato es evitar que se formen.

Los **nitratos** son una sal disuelta más: el tratamiento los reduce con el resto.

### Tres cuentas con los límites
La FDA da dos límites de acción máximos: 100 UFC/mL para el agua purificada y 10 UFC en 100 mL para el agua para inyectables. Para esta última, la misma FDA recuerda el límite de endotoxinas de la farmacopea de Estados Unidos: 0,25 unidades de endotoxina por mililitro.

**Cuenta 1. Pasar a la misma unidad.** 10 UFC en 100 mL son 10 / 100 = 0,1 UFC/mL. El límite del agua purificada es 100 / 0,1 = 1000 veces mayor.

**Cuenta 2. Del filtro al resultado.** El laboratorio filtra 10 mL de un punto de uso y cuenta 620 colonias (valor de ejemplo): 620 / 10 = 62 UFC/mL.

**Cuenta 3. Comparar con los límites.** Si tu planta tiene la alerta en 50 UFC/mL (valor de ejemplo) y la acción en 100 UFC/mL, con 62 UFC/mL se ha pasado la alerta, pero no la acción.

- **Límite de alerta** (*alert level*): el sistema se está saliendo de lo normal. Se documenta y se mira si es un caso aislado o el principio de una mala tendencia.
- **Límite de acción** (*action limit*): hay que investigar la causa, corregirla y valorar el impacto en lo fabricado con esa agua.

Ninguno es un «aprobado o suspenso», insiste la FDA: son señales para actuar.

### El tren de tratamiento, etapa a etapa
**Filtración.** Un lecho de arena u otro filtro de profundidad retiene las partículas.

**Descalcificación** (*softening*). El calcio y el magnesio forman la cal, que taparía las membranas. El descalcificador es un depósito de bolitas de resina cargadas de sodio: la resina atrapa el calcio y el magnesio y suelta sodio a cambio. Es un intercambio iónico: no quita sales, cambia unas por otras que no incrustan. Cuando la resina se agota, se regenera con salmuera (agua con mucha sal).

**Quitar el cloro.** El cloro protege el agua, pero es un oxidante y estropea las membranas de ósmosis. Se quita con **carbón activo** o dosificando un reductor como el metabisulfito sódico. Se hace lo más tarde posible: a partir de ahí nada frena a los microbios.

**Ósmosis inversa** (*reverse osmosis*, RO). Imagina dos vasos separados por una membrana que deja pasar el agua pero no las sales. De forma natural el agua pasa hacia el lado más salado: eso es la ósmosis. Si una bomba empuja el lado salado con presión suficiente, el agua va al revés y deja las sales atrás. El agua limpia que atraviesa la membrana es el **permeado** (*permeate*). La que se queda con las sales es el **rechazo** o concentrado. La membrana retiene también casi toda la materia orgánica, las bacterias y las endotoxinas, pero no es una barrera absoluta.

**Electrodesionización** (*electrodeionization*, EDI). Pule el permeado: resinas y corriente eléctrica retiran las pocas sales que quedan.

**Luz ultravioleta** (*ultraviolet*, UV). Daña a los microbios que pasan ante la lámpara, pero no esteriliza: según la FDA, en el mejor caso mata el 90 % de lo que entra. De 1000 UFC quedarían 100.

**Destilación.** Para el agua para inyectables: se hierve el agua y se condensa el vapor. Desde 2017 la farmacopea europea admite también un proceso equivalente, como la ósmosis inversa unida a otras técnicas.

| Etapa | Qué quita | Qué se vigila |
|---|---|---|
| Filtro de profundidad | Partículas | Lavado a contracorriente |
| Descalcificador | Calcio y magnesio | Regeneración con salmuera |
| Carbón activo o reductor | Cloro | Que no llegue oxidante a la ósmosis |
| Ósmosis inversa | Sales, materia orgánica, microbios, endotoxinas | Presiones, caudales, conductividad del permeado |
| Electrodesionización | Sales residuales | Conductividad de salida |
| Lámpara ultravioleta | Microorganismos | Lámpara encendida y vaina limpia |
| Ultrafiltración (otra membrana) o destilación | Endotoxinas y microbios | Conductividad, TOC, temperatura |

Arena, carbón y resinas pueden criar microbios ellos mismos. Por eso también se lavan, se regeneran y se sanitizan.

### Las cuentas de la ósmosis inversa
**Rechazo de sales.** Dice qué parte de las sales no pasa.

Rechazo = (sales en la alimentación − sales en el permeado) / sales en la alimentación × 100

Ejemplo de la FDA: entran 300 partes por millón (ppm) de sólidos disueltos. Si salen 15 ppm, el rechazo es (300 − 15) / 300 × 100 = 95 %. Si salen 30 ppm, es el 90 %. En la práctica se sigue con la conductividad. Si el rechazo baja, algo falla: membrana rota, una junta, incrustación o ensuciamiento.

**Recuperación.** Dice qué parte del agua que entra sale como permeado.

Recuperación = caudal de permeado / caudal de alimentación × 100

Entran 1000 L/h y salen 750 L/h de permeado (valores de ejemplo): 750 / 1000 × 100 = 75 %. Los otros 250 L/h son el rechazo. Si casi todas las sales se quedan ahí, su concentración se multiplica por 1000 / 250 = 4: con 300 ppm de entrada, unas 1200 ppm. Por eso se descalcifica antes: en ese lado tan concentrado la cal precipitaría sobre la membrana.

**Endotoxinas.** Según la FDA, muchos destiladores solo garantizan reducirlas entre 2,5 y 3 logaritmos. Tres logaritmos es dividir por 1000: con un pico de 250 unidades por mililitro a la entrada, salen 250 / 1000 = 0,25, justo el límite. Ningún equipo final arregla un pretratamiento malo.

### Guardar y repartir: el depósito y el anillo
El agua recién hecha va a un **depósito** cerrado. Al vaciarse entra aire, y ese aire pasa por un **filtro de venteo** (*vent filter*) hidrófobo que retiene bacterias. Su integridad se comprueba, y a menudo va calentado para que la condensación no lo tapone. Una bola de rociado moja toda la pared interior.

Desde el depósito, una bomba empuja el agua por un **anillo de distribución** (*distribution loop*) que recorre la planta y vuelve al depósito. La OMS pide circulación continua. El motivo: **agua parada, agua que se estropea**. La FDA cuenta un caso: un sistema pequeño se dejó parado un día y pasó de no tener microbios detectables a estar contaminado.

- **Flujo turbulento.** El agua circula revuelta para que a los microbios les cueste agarrarse a la pared. La OMS da como referencia un número de Reynolds mayor de 4000.
- **Sin ramales muertos** (*dead legs*). Son trozos de tubo que salen del anillo y acaban en una válvula cerrada: callejones donde el agua no se renueva. La regla clásica que cita la FDA: no más de seis diámetros del tubo del ramal, contados desde el eje del tubo principal. Con un ramal de 25 mm, 6 × 25 = 150 mm. Nació para sistemas muy calientes; en los demás, la FDA pide eliminar cualquier ramal si se puede.
- **Pendiente y vaciado.** Las tuberías llevan una pendiente mínima recomendada de 1/100, es decir, 1 cm por metro.
- **Material liso y soldado.** Acero inoxidable 316L, soldadura orbital (la hace una máquina que gira alrededor del tubo), uniones sanitarias con abrazadera y nada de roscas.
- **Válvulas de membrana.** Las de bola guardan un charco dentro cuando están cerradas.
- **Sin filtros en el anillo ni en los puntos de uso.** Un filtro final puede esconder la contaminación.

**Anillo caliente o frío.** Un anillo caliente se protege solo: la FDA considera autosanitizantes los sistemas entre 65 y 80 °C, y el anexo 1 de las normas europeas pone como ejemplo, para el agua para inyectables, circular siempre por encima de 70 °C. Un anillo frío, a temperatura ambiente, necesita ayuda: lámpara ultravioleta, ozono o sanitizaciones periódicas.

### El biofilm
Un **biofilm** (*biofilm*) es una comunidad de microbios pegada a una superficie mojada. Primero se agarran unos pocos. Luego fabrican una baba que los ancla a la pared y entre sí, y dentro crecen protegidos. De vez en cuando se suelta un trozo y viaja con el agua.

Es difícil de quitar, dice la EMA, porque la capa protege a los microbios del roce del agua y de los desinfectantes, y si queda un resto vuelve a crecer deprisa. Y es difícil de ver porque suelta microbios a ratos: la FDA dice que no es raro encontrar 10 UFC/mL en una muestra y 100 o 1000 en la siguiente. Todo el diseño anterior va contra el biofilm.

### Sanitización
Sanitizar es reducir los microbios del sistema de forma periódica.

- **Térmica.** Agua caliente o vapor. La OMS habla de sanitizar por encima de 70 °C durante un tiempo definido; la EMA, de usar en general más de 75 °C.
- **Química.** Ozono, peróxido de hidrógeno, ácido peracético o hipoclorito sódico. El ozono, un oxidante más fuerte que el cloro, se destruye con luz ultravioleta antes de usar el agua. Tras cualquier producto químico hay un aclarado validado.

La frecuencia está en el procedimiento. Después de sanitizar se analiza el agua antes de volver a usarla.

### Vigilancia y muestreo
Los instrumentos en línea (conductividad, TOC, caudal, presión, temperatura) vigilan de forma continua y dan alarma. Lo microbiológico se vigila con muestras.

La regla de la FDA y de la OMS para tomar la muestra es: **se muestrea como se usa**. Si el agua se saca siempre con manguera, la muestra se toma al final de esa manguera. Si el procedimiento manda purgar antes de usar, se purga igual antes de muestrear. El envase para microbiología es estéril y no se toca ni la boca ni el interior del tapón.

Los puntos se muestrean de forma rotatoria según un plan. Para agua para inyectables, la EMA pide muestrear el retorno del anillo cada día de uso y todos los puntos al menos una vez por semana.

Los resultados se miran en **tendencia**: no el dato suelto, sino la línea que dibujan. Subir los límites para que no salten puede tapar un sistema que falla.

Si un punto supera el límite de acción se abre una **desviación**: se investiga la causa, se corrige y se valora el impacto en los lotes fabricados con esa agua. Como el resultado llega días después, esos lotes ya existen: por eso se anota siempre de qué punto salió el agua.

### Cualificación en tres fases
Un sistema nuevo se cualifica antes de usarlo. La OMS describe tres fases:

1. **Fase 1**, al menos dos semanas. Muestreo intensivo en cada etapa y punto de uso. El agua no se usa para fabricar.
2. **Fase 2**, al menos otras dos semanas. El agua puede usarse si Garantía de Calidad lo aprueba.
3. **Fase 3**, hasta completar al menos doce meses entre las tres, para ver el efecto de las estaciones.

### El agua en tu turno
- **Cargar agua a un reactor.** Usa solo el punto de uso que indica la hoja. Purga antes si el procedimiento lo pide. Mide con el totalizador y anota el volumen y el punto.
- **El orden de las válvulas.** El tramo entre la válvula del anillo y tu salida, si se vació, está lleno de aire de la sala. Remedio que describe la FDA: abrir primero la válvula de fuera y luego la del anillo, para que el agua barra el tramo.
- **Mangueras.** Solo las identificadas para agua purificada. Al terminar se vacían y se cuelgan, nunca con agua dentro ni con la punta en el suelo o metida en un líquido. Una manguera flexible es muy difícil de sanitizar.
- **Lavado final de equipos.** El último aclarado va con la calidad de agua del proceso, y a menudo se toma muestra de ese aclarado.
- **Avisar.** Una fuga, un goteo en un punto de uso o una alarma de conductividad o de TOC se comunican antes de usar el agua.

### Las otras aguas de la planta
El agua de torre, la de caldera y la de contra incendios no son farmacéuticas (las tienes en las lecciones de vapor y de calor y frío). La FDA pide buscar cualquier conexión cruzada entre estas redes y la de agua potable, y marcar bien las líneas. ICH Q7 pide tuberías identificadas y desagües con corte de aire para que nada retroceda. Nunca unas dos redes con una manguera.

En planta manda siempre el procedimiento vigente (SOP): los límites, las frecuencias y las temperaturas de tu sistema son los que diga.
`,
  plant: `
Turno de mañana en la nave 3. La hoja del lote ficticio KL-2231 dice: «Cargar 800 L de agua purificada al reactor R-301 desde el punto de uso PU-12».

Marta, la operadora, mira antes la pantalla del anillo AP-01: conductividad de retorno estable, TOC sin alarma, bomba en marcha. Coge la manguera marcada «Agua purificada PU-12», comprueba que está vacía y seca y la conecta. Abre primero la válvula del extremo y después la del anillo, y purga al desagüe el tiempo que marca el procedimiento. Pone el totalizador a cero, carga hasta 800 L y anota lectura, punto de uso y hora.

A media carga del siguiente reactor salta en la pantalla «Conductividad alta retorno AP-01». Marta cierra el punto de uso, no carga más agua y avisa al jefe de turno. Mantenimiento encuentra que la conductividad del permeado de la ósmosis ha subido: el rechazo de sales, que solía estar en el 98 %, ha caído al 94 % (valores de ejemplo). El sistema desvía el agua y no deja que entre al depósito.

Calidad abre una desviación. Como en la hoja consta que los 800 L de R-301 se cargaron con el anillo sin alarmas y a qué hora, pueden demostrar que ese lote no está afectado. El segundo reactor queda a la espera.

Dos días después llega el recuento microbiano del muestreo semanal de PU-12: 12 UFC/mL, por debajo del límite de alerta de la planta. Se archiva con la tendencia. Al desconectar, Marta vacía la manguera y la cuelga en su soporte, sin dejar agua dentro.
`,
  batchRecord: `
- Calidad de agua usada (potable, purificada o para inyectables) y **código del punto de uso**.
- Comprobación previa: sistema de agua sin alarmas activas de conductividad ni de TOC, con fecha, hora y firma.
- Purga realizada antes de la toma, si el procedimiento la pide (tiempo o volumen).
- Lectura inicial y final del **totalizador** y volumen cargado, comparado con el teórico de la hoja.
- Identificación de la manguera utilizada.
- En limpiezas: calidad del agua del aclarado final, volumen, y muestra del agua de aclarado con su código, hora y quién la tomó.
- Cualquier anomalía: fuga, goteo, alarma durante la carga, y a quién se avisó.
- Si después aparece un resultado fuera de límite en ese punto, estos datos son los que permiten saber qué lotes usaron esa agua.
`,
  terms: [
    { es: "Unidad formadora de colonias (UFC)", en: "Colony forming unit (CFU)", def: "Cada colonia visible que crece en el medio de cultivo a partir de uno o varios microbios; es la unidad del recuento microbiano." },
    { es: "Endotoxina", en: "Endotoxin", def: "Componente de la pared de las bacterias gramnegativas que se libera al morir la célula y provoca fiebre si se inyecta." },
    { es: "Carbono orgánico total", en: "Total organic carbon (TOC)", def: "Medida de la materia orgánica del agua, expresada como el carbono que contiene." },
    { es: "Descalcificación", en: "Softening", def: "Intercambio del calcio y el magnesio del agua por sodio en una resina, para evitar incrustaciones." },
    { es: "Ósmosis inversa", en: "Reverse osmosis (RO)", def: "Paso forzado del agua a presión a través de una membrana que deja atrás sales y otros contaminantes." },
    { es: "Permeado", en: "Permeate", def: "Corriente de agua limpia que atraviesa la membrana de ósmosis." },
    { es: "Rechazo o concentrado", en: "Reject / concentrate", def: "Corriente que no atraviesa la membrana y se lleva las sales concentradas." },
    { es: "Electrodesionización", en: "Electrodeionization (EDI)", def: "Etapa de pulido que retira sales residuales con resinas y corriente eléctrica." },
    { es: "Anillo de distribución", en: "Distribution loop", def: "Circuito cerrado por el que el agua circula sin parar desde el depósito a los puntos de uso y de vuelta." },
    { es: "Ramal muerto", en: "Dead leg", def: "Tramo de tubería sin circulación donde el agua se queda parada y puede formarse biofilm." },
    { es: "Biofilm", en: "Biofilm", def: "Comunidad de microbios adherida a una superficie mojada y protegida por una capa que ellos mismos fabrican." },
    { es: "Sanitización", en: "Sanitization", def: "Tratamiento periódico con calor o con productos químicos para reducir los microbios del sistema." },
    { es: "Límite de alerta", en: "Alert level", def: "Valor que indica que el sistema se aparta de su comportamiento normal; se documenta y se revisa la tendencia." },
    { es: "Límite de acción", en: "Action limit", def: "Valor que obliga a investigar la causa, corregir y valorar el impacto en el producto." },
  ],
  quiz: [
    {
      kind: "number",
      q: "El laboratorio filtra 100 mL de agua de un punto de uso y cuenta 250 colonias. ¿Cuál es el resultado en UFC/mL?",
      answer: 2.5,
      tolerance: 0.01,
      unit: "UFC/mL",
      explain: "Se divide el número de colonias entre los mililitros filtrados: 250 / 100 = 2,5 UFC/mL.",
    },
    {
      kind: "choice",
      q: "Vas a cargar agua purificada y en la pantalla del anillo hay una alarma activa de conductividad alta. ¿Qué haces?",
      options: [
        "Cargar igual, porque la conductividad no mide los microbios del agua",
        "Purgar el doble de tiempo y cargar después con el totalizador a cero",
        "No usar el agua, avisar y esperar a que confirmen que el sistema cumple",
        "Cargar desde otro punto de uso del mismo anillo que quede más lejos",
      ],
      answer: 2,
      explain: "Una alarma de conductividad indica que el agua puede llevar más sales de lo permitido; todo el anillo lleva la misma agua, así que no se usa hasta que Calidad y Mantenimiento confirmen que cumple.",
    },
    {
      kind: "number",
      q: "A una ósmosis inversa le entra agua con 400 µS/cm de conductividad y el permeado sale con 10 µS/cm. Tomando la conductividad como medida de las sales, ¿qué tanto por ciento de rechazo de sales tiene?",
      answer: 97.5,
      tolerance: 0.01,
      unit: "%",
      explain: "Rechazo = (400 − 10) / 400 × 100 = 97,5 %.",
    },
    {
      kind: "choice",
      q: "El recuento de un punto de uso de agua purificada sale 62 UFC/mL. Tu planta tiene la alerta en 50 UFC/mL y la acción en 100 UFC/mL. ¿Cómo se interpreta?",
      options: [
        "Supera la alerta: se documenta y se revisa si es aislado o tendencia",
        "Supera la acción: hay que rechazar ya todos los lotes de la semana",
        "Está dentro de lo normal: no hace falta registrar ni revisar nada",
        "Es un error de laboratorio: se repite la muestra y se borra el dato",
      ],
      answer: 0,
      explain: "62 está entre la alerta (50) y la acción (100): se documenta y se investiga si es un caso aislado o el inicio de una mala tendencia; no es un rechazo automático y el dato nunca se borra.",
    },
    {
      kind: "number",
      q: "Una ósmosis inversa recibe 2000 L/h de agua y produce 1500 L/h de permeado. ¿Cuál es su tanto por ciento de recuperación?",
      answer: 75,
      tolerance: 0.01,
      unit: "%",
      explain: "Recuperación = permeado / alimentación × 100 = 1500 / 2000 × 100 = 75 %.",
    },
    {
      kind: "number",
      q: "A esa misma ósmosis le entran 2000 L/h con 300 mg/L de sales y el rechazo son 500 L/h. Si suponemos que todas las sales se quedan en el rechazo, ¿qué concentración de sales lleva el rechazo?",
      answer: 1200,
      tolerance: 0.01,
      unit: "mg/L",
      explain: "Las sales que entran (2000 × 300) salen todas en 500 L/h: 2000 × 300 / 500 = 1200 mg/L, cuatro veces la de entrada.",
    },
    {
      kind: "choice",
      q: "La hoja pide tomar una muestra de agua en un punto de uso donde el agua se saca siempre con manguera y purgando antes. ¿Cómo se toma la muestra?",
      options: [
        "Directamente de la válvula, sin manguera, para que salga más limpia",
        "Sin purgar, para pillar el agua que llevaba más tiempo en la toma",
        "Con una manguera nueva y estéril que se usa solo para muestrear",
        "Al final de la manguera habitual y después de la purga habitual",
      ],
      answer: 3,
      explain: "La FDA y la OMS piden muestrear igual que se usa: con la misma manguera y la misma purga, para que el resultado refleje el agua que de verdad llega al proceso.",
    },
    {
      kind: "choice",
      q: "Durante una parada, alguien propone apagar la bomba del anillo de agua purificada frío una semana para ahorrar energía. ¿Cuál es el problema principal?",
      options: [
        "Que el agua parada pierde sus sales y baja demasiado la conductividad",
        "Que en el agua parada los microbios se adhieren y forman biofilm",
        "Que la bomba se avería si se arranca después de varios días parada",
        "Que el depósito se queda sin presión y el filtro de venteo se seca",
      ],
      answer: 1,
      explain: "El agua estancada permite que los microbios se agarren a la pared y formen biofilm, muy difícil de eliminar después; por eso el anillo se diseña para circular siempre.",
    },
    {
      kind: "number",
      q: "Un destilador reduce las endotoxinas 3 logaritmos, es decir, las divide por 1000. Si el agua de alimentación tiene 100 unidades de endotoxina por mililitro, ¿cuántas quedan en el destilado?",
      answer: 0.1,
      tolerance: 0.01,
      unit: "EU/mL",
      explain: "Tres logaritmos es dividir por 1000: 100 / 1000 = 0,1 unidades de endotoxina por mililitro.",
    },
    {
      kind: "choice",
      q: "Al acabar una carga de agua purificada te queda la manguera llena de agua. ¿Qué es lo correcto?",
      options: [
        "Dejarla conectada y llena, así el siguiente turno no tiene que purgar",
        "Meter la punta en un cubo con agua purificada para que no se seque",
        "Dejarla enrollada en el suelo, llena, con la punta hacia el desagüe",
        "Vaciarla y colgarla en su soporte, como indique el procedimiento",
      ],
      answer: 3,
      explain: "El agua que queda parada dentro de una manguera es un sitio ideal para que crezcan microbios, y una manguera flexible es muy difícil de sanitizar; se vacía y se guarda según el procedimiento.",
    },
  ],
};
