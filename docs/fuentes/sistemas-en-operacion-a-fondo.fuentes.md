# Fuentes de la lección `sistemas-en-operacion-a-fondo`

Documentos leídos en texto (`pdftotext -layout`). Las copias en PDF se reutilizaron de otras lecciones de esta sesión, que las habían descargado de los hosts oficiales (`src_normas/`, `src_sap/dl/`, `src_accesos/`), y se volvieron a leer aquí. La página de EudraLex y la de la consulta se descargaron de nuevo el 21/11/2026 en `src_oper/`.

- **EudraLex vol. 4, anexo 11** (revisión de enero de 2011), `src_normas/a11.txt`. Leído entero: principio y apartados 1 a 17, más el glosario.
- **Borrador del anexo 11 (2025)**, `src_normas/a11d.txt` (consulta de la Comisión Europea). Leídos 1, 2.1 a 2.8, 3.1, 6.1 a 6.6, 7.1 a 7.5, 9.1 a 9.9, 10.1 a 10.4, 14.1 a 14.3, 15.1 a 15.20, 17.1 a 17.5 y el glosario (backup, change control, configuration, migration).
- **Borrador del anexo 22 (2025)**, `src_normas/a22d.txt`. Leído entero: apartados 1 a 10 y el glosario.
- **Página de EudraLex vol. 4**: https://health.ec.europa.eu/medicinal-products/eudralex/eudralex-volume-4_en (`src_oper/vol4.html`, descargada el 21/11/2026). Comprobado: «Annex 11 Computerised Systems (revision January 2011)», «Chapter 4 - Documentation» con enlace `chapter4_01-2011_en.pdf`, y en la lista de anexos no figura ningún anexo 22 (pasa del 19 al 21).
- **Página de la consulta**: https://health.ec.europa.eu/consultations/stakeholders-consultation-eudralex-volume-4-good-manufacturing-practice-guidelines-chapter-4-annex_en (`src_oper/cons.html`, descargada el 21/11/2026). Leído: estado «Closed», apertura el 7 de julio de 2025, cierre el 7 de octubre de 2025 a las 23:59 (CEST), redacción del EMA GMDP Inspectors Working Group con PIC/S, y los tres textos (capítulo 4, anexo 11 y anexo 22 nuevo).
- **ICH Q7**: https://database.ich.org/sites/default/files/Q7%20Guideline.pdf (`src_normas/q7.txt`). Leídos 5.40 a 5.49, 6.12 a 6.16, 12.60 y 13.10 a 13.17.
- **PIC/S PI 011-3** (25 de septiembre de 2007), `src_oper/pi011.txt` (copia de `src_sap/dl/pi011.txt`). Leídos 17.1 a 17.3 con la nota 30, 18.1 a 18.6 con la nota 31, 19.5 y 19.6, la tabla de mantenimiento (línea 2040 y siguientes) y el glosario: «Configuration», «Configuration Management», «Unplanned (Emergency) Change» con la nota 59.
- **PIC/S PI 041-1** (1 de julio de 2021), `src_oper/pics041.txt`. Leídos 9.1.10, 9.2 punto 5 («Periodic System Evaluation»), 9.2 punto 6, la parte de seguridad de red y el punto sobre la retirada de sistemas y el archivo (página 51 de 63).
- **21 CFR Part 11**, `src_normas/part11.txt`: leído 11.10(k). Al final no se cita en el cuerpo.
- **FDA, guía de 2003 «Scope and Application»**, `src_normas/fda2003.txt`: leído III.C.5 «Record Retention». Al final no se cita en el cuerpo.
- **Lecciones del repo leídas para no repetirlas**: `nivel21.ts` (las tres cortas), `nivel18-ciber.ts` (temas, deberes del operador y modo degradado), `nivel20-accesos.ts` (temas y cuentas de fechas), `nivel20-normas.ts` (resumen de los borradores y alcance para API), `nivel16-cambios.ts` (sección 13 de ICH Q7 y el recorrido de un cambio), `nivel16-validacion.ts` (revisión periódica), `nivel19-mes.ts` («Cuando el MES se cae»).

## Afirmaciones normativas

| Afirmación de la lección | Fuente | Cómo se comprobó |
|---|---|---|
| Los registros de los cambios deben demostrar que el sistema se mantiene en estado validado | ICH Q7, 5.47 | Leído en el documento |
| Validar antes de usar y mantener el estado validado durante todo el ciclo de vida | Borrador del anexo 11, 2.1 | Leído en el documento |
| La revisión periódica evalúa el efecto combinado de los cambios y detecta los no aprobados, por ejemplo con auditorías de configuración | Borrador del anexo 11, 14.2 iii | Leído en el documento |
| Todo cambio, configuración incluida, solo de forma controlada y según un procedimiento definido; título «Change and Configuration Management» | Anexo 11 (2011), apartado 10 | Leído en el documento |
| Los cambios siguen un procedimiento y se autorizan, documentan y prueban formalmente | ICH Q7, 5.47 | Leído en el documento |
| Software y hardware informático en la lista de cambios; aprueba la unidad de calidad; evaluación del impacto y clasificación menor o mayor; revisión de documentos; evaluación de los primeros lotes | ICH Q7, 13.11 a 13.15 | Leído en el documento |
| Contenido del procedimiento de cambios: motivo, estado previo, autorización, decisión, estado de los documentos, impacto con análisis y pruebas de regresión, enlace con la gestión de configuración | PI 011-3, 18.1 | Leído en el documento |
| Definir cuándo y con qué documentación se admiten los cambios de emergencia (*hot-fixes*) | PI 011-3, 18.2 | Leído en el documento |
| Cualquier cambio, también de plataforma y sistema operativo, va controlado; un cambio significativo obliga a recualificar y validar | Borrador del anexo 11, 3.1 ii | Leído en el documento |
| Parches de seguridad a tiempo según el fabricante; para vulnerabilidades críticas, puede que de inmediato | Borrador del anexo 11, 15.13 | Leído en el documento |
| Un sistema sin los parches críticos es muy vulnerable y, si procede, se aísla de la red y de internet | Borrador del anexo 11, 15.14 | Leído en el documento |
| Plataforma actualizada y parcheada antes de empezar las pruebas | Borrador del anexo 11, 9.3 | Leído en el documento |
| Probar un arreglo directamente en el sistema en uso es muy arriesgado; idealmente no se hace primero en el entorno real | PI 011-3, nota 59 | Leído en el documento |
| Un cambio convierte una configuración en otra; definición de gestión de configuración | PI 011-3, glosario | Leído en el documento |
| La configuración es la elección de hardware, software y documentación | Borrador del anexo 11, glosario | Leído en el documento |
| Línea base: registro documentado de la descripción del sistema | PI 011-3, 17.2 («documented baseline record») | Leído en el documento |
| La configuración elegida va en una especificación de configuración controlada | Borrador del anexo 11, 6.6 | Leído en el documento |
| Las herramientas de prueba automatizadas y los entornos de prueba tienen documentada la evaluación de su idoneidad | Anexo 11 (2011), 4.7 | Leído en el documento |
| Se comunican y evalúan todas las incidencias, no solo los fallos y los errores de datos; la causa raíz de las críticas es la base de las CAPA | Anexo 11 (2011), 13 | Leído en el documento |
| Se registran e investigan las incidencias que puedan afectar a la calidad o a la fiabilidad de registros y resultados | ICH Q7, 5.46 | Leído en el documento |
| Se verifica la eficacia de las CAPA | Borrador del anexo 11, 3.1 i | Leído en el documento |
| El anexo 11 y su borrador nombran incidencias y problemas por separado y no los definen | Anexo 11 (2011), 11; borrador, 14.2 vi | Leído en el documento: no hay definición en ninguno de los glosarios |
| Contenido de la evaluación periódica (funciones, desviaciones, incidencias, problemas, actualizaciones, rendimiento, fiabilidad, seguridad, informes de estado de validación) | Anexo 11 (2011), 11 | Leído en el documento |
| Sin cambios significativos y con buenos resultados, normalmente no hace falta revalidar | ICH Q7, 12.60 | Leído en el documento |
| Los doce puntos de la revisión, agrupados en la tabla | Borrador del anexo 11, 14.2 i a xii | Leído en el documento |
| Frecuencia según el riesgo; revisión final al retirar el sistema; conclusiones posibles | Borrador del anexo 11, 14.1 y 14.3 | Leído en el documento |
| Frecuencia según el riesgo y teniendo en cuenta el efecto acumulado de los cambios | PI 041-1, 9.2 punto 5 | Leído en el documento |
| Ningún texto leído da una frecuencia en meses | Anexo 11, borrador, PI 041-1, ICH Q7 | Leído: no aparece ninguna cifra |
| Continuidad con un sistema manual o alternativo; tiempo de puesta en marcha según el riesgo; documentado y probado | Anexo 11 (2011), 16 | Leído en el documento |
| Sistema de respaldo si una avería pudiera perder registros para siempre | ICH Q7, 5.48 | Leído en el documento |
| Plan de recuperación ante desastres probado, con RTO; centros de datos frente a desastres; réplica a distancia segura | Borrador del anexo 11, 15.5 a 15.7 | Leído en el documento |
| Procedimientos escritos de recuperación y plan de pruebas con registro de fechas y resultados | PI 011-3, 19.6 | Leído en el documento |
| Acuerdo formal con terceros; el departamento de informática propio se trata igual | Anexo 11 (2011), 3.1 | Leído en el documento |
| Auditoría según riesgo; revisión de la documentación del producto comercial; información para los inspectores | Anexo 11 (2011), 3.2 a 3.4 | Leído en el documento |
| El borrador cita el software como servicio | Borrador del anexo 11, 6.1 («as-a-service») y 6.3 («software-as-a-service») | Leído en el documento |
| La empresa sigue siendo plenamente responsable aunque externalice | Borrador del anexo 11, 2.6 y 7.1 | Leído en el documento |
| Auditoría o evaluación a fondo y aprovechar el trabajo del proveedor; SLA y KPI; documentación accesible y explicable | Borrador del anexo 11, 7.2 a 7.4 | Leído en el documento |
| Contrato: tiempos de respuesta, auditorías, apoyo en inspecciones, estrategia de salida, versiones nuevas que se puedan probar antes | Borrador del anexo 11, 7.5 iii, iv, v, viii, ix | Leído en el documento |
| Control de cambios en todas las fases, también en la retirada | PI 011-3, nota 30 | Leído en el documento |
| La migración incluye datos brutos y metadatos | Borrador del anexo 11, glosario «Migration» | Leído en el documento |
| La migración comprueba que no cambian ni el valor ni el significado | Anexo 11 (2011), 4.8 | Leído en el documento |
| Migración con un proceso validado | Borrador del anexo 11, 10.3 | Leído en el documento |
| Archivo: comprobar accesibilidad, legibilidad e integridad | Anexo 11 (2011), 17 | Leído en el documento |
| Verificación, por ejemplo con una suma de comprobación, antes de borrar | Borrador del anexo 11, 17.2 | Leído en el documento |
| Al retirar un sistema, asegurar que los datos archivados se siguen leyendo y conservar el software necesario | PI 041-1, página 51 | Leído en el documento |
| API con fecha de reanálisis: al menos 3 años desde la distribución completa | ICH Q7, 6.13 | Leído en el documento |
| Control de puertos USB y desactivarlos en los equipos críticos | Borrador del anexo 11, 15.15 a 15.17 | Leído en el documento |
| Estado de los borradores y fechas de la consulta | Página de EudraLex y página de la consulta | Leído en las páginas oficiales el 21/11/2026 |

## Anexo 22 (borrador)

| Afirmación | Apartado | Cómo se comprobó |
|---|---|---|
| Alcance: usos críticos con impacto directo, para predecir o clasificar; modelos de aprendizaje automático que aprenden de datos | 1 | Leído en el documento |
| Solo modelos estáticos y deterministas; los dinámicos y los probabilísticos no se usan en usos críticos | 1 | Leído en el documento |
| La IA generativa y los LLM quedan fuera y no se usan en usos críticos; en los no críticos, una persona formada responde (*human-in-the-loop*) | 1 | Leído en el documento |
| Si el modelo se probó menos porque aconseja a una persona: se vigilan su formación y su rendimiento y se guardan registros | 3.3 y 10.5 | Leído en el documento |
| Un experto del proceso describe el uso previsto y los datos de entrada antes de las pruebas | 3.1 | Leído en el documento |
| Criterios de aceptación al menos tan buenos como el proceso que se sustituye | 4.3 | Leído en el documento |
| Datos de prueba representativos, en número suficiente y bien etiquetados; no se recomienda generarlos con IA generativa | 5.1 a 5.3 y 5.6 | Leído en el documento |
| Datos independientes, con control de acceso y audit trail; trabajo en pareja si alguien vio los datos de prueba | 6.1, 6.2 y 6.5 | Leído en el documento |
| Rasgos que llevaron a cada decisión; SHAP, LIME y mapas de calor | 8.1 | Leído en el documento |
| Puntuación de confianza y umbral; «indeciso» cuando la confianza es muy baja | 9.1 y 9.2 | Leído en el documento |
| Control de cambios y de configuración, detección de cambios no autorizados, vigilancia del rendimiento (ejemplo de la iluminación) y de la deriva de los datos de entrada | 10.1 a 10.4 | Leído en el documento |

## Cálculos (`src_oper/calc.py`, recalculados con python)

| Cálculo | Resultado |
|---|---|
| Parche publicado el 10/11/2026 más 14 días | 24/11/2026 |
| MES-FX: 14/03/2026 más 12 meses; límite con 30 días | 14/03/2027; 13/04/2027 |
| CAL-Q: 30/09/2024 más 24 meses; límite con 30 días; días hasta el 21/11/2026 | 30/09/2026; 30/10/2026; 52 días y 22 días |
| HIS-P: 15/06/2024 más 36 meses; límite con 30 días | 15/06/2027; 15/07/2027 |
| RTO: 02:10 más 4 h; vuelta a las 05:25 | Límite a las 06:10; caída de 195 min (3 h 15 min); margen de 45 min |
| IA: (96 + 1078) / 1200 | 97,83 %, que se redondea a 97,8 % (1078 = 1100 − 22) |

## Valores de ejemplo declarados en el texto

Todos los códigos (MES-FX, CAL-Q, HIS-P, SD-510, CF-230, CC-26-118, KZ-31-207), las frecuencias de 12, 24 y 36 meses, el margen de 30 días, el plazo de 14 días para el parche, el RTO de 4 h, las horas de la caída, los números de la prueba del modelo de IA (1200 fotos, 96, 22) y la confianza de 0,62 frente a un umbral de 0,90.

## Convenciones y decisiones de la empresa marcadas como tales en el texto

- La diferencia entre incidencia y problema es una convención habitual de los departamentos de informática. Ningún texto GMP leído la define, y así se dice en la lección.
- Las evaluaciones de riesgo preaprobadas para parches del mismo tipo las decide cada empresa; ningún texto leído las fija.
- El bloqueo automático de un equipo cuya configuración no coincide con la línea base es una medida posible de la empresa. Ningún texto obliga a bloquear; los borradores solo piden detectar los cambios no aprobados (anexo 11, 14.2) y los no autorizados (anexo 22, 10.2).
- «Deriva de configuración» (*configuration drift*) se usa como analogía informática, no como término GMP.

## Lo que quedó fuera por no poder verificarlo

- Frecuencias de revisión periódica «típicas» por riesgo (la lección corta dice «cada 1–3 años»). No aparecen en ningún texto leído, así que se presentan como valores de ejemplo.
- Plazos reales de instalación de parches críticos (en días): no los da ningún texto leído.
- El término RPO (*Recovery Point Objective*): no figura en el borrador del anexo 11 ni en el resto de documentos leídos. Se explica la idea sin darle nombre.
- Definiciones de sensibilidad, especificidad y puntuación F1 (el anexo 22 solo las nombra en 4.1). Solo se usa la proporción de aciertos.
- GAMP 5 (categorías, gestión de configuración y de incidencias, revisión periódica): es de pago. Tampoco se usó ITIL.
- La guía CSA de la FDA (2025/2026): no se usó, porque la trata otra lección del nivel.
