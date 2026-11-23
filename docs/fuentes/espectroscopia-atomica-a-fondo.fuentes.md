# Fuentes: espectroscopia-atomica-a-fondo

Documentos leídos (descargados con curl y pdftotext en `scratchpad/lecciones/tmp-atomica/dl/`):

- **EAM 4.1** FDA, *Flame AAS Determination of Lead and Cadmium Extracted from Ceramic Foodware*, v1.1 (2010), en el zip «EAM archive - Methods (current)» https://www.fda.gov/media/94996/download (la FDA dice que sigue siendo la versión vigente y válida). Leído entero.
- **EAM 4.3** FDA, *GFAAS Determination of Cadmium and Lead in Food Using Microwave Assisted Digestion*, v1.2 (2010), mismo zip. Leído entero.
- **EAM 4.2** (horno de grafito, cerámica) y **EAM 4.5** (vapor frío de mercurio), mismo zip. 4.5: resumen, equipo y condiciones.
- **EAM 4.4** ICP-AES, v1.1 (2010), https://www.fda.gov/media/95162/download. Leído alcance, tablas, determinación, cálculo, informe.
- **EAM 4.7** ICP-MS, v1.3 (abril 2025), https://www.fda.gov/media/191258/download. Leído alcance, tablas 1a/1b, equipo, reactivos, control de calidad, determinación, tabla 6 de interferencias.
- **EAM 3.6** Performance (dic. 2021), https://www.fda.gov/media/89653/download: apartados 3.6.1 (GFAAS), 3.6.3 (ICP-OES) y 3.6.4 (ICP-MS).
- **EAM 3.2** Terminology, https://www.fda.gov/media/89337/download (cifras de mérito; LOD, LOQ, sensibilidad).
- **EAM 1** (visión general), https://www.fda.gov/media/153993/download: no aporta datos técnicos.
- **ICH Q3D(R2)** (2022), https://database.ich.org/sites/default/files/Q3D-R2_Guideline_Step4_2022_0308.pdf: apartados 7, 8, 9, 10, tablas A.2.1 y A.2.2, ficha del paladio, apéndice 4 entero.
- **ORA Lab Manual Vol. IV Sección 3** (IV-03, rev. 03, 2022), https://www.fda.gov/media/73554/download, y **Sección 1** (IV-01), https://www.fda.gov/media/73548/download: pasajes sobre técnicas, fluorescencia y capa fina.
- **Kuphaldt**, *Lessons in Industrial Instrumentation*: «Fluorescence Measurement» https://control.com/textbook/continuous-analytical-measurement/fluorescence/ y «Spectroscopy» https://control.com/textbook/chemistry/spectroscopy/.

## Tabla de afirmaciones

| Afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| Digestión con ácido nítrico y agua oxigenada en recipientes cerrados con microondas | EAM 4.3.2, 4.4.2, 4.7.5 | Leído |
| El paladio metálico es estable al aire y resiste a la mayoría de reactivos salvo agua regia y ácido nítrico | Q3D(R2), ficha del paladio | Leído |
| Tres atomizadores: llama, horno de grafito, plasma | EAM 4.1, 4.3, 4.4, 4.7 | Leído (síntesis) |
| FAAS: llama de aire y acetileno | EAM 4.1.6 («breathing quality air and ... acetylene») | Leído |
| Lámpara de cátodo hueco o de descarga sin electrodos específica del elemento | EAM 4.1.6 | Leído |
| Pb a 283,3 o 217,0 nm; Cd a 228,8 nm | EAM 4.1.6 | Leído |
| Un elemento cada vez (primero Pb, luego Cd) | EAM 4.1.10 | Leído |
| Corrección de fondo obligatoria; absorción y dispersión no específicas dan resultados altos | EAM 4.1.5 | Leído |
| Zona lineal 0,050 a 0,350-0,400 de absorbancia | EAM 4.1.4 | Leído |
| 20 a 30 min de calentamiento tras encender la llama | EAM 4.1.10 | Leído |
| Solape de rayas extremadamente raro con lámparas del elemento | EAM 4.1.5 | Leído |
| Concentración característica: la que da 0,0044 de absorbancia; ±20 % de la especificación del fabricante | EAM 4.1.4 y 4.1.9 | Leído |
| 10^-0,0044 = 0,990; absorbe 1,0 % | Cálculo | Recalculado (0,98992) |
| Ejercicio 2: pendiente 0,0550 y 0,0500; c₀ 0,070 | Valor de ejemplo declarado | Recalculado: 0,080; 0,088; margen 0,056-0,084 |
| GFAAS: 20 µL; argón; plataforma; programa 110/130/200/820/1700/2400 °C para Pb | EAM 4.3 tabla 3 y 4.3.2 | Leído |
| Funciones de cada paso (secar, pirólisis, atomizar, limpiar) | EAM 4.3.6 (pasos «dry», «char») y 3.6.1 («clean-out step»); nombre «pirólisis» por el «char» del método | Leído (interpretación de los pasos) |
| Señal por área de pico (A·s) | EAM 4.3.6 («peak area (integrated absorbance)») | Leído |
| Modificador Mg + NH₄H₂PO₄; Zeeman | EAM 4.3.2 y 4.3.4 | Leído |
| El modificador ayuda a que el analito no se pierda antes; matriz con pérdida en la pirólisis | EAM 3.6.1.1 y 3.6.1.2 (pérdida pre-atomización «even when using a matrix modifier») | Leído; la frase sobre la función del modificador es una síntesis |
| Zeeman separa la absorción atómica de la absorción ancha de moléculas | EAM 3.6.1.1 | Leído; «usa un imán» de EAM 4.3.3 (nota de seguridad sobre el imán) |
| m₀: masa que da 0,0044 A·s; mínimo 30 pg Pb a 283,2 nm y 1,3 pg Cd | EAM 4.3.3 y 3.6.1.4 | Leído (la definición 0,0044 A·s se deduce de la de concentración característica de 4.1; el EAM remite a 3.2.1) |
| Ejercicio 3: 20 µL × 5 µg/L = 100 pg; 0,0147 A·s | Valor de ejemplo declarado; cálculo | Recalculado |
| Precisión entre dos inyecciones ≤ 7 % cuando la respuesta ≥ 0,012 A·s | EAM 4.3.6 | Leído |
| LOQ en disolución de Pb: llama 1,0 mg/L; horno 2,7 µg/L; cociente 370 | EAM 4.1 tabla 1 (ASQL 1,0 mg/L) y 4.3 tabla (ASQL 2,7 µg/L); cálculo | Leído y recalculado (370,4) |
| Interferencias del horno: memoria, espectral, matriz; diluir o adiciones estándar | EAM 3.6.1.1 | Leído |
| UV al atomizar; a 3 pies del imán | EAM 4.3.3 | Leído |
| Vapor frío: SnCl₂ reduce Hg(II) a Hg(0); 253,7 nm | EAM 4.5.2 y 4.5.3 | Leído |
| Na 589,59 nm y K 766,49 nm | EAM 4.4 tabla 3b | Leído |
| Fotómetro de llama = llama + filtro + detector | Fragmento de buscador (página docente de la Universidad de Liverpool) | Solo fragmento; no se pudo abrir. Afirmación cualitativa |
| La emisión en llama está entre las técnicas en uso | ORA IV-03, 8.1 («Atomic absorption, fluorescence, flame emission...») | Leído |
| ICP-AES: red de difracción, simultáneo o secuencial; 22 elementos; Pb 220,35, Ni 231,60 nm | EAM 4.4.2, 4.4.3, tablas 1 y 3b | Leído |
| Elementos con muchas líneas (hierro) pueden interferir | EAM 4.4.4 (9) («line-rich elements like iron») | Leído |
| Barrido de longitudes de onda; pico ancho o doble, sesgo positivo; pico en el fondo, sesgo negativo o negativo | EAM 4.4.6 nota y 3.6.3.1 | Leído |
| Corrección entre elementos con Al, Ca, Fe, Cr, Cu, Mn, Ti o V > 20 mg/L | EAM 4.4.6 (5) | Leído |
| Varias líneas, coinciden ±10 % | EAM 3.6.3.5 | Leído |
| ICP-MS cuadrupolar; interferencias isobárica (114Cd/114Sn), doble carga (150Sm++, 150Nd++ en 75), poliatómica (40Ar35Cl en 75As); matriz < 0,2 % sólidos | EAM 3.6.4.1 | Leído |
| Masas 74,9216 y 74,9312; diferencia 0,0096; el cuadrupolo típico no separa < 1 unidad | EAM 3.6.4.1; cálculo | Leído y recalculado |
| Celda de colisión con helio y discriminación por energía para atenuar poliatómicas | EAM 4.7.3 (1) y 4.7.7 | Leído. La explicación de por qué (choques de moléculas voluminosas) se eliminó por no estar en la fuente |
| ¹⁰⁴Pd²⁺ sobre ⁵²Cr y ¹⁰⁶Pd²⁺ sobre ⁵³Cr | EAM 4.7 tabla 6 | Leído |
| Patrón interno Ge, Rh, Ir, Bi; compensa deriva y efecto matriz | EAM 4.7.4 (3) y 4.7.7 | Leído |
| Diluir si el patrón interno difiere > 40 % del blanco de calibración | EAM 3.6.4.1 | Leído |
| Dos isótopos; diferencia > 20 % RPD indica interferencia | EAM 4.7.6 | Leído |
| Ejercicio 5: 55000/100000; 4,0 y 5,2 µg/L; 26 % | Valores de ejemplo declarados; cálculo | Recalculado (26,1 %) |
| Tabla de límites del Pb: llama 1,0 mg/L; horno 2,7 µg/L; ICP-OES detección 0,17 mg/L; ICP-MS 0,11 µg/kg | EAM 4.1, 4.3, 4.4 (ASDL), 4.7 tabla 1a (ASQL) | Leído |
| Ejercicio 6: 0,500 g × 10 µg/g en 50 mL = 100 µg/L | Valor de ejemplo declarado; cálculo | Recalculado |
| Fluorescencia: absorbe onda corta (UV) y emite onda larga | ORA IV-01 (microscopía de fluorescencia) y Kuphaldt | Leído |
| Quinina de la tónica fluoresce bajo luz negra | Kuphaldt | Leído |
| Ejercicio 7: 1240/350 = 3,54 eV; 1240/450 = 2,76 eV | Valores de ejemplo declarados; fórmula 1240/λ de la lección «Electrones, orbitales...» | Recalculado |
| Lámpara y fotomultiplicador sin línea recta; señal cero sin fluorescencia; filtro para NO, separación para PAH | Kuphaldt, analizador de SO₂ | Leído |
| Fluorescencia: USP 853 y 1853; detector de HPLC; placas de capa fina con aditivo fluorescente; «fluorescence quenching» | ORA IV-03 | Leído |
| Q3D: PDE Pd oral 100, parenteral 10, inhalación 1,0 µg/día; opción 1: 10, 1 y 0,1 µg/g | Q3D tablas A.2.1, A.2.2 y ficha del paladio | Leído |
| Derivación: LOEL 1,2 mg/kg/día, 50 kg, factores 12 × 10 × 1 × 1 × 5; F5 = 5 por usar un LOEL; = 100 µg/día | Q3D ficha del paladio; cálculo | Leído y recalculado |
| Parenteral = oral/10 por baja absorción oral; inhalación = oral/100 | Q3D ficha del paladio | Leído |
| Opción 2b, ecuación 2 (suma de Ck × Mk ≤ PDE) | Q3D apartado 7 | Leído |
| Ejemplo: 2,5 g/día, 0,200 g de API, Pd en API hasta 500 µg/g | Q3D apéndice 4, tablas A.4.1 y A.4.5 | Leído; 100/0,2 = 500 recalculado |
| Opción 3: producto terminado con ecuación 1 | Q3D apartado 7 | Leído |
| Ejemplo ilustrativo: Pd 20 µg/g en el API × 0,2 g = 4 µg; umbral 30 % | Q3D tabla A.4.8 y apartado 5 | Leído |
| Ensayo específico de cada elemento; farmacopea o alternativa adecuada | Q3D apartado 9 | Leído |
| Cambios de ruta, materias primas, proceso, equipos: reevaluar | Q3D apartado 10 | Leído |
| Fórmula: (S × FD − blanco) × V / m | EAM 4.3.7 y 4.4.7 (con MCF = 1) | Leído |
| Ejercicio 9: (8,0 − 0,2) × 0,050 / 0,2500 = 1,56 µg/g; × 0,200 = 0,31 µg/día | Valores de ejemplo declarados; cálculo | Recalculado (0,312) |
| Traza entre LOD y LOQ | EAM 4.3.9 y 4.4.9 | Leído |
| Quiz: 160 pg; 5 µg/g; 400 µg/g; 0,56 µg/g | Valores de ejemplo declarados; cálculo | Recalculado |
| Equipos de fabricación como fuente de impurezas elementales (hoja de producción) | Q3D apartado 5 y tabla A.4.7 | Leído |
| Planta y hoja: códigos HZ-720, FC-725, R-740, CF-745, SD-750, QB-40, LP-910 y todas sus cifras | Valor de ejemplo declarado | Ficticio |

## Dejado fuera por no poder verificarlo

- Temperaturas de la llama de aire-acetileno y de óxido nitroso-acetileno, y temperatura del plasma de argón (ninguna fuente gratuita leída da cifras).
- Llama de óxido nitroso para elementos refractarios.
- Interferencias químicas e iónicas en la llama y el uso de supresores de ionización (cloruro de cesio o potasio). El EAM solo cita la supresión de ionización en ICP-MS para elementos con potencial < 9 eV.
- Longitudes de onda del paladio en absorción atómica (244,8 y 247,6 nm) e isótopos 105 y 108 con sus interferencias: NIST ASD no accesible.
- Cifras de la fotometría de llama (interferencia Na/K 5:1 de Standard Methods 3500-K B, límites de ISO 9964-3): solo en fragmentos de buscador; NEMI no accesible.
- Rendimiento cuántico, efecto de filtro interno, desactivación (*quenching*) por oxígeno y pérdida de linealidad de la fluorescencia a concentraciones altas: no hay fuente gratuita leída (solo un fragmento de una copia en slideshare de un texto de farmacopea).
- Textos de los capítulos USP 232, 233, 852 y 853 y Ph. Eur. 2.2.22, 2.2.23 y 2.4.20 (de pago).
- Límites de detección propios del paladio por cada técnica.

## Ideas para la capa visual

1. Esquema comparado de los tres atomizadores: lámpara de cátodo hueco, llama y monocromador (FAAS); tubo de grafito con su programa de temperatura en escalones (GFAAS); antorcha de plasma con espectrómetro óptico o de masas (ICP-OES e ICP-MS).
2. Gráfico del programa de temperatura del horno de grafito (110, 130, 200, 820, 1700 y 2400 °C frente al tiempo) con el pico de absorbancia apareciendo solo en el paso de atomización.
3. Simulación interactiva del espectro de masas del ICP-MS alrededor de m/z 75: el pico del ⁷⁵As y el del ⁴⁰Ar³⁵Cl superpuestos, que se separan al activar la celda de colisión.
4. Diagrama del fluorímetro a 90 grados (lámpara, cubeta y fotomultiplicador fuera de línea) junto a un espectro de excitación a 350 nm y de emisión a 450 nm.
