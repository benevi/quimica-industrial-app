# Revisión del grupo «nuevas-c»

Lecciones: `electroquimica-a-fondo` (nivel2-electroquimica.ts), `acido-base-avanzado-a-fondo` (nivel2-acidobase.ts), `ley-de-velocidad-a-fondo` (nivel2-velocidad.ts), `reactividad-organica-a-fondo` (nivel3-reactividad.ts), `polimeros-a-fondo` (nivel3-polimeros.ts). Solo revisión; no se ha editado el repo.

## Qué se comprobó

- **Cálculos**: todos se recalcularon con Python, incluidas todas las respuestas numéricas del quiz (`answer`, `tolerance` relativa, `unit` y el número del `explain`). Cuadran todos: F = 96485,33; E°(O₂/H₂O) = 1,2289 V; K ≈ 2404 y log K = 30,4; 1,481 V; cuba de cloro-sosa (8955 mol e⁻, 301,6 kg Cl₂, 340,3 kg NaOH, 8,6 kg H₂, 2387 kWh/t, 317,5 kg); niquelado 98,5 g y 21,9 g; KF 93,36 µg/C, 10,71 C y 107 s; tablas de α y pH del acético; NH₃ pH 10,97; especiación del diácido y del anfótero; tampones (4,72; 4,28; 0,0818 mol; 4,28/3,81/2,73/1,70); tabla de extracción de AM-7; Arrhenius del R-204 (0,0388 min⁻¹; 17,9; 35,7; 48,8 min); segundo orden (50, 100, 450, 166 min); tabla del ejemplo 6; ejemplo 7 (10,0/11,2/13,2/16,4 h); Pd 0,30 % molar y 0,28 % en el quiz; Arrhenius de la eliminación (× 10,03, × 6,33, 3,13 %); nitración 615 kg; poliamida 13,7 %; PTFE 76 %; PVC 56,7 %; hinchamiento 15,0 %; migración 60 y 16 mg/kg. Ajustes de ecuaciones (átomos y cargas) revisados a mano: correctos.
- **Contra el resto de la app y el simulador**: S° y ΔfH° del agua iguales a `termodinamica-a-fondo`; 93,36 µg/C igual a `karl-fischer-a-fondo`; 59,16 mV/pH igual a `potenciometria-a-fondo`; pH 8,73 en la equivalencia igual a `valoraciones-a-fondo`; atajo del ácido débil igual a `acidos-bases-a-fondo`; PDE del Pd 100 µg/día y 10 µg/g iguales a `nivel1-atomos` y `hidrogenacion-a-fondo`; R-204 (k = 0,1 min⁻¹ a 70 °C, Ea 90 kJ/mol, B ≤ 0,5 %) igual a `src/sim/reactor/model.ts` y `docs/simulador-reactor.md`; ejemplo de Pd (0,4 kg, 200 kg, 160 g/mol) igual a `hidrogenacion-a-fondo`.
- **Remisiones**: se cruzaron todas las citas «…» con `catalog.generated.json` (nivel y order). Todos los títulos citados existen (completos o con la parte antes de los dos puntos). Los «viste» apuntan a lecciones anteriores y los «verás» a posteriores, salvo el hallazgo 6. Las remisiones neutras («está en», entre paréntesis) no se señalan.

## Hallazgos

### 1. Calibración con tampones que no encierran el valor medido
- **Gravedad**: mayor (contradice la regla de la app y lo que dice la propia escena)
- **Archivo y línea**: `src/content/nivel2-acidobase.ts`, línea 234 (plant)
- **Texto actual**: «calibrado esa mañana con tampones de pH 7 y 10 (los que encierran el valor a medir)»
- **Problema y evidencia**: la hoja pide pH 10,5–11,5 y la medida que da por buena es 10,9: los dos quedan **fuera** del tramo 7–10. `potenciometria-a-fondo` (nivel7-potenciometria.ts, línea 86) y `acidos-bases-a-fondo` (nivel1-acidos.ts, línea 165) enseñan que se calibra con tampones que encierran el valor, y que fuera del tramo «la recta se alarga a ciegas». La escena enseña lo contrario de lo que dice. La tabla de fuentes (fila de plant y batchRecord) dice «Coherente con la tabla del cuerpo», pero no lo es.
- **Corrección propuesta**: «calibrado esa mañana con tampones de pH 10 y 12 (los que encierran el intervalo de 10,5 a 11,5 que hay que medir)». Actualizar también la fila correspondiente de `docs/fuentes/acido-base-avanzado-a-fondo.fuentes.md` («tampones 7 y 10» por «tampones 10 y 12»).

### 2. Razón química equivocada en la escena del permanganato
- **Gravedad**: mayor (enseña un motivo químico falso)
- **Archivo y línea**: `src/content/nivel2-electroquimica.ts`, línea 232 (plant)
- **Texto actual**: «Sabe por qué: en medio ácido o casi neutro el permanganato no sigue la misma reacción y la estequiometría de la hoja dejaría de valer.»
- **Problema y evidencia**: el pH medido es 9,2, que es básico. En medio neutro o débilmente básico el permanganato también se reduce a MnO₂ (3 electrones), igual que a pH 10–11; la propia app lo dice en `volumetrias-especiales-a-fondo` (nivel6-especiales.ts, línea 34: «con poco ácido el manganeso se queda en dióxido de manganeso»). La razón para no empezar es que el valor está fuera del intervalo validado de la hoja, no que la reacción cambie a pH 9,2. Tal como está, Victor aprende que a pH 9 el permanganato ya «no sigue la misma reacción».
- **Corrección propuesta**: «Sabe por qué: el proceso está validado en ese intervalo y fuera de él la reacción puede no ir como prevé la hoja (en ácido, por ejemplo, el permanganato da Mn²⁺ con 5 electrones en lugar de MnO₂ con 3); decidir si 9,2 vale no le toca a ella.»

### 3. La escena de la junta da por buena una junta de nitrilo para una campaña en tolueno
- **Gravedad**: mayor (puede enseñar que el NBR es adecuado para tolueno)
- **Archivo y línea**: `src/content/nivel3-polimeros.ts`, líneas 166, 174 (plant) y 254 y 256 (quiz)
- **Texto actual**: «El lote anterior se hizo en tolueno; este, en acetona.» (l. 166); «la manguera MF-07 había quedado con la junta de la campaña anterior» (l. 174); «En un cambio de campaña de tolueno a acetona» (l. 254); «El nitrilo no resiste el tolueno: la secas al aire y la vuelves a montar en la manguera» (l. 256)
- **Problema y evidencia**: la escena da a entender que la junta NBR era la correcta para la campaña de tolueno y solo falla con la acetona. El nitrilo resiste aceites e hidrocarburos alifáticos, pero los aromáticos como el tolueno lo hinchan mucho; las tablas de compatibilidad de fabricantes de juntas lo dan como no recomendado (conocimiento sólido, no comprobado en una fuente gratuita en esta revisión). Dentro de la app, la FDS del tolueno (`src/content/fds.ts`, línea 315) y `nivel15-fds.ts` (línea 174) dicen que el nitrilo solo sirve para salpicaduras. Además, en el quiz la opción b, marcada como incorrecta, empieza con una afirmación verdadera («El nitrilo no resiste el tolueno»), lo que la hace confusa. La tabla de la OIT (l. 94) dice «disolventes» sin matizar, y la lección no avisa de ello.
- **Corrección propuesta**: cambiar el disolvente de la campaña anterior por uno alifático. L. 166: «El lote anterior se hizo en heptano; este, en acetona.» L. 254: «En un cambio de campaña de heptano a acetona, encuentras hinchada la junta de nitrilo (NBR) de una manguera. ¿Qué explica la tabla de la OIT y qué haces?» L. 256: «El nitrilo no resiste el heptano: la secas al aire y la vuelves a montar en la manguera». Opcional, tras la tabla de la l. 94 y solo si se verifica con la tabla de un fabricante: «La tabla de la OIT es general: no todos los disolventes se portan igual con cada goma. Qué aguanta una junta concreta lo da la tabla de compatibilidad de su fabricante.»

### 4. Quiz ambiguo: «reutilizado por tercera vez»
- **Gravedad**: mayor (quiz ambiguo)
- **Archivo y línea**: `src/content/nivel2-velocidad.ts`, línea 295
- **Texto actual**: «Con el catalizador reutilizado por tercera vez, como permite el proceso, el IPC tarda 13 h en cumplir»
- **Problema y evidencia**: «reutilizado por tercera vez» es el **cuarto** uso (nuevo + 3 reutilizaciones). La escena de la lección (l. 187 y 189) permite como máximo tres usos y da 13,2 h para el **tercer uso**, que es lo que pretende la pregunta. Leído al pie de la letra, el catalizador estaría fuera de sus usos permitidos y la respuesta «anotarlo: es la pérdida prevista» dejaría de ser la correcta (habría que avisar, como dice el batchRecord: «catalizador fuera de su número de usos»).
- **Corrección propuesta**: «Con el catalizador en su tercer uso, como permite el proceso, el IPC tarda 13 h en cumplir; con catalizador nuevo tardaba 10 h. ¿Qué es lo más razonable?»

### 5. Contradicción interna: guantes de PVC y polietileno llamados elastómeros
- **Gravedad**: mayor (contradicción dentro de la lección)
- **Archivo y línea**: `src/content/nivel3-polimeros.ts`, línea 109
- **Texto actual**: «los guantes de protección química son normalmente de **elastómeros** (látex, PVC, nitrilo, neopreno, polietileno, butilo, alcohol polivinílico o PVA, y un fluoroelastómero que cita por su marca)»
- **Problema y evidencia**: la misma lección (l. 63 y tabla de la l. 41–45) clasifica el PVC y el polietileno como **termoplásticos**, y el PVA tampoco es un elastómero. La frase sigue a la NTP 1136, pero en esta lección, cuyo objetivo es distinguir termoplásticos de elastómeros, deja a Victor con dos clasificaciones distintas para el mismo material. `nivel15-epi.ts` (l. 85) cita la misma lista sin llamarlos elastómeros.
- **Corrección propuesta**: «los guantes de protección química se hacen de polímeros flexibles: látex, PVC, nitrilo, neopreno, polietileno, butilo, alcohol polivinílico (PVA) y un fluoroelastómero que cita por su marca. Unos son elastómeros (látex, nitrilo, neopreno, butilo); otros, como el PVC o el polietileno, son termoplásticos.»

### 6. Remisión en presente a una lección posterior
- **Gravedad**: menor
- **Archivo y línea**: `src/content/nivel2-acidobase.ts`, línea 204
- **Texto actual**: «En «Extracción líquido-líquido a fondo» tienes lo que queda en el agua tras una extracción:»
- **Problema y evidencia**: `extraccion-a-fondo` es nivel 12, order 5,5; esta lección es nivel 2, order 11,5. «Tienes» da la fórmula por vista, y Victor todavía no la ha estudiado. (En la l. 144 la misma lección sí usa el futuro, «usarás».)
- **Corrección propuesta**: «En «Extracción líquido-líquido a fondo» (nivel 12) verás que lo que queda en el agua tras una extracción es»

### 7. ICH M9: requisito más amplio que el de la guía
- **Gravedad**: menor (afirmación más amplia que la fuente)
- **Archivo y línea**: `src/content/nivel2-acidobase.ts`, línea 159
- **Texto actual**: «la guía ICH M9 pide medir la solubilidad de un principio activo a varios pH, incluido el de menor solubilidad.»
- **Problema y evidencia**: según la tabla de fuentes (fila de ICH M9, apartado 2.1), la guía pide el pH de menor solubilidad **si cae en el intervalo 1,2–6,8**, no siempre.
- **Corrección propuesta**: «la guía ICH M9 pide medir la solubilidad de un principio activo a varios pH entre 1,2 y 6,8, incluido el de menor solubilidad si cae en ese intervalo.»

### 8. Grado de polimerización que no sale con la masa molar que se da
- **Gravedad**: menor (redondeo)
- **Archivo y línea**: `src/content/nivel3-polimeros.ts`, línea 26
- **Texto actual**: «Grado de polimerización = 280 000 / 28,05 = 9981»
- **Problema y evidencia**: 280 000 / 28,05 = 9982,2. El 9981 sale de la masa sin redondear del NIST (28,0532), que no es la que ve el lector.
- **Corrección propuesta**: «Grado de polimerización = 280 000 / 28,05 = 9982»

### 9. IPC sin explicar la primera vez
- **Gravedad**: menor (regla de siglas)
- **Archivo y línea**: `src/content/nivel2-velocidad.ts`, línea 92 (primera vez en el body; también en el summary, l. 11), y `src/content/nivel3-reactividad.ts`, línea 187 (plant; primera vez en la l. 183, dentro de la cita de la hoja)
- **Texto actual**: velocidad, «que el IPC pide B ≤ 0,5 %»; reactividad, «El IPC da un 0,21 % de alqueno: cumple.»
- **Problema y evidencia**: ninguna de las dos lecciones explica «control en proceso» (está en `siglas.ts`, pero la regla del CLAUDE.md pide explicarla en la lección la primera vez que aparece).
- **Corrección propuesta**: velocidad, «que el control en proceso (IPC, *in-process control*) pide B ≤ 0,5 %»; reactividad, «El control en proceso (IPC) da un 0,21 % de alqueno: cumple.»

### 10. ICH (y CFR) sin explicar la primera vez (práctica general de la app)
- **Gravedad**: menor (regla de siglas; baja prioridad)
- **Archivo y línea**: `nivel2-acidobase.ts` l. 159 («la guía ICH M9»); `nivel2-velocidad.ts` l. 130 («que ICH Q3D cita»); `nivel3-reactividad.ts` l. 30 («El addendum de la guía ICH M7»); `nivel3-polimeros.ts` l. 106 («ICH Q7, la guía de buenas prácticas de fabricación de principios activos») y l. 78 («21 CFR 177.1550»).
- **Problema y evidencia**: ICH no se explica en ninguna de las cuatro lecciones, y CFR tampoco. Pero ICH sale sin explicar en unas 124 lecciones y solo 2 lo explican: es la práctica de la app. Se señala por la regla y para decidir en bloque.
- **Corrección propuesta** (si se quiere aplicar): la primera vez, «la guía ICH M9 (del Consejo Internacional de Armonización, *International Council for Harmonisation*)» y análogas; «el reglamento estadounidense 21 CFR 177.1550 (código de reglamentos federales, *Code of Federal Regulations*)».

## Comprobaciones sin hallazgo (para que conste)

- Afirmaciones que en la tabla de fuentes figuran como «solo fragmento de buscador» o «libro de texto sin fuente leída» (fem = E°cát − E°án, mecanismos SN1/SN2/E1/E2, Markovnikov, Zaitsev, NaBH₄, siglas FKM/EPDM): el texto las da como química general sin cifras concretas tomadas de esas fuentes, o lo declara de forma expresa («Aviso honesto», «reglas de libro de texto», «solo las hemos visto en fuentes técnicas del buscador»). No se ha visto ninguna cifra de esas fuentes presentada como dato comprobado.
- Sin flechas «→», sin palabras en mayúsculas que no sean siglas, sin marcas ni empresas reales usadas como de la planta (el caso de la EMA no nombra marca ni empresa; el de la CSB cita la planta real como caso documentado, no como equipo ficticio). Sin erratas detectadas.

## Lecciones revisadas

1. `electroquimica-a-fondo`: «Electroquímica a fondo: pilas, electrólisis y corrosión»
2. `acido-base-avanzado-a-fondo`: «Equilibrios ácido-base en profundidad»
3. `ley-de-velocidad-a-fondo`: «Ley de velocidad y catalizadores a fondo»
4. `reactividad-organica-a-fondo`: «Cómo reaccionan las moléculas orgánicas a fondo»
5. `polimeros-a-fondo`: «Polímeros a fondo: plásticos, gomas y juntas de planta»

## Recuento por gravedad

- Crítico: 0
- Mayor: 5 (hallazgos 1 a 5)
- Menor: 5 (hallazgos 6 a 10)
