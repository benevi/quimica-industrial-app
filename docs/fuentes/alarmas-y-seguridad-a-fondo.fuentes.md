# Fuentes de la lección `alarmas-y-seguridad-a-fondo`

Fecha de consulta: 20 de noviembre de 2026.

## Aviso previo sobre las fuentes

- **No existe ninguna NTP del INSST dedicada a sistemas instrumentados de seguridad (SIS), SIL ni análisis de capas de protección (LOPA).** Se descargó el listado completo de la colección (1234 títulos, páginas `https://www.insst.es/ntp-notas-tecnicas-de-prevencion?start=1…70`) y se buscó por «instrumentad», «capas», «LOPA», «SIL», «integridad», «funcional», «alarma». Lo único con «SIL» es la NTP 794 (un índice acústico, sin relación) y las NTP 946, 1124 y 1220 (seguridad de máquinas, con PFH por hora, no PFD). Por eso la tabla SIL frente a PFD **no se ha incluido**.
- **control.com (libro de Kuphaldt) no es accesible**: curl recibe 403 con un reto de Cloudflare aun con cabeceras de navegador, y la herramienta de lectura web no resuelve el dominio.
- **hse.gov.uk no es accesible.** No se usa ninguna cifra de EEMUA 191 ni del HSE.
- Normas de pago (ISA-18.2, IEC 62682, IEC 61508, IEC 61511, EEMUA 191): no leídas. Lo que se dice de ellas procede de fragmentos del buscador y va marcado; no se toma de ellas ninguna cifra.

Abreviaturas de la tercera columna: **Leído** = leído en el documento descargado; **Fragmento** = solo visto en el resumen del buscador; **Cálculo** = recalculado con python; **Ejemplo** = valor de ejemplo declarado en el texto.

## Documentos leídos

| Clave | Documento | URL |
|---|---|---|
| NTP 86 | Dispositivos de parada de emergencia (1984) | https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/3-serie-ntp-numeros-086-a-120-ano-1984/ntp-86-dispositivos-de-parada-de-emergencia |
| NTP 238 | Los análisis de peligros y de operabilidad en instalaciones de proceso | https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/7-serie-ntp-numeros-226-a-260-ano-1990/ntp-238-los-analisis-de-peligros-y-de-operabilidad-en-instalaciones-de-proceso |
| NTP 328 | Análisis de riesgos mediante el árbol de sucesos | https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/9-serie-ntp-numeros-296-a-330-ano-1994/ntp-328-analisis-de-riesgos-mediante-el-arbol-de-sucesos |
| NTP 342 | Válvulas de seguridad (I): características técnicas | https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/10-serie-ntp-numeros-331-a-365-ano-1995/ntp-342-valvulas-de-seguridad-i-caracteristicas-tecnicas |
| NTP 417 | Análisis cuantitativo de riesgos: fiabilidad de componentes e implicaciones en el mantenimiento preventivo | https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/12-serie-ntp-numeros-401-a-435-ano-1997/ntp-417-analisis-cuantitativo-de-riesgos-fiabilidad-de-componentes-e-implicaciones-en-el-mantenimiento-preventivo |
| NTP 509 | Válvulas de seguridad: modos de fallo y fiabilidad | https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/15-serie-ntp-numeros-506-a-540-ano-2000/ntp-509-valvulas-de-seguridad-modos-de-fallo-y-fiabilidad |
| NTP 527 | Reacciones químicas exotérmicas (I): factores de riesgo y prevención | https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/15-serie-ntp-numeros-506-a-540-ano-2000/ntp-527-reacciones-quimicas-exotermicas-i-factores-de-riesgo-y-prevencion |
| NTP 528 | Reacciones químicas exotérmicas (II): control térmico y refrigeración | https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/15-serie-ntp-numeros-506-a-540-ano-2000/ntp-528-reacciones-quimicas-exotermicas-ii-control-termico-y-refrigeracion |
| NTP 529 | Reacciones químicas exotérmicas (III): análisis de accidentes graves | https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/15-serie-ntp-numeros-506-a-540-ano-2000/ntp-529-reacciones-quimicas-exotermicas-iii-analisis-de-accidentes-graves |
| NTP 1066 | Seguridad inherente: rutas de síntesis y diseño de procesos | https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/31-serie-ntp-numeros-1066-a-1101-ano-2016/ntp-1.066-seguridad-inherente-rutas-de-sintesis-y-diseno-de-procesos |
| RD 1644/2008 | Normas para la comercialización y puesta en servicio de las máquinas, anexo I, 1.2.4.3 y 1.2.6 | https://www.boe.es/buscar/act.php?id=BOE-A-2008-16387 |
| ICH Q7 | Good Manufacturing Practice Guide for Active Pharmaceutical Ingredients | https://database.ich.org/sites/default/files/Q7%20Guideline.pdf |
| Anexo 11 | EudraLex vol. 4, Annex 11, Computerised Systems (2011) | https://health.ec.europa.eu/system/files/2016-11/annex11_01-2011_en_0.pdf |
| Anexo 1 | EudraLex vol. 4, Annex 1, Manufacture of Sterile Medicinal Products (2022) | https://health.ec.europa.eu/system/files/2022-08/20220825_gmp-an1_en_0.pdf |
| Lecciones de la app | `alarmas-y-enclavamientos` y `pid-y-simbologia` (nivel 13), `reactor-a-fondo` (nivel 12), `lazos-a-fondo`, `centrifuga-a-fondo`, `emergencias-y-residuos-a-fondo` | repositorio |

También leídas, sin que aporten nada citado: NTP 946 (solo PFH de máquinas), NTP 446, NTP 456, NTP 510, RD 1215/1997 (anexo I, puntos 1.3 y 1.11).

## Tabla de afirmaciones

| Dato o afirmación | Fuente | Comprobación |
|---|---|---|
| Una alarma exige una respuesta del operador a tiempo; lo que no la exige no es alarma sino aviso o evento | ISA-18.2, vía resúmenes de documentos técnicos de Emerson y Siemens sobre gestión de alarmas (emerson.com `alarm-management-en-57058.pdf`; siemens `WP_Alarm_Management_ISA_18.pdf`) | Fragmento |
| Avalancha de alarmas, alarmas molestas, alarmas permanentes: nombres y descripción | Mismos documentos y blog.isa.org «solve common problems industrial automation alarm systems» | Fragmento (sin cifras) |
| «Desconexión de sistemas de seguridad a causa de frecuentes falsas alarmas», entre los errores humanos y de organización | NTP 238 | Leído |
| Bhopal: entre las deficiencias, «desconectada la alarma de temperatura del depósito» | NTP 529 | Leído |
| Tipos de alarma: alta, baja, desviación, velocidad de cambio | Guía de estudio ISA-CAP (open-exam-prep.com) que enumera «High, Low, Deviation, Rate-of-Change» | Fragmento |
| Alarmas de discrepancia y de fallo de instrumento | Sin fuente localizada; descripción conceptual de uso común en sistemas de control | **Sin fuente leída ni fragmento**; se describe solo la idea, sin cifras |
| Códigos TAH, TAHH, LSHH, XV, TV, PV, PSV, TK-490 y posiciones de fallo de TV-401A (FC), TV-401B (FO), PV-402 (FO), XV-405 (FC) | Lección `pid-y-simbologia` de la app (reactor ficticio R-401) | Leído en el repositorio. Etiquetas nuevas inventadas aquí: TT-412/TAHH-412, AI-413, XV-411, TALL-401, PAHH-402, HS-400, M-401 |
| Valores de alarma 65, 55, 70 °C; margen ±3 °C; límite 2 °C/min | Valor de ejemplo declarado | Ejemplo |
| Cuenta 1: 60 + 3 = 63; 60 − 3 = 57; con consigna 40: 43 y 37 | Cálculo | Cálculo |
| Cuenta 2: (63 − 58) / 2 = 2,5 °C/min, mayor que 2 | Cálculo | Cálculo |
| Un termopar con circuito abierto se detecta llevando la señal al 0 o al 100 % de la escala; lo más usual es la pérdida gradual de precisión, que solo se detecta recalibrando o comparando con otro termopar | NTP 528 | Leído |
| La prioridad se basa en la gravedad de la consecuencia y en el tiempo de respuesta | Documento técnico de Emerson y guía ISA-CAP | Fragmento |
| Tabla de prioridades (cuatro niveles, tiempos de 10 y 30 min, ejemplos) | Valor de ejemplo declarado | Ejemplo |
| Estados: normal, sin reconocer, reconocida, vuelta a normal sin reconocer | ISA-18.2, vía documentación de Iconics («ISA 18.2 Alarm State Transition Diagram») y resumen «Understanding ISA-18.2» | Fragmento |
| Inhibición temporal (*shelving*): la inicia el operador, con motivo y temporizador, bajo requisitos administrativos; «fuera de servicio» por mantenimiento | Documentación de Emerson Ovation y resumen de ISA-18.2 | Fragmento |
| La señal de aviso de presión diferencial «should not be overridden without assessment»; debe haber un procedimiento con los pasos a seguir; los retardos de alarma se evalúan y justifican | Anexo 1, punto 4.16 | Leído |
| Banda muerta (histéresis) y retardos de entrada y de salida evitan el traqueteo | Guía ISA-CAP y blog.isa.org | Fragmento (no se usan sus cifras del 1 % ni de 5 s) |
| Cuenta 3: 65 − 1 = 64 °C; oscilación 64,6–65,2; retardo de 10 s y pico de 3 s | Valor de ejemplo declarado y cálculo | Ejemplo y cálculo |
| Pasos ante una alarma (mirar, entender, comprobar, actuar, avisar, anotar) | Lección `alarmas-y-enclavamientos` (reconocer, diagnosticar, actuar) ampliada; práctica general | Sin norma leída; es criterio operativo, no dato |
| A la «detección y actuación del operario» se le asigna probabilidad de fallo 10⁻¹, «muy alta» | NTP 328, ejercicio 1 | Leído |
| Permisivo frente a disparo: definiciones | Sin fuente gratuita leída; distinción conceptual | **Sin fuente leída** (la búsqueda no devolvió definición); se explica con ejemplos |
| Tabla de permisivos y disparos por equipo | Ejemplos típicos declarados. Tapa de centrífuga con bloqueo y enclavamiento de vibración: lección `centrifuga-a-fondo` | Ejemplo; coherencia leída en el repositorio |
| Matriz de causa y efecto de R-401 (8 filas) | Valor de ejemplo declarado («ejemplo inventado») | Ejemplo |
| Sin agitación el reactivo se acumula; conviene unir la válvula de reactivos con el agitador para detener la adición si falla | NTP 527 | Leído |
| Con la masa fría la reacción va lenta y el reactivo se acumula | Lección `reactor-a-fondo` (que cita NTP 527 y 528) | Leído en el repositorio |
| Caso del óxido de etileno: indicador de flujo y alarma desconectados, válvula manual olvidada, explosión, dos heridos graves, «negligencia de los responsables» | NTP 529 | Leído |
| Reglas del puente: autorización escrita, medida compensatoria, tiempo limitado, registro | Lección `alarmas-y-enclavamientos`; práctica general. Apoyo parcial: anexo 1, 4.16 (no anular sin evaluación) | Sin norma leída que lo detalle; presentado como «lo habitual, lo concreta tu SOP» |
| Lista de siete capas de protección | Lección `alarmas-y-enclavamientos` (seis capas) desdoblando contención y emergencia; NTP 1066 (figura 1, capas de protección); NTP 328 (sistemas automáticos, alarmas con respuesta de operarios, barreras de contención) | Leído (concepto); el orden es el de la lección existente |
| Siempre existe la posibilidad de que fallen a la vez todas las capas | NTP 1066 | Leído |
| Modelo del queso suizo | Conocimiento general (modelo de J. Reason) | **No leído en fuente**; usado solo como analogía |
| Si deben fallar varias cosas a la vez, la probabilidad es el producto | NTP 328 | Leído |
| Cuenta 4: 0,1 × 0,01 = 0,001 | Valor de ejemplo declarado y cálculo | Cálculo |
| Evitar fallos de causa común entre elementos de seguridad | NTP 527 | Leído |
| LOPA: nombre y carácter del método (semicuantitativo, capas independientes) | Página de TÜV SÜD España | Fragmento |
| SIS con sensores, lógica y elementos finales; SIF como función concreta; independencia del control básico | IEC 61511, vía resúmenes (TÜV SÜD; copia de IS/IEC 61511 en law.resource.org) | Fragmento |
| Instrumentos de temperatura independientes y redundantes en el reactor | NTP 527 | Leído |
| Sensores duplicados o triplicados, con votación de dos tercios | NTP 509 | Leído. Que un sensor averiado no decide por sí solo es deducción lógica propia |
| PFD = fallos en demanda / demandas («indisponibilidad por demanda») | NTP 417 | Leído |
| Factor de reducción del riesgo = 1 / PFD | Deducción aritmética (si falla 1 de cada N demandas, el suceso es N veces menos frecuente); coincide con resúmenes de Yokogawa y exida | Cálculo; fórmula también vista en fragmento |
| 1/0,1 = 10; 1/0,01 = 100; 1/0,005 = 200 | Cálculo | Cálculo |
| SIL con cuatro niveles, del 1 al 4; más nivel, menor PFD exigida | Wikipedia y resúmenes de Yokogawa | Fragmento. **No se dan las bandas numéricas** |
| Fallo en espera: válvulas de seguridad, alarmas, grupos electrógenos; por corrosión, suciedad, envejecimiento; pueden probarse periódicamente | NTP 417 | Leído |
| Las válvulas de seguridad pueden pegarse por sedimentos; la fiabilidad mejora con pruebas e inspecciones periódicas | NTP 509 | Leído |
| Prueba periódica: comprobar la cadena completa | Resúmenes sobre IEC 61511 | Fragmento |
| Descarga segura de la válvula de seguridad, donde no cause riesgos; evitar válvula de cierre entre el equipo y su válvula de seguridad | NTP 342 | Leído |
| Disco y válvula alivian hacia TK-490 | Lección `pid-y-simbologia` | Leído en el repositorio (ficticio) |
| Seta roja sobre fondo amarillo; queda enclavada al pulsarla; la parada de emergencia puede no interrumpir circuitos cuya interrupción genere peligro (ejemplo: refrigeración) | NTP 86 | Leído |
| Parada de emergencia: parar el proceso peligroso en el menor tiempo posible sin crear nuevos riesgos; el desbloqueo no vuelve a poner en marcha la máquina; apoya otras medidas y no las sustituye | RD 1644/2008, anexo I, 1.2.4.3 | Leído |
| Lo que la seta no hace (no apaga, no vacía, no frena la reacción lanzada) | Razonamiento propio | Sin fuente; consecuencia lógica |
| Tabla de estado seguro de R-401 | Valor de ejemplo declarado; posiciones coherentes con `pid-y-simbologia` | Ejemplo |
| Sin agitación hay mala transferencia de calor | NTP 527 | Leído |
| Fallos de servicios: corte eléctrico, ausencia de nitrógeno, ausencia de aire comprimido de instrumentación | NTP 238 | Leído |
| Fallo del agitador por fallo de energía eléctrica | NTP 527 | Leído |
| Válvula neumática: sin aire el muelle la lleva a cerrada o abierta al fallo; vapor cierra, agua abre | Lección `lazos-a-fondo`; resúmenes sobre el libro de Kuphaldt (control.com, «valve failure mode») | Leído en el repositorio; Fragmento |
| Una masa sin agitar puede separarse en capas que reaccionan rápida y peligrosamente al restablecer la agitación | NTP 527 | Leído |
| ICH Q7 no usa la palabra «alarm» | ICH Q7 (búsqueda en el texto completo: cero apariciones) | Leído |
| ICH Q7 6.52 (resultados reales de parámetros críticos; desviaciones), 8.15 (desviación documentada y explicada; crítica investigada), 5.46 (incidentes de sistemas informatizados) | ICH Q7 | Leído |
| Anexo 11, punto 13: todos los incidentes se comunican y evalúan | Anexo 11 | Leído (el anexo 11 tampoco usa la palabra «alarm») |
| Anexo 1, 5.2: las alarmas de proceso y equipo se reconocen y se evalúan por tendencias; las críticas, de inmediato | Anexo 1 | Leído |
| Cuándo una alarma lleva a desviación | Aplicación de ICH Q7 8.15 y 6.52; criterio, no cita | Razonamiento apoyado en lo leído |
| Ejemplo de planta (60,5 a 62,9 °C en un minuto = 2,4 °C/min; 63,1; 66,8; 70 °C) | Valor de ejemplo declarado | Cálculo de coherencia |
| Cuestionario: 70 + 4 = 74; (61 − 52)/3 = 3; 80 − 1,5 = 78,5; 1/0,004 = 250; 0,1 × 0,02 = 0,002 | Cálculo | Cálculo con python |

## Lo que quería incluir y dejé fuera por no poder verificarlo

- **Tabla SIL frente a PFD y factor de reducción del riesgo** (bandas numéricas por nivel): solo vista en fragmentos del buscador (Yokogawa, Wikipedia, una tesis). Ninguna NTP ni otro documento gratuito accesible la reproduce.
- **Nomenclatura de votación 1oo2 y 2oo3** y su efecto sobre disparos en falso: solo en fragmentos. Se da únicamente la idea de «dos de cada tres» que sí recoge la NTP 509.
- **Cifra de alarmas por operador y hora** atribuida a EEMUA 191 y al HSE: no vista reproducida; hse.gov.uk no accesible.
- **Cifras orientativas de banda muerta y retardo** (1 % del rango, 5 s, 60 s): solo en fragmento.
- **Contenido de la NTP sobre LOPA**: esa NTP no existe en la colección del INSST.
- **Explicaciones del libro de Kuphaldt** (alarmas, SIS, pruebas, posición de fallo de válvulas): control.com inaccesible.
- **Frecuencias de prueba** de enclavamientos y de válvulas de seguridad, e inspecciones periódicas del Reglamento de equipos a presión: no se consultó el texto, así que no se da ningún plazo.
- **Qué mantiene en marcha el sistema de control durante un corte eléctrico** (baterías, SAI): sin fuente.
- **Requisitos de 29 CFR 1910.119** sobre pruebas de alarmas y enclavamientos: accesible en ecfr.gov pero no leído; norma de EE. UU., fuera del marco de la lección.
