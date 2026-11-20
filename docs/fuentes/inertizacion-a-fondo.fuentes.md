# Fuentes de la lección «Inertización a fondo» (inertizacion-a-fondo)

Sesión de verificación: 20 de noviembre de 2026. Desde esta sesión solo se podían abrir páginas de www.insst.es, www.boe.es y database.ich.org; el resto de la web solo era visible como fragmentos del buscador. Los cálculos se rehicieron con Python.

## Afirmaciones y cifras

| Afirmación o cifra de la lección | Fuente | Cómo se comprobó |
|---|---|---|
| El aire tiene 21 % de oxígeno, 78,1 % de nitrógeno y 0,9 % de argón | INSST, NTP 340, Introducción. https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/10-serie-ntp-numeros-331-a-365-ano-1995/ntp-340-riesgo-de-asfixia-por-suboxigenacion-en-la-utilizacion-de-gases-inertes | Leído en el PDF |
| El nitrógeno, a las presiones y temperaturas de uso, no reacciona con otros materiales | INSST, NTP 340, «Ámbito de aplicación» | Leído en el PDF |
| Triángulo del fuego: combustible, comburente (oxígeno) y fuente de ignición | INSST, tema 41 «Explosiones» (condiciones para que haya explosión). https://www.insst.es/documents/d/portal-insst/tema-41-explosiones ; ya está en la lección `carga-e-inertizacion` | Leído en el PDF |
| Inertizar con un gas inerte (p. ej. nitrógeno) empobrece la atmósfera en oxígeno hasta hacer imposible la inflamación | INSST, Guía técnica de atmósferas explosivas (RD 681/2003), ed. 2021, apartado «Trabajar en atmósferas inertes», pág. 58. https://www.insst.es/documentacion/catalogo-de-publicaciones/guia-tecnica-para-la-evaluacion-y-prevencion-de-los-riesgos-derivados-de-atmosferas-explosivas-en-el-lugar-de-trabajo | Leído en el PDF |
| Existe una concentración límite de oxígeno (CLO); hay que bajar el oxígeno con un margen de seguridad por debajo; es particular de cada sustancia y situación | Misma guía del INSST, pág. 58 | Leído en el PDF |
| Hay que garantizar que el oxígeno no vuelve a subir; el control por presión no asegura la inertización porque no distingue entre oxígeno, vapores inflamables y gas inerte | Misma guía del INSST, pág. 58 | Leído en el PDF |
| Motivos del margen (error del medidor, mala mezcla, rincones, entradas de aire) | Razonamiento propio, coherente con la guía del INSST y con NTP 340 (fallos del analizador, bolsas de gas) | Sin fuente literal: es explicación, no dato |
| Analogía de la vela en un tarro | Analogía didáctica | Sin fuente; no lleva cifras |
| 1 bar = 1000 mbar = 100 kPa; atmósfera normal = 1,01325 bar | BOE, Real Decreto 2032/2009, unidades legales de medida, tabla 8 y nota (a). https://www.boe.es/buscar/act.php?id=BOE-A-2010-927 | Leído en la página |
| Las condiciones atmosféricas van de 0,8 a 1,1 bar (apoya el redondeo a 1 bar) | INSST, tema 41 «Explosiones» | Leído en el PDF |
| Absoluta = manométrica + atmosférica; tabla de conversiones (0 bar g = 1 bar a; 2 bar g = 3 bar a; −0,8 bar g = 0,2 bar a) | Definición (ya figura en `nivel0.ts` y en la tarjeta `u-barg` de la app) y cálculo | Recalculado |
| Tres métodos: ciclos de vacío, ciclos de presión y barrido; el barrido se hace a presión ambiente y se usa cuando el equipo no está diseñado para presión ni vacío | Fragmentos del buscador (módulo sobre inertización que cita a Crowl y Louvar, *Chemical Process Safety*; entrada «Purging (gas)» de Wikipedia) | Solo fragmento de buscador; no se pudo abrir la página |
| Los ciclos de presión gastan más nitrógeno que los de vacío | Fragmento del buscador (ejemplo resuelto de un texto sobre inertización) y cálculo propio: 1,6 volúmenes frente a 6 | Fragmento de buscador y recalculado |
| En un recipiente cerrado a temperatura constante, la cantidad de gas es proporcional a la presión absoluta | Ley de los gases ideales (física básica) | No leída en línea en esta sesión; es la base del cálculo |
| Fórmula O₂ final = O₂ inicial × (P baja / P alta)ⁿ, en presión absoluta, válida para vacío y para presión | Deducción propia paso a paso (dilución). Coincide con fragmentos del buscador (boletín de purgas de Matheson: cociente entre presión de venteo y presión de entrada, ambas absolutas, elevado a n) | Deducido y recalculado; contraste solo por fragmento |
| Ejemplo 1: 200/1000 = 0,2; 21 % pasa a 4,2 %, 0,84 %, 0,17 % | Cálculo | Recalculado (4,2; 0,84; 0,168) |
| Ejemplo 2: 500/1000 = 0,5; 10,5 %, 5,25 %, 2,63 %, 1,31 % | Cálculo | Recalculado (10,5; 5,25; 2,625; 1,3125) |
| Ejemplo 3: 2 bar g = 3 bar a; factor 1/3 = 0,333; 7,0 %, 2,33 %, 0,78 % | Cálculo | Recalculado (7; 2,3333; 0,7778) |
| Ejemplo 4: ciclos para bajar de 21 % a menos de 2 %: 2 (vacío 200), 4 (vacío 500), 3 (presión 2 bar g) | Cálculo | Recalculado multiplicando ciclo a ciclo y con logaritmos (1,46; 3,39; 2,14, redondeados hacia arriba) |
| Gasto de nitrógeno: 0,8 volúmenes por ciclo de vacío a 200 mbar abs (1,6 en dos); 2 volúmenes por ciclo de presión a 2 bar g (6 en tres) | Cálculo: (P alta − P baja) / presión ambiente | Recalculado |
| Ejemplo 5: parar a 800 mbar abs da factor 0,8 y 10,75 % tras tres ciclos | Cálculo | Recalculado (10,752) |
| Nitrógeno impuro: O₂ final = O₂ N₂ + (O₂ inicial − O₂ N₂) × (P baja / P alta)ⁿ; con 0,5 % y factor 0,2: 4,6 %, 1,32 %, 0,66 % | Deducción propia (balance de mezcla) y cálculo. El 0,5 % es un supuesto, no un dato de ninguna planta | Deducido y recalculado (4,6; 1,32; 0,664) |
| Barrido con mezcla perfecta: cada volumen de equipo multiplica el oxígeno por 0,37; unos 2,4 volúmenes para bajar de 21 % a 2 % | Cálculo (dilución continua: e⁻¹ = 0,368; ln(21/2) = 2,35) | Recalculado, también por simulación numérica en un millón de pasos |
| En un equipo real el barrido puede dejar bolsas o barrer por zonas | INSST, NTP 340, «Aireación de espacios cerrados» (lo dice de la ventilación con aire; es el mismo fenómeno) | Leído en el PDF |
| Fuga: 200 mbar al 0,84 % + 100 mbar de aire, roto hasta 1000 mbar = 2,27 %; roto con aire = 16,97 % | Cálculo (suma de partes) | Recalculado (2,268; 16,968) |
| Abrir la boca de hombre, cargar sólidos, líneas sin purgar y vaciar sin reponer nitrógeno meten aire | Razonamiento físico; la guía del INSST pide garantizar que el oxígeno no aumenta | Sin cifra; no leído como lista en ninguna fuente |
| Los sistemas de inertización añaden nitrógeno cuando hay pérdidas (mantener el equipo con nitrógeno) | Guía técnica del INSST, pág. 58 | Leído en el PDF |
| Mantener una ligera sobrepresión hace que una fuga saque nitrógeno en vez de meter aire | Razonamiento físico | Sin fuente literal |
| El analizador de oxígeno no da garantía absoluta: puede tener defectos de ajuste o estar mal colocado | INSST, NTP 340, «Aireación de espacios cerrados» | Leído en el PDF |
| Los instrumentos críticos se calibran, su estado de calibración debe conocerse y no se usan si no cumplen | ICH Q7, apartados 5.30 a 5.34. https://database.ich.org/sites/default/files/Q7%20Guideline.pdf | Leído en el PDF |
| La hoja de producción recoge fechas y horas, equipo usado, resultados reales de los parámetros críticos y firmas de quien hace y de quien verifica los pasos críticos | ICH Q7, apartado 6.52 | Leído en el PDF |
| Oxígeno por debajo del 16 %: situación peligrosa; al 10 %: riesgo de asfixia mortal casi seguro | INSST, NTP 340, Introducción | Leído en el PDF |
| Los gases inertes son incoloros, inodoros e insípidos y asfixian sin aviso | INSST, NTP 340, «Características que definen la peligrosidad» | Leído en el PDF |
| Bastan dos bocanadas de gas inerte para perder la consciencia; introducir la cabeza por la abertura puede bastar | INSST, NTP 340 | Leído en el PDF |
| Entrada en recipientes: permiso de trabajo, ventilación con aire, análisis de la atmósfera, vigilante exterior | INSST, NTP 340, «Medidas técnicas de prevención»; INSST, NTP 223 (recintos confinados). https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/6-serie-ntp-numeros-191-a-225-ano-1989/ntp-223-trabajos-en-recintos-confinados | Leído en los PDF |
| Rescate: no precipitarse; entrar en la atmósfera peligrosa solo con equipo de respiración autónomo | INSST, NTP 340, «Actuación en caso de accidente» | Leído en el PDF |
| Riesgo en salas mal ventiladas y puntos de descarga de gas inerte | INSST, NTP 340, «Situaciones donde pueden producirse atmósferas suboxigenadas» | Leído en el PDF |
| La inertización obliga a prever el riesgo de asfixia de los trabajadores | Guía técnica del INSST, nota 35, pág. 58 | Leído en el PDF |
| Ejemplo de planta (R-204, AO-204, KV-17, 150 mbar abs: 3,15 %, 0,47 %, 0,07 %; 3,8 % medido es unas cincuenta veces lo esperado) | Ficticio; cifras por cálculo | Recalculado (3,15; 0,4725; 0,0709; 3,8/0,0709 = 53,6) |
| Preguntas numéricas: 2,5 bar a; 0,21 %; 1,34 %; 2 ciclos; 2,55 %; 2,2 % | Cálculo | Recalculado (2,5; 0,21; 1,344; 5,25 y 1,3125; 2,55; 2,2) |

## Lo que se quería incluir y se dejó fuera por no poder verificarlo

- **Valores de LOC por sustancia** (metanol, acetona, tolueno, hidrógeno...). El buscador mostró cifras de un artículo de AIChE y de Wikipedia, pero no se pudo abrir ninguna página para leerlas, y el INSST no las publica en los documentos consultados. La lección explica el concepto sin cifras por sustancia.
- **Márgenes numéricos de seguridad bajo el LOC** (los de NFPA 69 o de las normas europeas de inertización): son normas de pago y no se pudieron leer.
- **Que los ciclos de presión son más rápidos que los de vacío**: el buscador no lo confirmó.
- **Tipos de sensor de oxígeno** (electroquímico, paramagnético) y sus limitaciones: sin fuente gratuita accesible en esta sesión.
- **Pureza típica del nitrógeno de red o de generador**: sin fuente; el ejemplo usa un 0,5 % como supuesto declarado.
- **Tabla de síntomas por nivel de oxígeno** de la NTP 223: en el PDF la tabla es una imagen y no se pudo leer; solo se usan las dos cifras de la NTP 340 (16 % y 10 %).
- **Mínimo de 20,5 % de oxígeno para entrar en un recinto** (NTP 223): leído y verificado, pero se dejó fuera para no alargar; puede añadirse.
- **Efecto de la temperatura y la presión sobre el LOC**, y su dependencia del gas inerte usado: solo aparecía en fragmentos del buscador.
- **Texto literal de Crowl y Louvar** (*Chemical Process Safety*) sobre los tres métodos y sus ecuaciones: no accesible; las fórmulas de la lección están deducidas y recalculadas, no citadas.

Para leer esas fuentes habría que permitir en la red de la sesión, entre otros, www.aiche.org, en.wikipedia.org y cdc.gov.
