# Fuentes de la lección `reactor-a-fondo`

Cómo leer la columna «Comprobación»:

- **Leído en el PDF**: descargué el documento oficial con curl, lo pasé a texto y leí el pasaje.
- **Fragmento de buscador**: solo vi el extracto que devuelve el buscador web. No pude abrir la página, porque desde esta sesión solo se llega a unos pocos dominios oficiales (los fabricantes, Thermopedia, Wikipedia y AIChE están bloqueados). Son las afirmaciones con verificación más débil.
- **Recalculado**: cuenta comprobada con python.
- **Razonamiento**: se deduce de la geometría o del funcionamiento del equipo, sin cifra que verificar.

URL base de las NTP: `https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/15-serie-ntp-numeros-506-a-540-ano-2000/`

- NTP 527: `…/ntp-527-reacciones-quimicas-exotermicas-i-factores-de-riesgo-y-prevencion`
- NTP 528: `…/ntp-528-reacciones-quimicas-exotermicas-ii-control-termico-y-refrigeracion`
- ICH Q7: `https://database.ich.org/sites/default/files/Q7%20Guideline.pdf`

## Tabla de afirmaciones

| Afirmación o cifra | Fuente | Comprobación |
|---|---|---|
| Los equipos principales (reactores) y las líneas fijas deben estar identificados | ICH Q7, apartado 5.13 | Leído en el PDF |
| Lubricantes y fluidos de calefacción o refrigeración no deben contactar con el producto alterando su calidad | ICH Q7, apartado 5.14 | Leído en el PDF |
| Las actividades se registran en el momento en que se hacen; toda desviación se documenta y se explica | ICH Q7, apartados 2.15 y 8.15 | Leído en el PDF |
| Perder la agitación tiene dos efectos inmediatos: mezcla pobre y mala transferencia de calor; acumulación; capas que reaccionan peligrosamente al restablecer la agitación | NTP 527, apartado «Agitación» | Leído en el PDF |
| Detectar la pérdida de agitación por velocidad de giro o consumo de potencia; enlazar la válvula de reactivos con el agitador | NTP 527, apartado «Agitación» | Leído en el PDF |
| Clasificación de rodetes en flujo axial y radial; la turbina de palas inclinadas da flujo sobre todo axial | Thermopedia, «Agitation devices» (doi 10.1615/AtoZ.a.agitation_devices) | Fragmento de buscador |
| Hélice: palas pequeñas, giro rápido, flujo axial, líquidos poco viscosos | Apuntes de curso (slideshare.net/slideshow/afd7-agitation-and-mixing/52025489) | Fragmento de buscador; fuente de calidad media |
| El flujo axial levanta mejor los sólidos del fondo | Mismos apuntes de curso | Fragmento de buscador; fuente de calidad media |
| Ancla: productos viscosos y mejora de la transferencia de calor; de 20 a 80 rpm | De Dietrich, catálogo de agitadores (pdf.directindustry.com/pdf/de-dietrich/monobloc-agitators/161798-811841.html) | Fragmento de buscador |
| Impulsor de retroceso: tres palas curvas, flujo radial, de 50 a 200 rpm | De Dietrich, mismo catálogo | Fragmento de buscador |
| Turbina de palas inclinadas recomendada para repartir sólidos | Pfaudler, folleto de agitación (gmmpfaudler.com/glass-lined-equipment-1/glass-lined-mixing-systems/products-2/agitation-tasks) | Fragmento de buscador |
| El impulsor de retroceso se monta cerca del fondo para admitir un rango amplio de niveles; agitador y deflector con formas redondeadas por la fragilidad del vidrio; un solo deflector colgado de una tubuladura de la tapa | Artículo técnico sobre reactores vitrificados (proquest.com/docview/221539239) | Fragmento de buscador |
| La sonda de temperatura va muchas veces dentro del deflector | Pfaudler, «Temperature measurement» (gmmpfaudler.com/glass-lined-equipment-1/glass-lined-instrumentation/products-5/temperature-measurement) | Fragmento de buscador |
| Los rompecorrientes aumentan la turbulencia, que afecta a la transferencia de calor y a la velocidad de reacción | NTP 528, «Refrigeración en un proceso discontinuo» | Leído en el PDF |
| Volumen mínimo de agitación: el rodete y la sonda deben estar cubiertos; por debajo no se agita ni se calienta | Razonamiento | Sin cifra: la lección dice que la da la documentación de cada reactor |
| Cierre mecánico: dos caras planas, una fija y otra giratoria, apretadas por un muelle | Seals and Sealing Handbook (globalspec.com/reference/25816/203279/3-4-mechanical-seals) | Fragmento de buscador |
| El cierre doble necesita un líquido de barrera a presión mayor que la que se cierra; el sistema disipa el calor de rozamiento y repone las pérdidas; el líquido debe ser compatible con el producto | KSB, léxico técnico: «Barrier fluid system» y «Barrier fluid» (ksb.com/en-global/centrifugal-pump-lexicon/article/barrier-fluid-system-1118634) | Fragmento de buscador. La fuente habla de bombas; el principio es el mismo en el eje de un agitador |
| El nivel del líquido de barrera baja cuando el cierre fuga; se vigilan nivel y presión | Patentes de sistemas de barrera (image-ppubs.uspto.gov, US 9098094 y US 11079021) | Fragmento de buscador |
| Q = U × A × ΔT, con U coeficiente global, A superficie y ΔT diferencia de temperatura con el exterior | NTP 527, ecuación (III) | Leído en el PDF |
| U depende de la agitación, del tipo de superficie y del fluido; el ensuciamiento empeora el intercambio | NTP 528, «Refrigeración en un proceso discontinuo» y «Modos de fallo» | Leído en el PDF |
| U = 300 W/(m²·K) como valor de ejemplo | Declarado como ejemplo didáctico. Orden de magnitud: Thermopedia da unos 310 (calentar) y 200 (enfriar) para vitrificado; Pfaudler, 416 en un ejemplo | Fragmento de buscador |
| 300 × 12 × 40 = 144 kW; 300 × 12 × 10 = 36 kW | Cálculo | Recalculado |
| Bote de 1 m: 0,785 m³, 3,14 m², 4,0 m²/m³. Bote de 2 m: 6,28 m³, 12,57 m², 2,0 m²/m³. Volumen × 8, superficie × 4 | Cálculo (cilindro con altura igual al diámetro, pared lateral) | Recalculado |
| Los reactores de gran escala operan cerca de condiciones adiabáticas | NTP 528, «Modos de fallo» | Leído en el PDF |
| Media caña: mayor velocidad del fluido; indicada para más de 10 bar en el lado del servicio; pérdida de superficie del orden del 30 %; en vitrificado la capa de vidrio domina | Pfaudler, «Heat Transfer in Glass-Lined Double-Jacketed and Half-Coil Jacketed Reactors» (gmmpfaudler.com/heat-transfer-in-glass-lined-double-jacketed-and-half-coil-jacketed-reactors) | Fragmento de buscador |
| El vidrio resiste mucho mejor la compresión que la tracción y por eso se deja precomprimido | De Dietrich, catálogo de producto (pdf.directindustry.com/pdf/de-dietrich/product-portofolio-catalog/161798-657055.html) | Fragmento de buscador |
| Dos tipos de choque térmico: lado vidrio (al cargar) y lado acero (al calentar o enfriar) | Resumen público de ISO 28721-3:2008 (iso.org/standard/44900.html) | Fragmento de buscador. Solo el resumen gratuito; la norma es de pago y no se usa ninguna cifra de ella |
| El fabricante fija la diferencia máxima de temperatura | Caso técnico de Huber, CS 88 (huber-online.com/fileadmin/user_upload/huber-online.com/download_center/Fallstudien/CS_88.pdf) y manual de mantenimiento De Dietrich | Fragmento de buscador |
| Excepciones de resistencia química: ácido fluorhídrico, ácido fosfórico concentrado y caliente, bases fuertes calientes | Folleto Pfaudler «Glass Linings» (gmmpfaudler.com/uploads/files/E_Pfaudler-Glass-Linings-614-4E.pdf) y presentación De Dietrich; coincide con la lección `reactor-y-servicios` ya publicada | Fragmento de buscador |
| Ensayo de chispa: sonda o escobilla de alta tensión sobre superficie limpia y seca; la chispa salta donde hay metal al descubierto | ASTM C536 (extracto público en cdn.standards.iteh.ai) | Fragmento de buscador |
| No pasar de 6000 voltios | Manual de mantenimiento De Dietrich (my.che.utah.edu/~tony/chen4903/equipment/R_Glass_Lined_Reactor/MANUAL_Maintenance.pdf) | Fragmento de buscador. Dato de un fabricante concreto; la lección lo presenta como ejemplo |
| Si la presión no se alivia, el reactor sufre sobrepresión y puede explotar; los sistemas de alivio son medidas de protección | NTP 527, «Consecuencias» y «Medidas de protección» | Leído en el PDF |
| La válvula de seguridad vuelve a cerrar; el disco de ruptura no | Interempresas, «Uso de discos de ruptura en combinación con válvulas de seguridad» (interempresas.net/Quimica/114472-…) | Fragmento de buscador |
| Disco debajo de la válvula: cierre estanco y válvula protegida de corrosión y atascos; la válvula vuelve a cerrar | Boletín técnico de Fike (my.fike.com) y documento de Interempresas «Disco de ruptura en serie con válvula de seguridad» | Fragmento de buscador |
| Entre disco y válvula debe haber manómetro o indicador | Folleto BS&B (cita de los códigos ASME y EN) y boletín Fike | Fragmento de buscador |
| Una fuga en el disco presuriza el espacio intermedio; el disco rompe por diferencia de presión y rompería más tarde | CCPS, Process Safety Beacon, noviembre de 2006 (aiche.org/sites/default/files/2006-11-Beacon-English_0.pdf) y boletín Fike | Fragmento de buscador |
| Proceso por lotes y semicontinuo; en el semicontinuo se puede detener la carga si se pierde el control | NTP 527, «Procesos discontinuos» | Leído en el PDF |
| Sector farmacéutico: 80 % discontinuo | NTP 527, tabla 1 (dato de Sawyer, 1993) | Leído en el PDF. Dato antiguo; la lección dice «alrededor de» |
| Reflujo: el disolvente se evapora, condensa y vuelve; su evaporación retira calor | NTP 528, «Refrigeración en un proceso continuo» | Leído en el PDF |
| Destilación: el condensado se desvía y no vuelve | Definición de la operación | Razonamiento |
| El calor generado crece exponencialmente con la temperatura y el retirado, de forma lineal | NTP 527, «¿Cómo ocurre una reacción fuera de control?» | Leído en el PDF |
| Una temperatura demasiado baja acumula material sin reaccionar; hay que definir temperatura mínima y máxima | NTP 527, «Temperatura», y NTP 528, «Refrigeración en un proceso discontinuo» | Leído en el PDF |
| Debe identificarse la velocidad máxima de adición que la refrigeración puede manejar | NTP 527, «Adiciones» | Leído en el PDF |
| 30 kW / 150 kJ/kg = 0,2 kg/s = 12 kg/min; 600 kg en 50 min | Cálculo con valores de ejemplo | Recalculado |
| Tolueno: densidad 0,87 kg/L, cp 1,7 kJ/(kg·K), ebullición 110,6 °C | Engineering ToolBox (engineeringtoolbox.com/toluene-methylbenzene-properties-d_2095.html); ATSDR da 0,863 g/cm³ | Fragmento de buscador |
| 2610 / 0,87 = 3000 L; 3000 / 6000 = 50 % | Cálculo | Recalculado |
| 2610 × 1,7 × 50 = 221 850 kJ; / 50 kW = 4437 s, unos 74 min | Cálculo | Recalculado (73,95 min) |
| Test: 1740 / 0,87 = 2000 L; 4200 / 6000 = 70 %; 2000 × 2,0 × 45 = 180 000 kJ, / 40 kW = 75 min; 250 × 8 × 30 = 60 kW | Cálculo | Recalculado |
| Pasos de arranque y parada | Ordenación propia a partir de lo anterior y de ICH Q7 (5.13, 8.16 estado del equipo) | Razonamiento. No es un procedimiento oficial; la lección remite al SOP |

## Lo que quería incluir y dejé fuera por no poder verificarlo

- **NTP 456 (discos de ruptura) y NTP 342 (válvulas de seguridad) del INSST**: existen y son la fuente natural, pero el servidor del INSST redirigió todas mis descargas de esos dos PDF a la ficha y no pude leerlos. Por eso la parte de disco y válvula se apoya en fragmentos de buscador de fabricantes y del CCPS, y no cito esas dos NTP en la lección. Conviene que alguien las lea y confirme.
- **Texto normativo que prohíbe válvulas de cierre entre el reactor y la válvula de seguridad**: no encontré la frase literal. En la lección queda como regla del operador, sin atribuirla a ninguna norma.
- **Cifras de choque térmico** (diferencia máxima en °C según temperatura de pared): están en los diagramas del fabricante y en ISO 28721-3, que es de pago. Sin cifra en la lección.
- **Límites de temperatura y concentración para bases** en vitrificado, y velocidades de corrosión.
- **Explicación del choque térmico por la distinta dilatación del acero y del vidrio**: no hallé fuente abierta que lo afirme.
- **Valor del volumen mínimo de agitación** (litros o porcentaje del nominal) y **porcentaje máximo de llenado** habitual.
- **Número de deflectores en reactores de acero inoxidable** (cuatro): solo aparecía en apuntes de curso.
- **Cierre mecánico simple, cierres secos con gas y depósito termosifón**: sin fuente fiable accesible.
- **Frecuencia del ensayo de chispa** y diferencia entre equipos de corriente continua y alterna.
- **Tabla de valores típicos de U según el servicio**: solo usé un valor de ejemplo.
- **Dónde descargan el disco y la válvula** (depósito de recogida, colector).
- **Estadísticas de accidentes de la NTP 529**: no llegué a descargarla.
