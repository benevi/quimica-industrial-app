# Fuentes de la lección `agitacion-a-fondo`

Cómo leer la columna «Comprobación»:

- **Leído**: descargué el documento con curl, lo pasé a texto y leí el pasaje.
- **Fragmento de buscador**: solo vi el extracto del buscador web. Los hosts de esas páginas (csb.gov, aiche.org, hse.gov.uk, libretexts.org, Wikipedia, fabricantes, revistas, patentes) dan error de red desde esta sesión. No se usa ninguna cifra que dependa solo de un fragmento.
- **Recalculado**: cuenta comprobada con python (`tmp-agitacion/calc.py`).
- **Valor de ejemplo declarado**: número inventado para el ejemplo y dicho así en el texto.
- **Razonamiento**: se deduce del funcionamiento del equipo o de la fórmula, sin cifra externa.

Documentos leídos:

- NTP 527 del INSST, «Reacciones químicas exotérmicas (I): factores de riesgo y prevención»: https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/15-serie-ntp-numeros-506-a-540-ano-2000/ntp-527-reacciones-quimicas-exotermicas-i-factores-de-riesgo-y-prevencion (copia de texto ya descargada en la sesión: `src_termo/ntp527.body.txt`).
- NTP 528 del INSST, «Reacciones químicas exotérmicas (II): control térmico y refrigeración»: misma serie, `…/ntp-528-reacciones-quimicas-exotermicas-ii-control-termico-y-refrigeracion` (copia: `src_termo/ntp528.body.txt`).
- Real Decreto 2032/2009, unidades legales de medida, texto consolidado: https://www.boe.es/buscar/act.php?id=BOE-A-2010-927 (copia: `src_fluidos/dl/rd2032.html`).
- T. Kuphaldt, *Lessons in Industrial Instrumentation*, en control.com: https://control.com/textbook/physics/fluid-mechanics/, https://control.com/textbook/physics/classical-mechanics/, https://control.com/textbook/variable-speed-motor-controls/ac-motor-speed-control/, https://control.com/textbook/machine-vibration-measurement/vibration-physics/ (copias en `tmp-agitacion/*.txt`).
- ICH Q7: https://database.ich.org/sites/default/files/Q7%20Guideline.pdf (apartados 2.15 y 8.15, ya leídos para «El reactor a fondo»; copia en `src_alarm/q7.txt`).
- Modelo del simulador de la app: `src/sim/reactor/model.ts` y `docs/simulador-reactor.md` del repositorio.

## Tabla de afirmaciones

| Afirmación, dato o fórmula | Fuente | Comprobación |
|---|---|---|
| Cuatro trabajos del agitador: mezclar, suspender sólidos, dispersar, llevar el calor a la pared | Coincide con «El reactor a fondo» (NTP 527 y 528); dispersión de gas: fragmentos de chemicalprocessing.com | Razonamiento + fragmento de buscador |
| Para mezclar, el flujo laminar es malo y solo el turbulento garantiza una mezcla completa; en el intercambio de calor todo el fluido debe tocar la pared | Kuphaldt, «Fluid mechanics», apartado del número de Reynolds («only turbulent flow will guarantee thorough mixing… the flow must be turbulent so that molecules from all portions… come into contact with the exchanger walls») | Leído |
| Velocidad de sincronismo S = 120 × f / n; el motor de inducción gira algo menos | Kuphaldt, «AC motor speed control» | Leído |
| 120 × 50 / 4 = 1500 rpm | Cálculo | Recalculado |
| El variador de frecuencia controla la velocidad cambiando la frecuencia | Kuphaldt, «Classical mechanics» («Variable Frequency Drives… achieve precise speed control by varying the frequency») | Leído |
| En una pareja de engranajes el pequeño tiene más velocidad y menos par; el grande, más par y menos velocidad | Kuphaldt, «Classical mechanics», apartado de engranajes | Leído |
| Motor a 1450 rpm; 1450 / 90 = 16,1 | Valor de ejemplo declarado; cálculo | Recalculado |
| Cierre mecánico doble con líquido de barrera a más presión; vigilar nivel y presión | Remite a «El reactor a fondo» (allí: fragmentos de KSB y patentes USPTO) | Fragmento de buscador (heredado); en esta lección no se añade nada nuevo |
| Flujo axial y radial; palas inclinadas sobre todo axial | Thermopedia, «Agitation devices» (doi 10.1615/AtoZ.a.agitation_devices) | Fragmento de buscador |
| Turbina Rushton: disco con palas planas, flujo radial, mucho cizallamiento, elección tradicional para dispersar gas; su chorro radial no es eficiente para suspender sólidos; a veces Rushton abajo y palas inclinadas encima | chemicalprocessing.com («Efficient agitators disperse gas, keep solids suspended…»; artículo 2003/256) y Scargiali et al., IECR 2020 (iris.unipa.it) | Fragmento de buscador |
| Hélice: palas pequeñas, giro rápido, axial, líquidos poco viscosos | Apuntes de curso citados en `reactor-a-fondo.fuentes.md` | Fragmento de buscador (heredado) |
| Ancla: despacio, pegada a la pared, productos viscosos y mejor paso de calor | Catálogo De Dietrich citado en `reactor-a-fondo.fuentes.md` | Fragmento de buscador (heredado). No se dan sus rpm |
| Impulsor de retroceso: tres palas curvadas, radial, cerca del fondo, admite niveles muy distintos; piezas redondeadas en vitrificado | Fuentes citadas en `reactor-a-fondo.fuentes.md` (De Dietrich, artículo en proquest) | Fragmento de buscador (heredado) |
| Re = ρvl/η, número sin unidad con velocidad y longitud características | RD 2032/2009, apartado de magnitudes adimensionales («el número de Reynolds Re = ρvl/η») | Leído |
| Re de tubería = D·v·ρ/μ; las unidades se cancelan | Kuphaldt, «Fluid mechanics» | Leído |
| Re del agitador = ρ·N·D²/μ (velocidad característica N·D, longitud D) | Forma estándar de los textos de mezcla; vista en fragmentos (Thermopedia, tesis en core.ac.uk y techniques-ingenieur.fr). Su coherencia con Re = ρvl/η y la cancelación de unidades se comprobaron | Fragmento de buscador + cálculo de unidades |
| 870 × 1,5 × 0,81 / 0,001 = 1057050 | Densidad 870 kg/m³ del tolueno tomada de «El reactor a fondo» (0,87 kg/L, fragmento de buscador allí); viscosidad 0,001 Pa·s valor de ejemplo declarado | Recalculado |
| 1100 × 1,5 × 0,81 / 5 = 267 (267,3); «casi cuatro mil veces menor» (1057050 / 267,3 = 3955) | Valores de ejemplo declarados | Recalculado |
| La viscosidad de los líquidos sube al enfriar | «Fluidos a fondo» de la app (lección publicada) | Razonamiento (dato cualitativo ya en la app) |
| Fronteras laminar-transición-turbulento en tanque agitado: dependen del rodete; no se dan cifras | Fragmentos daban valores distintos (1, 10, 10000, 10⁵) | Fragmento de buscador: por eso no se usan |
| P = Np·ρ·N³·D⁵; Np sin unidad, depende del rodete, deflectores y régimen | Thermopedia («Power number, P/(N³D⁵ρ)… a function of the mixing Reynolds number») | Fragmento de buscador. Que Np no tiene unidad se comprobó: kg/m³ · s⁻³ · m⁵ = kg·m²·s⁻³ = W (RD 2032/2009: vatio = m² kg s⁻³, leído) |
| Con deflectores y régimen turbulento Np es casi constante | Tesis de la USP (teses.usp.br, RonchiJunior) y Thermopedia | Fragmento de buscador. Se usa solo como condición, sin cifra |
| Np = 1,4 | Valor de ejemplo declarado (elegido para que la potencia cuadre con el calor de agitación del simulador: 2,5 kW a 90 rpm con 3 m³) | Valor de ejemplo |
| Doblar rpm multiplica la potencia por 8 | Cálculo (2³) | Recalculado |
| (1,0 / 0,9)⁵ = 1,69 | Cálculo | Recalculado (1,6935) |
| Tabla de potencia: 0,30; 2,43; 5,75; 19,4 kW; (120/90)³ = 2,37; 0,9⁵ = 0,59 | Cálculo con valores de ejemplo | Recalculado (303 W; 2427 W; 5754 W; 19419 W) |
| Agua frente a tolueno: 1000 / 870 = 1,15 | Cálculo | Recalculado |
| La potencia del rodete acaba como calor en la masa | Balance de energía; el simulador la suma en `model.ts` (qAgit) | Razonamiento |
| 2,43 × 3600 / (2610 × 1,7) = unos 2 °C por hora | Masa y cp de «El reactor a fondo» (2610 kg, 1,7 kJ/(kg·K)) | Recalculado (1,97 °C/h) |
| Velocidad de punta = π·D·N; 3,14 × 0,9 × 1,5 = 4,24 m/s, unos 15 km/h | Geometría (circunferencia × vueltas por segundo), igual que en «La centrífuga a fondo» | Recalculado (4,241 m/s = 15,3 km/h) |
| Velocidad de punta alta relacionada con rotura de cristales, con efecto discutido | Resumen AIChE 2016 (658a) y estudio de la Universidad de Limerick (pure.ul.ie) | Fragmento de buscador; el texto lo presenta como relación discutida |
| Sin deflectores el líquido gira en bloque, forma vórtice y mezcla poco | Razonamiento ya presente en «El reactor a fondo»; posible entrada de gas por el vórtice: razonamiento | Razonamiento |
| Los rompecorrientes aumentan la turbulencia, que afecta a la transferencia de calor y a la velocidad de reacción, en reactores discontinuos y semicontinuos agitados | NTP 528, «Refrigeración en un proceso discontinuo» | Leído |
| Volumen mínimo: rodete y sonda cubiertos; 500 L en el R-204 | Razonamiento («El reactor a fondo»); 500 L: `docs/simulador-reactor.md` (valor de ejemplo) | Razonamiento + valor de ejemplo |
| Las palas golpean al entrar y salir del líquido con el rodete a medio cubrir | Razonamiento | Razonamiento |
| Q = U·A·ΔT; U depende de velocidad y tipo de agitación, superficie, fluido y geometría | NTP 527, ecuación (III); NTP 528, factores de la transferencia de calor | Leído |
| Capa de líquido casi quieto junto a la pared que la agitación renueva | Explicación cualitativa (película límite) | Razonamiento; se presenta como «una forma sencilla de imaginarlo» |
| U = 300 W/(m²·K) a 90 rpm y la quinta parte (60) con agitador parado | `src/sim/reactor/model.ts`: U0 = 300 a rpmRef = 90; factor 0,2 con rpm ≤ 1 | Leído en el código de la app; valores de ejemplo del modelo |
| 300 × 12 × 30 = 108 kW; 60 × 12 × 30 = 21,6 kW | Cálculo (A = 12 m² de «El reactor a fondo») | Recalculado |
| Pérdida de agitación: mezcla pobre y mala transferencia de calor; acumulación; capas que reaccionan rápida y peligrosamente, particularmente al restablecer la agitación | NTP 527, apartado «Agitación» | Leído |
| 150 kJ/kg y 30 kW de la camisa | «El reactor a fondo» y `docs/simulador-reactor.md` | Valores de ejemplo ya publicados |
| 100 × 150 = 15000 kJ; 15000 / 120 = 125 kW; más de cuatro veces 30 kW | Cálculo; 100 kg y 2 minutos son valores de ejemplo | Recalculado |
| La reacción va más rápida cuanto más sube la temperatura (exponencial) | NTP 527, «¿Cómo ocurre una reacción fuera de control?» | Leído |
| Detectar la pérdida de agitación por velocidad de giro o consumo de potencia; procedimientos de emergencia para el fallo del agitador; enclavar la válvula de reactivos con el agitador | NTP 527, apartado «Agitación» | Leído |
| Consumo que sube con masa más espesa o más densa | Fórmula P ∝ ρ (cálculo) y, para la viscosidad, razonamiento (más par) | Razonamiento |
| Consumo que baja con rpm normales si el rodete está al aire o suelto | Razonamiento: la velocidad se mide en motor o eje; sin líquido que empujar, el motor pide menos | Razonamiento |
| La fuerza de un desequilibrio crece con el cuadrado de la velocidad | Kuphaldt, «Vibration physics» («these forces grow with the square of the rotating speed») | Leído |
| Enclavamiento I-01: por debajo de 45 rpm se para la dosificadora P-205; alarma de disparo por sobreintensidad durante la adición | `src/sim/reactor/model.ts` (INTERLOCKS «I-01», avería «agitador») | Leído en el código de la app |
| Pasos del operador ante parada del agitador en adición (parar adición, no rearrancar, avisar, vigilar, anotar) | Ordenación propia a partir de la NTP 527; recomendación coincidente del CCPS (ver abajo) | Razonamiento; la lección remite al procedimiento de la planta |
| Registrar en el momento y documentar desviaciones | ICH Q7, apartados 2.15 y 8.15 | Leído |
| Ejemplo de planta: 2610 kg de tolueno, 600 kg de B en ≥ 60 min, 68–75 °C, 90 rpm | `docs/simulador-reactor.md` y «El reactor a fondo» | Proceso ficticio |
| Test: π × 0,6 × 2 = 3,77 m/s; 1000 × 2 × 0,25 / 0,002 = 250000; 3 × 8 = 24 kW; 2 × 1000 × 1 × 0,32768 = 655 W; 60 × 10 × 25 = 15 kW (y 75 kW agitando) | Cálculo | Recalculado |

## Incidente del CSB: buscado, no leído

Busqué un informe gratuito que documente un accidente por rearrancar el agitador con material acumulado. El buscador devolvió:

- Informe del CSB 2021-04-I-OH (planta de resinas en Columbus, Ohio): según los resúmenes del boletín Process Safety Beacon del CCPS (AIChE, noviembre de 2023, «The Agitator Stopped! Now What?»), el agitador se paró, el operador lo rearrancó al verlo por la mirilla y la agitación mezcló capas estancadas de resina caliente y disolvente; siguió una fuga de vapor inflamable, explosión e incendio.
- Process Safety Beacon de agosto de 2018, «What If Your Agitator Fails?»: al rearrancar, el material acumulado puede reaccionar muy deprisa y la refrigeración no dar abasto; recomienda pedir ayuda técnica antes de rearrancar.

No pude abrir ni el informe del CSB (www.csb.gov da error de red) ni los boletines (aiche.org, error de red). Por eso **la lección no cita este caso** y se apoya solo en la NTP 527, que sí leí y que dice lo mismo en lo esencial. Para citarlo hay que permitir www.csb.gov en la red de la sesión y leer el informe.

## Lo que quería incluir y dejé fuera por no poder verificarlo

- **Valores típicos de Np** de cada rodete (por ejemplo, unos 5 para la Rushton o algo más de 1 para palas inclinadas): solo en fragmentos, y contradictorios. La lección usa Np = 1,4 como valor de ejemplo, sin atribuirlo a ningún rodete.
- **Fronteras numéricas de Re** para laminar, transición y turbulento en tanque agitado (los fragmentos daban 1, 10, 10⁴ y 10⁵ según la fuente).
- **Relación de U con las rpm** (correlaciones tipo Nu ∝ Re^(2/3)): no se leyó ninguna fuente. Solo se usa el valor con agitación y sin ella del modelo del simulador, declarado como valor de ejemplo.
- **Velocidades típicas de cada rodete** (rpm) y **relación diámetro de rodete / diámetro de reactor**: solo en catálogos de fabricantes no accesibles.
- **Viscosidad del tolueno**: no verificada; por eso se usó 0,001 Pa·s como valor de ejemplo.
- **Potencia eléctrica trifásica a partir de los amperios** (P = √3·V·I·cos φ): el libro de Kuphaldt da el factor √3 entre tensiones, pero no leí la fórmula completa de potencia del motor con factor de potencia; la lección habla de consumo en amperios o kW sin convertir uno en otro.
- **Número y forma de deflectores en reactores de acero inoxidable** y profundidad del vórtice en función de la velocidad.
- **Criterios de cambio de escala** (potencia por volumen constante o velocidad de punta constante): solo en fragmentos; se quitó también el párrafo de potencia por volumen para no alargar sin fuente leída.
- **Caso del CSB** (ver apartado anterior).
