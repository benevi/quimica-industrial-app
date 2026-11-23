# Fuentes de «Hidrogenación a fondo: hidrógeno, catalizadores y reactores a presión» (`hidrogenacion-a-fondo`)

Copias de trabajo nuevas en `tmp-hidrogenacion/dl/`; cálculos en `tmp-hidrogenacion/calc/c.py`. Varias fuentes se releyeron en copias descargadas en sesiones anteriores (rutas indicadas).

## Documentos leídos

- **NTP 383**: INSST, «Riesgo en la utilización de gases licuados a baja temperatura» (1996). Ficha HTML descargada en esta sesión: https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/11-serie-ntp-numeros-366-a-400-ano-1996/ntp-383-riesgo-en-la-utilizacion-de-gases-licuados-a-baja-temperatura ; PDF: https://www.insst.es/c/document_library/get_file?uuid=2a608e70-6a49-467d-a4b9-c22bd8a01cc3&groupId=94886 . La tabla 1 es una imagen: se leyó en la captura `src_gases/dl/t383-2.png` (página 2 del PDF oficial).
- **NTP 567**: INSST, «Protección frente a cargas electrostáticas» (2000). Copia `src_atex/dl/ntp567.txt` (releída).
- **NTP 1138**: INSST, «EPI disipativos en zonas con riesgo de explosión (I)» (2020). Copia `src_atex/dl/ntp1138.txt` (releída).
- **NTP 479**: INSST, «Prevención del riesgo en el laboratorio químico: reactividad de los productos químicos (II)» (1998). Copia `src_emer/dl/ntp479.txt` (releída, tabla 2).
- **NTP 50**: INSST, «Almacenamiento de hidrógeno» (1983), descargada en esta sesión. Leída; no trae propiedades del hidrógeno, no se usa.
- **Guía ATEX**: INSST, «Guía técnica para la evaluación y prevención de los riesgos derivados de atmósferas explosivas en el lugar de trabajo». Copias `src_atex/dl/guia.txt`, `a3.txt` (apéndice 3) y `a4.txt` (apéndice 4), releídas.
- **CLP**: Reglamento (CE) 1272/2008, DOUE L 353 (texto original de 2008 publicado por el BOE: https://www.boe.es/doue/2008/353/L00001-01355.pdf). Copia `src_atex/dl/clp.txt`: tabla 2.2.1, 2.5 (tablas 2.5.1 y 2.5.2), 2.10.1, anexo III (H220, H250, H280), anexo VI parte 1 nota U y entrada 001-001-00-9.
- **ICH Q7**: https://database.ich.org/sites/default/files/Q7%20Guideline.pdf . Copia `dl/q7.txt`: apartados 8.20, 8.30 a 8.33.
- **ICH Q3D(R2)**: copia `src_impur/q3d.txt` (descargada de database.ich.org en sesión anterior): tablas 5.1, A.2.1 y A.2.2, apartado 5.3, opción 1, monografías de paladio, platino y níquel.
- **LER**: Decisión 2014/955/UE, DOUE L 370/44 (https://www.boe.es/doue/2014/370/L00044-00086.pdf). Copia `src_emer/dl/ler.txt`, códigos 16 08.
- **Ley 7/2022** de residuos (BOE-A-2022-5809). Copia `src_emer/dl/BOE-A-2022-5809.txt`, preámbulo (jerarquía de residuos).
- **29 CFR 1910.103** (hidrógeno), descargado de www.ecfr.gov en esta sesión. Leído; solo se consideró la regla de ventilación (salida en el punto alto del local); no se cita en el texto.
- **INSST, temario «Tema 41 explosiones»** y **«Parte 2: Seguridad en el trabajo»**, descargados en esta sesión: sin datos del hidrógeno, no se usan.
- **Repo**: `nivel2-redox.ts`, `nivel2-reacciones.ts`, `nivel2-cinetica.ts`, `nivel2.ts`, `nivel1-atomos.ts`, `nivel7.ts` (ICP), `nivel7-otras.ts`, `nivel12-reactor.ts`, `nivel12-inertizacion.ts`, `nivel12-agitacion.ts`, `nivel12-filtros.ts`, `nivel12.ts`, `nivel14-gases.ts`, `nivel15-atex.ts`, para enlazar sin repetir.

## Tabla de afirmaciones

| Afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| Hidrogenación: añadir hidrógeno a una molécula con H₂ gas sobre un catalizador metálico | Química general; `nivel2-redox.ts` | Libro de texto y repo |
| Tres usos en API: doble enlace, nitro a amina, quitar grupos protectores (hidrogenólisis) | Química orgánica general | Conocimiento de libro de texto |
| CH₂=CH₂ + H₂ da CH₃–CH₃; C₆H₅NO₂ + 3 H₂ da C₆H₅NH₂ + 2 H₂O; R–O–CH₂–C₆H₅ + H₂ da R–OH + CH₃–C₆H₅ | Química orgánica general | Libro de texto; ajuste de átomos recalculado (H: 11 = 11 en el nitro) |
| El hidrógeno es el gas más ligero y su molécula la más pequeña | Química general | Libro de texto |
| Densidad del hidrógeno gas 0,084 kg/m³ y densidad relativa al aire 0,068, a 15 °C y 1 atm | NTP 383, tabla 1 | Leído en la imagen de la tabla |
| 1 / 0,068 = 14,7, «unas 15 veces» más ligero | Cálculo | Recalculado |
| Se escapa con facilidad; sube y se acumula arriba | Razonamiento a partir de la densidad relativa (NTP 383) y del tamaño de la molécula | Deducción |
| Número y posición de los detectores según densidad del gas y zonas de acumulación (falsos suelos o techos, rejillas) | Guía ATEX, apéndice 3, «Sistemas de control» | Leído en el documento |
| Hidrógeno: Flam. Gas 1, H220, nota U | CLP, anexo VI, 001-001-00-9 | Leído en el documento |
| Nota U: al comercializarse, los gases se clasifican como gases a presión según su estado | CLP, anexo VI, 1.1.3.1, nota U | Leído en el documento |
| H220 «Gas extremadamente inflamable»; H280 «Contiene gas a presión; peligro de explosión en caso de calentamiento» para gas comprimido | CLP, tabla 2.5.2 y anexo III | Leído en el documento |
| Criterio de categoría 1: inflamable en mezcla ≤ 13 % con el aire o banda de inflamabilidad ≥ 12 puntos, a 20 °C y 101,3 kPa | CLP, tabla 2.2.1 | Leído en el documento |
| Energía mínima de ignición de atmósferas de hidrógeno 0,019 mJ; «chispas insignificantes» bastan | NTP 567 | Leído en el documento |
| 0,016 mJ como valor inferior para atmósfera hidrógeno/aire | NTP 1138 | Leído en el documento |
| Muchas mezclas se inflaman con décimas de milijulio; hidrógeno, acetileno y disulfuro de carbono incluso por debajo | Guía ATEX, apéndice 5 | Leído en el documento |
| Hidrógeno como ejemplo del grupo IIC (gases más inflamables); marcado II (H2) o IIB+H2 | Guía ATEX, apéndice 4, tabla 13 y texto | Leído en el documento |
| Concentración límite de oxígeno del hidrógeno 5 %; margen de 2 a 3 % por debajo | NTP 567 («Reducción de la concentración de oxígeno»), ya usada en `redox-a-fondo` | Leído en el documento |
| Paladio sobre distintos soportes usado como catalizador de hidrogenación | ICH Q3D, monografía del paladio | Leído en el documento |
| El principal uso industrial del platino es como catalizador | ICH Q3D, monografía del platino | Leído en el documento |
| Níquel como aleación Ni-Al usado como catalizador de hidrogenación | ICH Q3D, monografía del níquel | Leído en el documento |
| Níquel Raney: níquel muy poroso obtenido de una aleación níquel-aluminio; Pd/C polvo negro con metal en granitos finos | Química general; `nivel2-cinetica.ts` (Pd/C) | Libro de texto y repo |
| Metales finamente divididos: inflamación espontánea con el oxígeno del aire | NTP 479, tabla 2 | Leído en el documento |
| Sólido pirofórico: se inflama en cinco minutos en contacto con el aire aun en pequeñas cantidades; H250 | CLP, 2.10.1 y anexo III | Leído en el documento |
| Tras la reacción el metal lleva hidrógeno en su superficie y disolvente; mojado no le llega el aire | Química general (adsorción de hidrógeno en metales); fragmento de buscador sobre níquel Raney (patentes, procedimiento de la UNAM) | Libro de texto; fragmento de buscador, no usado para cifras |
| Reglas: manejar húmedo, con nitrógeno, guardar el gastado con agua | `nivel2.ts` (`reacciones-en-api`), `nivel2-redox.ts` | Repo |
| El catalizador puede ser fuente de ignición con hidrógeno y aire | Razonamiento a partir de NTP 479 (inflamación espontánea) | Deducción propia |
| 16 kg húmedo con 50 % de agua: 8 kg secos; 5 %: 0,4 kg de Pd | Valor de ejemplo declarado; cálculo | Recalculado |
| Cargar con reactor inertizado y sin hidrógeno, húmedo, por sistema cerrado, con puesta a tierra; no barrer en seco | Repo (`nivel2-redox.ts`, `atex-a-fondo`, `inertizacion-a-fondo`) y razonamiento | Repo y deducción; sin cifras |
| Partes del autoclave: línea de H₂ con regulador y contador o pulmón, N₂, venteo, válvula de seguridad y disco, detectores | Descripción general; disco y válvula en `nivel12-reactor.ts` | Repo y descripción general |
| Venteo de inflamables a lugar libre de riesgo, preferiblemente exterior y lejos de personas, ignición e inflamables | Guía ATEX, apéndice 3, «Captación de vapores o polvos» | Leído en el documento |
| Fórmula de los ciclos con presión absoluta | `nivel12-inertizacion.ts` | Repo |
| Ciclos 1 a 5 bar a: 21 × 0,2³ = 0,17 % O₂; 100 × 0,2³ = 0,8 % N₂ o H₂; con 4 bar a, 100 × 0,25³ = 1,56 % | Valores de ejemplo declarados; cálculo | Recalculado |
| Trabajo a presión constante con regulador | Descripción general de la operación | Sin fuente leída; sin cifras |
| 200 kg / 160 g/mol = 1250 mol; ΔP = 1250 × 8,314 × 293,15 / 2 = 1523000 Pa, 15,2 bar | Valores de ejemplo declarados; ley de los gases ideales (libro de texto) | Recalculado |
| En una caída de presión la atmosférica se cancela; el hidrógeno a esas presiones no es exactamente ideal | Cálculo; física general | Razonamiento (sin cifra de desviación) |
| Tiempos límite pueden no ser adecuados cuando se trabaja hasta un objetivo (ejemplo: hidrogenación); final por muestreo y ensayo en proceso | ICH Q7, 8.20 | Leído en el documento |
| Controles en proceso por personal de producción y ajustes dentro de límites aprobados por calidad, documentado en el registro de lote | ICH Q7, 8.33 | Leído en el documento |
| Tabla de síntomas (consumo bajo, alto, presión que baja, temperatura) | Razonamiento; envenenamiento en `nivel2-cinetica.ts`; actuación del operador como en `redox-a-fondo` | Deducción y repo |
| Tres etapas de la transferencia gas-líquido; el hidrógeno se disuelve poco; la agitación limita a menudo | Ingeniería química general | Libro de texto, sin cifras |
| Agitador: dispersar gas, mantener sólidos en suspensión | `nivel12-agitacion.ts` | Repo |
| Ley de Henry: más presión parcial, más gas disuelto | Química general | Libro de texto |
| Hidrogenaciones exotérmicas | `nivel2.ts` (lección de termoquímica: «hidrogenaciones» entre las exotérmicas) | Repo |
| Q = U × A × ΔT | `nivel12-reactor.ts` | Repo |
| Al rearrancar el agitador la reacción recupera su ritmo; quitar hidrógeno o agitación frena la reacción | Razonamiento a partir de la transferencia de masa | Deducción propia |
| Filtración cerrada e inertizada; torta nunca seca; descarga húmeda a recipiente con agua | `nivel2-redox.ts`, `nivel2.ts`, `nivel12-filtros.ts` | Repo |
| Filtro de pulido para finos | `nivel12.ts` (lección «Filtros») | Repo |
| Filtrado gris o negro indica paso de finos de catalizador | Razonamiento (el soporte es carbón negro) | Deducción propia |
| LER 16 08 01 (catalizadores usados con oro, plata, renio, rodio, paladio, iridio o platino, excepto 16 08 07) y 16 08 07* (contaminados con sustancias peligrosas) | LER | Leído en el documento |
| Jerarquía: prevención, reutilización, reciclado, otra valorización, eliminación | Ley 7/2022, preámbulo | Leído en el documento |
| Recuperar el metal de un catalizador es reciclarlo | Razonamiento a partir de la jerarquía | Deducción propia; no se afirma que se haga siempre |
| Elementos añadidos a propósito (catalizadores) se consideran en la evaluación de riesgos | ICH Q3D, 5.3 y tabla 5.1 | Leído en el documento |
| Pd y Pt: clase 2B, PDE 100 / 10 / 1 µg/día, opción 1 oral 10 µg/g; Ni: clase 2A, PDE 200 / 20 / 6 µg/día, opción 1 oral 20 µg/g | ICH Q3D(R2), tablas A.2.1 y A.2.2 | Leído en el documento |
| Opción 1 supone 10 g de medicamento al día; concentración = PDE / cantidad diaria | ICH Q3D, apartado de la opción 1, ecuación 1 | Leído en el documento |
| 300 kg × 10 µg/g = 3 g de Pd; 3 / 400 = 0,75 %; el filtro debe retener más del 99 % | Valores de ejemplo declarados; cálculo | Recalculado |
| Metales por ICP | `nivel7.ts`, `nivel7-otras.ts` | Repo |
| Detectores en % del LIE | `nivel15-atex.ts` (hoja de producción: lectura en % del LIE o ppm) | Repo |
| Un detector es una ayuda, no una garantía | NTP 340 citada en `nivel14-gases.ts` | Repo |
| Si salta un detector: no accionar interruptores, alejarse y avisar | `nivel15-atex.ts`, regla 9 | Repo |
| Cortar el hidrógeno desde lugar seguro si el procedimiento lo prevé; no buscar fugas con llama | Razonamiento, condicionado al procedimiento | Deducción propia |
| Quiz: 1,56 %; 739 mol (1200000 × 1,5 / (8,314 × 293,15) = 738,5); 300 g; 50 µg/g | Cálculo | Recalculado |
| Ejemplo de planta: HZ-640, TK-641, FC-645, GD-642, TQ-12 y todos sus valores | Valores de ejemplo declarados | Ficticio; caídas 15,2 bar coherentes con el cálculo |

## Lo que se quiso incluir y se dejó fuera

- **Límites de inflamabilidad del hidrógeno en aire (en torno a 4 % y 75 %)**: solo vistos en fragmentos de buscador (artículos, fichas de fabricantes, documento de la CAA británica, ficha francesa INRS «4 % - 75 à 77 % selon les sources»). La FISQ 0001 del INSST enlaza a chemicalsafety.ilo.org, que da error de red en esta sesión (también inchem.org, cdc.gov/niosh, webbook.nist.gov, hse.gov.uk, osha.gov, csb.gov, edqm.eu y libretexts.org). La lección remite a la sección 9 de la FDS y da el criterio CLP.
- **Llama del hidrógeno casi invisible a la luz del día**: solo en fragmentos de buscador (Dräger, H2Tools, CAA). No incluido.
- **Temperatura de autoignición, límites de detonación y velocidad de llama**: sin fuente gratuita leída.
- **Calor de hidrogenación en kJ/mol** y aumento adiabático de un ejemplo: sin fuente leída; solo se dice que es exotérmica.
- **Solubilidad del hidrógeno en disolventes (cifras)** y valores de kLa: sin fuente leída.
- **Porcentaje típico de agua del Pd/C comercial y de paladio**: se usaron 50 % y 5 % como valores de ejemplo declarados, sin afirmar que sean los habituales.
- **Pirofórico del níquel Raney por el hidrógeno retenido, y su conservación bajo agua**: solo en fragmentos de buscador (patentes, procedimiento de la UNAM). El texto se apoya en NTP 479 y CLP.
- **Recuperación del metal precioso por refinadores**: práctica no verificada en fuente oficial; el texto se limita al código LER y a la jerarquía de residuos.
- **Casos reales de accidentes en hidrogenaciones** (informes del CSB u otros): csb.gov y hse.gov.uk dan error de red; no se leyó ningún informe, no se incluye ninguno.
- **Clasificación CLP actual del níquel** (posteriores adaptaciones al progreso técnico): solo se tiene el texto de 2008; no se cita.
