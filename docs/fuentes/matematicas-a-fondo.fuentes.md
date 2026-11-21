# Fuentes de la lección `matematicas-a-fondo`

Cómo leer la columna «Comprobación»:

- **Leído en el documento**: descargado con curl en esta sesión, pasado a texto y leído el pasaje (copias en `src_mates/dl/`).
- **Recalculado**: cuenta rehecha con python (`src_mates/calc.py`), con el mismo redondeo que el texto (redondeo convencional, mitad hacia arriba, con `decimal.ROUND_HALF_UP`).
- **Libro de texto, comprobado por cálculo**: aritmética y álgebra escolar universal; no se cita una fuente que no se haya leído.
- **Lección de la app**: dato ya presente en una lección del repo o del lote de lecciones «a fondo».
- **Valor de ejemplo declarado**: número inventado para la cuenta; el texto lo dice.

Documentos leídos:

- **RD 2032/2009**, unidades legales de medida, texto consolidado: https://www.boe.es/buscar/act.php?id=BOE-A-2010-927 (anexo, capítulo de reglas de escritura, apartados 2.6, 2.8, 2.9 y 2.10; capítulo de prefijos, tabla 5 y apartados 3.2 y 3.5).
- **ICH Q3A(R2)**, «Impurities in new drug substances»: https://database.ich.org/sites/default/files/Q3A%28R2%29%20Guideline.pdf (apartado 5, «Reporting impurity content of batches», sobre decimales y redondeo; anexo 2, ejemplos 1 y 2, y nota 2).
- **ICH Q7**, «Good manufacturing practice guide for active pharmaceutical ingredients»: https://database.ich.org/sites/default/files/Q7%20Guideline.pdf (apartados 6.14, 6.40, 6.41, 6.52, 8.10, 8.12, 8.14 y 8.15).
- **VIM** (JCGM 200), entradas en línea: https://jcgm.bipm.org/vim/en/4.14.html (resolución) y https://jcgm.bipm.org/vim/en/4.15.html (resolución de un dispositivo visualizador).
- Lecciones de la app (para enlazar y no repetir): `matematicas-utiles`, `unidades-y-conversiones`, `densidad` (src/content/nivel0.ts), «Cálculo y expresión de resultados» (src/content/nivel6.ts), «Fluidos a fondo» (nivel11-fluidos.ts), «Intercambio de calor y frío a fondo» (nivel11-calor.ts), «El secado a fondo» (nivel12-secado.ts), «Disoluciones y solubilidad a fondo» (nivel1-disoluciones.ts), «Inertización a fondo» (nivel12-inertizacion.ts), «El sistema de control a fondo» (nivel13-sistema.ts), «Rendimiento y balance de materia a fondo» (nivel2-balance.ts), «Desviaciones y CAPA a fondo» (nivel16-desviaciones.ts).

| Dato o afirmación | Fuente | Comprobación |
|---|---|---|
| El separador decimal puede ser la coma o el punto; preferiblemente la coma; entre +1 y −1 va precedido de cero | RD 2032/2009, anexo, 2.8 | Leído en el documento |
| Números con muchas cifras en grupos de tres separados por un espacio; nunca por puntos ni comas; con solo cuatro cifras es usual no separar | RD 2032/2009, 2.9 | Leído en el documento |
| Siempre un espacio entre número y unidad, también antes de °C | RD 2032/2009, 2.6 | Leído en el documento |
| El símbolo % representa el número 0,01; se deja un espacio entre número y % | RD 2032/2009, 2.10 | Leído en el documento |
| ppm significa 10⁻⁶ en valor relativo; con %, ppm, etc., hay que declarar la magnitud sin dimensión de que se trata | RD 2032/2009, 2.10 | Leído en el documento |
| Prefijos mega (M, 10⁶), kilo (k, 10³), mili (m, 10⁻³), micro (µ, 10⁻⁶) | RD 2032/2009, tabla 5 | Leído en el documento |
| Múltiplos con mayúscula salvo da, h y k; submúltiplos con minúscula (de ahí M frente a m) | RD 2032/2009, 3.2 | Leído en el documento |
| Los prefijos nunca se usan con minuto, hora ni día | RD 2032/2009, 3.5 | Leído en el documento |
| 1 bar = 100 000 Pa; 1 mbar = 100 Pa; 750 mbar = 0,75 bar = 75 kPa | RD 2032/2009, tabla 8 (valor del bar, leído también en la lección `mol-a-fondo`); conversión por cálculo | Leído en el documento y recalculado |
| ppb = 10⁻⁹ (*billion* inglés = mil millones); billón español = 10¹² | Convención de uso; el RD no define ppb | Libro de texto (no leído en fuente oficial) |
| 1 % = 10 000 ppm; 1 ppm = 1000 ppb = 0,0001 %; 1 ppm en masa = 1 mg/kg | Cálculo a partir de las potencias de diez | Recalculado |
| Calculadoras y programas usan el punto; en hojas de cálculo depende de la configuración regional | Conocimiento general de uso de programas | Libro de texto (no hay fuente leída) |
| «1.250 kg» leído con convención inglesa = 1,25 kg: error de mil veces | Cálculo | Recalculado |
| Operaciones con decimales: 12,5 + 0,75 + 3,125 = 16,375; 2,5 × 0,4 = 1,0; 7,2 / 0,5 = 14,4 | Cálculo | Recalculado |
| Tabla de fracciones: 1/2 = 0,5; 1/4 = 0,25; 3/4 = 0,75; 1/8 = 0,125; 1/3 = 0,333… | Cálculo | Recalculado |
| Las cuatro cuentas de porcentajes y el cambio porcentual | Aritmética escolar | Libro de texto, comprobado por cálculo |
| Ejemplos de porcentajes: 30 kg y 220 kg (torta 250 kg, LOD 12 %); 144,75 y 5,25 kg (150 kg al 96,5 %); 91,978… = 92,0 % (167,4 / 182); 8 % p/p (40 / 500); 316,8 a 323,2 kg (320 ± 1 %); −7 % (372 frente a 400); 80 kg (60 / 0,75); 1020 L (850 × 1,20); 76,5 % (0,90 × 0,85); 0,04 puntos y +50 % (0,08 a 0,12 %) | Valores de ejemplo declarados; cuentas | Recalculado |
| No se calculan porcentajes de temperaturas en °C porque 0 °C no es un cero absoluto | La temperatura Celsius es t = T − 273,15 K (RD 2032/2009, ya citado en `mol-a-fondo`) | Libro de texto |
| La pérdida por secado (LOD) se expresa sobre la muestra húmeda | Lección «El secado a fondo» | Lección de la app |
| Sube 10 % y baja 10 %: 110 × 0,90 = 99; pérdidas 10 % y 15 %: queda 76,5 % | Cálculo | Recalculado |
| Escalado: factor 52,5 / 40 = 1,3125; 288,75 L; 15,75 kg; con factor 1,3: 286 L | Valores de ejemplo; cálculo | Recalculado |
| Trasvase 2400 L: 40 min a 60 L/min, 30 min a 80 L/min; cargas 900 / 150 = 6 y 900 / 180 = 5; dilución 10 × 2 / 5 = 4 g/L; mezcla 3:1 de 600 L = 450 + 150 L | Valores de ejemplo; cálculo | Recalculado |
| Pérdida de carga crece aproximadamente con el cuadrado del caudal (régimen turbulento) | Lección «Fluidos a fondo» (regla aproximada de libro de texto) | Lección de la app |
| Cada ciclo de inertización multiplica el oxígeno por el mismo factor | Lección «Inertización a fondo» | Lección de la app |
| Las últimas décimas de humedad son las más lentas (tramo de velocidad decreciente) | Lección «El secado a fondo» | Lección de la app |
| Potencias de diez y notación científica: 2 500 000 = 2,5 × 10⁶; 0,00035 = 3,5 × 10⁻⁴ | Cálculo | Recalculado |
| Conversiones: 2,5 MJ = 2 500 000 J; 350 µg = 3,5 × 10⁻⁴ g = 0,35 mg; 0,045 kg = 45 g = 45 000 mg; 12 mL = 0,012 L | Cálculo con los factores de la tabla 5 del RD | Recalculado |
| Ejemplos ppm: 0,05 % = 500 ppm; 3000 ppm = 0,3 %; 25 ppb = 0,025 ppm | Cálculo | Recalculado |
| Q = m × cp × ΔT; cp del agua 4,18 kJ/(kg·K) | Lección «Intercambio de calor y frío a fondo» | Lección de la app |
| m = 50 000 / (4,18 × 25) = 478,47 = 478,5 kg; comprobación 478,5 × 4,18 × 25 = 50 003 kJ; cp = 30 000 / (600 × 20) = 2,5 kJ/(kg·K) | Valores de ejemplo; cálculo | Recalculado |
| Densidades tolueno 0,87 kg/L, acetona 0,79 kg/L, diclorometano 1,33 kg/L | Lección `densidad` (src/content/nivel0.ts), tabla a 20 °C | Lección de la app |
| V = 200 / 0,87 = 229,9 L; m = 150 × 0,79 = 118,5 kg | Cálculo | Recalculado |
| C1 · V1 = C2 · V2; V2 = 30 × 20 / 5 = 120 L; C2 = 30 × 20 / 80 = 7,5 g/L | Fórmula de la lección «Disoluciones y solubilidad a fondo»; valores de ejemplo | Recalculado |
| Regla convencional de redondeo (0–4 se queda, 5–9 sube) | Libro de texto; es la regla que aplica la lección «Cálculo y expresión de resultados». ICH Q3A dice «conventional rules» sin detallarlas; sus ejemplos (0,0963 a 0,10; 0,1649 a 0,16; 0,066 a 0,07; 0,124 a 0,12; 0,143 a 0,14) son coherentes con ella | Libro de texto; ejemplos de Q3A leídos en el documento |
| Redondeos: 12,346 a 12,35; 0,0963 a 0,10; 7,95 a 8,0; 99,449 a 99,4 (y el doble redondeo 99,45 a 99,5) | Cálculo | Recalculado |
| «Algunas normas tratan el 5 exacto de otra manera» (por ejemplo, redondeo al par) | Conocimiento general de cálculo numérico; no se nombra ninguna norma concreta | Libro de texto (no leído en fuente oficial) |
| Cifras significativas: ceros a la izquierda no cuentan; ceros finales tras la coma sí | Libro de texto | Libro de texto |
| Resultados por debajo del 1,0 % con dos decimales y desde el 1,0 % con uno; redondeo con reglas convencionales | ICH Q3A(R2), apartado 5 («Below 1.0%, the results should be reported to two decimal places… at and above 1.0%… one decimal place… rounded using conventional rules (see Attachment 2)») | Leído en el documento |
| Para ver si se supera un umbral en %, el resultado se redondea a los mismos decimales que el umbral y se compara directamente | ICH Q3A(R2), anexo 2, nota 2 | Leído en el documento |
| Ejemplo: umbral de identificación 0,10 %; bruto 0,0963 % informado 0,10 %, no lo supera; 0,12 % sí; umbral de cualificación 0,15 %; 0,1649 % informado 0,16 %, sí lo supera | ICH Q3A(R2), anexo 2, ejemplo 1 (dosis máxima diaria 0,5 g) | Leído en el documento |
| Pregunta del test: 0,154 % frente a umbral 0,15 % se redondea a 0,15 y no lo supera | Aplicación de la nota 2 de Q3A; valor de ejemplo | Recalculado |
| Resolución de un dispositivo visualizador: menor diferencia entre indicaciones que se puede distinguir con sentido | VIM 4.15 | Leído en el documento |
| La hoja debe recoger pesos y medidas de cada material y los resultados reales de los parámetros críticos | ICH Q7, 6.52 | Leído en el documento |
| Equipos de pesada y medida de exactitud adecuada al uso | ICH Q7, 8.10 (no citado literalmente en el texto) | Leído en el documento |
| Media 504,6 / 8 = 63,075 = 63,1 °C; máximo 64,1; mínimo 62,0; rango 2,1 °C | Valores de ejemplo; cálculo | Recalculado |
| Desviación típica, remitida a «Cálculo y expresión de resultados» | Lección de la app (nivel 6) | Lección de la app |
| Pendiente = (y2 − y1) / (x2 − x1); interpolación lineal | Libro de texto | Libro de texto, comprobado por cálculo |
| Enfriamiento: (46 − 78) / 40 = −0,8 °C/min; 16 / 0,8 = 20 min | Valores de ejemplo; cálculo | Recalculado |
| Solubilidad QR-7: 3,2 + 4,4 × 0,75 = 6,5 g por 100 g | Valores de ejemplo (producto ficticio); cálculo | Recalculado |
| Secado: 4,5 %/h al principio, 0,3 %/h al final; paso por 2 % a 5,1 h | Valores de ejemplo; cálculo (5,11 h) | Recalculado |
| El punto final del secado lo decide el análisis | Lección «El secado a fondo» | Lección de la app |
| La tecla % varía según el modelo de calculadora | Conocimiento general; no se afirma un comportamiento concreto | Libro de texto (no leído en fuente oficial) |
| Prioridad de operaciones: (5,000 − 4,880) / 5,000 × 100 = 2,4 %; sin paréntesis 5 − 4,88 / 5 = 4,024 | Cálculo | Recalculado |
| EXP incluye el «× 10»; 10 EXP 4 = 10 × 10⁴ = 100 000 | Funcionamiento general de calculadoras científicas; cuenta | Libro de texto y recalculado |
| Orden de magnitud: 220 × 1,3 ≈ 290 | Cálculo | Recalculado |
| La instrucción maestra incluye, cuando la cantidad no es fija, la cuenta para cada tamaño de lote | ICH Q7, 6.41 | Leído en el documento |
| La instrucción maestra la prepara una persona y la comprueba independientemente otra de calidad | ICH Q7, 6.40 (contexto; no citado en el texto) | Leído en el documento |
| Pesadas, medidas o subdivisiones críticas con testigo o control equivalente | ICH Q7, 8.12 | Leído en el documento |
| Firmas de quien hace y de quien supervisa o comprueba cada paso crítico | ICH Q7, 6.52 | Leído en el documento |
| Comparar rendimiento real con esperado | ICH Q7, 8.14 | Leído en el documento |
| Correcciones con fecha y firma, dejando legible la entrada original | ICH Q7, 6.14 | Leído en el documento |
| Toda desviación se documenta y explica | ICH Q7, 8.15 | Leído en el documento |
| Quiz: 180 × 0,15 = 27 kg; 213,6 / 240 = 89 %; 0,92 × 0,85 = 78,2 %; 245 × 36 / 30 = 294 L; 0,035 × 10 000 = 350 ppm; 260 / 1,33 = 195,49 = 195,5 L; 62 700 / (4,18 × 30) = 500 kg; 18 / 24 = 0,75 °C/min | Valores de ejemplo; cálculo | Recalculado |
| Ejemplo de planta: equipos RX-210, BS-06, FI-212, lote HB-118, intermedio TZ-40, personas Laura y Marcos, totalizador 288,9 L | Todo ficticio | Valor de ejemplo declarado |

## Lo que se quiso incluir y se dejó fuera

- **GUM (JCGM 100:2008), apartado 7, sobre la expresión de resultados** (número de cifras de la incertidumbre): las direcciones de jcgm.bipm.org para la GUM dan 404 y los espejos (iso.org, bipm.org, is.muni.cz) no son accesibles desde esta sesión. Solo se vio en el buscador que el PDF oficial está en la página DOI 10.59161/JCGM100-2008E del BIPM. No se usa nada de la GUM.
- **Farmacopea Europea (1.2, reglas de redondeo) y USP (General Notices 7.20)**: no accesibles gratis desde esta sesión. Por eso no se afirma qué regla usa la Farmacopea para el 5 exacto; el texto dice que manda la del procedimiento.
- **ICH Q7 sobre redondeo**: el documento leído no trata el redondeo; solo se usa para registros, verificación, rendimientos y correcciones.
- **Comportamiento concreto de la tecla % en un modelo de calculadora**: varía y no hay fuente leída; se aconseja no usarla.
- **Regla exacta del VIM o de otra norma sobre cuántas cifras anotar en un registro**: no existe en lo leído; se usa la definición de resolución del VIM y lo que pide ICH Q7 (resultados reales).
