# Fuentes de «Unidades de medida a fondo» (`unidades-a-fondo`)

Documentos leídos en esta sesión (copias en `src_unid/dl/`):

- **RD2032**: Real Decreto 2032/2009, de unidades legales de medida, texto consolidado del BOE (última actualización 29/04/2020): https://www.boe.es/buscar/act.php?id=BOE-A-2010-927 . Leído entero: artículo único, disposiciones, anexo capítulos I a IV con las tablas 1 a 8 y sus notas.
- **RD493**: Real Decreto 493/2020, que modifica el RD 2032/2009: https://www.boe.es/buscar/doc.php?id=BOE-A-2020-4707 (leído el preámbulo).
- **RD2685**: Real Decreto 2685/1976 (reglamentación de preparados alimenticios para regímenes dietéticos): https://www.boe.es/buscar/doc.php?id=BOE-A-1976-23962 (leído el apartado 5.5, «Caloría»).
- **VIM**: VIM3 en línea, versión inglesa: https://jcgm.bipm.org/vim/en/1.1.html , 1.7, 1.9, 1.10, 1.13, 1.15, 1.16, 1.19, 1.20, 1.24 y 2.1 (mismo patrón de URL). No encontré la versión española en jcgm.bipm.org (la URL /vim/es/ da 404): las definiciones son traducción propia.
- **CFR171**: 49 CFR 171.10, «Units of measure», tabla de factores de conversión: https://www.ecfr.gov/current/title-49/section-171.10 (leída entera).
- **CFR571**: 49 CFR 571.116 (líquido de frenos), apartados S5.1.3 y S5.1.5.1: https://www.ecfr.gov/current/title-49/section-571.116 (leídos los fragmentos con −40 °C = −40 °F y 3 °C = 5,4 °F).
- **CFR16**: 16 CFR 500.8, galón estadounidense de 231 pulgadas cúbicas (visto en el resultado de búsqueda de la API de eCFR, con el texto de la norma).
- Lecciones de la app: `unidades-y-conversiones` (nivel0.ts), `materia-a-fondo` (nivel1-materia.ts), `fluidos-a-fondo` (nivel11-fluidos.ts), `gases-de-planta-a-fondo` (nivel14-gases.ts), `calor-y-frio` (nivel11-calor.ts, cp del agua), `src/content/fds.ts` (densidad del metanol), `inertizacion-a-fondo` (modelo).

## Tabla de afirmaciones

| Afirmación / dato | Fuente | Cómo se comprobó |
|---|---|---|
| Definiciones de magnitud, unidad de medida, medición, valor de una magnitud | VIM 1.1, 1.9, 2.1, 1.19 | Leído (traducción propia) |
| El valor de una magnitud es el producto de un número por una unidad | RD2032, anexo, cap. III, 2.1 | Leído |
| «Presión: 500» puede ser 500 mbar abs o 500 kPa (5 bar) | Cálculo (1 bar = 100 kPa, RD2032 tabla 8) | Recalculado |
| Sistema legal obligatorio en España: SI adoptado por la CGPM | RD2032, artículo único, 1 | Leído |
| Las 7 unidades básicas, nombres y símbolos | RD2032, cap. I, tabla 1; VIM 1.16 | Leído |
| Cada unidad básica se define fijando el valor de una constante; constantes «por definición invariables» | RD493, preámbulo; RD2032 cap. I, 2 | Leído |
| Revisión adoptada por la 26.ª CGPM en noviembre de 2018; la más importante desde 1960 | RD493, preámbulo | Leído |
| Segundo: ΔνCs = 9 192 631 770 Hz; metro: c = 299 792 458 m/s; kilogramo: h = 6,626 070 15 × 10⁻³⁴ J·s; kelvin: k = 1,380 649 × 10⁻²³ J/K; mol: 6,022 140 76 × 10²³ entidades | RD2032, cap. I, 2.1 a 2.6 | Leído |
| Unidades derivadas como productos de potencias de básicas | RD2032, cap. II, 1 | Leído |
| newton m·kg·s⁻²; pascal N/m² = m⁻¹·kg·s⁻²; julio N·m = m²·kg·s⁻²; vatio J/s = m²·kg·s⁻³; °C ligado a K | RD2032, cap. II, tabla 3 | Leído |
| Temperatura Celsius = T − 273,15 K; 1 °C igual en tamaño a 1 K; diferencias en K o °C | RD2032, tabla 3, nota (e) | Leído |
| Explicación con palabras de newton, pascal, julio, vatio | Conocimiento de libro de texto, coherente con las expresiones de la tabla 3 | Razonado |
| Prefijos G, M, k, c, m, µ, n con sus factores | RD2032, cap. III, tabla 5 | Leído |
| Salvo da, h, k, múltiplos en mayúscula y submúltiplos en minúscula | RD2032, cap. III, 3.2 | Leído |
| 1 Mbar / 1 mbar = 10⁹ | Cálculo (10⁶ / 10⁻³) | Recalculado |
| K es el símbolo del kelvin | RD2032, tabla 1 | Leído |
| No prefijos compuestos (nm, no mµm); prefijo nunca solo | RD2032, cap. III, 1.2 y 3.4 | Leído |
| Múltiplos de la masa sobre el gramo | RD2032, cap. III, 3.6 | Leído |
| Prefijos nunca con minuto, hora, día | RD2032, cap. III, 3.5 | Leído |
| Prefijo y unidad se elevan juntos: 1 cm³ = 10⁻⁶ m³ | RD2032, cap. III, 3.3 (ejemplo 2,3 cm³ = 2,3 × 10⁻⁶ m³) | Leído + recalculado |
| Símbolos sin punto ni plural; son entidades matemáticas | RD2032, cap. III, 1.3 y 2.4 | Leído |
| Prohibidas abreviaturas como «seg» y «cc» | RD2032, cap. III, 1.5 | Leído |
| Espacio entre número y unidad; excepciones °, ′, ″ de ángulo; °C con espacio | RD2032, cap. III, 2.6 | Leído |
| Una sola unidad por expresión, excepción tiempo y ángulo | RD2032, cap. III, 2.7 | Leído |
| Coma preferida; cero delante entre −1 y 1 | RD2032, cap. III, 2.8 | Leído |
| Grupos de tres cifras con espacio, nunca punto ni coma; con cuatro cifras lo usual es no separar | RD2032, cap. III, 2.9 | Leído |
| No más de una barra sin paréntesis | RD2032, cap. III, 1.4 | Leído |
| % con espacio y declarar la magnitud; ppm = 10⁻⁶, declarar la magnitud | RD2032, cap. III, 2.10 | Leído |
| La unidad no se modifica con información sobre la magnitud (por eso «bar g» no es estrictamente conforme) | RD2032, cap. III, 2.5 | Leído; la aplicación a «bar g» / «mbar abs» es interpretación propia, declarada en el texto |
| Litro L o l, se recomienda L | RD2032, cap. III, 1.1; tabla 6, nota (d) | Leído |
| Tabla de errores frecuentes (5Kg, kgs, 1.500 kg, 12,500 kg, ,8 bar, cc, 65º C) | Aplicación de las reglas anteriores del RD2032 | Razonado a partir de lo leído |
| Tabla 6: min, h, d (86 400 s), litro (1 dm³ = 10⁻³ m³), tonelada (10³ kg), hectárea, grado | RD2032, cap. IV, tabla 6 | Leído |
| Bar = 100 kPa = 0,1 MPa, se usa con prefijos (mbar); mmHg ≈ 133,322 Pa, solo presión sanguínea y fluidos corporales | RD2032, cap. IV, 4 y tabla 8, nota (b) | Leído |
| Atmósfera normal = 1,013 25 bar = 101 325 Pa, presión normal antes de 1982 | RD2032, tabla 8, nota (a) | Leído |
| La caloría no aparece en el RD; atmósfera, caloría y psi no son unidades autorizadas | RD2032 (artículo único 1 y 3: obligatorio el SI y autorizadas solo las del cap. IV) | Leído; la conclusión «no legales» es lectura propia del artículo único |
| Instrumentos con sus indicaciones en una sola unidad legal | RD2032, disposición adicional única | Leído |
| 1 kJ = 0,239 kcal; por tanto 1 kcal ≈ 4,18 kJ | RD2685, apartado 5.5 | Leído + recalculado (1/0,239 = 4,184) |
| 1 in = 25,4 mm; 1 lb = 0,4535924 kg; 1 gal = 3,785412 L; 1 psi = 6,894757 kPa; 1 bar = 14,504 psi | CFR171, tabla | Leído |
| Galón estadounidense = 231 in³ | CFR16 (16 CFR 500.8) | Visto en el extracto de la API de eCFR (texto de la norma, no del buscador web); recalculado 231 × 2,54³ = 3785,41 cm³, coincide con CFR171 |
| t(°F) = 1,8 · t(°C) + 32 | Conocimiento de libro de texto, comprobado por cálculo | Comprobado con CFR571: −40 °C = −40 °F y 3 °C = 5,4 °F |
| Factor de conversión como cociente de unidades: km/m = 1000 | VIM 1.24 | Leído |
| Las 12 conversiones del body (1250 kg; 0,38 kg; 3200 L; 0,45 L; 9 m³/h; 7110 kg/h; 250 kPa; 3,5 kPa; 10,3 bar; 66,7 mbar; 338,15 K; 176,7 °C; 20 °C/h frente a 2,2; 7,5 kWh; 27 000 kJ; 58,1 kW; 25 mg/mL; 300 ppm; 500 ppm) | Cálculo (`src_unid/calc.py`) | Recalculado con python |
| Densidad del metanol 0,79 kg/L | `src/content/fds.ts` (0,79 g/cm³ a 20 °C) | Leído en la app |
| cp del agua 4,18 kJ/(kg·K) | Lección de calor de la app (nivel11-calor.ts) | Leído en la app |
| g = 9,81 m/s² | Valor redondeado habitual, ya usado en `fluidos-a-fondo` | Repo |
| Análisis dimensional: 37 620 kJ; 15 500 Pa ≈ 155 mbar; 0,003 m³/s = 10,8 m³/h | Cálculo; unidad del pascal de RD2032 tabla 3 | Recalculado |
| Sección de tubo 0,002 m² | Valor de ejemplo declarado | — |
| Errores de unidades: 500 L de metanol = 395 kg, faltan 105 kg (21 %); 100 en casilla bar; −0,9 bar g ≈ 100 mbar abs con 1 bar de atmósfera; 0,5 mg = 500 µg | Ejemplos ficticios declarados; cálculo | Recalculado |
| ALCOA+: dato original y exacto | Lecciones de la app (hoja de producción, sistema de calidad) | Repo |
| Ejemplo de planta: 87 psi = 599,8 kPa ≈ 6,0 bar; 120 °F = 48,9 °C; códigos CF-230, PT-230, TX-88 | Cálculo con CFR171 y fórmula °F; códigos ficticios | Recalculado |
| Quiz numérico: 12 m³/h; 5688 kg/h; 4,5 kPa; 6,89 bar; 150 °C; 15 K/h; 36000 kJ; 150 ppm | Cálculo | Recalculado con python |

## Lo que quería incluir y dejé fuera

- **Fecha de entrada en vigor internacional del SI revisado (20 de mayo de 2019).** El encargo decía «desde 2019», pero ni el RD 2032/2009 ni el RD 493/2020 dan esa fecha (el RD 493 solo dice que la 26.ª CGPM lo adoptó en noviembre de 2018; el texto consolidado indica que la redacción española está en vigor desde el 30/04/2020). bipm.org no es accesible. No la puse.
- **El prototipo internacional del kilogramo** (cilindro guardado en Francia) como ejemplo de la definición antigua: no lo encontré en las fuentes leídas. Quitado.
- **Valor exacto de la caloría (4,184 J, caloría termoquímica, o 4,1868 J, caloría internacional)** y la existencia de varias calorías: no encontré fuente gratuita accesible que lo diga. Solo se usa 1 kJ = 0,239 kcal del RD 2685/1976. Un documento del BOE de 1984 con «1 kcal = 4,19 · 10³ J» apareció solo como fragmento del buscador; no usado.
- **Libra-fuerza y gravedad normal (9,80665 m/s²)** para deducir el psi desde su definición: no leídos en fuente; se usó directamente el factor de 49 CFR 171.10.
- **Errores de unidades famosos reales** (por ejemplo, la sonda Mars Climate Orbiter o errores de dosificación en hospitales): no pude leerlos en una fuente oficial accesible. Se usan solo ejemplos ficticios declarados.
- **Galón imperial británico** y otras unidades imperiales mencionadas en la Directiva 80/181/CEE: no pude localizar la directiva en boe.es; fuera.
- **Versión española oficial del VIM** (CEM): no accesible; se tradujo de la versión inglesa.
