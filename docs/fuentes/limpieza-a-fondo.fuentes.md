# Fuentes de «Limpieza de equipos a fondo» (`limpieza-a-fondo`)

Copias locales y texto extraído en `scratchpad/lecciones/src_limpieza/dl/`. Cálculos en `src_limpieza/calc.py` (python, recalculado el 22/11/2026).

## Documentos leídos

| Abreviatura | Documento | URL | Copia local |
|---|---|---|---|
| ICH Q7 | ICH Q7, *Good Manufacturing Practice Guide for Active Pharmaceutical Ingredients* (2000) | https://database.ich.org/sites/default/files/Q7%20Guideline.pdf | `q7.txt` |
| EU-II | EudraLex vol. 4, parte II (agosto de 2014) | https://health.ec.europa.eu/document/download/bd537ccf-9271-4230-bca1-2d8cb655fd83_en?filename=2014-08_gmp_part1.pdf (enlace de la página https://health.ec.europa.eu/medicinal-products/eudralex/eudralex-volume-4_en, descargada hoy: `v4.html`) | `part2.txt` (copia de `src_envas/dl/p2full.txt`; la descarga de hoy devolvió una página de JavaScript en vez del PDF) |
| A15 | EudraLex vol. 4, anexo 15 (2015) | https://health.ec.europa.eu/document/download/7c6c5b3c-4902-46ea-b7ab-7608682fb68d_en?filename=2015-10_annex15.pdf | `annex15.txt` |
| EMA-PDE | EMA/CHMP/CVMP/SWP/169430/2012, guía de límites basados en la salud en instalaciones compartidas (20/11/2014) | https://www.ema.europa.eu/en/documents/scientific-guideline/guideline-setting-health-based-exposure-limits-use-risk-identification-manufacture-different-medicinal-products-shared-facilities_en.pdf | `pde.txt` |
| EMA-QA | EMA/CHMP/CVMP/SWP/246844/2018, preguntas y respuestas sobre esa guía (19/04/2018) | https://www.ema.europa.eu/en/documents/other/questions-and-answers-implementation-risk-based-prevention-cross-contamination-production-and-guideline-setting-health-based-exposure-limits-use-risk-identification-manufacture-different_en.pdf | `pdeqa.txt` |
| OMS-1019 | WHO TRS 1019 (2019), anexo 3, apéndice 3 «Cleaning validation» | https://cdn.who.int/media/docs/default-source/medicines/norms-and-standards/guidelines/production/trs1019-annex3-gmp-validation.pdf?sfvrsn=9440a5c_0&download=true | `w1019.txt` |
| OMS-1033 | WHO TRS 1033 (2021), anexo 2, *Points to consider when including HBELs in cleaning validation* | https://cdn.who.int/media/docs/default-source/medicines/norms-and-standards/guidelines/inspections/trs1033-annex2-points-to-consider-when-incl-hbels-in-cleaning-validation.pdf?sfvrsn=5ee0cd8a_1&download=true | `who.txt` |
| FDA-93 | FDA, *Guide to Inspections: Validation of Cleaning Processes* (7/93) | https://www.fda.gov/validation-cleaning-processes-793 | `fda.html`, `fda.txt` |

## Tabla de afirmaciones

| Afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| Qué puede contaminar: restos de producto anterior, de agentes de limpieza, microbios, productos de descomposición por ácidos y bases de la limpieza | OMS-1019, ap. 3, 1.2 | Leído en el documento |
| Definición de contaminación cruzada | ICH Q7, glosario «Cross-Contamination» | Leído en el documento |
| Un contaminante no aporta beneficio y puede suponer un riesgo | EMA-PDE, *Executive summary* | Leído en el documento |
| EU-II reproduce los apartados 5.2 y 12.7 de ICH Q7 con la misma numeración | Comparación de `q7.txt` y `part2.txt` (5.21 a 5.26 palabra a palabra con diff; 12.70 a 12.76 leídos uno junto a otro) | Leído en los dos documentos. Solo se afirma para estos apartados |
| Contenido de los procedimientos de limpieza (responsable, calendarios, métodos y dilución, desmontaje, quitar identificación del lote anterior, protección, inspección justo antes de usar, tiempo máximo hasta limpiar) | ICH Q7, 5.21 | Leído en el documento |
| Limpieza en campaña a intervalos para evitar acumulación (degradados, microorganismos) | ICH Q7, 5.23 | Leído en el documento |
| Equipo no dedicado se limpia entre productos; criterios y agentes definidos y justificados; identificación del contenido y estado de limpieza | ICH Q7, 5.24, 5.25, 5.26 | Leído en el documento |
| Registros de uso y limpieza: fecha, hora, producto, lote, quién limpió | ICH Q7, 6.20 | Leído en el documento |
| Validación normal; muestreo por hisopo, aclarado u otros; vigilancia posterior; la inspección visual detecta suciedad gruesa concentrada | ICH Q7, 12.70, 12.73, 12.76 | Leído en el documento |
| El anexo 15 puede usarse para principios activos como orientación complementaria opcional | A15, «Principle» | Leído en el documento |
| Visual importante pero no único criterio; repetir limpieza y análisis hasta que salga no es aceptable | A15, 10.2 | Leído en el documento |
| Tiempos sucio y limpio | A15, 10.8; OMS-1033, 5.11; OMS-1019, 4.3 y 8.3 | Leído en los documentos |
| Limpieza manual: eficacia confirmada con frecuencia justificada | A15, 10.15 | Leído en el documento |
| TOC y conductividad como parámetros representativos si no se puede analizar el residuo concreto | A15, 10.6.2 | Leído en el documento |
| Duración máxima de la campaña como base de la validación | A15, 10.9 | Leído en el documento |
| Definición de verificación de limpieza (tras cada lote o campaña) | A15, glosario | Leído en el documento |
| Análisis en cada cambio de producto salvo justificación por análisis de riesgos | EMA-QA, pregunta 7 | Leído en el documento |
| Inspección visual: formación específica, revisión periódica de la vista, evaluación práctica; espejo, linterna, boroscopio; desmontaje | EMA-QA, pregunta 8 | Leído en el documento |
| Nombre «círculo de Sinner» y sigla TACT (tiempo, acción, química o concentración, temperatura), y que los factores se compensan | Búsqueda web: fragmentos de STERIS (*Critical Process Parameters*), Processing Magazine, Pharmaceutical Technology y GMP Compliance Adviser | **Solo fragmento de buscador** (sterislifesciences.com no accesible desde la sesión). Se dice en el texto que no se encontró en una norma oficial. No se usa ninguna cifra de ahí |
| Factores a considerar en el protocolo: agente, concentración, volumen, tiempo y temperatura, caudal, presión, aclarados | OMS-1019, ap. 3, 4.2 | Leído en el documento |
| CIP con bolas o cabezales; el chorro tiene que llegar a todo | Descripción general. La FDA-93 trata el CIP como zona de especial atención y pide identificar las zonas críticas (OMS-1019, 6.1 y 9.6) | Leído (FDA-93, OMS-1019); la descripción del funcionamiento de bolas y cabezales es explicación propia, sin cifras |
| Limpieza con disolvente a reflujo: el condensado lava tapa, columna y condensador | Fragmentos de buscador (Pharmaceutical Technology Europe 2003; patente USPTO 8653015) y razonamiento físico | **Fragmento de buscador** + razonamiento. Sin cifras |
| Elegir el agente de limpieza por solubilidad, material, seguridad, facilidad de eliminar y detectar | OMS-1019, ap. 3, 4.3 | Leído en el documento |
| La FDA menciona el lavado con disolvente en procesos de síntesis («solvent wash») | FDA-93 | Leído en el documento. En el texto se dice «tan a menudo», sin cifra de frecuencia |
| Detergentes: composición conocida, eliminación demostrada, límites definidos | OMS-1019, ap. 3, 7.1 a 7.3; FDA-93 (*Detergent*) | Leído en los documentos |
| El proceso FX-101 es en agua y cristaliza al enfriar (se disuelve mejor en caliente) | Simulador de la app (`BRIEF-N12.md`; `src/sim/engine.ts`: siembra a 58–62 °C y enfriamiento a 0–5 °C) | Leído en el código de la app. Proceso ficticio |
| Secuencia y cifras de la tabla (100 L, 300 L a 60 °C, 60 min, 3 × 100 L, 500 mL) | Valor de ejemplo declarado | No proceden de ninguna norma |
| Modelo de aclarados: 2 L retenidos + 98 L; 10 g/L; 0,2 g/L, 4 mg/L, 0,08 mg/L; factor 0,02; 50 veces más si se salta el tercero | Cálculo con valores de ejemplo declarados (modelo de mezcla perfecta) | Recalculado (`calc.py`) |
| Secar; no dejar agua estancada | FDA-93 (*Equipment Design*); OMS-1019, 8.4 | Leído en los documentos |
| El secado de los residuos afecta a la eficacia de la limpieza | FDA-93; OMS-1019, 9.1 | Leído en los documentos |
| Ejemplo de relojes: 18/11 16:00 + 48 h = 20/11 16:00; 19/11 02:00 + 72 h = 22/11 02:00 | Cálculo con valores de ejemplo (72 h coincide con la auditoría del simulador, `src/sim/audit.ts`) | Recalculado |
| Estados y etiquetas (sucio, en limpieza, pendiente, liberado, fuera de servicio) | ICH Q7, 5.26 exige identificar el estado, sin fijar cómo | Leído. La tabla de estados es práctica habitual y así se declara en el texto |
| Comparación inspección visual, hisopo, aclarado | ICH Q7, 12.73 y 12.76; FDA-93 (*Sampling*); OMS-1019, 9.2 a 9.8 | Leído en los documentos |
| Analogía de la «olla sucia» | FDA-93 («dirty pot») | Leído en el documento |
| Combinar dos o tres métodos; visual siempre que sea posible y seguro | OMS-1033, 5.4 | Leído en el documento |
| Recuperación: > 80 % buena, > 50 % razonable, < 50 % dudosa | OMS-1019, ap. 3, 9.9 | Leído en el documento |
| Ejemplo del hisopo: 3,2 / 0,80 = 4,0 µg; 4,0 / 100 = 0,04 µg/cm² | Cálculo con valores de ejemplo | Recalculado |
| Preferencia por métodos específicos (HPLC); TOC y UV donde se justifique | OMS-1033, 5.9; OMS-1019, 10.5 | Leído en los documentos |
| El TOC no distingue el residuo en un aclarado con disolvente orgánico | Razonamiento: el TOC mide todo el carbono orgánico (definición en la lección de agua de la app, `nivel14-agua.ts`) | Deducción lógica, sin cifra |
| Registros firmados por el operador, comprobados por producción y revisados por QA | OMS-1019, ap. 3, 4.9 (contexto de validación) | Leído en el documento |
| Entre lotes del mismo producto basta «visiblemente limpio» y no requiere validación | FDA-93; OMS-1019, 1.5 | Leído en los documentos |
| Tolueno: ebullición 111 °C, punto de inflamación 4 °C | Lección de la app `nivel3-disolventes.ts` (tabla, con sus fuentes en `docs/fuentes/disolventes-a-fondo.fuentes.md`) | Tomado de la app; no se pudo releer en NIST (webbook.nist.gov rechazado por el proxy) |
| Riesgos: espacio confinado, nitrógeno, consignación | Remisión a las lecciones de la app «Inertización a fondo» y «Permisos de trabajo, consignación y espacios confinados a fondo» | Leídos los índices de esas lecciones; aquí no se dan cifras nuevas |
| Telas o sacos de centrífuga, difíciles de limpiar, deben considerarse | OMS-1033, 5.2 | Leído en el documento. Que en el ejemplo se cambie la tela es valor de ejemplo |
| Rechazo a reanalizar hasta que sale bien | FDA-93 (*Test Until Clean*); OMS-1019, 9.3; A15, 10.2 | Leído en los documentos |
| Ejemplo de planta (FX-101, KZ-30, R-101, C-201, 48 h, 72 h, 80 °C, 60 rpm, 0,2 mg/L) | Valores de ejemplo declarados; códigos ficticios | Sin fuente externa |
| Test: 73,5 h; 50 h; 20 mg/L; 0,12 µg/cm²; 5 L | Cálculo | Recalculado (`calc.py`) |

## Lo que quería incluir y dejé fuera

- Cifras de temperatura, tiempo o concentración típicas de un CIP o de un lavado a reflujo (por ejemplo «5 a 10 reflujos»): solo aparecían en fragmentos de buscador de artículos comerciales.
- El límite de residuo visible (µg/cm²) que da la lección corta: no se encontró en un documento oficial leído; la OMS-1033 (5.12) solo dice que se determina con estudios de dopado.
- Caudales mínimos para bolas de lavado: solo en documentación de fabricantes no accesible.
- El cálculo del MACO o del MSC: ya está en «Cualificación y validación a fondo»; no se repite.
- Criterios históricos de 10 ppm y 0,1 % de la dosis (OMS-1019, 11.9): leídos, pero se omiten porque la OMS-1033 (apartado 4) los sustituye por el enfoque basado en la salud y no son tarea del operador.
