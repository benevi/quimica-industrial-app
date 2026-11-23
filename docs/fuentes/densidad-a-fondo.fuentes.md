# Fuentes de «Densidad a fondo: pasar de litros a kilos sin equivocarse» (`densidad-a-fondo`)

Documentos leídos en esta sesión (copias en `scratchpad/src_dens/dl/`):

- RD 2032/2009, texto consolidado: https://www.boe.es/buscar/act.php?id=BOE-A-2010-927 (`rd2032.html`, convertido a `rd2032.txt`).
- VIM 3 (JCGM 200:2012), entradas 1.1, 1.8, 1.19, 1.24, 2.3 y 4.14: https://jcgm.bipm.org/vim/en/1.8.html, …/2.3.html, etc.
- Formulación IAPWS-IF97 y formulación IAPWS del hielo Ih, a través del paquete de python `iapws` 1.5.5 (instalado en `src_dens/venv`). Script de cálculo: `src_dens/calc.py`. Comprobación pedida: IF97 a 20 °C y 101325 Pa da 998,206 kg/m³ (IAPWS-95 da 998,207).
- Fichas de datos de seguridad ficticias de la app: `src/content/fds.ts` (SOLVEX M metanol, SOLVEX T tolueno, CAUSTIL 50, CLORAC 35, INERTAL N2).
- Lecciones de la app: `src/content/nivel0.ts` (`densidad`), `nivel1-mol.ts`, `nivel11-fluidos.ts`, `nivel11-solidos.ts`, `nivel13-instrumentos.ts`, `nivel1-enlaces.ts`, `nivel14-gases.ts`, `nivel15-atex.ts`, `nivel1-disoluciones.ts`.

## Tabla de afirmaciones

| Dato o afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| ρ = m / V; m = ρ·V; V = m/ρ | Conocimiento de libro de texto | Comprobado por cálculo en los ejemplos |
| La unidad SI de «densidad, masa en volumen», símbolo ρ, es el kg/m³ | RD 2032/2009, tabla de unidades SI derivadas coherentes | Leído en el documento |
| 1 L = 1 dm³ = 10³ cm³ = 10⁻³ m³; 1 t = 10³ kg | RD 2032/2009, tabla 6 | Leído en el documento |
| Se recomienda la L mayúscula para el litro | RD 2032/2009, nota (d) de la tabla 6 | Leído (frase retirada del texto final por longitud) |
| Equivalencias g/cm³ = g/mL = kg/L = t/m³ = 1000 kg/m³ | Derivadas de las definiciones del RD 2032/2009 | Recalculado |
| Tolueno 0,87 g/cm³ (870 kg/m³); metanol 0,79 g/cm³ (20 °C); sosa 50 % 1,52 g/cm³ (20 °C); clorhídrico 35 % 1,17 g/cm³; densidad de vapor del tolueno 3,1 (aire = 1); nitrógeno densidad relativa 0,97 (aire = 1) | `src/content/fds.ts`, sección 9 de cada ficha | Leído en el archivo |
| Diclorometano 1,33 kg/L; ácido sulfúrico 98 % 1,84 kg/L | `src/content/nivel0.ts` (lección `densidad`) y `nivel1-mol.ts` | Leído en el archivo |
| Las magnitudes cociente de dos de la misma naturaleza son adimensionales y su unidad es el número uno, que no se escribe | RD 2032/2009, apartado 6 y punto 2.10 | Leído en el documento |
| «Quantity of dimension one»; algunas se definen como cociente de dos magnitudes de la misma naturaleza | VIM 1.8, nota 3 | Leído en el documento |
| La densidad relativa coincide con la densidad en kg/L solo si el agua de referencia tiene 1 kg/L, hacia 4 °C | Cálculo IAPWS-IF97 (999,98 kg/m³ a 4 °C) | Recalculado |
| Peso específico = densidad × gravedad, en N/m³; uso coloquial como sinónimo de densidad | Conocimiento de libro de texto | No hay cifra; solo mención |
| La longitud de una barra de acero a 23 °C difiere de la de 20 °C y hay que corregir | VIM 2.3, ejemplo 2 de la nota 3 | Leído en el documento |
| Dilatación de los líquidos al calentar y bajada de densidad | Conocimiento de libro de texto | Confirmado con la tabla IF97 |
| Densidad del agua a 101325 Pa: 4 °C 999,98; 10 °C 999,70; 20 °C 998,21; 40 °C 992,22; 60 °C 983,21; 80 °C 971,80 kg/m³ | IAPWS-IF97 (región 1) con `iapws` | Calculado (IAPWS-95 da lo mismo a ±0,02) |
| Máximo de densidad del agua cerca de 3,96 °C | IAPWS-IF97, barrido de 0,5 a 10 °C cada 0,01 °C | Calculado |
| 1000 kg de agua: 1001,8 L a 20 °C y 1029,0 L a 80 °C (+2,7 %) | Cálculo con IF97 | Recalculado |
| Coeficiente de dilatación 0,0012 /°C; disolvente de 0,800 kg/L a 15 °C | Valor de ejemplo declarado | — |
| 1000 kg: 1250 L a 15 °C; 1287,5 L a 40 °C; +37,5 L; 0,777 kg/L a 40 °C | Cálculo con los valores de ejemplo | Recalculado |
| Litro de sosa 50 %: 0,76 kg NaOH; clorhídrico 35 %: 0,41 kg HCl; sulfúrico 98 %: 1,80 kg ácido | Cálculo con densidades de la app | Recalculado |
| Bidón de 200 L de sosa 50 % > 300 kg (304 kg); 1000 L de sulfúrico 98 % > 1800 kg (1840 kg) | Cálculo | Recalculado |
| Contracción de volumen al mezclar etanol y agua (50 mL + 50 mL da algo menos de 100 mL); la densidad de la mezcla no es la media | Conocimiento de libro de texto, solo cualitativo | Sin cifras |
| Existen tablas de densidad y concentración por producto | Conocimiento de libro de texto, solo como idea | Sin valores |
| Ejemplos 1 a 8 (316 kg; 689,7 L; 150 kg y 125 L; 37,5 L; 121,6 kg y 60,8 kg; 239,4 kg y 142,2 kg; 435 kg, 13 %, 665 kg, 33 %; 1943,6 kg, 1947,1 L, 52,9 L; 1250 L, 971 kg, casi 3 %, 1287,5 L) | Densidades de la app, IF97 y valores de ejemplo declarados (30 %, 1,20 kg/L, bidón de 180 L útiles) | Recalculado en `calc.py` |
| Picnómetro: (52,318 − 30,512) / 25,00 = 0,872 g/mL | Valores de ejemplo declarados; método de libro de texto | Recalculado (0,87224) |
| Principio de Arquímedes y funcionamiento del areómetro | Conocimiento de libro de texto | — |
| Pasos generales con el areómetro (limpieza, temperatura, flotar libre, ojo a la altura, menisco según indique el procedimiento) | Conocimiento general de laboratorio; no se dan valores de norma | Redactado de forma general, remitiendo al procedimiento |
| Densímetro de tubo vibrante: la frecuencia de vibración depende de la masa en el tubo | Conocimiento de libro de texto | Sin cifras |
| El Coriolis da masa y densidad con tubos que vibran | `src/content/nivel13-instrumentos.ts` | Leído en el archivo |
| Inmiscibles: el menos denso arriba; tolueno sobre agua, diclorometano al fondo | `src/content/nivel1-enlaces.ts` | Leído en el archivo |
| Hielo a 0 °C: 916,7 kg/m³; agua líquida 999,8 kg/m³; expansión del 9 % al congelar | Formulación IAPWS del hielo Ih (función `_Ice` de `iapws`) e IF97 a 0,01 °C | Calculado (916,72 y 999,84; 9,07 %) |
| Las tuberías de agua pueden reventar al congelarse | Conocimiento general | Cualitativo |
| ρ = P·M/(R·T), R = 8,314 J/(mol·K) | Libro de texto (como en `nivel1-mol.ts`) | — |
| T = t + 273,15 | RD 2032/2009, nota (e) | Leído en el documento |
| Atmósfera normal 101325 Pa | RD 2032/2009, nota (a) de la tabla de datos termodinámicos | Leído en el documento |
| Masa molar media del aire 28,96 g/mol | Dato de libro de texto, no leído en esta sesión | Declarado en el texto como dato de libro de texto |
| Masas atómicas C 12,011; H 1,008; N 14,007 | Valores estándar de la IUPAC, no leídos en esta sesión | Declarados |
| Aire a 20 °C: 1,20 kg/m³; vapor de tolueno 3,83 kg/m³; cociente 3,2 frente a 3,1 de la ficha | Cálculo | Recalculado (1,204; 3,831; 3,18) |
| Mezcla con 2,86 % de tolueno en aire, 6 % más pesada que el aire | Cálculo con la cifra de 2,86 % de `nivel15-atex.ts` | Recalculado (1,062) |
| Los vapores bajan y se acumulan a ras de suelo | `src/content/nivel15-atex.ts` | Leído en el archivo |
| Nitrógeno M = 28,01 g/mol, 0,97 veces el aire; a −100 °C (valor de ejemplo) 1,97 kg/m³, 64 % más que el aire a 20 °C | Cálculo | Recalculado (0,967; 1,972; 1,638) |
| El nitrógeno recién evaporado está frío y baja a los puntos bajos | `src/content/nivel14-gases.ts` (cita la NTP 340) | Leído en el archivo |
| Densidad aparente de un polvo y su diferencia con la del sólido | `src/content/nivel11-solidos.ts` | Leído en el archivo |
| Planta: 360 / 0,87 = 413,8 L; 48 / 1,52 = 31,6 L | Cálculo | Recalculado |
| Quiz: 197,5 kg; 345,9 L; 100 L; 2949,6 kg; 39 kg; 30 L; 2 | Cálculo | Recalculado en `calc.py` |
| Quiz 4: densidad del agua a 60 °C 0,9832 kg/L | IF97 (983,21 kg/m³) | Calculado |

Nada de esta lección viene de fragmentos de buscador: no se usó la búsqueda web.

## Lo que se dejó fuera por no poder verificarlo

- Coeficientes de dilatación reales de disolventes concretos (tolueno, metanol, acetona): solo se usa un valor de ejemplo.
- Densidades a otras temperaturas de disolventes y de la sosa o los ácidos.
- Valores de tablas de densidad y concentración (sosa, sulfúrico, clorhídrico, etanol y agua) y la cifra exacta de la contracción del etanol con agua.
- Notación de temperaturas de referencia de la densidad relativa (tipo d 20/20 o d 20/4) y lo que exige la Farmacopea Europea: no se ha leído.
- Normas del areómetro (lectura en superficie o en lo alto del menisco, correcciones de temperatura): son normas de pago; se remite al procedimiento.
- Exactitudes típicas del picnómetro, del areómetro y del densímetro de tubo vibrante.
- Densidad del hidróxido de sodio sólido o de los cristales de un API.
- Gravedad normal (9,80665 m/s²) para el peso específico: no se usa ninguna cifra.
