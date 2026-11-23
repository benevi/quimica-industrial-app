# Fuentes: volumetrias-especiales-a-fondo

Copias de trabajo en `src_volred/dl/`. Cálculos en `src_volred/calc.py` (cuerpo) y `src_volred/calc_quiz.py` (test). Masas atómicas usadas: H 1,008; C 12,011; O 15,999; S 32,06; Mn 54,938; Fe 55,845; Cl 35,45; Ca 40,078; Mg 24,305; Cu 63,546 (valores estándar de libro de texto; coinciden con los factores de los reglamentos leídos: 0,05 mmol Ca = 2,004 mg, 0,05 mmol Mg = 1,216 mg, factor de cloro 0,3545).

## Documentos leídos

- **CLP**: Reglamento (CE) 1272/2008, texto original, DOUE L 353 de 31.12.2008 alojado en el BOE: https://www.boe.es/doue/2008/353/L00001-01355.pdf (copia de `src_grupos/dl/clp.txt`). Anexo III (textos H en español) y anexo VI, tabla 3.1. No se ha leído el texto consolidado con las adaptaciones (ATP) posteriores; por eso la lección dice «texto de 2008» y remite a la FDS.
- **Reglamento (CE) 2003/2003** (abonos), texto original, DOUE L 304 de 21.11.2003 en el BOE: https://www.boe.es/doue/2003/304/L00001-00194.pdf. Métodos 8.7 (calcio por permanganato), 8.8 (magnesio por complexometría con EDTA), 10.7 (cobre por yodometría) y método de cloruros por potenciometría con nitrato de plata. Reglamento hoy derogado (por el 2019/1009, no leído): se cita solo como ejemplo de método oficial, no como norma aplicable a un API.
- **Reglamento (CE) 152/2009** (análisis de piensos), DOUE L 54 de 26.2.2009 en el BOE: https://www.boe.es/doue/2009/054/L00001-00130.pdf (copia de `src_prepara/dl/reg152.txt`). Anexo III, parte Q (cloruros, método de Volhard) y método de azúcares con yoduro/tiosulfato/almidón.
- **NTP 479** INSST (1998), reactividad de los productos químicos (II), tablas 3 y 4: https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/14-serie-ntp-numeros-471-a-505-ano-1999/ntp-479-prevencion-del-riesgo-en-el-laboratorio-quimico-reactividad-de-los-productos-quimicos-ii-
- **NTP 464** INSST, operaciones básicas en el laboratorio (apartado mezcla crómica): https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/13-serie-ntp-numeros-436-a-470-ano-1998/ntp-464-prevencion-del-riesgo-en-el-laboratorio-quimico-operaciones-basicas
- **NTP 1188** INSST (2023), vitrinas de gases (vitrinas para ácido perclórico): https://www.insst.es/es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/36-serie-ntp-numeros-1176-a-1190-ano-2023/ntp-1188-vitrinas-de-gases-requisitos-de-seguridad-tipos-y-seleccion.
- **FDA ORA Laboratory Manual**, vol. IV, sección 3, «Drug Chemistry Analysis» (IV-03), rev. 03, 07 Oct 2022: https://www.fda.gov/media/73554/download (8.1.1 y 8.4.1).
- **FDA**, «Investigating Out-of-Specification (OOS) Test Results for Pharmaceutical Production», mayo 2022 (copia de `src_muestreo/fdaoos.txt`), responsabilidades del supervisor, puntos 3 y 5.
- **WHO TRS 957, anexo 1** (2010), buenas prácticas de laboratorios de control de calidad: https://cdn.who.int/media/docs/default-source/medicines/norms-and-standards/guidelines/quality-control/trs957_annex1_goodpractices_pharmaceuticalqualitycontrol_laboratories.pdf (copia de `src_prepara/dl/who957.txt`), puntos 10.3 y 10.6.
- **ICH Q7**: https://database.ich.org/sites/default/files/Q7%20Guideline.pdf (copia de `src_labseg/dl/q7.txt`), 6.60 y 11.16.

## Tabla de afirmaciones

| Afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| Cuatro condiciones de una reacción de valoración (rápida, completa, estequiométrica, punto final detectable) y por qué hay familias | Química de libro de texto | No leída en fuente oficial accesible; es la definición estándar |
| El análisis farmacéutico evolucionó desde valoraciones y gravimetrías a técnicas como la cromatografía; las valoraciones (acuosas y no acuosas, pH, potenciométricas) están entre las técnicas básicas | ORA Lab Manual IV-03, 8.1.1 y 8.4.1 (punto 7) | Leído |
| KMnO₄: Mn de +7 a +2, 5 electrones | Química de libro de texto; número de oxidación +7 recalculado (ya en «Oxidación y reducción a fondo») | Recalculado |
| Disolución morada, Mn²⁺ casi incoloro; el permanganato es su propio indicador | Libro de texto; el criterio de final lo confirma el método oficial | Parcial: el color del Mn²⁺ es de libro de texto |
| Valorar gota a gota hasta que el rosa se mantenga un minuto; precipitado disuelto en ácido sulfúrico caliente; valoración a 70–80 °C; KMnO₄ 0,02 mol/L | Reg. 2003/2003, método 8.7, puntos 4.9 y 8 | Leído |
| Con poco ácido se forma MnO₂ marrón; con HCl se oxidaría el cloruro | Química de libro de texto | No leído en fuente oficial; marcado en el texto |
| 2 MnO₄⁻ + 5 H₂O₂ + 6 H⁺ da 2 Mn²⁺ + 5 O₂ + 8 H₂O (18 O, 16 H, carga +4) | Cálculo | Recalculado en `calc.py` |
| MnO₄⁻ + 5 Fe²⁺ + 8 H⁺ da Mn²⁺ + 5 Fe³⁺ + 4 H₂O (carga +17) | Cálculo | Recalculado |
| Proporción 5:2 coherente con el método oficial de calcio: 1 mL de KMnO₄ 0,02 mol/L equivale a 2,004 mg de Ca (0,02 × 5/2 × 40,078) | Reg. 2003/2003, 8.7, punto 9 (factor 0,2004) y cálculo | Leído y recalculado |
| Cuenta 1 (H₂O₂ 2,98 %), M H₂O₂ 34,01 | Valores de ejemplo declarados; cálculo | Recalculado: 0,3500 mmol; 0,8750 mmol; 29,76 mg; 2,976 % |
| Cuenta 2 (FeSO₄·7H₂O 99,53 %; M 278,01; sin el 5, 19,9 %) | Valores de ejemplo; cálculo | Recalculado: 0,3580; 1,790 mmol; 497,63 mg; 99,526 %, que se expresa 99,53 %; 99,526 / 5 = 19,9 |
| I₂ + 2 Na₂S₂O₃ da 2 NaI + Na₂S₄O₆ | Reg. 2003/2003, método 10.7, punto 3 | Leído |
| 2 Cu²⁺ + 4 I⁻ da 2 CuI + I₂ | Reg. 2003/2003, método 10.7, punto 3 | Leído |
| Almidón: se añade cuando disminuye el marrón del yodo y se sigue hasta que desaparece el color (púrpura) | Reg. 2003/2003, 10.7, punto 6.2; Reg. 152/2009 (azúcares: hasta coloración amarilla mate, luego almidón) | Leído |
| 10 g de yoduro de potasio en el método de cobre | Reg. 2003/2003, 10.7, punto 6.1 | Leído |
| Tiosulfato protegido de la luz directa; almidón no se conserva mucho tiempo | Reg. 2003/2003, 10.7, puntos 4.5 y 4.8 | Leído |
| Disolución de tiosulfato de 7,812 g/L equivale a 2 mg de Cu por mL (confirma Cu:S₂O₃ 1:1) | Reg. 2003/2003, 10.7, 4.5 y cálculo | Leído y recalculado: 0,03148 mol/L × 63,546 = 2,000 mg |
| Con mucho yodo el almidón lo retiene y el final llega tarde; el yoduro sobrante mantiene el yodo disuelto y menos volátil; el yodo se evapora | Química de libro de texto | No leído en fuente oficial; marcado en el texto |
| Yodimetría del ácido ascórbico 1:1 | Química de libro de texto | No leído en fuente oficial; marcado («ejemplo clásico de los libros»). El ORA IV-03 incluye una valoración de ácido ascórbico en comprimidos (Attachment A, 2.1), pero sin decir con qué valorante: no se usa |
| Cuenta 3 (CuSO₄·5H₂O 99,62 %; M 249,68) | Valores de ejemplo; cálculo | Recalculado: 1,995 mmol; 498,1 mg; 99,62 % |
| Cerimetría con cerio(IV), normalmente con indicador o electrodo | Química de libro de texto | Solo mención; no leído en fuente oficial |
| Electrodo de platino como indicador inerte en redox; salto de tensión en la equivalencia | Química de libro de texto | No leído en fuente oficial; marcado |
| Localizar el final potenciométrico: adiciones de 0,1 o 0,05 mL, esperar estabilización, anotar volumen y potencial, final en el máximo de ΔE | Reg. 2003/2003, método de cloruros, 4.1 y 5.1 (electrodo de plata) | Leído |
| EDTA/metal siempre 1:1 sea cual sea la valencia; disoluciones molares y no normales | Reg. 2003/2003, 8.8, punto 10.1 | Leído |
| 1 mL EDTA 0,05 mol/L = 1,216 mg Mg y 2,004 mg Ca | Reg. 2003/2003, 8.8, punto 4.2 | Leído y recalculado (1,2153 y 2,0039) |
| EDTA agarra mejor en medio básico al soltar sus hidrógenos; el color del indicador depende del pH | Química de libro de texto | No leído en fuente oficial |
| Tampón de cloruro de amonio y amoníaco; pH 10,5 ± 0,1 comprobado con pH-metro | Reg. 2003/2003, 8.8, puntos 4.9 y 8.2 | Leído |
| Negro de eriocromo T: de rojo a azul, «azul sin reflejos rojos»; solo vira con magnesio | Reg. 2003/2003, 8.8, punto 4.6 | Leído |
| Mecanismo del indicador metalocrómico (une el metal con menos fuerza que el EDTA) | Química de libro de texto | No leído en fuente oficial |
| Con Ca y Mg, el EDTA se combina primero con el calcio y luego con el magnesio; se valoran juntos | Reg. 2003/2003, 8.8, punto 4.6 | Leído |
| Segunda valoración solo de Ca con calceína (u ácido calconcarbónico) en medio con hidróxido de potasio; Mg por diferencia | Reg. 2003/2003, 8.8, puntos 3, 4.8 y 8.3 | Leído. El método usa KOH con KCN; la lección no menciona el cianuro (solo «el método los enmascara») |
| Los indicadores son sensibles al aire y pierden color; viran despacio, últimas gotas lentas; mirar el viraje horizontalmente sobre fondo blanco; experiencia y mismo analista | Reg. 2003/2003, 8.8, puntos 10.2 a 10.5 | Leído |
| Enmascarar otros metales | Reg. 2003/2003, 8.8 (solución de cianuro de potasio añadida en 8.2) | Leído (la finalidad de enmascarar es libro de texto) |
| Dureza = Ca + Mg, expresada como CaCO₃; M CaCO₃ 100,09 | Libro de texto; masa molar recalculada | Recalculado |
| Cuenta 4: 84,1 mg/L CaCO₃; 22,4 mg/L Ca; 6,8 mg/L Mg | Valores de ejemplo; cálculo | Recalculado: 8,407 mg; 84,07; 22,44; 6,81 |
| Sal cálcica ficticia: 8,02 % teórico; 7,97 % | Valores de ejemplo; cálculo | Recalculado: 8,016; 0,795 mmol; 31,86 mg; 7,966 % |
| Ag⁺ + Cl⁻ da AgCl, 1:1 | Química de libro de texto; implícito en los métodos oficiales (factor 0,3545 × T × V) | Leído (factor) y libro de texto |
| Volhard: precipitar con nitrato de plata en medio ácido nítrico, valorar el exceso con tiocianato de amonio, sulfato férrico de amonio como indicador, marrón rojizo persistente un minuto, ensayo en blanco; también potenciometría; Mohr para ciertas muestras | Reg. 152/2009, anexo III, parte Q, puntos 2, 3, 5.2, 6 y 7 | Leído |
| Volhard en reglamento de abonos (exceso de AgNO₃ valorado con tiocianato de amonio y sulfato férrico) | Reg. 2003/2003, método de cloro de cloruros (líneas ~8929) | Leído |
| Mohr: cromato como indicador, medio casi neutro, precipitado rojizo; lleva Cr(VI) | Química de libro de texto | No leído en fuente oficial (el Reg. 152/2009 solo nombra el método); marcado |
| Fajans: indicador de adsorción | Química de libro de texto | No leído; marcado |
| Disolución de nitrato de plata en frasco de vidrio marrón | Reg. 2003/2003, método de cloruros, punto 3.3 | Leído |
| Cuenta 5: teórico 10,13 %; resultado 10,12 % | Valores de ejemplo; cálculo | Recalculado: 10,129; 0,856 mmol; 30,35 mg; 10,115 (se expresa 10,12) |
| Factor de equivalencia 1 mL AgNO₃ 0,1000 mol/L = 3,545 mg Cl | Cálculo | Recalculado |
| ICH Q7 pide registrar las cuentas con unidades, factores de conversión y factores de equivalencia; datos de preparación de reactivos y disoluciones; firma de quien analiza y revisión de una segunda persona | ICH Q7, 6.60 | Leído |
| Reactivos y disoluciones valoradas preparados y etiquetados según procedimiento escrito | ICH Q7, 11.16 | Leído |
| Retroceso Volhard: 2,500 − 1,230 = 1,270 mmol = 45,02 mg | Valores de ejemplo; cálculo | Recalculado |
| Cuenta 6: yodo 0,04920 mol/L | Valores de ejemplo; cálculo | Recalculado |
| KMnO₄: Ox. Sol. 2 H272; Acute Tox. 4 H302; Aquatic Acute 1 H400; Aquatic Chronic 1 H410 (índice 025-002-00-9) | CLP anexo VI 2008 | Leído |
| K₂Cr₂O₇ (024-002-00-6): Ox. Sol. 2 H272; Carc. 1B H350; Muta. 1B H340; Repr. 1B H360FD; Acute Tox. 2 H330; Acute Tox. 3 H301; STOT RE 1 H372; Acute Tox. 4 H312; Skin Corr. 1B H314; Resp. Sens. 1 H334; Skin Sens. 1 H317; acuáticas H400/H410 | CLP anexo VI 2008 | Leído (la lección cita una selección) |
| AgNO₃ (047-001-00-2): Skin Corr. 1B H314; H400; H410 | CLP anexo VI 2008 | Leído |
| Yodo (053-001-00-3): Acute Tox. 4 H332, H312; Aquatic Acute 1 H400 | CLP anexo VI 2008 | Leído |
| Ácido perclórico (017-006-00-4): Ox. Liq. 1 H271 y Skin Corr. 1A H314; límites específicos: H271 si C > 50 %, Ox. Liq. 2 H272 si C ≤ 50 %; Skin Corr. 1A si C ≥ 50 %, 1B entre 10 y 50 % | CLP anexo VI 2008 | Leído |
| Textos H271, H272, H314, H350, H340, H360FD, H330, H332, H312, H302, H400, H410 | CLP anexo III (versión ES) | Leído |
| Incompatibilidades del permanganato (cobre, cromo, hierro, mayoría de metales o sus sales, alcoholes, acetona, materiales orgánicos...) y del ácido perclórico (anhídrido acético, bismuto, alcohol, papel, madera, grasas y aceites) | NTP 479, tabla 4 | Leído |
| Mezcla crómica: descartarla salvo que no haya alternativa; dicromato cancerígeno; recomendable sustituirla por permanganato (nocivo por ingestión y comburente) | NTP 464 | Leído |
| Vitrinas específicas para ácido perclórico, con materiales que no reaccionen y acceso para limpieza | NTP 1188 | Leído |
| Nitrato de plata deja una mancha oscura en la piel que tarda en irse | Fragmento de buscador (ficha técnica de un medicamento cauterizante con nitrato de plata en cima.aemps.es; ICSC 1116 en INCHEM: cristales que se vuelven grises con la luz) | Solo fragmento de buscador; marcado en el texto. Hosts no accesibles desde la sesión |
| «Guantes y vitrina» para el yodo | Deducción de H332 y H312 | Inferencia, no cita |
| Etiqueta de disolución valorada: nombre, molaridad, fecha e iniciales de preparación, fecha e iniciales de valoración, factor; registros de preparación y valoración | WHO TRS 957 an. 1, 10.3 y 10.6 | Leído |
| Ante un OOS: verificar las cuentas y que patrones, disolventes, reactivos y disoluciones cumplían | FDA OOS 2022, supervisor, puntos 3 y 5 | Leído |
| Números del test (3,1 %; 1,2 mmol; 1 mmol; 125,1 mg/L; 10,07 %; 69,48 mg) | Valores de ejemplo; cálculo | Recalculado en `calc_quiz.py` (3,0953; 1,200; 1,000; 125,11; 10,068; 69,482) |
| Ejemplo de planta (TQ-48, R-305, C-306, SD-307, especificación 9,9–10,4 %, LOD 3,1 % y 0,3 %, 9,8 % y 10,1 %) | Valores de ejemplo y códigos inventados | Declarado. Coherencia recalculada: con 3,1 % de volátiles y un teórico de 10,13 % en seco, 10,13 × 0,969 = 9,82 %, que se narra como 9,8 % |

## Lo que quise incluir y dejé fuera

- Límites de exposición profesional del yodo, la plata o el cromo(VI): no leídos en una fuente oficial accesible (los LEP del INSST no se consultaron).
- Clasificaciones CLP posteriores a 2008 (adaptaciones técnicas, p. ej. posibles nuevas clases para el permanganato o el nitrato de plata): el texto consolidado está en EUR-Lex, no accesible. Se remite a la FDS.
- Autorización REACH (anexo XIV) del dicromato de potasio: no verificada; no se menciona.
- Métodos y límites de farmacopea (Ph. Eur., USP) para cloruros, metales o valoraciones de API concretos: de pago, no citados.
- Fichas FISQ del INSST de los cinco reactivos: enlazan a chemicalsafety.ilo.org, host bloqueado.
- Patrón primario para valorar el permanganato (oxalato de sodio) y el tiosulfato (yodato o dicromato): de libro de texto, no leído en fuente oficial; se remite a la lección «Reactivos, patrones y disoluciones a fondo».
- Valores de pH concretos del medio de Mohr y del viraje de los indicadores de Fajans: sin fuente oficial leída.
- Valoraciones no acuosas con ácido perclórico en ácido acético: pertenecen a la lección ácido-base; aquí solo se trata la seguridad del perclórico.
