# Fuentes: validacion-de-sistemas-a-fondo

Comprobado el 21 de noviembre de 2026. Copias de trabajo en `scratchpad/src_csv/` (los textos ya descargados en esta sesión se copiaron desde `src_sap/dl`, `src_mes/dl`, `src_oos`, `src_micro`, `src_accesos`, `src_alcoa`; lo nuevo está en `src_csv/dl/`).

Documentos leídos:

- EudraLex vol. 4, anexo 11 (revisión 1, en vigor 30-06-2011): https://health.ec.europa.eu/system/files/2016-11/annex11_01-2011_en_0.pdf (copia `a11.txt`).
- Borrador de anexo 11 revisado (consulta de julio de 2025): copia `a11d.txt` (descargado antes en esta sesión desde health.ec.europa.eu).
- EudraLex vol. 4, anexo 15 (30-03-2015): copia `annex15.txt`.
- ICH Q7: https://database.ich.org/sites/default/files/Q7%20Guideline.pdf (copia `q7.txt`).
- ICH Q9(R1), adoptada el 18-01-2023: copia `q9.txt` (database.ich.org).
- PIC/S PI 011-3 (25-09-2007), «Good Practices for Computerised Systems in Regulated GxP Environments»: copia `pi011.txt` (picscheme.org). Figura en la página de publicaciones de PIC/S guardada hoy en esta sesión (`src_lims/pics_page.html`, «Documents for Inspectors / Guidance documents»).
- PIC/S PI 041-1 (1-07-2021): copia `pics041.txt`.
- 21 CFR Part 11 (eCFR): copia `part11.txt`.
- FDA, «Part 11, Electronic Records; Electronic Signatures — Scope and Application» (2003): copia `fda2003.txt`.
- FDA, «Data Integrity and Compliance With Drug CGMP» (diciembre de 2018): copia `fdadi.txt`.
- FDA, página de la guía CSA: https://www.fda.gov/regulatory-information/search-fda-guidance-documents/computer-software-assurance-production-and-quality-management-system-software (`dl/csa_page.html`) y PDF https://www.fda.gov/media/188844/download (`dl/csa2026.pdf`, `csa2026.txt`).
- INSST, NTP 679 «Análisis modal de fallos y efectos. AMFE»: https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/19-serie-ntp-numeros-646-a-680-ano-2004/679 (`dl/ntp679.txt`, texto íntegro en la ficha HTML).

## Tabla de afirmaciones

| Afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| Sistema informatizado = conjunto de software y hardware que juntos cumplen ciertas funciones | Anexo 11, principio | Leído |
| Visión amplia: sistema de control + proceso o función controlada + entorno con personas, equipos y procedimientos | PI 011-3, figura 1 (apartado 6) y 4.5 | Leído |
| 11.10(a): validación para asegurar exactitud, fiabilidad, funcionamiento previsto constante y capacidad de detectar registros no válidos o alterados | 21 CFR 11.10(a), eCFR | Leído |
| Definición didáctica de validar («demostrar con pruebas documentadas… para su uso previsto») | Redacción propia apoyada en 11.10(a), PI 011-3 nota 24 y FDA 2018 P3 («intended use») | Leído; la frase es explicación, no cita literal |
| Tres niveles de prueba del software: unitarias, integración de módulos, aceptación del cliente | PI 011-3, 12.1 | Leído |
| Los guiones relacionados con la URS son responsabilidad del usuario regulado | PI 011-3, nota 22 | Leído |
| Aceptación formal tras las pruebas y paso controlado al entorno operativo | PI 011-3, 13.6 | Leído |
| No se puede atribuir alta confianza basándose solo en pruebas de funcionamiento; la calidad se construye en el desarrollo | PI 011-3, 7.1 | Leído |
| En sistemas críticos o complejos, las pruebas de IQ, OQ y PQ dan confianza limitada sobre funciones y código ocultos | PI 011-3, 13.3 | Leído |
| Cualificar la plataforma del MES no demuestra que una receta (MPCR) calcule bien; cada flujo CGMP es un uso previsto que se valida | FDA 2018, pregunta 3 | Leído |
| Definiciones de IQ, OQ y PQ | Anexo 15, glosario | Leído |
| «La aplicación debe validarse; la infraestructura informática debe cualificarse» | Anexo 11, principio | Leído |
| El anexo 15 remite al anexo 11 para los sistemas informatizados | Anexo 15, principio | Leído |
| Reactor R-105, terminal TP-12, HIS-01, BL-204, AO-3, KF-02, MES-1, HC-207 | Valor de ejemplo declarado (códigos ficticios) | — |
| Gestión de riesgos en todo el ciclo de vida; extensión de la validación según evaluación de riesgos justificada y documentada; paciente, integridad de datos y calidad | Anexo 11, apartado 1 | Leído |
| Profundidad y alcance de la validación según diversidad, complejidad y criticidad | ICH Q7, 5.40 | Leído |
| Inventario con nombre, función, criticidad (directo, indirecto, ninguno) y estado de validación; ejemplos de sistemas críticos | PI 041-1, 9.3 expectativa 2 | Leído |
| Validar no es importante para un procesador de textos usado solo para redactar SOP | FDA 2003, III.C.1 | Leído |
| Q9(R1) anexo II.4: usos para sistemas informatizados (extensión de la validación, parámetros críticos, requisitos y diseño, revisión de código, extensión y métodos de prueba, fiabilidad de registros y firmas) | ICH Q9(R1), anexo II.4 | Leído |
| AMFE: evaluación de modos de fallo posibles y su efecto probable (I.2); FMECA añade gravedad, probabilidad y detectabilidad y da una puntuación relativa (I.3) | ICH Q9(R1), anexo I.2 y I.3 | Leído |
| ICH Q9(R1) no fija fórmula ni escala | ICH Q9(R1) | Buscado «risk priority», «RPN» en el texto: no aparecen |
| IPR = D·G·F; producto de frecuencia, gravedad y detectabilidad; escalas con valores del 1 al 10; cuanto menor la capacidad de detección, mayor el índice | NTP 679 (INSST), tablas 1-3 y texto | Leído en la ficha HTML |
| Escala 1-10, notas G, F, D de los seis fallos y de las acciones, criterio NPR ≥ 100 o G ≥ 9 | Valor de ejemplo declarado | — |
| NPR 168, 72, 135, 40, 24, 84; nuevos 16, 18, 36; máximo 1000 | Cálculo | Recalculado (`src_csv/calc.py`) |
| Anexo 11 4.7: límites de parámetros, límites de datos y gestión de errores | Anexo 11, 4.7 | Leído |
| GAMP de pago, de ISPE; PI 011-3 reproduce con permiso la tabla 2.1 de categorías de GAMP 4 (apéndice M4) | PI 011-3, 4.7 y 15.1 | Leído |
| Texto de cada categoría 1-5 de GAMP 4 (versión, firmware configurable o no, auditoría «consider» en la 3 y «normally» en la 4, lo bespoke como 5) | PI 011-3, tabla 2.1 | Leído |
| Muchos sistemas abarcan varias categorías; enfoque global por riesgo para sistemas críticos; si no encaja, criterio del usuario; interés del inspector | PI 011-3, 15.2 | Leído |
| La tabla no menciona hojas de cálculo | PI 011-3 | Buscado «spreadsheet», «Excel»: no aparecen |
| La guía CSA cita «GAMP5 – A Risk-Based Approach to Compliant GxP Computerized Systems (Second Edition)» | FDA CSA 2026, nota 25 | Leído |
| Que GAMP 5 haya cambiado las categorías | No verificado | Solo fragmentos de buscador (dicen que GAMP 5 no usa la categoría 2, con desacuerdo sobre desde qué edición); en la lección se dice que no se ha podido leer |
| La lección corta del nivel no tiene categoría 2 | src/content/nivel21.ts | Leído |
| Anexo 11 3.1, 3.2, 3.3, 4.5 (acuerdos formales, informática propia análoga, auditoría según riesgo, revisión de documentación COTS, sistema de calidad del proveedor) | Anexo 11 | Leído |
| COTS: software comercial cuya idoneidad respalda un amplio espectro de usuarios; definición de software a medida | Anexo 11, glosario | Leído |
| Software comercial cualificado no requiere el mismo nivel de pruebas | ICH Q7, 5.42 | Leído |
| Cuestionarios, auditorías compartidas, grupos de usuarios; la certificación del QMS por sí sola difícilmente será el árbitro final para sistemas críticos | PI 011-3, 11.5 | Leído |
| No confiar solo en los paquetes de cualificación del proveedor; pruebas propias de integridad de datos en uso normal y previsto | PI 041-1, 9.3 expectativa 4 | Leído |
| Guía CSA vigente: «Computer Software Assurance for Production and Quality Management System Software», final, febrero de 2026, emitida el 3-02-2026; sustituye a la de 24-09-2025 | Página FDA y PDF | Leído; la página dice «Content current as of 02/03/2026», no hay revisión posterior en esa página |
| Preparada por CDRH y CBER en consulta con CDER, OCP y OII | PDF CSA, nota 1 | Leído |
| Alcance: software de producción o del sistema de gestión de calidad de productos sanitarios; no cubre software que es producto sanitario | PDF CSA, III Scope | Leído |
| No vinculante | PDF CSA, encabezado y I | Leído |
| Part 820 incorpora ISO 13485:2016; regla en vigor el 2-02-2026 | PDF CSA, nota 3 | Leído (no se usa en el texto salvo como contexto del informe) |
| Ejemplos de alto riesgo de proceso (mantener parámetros como temperatura o presión; medir o decidir aceptabilidad con poca o ninguna revisión humana) y de no alto riesgo (registrar datos para vigilancia) | PDF CSA, V.A.2 | Leído |
| Pruebas no guionizadas (escenarios, experiencia, adivinación de errores, exploratorias) y guionizadas; para alto riesgo guionizadas o híbridas; para no alto riesgo, no guionizadas; no exclusivo | PDF CSA, V.A.4 | Leído |
| Aprovechar el trabajo del proveedor y los controles del proceso | PDF CSA, V y V.A.5 | Leído |
| Contenido del registro y «no más evidencia de la necesaria para el riesgo» | PDF CSA, V.A.6 | Leído |
| Ejemplo de la hoja de cálculo COTS: anotar lecturas frente a fórmulas propias | PDF CSA, V.A.1 | Leído |
| Registro dinámico: permite modificar fórmulas o entradas de una hoja de cálculo | FDA 2018, pregunta 1.d | Leído |
| Borrador de anexo 11: alcance incluye principios activos (1); 4.3 estrategia y esfuerzo según uso previsto y riesgos | Borrador anexo 11 (2025) | Leído; su estado de borrador a nov-2026 se remite a la lección `normas-integridad-a-fondo`, que lo comprobó en EudraLex |
| Fórmula de la hoja HC-207 y entradas (120,0 kg; 98,5 %; 101 %) | Valor de ejemplo declarado | — |
| 121,83 kg; 1,22 kg (fórmula errónea); 260,42 kg (quiz); 118,81 kg (plant) | Cálculo | Recalculado con python |
| Balanzas, pH-metros y equipos sencillos que imprimen: original firmado y fechado, con identificación, adjunto al registro | PI 041-1, 8.9.1 | Leído |
| En algunos PLC y sistemas de lógica básica la prueba funcional puede dar garantía suficiente | PI 011-3, 13.3 | Leído |
| Anexo 11 apdo. 2: cooperación entre dueño del proceso, dueño del sistema, QP e informática | Anexo 11, 2 | Leído |
| PQ como prueba de aceptación del usuario en su entorno, frente a la URS | PI 011-3, 4.8 | Leído |
| Registros de formación de los operadores como parte de la documentación de validación | PI 011-3, 15.3 | Leído |
| Comunicar y evaluar todas las incidencias, no solo fallos y errores de datos | Anexo 11, 13 | Leído |
| Registrar e investigar incidencias que puedan afectar a la calidad o a la fiabilidad de registros | ICH Q7, 5.46 | Leído |
| Quiz NPR 140, 144 y 48 | Cálculo | Recalculado |

## Querido incluir y dejado fuera

- Las categorías de GAMP 5 (primera y segunda edición), su fecha de publicación y el concepto de «pensamiento crítico» de GAMP 5: de pago; solo fragmentos de buscador.
- La escala y los criterios de la IEC 60812 (norma de pago).
- Valores de NPR «aceptables» de referencia: no hay ninguno oficial; el criterio es de ejemplo.
- La guía de la FDA «General Principles of Software Validation» (2002): no leída en esta sesión; solo se menciona indirectamente porque la guía CSA la complementa (no se cita en la lección).
- Detalle de URS, IQ/OQ/PQ, matriz de trazabilidad, control de cambios y revisión periódica: no se repite porque está en `ciclo-de-vida-validacion`, `validacion-a-fondo` y `sistemas-en-operacion`.
- Guías MHRA y OMS TRS 1033: no aportaban nada específico al enfoque por riesgo de la validación que no estuviera ya en PI 041-1; no se citan.
