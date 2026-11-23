# Revisión cruzada, grupo «nuevas-d»

Lecciones: `operaciones-laboratorio-a-fondo` (nivel 5, order 8,5), `estadistica-laboratorio-a-fondo` (6; 9,7), `identificacion-quimica-a-fondo` (8; 2,5), `capa-fina-a-fondo` (7; 10,5), `calidad-del-laboratorio-a-fondo` (10; 11).

Qué se comprobó:
- Se recalcularon con Python todas las cuentas del texto y todas las respuestas numéricas del quiz, con su tolerancia relativa (`src/lib/num.ts`). Script: `scratchpad/revision2/calc_d.py`. Incluye Antoine y Raoult de la tabla hexano-heptano, valores críticos de t, F y Grubbs, regresión de adiciones estándar, Kjeldahl, fórmula empírica, z y z′, y cloro del diclorometano. **Todo cuadra**: no hay ningún cálculo mal ni ninguna respuesta de quiz mal.
- Remisiones («viste», «verás», enlaces) frente a `catalog.generated.json`. Script: `scratchpad/revision2/refs_d.py`.
- Se releyeron en las copias locales de las fuentes:
  - ICH Q7: 7.30-7.32, 8.20, 8.30-8.36, 14.20 y 19.80. La numeración de la lección de capa fina es correcta.
  - OMS TRS 1052, anexo 4: 3.42-3.44 y 6.71-6.74.
  - NTP 480: colores de etiqueta.
  - ORA IV-03, 8.4.7: 254/360 nm y siembra de 1 a 500 µL.
  - ORA III-04: fecha «07 Oct 2022».
  - CLP 2008: nitrato de plata.
  - RD 290/2023: módulo 1250.
- Se comparó con el resto de la app: punto de ebullición del metanol, línea del sodio de 589,59 nm, fórmula de la fuerza G y los 805 g de la cesta, FD-402 de 2,0 m², punto triple del CO₂, repetibilidad de ICH Q2(R2), grupos de la NTP 480 en `laboratorio-seguridad-a-fondo`, Volhard, paracetamol y valores teóricos, y especificación de LOD del simulador (0,5 %). No hay contradicciones de datos, salvo el color de la garrafa del hallazgo 1.

---

## Hallazgos

### 1. Mayor: color de la garrafa del grupo II, al revés que la NTP 480
- **Archivo**: `src/content/nivel10-calidadlab.ts`, línea 166 (plant).
- **Texto actual**: `Victor los vierte en la garrafa naranja del grupo II`
- **Problema**: la NTP 480 propone etiqueta **naranja para el grupo I (halogenados)** y **verde para el grupo II**. Copia leída: `lecciones/tmp-calidadlab/ntp480.txt`, líneas 440-446: «Grupo I: Etiqueta de color naranja. Grupo II: Etiqueta de color verde…». El ejemplo enseña a asociar la acetona (no halogenado) con el color de los halogenados, justo el error de segregación que la propia lección quiere evitar (ejercicio 4). Además, la NTP habla del color de la etiqueta, no de la garrafa.
- **Corrección propuesta**: `Victor los vierte en la garrafa del grupo II (no halogenados)`. Si se quiere mantener el color: `Victor los vierte en la garrafa del grupo II, la de etiqueta verde en la codificación que propone la NTP 480,`

### 2. Mayor: remisión «viste» a una lección posterior (OOS, nivel 10)
- **Archivo**: `src/content/nivel6-estadistica.ts`, línea 168.
- **Texto actual**: `como viste en [Resultados fuera de especificación (OOS) a fondo](/leccion/oos-a-fondo)`
- **Problema**: la lección está en el nivel 6 (order 9,7) y `oos-a-fondo` en el nivel 10 (order 6). El alumno aún no la ha visto.
- **Corrección propuesta**: `como verás en [Resultados fuera de especificación (OOS) a fondo](/leccion/oos-a-fondo)`

### 3. Mayor: remisión «viste» a una lección posterior (gráfico de control de OOS)
- **Archivo**: `src/content/nivel6-estadistica.ts`, línea 202.
- **Texto actual**: `En [Resultados fuera de especificación (OOS) a fondo](/leccion/oos-a-fondo) viste el gráfico de control de los resultados de los lotes. El laboratorio usa otro`
- **Problema**: el mismo que en el hallazgo 2. Nivel 10 frente a nivel 6.
- **Corrección propuesta**: `En [Resultados fuera de especificación (OOS) a fondo](/leccion/oos-a-fondo) verás el gráfico de control de los resultados de los lotes. El laboratorio usa además otro`

### 4. Mayor: remisión «viste» a una lección posterior (sistema de calidad, nivel 16)
- **Archivo**: `src/content/nivel10-calidadlab.ts`, línea 113.
- **Texto actual**: `Cómo responder a un auditor en planta lo viste en [El sistema de calidad a fondo: quién decide qué en una planta de API](/leccion/sistema-de-calidad-a-fondo).`
- **Problema**: `sistema-de-calidad-a-fondo` está en el nivel 16 (order 2) y esta lección en el 10 (order 11).
- **Corrección propuesta**: `Cómo responder a un auditor en planta lo verás en [El sistema de calidad a fondo: quién decide qué en una planta de API](/leccion/sistema-de-calidad-a-fondo).`

### 5. Mayor: «la lección anterior» no es la anterior
- **Archivo**: `src/content/nivel10-calidadlab.ts`, línea 30.
- **Texto actual**: `La diferencia entre BPL y GMP, con fines, responsables y archivo, ya la tienes en la lección anterior.`
- **Problema**: la lección que trata BPL frente a GMP es `buenas-practicas-laboratorio-a-fondo`, del nivel 4 (order 11,5). La anterior en el orden de estudio es `liberacion-de-lotes-a-fondo` (nivel 10, order 10), que no trata ese tema.
- **Corrección propuesta**: `La diferencia entre BPL y GMP, con fines, responsables y archivo, ya la tienes en [El laboratorio de control de calidad a fondo: cuaderno, trazabilidad e integridad de los datos analíticos](/leccion/buenas-practicas-laboratorio-a-fondo).`

### 6. Mayor: «de este nivel» ya no es cierto
- **Archivo**: `src/content/nivel6-identificacion.ts`, línea 21.
- **Texto actual**: `Las valoraciones y la gravimetría de este nivel contestan la segunda; esta lección, la primera.`
- **Problema**: la lección está ahora en el nivel 8 (order 2,5). Valoraciones (`valoraciones-a-fondo`, `volumetrias-especiales-a-fondo`) y gravimetría (`gravimetria-a-fondo`) están en el nivel 6, y en el nivel 8 no hay ninguna. Seguramente quedó del archivo original de nivel 6.
- **Corrección propuesta**: `Las valoraciones y la gravimetría del nivel 6 contestan la segunda; esta lección, la primera.`

### 7. Menor: remisiones neutras a lecciones posteriores que dan por sabido el contenido
- `src/content/nivel7-capafina.ts`, línea 108.
  - **Texto actual**: `otros solo tiñen una familia, como los de «Identificar sustancias por sus reacciones a fondo».`
  - **Problema**: `identificacion-quimica-a-fondo` está en el nivel 8, después de esta lección (7; 10,5). La línea 130 de la misma lección ya dice bien «lo verás en».
  - **Corrección propuesta**: `otros solo tiñen una familia, como los que verás en «Identificar sustancias por sus reacciones a fondo».`
- `src/content/nivel4-operaciones.ts`, línea 159.
  - **Texto actual**: `(por qué, en «Gravimetría a fondo: medir pesando, cenizas y residuos»)`
  - **Problema**: la lección está en el nivel 5 y la de gravimetría en el nivel 6.
  - **Corrección propuesta**: `(por qué, lo verás en «Gravimetría a fondo: medir pesando, cenizas y residuos»)`
- `src/content/nivel4-operaciones.ts`, línea 133.
  - **Texto actual**: `por ejemplo con el punto de fusión («Punto de fusión y análisis térmico a fondo»).`
  - **Problema**: esa lección está en el nivel 8.
  - **Corrección propuesta**: `por ejemplo con el punto de fusión (lo verás en «Punto de fusión y análisis térmico a fondo»).`

### 8. Menor: falta remitir a una lección anterior que ya enseñó Antoine, Raoult, el punto triple y la liofilización
- **Archivo**: `src/content/nivel4-operaciones.ts`, líneas 26, 114 y 146.
- **Textos actuales**:
  - Línea 26: `| Sublimación | Liofilizador | «La materia a fondo: estados, cambios de estado y mezclas» |`
  - Línea 114: `por qué hierve antes y la ecuación de Antoine están en «Destilación a fondo».`
- **Problema**: el alumno de nivel 5 aún no ha estudiado «Destilación a fondo» (nivel 12). En cambio, ya estudió «Diagramas de fases a fondo: cuándo algo es sólido, líquido o gas» (`diagramas-de-fases-a-fondo`, nivel 2, order 11,3). Esa lección trata, con las mismas constantes del NIST:
  - la ecuación de Antoine;
  - la ley de Raoult;
  - el punto triple del agua y del CO₂ (5,185 bar);
  - la sublimación y la liofilización.

  Las cuentas 3, 6 y 7 y el apartado «Sublimar» se apoyan en ella. «La materia a fondo» solo nombra la liofilización: «aquí solo la nombramos» (`nivel1-materia.ts:95`).
- **Corrección propuesta**:
  - Línea 26: `| Sublimación | Liofilizador | «Diagramas de fases a fondo: cuándo algo es sólido, líquido o gas» |`
  - Línea 114: `la ecuación de Antoine y por qué hierve antes los viste en «Diagramas de fases a fondo», y su uso en el reactor está en «Destilación a fondo».`

### 9. Menor: el texto de los enlaces no es el título de la lección
- **Archivo**: `src/content/nivel6-estadistica.ts`, línea 13.
- **Texto actual**: `[Metrología a fondo](/leccion/metrologia-a-fondo) y en [Cálculo y expresión de resultados a fondo](/leccion/calculo-de-resultados-a-fondo)`
- **Problema**: los títulos reales son «Metrología a fondo: error, incertidumbre, trazabilidad y calibración» y «Cálculo y expresión de resultados a fondo: cifras significativas, redondeo, base seca y comparación con la especificación». En `calidad-del-laboratorio-a-fondo` se cita con el título completo. El orden de estudio está bien: niveles 4 y 6, ambas antes.
- **Corrección propuesta**: `[Metrología a fondo: error, incertidumbre, trazabilidad y calibración](/leccion/metrologia-a-fondo) y en [Cálculo y expresión de resultados a fondo: cifras significativas, redondeo, base seca y comparación con la especificación](/leccion/calculo-de-resultados-a-fondo)`

### 10. Menor: se atribuye a la OMS (6.71) algo que el 6.71 no dice
- **Archivo**: `src/content/nivel10-calidadlab.ts`, línea 57.
- **Texto actual**: `Para él no es exigencia de esa guía, aunque puede usarlo, junto con patrones, gráficos de control y réplicas, para asegurar la validez de sus resultados (6.71).`
- **Problema**: el 6.71 de TRS 1052 (copia `who1052.txt`, líneas 2560-2578) enumera:
  - sustancias o materiales de referencia;
  - verificación de equipos;
  - controles de calidad;
  - gráficos de control y tendencias;
  - réplicas;
  - reanálisis de muestras retenidas;
  - revisión de datos;
  - incertidumbre.

  **No incluye** los ensayos de aptitud ni las intercomparaciones, que solo están en el 6.72, y precisamente exceptuando al laboratorio de control de un fabricante.
- **Corrección propuesta**: `Para él no es exigencia de esa guía; puede participar si su sistema de calidad lo decide. Lo que sí le pide es asegurar la validez de sus resultados con patrones o materiales de referencia, gráficos de control y réplicas, entre otras herramientas (6.71).`

### 11. Menor: «esa misma fuerza» sobre el Kitasato
- **Archivo**: `src/content/nivel4-operaciones.ts`, línea 57.
- **Texto actual**: `Esa misma fuerza aprieta sobre todo el vidrio del Kitasato`
- **Problema**: lo que se repite en todo el vidrio es la misma **diferencia de presión** (813 mbar), no los 919 N. La fuerza total depende de la superficie y en el matraz es mayor.
- **Corrección propuesta**: `Esa misma diferencia de presión aprieta sobre todo el vidrio del Kitasato`

### 12. Menor: «pone básico el papel» de tornasol
- **Archivo**: `src/content/nivel6-identificacion.ts`, líneas 30 y 49.
- **Textos actuales**:
  - Línea 30: `Amoníaco que pone básico un papel indicador`
  - Línea 49: `Se libera amoníaco, que pone básico el papel de tornasol`
- **Problema**: el papel no se vuelve básico. Cambia de color (el tornasol rojo se pone azul) e indica que el gas es básico. Es la señal visible que la tabla quiere enseñar.
- **Corrección propuesta**:
  - Línea 30: `Amoníaco que vuelve azul un papel indicador`
  - Línea 49: `Se libera amoníaco, que vuelve azul el papel de tornasol rojo`

### 13. Menor: redondeo desigual de los límites del gráfico de control
- **Archivo**: `src/content/nivel6-estadistica.ts`, línea 211.
- **Texto actual**: `Aviso: de 99,40 a 99,73 %. Acción: de 99,32 a 99,81 %.`
- **Problema**: con media 99,565 y s 0,080 salen 99,405, 99,725, 99,325 y 99,805. Los límites inferiores se redondean hacia abajo y los superiores hacia arriba, es decir, se ensanchan los dos lados. Eso no sigue ninguna regla de redondeo, y la lección de cálculo de resultados enseña a redondear a la mitad hacia arriba. El quiz de la misma lección (línea 337) usa 99,41 y 99,33.
- **Corrección propuesta**: `Aviso: de 99,41 a 99,73 %. Acción: de 99,33 a 99,81 %.` Las tres lecturas del ejercicio (99,76; 99,85; 99,58-99,70) siguen igual.

### 14. Menor: equivalencia inglesa de DISTR.T.INV
- **Archivo**: `src/content/nivel6-estadistica.ts`, línea 61.
- **Texto actual**: `=DISTR.T.INV(0,05;4), que da la t bilateral (en inglés, T.INV.2T)`
- **Problema**: DISTR.T.INV es la función de compatibilidad, que en inglés se llama TINV. T.INV.2T es la moderna, que en español es INV.T.2C. Dan el mismo valor, pero el nombre emparejado no es el equivalente. La tabla de fuentes ya avisa de que los nombres solo se vieron en el buscador.
- **Corrección propuesta**: `=DISTR.T.INV(0,05;4), que da la t bilateral (en inglés, TINV; la versión moderna es T.INV.2T)`

### 15. Menor: siglas sin explicar la primera vez que salen en la lección (regla del proyecto)
- `nivel6-estadistica.ts`:
  - Línea 18: `FDA` (`El manual de estadística de los laboratorios de la FDA`). Propuesta: `de la FDA (*Food and Drug Administration*, la agencia del medicamento de Estados Unidos)`.
  - Línea 13: `RSD`. Propuesta: `la RSD (desviación estándar relativa)`.
  - Línea 190: `API` (`en un API ficticio`). Propuesta: `en un principio activo (API) ficticio`.
  - Línea 202: `OMS`. Propuesta: `la Organización Mundial de la Salud (OMS)`.
- `nivel6-identificacion.ts`:
  - Línea 13: `BOE`. Propuesta: `del Boletín Oficial del Estado (BOE)`.
  - Línea 70: `ICP`. Propuesta: `el ICP (plasma de acoplamiento inductivo)`.
  - Línea 116: `EMA`. Propuesta: `la Agencia Europea de Medicamentos (EMA)`.
  - Línea 130: `NIST`. Propuesta: `el NIST (instituto de metrología de Estados Unidos)`.
  - Línea 148: `HPLC`, primera vez en el cuerpo fuera del título citado. Propuesta: `cromatografía de líquidos (HPLC)`.
  - Línea 153: `IR` (`El IR distingue`). Propuesta: `El infrarrojo distingue`.
  - Línea 160: `FDA`. Propuesta: la misma explicación que en estadística.
  - Línea 166: `CLP` y `FDS`. Propuesta: `del Reglamento CLP (clasificación, etiquetado y envasado)` y `la ficha de datos de seguridad (FDS)`.
- `nivel7-capafina.ts`:
  - Línea 25: `BOE` (`(BOE de 1977 y 1979)`). Propuesta: `(Boletín Oficial del Estado, BOE, de 1977 y 1979)`.
  - Línea 29: `BHT`, y en la línea 76 `BHA` y `NDHG`, nunca explicadas. Propuesta: `el BHT (butilhidroxitolueno)`; en la línea 76, `NDHG (ácido nordihidroguayarético) 0,10` y `BHA (butilhidroxianisol) 0,75`.
  - Línea 130: `EMA`.
  - Línea 134: `OMS`.
  - Línea 160: `ICSC` (`ficha ICSC 0279`). Propuesta: `ficha internacional de seguridad química (ICSC) 0279`.
  - Línea 160: `INSHT`, nombre antiguo del INSST, sin explicar.
  - Línea 163: `NTP 433`, sin explicar «nota técnica de prevención».
- `nivel10-calidadlab.ts`:
  - Línea 47: `API` (`para un API`). Propuesta: `para un principio activo (API)`.
- `ICH` no se explica en ninguna de las cinco lecciones: `nivel4-operaciones.ts:18`, `nivel6-estadistica.ts:49`, `nivel6-identificacion.ts:148`, `nivel7-capafina.ts:43` y `nivel10-calidadlab.ts:21`. Propuesta, la primera vez: `ICH (Consejo Internacional de Armonización)`.

---

## Notas que no son errores (comprobadas)
- **ORA III-04, «revisión de octubre de 2022»**: correcto. La portada dice «Revised: 07 Oct 2022».
- **Capa fina**: los apartados de ICH Q7 8.31 (controles menos exigentes al principio), 8.33 (personal de producción cualificado) y 8.20 coinciden con la copia de Q7.
- **Capa fina, 360 nm y siembra de 1 a 500 µL**: están así en ORA IV-03 (8.4.7 B.2 y 6.4.7 C.2).
- **Nitrato de plata, H314/H410**: correcto para la tabla 3.1 original de 2008, que es lo que dice el texto. No se comprobó si alguna adaptación (ATP) posterior ha cambiado la entrada. El texto ya remite a la FDS.
- **Módulo 1250 del RD 290/2023**: confirmado en el texto del BOE. Es «Muestreo y operaciones unitarias de laboratorio», del título de Técnico en Operaciones de Laboratorio.
- **Karl Fischer del ejemplo de calidad**: es coherente. Un patrón abierto absorbe agua, el título sale bajo, los resultados salen bajos y la z sale negativa.

## Lecciones revisadas
1. `src/content/nivel4-operaciones.ts`: operaciones-laboratorio-a-fondo
2. `src/content/nivel6-estadistica.ts`: estadistica-laboratorio-a-fondo
3. `src/content/nivel6-identificacion.ts`: identificacion-quimica-a-fondo
4. `src/content/nivel7-capafina.ts`: capa-fina-a-fondo
5. `src/content/nivel10-calidadlab.ts`: calidad-del-laboratorio-a-fondo

## Recuento por gravedad
- Críticos: 0
- Mayores: 6 (hallazgos 1 a 6: el color de la garrafa del grupo II y cinco remisiones que no cuadran con el orden de estudio)
- Menores: 9 (hallazgos 7 a 15; el 7 agrupa 3 remisiones y el 15 agrupa unas 20 siglas)
