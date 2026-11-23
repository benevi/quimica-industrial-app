# Fuentes de la lección `accesos-y-archivo-a-fondo`

Documentos leídos en texto (copias en `src_accesos/`, convertidas con `pdftotext -layout`). Las copias de PDF se reutilizaron de otras lecciones de esta sesión (descargadas de los hosts oficiales) y se releyeron aquí; la página de EudraLex, la de la consulta y la guía FDA de 2003 se descargaron de nuevo el 21 de noviembre de 2026.

- **21 CFR Part 11** (eCFR, versión actual): https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-11 (`part11.txt`). Leídos 11.10 entero, 11.100 y 11.300.
- **FDA, «Part 11, Electronic Records; Electronic Signatures — Scope and Application»** (agosto de 2003): https://www.fda.gov/media/75414/download (`fda2003.txt`). Leído el apartado III.C.5 «Record Retention».
- **FDA, «Data Integrity and Compliance With Drug CGMP. Questions and Answers»** (diciembre de 2018) (`fdadi.txt`). Leídas las preguntas 3e, 4 y 5.
- **EudraLex vol. 4, anexo 11** (revisión de enero de 2011) (`a11.txt`). Leídos apartados 2, 7, 8, 9, 11, 12, 16 y 17.
- **EudraLex vol. 4, parte I, capítulo 4** (enero de 2011) (`ch4.txt`, copia de `lecciones/src_planta/ch4.txt`). Leídos 4.1 y 4.7 a 4.12.
- **Página de EudraLex vol. 4**: https://health.ec.europa.eu/medicinal-products/eudralex/eudralex-volume-4_en (`vol4.html`, descargada el 21/11/2026). Comprobado: capítulo 4 «(January 2011)», anexo 11 «(revision January 2011)», sin anexo 22; parte I «Basic Requirements for Medicinal Products», parte II «Basic Requirements for Active Substances used as Starting Materials».
- **Consulta de 2025**: https://health.ec.europa.eu/consultations/stakeholders-consultation-eudralex-volume-4-good-manufacturing-practice-guidelines-chapter-4-annex_en (`cons.html`). Leído: capítulo 4, anexo 11 y anexo 22 nuevo; del 7 de julio de 2025 al 7 de octubre de 2025.
- **Borrador del anexo 11 (2025)**: https://health.ec.europa.eu/document/download/40231f18-e564-4043-94de-c031f813d38b_en?filename=mp_vol4_chap4_annex11_consultation_guideline_en.pdf (`a11d.txt`). Leídos 11.1 a 11.11, 14.2, 16.1 a 16.6 y 17.1 a 17.5.
- **PIC/S PI 041-1** (1 de julio de 2021) (`pics041.txt`). Leídos 8.10, 8.11, 9.3 (puntos 3 y 6), 9.4, 9.5 (puntos 1 y 5) y 9.9.
- **ICH Q7**: https://database.ich.org/sites/default/files/Q7%20Guideline.pdf (`q7.txt`). Leídos 5.40 a 5.49 y 6.10 a 6.18.
- Lecciones del repo leídas para no repetir: `nivel20.ts`, `nivel20-alcoa.ts`, `nivel16-hoja.ts`, `nivel18-ciber.ts` (búsqueda de copias, RPO, contraseñas), `nivel19-mes.ts` y `nivel19-lims.ts` (pasajes de perfiles y conservación).

## Afirmaciones normativas

| Afirmación de la lección | Fuente | Cómo se comprobó |
|---|---|---|
| 11.10(d): limitar el acceso al sistema a personas autorizadas | 21 CFR 11.10(d) | Leído en el documento |
| 11.10(g): comprobaciones de autoridad para usar el sistema, firmar, alterar un registro o hacer la operación | 21 CFR 11.10(g) | Leído en el documento |
| 11.10(i): formación y experiencia de quien usa el sistema | 21 CFR 11.10(i) | Leído en el documento |
| El audit trail se conserva al menos tanto como el registro al que acompaña | 21 CFR 11.10(e) | Leído en el documento |
| Verificar la identidad antes de asignar una firma electrónica | 21 CFR 11.100(b) | Leído en el documento |
| Cada firma electrónica es única de una persona y no se reutiliza ni reasigna | 21 CFR 11.100(a) | Leído en el documento |
| Unicidad de la combinación usuario y contraseña | 21 CFR 11.300(a) | Leído en el documento |
| Comprobación, retirada o revisión periódica de identificadores y contraseñas (p. ej. caducidad) | 21 CFR 11.300(b) | Leído en el documento |
| Anular tarjetas o dispositivos perdidos y sustituirlos con controles rigurosos | 21 CFR 11.300(c) | Leído en el documento |
| Salvaguardas que impidan el uso no autorizado y lo comuniquen de forma inmediata a seguridad | 21 CFR 11.300(d) | Leído en el documento |
| Anexo 11, 12.1 a 12.4 (controles de acceso, según criticidad, registro de altas, cambios y anulaciones, identidad de quien introduce, cambia, confirma o borra) | Anexo 11 (2011), 12 | Leído en el documento |
| Anexo 11, 7.1 (protección física y electrónica; accesibilidad todo el periodo) y 7.2 (copias regulares; integridad y restauración comprobadas en validación y vigiladas periódicamente) | Anexo 11 (2011), 7 | Leído en el documento |
| Anexo 11, 17: comprobar accesibilidad, legibilidad e integridad del archivo; si cambia el sistema, asegurar y probar la recuperación | Anexo 11 (2011), 17 | Leído en el documento |
| ICH Q7 5.43: controles para impedir accesos o cambios no autorizados | ICH Q7, 5.43 | Leído en el documento |
| ICH Q7 6.12: procedimiento de conservación con plazos especificados | ICH Q7, 6.12 | Leído en el documento |
| ICH Q7 6.13: al menos 1 año tras la caducidad; con fecha de reanálisis, al menos 3 años tras la distribución completa | ICH Q7, 6.13 | Leído en el documento (coincide con lo pedido) |
| ICH Q7 6.15 (disponibles en la planta o recuperables enseguida por medios electrónicos) y 6.16 (originales o copias fieles; medios de lectura y de copia en papel) | ICH Q7, 6.15 y 6.16 | Leído en el documento |
| Capítulo 4 en la parte I (medicamentos) de EudraLex | Página de EudraLex vol. 4 | Leído en la página oficial |
| 4.11: 1 año tras la caducidad o al menos 5 años tras la certificación por la Persona Cualificada, lo más largo | Capítulo 4, 4.11 | Leído en el documento |
| 4.10: definir qué registro corresponde a cada actividad y dónde está | Capítulo 4, 4.10 | Leído en el documento |
| 4.12: datos crudos que respaldan la autorización (validación, estabilidad) se guardan mientras esta siga en vigor | Capítulo 4, 4.12 | Leído en el documento |
| A 21/11/2026 siguen vigentes anexo 11 y capítulo 4 de enero de 2011; no hay anexo 22 publicado | Página de EudraLex vol. 4 | Leído en la página oficial ese día |
| Consulta del borrador del 7 de julio al 7 de octubre de 2025, con capítulo 4, anexo 11 y anexo 22 sobre IA | Página de la consulta | Leído en la página oficial |
| Borrador 11.1: cuentas únicas; compartidas solo de solo lectura; lo demás, violación de la integridad | Borrador anexo 11, 11.1 | Leído en el documento |
| Borrador 11.2: conceder, modificar y retirar a tiempo | Borrador, 11.2 | Leído en el documento |
| Borrador 11.5: longitud suficiente, mayúsculas, minúsculas, números y símbolos; sin cifra de longitud | Borrador, 11.5 | Leído en el documento |
| Borrador 11.6: multifactor en acceso remoto a sistemas críticos | Borrador, 11.6 | Leído en el documento |
| Borrador 11.7: bloqueo tras número definido de fallos; desbloqueo por administrador tras descartar intrusión | Borrador, 11.7 | Leído en el documento |
| Borrador 11.11: revisiones recurrentes por los responsables, documentadas, frecuencia según riesgo | Borrador, 11.11 | Leído en el documento |
| Borrador 16: ejemplos de intervalos (horarias, diarias, semanales, mensuales) y conservación (semana, mes, trimestre, años); separación física y lógica; prueba de restauración documentada (16.6) | Borrador, 16.2 a 16.6 | Leído en el documento |
| Borrador 17.2: verificar integridad antes de borrar, p. ej. con checksum | Borrador, 17.2 | Leído en el documento |
| Borrador 17.4: soportes de duración limitada (CD) solo por el tiempo verificado y paso a soporte nuevo | Borrador, 17.4 | Leído en el documento |
| Petición de alta autorizada (responsable directo y dueño del sistema), trazable, según procedimiento | PI 041-1, 9.5 punto 1 | Leído en el documento |
| El usuario crea su contraseña en el primer acceso; sistemas donde solo el administrador la crea son incompatibles con la integridad | PI 041-1, 9.5 punto 1 | Leído en el documento |
| Varios roles, mínimo normal y administrador; mínimo privilegio; un solo rol para todos no es aceptable | PI 041-1, 9.5 punto 1 | Leído en el documento |
| Usuarios normales sin acceso a reloj del sistema ni a borrado de archivos | PI 041-1, 9.5 punto 1 | Leído en el documento |
| Prohibir contraseñas compartidas incluso para ahorrar | PI 041-1, 9.5 punto 1 | Leído en el documento |
| Lista de usuarios con acceso real y rol, usada en las revisiones periódicas; lista de intentos de entrada buenos y fallidos con usuario, rol, fecha y hora | PI 041-1, 9.5 punto 1 | Leído en el documento |
| Administrador independiente, sin interés en los datos; ejemplo del supervisor de laboratorio y HPLC/GC; normalmente informática; en empresas pequeñas, persona designada con segunda cuenta normal y actividades registradas y aprobadas | PI 041-1, 9.5 punto 1 | Leído en el documento |
| Cierre por inactividad, tiempo «más corto que largo», reautenticación | PI 041-1, 9.5 punto 1 | Leído en el documento (sin cifra de minutos) |
| Política de contraseñas que el sistema haga cumplir; más fuertes con datos críticos | PI 041-1, 9.5 punto 1 | Leído en el documento (sin cifra de longitud) |
| Sistemas antiguos con un solo usuario: alternativa con programa externo o registro en papel, justificada, con más revisión | PI 041-1, 9.5 punto 1 | Leído en el documento |
| Autorización para generar datos separada de la de verificarlos, definida antes de la validación y verificada en pruebas | PI 041-1, 9.3 punto 3 | Leído en el documento |
| Control de USB, especialmente personales | PI 041-1, 9.5 punto 5 | Leído en el documento |
| Riesgo de guardar datos en local antes de pasarlos al sistema | PI 041-1, 9.4 punto 1 | Leído en el documento |
| Migrar antes de que la plataforma pierda soporte | PI 041-1, 9.3 punto 6 | Leído en el documento |
| Datos archivados legibles con el programa nuevo; si no se pueden convertir, mantener el antiguo, p. ej. en entorno virtual; migración con protocolo y verificación completa; formato que pierda funciones solo tras evaluación de riesgo | PI 041-1, 9.4 puntos 2 y 3 | Leído en el documento |
| Copias con datos, metadatos y audit trail; mismos controles que el original (disco portátil sin borrado); rutinarias en lugar remoto separado físicamente; archivo separado del original y de las copias; restauración de lo archivado probada con regularidad; retirada de sistemas con procedimientos de legibilidad; procedimiento de eliminación de datos electrónicos | PI 041-1, 9.9 puntos 1, 3 y 5 | Leído en el documento |
| Archivo en papel: sistema con cajas, lista, plazo y ubicación; acceso restringido; registro de salida y devolución; protección contra fuego, líquidos, roedores, humedad y acceso no autorizado; papel térmico con copia fiel verificada | PI 041-1, 8.10 | Leído en el documento |
| Otras leyes pueden exigir plazos más largos | PI 041-1, 8.10.1 | Leído en el documento |
| Destrucción: proceso escrito, registro, evitar destruir lo vigente, permisos limitados a pocas personas | PI 041-1, 8.11 | Leído en el documento |
| Rol de administrador asignado a personas independientes de quienes responden del contenido | FDA 2018, pregunta 4 | Leído en el documento |
| Credenciales compartidas no identifican a la persona; cuentas compartidas de solo lectura valen para consultar, no para acciones atribuibles como la segunda revisión | FDA 2018, pregunta 5 | Leído en el documento |
| La FDA usa «backup» para una copia fiel conservada todo el periodo, equivalente a «archive»; las copias temporales no cumplen | FDA 2018, pregunta 3e | Leído en el documento |
| En 2003 la FDA no se opondría a archivar en papel, microfilm o formatos estándar como PDF si se conservan contenido y significado | FDA 2003, III.C.5 | Leído en el documento |
| Regla 3-2-1 | Ninguna norma leída | Presentada explícitamente como práctica habitual de informática, no como requisito |

## Cálculos (recalculados con python en `src_accesos/calc/calc.py`)

| Cálculo | Resultado | Tipo |
|---|---|---|
| Capacidad: (400 + 6 × 8) × 5 × 2 | 448; 2240; 4480 GB | Valores de ejemplo declarados; recalculado |
| Restauración: 400000 MB / 250 MB/s | 1600 s = 26,7 min; con 48 GB más, 1792 s = 29,9 min | Valores de ejemplo; recalculado |
| RPO: copia 23:00, fallo 16:40 del día siguiente | 17 h 40 min = 17,7 h | Valores de ejemplo; recalculado |
| Revisión de accesos: 9 / 150 × 100 | 6 % | Valores de ejemplo; recalculado |
| ICH Q7, caducidad 28/02/2029 + 1 año | 28/02/2030 | Fechas de ejemplo; recalculado |
| ICH Q7, distribución completa 05/09/2028 + 3 años | 05/09/2031 | Fechas de ejemplo; recalculado |
| Capítulo 4: caducidad 30/06/2031 + 1 = 30/06/2032; certificación 15/07/2028 + 5 = 15/07/2033; el mayor | 15/07/2033 | Fechas de ejemplo; recalculado |

## Valores de ejemplo y ficticios declarados
MES-FX, LIMS-QX, FD-402, BP-07, lotes AX-27-031 y KZ-28-112, API AX-27, personas (Iker, Marta), la matriz de perfiles entera, la prueba de restauración trimestral del ejemplo de planta, tamaños de copia, velocidad de restauración, horarios de copia y número de cuentas.

## Lo que quedó fuera por no poder verificarlo
- Longitud mínima de contraseña, número de intentos antes del bloqueo y minutos de cierre por inactividad: ninguno de los documentos gratuitos leídos da cifras (PI 041-1 y el borrador solo dan criterios). NIST SP 800-63B no está en los hosts accesibles.
- Frecuencia concreta de la revisión de accesos o de las pruebas de restauración: ninguna norma leída da una cifra; se dice «según el riesgo».
- Guía MHRA 2018 de integridad de datos y OMS TRS 1033 anexo 4: no se descargaron (el PDF de MHRA está en un host no permitido); no se citan.
- Que la parte II de EudraLex sea textualmente ICH Q7: no se comprobó en un texto oficial en esta lección; se evitó la afirmación.
- Una cifra de RTO típica para un MES o LIMS: no verificable; solo se dice que lo fija el procedimiento y se comprueba con una prueba.
- GAMP 5 (de pago): no se cita.
