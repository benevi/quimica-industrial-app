# Fuentes: karl-fischer-a-fondo

Documentos descargados en `src_kf/` y leídos con `pdftotext -layout` o como HTML:

- ICH Q6A: https://database.ich.org/sites/default/files/Q6A%20Guideline.pdf (3.3.1 e del principio activo y apartados de formas farmacéuticas; contenido en agua).
- ICH Q1A(R2): https://database.ich.org/sites/default/files/Q1A%28R2%29%20Guideline.pdf (2.1.2 estrés con humedad; 2.1.7 sensibilidad a la humedad).
- ICH Q7: https://database.ich.org/sites/default/files/Q7%20Guideline.pdf (7.50 reevaluación tras exposición a humedad; 8.20 tiempos límite y secado hasta especificación).
- WHO TRS 957, anexo 1: https://cdn.who.int/media/docs/default-source/medicines/norms-and-standards/guidelines/quality-control/trs957_annex1_goodpractices_pharmaceuticalqualitycontrol_laboratories.pdf (apéndice de equipos: valorador KF semimicro y culombimétrico).
- FDA, Investigating OOS Test Results, Rev. 1, mayo 2022 (copia ya descargada en `src_muestreo/fdaoos.pdf`, copiada a `src_kf/`): alcance (incluye ensayos de laboratorio en proceso, nota 2) y «testing into compliance».
- RD 2032/2009, texto consolidado: https://www.boe.es/buscar/act.php?id=BOE-A-2010-927 (definiciones de amperio y mol, valores exactos de e y N_A).
- NTP 480 del INSST: https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/14-serie-ntp-numeros-471-a-505-ano-1999/ntp-480-la-gestion-de-los-residuos-peligrosos-en-los-laboratorios-universitarios-y-de-investigacion (grupos de clasificación de residuos).
- Archivos de la app: `src/content/fds.ts` (ficha ficticia del metanol: frases H CLP y VLA-ED INSST), `src/content/nivel1.ts` (tabla de masas atómicas), `src/content/nivel6.ts` (`karl-fischer`), `src/content/nivel12-secado.ts`, `src/content/nivel3-polimorfismo.ts`.

| Dato o afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| Ensayo de agua importante si el principio activo es higroscópico, se degrada con la humedad o es hidrato estequiométrico | ICH Q6A, 3.3.1 e) | Leído en el documento |
| A veces basta la pérdida por secado, pero se prefiere un método específico para el agua (Karl Fischer) | ICH Q6A, 3.3.1 e) y apartados de producto | Leído |
| Estudio de estrés con humedad (p. ej. 75 % HR o más) y de la sensibilidad a la humedad en almacenamiento | ICH Q1A(R2), 2.1.2 y 2.1.7 | Leído (en el texto solo la idea general, sin cifras) |
| «Mucha agua puede favorecer que el producto se descomponga o se apelmace» | Química de libro de texto; enlazado con ICH Q6A («degraded by moisture») | Idea general, sin cifras |
| Reevaluar materiales tras exposición a humedad | ICH Q7, 7.50 | Leído |
| Secado hasta especificación: el final lo marcan el muestreo y el análisis en proceso, no un tiempo límite | ICH Q7, 8.20 | Leído |
| Los laboratorios de control de calidad cuentan con valorador KF semimicro y culombimétrico | WHO TRS 957 an. 1, apéndice de equipos | Leído (no se cita en el texto, solo contexto) |
| OOS incluye ensayos de laboratorio en proceso fuera de especificación; la nota 2 excluye los que solo sirven para ajustar el proceso en tiempo real | FDA OOS 2022, introducción y nota 2 | Leído |
| «Testing into compliance» (repetir hasta cumplir y descartar sin justificación) es inaceptable bajo CGMP | FDA OOS 2022, apartado de retest | Leído |
| e = 1,602176634 × 10⁻¹⁹ C (exacto); N_A = 6,02214076 × 10²³ mol⁻¹ (exacto); amperio = culombio por segundo | RD 2032/2009, 2.4 y 2.6 | Leído en el BOE |
| F = e × N_A = 96485,33 C/mol | Cálculo | Recalculado con python: 96485,33212 |
| 1 C equivale a 93,36 µg de agua (1/F mol e⁻; 2 e⁻ por I₂; 1 I₂ por H₂O; 18,015 g/mol) | Cálculo | Recalculado: 93,356 µg. Nota: el encargo decía «unos 93,3»; con estas masas sale 93,36, que redondeado es 93,4 |
| Pasos intermedios: 1,0364 × 10⁻⁵ mol e⁻; 5,182 × 10⁻⁶ mol I₂; 9,336 × 10⁻⁵ g | Cálculo | Recalculado |
| Masas atómicas H 1,008; C 12,011; O 15,999; Na 22,990 | Tabla de `nivel1.ts` de la app (valores estándar IUPAC, no leídos en esta sesión) | Tomado de la app |
| H₂O = 18,015 g/mol; Na₂C₄H₄O₆·2H₂O = 230,08 g/mol; agua 15,66 % | Cálculo | Recalculado: 15,6598 %; coincide con el 15,66 % de la lección `karl-fischer` |
| Reacción KF: yodo con agua en presencia de SO₂, una base y un alcohol (metanol); 1 mol de I₂ por mol de H₂O; ecuación simplificada I₂ + SO₂ + H₂O + CH₃OH + 3 base | Química de libro de texto | No se encontró documento oficial gratuito en hosts accesibles que la reproduzca; solo el fragmento de buscador de la ficha ISO 760 («iodine and sulphur dioxide in a pyridine/methanol mixture») |
| Karl Fischer publicó el método en 1935; el reactivo original llevaba piridina; hoy muchos reactivos usan otras bases | Libro de texto; piridina también en fragmento de buscador (ISO 760, USP 921 no oficial) | Sin documento oficial leído |
| Culombimétrico: 2 I⁻ da I₂ + 2 e⁻ en el electrodo generador; no necesita título | Química de libro de texto (electroquímica); coincide con la lección `karl-fischer` | Sin documento oficial leído |
| Culombimétrico para trazas, volumétrico para porcentajes (cualitativo) | Libro de texto; fragmentos de buscador (NCL PCC-24, Mettler Toledo) | Fragmento de buscador; sin cifras en el texto |
| Detección bipotenciométrica con doble electrodo de platino y corriente constante: el voltaje cae al aparecer yodo libre | Química de libro de texto | Sin documento oficial leído |
| Deriva: humedad que entra en la celda por unidad de tiempo; se resta deriva × tiempo | Libro de texto | Fórmula de resta comprobada por cálculo |
| Horno de KF: calienta la muestra y un gas seco lleva el agua a la celda | Libro de texto; fragmento de buscador (procedimiento CARB con horno) | Fragmento de buscador |
| Interferencias: aldehídos y cetonas con el metanol de los reactivos normales; reactivos especiales sin metanol; oxidantes dan de menos y reductores de más | Libro de texto; la lección `karl-fischer` ya cita aldehídos, cetonas y oxidantes | Sin documento oficial leído; presentado como idea |
| Metanol: H225, H301, H311, H331, H370; VLA-ED 200 ppm con notación vía dérmica | `src/content/fds.ts` (ficha ficticia con datos CLP e INSST) | Leído en el archivo de la app |
| Grupos de residuos de laboratorio: I halogenados, II no halogenados, III disoluciones acuosas...; entrega a gestor autorizado | NTP 480 | Leído en la ficha HTML del INSST |
| LOD mide todo lo volátil; KF solo agua; LOD divide entre la masa de muestra (base húmeda) | `nivel12-secado.ts` de la app | Leído (no repetido: se amplía con la tara y la diferencia LOD − KF) |
| Cuentas del texto: LOD con tara 2,00 %; LOD − KF 1,4 % = 14000 ppm = 1,68 kg en 120 kg; base seca 116,4 kg; carga 51,28 kg con 1,28 kg de agua (71 mol); título 4,99 y 4,96 mg/mL; muestras 3,06 % y 0,20 %; culombimétrico 70 ppm y 840 ppm; deriva 140 ppm (17 % de error sin corregir) | Valores de ejemplo declarados; cálculo | Recalculado con python |
| Planta: carga 60,15 kg, 0,150 kg de agua, 8,3 mol | Valores de ejemplo declarados; cálculo | Recalculado |
| Quiz: 1,8 %; 0,9 %; 15,66 %; 5,00 mg/mL; 3,07 %; 186,7 µg; 100 ppm | Cálculo | Recalculado |

## Lo que se quiso incluir y se dejó fuera

- Texto del manual de laboratorio de la FDA (ORA Laboratory Manual) sobre Karl Fischer: no se encontró ninguna sección de KF en fda.gov (la página índice del manual dio «Page Not Found» y el buscador no devolvió nada de fda.gov).
- Método de Karl Fischer de la Farmacopea Internacional de la OMS (gratuita): sus hosts (digicollections.net, apps.who.int) no son accesibles desde esta sesión. Tampoco EPA 9000 (www.epa.gov bloqueado).
- Rangos numéricos de cada técnica (ppm, %), tiempos típicos de análisis y tamaños de muestra: sin fuente oficial leída; se dejan cualitativos.
- Ficha FISQ oficial de la piridina o del imidazol (INSST): no localizada en ficha HTML; no se nombra el imidazol ni se dan peligros de la piridina.
- Mecanismo detallado de la reacción (intermediarios, papel del sulfito de metilo) y efecto del pH: dudoso sin fuente; fuera.
- Ph. Eur. 2.5.12 y 2.5.32 y USP 921: de pago; no citados.
- Límite de deriva aceptable y criterios de idoneidad del sistema: dependen del método; fuera.
- Que un KF mayor que el LOD en un hidrato indique agua de cristalización no liberada en la estufa: retirado por no estar verificado.
