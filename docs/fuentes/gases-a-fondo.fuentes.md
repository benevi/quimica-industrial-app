# Fuentes de `gases-a-fondo`

Descargas y cálculos en `scratchpad/lecciones/tmp-gases/` (`calc.py` recalcula todas las cifras).

## Documentos leídos

- **RD2032**: Real Decreto 2032/2009, de unidades legales de medida, texto consolidado del BOE: https://www.boe.es/buscar/act.php?id=BOE-A-2010-927 (leídos cap. I, apartados 2.5 y 2.6; tabla 3, nota e; tabla 8 y su nota a).
- **RD656**: Real Decreto 656/2017, Reglamento de almacenamiento de productos químicos y sus ITC, texto consolidado: https://www.boe.es/buscar/act.php?id=BOE-A-2017-8755 (leídos: Reglamento art. 2, definiciones 23 a 27; ITC MIE APQ-3 art. 7 y art. 23; ITC MIE APQ-4 art. 11.1; ITC MIE APQ-5 art. 1 y art. 5).
- **RD809**: Real Decreto 809/2021, Reglamento de equipos a presión, texto consolidado: https://www.boe.es/buscar/act.php?id=BOE-A-2021-16407 (leída la definición 6 de la ITC EP-4, «gas inerte», con «temperatura y presión normales (15 ºC y 1,013 bar absolutos)»).
- **NIST-fluid**: NIST Chemistry WebBook, propiedades termofísicas de fluidos (tablas de saturación por temperatura e isotermas): https://webbook.nist.gov/cgi/fluid.cgi (propano C74986, amoniaco C7664417, CO₂ C124389, nitrógeno C7727379). Archivos `sat_*.txt`, `iso_*.txt`.
- **NIST-pc**: NIST Chemistry WebBook, datos de cambio de fase (Mask=4): https://webbook.nist.gov/cgi/cbook.cgi?ID=C7782505&Units=SI&Mask=4 (cloro), y los mismos para C74986, C7664417, C7727379, C124389, C108883 (tolueno). Leídos T boil, T c, P c y constantes de Antoine.
- **ICSC**: Fichas internacionales de seguridad química, versión española del INSST: cloro 0126 https://chemicalsafety.ilo.org/dyn/icsc/showcard.display?p_lang=es&p_card_id=0126&p_version=2 ; amoniaco anhidro 0414 (p_card_id=0414); propano 0319 (p_card_id=0319). Leídas enteras.
- **Kuphaldt**: T. Kuphaldt, *Lessons in Industrial Instrumentation*, capítulo «Fluid mechanics»: https://control.com/textbook/physics/fluid-mechanics/ (leído el apartado de leyes de los gases: P·V ∝ T, Boyle, Charles, Gay-Lussac y P·V = Z·n·R·T).
- Lecciones de la app leídas enteras para no repetir y cuadrar números: `inertizacion-a-fondo`, `gases-de-planta-a-fondo`, `equilibrio-a-fondo`, `unidades-a-fondo`; leídas por partes: `mol-a-fondo` (gases), `densidad-a-fondo` (gases), `materia-a-fondo` (presión de vapor), `potenciometria-a-fondo` (origen de R); `docs/simulador-reactor.md` (inertización, Antoine del tolueno, 0,05 bar g).

## Tabla afirmación por afirmación

| Dato o afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| Presión como golpes de moléculas; más moléculas, menos sitio o más temperatura dan más presión | Modelo de partículas de `materia-a-fondo`; Kuphaldt (P·V ∝ T) | Explicación cualitativa; la proporcionalidad leída en Kuphaldt |
| Absoluta = manométrica + atmosférica; atmósfera redondeada a 1 bar | `inertizacion-a-fondo`; RD2032 tabla 8 nota a (1,013 25 bar) | Leído |
| T = t + 273,15 | RD2032, tabla 3, nota e | Leído |
| k = 1,380 649 × 10⁻²³ J/K; Avogadro 6,022 140 76 × 10²³ mol⁻¹, valores fijos | RD2032, cap. I, 2.5 y 2.6 | Leído |
| R = NA · k = 8,314 462 618… J/(mol·K), exacto | Cálculo con los dos valores del RD2032 | Recalculado (8,31446261815324) |
| R = 0,083 145 L·bar/(mol·K) | Cálculo: 1 J = 1 Pa·m³; 1 bar = 10⁵ Pa (RD2032 tabla 8); 1 m³ = 1000 L | Recalculado |
| Boyle, Charles, Gay-Lussac como casos de P·V/T constante; ley combinada | Kuphaldt, «Fluid mechanics», gas laws | Leído; la combinada se deduce de P·V ∝ T con n constante |
| Ej. 1: 1,05 × 4000 / 3000 = 1,40 bar a (0,40 bar g) | Cálculo; 6000 L del R-204 (`docs/simulador-reactor.md`); 0,05 bar g valor de ejemplo coherente con el simulador | Recalculado |
| Ej. 2: 4000 × 333,15 / 293,15 = 4546 L; salen 546 L; en °C saldrían 12 000 L | Cálculo | Recalculado (4545,8) |
| Condiciones normales 15 °C y 1,013 bar a | RD809, ITC EP-4, definición 6 | Leído |
| Ej. 3: 4000 × (1,5/1,013) × (288,15/313,15) = 5450 L | Cálculo | Recalculado (5450,1) |
| Ej. 4: 200 × 50 / (0,083 145 × 293,15) = 410 mol; × 28,01 g/mol = 11,5 kg | Cálculo; M(N₂) 28,01 como en `densidad-a-fondo` | Recalculado (410,3 mol; 11,49 kg) |
| P·V = Z·n·R·T; Z = 1 en el gas ideal | Kuphaldt | Leído. Kuphaldt añade que los gases reales tienen Z menor que 1; no se usó porque el NIST da Z > 1 para el nitrógeno a 200 bar |
| N₂ a 20 °C y 1 bar: 0,041 037 mol/L (ideal 0,041 027; Z = 1,000) | NIST-fluid, isoterma 20 °C | Leído; Z recalculado (0,9998) |
| N₂ a 20 °C y 200 bar: 7,8014 mol/L (ideal 8,206; Z = 1,05); botella 390 mol, 10,9 kg, 5 % menos | NIST-fluid, isoterma 20 °C | Leído; recalculado (Z = 1,052; 390,07 mol; 10,93 kg) |
| CO₂ a 20 °C y 41 bar: 2,2975 mol/L, fase vapor (ideal 1,682; Z = 0,73) | NIST-fluid, isoterma 20 °C | Leído; recalculado (0,732) |
| Causa de Z ≠ 1 (tamaño propio de las moléculas, atracción) | Explicación cualitativa de libro de texto | No leída en una fuente de esta sesión; solo explica el signo de los Z medidos por el NIST |
| «La cifra exacta de una botella la da el proveedor» | `gases-de-planta-a-fondo` | Criterio ya usado en la app |
| Ley de Dalton y p = x · P | Deducción a partir de P·V = n·R·T aplicada a cada gas | Demostrado en el texto (el Gold Book de la IUPAC no fue accesible: página de Cloudflare) |
| Fracción molar = % en volumen en un gas ideal | Deducción: a igual P y T, V es proporcional a n | Demostrado por cálculo |
| O₂ del aire 21 %; 0,21 × 1013 = 213 mbar | `inertizacion-a-fondo`; cálculo | Recalculado (212,7) |
| Ciclos 4,2 / 0,84 / 0,17 %; presiones parciales 42 / 8,4 / 1,7 mbar; tras el vacío 42 mbar | `inertizacion-a-fondo`; `docs/simulador-reactor.md` (4,19 / 0,83 / 0,17); cálculo | Recalculado |
| Presión de vapor del tolueno: 29 mbar a 20 °C, 185 mbar a 60 °C | NIST-pc (C108883), Antoine de Besley y Bottomley 1974 (273–298 K) y de Gaw y Swinton 1968 (303–343 K) | Leídas las constantes; recalculado (29,26 y 185,26 mbar) |
| Las constantes del simulador dan 29,1 mbar a 20 °C | `docs/simulador-reactor.md` (A 6,95464; B 1344,8; C 219,482, mmHg y °C) | Recalculado (29,11 mbar; 185,26 a 60 °C) |
| Ej. 6: 29/1050 = 2,8 %; N₂ 1021 mbar; a 60 °C N₂ 1160, total 1345 mbar abs (0,35 bar g); con N₂ solo 1193 mbar (0,19 bar g) | Cálculo | Recalculado (2,79 %; 1160,0; 1345,3; 1193,3) |
| Kc y Kp; Kp con presiones en bar; datos termodinámicos referidos a 1 bar | `equilibrio-a-fondo`; RD2032 tabla 8 nota a | Leído |
| Kp = Kc · (R·T)^Δn | Deducción a partir de p = c·R·T | Demostrado en el texto |
| Ej. 7: Kc = 0,010 mol/L, 400 K (valores de ejemplo declarados); R·T = 33,26; Kp = 0,333 bar (con Δn = 1, Kp lleva unidades de presión) | Cálculo | Recalculado (0,3326) |
| Ej. 8: Kp = 4α²P/(1 − α²); α = 0,277 a 1 bar y 0,091 a 10 bar | Deducción y cálculo | Recalculado (0,2771 y 0,0908) |
| La presión desplaza hacia el lado con menos moles de gas; con Δn = 0 no mueve | `equilibrio-a-fondo` (Le Châtelier); comprobado con el Ej. 8 | Leído y recalculado |
| Temperaturas críticas: N₂ 126,19 K (−147 °C), CO₂ 304,18 K (31,0 °C), propano 369,9 K (96,8 °C), NH₃ 405,4 K (132,3 °C), Cl₂ 416,956 K (143,8 °C) | NIST-pc | Leído; pasado a °C |
| Ebullición a 1 atm: N₂ 77,34 K (−196 °C), propano 231,1 K (−42 °C), Cl₂ 239,5 K (−34 °C), NH₃ −33 °C | NIST-pc; para el NH₃, NIST-fluid (1,0070 bar a −33,4 °C) e ICSC 0414 (−33 °C) | Leído |
| CO₂: a 1 atm no hay líquido | NIST-fluid: la tabla de saturación empieza en el punto triple, −56,56 °C y 5,18 bar, por encima de 1 atm | Leído e interpretado |
| Por encima de la temperatura crítica no hay presión que licúe el gas | Definición de gas comprimido del RD656 (art. 2.24) y NIST-pc | Leído (como idea; la definición IUPAC no fue accesible) |
| Definiciones de gas comprimido, licuado (alta y baja presión, límites −50 y +65 °C), licuado refrigerado y disuelto | RD656, Reglamento, art. 2, puntos 24 a 27 | Leído |
| Presiones de vapor: propano 8,3646 / 17,133 bar; NH₃ 8,5704 / 20,330 bar; CO₂ 57,291 bar a 20 °C (NIST, absolutas) | NIST-fluid, tablas de saturación | Leído; cocientes recalculados (2,05 y 2,37) |
| Cloro: 6,7 bar a 20 °C y 14,5 bar a 50 °C | NIST-pc, Antoine de Stull 1947 (239,4–400,3 K): A 4,28814; B 969,992; C −12,791 | Recalculado (6,73 y 14,55 bar; da 1,007 bar a −34 °C, coherente) |
| ICSC: propano 840 kPa y cloro 673 kPa a 20 °C | ICSC 0319 y 0126 | Leído |
| El manómetro de un gas licuado marca la presión de vapor mientras quede líquido; el contenido se sabe por peso | Consecuencia de las tablas de saturación del NIST (la presión solo depende de T) | Deducido; no hay un documento leído que diga «se pesa» con esas palabras |
| Botellas de cloro «de 50 a 100 kilogramos» | RD656, ITC MIE APQ-3, art. 23.2 | Leído |
| Botella de N₂ de 200 bar de 20 a 50 °C: 220 bar (10 %) | Cálculo (Gay-Lussac, gas ideal) | Recalculado (220,5) |
| Propano líquido 500,06 kg/m³ a 20 °C y 448,87 a 50 °C: +11 % de volumen | NIST-fluid | Leído; recalculado (11,4 %) |
| NH₃: líquido ≤ 95 % del volumen tras dilatarse hasta la temperatura máxima de servicio | RD656, ITC MIE APQ-4, art. 11.1.a | Leído |
| Cloro: grado de llenado ≤ 1250 kg por m³ | RD656, ITC MIE APQ-3, art. 7 | Leído |
| Zonas de almacenamiento de botellas ≤ 50 °C | RD656, ITC MIE APQ-5, art. 5 | Leído |
| Calor de vaporización del propano a 20 °C: 595,95 − 251,64 = 344 kJ/kg | NIST-fluid (entalpías de vapor y de líquido saturados) | Leído; recalculado (344,3) |
| Caudal extraíble impuesto por la temperatura del cloro; prohibido calentar con pared por encima de 40 °C; extracción en fase gas con la válvula superior | RD656, ITC MIE APQ-3, art. 23.1.c y 23.2 | Leído |
| 1 L de propano líquido: 500 g / 44,1 = 11,3 mol; 273 L de gas a 20 °C y 1,013 bar | NIST-fluid (densidad); ICSC 0319 (masa molecular 44,1); cálculo | Recalculado (272,8 L) |
| Girar la botella con fuga para dejar el escape arriba y evitar la fuga de líquido | ICSC 0126, 0414 y 0319, notas | Leído en las tres |
| La evaporación rápida del líquido puede producir congelación | ICSC 0126, 0414 y 0319 | Leído |
| Densidad relativa del vapor: propano 1,6; NH₃ 0,60; Cl₂ 2,5 | ICSC 0319, 0414 y 0126 | Leído |
| Propano extremadamente inflamable; se acumula en zonas bajas y causa deficiencia de oxígeno | ICSC 0319 | Leído |
| Amoniaco: inflamable, tóxico si se inhala, quemaduras graves | ICSC 0414 (frases GHS) | Leído |
| Cloro: mortal si se inhala, comburente, quemaduras graves | ICSC 0126 (frases GHS) | Leído |
| No verter chorros de agua sobre el líquido (propano, amoniaco); no pulverizar agua sobre una botella de cloro con escape, por la corrosión | ICSC 0319, 0414 y 0126 | Leído |
| Ante una fuga: evacuar y actuar con equipo autónomo de respiración | ICSC 0126, 0414 y 0319, «Derrames y fugas» | Leído |
| Quiz: 3307 L; 1,405 bar a; 61,5 mol; 8,4 mbar; 3,17 %; 1,247 bar | Cálculo | Recalculado |
| Equipos, productos y códigos (R-204, R-218, QN-31, PIC-218, AI-218, B-07) | Ficticios | Valores de ejemplo declarados |
| Presión de la botella del ejemplo de planta, 7,6 bar g | NIST-fluid: 8,57 bar a a 20 °C menos 1 bar | Recalculado |

## Lo que se quiso incluir y se dejó fuera

- Las definiciones del Gold Book de la IUPAC (presión parcial, fracción molar, constante de equilibrio estándar, temperatura crítica): goldbook.iupac.org devuelve una comprobación de Cloudflare. Dalton y Kp = Kc·(RT)^Δn se demostraron a partir de la ecuación de los gases.
- La ecuación de Van der Waals con sus constantes: sin fuente gratuita leída para las constantes.
- Una reacción real para el ejemplo de Kp (por ejemplo, la síntesis del amoniaco o N₂O₄ ⇌ 2 NO₂): no se encontró un valor de K verificable en una fuente leída; se usó una reacción ficticia con valores de ejemplo.
- El grado de llenado de las botellas de propano y de CO₂ (instrucción P200 del ADR): no se leyó el texto.
- Una práctica escrita que diga «pesar la botella y restar la tara»: no se encontró en un documento leído; se presenta como consecuencia física de la presión de vapor.
- El acetileno como ejemplo de gas disuelto: no verificado; la definición se da sin ejemplo.
- Temperatura crítica del aire y del hidrógeno: no consultadas; solo se pone el nitrógeno como gas comprimido.
- El NIST no tiene el cloro en su base de fluidos; su presión de vapor sale de las constantes de Antoine del NIST, no de una tabla de saturación.

## Ideas para la capa visual

- Simulación PhET «Propiedades de los gases» (*Gas Properties*): una caja con partículas donde se cambian volumen, temperatura y número de moléculas y se ve la presión; sirve para Boyle, Charles y Gay-Lussac.
- Esquema de los ciclos de inertización con dos barras por paso: presión total y presión parcial de oxígeno, para ver que el vacío baja la parcial y el nitrógeno diluye.
- Corte de una botella de gas licuado (líquido abajo, vapor arriba, grifo en la fase vapor) junto a una de gas comprimido, con la curva de presión frente a contenido de cada una: plana hasta casi vacía en la licuada, recta en la comprimida.
- Gráfica de la presión de vapor del propano, el amoniaco y el cloro entre −40 y 60 °C con los datos del NIST, marcando 20 °C y 50 °C.
