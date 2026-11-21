# Fuentes de «Ácidos, bases y pH a fondo» (`acidos-bases-a-fondo`)

Documentos leídos en esta sesión:

- **Reglamento (CE) n.º 1272/2008 (CLP)**, texto original en español publicado en el DOUE L 353 de 31.12.2008, descargado del BOE: https://www.boe.es/doue/2008/353/L00001-01355.pdf (anexo II, apartados 1.2.2 y 1.2.3; anexo III, textos en español de H290 y H314). Es el texto original de 2008, no la versión consolidada; los textos citados de H290, H314, EUH031 y EUH032 coinciden con los de `src/content/fds.ts`, que ya estaban verificados.
- **NTP 500 del INSST**, «Prevención del riesgo en el laboratorio: elementos de actuación y protección en casos de emergencia» (1998), ficha HTML: https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/14-serie-ntp-numeros-471-a-505-ano-1999/ntp-500-prevencion-del-riesgo-en-el-laboratorio-elementos-de-actuacion-y-proteccion-en-casos-de-emergencia
- **Fichas de datos de seguridad ficticias de la app**, `src/content/fds.ts` (fichas `sosa-50` y `hcl-35`, y el diccionario `hStatements`), verificadas en su momento con el texto CLP.
- Lecciones del repo leídas enteras para no repetirlas: `acidos-bases-ph` y `disoluciones` (nivel1.ts), `volumetrias-acido-base` (nivel6.ts), `equilibrio-quimico` (nivel2.ts), el apartado de pH de `instrumentos-a-fondo` (nivel13-instrumentos.ts). También el apartado de incompatibilidades de `nivel15-emergencias.ts`, el de acumulación de `nivel12-reactor.ts` y la extracción de `nivel12-separacion.ts`, para remitir a ellas por su título.

| Dato, fórmula o afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| El ion H⁺ es un protón; en agua se une a una molécula de agua y forma H₃O⁺ | Conocimiento de libro de texto | No leído en esta sesión; definición universal |
| Definición de Brønsted-Lowry: ácido da un protón, base lo acepta | Conocimiento de libro de texto | No leído en esta sesión |
| HCl + H₂O da H₃O⁺ + Cl⁻; NH₃ + H₂O ⇌ NH₄⁺ + OH⁻; base conjugada | Conocimiento de libro de texto | No leído en esta sesión |
| HCl, H₂SO₄, NaOH, KOH fuertes; ácido acético, amoníaco, carbonato, bicarbonato y aminas débiles | Conocimiento de libro de texto | No leído en esta sesión |
| Carbonato y bicarbonato con ácidos sueltan CO₂ (espuma) | Conocimiento de libro de texto | No leído en esta sesión |
| Kw = [H⁺][OH⁻] = 1,0 × 10⁻¹⁴ a 25 °C; en agua pura cada uno 1,0 × 10⁻⁷ mol/L | Conocimiento de libro de texto | Recalculado: (10⁻⁷)² = 10⁻¹⁴ |
| Kw aumenta con la temperatura; el agua neutra caliente no da pH 7 exacto | Conocimiento de libro de texto | Solo cualitativo, sin cifras |
| Potencias de diez y logaritmos de la tabla; log 0,005 = −2,30 | Cálculo | Recalculado con python (log10(0,005) = −2,301) |
| pH = −log[H⁺]; pOH = −log[OH⁻]; pH + pOH = 14 a 25 °C | Conocimiento de libro de texto, comprobado por cálculo | −log(10⁻¹⁴) = 14 |
| HCl 0,1 mol/L pH 1; HCl 0,001 mol/L pH 3; NaOH 0,01 mol/L pH 12 | Cálculo | Recalculado con python |
| pH 4,5 da [H⁺] = 3,16 × 10⁻⁵ mol/L | Cálculo | 10⁻⁴·⁵ = 3,162 × 10⁻⁵ |
| pH 2 frente a pH 5: 1000 veces | Cálculo | 10³ |
| Diluir 10 veces HCl 0,01 mol/L da pH 3; diluir no cruza pH 7 | Cálculo y libro de texto | Recalculado |
| pKa del ácido acético ≈ 4,76 | Valor de libro de texto (pedido así en el encargo) | No leído en esta sesión en una fuente primaria |
| Ka = 10⁻⁴·⁷⁶ ≈ 1,74 × 10⁻⁵ | Cálculo | 1,738 × 10⁻⁵ |
| [H⁺] ≈ raíz(Ka·c); acético 0,1 mol/L: 1,32 × 10⁻³ mol/L, pH 2,88, 1,3 % disociado | Aproximación de libro de texto, comprobada por cálculo | Python: aproximación 1,318 × 10⁻³ (pH 2,880); solución exacta de la ecuación de segundo grado 1,310 × 10⁻³ (pH 2,883); ambas redondean a 2,88 |
| HCl + NaOH da NaCl + H₂O; H₂SO₄ + 2 NaOH da Na₂SO₄ + 2 H₂O; NaHCO₃ con HCl mol a mol | Conocimiento de libro de texto | Ajuste de ecuaciones comprobado a mano |
| Masas atómicas redondeadas H 1, C 12, O 16, Na 23, S 32, Cl 35,5 | Valores estándar de la IUPAC, no leídos en esta sesión, redondeados como permite el encargo | NaOH = 40 (exacto con valores IUPAC: 39,997); H₂SO₄ = 98; HCl = 36,5; NaHCO₃ = 84 |
| Cuenta 1: 2000 L × 0,05 mol/L = 100 mol; 4,0 kg NaOH; 8,0 kg sosa al 50 % | Valor de ejemplo declarado + cálculo | Recalculado con python |
| Cuenta 2: 1,96 kg H₂SO₄ = 20 mol; 40 mol NaOH = 1,6 kg; 3,2 kg sosa al 50 % | Valor de ejemplo declarado + cálculo | Recalculado con python |
| Cuenta 3: densidad del HCl 35 % 1,17 g/cm³ | `src/content/fds.ts`, ficha `hcl-35`, sección 9 | Leído en el repo |
| Derrame de HCl: neutralizar con carbonato o bicarbonato sódico o cal | `src/content/fds.ts`, ficha `hcl-35`, sección 6 | Leído en el repo |
| 1 L × 1,17 × 0,35 = 409,5 g HCl = 11,2 mol; 942 g NaHCO₃ | Cálculo | Recalculado con python (11,22 mol; 942,4 g) |
| La neutralización ácido fuerte con base fuerte desprende mucho calor; añadir despacio y con frío | `acidos-bases-ph` (nivel1.ts) y fichas `sosa-50`/`hcl-35` («reacciona violentamente») | Leído en el repo; sin cifra de calor |
| Acumulación de reactivo y camisa | Remite a «El reactor a fondo» (nivel12-reactor.ts) | Leído en el repo; no se repite |
| Amina: sal en agua en medio ácido, base libre en orgánico en medio básico; ácido carboxílico al revés | Conocimiento de libro de texto; coincide con `extraccion-liquido-liquido` (nivel12-separacion.ts) | Leído en el repo |
| Formación del clorhidrato y liberación de la base libre al subir el pH | Conocimiento de libro de texto; coincide con nivel3.ts («Polimorfismo, sales y solvatos») | Solo cualitativo |
| Tampón: ácido débil y base conjugada; Henderson-Hasselbalch pH = pKa + log([base]/[ácido]) | Conocimiento de libro de texto | No leído en esta sesión |
| Ejemplo de tampón: 0,10/0,10 mol da pH 4,76; con 0,01 mol de HCl pasa a 4,67; agua pura con 0,01 mol de HCl en 1 L, pH 2 | Valor de ejemplo declarado + cálculo | Python: 4,76 + log(0,09/0,11) = 4,673; −log 0,01 = 2 |
| Calibración del pHmetro con tampones; electrodo no debe secarse; la temperatura influye | `instrumentos-a-fondo` (nivel13-instrumentos.ts) y `acidos-bases-ph` | Leído en el repo |
| Pendiente del electrodo 59,2 mV por unidad de pH a 25 °C y 64,1 mV a 50 °C | Ecuación de Nernst (libro de texto), comprobada por cálculo | 2,3026·R·T/F con R = 8,314 J/(mol·K), F = 96485 C/mol: 59,16 mV (298,15 K) y 64,12 mV (323,15 K). La constante de Faraday no se leyó en esta sesión |
| La compensación de temperatura corrige la pendiente del electrodo, no el cambio real del pH de la muestra | Conocimiento de libro de texto | No leído en esta sesión |
| El pH en disolventes orgánicos o mezclas no es comparable al pH acuoso; el disolvente daña la membrana | Conocimiento de libro de texto | No leído en esta sesión; se da como advertencia, sin cifras |
| H314: «Provoca quemaduras graves en la piel y lesiones oculares graves» | CLP, anexo III, DOUE L 353 (pdf del BOE) | Leído en el documento; coincide con fds.ts |
| H290: «Puede ser corrosivo para los metales» | CLP, anexo III, DOUE L 353 (pdf del BOE) | Leído en el documento; coincide con fds.ts |
| EUH031: «En contacto con ácidos libera gases tóxicos», con el hipoclorito de sodio y el polisulfuro de bario como ejemplos | CLP, anexo II, 1.2.2 (pdf del BOE) | Leído en el documento |
| EUH032: «En contacto con ácidos libera gases muy tóxicos», con las sales de cianuro de hidrógeno y la azida sódica como ejemplos | CLP, anexo II, 1.2.3 (pdf del BOE) | Leído en el documento |
| HCl con hipocloritos desprende cloro; con sulfuros, sulfuro de hidrógeno; con metales, hidrógeno | `src/content/fds.ts`, ficha `hcl-35`, sección 10 | Leído en el repo (la lección de emergencias lo apoya en NTP 479 y 237, que no se releyeron) |
| Sosa con aluminio, zinc o estaño desprende hidrógeno | `src/content/fds.ts`, ficha `sosa-50`, secciones 5 y 10 | Leído en el repo |
| Los álcalis siguen penetrando en el ojo, pueden dejar ceguera; quemaduras que al principio duelen poco | `src/content/fds.ts`, ficha `sosa-50`, secciones 4 y 11 | Leído en el repo |
| Gafas de montura integral y pantalla facial | `src/content/fds.ts`, fichas `sosa-50` y `hcl-35`, sección 8 | Leído en el repo |
| Echar el ácido (o la sosa) sobre el agua, poco a poco | `disoluciones` (nivel1.ts) y ficha `sosa-50`, sección 7 | Leído en el repo |
| Ducha y lavaojos: sistema habitual ante proyecciones con riesgo de quemadura química, cerca del puesto, agua templada, apertura rápida; lavado de ojos «habitualmente 20 minutos» | NTP 500 del INSST | Leído en la ficha HTML |
| Lavado de ojos de al menos 15 minutos | `src/content/fds.ts`, fichas `sosa-50` y `hcl-35`, sección 4 | Leído en el repo |
| No neutralizar en el ojo | `src/content/fds.ts`, ficha `sosa-50`, explicación de la pregunta 1 | Leído en el repo |
| Plant y batchRecord: R-112, R-114, PH-112, intermedio AM-3, volúmenes, pH 1,4, 11,3, rangos y temperaturas | Valores de ejemplo, ficticios | Coherentes con la lección (amina en ácido al agua, en base al orgánico) |
| Preguntas numéricas: pH 2, pH 11, 0,0001 mol/L, 1000 veces, 2 kg de NaOH, pH 3 | Cálculo | Recalculadas con python |

## Solo vistos en fragmentos del buscador (no usados para cifras)

- Listas de frases EUH de universidades y administraciones (uv.es, comunidad.madrid, saludcastillayleon.es) y la explicación de reachonline.eu sobre EUH032: solo sirvieron para localizar el texto; el texto citado se leyó en el CLP del BOE.

## Lo que se dejó fuera por no poder verificarlo

- El valor numérico del calor de neutralización (en torno a 56–57 kJ/mol según textos de química general): no se leyó en una fuente de esta sesión; la lección se queda en lo cualitativo y remite a «El reactor a fondo».
- Valores de Kw y del pH neutro a otras temperaturas (por ejemplo, a 50 o 60 °C).
- pKa de otras sustancias (amoníaco, bicarbonato, aminas, segundo protón del sulfúrico); por eso no se calcula el pH del ácido sulfúrico.
- Precisión del papel indicador en unidades de pH.
- Tiempos de ducha de seguridad y caudales de duchas y lavaojos de la norma UNE-EN 15154 (de pago).
- Valores de pH concretos de precipitación o de extracción de un producto real.
