# Fuentes: alcoa-a-fondo

Documentos leídos (texto completo, copias en `scratchpad/src_alcoa/`):

- **FDA 2018**: *Data Integrity and Compliance With Drug CGMP. Questions and Answers. Guidance for Industry*, diciembre de 2018. https://www.fda.gov/media/119267/download (copia local `fdadi.txt`, reutilizada de `src_mes/dl`).
- **PIC/S PI 041-1**: *Good Practices for Data Management and Integrity in Regulated GMP/GDP Environments*, 1 de julio de 2021. picscheme.org (copia local `pics041.txt`).
- **OMS TRS 1033 anexo 4**: *Guideline on data integrity*, 2021. https://cdn.who.int/media/docs/default-source/medicines/norms-and-standards/guidelines/inspections/trs1033-annex4-guideline-on-data-integrity.pdf (descargado: `who1033.pdf`, `who1033.txt`).
- **ICH Q7**: https://database.ich.org/sites/default/files/Q7%20Guideline.pdf (copia local `q7.txt`), apartados 5.43, 5.45, 6.13 a 6.16.
- **Carta de advertencia FDA 320-25-67** (16/04/2025, fabricante de API): https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/mentha-allied-products-private-ltd-700242-04162025 (descargada y leída).
- **Carta de advertencia FDA 320-25-49** (28/02/2025, fabricante de intermedios): https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/shree-jaya-laboratories-pvt-ltd-698690-02282025 (descargada y leída).

En la lección no se nombra a ninguna empresa (regla del proyecto), aunque los nombres sí figuran en las cartas.

| Dato o afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| Definición de integridad de datos de la FDA: completitud, coherencia y exactitud; datos atribuibles, legibles, registrados en el momento, originales o copia verdadera, y exactos (ALCOA) | FDA 2018, pregunta 1a | Leído en el documento |
| Definición PIC/S: grado en que los datos son completos, coherentes, exactos, fiables y dignos de confianza durante todo el ciclo de vida | PIC/S PI 041-1, glosario «Data Integrity» | Leído |
| Ciclo de vida del dato: de la generación a la destrucción | PIC/S, glosario «Data Lifecycle»; OMS, glosario | Leído |
| OMS: los datos deben ser ALCOA+ (los nueve atributos) | OMS TRS 1033 an. 4, 1.2 y glosario «ALCOA+» | Leído |
| FDA observa cada vez más incumplimientos de integridad; cartas de advertencia, alertas de importación, *consent decrees* | FDA 2018, apartado II Background | Leído |
| Causas posibles enumeradas por la OMS (prácticas humanas, procedimientos, recursos, sistemas, control del flujo de datos, revisión de originales) | OMS, 1.1 | Leído |
| Caso 1: hojas de lote rotas, formularios sin control en envasado, hoja a medio rellenar en un cajón abierto, hoja abierta tras la primera etapa, datos copiados desde hojas sueltas no conservadas | Carta 320-25-67 | Leído |
| Caso 1: datos del CDS archivados en un segundo disco del mismo ordenador en vez de en la nube; disco dañado; datos de febrero a septiembre de 2024 posiblemente afectados | Carta 320-25-67 | Leído |
| Caso 2: hojas originales rotas en la chatarra, segundo juego de hojas, hojas en QA durante la fabricación, tareas anotadas después por un supervisor que vigilaba cinco salas | Carta 320-25-49 | Leído |
| Fraude o falsificación = deficiencia crítica; usar trozos de papel para transcribir después = ejemplo de deficiencia mayor | PIC/S 11.2.2 y 11.2.4 | Leído |
| Los fallos de integridad no se limitan al fraude; pueden ser involuntarios | PIC/S 6.1.6 | Leído |
| Definición de cada uno de los nueve atributos (atribuible, legible, contemporáneo, original, exacto, completo, coherente, duradero, disponible) | PIC/S 7.5, tabla | Leído; resumido en español |
| La OMS solo define la sigla en su glosario y explica atributos con ejemplos 5, 6, 7, 9 y 11 del apéndice 1 | OMS, glosario y apéndice 1 | Leído |
| Atribuible: iniciales, firma o sello personal controlado en papel; usuario único en electrónico | OMS, ejemplo 6 | Leído |
| Cuentas compartidas: no se puede identificar a una persona | FDA 2018, pregunta 5 | Leído |
| Registro de firmas e iniciales | PIC/S 8.6 (punto 4); OMS 10.4 | Leído |
| No usar comillas («ditto marks») para repetir datos | PIC/S 8.6 (punto 1) | Leído |
| Riesgo de datos legibles solo con la aplicación o versión original | OMS, ejemplo 5 | Leído |
| Contemporáneo: ni antes ni después | OMS, ejemplo 7 | Leído |
| Sistema que guarda tras cada entrada equivale a anotar a tinta en el momento | FDA 2018, pregunta 12 | Leído |
| Original: primera captura; lo dinámico sigue disponible dinámico | PIC/S 7.5 | Leído |
| No es aceptable anotar en papeles que se tiran tras transcribir | FDA 2018, pregunta 12 | Leído |
| Exacto: cualificación, calibración, validación, procedimientos, desviaciones, formación | PIC/S 7.5 | Leído |
| Comprobación adicional de datos críticos tecleados a mano (segundo operador o el sistema) | ICH Q7 5.45; OMS ejemplo 11 | Leído |
| Completo: incluye metadatos | PIC/S 7.5 | Leído |
| Casillas en blanco anuladas, fechadas y firmadas | PIC/S 8.6 (punto 1) | Leído (la lección usa «N/A», como la lección corta; la PIC/S dice «crossed-out») |
| Todos los datos, incluidos errores evidentes y resultados que fallan o son sospechosos, deben estar en el registro | FDA 2018, pregunta 13 | Leído |
| Coherente: orden cronológico, formatos de fecha, unidades, redondeo, cifras significativas | PIC/S 7.5 | Leído |
| Formato de fecha definido por la planta (ej. dd/mm/yyyy) | PIC/S 8.6 (punto 1) | Leído |
| Exactitud de la hora del sistema, sincronización, restringir el cambio de fecha y hora; fuente oficial de hora cerca del puesto | OMS 4.15 | Leído |
| Duradero: tinta indeleble; no tintas sensibles al calor, a la luz ni borrables | OMS 10.2 | Leído |
| Papel térmico se borra; hacer copias verdaderas indelebles, firmadas y fechadas | PIC/S 8.6 (punto 3) | Leído |
| Copias de seguridad restauradas y verificadas periódicamente | OMS 11.19 | Leído |
| Disponible: consultable durante el periodo de conservación por quien deba revisarlo (liberación, investigaciones, tendencias, auditorías, inspecciones) | PIC/S 7.5 | Leído |
| Datos no guardados en otras carpetas | OMS, ejemplo 4 | Leído |
| Dato bruto = registro original, primera captura | OMS y PIC/S, glosario «Raw data» | Leído |
| Metadatos: contexto; «23» sin «mg» no significa nada; fecha y hora, usuario, equipo, estado del material, audit trail; conservarlos con el dato | FDA 2018, pregunta 1b | Leído |
| Los metadatos forman parte integral del registro original | PIC/S, glosario «Metadata» | Leído |
| Analogía de la fila de base de datos y su historial | Elaboración propia (analogía didáctica) | No es dato técnico |
| Estático y dinámico; ejemplos del cromatograma reprocesable y la hoja de cálculo con fórmulas | FDA 2018, pregunta 1d; PIC/S y OMS, glosario | Leído |
| Ticket de balanza o pHmetro sin memoria: original estático, firmado, fechado, adjunto | PIC/S 8.9.1; FDA pregunta 10 | Leído |
| Espectro FT-IR dinámico: la impresión no basta | FDA 2018, pregunta 10 | Leído |
| Definición de copia verdadera | OMS, glosario «Certified true copy or true copy» | Leído |
| Cómo hacer una copia verdadera en papel y en electrónico; PDF prohibido si se pierden metadatos | PIC/S 7.7 (tabla) | Leído |
| Buenas prácticas en papel: hojas sueltas controladas, sin lápiz ni goma, raya única con persona, fecha y motivo (equivalente al audit trail), sin corrector, cuadernos paginados, formularios numerados y conciliados, registro de firmas | OMS 10.4 | Leído |
| Prohibir papeles temporales; formularios con identificador, emitidos y conciliados | PIC/S 8.4 | Leído |
| Corrección: una raya, motivo cuando proceda, iniciales y fecha, original legible | PIC/S 8.7 | Leído |
| Cuadernos encuadernados, paginados y sellados; formularios controlados por la unidad de calidad u otro método; juegos numerados conciliados; formularios incompletos o erróneos se conservan con la justificación | FDA 2018, pregunta 6 | Leído |
| ICH Q7 6.14: indeleble, espacio previsto, justo después, identificar a quien anota; correcciones fechadas y firmadas con original legible | ICH Q7 6.14 | Leído |
| Escribiente: excepcional, por procedimiento, contemporáneo, identifica a ambos, contrafirma posterior | PIC/S nota 8; OMS ejemplo 7 (cita a la MHRA) | Leído (el texto de la MHRA, solo a través de la cita de la OMS) |
| Las anotaciones las hace quien ejecuta la tarea | PIC/S 8.6 (punto 1) | Leído |
| Registro disponible en el punto de uso | PIC/S 8.6 (punto 2) | Leído |
| Cultura de calidad abierta | PIC/S 6.3.1 | Leído |
| Culturas abiertas y cerradas; más supervisión en las cerradas | PIC/S 6.1.3 y 6.1.4 | Leído |
| Presión indebida, incentivos de productividad, autojustificación | PIC/S 6.1.6 | Leído |
| Canal confidencial sin consecuencias | PIC/S 6.2.6 | Leído |
| Expectativas realistas y recursos | PIC/S 6.3.3 y 6.6.1 | Leído |
| La dirección favorece informar abiertamente de desviaciones, errores y omisiones | OMS 4.5 | Leído |
| Sin apoyo de la dirección a la cultura de calidad, los sistemas se vienen abajo | FDA 2018, introducción | Leído |
| 3:00 a 6:40 = 220 min | Cálculo (3 × 60 + 40) | Recalculado con python |
| Tolerancia de 5 minutos para anotar | Valor de ejemplo declarado (procedimiento ficticio) | No sale de ninguna norma |
| 22:30 a 6:00 cada 30 min, ambos extremos = 16 anotaciones | Cálculo (450 / 30 + 1) | Recalculado con python |
| 14:10 a 14:13 = 3 min; margen 5 − 3 = 2 min | Cálculo con valor de ejemplo | Recalculado |
| 181,04 − 181,0 = 0,04 kg = 40 g | Cálculo | Recalculado |
| Límites 179,0 a 181,0 kg, códigos SD-305, BA-07, RT-58, lote RT-26-118, emisión 0412, horas del caso de planta | Valores de ejemplo (ficticios) | — |

## Lo que quise incluir y dejé fuera

- **Guía de la MHRA** *GxP Data Integrity Guidance and Definitions* (marzo de 2018): el PDF está en assets.publishing.service.gov.uk, que da error de red en esta sesión (bloqueado por el proxy). No se ha leído; no se cita ninguna definición directamente de ella. Solo se usa el párrafo del escribiente que la OMS reproduce entre comillas.
- **Origen histórico de la sigla ALCOA** (quién la acuñó y cuándo): no verificado en fuente oficial; fuera.
- **EudraLex parte I, capítulo 4** (apartado 4.9 sobre el motivo de la corrección): no lo he releído en esta sesión; no se cita (la lección sobre la hoja de producción ya lo trata).
- **Borradores de 2025 del Anexo 11 y del capítulo 4**: no se mencionan; los trata la lección sobre las normas.
- **Cifras de número de cartas de advertencia por año**: no encontradas en documento oficial leído; fuera.
- **Plazos concretos para anotar** (minutos aceptables): ninguna guía leída da un número; solo se usa un valor de ejemplo declarado.
