# Fuentes: sistemas-dispersos-a-fondo

Lección «Coloides, emulsiones, espumas y tensioactivos a fondo» (nivel 1). Hueco n.º 19 del informe de auditoría (QI 0192: sistemas dispersos, coadyuvantes; FPFBA 1389 y 1394).

Documentos descargados y leídos en esta sesión (copias en `scratchpad/lecciones/tmp-dispersos/dl/`):

| Clave | Documento | URL |
|---|---|---|
| FDA-nano | FDA, Guidance for Industry «Drug Products, Including Biological Products, that Contain Nanomaterials» (abril 2022), glosario pp. 27-28 | https://www.fda.gov/media/157812/download |
| BOE-1976 | Orden de 5 de diciembre de 1975, métodos oficiales de análisis de suelos y aguas, BOE n.º 78 de 31/03/1976, p. 6477 (método 2(a) Textura, densímetro de Bouyoucos). La ecuación sale como imagen en el texto: se leyó en la página renderizada | https://www.boe.es/boe/dias/1976/03/31/pdfs/A06458-06491.pdf |
| NIST | NIST Chemistry WebBook, propiedades termofísicas a 1,01325 bar: agua (C7732185) y tolueno (C108883), 20 y 50 °C | https://webbook.nist.gov/cgi/fluid.cgi?Action=Data&ID=C7732185&Type=IsoBar&P=1.01325&TLow=20&THigh=80&TInc=10&TUnit=C&PUnit=bar&DUnit=kg%2Fm3&VisUnit=Pa*s (y la misma con ID=C108883) |
| R2026 | Reglamento (UE) 2026/405, de 11 de febrero de 2026, sobre detergentes y tensioactivos (DOUE serie L, 2.3.2026): art. 2.11 (definición de tensioactivo), anexo de etiquetado partes A y C (tipos de tensioactivo), derogación del 648/2004 con efectos del 23/09/2029 | https://www.boe.es/doue/2026/405/L00001-00059.pdf |
| R648 | Reglamento (CE) 648/2004, art. 2.6 (definición anterior de tensioactivo), para contrastar | https://www.boe.es/doue/2004/104/L00001-00035.pdf |
| INSST-P2 | INSST, temario de oposición, «Parte 2: Seguridad en el trabajo» (abril 2025), detectores ópticos de humo | https://www.insst.es/documents/d/portal-insst/parte-2-seguridad-en-el-trabajo-final-1 |
| KUP-echo | T. Kuphaldt, Lessons in Industrial Instrumentation, «Echo» (medida continua de nivel) | https://control.com/textbook/continuous-level-measurement/echo/ |
| KUP-fm | Kuphaldt, «Fluid mechanics» (viscosidad, número de Reynolds) | https://control.com/textbook/physics/fluid-mechanics/ |
| CFR-173.340 | 21 CFR 173.340 Defoaming agents | https://www.ecfr.gov/current/title-21/section-173.340 |
| PAM | FDA, Pesticide Analytical Manual vol. I, cap. 4 (secciones 401-402) | https://www.fda.gov/media/74505/download |
| FDA-793 | FDA, Guide to Inspections: Validation of Cleaning Processes (1993) | https://www.fda.gov/validation-cleaning-processes-793 |
| Q7 | ICH Q7, apartado 6.52 | https://database.ich.org/sites/default/files/Q7%20Guideline.pdf (copia ya descargada en `scratchpad/dl/q7.txt`) |

## Afirmación por afirmación

| Afirmación de la lección | Fuente | Cómo se comprobó |
|---|---|---|
| Coloide: una fase dispersa repartida en una fase continua, con dimensión lineal de la dispersa entre 1 y 1000 nm | FDA-nano, glosario «Colloids» | Leído en el documento |
| «Más grande que eso es una suspensión»; la disolución lleva moléculas o iones sueltos; la suspensión acaba depositándose | Deducción de la definición anterior y de «Disoluciones y solubilidad a fondo» y «La materia a fondo» (app) | Sin cifra propia; coherente con las lecciones de la app |
| 1 nm = milésima de µm; 1 µm = milésima de mm | Definición de prefijos SI | Cálculo (10⁻⁹ / 10⁻⁶ = 10⁻³) |
| Nombres emulsión (líquido en líquido), espuma (gas en líquido), aerosol (humo, niebla) | FDA-nano («Emulsion»); lección «La materia a fondo» (emulsión y espuma); INSST-P2 (humo) | Leído; «sol» y «aerosol» como nombres de clase: terminología habitual, sin definición oficial leída |
| El humo se detecta por difusión de luz (efecto Tyndall) | INSST-P2, detectores ópticos de humos | Leído en el documento |
| Una disolución no desvía la luz; un coloide sí y el haz se ve | Coherente con INSST-P2 y con la nefelometría de «Refractometría, polarimetría y turbidez a fondo» (BOE 1987) | Leído (por la lección enlazada); formulación cualitativa |
| Ley de Stokes v = g · Δρ · d² / (18 · η) | BOE-1976: x = Θ/t^½ con Θ = 1000 · [30 η h / (g (Ps − P1))]^½ (cgs, t en minutos, x en µm) | Leída en la imagen de la página; despejado: con v = h/(60 t), d(cm) = √(18 η v / (g Δρ)), d(mm) = √(30 η h / (g Δρ t)). Comprobado numéricamente con python: la fórmula del BOE devuelve 10,0 µm para el caso del ejercicio 1 |
| g = 9,807 m/s² | BOE-1976 (980,7 cm/s²) | Leído |
| «Es una aproximación para gotas pequeñas que se mueven despacio, una a una» | Fragmentos de buscador (Britannica, patentes): flujo laminar, esferas aisladas | Solo fragmento de buscador; sin cifra. Comprobado por cálculo que Re < 1 en todos los casos de la tabla (Re = 0,07 para 100 µm; para 1 mm sería 71 y por eso no se incluye) |
| Agua a 20 °C: 998,21 kg/m³ y 1,0016 mPa·s; tolueno 866,89 kg/m³ | NIST | Leído en la tabla |
| Agua a 50 °C: 988,04 kg/m³ y 0,54652 mPa·s; tolueno 838,76 kg/m³ | NIST | Leído en la tabla |
| Ejercicio 1: Δρ = 131,32; v = 7,14 × 10⁻⁶ m/s ≈ 0,43 mm/min; 140000 s ≈ 39 h | Cálculo | Recalculado con python (v = 7,143 × 10⁻⁶; t = 1,40 × 10⁵ s = 38,9 h) |
| Tabla de tiempos: 100 µm 23 min; 10 µm 39 h; 1 µm 162 días; 0,1 µm 44 años | Cálculo | Recalculado (23,3 min; 38,9 h; 162 d; 16 200 d = 44,4 años) |
| Altura de 1 m | Valor de ejemplo declarado | — |
| Ejercicio 2: Δρ = 149,28; v = 1,49 × 10⁻⁵ m/s; 67200 s ≈ 19 h; menos de la mitad | Cálculo | Recalculado (1,488 × 10⁻⁵; 18,7 h; cociente de velocidades 2,08) |
| La viscosidad de los líquidos baja al calentar | KUP-fm | Leído |
| Repulsión eléctrica entre partículas cargadas estabiliza la dispersión; el método añade un dispersante que genera fuerzas eléctricas de repulsión | BOE-1976, 2(a).1 («desarrollo de fuerzas eléctricas de repulsión entre las partículas del suelo») | Leído |
| Coalescencia: unión de gotas que chocan | Terminología; la idea de que las gotas «se juntan» está en «Extracción líquido-líquido a fondo» | Sin fuente oficial leída para la palabra; es descriptiva |
| Tensión superficial, idea | Lección «Enlaces y fuerzas entre moléculas a fondo» | Remisión |
| Definición de tensioactivo: grupos hidrófilos e hidrófobos; tensión superficial del agua por debajo de 45 mN/m; monocapas en la interfase agua/aire; emulsiones, microemulsiones o micelas; interfase agua/sólido | R2026, art. 2.11 (el texto dice «absorción en la interfase agua/sólido»; el 648/2004 decía «adsorción») | Leído en ambos reglamentos |
| Tipos en la etiqueta: aniónicos, catiónicos, anfotéricos, no iónicos, y jabón | R2026, anexo de etiquetado, parte A (h) y parte C | Leído |
| El nombre indica la carga de la cabeza | Significado de anión y catión (lecciones de la app de nivel 1) | Deducción terminológica; el reglamento no lo explica |
| Micela: partícula de tamaño coloidal en equilibrio con las moléculas o iones en disolución de los que se forma | FDA-nano, glosario «Micelles» | Leído |
| Concepto de concentración micelar crítica; las micelas alojan grasa en su interior; la CMC cambia con temperatura y medio | Fragmentos de buscador (artículos de disolución que citan USP <1092>) | Solo fragmento de buscador; por eso no se da ninguna CMC real, solo valores de ejemplo |
| Ejercicio 3: DX-30, 1,5 % v/v, CMC 0,1 %; 4,5 L; 15 veces; 0,45 L da 0,15 % | Valores de ejemplo declarados; cálculo | Recalculado |
| Emulsión: dos líquidos inmiscibles, uno en gotas en el otro, generalmente estabilizada con uno o más agentes emulsionantes; fases interna y externa | FDA-nano, glosario «Emulsion» | Leído |
| Sustancias con parte polar y grasa (subproductos, sales de ácidos orgánicos) actúan de tensioactivo; sólidos finos en la frontera | Deducción de la definición de R2026; sólidos finos y «sustancias que actúan como jabón»: «Extracción líquido-líquido a fondo» (allí ya marcado como fragmento de buscador) | Cualitativo, sin cifra |
| Superficie = 6 V / d; 1 L: 6, 60 y 600 m² | Geometría de la esfera (4πr² / (4/3 πr³) = 3/r = 6/d) | Cálculo con python |
| Emulsiones O/W y W/O | Terminología; FDA-nano habla de fase interna y externa | Sin definición oficial leída de las siglas |
| Tabla de métodos de rotura: esperar, calentar (viscosidad), centrifugar (g multiplicada), filtrar sólidos, cambiar pH | Stokes (BOE-1976) y NIST para calentar y centrifugar; filtrar y pH: «Extracción líquido-líquido a fondo» y «Ácidos, bases y pH a fondo» | Razonamiento sobre fuentes leídas |
| FDA en el embudo: agitar con cuidado para no provocar emulsión; añadir disolución saturada de NaCl si se forma; reposar ≥ 30 min; si no rompe, centrifugar 1500 rpm 5 min | PAM, sección 402 | Leído |
| Por qué funciona la sal (fase acuosa más densa, disuelve peor lo orgánico) | Fragmentos de buscador | Solo fragmento; el texto lo dice expresamente |
| La espuma necesita algo que estabilice las películas; tensioactivo forma capas en la interfase agua/aire | R2026, art. 2.11 | Leído (la parte «un líquido puro casi no la sostiene» es cualitativa, sin fuente oficial) |
| Fuentes de gas: CO₂ del bicarbonato; ebullición a vacío; gas disuelto al calentar | Lecciones de la app: «Ácidos, bases y pH a fondo», «Destilación a fondo», «Disoluciones y solubilidad a fondo» | Remisión |
| Ejercicio 5: espuma 90 % de gas (valor de ejemplo); 100 / 0,1 = 1000 L | Cálculo | Recalculado |
| La espuma engaña a los medidores de nivel por eco: eco débil en la superficie de la espuma y otro, debilitado, en la del líquido | KUP-echo | Leído |
| Arrastre al condensador | «Destilación a fondo» (app) | Remisión |
| Una gota de alcohol amílico si la superficie se cubre de espuma | BOE-1976, 2(a).4 | Leído |
| Dimetilpolisiloxano como antiespumante en alimentos, máx. 10 ppm en el alimento | CFR-173.340 | Leído |
| Ejercicio 6: 2000 kg × 10 ppm = 20 g | Cálculo | Recalculado |
| Registro de pesos y números de lote de materias primas | Q7, 6.52 | Leído |
| Controlar la espuma con caudal, calor y escalones de vacío | «Destilación a fondo» y «Extracción líquido-líquido a fondo» (app) | Remisión |
| Acción del tensioactivo al limpiar: moja (baja la tensión superficial), despega, retiene en micelas o emulsión | R2026 (bajar tensión superficial, adsorción en interfase agua/sólido, emulsiones y micelas) | Reformulación didáctica de la definición; el «despega» paso a paso no está en una fuente oficial |
| Cuatro factores de la limpieza | «Limpieza de equipos a fondo» (app) | Remisión |
| FDA: proveedores que no dan la composición; detergente no forma parte del proceso; no debe quedar (o muy poco); fácil de eliminar o elegir otro | FDA-793, apartado de detergentes | Leído |
| Plant, batchRecord y quiz: equipos R-215, T-260, producto IX-40, detergente DX-30, rpm, tiempos, 20 L de salmuera, 20 ppm | Valores de ejemplo y nombres ficticios | — |
| Quiz 1: 1,7 / 4 = 0,425; quiz 2: 30 / 2 = 15; quiz 3: 600; quiz 4: 1000; quiz 5: 8; quiz 6: 30 | Cálculo | Recalculado con python |

## Lo que quería incluir y quedó fuera

- **Límites oficiales IUPAC de tamaño** (Gold Book: «colloidal»): goldbook.iupac.org bloqueado. Se usa la definición de la FDA (1 a 1000 nm).
- **Valores reales de CMC** (por ejemplo, del laurilsulfato de sodio): solo vistos en fragmentos de buscador (USP <1092>, artículos); el documento del NIST que los recoge (NSRDS-NBS 36) está en nvlpubs.nist.gov, que no es accesible. Se usan valores de ejemplo.
- **Tensión superficial del agua** (unos 72 mN/m): no está en la tabla del NIST WebBook consultada ni en otra fuente leída; solo se da el umbral de 45 mN/m del reglamento.
- **Escala HLB** (balance hidrófilo-lipófilo) para elegir emulsionantes: sin fuente gratuita leída.
- **Movimiento browniano** como causa de que un coloide no sedimente, y la ecuación de Stokes-Einstein: sin fuente oficial leída.
- **Densidad de la salmuera saturada** y explicación cuantitativa del «salting out»: sin fuente leída.
- **Rompedores mecánicos de espuma** y antiespumantes concretos para síntesis de API: solo material de fabricantes; no se incluye.
- **Límite del número de Reynolds** para la validez de Stokes: solo fragmento de buscador; no se da cifra.
- **Definición de nanomaterial de la Comisión Europea** (Recomendación 2011/696/UE y 2022/C 229/01, 1 a 100 nm): leída, pero no hace falta para la lección y podía confundir con el rango de coloide.

## Ideas para la capa visual

1. Esquema de tres vasos (disolución, coloide, suspensión) atravesados por el haz de una linterna: invisible, visible y visible con poso en el fondo (efecto Tyndall).
2. Gráfica interactiva de la ley de Stokes: deslizadores de diámetro de gota, temperatura (viscosidad del agua del NIST) y diferencia de densidad, con el tiempo para subir 1 m en escala logarítmica.
3. Dibujo de una molécula de tensioactivo como cerilla, su colocación en la frontera agua y aceite, y una micela con la grasa dentro; al lado, una curva cualitativa de «moléculas sueltas frente a micelas» al subir la concentración, marcando la CMC.
4. Corte de un reactor con espuma subiendo: hueco libre, mirilla, radar de nivel con los dos ecos y la línea al condensador.
