# Fuentes de «pH y conductividad a fondo» (`potenciometria-a-fondo`)

Copias descargadas en `scratchpad/lecciones/tmp-potenciometria/dl/` (Kuphaldt) y reutilizadas de otras carpetas del scratchpad (`src_patron/`, `src_valoracion/`, `lecciones/src_agua/dl/`, `lecciones/src_metro/dl/`). Cálculos en `tmp-potenciometria/calc/c.py`.

Abreviaturas de fuentes:
- **K-pH**: Kuphaldt, *Lessons in Industrial Instrumentation*, «Colorimetric and Potentiometric pH Measurement», https://control.com/textbook/continuous-analytical-measurement/ph-measurement/
- **K-cond**: Kuphaldt, «Measuring Electrical Conductivity», https://control.com/textbook/continuous-analytical-measurement/conductivity-measurement/
- **K-chem-pH**: Kuphaldt, «Basics of pH Measurement in Industrial Control», https://control.com/textbook/chemistry/ph/
- **K-ions**: Kuphaldt, «Ions in Liquid Solutions», https://control.com/textbook/chemistry/ions-in-liquid-solutions/
- **K-const**: Kuphaldt, «Unit conversions and physical constants», https://control.com/textbook/physics/unit-conversions-and-physical-constants/
- **RD 2032/2009**: Real Decreto 2032/2009, unidades legales de medida, texto consolidado, https://www.boe.es/buscar/act.php?id=BOE-A-2010-927
- **VIM**: JCGM 200, https://jcgm.bipm.org/vim/en/2.39.html y https://jcgm.bipm.org/vim/en/2.41.html
- **OMS TRS 957**: WHO good practices for pharmaceutical quality control laboratories, TRS 957 (2010), anexo 1
- **OMS TRS 1033 an. 3**: WHO Good manufacturing practices: water for pharmaceutical use
- **ICH Q7**: https://database.ich.org/sites/default/files/Q7%20Guideline.pdf
- **FDA ORA IV-01**: FDA, ORA Laboratory Manual Vol. IV Section 1, Laboratory Orientation (MAN-000054, rev. 03, 08/12/2022), www.fda.gov

| Dato, fórmula o afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| Tensión en voltios; mV = milésima de voltio; siemens = A/V | RD 2032/2009 (tabla de unidades derivadas: conductancia eléctrica, siemens, S, A/V) | Leído |
| La medida electroquímica de pH se basa en la ecuación de Nernst; tensión a través de una membrana selectiva | K-pH | Leído |
| Bulbo de vidrio especial selectivo a H⁺, con tampón interno de pH 7; tensión nula si la muestra tiene pH 7; signo contrario por encima de 7 | K-pH | Leído |
| Hace falta electrodo de referencia; electrodo combinado es la configuración más común; orificio por el que el líquido llega a la referencia | K-pH | Leído |
| Muchas sondas llevan sensor de temperatura (RTD) incorporado | K-pH («many pH probe assemblies have built-in RTD temperature sensors») | Leído |
| pH es la actividad de iones hidrógeno | K-pH, K-chem-pH | Leído. «En disoluciones diluidas casi coinciden»: simplificación didáctica; K-chem-pH dice que en agua pura todos los H⁺ son activos. FDA ORA IV-01 menciona el error por usar molaridad en vez de actividad |
| E = (2,303 RT/F)·(7 − pH); pendiente = 2,303 RT/(nF), n = 1 | K-pH | Leído |
| Valores de e = 1,602176634 × 10⁻¹⁹ C, k = 1,380649 × 10⁻²³ J/K, N_A = 6,02214076 × 10²³ mol⁻¹ (exactos) | RD 2032/2009, apartados 2.4 a 2.6 | Leído |
| F = N_A·e = 96485,33 C/mol; R = N_A·k = 8,3145 J/(mol·K) | Cálculo con los valores del RD | Recalculado (96485,332; 8,314463). Contrastado con K-const (CODATA 2006: F = 96485,3399; R = 8,314472) y K-pH (96485 y 8,315) |
| 59,16 mV/pH a 25 °C | Cálculo (ln 10 = 2,302585) | Recalculado: 59,159. Kuphaldt da 59,17 porque redondea 2,303 y 8,315 |
| Tabla de pendientes: 54,20 (0 °C), 58,17 (20 °C), 59,16 (25 °C), 62,14 (40 °C), 64,12 (50 °C), 66,10 (60 °C) | Cálculo | Recalculado. Coincide con «Ácidos, bases y pH a fondo» (59,2 y 64,1). Kuphaldt da 68,11 a 70 °C (con redondeos); recalculado 68,09 |
| Ideal a 25 °C: 0 mV a pH 7, +177,5 mV a pH 4, −177,5 a pH 10; 0,1 pH = 5,9 mV | K-pH (tabla) y cálculo | Leído y recalculado (177,48; 5,92) |
| Electrodos de ~700 MΩ; 30 pies de RG-58U; constante de tiempo 0,6 s; casi 3 s para seguir el cambio; cable corto también por ruido; preamplificador | K-pH | Leído (30 pies ≈ 9,1 m, recalculado) |
| Pendiente real algo menor que la teórica; baja con la edad; pendiente baja puede indicar que hay que cambiar la sonda | K-pH | Leído |
| Punto cero (isopotencial) teórico a pH 7; se desplaza por problemas en la unión de referencia o contaminación del tampón interno | K-pH | Leído |
| Dos puntos definen la recta; calibración con dos tampones; elegir tampones que encierren el rango (ejemplo 7,5–9 con 7 y 10); tampones habituales 4, 7 y 10 | K-pH | Leído |
| Lecturas de calibración (+6,0 / +176,5 / −163,5 mV), muestra +95,0 mV, electrodo viejo +18/+166 mV, muestra a 50 °C −110,0 mV | Valor de ejemplo declarado | Cálculos recalculados: 57,02 mV/pH; 96,4 %; pH cero 7,11; 5,44 frente a 5,39; 56,31 mV/pH y 95,2 %; 49,50 mV/pH y 83,7 %; 61,80 mV/pH; 8,88 frente a 9,03 |
| Criterio de pendiente 95–105 % | Valor de ejemplo declarado | El criterio real no se leyó en ninguna fuente gratuita: en el texto se dice que lo fija el procedimiento. 95–105 % solo apareció en fragmentos de buscador (SOP de la EPA, formularios de laboratorio) |
| Calibración frente a ajuste («autocalibración» es un nombre erróneo); el ajuste requiere calibración previa | VIM 2.39, nota 2 y anotación | Leído (copia en `src_patron/vim_2.39.html`) |
| Trazabilidad metrológica: cadena documentada ininterrumpida de calibraciones | VIM 2.41 | Leído (copia en `src_patron/vim_2.41.html`) |
| Los pHmetros se verifican con tampones certificados antes de usarlos | OMS TRS 957, apartado 12.6 | Leído (`src_patron/who957.txt`) |
| Instrumentos que no cumplen criterios de calibración no se usan | ICH Q7, 5.34 | Leído |
| Controles en proceso por personal de producción cualificado, ajustes dentro de límites aprobados por calidad, todo documentado en el registro de lote | ICH Q7, 8.33 | Leído |
| Compensación de temperatura: la sonda de temperatura da al equipo la pendiente correcta | K-pH | Leído. Pendiente a 50 °C escalando por T absoluta: cálculo |
| Agua pura: pH 7,00 solo a 25 °C, 6,51 a 60 °C, neutra a cualquier temperatura | K-chem-pH (tabla de Kw) | Leído |
| Mantener el vidrio siempre húmedo; la hidratación es necesaria; desgaste por desprendimiento de capas; vida limitada incluso en estante | K-pH | Leído |
| No usar cepillo, toalla ni abrasivos; tabla de limpieza (tensioactivo no iónico o metanol; pepsina ácida; disolución ácida; tiourea; agua desionizada); enjuague final con agua desionizada; remojo en disolución tibia o agua desionizada para el orificio de referencia | K-pH | Leído |
| Rellenar electrolito en algunas sondas | K-pH | Leído |
| pH en metanol o metanol-agua 50 % no exacto; el electrodo necesita superficie recubierta de agua | FDA ORA IV-01 (respuesta a la pregunta 2 de pH meters) | Leído (`src_valoracion/fda73548.txt`) |
| El analista debe conocer el intervalo y la exactitud de cada papel indicador; ejercicio de medir pH de agua desionizada (inestable, distinto de 7,00) | FDA ORA IV-01, 7.2 B.4 y B.7 | Leído. El manual no da la respuesta; la «pista» del texto (agua pura casi aislante) es de K-ions |
| Papel indicador: valor aproximado por comparación de color; no apto para medida continua | K-pH | Leído |
| Error alcalino: a pH alto y con mucho sodio el vidrio responde al sodio y marca menos; depende del vidrio; existen electrodos especiales | Hamilton y Emerson/Rosemount (documentos de fabricante) y copia del libro de Kuphaldt en technocrazed.com | Solo fragmento de buscador. Se usa sin cifras |
| Conductividad en líquidos por iones; agua pura casi aislante; medida inespecífica; útil cuando cualquier ion es indeseable o se conoce el ion | K-cond, K-ions | Leído |
| G = k·A/d; constante de celda θ = d/A en cm⁻¹; k = G·θ | K-cond | Leído |
| 1 mS/cm = 1000 µS/cm | RD 2032/2009 (prefijos SI) | Cálculo de prefijos |
| Ejemplos de conductividad: θ = 0,1 y G = 8,0 µS; patrón 100,0 µS/cm y G = 980 µS | Valor de ejemplo declarado | Recalculado: 0,80 µS/cm; 0,1020 cm⁻¹; +2,0 % |
| Celda de dos electrodos: los depósitos hacen que lea menos de lo real | K-cond | Leído |
| Celda de cuatro electrodos: la suciedad apenas afecta | K-cond | Leído |
| Celda toroidal: casi inmune a la suciedad, preferida por robusta, no apta para agua de alta pureza farmacéutica | K-cond | Leído |
| Agua pura a 60 °C: 3,1 × 10⁻⁷ M de H⁺ (unas tres veces más que a 25 °C) | K-ions | Leído |
| Resultados referidos a 25 °C; fórmula lineal κ25 = κT / (1 + α(T − 25)); coeficiente cercano a 2 %/°C | Fragmentos de buscador (PMDA, Mettler Toledo, Reagecon) | Solo fragmento de buscador. En el texto: fórmula presentada como «la lineal habitual» y α = 0,02 /°C como valor de ejemplo declarado; cálculos recalculados (2,17 y, en el test, 2,54 µS/cm) |
| Conductividad no dice nada de microbios; conductividad y TOC en línea en el agua | FDA (guía de sistemas de agua de alta pureza) y OMS TRS 1033 an. 3, 12.3, ya en «Agua farmacéutica a fondo» | Leído (`lecciones/src_agua/dl/`) |
| Sonda colgada en depósito abierto de efluente; sonda de inserción por válvula de bola, retirable con la línea en presión | K-pH | Leído |
| Efluente: 10 m³ a pH 2, HCl puro; 90, 9 y 1 mol; 3600, 360 y 40 g de NaOH (40 g/mol); 1 mol más lleva a pH 10 | Valor de ejemplo declarado y cálculo | Recalculado. Masa molar 40 g/mol como en «Ácidos, bases y pH a fondo» |
| Neutralización exotérmica | K-chem-pH | Leído (no se repite en el texto: está en la lección de ácidos y bases) |
| Test: 62,15 mV/pH con 2,303, R 8,3145 y F 96485 a 313,15 K; 96,67 %; pH 8; 1,25 µS/cm; 2,54 µS/cm | Cálculo | Recalculado con python |
| Plant y batchRecord (R-215, LM-30, PH-07, AT-215, pendientes 88 % y 97,8 %, lecturas 9,6 y 9,21) | Valores de ejemplo declarados | Ficticios |

## Lo que se quiso incluir y se dejó fuera por no poder verificarlo
- Texto de la Farmacopea Europea 2.2.3 y 2.2.38 y de USP <645>/<791>: EDQM, drugfuture.com, digicollections y edqm.eu dan error de red. Lo visto en el buscador (calibración con ftalato y otro tampón, tampones a menos de 4 unidades, verificación de la constante de celda a ±2 % o ±5 %, etapa 1 del agua sin compensación de temperatura con 1,3 µS/cm a 25 °C, 2,1 µS/cm en etapa 2) no se usa. El texto solo dice que para el agua farmacéutica manda el método de farmacopea recogido en el procedimiento.
- Valores de pH de los tampones a distintas temperaturas (tablas de farmacopea): no leídos.
- Criterios numéricos de aceptación de pendiente y offset: solo en fragmentos (EPA, formularios); se dejan al SOP.
- pH a partir del cual aparece el error alcalino y su tamaño: solo fragmentos de fabricante.
- Coeficiente de temperatura real de la conductividad (≈ 2 %/°C) y sus causas (movilidad iónica, viscosidad): solo fragmentos; queda como valor de ejemplo.
- Composición de la disolución de conservación del electrodo (Kuphaldt menciona KOH en el capuchón; los fabricantes suelen indicar KCl): no se concreta; se dice «la que indique el fabricante».
- Valor de la disolución patrón de KCl 0,01 mol/L (1413 µS/cm a 25 °C): solo fragmento; no se usa.
- Por qué el pH del agua desionizada es inestable (CO₂ del aire, baja fuerza iónica): el manual de la FDA plantea la pregunta sin responderla; solo se da la pista de Kuphaldt.
- GUM: no fue necesario para el contenido; la incertidumbre se remite a «Instrumentos de medida a fondo».
