# Revisión cruzada: grupo «nuevas-a»

Lecciones: `empieza-aqui` (nivel0-empieza.ts), `energia-y-calor` (nivel1-energia.ts), `logaritmos-y-exponenciales` (nivel1-logaritmos.ts), `estructura-electronica-a-fondo` (nivel1-estructura.ts), `geometria-molecular-a-fondo` (nivel1-geometria.ts). Rutas relativas a la raíz del repo. No se ha editado nada del repo.

## Qué se comprobó y salió bien

- **Cálculos recalculados con python, todos correctos**:
  - Energía: 245 J; ×17; 360 kJ = 0,1 kWh; ejemplos 1 a 4; planta (28,3 y 69,7 min) y las 10 preguntas.
  - Logaritmos: 10^−4,76; raíz de Kp; log 0,005 y log 150; pH 2,60; Henderson-Hasselbalch 4,67; Antoine a 70 °C (203,8 mmHg, 271,6 mbar), a 200 mbar (61,9 °C) y a 760 mmHg (110,6 °C); (1+1/n)ⁿ; t½ 6,93 min; e^−2; 13,9 min; Arrhenius 0,388, 0,0388 y 17,9 min; inertización 1,46, 3,39 y 2,57 ciclos; barrido 2,35 volúmenes; quiz Antoine a 50 °C (92,1 mmHg).
  - Estructura: Bohr, con 656,4 hecho a partir del ΔE redondeado a 1,889, y 486,3 / 434,2 / 410,3; energías de ionización en kJ/mol con el NIST; 16 %; ×3; 49,6 kJ; 148 kJ/mol; 2,10 eV y 203 kJ/mol; quiz 486, 1251 y 1,62.
  - Geometría: cargas formales; 24 electrones del acetato y del BF₃; Born-Haber U = 787,1 kJ/mol, con 495,8 y 348,6 a partir de 5,139 y 3,613 eV × 96,485; 109,47°; σ/π de la acetona y del benceno.
  - Las tolerancias, que son relativas (`src/lib/num.ts`), aceptan la respuesta y rechazan los errores típicos.
- **Coherencia con el resto de la app y con el simulador**:
  - cp del agua 4,18 y del tolueno 1,70 (igual que `cpSol` 1700 en `src/sim/reactor/model.ts`).
  - Antoine del tolueno igual que en `model.ts`, `destilacion-a-fondo` y `diagramas-de-fases-a-fondo`.
  - k = 0,1 min⁻¹ a 70 °C y Ea = 90 kJ/mol como en `model.ts`.
  - Fórmula de la inertización y factor 0,37 del barrido como en `inertizacion-a-fondo`.
  - Ka 1,74 × 10⁻⁵, 1,32 × 10⁻³ y Henderson-Hasselbalch como en `acidos-bases-a-fondo`.
  - α = √(Kp/(Kp+4P)) con 0,333 → 0,277 como en `gases-a-fondo`.
  - Definición de estereocentro igual que en `nivel3-quiralidad.ts`.
- **Lo que `empieza-aqui` dice de la app, comprobado en el código**:
  - Hay 22 niveles en 5 bloques con esos rangos (`blocks.ts`).
  - La ruta tiene 7 etapas con esos nombres (`operador.ts`) y usa el mismo progreso que el temario (`OperatorRoute.tsx` usa `useProgress`).
  - Las secciones de la lección salen en ese orden, con la nota del subrayado de puntos y «Practícalo en el simulador» solo si hay práctica (`src/app/leccion/[slug]/page.tsx`).
  - Al corregir el test se guarda `done: true` y se puede repetir (`Quiz.tsx`).
  - El buscador se abre con Ctrl/Cmd K o «/» y busca lecciones, términos, siglas y secciones (`Search.tsx`).
  - El mazo «Vocabulario de tus lecciones» sale de las lecciones hechas (`Flashcards.tsx`).
  - Las 6 calculadoras son las que dice la lección (`calculadoras/page.tsx`).
  - El glosario incluye las siglas.
  - Las lecciones cortas duran de 10 a 20 min y las «a fondo» de 30 a 42 min. Las excepciones van en el hallazgo 6.
- **Remisiones «viste» y «verás»**: todas cuadran con el nivel y el order del catálogo. La única que no está bien situada es la del hallazgo 5. Todos los títulos citados existen, aunque en `energia-y-calor` se citan abreviados (hallazgo 4).

---

## Hallazgos

### 1. Mayor: la razón de manejar el Pd/C mojado se atribuye a la energía de ionización
- **Archivo y línea**: `src/content/nivel1-estructura.ts`, líneas 167 y 296-304 (quiz).
- **Texto actual (l. 167)**: «Por eso el Pd/C se maneja mojado con agua, como verás en «Hidrogenación a fondo: hidrógeno, catalizadores y reactores a presión», algo impensable con sodio metálico.»
- **Problema**: hay dos errores.
  1. «Por eso» presenta la energía de ionización como la causa de que el Pd/C se maneje mojado. El motivo real, y el que enseña la propia app, es de seguridad: seco, el catalizador puede inflamarse solo en contacto con el aire. `nivel12-hidrogenacion.ts`, l. 47-49, dice «Por qué arden solos… pirofórico… Siempre mojado». Un operador puede quedarse con que el agua está ahí «porque el paladio no reacciona» y no ver el riesgo de incendio si la torta se seca.
  2. La energía de ionización en fase gas no predice si un metal reacciona con el agua o los ácidos. Contraejemplo con datos del NIST: el oro (9,23 eV) tiene menos energía de ionización que el cinc (9,39 eV), y aun así el oro es noble y el cinc se disuelve en ácido diluido. Lo que decide es el potencial de electrodo estándar (Pd²⁺/Pd unos +0,95 V; Na⁺/Na −2,71 V), que incluye la atomización y la hidratación de los iones.
- **Corrección propuesta (l. 167)**: «El paladio es un metal noble: no reacciona con el agua, y por eso el Pd/C se puede manejar mojado, algo impensable con sodio metálico. Ojo: no se moja porque no reaccione, sino porque seco puede inflamarse solo al contacto con el aire, como verás en «Hidrogenación a fondo: hidrógeno, catalizadores y reactores a presión». Que retenga sus electrones más que el sodio (8,34 eV frente a 5,14 eV) ayuda a entenderlo, pero no basta: la reactividad con el agua depende también de otras energías.»
- **Quiz (l. 301 y l. 304)**: cambiar la opción correcta a «Que el paladio, del bloque d, es un metal noble que no reacciona con el agua; además, se carga mojado porque seco puede inflamarse solo». Añadir al `explain`: «El agua del Pd/C es una medida de seguridad contra la inflamación espontánea, no solo una posibilidad.»

### 2. Mayor: el lote FX-101 de `empieza-aqui` no coincide con el FX-101 del simulador, y el metanol hierve en el límite superior
- **Archivo y línea**: `src/content/nivel0-empieza.ts`, líneas 93-97.
- **Texto actual**: «Llegas al área de producción y ves el reactor R-101, la centrífuga CF-201 y el secadero SD-301. En la hoja del lote FX-101 lees tres pasos seguidos:» y «Cargar 250,0 kg de metanol en R-101.» «Calentar a 60 ± 5 °C y mantener 2 h.»
- **Problema**:
  - En el simulador, el lote FX-101 (`src/sim/engine.ts`, l. 22-28 y 62-64) usa la centrífuga **C-201**, no CF-201. Su reacción es a **75–85 °C durante ≥ 60 min**, no a 60 ± 5 °C durante 2 h. Victor verá dos hojas de «FX-101» que no cuadran. CF-201 también aparece en `nivel9-vestimenta.ts` y `nivel16-desviaciones.ts`, así que el choque de códigos va más allá de esta lección.
  - La app da el punto de ebullición del metanol en 65 °C («metanol hierve a 65 °C» en otras lecciones). Un límite de 60 ± 5 °C con metanol llega justo a la ebullición a presión atmosférica: es un ejemplo poco creíble para la primera lección.
- **Corrección propuesta**: cambiar «En la hoja del lote FX-101 lees tres pasos seguidos:» por «En la hoja de un lote ficticio lees tres pasos seguidos:». Cambiar «Cargar 250,0 kg de metanol en R-101.» por «Cargar 250,0 kg de tolueno en R-101.». El tolueno hierve a unos 111 °C y es el disolvente de otras lecciones. Opcional: unificar CF-201 y C-201 en toda la app.

### 3. Menor: el kilovatio no son «mil julios»
- **Archivo y línea**: `src/content/nivel1-energia.ts`, línea 42.
- **Texto actual**: «En planta se usa el **kilovatio** (kW): mil julios, es decir, **1 kJ cada segundo**.»
- **Problema**: un kW son mil vatios, es decir, mil julios por segundo. «Mil julios» a secas es una energía, no una potencia. Es justo la confusión kW/kWh contra la que avisa la lección en la l. 56.
- **Corrección propuesta**: «En planta se usa el **kilovatio** (kW): mil vatios, es decir, mil julios cada segundo, **1 kJ cada segundo**.»

### 4. Menor: títulos de lecciones citados abreviados
- **Archivo y líneas**: `src/content/nivel1-energia.ts`, l. 13, 27, 37, 96 y 108.
- **Texto actual**: los títulos citados no existen tal cual en el catálogo. El orden de estudio es correcto: los «viste» son anteriores y los «verás» posteriores.

| Cita | Título completo |
|---|---|
| «Unidades de medida a fondo» | «Unidades de medida a fondo: el SI, las conversiones de planta y los errores que cuestan caro» (0/4) |
| «La materia a fondo» | «La materia a fondo: estados, cambios de estado y mezclas» (1/2) |
| «Intercambio de calor y frío a fondo» | «Intercambio de calor y frío a fondo: cómo se calienta y se enfría un proceso» (11/8) |
| «Vapor y calderas a fondo» | «Vapor y calderas a fondo: el servicio que calienta la planta» (11/6) |
| «El reactor a fondo» | «El reactor a fondo: agitación, intercambio de calor y protecciones» (12/2) |
| «Agitación a fondo» | «Agitación a fondo: rodetes, potencia y mezcla en el reactor» (12/2.5) |

- **Problema**: el buscador las encuentra, pero no coinciden literalmente con el título. Las demás lecciones del grupo citan el título completo.
- **Corrección propuesta**: sustituir cada cita por su título completo de `src/content/catalog.generated.json`, al menos en la primera aparición. Por ejemplo, en la l. 13: «en «Unidades de medida a fondo: el SI, las conversiones de planta y los errores que cuestan caro» viste el julio y el vatio, y en «La materia a fondo: estados, cambios de estado y mezclas» que la temperatura…».

### 5. Menor: el símbolo ⇌ aparece antes del nivel 2
- **Archivo y línea**: `src/content/nivel0-empieza.ts`, línea 77.
- **Texto actual**: «la reacción ocurre en los dos sentidos a la vez. Lo verás en el nivel 2.»
- **Problema**: el primer uso de ⇌ en el orden de estudio está en el nivel 1. Lo usa `acidos-bases-a-fondo` (1/12), l. 29 y 51: «NH₃ + H₂O ⇌ NH₄⁺ + OH⁻». El tema completo sí está en el nivel 2 («Equilibrio químico a fondo: empujar una reacción hacia donde interesa», 2/11).
- **Corrección propuesta**: «Lo verás por primera vez en el nivel 1, con los ácidos y las bases, y con calma en el nivel 2.»

### 6. Menor: no todos los temas tienen versión corta y «a fondo»
- **Archivo y línea**: `src/content/nivel0-empieza.ts`, línea 47.
- **Texto actual**: «Cada tema tiene una **lección corta**, de 10 a 20 minutos, y una versión **«a fondo»**, de unos 30 a 40 minutos. Hay además lecciones «a fondo» sin versión corta, que amplían un tema.»
- **Problema**: `energia-y-calor` (20 min) y `logaritmos-y-exponenciales` (28 min, fuera del rango de 10 a 20) son lecciones intermedias sin versión «a fondo». Las «a fondo» llegan a 42 min (una lección).
- **Corrección propuesta**: añadir al final: «Y unas pocas lecciones de apoyo, como las de energía o logaritmos, van solas, con una duración intermedia.»

### 7. Menor: «queda para otra lección» sin decir cuál
- **Archivo y línea**: `src/content/nivel1-estructura.ts`, línea 169.
- **Texto actual**: «ese balance, el ciclo de Born-Haber, queda para otra lección.»
- **Problema**: la lección existe y es la siguiente en el orden (`geometria-molecular-a-fondo`, 1/12.7, Ejercicio resuelto 5).
- **Corrección propuesta**: «ese balance, el ciclo de Born-Haber, lo verás en «La forma de las moléculas a fondo: Lewis, RPECV e hibridación».»

### 8. Menor: siglas sin explicar la primera vez en la lección
- `src/content/nivel1-energia.ts` l. 115, `src/content/nivel1-estructura.ts` l. 182 y `src/content/nivel1-geometria.ts` l. 182.
  - **Texto actual**: «procedimiento vigente (SOP)».
  - **Corrección propuesta**: «procedimiento vigente (SOP, *Standard Operating Procedure*)».
- `src/content/nivel1-estructura.ts` l. 172.
  - **Texto actual**: «El manual de análisis elemental de la FDA».
  - **Corrección propuesta**: «El manual de análisis elemental de la FDA (*Food and Drug Administration*, la agencia del medicamento de Estados Unidos)».
- `src/content/nivel1-estructura.ts` l. 178.
  - **Texto actual**: «**Plasma acoplado inductivamente (ICP).** En el ICP-OES los átomos excitados…».
  - **Problema**: falta el inglés y no se explican OES ni MS.
  - **Corrección propuesta**: «**Plasma acoplado inductivamente** (*inductively coupled plasma*, ICP). En el ICP-OES (*optical emission spectrometry*, emisión óptica) los átomos excitados en un plasma de argón emiten sus rayas; en el ICP-MS (*mass spectrometry*, espectrometría de masas) se cuentan como iones.»
- `src/content/nivel1-estructura.ts` l. 167.
  - **Texto actual**: «el Pd/C».
  - **Problema**: es la primera vez que sale en la lección y no se explica.
  - **Corrección propuesta**: «el Pd/C (paladio sobre carbón, *palladium on carbon*)».
- `src/content/nivel1-logaritmos.ts` l. 75.
  - **Texto actual**: «Con pKa = 4,76».
  - **Problema**: el pKa no se ha definido en esta lección ni antes en el orden de estudio. Se define en `acidos-bases-a-fondo` (1/12).
  - **Corrección propuesta**: «Con pKa = 4,76 (el pKa es −log Ka: −log 1,74 × 10⁻⁵ = 4,76, el número del ejemplo 1)».

### 9. Menor: términos técnicos sin su inglés la primera vez en el orden de estudio
- `src/content/nivel1-geometria.ts`, l. 19.
  - **Texto actual**: «**Si puede ser quiral**».
  - **Corrección propuesta**: «**Si puede ser quiral** (*chiral*)».
- `src/content/nivel1-geometria.ts`, l. 144.
  - **Texto actual**: «es un estereocentro», «Por eso la racemización ocurre».
  - **Corrección propuesta**: «es un estereocentro (*stereocentre*)», «Por eso la racemización (*racemisation*: pasar a una mezcla a partes iguales de las dos versiones) ocurre».
  - **Por qué**: es el primer uso en todo el orden de estudio. `nivel3-quiralidad.ts` lo da con inglés, pero va después.
- `src/content/nivel1-geometria.ts`, l. 319 (explain del quiz).
  - **Texto actual**: «pasa al otro enantiómero».
  - **Corrección propuesta**: «pasa a la otra versión, su imagen en el espejo (el otro enantiómero, *enantiomer*)».
- `src/content/nivel1-logaritmos.ts`, l. 32.
  - **Texto actual**: «Este número es la constante de acidez del ácido acético».
  - **Corrección propuesta**: «Este número es la constante de acidez (*acid dissociation constant*, Ka) del ácido acético».
- `src/content/nivel1-logaritmos.ts`, l. 131.
  - **Texto actual**: «Ea es la energía de activación en J/mol».
  - **Corrección propuesta**: «Ea es la energía de activación (*activation energy*) en J/mol».

### 10. Menor: la tabla de fuentes tiene el order desactualizado
- **Archivo y línea**: `docs/fuentes/energia-y-calor.fuentes.md`, línea 3.
- **Texto actual**: «Lección de iniciación (nivel 1, order 0; el informe de progresión proponía order 2.2, detrás de `materia-a-fondo`).»
- **Problema**: la lección ya tiene order 2.2. El texto de la lección («Se apoya en dos lecciones anteriores…») depende de ese orden.
- **Corrección propuesta**: «Lección de iniciación (nivel 1, order 2.2, detrás de `materia-a-fondo`).»

---

## Lecciones revisadas
1. `empieza-aqui`: contenido y afirmaciones sobre la app, contrastadas con el código.
2. `energia-y-calor`
3. `logaritmos-y-exponenciales`
4. `estructura-electronica-a-fondo`
5. `geometria-molecular-a-fondo`

## Recuento por gravedad
- Crítico: 0
- Mayor: 2 (hallazgos 1 y 2)
- Menor: 8 (hallazgos 3 a 10; el 8 y el 9 agrupan varias siglas y términos)
