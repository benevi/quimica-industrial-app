# Fuentes: estadistica-laboratorio-a-fondo

Documentos descargados el 23/11/2026 en `scratchpad/lecciones/tmp-estadistica/dl/` y leídos con `pdftotext -layout`:

- **FDA, Investigating Out-of-Specification (OOS) Test Results for Pharmaceutical Production, Guidance for Industry, Revision 1, mayo de 2022.** https://www.fda.gov/media/158416/download (`fdaoos.txt`). Página de la guía: https://www.fda.gov/regulatory-information/search-fda-guidance-documents/investigating-out-specification-oos-test-results-pharmaceutical-production-level-2-revision (`fdaoos_page.html`: «Final», «May 2022», «Content current as of: 08/01/2024», docket FDA-1998-D-0019). Apartado IV.C.2 «Outlier Tests» leído entero, con la nota 15.
- **FDA, ORA Laboratory Manual Vol. III, Section 4 «Basic Statistics and Data Presentation»**, MAN-000048 rev. 03, 07/10/2022. https://www.fda.gov/media/73535/download (`ora.txt`). Apartados 2.4 (distribución normal), 2.5 (intervalos de confianza), 2.6 (t de Student), 6 (gráficos de control), 7.3 (USP y atípicos), 9 (USP <111>).
- **FDA, Elemental Analysis Manual for Food and Related Products, sección 3.6 «Performance», versión 3.0 (diciembre de 2021).** https://www.fda.gov/media/89653/download (`eam89653.txt`). Y sección 3.2 «Terminology», versión 3.0: https://www.fda.gov/media/89337/download (`eam89337.txt`).
- **ICH Q2(R2)** (2023), https://database.ich.org/sites/default/files/ICH_Q2%28R2%29_Guideline_2023_1130.pdf (copia ya descargada en `tmp-calculo/dl/q2r2.txt`): 3.3.1.4, 3.3.2.1, 3.3.2.4.
- **OMS, TRS 1052 (2024), anexo 4**, https://cdn.who.int/media/docs/default-source/medicines/norms-and-standards/guidelines/quality-control/trs1052_annex4.pdf (copia de `src_oos/trs1052a4.pdf`, convertida a `tmp-estadistica/dl/trs.txt`): 6.51 y 6.71.

Cálculos: `tmp-estadistica/calc/crit.py` (valores críticos de t, F, z, Grubbs; simulación de Grubbs y Dixon con 2 000 000 de series normales por n, semilla 1), `ej.py` y `ej2.py` (ejercicios), con Python 3 y SciPy 1.18.1 (`scipy.stats.t.ppf`, `f.ppf`, `norm`, `ttest_1samp`, `ttest_ind`, `ttest_rel`, `linregress`). Las fórmulas de las pruebas t (una muestra, dos muestras con s combinada, pareada) se comprobaron reproduciendo el mismo estadístico con las funciones de SciPy.

No accesibles: www.itl.nist.gov (NIST/SEMATECH e-Handbook, 403 del proxy), goldbook.iupac.org (403), support.microsoft.com, help.libreoffice.org, euskadi.eus y bettersolutions.com (sin resolución DNS). Los nombres de las funciones de hoja de cálculo solo se pudieron ver en fragmentos del buscador.

## Tabla de afirmaciones

| Dato, fórmula o afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| La distribución normal («bell curve», gaussiana) describe cómo se reparten los resultados con solo errores aleatorios; se define con μ y σ | ORA III-04, 2.4 B y C | Leído |
| Errores simétricos; los grandes, menos probables; la curva nunca toca el eje (cualquier valor tiene probabilidad finita) | ORA III-04, 2.4 E 2, 3 y 4 | Leído |
| 68 % dentro de ± 1σ; 95 % dentro de ± 1,96σ (unas 2σ); 99,7 % dentro de ± 3σ | ORA III-04, 2.5 B | Leído; recalculado con scipy.stats.norm: 0,6827; 0,9545 (para 2σ); 0,9973; z(0,975) = 1,95996 |
| Con s estimada de una muestra, los límites de confianza se ensanchan con un factor t de la distribución t de Student, que depende de la confianza y del número de medidas | ORA III-04, 2.6 A y B | Leído |
| Grados de libertad n − 1 para una media | Libro de texto; coherente con ORA 2.2 (s con N − 1) | Recalculado (SciPy usa df = n − 1 en ttest_1samp) |
| t bilateral 95 %: 12,706; 4,303; 3,182; 2,776; 2,571; 2,447; 2,262 (9 gl); 2,093 (19); 1,960 (infinitos); 2,365 (7), 2,228 (10) | Cálculo | scipy.stats.t.ppf(0,975, gl) |
| Intervalo de confianza media ± t·s/√n | Libro de texto | Recalculado con los datos del ejercicio 1 |
| ICH Q2(R2) pide exactitud y precisión con un intervalo de confianza del 100(1 − α) % | ICH Q2(R2), 3.3.1.4 y 3.3.2.4 | Leído |
| Ejercicio 1: media 99,50; s = 0,224; semiancho 0,28; 99,22–99,78; con 1,96: ± 0,20 | Cálculo; valores de ejemplo | Recalculado (ej.py) |
| Hipótesis nula, nivel de significación 0,05, estadístico frente a valor crítico, probabilidad p < 0,05 | Explicación de libro de texto | Sin fuente oficial leída; es el razonamiento estándar, coherente con los valores críticos recalculados |
| Prueba t frente a referencia: t = |μ₀ − media| / (s/√n) | Libro de texto | Igual a scipy.stats.ttest_1samp (valor absoluto) |
| Ejercicio 2: media 99,55; s = 0,105; s/√n = 0,0428; t = 5,84 | Cálculo; valores de ejemplo | Recalculado; ttest_1samp da −5,839 |
| Prueba F = s² mayor / s² menor; F crítico bilateral (0,025 arriba) 5 y 5 gl = 7,15; unilateral 0,05 = 5,05 | Libro de texto; cálculo | scipy.stats.f.ppf(0,975; 5; 5) = 7,146; f.ppf(0,95) = 5,050 |
| s combinada y t de dos medias con n₁ + n₂ − 2 gl | Libro de texto | Igual a scipy.stats.ttest_ind (equal_var=True) |
| Ejercicio 3: s² 0,0200 y 0,0217; F 1,08; s_p 0,144; t 3,40; t crítico 10 gl 2,228 | Cálculo; valores de ejemplo | Recalculado; ttest_ind da 3,400 |
| t pareada sobre las diferencias, n − 1 gl | Libro de texto | Igual a scipy.stats.ttest_rel |
| Ejercicio 4: media de diferencias 0,0683; s 0,0319; t 5,25; no pareada t 0,12 | Cálculo; valores de ejemplo | Recalculado; ttest_rel 5,250; ttest_ind 0,122 |
| Termobalanza como analizador rápido de humedad comparado con la estufa | Escenario de ejemplo declarado | No se afirma nada sobre equipos reales |
| G de Grubbs = |dato − media| / s | Libro de texto (NIST e-Handbook no accesible) | Recalculado y comprobado por simulación |
| G crítico = (n − 1)/√n × √[t²/(n − 2 + t²)], con t de cola α/(2n) y n − 2 gl | Fórmula de libro de texto; solo vista en la memoria del redactor, el NIST no se pudo abrir | Comprobada por simulación de Monte Carlo: el percentil 95 de G máximo bilateral coincide con la fórmula en las tres cifras para n = 3 a 10 (crit.py) |
| G crítico 95 %: 1,154; 1,481; 1,715; 1,887; 2,020; 2,127; 2,290 (n = 3, 4, 5, 6, 7, 8, 10) | Cálculo | crit.py, fórmula y simulación |
| En la hoja, t para Grubbs = DISTR.T.INV(0,05/n; n−2) (bilateral con probabilidad α/n, cola α/(2n)) | Cálculo | Equivalencia comprobada con scipy: t.ppf(1 − 0,05/(2n), n − 2) |
| G máximo posible con n datos = (n − 1)/√n; n = 3: 1,155 | Cálculo | Recalculado (2/√3 = 1,1547) |
| Q de Dixon = hueco / recorrido | Libro de texto | Recalculado |
| Q crítico 95 % (extremo más alejado, cualquier lado): 0,97; 0,83; 0,71; 0,63; 0,57 (n = 3 a 7) | Cálculo por simulación (2 000 000 series por n) | crit.py: 0,970; 0,829; 0,710; 0,628; 0,569. Coinciden con la tabla de Rorabacher (1991) que el redactor recuerda (0,970; 0,829; 0,710; 0,625; 0,568), no leída en esta sesión; se dan con dos decimales por el ruido de la simulación |
| Ejercicio 5: media 100,25; s 1,103; G 1,50 (> 1,481); Q 0,91 (> 0,83) | Cálculo; valores de ejemplo | Recalculado: G 1,496; Q 0,913 |
| Guía FDA OOS: revisión 1, mayo de 2022; página FDA «Final», contenido actualizado el 08/01/2024 (1 de agosto de 2024) | Página FDA y portada del PDF | Leído |
| «It should never be assumed that the reason for an outlier is error in the testing procedure, rather than inherent variability in the sample being tested» | FDA OOS, IV.C.2 | Leído; traducido |
| El uso de pruebas de atípicos se decide de antemano en SOP, con la prueba concreta, sus parámetros y el número mínimo de resultados | FDA OOS, IV.C.2 | Leído |
| Ensayos químicos validados, poca varianza, muestra homogénea: la prueba «is only a statistical analysis of the data… It will not identify the cause… and, therefore, should not be used to invalidate the suspect result»; solo uso informativo para la distancia a la media | FDA OOS, IV.C.2 | Leído; traducido |
| Nota 15: «Outlier testing should not be used to invalidate chemical assays», con U.S.A. v. Barr Laboratories, tribunal del distrito de Nueva Jersey, 4 de febrero de 1993 | FDA OOS, nota 15 | Leído |
| En ensayos biológicos muy variables la prueba puede ser apropiada; remite a USP <111>, que dice que rechazar observaciones solo por su magnitud, sin investigar la causa, es un procedimiento a usar «sparingly» | FDA OOS, IV.C.2 | Leído (cita de la USP reproducida en la guía) |
| No aplicables a uniformidad de contenido, disolución o velocidad de liberación | FDA OOS, IV.C.2 | Leído |
| Invalidar solo con un hecho del ensayo observado y documentado | FDA OOS, V.A | Leído |
| Semianchos con s = 0,30: 2,70; 0,75; 0,48; 0,32; 0,28; 0,22; 0,14 (n = 2, 3, 4, 6, 7, 10, 20) | Cálculo; s valor de ejemplo | Recalculado (ej.py) |
| Ejercicio 6: n = 6 da 0,315; n = 7 da 0,277: 7 réplicas | Cálculo | Recalculado |
| Repetibilidad: mínimo 9 determinaciones (3 × 3) o 6 al 100 % | ICH Q2(R2), 3.3.2.1 | Leído |
| Ante interferencia de matriz, lo habitual es diluir y reanalizar o usar adiciones estándar | EAM 3.6, 3.6.1.1 | Leído |
| Queso americano: recuperación de Pb ~75 %; pendiente de la recta de adiciones ~75 % de la de una disolución de comprobación en ácido nítrico | EAM 3.6, 3.6.1.2 | Leído |
| Todas las disoluciones, incluidas las adiciones, dentro del intervalo lineal (LDR) | EAM 3.6 (3.6.1.6, 3.6.2.5) y 3.2 | Leído |
| r ≥ 0,995 con adiciones estándar (frente a ≥ 0,998 en la recta normal) | EAM 3.6, 3.6.1.6 y 3.6.4 | Leído; en la lección se dice «en esos métodos» (manual de análisis elemental de alimentos) |
| Hay un límite al efecto matriz que pueden corregir las adiciones | EAM 3.6, 3.6.1.6 | Leído |
| x₀ = ordenada / pendiente (extrapolación a señal cero) | Deducción algebraica en la lección | Cálculo |
| Ejercicio 7: b 0,01108; a 0,0619; r 0,9999; x₀ 5,59 µg/L; 11,17 µg/L; 0,559 µg; 1,1 µg/g; con pendiente externa 0,0148 (ratio 0,749): 0,84 ppm | Cálculo; valores de ejemplo | Recalculado con linregress (ej2.py) |
| Gráfico de control: línea central con al menos 10 resultados, preferiblemente 20; interiores ± 2s; exteriores ± 3s | ORA III-04, 6.1 A–C | Leído |
| Dentro de los interiores el 95 % de las veces; fuera de interiores, aviso de posible sesgo; fuera de exteriores, sesgo y acción correctora | ORA III-04, 6.2 C | Leído |
| Ocho puntos seguidos por encima o por debajo de la media: improbable por azar | ORA III-04, 6.2 D | Leído |
| Los gráficos de control como forma de asegurar la validez de los resultados | OMS TRS 1052, anexo 4, 6.71 | Leído |
| Ejercicio 8: media 99,565; s 0,080; aviso 99,41–99,73; acción 99,33–99,81 (redondeo a la mitad hacia arriba) | Cálculo; 20 datos de ejemplo | Recalculado (ej2.py: 99,405; 99,725; 99,325; 99,805) |
| Quiz: 0,398; t = 3; F = 6,25; G = 1,73 (n = 5, crítico 1,715); 4 µg/L; 5 réplicas (0,318 y 0,248) | Cálculo | Recalculado |
| Funciones de hoja de cálculo: PROMEDIO, DESVEST.M (sustituye a DESVEST), CONTAR, RAIZ, DISTR.T.INV (inversa bilateral de t, función de compatibilidad, en inglés TINV; la moderna, en inglés T.INV.2T), INV.F.CD (inversa de F, en inglés F.INV.RT), PRUEBA.T (tipos 1 pareada, 2 igual varianza, 3 distinta varianza), PENDIENTE (SLOPE), INTERSECCION.EJE (INTERCEPT) | Fragmentos del buscador: referencias de Microsoft en es-ES (funciones estadísticas y de compatibilidad), ayuda de Apple Numbers en español, PDF de la USC | **Solo fragmento de buscador.** Por eso la lección avisa de que los nombres cambian entre versiones y programas y da un valor de prueba (DISTR.T.INV(0,05;4) = 2,776) |

## Lo que se dejó fuera por no poder verificarlo

- Los nombres en español de las funciones modernas INV.T.2C y PRUEBA.T.N (y PRUEBA.F.N): no aparecen confirmados en ningún fragmento; se usan las funciones de compatibilidad DISTR.T.INV y PRUEBA.T, que sí aparecen.
- Que en la configuración española los argumentos se separen con punto y coma (se escribe así en los ejemplos, pero no se afirma).
- Variantes de Dixon para más de 7 datos (r11, r21, r22) y tablas de más de 7 datos: no verificadas.
- La prueba de Cochran, la prueba de la desviación extrema generalizada (ESD) y el capítulo USP <1010>: de pago o no accesibles.
- Reglas de Westgard y otras reglas de gráficos de control distintas de las del manual de la FDA.
- Límites de paladio de ICH Q3D: no se releyeron en esta sesión; el ejemplo no compara con ningún límite.
- El NIST/SEMATECH e-Handbook: inaccesible (403).

## Ideas para la capa visual

- Simulación interactiva de la campana de Gauss con las franjas de ± 1σ, ± 2σ y ± 3σ y, encima, la curva t de Student para 2, 4 y 9 grados de libertad, para ver cómo se ensancha con pocos datos.
- Esquema de la prueba de Dixon: cinco puntos en una recta numérica, con el «hueco» y el «recorrido» marcados, junto a la tabla de valores críticos.
- Gráfico de adiciones estándar: cuatro puntos, la recta prolongada hasta cortar el eje x en −x₀, y al lado la recta de un patrón en ácido con más pendiente.
- Gráfico de control del laboratorio con línea central, límites de aviso y acción, un punto entre 2s y 3s, otro fuera de 3s y una racha de ocho puntos sobre la media.
