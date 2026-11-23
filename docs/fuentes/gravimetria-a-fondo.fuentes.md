# Fuentes de «Gravimetría a fondo: medir pesando, cenizas y residuos» (`gravimetria-a-fondo`)

Copias locales en `scratchpad/lecciones/src_grav/dl/`. Cuentas en `src_grav/work/calc.py` (python, redondeo igual que en el texto). Comprobación de tipos con `src_grav/tsconfig.json` (tsc sin errores).

Documentos leídos de verdad (descargados y leídos en texto):

- **ICH Q6A**, Specifications: test procedures and acceptance criteria for new drug substances and new drug products: chemical substances, Step 4, 6 de octubre de 1999: https://database.ich.org/sites/default/files/Q6A%20Guideline.pdf (`q6a.txt`). Apartados 3.2.1 d) y 3.3.1 e) y f).
- **ICH Q4B Annex 1(R1)**, Residue on Ignition/Sulphated Ash General Chapter, guía de la FDA de septiembre de 2017 (Step 4 de ICH en septiembre de 2010): https://www.fda.gov/media/71214/download (`fda71214.txt`). Apartados II.A (2.1.1, 2.1.2), II.B, IV.B, IV.C, V.
- **ICH Q3D(R2)**, Guideline for elemental impurities, adoptada el 26 de abril de 2022 (copia `q3d.txt`, descargada de database.ich.org en la lección `atomos-a-fondo`). Apartados 1, 5.2, 9 y monografías de paladio y níquel.
- **ICH Q7**, apartado 11.15 (copia `q7.txt`).
- **eCFR, 40 CFR parte 51, apéndice M** (métodos 201A y 202 de la EPA): https://www.ecfr.gov/api/renderer/v1/content/enhanced/current/title-40?part=51&appendix=Appendix%20M%20to%20Part%2051 (`cfr51m.txt`). Definición 3.2 de peso constante, apartados 7.2.1, 7.2.2, 11.2.7 y tarado de filtros.
- **INSST, NTP 433** (instalaciones, material y equipos de laboratorio), **NTP 464** (operaciones básicas en el laboratorio químico), **NTP 432** (organización y recomendaciones generales), **NTP 672** (extracción localizada en el laboratorio): texto íntegro de las fichas HTML en www.insst.es (copias `ntp433.body.txt`, `ntp464.body.txt`, `ntp432.body.txt`, `ntp672.body.txt`).
- **Reglamento CLP (CE) 1272/2008, anexo VI**, entrada 016-020-00-8 ácido sulfúrico (copia `clp.txt` de la lección `acidos-bases-a-fondo`) y texto oficial de H314 en `src/content/fds.ts`.
- **FDA ORA MAN-000054** Laboratory Orientation (https://www.fda.gov/media/73548/download): solo se encontró que un patrón primario se seca «para llevarlo a masa constante»; no se usó en la lección.
- **OMS TRS 1052 anexo 4** y **TRS 957**: solo listan mufla y desecadores como equipo de un laboratorio de control de calidad; no se citan en el body.

## Tabla de afirmaciones

| Dato o afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| La gravimetría transforma lo que se mide en una sustancia pura de fórmula conocida que se pesa | Química analítica de libro de texto; coherente con la lección `gravimetria` de la app | Conocimiento de libro de texto, no leído en línea |
| Método absoluto sin curva de calibración ni patrón; lento, laborioso, no específico | Libro de texto | Razonamiento declarado (el resultado depende solo de masas y masas molares) |
| Sulfato precipitado como BaSO₄ con cloruro de bario; cloruro como AgCl con nitrato de plata; ambos muy poco solubles | Libro de texto | No leído en línea |
| Pasos disolver, precipitar, digerir, filtrar, lavar, secar o calcinar, pesar; la digestión hace crecer los cristales y mejora la filtración | Libro de texto | No leído en línea |
| Masas atómicas Ba 137,327; S 32,06; O 15,999; Cl 35,45; Ag 107,868; Na 22,990 | Valores estándar de la tabla periódica. S, O, Cl y Na coinciden con `src/content/nivel1-mol.ts`; Ba y Ag no están en la app y la fuente de referencia (CIAAW/IUPAC) no es accesible | Ba y Ag: valor de libro de texto no leído en línea |
| M(SO₄) = 96,06; M(BaSO₄) = 233,38; M(AgCl) = 143,32; M(Na₂SO₄) = 142,04; M(NaCl) = 58,44 g/mol | Cálculo | Recalculado (calc.py) |
| Factor SO₄/BaSO₄ = 0,4116; Cl/AgCl = 0,2474; S/BaSO₄ = 0,1374 | Cálculo | Recalculado |
| 0,5000 g de muestra, 0,7680 g de BaSO₄: 0,3161 g, 63,22 % | Valores de ejemplo declarados; cálculo | Recalculado |
| Na₂SO₄ puro: 67,63 % de sulfato | Cálculo | Recalculado |
| Peso constante: repetir calentar, enfriar en desecador y pesar hasta que dos pesadas seguidas no difieran más de lo fijado | 40 CFR 51 ap. M (definición 3.2 y tarado «weigh at intervals... to a constant weight») | Leído |
| Definición EPA: no más de 0,5 mg o el 1 % de la masa total menos la tara, lo que sea mayor, entre dos pesadas seguidas, con al menos seis horas de desecación entre ellas | 40 CFR 51 ap. M, 3.2 | Leído (en la lección «1 % de la masa neta» traduce «one percent of total weight less tare weight») |
| 0,5 mg como criterio de la lección | Valor de ejemplo declarado (la cifra coincide con la EPA; el criterio de farmacopea no se leyó) | Declarado |
| Pesadas 28,4538 / 28,4519 / 28,4515 g; diferencias 1,9 y 0,4 mg; 2,3 mg entre primera y tercera | Valores de ejemplo; cálculo | Recalculado |
| Desecante: sulfato de calcio anhidro con indicador | 40 CFR 51 ap. M, 7.2.2 («indicating-type anhydrous calcium sulfate») | Leído |
| Un crisol caliente falsea la pesada; al aire de la sala coge humedad | Libro de texto; coherente con la exigencia EPA de no exponer los filtros más de dos minutos al aire del laboratorio | Razonamiento declarado |
| Principio activo orgánico: C, H, O, N; se van como gases al quemar; queda lo inorgánico (sales, catalizador, sílice, metales) | Libro de texto; catalizadores y equipos como fuente de inorgánicos en Q3D 5.2 | Parcialmente leído (Q3D); el resto, libro de texto |
| Paladio sobre soporte se usa como catalizador de hidrogenación; aleaciones Ni-Al se usan como catalizador de hidrogenación | ICH Q3D(R2), monografías de paladio y níquel | Leído |
| Sílice de un coadyuvante de filtración | Libro de texto | No leído en línea |
| Pasos del ensayo (crisol a peso constante, humedecer con ácido sulfúrico, calentar suave hasta que cesen los humos, calcinar en mufla, desecador, peso constante) | Descripción general. El texto armonizado de farmacopea solo se vio en un fragmento del buscador (Indian Pharmacopoeia, ipc.gov.in, no accesible) | Fragmento de buscador; no se usan sus cifras |
| 600 °C | Valor de ejemplo declarado (la cifra 600 ± 50 °C aparece en el fragmento del buscador de la farmacopea india; no se leyó en documento) | Declarado |
| El ácido sulfúrico convierte los restos en sulfatos, una sola forma estable al calor, para un resultado repetible | Libro de texto | No leído en línea |
| 2 NaCl + H₂SO₄ da Na₂SO₄ + 2 HCl; 116,88 g NaCl dan 142,04 g Na₂SO₄; 1 mg NaCl deja 1,22 mg | Estequiometría; cálculo | Recalculado |
| ICH Q6A 3.3.1 f): la necesidad de ensayos de impurezas inorgánicas (p. ej. catalizadores) se estudia en el desarrollo según el conocimiento del proceso; residuo de ignición / cenizas sulfatadas según precedentes de farmacopea; otras inorgánicas por otros procedimientos, p. ej. absorción atómica | ICH Q6A | Leído |
| Q6A, 1999 | ICH Q6A, portada | Leído |
| Q4B anexo 1(R1): textos Ph. Eur. 2.4.14, JP 2.44 y USP <281> intercambiables; muestra típica 1-2 g para un residuo medible con exactitud, típicamente 1 mg; mufla calibrada según GMP; el texto no contiene criterios de aceptación | FDA, Q4B Annex 1(R1), 2.1.1, 2.1.2, 2.2 | Leído |
| Q4B en versión FDA de 2017 | Portada del documento | Leído |
| Residuo 0,095 % (2,0012 g de muestra, 0,0019 g de residuo) | Valores de ejemplo; cálculo | Recalculado |
| Límite «no más del 0,1 %» | Valor de ejemplo declarado | Declarado |
| Residuo máximo 1,5 mg con 1,5 g al 0,1 % | Cálculo | Recalculado |
| Masa de muestra 1 g (límite 0,1 %) y 2 g (0,05 %) para 1 mg de residuo | Cálculo con el «típicamente 1 mg» de Q4B | Recalculado |
| Q3D(R2) 2022: fuentes (catalizadores, equipos, agua, envases), sin beneficio para el paciente, controlar; ensayo específico para cada elemento salvo justificación | ICH Q3D(R2), 1, 5.2 y 9 | Leído |
| Q3D no habla de cenizas sulfatadas | Búsqueda de «ash», «ignition» en el texto completo de Q3D sin resultados | Comprobado en el documento |
| Las cenizas no son específicas | Consecuencia del método (pesa el total) | Razonamiento declarado |
| 0,05 % de NaCl en 2 g: 1,0 mg; 1,22 mg de ceniza; 0,061 % | Valores de ejemplo; cálculo | Recalculado |
| Todo resultado fuera de especificación se investiga y documenta según procedimiento; nuevo muestreo o análisis según procedimiento escrito | ICH Q7, 11.15 | Leído |
| Residuo de evaporación de la acetona: 150 mL evaporados en vitrina, desecados, peso constante; residuo menor de 1 ppm en peso; acetona de envase metálico probablemente da residuo alto | 40 CFR 51 ap. M, 7.2.1 y 11.2.7 | Leído |
| 0,09 mg en 118,5 g: 0,76 ppm | Valores de ejemplo; cálculo | Recalculado |
| Materia insoluble: filtrar por filtro tarado y pesar | Libro de texto | No leído en línea |
| Pérdida por secado como gravimetría por volatilización; se trata en la lección de Karl Fischer a fondo | Lección `gravimetria` de la app y encargo | Lección de la app |
| Riesgo principal de los dispositivos de calefacción: quemaduras térmicas | NTP 433, «Baños calientes y otros dispositivos de calefacción» | Leído |
| Humos y gases calientes de muflas retirados por una pequeña campana sobre ellas | NTP 672 | Leído |
| Pinzas, guantes de protección térmica, abrir despacio apartando la cara, placa resistente al calor | Práctica de laboratorio; pinzas y guantes térmicos aparecen en fichas universitarias (Universidad de Zaragoza) vistas solo en el buscador; la NTP 432 pide pinzas para calentar tubos de ensayo | Fragmento de buscador y razonamiento; sin cifras |
| Crisoles de porcelana (baratos, frágiles ante cambios bruscos de temperatura) y de platino (caros, casi inertes) | Libro de texto. Los materiales sílice, platino, porcelana y cuarzo aparecen en el fragmento del buscador de la farmacopea india. Q3D dice que el paladio, del grupo del platino, resiste la mayoría de reactivos salvo agua regia y ácido nítrico (no se extrapoló al platino en el texto) | Fragmento de buscador / libro de texto |
| Desecadores: lejos de golpes, caídas y sol; con vacío, protegidos con red o material resistente comprobado, nunca transportarlos con vacío, frasco de seguridad entre desecador y trompa | NTP 464, «Secado al vacío» | Leído |
| Ácido sulfúrico: Skin Corr. 1A, H314 (C ≥ 15 %) | CLP anexo VI, 016-020-00-8 | Leído |
| Texto de H314: «Provoca quemaduras graves en la piel y lesiones oculares graves» | `src/content/fds.ts` (texto oficial CLP) | Leído en el repo |
| Humos blancos al calentar con ácido sulfúrico | Fragmento del buscador (texto de farmacopea: «until white fumes are no longer evolved») y libro de texto | Fragmento de buscador |
| Operaciones con productos peligrosos (ácidos, corrosivos) en vitrinas adecuadas | NTP 433, ventilación | Leído |
| Guantes de PVC o policloropreno para trasvasar ácidos y bases, comprobando que sean impermeables | NTP 464 | Leído |
| Quemadura térmica: agua fría abundante, no quitar la ropa pegada, tapar con ropa limpia | NTP 432 | Leído |
| Efecto de los errores: tara sin peso constante da bajo (−0,02 % con la primera pesada como tara); enfriar fuera del desecador da alto (0,125 % con 0,6 mg de agua); salpicadura bajo; calcinación incompleta alto (residuo gris o negro) | Razonamiento sobre la ecuación; cifras de ejemplo recalculadas | Recalculado |
| Preguntas numéricas: 0,2474; 0,4805 g; 35,5 %; 0,3 mg; 0,16 %; 1,5 mg; 2 g | Cálculo | Recalculado (calc.py) |
| Ejemplo de planta (VX-48, R-205, CF-310, SD-420, torta agrietada) | Inventado; códigos ficticios | Valor de ejemplo declarado |

## Lo que quería incluir y quedó fuera

- El procedimiento oficial de farmacopea (Ph. Eur. 2.4.14, USP <281>, JP 2.44): temperatura exacta, cantidad de ácido, tiempos de calcinación y criterio de 0,5 mg entre pesadas. Son de pago; el texto armonizado solo se vio en un fragmento del buscador (ipc.gov.in, host no accesible) y en drugfuture.com (no accesible). Se dejó la temperatura y el 0,5 mg como valores de ejemplo declarados. La lección existente `gravimetria` dice «según la farmacopea, normalmente ≤ 0,5 mg» y «unos 600 °C»; no se pudo verificar en un documento leído.
- El criterio ACS de ±0,0002 g para peso constante (solo fragmento del buscador).
- Una NTP específica sobre muflas: no se encontró. Las fichas de prevención de la Universidad de Zaragoza (temperatura máxima de unos 1200 °C, guantes UNE-EN 407) solo se vieron en el buscador; el host no es accesible. No se dio temperatura máxima de la mufla.
- La FISQ del ácido sulfúrico (ICSC 0362) en www.insst.es: no se localizó la URL; se usó CLP.
- Gel de sílice con indicador como desecante: aparece en la EPA para el tren de muestreo, no para desecar muestras; se citó solo el sulfato de calcio anhidro.
- Solubilidades del BaSO₄ y del AgCl, y la sensibilidad del AgCl a la luz: no leídas en fuente accesible; no se dan cifras.
- Fragmentos de buscador que no se usaron para cifras: Indian Pharmacopoeia 2.3.18 (crisol de sílice, platino, porcelana o cuarzo a 600 ± 50 °C 30 min; 1-2 g; 1 mL de ácido sulfúrico; 0,5 mg), British Pharmacopoeia (cápsula de platino, 800 °C), fichas universitarias de mufla.
