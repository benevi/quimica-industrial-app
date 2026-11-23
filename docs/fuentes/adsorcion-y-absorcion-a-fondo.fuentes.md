# Fuentes: «Adsorción, absorción y evaporación a fondo» (`adsorcion-y-absorcion-a-fondo`)

Documentos descargados y leídos en `scratchpad/lecciones/tmp-adsorcion/` (subcarpetas `dl/` y `kup/`), salvo la guía ATEX y la ICH Q7, que ya estaban en `scratchpad/dl/`. Cálculos rehechos en python con el mismo redondeo que el texto.

| Dato o afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| Adsorción frente a absorción (superficie de un sólido frente a entrar en un líquido) | IUPAC, manual de símbolos y terminología de coloides y superficies (2001), https://old.iupac.org/reports/2001/colloid_2001/manual_of_s_and_t/node14.html ; NTP 338 para la absorción con reacción | IUPAC: fragmento de buscador (goldbook bloqueado). NTP 338: leído |
| Isoterma: relación entre lo adsorbido y la concentración o presión de equilibrio a temperatura constante | IUPAC 2001 (enlace anterior) y Pure Appl. Chem. 2015, https://doi.org/10.1515/pac-2014-1117 | Fragmento de buscador; se usa solo como definición, sin cifras |
| Tabla de la isoterma del secuestrante SQ-7 (0,5 a 40 mg/L; 1000 a 11000 mg/kg) | Valor de ejemplo declarado | Inventada con forma de isoterma (recta abajo, meseta arriba) |
| Capacidad del carbón baja al subir la temperatura; otros vapores y el vapor de agua compiten y bajan el volumen de ruptura | INSST, método MTA/MA-032/A98, https://www.insst.es/InshtWeb/Contenidos/Documentacion/FichasTecnicas/MetodosAnalisis/Ficheros/MA/MA_032_A98.pdf (apartados 6.5 y 6.9) | Leído |
| Ruptura: la salida alcanza el 5 % de la concentración de entrada | MA-032/A98, apartado 2 | Leído |
| Pd oral opción 1 = 10 µg/g (PDE oral 100 µg/día) | ICH Q3D(R2), https://database.ich.org/sites/default/files/Q3D-R2_Guideline_Step4_2022_0308.pdf (tablas A.2.1 y A.2.2) | Leído |
| Ejercicio 1: 60 g de Pd; 300 µg/g; 2 g = 1 mg/L; 58000 mg a retirar; 29 kg | Cálculo con valores de ejemplo declarados | Recalculado |
| Ejercicio 2: factor 15,5; 1,94 mg/L; 0,125 mg/L; 1,25 µg/g; ocho veces menos | Cálculo (balance con isoterma lineal K = 2000 L/kg, valor de ejemplo) | Recalculado |
| ICH Q11 cita el uso de secuestrantes (*scavenging agents*), con extracción y destilación, como operaciones para controlar o purgar impurezas | ICH Q11 Q&A (2017), pregunta 5.4, https://database.ich.org/sites/default/files/Q11_Q%26As_Q%26As.pdf | Leído |
| Secuestrante = sólido con grupos químicos que atrapan un metal concreto | Descripción general | Solo fragmentos de buscador (no se encontró texto oficial gratuito); sin cifras |
| Carbón activo y ayudas filtrantes = coadyuvantes de proceso (*process aids*) que no participan en la reacción; pueden necesitar especificación (6.17) | ICH Q7, https://database.ich.org/sites/default/files/Q7%20Guideline.pdf (glosario y 6.17) | Leído |
| Saturación a unos 64 °C del ejemplo de cristalización | Lección `cristalizacion-a-fondo` de la app; 60 + 10 × (309,5 − 220)/(430 − 220) = 64,3 | Recalculado |
| Carbono: altamente inflamable en polvo; partículas finas forman mezclas explosivas; seco se carga electrostáticamente por vertido y transporte; puede incendiarse espontáneamente en contacto con el aire; clase ONU 4.2; ficha para carbono puro no fibroso | ICSC 0702, https://chemicalsafety.ilo.org/dyn/icsc/showcard.display?p_lang=es&p_card_id=0702&p_version=2 | Leído. Nota: no existe ficha accesible específica de carbón activo (la 0412 da «Card not found»); se dice en el texto que la 0702 es para carbono puro |
| Polvos: LIE de 10 a 500 g/m³; los finos pesan más en la ignición; un poco de gas inflamable aumenta mucho la violencia; «mezclas híbridas» | INSST NTP 427, https://www.insst.es/es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/12-serie-ntp-numeros-401-a-435-ano-1997/ntp-427-paramentos-debiles-para-el-venteo-de-alivio-de-explosiones-i- | Leído |
| Limpiar polvo por aspiración o paños húmedos, nunca barrido ni soplado; inertización también para polvos | Guía técnica ATEX del INSST, https://www.insst.es/documents/94886/789467/ATM%C3%93SFERAS+EXPLOSIVAS.pdf | Leído (la ICSC 0702 dice «barrer» en derrames; se sigue la guía del INSST, más específica para el lugar de trabajo) |
| Reglas del catalizador pirofórico (mojado) | Lección `hidrogenacion-a-fondo` de la app (NTP 479, CLP H250) | Remisión |
| HCl: gas más denso que el aire, corrosivo, 67 g/100 mL a 30 °C, reacciona violentamente con bases | ICSC 0163, https://chemicalsafety.ilo.org/dyn/icsc/showcard.display?p_lang=es&p_card_id=0163&p_version=2 | Leído (la ficha califica esa solubilidad de «moderada»; el texto dice «soluble», no «muy soluble») |
| Sosa: base fuerte, reacciona violentamente con ácidos | ICSC 0360, https://chemicalsafety.ilo.org/dyn/icsc/showcard.display?p_lang=es&p_card_id=0360&p_version=2 | Leído |
| Torres de absorción: solubilizar y neutralizar con disolución cuya cantidad se calcula «en principio» por estequiometría; cantidad suficiente para tratarlo todo | INSST NTP 338, https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/10-serie-ntp-numeros-331-a-365-ano-1995/ntp-338-control-de-fugas-en-almacenamientos-de-gases-licuados-toxicos-ii- | Leído |
| Columna de relleno, gas y líquido a contracorriente, bomba de recirculación | Descripción general | Fragmento de buscador (tesis ESPOL, ficha de fabricante); solo cualitativo |
| Mantener el líquido del lavador al pH correcto y reponerlo o cambiarlo | gov.uk, «Chemical waste: appropriate measures», apartado 6, punto 15, https://www.gov.uk/guidance/chemical-waste-appropriate-measures-for-permitted-facilities/6-emissions-control-appropriate-measures | Leído |
| Neutralización exotérmica, produce sal y agua | Kuphaldt, Chemistry, pH, https://control.com/textbook/chemistry/ph/ | Leído |
| Masas molares HCl 36,461; NaOH 39,9971; NaCl 58,443 g/mol | NIST WebBook (C7647010, C1310732, C7647145) | Leído |
| Ejercicio 3: 400,4 mol; 16,0 kg NaOH; 34,0 kg (68 %); 23,4 kg NaCl; 80,1 kg sosa al 20 % | Cálculo con valores de ejemplo declarados | Recalculado |
| Calor latente del agua 539,1 cal/g a presión atmosférica; ×4,184 = 2256 kJ/kg | Kuphaldt, Elementary thermodynamics, https://control.com/textbook/physics/elementary-thermodynamics/ | Leído y recalculado |
| Ejercicio 4: 6768000 kJ; 13536 s = 3,8 h a 500 kW; 3000 y 1000 kg de vapor en el caso ideal | Cálculo (caso ideal declarado: 1 kg de vapor por kg evaporado en cada efecto) | Recalculado |
| Idea del múltiple efecto y economía de vapor | Razonamiento físico (el vapor producido calienta el efecto siguiente a menor presión) | Fragmentos de buscador (Lipták, AIChE, manual Tetra Pak) solo como apoyo; no se usaron sus cifras |
| La mayoría de los sistemas nuevos de agua para inyectables usan destiladores de múltiple efecto (guía de 1993) | FDA, guía de inspección «High Purity Water System (7/93)» | Leído (copia descargada en `scratchpad/lecciones/tmp-tuberias/dl/fdawater.txt`) |
| Tipos de evaporador (película descendente, circulación forzada, película agitada) | Fragmentos de buscador (folletos GEA, patentes) | Solo los nombres; la tabla con sus usos se quitó por no poder leer una fuente fiable |
| Ley de Stokes y su uso para medir partículas por sedimentación; viscosidad del agua a 30 °C = 0,008007 poise | BOE n.º 78, 31/03/1976, anexo de métodos de análisis de suelos y aguas, pág. 6477, https://www.boe.es/boe/dias/1976/03/31/pdfs/A06458-06491.pdf | Leído (ecuación vista en la imagen de la página; x = 1000·[30ηh/(g(Ps − Pl))]^½ / t^½ es algebraicamente v = gΔρd²/(18η) con x en mm, h en cm y t en min: comprobado) |
| Ejercicio 5: 0,51 mm/s, 33 min por metro; 10 µm: 25 veces menos, 0,020 mm/s, 13,6 h | Cálculo (Δρ = 300 kg/m³ y d = 50 µm, valores de ejemplo) | Recalculado |
| Lecho fluido: partículas expandidas sostenidas por el arrastre del gas, se comportan como un líquido en ebullición | FDA, «SUPAC: Manufacturing Equipment Addendum» (2014), https://www.fda.gov/media/85681/download (Drying, iii) | Leído |
| Lecho fijo, mínima fluidización, arrastre al subir el gas | Razonamiento físico coherente con la descripción de la FDA | Sin cifras |
| ΔP del lecho fluidizado ≈ peso / área (equilibrio de fuerzas: el gas sostiene el lecho) | Cálculo | Recalculado: 250 × 9,807/0,8 = 3065 Pa; quiz 180 × 9,81/0,6 = 2943 Pa |
| Caída brusca de ΔP como señal de canalización | Razonamiento (si el gas no sostiene el lecho, la caída de presión baja); redactado como posibilidad («puede que») | Sin fuente específica |
| Venteo de alivio de explosiones | NTP 427 (título y contenido) | Leído |
| Quiz numérico: 8,01 kg; 14,25 kg; 4 veces; 29,43 mbar; 400 kg | Cálculo | Recalculado |

## Lo que quedó fuera por no poder verificarlo

- **BREF de química fina orgánica** (EIPPCB, 2006) y BREF WGC de 2023: los hosts de la Comisión, de INERIS, de UBA y de los PDF de PRTR-España de MITECO no son accesibles desde la sesión; no se cita nada de ellos.
- Superficie específica del carbón activo en m²/g, tamaño de poro, dosis típicas de carbón (% sobre producto) y tiempos de contacto habituales.
- Química concreta de los secuestrantes (grupos tiol, sílice funcionalizada) y eficacias típicas: solo fragmentos de buscador.
- Ficha ICSC específica del carbón activo (0412 no accesible) y su comportamiento al estar mojado (consumo de oxígeno en espacios confinados): solo en fichas de fabricantes vistas en el buscador.
- Ecuaciones de Langmuir y Freundlich: no hay fuente oficial gratuita leída; además el encargo pide la isoterma sin matemáticas pesadas.
- Calor de neutralización en kJ/mol y calor de absorción del HCl: NIST WebBook no da entalpías de iones en disolución.
- Economías de vapor reales por número de efectos y recompresión de vapor: solo fragmentos de buscador (Lipták, AIChE, Tetra Pak).
- Usos de cada tipo de evaporador: solo folletos de fabricantes y patentes en el buscador.
- Velocidad mínima de fluidización (ecuación de Ergun) y datos de diseño del lecho fluido.
- NTP 428 y NTP 402/403 (supresión de explosiones): no leídas; no se citan.

## Ideas para la capa visual

1. **Esquema de una isoterma** con la tabla del SQ-7: tramo casi recto abajo y meseta arriba, marcando el punto «queda 1 mg/L, retiene 2000 mg/kg» del ejercicio 1.
2. **Esquema del lavador de gases**: columna de relleno con el gas ácido entrando por abajo, la sosa bajando desde los pulverizadores, bomba de recirculación, depósito y medidor de pH.
3. **Animación de sedimentación** comparando cristales de 50 µm y finos de 10 µm en una probeta de 1 m (33 minutos frente a 13,6 horas), con una pequeña calculadora de la ley de Stokes.
4. **Simulación del lecho fluido**: control deslizante del caudal de gas que pasa de lecho fijo a fluidizado y a arrastre, con la presión diferencial del lecho estabilizándose en peso/área.
