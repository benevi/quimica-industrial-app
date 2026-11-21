# Fuentes: cromatografia-a-fondo

Documentos descargados y leídos (texto con `pdftotext -layout`, en `src_cromat/`):

- **[PAM]** FDA, *Pesticide Analytical Manual* Vol. I, sección 602 (HPLC), Transmittal 94-1 (1/94): https://www.fda.gov/media/74709/download (archivo `sec600.txt`, apartados 602 C y 602 D).
- **[ORA-IV-03]** FDA, *ORA Lab Manual Vol. IV Section 3 - Drug Chemistry Analysis* (MAN-000056, rev. 03, 7 oct 2022): https://www.fda.gov/media/73554/download (apartados 8.4.5 y 8.4.9; respuestas 6.4.9 C, págs. 54-60).
- **[ORA-LAB]** FDA, *ORA Lab Manual Vol. II - Methods, Method Verification and Validation (ORA-LAB.5.4.5)* (MAN-000037, rev. 03, 31 oct 2023): https://www.fda.gov/media/73920/download
- **[APMV]** FDA, *Analytical Procedures and Methods Validation for Drugs and Biologics*, julio 2015: https://www.fda.gov/media/87801/download
- **[DI]** FDA, *Data Integrity and Compliance With Drug CGMP. Questions and Answers*, diciembre 2018: https://www.fda.gov/media/119267/download
- **[OOS]** FDA, *Investigating Out-of-Specification (OOS) Test Results for Pharmaceutical Production*, revisión 1, mayo 2022: https://www.fda.gov/media/158416/download
- **[RETIRADAS]** FDA, *Withdrawn and Expired Guidances (Drugs)*: https://www.fda.gov/drugs/guidances-drugs/withdrawn-and-expired-guidances-drugs
- **[Q2R2]** ICH Q2(R2), versión final adoptada el 1 nov 2023: https://database.ich.org/sites/default/files/ICH_Q2%28R2%29_Guideline_2023_1130.pdf (copia ya descargada en la sesión, `q2r2.txt`).
- **[OMS957]** WHO TRS 957 (2010), anexo 1, *WHO good practices for pharmaceutical quality control laboratories*: https://cdn.who.int/media/docs/default-source/medicines/norms-and-standards/guidelines/quality-control/trs957_annex1_goodpractices_pharmaceuticalqualitycontrol_laboratories.pdf (copia ya descargada, `who957.txt`).
- **[PICS]** PIC/S PI 041-1, *Good practices for data management and integrity in regulated GMP/GDP environments*, 1 jul 2021: https://picscheme.org/docview/4234
- Cálculos: `src_cromat/calc/calc.py` (python 3), redondeados como en el texto.

## Tabla de afirmaciones

| Afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| Cromatografía: componentes repartidos entre una fase estacionaria y otra móvil que avanza en una dirección | ORA-IV-03, 8.4.5 | Leído |
| Componentes del HPLC; separación por reparto, adsorción o intercambio iónico | ORA-IV-03, 6.4.9 C | Leído |
| Áreas y alturas suelen ser proporcionales a la cantidad; se usan sobre todo las áreas; menos exactas si hay interferencia | ORA-IV-03, pág. 58 (cita USP 621 reproducida por la FDA) | Leído |
| t0 = tiempo hasta el frente de disolvente, perturbación de la línea base; t′r = tr − t0, tiempo retenido en la fase estacionaria | PAM 602 C | Leído |
| Anchura en la base W = entre los cortes de las tangentes con la línea base | PAM 602 C | Leído |
| k′ = (tR − t0)/t0 (ORA: k′ = t1/ta − 1; PAM: k = t′r/t0) | ORA-IV-03 pág. 56; PAM 602 C | Leído |
| k de 2 a 10 para el componente más retenido suele ser óptimo; mayor en separaciones difíciles | PAM 602 C | Leído |
| α = k2/k1, con el mayor en el numerador; capacidad de dar distinto reparto | PAM 602 C | Leído |
| Rs = 2(t2 − t1)/(W1 + W2) | ORA-IV-03 pág. 57; PAM 602 C | Leído |
| Resolución > 1 para minimizar el error cuantitativo | PAM 602 C | Leído |
| Resolución > 1,3 como prueba de especificidad en verificación si el método no fija otra cosa | ORA-LAB, apartado de verificación | Leído |
| N = 16 (tR/W)² y N = 5,54 (tR/Wh)² | PAM 602 C; ORA-IV-03 pág. 58 (fórmula de base) | Leído |
| Calcular y registrar los platos de cada columna nueva | PAM 602 D | Leído |
| T = W0,05/(2f) | ORA-IV-03 pág. 58 | Leído |
| As = b/a al 10 % de la altura; 1 simétrico, > 1 cola, < 1 frente | PAM 602 C | Leído |
| RRT = cociente de tiempos de retención | ORA-IV-03 pág. 57 | Leído |
| Cinco inyecciones si el límite de RSD es ≤ 2,0 %, seis si es > 2,0 %, si el método no fija otra cosa | ORA-LAB | Leído |
| Guía de 1994 publicada el 11/01/1994 y retirada el 11/25/2024 | RETIRADAS | Leído en la tabla de la página |
| La guía de 2015 remite a la guía de la FDA de validación de métodos cromatográficos y a USP 621 para la idoneidad; criterios como cola, precisión y resolución | APMV, apartado III.H | Leído |
| Definición de idoneidad: antes del análisis y repetida a lo largo de la serie, para comprobar los criterios de la validación | OMS957, glosario y 16.4 | Leído |
| La SST es parte integral del procedimiento y se establece en el desarrollo | Q2R2, introducción (cita Q14) | Leído |
| En separaciones críticas, la especificidad se puede demostrar con la resolución de los dos componentes más cercanos | Q2R2, 3.1.2.2 | Leído |
| Sistemas que no cumplen la idoneidad no deben usarse; datos del periodo sospechoso identificados y no usados; buscar causa | OOS, sección sobre el equipo | Leído |
| Usar muestras reales en inyecciones de prueba como forma de «testing into compliance» es una práctica que incumple | DI, pregunta 13 | Leído |
| El audit trail de una serie HPLC incluye usuario, fecha y hora, parámetros de integración y reprocesados con justificación | DI, 1.c | Leído |
| Registro dinámico: cambiar la línea base y reprocesar hace que los picos parezcan más pequeños o más grandes | DI, 1.d | Leído |
| Si se reprocesa: procedimiento escrito y se conserva cada resultado | DI, pregunta 14 | Leído |
| Integraciones manuales y reprocesados aprobados y controlados, solo cuando hace falta, por personas designadas; original conservado; revisión por al menos una persona | PICS, 9.7 (pág. 48) | Leído |
| Fórmula de patrón externo | Ya en la lección `hplc` de la app; coherente con el cálculo de ORA-IV-03 | Lección de la app y recalculado |
| Normalización de áreas | Ya en la lección `hplc` de la app | Lección de la app y recalculado |
| RRF: calcular si la respuesta difiere (p. ej. distinta absorbancia UV); corregir si sale de 0,8-1,2; puede no corregirse si sobreestima | Q2R2, tabla 3 | Leído |
| Patrón interno: compensa la variabilidad de inyección, sobre todo manual en GC; los inyectores automáticos reducen la necesidad | ORA-IV-03 pág. 58 | Leído |
| DL con S/N 3:1; QL con S/N de al menos 10:1 | Q2R2, 3.2.3.2 | Leído |
| Cromatograma del KR-7 (t0, tR, anchuras, áreas, pesadas, purezas); columna, impurezas, ruido | Valor de ejemplo declarado | Inventado y declarado en el texto |
| k′ = 4,0 y 3,5; α = 1,14; Rs = 1,58; N = 3600 y 3611; T = 1,15 | Cálculo | Recalculado (python) |
| Seis áreas: media 1520250, s = 2085, RSD 0,14 % (s con n − 1) | Cálculo | Recalculado |
| Riqueza 98,5 % (0,9924 × 0,9956 × 99,7) | Cálculo | Recalculado (98,51) |
| Normalización: 0,14 %, 0,06 %, 0,09 %, total 0,28 %; RRF 0,6: 0,09 % | Cálculo | Recalculado |
| RRT 5,22/6,00 = 0,87; S/N 0,45/0,05 = 9 | Cálculo | Recalculado |
| Con picos gaussianos de igual anchura (W = 4σ): fracción en el terreno del otro 2,3 % (Rs 1,0), 0,13 % (Rs 1,5), < 0,01 % (Rs 2,0) | Cálculo (función de error) | Recalculado: 2,275 %, 0,135 %, 0,0032 % |
| Quiz: 4; 1,18; 1,36; 6400; 1,2; 0,26 %; 97,6 %; 0,29 % | Cálculo | Recalculado |
| Equipos, lote, producto LX-22, R-305, temperaturas de la planta | Valor de ejemplo declarado (ficticio) | Inventado |

## Fragmentos de buscador (no usados para cifras)

- Criterios atribuidos a la guía de la FDA de 1994 (k′ > 2, Rs > 2, T ≤ 2, N > 2000): solo en fragmentos de buscador de fuentes secundarias (Handbook of Analytical Validation, artículos de revisión). No se pudieron leer en la guía.
- Copias de la guía de 1994 en farm.ucl.ac.be y gmp-compliance.org: hosts no accesibles desde la sesión. www.fda.gov/media/75643/download y la antigua www.fda.gov/cder/guidance/cmc3.pdf dan 404.

## Dejado fuera por no poder verificarlo

- Todas las cifras de la guía de la FDA de 1994 (criterios típicos de idoneidad). Se explica en el texto que fue retirada y no se citan.
- Criterios y fórmulas de la Farmacopea Europea 2.2.46 y de la USP 621 (de pago); en particular la fórmula de señal-ruido S/N = 2H/h y el criterio de Rs ≥ 1,5 de los textos (Rs 1,5 solo aparece como resultado del cálculo gaussiano).
- Nombres y descripción de los modos de integración de picos solapados (caída perpendicular, tangente): no aparecen en los documentos leídos; el texto se limita a que el programa decide dónde cortar.
- Relación teórica entre k′ y el coeficiente de reparto (K × Vs/Vm): no encontrada en una fuente leída.
- La expresión Rs = ¼ (α − 1) √N k/(1 + k) de PAM se leyó pero se quitó por longitud.
