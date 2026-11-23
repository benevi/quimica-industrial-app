# Fuentes de la lección «Almacenamiento, emergencias y residuos a fondo» (emergencias-y-residuos-a-fondo)

Sesión de verificación: 20 de noviembre de 2026. Los documentos se descargaron con curl desde www.boe.es y www.insst.es y se leyeron en texto (HTML del BOE limpiado con Python; PDF con pdftotext). Los pictogramas de salvamento del RD 485/1997 se miraron en la imagen del BOE. Los cálculos se rehicieron con Python. «Leído» significa leído en el documento descargado.

Abreviaturas de las URL:

- RAPQ: Real Decreto 656/2017, texto consolidado, https://www.boe.es/buscar/act.php?id=BOE-A-2017-8755
- RD 485: https://www.boe.es/buscar/act.php?id=BOE-A-1997-8668
- RIPCI: Real Decreto 513/2017, https://www.boe.es/buscar/act.php?id=BOE-A-2017-6606
- LPRL: Ley 31/1995, https://www.boe.es/buscar/act.php?id=BOE-A-1995-24292
- RD 840: https://www.boe.es/buscar/act.php?id=BOE-A-2015-11268
- Ley 7/2022: https://www.boe.es/buscar/act.php?id=BOE-A-2022-5809
- RD 117: https://www.boe.es/buscar/act.php?id=BOE-A-2003-2515
- LER: Decisión 2014/955/UE, https://www.boe.es/doue/2014/370/L00044-00086.pdf
- FDS 2020/878: Reglamento (UE) 2020/878 (anexo II de REACH), https://www.boe.es/doue/2020/203/L00028-00058.pdf
- Ley de Aguas: Real Decreto Legislativo 1/2001, https://www.boe.es/buscar/act.php?id=BOE-A-2001-14276
- Directriz 2026: Orden INT/1070/2026, https://www.boe.es/buscar/act.php?id=BOE-A-2026-21146
- BP 2023: INSST, «Buenas prácticas para el almacenamiento de productos químicos peligrosos», abril de 2023, https://www.insst.es/documents/94886/5326464/Buenas+pr%C3%A1cticas+para+el+almacenamiento+de+productos+qu%C3%ADmicos+peligrosos+2023.pdf
- NTP 237, 334, 458, 479, 536: https://www.insst.es/documents/d/portal-insst/ntp_NNN-pdf (con NNN = número de la nota)
- NTP 500: https://www.insst.es/documents/94886/191012/NTP+500+Prevenci%C3%B3n+del+riesgo+en+el+laboratorio+elementos+de+actuaci%C3%B3n+y+protecci%C3%B3n+en+casos+de+emergencia.pdf/65abcf4f-4227-4684-bf90-769eb5f8304e?version=1.0
- Socorrismo 2014: INSHT, «Socorrismo laboral y primeros auxilios», noviembre de 2014, https://www.insst.es/documents/94886/789635/socorrismo+laboral.pdf/616f0089-852b-48cc-9151-a52b4ad46f40?t=1605802873353
- INSST Emergencias: página «Emergencias» del portal, https://www.insst.es/materias/riesgos/seguridad-en-el-trabajo/emergencias
- Erga FP 107: INSST, Erga Formación Profesional n.º 107 (2020), «Prevención de incendios», https://www.insst.es/documents/94886/705845/Erga+Formaci%C3%B3n+Profesional.+N%C3%BAmero+107.+Prevenci%C3%B3n+de+incendios

## Parte 1. Almacenamiento

| Afirmación de la lección | Documento y apartado | URL | Cómo se comprobó |
|---|---|---|---|
| Norma general: solo se almacenan juntos productos de la misma clase de peligro y si no hay reacción peligrosa entre ellos | BP 2023, apartado 2.2 | BP 2023 | Leído |
| Incompatibles: sustancias cuya mezcla provoca reacciones violentas, por calentamiento o por emisión de gases inflamables o tóxicos; se almacenan separadas | NTP 479, apartado «Incompatibilidad» | NTP 479 | Leído |
| Ácidos fuertes con bases fuertes; oxidantes con materias inflamables | NTP 479, tabla 3 | NTP 479 | Leído. «Con mucho calor» para ácido y base es explicación propia (la nota habla de calentamiento en general) |
| Ácido clorhídrico con hipocloritos desprende cloro; con cianuros, cianuro de hidrógeno; con sulfuros, sulfuro de hidrógeno | NTP 479, tabla 5 | NTP 479 | Leído |
| Lejía = hipoclorito; salfumán = ácido clorhídrico (analogía doméstica) | Conocimiento general | — | Sin fuente leída; es solo la analogía. La reacción está en la tabla 5 de la NTP 479 |
| Metales alcalinos (sodio, potasio) con agua: hidróxido e hidrógeno, reacción muy exotérmica; con el potasio el calor basta para inflamar el hidrógeno | NTP 237, «Metales alcalinos» | NTP 237 | Leído |
| Los productos que reaccionan con el agua deben almacenarse separados de los inflamables (por si se usa agua en un incendio) | NTP 237, introducción | NTP 237 | Leído |
| Disolventes: evitar fuentes de ignición (calor, chispas, superficies calientes o llamas abiertas) | BP 2023, tabla 5, fila «Solventes» | BP 2023 | Leído (la tabla sale desordenada en el texto extraído; solo se usó esta fila, que es inequívoca) |
| El comburente aviva el fuego | Lección `pictogramas-y-fds` de la app | — | Coherencia con la app; no es dato nuevo |
| Objeto del Reglamento: condiciones de seguridad de almacenamiento, carga, descarga y trasiego de productos químicos peligrosos según el CLP | RAPQ, artículo 1 | RAPQ | Leído |
| No se aplica a instalaciones integradas en las unidades de proceso | RAPQ, artículo 2.1 | RAPQ | Leído |
| No se aplica por debajo de las cantidades de la columna 5 de la tabla I; para H225, 50 litros | RAPQ, artículo 2.2.c) y tabla I (repetida en MIE APQ-10, artículo 4) | RAPQ | Leído. Aviso: en el texto extraído la celda «50» aparece una vez para H224 y H225 (celda combinada); se interpretó que vale para las dos |
| Títulos de las ITC MIE APQ-0, 1, 5, 6, 7 y 10 | RAPQ, encabezado de cada ITC | RAPQ | Leído, copiados literalmente |
| Objeto de APQ-1 (líquidos inflamables y combustibles en recipientes fijos), APQ-5 (recipientes a presión móviles con gases), APQ-6 (corrosivos líquidos en recipientes fijos), APQ-7 (líquidos tóxicos en recipientes fijos), APQ-10 (recipientes móviles) | Artículo 1 de cada ITC | RAPQ | Leído |
| Recipiente móvil: hasta 3000 litros, trasladable | MIE APQ-0, artículo 2, definición 52 | RAPQ | Leído |
| Cubeto: cavidad capaz de retener los productos en caso de vertido o fuga | MIE APQ-0, artículo 2, definición 15 | RAPQ | Leído |
| Los recipientes móviles conectados directamente a proceso por tubería quedan fuera de la APQ-10 | MIE APQ-10, artículo 2.2.c) | RAPQ | Leído |
| Acceso restringido con letrero | MIE APQ-10, artículo 5 | RAPQ | Leído |
| No almacenar en zonas de tránsito (pasillos, escaleras, salidas de emergencia) | MIE APQ-10, artículo 6.2 | RAPQ | Leído |
| Ventilación natural o forzada; la forzada, con alarma en caso de avería | MIE APQ-10, artículo 6.5 | RAPQ | Leído |
| Señalización según RD 485/1997 y etiquetas según el título III del CLP | MIE APQ-10, artículo 8 | RAPQ | Leído |
| FDS disponibles; envases cerrados, ordenados, en envase original siempre que sea posible | MIE APQ-10, artículo 9 (apartados 1, 5, 7 y 9) | RAPQ | Leído |
| Tres tipos de almacenamiento: sin restricción, separado, independiente | MIE APQ-10, artículo 18 | RAPQ | Leído |
| Corrosivos ácidos y alcalinos incompatibles: al menos cubetos separados. Inflamables no con comburentes salvo armarios protegidos | MIE APQ-10, artículo 19, notas A y B de la tabla | RAPQ | Leído |
| Inflamables: sector o área independiente; armario de seguridad con 500 litros como máximo, de ellos 250 litros de H222 a H225 | MIE APQ-10, artículo 21 y 21.2 | RAPQ | Leído |
| Duchas y lavaojos a no más de 10 metros, sin obstáculos y señalizados; prueba semanal | MIE APQ-10, artículos 13 y 15.2.a) | RAPQ | Leído |
| Revisión anual de continuidad eléctrica y tomas de tierra | MIE APQ-10, artículo 16.1 y 16.2.b) | RAPQ | Leído |
| En trasvases de inflamables la instalación debe garantizar la descarga a tierra de la electricidad estática | BP 2023, apartado 3.2.2 | BP 2023 | Leído |
| Cisternas: conexión a tierra antes y durante la carga y descarga | MIE APQ-1, artículo 35.1.d) | RAPQ | Leído |
| Botellas de gases: verticales y protegidas contra caídas (hasta 150 litros), válvulas cerradas y caperuza, llenas y vacías separadas, sin guantes grasientos, zona a no más de 50 °C | MIE APQ-5, artículo 5.8 | RAPQ | Leído |
| Capacidad de retención: el mayor de 100 % del recipiente mayor y 10 % del total almacenado | MIE APQ-10, artículo 10.2 | RAPQ | Leído |
| Cálculo 1: 12 × 200 + 2 × 1000 = 4400 L; 10 % = 440 L; resultado 1000 L | Cálculo | — | Recalculado |
| Cálculo 2: 40 × 200 = 8000 L; 10 % = 800 L; resultado 800 L | Cálculo | — | Recalculado |
| El plan de mantenimiento comprueba limpieza y vaciado de los sistemas de contención (base del consejo sobre el cubeto con agua) | MIE APQ-10, artículo 15.2.c) | RAPQ | Leído; el consejo es deducción propia |
| Colores y formas de las señales (prohibición, obligación, advertencia, salvamento, lucha contra incendios) | RD 485/1997, anexo II.1 y anexo III.3 | RD 485 | Leído |
| Ducha de seguridad, lavado de los ojos y vía o salida de socorro son señales de salvamento (verdes) | RD 485/1997, anexo III.3.5.º, pictogramas | https://www.boe.es/datos/imagenes/disp/1997/97/08668_005.png | Visto en la imagen del BOE |
| El sonido de una señal de evacuación debe ser continuo | RD 485/1997, anexo IV.2.3.º | RD 485 | Leído |

## Parte 2. Emergencias

| Afirmación de la lección | Documento y apartado | URL | Cómo se comprobó |
|---|---|---|---|
| Clases de fuego A, B, C, D y F | RIPCI, anexo I, sección 1.ª, apartado 4.5 | RIPCI | Leído |
| Tabla de agentes extintores por clase de fuego y sus notas 1 y 2 | NTP 536, tabla 1 (reproduce la tabla del RD 1942/1993, hoy sustituido por el RD 513/2017, que ya no la trae). La misma tabla sigue en Erga FP 107 (2020) | NTP 536; Erga FP 107 | Leído en ambos. En la lección se omitió la fila de hidrocarburos halogenados y la nota 1 |
| Con corriente eléctrica no son aceptables agua a chorro ni espuma; el resto, en extintores que superen el ensayo dieléctrico | NTP 536, tabla 1, nota 2 | NTP 536 | Leído |
| El chorro puede derramar el líquido incendiado | NTP 536, regla de uso 8; Erga FP 107, medida 18 | NTP 536 | Leído |
| La espuma flota sobre el combustible y lo separa del oxígeno del aire | Erga FP 107, «Agentes extintores» | Erga FP 107 | Leído |
| Un extintor portátil dura de 8 a 60 segundos; hace falta formación previa | NTP 536, «Normas de utilización» | NTP 536 | Leído |
| Pasos de uso (descolgar, boquilla, CO₂ por la parte aislada, pasador, un metro como mínimo, viento, descarga de prueba, base de las llamas, barrido en líquidos) | NTP 536, reglas 1 a 8 y figura 6 | NTP 536 | Leído; resumidos en seis pasos |
| Extintores próximos a las salidas, parte superior entre 80 y 120 cm, recorrido máximo de 15 m | RIPCI, anexo I, sección 1.ª, apartado 4.4 | RIPCI | Leído |
| «Cuándo no intentarlo» | Definición de conato (INSST Emergencias), exigencia de formación (NTP 536) y de agente adecuado (Erga FP 107, medida 13) | — | Deducción a partir de lo leído. No se encontró en el INSST una lista literal de «cuándo no usar el extintor» |
| Obligaciones del artículo 20 | LPRL, artículo 20 | LPRL | Leído |
| Tipos de plan (emergencia, emergencia interior, autoprotección) | INSST Emergencias, «Tipos de planes de emergencia» | INSST Emergencias | Leído en la página |
| Conato, emergencia parcial y emergencia general | INSST Emergencias, «¿Todas las emergencias son iguales?»; NTP 334 | INSST Emergencias; NTP 334 | Leído |
| Equipos de primera intervención (mínimo dos personas), de segunda intervención (bomberos de fábrica) y de alarma y evacuación; la nota usa las siglas EPI, ESI y EAE | NTP 334, «Equipos de prevención y de actuación» | NTP 334 | Leído. Aviso: la NTP 334 (1994) figura como sustituida por la NTP 791, que no se pudo descargar |
| Dos niveles de evacuación: puntos de reunión y salida al exterior | NTP 334, «Evacuación» | NTP 334 | Leído |
| En el plan se fija el punto de reunión y el recuento | BP 2023, tabla 10 | BP 2023 | Leído |
| Sección 6 de la FDS y sus apartados 6.1, 6.2 y 6.3 | FDS 2020/878, anexo, sección 6 | FDS 2020/878 | Leído |
| El absorbente usado va a recipientes para residuos; los medios de absorción se eligen con la sección 6 | BP 2023, apartado 3.2.2 («Orden y limpieza») | BP 2023 | Leído |
| Regla PAS y su contenido; mensaje tipo (lugar, lesiones, número de accidentados); conciencia, respiración y pulso | NTP 458, «Los testigos» | NTP 458 | Leído |
| Piel y ojos: lavar 15 o 20 minutos como mínimo, ducha de seguridad; polvo: cepillar antes | Socorrismo 2014, «Vía cutánea o mucosa» | Socorrismo 2014 | Leído |
| Inhalación: protegerse, no entrar solo, lugar ventilado | Socorrismo 2014, «Vía respiratoria» | Socorrismo 2014 | Leído |
| Ingestión: identificar, llamar al 112 con el nombre del tóxico; no provocar el vómito con cáusticos o disolventes ni si está inconsciente | Socorrismo 2014, «Vía digestiva» | Socorrismo 2014 | Leído |
| Tiempo habitual de lavado de ojos: 20 minutos | NTP 500, «Formación» | NTP 500 | Leído (nota pensada para laboratorios) |
| Sección 4 de la FDS: primeros auxilios por vía de exposición y necesidad de atención médica inmediata | FDS 2020/878, apartados 4.1.1 y 4.1.2 | FDS 2020/878 | Leído |
| Objeto del RD 840/2015 y definición de accidente grave | RD 840/2015, artículos 1 y 3.1 | RD 840 | Leído |
| Niveles inferior y superior según el anexo I | RD 840/2015, artículo 3.5 y 3.6 | RD 840 | Leído |
| Política de prevención (todos), plan de emergencia interior revisado en periodos no superiores a tres años, informe de seguridad (nivel superior) | RD 840/2015, artículos 8, 12 y 10 | RD 840 | Leído |
| La directiva se conoce como Seveso III | Directriz 2026, preámbulo («Directiva 2012/18/UE... conocida como Directiva Seveso III») | Directriz 2026 | Leído. El RD 840/2015 no usa la palabra «Seveso» |

## Parte 3. Residuos

| Afirmación de la lección | Documento y apartado | URL | Cómo se comprobó |
|---|---|---|---|
| Definiciones de residuo y de residuo peligroso; envases con restos | Ley 7/2022, artículo 2, letras al) y añ) | Ley 7/2022 | Leído |
| Características de peligrosidad (HP 3 inflamable, HP 6 toxicidad aguda, HP 8 corrosivo, HP 14 ecotóxico) | Ley 7/2022, anexo I | Ley 7/2022 | Leído |
| Jerarquía y su orden | Ley 7/2022, artículo 8.1 | Ley 7/2022 | Leído |
| Definiciones que sustentan los ejemplos (prevención, preparación para la reutilización, reciclado, valorización, eliminación) | Ley 7/2022, artículo 2, letras z), y), af), bb), l) | Ley 7/2022 | Leído. Los ejemplos de planta son propios |
| R02 «Recuperación o regeneración de disolventes»; R01 uso como combustible; D10 incineración en tierra | Ley 7/2022, anexos II y III | Ley 7/2022 | Leído |
| Zona identificada, protegida de la intemperie y con retención; seis meses como máximo, ampliables otros seis por la comunidad autónoma; cómputo desde el inicio del depósito | Ley 7/2022, artículo 21.a) | Ley 7/2022 | Leído |
| No mezclar ni diluir residuos peligrosos | Ley 7/2022, artículo 21.c) | Ley 7/2022 | Leído |
| Envasado y contenido de la etiqueta; tamaño mínimo 10 × 10 cm | Ley 7/2022, artículo 21.d) y e) | Ley 7/2022 | Leído |
| Entrega a gestor autorizado y acreditación documental | Ley 7/2022, artículo 20.1 | Ley 7/2022 | Leído |
| Documento de identificación en todo traslado | Ley 7/2022, artículo 31.2 | Ley 7/2022 | Leído |
| Archivo cronológico (citado en `batchRecord`) | Ley 7/2022, artículos 21.a) y 64 | Ley 7/2022 | Leído |
| Cálculo 3: del 10 de marzo al 10 de septiembre de 2026, 184 días | Cálculo | — | Recalculado |
| La clasificación se hace con la lista de la Decisión 2014/955/UE | Ley 7/2022, artículo 6.1 | Ley 7/2022 | Leído |
| Códigos de seis cifras, capítulos de dos y de cuatro cifras; el asterisco marca los peligrosos | LER, anexo, «Lista de residuos» y punto 2 | LER | Leído |
| 07 «Residuos de procesos químicos orgánicos»; 07 05 residuos de productos farmacéuticos; códigos 07 05 01*, 07 05 03*, 07 05 04*, 15 01 10*, 15 02 02* | LER, capítulos 07 y 15 | LER | Leído. Los textos de 15 01 10* y 15 02 02* están abreviados |
| Razones para segregar | Ley 7/2022, artículo 21.c); NTP 479 (incompatibilidad); la tercera (recuperación) es razonamiento propio | — | Leído y razonado |
| Definición de COV (0,01 kPa a 293,15 K) | RD 117/2003, artículo 2 | RD 117 | Leído. 293,15 K = 20 °C, recalculado |
| Fabricación de productos farmacéuticos: umbral de más de 50 t/año; 20 mg C/Nm³ en gases residuales; emisión total del 5 % (nuevas) y 15 % (existentes) de la entrada de disolvente | RD 117/2003, anexo I (actividad 7) y anexo II, fila 20 | RD 117 | Leído |
| Cálculo 4: 5 % de 400 t = 20 t. Test: 5 % de 250 t = 12,5 t; 15 % = 37,5 t | Cálculo | — | Recalculado |
| Prohibición general de verter aguas y productos residuales que puedan contaminar, salvo autorización | Ley de Aguas, artículo 100.1 | Ley de Aguas | Leído |
| Test: 6 × 200 + 1000 = 2200 L, resultado 1000 L; 60 × 200 = 12 000 L, resultado 1200 L; del 14 de enero al 14 de julio, quedan 2 meses el 14 de mayo | Cálculo | — | Recalculado |

## Ejemplo de planta

| Elemento | Fuente | Cómo se comprobó |
|---|---|---|
| Tolueno con H225 y pictograma de llama | Ficha `tolueno` de la app (`src/content/fds.ts`: Flam. Liq. 2, H225, GHS02, clasificación armonizada CLP) | Leído en el repositorio; no se volvió a comprobar en el anexo VI del CLP en esta sesión |
| Peróxido de hidrógeno incompatible con líquidos inflamables | NTP 479, tabla 4 («Líquidos inflamables: ... peróxido de hidrógeno...») | Leído |
| Kit con obturadores de arquetas y bidones de socorro | BP 2023, apartado 4.3.3 | Leído |
| Palé-cubeto de 250 L para 4 bidones de 200 L: 10 % de 800 L = 80 L; mayor = 200 L | Cálculo con MIE APQ-10, artículo 10.2 | Recalculado |
| Planta, personas (Marta, Íker), intermedio KV-22 | Ficticios | — |

## Lo que se quería incluir y se dejó fuera por no poder verificarlo

- Agente extintor para la clase F (cocinas): ninguna fuente leída lo da; solo se define la clase.
- Una lista literal del INSST de «cuándo no usar el extintor» (no dar la espalda a la salida, tamaño del fuego, etc.): no se encontró; el párrafo se limita a lo que se deduce de la definición de conato y de la NTP 536.
- NTP 791 (sustituye a la NTP 334) y NTP 45 (plan de emergencia contra incendios): no se pudieron descargar. Los equipos de intervención se citan por la NTP 334, con ese aviso.
- Guía técnica del INSST del RD 485/1997 y pictogramas concretos de prohibición, obligación y advertencia: no se revisaron; solo se dan formas y colores.
- Tabla completa de almacenamiento conjunto de la MIE APQ-10 (artículo 19): la matriz no se lee bien en el texto extraído; solo se usaron las notas A, B y C, que son texto.
- Distancias de la tabla II del artículo 21 de la APQ-10 y categorías de almacén de la APQ-5: se leyeron, pero son datos de proyecto, no del operador.
- Por qué los halogenados son más caros o más difíciles de tratar (formación de ácidos al incinerar): no se encontró en una fuente gratuita leída.
- Umbrales concretos del anexo I del RD 840/2015 para disolventes: leído el mecanismo, no se incluyeron cifras.
- Real Decreto 553/2020 de traslado de residuos (contenido del documento de identificación) y normativa autonómica: no leídos; solo se cita la obligación del artículo 31 de la ley.
- Límites de vertido al alcantarillado: dependen de la autorización y de ordenanzas locales; no se da ninguna cifra.
- Normas UNE-EN citadas por los reglamentos (UNE-EN 15154 de duchas y lavaojos, UNE-EN 2, UNE 23110): son de pago; no se cita su contenido.
- Tiempo de lavado «al menos 15 minutos» como cifra única: las fuentes leídas dicen «15 o 20 minutos como mínimo» (INSHT 2014) y «habitualmente 20 minutos» para ojos (NTP 500). La lección ya publicada `emergencias-y-residuos` dice 15 minutos; no se contradice, pero convendría alinearla.
