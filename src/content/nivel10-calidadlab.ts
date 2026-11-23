import type { Lesson } from "./types";

export const calidadDelLaboratorioAFondo: Lesson = {
  slug: "calidad-del-laboratorio-a-fondo",
  level: 10,
  order: 11,
  title: "Calidad del laboratorio a fondo: ISO 17025, acreditación e intercomparaciones",
  titleEn: "Laboratory quality in depth: ISO/IEC 17025, accreditation and interlaboratory comparisons",
  minutes: 38,
  summary:
    "Las cuatro reglas de calidad que oirás nombrar en un laboratorio (ISO 9001, ISO/IEC 17025, BPL de la OCDE y GMP) y qué demuestra cada una; la diferencia entre certificar y acreditar, con ENAC y el Reglamento (CE) 765/2008; los ensayos de aptitud y las intercomparaciones con el cálculo de la puntuación z y z′; los materiales de referencia certificados como control de sesgo; las auditorías internas del laboratorio; y la gestión ambiental y los residuos del laboratorio, con cuentas resueltas.",
  body: `
En [El laboratorio de control de calidad a fondo: cuaderno, trazabilidad e integridad de los datos analíticos](/leccion/buenas-practicas-laboratorio-a-fondo) viste cómo se protege cada dato dentro del laboratorio. Aquí subimos un piso: ¿cómo sabe alguien de fuera que un laboratorio entero trabaja bien?

Una analogía de desarrollo web: una cosa es que tu empresa tenga un proceso ordenado de *tickets*, revisiones y despliegues, y otra que un examinador externo compruebe que tú sabes programar en un lenguaje concreto. Lo primero es un **sistema de gestión**; lo segundo, **competencia técnica**. Las normas de calidad del laboratorio separan justo esas dos ideas.

### Cuatro reglas, cuatro preguntas
- **ISO 9001.** La norma ISO de sistemas de gestión de la calidad. No es específica de laboratorios: trata de cómo una empresa organiza su calidad. Es de pago y no la hemos leído; aquí solo va lo que se comprueba en documentos gratuitos.
- **ISO/IEC 17025** (en España, UNE-EN ISO/IEC 17025). Según la guía de la Organización Mundial de la Salud (OMS) para laboratorios de control (serie de informes técnicos 1052, de 2024, anexo 4), su título es «Requisitos generales para la competencia de los laboratorios de ensayo y calibración». La OMS cita la edición de 2017. También es de pago.
- **Buenas Prácticas de Laboratorio (BPL)** de la Organización para la Cooperación y el Desarrollo Económicos (OCDE): en España, el Real Decreto 822/1993, con el anexo que sustituyó el Real Decreto 1369/2000. Son para **estudios no clínicos de seguridad**.
- **Normas de correcta fabricación** (*Good Manufacturing Practice*, GMP): para tu planta, la guía ICH Q7 (Consejo Internacional de Armonización, *International Council for Harmonisation*). Tu laboratorio de control de calidad (*quality control*, QC) vive aquí.

| | ISO 9001 | ISO/IEC 17025 | BPL (OCDE) | GMP (ICH Q7) |
|---|---|---|---|---|
| Pregunta | ¿Está bien organizada la empresa? | ¿Es competente el laboratorio para estos ensayos? | ¿Es fiable este estudio de seguridad? | ¿Se fabrica y controla bien este principio activo? |
| Quién lo comprueba | Una entidad de certificación | El organismo nacional de acreditación (en España, la Entidad Nacional de Acreditación, ENAC) | La Administración, con inspección y verificación (RD 822/1993, art. 4) | La autoridad sanitaria, en inspección (ICH Q10, 1.4) |
| Qué se obtiene | Un certificado | Una acreditación con un alcance | Cumplimiento verificado | Conformidad con GMP |
| ¿Es obligatoria? | Voluntaria | Voluntaria, salvo que una ley la exija | Para esos estudios | Requisito de las autoridades para fabricar (ICH Q10, 1.3) |

La diferencia entre BPL y GMP, con fines, responsables y archivo, ya la tienes en [El laboratorio de control de calidad a fondo: cuaderno, trazabilidad e integridad de los datos analíticos](/leccion/buenas-practicas-laboratorio-a-fondo). Dos detalles más: la OMS dice que su guía es coherente con ISO/IEC 17025:2017 (1.4), e ICH Q10 dice que se basa en conceptos de calidad de ISO (1.3). La familia es la misma; cambia quién comprueba y para qué.

### Certificar no es acreditar
**Certificar.** El Real Decreto 2200/1995 (Reglamento de la Infraestructura para la Calidad y la Seguridad Industrial) dice que las **entidades de certificación** establecen la conformidad, pedida voluntariamente, de una empresa, producto, proceso, servicio o persona con los requisitos de normas o especificaciones técnicas (art. 4 y 20). Es decir: «tu sistema cumple la norma». Y no pueden certificar lo que ellas mismas asesoraron (art. 25).

**Acreditar.** La Ley 21/1992, de Industria (art. 8.11, citada en el Real Decreto 1715/2010), define la **acreditación** (*accreditation*) como el reconocimiento formal de la competencia técnica de una entidad para certificar, inspeccionar o auditar, o de un laboratorio de ensayo o de calibración. El Reglamento (CE) 765/2008 añade que es para **actividades específicas** de un **organismo de evaluación de la conformidad** (*conformity assessment body*, art. 2.10), es decir, de quien hace calibración, ensayo, certificación o inspección (art. 2.13).

En una frase: **la certificación mira si un sistema cumple una norma; la acreditación, si alguien es competente para un trabajo técnico concreto.** Y hay jerarquía: el organismo de acreditación acredita a laboratorios y también a entidades de certificación (RD 2200/1995, art. 22 y 28).

### ENAC y las reglas europeas
El Reglamento 765/2008 pide en cada Estado **un único organismo nacional de acreditación** (art. 4.1), sin ánimo de lucro (art. 4.7), que no compita con quienes acredita ni les asesore (art. 4.8 y 6). En España, el Real Decreto 1715/2010 designó a **ENAC** como ese organismo único. El organismo evalúa a quien lo pide y, si es competente, expide un **certificado de acreditación** (art. 5.1); después lo vigila (5.3) y puede limitar, suspender o retirar la acreditación (5.4).

Vale en otros países porque los organismos nacionales se evalúan entre sí (**evaluación por pares**, *peer evaluation*, art. 10) y, si la superan, las autoridades aceptan sus acreditaciones (art. 11.2; en España, disposición adicional del RD 1715/2010). Según ese real decreto, ENAC tiene acuerdos de reconocimiento mutuo en la cooperación europea (EA) y en las internacionales de laboratorios (ILAC) y de certificación (IAF).

### El alcance: la letra pequeña
Un laboratorio no está «acreditado» sin más: lo está para unos ensayos. Acreditarse para unas tareas no supone estarlo para las demás (RD 2200/1995, art. 6.1). El Reglamento (UE) 2017/625, de controles oficiales de alimentos, exige a los laboratorios oficiales trabajar según EN ISO/IEC 17025, estar acreditados por un organismo nacional de acreditación y que el **alcance** incluya los métodos que usan (art. 37.4 e y 37.5).

Si tu empresa encarga fuera el análisis de paladio residual, no basta el logotipo de ENAC: ese ensayo tiene que estar en el alcance. Y para un principio activo (API) eso no sustituye a las GMP: ICH Q7 pide que el laboratorio contratado cumpla las GMP (16.10), que se le evalúe (16.11), un contrato que reparta responsabilidades (16.12), poder auditarlo (16.13) y que no cambie métodos sin aprobación (16.16).

### Ensayos de aptitud e intercomparaciones
Un laboratorio puede validar, calibrar y llevar gráficos de control y aun así tener un sesgo que no ve, porque se compara consigo mismo. Para salir de esa burbuja se compara con otros. La OMS define:

- **Comparación interlaboratorios** (*interlaboratory comparison*): medidas sobre los mismos objetos o similares por dos o más laboratorios, con condiciones fijadas de antemano.
- **Ensayo de aptitud** (*proficiency testing*, PT): evaluar a los participantes frente a criterios previos mediante esas comparaciones. El organizador reparte porciones de un mismo material homogéneo y devuelve a cada laboratorio una **puntuación z** (*z-score*) o equivalente, convertida en satisfactorio, cuestionable o insatisfactorio.

Es un examen común: todos responden la misma pregunta y se comparan con la respuesta correcta.

Un matiz para tu planta: la OMS pide participar con regularidad a los laboratorios **salvo al de control de calidad de un fabricante** (6.72). Para él no es exigencia de esa guía; puede participar si su sistema de calidad lo decide. Lo que sí le pide es asegurar la validez de sus resultados con patrones o materiales de referencia, gráficos de control y réplicas, entre otras herramientas (6.71). Lo decide su sistema de calidad.

### La puntuación z, paso a paso
El documento de la FDA, la agencia del medicamento de Estados Unidos, *Evaluation of Milk Laboratories* (revisión de 2023), que aplica ISO 13528 e ISO/IEC 17043 a sus ensayos de aptitud, da la fórmula:

> z = (x − x_pt) / σ_pt

- **x**: tu resultado.
- **x_pt**: el **valor asignado** (*assigned value*), la «respuesta correcta». Sale del consenso de los participantes (allí, una media robusta que no se deja arrastrar por los extremos), de un laboratorio experto o del juicio de expertos.
- **σ_pt**: la desviación estándar para evaluar la aptitud, la anchura que el organizador considera aceptable.

| Puntuación | Lectura | Por qué |
|---|---|---|
| \\|z\\| ≤ 2 | Satisfactorio | Un resultado correcto cae ahí casi siempre |
| 2 < \\|z\\| < 3 | Cuestionable: señal de aviso | Solo un 5 % de los resultados correctos se alejan tanto |
| \\|z\\| ≥ 3 | Insatisfactorio: señal de acción | Solo un 0,3 % se alejan tanto |

Son los porcentajes de la campana de Gauss de [Estadística del laboratorio a fondo: comparar, aceptar y rechazar resultados](/leccion/estadistica-laboratorio-a-fondo); recalculados, un 4,6 % y un 0,27 %.

**Ejercicio resuelto 1.** Agua por Karl Fischer en un polvo (valores de ejemplo): x_pt = 2,50 %; σ_pt = 0,10 %.

| Laboratorio | Resultado (%) | Cuenta | z | Lectura |
|---|---|---|---|---|
| A | 2,58 | (2,58 − 2,50) / 0,10 | 0,80 | Satisfactorio |
| B | 2,31 | (2,31 − 2,50) / 0,10 | −1,90 | Satisfactorio |
| C | 2,74 | (2,74 − 2,50) / 0,10 | 2,40 | Cuestionable |
| D | 2,17 | (2,17 − 2,50) / 0,10 | −3,30 | Insatisfactorio |
| El tuyo | 2,46 | (2,46 − 2,50) / 0,10 | −0,40 | Satisfactorio |

El signo dice hacia dónde: D da de menos y C, de más. B cumple, pero conviene mirar si en rondas anteriores también salía bajo.

**Ejercicio resuelto 2: cuando el valor asignado también duda.** Si su incertidumbre típica u(x_pt) dividida entre σ_pt pasa de 0,3, el mismo documento usa **z′**:

> z′ = (x − x_pt) / √(σ_pt² + u(x_pt)²)

Con u(x_pt) = 0,04 %: 0,04 / 0,10 = 0,4, mayor que 0,3. Denominador: √(0,0100 + 0,0016) = 0,1077.

- C: z′ = 0,24 / 0,1077 = 2,23. Sigue cuestionable.
- Un laboratorio E con 2,81 %: z = 3,10 (insatisfactorio), pero z′ = 0,31 / 0,1077 = 2,88 (cuestionable).

A E no se le castiga por una duda que es del organizador. Por eso el informe dice qué puntuación usa.

**Y si sale mal.** La OMS pide que los registros de la revisión por la dirección recojan los ensayos de aptitud y las investigaciones de los dudosos o insatisfactorios (3.50), revisar los datos de seguimiento al menos una vez al año (6.73) y actuar si salen de los criterios para no informar resultados incorrectos (6.74). En la práctica se trata como una desviación, con causa raíz y acción correctiva y preventiva (CAPA), como en [Desviaciones y CAPA a fondo: de «ha pasado algo» a «no vuelve a pasar»](/leccion/desviaciones-y-capa-a-fondo). Y la pregunta incómoda: ¿desde cuándo daba de menos el método y qué lotes se analizaron con él? Un ensayo de aptitud no sustituye a la investigación de un resultado fuera de especificación ni «demuestra» que un lote cumple.

### Materiales de referencia certificados: el control de sesgo en casa
Qué es un **material de referencia certificado** (*certified reference material*, CRM) lo viste en [Reactivos, patrones y disoluciones a fondo: lo que el laboratorio usa para medir](/leccion/reactivos-patrones-a-fondo): lleva un certificado con el valor, su incertidumbre y su trazabilidad. Como herramienta de calidad, la OMS lo cita para asegurar la validez de los resultados (6.71) y pide comprarlo a proveedores evaluados (4.1), registrarlo con su número, origen, lote, uso, conservación, caducidad y certificado (5.77 y 5.78) y confirmar antes de usarlo que sirve y está en fecha (5.79). Si el ensayo de aptitud es mirar fuera, el CRM es tener la respuesta correcta en casa.

**Ejercicio resuelto 3** (valores de ejemplo). CRM de agua con valor certificado 5,02 %. Cinco resultados: 4,95 · 4,98 · 5,01 · 4,97 · 4,96 %.

1. Media: 24,87 / 5 = **4,974 %**. Recuperación: 4,974 / 5,02 × 100 = **99,1 %**.
2. s = 0,0230 %; s / √5 = 0,0103.
3. Prueba t frente al valor de referencia: t = 0,046 / 0,0103 = **4,47**, mayor que el crítico con 4 grados de libertad, 2,776.

El método da significativamente de menos, un 0,9 %. Si importa frente a la especificación lo decide el laboratorio con su procedimiento, contando también la incertidumbre del certificado ([Metrología a fondo: error, incertidumbre, trazabilidad y calibración](/leccion/metrologia-a-fondo)); ignorarlo no es una opción.

### Auditorías internas del laboratorio
ICH Q7 pide auditorías internas regulares con calendario aprobado, y que hallazgos y acciones se documenten, lleguen a la dirección y se cierren a tiempo (2.40 y 2.41). Cómo responder a un auditor en planta lo verás en [El sistema de calidad a fondo: quién decide qué en una planta de API](/leccion/sistema-de-calidad-a-fondo). La OMS concreta para el laboratorio (3.42 y 3.43):

- Un **programa** con frecuencia, métodos y responsables, según la importancia de cada actividad, los cambios y las auditorías anteriores.
- Al menos **una vez al año**, organizadas por el responsable de calidad, con alcance basado en el **riesgo**.
- Auditores **formados e independientes** de lo que auditan.
- Resultados a la dirección y al personal; correcciones sin demora y comprobación de que funcionaron.

También auditan otros (3.44): la inspección de medicamentos, ENAC si el laboratorio está acreditado y, por ICH Q7 16.13, tu empresa a sus laboratorios contratados. Las BPL dan una idea útil para cualquier auditoría: sus inspecciones son basadas en estudios, en instalaciones o en procesos (RD 822/1993, redacción del RD 1369/2000). Es decir, seguir una muestra de punta a punta, recorrer una sala o mirar un proceso transversal, como la gestión de patrones.

### Gestión ambiental del laboratorio
La OMS pide procedimientos para retirar con seguridad residuos químicos y biológicos, reactivos, muestras, disolventes y filtros de aire según la normativa ambiental (5.23) y un sistema de gestión de residuos conforme a la ley (7.2).

**ISO 14001 sin pagarla.** El sistema europeo de gestión y auditoría ambientales (EMAS) reproduce sus requisitos (secciones 4 a 10 de EN ISO 14001:2015) en el anexo II del Reglamento (CE) 1221/2009, en la redacción del Reglamento (UE) 2017/1505. Dos piezas:

- **Aspectos ambientales** (*environmental aspects*, A.6.1.2): se determinan los de cada actividad, también en situaciones anormales y de emergencia, y se decide con criterios cuáles son **significativos**. El anexo I de EMAS cita entre los directos las emisiones a la atmósfera, los vertidos al agua, los residuos, sobre todo peligrosos, y el uso de energía y materias primas. En el laboratorio: vapores en las campanas, efluentes de la cromatografía líquida (HPLC), reactivos caducados y material contaminado.
- **Auditoría interna** (A.9.2): a intervalos planificados, con programa, criterios y alcance, auditores objetivos e imparciales e informe a la dirección. La misma lógica que en calidad.

### Residuos del laboratorio: pocos litros, muchas clases
La ley de residuos y los códigos de la Lista Europea de Residuos (LER) están en [Almacenamiento, emergencias y residuos a fondo: del bidón que llega al residuo que sale](/leccion/emergencias-y-residuos-a-fondo). Lo propio del laboratorio lo explica la nota técnica de prevención (NTP) 480 del Instituto Nacional de Seguridad y Salud en el Trabajo (INSST), una guía de buenas prácticas de 1999 que habla de **residuos peligrosos en pequeñas cantidades**. Primero, **minimizar**: pensar el residuo al diseñar el ensayo, sustituir lo más peligroso y no acumular reactivos que acabarán caducando. Después, separar en siete grupos:

| Grupo | Qué va | Ejemplo en el laboratorio de control |
|---|---|---|
| I | Disolventes halogenados (más del 2 % de halógeno) | Diclorometano de una extracción |
| II | Disolventes no halogenados | Acetona de lavado |
| III | Disoluciones acuosas, en subgrupos | Fase móvil acetonitrilo y agua del HPLC |
| IV | Ácidos concentrados (más del 10 % en volumen) | Restos de una digestión ácida |
| V | Aceites | Aceite de un baño calefactor |
| VI | Sólidos y material desechable contaminado | Filtros, viales, guantes con producto |
| VII | Especiales: muy reactivos, muy tóxicos, sin identificar, reactivos caducados | Reactivo caducado, peróxidos |

El grupo VII no se mezcla con nada; antes de juntar ácidos concentrados se prueba con poca cantidad. Cada envase lleva contenido, productor, responsable y fechas de inicio y final de llenado.

**Ejercicio resuelto 4: ¿halogenado o no?** (valores de ejemplo). Un bidón de lavados tiene 9,5 kg de acetona y etanol y 0,5 kg de diclorometano (CH₂Cl₂). Con las masas atómicas de la app (C 12,011; H 1,008; Cl 35,45):

1. Masa molar: 12,011 + 2 × 1,008 + 2 × 35,45 = **84,93 g/mol**; cloro, 70,90 / 84,93 = 0,835.
2. Cloro en el bidón: 0,5 × 0,835 = 0,417 kg en 10 kg, un **4,2 %**. Más del 2 %: todo el bidón pasa al grupo I.
3. Para pasar del 2 % bastan 0,02 × 10 / 0,835 = **0,24 kg** de diclorometano.

Un vaso echado «por comodidad» convierte un bidón no halogenado en halogenado, más caro de tratar y más difícil de recuperar.

**Ejercicio resuelto 5: el residuo de un HPLC** (valores de ejemplo). A 1,0 mL/min durante 22 h: 1,0 × 60 × 22 = **1320 mL** al día. Una garrafa de 5 L, uno de los envases que cita la NTP, se llena en 5000 / 1320 = **3,8 días**. Un HPLC que rebosa un sábado es un vertido.

### Lo que significa para ti en planta
- Tu resultado vale porque hay un laboratorio que se compara con otros y se audita. Si oyes que investiga un ensayo de aptitud, puede tocar a tus lotes.
- Una muestra que va fuera va a un laboratorio aprobado por calidad, con contrato y, si procede, acreditado para ese ensayo.
- En tu puesto de controles en proceso también hay residuos de laboratorio: cada uno a su envase, nunca al desagüe.
- En una auditoría, interna, de ENAC o de la inspección, enseña cómo trabajas de verdad.

Los valores de los ejercicios son de ejemplo. En planta y en el laboratorio manda siempre el procedimiento vigente (SOP): ensayos de aptitud, criterios, auditorías y separación de residuos son los que digan tus procedimientos.
`,
  plant: `
Todo es ficticio: empresa, equipos, códigos y números.

Martes, turno de mañana. Victor descarga el secadero SD-301 del intermedio ficticio IX-40 y toma la muestra de humedad final. En el pequeño laboratorio de controles en proceso, junto a la sala, la termobalanza TB-02 da 0,42 %. El lavado de la cubeta deja unos mililitros de acetona: Victor los vierte en la garrafa del grupo II (no halogenados), la de etiqueta verde en la codificación que propone la NTP 480, comprueba la etiqueta (contenido, productor, fecha de inicio) y la deja cerrada.

Por la tarde, en la reunión de turno, la jefa de control de calidad, Nuria, explica por qué el laboratorio central repite esta semana la valoración de agua por Karl Fischer de dos lotes. En la última ronda de un ensayo de aptitud externo, su resultado dio z = −2,6: cuestionable, por debajo del valor asignado. No es un fuera de especificación de ningún lote, pero el sistema de calidad pide investigarlo.

La investigación encuentra que el título del reactivo de Karl Fischer se comprobaba con un patrón de agua que llevaba abierto más tiempo del que permite el procedimiento. Analizan un material de referencia certificado: la recuperación sale del 99,1 % y la prueba t marca sesgo. Cambian el patrón, repiten el material de referencia (ahora sin sesgo significativo) y revisan los lotes analizados desde la ronda anterior. Dos estaban cerca del límite de agua; se reanalizan con el patrón nuevo y siguen cumpliendo. Se cierra con una acción correctiva y una verificación en la próxima ronda.

Nuria añade que el análisis de paladio del API ficticio FX-101 se hace en un laboratorio contratado ficticio, acreditado para ese ensayo, con contrato de calidad, y que calidad lo audita cada cierto tiempo.
`,
  batchRecord: `
En la hoja de producción (*batch record*) verás poco de esto, pero lo que anotas lo hace posible:

- **Controles en proceso que haces tú**: equipo (por ejemplo, la termobalanza TB-02), estado de calibración o verificación, valor leído con su unidad, hora e iniciales.
- **Resultados del laboratorio**: valor, número de análisis y, si el ensayo lo hizo un laboratorio externo, su número de informe o la referencia que pida la hoja.
- **Muestras enviadas fuera**: destino aprobado, fecha de envío y referencia, si tu procedimiento lo pide.
- **Repeticiones o reanálisis**: solo con la referencia de la investigación o la autorización de calidad.
- **Residuos de tu puesto**: destino de sobrantes de muestra y disolventes de limpieza según la hoja o el registro de residuos (grupo, envase, fecha).
- **Incidencias**: garrafa llena, envase sin etiqueta o derrame, anotados y comunicados en el momento.
`,
  terms: [
    { es: "Acreditación", en: "Accreditation", def: "Reconocimiento formal, por el organismo nacional de acreditación, de la competencia técnica de un laboratorio o entidad para actividades concretas." },
    { es: "Certificación", en: "Certification", def: "Declaración de una entidad de certificación de que una empresa, producto, proceso, servicio o persona cumple los requisitos de una norma." },
    { es: "Organismo nacional de acreditación", en: "National accreditation body", def: "Único organismo de cada Estado con potestad pública para acreditar (Reglamento 765/2008, art. 2.11); en España, ENAC." },
    { es: "Organismo de evaluación de la conformidad", en: "Conformity assessment body", def: "Organismo que hace calibración, ensayo, certificación o inspección (Reglamento 765/2008, art. 2.13)." },
    { es: "Alcance de la acreditación", en: "Scope of accreditation", def: "Lista de ensayos, métodos o actividades concretas para los que un laboratorio está acreditado." },
    { es: "Evaluación por pares", en: "Peer evaluation", def: "Evaluación de un organismo nacional de acreditación por otros organismos nacionales; permite el reconocimiento mutuo." },
    { es: "Comparación interlaboratorios", en: "Interlaboratory comparison", def: "Medidas sobre los mismos objetos o similares por dos o más laboratorios, con condiciones fijadas de antemano." },
    { es: "Ensayo de aptitud", en: "Proficiency testing (PT)", def: "Evaluación del desempeño de los laboratorios participantes frente a criterios fijados de antemano mediante comparaciones interlaboratorios." },
    { es: "Valor asignado", en: "Assigned value", def: "Valor que el organizador de un ensayo de aptitud toma como correcto para evaluar a los participantes." },
    { es: "Puntuación z", en: "z-score", def: "(resultado − valor asignado) / σ_pt: cuántas desviaciones estándar se separa un resultado del valor asignado." },
    { es: "Material de referencia certificado", en: "Certified reference material (CRM)", def: "Material de referencia con certificado que da el valor de una propiedad, su incertidumbre y su trazabilidad." },
    { es: "Auditoría interna", en: "Internal audit", def: "Revisión planificada que la organización hace de sí misma, con auditores independientes de lo auditado." },
    { es: "Aspecto ambiental", en: "Environmental aspect", def: "Elemento de las actividades de una organización que interactúa con el medio ambiente, como emisiones, vertidos o residuos." },
    { es: "Residuos peligrosos en pequeñas cantidades", en: "Small-quantity hazardous waste", def: "Nombre que da la NTP 480 a los residuos peligrosos de laboratorios: poco volumen y mucha variedad." },
  ],
  quiz: [
    {
      kind: "choice",
      q: "Un laboratorio externo te dice «tenemos el certificado ISO 9001». Necesitas que analice paladio residual en tu API. ¿Qué te dice ese certificado?",
      options: [
        "Que es competente para el análisis de paladio en cualquier matriz",
        "Que su sistema de gestión cumple una norma, no su competencia técnica",
        "Que ENAC ha evaluado su método de paladio y su incertidumbre",
        "Que cumple las GMP de ICH Q7 y no hace falta auditarlo nunca",
      ],
      answer: 1,
      explain: "La certificación establece la conformidad de un sistema con una norma (RD 2200/1995, art. 4); la competencia técnica para un ensayo concreto la reconoce la acreditación, y para un API, además, ICH Q7 pide GMP, contrato y auditoría (16.10 a 16.13).",
    },
    {
      kind: "choice",
      q: "¿Qué organismo concede en España la acreditación de un laboratorio según ISO/IEC 17025?",
      options: [
        "Cualquier entidad de certificación que la empresa contrate",
        "La Agencia del medicamento, durante la inspección GMP",
        "El propio laboratorio, con su auditoría interna anual",
        "ENAC, único organismo nacional de acreditación",
      ],
      answer: 3,
      explain: "El Reglamento (CE) 765/2008 obliga a designar un único organismo nacional de acreditación (art. 4.1) y el Real Decreto 1715/2010 designó a ENAC.",
    },
    {
      kind: "number",
      q: "En un ensayo de aptitud el valor asignado es 2,50 % y σ_pt = 0,10 %. Tu laboratorio informa 2,74 %. ¿Cuánto vale z?",
      answer: 2.4,
      tolerance: 0.01,
      unit: "",
      explain: "z = (2,74 − 2,50) / 0,10 = 0,24 / 0,10 = 2,4. Está entre 2 y 3: resultado cuestionable, una señal de aviso.",
    },
    {
      kind: "choice",
      q: "Un laboratorio obtiene z = −3,30 en un ensayo de aptitud. ¿Cómo se interpreta?",
      options: [
        "Insatisfactorio: señal de acción, se investiga la causa",
        "Satisfactorio, porque el signo negativo indica que da de menos",
        "Cuestionable, solo se vigila en la ronda siguiente",
        "Fuera de especificación del lote analizado ese día",
      ],
      answer: 0,
      explain: "Con |z| ≥ 3 el resultado es insatisfactorio (señal de acción): solo un 0,3 % de los resultados correctos se alejan tanto. No es un OOS de un lote, pero se investiga.",
    },
    {
      kind: "number",
      q: "Valor asignado 2,50 %, σ_pt = 0,10 % y u(x_pt) = 0,04 %. Como u(x_pt) / σ_pt = 0,4 es mayor que 0,3, se usa z′. Un laboratorio informa 2,81 %. ¿Cuánto vale z′, con dos decimales?",
      answer: 2.88,
      tolerance: 0.01,
      unit: "",
      explain: "z′ = 0,31 / raíz de (0,10² + 0,04²) = 0,31 / 0,1077 = 2,88. Con z habría salido 3,10, insatisfactorio; con z′ es cuestionable.",
    },
    {
      kind: "number",
      q: "Un material de referencia certificado de agua tiene valor certificado 5,02 %. La media de cinco determinaciones es 4,974 %. ¿Cuál es la recuperación, en %, con un decimal?",
      answer: 99.1,
      tolerance: 0.005,
      unit: "%",
      explain: "Recuperación = 4,974 / 5,02 × 100 = 99,1 %. Si la prueba t sale significativa, el método tiene sesgo y se investiga.",
    },
    {
      kind: "choice",
      q: "Según la guía de la OMS para laboratorios de control (TRS 1052), ¿cómo deben ser los auditores internos del laboratorio?",
      options: [
        "Los analistas que hacen ese ensayo, porque lo conocen mejor",
        "Personal de producción, para que haya otra mirada",
        "Personal formado e independiente de la actividad auditada",
        "Siempre auditores externos contratados por la dirección",
      ],
      answer: 2,
      explain: "La OMS (3.43) pide auditorías al menos anuales, con alcance basado en el riesgo y hechas por personal formado e independiente de lo que audita.",
    },
    {
      kind: "number",
      q: "Un bidón de disolventes de lavado tiene 10 kg en total, de ellos 0,5 kg de diclorometano (CH₂Cl₂, 84,93 g/mol, con 70,90 g de cloro por mol). ¿Qué porcentaje en masa de cloro tiene el bidón, con un decimal?",
      answer: 4.2,
      tolerance: 0.02,
      unit: "%",
      explain: "Fracción de cloro del CH₂Cl₂: 70,90 / 84,93 = 0,835. Cloro: 0,5 × 0,835 = 0,417 kg en 10 kg, un 4,2 %. Más del 2 %: grupo I, disolventes halogenados (NTP 480).",
    },
    {
      kind: "number",
      q: "Un HPLC trabaja a 1,0 mL/min durante 22 h al día y su residuo va a una garrafa de 5 L. ¿Cuántos días tarda en llenarse, con un decimal?",
      answer: 3.8,
      tolerance: 0.02,
      unit: "días",
      explain: "Al día: 1,0 × 60 × 22 = 1320 mL. Días: 5000 / 1320 = 3,8 días. Por eso la garrafa se vigila y se registra.",
    },
    {
      kind: "choice",
      q: "Un laboratorio contratado está acreditado por ENAC, pero el análisis de disolventes residuales que le pides no figura en su alcance. ¿Qué es correcto?",
      options: [
        "Vale igual: la acreditación cubre todo lo que hace el laboratorio",
        "La acreditación no cubre ese ensayo; calidad decide con contrato y auditoría",
        "Vale si el laboratorio también tiene un certificado ISO 9001",
        "Basta con que el informe lleve el logotipo de ENAC en la cabecera",
      ],
      answer: 1,
      explain: "Acreditarse para unas tareas no supone estarlo para las demás (RD 2200/1995, art. 6.1): el alcance lista los métodos. Para un API, ICH Q7 pide además evaluar al laboratorio, un contrato y poder auditarlo (16.11 a 16.13).",
    },
  ],
};
