# Fuentes de la lección `vestimenta-a-fondo`

Método: documentos descargados con curl en esta sesión (21 de noviembre de 2026) y leídos en texto con `pdftotext -layout` (copias en `scratchpad/src_vestimenta/` y `scratchpad/dl/`). Ninguna norma de pago (ISO 14644, EN, Farmacopea) se ha consultado; los límites de partículas y microbiológicos se toman del anexo 1, que los reproduce.

Claves: **Leído** = leído en el documento descargado. **Cálculo** = recalculado con python. **Práctica habitual** = sin texto normativo leído; la lección lo presenta como práctica habitual y remite al procedimiento. **Ejemplo** = valor de ejemplo declarado.

## Documentos

| Clave | Documento | URL |
|---|---|---|
| Anexo 1 | EudraLex vol. 4, Annex 1, Manufacture of Sterile Medicinal Products, C(2022) 5938 final, 22.8.2022 (en vigor 25.8.2023) | https://health.ec.europa.eu/system/files/2022-08/20220825_gmp-an1_en_0.pdf (copia ya descargada en `dl/annex1.pdf`) |
| Q7 | ICH Q7, Good Manufacturing Practice Guide for Active Pharmaceutical Ingredients | https://database.ich.org/sites/default/files/Q7%20Guideline.pdf |
| Cap. 2 | EudraLex vol. 4, parte I, capítulo 2, Personnel (16.8.2013, en vigor 16.2.2014) | https://health.ec.europa.eu/system/files/2016-11/2014-03_chapter_2_0.pdf |
| OMS lavado | OMS, cartel «How to Handwash?», mayo de 2009 | https://cdn.who.int/media/docs/default-source/patient-safety/how-to-handwash-poster.pdf |
| OMS fricción | OMS, cartel «How to Handrub?», mayo de 2009 | https://cdn.who.int/media/docs/default-source/patient-safety/how-to-handrub-poster.pdf |
| OMS tarjeta | OMS, tarjeta de higiene de manos (WHO guidelines on drawing blood) | https://cdn.who.int/media/docs/default-source/infection-prevention-and-control/injection-safety/job-aids/1card_handwash_web.pdf |
| FDA | FDA, Guidance for Industry: Sterile Drug Products Produced by Aseptic Processing, 2004 | https://www.fda.gov/media/71026/download |
| RD 773 | Real Decreto 773/1997, EPI (texto consolidado) | https://www.boe.es/buscar/act.php?id=BOE-A-1997-12735 |

## Afirmaciones

| Afirmación | Fuente | Comprobación |
|---|---|---|
| El personal figura, con materiales y entorno, entre las fuentes externas de contaminación | Anexo 1, 2.1 i | Leído |
| La ropa debe ser barrera frente a partículas generadas por el cuerpo y microorganismos que suelta | FDA, sección IV.A | Leído |
| Tabla 1, grado B, ≥ 0,5 µm/m³: 3520 en reposo, 352000 en operación | Anexo 1, 4.27 y tabla 1 | Leído |
| 352000 / 3520 = 100 | Cálculo | Recalculado (100,0) |
| Que el aumento en operación se debe sobre todo a la actividad de las personas | Razonamiento a partir de 2.1, 7.7, 7.12 y 7.18 del anexo 1 (desprendimiento por el personal y su movimiento); el anexo no lo cuantifica | Leído (interpretación declarada como idea, sin cifra) |
| Q7 cubre API estériles solo hasta justo antes de esterilizarlos; esterilización y proceso aséptico fuera | Q7, 1.3 | Leído |
| El anexo 1 es para estériles; sus principios (incluida la vestimenta) pueden usarse en no estériles, documentando cuáles | Anexo 1, apartado 1 (Scope) | Leído |
| Q7 3.20 a 3.24 (higiene, ropa, contacto, comida, enfermedad y lesiones; examen médico u observación del supervisor) | Q7, 3.2 | Leído |
| Lavabos con agua caliente y fría, jabón, secadores o toallas de un solo uso; vestuarios o duchas cuando proceda | Q7, 4.15 | Leído |
| Cap. 2, 2.15 a 2.21 (programas de higiene, examen médico al incorporarse, enfermedad, ropa, prohibición de comer y de guardar medicación personal, contacto de manos, uso de lavabos) | Cap. 2 | Leído |
| Comunicar problemas de salud que hagan soltar contaminación anormal; lo decide la persona designada | Anexo 1, 7.7 | Leído |
| Lavado con agua y jabón: 40-60 s; lavar cuando estén visiblemente sucias, si no, fricción | OMS lavado | Leído |
| Pasos del lavado (mojar, jabón, palma con palma, palma sobre dorso con dedos entrelazados, palma con palma entrelazados, dorso de dedos, pulgar en rotación, yemas en rotación, aclarar, secar con toalla de un solo uso, cerrar el grifo con la toalla) | OMS lavado | Leído |
| Fricción: 20-30 s, cantidad en el hueco de la mano, mismos frotados, terminar cuando estén secas | OMS fricción | Leído |
| Los carteles son de 2009 | OMS lavado y fricción (pie: «May 2009») | Leído |
| Que los pasos 4 a 8 cubren zonas que el frotado simple no alcanza | Práctica habitual / razonamiento sobre el diseño del cartel; el cartel no da la razón | No leído como tal; presentado como explicación |
| Lavado de manos según procedimiento escrito | Anexo 1, 7.10 | Leído |
| Ropa típica de grados B, C, D y añadidos en C y D según la CCS | Anexo 1, 7.13 i a iv | Leído |
| Ropa que suelte pocas fibras y limite el desprendimiento al moverse | Anexo 1, 7.12 y 7.13 | Leído |
| Revisión visual antes y después de vestirse y al salir | Anexo 1, 7.11 | Leído |
| Ropa estéril en cada entrada a A y B, de la talla adecuada | Anexo 1, 7.15 | Leído |
| Lavandería separada, proceso cualificado, número máximo de lavados | Anexo 1, 7.17 | Leído |
| Organización en zona de síntesis y zona de acabado; ropa «parecida a un grado D» en acabado | Práctica habitual, coherente con Q7 3.21 y 4.21 (este último citado en «Aire, presiones y salas a fondo») y con la lección «Salas limpias y su clasificación» | Presentado como forma habitual que decide la empresa |
| Última fase de la esclusa del mismo grado en reposo que la sala; lavabos solo en la primera fase | Anexo 1, 4.12 (y 4.12 i) | Leído |
| Puertas no a la vez; enclavamiento hacia A y B, aviso visual o sonoro hacia C y D | Anexo 1, 4.13 | Leído |
| Joyas, reloj, maquillaje, móvil y objetos no esenciales fuera de zonas limpias | Anexo 1, 7.9 | Leído |
| Secuencia de vestido (de arriba abajo, banco de separación, guantes al final, espejo, luz de la puerta) | Práctica habitual; el anexo 1 no la detalla. Apoyos leídos: ropa plegada para no tocar la cara exterior ni el suelo (7.13 i), mangas dentro del segundo par de guantes (7.13 i), guantes solapando las mangas (FDA) | Presentado como práctica habitual |
| Definición de cualificación del vestido | Anexo 1, glosario «Gowning qualification» | Leído |
| Evaluación visual y microbiológica, al menos anual; puntos: dedos de guantes, antebrazos, pecho, capucha | Anexo 1, 7.4 | Leído |
| Impresión de guantes: grado B 5 UFC/guante (cinco dedos); grado A sin crecimiento | Anexo 1, 9.30, tabla 6 | Leído |
| Sin cualificar no se entra en B; descalificación y recualificación | Anexo 1, 7.5 y 7.6 | Leído |
| Formación regular, sobre las operaciones de cada uno, con registros | Q7, 3.12 | Leído |
| Movimiento lento, controlado y metódico | Anexo 1, 7.18 | Leído |
| Moverse despacio; no ponerse en el camino del flujo unidireccional; acercarse por el lado y no por encima; no hablar cerca de la zona crítica | FDA, sección IV.A | Leído |
| Mascarilla y protección ocular para evitar el desprendimiento de gotas y partículas | Anexo 1, 7.13 i | Leído |
| Mínimo número de personas en la sala | Anexo 1, 7.2 | Leído |
| Ropa que protege al operador no debe quitar protección al producto | Anexo 1, 7.11 | Leído |
| EPI usados a la vez, compatibles y sin perder eficacia | RD 773, art. 5.2 | Leído |
| Obligación del trabajador de informar de inmediato de daños en el EPI | RD 773, art. 10 c) | Leído |
| Ropa y guantes dañados con riesgo para el producto se cambian inmediatamente; guantes desinfectados con regularidad | Anexo 1, 7.16 | Leído |
| Toda desviación del procedimiento se documenta y explica | Q7, 2.16 | Leído |
| Orden de actuación ante guante roto (parar, seguridad propia, apartarse, cambiar, avisar, anotar, evalúa calidad) | Práctica habitual, apoyada en las filas anteriores | Presentado como orden habitual |
| Diferencia mínima orientativa de 10 Pa entre salas contiguas de distinto grado | Anexo 1, 4.14 | Leído |
| 10 + 10 = 20 Pa; 3 × 40 = 120 s; 3 × 60 = 180 s | Cálculo | Recalculado |
| Códigos SL-02, CF-201, FX-101, tiempos y situación del ejemplo de planta | Ejemplo | Declarado en el texto |

## Lo que se dejó fuera por no poder verificarlo

- **Cifras de desprendimiento de una persona** (escamas de piel al día, partículas por minuto según la actividad). La cifra de «cerca de 10⁶ escamas de piel con microorganismos viables al día» de las directrices de la OMS de 2009 sobre higiene de manos solo se vio en un fragmento del buscador (NCBI Bookshelf, NBK144014); ni NCBI ni iris.who.int ni la copia de proqualis.fiocruz.br fueron accesibles desde la sesión. No se usa. La lección dice expresamente que no da esas cifras.
- **Recuentos de bacterias en las manos** (UFC/cm²) de las mismas directrices: misma razón.
- **Mascarillas con válvula de exhalación** y si protegen o no el producto: no se encontró fuente leída; se sustituyó por la idea, leída en la lección de EPI, de que el EPI protege al portador y la empresa elige la combinación.
- **Práctica del sector en plantas de API no estériles** (si se hacen placas de guantes, qué ropa exacta se usa en acabado): sin fuente; se presenta como lo que decide y documenta cada empresa.
- **Directrices completas de la OMS de 2009** (momentos de higiene, uso de guantes): no accesibles; solo se usaron los carteles de cdn.who.int.
