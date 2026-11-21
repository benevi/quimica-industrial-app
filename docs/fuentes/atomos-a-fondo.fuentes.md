# Fuentes de la lección `atomos-a-fondo`

Cómo leer la columna «Comprobación»:

- **Leído en el documento**: descargado con curl, pasado a texto y leído el pasaje.
- **Libro de texto, comprobado por cálculo**: química general universal; las cuentas se rehicieron con python (`src_atomos/calc.py`) con el mismo redondeo que el texto. No se cita una fuente concreta porque no se leyó ninguna en esta sesión.
- **Libro de texto**: definición o hecho de química general sin cifra que recalcular.
- **Valor de ejemplo declarado**: número inventado o redondeado para hacer cuentas; el texto lo dice.
- **Lección de la app**: dato ya presente y verificado en otra lección del repositorio.

Documentos leídos:

- **Q3D**: ICH Q3D(R2), «Guideline for elemental impurities», adoptada el 26 de abril de 2022. Leídos los apartados 1, 2, 4, 5.2, 5.3, 7 (opciones 1 y 2a), el glosario (PDE), las tablas A.2.1 y A.2.2 y la introducción de las monografías de paladio y platino. https://database.ich.org/sites/default/files/Q3D-R2_Guideline_Step4_2022_0308.pdf
- **RD2032**: Real Decreto 2032/2009, unidades legales de medida, texto consolidado (definición del mol y del amperio, tabla 7 y su nota c). https://www.boe.es/buscar/act.php?id=BOE-A-2010-927
- **NTP237**: INSST, NTP 237 «Reacciones químicas peligrosas con el agua» (apartados de metales alcalinos, alcalinotérreos, halógenos: flúor, hidróxidos). https://www.insst.es/documents/d/portal-insst/ntp_237-pdf
- Lecciones del repositorio leídas para no repetirlas y para enlazar: `atomos-y-tabla-periodica` (nivel1.ts), `impurezas-ich` (nivel3.ts), `agua-a-fondo` (nivel14-agua.ts), `emergencias-y-residuos-a-fondo` (nivel15-emergencias.ts), `reacciones-en-api` (nivel2.ts, Pd/C pirofórico).

| Dato o afirmación | Fuente | Comprobación |
|---|---|---|
| Átomo con núcleo (protones, neutrones) y corteza (electrones); el núcleo concentra casi toda la masa | Química general | Libro de texto |
| Cargas: protón +1, neutrón 0, electrón −1; iguales en tamaño y de signo contrario | Química general | Libro de texto |
| Carga elemental e = 1,602176634 × 10⁻¹⁹ C (valor fijo) | RD2032, definición del amperio (2.4) | Leído en el documento |
| Protón y neutrón pesan casi 1 u; el electrón unas 1800 veces menos que el protón | RD2032 tabla 7 da 1 u = 1,660538782 × 10⁻²⁷ kg y masa del electrón 9,10938215 × 10⁻³¹ kg; masa del protón 1,007 u de libro de texto; cociente 1836 | Leído (masas) + recalculado |
| Núcleo entre diez mil y cien mil veces más pequeño que el átomo; analogía estadio y canica declarada aproximada | Química general (átomo del orden de 10⁻¹⁰ m, núcleo de 10⁻¹⁵ a 10⁻¹⁴ m); estadio 200 m / canica 1 cm = 20000 | Libro de texto + recalculado |
| Las reacciones químicas cambian el reparto de electrones, no los núcleos | Química general; coincide con `atomos-y-tabla-periodica` | Libro de texto |
| Z = protones; A = protones + neutrones; neutrones = A − Z; electrones = Z en átomo neutro | Química general | Libro de texto |
| Z: H 1, B 5, C 6, N 7, O 8, F 9, Na 11, Mg 12, Al 13, S 16, Cl 17, K 19, Ca 20 | Tabla periódica estándar | Libro de texto |
| C-12: 6 p, 6 n, 6 e; Cl-35: 17, 18, 17; Cl-37: 17, 20, 17; Na-23: 11, 12, 11; K-39: 20 neutrones | Cálculo | Recalculado |
| Isótopos: mismo Z, distinto A; se comportan igual en las reacciones | Química general | Libro de texto |
| Unidad de masa atómica unificada (u) = dalton (Da); 1/12 de la masa del átomo de C-12; aceptada para usar con el SI | RD2032, tabla 7 y nota (c) | Leído en el documento |
| Abundancias del cloro cerca del 76 % y 24 % | Valores de libro de texto redondeados, declarados así en el texto (no leídos en esta sesión) | Valor de ejemplo declarado |
| 35 × 0,76 = 26,60; 37 × 0,24 = 8,88; suma 35,48, unos 35,5 u | Cálculo | Recalculado |
| Masa atómica del cloro en la tabla 35,45; carbono 12,011 | Valores estándar de la IUPAC, no leídos en esta sesión; ya en `atomos-y-tabla-periodica` | Lección de la app |
| Con abundancias y masas isotópicas exactas sale 35,45 (75,76 %, 24,24 %; 34,969 u y 36,966 u) | Valores de libro de texto usados solo para comprobar que la explicación de la diferencia es correcta; no aparecen en el texto | Recalculado |
| Carbono natural: casi todo C-12 y una pequeña parte C-13 | Química general | Libro de texto |
| Capas: 2, 8, 8 para los 20 primeros elementos; reparto por capas de H, C, N, O, F, Na, S, Cl, K, Ca (y Mg 2, 8, 2 en el cálculo) | Química general; sumas comprobadas igual a Z | Libro de texto + recalculado |
| Electrones de valencia deciden la reactividad; gases nobles con capa llena casi no reaccionan; neón 2, 8 y argón 2, 8, 8 | Química general | Libro de texto |
| Regla del octeto y excepciones (H con 2, boro con menos de 8, S y P con más, moléculas con número impar de electrones) | Química general | Libro de texto |
| Catión y anión; Na⁺ 11 p y 10 e; Cl⁻ 17 p y 18 e; Ca²⁺ 20 p y 18 e | Química general; cálculo | Recalculado |
| Iones poliatómicos: SO₄²⁻, NO₃⁻, OH⁻, NH₄⁺; H⁺ en agua unido a una molécula de agua | Química general; NTP237 escribe [H3O]+ en la reacción del NaOH | Libro de texto + leído |
| HCl + NaOH da NaCl + H₂O | Química general | Libro de texto |
| Agua de red con calcio, magnesio, sodio, cloruros, sulfatos, nitratos; cal; descalcificador que cambia calcio y magnesio por sodio | `agua-a-fondo` (nivel14-agua.ts) | Lección de la app |
| La conductividad del agua la dan los iones; el agua pura casi no conduce | `agua-a-fondo` | Lección de la app |
| Clorhidratos y sales sódicas de principios activos | `enlaces-y-polaridad` y `polimorfismo-y-sales` | Lección de la app |
| 118 elementos; 7 periodos; 18 grupos | Tabla periódica estándar; 118 ya en `atomos-y-tabla-periodica` | Libro de texto |
| Metales, no metales y semimetales (boro y silicio como semimetales); propiedades de los metales | Química general | Libro de texto |
| Grupos con nombre: alcalinos (1), alcalinotérreos (2), halógenos (17), gases nobles (18); el hidrógeno no es metal | Química general; NTP237 llama «Grupo 1A» a los alcalinos y «Grupo 2A» a los alcalinotérreos | Libro de texto + leído |
| Tendencias: tamaño crece al bajar y decrece hacia la derecha; reactividad de los alcalinos crece al bajar; electronegatividad crece hacia la derecha y arriba; el flúor es el más electronegativo | Química general | Libro de texto |
| Pd sobre carbón como catalizador de hidrogenación | Q3D, monografía del paladio («Palladium (on various supports) is being used as catalyst in hydrogenation reactions») | Leído en el documento |
| Platino: su principal uso industrial es como catalizador | Q3D, monografía del platino | Leído en el documento |
| Pd/C seco puede ser pirofórico (en la hoja: «catalizador que no debe secarse») | `reacciones-en-api` (nivel2.ts) | Lección de la app |
| Metales alcalinos (Li, Na, K) descomponen el agua: hidróxido e hidrógeno, reacción muy exotérmica; más peligro si el sólido está troceado; con el potasio el calor basta para inflamar el hidrógeno | NTP237, «Metales alcalinos - Grupo 1A» y «Singularidades» | Leído en el documento |
| Alcalinotérreos (Mg, Ca) hacen lo mismo con menos vigor | NTP237, «Metales alcalino térreos - Grupo 2A» | Leído en el documento |
| El flúor reacciona violentamente con el agua y forma ácido fluorhídrico | NTP237, «Halógenos: flúor» | Leído en el documento |
| Elementos que reaccionan con el agua se guardan lejos de los inflamables (solo remisión) | `emergencias-y-residuos-a-fondo` | Lección de la app |
| Fuentes de impurezas elementales: catalizadores añadidos, principio activo, agua y excipientes, equipos, envase | Q3D, 1 y 5.2 | Leído en el documento |
| Las impurezas elementales no aportan beneficio al paciente | Q3D, 1 («do not provide any therapeutic benefit to the patient») | Leído en el documento |
| Definición de PDE: cantidad máxima aceptable de impureza elemental tomada al día con el medicamento; en µg/día | Q3D, glosario y 7 | Leído en el documento |
| Paladio: PDE 100 µg/día oral, 10 parenteral, 1 inhalación; platino igual en la tabla redondeada (monografía: 108; 10,8; 1,4) | Q3D, tabla A.2.1 y monografías | Leído en el documento |
| Clase 1: As, Cd, Hg, Pb; tóxicos con uso limitado o nulo; se evalúan siempre | Q3D, 4 | Leído en el documento |
| Clase 2A: Co, Ni, V; probabilidad relativamente alta; evaluación en todas las fuentes y vías | Q3D, 4 | Leído en el documento |
| Clase 2B: Ag, Au, Ir, Os, Pd, Pt, Rh, Ru, Se, Tl; baja abundancia; pueden excluirse salvo que se añadan a propósito | Q3D, 4 | Leído en el documento |
| Clase 3: Ba, Cr, Cu, Li, Mo, Sb, Sn; baja toxicidad oral (PDE en general > 500 µg/día); se consideran en parenterales e inhalados | Q3D, 4 | Leído en el documento |
| Sin PDE por baja toxicidad o por otras normas: entre ellos Al, B, Ca, Fe, K, Mg, Mn, Na, W, Zn | Q3D, 4, «Other elements» | Leído en el documento |
| Concentración = PDE / cantidad diaria de medicamento; opción 1 supone 10 g/día | Q3D, 7, ecuación 1 y opción 1 | Leído en el documento |
| Pd oral: 100 / 10 = 10 µg/g; la tabla A.2.2 da 10 µg/g | Q3D, tabla A.2.2; cálculo | Leído + recalculado |
| 1 µg/g = 1 parte por millón en masa | Cálculo (10⁻⁶) | Libro de texto |
| La revisión es la R2 de 2022 | Q3D, portada y historial («Adopted on 26 April 2022») | Leído en el documento |
| Lectura de fórmulas: subíndice afecta al símbolo de delante; paréntesis multiplica todo su contenido | Química general | Libro de texto |
| H₂O 3 átomos; NaCl 2; H₂SO₄ 7; C₂H₅OH 9 (C2 H6 O1); Ca(OH)₂ 5; (NH₄)₂SO₄ 15; (CH₃)₂CO 10 (C₃H₆O); Al₂(SO₄)₃ 12 oxígenos | Cálculo | Recalculado |
| Cargas de las sales cuadran: Ca²⁺ + 2 OH⁻; 2 NH₄⁺ + SO₄²⁻ | Química general | Libro de texto |
| Boro: 20 % B-10 y 80 % B-11; 10 × 0,20 + 11 × 0,80 = 10,8 u (pregunta del test) | Valores redondeados declarados como de ejemplo; resultado coincide con la masa estándar 10,81 | Valor de ejemplo declarado + recalculado |
| Equipos RX-305, FL-306, RX-310, CF-312, intermedio INT-27, operadora Lucía; conductividad del lavado como control | Ficticios | Valor de ejemplo declarado |

## Lo que quise incluir y dejé fuera

- Abundancias isotópicas exactas y masas isotópicas del cloro, del carbono y del bromo: la fuente de referencia (CIAAW, IUPAC) no es accesible desde esta sesión. Se usaron solo valores redondeados declarados.
- Valores numéricos de electronegatividad (escala de Pauling) y radios atómicos concretos: no leídos en fuente accesible; se explican solo las tendencias.
- Tamaños exactos del átomo y del núcleo en metros: se da solo el orden de magnitud de libro de texto y la analogía declarada aproximada.
- Que el sulfato de sodio se usa para secar disolventes y que la acetona se usa para lavar equipos y tortas: los quité por no tener fuente leída.
- Peligros concretos del bromo y del cloro gas (valores límite, reacciones): solo remisión a las lecciones de seguridad.
- Cómo se analiza el paladio (ICP-MS) y los umbrales de ICH Q3A: ya están en «Impurezas en el API»; no se repiten.
- Las opciones 2b y 3 de ICH Q3D y la evaluación de riesgos detallada: demasiado para el nivel 1.
- Una frase del tipo «en una gota de agua hay más átomos que personas en la Tierra»: la quité para no meter una comparación sin cálculo propio.
