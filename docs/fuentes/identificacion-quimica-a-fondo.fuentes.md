# Fuentes de «Identificar sustancias por sus reacciones a fondo» (`identificacion-quimica-a-fondo`)

Hueco n.º 11 del informe de auditoría del temario (LACC 0066 RA1 y RA4; FPFBA 1388). Lecciones leídas enteras para no repetir: `grupos-funcionales-a-fondo`, `espectroscopia-a-fondo`, `hplc-a-fondo`, `otras-tecnicas-a-fondo`, `estructura-electronica-a-fondo`, `laboratorio-seguridad-a-fondo`; además, las partes pertinentes de `analisis-termico-a-fondo` (punto de fusión e impurezas), `gravimetria-a-fondo` (sulfato de bario) y `volumetrias-especiales-a-fondo` (argentometría, Volhard, cloruro de un clorhidrato).

## Documentos

- **Q6A**: ICH Q6A, *Specifications: test procedures and acceptance criteria for new drug substances and new drug products: chemical substances*, Step 4, 6/10/1999. https://database.ich.org/sites/default/files/Q6A%20Guideline.pdf (descargado y leído en esta sesión: 2.8, 3.2.1 b, 3.3.1 a y d).
- **Q7**: ICH Q7, apartados 7.30–7.32 (copia de una sesión anterior en `src_alcoa/q7.txt`, descargada de https://database.ich.org/sites/default/files/Q7%20Guideline.pdf; leída en esta sesión).
- **BOE-1977**: Orden de 31 de enero de 1977, métodos oficiales de análisis de aceites y grasas, cereales, productos lácteos y derivados de la uva, texto consolidado, https://www.boe.es/buscar/act.php?id=BOE-A-1977-16116 (copia en `tmp-opticas/BOE-A-1977-16116-consolidado.txt`; leídos en esta sesión: anexo I, métodos 27, 29 y 40; anexo III, método 2, proteínas de la leche).
- **BOE-1979**: Orden de 31 de julio de 1979, métodos oficiales de análisis de aceites, productos cárnicos, cereales, fertilizantes, fitosanitarios, lácteos, piensos, aguas y derivados de la uva, texto consolidado, https://www.boe.es/buscar/act.php?id=BOE-A-1979-21118 (copia en `tmp-opticas/BOE-A-1979-21118-consolidado.txt`; leídos: productos cárnicos, método 2, almidón; piensos, método 3, proteína total; derivados de la uva, método 16, prolina).
- **BOE-1987**: Orden de 2 de noviembre de 1987, métodos oficiales de análisis de galletas, BOE 24/11/1987, https://www.boe.es/boe/dias/1987/11/24/pdfs/A34907-34913.pdf (copia en `tmp-oplab/dl/boe1987.txt`; leído el método 4, lavado hasta que el filtrado no dé precipitado con nitrato de plata).
- **NIST**: NIST Chemistry WebBook, fichas de fase (Mask=4) de anilina (C62533), acetanilida (C103844), o-toluidina (C95534), m-toluidina (C108441) y p-toluidina (C106490), https://webbook.nist.gov/cgi/cbook.cgi?ID=C62533&Units=SI&Mask=4 y análogas (descargadas en `tmp-identificacion/dl/`). Las fichas de 2,4-dinitrofenilhidrazonas (C1567891, C1019574, C1157842, C958601) no tienen temperatura de fusión.
- **ORA**: FDA, *ORA Lab Manual Vol. IV Section 3 – Drug Chemistry Analysis* (MAN-000056, rev. 03, 07/10/2022), copia en `tmp-otras/dl/drugchem.txt` descargada de fda.gov en una sesión anterior; leídos el apartado 8.4.1 y el anexo de muestras de formación.
- **EMA-CHEM**: EMA/CHMP/QWP/49484/2026, *Guideline on the chemistry of active substances*, 16/02/2026, https://www.ema.europa.eu/en/documents/scientific-guideline/guideline-chemistry-active-substances_en.pdf (copia en `tmp-otras/dl/emachem.txt`; la descarga de hoy devolvió HTML en vez del PDF; leída la copia, lista de pruebas de estructura).
- **CLP**: Reglamento (CE) 1272/2008, texto original, DOUE L 353, https://www.boe.es/doue/2008/353/L00001-01355.pdf (copia en `src_grupos/dl/clp.txt`; anexo VI tabla 3.1 y anexo III).

## Tabla de afirmaciones

| Afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| En un ensayo cualitativo oficial la expresión de resultados es «Positivo o negativo» | BOE-1977, anexo I, 40.5 | Leído |
| Límite de detección de la reacción de Pavolini: 0,25 % en mezcla con aceites de oliva y soja; color azul de Prusia oscuro con furfurol (en anhídrido acético) y ácido sulfúrico | BOE-1977, anexo I, 40.3–40.4 | Leído |
| Cloruro: residuo con una gota de ácido nítrico y nitrato de plata; «precipitado coposo de cloruro de plata o una turbidez para pequeñas cantidades» | BOE-1977, anexo I, 29.4.3 | Leído |
| Ensayo en blanco con el mismo ácido clorhídrico; comparar turbidez; «Ligeras diferencias no deben interpretarse positivamente» | BOE-1977, anexo I, 29.4.3 | Leído (cita literal) |
| Magnesio con quinalizarina y sosa: precipitado fino azul; sin magnesio, violeta azulado; blanco positivo obliga a preparar ácido nuevo y repetir | BOE-1977, anexo I, 29.4.4 | Leído |
| Calcio con la sal sódica de la osazona del ácido dihidroxitartárico: precipitado amarillo | BOE-1977, anexo I, 29.4.5 | Leído |
| Comparar con un patrón (leche con fenolftaleína) | BOE-1979, productos lácteos, 15(a) | Leído (idea de patrón de comparación) |
| Sulfato con cloruro de bario: sulfato de bario, polvo blanco casi insoluble | Lección `gravimetria-a-fondo` (y sus fuentes) | Remisión a la app |
| Hierro(III) y tiocianato: color marrón rojizo (indicador de Volhard) | Lección `volumetrias-especiales-a-fondo`; BOE-1979, piensos, método de cloruros (sulfato amónico férrico y sulfocianuro) | Remisión a la app; leído en el BOE |
| Kjeldahl: digestión con ácido sulfúrico y catalizador, el nitrógeno orgánico pasa a amoniacal; sosa; destilación; recogida en ácido bórico; valoración con HCl 0,1 N; blanco con agua | BOE-1977, anexo III, método 2 (2.1, 2.3, 2.4.2, 2.4.3) | Leído |
| Kjeldahl: comprobar con papel de tornasol la neutralidad del destilado; recogida en ácido sulfúrico valorado | BOE-1979, piensos, 3.4.2 | Leído |
| Fórmula % N = (V − Vb) × c × 14,007 / masa (mg) × 100; 1 mol HCl por mol N | Cálculo (estequiometría NH₃ + H⁺) | Deducido; el BOE da la fórmula como imagen no legible en el texto |
| «Lavar el precipitado con agua destilada hasta que el filtrado no dé precipitado con nitrato de plata» | BOE-1987, método 4.4 | Leído (cita literal) |
| Ejercicio 1: 30 000 mg/L, factor 1/5, umbral 10 mg/L; 6000, 1200, 240, 48, 9,6; 5 lavados | Valores de ejemplo declarados; cálculo | Recalculado con python |
| Línea de emisión del sodio 589,59 nm | Lección `estructura-electronica-a-fondo` (FDA Elemental Analysis Manual 4.4) | Remisión a la app |
| Ensayo de Beilstein: alambre de cobre pulido calentado hasta no ver verde, mojado en la muestra; color verde definido indica cloro; positivo/negativo | BOE-1977, anexo I, método 27 | Leído |
| El amarillo del sodio tapa otros colores; vidrio azul de cobalto para filtrarlo | Fragmento de buscador (sin fuente leída) | Solo fragmento; sin cifras |
| Absorción atómica e ICP como sucesores instrumentales de la llama | Lecciones `estructura-electronica-a-fondo` y `otras-tecnicas-a-fondo` | Remisión a la app |
| Combustión: el carbono pasa a CO₂ y el hidrógeno a agua; los analizadores CHN queman unos miligramos, separan los gases y los miden | Fragmento de buscador (fabricantes y universidades, sin fuente leída) | Solo fragmento; no se da ninguna cifra del equipo |
| Masas atómicas C 12,011; H 1,008; N 14,007; O 15,999; CO₂ 44,009; H₂O 18,015 g/mol | Las del nivel 1 de la app; cálculo | Recalculado |
| Ejercicio 2: 5,210 mg CO₂ y 1,200 mg H₂O de 2,000 mg; C 1,422 mg, 71,10 %; H 0,1343 mg, 6,71 % | Valores de ejemplo (calculados para la acetanilida); cálculo | Recalculado (71,096 y 6,714) |
| Ejercicio 3: 200,0 mg, 14,75 mL, blanco 0,05 mL, HCl 0,1000 mol/L; 14,70 mL; 1,470 mmol; 20,59 mg; 10,30 % | Valores de ejemplo; cálculo | Recalculado (10,295) |
| Ejercicio 4: O 11,83 %; moles 5,920; 6,657; 0,7396; 0,7394; razones 8,01; 9,00; 1,00; 1,00; C₈H₉NO | Cálculo | Recalculado |
| Acetanilida 135,17 g/mol; teóricos C 71,09 %, H 6,71 %, N 10,36 % | Cálculo | Recalculado (135,166; 71,089; 6,712; 10,363) |
| Paso del halógeno unido al carbono a ion antes de valorarlo; en un clorhidrato el cloruro ya es ion | Principio de libro de texto (sin fuente leída para el método de mineralización; no se nombra ninguno); clorhidrato en `volumetrias-especiales-a-fondo` | Sin método concreto a propósito |
| EMA pide para la prueba de estructura «Elemental analysis with theoretical values» y «Characteristic chemical reactions which are diagnostic of the structure of the molecule» | EMA-CHEM, apartado de pruebas de estructura | Leído en la copia |
| «El almidón reacciona con el iodo dando coloración azul»; azul negro en presencia de almidón | BOE-1979, productos cárnicos, método 2 | Leído (cita literal) |
| Prolina con ninhidrina en medio ácido; lectura a 517 nm frente a curva patrón; blanco con agua | BOE-1979, derivados de la uva, método 16 | Leído |
| Toluidinas: T ebullición 473 ± 2, 476 ± 3 y 474 ± 1 K (199,85; 202,85; 200,85 °C, «entre 200 y 203 °C») | NIST | Leído; conversión recalculada |
| Anilina T fusión 267,0 ± 0,3 K (−6,15 °C, «−6 °C») | NIST | Leído; recalculado |
| Acetanilida T fusión 388 ± 2 K (114,85 °C, «unos 115 °C») | NIST | Leído; recalculado |
| Acetilación de una amina aromática (paracetamol desde 4-aminofenol con anhídrido acético) | Lección `grupos-funcionales-a-fondo` | Remisión a la app |
| Ejercicio 5: 0,931 g / 93,13 = 10,00 mmol; 1,352 g teóricos; 1,10 g; 81,4 % | Valores de ejemplo; cálculo (anilina 93,129 g/mol) | Recalculado (9,997 mmol; 1,3512 g; 81,41 %) |
| La impureza baja el inicio de fusión y ensancha el intervalo | Lección `analisis-termico-a-fondo` | Remisión a la app |
| Punto de fusión mixto: misma sustancia funde igual; distinta, antes y en más grados | Deducción de la idea anterior (principio de libro de texto, sin texto de farmacopea leído) | Razonamiento; ejercicio 6 con valores de ejemplo declarados |
| Q6A: identificación capaz de distinguir compuestos de estructura parecida; específica, p. ej. IR; un solo tiempo de retención no es específico; dos cromatografías de principio distinto o HPLC/UV de diodos, HPLC/MS, GC/MS aceptables | Q6A 3.2.1 b | Leído |
| Q6A: si es una sal, identificación específica para cada ion; basta un ensayo específico para la sal en sí | Q6A 3.2.1 b | Leído |
| Q6A: usar procedimientos de farmacopea cuando sean adecuados | Q6A 2.8 | Leído |
| Q6A: un solo enantiómero, la identidad distingue ambos enantiómeros y el racémico | Q6A 3.3.1 d | Leído |
| Ph. Eur. reúne estas reacciones en el capítulo 2.3.1 «Identification reactions of ions and functional groups» | Fragmento de buscador (copias secundarias; Ph. Eur. de pago) | Solo fragmento; dicho así en el texto |
| Paracetamol USP: identificación A infrarrojo, B UV, C TLC, más intervalo de fusión | ORA, muestra de formación n.º 1 | Leído |
| ICH Q7 7.30: al menos un ensayo de identidad por lote de material; 7.32: materiales peligrosos o muy tóxicos sin ensayo en planta con certificado; examen visual de envases, etiquetas y números de lote | Q7 | Leído |
| Nitrato de plata: H314, H410 (y H400) en la tabla de 2008; cloruro de bario: H301, H332; textos de las frases | CLP anexo VI tabla 3.1 y anexo III | Leído |
| Restos con metales al grupo de disoluciones acuosas, nunca al desagüe | Lección `laboratorio-seguridad-a-fondo` (NTP 480) | Remisión a la app |
| Quiz: 4,500 × 12,011 / 44,009 / 2,500 × 100 = 49,13 %; (16,20 − 0,10) × 0,1000 × 14,007 / 300,0 × 100 = 7,52 %; lavados 5000, 1250, 312,5, 78,1, 19,5: 5; 1,862 g anilina, 2,702 g teóricos, 85,1 % | Cálculo | Recalculado con python |

## Lo que se dejó fuera por no poder verificarlo

- El texto de la Farmacopea Internacional de la OMS (digicollections.net no accesible desde la sesión) y de la USP <191> (solo copias de terceros en drugfuture y scribd, no accesibles ni oficiales). No se reproduce ninguna reacción de farmacopea.
- Solubilidad del cloruro de plata en amoníaco (y su uso para distinguir cloruro, bromuro y yoduro): solo en fragmentos del buscador.
- Carbonato con ácido y desprendimiento de CO₂ como ensayo de identificación: sin fuente oficial leída.
- Colores de llama de potasio, calcio, bario y cobre: sin fuente leída (la del bario solo en un fragmento de la USP).
- Ensayos orgánicos clásicos (2,4-dinitrofenilhidrazina para aldehídos y cetonas, Tollens, Fehling, cloruro férrico para fenoles, fusión con sodio de Lassaigne): sin fuente gratuita leída; tampoco temperaturas de fusión de derivados de tablas (el NIST no las tiene para las hidrazonas probadas).
- Temperaturas de fusión de las acetotoluidinas: el NIST solo da temperaturas de ebullición.
- Cifras de funcionamiento de los analizadores CHN (masa de muestra, temperaturas, detector): solo fragmentos.
- Mineralización de halógenos orgánicos (combustión en frasco de oxígeno u otros): sin fuente leída.

## Ideas para la capa visual

1. Fotos de Wikimedia Commons (licencia libre) de un ensayo a la llama del sodio y de un precipitado de cloruro de plata en tubo de ensayo, junto al blanco.
2. Esquema del método Kjeldahl en tres pasos: matraz de digestión, destilación del amoníaco hacia el ácido y bureta de valoración.
3. Simulación sencilla del lavado de una torta: barra de concentración de cloruro que baja lavado a lavado frente a la línea del límite de detección (ejercicio 1).
4. Diagrama del punto de fusión mixto: dos capilares (muestra con auténtico y muestra con otro compuesto) y el intervalo de fusión de cada uno.
