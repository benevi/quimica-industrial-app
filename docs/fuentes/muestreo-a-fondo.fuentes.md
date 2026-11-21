# Fuentes de la lección `muestreo-a-fondo`

Todos los documentos se descargaron con curl el 21 de noviembre de 2026, se pasaron a texto (`pdftotext -layout` o limpieza del HTML) y se leyeron los apartados citados. Las copias están en `src_muestreo/`. El buscador solo se usó para localizar URL; ninguna cifra ni cita se apoya en un fragmento de buscador.

## Documentos leídos

| Clave | Documento | URL |
|---|---|---|
| Q7 | ICH Q7, Good Manufacturing Practice Guide for Active Pharmaceutical Ingredients | https://database.ich.org/sites/default/files/Q7%20Guideline.pdf |
| OMS | WHO Technical Report Series n.º 929 (2005), anexo 4, «WHO guidelines for sampling of pharmaceutical products and related materials» | https://cdn.who.int/media/docs/default-source/medicines/norms-and-standards/guidelines/inspections/trs929-annex4-guidelinessamplingpharmproducts.pdf?sfvrsn=c47a0070_1&download=true |
| A8 | EudraLex vol. 4, anexo 8 «Sampling of starting and packaging materials» | https://health.ec.europa.eu/document/download/22d03c04-8512-4336-89dd-556771fca388_en?filename=anx08_en.pdf |
| GTAQ | INSST, Guía técnica para la evaluación y prevención de los riesgos relacionados con agentes químicos (2022) | https://www.insst.es/documents/94886/2927460/Gu%C3%ADa+t%C3%A9cnica+para+la+evaluaci%C3%B3n+y+prevenci%C3%B3n+de+los+riesgos+relacionados+con+agentes+qu%C3%ADmicos+2022.pdf |
| NTP225 | INSST, NTP 225: Electricidad estática en el trasvase de líquidos inflamables | https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/6-serie-ntp-numeros-191-a-225-ano-1989/ntp-225-electricidad-estatica-en-el-trasvase-de-liquidos-inflamables |
| NTP768 | INSST, NTP 768: Trasvase de agentes químicos: medidas básicas de seguridad (2007) | https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/22-serie-ntp-numeros-751-a-785-ano-2007/nota-tecnica-de-prevencion-ntp-768 |
| FDA | FDA, Investigating Out-of-Specification (OOS) Test Results for Pharmaceutical Production, Revision 1, mayo de 2022 | https://www.fda.gov/media/158416/download |
| App | Lecciones de la app: `inertizacion-a-fondo`, `secado-a-fondo`, `envasado-a-fondo`, `oos-y-oot`, `plan-de-muestreo`, `toma-de-muestras`, `conservacion-y-custodia`, `recepcion-a-fondo` | src/content y scratchpad/lecciones |

## Afirmaciones normativas y técnicas

| Afirmación de la lección | Fuente | Cómo se comprobó |
|---|---|---|
| Muestra representativa: obtenida con un procedimiento para que las distintas partes del lote estén representadas en su proporción | OMS, 1.2 glosario «Representative sample» | Leído |
| Muestrear es tomar una fracción pequeña; con muestras no representativas no se sacan conclusiones válidas del conjunto | A8, «Principle» | Leído |
| Señales de falta de uniformidad: diferencias de forma, tamaño o color de partículas, costras húmedas en higroscópicos, posos en líquidos, estratificación; se muestrean aparte y no se juntan porque puede ocultar contaminación o baja riqueza | OMS, 2.2 | Leído |
| Cuchara pequeña: los granos grandes se caen y hay sesgo; no dar golpecitos a la cuchara (segrega) | OMS, apéndice 1 «Scoops» | Leído |
| Una sonda en vertical puede sacar granos de distinto tamaño que en ángulo | OMS, apéndice 1 «Thieves» | Leído |
| Sedimentación de sólidos en suspensión con el agitador parado; estratificación tras extracción; segregación en tolva y bidones (ejemplos de dónde se ve) | Práctica general, declarada como ejemplos | No normativo; coherente con OMS 2.2 y 4.2 (riesgo de segregación en el transporte de graneles) |
| Definición de control en proceso | Q7, glosario «In-Process Control» | Leído |
| Contenido de 8.30 a 8.36 (procedimientos, criterios del desarrollo, menos estrictos al principio, críticos aprobados por calidad, personal de producción cualificado y ajuste dentro de límites aprobados, documentar en la hoja, muestreo científicamente sólido, sin contaminar e integridad de la muestra, sin investigación OOS en IPC de vigilancia o ajuste) | Q7, 8.30–8.36 | Leído |
| Laboratorios de controles en proceso dentro de zonas de producción si no se afectan | Q7, 4.16 | Leído |
| Cuando se trabaja hasta un objetivo (pH, hidrogenación, secado a especificación) el final lo decide el muestreo, no un límite de tiempo; cumplir los límites de tiempo y documentar y evaluar desviaciones | Q7, 8.20 | Leído |
| La hoja del lote recoge todo muestreo hecho y los resultados en proceso y de laboratorio | Q7, 6.52 | Leído |
| Capa de cristales húmedos que queda en el cesto de la centrífuga tras descargar, citada como arrastre al lote siguiente | Q7, 8.50 | Leído |
| Ejemplos de IPC (conversión, pH, LOD, disolvente residual, aspecto, oxígeno) y sus criterios | Valores de ejemplo declarados en el texto | — |
| El medidor de oxígeno mide en su punto de muestra; la lectura deja de valer si se abre el equipo | Lección `inertizacion-a-fondo` | Leído |
| Abrir la boca de hombre rompe la inertización (entra aire) | Lección `inertizacion-a-fondo` | Leído |
| Tras un trasvase el líquido queda cargado hasta pasar el tiempo de relajación; posible chispa entre el líquido y un muestreador de líquido metálico introducido por la boca, donde suele estar la atmósfera inflamable | NTP225, apartado sobre llenado de recipientes | Leído |
| Esperar el tiempo de relajación antes de abrir tapas o tomar muestras | NTP225 «Control de los tiempos de relajación»; NTP768, apartado «Trasvase»; GTAQ (focos de ignición) | Leído |
| Mínimo 30 s para líquidos conductores y 1 min para no conductores | NTP768, apartado «Trasvase» (la NTP 225 solo da los 30 s de los conductores) | Leído |
| Las muestras nunca se devuelven al lote | OMS, 2.2 | Leído |
| Tramo muerto, purga del líquido estancado, frasco de 100 mL, purga a recipiente aparte, agitador en marcha, muestra caliente que cristaliza o pierde disolvente, no abrir una toma a presión si no está diseñada para ello | Práctica general declarada y remitida al procedimiento; la purga ya figura en la lección `toma-de-muestras` | No normativo |
| En el secado se para el giro y se rompe el vacío con nitrógeno antes de muestrear | Lección `secado-a-fondo` | Leído |
| Algunos equipos tienen tomamuestras que saca producto sin abrir la boca de hombre | Práctica general declarada («algunos equipos»), remitida al procedimiento | No normativo |
| Molino y envasado: muestrear al principio, en medio y al final | Práctica general declarada | No normativo |
| Envase que no interactúa ni contamina, que protege de luz, aire y humedad, cerrado y preferiblemente con precinto | OMS, 2.3 | Leído |
| Líquidos en frascos de rosca con junta inerte, cierre estanco al vapor y a la humedad | OMS, 2.3 | Leído |
| Ámbar o vidrio incoloro envuelto en aluminio o papel oscuro para sensibles a la luz; espacio de cabeza mínimo; gaseado con nitrógeno si se acuerda | OMS, 2.3 | Leído |
| Bolsas y botes de rosca para sólidos | OMS, 2.3 y apéndice 4 | Leído |
| Útiles inertes, muy limpios, limpieza documentada | OMS, 2.1 | Leído |
| Etiquetar en el momento; datos del lote, envase, cantidad, finalidad, tipo de muestra, código, fecha, condiciones de conservación y precauciones; etiquetar todas las piezas de los envases que se separan | OMS, 2.2 y 2.3 | Leído |
| Etiqueta mínima de una muestra de proceso (producto, lote, etapa, punto, fecha y hora, quién, análisis) | Pedido por el encargo y coherente con OMS 2.2 y 1.6 (fecha y persona en el registro) | Leído (parcial) / práctica general |
| Toma de muestras entre las operaciones con riesgo por contacto que requieren procedimiento; procedimientos de toma de muestras inexistentes, insuficientes o no actualizados como factor de riesgo | GTAQ (tabla de factores de riesgo en reacciones peligrosas; apartado de manipulación) | Leído |
| Agentes cancerígenos prohibidos admitidos como intermedios (2-naftilamina, 4-aminodifenilo, bencidina, 4-nitrodifenilo): muestrear la menor cantidad posible con equipos y procedimientos que eviten su dispersión | GTAQ, comentario al artículo 8 del RD 374/2001 (prohibiciones y excepciones) | Leído. La frase «una buena idea para cualquier producto peligroso» es una recomendación general, no una cita |
| Protección según la ficha; formación en protección respiratoria si se usa | OMS, 1.7 | Leído |
| «Testing into compliance»: repetir hasta que cumpla y descartar los OOS sin justificación es acientífico e inaceptable («unscientific and objectionable») | FDA, sección sobre retesting | Leído |
| Resampling solo según procedimientos y estrategias de muestreo predeterminados | FDA, «Resampling» | Leído |
| Reserva: para evaluación futura, no para estabilidad; mismo envase o equivalente o más protector; cantidad para al menos dos análisis completos | Q7, 11.70–11.72 | Leído |
| Formación de quien muestrea: aspecto visual del material y registrar circunstancias inesperadas o inusuales | A8, apartado 1 | Leído |
| Un IPC que aún no cumple y está previsto en la hoja no es normalmente un OOS | Q7 8.36 y lección `oos-y-oot` | Leído |

## Cálculos (recalculados con python, redondeados como en el texto)

| Cálculo | Resultado | Tipo |
|---|---|---|
| V = π × 0,025² / 4 × 0,80 | 0,000393 m³ = 393 mL (392,7) | Cálculo con valores de ejemplo |
| Purga 3 × 393 mL | 1178 mL ≈ 1,2 L (3 × 392,7 = 1178,1) | Regla de tres volúmenes: valor de ejemplo declarado |
| Envasado de 18 bidones con regla «primero, último y uno de cada cinco» | 1, 5, 10, 15, 18: 5 muestras | Regla de ejemplo declarada |
| 30 + 20 + 100 + 150 + 150 g; 0,45 / 300 × 100 | 450 g; 0,15 % | Valores de ejemplo |
| Quiz: π × 0,020² / 4 × 1,5 | 471 mL (471,2) | Cálculo |
| Quiz: π × 0,015² / 4 × 2,0 × 3 | 353 mL; 1060 mL (1060,3) | Cálculo |
| Quiz: regla de ejemplo con 26 bidones | 1, 5, 10, 15, 20, 25, 26: 7 | Cálculo |
| Quiz: 0,36 / 120 × 100 | 0,3 % | Cálculo |
| Quiz: 2 × 40 g (Q7 11.72) | 80 g | Cálculo |
| Plant: 2,4 % y 0,7 % de material de partida, horas 10:42 y 11:51 | — | Valores de ejemplo (caso ficticio) |

## Lo que se dejó fuera por no poder verificarlo

- Un número concreto de volúmenes de purga del tramo muerto (3, 5, 10) como norma: no hay fuente gratuita leída que lo fije; se presenta como valor de ejemplo de un procedimiento ficticio.
- Una regla oficial de muestreo para el envasado o la descarga del molino (principio, medio, final o cada N bidones): no se encontró en Q7, OMS ni anexo 8; queda como práctica general y regla de ejemplo. Los planes de la OMS para producto terminado remiten a ISO 2859 (de pago), que no se cita.
- Una NTP del INSST dedicada a la toma de muestras de productos de proceso o a tomamuestras cerrados: no se encontró; las NTP de «toma de muestras» del INSST tratan de contaminantes en el aire. Se usaron la guía técnica de agentes químicos y las NTP 225 y 768.
- Cantidades de muestra típicas por ensayo (gramos para LOD, KF o disolventes residuales): dependen del método; solo valores de ejemplo.
- Los plazos de conservación de la muestra de reserva (11.71) se omiten aquí a propósito porque ya están en `envasado-a-fondo` y `conservacion-y-custodia`.
- Tablas de tiempos de relajación por disolvente (tabla 3 de la NTP 768): no se reproducen.
- Diseños comerciales de tomamuestras cerrados o tomamuestras a vacío para secaderos: sin fuente de fabricante leída; se menciona solo que «algunos equipos» los tienen.
