import type { Lesson } from "./types";

export const sistemaDeCalidadAFondo: Lesson = {
  slug: "sistema-de-calidad-a-fondo",
  level: 16,
  order: 2,
  title: "El sistema de calidad a fondo: quién decide qué en una planta de API",
  titleEn: "The quality system in depth: who decides what in an API plant",
  minutes: 34,
  summary:
    "Qué es un sistema de calidad farmacéutico, qué decide la unidad de calidad y qué decide producción según ICH Q7, cómo se libera un lote, para qué sirven las auditorías internas y la revisión anual, y cuál es tu papel en todo ello.",
  body: `
Ya sabes qué son las GMP y cómo está organizada la guía ICH Q7. Aquí vas a ver cómo se reparten las decisiones en la planta: quién aprueba, quién fabrica, quién revisa y quién dice la última palabra sobre un lote. Todo sale de dos guías: ICH Q7 (capítulos 2 y 3, y apartado 6.7) e ICH Q10.

### Qué es un sistema de calidad
Piensa en la cocina de un restaurante. Que un plato salga bien un día puede ser suerte. Que salga igual todos los días, lo cocine quien lo cocine, no lo es: hay recetas escritas, alguien que revisa y una forma de actuar cuando algo falla. Ese conjunto es un sistema.

La guía ICH Q10 define el **sistema de calidad farmacéutico** (*pharmaceutical quality system*, PQS) como el sistema de gestión con el que se dirige y controla una empresa farmacéutica en lo que toca a la calidad (glosario de ICH Q10).

ICH Q7 dice lo mismo con más detalle:

- Cada fabricante debe establecer, documentar y aplicar un sistema eficaz para gestionar la calidad, con la participación activa de la dirección y del personal de fabricación (apartado 2.11).
- Ese sistema abarca la organización, los procedimientos, los procesos y los recursos necesarios para tener confianza en que el API cumplirá sus especificaciones de calidad y pureza (2.12).
- La calidad es responsabilidad de **todas** las personas que participan en la fabricación (2.10).

### Los cuatro elementos de ICH Q10
ICH Q10 describe cuatro elementos (apartado 3.2):

| Elemento | En palabras llanas | Dónde lo notas tú |
|---|---|---|
| **Seguimiento del proceso y de la calidad del producto** (3.2.1) | Mirar los datos de forma continua para comprobar que el proceso sigue bajo control. | Las temperaturas, tiempos y rendimientos que anotas son esos datos. |
| **Acciones correctivas y preventivas** (*corrective action and preventive action*, CAPA) (3.2.2) | Cuando algo falla, se busca la causa de fondo y se arregla para que no se repita. | Tras una desviación llega un cambio en un procedimiento o una formación nueva. |
| **Gestión de cambios** (*change management*) (3.2.3) | Nada se cambia sin proponerlo, evaluarlo y aprobarlo antes. | La hoja de producción cambia de versión; nunca la cambias tú a mano. |
| **Revisión por la dirección** (*management review*) (3.2.4) | Los jefes revisan cada cierto tiempo los resultados y deciden mejoras y recursos. | No la ves, pero de ahí salen inversiones, equipos nuevos y prioridades. |

El glosario de ICH Q10 distingue dos cosas. La **acción correctiva** elimina la causa de un problema ya ocurrido, para que no se repita. La **acción preventiva** elimina la causa de un problema que podría ocurrir, antes de que ocurra.

Dos detalles más. La responsabilidad última de que exista un sistema de calidad eficaz es de la **alta dirección** (ICH Q10, 2.1). Y la propia guía aclara que no pretende crear exigencias nuevas más allá de las normas vigentes (1.1).

### La unidad de calidad: un árbitro que no juega
ICH Q7 pide que exista una **unidad de calidad** (*quality unit*) que sea **independiente de producción** (apartado 2.13).

¿Por qué independiente? Imagina un partido en el que el árbitro es también delantero de uno de los equipos. Aunque sea honrado, quiere ganar. Producción tiene plazos y pedidos que cumplir. Si quien tiene prisa por entregar el lote decidiera si el lote es bueno, la prisa acabaría pesando. Por eso quien decide sobre la calidad no depende de quien fabrica.

La unidad de calidad cumple dos funciones (2.13 y glosario de ICH Q7):

| | Garantía de calidad (*quality assurance*, QA) | Control de calidad (*quality control*, QC) |
|---|---|---|
| Qué es según ICH Q7 | El conjunto de medidas organizadas para asegurar que todos los API tienen la calidad requerida para su uso y que los sistemas de calidad se mantienen. | Comprobar o ensayar que se cumplen las especificaciones. |
| En la práctica | Revisa documentos, aprueba procedimientos, vigila desviaciones y cambios, libera lotes. | Es el laboratorio: analiza muestras y da resultados. |

Según el tamaño de la empresa pueden ser dos departamentos, un solo grupo o una sola persona (2.13).

### Lo que la unidad de calidad no puede delegar
ICH Q7 dice que la unidad de calidad participa en todos los asuntos relacionados con la calidad (2.20) y que revisa y aprueba los documentos que afectan a la calidad (2.21). Y da una lista de responsabilidades principales que **no se deben delegar** y que tienen que estar por escrito (2.22). Son quince:

| N.º | Responsabilidad (ICH Q7, 2.22) | Ejemplo de planta |
|---|---|---|
| 1 | Liberar o rechazar todos los API, y los intermedios que salgan fuera del control de la empresa. | Nadie de producción puede dar por bueno un lote de API. |
| 2 | Establecer un sistema para liberar o rechazar materias primas, intermedios y materiales de envasado y etiquetado. | La etiqueta de aprobado de un bidón de disolvente. |
| 3 | Revisar los registros de producción y de laboratorio de las etapas críticas antes de liberar el API para su distribución. | QA lee la hoja que tú has rellenado. |
| 4 | Asegurarse de que las desviaciones críticas se investigan y se resuelven. | Una temperatura crítica fuera de rango no se cierra con una nota. |
| 5 | Aprobar todas las especificaciones y las instrucciones maestras de producción. | La hoja de producción en blanco lleva la aprobación de calidad. |
| 6 | Aprobar todos los procedimientos que afectan a la calidad. | El procedimiento de limpieza de la centrífuga. |
| 7 | Asegurarse de que se hacen las auditorías internas. | La visita programada a tu zona. |
| 8 | Aprobar a los fabricantes contratados de intermedios y de API. | Una empresa externa que hace una etapa. |
| 9 | Aprobar los cambios que pueden afectar a la calidad. | Cambiar un tiempo de secado. |
| 10 | Revisar y aprobar los protocolos e informes de validación. | La validación de una limpieza. |
| 11 | Asegurarse de que las reclamaciones de calidad se investigan y se resuelven. | Un cliente avisa de un saco con partículas. |
| 12 | Asegurarse de que hay sistemas eficaces para mantener y calibrar los equipos críticos. | La etiqueta de calibración de una sonda de temperatura. |
| 13 | Asegurarse de que los materiales se analizan como es debido y se informa de los resultados. | El análisis de cada materia prima recibida. |
| 14 | Asegurarse de que hay datos de estabilidad que apoyan las fechas de reanálisis o caducidad y las condiciones de almacenamiento. | La fecha de reanálisis de la etiqueta del API. |
| 15 | Hacer las revisiones de la calidad del producto. | El informe anual que verás más abajo. |

### Lo que es responsabilidad de producción
ICH Q7 también pone por escrito lo que corresponde a producción (apartado 2.3). Son diez puntos:

| N.º | Responsabilidad (ICH Q7, 2.3) | ¿Te toca como operador? |
|---|---|---|
| 1 | Preparar, revisar, aprobar y distribuir las instrucciones de producción según procedimientos escritos. | No. |
| 2 | Fabricar los API y los intermedios según instrucciones aprobadas de antemano. | **Sí.** Es tu trabajo principal. |
| 3 | Revisar todos los registros de lote de producción y asegurarse de que están completos y firmados. | **Sí.** Cada casilla y cada firma tuya. |
| 4 | Asegurarse de que todas las desviaciones de producción se comunican y se evalúan, y de que las críticas se investigan y se registran las conclusiones. | **Sí.** Las ves tú primero. |
| 5 | Asegurarse de que las instalaciones están limpias y, cuando hace falta, desinfectadas. | **Sí.** Limpieza de equipos y de zona. |
| 6 | Asegurarse de que se hacen las calibraciones necesarias y se guardan los registros. | En parte: miras que la calibración esté vigente. |
| 7 | Asegurarse de que locales y equipos se mantienen y se guardan los registros. | En parte: avisas de averías y fugas. |
| 8 | Asegurarse de que los protocolos e informes de validación se revisan y aprueban. | No directamente. |
| 9 | Evaluar los cambios propuestos en producto, proceso o equipo. | Puedes proponer; no decides. |
| 10 | Asegurarse de que las instalaciones y equipos nuevos o modificados se cualifican. | No directamente. |

La columna de la derecha es una orientación didáctica; el reparto real de tareas lo fija tu empresa por escrito.

### Desviaciones: lo que no salió como estaba escrito
Una **desviación** (*deviation*) es, según el glosario de ICH Q7, apartarse de una instrucción aprobada o de un estándar establecido. La guía pide que toda desviación se documente y se explique, y que las críticas se investiguen y se documenten la investigación y sus conclusiones (2.16 y 8.15).

«Crítico» significa en ICH Q7 algo que hay que mantener dentro de criterios fijados de antemano para asegurar que el API cumple su especificación.

Tú no decides si una desviación es crítica: la ves, la anotas y avisas.

### Liberación de lotes: quién dice que vale
Mientras se decide si un material vale, está en **cuarentena** (*quarantine*): apartado a la espera de que se apruebe o se rechace (glosario de ICH Q7). Las reglas:

- Las personas autorizadas para liberar intermedios y API tienen que estar designadas (2.14). No libera cualquiera.
- Ningún material se libera ni se usa antes de que la unidad de calidad termine su evaluación de forma satisfactoria, salvo que existan sistemas adecuados que lo permitan (2.17).
- Hay procedimientos escritos para revisar y aprobar los registros de producción y de laboratorio antes de liberar un lote (6.70).
- Los registros de las etapas críticas los revisa y aprueba la unidad de calidad antes de liberar el API. Los de las no críticas los puede revisar personal cualificado de producción, con procedimientos aprobados por calidad (6.71).
- Todos los informes de desviación, de investigación y de resultado fuera de especificación (*out of specification*, OOS) se revisan como parte de la revisión del lote antes de liberarlo (6.72).
- La unidad de calidad puede delegar en producción la liberación de intermedios, salvo los que se envían fuera del control de la empresa (6.73).
- Un API solo sale hacia terceros después de que la unidad de calidad lo haya liberado (10.20).

Un lote se libera, por tanto, mirando dos cosas: lo que pasó en planta (tu hoja) y lo que midió el laboratorio. Un análisis perfecto no basta si la hoja tiene huecos o hay una desviación sin revisar.

### Auditorías internas o autoinspecciones
Una **auditoría interna** o **autoinspección** (*internal audit*, *self-inspection*) es una revisión que la propia empresa hace de sí misma. ICH Q7 pide que se hagan de forma regular y siguiendo un calendario aprobado, para verificar que se cumplen las GMP (2.40). Lo que se encuentra y las acciones correctivas se documentan y se comunican a la dirección, y las acciones acordadas se completan a tiempo (2.41).

La guía no dice cómo comportarte; esto es buena práctica. Si un auditor te pregunta:

- Contesta a lo que te preguntan, con la verdad y sin adornos.
- Si no lo sabes, dilo y consulta el procedimiento. No inventes.
- Enseña cómo lo haces de verdad, no cómo crees que querrían verlo.

### La revisión de la calidad del producto
Una vez al año, normalmente, se hace una **revisión de la calidad del producto** (*product quality review*). Su objetivo es verificar la **consistencia del proceso**: que sale igual lote tras lote (2.50). Debe incluir, como mínimo, una revisión de:

- los resultados de los controles en proceso críticos y de los ensayos críticos del API;
- todos los lotes que no cumplieron las especificaciones;
- todas las desviaciones críticas o no conformidades y sus investigaciones;
- los cambios hechos en los procesos o en los métodos analíticos;
- los resultados del programa de seguimiento de la estabilidad;
- todas las devoluciones, reclamaciones y retiradas relacionadas con la calidad;
- si las acciones correctivas han sido adecuadas.

Con los resultados se evalúa si hace falta alguna acción correctiva o una revalidación, y se documentan las razones (2.51).

Aquí acaban tus datos. Un lote suelto dice poco. Treinta lotes en una tabla muestran si el secado tarda cada vez más o si el rendimiento baja poco a poco. Esa tendencia solo se ve si cada operador anotó el valor real y no el que «debería» salir.

### Personal: cualificación, formación e higiene
El capítulo 3 de ICH Q7 habla de ti.

**Cualificación y formación** (apartado 3.1):

- Tiene que haber personal suficiente y cualificado por estudios, formación o experiencia (3.10).
- Las responsabilidades de todo el personal de fabricación están por escrito (3.11).
- La formación la imparten personas cualificadas, de forma regular, y cubre como mínimo las operaciones que haces y las GMP de tu función. Se guardan **registros de formación** y se evalúa periódicamente (3.12). Por eso firmas cada formación.

**Higiene** (apartado 3.2):

| Qué pide ICH Q7 | Apartado |
|---|---|
| Buenos hábitos de higiene y de salud. | 3.20 |
| Ropa limpia y adecuada, que se cambia cuando toca; y protección adicional de cabeza, cara, manos y brazos cuando haga falta para proteger el producto. | 3.21 |
| Evitar el contacto directo con intermedios y API. | 3.22 |
| Fumar, comer, beber, mascar y guardar comida, solo en zonas designadas y separadas de las de fabricación. | 3.23 |
| Quien tenga una enfermedad infecciosa o heridas abiertas en zonas del cuerpo al descubierto no hace tareas que puedan comprometer la calidad del API. | 3.24 |

Aquí la ropa y los guantes protegen **al producto de ti**; la protección que te cuida a ti del producto es otro tema. Y sobre el 3.24: si estás enfermo o tienes una herida, díselo a tu responsable. Te apartarán de esas tareas hasta que se corrija o hasta que personal médico cualificado diga que no hay riesgo.

### Qué significa «calidad» para el paciente
El API es la parte del medicamento que hace el efecto (glosario de ICH Q7). Lo que sale de tu secadero acaba dentro de una persona.

Un ejemplo inventado, para ver la cadena. En un cambio de producto, un operador limpia un filtro con prisa y firma la limpieza sin terminar la última comprobación. Queda un resto del producto anterior en un rincón y el lote siguiente lo arrastra. El laboratorio no busca una sustancia que no espera encontrar. El lote sale, otra fábrica lo convierte en comprimidos, y un paciente toma, sin saberlo, trazas de un fármaco que no le han recetado.

Nadie quiso hacer daño: fue un atajo de cinco minutos. El sistema de calidad existe para que un atajo así no pase desapercibido: procedimiento aprobado, firma de quien lo hace, verificación y revisión de la hoja antes de liberar.

### Tu día a día dentro del sistema
- **Trabaja solo con la versión aprobada** de la hoja y del procedimiento.
- **Anota en el momento** el valor real y firma lo que has hecho tú (ICH Q7, 2.15).
- **Avisa en cuanto algo se salga de lo escrito.**
- **No uses materiales sin aprobar** ni toques los que están en cuarentena.
- **Haz solo las tareas para las que tienes formación registrada.**
- **Cumple la higiene y el vestuario** de tu zona.
- **Propón mejoras por el cauce de cambios**, no aplicándolas por tu cuenta.

Esta lección explica el marco general de las guías ICH. En tu planta manda siempre el procedimiento vigente (SOP).
`,
  plant: `
Planta ficticia. Lucía, operadora del turno de noche, seca el lote 24-0117 del intermedio ficticio FX-210 en el secadero de vacío SV-303. La hoja de producción pide mantener el vacío por debajo de 80 mbar durante el secado y lo marca como parámetro crítico.

A las 03:10 salta la alarma: el vacío ha subido a 140 mbar. Lucía anota la hora y el valor real, avisa a Andrés, el jefe de turno, y entre los dos encuentran una junta de la tapa mal asentada. La recolocan y a las 03:50 el vacío vuelve a 60 mbar. Lucía escribe en la hoja lo ocurrido, con las dos horas y los dos valores, y firma. Andrés abre el informe de desviación.

Por la mañana el laboratorio analiza la muestra final: la pérdida por desecado cumple. Aun así, el lote se queda en cuarentena. Marta, de garantía de calidad, revisa la hoja, el registro del equipo y el resultado del laboratorio. Como el parámetro era crítico, la desviación se investiga: mantenimiento comprueba que la junta estaba desgastada. Se decide una acción correctiva (cambiar la junta) y una preventiva (añadir la revisión de esa junta al mantenimiento periódico del SV-303).

Con la investigación cerrada y documentada, la persona autorizada de la unidad de calidad libera el lote. Meses después, la desviación de Lucía aparece en la revisión anual de la calidad del producto, junto a los tiempos de secado de todos los lotes del año.

Si Lucía hubiera callado, el análisis habría salido igual de bien. Pero la junta seguiría desgastada, y el fallo siguiente podría haber sido peor.
`,
  batchRecord: `
En la hoja de producción (*batch record*) el sistema de calidad se ve en detalles muy concretos:

- **Cabecera**: código y versión de la hoja, con las firmas de aprobación. La unidad de calidad aprueba las instrucciones maestras de producción (ICH Q7, 2.22).
- **Cada paso importante**: fecha y, cuando procede, hora; identidad del equipo principal usado (p. ej. reactor R-301, centrífuga CF-302, secadero SV-303); pesos, medidas y números de lote de las materias primas e intermedios usados (ICH Q7, 6.52).
- **Parámetros críticos**: el resultado real, no el esperado (6.52).
- **Firmas**: la de quien hace el paso y la de quien supervisa o comprueba directamente cada paso crítico (6.52).
- **Muestras tomadas** y resultados de los controles en proceso y del laboratorio (6.52).
- **Rendimiento real** en las fases que indique la hoja (6.52).
- **Desviaciones**: cualquier desviación observada, su evaluación y la investigación, o la referencia al informe si se guarda aparte (6.52).
- **Correcciones**: fechadas y firmadas, dejando legible lo que se escribió antes. Las anotaciones se hacen con tinta indeleble, en su casilla, justo después de hacer la actividad, e identifican a quien las hace (6.14).
- **Al final**: la revisión de producción (hoja completa y firmada) y la revisión y decisión de la unidad de calidad.

Tú rellenas y firmas tu parte. La decisión de liberar o rechazar no la anotas tú: es de la unidad de calidad.
`,
  terms: [
    { es: "Sistema de calidad farmacéutico", en: "Pharmaceutical quality system (PQS)", def: "Sistema de gestión con el que se dirige y controla una empresa farmacéutica en lo que toca a la calidad (ICH Q10)." },
    { es: "Unidad de calidad", en: "Quality unit", def: "Unidad de la organización independiente de producción que cumple las funciones de garantía de calidad y de control de calidad (ICH Q7)." },
    { es: "Garantía de calidad", en: "Quality assurance (QA)", def: "Conjunto de medidas organizadas para asegurar que todos los API tienen la calidad requerida para su uso y que los sistemas de calidad se mantienen." },
    { es: "Control de calidad", en: "Quality control (QC)", def: "Comprobar o ensayar que se cumplen las especificaciones. En la práctica, el laboratorio." },
    { es: "Liberación", en: "Release", def: "Decisión de la unidad de calidad de que un material o un lote se puede usar o distribuir. Lo contrario es el rechazo." },
    { es: "Cuarentena", en: "Quarantine", def: "Estado de un material apartado, físicamente o por otro medio eficaz, a la espera de que se apruebe o se rechace." },
    { es: "Desviación", en: "Deviation", def: "Apartarse de una instrucción aprobada o de un estándar establecido. Se documenta y se explica siempre; si es crítica, se investiga." },
    { es: "Crítico", en: "Critical", def: "Paso, condición o parámetro que hay que mantener dentro de criterios fijados de antemano para asegurar que el API cumple su especificación." },
    { es: "Acción correctiva", en: "Corrective action", def: "Acción que elimina la causa de un problema ya ocurrido, para que no se repita." },
    { es: "Acción preventiva", en: "Preventive action", def: "Acción que elimina la causa de un problema que podría ocurrir, antes de que ocurra." },
    { es: "Gestión de cambios", en: "Change management", def: "Forma ordenada de proponer, evaluar, aprobar, aplicar y revisar los cambios (ICH Q10)." },
    { es: "Auditoría interna o autoinspección", en: "Internal audit / self-inspection", def: "Revisión regular y programada que la empresa hace de sí misma para verificar que cumple las GMP." },
    { es: "Revisión de la calidad del producto", en: "Product quality review", def: "Revisión, normalmente anual, de los datos de un API para verificar la consistencia del proceso." },
    { es: "Resultado fuera de especificación", en: "Out-of-specification result (OOS)", def: "Resultado de un análisis que no cumple el límite establecido. Se investiga y se documenta según un procedimiento." },
  ],
  quiz: [
    {
      kind: "choice",
      q: "El jefe de turno tiene un camión esperando y te dice que cargues ya el API, que el análisis ha salido bien. La etiqueta del lote sigue en cuarentena. ¿Qué haces?",
      options: [
        "Lo cargo, porque el análisis correcto ya equivale a la liberación",
        "Lo cargo si el jefe de turno me lo deja firmado en la hoja",
        "No lo cargo: falta la liberación de la unidad de calidad",
        "Lo cargo y aviso a calidad después para que regularice",
      ],
      answer: 2,
      explain: "Un API solo sale hacia terceros cuando lo ha liberado la unidad de calidad (ICH Q7 2.22 y 10.20). Un análisis correcto no es la liberación: falta revisar los registros y las desviaciones.",
    },
    {
      kind: "choice",
      q: "Durante la reacción, la temperatura (parámetro crítico) sube 4 °C por encima del máximo durante diez minutos y luego vuelve sola a su sitio. ¿Qué haces?",
      options: [
        "Anoto los valores y las horas reales y aviso a mi responsable",
        "Anoto el valor del rango, porque al final volvió a su sitio",
        "Espero al análisis final y, si sale bien, no hace falta decirlo",
        "Lo comento con el relevo de palabra, sin escribirlo en la hoja",
      ],
      answer: 0,
      explain: "Toda desviación se documenta y se explica, y las críticas se investigan (ICH Q7 2.16 y 8.15). Tú la anotas con el valor real y avisas; clasificarla no te toca a ti.",
    },
    {
      kind: "choice",
      q: "En una auditoría interna te preguntan cuánto tiempo hay que dejar escurrir la torta en la centrífuga y no lo recuerdas. ¿Qué respondes?",
      options: [
        "Un tiempo aproximado que me suene razonable, para no quedar mal",
        "Que esa pregunta se la tiene que hacer a mi jefe de turno, no a mí",
        "Que siempre lo hago a ojo, según vea que sale el líquido madre",
        "Que no lo recuerdo y se lo enseño en la hoja o el procedimiento",
      ],
      answer: 3,
      explain: "La auditoría interna verifica que se cumplen las GMP (ICH Q7 2.40). Inventar un dato es peor que no recordarlo: lo correcto es decir la verdad y acudir al documento aprobado.",
    },
    {
      kind: "choice",
      q: "Has descubierto que el filtro descarga mejor si cambias el orden de dos pasos de la hoja. ¿Qué haces con la idea?",
      options: [
        "La aplico desde hoy y la anoto al margen de la hoja de producción",
        "La propongo para que se evalúe y se apruebe antes de aplicarla",
        "La aplico solo en mi turno, para probar si de verdad es mejor",
        "La explico a los compañeros para que la usemos todos igual",
      ],
      answer: 1,
      explain: "Los cambios que pueden afectar a la calidad los evalúa producción y los aprueba la unidad de calidad antes de aplicarse (ICH Q7 2.3 y 2.22). Hasta entonces se sigue la instrucción aprobada.",
    },
    {
      kind: "choice",
      q: "Te piden que descargues solo el secadero SV-303 porque falta gente, pero aún no has recibido la formación de ese equipo. ¿Qué haces?",
      options: [
        "Lo descargo fijándome en cómo lo hizo ayer un compañero",
        "Digo que no tengo esa formación registrada y pido que me la den",
        "Lo descargo y firmo la formación después, cuando haya tiempo",
        "Lo descargo, porque todos los secaderos funcionan parecido",
      ],
      answer: 1,
      explain: "La formación debe cubrir las operaciones concretas que hace cada empleado y quedar registrada (ICH Q7 3.12). Sin esa formación no hay prueba de que estés cualificado para la tarea.",
    },
    {
      kind: "choice",
      q: "Llegas al turno con un corte abierto en el antebrazo y hoy te toca descargar producto del filtro a mano. ¿Qué haces?",
      options: [
        "Me pongo una tirita y trabajo normal, porque el corte es pequeño",
        "Me bajo bien la manga para que no se vea y no lo comento",
        "Trabajo sin guantes en ese brazo para que la herida respire",
        "Se lo digo a mi responsable antes de empezar la tarea",
      ],
      answer: 3,
      explain: "Quien tenga heridas abiertas en zonas del cuerpo al descubierto no debe hacer tareas que puedan comprometer la calidad del API (ICH Q7 3.24). La decisión la toman tu responsable o el personal médico, pero tienen que saberlo.",
    },
    {
      kind: "choice",
      q: "Al terminar el turno ves que te has dejado sin firmar un paso que hiciste a las 10:00. Un compañero se ofrece a firmarlo por ti para acabar antes. ¿Qué haces?",
      options: [
        "No acepto: lo completo yo según el procedimiento y aviso",
        "Acepto, porque lo importante es que la casilla no quede vacía",
        "Lo dejo en blanco y que lo resuelva quien revise la hoja",
        "Firmo yo y pongo las 10:00 como si lo hubiera firmado entonces",
      ],
      answer: 0,
      explain: "El registro debe identificar a quien hizo la anotación y hacerse justo después de la actividad (ICH Q7 6.14). Producción revisa que la hoja esté completa y firmada (2.3); un hueco se resuelve a la vista, nunca con la firma de otro ni con una hora falsa.",
    },
    {
      kind: "choice",
      q: "El secado de tu lote ha tardado 9 horas y lo habitual son 6. La hoja no fija un tiempo máximo. Un compañero te dice que pongas 6 para no llamar la atención. ¿Qué anotas?",
      options: [
        "Seis horas, porque la hoja no pone límite y da igual",
        "Nada, porque la hoja no obliga a cumplir un tiempo máximo",
        "Nueve horas: el dato real sirve para ver tendencias del proceso",
        "Siete horas y media, que queda entre lo normal y lo real",
      ],
      answer: 2,
      explain: "La revisión de la calidad del producto verifica la consistencia del proceso con los datos de todos los lotes (ICH Q7 2.50). Si el dato no es el real, la tendencia no se ve y el problema sigue creciendo.",
    },
    {
      kind: "choice",
      q: "Vas a cargar un bidón de disolvente al reactor R-301 y ves que no lleva la etiqueta de aprobado; almacén dice que el análisis «está al caer». ¿Qué haces?",
      options: [
        "Lo cargo, porque ese proveedor nunca ha dado problemas",
        "Lo cargo y dejo anotado en la hoja que faltaba la etiqueta",
        "Cargo la mitad y espero al resultado para cargar el resto",
        "No lo cargo y aviso: falta la evaluación de la unidad de calidad",
      ],
      answer: 3,
      explain: "Ningún material se usa antes de que la unidad de calidad termine su evaluación, salvo que haya un sistema aprobado que lo permita (ICH Q7 2.17). Esa excepción la decide el procedimiento de la planta, no el operador ni el almacén.",
    },
    {
      kind: "choice",
      q: "Un compañero nuevo dice que la calidad es cosa del laboratorio y que a él solo le toca producir. ¿Qué le contestas?",
      options: [
        "Que la calidad es responsabilidad de todos los que fabrican",
        "Que tiene razón, para eso existe la unidad de calidad",
        "Que solo es cosa suya cuando hay una auditoría en la zona",
        "Que es cosa del jefe de turno, que es quien firma al final",
      ],
      answer: 0,
      explain: "ICH Q7 2.10 dice que la calidad es responsabilidad de todas las personas que participan en la fabricación. El laboratorio comprueba una muestra; la calidad del lote entero se hace en planta.",
    },
  ],
};
