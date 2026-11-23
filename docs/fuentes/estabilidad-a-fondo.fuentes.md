# Fuentes de «Estudios de estabilidad a fondo» (`estabilidad-a-fondo`)

Documentos descargados con curl y convertidos con `pdftotext -layout` (copias en `scratchpad/src_estab/`):

- ICH Q1A(R2), Step 4, 6 de febrero de 2003: https://database.ich.org/sites/default/files/Q1A%28R2%29%20Guideline.pdf
- ICH Q1B: https://database.ich.org/sites/default/files/Q1B%20Guideline.pdf
- ICH Q1E: https://database.ich.org/sites/default/files/Q1E%20Guideline.pdf
- ICH Q7: https://database.ich.org/sites/default/files/Q7%20Guideline.pdf
- EudraLex vol. 4, parte I, capítulo 6 (2014): https://health.ec.europa.eu/document/download/c74c8720-27bf-4252-808f-d65a206a90bb_en?filename=2014-11_vol4_chapter_6.pdf
- Borrador ICH Q1 (Step 2, aprobado el 11/04/2025), copia de la FDA: https://www.fda.gov/media/187161/download
- Cálculos: `scratchpad/src_estab/calc.py` (python).

| Dato o afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| El estudio de estabilidad muestra cómo varía la calidad con el tiempo bajo temperatura, humedad y luz, y sirve para fijar el periodo de reanálisis del API (o la vida útil del medicamento) y las condiciones de almacenamiento | ICH Q1A(R2), 1.3 | Leído en el documento |
| Hidrólisis de un éster en ácido y alcohol | Lección existente «Grupos funcionales a fondo» (nivel3-grupos.ts) | Leído en la lección |
| Oxidación, calor que acelera las reacciones (regla de los 10 °C), humedad y paso a hidrato | Lecciones existentes «Oxidación y reducción a fondo», «Velocidad de reacción a fondo», «Polimorfismo, sales y solvatos a fondo» | Leído en las lecciones (solo se enlazan; no se dan cifras nuevas) |
| La luz puede romper o transformar la molécula; Q1B usa luz visible y UV cercano | ICH Q1A(R2) 2.1.2 (fotólisis en el estrés); ICH Q1B, apartado B | Leído en el documento. La explicación química general («aporta energía») es divulgativa, sin cifras |
| Definición de fecha de reanálisis (*retest date*) y de fecha de caducidad (*expiry date*) del API | ICH Q7, glosario | Leído en el documento |
| La fecha del API se basa en datos de estabilidad; la práctica habitual es fecha de reanálisis, no de caducidad | ICH Q7, 11.61 | Leído en el documento |
| Tras el periodo de reanálisis se reanaliza y se usa enseguida; se puede reanalizar varias veces usando partes distintas; para la mayoría de biotecnológicos lábiles es más apropiada la caducidad, y puede pasar con ciertos antibióticos | ICH Q1A(R2), glosario, «Re-test period» | Leído en el documento |
| Estrés: normalmente un lote; temperaturas en saltos de 10 °C por encima del acelerado (50 °C, 60 °C), humedad 75 % HR o más, oxidación, fotólisis, hidrólisis en intervalo amplio de pH; sirve para productos de degradación, rutas y validar el poder indicador de estabilidad | ICH Q1A(R2), 2.1.2 | Leído en el documento |
| Métodos de estabilidad validados e indicadores de estabilidad | ICH Q7, 11.51; ICH Q1A(R2), 2.1.5 | Leído en el documento |
| Al menos tres lotes primarios, mínimo escala piloto, misma ruta, método que simula el proceso final, calidad representativa | ICH Q1A(R2), 2.1.3 y glosario («Primary batch») | Leído en el documento |
| Envase igual al propuesto o que lo simule | ICH Q1A(R2), 2.1.4 | Leído en el documento |
| Atributos físicos, químicos, biológicos y microbiológicos susceptibles de cambio | ICH Q1A(R2), 2.1.5 | Leído en el documento |
| Ejemplo de bolsas dentro de bidones de fibra y bidones más pequeños de material igual o similar | ICH Q7, 11.52 | Leído en el documento |
| Tabla de condiciones: largo plazo 25 ± 2 °C / 60 ± 5 % HR o 30 ± 2 °C / 65 ± 5 % HR (12 meses); intermedio 30 °C / 65 % HR (6 meses); acelerado 40 ± 2 °C / 75 ± 5 % HR (6 meses) | ICH Q1A(R2), 2.1.7.1 | Leído en el documento |
| La elección de 25 o 30 °C es del solicitante; si el largo plazo es 30 °C / 65 % HR no hay intermedio; el intermedio se hace si hay cambio significativo en el acelerado con largo plazo a 25 °C | ICH Q1A(R2), 2.1.7.1 | Leído en el documento |
| Cambio significativo de un principio activo = no cumplir su especificación | ICH Q1A(R2), 2.1.7.1 | Leído en el documento |
| Nevera: largo plazo 5 ± 3 °C, acelerado 25 °C / 60 % HR; congelador: −20 ± 5 °C | ICH Q1A(R2), 2.1.7.2 y 2.1.7.3 | Leído en el documento |
| Acelerado e intermedio sirven para valorar excursiones cortas (transporte); el acelerado no siempre predice cambios físicos | ICH Q1A(R2), 2.1.7 y glosario («Accelerated testing») | Leído en el documento |
| Cuatro zonas climáticas I a IV; Q1A(R2) cubre I y II | ICH Q1A(R2), 1.3 y glosario | Leído en el documento |
| El borrador de ICH Q1 (endorsed 11/04/2025, en consulta) cita las zonas de los informes técnicos de la OMS, cubre las cuatro zonas, IVb a 30 °C / 75 % HR, y lo obtenido en zona más severa vale para las otras | Borrador ICH Q1 (copia FDA), sección 1.3 y tabla 3 | Leído en el documento |
| Que el Q1 consolidado no ha alcanzado aún el Step 4 a noviembre de 2026 | Página secundaria (CASRAI) vista solo en el buscador; la copia de la FDA dice «Draft version» | Fragmento de buscador. Por eso el texto dice «aún no es la guía definitiva; hoy rige Q1A(R2)» sin dar fecha de aprobación. Conviene revisarlo |
| Frecuencias: largo plazo cada 3 meses el 1.er año, cada 6 el 2.º y anual después (para periodo ≥ 12 meses); acelerado mínimo 3 puntos (0, 3, 6); intermedio mínimo 4 puntos (0, 6, 9, 12) | ICH Q1A(R2), 2.1.6 | Leído en el documento |
| Cuenta 1: 8 puntos para 36 meses; 10 para 60 meses | Cálculo | Recalculado (calc.py) |
| Cuenta 2: fechas desde el 15/01/2027 (valor de ejemplo declarado) | Cálculo | Recalculado (calc.py) |
| Cuenta 3: 3 lotes × 8 puntos = 24 retiradas | Cálculo | Recalculado |
| Q1B: no menos de 1,2 millones de lux·hora y 200 W·h/m² de UV cercano; opción 1 (tipo D65/ID65) y opción 2 (fluorescente blanco frío + UV cercano 320–400 nm); control oscuro envuelto p. ej. en aluminio; capa de sólido típicamente no más de 3 mm | ICH Q1B, apartados 1.B, 1.C y 2.A | Leído en el documento |
| Los estudios confirmatorios identifican precauciones en la fabricación y si hace falta envase resistente a la luz | ICH Q1B, 2.C | Leído en el documento |
| Cuenta 4: 1 200 000 / 10 000 lux = 120 h; 200 / 2 W/m² = 100 h (10 000 lux y 2 W/m² son valores de ejemplo declarados) | Cálculo | Recalculado |
| Riqueza y productos de degradación pueden suponerse de orden cero en el largo plazo (regresión lineal) | ICH Q1E, 2.1 | Leído en el documento |
| El periodo propuesto no debe superar el predicho para cualquier atributo por separado | ICH Q1E, 2.1 | Leído en el documento |
| Cuenta 5 y 6: datos de riqueza 99,8/99,7/99,5/99,4/99,2 e impureza 0,05/0,06/0,08/0,09/0,11 y límites 98,0 % y 0,15 % | Valores de ejemplo declarados | Pendientes 0,05 y 0,005 %/mes; 24 meses más (mes 36); regresión 36,4 meses; impureza 8 meses más (mes 20) recalculados con numpy |
| Método formal: momento en que el límite de confianza unilateral del 95 % de la curva media corta el criterio de aceptación | ICH Q1A(R2), 2.1.9 | Leído en el documento. Que dé un tiempo más corto que la recta sola es consecuencia de usar un límite de confianza en el lado desfavorable (razonamiento, no cifra) |
| Extrapolación: hasta el doble pero no más de 12 meses por encima de lo cubierto, si casi no hay cambio ni variabilidad; debe verificarse con datos reales | ICH Q1E, 2.3 y 2.4.1.1 | Leído en el documento |
| Balance de masas: definición | ICH Q1A(R2), glosario; ICH Q1E, 2.1 (valorar su adecuación) | Leído en el documento |
| Cuenta 7: 99,8 + 0,15 = 99,95; 99,2 + 0,72 = 99,92 | Valores de ejemplo declarados | Recalculado |
| Interpretación «si no cuadrara, podría haber una impureza que el método no ve» | ICH Q1E, 2.1 (cita el poder indicador de estabilidad del método entre las causas de falta de balance) | Leído en el documento |
| Programa documentado de estabilidad continua; tres primeros lotes comerciales (menos si estable ≥ 2 años); al menos un lote al año, analizado al menos anualmente; condiciones según ICH | ICH Q7, 11.50, 11.53, 11.54, 11.56 | Leído en el documento |
| Capítulo 6 de EudraLex parte I es para medicamentos; programa con protocolo e informe, cámaras cualificadas (cap. 3 y anexo 15), lotes adicionales tras cambio o desviación significativa, considerar reprocesados y recuperados, investigar OOS y tendencias atípicas | EudraLex vol. 4, parte I, cap. 6, 6.26–6.35 | Leído en el documento |
| Tolerancias, vigilancia de T y HR reales, picos por apertura de puertas aceptados, excursiones por avería abordadas, más de 24 h descritas en el informe y evaluadas | ICH Q1A(R2), glosario («Storage condition tolerances») | Leído en el documento |
| 25 ± 2 °C = 23 a 27 °C | Cálculo | Recalculado |
| Cuenta 8: 02:10 del sábado a 08:40 del domingo = 30,5 h; hasta 09:25 = 7,25 h (horas y 28,4 °C son valores de ejemplo declarados) | Cálculo | Recalculado (datetime) |
| Las bolsas de plástico son ejemplo de envase semipermeable (dejan pasar el disolvente, normalmente agua) | ICH Q1A(R2), glosario («Semi-permeable containers») | Leído en el documento |
| «Otra bolsa, más fina o de otro material, puede dejar pasar más humedad u oxígeno» | Razonamiento a partir del glosario de Q1A(R2) y de 2.1.4 / Q7 11.52 | Sin cifra; formulado como posibilidad |
| Cambiar el envase pasa por control de cambios / desviación | Lecciones existentes de nivel 16; EudraLex cap. 6, 6.33 (cambios en el envase) | Leído |
| Quiz: 8 puntos; 0,1 %/mes; mes 16; 150 h; 28,5 h | Cálculo | Recalculado |
| Plant: producto TZ-220, lote TZ-220-0007, códigos EST-TZ, BL-14, BL-16, BR-2, MB-5, BS-31, CE-02, 12 envases | Valores de ejemplo, ficticios | — |

## Lo que quise incluir y dejé fuera

- Nombres y descripción climática de cada zona (templada, subtropical, cálida y seca, cálida y húmeda): el informe de la OMS (TRS 1010, anexo 10) está en extranet.who.int, no accesible desde la sesión; solo vi su existencia en el buscador. Solo se dice que la IVb es la más exigente según la tabla del borrador ICH Q1, que sí se leyó.
- Condiciones de la OMS para zonas III y IV y lo que exige la precalificación de la OMS (30 °C / 75 % HR): solo en fragmento de buscador.
- Fórmula de la temperatura cinética media (Haynes): Q1A(R2) solo la nombra; no la desarrollé.
- Fecha prevista del Step 4 del nuevo ICH Q1: solo fragmento de buscador secundario.
- Requisitos concretos de cualificación de cámaras (mapeo, número de sondas, frecuencia de registro): el anexo 15 y guías de la OMS no se leyeron para esta lección; la lección remite a «Almacenamiento a fondo», que ya los trata con su fuente.
- Ejemplos de mecanismos concretos de degradación por grupos funcionales distintos del éster (amidas, fenoles, etc.): no verificados en una fuente leída para esta lección.
