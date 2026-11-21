# Fuentes de la lección `agua-a-fondo`

Cómo leer la columna «Comprobación»:

- **Leído en el documento**: descargué el documento oficial con curl, lo pasé a texto y leí el pasaje.
- **Fragmento de buscador**: solo vi el resumen del buscador web; no pude abrir la página. Es la verificación más débil y no se usa para ninguna cifra.
- **Recalculado**: cuenta rehecha con python (`src_agua/check.py`), con el mismo redondeo que el texto.
- **Valor de ejemplo declarado**: número inventado para hacer cuentas; el texto lo dice.
- **Razonamiento**: consecuencia directa de algo leído, sin cifra propia.

Documentos leídos enteros o en los apartados citados:

- **Q7**: ICH Q7, apartados 4.2 y 4.3. https://database.ich.org/sites/default/files/Q7%20Guideline.pdf
- **EMA-G**: EMA, «Guideline on the quality of water for pharmaceutical use», EMA/CHMP/CVMP/QWP/496873/2018 (entera; la tabla 3 comprobada además sobre la imagen de la página 7). https://www.ema.europa.eu/en/documents/scientific-guideline/guideline-quality-water-pharmaceutical-use_en.pdf
- **EMA-QA**: EMA, «Questions and answers on production of water for injections by non-distillation methods – reverse osmosis and biofilms and control strategies», EMA/INS/GMP/443117/2017 (entera). https://www.ema.europa.eu/system/files/documents/other/wc500232814_en.pdf
- **AN1**: EU GMP, anexo 1 (2022), apartados 6.7 a 6.15. https://health.ec.europa.eu/system/files/2022-08/20220825_gmp-an1_en_0.pdf
- **OMS**: OMS, TRS 1033 (2021), anexo 3, «Good manufacturing practices: water for pharmaceutical use» (entero). https://cdn.who.int/media/docs/default-source/medicines/norms-and-standards/guidelines/inspections/trs1033-annex3-gmp-water-for-pharmaceuticals-use.pdf
- **FDA-HPW**: FDA, «Guide to inspections of high purity water systems» (7/93) (entera). https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/inspection-guides/high-purity-water-system-793
- **ITG36**: FDA, Inspection Technical Guide 36, «Reverse osmosis» (1980) (entera). https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/inspection-technical-guides/reverse-osmosis
- **ITG40**: FDA, ITG 40, «Bacterial endotoxins/pyrogens» (1985). https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/inspection-technical-guides/bacterial-endotoxinspyrogens
- **ITG46**: FDA, ITG 46, «Water for pharmaceutical use» (1986) (entera). https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/inspection-technical-guides/water-pharmaceutical-use
- **FDA-ASEP**: FDA, «Sterile drug products produced by aseptic processing» (2004), glosario. https://www.fda.gov/media/71026/download
- **RD3**: Real Decreto 3/2023, texto consolidado, anexo I. https://www.boe.es/buscar/act.php?id=BOE-A-2023-628

Aviso de antigüedad: las guías de la FDA son de 1980 a 1993 y citan la farmacopea de Estados Unidos de entonces. Se usan para mecanismos, casos y límites de acción que la propia FDA mantiene publicados; el texto las atribuye siempre a la FDA.

| Dato o afirmación | Fuente | Comprobación |
|---|---|---|
| El agua se saca de un sistema a demanda, sin análisis ni liberación previa; los resultados microbiológicos llegan cuando ya se ha usado | OMS, «Background» y 2.2 | Leído en el documento |
| Usos del agua en API: síntesis, lavado, aclarado | OMS 2.1; EMA-G 1 | Leído en el documento |
| Caso del agua de río con plaguicidas | FDA-HPW, XIII | Leído en el documento |
| Lista de lo que lleva el agua (sales, materia orgánica, cloro, partículas, microbios, endotoxinas) | ITG36 (pretratamientos y sólidos disueltos), ITG46, RD3 anexo I, ITG40 | Leído (cada componente aparece en esas fuentes); la lista como tal es razonamiento |
| Agua de consumo: conductividad 2500 µS/cm a 20 °C, nitrato 50 mg/L, carbono orgánico total 5,0 mg/L, recuento de colonias a 22 °C 100 UFC/1 mL | RD3, anexo I, partes B (tabla 2) y C (tabla 3) | Leído en el documento (texto consolidado del BOE) |
| ICH Q7 4.30 a 4.34 (resumen de cada punto) | Q7 | Leído en el documento |
| Tabla de la EMA: agua potable para síntesis y aislamiento final de API sin requisito de esterilidad (purificada si hace falta más pureza química); purificada para API sólido no estéril destinado a parenteral; WFI para API estéril y apirógeno | EMA-G, tabla 3 y sus notas | Leído; celda combinada «Potable Water*» comprobada en la imagen de la página |
| Aclarado inicial con agua potable; aclarado final con la misma calidad que la fabricación del API | EMA-G 5.3 y tabla 5 | Leído en el documento |
| El agua purificada se prepara a partir de agua potable | OMS 4.3.2; EMA-G 4.1 | Leído en el documento |
| Agua desionizada: atención especial por contaminación microbiana | ITG46; OMS 4.3.5 | Leído en el documento |
| Agua descalcificada como calidad intermedia | OMS 4.2.9 (softening), EMA-QA (pretratamiento) | Leído (la etapa); llamarla «calidad intermedia» es razonamiento |
| La conductividad depende de los iones disueltos | Lección de la app «potenciometría y conductividad» (nivel 7) | Leído en la app; no releído en fuente externa |
| La conductividad no informa de la calidad microbiológica | FDA-HPW, V y VI | Leído en el documento |
| TOC: medida de la materia orgánica como carbono | RD3 (parámetro «Carbono orgánico total»); definición | Parámetro leído; la definición, fragmento de buscador |
| La materia orgánica es alimento de los microbios | EMA-QA, parte I, pregunta 3 («dissolved organic nutrients») | Leído en el documento |
| Definición de UFC: una colonia a partir de uno o más microorganismos | FDA-ASEP, glosario | Leído en el documento |
| Endotoxina: de la pared de bacterias gramnegativas; se libera al morir y romperse la célula | ITG40; FDA-ASEP, glosario | Leído en el documento |
| Endotoxina inyectada: de fiebre a muerte | FDA-ASEP, glosario | Leído en el documento |
| Los filtros esterilizantes no retienen endotoxinas; calor seco 250 °C 45 min | ITG40 | Leído en el documento |
| Límites de acción FDA: 100 UFC/mL (agua purificada), 10 UFC/100 mL (WFI); son límites de acción, no de aprobado o suspenso | FDA-HPW, III | Leído en el documento |
| 0,25 unidades de endotoxina/mL para WFI (farmacopea de EE. UU.) | ITG40; FDA-HPW, V | Leído en el documento |
| 10/100 = 0,1; 100/0,1 = 1000; 620/10 = 62 | cálculo | Recalculado |
| 620 colonias, 10 mL, alerta 50 UFC/mL | valor de ejemplo declarado | — |
| Significado de alerta y de acción | AN1 6.14; FDA-HPW, III | Leído en el documento |
| Filtro de profundidad o de arena como primer paso | EMA-QA (control of fouling); ITG46 | Leído en el documento |
| La descalcificación controla la incrustación antes de la membrana | EMA-QA, pretratamiento | Leído en el documento |
| Mecanismo del descalcificador: resina con sodio que cambia calcio y magnesio; regeneración con salmuera | resúmenes del buscador (patentes) | Fragmento de buscador; sin cifras |
| El cloro y otros oxidantes degradan las membranas; se quita al final del pretratamiento; carbón activo o metabisulfito sódico | EMA-QA, pretratamiento | Leído en el documento |
| El carbón quita el cloro protector y con él la inhibición microbiana | ITG46 | Leído en el documento |
| Ósmosis y ósmosis inversa: membrana, presión, sentido del agua | ITG36, «Definition and operating principle» | Leído en el documento |
| La membrana retiene orgánicos, bacterias, pirógenos; no es absoluta | ITG36; FDA-HPW, X | Leído en el documento |
| EDI: resinas y corriente eléctrica | nombre y uso en OMS 4.3.3 y AN1 6.10 (leído); mecanismo | Mecanismo: fragmento de buscador; sin cifras |
| UV: en el mejor caso mata el 90 %; mantener limpias las vainas | FDA-HPW, XI | Leído en el documento |
| 1000 UFC quedan 100 | cálculo | Recalculado |
| Ultrafiltración reduce endotoxinas | EMA-QA; FDA-HPW, XIII | Leído en el documento |
| Destilación para WFI; proceso equivalente admitido desde el 1 de abril de 2017 | EMA-G 1; AN1 6.10 | Leído en el documento |
| Lechos de arena, carbón y descalcificadores pueden contaminarse; se lavan, regeneran y sanitizan | OMS 4.2.10 | Leído en el documento |
| Columna «qué se vigila» de la tabla | EMA-QA (conductividad del permeado, presiones, caudales, oxidantes antes de la ósmosis), FDA-HPW (lámparas UV), OMS 7 (instrumentos en línea) | Leído; la tabla es un resumen propio |
| Ejemplo 300 ppm, 15 y 30 ppm, 95 % y 90 % | ITG36, «Quality of RO product water» | Leído y recalculado |
| Fórmula del rechazo de sales | ITG36 (por el ejemplo) | Razonamiento y recálculo |
| Si baja el rechazo: membrana, juntas, incrustación, ensuciamiento | EMA-QA, «Conductivity» | Leído en el documento |
| Recuperación 750/1000 = 75 %; factor 4; 1200 ppm | cálculo con valores de ejemplo declarados | Recalculado |
| Destiladores: 2,5 a 3 logaritmos; pico de 250 EU/mL | FDA-HPW, V | Leído; 250/1000 = 0,25 recalculado |
| Filtro de venteo hidrófobo que retiene bacterias, con prueba de integridad y calentado contra la condensación | AN1 6.11; OMS 9.2; FDA-HPW, VII | Leído en el documento |
| Bola de rociado | OMS 9.2 | Leído en el documento |
| Anillo con circulación continua | OMS 10.1 | Leído en el documento |
| Sistema parado un día que se contaminó | FDA-HPW, X | Leído en el documento |
| Flujo turbulento contra la adhesión; Reynolds > 4000 | AN1 6.9; OMS 8.6 | Leído en el documento |
| Ramal muerto: seis diámetros desde el eje; pensada para 75-80 °C; en los demás, eliminar si es posible | FDA-HPW, IX | Leído; 6 × 25 = 150 recalculado (25 mm es valor de ejemplo) |
| Pendiente mínima 1/100 | OMS 7 y 8.6; AN1 6.7 (pendiente, sin cifra) | Leído en el documento |
| 316L, soldadura orbital, uniones sanitarias, sin roscas | OMS 7; EMA-QA; FDA-HPW, IX | Leído en el documento |
| Válvulas de membrana; las de bola retienen agua | OMS 7; FDA-HPW, X | Leído en el documento |
| Sin filtros en anillo ni puntos de uso; un filtro puede enmascarar | OMS 10.3; FDA-HPW, X | Leído en el documento |
| Sistemas calientes 65-80 °C autosanitizantes | FDA-HPW, I | Leído en el documento |
| WFI en circulación constante por encima de 70 °C (ejemplo) | AN1 6.10 | Leído en el documento |
| Anillo frío: UV, ozono, sanitización periódica | OMS 4.3.7; FDA-HPW, XI | Leído en el documento |
| Qué es un biofilm, cómo se forma, por qué resiste y por qué aparece a ratos | EMA-QA, parte I pregunta 2 y parte II pregunta 1 | Leído en el documento |
| 10 UFC/mL en una muestra y 100 o 1000 en la siguiente | FDA-HPW, III | Leído en el documento |
| Sanitización térmica > 70 °C (OMS) y > 75 °C (EMA) | OMS 4.3.7 y 8.3; EMA-QA, parte II pregunta 5 | Leído en el documento |
| Agentes químicos: ozono, peróxido de hidrógeno, ácido peracético, hipoclorito sódico | OMS 4.3.7; EMA-QA | Leído en el documento |
| Ozono más oxidante que el cloro; se destruye con UV | EMA-QA | Leído en el documento |
| Aclarado validado y análisis tras sanitizar | AN1 6.12; OMS 8.4 | Leído en el documento |
| Instrumentos en línea: conductividad, TOC, caudal, presión, temperatura | OMS 7 y 12.3; AN1 6.15 | Leído en el documento |
| Muestrear como se usa (manguera, purga) | FDA-HPW, II; OMS 12.5 | Leído en el documento |
| Envase estéril y no tocar boca ni tapón | resúmenes del buscador (guías de muestreo de agua de autoridades sanitarias) | Fragmento de buscador; sin cifras |
| Retorno del anillo cada día de uso; todos los puntos al menos semanalmente (contexto WFI) | EMA-QA, parte II pregunta 6 | Leído en el documento |
| Tendencias; no subir los límites | EMA-QA; OMS 12.7; AN1 6.13 | Leído en el documento |
| Fuera de límite de acción: investigar causa e impacto en producto | AN1 6.14; FDA-HPW, III y XIV; OMS 12.9 | Leído en el documento |
| Tres fases de cualificación (2 semanas, 2 semanas, hasta 12 meses; uso del agua en cada una) | OMS 11.3 | Leído en el documento (la FDA-HPW, II, describe un esquema parecido) |
| Orden de apertura de válvulas para barrer el aire del tramo | FDA-HPW, II (figura 1) | Leído en el documento |
| La manguera flexible es difícil de sanitizar | FDA-HPW, XI | Leído en el documento |
| Purga, totalizador, registro del punto de uso, mangueras identificadas, avisar de alarmas | Lección `agua-farmaceutica` de la app y práctica GMP general | Leído en la app; razonamiento |
| Muestra del agua de aclarado | Lección de la app (nivel 7, ejemplo de planta) | Leído en la app |
| Agua no potable (caldera, refrigeración, contra incendios); buscar conexiones cruzadas; líneas marcadas | ITG46 | Leído en el documento |
| Tuberías identificadas; desagües con corte de aire | Q7 4.23 y 4.24 | Leído en el documento |
| Rechazo 98 % y 94 %, 12 UFC/mL, 800 L, códigos R-301, PU-12, AP-01, KL-2231 | valores y códigos de ejemplo (ficticios) | — |
| El sistema desvía el agua fuera de límite | EMA-QA, «TOC» (opción de diseño) | Leído en el documento |
| Respuestas del test: 2,5; 97,5; 75; 1200; 0,1 | cálculo | Recalculado |

## Lo que quería incluir y dejé fuera por no poder verificarlo

- **Límites de la Farmacopea Europea** para agua purificada y WFI (conductividad, TOC, nitratos, recuento, endotoxinas): ninguno de los documentos gratuitos leídos los reproduce. La guía de la EMA remite a las monografías 0008 y 0169 sin cifras. La lección remite a la lección anterior y solo usa los límites de acción que publica la FDA.
- **Equivalencia entre unidades de endotoxina (EU) y unidades internacionales (UI)**: no leída; el texto usa «unidades de endotoxina» tal como la FDA.
- **Velocidad del agua en el anillo** en m/s: no hay cifra en las fuentes; solo la idea de turbulencia y el Reynolds > 4000 de la OMS.
- **Presiones de trabajo de una ósmosis**, vida de las membranas y tamaños de poro: las cifras de ITG36 son de 1980 y no se usan.
- **Tanto por ciento de rechazo típico** (ITG36 da 85-98 % nominal, dato de 1980): no incluido como cifra de referencia.
- **Dosis y longitud de onda de las lámparas UV**, concentraciones de ozono y tiempos de contacto.
- **Rugosidad de superficie** y pasivado (están en la OMS, pero no aportan al operador).
- **Dureza del agua en grados** y capacidad de las resinas.
- **Frecuencias concretas de sanitización**: las fuentes las dejan a la cualificación de cada sistema.
- **Legionela y torres de refrigeración**: ya están en `calor-y-frio-a-fondo`.
- **OMS TRS 970 anexo 2** (versión anterior): no accesible (apps.who.int bloqueado); se usó la revisión vigente, TRS 1033 anexo 3.
