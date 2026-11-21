# Fuentes de «Equilibrio químico a fondo» (`equilibrio-a-fondo`)

Documentos leídos en esta sesión:

- **Real Decreto 2032/2009, de 30 de diciembre, de unidades legales de medida**, versión consolidada en el BOE: https://www.boe.es/buscar/act.php?id=BOE-A-2010-927 (definición del mol: «Un mol contiene exactamente 6,022 140 76 × 10²³ entidades elementales»; tabla de unidades derivadas: concentración de cantidad de sustancia en mol/m³). Descargado y buscado con python en `src_equil/rd2032.html`.
- Lecciones del repo leídas enteras para no repetirlas y para remitir por su título: `equilibrio-quimico` y `velocidad-y-catalisis` (src/content/nivel2.ts), `acidos-bases-a-fondo` (src/content/nivel1-acidos.ts), `disoluciones-a-fondo` (src/content/nivel1-disoluciones.ts), `extraccion-liquido-liquido` y `destilacion` (src/content/nivel12-separacion.ts), el apartado de presión de vapor de `materia-a-fondo` (src/content/nivel1-materia.ts) y `Polimorfismo, sales y solvatos` (src/content/nivel3.ts). También el modelo de formato `nivel12-inertizacion.ts` y `types.ts`.
- Todos los cálculos están en `src_equil/calc.py` (python 3, con bisección propia porque no hay scipy).

| Dato, fórmula o afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| Reacciones reversibles; equilibrio dinámico: las dos reacciones siguen a la misma velocidad y las cantidades dejan de cambiar | Conocimiento de libro de texto; coincide con `equilibrio-quimico` (nivel2.ts) | Leído en el repo; no leído en fuente externa |
| Esterificación ácido acético + etanol ⇌ acetato de etilo + agua, reversible | Conocimiento de libro de texto; coincide con `equilibrio-quimico` | Leído en el repo |
| Se llega al mismo equilibrio desde 1 mol éster + 1 mol agua que desde 1 mol ácido + 1 mol etanol | Cálculo | (1 − y)²/y² = 4 da y = 1/3: quedan 2/3 de éster en los dos casos |
| Analogía de las dos piscinas y los cubos | Analogía didáctica pedida en el encargo | No es un dato |
| Expresión de K = [C][D]/([A][B]); coeficientes como exponentes | Conocimiento de libro de texto | No leído en esta sesión |
| Mol = 6,02214076 × 10²³ entidades elementales | RD 2032/2009 (BOE) | Leído en el documento |
| Tabla orientativa del tamaño de K (muy grande, cerca de 1 con «entre 0,1 y 10, más o menos», muy pequeña) | Conocimiento de libro de texto, presentado como orientación | No leído en esta sesión; los límites 0,1 y 10 son una regla orientativa, no un dato normativo |
| K cambia con la temperatura, no con las cantidades cargadas ni con el catalizador | Conocimiento de libro de texto | No leído en esta sesión |
| Cálculo 1: [A] 0,20, [B] 0,50, [C] 0,60, [D] 0,60 mol/L; K = 3,6 | Valores de ejemplo declarados + cálculo | Python: 0,36/0,10 = 3,6 |
| K ≈ 4 para ácido acético + etanol | Valor aproximado de libro de texto (declarado así en el texto, como pidió el encargo) | No leído en una fuente primaria en esta sesión |
| El volumen se cancela porque hay dos moléculas a cada lado | Cálculo algebraico | Comprobado a mano |
| Cálculo 2: 1:1, x = 2/3 = 0,667 mol, 66,7 % | Cálculo | Python: 0,6667 |
| Cálculo 3: 1:3, ecuación 3x² − 16x + 12 = 0; raíz de 112 = 10,583; soluciones 4,43 y 0,903; conversión 90,3 %; comprobación 0,903²/(0,097 × 2,097) = 4 | Cálculo | Python: 0,90283 y 4,4305; comprobación 4,000 |
| Tabla de conversión: 2 mol 84,5 %; 5 mol 94,5 %; 10 mol 97,4 % | Cálculo | Python: 0,8453; 0,9449; 0,9737 |
| Cociente Q y la comparación Q frente a K | Conocimiento de libro de texto | No leído en esta sesión |
| Ejemplo Q1: 1 mol de los cuatro, Q = 1, final 1,33 mol de éster | Cálculo | (1 + x)/(1 − x) = 2 da x = 1/3 |
| Ejemplo Q2: añadir 1 mol de agua, Q = 10, nuevo equilibrio con unos 0,54 mol de éster | Cálculo | Python: Q = 10,0; éster 0,5426 mol |
| Principio de Le Châtelier: exceso, retirar producto, temperatura (exotérmica: calentar baja K), presión en gases | Conocimiento de libro de texto; coincide con `equilibrio-quimico` | No leído en fuente externa |
| Calentar siempre acelera la reacción | Conocimiento de libro de texto; `velocidad-y-catalisis` | Leído en el repo (solo cualitativo) |
| Dean-Stark: el agua, más densa e inmiscible con el tolueno, queda en el fondo y el tolueno vuelve | Conocimiento de libro de texto; `equilibrio-quimico` y `extraccion-liquido-liquido` (el tolueno flota sobre el agua) | Leído en el repo |
| Tolueno y agua hierven juntos por debajo de los dos puros (azeótropo) | `destilacion` (nivel12-separacion.ts), solo se remite | Leído en el repo; no se da cifra |
| Un éster metílico con una amina da una amida y suelta metanol | Conocimiento de libro de texto | No leído en esta sesión; solo cualitativo |
| Metanol hierve a 65 °C | `materia-a-fondo` (nivel1-materia.ts), tabla con datos de las fichas de la app | Leído en el repo |
| Desprender CO₂ por el venteo saca un producto del equilibrio | Conocimiento de libro de texto | Solo cualitativo |
| Catalizador acelera ida y vuelta por igual y no mueve el equilibrio; ácido sulfúrico como catalizador de esterificación | Conocimiento de libro de texto | No leído en esta sesión |
| Ksp = [M⁺][Cl⁻] para sal 1:1; el sólido no entra en la cuenta | Conocimiento de libro de texto | No leído en esta sesión |
| Cálculo 4: Ksp 4,0 × 10⁻¹⁰ (valor de ejemplo), s = 2,0 × 10⁻⁵ mol/L; masa molar 300 g/mol (valor de ejemplo), 6 mg/L | Valores de ejemplo declarados + cálculo | Python: 2,0 × 10⁻⁵; 6,0 mg/L |
| Ion común: [Cl⁻] = 0,10 mol/L, s = 4,0 × 10⁻⁹ mol/L, 5000 veces menos | Cálculo | Python: aproximado 4,0 × 10⁻⁹; exacto (s(s + 0,1) = Ksp) 3,99999984 × 10⁻⁹; cociente 5000 |
| Exceso de HCl o cloruro al precipitar un clorhidrato; en disolventes orgánicos la cuenta es más complicada | Conocimiento de libro de texto, solo cualitativo; remite a «Polimorfismo, sales y solvatos» | Sin cifras |
| Coeficiente de reparto KD = C orgánica / C acuosa | Conocimiento de libro de texto; coincide con `extraccion-liquido-liquido` | Leído en el repo |
| Fracción que queda: f = Va/(Va + KD·Vo); tras n extracciones, fⁿ | Conocimiento de libro de texto, deducido del balance de materia | Comprobado con python |
| Cálculo 5: KD = 3, 100 L/100 L: queda 25 %, pasa 75 %, 15 kg de 20 | Valores de ejemplo declarados + cálculo | Python: 0,25; 15,0 kg |
| Cálculo 6: dos de 50 L: 0,40 cada vez, 16 % queda, 84 %, 16,8 kg; tres de 33,3 L: 0,125, 87,5 % | Cálculo | Python: 0,16 y 0,125; 16,8 kg |
| Equilibrio líquido-vapor; el vapor sale más rico en el más volátil | Conocimiento de libro de texto; `materia-a-fondo` (metanol más volátil, vapor más rico en metanol) | Leído en el repo |
| Planta: 400 mol de ácido dan 400 mol de agua, 18 g/mol, 7,2 kg ≈ 7,2 L | Valores de ejemplo + cálculo (H 1, O 16, redondeos permitidos; densidad del agua ≈ 1 kg/L) | Python: 400 × 18 = 7200 g |
| Planta: lecturas 2,6 a 7,1 L e IPC 1,4 % | Valores de ejemplo declarados | 7,1/7,2 = 98,6 % de conversión, coherente con 1,4 % de ácido residual |
| Quiz 1: K = 0,24/0,08 = 3 | Cálculo | Python: 3,0 |
| Quiz 2: 66,7 % | Cálculo | Python |
| Quiz 3: 3x² − 12x + 8 = 0, raíz de 48 = 6,928, x = 0,845 (84,5 %), otra raíz 3,15 | Cálculo | Python: 0,8453 y 3,1547 |
| Quiz 4: Ksp 1,0 × 10⁻¹⁰, s = 1,0 × 10⁻⁵ = 0,00001 mol/L | Cálculo | Python |
| Quiz 5: KD = 9, una extracción, 90 % | Cálculo | Python: 0,9 |
| Quiz 6: KD = 9, dos de 50 L, 0,182 cada vez, 3,3 % queda, 96,7 % | Cálculo | Python: 0,1818; 0,03306; 0,9669 |

## Lo que quería incluir y dejé fuera por no poder verificarlo

- Valores reales de K o de Ksp de sustancias concretas (por ejemplo, el Ksp del cloruro de plata): no los he leído en una fuente gratuita accesible desde esta sesión, así que la sal es ficticia y su Ksp es un valor de ejemplo.
- La K de la esterificación a distintas temperaturas y el calor de reacción de la esterificación: no verificados; solo se da K ≈ 4 como valor aproximado de libro de texto.
- Composición y temperatura del azeótropo tolueno-agua y la complicación de que el etanol también destila con el agua y el tolueno: no se dan cifras ni detalles; el ejemplo de planta usa un ácido ficticio y se remite a «Destilación y concentración».
- Coeficientes de reparto reales de algún producto entre agua y acetato de etilo: no verificados; se usan valores de ejemplo.
- Ecuación de van 't Hoff (cómo cambia K con la temperatura) y la síntesis del amoníaco como ejemplo de presión: fuera por longitud y por no tener una fuente leída; la presión queda solo como idea.
