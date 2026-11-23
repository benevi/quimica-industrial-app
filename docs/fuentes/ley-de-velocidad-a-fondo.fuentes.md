# Fuentes de `ley-de-velocidad-a-fondo`

Fecha de consulta: 23/11/2026. Descargas con curl en `scratchpad/lecciones/tmp-velocidad/dl/` (HTML pasado a texto con Python; PDF con `pdftotext -layout`). Cálculos en `scratchpad/lecciones/tmp-velocidad/calc.py` (Python 3), que reproduce cada cifra del texto con el mismo redondeo. Lecciones de la app leídas enteras para no repetir: `cinetica-a-fondo` y `hidrogenacion-a-fondo`; leídas por apartados relacionados: `reactividad-organica-a-fondo` (SN1/SN2), `termodinamica-a-fondo` («Lo que Gibbs no te dice»), `equilibrio-a-fondo` («Rápido no es lo mismo que lejos»), `docs/simulador-reactor.md` y `src/sim/reactor/model.ts` (cinética del R-204).

Abreviaturas: RD243 = Real Decreto 243/2022 (BOE-A-2022-5521, copia en `auditoria-temario/boe/`); RD175 = Real Decreto 175/2008 (BOE-A-2008-3419, misma carpeta); LVOC = Decisión de Ejecución (UE) 2017/2117, DO L 323 de 7.12.2017, https://www.boe.es/doue/2017/323/L00001-00050.pdf; Q3D = ICH Q3D(R2), https://database.ich.org/sites/default/files/Q3D-R2_Guideline_Step4_2022_0308.pdf; Q7 = https://database.ich.org/sites/default/files/Q7%20Guideline.pdf; CRM = Reglamento (UE) 2024/1252, https://www.boe.es/doue/2024/1252/L00001-00067.pdf; L7 = Ley 7/2022, https://www.boe.es/buscar/act.php?id=BOE-A-2022-5809; KUP = T. Kuphaldt, «Lessons in Industrial Instrumentation», https://control.com/textbook/calculus/the-concept-of-differentiation/; NTP527 = https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/15-serie-ntp-numeros-506-a-540-ano-2000/ntp-527-reacciones-quimicas-exotermicas-i-factores-de-riesgo-y-prevencion; SIM = `docs/simulador-reactor.md` y `src/sim/reactor/model.ts` del repo.

## Normativa y currículo

| Afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| Química 2.º Bachillerato: «Ley diferencial de la velocidad de una reacción química y los órdenes de reacción a partir de datos experimentales de velocidad de reacción» | RD243 | Leído en el documento |
| Módulo 0189 «Reactores químicos» del título de Química Industrial; RA2 «Selecciona catalizadores...»: tipos, vida útil, técnicas de recuperación/regeneración | RD175 | Leído (encabezado «Módulo Profesional: Reactores químicos ... Código: 0189» y criterios a–f del RA2) |
| MTD 15: elegir catalizador por actividad, selectividad, vida útil «(por ejemplo, vulnerabilidad a venenos del catalizador)» y metales menos tóxicos; protección frente a venenos con pretratamiento de materias primas; optimizar temperatura y presión entre conversión y vida útil; monitorizar la eficiencia de conversión con parámetros como el calor de reacción | LVOC, p. L 323/15-16 | Leído en el documento (cita textual del paréntesis) |
| MTD 17, técnica d: «Regeneración de catalizadores y adsorbentes, por ejemplo por tratamiento térmico o químico» | LVOC, p. L 323/16 | Leído |
| MTD 25: enviar el gas de la regeneración del catalizador de hidrogenación a un sistema de tratamiento adecuado | LVOC, p. L 323/17 | Leído |
| MTD 43: coque «que es tanto un veneno del catalizador como un residuo» | LVOC | Leído (cita textual) |
| Ámbito de la LVOC: química orgánica de gran volumen de producción | LVOC, título | Leído. Que «sirvan de referencia» en API es valoración de la lección, declarada como tal en el texto («escritas para grandes instalaciones») |
| Metales del grupo del platino en la lista de materias primas estratégicas (anexo I, letra m) y en la de fundamentales (anexo II, letra aa) | CRM, pp. 54-56 | Leído |
| Operación R08 «Valorización de componentes procedentes de catalizadores», en el anexo II (operaciones de valorización) | L7, anexo II | Leído |
| Jerarquía de residuos: reciclado antes que eliminación | L7 (ya citada así en `hidrogenacion-a-fondo`) | Se reutiliza la afirmación de esa lección; el anexo II se leyó aquí |
| ICH Q7 14.40-14.43: recuperación de reactivos, intermedios o API aceptable con procedimientos aprobados y especificaciones adecuadas; disolventes y reactivos recuperados; uso documentado. No nombra catalizadores | Q7 | Leído (grep de «catalyst» sin resultados en la guía) |
| Paladio: «platinum group metals»; Pd sobre distintos soportes como catalizador de hidrogenación; níquel como aleación Ni-Al catalizador de hidrogenación | Q3D, monografías Pd y Ni | Leído |
| PDE oral del Pd 100 µg/día | Q3D, tabla A.2.1 | Leído |
| Umbral de control = 30 % de la PDE; si el nivel total se espera siempre por debajo, no hacen falta controles adicionales (con evaluación adecuada) | Q3D, sección 5.6 y glosario | Leído |
| Opción 1 con 10 g de medicamento al día | Q3D (citado ya en `hidrogenacion-a-fondo`) | Reutilizado de esa lección |
| Definición de orden cero: velocidad independiente de la concentración de los reactivos | NTP527, nota 1 | Leído |
| Derivada como pendiente; ejemplo de la bombona de propano sobre la báscula; caudal instantáneo dm/dt como pendiente del segmento infinitesimal | KUP | Leído |
| Masa molar del paladio 106,42 g/mol | NIST WebBook, https://webbook.nist.gov/cgi/cbook.cgi?ID=C7440053&Units=SI | Leído |

## Cinética: fórmulas y cuentas

| Dato | Fuente | Cómo se comprobó |
|---|---|---|
| v = −(1/a) d[A]/dt; ejemplo 2 A da P | Cálculo (proporción estequiométrica) | Razonamiento estequiométrico; no se pudo leer la definición IUPAC (Gold Book bloqueado) |
| Ley v = k[A]^m[B]^n, órdenes parciales y global, se miden | Coherente con «el orden no se deduce de la ecuación» de `cinetica-a-fondo` y con RD243 | Definición estándar; sin documento gratuito leído que la enuncie (ver «Dejado fuera») |
| Unidades de k por orden (mol/(L·s), s⁻¹, L/(mol·s), L²/(mol²·s)) | Cálculo dimensional | Recalculado |
| SN2 v = k[sustrato][nucleófilo]; SN1 v = k[sustrato] | `reactividad-organica-a-fondo` (paso lento con dos o una molécula; tabla «Velocidad depende de») | Leído en la lección de la app; la ley escrita es la traducción directa de lo que dice |
| Ejemplo 1: órdenes 2 y 1, k = 0,20 L²/(mol²·s), v = 5,4 × 10⁻³ | Valores de ejemplo declarados | Recalculado |
| m = log 5,2 / log 3 = 1,50 | Cálculo | Recalculado (1,5007) |
| Ejemplo 2: orden 1 en el catalizador | Valores de ejemplo declarados | Recalculado |
| Seudoorden: 2,0 a 1,9 mol/L, 5 % | Valores de ejemplo | Recalculado |
| R-204: seudoprimer orden en B, AX-21 en exceso, k = 0,1 min⁻¹ a 70 °C, Ea = 90 kJ/mol | SIM | Leído en el repo (`kRef: 0.1/60`, `ea: 90e3`, `tRef: 70`, K = °C + 273,15) |
| t½ = 6,93 min a 70 °C; k = 0,0388 min⁻¹ y t½ = 17,9 min a 60 °C; t½ = 48,8 min a 50 °C; 2 % a 0,5 % en 13,9 min (70 °C) y 35,7 min (60 °C) | Cálculo con Arrhenius y los parámetros de SIM | Recalculado; coincide con la «vida media de unos 7 min a 70 °C» del documento del simulador. El 2 % inicial es valor de ejemplo; el criterio B ≤ 0,5 % es el del simulador |
| Ecuaciones integradas de orden 0, 1 y 2, rectas, pendientes y vidas medias | Cálculo | Comprobadas por integración numérica paso a paso (Euler con 200000 pasos): orden 0, 0,5000 frente a 0,5; orden 1, 0,04979 frente a 0,04979; orden 2, 0,12500 frente a 0,125 |
| Ejemplo 4: t½ 50 y 100 min; 0,125 mol/L a 150 min; 90 % a 450 min; primer orden 3,32 t½ = 166 min | Valores de ejemplo; cálculo | Recalculado |
| Ejemplo 5: 0,50 mol/L a 3 h, fin a 8 h, mitades de 4 h y 2 h | Valores de ejemplo; cálculo | Recalculado |
| Ejemplo 6: tabla [A], ln[A], 1/[A] y saltos; k = 0,20 h⁻¹ | Datos generados con k = 0,20 h⁻¹ y redondeados a 2 decimales (valores de ejemplo) | Recalculado |
| Atajo de las vidas medias (igual, doble, mitad) | Cálculo desde las fórmulas de t½ | Recalculado |
| Orden cero aparente cuando manda la bomba o la entrada de hidrógeno | Razonamiento: definición de NTP527 + «lo que frena la reacción no es la química, sino lo deprisa que el gas consigue entrar» de `hidrogenacion-a-fondo` | Deducción de la lección, no leída como tal en una fuente externa |
| 0,30 % molar de Pd; 332 moléculas por átomo | Cálculo con el ejemplo de `hidrogenacion-a-fondo` (0,4 kg Pd, 200 kg, 160 g/mol) y M(Pd) del NIST | Recalculado (0,3007 %; 332,6) |
| k × 0,7 si se tapa el 30 % de la superficie | Supuesto de ejemplo declarado en el texto | — |
| Ejemplo 7: 4,605/k = 10,0; 11,2; 13,2; 16,4 h | Valores de ejemplo; cálculo | Recalculado |
| Ejemplo 8: 392/400 = 98 %; 30 µg/día; 3 µg/g | Valores de ejemplo (392 g, 400 g); Q3D para 30 % y PDE | Recalculado |
| Quiz: 2; 6,93 min; 21 min; 50 min; 0,3 mol/L; 0,28 % molar | Cálculo | Recalculado |
| Plant: Pt/C con tres usos, k 0,46/0,41/0,35 h⁻¹ y tiempos 10/11,2/13,2 h; disolvente con azufre | Valores y proceso ficticios declarados; azufre como veneno, de `cinetica-a-fondo` (ejemplo de libro) | Recalculado |

## Dejado fuera por no poder verificarlo

- Definiciones IUPAC de velocidad de reacción, orden, catálisis, TON y TOF (goldbook.iupac.org bloqueado). Por eso no se usa el término «número de recambio» (*turnover number*): se da solo la cuenta «moléculas por átomo».
- Mecanismos de desactivación más allá del envenenamiento y el coque: sinterización, lixiviación del metal, pérdida mecánica de soporte. No se encontró fuente gratuita accesible que los describa (las patentes de la USPTO y artículos de revisión aparecen en el buscador, pero sus hosts están bloqueados).
- Explicación de Langmuir-Hinshelwood (orden cero por saturación de la superficie): sin fuente leída.
- Datos cinéticos reales (k, Ea) de reacciones de API: el NIST Chemical Kinetics Database y OpenStax no son accesibles desde la sesión; todos los números son de ejemplo o del simulador.
- Cómo y dónde se regenera el Pd/C en la industria farmacéutica y porcentajes típicos de recuperación de los refinadores: sin fuente gratuita.
- Envenenamiento de sensores catalíticos de gas por siliconas y azufre: solo en fragmentos de buscador de fabricantes y patentes; no se usó.
- Ejemplos concretos de catalizadores homogéneos metálicos (complejos de Pd en acoplamientos, sales de cloroplatino): Q3D cita las sales de cloroplatinato como catalizadores de Pt(IV), pero no dice si actúan disueltas; se quitó del texto.

## Solo fragmento de buscador (no usado para cifras)

- Guía MTD española de química fina orgánica y resumen del BREF OFC en prtr-es.miteco.gob.es (host no accesible).
- Información de fabricantes (Dräger, Teledyne) sobre envenenamiento de sensores catalíticos.

## Ideas para la capa visual

1. Gráfica interactiva con tres curvas (orden 0, 1 y 2, misma concentración inicial y misma primera vida media) y un selector para ver cada una en sus tres representaciones: [A], ln [A] y 1/[A] frente al tiempo; la que sale recta indica el orden.
2. Esquema de la tangente: curva de concentración del ejemplo 6 con un segmento entre dos muestras (velocidad media) y la tangente en un punto (velocidad instantánea), al estilo de la bombona de propano de Kuphaldt.
3. Mini simulador del método de las velocidades iniciales: el alumno duplica [A] o [B] y ve cómo cambia la velocidad para deducir los órdenes.
4. Diagrama del ciclo de vida del catalizador: carga, usos sucesivos con k decreciente (tabla del ejemplo 7), veneno, catalizador gastado húmedo, envío a recuperación (R08) y balance del paladio.
