# Fuentes de «Molienda y tamizado a fondo» (`molienda-a-fondo`)

## Documentos

| Clave | Documento | URL |
|---|---|---|
| SUPAC | FDA, *SUPAC: Manufacturing Equipment Addendum. Guidance for Industry* (diciembre de 2014), apartado IV.A (definiciones, mecanismos, principios de funcionamiento y clases de equipos de reducción de tamaño) | https://www.fda.gov/media/85681/download |
| POLY | FDA, *ANDAs: Pharmaceutical Solid Polymorphism* (julio de 2007), apartado sobre conversión en procesos | https://www.fda.gov/media/71375/download |
| Q4B12 | EMA, ICH Q4B anexo 12 (texto armonizado de tamizado analítico, versión EMEA 2009): principios, tabla 3.04-1, «Test sieves» | copia ya descargada en la sesión (`src_particula/ema_q4b12.txt`), publicada por la EMA |
| Q6A | ICH Q6A, apartado 3.3.1 b y árbol de decisión n.º 3 | https://database.ich.org/sites/default/files/Q6A%20Guideline.pdf (copia `dl/q6a.txt`) |
| Q7 | ICH Q7, apartados 1.3, 5.21, 5.24, 8.14, 8.50, 12.73 y glosario («Contamination») | https://database.ich.org/sites/default/files/Q7%20Guideline.pdf (copia `dl/q7.txt`) |
| NTP29 | INSST, NTP 29 «Instalaciones de recogida de polvos combustibles. Control del riesgo de explosión» (1982), entera | https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/1-serie-ntp-numeros-001-a-035-ano-1982/ntp-29-instalaciones-de-recogida-de-polvos-combustibles.-control-del-riesgo-de-explosion |
| NTP396 | INSST, NTP 396 «Deflagraciones producidas por gases, vapores y polvos combustibles: sistemas de protección», entera | https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/11-serie-ntp-numeros-366-a-400-ano-1996/ntp-396-deflagraciones-producidas-por-gases-vapores-y-polvos-combustibles-sistemas-de-proteccion |
| NTP402 | INSST, NTP 402 «Sistemas supresores de explosión (I): fundamentos teóricos y medios de extinción», texto de la ficha HTML (polvos combustibles, ley cúbica, tabla 2) | https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/12-serie-ntp-numeros-401-a-435-ano-1997/ntp-402-sistemas-supresores-de-explosion-i-fundamentos-teoricos-y-medios-de-extincion |
| NTP403 | INSST, NTP 403 «Sistemas supresores de explosión (II)», ficha HTML (aplicación práctica, figura 9) | https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/12-serie-ntp-numeros-401-a-435-ano-1997/ntp-403-sistemas-supresores-de-explosion-ii-factores-de-diseno-y-aplicaciones-practicas |
| NTP427 | INSST, NTP 427 «Paramentos débiles para el venteo de alivio de explosiones (I)», ficha HTML (introducción, definiciones, guía de actuación) | https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/12-serie-ntp-numeros-401-a-435-ano-1997/ntp-427-paramentos-debiles-para-el-venteo-de-alivio-de-explosiones-i- |
| NTP428 | INSST, NTP 428 (II), ficha HTML (solo para confirmar rango de Kst y clases St en el método del nomograma; no se cita en el texto) | https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/12-serie-ntp-numeros-401-a-435-ano-1997/ntp-428-paramentos-debiles-para-el-venteo-de-alivio-de-explosiones-ii- |
| NTP827 | INSST, NTP 827 «Electricidad estática en polvos combustibles (I)» (2009), apartados 1 y 2, tabla 1, tabla 2, texto de EMI | https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/24-serie-ntp-numeros-821-a-855-ano-2009/nota-tecnica-de-prevencion-ntp-827 |
| NTP1105 | INSST, NTP 1105 «Industria farmacéutica: medidas para la prevención de la exposición a principios activos» (2018), tabla 1 (manipulación de polvo, filtros, limpieza) | https://www.insst.es/documents/94886/7799754/ntp-1105w.pdf/d4e16590-817e-42ba-b97a-4b1533ec6eae |
| GUIA | INSST, «Guía técnica para la evaluación y prevención de los riesgos derivados de atmósferas explosivas en el lugar de trabajo», comentario al art. 2 (polvo combustible, 0,5 mm, soplado y barrido) y tabla 4 / zonas 20 a 22 | https://www.insst.es/documents/94886/789467/ATM%C3%93SFERAS+EXPLOSIVAS.pdf |

Las NTP 402, 403, 427 y 428 se leyeron en el texto íntegro de su ficha HTML (el enlace al PDF devolvía HTML). Las NTP 29, 396, 827, 1105, la GUIA, Q6A y Q7 se leyeron en copias descargadas en esta sesión por otras lecciones (`lecciones/src_solidos/dl/`, `dl/`), comprobando el pasaje concreto.

## Afirmación por afirmación

| Dato o afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| 1 µm = milésima de mm | Definición de unidades | Conocido / coherente con la lección del nivel 8 |
| Esfera de 100 µm partida en 10 µm: 1000 esferas, 10 veces más superficie | Cálculo (volumen ∝ d³, superficie ∝ d²) | Recalculado con python (`src_molienda/calc.py`) |
| El tamaño puede afectar a la disolución, la biodisponibilidad o la estabilidad | Q6A 3.3.1 b | Leído (ya citado en la lección del nivel 8) |
| Uniformidad de contenido entre las razones del árbol n.º 3 | Q6A, árbol 3 | Leído (ya citado en nivel 8) |
| Analogía de las pasas | Analogía propia | Explicativa, sin dato |
| D90 ≤ 120 µm | Valor de ejemplo declarado | — |
| Moler y micronizar dentro del alcance de Q7 | Q7 1.3 («physical manipulation of particle size (e.g. milling, micronizing)») | Leído |
| Cuatro mecanismos: impacto (fuerza instantánea perpendicular; choque partícula-partícula o partícula-molino), atrición (paralela), compresión (despacio, hacia el centro), corte (cizalla) | SUPAC IV.A.1.a.i.b | Leído |
| «Partícula» incluye el aglomerado | SUPAC IV.A.1.a.i.a | Leído |
| Martillos y púas/discos son molinos de impacto; subclases por cabezales, revestimientos y clasificadores | SUPAC IV.A.2.b | Leído |
| Molinos de tamiz: atrición forzada a través de una criba, también llamado desaglomerar; subclase de impulsor giratorio | SUPAC IV.A.1.b.v y IV.A.2.e | Leído |
| Energía de fluido: impacto y/o atrición partícula-partícula a gran velocidad, también micronizar, sin piezas móviles | SUPAC IV.A.1.b.i y IV.A.2.a | Leído |
| Molinos de corte, compresión y volteo (bolas, barras) | SUPAC IV.A.2.c, d, f | Leído |
| El molino cónico (*cone mill*) es un molino de tamiz con impulsor que gira dentro de una criba cónica | Patente de molinos cónicos (USPTO) vista en el buscador | **Fragmento de buscador**; la clase «screening mill, rotating impeller» sí está leída en SUPAC |
| Descripción física «rotor con martillos» y «púas montadas en discos que giran» | Deducida del nombre de las subclases de SUPAC («Hammer», «Pin/Disc») | Razonado; SUPAC no describe la geometría |
| Parámetros del micronizador | Remite a la lección del nivel 8 (guía FDA 2002) | Contenido de la app |
| Tamices analíticos: malla de hilo tejido con agujeros casi cuadrados, acero inoxidable o latón, abertura en µm, número de malla solo para convertir | Q4B12, «Principles of Analytical Sieving» y «Test sieves» | Leído |
| Malla 20 = 850 µm, malla 60 = 250 µm, malla 100 = 150 µm (serie US) | Q4B12, tabla 3.04-1 | Leído en la tabla |
| Examinar los tamices antes de usar, por deformaciones y roturas, sobre todo en la unión malla-marco | Q4B12, «Test sieves» («carefully examined for gross distortions and fractures, especially at their screen frame joints, before use») | Leído |
| Contaminación incluye materia extraña | Q7, glosario («Contamination») | Leído |
| Comprobación después: lo tamizado desde la última comprobación buena queda en duda | Razonamiento; coherente con la lección corta del nivel 12 | Razonado |
| Separadores magnéticos para eliminar objetos extraños como medida contra focos de ignición | NTP29, «Actuación sobre los focos de ignición» | Leído |
| Filtro de mangas: mangas de tela que limpian el aire | Descripción general; la GUIA nombra los filtros de mangas | Descripción propia |
| La energía de los golpes acaba en calor | Física (conservación de la energía) | Razonado |
| Molienda y micronización pueden provocar conversión de forma cristalina | POLY («phase conversion when exposed to … drying, milling, micronization, …») | Leído |
| Carga másica: tamizado 10⁻⁹ a 10⁻¹¹, molienda 10⁻⁶ a 10⁻⁷, micronizado 10⁻⁴ a 10⁻⁷ C/kg | NTP827, tabla 1 | Leído |
| 10⁻⁴ / 10⁻⁹ = 100 000 | Cálculo | Recalculado |
| Los productos farmacéuticos entre los polvos que pueden explotar | NTP427, introducción | Leído |
| Nombre «pentágono de la explosión de polvo» y sus cinco elementos (combustible, ignición, oxígeno, dispersión, confinamiento) | OSHA, materiales de polvo combustible | **Fragmento de buscador** (osha.gov no accesible desde la sesión) |
| Las mismas condiciones en fuente leída: polvo fino, nube con concentración suficiente, oxígeno, foco de ignición con energía suficiente, recinto | NTP29 (medidas de prevención), GUIA (art. 2), NTP396 (recinto cerrado) | Leído |
| Por encima de 0,5 mm, baja probabilidad | GUIA, comentario al art. 2; NTP402 | Leído |
| Interior de molinos, ejemplo de zona 20; talleres de molienda y filtros de mangas, ejemplos de zona 22 | GUIA, tabla 4 y texto de zonas | Leído |
| Límite inferior de explosividad de muchos polvos 0,01 a 0,05 kg/m³ | NTP402, «Polvos combustibles» | Leído |
| 0,03 × 2 = 0,06 kg = 60 g | Valor de ejemplo declarado y cálculo | Recalculado |
| Mantener el tamaño por encima del crítico no es medida efectiva: un poco de fino por abrasión basta | NTP402 | Leído |
| Deflagración más lenta que el sonido, 100 a 200 ms | NTP396, «Objeto» | Leído |
| En recinto cerrado, presión hasta diez o más veces la absoluta inicial | NTP396, «Definición del problema» | Leído |
| Las explosiones secundarias llegan a destruir instalaciones | NTP396, introducción | Leído |
| Imperial Sugar 2008: polvo de azúcar acumulado, primera explosión en transportador cerrado, secundarias por los edificios de envasado (conclusiones de la CSB) | CSB, informe final (2009) | **Fragmento de buscador** (www.csb.gov no accesible: error de red con curl y WebFetch). No se usan cifras (muertos, heridos) |
| EMI de polvos de menos de 1 mJ a más de 10 J; vapores de disolventes 0,2 a 1 mJ | NTP827, apartado de descarga en chispa y tabla 2 | Leído |
| E = ½ C U² para la chispa de un conductor | NTP827 (ejemplo de 50 pF y 10 kV, 2,5 mJ) | Leído |
| 100 pF y 12 000 V dan 7,2 mJ | Valor de ejemplo declarado; cálculo | Recalculado |
| Recipientes de ensayo de 20 L y 1 m³ | NTP427, «Guía de actuación» | Leído |
| Definición de gradiente máximo de presión | NTP427, definiciones | Leído |
| Kst = (dP/dt)máx × V^(1/3), en bar·m/s; «ley cúbica»; independiente del volumen | NTP427, definiciones; NTP402 | Leído |
| «St» de *Staub*, polvo en alemán | NTP402 | Leído |
| 0,020^(1/3) = 0,2714; 700 × 0,2714 = 190 | Valor de ejemplo declarado; cálculo | Recalculado (190,0) |
| Clases St 0 (0, nula), St 1 (0 a 200, débil o moderada), St 2 (201 a 300, fuerte), St 3 (>300, muy fuerte) | NTP402, tabla 2 | Leído |
| Sin venteo, Pmáx igual o mayor de 10 bar manométricos, superior a lo que aguantan la mayoría de instalaciones | NTP427 | Leído |
| Carbón menos explosivo que aspirina en polvo, y esta menos que aluminio | NTP427, introducción | Leído |
| Caso de la NTP 403: muestras poco representativas con Kst 72; siete meses después, explosión en molturación de cebada malteada; el producto molido dio 151 | NTP403, «Aplicación práctica», figura 9 | Leído |
| 151 / 72 ≈ 2,1, «el doble» | Cálculo | Recalculado (2,10) |
| Ensayos con muestras representativas de sequedad y finura del proceso | NTP427 | Leído |
| Inertizar con N₂ o CO₂ hasta un oxígeno inferior al propio de cada polvo, determinado experimentalmente | NTP29 | Leído |
| Por debajo de unos 10 mbar no son posibles las explosiones de polvo; con humedad del orden del 50 % no hay mezclas explosivas | NTP402 | Leído |
| Interconectar masas metálicas y a tierra; mantenimiento de elementos de fricción; corte por sobreintensidad en motores que pueden sobrealimentarse | NTP29 | Leído |
| Equipos ATEX de la categoría de la zona | Remite a «Atmósferas explosivas a fondo» | Contenido de la app |
| Venteo con membranas; por él salen llamas, quemados e inquemados, a zona segura | NTP396 | Leído |
| Supresión: detecta y descarga agente extintor; milisegundos | NTP396, NTP402 | Leído |
| Aislamiento: válvulas de compuerta de cierre instantáneo o agente extintor en tubería | NTP396 | Leído |
| Venteo inadecuado si el polvo es excesivamente tóxico o Kst > 300; medidas alternativas con especialistas | NTP427, «Guía de actuación» | Leído |
| Confinamiento (diseño que soporta la presión) como medida de protección | NTP29 | Leído |
| Soplado y barrido, malas prácticas que crean ATEX | GUIA, comentario al art. 2 | Leído |
| Molturación, tamizado y micronizado con mecanismos reductores de emisiones; transferencia con sistemas de contención | NTP1105, tabla 1 (manipulación de polvo) | Leído |
| HEPA 13 o superior en la salida, cambio seguro, prueba de integridad en cada cambio (categorías altas) | NTP1105, tabla 1 (filtros) | Leído |
| Sustituir el barrido; aspiración HEPA antes de limpieza húmeda; categorías 3B y 4 sin aire ni agua a alta presión | NTP1105, tabla 1 (limpieza) | Leído |
| Cambio de mangas, apertura y desmontaje como momentos de mayor exposición | Razonamiento | Razonado |
| Q7 5.21 (instrucciones de desmontaje y montaje), 5.24 (limpieza entre productos), 8.50 (residuo en micronizador), 12.73 (frotis poco práctico en micronizadores), 8.14 (rendimiento) | Q7 | Leído |
| Corriente del motor sube con sobrecarga | NTP29 (sobreintensidad por sobrealimentación) | Leído / razonado |
| ΔP del filtro de mangas sube al taparse y cae de golpe con una manga rota | Razonamiento físico (la tela es la resistencia al paso del aire; ver «Filtros a fondo») | Razonado |
| Ruido o vibración: cuerpo extraño o cojinete; fricción como foco de ignición | NTP29 (objetos extraños, elementos de fricción) | Leído / razonado |
| IPC por difracción láser con d10, d50, d90 | Remite a «Tamaño de partícula a fondo» | Contenido de la app |
| Ejemplo de planta (FX-101, SD-301, ML-501, TZ-502, FM-503, 3,1 % y límite 5 % de O₂, pesos, D10/D50/D90) | Valores de ejemplo declarados | Balance recalculado: 120,0 − 117,4 − 1,4 − 0,2 = 1,0; 117,4 / 120,0 = 97,83 % (97,8) |
| Preguntas numéricas: 84,6/86,0 = 98,37 (98,4 %); 600 × 0,2714 = 162,9 (163); ½ × 200 pF × 8000² = 6,4 mJ; 60 a 20 µm, 27 esferas, ×3 superficie; 0,9/60,0 = 1,5 % | Cálculo | Recalculado con python |

## Lo que quedó fuera por no poder verificarlo

- **Rangos típicos de tamaño de cada molino** (martillos, púas, cónico, chorro): solo en catálogos de fabricantes y fragmentos; ninguna fuente oficial gratuita leída los da. Se dice así en el texto.
- **Tamaño típico del micronizado («pocos micrómetros»)**: no verificado en fuente leída; no se da cifra.
- **Definición del número de malla como aberturas por pulgada**: no está en el texto armonizado leído; solo se da la equivalencia de su tabla.
- **Cómo se comprueba la integridad de la malla en planta** (inspección, prueba concreta, frecuencia): ninguna guía gratuita leída lo describe; se remite al procedimiento.
- **Cifras del accidente de Imperial Sugar** (muertos y heridos) y detalles del informe de la CSB: www.csb.gov no accesible; solo fragmentos.
- **Texto de OSHA sobre el pentágono** y sus fichas: osha.gov no accesible; el nombre queda como fragmento y las condiciones se apoyan en el INSST.
- **Fichas del HSE británico sobre polvo combustible**: www.hse.gov.uk no accesible.
- **Valores de EMI o Kst de principios activos concretos** (tabla 4 de la NTP 827 ilegible en el texto extraído): no se dan.
- **Uso de nitrógeno como gas de molienda en micronizadores**: solo fragmentos; no se incluye.
