import type { Lesson } from "./types";

/** Nivel 21. Validación de sistemas informatizados: ciclo de vida completo. */
const validacion: Lesson[] = [
  {
    slug: "validacion-de-sistemas",
    level: 21,
    order: 1,
    title: "Validación de sistemas informatizados (GAMP 5)",
    titleEn: "Computerized system validation",
    minutes: 12,
    summary: "Cómo se demuestra que un programa GMP funciona bien y protege los datos.",
    body: `
Un sistema informatizado que afecta a la calidad (LIMS, MES, ERP, control de planta, software de un equipo de laboratorio) debe estar **validado**: demostrado y documentado que hace lo que debe.

### GAMP 5
Guía de la industria (ISPE) para validar sistemas con un enfoque **basado en riesgos**: más pruebas donde más riesgo hay. La 2.ª edición (2022) clasifica el software en categorías:

| Categoría | Tipo | Ejemplo | Esfuerzo de validación |
|---|---|---|---|
| 1 | Infraestructura | Sistema operativo, bases de datos | Bajo |
| 3 | Software estándar no configurado | Firmware de una balanza | Bajo-medio |
| 4 | Software configurado | LIMS o MES configurados para la planta | Medio-alto |
| 5 | Software a medida | Programa desarrollado para la empresa | Alto |

### Ciclo de vida
Requisitos del usuario (**URS**) → especificaciones → configuración o desarrollo → pruebas (IQ, OQ, PQ) → informe de validación → uso con **control de cambios**, copias de seguridad, gestión de accesos y revisiones periódicas → retirada (conservando los datos).

### Qué significa para ti
- Solo se usan **sistemas validados** y la versión aprobada.
- Si un sistema hace algo raro (calcula mal, se cuelga, muestra datos extraños), **se comunica**: puede ser una desviación.
- No se instalan programas ni se usan hojas de cálculo propias para datos GMP sin validar.
`,
    plant: `
Un compañero ha hecho una hoja de Excel para calcular las cargas "porque es más rápido". Aunque los números estén bien, no es un sistema validado ni controlado: los cálculos oficiales son los del MES o la hoja aprobada.
`,
    batchRecord: `
- Identificación del sistema y versión en los informes impresos.
- Los cálculos que hace el sistema validado no se rehacen a mano salvo que lo pida el procedimiento.
`,
    terms: [
      { es: "Validación de sistemas informatizados", en: "Computerized System Validation (CSV)", def: "Demostración documentada de que un sistema informático funciona según lo previsto." },
      { es: "GAMP 5", en: "GAMP 5", def: "Guía de ISPE para validar sistemas informatizados con un enfoque basado en riesgos." },
      { es: "Especificación de requisitos de usuario", en: "User Requirements Specification (URS)", def: "Documento que define lo que el sistema debe hacer." },
      { es: "Copia de seguridad", en: "Backup", def: "Copia de los datos para poder recuperarlos." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "¿Qué categoría GAMP suele tener un LIMS configurado para la planta?",
        options: ["Categoría 1", "Categoría 3", "Categoría 4", "No necesita validación"],
        answer: 2,
        explain: "Es software comercial configurado: categoría 4.",
      },
      {
        kind: "choice",
        q: "¿Se puede usar una hoja de cálculo personal para calcular cargas GMP?",
        options: [
          "Sí, si está bien hecha",
          "No, salvo que esté validada y controlada",
          "Sí, si la revisa el supervisor",
          "Sí, en el turno de noche",
        ],
        answer: 1,
        explain: "Las herramientas que generan datos GMP deben estar validadas y controladas.",
      },
      {
        kind: "choice",
        q: "¿Qué documento define al principio lo que un sistema informatizado debe hacer?",
        options: [
          "El informe de validación",
          "La especificación de requisitos de usuario (URS)",
          "El audit trail",
          "La factura del proveedor",
        ],
        answer: 1,
        explain: "La URS es el punto de partida del ciclo de vida: todo lo que se prueba después se compara con ella.",
      },
    ],
  },
  {
    slug: "ciclo-de-vida-validacion",
    level: 21,
    order: 3,
    title: "Validar un sistema paso a paso: del URS al informe",
    titleEn: "Computerized system validation in practice: from URS to report",
    minutes: 20,
    summary: "Los documentos y las pruebas de una validación real, quién hace cada cosa y cómo se demuestra que cada requisito se probó.",
    body: `
### Quién participa
- **Dueño del proceso** (*process owner*): define qué necesita el negocio y acepta el sistema.
- **Dueño del sistema** (*system owner*): lo mantiene disponible y con soporte (normalmente informática).
- **QA**: aprueba la estrategia, los documentos clave y el informe final.
- **Expertos en la materia** (*SME, subject matter experts*): usuarios clave, ingenieros, informáticos.
- **Proveedor**: aporta su documentación y sus pruebas, que GAMP 5 anima a **aprovechar** (*leverage*) si son de calidad.

### Los documentos, en orden
| Documento | Pregunta que responde |
|---|---|
| **Plan de validación** (*VP, Validation Plan*) | ¿Qué se valida, con qué estrategia, quién y qué entregables? |
| **URS** (*User Requirements Specification*) | ¿Qué debe hacer el sistema? Requisitos numerados y comprobables |
| **Evaluación del proveedor** | ¿Es fiable quien lo fabrica? (cuestionario o auditoría, según el riesgo) |
| **Evaluación de riesgos** | ¿Qué funciones pueden afectar al paciente, al producto o a los datos? |
| **FS / CS / DS** (*Functional, Configuration, Design Specification*) | ¿Cómo lo hace el sistema y cómo se ha configurado? |
| **Protocolos de prueba** (IQ, OQ, PQ) | ¿Cómo demostramos que cumple? |
| **Matriz de trazabilidad** (*RTM, Requirements Traceability Matrix*) | ¿Cada requisito tiene su prueba? |
| **Informe de validación** (*VR, Validation Report*) | ¿Qué salió, qué incidencias hubo y se puede usar? |

### El modelo en V
Cada especificación de la izquierda se comprueba con una prueba de la derecha:

| Especificación | ↔ | Prueba |
|---|---|---|
| URS (qué necesita el usuario) | ↔ | **PQ / UAT**: el sistema funciona en el proceso real, con usuarios reales |
| FS (qué funciones tiene) | ↔ | **OQ**: cada función hace lo especificado, incluidos errores y límites |
| DS / CS (cómo está montado) | ↔ | **IQ**: está instalado y configurado como se diseñó (versión, servidor, parámetros) |

### Cómo es una prueba
Un **guion de prueba** (*test script*) tiene pasos con **resultado esperado**, y el probador anota el **resultado obtenido**, marca si pasa o no, firma, fecha y guarda **evidencia** (captura de pantalla, informe):

| Paso | Acción | Resultado esperado | Obtenido | ¿Pasa? |
|---|---|---|---|---|
| 1 | Escanear un lote en **cuarentena** en el paso de carga | El MES muestra "Material no liberado" y bloquea el paso | Igual | Sí |
| 2 | Escanear un lote **liberado** | El MES acepta y pide el peso | Igual | Sí |

Este guion prueba el requisito **URS-014: "El MES no permite consumir material que no esté liberado"**. En la matriz de trazabilidad, URS-014 apunta a esta prueba.

Si una prueba **falla**, se registra una **incidencia de prueba** (*test incident*): se analiza si el fallo es del sistema, del guion o del probador, se corrige y se repite. Nunca se cambia el resultado esperado para que "pase".

### Más pruebas donde hay más riesgo
GAMP 5 (2.ª edición) insiste en el **pensamiento crítico** (*critical thinking*): el esfuerzo se concentra en las funciones de **alto riesgo** (cálculos de cargas, estados de lote, firmas, audit trail) y se aligera en las de bajo riesgo (un informe de consulta). También admite métodos **ágiles** y pruebas **automatizadas**, siempre que la herramienta sea adecuada y la evidencia se conserve.

La FDA publicó en **septiembre de 2025** su guía final **CSA** (*Computer Software Assurance*) y en **febrero de 2026** la sustituyó por una versión revisada (*Computer Software Assurance for Production and Quality Management System Software*). Está pensada para software de producción y del sistema de calidad de **productos sanitarios**. No es obligatoria para medicamentos, pero su idea se ha extendido: para funciones de bajo riesgo bastan pruebas **no guionizadas** (exploratorias o *ad hoc*) bien documentadas; las pruebas **guionizadas** se reservan para lo de alto riesgo.

### Para un desarrollador web
Lo reconocerás: requisitos → historias de usuario, OQ → pruebas funcionales y de integración, PQ → pruebas de aceptación, RTM → cobertura de requisitos, control de cambios → *pull requests* revisados, entornos de **desarrollo**, **pruebas/validación** y **producción** separados. La diferencia es que en GMP **todo deja evidencia firmada** y QA lo aprueba.
`,
    plant: `
Tu planta va a implantar un MES nuevo. Te eligen como **usuario clave** para la PQ: durante dos semanas fabricas "lotes de prueba" en el entorno de validación siguiendo guiones. En uno, el sistema acepta un peso fuera de rango sin pedir comentario. Lo anotas como resultado obtenido, marcas "No pasa" y se abre una incidencia de prueba. El proveedor lo corrige en una versión nueva, se repite la prueba y pasa.
`,
    batchRecord: `
- Durante la validación no se fabrica producto vendible con el sistema nuevo, salvo que el plan lo prevea con controles adicionales.
- Tras la puesta en marcha (*go-live*), los registros indican la **versión** validada del sistema.
`,
    terms: [
      { es: "Plan de validación", en: "Validation Plan (VP)", def: "Documento que define el alcance, la estrategia, las responsabilidades y los entregables de la validación." },
      { es: "Matriz de trazabilidad de requisitos", en: "Requirements Traceability Matrix (RTM)", def: "Tabla que une cada requisito con su especificación y su prueba." },
      { es: "Guion de prueba", en: "Test script", def: "Pasos de una prueba con su resultado esperado, obtenido y evidencia." },
      { es: "Incidencia de prueba", en: "Test incident", def: "Registro de una prueba que no dio el resultado esperado." },
      { es: "Prueba de aceptación de usuario", en: "User Acceptance Testing (UAT)", def: "Prueba del sistema por los usuarios en condiciones reales de uso." },
      { es: "Garantía del software", en: "Computer Software Assurance (CSA)", def: "Enfoque de la FDA que ajusta las pruebas al riesgo y admite pruebas no guionizadas." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "En el modelo en V, ¿con qué prueba se verifica la URS?",
        options: ["IQ", "OQ", "PQ / UAT", "Con ninguna"],
        answer: 2,
        explain: "La URS dice qué necesita el usuario; la PQ/UAT demuestra que el sistema lo cumple en el proceso real.",
      },
      {
        kind: "choice",
        q: "¿Para qué sirve la matriz de trazabilidad?",
        options: [
          "Para seguir lotes hacia el cliente",
          "Para demostrar que cada requisito tiene su especificación y su prueba",
          "Para listar usuarios",
          "Para calcular el riesgo",
        ],
        answer: 1,
        explain: "Si un requisito no aparece en ninguna prueba, no está demostrado.",
      },
      {
        kind: "choice",
        q: "Una prueba de OQ falla. ¿Qué es correcto?",
        options: [
          "Cambiar el resultado esperado para que coincida",
          "Registrar una incidencia de prueba, analizar la causa, corregir y repetir",
          "Saltarse la prueba",
          "Borrar la evidencia",
        ],
        answer: 1,
        explain: "Las incidencias de prueba se documentan e investigan; el informe final las resume.",
      },
      {
        kind: "choice",
        q: "Según el enfoque basado en riesgos, ¿dónde se concentran las pruebas más rigurosas?",
        options: [
          "En los colores de la pantalla",
          "En las funciones que afectan al producto, al paciente o a la integridad de datos",
          "En los informes de consulta",
          "En todo por igual",
        ],
        answer: 1,
        explain: "Cálculos, estados de lote, firmas y audit trail merecen más rigor que una consulta sin impacto.",
      },
    ],
  },
  {
    slug: "sistemas-en-operacion",
    level: 21,
    order: 5,
    title: "Mantener un sistema validado: cambios, incidencias y revisión periódica",
    titleEn: "Keeping systems validated: change control, incidents and periodic review",
    minutes: 18,
    summary: "Cómo sigue un sistema validado después del arranque: parches, nube, hojas de cálculo, inteligencia artificial y su retirada.",
    body: `
La validación no termina el día del arranque. Un sistema se mantiene en **estado validado** durante toda su vida.

### Control de cambios (Anexo 11, apartado 10)
Cualquier cambio en un sistema GMP (versión nueva, parche, cambio de configuración, servidor nuevo) se gestiona por **control de cambios**:
1. Se **describe** el cambio y su motivo.
2. Se **evalúa el impacto y el riesgo**: ¿afecta a funciones GMP? ¿a datos ya guardados?
3. Se decide qué **pruebas** hacen falta (puede ser una revalidación parcial o solo una verificación).
4. Se prueba en el **entorno de pruebas**, nunca directamente en producción.
5. QA **aprueba**, se implanta y se **cierra** con evidencia.

Los **parches de seguridad** del sistema operativo también pasan por aquí, a menudo con un procedimiento ágil preaprobado para no dejar el sistema vulnerable.

### Incidencias (apartado 13)
Si el sistema falla (se cuelga, calcula mal, pierde una conexión), la incidencia se **registra**, se evalúa si afecta a algún lote o dato, se investiga la **causa raíz** y, si procede, se abre una **desviación** y una **CAPA**.

### Evaluación periódica (apartado 11)
Cada cierto tiempo (por ejemplo, cada 1–3 años según el riesgo) se revisa el sistema: cambios acumulados, incidencias, desviaciones, accesos, copias de seguridad probadas, rendimiento y si la documentación sigue al día. La conclusión puede ser "sigue validado" o "hay que revalidar".

### Proveedores y nube (apartado 3)
Cada vez más sistemas son **SaaS** (*Software as a Service*) en la nube. La empresa **sigue siendo responsable** de sus datos GMP. Hace falta un **acuerdo formal** con el proveedor (calidad, seguridad, copias, dónde están los datos, cómo se devuelven si se termina el contrato) y evaluarlo según el riesgo, a veces con auditoría.

### Hojas de cálculo
Una hoja Excel que calcula datos GMP es un sistema informatizado. Para usarla:
- Plantilla **validada**: fórmulas comprobadas con casos de prueba.
- **Celdas protegidas**: solo se escriben las de entrada.
- **Versión** controlada y guardada en una ubicación controlada.
- Cada uso se guarda o se imprime como parte del registro, y el original electrónico se conserva si es el registro GMP.

### Inteligencia artificial
El borrador del **Anexo 22** (julio de 2025; en noviembre de 2026 seguía sin publicarse como texto definitivo en EudraLex) plantea reglas para modelos de IA en usos GMP críticos: define el uso previsto, exige datos de prueba independientes y medir el rendimiento. El borrador se limita a modelos **estáticos** y **deterministas**, y deja fuera de los usos críticos a los modelos que siguen aprendiendo durante el uso y a la **IA generativa** y los grandes modelos de lenguaje (*LLM*).

### Retirada del sistema (*decommissioning*)
Cuando un sistema se sustituye, sus datos se **migran** (con verificación de que llegan completos) o se **archivan** de forma que sigan siendo legibles durante todo el periodo de conservación. Apagar el servidor sin más no está permitido.
`,
    plant: `
Informática anuncia un parche urgente de Windows para las estaciones del SCADA. No se instala directamente: se abre un cambio, se instala primero en la estación de pruebas, se comprueba que el SCADA arranca, comunica con los PLC y el historiador sigue guardando datos, y QA aprueba. Se instala en producción en una **parada programada**, nunca con un lote en marcha.
`,
    batchRecord: `
- Si una incidencia informática ocurrió durante el lote, aparece la referencia de la **desviación** y su evaluación de impacto.
- Si un sistema cambió de versión, los lotes posteriores indican la versión nueva.
`,
    terms: [
      { es: "Estado validado", en: "Validated state", def: "Situación en la que el sistema sigue funcionando como se demostró en la validación." },
      { es: "Evaluación periódica", en: "Periodic review", def: "Revisión programada de un sistema para confirmar que sigue validado." },
      { es: "Software como servicio", en: "Software as a Service (SaaS)", def: "Programa que se usa por internet y que mantiene el proveedor en sus servidores." },
      { es: "Retirada", en: "Decommissioning / retirement", def: "Fin de uso de un sistema, conservando o migrando sus datos." },
      { es: "Migración de datos", en: "Data migration", def: "Traspaso de datos de un sistema a otro con verificación de que llegan completos y sin cambios." },
      { es: "Gran modelo de lenguaje", en: "Large Language Model (LLM)", def: "Modelo de IA generativa que produce texto." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "Sale una versión nueva del LIMS. ¿Cómo se implanta?",
        options: [
          "Se instala en producción esa misma noche",
          "Por control de cambios: evaluación de riesgo, pruebas en entorno de pruebas y aprobación de QA",
          "La instala cada analista en su ordenador",
          "No se puede actualizar nunca",
        ],
        answer: 1,
        explain: "Todo cambio en un sistema GMP pasa por control de cambios y se prueba fuera de producción.",
      },
      {
        kind: "choice",
        q: "La empresa contrata un LIMS en la nube (SaaS). ¿Quién es responsable de los datos GMP?",
        options: ["Solo el proveedor", "La empresa, con un acuerdo formal con el proveedor", "Nadie", "La autoridad sanitaria"],
        answer: 1,
        explain: "Externalizar el servicio no externaliza la responsabilidad; se regula con acuerdos y evaluación del proveedor.",
      },
      {
        kind: "choice",
        q: "¿Qué hace falta para usar una hoja Excel en cálculos GMP?",
        options: [
          "Nada, Excel es fiable",
          "Plantilla validada, celdas protegidas y versión controlada",
          "Que la haga el supervisor",
          "Imprimirla en color",
        ],
        answer: 1,
        explain: "Es un sistema informatizado: se valida y se controla como cualquier otro.",
      },
      {
        kind: "choice",
        q: "Un sistema antiguo se retira. ¿Qué pasa con sus datos?",
        options: [
          "Se borran",
          "Se migran o archivan de forma legible durante todo el periodo de conservación",
          "Se imprimen y se destruye todo lo electrónico",
          "Se los queda informática",
        ],
        answer: 1,
        explain: "Los datos GMP tienen que seguir disponibles y legibles aunque el sistema desaparezca.",
      },
    ],
  },
];

// Las lecciones «a fondo» van cada una en su archivo nivel21-tema.ts.
export const nivel21: Lesson[] = [...validacion];
