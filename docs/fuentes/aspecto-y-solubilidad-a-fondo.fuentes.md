# Fuentes: «Aspecto, color, solubilidad y claridad a fondo» (aspecto-y-solubilidad-a-fondo)

Documentos leídos de verdad en esta sesión (texto completo con pdftotext):

- **ICH Q6A** (versión Step 4 de 6 de octubre de 1999), descargada de database.ich.org en esta sesión; copia local en scratchpad/dl/q6a.pdf (la URL exacta de descarga no se anotó). Apartados 3.2.1 a) y b), 3.2.2 a), 3.2.2 e) del medicamento (partículas), glosario («Highly water soluble drugs», «Universal test»).
- **ICH Q7**, https://database.ich.org/sites/default/files/Q7%20Guideline.pdf (scratchpad/dl/q7.pdf). Apartados 5.11, 5.14, 5.15, 5.21, 8.41, 9.20, 9.21, 11.15, 12.76 y glosario («Contamination»).
- **ICH Q1A(R2)**, https://database.ich.org/sites/default/files/Q1A%28R2%29%20Guideline.pdf. Apartado 2.1.2 (stress testing) y definición de «significant change» del medicamento.
- **ICH M9** (2019), https://database.ich.org/sites/default/files/M9_Guideline_Step4_2019_1116.pdf. Apartado 2.1 (solubility).
- **FDA, «Inspection of Injectable Products for Visible Particulates», borrador de diciembre de 2021**, https://www.fda.gov/media/154868/download. Definiciones (líneas 27-40 y nota 2), apartado de categorías (inherent, intrinsic, extrinsic), inspección manual (fondo negro y blanco, intensidad de luz), personal (agudeza visual, visión de colores), cualificación del puesto, investigación.
- Lecciones de la app leídas para no repetir y enlazar: `src/content/nivel8.ts` (incluida «Aspecto, color y solubilidad»), `src/content/nivel1-disoluciones.ts`, `src/content/nivel7-espectroscopia.ts` (apartados de luz, absorbancia y Lambert-Beer), `src/content/nivel10.ts` (OOS y OOT), y en el scratchpad `polimorfismo-a-fondo.ts` (sales), `impurezas-a-fondo.ts`.

| Afirmación o dato | Fuente | Cómo se comprobó |
|---|---|---|
| La especificación lista ensayos y límites; Q6A llama «universal tests» a aspecto, identificación, riqueza e impurezas | ICH Q6A, glosario «Universal test» («e.g., appearance, identification, assay, and impurity tests») y 3.2.1 a)-d) | Leído |
| Descripción: afirmación cualitativa sobre el estado (sólido, líquido) y el color; si cambia durante el almacenamiento se investiga y se actúa | ICH Q6A 3.2.1 a) | Leído |
| Identificación: debe distinguir compuestos de estructura parecida; ejemplo IR; una sola retención cromatográfica no es específica | ICH Q6A 3.2.1 b) | Leído |
| Medicamento: si el color cambia en almacenamiento puede ser adecuado un procedimiento cuantitativo | ICH Q6A 3.2.2 a) | Leído |
| La inspección visual puede detectar contaminación grosera concentrada en zonas pequeñas que el muestreo o el análisis no detectarían | ICH Q7 12.76 | Leído |
| Stress testing: temperatura, humedad, oxidación y fotólisis | ICH Q1A(R2) 2.1.2 | Leído |
| «Cambio significativo» incluye no cumplir criterios de aspecto (p. ej. color) | ICH Q1A(R2), definición para medicamento, punto 3 | Leído |
| Superficies en contacto no deben alterar la calidad | ICH Q7 5.11 | Leído |
| Lubricantes, fluidos de calefacción y refrigerantes no deben contactar alterando la calidad | ICH Q7 5.14 | Leído |
| Definición de contaminación (impurezas químicas, microbiológicas o materia extraña, en producción, muestreo, envasado, almacenamiento o transporte) | ICH Q7, glosario | Leído |
| Equipos cerrados cuando proceda; precauciones al abrirlos | ICH Q7 5.15 | Leído |
| Procedimientos de limpieza; inspección de limpieza justo antes de usar, si es práctico | ICH Q7 5.21 | Leído |
| OOS: investigar y documentar según procedimiento, con análisis de datos, valoración, acciones correctoras y conclusiones | ICH Q7 11.15 | Leído |
| Lotes OOS no se mezclan para cumplir | ICH Q7 8.41 | Leído |
| Envases: protección contra deterioro y contaminación; limpios; no reactivos, aditivos ni absorbentes | ICH Q7 9.20 y 9.21 | Leído |
| Puesto de inspección manual con fondo de colores sólidos (p. ej. negro y blanco) e intensidad de luz adecuada; fondo y luz cualificados | FDA 2021 (borrador), líneas 297-301 y 462-463 | Leído |
| Inspectores con visión de cerca normal (con o sin corrección) y sin alteración de la visión de colores | FDA 2021, líneas 456-458 | Leído |
| La detección visual es probabilística y depende, entre otras cosas, del tamaño y la forma de la partícula | FDA 2021, nota 2 | Leído |
| Definición de partículas (móviles, sin disolver, distintas de burbujas, presentes sin querer) y tres categorías inherentes, intrínsecas (equipo, formulación, envase; p. ej. tubos, filtros, juntas, tapones) y extrínsecas (entorno, ajenas al proceso) | FDA 2021, líneas 29-40 y 162-213 | Leído |
| Extrínsecas pueden indicar un problema de CGMP de la instalación; la investigación examina las partículas para entender su origen y fija CAPA | FDA 2021, líneas 205-213 y 527-533 | Leído |
| La guía de la FDA es para inyectables; aplicación a un API en polvo como idea | FDA 2021, título y alcance | Leído; la extrapolación se declara en el texto |
| Altamente soluble: dosis máxima en 250 mL o menos, pH 1,2 a 6,8, 37 ± 1 °C; al menos pH 1,2, 4,5 y 6,8; tres repeticiones; se usa la solubilidad más baja | ICH M9 2.1 | Leído |
| Ejemplo 400 mg / 1,0 mg/mL = 400 mL > 250 mL, poco soluble | ICH Q6A, glosario «Highly water soluble drugs» | Leído y recalculado |
| Absorbancia, transmitancia, A = −log T, Lambert-Beer proporcional a la concentración | Lección de la app «Espectroscopia a fondo…» (nivel 7), que cita el manual ORA de la FDA | Leído en la app |
| Una solución coloreada absorbe parte del visible; una amarillenta absorbe sobre todo azul y violeta | Libro de texto (color complementario) | Libro de texto, sin cifras |
| Las sales de aminas suelen ser más solubles en agua; una amina en medio ácido toma un protón | Lecciones de la app «Polimorfismo, sales y solvatos a fondo» y «Ácidos, bases y pH a fondo» | Leído en la app / libro de texto |
| La solubilidad de casi todos los sólidos sube con la temperatura | Lección de la app «Disoluciones y solubilidad a fondo» | Leído en la app |
| Opalescencia: partículas no disueltas que desvían la luz; solución verdadera transparente aunque tenga color | Libro de texto; lección «Disoluciones y solubilidad a fondo» (transparente aunque tenga color) | Libro de texto / leído en la app |
| Existen en farmacopea métodos de color de solución con escalas de referencia y de opalescencia con suspensiones de referencia | Lección corta existente «Aspecto, color y solubilidad» | Leído en la app; no se dan métodos ni números de capítulo |
| Tabla de causas posibles (oxidación, juntas, fibras, grumos por humedad, mezcla irregular) | Razonamiento apoyado en Q1A 2.1.2, Q7 5.11/5.14/glosario, FDA 2021 (juntas, filtros); grumos por humedad: libro de texto | Leído / libro de texto; se presentan como «causas posibles» |
| Cuenta 1: 1,0 g en 20 mL = 50 mg/mL = 5 % p/v | Valor de ejemplo declarado y cálculo | Recalculado |
| Cuenta 2: 40 mL al 2,5 % p/v = 1,0 g | Cálculo | Recalculado |
| Cuenta 3: A = 0,120, T = 0,759 (75,9 %) | Cálculo (10^−0,12 = 0,7586) | Recalculado |
| Cuenta 4: A = 0,210, T = 61,7 % | Cálculo (0,6166) | Recalculado |
| Cuenta 5: doble concentración, 0,120 × 2 = 0,240 | Cálculo con Lambert-Beer | Recalculado |
| Cuenta 6: 200 mg en 5,0 mL = 25 mL/g = 40 mg/mL | Cálculo | Recalculado |
| Criterio «A a 420 nm de la solución al 5 % p/v, cubeta 1 cm, no más de 0,150» y descripción «polvo cristalino blanco o casi blanco» | Valores de ejemplo declarados | — |
| Quiz: 1500/30 = 50; 2,5 × 20/100 = 0,5; 10^−0,18 = 0,661 (66,1 %); 5,0/0,200 = 25; 300/0,5 = 600 | Cálculo | Recalculado con python |
| Ejemplo de planta (LX-27, R-520, C-530, SD-540, 75 °C frente a 55 °C, 40 min, A = 0,210) | Valores de ejemplo, ficticios | — |

## Lo que quedó solo como fragmento de buscador o sin fuente leída

- **Tabla de términos de solubilidad de la farmacopea** (muy soluble, fácilmente soluble, etc., con sus mL por gramo): solo la vi en fragmentos de buscador (páginas de USP y terceros). www.usp.org no es accesible desde esta sesión y las farmacopeas son de pago, así que la lección explica la idea sin cifras y remite a la lección corta. La tabla de la lección corta `aspecto-solubilidad` no se ha podido verificar en un documento gratuito en esta sesión.
- **Farmacopea Internacional de la OMS** (gratuita): no encontré en hosts accesibles (cdn.who.int) un PDF con sus «General notices» de solubilidad; digicollections.net no responde.

## Lo que dejé fuera por no poder verificarlo

- Métodos de farmacopea de color de solución (escalas, preparación, número de referencias) y de claridad u opalescencia (suspensiones de referencia, tiempos de espera); también los números de capítulo.
- Intensidades de luz en lux para la inspección visual y tamaños mínimos de partícula visible: la guía de la FDA remite a USP <790>/<1790>, de pago.
- Turbidímetros y nefelómetros con cifras (NTU): fuera.
- Longitudes de onda concretas de color complementario: solo como idea general, sin tabla.
- Condiciones de temperatura y tiempo del ensayo de solubilidad de farmacopea: fuera; solo las de ICH M9 (37 ± 1 °C), que son para la clasificación biofarmacéutica, no para la descripción.
