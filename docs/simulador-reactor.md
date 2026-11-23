# Simulador del reactor R-204: modelo y origen de cada número

Ruta: `/simulador/reactor`. Código: `src/sim/reactor/model.ts` (física, control, alarmas, interlocks y averías),
`src/sim/reactor/hoja.ts` (hoja de producción y revisión) y `src/components/sim/reactor/` (pantalla).
Pruebas: escenarios 9 a 14 de `npm run check:sim` (el 14 lleva cada avería con un operador que sigue la guía y comprueba que se reconoce la respuesta sin hallazgos críticos).

Proceso, producto (AX-21, B, AX-22), equipos (R-204, T-210, P-205…) y límites son **ficticios**. El modelo es didáctico:
sirve para practicar causa y efecto con números coherentes, no para diseñar procesos reales.

## Qué calcula, segundo a segundo

- **Calor por la camisa**: Q = U · A · (T camisa − T masa), con A la superficie mojada según el nivel (fondo abombado más
  virola de 1,8 m de diámetro) y U que baja si se para el agitador o si la pared está sucia.
- **Camisa**: la unidad de termorregulación calienta como mucho 60 kW y enfría con agua de torre (15 °C: agua de torre en un día fresco, valor de ejemplo; en verano llega más caliente) o glicol (−10 °C)
  a través de un intercambiador de U·A = 700 W/K. La camisa tiene su propia inercia térmica.
- **Masa**: balance de energía con calor de camisa, reacción, agitación, pérdidas y el calor que se lleva el reactivo frío.
  Al llegar a ebullición, el exceso de energía se va en vapor al condensador; lo que no condensa sale por el venteo
  (emisión) y, si no cabe, sube la presión.
- **Reacción**: seudoprimer orden en B con Arrhenius (90 kJ/mol, vida media de unos 7 min a 70 °C). Si la masa está fría
  o sin agitar, B se acumula sin reaccionar. La impureza crece con la temperatura de adición y con el tiempo de reflujo.
- **Gas**: moles de nitrógeno y oxígeno en el espacio de cabeza más la presión de vapor del tolueno (ley de Raoult con
  Antoine). Vacío con bomba de anillo líquido (hasta 150 mbar abs), nitrógeno, venteo, rompevacío y fugas.
- **Control**: cascada TIC-204 (masa) sobre TIC-204J (camisa) con antisaturación y la consigna de camisa limitada a
  ±50 °C de la masa; PIC-204 de presión con nitrógeno y venteo; FIC-205 de adición.
- **Interlocks**: I-01 agitador parado o lento, I-02 masa a 80 °C en adición, I-03 presión de 1,5 bar g, I-04 nivel del
  90 %, I-05 oxígeno por encima del 2 % al cargar disolvente.
- **Averías** (13): fuga de aire con vacío, camisa sucia, sonda congelada, fuga del disco de ruptura, válvula de la
  camisa atascada, caudalímetro de B descalibrado, sin agua de refrigeración, disparo del agitador, válvula de B que
  pasa, sin agua en el condensador, corte de corriente, pérdida de líquido de barrera y falta de nitrógeno. Cada una
  aparece en su fase del lote. Mantenimiento resuelve en 20 min las reparables cuando se avisa; la camisa sucia no se
  arregla durante el lote y el corte de corriente vuelve solo a los 3 min con todo parado.
- **Modos**: sin averías, una avería elegida, una sorpresa o «turno real» (una avería por tramo del lote, dos o tres en
  total). Nadie dice qué pasa: hay que verlo en lecturas, alarmas y tendencias.
- **Aprender a resolverlas**: botón de pista (dos por avería, de menos a más) y, en la revisión, para cada avería: cuándo
  empezó, cuándo avisaste, si hiciste lo que pedía la situación y a tiempo (las urgentes cuentan solo en la primera hora),
  síntomas, pasos, por qué, cómo es en planta y qué lecciones repasar (`src/sim/reactor/guia.ts`). Las pistas pedidas
  constan en la revisión.

## Coherencia con las lecciones (comprobada en `check:sim`)

| Dato | Lección | Simulador |
|---|---|---|
| U con agitación | «El reactor a fondo»: 300 W/(m²·K) de ejemplo | 300 W/(m²·K) a 90 rpm |
| Carga | 2610 kg, 0,87 kg/L, 3000 L, 50 % de 6000 L | igual |
| cp de la masa | 1,7 kJ/(kg·K) | 1,7 kJ/(kg·K) |
| Calentar de 20 a 70 °C | unos 74 min con 50 kW de media | 72 min (camisa limitada a 60 kW) |
| Diferencia máxima camisa-masa | 50 °C | 50 °C, con alarma y registro |
| Calor neto de la adición | 150 kJ por kg de B | 250 kJ/kg de reacción menos 100 kJ/kg de calentar B de 20 a 70 °C |
| Adición máxima | 30 kW / 150 kJ/kg = 12 kg/min | la camisa retira unos 30 kW a 70 °C: unos 12 kg/min |
| Adición de la hoja | 600 kg en no menos de 60 min, 68 a 75 °C | igual; a 600 kg/h la masa queda entre 71 y 74 °C |
| Inertización | «Inertización a fondo»: 21 × 0,2ⁿ: 4,2 %, 0,84 %, 0,17 % | 4,19 %, 0,83 %, 0,17 % |

## Parámetros y de dónde salen

| Parámetro | Valor | Origen |
|---|---|---|
| Volumen nominal | 6000 L | lección «El reactor a fondo» |
| Diámetro, fondo y altura de camisa | 1,8 m, 0,47 m³, 1,6 m | valores de ejemplo coherentes con 6000 L |
| Volumen mínimo de agitación | 500 L | valor de ejemplo (en planta, ficha del equipo) |
| Potencia de calefacción | 60 kW | valor de ejemplo elegido para que el calentamiento cuadre con la lección |
| U·A del frío | 700 W/K | valor de ejemplo elegido para que la camisa retire unos 30 kW a 70 °C, como en la lección |
| Antoine del tolueno | A 6,95464; B 1344,8; C 219,482 (mmHg, °C) | constantes de libro de texto; dan 110,6 °C a 760 mmHg, coherente con el punto de ebullición de unos 111 °C de las fichas de la app |
| Calor de vaporización del tolueno | 360 kJ/kg | valor de libro de texto cerca de la ebullición |
| Masa molar del tolueno | 92,14 g/mol | cálculo con masas atómicas estándar |
| Masa molar de reactivo y producto | 250 g/mol | valor de ejemplo |
| Cinética y calor de reacción | k = 0,1 min⁻¹ a 70 °C, Ea 90 kJ/mol, 250 kJ/kg | valores de ejemplo, ajustados al calor neto de la lección |
| Temperatura de reflujo | unos 115 °C | resultado del modelo: el producto disuelto sube algo la ebullición del tolueno (Raoult) y el control de presión mantiene 0,05 bar g |
| Presiones de alarma, interlock, disco y válvula de seguridad | 0,5; 1,5; 3,0 bar g | valores de ejemplo (en planta, los fija el diseño del equipo) |
| Línea de venteo | 0,6 mol/s | valor de ejemplo |
| Especificación del IPC | B ≤ 0,5 %, impureza ≤ 0,30 % | valores de ejemplo |

## Revisión del lote

La revisión compara cada dato anotado con lo que marcaba el sistema en ese momento (exactitud), mira si se anotó tarde
(más de 30 min después de ocurrir), busca datos fuera de la hoja sin explicación, pasos sin firmar, y evalúa el proceso:
oxígeno al cargar, duración y temperatura de la adición, diferencia camisa-masa, reflujo, IPC, presión, emisiones,
descarga en caliente y la respuesta a cada avería (aviso y registro en incidencias).

## Lo que el modelo simplifica

- La mezcla es perfecta con agitación; sin agitar, la reacción y el U bajan, pero no hay estratificación espacial.
- El condensador es un único coeficiente; no hay subenfriamiento del condensado.
- Densidad y cp de la solución no cambian con la temperatura.
- No hay descomposición térmica del producto: en este proceso ficticio la temperatura máxima la limita la ebullición.
