# Fuentes de la lección `metrologia-a-fondo`

Leyenda: **Leído** = texto leído en el documento descargado con curl (copias en `src_metro/dl/`). **Fragmento** = solo visto en el buscador. **Cálculo** = recalculado con python (`src_metro/calc/calc.py`). **Ejemplo** = valor de ejemplo declarado en el texto. **Libro de texto** = conocimiento general no leído en una fuente accesible. **Razonamiento** = consecuencia lógica de lo ya fuenteado.

Avisos generales:
- **GUM (JCGM 100:2008) no leída.** jcgm.bipm.org da 404 en todas las rutas probadas (`/gum/`, `/gum/en/`, PDF); www.bipm.org, www.iso.org (versión HTML) y los espejos universitarios no resuelven desde la sesión. Sus fórmulas se han tomado de documentos gratuitos leídos (FDA, OMS) y, donde no, se marcan como libro de texto.
- **Guía Eurachem/CITAC, www.cem.es y www.enac.es: no accesibles** (fallo de red). Lo de ENAC y el CEM se apoya en el BOE.
- La guía de la OMS TRS 957 anexo 1 (2010) fue revisada por la TRS 1052 anexo 4 (2024), que lo dice en su apartado 1 («revised as … TRS No. 957, 2010»). Se cita la de 2024 salvo para los ejemplos de intervalo, que solo están en la de 2010, y se avisa en el texto.

| Dato o afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| Magnitud: propiedad con valor expresable con un número y una referencia | VIM 1.1 — https://jcgm.bipm.org/vim/en/1.1.html | Leído (traducción propia) |
| Medición: obtener experimentalmente valores atribuibles razonablemente; implica comparación o recuento | VIM 2.1, nota 2 — https://jcgm.bipm.org/vim/en/2.1.html | Leído |
| Mensurando: magnitud que se quiere medir; requiere especificación | VIM 2.3 | Leído |
| Valor verdadero: coherente con la definición; en la práctica incognoscible | VIM 2.11, nota 1 | Leído |
| Valor medido: valor que representa un resultado de medida; promediar lecturas repetidas suele reducir la incertidumbre | VIM 2.10, nota 1 | Leído |
| Error de medida = valor medido menos valor de referencia; se conoce cuando se calibra con un patrón | VIM 2.16, nota 1 | Leído |
| Error sistemático (constante o predecible), compensable con corrección; error aleatorio (impredecible) | VIM 2.17, 2.19, 2.53 | Leído |
| Sesgo = estimación del error sistemático | VIM 2.18 | Leído |
| Analogía de la diana (arquero) | FDA ORA Lab Manual Vol. III sección 4, MAN-000048, 2.1 — https://www.fda.gov/media/73535/download | Leído |
| Exactitud: proximidad entre valor medido y verdadero; no es una magnitud numérica | VIM 2.13 | Leído |
| Veracidad: media de infinitas lecturas frente a valor de referencia; relacionada con el error sistemático, no con el aleatorio | VIM 2.14, nota 2 | Leído |
| Precisión: entre lecturas repetidas, en condiciones especificadas; se expresa con desviación típica, varianza o coeficiente de variación | VIM 2.15, nota 1 | Leído |
| Condiciones de repetibilidad, de precisión intermedia y de reproducibilidad | VIM 2.20, 2.21, 2.22, 2.24, 2.25 | Leído |
| «Reproducibilidad dispersa más que repetibilidad» | Razonamiento: más fuentes de variación incluidas | Razonamiento |
| Diez lecturas 20,01…20,01 kg, pesa de 20,000 kg, báscula WS-205 con resolución 0,01 kg | Valores de ejemplo | Ejemplo |
| Suma 200,10; media 20,010; desviaciones; suma de cuadrados 0,0004; /9 = 0,0000444; s = 0,00667 = 0,0067 kg; CV = 0,033 %; sesgo +0,010 kg; s/√10 = 0,0021 kg | Cálculo | Cálculo (python, `statistics.stdev` coincide) |
| Fórmula de s con N − 1; con N solo para la población entera; RSD = 100·s/media | FDA MAN-000048, 2.2 G-I | Leído |
| Incertidumbre de la media = s/√n («desviación típica de la media») | FDA Elemental Analysis Manual 3.3, v3.0 (2021) — https://www.fda.gov/media/89339/download | Leído |
| Incertidumbre: parámetro no negativo que caracteriza la dispersión de los valores atribuidos al mensurando, según la información usada | VIM 2.26 | Leído |
| Una medida solo está completa si incluye su incertidumbre | FDA ORA-LAB.5.4.6 Rev. 02 (2019), apartado 4 — https://www.fda.gov/media/73928/download | Leído |
| Incertidumbre típica = expresada como desviación típica | VIM 2.30; OMS TRS 1052 anexo 4, glosario | Leído |
| Combinada a partir de las típicas de las magnitudes de entrada | VIM 2.31 | Leído |
| Combinación en cuadratura (raíz de la suma de cuadrados) de componentes independientes | FDA ORA-LAB.5.4.6, 6.2 B.6; FDA EAM 3.3 ec. 2; OMS TRS 1052 anexo 4, apéndice 3 («square root of the sum of the squares») — https://cdn.who.int/media/docs/default-source/medicines/norms-and-standards/guidelines/quality-control/trs1052_annex4.pdf | Leído |
| Expandida = combinada × factor mayor que uno; factor de cobertura k | VIM 2.35, 2.38 | Leído |
| k = 2 para 95 %, k = 3 para 99 % | FDA ORA-LAB.5.4.6, 6.2 B.7 y glosario 7.A | Leído |
| En la normal, 95 % dentro de unas ±2σ (1,96σ), 68 % en ±1σ | FDA MAN-000048, 2.5 B | Leído |
| «Por qué en cuadratura»: improbable que todas las fuentes coincidan al máximo | Libro de texto | Libro de texto |
| Tipo A: análisis estadístico de valores medidos; tipo B: otros medios (certificado, material de referencia certificado, deriva, clase de exactitud, experiencia) | VIM 2.28, 2.29 | Leído |
| u = U/k desde un certificado | Razonamiento a partir de VIM 2.35 (U = k·u_c) | Razonamiento |
| Rectangular: u = a/√3; ejemplo pipeta ±1 %: 1/√3 = 0,58 % | FDA EAM 3.3 (3.3.3.2) | Leído (la FDA dice «width of the interval» pero su ejemplo usa la semianchura) |
| Resolución: rectangular con a = d/2, u = d/(2√3) | GUM F.2.2.1 (no leída) | Libro de texto (declarado en el texto) |
| Presupuesto de incertidumbre: componentes, cálculo y combinación | VIM 2.33 | Leído |
| Contribuciones del presupuesto (s = 6,7 g; U = 10 g, k = 2; d = 10 g; deriva ±20 g) | Valores de ejemplo | Ejemplo |
| 6,7 / 5,0 / 2,9 / 11,5 g; cuadrados 44,4 / 25,0 / 8,3 / 133,3; suma 211,1; u_c = 14,5 g; U = 29 g; 0,12 % de 25 kg y 1,5 % de 2 kg | Cálculo | Cálculo (python; con valores sin redondear u_c = 14,53 g) |
| Deriva tratada como rectangular | FDA EAM 3.3: límites de estabilidad a largo plazo como distribución rectangular | Leído |
| Componentes eliminables si son menores de un quinto del mayor (no usado en el texto) | FDA ORA-LAB.5.4.6, 6.2 B.5 | Leído |
| Incertidumbre con dos cifras significativas en la mayoría de casos; mismas unidades; indicar el nivel de confianza | FDA ORA-LAB.5.4.6, 6.3 C | Leído |
| Valor redondeado a la misma posición decimal que la incertidumbre | GUM 7.2.6 (no leída) | Libro de texto (declarado en el texto) |
| Especificación 98,0–102,0 %, U = 0,6 %, resultados 99,6 %, 98,3 %, 97,9 %, 99,1 % | Valores de ejemplo (la anchura 98–102 coincide con el mínimo citado por la OMS, apéndice 2, para valoraciones por cromatografía) | Ejemplo |
| Intervalos 99,0–100,2; 97,7–98,9; 98,5–99,7 | Cálculo | Cálculo |
| Aceptación simple frente a banda de guarda («guard band», zonas de aceptación y rechazo) | OMS TRS 1052 anexo 4, 6.66 y 6.67 (menciona zonas de aceptación y rechazo y la «guard bandwidth») | Leído (la descripción de la banda de guarda «por ejemplo una U» es ilustrativa, libro de texto) |
| Límites de farmacopea y registro ya incluyen la variación analítica normal; no se aplican tolerancias adicionales; decisión documentada de antemano; el laboratorio debe asegurar que su incertidumbre estimada no supera la objetivo | OMS TRS 1052 anexo 4, 6.55, 6.59, 6.66, 6.67 | Leído |
| Igual idea en la FDA: límites de monografía elegidos considerando la incertidumbre inherente del método | FDA MAN-000048, 7.3 | Leído (no citado en el texto) |
| Resultado OOS se investiga según procedimiento; repeticiones según procedimiento documentado | ICH Q7 11.15 — https://database.ich.org/sites/default/files/Q7%20Guideline.pdf | Leído |
| Trazabilidad: cadena ininterrumpida y documentada de calibraciones, cada una contribuye a la incertidumbre | VIM 2.41; cadena de trazabilidad VIM 2.42 | Leído |
| Patrón de trabajo, patrón de referencia, patrón nacional | VIM 5.7, 5.6, 5.3 | Leído |
| Patrones nacionales custodiados por la Administración General del Estado, «de los que se derivan todos los demás» | Ley 32/2014 de Metrología, art. 4.3 — https://www.boe.es/buscar/act.php?id=BOE-A-2014-13359 | Leído |
| CEM, instituto nacional de metrología de España | Ley 32/2014, art. 17.1 | Leído |
| Kilogramo definido fijando h = 6,626 070 15 × 10⁻³⁴ J·s; apartado modificado por RD 493/2020 | RD 2032/2009 consolidado, anexo, 2.3 — https://www.boe.es/buscar/act.php?id=BOE-A-2010-927 | Leído |
| La incertidumbre crece en cada escalón | Razonamiento a partir de VIM 2.41 («cada una contribuye a la incertidumbre») | Razonamiento |
| Calibración relaciona valores del patrón con incertidumbre e indicaciones; «tal como se encontró / tal como se deja» | VIM 2.39; la pareja as found / as left está en la lección existente `metrologia-calibracion` | Leído (VIM) / app |
| Qué leer en el certificado: valores, incertidumbre, trazabilidad, fecha | VIM 2.39 y 2.41 (nota 3 pide especificar el momento de la referencia); OMS TRS 1052 glosario, «certified reference material» (su certificado da valor, incertidumbre y declaración de trazabilidad; se usa por analogía para un certificado de calibración); Ley 32/2014 art. 5.1 (igual para materiales de referencia certificados) | Leído (aplicación al certificado de calibración: razonamiento) |
| Acreditación: «reconocimiento formal de la competencia técnica de … un laboratorio de ensayo o de calibración industrial» (Ley 21/1992, art. 8.11) | Preámbulo del RD 1715/2010 — https://www.boe.es/buscar/act.php?id=BOE-A-2011-398 | Leído |
| ENAC, único organismo nacional de acreditación | RD 1715/2010, artículo único | Leído |
| Calibración según procedimientos escritos y calendario establecido | ICH Q7 5.30 | Leído |
| Patrones trazables a patrones certificados; registros | ICH Q7 5.31, 5.32 | Leído (no repetido en el texto) |
| Estado de calibración conocido y verificable; no usar instrumentos que no cumplen | ICH Q7 5.33, 5.34 | Leído |
| Investigar impacto desde la última calibración correcta | ICH Q7 5.35 | Leído |
| Política de cuándo se calibra y tras qué sucesos; reparación o traslado | OMS TRS 1052 anexo 4, 5.33 y 5.39 | Leído |
| Etiqueta con estado y fecha de la próxima actuación | OMS TRS 1052 anexo 4, 5.36 | Leído |
| Fuera de límites: fuera de servicio y etiquetado | OMS TRS 1052 anexo 4, 5.40 | Leído |
| Intervalo según tipo de equipo, uso y recomendaciones del fabricante; pH-metros con tampones certificados antes de usar; balanzas comprobadas a diario | OMS TRS 957 anexo 1, 12.5 y 12.6 (edición de 2010) | Leído |
| «Conviene mirar el historial: si cada calibración sale al límite, el intervalo es demasiado largo» | Razonamiento (práctica habitual; no se leyó una norma que lo diga) | Razonamiento |
| Ejemplo fuera de tolerancia: +0,08 kg con 50 kg, EMP ±0,05 kg, doce meses, tres semanas | Valores de ejemplo | Ejemplo |
| 0,08 / 50 = 0,16 % | Cálculo | Cálculo |
| Error máximo permitido; el VIM desaconseja llamarlo «tolerancia» | VIM 4.26 | Leído (en el texto se usa «fuera de tolerancia» por ser el uso de planta, igual que en `instrumentos-a-fondo`) |
| Quiz: 7,04; 0,129 = 0,13; 0,1506 = 0,15; 0,05; 0,024; 0,289 = 0,29 | Cálculo | Cálculo (python) |
| Criterio de verificación diaria ±0,02 kg, códigos IX-40, R-301, SD-303, WS-205 | Valores y códigos de ejemplo | Ejemplo |

## Lo que se quiso incluir y se dejó fuera
- Las fórmulas y la redacción literal de la GUM (4.2, 4.3.7, 5.1.2, 6.3.3, 7.2.6) y de la guía Eurachem/CITAC: no se pudieron leer. Solo se mantienen, como libro de texto declarado, la incertidumbre por resolución d/(2√3) y la regla de redondear el valor a la posición de la incertidumbre.
- Distribución triangular (a/√6) y grados de libertad efectivos (Welch-Satterthwaite): sin fuente leída.
- Tolerancias de material volumétrico de clase A (ISO 648, 1042, 4787) y clases de balanzas (OIML R 76): normas de pago; la OMS da incertidumbres objetivo de material volumétrico, pero con un convenio del 90 % bilateral distinto del k = 2 de la lección, así que no se usaron para no mezclar criterios.
- Qué dice ENAC en su web sobre trazabilidad y su política de incertidumbre (por ejemplo, documentos NT/CGA): www.enac.es no accesible.
- El patrón nacional concreto de masa en España (copia del prototipo, laboratorio depositario) y el real decreto que lo declara: no se leyó la norma de declaración, así que no se nombra.
- La regla de decisión de ISO/IEC 17025:2017 (apartado 7.8.6): norma de pago.
- Métodos para fijar intervalos de calibración (ILAC-G24 / OIML D 10): no accesibles.
