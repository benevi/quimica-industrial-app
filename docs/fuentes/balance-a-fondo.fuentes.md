# Fuentes y comprobaciones: lección `balance-a-fondo`

Niveles de comprobación:

- **Leído**: descargué el documento oficial en esta sesión y leí el pasaje (copias en `src_balance/dl/`: `q7.pdf`/`q7.txt`, `rd117.pdf`/`rd117.txt`).
- **App**: ya está en una lección de la app.
- **Libro de texto**: conocimiento de química general de libro de texto, comprobado por cálculo; no se cita ninguna fuente no leída.
- **Recalculado**: cálculo propio con Python (`src_balance/calc.py`), redondeado igual que en el texto.
- **Valor de ejemplo declarado**: cifra inventada y dicha así en el texto. Productos, equipos, lotes y personas son ficticios (MP-7, KR-40, RG-2, R-310, C-320, S-330, DR-12, BS-31, BS-33, BS-40, KR-40-0412).

Fuentes leídas:
- ICH Q7, *Good Manufacturing Practice Guide for Active Pharmaceutical Ingredients*: https://database.ich.org/sites/default/files/Q7%20Guideline.pdf
- Real Decreto 117/2003, texto consolidado del BOE: https://www.boe.es/buscar/pdf/2003/BOE-A-2003-2515-consolidado.pdf (ficha: https://www.boe.es/buscar/act.php?id=BOE-A-2003-2515). El identificador BOE-A-2003-2515 lo saqué de un resultado del buscador web y luego descargué y leí el PDF consolidado del BOE.

## Tabla de afirmaciones

| Afirmación o cifra | Fuente | Cómo se comprobó |
|---|---|---|
| La masa se conserva; cada kilo que entra está en algún sitio | Libro de texto; lección `materia-a-fondo` | App + libro de texto |
| Definición de rendimiento teórico: cantidad que se produciría según el material a usar, sin pérdida ni error | ICH Q7, glosario «Yield, Theoretical» | Leído |
| Definición de rendimiento esperado: cantidad o porcentaje del teórico previsto según datos de laboratorio, piloto o fabricación | ICH Q7, glosario «Yield, Expected» | Leído |
| Rendimiento real / teórico × 100; rendimiento en masa (kg/kg) frente a molar | Libro de texto; lección `rendimiento-y-balance` | App + libro de texto |
| Ej. 1: 100,0/180 = 0,5556 kmol; × 250 = 138,9 kg; 118,0/100,0 = 1,18 kg/kg; 118,0/138,9 = 85,0 % | Valor de ejemplo declarado; cálculo | Recalculado |
| Ej. 2: 150,0/320 × 220 = 103,1 kg; 92,0/150,0 = 0,61 kg/kg; 92,0/103,1 = 89,2 % | Valor de ejemplo; cálculo | Recalculado |
| Ej. 3: masa molar del HCl 36,46 g/mol; sal 336,46 g/mol; 200,0/300 × 336,46 = 224,3 kg; 210,0/200,0 = 1,05; 93,6 % | 36,46 g/mol: lección `materia-a-fondo` (H 1,008 + Cl 35,45, valores estándar IUPAC no leídos en esta sesión); resto cálculo | App + recalculado |
| Que una etapa de desprotección haga perder masa a la molécula y una sal la gane | Libro de texto (cualitativo) | Libro de texto |
| Pérdida por secado, base seca = masa × (1 − LOD/100); riqueza (assay) tal cual o en base seca | Libro de texto; lecciones `rendimiento-y-balance`, `materia-a-fondo` (sólido seco de una torta) | App + libro de texto |
| Ej. 4: 125,0 × 0,92 = 115,0 kg; 96,2 % y 88,5 % | Valor de ejemplo; cálculo | Recalculado |
| Ej. 5: 110,0 × 0,95 = 104,5 kg; 91,7 % y 87,1 % | Valor de ejemplo; cálculo | Recalculado |
| Ej. 6: 140,0 × 0,97 × 0,98 = 133,1 kg; 100,8 % y 95,8 % | Valor de ejemplo; cálculo | Recalculado |
| ICH Q7 6.41: la instrucción maestra incluye los rangos de rendimiento esperado en las fases apropiadas | ICH Q7 6.41 | Leído |
| ICH Q7 6.52: la hoja del lote recoge el rendimiento real en fases o momentos apropiados, y pesos/medidas y lotes de los materiales | ICH Q7 6.52 | Leído |
| ICH Q7 8.14: comparar real con esperado en pasos designados; rangos según datos previos de laboratorio, piloto o fabricación; investigar desviaciones de rendimiento en pasos críticos para ver su impacto en la calidad | ICH Q7 8.14 | Leído |
| ICH Q7 8.15: toda desviación se documenta y explica; las críticas se investigan | ICH Q7 8.15 | Leído |
| ICH Q7 6.53: procedimientos para investigar desviaciones críticas; la investigación se extiende a otros lotes posiblemente afectados | ICH Q7 6.53 | Leído |
| Rango de ejemplo 82,0–90,0 %; límite de ejemplo 1 % no justificado | Valor de ejemplo declarado | — |
| Qué hace el operador si sale fuera de rango (no repetir pesadas, revisar con otro, anotar lo real, avisar, guardar lo que sirva, desviación según procedimiento) | Deducido de ICH Q7 8.14, 8.15, 6.52 y de las lecciones `hoja-de-produccion-a-fondo` y `rendimiento-y-balance`; se remite al procedimiento | Leído + App |
| Rendimiento alto también es sospechoso (húmedo, pesada errónea) | Lección `rendimiento-y-balance`, `hoja-de-produccion-a-fondo` | App |
| Balance del lote: etapa 1 780,0 / 777,5 / 2,5 kg / 0,32 %; etapa 2 787,0 / 784,8 / 2,2 kg / 0,28 %; etapa 3 145,0 / 143,8 / 1,2 kg / 0,83 %; total 1090,0 / 1084,1 / 5,9 kg / 0,54 % | Valores de ejemplo; cálculo | Recalculado |
| Torta 145,0 × 0,82 = 118,9 kg de sólido y 26,1 kg de líquido; 118,4 kg de sólido salido; 0,5 kg en equipo; 0,7 kg de vapor | Valores de ejemplo; cálculo | Recalculado |
| RG-2: 40,0 kg frente a 38,9 kg necesarios (no se cita en el texto, solo comprobación interna de que el ejemplo es coherente) | Cálculo | Recalculado |
| Células de carga pesan el contenido del reactor | Libro de texto de instrumentación (cualitativo); no se dan precisiones | Libro de texto |
| El lavado sale más pesado que entra porque desplaza aguas madres de la torta | Deducido del propio balance de ejemplo (cualitativo) | Deducido |
| Balance del producto: 129,0 kg formados (92,9 % del teórico); 118,2 × 0,995 = 117,6; 578,0 × 0,0150 = 8,7; 61,5 × 0,0080 = 0,5; muestras 0,3; resto 1,9; rendimiento corregido 84,7 %; unos 7 kg por cada 100 sin formar y unos 6 en aguas madres | Valores de ejemplo; cálculo | Recalculado |
| Definición de aguas madres (líquido residual tras cristalizar o aislar; puede contener materiales sin reaccionar, intermedios, API e impurezas) | ICH Q7, glosario «Mother Liquor» | Leído |
| Siempre queda producto disuelto en las aguas madres | Lección `disoluciones-a-fondo` | App |
| Con un 3,0 %: 578,0 × 0,030 = 17,3 kg | Cálculo | Recalculado |
| ICH Q7 14.40: recuperación de reactivos, intermedios o API de aguas madres o filtrados aceptable con procedimientos aprobados y si lo recuperado cumple especificaciones | ICH Q7 14.40 | Leído |
| ICH Q7 14.41 y 14.42: disolventes recuperados reutilizables si la recuperación se controla y cumplen estándares; mezcla con disolvente nuevo si los ensayos demuestran su idoneidad | ICH Q7 14.41, 14.42 | Leído |
| ICH Q7 14.43: el uso de disolventes recuperados, aguas madres y otros materiales recuperados se documenta | ICH Q7 14.43 | Leído |
| Balance de metanol: 600 + 40 + 30 = 670,0 kg; 299,4 + 14,0 + 325,4 + 27,7 = 666,5; pérdida 3,5 kg (0,52 %); recuperado 313,4 kg (46,8 %); residuo 353,1 kg (52,7 %) | Valores de ejemplo (composiciones inventadas); cálculo | Recalculado |
| COV; el RD 117/2003 limita sus emisiones; anexo I incluye la fabricación de productos farmacéuticos | RD 117/2003, art. 1 y 2 y anexo I, punto 7 | Leído |
| Anexo IV: plan de gestión de disolventes; principios; definiciones para el balance de masa: entradas I1 (disolvente adquirido) e I2 (recuperado y reutilizado), salidas O1 gases residuales, O2 agua, O3 en productos, O4 emisiones no capturadas (ventanas, puertas, respiraderos), O5 reacciones/destrucción, O6 residuos recogidos, O7 vendidos, O8 recuperados para reutilizar, O9 otras vías | RD 117/2003, anexo IV, puntos 1–3 | Leído |
| Umbrales y límites (50 t/año, 20 mg C/Nm³, 5 % y 15 %) no se repiten: se remite a «Almacenamiento, emergencias y residuos a fondo», que ya los trae; los volví a leer en el anexo II del consolidado | RD 117/2003, anexo II, fila 20 | Leído (no usado en el texto) |
| «Ese plan solo es bueno si cada lote ha anotado bien sus destilados y residuos» | Deducción propia a partir del anexo IV (el plan es un balance con esas corrientes); el RD no habla de lotes | Deducido |
| Conciliación: recibido = usado + devuelto + desechado | Lecciones `solidos-y-balances` y `solidos-a-fondo` | App |
| Ej. de conciliación de MP-7: 100,0 + 0,1 + 0,3 = 100,4 | Valor de ejemplo; cálculo | Recalculado |
| ICH Q7 9.31: conciliar etiquetas emitidas, usadas y devueltas; evaluar diferencias entre envases etiquetados y etiquetas emitidas; investigar y que calidad apruebe la investigación | ICH Q7 9.31 | Leído |
| Una etiqueta que falta puede estar en el envase equivocado | Lección `envasado-y-etiquetado` | App |
| Caso 1: 104,5 × 0,994 = 103,9 kg; 74,8 %; 580,0 × 0,039 = 22,6 kg; fallo del frío a 15 °C en vez de 5 °C | Valores de ejemplo; cálculo | Recalculado |
| Caso 2: 111,3 / 138,9 = 80,1 %; 118,9 − 111,3 = 7,6 kg; pesa patrón 50 kg marca 47,0 (−6 %), coherente con 111,3/118,2 = 0,94 | Valores de ejemplo; cálculo | Recalculado |
| ICH Q7 5.35: desviaciones de calibración en instrumentos críticos se investigan para ver el impacto desde la última calibración correcta; 5.30 y 5.34 (calibración, no usar instrumentos que no cumplen) | ICH Q7 5.30, 5.34, 5.35 | Leído |
| Tabla de pistas (fuga, torta mal lavada, producto húmedo, vapor que pasa el condensador) | Razonamiento cualitativo de balance; lecciones `rendimiento-y-balance`, `solidos-y-balances`, `materia-a-fondo` | App + deducido |
| Lo que anota el operador: pesadas con báscula, hora, bruto/tara/neto, incidencias | ICH Q7 6.52, 8.12; lecciones `solidos-a-fondo`, `envasado-y-etiquetado` | Leído + App |
| Quiz 1: 80,0/200 × 260 = 104,0; 92,0/104,0 = 88,5 %; 1,15 kg/kg | Cálculo | Recalculado |
| Quiz 2: 130,0 × 0,94 = 122,2; 7,8 kg | Cálculo | Recalculado |
| Quiz 3: 95,0 × 0,970 = 92,15; 87,8 %; 90,5 % | Cálculo | Recalculado |
| Quiz 5: 850,0 − 841,5 = 8,5; 1 % | Cálculo | Recalculado |
| Quiz 6: 620,0 × 0,025 = 15,5 | Cálculo | Recalculado |
| Quiz 8: 237,6 + 220,0 + 27,0 = 484,6; 15,4 kg; 3,1 % | Cálculo | Recalculado |
| Quiz 9: 12 − 9 − 1 − 1 = 1 | Cálculo | Recalculado |

## Lo que quise incluir y dejé fuera

- La convención de la Farmacopea Europea de expresar la valoración «referida a la sustancia seca» en las monografías: no la leí en esta sesión; en el texto solo digo que el certificado indica si la riqueza es tal cual o en base seca.
- Límites típicos de «no justificado» en un balance de lote o de rendimiento esperado en la industria: no encontré fuente gratuita fiable; los que aparecen son valores de ejemplo declarados.
- Precisión típica de las células de carga de un reactor: sin fuente leída; no se da cifra.
- ICH Q7 19.51 (en fabricación para ensayos clínicos los rendimientos esperados pueden ser más variables y no se esperan investigaciones): leído, pero lo dejé fuera por no ser el caso del operador de producción comercial.
- Los valores límite del anexo II del RD 117/2003 están verificados pero no se repiten, porque ya están en «Almacenamiento, emergencias y residuos a fondo».
