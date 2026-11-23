# Fuentes de `acido-base-avanzado-a-fondo` («Equilibrios ácido-base en profundidad»)

Fecha de consulta: 23/11/2026. Descargas con `curl -sL -A "Mozilla/5.0"` (y `pdftotext -layout` para PDF) en `scratchpad/lecciones/tmp-acidobase/dl/`. Todos los cálculos en `scratchpad/lecciones/tmp-acidobase/calc.py` (Python 3), redondeados como en el texto.

Fuentes leídas de verdad:

- **Real Decreto 243/2022** (Bachillerato), saberes básicos de Química, bloque «Reacciones ácido-base»: copia del BOE en `scratchpad/auditoria-temario/boe/BOE-A-2022-5521.txt` (https://www.boe.es/buscar/act.php?id=BOE-A-2022-5521).
- **Kuphaldt, *Lessons in Industrial Instrumentation***, capítulo de química: «Basics of pH Measurement in Industrial Control» (https://control.com/textbook/chemistry/ph/) e «Ions in Liquid Solutions» (https://control.com/textbook/chemistry/ions-in-liquid-solutions/); y «pH measurement» (https://control.com/textbook/continuous-analytical-measurement/ph-measurement/).
- **Fichas internacionales de seguridad química (ICSC) de la OIT**, en español: 0565 acetato de sodio, 1051 cloruro de amonio, 0363 ácido acético, 0414 amoníaco, 0215 hidróxido de amonio (https://chemicalsafety.ilo.org/dyn/icsc/showcard.display?p_lang=es&p_card_id=NNNN&p_version=2).
- **ICH M9**, «Biopharmaceutics Classification System-based Biowaivers», versión final de 20/11/2019: https://database.ich.org/sites/default/files/M9_Guideline_Step4_2019_1116.pdf (apartado 2.1 y condiciones de disolución).
- **GOV.UK (UKHSA)**, «Ammonia: toxicological overview»: https://www.gov.uk/government/publications/ammonia-properties-incident-management-and-toxicology/ammonia-toxicological-overview (leído; al final no se cita en el cuerpo).
- Lecciones de la app leídas enteras para no repetir: `acidos-bases-a-fondo` (nivel1-acidos.ts), `equilibrio-a-fondo` (nivel2-equilibrio.ts), `valoraciones-a-fondo` (nivel6-valoraciones.ts), `extraccion-a-fondo` (nivel12-extraccion.ts); de `potenciometria-a-fondo` (nivel7-potenciometria.ts) y `disoluciones-a-fondo` (nivel1-disoluciones.ts), los encabezados y los apartados de tampones, calibración y conductividad.

## Tabla de afirmaciones

| Dato, fórmula o afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| La Química de 2.º de Bachillerato pide: teorías de Arrhenius y de Brønsted y Lowry; fuertes y débiles; grado de disociación; pH; Ka y Kb; pares conjugados; hidrólisis de una sal | RD 243/2022, anexo II, Química, bloque B.4 | Leído en el BOE |
| Definición de tipo Arrhenius: ácido produce H⁺ en agua; base (cáustico, álcali) produce OH⁻; HCl, NaOH como ejemplos | Kuphaldt, «Basics of pH…» (lista de ácidos y cáusticos con sus iones) | Leído. El nombre «Arrhenius» para esta definición es de libro de texto y del RD 243/2022, que la nombra; Kuphaldt no le pone nombre |
| Límites de Arrhenius (NH₃ y aminas sin OH⁻; exige agua); amina en tolueno con HCl precipita el clorhidrato | Libro de texto; el clorhidrato como forma de precipitar coincide con `acidos-bases-a-fondo` | No leído en fuente externa; razonamiento a partir de las definiciones |
| Brønsted-Lowry, pares conjugados, NH₃ + H₂O ⇌ NH₄⁺ + OH⁻ | `acidos-bases-a-fondo` (ya en la app) | Leído en el repo; no se releyó en fuente externa |
| Kw = 1,0 × 10⁻¹⁴ a 25 °C (Kuphaldt: 1,008 × 10⁻¹⁴); Kw cambia con T | Kuphaldt, «Basics of pH…», tabla de Kw | Leído |
| Expresiones de Ka y Kb; el agua no entra en la constante | Libro de texto; coherente con `equilibrio-a-fondo` | No leído en fuente externa |
| Ka × Kb = Kw y pKa + pKb = 14 para un par conjugado | Deducción algebraica mostrada en el texto | Comprobado: 1,738 × 10⁻⁵ × 5,754 × 10⁻¹⁰ = 1,0 × 10⁻¹⁴ |
| pKa del ácido acético 4,76 | **Valor de ejemplo declarado** («valor de libro de texto, el mismo de las demás lecciones de la app») | No leído en fuente primaria. Fragmentos de buscador: 4,756 (evaluación del gobierno de Canadá, citando a Serjeant y Dempsey 1979) y 4,757 (LibreTexts); hosts no accesibles |
| pKa del ion amonio 9,25 | **Valor de ejemplo declarado** | No leído; fragmento de buscador (tabla de Britannica, 9,25). No usado como dato verificado |
| pKb acetato 9,24, Kb 5,75 × 10⁻¹⁰; pKb NH₃ 4,75, Kb 1,78 × 10⁻⁵ | Cálculo | Recalculado (calc.py) |
| Grado de disociación: Ka = c·α²/(1 − α); c·α² + Ka·α − Ka = 0; α = [−Ka + raíz(Ka² + 4·Ka·c)]/(2c) | Álgebra | Deducido y comprobado numéricamente |
| Acético 0,001 mol/L: Ka² = 3,020 × 10⁻¹⁰; 4Kac = 6,951 × 10⁻⁸; suma 6,982 × 10⁻⁸; raíz 2,642 × 10⁻⁴; α = 0,1234; pH 3,91; atajo 1,318 × 10⁻⁴, 13,2 %, pH 3,88 | Cálculo | Recalculado. Comprobado además con el balance completo incluyendo el agua: pH 3,909 |
| Tabla α/pH: 0,1 M 1,31 %/1,32 %, 2,88/2,88; 0,01 M 4,08 %/4,17 %, 3,39/3,38; 0,001 M 12,3 %/13,2 %, 3,91/3,88 | Cálculo | Recalculado |
| Al diluir, α aumenta | Se deduce de la tabla | Cálculo |
| Ácido 0,020 M a pH 3,00: α 5,0 %, Ka 5,26 × 10⁻⁵, pKa 4,28 | Valor de ejemplo + cálculo | Recalculado |
| NH₃ 0,05 M: [OH⁻] 9,34 × 10⁻⁴, α 1,87 %, pOH 3,03, pH 10,97 | Cálculo (Kb de ejemplo) | Recalculado (pOH 3,030; pH 10,970) |
| NaCl y KCl no cambian el pH (sus iones no aportan ni quitan H⁺) | Kuphaldt, «Basics of pH…» (lista de sales) | Leído |
| Acetato de sodio: «La disolución en agua es una base débil» | ICSC 0565 | Leído |
| Cloruro de amonio: «La disolución en agua es un ácido débil» | ICSC 1051 | Leído |
| Tabla de tipos de sal (fuerte/fuerte neutra; débil/fuerte básica; fuerte/débil ácida; débil/débil depende) | Libro de texto, coherente con Ka·Kb = Kw y las dos ICSC | Razonado; los dos casos centrales, confirmados por ICSC |
| NaAc 0,10 M: [OH⁻] 7,59 × 10⁻⁶, pOH 5,12, pH 8,88; 0,008 % hidrolizado | Cálculo | Recalculado (exacto y atajo coinciden: pH 8,880) |
| NaAc 0,05 M da pH 8,73, igual que la equivalencia de `valoraciones-a-fondo` | Cálculo + lección de la app | Recalculado: 8,729 |
| NH₄Cl 0,10 M: Ka 5,62 × 10⁻¹⁰, [H₃O⁺] 7,50 × 10⁻⁶, pH 5,13 | Cálculo | Recalculado: 5,125 (5,12502), redondeado a 5,13 |
| El clorhidrato de una amina se comporta como el cloruro de amonio; la sal sódica de un carboxílico, como el acetato | Analogía química de libro de texto apoyada en ICSC 1051 y 0565 | Razonado, sin cifras |
| Polipróticos: sueltan los protones uno tras otro, Ka1 > Ka2 > Ka3 | Libro de texto. Kuphaldt muestra el sulfúrico dando 2 H⁺ | No leído el orden de las Ka en fuente externa |
| Diácido ficticio pKa 3,0 y 8,0: tabla de fracciones (99,0/1,0/0; 50/50/0; 0,3/99,4/0,3; 0/50/50; 0/1,0/99,0) | Valores de ejemplo + cálculo | Recalculado |
| Anfótero: agua, HX⁻, HCO₃⁻, H₂PO₄⁻ | Libro de texto | No leído en fuente externa |
| pH de NaHX ≈ (pKa1 + pKa2)/2 = 5,5; cuenta completa 0,1 M: 5,50 | Cálculo | Recalculado con balance de cargas: 5,502 |
| API anfótero ficticio pKa 4,0 y 9,0: tabla de cargas; punto isoeléctrico 6,5 | Valores de ejemplo + cálculo | Recalculado |
| Zwitterión, punto isoeléctrico | Definiciones de libro de texto | No leídas en fuente externa (Gold Book IUPAC bloqueado) |
| Cerca del punto isoeléctrico estas moléculas «suelen» ser menos solubles en agua | Razonamiento con la regla de la app («lo que tiene carga prefiere el agua»); dado con cautela | No verificado en fuente externa; el texto remite al desarrollo del producto |
| ICH M9 pide medir la solubilidad en el intervalo de pH 1,2–6,8, al menos a pH 1,2, 4,5 y 6,8, con tampones de farmacopea, y también en el pH de menor solubilidad si cae en el intervalo | ICH M9, apartado 2.1 y condiciones de disolución | Leído |
| ICH M9: medir el pH tras añadir el principio activo y al final, y ajustarlo si es necesario | ICH M9, apartado 2.1 | Leído |
| Tampón: «disolución preparada para mantener un pH estable incluso con una pequeña contaminación»; se usan para calibrar el pHmetro | Kuphaldt, «pH measurement» | Leído |
| Henderson-Hasselbalch deducida de Ka | Álgebra | Deducción mostrada |
| Tampón pH 5,00, 0,10 mol: cociente 1,74; HA 0,0365 mol; A⁻ 0,0635 mol; 0,0635 mol de NaOH sobre 0,10 mol de acético | Valor de ejemplo + cálculo | Recalculado; cuenta completa da pH 5,000 |
| La capacidad crece con la concentración y es máxima a pH = pKa; uso entre pKa − 1 y pKa + 1 | Libro de texto; comprobado por cálculo | β calculado (C = 0,2 M): 0,115 a pH 4,76; 0,084 a ±0,5; 0,038 a ±1 |
| Tampón A (0,10/0,10) + 0,005 mol HCl: 4,72; B (0,010/0,010): 4,28 | Cálculo | HH 4,717 y 4,283; cuenta completa 4,717 y 4,289 |
| HCl para bajar de 4,76 a 3,76: 0,082 mol (A) y 0,0082 mol (B) | Cálculo | 0,10 − 0,2/11 = 0,0818 |
| Tabla de exceso de capacidad: 0,05 mol 4,28; 0,08 mol 3,81; 0,10 mol 2,73; 0,12 mol 1,70 | Cálculo | Cuenta completa con balance de cargas: 4,283; 3,809; 2,732; 1,695 |
| Fórmula de extracción 1/(1 + K·Vo/Va) | `extraccion-a-fondo` y `equilibrio-a-fondo` | Leído en el repo |
| Solo la forma sin carga pasa al orgánico; D = K × fracción sin carga; fracciones de amina y de ácido | Libro de texto; coherente con `extraccion-a-fondo` (la forma ionizada se queda casi entera en el agua) | Modelo simplificado, declarado en el texto; no leído en fuente externa |
| Amina AM-7 pKa 9,0, K 50: tabla (pH 2: 0,00001 %, D 0,000005, 100 %; pH 7: 0,99 %, 0,495, 66,9 %; pH 9: 50 %, 25, 3,85 %; pH 11: 99,0 %, 49,5, 1,98 %; pH 12: 99,9 %, 49,95, 1,96 %) | Valores de ejemplo + cálculo | Recalculado |
| Impureza ácida pKa 4,5, K 20: a pH 11 queda en el agua 99,999 % | Valores de ejemplo + cálculo | Recalculado (99,9994 %) |
| 30 kg / 250 g/mol = 120 mol; + 0,01 × 300 = 3 mol; 123 mol = 123 L de HCl 1 M | Valores de ejemplo + cálculo | Recalculado |
| Preguntas numéricas: 4,75; 2,5 %; 2,56 (× 10⁻⁵); 8,88; 3,16; 18 % | Cálculo | Recalculadas: 10⁻⁶/0,039 = 2,564 × 10⁻⁵; 10^0,5 = 3,162; 1/(1 + 4,545) = 0,1803 |
| Plant y batchRecord: R-236, AM-7, PH-236, volúmenes, pH 9,4 y 10,9, intervalo 10,5–11,5, tampones 10 y 12 | Ficticios. Elegir tampones que encierren el valor medido: `potenciometria-a-fondo` (Kuphaldt) | Coherente con la tabla del cuerpo |

## Solo vistos en fragmentos del buscador (no usados para cifras)

- pKa del ácido acético 4,756 (canada.ca, citando Serjeant y Dempsey 1979; CASRAI) y 4,757 (LibreTexts). En el texto se usa 4,76 declarado como valor de ejemplo.
- pKa del amonio 9,25 (Britannica). En el texto, valor de ejemplo.
- Un artículo del NIST (J. Res. NBS 30, 1943, sobre constantes de disociación de los ácidos fórmico y acético): nvlpubs.nist.gov no es accesible.

## Lo que se quiso incluir y se dejó fuera

- **pKa reales de fosfórico, carbónico, sulfúrico (segundo protón) y de aminas habituales** (trietilamina, piridina): sin fuente gratuita accesible (PubChem, canada.ca, nvlpubs.nist.gov y Gold Book devuelven error de red o están bloqueados; el NIST WebBook no da constantes de disociación en disolución). Se usó un diácido ficticio.
- **Fórmula exacta de la capacidad del tampón (β)**: se calculó para comprobar la afirmación, pero no se puso en el texto por no tener una fuente leída que la recoja.
- **Regla del 5 % para la validez del atajo**: convención de libro de texto no leída; el texto solo dice «unos pocos por ciento» y lo muestra con la tabla.
- **pH del acetato de amonio** (≈ 7,0 por la media de pKa): se calculó pero se quitó por espacio.
- **Que un diácido dé dos saltos en la valoración si sus pKa están separados**: se quitó por no tenerlo verificado más que por cálculo.
- **Coeficientes de actividad y fuerza iónica**: Kuphaldt habla de «actividad» del H⁺; la lección trabaja con concentraciones, como el resto de la app, sin entrar en actividades.
- **Valores de pKa de principios activos reales** (EPAR de la EMA): se descartaron para no mezclar productos reales con un proceso ficticio.

## Ideas para la capa visual

1. **Diagrama de especiación interactivo**: fracciones de H₂X, HX⁻ y X²⁻ frente al pH con deslizadores para pKa1 y pKa2, marcando los puntos «mitad y mitad» y la regla de dos unidades.
2. **Calculadora del grado de disociación**: concentración y pKa como entradas; α y pH exactos frente a los del atajo, con el error resaltado cuando α pasa de unos pocos por ciento.
3. **Simulación de tampón**: un vaso con barras de ácido acético y acetato que cambian al añadir gotas de HCl o NaOH, con la gráfica de pH que muestra la meseta y la caída al agotarse el acetato; comparar un tampón concentrado y uno diluido.
4. **Esquema de embudo de decantación / reactor con dos fases**: amina (con y sin protón) y ácido (ionizado y no) moviéndose entre la capa acuosa y la orgánica al deslizar el pH de 2 a 12, con el porcentaje que queda en cada fase.
