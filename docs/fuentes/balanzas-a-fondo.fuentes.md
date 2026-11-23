# Fuentes de «Balanzas y pesada a fondo» (`balanzas-a-fondo`)

Documentos descargados y leídos (copias en `scratchpad/src_balanza/dl/`):

- RD 244/2016, texto consolidado: https://www.boe.es/buscar/pdf/2016/BOE-A-2016-5530-consolidado.pdf (anexo VI, artículos 1 y 2, apéndice I completo, apéndice III, apéndice IV punto 7).
- Orden ICT/155/2020, texto consolidado (última modificación 3 de octubre de 2025): https://www.boe.es/buscar/pdf/2020/BOE-A-2020-2573-consolidado.pdf (anexo I, apartados 1 a 6 y apéndices I y II).
- RD 2032/2009, texto consolidado (última actualización 29/04/2020): https://www.boe.es/buscar/act.php?id=BOE-A-2010-927
- Orden de 28 de junio de 1974, pesas E1 a M1 (derogada): https://www.boe.es/buscar/pdf/1974/BOE-A-1974-1513-consolidado.pdf
- Orden ITC/2451/2011 (deroga la anterior desde el 1/12/2015): https://www.boe.es/buscar/pdf/2011/BOE-A-2011-14781-consolidado.pdf
- VIM 3 (JCGM 200:2012): https://jcgm.bipm.org/vim/en/2.16.html, 2.21, 2.39, 2.41, 2.44, 3.11, 4.14, 4.26, 5.1
- ICH Q7: https://database.ich.org/sites/default/files/Q7%20Guideline.pdf (5.30–5.35, 5.40, 6.14, 8.10–8.12)
- OMS TRS 957, anexo 1 (2010): https://www.who.int/docs/default-source/medicines/norms-and-standards/guidelines/quality-control/trs957-annex1-goodpractices-harmaceuticalqualitycontrol-laboratories.pdf (12.4–12.6)
- OMS TRS 1052, anexo 4 (2024): https://cdn.who.int/media/docs/default-source/medicines/norms-and-standards/guidelines/quality-control/trs1052_annex4.pdf (5.19, 5.36–5.40)
- FDA ORA Lab Manual Vol. IV, sección 1 (MAN-000054, rev. 03, 08/12/2022): https://www.fda.gov/media/73548/download (anexo A, respuestas sobre balanzas analíticas)
- FDA ORA Laboratory Manual Vol. II, ORA-LAB.5.5 «Equipment» (rev. 02, 06/06/2019): https://www.fda.gov/media/73935/download (tabla de equipos, fila «Balances», nota 3)

| Dato o afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| El newton es m·kg·s⁻² (kg·m/s²) | RD 2032/2009, tabla de unidades derivadas | Leído |
| El kilogramo se define fijando la constante de Planck, h = 6,626 070 15 × 10⁻³⁴ J·s | RD 2032/2009 consolidado, punto 2.3 | Leído. El año 2019 no aparece en el texto: en la lección se dice «texto actualizado en 2020» (fecha de la última actualización del consolidado) |
| 1 kg pesa unos 9,8 N; la gravedad cambia con latitud y altitud | Física de libro de texto, declarada en el texto | No hay valor de g en las fuentes leídas; se declara como dato de libro de texto |
| Instrumento de pesaje: determina la masa «utilizando la acción de la gravedad»; no automático: requiere intervención del operador | RD 244/2016, anexo VI, art. 2 | Leído |
| Los ensayos dependientes de la gravedad se hacen en el lugar de uso salvo que se haya tenido en cuenta la gravedad del lugar (o en la zona de gravedad) | RD 244/2016, anexo VI, apéndice IV, puntos 7.1 y 7.2 | Leído |
| Traslado del equipo entre los cambios tras los que hay que recualificar | OMS TRS 1052, 5.39 | Leído |
| Balanzas: verificar a diario en uso con calibración interna o pesa de trabajo; calibrar anualmente, y al moverla o tras reparación; calibración en laboratorio acreditado ISO/IEC 17025 y trazable | FDA ORA-LAB.5.5, tabla y nota 3 | Leído |
| Uso regulado: «determinación de la masa en la fabricación y los análisis efectuados en los laboratorios farmacéuticos» | RD 244/2016, anexo VI, art. 1.2.e | Leído |
| Inscripciones obligatorias: clase en óvalo, Max, Min, e, y d si es distinto de e | RD 244/2016, anexo VI, apéndice III, 1.1 | Leído |
| d = e sin indicador auxiliar; con indicador auxiliar e = 1 × 10^k g y d < e ≤ 10 d | RD 244/2016, apéndice I, 2.2 | Leído |
| No hay indicación por encima de Max + 9 e | RD 244/2016, apéndice I, 2.3; Orden ICT/155/2020, apéndice I, 8 | Leído |
| Cuatro clases: I especial, II fina, III media, IIII ordinaria (la norma escribe IIII, no IV) | RD 244/2016, apéndice I, 2.1; Orden ICT/155/2020, tabla 2 | Leído |
| Tabla de clases: e, Min y n mínimo/máximo | RD 244/2016, cuadro 1 | Leído y transcrito |
| Min con indicador auxiliar: cuadro 1 sustituyendo e por d | RD 244/2016, apéndice I, 3.1 | Leído |
| Ejemplo analítica Max 220 g, e = 1 mg: n = 220000, clase I; Min = 100 d = 10 mg con d = 0,1 mg | Valores de ejemplo declarados + cálculo | Recalculado con python |
| Ejemplo báscula Max 60 kg, e = 20 g: n = 3000, clase III, Min = 20 e = 400 g | Valores de ejemplo + cuadro 1 | Recalculado |
| Verificación periódica cada dos años; verificación tras reparación o modificación | Orden ICT/155/2020, anexo I, apartados 4 y 5 | Leído |
| Error máximo permitido en servicio: ±1 e, ±2 e, ±3 e por tramos, por clase | Orden ICT/155/2020, anexo I, apéndice I, tabla 1 | Leído y transcrito |
| Errores en servicio = doble de los de evaluación de la conformidad (±0,5 e, ±1 e, ±1,5 e) | RD 244/2016, apéndice I, 4.1 (cuadro 3) y 4.2 | Leído |
| Báscula e = 20 g: 5 kg = 250 e, ±20 g; 25 kg = 1250 e, ±40 g; 50 kg = 2500 e, ±60 g; 20 kg = 1000 e, ±40 g | Cálculo con la tabla 1 | Recalculado |
| El error máximo permitido no debe llamarse «tolerancia» | VIM 4.26, nota 2 | Leído |
| Principio de compensación electromagnética (bobina en imán, sensor de posición, corriente que devuelve el platillo, crece con la carga); propia de balanzas de alta exactitud | Fragmentos de buscador (Shimadzu, patentes) | Solo fragmento de buscador; se da sin cifras y sin decir «proporcional» con exactitud |
| Célula de carga con galgas que cambian su resistencia; propia de balanzas sencillas y básculas grandes | Fragmento de buscador (Shimadzu); la célula de carga de reactores ya está en «Instrumentos de medida a fondo» | Solo fragmento de buscador; sin cifras |
| Errores típicos: no nivelada, puertas abiertas, manos húmedas, muestra sin enfriar, carga estática, vibraciones y corrientes de aire, humedad ganada o perdida en el platillo | FDA ORA Lab Manual IV-01, anexo A, pregunta 6 | Leído |
| Indicador de nivel cuando proceda | RD 244/2016, apéndice I, «4. Nivelación» | Leído |
| Clase I: rango de temperatura del fabricante de al menos 5 °C (15 °C clase II, 30 °C clases III y IIII) | RD 244/2016, apéndice I, 7.2 | Leído |
| Salas de pesada con temperatura y humedad controladas | OMS TRS 1052, 5.19 | Leído |
| Objeto caliente marca de menos por corrientes de convección; mano en la cámara | Física de libro de texto, coherente con la lección existente `balanzas-y-pesada` y con la FDA (enfriar la muestra) | Explicación declarada, sin cifras |
| Mecanismo de estática, magnetismo, vibración, excentricidad (cómo actúan) | Física de libro de texto | Explicación cualitativa; las medidas de la tabla salen de la FDA, el RD y la Orden |
| Pesas E1, E2 y F1 prácticamente amagnéticas | Orden de 1974 (derogada), 8.1.2 | Leído; en la lección se dice que es la norma de 1974 |
| Aire de referencia 1,2 kg/m³ y pesas de 8000 kg/m³ | Orden de 1974 (derogada), punto 5 | Leído |
| Flotabilidad: 1,2 × (1/1000 − 1/8000) = 0,00105, unos 0,1 g por 100 g | Cálculo (principio de Arquímedes, física de libro de texto) | Recalculado: 0,00105 |
| Excentricidad: errores en cualquier posición descentrada ≤ emp | Orden ICT/155/2020, apéndice I, 7 | Leído |
| Repetibilidad: diferencia máxima entre pesadas sucesivas ≤ emp | Orden ICT/155/2020, apéndice I, 3 | Leído |
| Linealidad como idea (cargas pequeñas, medianas y grandes) | Explicación general, sin cifras; se apoya en el ejercicio de la FDA IV-01 (calibrar con pesas de 0,5 a 100 g y representar el error) | Leído el ejercicio; la definición formal no se cita |
| Ajuste confundido a menudo con «autocalibración» | VIM 2.39 nota 2 y 3.11 | Leído (la frase de la autocalibración está en 2.39, nota 2, que es la que se cita) |
| Trazabilidad: cadena ininterrumpida y documentada de calibraciones | VIM 2.41 | Leído |
| Patrones trazables; registros; instrumentos fuera de criterio no se usan; investigar desde la última calibración correcta | ICH Q7 5.31, 5.34, 5.35 | Leído |
| Clases E1, E2, F1, F2, M1; errores para 1 kg: E2 1,5 mg, F1 5 mg, M1 50 mg | Orden de 1974 (derogada desde el 1/12/2015 por la Orden ITC/2451/2011), tabla del punto 6 | Leído; en la lección se dice que está derogada y que el valor vigente lo da el certificado |
| Comprobar a diario con calibración interna, regularmente con pesas de control, recualificar cada año con pesas certificadas | OMS TRS 957, anexo 1, 12.6 | Leído; TRS 1052 la sustituye y en su texto no se encontró este ejemplo |
| Equipo defectuoso o fuera de límites: retirarlo, etiquetarlo, no usarlo hasta reparar y recualificar | OMS TRS 1052, 5.40 (y TRS 957) | Leído |
| Cuentas de la comprobación: +0,0003 g, 0,0003 %, 0,2 %, criterio ±0,5 mg cumple, ±20 g no cumple | Valores de ejemplo + cálculo | Recalculado |
| Repetibilidad del ejemplo: 20,000 / 20,020 / 20,000 kg, diferencia 20 g ≤ 40 g | Valores de ejemplo + Orden | Recalculado |
| Regla de peso mínimo usada: 3 × s (de al menos 10 pesadas) / cantidad pesada ≤ 0,001 | FDA ORA Lab Manual IV-01, anexo A, pregunta 2 (la FDA la presenta como definición de la USP de «accurately weighed»; es una versión antigua) | Leído en la FDA; en la lección se dice que la regla vigente de las farmacopeas es de pago y puede ser distinta |
| Peso mínimo = 3000 × s: 0,08 mg da 240 mg; 0,005 g da 15 g; 10 g da 30 kg; 0,06 mg da 180 mg (quiz) | Cálculo con valores de ejemplo | Recalculado |
| Error relativo al pesar 20 mg con s = 0,08 mg: 1,2 % | Cálculo | Recalculado |
| Tara: 52,3318 + 0,5012 = 52,8330 g; 2,35 + 25,00 = 27,35 kg | Cálculo | Recalculado |
| Pesada por diferencia: 18,4527 − 18,2049 = 0,2478 g; 15,8342 − 15,5867 = 0,2475 g | Cálculo | Recalculado |
| Volátil: 0,2 mg cada 10 s son 1,2 mg en un minuto | Valores de ejemplo + cálculo | Recalculado |
| Caja de guantes con nitrógeno seco para productos sensibles | Explicación general declarada como ejemplo de técnica | Sin fuente específica leída; sin cifras |
| Impresión correcta, legible, indeleble y duradera | RD 244/2016, apéndice I, «3. Impresión» | Leído |
| Sistemas informatizados GMP validados | ICH Q7 5.40 | Leído |
| Anotar de forma indeleble, justo después, identificando a quien anota; correcciones fechadas y firmadas dejando leer el original | ICH Q7 6.14 | Leído |
| Pesadas críticas con testigo o control equivalente; verificar el material contra la hoja | ICH Q7 8.12 | Leído |
| Etiqueta del recipiente fraccionado (nombre o código, número de recepción o control, peso, fecha de reanálisis) | ICH Q7 8.11 | Leído |
| Unidades admitidas: microgramo, miligramo, gramo, kilogramo y tonelada | RD 244/2016, «Requisitos metrológicos», 1 | Leído |
| Plant: BP-205 Max 150 kg, e = 50 g: n = 3000, clase III; 20 kg = 400 e, emp en servicio ±50 g | Valores de ejemplo + Orden | Recalculado |
| Códigos BX-12, R-301, BP-205, BA-07 | Ficticios | Inventados |

## Lo que quería incluir y dejé fuera

- **Regla vigente de la USP <41> (2 × s / m ≤ 0,10 %) y el mínimo de 0,41 d**: solo vista en fragmentos del buscador (usp.org y copias en scribd); usp.org no es accesible desde la sesión. Se usó en su lugar la regla que reproduce la FDA, avisando de que puede no ser la vigente. Ojo: la lección existente `balanzas-y-pesada` cita la USP 41 con «dos veces la desviación estándar ≤ 0,10 %», dato que no he podido leer en una fuente gratuita.
- **Farmacopea Europea 2.1.7**: de pago, no citada.
- **Guía EURAMET cg-18**: solo en fragmentos de buscador (nist.gov y euramet.org no accesibles). No se cita; tampoco el concepto de «masa convencional».
- **Errores máximos vigentes de las pesas (OIML R 111)**: oiml.org no accesible; solo se dan los de la norma española de 1974, avisando de que está derogada.
- **Guía del CEM de verificación de instrumentos de pesaje** (cem.es): no accesible.
- **Valor de g y su variación con la latitud en números**: sin fuente gratuita leída; se deja como idea de física de libro de texto.
- **Cifras de resolución y capacidad típicas por tipo de balanza (semimicro, microbalanza)**: sin fuente; se remite a la placa del equipo.
- **Corrección de flotabilidad oficial (fórmula de masa convencional)**: sin fuente leída; solo la idea y una cuenta de Arquímedes.
- **Cómo manipular las pesas (pinzas, guantes)**: no encontrado en fuente leída; se menciona usar pinzas solo para no calentar la cámara con la mano.
