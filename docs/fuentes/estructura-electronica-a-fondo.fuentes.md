# Fuentes de «estructura-electronica-a-fondo»

Documentos descargados y leídos (copias en `scratchpad/lecciones/tmp-estructura/dl/`):

- **NIST Chemistry WebBook**, datos de energética de iones en fase gas (Mask=20) de H, He, Li, Be, B, C, N, O, F, Ne, Na, Mg, Al, Si, P, S, Cl, Ar, K, Ca, Fe, Rb, Pd, Pt, Br, I, Cs. URL tipo `https://webbook.nist.gov/cgi/cbook.cgi?ID=C7440235&Mask=20` (Na). Se tomó la línea «IE (evaluated)» y, para la afinidad, el primer valor de la tabla «Electron affinity determinations».
- **Kuphaldt, Lessons in Industrial Instrumentation**, capítulo «Chemistry in Industrial Instrumentation»: https://control.com/textbook/chemistry/electronic-structure/ , https://control.com/textbook/chemistry/spectroscopy/ y https://control.com/textbook/chemistry/periodic-table-of-the-elements/ (licencia CC BY 4.0).
- **FDA, Elemental Analysis Manual (EAM)**: sección 4.4 (ICP-AES), https://www.fda.gov/media/95162/download , tabla 3b de longitudes de onda; sección 4.1 v1.1 (absorción atómica de llama, Pb y Cd), dentro del archivo https://www.fda.gov/media/94996/download .
- **Real Decreto 2032/2009** de unidades legales (texto consolidado), https://www.boe.es/buscar/act.php?id=BOE-A-2010-927 (copia ya descargada en `src_atomos/dl/rd2032.txt`).
- **Real Decreto 243/2022** (Bachillerato), Química de 2.º, saberes básicos, bloque A: copia en `auditoria-temario/boe/BOE-A-2022-5521.txt`.
- Lecciones de la app leídas para no repetir y para remitir: `atomos-a-fondo` (nivel1-atomos.ts, entera), `enlaces-a-fondo` (apartado de electronegatividad), `espectroscopia-a-fondo` (luz, fotón, E = h·ν), `otras-tecnicas-a-fondo` (ICP), `hidrogenacion-a-fondo` (Pd/C húmedo), `materiales-y-corrosion-a-fondo` (cromo en el acero inoxidable), `nivel1.ts` (tabla con Z del paladio = 46).

No accesibles en esta sesión: goldbook.iupac.org (página de comprobación de Cloudflare y luego fuera de la red), physics.nist.gov, www.nist.gov y pml.nist.gov (proxy rechaza la conexión).

## Tabla de afirmaciones

| Afirmación o dato | Fuente | Cómo se comprobó |
|---|---|---|
| Espectro de emisión: un elemento excitado emite colores propios, «huella dactilar» única | Kuphaldt, spectroscopy («Emission spectroscopy») | Leído |
| Espectro de absorción: faltan las mismas longitudes de onda que en la emisión; imagen del negativo | Kuphaldt, spectroscopy («Absorption spectroscopy», analogía de huellas) | Leído |
| Fotón con energía E = h·f = h·c/λ; solo ciertas energías por escalones fijos | Kuphaldt, spectroscopy; lección «Espectroscopia a fondo» | Leído |
| Electronvoltio aceptado con el SI | RD 2032/2009, tabla 7 | Leído |
| h = 6,626 070 15 × 10⁻³⁴ J·s; c = 299 792 458 m/s; e = 1,602 176 634 × 10⁻¹⁹ C; N_A = 6,022 140 76 × 10²³ mol⁻¹ (exactos) | RD 2032/2009, apartados 2.2, 2.3, 2.4 y 2.6 | Leído |
| E (eV) = 1240 / λ (nm) | Cálculo: h·c/e = 1239,84 eV·nm | Recalculado (calc.py) |
| 1 eV por átomo = 96,49 kJ/mol | Cálculo: e·N_A/1000 = 96,485 | Recalculado |
| Bohr propuso su modelo en 1913 | Fragmento de buscador (OpenStax University Physics 3, apartado 6.4) | Solo fragmento de buscador |
| Eₙ = −13,6 eV / n² en el modelo de Bohr | Fragmento de buscador (OpenStax, LibreTexts: Eₙ = −Rhc/n²) y comprobación propia: con 13,598 eV del NIST reproduce las cuatro rayas medidas que da Kuphaldt | Fragmento de buscador + recalculado contra dato leído |
| Energía de ionización del H = 13,598 eV (13,59844) | NIST WebBook, hidrógeno atómico; Kuphaldt da 13,5984 | Leído (dos fuentes) |
| E₁ = −13,6; E₂ = −3,40; E₃ = −1,51 eV | Cálculo: 13,598/n² | Recalculado |
| Rayas visibles del H: 656, 486, 434, 410 nm; serie de Balmer, saltos al nivel 2; 656 nm = 3→2, 486 = 4→2, 434 = 5→2, 410 = 6→2; la de 656 es la roja | Kuphaldt, spectroscopy | Leído |
| ΔE(3→2) = 1,889 eV y λ = 656,4 nm; 486,3, 434,2 y 410,3 nm para 4, 5 y 6 | Cálculo con 13,598 y 1240 | Recalculado (con h·c exacto salen 656,5/486,3/434,2/410,3) |
| Onda corta = fotón de más energía; salto pequeño = onda larga | Kuphaldt, spectroscopy | Leído |
| Bohr solo sirve para el hidrógeno | Kuphaldt critica el modelo planetario («largely in error»); límite de Bohr con varios electrones: conocimiento de libro de texto, no leído literalmente | Paráfrasis; marcar como explicación general |
| De Broglie, Heisenberg y Schrödinger; orbitales como soluciones de la ecuación de Schrödinger; electrón como paquete de onda; probabilidad; analogía de la niebla | Kuphaldt, spectroscopy y electronic-structure | Leído |
| Principio de incertidumbre (no se conocen a la vez posición y movimiento con exactitud) | RD 243/2022 lo nombra; enunciado: fragmento de buscador | Nombre leído; enunciado solo de buscador |
| Orbital: región de alta probabilidad donde caben hasta dos electrones | Kuphaldt, electronic-structure | Leído |
| Formas s esférica y p de dos lóbulos | Kuphaldt muestra imágenes de orbitales; la descripción de la forma es de libro de texto | Imagen vista en la página, texto no literal |
| Analogía del anfiteatro (escenario, gradas, filas) | Kuphaldt, electronic-structure | Leído |
| n = capa (K, L, M, N…); l = subnivel, l = 0 s, 1 p, 2 d, 3 f; n subniveles por capa; capacidad 2(2l+1): 2, 6, 10, 14; 2l+1 orbitales | Kuphaldt, electronic-structure | Leído |
| mₗ de −l a +l; mₛ = +½ o −½; cuatro números cuánticos por electrón | Fragmento de buscador (LibreTexts, UBC wiki, Physics Classroom) | Solo fragmento de buscador |
| 2n² electrones por nivel: 2, 8, 18, 32 | Cálculo sumando 2(2l+1) | Recalculado |
| Orden de Madelung (aufbau): 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, 5s, 4d, 5p, 6s, 4f, 5d, 6p, 7s, 5f, 6d, 7p; regla n + l | Kuphaldt, electronic-structure | Leído |
| Nombre «diagrama de Moeller» | RD 243/2022, Química 2.º, bloque A.2 | Leído |
| Pauli: dos electrones del mismo átomo no comparten estado cuántico | Kuphaldt, electronic-structure | Leído |
| Regla de Hund (multiplicidad máxima) | IUPAC Gold Book H02871, solo visto como fragmento de buscador | Solo fragmento de buscador |
| Configuraciones de H a K, incluidas Cl [Ne]3s²3p⁵, K [Ar]4s¹, N [He]2s²2p³, S [Ne]3s²3p⁴; notación con gas noble entre corchetes | Kuphaldt, electronic-structure | Leído |
| Cromo Z = 24: esperado 3d⁴4s², real 3d⁵4s¹; el aufbau es una simplificación | Kuphaldt, electronic-structure | Leído |
| Cromo en el acero inoxidable | Lección «Materiales… a fondo» (que cita ICH Q3D) | Leído en la app |
| Paladio Z = 46 | Tabla de nivel1.ts de la app; NIST (fragmento de buscador) | App leída + fragmento |
| Paladio [Kr] 4d¹⁰ (excepción) | NIST Atomic Reference Data y NIST Handbook of Basic Atomic Spectroscopic Data, vistos solo como fragmento de buscador (término 1S0, configuración 4d¹⁰) | Solo fragmento de buscador |
| Predicción de Moeller para Pd: [Kr] 5s² 4d⁸ | Cálculo con el orden de Kuphaldt | Deducido |
| Bloques s, p, d, f; número de columnas = capacidad del subnivel; reglas de periodo y grupo | Deducido del orden de llenado y capacidades de Kuphaldt; RD 243/2022 pide «posición a partir de la configuración» | Deducido; no hay texto leído que dé las reglas de grupo literalmente |
| Metales de transición = bloque d, grupos 3 a 12 | Conocimiento de libro de texto, no leído en fuente | Sin fuente leída (convención general) |
| Electrones de valencia: los del núcleo de gas noble casi no intervienen; Li 2s¹, Na 3s¹, K 4s¹ se parecen | Kuphaldt, electronic-structure | Leído |
| Definición de energía de ionización | Kuphaldt, periodic table («energy required to force the first electron… to separate») | Leído |
| Energías de ionización: Na 5,13908; Mg 7,64624; Al 5,98577; Si 8,15169; P 10,48669; S 10,36001; Cl 12,96764; Ar 15,759; Li 5,39172; K 4,34066; Rb 4,17713; Cs 3,89390; Be 9,32263; B 8,29803; N 14,53414; O 13,61806; Pd 8,3369 eV | NIST WebBook (IE evaluated); Kuphaldt da los mismos para H–K | Leído (para H–K, dos fuentes coinciden) |
| Valores en kJ/mol de la tabla (496, 738, 578, 787, 1012, 1000, 1251, 1521) | Cálculo valor NIST × 96,485 | Recalculado |
| Del Na al Ar se multiplica por tres (15,76/5,14 = 3,07) | Cálculo | Recalculado |
| K necesita alrededor de un 16 % menos que Na (1 − 4,34/5,14 = 15,6 %) | Cálculo | Recalculado |
| Diente de sierra de la energía de ionización; gran caída al empezar periodo; grupo 1 baja, grupo 18 alta | Kuphaldt, periodic table | Leído |
| Explicación de los baches Mg/Al y P/S (subnivel p de más energía; repulsión del par) | Explicación propia coherente con el orden de llenado de Kuphaldt y los datos del NIST | Datos leídos; explicación no leída literalmente |
| El potasio reacciona con el agua más violentamente que el sodio | NTP 237 del INSST, citada en «Átomos… a fondo» | Leído en la lección (fuente ya verificada allí) |
| Ejercicio 4: 5,14 × 96,49 = 496 kJ/mol; × 0,1 = 49,6 kJ | Cálculo | Recalculado |
| Definición de afinidad electrónica (energía liberada al capturar un electrón) | Fragmento de buscador; el NIST da valores positivos en «Electron affinity determinations» | Valores leídos; definición solo de buscador |
| Afinidades: Cl 3,6131; F 3,401191; Br 3,363583; I 3,05900; H 0,75497; Pd 0,56213; Na 0,5480 eV | NIST WebBook | Leído |
| Halógenos ganan electrones con facilidad | Kuphaldt, periodic table | Leído |
| Tendencias de radio y electronegatividad | Ya en «Átomos… a fondo» y «Enlaces… a fondo»; sin cifras | Sin cifras por falta de fuente leída |
| Ejercicio 5: 5,14 − 3,61 = 1,53 eV; × 96,49 = 148 kJ/mol | Cálculo | Recalculado |
| La atracción entre iones en el cristal compensa (ciclo de Born-Haber) | RD 243/2022 nombra Born-Haber; Kuphaldt: los enlaces se forman cuando la energía conjunta baja | Leído en términos generales; balance numérico no incluido |
| Pd/C se maneja húmedo con agua | Lección «Hidrogenación a fondo» | Leído en la app |
| Pd/C húmedo por seguridad: seco puede inflamarse solo al aire (pirofórico); el paladio es un metal noble que no reacciona con el agua. La energía de ionización en fase gas no basta para predecir la reactividad con el agua (contraejemplo: Au 9,23 eV frente a Zn 9,39 eV) | Lección «Hidrogenación a fondo» (nivel12-hidrogenacion.ts); NIST para las energías de ionización; revisión cruzada de noviembre de 2026 | Leído en la app; el contraejemplo, recalculado con los datos del NIST de la revisión |
| Pd: trazas en el producto, filtrado y análisis | «Hidrogenación a fondo», «Átomos… a fondo» (ICH Q3D) | Leído en la app |
| Sodio 589,59 nm y potasio 766,49 nm como líneas de emisión | FDA EAM 4.4, tabla 3b | Leído |
| Visible aproximadamente de 400 a 700 nm (Kuphaldt) o 780 (lección de espectroscopia): 766 nm en el límite rojo-infrarrojo | Kuphaldt, spectroscopy; «Espectroscopia a fondo» | Leído |
| Llama del sodio amarilla | 27 CFR 21.128 (fragmento de buscador: «golden yellow flame»); no se encontró en la versión actual de 27 CFR parte 21 descargada de eCFR | Solo fragmento de buscador |
| Ejercicio 6: 1240/589,59 = 2,10 eV; × 96,49 = 203 kJ/mol; menos de la mitad de 5,14 | Cálculo | Recalculado |
| AAS de llama: lámparas de cátodo hueco (o de descarga sin electrodos) específicas del elemento; llama de aire y acetileno; Pb 283,3 y 217,0 nm; Cd 228,8 nm; se registra absorbancia; interferencias por superposición de rayas «extremely rare» con lámparas de cátodo hueco | FDA EAM 4.1 v1.1, apartados 4.1.5 y 4.1.6 | Leído |
| La llama deja el elemento como átomos libres que absorben | Kuphaldt (absorción por átomos en gas o vapor); el EAM 4.1 no lo dice literalmente | Leído en Kuphaldt, aplicado por deducción |
| ICP-OES emite, ICP-MS cuenta iones; plasma de argón | «Otras técnicas a fondo» (fuentes ya verificadas allí) | Leído en la app |
| Utensilios de plástico para muestras de metales | «Otras técnicas a fondo»; EAM 4.1 (usar material de plástico siempre que se pueda para evitar contaminación) | Leído |
| Acero inoxidable con cromo y níquel | «Materiales… a fondo» (ICH Q3D) | Leído en la app |
| Temario: espectros, Bohr, Heisenberg, números cuánticos, Pauli, Moeller, posición en la tabla, tendencias | RD 243/2022, Química de 2.º, bloque A, apartados 1 a 3 | Leído |
| Planta, equipos (AH-512, FC-514, R-520, CF-522, SD-530), intermedio KT-40 y resultados | Valores de ejemplo declarados; ficticios | — |

## Lo que se quería incluir y se dejó fuera

- Radios atómicos en picómetros y tabla de electronegatividades de Pauling: no se encontró fuente gratuita accesible (NIST physics y IUPAC bloqueados). Solo tendencias.
- Colores de llama de otros elementos (potasio violeta, calcio, cobre, litio) y uso del vidrio de cobalto: solo fragmentos de buscador o Wikipedia.
- Constante de Rydberg y fórmula de Rydberg con su valor: solo fragmento de buscador; se usó el modelo de Bohr con el dato del NIST.
- Configuraciones de hierro, níquel y platino: no leídas en fuente accesible (solo fragmentos).
- Afirmación de que el paladio comparte grupo con níquel y platino, y de que el níquel se usa como catalizador: sin fuente leída; se quitó.
- Segunda y sucesivas energías de ionización (salto al romper el núcleo de gas noble): el NIST WebBook solo da la primera.
- Ciclo de Born-Haber numérico del NaCl: queda para la lección de geometría y enlace avanzado.
- Valores de la serie de Lyman (121,6 nm) calculados pero no incluidos por espacio.

## Ideas para la capa visual

- Simulación PhET «Modelos del átomo de hidrógeno» (*Models of the Hydrogen Atom*), para ver cómo Bohr explica las rayas y dónde falla.
- Esquema del espectro de emisión y del espectro de absorción del hidrógeno, uno encima del otro, con las rayas de 656, 486, 434 y 410 nm alineadas (imagen de Wikimedia Commons con licencia libre).
- Diagrama de Moeller con flechas diagonales y, al lado, la tabla periódica coloreada por bloques s, p, d y f, marcando sodio, cloro, cromo y paladio.
- Gráfica de la primera energía de ionización frente a Z (H a Cs) con los datos del NIST de la lección, señalando el diente de sierra y los baches Mg/Al y P/S.
