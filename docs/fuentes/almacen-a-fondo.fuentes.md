# Fuentes de «almacen-a-fondo» (nivel 17)

Copias locales en `src_almac/dl/`. Cálculos en `src_almac/scripts/calc.py` (y comprobaciones sueltas con python, indicadas abajo).

## Documentos leídos

| Abreviatura | Documento | URL |
|---|---|---|
| Q7 | ICH Q7, Good Manufacturing Practice Guide for APIs | https://database.ich.org/sites/default/files/Q7%20Guideline.pdf (texto ya descargado en la sesión, copiado a `dl/q7.txt`) |
| EU3 | EudraLex vol. 4, parte I, capítulo 3 «Premises and Equipment» | https://health.ec.europa.eu/document/download/18d76565-137b-41d2-a602-794527f708c1_en?filename=chapter_3.pdf (descargado de nuevo: `dl/ch3b.pdf`) |
| OMS-1025 | WHO TRS 1025 (2020), anexo 7, «Good storage and distribution practices for medical products» | https://cdn.who.int/media/docs/default-source/medicines/norms-and-standards/guidelines/distribution/trs1025-annex7-(1).pdf?sfvrsn=1f96888d_4&download=true |
| OMS-961 | WHO TRS 961 (2011), anexo 9, «Model guidance for the storage and transport of time- and temperature-sensitive pharmaceutical products» | https://cdn.who.int/media/docs/default-source/medicines/norms-and-standards/guidelines/inspections/trs961-annex9-modelguidanceforstoragetransport.pdf?sfvrsn=66be1860_2 |
| RAPQ | Real Decreto 656/2017, Reglamento de almacenamiento de productos químicos e ITC MIE APQ 0 a 10 (texto consolidado BOE) | https://www.boe.es/buscar/act.php?id=BOE-A-2017-8755 (HTML descargado; la tabla I se leyó con sus celdas combinadas resueltas, script `src_almac/scripts/tabla.py`) |
| NTP 725 | INSST, NTP 725 (2006) «Seguridad en el laboratorio: almacenamiento de productos químicos» | https://www.insst.es/documents/94886/7850762/ntp_725.pdf/8d7db0e4-c89d-4b56-94da-c554b1abee32 (PDF; páginas 2 y 3 renderizadas para ver los pictogramas de la figura 1) |
| BP2023 | INSST, «Buenas prácticas para el almacenamiento de productos químicos peligrosos» (2023) | https://www.insst.es/documents/94886/5326464/Buenas+pr%C3%A1cticas+para+el+almacenamiento+de+productos+qu%C3%ADmicos+peligrosos+2023.pdf |
| NTP 714 | INSST, NTP 714 «Carretillas elevadoras automotoras (II): principales peligros y medidas preventivas» | https://www.insst.es/c/document_library/get_file?uuid=31724752-b106-46c9-8212-281ca498f7d6&groupId=94886 |
| NTP 319 | INSST, NTP 319 «Carretillas manuales: transpaletas manuales» | https://www.insst.es/c/document_library/get_file?uuid=8328dbe0-b293-4b54-96b8-2ff0e3a4e159&groupId=94886 |
| NTP 1112 | INSST, NTP 1112 (2018) «Seguridad en el almacenamiento de materiales mediante paletizado y apilado sobre el suelo» | https://www.insst.es/c/document_library/get_file?uuid=1a3cadf2-98c9-44ad-8ade-008f7d2b25ce&groupId=94886 |
| NTP 225 | INSST, NTP 225 «Electricidad estática en el trasvase de líquidos inflamables» | https://www.insst.es/c/document_library/get_file?uuid=39deec50-a878-4a08-af28-55f547375c20&groupId=94886 |

También descargada (NTP 852, estanterías metálicas, uuid c704e23c-dce0-2cb6-33fa-12de096cd67f) y NTP 715; no se usó ningún dato de ellas.

## Afirmación por afirmación

| Afirmación del texto | Fuente | Cómo se comprobó |
|---|---|---|
| Manipular y almacenar evitando degradación, contaminación y contaminación cruzada | Q7 7.40 | Leído |
| Bidones de cartón, sacos y cajas fuera del suelo y espaciados para limpiar e inspeccionar | Q7 7.41 | Leído |
| Condiciones y tiempo sin efecto adverso; normalmente se usa primero lo más antiguo | Q7 7.42 | Leído |
| Algunos materiales en envases adecuados a la intemperie si la etiqueta es legible y se limpian antes de abrir | Q7 7.43 | Leído |
| Rechazados bajo un sistema de cuarentena que impida su uso | Q7 7.44 | Leído |
| Antes de mezclar con existencias (disolventes, silos), identificar, analizar si procede y liberar | Q7 7.21 | Leído |
| Sistema para identificar el estado de cada lote | Q7 7.24 | Leído |
| Reevaluar materiales tras almacenamiento prolongado o exposición a calor o humedad | Q7 7.50 | Leído |
| Temperatura y humedad controladas cuando haga falta; registros si son críticas | Q7 10.10 | Leído |
| Zonas separadas para cuarentena, rechazado, devuelto, retirado salvo sistema alternativo | Q7 10.11 | Leído |
| API solo a terceros tras liberación por la unidad de calidad | Q7 10.20 | Leído |
| Condiciones especiales de transporte o almacenamiento en la etiqueta | Q7 10.22 | Leído |
| Etiqueta: nombre o código, lote, condiciones de almacenamiento si son críticas | Q7 9.42 | Leído |
| Fecha de caducidad en etiqueta y certificado; reanálisis en etiqueta y/o certificado | Q7 9.43 | Leído |
| Fechas basadas en estabilidad; lo habitual en API es fecha de reanálisis | Q7 11.61 | Leído |
| Almacenes limpios, secos, dentro de límites de temperatura; condiciones especiales aseguradas, comprobadas y vigiladas | EU3 3.19 | Leído |
| Protección frente a insectos y otros animales | EU3 3.4 | Leído |
| Zonas de cuarentena marcadas y acceso restringido; sistema sustituto con seguridad equivalente | EU3 3.21 | Leído |
| Zonas segregadas para rechazado, retirado, devuelto | EU3 3.23 (usado como apoyo de la tabla de estados) | Leído |
| Fuera del suelo, lejos de paredes y techo, sin sol directo, palés limpios y en buen estado | OMS-1025 12.23 | Leído |
| Programa de control de roedores y plagas; prohibido comer, beber, fumar | OMS-1025 12.8, 12.9 | Leído |
| Envases rotos o dañados retirados del stock y separados | OMS-1025 12.32 | Leído |
| Rechazados segregados y guardados de forma segura | OMS-1025 12.18 | Leído |
| Zonas de estado marcadas, acceso restringido; sistema informático validado como alternativa | OMS-1025 12.26 | Leído |
| Segregación por lote en cuarentena y después | OMS-1025 12.15 | Leído |
| FEFO: principio que debe seguirse; definición | OMS-1025 12.30 y glosario | Leído |
| Condiciones conforme a la etiqueta | OMS-1025 12.34 | Leído |
| Evitar «store at ambient conditions», usar límites reales como «store below 25 °C»; tabla A7.1 (15–25, 8–15, 5 ± 3, −20 ± 5 °C; ≤ 60 % HR; protección de la luz en envase original); valores recomendados basados en farmacopeas | OMS-1025 apéndice 1, tabla A7.1 y nota a | Leído |
| 5 ± 3 = 2 a 8 °C; −20 ± 5 = −25 a −15 °C | Cálculo | Recalculado |
| Registro de existencias tras cada operación y conciliación periódica; causa raíz de diferencias y CAPA | OMS-1025 13.1, 13.2 | Leído |
| Revisar el stock con regularidad para detectar lo próximo a reanálisis o caducidad | OMS-1025 13.4 | Leído |
| Procedimientos escritos para desviaciones de temperatura | OMS-1025 18.40 | Leído |
| Mapeo/cualificación: perfil vacío y cargado, zonas que no usar, tiempo hasta salirse de límites si falla la corriente, repetir tras modificaciones | OMS-961 4.7 | Leído |
| Sensores de control en los puntos calientes y fríos del mapeo | OMS-961 4.5.1 | Leído |
| Sensores de vigilancia ±0,5 °C (electrónicos); mínimo 6 registros por hora; funcionan si falla la corriente | OMS-961 4.5.2 | Leído |
| Calibración al menos anual | OMS-961 4.10.1 | Leído |
| Alarmas alta/baja visuales, preferible sonora y aviso telefónico fuera de horario; prueba cada 6 meses | OMS-961 4.6.1, 4.10.3 | Leído |
| Comprobar y anotar dos veces al día; revisión mensual; conservar al menos un año tras fin de vida útil | OMS-961 9.3.1 | Leído |
| Definición de excursión de temperatura | OMS-961 glosario | Leído |
| Conciliación física preferiblemente al menos dos veces al año | OMS-961 8.1.1 | Leído |
| FIFO definido como first in first out | OMS-961 abreviaturas y 4.2 | Leído |
| Recuento cíclico: contar cada vez una parte de las ubicaciones | Sin norma; se presenta como «una forma de organizarlo» | Definición general, no tomada de ninguna fuente leída |
| Ámbito: exclusión por debajo de la columna 5 de la tabla I; valores 50 L (H224, H225), 250 L (H226), 200/400/1000 (H314 1A/1B/1C), 50 (toxicidad aguda cat. 1), 1250 kg (sólidos comburentes cat. 3) | RAPQ art. 2, tabla I | Leído en el HTML del BOE con celdas combinadas resueltas |
| Suma de cocientes por tipo de peligro no superior a 1; instalaciones excluidas siguen medidas del fabricante y FDS | RAPQ art. 2, nota y párrafo final de la tabla I | Leído |
| Recipiente fijo (no trasladable con producto o > 3000 L) | RAPQ, MIE APQ-0 art. 2.51 | Leído |
| Almacenamiento conjunto: mismo cubeto, misma sala o mismo recipiente subdividido | MIE APQ-0 art. 2.5 | Leído |
| Clases B (< 55 °C), B1 (< 38 °C), B2 (38–55 °C), C (55–100 °C) | MIE APQ-1 art. 4 | Leído |
| En un cubeto, misma clase o riesgo inferior; no productos que reaccionen; combustibles nunca con comburentes H270/H271/H272 | MIE APQ-1 art. 12.1, 12.3, 12.6 | Leído |
| Capacidad del cubeto: mayor entre el recipiente mayor (sin él, con los demás) y el 10 % global (sin recipientes); 1 m entre pared del recipiente y pie del cubeto | MIE APQ-1 art. 20.1 y 20.3 | Leído |
| Pila: conjunto de recipientes móviles; independientes si 1,2 m de separación | MIE APQ-10 art. 2.5 | Leído |
| Alturas máximas de pila 2,7 / 3,6 / 4,5 m para H224 / H225 / H226; se pueden duplicar con extinción fija; en palés o estanterías se suman las alturas de los recipientes | MIE APQ-10 art. 21, tabla II y nota (1); art. 9.3 («cuando los recipientes se almacenen en estanterías o paletas se computará... la suma de las alturas») | Leído; confirmado también en BP2023 tabla 11 |
| Tóxicos en almacén cerrado: no otros combustibles en el mismo sector de incendios | MIE APQ-10 art. 25 | Leído |
| Corrosivos distintos que reaccionen, nunca en la misma pila o estantería | MIE APQ-10 art. 26 | Leído |
| Tabla 4 de incompatibilidades (Sí/No/(1)/(2)) y sus notas | NTP 725, tabla 4 | Leído en el PDF |
| Pictogramas de la figura 1 (bomba, llama sobre círculo, llama, calavera, corrosión, aspa) y uso de frases R y RD 379/2001 | NTP 725, figura 1 y texto | Visto en el PDF renderizado y leído |
| Tabla 8 de segregación (notas A, B, C); un pictograma puede representar clases incompatibles | BP2023, tabla 8 y texto previo | Leído |
| Carretillas: personal formado y autorizado; llave en poder del operador o responsable; mástil atrás y horquillas a 15 cm; no circular con carga elevada; marcha atrás si no hay visibilidad; no transportar ni elevar personas; consultar la tabla de cargas; en atmósferas inflamables, carretillas certificadas | NTP 714, tablas | Leído |
| Transpaletas manuales: recomendable no pasar de 1500 kg; 20 cm entre palés; no en suelos húmedos o desiguales; pendiente solo con freno, operario detrás, máximo aconsejable 5 % | NTP 319 | Leído |
| Altura de apilado: sin criterio estandarizado salvo elementos de apilado y alcance del mástil; marcar la altura máxima en paredes | NTP 1112, apartado 4 | Leído |
| Carga electrostática por separación líquido-superficie; unión equipotencial entre recipiente que se vacía, bomba y recipiente que se llena, conjunto a tierra; resistencia < 10⁶ Ω; accidentes por no conectar cables existentes; tubo de llenado a 25 cm o menos del fondo | NTP 225 | Leído (el «106 Ω» del texto extraído es 10⁶ con el superíndice perdido) |
| Cuenta 1: 7 lecturas > 25 °C, 70 min, entre 60 y 80 min | Cálculo con valores de ejemplo | Recalculado (calc.py) |
| Cuenta 2: 183,0 / 7 = 26,1 °C; máxima 27,0 | Cálculo | Recalculado (26,142...) |
| Cuenta 3: días a caducidad 313, 160, 436 desde 21/11/2026 | Cálculo con fechas de ejemplo | Recalculado con datetime |
| Cuenta 4: 15/03/2025 + 24 meses = 15/03/2027; 114 días desde 21/11/2026 | Cálculo; periodo de 24 meses = valor de ejemplo | Recalculado |
| Cuenta 5: 25/50 + 150/250 = 1,1; 20/50 + 100/250 = 0,8 | Cálculo con límites de la tabla I | Recalculado |
| Cuenta 6: 10 % de 80 = 8 m³; huella π·1,5² = 7,07 m²; 150 − 7,07 = 142,93 m²; 50 / 142,93 = 0,35 m | Cálculo con valores de ejemplo y regla del art. 20 | Recalculado (0,3498) |
| Cuenta 7: 3450 / 25 = 138 sacos; 136 contados; 50 kg; 1,4 % | Cálculo con valores de ejemplo | Recalculado (1,449 %) |
| Ejemplo de IBC 1,2 m × 3 = 3,6 m; límite de fabricante de 2 alturas = 2,4 m | Valores de ejemplo declarados | Recalculado |
| Quiz: 9 × 10 = 90 min (80–100); 132,5 / 5 = 26,5; 30 + 31 = 61 días (1/12/2026 a 31/01/2027); 0,6 + 0,4 = 1; 42 / 120 = 0,35; 78 × 25 = 1950, 50 / 2000 = 2,5 % | Cálculo | Recalculado con python |

## Lo que quería incluir y quedó fuera

- **WHO TRS 908, anexo 9 (2003)**: no se pudo leer. cdn.who.int devolvió «BlobNotFound» en las rutas probadas e iris.who.int está bloqueado por la red de la sesión; las copias de terceros (BSI, Scribd, gmpua) no son accesibles o no son oficiales. En su lugar se usó el anexo 7 del TRS 1025 (2020), guía vigente de la OMS de buenas prácticas de almacenamiento y distribución, y el anexo 9 del TRS 961. No se usó nada del TRS 908 (lo que se vio de él fue solo en fragmentos del buscador).
- **Temperatura cinética media** (*mean kinetic temperature*): el TRS 961 solo la cita en la bibliografía; no se explica ni se calcula.
- **Tiempos o temperaturas «aceptables» de una excursión**: dependen de los datos de estabilidad de cada producto; ninguna fuente leída da un número general. Se dice que lo decide Calidad.
- **Distancias de la MIE APQ-1** (artículos 17 y 18, cuadros de distancias entre recipientes e instalaciones): no se leyeron los cuadros completos, así que no se dan cifras.
- **Alturas de muretes de cubeto (0,30 / 0,50 / 1 m)**: aparecen en el artículo 20.4.b de la MIE APQ-1 dentro de la prescripción de la subclase A2 y no está claro si son generales; no se incluyeron.
- **Limites de apilamiento de IBC o bidones según fabricante o marcado ONU/ADR**: no se leyó ninguna fuente; solo se dice que manda la placa del fabricante y se usa un valor de ejemplo declarado.
- **Correspondencia exacta entre los símbolos antiguos de la NTP 725 y los pictogramas CLP actuales** (en particular qué pasó con el aspa de «nocivo»): no se verificó en una fuente leída; solo se dice que la NTP usa símbolos anteriores al CLP y que la guía de 2023 cruza por indicaciones H.
- **Frecuencias concretas del recuento cíclico** en GMP: ninguna fuente leída las fija, salvo la recomendación del TRS 961 (al menos dos veces al año) para productos sensibles a la temperatura.
- control.com no es accesible y no se usó.
