# Fuentes: operaciones-laboratorio-a-fondo

Copias de trabajo y cálculos en `tmp-oplab/` (descargas en `tmp-oplab/dl/`, cuentas en `tmp-oplab/calc/calc.py`). Las NTP 433 y 464 se releyeron en el texto íntegro de su ficha HTML del INSST (copias en `src_labseg/dl/ntp433.body.txt` y `ntp464.body.txt`).

URL:
- NTP 464, Prevención del riesgo en el laboratorio químico: operaciones básicas: https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/13-serie-ntp-numeros-436-a-470-ano-1998/ntp-464-prevencion-del-riesgo-en-el-laboratorio-quimico-operaciones-basicas
- NTP 433, Prevención del riesgo en el laboratorio: instalaciones, material de laboratorio y equipos: https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/12-serie-ntp-numeros-401-a-435-ano-1997/ntp-433-prevencion-del-riesgo-en-el-laboratorio.-instalaciones-material-de-laboratorio-y-equipos
- FDA, Pesticide Analytical Manual (PAM) vol. I, capítulo 4 (secciones 401 y 402): https://www.fda.gov/media/74505/download
- FDA, PAM vol. I, capítulo 3 (sección 302, mención del Soxhlet): https://www.fda.gov/media/74488/download
- Orden de 2 de noviembre de 1987, métodos oficiales de análisis de galletas (BOE 24/11/1987, págs. 34907-34913): https://www.boe.es/boe/dias/1987/11/24/pdfs/A34907-34913.pdf
- Real Decreto 290/2023 (BOE-A-2023-10396), módulo 1250 «Muestreo y operaciones unitarias de laboratorio»: https://www.boe.es/buscar/act.php?id=BOE-A-2023-10396 (copia en `auditoria-temario/boe/BOE-A-2023-10396.txt`)
- ICH Q7: https://database.ich.org/sites/default/files/Q7%20Guideline.pdf (copia en `src_labseg/dl/q7.txt`)
- NIST Chemistry WebBook (datos de cambio de fase, Mask=4): agua C7732185, metanol C67561, n-hexano C110543, heptano C142825, dióxido de carbono C124389, p. ej. https://webbook.nist.gov/cgi/cbook.cgi?ID=C7732185&Mask=4
- Kuphaldt, Lessons in Industrial Instrumentation, «Elementary thermodynamics»: https://control.com/textbook/physics/elementary-thermodynamics/ (copia en `src_destil/dl/thermo.txt`)

| Dato o afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| ICH Q7 14.20: reprocesar repitiendo una cristalización u otros pasos físicos (destilación, filtración, cromatografía, molienda) del proceso establecido es en general aceptable | ICH Q7 | Leído |
| Módulo 1250 (RD 290/2023, título de Técnico en Operaciones de Laboratorio): contenidos tamizado, filtración, decantación, centrifugación; destilación, evaporación, secado, cristalización, liofilización; extracción, adsorción, absorción, intercambio iónico, ósmosis; criterio «se han recuperado los disolventes» | RD 290/2023 | Leído en el texto del BOE. La asignación del código 1250 al título de Operaciones de Laboratorio se deduce de su posición en el real decreto (módulos 1250-1257 junto a los de ese título); en la lección se quitó la frase sobre la recuperación de disolventes por espacio |
| Antes de cualquier operación: lectura crítica del procedimiento, material adecuado, cantidad mínima, protección, plan de actuación | NTP 464 (introducción) | Leído |
| Montajes sin tensiones con soportes y abrazaderas | NTP 433 | Leído |
| Calentar con mantas calefactoras o baños sobre sistemas móviles (elevadores) para cesar rápido el aporte de calor | NTP 464 (destilación) | Leído |
| «Filtrar sobre filtro previamente húmedo» | Orden 2/11/1987, método de grasas 4.4 | Leído |
| Büchner de porcelana de 12 cm; matraz de filtración a vacío de 500 mL; filtrar con succión a través de Büchner con papel | FDA PAM, sección 401 | Leído |
| Nombre «matraz Kitasato» para el matraz de filtración a vacío (en inglés *filter flask*), con salida lateral; junta de goma entre matraz y embudo | Uso habitual en manuales en español; la FDA lo llama «vacuum filtration flask» | Nombre visto solo en fragmentos de buscador; la pieza y su función, leídas en FDA PAM y NTP 464 |
| Si el filtrado empieza a hervir, reducir el vacío | FDA PAM 401 («Reduce vacuum during filtration if filtrate begins to boil») | Leído |
| Papel del diámetro justo que tape todos los agujeros, mojado con disolvente; frasco (trampa) entre matraz y trompa; abrir el vacío antes de verter | Manuales universitarios (MSU, York, UNB) | Solo fragmento de buscador; se marca en el texto. El frasco de seguridad está además en NTP 464 (leído) |
| Matraces de filtración a vacío de vidrio de buena calidad, en buen estado y fijados sin tensiones; si filtra mal por el producto, más vacío no mejora rendimiento ni tiempo y sí el riesgo de implosión; filtrar con presión o en pequeñas cantidades, vigilar rotura del papel | NTP 464 | Leído |
| Vidrio de paredes gruesas o formas esféricas para vacío; cinta o red; paso de vacío a presión atmosférica gradual y lento | NTP 464 (operaciones con vacío) | Leído |
| Trompa de agua: retorno de agua al cerrar el grifo lentamente; cerrar primero la llave entre aparato y trompa; recipiente de seguridad | NTP 464 | Leído |
| Fuerza sobre Büchner 12 cm a 200 mbar abs: 81300 Pa × 0,0113 m² = 919 N ≈ 94 kg | Cálculo (diámetro de la FDA PAM; presiones valores de ejemplo) | Recalculado con python (919,5 N; 93,8 kg) |
| 50 g en 0,0113 m² = 4,4 kg/m²; 200 kg en 2,0 m² = 100 kg/m²; unas 23 veces | Cálculo, valores de ejemplo; FD-402 de 2,0 m² tomado de «Filtros a fondo» | Recalculado (22,6) |
| Torta más gruesa frena el líquido | «Filtros a fondo» (app) | Leído en la app |
| Presión de vapor del agua a 20 °C = 23 mbar (Antoine NIST, 273-303 K: A 5,40221, B 1838,675, C −31,737, bar y K) | NIST WebBook | Leído y recalculado (23,4 mbar) |
| Una trompa no puede bajar de la presión de vapor de su agua | Razonamiento físico a partir de la definición de presión de vapor | Deducción; no leído como tal en una fuente |
| Embudo de decantación: riesgos de contacto, proyecciones e inhalación al aliviar la presión por la llave; guantes impermeables, ropa, vitrina con sustancias peligrosas | NTP 464 (extracción líquido-líquido) | Leído |
| Pasos de uso del embudo (invertir, abrir la llave hacia la vitrina, quitar el tapón para vaciar) | Práctica general de laboratorio; el porqué del tapón es razonamiento físico (entrada de aire) | No leído en fuente gratuita accesible paso a paso; coherente con NTP 464. Ver «dejado fuera» |
| Emulsiones: mezclar con cuidado para no formarlas; añadir disolución saturada de NaCl; reposar ≥30 min; si no rompe, centrifugar 5 min a 1500 rpm | FDA PAM, secciones 401 y 402 | Leído |
| Fórmula de extracciones repetidas | «Extracción líquido-líquido a fondo» (app) | Leído en la app |
| 1 × 60 mL: 29,4 %; 3 × 20 mL: 17,1 %; extraído 83 % frente a 71 % | Cálculo, K = 4 valor de ejemplo | Recalculado (0,2941; 0,1715) |
| Funcionamiento del Soxhlet (matraz, cámara con cartucho, refrigerante, sifón, ciclos) | Universidad de Barcelona y otros manuales | Solo fragmento de buscador; marcado en el texto |
| Soxhlet en método oficial: cartucho tapado con algodón desengrasado, éter etílico exento de peróxidos, sifonar unas ocho horas, matraz receptor secado y tarado, evaporar, secar en estufa y pesar; grasa = (P1 − P2) / P × 100 | Orden 2/11/1987, método 4 (grasas) | Leído (la fórmula en el PDF es imagen; se reconstruye con las variables P1, P2 y P que define el texto) |
| Soxhlet como proceso de extracción más exhaustivo | FDA PAM, sección 302 | Leído (no se usó en el texto final) |
| Grasa 0,5120 / 10,012 × 100 = 5,11 % | Cálculo, valores de ejemplo | Recalculado (5,114) |
| Extracción en caliente (Soxhlet): riesgo de incendio por sobrepresión o fuga de vapor; baño maría o de aceite a temperatura suficiente pero no más; vitrina; extintor y manta ignífuga; control del agua de refrigeración en extracciones largas | NTP 464 | Leído |
| Destilación: examinar material y estanqueidad; porcelana porosa antes de calentar; vitrina; temperatura de autoinflamación; paro de la refrigeración emite vapores y crea atmósfera inflamable | NTP 464 | Leído |
| Columnas de destilación con bandejas donde el vapor que sube contacta con el líquido que baja; temperaturas más altas abajo y más bajas arriba | Kuphaldt, Elementary thermodynamics | Leído |
| Tabla hexano-heptano: 80,5 / 75,0 / 71,5 / 69,9 °C; vapor 71,4 / 86,4 / 94,3 / 97,7 % | Cálculo con Raoult (mezcla ideal, suposición declarada) y Antoine del NIST: hexano 286,18-342,69 K (4,00266; 1171,53; −48,784); heptano 299,07-372,43 K (4,02832; 1268,636; −56,199) | Recalculado. Aviso: las temperaturas de 70-80 °C quedan hasta unos 11 K por encima del intervalo de ajuste del hexano (extrapolación). La constante del hexano reproduce su punto de ebullición NIST (341,9 K = 68,7 °C; cálculo 68,7 °C). La lección lo presenta como «cuenta simplificada» |
| Destilación a vacío: capilar que borbotea aire o gas inerte, vigilar obturación por cristalización; calefacción solo con el vacío establecido; enfriar antes de detener el vacío (aire en balón caliente puede inflamar el residuo); paso lento a presión normal | NTP 464 | Leído |
| Éteres forman peróxidos al envejecer y con la luz; el peróxido se concentra y explota cuando queda solo; prueba de peróxidos antes de destilar | NTP 464 | Leído |
| Rotavapor: no llenar en exceso, no llevar a sequedad si hay peróxidos, enfriar antes de eliminar el vacío, trampa refrigerada | NTP 464 | Leído |
| Secuencia del rotavapor: refrigerante y colector a −15 °C con agua-etilenglicol (1+1); vacío aplicado despacio con válvula de aguja para minimizar espuma; después de vacío completo, balón al baño de 35 °C | FDA PAM, sección 401 | Leído |
| Metanol: hierve a 64,5 °C a 1013 mbar y a 28,2 °C a 200 mbar; presión de vapor a 35 °C = 280 mbar | Antoine NIST metanol, 288,1-356,83 K (5,20409; 1581,341; −33,50) | Recalculado (64,55 °C frente a 337,8 K = 64,7 °C de NIST: coincide en 0,2 °C; 28,23 °C; 279,5 mbar) |
| 35 − 28,2 = unos 7 °C | Cálculo | Recalculado (6,8) |
| Pasos de la recristalización (disolvente que disuelve en caliente y poco en frío, mínima cantidad, filtrar en caliente, enfriar despacio, lavar en frío, secar, comprobar pureza) | «Cristalización a fondo» (FX-101: disolver a 80 °C, filtrar en caliente por el cartucho, rampa mínima, finos y oclusión) y «Disoluciones y solubilidad a fondo» (lavado en frío); punto de fusión en «Punto de fusión y análisis térmico a fondo» | Leído en la app. La receta general de laboratorio no se leyó en una fuente externa gratuita |
| Recristalización: 40 mL; 0,8 g; 92 %; con 48 mL: 0,96 g y 90,4 % | Cálculo, valores de ejemplo | Recalculado |
| Sublimación con dedo frío a vacío; impurezas no volátiles quedan abajo | Universidad de Barcelona (TALQ), JoVE, patentes | Solo fragmento de buscador; marcado en el texto |
| Punto triple del CO₂: 216,58 K (−56,6 °C), 5,185 bar | NIST WebBook | Leído; 5,185 / 1,01325 = 5,1 (recalculado) |
| Punto triple del agua: 0,0061 bar | NIST WebBook | Leído |
| Sublimación y liofilización | «La materia a fondo» (app) | Leído en la app |
| Por debajo de la presión del punto triple no existe líquido | Definición de punto triple y diagrama de fases | Conocimiento de física general, coherente con los datos NIST; no leído textualmente en una fuente accesible |
| Estufa: temperaturas moderadas, sin superar en ningún punto la de autoinflamación; estufa ventilada con aspiración; secado en frío de un producto empapado de líquido volátil | NTP 464 (evaporación y secado) | Leído |
| Requisitos de estufas (extracción, seguridad aumentada, doble termostato) | NTP 433, ya en «El laboratorio a fondo» | Leído |
| Método de humedad: pesasustancias con tapadera, como máximo 0,3 g/cm²; estufa a 130 °C; tapar antes de sacar; enfriar en desecador; duplicados ≤ 0,1 por 100 en valor absoluto | Orden 2/11/1987, método 2 | Leído (130 °C no se cita en la lección: es de galletas) |
| 5 / 0,3 = 16,7 cm² | Cálculo | Recalculado |
| Fuerza G = 1,118 × 10⁻⁵ × r × rpm² | «La centrífuga a fondo» (app) | Leído en la app y recalculado |
| 10 cm, 4000 rpm: 1789 g; 50 cm, 1200 rpm: 805 g; 15 cm, 1500 rpm: 377 g | Cálculo; radios valores de ejemplo; 1500 rpm de la FDA PAM | Recalculado (1788,8; 805,0; 377,3) |
| Centrífugas: rotura del rotor, heridas, explosión por atmósfera inflamable, bioaerosoles; carga simétrica, tapa con enclavamiento, procedimiento para roturas y bioaerosoles | NTP 433 | Leído |
| Nutsche como «Büchner grande» | `src/content/media.ts` (pie de la imagen del Büchner: «la versión de laboratorio del filtro nutsche») y «Filtros a fondo» | Leído en la app |
| Quiz: 9 cm y 300 mbar abs: 71300 × 0,00636 = 454 N (46 kg); 2 × 25 mL con K = 3: 16 %; Soxhlet 0,5750 / 5,000 = 11,5 %; 12 cm y 3000 rpm: 1207 g; recristalización 20 g: 50 mL, 1,5 g, 92,5 % | Cálculo, valores de ejemplo | Recalculado con python (453,6 N; 0,16; 11,50; 1207,4; 92,5) |
| Plant: lote KZ-14, CR-305, FD-402, R-311; 18,1 / 20 = 90,5 % | Valores de ejemplo ficticios | Inventados y declarados; 90,5 recalculado |

## Lo que quise incluir y dejé fuera
- Descripción oficial del Soxhlet y de la sublimación con dedo frío: no encontré una fuente oficial gratuita en un host accesible (IUPAC Gold Book bloqueado por Cloudflare; chemtl.york.ac.uk y otras universidades no accesibles). Solo fragmentos de buscador; se describen de forma cualitativa y se avisa en el texto.
- Definiciones IUPAC de filtración, destilación fraccionada, recristalización y sublimación: goldbook.iupac.org devolvía la página de comprobación de Cloudflare.
- Regla práctica del rotavapor de «20 °C entre baño, vapor y refrigerante» (de fabricantes): no leída en fuente accesible. En su lugar, la secuencia de la FDA y el cálculo con Antoine.
- Número de platos teóricos de columnas de laboratorio concretas (Vigreux, de relleno) y diferencia mínima de puntos de ebullición para destilación simple: sin fuente leída.
- Paso a paso oficial del embudo de decantación (volumen máximo de llenado, cuántas veces aliviar): sin fuente gratuita leída; se dejan solo los pasos coherentes con la NTP 464 y la física.
- Filtración en caliente con embudo precalentado y papel de pliegues: sin fuente leída; se quitó.
- Presiones de vapor de sólidos que subliman (naftaleno, yodo, cafeína): NIST no daba presión del punto triple para estos en la página leída.
- Duración típica de un ciclo del Soxhlet: sin fuente; solo las «unas ocho horas» del método oficial.
- Temperaturas de estufa para principios activos (pérdida por secado de farmacopea): de pago; se remite a «El agua en la muestra a fondo».

## Ideas para la capa visual
- Esquema animado del montaje de filtración a vacío (Büchner, junta, Kitasato, frasco de seguridad, bomba) al lado del filtro Nutsche, con flechas de presión: 1013 mbar arriba, 200 mbar abajo. Ya hay foto del Büchner en `media.ts` (`buchner`).
- Simulación del Soxhlet: la cámara se llena gota a gota y el sifón la vacía; contador de ciclos y color del matraz que se oscurece con lo extraído.
- Gráfico interactivo de la destilación fraccionada hexano-heptano: escalones de la tabla (líquido 50 %, vapor 71 %, etc.) sobre las curvas de líquido y vapor, con un deslizador de número de etapas.
- Diagrama de fases presión-temperatura del agua y del CO₂ con el punto triple marcado y la presión atmosférica como línea horizontal, para ver por qué el hielo seco sublima y por qué el liofilizador trabaja por debajo de 6,1 mbar.
