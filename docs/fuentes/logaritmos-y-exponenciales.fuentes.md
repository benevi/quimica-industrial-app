# Fuentes y cálculos: `logaritmos-y-exponenciales`

Lección de matemáticas: no cita normas. Cada cifra se recalculó con Python 3 (`math`) el 23/11/2026. Donde un dato viene de otra lección de la app se indica la lección y el archivo, para que los números cuadren.

| Cifra en la lección | Cálculo (Python) | Resultado | Origen / coherencia |
|---|---|---|---|
| 10^0,5 = √10 = 3,162 | `10**0.5` | 3,1623 | Cálculo propio |
| 10^−4,76 = 1,74 × 10⁻⁵ | `10**-4.76` | 1,7378e-5 | Ka del acético con pKa 4,76 en `acidos-bases-a-fondo` (src/content/nivel1-acidos.ts, l. 111) |
| α = √(0,333 / 4,333) = 0,277 | `sqrt(0.333/4.333)`; 0,333/4,333 = 0,07685 | 0,2772 | Ejercicio 8 de `gases-a-fondo` (src/content/nivel1-gases.ts, l. 145-149) |
| √(1,74 × 10⁻⁶) = 1,32 × 10⁻³ | `sqrt(1.74e-5*0.1)` | 1,3191e-3 | [H⁺] del acético 0,1 mol/L en `acidos-bases-a-fondo` (l. 117) |
| log 0,005 = −2,30 | `log10(0.005)` | −2,3010 | Mismo valor que `acidos-bases-a-fondo` (l. 81) |
| log 150 = 2,1761 | `log10(150)` | 2,17609 | `destilacion-a-fondo` (src/content/nivel12-destilacion.ts, l. 41) |
| log 2,5 = 0,398; pH de 2,5 × 10⁻³ = 2,60 | `log10(2.5)`, `-log10(2.5e-3)` | 0,39794; 2,6021 | Propuesta N2 del informe (test) |
| Henderson: log(0,09/0,11) = −0,087; pH 4,67; log 0,09 = −1,046; log 0,11 = −0,959 | `log10(0.09/0.11)`, `4.76+…`, `log10(0.09)`, `log10(0.11)` | −0,08715; 4,6728; −1,0458; −0,9586 | `acidos-bases-a-fondo` (l. 155): 4,67 |
| pH 5 a 3: factor 100 | `1e-3/1e-5` | 100 | Cálculo propio |
| Antoine tolueno A 6,95464, B 1344,8, C 219,482 (mmHg, °C) | — | — | `destilacion-a-fondo` (l. 31-33) y docs/simulador-reactor.md (l. 62) |
| 70 °C: 289,482; 4,6455; log P 2,3091; P 203,8 mmHg = 271,6 mbar | `1344.8/289.482`, `6.95464-…`, `10**…`, `×1.33322` | 4,64554; 2,30910; 203,751; 271,646 | Cuadra con los 0,2716 bar del NIST en `diagramas-de-fases-a-fondo` (src/content/nivel1-fases.ts, l. 93-94) |
| 200 mbar = 150,0 mmHg; 4,7785; 281,4; 61,9 °C | `20000/133.322`; `6.95464-log10(P)`; `1344.8/…`; `−219.482` | 150,013; 4,77851; 281,427; 61,945 | `destilacion-a-fondo` (l. 40-44): 61,9 °C |
| 760 mmHg: 110,6 °C | `1344.8/(6.95464-log10(760))-219.482` | 110,625 | `destilacion-a-fondo` (l. 46) |
| Quiz: Antoine a 50 °C: 4,9903; 1,9643; 92,1 mmHg | `1344.8/269.482`, `6.95464-…`, `10**…` | 4,99031; 1,96433; 92,114 | Cálculo propio con las mismas constantes |
| (1+1/n)ⁿ: 2; 2,25; 2,613; 2,7146 | `(1+1/n)**n` para n = 1, 2, 12, 365 | 2; 2,25; 2,61304; 2,71457 | Cálculo propio |
| e = 2,71828; e¹ = 2,72 | `math.e` | 2,718282 | Constante matemática |
| ln 10 = 2,303; ln 2 = 0,693; ln 1000 = 6,908 | `log(10)`, `log(2)`, `log(1000)` | 2,302585; 0,693147; 6,907755 | 2,303 en `termodinamica-a-fondo`; 0,693 en `ley-de-velocidad-a-fondo` (src/content/nivel2-velocidad.ts, l. 81) |
| −ln 0,001 = 6,91 (error ln por log) | `-log(0.001)` | 6,9078 | Cálculo propio |
| k = 0,1 min⁻¹ a 70 °C; Ea 90 kJ/mol | — | — | docs/simulador-reactor.md (l. 19, 66); `ley-de-velocidad-a-fondo` (l. 73) |
| t½ = 0,693 / 0,1 = 6,93 min | `log(2)/0.1` | 6,9315 | docs/simulador-reactor.md («unos 7 min»); `ley-de-velocidad-a-fondo` (l. 92): 6,93 min |
| e^(−2) = 0,135, 13,5 % | `exp(-2)` | 0,13534 | Cálculo propio |
| De 2 % a 0,5 %: ln 4 / 0,1 = 13,9 min; 2 × 6,93 = 13,9 | `log(4)/0.1` | 13,863 | `ley-de-velocidad-a-fondo` (l. 92): 13,9 min |
| Arrhenius 70 a 60 °C: Ea/R 10 825 K; 1/333,15 = 0,0030017; 1/343,15 = 0,0029142; resta 0,0000875; 0,947; e^(−0,947) = 0,388; k = 0,0388 min⁻¹; t½ = 17,9 min; factor 2,6 | `90000/8.314`, `1/333.15-1/343.15`, `exp(-…)`, `log(2)/k`, `1/0.388` | 10825,1; 8,7473e-5; 0,94691; 0,38794; 0,038794; 17,867; 2,58 | `ley-de-velocidad-a-fondo` (l. 92): 0,0388 min⁻¹ y 17,9 min. R = 8,314 J/(mol·K) y K = °C + 273,15 como en `cinetica-a-fondo` (src/content/nivel2-cinetica.ts, l. 76) |
| Inertización 21 × 0,2ⁿ: n = log(2/21)/log 0,2 = −1,021/−0,699 = 1,46; 2 ciclos; 0,84 % | `log10(2/21)`, `log10(0.2)`, cociente, `21*0.2**2` | −1,02119; −0,69897; 1,461; 0,84 | `inertizacion-a-fondo` (src/content/nivel12-inertizacion.ts, l. 79-85, 115): 2 ciclos, 0,84 % |
| Vacío a 500 mbar: −1,021/−0,301 = 3,39; 4 ciclos; 1,31 % | `log10(2/21)/log10(0.5)`, `21*0.5**4` | 3,392; 1,3125 | `inertizacion-a-fondo` (l. 88-95, 116): 4 ciclos, 1,31 % |
| Quiz: vacío a 400 mbar: log 0,4 = −0,398; n = 2,57; 3 ciclos; 1,34 % | `log10(0.4)`, cociente, `21*0.4**3` | −0,39794; 2,566; 1,344 | Cálculo propio con la fórmula de `inertizacion-a-fondo` (l. 74) |
| Barrido: e⁻¹ = 0,37; ln(21/2) = 2,4 volúmenes | `exp(-1)`, `log(21/2)` | 0,36788; 2,3514 | `inertizacion-a-fondo` (l. 138): 0,37 y unos 2,4 volúmenes |
| Plant: 3 ciclos a 150 mbar abs: 3,15 %, 0,47 %, 0,07 % | `21*0.15**n` | 3,15; 0,4725; 0,0709 | `inertizacion-a-fondo` (l. 186-188) |
| 1 mmHg = 133,322 Pa = 1,33322 mbar | — | — | Valor usado en `destilacion-a-fondo` (l. 40) |

Lecciones a las que se remite como posteriores (todas tienen nivel/orden mayor que 1/10.9 tras los cambios del informe; `diagramas-de-fases-a-fondo` pasa a 2/11.3): «Ácidos, bases y pH» (1/11), «Ácidos, bases y pH a fondo…» (1/12), «Los gases a fondo…» (2), «Diagramas de fases a fondo…» (2/11.3), «Velocidad de reacción a fondo…» (2/9), «Ley de velocidad y catalizadores a fondo» (2/9.5), «Destilación a fondo…» (12), «Inertización a fondo…» (12/4). Se remite como ya vista solo a «Las cuentas de planta a fondo…» (0).

Nota: la regex de `scripts/check-quiz.mjs` (`answer: ([\d.]+)`) no admite respuestas negativas, por eso log 0,005 = −2,30 va como pregunta de opción.
