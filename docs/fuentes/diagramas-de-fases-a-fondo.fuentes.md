# Fuentes de `diagramas-de-fases-a-fondo`

Fecha de consulta: 23/11/2026. Descargas en `scratchpad/lecciones/tmp-fases/` (`nist/`, `ctl/`, `otros/`). Cálculos en `tmp-fases/calc.py` (Python 3), todos recalculados y redondeados como en el texto.

Abreviaturas:
- **NIST-4** = página «Phase change data» del NIST Chemistry WebBook, `https://webbook.nist.gov/cgi/cbook.cgi?ID=<CAS>&Units=SI&Mask=4` (agua C7732185, CO₂ C124389, tolueno C108883, n-heptano C142825, etanol C64175, metanol C67561, ácido benzoico C65850).
- **Kuphaldt** = *Lessons in Industrial Instrumentation*, capítulo «Elementary thermodynamics», https://control.com/textbook/physics/elementary-thermodynamics/ (apartados «Phase diagrams and critical points», «Thermodynamic degrees of freedom» y el de calor latente).
- **FDA-lyo** = FDA, *Guide to Inspections of Lyophilization of Parenterals* (7/93), https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/inspection-guides/lyophilization-parenteral-793
- **ICSC 0021** = Ficha internacional de seguridad química del dióxido de carbono (OIT/OMS, versión española), https://chemicalsafety.ilo.org/dyn/icsc/showcard.display?p_lang=es&p_card_id=0021&p_version=2

## Diagrama de fases y regla de las fases

| Dato o afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| Diagrama de fases: P en un eje y T en otro; curvas que separan sólido, líquido y vapor; cada punto de una curva es una pareja P-T de cambio de fase | Kuphaldt | Leído en el documento |
| Punto triple: intersección de las tres curvas, las tres fases a la vez | Kuphaldt | Leído |
| Punto crítico: donde termina una curva; por encima de la temperatura crítica ninguna presión mantiene el líquido | Kuphaldt | Leído |
| Agua: punto triple 0,01 °C y 0,006 atm | Kuphaldt («0.006 atmospheres and 0.01 degrees Celsius») | Leído |
| Agua: presión del punto triple 0,0061 bar | NIST-4 C7732185 (Sato, Watanabe et al. 1991) | Leído; 0,0061 bar = 6,1 mbar recalculado |
| Agua: ebullición normal 373,17 K (100,0 °C) | NIST-4 (media de 7 valores) | Leído |
| Agua: Tc 647 ± 2 K (unos 374 °C), Pc 220,64 bar | NIST-4 (Tc media; Pc Sato et al. 1991, Sifner 1985) y Kuphaldt («approximately 374 degrees Celsius») | Leído; 647 − 273,15 = 373,85 |
| La línea de fusión del agua se inclina a la izquierda porque el agua se dilata al congelar; la del CO₂ y la mayoría, a la derecha | Kuphaldt | Leído |
| Regla de las fases: grados de libertad + fases = componentes + 2; tabla de 2, 1 y 0 grados con el agua; caldera: la presión fija la temperatura | Kuphaldt («Gibbs’ Phase Rule», «steam boiler») | Leído |
| Aplicación al reactor a reflujo (masa a la T de la presión aunque suba la camisa) | Deducción de la regla anterior; coincide con `materia-a-fondo` y `destilacion-a-fondo` de la app | Leído en las lecciones |
| CO₂: punto triple 216,58 K (−56,57 °C) y 5,185 bar; punto crítico 304,18 K (31,03 °C) y 73,80 bar | NIST-4 C124389 (Marsh 1987 / Angus 1976; Suehiro 1996) | Leído; conversiones recalculadas |
| CO₂: punto triple por encima de la atmosférica, no es líquido sin presión (60,4 psig), el hielo seco sublima | Kuphaldt | Leído; 5,185 bar − 1,013 = 4,17 bar = 60,5 psig recalculado, cuadra |
| Sublimación del CO₂ a −78,5 °C | ICSC 0021 («Punto de sublimación: −78.5 °C») | Leído |
| Antoine del CO₂ sólido (NIST: A 6,81228, B 1301,679, C −3,494; 154,26–195,89 K) da −78,4 °C a 1,01325 bar | NIST-4 C124389 (Giauque y Egan 1937) | Leído y recalculado (194,73 K) |
| Botella de CO₂ con líquido a 20 °C | Lección `gases-a-fondo` de la app (57,3 bar a 20 °C, NIST) | Leído en la lección; en el cuerpo final se quitó la cifra al recortar |
| Fluido supercrítico: por encima de Tc no hay líquido ni superficie | Kuphaldt (por encima de Tc solo existe como vapor); el nombre «fluido supercrítico» es de libro de texto | Parcialmente leído; el término no se leyó en fuente gratuita |

## Liofilización

| Dato o afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| Definición: quitar el agua de un producto congelado y a vacío, el hielo pasa de sólido a vapor sin líquido | FDA-lyo | Leído |
| Tres etapas: congelación, secado primario (sublimación) y secundario (desorción) | FDA-lyo | Leído |
| Se congela por debajo del punto eutéctico; mantener el producto al menos 4–5 grados por debajo del eutéctico en el secado primario | FDA-lyo («Typically, the product is frozen at a temperature well below the eutectic point», «at least 4-5o below the eutectic point») | Leído |
| Meltback: forma de colapso por paso de sólido a líquido, sublimación incompleta; cambio de forma física y bolsa de humedad | FDA-lyo | Leído |
| Definición de temperatura eutéctica («punto del diagrama donde están todas las fases y ni la temperatura ni la composición del líquido pueden cambiar sin que desaparezca una») | FDA-lyo, glosario | Leído |
| Por debajo de la presión del punto triple no hay zona de líquido | Deducción del diagrama de Kuphaldt (la curva sólido-vapor está por debajo del punto triple) | Razonado sobre el documento leído |
| La liofilización es rara en API y se usa en inyectables | La guía FDA es de parenterales; la imagen `liofilizador-bandejas` de `media.ts` dice que se usa con productos muy sensibles al calor | Leído; la frase «rara en API» es una valoración, no un dato |

## Presión de vapor y Antoine

| Dato o afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| Forma NIST log₁₀ P = A − B/(T + C), P en bar, T en K | NIST-4 | Leído |
| Tolueno 4,07827 / 1343,943 / −53,773 (308,52–384,66 K) | NIST-4 C108883 (Williamham, Taylor et al. 1945) | Leído |
| n-Heptano 4,02832 / 1268,636 / −56,199 (299,07–372,43 K) | NIST-4 C142825 (Williamham 1945) | Leído |
| Etanol 5,37229 / 1670,409 / −40,191 (273–351,70 K) | NIST-4 C64175 (Kretschmer y Wiebe 1949) | Leído |
| Agua 5,20389 / 1733,926 / −39,485 (304–333 K) | NIST-4 C7732185 (Bridgeman y Aldrich 1964) | Leído |
| Constantes del simulador (6,95464 / 1344,8 / 219,482, mmHg y °C) | `docs/simulador-reactor.md` y `destilacion-a-fondo` | Leído |
| Conversión: A + log 750,06 = 6,9534; C + 273,15 = 219,377; ambas dan 110,6 °C a 1,01325 bar e idéntica presión de vapor a 20, 60, 70, 90, 95, 100 y 110 °C (29,1; 185,3; 271,6; 542,3; 635,8; 741,7; 995,4 mbar) | Cálculo | Recalculado; 1 bar = 750,06 mmHg sale de 1 mmHg = 133,322 Pa, ya usado en `destilacion-a-fondo` |
| Tolueno a 70 °C: 0,2716 bar; coincide con los «unos 272 mbar» de `destilacion-a-fondo` | Cálculo | Recalculado |
| Etanol a 0,1 bar: 29,2 °C; a 1,01325 bar: 78,3 °C | Cálculo con NIST | Recalculado (NIST da Tboil 351,5 K = 78,35 °C, cuadra) |
| Tolueno a 300 mbar: 72,7 °C; heptano a 300 mbar: 61,8 °C; mezcla con 20 % y 5 % de tolueno: 63,7 y 62,2 °C (Raoult ideal) | Cálculo | Recalculado (ejemplo de planta) |

## Raoult, mezclas y azeótropos

| Dato o afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| Ley de Raoult p = x·p°, mezcla ideal; y = p/P | Libro de texto | No leído en fuente gratuita (Gold Book bloqueado); la suma de presiones parciales es la ley de Dalton de `gases-a-fondo` |
| Heptano-tolueno a 95 °C: p° 915,3 y 635,8 mbar; con x = 0,5: 457,6 + 317,9 = 775,5 mbar; y = 0,59; segunda etapa y = 0,67; volatilidad relativa 1,44 | Cálculo con NIST, suponiendo mezcla ideal (declarado en el texto como aproximación) | Recalculado |
| Quiz: x = 0,40 da 747,6 mbar e y = 0,49 | Cálculo | Recalculado |
| Curvas de burbuja y rocío, lente; platos de columna | Libro de texto; las columnas de platos las cita Kuphaldt en `destilacion-a-fondo` | No leído en fuente gratuita en esta sesión |
| Soluto no volátil baja la presión de vapor; reflujo del R-204 a unos 115 °C frente a 112,3 °C del tolueno puro | `docs/simulador-reactor.md` y `destilacion-a-fondo` | Leído |
| Definición de azeótropo (vapor de igual composición que el líquido) y tipos de mínimo y máximo | Libro de texto; coincide con `disolventes-a-fondo` y `destilacion` de la app | No leído en fuente gratuita |
| Tolueno-agua heterogéneo a 84,4 °C (cálculo) | `destilacion-a-fondo` | Leído en la lección; no recalculado aquí |

## Eutéctico y pureza por punto de fusión

| Dato o afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| Diagrama en V, líneas de líquido, punto eutéctico como la temperatura más baja con líquido | Libro de texto; definición del punto eutéctico de FDA-lyo | Definición leída; la forma del diagrama, no leída en fuente gratuita |
| Ejemplo A (150 °C, 30 kJ/mol) y B (120 °C, 25 kJ/mol) | Valor de ejemplo declarado | — |
| Eutéctico a 100,8 °C con 32,5 % en moles de A; A con 1 % de B acaba de fundir a 149,5 °C | Cálculo con la ecuación ideal ln x = −ΔH/R·(1/T − 1/Tf) | Recalculado; la ecuación es de libro de texto, no leída en fuente gratuita |
| El inicio baja mucho, el final poco, el intervalo se ensancha | `analisis-termico-a-fondo` de la app | Leído |
| ΔT = R·T²·x/ΔH (descenso aproximado para poca impureza) | Libro de texto (ecuación de van't Hoff) | No leído en fuente gratuita; comprobado que coincide con la ecuación ideal (0,50 K frente a 0,50 K del ejemplo A) |
| Ácido benzoico: punto triple 395,52 K, «recommended as calibration standard»; ΔfusH 18,006 kJ/mol | NIST-4 C65850 (Marsh 1987; Ginnings y Furukawa 1953) | Leído |
| 1 % de impureza: 0,72 K; 0,5 %: 0,36 K | Cálculo | Recalculado |

## Propiedades coligativas y ósmosis

| Dato o afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| Las cuatro propiedades coligativas, molalidad, factor de van't Hoff i = 2 para el NaCl diluido | Libro de texto | No leído en fuente gratuita |
| ΔT = i·Kf·m y ΔT = i·Kb·m; K = R·T²/L (L en J/kg) | Libro de texto | Solo fragmento de buscador (Wikipedia «Cryoscopic constant», wiki de Potsdam) |
| Calores latentes del agua: 79,7 cal/g (fusión) y 539,1 cal/g (vaporización a presión atmosférica) | Kuphaldt | Leído |
| 1 cal = 4,184 J | Caloría termoquímica | No leído en esta sesión; valor de libro de texto |
| Kf = 1,86 K·kg/mol; Kb = 0,513 K·kg/mol | Cálculo | Recalculado (1,860 y 0,5133); los valores tabulados 1,86 y 0,512–0,513 solo se vieron en fragmentos del buscador (Wikipedia, ecampusontario) |
| NaCl 58,44 g/mol | Cálculo con 22,99 + 35,45 | Recalculado; masas atómicas de libro de texto (ya usadas en la app) |
| Sal 0,50 mol/kg: −1,86 °C y +0,51 °C; masa molar por crioscopia 150 g/mol; glucosa 0,372 °C; 3,00 g y 0,744 °C dan 150 g/mol | Cálculo | Recalculado |
| π = i·c·R·T; R = 0,083145 L·bar/(mol·K) | Fórmula de libro de texto (no leída); R de `gases-a-fondo` (RD 2032/2009) | R leído en la lección |
| Suero 0,9 %: 0,154 mol/L y 7,9 bar a 37 °C (ideal); agua con 1000 mg/L: 0,85 bar; con 2000 mg/L: 1,70 bar | Cálculo | Recalculado |
| Ósmosis inversa: membrana que deja pasar agua y no sales; la bomba empuja el lado salado | `agua-a-fondo` de la app | Leído en la lección |

## Valores de ejemplo declarados

Productos y equipos ficticios (TQ-58, R-207), la hoja del ejemplo de planta (300 mbar, 75 °C, 63 °C, 5 %), el resultado 3,8 % y los 62,8 °C, la masa que hierve a unos 74 °C, el intervalo de fusión 146–149 °C y la especificación 148–150 °C; el ejemplo de eutéctico A-B; la sustancia del ejercicio 7.

## Lo que quise incluir y dejé fuera por no poder verificarlo

- **Cifras de azeótropos homogéneos** (etanol-agua a unos 95,6 % en peso y 78,2 °C; ácido clorhídrico-agua de máximo punto de ebullición): solo aparecieron en fragmentos del buscador (Wikipedia, Smith College, Universidad de Edimburgo); esos hosts no son accesibles y el NIST WebBook no tiene datos de azeótropos. No se dan números.
- **Presión de vapor del hielo** por debajo de 0 °C para calcular la sublimación en un liofilizador: el NIST solo da Antoine del agua líquida desde 255,9 K y no se leyó una tabla del hielo.
- **Eutéctico agua-cloruro de sodio** (salmueras de refrigeración): no se encontró en fuente gratuita accesible.
- **Método de pureza por DSC** (norma ASTM E928, capítulos de farmacopea): de pago; solo se da la ecuación de libro de texto y el cálculo.
- **Osmolalidad e isotonía de inyectables** (unos 290 mOsm/kg): farmacopeas de pago; se da solo la cuenta ideal del suero, avisando de que es ideal.
- **Extracción con CO₂ supercrítico** como aplicación: sin fuente leída.
- Tabla de vapor saturado con Antoine: con las constantes del NIST de 379–573 K, 3 bar g dan 142,7 °C frente a los 143,7 °C de la tabla de `vapor-y-calderas-a-fondo`; se dejó fuera para no confundir (la tabla de vapor manda).
- Definiciones del IUPAC Gold Book (fase, punto triple, azeótropo, eutéctico, presión osmótica): goldbook.iupac.org devuelve la comprobación de Cloudflare con curl y no resuelve con WebFetch.

## Ideas para la capa visual

1. **Esquema de los diagramas de fases del agua y del CO₂ lado a lado**, con el punto triple, el punto crítico, la línea de 1 atm marcada y flechas para «calentar a 1 bar» (horizontal) y «hacer vacío a 50 °C» (vertical); en el CO₂, la línea de 1 atm por debajo del punto triple para ver por qué el hielo seco sublima.
2. **Diagrama interactivo T-x-y de heptano y tolueno** (lente de burbuja y rocío calculada con Raoult y Antoine del NIST), con un deslizador de presión (1013, 300 mbar) y la escalera de etapas de hervir y condensar.
3. **Diagrama eutéctico en V del ejemplo A-B** con un cursor de composición que muestre dónde empieza y dónde acaba de fundir una muestra con un 1 %, un 3 % y un 10 % de impureza.
4. **Animación de ósmosis y ósmosis inversa**: dos compartimentos con membrana, el nivel que sube por ósmosis y el pistón que empuja más que π para invertir el flujo (enlace con «Agua farmacéutica a fondo»).
