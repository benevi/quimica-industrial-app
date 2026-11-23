# Fuentes de «Material volumétrico a fondo» (`volumetrico-a-fondo`)

Copias locales de lo descargado en `scratchpad/lecciones/src_volum/dl/`. Cuentas en `src_volum/calc.py` y `src_volum/calc2.py`, con `iapws` instalado en `src_volum/venv`.

Documentos leídos de verdad (descargados y leídos en texto):

- **FDA, ORA Lab Manual Vol. IV Section 1, Laboratory Orientation (MAN-000054, rev. 03, 08/12/2022)**: https://www.fda.gov/media/73548/download. Apartado 7.3 «Volumetric Glassware» y sus respuestas (p. 27-28).
- **FDA, ORA Laboratory Manual Vol. II, ORA-LAB.5.5 Equipment (rev. 02, 06/06/2019)**: https://www.fda.gov/media/73935/download. Categorías de equipos y tabla de frecuencias.
- **OMS, TRS 1052 (2024), Annex 4, WHO good practices for pharmaceutical quality control laboratories**: https://cdn.who.int/media/docs/default-source/medicines/norms-and-standards/guidelines/quality-control/trs1052_annex4.pdf (enlazado desde https://www.who.int/publications/m/item/who-good-practices-for-pharmaceutical-quality-control-laboratories). Apartados 6.76-6.78 y apéndices 2 y 3 (tablas 2-4 y ejemplo de cálculo).
- **INSST, NTP 433** «Prevención del riesgo en el laboratorio. Instalaciones, material de laboratorio y equipos» (ficha HTML en www.insst.es).
- **INSST, NTP 464** «Prevención del riesgo en el laboratorio químico: operaciones básicas» (ficha HTML en www.insst.es).
- **VIM 3 (JCGM 200)**, entradas en línea: https://jcgm.bipm.org/vim/en/2.13.html, 2.14, 2.15, 2.16, 2.17, 2.18, 2.19, 2.20, 2.21, 2.39, 2.44.
- **ICH Q7**: https://database.ich.org/sites/default/files/Q7%20Guideline.pdf, apartados 5.3 (5.30-5.34) y 11.15.
- **IAPWS-IF97**, mediante el paquete de Python `iapws` (clase `IAPWS97`, P = 0,101325 MPa).

## Tabla de afirmaciones

| Dato o afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| Muchos matraces aforados están calibrados para contener (TC) y muchas pipetas aforadas para verter (TD) un volumen dado tras un tiempo de vaciado dado | FDA MAN-000054, respuesta 2 de «Volumetric Glassware» | Leído |
| In = TC, Ex = TD | Lección existente `material-volumetrico` de la app; coherente con FDA | Leído en la app |
| El matraz para contener vierte algo menos de lo que marca porque queda película en la pared | Consecuencia de la definición TC/TD (FDA) | Razonamiento declarado |
| Valores 0,02 mL (pipeta A 10 mL), 0,08 mL (matraz A 100 mL), 0,04 mL (Mohr 10 mL), 0,02 mL (micropipeta 1 mL), 0,5 µL (10 µL), 0,5 mL (probeta 100 mL), 10 mL (vaso 250 mL), «dependen del fabricante», «some possible answers» | FDA MAN-000054, respuesta 5 | Leído. En la lección se usan como tolerancias de ejemplo, no como tolerancias oficiales |
| Las tolerancias oficiales de clase A están en la USP «Volumetric Apparatus» y normas | FDA MAN-000054, respuesta 5 (cita USP); ISO de pago | Leído (que existen); no se reproducen |
| Clase B, tolerancias más amplias | Lección existente `material-volumetrico` («aproximadamente el doble»); UKAS «Class B es el doble» solo visto en el buscador | No se da cifra en la lección |
| Incertidumbres objetivo OMS: matraz 100 mL 0,12 %, 10 mL 0,50 %; pipeta aforada 10 mL 0,25 %, 1 mL 0,98 %; graduada 1 mL 0,74 % | OMS TRS 1052 anexo 4, apéndice 2, tablas 2, 3 y 4 | Leído |
| Esas incertidumbres superan la desviación máxima de clase A porque incluyen la variabilidad del analista | OMS TRS 1052 anexo 4, apéndice 2 | Leído |
| Caso OMS en que la graduada de 1 mL da menor incertidumbre que la aforada de 1 mL | OMS TRS 1052 anexo 4, apéndice 3 | Leído (usado solo en la tabla de cifras OMS) |
| Aumentar volúmenes del material reduce la incertidumbre | OMS TRS 1052 anexo 4, apéndice 2 | Leído |
| Esquema 50,0 mg a 50,0 mL, 1,0 mL a 10,0 mL | OMS TRS 1052 anexo 4, apéndice 3, ejemplo 2 | Leído; concentraciones recalculadas |
| Menisco cóncavo (agua) se lee abajo; convexo (mercurio) arriba; forma por atracción líquido-vidrio frente a cohesión | Fragmentos de buscador (USGS, Universidad de Florida, páginas educativas) | Solo fragmento de buscador |
| Ojos a la altura de la marca; parte baja del menisco | Lección existente `material-volumetrico` | Leído en la app |
| Desde arriba el menisco parece más alto y te quedas corto; desde abajo te pasas | Razonamiento geométrico (la línea de visión cruza la pared delantera por encima o por debajo del menisco) | Razonamiento declarado |
| Raya delantera y trasera vistas como una sola línea | Práctica general | Sin fuente leída; explicación declarada |
| Material calibrado a 20 °C | Lección existente `material-volumetrico`; NIST (temperatura de referencia 20 °C) solo en el buscador; FDA pide convertir a 20 °C y 25 °C | Leído en la app y en FDA (ejercicio); NIST solo fragmento |
| Densidades del agua 15, 20, 21, 22, 23, 25, 40 °C: 0,999101; 0,998206; 0,997995; 0,997773; 0,997541; 0,997048; 0,992224 g/mL | IAPWS-IF97 con `iapws`, P = 0,101325 MPa | Recalculado; 20 °C coincide con 998,21 kg/m³ de «Densidad a fondo» |
| 100,00 mL a 20 °C: 99,8206 g; a 25 °C 100,116 mL; +0,116 mL, 0,12 % | Cálculo | Recalculado |
| Enrasado a 25 °C, a 20 °C queda 99,884 mL; a 40 °C, 99,401 mL (0,6 %) | Cálculo | Recalculado |
| El vidrio también se dilata, mucho menos que el líquido | Idea general | Sin cifra; declarado que no se calcula |
| Pasos del matraz aforado (disolver, transferir con lavados, enfriar, enrasar, no sacar líquido, homogeneizar) | Práctica general de laboratorio | Sin fuente leída paso a paso; coherente con «enrasar en frío» de la lección existente |
| Prohibido pipetear con la boca; aspiradores de caucho o cremallera que ajusten bien; guantes | INSST NTP 433, apartado «Pipetas» | Leído |
| Dispensador automático recomendable para algunos reactivos | INSST NTP 433, «Pipetas» | Leído |
| Variables de una pipeta de 10 mL: tiempo de vaciado, gotas por suciedad, temperatura, enrase del menisco, ángulo de vaciado, última gota, enjuague con la disolución, calibración | FDA MAN-000054, respuesta 6 | Leído |
| No soplar la gota salvo indicación | Lección existente `material-volumetrico`; coherente con TD de FDA | Leído en la app |
| Tiempo de espera: el que indique la pipeta o el procedimiento | FDA (tiempo de vaciado); no se da cifra | Leído; ISO 648 de pago, no citada |
| Bureta: quitar embudo, purgar burbujas, enrasar en cero, lectura final menos inicial | Práctica general | Sin fuente leída; explicación declarada |
| Probeta: tolerancia de ejemplo 0,5 mL en 100 mL, seis veces 0,08 | FDA MAN-000054 y cálculo (0,5 / 0,08 = 6,25) | Leído y recalculado |
| Probetas como material para medidas aproximadas | FDA ORA-LAB.5.5, definición de «General service equipment» | Leído (frase retirada del texto final por longitud; la idea se mantiene) |
| 1 µL = 0,001 mL | Definición de prefijos | Cálculo |
| Micropipetas: prehumectar, primer y segundo tope, inmersión vertical y poca, velocidad constante, temperatura | Fragmentos de buscador (CDC, Mettler-Toledo, Thermo Fisher, Lab Manager) | Solo fragmento de buscador; no se dan cifras (ni 1 cm ni grados) |
| Pipetas mecánicas, micropipetas, buretas mecánicas y dosificadores: exactitud y precisión pesando agua, al recibir y como mínimo cada 6 meses | FDA ORA-LAB.5.5, tabla de equipos | Leído |
| Calibración pesando el agua; la masa más exacta que el volumen; tabla de densidades | FDA MAN-000054, respuesta 1 | Leído |
| Agua recién hervida porque los gases disueltos cambian la densidad | FDA MAN-000054, respuesta 3 | Leído |
| Definición de calibración | VIM 2.39 | Leído |
| Cuenta 1: 9,9752 g / 0,997995 = 9,9952 mL; error −0,0048 mL | Masa: valor de ejemplo declarado; cálculo | Recalculado |
| Cuenta 2: 162,1518 − 62,4183 = 99,7335 g; / 0,997773 = 99,9561 mL; −0,0439 mL | Masas: valores de ejemplo; cálculo | Recalculado |
| Cuenta 3: 0,9921 / 0,997541 = 0,9945 mL = 994,5 µL; −5,5 µL, −0,55 % | Masa: valor de ejemplo; cálculo | Recalculado |
| Empuje del aire: aire 1,2 kg/m³ y pesas 8000 kg/m³, corrección ≈ +0,1 % (0,105 %) | Valores de ejemplo declarados; fórmula V = m / (ρw − ρa) · (1 − ρa / ρb) | Recalculado; presentado solo como idea |
| Exactitud, precisión (expresada con desviación típica), error sistemático (constante o previsible, corregible), error aleatorio (impredecible) | VIM 2.13, 2.15 (nota 1), 2.17 (nota 2), 2.19 | Leído |
| Cinco masas 9,9781; 9,9841; 9,9751; 9,9811; 9,9771 g; volúmenes 9,996; 10,002; 9,993; 9,999; 9,995 mL; media 9,997; s = 0,0035 mL; 0,035 % | Valores de ejemplo; cálculo con `statistics.stdev` | Recalculado (s = 0,003536) |
| Desviación típica con n − 1 | Definición estadística de la desviación típica muestral | Cálculo; la GUM no fue accesible (jcgm.bipm.org/gum da 404) |
| Agua que escurre sin formar gotas: limpio; el material se ensucia con orgánicos del aire; limpieza con detergente, ácidos o bases, disolvente o frotado | FDA MAN-000054, respuesta 4 | Leído |
| Mezcla crómica descartar salvo sin alternativa; dicromato potásico cancerígeno; isopropanol en vez de metanol para aclarar y secar | INSST NTP 464, «Limpieza del material de vidrio» | Leído |
| Estufa puede dilatar el vidrio aforado de forma permanente (NIST GLP 13); estudio de Burfield sin cambio a temperaturas moderadas | Fragmentos de buscador | Solo fragmento de buscador; presentado así y sin cifras |
| Material para verter enjuagado no necesita estar seco; material para contener pesado vacío, sí | Fragmento de buscador (NIST) y coherente con la técnica de enjuague de la FDA | Fragmento de buscador |
| Examinar las piezas y desechar las que tengan el más mínimo defecto o un golpe fuerte aunque no se vea grieta | INSST NTP 433, «Material de vidrio» | Leído |
| C1 · V1 = C2 · V2 | Lección `disoluciones-a-fondo` de la app | Leído en la app |
| Cuentas de dilución: 1,00; 0,100; 0,00500 mg/mL; 1 en 10, 1 en 20, 1 en 200 | Cálculo | Recalculado |
| Lote: especificación 98,0-102,0 %, real 98,4 %, matraz con 100,6 mL, resultado 97,81 % | Valores de ejemplo; cálculo | Recalculado |
| Todo resultado OOS se investiga y documenta | ICH Q7 11.15 | Leído |
| La revisión del OOS comprueba que se usó el material de vidrio correcto; un error identificado invalida el resultado y se repite; solo se rechaza el resultado si hay error identificado | OMS TRS 1052 anexo 4, 6.76-6.78 | Leído |
| Calibración de equipos críticos según procedimiento, patrones trazables, instrumentos fuera de calibración no se usan | ICH Q7 5.30-5.34 | Leído (contexto; no citado literalmente en el body) |
| Quiz: 24,9530 / 0,997773 = 25,009 mL; 500 × 0,998206 / 0,997048 = 500,58 mL; 0,1987 / 0,998206 = 199,1 µL (−0,47 %); s de 10,010, 10,004, 10,007 = 0,003 mL; 0,500 × 2,0 / 50 = 0,02 mg/mL; 99,1 × 100 / 100,5 = 98,61 % | Cálculo | Recalculado con python |
| Equipos y códigos: SD-305, BA-03, MV-100-12, lote TZ-40, producto TZ | Ficticios | Inventados |

## Lo que quise incluir y dejé fuera

- **Tolerancias oficiales de ISO 648, ISO 1042, ISO 385, ISO 4787 e ISO 8655 y de la USP <31>**: de pago o no leídas. Solo se usan los valores de ejemplo del manual de la FDA.
- **Tiempos de espera de las pipetas** (por ejemplo «Ex + 5 s»): están en ISO 648, de pago; no se dan cifras.
- **Relación exacta clase B = doble de clase A**: solo vista en un fragmento de UKAS (host bloqueado); no se usa como cifra.
- **Coeficiente de dilatación del vidrio borosilicatado y corrección del volumen del vidrio con la temperatura**: sin fuente leída.
- **Corrección de empuje del aire con densidades reales del aire y de las pesas** (factor Z de las guías de calibración): las guías de NIST, EURAMET y CEM no son accesibles desde esta sesión (www.cem.es, www.euramet.org, www.nist.gov, nvlpubs.nist.gov, www.osti.gov, reach.cdc.gov y www.ukas.com dan error de red o 403). Solo idea con valores de ejemplo.
- **Cifras de técnica de micropipeta** (profundidad de inmersión de 1 cm, ángulos de 20° a 45°, número de prehumectaciones): solo en fragmentos de fabricantes.
- **Temperatura máxima de secado en estufa**: fuentes contradictorias y solo en el buscador.
- **GUM (JCGM 100) para la desviación típica experimental**: la dirección de jcgm.bipm.org da 404; la fórmula se presenta como definición y cálculo.
- **Uso de la tarjeta blanca y negra para leer el menisco**: sin fuente leída; retirado.
