# Fuentes de la lección `calor-y-frio-a-fondo`

Cómo leer la columna «Comprobación»:

- **Leído en el documento**: descargué la página oficial con curl, la pasé a texto y leí el pasaje.
- **Fragmento de buscador**: solo vi el resumen que devuelve el buscador web; no pude abrir la página (webbook.nist.gov, Wikipedia y Engineering Toolbox no son accesibles desde esta sesión). Es la verificación más débil.
- **Recalculado**: cuenta rehecha con python (`src_calor/check.py`), con el mismo redondeo que el texto.
- **Valor de ejemplo declarado**: número redondo inventado para hacer cuentas; el texto lo dice expresamente.
- **Razonamiento**: ley o mecanismo de libro de texto, sin cifra que verificar.

Documentos leídos:

- NTP 527 (INSST): https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/15-serie-ntp-numeros-506-a-540-ano-2000/ntp-527-reacciones-quimicas-exotermicas-i-factores-de-riesgo-y-prevencion
- NTP 528 (INSST): https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/15-serie-ntp-numeros-506-a-540-ano-2000/ntp-528-reacciones-quimicas-exotermicas-ii-control-termico-y-refrigeracion
- RD 487/2022 (legionelosis), texto consolidado: https://www.boe.es/buscar/act.php?id=BOE-A-2022-10297
- RD 552/2019 (Reglamento de seguridad para instalaciones frigoríficas), texto consolidado: https://www.boe.es/buscar/act.php?id=BOE-A-2019-15228

## Tabla de afirmaciones

| Afirmación, fórmula o dato | Fuente | Comprobación |
|---|---|---|
| 1 kJ = 1000 J; 1 kW = 1 kJ/s; 1 kWh = 3600 kJ | Definición de las unidades (1 h = 3600 s) | Recalculado |
| Un cambio de 10 °C es un cambio de 10 K | Definición de la escala kelvin | Razonamiento |
| Conducción, convección y radiación, con sus ejemplos | Ley de libro de texto; ya figura en la lección `calor-vapor-intercambiadores` | Razonamiento |
| Todos los materiales emiten radiación según su temperatura | NTP 528, apartado «Sensores de infrarrojos» | Leído en el documento |
| Q = m × cp × ΔT | Ley de libro de texto; ya usada en `calor-vapor-intercambiadores` y `reactor-a-fondo` | Razonamiento; ejemplos recalculados |
| cp del agua líquida = 4,18 kJ/(kg·K) | Tabla de calores específicos (wikiwand.com/en/Table_of_specific_heat_capacities: 4,1816 a 25 °C); coincide con la lección `calor-vapor-intercambiadores` | Fragmento de buscador |
| cp = 2,0 kJ/(kg·K) para «un disolvente orgánico»; cp = 2,5 del ejemplo 3 | Valor de ejemplo declarado | No es un dato de ninguna sustancia |
| Ejemplo 1: 500 × 4,18 × 40 = 83 600 kJ; 500 × 2,0 × 40 = 40 000 kJ | Cálculo | Recalculado |
| Ejemplo 2: 1500 × 2,0 × (−50) = −150 000 kJ; 150 000 / 3600 = 41,7 kW | Cálculo | Recalculado (41,67) |
| Ejemplo 3: 90 000 / (1200 × 2,5) = 30 °C; final 45 °C | Cálculo | Recalculado |
| Balance sin pérdidas: calor cedido = calor ganado | Conservación de la energía | Razonamiento |
| Ejemplo 4: 4,18 × 10 = 41,8 kJ/kg; 150 000 / 41,8 = 3589 kg; con 3000 kg, 12,0 °C | Cálculo | Recalculado (3588,5 y 11,96) |
| Fórmula de la temperatura de mezcla | Se deduce del balance de calor | Razonamiento |
| Ejemplo 5: (800 × 20 + 200 × 70) / 1000 = 30 °C | Cálculo | Recalculado; el balance cierra (33 440 kJ por cada lado) |
| Muchas mezclas reales desprenden calor al mezclarse | Conocimiento general (calor de mezcla) | Razonamiento, sin cifra |
| Placas frente a haz tubular: menos volumen para la misma área, más fáciles de limpiar, dependen de las juntas, hasta unos 30 bar | NTP 528, apartado «Intercambiadores de calor» | Leído en el documento |
| Serpentín: más económico que el encamisado y con coeficientes más altos; camisa: limpieza más sencilla y superficie limitada por la geometría | NTP 528, apartado «Refrigeración en un proceso discontinuo» | Leído en el documento |
| Doble tubo: un tubo dentro de otro, poca superficie; dónde se ve cada tipo en planta | Descripción general de los equipos | Razonamiento, sin cifra |
| En paralelo el fluido frío no puede salir más caliente que la salida del caliente; en contracorriente sí | Libro de texto; el buscador lo confirma (colostate.edu CBE101, instrumentationtools.com) | Fragmento de buscador |
| Tabla de diferencias en los extremos (60 y 10; 40 y 30) | Cálculo | Recalculado |
| ΔTml = (ΔT1 − ΔT2) / ln(ΔT1 / ΔT2), con los extremos emparejados según el sentido de flujo; en contracorriente sale mayor | Libro de texto; resumen del buscador sobre en.wikipedia.org/wiki/LMTD y engineeringtoolbox.com | Fragmento de buscador |
| Ejemplo 6: ln(6) = 1,792; 50 / 1,792 = 27,9 °C | Cálculo | Recalculado (27,906) |
| Ejemplo 7: ln(1,333) = 0,288; 10 / 0,288 = 34,8 °C | Cálculo | Recalculado (34,761) |
| La media aritmética da 35 °C en los dos casos | Cálculo | Recalculado |
| Q = U × A × ΔTml | Libro de texto; la NTP 527 usa Q = U·s·(T − Tex) | Leído en el documento (NTP 527) y razonamiento |
| U = 500 W/(m²·K) y U sucio = 350 | Valor de ejemplo declarado | No es un dato de ningún equipo |
| Ejemplo 8: 1,0 × 2,0 × 30 = 60 kW; A = 3,45 m² en contracorriente y 4,30 m² en paralelo; 25 % más | Cálculo | Recalculado (3,448; 4,301; cociente 1,247) |
| El ensuciamiento reduce la transferencia de calor, es especialmente grave si refrigera una reacción exotérmica, y reduce el flujo máximo | NTP 528, apartado «Ensuciamiento» | Leído en el documento |
| Ejemplo 9: 350 × 3,45 × 34,8 = 42 kW | Cálculo | Recalculado (42 021 W) |
| Cómo nota el operador el ensuciamiento (más caudal, agua más fría, tiempos más largos, más diferencia de presión) | Se deduce de Q = U × A × ΔTml y de la NTP 528 | Razonamiento |
| El reflujo refrigera si hay capacidad de condensación suficiente | NTP 528, apartado «Refrigeración en un proceso continuo» | Leído en el documento |
| Fallos del condensador: bloqueo de la entrada de vapor, inundación, congelación | NTP 528, apartado «Modos de fallo» | Leído en el documento |
| Si falla el frío del condensador, los vapores salen por el venteo y se pierde disolvente | NTP 528 («pérdida de la función de condensación») y balance de materia | Leído en el documento, más razonamiento |
| El agua se congela a 0 °C | Dato básico | Razonamiento |
| Nitrógeno líquido: hierve a −195,8 °C a presión atmosférica | Resumen del buscador (NIST 77,34 K; ficha de seguridad del USDA) | Fragmento de buscador |
| Etilenglicol en agua: unos −13 °C al 30 % en volumen y unos −33 °C al 50 % | Página de datos del etilenglicol en Wikipedia (valores del CRC Handbook: −12,8 y −33,3 °C) | Fragmento de buscador. Engineering Toolbox da 2 °F y −36 °F (unos −17 y −38 °C); por eso el texto dice «otras tablas dan cifras algo distintas» |
| Evaporador, compresor, condensador y dispositivo de expansión: qué hace cada uno | RD 552/2019, instrucción IF-01, definiciones 3.4.11, 3.4.3, 3.4.9 y 3.4.20 | Leído en el documento |
| El refrigerante absorbe calor a baja temperatura y presión y lo cede a temperatura y presión más altas | RD 552/2019, IF-01, definición 3.7.1 | Leído en el documento |
| Fluido secundario (agua, salmuera) que lleva el calor entre el circuito frigorífico y el medio a enfriar | RD 552/2019, IF-01, definición 3.7.2 | Leído en el documento |
| El gas se calienta al comprimirlo y el líquido se enfría al expandirse | Termodinámica de libro de texto | Razonamiento |
| Calor del condensador = calor del evaporador + energía del compresor; 100 + 30 = 130 kW | Conservación de la energía | Recalculado; las cifras son valores de ejemplo |
| La torre enfría el agua con aire, por contacto directo | NTP 528, apartado «Refrigeración por agua» | Leído en el documento |
| La torre enfría evaporando parte del agua y no puede bajar de la temperatura de bulbo húmedo; se queda algo por encima | Resumen del buscador (ASHRAE Handbook, cap. 40; Power Engineering, «Cooling Tower Heat Transfer 101») | Fragmento de buscador |
| *Legionella* se multiplica entre 20 y 50 °C y se transmite por aerosoles | RD 487/2022, preámbulo | Leído en el documento |
| Limpieza y desinfección al menos dos veces al año | RD 487/2022, anexo IV, parte C.1 | Leído en el documento |
| Análisis de *Legionella* mensual; pH, temperatura y biocida a diario | RD 487/2022, anexo V, tabla 3 (fila de torres, comprobada celda a celda en el HTML) | Leído en el documento |
| Separador de gotas: arrastre menor del 0,002 % del caudal circulante | RD 487/2022, anexo III, parte B, punto 6 | Leído en el documento |
| Con 10 000 UFC/L o más: parar, limpiar y desinfectar | RD 487/2022, anexo VIII, tabla 8 | Leído en el documento |
| No usar el agua de refrigeración para otros menesteres | NTP 528, apartado «Refrigeración por agua» | Leído en el documento |
| El vapor da más temperatura cuanto más presión tiene | Lección `calor-vapor-intercambiadores` | No reverificado aquí; sin cifra nueva |
| Fluidos de transferencia de calor para un control más preciso y para evitar agua o vapor | NTP 528, apartado «Intercambiadores de calor» | Leído en el documento |
| Circuito cerrado de camisa mantiene mejor la transferencia de calor (base del sistema de una sola corriente) | NTP 527, medidas preventivas de «Temperatura» | Leído en el documento |
| Al pasar de vapor a agua hay que sacar antes el vapor y el condensado; riesgo de choque térmico y golpe de ariete en equipos vitrificados | Artículo de un fabricante de sistemas de calentamiento de camisas (hydro-thermal.com, «Jacketed Reactor Temperature Control») | Fragmento de buscador; fuente comercial |
| Mecanismo del golpe de ariete (el vapor condensa de golpe y el agua ocupa el hueco) | Física de libro de texto | Razonamiento |
| Choque térmico del vitrificado | Lección `reactor-a-fondo` | Enlace a contenido ya publicado |
| Causas de pérdida de refrigeración: suministro, bomba, fallo eléctrico, válvulas, obstrucciones, congelación, fuga | NTP 527 («Temperatura») y NTP 528 («Modos de fallo») | Leído en el documento |
| Ante una alarma, la secuencia típica es interrumpir la entrada de reactivos para que no se acumulen | NTP 527, «Instrumentación y control» | Leído en el documento |
| La agitación inadecuada empeora la transferencia de calor | NTP 527 («Agitación») y NTP 528 («Modos de fallo») | Leído en el documento |
| Medidas de protección: añadir refrigerante o diluyente, despresurizar, inhibidor, vertido; requieren estar previstas en el diseño | NTP 527, «Medidas de protección» | Leído en el documento |
| Un refrigerante demasiado frío durante la adición provoca acumulación | NTP 528, «Refrigeración en un proceso discontinuo» | Leído en el documento |
| Preguntas del test: 64 000 kJ; 50 °C; 3000 kg; 38 °C; 44,8 °C; 5 m² | Cálculo | Recalculado (10 / ln 1,25 = 44,81; con ln = 0,223 sale 44,84; tolerancia del 2 %) |
| Ejemplo de planta (R-310, E-311, D-312, BN-40) y sus temperaturas | Ficticio | Cifras de ejemplo; coherentes con el balance (más salto térmico = menos caudal) |

## Lo que quería incluir y dejé fuera por no poder verificarlo

- Calor específico real de disolventes concretos (tolueno, metanol, acetona): NIST no es accesible y el buscador dio un valor dudoso. Se usa un valor de ejemplo declarado.
- Calor específico del agua glicolada y su mayor viscosidad frente al agua.
- Calor latente de vaporización de disolventes y un ejemplo numérico de carga del condensador.
- Valores típicos de U por tipo de intercambiador y factores de ensuciamiento tabulados (normas TEMA, de pago).
- El factor de corrección F de la media logarítmica para equipos de varios pasos.
- Cuántos grados por encima del bulbo húmedo se queda una torre (aproximación): solo fragmentos con cifras dispares.
- Porcentaje de agua que se evapora en una torre y un ejemplo con el calor latente del agua.
- Temperaturas máximas de uso de aceites térmicos y su inflamabilidad.
- Refrigerantes concretos, su clasificación de seguridad y el coeficiente de rendimiento típico de una enfriadora.
- Mención de ICH Q7 5.14 sobre fluidos de calefacción y refrigeración: está verificada en las fuentes de `reactor-a-fondo`, pero no releí el PDF en esta sesión.
- Límites de diferencia de temperatura del vitrificado (dependen del fabricante).
- Reserva del 150 % de refrigerante que cita la NTP 528: es un criterio de diseño, no de operación.
