# Fuentes de «Valoraciones ácido-base a fondo: curvas, indicadores y cálculo de la riqueza» (valoraciones-a-fondo)

Documentos leídos (descargados con curl y convertidos con pdftotext; copias en `scratchpad/src_valoracion/`):

- FDA, ORA Lab Manual Vol. IV Sección 1, *Laboratory Orientation* (IV-01), rev. 03, 08/12/2022: https://www.fda.gov/media/73548/download (apartado «Standard Solutions», p. 28-30; vidrio volumétrico, p. ~20).
- FDA, ORA Lab Manual Vol. IV Sección 3, *Drug Chemistry Analysis* (IV-03), rev. 03, 07/10/2022: https://www.fda.gov/media/73554/download (8.1.1 Introduction; lista de técnicas de formación; ejercicios de valoración).
- FDA, ORA Lab Manual Vol. II, *Methods, Method Verification and Validation* (ORA-LAB.5.4.5), rev. 03, 31/10/2023: https://www.fda.gov/media/73920/download (especificidad, p. 31).
- FDA, *Investigating Out-of-Specification (OOS) Test Results for Pharmaceutical Production*, rev. 1, mayo 2022: https://www.fda.gov/media/158416/download (III.A, pasos 2-3 de la evaluación).
- ICH Q6A (1999): https://database.ich.org/sites/default/files/Q6A%20Guideline.pdf (3.2.1 c y 3.2.2 c).
- ICH Q2(R2) (2023): https://database.ich.org/sites/default/files/ICH_Q2%28R2%29_Guideline_2023_1130.pdf (especificidad; 3.3.2.1 repetibilidad).
- OMS, TRS 1052, anexo 4 (2024), buenas prácticas para laboratorios de control de calidad farmacéutica: https://cdn.who.int/media/docs/default-source/medicines/norms-and-standards/guidelines/quality-control/trs1052_annex4.pdf (3.23, 5.60, 5.61, 6.38).
- OMS, TRS 957, anexo 1 (2010): https://cdn.who.int/media/docs/default-source/medicines/norms-and-standards/guidelines/quality-control/trs957_annex1_goodpractices_pharmaceuticalqualitycontrol_laboratories.pdf (10.6, 15.6, referencias: cualificación de valoradores automáticos).
- EudraLex vol. 4, parte I, cap. 6: https://health.ec.europa.eu/document/download/c74c8720-27bf-4252-808f-d65a206a90bb_en?filename=2014-11_vol4_chapter_6.pdf (6.21).
- INSST, NTP 479, *Prevención del riesgo en el laboratorio químico: reactividad de los productos químicos (II)*: https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/14-serie-ntp-numeros-471-a-505-ano-1999/ntp-479-prevencion-del-riesgo-en-el-laboratorio-quimico-reactividad-de-los-productos-quimicos-ii- (tabla 4).
- Lecciones de la app: `acidos-bases-a-fondo` (pKa del acético 4,76 como valor de libro de texto; Kw = 1,0 × 10⁻¹⁴ a 25 °C; Henderson-Hasselbalch), `volumetrias-acido-base`, `reactivos-patrones-a-fondo`, `calculo-y-expresion-de-resultados`.
- Cálculos: `scratchpad/src_valoracion/curvas.py`, `c2.py`, `c3.py` (balance de cargas exacto resuelto por bisección; redondeos iguales que en el texto).

| Dato, fórmula o afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| El análisis farmacéutico empezó con valoraciones y gravimetrías y hoy se apoya mucho en la cromatografía (HPLC) | FDA ORA IV-03, 8.1.1 | Leído en el documento |
| La formación de analistas de la FDA incluye valoraciones acuosas, no acuosas, de pH y potenciométricas, y riquezas por valoración (sacarina, ácido ascórbico) | FDA ORA IV-03, lista de técnicas y ejercicios | Leído |
| Valoración no específica; si se usa para la riqueza del principio activo, se combina con un ensayo adecuado de impurezas | ICH Q6A 3.2.1 c y 3.2.2 c; ICH Q2(R2), especificidad | Leído |
| Las valoraciones son inespecíficas por naturaleza | FDA ORA Vol. II (ORA-LAB.5.4.5), especificidad | Leído |
| Ventaja: no necesita patrón del mismo principio activo; el resultado sale de volumen, concentración y estequiometría | Razonamiento a partir de la cuenta (química de libro de texto) | Deducido de la propia cadena de cálculo; sin cifra |
| Curva HCl 0,1000 / NaOH 0,1000, 25,00 mL: pH 1,00; 1,37; 1,95; 2,69; 3,70; 7,00; 10,30; 11,29; 11,96; 12,36 | Cálculo (Kw = 1,0 × 10⁻¹⁴ de la lección de ácidos) | Recalculado con python, balance de cargas exacto y fórmula simple: coinciden a dos decimales |
| Ejemplo 20,00 mL: 0,500 mmol / 45 mL = 0,0111 mol/L, pH 1,95 | Cálculo | Recalculado |
| Curva del acético (pKa 4,76 de libro de texto): 2,88; 4,16; 4,76; 5,36; 6,14; 7,16; 8,73; 10,30; 11,29; 11,96 | Cálculo | Recalculado con python (exacto); Henderson-Hasselbalch da lo mismo en la zona tampón |
| Semiequivalencia: pH = pKa | Henderson-Hasselbalch (lección `acidos-bases-a-fondo`) | Recalculado: 12,50 mL da 4,76 |
| pH de equivalencia del acético > 7 por el acetato | Química de libro de texto | Recalculado: 8,73 (aprox. con Kb = Kw/Ka da 8,73) |
| Indicador = ácido débil con dos colores; cambia en torno a su pKa | Química de libro de texto | No leído en fuente accesible; coherente con Henderson-Hasselbalch de la lección de ácidos |
| Intervalos fenolftaleína 8,2 a 10,0 (incolora/rosa) y rojo de metilo 4,4 a 6,2 (rojo/amarillo) | Valores de libro de texto aproximados, declarados en el texto | Solo fragmento de buscador (varias tablas universitarias, con diferencias de 0,1 a 0,4); no usados para cálculos de especificación |
| Volúmenes de viraje: HCl-fenolftaleína 25,00 a 25,05; HCl-rojo de metilo 24,98 a 25,00; acético-fenolftaleína 24,99 a 25,05; acético-rojo de metilo 7,6 a 24,1 mL | Cálculo con los intervalos anteriores | Recalculado con python (búsqueda del volumen a cada pH) |
| Tabla potenciométrica: pH 6,49 a 10,69, derivadas 1,5 a 24,8, máximo en 19,85 mL; equivalencia real 19,86 mL | Valores de ejemplo declarados, generados con el modelo (1,986 mmol de ácido de pKa 4,76 en 50 mL, NaOH 0,1) | Recalculado; derivadas calculadas a partir de los pH redondeados |
| Las guías de la OMS citan un documento de cualificación de valoradores automáticos | OMS TRS 957 anexo 1, referencias (EDQM PA/PH/OMCL (07) 108, anexo 5) | Leído (la referencia; el documento EDQM no se leyó) |
| Valoración por retroceso con segunda disolución valorada aumenta la posibilidad de error | FDA ORA IV-01, Standard Solutions 2 | Leído |
| Ejemplo de retroceso BX-9: 2,5030; 1,2971; 1,2059; 0,6030 mmol; 148,5 mg; 99,0 % | Valores de ejemplo declarados | Recalculado (99,01 % sin redondeos intermedios) |
| Aminas muy débiles: en agua no hay salto; en ácido acético anhidro el ácido perclórico actúa como ácido muy fuerte | Química de libro de texto (idea) | No leído en fuente accesible; la FDA confirma que existen valoraciones no acuosas en su formación. Se da sin cifras |
| Ácido perclórico incompatible con anhídrido acético, bismuto, alcohol, papel, madera, grasas y aceites; ácido acético incompatible con ácido perclórico | INSST NTP 479, tabla 4 | Leído en la ficha HTML |
| Peso equivalente = masa molar / protones que intervienen | FDA ORA IV-01, Standard Solutions 3 | Leído |
| Equivalente en masa por mL = 0,1 × M / protones | Cálculo a partir de lo anterior | Recalculado (16,613; 13,012; 31,138 mg/mL) |
| Cuenta 1: 1,8058 mmol; 299,99 mg; 99,83 % | Valores de ejemplo | Recalculado |
| Cuenta 2: 17,97 mL; 299,16 mg; 99,55 % | Valores de ejemplo | Recalculado |
| Cuenta 3: 19,14 mL; 248,73 mg; 99,09 %; base seca 99,54 % | Valores de ejemplo | Recalculado |
| Cuenta 4: 17,39 mL; 543,82 mg; 98,88 %; base anhidra 99,2 %; sin blanco 99,6 %; sin agua 98,9 % | Valores de ejemplo | Recalculado (99,17 %, 99,63 %, 98,88 %) |
| Base seca = tal cual × 100 / (100 − % pérdida o agua) | Cálculo (proporción) | Comprobado con python |
| Redondear al final | Lección `calculo-y-expresion-de-resultados` | Leído en la app |
| Todos los valores, incluidos los blancos, se anotan de inmediato en la hoja de trabajo | OMS TRS 1052 an. 4, 6.38; TRS 957 an. 1, 15.6 | Leído |
| Registros suficientes para repetir el ensayo o recalcular el resultado | OMS TRS 1052 an. 4, 3.23 | Leído |
| Blanco en retroceso: gastado = gasto del blanco − gasto de la muestra | Cálculo (mismo exceso añadido en los dos) | Deducido algebraicamente |
| CO₂ + 2 NaOH da Na₂CO₃ + H₂O; el carbonato es una base más débil | Química de libro de texto; la ficha CAUSTIL 50 de la app (src/content/fds.ts) dice que la sosa absorbe CO₂ | Ecuación ajustada comprobada; efecto descrito solo cualitativamente |
| El NaOH sólido absorbe agua tan deprisa que no se puede preparar pesándolo | FDA ORA IV-01, Standard Solutions 4 | Leído |
| Burbuja 0,05 mL en 18,02 mL = 0,28 % | Valor de ejemplo y cálculo | Recalculado (0,277 %) |
| Muestra anotada 0,3050 g en vez de 0,3005 g: 98,36 % en vez de 99,83 % | Cálculo | Recalculado |
| Los líquidos se dilatan; la FDA forma a sus analistas en convertir el volumen medido a 20 °C y 25 °C | FDA ORA IV-01, ejercicio de vidrio volumétrico (asignación 4) | Leído; sin coeficientes numéricos |
| Etiqueta de disolución volumétrica con factor y fecha de valoración | EudraLex cap. 6, 6.21; OMS TRS 1052 an. 4, 5.60; TRS 957 an. 1, 10.6 | Leído |
| Repetibilidad: mínimo 9 determinaciones en el intervalo o 6 al 100 % | ICH Q2(R2) 3.3.2.1 | Leído |
| Al menos tres determinaciones en paralelo para cada valoración de una disolución | FDA ORA IV-01, Standard Solutions 2 | Leído |
| Ante un OOS: examinar datos brutos y verificar que los cálculos que convierten datos en resultado son correctos | FDA OOS 2022, III.A pasos 2 y 3 | Leído |
| Planta: secadero SB-305, centrífuga CF-302, lote PA-88/112; agua 1,8 % y 0,3 %; 97,4 %, 98,9 %, 99,2 % | Valores de ejemplo y códigos ficticios | Coherencia recalculada (97,4 × 100 / 98,2 = 99,2) |
| Quiz: 1,95; 4,76; 25; 99,25; 97,78; 99,03; 13,012 | Cálculo | Recalculado con python |

## Lo que quise incluir y dejé fuera

- Intervalos de viraje leídos en una fuente oficial (Farmacopea Europea o USP): son de pago; los de libro de texto solo los vi en fragmentos de buscador y van declarados como aproximados.
- Detalles del ácido perclórico en ácido acético (preparación con anhídrido acético, corrección del factor por temperatura con el coeficiente de dilatación del ácido acético): son de farmacopea, de pago; no se dan cifras.
- Clasificación CLP actual del ácido perclórico: la NTP 461 que la recoge es de 1998 con frases R antiguas; no la usé.
- Hardware del valorador (bureta de pistón, resolución de dosificación) y criterios de reconocimiento del punto final del equipo: no encontré fuente gratuita leída.
- Volumen de una gota de bureta: no verificado; no se da cifra.
- Efecto cuantitativo del carbonato en el factor (con pKa del ácido carbónico): se deja cualitativo.
- Contenido del documento EDQM de cualificación de valoradores automáticos: solo se cita su existencia a través de la OMS.
- Monografías USP concretas citadas por la FDA (<541>): de pago.
