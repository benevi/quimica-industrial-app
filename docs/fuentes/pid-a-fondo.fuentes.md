# Fuentes de la lección `pid-a-fondo`

## Aviso importante sobre el alcance de la verificación

- **control.com (libro de Kuphaldt) no se pudo leer.** `curl` con cabeceras de navegador devuelve 403 (página de desafío de Cloudflare) y la herramienta de lectura web no resuelve el host. Tampoco es accesible la copia en PDF de ibiblio.org (host fuera de la red permitida). Por tanto, **todo lo que procede de ISA-5.1 / Kuphaldt en esta lección está comprobado solo por fragmentos del buscador**, no leyendo el documento.
- La norma ISA-5.1 es de pago y no se ha consultado.
- Lo leído de verdad, entero o en el apartado citado: ICH Q7 (PDF), EudraLex vol. 4 anexo 15 (PDF), NTP 342, NTP 456, NTP 223, NTP 562, NTP 1117, NTP 527 (INSST), y las lecciones existentes `pid-y-simbologia` y `tuberias-y-valvulas`.
- Recomendación: antes de publicar, que alguien con acceso a https://control.com/textbook/instrumentation-documents/ (capítulos «Process and Instrument Diagrams», «Instrument and Process Equipment Symbols», «Instrument Identification Tags») y a https://control.com/textbook/control-valves/valve-failure-mode/ confirme las filas marcadas «fragmento».

## Tabla de afirmaciones

| Dato o afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| ICH Q7 5.16: debe mantenerse un juego de planos actualizados de equipos e instalaciones críticas (p. ej. instrumentación y sistemas de servicios) | https://database.ich.org/sites/default/files/Q7%20Guideline.pdf, 5.16: «A set of current drawings should be maintained for equipment and critical installations (e.g., instrumentation and utility systems)» | Leído en el documento |
| ICH Q7 4.20: debe haber planos de los sistemas de servicios | Mismo PDF, 4.20: «Drawings for these utility systems should be available» | Leído en el documento |
| ICH Q7 13.10 y 13.11: sistema formal de control de cambios que cubre instalaciones, sistemas de apoyo y equipos | Mismo PDF, 13.10 y 13.11 | Leído en el documento |
| ICH Q7 13.14: al implantar un cambio aprobado se revisan todos los documentos afectados | Mismo PDF, 13.14 | Leído en el documento. Que el P&ID sea «uno de ellos» es deducción propia (Q7 no nombra el P&ID) |
| Al cualificar se verifica la instalación de tuberías e instrumentación conforme a los planos | EudraLex vol. 4, anexo 15, 3.9 i (copia descargada de health.ec.europa.eu en `src_val/annex15.pdf`): «Verification of the correct installation of components, instrumentation, equipment, pipe work and services against the engineering drawings and specifications». Coherente con ICH Q7 12.30 (IQ) | Leído en el documento |
| La lección de control de cambios existe con slug `cambios-y-riesgos-a-fondo` (nivel 16) y título «Control de cambios y gestión de riesgos a fondo…»; no existe un slug `control-de-cambios` | `src/content/nivel16-cambios.ts` y `src/content/nivel16.ts` (`capa-y-control-de-cambios`) | Leído en el repo |
| Válvula de seguridad: alivia el exceso de presión descargando fluido | INSST NTP 342, https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/10-serie-ntp-numeros-331-a-365-ano-1995/ntp-342-valvulas-de-seguridad-i-caracteristicas-tecnicas | Leído en el documento. «Vuelve a cerrar cuando baja la presión» es conocimiento general coherente con la NTP 456, que define el disco por contraste como dispositivo «sin cierre repetido» |
| Con fluidos peligrosos la descarga va canalizada a un lugar seguro y controlado | NTP 342: «la descarga debería estar canalizada y llevada hacia un lugar seguro y controlado, a una antorcha en caso de inflamables y a neutralización en el caso de tóxicos» | Leído en el documento. «Depósito de recogida TK-490» es ejemplo ficticio |
| No debe haber válvula de cierre entre el equipo y su válvula de seguridad | NTP 342: «Se evitará en lo posible instalar una válvula de cierre entre un aparato o sistema y su válvula de seguridad» | Leído en el documento |
| Disco de ruptura: no vuelve a cerrar; hay que parar y reponerlo | INSST NTP 456, https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/13-serie-ntp-numeros-436-a-470-ano-1998/ntp-456-discos-de-ruptura-i-caracteristicas («dispositivos de alivio de presión sin cierre repetido»; «imposibilidad de nuevo cierre y la necesidad de detención del proceso en caso de ruptura, para la reposición») | Leído en el documento |
| Disco montado aguas arriba de la válvula de seguridad para protegerla del producto | NTP 456 («si las condiciones del proceso son agresivas… es preferible un disco de ruptura aguas arriba de la válvula de seguridad») | Leído en el documento |
| Un fallo del aire de instrumentos mueve varias válvulas de control a la vez | NTP 456: «el fallo del aire de instrumentación que da lugar al movimiento simultáneo de dos o más válvulas de control» | Leído en el documento |
| Perder la refrigeración es causa clásica de reacción fuera de control | INSST NTP 527 (copia en `src_calor/dl/ntp527.txt`): «pérdida de la capacidad refrigerante del sistema», «pérdida del suministro del refrigerante» | Leído en el documento |
| Cortar la adición de reactivo como acción segura | NTP 527: «Debería existir una interconexión de la válvula de cierre de reactivos con el agitador, con el fin de detener la adición de reactivos cuando ocurra un fallo» | Leído en el documento. La asignación FC a la válvula de adición es razonamiento propio apoyado en esto y en la lección `tuberias-y-valvulas` |
| Aislamiento: separar, bloquear, disipar la energía o el producto retenido y verificar | INSST NTP 1117 (copia en `src_perm/dl/p1117.txt`), los cuatro pasos de la consignación | Leído en el documento (la NTP trata de máquinas; aquí se aplica como idea general) |
| Para entrar en un equipo se colocan bridas ciegas en las tuberías | INSST NTP 223 (copia en `src_perm/dl/p223.txt`): «es preciso instalar bridas ciegas en las tuberías, incluidas las de los circuitos de seguridad»; NTP 562, lista de comprobación («Colocadas bridas ciegas en entrada de productos») | Leído en el documento |
| Primera letra = variable medida; siguientes = función; modificador entre ambas | Fragmentos del buscador sobre el capítulo «Instrument Identification Tags» de Kuphaldt (control.com) y guías de ISA-5.1 (instrumentationblog.in, tagsight.io, merobix.com, apéndice de Seborg en skoge.folk.ntnu.no) | Fragmento de buscador |
| Primeras letras A análisis, E tensión, F caudal, L nivel, P presión, Q cantidad, S velocidad, T temperatura, W peso | Mismas guías (resumen del buscador: «A Analysis», «E Voltage», «F Flow rate», «L Level», «P Pressure/Vacuum», «Q Quantity», «S Speed, frequency», «T Temperature», «W Weight, force») | Fragmento de buscador. Coincide con la lección existente `pid-y-simbologia` (T, P, L, F, W, A, S) |
| Letras siguientes I indicador, R registrador, C controlador, T transmisor, A alarma, S interruptor, V válvula, E elemento primario, Y relé/cálculo/conversión; H, L, HH, LL | Mismas guías («I (indicate), R (record), C (control), T (transmit), Y (relay/compute)», «E Sensor (primary element)», «H (high), L (low) or HH and LL») | Fragmento de buscador. V = válvula e I, T, C, A, S, E coinciden con la lección existente |
| Modificadores D diferencial, Q totalizador, S seguridad | Mismas guías («D for differential… Q for totalizing, S for safety») | Fragmento de buscador |
| Z posición, X sin clasificar (XV) | Lección existente `pid-y-simbologia` | Leído en el repo; no reverificado en fuente externa |
| Etiquetas descifradas TE, TT, TIC, TR, TAH, TV, PT, PIC, PDI, LT, LSHH, FT, FQI, PSV | Aplicación letra a letra de la tabla anterior; el buscador confirmó expresamente FIC, PDT, TAH, LSHH y FQI | Fragmento de buscador más deducción |
| PSE = disco de ruptura; RD como alternativa | Resumen del buscador («PSE is consistently listed as the rupture disc tag») | Fragmento de buscador |
| TV se llama T aunque lleve vapor; TCV/FCV como costumbre | Lección existente `pid-y-simbologia` (caso FV/FCV) | Leído en el repo |
| Todos los instrumentos de un lazo comparten número; otro número = otro sistema | Fragmento del capítulo «Process and Instrument Diagrams» de Kuphaldt (ejemplo del lazo 42) | Fragmento de buscador |
| El P&ID no lleva el cableado de cada instrumento, que va en otros documentos | Mismo fragmento («cable types, wire numbers, terminal blocks… are not shown on the P&ID» y pasan al diagrama de lazo) | Fragmento de buscador |
| Sufijos A y B para dos elementos del mismo lazo | Práctica habitual; no localizada en fuente leída | Sin fuente leída; convención presentada como ejemplo del plano ficticio |
| Diagrama de bloques, PFD y P&ID: qué lleva cada uno | Lección existente `pid-y-simbologia`; fragmentos de guías (projectmaterials, capítulo 7 de ISA en isa.org) | Leído en el repo y fragmento de buscador |
| El P&ID no está a escala | Conocimiento general de ingeniería | Sin fuente leída |
| Círculo (campo), círculo con raya (panel o sala), círculo en cuadrado (función del sistema de control); señal eléctrica a trazos | Lección existente `pid-y-simbologia`. Los fragmentos del buscador dan versiones que no coinciden del todo entre guías, por eso el texto remite a la leyenda | Leído en el repo; no reverificado |
| La leyenda distingue señal neumática y tubo capilar con trazos propios | Fragmento del apartado «Line types» de Kuphaldt (lista «Pneumatic signal», «Electric signal», «Capillary tube») | Fragmento de buscador. No se describe el trazo de cada una porque no se pudo ver |
| Válvula dibujada como dos triángulos unidos por la punta; detalle interior según tipo; actuador dibujado encima; bomba como círculo con salida | Fragmentos de guías de símbolos (projectmaterials y otras) | Fragmento de buscador |
| FC, FO, FL; indicación con letras o con flecha; la que necesita aire para abrir cierra al fallar; FL exige un dispositivo que atrape el aire | Fragmento de la reproducción (CC BY) del texto de Kuphaldt «Valve Failure Modes» en el blog de Kinetrol, y otras guías | Fragmento de buscador. FC/FO/FL coinciden con la lección existente `tuberias-y-valvulas` |
| Posiciones de fallo habituales: vapor FC, agua de refrigeración FO, adición de reactivo FC, venteo FO | Lección existente `tuberias-y-valvulas` (misma tabla); razonamientos apoyados en NTP 527 | Leído en el repo y en la NTP; presentado como «habitual, no ley» |
| NC, NO, LO, LC | Resumen del buscador de guías de abreviaturas de P&ID | Fragmento de buscador |
| Contenido habitual de un número de línea (diámetro, fluido, número, clase, aislamiento); cambia en cada empresa | Fragmentos de guías (projectmaterials «line designation», instrumentationtoolbox) | Fragmento de buscador |
| Ejemplo 50-DS-4012-A1-N | Valor de ejemplo declarado | Inventado y declarado en el texto |
| Flechas de flujo, conectores entre hojas, límites de batería | Conocimiento general; términos habituales en las guías citadas | Sin fuente leída (el buscador no los confirmó de forma expresa) |
| Dibujo del reactor con camisa, agitador y condensador | Fragmento de guías (recipiente agitado como depósito con eje o motor); descripción genérica | Fragmento de buscador más descripción propia; remite a la leyenda |
| Reactor R-401 y todas sus etiquetas (TE/TT/TIC/TAH/TV-401A/B, PT/PIC/PV-402, LT/LI/LSHH-403, PSE/PSV-404, FT/FQI/XV-405, PDI-407, XV-406, V-405 a V-414, P-401, E-401, F-407, C-501, TK-490), producto MT-22, 800 L de etanol | Valor de ejemplo declarado | Ficticio y declarado; esquema simplificado (se dice en el texto) |
| Recorrer la línea antes de la maniobra (walk the line) | Fragmentos sobre el programa «Walk the Line» de AFPM y las hojas Beacon del CCPS | Fragmento de buscador; no se usa ninguna cifra |
| Doble bloqueo y purga: dos válvulas cerradas y purga entre ambas | Fragmentos sobre la guía HSG253 del HSE e IChemE | Fragmento de buscador; solo como idea |
| «As built» = plano conforme a lo construido | Término de uso general | Sin fuente leída |
| Preguntas numéricas: 6 etiquetas del lazo 401; 4 válvulas abiertas | Cálculo | Recontado a mano sobre las listas del enunciado |

## Lo que quería incluir y dejé fuera por no poder verificarlo

- El trazo exacto de cada línea de señal (neumática con rayas dobles, capilar con aspas, enlace de datos): no se pudo ver la figura de Kuphaldt.
- La forma de cada símbolo de actuador (membrana, pistón, motor, solenoide) y de cada tipo de válvula (bola, globo, mariposa, retención): las guías del buscador no coinciden.
- Las variantes del círculo (raya doble, raya discontinua, hexágono, rombo para PLC o enclavamientos).
- Otras primeras letras de ISA-5.1 (H manual, I corriente, J potencia, K tiempo, etc.) y el uso de F como modificador «relación».
- Marcas de precinto (CSO, CSC) y la posición de fallo «indeterminada» (FI).
- La forma oficial de la norma para la válvula de control (FV frente a FCV) más allá de lo que ya dice la lección previa.
- Cifras del programa «Walk the Line» (porcentaje de incidentes por errores de alineamiento): solo fragmento, y los fragmentos no se usan para cifras.
- Las categorías de aislamiento de la guía HSG253 del HSE.
- NTP 238 (HAZOP): el PDF descargado no era legible; no se cita.
- La obligación de «as built» en una norma concreta: no localizada; solo se cita ICH Q7 5.16 y 4.20 y el anexo 15.
