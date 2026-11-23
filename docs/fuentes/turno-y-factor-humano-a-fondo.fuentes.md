# Fuentes: turno-y-factor-humano-a-fondo

Copias leídas en `scratchpad/lecciones/tmp-turno/` (ch2.txt, ntp455.txt, ntp502.txt, ntp360.txt, ntp619.txt, ntp445.txt, ntp504.txt, et.txt), más copias ya descargadas en esta sesión: `scratchpad/dl/q7.txt` (ICH Q7), `scratchpad/lecciones/src_desv/ch1.txt` (EudraLex cap. 1) y `scratchpad/src_alcoa/pics041.txt` (PIC/S PI 041-1). Todas leídas en su texto.

URLs:
- EudraLex vol. 4, parte I, cap. 2 (2014): https://health.ec.europa.eu/document/download/11f4f8e6-a6e9-4897-afe3-f21e1dc56cb8_en?filename=2014-03_chapter_2.pdf
- EudraLex vol. 4, parte I, cap. 1: página de EudraLex vol. 4 en health.ec.europa.eu (copia src_desv/ch1.txt)
- ICH Q7: https://database.ich.org/sites/default/files/Q7%20Guideline.pdf
- NTP 455: https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/13-serie-ntp-numeros-436-a-470-ano-1998/ntp-455-trabajo-a-turnos-y-nocturno-aspectos-organizativos
- NTP 502: https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/14-serie-ntp-numeros-471-a-505-ano-1999/ntp-502-trabajo-a-turnos-criterios-para-su-analisis
- NTP 360: https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/10-serie-ntp-numeros-331-a-365-ano-1995/ntp-360-fiabilidad-humana-conceptos-basicos
- NTP 619: https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/18-serie-ntp-numeros-611-a-645-ano-2003/ntp-619-fiabilidad-humana-evaluacion-simplificada-del-error-humano-i-
- NTP 445: https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/13-serie-ntp-numeros-436-a-470-ano-1998/ntp-445-carga-mental-de-trabajo-fatiga
- Estatuto de los Trabajadores (RDL 2/2015), texto consolidado: https://www.boe.es/buscar/act.php?id=BOE-A-2015-11430
- PIC/S PI 041-1 (1 de julio de 2021), Good practices for data management and integrity (picscheme.org)

| Afirmación del texto | Fuente | Cómo se comprobó |
|---|---|---|
| Trabajo a turnos: grupos sucesivos, cada uno con su jornada, para cubrir entre 16 y 24 h diarias | NTP 455, introducción | Leído en la ficha HTML |
| Sistemas discontinuo (mañana y tarde, para de noche y fin de semana), semicontinuo (tres turnos, descanso el domingo), continuo (todo el día, todos los días, más de tres turnos y noche) | NTP 455 | Leído en la ficha HTML |
| «Una planta química de proceso continuo suele trabajar en el último» | Razonamiento a partir de la NTP 455 (necesidades productivas o del proceso) | Afirmación general, sin cifra; matizado con «las horas las fija tu empresa» |
| Enfriamiento de cristalización de horas y secado de vacío que sigue de noche | Proceso ficticio FX-101 del simulador (enfriamiento ≥ 120 min, BRIEF-N12) | Valor de ejemplo del proceso ficticio |
| Trabajo nocturno 22:00 a 06:00 | Estatuto de los Trabajadores, art. 36.1 | Leído en el BOE consolidado |
| Trabajador nocturno: al menos 3 h de la jornada diaria o un tercio de la jornada anual en periodo nocturno | ET art. 36.1 | Leído en el BOE |
| Trabajador nocturno: máximo 8 h diarias de promedio en 15 días; sin horas extraordinarias | ET art. 36.1 | Leído en el BOE |
| Definición legal de trabajo a turnos | ET art. 36.3 | Leído en el BOE |
| En procesos continuos de 24 h, nadie más de dos semanas seguidas de noche salvo adscripción voluntaria | ET art. 36.3 | Leído en el BOE |
| Mínimo 12 h entre jornadas | ET art. 34.3 | Leído en el BOE |
| Jornada continuada de más de 6 h: descanso de al menos 15 min | ET art. 34.4 | Leído en el BOE |
| Excepciones por jornadas especiales | ET art. 34.7 (remitido desde 36.1) y NTP 455 (RD 1561/1995, art. 19) | Leído; no se detalla en el texto |
| En el cambio de turno las consignas pueden no transmitirse con precisión; por la prisa no se comunican incidencias; puede originar errores o incidentes | NTP 455, «Incidencia en la actividad profesional» | Leído en la ficha HTML (paráfrasis fiel) |
| Lista de lo que se transmite en el relevo (estado, pendientes, incidencias, permisos, alarmas inhibidas, muestras) | Contenido pedido en el encargo; NTP 455 habla de «consignas» e «incidencias»; los ejemplos son valores de ejemplo | Práctica de planta, sin norma concreta; ejemplos inventados |
| El permiso de trabajo no supera el turno; si el trabajo sigue se renueva | NTP 562, citada en la lección `permisos-a-fondo` (src/content/nivel15-permisos.ts) | Leído en la lección del repo; no se volvió a descargar la NTP 562 |
| Alarmas inhibidas y fuera de servicio quitan una capa de protección y se repasan en cada relevo | Lección `alarmas-y-seguridad-a-fondo` (src/content/nivel13-alarmas.ts) | Leído en la lección del repo (remisión) |
| Registrar las actividades de calidad en el momento en que se hacen | ICH Q7, 2.15 | Leído en el PDF |
| Ventajas de de palabra y por escrito | Razonamiento propio | Sin norma; la guía del HSE solo se vio en fragmento (ver abajo), no se usa |
| Tres fuentes que deben cuadrar (parte, registro, planta) y «manda el registro y los instrumentos» | Modo relevo del simulador Nutsche (src/sim/nutsche.ts, HANDOVER_QUESTIONS) | Leído en el código del repo |
| Qué hacer si no cuadra (estado seguro, preguntar, avisar, anotar) | src/sim/nutsche.ts (respuesta «primero»); ICH Q7 2.16 (toda desviación de procedimientos se documenta y explica) | Leído |
| Repetir lo recibido, preguntar, unidades y códigos, una sola fuente, nada de «todo bien» | Prácticas de comunicación | Declarado en el texto como práctica, no requisito de las guías leídas |
| Error humano: comportamiento que excede el límite de tolerancia definido para la seguridad del sistema | NTP 360, «Definiciones» | Leído en la ficha HTML |
| El error no tiene connotación de culpa, que no sirve para determinar causas | NTP 360 | Leído |
| La persona es también elemento de «sobrefiabilidad»: anticipa, confirma y recupera fallos técnicos y errores propios y ajenos | NTP 360 | Leído |
| Clasificación de Norman: deslices (*slips*, acción distinta de la que uno se proponía) y equivocaciones (*mistakes*, error en la intención u objetivos) | NTP 360 | Leído |
| «Pérdida o falta de activación» dentro de los deslices (base del «olvido») | NTP 360, lista de Norman | Leído; la separación como tipo aparte es decisión didáctica, declarada en el texto |
| Violaciones: transgresiones deliberadas, sin intención de daño y no necesariamente censurables, excluidas de la definición | NTP 360 | Leído |
| Lo realizado que se aparta de lo prescrito suele indicar el carácter no funcional de las prescripciones | NTP 360 («la existencia de una variación entre la tarea prescrita y la efectiva... es indicadora del carácter no funcional de las prescripciones») | Leído; paráfrasis |
| Modelo de Rasmussen: niveles de automatismos, reglas o procedimientos y conocimientos, según familiaridad | NTP 360 | Leído |
| «Error humano» es ambiguo y puede encubrir organización del trabajo y diseño del sistema; cada error es un desajuste persona-sistema | NTP 360 | Leído |
| Justificar el error humano tras comprobar que no hay fallo de proceso, procedimiento o sistema | EudraLex vol. 4, cap. 1, 1.4 (xiv) | Leído en la copia src_desv/ch1.txt |
| Sistemas tolerantes: error detectable y recuperable antes de consecuencias inaceptables | NTP 360 | Leído |
| Procedimientos en lenguaje claro e inequívoco, específicos de la instalación | EudraLex cap. 1, 1.8 (iv) | Leído |
| Lista de comprobación del permiso de trabajo (NTP 562) | Lección `permisos-a-fondo` | Leído en el repo |
| Segunda persona en pasos críticos | ICH Q7, 6.52 (firmas de quien hace y quien supervisa o comprueba), 8.12 y 8.13 (presenciar o control equivalente) | Leído en el PDF |
| Comprobación adicional de datos críticos tecleados, por segundo operador o por el sistema | ICH Q7, 5.45 | Leído |
| Equipo identificado con su contenido y estado de limpieza | ICH Q7, 5.26 | Leído |
| Priorizar señales como mejora de la interrelación persona-tarea | NTP 360 | Leído |
| Factores que influyen: distracciones, interrupciones, ambiente físico (calor, ruido), organización de los turnos; factores de recuperación: redundancia de personas, alarmas | NTP 619 | Leído en la ficha HTML |
| Fatiga mental: disminución temporal de la eficiencia funcional mental y física, según intensidad y duración de la actividad precedente; se manifiesta en errores | NTP 445 | Leído |
| Fatiga: trabajo propio de inexpertos con errores inexplicables sin que la persona note menor eficiencia | NTP 445 | Leído |
| Lapsus: bloqueos que aumentan con la exigencia prolongada de atención | NTP 445 | Leído |
| Ritmos circadianos; temperatura corporal mínima 35,5-36 °C entre las 2 y las 3; adaptación nunca completa | NTP 455 | Leído |
| Sueño diurno: menos sueño profundo, fatiga acumulada que puede hacerse crónica | NTP 455 | Leído |
| Menor rendimiento de noche, sobre todo entre las 3 y las 6; menos atención, toma de decisiones, rapidez y precisión | NTP 455 | Leído |
| Turnos de 12 horas no muy recomendables por fatiga excesiva | NTP 455, «Semana reducida» | Leído |
| Medidas organizativas (tareas imprescindibles de madrugada, evitar alta atención 3-6, noche y tarde no más largos que mañana, calendario con antelación, comida caliente, vigilancia médica) | NTP 455 | Leído |
| Consejos individuales (oscuridad y silencio, horario regular de comidas, nada de comidas pesadas, sin alcohol ni cafeína 2-3 h antes de acostarse, ejercicio) | NTP 455 | Leído |
| Consejos de turno de noche (leer dos veces, pedir la verificación, decirlo si no estás en condiciones) | Razonamiento a partir de NTP 455 y NTP 445 | Sin cifra; recomendación didáctica |
| «La correcta fabricación... depende de las personas» | EudraLex cap. 2, Principio | Leído en el PDF |
| Cap. 2 es para medicamentos; en API la guía es ICH Q7 | Portada del cap. 2 (medicinal products); ICH Q7 | Leído |
| Tabla de equivalencias: 2.1/3.10, Principio y 2.3/3.11, 2.10, 2.11/3.12 (formación básica GMP, formación de nuevos, continuada, eficacia, programas, registros) | EudraLex cap. 2; ICH Q7 cap. 3 | Leído en los dos PDF |
| ICH Q7 no detalla la formación de mantenimiento y limpieza | ICH Q7 cap. 3 (3.10-3.12 hablan de «personnel» y «employee») | Leído; afirmación de ausencia |
| Firmar la formación antes de hacer la tarea | Q7 3.12 y cap. 2 2.11 (registros), cap. 1 1.8 (v) (operadores formados) | Leído; el «antes» es la consecuencia práctica, no una frase literal de las guías |
| Volver a formarse con una versión nueva del SOP | Práctica habitual (cap. 2, 2.11: formación continuada) | Declarado en el texto como «lo habitual»; sin frase literal |
| Instrucciones para que el fabricante conozca problemas de salud relevantes | EudraLex cap. 2, 2.16 | Leído |
| Ambiente transparente y abierto que anime a comunicar fallos y errores para tomar CAPA | PIC/S PI 041-1, 6.3.1 | Leído en la copia src_alcoa/pics041.txt |
| Culturas abiertas y cerradas | PIC/S PI 041-1, 6.1.3 | Leído |
| Proceso de comunicación y escalado a tiempo de problemas de calidad | EudraLex cap. 2, 2.9 (xiii) | Leído |
| Ejemplo de planta (C-201, lote 26-0418, FQ-203, 60 L, R-204) | Valores de ejemplo declarados, inspirados en HANDOVER_NOTE del Nutsche | Inventado y declarado |
| Quiz: 20:00-04:00 da 6 h nocturnas; 22:00 + 12 h = 10:00; 120/60 = 2 lavados; 22:00-06:00 tiene 3 h en la franja 3-6 | Cálculo con ET 36.1, 34.3 y NTP 455 | Recalculado |

## Fragmentos de buscador (no usados en el texto)
- Guía del HSE británico sobre relevo de turno (hse.gov.uk/humanfactors/topics/shift-handover.htm): según el resumen del buscador, pide relevo cara a cara, en dos sentidos, de palabra y por escrito, y más peso a lo escrito con turnos de 12 h. El host www.hse.gov.uk no es accesible desde esta sesión (curl y WebFetch fallan); no se usa.
- Resúmenes del buscador sobre la NTP 455 y la NTP 445: solo para encontrar las URL; todo lo usado se leyó después en la ficha HTML.

## Lo que quedé fuera por no poder verificarlo o por decisión
- La técnica de «repetir lo recibido» (*read-back*) como requisito: no la encontré en ninguna fuente gratuita leída; queda como práctica de comunicación, declarada así.
- La cifra de Rasmussen citada en la NTP 360 (70-80 % de accidentes mayores atribuidos a «error humano»): está leída, pero es una cita de segunda mano de 1987 y el encargo pide no dar cifras de accidentes; fuera.
- Los datos de la encuesta a enfermeras de la NTP 455 (porcentajes de quejas por turno): no son de planta química; fuera.
- La recomendación de la OIT de voluntariedad del trabajo nocturno a partir de 40 años (citada en la NTP 455): de segunda mano, no leída en la OIT; fuera.
- El sentido de rotación de los turnos (mañana-tarde-noche o al revés): la NTP 455 dice que no hay acuerdo entre autores; fuera para no confundir.
- La siesta nocturna: la NTP 455 la presenta como tendencia sin conclusiones definitivas; fuera.
- Guías de FDA y MHRA sobre error humano en investigaciones: no leídas (MHRA blog fuera de los hosts permitidos); fuera.
- ICH Q9(R1) sobre diseño de equipos no vulnerable al error humano: lo cita la lección de desviaciones, pero no lo releí aquí; fuera.
- Clasificación de Swain (omisión, ejecución, corrección, secuencia, demora) y tipos de acción de la NTP 619: leídas, quitadas por longitud.
- Clasificación de Reason (lapsus como tipo propio): no leída en fuente gratuita; por eso el olvido se presenta como «pérdida de activación» de Norman.
