# Fuentes de `planta-a-fondo`

Documentos descargados y leídos (texto en `lecciones/src_planta/`):

- ICH Q7, *Good Manufacturing Practice Guide for Active Pharmaceutical Ingredients* (10 de noviembre de 2000): https://database.ich.org/sites/default/files/Q7%20Guideline.pdf (`q7.txt`). Leídos: 1.1 a 1.3 y tabla 1, capítulo 2 entero, capítulo 3 (3.1 y 3.2), 4.1, 4.20, 4.4, capítulo 6 (6.1 a 6.7), 7.2, 7.3 (7.30), 8.1 a 8.5, 9.4, 10.1, 10.2 y el glosario (capítulo 20).
- EudraLex, volumen 4, parte I, capítulo 4 *Documentation* (revisión 1, en vigor desde el 30 de junio de 2011): https://health.ec.europa.eu/system/files/2016-11/chapter4_01-2011_en_0.pdf (`ch4.txt`). Leídos: principio y 4.7 a 4.9.
- Índice de EudraLex volumen 4: https://health.ec.europa.eu/medicinal-products/eudralex/eudralex-volume-4_en (`v4.html`). Leído el título de la parte II: «Basic requirements for active substances used as starting materials (August 2014)».
- Ley 31/1995, de 8 de noviembre, de Prevención de Riesgos Laborales, texto consolidado: https://www.boe.es/buscar/act.php?id=BOE-A-1995-24292 (`lprl.txt`). Leídos: artículos 14, 18, 19, 21 y 29.
- Repositorio: `src/content/index.ts` (títulos de los 22 niveles) y títulos de lecciones en `src/content/nivel*.ts` (comprobados uno a uno con un script: todos los títulos citados entre «» existen).

| Dato o afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| ICH Q7 es la guía GMP para principios activos | ICH Q7, 1.1 | Leído |
| Definición de principio activo (API, *drug substance*) | ICH Q7, glosario (20) | Leído |
| Definición de medicamento: forma farmacéutica en su envase final destinada a venderse | ICH Q7, glosario, «Drug (Medicinal) Product» | Leído |
| Cadena proveedores, planta de API, planta de medicamento, distribución y farmacia | Descripción general didáctica, sin cifra ni norma | No es una afirmación normativa; no se cita norma |
| Las exigencias GMP aumentan de las primeras etapas a la purificación y el envasado; la molienda y micronización, como mínimo con las exigencias de la guía | ICH Q7, 1.3 y tabla 1 | Leído |
| Definición de material de partida del API | ICH Q7, glosario y 1.3 | Leído |
| La guía se aplica desde la entrada del material de partida | ICH Q7, 1.3 («From this point on...» y «does not apply to steps prior...») | Leído |
| Definiciones de intermedio, lote, número de lote, procedimiento, especificación, cuarentena, desviación, control en proceso, aguas madres | ICH Q7, glosario | Leído |
| «Hoja de producción» no está en el glosario; la describe 6.5; se prepara para cada lote y se comprueba antes de entregarla | ICH Q7, 6.50 | Leído (se buscó en el glosario: no hay entrada «batch record») |
| «Liberación» no tiene definición en el glosario; 2.17 y 2.22 | ICH Q7, 2.17 y 2.22 | Leído (se buscó en el glosario: no hay entrada «release») |
| Registros de uso, limpieza y mantenimiento de equipos principales: fecha, producto, lote, quién limpió | ICH Q7, 6.20 | Leído |
| Estado de los equipos principales indicado en el equipo, en documentos o en el sistema de control | ICH Q7, 8.16 | Leído |
| Flujo de materiales y personas para evitar confusiones y contaminaciones | ICH Q7, 4.13 | Leído |
| Zonas definidas para recepción, cuarentena, rechazado, aprobado, producción, envasado, laboratorio | ICH Q7, 4.14 | Leído |
| Almacenes separados para cuarentena, rechazado, devuelto o retirado salvo sistema alternativo | ICH Q7, 10.11 | Leído |
| Precauciones al manejar el API ya purificado | ICH Q7, 8.52 | Leído |
| Laboratorio normalmente separado; controles en proceso pueden estar en producción con condiciones | ICH Q7, 4.16 | Leído |
| Servicios que afectan a la calidad: cualificados y vigilados | ICH Q7, 4.20 | Leído |
| Comer, beber, fumar fuera de fabricación; aseos separados pero accesibles | ICH Q7, 3.23 y 4.15 | Leído |
| La calidad es responsabilidad de todas las personas de fabricación | ICH Q7, 2.10 | Leído |
| Pesadas críticas con testigo o control equivalente | ICH Q7, 8.12 | Leído |
| Firmas de quien hace y de quien supervisa o comprueba cada paso crítico | ICH Q7, 6.52 | Leído |
| Responsabilidades de producción | ICH Q7, 2.3 | Leído |
| Unidad de calidad independiente con funciones de QA y QC; uno o varios grupos | ICH Q7, 2.13 y glosario «Quality Unit(s)» | Leído |
| Quince responsabilidades no delegables; las citadas como ejemplo (1, 3, 4, 5, 6, 9) | ICH Q7, 2.22 | Leído |
| Instrucción maestra firmada por quien la prepara y revisada por la unidad de calidad | ICH Q7, 6.40 | Leído |
| Hoja de lote numerada, fechada y firmada al entregarla | ICH Q7, 6.51 | Leído |
| Personas autorizadas a liberar designadas | ICH Q7, 2.14 | Leído |
| Turno de 6:00 a 14:00 y sus horas, equipos y sucesos | Valor de ejemplo declarado | Declarado en el texto |
| Formación y cualificación: 3.10, 3.11, 3.12 | ICH Q7, 3.1 | Leído |
| Higiene: 3.20 a 3.24 | ICH Q7, 3.2 | Leído |
| «Lo que no está escrito no se ha hecho» no es cita de ninguna norma | Declarado en el texto como dicho habitual | No se atribuye a ninguna norma |
| Registrar en el momento | ICH Q7, 2.15 | Leído |
| Tinta indeleble, espacio previsto, justo después, quién anota; correcciones con fecha y firma, original legible | ICH Q7, 6.14 | Leído |
| Documentos según procedimientos, en papel o electrónico; control de versiones | ICH Q7, 6.10 y 6.11 | Leído |
| Contenido de cada paso importante de la hoja | ICH Q7, 6.52 | Leído (resumido) |
| Conservación: un año tras caducidad; tres años tras distribución completa si hay fecha de reanálisis | ICH Q7, 6.13 | Leído |
| EudraLex capítulo 4: registrar en el momento (4.8); correcciones firmadas y fechadas dejando leer lo original (4.9) | EudraLex vol. 4, parte I, cap. 4 | Leído |
| La parte II de EudraLex vol. 4 trata de los principios activos | Índice de EudraLex vol. 4 | Leído el título; el PDF de la parte II devolvió una página de comprobación y no se pudo leer |
| ALCOA como idea (quién, legible, en el momento, original, exacto) | Remite a la lección «ALCOA+: datos en los que se puede confiar» del repositorio | No se cita norma nueva |
| ICH Q7 no cubre seguridad del personal ni medio ambiente; los rige la ley nacional | ICH Q7, 1.1 | Leído |
| Derecho a protección eficaz y lo que incluye | Ley 31/1995, art. 14.1 | Leído |
| Formación teórica y práctica, al contratar y con cambios, centrada en el puesto, sin coste | Ley 31/1995, art. 19.1 y 19.2 | Leído |
| Información directa sobre riesgos del puesto | Ley 31/1995, art. 18.1 | Leído |
| Obligaciones del trabajador, seis puntos | Ley 31/1995, art. 29.1 y 29.2 | Leído (resumido) |
| Incumplimiento laboral | Ley 31/1995, art. 29.3 | Leído |
| Derecho a interrumpir la actividad y abandonar el lugar ante riesgo grave e inminente | Ley 31/1995, art. 21.2 | Leído |
| Sin perjuicio salvo mala fe o negligencia grave | Ley 31/1995, art. 21.4 | Leído |
| Títulos y números de los 22 niveles | `src/content/index.ts` | Leído |
| Doce etapas del recorrido (pregunta 1) | Cálculo: recuento de las filas de la tabla | Recalculado |
| Rendimiento global 0,85 × 0,90 = 0,765 = 76,5 % (pregunta 2) | Cálculo; rendimientos de ejemplo | Recalculado con python |
| Producto PX-27, lote PX27-26-014, equipos R-102, FL-103, CR-104, CF-202, SD-302, MO-501, material PX-A, personaje Álex | Valores de ejemplo declarados, ficticios | Declarado en el texto |

## Lo que quedó fuera por no poder verificarlo

- Que el texto de la parte II de EudraLex vol. 4 sea idéntico a ICH Q7: no pude abrir el PDF (devolvió una página de comprobación del navegador), así que no lo afirmo; solo digo que la parte II existe y trata de los principios activos.
- El RD 1215/1997 y el RD 1644/2008: no hicieron falta; no se citan.
- Cifras de cuántos medicamentos o principios activos se fabrican en España o en Europa, o qué parte se importa: sin fuente leída.
- Detalles legales de la distribución de medicamentos (almacenes mayoristas, buenas prácticas de distribución): no leídos; la cadena se describe de forma general, sin citar norma.
- Duraciones reales de turnos o de etapas: dependen de cada empresa; solo se usan horas de ejemplo.
