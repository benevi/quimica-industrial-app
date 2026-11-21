# Fuentes de «Isómeros y quiralidad a fondo» (`quiralidad-a-fondo`)

Documentos leídos en esta sesión (descargados con curl en `src_quiral/` y pasados a texto con `pdftotext -layout`):

- **ICH Q6A**, *Specifications: Test Procedures and Acceptance Criteria for New Drug Substances and New Drug Products: Chemical Substances*: https://database.ich.org/sites/default/files/Q6A%20Guideline.pdf (`q6a.txt`). Leídos el apartado 3.2.1 b), el 3.3.1 d) «Tests for chiral new drug substances» completo y el glosario (Chiral, Enantiomers, Racemate).
- **ICH Q3A(R2)**, *Impurities in New Drug Substances*: https://database.ich.org/sites/default/files/Q3A%28R2%29%20Guideline.pdf (`q3a.txt`). Leídos el apartado 2 (exclusiones), el glosario (Enantiomeric Impurity) y el Anexo 1 de umbrales.
- **FDA**, *Development of New Stereoisomeric Drugs* (mayo de 1992, final): https://www.fda.gov/regulatory-information/search-fda-guidance-documents/development-new-stereoisomeric-drugs (`fda.html`, texto en `fda.txt`). Leída entera.
- **EMA**, *Investigation of Chiral Active Substances* (3CC29a, adoptada en octubre de 1993): https://www.ema.europa.eu/en/documents/scientific-guideline/investigation-chiral-active-substances_en.pdf (`ema.txt`). Leída entera.
- **EMA**, información de producto de Thalidomide BMS (ficha técnica, EPAR): https://www.ema.europa.eu/en/documents/product-information/thalidomide-bms-epar-product-information_en.pdf (`thal.txt`). Leídos los apartados 4.4 (efectos teratógenos), 5.1 y 5.2 (distribución y biotransformación).
- Lecciones del repo leídas para no repetirlas y para remitir por su título: `isomeros-y-quiralidad` (src/content/nivel3.ts, entera), títulos de `carbono-y-formulas`, `cristalizacion`, `hplc`, `enlaces-a-fondo`, `acidos-bases-a-fondo`, `cinetica-a-fondo`. Modelo de formato: `nivel12-inertizacion.ts` y `types.ts`.
- Cálculos: `src_quiral/calc.py` (python 3).

| Dato, fórmula o afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| Isómeros: misma fórmula molecular, distinta estructura; propiedades distintas | Conocimiento de libro de texto; coincide con `isomeros-y-quiralidad` | Leído en el repo |
| Isómeros estructurales de cadena, posición y función; butano/isobutano C₄H₁₀, 1-propanol/2-propanol C₃H₈O, etanol/dimetil éter C₂H₆O | Conocimiento de libro de texto | Fórmulas comprobadas contando átomos; masas molares 58,12, 60,10 y 46,07 g/mol con python |
| 60,1 g por mol para C₃H₈O | Cálculo con masas estándar IUPAC (C 12,011; H 1,008; O 15,999; valores estándar de la IUPAC, no leídos en esta sesión) | Python: 60,096 |
| Etanol líquido y dimetil éter gas a temperatura ambiente | Lección `isomeros-y-quiralidad` del repo | Leído en el repo; no leído en fuente externa |
| Explicación por puentes de hidrógeno (H unido a O) | Conocimiento de libro de texto; `enlaces-a-fondo` (nivel1-enlaces.ts) | Leído en el repo |
| 1-propanol y 2-propanol tienen distinto punto de ebullición | Conocimiento de libro de texto | No leído en esta sesión: las fichas ICSC (chemicalsafety.ilo.org) dan error 403 desde esta sesión; por eso no se da ninguna cifra |
| Definición de estereoisómeros (misma constitución, distinta orientación en el espacio) | EMA 3CC29a, apartado 2.1; FDA 1992, apartado I | Leído en los documentos |
| Isómeros cis-trans en un doble enlace; ejemplo del 2-buteno; el doble enlace impide el giro; significado latino de cis y trans | Conocimiento de libro de texto | No leído en esta sesión |
| Isómeros geométricos química y farmacológicamente distintos, separables sin técnicas quirales, tratados como fármacos distintos | FDA 1992, apartado I | Leído en el documento |
| Quiral: no superponible con su imagen especular | ICH Q6A, glosario «Chiral» | Leído en el documento |
| Estereocentro: carbono con cuatro grupos distintos; definición general «átomo en el que intercambiar dos ligandos crea un nuevo estereoisómero» (usada en `terms`) | Libro de texto; EMA 3CC29a, apartado 2.1 «Stereogenic centre» | Leído en el documento la definición general |
| Tetraedro; regla para encontrar estereocentros (descartar CH₃, CH₂ y carbonos de doble enlace) | Conocimiento de libro de texto | No leído en esta sesión |
| Ácido láctico, alanina e ibuprofeno con un estereocentro; 2-propanol sin estereocentro | Conocimiento de libro de texto (estructuras) | Comprobado revisando los cuatro grupos de cada carbono |
| Enantiómeros: imágenes especulares no superponibles | ICH Q6A glosario «Enantiomers»; ICH Q3A glosario; EMA 2.1 | Leído en los documentos |
| Fuera de un ambiente quiral, propiedades fisicoquímicas idénticas salvo girar la luz polarizada en sentidos opuestos y en la misma cantidad | EMA 3CC29a, apartado 2.1; FDA 1992, apartado I | Leído en los documentos |
| Lista práctica de propiedades iguales (fusión, ebullición, densidad, solubilidad en disolventes no quirales, HPLC normal) | Consecuencia directa de lo anterior; libro de texto | Deducido de EMA/FDA |
| Seres vivos hechos de piezas quirales: aminoácidos L y azúcares D | EMA 3CC29a, apartado 1 | Leído en el documento |
| Analogía mano y guante para enzimas y receptores | Analogía didáctica pedida en el encargo | No es un dato |
| l-propranolol bloqueante beta, d-propranolol no; granulocitopenia relacionada con el isómero d de la levodopa; los dos enantiómeros del ibuprofeno son antiinflamatorios | FDA 1992, apartado I | Leído en el documento |
| Talidomida: centro quiral, uso clínico como racemato de (+)-(R)- y (−)-(S)-talidomida; teratógeno humano potente con malformaciones graves | Ficha técnica de Thalidomide BMS (EMA), apartados 5.1 y 4.4 | Leído en el documento |
| Unión a proteínas plasmáticas 55 % (R) y 65 % (S) | Ficha técnica de Thalidomide BMS, apartado 5.2 | Leído en el documento |
| Reglas R/S simplificadas (prioridad por número atómico, desempate por átomos siguientes, grupo menor hacia atrás, horario R, antihorario S; rectus y sinister) | Conocimiento de libro de texto (reglas CIP simplificadas) | No leído en esta sesión; números atómicos O 8, N 7, C 6, H 1 de libro de texto |
| Orden OH > COOH > CH₃ > H en el ácido láctico | Aplicación de las reglas | Comprobado a mano |
| La L-alanina es la (S)-alanina | Conocimiento de libro de texto | No leído en esta sesión |
| La EMA remite a las recomendaciones IUPAC para la nomenclatura R y S | EMA 3CC29a, apartado 2.2 | Leído en el documento (no se citó en el texto por espacio) |
| (+) dextrógiro, (−) levógiro; d y l como notación antigua de la rotación; D y L como sistema antiguo de configuración | Conocimiento de libro de texto; uso de l-/d- por la FDA y de L-/D- por la EMA | Uso leído en FDA y EMA; definición de libro de texto |
| Sin relación directa entre R/S y (+)/(−); en la talidomida el R es (+) | Libro de texto; ficha técnica de talidomida para el ejemplo | El ejemplo leído en la ficha; la regla general es de libro de texto |
| Racemato: mezcla equimolar de dos enantiómeros, sin actividad óptica | ICH Q6A glosario «Racemate»; EMA 2.1 | Leído en los documentos |
| Fórmula del ee y sus inversas mayor = (100 + ee)/2 y menor = (100 − ee)/2 | Conocimiento de libro de texto; la del ee coincide con `isomeros-y-quiralidad` | Inversas comprobadas por álgebra y python |
| Cuenta 1: 99,5/0,5 da ee 99,0 % | Cálculo (valores de ejemplo) | Python: 99,0 |
| Cuenta 2: ee 90 % da 95 % y 5 % | Cálculo | Python: 95,0 y 5,0 |
| Cuenta 3: 412 kg y 8 kg, total 420, ee 96,2 % | Valores de ejemplo declarados + cálculo | Python: 96,19 |
| Cuenta 4: 250 kg, ee 99,6 %, menor 0,2 %, 0,5 kg | Valores de ejemplo declarados + cálculo | Python: 0,2 y 0,5 |
| Número máximo de estereoisómeros 2 elevado a n; «máximo» porque algunas moléculas simétricas tienen menos | Conocimiento de libro de texto | No leído en esta sesión |
| Cuentas 5 y 6: 2² = 4 (RR, SS, RS, SR) y 2³ = 8 | Cálculo | Python |
| Diastereómeros: estereoisómeros que no son enantiómeros | EMA 3CC29a, apartado 2.1; FDA 1992, apartado I | Leído en los documentos |
| Diastereómeros con propiedades distintas y separables sin técnicas quirales | FDA 1992, apartado I («chemically distinct... generally readily separated without chiral techniques») | Leído en el documento |
| Describir con detalle la etapa en la que se forma el estereocentro; materia prima con estereocentro caracterizada con pureza estereoisomérica y métodos estereoselectivos validados | EMA 3CC29a, apartados 3.1 y 3.2.1 | Leído en el documento |
| Síntesis asimétrica y separación quiral a gran escala como avances que permiten fabricar enantiómeros puros a escala comercial | FDA 1992, apartado I | Leído en el documento |
| Catalizador quiral: poca cantidad, no se gasta, produce sobre todo un enantiómero | Conocimiento de libro de texto (idea) | No leído en esta sesión |
| Cuatro maneras de resolver: cristalización de diastereómeros, resolución cinética química y enzimática, cristalización preferencial, cromatografía | EMA 3CC29a, apartado 3.2.4 | Leído en el documento |
| Declarar el número de ciclos de resolución | EMA 3CC29a, apartado 3.2.4 | Leído en el documento |
| Pasos de la resolución por sales diastereoméricas (formar la sal, cristalizar, filtrar, liberar la base con NaOH y extraer) | Conocimiento de libro de texto; ácido + base forman sal, como en `acidos-bases-a-fondo` | No leído en fuente externa; el ácido mandélico como agente de resolución también aparece en `isomeros-y-quiralidad` |
| Masa molar del ácido mandélico C₈H₈O₃ = 152,15 g/mol | Cálculo con masas estándar IUPAC | Python: 152,149 |
| Balance: 300 kg, M 150 g/mol (ejemplo), 2000 mol, 1000 mol de cada; 152,1 kg de agente; M sal 302,15; máximo 302,1 kg; 241,7 kg (80 %); 120,0 kg de amina; 114,0 kg (95 %); 38 % y 76 % | Valores de ejemplo declarados + cálculo | Python: 2000, 152,149, 302,149, 241,72, 120,0, 114,0, 38,0, 76,0 |
| Máximo teórico del 50 % en una resolución de un racemato | Cálculo (un racemato es 50:50) | Comprobado |
| Mecanismo de racemización (H arrancable junto a C=O, intermedio plano, ácido, base y calor) | Conocimiento de libro de texto | No leído en esta sesión |
| ee 99,6 % da 0,2 %; ee 98,0 % da 1,0 %; cinco veces más | Cálculo | Python |
| La racemización va más rápida con más temperatura y avanza con el tiempo | Conocimiento de libro de texto; coherente con `cinetica-a-fondo` | No leído en fuente externa |
| Precauciones para mantener la configuración en las etapas siguientes; sin cambio inaceptable de pureza estereoquímica en la fabricación del medicamento ni en la vida útil | EMA 3CC29a, apartados 3.1 y 4 (Finished product, Stability) | Leído en el documento |
| Estudios de estabilidad con un método capaz de evaluar la integridad estereoquímica | FDA 1992, apartado III (Stability) | Leído en el documento |
| Rotación óptica, punto de fusión y cromatografía de líquidos con fase estacionaria quiral como métodos accesibles | EMA 3CC29a, apartado 4 | Leído en el documento |
| El polarímetro da una sola cifra para toda la muestra y un racemato da cero | Libro de texto; racemato sin actividad óptica en ICH Q6A | Lo del racemato leído en Q6A |
| HPLC quiral: columna con relleno quiral, cada enantiómero sale a otro tiempo, porcentaje por áreas | Conocimiento de libro de texto; `isomeros-y-quiralidad` y `hplc` del repo | Leído en el repo |
| ICH Q3A(R2) excluye las impurezas enantioméricas de su ámbito | ICH Q3A(R2), apartado 2 | Leído en el documento |
| Definición de impureza enantiomérica | ICH Q3A(R2), glosario | Leído en el documento |
| El enantiómero opuesto, excluido de los umbrales de identificación y cualificación por dificultades prácticas de cuantificación, y tratado por lo demás según los principios de las guías de impurezas | ICH Q6A, 3.3.1 d) | Leído en el documento |
| Control del otro enantiómero como las demás impurezas, con posibles limitaciones técnicas; control posible en materia prima o intermedio con justificación | ICH Q6A, 3.3.1 d), «Drug Substance: Impurities» | Leído en el documento |
| Valoración enantioselectiva: método quiral, o no quiral más control de la impureza enantiomérica | ICH Q6A, 3.3.1 d), «Assay» | Leído en el documento |
| Identificación capaz de distinguir los dos enantiómeros y el racemato | ICH Q6A, 3.3.1 d), «Identity» | Leído en el documento |
| En el medicamento, control del otro enantiómero necesario salvo que se demuestre racemización no significativa en fabricación y almacenamiento | ICH Q6A, 3.3.1 d), «Drug Product: Degradation products» | Leído en el documento |
| Si se elige un solo enantiómero, el otro se considera impureza | EMA 3CC29a, apartado 4 | Leído en el documento |
| Ejemplo de planta (R-305, C-310, T-312, R-306, S-320, AX-7; ee 98,8, 99,0, 99,7 y 99,6 %; 60 a 5 °C en 6 h; siembra a 45 °C; 25 °C; 4 h; 27 y 22 °C) | Valores de ejemplo declarados | Ficticio |
| Quiz: 97/3 da 94 %; ee 98,6 da 0,7 %; 480 kg a ee 99,0 da 2,4 kg; 495/5 da 98 %; tres estereocentros dan 8; 400 kg de racemato dan como máximo 200 kg | Cálculo | Python |

## Lo que se quiso incluir y se dejó fuera

- **Puntos de ebullición del 1-propanol y del 2-propanol** y del etanol y el dimetil éter: no se pudieron leer en una fuente accesible (las fichas ICSC de la OIT dan 403; el buscador FISQ del INSST solo enlaza a ellas). El texto solo dice que son distintos.
- **Historia detallada de la talidomida** (años, número de casos, qué enantiómero se relacionó con las malformaciones, interconversión en el cuerpo): la ficha técnica de la EMA leída no lo cuenta. Solo se recoge lo que sí dice: centro quiral, racemato de (+)-(R) y (−)-(S), teratógeno potente y unión a proteínas del 55 % y 65 %.
- **Rotación óptica específica** con su fórmula y la relación «pureza óptica proporcional al ee»: no se leyó el método 2.2.7 de la Farmacopea Europea en esta sesión.
- **Ejemplos reales de catálisis asimétrica industrial** (hidrogenaciones con complejos metálicos quirales, premios Nobel): no leídos en fuente oficial.
- **Reciclado del enantiómero no deseado por racemización**: práctica conocida, pero no leída en las guías; se omitió.
- **Compuestos meso** con nombre y ejemplo: solo se menciona que algunas moléculas simétricas tienen menos de 2 elevado a n estereoisómeros.
- **Umbrales numéricos de ICH Q3A** (0,05 %, 0,10 %, 0,15 %): se leyeron en el Anexo 1, pero no se citan porque Q6A excluye de los de identificación y cualificación al enantiómero opuesto y citarlos podía confundir.
