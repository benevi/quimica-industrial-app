# Fuentes de `termodinamica-a-fondo`

Fecha de consulta: 23/11/2026. Páginas del NIST Chemistry WebBook descargadas con curl (`https://webbook.nist.gov/cgi/cbook.cgi?ID=<CAS>&Units=SI&Mask=1` para la fase gas y `Mask=2` para la fase condensada; `Mask=4` para cambios de fase) y guardadas en `scratchpad/lecciones/tmp-termodinamica/nist/`. Cálculos en `tmp-termodinamica/calc.py` (Python 3). Abreviaturas: NIST-g = página de termoquímica en fase gas; NIST-c = fase condensada.

Criterio de elección cuando el NIST da varios valores: el «CODATA Review value» (Cox, Wagman et al., 1984) si existe; si no, la recomendación de revisión (Manion 2002 / Gurvich) o, para orgánicos líquidos, el valor más reciente o el más adecuado (indicado en cada fila).

## Datos de sustancias (todos leídos en la página del NIST)

| Dato en la lección | Fuente | Cómo se comprobó |
|---|---|---|
| Agua líquida: ΔfH° = −285,83 kJ/mol; S° = 69,95 J/(mol·K) | NIST-c, C7732185 (CODATA) | Leído en el documento |
| Agua gas: ΔfH° = −241,826 kJ/mol; S° = 188,835 J/(mol·K) | NIST-g, C7732185 (CODATA) | Leído |
| Temperatura de ebullición del agua 373,17 K (100,0 °C) | NIST, C7732185, Mask=4 («Tboil 373.17 ± 0.04 K, average of 7 values») | Leído; 373,17 − 273,15 = 100,02 recalculado |
| H₂ gas: S° = 130,680 J/(mol·K) (ΔfH° no aparece: elemento) | NIST-g, C1333740 (CODATA) | Leído |
| N₂ gas: S° = 191,609 | NIST-g, C7727379 (CODATA) | Leído |
| Cl₂ gas: S° = 223,081 | NIST-g, C7782505 (CODATA) | Leído |
| HCl gas: ΔfH° = −92,31 kJ/mol; S° = 186,902 | NIST-g, C7647010 (CODATA) | Leído |
| NH₃ gas: ΔfH° = −45,94; S° = 192,77 | NIST-g, C7664417 (CODATA) | Leído |
| CH₄ gas: ΔfH° = −74,6 | NIST-g, C74828 (Manion 2002, recomendación Gurvich) | Leído. El NIST no da S° 1 bar de revisión distinta de Chase (186,25); no se usó S° del metano |
| CO₂ gas: ΔfH° = −393,51; S° = 213,785 | NIST-g, C124389 (CODATA) | Leído |
| Eteno gas: ΔfH° = 52,4; S° = 219,32 | NIST-g, C74851 (ΔfH Manion 2002; S° Chase 1998) | Leído |
| Etano gas: ΔfH° = −84,0 | NIST-g, C74840 (Manion 2002, «−84. ± 0.4») | Leído. No hay S° del gas en la página: en la tabla se deja «—» |
| Nitrobenceno líquido: ΔfH° = 12,5; S° = 224,3 | NIST-c, C98953 (Lebedeva et al. 1971 reanalizado por Pedley 1986; S° Parks 1936) | Leído |
| Anilina líquida: ΔfH° = 31,3; S° = 191,30 | NIST-c, C62533 (Hatton et al. 1962) | Leído |
| NaOH sólido: ΔfH° = −425,93; S° = 64,46 | NIST-c, C1310732 (Chase 1998, JANAF) | Leído |
| NaCl sólido: ΔfH° = −411,12; S° = 72,11 | NIST-c, C7647145 (Chase 1998) | Leído |
| H atómico gas: ΔfH° = 217,998 | NIST-g, C12385136 (CODATA) | Leído |
| Cl atómico gas: ΔfH° = 121,301 | NIST-g, C22537151 (CODATA) | Leído |
| C atómico gas: ΔfH° = 716,68 | NIST-g, C7440440 (CODATA) | Leído |
| Ácido acético líquido: ΔfH° = −483,52; S° = 158,0 | NIST-c, C64197 (Steele et al. 1997; Martin y Andon 1982) | Leído |
| Etanol líquido: ΔfH° = −276 ± 2 (media de 6 valores); S° = 159,86 | NIST-c, C64175 (AVG; Haida et al. 1977) | Leído |
| Acetato de etilo líquido: ΔfH° = −479,86 (por calor de hidrólisis); S° = 259,4 | NIST-c, C141786 (Wiberg y Waldron 1991; Parks et al. 1933) | Leído |
| Calor de combustión del ácido acético líquido unos 875 kJ/mol | NIST-c, C64197 (−875,16, Steele 1997) | Leído; finalmente quitado del cuerpo al recortar |
| Las S° del NIST son absolutas (incluyen el tramo desde cerca de 0 K) | Notas del NIST: «Entropy from 0 to 15 K calculated using a Debye function» (etano líquido), «Extrapolation below 90 K» (nitrobenceno, acetato de etilo), «third-law entropy values at 298.15 K» (ácido acético) | Leído en las notas; la definición general de entropía absoluta y tercer principio es de libro de texto, no leída en una fuente gratuita |
| Condiciones estándar del NIST: 1 bar y 298,15 K | Encabezados del NIST («Entropy of gas at standard conditions (1 bar)»; nota del ácido acético «at 298.15 K») | Leído |

## Cálculos (todos recalculados en `calc.py`)

| Afirmación | Fuente | Comprobación |
|---|---|---|
| R = NA × k = 8,314 J/(mol·K) | RD 493/2020 (BOE-A-2020-4707, https://www.boe.es/boe/dias/2020/04/29/pdfs/BOE-A-2020-4707.pdf): NA = 6,022 140 76 × 10²³ mol⁻¹ y k = 1,380 649 × 10⁻²³ J/K exactos. Kuphaldt, «Unit conversions and physical constants» (https://control.com/textbook/physics/unit-conversions-and-physical-constants/) da R = 8,314472 J/(mol·K) | Constantes leídas en el BOE; producto recalculado: 8,3144626. La relación R = NA·k es de libro de texto |
| Trabajo del gas Boc: 101,325 kPa × 39,2 m³ = 3972 kJ; 1600 × 8,314 × 298,15 = 3966 kJ | 1,6 kmol y 39,2 m³ de la lección `reacciones-en-api-a-fondo` | Recalculado |
| ΔH(H₂ + Cl₂ da 2 HCl) = −184,62 kJ | Datos NIST | Recalculado |
| Estimación −183 kJ con enlaces 436, 243 y 431 | Lección `termoquimica-a-fondo` | Recalculado: 679 − 862 = −183 |
| Energías de enlace H–H 436,0; Cl–Cl 242,6; H–Cl 431,6 kJ/mol | Calculadas con ΔfH° de átomos del NIST | Recalculado (435,996; 242,602; 431,609). Balance con ellas: −184,62 exacto |
| C–H medio en el metano: (716,68 + 4 × 217,998 + 74,6) / 4 = 415,8 kJ/mol; total 1663,3 | NIST + cálculo | Recalculado (1663,272 / 4 = 415,818) |
| Eteno + H₂: ΔH° = −136,4 kJ/mol | NIST | Recalculado |
| Nitrobenceno + 3 H₂: ΔH° = −552,86 kJ/mol | NIST | Recalculado (31,3 − 571,66 − 12,5) |
| Masa molar del nitrobenceno 123,11 g/mol | Cálculo con masas atómicas C 12,011; H 1,008; N 14,007; O 15,999 (masas atómicas de libro de texto, no leídas en esta sesión) | 123,111 recalculado |
| 4491 kJ/kg de nitrobenceno; 184,3 kJ por mol de H₂; 1 kg H₂ = 496 mol; 91 400 kJ/kg H₂; 25,4 kW por kg/h | Cálculo | Recalculado (4490,8; 184,29; 496,0; 91 412; 25,39) |
| ΔTad 119,8 °C con 100 kg de nitrobenceno, 1500 kg y cp 2,5 | Masa total y cp: valores de ejemplo declarados | Recalculado (0,8123 kmol; 449 074 kJ; 119,75) |
| ΔU del nitro = −545,4 kJ/mol | ΔH = ΔU + Δn·R·T (libro de texto) | Recalculado (−552,86 + 7,437) |
| Neutralización en seco NaOH(s) + HCl(g): ΔH° = −178,71 kJ/mol | NIST | Recalculado |
| 57 kJ/mol en disolución | Lección `termoquimica-a-fondo` (allí, valor de libro de texto) | No verificado en esta sesión; el NIST WebBook no tiene entalpías de iones en disolución (comprobado: la página de reacciones del agua, Mask=8, solo trae reacciones en disolventes concretos, nada de H⁺ + OH⁻ acuosos) |
| «El contacto con humedad y agua genera calor» (sosa) | ICSC 0360 hidróxido de sodio, https://chemicalsafety.ilo.org/dyn/icsc/showcard.display?p_lang=es&p_card_id=0360&p_version=2 | Leído (cita textual) |
| ΔS° evaporación agua +118,9; NH₃ −198,1; nitro −285,1; HCl +20,0 J/K | NIST | Recalculado (118,885; −198,109; −285,14; 20,043) |
| ΔS entorno a 25 °C −147,6 J/K; total −28,7; a 110 °C −114,8 y total +4,0 | ΔS_entorno = −ΔH/T (libro de texto) | Recalculado |
| ΔH evaporación del agua 44,004 kJ/mol | NIST | Recalculado |
| Temperatura de inversión del agua 370,1 K = 97,0 °C frente a 100,0 °C medidos | NIST + cálculo | Recalculado (370,14 K). La comparación con 373,17 K sirve de comprobación empírica de ΔG = ΔH − TΔS con ΔH y ΔS constantes |
| NH₃: ΔG°(25 °C) = −32,8 kJ; inversión 463,8 K = 190,6 °C; K(25 °C) = 5,6 × 10⁵; ΔG°(400 °C) = +41,5 kJ; K = 6,0 × 10⁻⁴ | NIST + cálculo con ΔH y ΔS constantes (aproximación declarada en el texto) | Recalculado (−32,814; 463,79 K; 560 698; 41,477; 6,05 × 10⁻⁴). K referida a 1 bar |
| Nitro: ΔG° = −467,8 kJ/mol; inversión 1939 K | NIST + cálculo | Recalculado (−467,846; 1938,9 K) |
| R·T·ln 10 = 5,71 kJ/mol a 25 °C; tabla ΔG° frente a K (−20: 3190; −11,4: 99,4; −5,7: 9,97; +5,7: 0,100) | Cálculo | Recalculado |
| Esterificación: ΔH° = −6,17; ΔS° = +11,49 J/K; ΔG° = −9,60; K = 48; K = 4 equivale a −3,44 kJ/mol | NIST + cálculo; K ≈ 4 de la lección `equilibrio-a-fondo` (valor de libro de texto allí) | Recalculado (47,98) |
| Combustión del metano (quiz): −890,57 kJ/mol | NIST + cálculo | Recalculado. Coherente con ΔcH° medido en el NIST (−890,7 Pittam y Pilcher; −890,35 Prosen y Rossini) |
| Quiz: 4491; 198,11; 190,6; K ≈ 100 (99,4); 1239 kJ | Cálculo | Recalculado |

## Afirmaciones conceptuales y normativas

| Afirmación | Fuente | Cómo |
|---|---|---|
| El currículo de Química de 2.º de Bachillerato pide primer principio (calor y trabajo), entalpía, ley de Hess con entalpías de formación o energías de enlace, segundo principio y entropía, y energía de Gibbs en función de la temperatura | RD 243/2022, BOE-A-2022-5521 (bloque B, «Reacciones químicas», 1. Termodinámica química), archivo en `auditoria-temario/boe/` | Leído |
| El calor pasa solo del cuerpo más caliente al más frío | Kuphaldt, «Elementary thermodynamics», https://control.com/textbook/physics/elementary-thermodynamics/ («Heat spontaneously flows from higher-temperature substances to lower-temperature substances») | Leído |
| Definición de entalpía estándar de formación; vale cero para elementos en su forma estable; ley de Hess (el calor no depende del camino); ΔH como calor de reacción | Kuphaldt, «Energy in chemical reactions», https://control.com/textbook/chemistry/energy-in-chemical-reactions/ | Leído. Ojo: Kuphaldt toma como referencia 293,15 K y 1 atm; en la lección se usan las condiciones del NIST (298,15 K y 1 bar) |
| Que un sistema tenga energía para reaccionar no garantiza que reaccione solo (necesita un empujón inicial) | Kuphaldt, «Energy in chemical reactions» (analogía de las rocas en la ladera) | Leído |
| El catalizador no cambia la energía liberada, solo facilita el inicio | Kuphaldt, «Energy in chemical reactions» («the presence of a catalyst does not cause the combustion ... to release more energy») | Leído |
| ΔU = q + w con criterio de signos IUPAC (positivo si entra); trabajo P·ΔV = Δn·R·T; ΔH = calor a presión constante; ΔH = ΔU + Δn·R·T | Libro de texto | No leído en una fuente gratuita en esta sesión (Gold Book IUPAC bloqueado) |
| Entropía como medida de dispersión de la energía; segundo principio (entropía total aumenta en un proceso espontáneo); ΔS_entorno = −ΔH/T | Libro de texto | No leído en fuente gratuita; solo fragmento de buscador (OpenStax Química 2.ª ed., cap. 16.4, y apuntes de la Universitat de València) |
| ΔG = ΔH − TΔS; criterio de espontaneidad; tabla de los cuatro casos; T de inversión = ΔH/ΔS | Libro de texto | Fragmento de buscador (OpenStax 16.4: «todos los procesos espontáneos implican una disminución de G»; uv.es: espontaneidad dependiente de T cuando los signos coinciden). Comprobado indirectamente con el agua: 97,0 °C calculados frente a 100,0 °C del NIST |
| ΔG° = −R·T·ln K | Libro de texto | No leído en fuente gratuita en esta sesión |
| El paladio baja la energía de activación sin cambiar ΔH ni ΔG | Kuphaldt (catalizador no cambia la energía) para ΔH; para ΔG, libro de texto | Parcialmente leído |
| Relación con la lección de hidrogenación (eteno a etano, nitrobenceno a anilina; «el caudal de hidrógeno es tu indicador del calor») | Lección `hidrogenacion-a-fondo` de la app | Leído en la lección |

Valores de ejemplo declarados: masa total 1500 kg y cp 2,5 kJ/(kg·K) del ejemplo de ΔTad; todo el ejemplo de planta (NX-14, HR-302, 4 bar, 40–50 °C, 0,8 kg/h, 55 °C, 30 kW); el intermedio del quiz.

## Lo que quise incluir y dejé fuera por no poder verificarlo

- Calcular el calor de neutralización en disolución (H⁺ + OH⁻ acuosos) con entalpías de iones: el NIST WebBook no las tiene y no se leyó otra fuente gratuita. Por eso se explica con Hess la diferencia entre el camino «en seco» (calculado) y los 57 kJ/mol de `termoquimica-a-fondo`, sin dar el calor de cada paso.
- El calor de disolución del HCl gas y del NaOH sólido en cifras (solo se pudo leer en la ICSC que la sosa genera calor con el agua).
- La descomposición del carbonato de calcio como ejemplo clásico de temperatura de inversión: el NIST no devolvió datos de la calcita (CAS 471-34-1 sin datos; 13397-26-7 no encontrado).
- S° del etano gas y del metano en revisión CODATA (no están en la página del NIST), por eso no hay ΔS de la hidrogenación del eteno.
- Condiciones industriales de la síntesis del amoniaco (presión y temperatura reales): no verificadas; solo se dan las cuentas termodinámicas.
- Tablas de energías medias de enlace de libro de texto (C=C, C–C, C–N...): no hay fuente gratuita leída; solo se derivan del NIST las de H–H, Cl–Cl, H–Cl y el C–H medio del metano.
- Definiciones IUPAC del Gold Book (entalpía, entropía, energía de Gibbs, constante de equilibrio estándar): goldbook.iupac.org devolvió la comprobación de Cloudflare con curl y no resolvió con WebFetch; openstax.org tampoco es accesible.
- Por qué exactamente la K de la esterificación calculada con tablas (48) difiere de la medida (unos 4): se dice solo lo que es seguro (las tablas son de sustancias puras; la sensibilidad de K a ΔG° es un cálculo), sin entrar en coeficientes de actividad.

## Ideas para la capa visual

1. **Esquema del ciclo de Hess de la hidrogenación del nitrobenceno**: reactivos arriba, «elementos» en un nivel de referencia (0) y productos abajo, con flechas de ΔfH° y la de ΔH° = −552,86 kJ/mol; mismo dibujo para el camino «en seco» frente al camino en disolución de la neutralización.
2. **Gráfica interactiva de ΔG frente a T** (rectas ΔG = ΔH − TΔS) para la evaporación del agua, el amoniaco y el nitro, con deslizador de temperatura y el punto de corte con cero marcado (97,0 °C, 190,6 °C, fuera de escala).
3. **Barras de S°** de sólidos, líquidos y gases de la tabla (NaCl, agua líquida, agua gas, N₂) para ver de un vistazo que el gas tiene mucha más entropía.
4. **Simulación PhET «Reactions & Rates»** o similar, para separar visualmente «si puede ocurrir» (altura final) de «qué tan rápido» (la colina de activación), enlazando con «Velocidad de reacción a fondo».
