# Fuentes de «Energía, calor y temperatura: julios, kilovatios y calor específico» (`energia-y-calor`)

Lección de iniciación (nivel 1, order 2.2, detrás de `materia-a-fondo`). Body: 1777 palabras; 20 minutos.

Descargas y cálculo en `scratchpad/lecciones/tmp-energia/` (`dl/` y `calc.py`).

Abreviaturas de fuentes:

- **NIST-agua**: NIST Chemistry WebBook, agua, datos de fase condensada: https://webbook.nist.gov/cgi/cbook.cgi?ID=C7732185&Units=SI&Mask=2 (archivo `dl/agua.txt`). Masa molar 18,0153 g/mol. Ecuación de Shomate del Cp del líquido (298–500 K, Chase 1998): A = −203,6060; B = 1523,290; C = −3196,413; D = 2474,455; E = 3,855326, con t = T/1000.
- **NIST-tolueno**: NIST Chemistry WebBook, tolueno, datos de fase condensada: https://webbook.nist.gov/cgi/cbook.cgi?ID=C108883&Units=SI&Mask=2 (archivo `dl/tolueno.txt`). Masa molar 92,1384 g/mol. Tabla «Constant pressure heat capacity of liquid»: a 298,15 K, 157,09 (Grolier 1993), 157,08 (Roux-Desgranges 1986), 157,057 (Fortier y Benson 1979), 157,23 (Scott 1962) J/(mol·K), entre otros (155,96 a 158,70). Un dato (Andolenko 1979) viene ya en 1,704 kJ/(kg·K).
- **K-termo**: T. Kuphaldt, *Lessons in Industrial Instrumentation*, «Elementary Thermodynamics»: https://control.com/textbook/physics/elementary-thermodynamics/ (archivo `dl/elementary-thermodynamics.txt`).
- **K-mec**: T. Kuphaldt, mismo libro, «Classical Mechanics», apartado de trabajo, energía y potencia: https://control.com/textbook/physics/classical-mechanics/ (archivo `dl/classical-mechanics.txt`).
- **RD 2032/2009**: Real Decreto 2032/2009, unidades legales de medida, texto consolidado BOE-A-2010-927: https://www.boe.es/buscar/act.php?id=BOE-A-2010-927 (archivo ya descargado `scratchpad/src_dens/dl/rd2032.txt`, releído aquí).
- **NTP 528**: INSST, NTP 528 «Reacciones químicas exotérmicas (II): control térmico y refrigeración» (1999) (archivo ya descargado `scratchpad/dl/ntp528.txt`, releído aquí, líneas 377-380).
- Lecciones de la app (para no repetir y para que cuadren los datos): `materia-a-fondo`, `unidades-a-fondo`, `matematicas-a-fondo` (leídas enteras), `termoquimica-a-fondo`, `calor-y-frio-a-fondo`, `vapor-y-calderas-a-fondo`, `reactor-a-fondo`, `agitacion-a-fondo` (pasajes de calor).

## Tabla de afirmaciones

| Afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| Energía: «lo que permite o produce movimiento», incluido el de los átomos | K-mec («One definition of energy is "that which permits or results in motion"…») | Leído en el documento |
| Conservación de la energía: no se crea ni se destruye, cambia de forma o se transfiere | K-mec («cannot be created from nothing or be destroyed… Law of Energy Conservation») | Leído |
| Trabajo: fuerza que actúa a lo largo de un desplazamiento en su dirección; sin desplazamiento no hay trabajo | K-mec («Work is simply what happens when any force acts through a parallel motion»; ejemplo de la grúa) | Leído |
| Potencia: ritmo al que se hace trabajo o se transfiere energía; vatio = 1 J por segundo | K-mec; RD 2032/2009, tabla de unidades derivadas: «potencia, flujo energético — vatio — W — J/s» | Leído en los dos |
| Julio: unidad de energía, trabajo y cantidad de calor; J = N·m | RD 2032/2009, tabla de unidades derivadas («energía, trabajo, cantidad de calor — julio — J — N m») | Leído |
| Calor específico: nombre oficial «capacidad térmica másica», unidad J/(kg·K) | RD 2032/2009, tabla de unidades derivadas («capacidad térmica másica, entropía másica — julio por kilogramo y kelvin — J/(kg K)») | Leído |
| 1 h = 3600 s; por tanto 1 kWh = 3600 kJ | RD 2032/2009, tabla 6 («1 h = 60 min = 3600 s»); 1 kW × 3600 s | Leído y cálculo |
| Una diferencia de 1 °C es igual a 1 K | RD 2032/2009 (ya citado en `materia-a-fondo` y `unidades-a-fondo`) | Leído en lecciones anteriores con su fuente |
| Temperatura: medida de la agitación de las moléculas | K-termo («Temperature is a direct function of random molecular motion…») | Leído |
| Calor: transferencia de energía térmica; solo con diferencia de temperatura; de lo caliente a lo frío de forma espontánea | K-termo («Heat… is an expression of thermal energy transfer»; «Heat transfer can only happen… where there is a difference of temperature»; «Heat spontaneously flows from higher-temperature…») | Leído |
| Para llevar calor de lo frío a lo caliente hace falta una máquina que gaste energía (la enfriadora) | `calor-y-frio-a-fondo` (balance evaporador + compresor = condensador) | Remisión a lección existente; no se ha releído su fuente original |
| Calor sensible: cambia la temperatura sin cambio de estado; Q = m × c × ΔT | K-termo («Q = mc ΔT»); término y definición coherentes con `vapor-y-calderas-a-fondo` | Leído |
| Cuanto más bajo el calor específico, más fácil calentar y enfriar y más sube con el mismo calor | K-termo («Substances with low c values are easy to heat and cool…»; «smaller c values result in more rapid temperature changes») | Leído |
| Calor latente: el calor de un cambio de estado no sube la temperatura (meseta) | K-termo (apartado de calor latente); `materia-a-fondo` | Leído |
| Agua líquida: cp = 4,18 kJ/(kg·K) a 25 °C | NIST-agua: Shomate a 298,15 K da 75,375 J/(mol·K); / 18,0153 g/mol = 4,184 kJ/(kg·K), redondeado 4,18 | Leído y recalculado con python |
| Tolueno líquido: cp = 1,70 kJ/(kg·K) a 25 °C | NIST-tolueno: 157,09 J/(mol·K) a 298,15 K / 92,1384 g/mol = 1,705 kJ/(kg·K); con 157,06–157,23 sale 1,705–1,706; redondeado 1,70. Coincide con el 1,7 de `termoquimica-a-fondo` y la cifra del informe G9 | Leído y recalculado |
| Metanol líquido: 2,55 kJ/(kg·K) a 25 °C | K-termo, tabla de calores específicos a 25 °C: 0,609 cal/(g·°C); × 4,186 J/cal (misma página) = 2,549 kJ/(kg·K) | Leído y recalculado |
| Acetona líquida: 2,18 kJ/(kg·K) a 25 °C | K-termo, misma tabla: 0,521 cal/(g·°C) × 4,186 = 2,181 | Leído y recalculado |
| El agua es la que más cuesta calentar «de la tabla» | Comparación de los cuatro valores anteriores (solo se afirma dentro de la tabla) | Cálculo |
| El calor específico cambia algo con la temperatura | NIST-tolueno (varios valores a distintas T; ecuación de Pedersen 1975 con término en T); NIST-agua (Shomate depende de T) | Leído |
| El 2,0 kJ/(kg·K) de otras lecciones está dentro del rango | `calor-y-frio-a-fondo` y `vapor-y-calderas-a-fondo` lo declaran valor de ejemplo; rango de la tabla 1,70–2,55 | Comparación |
| El paso de calor por una pared crece con la diferencia de temperatura y con la superficie | K-termo, conducción: «Conductive heat transfer rate is proportional to the difference in temperature…, the area of contact…» | Leído |
| La agitación (velocidad y tipo) afecta a la transferencia de calor en un reactor; también el tipo de superficie, el fluido y la geometría | NTP 528, líneas 377-380 | Leído |
| Suciedad o costras frenan el paso del calor | `reactor-a-fondo` («U… baja si… la pared está sucia») y `calor-y-frio-a-fondo` (ensuciamiento) | Remisión a lecciones existentes |
| Los últimos grados son los más lentos | `reactor-a-fondo` (144 kW con 40 °C de diferencia frente a 36 kW con 10 °C); consecuencia de la proporcionalidad con ΔT (K-termo) | Leído en la lección y en K-termo |
| Peso del saco: 25 × 9,81 = 245 N; trabajo al subirlo 1 m ≈ 245 J | Cálculo (g = 9,81 m/s², valor usado en `unidades-a-fondo`) | Recalculado: 245,25 |
| 4,18 kJ son unas diecisiete veces 245 J | 4180 / 245,25 = 17,04 | Recalculado |
| Hervidor de 2 kW, 3 min: 360 kJ = 0,1 kWh | Valor de ejemplo declarado; 2 × 180 = 360; 360 / 3600 = 0,1 | Recalculado |
| Ejemplo 1: 500 × 4,18 × 30 = 62 700 kJ = 17,4 kWh | Cálculo (cuadra con la pregunta de `matematicas-a-fondo`) | Recalculado: 62 700; 17,42 |
| Ejemplo 2: 10 000 kJ a 200 kg: agua 12,0 °C, tolueno 29,4 °C; unas 2,5 veces | Cálculo | Recalculado: 11,96; 29,41; 4,18/1,70 = 2,459 |
| Ejemplo 3: 62 700 / 50 = 1254 s ≈ 21 min; tolueno 25 500 kJ, 510 s = 8,5 min | Camisa de 50 kW: valor de ejemplo declarado; cálculo | Recalculado: 20,9 min; 8,5 min |
| Ejemplo 4: 800 × 1,70 × (−40) = −54 400 kJ | Cálculo | Recalculado |
| Planta: 1000 × 1,70 × 40 = 68 000 kJ; 40 kW de media; 1700 s ≈ 28 min; agua 167 200 kJ, unos 70 min; «unas dos veces y media» | Valores de ejemplo declarados (40 kW, 31 min reales); cálculo | Recalculado: 28,3 min; 69,7 min; 2,46 |
| Test: 62700; 10200; 18000; 15 min (900 s); 20 °C; 54400; 4,18/1,70 = 2,46 | Cálculo | Recalculado con python (`calc.py`) |
| Equipos y productos (R-118, QT-17) | Ficticios | — |

## Lo que se dejó fuera

- **Calor específico de otros disolventes de planta tomados del NIST** (metanol, acetona, etanol): se usaron los de la tabla de Kuphaldt a 25 °C para no ampliar el trabajo; se podrían contrastar con el NIST si se quiere una sola fuente.
- **Valores de calor latente** (agua 2257 kJ/kg, etc.): fuera a propósito; la lección remite a `materia-a-fondo` y `vapor-y-calderas-a-fondo`, que ya los tratan.
- **La fórmula de la camisa Q = U × A × ΔT y valores de U**: fuera a propósito (idea sin fórmulas); remite a `reactor-a-fondo` y `agitacion-a-fondo`.
- **Conducción, convección y radiación con nombre**: ya están en `calor-y-frio-a-fondo`; aquí solo se da la idea de que el calor cruza la pared.
- **La caloría**: ya explicada en `unidades-a-fondo` (no es unidad legal); no se repite.
- **Comparaciones cotidianas con cifras no verificadas** (temperatura de una chispa, potencia típica de un hervidor real, calor específico del aceite de cocina): se quitaron o se dejaron sin cifra; el hervidor de 2 kW se declara valor de ejemplo.
- **Potencias reales de camisas de reactor**: no se dan; los 40 y 50 kW son valores de ejemplo.
