# Fuentes de la lección `lims-a-fondo`

Documentos descargados con curl el 21 de noviembre de 2026 y convertidos con `pdftotext -layout` (copias en `src_lims/`), o copiados de descargas oficiales del mismo día para otras lecciones y releídos aquí:

- **EudraLex vol. 4, anexo 11** (2011): https://health.ec.europa.eu/system/files/2016-11/annex11_01-2011_en_0.pdf (`a11.txt`). Leído entero; citados 4.3, 4.7, 4.8, 5, 6.
- **Borrador de revisión del anexo 11** (consulta de 2025): https://health.ec.europa.eu/document/download/40231f18-e564-4043-94de-c031f813d38b_en?filename=mp_vol4_chap4_annex11_consultation_guideline_en.pdf (`a11d.txt`). Leídos 10.1 a 10.4.
- **ICH Q7**: https://database.ich.org/sites/default/files/Q7%20Guideline.pdf (`q7.txt`). Leídos 2.22, 5.3, 5.4 enteros, 6.60, 11.1 entero.
- **PIC/S PI 041-1** (1 de julio de 2021): https://picscheme.org/docview/4234 (`pics041.txt`). Leídos 8.8, 9.4, 9.6, 9.7, 9.8 y 9.10.
- **FDA, Data Integrity and Compliance With Drug CGMP, Questions and Answers** (diciembre de 2018): https://www.fda.gov/media/119267/download (`fdadi.txt`). Leídas las preguntas 1.d, 3, 7, 8, 12 y 13.
- **FDA, Investigating OOS Test Results for Pharmaceutical Production, revisión 1** (mayo de 2022), copia descargada de www.fda.gov para `especificaciones-a-fondo` (`src_lims/fdaoos.txt`). Leído el apartado de promedios (averaging), usos apropiados e inapropiados.
- **FDA, ORA Laboratory Manual vol. III, sección 4** (MAN-000048 rev. 03, 7 de octubre de 2022), https://www.fda.gov/media/73535/download, copia de `especificaciones-a-fondo` (`src_lims/ora.txt`). Leídos 3.1 y 7.2.
- **OMS, informe técnico 1052, anexo 4** (2024), «WHO good practices for pharmaceutical quality control laboratories», copia descargada para `custodia-a-fondo` (`src_lims/trs1052a4.txt`). Leídos 3.25, 3.30 a 3.36, 5.26, 5.36, 5.40, 5.55, 6.13, 6.33, 6.51 a 6.56.
- **Simulador SAP de la app**: `src/sap/engine.ts` (tipo de inspección 04, stock «calidad», QE51N, QA11, A/R) y `src/content/nivel19.ts` («SAP en la planta»).
- Lecciones de la app leídas para no repetir: `nivel19.ts`, `nivel10-liberacion.ts`, `nivel5-custodia.ts`, `nivel18.ts`, `nivel18-mapa.ts`, `nivel18-maestros.ts` (apartados de interfaces), `nivel20.ts` (audit trail, usuarios), cabeceras de `nivel13-sistema.ts`, `nivel7-cromatografia.ts` y `nivel7-hplc.ts` (CDS, integración), `nivel10-especificaciones.ts` (fórmula anhidra).

## Afirmaciones normativas

| Afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| Sistema de gestión de datos que asegure trazabilidad, en papel o software, ejemplo LIMS | OMS TRS 1052 an. 4, 3.25 | Leído en el documento |
| Validación del sistema de información, procedimiento de uso del LIMS con accesos y copias; cambios de configuración autorizados, documentados y validados antes de aplicarlos; audit trail activado y revisado | OMS TRS 1052 an. 4, 3.30, 3.32, 3.34 | Leído en el documento |
| La hoja de trabajo analítica (muestra, método, reactivos, patrones, cálculos, resultados) puede ser un sistema electrónico como el LIMS | OMS TRS 1052 an. 4, 6.33 | Leído en el documento |
| Especificaciones redactadas por la unidad correspondiente y aprobadas por la unidad de calidad | ICH Q7, 11.12 | Leído en el documento |
| Etiqueta con número de registro único en cada envase de muestra, sin tapar otras marcas | OMS TRS 1052 an. 4, 6.13 | Leído en el documento |
| Número de réplicas y límite de variabilidad entre réplicas en el método escrito; si no se cumple, los resultados no se usan; «reportable result» = resultado final de una ejecución completa del método | FDA OOS 2022, apartado de promedios y nota 12 | Leído en el documento |
| Guardar una cifra de más y redondear al final; menor que 5 se quita, 5 o más sube; comparar con el límite después de redondear; mismos decimales que el límite | FDA ORA Lab Manual III-04, 3.1 y 7.2 | Leído en el documento |
| Sistemas GMP validados según diversidad, complejidad y criticidad | ICH Q7, 5.40 | Leído |
| Registro de laboratorio con todos los cálculos (unidades, factores de conversión y equivalencia) y firma de segunda persona que revisa los originales | ICH Q7, 6.60 | Leído |
| Pruebas de validación: límites de parámetros, de datos y tratamiento de errores | Anexo 11, 4.7 | Leído |
| Cada flujo GMP se valida para su uso previsto; cualificar la plataforma MES no demuestra que los cálculos de una receta sean correctos | FDA DI 2018, pregunta 3 | Leído |
| Revisores comprueban entradas y cálculos críticos; la revisión secundaria verifica los cálculos y mira los datos originales para confirmar que se transcribió lo correcto | PIC/S PI 041-1, 8.8 | Leído |
| Registro cromatográfico dinámico: se puede cambiar la línea base y reprocesar | FDA DI 2018, 1.d | Leído (en el texto solo se remite a las lecciones de cromatografía) |
| Integraciones manuales y reprocesados aprobados y controlados; datos originales conservados en su contexto; cambios revisados por al menos una persona formada | PIC/S PI 041-1, 9.7 punto 2 | Leído |
| Texto del apartado 5 (comprobaciones integradas en intercambio electrónico) | Anexo 11, 5 | Leído; traducción casi literal |
| Texto del apartado 6 (dato crítico manual: comprobación adicional por segundo operador o medio electrónico validado; criticidad por gestión de riesgos) | Anexo 11, 6 | Leído; traducción casi literal |
| Dato crítico manual: comprobación adicional por segunda persona o por el sistema | ICH Q7, 5.45 | Leído |
| Entrada manual: personas autorizadas, registro de quién y cuándo, formato controlado, verificación por segundo operador o medio validado, cambios revisados por persona independiente; captura automática: interfaz validada, formato no manipulable, comprobación de integridad de datos y metadatos | PIC/S PI 041-1, 9.7 punto 1 | Leído |
| Sistemas híbridos: controles y segundas comprobaciones en la transcripción manual; dato original conservado | PIC/S PI 041-1, 9.10 | Leído |
| No vale apuntar en papeles que se tiran tras transcribir; ejemplo de LIMS o EBR que guarda tras cada entrada combinado con procedimiento | FDA DI 2018, pregunta 12 | Leído |
| Borrador anexo 11, 10.2: transferencia de datos críticos por interfaces validadas y no por transcripción, ejemplo «from a laboratory instrument to a LIMS system» | Borrador anexo 11 (2025), 10.2 | Leído |
| A 21/11/2026 no consta versión definitiva; manda el de 2011 | Búsqueda web (resultados: página de consulta de la Comisión, blogs que la esperan «a partir de 2026»); misma conclusión que `datos-maestros-a-fondo` | Fragmento de buscador; no hay anuncio oficial de adopción encontrado |
| Firma de segunda persona; resultados revisados y aprobados o rechazados por personal designado y cualificado | ICH Q7, 6.60; OMS TRS 1052 an. 4, 6.56 | Leído |
| Todos los datos, incluidos errores y resultados que no cumplen, forman parte del registro; «testing into compliance» no es aceptable | FDA DI 2018, pregunta 13 | Leído |
| Audit trail: quién, qué (valor anterior y nuevo), cuándo, por qué y quién autorizó el cambio; reconstruir el curso de los hechos; no tapar valores previos | PIC/S PI 041-1, 9.6 | Leído |
| Revisión del audit trail como parte de la revisión rutinaria, antes de una decisión crítica como la liberación; variaciones significativas investigadas | PIC/S PI 041-1, 9.8 | Leído |
| Reactivos etiquetados según procedimiento con fecha «use by» | ICH Q7, 11.16 | Leído |
| Datos de la etiqueta del reactivo pueden estar en un registro o LIMS | OMS TRS 1052 an. 4, 5.55 | Leído |
| Patrones primarios: origen y uso documentados; secundarios cualificados frente a primario antes del primer uso | ICH Q7, 11.17 a 11.19 | Leído |
| Estado de calibración conocido y verificable; no usar instrumentos que no cumplen | ICH Q7, 5.33 y 5.34 | Leído |
| Equipo defectuoso fuera de servicio y marcado | OMS TRS 1052 an. 4, 5.40 | Leído |
| Descripción de sistemas críticos con flujos de datos e interfaces | Anexo 11, 4.3 | Leído |
| Migración o transferencia: el dato no cambia de valor ni de significado | Anexo 11, 4.8 | Leído |
| Liberar o rechazar APIs: responsabilidad no delegable de la unidad de calidad | ICH Q7, 2.22 punto 1 | Leído |
| Movimiento 101, tipo de inspección 04, lote de inspección, stock en control de calidad, QE51N, QA11 A/R | `src/sap/engine.ts` y `nivel19.ts` de la app | Leído en el código de la app (nombres del simulador) |

## Cálculos (valores de ejemplo declarados en el texto)

Recalculado con `src_lims/calc/calc.py` (redondeo «half up» con `decimal`):

| Cuenta | Resultado |
|---|---|
| 99,17 − 98,91 | 0,26 |
| (98,91 + 99,17) / 2; (0,45 + 0,47) / 2 | 99,04; 0,46 |
| 99,04 × 100 / 99,54 | 99,4977 → 99,498 → 99,5 |
| 99,04 × 100 / 95,4 (agua tecleada 4,6) | 103,816 → 103,8 |
| 99,04 × 99,54 / 100 (fórmula invertida) | 98,584 → 98,6 |
| Plant: (99,05 + 99,33) / 2; × 100 / 99,62 | 99,19; 99,568 → 99,57 → 99,6 |
| Quiz: (99,26 + 99,48) / 2 | 99,37 |
| Quiz: 98,80 × 100 / 99,40 | 99,396 → 99,4 |
| Quiz: 98,80 × 100 / 94,0 | 105,106 → 105,1 |
| Quiz: 99,40 − 98,75 | 0,65 |

La fórmula de corrección a sustancia anhidra (valor × 100 / (100 − agua %)) es la de `especificaciones-a-fondo` (proporción, recalculada).

## Valores de ejemplo y descripciones genéricas

- Nombres de tablas, nombres de estados (prevista, registrada, introducido, revisado, aprobado, anulado), plantilla de especificación con métodos KF-02 y HP-11, criterio de 0,50 puntos entre réplicas, límites (98,0–102,0 %, ≤ 0,5 %, ≤ 0,15 %), audit trail de ejemplo, LIMS-QC1, M26-004512, INT-58, C-311, S-315, KF-03, lote 26-0458: todo inventado y declarado como ejemplo.
- Las dos variantes de paso LIMS-ERP (interfaz o registro en QE51N) se presentan como posibilidades, remitiendo a la descripción del sistema de cada planta; no se afirma cómo lo hace ningún producto concreto.
- Que un LIMS «puede» configurarse para bloquear reactivos caducados o equipos con calibración vencida se da como idea de diseño, no como requisito normativo.

## Lo que quedó fuera por no poder verificarlo

- Tasas de error de transcripción manual (cifras por cada mil entradas): no encontradas en fuente gratuita leída.
- Funciones concretas de productos LIMS comerciales y de la integración estándar SAP QM-LIMS (interfaces certificadas, nombres de mensajes): no se consultó help.sap.com ni documentación de fabricantes; no se citan.
- GAMP 5 (categorías de software para LIMS y plantillas configuradas): de pago (ISPE); no citado.
- Reglas de redondeo de la Farmacopea Europea y la USP en su texto original: de pago o no accesibles; se usa el resumen del manual de la FDA.
- Plazos típicos de análisis o de liberación en el LIMS: no verificables; no se dan.
