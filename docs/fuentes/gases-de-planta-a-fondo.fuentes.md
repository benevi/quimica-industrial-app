# Fuentes de la lección `gases-de-planta-a-fondo`

Documentos leídos (texto íntegro descargado con curl y, en las tablas que son imagen, página del PDF renderizada y leída):

- **NTP 340** (INSST), Riesgo de asfixia por suboxigenación en la utilización de gases inertes: https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/10-serie-ntp-numeros-331-a-365-ano-1995/ntp-340-riesgo-de-asfixia-por-suboxigenacion-en-la-utilizacion-de-gases-inertes
- **NTP 383** (INSST), Riesgo en la utilización de gases licuados a baja temperatura: https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/11-serie-ntp-numeros-366-a-400-ano-1996/ntp-383-riesgo-en-la-utilizacion-de-gases-licuados-a-baja-temperatura (PDF: https://www.insst.es/c/document_library/get_file?uuid=2a608e70-6a49-467d-a4b9-c22bd8a01cc3&groupId=94886; la tabla 1 es una imagen y se leyó en el PDF)
- **NTP 397** (INSST), Botellas de gas: riesgos genéricos en su utilización: https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/11-serie-ntp-numeros-366-a-400-ano-1996/ntp-397-botellas-de-gas-riesgos-genericos-en-su-utilizacion
- **NTP 223** (INSST), Trabajos en recintos confinados: https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/6-serie-ntp-numeros-191-a-225-ano-1989/ntp-223-trabajos-en-recintos-confinados (PDF: https://www.insst.es/c/document_library/get_file?uuid=3c0e8055-b69a-4e4c-97d3-fba1f5b6e43c&groupId=94886; la tabla de oxígeno es una imagen y se leyó en la página 3 del PDF)
- **NTP 631** (INSST), Riesgos en la utilización de equipos y herramientas portátiles accionados por aire comprimido: https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/18-serie-ntp-numeros-611-a-645-ano-2003/ntp-631-riesgos-en-la-utilizacion-de-equipos-y-herramientas-portatiles-accionados-por-aire-comprimido.
- **INSST, página de protección respiratoria** (clasificación de equipos aislantes): https://www.insst.es/materias/equipos/epi/proteccion-respiratoria
- **RD 809/2021**, Reglamento de equipos a presión, ITC EP-4 (depósitos criogénicos) e ITC EP-6 (recipientes a presión transportables, con su anexo I de acoplamientos): https://www.boe.es/buscar/act.php?id=BOE-A-2021-16407
- **RD 656/2017**, Reglamento APQ, ITC MIE APQ-5 (artículos 5 y 9): https://www.boe.es/buscar/act.php?id=BOE-A-2017-8755
- **RD 2032/2009**, unidades legales de medida, tabla 8: https://www.boe.es/buscar/act.php?id=BOE-A-2010-927
- **ICH Q7**, apartado 4.2 (4.20 a 4.24): https://database.ich.org/sites/default/files/Q7%20Guideline.pdf
- **EU GMP anexo 1 (2022)**, apartados 6.18 a 6.20: https://health.ec.europa.eu/system/files/2022-08/20220825_gmp-an1_en_0.pdf
- Lecciones del repo leídas para no repetirlas y para ser coherente: `aire-y-nitrogeno`, `inertizacion-a-fondo`, `permisos-a-fondo`, `bombas-a-fondo` (bombas de vacío), `alarmas-y-seguridad-a-fondo` (fallo de servicios), `epi-a-fondo` (protección respiratoria).

No se pudieron abrir (host fuera de la red de la sesión): openstax.org, riunet.upv.es, control.com.

| Dato o afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| Tabla de gases de la planta y sus usos (nitrógeno, aire de instrumentos, de servicio, respirable, vacío) | Lección `aire-y-nitrogeno` del repo | Coherencia con el repo |
| Hidrógeno: gas inflamable, «altamente combustible» | NTP 383; ITC EP-4, art. 3 (grupo 1.1, inflamables: etano, etileno e hidrógeno) | Leído en el documento |
| Uso del hidrógeno en hidrogenaciones | Conocimiento general; solo mención | Sin fuente leída |
| Ley de Boyle, P1·V1 = P2·V2 a temperatura constante y con presiones absolutas | Ley de libro de texto. Coherente con `inertizacion-a-fondo` («la cantidad de gas es proporcional a la presión absoluta») y con `fluidos-a-fondo` | No se pudo leer en fuente abierta en esta sesión (openstax.org y control.com inaccesibles). Usada por coherencia con el repo |
| A presiones muy altas los gases reales se apartan de la ley ideal; la cifra exacta la da el proveedor | Conocimiento de libro de texto, sin cifra | Sin fuente leída; se incluye solo como advertencia cualitativa |
| Absoluta = manométrica + atmosférica; atmósfera redondeada a 1 bar | `inertizacion-a-fondo`; RD 2032/2009 (atmósfera normal = 1,01325 bar) | Leído |
| Botella a 200 bar: presión habitual del nitrógeno en botella («200 kg/cm2 para el nitrógeno») | NTP 397, apartado «Expansión del gas» | Leído. El volumen de 50 L es valor de ejemplo del encargo |
| Cuenta 1: 200 × 50 = 10000 L; aprovechables 9950 L | Cálculo ideal declarado | Recalculado con python |
| Cuenta 2: (200 − 10) × 50 = 9500 L; 9500 / 20 = 475 min | Cálculo; caudal y presión de cambio son valores de ejemplo declarados | Recalculado |
| Cuenta 3: 6000 × (3 − 1) = 12000 L; con 2000 L libres, 4000 L | Cálculo | Recalculado |
| Nm³: condiciones de referencia; «temperatura y presión normales (15 ºC y 1,013 bar absolutos)» | ITC EP-4, art. 2, definición de gas inerte. La APQ-5 da las cantidades de gas en Nm³ | Leído. Que otros documentos usan otra referencia se dice sin cifra |
| El aire tiene 78,1 % de nitrógeno y 21 % de oxígeno | NTP 340, introducción | Leído |
| Tanque criogénico con evaporador: definición de depósito criogénico y de unidades de vaporización | ITC EP-4, arts. 1 y 2 | Leído |
| Tanque preferentemente al aire libre; vallado; cartel con el gas, los peligros y las medidas | ITC EP-4, art. 6, apartados 1 y 3 | Leído |
| Generador PSA: retiene el oxígeno en un material y deja pasar el nitrógeno; necesita aire comprimido | Atlas Copco (wiki de aire comprimido, «pressure swing adsorption generator») | Solo fragmento de buscador; sin cifras en el texto |
| Generador de membranas: fibras huecas, el oxígeno escapa por la pared; en general menos pureza que el PSA | Atlas Copco (blog «how a nitrogen generator works») | Solo fragmento de buscador; sin cifras en el texto |
| Bloque de botellas: botellas unidas a un colector | ITC EP-6, art. 2, definición 6; NTP 397 (bloques de botellas) | Leído |
| Ventajas e inconvenientes de cada fuente | Razonamiento a partir de lo anterior | Sin fuente propia |
| La pureza limita la inertización | `inertizacion-a-fondo` («si el nitrógeno no es puro») | Coherencia con el repo |
| Nitrógeno: ebullición a −196 °C a 1 atm | NTP 383, texto y tabla 1 | Leído (texto y tabla en el PDF) |
| 1 L de nitrógeno líquido da 691 L de gas a 15 °C y 1 atm | NTP 383, texto y tabla 1; NTP 340 | Leído en ambos |
| Quemaduras por frío, poco dolorosas al principio y muy dolorosas al deshelarse; el líquido se infiltra bajo la ropa | NTP 383, «Riesgos» | Leído |
| Tuberías con hielo: superficie cerca de 0 °C, por debajo mucho más fría | NTP 383 | Leído |
| Fragilización de acero dulce, aluminio, hormigón | NTP 383 | Leído |
| Líquido atrapado entre dos válvulas: se vaporiza y genera presiones elevadas; dispositivos de descarga de presión | NTP 383, «Medidas preventivas» | Leído |
| Nube densa a ras de suelo, primer síntoma de escape; jamás penetrar en ella | NTP 383 | Leído |
| 10 L de líquido dan 6910 L de gas | Cálculo con la cifra de la NTP 383 | Recalculado |
| EPI: protección de cara y manos; ropa de fibra natural, seca, no ceñida, sin bolsillos abiertos, mangas remangadas ni dobleces | NTP 383 | Leído |
| Primeros auxilios: agua templada abundante, nunca caliente | NTP 383 | Leído |
| Presión de red de 6 bar g | Valor de ejemplo declarado | — |
| Reductora: el gas se usa siempre a través de un regulador | NTP 397; APQ-5, art. 9 | Leído (referido a botellas; aplicado a la red por razonamiento) |
| Antirretorno: «si existe peligro de que el recipiente pueda contaminarse por retroceso de otros gases o líquidos, deberá disponerse de una válvula o dispositivo de retención» | APQ-5, art. 9 | Leído |
| Anexo 1, 6.20: mecanismos que impidan el retroceso desde sistemas de vacío o presión | EU GMP anexo 1, 6.20 | Leído |
| Filtro en punto de uso cuando el gas toca el producto | Lección `aire-y-nitrogeno`; anexo 1, 6.19 y 8.99 («as close to the point of use as possible») | Leído |
| Tubería fija identificada | ICH Q7, 4.23 | Leído |
| Colores de tuberías: no se dan | NTP 340 solo dice que «atenderán a los colores de caracterización establecidos para las instalaciones industriales» | Leído; la norma UNE es de pago |
| Usos del nitrógeno (tabla) y qué vigilar | Lecciones del repo (`inertizacion-a-fondo`, `fluidos-a-fondo`, `filtros-a-fondo`, `secado-a-fondo`) y razonamiento | Coherencia con el repo; sin fuente externa propia |
| El nitrógeno que descarga en la sala le quita oxígeno | NTP 340 (descarga «in situ», salas con canalizaciones) | Leído |
| Cadena compresor, depósito, secador, filtros, purgas | Descripción general; fragmentos del buscador (Atlas Copco, artículo docente de la UPV) | Solo fragmento de buscador |
| Purga de condensados en recipientes de aire comprimido | RD 809/2021 (inspección nivel A: «purga de condensados»; ITC EP-5, art. 14) | Leído |
| El aire comprimido arrastra agua condensada de la humedad del aire y aceite del compresor | NTP 631, «Riesgos» | Leído |
| A 7 bar g (8 bar a) hay 8 m³ de aire ambiente por m³ | Cálculo con la ley de Boyle; 7 bar g es valor de ejemplo | Recalculado. Que el agua sobrante condensa es razonamiento |
| Punto de rocío: temperatura a la que hay que enfriar un aire para que empiece a condensar | Definiciones divulgativas (snowy.es, tesauro NALT de la USDA) | Solo fragmento de buscador; sin cifras |
| El punto de rocío debe quedar por debajo de la temperatura más fría de la red | Razonamiento; fragmento de Atlas Copco («instrument air quality») | Fragmento; sin cifras |
| Clases de calidad del aire comprimido: no se dan | ISO 8573-1 es de pago | Dejado fuera |
| Aire de instrumentos seco y sin aceite; el agua y el aceite dañan las válvulas | Lección `aire-y-nitrogeno` del repo | Coherencia con el repo; que el agua oxida y se hiela es razonamiento sin fuente leída |
| Sin aire de instrumentos las válvulas van a su posición de fallo | Lección `alarmas-y-seguridad-a-fondo` (NTP 238, NTP 456) | Coherencia con el repo |
| Anexo 1, 6.18: calidad química, de partículas y microbiana; aceite y agua especificados | EU GMP anexo 1, 6.18 | Leído |
| El anexo 1 trata de medicamentos estériles | Título y alcance del anexo 1 | Leído |
| Equipos de línea de aire: «fuente de aire comprimido limpio y respirable» | INSST, página de protección respiratoria | Leído |
| Dos bocanadas de gas inerte bastan para perder la consciencia | NTP 340 | Leído |
| Error de conexión entre redes de gas inerte y de aire comprimido | NTP 340, «Utilización accidental de gas inerte en lugar de aire» | Leído |
| Un acoplamiento por familia de gas: tipo B aire, tipo C inertes, tipo F oxígeno, tipo E inflamables a izquierdas | ITC EP-6, art. 3 y anexo I | Leído |
| No forzar conexiones ni usar piezas intermedias salvo las aprobadas por el fabricante del gas | APQ-5, art. 9 | Leído |
| Bombas de vacío | Remisión a `bombas-a-fondo` | Repo |
| Condensador y trampa antes de la bomba | Lecciones `aire-y-nitrogeno` y `secado-a-fondo` del repo | Coherencia con el repo (en `secado-a-fondo` figura como deducido) |
| Fugas hacia dentro; romper el vacío con nitrógeno | `inertizacion-a-fondo` | Repo |
| Un equipo no diseñado para vacío puede aplastarse | Razonamiento (`inertizacion-a-fondo`: «equipos que aguantan vacío») | Sin fuente leída |
| 1 bar = 100 kPa; 1 mmHg ≈ 133,322 Pa | RD 2032/2009, tabla 8 | Leído |
| 200 mbar abs = 0,2 bar a = 20 kPa = −0,8 bar g | Cálculo | Recalculado |
| 100 mbar abs = 10000 Pa = 75 mmHg | Cálculo: 10000 / 133,322 = 75,006 | Recalculado |
| Partes de la botella: grifo, tulipa («proteger la parte más débil de la botella, el grifo»); ojiva; caperuza | NTP 397; ITC EP-6, art. 4; APQ-5 | Leído |
| De pie y sujetas; válvula cerrada y caperuza, también vacías; llenas y vacías separadas | APQ-5, art. 5; NTP 397 (cadena) | Leído |
| Carro; no arrastrar ni rodar tumbadas | APQ-5, art. 5; NTP 397 | Leído |
| Leer etiquetas; sin identificar no se usa; colores según UNE-EN 1089-3 (no se dan) | APQ-5, art. 9; ITC EP-6, art. 4; NTP 397 | Leído |
| Regulador del gas correspondiente; tornillo aflojado; abrir despacio con la salida lejos de las personas | APQ-5, art. 9; NTP 397 | Leído |
| Válvula dura: no forzar, devolver | NTP 397; APQ-5, art. 9 | Leído |
| Fugas con agua jabonosa, nunca llama | NTP 397; APQ-5, art. 9 | Leído |
| Sin grasa ni aceite: con oxígeno, explosión violenta | APQ-5, art. 9; NTP 397 | Leído |
| No trasvasar entre botellas; no usar gas comprimido para limpiar la ropa | NTP 397; APQ-5, art. 9 | Leído |
| Tabla de oxígeno: 21; 20,5; 18; 17; 12-16; 6-10 % y sus consecuencias | NTP 223, tabla del apartado «Asfixia» | Leído en la imagen de la página 3 del PDF |
| La mayoría no reconoce el peligro hasta estar demasiado débil para escapar | NTP 223, nota de la tabla | Leído |
| Efecto asfixiante sin ningún signo fisiológico preliminar | NTP 340 | Leído |
| Lugares donde se acumula; el nitrógeno recién vaporizado, muy frío, baja a los puntos más bajos | NTP 340 | Leído |
| Sala de 30 m³ y 10 L de líquido: 21 × (30000 − 6910) / 30000 = 16,2 % | Cálculo simplificado declarado; sala y cantidad son valores de ejemplo | Recalculado (16,16) |
| Analizadores de oxígeno colectivos o individuales; ayuda, no garantía absoluta | NTP 340 | Leído |
| Si suena: salir y avisar | Razonamiento; lo concreto lo fija el plan de emergencia de la planta | Sin fuente leída |
| Rescate solo con equipo de respiración autónomo | NTP 340, «Actuación en caso de accidente» | Leído |
| ICH Q7 4.20: servicios cualificados, vigilados, acción al superar límites, planos | ICH Q7, 4.20 | Leído |
| Anexo 1, 6.19: filtro esterilizante de 0,22 µm como máximo en el punto de uso; prueba de integridad | EU GMP anexo 1, 6.19 | Leído |
| Ejemplo de planta (R-310, FS-420, TN-900, FN-310, LM-52; 6,1 y 3,8 bar g) | Ficticio; valores de ejemplo | 3000 × 2,5 = 7500 L recalculado |
| Preguntas numéricas: 7500; 300; 3750; 100; 60; 2764 | Cálculo | Recalculado (8000 / 133,322 = 60,005) |

## Lo que quería incluir y dejé fuera por no poder verificarlo

- Clases y límites de la ISO 8573-1 (partículas, agua, aceite) y cualquier cifra de punto de rocío de secadores frigoríficos o de adsorción: norma de pago; las cifras solo aparecieron en fragmentos de fabricantes.
- Requisitos de la Farmacopea Europea para nitrógeno y aire medicinal (pureza, impurezas): de pago.
- Cifras de pureza del nitrógeno de tanque, de PSA y de membranas: solo en fragmentos de fabricante.
- Colores de las botellas (UNE-EN 1089-3) y de las tuberías (norma UNE): de pago. La NTP 198 da un código antiguo y la propia NTP 340 advierte de que el vigente es el del reglamento.
- Calidad del aire respirable (norma UNE-EN 12021) y una NTP específica sobre equipos de línea de aire: no encontré fuente gratuita con esos requisitos; solo se cita la definición del INSST.
- Tipos de compresor y de secador con su funcionamiento: sin fuente abierta leída.
- Factor de compresibilidad del nitrógeno a 200 bar (cuánto se aparta la botella real del cálculo ideal): sin fuente.
- Densidad del nitrógeno frente al aire (la tabla 1 de la NTP 383 da 0,95 a 15 °C) no se usó en el texto para no alargarlo.
- NTP 560, citada en el encargo como posible fuente: no la localicé ni la leí; para el oxígeno se usaron las NTP 223 y 340.
- Anexo 6 de EU GMP (gases medicinales): no pertinente para gases de servicio de una planta de API; no leído.
- Requisitos de RD 1215/1997 sobre equipos de trabajo: no aportaba nada específico de gases.
