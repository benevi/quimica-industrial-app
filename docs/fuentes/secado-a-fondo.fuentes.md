# Fuentes y comprobaciones: lección `secado-a-fondo`

Niveles de comprobación usados en la tabla:

- **Leído**: descargué el documento oficial (PDF) y leí el pasaje.
- **Fragmento**: solo vi el fragmento que devuelve el buscador; no pude abrir la página (la sesión solo deja llegar a unos pocos dominios oficiales: `webbook.nist.gov`, Wikipedia, LibreTexts y las webs de universidades y fabricantes no resolvían).
- **Recalculado**: cálculo propio con Python (script `calc.py` del scratchpad).
- **Deducido**: consecuencia lógica de algo leído o recalculado; no lo vi escrito tal cual en una fuente. Conviene que alguien técnico lo repase.

## Tabla de afirmaciones

| Afirmación o cifra de la lección | Fuente | Cómo se comprobó |
|---|---|---|
| Secar es evaporar el líquido; hace falta aportar calor y retirar el vapor | Chemical Engineering, «Batch drying with vacuum contact dryers» https://www.chemengonline.com/batch-drying-with-vacuum-contact-dryers-2/ («evaporates solvents from a solid by using temperature, vacuum and mechanical fluidization by agitation») | Fragmento |
| En secaderos de contacto el calor llega por una pared metálica y no por un gas caliente | Misma fuente (chemengonline) | Fragmento |
| Esquema filtro de polvo, condensador, depósito y bomba de vacío | Descripción general del encargo y de la lección `secaderos` del repo; ninguna fuente abierta leída lo detalla | Deducido (no verificado de forma independiente) |
| La atmósfera son unos 1013 mbar y el agua hierve a 100 °C | IAPWS-IF97, ecuación de saturación: a 1013,25 mbar da 99,97 °C | Recalculado (la implementación reproduce los valores de prueba oficiales: Ts(0,1 MPa) = 372,7559 K y ps(300 K) = 0,00353659 MPa) |
| Ecuación de Antoine, log₁₀(P) = A − B/(T + C), P en bar y T en K | NIST Chemistry WebBook (agua, datos de cambio de fase), citado por la documentación de IDAES https://idaes-pse.readthedocs.io/en/stable/explanations/components/property_package/general/pure/NIST.html | Fragmento (NIST no era accesible) |
| Coeficientes del agua: A = 5,40221, B = 1838,675, C = −31,737 (273–303 K); A = 5,20389, B = 1733,926, C = −39,485 (304–333 K) | NIST WebBook, reproducidos en el cuaderno del curso CBE20255 https://nbviewer.jupyter.org/github/jckantor/CBE20255/blob/master/notebooks/07.02-Vapor-Liquid-Equilibrium-for-Pure-Components.ipynb | Fragmento (los cuatro números aparecen en el fragmento, atribuidos a NIST) |
| Agua a 20 mbar: 17,5 °C | Cálculo: Antoine 17,51 °C; IF97 17,50 °C | Recalculado por dos vías |
| Agua a 50 mbar: 33 °C | Cálculo: Antoine 32,89 °C; IF97 32,88 °C. Tablas de vapor (Engineering ToolBox 32,90 °C) | Recalculado por dos vías + fragmento |
| Agua a 100 mbar: 46 °C | Cálculo: Antoine 45,83 °C; IF97 45,81 °C. Tabla de vapor de IIT Kanpur 45,83 °C https://home.iitk.ac.in/~gtm/thermodynamics/lecture11/11_8.htm | Recalculado por dos vías + fragmento |
| Agua a 200 mbar: 60 °C | Cálculo: IF97 60,06 °C; Antoine 60,08 °C (0,2 K fuera del rango del ajuste). Tabla de TLV 60,06 °C https://www.tlv.com/global/EU/steam-theory/how-to-read-a-steam-table.html | Recalculado + fragmento |
| «50 mbar es una presión veinte veces menor que la atmósfera» | 1013 / 50 = 20,3 | Recalculado |
| A menos presión, el disolvente hierve a menos temperatura (vale para todos los disolventes) | Manufacturing Chemist, «Key factors in engineering a perfect vacuum drying cycle» https://manufacturingchemist.com/key-factors-in-engineering-a-perfect-vacuum-drying ; chemengonline «Vacuum drying basics» https://www.chemengonline.com/vacuum-drying-basics/ | Fragmento |
| Curva de secado con tramo de calentamiento, periodo de velocidad constante y periodo de velocidad decreciente | e-PG Pathshala (INFLIBNET), módulo de secado https://epgp.inflibnet.ac.in/epgpdata/uploads/epgp_content/S000015FT/P000058/M000131/ET/1454409472P04_M16E-TextNew.pdf ; UPV https://gdocu.upv.es/alfresco/service/api/node/content/workspace/SpacesStore/e8b523c5-4970-4ae6-b2a3-86f576e81359/TOC_4092_02_01.pdf?guest=true | Fragmento (varias fuentes universitarias coinciden) |
| En el periodo constante la superficie está mojada y se evapora como en una superficie de líquido libre | e-PG Pathshala (misma URL) | Fragmento |
| Humedad crítica: humedad a la que acaba el periodo constante; ya no hay líquido suficiente para mantener la película en la superficie | e-PG Pathshala; UPAO https://journal.upao.edu.pe/index.php/PuebloContinente/article/download/565/527/2104 | Fragmento |
| En el periodo decreciente el líquido tiene que migrar desde el interior (capilares, difusión) y la velocidad cae | Tesis UBA (Alzamora) https://bibliotecadigital.exactas.uba.ar/download/tesis/tesis_n1620_Alzamora.pdf ; e-PG Pathshala | Fragmento |
| En secado con gas, la superficie se queda cerca de la temperatura de bulbo húmedo durante el periodo constante | Tesis UNAM https://ru.dgb.unam.mx/bitstream/20.500.14330/TES01000291134/3/291134.pdf ; UPV (misma URL de arriba) | Fragmento |
| En el periodo decreciente la temperatura de la superficie y del sólido sube | e-PG Pathshala; ebooks INFLIBNET https://ebooks.inflibnet.ac.in/ftp1/chapter/food-drying-dehydration | Fragmento |
| En vacío, al bajar el contenido de disolvente la temperatura sube poco a poco y marca el paso al periodo decreciente | Manufacturing Chemist (URL de arriba), sobre filtros-secadores agitados | Fragmento |
| Cuando la temperatura del sólido iguala la de calefacción ya no se gasta energía en evaporar: aviso de fin de secado | Ekato, artículo en Chemical Engineering https://www.chemengonline.com/batch-drying-maximizing-product-yields/ y https://www.ekato.com/wp-content/uploads/2021/01/CE_April_2017_Coverstory_Advertorial.pdf | Fragmento |
| En vacío, durante el periodo constante el producto se queda «cerca de la temperatura a la que hierve su disolvente a esa presión» | Combinación de la tabla de ebullición (recalculada) con las dos fuentes anteriores | Deducido: ninguna fuente abierta lo dice con esas palabras |
| Humedad de equilibrio: límite por debajo del cual no baja en esas condiciones | UPAO (citando a Geankoplis) y arXiv 2404.16604 https://arxiv.org/pdf/2404.16604 | Fragmento |
| «Las últimas décimas son las más lentas» | Consecuencia del periodo de velocidad decreciente | Deducido |
| Definición de base húmeda (líquido / masa total) y base seca (líquido / sólido seco) | Universidad de la República (Uruguay) https://eva.fing.edu.uy/pluginfile.php/549374/mod_resource/content/1/Clase%209_aw%20e%20isotermas%20de%20sorci%C3%B3n.pdf ; tesis UNAM https://ru.dgb.unam.mx/bitstream/20.500.14330/TES01000184864/3/0184864.pdf | Fragmento |
| Fórmulas de conversión entre bases | Mismas fuentes (Hbs = Hbh / (100 − Hbh) × 100) y álgebra | Fragmento + recalculado |
| En la industria se usa sobre todo la base húmeda; la base seca puede pasar del 100 % | Tesis UNAM; guía ATIBT sobre humedad de la madera https://www.atibt.org/files/upload/technical-publications/Espanol/4-HUMEDAD-DE-LA-MADERA-Y-NIVELES-DE-SECADO.pdf | Fragmento |
| Ejemplo 1: 20 % base húmeda = 25 % base seca. Ejemplo 2: 50 % base seca = 33,3 % base húmeda | Cálculo | Recalculado |
| Cálculo 1: 120 kg al 25 % hasta 0,5 %: 90 kg secos, 90,45 kg finales, 29,55 kg a evaporar | Cálculo (balance de sólido seco) | Recalculado |
| Cálculo 2: LOD de 2,500 g a 2,470 g = 1,2 % | Cálculo | Recalculado |
| Cálculo 3: 80 kg al 18 % dan 65,6 kg secos | Cálculo | Recalculado |
| Cálculo 4: 64,9 / 65,6 = 98,9 % | Cálculo | Recalculado |
| ICH Q7 pide comparar el rendimiento real con el esperado e investigar desviaciones en pasos críticos | ICH Q7, apartado 8.14 https://database.ich.org/sites/default/files/Q7%20Guideline.pdf | Leído |
| Estufa de bandejas de vacío: secado estático y suave para productos sensibles al calor | Kerone (fabricante) https://kerone.com/api-drying-systems.php ; lección `secaderos` del repo | Fragmento |
| Estufa de aire para producto mojado con agua que aguanta el calor | Lección `secaderos` del repo (la de vacío se usa con disolventes y productos sensibles) | Deducido |
| «El sólido no se remueve» en las estufas | Es la definición del equipo (producto quieto en bandejas) | Deducido |
| Bicónico: el volteo puede desgastar los cristales (attrition) | Fragmento del buscador («the tumbling action in double-cone dryers... can produce a degree of attrition»); origen probable, sin confirmar, el manual de secaderos APV https://www.scribd.com/document/421706249/apv-dryer-pdf | Fragmento (atribución dudosa) |
| Secadero de paletas: eje con paletas que deshace aglomerados y uniformiza; usado en lotes grandes de API | GlobalSpec https://www.globalspec.com/learnmore/processing_equipment/materials_processing_equipment/process_dryers ; Kerone (URL de arriba) | Fragmento |
| Filtro-secador agitado: filtra y seca en el mismo equipo, sin trasvases ni exposición; el calor entra sobre todo por conducción | Kerone; Manufacturing Chemist (URL de arriba) | Fragmento |
| Lecho fluido: gas que levanta las partículas, transferencia de calor rápida y secados cortos; problemas con grumos y humedad desigual; riesgo de desgaste | Chemical Engineering, «Selection guide for solids drying systems» https://www.chemengonline.com/selection-guide-for-solids-drying-systems/ ; FEECO https://feeco.com/rotary-dryer-or-fluid-bed-dryer/ | Fragmento |
| LOD mide todo lo volátil, sin distinguir | USP ‹731› (copia de USP 38) https://drugfuture.com/Pharmacopoeia/usp38/data/v38332/usp38nf33s2_c731.html ; ICH Q3C apartado 3.4 («a non-specific method such as loss on drying») | Fragmento + leído (Q3C) |
| Karl Fischer es específico para el agua | ICH Q6A, apartado 3.3.1 e) («a detection procedure that is specific for water (e.g., Karl Fischer titration) is preferred») https://database.ich.org/sites/default/files/Q6A%20Guideline.pdf | Leído |
| Los disolventes residuales se determinan normalmente por cromatografía de gases | ICH Q3C(R8), apartado 3.4 https://database.ich.org/sites/default/files/ICH_Q3C-R8_Guideline_Step4_2021_0422_1.pdf | Leído |
| Tres clases: 1, evitar; 2, limitar; 3, bajo potencial tóxico | ICH Q3C(R8), apartado 3.1 | Leído |
| Benceno, clase 1, 2 ppm | ICH Q3C(R8), tabla 1 | Leído |
| Acetonitrilo 410 ppm, diclorometano 600 ppm, tolueno 890 ppm, metanol 3000 ppm (clase 2) | ICH Q3C(R8), tabla 2 | Leído |
| Etanol, acetona, 2-propanol, acetato de etilo y heptano son clase 3; 5000 ppm o 0,5 % aceptable sin justificación | ICH Q3C(R8), apartado 4.3 y tabla 3 | Leído |
| 10 000 ppm = 1 %; 0,3 % = 3000 ppm, más del triple de 890 ppm | Cálculo (3000 / 890 = 3,37) | Recalculado |
| El LOD solo se acepta cuando los únicos disolventes presentes son de clase 3 | ICH Q3C(R8), apartado 3.4 | Leído |
| Grumos: algunos equipos llevan rompegrumos (chopper) | Charles Ross & Son (fabricante) https://ulprospector.ul.com/6903/pe-ross-agitated-vacuum-systems-drying-plastics/ | Fragmento |
| La bola queda húmeda por dentro; la costra seca por fuera y húmeda por dentro | Consecuencia del periodo decreciente (el líquido sale del interior) | Deducido |
| Capas sobre la pared; el polvo se pega donde condensa vapor en zonas frías | Ekato en Chemical Engineering https://www.chemengonline.com/batch-drying-maximizing-product-yields/ | Fragmento |
| Polvo fino arrastrado, filtros taponados y pérdida de rendimiento | FEECO https://feeco.com/identifying-and-resolving-common-fluid-bed-dryer-issues/ (referido a lecho fluido) | Fragmento |
| Con una fuga la presión no baja, el disolvente hierve a más temperatura y el secado se alarga | Tabla de ebullición (recalculada) | Deducido |
| La estanqueidad se comprueba aislando el equipo y mirando si la presión sube | Práctica general de vacío (ensayo de subida de presión) https://www.pharmaceuticalonline.com/doc/leak-rate-testing-for-freeze-dryers-a-scientific-approach-0001 (referido a liofilizadores) | Fragmento |
| Inertizar con nitrógeno empobrece el oxígeno hasta que la inflamación es imposible (por debajo de la concentración límite de oxígeno) | INSST, Guía técnica de atmósferas explosivas (2021), «Trabajar en atmósferas inertes» https://www.insst.es/documents/94886/789467/ATM%C3%93SFERAS+EXPLOSIVAS.pdf/68908603-7c12-4c78-b792-9d16f463f0a0 | Leído |
| Las capas de polvo pueden inflamarse por el calor del equipo o ponerse en suspensión; se limpia aspirando o con paños húmedos, nunca barriendo ni soplando | INSST, misma guía, «Limpieza frecuente de los depósitos de polvos» | Leído |
| Las superficies calientes son fuente de ignición | INSST, misma guía, apéndice 5 | Leído |
| La protección principal contra la estática es la puesta a tierra y la conexión equipotencial de todas las superficies conductoras | INSST, misma guía, apéndice 5 | Leído |
| La estática puede encender atmósferas de vapores o de polvo; una chispa puede encender una nube de polvo | INSST, NTP 827 https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/24-serie-ntp-numeros-821-a-855-ano-2009/nota-tecnica-de-prevencion-ntp-827 | Fragmento (el PDF no se dejó descargar) |
| Un gas o vapor inflamable junto al polvo rebaja la energía mínima de ignición del polvo | INSST, NTP 827 | Fragmento |
| El vacío se rompe con nitrógeno y no con aire; se enfría y se comprueba la presión antes de abrir | Lección `secaderos` del repo (triángulo del fuego) y guía del INSST (garantizar que no aumenta el oxígeno) | Leído (guía) + deducido |
| Un producto frío desprende menos vapor | Tabla de ebullición: la presión de vapor crece con la temperatura | Deducido |
| El nitrógeno no se puede respirar (riesgo de asfixia) | INSST, guía ATEX, nota 35; NTP 340 https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/10-serie-ntp-numeros-331-a-365-ano-1995/ntp-340-riesgo-de-asfixia-por-suboxigenacion-en-la-utilizacion-de-gases-inertes | Leído (guía) + fragmento (NTP) |
| La toma de muestra sigue un procedimiento escrito, sin contaminar, y se protege la integridad de la muestra | ICH Q7, apartados 8.34 y 8.35 | Leído |
| Los IPC y sus resultados se documentan en la hoja de producción | ICH Q7, apartado 8.33 | Leído |
| El secado hasta especificación termina por análisis y no por tiempo | ICH Q7, apartado 8.20 | Leído |
| El goteo de condensado baja al final del secado | Consecuencia de la curva de secado; Ekato menciona vigilar la velocidad de evaporación | Deducido |
| Ejemplo de planta: 140 kg al 20 % dan 112 kg secos, unos 28 kg a evaporar (27,6 kg hasta 0,4 %); 111,4 / 112 = 99,5 %; meseta a 33–35 °C con 50 mbar | Cálculo y tabla de ebullición. Equipo SD-302 y producto VT-210 son inventados | Recalculado |
| Preguntas numéricas: 58,6 kg; 1,5 %; 17,6 %; 117 kg; 98,5 % | Cálculo | Recalculado |

Nota sobre ICH Q3C: leí la revisión R8 (abril de 2021), que es la que se pudo descargar de `database.ich.org`. Existe una revisión R9 posterior que no conseguí descargar; conviene confirmar en ella que los límites citados no han cambiado.

## Lo que quería incluir y dejé fuera por no poder verificarlo

1. Tabla de temperaturas de ebullición a vacío de disolventes orgánicos (etanol, acetona, metanol): el NIST WebBook no era accesible y no tenía coeficientes de Antoine verificados.
2. Coeficientes de Antoine del agua por encima de 333 K (el tramo que llega a 100 °C): solo pude confirmar los dos tramos citados.
3. Cifras del calor de vaporización (kJ por kilo evaporado) y cálculo de la energía de un secado.
4. Valores típicos de humedad crítica, tiempos de secado habituales y tamaños de lote por tipo de secadero.
5. Que el disolvente atrapado dentro del cristal (solvatos, inclusiones) no sale en las condiciones del LOD: es conocido, pero no encontré fuente abierta legible.
6. Condiciones del ensayo de LOD (temperatura, tiempo, peso constante) según Farmacopea Europea 2.2.32: es de pago.
7. Química del Karl Fischer (reacción con yodo) y diferencia entre volumétrico y culombimétrico.
8. Detalle del método de cromatografía de gases (espacio de cabeza) y si ve o no el agua.
9. Endurecimiento superficial (*case hardening*) como mecanismo en productos farmacéuticos: solo encontré fuentes sobre madera.
10. Estufas de bandejas: carga y descarga manual, exposición del operador y espesor de capa recomendado.
11. Energías mínimas de ignición de polvos, concentraciones límite de oxígeno por disolvente y el dato de resistencia de puesta a tierra (lo leí en la guía del INSST, 1 MΩ, pero no lo puse por no ser tarea del operador).
12. Criterios numéricos de la prueba de estanqueidad (subida de presión admitida): dependen de cada equipo.
13. Ejemplos numéricos de temperatura de bulbo húmedo.
14. Funcionamiento del filtro de polvo (limpieza por soplado inverso) y temperaturas del condensador.
15. Revisión R9 de ICH Q3C: no se pudo descargar.
