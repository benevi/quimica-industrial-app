# Fuentes y comprobaciones: lección `cristalizacion-a-fondo`

Niveles de comprobación:

- **Leído**: documento oficial descargado con curl, pasado a texto con `pdftotext -layout` y leído el pasaje (copias en `src_crist/dl/` y `src_polimorf/dl/`). El árbol de decisión 4 de ICH Q6A es una imagen: leída en `src_polimorf/dl/t-28.png`.
- **Recalculado**: `src_crist/calc.py` (Python), redondeado igual que en el texto.
- **Simulador**: valor tomado del código de la app (`src/sim/engine.ts`, `src/sim/audit.ts`, `src/sim/review.ts`); es ficticio y está declarado así.
- **Libro de texto**: conocimiento general de cristalización, no leído en una fuente oficial en esta sesión.
- **Fragmento de buscador**: visto solo en el resumen de la búsqueda web; no se usa para cifras.
- **Valor de ejemplo declarado**: inventado y declarado así en la lección.

Documentos leídos:

- ICH Q6A (1999). https://database.ich.org/sites/default/files/Q6A%20Guideline.pdf (copia en `src_polimorf/dl/q6a.txt` y `t-28.png`)
- ICH Q7. https://database.ich.org/sites/default/files/Q7%20Guideline.pdf (copia en `src_polimorf/dl/q7.txt`)
- ICH Q11 (2012). https://database.ich.org/sites/default/files/Q11%20Guideline.pdf (`src_crist/dl/q11.txt`)
- FDA, *Guidance for Industry. PAT — A Framework for Innovative Pharmaceutical Development, Manufacturing, and Quality Assurance* (septiembre de 2004). https://www.fda.gov/media/71012/download (`src_crist/dl/pat.txt`)
- EMA, Norvir, *Scientific Discussion* (EPAR). https://www.ema.europa.eu/en/documents/scientific-discussion/norvir-epar-scientific-discussion_en.pdf (`src_crist/dl/norvir.txt`)

## Tabla de afirmaciones

| Afirmación o cifra | Fuente | Cómo se comprobó |
|---|---|---|
| Curva de solubilidad del producto FX-101 en agua (0 °C 5,0; 5 °C 7,5; 10 °C 10; 20 °C 15; 30 °C 30; 40 °C 60; 50 °C 115; 60 °C 220; 70 °C 430 g/L) | Valor de ejemplo declarado. De 0 a 20 °C coincide con la fórmula del simulador `5 + 0,5·T` g/L (`engine.ts`, `productDryKg`) | Valor de ejemplo; tramo 0–20 °C comparado con el código |
| Forma de la curva: casi plana en frío, empinada en caliente | Consecuencia de los valores de ejemplo | Deducido |
| 130,0 kg en 420 L = 309,5 g/L; saturación a unos 64 °C (64,26 interpolado) | Valor de ejemplo (420 L es el volumen de aguas madres del simulador) y cálculo | Recalculado |
| Hoja FX-101: disolver a 80 °C, filtrar en caliente por F-301, sembrar a 58–62 °C, rampa ≥ 120 min hasta 0–5 °C, mantener ≥ 60 min, lavado con agua fría | `engine.ts` (campos `t_siembra`, `min_rampa`, `t_final`; texto de incidentes), `review.ts` (mantenimiento ≥ 60 min), `guiado.ts` | Simulador |
| Tres zonas (insaturada, metaestable, lábil) | Libro de texto; la zona metaestable ya está en la lección «Disoluciones y solubilidad a fondo» de la app | Libro de texto |
| La anchura de la zona metaestable cambia con la velocidad de enfriamiento, agitación, volumen, historia de la disolución; depende del método de detección | Artículo de 2025 sobre paracetamol en isopropanol (PMC11944372) y guía de CrystEngComm (Southampton), vistos solo en el buscador; impurezas: libro de texto | Fragmento de buscador / libro de texto. Sin cifras |
| Nucleación primaria y secundaria; crecimiento; reparto de la sobresaturación | Libro de texto | Libro de texto |
| Mitad de lado, misma masa: 8 veces más cristales, superficie doble; un tercio: 27 veces y triple | Geometría (masa ∝ L³, superficie ∝ L²) | Recalculado |
| Siembra dentro de la zona metaestable; si caliente se disuelve, si tarde ya ha nucleado | Libro de texto; coincide con «Disoluciones y solubilidad a fondo» | Libro de texto |
| La cantidad de semilla la fija la hoja; no hay cifra general | Decisión de no dar cifra (no verificada) | No aplica |
| Maduración tras la siembra | Libro de texto; lección corta «Cristalización» de la app | Libro de texto |
| Velocidad media máxima 60 / 120 = 0,5 °C/min = 30 °C/h | Cálculo sobre la hoja del simulador | Recalculado |
| Caso de auditoría: rampa de 95 min, final a 3 °C; 57 / 95 = 0,6 °C/min | `audit.ts` (95 min, 3 °C) y cálculo (temperatura de inicio 60 °C supuesta) | Simulador / recalculado |
| Rampa no lineal: despacio al principio, más deprisa al final | Libro de texto (perfiles programados de enfriamiento) | Libro de texto |
| Pared más fría que la masa: más sobresaturación junto a la pared; incrustaciones si la diferencia camisa-masa es grande | Patentes vistas en el buscador (la velocidad de incrustación crece con la diferencia de temperatura con el refrigerante) y libro de texto | Fragmento de buscador / libro de texto. Sin cifras |
| La costra frena el calor (ensuciamiento) | Lección de la app «Intercambio de calor y frío a fondo» | Leído en la app |
| Choque térmico del vidrio | Lección de la app «El reactor a fondo» | Leído en la app |
| Simulador: rampa < 30 min rompe el vidrio del R-102 (glicol a −10 °C con la masa a 80 °C) | `engine.ts`, `runCrystallization` | Simulador |
| Finos: torta menos permeable, escurre peor | Lecciones de la app «Filtros a fondo» y «La centrífuga a fondo» | Leído en la app |
| Humedad de torta 13 % (buena) y 25 % (finos) | `engine.ts`, `centriAction` (`moisture`) | Simulador |
| 130 / 0,87 = 149,4 kg (19,4 kg de líquido); 130 / 0,75 = 173,3 kg (43,3 kg) | Cálculo | Recalculado |
| Masa cristalizada = disuelta − solubilidad final × volumen | Balance de materia | Libro de texto |
| 3 °C: 2,73 kg disueltos, 127,27 kg, 97,9 %; 10 °C: 4,20 kg, 125,80 kg, 96,8 %; 20 °C: 6,30 kg, 123,70 kg, 95,2 % | Cálculo con la curva de ejemplo | Recalculado (97,90; 96,77; 95,15) |
| Mantener < 60 min cuesta 1,5 kg en el simulador | `engine.ts` (`holdBonus`) | Simulador |
| Q7 8.14: comparar rendimiento real con el esperado; investigar desviaciones de rendimiento en pasos críticos | ICH Q7, 8.14 | Leído |
| Q7 14.40: recuperar de aguas madres con procedimientos aprobados y si cumple especificaciones | ICH Q7, 14.40 | Leído |
| Q11: la cristalización elimina impurezas (*purge … via crystallisation*); propiedades físicas determinadas en la última cristalización y operaciones posteriores (molienda, micronización) | ICH Q11, apartado 3.1.4 y 3.2.1 (texto en `q11.txt`, líneas ~300 y ~500) | Leído |
| Por qué purifica (no satura; red ordenada) | Lección de la app «Disoluciones y solubilidad a fondo» | Leído en la app |
| Oclusión, aglomerados, superficie mojada, impureza que encaja en la red; lo que está dentro no se quita lavando | Libro de texto | Libro de texto |
| Q6A 3.3.1 c): especificar el estado sólido si las diferencias afectan al comportamiento, biodisponibilidad o estabilidad | ICH Q6A, 3.3.1 c) | Leído |
| Árbol de decisión 4 (1 y 2): cribado; caracterizar (XRPD, DSC/termoanálisis, microscopía, espectroscopía); ¿propiedades distintas (solubilidad, estabilidad, punto de fusión)?; ¿afecta a seguridad, comportamiento o eficacia?; criterio para el contenido de polimorfo | ICH Q6A, árbol 4, página 24 (imagen) | Leído (imagen) |
| Ritonavir: formas I y II; II la más estable y mucho menos soluble; en la síntesis se forma normalmente la I; cápsula dura retirada por dificultades de fabricación; cápsulas blandas para superar problemas de disolución, autorizadas en 1999 | EMA, EPAR Norvir, *Scientific Discussion* | Leído. En la lección no se nombra la marca |
| Un resto de otra forma puede hacer de semilla | Deducido de la siembra; misma idea en «Polimorfismo, sales y solvatos a fondo» | Deducido |
| PAT: definiciones de *in-line*, *on-line* y *at-line*; tamaño y forma de partícula como atributos físicos | FDA PAT 2004, apartados IV.B (líneas ~369 y ~479 de `pat.txt`) | Leído |
| Existen sondas de turbidez y de tamaño de partícula en cristalizadores | Guía CrystEngComm y material de fabricante vistos en el buscador | Fragmento de buscador. Sin cifras ni marcas |
| Agitación: mantiene en suspensión; demasiado fuerte rompe cristales | Lección de la app «El reactor a fondo» (suspensión) y «El secado a fondo» (la agitación puede romper cristales) | Leído en la app |
| Oiling out: sobresaturación muy alta; el aceite disuelve bien impurezas | Página de aplicación de Mettler Toledo vista solo en el buscador (no accesible) y libro de texto | Fragmento de buscador |
| Q7 8.15: documentar y explicar desviaciones | ICH Q7, 8.15 | Leído |
| Q7 14.20: repetir una cristalización del proceso es reprocesado admitido | ICH Q7, 14.20 | Leído |
| Ejemplo de planta (R-102, C-201, F-301, alarma camisa-masa a 35 °C, 128 min, 2 °C, lavado a 4 °C, siembra a 60,5 °C) | Códigos del simulador; resto valores de ejemplo | Valor de ejemplo declarado |
| Quiz: 63,3 °C; 146,25 kg; 4 kg; 0,5 °C/min; 8 veces; 43,3 kg | Cálculo | Recalculado |

## Lo que quise incluir y dejé fuera

- **Tabla real de solubilidad del paracetamol en agua** frente a la temperatura (Granberg y Rasmuson, *J. Chem. Eng. Data* 1999, 44, 1391; Grant et al., 1984). Solo vi en el buscador el dato de 17,39 g/kg a 30 °C; el PDF (fenix.ciencias.ulisboa.pt) y PubMed Central no son accesibles desde la sesión. Se usó una curva declarada como valor de ejemplo.
- **Cantidad típica de semilla** (porcentaje sobre el producto): no verificada en fuente gratuita accesible.
- **Anchura típica de la zona metaestable** y diferencias máximas camisa-masa para evitar incrustaciones: solo en patentes y artículos vistos en el buscador.
- **Nombres comerciales de sondas** (FBRM y similares): solo en material de fabricante no accesible.
- **Fecha exacta de aparición de la forma II del ritonavir (1998)**: solo en fragmentos del buscador; la lección se limita a lo que dice el EPAR de la EMA.

## Aviso para quien integre la lección

El simulador calcula la solubilidad con `5 + 0,5·T` g/L para cualquier temperatura final. La lección coincide con esa fórmula de 0 a 20 °C; por encima, la curva de ejemplo de la lección sube más deprisa (a 30 °C, 30 g/L frente a 20 g/L del simulador). Si se quiere coherencia total, habría que ajustar la fórmula del simulador por encima de 20 °C o limitar el mensaje de `aguas_madres_caliente`.
