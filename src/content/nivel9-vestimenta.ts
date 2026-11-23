import type { Lesson } from "./types";

export const vestimentaAFondo: Lesson = {
  slug: "vestimenta-a-fondo",
  level: 9,
  order: 8,
  title: "Vestimenta, higiene y comportamiento en zonas limpias a fondo",
  titleEn: "Gowning, hygiene and cleanroom behaviour in depth",
  minutes: 38,
  summary:
    "Por qué la persona es la mayor fuente de contaminación de una sala, qué piden ICH Q7 y las GMP europeas sobre higiene y salud, cómo se lavan las manos según la OMS, qué ropa lleva cada grado del anexo 1, cómo se viste uno en la esclusa, cómo se comporta dentro y qué hacer si se rompe un guante en plena descarga.",
  body: `
En la lección «Vestimenta y comportamiento en zonas limpias» viste las reglas básicas: sin joyas, de arriba abajo, despacio. Aquí vas a entender de dónde salen esas reglas, qué dice exactamente cada norma, qué cambia entre una sala de producto estéril y la sala de acabado de una planta de principios activos (API) como la tuya, y qué haces cuando algo sale mal con el producto abierto delante.

### Tú eres la mayor fuente de contaminación
En una sala limpia (*cleanroom*) el aire, las presiones y las superficies están controlados. Lo único que se mueve, respira, habla y suda es la persona.

Tu cuerpo suelta sin parar tres cosas:

- **Piel**: escamas diminutas que se desprenden solas y que llevan bacterias pegadas.
- **Pelo**: cabello, barba, cejas; y lo que llevan encima.
- **Gotas**: al hablar, toser o estornudar salen gotitas de saliva con microorganismos de la boca y la nariz.

El anexo 1 de las GMP europeas (2022) nombra al personal, junto a los materiales y el entorno, entre las fuentes externas de contaminación de las que hay que proteger el producto (apartado 2.1). La guía de la FDA de 2004 sobre fabricación aséptica dice que la ropa debe ser una barrera frente a las partículas que genera el cuerpo y los microorganismos que suelta.

Una cifra del propio anexo 1 lo enseña bien. Su tabla 1 da el máximo de partículas de 0,5 µm o más por metro cúbico de aire. En un grado B, **en reposo** (*at rest*: la instalación en marcha, sin gente trabajando) el límite es 3520. **En operación** (*in operation*: con el proceso y las personas) sube a 352000. Es 100 veces más. Lo que llena el aire de partículas, sobre todo, es la actividad de la gente.

Habrás oído cifras de «millones de escamas de piel al día» o de «partículas por minuto según te muevas». No las damos aquí porque no hemos podido leerlas en una fuente fiable accesible. La idea basta: cuanto más piel al aire, más movimiento y más charla, más contaminación.

### Qué norma te aplica a ti
- **ICH Q7** es la guía de buenas prácticas de fabricación (GMP) de los API. Su apartado 1.3 dice que cubre los API estériles solo hasta justo antes de esterilizarlos; la esterilización y el proceso aséptico quedan fuera.
- **El anexo 1** de EudraLex volumen 4 es para **medicamentos estériles**. Su apartado 1 admite que sus principios, entre ellos la vestimenta del personal, se usen en productos no estériles; entonces el fabricante debe documentar qué principios aplica.
- **El capítulo 2 de la parte I** de EudraLex (personal) es para medicamentos. Sirve como referencia porque dice casi lo mismo que Q7 con otras palabras.

Si tu planta fabrica un API químico no estéril, la regla es Q7. Lo que verás del anexo 1 es la referencia del sector, no una obligación directa, salvo que tu empresa la haya adoptado para alguna sala.

### Higiene personal y salud: lo que piden las normas
ICH Q7 dedica a la higiene del personal su apartado 3.2:

| Apartado | Qué dice |
|---|---|
| 3.20 | El personal debe tener buenos hábitos de higiene y salud. |
| 3.21 | Ropa limpia adecuada a la actividad, cambiada cuando proceda. Protección adicional de cabeza, cara, manos y brazos cuando haga falta para proteger el producto. |
| 3.22 | Evitar el contacto directo con intermedios y API. |
| 3.23 | Fumar, comer, beber, mascar chicle y guardar comida, solo en zonas designadas separadas de fabricación. |
| 3.24 | Quien tenga una enfermedad infecciosa o lesiones abiertas en la piel expuesta no debe hacer tareas que puedan comprometer la calidad del API. Si un examen médico o la observación de un supervisor lo detecta, se le aparta hasta que se cure o un médico cualificado diga que no hay riesgo. |

Q7 añade en 4.15 que haya lavabos y aseos limpios, con agua caliente y fría, jabón y secadores de aire o toallas de un solo uso, separados de fabricación pero cerca, y vestuarios o duchas cuando proceda.

El capítulo 2 de la parte I de EudraLex lo detalla un poco más (apartados 2.15 a 2.21):

- Programas de higiene escritos, con procedimientos sobre salud, hábitos y ropa, que cumpla **con todo rigor** cualquiera que entre en producción o control (2.15).
- **Examen médico al incorporarse**. La empresa debe tener instrucciones para enterarse de los problemas de salud que puedan afectar al producto (2.16).
- Nadie con enfermedad infecciosa o lesiones abiertas en la piel expuesta en la fabricación, en la medida de lo posible (2.17).
- Ropa de protección adecuada para todo el que entre (2.18).
- Prohibido comer, beber, mascar, fumar y **guardar** comida, bebida, tabaco o **medicación personal** en producción y almacenes (2.19).
- Evitar el contacto de las manos con el producto expuesto y con las partes del equipo que tocan producto (2.20).
- Instruir al personal para que use los lavabos (2.21).

En la práctica, **tú tienes que avisar**. Si tienes diarrea, fiebre, una infección en la piel, una herida abierta en la mano o una quemadura solar que se pela, no lo escondes: se lo dices a tu responsable antes de entrar. El anexo 1 (7.7) lo pide igual para estériles: comunicar cualquier problema de salud que pueda hacer que sueltes más contaminación de lo normal. Decidir si entras o no lo hace la persona designada, no tú.

### Higiene de manos: la técnica de la OMS
Las manos son lo que más toca. La Organización Mundial de la Salud (OMS) publicó en 2009 dos carteles que se usan en todo el mundo. Los dos llevan los mismos movimientos de frotado; cambia el producto y la duración.

**Lavado con agua y jabón** (*handwash*). Duración de todo el procedimiento: **de 40 a 60 segundos**. El cartel dice que se lavan así cuando están visiblemente sucias.

1. Mojar las manos con agua.
2. Aplicar jabón suficiente para cubrir toda la superficie de las manos.
3. Frotar palma con palma.
4. Palma derecha sobre el dorso izquierdo, con los dedos entrelazados, y al revés.
5. Palma con palma, con los dedos entrelazados.
6. Dorso de los dedos contra la palma opuesta, con los dedos enganchados.
7. Frotar en círculos el pulgar izquierdo atrapado en la palma derecha, y al revés.
8. Frotar en círculos, adelante y atrás, las yemas de la mano derecha juntas sobre la palma izquierda, y al revés.
9. Aclarar con agua.
10. Secar bien con una toalla de un solo uso.
11. Cerrar el grifo con la toalla.

**Fricción con solución alcohólica** (*handrub*). Duración: **de 20 a 30 segundos**. Se pone en el hueco de la mano una cantidad que cubra toda la superficie, se hacen los mismos frotados (pasos 3 a 8) y se termina cuando las manos están secas.

Los pasos 4 a 8 existen porque el frotado normal no llega a los dedos, los pulgares ni las yemas. Un lavado de 5 segundos moja, pero no limpia.

Ojo: estos carteles son de la OMS para la asistencia sanitaria. En tu planta, el lavado y la desinfección de manos los fija el procedimiento de vestido, que el anexo 1 (7.10) pide por escrito para estériles. Para el lavado en sí, la técnica de la OMS es la referencia más extendida.

### Qué ropa lleva cada grado
El anexo 1 (7.13) describe la ropa típica de cada grado:

| Grado | Ropa típica según el anexo 1, apartado 7.13 |
|---|---|
| B (y entrar o intervenir en A) | Ropa específica debajo; guantes estériles sin polvo para ponerse el resto; capucha estéril que cubra todo el pelo, barba incluida, metida dentro del cuello del traje; mascarilla y protección ocular estériles que cubran toda la piel de la cara; calzado o cubrebotas estériles con el pantalón dentro; mangas metidas en un segundo par de guantes estériles. |
| C | Pelo, barba y bigote cubiertos. Traje de una o dos piezas ajustado en las muñecas y de cuello alto. Calzado o cubrezapatos desinfectados. |
| D | Pelo, barba y bigote cubiertos. Traje de protección general. Calzado o cubrezapatos desinfectados. Medidas para no meter contaminación de fuera. |
| C y D, tareas de riesgo | Pueden hacer falta además guantes y mascarilla si la estrategia de control de la contaminación (*contamination control strategy*, CCS) lo pide. |

Más reglas del anexo 1 sobre la ropa:

- La ropa debe elegirse para limitar lo que se desprende al moverse (7.12); la de grado B, además, no debe soltar fibras ni partículas (7.13).
- Se revisa a la vista que esté limpia y entera justo antes y después de vestirse, y otra vez al salir (7.11).
- En los grados A y B, ropa estéril limpia **en cada entrada**, de la talla adecuada (7.15).
- La ropa reutilizable se lava en una lavandería separada, con un proceso cualificado y un número máximo de lavados (7.17).

**¿Y en tu planta de API no estéril?** Q7 solo pide ropa limpia adecuada y protección adicional cuando haga falta (3.21), según la etapa. Una forma habitual de organizarlo, que decide y documenta tu empresa, es:

- **Zona de síntesis**, con equipos cerrados: ropa de trabajo limpia, calzado de seguridad y los equipos de protección individual (EPI) químicos del puesto.
- **Zona de acabado**, donde el producto final sale de la centrífuga o del filtro, se seca, se muele y se envasa: aquí el producto ya no tiene etapa posterior que lo limpie. Suele pedirse una ropa parecida a la de un grado D: gorro que cubra todo el pelo, cubrebarba si hace falta, buzo o bata de sala, calzado de sala o cubrezapatos, y guantes.
- **API que irá a un medicamento estéril**: más exigencias, que fija el cliente y tu sistema de calidad.

### La secuencia de la esclusa
La esclusa de personal (*personnel airlock*) es el cuarto con dos puertas donde te cambias. El anexo 1 (4.12) dice que la última parte de la esclusa debe tener, en reposo, el mismo grado que la sala a la que lleva, y que en general los lavabos van solo en la primera fase del vestuario. También (4.13) que las dos puertas no se abran a la vez: enclavamiento (*interlock*) hacia A y B, y al menos aviso visual o sonoro hacia C y D. Esto lo viste en «Aire, presiones y salas a fondo».

Una secuencia típica para una sala de acabado. Es práctica habitual, no un texto de norma; la tuya está en el procedimiento.

1. **Antes de entrar**: fuera reloj, anillos, pulseras, pendientes, móvil, maquillaje y todo lo que no haga falta. El anexo 1 (7.9) lo pide para estériles; casi todas las plantas lo aplican también en acabado.
2. **Lado sucio**: quitar la ropa de calle o de zona general que diga el procedimiento.
3. **Lavado de manos**, con la técnica que ya conoces.
4. **De arriba abajo**: gorro primero, con todo el pelo dentro; cubrebarba y mascarilla si tocan; luego el buzo, sin que toque el suelo. Lo de arriba va antes para que, si algo cae al ponerlo, caiga sobre ropa que aún no te has puesto.
5. **El banco de separación** (*step-over bench*): te sientas, pones un pie con su calzado de sala o cubrezapatos y lo pasas al lado limpio sin apoyarlo en el sucio; luego el otro. El banco marca la frontera: el suelo de un lado no se pisa con lo del otro.
6. **Guantes al final**, por encima del puño del buzo.
7. **Espejo**: compruebas que no asoma pelo, que el cuello está cerrado y que todo está entero.
8. **Puerta**: esperas a que la anterior esté cerrada y, si hay luz, a que se ponga en verde.

Al **salir**, al revés y en la zona marcada: lo de un solo uso al contenedor, lo reutilizable a lavandería. Si vuelves a entrar, repites la secuencia.

### Cualificar el vestido
La **cualificación del vestido** (*gowning qualification*) la define el anexo 1 en su glosario: un programa que demuestra, al principio y de forma periódica, que una persona sabe ponerse la ropa completa.

En estériles (anexo 1, 7.4) se hace con una evaluación visual y otra microbiológica, al menos una vez al año, tomando muestras con placas de contacto en los dedos de los guantes, los antebrazos, el pecho y la capucha. El límite de acción para la impresión de guantes en grado B es de 5 UFC por guante, contando los cinco dedos (tabla 6, apartado 9.30), y en grado A, sin crecimiento. Quien no está cualificado no entra en grado B (7.5), y si los resultados de una persona van mal, se le retira la cualificación hasta que se forme y se vuelva a cualificar (7.6).

Para un API no estéril, Q7 no pide placas en los guantes. Lo que sí pide (3.12) es que la formación se haga con regularidad, que cubra las operaciones de cada uno y que quede registrada.

### Comportamiento dentro de la sala
El anexo 1 (7.18) pide que el movimiento sea **lento, controlado y metódico**, para no desprender más partículas y microorganismos por una actividad brusca. La guía de la FDA añade tres ideas que valen para tu cabina de flujo descendente:

- **Muévete despacio**: los movimientos rápidos crean turbulencias que rompen el flujo de aire.
- **No te pongas en el camino del aire limpio**: si metes la cabeza o los brazos entre el aire que baja y el producto, lo que sueltas cae dentro. Acércate desde el lado, no por encima.
- **No hables** cerca de la zona crítica: las gotas viajan con la voz.

Y además:

- **No toques** superficies, paredes, tu cara ni la mascarilla con los guantes. Q7 (3.22) y el capítulo 2 (2.20) piden evitar el contacto directo con el producto: se usa la pala, el cazo o el utensilio limpio, nunca la mano.
- **Solo las personas necesarias**: el anexo 1 (7.2) pide que el número de personas en la sala sea el mínimo.

### Cuando la ropa de sala y el EPI químico se juntan
En la zona de acabado sueles llevar las dos cosas: la ropa que protege al producto de ti y el EPI que te protege a ti del producto y del disolvente. Lo que cada EPI hace lo tienes en «Los equipos de protección individual a fondo»; aquí solo cómo encajan.

- **Guantes**: a menudo el mismo guante químico, limpio, cumple las dos funciones. Si llevas dos pares, el de protección química es el que el procedimiento diga, y el par exterior se cambia en cuanto se ensucia.
- **Gafas**: las gafas de montura integral protegen tus ojos y además tapan piel de la cara. Se limpian como dice el procedimiento antes de entrar.
- **Protección respiratoria**: una media máscara con filtro es un EPI: está hecha para protegerte a ti, no al producto. Si el puesto pide proteger las dos cosas, la empresa elige el equipo o la combinación que las cumpla y lo escribe en el procedimiento.

¿Qué prevalece cuando chocan? Las normas no te ponen a elegir. El anexo 1 (7.11) pide que, cuando la ropa tenga que proteger al operador del producto, eso no quite protección al producto. El Real Decreto 773/1997 (artículo 5.2) pide que, si llevas varios EPI a la vez, sean compatibles entre sí y no pierdan eficacia. Es decir: **la empresa elige una combinación que cumpla las dos cosas**.

Tu regla práctica es esta: **nunca te quitas ni aflojas un EPI para proteger el producto**. Si algo no encaja (la capucha no deja ajustar la máscara, el gorro empuja las gafas), no improvisas: no entras, o paras y avisas. Un lote se puede investigar o rechazar; tus ojos y tus pulmones no se reponen.

### Errores típicos
- **Pelo que asoma** por la frente o la nuca, o barba sin cubrebarba.
- **Reloj, anillo o móvil** debajo de la ropa de sala.
- **Lavado de manos de 5 segundos**, sin entre los dedos ni pulgares.
- **Guantes puestos antes que el buzo**, que luego tocan la parte de fuera.
- **Hablar inclinado** sobre la boca del secadero o sobre el saco abierto.
- **Tocarse la mascarilla** o la cara con el guante y seguir trabajando.
- **Esconder** un catarro o una herida.

### Si se rompe un guante o se mancha la ropa durante una carga o descarga
El anexo 1 (7.16) lo dice sin rodeos para estériles: la ropa y los guantes dañados que supongan riesgo para el producto se cambian **inmediatamente**. En una planta de API el orden habitual es este; el tuyo está en el procedimiento.

1. **Para** la operación de forma segura: cierra la válvula, deja la pala, tapa el saco o el contenedor.
2. **Piensa primero en ti**. Si el producto o el disolvente han tocado tu piel, aplica lo del EPI y la ficha de datos de seguridad: quitarte el guante sin tocarte, lavarte y avisar.
3. **Aléjate del producto abierto** y cambia el guante o la prenda en el punto que diga el procedimiento. Con la piel al aire no vuelves a tocar el producto.
4. **Avisa** a tu responsable. El RD 773/1997 (artículo 10 c) te obliga a informar de inmediato de cualquier daño en el EPI.
5. **Anota** qué pasó, a qué hora, qué producto estaba expuesto y si hubo contacto con la mano o con la piel. Si se rompió el procedimiento, Q7 (2.16) pide documentar y explicar la desviación.
6. **No decides tú** si el producto vale. Si un trozo de guante ha podido caer dentro, o la mano ha tocado la torta, lo evalúa calidad.

Con una mancha en la ropa, igual: si es producto o disolvente, primero tu seguridad; si solo ensucia, cambias la prenda antes de seguir.

En planta manda siempre el procedimiento vigente (SOP) de vestido y de la sala. Si lo que tienes delante no coincide con lo que dice, para y pregunta.
`,
  plant: `
Sala de acabado SL-02. Vas a descargar la torta húmeda del producto ficticio FX-101 de la centrífuga CF-201 a bolsas dobles dentro de bidones. Todos los códigos y valores son de ejemplo.

En la esclusa dejas el reloj en tu taquilla y el móvil fuera. Te lavas las manos con los once pasos del cartel; tardas unos 50 segundos. Gorro, cubrebarba, buzo de sala, banco de separación con los cubrezapatos, gafas de montura integral y, al final, los guantes de nitrilo del puesto sobre el puño del buzo. Te miras en el espejo: asoma un mechón por la nuca. Lo metes. Esperas a que la luz de la puerta se ponga en verde.

A mitad de la descarga, el borde metálico del bidón engancha el guante derecho y lo raja por el dorso. No has tocado la torta con la piel. Cierras la válvula de descarga, tapas la bolsa con la mano izquierda, que sigue enguantada, y te apartas de la boca de la centrífuga. Miras la bolsa: no ves trozos de guante dentro.

En el punto de cambio te quitas el guante roto sin tocarte, te desinfectas las manos y te pones uno nuevo. Avisas a la jefa de turno por el intercomunicador. Ella decide que la bolsa abierta en ese momento se identifique aparte para que calidad la revise.

Anotas en la hoja la hora de la rotura, qué bolsa estaba abierta, que no hubo contacto con la piel ni con el producto y el cambio de guante. Mantenimiento lima el borde del bidón antes de la siguiente descarga.
`,
  batchRecord: `
En la hoja de producción (*batch record*) y en los registros de la sala verás:

- **Estado de la sala** antes de abrir producto: sala limpia y liberada, presión diferencial, temperatura y humedad dentro de límites.
- **Personal**: quién entra en la sala y, en algunas plantas, firma de que se ha vestido según el procedimiento o de que está cualificado en vestido.
- **EPI y ropa del paso**: la hoja puede recordar qué guantes, gafas o protección respiratoria lleva la operación, por ejemplo en la descarga de la centrífuga o en la carga del secadero.
- **Incidencias**: rotura de guante o de ropa, contacto del guante con superficies no limpias, salida y reentrada en la sala, con su hora y qué producto estaba expuesto.
- **Bolsas o contenedores afectados**: identificación de los que estaban abiertos cuando hubo una incidencia, para que calidad los evalúe.
- **Aviso al responsable** y, si se rompió el procedimiento, referencia a la desviación abierta.

Se anota lo que pasó de verdad, aunque parezca poco. Un guante roto que no se anota es peor que un guante roto.
`,
  terms: [
    { es: "Vestido de sala limpia", en: "Cleanroom gowning", def: "Ropa y secuencia para entrar en una sala limpia sin contaminarla." },
    { es: "Cualificación del vestido", en: "Gowning qualification", def: "Programa que demuestra, al principio y periódicamente, que una persona sabe ponerse la ropa completa." },
    { es: "En reposo", en: "At rest", def: "Estado de la sala con la instalación en marcha pero sin personas trabajando." },
    { es: "En operación", en: "In operation", def: "Estado de la sala con el proceso funcionando y el personal presente." },
    { es: "Lavado de manos", en: "Handwash", def: "Lavado con agua y jabón; según la OMS, de 40 a 60 segundos." },
    { es: "Fricción con solución alcohólica", en: "Handrub", def: "Frotado de manos con solución alcohólica hasta que se secan; según la OMS, de 20 a 30 segundos." },
    { es: "Banco de separación", en: "Step-over bench", def: "Banco de la esclusa que separa el lado sucio del limpio." },
    { es: "Esclusa de personal", en: "Personnel airlock", def: "Cuarto con dos puertas donde el personal se cambia para pasar de una zona a otra más limpia." },
    { es: "Enclavamiento de puertas", en: "Door interlock", def: "Sistema que impide abrir a la vez las dos puertas de una esclusa." },
    { es: "Impresión de guantes", en: "Glove print", def: "Muestra microbiológica que se toma apoyando los cinco dedos del guante en una placa de cultivo." },
    { es: "Desprendimiento", en: "Shedding", def: "Partículas, fibras y microorganismos que sueltan el cuerpo o la ropa." },
    { es: "Estrategia de control de la contaminación", en: "Contamination control strategy (CCS)", def: "Conjunto planificado de controles frente a microorganismos, endotoxinas y partículas." },
  ],
  quiz: [
    {
      kind: "choice",
      q: "Te despiertas con fiebre y una herida infectada en el dorso de la mano. Hoy te toca envasar el API en la sala de acabado. ¿Qué haces?",
      options: [
        "Te pones dos pares de guantes y entras como siempre",
        "Entras, pero no te acercas al producto abierto",
        "Lo comunicas a tu responsable antes de entrar y decide la persona designada",
        "Esperas a ver si la herida empeora durante el turno",
      ],
      answer: 2,
      explain: "ICH Q7 (3.24) aparta de las tareas que pueden afectar al API a quien tiene una enfermedad infecciosa o lesiones abiertas; el capítulo 2 (2.16) pide que la empresa se entere. Tú avisas; decide quien corresponde.",
    },
    {
      kind: "choice",
      q: "¿Qué norma es la referencia directa de GMP para un principio activo químico no estéril?",
      options: [
        "ICH Q7, que trata la higiene del personal en su apartado 3.2",
        "El anexo 1 de EudraLex, obligatorio para toda sala limpia",
        "El cartel de lavado de manos de la OMS",
        "La guía de la FDA de 2004 sobre fabricación aséptica",
      ],
      answer: 0,
      explain: "Q7 es la guía de GMP de los API. El anexo 1 es para medicamentos estériles y sus principios solo se aplican a no estériles si el fabricante lo decide y lo documenta.",
    },
    {
      kind: "number",
      q: "En un turno te lavas las manos con agua y jabón 3 veces, cada vez con la duración mínima del cartel de la OMS (de 40 a 60 segundos). ¿Cuántos segundos dedicas en total como mínimo?",
      answer: 120,
      tolerance: 0.01,
      unit: "s",
      explain: "3 × 40 = 120 s como mínimo. Con la duración máxima serían 3 × 60 = 180 s.",
    },
    {
      kind: "choice",
      q: "¿Por qué el cartel de la OMS incluye frotar los pulgares y las yemas por separado?",
      options: [
        "Porque así se gasta menos jabón en cada lavado",
        "Porque así el lavado dura menos de 10 segundos",
        "Porque así se secan antes las manos con la toalla",
        "Porque un frotado normal deja sin limpiar dedos, pulgares y yemas",
      ],
      answer: 3,
      explain: "Los pasos de dedos entrelazados, pulgares y yemas existen porque son las zonas que el frotado simple no alcanza.",
    },
    {
      kind: "choice",
      q: "Según el anexo 1 (7.13), ¿qué ropa es típica de un grado D?",
      options: [
        "Capucha estéril, mascarilla estéril y doble par de guantes estériles",
        "Pelo, barba y bigote cubiertos, traje de protección general y calzado desinfectado",
        "Solo la ropa de calle, si está limpia",
        "Un traje de una pieza de cuello alto con gafas estériles obligatorias",
      ],
      answer: 1,
      explain: "Para el grado D el anexo pide cubrir pelo, barba y bigote, un traje de protección general y calzado o cubrezapatos desinfectados; guantes y mascarilla, si la CCS lo pide.",
    },
    {
      kind: "number",
      q: "Tabla 1 del anexo 1, grado B, partículas de 0,5 µm o más por metro cúbico: 3520 en reposo y 352000 en operación. ¿Cuántas veces mayor es el límite en operación?",
      answer: 100,
      tolerance: 0.01,
      unit: "veces",
      explain: "352000 / 3520 = 100. En operación hay proceso y personas, y las personas son la mayor fuente de partículas.",
    },
    {
      kind: "choice",
      q: "En la esclusa, ¿en qué orden te vistes según la práctica habitual?",
      options: [
        "Guantes, buzo, gorro y cubrezapatos, para tener las manos protegidas desde el principio",
        "Cubrezapatos, buzo, guantes y gorro, de abajo arriba",
        "Lavado de manos, gorro, buzo, banco con el calzado de sala, guantes al final y espejo",
        "Buzo, guantes, lavado de manos y gorro, en el orden en que estén colgados",
      ],
      answer: 2,
      explain: "De arriba abajo, el banco separa lado sucio y limpio, los guantes van al final por encima del puño y el espejo comprueba que no asoma pelo. Manda tu procedimiento.",
    },
    {
      kind: "choice",
      q: "Llevas media máscara con filtro por el disolvente y ropa de sala. La capucha no deja ajustar bien la máscara. ¿Qué haces?",
      options: [
        "No entras o paras, y avisas para que se resuelva la combinación de equipos",
        "Te quitas la máscara, porque la capucha protege mejor al producto",
        "Aflojas las cintas de la máscara para que quepa la capucha",
        "Te quitas la capucha y entras solo con la máscara",
      ],
      answer: 0,
      explain: "El RD 773/1997 (5.2) pide EPI compatibles entre sí y el anexo 1 (7.11) que proteger al operador no quite protección al producto. Nunca aflojas un EPI: avisas.",
    },
    {
      kind: "number",
      q: "El anexo 1 (4.14) da como orientación una diferencia mínima de 10 Pa entre salas contiguas de distinto grado. Una sala de grado D está 10 Pa por encima del pasillo sin clasificar, y una de grado C, 10 Pa por encima de la D. ¿A cuántos pascales está la C respecto al pasillo?",
      answer: 20,
      tolerance: 0.01,
      unit: "Pa",
      explain: "10 + 10 = 20 Pa por encima del pasillo. Por eso no se abren las dos puertas de la esclusa a la vez.",
    },
    {
      kind: "choice",
      q: "Descargando la centrífuga, se te raja el guante. No has tocado la torta. ¿Qué es lo correcto?",
      options: [
        "Terminas la bolsa y cambias el guante al final del turno",
        "Te pones otro guante encima del roto y sigues",
        "Sigues, porque si no ha habido contacto no hay nada que anotar",
        "Paras, tapas, te apartas, cambias el guante, avisas y lo anotas",
      ],
      answer: 3,
      explain: "El anexo 1 (7.16) pide cambiar de inmediato la ropa o el guante dañados; el RD 773/1997 (10 c) obliga a avisar del daño, y la incidencia se registra para que calidad la evalúe.",
    },
  ],
};
