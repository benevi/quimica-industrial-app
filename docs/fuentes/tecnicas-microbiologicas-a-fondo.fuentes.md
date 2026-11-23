# Fuentes de la lección `tecnicas-microbiologicas-a-fondo`

Cómo leer la columna «Comprobación»:

- **Leído**: descargado con curl, pasado a texto (pdftotext o HTML a texto) y leído el pasaje.
- **Fragmento de buscador**: solo visto en el resumen del buscador; no se usa para ninguna cifra.
- **Recalculado**: cuenta rehecha con python (`tmp-micro/calc/calc.py`), con el mismo redondeo que el texto.
- **Valor de ejemplo declarado**: número inventado para la cuenta; el texto lo dice.

Documentos leídos (copias en `tmp-micro/dl/`):

- **RD664**: Real Decreto 664/1997, texto consolidado. https://www.boe.es/buscar/act.php?id=BOE-A-1997-11144 (artículos 1 a 7 y 15, anexo II con sus notas, anexos IV y V).
- **AN1**: EudraLex vol. 4, anexo 1 (2022). https://health.ec.europa.eu/system/files/2022-08/20220825_gmp-an1_en_0.pdf (8.34 a 8.86, 9.28, 10.10-10.11, glosario).
- **EMA-EST**: EMA, «Guideline on the sterilisation of the medicinal product, active substance, excipient and primary container», EMA/CHMP/CVMP/QWP/850374/2015 (2019). https://www.ema.europa.eu/en/documents/scientific-guideline/guideline-sterilisation-medicinal-product-active-substance-excipient-and-primary-container_en.pdf (introducción, 4.1.1, 4.1.2, 4.1.5, 4.2.1, definiciones).
- **OMS961**: OMS, TRS 961 (2011), anexo 2, buenas prácticas de laboratorios de microbiología farmacéutica (entero). https://cdn.who.int/media/docs/default-source/medicines/norms-and-standards/guidelines/quality-control/trs961_annex2_goodpractices_pharmaceutical_microbiology_laboratories.pdf
- **BAM2**: FDA BAM, capítulo 2, Microscopic Examination of Foods (2000). https://www.fda.gov/media/178934/download
- **BAM3**: FDA BAM, capítulo 3, Aerobic Plate Count (enero 2026). https://www.fda.gov/media/191248/download
- **BAM4**: FDA BAM, capítulo 4, E. coli y coliformes (2020). https://www.fda.gov/media/182572/download
- **BAM12**: FDA BAM, capítulo 12, Staphylococcus aureus (2016). https://www.fda.gov/media/183067/download
- **BAM18**: FDA BAM, capítulo 18, Yeasts, Molds and Mycotoxins (2001). https://www.fda.gov/media/183581/download
- **BAMA2**: FDA BAM, apéndice 2, Most Probable Number (2023). https://www.fda.gov/media/183668/download
- **R32**: FDA BAM, reactivo R32, Gram Stain. https://www.fda.gov/food/laboratory-methods/bam-r32-gram-stain
- **FDA04**: FDA, Guidance for Industry, Sterile Drug Products Produced by Aseptic Processing (2004). https://www.fda.gov/media/71026/download
- **FDABI**: FDA, Biological Indicator (BI) Premarket Notification [510(k)] Submissions (2007). https://www.fda.gov/media/71134/download
- **AMPI**: ficha técnica de Ampicillin for Injection, USP, publicada en fda.gov (referencias CLSI de 2015). https://www.fda.gov/media/127633/download
- **STIC**: FDA, Antibacterial Susceptibility Test Interpretive Criteria. https://www.fda.gov/drugs/development-resources/antibacterial-susceptibility-test-interpretive-criteria
- **NTP1202**: INSST, NTP 1202 (2024), Cabinas de seguridad biológica (texto HTML íntegro). https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/37-serie-ntp-numeros-1191-a-1214-ano-2024/ntp-1202-exposicion-a-agentes-biologicos-equipos-de-seguridad-cabinas-de-seguridad-biologica-2024
- **NTP807**: INSST, NTP 807 (2008), Agentes biológicos: glosario. https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/23-serie-ntp-numeros-786-a-820-ano-2008/ntp-807-agentes-biologicos-glosario-2008
- **NTP585**: INSST, NTP 585 (2001), trabajo con bacterias. https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/17-serie-ntp-numeros-576-a-610-ano-2001/ntp-585-prevencion-del-riesgo-biologico-en-el-laboratorio-trabajo-con-bacterias-2001
- **NTP376**: INSST, NTP 376 (1996), seguridad y buenas prácticas de laboratorio. https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/11-serie-ntp-numeros-366-a-400-ano-1996/ntp-376-exposicion-a-agentes-biologicos-seguridad-y-buenas-practicas-de-laboratorio
- **MA051**: INSST, método MA-051/A04, fibras por microscopía de contraste de fases. https://www.insst.es/documents/94886/359043/MA_051_A04.pdf
- **NIST**: NIST Chemistry WebBook, propiedades de saturación del agua (100 a 135 °C). https://webbook.nist.gov/cgi/fluid.cgi?ID=C7732185&Type=SatP&TUnit=C&PUnit=bar

Lecciones de la app leídas enteras para no repetir: `microbiologia-a-fondo`, `ensayos-microbiologicos-a-fondo`, `salas-limpias-a-fondo`, `vestimenta-a-fondo`.

## Tabla de afirmaciones

| Afirmación | Fuente | Comprobación |
|---|---|---|
| Formación del analista: verter placas, contar colonias, técnica aséptica, preparar medios, diluciones, identificación (1.4) | OMS961 | Leído (ya no se cita con número en el cuerpo tras recortar) |
| Los aumentos de objetivo y ocular se multiplican; aumento total de unos 500 = objetivo 40× por ocular 12,5× | MA051, 5.3.1.2 | Leído |
| Para bacterias: objetivo de inmersión en aceite de 95-100× y ocular de 10× | BAM2 (equipo, punto 4) | Leído |
| 100 × 10 = 1000; 1 µm × 1000 = 1 mm; 40 × 10 = 400 (quiz) | Cálculo | Recalculado |
| Líquido de inmersión indicado por el fabricante; no ponerlo en objetivos que no son de inmersión (daña el pegamento) | BAM2, Caveats | Leído |
| Enfocar primero a poco aumento (más campo, más distancia, no romper el portaobjetos); no soplar lentes; no pañuelos de papel; no regular brillo con el diafragma | BAM2 | Leído |
| Gram: la tinción diferencial más útil del laboratorio de microbiología | NTP585 | Leído |
| Pasos y tiempos del Gram: fijar con calor moderado, cristal violeta con oxalato 1 min, lugol de Gram 1 min, etanol 95 % hasta que no suelte azul (unos 30 s), safranina 10-30 s, lavados con agua | R32 | Leído (el BAM escribe «10-30 g», errata evidente por segundos) |
| Grampositivas azul violáceo, pared sobre todo de peptidoglicano y sin membrana externa; gramnegativas rosa, poca capa de peptidoglicano y membrana externa con lipopolisacárido | NTP807 (bacteria Gram positivo / negativo, pared celular); NTP585 (púrpura/rojo) | Leído |
| El alcohol es el paso crítico (el BAM marca cuándo parar) | R32 (criterio «until blue color is no longer released») | Leído; la valoración «crítico» es razonamiento a partir del procedimiento |
| Cocos (esféricos) y bacilos (cilíndricos) | NTP585, NTP807 | Leído |
| Micobacterias no se tiñen bien con Gram por sus lípidos | NTP585 | Leído |
| Bacillus: bacilo grampositivo formador de esporas; endotoxinas en gramnegativas | NTP807 (espora bacteriana, bacilos Gram positivo), NTP585 | Leído |
| Agar: sustancia de algas, base de medios sólidos; medios básicos, selectivos y diferenciadores | NTP807 | Leído |
| Ejemplos: plate count agar (general); BGLB para coliformes (selectivo); L-EMB: E. coli centro oscuro con o sin brillo metálico | BAM3, BAM4 | Leído (clasificar el BGLB como «selectivo» es razonamiento: caldo con bilis y verde brillante para coliformes; no hay frase literal del BAM que diga «selectivo») |
| Baird-Parker: colonias de S. aureus de gris a negro azabache con halo | BAM12 | Leído (que sea selectivo es razonamiento con la definición de NTP807; no frase literal) |
| MUG: más del 95 % de E. coli tienen la enzima; fluorescencia azulada a 365 nm | BAM4, sección II | Leído |
| Preparación de medios: agua sin sustancias inhibidoras, instrucciones de esterilización del fabricante, no microondas, reparto bajo flujo unidireccional, etiquetado con fecha y caducidad (5.2.4 a 5.3.1) | OMS961 | Leído |
| Siembra en masa: 1 mL + 12-15 mL de agar a 45 ± 1 °C, mezclar, solidificar, invertir, 48 ± 2 h a 35 °C | BAM3 | Leído |
| Rango contable 15-300 colonias por placa (cambio de marzo de 2025) | BAM3 | Leído |
| Siembra en superficie: 0,1 mL extendidos con varilla de vidrio acodada; mejor que en masa para mohos (las de superficie tapan a las de abajo) | BAM18; BAM12 (varilla) | Leído |
| Ejercicio 2: 0,1 × 0,01 = 0,001 g; 45 / 0,001 = 45000 UFC/g; quiz: 0,1 × 0,001 = 0,0001; 62 / 0,0001 = 620000 | Cálculo; valores de ejemplo | Recalculado |
| Estría para aislamiento y paso de hasta 5 colonias sospechosas | BAM4, sección F | Leído |
| Cultivo puro: un único tipo de microorganismo, tras varios aislamientos en medio sólido; colonia procedente de una sola bacteria | NTP807 | Leído |
| Asas calientes en cultivo forman aerosoles; asas desechables | NTP376 | Leído |
| Esterilización mata todo, incluidas esporas; la desinfección no asegura matar esporas | NTP807 | Leído |
| Muerte exponencial; estéril = SAL ≤ 10⁻⁶ (≤ 1 en 10⁶); la esterilidad no se asegura analizando, sino con proceso validado | EMA-EST (introducción y definiciones) | Leído |
| Autoclave: vapor a presión | NTP807 | Leído |
| Vapor saturado: 100 °C a 1,0142 bar; 121 °C a 2,0505 bar; 134 °C a 3,0423 bar | NIST | Leído; 2,05 − 1,01325 = 1,04 bar recalculado |
| Referencia Ph. Eur. 5.1.1: ≥ 121 °C durante ≥ 15 min en todas las unidades | EMA-EST 4.1.1 y definiciones | Leído (la Ph. Eur. es de pago: se cita a través de la EMA) |
| Quitar el aire: aísla e impide que el vapor ceda su energía | FDA04 (IX.C) | Leído |
| Prueba de eliminación de aire normalmente diaria (8.61); prueba de fugas normalmente semanal si hay vacío (8.60) | AN1 | Leído |
| Carga seca al sacarla, envases íntegros (8.56, 8.57) | AN1 | Leído |
| Registro de cada ciclo con temperatura y tiempo; solo la presión no basta | OMS961 4.3.5.1 y 4.3.5.3 | Leído |
| Valor D: reduce al 10 % | AN1 glosario; EMA-EST; FDABI | Leído |
| Valor z: diferencia de temperatura que cambia D diez veces | AN1 glosario | Leído |
| F0: minutos equivalentes a 121 °C con z = 10; F0 ≥ 8 min para todo proceso de vapor | EMA-EST | Leído |
| Bioindicador de vapor: 10⁵ esporas (población mínima), D121 = 1,5 min | FDABI tabla 3 | Leído |
| 15 / 1,5 = 10 reducciones; 10⁵ × 10⁻¹⁰ = 10⁻⁵; quiz 12 / 2 = 6 (quiz con 10⁶ esporas y D = 2 min, valores de ejemplo) | Cálculo a partir de la definición de D | Recalculado |
| 1 min a 131 °C = 10 min a 121 °C; 1 min a 115 °C = 10^(−0,6) = 0,25 min; 20 × 0,25 = 5 min | Cálculo a partir de las definiciones de F0 y z | Recalculado (5,02) |
| Calor seco: referencia ≥ 160 °C, ≥ 2 h | EMA-EST 4.1.2 y definiciones | Leído |
| Calor seco elimina endotoxinas (8.66); despirogenación con reducción mínima de 3 log (8.68); > 220 °C para esterilizar y despirogenar vidrio y cápsulas de aluminio | AN1; EMA-EST 4.1.2 | Leído |
| 1000 UE / 10³ = 1 UE | Cálculo | Recalculado |
| Aire del horno de calor seco pasa por HEPA (8.70) | AN1 | Leído |
| Filtro de grado esterilizante, poro nominal ≤ 0,22 µm, validado (8.79) | AN1 | Leído |
| Reto con Brevundimonas diminuta, ≥ 10⁷ por cm² | FDA04; EMA-EST (tabla de filtración, «minimum 10⁷ CFU/cm²») | Leído |
| 10⁷ × 10 cm² = 10⁸ | Cálculo; área valor de ejemplo declarado | Recalculado |
| Integridad antes del uso (salvo justificación) y siempre después; bioburden ≤ 10 UFC/100 mL antes de filtrar | EMA-EST 4.1.5 | Leído |
| UV no es método de esterilización (8.71) | AN1 | Leído |
| Filtro esterilizante no retiene endotoxinas | Lección `microbiologia-a-fondo` (FDA) | Leído en la app |
| Definición de bioindicador (población conocida, normalmente esporas) | AN1 glosario; EMA-EST definiciones | Leído |
| Esporas recomendadas: vapor G. stearothermophilus; calor seco B. atrophaeus; óxido de etileno B. atrophaeus; peróxido de hidrógeno G. stearothermophilus | FDABI tabla 2 | Leído |
| Control positivo en cada ciclo cuando se usan BI; verificar población, pureza e identidad de cada lote; evitar contaminación con sus microbios (8.42, 8.43) | AN1 | Leído |
| Cinta indicadora: solo indica que hubo proceso, no esterilidad (8.44) | AN1; OMS961 4.3.5.4 | Leído |
| Ciclo con identificador único (8.45) | AN1 | Leído |
| Cuatro grupos de riesgo con sus definiciones | RD664 art. 3.1 | Leído (el BOE escribe «seno peligro», errata del original por «serio») |
| E. coli (excepto no patógenas) 2; S. aureus 2; P. aeruginosa 2; Aspergillus fumigatus 2; Candida albicans 2; M. tuberculosis 3; B. anthracis 3; Salmonella typhi 3 (**); Ebolavirus 4 | RD664 anexo II (redacción vigente) | Leído |
| No estar en la lista no implica grupo 1 | RD664 anexo II, nota introductoria 3 | Leído |
| En caso de duda, el grupo de peligrosidad superior | RD664 art. 4.3.a | Leído |
| Nivel de contención mínimo según grupo | RD664 art. 15.1.b | Leído |
| CSB en anexo IV: «cuando proceda» (nivel 2), «sí, cuando la infección se propague por el aire» (3), «sí» (4) | RD664 anexo IV, medida 3 | Leído |
| CSB: flujo de aire dirigido, HEPA H14, 99,995 % a 0,3 µm | NTP1202 | Leído. La lección lo da como «el tamaño que peor atrapan (el más penetrante; la NTP 1202 da como referencia 0,3 µm)», coherente con `nivel14-hvac.ts`: en la EN 1822 (de pago, no leída) el tamaño más penetrante se determina para cada filtro |
| Clase I: protege persona y entorno, no producto; entrada 0,7-1 m/s; extracción total por HEPA. Clase II: además flujo laminar descendente que protege el producto. Clase III: cerrada, guantes, al menos 200 Pa negativos, grupo 4 | NTP1202 | Leído |
| 1000000 × 0,005 % = 50; quiz 200000 × 0,00005 = 10 | Cálculo | Recalculado |
| Flujo laminar no es CSB; trabajar a 10 cm de la rejilla, despacio, una persona, evitar llamas; HEPA no filtra gases ni vapores | NTP1202 | Leído |
| Identificación: catalasa (burbujas de gas), coagulasa (coágulo firme), Gram; sistemas automáticos bioquímicos admitidos | BAM12; BAM4 | Leído |
| IMViC: indol, VP, rojo de metilo, citrato; E. coli = Gram negativo, gas de lactosa, patrón ++-- o -+-- | BAM4 | Leído |
| Métodos genéticos más exactos que los bioquímicos; útiles en investigaciones | FDA04 (X.B) | Leído |
| NMP: definición, utilidad < 100/g, supuestos | BAMA2 | Leído |
| 3-1-0 = 43 NMP/g (IC 9-180); 3-2-0 = 93; multiplicar por 10 si las cantidades son diez veces menores (ejemplo del propio BAM: 43 a 430) | BAMA2 tabla 1 y «Conversion of table units» | Leído y recalculado por máxima verosimilitud (42,73 y 93,28) |
| Antibiograma por difusión con disco (diámetro del halo) y por dilución (CMI); categorías S, I y R con su significado | AMPI | Leído |
| Enterobacterias y ampicilina: halo ≥ 17 S, 14-16 I, ≤ 13 R; CMI ≤ 8 S, 16 I, ≥ 32 R | AMPI tabla 1 | Leído (ficha con referencias CLSI de 2015; se avisa de que los cortes cambian) |
| La FDA reconoce hoy los criterios de CLSI M100 (36.ª ed., 2026) | STIC | Leído |
| Métodos rápidos validados, equivalentes o mejores (9.28); validación para el producto (10.11) | AN1; OMS961 11.2 | Leído |
| PCR: amplifica una secuencia de ADN con cebadores y polimerasa | NTP807 | Leído |
| Plant: lote LQ-2207, centrífuga CF-612, kit MK-05, sala SD-61, autoclave AC-03 | Inventados | Valor de ejemplo declarado (ficticios) |
| Plant: tinción de esporas | BAM, índice de reactivos (R32a, Endospore stain) | Leído solo el título en el índice |

## Lo que quise incluir y dejé fuera

- Técnica concreta de la estría en cuatro cuadrantes y flameado del asa entre cuadrantes: no encontré una descripción paso a paso en una fuente gratuita accesible (el manual de bacteriología clínica de la OMS de 2003 y el SOP de ejemplo de la OMS en extranet.who.int están en iris.who.int y apps.who.int, bloqueados). Se explica solo el principio.
- Mecanismo químico detallado de por qué el alcohol decolora a las gramnegativas: sin fuente leída; se queda en la diferencia de pared del glosario del INSST.
- Bioluminiscencia de ATP como método rápido, citometría de flujo y espectrometría de masas para identificar: sin fuente gratuita leída.
- Definición formal de CMI y diluciones de dos en dos: la norma CLSI es de pago; la definición del texto es la del propio nombre («la más baja de las probadas que frena el crecimiento»).
- Mueller-Hinton, turbidez 0,5 de McFarland y tiempos de incubación del antibiograma: solo en documentos inaccesibles o de pago.
- Clases de cabina de clase II (A1, A2, B1, B2, C1) de la norma NSF/ANSI 49: la NTP 1202 las cita pero su tabla no salió en el texto HTML.
- Tiempo de exposición recomendado por la NTP 1202 para purgar la cabina (3-5 min) y distancias de instalación: recortado por extensión.
- Ensayo de esterilidad de farmacopea (Ph. Eur. 2.6.1, 14 días de incubación): de pago; no se cita.
- Rapidez del método LST-MUG y de la aglutinación con látex: el BAM lo menciona, recortado por extensión.
- goldbook.iupac.org bloqueado: no se usaron definiciones IUPAC.

## Ideas para la capa visual

- Esquema del microscopio compuesto con objetivo, ocular, condensador, diafragma y gota de aceite, con un deslizador para elegir objetivo (10×, 40×, 100×) y ver el aumento total y el tamaño aparente de una bacteria de 1 µm.
- Animación de la tinción de Gram en cuatro pasos sobre dos células, una grampositiva y otra gramnegativa, que muestre cómo el alcohol quita el violeta solo a la segunda y la safranina la vuelve rosa.
- Simulador de la curva de muerte en el autoclave: escala logarítmica de supervivientes frente al tiempo, con D y temperatura ajustables y el F0 acumulado, marcando el nivel 10⁻⁶.
- Diagrama de flujo de aire de las cabinas de clase I, II y III frente a una cabina de flujo laminar horizontal, con flechas de hacia dónde va el aire y a quién protege cada una.
