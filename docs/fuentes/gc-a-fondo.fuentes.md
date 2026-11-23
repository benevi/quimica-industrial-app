# Fuentes de «Cromatografía de gases a fondo» (`gc-a-fondo`)

Copias locales en `scratchpad/lecciones/src_gc/` (pdftotext -layout). Cálculos en `src_gc/calc.py`.

Abreviaturas:
- **Q3C**: ICH Q3C(R8), https://database.ich.org/sites/default/files/ICH_Q3C-R8_Guideline_Step4_2021_0422.pdf
- **Q7**: ICH Q7, https://database.ich.org/sites/default/files/Q7%20Guideline.pdf
- **Q2R2**: ICH Q2(R2) (copia de `src_kf/q2r2.pdf`, descargada de database.ich.org)
- **PAM5**: FDA, Pesticide Analytical Manual Vol. I, capítulo 5 «GLC», https://www.fda.gov/media/74694/download (índice en https://www.fda.gov/food/laboratory-methods-food/pesticide-analytical-manual-volume-i-pam-3rd-edition)
- **LIB4670**: FDA/ORA, Laboratory Information Bulletin 4670, metanol, etanol e isopropanol en gel hidroalcohólico por GC-FID, https://www.fda.gov/media/169767/download
- **LIB4674**: FDA/ORA, Laboratory Information Bulletin 4674, benceno en protector solar por HS-GC-MS, https://www.fda.gov/media/169772/download (índice: https://www.fda.gov/science-research/field-science-and-laboratories/laboratory-information-bulletins)
- **WHO957**: WHO TRS 957 (2010), anexo 1, buenas prácticas para laboratorios de control de calidad (copia de `src_kf/who957.pdf`, cdn.who.int)
- **NTP 397 / 399 / 198 / 340**: fichas HTML del INSST en https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/ (serie 11 para 397 y 399, serie 6 para 198, serie 10 para 340)

| Dato o afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| La GC solo vale para lo que se evapora sin descomponerse; para lo termolábil, HPLC | PAM5, sección 501 («restricted to analytes that can be vaporized without degradation») | Leído en el documento |
| Los disolventes residuales se determinan normalmente por técnicas cromatográficas como la GC; métodos armonizados de farmacopea si es posible, si no, método validado | Q3C, apartado 3.4 | Leído en el documento |
| Disolventes «probables»: el del último paso y los de pasos anteriores que el proceso no elimina siempre | Q3C, apartado 3.5 | Leído en el documento |
| El disolvente recuperado debe cumplir su estándar antes de reutilizarse | Q7, 14.41 | Leído en el documento |
| Tabla de usos de la GC en planta (disolventes residuales, recuperados, materias primas volátiles) | Deducción a partir de Q3C 3.4 y Q7 14.41; no se afirma qué análisis exacto usa cada especificación | Razonamiento; el texto dice que el análisis lo fija la especificación |
| Componentes del cromatógrafo (entrada, columna, detector, electrónica, registro, gas portador; zonas con temperatura controlada) | PAM5, 501 B | Leído en el documento |
| Helio, hidrógeno y nitrógeno, los gases portadores más usados; pureza crítica para no dañar la columna; 99,999 a 99,9999 % para helio e hidrógeno según detector | PAM5, 501 B («Reagents and Gases») | Leído en el documento |
| Hidrógeno y helio preferidos con columnas capilares: el caudal puede subir con poca pérdida de eficacia, menor tiempo de análisis; con nitrógeno la eficacia cae al subir el caudal | PAM5, 502 C («Carrier Gases», curvas de van Deemter) | Leído en el documento |
| Helio y nitrógeno no inflamables; hidrógeno inflamable | NTP 198 | Leído en la ficha HTML |
| Helio y nitrógeno como gases inertes asfixiantes; <16 % de O₂ peligroso; dos bocanadas bastan para perder la consciencia; sin olor | NTP 340 | Leído en la ficha HTML |
| Septum: vida limitada; si gotea falsea la cuantificación y deja entrar aire | PAM5, 502 C («Septa») | Leído en el documento |
| Existen inyecciones split, splitless, on-column y directa | PAM5, 502 C | Leído en el documento |
| Split: la mayor parte sale por la purga y solo una fracción entra en la columna; splitless: purga cerrada, casi toda la muestra entra, para trazas | Explicación general; solo vista en fragmentos del buscador (Agilent, Chromatography Online) | Fragmento de buscador; no se usa ninguna cifra de él |
| Split 5:1 en los dos métodos de la FDA | LIB4670 (tabla 3) y LIB4674 | Leído en el documento |
| Columna de sílice fundida con poliimida por fuera; fase estacionaria polimérica unida a la pared interior | PAM5, 502 C («Column Description») | Leído en el documento |
| Diámetro interior 0,05 a 0,53 mm; longitud 10 a 60 m; película 0,10 a 5,0 µm | PAM5, 502 C | Leído en el documento |
| Más fina, más eficaz pero menos capacidad de muestra | PAM5, 502 C | Leído en el documento |
| Calentar sin gas portador o con oxígeno a ≥100 °C daña la fase rápida e irreversiblemente | PAM5, 502 C | Leído en el documento |
| Trabajo isotermo o con programa de temperatura | PAM5, 502 A | Leído en el documento |
| Programa LIB4670: 50 °C 5 min, 10 °C/min hasta 200 °C, 4 min; tiempo total 24 min | LIB4670, tabla 3 | Leído; 5 + 15 + 4 = 24 recalculado |
| Temperatura en el minuto 12 de ese programa: 120 °C | Cálculo | Recalculado con python |
| Por qué el programa empieza frío y sube (separa ligeros al principio, empuja a los pesados) | Explicación cualitativa de libro de texto | Razonamiento; sin cifras |
| FID: llama de hidrógeno y aire; 30 mL/min de H₂ y 350 mL/min de aire en LIB4670 | LIB4670, tabla 3 | Leído en el documento |
| FID tiene chorro (jet) y colector de iones | PAM5, 503 E (el detector N/P «is similar to an FID … between the jet and the ion collector») | Leído en el documento |
| Lo orgánico quemado forma iones y la corriente recogida es la señal | Química de libro de texto, coherente con PAM5 503 E | Razonamiento; no hay cifra |
| FID y conductividad térmica: no selectivos, responden en proporción a la masa | PAM5, 503 A | Leído en el documento |
| La espectrometría de masas además identifica la sustancia | Uso en LIB4674 (iones de cuantificación y de cualificación) | Leído en el documento |
| OMS: cromatógrafo de gases con FID e inyección directa y espacio de cabeza estático en el equipo de un laboratorio mediano; detector MS como opcional | WHO957, apéndice de equipos | Leído en el documento |
| La acumulación de no volátiles hace perder eficacia a la columna | PAM5, 502 C («Retention Gaps») | Leído en el documento |
| Funcionamiento del espacio de cabeza (calentar el vial cerrado, el disolvente pasa al gas, se inyecta el gas) | Idea ya en la lección `cromatografia-de-gases` de la app; WHO957 nombra la inyección de espacio de cabeza estático | Explicación cualitativa; sin cifras propias |
| Presión de vapor como «ganas de escapar», crece con la temperatura | Lección «La materia a fondo» de la app (`nivel1-materia.ts`) | Leído en la app |
| Parámetros reales: vial de 20 mL, 0,5 g de muestra, 5,000 mL de líquido, 90 °C, 1200 s, agitación | LIB4674 | Leído; 1200 s = 20 min recalculado |
| Programa LIB4674: 60 °C 5 min, 40 °C/min hasta 240 °C, 2 min; 11,5 min | LIB4674 | Leído; 5 + 4,5 + 2 = 11,5 recalculado (usado en el test: minuto 7 = 140 °C) |
| «Espacio de cabeza» del frasco de muestra en planta | Lección `custodia-a-fondo` de la app (cita la guía de muestreo de la OMS) | Leído en la app |
| Para impurezas el intervalo del método llega al 120 % del criterio de aceptación de la especificación | Q2R2, tabla de intervalos («Impurity: Reporting threshold – 120% of specification acceptance criterion») | Leído en el documento |
| Ensayo de idoneidad antes del análisis y repetido en secuencias largas | WHO957, 16.4 y definición de «system suitability test» | Leído en el documento |
| Identificación por tiempo de retención y cuantificación por la respuesta, comparadas con un patrón inyectado en el mismo sistema | PAM5, 501 A | Leído en el documento |
| Cuantificación por proporción simple: cantidad de analito / respuesta = cantidad de patrón / respuesta | PAM5, 504 A | Leído en el documento |
| Fórmula ppm = µg en vial patrón × (respuesta muestra / respuesta patrón) / g de muestra | LIB4674 (misma fórmula con cocientes de patrón interno) | Leído; adaptada a patrón externo |
| 1 µg/g = 1 ppm | Cálculo (1 g = 10⁶ µg) | Recalculado |
| Cuenta 1 (metanol): 15,00 mg/mL; 300 µg/mL; 1500 µg; equivale a 3000 ppm; 636,4 µg; 1273 ppm | Valores de ejemplo declarados; cálculo | Recalculado con python (1272,7 redondeado a 1273) |
| Límite de metanol 3000 ppm y de tolueno 890 ppm | Q3C, tabla 2 | Leído en el documento (y ya en `disolventes-a-fondo`) |
| Densidad del tolueno 0,87 g/mL y del metanol 0,79 g/mL | Tabla de `disolventes-a-fondo` de la app | Leído en la app |
| Cuenta 2 (tolueno): 435 mg; 4,35 mg/mL; 87 µg/mL; 435 µg; 368,0 µg; 734 ppm | Valores de ejemplo declarados; cálculo | Recalculado con python (367,97 y 734,18) |
| Un resultado fuera de especificación se investiga y documenta según procedimiento | Q7, 11.15 | Leído en el documento |
| Orden de salida guiado por la ebullición y modificado por la polaridad (cualitativo) | PAM5, 501 A (se separan por diferentes presiones de vapor e interacciones selectivas con la fase líquida) | Leído en el documento |
| Puntos de ebullición: metanol 65, etanol 78, isopropanol 82, acetona 56, acetato de etilo 77, heptano 98, tolueno 111 °C | Tabla de `disolventes-a-fondo` de la app | Leído en la app |
| Orden metanol, etanol, isopropanol y después acetonitrilo en el cromatograma del patrón | LIB4670, figura 1 | Leído en la figura (posición de las etiquetas en el texto extraído; orden aproximado) |
| Tiempos de retención de la tabla del cromatograma | Valor de ejemplo declarado (inventado) | Declarado en el texto |
| Blancos de reactivos de forma rutinaria; cuanto menos selectivo el detector, más interferencias | PAM5, 501 C («Reagent Blanks») | Leído en el documento |
| Arrastre de la inyección anterior; contaminación por disolventes del laboratorio | PAM5, 501 B y 501 C (jeringas libres de restos, contaminantes en vidrio y entorno); explicación cualitativa | Leído y razonado |
| Vial mal sellado da resultado bajo; 30 % de pérdida: 891 ppm; test: 40 % de pérdida sobre 800 ppm: 480 ppm | Razonamiento sobre la regla de tres; cálculo | Recalculado con python (890,9 y 480) |
| Botella: ejemplo 200 kg/cm² para el nitrógeno; sujetar con cadenas; regulador de presión; no regular con el grifo entreabierto; abrir despacio y lejos de las personas; no engrasar; agua jabonosa en conexiones | NTP 397 | Leído en la ficha HTML |
| 200 kg/cm² ≈ 196 bar | Cálculo (× 0,980665) | Recalculado con python (196,1) |
| No usar agua jabonosa dentro del cromatógrafo (se aspira); detectores electrónicos de fugas | PAM5, 502 C | Leído en el documento |
| Fuga en un cromatógrafo: botella de H₂ de 50 L a 200 kg/cm² medio vacía, unos 5 m³, en laboratorio de 100 m³ algo más del 4 % (límite inferior de inflamabilidad); suprimir focos, cortar electricidad desde interruptor externo, ventilar; sin problema de asfixia | NTP 399 | Leído en la ficha HTML; recalculado: unos 4,8 m³ y 4,8 % |
| Seguir un paso tras un control en proceso que indica que no ha terminado es proceso normal, no reprocesado | Q7, 14.21 | Leído en el documento |
| Integridad de la muestra tras la toma | Q7, 8.35 | Leído en el documento |
| Ensayos de test: THF 532,8 ppm; 89 µg/mL; 1501 mg; 25 min; 140 °C; 480 ppm | Cálculo | Recalculado con python |
| Ejemplo de planta (KX-40, SV-512, resultados 410/1150 y 180/610 ppm, horas) | Valores de ejemplo, ficticios | Declarado como ficticio |

## Lo que se quiso incluir y se dejó fuera

- **FDA «Reviewer Guidance: Validation of Chromatographic Methods» (1994)**: la URL de fda.gov (`/downloads/Drugs/GuidanceComplianceRegulatoryInformation/Guidances/UCM134409.pdf`) y `/media/75643/download` devuelven «Page Not Found»; las copias espejo (webarchive.library.unt.edu, corpora.tika.apache.org) no son accesibles desde esta sesión. No se ha leído y no se cita. Sus criterios numéricos de idoneidad (resolución, factor de cola, platos, RSD) no se incluyen.
- **Farmacopea Europea 2.4.24 y USP 467**: de pago; no se citan sus condiciones (columna, programa, temperaturas del vial). El LIB4670 menciona la fase «USP G43» de su columna; no se usa.
- **Porcentaje exacto que entra en la columna con un split 5:1** y la definición precisa de la relación de división: solo en fragmentos del buscador; se deja la idea cualitativa.
- **Respuesta del FID al agua y a gases permanentes**: no se encontró en un documento leído; no se incluye.
- **Orden real de salida de acetona, acetato de etilo, heptano y tolueno en una columna concreta**: no leído; la tabla es de ejemplo y se declara así.
- **Disponibilidad y precio del helio**: sin fuente leída; no se incluye.
- **Temperaturas y tiempos de equilibrio típicos para disolventes residuales**: solo se da el ejemplo real del LIB4674 (benceno, 90 °C, 20 min).
- **Límite inferior de inflamabilidad del hidrógeno con más precisión** y su energía de ignición: solo se usa el «4 %» que da la NTP 399.
