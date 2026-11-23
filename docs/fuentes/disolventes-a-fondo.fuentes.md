# Fuentes de «Disolventes a fondo» (`disolventes-a-fondo`, nivel 3)

## Documentos leídos

| Clave | Documento | URL |
|---|---|---|
| Q3C | ICH Q3C(R8), «Impurities: Guideline for Residual Solvents», Step 4, 22 de abril de 2021 (parte I entera: 1, 2, 3.1 a 3.5, 4.1 a 4.4, glosario, apéndices 1 a 3) | https://database.ich.org/sites/default/files/ICH_Q3C-R8_Guideline_Step4_2021_0422.pdf (ya descargado en otra lección; texto releído en esta) |
| Q7 | ICH Q7, guía de GMP para principios activos: 7.1, 7.2, 7.3 (7.30 a 7.32), 8.11, 8.12, 11.4, 14.4 (14.40 a 14.43) | https://database.ich.org/sites/default/files/Q7%20Guideline.pdf |
| RD117 | Real Decreto 117/2003, texto consolidado: artículo 2 (definiciones), artículo 5, anexo I punto 7, anexo II (fila de productos farmacéuticos), anexo IV | https://www.boe.es/buscar/act.php?id=BOE-A-2003-2515 |
| CLP | Reglamento (CE) n.º 1272/2008, DOUE L 353 de 31.12.2008: anexo I, 2.6.1 y tabla 2.6.1; anexo VI, tabla 3.1 (entradas de metanol, etanol, propan-2-ol, acetona, acetato de etilo, tolueno, heptano, tetrahidrofurano y diclorometano) | https://www.boe.es/doue/2008/353/L00001-01355.pdf (copia ya descargada para «Atmósferas explosivas a fondo», releída aquí) |
| NTP663 | INSST, NTP 663 «Propiedades fisicoquímicas relevantes en la prevención del riesgo químico» | https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/19-serie-ntp-numeros-646-a-680-ano-2004/ntp-663.-propiedades-fisicoquimicas-relevantes-en-la-prevencion-del-riesgo-quimico.- |
| NTP673 | INSST, NTP 673 «La sustitución de agentes químicos peligrosos: aspectos generales» (2004) | https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/19-serie-ntp-numeros-646-a-680-ano-2004/ntp-673.-la-sustitucion-de-agentes-quimicos-peligrosos-aspectos-generales.- |
| NTP768 | INSST, NTP 768 «Trasvase de agentes químicos: medidas básicas de seguridad» (2007) | https://www.insst.es/es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/22-serie-ntp-numeros-751-a-785-ano-2007/nota-tecnica-de-prevencion-ntp-768 |
| NTP480 | INSST, NTP 480 «La gestión de los residuos peligrosos en los laboratorios universitarios y de investigación» (1998) | https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/14-serie-ntp-numeros-471-a-505-ano-1999/ntp-480-la-gestion-de-los-residuos-peligrosos-en-los-laboratorios-universitarios-y-de-investigacion |
| APP | Lecciones y fichas de la app: `src/content/nivel3.ts` («Disolventes orgánicos y disolventes residuales»), `nivel0.ts` («Densidad: de litros a kilos»), `nivel1-enlaces.ts`, `fds.ts` (metanol y tolueno), `nivel15-atex.ts`, `nivel15-emergencias.ts`, `nivel2-balance.ts`, `nivel12-secado.ts`, `nivel12-separacion.ts` («Destilación y concentración») | Repo |

## Afirmación por afirmación

| Dato o afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| Elegir el disolvente puede mejorar el rendimiento o determinar forma cristalina, pureza y solubilidad; puede ser un parámetro crítico | Q3C, 1 Introduction | Leído en el documento |
| Lo que se pide al disolvente en cada uno de los cinco trabajos (tabla «Cinco trabajos») | Conocimiento general de proceso, coherente con APP (nivel1-enlaces: miscibilidad, antidisolvente, limpieza; extracción y cristalización del nivel 12) | Explicación conceptual, sin cifras |
| Ebullición: metanol 65, etanol 78, isopropanol 82, acetona 56, acetato de etilo 77, tolueno 111, heptano 98, diclorometano 40, THF 66 °C | APP, nivel3.ts (tabla de «Disolventes orgánicos…»); tolueno 111 °C y metanol 65 °C también en fds.ts | Leído en la app (no contrastado con fuente externa: las FISQ/ICSC están en chemicalsafety.ilo.org, bloqueado 403) |
| Agua hierve a 100 °C | Libro de texto; también nivel12-secado | Conocimiento de libro de texto |
| Densidades: agua 1,00; metanol 0,79; acetona 0,79; tolueno 0,87; diclorometano 1,33 kg/L | APP, nivel0.ts («Densidad: de litros a kilos»); metanol 0,79 y tolueno 0,87 también en fds.ts | Leído en la app |
| Miscibilidad con agua (sí/poco/no) | APP, nivel3.ts y nivel1-enlaces.ts | Leído en la app |
| Punto de inflamación del metanol «unos 10 °C» | APP, fds.ts («≈ 10 °C (vaso cerrado)») | Leído en la app. Nota: nivel3.ts da 11 °C; se usa el de la FDS |
| Punto de inflamación del tolueno 4 °C | NTP663, apartado «Punto de inflamación o de destello» («tolueno (4 ºC)»); también fds.ts («≈ 4 °C») | Leído en el documento |
| Metanol, etanol, propan-2-ol, acetona, acetato de etilo, tolueno, heptano y THF: Flam. Liq. 2, H225 | CLP, anexo VI, tabla 3.1 (601-008-00-2 heptano, 601-021-00-3 tolueno, 603-001-00-X metanol, 603-002-00-5 etanol, 603-025-00-0 THF, 603-117-00-0 propan-2-ol, 606-001-00-8 acetona, 607-022-00-5 acetato de etilo) | Leído en el documento (versión original de 2008; no se han revisado adaptaciones posteriores) |
| Categoría 2: punto de inflamación < 23 °C y ebullición inicial > 35 °C | CLP, anexo I, tabla 2.6.1 | Leído en el documento |
| Diclorometano: Carc. 2, H351, sin clase de inflamabilidad en su entrada | CLP, anexo VI, 602-004-00-3 | Leído en el documento (versión 2008) |
| Tolueno también Repr. 2 H361d (no usado en el texto) | CLP, anexo VI | Leído |
| Clases y límites de opción 1: metanol 2 (3000), tolueno 2 (890), diclorometano 2 (600), THF 2 (720), hexano 2 (290); etanol, 2-propanol, acetona, acetato de etilo, heptano clase 3 | Q3C, tablas 2 y 3 y apéndice 1 | Leído en el documento |
| El agua no está en la guía (define residuales como orgánicos volátiles) | Q3C, 1 Introduction (definición) y apéndice 1 (no figura) | Leído |
| Definición de disolvente residual; «no therapeutic benefit»; eliminarlos hasta donde sea posible | Q3C, 1 | Leído |
| Definiciones de las clases 1, 2 y 3; clase 3 con PDE de 50 mg/día o más | Q3C, 3.1 | Leído |
| Clase 1 no debe emplearse salvo uso inevitable con avance terapéutico significativo; tabla 1 (benceno 2, tetracloruro de carbono 4, 1,2-dicloroetano 5, 1,1-dicloroeteno 8, 1,1,1-tricloroetano 1500) con su motivo | Q3C, 4.1 y tabla 1 | Leído |
| 1,1,1-tricloroetano incluido por peligro ambiental; límite basado en revisión de datos de seguridad | Q3C, 4.1 | Leído |
| Si es probable que haya clase 1, identificar y cuantificar | Q3C, 3.5 | Leído |
| Definición de PDE: ingesta máxima aceptable por día | Q3C, glosario | Leído |
| PDE derivada de NOEL, peso humano de 50 kg y factores F1 a F5 | Q3C, apéndice 3 | Leído |
| Opción 1: 10 g/día; ecuación (1) ppm = 1000 × PDE / dosis (PDE en mg/día, dosis en g/día) | Q3C, 3.3 | Leído |
| 1 % = 10 000 ppm; ppm = mg/kg | Libro de texto; también en nivel3.ts (término «Partes por millón») | Comprobado por cálculo |
| Cuenta 1: 1000 × 6,0 / 10 = 600; 1000 × 2,9 / 10 = 290 | Cálculo con PDE de Q3C, tabla 2 | Recalculado con python |
| Cuenta 2: 0,18 % = 1800 ppm < 3000; 1800 mg/kg × 250 kg = 450 g; 0,10 % = 1000 ppm > 890 | Cálculo; resultados de análisis y lote son valores de ejemplo declarados por el contexto | Recalculado con python |
| Cuenta 3: 50 mg/día equivale a 5000 ppm (0,5 %) con la opción 1; mayores cantidades aceptables si realistas con capacidad de fabricación y GMP | Q3C, 4.3 | Leído y recalculado |
| 3200 ppm = 0,32 % | Cálculo (valor de ejemplo) | Recalculado |
| Cuenta 4: tolueno 1000 × 8,9 / 2,0 = 4450 ppm; metanol 1000 × 30 / 25 = 1200 ppm | Cálculo con Q3C 3.3 (opción 2; productos de más de 10 g/día bajo opción 2) | Recalculado con python; dosis son valores de ejemplo |
| Opción 2: dosis máxima diaria conocida, suma por componentes, solo si reducido al mínimo práctico | Q3C, 3.3 | Leído |
| Ejemplo acetonitrilo: 800 ppm en el principio activo, total 3,64 mg/día < 4,1 | Q3C, 3.3 (primer ejemplo); 0,24 + 0,36 + 3,04 = 3,64 | Leído y recalculado |
| «Probable que esté presente»: disolvente del último paso y anteriores no eliminados de forma constante por un proceso validado | Q3C, 3.5 | Leído |
| Tabla 4: sin datos toxicológicos adecuados (p. ej. isopropyl ether); el fabricante justifica | Q3C, 4.4 | Leído |
| Solo clase 3: puede usarse un método no específico como el LOD | Q3C, 3.4 | Leído |
| La guía no trata los solvatos, pero su contenido de disolvente se evalúa y justifica | Q3C, 1 | Leído |
| Disolvente mojando, ocluido y en solvatos; límite del secado | APP, nivel1-enlaces.ts («En el secado») y nivel12-secado.ts | Leído en la app; se remite sin repetir |
| Lavado de clase 3 para desplazar uno de clase 2; tortas agrietadas o mal escurridas | Explicación conceptual, presentada como posibilidad («puede») | Sin cifras; no verificado en fuente externa |
| Especificación acordada y proveedores aprobados | Q7, 7.12 | Leído |
| Examen visual en recepción (etiqueta, correspondencia de nombre del proveedor e interno, daños, precintos) y cuarentena | Q7, 7.20 | Leído |
| Antes de mezclar con existencias (disolventes en depósito) identificar, analizar si procede, aprobar; procedimientos para no descargar mal | Q7, 7.21 | Leído |
| Código, lote o número de recepción para cada envase | Q7, 7.24 | Leído |
| Al menos un ensayo de identidad por lote; CoA si hay sistema de evaluación de proveedores | Q7, 7.30 (y 7.31 para el control periódico, no citado) | Leído |
| Producción verifica antes de usar que los materiales son los de la hoja | Q7, 8.12 | Leído |
| Agua en disolventes medida por Karl Fischer | APP, nivel6 («Valoración Karl Fischer: medir el agua») | Remisión; «puede fijar un máximo» es genérico |
| Usos de la destilación (recuperar disolventes); separación por punto de ebullición; azeótropos con ejemplos | APP, nivel12-separacion.ts («Destilación y concentración») | Leído en la app; en esta lección solo la idea, sin cifras |
| Definición conceptual de azeótropo (hierve a composición fija; vapor igual al líquido) | Conocimiento de libro de texto | Sin cifras |
| Lote que gasta más disolvente que producto | APP, nivel2-balance.ts (670 kg de metanol frente a 118,2 kg de producto, valores de ejemplo) | Leído en la app |
| ICH Q7 14.40 a 14.43 | Q7, 14.4 | Leído y parafraseado |
| COV: presión de vapor ≥ 0,01 kPa a 293,15 K (en el término) | RD117, artículo 2 | Leído |
| Disolvente orgánico halogenado: al menos un átomo de bromo, cloro, flúor o yodo por molécula | RD117, artículo 2 | Leído |
| COV halogenados con H341 o H351: 20 mg/Nm³ si el caudal másico ≥ 100 g/h | RD117, artículo 5.1.b (redacción desde el 1 de junio de 2015) | Leído |
| El diclorometano es H351 | CLP, anexo VI | Leído |
| Entrada I2: recuperado y reutilizado se cuenta cada vez que se usa; «consumo» excluye los COV recuperados para su reutilización | RD117, anexo IV punto 3 y artículo 2 («Consumo») | Leído |
| Umbrales (> 50 t/año farmacéutica) y límites de emisión total | RD117, anexo II | Leído, pero no se repiten (están en «Almacenamiento, emergencias y residuos a fondo») |
| Sustitución: definición, prioridad (art. 5 RD 374/2001), la de disolventes la más descrita y con mejores resultados, aparece un riesgo nuevo menor | NTP673 | Leído en el documento (ficha HTML) |
| Q3C recomienda disolventes menos tóxicos; idealmente clase 3 cuando sea práctico | Q3C, 1 | Leído |
| Hexano clase 2 (290 ppm), heptano clase 3 | Q3C, tablas 2 y 3 | Leído |
| Cambiar de disolvente en un proceso aprobado pasa por control de cambios | Q7, 7.14 remite a la sección 13 (Change Control); conocimiento general GMP | Leído 7.14 |
| El trasvase es la operación con más accidentes | NTP768, introducción | Leído |
| Halogenados: líquidos orgánicos con más del 2 % de algún halógeno, incluidas mezclas que superen el 2 %; ejemplo cloruro de metileno; evitar mezclar inmiscibles | NTP480, grupos I y II | Leído (contexto de laboratorio) |
| Un disolvente sin mezclar se puede recuperar; halogenados (07 05 03*) aparte | APP, nivel15-emergencias.ts | Leído en la app |
| Puesta a tierra antes de trasvasar | APP, nivel15-atex.ts | Remisión |
| Ejemplo de planta (LX-33, R-512, C-520, SD-530, DR-15, FQ-512, códigos D-0110/D-0115, resultados 1800 y 2100 ppm) | Valores de ejemplo declarados; especificación igual a la opción 1 de Q3C | Inventado como ejemplo ficticio |
| Quiz: 720; 1200; 400 g; 4000; 1 mg/día; 0,35 % | Cálculos con PDE de Q3C | Recalculados con python |

## Versión de la guía ICH Q3C
- La revisión vigente es la R9. No se pudo descargar: las URL probadas en database.ich.org dan 404, www.ich.org no resuelve desde esta sesión y la página de la EMA devolvió un error. Se usó la R8 (2021), que sí responde.
- Según fragmentos del buscador (gmp-publishing.com, gmp-compliance.org; Health Canada indica implantación el 27 de junio de 2025), la R9 (Step 4, enero de 2024) solo revisa el apartado 3.4 de procedimientos analíticos (volatilidad de los disolventes y remisión a ICH Q2). Solo fragmento de buscador: no se ha leído. Los límites usados (tablas 1 a 3) no cambian según esos fragmentos, pero no se ha podido confirmar en el PDF. El texto citado del 3.4 («si solo hay clase 3, puede usarse un método no específico como el LOD») es de la R8.
- Otro fragmento del buscador (EMA) menciona una discusión sobre el etilenglicol (620 ppm); no se usa en la lección.

## Lo que quedó fuera por no poder verificarlo
- Densidad de etanol, isopropanol, acetato de etilo, heptano y THF: puesto «no lo damos» en la tabla. Las FISQ/ICSC (chemicalsafety.ilo.org, www.ilo.org) dan 403; la NTP 663 no las trae.
- Puntos de inflamación exactos de etanol, isopropanol, acetona, acetato de etilo, heptano y THF (la lección `disolventes-organicos` da valores «aprox.» sin fuente): se sustituyeron por «menor de 23 °C» según la clasificación CLP leída.
- Comportamiento del diclorometano en el ensayo de inflamabilidad («no inflamable en ensayo estándar» de nivel3.ts): no verificado; se dice solo que no tiene clase de inflamable en el anexo VI del CLP.
- Cifras de azeótropos (composición y temperatura): solo la idea; los ejemplos se dejan en «Destilación y concentración».
- Guías de selección de disolventes de la industria (CHEM21, GSK, Pfizer, ACS GCI): no accesibles; solo la idea.
- NTP específica del INSST sobre recuperación de disolventes por destilación: no se encontró ninguna.
- Pruebas concretas de la especificación de un disolvente recuperado (pureza, agua, impurezas): no se dan valores.
- Cuaderno de divulgación del INSST «Los disolventes y nuestra salud» (1987): la URL dio 404.
