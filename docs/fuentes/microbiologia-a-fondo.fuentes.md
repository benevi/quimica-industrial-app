# Fuentes: microbiologia-a-fondo

Documentos descargados y leídos (texto en `src_micro/` del scratchpad):

- **Q7**: ICH Q7, «Good Manufacturing Practice Guide for Active Pharmaceutical Ingredients». https://database.ich.org/sites/default/files/Q7%20Guideline.pdf (apartados 3.2, 4.10, 4.3, 4.7, 5.21–5.24, 8.20, 8.50, 8.52, 11.13, 11.23, 12.75, glosario).
- **Q6A**: ICH Q6A, apartado 3.2.1 g) «Microbial limits» y 2.x sobre ensayos periódicos. https://database.ich.org/sites/default/files/Q6A%20Guideline.pdf (copia descargada en esta sesión de trabajo, `dl/q6a.txt`).
- **Q5A**: ICH Q5A(R2) (2023), tabla A-1 de virus usados en estudios de eliminación vírica. https://database.ich.org/sites/default/files/ICH_Q5A%28R2%29_Guideline_2023_1101.pdf
- **AN1**: EudraLex vol. 4, anexo 1 (2022), apartados 1 (alcance), 4.10, 4.33–4.35 y glosario. https://health.ec.europa.eu/system/files/2022-08/20220825_gmp-an1_en_0.pdf
- **AN15**: EudraLex vol. 4, anexo 15 (2015), 10.7 y 10.8. https://health.ec.europa.eu/system/files/2016-11/2015-10_annex15_0.pdf. La descarga en esta sesión devolvió una página de comprobación; se leyó la copia del mismo PDF descargada antes en otra lección (`lecciones/src_mant/dl/annex15.txt`, con referencia Ares(2015)1380025 de 30/03/2015).
- **FDA-NSD**: FDA, «Microbiological Quality Considerations in Non-sterile Drug Manufacturing», borrador de guía, septiembre de 2021. https://www.fda.gov/media/152527/download (leída entera; es borrador, no definitiva).
- **FDA-ASEP**: FDA, «Sterile Drug Products Produced by Aseptic Processing», 2004. https://www.fda.gov/media/71026/download (apartados de filtración y de desinfectantes).
- **ITG40**: FDA, Inspection Technical Guide 40, «Bacterial endotoxins/pyrogens» (1985). https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/inspection-technical-guides/bacterial-endotoxinspyrogens
- **EMA-QA**: EMA, «Questions and answers on production of water for injections by non-distillation methods – reverse osmosis and biofilms and control strategies», EMA/INS/GMP/443117/2017. https://www.ema.europa.eu/system/files/documents/other/wc500232814_en.pdf
- **NTP429**: INSST, NTP 429 «Desinfectantes: características y usos más corrientes» (1997), texto íntegro en la ficha HTML. https://www.insst.es/documentacion/colecciones-tecnicas/ntp-notas-tecnicas-de-prevencion/12-serie-ntp-numeros-401-a-435-ano-1997/ntp-429-desinfectantes-caracteristicas-y-usos-mas-corrientes
- **BASEBIO**: INSST, base de datos de agentes biológicos, páginas generales de bacterias, virus y hongos. https://www.insst.es/agentes-biologicos-basebio/bacterias , https://www.insst.es/agentes-biologicos-basebio/virus , https://www.insst.es/agentes-biologicos-basebio/hongos
- **APP**: lecciones de la app ya existentes: «Microorganismos y contaminación» y «Ensayos microbiológicos: recuento y endotoxinas» (src/content/nivel9.ts), «Agua farmacéutica a fondo» (src/content/nivel14-agua.ts), «Limpieza de equipos y validación de limpieza» (src/content/nivel12-separacion.ts).

## Tabla de afirmaciones

| Dato o afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| Los microorganismos en medicamentos pueden infectar al paciente, dejar toxinas o estropear el producto | FDA-NSD, IV.A | Leído en el documento |
| Bacteria: organismo unicelular de pocos micrómetros, con membrana y pared que le da forma | BASEBIO (bacterias) | Leído en la página |
| Tinción de Gram: grampositivas y gramnegativas; las gramnegativas llevan endotoxinas en la pared | BASEBIO (bacterias); AN1 glosario | Leído |
| Hongos eucariotas; bacterias procariotas; levaduras unicelulares, mohos pluricelulares filamentosos | BASEBIO (hongos y bacterias) | Leído |
| Efecto principal de los hongos en personas: alergias por inhalación, ingestión o contacto con esporas | BASEBIO (hongos) | Leído |
| Ejemplos cotidianos (levadura del pan, moho del pan viejo) | Ninguna; ejemplo cotidiano | Razonamiento, sin cifras |
| *Bacillus* forma esporas; el isopropanol al 70 % no es eficaz contra esporas de *Bacillus*; muchos desinfectantes no lo son | FDA-ASEP (apartado de desinfectantes) | Leído |
| Etanol poco eficaz frente a ciertos virus y la mayoría de esporas; el más usado para la piel; inflamable | NTP429 | Leído |
| Isopropanol usado al 70 % en agua, eficacia equivalente al etanol; inflamable | NTP429 | Leído |
| Definición de agente esporicida | AN1, glosario | Leído |
| Forma vegetativa frente a espora | AN1 glosario (esporicida mata también las formas vegetativas); FDA-NSD («vegetative cells») | Leído; la explicación es didáctica |
| Virus: acelular, proteínas y un ácido nucleico, más pequeño que las bacterias, parásito obligado | BASEBIO (virus) | Leído |
| Un virus no se multiplica en un reactor o torta química | Deducido de «parásito obligado» | Razonamiento |
| Virus en API de células o biotecnología: ICH Q5A y apartado 18 de Q7 | Q5A; Q7 apartado 18 (18.x menciona contaminación vírica) | Leído |
| Q7 3.24: apartar a personas con enfermedad infecciosa o heridas abiertas | Q7 3.24 | Leído |
| 1 mm = 1000 µm; 1 µm = 1000 nm | Definición SI | Cálculo |
| *Brevundimonas diminuta*: 0,3 µm de diámetro medio; filtros de 0,2 µm | FDA-ASEP, filtración | Leído |
| 0,22 y 0,2 µm se consideran equivalentes | FDA-ASEP (nota 18); AN1 usa 0,22 µm | Leído |
| Baculovirus 250–300 nm; parvovirus 18–24 nm | Q5A(R2) tabla A-1 | Leído |
| Partículas de 0,5 y 5 µm en salas | AN1 tablas de clasificación | Leído (y lección corta del nivel 9) |
| 1000 / 0,3 = 3333; 0,3 / 0,02 = 15 | Cálculo | Recalculado con python |
| Un filtro de 0,2 µm no retiene virus pequeños | Q5A (los virus pequeños requieren filtros de virus específicos); comparación de tamaños | Leído y razonamiento |
| Actividad de agua: distinta del contenido de agua; con aw baja los microbios no proliferan pero pueden persistir | FDA-NSD, IV.A y nota 29 | Leído |
| Necesidad de alimento (materia orgánica como alimento) | APP (agua a fondo); FDA-NSD (restos y agua residual favorecen crecimiento) | Leído en la lección y en FDA-NSD; la lista de nutrientes es didáctica |
| Incubación a 30–35 °C y 20–25 °C | APP (recuento-microbiano-endotoxinas, según Ph. Eur. 2.6.12) | Tomado de la lección de la app; Ph. Eur. es de pago y no se leyó |
| «Temperaturas templadas, como las de una nave» | Razonamiento a partir de lo anterior | Razonamiento |
| Agua circulando a más de 75 °C, ambiente menos favorable; a unos 60 °C control marginal | ITG40 | Leído |
| Tiempo de duplicación 30 min y 2 h | Valor de ejemplo declarado | Declarado en el texto |
| 10 × 60 / 30 = 20; 2^20 = 1048576; 2^10 = 1024; 100 × 2^6 = 6400 | Cálculo | Recalculado con python |
| Tiempos de espera largos de disoluciones acuosas o suspensiones permiten crecimiento; hacen falta límites de tiempo | FDA-NSD, IV.A | Leído |
| Biofilm: definición, protege del roce y de desinfectantes, recrece si no se quita entero | EMA-QA, parte I pregunta 2; APP (agua a fondo) | Leído |
| Suelta trozos a ratos (muestras variables) | APP (agua a fondo, basada en FDA high purity water guide) | Tomado de la lección de la app |
| Endotoxina = lipopolisacárido de la membrana externa de gramnegativas; se libera al morir y lisarse la célula; *E. coli*, *Pseudomonas*, *Klebsiella* | ITG40 | Leído |
| Reacciones de fiebre a muerte en pacientes que reciben inyecciones | AN1, glosario | Leído |
| Pirógenos | ITG40 («microbial pyrogen»); AN1 («pyrogenic product») | Leído |
| Los filtros esterilizantes no retienen endotoxinas; reducir el recuento no reduce las endotoxinas | ITG40 | Leído |
| Despirogenación: algunos textos recomiendan 250 °C durante 45 minutos | ITG40; definición en AN1 glosario | Leído |
| Sanitización a 70–80 °C «muy lejos» de 250 °C | Comparación | Razonamiento |
| API obtenidos por fermentación pueden tener endotoxinas altas | ITG40 | Leído (no usado en el texto final salvo de forma implícita) |
| Fuentes de contaminación (personas, agua, aire, materias primas, equipos, esperas húmedas) | APP (lección corta); Q7 3.2 y 4.3; FDA-NSD IV.B (componentes, agua, limpieza, ambiente, esperas) | Leído |
| Caso 2016: API con *Aspergillus*, causa en conductos del secado con humedad atrapada, retirada de varios lotes durante un año | FDA-NSD, apéndice, caso 7 | Leído |
| Caso 2001: 45 lotes retirados por hongos; aire de secado del excipiente con esporas estacionales | FDA-NSD, apéndice, caso 8 | Leído |
| Filtración, alta temperatura, pH extremo o disolventes orgánicos pueden reducir la carga microbiana | FDA-NSD, IV.B | Leído |
| Líquidos con mucho alcohol o disolventes no acuosos: menos riesgo de proliferación | FDA-NSD, IV.A | Leído |
| Q7 8.52: precauciones al manipular el API tras la purificación | Q7 8.52 | Leído |
| No hay cifra de disolvente o temperatura que anule el riesgo | Ninguna de las fuentes leídas la da | Comprobado por ausencia en las fuentes leídas |
| Tabla de apartados de Q7 (3.2, 4.10, 4.3/4.34, 5.21, 8.20, 8.50, 11.13, 11.23, 12.75) | Q7 | Leído párrafo a párrafo |
| Q6A: tipo de ensayo microbiológico según naturaleza, fabricación y uso; endotoxinas para inyectables, esterilidad para API estériles | Q6A 3.2.1 g) | Leído |
| Anexo 1: alcance, productos estériles (incluida sustancia activa estéril) | AN1, apartado 1 | Leído |
| Definiciones de limpieza y desinfección | AN1 glosario | Leído |
| Limpiar antes de desinfectar; más de un desinfectante con distinto modo de acción; esporicida periódico | AN1 4.33 | Leído |
| Analogía del plato con grasa | Didáctica | Razonamiento |
| Q7 usa «sanitization»: limpiar y, cuando proceda, sanitizar | Q7 5.10, 5.21, 5.22 | Leído |
| Hipoclorito: activo frente a todos los microorganismos, oxidante, corrosivo para metales, 1 g/L de cloro libre como desinfectante general, diluciones inestables y preparación diaria recomendada | NTP429 | Leído |
| 250 mL de lejía de 40 g/L + 750 mL de agua = 10 g/L | NTP429; 40 × 250 / 1000 = 10 | Leído y recalculado |
| Peróxido de hidrógeno y ácido peracético: sustitutos del glutaraldehído; corrosivos y comburentes (peróxido por encima del 20 %; peracético a concentraciones altas) | NTP429 | Leído |
| Amonios cuaternarios: buenos frente a bacterias y hongos, escasos frente a virus y esporas; *Pseudomonas* puede crecer en algunos | NTP429 | Leído |
| Toallitas de alcohol contaminadas con *Bacillus cereus*, 2011 | FDA-NSD, apéndice, caso 6 | Leído |
| Anexo 1 4.35: diluciones en envases limpios y solo el plazo definido | AN1 4.35 | Leído |
| Q7 5.21: tiempo máximo entre fin del proceso y limpieza; protección del equipo limpio | Q7 5.21 | Leído |
| Esperas largas antes de limpiar y secado insuficiente promueven contaminación | FDA-NSD, IV.B | Leído |
| El agua residual en equipos guardados favorece el crecimiento; secar cuanto antes | FDA-NSD, IV.C | Leído |
| Anexo 15 10.8: definir tiempos sucio y limpio | AN15 10.8 | Leído (copia anterior del PDF oficial) |
| Los restos se secan y se pegan si se supera el tiempo sucio | APP (limpieza de equipos) | Tomado de la lección de la app |
| Alcohol inflamable y reglas ATEX | NTP429 (inflamable); lección de ATEX de la app | Leído |
| Plant: lote ZT-0418, R-510, C-520, S-530, tiempos de 8 h y 48 h | Valores y códigos de ejemplo, ficticios | Declarado en el texto |
| Pregunta de horas: lunes 22:00 a miércoles 20:00 = 46 h | Cálculo | Recalculado con python |

## Lo que quedó fuera por no poder verificarlo

- Tamaño numérico de levaduras, mohos y esporas de hongos en micrómetros: ninguna fuente gratuita leída lo da (las fichas del INSST no dan cifras).
- Tamaño numérico de una endotoxina: no leído; el texto solo dice que pasa por un filtro esterilizante (ITG40).
- Tiempos de duplicación reales de bacterias concretas (por ejemplo, *E. coli*): no leídos en una fuente accesible; se usan valores de ejemplo declarados.
- Valores de actividad de agua mínimos para el crecimiento de bacterias, levaduras y mohos (están en USP <1112>, de pago): no se incluyen.
- Rangos de temperatura de crecimiento por tipo de microbio y efecto de la refrigeración: no leídos; solo se usan las temperaturas de incubación de la lección de la app y los datos de agua caliente de ITG40.
- Que las personas sean «la principal» fuente de contaminación: lo dice la lección corta de la app, pero no se encontró en las fuentes leídas con esa formulación; la lección a fondo no lo afirma como tal.
- Concentraciones de etanol más eficaces (por ejemplo, 60–80 %) y tiempos de contacto: las cifras de la OMS sobre higiene de manos no se pudieron descargar (cdn.who.int dio error en el documento buscado); solo se usa el 70 % de isopropanol (NTP429 y FDA-ASEP).
- Límites de recuento y endotoxinas de la Farmacopea Europea: de pago; se remite a la lección corta.
- Valores límite de exposición profesional que da la NTP 429 (1997): están desfasados respecto a los valores límite vigentes del INSST y no se usan.
- Cómo germina una espora y cuánto tiempo sobrevive: no verificado; se dejó solo «forma de resistencia».
- WHO TRS 961 anexo 2 (microbiología en laboratorios farmacéuticos): la URL probada dio «BlobNotFound»; no se usó.
