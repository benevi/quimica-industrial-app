# Fuentes de «liberacion-de-lotes-a-fondo» (nivel 10)

Copias locales y texto extraído en `scratchpad/src_coa/` (q7.txt, q7qa.txt, a16.txt, p2.txt). Cálculos en `src_coa/calc.py`.

## Documentos leídos

| Abreviatura | Documento | URL |
|---|---|---|
| Q7 | ICH Q7, Good Manufacturing Practice Guide for Active Pharmaceutical Ingredients (2000) | https://database.ich.org/sites/default/files/Q7%20Guideline.pdf |
| Q7 Q&A | ICH Q7 Questions and Answers, versión del 10 de junio de 2015 | https://database.ich.org/sites/default/files/Q7_Q%26As_Q%26As.pdf |
| A16 | EudraLex vol. 4, anexo 16 «Certification by a Qualified Person and Batch Release» (2015, en vigor desde el 15/04/2016) | https://health.ec.europa.eu/system/files/2016-11/v4_an16_201510_en_0.pdf |
| P2 | EudraLex vol. 4, parte II «Basic Requirements for Active Substances used as Starting Materials» (2014) | https://health.ec.europa.eu/document/download/bd537ccf-9271-4230-bca1-2d8cb655fd83_en?filename=2014-08_gmp_part1.pdf (el nombre de archivo dice «part1», pero el contenido es la parte II) |
| Q3C | ICH Q3C(R8), Impurities: Guideline for Residual Solvents | Copia local descargada antes en esta sesión de database.ich.org (`scratchpad/dl/q3c8.txt`); leída. La versión vigente es R9 y no se pudo descargar (la URL probada devolvió HTML) |

## Afirmación por afirmación

| Afirmación del texto | Fuente | Cómo se comprobó |
|---|---|---|
| La revisión del lote está en 6.70 a 6.73; las responsabilidades no delegables, en 2.22 | Q7 6.7 y 2.22 | Leído |
| Cuarentena: materiales aislados físicamente o por otros medios eficaces hasta decidir aprobación o rechazo | Q7, glosario «Quarantine» | Leído |
| Nada se libera ni se usa antes de que calidad termine su evaluación, salvo sistemas adecuados (p. ej. 10.20) | Q7 2.17 | Leído |
| Solo se distribuye a terceros tras liberar; traslado en cuarentena a otra unidad bajo control de la empresa con autorización y controles | Q7 10.20 | Leído |
| El traslado en cuarentena es movimiento físico, no liberación; transporte y análisis en paralelo; ejemplo de ensayos microbiológicos largos; no se usa hasta completar análisis y revisión | Q7 Q&A 10.1 | Leído |
| Liberar o rechazar todos los API es responsabilidad no delegable (punto 1) | Q7 2.22 | Leído |
| El sistema de calidad puede permitir a otros departamentos liberar materias primas e intermedios (no los que salen fuera), con supervisión de calidad | Q7 Q&A 2.3 | Leído |
| En la parte II europea la lista de responsabilidades es 2.32 porque se añade 2.2 Quality Risk Management | P2, índice y apartados 2.20 a 2.32 | Leído |
| Para cada lote de intermedio y API, ensayos adecuados para comprobar la especificación | Q7 11.20 | Leído |
| Q7 no dice quién muestrea; calidad revisa y aprueba los planes de muestreo; personal formado; se documenta según 6.52 | Q7 Q&A 2.4; Q7 11.12 y 6.52 | Leído |
| La especificación incluye control de impurezas orgánicas, inorgánicas y disolventes residuales | Q7 11.13 | Leído |
| Perfil de impurezas de un lote típico; comparación periódica con el registrado o el histórico para detectar cambios de materias primas, parámetros o proceso | Q7 11.21 y 11.22 | Leído |
| Todo OOS se investiga y documenta según procedimiento | Q7 11.15 | Leído |
| Contenido de los registros de laboratorio (muestra, método, cantidad, patrones, datos brutos, cálculos, comparación, firma, segunda persona) | Q7 6.60 | Leído (resumido) |
| Calidad revisa registros de etapas críticas antes de liberar; las no críticas, personal cualificado de producción | Q7 6.71 | Leído |
| Desviaciones, investigaciones y OOS se revisan dentro de la revisión del lote | Q7 6.72 | Leído |
| Contenido de cada paso de la hoja (fechas y horas, equipos, lotes y pesos, parámetros críticos, muestreos, firmas, IPC, rendimiento, envase y etiqueta, desviaciones, resultados de liberación) | Q7 6.52 | Leído |
| Correcciones con fecha y firma, dato original legible | Q7 6.14 | Leído |
| Toda desviación se documenta y explica; las críticas se investigan | Q7 8.15 | Leído |
| Tabla «Errores que retrasan una liberación» | Ejemplos didácticos declarados en el texto, apoyados en Q7 6.52, 6.72, 8.15 | Elaboración propia; no es lista oficial |
| Unidad de calidad independiente con funciones QA y QC; personas autorizadas designadas | Q7 2.13 y 2.14 | Leído |
| «Independiente»: evitar conflicto de intereses; quien decide la liberación no tiene responsabilidades de producción | Q7 Q&A 2.1 | Leído |
| Producción revisa sus hojas y que estén completas y firmadas | Q7 2.3, punto 3 | Leído |
| Contenido del certificado de análisis (auténtico, por lote, a petición; nombre y grado, lote, fecha de liberación; caducidad en etiqueta y CoA; reanálisis en etiqueta y/o CoA; ensayos, límites, resultados numéricos; fecha y firma de calidad; fabricante original con dirección y teléfono; reenvasadores y agentes) | Q7 11.40 a 11.44 | Leído |
| Límite de tolueno 890 ppm | Q3C(R8), tabla de clase 2 (PDE 8,9 mg/día; 890 ppm) | Leído en la copia local R8 |
| Límite de etanol 5000 ppm | Q3C(R8): etanol clase 3; 50 mg/día o menos, que corresponde a 5000 ppm o 0,5 % por la opción 1 | Leído en la copia local R8 |
| Resto de límites y resultados del certificado ficticio (contenido, impurezas, agua, cenizas, tamaño de partícula) | Valor de ejemplo declarado (coinciden con los de la lección corta «Especificaciones y métodos analíticos» de la app) | — |
| Fecha de fabricación y referencia a la especificación no las exige Q7 | Q7 11.41 a 11.43 (no aparecen) | Leído |
| Certificados de proveedores: 7.30 a 7.32 ya en la lección de recepción | Q7 7.30 a 7.32 | Leído en la lección de la app; no se repite el contenido |
| Fabricante original = instalación donde se produce el API o intermedio final purificado; secado, micronizado, molienda, tamizado no cambian eso | Q7 Q&A 17.4 | Leído |
| El certificado del proveedor no tiene por qué coincidir con las especificaciones del usuario | Q7 Q&A 7.3 | Leído |
| Rechazo: identificar y cuarentena; puede reprocesarse o retrabajarse; se registra el destino final | Q7 14.10 | Leído |
| Reprocesado = repetir un paso del proceso establecido (cristalización, etc.) | Q7 14.20 | Leído |
| Continuar un paso tras un IPC que dice que no ha terminado no es reprocesar | Q7 14.21 | Leído |
| Retrabajo: investigar antes la causa; evaluación y prueba de equivalencia | Q7 14.30 y 14.31 | Leído |
| Muestra de reserva: evaluación futura, no estabilidad; plazos; envase; dos análisis completos | Q7 11.70 a 11.72 | Leído |
| La reserva se guarda el tiempo que el API puede estar en el mercado; ejemplo de reanálisis a 5 años | Q7 Q&A 11.4 | Leído |
| Envase más protector porque la reserva representa el lote original (p. ej. falsificaciones), no su envejecimiento en el mercado | Q7 Q&A 11.5 | Leído |
| Anexo 16: certificación por QP y liberación de medicamentos con autorización de comercialización o para exportación | A16, «Scope» | Leído |
| Cada lote de producto terminado lo certifica una QP en la UE antes de venta, suministro o exportación | A16 1.1 | Leído |
| La QP asegura que los principios activos se fabricaron según GMP | A16 1.7.7 | Leído |
| Auditorías de los sitios que fabrican el principio activo hechas y disponibles para la QP | A16 1.7.3 | Leído |
| La directiva (art. 46 f de 2001/83/CE) obliga a usar solo principios activos fabricados según GMP | P2, apartado 1 «Introduction» | Leído en P2 (la directiva en sí no se leyó: eur-lex no es accesible) |
| En la parte II no aparece la QP | P2, búsqueda de «qualified person» en todo el texto: sin resultados | Comprobado con grep |
| 16/11/2026 es lunes; 27/11/2026 es viernes; 02/12/2026 es miércoles | Cálculo | Recalculado con python |
| 16/11/2026 + 24 meses = 16/11/2028; + 36 meses = 16/11/2029 | Cálculo (periodo y punto de partida: valores de ejemplo) | Recalculado |
| 20/05/2027 + 3 años = 20/05/2030 | Cálculo + Q7 11.71 | Recalculado |
| Caducidad 30/06/2029 + 1 año = 30/06/2030; distribución 15/09/2027 + 3 años = 15/09/2030; el mayor es 15/09/2030 | Cálculo + Q7 11.71 | Recalculado |
| 1 + 2 + 1 + 1 + 2 + 5 = 12 g; × 2 = 24 g; 0,030 / 300 × 100 = 0,01 % | Cálculo; cantidades por ensayo y redondeo a 30 g: valores de ejemplo | Recalculado |
| 16/11 a 27/11 = 11 días; 16/11 a 02/12 = 16 días | Cálculo | Recalculado |
| Producto TVX-210, lote T26-118, secadero SD-305, empresa «Química Ejemplo, S. L.», 12 bidones, corte de vacío de 25 min | Valores de ejemplo, ficticios | — |

## Lo que quedó solo como fragmento de buscador

- Existencia de la plantilla de la EMA «QP declaration concerning GMP compliance of active substance manufacture» (EMA/196292/2014 y EMA/334808/2014) y su recomendación de auditar normalmente cada tres años. El PDF no se pudo descargar (la web de la EMA devolvió una página de comprobación en JavaScript). No se usa en el texto.
- Que Q3C(R9) sea la versión vigente (fragmento de la EMA y de Health Canada). Los límites de tolueno y etanol se tomaron de R8, que sí se leyó.

## Lo que se dejó fuera por no poder verificarlo

- La declaración de la QP del fabricante del medicamento sobre el fabricante del principio activo («QP declaration»): solo vista en el buscador.
- El texto literal de los artículos 46, 46 b, 51 y 52 bis de la Directiva 2001/83/CE (eur-lex no accesible); solo se cita lo que reproducen el anexo 16 y la parte II.
- Plazos típicos de liberación en la industria (días o semanas): no hay fuente gratuita fiable; los días del texto son valores de ejemplo.
- Colores de las etiquetas de estado: no los fija ninguna norma leída; el texto dice que los fija cada empresa.
- Contenido del certificado de lote del medicamento (apéndice II del anexo 16): no aplica al API y no se incluyó.
