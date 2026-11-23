# Fuentes de `reactividad-organica-a-fondo`

Fecha de consulta: 23/11/2026. Documentos descargados con curl en `scratchpad/lecciones/tmp-reactividad/dl/` y pasados a texto con `pdftotext -layout`. Cálculos en `tmp-reactividad/calc.py` (Python 3), comprobación de compilación con `tmp-reactividad/tsconfig.json` (tsc sin errores) y recuento de palabras con `tmp-reactividad/chk.mjs` (2802 palabras en el body).

Aviso general: **goldbook.iupac.org** devolvió la página de comprobación de Cloudflare («Just a moment...») con curl y no resolvió con WebFetch; **chem.libretexts.org** tampoco es accesible desde la sesión. No se ha podido leer ninguna definición IUPAC ni ningún libro de texto gratuito completo. Por eso, los mecanismos (nucleófilo, electrófilo, SN1, SN2, E1, E2, Markovnikov, Zaitsev, sustitución aromática, oxidación de alcoholes) figuran como **explicación de libro de texto sin fuente leída**; donde además se vio un fragmento del buscador que lo confirma, se dice. No se da ninguna velocidad relativa ni rendimiento real: los únicos números de velocidad son de Arrhenius con energías de activación declaradas como valor de ejemplo.

## Currículo

| Afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| Química de 2.º de Bachillerato, bloque C.2 «Reactividad orgánica»: propiedades químicas de las funciones orgánicas y «principales tipos de reacciones orgánicas» | Real Decreto 243/2022, BOE-A-2022-5521 (https://www.boe.es/buscar/act.php?id=BOE-A-2022-5521), copia en `auditoria-temario/boe/` | Leído en el documento (título del RD en el XML; texto del bloque C) |
| Módulo 0066 «Análisis químicos», RA 4: «Analiza funciones orgánicas, describiendo el tipo de reacción que tiene lugar»; criterio a) reacciones características de los grupos funcionales | RD 1395/2007 en la redacción del RD 290/2023, BOE-A-2023-10396 | Leído en el documento |

## Nucleófilos, electrófilos y alquilantes

| Afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| Definiciones de nucleófilo, electrófilo, grupo saliente, carbocatión; flecha curva; δ+ y δ− por electronegatividad | Explicación de libro de texto sin fuente leída (Gold Book inaccesible) | — |
| Orden de estabilidad de carbocationes terciario > secundario > primario | Explicación de libro de texto; fragmento de buscador (savemyexams, ncstate.pressbooks.pub, wisc.pb.unizin.org) | Fragmento de buscador |
| «Acetaldehyde is a strong electrophile and is capable of reacting with strong nucleophiles, for example DNA bases» | ICH M7(R2) Addendum, monografía del acetaldehído, https://database.ich.org/sites/default/files/ICH_M7%28R2%29_Addendum_Step4_2023_0216.pdf | Leído en el documento |
| «In vivo, DMS forms alkylated DNA bases» (sulfato de dimetilo) | ICH M7(R2) Addendum, monografía del sulfato de dimetilo | Leído |
| Agente alquilante como electrófilo que une un grupo de carbono a un nucleófilo; daño al ADN | Explicación de libro de texto; el addendum de M7 habla del estireno metabolizado a «un electrófilo» que interactúa con macromoléculas nucleófilas y forma aductos por alquilación de la N7-guanina | Leído (addendum, monografía del estireno); la definición general es de libro de texto |

## Sustitución y eliminación

| Afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| SN2: un paso, ataque por el lado contrario al grupo saliente, inversión de configuración; mejor en carbono primario | Libro de texto; fragmento de buscador (openstax, wikipedia SN2, lumenlearning) | Fragmento de buscador |
| SN1: dos pasos, carbocatión plano, velocidad solo del sustrato, propia de terciarios y nucleófilos débiles | Libro de texto; fragmento de buscador (openstax 11.4, ncstate.pressbooks.pub) | Fragmento de buscador |
| La racemización del SN1 rara vez es completa porque el grupo saliente tapa una cara (par iónico) | Fragmento de buscador (texto tipo OpenStax citado en el resultado; artículo de Chem. Sci. 2020 en pubs.rsc.org) | Fragmento de buscador |
| Ecuaciones CH₃CH₂Br + NaOH; (CH₃)₃CBr + H₂O; CH₃CH₂CH₂Br + CH₃ONa | Ejemplos de libro de texto | Balance atómico comprobado a mano en el texto |
| Eliminación E1/E2, base que arranca el H del carbono vecino; regla de Zaitsev | Libro de texto sin fuente leída (la búsqueda no devolvió nada de Zaitsev) | — |
| Tabla de factores (primario/terciario, base fuerte y voluminosa, temperatura) | Libro de texto; la parte de temperatura con fragmento de buscador | Fragmento de buscador |
| El calor favorece la eliminación: más moléculas, ΔS mayor, término −TΔS; y la eliminación suele tener mayor energía de activación | Fragmento de buscador (masterorganicchemistry.com, rose-hulman.edu, lumenlearning) | Fragmento de buscador; enlaza con `termodinamica-a-fondo` y `cinetica-a-fondo` |
| Ejercicio 2: Ea 100 y 80 kJ/mol; de 40 a 60 °C, × 10,03 y × 6,33; 2 % pasa a 3,1 % | Valores de ejemplo declarados; cálculo con Arrhenius (R = 8,314 J/(mol·K), T en K = °C + 273,15) | Recalculado (calc.py: 10,03; 6,33; 3,14 %) |

## Adición y sustitución aromática

| Afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| Regla de Markovnikov: el H al carbono con más H; explicación por el carbocatión más estable; propeno + HBr da sobre todo 2-bromopropano | Libro de texto; fragmento de buscador (sathee.iitk.ac.in, savemyexams, ncstate.pressbooks.pub) | Fragmento de buscador. Se quitó el año de la regla (1869) por venir solo del buscador |
| Isobuteno sale en la desprotección Boc | Lección `reacciones-en-api-a-fondo` (ya en la app) | Leído en el repo |
| Isobuteno + HCl da 2-cloro-2-metilpropano (carbocatión terciario) | Aplicación de la regla de Markovnikov; libro de texto sin fuente leída. En la lección no se afirma que ocurra en un proceso concreto | — |
| M7, nota 5: cloruros de alquilo monofuncionales «commonly used in drug synthesis», clase estructural de carcinógeno conocido | ICH M7(R2), https://database.ich.org/sites/default/files/ICH_M7%28R2%29_Guideline_Step4_2023_0216_0.pdf | Leído |
| El addendum de M7 da ingesta aceptable propia al cloruro de metilo (1361 µg/día) y al de etilo (1810 µg/día) | ICH M7(R2) Addendum, tabla de AI/PDE | Leído (en la lección solo se dice que tienen límites propios, sin cifras) |
| Sustitución electrófila aromática: el electrófilo cambia un H y el anillo se conserva; nitración con HNO₃ y H₂SO₄ vía ion nitronio | Libro de texto; fragmento de buscador (openpress.usask.ca, jove.com, chem.ucla.edu) | Fragmento de buscador |
| Cloración con Cl₂ y FeCl₃; acilación de Friedel-Crafts; posible segunda sustitución con exceso o calor | Libro de texto sin fuente leída | — |
| Nitrobenceno hidrogenado da anilina | Lección `hidrogenacion-a-fondo` (ya en la app) | Leído en el repo |
| Cuenta de nitración: 390 kg, 5 kmol, 315 kg HNO₃, 615 kg nitrobenceno, 90 kg agua, balance 705 kg | Valores de ejemplo; cálculo con masas redondeadas C 12, H 1, N 14, O 16 | Recalculado |

## Condensación, caso real y hidrólisis

| Afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| Esterificación en equilibrio (cuentas en `equilibrio-a-fondo`); el ácido fuerte la acelera | Lección de la app; el «porque hace más electrófilo el C=O» es libro de texto sin fuente leída | — |
| Amina + cloruro de ácido da amida + HCl | Lección `reacciones-en-api-a-fondo` | Leído en el repo |
| Nelfinavir mesilato; último paso con ácido metanosulfónico; depósito de espera fuera del procedimiento de limpieza; limpiado con etanol sin secar; el etanol residual reaccionó con el ácido y formó metanosulfonato de etilo; esterificación lenta a temperatura ambiente y dependiente del tiempo; lotes hasta 2300 ppm; causas añadidas por los inspectores (vapores de etanol por el diseño de las conexiones de etanol y nitrógeno; transesterificación del metanosulfonato de metilo del ácido); causa general, falta de conocimiento del proceso; límite NMT 3 ppm de EMS en el ácido pedido por el CHMP | EMA, Viracept, «Assessment report – lifting of suspension» (EMEA/H/C/164/Z/109), https://www.ema.europa.eu/en/documents/variation-report/viracept-h-c-164-z-109-epar-assessment-report-lifting-suspension_en.pdf, apartado 2.1.1 | Leído en el documento |
| Mesilato de etilo «a known genotoxic substance» | EMA, «Questions and answers on the follow-up to the Viracept recall», https://www.ema.europa.eu/en/documents/medicine-qa/questions-and-answers-follow-viracept-recall_en.pdf | Leído |
| No se nombra la marca ni la empresa del caso (decisión de redacción) | — | — |
| Ecuación CH₃SO₃H + CH₃CH₂OH da CH₃SO₃CH₂CH₃ + H₂O; masas 96 + 46 = 124 + 18 | Cálculo con masas redondeadas (S 32) | Recalculado. No se describe el mecanismo de formación del sulfonato (quién es el electrófilo), porque no se leyó fuente sobre ello |
| ICH Q1A(R2): el estrés debe evaluar «the susceptibility of the drug substance to hydrolysis across a wide range of pH values» | https://database.ich.org/sites/default/files/Q1A%28R2%29%20Guideline.pdf, apartado 2.1.2 | Leído |
| Saponificación completa con base; amidas más resistentes | Lección `grupos-funcionales-a-fondo` (ya en la app) | Leído en el repo |
| Ácido acetilsalicílico se hidroliza a ácido salicílico y ácido acético | Libro de texto sin fuente leída | — |
| Ejercicio 4: éster 300 g/mol, ácido 272 g/mol, 100 kg, 0,5 % molar, 0,4533 kg | Valores de ejemplo; cálculo | Recalculado |

## Oxidación y reducción

| Afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| Alcohol primario da aldehído y luego ácido; secundario, cetona; terciario no se oxida en condiciones normales | Libro de texto; fragmento de buscador (libretexts, vanderbilt.edu, pearson) | Fragmento de buscador |
| NaBH₄ reduce aldehídos a alcoholes primarios y cetonas a secundarios; no reduce ésteres | Fragmento de buscador (libretexts, lumenlearning) | Fragmento de buscador |
| Los aldehídos se oxidan con facilidad (al aire) | Lección `grupos-funcionales-a-fondo` | Leído en el repo |

## Quiz

| Pregunta | Fuente | Comprobación |
|---|---|---|
| 1. 218 kg bromoetano (109) dan 92 kg etanol | Cálculo (Br 80) | Recalculado |
| 2. 390 kg benceno dan 615 kg nitrobenceno | Cálculo | Recalculado |
| 3. 112 kg isobuteno dan 185 kg de 2-cloro-2-metilpropano (92,5) | Cálculo (Cl 35,5) | Recalculado |
| 4. 0,45 kg de ácido de hidrólisis | Cálculo | Recalculado (0,4533) |
| 5. 3,1 % de alqueno | Cálculo con factores dados | Recalculado (3,13 con factores redondeados) |
| 6 a 10. SN1 en terciario, calor y eliminación, Markovnikov, esterificación en depósito, oxidación de alcohol secundario | Mismas fuentes que el body | — |

## Lo que se quiso incluir y se dejó fuera

- Definiciones literales IUPAC (Gold Book) de nucleófilo, electrófilo, SN1, SN2, regla de Markovnikov y condensación: Gold Book inaccesible.
- Velocidades relativas reales de SN2 en metilo, primario, secundario y terciario, y proporciones reales de sustitución y eliminación a distintas temperaturas (tablas clásicas de Ingold): no se leyó fuente.
- Rendimientos o proporciones orto, meta y para de la nitración de derivados del benceno y los efectos de grupos activantes y desactivantes: sin fuente leída; se dejó fuera para no alargar con datos sin verificar.
- Mecanismo de formación de los sulfonatos de alquilo (si el electrófilo es el alcohol protonado o el azufre) y cifras de su velocidad: solo conozco los estudios de forma indirecta; no se leyó fuente.
- La adición anti-Markovnikov con peróxidos (vista solo en fragmento de buscador).
- El año de la regla de Markovnikov (1869): solo en fragmento de buscador.
- La reacción de Grignard como adición nucleófila al carbonilo: ya la trata en su riesgo `reacciones-en-api-a-fondo`, y el mecanismo no se pudo verificar.

## Ideas para la capa visual

1. **Animación SN2 frente a SN1**: el nucleófilo entrando por detrás y el «paraguas» que se da la vuelta en un paso; al lado, el carbocatión plano y el nucleófilo entrando por las dos caras, con el resultado en dos formas especulares.
2. **Gráfica interactiva sustitución frente a eliminación**: deslizador de temperatura (20 a 80 °C) con las energías de activación del ejercicio 2, que muestre en barras el porcentaje de producto y de alqueno.
3. **Esquema de la regla de Markovnikov** con el propeno y el HBr: los dos carbocationes posibles (primario y secundario) a distintas alturas de energía y el camino que se sigue.
4. **Esquema del depósito de espera del caso de la EMA**: depósito limpiado con etanol sin secar, llenado con ácido metanosulfónico, tiempo de almacenamiento y formación del sulfonato, con las tres causas y la barrera que faltó (secado y comprobación).
