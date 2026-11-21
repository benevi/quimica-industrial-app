# Fuentes de la lección «Trazabilidad, devoluciones y retiradas a fondo» (trazabilidad-a-fondo)

Sesión de verificación: 21 de noviembre de 2026. Documentos descargados con curl y leídos en texto (pdftotext o HTML convertido), copias en `src_traz/`:

- **ICH Q7**, *Good Manufacturing Practice Guide for Active Pharmaceutical Ingredients*: https://database.ich.org/sites/default/files/Q7%20Guideline.pdf (`q7.txt`). Leídos: 6.1 a 6.5, 7.2, 8.1, 8.4, 8.5, 9.3, 9.4, 10, 11.7, 14, 15, 16, 17 y el glosario.
- **EudraLex vol. 4, parte I, capítulo 8** (*Complaints, Quality Defects and Product Recalls*, revisión de 2014, en vigor desde el 1 de marzo de 2015): https://health.ec.europa.eu/document/download/b1eb2292-cb0d-4e3f-aea9-e3fe79faf6e3_en?filename=2014-08_gmp_chap8.pdf (`chap8.txt`). Leído entero. El primer intento devolvió una página de error; al repetir la descarga llegó el PDF.
- **Directrices de 19 de marzo de 2015 sobre buenas prácticas de distribución de principios activos** (DO C 95 de 21.3.2015, 2015/C 95/01), EUR-Lex: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:52015XC0321(01) (`gdp.txt`). Leído entero. (El BOE no tenía el texto: la búsqueda en boe.es devolvió otro documento del DOUE.)
- ICH Q10 no se usó.

Las cuentas se recalcularon con Python.

## Afirmaciones y cifras

| Afirmación o cifra de la lección | Fuente | Cómo se comprobó |
|---|---|---|
| Trazabilidad hacia atrás y hacia delante; analogía del árbol genealógico | Explicación didáctica; la lección `trazabilidad-y-distribucion` (nivel 17) ya usa las dos direcciones | Sin cifra; no requiere fuente |
| Definición de número de lote: combinación única que identifica un lote y a partir de la cual se puede determinar su historia de producción y distribución | ICH Q7, glosario, «Batch Number (or Lot Number)»; igual en el glosario de 2015/C 95/01 | Leído |
| Lote homogéneo dentro de límites especificados | ICH Q7, glosario, «Batch (or Lot)» | Leído |
| La investigación de desviaciones críticas o lotes fuera de especificación se extiende a otros lotes relacionados | ICH Q7, 6.53 | Leído |
| Sistema para saber con rapidez la distribución de cada lote y permitir su retirada | ICH Q7, 10.24; 2015/C 95/01, 6.15 | Leído |
| Registro de recepción: fabricante, identidad y cantidad de cada envío; proveedor; número de control del proveedor si se conoce; número asignado en la recepción; fecha | ICH Q7, 6.30 | Leído |
| Código, lote o número de recepción propio para cada envase o grupo; usado en los registros; sistema para el estado | ICH Q7, 7.24 | Leído |
| Etiqueta de material subdividido: nombre o código, número de recepción o control, peso, fecha de reanálisis si procede | ICH Q7, 8.11 | Leído |
| Hoja de producción: fechas, equipo principal, pesos, medidas y números de lote de materias primas, intermedios o material reprocesado, rendimiento real, desviaciones | ICH Q7, 6.52 | Leído |
| Registros de uso de equipos principales: fecha, producto, número de lote | ICH Q7, 6.20 | Leído |
| Etiqueta: nombre o código, lote, condiciones de almacenamiento si son críticas | ICH Q7, 9.42 | Leído |
| Conciliación de etiquetas emitidas, usadas y devueltas; etiquetas sobrantes con lote se destruyen; etiqueta representativa en la hoja | ICH Q7, 9.31, 9.32 y 9.36 | Leído |
| Conservación de registros: al menos 1 año tras la caducidad; con fecha de reanálisis, al menos 3 años tras la distribución completa | ICH Q7, 6.13; igual en 2015/C 95/01, 4.8 | Leído |
| Antes de mezclar material recibido con existencias (disolventes, silos) se identifica, se analiza si procede y se libera | ICH Q7, 7.21 | Leído |
| Consecuencia: un lote malo en un tanque afecta a los lotes alimentados mientras estaba dentro | Razonamiento propio a partir de 7.21 y de EudraLex cap. 8, 8.11 (lotes que contengan partes del defectuoso) | Deducción, sin cifra |
| Árbol de KX-26-031 (materiales, códigos, kilos, clientes, equipos R-210, CF-310, SD-410, TK-302) | Valor de ejemplo declarado | Inventado y declarado en el texto |
| Cuenta 1: 400/1000 = 40 %; 350/1000 = 35 %; 250/1000 = 25 %; suma 1000 kg | Cálculo | Recalculado |
| Cuenta 2: 8 × 24 = 192 kg; 4 × 24 = 96 kg; 192 + 96 + 24 = 312 kg | Cálculo | Recalculado |
| Comparar rendimiento real con esperado; investigar desviaciones de rendimiento en pasos críticos | ICH Q7, 8.14 | Leído |
| Rendimiento teórico: cantidad sin pérdida ni error | ICH Q7, glosario, «Yield, Theoretical» | Leído |
| Cuenta 3: 468/520 = 90,0 %; 312/360 = 86,7 %; 0,900 × 0,867 = 78,0 % | Cálculo (valores de ejemplo) | Recalculado (0,9; 0,8667; 0,780) |
| Cuenta 4: 400/312 = 1,28 kg/kg; 192 × 400/312 = 246 kg | Cálculo | Recalculado (1,282; 246,15) |
| Definición de mezcla; varias descargas de centrífuga de una misma cristalización no son mezcla | ICH Q7, 8.40 | Leído |
| No mezclar lotes fuera de especificación para cumplir; cada lote fabricado con proceso establecido y conforme por separado | ICH Q7, 8.41 | Leído |
| Mezclas aceptables: lotes pequeños; colas (*tailings*) | ICH Q7, 8.42 | Leído |
| Mezcla controlada, documentada y analizada cuando proceda; trazable a cada lote | ICH Q7, 8.43 y 8.44 | Leído |
| Validación de homogeneidad si propiedades físicas críticas (tamaño de partícula, densidad aparente y compactada) | ICH Q7, 8.45 | Leído |
| Caducidad o reanálisis de la mezcla según el lote o la cola más antigua | ICH Q7, 8.47 | Leído |
| Mezcla: (180 × 99,2 + 60 × 99,8)/240 = (17856 + 5988)/240 = 99,35 %; especificación de ejemplo ≥ 99,0 % | Cálculo; valores de ejemplo | Recalculado |
| Caso prohibido: (14790 + 24900)/400 = 99,2 % | Cálculo (99,225, redondeado a 99,2) | Recalculado |
| La media ponderada solo es lo esperado si la mezcla es homogénea; manda el análisis | Razonamiento propio coherente con 8.43 | Sin cifra |
| Distribuir solo lo liberado por Calidad | ICH Q7, 10.20 | Leído |
| Transporte sin afectar a la calidad; condiciones especiales en la etiqueta; el transportista las conoce y cumple | ICH Q7, 10.21, 10.22, 10.23 | Leído |
| Zonas separadas para cuarentena, rechazado, devuelto, retirado, salvo sistema alternativo | ICH Q7, 10.11 | Leído |
| Envases que salen del control del fabricante, precintados para detectar apertura | ICH Q7, 9.46 | Leído |
| Agentes, comerciantes, distribuidores, reenvasadores: cumplir GMP; documentos de trazabilidad | ICH Q7, 17.11 y 17.20 | Leído |
| Dar al cliente fabricante original y lotes; transferir información de calidad en ambos sentidos | ICH Q7, 17.61 y 17.60 | Leído |
| Distribuidor: registrar cada compra y venta con fecha, producto, lote, cantidad, proveedor, fabricante original, destinatario | 2015/C 95/01, 4.9 | Leído |
| Mantener identidad de producto, lote y envase; etiquetas originales legibles | 2015/C 95/01, 6.14 | Leído |
| Devoluciones: identificar y cuarentena; si hay duda por almacenamiento, transporte o envases, reprocesar, retrabajar o destruir; registros (consignatario, lote, cantidad, motivo, destino) | ICH Q7, 14.50, 14.51, 14.52 | Leído |
| Condiciones para devolver al stock (envase original cerrado con precintos, buena conservación demostrada, vida útil aceptable, evaluación por persona autorizada, sin pérdida de trazabilidad) | 2015/C 95/01, 7.2 | Leído |
| Rechazo: identificar, cuarentena, registrar destino; puede reprocesarse o retrabajarse | ICH Q7, 14.10 | Leído |
| Continuar un paso tras un control en proceso incompleto no es reprocesar | ICH Q7, 14.21 y glosario | Leído |
| Reprocesado: repetir pasos del proceso establecido; si en la mayoría de lotes, se incorpora al proceso | ICH Q7, 14.20 y glosario | Leído |
| Repetir una reacción con material sin reaccionar: evaluar subproductos | ICH Q7, 14.22 | Leído |
| Retrabajo: pasos distintos (ejemplo de Q7: recristalizar con otro disolvente); investigación previa; evaluación, análisis, estabilidad, equivalencia; perfil de impurezas | ICH Q7, glosario «Reworking», 14.30, 14.31, 14.32 | Leído |
| Materiales a reprocesar o retrabajar controlados contra uso no autorizado | ICH Q7, 8.17 | Leído |
| Recuperación de materiales y disolventes con procedimientos aprobados y material conforme | ICH Q7, 14.40 a 14.43 | Leído (solo remisión) |
| Reclamaciones orales o escritas; registrar e investigar; contenido del registro; tendencias | ICH Q7, 15.10, 15.11, 15.12 | Leído |
| Procedimiento de retirada: cuándo, quién evalúa, cómo se inicia, a quién se informa, qué se hace con lo retirado; autoridades en situaciones graves | ICH Q7, 15.13, 15.14, 15.15 | Leído |
| EudraLex cap. 8 es para medicamentos (parte I) | Portada y base legal del capítulo 8 (Directiva 2001/83/CE, medicamentos) | Leído |
| Revisión de hojas, registros de distribución y muestras de retención | EudraLex cap. 8, 8.9 ii | Leído |
| Comprobar otros lotes con partes del defectuoso | EudraLex cap. 8, 8.11 | Leído |
| Retirada iniciable enseguida y a cualquier hora, a veces antes de conocer la causa | EudraLex cap. 8, 8.22 | Leído |
| Registros de distribución a mano con direcciones, teléfonos dentro y fuera de horario, lotes y cantidades | EudraLex cap. 8, 8.23 | Leído |
| Retirados separados en zona segura | EudraLex cap. 8, 8.28 | Leído |
| Informe final con conciliación entregado frente a recuperado | EudraLex cap. 8, 8.29 | Leído |
| Evaluación periódica del sistema dentro y fuera de horario; considerar retiradas simuladas | EudraLex cap. 8, 8.30 | Leído |
| Muestras de retención de cada lote de API | ICH Q7, 11.71 | Leído |
| Caso ficticio de retirada (proveedor, lotes, kilos, clientes) | Valor de ejemplo declarado | Inventado |
| Conciliación: 192 + 96 = 288; 168 + 96 = 264; 264/288 = 91,7 % | Cálculo | Recalculado (0,9167) |
| Anotar en el momento, de forma indeleble, corrección con fecha y firma dejando legible el original | ICH Q7, 6.14 | Leído |
| Verificar antes de usar que los materiales son los de la hoja | ICH Q7, 8.12 | Leído |
| Comprobar la etiqueta de cada envase durante el envasado | ICH Q7, 9.45 | Leído |
| Ejemplo de planta (MP-26-0177, MP-26-0152, 15 × 25 + 5 = 380 kg; sobran 20 kg) | Valor de ejemplo; cálculo | Recalculado |

## Preguntas numéricas del test

| Pregunta | Cálculo | Resultado |
|---|---|---|
| 320 de 800 kg | 320/800 | 40 % |
| Bidones 01 a 09 de 25 kg | 9 × 25 | 225 kg |
| Mezcla 120 kg 99,4 % + 80 kg 99,9 % | (11928 + 7992)/200 | 99,6 % |
| Cadena 92 % y 85 % | 0,92 × 0,85 | 78,2 % |
| Retirada 216 de 240 kg | 216/240 | 90 % |

## Lo que quedó fuera por no poder verificarlo

- Cuánto debe tardar un simulacro de trazabilidad o de retirada (horas u objetivos típicos): no se encontró una fuente gratuita y fiable. La lección dice que lo marca el procedimiento de cada planta.
- Clasificación de retiradas por clases o niveles de riesgo y plazos de notificación a la autoridad: no figuran en ICH Q7 ni en el capítulo 8 leído con cifras concretas; no se incluyeron.
- Cómo gestionan las plantas en la práctica la trazabilidad de tanques de disolvente con varios lotes (por fechas, por volumen): solo se da la idea general deducida de ICH Q7 7.21.
- Que la parte II de EudraLex vol. 4 es la transposición de ICH Q7: la guía de distribución remite a la parte II, capítulo 17, pero no se leyó una fuente que lo diga literalmente, así que no se afirmó.
- Requisitos del Reglamento Delegado (UE) 1252/2014 (GMP de principios activos): solo se vio citado en la guía de distribución; no se leyó.
