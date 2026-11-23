# Fuentes de «Calor de reacción a fondo» (`termoquimica-a-fondo`)

URL de las NTP leídas (texto íntegro de la ficha HTML del INSST, descargado con curl y convertido a texto en `src_termo/`):

- NTP 527: https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/15-serie-ntp-numeros-506-a-540-ano-2000/ntp-527-reacciones-quimicas-exotermicas-i-factores-de-riesgo-y-prevencion
- NTP 528: misma serie, `ntp-528-reacciones-quimicas-exotermicas-ii-control-termico-y-refrigeracion`
- NTP 529: misma serie, `ntp-529-reacciones-quimicas-exotermicas-iii-analisis-de-accidentes-graves`
- NTP 302: https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/9-serie-ntp-numeros-296-a-330-ano-1994/ntp-302-reactividad-e-inestabilidad-quimica-analisis-termodinamico-preliminar

| Dato, fórmula o afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| Romper enlaces cuesta energía y formarlos la libera; exotérmica y endotérmica; energía de activación | Conocimiento de libro de texto | Comprobado por razonamiento; coherente con «Enlaces a fondo» del repo |
| Energías de enlace H–H 436, Cl–Cl 243, H–Cl 431 kJ/mol; balance −183 kJ/mol | Valores medios aproximados de libro de texto, no leídos en esta sesión | Recalculado: 679 − 862 = −183 |
| El calor de reacción puede estimarse con datos termodinámicos; para descomposiciones a 100–400 °C es imprescindible el análisis calorimétrico | NTP 302 | Leído en el documento |
| Medir el calor de reacción con calorímetro no es tan fácil y extrapolar a condiciones reales puede ser complejo | NTP 302 | Leído en el documento |
| ΔH en kJ/mol; negativo = exotérmica; 1 kJ/mol = 1000 kJ/kmol | Conocimiento de libro de texto | Comprobado por cálculo de unidades |
| Q = n × ΔH; kg / masa molar = kmol | Libro de texto; lección «El mol a fondo» del repo | Recalculado |
| Masas atómicas redondeadas H 1, Cl 35,5 (HCl 36,5) | Valores estándar de la IUPAC, no leídos en esta sesión, redondeados como dice el texto | Recalculado: 73 / 36,5 = 2 kmol |
| Calor de neutralización ácido fuerte con base fuerte: unos 57 kJ por mol de agua | Valor de libro de texto, aproximado, declarado así en el texto; no leído en esta sesión | Recalculado: 2 × 57000 = 114000 kJ; quiz 3 × 57000 = 171000 kJ |
| Reactivo C: M = 100 kg/kmol, ΔH = −150 kJ/mol, 500 kg | Valor de ejemplo declarado | Recalculado: 5 kmol, 750000 kJ |
| Calor de mezcla al diluir ácido sulfúrico: cualitativo, sin cifra | Libro de texto; regla «el ácido sobre el agua» de «Ácidos, bases y pH a fondo» | Sin cifra por no haberla leído |
| Caso adiabático como caso límite para estudiar la seguridad en las peores condiciones | NTP 527 | Leído en el documento |
| ΔTad = Q / (m × cp) | Libro de texto (Q = m·cp·ΔT); ya en «Calor de reacción» y «Calor y frío a fondo» | Recalculado |
| Aguas ácidas: 2160 kg (2000 + 160 kg de sosa 50 %), cp 4,18 (agua), ΔTad 12,6 °C | Valor de ejemplo; cp del agua ya en la app | Recalculado: 114000 / (2160 × 4,18) = 12,63 |
| 80 kg de NaOH = 160 kg de sosa al 50 % | Cálculo (2 kmol × 40) | Recalculado |
| AX-22: 600 kg de B, 150 kJ/kg, 2610 kg tolueno, cp 1,7; ΔTad 16,5 °C | Datos de ejemplo de `reactor-a-fondo` (src/content/nivel12-reactor.ts) | Recalculado: 90000 / (3210 × 1,7) = 16,49 |
| Reactivo C: ΔTad 141,9 °C | Cálculo | 750000 / (3110 × 1,7) = 141,86 |
| Una reacción débilmente exotérmica puede ser peligrosa si arranca otra fuertemente exotérmica (descomposición, polimerización) | NTP 527 | Leído en el documento |
| Temperatura máxima = T proceso + ΔTad × fracción acumulada | Cálculo a partir de la definición de ΔTad | Recalculado: 70 + 0,30 × 141,9 = 112,6; 70 + 141,9 = 211,9 |
| Nombre y sigla MTSR (*maximum temperature of the synthesis reaction*) | Literatura de seguridad de procesos, NO leída en esta sesión; el texto lo dice | Se buscó una NTP que la tratara; no existe en el catálogo revisado (búsqueda web y lista de títulos) |
| Factores a conocer: temperatura inicial, potencial energético, cinética, acumulación, capacidad de eliminar calor | NTP 527 | Leído en el documento |
| Tolueno hierve a 111 °C | Ficha de seguridad ficticia de la app (src/content/fds.ts, ya verificada) | Leído en el repo |
| Fracción acumulada 30 % y descomposición a 180 °C | Valores de ejemplo declarados | Margen 180 − 112,6 = 67,4 («unos 67 °C») |
| Usar un disolvente que hierva por debajo de la temperatura de descomposición exotérmica, y un medio calefactor cuya temperatura máxima quede por debajo | NTP 527 | Leído en el documento |
| Potencia = kmol/h / 3600 × ΔH (kJ/kmol) | Cálculo de unidades | 1,2 / 3600 × 150000 = 50 kW |
| Q = U × A × ΔT; U = 300 W/(m²·K), A = 12 m² | Datos de `reactor-a-fondo`; la NTP 527 usa U·s·(T − Tex) | Leído en el repo y en la NTP; 300 × 12 × 25 = 90000 W |
| Fluido de camisa a 45 °C (ΔT 25 °C) | Valor de ejemplo | — |
| Caudal máximo 2,16 kmol/h (216 kg/h) | Cálculo | 90 × 3600 / 150000 = 2,16 |
| Capacidad refrigerante sobredimensionada un 50 % | NTP 527, nota 2 | Leído en el documento |
| Reservas para cubrir el 150 % de las necesidades | NTP 528 | Leído en el documento |
| Caudal con margen 1,44 kmol/h = 144 kg/h; 500 kg en 3,47 h ≈ 208 min | Cálculo | 60 × 3600 / 150000 = 1,44; 500 / 144 = 3,472 h |
| Identificar la velocidad máxima de adición que la refrigeración puede manejar y no superarla | NTP 527 | Leído en el documento |
| Temperatura de inicio: bastante baja para no descomponer, bastante alta para no acumular | NTP 528 | Leído en el documento |
| Diferencia masa-camisa que se cierra con la bomba en marcha como indicio de acumulación | Razonamiento a partir del balance Q = U·A·ΔT (cálculo); presentado como pista, no como cita | No hay fuente leída que lo diga con esas palabras |
| Es difícil predecir el sistema; un pequeño error de cálculo puede ser grave; pruebas experimentales con calorímetros DTA, DSC, ARC, SEDEX | NTP 527 | Leído en el documento |
| La mala transferencia de calor se simula fácilmente en un calorímetro de reacción | NTP 527 | Leído en el documento |
| Pruebas piloto antes de escala industrial; objetivo: límite de temperatura por debajo del cual se trabaja seguro | NTP 527 | Leído en el documento |
| DSC/DTA para descomposiciones (temperatura de pico en ensayos DTA/DSC) | NTP 302 (criterio Dow con DTA/DSC) | Leído en el documento |
| Descripción sencilla de cada técnica de la tabla | Explicación didáctica a partir de las siglas que da la NTP 527 | Paráfrasis |
| MARS: 19,8 % de los accidentes en planta de proceso por pérdida de control; descomposición 25 %, reacción inesperada 27,1 % | NTP 529 | Leído en el documento |
| Seveso: agitador parado sin esperar a enfriar, sin refrigerar, registro desconectado a 158 °C, reacción a las 6 h y media, disco de ruptura roto, dioxina | NTP 529 | Leído en el documento (año no citado en el texto, por eso no se da) |
| Tiempo de seguridad a temperatura elevada | NTP 527 | Leído en el documento |
| Reflujo: el calor se elimina con la entalpía de vaporización del disolvente, temperatura aproximadamente constante, siempre que haya capacidad de condensación y disolvente | NTP 528 | Leído en el documento |
| Calor latente 400 kJ/kg | Valor de ejemplo declarado (el mismo que usa «Vapor y calderas a fondo») | — |
| 900 kg/h dan 100 kW; 150 kW piden 1350 kg/h | Cálculo | Recalculado |
| Fallos del condensador: entrada de vapor bloqueada, inundado, congelado | NTP 528 | Leído en el documento |
| Pérdida de disolvente entre los factores de explosión térmica | NTP 527 | Leído en el documento |
| CO₂ con bicarbonato/carbonato, H₂ de metales con ácidos, HCl gas en cloraciones | Conocimiento de libro de texto, cualitativo | — |
| 2 kmol de CO₂ a 25 °C y 1 atm: 48,9 m³ | Cálculo con P·V = n·R·T (R = 8,314 J/(mol·K), libro de texto) | 2000 × 8,314 × 298,15 / 101325 = 48,93 |
| Determinar la velocidad de desprendimiento de gases para asegurar el venteo; más gas, más presión, explosión sin capacidad de alivio | NTP 527 | Leído en el documento |
| Pérdida de agitación: mezcla pobre y mala transferencia de calor (vigilar rpm y consumo) | NTP 527 | Leído en el documento |
| Quiz numéricas | Cálculo | 300/120 × 80000 = 200000; 3 × 57000 = 171000; 400000/(4000 × 2) = 50; 60 + 120 × 0,25 = 90; 0,9/3600 × 200000 = 50; 72 × 3600/120000 = 2,16; 720/3600 × 400 = 80 |
| Planta: KT-31, R-204, P-205, temperaturas de camisa 60, 48 y 62 °C, catalizador poco activo | Valores de ejemplo, ficticios | Diferencias 23 y 8 °C recalculadas |

## Fragmentos de buscador
- Búsqueda web de una NTP del INSST sobre MTSR o evaluación del riesgo térmico con calorimetría: no apareció ninguna; solo NTP 527, 302 y otras no relacionadas. No se usó ningún dato de fragmento.

## Lo que se dejó fuera por no poder verificarlo
- Método de clasificación de criticidad de Stoessel y fórmulas detalladas de la MTSR, la MTT y el TMRad: no hay fuente gratuita leída.
- Cifra del calor de dilución del ácido sulfúrico: solo cualitativo.
- Calor latente real del tolueno y otros disolventes: se usa 400 kJ/kg como valor de ejemplo.
- Temperaturas de descomposición reales de sustancias concretas.
- Comparación de la energía de 750000 kJ con litros de gasóleo (poder calorífico no verificado).
- Año del accidente de Seveso (no figura en el texto de la NTP 529 leído).
- NTP 1112: el número que sugería el encargo trata de almacenamiento paletizado, no de riesgo térmico; no se usó.
- Guía técnica de accidentes graves: no consultada; la NTP 529 cubría los casos necesarios.
