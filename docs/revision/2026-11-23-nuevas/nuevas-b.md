# Revisión cruzada, grupo «nuevas-b»

Lecciones: `gases-a-fondo` (nivel1-gases.ts, nivel 2, order 11.2), `diagramas-de-fases-a-fondo` (nivel1-fases.ts, 2 / 11.3), `sistemas-dispersos-a-fondo` (nivel1-dispersos.ts, 1 / 10.7), `termodinamica-a-fondo` (nivel2-termodinamica.ts, 2 / 11.4), `formulacion-inorganica-a-fondo` (nivel1-formulacion.ts, 2 / 13.2).

Método: lectura completa de las cinco lecciones y de sus tablas de fuentes; recálculo con Python de todos los ejercicios y de todas las respuestas numéricas del quiz (answer, tolerancia, unidad y explicación); comprobación de cada remisión «…» contra `catalog.generated.json` (título existe, nivel y order anterior o posterior según diga «viste» o «verás») y de que la lección citada trata de verdad lo que se le atribuye; grep de los datos clave contra el resto de `src/content`, `docs/simulador-reactor.md`, `siglas.ts`.

**Resultado de los cálculos**: todos cuadran (Boyle, Charles, combinada, n de botellas, Z del NIST, Dalton e inertización, tolueno con Antoine del NIST 29,1 / 185,3 mbar, Kp y α, presiones de vapor y dilatación del propano, 273 L de gas por litro; Antoine 0,2716 bar a 70 °C, equivalencia de las dos formas de Antoine, etanol a 100 mbar 29,2 °C, Raoult 915,3 / 635,8 mbar y y = 0,59 / 0,67, 72,7 y 61,8 °C a 300 mbar, eutéctico 100,8 °C y 32,5 %, 149,5 °C, ΔT del benzoico 0,72 / 0,36 K, Kf 1,86 y Kb 0,513, ósmosis 7,9 / 0,85 / 1,70 bar; Stokes 7,14 × 10⁻⁶ m/s, 39 h, 23 min, 162 d, 44 años, 19 h a 50 °C, superficies, espuma, ppm; trabajo 3972 / 3966 kJ, Hess de eteno, nitro, neutralización en seco y metano, energías de enlace, ΔS°, 97,0 °C, inversiones 463,8 K y 1939 K, K del amoniaco 5,6 × 10⁵ y 6,0 × 10⁻⁴, tabla ΔG°-K, esterificación K = 48; masas molares y números de oxidación de formulación). Todas las respuestas del quiz caen dentro de su tolerancia y la explicación da el mismo número. Los datos cruzados (R-204 de 6000 L, reflujo a unos 115 °C frente a 112,3 °C a 0,05 bar g, Antoine del simulador, 84,4 °C tolueno-agua, 272 mbar a 70 °C en `destilacion-a-fondo`, −183 kJ de `termoquimica-a-fondo`, 1,6 kmol y 39,2 m³ de `reacciones-en-api-a-fondo`, K ≈ 4 de `equilibrio-a-fondo`, FeCl₂ y las cinco reglas de `redox-a-fondo`) coinciden con las lecciones de origen.

No se han encontrado errores críticos.

---

## 1. Mayor. El ejemplo de planta contradice la propia cuenta de Raoult de la lección
- **Archivo y línea**: src/content/nivel1-fases.ts:196
- **Texto actual**: `Al llegar a 62,8 °C pides la muestra: el laboratorio da un 3,8 % de tolueno. Cumple.`
- **Problema y evidencia**: dos frases antes la lección dice que, por Raoult, una mezcla con un 5 % en moles de tolueno hierve a 62,2 °C y con un 20 % a 63,7 °C. Con las mismas constantes del NIST (tolueno 4,07827 / 1343,943 / −53,773; heptano 4,02832 / 1268,636 / −56,199; 300 mbar), 62,8 °C corresponde a un **11 %** de tolueno en el líquido, no a menos del 5 %. Un lector atento que siga la cuenta concluye que la muestra debería salir fuera de límite y no entiende el 3,8 %. Con 62,1 °C la cuenta da un 3,5 %, coherente con el 3,8 % del laboratorio.
- **Corrección propuesta**: `Al llegar a 62,1 °C pides la muestra: el laboratorio da un 3,8 % de tolueno. Cumple.`

## 2. Menor. Remisión a una lección que no trata lo que se le atribuye
- **Archivo y línea**: src/content/nivel1-gases.ts:122
- **Texto actual**: `y cerca de la ebullición el vapor se dispara («El reactor a fondo»).`
- **Problema y evidencia**: `reactor-a-fondo` (nivel12-reactor.ts) habla de partes del reactor, camisa, cierre y alivio de presión, pero no de cómo sube la presión de vapor al acercarse a la ebullición. Donde se ve con números es en `destilacion-a-fondo` (Antoine del tolueno, 272 mbar a 70 °C…), que además es posterior.
- **Corrección propuesta**: `y cerca de la ebullición el vapor se dispara (lo verás con números en «Destilación a fondo»).`

## 3. Menor. Remisión a «Disoluciones y solubilidad a fondo» por algo que esa lección no dice
- **Archivo y línea**: src/content/nivel1-dispersos.ts:150
- **Texto actual**: `- **Gas disuelto que se desprende** al calentar («Disoluciones y solubilidad a fondo»).`
- **Problema y evidencia**: `disoluciones-a-fondo` (línea 138) solo explica que la solubilidad de un gas sube con la presión (bebida con gas, oxígeno disuelto); no menciona el efecto de calentar.
- **Corrección propuesta**: `- **Gas disuelto que se desprende** al calentar o al bajar la presión (en «Disoluciones y solubilidad a fondo» viste que un gas se disuelve menos cuanto menor es la presión encima).`

## 4. Menor. Remisión hacia delante redactada como si ya se hubiera visto
- **Archivo y línea**: src/content/nivel1-fases.ts:124
- **Texto actual**: `Es el caso de etanol y agua citado en «Destilación y concentración».`
- **Problema y evidencia**: `destilacion` es nivel 12, order 6; esta lección es nivel 2, order 11.3. El lector aún no la ha estudiado. (El título existe y sí trata etanol-agua.)
- **Corrección propuesta**: `Es el caso de etanol y agua, que verás en «Destilación y concentración».`

## 5. Menor. Remisión hacia delante en presente
- **Archivo y línea**: src/content/nivel1-dispersos.ts:158
- **Texto actual**: `Lo tienes también en «Instrumentos de medida a fondo».`
- **Problema y evidencia**: `instrumentos-a-fondo` es nivel 13, order 2; esta lección es nivel 1, order 10.7. (El contenido sí cuadra: allí la espuma absorbe el sonido de los ultrasonidos y puede afectar al radar.)
- **Corrección propuesta**: `Lo verás también en «Instrumentos de medida a fondo».`

## 6. Menor. Kp sin unidades cuando Kc sí las lleva
- **Archivo y línea**: src/content/nivel1-gases.ts:141 y quiz en 292-296
- **Texto actual**: `3. Kp = 0,010 × 33,26 = **0,333**.` y en el quiz `unit: "",` (pregunta de Kc = 0,050 mol/L) con `explain: "Kp = Kc · (R · T)^Δn = 0,050 × 0,083145 × 300 = 1,247."`
- **Problema y evidencia**: la lección da Kc en mol/L y dice que Kp va con presiones en bar. Con Δn = 1, Kp = Kc · R · T sale en (mol/L) · (L·bar/mol) = bar. Dejarlo sin unidad es incoherente con el Kc que se da con unidades y con el ejercicio 8, donde Kp se combina con P en bar.
- **Corrección propuesta**: `3. Kp = 0,010 × 33,26 = **0,333 bar** (con Δn = 1, Kp lleva unidades de presión).`; en el quiz, `unit: "bar",` y `explain: "Kp = Kc · (R · T)^Δn = 0,050 × 0,083145 × 300 = 1,247 bar."`

## 7. Menor. Norma que fija R citada distinto en dos lecciones
- **Archivo y línea**: src/content/nivel1-gases.ts:21
- **Texto actual**: `El Real Decreto 2032/2009 de unidades legales fija dos valores exactos`
- **Problema y evidencia**: `termodinamica-a-fondo` (línea 41) atribuye los mismos valores al Real Decreto 493/2020. Ambas cosas son ciertas (el 493/2020 modificó el 2032/2009 y el texto consolidado es el que trae los valores), pero un lector que compare cree que se contradicen; el texto original de 2009 no tenía esos valores exactos (son de la redefinición del SI de 2019).
- **Corrección propuesta**: `El Real Decreto 2032/2009 de unidades legales, en su texto vigente (lo modificó el Real Decreto 493/2020), fija dos valores exactos`

## 8. Menor. NaBH₄ presentado como compuesto de dos elementos e hidruro metálico simple
- **Archivo y línea**: src/content/nivel1-formulacion.ts:92
- **Texto actual**: `Un ejemplo es el tetrahidroborato de sodio, NaBH₄, que su ficha (ICSC 1670) llama también «borohidruro de sodio»: el anión es BH₄⁻.`
- **Problema y evidencia**: está en la «Parte 5. Compuestos de dos elementos» y como ejemplo de «hidrógeno con un metal», pero NaBH₄ tiene tres elementos y sus hidrógenos están unidos al boro (un no metal), no al sodio. Enseña mal la definición que acaba de dar.
- **Corrección propuesta**: `Un pariente de tres elementos, muy usado como reductor, es el tetrahidroborato de sodio, NaBH₄, que su ficha (ICSC 1670) llama también «borohidruro de sodio»: el anión es BH₄⁻, con los cuatro hidrógenos unidos al boro y a −1 cada uno.`

## 9. Menor. Siglas sin explicar en `diagramas-de-fases-a-fondo`
- **Archivo y línea**: src/content/nivel1-fases.ts:66, 72 y 192
- **Texto actual**: (66) `La guía de la FDA para inspeccionar la liofilización`; (72) `En una planta de API es rara`; (192) `IPC: tolueno por cromatografía de gases ≤ 5 %.»* (Valores de ejemplo.)`
- **Problema**: FDA, API e IPC aparecen por primera vez en la lección sin explicar (regla de siglas del CLAUDE.md).
- **Corrección propuesta**: (66) `La guía de la FDA (*Food and Drug Administration*, la agencia del medicamento de Estados Unidos) para inspeccionar la liofilización`; (72) `En una planta de principio activo (API, *Active Pharmaceutical Ingredient*) es rara`; (192) `IPC: tolueno por cromatografía de gases ≤ 5 %.»* (Valores de ejemplo; IPC es el control en proceso, *in-process control*.)`

## 10. Menor. Sigla ICH sin explicar
- **Archivo y línea**: src/content/nivel1-dispersos.ts:165
- **Texto actual**: `como pide ICH Q7 (apartado 6.52)`
- **Corrección propuesta**: `como pide la guía ICH Q7 (del Consejo Internacional de Armonización, *International Council for Harmonisation*; apartado 6.52)`

## 11. Menor. Sigla CAS sin explicar
- **Archivo y línea**: src/content/nivel1-formulacion.ts:180 (primera aparición; vuelve en 200, 210, 217)
- **Texto actual**: `busca la fórmula y el número CAS de la etiqueta`
- **Corrección propuesta**: `busca la fórmula y el número CAS (el registro del *Chemical Abstracts Service*, un código único para cada sustancia) de la etiqueta`

## 12. Menor. Sigla APQ / instrucción MIE sin explicar
- **Archivo y línea**: src/content/nivel1-gases.ts:186
- **Texto actual**: `La instrucción MIE APQ-5 pide`
- **Corrección propuesta**: `La instrucción técnica complementaria MIE APQ-5 de ese reglamento (APQ: almacenamiento de productos químicos) pide`

## 13. Menor. Sigla API sin explicar (dentro de un título citado)
- **Archivo y línea**: src/content/nivel2-termodinamica.ts:43
- **Texto actual**: `En «Reacciones en la fabricación de API a fondo» (nivel 3) verás`
- **Corrección propuesta**: `En «Reacciones en la fabricación de API a fondo» (nivel 3; API es el principio activo farmacéutico, *Active Pharmaceutical Ingredient*) verás`

---

## Remisiones comprobadas sin problema
Todas las demás citas por título existen y su verbo cuadra con el orden: «El mol a fondo», «Equilibrio químico a fondo», «La materia a fondo», «Inertización a fondo», «Nitrógeno, aire comprimido y vacío a fondo», «Los gases a fondo», «Destilación a fondo», «El secado a fondo», «Punto de fusión y análisis térmico a fondo», «Agua farmacéutica a fondo» (nivel 14), «Enlaces y fuerzas entre moléculas a fondo», «Disoluciones y solubilidad a fondo» (línea 13), «Refractometría, polarimetría y turbidez a fondo», «Extracción líquido-líquido a fondo», «Ácidos, bases y pH a fondo», «Limpieza de equipos a fondo…», «Calor de reacción a fondo», «Velocidad de reacción a fondo», «Hidrogenación a fondo», «Reacciones en la fabricación de API a fondo», «Átomos y tabla periódica a fondo…», «Oxidación y reducción a fondo…», «Química orgánica a fondo…», «Polimorfismo, sales y solvatos a fondo…». No hay flechas «→» ni palabras en mayúsculas que no sean siglas; no hay marcas reales (BASIX-H es ficticio).

## Lecciones revisadas
- gases-a-fondo (src/content/nivel1-gases.ts)
- diagramas-de-fases-a-fondo (src/content/nivel1-fases.ts)
- sistemas-dispersos-a-fondo (src/content/nivel1-dispersos.ts)
- termodinamica-a-fondo (src/content/nivel2-termodinamica.ts)
- formulacion-inorganica-a-fondo (src/content/nivel1-formulacion.ts)

## Recuento
- Crítico: 0
- Mayor: 1
- Menor: 12
