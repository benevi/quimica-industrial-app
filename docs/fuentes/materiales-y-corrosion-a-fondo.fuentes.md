# Fuentes: materiales-y-corrosion-a-fondo

Copias leídas en `scratchpad/lecciones/tmp-materiales/dl/` (q7.txt, q3d.txt, 211.xml) y en copias previas de la sesión: `src_mant/dl/ch3.txt`, `src_mant/dl/rd809.txt`, `src_mant/dl/ntp1017.txt`, `src_agua/dl/who2.txt`, `src_agua/dl/emaqa.txt`, `tmp-tuberias/dl/fdawater.txt`, `tmp-tuberias/dl/ped.txt`, `src_redox/dl/clp.txt`, `src_dcs/rd175.txt`.

| Dato o afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| ICH Q7 5.11: superficies en contacto con materias primas, intermedios o API no deben alterar su calidad más allá de especificaciones; está bajo el epígrafe 5.1 «Design and Construction» | ICH Q7, https://database.ich.org/sites/default/files/Q7%20Guideline.pdf | Leído en el documento (apartado 5.11, epígrafe 5.1) |
| ICH Q7 5.14: lubricantes, fluidos de calefacción o refrigerantes no deben tocar el producto alterando su calidad | ICH Q7 (misma URL) | Leído en el documento |
| ICH Q7 5.12 (rango cualificado) y 13.11 (usados como distractores en el test) | ICH Q7; 13.11 citado en `nivel14-mantenimiento.ts` | 5.12 leído; 13.11 tomado del repo |
| EudraLex vol. 4, capítulo 3, punto 3.39: partes en contacto «not be reactive, additive or absorptive» | https://health.ec.europa.eu (EudraLex vol. 4, cap. 3) | Leído en el documento |
| 21 CFR 211.65 (a) y (b): superficies «not be reactive, additive, or absorptive»; lubricantes y refrigerantes no deben tocar el producto | https://www.ecfr.gov/api/versioner/v1/full/2024-01-01/title-21.xml?part=211&section=211.65 | Leído en el documento |
| ICH Q3D: equipos de fabricación como fuente de impurezas elementales; cromo procedente de «leaching from equipment»; Cr(0) en el acero inoxidable; inoxidable = aleación de hierro con cromo que puede llevar níquel | ICH Q3D(R2), https://database.ich.org/sites/default/files/Q3D-R2_Guideline_Step4_2022_0308.pdf (apartados 1, 5.2, 5.3 y monografías de Cr y Ni) | Leído en el documento |
| ICH Q3D: los procesos de fabricación del principio activo son «considerably more aggressive» con los equipos que los del medicamento | ICH Q3D(R2), apartado 5.3 | Leído en el documento |
| Directiva 2014/68/UE, anexo I, punto 4.1 b): resistencia química suficiente al fluido; punto 2.6: tolerancia o protección contra la corrosión; 2.2: tolerancia de corrosión teórica en las instrucciones | Directiva 2014/68/UE (texto ES, eur-lex) | Leído en el documento |
| CLP, anexo I, 2.16: corrosivo para metales (H290) si velocidad de corrosión en acero o aluminio > 6,25 mm/año a 55 °C | Reglamento (CE) 1272/2008, DO L 353 de 31/12/2008, tabla 2.16.1 | Leído en el documento |
| 6,25 mm en un año «es la pared entera de muchas tuberías» | Razonamiento con orden de magnitud; sin cifra de espesor concreta | Afirmación cualitativa; no se da espesor |
| RD 809/2021, anexo III: inspección de nivel B fuera de servicio por organismo de control, con inspección visual de zonas de mayor esfuerzo y corrosión y comprobación de espesores | BOE-A-2021-16407, https://www.boe.es | Leído en el documento |
| FDA: tubos de inoxidable de un intercambiador vaciados; humedad + aire; corrosión; «pinholes»; recomendación de no vaciarlos | FDA, Guide to Inspections of High Purity Water Systems, https://www.fda.gov | Leído en el documento |
| La corrosión es una oxidación; capa pasiva de óxido de cromo que se rehace con oxígeno; cloruros causan picaduras; ácidos fuertes calientes disuelven capa y metal | Lección `oxidacion-reduccion` a fondo (`nivel2-redox.ts`), ya verificada | Leído en el repo |
| OMS TRS 1033 anexo 3: materiales que no cedan, no adsorban, no absorban y resistan la corrosión; 316L recomendado en general; considerar pasivación tras instalación y modificaciones, con procedimiento que fije disolución, concentración, temperatura y tiempo; registros de pasivación; juntas y membranas adecuadas en todo el rango de condiciones, comprobar que se montan las correctas y bien apretadas | WHO TRS 1033, anexo 3 (2021) | Leído en el documento (puntos 7.1, 7.2.1) |
| EMA: 316L como material adecuado; rascar para quitar biofilm puede dañar la superficie y aumentar el ataque corrosivo («rouging in the case of stainless steel»); revisión y sustitución periódica de juntas tóricas y juntas; «passivation chemistry» | EMA/INS/GMP/443117/2017, Q&A on production of WFI by non-distillation methods, https://www.ema.europa.eu | Leído en el documento |
| Rouge: depósito de corrosión rojizo a pardo, sobre todo óxidos e hidróxidos de hierro; se trata con «derouging» y repasivación | pharmtech.com («Rouge contaminants and water systems»), gmp-compliance.org | Fragmento de buscador (sin cifras) |
| «Rouge» = «rojo» en francés | Conocimiento general del idioma | No verificado en fuente; dato lingüístico menor |
| Tipos de corrosión (picaduras, rendijas, bajo tensión, galvánica, general) y su mecanismo | Fragmentos: informe ORNL/OSTI (picaduras y rendijas de 304L y 316L con cloruros), US DOT highways.dot.gov/media/56941 (SCC en austeníticos con cloruros, también a temperatura moderada), NIH ORF y ssina.com (galvánica: dos metales en contacto eléctrico y un electrolito común) | Fragmento de buscador. Sin cifras en la lección |
| Tipos y mecanismos de corrosión forman parte del temario de FP | RD 175/2008 (Técnico Superior en Química Industrial), módulo 0191, contenidos «Corrosión de los metales. Tipos de corrosión» | Leído en el documento (no usado como cita en el texto) |
| 316L: el molibdeno mejora la resistencia a picaduras y rendijas con cloruros; la «L» = bajo carbono, mejor en zonas soldadas | TWI (twi-global.com), ESAB, projectmaterials | Fragmento de buscador. Se omiten porcentajes de Mo y C |
| Hipoclorito: picaduras y corrosión en rendijas del inoxidable con contacto continuo; lleva cloruro de sodio; aclarar y no usarlo caliente | NIH ORF, «Trap corrosion white paper» (orf.od.nih.gov) | Fragmento de buscador |
| HCl: con metales desprende hidrógeno; almacenar en PE, PP, acero ebonitado o vidrio | `src/content/fds.ts`, ficha del ácido clorhídrico | Leído en el repo |
| Al evaporarse un líquido con cloruros, estos se concentran | Razonamiento físico (al quitar agua queda la sal) | Sin fuente específica; deducción |
| Vitrificado: estructura, «apriete» del vidrio, choque térmico lado vidrio y lado acero, resistencia a casi todos los ácidos, excepciones (HF, fosfórico concentrado y caliente, bases fuertes calientes), ensayo de chispa y voltaje fijado por el fabricante | Lecciones `reactor-y-servicios` (`nivel12.ts`) y `reactor-a-fondo` y su tabla de fuentes (Pfaudler, De Dietrich, resumen ISO 28721-3, ASTM C536) | Repo; en origen, fragmentos de buscador |
| Vidrio liso, se limpia bien y no suelta metal mientras esté entero | Razonamiento (el vidrio no es metálico) | Sin fuente específica |
| Golpes desconchan el vidrio; riesgo de contaminación con metal y de perforar hasta la camisa si el acero queda expuesto a ácido | Razonamiento a partir de lo anterior y de la lección de redox (ácido + acero) | Deducción; coincide con el encargo del autor |
| Reparación con tapones de tantalio | Patentes US 4497418, US 4078697 (image-ppubs.uspto.gov) y manual De Dietrich | Fragmento de buscador |
| Tantalio: alta resistencia a ácidos; fragilización con hidrógeno | Patentes en uspto.gov | Fragmento de buscador (dato cualitativo) |
| Aleaciones de níquel-cromo-molibdeno para medios demasiado corrosivos para el inoxidable | Informe ORNL/OSTI (aleaciones de níquel más resistentes a picaduras y rendijas que 304L/316L) | Fragmento de buscador; se usa solo el nombre genérico |
| PTFE/PFA: revestimientos; permeación; colapso o despegue del revestimiento con vacío si no está diseñado para ello | Mersen (mersen.com), patentes uspto.gov, projectmaterials | Fragmento de buscador; sin cifras |
| Vidrio de borosilicato frágil; atacado por HF y álcalis calientes como el vitrificado | Lección `reactor-y-servicios` (excepciones del vidrio) y `tuberias-y-valvulas-a-fondo` (vidrio frágil) | Repo; el ataque al borosilicato en concreto no se leyó en fuente propia |
| Elastómeros incompatibles: hinchamiento, encogimiento (fuga prematura), ablandamiento, grietas; compatibilidad según fabricante | Parker O-ring Handbook, Eriks, Trelleborg | Fragmento de buscador |
| NTP 1017: sustitución igual por igual | Lección `mantenimiento-a-fondo` y NTP 1017 del INSST | Repo (leído en su día en el documento) |
| Rouge en el agua: cómo se vigila un sistema de agua | Lección `agua-a-fondo` | Repo |
| Cálculo: 73/365 × 6,25 = 1,25 mm | cálculo | Recalculado con python |
| Cálculo: (12,0 − 11,4)/4 = 0,15 mm/año | valor de ejemplo declarado + cálculo | Recalculado |
| Cálculo: 3/0,15 = 20 años | valor de ejemplo declarado + cálculo | Recalculado |
| Cálculo: 10 mg/kg × 250 kg = 2500 mg = 2,5 g | valor de ejemplo declarado + cálculo | Recalculado |
| Reactor R-310, 4000 L, intermedio LM-48, hierro 3 ppm | valor de ejemplo declarado (ficticio) | — |

## Fuera por no poder verificarlo

- Límites numéricos del vitrificado: diferencia máxima de temperatura camisa-masa, temperatura máxima de servicio, concentración y temperatura máximas de sosa, voltaje del ensayo de chispa. Los documentos de fabricante (De Dietrich, Pfaudler) y la ISO 28721-3 no fueron accesibles (hosts bloqueados o norma de pago). En el texto se dice que los fija el fabricante y el SOP.
- Composición del 304 y 316L (porcentajes de Cr, Ni, Mo, C) y el índice PREN: solo en fragmentos y en normas de pago.
- Temperaturas a partir de las cuales aparece la corrosión bajo tensión con cloruros o temperatura crítica de picadura: solo fragmentos con cifras discrepantes.
- Diferencias de potencial galvánico admisibles (200 mV en un fragmento): no usado.
- Que el PTFE «fluye» con el apriete de las bridas: no hallado en fuente; quitado del texto.
- Marcas comerciales de aleaciones de níquel: se usa solo el nombre genérico.
- Límites de temperatura de PTFE, PFA, borosilicato y elastómeros concretos (EPDM, FKM): solo fabricantes en el buscador.
- Una NTP del INSST sobre corrosión o materiales: no se encontró ninguna que trate el tema.
- Guía de inspección de la FDA sobre superficies de contacto o reactores vitrificados: la guía de productos químicos a granel (BPC) ya no está en fda.gov (página no encontrada) y el programa de cumplimiento 7356.002F (2025) no trata materiales ni vitrificado. Se usó 21 CFR 211.65 en su lugar.
- Métodos y reactivos de pasivación y de eliminación del rouge (ácido nítrico, cítrico): solo fragmentos; no se nombran.
