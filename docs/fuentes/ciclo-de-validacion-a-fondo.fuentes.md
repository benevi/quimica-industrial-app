# Fuentes de «Validar un sistema paso a paso a fondo» (ciclo-de-validacion-a-fondo)

Comprobado el 21 de noviembre de 2026. Temporales y cálculos en `scratchpad/src_ciclo/` (`calc.py`, `dl/`).

## Documentos leídos

- **A11**: EudraLex vol. 4, anexo 11 «Computerised Systems», revisión 1, entrada en vigor 30/06/2011. https://health.ec.europa.eu/document/download/8d305550-dd22-4dad-8463-2ddb4a1345f1_en?filename=annex11_01-2011_en.pdf (copia local `src_accesos/a11.txt`, leído entero).
- **A11D**: borrador del anexo 11 sometido a consulta en 2025. https://health.ec.europa.eu/document/download/40231f18-e564-4043-94de-c031f813d38b_en?filename=mp_vol4_chap4_annex11_consultation_guideline_en.pdf (copia local `src_accesos/a11d.txt`; leídos apartados 6, 9, 10 y glosario).
- **A15**: EudraLex vol. 4, anexo 15 «Qualification and Validation», en vigor 1/10/2015 (copia local `lecciones/src_val/annex15.txt`; leídos principio, general, apartados 1, 2, 3 y 4.1).
- **EUD**: página EudraLex vol. 4, https://health.ec.europa.eu/medicinal-products/eudralex/eudralex-volume-4_en (descargada hoy, `src_ciclo/dl/eud.html`): lista «Annex 11 Computerised Systems (revision January 2011)» y «Annex 15 Qualification and validation (into operation since 1 October 2015)».
- **Q7**: ICH Q7, Step 4, 10/11/2000, https://database.ich.org/sites/default/files/Q7%20Guideline.pdf (copia local `src_mes/dl/q7.txt`; leído 5.4).
- **Q9**: ICH Q9(R1), adoptada 18/01/2023 (copia local `src_oos/q9.txt`; leídos introducción, 4.3, anexo I.2 y I.3, glosario).
- **PI011**: PIC/S PI 011-3, 25/09/2007, «Good practices for computerised systems in regulated GxP environments» (copia local `src_sap/dl/pi011.txt`; leídos 4.6, 4.8, 9, 10, 13, 14 y la lista de pasos del apartado 24).
- **PI041**: PIC/S PI 041-1, 1/07/2021 (copia local `src_mes/dl/pics041.txt`; leído 9.4 «Data transfer and migration»).
- **WHO**: OMS TRS 1033, anexo 4 (copia local `src_alcoa/who1033.txt`; leído 9.6).
- **GPSV**: FDA, «General Principles of Software Validation», 11/01/2002, https://www.fda.gov/media/73141/download (descargado hoy, `src_ciclo/dl/gpsv.txt`; leídos nota preliminar, 5.2.2 y 5.2.5). Escrita para productos sanitarios.
- **CSA**: FDA, «Computer Software Assurance for Production and Quality Management System Software», 3/02/2026, sustituye a la versión del 24/09/2025 (copia local descargada en esta sesión por otra lección, `src_csv/csa2026.txt`; leídas portada y apartado de tipos de prueba y documentación). Escrita para productos sanitarios.
- Lecciones del repo leídas para no repetir: `src/content/nivel21.ts`, `nivel16-validacion.ts`; títulos y encabezados de `nivel18-*`, `nivel19-*`, `nivel20-*`.

## Tabla de afirmaciones

| Afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| ICH Q7 5.40: sistemas GMP validados; profundidad según diversidad, complejidad y criticidad | Q7 5.40 | Leído |
| ICH Q7 5.41: IQ y OQ demuestran idoneidad de hardware y software | Q7 5.41 | Leído |
| Anexo 11 en vigor desde el 30/06/2011; aplicación validada, infraestructura cualificada | A11 portada y principio | Leído |
| A 21/11/2026 EudraLex sigue listando el anexo 11 de 2011 | EUD | Leído en la página descargada hoy |
| Borrador anexo 11 sometido a consulta en julio de 2025 | Fuentes de la lección `normas-integridad-a-fondo` (página de la consulta: 7/07/2025 a 7/10/2025) | Leído por esa lección en esta sesión; no se vuelve a descargar |
| Anexo 15 en vigor desde 1/10/2015; principio remite al anexo 11; para principios activos, orientación complementaria opcional | A15 portada y principio; EUD | Leído |
| Anexo 15 apartado 3 «equipment, facilities, utilities and systems»; URS punto de referencia (3.2) | A15 3 y 3.2 | Leído |
| VMP (1.4), planes separados en proyectos grandes (1.6), personal formado con procedimientos aprobados (1.2) | A15 | Leído |
| El plan define actividades, procedimientos, responsabilidades y evaluaciones de riesgo | PI011 apartado 24, paso 4 | Leído |
| Contenido del plan VP-PES-01 (alcance, responsables, estrategia, entregables, criterios) | Valor de ejemplo declarado | Elaboración propia, coherente con A15 1.5 y PI011 |
| URS: funciones requeridas, basada en riesgo e impacto GMP, trazable en el ciclo de vida | A11 4.4 | Leído |
| URS completa, realista, definitiva y comprobable; catalogada de forma única; sin conflictos; verificable objetivamente por inspección, análisis o prueba | PI011 9.2 y 9.3 | Leído |
| Requisitos expresados en términos medibles u objetivamente verificables | GPSV 5.2.2 | Leído |
| Tabla de requisitos mal y bien escritos | Valor de ejemplo declarado; criterios de PI011 9.3 y GPSV 5.2.2 | Elaboración propia |
| FS a partir de la URS; descripción precisa de funciones, rendimiento e interfaces; URS y FS combinables | PI011 10.1, 10.2, 10.3 | Leído |
| Especificación de configuración controlada | A11D 6.6 (borrador) | Leído |
| Descripción del sistema (física y lógica, flujos de datos, interfaces) para sistemas críticos | A11 4.3 | Leído |
| Extensión de la validación según riesgo documentado (paciente, integridad de datos, calidad) | A11 1 | Leído |
| Riesgo = combinación de probabilidad y gravedad; detectabilidad en algunas herramientas; FMEA como herramienta | Q9 introducción, 4.3, anexo I.2 | Leído |
| Escala G × P × D de 1 a 3 y cortes 12 / 6-11 / 5 | Valor de ejemplo declarado | Elaboración propia; productos recalculados (18, 18, 8, 1, 27, 12) |
| IQ: instalación contra planos y especificaciones, calibración, manuales, materiales (3.9) | A15 3.9 | Leído; aplicación al MES es interpretación declarada en el texto |
| OQ: funcionamiento según diseño, límites superior e inferior, peor caso (3.11) | A15 3.11 | Leído |
| PQ: condiciones normales con el tamaño de lote más desfavorable; rango de operación (3.14) | A15 3.14 | Leído |
| IQ y OQ pueden combinarse (2.5) | A15 2.5 | Leído |
| Límites de parámetros, de datos y gestión de errores; evaluación documentada de herramientas y entornos de prueba automatizados | A11 4.7 | Leído |
| Verificar instalación y configuración antes de cualquier prueba | A11D 9.3 (borrador) | Leído |
| Proveedor redacta guiones contra FS; guiones ligados a la URS son responsabilidad del usuario regulado | PI011 nota 22 | Leído |
| PQ como prueba de aceptación del usuario en su entorno, contra la URS | PI011 4.8 | Leído |
| Definición de caso de prueba (entradas, condiciones, resultados esperados) | A11D glosario (borrador) | Leído |
| Evidencia: guiones ejecutados y, cuando proceda, capturas de pantalla | A11D 9.4 (borrador) | Leído |
| Resultado esperado definido antes, permite evaluar objetivamente el obtenido | GPSV 5.2.5 | Leído |
| Tolerancia 25 kg ± 0,5 % = 0,125 kg; 24,875-25,125 kg; con ± 0,5 kg, 24,5-25,5 kg | Cálculo | Recalculado con python |
| Caso OQ-021 y sus resultados | Valor de ejemplo declarado | Elaboración propia |
| Resultado fuera de criterio = desviación investigada y discutida en el informe | A15 2.8 | Leído |
| Cambio significativo del protocolo en ejecución = desviación justificada científicamente | A15 2.7 | Leído |
| Validación incluye informes de desviaciones | A11 4.2 | Leído |
| Errores registrados, clasificados, revisados y resueltos antes de la puesta en uso | GPSV 5.2.5 | Leído |
| Prueba de regresión | GPSV 5.2.5 (menciona «regression testing») | Leído; definición didáctica propia |
| 60/62 = 96,8 % | Cálculo | Recalculado |
| «Una buena prueba encuentra errores» | GPSV 5.2.5 («A successful test is one that finds an error») | Leído |
| Trazabilidad requisito-especificación-prueba; RTM; caso sin requisito no cuenta | A11D 6.5 y 9.5 (borrador) | Leído |
| 37/40 = 92,5 %; 3 sin probar; 14/14 = 100 % | Cálculo sobre valores de ejemplo | Recalculado |
| Migración: no cambiar valor ni significado | A11 4.8 | Leído |
| Migración controlada, con protocolo y verificación de que es completa | PI041 9.4, expectativa 2 | Leído |
| Las dificultades de migrar se subestiman, sobre todo el significado completo | WHO 9.6 | Leído |
| «Datos» incluye datos brutos y metadatos | A11D glosario «Migration» (borrador) | Leído |
| Sumas de control como método de verificación de transferencia | PI041 9.4, expectativa 1 (checksums) | Leído |
| 12 480 registros, 3112 afectados = 24,9 %; 0,250 frente a 250 = factor 1000 | Cálculo sobre valores de ejemplo | Recalculado |
| Informe: resultados frente a criterios y recomendación final | A15 2.9 | Leído |
| Liberación formal y aprobación condicional con evaluación documentada | A15 2.10 | Leído |
| Aceptación formal y paso controlado a producción | PI011 13.6 | Leído |
| Completar e informar antes del uso; condicional declarada en el informe y seguida | A11D 9.8 (borrador) | Leído |
| CSA: revisada el 3/02/2026; para productos sanitarios; recomienda registros digitales (logs, audit trails) en lugar de capturas | CSA portada y apartado de documentación | Leído |
| Analogía con desarrollo web | Elaboración propia | Didáctica |
| Cálculos del test: 49/52 = 94,2 %; 40 × 1,005 = 40,2 kg; 3 × 2 × 2 = 12; 8386/8400 = 99,83 % (faltan 14); 72/75 = 96 % | Cálculo | Recalculado con python (`src_ciclo/calc.py`) |

## Lo que se dejó fuera por no poder verificarlo

- Categorías de software y nombres de documentos de GAMP 5 (segunda edición): GAMP es de pago. Solo se usan los nombres FS, CS y DS tal como aparecen en PI 011-3 y en el borrador del anexo 11.
- Tamaños de muestra «estándar» para verificar una migración (por ejemplo, tablas de muestreo de normas ISO): no hay fuente gratuita leída; los 200 registros se declaran valor de ejemplo.
- Escalas de puntuación de riesgo «habituales» en la industria (1-5, 1-10) y cortes concretos: no se encontró fuente gratuita que los fije; se declaran valores de ejemplo.
- Frecuencias o plazos concretos para la puesta en marcha y el paralelo papel-electrónico: no se encontró requisito normativo; se dice solo «como fije el plan».
- No se afirma que las capturas de pantalla sean obligatorias: el anexo 11 vigente no las menciona; el borrador las cita «cuando proceda» y la guía CSA (productos sanitarios) prefiere registros digitales.
