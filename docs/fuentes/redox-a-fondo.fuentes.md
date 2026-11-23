# Fuentes de «Oxidación y reducción a fondo: hidrogenaciones, oxidantes y corrosión» (`redox-a-fondo`)

Copias de trabajo en `src_redox/dl/` (texto extraído). Cálculos en `src_redox/calc.py`.

## Documentos leídos

- **NTP 479**: INSST, «Prevención del riesgo en el laboratorio químico: reactividad de los productos químicos (II)» (1998), ficha HTML con el texto íntegro. https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/14-serie-ntp-numeros-471-a-505-ano-1999/ntp-479-prevencion-del-riesgo-en-el-laboratorio-quimico-reactividad-de-los-productos-quimicos-ii-
- **NTP 237**: INSST, «Reacciones químicas peligrosas con el agua» (PDF; copia descargada en una sesión anterior, releída en esta: apartados Cinc e Hidruros).
- **NTP 567**: INSST, «Protección frente a cargas electrostáticas» (2000). https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/16-serie-ntp-numeros-541-a-575-ano-2001/ntp-567-proteccion-frente-a-cargas-electrostaticas. (copia descargada en sesión anterior, releída en esta)
- **NTP 1138**: INSST, «EPI disipativos en zonas con riesgo de explosión (I)» (2020). https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/33-serie-ntp-numeros-1136-a-1151-ano-2020/ntp-1.138-equipos-de-proteccion-individual-disipativos-en-zonas-con-riesgo-de-explosion-i-criterios-generales-de-seleccion (releída)
- **NTP 630**: INSST, «Riesgo de incendio y explosión en atmósferas sobreoxigenadas» (2003), ficha HTML. https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/18-serie-ntp-numeros-611-a-645-ano-2003/ntp-630-riesgo-de-incendio-y-explosion-en-atmosferas-sobreoxigenadas.
- **NTP 1229**: INSST, «Reacciones químicas peligrosas con el agua» (2026), ficha HTML (las tablas son imágenes y no se leyeron). https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/39-serie-ntp-numeros-1229-y-ss-ano-2026/ntp-1229-reacciones-quimicas-peligrosas-con-el-agua-2026
- **NTP 50**: INSST, «Almacenamiento de hidrógeno» (1983), ficha HTML. Leída; no se usó en el texto (trata de distancias de almacenamiento, sin datos de inflamabilidad).
- **CLP**: Reglamento (CE) 1272/2008, texto original en el DOUE L 353 publicado por el BOE. https://www.boe.es/doue/2008/353/L00001-01355.pdf (texto extraído; apartados 2.2, 2.10.1, 2.12.1, 2.13.1, anexo II 1.1.5 y 1.2.2, anexo III, anexo V 1.3, anexo VI tabla 3.1).
- **OMS**: WHO TRS 1033 (2021), anexo 3, «Good manufacturing practices: water for pharmaceutical use». https://cdn.who.int/media/docs/default-source/medicines/norms-and-standards/guidelines/inspections/trs1033-annex3-gmp-water-for-pharmaceuticals-use.pdf (copia descargada en la sesión de «Agua farmacéutica a fondo»; pasajes releídos en esta).
- **FDA-HPW**: FDA, «Guide to inspections of high purity water systems» (7/93). https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/inspection-guides/high-purity-water-system-793 (copia anterior; pasaje releído).
- **ICH Q7**: https://database.ich.org/sites/default/files/Q7%20Guideline.pdf (copia anterior; apartado 5.11 releído).
- **RD 2032/2009**: https://www.boe.es/buscar/act.php?id=BOE-A-2010-927 (copia anterior; nota sobre la presión normal releída).
- **Repo**: `src/content/fds.ts` (ficha `hcl-35`), `src/content/nivel2.ts` (`oxidacion-reduccion`, `reacciones-en-api`), `src/content/nivel1-atomos.ts`, `src/content/nivel11.ts` (materiales), lecciones «a fondo» de la carpeta de trabajo (`mol-a-fondo`, `instrumentos-a-fondo`, `agua-a-fondo`, `reactor-a-fondo`, `inertizacion-a-fondo`) para enlazar sin repetir.

## Tabla de afirmaciones

| Afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| Oxidación = pérdida de electrones; reducción = ganancia; siempre juntas; oxidante se reduce, reductor se oxida | Química general | Conocimiento de libro de texto |
| Idea antigua: ganar oxígeno / perder hidrógeno (oxidación) y al revés (reducción); el oxígeno atrae electrones y el hidrógeno los cede | Química general | Conocimiento de libro de texto |
| Definición de número de oxidación y reglas (elemento 0, ion monoatómico su carga, H +1 salvo hidruros metálicos −1, O −2 salvo peróxidos −1, Na y K +1, suma 0 o carga del ion) | Química general | Conocimiento de libro de texto |
| H₂O: O −2; H₂O₂: O −1; NaCl: Cl −1; H₂SO₄: S +6; KMnO₄: Mn +7; CH₃OH: C −2; CH₂O: C 0; HCOOH: C +2; CO₂: C +4; HNO₃: N +5 (quiz) | Cálculo | Recalculado en `calc.py` |
| H₂O₂ oxida (O baja a −2) y al descomponerse da O₂ (O sube a 0); Mn +7 es su máximo | Química general | Conocimiento de libro de texto |
| La combustión es una oxidación rápida y el carbono acaba como CO₂ | Química general | Conocimiento de libro de texto |
| Ajuste por electrones: 2 Fe + 3 Cl₂ da 2 FeCl₃; mcm(3, 2) = 6; masas cuadran (324,39 = 324,39) | Cálculo | Recalculado |
| Zn + 2 HCl da ZnCl₂ + H₂; Fe + 2 HCl da FeCl₂ + H₂ | Química general; NTP 237 da la reacción análoga del cinc con agua | Libro de texto; recuento de átomos y electrones comprobado |
| Ácido clorhídrico: con metales desprende hidrógeno; H290; almacenar en plástico (PE, PP), acero ebonitado o vidrio; no usar metales | `src/content/fds.ts`, ficha `hcl-35`, secciones 2, 7 y 10 | Leído en el repo (fichas ya verificadas) |
| H290 «Puede ser corrosivo para los metales» | CLP, anexo III | Leído en el documento |
| Masas atómicas Fe 55,845 (redondeado 55,85), Zn 65,38 (redondeado 65,4), H 1,008 (redondeado 1, H₂ = 2 g/mol en el texto) | Valores estándar de la IUPAC | No leídos en esta sesión |
| Volumen molar 22,4 L a 0 °C y 1 atm (8,314 × 273,15 / 101325 = 22,41 L); 24,05 L a 20 °C | Cálculo con R de libro de texto y atmósfera normal del RD 2032/2009; ya en «El mol a fondo» | Recalculado |
| 1 kg Fe: 17,9 mol; 401 L (0,40 m³) a 0 °C; 431 L a 20 °C; 36 g de H₂ | Cálculo, valor de ejemplo declarado | Recalculado |
| RD 2032/2009: datos termodinámicos referidos hoy a 1 bar; antes de 1982, atmósfera normal 101325 Pa | RD 2032/2009, nota (a) | Leído en el documento |
| Hidrogenación catalítica: H₂ gas sobre catalizador metálico, a menudo Pd/C; el catalizador acelera sin consumirse | Química general; lecciones `oxidacion-reduccion` y `velocidad-y-catalisis` de la app | Libro de texto y repo |
| Secuencia de planta (carga, inertizar, presurizar con agitación, vigilar consumo, despresurizar y purgar con N₂, filtrar bajo N₂ y húmedo) | Lección `oxidacion-reduccion` (plant: «Despresurizar, purgar 3 veces con N₂, filtrar el catalizador manteniéndolo húmedo»; reglas: inertización antes y después, Pd/C húmedo y bajo nitrógeno); orden general por razonamiento | Repo; la secuencia como lista es elaboración propia, sin datos numéricos |
| Concentración límite de oxígeno del hidrógeno: 5 %; margen de 2 a 3 % por debajo | NTP 567, «Reducción de la concentración de oxígeno» | Leído en el documento |
| Hidrógeno: Flam. Gas 1, H220 (y Press. Gas) | CLP, anexo VI, índice 001-001-00-9 | Leído en el documento |
| H220 «Gas extremadamente inflamable» | CLP, anexo III | Leído en el documento |
| Categoría 1 de gases inflamables: inflamables en mezcla ≤ 13 % en volumen con el aire o banda de inflamabilidad ≥ 12 puntos porcentuales, a 20 °C y 101,3 kPa | CLP, anexo I, tabla 2.2.1 | Leído en el documento |
| Energía mínima de ignición de atmósferas de hidrógeno 0,019 mJ; «chispas insignificantes» bastan para inflamar mezclas de gases con aire | NTP 567 | Leído en el documento |
| 0,016 mJ como valor inferior para atmósfera hidrógeno/aire | NTP 1138 | Leído en el documento |
| Metales finamente divididos e hidruros: inflamación espontánea con el aire | NTP 479, «Compuestos que reaccionan violentamente con el aire o el oxígeno» | Leído en el documento |
| Sólido pirofórico: puede inflamarse en cinco minutos en contacto con el aire, aun en pequeñas cantidades; H250 «Se inflama espontáneamente en contacto con el aire» | CLP, anexo I 2.10.1 y anexo III | Leído en el documento |
| Pd/C gastado como metal muy dividido empapado en disolvente: puede arder seco al aire; se maneja húmedo y bajo N₂ y se guarda con agua | Lección `oxidacion-reduccion` (Pd/C seco pirofórico; «se guarda en un recipiente con agua») + NTP 479 (metales finamente divididos) | Repo + leído; la unión de las dos ideas es razonamiento |
| Reducción de nitro a amina: R–NO₂ + 3 H₂ da R–NH₂ + 2 H₂O | Química general | Conocimiento de libro de texto; ajuste comprobado (N 1, O 2, H 6 a cada lado) |
| 500 kg / 250 g/mol = 2000 mol; × 3 = 6000 mol H₂; 6000 × 22,4 = 134400 L = 134 m³N (con 22,41 L sale 134,5); 12 kg de H₂ (12,1 con 2,016) | Cálculo, valores de ejemplo declarados | Recalculado |
| Metro cúbico normal en esta lección: 0 °C y 1 atm | Convención declarada en el texto; la hoja manda | Declarado |
| Hidruros: reacción con agua exotérmica y libera hidrógeno capaz de inflamarse; LiAlH₄ + 4 H₂O da Al(OH)₃ + LiOH + 4 H₂ | NTP 237, «Hidruros» | Leído en el documento |
| LiAlH₄ y NaH: Water-react. 1, H260; texto de H260 | CLP, anexo VI (001-002-00-4, 001-003-00-X) y anexo III | Leído en el documento |
| NaBH₄ desprende H₂ con agua o ácidos | Lección `oxidacion-reduccion` | Repo (no se halló su entrada en el anexo VI de 2008; no se le atribuye frase H) |
| H₂O₂: Ox. Liq. 1, H271 para C ≥ 70 %; Ox. Liq. 2, H272 para 50 % ≤ C < 70 % | CLP, anexo VI, 008-003-00-9 (límites de concentración específicos) | Leído en el documento |
| KMnO₄: Ox. Sol. 2, H272 | CLP, anexo VI, 025-002-00-9 | Leído en el documento |
| Hipoclorito de sodio: Skin Corr. 1B, H314; EUH031 para C ≥ 5 % de cloro activo; EUH031 «En contacto con ácidos libera gases tóxicos» | CLP, anexo VI, 017-011-00-1, y anexo II 1.2.2 | Leído en el documento |
| Oxígeno: Ox. Gas 1, H270 | CLP, anexo VI, 008-001-00-8 | Leído en el documento |
| Textos de H270, H271, H272 | CLP, anexo III | Leído en el documento |
| Pictograma GHS03: llama sobre un círculo, para gases, líquidos y sólidos comburentes | CLP, anexo V, 1.3 | Leído en el documento |
| Definición de líquido comburente (sin ser necesariamente combustible, por lo general al desprender oxígeno, provoca o favorece la combustión de otros materiales) | CLP, anexo I 2.13.1 | Leído en el documento |
| Triángulo del fuego; oxígeno 21 %; por encima del 25 % la mayoría de los materiales pueden arder, incluso con carácter explosivo; aceites y grasas especialmente peligrosos | NTP 630 | Leído en el documento |
| Incompatibilidades: oxidantes con materias inflamables, carburos, nitruros, hidruros, sulfuros, alquilmetales, aluminio, magnesio y circonio en polvo; reductores con nitratos, halogenatos, óxidos, peróxidos, flúor; H₂O₂ con alcohol etílico y metílico, ácido acético glacial, glicerina, acetato de etilo...; KMnO₄ con la mayoría de los metales, alcoholes, acetona, materiales orgánicos; hipocloritos con ácidos y carbón activado; líquidos inflamables con H₂O₂, ácido nítrico, halógenos; ácido nítrico concentrado con líquidos inflamables (quiz) | NTP 479, tablas 3 y 4 | Leído en el documento (la tabla de la lección es una selección) |
| HCl con hipocloritos desprende cloro | NTP 479, tabla 5 | Leído en el documento |
| Almacenamiento separado de incompatibles | NTP 479 («se ha de realizar separadamente»); detalle en la lección de almacenamiento de la app | Leído |
| No recoger un derrame de oxidante con serrín ni trapos | Razonamiento a partir de NTP 479 (oxidantes incompatibles con materias inflamables; cloratos con materiales orgánicos combustibles) | Deducción propia, sin cita literal |
| Éteres entre las sustancias fácilmente peroxidables; peróxidos que pueden explotar; precaución al abrir recipientes largo tiempo cerrados; ensayo con KI | NTP 479, «Formación de peróxidos» y «Reacciones de descomposición» | Leído en el documento |
| EUH019 «Puede formar peróxidos explosivos»; la llevan el éter dietílico y el tetrahidrofurano en el anexo VI de 2008 | CLP, anexo II 1.1.5; anexo VI 603-022-00-4 y 603-025-00-0 | Leído en el documento (texto original de 2008; no se comprobaron adaptaciones posteriores) |
| Desinfección del agua potable con ozono o hipoclorito; sanitización química con ozono, peróxido de hidrógeno o ácido peracético | OMS TRS 1033, 4.2.9 y 4.3.7 | Leído en el documento |
| El cloro se quita antes de la ósmosis con un reductor | Lección «Agua farmacéutica a fondo» | Repo (enlace, sin repetir) |
| Corrosión del hierro como oxidación con agua y oxígeno; la herrumbre es porosa y no protege | Química general | Conocimiento de libro de texto |
| El inoxidable lleva cromo y forma una capa pasiva de óxido de cromo que se regenera con oxígeno | Química y ciencia de materiales general | Conocimiento de libro de texto (sin cifras de cromo) |
| Cloruros rompen localmente la capa pasiva y causan picaduras; ácidos fuertes calientes atacan | Química y ciencia de materiales general | Conocimiento de libro de texto |
| Tubos de inoxidable de un intercambiador, vaciados, con humedad y aire: agujeros (*pinholes*) por corrosión | FDA-HPW, apartado de intercambiadores | Leído en el documento |
| Materiales: 316L, vitrificado, Hastelloy | Lección «Tuberías, válvulas y conexiones» (`nivel11.ts`); cuidados del vidrio en «El reactor a fondo» | Repo |
| Superficies en contacto con materias, intermedios o API no deben alterar su calidad | ICH Q7, 5.11 | Leído en el documento |
| Pasivado de sistemas de inoxidable tras instalación y modificaciones importantes, con procedimiento que fije disolución, concentración, temperatura y tiempo; registros de pasivado | OMS TRS 1033, apartado de diseño del sistema de agua purificada y documentación | Leído en el documento |
| Pila: tensión entre electrodos; electrodo de pH genera una tensión que depende de la acidez; conductividad por iones | Química general; «Instrumentos de medida a fondo» | Libro de texto y repo |
| Quiz: 130,8 g Zn / 65,4 = 2 mol; 44,8 L | Cálculo | Recalculado |
| Quiz: 2000 g / 55,85 = 35,8 mol; 802 L = 0,8 m³ | Cálculo | Recalculado |
| Quiz: 300 kg / 150 = 2000 mol; 44,8 m³N; unos 4 kg (4,03) | Cálculo | Recalculado |
| Quiz: 4 kmol × 3 = 12 kmol | Cálculo | Recalculado |
| Equipos, productos, códigos (HR-512, FC-514, NX-31), 500 kg, 250 g/mol, 98 m³N, 0,8 % y límite 2 % de O₂ | Valores de ejemplo declarados | Declarado |

## Solo fragmento de buscador (no usado para cifras)

- Límites de inflamabilidad del hidrógeno en aire «4-75 %» (OCDE, fichas de Messer y Linde con 4-77 %, ICSC 0001 en la web de la OIT). La ficha FISQ/ICSC 0001 está en chemicalsafety.ilo.org, que no resuelve desde esta sesión. No se dan cifras en la lección.
- Fundacentro (en portugués): los éteres con hidrógeno en alfa, como el THF, forman hidroperóxidos y los peróxidos se concentran al destilar. No se usó.
- Apuntes de la Universidad de Barcelona sobre hidrogenación en laboratorio (no añadir catalizador seco sobre disolvente inflamable). No se usó.

## Querido incluir y dejado fuera

- Cifras del intervalo de inflamabilidad del hidrógeno y su temperatura de autoignición (no leídas en fuente oficial).
- Un NTP específico de hidrogenaciones o de catalizadores pirofóricos: no se encontró ninguno en el INSST.
- Datos de presión y temperatura típicas de hidrogenación, carga de catalizador en % y caudal de hidrógeno (sin fuente).
- Frase H del borohidruro de sodio (no localizada en el anexo VI de 2008).
- Porcentaje de cromo del acero inoxidable, química concreta del pasivado (ácido nítrico o cítrico) y el «rouge» (sin fuente leída).
- Detalle del tratamiento de aguas residuales con oxidantes (sin fuente leída).
- Potenciales de electrodo y la ecuación de Nernst (fuera del nivel del lector y sin fuente leída).
