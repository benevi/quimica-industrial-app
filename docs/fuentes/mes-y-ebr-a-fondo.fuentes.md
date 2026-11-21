# Fuentes: mes-y-ebr-a-fondo («MES y hoja de producción electrónica a fondo»)

Documentos descargados el 21/11/2026 con curl en `scratchpad/src_mes/dl/` y leídos con pdftotext:

- **A11**: EudraLex vol. 4, anexo 11 «Computerised Systems», revisión de 2011. https://health.ec.europa.eu/system/files/2016-11/annex11_01-2011_en_0.pdf (leído entero).
- **A11-borrador**: borrador de consulta del anexo 11 (2025). https://health.ec.europa.eu/document/download/40231f18-e564-4043-94de-c031f813d38b_en?filename=mp_vol4_chap4_annex11_consultation_guideline_en.pdf (leídos los apartados 8, 10 y 13).
- **EudraLex 4**: https://health.ec.europa.eu/medicinal-products/eudralex/eudralex-volume-4_en (comprobado que figura «Annex 11 Computerised Systems (revision January 2011)»).
- **Part 11**: 21 CFR Part 11, eCFR. https://www.ecfr.gov/api/renderer/v1/content/enhanced/current/title-21?part=11 (leído entero).
- **Q7**: ICH Q7. https://database.ich.org/sites/default/files/Q7%20Guideline.pdf (leídos 5.40 a 5.49, 6.10 a 6.18, 6.70 a 6.73, 7.20, 7.24, 8.11 a 8.17).
- **FDA-DI**: FDA, *Data Integrity and Compliance With Drug CGMP. Questions and Answers*, diciembre de 2018. https://www.fda.gov/media/119267/download (leídos índice, 1.b, 1.c y preguntas 3 a 12).
- **PI 041-1**: PIC/S, *Good Practices for Data Management and Integrity in Regulated GMP/GDP Environments*, 1 de julio de 2021. https://picscheme.org/docview/4234 (leídos 5.6.2 con su nota 4, 8.3, 8.7, 8.8, 9.5, 9.6, 9.7, 9.8, 9.10 y glosario).

| Dato o afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| ICH Q7 admite documentos en papel o electrónicos | Q7 6.10 | Leído en el documento |
| Los sistemas en papel y electrónicos están sometidos a los mismos requisitos | FDA-DI, final de la respuesta 2 (página 6: «paper-based and electronic data record-keeping systems are subject to the same requirements») | Leído en el documento |
| Si un sistema informatizado sustituye a una operación manual, no debe empeorar calidad del producto, control del proceso ni garantía de calidad | A11, Principle | Leído en el documento |
| Comprobaciones del sistema que obliguen a seguir la secuencia permitida de pasos | Part 11, 11.10(f) | Leído en el documento |
| Cualificar la plataforma MES no demuestra que el MPCR montado tenga los cálculos correctos; hay que validar el flujo | FDA-DI, pregunta 3 | Leído en el documento |
| Las pruebas deben considerar límites de parámetros, límites de datos y manejo de errores | A11 4.7 | Leído en el documento |
| Credenciales compartidas prohibidas; cierre de sesión por inactividad | PI 041-1, 9.5 (tabla de seguridad, primer y cuarto guion) | Leído en el documento |
| Limitar acceso a personas autorizadas; comprobaciones de autoridad | Part 11, 11.10(d) y 11.10(g) | Leído en el documento |
| El estado de los equipos principales puede indicarse en el equipo, en documentación o en sistemas informáticos | Q7 8.16 | Leído en el documento |
| Comprobación del dispositivo de origen de los datos (balanza autorizada) | Part 11, 11.10(h) («device (e.g., terminal) checks to determine ... the validity of the source of data input») | Leído en el documento; la aplicación a una balanza es interpretación didáctica, dicha como comportamiento del MES ficticio |
| Banda ±0,5 % sobre 180,0 kg: 0,9 kg; 179,1 a 180,9 kg | Cálculo; tolerancia y cantidades: valor de ejemplo declarado | Recalculado con python |
| Neto 196,4 − 16,0 = 180,4 kg | Cálculo; valores de ejemplo declarados | Recalculado con python |
| Antes de usar un material, producción comprueba que es el que indica la hoja | Q7 8.12 | Leído en el documento |
| Cuarentena hasta que se aprueba para su uso | Q7 7.20 | Leído en el documento |
| Pesadas críticas presenciadas o con control equivalente | Q7 8.12 | Leído en el documento |
| Datos críticos tecleados: comprobación adicional por un segundo operador o por el propio sistema | Q7 5.45; A11 6 | Leído en ambos documentos |
| Captura automática: interfaz validada y comprobación de que el dato llega completo | PI 041-1, 9.7, «For automated data capture» | Leído en el documento |
| Controles que eviten omisiones de datos; registro de cada cambio con entrada anterior, quién y cuándo | Q7 5.43 | Leído en el documento |
| Límite que bloquea y límite que avisa | Descripción del MES ficticio de la lección, no de una norma | Declarado en el texto como diseño que decide la instrucción maestra y su validación |
| Borrador: el sistema debe verificar la plausibilidad de datos críticos tecleados y avisar | A11-borrador 10.1 | Leído en el documento |
| Toda desviación se documenta y se explica | Q7 8.15 | Leído en el documento |
| Calidad revisa y aprueba registros de pasos críticos antes de liberar; desviaciones, investigaciones y OOS se revisan en la revisión del lote | Q7 6.71 y 6.72 | Leído en el documento |
| Definición de informe de excepciones (herramienta de búsqueda validada que identifica datos o acciones anormales definidos de antemano) | PI 041-1, nota 4 de 5.6.2 y glosario «Exception Report» | Leído en el documento |
| Contenido típico del informe de excepciones (lista de cinco puntos) | Ejemplo del EBR ficticio de la lección | Declarado en el texto como del EBR ficticio |
| Revisión por excepción citada como forma de centrar la revisión del registro de auditoría en actividades anómalas o no autorizadas | PI 041-1, 9.6 («Review by exception – focusing on anomalous or unauthoried activities») | Leído en el documento |
| Revisar el registro de auditoría antes de usar datos críticos para una decisión como liberar el lote | PI 041-1, 9.8, «Review of electronic data» | Leído en el documento |
| La revisión del registro de auditoría es similar a revisar tachones en papel | FDA-DI, pregunta 7 | Leído en el documento |
| 240 datos, 6 excepciones, 2,5 % | Cálculo; valores de ejemplo declarados | Recalculado con python |
| Por qué la revisión por excepción acelera la liberación | Razonamiento propio a partir de la definición de PI 041-1; sin cifras de tiempo | No hay fuente con cifras; no se dan |
| Firma: nombre impreso, fecha y hora, significado; visible en pantalla e impresión | Part 11, 11.50(a) y (b) | Leído en el documento |
| Firma unida al registro, no se puede quitar, copiar ni trasladar | Part 11, 11.70 | Leído en el documento |
| Mismo efecto que la manuscrita dentro de la empresa, unida para siempre, con fecha y hora | A11 14 | Leído en el documento |
| Si se cambia un dato tras firmarlo, el registro aparece como no firmado hasta revisarlo y firmarlo de nuevo | PI 041-1, 9.5, punto 4 | Leído en el documento |
| Firma única de una persona, no reutilizable ni reasignable | Part 11, 11.100(a) | Leído en el documento |
| Al menos dos componentes; en sesión continua la primera con todos y las siguientes con al menos uno exclusivo del titular | Part 11, 11.200(a)(1)(i) | Leído en el documento |
| Firmas electrónicas autenticadas y seguras | Q7 6.18 | Leído en el documento |
| Borrador: reautenticación completa al firmar | A11-borrador 13.3 | Leído en el documento |
| Sigue en vigor el anexo 11 de 2011 | Página EudraLex 4 | Leído en la página el 21/11/2026 |
| Continuidad: sistema manual o alternativo, documentado y probado | A11 16 | Leído en el documento |
| Registrar datos por un segundo medio además del ordenador | Q7 5.49 | Leído en el documento |
| Formularios en blanco controlados; juegos numerados conciliados; incompletos o erróneos guardados con justificación | FDA-DI, pregunta 6 | Leído en el documento |
| Datos tecleados al volver el sistema: comprobación adicional | A11 6 | Leído en el documento |
| Conservar los datos originales tras transcribirlos | PI 041-1, 9.10, «Potential risk...» | Leído en el documento |
| Incidencias registradas y evaluadas | A11 13; Q7 5.46 | Leído en ambos documentos |
| Motivo documentado en cambios y borrados de datos GMP | A11 9 | Leído en el documento |
| EBR guardado automáticamente tras cada entrada (no usado en el texto, solo como contexto) | FDA-DI, pregunta 12 | Leído en el documento |
| Banda 150,0 kg ±0,5 %: 149,25 a 150,75 kg (ejemplo de planta) | Cálculo; valores de ejemplo | Recalculado con python |
| Quiz: 320,0 ±0,5 % = 318,4 kg; 254,0 ±0,5 % = 255,27 kg; 212,6 − 18,2 = 194,4 kg (banda 194,025 a 195,975 kg); 6 / 240 = 2,5 % | Cálculo; valores de ejemplo | Recalculado con python |
| Equipos, productos, lotes, terminales, personas y números de desviación e incidencia (R-402, BP-41, T-402, TQ-8, SB-6, DS-4, L-27-118, DV-27-031, IN-27-044, planta P3) | Ficticios | Inventados |

Notas de alcance:

- La guía de la FDA de 2018 se refiere a las CGMP de medicamentos (21 CFR 210, 211 y 212). En la lección se usa solo como guía de buenas prácticas sobre registros electrónicos; para principios activos la referencia de GMP es ICH Q7.
- El anexo 11, apartado 15, habla de la Persona Cualificada en la liberación de lotes de medicamentos; no se usa en la lección porque en principios activos libera la unidad de calidad (ICH Q7).

## Lo que se quiso incluir y se dejó fuera

- **Guía de integridad de datos de la MHRA (2018)**: la descarga desde assets.publishing.service.gov.uk no devolvió archivo (host no accesible desde la sesión). No se cita.
- **ISA-88 e ISA-95 (IEC 62264)**: normas de pago; no se citan. El modelo de receta y de niveles ya está en otras lecciones.
- **Cifras de cuánto acorta la revisión por excepción el tiempo de liberación**: no se encontró ninguna fuente gratuita y fiable con datos; no se dan.
- **Tolerancias de pesada habituales en la industria**: no hay valor normativo general; el ±0,5 % se declara como valor de ejemplo.
- **Contenido real de los informes de excepciones de productos comerciales**: no verificable sin marcas; se describe el EBR ficticio.
- **11.300 (controles de contraseñas)**: verificado en Part 11, pero se quitó del texto para no repetir la lección del nivel 20 y no pasar del límite de palabras.
- No se usó la herramienta de búsqueda web: no hay nada en la lección tomado solo de fragmentos de buscador.
