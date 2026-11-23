# Revisión cruzada, grupo «nuevas-e»

Lecciones: `src/content/nivel7-atomica.ts`, `nivel7-opticas.ts`, `nivel9-tecnicas.ts`, `nivel12-adsorcion.ts`.

Qué se hizo:
- Se recalcularon con python todos los ejercicios resueltos y todas las respuestas numéricas del quiz (answer, tolerance, unit y explain). **Todos cuadran.**
- Se compararon los datos clave con sus tablas de fuentes (`docs/fuentes/*.fuentes.md`) y, cuando había copia descargada en el scratchpad, con el documento original: ICH Q7 6.17, ICH Q6A (Abbé), anexo 1 de las GMP de la UE (8.42 a 8.45, 8.56, 8.57, 8.60, 8.61, 8.66 a 8.71, 8.79), 40 CFR 141.173, RD 3/2023 (parámetros 54 y 56, nota 17), BOE de 1987 (formacina) y EAM 4.7 (tabla 1a).
- Se hizo grep en todo `src/content` de los datos que se repiten en otras lecciones (HEPA H14, F0, rotación específica, línea del sodio, UNF y Pt/Co, LIE de polvos, adiciones estándar con paladio, saturación a 64 °C). Solo hay un choque leve (hallazgo T1).
- Remisiones («viste en», «verás en», «está en»): se comprobó con `catalog.generated.json` (nivel y order) que cada título existe y que el orden cuadra. **Todas las remisiones «viste» apuntan a lecciones anteriores y todas las «verás» a posteriores**, y su contenido existe en la lección citada (plasma, Q3D 2a y umbral del 30 % en `nivel7-otras.ts`; adiciones estándar con paladio en `nivel6-estadistica.ts`; filtro que no retiene endotoxinas en `nivel9-micro.ts`; saturación a 64 °C en `nivel12-cristalizacion.ts`; (+)/(−) frente a R/S en `nivel3-quiralidad.ts`). La única incidencia es un título abreviado (O4).

---

## Hallazgos

### O1. Mayor. El agua del condensador no saca de intervalo el índice de refracción del tolueno
- **Archivo y línea**: `src/content/nivel7-opticas.ts`, línea 199 (`plant`).
- **Texto actual**: «El laboratorio da n²⁰D fuera de su intervalo de aceptación: el tanque queda bloqueado. Se descubre que el condensador **E-521** perdía agua de refrigeración hacia el lado del producto.»
- **Problema**: la historia enseña que una fuga de agua en el tolueno se detecta por el índice de refracción. No es así. El agua se disuelve muy poco en el tolueno: unas centésimas de un tanto por ciento a temperatura ambiente. Es un dato de conocimiento general que no se comprobó en ninguna fuente descargada en esta revisión. Por encima de eso, el agua se separa como segunda fase y la muestra sale turbia o con gotas. Con un 0,05 % de agua disuelta, la mezcla lineal da Δn ≈ 0,0005 × (1,333 − 1,496) = −0,00008: en la cuarta decimal, dentro de cualquier intervalo de aceptación razonable. El que detecta la fuga es el ensayo de agua (Karl Fischer), que la hoja también pide. La lección afirma además, en la línea 83, que el refractómetro «no dice qué sustancia lo cambia», y el relato contradice esa idea.
- **Corrección propuesta**: «El laboratorio da el agua por encima de su límite (el índice de refracción apenas se mueve, porque el tolueno disuelve muy poca agua): el tanque queda bloqueado. Se descubre que el condensador **E-521** perdía agua de refrigeración hacia el lado del producto.»

### O2. Menor. «La unidad tiene dos nombres»: equivalencia UNF = NTU dada como segura
- **Archivo y línea**: `src/content/nivel7-opticas.ts`, línea 157, y término en la línea 223.
- **Texto actual**: «La unidad tiene dos nombres: en España, **UNF**; en las normas de Estados Unidos (40 CFR 141), **NTU** (*nephelometric turbidity unit*).» y, en el término, `en: "Formazin nephelometric unit (FNU) / NTU"`.
- **Problema**: la tabla de fuentes dice que la equivalencia UNF = NTU = FNU se vio **solo en un fragmento de buscador**, y el texto la presenta como un hecho. Además, la FNU (ISO 7027, luz infrarroja) y la NTU (métodos de la EPA, luz blanca) se miden con nefelómetros distintos: coinciden con la formacina, pero no siempre con muestras reales. El propio RD 3/2023 llama a la UNF «Unidad Nefelométrica de Turbidez» (copia `rd3.txt`, línea 1745), y el BOE de 1987 la llama «de formacina».
- **Corrección propuesta**: «Según la norma, la unidad se llama distinto: en España, **UNF**; en las normas de Estados Unidos (40 CFR 141), **NTU** (*nephelometric turbidity unit*). Las dos se refieren a la formacina, pero cada norma fija su propio equipo, así que cada resultado se compara con el límite de su norma.» En el término: `en: "Formazin nephelometric unit / NTU"` y def «Unidad de turbidez referida a la formacina; en España UNF y en las normas de Estados Unidos NTU».

### O3. Menor. 40 CFR 141.173 no ata los 0,3 y 1 NTU al 99,9 % de *Giardia*
- **Archivo y línea**: `src/content/nivel7-opticas.ts`, línea 169.
- **Texto actual**: «La norma ata esos límites a que la filtración y la desinfección quiten al menos el 99,9 % de los quistes de *Giardia*: la turbidez es un **chivato** rápido de que el filtro funciona.»
- **Problema**: en 141.173, el apartado (a) fija 0,3 NTU en el 95 % y 1 NTU como máximo para la filtración convencional o directa, sin mencionar *Giardia*. El 99,9 % de quistes de *Giardia* (junto con el 99,99 % de virus y el 99 % de *Cryptosporidium*) está en el apartado (b) y se exige a **otras tecnologías de filtración** para que el Estado les fije sus propios límites de turbidez. Comprobado en la copia `scratchpad/lecciones/tmp-opticas/ecfr_141.173.txt`.
- **Corrección propuesta**: «Para otras tecnologías de filtración, la misma norma pide demostrar que, junto con la desinfección, quitan al menos el 99,9 % de los quistes de *Giardia*, el 99,99 % de los virus y el 99 % de los ooquistes de *Cryptosporidium*: la turbidez es un **chivato** rápido de que el filtro funciona.»

### O4. Menor. Título abreviado en la primera remisión a la lección de quiralidad
- **Archivo y línea**: `src/content/nivel7-opticas.ts`, línea 90 (y la línea 123 la repite).
- **Texto actual**: «está en «Isómeros y quiralidad a fondo»; aquí no se repite.»
- **Problema**: no existe ninguna lección con ese título exacto. Las que hay son «Isómeros y quiralidad» (nivel 3, order 7) e «Isómeros y quiralidad a fondo: moléculas gemelas que no hacen lo mismo» (nivel 3, order 8). Es la primera mención en la lección. El orden sí cuadra: la lección citada es anterior.
- **Corrección propuesta**: en la línea 90, «está en «Isómeros y quiralidad a fondo: moléculas gemelas que no hacen lo mismo»; aquí no se repite.» La línea 123 puede quedarse abreviada.

### O5. Menor. Siglas sin explicar la primera vez en la lección
- **Archivo y líneas**: `src/content/nivel7-opticas.ts`, línea 85 (HPLC), línea 157 (CFR), línea 165 (ETAP), línea 197 (IPC).
- **Textos actuales y correcciones propuestas**:
  - «**Detector de HPLC.**» → «**Detector de HPLC** (cromatografía de líquidos de alta resolución).»
  - «(40 CFR 141)» → «(40 CFR 141, el Código de Reglamentos Federales)»
  - «Salida de la potabilizadora (ETAP)» → «Salida de la estación de tratamiento de agua potable (ETAP)»
  - «una muestra de IPC para» → «una muestra de control en proceso (IPC, *in-process control*) para»

### T1. Menor. HEPA H14: «el tamaño más difícil, 0,3 µm» choca con la lección de climatización
- **Archivo y líneas**: `src/content/nivel9-tecnicas.ts`, línea 136 y quiz en la línea 323.
- **Textos actuales**: «filtros HEPA de clase H14, que retienen el 99,995 % de las partículas del tamaño más difícil, 0,3 µm.» y «Un filtro HEPA H14 retiene el 99,995 % de las partículas de 0,3 µm.»
- **Problema**: `nivel14-hvac.ts` (líneas 51 y 228) da el 99,995 % «medido con el tamaño de partícula que peor atrapa el filtro (el «más penetrante»)», sin fijar el tamaño, como hace la norma EN 1822. En esa norma el tamaño más penetrante (MPPS) se determina para cada filtro y suele quedar por debajo de 0,3 µm, en torno a 0,1-0,25 µm. Esto es conocimiento general: la EN 1822 es de pago y no se leyó. Los 0,3 µm son la convención estadounidense del ensayo con DOP. La NTP 1202 puede decir 0,3 µm, pero entonces las dos lecciones enseñan cosas distintas.
- **Corrección propuesta**: «filtros HEPA de clase H14, que retienen el 99,995 % de las partículas del tamaño que peor atrapan (el más penetrante; la NTP 1202 da como referencia 0,3 µm).» En el quiz: «Un filtro HEPA H14 retiene el 99,995 % de las partículas del tamaño más penetrante. Si le llegan 200000 partículas de ese tamaño, ¿cuántas pasan?»

### T2. Menor. Siglas sin explicar la primera vez en la lección
- **Archivo y líneas**: `src/content/nivel9-tecnicas.ts`, línea 13 (UFC), línea 102 (UE y HEPA) y línea 175 (CLSI).
- **Textos actuales y correcciones propuestas**:
  - «las UFC, los controles» → «las unidades formadoras de colonias (UFC), los controles»
  - «de 1000 UE a 1 UE» → «de 1000 unidades de endotoxina (UE) a 1 UE»
  - «pasa por un filtro HEPA (anexo 1, 8.70)» → «pasa por un filtro de partículas de alta eficacia (HEPA, *high efficiency particulate air*) (anexo 1, 8.70)»
  - «la norma CLSI M100» → «la norma M100 del CLSI (*Clinical and Laboratory Standards Institute*), la asociación estadounidense de normas de laboratorio clínico»

### A1. Menor. Los factores de incertidumbre se multiplican, no se suman
- **Archivo y línea**: `src/content/nivel7-atomica.ts`, línea 137.
- **Texto actual**: «dividido por factores de seguridad que suman 12 × 10 × 1 × 1 × 5»
- **Problema**: en ICH Q3D los factores F1 a F5 se multiplican: 12 × 10 × 1 × 1 × 5 = 600. «Suman» enseña una operación equivocada (la suma daría 29). La fórmula de la línea 139 está bien.
- **Corrección propuesta**: «dividido por factores de seguridad que, multiplicados, dan 12 × 10 × 1 × 1 × 5 = 600»

### A2. Menor. Unidad mezclada en la columna «Plomo en disolución»
- **Archivo y línea**: `src/content/nivel7-atomica.ts`, línea 113.
- **Texto actual**: «| ICP-MS | 0,11 µg/kg | Decenas |»
- **Problema**: el resto de la columna va en mg/L o µg/L. La cifra es el ASQL de la tabla 1a del EAM 4.7, en µg/kg **de disolución analítica**, porque el método prepara las disoluciones por peso. Comprobado en `tmp-atomica/dl/eam47.txt`, línea 73. Sin esa aclaración, el lector puede creer que es un límite en el sólido, cuando en realidad equivale a unos 0,11 µg/L.
- **Corrección propuesta**: «| ICP-MS | 0,11 µg/kg de disolución (unos 0,11 µg/L) | Decenas |»

### A3. Menor. Siglas sin explicar la primera vez en la lección
- **Archivo y líneas**: `src/content/nivel7-atomica.ts`, línea 132 (HPLC) y línea 135 (PDE).
- **Textos actuales y correcciones propuestas**:
  - «de un HPLC y en la capa fina» → «de un HPLC (cromatógrafo de líquidos de alta resolución) y en la capa fina»
  - «Ya conoces la PDE oral (100 µg al día)» → «Ya conoces la exposición diaria permitida (PDE, *permitted daily exposure*) oral, 100 µg al día»

### D1. Menor. Siglas sin explicar la primera vez en la lección
- **Archivo y líneas**: `src/content/nivel12-adsorcion.ts`, línea 65 (ICP), línea 146 (SUPAC) y línea 162 (IPC, en `plant`).
- **Textos actuales y correcciones propuestas**:
  - «el paladio lo confirma el análisis por ICP («Espectroscopia» → «el paladio lo confirma el análisis por plasma de acoplamiento inductivo (ICP, *inductively coupled plasma*) («Espectroscopia»
  - «La guía SUPAC de la FDA sobre equipos» → «La guía SUPAC de la FDA sobre equipos (*Scale-Up and Post-Approval Changes*, cambios de escala y posteriores a la autorización)»
  - «IPC: color de la disolución» → «IPC (control en proceso): color de la disolución»

---

## Comprobado y correcto (sin hallazgo)

- **Atómica**: 10^−0,0044 = 0,990; c₀ 0,080 y 0,088 mg/L; 100 pg y 0,0147 A·s; 370 veces; masas 74,9216 y 74,9312 (Δ 0,0096); ¹⁰⁴Pd²⁺ y ¹⁰⁶Pd²⁺ sobre las masas 52 y 53; 55 % y 26 %; 100 µg/L; 3,54 y 2,76 eV; PDE 100, 10 y 1 µg/día; opción 1 a 10, 1 y 0,1 µg/g; 500 µg/g; 4 µg (4 %); 1,56 µg/g y 0,31 µg/día. Quiz: 1,0 %, 160 pg, 5 µg/g, 400 µg/g y 0,56 µg/g.
- **Ópticas**: 224 900 000 m/s; 22,0°; 49,6° y 54,7°; 1,4666 y 1,4695; 15,0 %; +66,0°; −2,00°; 98,6 %; 5,0 y 2,5 mL; 120 y 72 mg Pt/L (redondeado a 70); 1,246 g de K₂PtCl₆ = 0,500 g de Pt; RD 3/2023 (4,0; 0,8; 0,3; 2 y 6 UNF; color 15 mg/L Pt/Co) comprobado en el BOE; formacina, 48 h a 20-25 °C, comprobada en el BOE de 1987; ICH Q7 4.31 e ICH Q6A (Abbé) comprobados.
- **Microbiología**: 1000 aumentos; 45000 y 620000 UFC/g; vapor a 2,05 y 3,04 bar absolutos; 10 reducciones y 10⁻⁵; 0,25 min y 5 min de F0; 10⁸ bacterias; 50 y 10 partículas; NMP 43 (9-180), 93 y 930; puntos de corte de la ampicilina; números del anexo 1 (8.42 a 8.45, 8.56, 8.57, 8.60, 8.61, 8.66, 8.68, 8.70, 8.71 y 8.79) comprobados en el texto.
- **Adsorción**: 60 g; 300 µg/g; 1 mg/L; 29 kg; factor 15,5; 1,94 y 0,125 mg/L; 1,25 µg/g; 400,4 mol; 16,0 kg; 34,0 kg (68 %); 23,4 kg; 80,1 kg; 2256 kJ/kg; 6,77 GJ; 3,8 h; 0,51 mm/s, 33 min y 13,6 h; 3065 Pa (30,6 mbar). Quiz: 8,01; 14,25; 4; 29,43 y 400. ICH Q7 6.17 (*process aids*) comprobado en `dl/q7.txt`.

## Lecciones revisadas

1. `espectroscopia-atomica-a-fondo` (`nivel7-atomica.ts`)
2. `tecnicas-opticas-a-fondo` (`nivel7-opticas.ts`)
3. `tecnicas-microbiologicas-a-fondo` (`nivel9-tecnicas.ts`)
4. `adsorcion-y-absorcion-a-fondo` (`nivel12-adsorcion.ts`)

## Recuento por gravedad

- Crítico: 0
- Mayor: 1 (O1)
- Menor: 10 (O2, O3, O4, O5, T1, T2, A1, A2, A3, D1)
