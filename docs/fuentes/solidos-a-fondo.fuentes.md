# Fuentes de la lección `solidos-a-fondo`

Fecha de consulta: 20 de noviembre de 2026. Los documentos del INSST y de ICH se descargaron con `curl` y se leyeron en texto (`pdftotext`). Las farmacopeas y las webs de fabricantes no eran accesibles desde la sesión (hosts fuera de la red permitida: usp.org, ema.europa.eu, pmda.go.jp, dl1.cuni.cz), así que lo que procede de ellas solo se vio en fragmentos del buscador y está marcado así.

## Documentos leídos

| Clave | Documento | URL |
|---|---|---|
| Q7 | ICH Q7 «Good Manufacturing Practice Guide for Active Pharmaceutical Ingredients» (apartados 3.2, 4.1, 4.2, 4.4, 5.1, 5.2, 5.3, 6.4, 6.5, 7.4, 8.1, 8.5, 9.31 y glosario) | https://database.ich.org/sites/default/files/Q7%20Guideline.pdf |
| NTP827 | INSST, NTP 827 «Electricidad estática en polvos combustibles (I)» (entera) | https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/24-serie-ntp-numeros-821-a-855-ano-2009/nota-tecnica-de-prevencion-ntp-827 |
| NTP828 | INSST, NTP 828 «Electricidad estática en polvos combustibles (II): medidas de seguridad» (entera) | https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/24-serie-ntp-numeros-821-a-855-ano-2009/nota-tecnica-de-prevencion-ntp-828 |
| GUIA | INSST, «Guía técnica para la evaluación y prevención de los riesgos derivados de atmósferas explosivas en el lugar de trabajo» (2021): comentarios al artículo 2 y al anexo I, apéndice 3 (medidas) y apéndice 5 (estática), apartado de fuentes de ignición | https://www.insst.es/documents/94886/789467/ATM%C3%93SFERAS+EXPLOSIVAS.pdf |
| EST2015 | INSHT, documento divulgativo «Riesgos debidos a la electricidad estática» (octubre de 2015): apartados 3, 4, 7 y 8.4, tabla 11 | https://www.insst.es/documentacion/material-tecnico/documentos-tecnicos/riesgos-debidos-a-la-electricidad-estatica-2015 |
| NTP1105 | INSST, NTP 1105 «Industria farmacéutica: medidas para la prevención de la exposición a principios activos» (2018), texto y tabla 1 (PDF) | https://www.insst.es/documents/94886/7799754/ntp-1105w.pdf/d4e16590-817e-42ba-b97a-4b1533ec6eae |
| NTP29 | INSST, NTP 29 «Instalaciones de recogida de polvos combustibles. Control del riesgo de explosión» (1982, entera) | https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/1-serie-ntp-numeros-001-a-035-ano-1982/ntp-29-instalaciones-de-recogida-de-polvos-combustibles.-control-del-riesgo-de-explosion |
| NTP396 | INSST, NTP 396 «Deflagraciones producidas por gases, vapores y polvos combustibles: sistemas de protección» (introducción y venteo) | https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/11-serie-ntp-numeros-366-a-400-ano-1996/ntp-396-deflagraciones-producidas-por-gases-vapores-y-polvos-combustibles-sistemas-de-proteccion |

Los PDF del INSST se obtienen con `https://www.insst.es/c/document_library/get_file?uuid=<uuid>&groupId=94886`.

## Afirmación por afirmación

| Dato o afirmación de la lección | Fuente | Cómo se comprobó |
|---|---|---|
| La carga por roce es frecuente en polvos orgánicos (resistividad mayor de unos 10⁸ Ω·m, que supera la mayoría de sustancias orgánicas) y es mayor en el transporte neumático | NTP827, apartados 2 y 3 | Leído en el documento |
| Un polvo no fluye solo, se apelmaza, hace puentes | Descripción cualitativa; apelmazamiento por humedad en EST2015, apartado 7.2; puentes y «rathole» en fragmentos de buscador (patente USPTO 11167942, apuntes NJIT) | EST2015 leído; lo demás, fragmento de buscador |
| Analogías (harina, sal, plumas y arroz, bote de café, azúcar) | Recursos didácticos propios | No son datos |
| 1000 µm = 1 mm; 0,40 kg/L = 400 kg/m³; kg/L y g/mL son el mismo número | Conversión de unidades | Recalculado |
| Cuanto más fino el polvo, más fácil se enciende | EST2015, apartado 3 («cuanto menor es el tamaño de partícula…»); GUIA, apéndice 3 (granulometría) | Leído en el documento |
| Cuanto más fino, peor fluye (polvos finos cohesivos) | Apuntes NJIT sobre flujo de polvos | Fragmento de buscador |
| Definición de densidad aparente (masa entre volumen sin compactar, con los huecos) y de densidad compactada | Farmacopea Europea 2.9.34, citada en resultados del buscador | Fragmento de buscador (no se pudo abrir la farmacopea) |
| Cociente compactada/aparente cercano a 1 = buen flujo; ángulo de reposo bajo = buen flujo | Farmacopea Europea 2.9.36 (índice de Hausner 1,00–1,11 y ángulo 25–30° = «excelente») | Fragmento de buscador; en la lección solo se usa de forma cualitativa, sin cifras |
| Humedad, higroscopicidad, fluidez (definiciones) | Definiciones generales | Sin fuente específica; no contienen cifras |
| Ejemplo 1: 120 / 0,40 = 300 L | Cálculo, valores de ejemplo declarados | Recalculado con python |
| Ejemplo 2: 300 / 50 = 6 bidones; 120 / 25 = 4,8, 5 sacos, 20 kg del quinto | Cálculo, valores de ejemplo declarados | Recalculado con python |
| Ejemplo 3: 180 / 0,50 = 360 L; 500 × 0,80 = 400 L; 180 / 0,60 = 300 L; 0,60 / 0,50 = 1,2 | Cálculo, valores de ejemplo declarados (el 80 % de llenado es un supuesto) | Recalculado con python |
| Materiales en bidones de fibra, sacos o cajas: no en el suelo | Q7, 7.41 | Leído en el documento |
| Big bags: 500–1500 kg, polipropileno tejido, muy aislante | EST2015, apartado 8.4 | Leído en el documento |
| Tipos A, B, C y D: descripción, aptitud con sustancias inflamables en el ambiente y necesidad de tierra | EST2015, apartado 8.4 (reproduce la clasificación de UNE-EN 61340-4-4:2006) | Leído en el documento; la norma no se ha consultado. Es la edición de 2006 tal como la recoge el INSHT en 2015 |
| En zonas con gas o vapor (zona 1 y zona 2) la tabla da tipo C | EST2015, tabla 11 | Leído en el documento (extraído con `pdftotext -layout`) |
| Un tipo C sin conectar es un conductor aislado | Razonamiento a partir de NTP827 (descarga en chispa de conductores aislados) y de la exigencia de tierra del tipo C en EST2015 | Razonado |
| Equipos de pesada con exactitud adecuada | Q7, 8.10 | Leído en el documento |
| Calibración de equipos críticos; no usar el que no cumple | Q7, 5.30 y 5.34 | Leído en el documento |
| Verificar antes de usar que el material es el de la hoja | Q7, 8.12 | Leído en el documento |
| Datos de la etiqueta del envase fraccionado | Q7, 8.11 | Leído en el documento |
| Pesadas críticas con testigo o control equivalente | Q7, 8.12 | Leído en el documento |
| Limpieza comprobada antes del uso | Q7, 5.21 (inspección de limpieza inmediatamente antes del uso) | Leído en el documento |
| Tara, bruto = tara + neto; comprobación diaria de la báscula; que el segundo mire el indicador | Práctica habitual, sin cita | Declarado como práctica; el detalle lo fija el SOP |
| Formas de carga (boca de hombre, tolva con válvula, vacío, contenedor acoplado, válvula de doble mariposa, aislador) | Sistemas nombrados en NTP1105, tabla 1 (glove box, cabinas de pesada, aisladores flexibles, sistemas neumáticos cerrados, válvulas de mariposa partida) y en EST2015, apartado de medidas de control de las mezclas explosivas (válvulas de doble compuerta, alimentadores de tornillo) | Leído en el documento; ventajas y riesgos de la tabla son descripción cualitativa propia |
| El transporte neumático es de lo que más carga genera | NTP827, tabla 1 | Leído en el documento |
| Abrir la boca de hombre rompe la inertización; el sólido arrastra aire | Lección publicada `inertizacion-a-fondo`; GUIA, comentario a zona 20 («evitar la entrada masiva incontrolada de aire»); GUIA, capas de polvo «contienen cierta cantidad de aire entre dichas partículas» | Leído en el documento |
| Controlar la carga de sólidos evitando la entrada incontrolada de aire; válvulas de doble compuerta o alimentadores de tornillo | EST2015, apartado de control de mezclas explosivas | Leído en el documento |
| La chispa de un conductor aislado o de una persona puede encender una nube de polvo | NTP827, tabla 2 (descarga en chispa) | Leído en el documento |
| Sacudir bolsas de plástico al final de un vaciado en la boca de un reactor, ejemplo de descarga en brocha | NTP827, tabla 2 | Leído en el documento |
| Un gas inflamable rebaja la energía mínima de ignición del polvo aun por debajo del LIE; vapores de disolventes entre 0,2 y 1 mJ | NTP827, tabla 2 | Leído en el documento |
| Tierra y equipotencial de todo lo metálico | NTP828, apartados 1 y 2 | Leído en el documento |
| Resistencia a tierra no superior a 1 MΩ | GUIA, apéndice 5, apartado 2.A (NTP828 da el mismo valor y recomienda 10 Ω) | Leído en el documento |
| Personas con buena conducción a tierra si la EMI es menor de 30 mJ | NTP828, apartado 2 | Leído en el documento |
| Poner a tierra un aislante no disipa su carga; no usar recubrimientos no conductores con vapores inflamables; no sacar la bolsa para sacudirla | NTP828, apartados 1 y 2 | Leído en el documento |
| Inertización como medida clásica cuando no se puede evitar la coincidencia | NTP828, apartado 1 | Leído en el documento |
| Limitar la velocidad de paso reduce la carga | GUIA, apéndice 5, apartado F | Leído en el documento |
| Limitar la caída libre para no formar nubes | NTP29, «Actuación sobre el polvo combustible» | Leído en el documento |
| Flujo de alta densidad genera menos carga que uno con mucho aire | NTP828, apartado 1 | Leído en el documento |
| Fase diluida: mucho gas, alta velocidad, desgaste y rotura de partículas; fase densa: tapones lentos, más presión | Artículo de AIChE (Chemical Engineering Progress, 2022) y webs de fabricantes | Fragmento de buscador; sin cifras en la lección |
| Transporte neumático a presión puede fugar por juntas y formar nubes | Temario INSST «tema 41 explosiones» y GUIA, ejemplos de zona 22 | Leído en el documento |
| Mantenimiento de elementos de fricción (cojinetes, hélices, cintas, cangilones); válvulas rotatorias como separación | NTP29, medidas de prevención y de protección | Leído en el documento |
| Riesgos de «piezas en movimiento» en tornillo y válvula rotativa | Criterio general de seguridad | Sin fuente específica leída |
| Descarga de centrífuga, filtro-secador y secadero | Lecciones publicadas del nivel 12; descripción cualitativa | No se añaden datos nuevos |
| Golpes y fricción entre metales como fuente de chispas | GUIA, fuentes de ignición (chispas de origen mecánico) | Leído en el documento |
| Medios para romper puentes (vibrador, inyección de gas) | Patente USPTO 11167942 y artículo de Powder & Bulk Solids | Fragmento de buscador |
| Partículas mayores de 0,5 mm: baja probabilidad de explosión | GUIA, comentario al artículo 2; NTP827, apartado 1 | Leído en el documento |
| Una nube explosiva es densa y cuesta ver a más de un metro | GUIA, comentario a zona 20 | Leído en el documento |
| Condiciones: nube con concentración suficiente, oxígeno, foco de ignición | NTP29, medidas de prevención; GUIA, comentario al artículo 2 | Leído en el documento |
| En equipo cerrado la presión sube; paneles de venteo y discos de ruptura | GUIA, apéndice 3 (dispositivos de descarga de presión); NTP29 (onda de presión, paramentos débiles) | Leído en el documento |
| Polvo depositado: se pone en suspensión por corrientes o por una explosión primaria, explosiones en cadena | GUIA, comentario al anexo I | Leído en el documento |
| Explosiones secundarias que destruyen instalaciones | NTP396, introducción | Leído en el documento |
| Eliminar cualquier depósito visible; barrido y soplado son malas prácticas | GUIA, comentario al anexo I y al artículo 2 | Leído en el documento |
| Aspirar y limpiar en húmedo | NTP1105, tabla 1 (limpieza y descontaminación) | Leído en el documento |
| Confinamiento o extracción localizada en el foco; transferencia de sólidos con sistemas de contención | NTP1105, tabla 1 (manipulación de polvo) | Leído en el documento |
| 7, 10 y 12 renovaciones por hora según categoría | NTP1105, tabla 1 (categorías 1-2, 3A-3B y 4) | Leído en el documento |
| Aspiración lo más cerca posible del foco | GUIA, apéndice 3 (extracción localizada) | Leído en el documento |
| Áreas dedicadas (sensibilizantes; alta actividad) | Q7, 4.40 y 4.41 | Leído en el documento |
| Evitar contaminación por personas y materiales entre áreas | Q7, 4.42 | Leído en el documento |
| Ventilación con control de polvo y presión | Q7, 4.21 | Leído en el documento |
| Equipos cerrados cuando proceda | Q7, 5.15 | Leído en el documento |
| Limpieza entre productos; identificación del estado de limpieza | Q7, 5.24 y 5.26 | Leído en el documento |
| Ropa limpia y adecuada | Q7, 3.21 | Leído en el documento |
| Producción sin contaminación; precauciones tras la purificación | Q7, 8.51 y 8.52 | Leído en el documento |
| Esclusas y vestuario de paso obligatorio | NTP1105, tabla 1 (diseño de las áreas) | Leído en el documento |
| Ejemplo 4: 150,0 × 0,80 = 120,0; 120,0 − 117,6 − 0,4 − 0,8 = 1,2 kg; 1,0 % | Cálculo, valores de ejemplo declarados | Recalculado con python |
| Ejemplo 5: 117,6 / 125,0 = 94,1 % | Cálculo, valores de ejemplo declarados (rango 92–97 % supuesto) | Recalculado con python (94,08) |
| Comparar rendimiento real y esperado; investigar desviaciones en pasos críticos | Q7, 8.14 | Leído en el documento |
| Arrastre admitido entre lotes del mismo producto (centrífuga, micronizador) | Q7, 8.50 | Leído en el documento |
| Conciliación: recibido = usado + devuelto + desechado | Lección publicada `solidos-y-balances`. Q7 solo usa «reconcile» para etiquetas (9.31) | Q7 leído; la definición es la de la lección previa |
| Tamizado, la operación que menos carga; molienda, micronizado y transporte neumático, mucha más | NTP827, tabla 1 | Leído en el documento |
| Molturación, tamizado y micronizado con mecanismos reductores de emisiones | NTP1105, tabla 1 | Leído en el documento |
| Ejemplo de planta (R-205, TV-205, BS-14, KV-31…) | Ficticio | No son datos |
| Cuestionario: 90 / 0,45 = 200; 172 / 25 = 6,88; 240 / 0,60 = 400 y 80 %; 80,0 − 78,4 − 0,2 − 0,6 = 0,8; 78,2 / 85,0 = 92 % | Cálculo | Recalculado con python |

## Lo que se quería incluir y se dejó fuera

- **Cifras del ángulo de reposo y del índice de Hausner o de Carr** (tablas de fluidez de la Farmacopea): solo vistas en fragmentos del buscador; no se pudo abrir la farmacopea. En la lección queda solo la idea cualitativa.
- **Valores típicos de densidad aparente de productos reales:** sin fuente abierta.
- **Texto de la norma de big bags (IEC/UNE-EN 61340-4-4):** de pago. Solo se usa lo que reproduce el documento del INSHT de 2015, que cita la edición de 2006; no se ha comprobado si la edición vigente cambia algo.
- **Informe UNE 109101-2 (carga de sólidos sobre líquidos inflamables):** de pago; el INSHT solo lo cita por su título.
- **Velocidades y presiones del transporte neumático en fase densa y diluida:** las fuentes del buscador dan cifras distintas entre sí.
- **Velocidad máxima de carga de un sólido en kg/min:** ninguna fuente leída da un valor.
- **Concentración límite de oxígeno y energía mínima de ignición de principios activos concretos:** no hay datos abiertos; dependen del producto.
- **Concentraciones mínimas explosivas de polvos en g/m³:** no se leyó un valor aplicable.
- **«Pentágono de la explosión» como término:** no aparece en los documentos leídos; se explican las condiciones sin usar el nombre.
- **Cómo se forman los puentes (geometría de tolvas, flujo másico) y NTP sobre silos:** no se encontró documento del INSST; lo incluido sobre puentes es cualitativo y viene de fragmentos del buscador.
- **Cifras de contención de cada sistema (µg/m³ de una válvula de doble mariposa o de un aislador):** solo en webs de fabricantes, no accesibles.
- **Accidentes reales por carga de polvo sobre disolvente:** un caso de la base francesa ARIA solo se vio en fragmento del buscador.
- **Pesos máximos de carga manual (ergonomía de sacos de 25 kg):** no se consultó la guía correspondiente.
