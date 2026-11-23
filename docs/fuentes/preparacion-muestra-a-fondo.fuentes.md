# Fuentes: preparacion-muestra-a-fondo

Documentos descargados en `src_prepara/dl/` y leídos con `pdftotext -layout` (o el texto HTML de la ficha, en las NTP):

- WHO TRS 1052, anexo 4 (2024), *WHO good practices for pharmaceutical quality control laboratories*: https://cdn.who.int/media/docs/default-source/medicines/norms-and-standards/guidelines/quality-control/trs1052_annex4.pdf (6.7, 6.26, 6.38, 6.39, 6.76 y apéndice 3).
- WHO TRS 957, anexo 1 (2010): https://cdn.who.int/media/docs/default-source/medicines/norms-and-standards/guidelines/quality-control/trs957_annex1_goodpractices_pharmaceuticalqualitycontrol_laboratories.pdf (18.2 y 18.3).
- WHO TRS 929, anexo 4 (2005), *WHO guidelines for sampling of pharmaceutical products and related materials*: https://cdn.who.int/media/docs/default-source/medicines/norms-and-standards/guidelines/inspections/trs929-annex4-guidelinessamplingpharmproducts.pdf (glosario, 2.2, 4.1).
- ICH Q2(R2) (2023): https://database.ich.org/sites/default/files/ICH_Q2%28R2%29_Guideline_2023_1130.pdf (2, 3.3.2.1, 3.4, glosario, tabla del anexo).
- ICH Q14 (2023): https://database.ich.org/sites/default/files/ICH_Q14_Guideline_2023_1116.pdf (5.1 y glosario).
- ICH Q6A: https://database.ich.org/sites/default/files/Q6A%20Guideline.pdf (agua; consultado, no citado en el texto).
- FDA, *Analytical Procedures and Methods Validation for Drugs and Biologics* (julio de 2015): https://www.fda.gov/media/87801/download (III, IV.B, IV.E).
- FDA, *Investigating Out-of-Specification (OOS) Test Results for Pharmaceutical Production* (2022): https://www.fda.gov/media/158416/download (revisión 1, mayo de 2022; copia descargada por otra lección en `src_muestreo/fdaoos.pdf` y leída aquí).
- FDA, *ANDAs: Pharmaceutical Solid Polymorphism* (2007): https://www.fda.gov/media/71375/download (III.C.2).
- FDA ORA Laboratory Manual (página índice https://www.fda.gov/science-research/field-science-and-laboratories/field-science-laboratory-manual; avisa de que la copia pública está archivada y la oficial está en QMiS): Vol. IV sec. 3 *Drug Chemistry Analysis* (IV-03, rev. 03, 2022) https://www.fda.gov/media/73554/download; Vol. IV sec. 5 *Pesticides Analysis* (IV-05, rev. 03, 2023) https://www.fda.gov/media/73560/download; Vol. IV sec. 6 *Elemental Analysis* (IV-06, rev. 03, 2023) https://www.fda.gov/media/73565/download.
- Reglamento (CE) 152/2009, métodos de muestreo y análisis de piensos, texto original en el DOUE L 54 de 26.2.2009, alojado en el BOE: https://www.boe.es/doue/2009/054/L00001-00130.pdf (anexo I, puntos 3, 4.2.3 y 6.4; anexo II, parte A; anexo III, parte A). Modificado después por el Reglamento (UE) 691/2013 (no leído); los puntos usados son generales y se citan como ejemplo de texto oficial, no como norma aplicable a un API.
- INSST, NTP 432 y NTP 433 (1997), texto íntegro reutilizado de `src_labseg/dl/` (copiado a `src_prepara/dl/`).
- INSST, NTP 205 *Ultrasonidos: exposición laboral*: https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/6-serie-ntp-numeros-191-a-225-ano-1989/ntp-205-ultrasonidos-exposicion-laboral

| Dato o afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| El HPLC necesita una disolución; un equipo de metales, la muestra digerida | FDA ORA IV-03 (partes del HPLC) y IV-06 4.3.4 (digestión antes del ICP) | Leído |
| El error se separa en el de la medida y el de la preparación (pesadas y diluciones) | WHO TRS 1052 an. 4, apéndice 3 («measurement related … and associated with sample preparation operations (weighing, dilution)»; grupos 1 y 2) | Leído |
| En el ejemplo de riqueza por HPLC, U_tg = 2,0 %; U_Meas = 0,5 × U_tg y U_SP = 0,5 × U_tg (la mitad para cada uno) | WHO TRS 1052 an. 4, apéndice 3, ejemplo 1 | Leído |
| Pesar 50,0 mg con 0,2 mg: 0,4 %; tomar 1,0 mL: 0,74 % | WHO TRS 1052 an. 4, apéndice 3, tabla 1 | Leído; 0,2 / 50 × 100 = 0,4 recalculado |
| Una investigación puede concluir que la muestra se preparó mal y no era representativa; pista: resultados muy distintos entre alícuotas de un compuesto | FDA OOS 2022, apartado sobre remuestreo («Improper sample preparation might be indicated … by widely varied results obtained from several aliquots») | Leído |
| Definiciones de muestra elemental, global, reducida y final | Reg. (CE) 152/2009, anexo I, punto 3 | Leído (texto español oficial) |
| Muestra final = lista para aplicar el procedimiento de ensayo | WHO TRS 929 an. 4, glosario («Final sample: Sample ready for the application of the test procedure») | Leído |
| Porción de ensayo (*test portion*) como lo que se pesa | WHO TRS 1052 an. 4, apéndice 3 («m and m0 are the test portions») | Leído |
| Es habitual dividir la muestra en tres partes: análisis, confirmación, retención | WHO TRS 1052 an. 4, 6.7 | Leído |
| Deshacer los grumos de la muestra global | Reg. 152/2009, anexo I, nota (1) del 6.4 | Leído |
| Analogía de las nueces que suben en el bote | Valor de ejemplo declarado / analogía | Sin fuente; analogía cotidiana |
| Reducir con divisor mecánico o por cuarteo | Reg. 152/2009, anexo I, 6.4 | Leído |
| Divisores: aparatos que reparten en partes aproximadamente iguales; estacionarios o rotatorios | Reg. 152/2009, anexo I 4.2.3 y anexo II A.3 | Leído |
| No se recomienda el cono y cuarteo por su elevado error de división; preferencia por montones alternos o divisores | Reg. 152/2009, anexo II, A.3 | Leído |
| El cono y cuarteo y el tratamiento de los finos existen como procedimientos; remiten a ISO | WHO TRS 929 an. 4, 4.1 | Leído |
| Pasos del cono y cuarteo (superficie plana no absorbente, cono con pala, aplastar, cuatro partes, apartar dos opuestos, repetir) | Manual de muestreo de aduanas de la Comisión Europea (sampling-manual-customs-taxation.ec.europa.eu, ficha D01-01) y glosario de la IUPAC (C01265) | Fragmento de buscador (host no accesible); se declara así en el texto. No se usó para ninguna cifra |
| Cada cuarteo deja la mitad | Cálculo (2 de 4 cuartos) | Recalculado |
| Cuenta 1: 500, 250, 125, 62,5, 31,25 g; 4 cuarteos; con 5, 15,6 g | Cálculo | Recalculado (log2(500/30) = 4,06) |
| No usar molinos que calienten perceptiblemente; moler a mano lo sensible al calor | Reg. 152/2009, anexo II, A.2 | Leído |
| Moler, mezclar y tamizar rápido, con poca exposición al aire y la luz | Reg. 152/2009, anexo II, A.2 | Leído |
| Si la humedad cambia al preparar, determinarla antes y después | Reg. 152/2009, anexo II, A.2 | Leído |
| El instrumental no debe contaminar con oligoelementos | Reg. 152/2009, anexo II, A.2 | Leído |
| La molienda y la micronización pueden causar conversión de forma polimórfica | FDA 2007, III.C.2 | Leído |
| Trabajar en vitrina siempre que sea posible | NTP 432 | Leído |
| Tal cual y base seca; muchas especificaciones de riqueza en base seca | Lección existente `especificaciones-y-metodos` («98,0–102,0 % (sobre sustancia seca)») y WHO TRS 1052 an. 4, apéndice 3 («without calculation to dry/volatile solvent-free substance») | Leído |
| Secar en estufa y enfriar en desecador antes de pesar | Reg. 152/2009, anexo III, parte A («dejar enfriar a temperatura ambiente en el desecador y pesar») | Leído |
| Fórmula base seca = tal cual × 100 / (100 − volátiles) | Cálculo (balance de masa) | Recalculado; coherente con `secado-a-fondo` |
| Cuenta 2: 97,6 × 100 / 98,2 = 99,4 % | Cálculo, valores de ejemplo declarados | Recalculado (99,389) |
| El método describe la preparación: extracción, dilución, mezcla por ultrasonidos o agitación y tiempo | FDA 2015, IV.E | Leído |
| Ultrasonidos: frecuencias que el oído no percibe | NTP 205 («Los sonidos emitidos en un rango superior … no son percibidos por el oído humano») | Leído |
| El baño de ultrasonidos sirve para mezclar y dispersar (deshacer grumos) | Documento de la Universidad de Zaragoza visto en el buscador | Fragmento de buscador; afirmación cualitativa |
| Calentar inflamables con sistemas por debajo de la autoignición, p. ej. baño maría; meter los balones en los baños calientes poco a poco | NTP 433 | Leído |
| Lo que no se disuelve no se mide (resultado bajo) | Cálculo / razonamiento | Deducción directa |
| Extracción incompleta del analito como fuente de variación que debe descartarse en desarrollo y validación | WHO TRS 1052 an. 4, apéndice 3 | Leído |
| Matraz calibrado a una temperatura; enrasar en caliente da disolución más concentrada | Lección `volumetrico-a-fondo` (tabla de errores) | Leído en la app |
| Exposición a ultrasonidos por contacto sobre todo en las manos (limpieza y desengrase); tapar los equipos cuando no se usan | NTP 205 | Leído |
| Cuenta 3: 0,50 × 100 = 50,0 mg | Cálculo, valores de ejemplo | Recalculado |
| Cuenta 4: 50,8 / 100 = 0,508 mg/mL | Cálculo | Recalculado |
| Intervalo de trabajo: niveles más bajo y más alto presentados al equipo con resultados fiables | ICH Q2(R2), glosario | Leído |
| El intervalo informable puede depender de la preparación (diluciones) | ICH Q2(R2), apartado de intervalo | Leído |
| Intervalo de trabajo de la muestra antes de preparar y del equipo | ICH Q14, glosario (definición marcada «ICH Q2») | Leído |
| Factor = volumen final / volumen tomado; en cadena se multiplican | Lección existente `preparacion-de-la-muestra` | Leído en la app; recalculado |
| Cuenta 5: 12,5 × 20 = 250 | Cálculo | Recalculado |
| Cuenta 6: 0,508 / 250 = 0,002032 mg/mL = 2,03 µg/mL | Cálculo | Recalculado |
| Intervalo de 1 a 5 µg/mL | Valor de ejemplo declarado | — |
| Cuenta 7: 0,0497 × 10 × 100 = 49,7 mg; 49,7 / 50,8 = 97,8 %; base seca con 0,9 %: 98,7 % | Cálculo, valores de ejemplo | Recalculado (97,835; 98,723) |
| Cuenta 8: 4,0 × 5 = 20 µg/L; × 0,050 L = 1,0 µg; / 0,500 g = 2,0 µg/g | Cálculo, valores de ejemplo | Recalculado |
| 1 ppm = 1 µg/g | Cálculo (10⁻⁶) | Recalculado; coherente con `calculo-y-expresion-de-resultados` |
| Revisar cálculos y transferencias de datos de forma sistemática | WHO TRS 1052 an. 4, 6.39 | Leído |
| Filtro de 0,45 µm o menos (para desgasificar el medio de disolución) | FDA ORA IV-03, pregunta 3 sobre el medio de disolución (cita USP ‹711›) | Leído; se dice en el texto para qué uso lo cita |
| El método indica el tipo de filtro | FDA 2015, IV.B («alternative column, filter type») | Leído |
| Membranas de nailon que retienen algunos principios activos y otras (PTFE, PVDF) que no | Nota técnica de Merck/Sigma-Aldrich «Millex filter analyte binding» | Fragmento de buscador; en el texto se declara como tal, sin cifras |
| La membrana retiene producto al principio o suelta sustancias (extraíbles); se descarta un volumen inicial que fija la validación | Nota de Merck y FAQ de USP sobre ‹1092› | Fragmento de buscador; sin cifras en el texto |
| Extracción en fase sólida (cartuchos SPE) entre las columnas de cromatografía | FDA ORA IV-03, 8.4.6 | Leído |
| Extracción líquido-líquido: dos líquidos que no se mezclan | Lección existente `extraccion-liquido-liquido` | Leído en la app |
| Centrífuga: repartir la carga simétricamente; no arranca con la tapa abierta ni se abre con el rotor girando | NTP 433 | Leído |
| Derivatización para hacer volátiles o estables compuestos para cromatografía de gases | FDA ORA IV-03, apartado de GC | Leído |
| Digestión en microondas en recipiente cerrado con ácido concentrado, calentado hasta ~200 °C; ácido nítrico; agua oxigenada; dilución con agua | FDA ORA IV-06, 4.3.4 | Leído |
| Digestiones ácidas en vitrina; guantes, gafas y EPI | NTP 433 (espectrofotómetro de absorción atómica) | Leído |
| Robustez incluye la estabilidad de las preparaciones de muestra y reactivos durante el procedimiento | ICH Q2(R2) 3.4; ICH Q14 5.1; tabla de ICH Q2(R2) («Stability of sample and reference material preparations») | Leído |
| El método indica la estabilidad de las disoluciones y su conservación | FDA 2015, IV.E y IV.F | Leído |
| Automuestreadores habituales en HPLC | FDA ORA IV-03, partes del HPLC («Autosamplers are commonly used») | Leído |
| «Estable 24 horas» | Valor de ejemplo declarado | — |
| Tapón con septo; evaporación con tapón mal cerrado concentra | Razonamiento | Sin fuente específica leída; afirmación cualitativa |
| Guardar las preparaciones, si son estables, hasta terminar la investigación; examinarlas y reinyectarlas | FDA OOS 2022 (fase I); WHO TRS 957 an. 1, 18.2 (g); WHO TRS 1052 an. 4, 6.76 | Leído |
| Blancos de reactivos en las prácticas de preparación | FDA ORA IV-05, 6.11 y 6.12 («reagent blank») | Leído |
| Anotar todos los valores, incluidos los del blanco | WHO TRS 1052 an. 4, 6.38 | Leído |
| Preparaciones replicadas en ensayos cuantitativos | FDA 2015, IV.E | Leído |
| Determinación = valor de una sola preparación | ICH Q2(R2), glosario | Leído |
| Criterio de diferencia máxima 1,0 % entre preparaciones | Valor de ejemplo declarado | — |
| Media 98,05 %, diferencia 2,1 % | Cálculo | Recalculado |
| Promediar esconde la variabilidad; evaluar resultados individuales | FDA OOS 2022, «Averaging», usos inadecuados | Leído |
| Error identificado: se invalida y se repite; si no hay causa, no se descarta sin más | WHO TRS 957 an. 1, 18.3 | Leído |
| Tabla de errores y su efecto | Razonamiento sobre las fuentes anteriores (Reg. 152/2009, FDA 2007, `volumetrico-a-fondo`, `conservacion-y-custodia`) | Deducción |
| Caso narrado: 99,2 × (1 − 0,018) = 97,4 % | Cálculo, valores de ejemplo | Recalculado (97,414) |
| Plant: no mezclar porciones de aspecto distinto; se muestrean aparte, porque mezclar puede ocultar problemas | WHO TRS 929 an. 4, 2.2 | Leído |
| Batch record: señales de falta de uniformidad (diferencias de forma, tamaño o color, costras húmedas) | WHO TRS 929 an. 4, 2.2 | Leído |
| Quiz: 800 a 50 g, 4 cuarteos; 99,3 %; 0,812 mg/mL; factor 100; 97,8 %; 1 µg/g | Cálculo | Recalculado (99,291; 97,782; 0,25 µg / 0,250 g) |

## Lo que dejé fuera por no poder verificarlo

1. La frase «la preparación es a menudo la mayor fuente de error del análisis»: ninguna fuente leída lo dice así. En su lugar uso el reparto de la OMS (mitad del margen para la preparación) y la guía OOS de la FDA.
2. Descripción oficial y leída paso a paso del cono y cuarteo: solo la vi en fragmentos de buscador (manual de aduanas de la Comisión Europea, IUPAC); los hosts no eran accesibles. Las normas ISO que cita la OMS son de pago.
3. Tamaños de poro de 0,2 µm para filtros de jeringa y volúmenes concretos de descarte (por ejemplo, «1 a 3 mL»): solo en notas de fabricantes vistas en el buscador; no se dan cifras.
4. Que el baño de ultrasonidos calienta el agua: es conocido, pero no lo encontré en una fuente leída; el texto dice solo «si la disolución se ha calentado por cualquier motivo».
5. Tiempos de estabilidad típicos de disoluciones de HPLC y criterios reales de diferencia entre duplicados: dependen de cada método validado; se usan valores de ejemplo declarados.
6. Riesgos de ruido de molinos y baños de ultrasonidos con cifras: solo en una guía de la Universidad de Jaén vista en el buscador.
7. El capítulo ‹1092› de la USP y los métodos de la Farmacopea Europea sobre filtración y preparación: de pago.
