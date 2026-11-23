# Fuentes: calculo-de-resultados-a-fondo

Documentos descargados el 22/11/2026 en `scratchpad/lecciones/tmp-calculo/dl/` y leídos con `pdftotext -layout`:

- **FDA, ORA Laboratory Manual Vol. III, Section 4 «Basic Statistics and Data Presentation»**, MAN-000048 rev. 03, 07/10/2022. https://www.fda.gov/media/73535/download. Apartados 2.1, 2.2 (s con N − 1, RSD), 3.1 (redondeo), 3.2 (cifras significativas), 7.2 y 7.3 (resumen de las General Notices de la USP), 12 (redondeo en ingeniería).
- **FDA, Investigating Out-of-Specification (OOS) Test Results for Pharmaceutical Production**, Revision 1, mayo de 2022. https://www.fda.gov/media/158416/download. Apartados IV.C.1 (promedios), nota 12 (resultado notificable), V.B (precauciones, resultados en el límite).
- **ICH Q6A**, https://database.ich.org/sites/default/files/Q6A%20Guideline.pdf. Glosario: «Acceptance criteria», «Specification».
- **ICH Q2(R2)** (2023), https://database.ich.org/sites/default/files/ICH_Q2%28R2%29_Guideline_2023_1130.pdf. Glosario: «Reportable result», «Determination»; precisión expresada como desviación estándar o coeficiente de variación.
- **ICH Q3A(R2)**, https://database.ich.org/sites/default/files/Q3A%28R2%29%20Guideline.pdf. Apartado 5 y anexo 2.
- **ICH Q3C(R8)**, https://database.ich.org/sites/default/files/ICH_Q3C-R8_Guideline_Step4_2021_0422_1.pdf. Tabla 2 (clase 2).
- **ICH Q7**, https://database.ich.org/sites/default/files/Q7%20Guideline.pdf. 2.15, 6.60, 8.33, 8.36, glosario «In-Process Control».
- **ICH Q1A(R2)**, https://database.ich.org/sites/default/files/Q1A%28R2%29%20Guideline.pdf. Solo para la abreviatura «not more than (NMT)».
- **VIM (JCGM 200), versión HTML con anotaciones**, https://jcgm.bipm.org/vim/en/ — entradas 2.3, 2.9, 2.10, 2.15, 2.26, 2.30, 2.35, 2.36, 2.38, 4.14.

Cálculos: `tmp-calculo/calc.py`, `calc2.py`, `calc3.py` (Python 3, redondeo con `decimal.ROUND_HALF_UP`) y una línea de Node para JavaScript.

## Tabla de afirmaciones

| Dato, fórmula o afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| Reglas para contar cifras significativas (no nulas cuentan; la primera es la primera no nula; con coma, la última aunque sea cero) | ORA III-04, 3.2.1 | Leído |
| Ejemplos 12,3 mg (3), 12,30 mg (4), 100,02 % (5) | ORA III-04, 3.2.1 E | Leído; 0,0250 g (3) aplicado con las mismas reglas |
| El resultado final no debe tener más cifras significativas que el dato menos preciso («garbage in, garbage out») | ORA III-04, 3.2 | Leído |
| Suma/resta: decimales del dato con menos decimales; producto/cociente: cifras del dato con menos cifras | ORA III-04, 3.2.2.1 y 3.2.2.2 | Leído (el ejemplo numérico del manual, 4,9757…, no cuadra con su propia expresión al recalcularlo: 5,033; por eso no se reproduce) |
| 1250 + 2,35 + 0,125 = 1252,475, expresado 1252 kg | Cálculo; valores de ejemplo declarados | Recalculado |
| Cuenta 1: 248,96 mg / 0,2503 g: 99,44–99,48 %; / 0,25 g: 97,6–101,6 %; 99,584 % | Cálculo; valores de ejemplo | Recalculado (calc2.py) |
| En valoraciones, pesadas con precisión acorde con lo que pide el método (resumen USP) | ORA III-04, 7.2 C | Leído (parafraseado: «commensurate with the equivalence statement given in the monograph») |
| Guardar una cifra de más y redondear al final; menor que 5 se quita, 5 o mayor sube | ORA III-04, 3.1 | Leído |
| Mismos decimales que el límite (90,0–110,0 % con un decimal) | ORA III-04, 7.2 B (resume USP) | Leído |
| Límites incluyen extremos y se aplican tras redondear | ORA III-04, 7.2 A | Leído |
| Límite 0,2 %: 0,24 % a 0,2 % cumple; 0,25 % a 0,3 % no cumple | ORA III-04, 7.2 D (tabla) | Leído |
| No menos de 95,0 %: 94,95 % a 95,0 % cumple; 94,94 % a 94,9 % no | ORA III-04, 7.2 D (tabla) | Leído |
| Impurezas: dos decimales bajo 1,0 %, uno desde 1,0 %, reglas convencionales | ICH Q3A(R2), apartado 5 | Leído |
| 0,0963 % se informa 0,10 % y no supera el umbral de 0,10 % | ICH Q3A(R2), anexo 2, ejemplo 1 | Leído |
| Resultados de impurezas de los lotes en el expediente: numéricos, no «complies» | ICH Q3A(R2), apartado 5 | Leído |
| Cuenta 2: tabla 0,49 / 0,54 / 0,546 / 0,55 con límite 0,5 y 0,50; doble redondeo 0,546 a 0,55 a 0,6 | Cálculo con las reglas de ORA 3.1; valores de ejemplo | Recalculado (calc.py) |
| Cuenta 3: 97,52 × 100 / 99,56 = 97,951 (98,0); 97,5 × 100 / 99,6 = 97,892 (97,9) | Cálculo; valores de ejemplo | Recalculado |
| Python: round(2.675, 2) = 2.67 (2,675 se guarda como 2,67499999…); round(2.5) = 2; JavaScript: (1.005).toFixed(2) = «1.00» | Ejecución en Python 3 y Node | Comprobado ejecutándolo |
| Los programas del laboratorio se validan para demostrar que calculan y redondean bien | Razonamiento general GMP (no se cita norma concreta) | No se atribuye a ninguna norma en el texto |
| 1 % = 10000 ppm; ppm = µg/g = mg/kg; 0,035 % = 350 ppm; 412 ppm = 0,0412 % | Cálculo (definición de partes por millón) | Recalculado |
| Tolueno 890 ppm; metanol 3000 ppm | ICH Q3C(R8), tabla 2 | Leído |
| Tal cual / base seca (LOD) / base anhidra (KF); corregido = tal cual × 100 / (100 − %) | Regla de tres; coherente con `karl-fischer-a-fondo`, `preparacion-muestra-a-fondo` y `especificaciones-a-fondo` de la app | Recalculado |
| Cuenta 4: 97,9 tal cual; 99,089 (99,1) seca; 98,195 (98,2) anhidra | Cálculo; valores de ejemplo | Recalculado |
| Impureza 0,144 % con LOD 3,0 %: 0,148 % (0,15 %) | Cálculo; valores de ejemplo | Recalculado |
| Seis áreas: suma 7221080, media 1203513,3, suma de cuadrados 28185933, varianza 5637187, s = 2374,3, RSD 0,197 % (0,20 %); con n: 0,18 % | Cálculo; valores de ejemplo | Recalculado (calc2.py, calc3.py) |
| s con N − 1 para una muestra; N solo para la población entera; RSD = 100 s / media | ORA III-04, 2.2 G–I | Leído |
| Precisión expresada como desviación estándar o coeficiente de variación | ICH Q2(R2), glosario y 3.3 | Leído |
| Cadena patrón externo: 25,12 mg/50 mL, factor 10, 0,05024 mg/mL; 50,38 mg/100 mL, factor 10, 0,05038 mg/mL; área 1202670; 0,99930 × 0,99722 × 99,6 = 99,254; base seca con LOD 0,3 %: 99,552 (99,6) | Cálculo; valores de ejemplo; fórmula de `cromatografia-a-fondo` de la app | Recalculado |
| Errores: sin riqueza del patrón 100,456 (100,5) en base seca; muestra tomada en 50 mL: 49,627 (49,6) tal cual | Cálculo | Recalculado |
| Registro del laboratorio con todos los cálculos, unidades, factores de conversión y firma de una segunda persona | ICH Q7, 6.60 | Leído |
| Resultado notificable: el que da el procedimiento tras cálculo y réplicas descritas | ICH Q2(R2), glosario «Reportable result»; FDA OOS, nota 12 | Leído |
| HPLC: promedio de 2 o 3 inyecciones del mismo vial = un ensayo, un resultado; número de réplicas y límites de variabilidad en el método; si no se cumplen, no se usan | FDA OOS 2022, IV.C.1.a | Leído |
| Promediar el OOS con las repeticiones no vale (remite a la lección OOS) | FDA OOS 2022, IV.C.1 y V.B.1 | Leído |
| Definiciones de especificación, criterio de aceptación y «conformance to specifications» | ICH Q6A, glosario | Leído |
| «not more than (NMT)» | ICH Q1A(R2), tabla de condiciones de almacenamiento | Leído |
| 0,104 % a 0,10 % cumple; 0,105 % a 0,11 % no cumple con NMT 0,10 % | Cálculo con ORA 3.1 | Recalculado |
| Definición de incertidumbre de medida | VIM 2.26 | Leído |
| Resultado = valor + incertidumbre; a veces solo el valor si la incertidumbre es despreciable | VIM 2.9, nota 2 | Leído |
| 98,1 ± 0,6: 97,5–98,7 % | Cálculo; valores de ejemplo | Recalculado |
| Los límites ya tienen en cuenta la variación normal del método | ORA III-04, 7.3 A.1 (resume USP: «monograph limits are chosen so that inherent uncertainty in the method is considered») y OMS TRS 1052 anexo 4 citada en `metrologia-a-fondo` | Leído en ORA; lo de la OMS no se releyó aquí, por eso el texto remite a la lección |
| «Testing into compliance» no aceptable | FDA OOS 2022 (citado y desarrollado en `oos-a-fondo`) | Leído en la guía; el texto remite a la lección |
| Resultado de riqueza bajo pero dentro de especificación debe preocupar; prudencia en la decisión | FDA OOS 2022, V.B.3 | Leído (la guía lo plantea para producto formulado; el texto lo dice en general como «pide prudencia») |
| Definición de control en proceso | ICH Q7, glosario | Leído |
| IPC por personal de producción cualificado; ajustes sin aprobación previa solo dentro de límites aprobados por calidad; todo documentado en la hoja | ICH Q7, 8.33 | Leído |
| Registrar las actividades cuando se hacen | ICH Q7, 2.15 | Leído |
| IPC de vigilancia o ajuste: normalmente no requiere investigación OOS | ICH Q7, 8.36 | Leído |
| Proceso FX-101, SD-301 a 55–60 °C, LOD ≤ 0,5 % | Proceso ficticio del simulador de la app (BRIEF-N12) | Valor de ejemplo declarado |
| Resultados de planta 1,84 %, 0,54 % / 0,5 %, 0,47 %, 118,6 kg | Valores de ejemplo declarados | Ficticios |

## Fragmentos de buscador (no usados para cifras)

- La búsqueda web sobre la GUM (JCGM 100:2008, apartado 7.2.6, número de cifras de la incertidumbre) solo devolvió títulos y enlaces; no se leyó el texto. No se usa.

## Lo que se dejó fuera por no poder verificarlo

- **GUM (JCGM 100:2008)**: no accesible. jcgm.bipm.org solo sirve el VIM (las rutas de la GUM dan 404) y www.bipm.org, www.iso.org, is.muni.cz y users.physics.ox.ac.uk no son accesibles desde esta sesión. No se cita la GUM; lo de la incertidumbre se apoya en el VIM y remite a `metrologia-a-fondo`.
- **USP General Notices 7.20 «Rounding Rules»**: no se encontró texto gratuito accesible (usp.org no permitido). No se cita directamente; solo lo que de ella resume el manual ORA de la FDA, diciendo que es un resumen.
- **Farmacopea Europea 1.2** (expresión de resultados y límites): www.edqm.eu bloqueado (403 del proxy). No se cita.
- **Norma UNE/ISO de redondeo y ASTM E29**: de pago; no se citan (ORA solo remite a ASTM E29).
- **Libro de texto abierto de LibreTexts sobre cifras significativas**: chem.libretexts.org bloqueado; no hizo falta.
- **Expresión «base anhidra y libre de disolventes»** de algunas monografías: no verificada; se omitió.
- **Cómo debe usarse exactamente la riqueza de un patrón según su certificado (tal cual o corregida por agua)**: depende del certificado y no se pudo verificar una regla general; el texto solo dice que el certificado indica cómo usarla.
- **Nombres concretos de funciones de hoja de cálculo para s con n y n − 1**: no verificados; el texto solo dice que puede usar una u otra.
- **Abreviatura NLT («not less than»)**: no encontrada en las fuentes leídas; solo se usa la frase completa del manual ORA.
