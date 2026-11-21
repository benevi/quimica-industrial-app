# Fuentes: oos-a-fondo

Documentos descargados con curl y leídos con pdftotext (copias en `scratchpad/src_oos/`):

- FDA: «Investigating Out-of-Specification (OOS) Test Results for Pharmaceutical Production», Guidance for Industry, mayo de 2022, revisión 1. https://www.fda.gov/media/158416/download (`fda.txt`, leída entera).
- ICH Q7, Current Step 4 version, 10 de noviembre de 2000. https://database.ich.org/sites/default/files/Q7%20Guideline.pdf (`q7b.txt`).
- EudraLex vol. 4, parte I, capítulo 6 «Quality Control», entrada en vigor 1 de octubre de 2014. https://health.ec.europa.eu/document/download/c74c8720-27bf-4252-808f-d65a206a90bb_en?filename=2014-11_vol4_chapter_6.pdf (`ch6.txt`).
- OMS, TRS 1052 (2024), anexo 4 «WHO good practices for pharmaceutical quality control laboratories». https://cdn.who.int/media/docs/default-source/medicines/norms-and-standards/guidelines/quality-control/trs1052_annex4.pdf (`w.txt`).
- ICH Q9(R1), Step 4, 2022. https://database.ich.org/sites/default/files/ICH_Q9%28R1%29_Guideline_Step4_2022_1219.pdf (`q9.txt`).
- Página de EudraLex vol. 4: https://health.ec.europa.eu/medicinal-products/eudralex/eudralex-volume-4_en (`v4.html`).
- Página de la MHRA: https://www.gov.uk/government/publications/out-of-specification-investigations (`mhra.html`; el documento enlazado, un .pptx en assets.publishing.service.gov.uk, no se pudo descargar: host bloqueado).

| Dato o afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| Guía FDA OOS: mayo de 2022, revisión 1, recomendaciones no vinculantes («should» = recomendado) | FDA, portada e introducción | Leído en el documento |
| Definición FDA de OOS: resultados fuera de especificaciones o criterios de aceptación de registros, DMF, farmacopeas o del fabricante; incluye ensayos de laboratorio en proceso | FDA, sección I | Leído |
| La guía no trata los ensayos en proceso hechos solo para ajustar el equipo en tiempo real | FDA, nota 2 | Leído |
| La guía se aplica a principios activos (API) | FDA, sección I y II | Leído |
| Buena parte de la guía sirve para resultados fuera de tendencia | FDA, nota 6 | Leído |
| Investigación completa, a tiempo, imparcial, documentada y científica; distinguir fallo de medida o de fabricación | FDA, sección III | Leído |
| Responsabilidades del analista: instrumentos calibrados, idoneidad del sistema, comparar con especificación antes de tirar preparaciones, guardarlas si son estables, avisar al supervisor, documentar errores evidentes (derrame, transferencia incompleta), no seguir un análisis que se sabe inválido | FDA, III.A | Leído |
| Supervisor objetivo, sin suposiciones previas; los siete pasos de su evaluación | FDA, III.B | Leído (lista traducida y resumida) |
| Reinyección de disoluciones si se sospecha fallo pasajero del instrumento | FDA, III.B, ejemplos | Leído |
| Errores de laboratorio relativamente raros; si son frecuentes apuntan a formación, equipos mal mantenidos o calibrados | FDA, III.B | Leído |
| Prueba clara de error: se invalida; si no está claro: fase II. No atribuir OOS a error analítico sin investigación que establezca causa en el laboratorio | FDA, III.B y final | Leído |
| Fase II con procedimiento predefinido, dirigida por QU, con fabricación, desarrollo, mantenimiento e ingeniería; máxima prioridad; revisión completa de registros de fabricación y muestreo | FDA, IV y IV.A | Leído |
| Contenido del informe de fase II (cinco puntos) | FDA, IV.A | Leído |
| Rechazar el lote no elimina la investigación; extender a otros lotes o productos | FDA, III y IV.A | Leído |
| OOS puede indicar defecto de diseño del producto o proceso | FDA, IV.A | Leído |
| Retest: porción de la misma muestra homogénea; cuándo está indicado; a menudo otro analista igual de cualificado | FDA, IV.B.1 | Leído |
| «Testing into compliance»: acientífico y objetable; máximo de repeticiones fijado de antemano en SOP; no se ajusta según resultados; punto final y evaluación del lote; lote sospechoso rechazado o retenido | FDA, IV.B.1 | Leído |
| Con error claro, el retest sustituye al original pero se guardan los datos originales con explicación, iniciales y fecha; sin error, no hay base para invalidar; se informan todos los resultados | FDA, IV.B.1 | Leído |
| Resample: unidades adicionales del muestreo original o muestra nueva; muestra original suficientemente grande; pista de mala preparación (alícuotas muy distintas); mismos métodos validados; nuevo método de muestreo aprobado por QU si el original era inadecuado | FDA, IV.B.2 | Leído |
| Usos correctos del promedio (rotación óptica, réplicas de inyección HPLC, normalmente 2 o 3, como un ensayo y un resultado); límites de variabilidad entre réplicas | FDA, IV.C.1.a | Leído |
| Definición de resultado notificable (reportable result) | FDA, nota 12 | Leído |
| Usos incorrectos: esconde variabilidad; uniformidad de mezcla y de contenido; promediar el OOS original con repeticiones | FDA, IV.C.1.b | Leído |
| Ejemplos 89/90/91 y 80/85/105 con promedio 90 % y especificación 90–110 % | FDA, IV.C.1.b | Leído; promedios recalculados (90,0 y 90,0) |
| Promedio de preparaciones requeridas por el método con algunas OOS: tratar el promedio como OOS; inyecciones repetidas del mismo vial que cumplen variabilidad: una sola no hace OOS el resultado | FDA, V.B.1 y V.B.2 | Leído |
| Outlier: valor muy diferente; puede venir de desviación del método o de variabilidad de la muestra; nunca suponer error del ensayo; prueba definida de antemano en SOP; en ensayos químicos validados no sirve para invalidar, solo informativa; no aplicable a uniformidad de contenido, disolución | FDA, IV.C.2 | Leído |
| Conclusión por QU; OOS inicial no implica rechazo; invalidado / confirmado (rechazo y fallo de lote extendido) / no concluyente (plena consideración) | FDA, V.A | Leído |
| Ejemplo de liberación posible: 90,0–110,0 %, 89,5 % y siete repeticiones 99,0; 98,9; 99,0; 99,1; 98,8; 99,1; 99,0 | FDA, V.A | Leído (en el texto se resume como «entre 98,8 y 99,1 %»: mínimo 98,8 y máximo 99,1, comprobado) |
| QU debe pecar de prudente | FDA, V.A | Leído («err on the side of caution») |
| Resultado bajo dentro de especificación debe preocupar; riqueza baja puede caer bajo el límite antes de caducidad | FDA, V.B.3 y nota 19 | Leído |
| Una vez rechazado el lote, no hay límite a más ensayos para encontrar la causa | FDA, V | Leído |
| OMS: OOS sospechoso y OOS confirmado; definición de OOT | OMS TRS 1052, anexo 4, glosario | Leído |
| ICH Q7 11.15 (investigar y documentar según procedimiento; análisis de datos, valorar problema importante, acciones correctoras, conclusiones; retest/resample según procedimiento) | ICH Q7 | Leído |
| ICH Q7 6.61 (registros completos de investigaciones OOS) | ICH Q7 | Leído |
| ICH Q7 6.72 (informes de desviación, investigación y OOS revisados antes de liberar) | ICH Q7 | Leído |
| ICH Q7 8.36 (controles para vigilar o ajustar el proceso: normalmente sin investigación OOS) | ICH Q7 | Leído |
| ICH Q7 8.41 (no mezclar lotes OOS para cumplir) | ICH Q7 | Leído |
| ICH Q7 2.50 (revisión anual: lotes que no cumplieron, adecuación de acciones correctoras) | ICH Q7 | Leído |
| ICH Q7 11.50 (programa continuo de estabilidad de API para confirmar condiciones y fecha de re-análisis) | ICH Q7 | Leído |
| ICH Q7 14.20 (reproceso), 14.30 y 14.31 (retrabajo) | ICH Q7 | Leído |
| EudraLex cap. 6, 6.7 (iv) procedimiento para OOS y OOT; 6.9 datos para tendencias, investigar OOT y OOS; 6.16 tendencia de parámetros críticos | EudraLex cap. 6 | Leído |
| EudraLex cap. 6, 6.35: investigar OOS o tendencias atípicas importantes; OOS confirmado o tendencia negativa importante en lotes en el mercado se comunica a autoridades; impacto según capítulo 8 | EudraLex cap. 6 | Leído |
| El capítulo 6 (parte I) es para medicamentos; la parte II es para sustancias activas | Página EudraLex vol. 4 | Leído («Part II – Basic Requirements for Active Substances used as Starting Materials») |
| Capítulo 8 trata de reclamaciones y retiradas | Página EudraLex vol. 4 | Leído («Chapter 8 - Complaints and Product Recall») |
| ICH Q9(R1) anexo I.9 cita los gráficos de control, entre ellos el de Shewhart | ICH Q9(R1) | Leído |
| Límites de control habituales a tres desviaciones estándar de la media | Fragmentos de buscador (documentación de SAS y JMP, manual NIST/SEMATECH); ninguno descargable desde la sesión | Solo fragmento de buscador. En el texto se presenta como «lo habitual» y se remite al procedimiento de la planta; no se usa para ninguna cifra normativa |
| Cuenta de la media y la desviación estándar (99,70 %; suma de cuadrados 0,30; 0,30 / 9 = 0,0333; s ≈ 0,18 %; límites 99,16 y 100,24 %) | Cálculo con valores de ejemplo declarados | Recalculado con Python (statistics.stdev = 0,1826, redondeado a 0,18; límites con s redondeada: 99,16 y 100,24) |
| Promedio 97,6 y 98,8 = 98,2 % | Cálculo con valores de ejemplo | Recalculado |
| Pregunta numérica: 99,5 − 3 × 0,2 = 98,9 % | Cálculo con valores de ejemplo | Recalculado |
| Riqueza 98,0–102,0 %, impureza ≤ 0,15 % y demás números de los ejemplos | Valores de ejemplo declarados (coinciden con los ejemplos de la lección corta «Especificaciones y métodos analíticos») | Valor de ejemplo |
| La MHRA organiza su guía en fases Ia, Ib, II y III | Página gov.uk de la MHRA | Leído en el índice de la página; finalmente no se incluyó en el texto por espacio |
| Lista de preguntas del investigador al operador | Buena práctica, declarada así en el texto; se apoya en que la FDA pide revisar por completo los registros de fabricación y de muestreo | Elaboración propia, no normativa |
| Caso de planta (FX-101, lote 0512, R-101, P-104, impureza B que aumenta con la velocidad de adición) | Ficticio | Proceso y química declarados ficticios en el texto |

## Lo que quedó fuera por no poder verificarlo o por espacio

- El contenido detallado de la guía de la MHRA (fases Ia, Ib, II, III, definiciones): el .pptx está en un host no accesible; solo se leyó el índice de la página.
- Reglas concretas de detección de tendencias (reglas de Western Electric o Nelson, límites de aviso a dos desviaciones estándar, probabilidad de falsa alarma): solo en fragmentos de buscador o en normas ISO 7870 de pago.
- El matiz de la OMS (TRS 1052, 6.77 y 6.78) de que, con error identificado, la repetición la hace el mismo analista y, si no es concluyente, otro analista confirma: leído y verificado, pero recortado del texto por longitud. Se puede añadir si se amplía la lección.
- Los informes de alerta de campo de la FDA (Field Alert Reports, 3 días hábiles): leído, pero es un requisito de Estados Unidos para medicamentos con registro y no aporta a un operador de API en España.
- Pruebas estadísticas concretas de atípicos (Grubbs, Dixon): no se citan; la FDA remite a USP <111>, de pago.
