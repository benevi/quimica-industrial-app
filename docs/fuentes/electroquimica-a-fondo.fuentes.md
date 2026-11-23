# Fuentes de `electroquimica-a-fondo`

Fecha de consulta: 23/11/2026. Descargas con `curl -sL -A "Mozilla/5.0"` y `pdftotext -layout`, guardadas en `scratchpad/lecciones/tmp-electro/dl/` (BOE, DOUE, Kuphaldt) y `tmp-electro/nist/` (NIST). Cálculos en `tmp-electro/calc.py` y ajustes de ecuaciones (átomos y cargas) en `tmp-electro/bal.py`, ambos en Python 3.

Fuentes leídas:

- **RD 2032/2009** de unidades legales, texto consolidado con la redacción del RD 493/2020: https://www.boe.es/buscar/act.php?id=BOE-A-2010-927
- **Decisión de Ejecución 2013/732/UE** (conclusiones MTD del cloro-álcali), DOUE L 332 de 11/12/2013, copia del BOE: https://www.boe.es/doue/2013/332/L00034-00048.pdf
- **RD 1523/1999** (modifica la ITC MI-IP03 «Instalaciones petrolíferas para uso propio» y la MI-IP04), BOE 22/10/1999: https://www.boe.es/boe/dias/1999/10/22/pdfs/A37164-37213.pdf
- **Orden de 1976, métodos oficiales de análisis de suelos y aguas**, BOE 31/03/1976: https://www.boe.es/boe/dias/1976/03/31/pdfs/A06458-06491.pdf
- **Kuphaldt, *Lessons in Industrial Instrumentation***: «pH measurement» (https://control.com/textbook/continuous-analytical-measurement/ph-measurement/), «Safety gas analyzers» (https://control.com/textbook/continuous-analytical-measurement/safety-gas-analyzers/), «Energy in chemical reactions» (https://control.com/textbook/chemistry/energy-in-chemical-reactions/), «Conductivity measurement» (https://control.com/textbook/continuous-analytical-measurement/conductivity-measurement/).
- **NIST Chemistry WebBook** (`https://webbook.nist.gov/cgi/cbook.cgi?ID=<CAS>&Units=SI&Mask=1` y `Mask=2`): agua C7732185, hidrógeno C1333740, oxígeno C7782447, cloro C7782505, hidróxido de sodio C1310732, níquel C7440020.
- Lecciones de la app leídas enteras para no repetir: `redox-a-fondo`, `potenciometria-a-fondo`, `karl-fischer-a-fondo`, `materiales-y-corrosion-a-fondo`, `termodinamica-a-fondo`; y la parte de permanganimetría de `volumetrias-especiales-a-fondo`.

## Tabla de afirmaciones

| Dato o afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| Culombio = A·s; voltio = W/A, unidad de «diferencia de potencial eléctrico, fuerza electromotriz» | RD 2032/2009 consolidado, tabla de unidades derivadas con nombre especial | Leído |
| Amperio = flujo de 6,241509074 × 10¹⁸ cargas elementales por segundo (ya no está en el cuerpo tras recortar, pero se leyó) | RD 2032/2009, apartado 2.4 | Leído |
| e = 1,602176634 × 10⁻¹⁹ C exacto; N_A = 6,02214076 × 10²³ mol⁻¹ exacto | RD 2032/2009, apartados 2.4 y 2.6 (redacción RD 493/2020) | Leído |
| Julio = culombio × voltio | Deducido de V = W/A y W = J/s, C = A·s del RD 2032/2009 | Cálculo de unidades |
| F = e × N_A = 96485,33 C/mol | Cálculo con los valores del RD | Recalculado: 96485,33212 |
| R = 8,31446 J/(mol·K) (usado en Nernst y en K) | N_A × k del RD 2032/2009 (k = 1,380649 × 10⁻²³ J/K, apartado 2.5) | Recalculado |
| Método del ion-electrón: pasos en medio ácido y en básico (sumar OH⁻ a ambos lados) | Método de libro de texto; no leído en una fuente gratuita accesible (LibreTexts, OpenStax y universidades bloqueados) | Cada ecuación resultante comprobada en `bal.py` (átomos y cargas) |
| Cr₂O₇²⁻ + 14 H⁺ + 6 e⁻ da 2 Cr³⁺ + 7 H₂O; Cr₂O₇²⁻ + 6 Fe²⁺ + 14 H⁺ da 2 Cr³⁺ + 6 Fe³⁺ + 7 H₂O (carga +24 a cada lado) | Cálculo | Comprobado en `bal.py` |
| MnO₄⁻ + 8 H⁺ + 5 e⁻ da Mn²⁺ + 4 H₂O; ecuación con Fe²⁺ igual a la de `volumetrias-especiales-a-fondo` | Lección de la app + cálculo | Comprobado en `bal.py` |
| MnO₄⁻ + 2 H₂O + 3 e⁻ da MnO₂ + 4 OH⁻; SO₃²⁻ + 2 OH⁻ da SO₄²⁻ + H₂O + 2 e⁻; global 2 MnO₄⁻ + 3 SO₃²⁻ + H₂O da 2 MnO₂ + 3 SO₄²⁻ + 2 OH⁻ (carga −8) | Cálculo | Comprobado en `bal.py` |
| El permanganato da Mn²⁺ en ácido y MnO₂ (sólido pardo) en básico | `volumetrias-especiales-a-fondo` (con poco ácido queda MnO₂, sólido marrón); química de libro de texto | Leído en la lección de la app; color pardo no verificado en fuente externa |
| Definiciones de electrodo, ánodo (oxidación; positivo en celdas electrolíticas), cátodo (reducción; negativo en celdas electrolíticas), «la polaridad puede ser positiva o negativa», electrólisis, salmuera, sobretensión | Decisión 2013/732/UE, glosario | Leído |
| En una pila (celda galvánica) el ánodo es el negativo | Libro de texto; coherente con el glosario («la polaridad puede ser positiva o negativa») | No leído explícitamente en fuente gratuita |
| Puente salino: método oficial de 1976 mide el pH «utilizando como referencia un electrodo de calomelanos con puente salino» y pide buen «contacto eléctrico a través del capilar del puente salino» | Orden de 1976, BOE 31/03/1976, apartado de pH de suelos | Leído |
| Función del puente salino (camino de iones que evita la acumulación de carga) | Libro de texto; relación con el diafragma del electrodo de referencia leída en Kuphaldt («porous reference junction») y en `potenciometria-a-fondo` | Parcialmente leído |
| Mayoría de detectores portátiles de gases con celdas electroquímicas que generan una pequeña corriente | Kuphaldt, «Safety gas analyzers» («Most portable gas analyzers … employ electrochemical sensing cells generating a small electric current») | Leído |
| Electrodo estándar de hidrógeno = 0 V por convenio (H⁺ actividad 1, H₂ a 1 bar) | Convenio de libro de texto. Gold Book IUPAC devolvió 403 (Cloudflare) con curl y no resolvió con WebFetch | **No leído en fuente gratuita**; se declara como convenio |
| fem = E°(cátodo) − E°(ánodo); serie electroquímica | Libro de texto; fragmentos de buscador (apuntes de la Universidad de Alcalá y de Cantabria: «los potenciales más negativos corresponden a especies más reductoras») | **Fragmento de buscador**; ninguna cifra tomada de ahí |
| Pares A⁺/A (+0,40 V) y M²⁺/M (−0,50 V) | Valor de ejemplo declarado | — |
| ΔG = −n·F·E | Energía = carga × voltaje (unidades del RD 2032/2009) con la relación de libro de texto entre trabajo eléctrico y ΔG | Unidades comprobadas; relación no leída en fuente gratuita |
| Agua líquida ΔfH° = −285,83 kJ/mol, S° = 69,95 J/(mol·K); H₂ S° = 130,680; O₂ S° = 205,152 (CODATA) | NIST, C7732185 (Mask=2), C1333740 y C7782447 (Mask=1) | Leído. Mismos valores que `termodinamica-a-fondo` |
| ΔS° = −163,31 J/K; ΔG° = −237,14 kJ/mol; E° = 1,229 V | Cálculo | `calc.py`: −163,306; −237,1403; 1,22889 |
| ΔG° = −R·T·ln K, por tanto ln K = nFE°/(RT) | `termodinamica-a-fondo` (ΔG° = −R·T·ln K) + ΔG° = −nFE° | Lección leída; combinación por cálculo |
| K ≈ 10³⁰ con 0,90 V y n = 2; K ≈ 2400 con 0,10 V | Cálculo | `calc.py`: log K = 30,4; K = 2402,7 |
| Ecuación de Nernst general E = E° − (RT/nF) ln Q; sólidos y agua no entran en Q | Kuphaldt da la forma para una pila de concentración, V = (RT/nF) ln(C1/C2), y dice que toda medida potenciométrica se basa en Nernst. La forma general con Q y la regla de sólidos y agua son de libro de texto | Forma de concentración leída; forma general no leída en fuente gratuita, comprobada como coherente (con E° = 0 da la de Kuphaldt) |
| 0,05916 V a 25 °C = 2,302585·R·T/F; 59,16 mV/pH | Cálculo; coincide con `potenciometria-a-fondo` | `calc.py`: 0,0591593 |
| Electrodo de pH como pila de concentración | Kuphaldt, «pH measurement» («the "textbook example" of this is a device called a concentration cell») | Leído |
| E(O₂/H₂O) = 1,229 − 0,05916·pH: 0,815 V a pH 7; hidrógeno −0,414 V a pH 7 | Cálculo con Nernst | `calc.py`: 0,81488 y −0,41412 |
| Electrólisis del agua endotérmica; ΔH298 = 285,8 kJ/mol; «the use of electricity to cause a chemical reaction is called electrolysis» | Kuphaldt, «Energy in chemical reactions» | Leído |
| Tensión termoneutra 285830 / (2F) = 1,481 V; diferencia con 1,229 V = T·ΔS | Cálculo | `calc.py`: 1,48121 |
| Leyes de Faraday, m = (I·t/F)·(M/n)·rendimiento | Libro de texto; es la definición de F aplicada a la estequiometría | Fórmula no leída en fuente gratuita; coherente con la cuenta de 93,36 µg/C de `karl-fischer-a-fondo` |
| «Rendimiento de corriente» citado en las membranas de alto rendimiento | Decisión 2013/732/UE, MTD 5 a) | Leído |
| Cloro-álcali: cloro, hidrógeno, KOH y NaOH por electrólisis de salmuera; celdas de membrana y de diafragma sin amianto (ánodo y cátodo separados); celda de mercurio nunca MTD; diafragma de amianto no MTD | Decisión 2013/732/UE, ámbito y MTD 1 | Leído |
| Aprovechar el hidrógeno coproducido como reactivo o combustible (incluye reducción de compuestos orgánicos) | Decisión 2013/732/UE, MTD 6 | Leído |
| Semirreacciones 2 Cl⁻ da Cl₂ + 2 e⁻; 2 H₂O + 2 e⁻ da H₂ + 2 OH⁻; global 2 NaCl + 2 H₂O da Cl₂ + H₂ + 2 NaOH | Química de libro de texto; productos coherentes con la Decisión 2013/732/UE | Ajuste comprobado en `bal.py` |
| Membrana: cloro por el lado del ánodo, hidrógeno y sosa por el del cátodo | Deducido de las semirreacciones y de «ánodo y cátodo separados por una membrana» (Decisión 2013/732/UE) | Parcialmente leído |
| Masas molares: Cl₂ 70,906; NaOH 39,9971; H₂ 2,01588; Ni 58,6934; H₂O 18,0153 g/mol | NIST (cabecera «Molecular weight» de cada página) | Leído |
| Cuba: 10000 A, 24 h, 95 %, 3,0 V | Valores de ejemplo declarados | — |
| 8,64 × 10⁸ C; 8955 mol e⁻; 4253 mol y 301,6 kg Cl₂; 340,3 kg NaOH; 8,6 kg H₂; 720 kWh; 2387 kWh/t Cl₂; 317,5 kg al 100 % | Cálculo | `calc.py`: 8954,73; 4253,50; 301,598; 340,255; 8,575; 720; 2387,3; 317,47 |
| Niquelado 50 A, 2 h, 90 % | Valores de ejemplo declarados | — |
| 98,5 g de níquel; quiz: 20 A, 1 h, 100 %: 21,9 g | Cálculo | `calc.py`: 98,547; 21,899 |
| KF culombimétrico: 2 I⁻ da I₂ + 2 e⁻; 93,36 µg de agua por culombio | `karl-fischer-a-fondo` (leída) | Recalculado: 18,0153 / (2 × 96485,33) × 10⁶ = 93,358 µg/C |
| La generación de yodo es oxidación, luego ocurre en el ánodo | Definición de ánodo de la Decisión 2013/732/UE | Leído (definición) |
| 1 mg de agua: 10,71 C; 107 s a 100 mA; 10 mg, unos 1071 s (casi 18 min) | Cálculo | `calc.py`: 10,7115 C; 107,1 s |
| Corrosión del hierro como pila: Fe da Fe²⁺ + 2 e⁻; O₂ + 2 H₂O + 4 e⁻ da 4 OH⁻ | `redox-a-fondo` (el hierro pasa a +2 y el oxígeno disuelto gana electrones); semirreacción del oxígeno en básico ajustada | Lección leída; ajuste en `bal.py` |
| Par galvánico: el metal menos noble se come; ejemplo de tornillos y bridas | `materiales-y-corrosion-a-fondo` (tabla de tipos de corrosión) | Leído |
| Tubos de acero enterrados no se unen a una tierra con metales «galvánicamente desfavorables para el acero, como el cobre»; tierra local de zinc y aislamiento del cobre; cable galvanizado o de cobre recubierto y picas de zinc | RD 1523/1999, ITC MI-IP03, apartado 9.2 «Puesta a tierra» | Leído. No se comprobó si la MI-IP03 ha tenido modificaciones posteriores a 1999; el cuerpo dice «en la redacción del Real Decreto 1523/1999» |
| Protección catódica por corriente impresa: comprobar el funcionamiento de los aparatos cada tres meses (instalaciones enterradas) | RD 1523/1999, ITC MI-IP03, apartado 38.2 a) | Leído |
| Ánodo de sacrificio: un metal más fácil de oxidar que el acero se gasta en su lugar | Principio de libro de texto (se deduce de la definición de ánodo). Fragmentos de buscador (tesis de la UNAM) citan magnesio, zinc y aluminio como ánodos de sacrificio | **Fragmento de buscador** para los metales concretos; no se nombran en el cuerpo salvo el zinc de la MI-IP03 |
| Plant: reactor R-318, filtro FP-322, disolvente DR-07, pH 9,2 y 10,4, intervalo 10 a 11, alarma de rectificador | Ficticios, declarados en el texto | — |

## Lo que se quiso incluir y se dejó fuera por no poder verificarlo

- **Tabla de potenciales estándar** (Li, Na, Mg, Al, Zn, Fe, Ni, Pb, Cu, Ag, Cl₂, F₂, MnO₄⁻, Cr₂O₇²⁻…): ninguna fuente gratuita accesible desde la sesión. LibreTexts, OpenStax, Wikipedia, Gold Book IUPAC, apuntes universitarios (uah.es, uv.es, unican.es, uva.es), NIST fuera del WebBook (nist.gov, nvlpubs) y JRC no resuelven o devuelven 403. El NIST WebBook no da datos de iones en disolución, así que no se pudieron calcular. Solo se dan el cero del hidrógeno (convenio) y el +1,229 V del oxígeno (calculado). La pila Daniell (Zn/Cu) y sus 1,10 V se dejaron fuera por la misma razón.
- **Potenciales de los electrodos de referencia** (calomelanos saturado, Ag/AgCl) frente al de hidrógeno: no leídos en fuente gratuita (solo fragmentos de buscador sin cifra).
- **Criterio de −0,85 V frente a Cu/CuSO₄** para protección catódica: no se encontró en el BOE ni en otra fuente accesible.
- **Potenciales de ánodos de magnesio y zinc** y la «serie galvánica» en agua de mar: solo fragmentos de buscador.
- **Consumo de energía típico de una planta de cloro-álcali** (el resumen del BREF de MITECO, visto solo en fragmento, habla de menos de 3000 kWh/t): no usado; en el ejemplo la cifra sale de valores de ejemplo.
- **Porcentaje del cloro mundial fabricado por electrólisis** (un perfil de la EPA, solo fragmento): no usado.
- **Tensión mínima de la electrólisis de salmuera**: necesitaría datos de iones en disolución que no están en el NIST WebBook.
- **Espesor de un recubrimiento** (pediría la densidad del níquel, no leída en fuente gratuita): el ejemplo se queda en masa.
- **Reacciones secundarias concretas** de un baño de níquel (desprendimiento de hidrógeno en el cátodo) y lo que pasaría si se mezclaran cloro, hidrógeno y sosa en la cuba: química de libro de texto no verificada; se quitó.
- **Reacción del cátodo del KF culombimétrico**: no leída; solo se trata el ánodo generador.
- **Pasivación anódica y voltamperometría, valoraciones amperométricas y electrodos selectivos de iones** (hueco de LACC 0067): fuera del alcance de esta lección y sin fuente leída.

## Ideas para la capa visual

1. **Esquema de una pila con puente salino**, con el ánodo a la izquierda (oxidación, negativo), el cátodo a la derecha (reducción, positivo), el sentido de los electrones por el cable y de los iones por el puente; al lado, la misma figura como cuba de electrólisis con los signos cambiados y la fuente de corriente.
2. **Animación paso a paso del método del ion-electrón** (dicromato con hierro en ácido y permanganato con sulfito en básico), mostrando en cada paso cómo se añaden H₂O, H⁺, OH⁻ y electrones, con el contador de átomos y de carga a cada lado.
3. **Gráfica interactiva de Nernst**: potencial del oxígeno y del hidrógeno frente al pH (dos rectas paralelas de pendiente −59,16 mV/pH separadas 1,229 V), con un deslizador de temperatura que cambie la pendiente, enlazada con la tabla de pendientes de «pH y conductividad a fondo».
4. **Calculadora de cuba de Faraday**: corriente, tiempo y rendimiento de corriente como entradas; kilos de cloro, sosa e hidrógeno y kWh por tonelada como salidas, con un esquema de la celda de membrana (cloro en el lado del ánodo; hidrógeno y sosa en el del cátodo).
