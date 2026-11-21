# Fuentes de «Aire, presiones y salas a fondo» (`hvac-y-salas-a-fondo`)

Documentos descargados y leídos (texto extraído con `pdftotext` o del HTML) en la sesión de noviembre de 2026:

- **Anexo 1 EU GMP (2022)**: https://health.ec.europa.eu/system/files/2022-08/20220825_gmp-an1_en_0.pdf
- **ICH Q7**: https://database.ich.org/sites/default/files/Q7%20Guideline.pdf
- **OMS TRS 1010, anexo 8 (2018)**, HVAC para productos no estériles, parte 1: https://cdn.who.int/media/docs/default-source/medicines/norms-and-standards/guidelines/production/trs1010-annex8-who-gmp-heating-ventilation-airconditioning.pdf
- **OMS TRS 1019, anexo 2 (2019)**, parte 2, interpretación: PDF enlazado desde https://www.who.int/publications/m/item/trs1019-annex2 (cdn.who.int, «…-(part-2)-interpretation-of-guidelines.pdf»)
- **NTP 1105 (INSST, 2018)**: PDF, https://www.insst.es/c/document_library/get_file?uuid=d4e16590-817e-42ba-b97a-4b1533ec6eae&groupId=94886 (tabla 1 leída en el PDF; la ficha HTML no trae la tabla)
- **NTP 1055 (INSST, 2015)**, vitrinas de recirculación con filtro: ficha HTML en www.insst.es
- **NTP 741 (INSST)**, ventilación general por dilución: ficha HTML en www.insst.es
- **NTP 742 (INSST)**, ventilación general de edificios: ficha HTML en www.insst.es
- **RD 486/1997**, texto consolidado: https://www.boe.es/buscar/act.php?id=BOE-A-1997-8669 (anexo III)
- **Anexo 15 EU GMP (2015)**: https://health.ec.europa.eu/system/files/2016-11/2015-10_annex15_0.pdf

| Dato o afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| El HVAC sirve para prevenir contaminación y contaminación cruzada, y además protege a operadores y ambiente y da condiciones cómodas | OMS TRS 1010 an. 8, sección 1 | Leído en el documento |
| Presión positiva protege al producto; local en depresión para que la contaminación no pase a otras áreas | OMS TRS 1010 4.4 y 7.5; NTP 741 (local a depresión o a sobrepresión) | Leído |
| Presión negativa respecto a áreas adyacentes en categorías 3B y 4 (polvo de principio activo) | NTP 1105, tabla 1, «Relación de presiones» | Leído en el PDF |
| Piezas de la UTA: filtros, baterías de calor y de frío, ventiladores, compuertas, humidificación y deshumidificación, desagües | OMS TRS 1019 an. 2, secciones 1, 2.1, 5 y 8; TRS 1010 5.6 y 8.4 | Leído (la guía las nombra; el orden y la descripción de cada pieza son explicación didáctica) |
| Toma de aire exterior y descarga colocadas para evitar contaminación; no reintroducir el aire extraído | OMS TRS 1010 5.5; NTP 741 (punto 5 de diseño) | Leído |
| La batería de frío condensa agua; deshumidificación y enfriamiento bien drenados; no acumular condensado | OMS TRS 1010 8.4; TRS 1019 sección 8 | Leído |
| Secadores químicos con gel de sílice aceptables; no filtros justo después de un humidificador (crecimiento bacteriano) | OMS TRS 1019 sección 8 | Leído |
| Aire de impulsión, de retorno, de extracción (definiciones) | OMS TRS 1010 glosario («extract air»); NTP 742 tabla 1 | Leído |
| Las partículas quedan retenidas en las fibras del filtro | Ficha del INSST sobre filtros mecánicos | Solo fragmento de buscador; se usa como descripción cualitativa, sin cifras |
| H13 = 99,95 %; H14 = 99,995 %; eficiencia medida en el tamaño de partícula más penetrante (MPPS); clases de EN 1822 | OMS TRS 1010 an. 8, tabla A8.1 (reproduce EN 1822:2009) | Leído en el documento gratuito de la OMS |
| De 100000 partículas pasan 10000 (90 %), 50 (H13) y 5 (H14) | Cálculo; el 90 % es valor de ejemplo declarado | Recalculado con python |
| Montaje terminal del HEPA; ayuda a evitar contaminación de sala a sala si falla el ventilador | OMS TRS 1019 an. 2, sección 7 | Leído |
| La colmatación del HEPA aumenta su pérdida de carga y se diagnostica midiendo la presión diferencial entre sus caras; no reduce la eficacia de filtración | NTP 1055 (INSST), apartado «Filtros» | Leído |
| Una bajada brusca de la presión diferencial del filtro hace sospechar rotura o mal asiento | Razonamiento físico (menos resistencia al paso), presentado en el texto como sospecha que se confirma con el ensayo | Sin fuente normativa leída |
| Los HEPA los cambia una persona competente y después se hace ensayo de fugas del filtro instalado | OMS TRS 1010 13.6 | Leído |
| Recirculación: medidas para controlar la contaminación | ICH Q7 4.22 | Leído |
| Aire con disolventes orgánicos o materiales muy peligrosos normalmente no se recircula | OMS TRS 1010 6.5 | Leído |
| Categorías 1 a 3A: se permite recircular con lavado o filtrado adecuado; 3B y 4: se recomiendan sistemas de paso único | NTP 1105, tabla 1 | Leído |
| Definición de renovaciones por hora (caudal en m³/h entre volumen en m³) | OMS TRS 1010 glosario | Leído |
| Cuentas: 90 m³ y 1080 m³/h = 12; 10 × 150 = 1500 m³/h; 60/12 = 5 min | Cálculo con valores de ejemplo | Recalculado |
| Tras una renovación con mezcla perfecta queda el 37 % del aire viejo; tras tres, el 5 % | Cálculo con la ecuación C2 = C1·e^(−Q·Δt/V) de la NTP 741 (e⁻¹ = 0,368; e⁻³ = 0,050) | Ecuación leída; recalculado |
| 30 m³ de aire limpio por hora y trabajador (sedentario, no caluroso, sin humo de tabaco); 50 m³ en los demás casos | RD 486/1997, anexo III.3.d | Leído en el BOE consolidado |
| 7 renovaciones/h (cat. 1 y 2), 10 (3A y 3B), 12 (4) en áreas con principio activo en polvo | NTP 1105, tabla 1 | Leído |
| Valor orientativo de 6 a 20 renovaciones por hora | OMS TRS 1019 an. 2, sección 7 | Leído |
| 10 Pa mínimo entre salas contiguas de distinto grado (valor orientativo) | Anexo 1, punto 4.14 | Leído |
| Diferencias de 5 a 20 Pa sugeridas; suficientes para evitar inversión sin turbulencias | OMS TRS 1019 an. 2, sección 7 | Leído |
| 1 bar = 100000 Pa; 1 mbar = 100 Pa; 15 Pa = 0,15 mbar | Definición de la unidad; cálculo | Recalculado |
| 1 mm c.a. = 9,81 Pa; 15 Pa = 1,53 mm c.a. | Cálculo: densidad del agua 1000 kg/m³ × 9,80665 m/s² × 0,001 m | Recalculado |
| Indicación de presión con manómetros o sistema electrónico; calibrados; rango normal y límites de alerta y acción junto al indicador | OMS TRS 1010 7.7 y 7.8 | Leído |
| Al abrir una puerta cae la diferencia de presión | Razonamiento; OMS TRS 1019 4.1 (las puertas afectan a la presión diferencial) | Leído lo segundo |
| Retardos de alarma evaluados y justificados; diferencias críticas con vigilancia y registro continuos; el aviso no se anula sin evaluación | Anexo 1, 4.16; OMS TRS 1010 7.9 («justified dead times») | Leído |
| Esclusa: definición; de personal y de materiales; ventana de paso | OMS TRS 1010 glosario | Leído |
| Tres tipos: cascada, sumidero y burbuja, con sus presiones | OMS TRS 1019 an. 2, 7.1 | Leído |
| Esclusas con presión positiva o negativa para contener materiales peligrosos | Anexo 1, 4.14 | Leído |
| Puertas no abiertas a la vez; enclavamiento en A y B; aviso visual o sonoro como mínimo en C y D; retardo entre puertas | Anexo 1, 4.13 | Leído |
| Tabla de partículas por grado (A a D, en reposo y en operación) y notas | Anexo 1, tabla 1 (punto 4.27) | Leído y copiado; coincide con la lección `salas-limpias` |
| Uso de los grados A, B, C y D | Anexo 1, 4.4 | Leído |
| El anexo 1 es para estériles y sus principios pueden aplicarse a no estériles si el fabricante lo documenta | Anexo 1, sección 1 (alcance) | Leído |
| ICH Q7 4.21, 4.20 y 8.52 | ICH Q7 | Leído; se buscó «grade», «cleanroom» e «ISO 14644» en el texto y no aparecen |
| La guía de la OMS puede aplicarse a las etapas finales de un API | OMS TRS 1010 an. 8, sección 2 | Leído |
| Zona de síntesis cerrada y clasificada por atmósfera explosiva; zona de acabado con producto expuesto | Descripción general coherente con ICH Q7 4.21, 5.15 y 8.52 y con las lecciones de ATEX | No es cita literal de una norma |
| Flujo turbulento y unidireccional (definiciones; «laminar» ya no se usa) | OMS TRS 1010 glosario | Leído |
| Cabina de pesada: flujo vertical, extracción por encimera perforada, protege al operador y al material | OMS TRS 1019 an. 2, 4.2 | Leído |
| Posición del operador y de los bultos no debe obstruir el flujo; mantener la configuración cualificada | OMS TRS 1010 4.18 y 4.19 | Leído |
| Es incorrecto que el aire arrastre el contaminante hacia la zona respiratoria | NTP 741, figura 2 (texto de la figura) | Leído |
| Humedad relativa del 30 al 70 %; mínimo del 50 % con riesgo por electricidad estática; 17 a 27 °C sedentario; 14 a 25 °C trabajos ligeros; limitaciones del proceso | RD 486/1997, anexo III, apartados 3 y 4 | Leído |
| Polvo y vapores se retiran en origen; el HVAC no es el mecanismo principal de control del polvo; extracción enclavada con la UTA | OMS TRS 1010 9.1 y 9.6 | Leído |
| El aire extraído se lava o filtra antes de expulsarlo | NTP 1105, tabla 1, «Extracción localizada» | Leído |
| Cualificación de salas: lista de ensayos, ensayo de recuperación; «clean up» orientativo de menos de 20 min | Anexo 1, 4.25 y 4.29 | Leído |
| Recuperación orientativa de 15 a 20 min | OMS TRS 1019 an. 2, sección 7 | Leído |
| Reevaluación de sistemas con frecuencia adecuada | Anexo 15, 4.1 | Leído |
| Cambios del HVAC por control de cambios | OMS TRS 1010 12.10 | Leído |
| Límites de alerta y de acción y procedimientos para cuando se alcanzan | OMS TRS 1010 glosario y 12.8; anexo 1 4.16 (procedimiento ante un aviso) | Leído |
| Pasos del operador ante una alarma (parar, cerrar, avisar, anotar, esperar la recuperación) | Práctica general; el texto la presenta como «lo habitual en los procedimientos» | No es cita de una norma; coherente con anexo 1 4.16 y 4.29 y con OMS 13.5 |
| Todos los valores del ejemplo de planta (SL-02, UTA-03, PDI-214, SD-301, FX-101, +15 Pa, 20 min) | Valores de ejemplo, ficticios | Cuentas recalculadas |

## Lo que quería incluir y dejé fuera

- **Mecanismos físicos de captura de un filtro** (impacto, intercepción, difusión) y la cifra del tamaño más penetrante: no encontré fuente gratuita accesible. epa.gov, hse.gov.uk y extranet.who.int no resuelven desde esta sesión.
- **Cifras de eficiencia de los prefiltros** (clases G y F): la tabla A8.1 de la OMS las da con ensayos distintos y ya retirados; no las uso. Tampoco la norma ISO 16890 ni los límites de ISO 14644-1.
- **Que el filtro terminal y los difusores van en el techo y los retornos a baja altura**: no lo leí como afirmación general; solo aparece en el ejemplo de planta, declarado ficticio.
- **Marcas o nombres comerciales de manómetros** (magnehelic).
- **Guía de la OMS sobre sustancias peligrosas (TRS 957, anexo 3)** y la versión de 2011 (TRS 961, anexo 5): las URL probadas devolvieron 404. Por eso no hay detalle de instalaciones en depresión más allá de la NTP 1105 y del anexo 1 (4.14).
- **Guía de la EMA sobre límites de exposición basados en la salud**: no se consultó; la contaminación cruzada se trata solo con ICH Q7 y la OMS.
- **Velocidad del flujo unidireccional (0,36 a 0,54 m/s, anexo 1 4.30), velocidad de transporte en conductos de polvo (15 a 20 m/s, OMS), mínimo de 5 Pa para contención (OMS), ejemplos de escalera de filtros G4, F8 y H13 (OMS TRS 1019, tabla A2.2), puertas que abren hacia el lado de más presión (OMS 4.14), no parar la UTA de noche sin justificación (OMS 5.16), límites de velocidad del aire del RD 486/1997 y periodos de recualificación del anexo 1 (6 y 12 meses)**: leídos y verificados, pero recortados para no pasar de 3000 palabras.
- **Muestreo microbiológico y vestimenta**: solo se remite al nivel 9.
