# Fuentes de «Impurezas a fondo» (`impurezas-a-fondo`, nivel 3)

Documentos descargados y leídos en esta sesión (texto extraído con `pdftotext -layout`, copias en `src_impur/`):

- **ICH Q3A(R2)**, Impurities in New Drug Substances, versión Step 4 de 25 de octubre de 2006: https://database.ich.org/sites/default/files/Q3A%28R2%29%20Guideline.pdf (leído entero).
- **ICH M7(R2)**, Assessment and Control of DNA Reactive (Mutagenic) Impurities…, adoptada el 3 de abril de 2023: https://database.ich.org/sites/default/files/ICH_M7%28R2%29_Guideline_Step4_2023_0216_0.pdf (URL localizada probando variantes en database.ich.org tras la búsqueda; leídos apartados 1 a 9, notas 1 a 7, glosario y apéndice 2).
- **ICH Q3D(R2)**: https://database.ich.org/sites/default/files/Q3D-R2_Guideline_Step4_2022_0308.pdf (solo índice e introducción; la lección remite a «Átomos y tabla periódica a fondo»).
- **ICH Q7**: https://database.ich.org/sites/default/files/Q7%20Guideline.pdf (apartados 5.2, 8.15, 8.2, 8.5, 11.13, 11.2, 12.52, 13.1, 14.32, 14.4 y glosario).
- **EMA**, Questions and answers for marketing authorisation holders/applicants on the CHMP Opinion for the Article 5(3) of Regulation (EC) No 726/2004 referral on nitrosamine impurities in human medicinal products, EMA/409815/2020 Rev.23, 10 de octubre de 2025: https://www.ema.europa.eu/system/files/documents/opinion-on-any-scientific-matter/nitrosamines-emea-h-a53-1490-qa-art-53-rev-23-en.pdf (leídos introducción, Q&A 1–4, 10 inicio, 12, 13). La URL «oficial» de la ficha de la EMA devolvió una página HTML, no el PDF.

| Dato o afirmación | Fuente | Cómo se comprobó |
|---|---|---|
| Definición de impureza: «Any component of the new drug substance that is not the chemical entity defined as the new drug substance» | ICH Q3A(R2), glosario | Leído |
| Q7 define impureza como «Any component present in the intermediate or API that is not the desired entity» (en la versión final del body solo queda la de Q3A) | ICH Q7, glosario | Leído |
| Clasificación: orgánicas (del proceso y del producto), inorgánicas, disolventes residuales; lista de orígenes de las orgánicas (starting materials, by-products, intermediates, degradation products, reagents, ligands and catalysts); orgánicas durante fabricación o almacenamiento | ICH Q3A(R2), apartado 2 | Leído |
| Inorgánicas: reactivos, ligandos y catalizadores; metales pesados u otros metales residuales; sales inorgánicas; otros materiales (ayudas de filtración, carbón) | ICH Q3A(R2), apartado 2 | Leído |
| Q3A excluye contaminantes ajenos (asunto GMP), formas polimórficas e impurezas enantioméricas | ICH Q3A(R2), apartado 2 | Leído |
| Definición de intermedio, reactivo, ligando, impureza identificada/no identificada (tiempo de retención), especificada/no especificada | ICH Q3A(R2), glosario | Leído (algunas definiciones se recortaron del body final) |
| Definición de producto de degradación (tiempo, luz, temperatura, pH, agua, reacción con excipiente o envase) | ICH M7(R2), glosario | Leído |
| Contaminación cruzada: «Contamination of a material or product with another material or product» | ICH Q7, glosario | Leído |
| Q7 5.24 (limpiar equipo no dedicado entre materiales distintos), 5.26 (identificar contenido y estado de limpieza), 8.51 (evitar contaminación por otros materiales) | ICH Q7 | Leído |
| Tabla de umbrales (≤ 2 g/día: 0,05 %; 0,10 % o 1,0 mg/día; 0,15 % o 1,0 mg/día; > 2 g/día: 0,03 %, 0,05 %, 0,05 %); notas: dosis máxima diaria = cantidad de principio activo administrada al día; umbral de notificación más alto debe justificarse; umbrales más bajos si la impureza es inusualmente tóxica | ICH Q3A(R2), anexo 1 | Leído |
| Los umbrales se definen como límites «above (>)» | ICH Q3A(R2), glosario | Leído |
| Definición de cualificación | ICH Q3A(R2), apartado 7 y glosario | Leído |
| Resultados por debajo del 1,0 % con dos decimales, a partir de 1,0 % con uno; no en términos como «complies»; impurezas totales = suma de las que superan la notificación | ICH Q3A(R2), apartado 5 | Leído |
| Regla de comparación con umbral en mg/día: convertir a TDI, redondear al decimal del umbral y comparar (ejemplo de la guía: 0,96 mg se redondea a 1,0 mg y no supera) | ICH Q3A(R2), anexo 2, nota 2 | Leído |
| Contenido de la especificación (especificadas identificadas y no identificadas, no especificadas ≤ umbral de identificación, totales); variación importante entre lotes puede indicar proceso no bien controlado y validado | ICH Q3A(R2), apartado 6 | Leído |
| Cuenta 1: 300 × 0,12 / 100 = 0,36 mg/día | Cálculo, valores de ejemplo declarados | Recalculado con python |
| Cuenta 2: 600 mg; 0,10 % = 0,6 mg y 0,15 % = 0,9 mg < 1,0 mg; 0,08 % = 0,48 mg; 0,12 % = 0,72 mg | Cálculo, valores de ejemplo | Recalculado |
| Cuenta 3: 1200 mg; 0,10 % = 1,2 mg > 1,0; 0,08 % = 0,96 mg (redondeado 1,0, no supera); 0,12 % = 1,44 mg (1,4, supera) | Cálculo + regla del anexo 2 | Recalculado |
| Cuenta 4: 200 kg × 0,10 % = 200 g | Cálculo | Recalculado |
| Perfil de impurezas: definición | ICH Q3A(R2) y ICH Q7, glosarios | Leído |
| Q7 11.21 y 11.22 (contenido del perfil; comparación con expediente o histórico para detectar cambios por materias primas, parámetros de equipos o proceso) | ICH Q7, apartado 11.2 | Leído |
| Q7 12.52 (validación confirma perfil dentro de límites y comparable o mejor que histórico), 8.50 (arrastre al lote siguiente, ejemplo de cristales en la centrífuga, no debe alterar el perfil), 8.15 (documentar desviaciones e investigar las críticas) | ICH Q7 | Leído |
| Q7 14.32 (comparar perfil de lotes reprocesados) | ICH Q7 | Leído; recortado del body final |
| Explicación de ADN y mutación | Conocimiento de libro de texto | Declarado así en el texto |
| M7(R2) adoptada el 3 de abril de 2023; trata sustancias reactivas con el ADN que pueden dañarlo directamente a niveles bajos, causando mutaciones y potencialmente cáncer; se detectan con el ensayo de mutación inversa en bacterias | ICH M7(R2), portada e apartado 3 | Leído |
| Otros genotóxicos no mutagénicos suelen tener mecanismos con umbral; el TTC se basa en extrapolación lineal simple desde TD50, considerada muy conservadora | ICH M7(R2), apartado 3 | Leído |
| TTC 1,5 µg por persona y día, riesgo teórico < 1 entre 100 000 de por vida, para tratamientos > 10 años sin datos de carcinogenicidad (clases 2 y 3); la cifra de riesgo es un concepto muy hipotético | ICH M7(R2), apartados 3 y 7.1 | Leído |
| Tabla 2: 120 / 20 / 10 / 1,5 µg/día según duración | ICH M7(R2), apartado 7.3, tabla 2 | Leído |
| Definición de límite aceptable (concentración máxima derivada de la ingesta aceptable y la dosis diaria) | ICH M7(R2), glosario | Leído |
| Fórmula límite (ppm) = µg/día / g/día; 1 ppm = 1 µg/g | Cálculo a partir de la definición; conocimiento de libro de texto | Coherente con el caso 2 del apéndice 2 de M7 (límite TTC de 50 ppm), que no da la dosis |
| Cuenta 5: 1,5 / 0,5 = 3 ppm = 0,0003 %; 0,05 / 0,0003 = 167 | Cálculo | Recalculado (166,7 redondeado a 167) |
| Cuenta 6: 200 000 g × 3 µg/g = 0,6 g | Cálculo | Recalculado |
| Cinco clases de M7 y acciones de control | ICH M7(R2), tabla 1 | Leído |
| Definición de alerta estructural | ICH M7(R2), glosario | Leído |
| Ejemplos: nitroaromáticos (caso 3), cloruros de alquilo monofuncionales (nota 5), óxido de etileno (nota 4), cloruro de tionilo mutagénico que reacciona instantáneamente con agua (caso 4) | ICH M7(R2) | Leído |
| Cohorte de preocupación: tipo aflatoxina, N-nitroso, alquil-azoxi | ICH M7(R2), apartados 3 y 7.5 | Leído |
| Purga y factor de purga (nivel antes / nivel después); opción 3 y 4 (control aguas arriba basado en purga, con datos) | ICH M7(R2), glosario y apartados 8.1–8.2 | Leído |
| Estrategia de control incluye condiciones de operación de instalaciones y equipos y controles en proceso | ICH M7(R2), apartado 8 | Leído |
| Cuenta 7: 0,60 / 5 / 4 = 0,03 % | Cálculo | Recalculado |
| Cuenta 8: 300 / 10 / 10 = 3 ppm | Cálculo | Recalculado |
| Nitrosaminas: cohorte de preocupación; el TTC de 1,5 µg/día no puede aplicarse de forma rutinaria; ingesta aceptable específica calculada para administración diaria de por vida de la dosis máxima | EMA/409815/2020 Rev.23, Q&A 10 | Leído |
| Se forman cuando se combinan una amina y un agente nitrosante en condiciones favorables; otras vías posibles | EMA Rev.23, Q&A 4 | Leído |
| Aminas secundarias especialmente vulnerables; casos con terciarias | EMA Rev.23, Q&A 4, factor 8 | Leído |
| Nitrito en medio ácido forma ácido nitroso, que nitrosa la amina; estructura –N=O | Conocimiento de libro de texto | Declarado así en el texto; no leído en la EMA |
| Factores de riesgo: nitritos y otros nitrosantes con aminas; aminas desde disolventes (DMF, DMAc, NMP); agua desinfectada (cloración, cloraminación, ozonización); materiales recuperados/reciclados contaminados, recuperación por terceros; materiales de partida e intermedios contaminados de proveedores; contaminación cruzada por procesos sucesivos en la misma línea; arrastre por errores del operador u hojas poco detalladas, p. ej. separaciones de fases inadecuadas; oxidación por aire/oxígeno (de hidrazinas) | EMA Rev.23, Q&A 4, factores 1, 3, 4, 5, 6, 13, 14, 15 | Leído |
| Q7 14.41–14.43 (disolventes recuperados: recuperación controlada, especificaciones, documentar) | ICH Q7 | Leído |
| Q7 8.20 (cumplir límites de tiempo; desviaciones documentadas y evaluadas) y 8.21 (intermedios en espera en condiciones adecuadas) | ICH Q7 | Leído |
| Luz y agua como causas de degradación | ICH M7(R2), glosario | Leído |
| Proceso MP-20 / RA-3 / INT-21 / LX-310, KD-8, R-12, C-31, SC-40, SC-41, ME-R-17, todos los porcentajes, dosis y tiempos de la lección y del quiz | Valores de ejemplo declarados | Inventados |
| Quiz: 0,45 mg/día; 1,35 mg/día; 525 g; 5 ppm; 0,01 %; 1 ppm | Cálculo | Recalculado con python |

## Solo vistos en el buscador

- Que el documento de preguntas y respuestas de la EMA tiene una actualización posterior (el buscador mencionaba noviembre de 2026, con cambios en Q&A 4, 22 y 24). No se pudo descargar ese PDF; por eso la lección dice «la revisión leída para esta lección es la 23, de octubre de 2025».
- La URL de una copia de M7(R2) en pmda.go.jp y tga.gov.au; no se usaron.

## Dejado fuera por no poder verificarlo o por no repetir

- Cifras concretas de ingesta aceptable de nitrosaminas (NDMA, NDEA, etc.) y el método CPCA: la EMA los tiene en apéndices que no se leyeron enteros; el brief pedía no dar límites no leídos.
- Q3B (impurezas en medicamento terminado): no leída.
- Ejemplos de grupos de alerta estructural concretos (epóxidos, aminas aromáticas, ésteres de sulfonato, etc.): M7 no los enumera en el texto leído, así que solo se citan los ejemplos que aparecen en la guía.
- La relación «nitrito en medio ácido» como enunciado de la EMA: no aparece así en lo leído; se deja como química de libro de texto.
- Detalles de Q3D (clases, PDE, paladio) y disolventes residuales (Q3C), impureza enantiomérica y cristalización: ya están en otras lecciones, se remite a ellas.
