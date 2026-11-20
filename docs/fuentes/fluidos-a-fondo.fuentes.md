# Fuentes de la lección `fluidos-a-fondo`

Aviso sobre el método. En esta sesión solo se pudieron descargar y leer documentos de **www.boe.es** y **www.insst.es**. No fueron accesibles: goldbook.iupac.org (devuelve una página de comprobación de Cloudflare en vez del contenido), webbook.nist.gov y www.ilo.org (fuera de la red permitida). Por eso **ningún dato de sustancias (densidad, viscosidad, presión de vapor) procede de una fuente leída**: todos los que aparecen son valores redondos declarados en el texto como «valor de ejemplo».

Claves: **Leído** = texto leído en el documento descargado. **Cálculo** = recalculado con python (`src_fluidos/verifica.py`), redondeando igual que en el texto. **Ejemplo** = valor redondo declarado en la lección como valor de ejemplo. **Libro de texto** = física elemental que el encargo permitía explicar sin fuente externa; no se leyó ninguna fuente para ello. **Repo** = coherencia con una lección ya publicada.

Documentos leídos:

- RD 2032/2009, unidades legales de medida (texto consolidado): https://www.boe.es/buscar/act.php?id=BOE-A-2010-927
- NTP 225, Electricidad estática en el trasvase de líquidos inflamables (PDF): https://www.insst.es/c/document_library/get_file?uuid=39deec50-a878-4a08-af28-55f547375c20&groupId=94886
- NTP 768, Trasvase de agentes químicos: medidas básicas de seguridad (PDF): https://www.insst.es/c/document_library/get_file?uuid=79d02f5c-a8be-4148-bf5f-a49754785a47&groupId=94886 (leída; al final no se cita ninguna cifra suya en la lección)

## Tabla

| Fórmula, dato o cifra de la lección | Fuente | Cómo se comprobó |
|---|---|---|
| Líquido: volumen fijo; gas: ocupa todo el recipiente; los líquidos casi no se comprimen y los gases sí | Libro de texto | Sin fuente leída |
| En un gas a temperatura constante, doblar la presión absoluta deja el volumen en la mitad (ley de Boyle) | Libro de texto; coherente con `inertizacion-a-fondo` («la cantidad de gas es proporcional a la presión absoluta») | Repo |
| Un líquido encerrado entre dos válvulas que se calienta sube mucho de presión | Libro de texto (dilatación térmica de un líquido casi incompresible) | Cualitativo, sin cifra |
| presión = fuerza / superficie; pascal = N/m² | RD 2032/2009, tabla de unidades derivadas («presión, tensión: pascal, Pa, N/m²») | Leído |
| Peso de 80 kg = 784,8 N; 19620 Pa sobre 0,04 m²; 7,8 millones de Pa sobre 0,0001 m²; 400 veces | Cálculo (80 × 9,81; 784,8/0,04; 784,8/0,0001 = 7 848 000; 0,04/0,0001) | Cálculo. Las superficies de zapato y tacón son valores de ejemplo |
| 1 bar = 100000 Pa = 100 kPa; mbar como submúltiplo | RD 2032/2009, tabla 8 («1 bar = 0,1 MPa = 100 kPa = 10⁵ Pa»; admite el milibar) | Leído |
| 1 kPa = 1000 Pa; 1 mbar = 100 Pa; 1 bar = 1000 mbar | Prefijos SI (RD 2032/2009) | Cálculo |
| Atmósfera normal = 101325 Pa = 1,01325 bar = 1013,25 mbar | RD 2032/2009, nota de la tabla («atmósfera normal, igual a 1,013 25 bar o 101 325 Pa») | Leído + cálculo |
| Boca de hombre de 0,5 m: 0,196 m²; con 0,5 bar, 9817 N, lo que pesa una masa de unos 1000 kg | Cálculo (π × 0,25² = 0,19635; × 50000 = 9817,5; / 9,81 = 1000,8 kg) | Cálculo. El diámetro es un valor de ejemplo |
| Absoluta = manométrica + atmosférica; vacío = por debajo del ambiente | Lecciones `unidades-y-conversiones` e `inertizacion-a-fondo` | Repo |
| P = ρ × g × h | Libro de texto (ley fundamental de la hidrostática) | Comprobada numéricamente en los ejemplos |
| g = 9,81 m/s² | Valor redondeado habitual, declarado así en el texto (el valor normal es 9,80665 m/s²; no se localizó en el RD leído) | Ejemplo declarado |
| 1 kg/L = 1000 kg/m³ | RD 2032/2009 (1 L = 10⁻³ m³) | Leído + cálculo |
| Densidad 1000 kg/m³ «para un líquido como el agua» | Ejemplo; coincide con `densidad` del repo (agua 1,00 kg/L) | Ejemplo declarado, no verificado en fuente externa |
| Densidad 870 kg/m³ «como el tolueno de la lección de densidad» | Ejemplo; coincide con `densidad` del repo (tolueno 0,87 kg/L). Un fragmento del buscador de una copia de la FISQ 0078 da densidad relativa 0,87, pero no se pudo abrir la ficha oficial | Ejemplo declarado |
| 10 m de agua: 98100 Pa = 0,981 bar | Cálculo (1000 × 9,81 × 10) | Cálculo |
| Reactor con 2,5 m: 24525 Pa = 0,245 bar; con 0,5 bar g encima, 0,745 bar g | Cálculo | Cálculo |
| Mismo reactor con 870 kg/m³: 21337 Pa = 0,213 bar | Cálculo (21336,75) | Cálculo |
| La presión del fondo no depende de la forma | Libro de texto (se deduce de P = ρgh) | Razonamiento |
| Nivel por presión: h = P/(ρg); 15000 Pa con 870 da 1,76 m; con 1000 da 1,53 m | Cálculo (1,7575 y 1,5291) | Cálculo |
| Transmisor de presión diferencial para depósitos con presión de gas | Libro de texto de instrumentación | Cualitativo, sin fuente leída |
| Q = V/t; 100 L/min = 6 m³/h; 1 m³/h = 16,7 L/min | Cálculo | Cálculo |
| 4000 L a 100 L/min = 40 min | Cálculo | Cálculo |
| Caudal másico = ρ × Q; 870 × 6 = 5220 kg/h; 100 × 0,87 = 87 kg/min | Cálculo | Cálculo |
| Q = v × A; A = π(D/2)² | Libro de texto / geometría | Comprobada en los ejemplos |
| Tubo de 50 mm: A = 0,001963 m²; 6 m³/h = 0,001667 m³/s; v = 0,85 m/s | Cálculo (0,0019635; 0,0016667; 0,8488) | Cálculo. El diámetro interior es un valor de ejemplo |
| Continuidad: de 50 a 25 mm el área es la cuarta parte y la velocidad se multiplica por 4: 3,4 m/s | Cálculo (3,395 con el valor sin redondear; 0,85 × 4 = 3,4) | Cálculo |
| 1 m/s en 50 mm = 7,07 m³/h, unos 118 L/min | Cálculo (7,0686; 117,8) | Cálculo |
| A más velocidad, más carga estática; máximo 7 m/s con líquidos de elevada resistividad; menos de 1 m/s con suspensiones de sólidos en líquidos inflamables | NTP 225, apartado «Control de la velocidad de flujo» | Leído |
| Viscosidad: resistencia a fluir; unidad Pa·s | RD 2032/2009 («viscosidad dinámica: pascal segundo, Pa s») | Leído (unidad). La definición es de libro de texto |
| 1 mPa·s = 1 cP | Libro de texto (1 P = 0,1 Pa·s) | No leído en fuente; conversión estándar |
| La viscosidad de los líquidos baja al calentar | Libro de texto | Cualitativo, sin cifra |
| Un líquido más viscoso filtra y se bombea peor | Libro de texto; coherente con `filtros-a-fondo` (ley de Darcy: caudal inversamente proporcional a la viscosidad) | Repo |
| Re = ρ × v × D / μ, sin unidad | RD 2032/2009 («número de Reynolds Re = ρvl/η») | Leído |
| Laminar por debajo de unos 2000 a 2300; turbulento por encima de unos 4000 | Libro de texto (umbrales habituales para tuberías, según el encargo) | No leído en fuente |
| Ejemplo 1: ρ 1000, μ 0,001 Pa·s, Re = 42500 | Cálculo con valores de ejemplo | Ejemplo + cálculo |
| Ejemplo 2: ρ 1200, μ 1 Pa·s, Re = 51 | Cálculo con valores de ejemplo | Ejemplo + cálculo |
| Pérdida de carga: sube con longitud, caudal, viscosidad y accesorios; baja con el diámetro | Libro de texto (Darcy-Weisbach, cualitativo) | No leído en fuente |
| Doblar el caudal multiplica la pérdida por cuatro aproximadamente (turbulento); 0,2 bar pasa a 0,8 bar | Libro de texto, presentado como aproximación; cálculo 0,2 × 4 | Cálculo |
| Idea de Bernoulli: altura, presión y velocidad se intercambian | Libro de texto | Sin ecuación ni cifra |
| Gravedad con 3 m y 870 kg/m³: 25604 Pa = 0,256 bar | Cálculo (25604,1) | Cálculo |
| Sifón: funciona con el tubo lleno; se corta si entra aire | Libro de texto | Cualitativo |
| Subir 6 m con nitrógeno: 51208 Pa = 0,51 bar | Cálculo (51208,2) | Cálculo |
| Altura máxima con vacío: 101325/(1000 × 9,81) = 10,33 m | Cálculo con la atmósfera normal del RD 2032/2009 | Cálculo |
| Con destino a 200 mbar abs: 81325 Pa, 8,29 m | Cálculo | Cálculo |
| Disolvente de 870: 11,87 m por densidad; con presión de vapor de 0,25 bar, 8,94 m | Cálculo; la presión de vapor es un valor de ejemplo declarado | Ejemplo + cálculo |
| Un líquido hierve cuando la presión baja hasta su presión de vapor, que crece con la temperatura | Libro de texto; coherente con `bombas` (cavitación) | Repo |
| Ventajas y riesgos de gravedad, nitrógeno, vacío y bomba | Razonamiento a partir de la física de la lección y de `bombas` e `inertizacion-a-fondo` | Sin fuente externa propia |
| Inflamables: evitar chorro libre, tubo de llenado hasta el fondo, velocidad muy reducida mientras el tubo no esté sumergido, interconexión equipotencial y puesta a tierra | NTP 225 | Leído |
| Tiempo de relajación mínimo: 30 s (líquidos inflamables conductores), 1 min (no conductores) | NTP 225, «Control de los tiempos de relajación» | Leído |
| Golpe de ariete: qué es y cómo se evita | Libro de texto; coherente con `tuberias-y-valvulas` («abre despacio») | Cualitativo, sin cifras |
| Ejemplo de planta: 2610 kg / 0,87 = 3000 L; 3000/75 = 40 min; 25 min × 75 = 1875 L; quedan 1125 L, 15 min | Cálculo; equipos y cifras ficticios | Cálculo |
| Test: 0,392 bar; 2,55 m; 40 min; 1,99 m/s; 30000; 1,2 bar; 10,33 m | Cálculo | Cálculo (`verifica.py`) |

## Lo que se quiso incluir y se dejó fuera por no poder verificarlo

- Densidad y viscosidad reales del agua a varias temperaturas (tabla de cómo baja la viscosidad al calentar): NIST no era accesible.
- Viscosidad real de disolventes (tolueno, metanol, acetona) y de la miel.
- Presión de vapor real de la acetona, el tolueno o el agua, para calcular la altura de aspiración real de cada uno: las fichas FISQ del INSST y las ICSC de la OIT no se pudieron abrir (solo fragmentos del buscador de una copia no oficial).
- Definiciones del IUPAC Gold Book (presión, viscosidad, número de Reynolds): la web devolvió una página de Cloudflare.
- Valor normal de la gravedad (9,80665 m/s²) como dato citado: no se encontró en el texto del RD leído; se usa 9,81 declarado como redondeo habitual.
- Fórmula de la subida de presión del golpe de ariete (Joukowsky) y cifras de velocidad de la onda.
- Fórmula de Darcy-Weisbach, factor de fricción y longitudes equivalentes de codos y válvulas.
- Ecuación de Bernoulli escrita y la velocidad de salida ideal por gravedad (Torricelli).
- Velocidades de diseño recomendadas en tuberías de proceso (m/s típicos) y relación entre DN y diámetro interior real.
- Límite v·d ≤ 0,5 m²/s de la NTP 225: se leyó, pero no se incluyó para no cargar la lección.
- NPSH con números.
- Cuánto sube la presión por grado en un líquido encerrado (dilatación térmica): se dejó cualitativo.
