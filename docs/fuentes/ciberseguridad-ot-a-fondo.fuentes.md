# Fuentes de «ciberseguridad-ot-a-fondo»

Documentos descargados y leídos (texto extraído en `src_ciber/`):

- Kuphaldt, *Lessons in Industrial Instrumentation*, capítulo «Cyber-security in Industrial Measurement and Control Systems» (control.com, licencia CC BY 4.0): https://control.com/textbook/instrumentation-cyber-security/ y sus páginas `stuxnet/`, `motives/`, `glossary-of-cyber-security-terms/`, `design-based-fortifications/`, `policy-based-fortifications/`. Además, de redes: `digital-data-acquisition-and-networks/modbus/`, `digital-data-acquisition-and-networks/ethernet-networks/` y `foundation-fieldbus-instrumentation/ff-design-philosophy/`.
- EudraLex vol. 4, anexo 11 (2011): https://health.ec.europa.eu/system/files/2016-11/annex11_01-2011_en_0.pdf (a11.txt).
- Borrador de anexo 11 en consulta (2025): https://health.ec.europa.eu/document/download/40231f18-e564-4043-94de-c031f813d38b_en?filename=mp_vol4_chap4_annex11_consultation_guideline_en.pdf (a11d.txt) y página de la consulta https://health.ec.europa.eu/consultations/stakeholders-consultation-eudralex-volume-4-good-manufacturing-practice-guidelines-chapter-4-annex_en (cons.html).
- Página EudraLex vol. 4, consultada el 21/11/2026: https://health.ec.europa.eu/medicinal-products/eudralex/eudralex-volume-4_en (vol4.html).
- ICH Q7: https://database.ich.org/sites/default/files/Q7%20Guideline.pdf (q7.txt).
- PIC/S PI 041-1 (1 de julio de 2021): https://picscheme.org/docview/4234 (pics041.txt).
- BOE, textos consolidados y metadatos de la API de datos abiertos: Ley 8/2011 (BOE-A-2011-7630), Real Decreto-ley 12/2018 (BOE-A-2018-12257), Real Decreto 43/2021 (BOE-A-2021-1192). Búsqueda en la API de legislación consolidada (títulos con «ciberseguridad», «redes», «infraestructuras», «resiliencia», «gobernanza», «entidades críticas», «2022/2555», «2022/2557»), con resultados hasta el 19/11/2026.
- Directiva (UE) 2022/2555 (NIS2), texto en español en EUR-Lex: https://eur-lex.europa.eu/legal-content/ES/TXT/HTML/?uri=CELEX:32022L2555 (nis2.txt).
- EMA, «Cyberattack on EMA - update 6», 25/01/2021: https://www.ema.europa.eu/en/news/cyberattack-ema-update-6 (ema_cyber.html).
- Gobierno británico, «Foreign Office Minister condemns Russia for NotPetya attacks», 15/02/2018: https://www.gov.uk/government/news/foreign-office-minister-condemns-russia-for-notpetya-attacks (notpetya_govuk.txt).
- Lecciones existentes leídas para no repetir y enlazar: `src/content/nivel18.ts` (las tres), `nivel13-sistema.ts` (apartados de usuarios, caídas y ciberseguridad básica), `nivel19.ts` (SCADA e historiador, MES), `nivel20.ts` (accesos, copias y archivo).

Hosts que NO respondieron desde esta sesión (error de red): www.cisa.gov, www.enisa.europa.eu, www.incibe.es, www.incibe-cert.es, www.ccn-cert.cni.es, www.ccn.cni.es, csrc.nist.gov, nvlpubs.nist.gov, www.nist.gov, www.ncsc.gov.uk, www.hse.gov.uk, www.isa.org, www.interior.gob.es, www.sec.gov. Por eso la segmentación, las zonas y conductos y la DMZ se explican con el libro de Kuphaldt y con los textos GMP (PIC/S y borrador del anexo 11), no con documentos de CISA, ENISA, INCIBE o CCN-CERT. Un segundo intento de descargar de EUR-Lex el Reglamento de Ejecución (UE) 2020/1125 (sanciones por NotPetya) devolvió una página vacía; no se usa.

| Dato o afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| La diferencia principal entre control industrial y TI es que el control maneja procesos físicos reales; la TI, información | Kuphaldt, Overview | Leído |
| EMA sufrió un ciberataque (2020); nota del 25/01/2021: documentos robados publicados, no en su forma original; correos auténticos, pero seleccionados, agregados y con títulos añadidos | EMA, update 6 | Leído («Further to the cyberattack on EMA last year», fechado 25 January 2021) |
| Tres propiedades confidencialidad, integridad, disponibilidad | Ley 8/2011, art. 15.3 (nombra las tres) | Leído |
| En oficina se suele priorizar la confidencialidad; en planta la disponibilidad e integridad, con la seguridad de las personas por encima | Resumen didáctico. NIST SP 800-82r3 lo dice según secundarios | Solo fragmento de buscador (NIST no accesible). Coherente con Kuphaldt (procesos físicos) y con la lección corta `ciberseguridad-ot`. Sin cifras |
| Hardware industrial con soporte de décadas; sistemas operativos de consumo con vida corta; actualizar interrumpe el control y a veces es imposible | Kuphaldt, Policy-based, «Maintain operating system software» | Leído |
| Cortafuegos de TI suelen usar lista negra y los de control, lista blanca, porque el tráfico legítimo de control es limitado y entre pocos equipos | Kuphaldt, Design-based, «Firewalls» | Leído |
| Cambios en sistemas informatizados: procedimiento, autorizados, documentados y probados | ICH Q7 5.47 | Leído |
| Servidores con sistema operativo sin soporte: aislarlos lo posible; acceso remoto a ellos evaluado | PIC/S PI 041-1, p. 36-37 | Leído |
| 4-20 mA, un cable por instrumento | Lección `scada-e-historiador` y Kuphaldt FF design philosophy | Leído |
| Bus de campo: varios equipos por cable (multi-drop), por turnos, con diagnóstico y alarmas | Kuphaldt, FF design philosophy | Leído |
| Un fallo del cable compartido puede dejar sin control ni medida a todos los equipos de ese cable | Kuphaldt, página del protocolo («if a fault occurs between the controlling PLC and all the field devices, the PLC will lose control (and monitoring) for every one») | Leído |
| Ethernet es IEEE 802.3 | Kuphaldt, Ethernet networks | Leído |
| Protocolos industriales encapsulados en TCP/IP (capa 7) | Kuphaldt, página del protocolo («Modbus TCP standard encapsulates...») | Leído |
| UDP se usa a menudo en datos industriales por ser más simple de implementar en un PLC | Kuphaldt, Design-based, «stateful inspection» | Leído |
| Protocolo de 1979, todavía usado; mensajes con dirección del esclavo, código numérico de función y datos; el equipo entiende y responde a los códigos que recibe; dirección 0 de difusión a todos | Kuphaldt, página del protocolo (Modbus; no se nombra en la lección para no usar marcas) | Leído |
| «En su forma básica no hay contraseña ni nada que diga quién envía la orden» | Deducción de la descripción de la trama en Kuphaldt (ningún campo de identidad ni contraseña) | Leído; es una lectura de la descripción, no una cita literal |
| Air gap: recomendado cuando sea posible; no invencible (USB en la estación de ingeniería); debe incluir portátiles y acceso físico a cables | Kuphaldt, Design-based, «Air gaps» | Leído |
| Cada red a un lado del cortafuegos es una «zona»; el cortafuegos, un «conducto» que solo deja pasar ciertos mensajes; reglas en una ACL | Kuphaldt, Design-based, «Firewalls» | Leído |
| DMZ: servidor/proxy entre dos cortafuegos; prohíbe la comunicación directa red a red; el historiador como servidor de la DMZ; el atacante debe comprometer antes el equipo de la DMZ | Kuphaldt, Design-based, «Demilitarized Zones» | Leído |
| Diodo de datos: solo comunicación en un sentido | Kuphaldt, Design-based y glosario | Leído |
| ISA/IEC 62443 es de pago y no se ha leído; no se citan sus contenidos (ni niveles de seguridad) | Decisión editorial | No se cita nada de la norma |
| Borrador anexo 11: segmentación y cortafuegos estrictos (15.8) y revisión periódica de reglas porque se abren puertos que no se cierran (15.9) | a11d.txt | Leído |
| Ransomware: cifra datos y sistemas y pide rescate; aumento exponencial en la Unión | NIS2, considerando 54 (el texto oficial escribe «ramsonware») | Leído |
| NotPetya, junio de 2017: se disfrazó de operación criminal, objetivo principal desorganizar; objetivos principales en Ucrania; por su diseño indiscriminado afectó a empresas europeas y rusas; costes de cientos de millones de libras | gov.uk, 15/02/2018 | Leído |
| Stuxnet contra PLC que controlaban centrífugas de enriquecimiento; versión 0.5 probablemente introducida por memoria USB; el código alterado manipulaba velocidades de rotor y válvulas mientras las lecturas parecían normales a los operadores | Kuphaldt, Stuxnet y Policy-based «Limit mobile device access» | Leído |
| USB que engañan al ordenador haciéndose pasar por teclado y pueden ejecutar código; controlar USB privados (memorias, cámaras, móviles, teclados) | PIC/S PI 041-1, 9.5, punto 5 | Leído |
| Actualizaciones remotas del proveedor como punto a vigilar; autenticación adicional (token, biometría) para acceso remoto por internet a datos críticos | PIC/S PI 041-1, 9.5 | Leído |
| Seguridad de la cadena de suministro entre las medidas mínimas | NIS2, art. 21.2.d | Leído |
| «El acceso del proveedor está autorizado, limitado en el tiempo, vigilado y registrado» | Buena práctica general; coherente con la lección corta `ciberseguridad-ot` | Sin fuente gratuita leída que lo enumere así; se presenta como práctica, no como requisito |
| Phishing y spear phishing (definiciones) | Kuphaldt, glosario | Leído |
| Formación periódica y evaluar su eficacia con pruebas simuladas | Borrador anexo 11, 15.3 | Leído |
| Amenaza interna: empleados descontentos o despedidos con cuentas abiertas, contraseñas compartidas, contraseñas de fábrica, accesos de atajo (backdoors) | Kuphaldt, Motives y Policy-based | Leído |
| Ley 8/2011 vigente; sectores estratégicos del anexo incluyen industria química y salud; operador crítico: plan de seguridad del operador y responsable de seguridad y enlace (art. 13) | BOE-A-2011-7630 y metadatos API (estatus_derogacion N) | Leído |
| Confidencialidad sobre datos de infraestructuras estratégicas | Ley 8/2011, art. 15.2 | Leído |
| RDL 12/2018 vigente; traspone la Directiva 2016/1148; se aplica a operadores de servicios esenciales de los sectores del anexo de la Ley 8/2011 y a ciertos servicios digitales; INCIBE-CERT como CSIRT de referencia para entidades fuera de la Ley 40/2015 | BOE-A-2018-12257, arts. 1, 2, 11; metadatos API | Leído |
| Los operadores de servicios esenciales los determina la Administración (órganos de la Ley 8/2011) | RDL 12/2018, preámbulo y art. 6 | Leído |
| RD 43/2021 vigente; desarrolla el RDL 12/2018; responsable de la seguridad de la información (art. 7); gestión y notificación de incidentes (arts. 8-10) | BOE-A-2021-1192; metadatos API | Leído |
| NIS2: anexo I, sector sanitario, entidades que fabrican productos farmacéuticos de base y especialidades farmacéuticas (NACE Rev. 2, sección C, división 21) | nis2.txt | Leído |
| NIS2 se aplica en general a entidades de tamaño mediana empresa o mayor | NIS2, art. 2.1 | Leído |
| Transposición antes del 17/10/2024 y aplicación desde el 18/10/2024 | NIS2, art. 41 | Leído |
| A 19/11/2026 no aparece en el BOE ninguna ley que trasponga NIS2 | Búsqueda en la API de legislación consolidada del BOE | Comprobado (ningún título con «ciberseguridad» posterior a 2019 ni con «2022/2555») |
| El Consejo de Ministros aprobó en enero de 2025 un anteproyecto de Ley de Coordinación y Gobernanza de la Ciberseguridad | Buscador web | Solo fragmento de buscador; NO se usa en la lección |
| NIS2 art. 21.2: gestión de incidentes, continuidad y copias, cadena de suministro, ciberhigiene y formación, control de accesos, autenticación multifactor cuando proceda | NIS2, art. 21.2 b, c, d, g, i, j | Leído |
| NIS2 art. 23.4: alerta temprana en 24 h, notificación en 72 h, informe final a más tardar un mes después de la notificación | NIS2, art. 23.4 | Leído |
| Anexo 11 (2011): 12.1 a 12.4 | a11.txt | Leído |
| Anexo 11: 7.1 y 7.2 (protección de datos y copias con restauración comprobada), 13 (incidencias), 16 (continuidad, sistema manual o alternativo documentado y probado) | a11.txt | Leído |
| ICH Q7 5.43, 5.46, 5.48 | q7.txt | Leído |
| PIC/S 9.5: usuarios individuales, prohibición de contraseñas compartidas, cierre por inactividad, cortafuegos con mínimo privilegio y revisión periódica, control de USB | pics041.txt | Leído |
| Borrador anexo 11: consulta abierta el 7/7/2025, cerrada el 7/10/2025 | Página de la consulta | Leído |
| A 21/11/2026 la página de EudraLex sigue listando «Annex 11 Computerised Systems (revision January 2011)» | vol4.html | Leído |
| Borrador anexo 11: 15.8, 15.12, 15.13, 15.17, 15.16, 15.7, 15.20; 11.6 (MFA desde fuera), 11.7 (bloqueo tras intentos fallidos) | a11d.txt | Leído |
| El sistema instrumentado de seguridad debe ir en una plataforma independiente del control normal | Kuphaldt, Design-based, «Control platform diversity» | Leído |
| Plan de respuesta: cadena de mando, restaurar datos y funciones, formas de operar al mínimo | Kuphaldt, Policy-based, «Create response plans» | Leído |
| No reconstruir datos de memoria; hojas de contingencia en papel | Lecciones `sistema-de-control-a-fondo` y `accesos-copias-y-archivo`; anexo 11 (16); ICH Q7 5.49 | Leído |
| Señales raras en pantalla (tabla) y qué hace el operador | Elaboración didáctica a partir de Kuphaldt (lecturas que parecen normales; DoS; robo de credenciales) y del anexo 11 (13) | No es cita; orientación general, subordinada al SOP |
| S = C^n (fuerza de una contraseña) | Kuphaldt, Policy-based, «Utilize effective authentication» | Leído |
| 62^10 / 62^8 = 62^2 = 3844 | Cálculo | Recalculado con python |
| 72 h | NIS2, art. 23.4.b | Leído |
| Copia cada 4 h, última 12:00, ataque 15:30: 3,5 h | Valor de ejemplo declarado; cálculo | Recalculado |
| 3 estaciones × 4 controladores = 12 reglas | Valor de ejemplo declarado; cálculo | Recalculado |
| Equipos CF-220, HMI-03, INT-48, lote 26-1187, usuario «ingenieria01», 900 y 1200 rpm | Ficticios, valores de ejemplo | Declarado |

## Lo que quería incluir y quedó fuera

- Documentos de CISA, ENISA, INCIBE y CCN-CERT sobre segmentación, DMZ y amenazas en industria (hosts inaccesibles). Tampoco el teléfono 017 de ayuda en ciberseguridad de INCIBE (no verificado).
- Contenido concreto de ISA/IEC 62443 (niveles de seguridad SL 1 a 4, reparto de responsabilidades): norma de pago y ningún documento gratuito leído lo reproduce. La lección corta `ciberseguridad-ot` ya los menciona; aquí no se repiten.
- Orden «seguridad, disponibilidad, integridad, confidencialidad» atribuido literalmente a NIST SP 800-82r3: solo visto en fragmentos de buscador.
- Nombre de la farmacéutica afectada por NotPetya (la lección corta habla de «una gran farmacéutica»): no se pudo leer una fuente oficial que lo diga; la lección se limita a lo que dice gov.uk.
- Estado del anteproyecto español de transposición de NIS2 y de la transposición de la Directiva (UE) 2022/2557 (resiliencia de entidades críticas): solo fragmentos de buscador; la lección dice solo lo comprobado en el BOE.
- Plazos de notificación de incidentes del RD 43/2021 y su anexo de niveles de peligrosidad: no se leyeron con detalle y no se incluyen.
- Nombres de protocolos y buses comerciales: excluidos por la regla de no usar marcas.
