# Fuentes: capa-fina-a-fondo

Documentos leídos (copias y descargas en `scratchpad/lecciones/tmp-capafina/dl/`; cálculos en `tmp-capafina/calc/c.py`):

- **ORA IV-03**: FDA, *ORA Lab Manual Vol. IV Section 3 - Drug Chemistry Analysis* (MAN-000056, rev. 03, 7 oct. 2022), https://www.fda.gov/media/73554/download. Leídos: 8.4.7 (TLC: objetivo, temario, ejercicios, preguntas), respuestas 6.4.7 C, muestras de formación (Attachment A, productos 1 y 5) y Attachment E (cuadro comparativo de cromatografías; es una imagen: se renderizó la página 63 y se leyó).
- **BOE 1977**: Orden de 31 de enero de 1977, métodos oficiales de análisis (BOE-A-1977-16116, texto consolidado), https://www.boe.es/buscar/act.php?id=BOE-A-1977-16116. Leídos: método 34 de grasas (separación de β-monoglicéridos por capa fina) y método 41 de vinos (conservadores: capa fina de poliamida, cámara saturada, 360 nm, reveladores).
- **BOE 1979**: Orden de 31 de julio de 1979 (BOE-A-1979-21118, texto consolidado), https://www.boe.es/buscar/act.php?id=BOE-A-1979-21118. Leídos enteros: grasas, método 43 (ésteres no glicéridos) y método 45 (antioxidantes, tabla de Rf); productos cárnicos, método 4 (conservadores, tabla de Rf con dos eluyentes).
- **Reglamento (CEE) 2568/91**, DO L 248 de 5.9.1991, en la copia del BOE https://www.boe.es/doue/1991/248/L00001-00083.pdf. PDF escaneado sin texto: se renderizaron y leyeron como imagen las páginas 2, 16 (cabecera), 17 y 18 (anexo V, apartado 5.2 y notas 2 y 3).
- **ICH Q7** (GMP de API), https://database.ich.org/sites/default/files/Q7%20Guideline.pdf: 8.20, 8.30 a 8.36, 19.80.
- **ICH Q3A(R2)**, apartado 4 (técnicas de menor precisión, TLC).
- **ICH Q3C(R8)**, apartado 4.1 y tabla 1 (benceno, clase 1).
- **ICH Q6A**: ya resumida en `identificacion-quimica-a-fondo`; aquí solo se remite a ella.
- **EMA/HMPC/CHMP/CVMP/162241/2005 Rev. 3** (18 ene. 2022), *Guideline on specifications ... herbal substances*, https://www.ema.europa.eu/en/documents/scientific-guideline/guideline-specifications-test-procedures-and-acceptance-criteria-herbal-substances-herbal-preparations-and-herbal-medicinal-productstraditional-herbal-medicinal-products-revision-3_en.pdf: apartado de identificación.
- **FDA, Guide to Inspections: Validation of Cleaning Processes (7/93)**, https://www.fda.gov/validation-of-cleaning-processes-793 (copia HTML ya descargada en la sesión).
- **WHO TRS 1019, anexo 3** (validación; apéndice 3, limpieza): 10.5 y 11.3.
- **WHO TRS 957, anexo 1** (buenas prácticas de laboratorios de control de calidad): apartado de registro de sustancias de referencia (cita las de TLC) y tabla de equipos.
- **WHO TRS 1033, anexo 4** (integridad de datos): 9.2 y 9.3.
- **ICSC** (OIT/OMS, versión española del INSST), https://chemicalsafety.ilo.org/dyn/icsc/showcard.display?p_version=2&p_card_id=XXXX&p_lang=es: 0279 n-hexano, 0367 acetato de etilo, 0362 ácido sulfúrico.
- **INSST NTP 433** (Prevención del riesgo en el laboratorio: instalaciones, material y equipos), ficha HTML.
- **Kuphaldt**, *Lessons in Industrial Instrumentation*, «Chromatography», https://control.com/textbook/continuous-analytical-measurement/chromatography/.
- **NIST Chemistry WebBook**: galato de propilo (C10H12O5, propil 3,4,5-trihidroxibenzoato) y BHT (C15H24O, 2,6-di-terc-butil-4-metilfenol).

## Tabla de afirmaciones

| Afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| La TLC es una forma de cromatografía plana (*planar chromatography*) | ORA IV-03, 8.4.7 A | Leído |
| La cromatografía nació separando pigmentos de plantas (Tswett); el nombre significa «escribir con colores» | Kuphaldt, «Chromatography» | Leído |
| Analogía de la tinta en papel de cocina | Valor de ejemplo / analogía propia | Analogía didáctica, sin cifras |
| Fase estacionaria: capa fina, uniforme y seca de adsorbente en polvo fino, como gel de sílice o celulosa, sobre vidrio, plástico o metal | ORA IV-03, Attachment E | Leído (imagen) |
| Tipos de placa: gel de sílice (aglutinantes, aditivos fluorescentes), celulosa, HPTLC | ORA IV-03, 8.4.7 A.2 | Leído |
| Placas de gel de sílice G de 20 × 20 cm y 0,25 mm; 0,40 mm para más resolución | BOE 1977 método 34.2.8; BOE 1979 grasas 43.2.1, 45.2.1 y 45.6.1 | Leído |
| Placas de poliamida con soporte de aluminio e indicador de fluorescencia | BOE 1979 cárnicos 4.2.10; BOE 1977 vinos 41.3.10 | Leído |
| Separación por adsorción, reparto o ambos | ORA IV-03, Attachment E | Leído (imagen) |
| Sílice polar; lo polar se retiene y lo apolar sube con eluyente poco polar | Principio general: solo en fragmentos de buscador (apuntes universitarios); apoyado por los ejemplos oficiales siguientes y por la lección «Enlaces y fuerzas entre moléculas a fondo» | Fragmento de buscador + coherencia con los datos oficiales |
| Galatos (Rf 0,14-0,35) cerca del origen; BHT Rf 0,98 | BOE 1979 grasas 45.6.3 | Leído |
| Galatos con tres OH; BHT con un solo OH entre dos terc-butilos | NIST WebBook (nombres sistemáticos) | Leído |
| Placas básicas: inmersión 10 s en KOH etanólica 0,2 N; los compuestos ácidos quedan en la línea de aplicación | Reg. 2568/91 anexo V, 5.2.1 y nota 2 | Leído (imagen) |
| Activación: 2 h al aire en campana, 1 h en estufa a 100 °C, desecador, uso en 15 días como máximo | Reg. 2568/91 anexo V, 5.2.1 | Leído (imagen) |
| «Placa previamente activada» | BOE 1979 grasas 45.4.2 | Leído |
| Eluyente hexano-éter etílico 92:8 | BOE 1979 grasas 43.3.3 | Leído |
| Benceno-acetona 95:5 o hexano-éter etílico 65:35 | Reg. 2568/91 anexo V, 5.2.2 | Leído (imagen) |
| Eluyentes 1 (pentano, hexano, acético 10:10:3) y 2 (benceno, acetato de etilo, acético 85:10:5) | BOE 1979 cárnicos 4.3.8 | Leído |
| Preparar el eluyente justo antes de usar | BOE 1979 grasas 45.3.12 | Leído |
| Cambiar la mezcla en cada prueba «para que las condiciones de elución sean perfectamente reproducibles» | Reg. 2568/91 anexo V, nota 3 | Leído (imagen) |
| Benceno en clase 1 de ICH Q3C, disolventes que se deben evitar; motivo: cancerígeno | ICH Q3C(R8) 4.1 y tabla 1 | Leído |
| Cubeta: eluyente a ~1 cm; tapada ≥ 30 min para equilibrio líquido-vapor; tiras de papel de filtro reducen el tiempo de desarrollo casi un tercio y dan elución más uniforme; 15-20 °C | Reg. 2568/91 anexo V, 5.2.2 y 5.2.4 | Leído (imagen) |
| Desarrollo «en cámara saturada con el eluyente» | BOE 1977 vinos 41.4 | Leído |
| Explicación de por qué saturar (aire cargado de vapor, el eluyente no se evapora de la placa) y analogía del espejo del baño | Explicación propia a partir del «equilibrio líquido-vapor» del Reglamento | Deducción declarada en el texto («la idea es esta») |
| Siembra a 1 cm, 2 cm o 15 mm del borde | BOE 1979 cárnicos 4.4.2 (1 cm); BOE 1979 grasas 45.4.2 (2 cm); BOE 1977 grasas 34.4 (15 mm) | Leído |
| Manchas de no más de 1 a 2 mm | BOE 1979 cárnicos 4.4.2 | Leído |
| 2-3 µL; 10 µL de muestra y 4 µL de patrón | BOE 1979 grasas 43.4 y 45.4.2 | Leído |
| Patrones a derecha e izquierda a 10-15 mm; 10 mm libres en cada extremo | BOE 1979 grasas 45.4.2; BOE 1977 grasas 34.4 | Leído |
| Manchas por encima del líquido; líquido 5 mm por debajo | BOE 1979 grasas 45.4.2; BOE 1977 grasas 34.4 | Leído |
| Frente a ~15 cm, a 1 cm del borde superior o a dos tercios de la placa | BOE 1979 grasas 45.4.2; Reg. 2568/91 5.2.4; BOE 1979 cárnicos 4.4.2 | Leído |
| 15 cm en hora y media a dos horas | BOE 1977 vinos 41.4 | Leído |
| Secar al aire; dos o tres desarrollos | BOE 1979 grasas 43.4 | Leído |
| Términos origen, frente del disolvente y valor Rf | ORA IV-03, 8.4.7 A.1 | Leído (solo la lista de términos, sin definición) |
| Rf = distancia origen-centro de mancha / distancia origen-frente; entre 0 y 1 | Fragmentos de buscador: farmacopea de Hong Kong (apéndice IV A), glosario NIST OSAC, apuntes de la Universidad de Zaragoza; hosts bloqueados, no leídos | Fragmento de buscador; coherente con todas las tablas de Rf del BOE (valores entre 0,05 y 0,98) |
| Rf de antioxidantes NDHG 0,10; GP 0,14; GO 0,28; GD 0,35; BHA 0,75; BHT 0,98, «a título de orientación»; frente a 15 cm | BOE 1979 grasas 45.4.2 y 45.6.3 | Leído |
| Ejercicio 1: 11,25 cm; 11,2/15 = 0,75; 1,50 y 2,10 cm; 0,6 cm | Cálculo | Recalculado (0,7467 redondeado a 0,75) |
| Rf de conservadores con eluyente 1 y 2 (éster 0,21 / 0,56; salicílico 0,46 / 0,25) y «lo cual nos evita medir los Rf» | BOE 1979 cárnicos 4.4.2 y 4.5.2 | Leído |
| Ejercicio 2: frente 12,0 cm; 2,52; 5,52; 6,72; 3,00 cm | Valor de ejemplo declarado (frente) + cálculo | Recalculado |
| Localización: a simple vista con luz blanca o UV 254 nm o 360 nm; tras reactivos | ORA IV-03, respuesta 6.4.7 C.2 (cita USP <621>) | Leído |
| Aditivo fluorescente; *fluorescence quenching* | ORA IV-03, 8.4.7 A.2 y respuesta 6.4.7 C.1 | Leído |
| El aditivo brilla con 254 nm | Deducción de la denominación «F254» de los métodos (BOE 1979 cárnicos 4.2.10; BOE 1977 vinos 41.3.7) y de la lámpara de 254 nm de ORA | Deducción; no hay frase literal en las fuentes leídas |
| Ácido salicílico con fluorescencia azul bajo UV, elegido como referencia | BOE 1979 cárnicos 4.5.1 | Leído |
| Marcar con lápiz los límites de la banda bajo UV | Reg. 2568/91 anexo V, 5.2.5 | Leído (imagen) |
| Sulfúrico al 50 % y quemar a ~300 °C (placa calefactora hasta 360 °C) | BOE 1979 grasas 43.2.2 y 43.4 | Leído |
| 2,7-diclorofluoresceína y examen con UV | Reg. 2568/91 anexo V, 5.2.5 | Leído (imagen) |
| Dicloroquinona clorimida 1 % en etanol; estufa 100 °C 10-15 min; amoníaco intensifica; exceso colorea el fondo | BOE 1979 grasas 45.3.13, 45.4.2 y 45.6.2 | Leído |
| Dicromato + tiobarbitúrico, 80 °C 5-10 min, sórbico rojo sobre ocre | BOE 1977 vinos 41.3.11, 41.3.12 y 41.5 | Leído |
| Pulverizadores (*atomizers*) y lámpara UV en la lista de equipos | WHO TRS 957 anexo 1, tabla de equipos | Leído |
| TLC método cualitativo; semicuantitativo por tamaño de mancha; cuantitativo por densitometría, fluorescencia, apagamiento, o raspado, elución y espectrofotometría | ORA IV-03, respuesta 6.4.7 C.1 | Leído |
| Monografías USP: disolución de referencia de concentración baja; «NMT 2 ug» si Rf e intensidad próximos | ORA IV-03, respuesta 6.4.7 C.3 | Leído |
| Ejercicio 3 (ensayo límite): 200 µg; 0,1 mg/mL; 1 µg; 0,5 % | Valores de ejemplo declarados + cálculo | Recalculado |
| Ejercicio de siembra de 1 a 500 µL | ORA IV-03, 8.4.7 B.2 | Leído |
| Raspado de banda y análisis por GC | BOE 1977 grasas 34.1 y 34.4; Reg. 2568/91 anexo V, 5.2.6 | Leído |
| Paracetamol USP: ID A IR, B UV, C TLC <201>; solución oral: HPLC y TLC | ORA IV-03, Attachment A, productos 1 y 5 | Leído |
| Rf solo no basta como identidad específica (por analogía con el tiempo de retención) | ICH Q6A (retención sola no específica), resumida en «Identificar sustancias por sus reacciones a fondo»; EMA Rev. 3, identificación | Leído (EMA); la extensión al Rf es analogía declarada |
| EMA acepta combinación de cromatografías, p. ej. HPLC y TLC-densitometría | EMA Rev. 3, apartado c) Identification | Leído |
| ICH Q3A: técnicas de menor precisión (p. ej. TLC) aceptables si se justifican y validan | ICH Q3A(R2), apartado 4 | Leído |
| Caso FDA 1992: planta multiuso de esteroides; TLC del agua de aclarado con subproductos y degradantes; puede hacer falta cribado por TLC además del análisis químico | FDA, Validation of Cleaning Processes (7/93) | Leído |
| OMS: cribado por TLC cuando sea necesario; «high pressure thin-layer chromatography» entre métodos sensibles y específicos | WHO TRS 1019 anexo 3, apéndice 3, 10.5 y 11.3 | Leído |
| Lista de equipos OMS: equipo de TLC, *spotter*, 6 cubetas (+1), atomizadores, lámpara UV (básico); *multispotter* y *TLC scanner* (mediano) | WHO TRS 957 anexo 1, tabla de equipos | Leído |
| El escáner es un densitómetro que da un pico con área | ORA (densitometría) + explicación propia | Deducción didáctica |
| HPTLC con placas propias | ORA IV-03, 8.4.7 A.2 c («High Performance (HPTLC)» como tipo de placa) | Leído |
| TLC fácil de usar, sin automatización habitual, < 500 $; HPLC > 20 K $ | ORA IV-03, Attachment E | Leído (imagen) |
| Q7: controles menos exigentes al principio y más en aislamiento y purificación | ICH Q7 8.31 | Leído |
| Q7: IPC por personal de producción cualificado; ensayos y resultados en la hoja de producción | ICH Q7 8.33 | Leído |
| Q7: final de la reacción decidido por muestreo y análisis en proceso cuando se trabaja hasta un objetivo | ICH Q7 8.20 | Leído |
| Q7: métodos de lotes clínicos quizá no validados pero científicamente sólidos | ICH Q7 19.80 | Leído |
| Ejercicio 4 (IPC): Rf 0,65 y 0,35; 2,4 cm; 50 µg frente a 0,5 µg | Valores de ejemplo declarados + cálculo | Recalculado |
| Placas de TLC incluidas en la integridad de datos junto a fotografías e imágenes; justificación documentada | WHO TRS 1033 anexo 4, 9.2 | Leído |
| Segunda persona que verifica (en el ejemplo de planta y la hoja) | WHO TRS 1033 anexo 4, 9.3 (*second person oversight, verification*) | Leído |
| Hexano: altamente inflamable; inflamación −22 °C; vapor más denso que el aire; polineuropatía; autoignición 225 °C; VLA-ED 20 ppm (INSHT 2014); no verter al alcantarillado | ICSC 0279 (abril 2024) | Leído |
| Acetato de etilo: muy inflamable; inflamación −4 °C; VLA-ED 200 ppm, VLA-EC 400 ppm (INSST 2019); no verter al alcantarillado | ICSC 0367 | Leído |
| Sulfúrico: muy corrosivo; evitar nieblas; nieblas de ácidos inorgánicos fuertes cancerígenas (IARC grupo 1); ventilación y extracción localizada; pantalla facial, guantes; añadir el ácido al agua, nunca agua sobre el ácido | ICSC 0362 | Leído |
| 225 °C < 300 °C: riesgo de autoignición en la placa calefactora | Cálculo/comparación de ICSC 0279 y BOE 43 | Comparación directa |
| Los métodos pulverizan y queman la placa seca | BOE 1979 grasas 43.4 («Pulverizar la placa seca») | Leído |
| NTP 433: no mirar directamente las lámparas (en espectroscopia atómica); en TLC, riesgo de cortes con los bordes de las placas | INSST NTP 433 | Leído |
| ICH Q7 8.36 (OOS no necesaria en IPC de vigilancia) | ICH Q7 | Leído; se quitó del texto por longitud |

## Lo que quería incluir y dejé fuera

- **Definición oficial del Rf leída en una fuente gratuita**: la farmacopea de Hong Kong (cmro.gov.hk) y el glosario de NIST (www.nist.gov) dan error de red; goldbook.iupac.org está bloqueado. El Rf queda como definición vista en fragmentos de buscador y coherente con los datos del BOE.
- **Capítulos de farmacopea** (USP <201>, <621>; Ph. Eur. 2.2.27 y el de HPTLC): son de pago. No se da ningún criterio de idoneidad de la placa ni de resolución en capa fina.
- **Cifras de la HPTLC** (tamaño de partícula, tamaño de placa, distancias de desarrollo, aplicación en bandas): solo en fuentes de pago o de fabricantes no accesibles.
- **Intervalo de Rf «bueno» (0,3-0,7)** para elegir eluyente: solo en un fragmento de apuntes universitarios.
- **Revelado con vapores de yodo, ninhidrina, permanganato o vainillina**: no aparecen en las fuentes oficiales leídas (la ninhidrina solo en un método colorimétrico del BOE, ya usado en otra lección).
- **Efecto borde** de la cubeta no saturada y explicación cuantitativa: sin fuente leída; se dejó la idea cualitativa.
- **Color del fondo de la placa F254 bajo la lámpara**: no se dice en ninguna fuente leída; el texto habla solo de «fondo que brilla» y «mancha oscura».
- **Tiempo típico de un IPC por TLC frente a HPLC**: sin fuente; el texto no da minutos.
- **Protección ocular específica frente a la lámpara UV de 254 nm**: no se encontró en el INSST una NTP leída sobre lámparas UV de laboratorio; se cita la NTP 433 con su contexto real.

## Ideas para la capa visual

1. **Esquema de una placa desarrollada** con origen, frente, tres manchas y las dos distancias del Rf acotadas (que el usuario pueda arrastrar una mancha y ver su Rf).
2. **Animación de la cubeta**: placa entrando con las manchas por encima del líquido, frente subiendo y la diferencia entre cubeta tapada y saturada y cubeta abierta.
3. **Simulación de revelado**: la misma placa con luz blanca (vacía), con lámpara de 254 nm (manchas oscuras) y tras pulverizar un reactivo.
4. **Placa del control de fin de reacción**: tres carriles (patrón de material de partida, muestra, referencia al 1 %) en la primera y la segunda muestra, para practicar la lectura «más intensa / menos intensa que la referencia».
