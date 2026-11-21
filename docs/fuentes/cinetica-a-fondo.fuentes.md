# Fuentes de «Velocidad de reacción a fondo» (`cinetica-a-fondo`)

Documentos leídos en esta sesión (descargados en `src_cinet/dl/`):

- **NTP 527 del INSST**, «Reacciones químicas exotérmicas (I): factores de riesgo y prevención» (1999), PDF: https://www.insst.es/c/document_library/get_file?uuid=4d32ceae-c81f-44c2-97c0-a7a6c736ddbc&groupId=94886 (leída entera).
- **NTP 528 del INSST**, «Reacciones químicas exotérmicas (II): control térmico y refrigeración» (1999), PDF: https://www.insst.es/c/document_library/get_file?uuid=1fd3a0e3-a537-4025-b891-f09eb28f41ac&groupId=94886 (leídos los apartados de refrigeración en proceso discontinuo, rompecorrientes y modos de fallo).
- **ICH Q7**, https://database.ich.org/sites/default/files/Q7%20Guideline.pdf, apartados 8.20 (Time Limits) y 8.30 a 8.36 (In-process Sampling and Controls).
- **Real Decreto 2032/2009**, unidades legales de medida, https://www.boe.es/buscar/act.php?id=BOE-A-2010-927 (definición de la temperatura Celsius, t = T − T0 con T0 = 273,15 K).
- Lecciones del repo leídas enteras para no repetirlas: `velocidad-y-catalisis`, `calor-de-reaccion`, `equilibrio-quimico` (título), `reacciones-en-api` (nivel2.ts), `reactor-a-fondo` (nivel12-reactor.ts), «Impurezas en el API» (nivel3.ts). Títulos de nivel 1 comprobados en nivel1.ts.

| Dato, fórmula o afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| Velocidad de reacción: reactivo que desaparece o producto que aparece por unidad de tiempo; unidades mol/(L·s), mol/(L·h), kg/h | Conocimiento de libro de texto | No leído en esta sesión; definición universal |
| Tabla de seguimiento: 0,80 mol/L, mitad cada hora (100; 50; 25; 12,5; 6,25; 3,1 %) | Valor de ejemplo declarado | Recalculado con python (0,5^t) |
| Velocidad media 0,40 mol/(L·h) en la primera hora y 0,025 mol/(L·h) entre 4 y 5 h; 16 veces menos | Cálculo | Recalculado (0,40 / 0,025 = 16) |
| Conversión = (inicial − queda) / inicial × 100 | Conocimiento de libro de texto | Fórmula estándar |
| Cuenta 1: (250 − 10) / 250 = 96 %; cuenta 2: (0,80 − 0,12) / 0,80 = 85 % | Valor de ejemplo declarado + cálculo | Recalculado con python |
| IPC expresado como «material de partida ≤ 1,0 %» | Lección `velocidad-y-catalisis` (repo) | Leído en el repo |
| Teoría de choques: choque, energía suficiente (energía de activación) y orientación | Conocimiento de libro de texto | No leído en esta sesión |
| La velocidad depende de la altura de la barrera, no de la diferencia entre reactivos y productos | Conocimiento de libro de texto | No leído en esta sesión |
| Diluir frena; concentración aumenta los choques | Conocimiento de libro de texto | Cualitativo |
| Cubo de 1 cm: 6 cm²; 1000 cubitos de 1 mm: 60 cm²; diez veces más superficie | Cálculo | Recalculado con python |
| En dos fases la reacción ocurre en la interfase; agitar multiplica la interfase | Conocimiento de libro de texto | Cualitativo; coherente con `velocidad-y-catalisis` y NTP 527 (capas que se separan sin agitación) |
| Los rompecorrientes aumentan la turbulencia, que afecta a la transferencia de calor y a la velocidad de la reacción | NTP 528, apartado «Refrigeración en un proceso discontinuo» | Leído en el documento |
| Ecuación de Arrhenius k = A·e^(−Ea/(R·T)); A relacionado con frecuencia y orientación de choques | Conocimiento de libro de texto; la NTP 527 usa la ley de Arrhenius y el término exp(−Ea/RT) | NTP 527 leída (las fórmulas del PDF salen como imagen; se lee la descripción de Ko, Ea, T y R) |
| R = 8,314 J/(mol·K) | Constante de libro de texto (permitido así por el encargo) | No leída en esta sesión |
| T (K) = t (°C) + 273,15 | RD 2032/2009, nota (e) | Leído en el BOE |
| Velocidad media molecular proporcional a la raíz de T: de 20 a 30 °C sube 1,7 % | Teoría cinética, libro de texto + cálculo | raíz(303,15/293,15) = 1,0169 |
| Regla «×2 o ×3 cada 10 °C» | Aproximación de libro de texto (declarada como tal en el texto); también en `velocidad-y-catalisis` | Comprobada con Arrhenius (fila siguiente) |
| Factores de Arrhenius: 50 kJ/mol ×1,97 (20-30 °C) y ×1,69 (60-70 °C); 75 kJ/mol ×2,76 y ×2,20; 100 kJ/mol ×3,87 y ×2,86 | Energías de activación: valores de ejemplo declarados; factores: cálculo | Python, `src_cinet/calc.py` |
| Factor 2 entre 20 y 30 °C equivale a Ea ≈ 51 kJ/mol; factor 3, a ≈ 81 kJ/mol | Cálculo | Python: 51,2 y 81,2 kJ/mol |
| Cuenta 1: +20 °C, entre 4 y 9 veces; Arrhenius 75 kJ/mol de 20 a 40 °C ×7,14 | Cálculo | Python |
| Cuenta 2: de 60 a 40 °C, 2 h pasan a 8-18 h; Arrhenius 75 kJ/mol factor 5,64, unas 11,3 h | Cálculo | Python (5,64 × 2 = 11,28) |
| Cuenta 3: +5 °C, factor entre 1,41 y 1,73; Arrhenius 75 kJ/mol de 60 a 65 °C ×1,49 | Cálculo | Python (raíz de 2 = 1,414; raíz de 3 = 1,732; 1,492) |
| Calor generado crece exponencialmente con T y el retirado linealmente | NTP 527, «¿Cómo ocurre una reacción fuera de control?» y gráfica de Semenov | Leído en el documento |
| Orden 0, 1 y 2: al duplicar la concentración, velocidad igual, ×2, ×4 | Conocimiento de libro de texto | 2^0, 2^1, 2^2 |
| Orden cero: velocidad independiente de la concentración de los reactivos | NTP 527, nota 1 | Leído en el documento |
| El orden se determina experimentalmente, no por la ecuación escrita | Conocimiento de libro de texto | No leído en esta sesión |
| Vida media constante en primer orden | Conocimiento de libro de texto | No leído en esta sesión |
| t½ 1,5 h, a 4,5 h: 3 vidas medias, 1/8 = 12,5 % | Valor de ejemplo + cálculo | Python |
| t½ 1 h: tras 6 vidas medias 1,56 %, tras 7 0,78 %; unas 7 h para bajar del 1 % | Cálculo | Python (log2(100) = 6,64) |
| Procedimientos escritos para vigilar el avance de las etapas; IPC y criterios definidos con datos de desarrollo o históricos; resultados documentados en la hoja del lote | ICH Q7, apartados 8.30, 8.32 y 8.33 | Leído en el documento |
| Límites de tiempo de la instrucción maestra deben cumplirse; pueden no ser apropiados al trabajar hasta un valor objetivo (por ejemplo hidrogenación), porque el final lo decide el muestreo en proceso | ICH Q7, apartado 8.20 | Leído en el documento |
| El operador no alarga ni acorta por su cuenta; sigue la hoja y avisa | Regla del proyecto y lecciones `velocidad-y-catalisis` y `reactor-a-fondo` | Leído en el repo |
| Reactivo dosificado en reacción rápida reacciona según entra; si se para la adición se para la reacción | Conocimiento de ingeniería de reacciones; NTP 527 («si ocurre una pérdida de control es posible detener la carga de reactivos») | Leído en el documento (la parte de la NTP) |
| Refrigerante demasiado frío durante la adición baja la velocidad y lleva a acumulación y descontrol; temperatura de inicio ni muy baja ni muy alta | NTP 528, «Refrigeración en un proceso discontinuo» | Leído en el documento |
| Bajada de temperatura puede provocar acumulación; deben definirse temperaturas mínimas y máximas | NTP 527, apartado «Temperatura» | Leído en el documento |
| Síntoma: la temperatura no sube al dosificar una reacción exotérmica | Deducción directa de lo anterior (calor de reacción no liberado) | Razonado; coherente con `reactor-a-fondo` |
| Catalizador: rebaja Ea, no se consume, no cambia el equilibrio | Conocimiento de libro de texto | No leído en esta sesión |
| Bajar Ea de 100 a 80 kJ/mol a 60 °C con el mismo A: ×1370 aprox. | Valores de ejemplo + cálculo | Python: e^(20000/(8,314 × 333,15)) = 1367 |
| Homogéneo y heterogéneo; Pd/C se retira por filtración; metal residual como impureza elemental | `velocidad-y-catalisis` y «Impurezas en el API» (repo) | Leído en el repo |
| Envenenamiento del catalizador; compuestos de azufre como ejemplo clásico sobre metales | Conocimiento de libro de texto | No leído en esta sesión; sin cifras |
| Pd/C pirofórico, puede inflamarse solo, sobre todo seco con restos de disolvente | `oxidacion-reduccion` y `reacciones-en-api` (nivel2.ts) | Leído en el repo |
| Un cambio de catalizador puede aumentar mucho la velocidad; trazas de hierro de un acero distinto pueden provocar descomposición violenta | NTP 527, «Diseño de un proceso químico seguro» | Leído en el documento |
| Enzimas como catalizadores biológicos | `velocidad-y-catalisis` (repo) | Leído en el repo |
| Adición de un inhibidor como medida de protección para detener la reacción | NTP 527, «Medidas de protección» | Leído en el documento |
| Reacciones consecutivas: si el producto deseado se descompone por una reacción consecutiva, el tipo de operación cambia el rendimiento; reacciones paralelas de los reactivos dan subproductos | NTP 527, «Elección del reactor» | Leído en el documento |
| Tiempo máximo a temperatura elevada: estar más del preciso puede descomponer material térmicamente inestable | NTP 527, «Tiempo de seguridad» | Leído en el documento |
| Paralelas: la de mayor Ea se ve más favorecida al calentar; 60 kJ/mol ×1,95 y 100 kJ/mol ×3,06 de 50 a 60 °C | Libro de texto + valores de ejemplo + cálculo | Python |
| Subproductos y productos de degradación como impurezas orgánicas | «Impurezas en el API» (nivel3.ts) | Leído en el repo |
| Quiz: 97,5 %; 92 %; 9 veces; 12 h; 12,5 %; 50 kg | Cálculo | Python |
| Ejemplo de planta: R-318, KX-07, reactivo C, cantidades, tiempos e IPC | Valores de ejemplo, ficticios | Inventados y declarados |

## Lo que quería incluir y dejé fuera por no poder verificarlo

- Energías de activación reales de reacciones típicas de API o rangos «habituales» de Ea: no leídos en ninguna fuente accesible; se usan solo valores de ejemplo.
- Cifras de frecuencia de choques entre moléculas en un líquido y la distribución de Maxwell-Boltzmann con números: se dejó solo la idea cualitativa y el cálculo de la raíz de T.
- Que el Pd/C se maneja húmedo y bajo nitrógeno como práctica estándar: es práctica conocida, pero no la leí en una fuente de esta sesión; el texto remite a la hoja de cada etapa.
- Que algunos productos se suministran con inhibidor para el almacenamiento: no verificado en una ficha concreta; eliminado.
- Ejemplos concretos de venenos de catalizador además del azufre (aminas, haluros, monóxido de carbono): no verificados; se dejó solo el azufre, como ejemplo de libro de texto.
- Título exacto de la lección paralela `termoquimica-a-fondo`: no existe aún en el repo; el texto la cita como «la lección a fondo de calor de reacción». Conviene ajustar la referencia cuando esté integrada.
