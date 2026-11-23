# Fuentes: «Refractometría, polarimetría y turbidez a fondo» (`tecnicas-opticas-a-fondo`, nivel 7)

Copias de trabajo en `scratchpad/lecciones/tmp-opticas/` (BOE, eCFR, Kuphaldt, NIST) y en `scratchpad/lecciones/src_espectro/` (manual ORA de la FDA, ICH Q6A, OMS TRS 957, ICH Q7), descargadas y leídas con pdftotext. Cálculos en `tmp-opticas/calc.py`.

Fuentes abreviadas:

- **BOE-1977**: Orden de 31 de enero de 1977, métodos oficiales de análisis de aceites y grasas, cereales, productos lácteos y derivados de la uva. Texto consolidado: https://www.boe.es/buscar/pdf/1977/BOE-A-1977-16116-consolidado.pdf (aceites, método 6 «Índice de refracción»; mantequilla, método 2; leche condensada, método 9).
- **BOE-1979**: Orden de 31 de julio de 1979, métodos oficiales de análisis (aceites, aguas, productos derivados de la uva…). https://www.boe.es/buscar/pdf/1979/BOE-A-1979-21118-consolidado.pdf (11(b).3.2 etilenglicol; método 48 «Relación P/α»).
- **BOE-1987**: Orden de 1 de julio de 1987, métodos oficiales de análisis físico-químicos para aguas potables. https://www.boe.es/buscar/pdf/1987/BOE-A-1987-15871-consolidado.pdf (método 2 «Color», método 3 «Turbidez»).
- **BOE-1988**: Orden de 27 de abril de 1988, métodos oficiales de análisis de zumos de uva (BOE n.º 110, 7/5/1988). https://www.boe.es/boe/dias/1988/05/07/pdfs/A13905-13920.pdf (método 1 «Grado Brix»).
- **RD 3/2023**: Real Decreto 3/2023, agua de consumo. https://www.boe.es/buscar/pdf/2023/BOE-A-2023-628-consolidado.pdf (anexo I, parte C, parámetro 54 y nota 17; parte D, parámetro 56).
- **40 CFR 141.173 / 141.73**: https://www.ecfr.gov/current/title-40/chapter-I/subchapter-D/part-141 (descargado con la API de renderizado de eCFR).
- **FDA ORA IV-03**: ORA Laboratory Manual Vol. IV Section 3, Drug Chemistry Analysis, MAN-000056 rev. 03 (7/10/2022), apartados 8.4.4 y 6.4.4.C (respuestas). https://www.fda.gov (copia en `src_espectro/drugchem.txt`).
- **ICH Q6A**: https://database.ich.org/sites/default/files/Q6A%20Guideline.pdf, apartado 3.3.1 a).
- **OMS TRS 957**, anexo 1 (2010): listas de equipos y nota 12.12.
- **Kuphaldt-FO**: https://control.com/textbook/instrument-connections/fiber-optics/ . **Kuphaldt-OA**: https://control.com/textbook/continuous-analytical-measurement/introduction-to-optical-analysis/
- **NIST WebBook**: https://webbook.nist.gov (masas de K, Pt, Cl₂).

| Dato, fórmula o afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| n = velocidad de la luz en el vacío / velocidad en la sustancia; en la práctica se refiere al aire | BOE-1977, aceites, 6.1 | Leído en el documento |
| n es también la relación seno del ángulo de incidencia / seno del de refracción | BOE-1977, 6.1 | Leído |
| Ley de Snell (sen θ₁ / v₁ = sen θ₂ / v₂) y su forma con índices n₁ sen θ₁ = n₂ sen θ₂ | Kuphaldt-FO; paso a índices con n = c/v | Leído; la forma con n se obtiene sustituyendo v = c/n (cálculo) |
| El índice varía con la longitud de onda y la temperatura; referencia línea D del sodio 589,3 nm; notación con t y D | BOE-1977, 6.1 | Leído |
| Luz blanca válida si el refractómetro tiene compensación cromática | BOE-1977, 6.2.1 y mantequilla 2.2.2 | Leído |
| Refractómetro de precisión que aprecia al menos las diezmilésimas; prismas termostatados ± 0,1 °C | BOE-1977, 6.2.1 | Leído |
| Aceite limpio y sin agua, filtrado; lectura tras al menos 5 minutos | BOE-1977, 6.3 (en la lección quedó como «muestra limpia y sin agua») | Leído |
| Agua destilada debe dar 1,3330 a 20 °C; si no, corregir; muestra en baño a 20 °C en recipiente cerrado; conversión a grados Brix con tabla | BOE-1988, 1.3 y 1.4 | Leído (las tablas I y II son imágenes no legibles con pdftotext: no se usan cifras de ellas) |
| c = 299 792 458 m/s | Ya verificada en «Espectroscopia a fondo» (RD 2032/2009) | Dato de la lección existente |
| v en agua = 224 900 000 m/s | Cálculo 299 792 458 / 1,3330 = 224 900 569 | Recalculado |
| Aire n ≈ 1 en el ejemplo de Snell | BOE-1977 («por conveniencia se refiere al aire»); valor 1 como aproximación | Aproximación declarada (≈) |
| 30° aire-agua da 22,0°; sen θ₂ = 0,3751 | Cálculo | Recalculado (22,03°) |
| Ángulo límite y reflexión total; sen θc = n₂/n₁ | Kuphaldt-FO (concepto); fórmula por cálculo con sen 90° = 1 | Leído y deducido |
| Prisma n = 1,75 | Valor de ejemplo declarado | — |
| θc = 49,6° (agua) y 54,7° (n 1,4283) | Cálculo | Recalculado (49,62° y 54,70°) |
| Muchos refractómetros buscan la frontera clara/oscura del ángulo límite sobre un prisma de índice conocido | Patentes y artículo arXiv vistos solo en el buscador | **Fragmento de buscador** (afirmación cualitativa, sin cifras) |
| ICH Q6A cita el índice de refracción como propiedad fisicoquímica y la «Abbé refractometry» | ICH Q6A 3.3.1 a) | Leído |
| Corrección de temperatura F = 0,00035 por °C para referir a 20 °C (grasas); n baja al calentar | BOE-1977, 6.4 (primera fórmula, caso t' > t) | Leído. Nota: la segunda fórmula del texto consolidado (t' < t) suma también la corrección, lo que daría un signo físicamente incoherente con la primera; parece errata de transcripción. En la lección se usa una sola fórmula n20 = n leído + (t' − 20)·F, idéntica a la primera del BOE y con el signo correcto por debajo de 20 °C |
| 1,4652 a 24 °C da 1,4666; 1,4688 a 22 °C da 1,4695 | Cálculo | Recalculado |
| Etilenglicol reactivo: índice a 20 °C entre 1,4274 y 1,4292 | BOE-1979, 11(b).3.2 (el guion entre cifras se pierde en el texto: «1,42741,4292») | Leído |
| Recta de calibrado de índice frente a % (1,3330 / 1,3475 / 1,3620) y muestra 1,3548 | Valores de ejemplo declarados; pendiente 0,00145 y 15,0 % | Recalculado (15,03 %) |
| La OMS cita el detector de índice de refracción entre los opcionales del HPLC | OMS TRS 957, anexo 1, tabla de equipos | Leído |
| Polarimetría = medida de la rotación óptica; sustancias que giran el plano de la luz polarizada; (+) dextrógiras, (−) levógiras; son quirales | FDA ORA IV-03, 6.4.4.C, respuesta 1 | Leído |
| Placa de cuarzo de calibración, trazable al NIST, estabilizada a 25 °C, en el portatubos | FDA ORA IV-03, 6.4.4.C, respuesta 2 | Leído |
| [α] = 100a/(l·c), l en dm, c en g/100 mL; temperatura dentro de 0,5 °C | FDA ORA IV-03, 6.4.4.C, respuesta 3 | Leído |
| [α] = α/(l·c) con c en g/mL es la misma cuenta | Cálculo (1 g/mL = 100 g/100 mL) | Comprobado con el ejemplo: 66,0 por las dos vías |
| Polarímetro con lámpara de vapor de sodio y tubo de 20 cm; comprobar el cero con campo uniforme; sin burbujas; líquido incoloro y limpio; temperatura próxima a 20 °C | BOE-1979, método 48.2.2 y 48.3.2 | Leído |
| Alternativa de luz verde de mercurio | BOE-1977, leche condensada 9.2.9.1 | Leído |
| Ejemplos de rotación: +2,64° en 2 dm a 0,0200 g/mL da +66,0°; [α] −40 a 0,050 g/mL y 1 dm da −2,00°; −1,86° en 2 dm a 0,0150 g/mL da −62° | Valores de ejemplo declarados | Recalculados |
| Racemato sin actividad óptica; enantiómeros idénticos salvo el sentido de giro | ICH Q6A y guía EMA, ya verificados en «Isómeros y quiralidad a fondo» | Remisión a lección existente |
| Pureza óptica = [α] medida / [α] del puro × 100; en el caso ideal coincide con el ee | Definición IUPAC (Gold Book O04310) vista solo en el buscador; equivalencia deducida suponiendo contribución proporcional a la cantidad | **Fragmento de buscador** para la definición; la equivalencia se presenta como cálculo con hipótesis declarada («caso ideal») |
| 48,6/50,0 = 97,2 %; mayoritario 98,6 %; 47,0/50,0 = 94 % y minoritario 3 % | Cálculo con valores de ejemplo | Recalculado |
| La rotación da una cifra para toda la muestra; para cuantificar se usa HPLC quiral | «Isómeros y quiralidad a fondo» (EMA) | Remisión a lección existente |
| Principio de la nefelometría: las partículas desvían parte de la luz, que recogida en una célula fotoeléctrica da una corriente función de la turbidez | BOE-1987, 3.1 | Leído |
| Turbidimetría como medida de la luz que sigue en línea recta | Deducción de la definición de transmitancia («Espectroscopia a fondo»); sin documento específico | Explicación conceptual, sin cifras |
| Formacina: 1,00 g sulfato de hidracina / 100,0 mL; 10,00 g hexametilentetramina / 100,0 mL; 5,0 mL de cada en 100 mL; 48 h a 20-25 °C; precipitado blanco; 400 UNF; preparación mensual; patrones semanales con agua filtrada 0,2 µm; intervalo 0-40 UNF; preferir patrones altos a diluir; dilución con la misma agua filtrada; sin burbujas | BOE-1987, 3.3 y 3.4 | Leído |
| Resultados en «unidades nefelométricas de formacina (UNF)» | BOE-1987, 3.5 | Leído |
| Unidad NTU en EE. UU. | 40 CFR 141.73 y 141.173 | Leído |
| UNF y NTU son unidades nefelométricas equivalentes referidas a la formacina; ángulo de 90° del nefelómetro | Solo fragmentos de buscador (patentes, artículos) | **Fragmento de buscador**: la lección no da la equivalencia como segura: dice que las dos se refieren a la formacina, que cada norma fija su equipo y que cada resultado se compara con el límite de su norma; no se da el ángulo de 90° |
| RD 3/2023: turbidez 4,0 UNF valor paramétrico (depósitos y red); 0,8 UNF de referencia a la salida de ETAP o depósito de cabecera; ≤ 0,3 UNF en el 95 % de las muestras anuales a la salida de la filtración (control operacional); no aptitud 2 UNF en ETAP y 6 UNF en red | RD 3/2023, anexo I, parte C, parámetro 54, nota 17 | Leído |
| RD 3/2023: color, valor de referencia 15 mg/L Pt/Co | RD 3/2023, anexo I, parte D, parámetro 56 | Leído |
| EE. UU.: ≤ 0,3 NTU en el 95 % de las medidas mensuales y nunca más de 1 NTU (filtración convencional o directa, apartado a). El 99,9 % de quistes de *Giardia*, 99,99 % de virus y 99 % de ooquistes de *Cryptosporidium* se exige en el apartado (b) a otras tecnologías de filtración | 40 CFR 141.173(a) y (b) | Leído |
| ICH Q7 4.31: agua potable como mínimo | ICH Q7 (ya verificado en «Agua farmacéutica a fondo») | Leído |
| Escala platino-cobalto: 1,246 g K₂PtCl₆ (= 500 mg Pt) + 1,000 g CoCl₂·6H₂O + 100 mL HCl d 1,19, a 1000 mL; 500 mg Pt/L; patrones 1-70 mg Pt/L; tubos de Nessler de 50 mL mirando de arriba abajo contra superficie blanca; centrifugar si hay partículas; diluir si > 70 y multiplicar; redondeos 1-50 a 1, 51-100 a 5, 101-250 a 10 | BOE-1987, método 2 | Leído |
| 1,246 g de K₂PtCl₆ contienen 0,500 g de Pt | NIST WebBook: K 39,0983; Pt 195,084; Cl₂ 70,906 (Cl 35,453); M = 486,00 g/mol | Recalculado (0,5002 g); se dejó en el archivo de fuentes, fuera del cuerpo, por longitud |
| Diluciones: 20 UNF en 100 mL = 5,0 mL; 4 UNF en 250 mL = 2,5 mL; color 30 × 4 = 120; 18 × 4 = 72 (redondeado a 70) | Cálculo | Recalculado |
| Colorímetros de filtro y espectrofotómetro en el visible | Kuphaldt-OA distingue análisis dispersivo y no dispersivo; espectrofotómetro en «Espectroscopia a fondo» y «Aspecto, color, solubilidad y claridad a fondo» | Leído (afirmación general, sin cifras) |
| Refractómetro opcional y polarímetro en el equipo básico de un laboratorio de control | OMS TRS 957, anexo 1, tabla (no se incluyó en el cuerpo por longitud) | Leído |
| Plantas ficticias R-512, C-515, D-520, T-522, E-521, AT-601, QX-31, especificaciones de [α] e intervalo | Valores de ejemplo declarados | — |
| La fuga de agua del condensador la detecta el ensayo de agua, no el índice de refracción: el tolueno disuelve muy poca agua (centésimas de un tanto por ciento a temperatura ambiente) y con un 0,05 % la mezcla lineal mueve n en unas −0,00008 | Solubilidad: conocimiento general, no comprobado en una fuente descargada; Δn recalculado con 1,333 y 1,496 | Recalculado; solubilidad sin fuente leída (la lección no da cifra) |

## Lo que se quiso incluir y se dejó fuera

- **Valores de índice de refracción de disolventes concretos** (tolueno, metanol, etc.) y el **coeficiente de temperatura del agua**: no se encontraron en una fuente gratuita accesible (NIST WebBook no da índices; Gold Book bloqueado).
- **Tablas de grados Brix y de corrección de temperatura del BOE-1988**: son imágenes en el PDF; no se transcribieron cifras. No se define el grado Brix numéricamente por no tener la definición en un documento leído.
- **Rotación específica de la sacarosa o la dextrosa** (+66,5°, +52,6°…): solo en farmacopeas de pago o fragmentos; se usaron valores de ejemplo.
- **Ángulo de 90° y longitud de onda de 860 nm del nefelómetro (ISO 7027, EPA 180.1)**: solo fragmentos de buscador; norma ISO de pago y EPA/USGS no accesibles. No se dan.
- **Equivalencia exacta UNF = NTU = FNU**: solo fragmento de buscador.
- **Peligrosidad del sulfato de hidracina**: no hay ficha ICSC del sulfato (solo de la hidracina); se dice solo que se maneja según su FDS.
- **Guía de la OMS (Farmacopea Internacional) para verificar refractómetros**: citada en TRS 957 12.12, pero el texto de la Farmacopea Internacional no fue accesible.
- **Monografías de farmacopea (USP <781>, <831>; Ph. Eur. 2.2.6, 2.2.7)**: de pago.
- **Escala sacarimétrica internacional** (1 grado polarimétrico = 4,615 divisiones sacarimétricas, BOE-1979): verificada pero se dejó fuera por no ser útil para una planta de API.

## Ideas para la capa visual

1. **Simulación PhET «Bending Light» (Doblando la luz)**: cambiar el medio (aire, agua, vidrio) y ver la refracción, la ley de Snell y la reflexión total al superar el ángulo límite.
2. **Esquema del polarímetro**: lámpara de sodio, polarizador, tubo de 2 dm con la muestra, analizador girado α grados, con el plano de vibración dibujado en cada tramo.
3. **Dibujo comparativo turbidímetro frente a nefelómetro**: haz que atraviesa la cubeta con detector enfrente (luz transmitida) y detector lateral (luz desviada), con partículas en suspensión.
4. **Fila de tubos de Nessler** con la escala platino-cobalto de 0 a 70 mg Pt/L, vista desde arriba sobre fondo blanco, y una muestra para comparar.
