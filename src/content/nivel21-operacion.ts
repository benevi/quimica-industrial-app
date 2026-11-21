import type { Lesson } from "./types";

export const operacionAFondo: Lesson = {
  slug: "sistemas-en-operacion-a-fondo",
  level: 21,
  order: 6,
  title: "Mantener un sistema validado a fondo",
  titleEn: "Keeping a computerised system validated in depth",
  minutes: 40,
  summary:
    "Qué es el estado validado y cómo se pierde sin que nadie lo note, cómo es un cambio completo en un sistema informatizado y por qué un parche del sistema operativo también lo es, qué se hace con las incidencias y los problemas, qué mira la revisión periódica y cada cuánto, configuración y entornos, continuidad y recuperación ante desastres, proveedores y nube, retirada de un sistema, lo que dice de verdad el borrador del anexo 22 sobre inteligencia artificial y qué te toca a ti en el turno.",
  body: `
En «Mantener un sistema validado: cambios, incidencias y revisión periódica» viste el resumen; aquí, los textos leídos. Lo general del control de cambios y del análisis de riesgos está en [Control de cambios y gestión de riesgos a fondo](/leccion/cambios-y-riesgos-a-fondo); las copias y el archivo, en [Usuarios, copias de seguridad y archivo a fondo](/leccion/accesos-y-archivo-a-fondo); los ciberataques y el modo degradado, en [Redes industriales y ciberseguridad a fondo](/leccion/ciberseguridad-ot-a-fondo).

### El estado validado y cómo se pierde
Una validación demuestra que el sistema funciona **tal y como estaba** el día de las pruebas: esa versión, esa configuración, ese servidor. El **estado validado** (*validated state*) es que el sistema siga siendo ese que se probó, o que cada diferencia esté evaluada y probada.

Los textos lo dicen así:
- **ICH Q7, 5.47**: los registros de todos los cambios en el hardware, el software y cualquier otro componente crítico deben **demostrar que el sistema se mantiene en estado validado**.
- **Borrador del anexo 11 de 2025, 2.1**: validar antes de usar y mantener el estado validado durante todo el ciclo de vida.

Como desarrollador lo reconocerás: es la deriva de configuración (*configuration drift*). Casi nunca se pierde de golpe:

| Cómo se pierde | Ejemplo de planta (ficticio) |
|---|---|
| Un cambio sin control | Alguien instala un controlador de impresora en el ordenador del panel de la centrífuga CF-230 |
| Muchos cambios pequeños | Diez parches evaluados uno a uno, nunca su efecto combinado |
| Plataforma sin soporte | El sistema operativo del historiador deja de recibir parches |
| Incidencias que se repiten | La balanza pierde la conexión con el MES cada semana y nadie busca la causa |
| El proveedor cambia algo | Un servicio en la nube actualiza su versión sin avisar |

El borrador (14.2) pide justo esto en la revisión periódica: evaluar el **efecto combinado** de varios cambios y detectar los **no aprobados**, por ejemplo con auditorías de configuración.

### Control de cambios: lo que piden los textos
- **Anexo 11 vigente (2011), apartado 10, «Gestión de cambios y de configuración»**: cualquier cambio en un sistema informatizado, **configuración incluida**, solo se hace de forma controlada y según un procedimiento definido.
- **ICH Q7, 5.47**: los cambios se hacen según un procedimiento de cambios y se **autorizan, documentan y prueban** formalmente.
- **ICH Q7, sección 13**: el software y el hardware informático están en la lista (13.11); calidad aprueba (13.12); se evalúa el impacto y se puede clasificar el cambio, por ejemplo en menor o mayor (13.13); se revisan los documentos (13.14) y se evalúan los primeros lotes (13.15).
- **PIC/S PI 011-3 (2007), 18.1**: el procedimiento debe recoger el cambio con su motivo, el estado del sistema antes de cambiarlo, quién autoriza, la decisión, cómo se marca el estado de los documentos, cómo se evalúa el impacto completo, incluidas las **pruebas de regresión** (*regression testing*: volver a probar lo que ya funcionaba), y su enlace con la gestión de configuración. El 18.2 pide definir cuándo y con qué documentación se admiten **cambios de emergencia** (*hot-fixes*).
- **Borrador del anexo 11, 3.1 ii**: cualquier cambio, también de plataforma y sistema operativo, va controlado; uno significativo para la calidad, el paciente o los datos exige recualificar y validar.

### Un cambio completo, de principio a fin
Valores de ejemplo, sistema y códigos ficticios. El dueño del proceso de secado pide que el MES-FX **rechace** pesos de torta fuera de rango al descargar el secadero SD-510, en vez de solo avisar.

| Etapa | Qué se hace | Quién |
|---|---|---|
| **Solicitud** | Petición CC-26-118: qué se cambia (configuración del paso de descarga), por qué (dos errores de tecleo en un trimestre) | Dueño del proceso |
| **Evaluación de impacto** | Afecta a un paso de la receta electrónica, su informe y el audit trail; no a datos guardados ni interfaces. Documentos: especificación de configuración, guía, formación | Dueño del sistema con expertos |
| **Riesgo y clasificación** | El campo es dato crítico del lote: impacto en la calidad. Clasificado como mayor según el procedimiento de la empresa | Equipo, con calidad |
| **Plan de pruebas** | En el entorno de pruebas: peso dentro, en el límite exacto, fuera, campo vacío. Regresión de los pasos vecinos y de la firma electrónica | Dueño del sistema |
| **Aprobación** | Calidad aprueba la propuesta y el plan **antes** de tocar nada | Unidad de calidad |
| **Pruebas** | Guiones ejecutados con evidencia. Una prueba falla: el mensaje no aparece en el informe. Se corrige y se repite | Probadores |
| **Implantación** | Paso a producción sin lotes en el paso afectado, con la versión anotada y los operadores ya formados | Informática de planta |
| **Cierre** | Documentos revisados, primeros lotes evaluados (ICH Q7, 13.15), informe de cambio aprobado | Calidad |

### El caso típico: un parche de seguridad del sistema operativo
Un parche es un cambio en un sistema validado: ICH Q7 (5.47) pide autorizarlo, documentarlo y probarlo. Pero no aplicarlo también es un riesgo. El borrador del anexo 11 lo reconoce: los parches de seguridad se instalan **a tiempo**, según las recomendaciones del fabricante, y para vulnerabilidades críticas puede ser **de inmediato** (15.13). Un sistema sin parches críticos es muy vulnerable y, si procede, se **aísla** de la red y de internet (15.14). Y antes de probar un sistema, su plataforma debe estar actualizada y parcheada (9.3).

En la práctica, con valores de ejemplo:
1. El fabricante publica un parche crítico el 10/11/2026. El procedimiento de la empresa (ejemplo) da 14 días naturales: límite el **24/11/2026**.
2. Se abre el cambio, a menudo con una evaluación de riesgo ya hecha para parches del mismo tipo: eso lo decide cada empresa en su procedimiento, no lo fija ningún texto leído.
3. Se instala primero en la **estación de pruebas**. PI 011-3 avisa de que probar un arreglo directamente en el sistema en uso es muy arriesgado.
4. Regresión corta y escrita: el SCADA arranca, comunica con los PLC, el historiador sigue guardando, la hora es correcta, las alarmas llegan.
5. Instalación en producción en una **parada programada**, nunca con un lote en marcha, y verificación después.

### Configuración y entornos
**Configuración** es la foto de lo que forma el sistema: el glosario del borrador del anexo 11 habla de la elección de hardware, software y documentación. PI 011-3 lo resume así: un cambio convierte una configuración en otra. La **gestión de configuración** (*configuration management*) identifica cada pieza (*configuration item*), controla sus versiones y verifica que lo instalado coincide con lo documentado. Su referencia es la **línea base** (*baseline*): el registro documentado y aprobado de cómo es el sistema (PI 011-3, 17.2). El borrador (6.6) pide además que la configuración elegida esté en una **especificación de configuración** controlada.

Piezas típicas: versión de la aplicación, sistema operativo y parches, base de datos, parámetros, roles, interfaces, firmware de los PLC y reglas del cortafuegos.

**Entornos.** Lo normal es tener al menos **desarrollo**, **pruebas o validación** y **producción**, como en tu antiguo trabajo. El anexo 11 (4.7) pide que los entornos y herramientas de prueba tengan evaluada y documentada su idoneidad: si el entorno de pruebas no se parece al de producción, la prueba demuestra poco.

### Incidencias y problemas
**Anexo 11, apartado 13**: se comunican y evalúan **todas las incidencias, no solo los fallos del sistema y los errores de datos**. La causa raíz de una incidencia crítica se identifica y sirve de base a acciones correctivas y preventivas (CAPA). **ICH Q7 (5.46)** pide registrar e investigar las que puedan afectar a la calidad o a la fiabilidad de registros y resultados. El borrador (3.1 i) añade comprobar que las CAPA **funcionan**.

El anexo 11 (11) y su borrador (14.2) nombran por separado **incidencias** (*incidents*) y **problemas** (*problems*), sin definirlos. En esta lección usamos la convención habitual de los departamentos de informática: la incidencia es un suceso concreto; el problema, la causa común de varias.

| Incidencia (ejemplo) | Qué haces | Qué se evalúa después |
|---|---|---|
| La balanza no envía el peso al MES | No teclear sin más: aplicar el procedimiento de contingencia y avisar | Si los datos tecleados tuvieron segunda comprobación |
| El MES se cuelga al firmar un paso | Anotar la hora y no repetir la firma a ciegas | Si la firma se guardó una vez o ninguna |
| La impresora saca una etiqueta con otro número de lote | Retener la etiqueta y avisar | Si hay más etiquetas afectadas |
| Faltan 20 minutos de temperatura del secadero en la tendencia | Comprobar el registro local si existe y avisar | Si afecta a un parámetro crítico del lote |

Ejemplo de problema: tres caídas de comunicación en una semana en la misma zona; juntas apuntan a un conmutador de red averiado. La investigación sigue [Desviaciones y CAPA a fondo](/leccion/desviaciones-y-capa-a-fondo).

### Revisión periódica
**Anexo 11, apartado 11**: los sistemas se evalúan periódicamente para confirmar que siguen en estado validado y cumplen GMP. Incluye, según proceda: funciones actuales, desviaciones, incidencias, problemas, historial de actualizaciones, rendimiento, fiabilidad, seguridad e informes de estado de validación. **ICH Q7 (12.60)** dice lo mismo para sistemas y procesos validados: sin cambios significativos y con buenos resultados, normalmente no hace falta revalidar.

El borrador (14.2) lo detalla en doce puntos:

| Bloque | Qué se mira |
|---|---|
| Cambios | Hardware, software, configuración, plataforma, interfaces; documentación al día; efecto combinado y cambios no aprobados |
| Seguimiento | Acciones de revisiones, auditorías e inspecciones anteriores y CAPA; revisiones de audit trail y de accesos; análisis de riesgo; incidencias, problemas, desviaciones y amenazas de seguridad |
| Soporte | Mantenimiento, calibración, contratos, acuerdos de nivel de servicio e indicadores de proveedores |
| Datos | Copias, pruebas de restauración, planes de recuperación, archivo, evaluaciones de integridad de datos |
| Normas | Cambios en los requisitos reglamentarios |

**¿Cada cuánto?** Según el riesgo: lo piden el borrador (14.3) y PIC/S PI 041-1, que añade tener en cuenta el efecto acumulado de los cambios. **Ningún texto leído da una cifra.** Un esquema de ejemplo: riesgo alto cada 12 meses, medio cada 24, bajo cada 36, con 30 días de margen.

**Cuenta resuelta (valores de ejemplo, hoy 21/11/2026).**

| Sistema | Riesgo | Última revisión cerrada | Vence | Límite con margen | Estado |
|---|---|---|---|---|---|
| MES-FX | Alto, 12 meses | 14/03/2026 | 14/03/2027 | 13/04/2027 | Al día |
| CAL-Q (calibraciones) | Medio, 24 meses | 30/09/2024 | 30/09/2026 | 30/10/2026 | Fuera de plazo |
| HIS-P (historiador) | Bajo, 36 meses | 15/06/2024 | 15/06/2027 | 15/07/2027 | Al día |

CAL-Q: al 21/11/2026 van 52 días desde el vencimiento y 22 desde el límite. Es un incumplimiento del propio procedimiento y se trata como tal. La revisión acaba con una conclusión: sigue validado, sigue con acciones o necesita revalidación parcial o completa (14.1). Y al retirar el sistema hay una **revisión final** (14.3).

### Continuidad del negocio y recuperación ante desastres
**Anexo 11, apartado 16**: para los sistemas que soportan procesos críticos se prevé cómo seguir si se averían, por ejemplo con un **sistema manual o alternativo**. El tiempo para ponerlo en marcha se fija según el riesgo, y todo se documenta y **se prueba**. ICH Q7 (5.48) pide un sistema de respaldo si una avería pudiera perder registros para siempre.

Dos cosas distintas:
- **Continuidad**: seguir trabajando sin el sistema, por ejemplo en papel. Lo viste en [MES y hoja de producción electrónica a fondo](/leccion/mes-y-ebr-a-fondo).
- **Recuperación ante desastres** (*disaster recovery*): devolver el sistema y sus datos. El borrador pide un plan probado y disponible durante y después del desastre, con un **tiempo objetivo de recuperación** (*Recovery Time Objective*, RTO) definido (15.7); centros de datos que minimicen inundaciones, incendios o cortes (15.5); y, cuando proceda, replicar los datos a un segundo centro a distancia segura (15.6). PI 011-3 (19.6) pide procedimientos escritos de recuperación y un plan de pruebas con registro de fechas y resultados.

**Cuenta resuelta (valores de ejemplo).** El MES-FX cae a las 02:10 y su RTO es de 4 h: debe volver antes de las 06:10. Vuelve a las 05:25: 3 h 15 min de caída, 45 min de margen. Si la última copia era de las 00:00, lo registrado hasta las 02:10 puede faltar: se comprueba antes de teclear el papel.

### Proveedores y nube
**Anexo 11, apartado 3**: cuando un tercero suministra, instala, configura, valida, mantiene (también en remoto) o guarda un sistema o procesa datos, hace falta un **acuerdo formal** con responsabilidades claras; el departamento de informática propio se trata igual (3.1). Auditar o no al proveedor se decide por riesgo (3.2); la documentación de un producto comercial se revisa frente a los requisitos de usuario (3.3); y la información de calidad del proveedor se enseña a los inspectores si la piden (3.4).

El **borrador de 2025** endurece esto pensando en los servicios como el **software como servicio** (*SaaS*), que cita expresamente (6.1, 6.3):
- La empresa sigue siendo **plenamente responsable** aunque externalice (2.6, 7.1).
- Auditoría o evaluación a fondo según riesgo, y aprovechar lo del proveedor en vez de repetirlo (7.2).
- Supervisión con **acuerdos de nivel de servicio** (*SLA*) e **indicadores** (*KPI*) (7.3), y documentación explicable desde la planta (7.4).
- Contrato que fije, entre otras cosas, plazos de respuesta, condiciones de auditoría, apoyo en inspecciones, una **estrategia de salida** (*exit strategy*) para conservar el control de los datos y el proceso de **versiones nuevas** con posibilidad de probarlas antes (7.5).

Es la clave de la nube: si el proveedor actualiza cuando quiere, la empresa debe poder probar antes.

### Retirada de un sistema y conservación de sus datos
El control de cambios cubre también la retirada (PI 011-3). Los pasos, en orden:
1. **Decisión por control de cambios**: qué lo sustituye o si solo se archivan los datos.
2. **Inventario de datos**: datos brutos, metadatos y audit trail. El borrador define la migración incluyendo metadatos.
3. **Migrar o archivar.** Si se migra, la validación comprueba que no cambian ni el valor ni el significado (anexo 11, 4.8), con un proceso validado (borrador, 10.3). Si se archiva, se comprueba accesibilidad, legibilidad e integridad (anexo 11, 17), con una suma de comprobación (*checksum*) antes de borrar nada (borrador, 17.2).
4. **Mantener la lectura.** PIC/S PI 041-1 pide procedimientos que aseguren que los datos archivados se siguen pudiendo leer cuando se retira un sistema, y conservar acceso al software necesario para revisarlos.
5. **Revisión final** (borrador, 14.3), baja de cuentas e interfaces y cierre del cambio.

El plazo de conservación no cambia por retirar el sistema: para un API con fecha de reanálisis, al menos 3 años desde la distribución completa del lote (ICH Q7, 6.13).

### Inteligencia artificial: el borrador del anexo 22 leído
**Estado.** Estuvo en consulta pública, con el anexo 11 y el capítulo 4, del 7 de julio al 7 de octubre de 2025. A 21 de noviembre de 2026, la página oficial de EudraLex vol. 4 no recoge ningún anexo 22 y mantiene el anexo 11 y el capítulo 4 de enero de 2011: los tres siguen siendo **borradores**, orientación y no obligación.

**Alcance (1).** Modelos de aprendizaje automático (*machine learning*) que aprenden de datos, usados en **aplicaciones críticas** con impacto directo en el paciente, la calidad o la integridad de datos, por ejemplo para predecir o clasificar. Solo modelos **estáticos** (congelados: no aprenden durante el uso) y **deterministas** (a igual entrada, igual salida). Los dinámicos, los probabilísticos, la **IA generativa** y los grandes modelos de lenguaje (*LLM*) no deben usarse en aplicaciones GMP críticas.

**Usos no críticos.** Si se usa un LLM, por ejemplo para resumir notas de turno, una persona con formación adecuada responde siempre de que el resultado sirve: **persona en el bucle** (*human-in-the-loop*). Si un modelo solo aconseja a una persona y por eso se probó menos, se vigilan la formación y el rendimiento de esa persona como en un proceso manual (3.3) y se guardan registros de su revisión (10.5).

**Uso previsto y criterios (3 y 4).** Un experto del proceso describe la tarea y los datos de entrada, comunes y raros, antes de las pruebas. Los criterios de aceptación deben ser **al menos tan buenos como el proceso que sustituye** (4.3).

**Datos de prueba (5 y 6).** Representativos de todos los casos, en número suficiente y bien etiquetados; no se recomienda generarlos con IA generativa (5.6). Deben ser **independientes**: nunca usados para entrenar, protegidos con control de acceso y audit trail, y quien los vio no entrena ese modelo salvo en pareja con alguien que no los vio (6.5).

**Explicabilidad y confianza (8 y 9).** En las pruebas se registra qué rasgos llevaron a cada decisión (técnicas como SHAP, LIME o mapas de calor). El sistema registra la **puntuación de confianza** (*confidence score*) de cada resultado y tiene un **umbral** (*threshold*): por debajo, mejor marcar «indeciso» que dar una respuesta poco fiable.

**Operación (10).** El modelo, el sistema y el proceso pasan por control de cambios y de configuración, con medidas para detectar cambios no autorizados. Se vigilan el rendimiento (por ejemplo, si cambia la luz de una cámara) y la deriva de los datos de entrada.

**Ejemplo ficticio.** Una cámara clasifica el producto al descargar el secadero como «conforme» o «revisar». De 1200 fotos de prueba, 100 con defecto real, detecta 96 defectos y marca 22 buenas como «revisar»: acierta 96 + 1078 = 1174, un 97,8 %. Con confianza 0,62 y umbral 0,90 (valores de ejemplo), el resultado es «indeciso» y decide una persona.

### Qué te toca a ti en el turno
- **No instales nada** ni cambies ajustes en un equipo GMP: ni programas, ni controladores, ni memorias USB (el borrador, 15.15 a 15.17, pide controlar y desactivar puertos USB en equipos críticos).
- **Informa de lo raro**, aunque parezca pequeño: un cálculo que no cuadra, una pantalla que nadie anunció, una hora mal. El anexo 11 (13) pide comunicar todas las incidencias.
- **Si el sistema queda bloqueado** tras un cambio no aprobado, no busques cómo saltarlo. Lo instalado ya no coincide con la línea base, así que nadie puede asegurar que haga lo que se probó. Que el sistema se bloquee solo es una medida que puede poner tu empresa: ningún texto leído obliga a bloquear, pero el borrador del anexo 11 (14.2) pide detectar los cambios no aprobados y el del anexo 22 (10.2), medidas eficaces que detecten cambios no autorizados en un modelo. Se detecte como se detecte, se evalúa, se vuelve a la línea base o se tramita el cambio, y calidad decide qué pasa con los datos.

Los nombres de equipos y sistemas y todos los valores de ejemplo de esta lección son ficticios. En planta manda siempre el procedimiento vigente (SOP).
`,
  plant: `
Lunes, 06:00. Nerea llega al panel de la centrífuga ficticia CF-230 para empezar la descarga del lote ficticio KZ-31-207. La pantalla del ordenador del panel muestra un aviso: «Configuración distinta de la línea base. Uso GMP bloqueado. Avise a sistemas». No hay botón para continuar.

Su compañero del turno de noche recuerda que el sábado un técnico externo conectó una impresora nueva en ese ordenador «para sacar los informes más rápido». No había petición de cambio.

Nerea no reinicia nada ni intenta entrar con otro usuario. Anota la hora y avisa a Iván, el jefe de turno, que llama a sistemas de planta y abre una incidencia. La centrífuga está parada y vacía, así que no hay riesgo para el producto. El procedimiento de contingencia permite seguir con el mando local y la hoja de papel preaprobada, pero Iván prefiere esperar: sistemas lo resuelve en menos de una hora.

Sistemas compara lo instalado con la línea base: hay un controlador de impresora y un servicio nuevo. Los retira, vuelve a la configuración aprobada, comprueba que el panel comunica con el PLC y que el historiador registra, y documenta todo. Calidad revisa el audit trail del fin de semana: no se fabricó nada con el equipo cambiado. Abre una desviación por el cambio sin control y una CAPA para el acceso de técnicos externos.

A las 07:10 el panel vuelve a estar disponible y Nerea empieza la descarga.
`,
  batchRecord: `
- **Versión del sistema**: si el procedimiento lo pide, la versión del MES o de la receta electrónica con la que se fabrica el lote. Tras un cambio, los lotes nuevos muestran la versión nueva.
- **Incidencia informática durante el lote**: hora de inicio y fin, qué viste y la referencia de la incidencia o de la desviación. Nada de detalles técnicos que no pida el SOP.
- **Contingencia**: si se trabajó en papel, los formularios preaprobados y numerados adjuntos y la hora de vuelta al sistema.
- **Equipo bloqueado**: si un panel o un terminal estuvo bloqueado por configuración no conforme, la referencia de la incidencia y la autorización para volver a usarlo.
- **Primeros lotes tras un cambio**: puede aparecer una nota de que el lote está en evaluación por el cambio CC con su número; la gestiona calidad, no tú.
- **Ninguna anotación de que «se instaló» o «se arregló» algo**: eso va en el registro del cambio o de la incidencia, no en tu hoja.
`,
  terms: [
    { es: "Estado validado", en: "Validated state", def: "Situación en la que el sistema sigue siendo el que se probó, o cada diferencia está evaluada y probada." },
    { es: "Control de cambios", en: "Change control", def: "Procedimiento formal para proponer, evaluar, aprobar, probar, implantar y cerrar un cambio." },
    { es: "Pruebas de regresión", en: "Regression testing", def: "Volver a probar funciones que ya funcionaban para comprobar que un cambio no las ha estropeado." },
    { es: "Cambio de emergencia", en: "Emergency change (hot-fix)", def: "Cambio imprevisto y necesario que se implanta con rapidez según lo que prevea el procedimiento." },
    { es: "Gestión de configuración", en: "Configuration management", def: "Identificar las piezas de un sistema, controlar sus versiones y verificar que lo instalado coincide con lo documentado." },
    { es: "Línea base", en: "Baseline", def: "Registro documentado y aprobado de cómo es el sistema en un momento dado." },
    { es: "Auditoría de configuración", en: "Configuration audit", def: "Comparación de lo instalado con la línea base para detectar cambios no aprobados." },
    { es: "Incidencia", en: "Incident", def: "Suceso concreto que se sale de lo normal en un sistema y que se comunica y evalúa." },
    { es: "Revisión periódica", en: "Periodic review", def: "Evaluación programada, con frecuencia según el riesgo, para confirmar que el sistema sigue validado." },
    { es: "Plan de recuperación ante desastres", en: "Disaster recovery plan", def: "Plan probado para devolver un sistema y sus datos tras un desastre." },
    { es: "Tiempo objetivo de recuperación", en: "Recovery Time Objective (RTO)", def: "Tiempo máximo fijado para que un sistema vuelva a estar disponible tras una caída." },
    { es: "Acuerdo de nivel de servicio", en: "Service Level Agreement (SLA)", def: "Compromisos medibles del proveedor, como tiempos de respuesta y de resolución." },
    { es: "Estrategia de salida", en: "Exit strategy", def: "Lo pactado para que la empresa conserve el control de sus datos si termina el servicio." },
    { es: "Persona en el bucle", en: "Human-in-the-loop (HITL)", def: "Una persona formada revisa y responde del resultado que da un modelo de IA." },
  ],
  quiz: [
    {
      kind: "choice",
      q: "Informática quiere instalar esta noche un parche crítico del sistema operativo en el servidor del SCADA, con un lote en marcha. ¿Qué es correcto?",
      options: [
        "Instalarlo ya, porque los parches de seguridad no necesitan ningún control",
        "No instalarlo nunca, porque cambiaría el sistema validado",
        "Abrir el cambio, probarlo fuera de producción e instalarlo en una parada",
        "Instalarlo y avisar a calidad solo si después hay algún fallo",
      ],
      answer: 2,
      explain: "El parche es un cambio (ICH Q7, 5.47) pero no aplicarlo también es un riesgo (borrador del anexo 11, 15.13): se prueba fuera de producción y se instala sin lote en marcha.",
    },
    {
      kind: "number",
      q: "Valores de ejemplo. Un sistema de riesgo medio se revisa cada 24 meses con 30 días de margen. Su última revisión se cerró el 30/09/2024. Hoy es 21/11/2026. ¿Cuántos días han pasado desde el límite con margen?",
      answer: 22,
      tolerance: 0,
      unit: "días",
      explain: "Vence el 30/09/2026 y el límite con margen es el 30/10/2026. Del 30/10/2026 al 21/11/2026 van 22 días: está fuera de plazo.",
    },
    {
      kind: "choice",
      q: "Según el anexo 11 vigente, apartado 13, ¿qué incidencias se comunican y evalúan?",
      options: [
        "Todas, no solo los fallos del sistema y los errores de datos",
        "Solo las que paran la producción más de una hora",
        "Solo los fallos de hardware que detecta informática",
        "Solo las que el operador considera graves",
      ],
      answer: 0,
      explain: "El apartado 13 dice todas las incidencias; la causa raíz de las críticas se identifica y da lugar a CAPA.",
    },
    {
      kind: "number",
      q: "Valores de ejemplo. El MES cae a las 02:10 y su tiempo objetivo de recuperación es de 4 h. Vuelve a funcionar a las 05:25. ¿Cuántos minutos de margen quedaron hasta el límite?",
      answer: 45,
      tolerance: 0,
      unit: "min",
      explain: "Límite: 02:10 + 4 h = 06:10. De 05:25 a 06:10 van 45 min. La caída duró 3 h 15 min.",
    },
    {
      kind: "choice",
      q: "Al empezar el turno, el panel de la centrífuga dice que su configuración no coincide con la línea base y bloquea el uso GMP. ¿Por qué tiene sentido ese bloqueo?",
      options: [
        "Porque el panel necesita reiniciarse cada cierto tiempo para funcionar",
        "Porque lo instalado ya no coincide con lo que se probó y se validó",
        "Porque el operador no tiene permisos suficientes para ese equipo",
        "Porque la licencia del programa ha caducado durante el fin de semana",
      ],
      answer: 1,
      explain: "Un cambio no aprobado saca el sistema del estado validado: se evalúa, se vuelve a la línea base o se tramita el cambio y calidad decide sobre los datos.",
    },
    {
      kind: "choice",
      q: "La empresa contrata un LIMS como servicio en la nube. Según el borrador del anexo 11 (7.5), ¿qué debe incluir el contrato, entre otras cosas?",
      options: [
        "Que el proveedor asuma toda la responsabilidad GMP de los datos",
        "Que el proveedor no pueda sacar nunca versiones nuevas del programa",
        "Una estrategia de salida para los datos y poder probar las versiones nuevas",
        "Que la empresa renuncie a auditar al proveedor a cambio de un precio menor",
      ],
      answer: 2,
      explain: "El borrador pide, entre otras cosas, estrategia de salida, condiciones de auditoría y poder probar las versiones nuevas; la responsabilidad sigue en la empresa (7.1).",
    },
    {
      kind: "number",
      q: "Valores de ejemplo. Un modelo de IA se prueba con 1200 fotos: 100 tienen defecto real y detecta 96; de las 1100 buenas, marca 22 como «revisar». ¿Qué porcentaje de fotos clasifica correctamente? Redondea a una decimal.",
      answer: 97.8,
      tolerance: 0.005,
      unit: "%",
      explain: "Buenas bien clasificadas: 1100 - 22 = 1078. Aciertos: 96 + 1078 = 1174. 1174 / 1200 × 100 = 97,8 %.",
    },
    {
      kind: "choice",
      q: "Según el borrador del anexo 22, ¿puede usarse un gran modelo de lenguaje (LLM) para resumir las notas de turno?",
      options: [
        "Sí, en un uso no crítico y con una persona formada que responda",
        "Sí, en cualquier uso GMP, incluida la decisión de liberar lotes",
        "No, el borrador prohíbe cualquier uso de IA en una planta GMP",
        "Sí, sin control, porque los LLM quedan fuera de las GMP",
      ],
      answer: 0,
      explain: "El borrador excluye la IA generativa y los LLM de los usos críticos; en los no críticos exige una persona en el bucle. Y sigue siendo un borrador.",
    },
    {
      kind: "choice",
      q: "Se retira un sistema antiguo de gestión de lotes. ¿Qué paso es imprescindible antes de borrar sus datos?",
      options: [
        "Imprimir las pantallas principales y guardarlas en una carpeta",
        "Pedir a cada operador que confirme que ya no usa el sistema",
        "Desinstalar el programa para que nadie lo siga utilizando",
        "Verificar con una suma de comprobación que los datos siguen íntegros",
      ],
      answer: 3,
      explain: "El anexo 11 (4.8 y 17) pide comprobar valor, significado e integridad, y el borrador (17.2) una verificación como una suma de comprobación antes de borrar.",
    },
    {
      kind: "number",
      q: "Valores de ejemplo. El fabricante publica un parche crítico el 10/11/2026 y el procedimiento de la empresa da 14 días naturales para instalarlo. ¿Qué día del mes de noviembre es el límite?",
      answer: 24,
      tolerance: 0,
      unit: "de noviembre",
      explain: "10/11/2026 + 14 días = 24/11/2026. El plazo lo fija el procedimiento de la empresa: ningún texto leído da una cifra.",
    },
  ],
};
