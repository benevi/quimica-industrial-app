# Fuentes de la lección `estequiometria-a-fondo`

Cómo leer la columna «Comprobación»:

- **Leído en el documento**: descargado con curl, pasado a texto con pdftotext y leído el pasaje.
- **Recalculado**: cuenta rehecha con python (`src_esteq/calc.py`), con el mismo redondeo que el texto. El script también comprueba, átomo por átomo, que cada ecuación está ajustada y que la masa de reactivos y productos coincide.
- **Libro de texto, comprobado por cálculo**: química general universal; no se cita una fuente que no se haya leído.
- **Lección o ficha de la app**: dato que ya está en el repositorio y se verificó antes.
- **Valor de ejemplo declarado**: número inventado para la cuenta; el texto lo dice.

Documentos leídos:

- **ICH Q7**, «Good Manufacturing Practice Guide for Active Pharmaceutical Ingredients»: https://database.ich.org/sites/default/files/Q7%20Guideline.pdf (apartados 6.41, 6.52, 8.12, 8.14, 8.15 y glosario «Yield, Expected» y «Yield, Theoretical»). Copia en `src_esteq/dl/q7.txt`.
- Lecciones del repo, leídas enteras para no repetirlas: `ecuaciones-y-estequiometria`, `reactivo-limitante` y `rendimiento-y-balance` (src/content/nivel2.ts) y `mol-a-fondo` (src/content/nivel1-mol.ts). Fichas de src/content/fds.ts (densidades de la sosa al 50 % y del ácido clorhídrico al 35 %).

| Dato o afirmación | Fuente | Comprobación |
|---|---|---|
| Los coeficientes de una ecuación ajustada indican la proporción en moles, no en masa | Libro de texto; también en `ecuaciones-y-estequiometria` | Libro de texto |
| En una reacción se conservan los átomos y la masa total | Libro de texto; también en `ecuaciones-y-estequiometria` | Libro de texto, comprobado por cálculo (masas de reactivos = productos en las diez ecuaciones) |
| Método de ajuste por tanteo: no tocar fórmulas, empezar por el elemento en menos sustancias, H y O al final | Libro de texto | Libro de texto |
| CH₄ + 2 O₂ da CO₂ + 2 H₂O; 16 kg metano gastan 64 kg O₂; 80 kg = 80 kg | Libro de texto | Recalculado (ajuste y masas) |
| H₂SO₄ + 2 NaOH da Na₂SO₄ + 2 H₂O; el ácido sulfúrico cede dos hidrógenos | Libro de texto; también en `acidos-bases-a-fondo` | Recalculado (ajuste) |
| Al₂(SO₄)₃ + 6 NaOH da 2 Al(OH)₃ + 3 Na₂SO₄; recuento Al 2, S 3, Na 6, H 6, O 18 | Libro de texto | Recalculado (ajuste átomo por átomo) |
| El sulfato de aluminio se usa para depurar agua | Libro de texto (coagulante clásico); la fórmula Al₂(SO₄)₃ ya aparece en `atomos-a-fondo` | Libro de texto; no leído en una fuente en esta sesión |
| C₇H₈ + 9 O₂ da 7 CO₂ + 4 H₂O | Libro de texto | Recalculado (ajuste) |
| C₃H₆O + 4 O₂ da 3 CO₂ + 3 H₂O (quiz) | Libro de texto | Recalculado (ajuste) |
| C₄H₈O₂ + NaOH da C₂H₃NaO₂ + C₂H₅OH (saponificación del acetato de etilo) | Libro de texto | Recalculado (ajuste y masas 88 + 40 = 82 + 46) |
| NaHCO₃ + HCl da NaCl + H₂O + CO₂; Na₂CO₃ + 2 HCl da 2 NaCl + H₂O + CO₂ | Libro de texto | Recalculado (ajuste) |
| C₆H₇N + C₂H₃ClO da C₈H₉NO + HCl (anilina con cloruro de acetilo da acetanilida) | Libro de texto | Recalculado (ajuste y masas 93 + 78,5 = 135 + 36,5) |
| C₄H₆O₃ + H₂O da 2 C₂H₄O₂ (hidrólisis del anhídrido acético) | Libro de texto | Recalculado (ajuste) |
| Masas atómicas redondeadas H 1, C 12, N 14, O 16, Na 23, S 32, Cl 35,5 | Valores estándar de la IUPAC, no leídos en esta sesión; mismos redondeos que `mol-a-fondo` | Valores de clase (brief) |
| Masas molares: CH₄ 16; O₂ 32; CO₂ 44; H₂O 18; H₂SO₄ 98; NaOH 40; Na₂SO₄ 142; C₇H₈ 92; acetato de etilo 88; acetato de sodio 82; etanol 46; NaHCO₃ 84; HCl 36,5; NaCl 58,5; Na₂CO₃ 106; anilina 93; cloruro de acetilo 78,5; acetanilida 135; anhídrido acético 102; ácido acético 60; acetona 58 | Cálculo con las masas redondeadas | Recalculado (también con valores estándar: diferencias menores del 0,2 %) |
| Volumen molar de unos 24,1 L a 20 °C y 1 atm; P · V = n · R · T con R = 8,314, T = 293,15 K, P = 101325 Pa | Lección `mol-a-fondo` (allí verificado con el RD 2032/2009) | Lección de la app; recalculado |
| Camino 1: 176 / 88 = 2,000 kmol; 80,0 kg NaOH. Camino 2: 164 kg acetato de sodio y 92 kg etanol; 256 = 256 | Cálculo | Recalculado |
| Camino 3: 42 / 84 = 0,500 kmol; 22,0 kg CO₂; 500 × 8,314 × 293,15 / 101325 = 12,0 m³ | Cálculo | Recalculado (12,03 m³) |
| Añadir bicarbonato o carbonato poco a poco y con venteo libre porque el gas sube la presión | Coherente con `mol-a-fondo` (gas 2) y `reacciones-en-api` (venteo libre y adición lenta) | Lección de la app |
| Camino 4: 186 / 93 = 2,000 kmol; 73,0 kg HCl; 80,0 kg NaOH | Cálculo | Recalculado |
| Definición de equivalente como moles de reactivo por mol del reactivo de referencia; «1,1 eq» ya usado en `ecuaciones-y-estequiometria` y `reactivo-limitante` | Uso habitual en síntesis; lecciones de la app | Libro de texto / lección de la app |
| ZN-1 (M = 250), ZN-2 (M = 292), ZN-3 (M = 350), proceso ZN, equipos R-305, D-330, C-310, S-320 | Ficticios | Valor de ejemplo declarado (250 + 102 = 292 + 60 cuadra) |
| Sosa al 50 %: densidad 1,52 kg/L (20 °C) | src/content/fds.ts, sección 9 de la ficha de la sosa | Ficha de la app |
| Ácido clorhídrico al 35 %: densidad 1,17 kg/L | src/content/fds.ts, sección 9 | Ficha de la app |
| Ácido clorhídrico 2 mol/L | Disolución preparada | Valor de ejemplo declarado |
| Equivalentes 1: 2,200 kmol; 224,4 kg | Cálculo | Recalculado |
| Equivalentes 2: 2,400 kmol; 96,0 kg; 192,0 kg; 126,3 L | Cálculo | Recalculado |
| Equivalentes 3: 1000 mol; 500 L | Cálculo | Recalculado |
| Equivalentes 4: 2,200 kmol; 80,3 kg; 229,4 kg; 196,1 L | Cálculo | Recalculado |
| Riqueza 98,0 % del anhídrido y 97,5 % del ZN-1 | Valores de ejemplo | Valor de ejemplo declarado |
| Riqueza 1: 224,4 / 0,980 = 229,0 kg | Cálculo | Recalculado (228,98) |
| Riqueza 2: 487,5 kg; 1,950 kmol; 2,145 kmol; 218,8 kg; 223,3 kg; sin corregir 1,13 eq | Cálculo | Recalculado |
| El agua de un material se mide por ejemplo por Karl Fischer | Ya en varias lecciones de la app (nivel12-secado, nivel5, nivel7) | Lección de la app |
| Agua 0,5 % de 500 kg = 2,5 kg = 0,139 kmol; gastan 14,2 kg de anhídrido | Cálculo; 0,5 % es valor de ejemplo | Recalculado |
| Caso 1: 202,0 kg; 0,99 eq; al menos un 1 % de ZN-1 sin reaccionar | Cálculo | Recalculado |
| Caso 2: 2,20 eq; exceso del 120 % frente al 10 % | Cálculo | Recalculado |
| El operador no corrige por su cuenta, avisa y se abre desviación | Coherente con `reactivo-limitante` y ICH Q7 8.15 («Any deviation should be documented and explained») | Leído en el documento |
| Rendimiento teórico: cantidad que se produciría a partir del material usado «in the absence of any loss or error» | ICH Q7, glosario «Yield, Theoretical» | Leído en el documento |
| 1,950 × 292 = 569,4 kg; sin corregir 584 kg; 512 / 569,4 = 89,9 % | Cálculo | Recalculado |
| Rendimientos de varias etapas se multiplican: 0,90 × 0,90 = 0,81; 0,90 × 0,85 = 0,765 | Libro de texto | Recalculado |
| Varias etapas 2: 1,800 kmol; 525,6 kg; 1,530 kmol; 535,5 kg; 76,5 %; 700 kg sin pérdidas | Cálculo | Recalculado |
| Instrucciones maestras con la cantidad o proporción de cada material con su unidad y, si no es fija, el cálculo para cada tamaño de lote | ICH Q7, 6.41 | Leído en el documento |
| Pesadas y medidas críticas presenciadas por otra persona o con control equivalente | ICH Q7, 8.12 | Leído en el documento |
| Firmas de quien hace y quien supervisa o comprueba cada paso crítico; pesos, medidas y lotes de materias primas; rendimiento real | ICH Q7, 6.52 | Leído en el documento |
| Comparar el rendimiento real con el esperado en etapas fijadas | ICH Q7, 8.14 | Leído en el documento |
| Tolerancia de carga ± 0,5 % | Valor de ejemplo | Valor de ejemplo declarado |
| 229,0 ± 0,5 % = 227,9 a 230,1 kg; 230,4 kg es + 0,6 % | Cálculo | Recalculado |
| Planta: 223,3 ± 0,5 % = 222,2 a 224,4 kg; 508,6 / 569,4 = 89,3 %; rango 85–92 % | Cálculo; rango y pesos reales son valores de ejemplo | Recalculado |
| Errores: 98 kg ácido sulfúrico necesitan 80 kg NaOH, no 196 kg (2,45 veces); 224,4 kg al 98 % dejan 1,08 eq; 196,1 kg en vez de 196,1 L es un 14,5 % menos | Cálculo | Recalculado |
| Quiz: 4 mol O₂; 40 kg; 22 kg; 36,1 m³ (36,08); 138 kg; 78,9 L; 156,25 kg; 76,9 % (76,91) | Cálculo | Recalculado |

## Lo que se quiso incluir y se dejó fuera

- Densidad de la sosa al 30 % en peso: no está en las fichas de la app ni se leyó en una fuente accesible; se usó la sosa al 50 % de src/content/fds.ts.
- Densidad del ácido clorhídrico 2 mol/L: no verificada; el ejemplo se resuelve en volumen y el texto dice que, si se pesa, la densidad la da la hoja.
- Densidad y riqueza comerciales del anhídrido acético, el cloruro de acetilo, la anilina y el acetato de etilo: no leídas en ninguna fuente accesible; no se dan, y las riquezas usadas son valores de ejemplo.
- Tolerancias de carga habituales en la industria: no hay una cifra en fuente gratuita leída; se dejó ± 0,5 % como valor de ejemplo.
- Cómo se combinan exactamente riqueza «tal cual» y «en base anhidra» con el contenido en agua: depende del certificado y del proceso; se dejó solo como idea y se remite a la hoja.
- Peligrosidad de la anilina y del cloruro de acetilo: no se verificó en una ficha accesible; la reacción se presenta solo como «ejemplo clásico de clase» para practicar la cuenta.
