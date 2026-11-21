# Fuentes: «Tamaño de partícula a fondo» (`tamano-de-particula-a-fondo`)

Documentos descargados y leídos en `scratchpad/src_particula/` (PDF y texto con `pdftotext -layout`; el árbol de decisión de Q6A es una imagen y se leyó renderizando la página 27 con `pdftoppm`). Cuentas en `src_particula/calc/calc.py`.

| Abreviatura | Documento | URL |
|---|---|---|
| Q6A | ICH Q6A, Specifications: test procedures and acceptance criteria for new drug substances and new drug products: chemical substances (1999) | https://database.ich.org/sites/default/files/Q6A%20Guideline.pdf |
| Q7 | ICH Q7, Good Manufacturing Practice Guide for Active Pharmaceutical Ingredients | https://database.ich.org/sites/default/files/Q7%20Guideline.pdf |
| Q4B-12 | ICH Q4B anexo 12, Analytical sieving general chapter, versión Step 4 de 9 de junio de 2010 (intercambiabilidad) | https://database.ich.org/sites/default/files/Q4B%20Annex%2012%20Guideline.pdf |
| EMA-Q4B-12 | EMA, ICH Q4B anexo 12, Step 3 (EMEA/CHMP/ICH/730808/2009), con el apéndice A: texto inglés (borrador facilitado por el MHLW) de JP 3.04 «Particle Size Determination», armonizado con Ph. Eur. y USP: método 1 microscopía óptica y método 2 tamizado analítico | https://www.ema.europa.eu/en/documents/scientific-guideline/ich-q-4-b-annex-12-analytical-sieving-general-chapter-annex-12-note-evaluation-and-recommendation-pharmacopoeial-texts-use-ich-regions-analytical-sieving-general-chapter-step-3_en.pdf |
| FDA-2002 | FDA, Guidance for Industry «Nasal Spray and Inhalation Solution, Suspension, and Spray Drug Products — CMC Documentation» (julio 2002) | https://www.fda.gov/media/70857/download |
| FDA-nano | FDA, Guidance for Industry «Drug Products, Including Biological Products, that Contain Nanomaterials» (2022) | https://www.fda.gov/media/157812/download |
| FDA-2024 | FDA, presentación C. Guo, «OPQR Testing & Research to Support Guidance Development of Inhalation Products», SBIA, 24-9-2024 | https://www.fda.gov/media/184408/download |
| OMS-929 | WHO TRS 929 (2005), anexo 4, «WHO guidelines for sampling of pharmaceutical products and related materials» | https://cdn.who.int/media/docs/default-source/medicines/norms-and-standards/guidelines/inspections/trs929-annex4-guidelinessamplingpharmproducts.pdf?sfvrsn=c47a0070_1&download=true (copia ya descargada para «Muestreo en planta a fondo») |
| App | Lecciones de la app: «Cristalización» y «Molienda, micronización y tamizado» (nivel12-separacion.ts), «El secado a fondo» (nivel12-secado.ts), «Polimorfismo, sales y solvatos a fondo» (nivel3-polimorfismo.ts), «Tamaño de partícula y tamizado» (nivel8.ts) | src/content |

## Afirmación por afirmación

| Dato o afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| 1000 µm = 1 mm | Definición del prefijo micro | Cálculo |
| Para partículas irregulares hay muchas definiciones de tamaño; hay que indicar el diámetro medido y la forma | EMA-Q4B-12, «Particle Size Characterization» | Leído |
| Diámetro de área proyectada: diámetro del círculo con la misma área proyectada | EMA-Q4B-12 (define también Feret, Martin, longitud, anchura) | Leído |
| Cubo de 10 µm: esfera equivalente en volumen 12,4 µm; aguja 50 × 5 × 5 µm: círculo de igual área 17,8 µm, esfera de igual volumen 13,4 µm | Valores de ejemplo declarados; d = (6V/π)^(1/3) y d = raíz(4A/π) son geometría | Recalculado (12,407; 17,841; 13,365) |
| Instrumentos distintos pueden dar resultados distintos para el mismo atributo; describir qué se mide | FDA-nano, «Complementary methods» | Leído |
| Supuestos de forma en el análisis (p. ej., suponer una esfera) | FDA-nano, consideraciones generales | Leído |
| Pedir que se indique si la distribución es en intensidad, volumen o número | FDA-nano, «Reporting of results» | Leído |
| D10, D50, D90 como forma de describir la distribución | FDA-nano (d10, d50, d90); FDA-2002 (D10, D50, D90) | Leído |
| Notación Dv10 / Dv50 / Dv90 | Plantilla FDA de tablas de bioequivalencia por MDRS (https://www.fda.gov/media/172388/download?attachment), columnas «Dv10, Dv50, Dv90, SPAN» | Leído (solo encabezados de tabla) |
| Histograma de difracción láser y su curva acumulada; D10 = 17,5 µm, D50 = 58 µm, D90 = 149 µm por interpolación lineal | Valores de ejemplo declarados; la interpolación lineal es una aproximación didáctica declarada en el texto | Recalculado (17,5; 58,18; 149,09) |
| span = (D90 − D10) / D50 | FDA-2002, apartado de tamaño de gota (span [(D90-D10)/D50]) y nota 11 («Size ranges such as D10, D50, D90, and span ((D90 - D10)/D50)») | Leído |
| Span del ejemplo (149 − 17,5) / 58 = 2,27; quiz 160 / 80 = 2; planta (142 − 4) / 38 = 3,6 | Cálculo | Recalculado (2,267; 2; 3,63) |
| Una partícula de 100 µm tiene el mismo volumen que mil de 10 µm; 99,9 % en número, 50 % en volumen | Cálculo (volumen proporcional al cubo del diámetro) | Recalculado |
| La difracción láser mide una distribución en volumen | FDA-2024, diapositiva «Laser Diffraction: Cons: Measures volume-based PSD» | Leído |
| Tamizado da porcentaje en peso | EMA-Q4B-12 («weight percentage of powder in each sieve size range») | Leído; la relación peso-volumen (masa = densidad × volumen) es razonamiento propio |
| Microscopía cuenta partículas (distribución en número) | Implícito en EMA-Q4B-12 (medida de partículas individuales; el número de partículas caracterizadas debe ser suficiente) | Leído; la expresión «distribución en número» como consecuencia es deducción, coherente con FDA-nano |
| Tamizado: uno de los métodos más antiguos | EMA-Q4B-12 («one of the oldest methods») | Leído |
| Textos Ph. Eur. 2.9.38, JP 3.04 y USP <786> intercambiables en las regiones ICH | Q4B-12 Step 4 (2010), 2.1; también EMA-Q4B-12 Step 3 | Leído |
| Pensado para cuando al menos el 80 % pasa de 75 µm; por debajo, las fuerzas de cohesión y adhesión hacen que se peguen | EMA-Q4B-12 | Leído |
| Mide el lado de la abertura cuadrada mínima por la que pasa; estimación bidimensional | EMA-Q4B-12 | Leído |
| Muestra de 25 a 100 g con tamices de 200 mm | EMA-Q4B-12, «Test Specimen» | Leído |
| Agitar 5 min, repesar y repetir; punto final: cambio ≤ 5 % o 0,1 g; si el tamiz tiene < 5 % del total, ≤ 20 % | EMA-Q4B-12, «Endpoint Determination» y «Dry Sieving Method» | Leído |
| Más del 50 % en un tamiz: repetir con un tamiz intermedio | EMA-Q4B-12 | Leído |
| Pérdidas totales ≤ 5 % | EMA-Q4B-12, «Dry Sieving Method» | Leído |
| Humedad y electricidad estática afectan; si no se eliminan, otro método | EMA-Q4B-12 | Leído |
| Agregados formados al tamizar invalidan el análisis | EMA-Q4B-12, «Interpretation» | Leído |
| Para expresar acumulado que pasa, incluir un tamiz por el que pase todo | EMA-Q4B-12, «Interpretation» | Leído |
| Tamices de 710, 500, 355, 250, 180, 125, 90 µm | EMA-Q4B-12, tabla 3.04-1 (tamaños ISO recomendados) | Leído |
| Cuenta del tamizado (49,5 g recuperados, 1,0 % de pérdida, % retenido, acumulado, % que pasa, D50 ≈ 206 µm) | Valores de ejemplo declarados; cálculo de % sobre lo recuperado declarado como elección del ejemplo | Recalculado (D50 205,8) |
| Quiz: 9,0 / 40,0 = 22,5 %; 100 − 60,8 = 39,2 %; (50,0 − 48,2) / 50,0 = 3,6 % | Cálculo | Recalculado |
| Para tamaños por debajo de 75 µm considerar otro método | EMA-Q4B-12 | Leído |
| Principio de la difracción láser: las partículas grandes desvían la luz a ángulos pequeños y las pequeñas a ángulos grandes; detectores a varios ángulos; cálculo del tamaño a partir del patrón | Malvern Panalytical (https://www.malvernpanalytical.com/products/technology/laser-diffraction/) y Horiba, vistos en la herramienta de búsqueda | Fragmento de buscador (solo cualitativo, sin cifras; se presenta en el texto como «explicada por los fabricantes») |
| Resultado como esfera equivalente | FDA-nano (supuesto de esfera, leído) + fragmento de buscador (Malvern: «volume equivalent sphere diameter») | Leído / fragmento |
| Dispersión seca (aire a presión) y húmeda (líquido dispersante) | Fragmento de buscador (Malvern TN «Wet or liquid dispersion…», Sympatec RODOS) | Fragmento de buscador |
| Agente humectante si hace falta | EMA-Q4B-12 (ensayo límite por microscopía: «adding, if necessary, a wetting agent») | Leído (aplicado por analogía a la vía húmeda) |
| Ultrasonidos (sonicación) pueden alterar la muestra; diluir o secar puede cambiarla | FDA-nano, «Method suitability» y «Sample preparation» | Leído |
| Aglomerados que cuentan como partícula grande; microscopía muestra aglomerados y crecimiento de cristales | FDA-2002, apartado de tamaño de partícula en suspensiones («extent of agglomerates») | Leído; la consecuencia sobre el D90 es razonamiento propio |
| Dispersión excesiva que parte cristales | USP <429> citado en fragmento de buscador («comprobar que no se produce conminución de las partículas primarias») | Fragmento de buscador (USP es de pago; no se cita en el texto) |
| Elegir el medio teniendo en cuenta la solubilidad; medio en el que el polvo no se disuelve | EMA-Q4B-12, «Preparation of the Mount» y «Limit Test of Particle Size by Microscopy» | Leído (aplicado por analogía al dispersante de la vía húmeda; se dice así en el texto) |
| Definir aparato, teoría de cálculo, versión del programa, rango de medida, etc., del método de difracción láser | FDA-2002 | Leído |
| Microscopía: partículas de 1 µm o más; útil con partículas no esféricas; base para calibrar métodos más rápidos | EMA-Q4B-12, método 1 | Leído |
| Formas acicular, placa, equante | EMA-Q4B-12, «Particle Shape Characterization» | Leído |
| Luz polarizada: birrefringencia (colores de interferencia) y extinción al girar la platina | EMA-Q4B-12, «Crystallinity Characterization» | Leído |
| Calibración: tamaño por división = longitud del micrómetro de platina / divisiones del ocular; cada objetivo por separado | EMA-Q4B-12, «Visual Characterization» | Leído |
| 100 / 40 = 2,5 µm; 18 × 2,5 = 45 µm; quiz 100 / 50 = 2, 18 × 2 = 36 µm | Valores de ejemplo; cálculo | Recalculado |
| Q6A 3.3.1 b: tamaño puede afectar a disolución, biodisponibilidad o estabilidad en principios activos para sólidos o suspensiones; medir y fijar criterios | Q6A 3.3.1 b | Leído |
| Árbol de decisión n.º 3: primera pregunta (forma sólida o líquido con activo sin disolver; si no, no se requiere criterio para formas en disolución); cinco preguntas (disolución/solubilidad/biodisponibilidad, procesabilidad, estabilidad, uniformidad de contenido, aspecto); sí a cualquiera: fijar criterio; no a todas: no se requiere | Q6A, adjunto «Decision Tree #3», p. 23 | Leído en la imagen renderizada |
| Ejemplo «inyectable en disolución» | Ejemplo propio de «solution dosage forms» | Razonamiento |
| Ensayo de tamaño como control en proceso o de liberación, según su relevancia | Q6A 2.4 | Leído |
| Molienda y micronización al menos con las normas de la guía | Q7 1.3 (Scope) | Leído |
| Validar mezclas cuando las propiedades físicas son críticas, con tamaño y densidades aparente y compactada | Q7 8.45 | Leído |
| No mezclar lotes fuera de especificación para cumplir | Q7 8.41 | Leído |
| Varias cargas de centrífuga de una misma cristalización: parte del proceso, no mezcla | Q7 8.40 | Leído |
| Reprocesar repitiendo pasos del proceso establecido (p. ej., molienda) en general aceptable; si es en la mayoría de lotes, incluirlo en el proceso | Q7 14.20 | Leído |
| Cristalización lenta, cristales grandes; brusca, muchos finos que filtran mal | App, «Cristalización»; «Tamaño de partícula y tamizado» | Contenido de la app |
| Agujas finas se rompen al agitar | App, «Polimorfismo, sales y solvatos a fondo» | Contenido de la app |
| Volteo y paletas pueden romper o desgastar cristales; grumos | App, «El secado a fondo» | Contenido de la app |
| Parámetros del molino fijan el tamaño; integridad de la malla | App, «Molienda, micronización y tamizado» | Contenido de la app |
| Controles de micronización: velocidad de alimentación, presión y caudal de aire, tamaño de entrada, número de pasadas, reutilización de restos | FDA-2002 | Leído |
| Riesgo de segregación de graneles en el transporte | OMS-929, 4.2 | Leído |
| Cuchara pequeña: los granos grandes se caen; un solo movimiento; no dar golpecitos (segrega) | OMS-929, apéndice 1 «Scoops» | Leído |
| Sonda en vertical o en ángulo saca granos de distinto tamaño | OMS-929, apéndice 1 «Thieves» | Leído |
| Analogía de la caja de cereales | Experiencia cotidiana, sin valor técnico | No es un dato |
| Planta: lote AX-52, R-305, CF-310, SD-320, ML-330, límite D90 ≤ 150 µm, rampa 60 a 5 °C en 6 h, 80 rpm, resultados | Valores de ejemplo declarados (ficticios) | — |

## Lo que quería incluir y dejé fuera

- Rangos de medida de la difracción láser (desde y hasta cuántas micras): solo vistos en material de fabricantes; no se dan cifras.
- El texto de Ph. Eur. 2.9.31 / USP <429> / ISO 13320 (difracción láser): de pago; el capítulo 2.5.12 de la Farmacopea India (gratuito) y el texto japonés en pmda.go.jp no se pudieron descargar (hosts ipc.gov.in y www.pmda.go.jp fuera de la red de la sesión). Por eso el principio y la dispersión seca y húmeda se apoyan en fragmentos de buscador y se presentan solo de forma cualitativa.
- Requisitos de exactitud y repetibilidad de la difracción láser (p. ej., coeficientes de variación admitidos): no verificados.
- La notación x10/x50/x90 de ISO 9276: solo vista en fragmento; no se usa.
- El mecanismo físico de la segregación (percolación de finos, «efecto nuez de Brasil»): sin fuente leída; se queda en la descripción de la OMS y una analogía cotidiana.
- Definiciones de aglomerado y agregado: EMA-Q4B-12 (aggregate = masa de partículas adheridas; agglomerate = partículas fusionadas o cementadas) y FDA-nano (agglomerate = débilmente unidas; aggregate = fuertemente unidas) no coinciden; por eso el término del glosario lo dice y no se entra en la distinción.
- Ejemplos reales de especificaciones de tamaño de principios activos: no verificados; todos los límites son de ejemplo.
