# Fuentes de «Otras técnicas a fondo» (`otras-tecnicas-a-fondo`)

Copias locales en `scratchpad/lecciones/tmp-otras/dl/` (pdftotext -layout). Cálculos en `tmp-otras/calc/calc.py`.

Abreviaturas:
- **Q3D**: ICH Q3D(R2), adoptada el 26/04/2022, https://database.ich.org/sites/default/files/Q3D-R2_Guideline_Step4_2022_0308.pdf (copia ya descargada en la sesión desde database.ich.org, `src_impur/q3d.pdf`)
- **Q6A**: ICH Q6A (copia de `src_polimorf/dl/q6a.pdf`, database.ich.org); árbol de decisión 4 leído en la imagen de la página 24 (`src_polimorf/dl/t-28.png`)
- **FDA-POLI**: FDA, *ANDAs: Pharmaceutical Solid Polymorphism*, julio de 2007 (copia `src_polimorf/dl/f_83d463.pdf`, fda.gov)
- **EMA-NA**: EMA/409815/2020 Rev. 23, 10/10/2025, preguntas y respuestas sobre nitrosaminas (copia `src_impur/ema_rev23.pdf`, ema.europa.eu)
- **M7**: ICH M7(R2) (copia `src_impur/m7.pdf`)
- **FDA-NDMA**: FDA, *LC-HRMS Method for the Determination of NDMA in Metformin Drug Substance and Drug Product*, 04/02/2020, https://www.fda.gov/media/134914/download
- **EMA-CHEM**: EMA/CHMP/QWP/49484/2026, *Guideline on the chemistry of active substances*, adoptada el 16/02/2026, en vigor el 01/09/2026, https://www.ema.europa.eu/en/documents/scientific-guideline/guideline-chemistry-active-substances_en.pdf
- **ORA**: FDA ORA Lab Manual Vol. IV Section 3, *Drug Chemistry Analysis*, rev. 03, 07/10/2022, https://www.fda.gov/media/73554/download
- **EAM 4.4 / 4.7 / 2.4**: FDA *Elemental Analysis Manual*: 4.4 ICP-AES (https://www.fda.gov/media/95162/download), 4.7 ICP-MS v1.3 abril 2025 (https://www.fda.gov/media/191258/download), 2.4 *Contamination Control* v3.0 sept. 2021 (https://www.fda.gov/media/89631/download); índice en https://www.fda.gov/food/laboratory-methods-food/elemental-analysis-manual-eam-food-and-related-products
- **KUP**: T. Kuphaldt, *Lessons in Industrial Instrumentation*, capítulo de química, «Spectroscopy», https://control.com/textbook/chemistry/spectroscopy/

| Dato o afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| Lección corta `otras-tecnicas` y «a fondo» relacionadas (no repetir; títulos para remitir) | src/content/nivel7.ts, nivel7-*.ts, nivel3-polimorfismo.ts, nivel3-impurezas.ts, nivel3-quiralidad.ts, nivel8-termico.ts, nivel1-atomos.ts, nivel5-muestreo.ts, nivel10-oos.ts | Leído en el repo |
| Cada forma cristalina da su dibujo de picos; amorfo sin picos | polimorfismo-a-fondo (ya explicado allí); FDA-POLI | Leído |
| XRPD: picos reforzados solo en ciertos ángulos; gráfico de intensidad frente al ángulo (2θ) | Explicación general de libro de texto; solo vista en fragmentos del buscador (texto de USP <941> en drugfuture.com, no accesible) | Fragmento de buscador; sin cifras |
| Difracción de monocristal = prueba definitiva; XRPD puede dar prueba inequívoca; microscopía, análisis térmico, IR, Raman, RMN del sólido ayudan | FDA-POLI, apartado III.B | Leído en el documento |
| Q6A cita XRPD, IR del sólido, DSC/TGA/DTA, Raman, microscopía óptica, punto de fusión con microscopía de platina caliente y RMN del sólido para ver si hay varias formas | Q6A, 3.3.1 c) | Leído en el documento |
| Árbol de decisión 4: cribado de polimorfos; caracterizar con XRPD, DSC/termoanálisis, microscopía, espectroscopia; si propiedades distintas y afecta a seguridad, comportamiento o eficacia, criterio de aceptación | Q6A, árbol 4(1)-(2) | Leído en la imagen del documento |
| Conversión de forma por secado, molienda, micronización, granulación, compactación; también humedad y temperatura | FDA-POLI, apartado III.C (influencia en la fabricación) | Leído en el documento |
| El laboratorio a veces prepara la muestra (p. ej., molerla) según su método | Solo fragmento de buscador (USP <941>: la preparación suele limitarse a moler; no siempre necesario) | Fragmento de buscador; el texto solo dice que lo decide el procedimiento del laboratorio |
| RMN: núcleo como imán diminuto, alineación en el campo, pulso de radiofrecuencia, señal; posición según entorno, en ppm respecto a una referencia; tamaño según número de H; señales extra delatan otras sustancias; RMN de protón frecuente | Explicación general de libro de texto; solo vista en fragmentos del buscador (LibreTexts, Sigma-Aldrich, Wikipedia; chem.libretexts.org bloqueado en esta sesión) | Fragmento de buscador; ninguna cifra |
| Pruebas de estructura de una molécula nueva: análisis elemental con valores teóricos, IR, RMN interpretada, UV, espectros de masas, ruta de síntesis, reacciones diagnósticas, rayos X de cristal, masa molecular por MS | EMA-CHEM, 4.3.1 | Leído en el documento |
| Identificación específica: ejemplo IR; un solo tiempo de retención no es específico; aceptables combinaciones HPLC/UV diodos, HPLC/MS, GC/MS | Q6A, 3.2.1 b) | Leído en el documento |
| MS: iones separados según m/z | EAM 4.7 (barrido de m/z 5-240); FDA-NDMA (ion protonado, m/z exacto) | Leído en los documentos |
| Detector de masas muy sensible; identifica fragmentos de la molécula; da información estructural | ORA, 6.4.6 (detectores de GC) | Leído en el documento |
| Umbrales de identificación de impurezas | Remitido a «Impurezas a fondo» (ICH Q3A) | No se repite |
| NDMA: ingesta aceptable 96,0 ng/día; ejemplo con 300 mg/día = 0,32 ppm = 320 ppb | EMA-NA, ejemplo de dos nitrosaminas (pág. 18 aprox.) | Leído en el documento y recalculado |
| Nitrosaminas: cohorte de preocupación, TTC no aplicable de rutina | M7 (cohort of concern, N-nitroso); EMA-NA Q&A 10 | Leído; ya explicado en «Impurezas a fondo» |
| 96,0 / 500 = 0,192 ppm = 192 ppb (500 mg/día, valor de ejemplo declarado) | Cálculo | Recalculado (calc.py) |
| Reglas del LoQ: ≤ límite en rutina; ≤ 30 % para justificar ensayo reducido (*skip testing*); ≤ 10 % para omitir la especificación | EMA-NA, Q&A 9 | Leído en el documento |
| 57,6 ppb y 19,2 ppb | Cálculo | Recalculado |
| Método FDA: 500 mg en 5,0 mL de metanol; LoQ 3,0 ng/mL = 0,03 ppm; LOD 0,01 ppm | FDA-NDMA | Leído en el documento; 3,0 / 100 = 0,03 recalculado |
| Fórmula NDMA (ppm) = Aspl / As × Cs × V / W | FDA-NDMA, «Calculation» | Leído en el documento |
| 18000 / 12000 × 3,0 × 5,0 / 500 = 0,045 ppm (valores de ejemplo declarados) | Cálculo | Recalculado |
| m/z 75,0553 del ion protonado; tolerancia 15 ppm; alta resolución | FDA-NDMA, «Data Processing» y «Principle» | Leído en el documento |
| Falsos positivos por DMF que coeluye con NDMA; masas exactas (MS/MS o HRAM); métodos ortogonales; interferencias de agua, aire, plásticos, gomas; contaminación por guantes, membranas, disolventes; formación in situ | EMA-NA, Q&A 8 | Leído en el documento |
| Digestión ácida con microondas en recipiente cerrado; nebulización; plasma de argón por radiofrecuencia; desolvatación y excitación; espectros de emisión característicos; red de difracción y detector | EAM 4.4, 4.4.2; EAM 4.7, 4.7.2 | Leído en los documentos |
| Cada elemento emite longitudes de onda propias, como una huella dactilar, por sus niveles de energía | KUP, «Emission spectroscopy» | Leído en la página |
| La FDA llama ICP-AES a lo que en la lección es ICP-OES (mismo principio de emisión) | EAM 4.4 (título y texto); el nombre ICP-OES aparece en el título de EAM 4.6 | Leído en el índice y el documento |
| LoQ del plomo: 6 mg/kg (ICP-AES) y 10,9 µg/kg (ICP-MS); unas 550 veces | EAM 4.4 tabla 1; EAM 4.7 tabla 1a | Leído; 6000 / 10,9 = 550 recalculado |
| Los límites más bajos exigen blancos de calidad y control estricto | EAM 4.7, 4.7.1 | Leído en el documento |
| Q3D apartado 9: procedimiento adecuado, específico para cada elemento, farmacopea o alternativa adecuada | Q3D, 9 | Leído en el documento |
| Acoplamiento catalizado por paladio como reacción de síntesis | Conocimiento general de química orgánica; Q3D apéndice 4 pone el ejemplo de un principio activo hecho con catalizadores de Pd y Ni | Leído el ejemplo de Q3D; lo del acoplamiento, general |
| Pd clase 2B, evaluar si se añade a propósito; PDE oral 100 µg/día | Q3D, 4 y tabla A.2.1 | Leído en el documento |
| Opción 1 (10 g/día, 10 µg/g) | Q3D, 7; ya en «Átomos a fondo» | Leído |
| Opción 2a: como la 1 con la ingesta diaria real; concentración común para todos los componentes | Q3D, 7 | Leído en el documento |
| Ejemplo de la guía: 2,5 g/día, Pd 40 µg/g, factor 4 frente a la opción 1 | Q3D, apéndice 4, tabla A.4.3 | Leído en el documento |
| 100 / 2 = 50 µg/g (2 g/día, valor de ejemplo); 100 / 4 = 25 (quiz) | Cálculo | Recalculado |
| Umbral de control = 30 % de la PDE; por debajo de forma constante no hacen falta controles adicionales | Q3D, 5.6 | Leído en el documento |
| 30 µg/día; 15 µg/g; 0,2000 g en 50 mL con 40 µg/L = 10 µg/g; 20 µg/día = 20 %; 300 kg = 3 g; quiz: 30 µg/L, 0,2500 g = 6 µg/g; 12 µg/g × 2 = 24 % | Cálculo con valores de ejemplo declarados | Recalculado |
| Ensayo periódico según Q6A | Q3D, 6 | Leído en el documento |
| Fuentes: equipos (control por selección, cualificación, GMP) y agua | Q3D, 5.2 y 5.3 | Leído en el documento |
| Análisis elemental CHN da % de C, H y N | Definición general; EMA-CHEM pide «elemental analysis with theoretical values» | Leído lo de la EMA; la definición, general |
| Paracetamol C₈H₉NO₂: 151,165 g/mol; C 63,56 %; H 6,00 %; N 9,27 % | Cálculo con las masas atómicas de la app (nivel 1, «Átomos a fondo» y «HPLC a fondo») | Recalculado |
| Rotación específica [α] = 100a / (l c), l en dm, c en g/100 mL; temperatura dentro de 0,5 °C | ORA, apartado 6.4.4.C | Leído en el documento |
| +1,25°, 1 dm, 2,5 g/100 mL = +50°; quiz 0,80°, 2 dm, 2,0 = 20° | Cálculo con valores de ejemplo | Recalculado |
| Microscopía óptica y de platina caliente (Q6A); electrónica de barrido (EMA) | Q6A 3.3.1 c); EMA-CHEM, polimorfismo | Leído en los documentos |
| Contaminación en metales: evita falsos positivos; plástico mejor que vidrio, cerámica o metal; espátulas no metálicas; guantes sin polvo, mejor sin color (pueden soltar elementos); no tocar interiores de tapas | EAM 2.4 (2.4.2 y 2.4.3); EAM 4.7, 4.7.3 | Leído en los documentos |
| Acero inoxidable cede Cr, Ni, Mo, Co, V y Fe | EAM 4.7, 4.7.5 | Leído en el documento |
| Tabla de cuándo se usa cada técnica (desarrollo, validación, liberación, OOS) | Síntesis a partir de EMA-CHEM 4.3.1, Q6A, Q3D 5.5 (eficacia de eliminación), EMA-NA Q&A 9 | Razonamiento; los ensayos concretos los fija la especificación |
| Cantidad de muestra de 10 g | Valor de ejemplo declarado | No es dato de fuente |
| Ejemplo de planta (R-412, INT-48, FL-415, AX-50, C-420, SD-430, resultados) | Valores y códigos de ejemplo, ficticios | No es dato de fuente |

## Lo que se dejó fuera por no poder verificarlo

- Ley de Bragg, longitud de onda del cobre y rango de ángulos 2θ de la XRPD: solo vistos en fragmentos del buscador (USP <941>, no accesible).
- Límite de detección de una forma minoritaria en una mezcla por XRPD: sin fuente gratuita leída.
- Temperatura del plasma de argón y detalles del espectrómetro (cuadrupolo, orbitrap, celdas de colisión): sin fuente leída.
- Física de la RMN (campo en teslas, frecuencias en MHz, referencia TMS, disolventes deuterados, qNMR para pureza): solo en fragmentos del buscador; chem.libretexts.org bloqueado.
- Ejemplo de espectro de masas de una sustancia real (NIST WebBook dio error de red).
- Mecanismo exacto del falso positivo DMF/NDMA (isótopos): sin fuente leída; solo se dice lo que afirma la EMA.
- Números de capítulo de la USP y de la Farmacopea Europea (no se leyó ningún capítulo gratuito; usp.org y edqm.eu dieron error de red).
- Combustión en el análisis CHN como mecanismo detallado.
