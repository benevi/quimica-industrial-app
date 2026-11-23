# Fuentes: hplc-a-fondo

Documentos descargados en `src_hplc/` y leídos con `pdftotext -layout` o como HTML:

- OMS, TRS 1025 (2020), anexo 4, *Good chromatography practices*: https://cdn.who.int/media/docs/default-source/medicines/norms-and-standards/guidelines/quality-control/trs1025-annex4.pdf (leído entero: `who1025a4.txt`).
- OMS, TRS 957 (2010), anexo 1, *Good practices for pharmaceutical quality control laboratories* (copia de `src_kf/who957.txt`): definición de verificación de prestaciones, 12.8–12.12 (registro de equipos, retirada, recualificación), apéndice de equipos (HPLC con detector UV; detectores opcionales).
- FDA, *Analytical Procedures and Methods Validation for Drugs and Biologics*, julio 2015: https://www.fda.gov/media/87801/download (`fda2015.txt`, apartados III, IV.A–J, VI).
- FDA, ORA Laboratory Manual Vol. IV, sección 3, *Drug Chemistry Analysis* (IV-03), rev. 03, 7 oct 2022: https://www.fda.gov/media/73554/download (`oravol4.txt`, apartado 8.4.9 HPLC).
- FDA, lista de guías retiradas: https://www.fda.gov/drugs/guidances-drugs/withdrawn-and-expired-guidances-drugs (`withdrawn.html`).
- ICH Q2(R2), adoptada el 1 nov 2023 (copia de `src_kf/q2r2.txt`): apartados 1–3, tabla 2, 3.4.
- ICH Q14, adoptada el 1 nov 2023: https://database.ich.org/sites/default/files/ICH_Q14_Guideline_2023_1116.pdf (`q14.txt`, apartados 3, 5.1, 6).
- INSST, MTA/MB-027/A08, creatinina en orina por HPLC-UV: https://www.insst.es/documents/94886/359017/mta_mb_027_a08.pdf/9e8919d1-7263-4a29-b366-4b0e62a2b72f (`mb027.txt`).
- INSST, MTA/MA-062/A23, formaldehído en aire por HPLC: https://www.insst.es/documents/94886/359043/MA_062_A23.pdf (`ma062.txt`).
- INSST, Límites de exposición profesional para agentes químicos en España 2021: https://www.insst.es/documents/94886/1637405/LEP+2021.pdf/3e65c9ac-0708-f262-4808-2562cc9e0134 (`lep2021.txt`, tabla 1).
- INSST, NTP 461 (listado de peligrosidad de productos de laboratorio): https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/13-serie-ntp-numeros-436-a-470-ano-1998/ntp-461-seguridad-en-el-laboratorio-caracteristicas-de-peligrosidad-de-los-productos-quimicos-de-uso-mas-corriente (`ntp461.txt`).
- INSST, NTP 480 (residuos de laboratorio) (copia de `src_kf/ntp480.txt`).
- Archivos de la app: `src/content/nivel7.ts` (`hplc`, `cromatografia-principios`, `espectroscopia-uv-vis`), `src/content/nivel1.ts` (masas atómicas), `src/content/nivel1-acidos.ts` (pKa, Henderson-Hasselbalch), `src/content/fds.ts` (texto oficial CLP de las frases H), `src/content/nivel16-validacion.ts`, `src/content/nivel10.ts`, `src/content/nivel1-enlaces.ts` (títulos a los que se remite).
- Cálculos: `src_hplc/calc.py`.

| Dato o afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| Usos del HPLC en control: identificación, riqueza, sustancias relacionadas, validación de proceso y de limpieza | OMS TRS 1025 an. 4, 1.2 y 1.6 | Leído |
| Formación de la FDA en HPLC organizada en columnas (normal, inversa, intercambio iónico, precolumnas), parámetros de columna (relleno, tamaño de columna y partícula, dimensiones), disolventes (acuosos, tampones, gradiente), inyección (automática), bombas, detectores (UV, electroquímico, MS), datos (integración, protección) | ORA Lab Manual IV-03, 8.4.9 | Leído (es un índice de formación, sin desarrollo) |
| HPLC «la herramienta analítica más común e importante» del laboratorio | ORA IV-03, 8.4.9 A | Leído (no citado literalmente en el texto) |
| Tabla de módulos y fallos típicos (frasco vacío, juntas, válvulas antirretorno, burbujas, arrastre, lámpara gastada, celda sucia) | Funcionamiento de libro de texto; la OMS menciona arrastre (11.8), desgasificación (9.4), horno (10.6) | Sin fuente leída que dé la lista de fallos; formulado como causas posibles, sin cifras |
| Bucle de inyección y válvula | Funcionamiento de libro de texto | Sin fuente leída; descripción general |
| Volúmenes de inyección 10 µL y 20 µL | INSST MB-027 (10 µl) y MA-062 (20 μl) | Leído |
| Presión «de cientos de bar» | Lección `hplc` de la app | Tomado de la app; no verificado en fuente externa |
| La bomba fija el caudal y la presión es la resistencia de la columna; pulsación de los pistones | Física de libro de texto | Sin fuente leída; idea cualitativa |
| Detector UV y ley de Beer-Lambert | Lección `espectroscopia-uv-vis` de la app | Remisión |
| DAD registra el espectro completo de cada pico | Lección `hplc` de la app (término DAD) | Tomado de la app |
| Detectores opcionales: fluorescencia, diodos, índice de refracción, ELSD, CAD, MS | OMS TRS 957 an. 1, apéndice de equipos | Leído |
| Datos: usuarios y privilegios, administrador no dado a otros, fecha y hora bloqueadas, audit trail activo desde la instalación y revisado por secuencia, copias en lugar separado; ALCOA+ | OMS TRS 1025 an. 4, 1.3, 5, 6, 7, 14.4 | Leído |
| Columna 150 mm × 4,6 mm, relleno 3,5 µm | INSST MB-027 («4,6x150 mm 3,5 micras») y MA-062 («150 mm de longitud, 4,6 mm de diámetro interno y 3,5 micras de tamaño de poro») | Leído. Nota: MA-062 escribe «tamaño de poro»; en el texto se dice «relleno de 3,5 µm» |
| Columna de sílice fundida de fase reversa C18 | INSST MA-062, 5.2.2 y 7.2 | Leído |
| C18 = cadenas de 18 carbonos sobre sílice; lo apolar se retiene más en fase inversa; más orgánico, menos retención | Química de libro de texto; lección `hplc` de la app («retiene más lo poco polar») | Idea cualitativa, sin cifras |
| Existencia de fase normal y fase inversa | ORA IV-03, 8.4.9 | Leído |
| Efectos de partícula, longitud y diámetro | Química de libro de texto (cromatografía) | Sin fuente leída; idea cualitativa |
| Presión proporcional al caudal e inversamente proporcional al cuadrado del diámetro de partícula; factor 4 | Ley de Darcy para lechos de relleno (libro de texto) | Factor recalculado: (1/0,5)² = 4. La ley no se leyó en una fuente de esta sesión |
| Caudal adecuado a la columna «sin superar la contrapresión máxima recomendada» | OMS TRS 1025 an. 4, 10.7 | Leído (traducción propia) |
| Precolumna | ORA IV-03 (*guard columns*); INSST MB-027 («columna cromatográfica con precolumna») | Leído que existe; su función se explica como libro de texto |
| Gestión de columnas: proveedor aprobado, verificación a la recepción, platos teóricos, equilibrado, horno, registro (identificación, inyecciones, lavados), lavado según procedimiento, almacenamiento sin daño | OMS TRS 1025 an. 4, 10.1–10.10 | Leído |
| Fase móvil 45 % acetonitrilo / 55 % agua; 1,3 ml/min; 40 °C; 360 nm; 8 min | INSST MA-062, 7.2 | Leído (en el texto solo la composición) |
| Tampón pH 3,2 : acetonitrilo 95:5; 1 ml/min; 13 min | INSST MB-027, 3.8, 3.9, 6.3 | Leído (en el texto solo la composición) |
| Reactivos de calidad HPLC | INSST MA-062, 4 («calidad analítica para HPLC»); FDA 2015 IV.D (grado HPLC) | Leído |
| Equipo con desgasificador, inyector automático, bomba cuaternaria, horno, detector UV-visible | INSST MA-062, 5.2.1 | Leído |
| Filtros de 0,45 µm | INSST MB-027, 4.4 y MA-062, 5.2.7 | Leído |
| pH frente a pKa; forma ionizada más polar y menos retenida | Química de libro de texto; enlazado con `nivel1-acidos.ts` | Idea cualitativa |
| % ionizado = 100 / (1 + 10^(pKa − pH)) (Henderson-Hasselbalch) | `nivel1-acidos.ts` (ecuación) | Fórmula derivada; recalculado: 0,990 %, 50 %, 99,0 % para pKa 4,8 a pH 2,8 / 4,8 / 6,8 |
| pKa 4,8 | Valor de ejemplo declarado | — |
| Fase móvil: filtrar, desgasificar y presurizar cuando haga falta; preparación autorizada, registros, plazos justificados | OMS TRS 1025 an. 4, 9.1, 9.2, 9.4 | Leído |
| Burbujas al bajar la presión (aire disuelto) | Física de libro de texto | Idea cualitativa |
| Isocrático, gradiente, reequilibrado | Lección `hplc` de la app; ORA IV-03 (*solvent programming - gradient*) | Leído / tomado de la app |
| Tabla de gradiente 10–90 % B, 35 min, 1,0 mL/min | Valor de ejemplo declarado | — |
| Acetato amónico C₂H₇NO₂, M = 77,083 g/mol | Masas atómicas de `nivel1.ts` | Recalculado: 77,083 |
| Tampón 20 mmol/L, 1 L: 1,542 g | Cálculo | Recalculado: 1,54166 |
| Mezcla 70:30 de 1000 mL: 700 + 300 mL | Cálculo | Recalculado |
| Al mezclar agua y disolvente orgánico el volumen no siempre es aditivo | Química de libro de texto | Sin fuente leída; afirmación cualitativa («no siempre») |
| 2,16 g de 1-octanosulfonato de sodio en 1 L «para obtener una concentración de 10 mmol/l» | INSST MB-027, 3.8 | Leído |
| C₈H₁₇NaO₃S = 216,27 g/mol; 2,16 / 216,27 = 0,00999 mol | Cálculo con masas de `nivel1.ts` (S 32,06) | Recalculado: 216,271; 9,987 mmol |
| Volumen = caudal × tiempo × inyecciones; 1,0 × 35 × 24 = 840 mL | Cálculo, valores de ejemplo | Recalculado |
| Canal B: 15,54 mL por inyección; 373 mL por secuencia | Cálculo sobre la tabla de gradiente | Recalculado: 15,54 y 372,96 |
| 24 × 35 = 840 min = 14 h | Cálculo | Recalculado |
| Volumen del tubo π × 0,23² × 15 = 2,49 mL; con 0,65 (valor de ejemplo) 1,62 mL; tiempo muerto 1,6 min a 1,0 mL/min | Cálculo; la fracción 0,65 es valor de ejemplo declarado | Recalculado: 2,4929; 1,6204 |
| Procedimiento: tiempos de equilibrado, secuencia con blancos, placebos, muestras, controles, disolución de sensibilidad (impurezas) y patrones que mantienen la idoneidad durante el análisis | FDA 2015, IV.G | Leído |
| Procedimiento: equipo con tipo de columna, dimensiones, columna alternativa, filtro; parámetros (caudal, temperaturas, tiempo, detector, gradiente) | FDA 2015, IV.B y IV.C | Leído (contexto; no citado en detalle) |
| Conjunto de muestras (*sample set*); verificar viales y orden antes de empezar; blanco si hay arrastre | OMS TRS 1025 an. 4, glosario, 11.7, 11.8 | Leído |
| Inyecciones de prueba no recomendadas; si se hacen, procedimiento autorizado y registros guardados con el conjunto | OMS TRS 1025 an. 4, 11.9 | Leído |
| SST parte del conjunto; criterios para SST y patrones intercalados; número de patrones intercalados definido y verificado | OMS TRS 1025 an. 4, 11.10–11.12 | Leído |
| Secuencia de 24 inyecciones (1 + 6 + 2 + 12 + 3) | Valor de ejemplo declarado | Suma recalculada |
| Tabla de problemas y causas | Libro de texto de cromatografía; anclajes en OMS 9.4 (desgasificar), 10.6 (equilibrado, horno), 11.8 (arrastre, blanco), 12.6 (composición, pH) | Sin fuente leída para la tabla completa; causas formuladas como «probables», sin cifras |
| Investigar formas de pico anómalas | OMS TRS 1025 an. 4, 13.4 | Leído |
| OOS en el nivel 10 | `nivel10.ts` (`oos-y-oot`) | Remisión |
| Cualificación: definición; etapas URS, DQ, FAT, SAT, IQ, OQ, PQ; mantenimiento y calibración por escrito; causa e impacto si fuera de calibración | OMS TRS 1025 an. 4, glosario, 4.3, 4.7, 4.8 | Leído |
| Recualificar tras reparación importante; retirar y etiquetar equipos con resultados sospechosos | OMS TRS 957 an. 1, 12.11 y 12.12 | Leído |
| ICH Q2(R2) adoptada el 1 nov 2023; especificidad/selectividad, intervalo (respuesta, linealidad), exactitud, precisión | ICH Q2(R2), portada, 2 y 3 | Leído |
| Robustez evaluada en el desarrollo (ICH Q14); variaciones deliberadas de parámetros; parámetro de procedimiento, p. ej. caudal | ICH Q2(R2) 3.4 y glosario; ICH Q14 5.1 | Leído |
| Intervalo de riqueza de producto 80–120 % del contenido declarado o de los límites | ICH Q2(R2), tabla 2 | Leído |
| Guía FDA 1994 *Reviewer Guidance, Validation of Chromatographic Methods*: emitida 01/11/1994, retirada 25/11/2024 | Lista de guías retiradas de la FDA | Leído en fda.gov |
| VLA-ED acetonitrilo 40 ppm, 68 mg/m³, vía dérmica, H225-332-312-302-319 | LEP INSST 2021, tabla 1 | Leído. Es la edición 2021; no se pudo descargar la 2025 ni la 2026 |
| VLA-ED metanol 200 ppm, 266 mg/m³, vía dérmica, H225-331-311-301-370 | LEP INSST 2021, tabla 1; coincide con `fds.ts` | Leído |
| Texto de las frases H | `fds.ts` (texto oficial CLP) | Tomado de la app |
| Acetonitrilo listado también como «cianuro de metilo» | NTP 461 | Leído |
| Disolventes no halogenados (alcoholes, nitrilos…, menos del 2 % de halógenos), separados de halogenados; evitar mezclar inmiscibles | NTP 480, grupos I y II | Leído |
| Usos para el operador: IPC, riqueza, impurezas, identificación, limpieza | Lección `hplc` de la app; OMS TRS 1025 an. 4, 1.2 | Leído / app |
| Tiempo de un IPC: 30 + 20 + 150 + 15 = 215 min | Cálculo con valores de ejemplo declarados | Recalculado |
| Ejemplo de planta (R-301, FX-24-117, INT-7, HP-701, COL-034, presiones 110/160/112 bar, 0,6 %, horas) | Valores de ejemplo declarados, ficticios | 10:15 + 215 min ≈ 13:50, más el cambio de precolumna: 13:55 |
| Respuestas del test | Cálculo | Recalculadas: 864 mL; 12,5 h; 3,854 g; 210 bar; 2 min; 0,99 % |

## Lo que quedó solo como fragmento de buscador

- Contenido de la guía FDA 1994 *Validation of Chromatographic Methods* (criterios de idoneidad del sistema, etc.): los PDF de fda.gov devolvieron una página HTML y las copias de webarchive.library.unt.edu y corpora.tika.apache.org no son accesibles. Solo se leyó su retirada en fda.gov. No se usa nada de su contenido.
- FISQ 0088 del acetonitrilo (INSST): los síntomas de intoxicación pueden tardar horas y el uso de sistema cerrado por encima de 12,8 °C solo se vieron en fragmentos del buscador. No se usan.
- Que exista una edición 2026 de los LEP del INSST (aprobada el 30 de enero de 2026): solo en fragmento del buscador; por eso el texto dice «edición de 2021, la que se ha podido leer» y pide consultar la vigente.

## Lo que se dejó fuera por no poder verificarlo

- Documento OMCL/EDQM «Qualification of HPLC equipment» (citado por la OMS en el TRS 957): edqm.eu no es accesible. Sin pruebas concretas de cualificación (exactitud del caudal, linealidad del detector, etc.) ni sus límites.
- Longitudes de onda de corte UV del acetonitrilo y del metanol, y si el detector de índice de refracción admite gradiente.
- Intervalos de pH de las columnas de sílice y presiones máximas de equipos y columnas (solo se dice que los da el fabricante).
- Regla numérica de «pH a dos unidades del pKa»: solo se da la cuenta de Henderson-Hasselbalch.
- Porosidad real de una columna (se usa 0,65 como valor de ejemplo).
- Metabolización del acetonitrilo a cianuro y efectos retardados.
- Número de inyecciones de idoneidad y criterios (RSD, resolución, cola): son de la Farmacopea o del método y de «Cromatografía a fondo».
- Si un patrón intercalado falla, qué muestras se invalidan: se deja al procedimiento del laboratorio.
