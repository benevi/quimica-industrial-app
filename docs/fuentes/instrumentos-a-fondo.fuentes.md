# Fuentes de la lección `instrumentos-a-fondo`

Aviso general: el libro «Lessons in Industrial Instrumentation» (control.com/textbook) no se pudo leer: control.com responde 403 con un desafío de Cloudflare a curl incluso con cabeceras de navegador, e ibiblio.org no es accesible desde la sesión. Por eso el funcionamiento físico de varios instrumentos se apoya solo en fragmentos del buscador (marcados abajo) y no se da ninguna cifra tomada de ellos, salvo los 100 Ω de la Pt100 (ver nota).

Leyenda de «cómo se comprobó»: **Leído** = texto leído en el documento descargado con curl. **Fragmento** = solo visto en el resumen o fragmento del buscador web. **Cálculo** = recalculado con python. **Ejemplo** = valor de ejemplo declarado en el texto. **Razonamiento** = consecuencia lógica de un principio ya fuenteado.

| Dato o afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| Sensor: elemento del sistema de medida directamente afectado por lo que se mide (ejemplo: bobina de un termómetro de resistencia de platino, tubo Bourdon) | VIM, JCGM 200, 3.8 — https://jcgm.bipm.org/vim/en/3.8.html | Leído (inglés; traducción propia) |
| Transductor de medida da una salida con relación definida con la entrada (ejemplos: termopar, electrodo de pH, tubo Bourdon) | VIM 3.7 — https://jcgm.bipm.org/vim/en/3.7.html | Leído |
| Cadena sensor, transmisor, señal, indicador; indicador local frente a transmisor | Lección existente `medidas-de-proceso` (src/content/nivel13.ts) y VIM 4.1 (una indicación puede mostrarse o transferirse a otro dispositivo) | Leído (VIM 4.1); el resto es descripción general, sin cifra |
| Señal de 4 mA (mínimo) a 20 mA (máximo), proporcional | Lección existente `medidas-de-proceso`; fragmentos de ni.com, fluke.com, Wikipedia «Current loop» | Fragmento |
| Corriente y no tensión: la caída de tensión en el cable no afecta a la señal; larga distancia; menos sensible al ruido | Fragmentos de ni.com («4-20 mA Current Loop Fundamentals»), fluke.com, us.rs-online.com | Fragmento |
| Cero vivo: 0 mA indica cable roto o fallo; con cero en 0 mA sería ambiguo | Fragmentos de industrialmonitordirect.com, predig.com, Wikipedia; coherente con `medidas-de-proceso` | Fragmento |
| Los 4 mA alimentan el transmisor de dos hilos | Fragmento de us.rs-online.com / predig.com | Fragmento |
| Señal fuera de 4-20 mA = aviso de fallo; existe NAMUR NE 43 que fija valores | Solo idea. NE 43 es de pago y no se leyó; el buscador ofreció cifras que NO se usan | Fragmento (sin cifras) |
| Fórmulas valor = mínimo + (mA − 4)/16 × span y su inversa | Proporción lineal | Cálculo |
| Ejemplos: 12 mA en 0-150 °C = 75 °C; 90 °C = 13,6 mA; 7,2 mA en 0-6 bar = 1,2 bar; 10 mA en −20 a 180 °C = 55 °C; 0 bar g en −1 a 3 bar g = 8 mA | Valores de ejemplo | Cálculo (python) |
| Rango = intervalo nominal de indicaciones («nominal range»); span = diferencia entre los extremos (ejemplo del VIM: −10 V a +10 V da 20 V; «span of a nominal interval») | VIM 4.4 y 4.5 — https://jcgm.bipm.org/vim/en/4.4.html , /4.5.html | Leído |
| Exactitud: proximidad entre valor medido y valor verdadero; no es una magnitud numérica | VIM 2.13 | Leído |
| Precisión: proximidad entre indicaciones de medidas repetidas en condiciones especificadas; repetibilidad: precisión en condiciones de repetibilidad | VIM 2.15 y 2.21 | Leído |
| Error = valor medido menos valor de referencia | VIM 2.16 | Leído |
| Resolución: menor cambio de la magnitud que produce un cambio perceptible en la indicación | VIM 4.14 (y 4.15, resolución de un dispositivo visualizador) | Leído |
| Deriva: cambio continuo o incremental de la indicación en el tiempo debido al instrumento, no a la magnitud medida | VIM 4.21 | Leído |
| Tiempo de respuesta a un escalón: desde el cambio brusco hasta que la indicación se asienta | VIM 4.23 | Leído |
| Error máximo permitido; el VIM dice que «tolerancia» no debería usarse para designarlo (en la lección se avisa de que en planta se le llama tolerancia) | VIM 4.26 | Leído |
| Ejemplos de exactitud, repetibilidad, resolución y deriva (80,0/80,2 °C; 50,3 kg; 80,24 °C) | Valores de ejemplo | Ejemplo |
| ±0,5 % de 200 °C = ±1 °C; ±0,25 % de 6 bar = ±0,015 bar = ±15 mbar; ±0,1 % de 2000 kg = ±2 kg; 2/40 = 5 % | Valores de ejemplo | Cálculo (python) |
| RTD: sensor cuya resistencia varía con la temperatura; hilo (normalmente platino) bobinado sobre núcleo aislante; relación temperatura-resistencia «quite linear»; hay que alimentar el circuito; no necesita unión de referencia | FDA, Inspection Technical Guide n.º 37 «Temperature Sensors in the Regulated Industry» — https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/inspection-technical-guides/temperature-sensors-regulated-industry | Leído |
| Pt100 = 100 Ω a 0 °C | Lección existente `medidas-de-proceso`; fragmento de ti.com (SBAA275) y analog.com | Fragmento (única cifra tomada de fragmento; es la definición del nombre «Pt100» y ya figuraba en la app) |
| Conexión a 2, 3 y 4 hilos: la resistencia del cable se suma (2 hilos); 3 hilos la compensa suponiendo hilos iguales y es la más usada; 4 hilos separa corriente y medida y es la más exacta | Fragmentos de ti.com (SBAA275), analog.com (CN0383, Analog Dialogue) | Fragmento |
| «2 hilos marca de más» | Si la resistencia medida es mayor y la resistencia sube con la temperatura, la lectura es mayor | Razonamiento |
| Termopar: dos hilos de metales distintos, de la unión de medida a la unión de referencia; genera una tensión casi proporcional a la diferencia de temperatura entre unión caliente y fría; la unión de referencia se mantiene a temperatura conocida; no lineal (tablas o linealizador); amplio intervalo; no sufre autocalentamiento | FDA ITG n.º 37 (misma URL) | Leído |
| Compensación de unión fría (nombre) | 40 CFR 1065.315 («cold-junction compensated»), visto en el extracto del buscador de eCFR | Fragmento (extracto de la API de ecfr.gov) |
| Tipos de termopar más comunes K, J, T | Fragmentos de te.com, omega.com, its90.nist.gov | Fragmento (solo mención) |
| Tabla Pt100 frente a termopar: la RTD es «by far the most accurate, sensitive, and stable» | FDA ITG n.º 37 | Leído |
| Vaina: permite sacar la sonda sin abrir el equipo | Lección existente `medidas-de-proceso` | Leído en la app |
| La vaina añade masa y retrasa la respuesta; si la punta no toca el fondo queda aire y el retraso crece mucho | Fragmentos de blog.isa.org / automation.com («Temperature sensor installation for best response and accuracy») y processingmagazine.com | Fragmento (sin cifras) |
| Fallos: sonda fuera de la vaina, nivel bajo, cable roto | Consecuencia de lo anterior y del cero vivo | Razonamiento |
| Tubo Bourdon: tubo curvado que la presión deforma y mueve la aguja | VIM 3.8 lo cita como sensor de un manómetro (leído); mecanismo: fragmento de wika.com | Fragmento |
| Sello de diafragma: membrana que separa el instrumento del producto; líquido de relleno que transmite la presión; protege de medios agresivos; versiones higiénicas enrasadas, aptas para limpieza en sitio; el relleno es un posible contaminante | Fragmentos de blog.wika.com (varias entradas) | Fragmento |
| Presión manométrica y absoluta | Lección `inertizacion-a-fondo` (ya fuenteada) | Leído en la app |
| Presión diferencial: diferencia entre dos tomas | Resumen del buscador (conocimiento general) | Fragmento |
| Toma cerrada o taponada: la presión queda atrapada y el transmisor sigue marcando ese valor sin que nadie lo note | Fragmentos de isa.org / automation.com («Troubleshooting pressure gauges and impulse lines») y nota técnica de Emerson sobre «plugged impulse line» | Fragmento |
| Nivel por presión: h = P/(ρ·g) | Lección `fluidos-a-fondo` (no se repite la cuenta) | Leído en la app |
| Con un líquido menos denso que el configurado, el nivel por presión marca de menos | h calculada = P/(ρ configurada·g) = h real × ρ real/ρ configurada; fragmentos de vega.com lo confirman | Razonamiento + fragmento |
| Radar: microondas, tiempo de ida y vuelta del eco; sin contacto | Fragmentos de new.abb.com y emerson.com | Fragmento |
| Ultrasonidos: pulso de sonido y eco; la espuma absorbe la señal; el vapor afecta; no funciona en vacío | Fragmentos de apgsensors.com, controlglobal.com; el buscador cita también control.com/textbook («echo») | Fragmento |
| Horquilla vibrante: la frecuencia baja cuando el líquido la cubre y el interruptor conmuta | Fragmento de emerson.com («About vibrating forks») y patentes | Fragmento |
| Células de carga: las tuberías que empujan o tiran y el contenido de las tuberías alteran la pesada | Fragmentos de mt.com, hbkworld.com, automation.com | Fragmento |
| Agitador: ecos de las palas, lectura que salta con ritmo; incrustaciones: lectura atascada | Fragmentos de ics-schneider.de, tipl.com, vega.com | Fragmento |
| Coriolis: tubos que oscilan, infiere el caudal másico, y la densidad por la frecuencia natural de los tubos | 43 CFR 3174.1, definición «Coriolis meter» — https://www.ecfr.gov/current/title-43/section-3174.1 | Leído |
| Coriolis: el más exacto; sirve para líquidos no conductores | Fragmento de engineeringtoolbox.com / emerson.com | Fragmento |
| Electromagnético: ley de Faraday, solo líquidos conductores; la mayoría de hidrocarburos quedan fuera | Fragmentos de engineeringtoolbox.com, emerson.com; coherente con `medidas-de-proceso` | Fragmento |
| Vortex: remolinos tras un obstáculo; líquidos, gases y vapor | Fragmentos de emerson.com, yokogawa.com | Fragmento |
| Placa de orificio: caída de presión en un estrechamiento; caudal proporcional a la raíz cuadrada; poco exacta a caudal bajo; el desgaste reduce la exactitud; se usa con vapor, agua caliente y gas | Fragmentos de engineeringtoolbox.com; extractos de eCFR 43 CFR 3275.16 (vapor o agua caliente con placa de orificio) y 43 CFR 3175 (gas) | Fragmento |
| Rotámetro: tubo vertical más ancho arriba con flotador que sube con el caudal; lectura local | Fragmento de engineeringtoolbox.com / yokogawa.com | Fragmento |
| «Los litros cambian con la temperatura; los kilogramos no» | Dilatación térmica (la masa se conserva) | Razonamiento |
| Totalizador: acumula el volumen o la masa que ha pasado | 43 CFR 3174.10 («non-resettable totalizer for indicated volume»), extracto de la API de ecfr.gov | Fragmento (extracto de eCFR) |
| pH: se mide la diferencia de potencial entre un electrodo de vidrio y uno de referencia (o sonda combinada); se estandariza con tampones de pH conocido (4,0 y comprobación con 7,0); la temperatura influye; el retraso en la respuesta indica envejecimiento o ensuciamiento; no dejar secar los electrodos; limpiar y estandarizar con frecuencia | 21 CFR 114.90(a) — https://www.ecfr.gov/current/title-21/section-114.90 | Leído |
| Conductividad: depende de los iones disueltos; vigila el agua purificada | Lecciones existentes de la app (`agua-farmaceutica` y la de pH y conductividad) | Leído en la app |
| Oxígeno: analizador para confirmar la inertización | Lección `inertizacion-a-fondo` | Leído en la app |
| Calibración: operación que relaciona los valores de los patrones con las indicaciones; no confundir con ajuste ni con verificación | VIM 2.39 (y nota 2) | Leído |
| Ajuste: operaciones para que el sistema dé las indicaciones prescritas; la calibración es requisito previo; tras ajustar suele haber que recalibrar | VIM 3.11 (notas 2 y 3) | Leído |
| Verificación: aportar evidencia objetiva de que algo cumple los requisitos | VIM 2.44 | Leído |
| Trazabilidad: cadena ininterrumpida y documentada de calibraciones hasta una referencia | VIM 2.41 | Leído |
| ICH Q7 5.30 a 5.35 (calibrar equipos críticos según procedimientos y calendario; patrones trazables a patrones certificados, si existen; registros; estado de calibración conocido y verificable; no usar los que no cumplen; investigar desviaciones en instrumentos críticos desde la última calibración correcta) | ICH Q7, apartado 5.3 — https://database.ich.org/sites/default/files/Q7%20Guideline.pdf | Leído (pdftotext; paráfrasis en español) |
| Etiqueta de calibración con fechas; no usar si está vencida | Interpretación práctica de ICH Q7 5.33 y 5.34; coherente con `medidas-de-proceso` | Leído (ICH) + práctica general |
| Comprobación en tres puntos del TT-310: tolerancia ±0,75 °C; errores +0,2, +0,4, +0,9 °C; 0,9/150 = 0,6 % | Valores de ejemplo | Cálculo (python) |
| Seguridad intrínseca: modo de protección «i» | INSST, NTP 369 — https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/11-serie-ntp-numeros-366-a-400-ano-1996/ntp-369-atmosferas-potencialmente-explosivas-instalaciones-electricas | Leído (la NTP lo nombra y lo liga a la energía mínima de inflamación; no lo define) |
| Seguridad intrínseca: limita la energía eléctrica del circuito por debajo de la que puede inflamar por chispa o calentamiento | Fragmento del buscador (definición de EN 60079-11 citada por hsa.ie y Wikipedia); la norma no se leyó | Fragmento |
| Cómo detectar un instrumento que miente (comparar con otro instrumento, con el balance, con la lógica; lectura congelada) y qué hacer (no corregir, anotar, avisar) | Razonamiento a partir de lo anterior; el registro de lo que marca el instrumento sigue lo ya escrito en `inertizacion-a-fondo` («se anota lo que marca el instrumento») | Razonamiento |
| Ejemplo de planta (R-310, TT-310, TI-311, TT-312, NB-22): 6,56 mA en 0-150 °C = 24,0 °C | Equipos y valores ficticios | Cálculo (python) |
| Preguntas numéricas: 60 °C; 16 mA; 105 °C; ±1,25 °C; 10 %; 0,3 % | Valores de ejemplo | Cálculo (python) |

## Lo que quería incluir y dejé fuera por no poder verificarlo

- **0,385 Ω por grado de la Pt100**: solo apareció en fragmentos del buscador (ti.com, patentes). No hay fuente gratuita accesible desde la sesión (ni eCFR ni EUR-Lex ni la guía de la FDA lo dan). Fuera, y con ello el ejemplo de cuántos grados de error mete 1 Ω de cable.
- **Cifras de NAMUR NE 43** (umbrales de fallo por debajo de 4 mA y por encima de 20 mA): recomendación de pago; solo se cuenta la idea.
- **Cifras de exactitud típica** de cada instrumento, intervalos de temperatura de Pt100 y de cada tipo de termopar, y composición de los termopares K, J y T.
- **Tiempos de respuesta** concretos de una sonda con vaina y la regla de inserción mínima (solo fragmento).
- **Límites de los caudalímetros** que no salían en ninguna fuente leída: caudal mínimo del Vortex, sensibilidad del Coriolis a las burbujas, coste relativo.
- **Principio de medida de los analizadores de oxígeno** (paramagnético, electroquímico) y de las células de conductividad.
- **Barreras Zener o aisladores** de seguridad intrínseca y el marcado «Ex i»: la norma es de pago; se remite a `atex-a-fondo`.
- **Radar de onda guiada**, medida de nivel capacitiva, flotadores y tubos de burbujeo.
- Todo el contenido propio de «Lessons in Industrial Instrumentation» (control.com devolvió 403).
