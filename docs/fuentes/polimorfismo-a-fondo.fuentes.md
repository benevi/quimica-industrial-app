# Fuentes y comprobaciones: lección `polimorfismo-a-fondo`

Niveles de comprobación:

- **Leído**: descargué el documento oficial (PDF) con curl, lo pasé a texto con `pdftotext -layout` y leí el pasaje. Los árboles de decisión de ICH Q6A son imágenes: los rendericé con `pdftoppm` y los leí en imagen.
- **Recalculado**: cálculo propio con Python (`src_polimorf/calc.py` y comprobaciones en línea), redondeado igual que en el texto.
- **Libro de texto**: conocimiento general de química (cristalografía y termodinámica básicas) según el añadido de química básica; no lo leí en una fuente durante la sesión.
- **Valor de ejemplo declarado**: dato inventado y declarado así en la lección.

Documentos leídos:

- ICH Q6A, *Specifications: Test Procedures and Acceptance Criteria for New Drug Substances and New Drug Products: Chemical Substances* (Step 4, 6-10-1999). https://database.ich.org/sites/default/files/Q6A%20Guideline.pdf
- ICH Q7, *Good Manufacturing Practice Guide for Active Pharmaceutical Ingredients*. https://database.ich.org/sites/default/files/Q7%20Guideline.pdf
- FDA, *Guidance for Industry. ANDAs: Pharmaceutical Solid Polymorphism. Chemistry, Manufacturing, and Controls Information* (julio de 2007). https://www.fda.gov/media/71375/download
- FDA, *Regulatory Classification of Pharmaceutical Co-Crystals. Guidance for Industry* (febrero de 2018, revisión 1). https://www.fda.gov/media/81824/download

## Tabla de afirmaciones

| Afirmación o cifra de la lección | Fuente | Cómo se comprobó |
|---|---|---|
| Sólido cristalino: moléculas en un patrón que se repite; red cristalina | FDA 2007, apartado II («arrangements and/or conformations of the molecules in the crystal lattice») y libro de texto | Leído / libro de texto |
| Amorfo: disposición desordenada, sin red cristalina reconocible | FDA 2007, apartado II («disordered arrangements of molecules that do not possess a distinguishable crystal lattice») | Leído |
| Analogía de las piezas de lego (orden, montón, dos montajes) | Recurso didáctico propio | No aplica |
| Definición de polimorfismo de Q6A: distintas formas cristalinas de la misma sustancia; puede incluir solvatos e hidratos («pseudopolimorfos») y amorfos | ICH Q6A, 3.3.1 c) y glosario («Polymorphism») | Leído |
| La FDA usa la misma idea amplia (cristalinos, amorfos, solvatos, hidratos) | FDA 2007, apartado II | Leído |
| La molécula no cambia; un análisis químico ve la misma sustancia | FDA 2007, apartado IV («differ in internal solid-state structure, but not in chemical structure») | Leído (la parte de la cromatografía es consecuencia deducida) |
| Un principio activo de un medicamento aprobado puede existir en al menos veinte formas; solo unas pocas aparecen en las condiciones del proceso | FDA 2007, nota 7 | Leído |
| Propiedades que cambian entre polimorfos: punto de fusión, reactividad, solubilidad aparente, velocidad de disolución, densidad (y ópticas, mecánicas, presión de vapor) | FDA 2007, III.A | Leído |
| Propiedades de fabricación: higroscopicidad, forma de partícula, fluidez, compactabilidad | FDA 2007, III.C.2 | Leído |
| El polimorfismo puede afectar a calidad, seguridad y eficacia | FDA 2007, III.A | Leído |
| Si la absorción está limitada solo por la disolución, diferencias de solubilidad pueden afectar a la biodisponibilidad | FDA 2007, III.C.1 | Leído |
| Fila «Filtración y secado» de la tabla (otra forma suele traer otro hábito) | Libro de texto; la FDA (III.C.2) dice que la forma de la partícula cambia entre polimorfos y afecta al procesado | Leído en parte / libro de texto |
| Q6A 3.3.1 c): si las diferencias afectan al comportamiento, biodisponibilidad o estabilidad, se especifica el estado sólido adecuado | ICH Q6A, 3.3.1 c) | Leído |
| Árboles 4(1) a 4(3): cribado y caracterización (XRPD, DSC/termoanálisis, microscopía, espectroscopia); si propiedades distintas (solubilidad, estabilidad, punto de fusión) y afecta a seguridad, comportamiento o eficacia, criterio para el contenido de polimorfo en el principio activo | ICH Q6A, árbol de decisión 4, páginas 24 y 25 del documento (imagen) | Leído (imagen renderizada) |
| Forma estable = menor energía; metaestables; la metaestable pasa a la estable y no al revés | Termodinámica de libro de texto | Libro de texto |
| La forma estable es la menos soluble | Termodinámica de libro de texto | Libro de texto |
| En algunos productos la forma estable depende de la temperatura (enantiotropía) | Libro de texto | Libro de texto (no se nombra el término) |
| En el desarrollo se suele elegir la forma más estable (menos riesgo de conversión, más estabilidad química); a veces una metaestable para mejorar la biodisponibilidad | FDA 2007, III.C.3 | Leído |
| Cautela si se usa una metaestable, porque la fabricación puede cambiar la forma | FDA 2007, V.C | Leído |
| Causas de transformación: secado, molienda, micronización, granulación húmeda, (secado por atomización), compactación, humedad y temperatura | FDA 2007, III.C.2 | Leído |
| La transformación no es grave si ocurre de forma consistente en un proceso validado con variables críticas controladas | FDA 2007, III.C.2 | Leído |
| Transformación en suspensión: la metaestable, algo más soluble, se disuelve y la estable crece | Consecuencia de la diferencia de solubilidad (libro de texto) y de la siembra de «Disoluciones y solubilidad a fondo» | Libro de texto / deducido |
| Tabla de parámetros que controlan la forma (disolvente con su agua, temperatura, velocidad, siembra, maduración, secado, molienda, humedad) | Lección existente `polimorfismo-y-sales` (disolvente, temperatura, enfriamiento, siembra, agitación, secado, molienda) y FDA 2007, III.C.2 (secado, molienda, humedad, temperatura) | Leído / libro de texto |
| Por qué se «pierde» una forma: los cristales de la forma estable actúan como semilla | Deducido de la siembra (lección «Disoluciones y solubilidad a fondo») | Deducido; no se cita ningún caso real |
| Hoja ficticia de VX-30 clorhidrato forma B (cantidades, temperaturas, 10 °C/h, 50 mbar abs, 45 °C, 0,75 kg de semilla) | Valores de ejemplo declarados | Valor de ejemplo declarado; 0,75 kg = 0,5 % de 150,0 kg (recalculado) |
| Q7 6.52: anotar resultados reales de los parámetros críticos | ICH Q7, 6.52 | Leído |
| Q7 8.20: cumplir los tiempos fijados; desviaciones documentadas y evaluadas | ICH Q7, 8.20 | Leído |
| Q7 8.15: documentar y explicar cualquier desviación | ICH Q7, 8.15 | Leído |
| XRPD da un patrón propio de cada forma; un amorfo no da picos sino una joroba ancha | Libro de texto; la lección existente del nivel 7 usa la misma idea | Libro de texto |
| La difracción de polvo puede dar prueba inequívoca de polimorfismo (la de monocristal, definitiva) | FDA 2007, III.B | Leído |
| DSC: cada forma funde a su temperatura; detecta solvatos | Lección existente «Punto de fusión y DSC»; Q6A árbol 4 (DSC para caracterizar) | Leído (en la app y en Q6A) |
| IR del sólido cambia algo entre formas | ICH Q6A 3.3.1 c) cita «solid state IR»; la explicación es de libro de texto | Leído / libro de texto |
| TGA: un hidrato pierde el peso de su agua al calentar | Q6A 3.3.1 c) cita TGA; lección del nivel 7 de la app; explicación de libro de texto | Leído / libro de texto |
| Técnicas de Q6A: punto de fusión con platina caliente, IR del sólido, XRPD, DSC, TGA, DTA, Raman, microscopía, RMN del sólido | ICH Q6A, 3.3.1 c) | Leído |
| Solvato: disolvente en el cristal, cantidad estequiométrica o no; si es agua, hidrato | FDA 2007, apartado II | Leído |
| Disolvente de superficie frente a disolvente de red; la desolvatación da otra forma y a veces un amorfo | Libro de texto; la lección «Enlaces y fuerzas entre moléculas a fondo» dice que sacar el disolvente de la red da otra forma | Libro de texto / leído en la app |
| Secar de más rompe un hidrato; secar poco deja el solvato sin romper | Deducido de lo anterior y de la lección `polimorfismo-y-sales` («un secado demasiado fuerte puede convertir un hidrato en la forma anhidra») | Deducido |
| Q6A 3.3.1 e): agua importante si es hidrato estequiométrico; preferible un método específico (Karl Fischer) a la pérdida por secado | ICH Q6A, 3.3.1 e) | Leído |
| Masas atómicas H 1,008, O 15,999, Cl 35,45 | Valores estándar de la IUPAC, no leídos en esta sesión | Libro de texto |
| Agua 18,015 g/mol; HCl 36,46 g/mol | Cálculo | Recalculado (18,015; 36,458) |
| PX-40: 382,4 g/mol (valor de ejemplo); monohidrato 400,415 g/mol; agua 4,50 % | Valor de ejemplo declarado y cálculo | Recalculado (4,499 %) |
| 250 kg de monohidrato pierden 11,25 kg y quedan 238,75 kg | Cálculo | Recalculado |
| Karl Fischer de 2,9 % frente a 4,50 % teórico | Valor de ejemplo declarado | Valor de ejemplo |
| Sal = ácido + base; la amina toma el protón y el cloruro es el contraión | Libro de texto; lección «Ácidos, bases y pH a fondo» de la app | Libro de texto / leído en la app |
| Por qué se hace una sal (solubilidad, estabilidad, cristalizar mejor) | Lección existente `polimorfismo-y-sales` y «Enlaces y fuerzas entre moléculas a fondo» | Leído en la app |
| Formar una sal exige grupos ionizables | FDA 2018 (cocristales), apartado II («ionizable functional groups, which is a prerequisite for salt formation») | Leído |
| Notación VX-30·HCl, diclorhidrato ·2HCl, sal hidratada ·HCl·H₂O | Libro de texto | Libro de texto |
| Factor = masa molar de la base / masa molar de la sal | Libro de texto (estequiometría) | Libro de texto |
| VX-30 base 285,3 g/mol; sal 321,76 g/mol; factor 0,8867 | Valor de ejemplo declarado y cálculo | Recalculado (0,88669) |
| 120,0 kg de sal contienen 106,4 kg de base; 13,6 kg de ácido | Cálculo | Recalculado |
| 150,0 kg de base: 525,76 mol; 19 169 g = 19,17 kg de HCl; 54,77 kg al 35 % | Cálculo; riqueza 35 % de la ficha ficticia CLORAC 35 de la app (`src/content/fds.ts`) | Recalculado |
| Riqueza 99,2 % como sal = 87,96 % como base; 50,0 kg de base = 56,84 kg de producto | Valor de ejemplo y cálculo | Recalculado |
| Cocristal: dos o más moléculas distintas en la misma red, principio activo y coformador; no iónico; se distingue de la sal; clasificación similar a un polimorfo; útil sin grupos ionizables | FDA 2018, apartados II y III | Leído |
| Los amorfos tienden a cristalizar con calor o humedad | FDA 2007, III.C.2 (humedad y temperatura inducen conversión entre formas, incluidos amorfos) y libro de texto | Leído en parte / libro de texto |
| Hábito cristalino: agujas, placas, prismas; depende del disolvente, la velocidad y la agitación; efecto en filtración, lavado, secado y fluidez | Libro de texto; la FDA (III.C.2) cita la forma de partícula y la fluidez | Libro de texto / leído en parte |
| Q6A 3.3.1 b): el tamaño puede afectar a disolución, biodisponibilidad y estabilidad; medir y fijar criterios | ICH Q6A, 3.3.1 b) | Leído |
| Árbol 3 de Q6A: cinco preguntas (disolución, solubilidad o biodisponibilidad; procesabilidad; estabilidad; uniformidad de contenido; aspecto); con un sí se fija criterio; en disoluciones no hace falta | ICH Q6A, árbol de decisión 3, página 23 (imagen) | Leído (imagen renderizada) |
| El ensayo de tamaño puede ser control en proceso o de liberación | ICH Q6A, 2.4 | Leído |
| Q7 8.45: mezclas de lotes validadas con tamaño de partícula, densidad aparente y compactada si los atributos físicos son críticos | ICH Q7, 8.45 | Leído |
| Repetir una cristalización del proceso es reprocesado (14.20); recristalizar con otro disolvente es retrabajo y exige investigación previa (14.30) | ICH Q7, 14.20, 14.30 y glosario («Reworking», ejemplo «recrystallizing with a different solvent») | Leído |
| Quiz: monohidrato de 245,0 g/mol, 6,85 %; 180 kg pierden 12,33 kg | Valor de ejemplo y cálculo | Recalculado (6,849 %; 12,329 kg) |
| Quiz: base 350,0 g/mol, sal 386,46, factor 0,9057; 80,0 kg dan 72,45 kg; 200,0 kg piden 20,83 kg de HCl; 98,5 % como sal = 89,21 % como base | Valor de ejemplo y cálculo | Recalculado |
| Quiz 4,2 a 4,8 % de agua por Karl Fischer | Valor de ejemplo | Valor de ejemplo |

## Lo que quería incluir y dejé fuera

- **Regla de Ostwald de las etapas**: no la encontré en ninguno de los documentos oficiales leídos; no se menciona.
- **Casos reales de polimorfos que «desaparecen»** (por ejemplo, el ritonavir que cita la lección `polimorfismo-y-sales`): no lo leí en una fuente oficial en esta sesión, así que la lección no cita ningún caso real de este tipo y explica el mecanismo de forma genérica. Conviene comprobar en otra sesión la fuente de la mención de la lección existente.
- **Ejemplos reales de genéricos con otra forma** (warfarina sódica, famotidina, ranitidina; y solvatos o hidratos distintos en clorhidrato de terazosina, ampicilina y cefadroxilo): sí están en la guía de la FDA de 2007 (apartado IV), pero los dejé fuera por espacio y porque es un asunto de registro de genéricos, no de planta.
- **Términos enantiotropía y monotropía**: la idea está («en algunos productos la forma estable depende de la temperatura»), pero no los nombres ni temperaturas de transición, por no haberlos leído en fuente oficial.
- **Criterio ΔpKa > 1 para distinguir sal y cocristal**: está en la guía de la FDA de 2018, pero el pKa no se ha explicado en este nivel; queda fuera.
- **Reflexión de la EMA sobre cocristales**: la URL devolvió una página JavaScript, no el PDF; no se usó.
- **Capítulo 5.9 de la Farmacopea Europea (polimorfismo)** y el 2.9.33 (XRPD): son de pago y no se leyeron; no se citan.
- **Datos de solubilidad o temperaturas de transición de formas de productos reales**: sin fuente gratuita leída; toda la hoja usa valores de ejemplo.
