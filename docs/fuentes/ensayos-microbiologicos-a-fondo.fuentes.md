# Fuentes de la lección `ensayos-microbiologicos-a-fondo`

Cómo leer la columna «Comprobación»:

- **Leído en el documento**: descargado con curl, pasado a texto (pdftotext o limpieza del HTML) y leído el pasaje. Copias en `src_ensayomicro/dl/`.
- **Recalculado**: cuenta rehecha con python (`src_ensayomicro/check.py`), con el mismo redondeo que el texto.
- **Valor de ejemplo declarado**: número inventado para la cuenta; el texto lo dice.
- **Razonamiento**: consecuencia directa de algo leído, sin cifra propia.
- **Fragmento de buscador**: solo visto en el resumen del buscador; no se usa para ninguna cifra.

Documentos leídos:

- **Q7**: ICH Q7, apartados 2.22, 4.10, 11.13, 11.15, 11.23 y glosario. https://database.ich.org/sites/default/files/Q7%20Guideline.pdf
- **Q6A**: ICH Q6A, apartados 2.4 y 3.3.1 g). https://database.ich.org/sites/default/files/Q6A%20Guideline.pdf
- **AN1**: EU GMP, anexo 1 (2022): alcance, 6.13-6.14, 9.5-9.13, 9.22-9.31, tabla 6 y glosario. https://health.ec.europa.eu/system/files/2022-08/20220825_gmp-an1_en_0.pdf
- **FDA-END**: FDA, «Pyrogen and Endotoxins Testing: Questions and Answers (Edition 2)», marzo de 2026 (entera). https://www.fda.gov/media/83477/download — Nota: el encargo citaba la edición de 2012; la URL oficial sirve ya la edición 2 de 2026, que es la que se leyó y se cita. Esta edición NO contiene la fórmula K/M: la fórmula se tomó de ITG40 y Q4B-14.
- **ITG40**: FDA, Inspection Technical Guide 40, «Bacterial endotoxins/pyrogens» (1985) (entera). https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/inspection-technical-guides/bacterial-endotoxinspyrogens
- **Q4B-14**: EMA, «ICH guideline Q4B Annex 14 ... Bacterial Endotoxins Tests – General Chapter», Step 3, EMA/CHMP/ICH/529785/2010 (borrador de 2010), con el apéndice A, que reproduce el borrador en inglés del texto JP XVI 4.01, armonizado con Ph. Eur. 2.6.14 y USP <85> (entero). https://www.ema.europa.eu/en/documents/scientific-guideline/draft-ich-guideline-q4b-annex-14-note-evaluation-and-recommendation-pharmacopoeial-texts-use-ich-regions-bacterial-endotoxins-tests-general-chapter-step-3_en.pdf
- **Q4B-4A**: EMA, ICH Q4B anexo 4A, EMA/CHMP/ICH/308671/2008 (entero; solo declara intercambiables Ph. Eur. 2.6.12, JP 4.05 y USP <61>; no reproduce el método). https://www.ema.europa.eu/en/documents/scientific-guideline/ich-guideline-q4b-annex-4a-evaluation-and-recommendation-pharmacopoeial-texts-use-ich-regions-micro-enumeration-step-5_en.pdf
- **Q4B-4C**: FDA, Q4B anexo 4C(R1), 2017 (entero; solo declara intercambiables Ph. Eur. 5.1.4, JP 12 y USP <1111>; no reproduce límites). https://www.fda.gov/media/71291/download
- **OMS961**: OMS, TRS 961 (2011), anexo 2, «WHO good practices for pharmaceutical microbiology laboratories» (entero). https://cdn.who.int/media/docs/default-source/medicines/norms-and-standards/guidelines/quality-control/trs961_annex2_goodpractices_pharmaceutical_microbiology_laboratories.pdf
- **FDA-ASEP**: FDA, «Sterile Drug Products Produced by Aseptic Processing» (2004), apartados X (monitorización, medios, identificación) y XI (ensayo de esterilidad). https://www.fda.gov/media/71026/download
- **FDA-MLAB**: FDA, «Guide to inspections of microbiological pharmaceutical quality control laboratories» (7/93) (entera). https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/inspection-guides/microbiological-pharmaceutical-quality-control-labs-793
- **FDA-HPW**: FDA, «Guide to inspections of high purity water systems» (7/93), apartados II y III. https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/inspection-guides/high-purity-water-system-793
- **FDA-OOS**: FDA, «Investigating Out-of-Specification (OOS) Test Results for Pharmaceutical Production» (2022), alcance (no está pensada para ensayos biológicos; FDA-END nota 13 dice que muchos de sus conceptos se aplican a endotoxinas). https://www.fda.gov/media/158416/download

| Dato o afirmación | Fuente | Comprobación |
|---|---|---|
| Si el API tiene especificación microbiológica, límites de acción para recuento total y organismos indeseables; igual para endotoxinas | Q7 11.13 | Leído en el documento |
| Ensayos microbiológicos en cada lote cuando la calidad microbiana está especificada | Q7 11.23 | Leído en el documento |
| Recuento de aerobios totales, de mohos y levaduras y ausencia de S. aureus, E. coli, Salmonella, P. aeruginosa; ensayo y límite según naturaleza, fabricación y uso; endotoxinas para API de inyectables | Q6A 3.3.1 g) | Leído en el documento |
| Se puede proponer no hacer ensayos microbiológicos si el desarrollo demuestra que el producto no permite viabilidad ni crecimiento | Q6A 2.4 | Leído en el documento |
| Anexo 1 es para estériles; sus principios pueden aplicarse a no estériles documentando cuáles | AN1, alcance | Leído en el documento |
| Definición de UFC: colonia detectable de uno o más microorganismos; UFC/mL, UFC/m³, UFC por placa | AN1, glosario | Leído en el documento |
| Microbios dañados o lentos crecen peor (se usan inactivadores, menor temperatura, incubación más larga) | FDA-MLAB II | Leído en el documento (el texto lo simplifica) |
| Aerobios totales 30-35 °C 48-72 h; mohos y levaduras 20-25 °C 5-7 días (medios de monitorización ambiental) | FDA-ASEP X.B | Leído en el documento |
| Los métodos y condiciones para producto los fija la farmacopea (de pago) | Q4B-4A (remite a Ph. Eur. 2.6.12, JP 4.05, USP <61>) | Leído en el documento |
| Métodos rápidos validados para acelerar la detección | AN1 9.28 | Leído en el documento |
| Técnicas básicas: vertido de placas, recuento de colonias, técnica aséptica, diluciones seriadas | OMS961 1.4 | Leído en el documento |
| Demostrar que el método recupera bacterias, levaduras y mohos en presencia del producto, con controles positivos y negativos | OMS961 3.1 | Leído en el documento |
| Neutralizar sustancias inhibidoras de la muestra | FDA-MLAB V | Leído en el documento |
| Lavados adicionales del filtro de membrana para evitar inhibición | FDA-ASEP XI.A | Leído en el documento |
| Filtración por membrana útil para volúmenes grandes como el agua | FDA-HPW III (muestras de 100-300 mL de WFI) | Razonamiento |
| 10 g + 90 mL = 1:10; placas 38 y 46; media 42; 420 UFC/g | Valor de ejemplo declarado | Recalculado |
| Filtración: 10 mL de 1:10 = 1 g; 12 colonias = 12 UFC/g | Valor de ejemplo declarado | Recalculado |
| Límite de detección 1 / 0,1 = 10 UFC/g | Cálculo | Recalculado |
| Informar «no detectado» o «menos del límite de detección», no cero | OMS961 12.1 | Leído en el documento |
| Microorganismos específicos: enriquecimiento y medios selectivos | FDA-MLAB II (caldos de enriquecimiento, paso a agar selectivo) | Leído en el documento |
| A menudo importa más el contaminante concreto que el número | FDA-HPW III y FDA-MLAB | Leído en el documento |
| Definición de organismo indeseable (infección con el uso previsto o crecimiento en el producto) | FDA-HPW III | Leído en el documento |
| La lista de la farmacopea no recoge todos los indeseables; cada empresa fija sus especificaciones | FDA-MLAB II | Leído en el documento |
| Promoción del crecimiento en cada lote de medio; ≤ 100 UFC; recuperación 50-200 % | OMS961 5.2.1 y 5.2.2 | Leído en el documento |
| Cepas de referencia de colección reconocida; normalmente no más de cinco pases | OMS961 6.2.1 y 6.2.3 | Leído en el documento |
| Endotoxina: pared de gramnegativas; reacciones de fiebre a muerte | AN1, glosario | Leído en el documento |
| Endotoxinas liberadas tras la muerte y lisis de la célula | ITG40 | Leído en el documento |
| Lisado de amebocitos de Limulus polyphemus o Tachypleus tridentatus; gelificación, turbidimétrica y cromogénica | Q4B-14, apéndice A | Leído en el documento |
| Los tres textos de farmacopea son intercambiables; en caso de duda, decide la gelificación | Q4B-14 2.1.1 | Leído en el documento |
| Gel: normalmente 37 ± 1 °C, 60 ± 2 min, sin vibración; invertir unos 180°; gel firme = positivo | Q4B-14, apéndice A, 4.1.1 | Leído en el documento |
| Turbidimétrica y cromogénica cinéticas: tiempo hasta una turbidez o absorbancia fijada | Q4B-14, apéndice A, 5.1 y 5.2 | Leído en el documento |
| Curva patrón: al menos tres concentraciones; abs(r) ≥ 0,980 | Q4B-14, apéndice A, 5.3.1 | Leído en el documento |
| 1 UE = 1 UI; patrón calibrado con el patrón internacional de la OMS | Q4B-14 2.1.2 y apéndice A 2.1 | Leído en el documento |
| λ: sensibilidad declarada del lisado (gel) o punto más bajo de la curva (fotométricas), en UE/mL | Q4B-14, apéndice A, 3 | Leído en el documento |
| Límite = K/M; K = 5,0 UE/kg (0,2 UE/kg intratecal); M = dosis máxima por kg en una hora | ITG40 y Q4B-14 apéndice A 3 | Leído en el documento |
| Ejemplo FDA 5 / 10 = 0,5 UE/mL | ITG40, ejemplo 1 | Leído y recalculado |
| API: 5,0 / 2 = 2,5 UE/mg | Valor de ejemplo declarado | Recalculado |
| FDA retira la tabla de límites de 1987, remite al cálculo de farmacopea y pide justificar el límite caso por caso | FDA-END preguntas 7 y 8 | Leído en el documento |
| Interferencias: pH fuera de intervalo, quelación de cationes divalentes (EDTA); se corrigen sobre todo diluyendo | ITG40 | Leído en el documento |
| Diluir más allá de la MVD hace que un negativo no signifique nada | ITG40 | Leído en el documento |
| Definición y fórmula de la MVD | Q4B-14, apéndice A, 3 | Leído en el documento |
| MVD = 2,5 × 10 / 0,125 = 200 | Valor de ejemplo declarado | Recalculado |
| No usar la MVD como dilución de rutina; ejemplo 1:100, 1:10, 1:20, 1:30 | FDA-END pregunta 12 | Leído en el documento |
| Cuantitativo por gel: concentración = factor de la dilución del punto final × λ | Q4B-14, apéndice A, 4.3.2 | Leído en el documento |
| 8 × 0,125 = 1 UE/mL; 1 / 10 = 0,1 UE/mg | Valor de ejemplo declarado | Recalculado |
| Soluciones A, B, C y D y su papel; ensayo válido si B y C positivos y D negativo | Q4B-14, apéndice A, tablas 4.01-2 y 4.01-3 | Leído en el documento |
| Recuperación de la endotoxina añadida 50-200 % (fotométricas) | Q4B-14, apéndice A, 5.3.2 | Leído en el documento |
| Despirogenar el vidrio; habitual mínimo 30 min a 250 °C | Q4B-14, apéndice A, 1 | Leído en el documento |
| Métodos: placas de sedimentación, aire volumétrico, guante, ropa, superficies (hisopos y placas de contacto) | AN1 9.22; FDA-ASEP X.A.4 | Leído en el documento |
| RODAC como nombre de placa de contacto | OMS961 2.4.11 | Leído en el documento |
| Placa de sedimentación semicuantitativa; evitar desecación | FDA-ASEP X.A.4.c | Leído en el documento |
| Máximo 4 horas de exposición de placas de sedimentación | AN1 tabla 6, nota (a) | Leído en el documento |
| Muestreadores activos dan organismos por volumen de aire | FDA-ASEP X.A.4.b | Leído en el documento |
| 500 L = 0,5 m³; 45 / 0,5 = 90 UFC/m³ | Valor de ejemplo declarado | Recalculado |
| Tabla 6: límites de acción por grado (aire, sedimentación 90 mm, contacto 55 mm, guante) | AN1 9.30, tabla 6 | Leído en el documento |
| Alerta y acción; investigación de causa raíz e impacto en lotes entre muestreo y resultado | AN1 9.9, 9.13 y glosario | Leído en el documento |
| Tendencias; esporas y mohos difíciles de controlar | AN1 9.11 | Leído en el documento |
| Identificación hasta especie en A y B; en C y D al superar límites | AN1 9.31 | Leído en el documento |
| El muestreo no debe contaminar | AN1 9.8 | Leído en el documento |
| Muestreo: personal formado, aséptico, material y envases estériles cerrados, anotar la hora, transporte y conservación que no alteren la muestra, desinfección del punto que no altere el nivel microbiano | OMS961 7.2 a 7.4 y 8.3 | Leído en el documento |
| Lista de «no hacer» (no tocar boca y tapón, no hablar sobre el envase, precinto, temperatura) | OMS961 7.2-7.4 y lección «Agua farmacéutica a fondo» | Razonamiento sobre lo leído |
| Las personas son la principal fuente de contaminación | Lección «Microorganismos y contaminación» de la app (nivel9.ts) | Contenido de la app |
| Muestrear el agua como se usa (manguera y purga) | FDA-HPW II | Leído en el documento |
| Investigación de OOS según procedimiento: análisis de datos, valorar el problema, acciones, conclusiones; repetición según procedimiento | Q7 11.15 | Leído en el documento |
| La contaminación no se reparte por igual; un negativo posterior no anula el primero | FDA-MLAB II y VII | Leído en el documento |
| Endotoxinas: OOS a la MVD no atribuible a error de ensayo, lote rechazado | FDA-END pregunta 2 | Leído en el documento |
| Identificación hasta especie; métodos genéticos más exactos, útiles en investigaciones | FDA-ASEP X.B y XI.C | Leído en el documento |
| La unidad de calidad aprueba o rechaza los API | Q7 2.22 | Leído en el documento |
| Planta: lote QF-5108, KT-22, SV-402, CF-301, MB-07, 420 UFC/g, 11 h frente a 6 h | Valores de ejemplo declarados (ficticios) | Valor de ejemplo declarado |
| Quiz: 270 UFC/g; < 10 UFC/g; 10 UE/mg; MVD 200; 0,05 UE/mg; 28 UFC/m³; 62 > 50 (grado C) | Cálculo y AN1 tabla 6 | Recalculado |

## Fragmentos de buscador (no usados para cifras)

- La fórmula de la MVD aparecía también en un fragmento de una página de la PMDA japonesa; no se pudo abrir (host bloqueado). Se usó la versión leída en Q4B-14.
- Un fragmento sobre la Farmacopea Japonesa 15 (MHLW) mencionaba agar Sabouraud y un máximo de 100 UFC en el inóculo; host bloqueado, no se usó.

## Lo que se dejó fuera por no poder verificarlo en un documento gratuito leído

- Los límites de farmacopea para sustancias no estériles (por ejemplo los criterios de Ph. Eur. 5.1.4 o USP <1111>): Q4B-4C solo declara los textos intercambiables, no reproduce las cifras. La lección no da ningún límite de producto.
- Las condiciones exactas de incubación del recuento de producto (Ph. Eur. 2.6.12) y los nombres de los medios (agar de soja y caseína, agar Sabouraud) para el recuento: solo se dan las condiciones de la FDA para medios de monitorización ambiental.
- El intervalo de colonias contables por placa (por ejemplo «30-300» o «hasta 250»): no encontrado en fuente gratuita leída.
- La cantidad de producto en la que se exige ausencia de cada microorganismo específico y los medios selectivos concretos (Ph. Eur. 2.6.13): de pago.
- El factor C recombinante como alternativa sin origen animal (Ph. Eur. 2.6.32): no leído en fuente gratuita. Sí se leyó en FDA-END el ensayo de activación de monocitos como alternativa, pero no se incluyó por brevedad.
- La edición de 2012 de la guía FDA de preguntas y respuestas: la URL oficial ya sirve la edición 2 (marzo de 2026); se cita esta.
- Tiempos de identificación de un microorganismo en días: sin fuente con cifra; el texto solo dice que lleva más días.
