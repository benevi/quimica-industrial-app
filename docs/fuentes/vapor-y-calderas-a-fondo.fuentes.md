# Fuentes de la lección `vapor-y-calderas-a-fondo`

Fecha de consulta: 20 de noviembre de 2026.

Aviso importante sobre el alcance de la verificación. En esta sesión solo se podían descargar documentos de `boe.es`, `insst.es`, `health.ec.europa.eu` y pocos dominios más. Las webs de fabricantes y manuales abiertos de vapor (Spirax Sarco, TLV, Departamento de Energía de EE. UU., guía de Fenercom) estaban bloqueadas por la red: no se pudo leer ninguna. Por eso todo lo relativo a purgadores, golpe de ariete, tipos de caldera, tratamiento de agua y revaporizado cualitativo está marcado como **fragmento de buscador** (solo se vio el resumen que devuelve la herramienta de búsqueda, no la página). Conviene releer esas filas en la fuente original cuando haya acceso.

## Documentos leídos de verdad (descargados y leídos en texto)

| Clave | Documento | URL |
|---|---|---|
| RD809 | Real Decreto 809/2021, Reglamento de equipos a presión, texto consolidado (última actualización publicada el 03/09/2025): artículo 9 del Reglamento; ITC EP-1 entera hasta el artículo 13 (artículos 1 a 13) y sus anexos I (comienzo), II y III | https://www.boe.es/buscar/act.php?id=BOE-A-2021-16407 |
| INSST-EP | INSST, documento divulgativo «Equipos a presión» (instalaciones, 2023): apartados sobre operador de caldera, mantenimiento, inspecciones y anexo de tipos de calderas | https://www.insst.es/documents/d/portal-insst/11-instalaciones-equipos-a-presion-2023 |
| NTP342 | INSST, NTP 342 «Válvulas de seguridad (I): características técnicas» (definición de válvula de seguridad; es de 1994 y cita reglamentación antigua) | https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/10-serie-ntp-numeros-331-a-365-ano-1995/ntp-342-valvulas-de-seguridad-i-caracteristicas-tecnicas |
| ANEXO1 | EudraLex, volumen 4, anexo 1 «Manufacture of Sterile Medicinal Products» (2022), puntos 6.16 y 6.17 | https://health.ec.europa.eu/document/download/e05af55b-38e9-42bf-8495-194bbf0b9262_en?filename=20220825_gmp-an1_en_0.pdf |
| IF97 | Biblioteca python `iapws` (implementación de IAPWS-IF97), instalada en un entorno temporal. Script: `src_vapor/calc.py`; comprobación automática de la tabla: `src_vapor/check.py` | https://pypi.org/project/iapws/ |

Comprobación de la biblioteca: a 1,01325 bar da 99,97 °C (el punto de ebullición normal en la escala ITS-90 es 99,974 °C, que se redondea a 100) y un calor latente de 2256,5 kJ/kg; a 10 bar a da 179,89 °C y 2014,4 kJ/kg, que coinciden con las tablas de vapor habituales (179,88 °C; 2014,6 kJ/kg, valores recordados de tablas impresas, no releídos hoy).

## Afirmación por afirmación

| Fórmula, dato o afirmación de la lección | Fuente | Cómo se comprobó |
|---|---|---|
| Calor sensible y calor latente; el termómetro se para al hervir | Física básica; RD809, ITC EP-1, anexo II, punto 1 (lista «cambios de estado, vaporización y condensación», «calor específico») | Descripción general; el anexo solo confirma que son conceptos del temario oficial |
| Q = m × cp × ΔT; cp del agua 4,18 kJ/(kg·K) | Valor dado en el encargo y en la lección `calor-vapor-intercambiadores`; cálculo IAPWS-IF97 | Recalculado: cp medio del agua entre 20 y 100 °C a 1 atm = 4,19 kJ/(kg·K) |
| Calor latente del agua a presión ambiente: 2257 kJ/kg | Cálculo IAPWS-IF97 | Recalculado (2256,5) |
| 1 kg de agua de 20 a 100 °C: 334,4 kJ; evaporarlo: 2257 kJ; cociente 6,7 | Cálculo | Recalculado (4,18 × 80 = 334,4; 2257 / 334,4 = 6,75) |
| El vapor cede el calor a temperatura constante mientras condensa | Física del cambio de estado; fragmento de buscador (guía de Atlas Copco: «pressure controls temperature») | Descripción general + fragmento de buscador |
| «Cada kilo que condensa deja unos 2100 kJ a las presiones habituales» | Cálculo IAPWS-IF97 (tabla: de 2225 a 1999 kJ/kg entre 0,5 y 10 bar g) | Recalculado |
| Definiciones de vapor saturado, húmedo y sobrecalentado | Termodinámica básica; RD809, ITC EP-1, anexo II, punto 1.f (los nombra) | Descripción general |
| Para calentar se usa vapor saturado; el sobrecalentado debe enfriarse antes de condensar y cede peor el calor; se usa para turbinas | Forbes Marshall, «Why saturated steam is better for heat transfer than superheated steam»; Wikipedia, «Superheated steam» | **Fragmento de buscador** |
| Título del vapor: 5 % de agua = título 0,95 | Guía de vapor de Atlas Copco; ANEXO1, punto 6.17 (nombra «dryness value (dryness fraction)» y «superheat» como parámetros del vapor puro) | Fragmento de buscador para la definición; el nombre, leído en el anexo 1 |
| 0,95 × 2133 = 2026 kJ/kg | Cálculo | Recalculado (2026,35) |
| Absoluta = manométrica + atmosférica; atmósfera normal 1,013 bar | Definición (1 atm = 1,01325 bar) | Valor de definición; la tabla usa 1,01325 |
| Tabla de vapor (0; 0,5; 1; 2; 3; 4; 6; 8; 10 bar g): presión absoluta, temperatura de saturación y calor latente | Cálculo IAPWS-IF97 | Recalculado; `check.py` compara cada fila del archivo .ts con el cálculo y todas coinciden |
| Camisa a 140 °C: 2 bar g no llega (133,7 °C), hace falta 3 bar g (143,7 °C) | Cálculo IAPWS-IF97 | Recalculado |
| Confundir 3 bar g con 3 bar a es equivocarse en 10 grados | Cálculo IAPWS-IF97 (3 bar a: 133,5 °C; 3 bar g: 143,7 °C) | Recalculado (diferencia 10,2) |
| m de vapor = Q / calor latente | Balance de energía | Deducción |
| Ejemplo 1: 1500 kg, cp 2,0, de 20 a 70 °C: 150 000 kJ; 70,3 kg de vapor a 3 bar g | cp = 2,0 kJ/(kg·K) es **valor de ejemplo declarado** (dentro del rango 1,7–2,5 que da la lección anterior); resto, cálculo | Recalculado (70,32) |
| Ejemplo 2: 400 kg/h, calor latente 400 kJ/kg: 160 000 kJ/h; 74,0 kg/h de vapor a 2 bar g | 400 kJ/kg es **valor de ejemplo declarado** (no corresponde a un disolvente concreto); resto, cálculo | Recalculado (73,97) |
| Ejemplo 3: 800 kg de agua de 15 a 80 °C: 217 360 kJ; 101,9 kg de vapor a 3 bar g | Cálculo | Recalculado (101,90) |
| El consumo real es mayor (metal del equipo, pérdidas) | Razonamiento físico | Descripción general, sin cifra |
| Piezas del circuito: caldera, colector, reductora, equipo consumidor, retorno, depósito de alimentación | Descripción general. RD809, ITC EP-1, artículo 4 y anexo III (nombran «equipos consumidores» y «tubería de distribución»); anexo II, punto 7.e («recuperación de condensados») y 6.i («bombas de agua de alimentación») | Descripción general; los nombres, leídos en el documento |
| Tuberías inclinadas en el sentido del flujo, con puntos de purga en los puntos bajos | vaporparalaindustria.com, «Golpe de ariete en tuberías de vapor» y «Sistema de purga de líneas de vapor» | **Fragmento de buscador** |
| Calorifugado: forma parte de la revisión anual | RD809, artículo 9.5.a | Leído en el documento |
| Válvula de seguridad: evacua fluido para que no se sobrepase la presión del elemento protegido | NTP342, definiciones | Leído en el documento |
| La válvula de seguridad va precintada | RD809, artículo 9.5.e («precintado y ausencia de fugas») | Leído en el documento |
| El purgador descarga condensado y aire sin dejar escapar vapor | Guía CAPP 2026 sobre golpe de ariete; vaporparalaindustria.com | **Fragmento de buscador** |
| Tres familias de purgadores: mecánicos (densidad; boya y cubeta invertida; descargan en cuanto se forma el condensado), termostáticos (temperatura; cápsula o bimetal; descargan condensado algo enfriado), termodinámicos (un disco, descarga intermitente, compactos y robustos) | vaporparalaindustria.com (tres artículos sobre tipos de purgadores); página de producto de Spirax Sarco «Thermodynamic steam traps» | **Fragmento de buscador**. El detalle de la cubeta invertida (flota con vapor y cierra; se hunde con agua y abre) y la frase «el vapor pasa mucho más deprisa que el agua» son descripción general del principio, no leída en una fuente |
| Purgador que falla abierto: pasa vapor vivo al retorno, pérdida continua y poco visible; misma temperatura antes y después; soplido | Spirax Sarco, «What happens when steam traps fail»; Bell & Gossett (Xylem), «When a steam trap failed open»; Forbes Marshall | **Fragmento de buscador** |
| Purgador que falla cerrado: no saca condensado, el equipo se inunda y calienta mal; origen de golpes de ariete | Las mismas | **Fragmento de buscador** |
| El condensado se devuelve porque es agua casi pura, ya tratada y caliente | DOE, Steam Tip Sheet n.º 8 «Return condensate to the boiler»; Spirax Sarco, «Introduction to condensate recovery» | **Fragmento de buscador** |
| Revaporizado: de 3 bar g a presión ambiente, (605 − 419) / 2257 = 8 % | Cálculo IAPWS-IF97 (entalpía del líquido saturado 605,2 y 419,0 kJ/kg) | Recalculado (8,25 %) |
| Golpe de ariete: el condensado acumulado forma un tapón que el vapor arrastra a su velocidad | vaporparalaindustria.com, «Golpe de ariete en tuberías de vapor: causas y efectos» | **Fragmento de buscador** |
| El golpe de ariete ha causado accidentes mortales; se evita calentando la línea poco a poco y drenando el condensado antes | Resumen del buscador sobre un accidente mortal de 1986 (guía CAPP 2026 y documento «Steam safety» de Yale EHS) | **Fragmento de buscador** |
| Purgar antes, abrir despacio, pendientes y purgadores | Las anteriores; lección `calor-vapor-intercambiadores` | **Fragmento de buscador** |
| «Si oyes golpes, no sigas abriendo. Cierra despacio y avisa» | Consejo de prudencia | Descripción general, sin fuente |
| Caldera pirotubular: gases por dentro de tubos sumergidos en agua; acuotubular: agua por dentro de los tubos; la pirotubular contiene mucha más agua | Apuntes de la UTN (Argentina) e informe técnico de Bosch Industriekessel. La ITC EP-1 (artículo 3) usa los dos nombres | **Fragmento de buscador**; los nombres, leídos en RD809 |
| Con nivel bajo los tubos o el hogar quedan al descubierto y se sobrecalientan; la mayoría de los accidentes graves están ligados a un nivel bajo de agua | Blog técnico de Bosch, «¿Qué pasa si una caldera se queda sin agua?» | **Fragmento de buscador** |
| Una caldera lleva indicadores y controles de nivel, presostatos y válvulas de seguridad | RD809, ITC EP-1, anexo II, punto 6 (c, f, g, m) | Leído en el documento (la lista); lo que hace cada uno es descripción general |
| La cal forma incrustación que aísla y recalienta el metal; el oxígeno disuelto pica el acero | Chemical Engineering, «Treating boiler feedwater for reliable operation»; Power Magazine | **Fragmento de buscador** |
| Descalcificación, desgasificación térmica y por aditivos, purgas | RD809, ITC EP-1, anexo II, punto 7 (b, c, f) y artículo 8 | Leído en el documento (los nombres y la obligación); el porqué de la purga (las sales se concentran), fragmento de buscador |
| Conducción confiada a personal capacitado, instruido por fabricante, instaladora o usuario | RD809, ITC EP-1, artículo 13.1 | Leído en el documento |
| La empresa designa a una persona capacitada para operar la caldera mientras funciona | RD809, ITC EP-1, artículo 12.1 | Leído en el documento |
| Calderas de clase segunda de vapor (o agua sobrecalentada): operador u operadora industrial de calderas | RD809, ITC EP-1, artículo 13.3.1; confirmado en INSST-EP | Leído en el documento |
| La clase depende del tipo de caldera y del producto presión máxima de servicio × volumen | RD809, ITC EP-1, artículo 3 (clase primera: pirotubulares con Pms × VT < 15 000; acuotubulares < 50 000) | Leído en el documento |
| Cartel de prohibición de entrada a personal ajeno en los accesos | RD809, ITC EP-1, artículo 6.2.d | Leído en el documento |
| Tratamiento de agua eficiente y régimen de controles, purgas y extracciones | RD809, ITC EP-1, artículo 8 | Leído en el documento |
| Inspecciones: nivel A, 1 año; nivel B, 3 años; nivel C, 6 años (máximos); nivel C por organismo de control | RD809, ITC EP-1, artículo 9 (tabla; se comprobó en el HTML original) | Leído en el documento |
| Libro de la instalación y su contenido | RD809, ITC EP-1, artículo 12.4.a y anexo III | Leído en el documento |
| Revisión anual: calorifugado, fugas, manómetros, precinto de válvulas de seguridad, purga de condensados | RD809, Reglamento, artículo 9.5 | Leído en el documento |
| Vapor puro: generador alimentado con agua purificada, sin aditivos; condensado conforme a la monografía de agua para inyectables cuando esteriliza superficies en contacto con el producto | ANEXO1, puntos 6.16 y 6.17 | Leído en el documento |
| Vapor industrial: lleva productos de tratamiento y solo se usa encerrado en camisas e intercambiadores | Descripción general (no leída en una fuente) | Descripción general |
| El vapor es un gas invisible; la nube blanca son gotas condensadas; una fuga a presión se oye antes de verse | Encyclopaedia Britannica, «Steam»; documento de BP «Hazards of steam» | **Fragmento de buscador** |
| 1 kg de vapor al condensar deja 2257 kJ; 1 kg de agua de 100 a 40 °C deja 251 kJ; nueve veces menos | Cálculo | Recalculado (4,18 × 60 = 250,8; 2257 / 250,8 = 9,0) |
| Una línea a 3 bar g está a 144 °C | Cálculo IAPWS-IF97 | Recalculado (143,7) |
| Qué hacer ante una fuga; no aflojar bridas con presión | Buena práctica general | Descripción general, sin fuente normativa |
| Pasos del operador y contenido de la hoja de producción | Coherente con las lecciones del nivel 11 y 12 de la app | Descripción general; ejemplo ficticio |
| Ejemplo de planta (R-310, LM-42, PI-310, TI-310, PG-310; 40 y 25 minutos; de 20 a 31 °C) | **Valores de ejemplo declarados**, ficticios | — |
| Preguntas del test: 125,4 MJ; 6771 kJ; 67,5 kg; 46,2 kg/h; 1919,7 kJ/kg | Cálculo | Recalculado (500 × 4,18 × 60; 3 × 2257; 144 000 / 2133 = 67,51; 100 000 / 2163 = 46,23; 0,90 × 2133) |

## Lo que quería incluir y dejé fuera por no poder verificarlo

- **Cifras de diseño de líneas de vapor**: pendiente recomendada, distancia entre puntos de purga (el buscador daba «cada 30 a 50 m» de una sola web) y velocidades del vapor en tubería.
- **Segunda forma del golpe de ariete** (bolsa de vapor que colapsa entre condensado frío): solo aparecía en un fragmento y la quité.
- **Cuánto se enfría el condensado antes de que abra un purgador termostático** (el buscador decía «entre 15 y 30 °C por debajo»): sin fuente leída.
- **Porcentaje de purgadores que fallan y coste del vapor perdido**: cifras de páginas comerciales.
- **Altura mínima del nivel de agua, tarado de presostatos y de válvulas de seguridad** (la NTP 342 cita porcentajes de una reglamentación derogada).
- **Parámetros del agua de caldera** (dureza, pH, conductividad, oxígeno): están en las normas UNE-EN 12953-10 y 12952-12, que son de pago.
- **Detalle de las inspecciones de nivel A, B y C** según la norma UNE 192011-1, de pago. Solo se da la periodicidad que figura en el BOE.
- **Límites exactos de clase primera y segunda** en el cuerpo de la lección: están leídos (fila de la tabla), pero no se incluyeron para no cargar al lector; se pueden añadir.
- **Calores específicos y calores latentes de disolventes concretos** (tolueno, etanol, isopropanol): no había acceso a una base de datos fiable (NIST bloqueado). Se usan valores de ejemplo declarados.
- **Volumen del vapor** (1 kg a presión ambiente ocupa 1,67 m³, unas 1600 veces el del agua): sí está calculado con IAPWS-IF97, pero se quitó por longitud.
- **Vacío en la camisa al cerrar el vapor**, reductoras que dejan el vapor ligeramente sobrecalentado, economizadores, desgasificador térmico en detalle, arrastres de agua de caldera y vapor culinario o filtrado: sin fuente leída.
- **Definición oficial de «vapor industrial»**: no encontrada en un documento accesible; se da como descripción general.
- **Coeficientes de transmisión de calor** del vapor saturado frente al sobrecalentado: solo afirmaciones cualitativas de páginas comerciales.
