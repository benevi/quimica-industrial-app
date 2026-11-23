# Fuentes: audit-trail-a-fondo

Copias locales leídas: `src_audit/dl/` (part11.txt, fdadi.txt, fda2003.txt, a11.txt, a11d.txt, pics041.txt, who1033.txt, q7.txt, ch4.txt, eudralex4.html).

URL de cada documento:
- 21 CFR Part 11 (eCFR, versión actual): https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-11
- FDA, *Data Integrity and Compliance With Drug CGMP. Questions and Answers* (diciembre de 2018): https://www.fda.gov/media/119267/download
- FDA, *Part 11, Electronic Records; Electronic Signatures — Scope and Application* (agosto de 2003): https://www.fda.gov/media/75414/download
- EudraLex vol. 4, anexo 11 (2011): https://health.ec.europa.eu/system/files/2016-11/annex11_01-2011_en_0.pdf
- Borrador del anexo 11 (consulta de 2025): https://health.ec.europa.eu/document/download/40231f18-e564-4043-94de-c031f813d38b_en?filename=mp_vol4_chap4_annex11_consultation_guideline_en.pdf
- Página de EudraLex vol. 4: https://health.ec.europa.eu/medicinal-products/eudralex/eudralex-volume-4_en (descargada el 21/11/2026)
- EudraLex vol. 4, parte I, capítulo 4 (2011): copia de health.ec.europa.eu (ch4.pdf)
- PIC/S PI 041-1 (1 de julio de 2021): https://picscheme.org/docview/4234
- OMS, TRS 1033, anexo 4, *Guideline on data integrity* (2021): https://cdn.who.int/media/docs/default-source/medicines/norms-and-standards/guidelines/inspections/trs1033-annex4-guideline-on-data-integrity.pdf
- ICH Q7: https://database.ich.org/sites/default/files/Q7%20Guideline.pdf

| Afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| Definición de audit trail: registro electrónico seguro, generado por ordenador, con fecha y hora, que permite reconstruir creación, modificación o borrado | FDA 2018, apartado 1.c | Leído en el documento |
| La guía FDA 2018 cita partes 210, 211 y 212 (medicamentos) y dice que es coherente con su guía para API en integridad de datos | FDA 2018, introducción | Leído |
| OMS: audit trail como metadato; «who, what, when and why» | OMS TRS 1033 anexo 4, glosario | Leído |
| Contenido de cada entrada: usuario, acción con valor anterior y nuevo, fecha y hora, motivo, y quién autoriza si se modifica un dato | PIC/S PI 041-1, 9.6, expectativa 2 | Leído |
| Part 11, 11.10(e): audit trail seguro, generado por ordenador, con fecha y hora, de entradas y acciones que crean, modifican o borran; no oculta lo anterior; conservado al menos como el registro | 21 CFR 11.10(e) | Leído |
| Part 11 no menciona el motivo en 11.10(e) | 21 CFR 11.10(e) | Leído (el texto no incluye «reason») |
| Anexo 11, apartado 9: según riesgo, registro de cambios y borrados GMP; motivo documentado; disponible, legible, revisado regularmente | Anexo 11 (2011), 9 | Leído |
| ICH Q7, 5.43: registro de cada cambio, entrada anterior, quién y cuándo | ICH Q7 5.43 | Leído |
| Entradas en tiempo real; misma hora para varias acciones o registro al final puede no cumplir; ejemplo de 4 materias primas con orden de adición crítico | PIC/S 9.6 | Leído |
| FDA 2003: discrecionalidad sobre 11.10(e) y (k)(2); siguen las normas de base sobre fecha, hora, secuencia y correcciones; audit trail especialmente adecuado cuando los usuarios crean, modifican o borran registros en la operación normal | FDA 2003, III.C.2 | Leído |
| Borrador del anexo 11 en consulta; la página de EudraLex (21/11/2026) muestra «Annex 11 Computerised Systems (revision January 2011)» y «Chapter 4 - Documentation (January 2011)»; no aparece anexo 22 | eudralex4.html | Leído en la página descargada |
| Logs de error no críticos pueden no capturarse por completo si se justifica | PIC/S 9.1.5.2 | Leído |
| Registro de alarmas aparte (8.5); reconocimiento de alarma con comentario (8.4); audit trail de todas las interacciones manuales incluido reconocer alarmas (12.1) | Borrador anexo 11, 8.4, 8.5, 12.1 | Leído |
| No confundir audit trail con control de cambios | PIC/S 9.6, nota | Leído |
| Audit trails de datos y de sistema (intentos de acceso, renombrar o borrar archivos) | FDA 2018, 1.c | Leído |
| Audit trail activado y bloqueado; no desactivable, borrable ni modificable; si un administrador puede, entrada automática | PIC/S 9.6 | Leído |
| Activar al instalar, evidencia, verificación periódica | OMS 11.11 | Leído |
| Usuarios normales sin acceso a relojes ni borrado de archivos; reloj del SO sincronizado con sistemas conectados; acceso a relojes restringido | PIC/S 9.5 | Leído |
| Configurar y verificar zona horaria y sincronización; restringir cambios de fecha, hora y zona horaria | OMS 4.15 | Leído |
| En sistemas globales puede hacer falta registrar la zona horaria | PIC/S 9.8 | Leído |
| Borrador: zona horaria en el audit trail si aplica (12.2) | Borrador anexo 11, 12.2 | Leído |
| Hora local 1 h por delante de UTC; horas 09:41:20 y 10:47:50 | Valor de ejemplo declarado | Recalculado: 10:41:20; diferencia 390 s = 6,5 min; sin convertir, 1 h 6 min 30 s |
| Revisión del audit trail como mirar tachones; quien revisa el registro revisa su audit trail; calidad aprueba todos los registros de producción y control | FDA 2018, pregunta 7 | Leído |
| Audit trails críticos revisados de forma independiente por el departamento de origen y verificados por calidad cuando haga falta | PIC/S 9.6 | Leído |
| Borrador: revisión por personal no implicado (12.6); qué buscar y verificar el motivo (12.7) | Borrador anexo 11 | Leído |
| Frecuencia: la misma que fija la norma para el dato (tras pasos significativos, antes de liberar); si no, por riesgo | FDA 2018, pregunta 8 | Leído |
| Revisión antes de decisión crítica; SOP de cómo revisar; documentar; investigar variaciones; revisiones aleatorias y dirigidas en autoinspección | PIC/S 9.8 | Leído |
| Frecuencia según criticidad y tipo de información; evidencia de la revisión | OMS 12.3 a 12.6 | Leído |
| Revisión centrada en cambios de datos y en lo anómalo (revisión por excepción) | PIC/S 9.6 | Leído |
| Extracto de CDS, lote, horas, 0,16 % y 0,14 %, límite 0,15 % | Valor de ejemplo declarado | Ficticio; 09:10 a 09:24 = 14 min |
| Muestra real en inyecciones de prueba, preparación o equilibrado para disimular *testing into compliance*: práctica contraria a CGMP; idoneidad con patrones | FDA 2018, pregunta 13 | Leído |
| Inyecciones abortadas o incompletas en el audit trail, investigadas y justificadas | FDA 2018, pregunta 12 | Leído |
| Integraciones manuales y reprocesados aprobados y controlados; original conservado | PIC/S 9.7, expectativa 2 | Leído |
| No basta guardar solo el resultado final reprocesado | FDA 2018, pregunta 14 | Leído |
| Cuentas compartidas no identifican a la persona | FDA 2018, pregunta 5; OMS 11.9 | Leído |
| Sospecha de falsificación investigada dentro del sistema de calidad | FDA 2018, pregunta 15 | Leído |
| Extracto del DCS: caudales 120 y 180 kg/h, horas | Valor de ejemplo declarado | Recalculado: +50 %; 03:12:40 a 03:55:10 = 42 min 30 s |
| Definición de firma electrónica (equivalente legal de la manuscrita) y de biometría | 21 CFR 11.3(b)(7) y (b)(3) | Leído |
| Anexo 11, 14: mismo efecto que la manuscrita en la empresa, unida al registro, fecha y hora | Anexo 11, 14 | Leído |
| ICH Q7 6.18: firmas electrónicas autenticadas y seguras | ICH Q7 6.18 | Leído |
| Dos componentes si no es biométrica; firmas en serie en sesión continua (primera con todos, siguientes al menos uno exclusivo); fuera de sesión continua, todos; uso solo por el dueño; usar la de otro exige colaboración de dos o más personas; biométrica solo usable por su dueño | 21 CFR 11.200 | Leído |
| 5 firmas: mínimo 6 componentes en sesión continua; 10 si no | Cálculo | Recalculado: 2 + 4 × 1 = 6; 5 × 2 = 10 |
| Borrador: reautenticación completa al firmar; seguidas, solo contraseña o biometría (13.3) | Borrador anexo 11, 13.3 | Leído |
| Controles de contraseñas: unicidad, revisión o caducidad, anulación de dispositivos perdidos, detección y aviso de uso no autorizado | 21 CFR 11.300 (a) a (d) | Leído |
| Manifestación: nombre, fecha y hora, significado (revisión, aprobación, responsabilidad, autoría) | 21 CFR 11.50 | Leído |
| Firma unida al registro; no recortar, copiar ni trasladar | 21 CFR 11.70 | Leído |
| Cambio tras firmar: registro aparece como no firmado hasta nueva revisión y firma | PIC/S 9.5, expectativa 4 | Leído |
| Firma única, no reutilizable ni reasignable | 21 CFR 11.100(a) | Leído |
| Responsabilidad por lo firmado para disuadir falsificaciones | 21 CFR 11.10(j) | Leído |
| Imagen insertada o nota al pie no basta sin proceso de firma validado | OMS 11.14 | Leído |
| Registros híbridos y relación entre papel y electrónico definida | Capítulo 4, 4.1 | Leído |
| Decidir de antemano y documentar si se confía en el registro electrónico o en el papel | FDA 2003, III.B.2 | Leído |
| Registro dinámico: el impreso no conserva el registro original completo | FDA 2018, pregunta 10 | Leído |
| Borrador: firma manuscrita de registros electrónicos con *hash* impreso (13.9) | Borrador anexo 11, 13.9 | Leído |
| Sistemas híbridos desaconsejados; controles en la interfaz papel-sistema; conservar el original tras transcribir | PIC/S 9.10 | Leído |
| Cierre por inactividad que exige reautenticación | PIC/S 9.5 | Leído |
| Todos los registros GMP, también electrónicos, inspeccionables | FDA 2018, pregunta 17 | Leído |
| Conservación: al menos 1 año tras caducidad del lote | ICH Q7 6.13 | Leído; cálculo 2029 + 1 = 2030 |
| Pautas para responder a un inspector (escuchar, contar lo que sabes, no especular, reconocer errores) | Buena práctica general, sin norma concreta | Se presenta como consejo y se remite al procedimiento de la empresa |
| Analogías con tabla de solo inserción y git | Explicación didáctica | No es un dato técnico regulado |

## Lo que quería incluir y dejé fuera
- **MHRA *GxP Data Integrity Guidance and Definitions* (2018)**: la página de gov.uk descargó, pero el PDF está en assets.publishing.service.gov.uk, que da error de red. No se cita.
- Valores concretos de tiempo de cierre por inactividad, longitud de contraseñas o número de intentos fallidos: ninguna fuente gratuita leída da cifras; no se incluyen.
- Desfase horario oficial de España (UTC+1 en invierno, UTC+2 en verano): no lo verifiqué en el BOE; el ejemplo usa «1 h por delante de UTC» como valor de ejemplo y no lo atribuye a ningún país.
- Requisitos de GAMP 5 sobre revisión del audit trail: GAMP es de pago; no se usa.
- Estado del anexo 22 (IA) y del capítulo 4 revisado: solo se comprobó que la página de EudraLex no los muestra como vigentes; no se describen en esta lección.
