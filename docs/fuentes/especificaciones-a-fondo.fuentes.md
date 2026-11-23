# Fuentes: «Especificaciones a fondo: qué tiene que cumplir un lote» (especificaciones-a-fondo)

Documentos leídos de verdad en esta sesión (texto completo con pdftotext; copias en scratchpad/src_espec/):

- **ICH Q6A**, versión Step 4 de 6 de octubre de 1999 (copia de scratchpad/dl/q6a.pdf, descargada antes de database.ich.org). Leídos 1.2, 1.3, 2.1, 2.2, 2.3, 2.4, 2.5, 2.8, 3.1.1, 3.1.2, 3.2.1, 3.3.1, glosario; árbol de decisión 1 leído como imagen (página 21 del PDF, renderizada con pdftoppm).
- **ICH Q3A(R2)**, https://database.ich.org/sites/default/files/Q3A%28R2%29%20Guideline.pdf. Apartados 3.1, 4, 5, 6, 7, glosario, anexos 1 y 2.
- **ICH Q3C(R8)** (copia de scratchpad/dl/q3c8.pdf). Tabla 2 (metanol 3000 ppm, tolueno 890 ppm), clase 3 (50 mg/día = 5000 ppm o 0,5 % con la opción 1; etanol en la clase 3), apartado 3.4.
- **ICH Q7** (https://database.ich.org/sites/default/files/Q7%20Guideline.pdf, copia scratchpad/dl/q7.pdf). Apartados 2.22, 6.17, 6.40, 6.41, 7.12, 7.14, 7.30, 7.31, 8.20, 8.30-8.36, 8.41, 11.12, 11.13, 11.20, 11.61, 13.11-13.16, 14.40-14.43; glosario (Acceptance criteria, In-Process Control, Retest Date, Specification).
- **ICH Q11** (Step 4 de 1 de mayo de 2012), https://database.ich.org/sites/default/files/Q11%20Guideline.pdf. Apartados 5.2.1, 6.1.2 y tabla del ejemplo 5b.
- **ICH Q1A(R2)** (Step 4 de 6 de febrero de 2003; copia scratchpad/src_estab/q1a.txt). Apartados 2.1.5, 2.2.5 (shelf life vs release acceptance criteria) y glosario («Specification – Release», «Specification – Shelf life»).
- **EudraLex vol. 4, parte I, capítulo 4 (Documentación)**, https://health.ec.europa.eu/system/files/2016-11/chapter4_01-2011_en_0.pdf. Apartados 4.13 a 4.16.
- **FDA, ORA Laboratory Manual Vol. III, Section 4 «Basic Statistics and Data Presentation»**, MAN-000048 rev. 03, 7 de octubre de 2022, https://www.fda.gov/media/73535/download. Apartados 2.2 (desviación típica con N−1), 3.1 (redondeo), 3.2 (cifras significativas), 7.2 (resumen de la USP sobre redondeo y límites, tabla de ejemplos).
- Lecciones de la app leídas para no repetir y enlazar: src/content/nivel10.ts entera (las cinco lecciones cortas), src/content/nivel3-impurezas.ts (impurezas-a-fondo), cabeceras y apartado Q3C de nivel3-disolventes.ts, títulos de nivel16-cambios, nivel17-recepcion, nivel5-muestreo y del resto de lecciones «a fondo» del scratchpad; apartado de redondeo de lecciones/matematicas-a-fondo.ts y el comienzo de aspecto-y-solubilidad-a-fondo.ts (para no repetir descripción e identificación).

| Afirmación o dato | Fuente | Cómo se comprobó |
|---|---|---|
| Especificación = lista de ensayos, referencias a procedimientos analíticos y criterios de aceptación (límites numéricos, intervalos u otros criterios) | ICH Q6A 1.2, 3.1.1 y glosario; ICH Q7 glosario | Leído |
| Criterio de aceptación = límites numéricos, intervalos u otras medidas adecuadas para aceptar resultados | ICH Q6A glosario; ICH Q7 glosario | Leído |
| «Conformance to specifications»: analizado con los procedimientos listados, cumple los criterios listados | ICH Q6A 3.1.1 | Leído |
| Normas de calidad críticas propuestas y justificadas por el fabricante y aprobadas por las autoridades | ICH Q6A 3.1.1 | Leído |
| La especificación es solo una parte de la estrategia de control (caracterización, GMP, proceso y métodos validados, materias primas, IPC, estabilidad) | ICH Q6A 1.2 | Leído |
| La redacta la unidad organizativa adecuada y la revisa y aprueba la unidad de calidad; coherente con el registro; puede haber especificaciones adicionales; científicamente sólida | ICH Q7 11.12 | Leído |
| Aprobar todas las especificaciones es responsabilidad no delegable de la unidad de calidad | ICH Q7 2.22 punto 5 | Leído |
| Especificación del API incluye control de impurezas orgánicas, inorgánicas y disolventes residuales | ICH Q7 11.13 | Leído |
| Ensayos universales: descripción, identificación, riqueza, impurezas, con su contenido (IR; un solo tiempo de retención no es específico; dos cromatografías o HPLC/DAD, HPLC/MS aceptables; riqueza específica e indicadora de estabilidad, a menudo el mismo HPLC; valoración combinada con ensayo de impurezas) | ICH Q6A 3.2.1 a)-d) y glosario «Universal test» | Leído |
| Métodos indicadores de estabilidad validados en estudios de estabilidad | ICH Q1A(R2) 2.1.5 | Leído |
| Ensayos específicos: propiedades fisicoquímicas (pH, punto de fusión, índice de refracción), tamaño de partícula, polimorfos, quirales (el otro enantiómero como impureza), agua (KF preferido, a veces LOD), inorgánicas (catalizadores; cenizas sulfatadas según farmacopea), microbianos (aerobios, hongos y levaduras, ausencia de E. coli, Salmonella...; endotoxinas para inyectables) | ICH Q6A 3.3.1 a)-g) | Leído |
| Los ensayos específicos se incluyen caso por caso cuando influyen en la calidad para el control del lote | ICH Q6A 3.3 | Leído |
| Justificación de cada procedimiento y criterio: datos de desarrollo, farmacopea, lotes de toxicología y clínicos, estabilidad acelerada y largo plazo, variabilidad analítica y de fabricación | ICH Q6A 3.1.2 | Leído |
| Criterios no superiores al nivel justificado por seguridad, coherentes con el proceso y la capacidad analítica; sin problema de seguridad, basados en lotes del proceso comercial con margen | ICH Q3A 6 | Leído |
| Impureza cualificada al nivel presente en lotes de estudios de seguridad o clínicos | ICH Q3A 7 | Leído |
| Usar procedimientos de farmacopea cuando sean adecuados | ICH Q6A 2.8 | Leído |
| No fijar criterios que abarquen ajustadamente los datos de los lotes al presentar el expediente; revisar con la experiencia, apretando o aflojando | ICH Q6A 3.2.1 d) y 2.5 | Leído |
| Árbol de decisión 1: lotes relevantes (desarrollo, piloto, escalado); A = media + límite superior de confianza; definición: límite superior de confianza = tres veces la desviación típica de los datos de lotes; si es producto de degradación, B = A + aumento hasta la fecha de reanálisis; si A o B > nivel cualificado, criterio = nivel cualificado o nuevo nivel cualificado | ICH Q6A anexo, árbol 1 (imagen) | Leído en la imagen renderizada |
| Desviación típica de muestra con N−1 | FDA ORA Lab Manual III-04, 2.2 | Leído |
| Cuenta 1: media 0,07; s = 0,01414; 3s = 0,0424; A = 0,1124 (0,11); B = 0,1424 (0,14) | Cálculo (python, statistics.stdev) | Recalculado |
| Datos de la impureza VR-B, aumento 0,03 % y nivel cualificado 0,20 % | Valor de ejemplo declarado | — |
| Especificación de liberación (medicamento, en el momento de liberar) y de vida útil (principio activo durante el periodo de reanálisis; medicamento durante su vida útil) | ICH Q1A(R2) glosario | Leído |
| Criterios distintos de liberación y vida útil solo para medicamentos; ejemplos riqueza y productos de degradación; en la UE obligatorio tener ambas si son distintas | ICH Q6A 2.2 | Leído |
| Lo habitual en API es fecha de reanálisis, no de caducidad; definición de fecha de reanálisis | ICH Q7 11.61 y glosario | Leído |
| Cuenta 2: 99,0 − 3 × 0,3 = 98,1; 98,4 − 0,9 = 97,5 | Cálculo; datos valor de ejemplo declarado | Recalculado |
| Definición de control en proceso | ICH Q7 glosario | Leído |
| IPC: criterios desde desarrollo o históricos; en la instrucción maestra; más flojos al principio y más estrictos en aislamiento y purificación; críticos aprobados por calidad; producción ajusta dentro de límites aprobados; no suele hacer falta OOS en IPC de vigilancia o ajuste | ICH Q7 8.30-8.36 y 6.41 | Leído |
| Ensayos solo para ajustar el proceso no entran en la especificación; IPC con criterio igual o más estricto puede satisfacer la especificación si se valida que no cambia hasta el producto final | ICH Q6A 2.3 | Leído |
| Ejemplo: etanol NMT 5000 ppm controlado con LOD ≤ 0,40 % en el secado, correlacionado con el análisis del principio activo | ICH Q11, tabla 5b | Leído |
| Ensayos periódicos (skip testing): lotes elegidos o intervalos, los no analizados deben cumplir, aprobación previa de la autoridad, ejemplos disolventes residuales y microbiología | ICH Q6A 2.1 | Leído |
| Redondeo: retener una cifra extra y redondear al final; menor que 5 se quita, 5 o más sube uno | FDA ORA Lab Manual III-04, 3.1 | Leído |
| Mismos decimales que el límite; límites incluyen extremos; se aplica después de redondear; ejemplos 102,03 a 102,0 cumple, 102,05 a 102,1 no; 94,95 a 95,0 cumple, 94,94 a 94,9 no | FDA ORA Lab Manual III-04, 7.2 (resume la USP) | Leído |
| Cuenta 3 y 4: 97,96→98,0; 97,94→97,9; 102,04→102,0; 102,05→102,1; 0,154→0,15; 0,155→0,16 | Cálculo (python, Decimal ROUND_HALF_UP) | Recalculado |
| Impurezas: dos decimales por debajo de 1,0 %, uno desde 1,0 %; redondeo convencional | ICH Q3A 5 | Leído |
| Impurezas totales = suma de las que superan el umbral de notificación; notificación 0,05 % para dosis ≤ 2 g/día | ICH Q3A 5 y anexo 1 | Leído |
| Cuenta 5: 0,12 + 0,07 + 0,06 = 0,25 | Cálculo; datos valor de ejemplo | Recalculado |
| Corrección a sustancia anhidra: valor × 100 / (100 − agua %) | Cálculo (proporción: se refiere el resultado a la masa sin agua); la expresión «sobre sustancia seca/anhidra» ya está en nivel10.ts | Deducido y recalculado (98,6 → 99,395 → 99,4) |
| Especificaciones para materias primas, intermedios cuando sea necesario, API, envase y etiquetado; criterios para IPC | ICH Q7 6.17 | Leído |
| Compra contra especificación acordada, proveedor aprobado por calidad | ICH Q7 7.12 | Leído |
| Al menos un ensayo de identidad por lote; CoA del proveedor en lugar de otros ensayos con sistema de evaluación; análisis completos de al menos tres lotes antes de reducir | ICH Q7 7.30, 7.31 | Leído |
| Cambiar de proveedor de materia prima crítica: control de cambios | ICH Q7 7.14 | Leído |
| Especificaciones de productos intermedios para etapas críticas o si se compran o envían | EudraLex vol. 4 parte I cap. 4, 4.15 | Leído |
| Analizar cada lote de intermedio y API frente a su especificación | ICH Q7 11.20 | Leído |
| Recuperación de materiales y disolventes: procedimientos aprobados, recuperación controlada, cumplir especificación antes de reutilizar o mezclar, mezclas de nuevo y recuperado con ensayos, documentar el uso | ICH Q7 14.40-14.43 | Leído |
| Cambios de especificación tras la autorización pueden necesitar aprobación previa | ICH Q6A 3.1.1 | Leído |
| Control de cambios para especificaciones y métodos; aprobación de calidad; evaluación de impacto, revisión de documentos, evaluación de primeros lotes, efecto en fecha de reanálisis | ICH Q7 13.11-13.16 | Leído |
| No mezclar lotes OOS para cumplir | ICH Q7 8.41 | Leído |
| Límites de metanol (3000 ppm) y tolueno (890 ppm), clase 2, opción 1 | ICH Q3C(R8) tabla 2 | Leído |
| Etanol clase 3; 50 mg/día o menos equivale a 5000 ppm o 0,5 % con la opción 1 | ICH Q3C(R8) tabla 3 y apartado de clase 3 | Leído |
| Impureza no especificada ≤ 0,10 % = umbral de identificación para dosis ≤ 2 g/día | ICH Q3A 6 y anexo 1 | Leído |
| Resto de la especificación ficticia VR-260 (descripción, riqueza 98,0–102,0, VR-A 0,15, totales 0,50, agua 0,5 %, cenizas 0,1 %, paladio 10 ppm, d90 100 µm, aerobios 1000 UFC/g, E. coli ausencia en 1 g, frecuencia 1 de 10, métodos MA-260) | Valor de ejemplo declarado en el texto | — |
| Ejemplo de planta (IPC 0,52 → 0,31 %; riqueza 98,6 % con agua 0,3 % = 98,9 % anhidra; VR-B 0,13 %; metanol 2100 ppm; esperas 9 h y 3 h) | Valores de ejemplo; 98,6 × 100 / 99,7 = 98,897 → 98,9 recalculado | Recalculado |
| Preguntas numéricas: 0,05 + 3 × 0,007 = 0,071 → 0,07; 98,9 × 100 / 98,8 = 100,10 → 100,1; 0,38 × 10000 = 3800; 0,09 + 0,11 + 0,06 = 0,26; 99,2 − 0,5 = 98,7 | Cálculo | Recalculado con python |

## Solo como fragmento de buscador (no usado para cifras)
- FAQ de la EDQM (faq.edqm.eu) y anexo de redondeo de la guía OMCL de la EDQM: redondear al número de cifras indicado antes de comparar con el límite. No se pudo leer (host no accesible); no se usó en el texto: la regla del texto sale del manual de la FDA, leído.

## Querido incluir y dejado fuera por no poder verificarlo
- Los límites microbianos oficiales de la Farmacopea Europea (5.1.4) y de la USP para principios activos: de pago; en la tabla van como valores de ejemplo.
- El límite oficial de paladio según ICH Q3D (no se leyó la guía en esta sesión): en la tabla va 10 ppm como valor de ejemplo, sin atribuirlo a Q3D.
- Las reglas de redondeo de la Farmacopea Europea (Advertencias generales): de pago; solo se usa la versión del manual de la FDA.
- La norma ASTM E29 (método absoluto frente a método de redondeo): de pago, no citada.
- Los árboles de decisión 3, 4 y 6 de Q6A (tamaño de partícula, polimorfos, microbiología): no se leyeron sus imágenes; no se detallan.
- Requisitos concretos de la normativa europea de variaciones (tipos IA, IB, II) para cambiar una especificación: no leída; solo se cita la frase general de Q6A 3.1.1.
