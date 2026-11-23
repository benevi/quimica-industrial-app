import type { Lesson } from "./types";

/** Nivel 20. Integridad de datos y registros electrónicos (ALCOA+ está en nivel20-alcoa.ts). */
export const nivel20: Lesson[] = [
  {
    slug: "part-11-y-anexo-11",
    level: 20,
    order: 2,
    title: "Las normas: 21 CFR Part 11, Anexo 11 y guías de integridad de datos",
    titleEn: "The rules: 21 CFR Part 11, EU GMP Annex 11 and data integrity guidance",
    minutes: 20,
    summary: "Qué exige cada norma a un sistema informatizado GMP, punto por punto, y qué está cambiando.",
    body: `
### El mapa normativo
| Norma | De quién | Qué regula |
|---|---|---|
| **21 CFR Part 11** (1997) | FDA, EE. UU. | Registros y firmas electrónicas |
| **Anexo 11** de las GMP de la UE (2011) | Comisión Europea (EudraLex vol. 4) | Sistemas informatizados en GMP |
| **ICH Q7**, apartado 5.4 | ICH (aplicada en la UE como GMP Parte II) | Sistemas informatizados en la fabricación de API |
| **MHRA** *GxP Data Integrity Guidance* (2018) | Reino Unido | Integridad de datos |
| **PIC/S PI 041-1** (2021) | Cooperación de más de 50 autoridades de inspección | Integridad de datos en entornos GMP/GDP |
| **FDA** *Data Integrity and Compliance With Drug CGMP* (2018) | FDA | Preguntas y respuestas sobre integridad de datos |
| **GAMP 5** (2.ª ed., 2022) | ISPE (guía de la industria, no ley) | Cómo validar con un enfoque basado en riesgos |

Una planta de API que exporta a EE. UU. cumple **las dos**: Part 11 y Anexo 11.

### 21 CFR Part 11 en una tabla
**Subparte B, registros electrónicos.** El apartado **11.10** pide, para sistemas cerrados:

| Letra | Exigencia |
|---|---|
| (a) | **Validación** del sistema: exactitud, fiabilidad y capacidad de detectar registros alterados o no válidos |
| (b) | Poder generar **copias exactas y completas**, legibles y en formato electrónico, para la inspección |
| (c) | **Proteger** los registros durante todo el periodo de conservación |
| (d) | **Limitar el acceso** a personas autorizadas |
| (e) | **Audit trail** seguro, generado por el sistema, con fecha y hora; los cambios no ocultan lo anterior |
| (f) | Comprobaciones que obliguen a seguir la **secuencia** correcta de pasos |
| (g) | Comprobaciones de **autoridad**: cada usuario solo hace lo que su perfil permite |
| (h) | Comprobaciones del **dispositivo** de origen de los datos, cuando proceda |
| (i) | Personas con **formación** y experiencia adecuadas |
| (j) | Procedimientos escritos que hagan a cada persona **responsable** de sus firmas |
| (k) | Control de la **documentación** del sistema |

Además: **11.50** (la firma muestra nombre, fecha y hora, y significado) y **11.70** (la firma queda unida al registro y no se puede copiar a otro).

**Subparte C, firmas electrónicas.** **11.100**: cada firma es única de una persona y no se reasigna. **11.200**: las firmas no biométricas usan al menos **dos componentes** (por ejemplo, usuario y contraseña); en una sesión continua, la primera firma usa ambos y las siguientes al menos uno. **11.300**: controles de usuarios y contraseñas: combinación única, revisión periódica (por ejemplo, caducidad), anulación si se pierden y salvaguardas que detecten y avisen de intentos de uso no autorizado.

### Anexo 11 en una tabla
**Principio**: sustituir una operación manual por un sistema informatizado **no debe reducir** la calidad del producto, el control del proceso ni la garantía de calidad. La infraestructura informática se **cualifica**.

| Apdo. | Tema | Idea clave |
|---|---|---|
| 1 | Gestión de riesgos | En todo el ciclo de vida, según la seguridad del paciente, la integridad de datos y la calidad |
| 2 | Personal | Colaboración entre dueño del proceso, dueño del sistema, Personas Cualificadas (*Qualified Persons*) e informática |
| 3 | Proveedores | Acuerdos formales; evaluar al proveedor según el riesgo |
| 4 | Validación | Ciclo de vida documentado, requisitos de usuario, pruebas |
| 5 | Datos | Comprobaciones en el intercambio electrónico de datos |
| 6 | Comprobaciones de exactitud | Para datos críticos introducidos a mano |
| 7 | Almacenamiento | Protección y **copias de seguridad** comprobadas |
| 8 | Impresiones | Copias impresas claras; indicar si un dato cambió |
| 9 | Audit trail | Según el riesgo, con motivo del cambio; **revisado periódicamente** |
| 10 | Cambios y configuración | Control de cambios definido |
| 11 | Evaluación periódica | Confirmar que sigue validado |
| 12 | Seguridad | Controles físicos y lógicos de acceso |
| 13 | Incidencias | Registrar, evaluar e investigar la causa |
| 14 | Firma electrónica | Mismo efecto que la manuscrita, unida al registro, con fecha y hora |
| 15 | Liberación de lotes | Solo la Persona Cualificada libera, y queda identificada |
| 16 | Continuidad de negocio | Alternativas si el sistema cae, probadas |
| 17 | Archivo | Datos accesibles y legibles durante todo el periodo de conservación |

### Qué está cambiando
En **julio de 2025** la Comisión Europea publicó un **borrador** de un Anexo 11 mucho más extenso (más detalle en gestión de identidades y accesos, revisión del audit trail, seguridad, servicios en la nube y proveedores), junto con la revisión del Capítulo 4 (documentación) y un **Anexo 22 nuevo sobre inteligencia artificial**. La consulta pública cerró en octubre de 2025. **Mientras no se publique la versión final, sigue en vigor el Anexo 11 de 2011.** (Comprobado en la página de EudraLex en noviembre de 2026: el Anexo 11 vigente sigue siendo la revisión de enero de 2011.)

### Registros híbridos, estáticos y dinámicos
- **Registro híbrido**: parte en papel y parte electrónica (un cromatograma impreso y firmado). El dato electrónico **se conserva igualmente**: la impresión no lo sustituye.
- **Registro estático**: un dato fijo, como el peso de una báscula.
- **Registro dinámico**: un dato que se puede reprocesar, como un cromatograma de HPLC. Se guarda en formato **electrónico y reprocesable**, no como PDF.
`,
    plant: `
Una inspección revisa el sistema de cromatografía del laboratorio. Pide ver el audit trail de un lote: encuentra que un analista reintegró un pico tres veces antes de obtener un resultado conforme, sin motivo registrado. Es un hallazgo del **Anexo 11, apartado 9** y de **Part 11, 11.10(e)**, y además una posible manipulación de resultados (*testing into compliance*). Por eso QA revisa el audit trail antes de aprobar cada resultado.
`,
    batchRecord: `
- Las firmas electrónicas muestran **nombre, fecha y hora, y significado** (11.50).
- Cuando el lote se libera con un sistema, el registro identifica a la persona que lo libera.
- Los informes impresos indican el sistema, la versión y si algún dato se modificó.
`,
    terms: [
      { es: "Registro electrónico", en: "Electronic record", def: "Cualquier información en formato digital que se crea, modifica, guarda o transmite en un sistema." },
      { es: "Sistema cerrado", en: "Closed system", def: "Sistema cuyo acceso controlan las personas responsables de sus registros (Part 11)." },
      { es: "Registro híbrido", en: "Hybrid record", def: "Registro con una parte en papel y otra electrónica." },
      { es: "Registro dinámico", en: "Dynamic record", def: "Dato que permite interacción o reprocesado, como un cromatograma." },
      { es: "Persona Cualificada", en: "Qualified Person (QP)", def: "Responsable legal de certificar la liberación de lotes en la UE." },
      { es: "Normas predicado", en: "Predicate rules", def: "Requisitos GMP de base (por ejemplo, 21 CFR 211) que dicen qué registros hay que tener; Part 11 dice cómo hacerlo en electrónico." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "¿Qué apartado de Part 11 exige un audit trail seguro y con fecha y hora?",
        options: ["11.10(a)", "11.10(e)", "11.50", "11.300"],
        answer: 1,
        explain: "11.10(e): audit trail generado por el sistema; los cambios no deben ocultar la información anterior.",
      },
      {
        kind: "choice",
        q: "Según 11.200, ¿cuántos componentes como mínimo tiene una firma electrónica no biométrica?",
        options: ["Uno", "Dos", "Tres", "Depende del usuario"],
        answer: 1,
        explain: "Dos componentes distintos, como usuario y contraseña.",
      },
      {
        kind: "choice",
        q: "¿Qué Anexo 11 está en vigor mientras no se publique la revisión final?",
        options: ["Ninguno", "El de 2011", "El borrador de 2025", "Solo GAMP 5"],
        answer: 1,
        explain: "Un borrador en consulta no es obligatorio; sigue aplicándose la versión de 2011.",
      },
      {
        kind: "choice",
        q: "Un cromatograma se guarda solo como PDF y se borran los datos crudos. ¿Qué problema hay?",
        options: [
          "Ninguno, el PDF es legible",
          "Se pierde el registro dinámico: ya no se puede reprocesar ni revisar su audit trail",
          "El PDF ocupa más",
          "Solo es un problema en EE. UU.",
        ],
        answer: 1,
        explain: "El original es el dato electrónico completo con sus metadatos; un PDF es una copia estática incompleta.",
      },
    ],
  },
  {
    slug: "audit-trail-y-firma-electronica",
    level: 20,
    order: 3,
    title: "Audit trail y firma electrónica",
    titleEn: "Audit trail and electronic signatures",
    minutes: 12,
    summary: "Las reglas de 21 CFR Part 11 y del Anexo 11 europeo que hacen que un dato electrónico sea fiable.",
    body: `
Los registros electrónicos deben ser tan fiables como el papel. Las dos normas de referencia son:
- **21 CFR Part 11** (FDA, EE. UU.): registros y firmas electrónicas.
- **Anexo 11** de las GMP europeas: sistemas informatizados.

### Audit trail (registro de auditoría)
Un registro **automático, seguro y con fecha y hora** que guarda **quién** hizo **qué**, **cuándo** y, en los cambios GMP, **por qué**. Ejemplo:

| Fecha y hora | Usuario | Acción | Valor anterior | Valor nuevo | Motivo |
|---|---|---|---|---|---|
| 18/11/2026 10:42 | jlopez | Modificar T reacción | 61,5 | 60,5 | Error de lectura |

El usuario **no puede** desactivarlo ni borrarlo. QA lo revisa antes de liberar el lote.

### Firma electrónica
- Es **personal e intransferible**, igual que la manuscrita.
- Suele tener **dos componentes**: usuario y contraseña.
- Al firmar quedan el **nombre**, la **fecha y hora** y el **significado** (realizado, revisado, aprobado).

### Buenas prácticas
- **No compartir** usuario ni contraseña. No dejarla apuntada.
- **Bloquear la sesión** (o cerrar) al alejarte del puesto.
- No usar la sesión de otra persona aunque esté abierta.
- Los relojes de los sistemas los controla informática: no se cambian.
`,
    plant: `
Te levantas a tomar una muestra y dejas el terminal del MES abierto. Un compañero introduce un dato con tu sesión. El audit trail dirá que fuiste tú. Por eso: **bloquear siempre** la sesión al irte.
`,
    batchRecord: `
- Firmas electrónicas con su significado.
- Informe de audit trail revisado por QA como parte de la liberación.
`,
    terms: [
      { es: "Registro de auditoría", en: "Audit trail", def: "Historial automático e inalterable de creación, cambio y borrado de datos." },
      { es: "Firma electrónica", en: "Electronic signature", def: "Firma en un sistema informático, legalmente equivalente a la manuscrita." },
      { es: "21 CFR Part 11", en: "21 CFR Part 11", def: "Norma de la FDA sobre registros y firmas electrónicas." },
      { es: "Anexo 11", en: "EU GMP Annex 11", def: "Anexo de las GMP europeas sobre sistemas informatizados." },
      { es: "Control de acceso", en: "Access control", def: "Gestión de quién puede entrar en un sistema y qué puede hacer." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "¿Qué cuatro cosas registra un buen audit trail en un cambio GMP?",
        options: [
          "Quién, qué, cuándo y por qué",
          "Solo el valor final",
          "El nombre del ordenador",
          "La opinión del usuario",
        ],
        answer: 0,
        explain: "Además suele guardar el valor anterior y el nuevo.",
      },
      {
        kind: "choice",
        q: "Vas a alejarte del terminal 5 minutos. ¿Qué haces?",
        options: ["Nada, vuelvo enseguida", "Bloqueo o cierro la sesión", "Le digo a un compañero que vigile", "Apago la pantalla"],
        answer: 1,
        explain: "Todo lo que se haga con tu sesión quedará a tu nombre.",
      },
      {
        kind: "choice",
        q: "¿Qué datos quedan unidos a una firma electrónica según 21 CFR Part 11?",
        options: [
          "Usuario, color de pantalla y equipo",
          "Nombre de quien firma, fecha y hora, y significado de la firma (realizado, revisado, aprobado)",
          "Solo la contraseña",
          "El nombre del ordenador",
        ],
        answer: 1,
        explain: "Así cualquiera que lea el registro sabe quién firmó, cuándo y con qué responsabilidad.",
      },
    ],
  },
  {
    slug: "accesos-copias-y-archivo",
    level: 20,
    order: 4,
    title: "Usuarios, revisión del audit trail, copias de seguridad y archivo",
    titleEn: "User access, audit trail review, backup and archiving",
    minutes: 18,
    summary: "Quién puede hacer qué en un sistema, cómo se revisa lo que hizo y cómo se conservan los datos durante años.",
    body: `
### Gestión de usuarios: el ciclo de vida de una cuenta
1. **Alta**: la pide el responsable del área y la aprueba el **dueño del sistema** (*system owner*). Solo después de la formación.
2. **Perfil (rol)**: el usuario recibe un **rol** con los permisos justos para su trabajo (*least privilege*): operador, analista, revisor, QA, administrador.
3. **Revisión periódica de accesos**: cada cierto tiempo se comprueba que cada persona sigue necesitando lo que tiene.
4. **Baja**: en cuanto la persona deja el puesto. La cuenta se **desactiva**, no se borra, para que sus registros sigan siendo atribuibles.

### Segregación de funciones (*segregation of duties*)
- Quien introduce un dato no lo aprueba: el analista no aprueba su propio resultado.
- Los **administradores** del sistema (informática) no deberían ser usuarios que generan datos GMP, para evitar conflictos de interés.
- Las **cuentas genéricas** ("lab1", "turno_noche") no se usan para acciones GMP: no son atribuibles.

### Contraseñas y sesión
- Personales, con longitud mínima, caducidad o controles equivalentes, y **bloqueo** tras varios intentos fallidos.
- **Cierre de sesión por inactividad** en los terminales.

### Revisar el audit trail
El Anexo 11 (apartado 9) pide que el audit trail se pueda convertir a un formato legible y se **revise periódicamente**. En la práctica, según el riesgo:
- **Antes de aprobar un resultado o liberar un lote**: QA revisa cambios, borrados, reprocesados y anulaciones de ese lote.
- **Periódicamente, a nivel de sistema**: intentos de acceso fallidos, cambios de configuración, cambios de hora, altas de usuarios.

Se busca, por ejemplo: un resultado repetido hasta que "cumple", datos borrados, cambios sin motivo o hechos fuera de turno.

### Copias de seguridad y archivo: no son lo mismo
| | Copia de seguridad (*backup*) | Archivo (*archive*) |
|---|---|---|
| Para qué | **Recuperar** el sistema si falla | **Conservar** los datos durante años |
| Duración | Corta (rotación de días o semanas) | Todo el periodo de conservación |
| Anexo 11 | Apartado 7.2: copias regulares; probar que se pueden **restaurar** | Apartado 17: datos accesibles y **legibles**; probarlo si cambia el sistema |

Para planificar la recuperación se definen dos números (los conocerás de desarrollo web):
- **RPO** (*Recovery Point Objective*): cuántos datos se pueden perder como máximo (por ejemplo, 1 hora).
- **RTO** (*Recovery Time Objective*): cuánto puede tardar el sistema en volver (por ejemplo, 4 horas).

Una regla práctica muy usada es la **3-2-1**: tres copias, en dos soportes distintos, una fuera de las instalaciones (y, contra el *ransomware*, alguna desconectada o inmutable).

### ¿Cuánto tiempo se guardan los datos?
Para un **API**, ICH Q7 (apartado 6.13) pide conservar los registros del lote al menos **1 año después de su fecha de caducidad**; si el API tiene **fecha de reanálisis**, al menos **3 años después de que el lote se haya distribuido por completo**. Las empresas suelen fijar plazos más largos.

### Continuidad de negocio (apartado 16)
Si el MES cae en mitad de un lote, debe existir un **procedimiento alternativo** probado (por ejemplo, hojas en papel preaprobadas) y una forma de incorporar después esos datos al sistema.
`,
    plant: `
El MES se cae a las 3:00 en plena carga de disolvente. El supervisor activa el procedimiento de contingencia: hojas en papel preaprobadas con el mismo contenido que los pasos del MES. Sigues anotando pesos, horas e iniciales en papel. Cuando el sistema vuelve, los datos se introducen con referencia a la hoja de contingencia, que se adjunta al lote, y se abre una incidencia informática.
`,
    batchRecord: `
- Si hubo contingencia: hojas en papel adjuntas y referencia en el registro electrónico.
- Informe de **revisión del audit trail** firmado por QA antes de la liberación.
`,
    terms: [
      { es: "Mínimo privilegio", en: "Least privilege", def: "Dar a cada usuario solo los permisos que necesita para su trabajo." },
      { es: "Segregación de funciones", en: "Segregation of duties", def: "Separar tareas incompatibles entre personas distintas, como introducir y aprobar." },
      { es: "Dueño del sistema", en: "System owner", def: "Responsable de la disponibilidad, el soporte y el mantenimiento de un sistema." },
      { es: "Dueño del proceso", en: "Process owner", def: "Responsable del proceso de negocio que usa el sistema y de sus datos." },
      { es: "Objetivo de punto de recuperación", en: "Recovery Point Objective (RPO)", def: "Cantidad máxima de datos que se acepta perder, medida en tiempo." },
      { es: "Objetivo de tiempo de recuperación", en: "Recovery Time Objective (RTO)", def: "Tiempo máximo aceptable para recuperar el sistema." },
      { es: "Archivo", en: "Archive", def: "Conservación a largo plazo de datos que ya no se modifican." },
    ],
    quiz: [
      {
        kind: "choice",
        q: "Un analista deja la empresa. ¿Qué se hace con su cuenta?",
        options: [
          "Se borra con todos sus datos",
          "Se desactiva, para que nadie la use y sus registros sigan siendo atribuibles",
          "Se la queda su sustituto",
          "Se deja activa por si vuelve",
        ],
        answer: 1,
        explain: "Borrarla haría perder la atribución de sus registros; dejarla activa permitiría su uso indebido.",
      },
      {
        kind: "choice",
        q: "¿Qué diferencia hay entre copia de seguridad y archivo?",
        options: [
          "Ninguna",
          "La copia sirve para recuperar el sistema; el archivo conserva los datos a largo plazo de forma legible",
          "El archivo es solo en papel",
          "La copia dura más que el archivo",
        ],
        answer: 1,
        explain: "Son dos procesos distintos con objetivos distintos (Anexo 11, apartados 7 y 17).",
      },
      {
        kind: "choice",
        q: "¿Qué pide el Anexo 11 sobre las copias de seguridad, además de hacerlas?",
        options: [
          "Imprimirlas",
          "Comprobar que los datos se pueden restaurar íntegros",
          "Guardarlas en el mismo servidor",
          "Nada más",
        ],
        answer: 1,
        explain: "Una copia que nunca se ha probado a restaurar no da garantías (apartado 7.2).",
      },
      {
        kind: "choice",
        q: "Un API con fecha de reanálisis se distribuyó por completo en 2026. ¿Hasta cuándo, como mínimo, se guardan sus registros según ICH Q7?",
        options: ["2027", "2029", "2031", "Para siempre"],
        answer: 1,
        explain: "Al menos 3 años después de la distribución completa del lote: 2026 + 3 = 2029.",
      },
    ],
  },
];
