import type { Lesson } from "./types";

export const cicloAFondo: Lesson = {
  slug: "ciclo-de-validacion-a-fondo",
  level: 21,
  order: 4,
  title: "Validar un sistema paso a paso a fondo",
  titleEn: "Validating a system step by step in depth",
  minutes: 38,
  summary:
    "Un caso ficticio de principio a fin, un sistema de pesadas nuevo para la sala FX: plan de validación, requisitos bien y mal escritos, especificaciones, riesgo por requisito, IQ, OQ y PQ con casos de prueba reales (uno falla), matriz de trazabilidad con su cuenta, desviaciones de prueba, migración de datos, informe y liberación, la comparación con el desarrollo web y lo que haces tú cuando te toca probar.",
  body: `
En «Validar un sistema paso a paso: del URS al informe» viste los documentos y el modelo en V. En «Cualificación y validación a fondo» viste cómo se cualifica un reactor. Aquí seguirás un sistema informatizado ficticio desde la primera reunión hasta su uso en producción, con los documentos rellenos, las cuentas hechas y los errores del camino.

### De dónde sale la obligación
Tres textos gratuitos lo sostienen:

- **ICH Q7** (GMP de principios activos), 5.40: los sistemas informatizados GMP se validan, con una profundidad que depende de su diversidad, complejidad y criticidad. El 5.41 pide que la cualificación de la instalación y de la operación demuestren que hardware y software sirven para su tarea.
- **Anexo 11** de las GMP europeas (sistemas informatizados, en vigor desde el 30 de junio de 2011): la aplicación se valida y la infraestructura se cualifica. Su apartado 4 trata la validación.
- **Anexo 15** (cualificación y validación, en vigor desde el 1 de octubre de 2015): remite al anexo 11 para los sistemas informatizados y su apartado 3 describe las etapas URS, DQ, IQ, OQ y PQ de «equipos, instalaciones, servicios y sistemas». Para principios activos es orientación complementaria y opcional.

Lo que venga del borrador del anexo 11 sometido a consulta en julio de 2025 se marca como «borrador»: a 21 de noviembre de 2026, EudraLex sigue listando como vigente el de 2011.

### El caso: un sistema de pesadas para la sala FX
La planta ficticia sustituye las hojas de pesada en papel de la sala FX por un módulo del MES, el **MES-PES** (nombre inventado). Recibe la orden, lee la etiqueta del contenedor, se conecta a las balanzas BAL-FX-01 y BAL-FX-02, comprueba la tolerancia, imprime la etiqueta del material pesado y lo guarda todo con audit trail.

Es un producto comercial configurado: el proveedor lo instala y la planta lo valida. Nombres, códigos y cifras son valores de ejemplo.

### Paso 1. El plan de validación
El anexo 15 pide que el programa de cualificación y validación del centro esté en un **plan maestro de validación** (*validation master plan*, VMP) o documento equivalente (1.4) y admite que, en proyectos grandes, un **plan de validación** (*validation plan*) propio aclare las cosas (1.6). La guía PI 011-3 de PIC/S dice que el plan define actividades, procedimientos, responsabilidades y qué evaluaciones de riesgo se harán.

| Apartado del plan VP-PES-01 | Qué dice en el caso |
|---|---|
| Alcance | Módulo de pesadas, dos balanzas, impresora de etiquetas, interfaz con el ERP. Fuera: el resto del MES, ya validado |
| Responsables | Dueño del proceso: jefe de producción. Dueño del sistema: informática. Aprobación: QA. Ejecutores: dos operadores de pesadas y un técnico |
| Estrategia | Producto configurado; se aprovechan las pruebas del proveedor tras revisarlas; la planta prueba la configuración y el uso real |
| Entregables | URS, especificaciones, análisis de riesgo, protocolos IQ, OQ y PQ, matriz de trazabilidad, plan de migración, informe |
| Criterios de aceptación | Todos los casos de prueba pasan o tienen una desviación cerrada y justificada; 100 % de requisitos de riesgo alto probados |

### Paso 2. Los requisitos de usuario (URS)
El anexo 11 (4.4) pide que la **especificación de requisitos de usuario** (*user requirements specification*, URS) describa las funciones necesarias, se base en una evaluación de riesgos documentada y en el impacto GMP, y sea trazable durante todo el ciclo de vida. El anexo 15 (3.2) añade que la URS es el punto de referencia de toda la validación.

¿Cómo se escribe un buen requisito? La PI 011-3 (9.2 y 9.3) pide que la URS sea completa, realista, definitiva y **comprobable** (*testable*); que cada requisito esté catalogado de forma única; que no haya conflictos entre requisitos; y que cada uno se pueda verificar de forma objetiva por inspección, análisis o prueba. La guía de la FDA sobre validación de software (2002, para productos sanitarios) lo resume: requisitos medibles u objetivamente verificables.

| Mal escrito | Por qué falla | Bien escrito |
|---|---|---|
| «El sistema debe ser rápido» | No se puede medir: ¿rápido para quién? | URS-021: «La pantalla de pesada muestra el peso de la balanza en 2 s o menos tras estabilizarse» |
| «El sistema controlará bien las tolerancias» | Ambiguo: «bien» no se prueba | URS-009: «Si el peso neto queda fuera de la tolerancia de la receta, el sistema impide confirmar la pesada y muestra un aviso» |
| «Debe impedir errores de material y tener audit trail» | Dos requisitos en uno: si uno falla, ¿qué pasa? | URS-007 (lectura de etiqueta y bloqueo de material no liberado) y URS-012 (audit trail) por separado |
| «Solo los usuarios autorizados pueden pesar, salvo urgencias» | Contradice otro requisito de accesos y abre un hueco | URS-003: «Solo las cuentas con perfil Pesador pueden confirmar pesadas. No existe excepción» |
| «Usar el formato de etiqueta habitual» | Remite a algo no definido | URS-015: «La etiqueta lleva código de material, lote, peso neto con unidad, fecha, hora y usuario, según el anexo B» |

Truco: un buen requisito se convierte en una prueba de «sí» o «no» sin discusión.

### Paso 3. Especificación funcional, de configuración y de diseño
La URS dice **qué** se necesita; las especificaciones, **cómo** lo hace el sistema. Según la PI 011-3 (10.1 y 10.2), a partir de la URS el proveedor desarrolla o identifica la **especificación funcional** (*functional specification*, FS): descripción precisa de cada función, su rendimiento y las interfaces externas. En sistemas sencillos se pueden combinar URS y FS (10.3).

En un producto configurado aparecen dos documentos más:

- **Especificación de configuración** (*configuration specification*, CS): cada opción elegida, como «tolerancia en porcentaje del objetivo». El borrador del anexo 11 (6.6) la pide controlada.
- **Especificación de diseño** (*design specification*, DS): servidores, versiones, base de datos, red y balanzas. El anexo 11 (4.3) pide, en sistemas críticos, una descripción actualizada con disposición física y lógica, flujos de datos e interfaces.

### Paso 4. El riesgo, requisito a requisito
El anexo 11 (apartado 1) pide decidir la extensión de la validación con una evaluación de riesgos justificada y documentada (paciente, integridad de datos, calidad del producto). ICH Q9(R1) define el riesgo como la combinación de la probabilidad de que ocurra un daño y su gravedad, y cita la **detectabilidad** como factor que algunas herramientas añaden. Entre esas herramientas está el FMEA (análisis de modos de fallo y efectos).

En el caso, cada requisito se puntúa de 1 a 3 en gravedad (G), probabilidad (P) y dificultad de detección (D). La escala y los cortes son valores de ejemplo; cada planta fija los suyos en su procedimiento.

| Requisito | G | P | D | G × P × D | Clase | Qué prueba recibe |
|---|---|---|---|---|---|---|
| URS-009 Bloqueo fuera de tolerancia | 3 | 2 | 3 | 18 | Alto | Guion detallado, valores límite, evidencia en cada paso |
| URS-012 Audit trail de pesadas | 3 | 2 | 3 | 18 | Alto | Guion detallado con cambios y borrados intentados |
| URS-020 Informe diario de pesadas | 2 | 2 | 2 | 8 | Medio | Guion sencillo |
| URS-031 Logotipo en la pantalla | 1 | 1 | 1 | 1 | Bajo | Verificación visual o pruebas del proveedor |

Cortes del ejemplo: 12 o más, alto; de 6 a 11, medio; 5 o menos, bajo. El máximo es 3 × 3 × 3 = 27.

### Paso 5. IQ, OQ y PQ en un sistema informatizado
El anexo 15 piensa en equipos; en un sistema informatizado se traduce así (la última columna es aplicación al caso, no cita).

| Etapa | Qué pide el anexo 15 | En el MES-PES |
|---|---|---|
| **Cualificación de la instalación** (IQ) | Verificar la instalación contra planos y especificaciones, calibrar instrumentos, recoger manuales (3.9) | Versión del software y de la base de datos igual a la DS, servidor y copias configurados, balanzas calibradas, manuales archivados |
| **Cualificación de la operación** (OQ) | Pruebas que demuestran que funciona como se diseñó, incluidos límites superior e inferior y peor caso (3.11) | Cada función contra la FS y la CS: tolerancias en el borde, accesos, audit trail, etiquetas, interfaz con el ERP, mensajes de error |
| **Cualificación de las prestaciones** (PQ) | Pruebas en condiciones normales de operación con el tamaño de lote más desfavorable, en todo el rango previsto (3.14) | Órdenes completas simuladas por los operadores reales, con la orden más larga de la receta, dos balanzas a la vez y el turno de noche |

El anexo 11 (4.7) pide demostrar métodos y escenarios de prueba adecuados y considerar en especial los **límites de parámetros**, los **límites de datos** y la **gestión de errores**. El borrador (9.3) pide verificar instalación y configuración antes de cualquier prueba: la IQ va primero. El anexo 15 (2.5) permite juntar IQ y OQ en un documento.

La PI 011-3 reparte el trabajo: el proveedor redacta los guiones contra la FS y los ligados a la URS son del usuario regulado (nota 22). La PQ, aceptación del usuario en su entorno, se hace contra la URS (4.8).

### Cómo es un caso de prueba, con uno que falla
El borrador del anexo 11 define el **caso de prueba** (*test case*) como un conjunto de entradas, condiciones de ejecución y **resultados esperados** para un objetivo concreto, y pide como evidencia los guiones ejecutados y, cuando proceda, capturas de pantalla (9.4). La guía de la FDA de 2002 recuerda que el resultado esperado, definido antes, es lo que permite juzgar con objetividad el **resultado obtenido**.

Caso OQ-021, ligado a URS-009. Objetivo de pesada: 25,000 kg. Tolerancia de la receta: ±0,5 %. La cuenta: 25 × 0,005 = 0,125 kg, así que el intervalo aceptable va de 24,875 a 25,125 kg. Se usan pesas patrón en la balanza de pruebas.

| Paso | Acción | Resultado esperado | Resultado obtenido | Evidencia | Firma |
|---|---|---|---|---|---|
| 1 | Entrar con la cuenta de prueba Pesador-02 y abrir la orden de prueba OF-T-114 | Aparece la pesada de 25,000 kg ±0,5 % | Como se esperaba | OQ-021-01.png | J. R., 14/10 |
| 2 | Cargar 25,125 kg | Peso aceptado; botón Confirmar activo | Como se esperaba | OQ-021-02.png | J. R., 14/10 |
| 3 | Cargar 25,150 kg | Aviso «Fuera de tolerancia»; Confirmar bloqueado | Peso aceptado en verde; Confirmar activo | OQ-021-03.png | J. R., 14/10 |
| 4 | Cargar 24,850 kg | Aviso «Fuera de tolerancia»; Confirmar bloqueado | Peso aceptado en verde; Confirmar activo | OQ-021-04.png | J. R., 14/10 |

Resultado: **no pasa**. El probador no repite hasta que «salga», no tacha nada y no inventa una causa. Escribe lo que ve, guarda las capturas, firma y avisa al coordinador de pruebas.

### Desviaciones de prueba
El anexo 15 (2.8): un resultado fuera del criterio de aceptación se registra como **desviación**, se investiga y el informe discute sus consecuencias. El 2.7: cambiar algo importante del protocolo durante la ejecución, como un criterio, también es desviación y se justifica científicamente. El anexo 11 (4.2) pide incluir los informes de desviaciones en la validación, y la guía de la FDA de 2002, registrar, clasificar, revisar y resolver los errores antes de la puesta en uso.

Así se gestionó la desviación DV-PES-02:

1. **Registro**: caso, paso, resultado obtenido, evidencia, fecha y quién la detectó.
2. **Investigación**: la CS decía «tolerancia en %», pero se configuró «±0,5 kg». El intervalo quedó de 24,5 a 25,5 kg y 25,150 kg cabía. Causa: configuración, no software ni guion.
3. **Corrección**: por control de cambios del proyecto.
4. **Repetición**: OQ-021 entero y las pruebas que usan la misma tabla de tolerancias (**prueba de regresión**, *regression testing*).
5. **Cierre**: QA aprueba la desviación con su impacto. El primer resultado no se borra.

La OQ tuvo 62 casos: 60 pasaron a la primera y 2 fallaron, un 96,8 % a la primera. No es un fracaso: una buena prueba encuentra errores antes de producción.

### La matriz de trazabilidad, con su cuenta
El anexo 11 (4.4) pide que los requisitos sean trazables durante todo el ciclo de vida. El borrador (6.5 y 9.5) lo concreta: trazabilidad documentada entre cada requisito, su especificación y sus casos de prueba, por ejemplo con una **matriz de trazabilidad de requisitos** (*requirements traceability matrix*, RTM); y un caso de prueba que no remite a ningún requisito no cuenta para la validación.

| Requisito | Riesgo | Especificación | Casos de prueba | Estado |
|---|---|---|---|---|
| URS-007 | Alto | FS-4.2 | OQ-015, PQ-003 | Pasa |
| URS-009 | Alto | FS-4.5, CS-12 | OQ-021, OQ-022, PQ-003 | Pasa tras DV-PES-02 |
| URS-012 | Alto | FS-7.1 | OQ-030 a OQ-034 | Pasa |
| URS-018 | Medio | FS-9.3 | Ninguno | Sin probar |
| URS-027 | Medio | FS-6.4 | Ninguno | Sin probar |
| URS-031 | Bajo | FS-2.1 | Ninguno | Sin probar |

La URS tiene 40 requisitos y 37 tienen al menos un caso de prueba. **Cobertura = 37 / 40 × 100 = 92,5 %. Requisitos sin probar: 40 − 37 = 3.** Los 14 requisitos de riesgo alto están probados: 14 / 14 = 100 %, que es lo que pedía el plan.

¿Los tres huecos? URS-031 (riesgo bajo) se cubre con las pruebas revisadas del proveedor, justificado por escrito en el plan. URS-018 y URS-027 se prueban antes del informe. También se mira al revés: dos casos de prueba sin requisito se ligan a uno o se retiran.

### Migración de datos y su verificación
El sistema viejo guarda 12 480 registros de pesadas que hay que pasar al MES-PES. El anexo 11 (4.8) dice que, si los datos se pasan a otro formato o sistema, la validación debe comprobar que no cambian ni de **valor** ni de **significado**. La PI 041-1 de PIC/S pide migrar de forma controlada, con protocolo y verificando que la migración es completa. La OMS (TRS 1033, anexo 4, 9.6) avisa de que la dificultad de conservar el significado completo al migrar se suele subestimar. El borrador del anexo 11 recuerda que «datos» incluye datos brutos y **metadatos**.

El protocolo de migración comprobó:

| Comprobación | Resultado |
|---|---|
| Recuento: registros en origen y en destino | 12 480 y 12 480: cuadra |
| Integridad: suma de control (*checksum*) de cada registro exportado frente al importado | Cuadra |
| Comparación campo a campo de 200 registros (valor de ejemplo) | Falla: «0,250 kg» llega como «250 kg» |

Recuento y suma de control cuadraban, pero el significado había cambiado: la importación leyó la coma decimal como separador de miles y 0,250 pasó a 250, mil veces más. Había 3112 registros afectados, un 24,9 % del total. Se corrigió la importación y se repitieron la migración completa y su verificación. Es justo lo que el anexo 11 (4.8) quiere atrapar.

### Informe de validación y liberación para uso
El anexo 15 (2.9) pide que el informe resuma los resultados frente a los criterios y acabe con una recomendación final. El 2.10 exige una **liberación formal** para la etapa siguiente y admite una **aprobación condicional** con criterios o desviaciones pendientes si una evaluación documentada demuestra que no hay impacto significativo. La PI 011-3 (13.6) pide aceptación formal y paso controlado a producción. El borrador del anexo 11 (9.8) añade que la condicional se declara en el informe y se sigue de cerca.

El informe VR-PES-01: 40 de 40 requisitos probados o justificados, 2 desviaciones cerradas, migración verificada, procedimientos y formación listos. QA firma. En la puesta en marcha (*go-live*) se cierra la última hoja en papel y se registra la versión validada.

### Lo que ya conoces del desarrollo web
| Desarrollo web | Validación GMP | La diferencia |
|---|---|---|
| Historia de usuario («como pesador quiero... para...») | Requisito URS numerado | El requisito se aprueba y no se cambia sin control |
| Criterios de aceptación de la historia | Resultado esperado del caso de prueba | Se fija y se aprueba antes de ejecutar |
| Entornos de desarrollo, *staging* y producción | Entornos de desarrollo, validación y producción | No se prueba en producción con lotes reales sin plan |
| Pruebas automáticas en integración continua | Pruebas automatizadas | El anexo 11 (4.7) pide evaluar documentalmente la herramienta y el entorno |
| *Pull request* revisada y fusionada | Control de cambios aprobado por QA | Todo cambio deja evidencia firmada |

Un matiz: la guía de la FDA *Computer Software Assurance* (revisada en febrero de 2026, para productos sanitarios) recomienda usar los registros digitales del sistema, como logs y audit trails, en vez de capturas cuando el sistema ya guarda el resultado. Si tu protocolo pide capturas, las haces.

### Qué haces tú cuando te toca probar
A los operadores se les llama para la PQ o las pruebas de aceptación porque son quienes usan el sistema. Se espera esto:

- **Formación antes de empezar**: el anexo 15 (1.2) exige personal formado que siga procedimientos aprobados.
- **Sigue el guion paso a paso**, sin saltos ni cambios de orden.
- **Usa tu cuenta de prueba**, nunca la de otro.
- **Registra lo que ves de verdad**. «Como se esperaba» solo si es cierto.
- **Captura la evidencia en el momento**, con el nombre que diga el protocolo y la fecha y la hora visibles.
- **No arregles nada**: ni el sistema, ni el guion, ni el resultado. Un guion mal escrito también es una desviación.
- **Avisa en el momento** al coordinador y **firma cada página** con la fecha real.

Lo visto en «ALCOA+ a fondo: datos en los que se puede confiar» vale igual aquí: un protocolo de prueba es un registro GMP.

Los sistemas, códigos y cifras de esta lección son ficticios. En planta manda siempre el procedimiento vigente (SOP).
`,
  plant: `
Lunes, entorno de validación del MES-PES. Lucía, operadora de pesadas, ejecuta la PQ-003 con la orden de prueba OF-T-120: once materiales, dos balanzas, la orden más larga de la receta ficticia RX-14. Tiene el guion impreso, su cuenta de prueba Pesador-02 y una carpeta de red para las capturas.

En el paso 7 escanea un contenedor del material ficticio MA-208 que el guion marca como «en cuarentena». El resultado esperado es un bloqueo con el aviso «Material no liberado». La pantalla lo muestra. Hace la captura PQ-003-07.png, escribe «Como se esperaba», firma y pone la hora.

En el paso 9, la etiqueta impresa sale sin la hora de pesada, que la URS-015 exige. Un técnico del proveedor que está en la sala le dice: «Eso lo arreglo en un minuto, repite el paso y ya está». Lucía no repite nada. Escribe en el resultado obtenido «Etiqueta sin hora de pesada», fotografía la etiqueta, marca «No pasa» y llama a Andrés, el coordinador de pruebas.

Andrés abre la desviación DV-PES-05. La investigación encuentra que la plantilla de etiqueta instalada era una versión anterior a la de la DS. Se corrige por control de cambios, se repite el paso 9 y los casos de etiquetas, y todo pasa. En el informe quedan las dos ejecuciones, la mala y la buena.
`,
  batchRecord: `
Durante las pruebas no se fabrica producto vendible con el MES-PES. Lo que sí verás y anotarás:

- **En el protocolo de prueba**: tu nombre y tu firma en la hoja de participantes, con la referencia de tu formación.
- **En cada paso**: el resultado obtenido con tus palabras, «Pasa» o «No pasa», el nombre del archivo de evidencia, tu firma y la fecha real.
- **Si algo falla**: el número de la desviación de prueba (p. ej. DV-PES-05) junto al paso.
- **Tras la puesta en marcha**: en la hoja de pesada electrónica, el sistema registra el código de material, el lote, el peso neto con su unidad, la balanza, el usuario, la fecha y la hora; en los informes impresos aparece la versión validada del MES-PES.
- **El primer lote con el sistema nuevo**: puede llevar controles adicionales que fije el plan, como una verificación en papel en paralelo. Si los hay, se anotan como diga el procedimiento.
`,
  terms: [
    { es: "Plan de validación", en: "Validation plan (VP)", def: "Documento que fija el alcance, la estrategia, los responsables, los entregables y los criterios de aceptación de una validación." },
    { es: "Especificación de requisitos de usuario", en: "User requirements specification (URS)", def: "Documento con lo que el usuario necesita que haga el sistema, con requisitos numerados, únicos y comprobables." },
    { es: "Especificación funcional", en: "Functional specification (FS)", def: "Descripción precisa de cada función del sistema, su rendimiento y sus interfaces, que responde a la URS." },
    { es: "Especificación de configuración", en: "Configuration specification (CS)", def: "Registro controlado de las opciones de configuración elegidas en un producto comercial." },
    { es: "Especificación de diseño", en: "Design specification (DS)", def: "Descripción de cómo está construido e instalado el sistema: servidores, versiones, base de datos, red e interfaces." },
    { es: "Caso de prueba", en: "Test case", def: "Conjunto de entradas, condiciones de ejecución y resultados esperados para comprobar un requisito concreto." },
    { es: "Resultado esperado", en: "Expected result", def: "Lo que debe ocurrir en un paso de prueba, escrito y aprobado antes de ejecutarlo." },
    { es: "Resultado obtenido", en: "Actual result", def: "Lo que ocurrió de verdad al ejecutar el paso, anotado por el probador sin interpretarlo." },
    { es: "Evidencia objetiva", en: "Objective evidence", def: "Prueba que respalda el resultado: captura de pantalla, impresión, extracto del audit trail o registro del sistema." },
    { es: "Matriz de trazabilidad de requisitos", en: "Requirements traceability matrix (RTM)", def: "Tabla que une cada requisito con su especificación y sus casos de prueba, y muestra los que faltan." },
    { es: "Desviación de prueba", en: "Test deviation / test incident", def: "Registro de un resultado que no cumple el criterio de aceptación o de un cambio en la ejecución del protocolo." },
    { es: "Prueba de regresión", en: "Regression testing", def: "Repetición de pruebas ya superadas para comprobar que una corrección no ha estropeado otra cosa." },
    { es: "Migración de datos", en: "Data migration", def: "Traspaso de datos y metadatos a otro sistema o formato, verificando que no cambian ni de valor ni de significado." },
    { es: "Aprobación condicional", en: "Conditional approval", def: "Autorización para pasar a la etapa siguiente con algo pendiente, solo si una evaluación documentada demuestra que no hay impacto significativo." },
  ],
  quiz: [
    {
      kind: "choice",
      q: "¿Cuál de estos requisitos para el sistema de pesadas está bien escrito?",
      options: [
        "Si el peso neto sale de la tolerancia de la receta, el sistema impide confirmar",
        "El sistema debe ser fácil de usar y controlar bien todas las tolerancias",
        "La pesada debe ir rápida y tener audit trail, salvo en casos urgentes",
        "Se usará el formato de etiqueta habitual que ya conocen los operadores",
      ],
      answer: 0,
      explain: "Es único, sin ambigüedad y comprobable con una prueba de sí o no. Los demás usan palabras no medibles («fácil», «bien», «rápida»), mezclan requisitos o remiten a algo no definido.",
    },
    {
      kind: "number",
      q: "La URS de un sistema tiene 52 requisitos. En la matriz de trazabilidad, 49 tienen al menos un caso de prueba. ¿Qué porcentaje de cobertura de requisitos hay? (redondea a un decimal)",
      answer: 94.2,
      tolerance: 0.005,
      unit: "%",
      explain: "Cobertura = 49 / 52 × 100 = 94,2 %. Quedan 3 requisitos sin probar, que hay que probar o justificar por escrito antes del informe.",
    },
    {
      kind: "choice",
      q: "Ejecutas un paso de la PQ y el sistema muestra algo distinto del resultado esperado. Un técnico te dice que lo corrige al momento y que repitas el paso. ¿Qué haces?",
      options: [
        "Repito el paso cuando lo corrija y anoto solo el resultado bueno",
        "Anoto lo que vi, guardo la evidencia, marco «No pasa» y aviso",
        "Cambio el resultado esperado del guion para que coincida con lo visto",
        "Dejo el paso en blanco y sigo con el resto del guion sin decir nada",
      ],
      answer: 1,
      explain: "Se registra el resultado obtenido real con su evidencia y se abre una desviación (anexo 15, 2.8). Arreglar sobre la marcha o reescribir el criterio falsea la prueba.",
    },
    {
      kind: "number",
      q: "Una pesada tiene un objetivo de 40 kg y una tolerancia de ±0,5 % del objetivo. En la OQ hay que probar el límite superior exacto. ¿Cuántos kilos son?",
      answer: 40.2,
      tolerance: 0.001,
      unit: "kg",
      explain: "Tolerancia = 40 × 0,005 = 0,2 kg. Límite superior = 40 + 0,2 = 40,2 kg. El anexo 15 (3.11) pide pruebas en los límites superior e inferior; en el caso se prueba el borde y un valor justo por fuera.",
    },
    {
      kind: "choice",
      q: "En el nuevo sistema se comprueba que la versión del software, la base de datos y el servidor coinciden con la especificación de diseño antes de probar funciones. ¿Qué etapa es?",
      options: [
        "Cualificación de la operación (OQ), que prueba cada función",
        "Cualificación de las prestaciones (PQ), con usuarios reales",
        "Cualificación de la instalación (IQ), contra las especificaciones",
        "Migración de datos, porque se mira la base de datos del sistema",
      ],
      answer: 2,
      explain: "La IQ verifica la instalación contra especificaciones (anexo 15, 3.9), y el borrador del anexo 11 (9.3) pide hacerlo antes de cualquier prueba funcional.",
    },
    {
      kind: "number",
      q: "En el análisis de riesgo, un requisito tiene gravedad 3, probabilidad 2 y dificultad de detección 2, en escalas de 1 a 3. ¿Cuánto vale G × P × D?",
      answer: 12,
      tolerance: 0.001,
      unit: "puntos",
      explain: "G × P × D = 3 × 2 × 2 = 12. Con los cortes de ejemplo de la lección (12 o más, alto) recibiría un guion detallado con evidencia en cada paso.",
    },
    {
      kind: "choice",
      q: "Al migrar pesadas antiguas, el recuento de registros cuadra, pero un peso de 0,250 kg aparece como 250 kg. ¿Qué dice el anexo 11 (4.8)?",
      options: [
        "Que vale, porque el número de registros migrados es el mismo",
        "Que basta con anotarlo en el manual del sistema para los usuarios",
        "Que solo importa si el registro es de los últimos doce meses",
        "Que la validación debe comprobar que no cambian valor ni significado",
      ],
      answer: 3,
      explain: "El anexo 11 (4.8) pide comprobar que los datos no se alteran ni en valor ni en significado. Un recuento correcto no basta: hay que comparar el contenido.",
    },
    {
      kind: "number",
      q: "Un sistema viejo tiene 8400 registros. Tras migrar, el sistema nuevo tiene 8386. ¿Qué porcentaje se ha migrado? (redondea a dos decimales)",
      answer: 99.83,
      tolerance: 0.0005,
      unit: "%",
      explain: "8386 / 8400 × 100 = 99,83 %. Faltan 14 registros: la migración no es completa, se registra una desviación y se investiga.",
    },
    {
      kind: "choice",
      q: "La validación de un sistema termina con una desviación menor abierta en un informe de consulta sin impacto GMP. ¿Se puede aprobar su uso?",
      options: [
        "No, nunca: hay que esperar a cerrar hasta la última desviación",
        "Sí, si una evaluación documentada demuestra que no hay impacto",
        "Sí, siempre que el jefe de turno lo autorice de palabra al equipo",
        "Sí, pero solo si se borra la desviación abierta del expediente",
      ],
      answer: 1,
      explain: "El anexo 15 (2.10) admite una aprobación condicional con una evaluación documentada de que no hay impacto significativo; el borrador del anexo 11 (9.8) pide declararla en el informe.",
    },
    {
      kind: "number",
      q: "Una OQ tiene 75 casos de prueba. 72 pasan a la primera y 3 fallan. ¿Qué porcentaje pasa a la primera?",
      answer: 96,
      tolerance: 0.001,
      unit: "%",
      explain: "72 / 75 × 100 = 96 %. Los 3 fallos se registran como desviaciones, se investigan, se corrigen y se repiten con su prueba de regresión.",
    },
  ],
};
