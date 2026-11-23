import type { Lesson } from "./types";

export const envasadoAFondo: Lesson = {
  slug: "envasado-a-fondo",
  level: 17,
  order: 6,
  title: "Envasado y etiquetado a fondo: el último paso antes de que el lote salga",
  titleEn: "Packaging and labelling in depth: the last step before the batch leaves",
  minutes: 38,
  summary:
    "Por qué el envasado es la fase más delicada del lote, qué envases y cierres se usan y qué pide ICH Q7 de ellos, la sala y el despeje de línea, el control de las etiquetas y su contenido mínimo (también el de peligro según CLP), la operación paso a paso con un lote de 12 bidones, las cuentas de envases, pesos, rendimiento y conciliación, los errores típicos y lo que se firma en la hoja.",
  body: `
En «Envasado y etiquetado del API» viste la idea general. Aquí vas a ver la operación entera, como en un turno, con lo que dice cada apartado de la norma y sus cuentas.

### Por qué el envasado es el paso más delicado
Es como servir un plato que ha costado horas en un recipiente sucio o con el nombre de otro cliente. Con un principio activo (*active pharmaceutical ingredient*, API) pasa igual, por dos razones:

1. **El producto ya está purificado y al descubierto.** Ya no queda ningún paso que pueda limpiar lo que le caiga encima. La guía ICH Q7, la norma internacional de buenas prácticas de fabricación (*Good Manufacturing Practice*, GMP) para principios activos, lo dice en su apartado de alcance (1.3): el rigor de las GMP debe aumentar a medida que el proceso avanza hacia los pasos finales, la purificación y el envasado. Y en el apartado 8.52 pide tomar precauciones para evitar la contaminación cuando se manipula el principio activo después de purificarlo.
2. **Un error de etiqueta sale de la planta.** Si un bidón lleva la etiqueta de otro lote, el cliente fabricará medicamentos con una trazabilidad falsa.

El apartado 8.51 pide además que los productos no se contaminen con otros materiales. En la sala de envasado: un solo producto, un solo lote y nada que sobre.

### Los envases de un principio activo
ICH Q7 define el **material de envasado** (*packaging material*) como cualquier material destinado a proteger el producto durante el almacenamiento y el transporte. Los más habituales para un polvo son estos:

| Envase | Cómo es | Qué miras antes de usarlo |
|---|---|---|
| Bidón de fibra (*fibre drum*) | Cilindro de cartón prensado con tapa y aro de cierre | Sin golpes ni humedad; tapa y aro completos |
| Bidón de plástico | De polietileno, con tapa y aro | Limpio, sin grietas; tapa que cierra bien |
| Bidón metálico | De acero, con tapa y aro de cierre | Sin abolladuras ni óxido; junta de la tapa en su sitio |
| Saco | De papel o plástico, con bolsa interior | Sin roturas; costuras sanas |
| Big bag | Saca grande de tejido | Su tipo electrostático, que se ve en «Manejo de sólidos a fondo» |

Normalmente el producto va dentro de **bolsas de polietileno** (*polyethylene liners*). En el ejemplo de esta lección usamos doble bolsa dentro de un bidón de fibra; ICH Q7 cita «bolsas dentro de bidones de fibra» al hablar de las muestras de estabilidad (11.52). La bolsa interior es el **envase primario** (*primary packaging*), el que toca el producto. El bidón es la protección exterior.

**Lo que pide ICH Q7 a los envases (apartado 9.2):**

- **9.20.** Los envases deben proteger bien el producto frente al deterioro o la contaminación que pueda ocurrir durante el transporte y el almacenamiento recomendado.
- **9.21.** Deben estar limpios y, si la naturaleza del producto lo exige, higienizados. Y no deben ser **reactivos, aditivos ni absorbentes** (*reactive, additive, or absorptive*) hasta el punto de alterar la calidad del producto más allá de los límites especificados. Dicho en palabras de planta: el envase no debe reaccionar con el producto, no debe soltarle sustancias y no debe chupárselas.
- **9.22.** Si un envase se reutiliza, se limpia según un procedimiento escrito y se quitan o tachan todas las etiquetas anteriores.

Además, los materiales de envase y las etiquetas deben cumplir sus especificaciones y se rechazan los que no cumplen (9.11). Por eso te llegan del almacén ya aprobados, con su lote de material, y no puedes cambiar la bolsa por otra «parecida».

**Cierres, bridas y precintos.** La bolsa interior se cierra con brida (*cable tie*) o por termosellado (*heat sealing*), que suelda el plástico con calor; cuál y cómo, lo dice tu procedimiento. Después se cierra el bidón con su tapa y su aro, y se pone un **precinto de seguridad** (*tamper-evident seal*). ICH Q7 (9.46) pide que los envases que salen fuera del control del fabricante estén cerrados de forma que, si el precinto está roto o falta, quien los recibe sepa que el contenido puede haberse alterado.

**Si el producto es peligroso.** El reglamento europeo de clasificación, etiquetado y envasado (CLP, Reglamento 1272/2008) pide en su artículo 35 que el envase de una sustancia peligrosa esté hecho para que no se pierda el contenido, que sus materiales y cierres no se dañen con el contenido ni formen con él combinaciones peligrosas, que sea fuerte y sólido para la manipulación normal y que, si se cierra varias veces, no pierda contenido.

### La sala de envasado
ICH Q7 (4.14) pide zonas definidas, u otros sistemas de control, para varias actividades, entre ellas las operaciones de envasado y etiquetado. Y en el apartado 9.41 añade que el etiquetado debe estar pensado para evitar confusiones, con separación física o de espacio respecto a las operaciones con otros productos.

- **Limpieza previa**, según procedimiento y con el estado de limpieza identificado.
- **Extracción.** Una boca de aspiración junto a la boca de llenado. La ficha guía de control 206 del Instituto Nacional de Seguridad y Salud en el Trabajo (INSST), «Llenado de sacos», recomienda un cerramiento con extracción alrededor de la zona de llenado con una velocidad de captación de al menos 1 m/s, lo bastante grande para cerrar el saco dentro. Pide también una forma sencilla de comprobar que la extracción funciona (un manómetro o un indicador) y limpiar con aspirador o en húmedo, nunca con cepillo ni aire comprimido.
- **Tu protección** frente al polvo, según la categoría del producto: está en «Exposición a productos químicos a fondo».
- **Puesta a tierra** de bidón y tolva, calzado conductor y nada de sacudir bolsas: está en «Manejo de sólidos a fondo».
- **Identificación del puesto.** El capítulo 5 de la guía europea de GMP (EudraLex, volumen 4, parte I, 5.51) pide que el nombre y el número de lote del producto estén a la vista en cada puesto o línea de envasado.

### El despeje de línea
El **despeje de línea** (*line clearance*) es la comprobación de que en la sala no queda nada que no haga falta para el lote que vas a envasar. Es la defensa principal contra las confusiones.

ICH Q7 (9.44) lo pide así: las instalaciones de envasado y etiquetado se inspeccionan **inmediatamente antes de usarlas**, para asegurar que se ha retirado todo el material que no hace falta para la siguiente operación. Esa inspección se documenta en la hoja del lote, en el diario de la instalación o en otro sistema documental.

La parte I de EudraLex es para medicamentos; para principios activos se aplica su parte II, que nació de ICH Q7. Pero su capítulo 5 detalla la misma idea:

- **5.50.** Antes de empezar, la zona, las líneas, las impresoras y el resto del equipo deben estar limpios y libres de productos, materiales o documentos usados antes y que no hagan falta ahora. El despeje se hace con una **lista de comprobación** (*checklist*).
- **5.49.** Productos distintos no se envasan cerca unos de otros, salvo que haya separación física.
- **5.62.** Al terminar, el material de envase con el número de lote que no se ha usado se destruye y se registra la destrucción.

En la práctica, el despeje se hace dos veces:

**Al empezar.** Recorres la sala con la lista: producto y muestras del lote anterior, envases, bolsas, bridas, precintos, etiquetas (también las caídas al suelo), documentos y restos de polvo. Lo que no es de este lote sale. Firmas tú y verifica una segunda persona, que lo mira por sí misma.

**Al terminar.** Retiras todo lo de tu lote: bidones a cuarentena, etiquetas sobrantes a destruir y contar, documentos con la hoja.

### Las etiquetas
**Dónde se guardan.** ICH Q7 (9.30) limita el acceso al almacén de etiquetas al personal autorizado.

**Cuántas se emiten.** Se imprimen o se entregan solo las previstas para el lote. La impresora se controla para que lo impreso coincida con lo que indica la hoja del lote (9.34).

**Comprobación antes de usarlas.** Las etiquetas emitidas para un lote se examinan con cuidado y se comparan con la instrucción maestra; el resultado de la comprobación se documenta (9.35). Una etiqueta representativa se adjunta a la hoja del lote (9.36). ICH Q7 (6.31) pide además conservar las etiquetas maestras aprobadas para compararlas con las emitidas. Compruebas, una por una:

| Qué miras | Contra qué |
|---|---|
| Nombre o código del producto | La hoja de producción |
| Número de lote | La hoja de producción |
| Peso neto | El peso real de ese envase |
| Número de envase (por ejemplo, 3 de 12) | El orden de llenado |
| Fecha de reanálisis o de caducidad | La hoja y el certificado |
| Condiciones de almacenamiento | La etiqueta maestra |

**Contenido mínimo según ICH Q7.** El apartado 9.42 pide que la etiqueta lleve el nombre o el código del producto, el número de lote y las condiciones de almacenamiento cuando sean críticas para la calidad. Si el producto va a salir del control del fabricante (9.43), también el nombre y la dirección del fabricante, la cantidad, las condiciones especiales de transporte y los requisitos legales especiales. Si tiene fecha de caducidad, esta va en la etiqueta y en el certificado de análisis; si tiene fecha de reanálisis, en la etiqueta, en el certificado o en los dos.

**Lo que sobra.** Toda etiqueta sobrante que lleve el número de lote u otra impresión del lote se destruye (9.32). Las devueltas se guardan de forma que no se confundan y queden bien identificadas. Las obsoletas también se destruyen (9.33). Y hay que conciliar las etiquetas emitidas, usadas y devueltas; cualquier diferencia se investiga y la investigación la aprueba calidad (9.31).

**La etiqueta de peligro (CLP).** El reglamento CLP no se aplica a los medicamentos terminados destinados al usuario final (artículo 1.5). Un principio activo a granel que se envía a otra empresa es una sustancia: si está clasificado como peligroso, su envase lleva también los elementos de la etiqueta de peligro. El artículo 17 los enumera:

1. Nombre, dirección y teléfono del proveedor.
2. Cantidad nominal, cuando el envase va al público en general.
3. Identificadores del producto (artículo 18).
4. Pictogramas de peligro (artículo 19), palabra de advertencia (artículo 20), indicaciones de peligro o frases H (artículo 21) y consejos de prudencia o frases P (artículo 22), cuando procedan.
5. Información suplementaria (artículo 25), cuando proceda.

Además: va en la lengua oficial del país (17.2); si figura «Peligro», no aparece «Atención» (20.3); no más de seis consejos de prudencia salvo que haga falta (28.3); y se fija con firmeza al envase (31.1).

Ejemplo: un producto ficticio sensibilizante cutáneo de categoría 1, según el anexo I en su texto de 2008, llevaría el pictograma GHS07 (signo de exclamación), la palabra «Atención», la frase H317 «Puede provocar una reacción alérgica en la piel» y consejos de prudencia como P261 («Evitar respirar el polvo/el humo/el gas/la niebla/los vapores/el aerosol.») y P280 («Llevar guantes/prendas/gafas/máscara de protección.»). El reglamento se ha modificado varias veces desde 2008; la clasificación real de tu producto y la versión vigente las aplica tu empresa en la etiqueta maestra.

### La operación paso a paso
Este es el orden general. Los detalles, los fija tu procedimiento.

1. **Despeje de línea** hecho y verificado. Nombre y lote a la vista en el puesto.
2. **Materiales comprobados.** Bidones, bolsas, bridas y precintos aprobados, con su lote anotado. Etiquetas emitidas, contadas y revisadas.
3. **Báscula comprobada.** ICH Q7 pide calibrar las básculas críticas según programa (5.30) y no usar un instrumento que no cumple (5.34). Miras la etiqueta de calibración y haces la comprobación diaria con la pesa patrón que pida el procedimiento.
4. **Tara de cada envase**, con sus dos bolsas y bridas. Cada bidón tiene su tara: no se usa una media.
5. **Llenado** con la extracción en marcha y la tierra puesta.
6. **Neto dentro de tolerancia.** Bruto menos tara. Si no cumple, ajustas dentro de la cabina, nunca fuera.
7. **Cierre de las bolsas**: la interior y luego la exterior, sin levantar polvo.
8. **Tapa, aro y precinto** numerado, que anotas.
9. **Etiquetado.** La guía europea (5.54) pide etiquetar lo antes posible tras llenar y cerrar. La etiqueta lleva el número de envase y el total, «1 de 12»: así el cliente sabe si falta alguno.
10. **Comprobación final.** ICH Q7 (9.45) pide examinar los envases etiquetados para asegurar que todos llevan la etiqueta correcta, y registrarlo.
11. **Muestras** de calidad y de reserva (*reserve sample*), como indique la hoja. Una muestra sacada de la línea no vuelve a ella (EudraLex, 5.59).

**La muestra de reserva (ICH Q7, 11.7).** Sirve para poder evaluar en el futuro la calidad del lote, no para hacer estudios de estabilidad (11.70). Se guarda, bien identificada, un año después de la caducidad o tres años después de distribuido el lote, lo que sea más largo; si el producto tiene fecha de reanálisis, tres años después de distribuido el lote por completo (11.71). Se guarda en el mismo sistema de envase que el producto o en uno equivalente o más protector, y en cantidad suficiente para al menos dos análisis completos (11.72).

### Ejemplo: lote ficticio de 12 bidones
Producto XR-310 (ficticio), lote XR310-2611-04. Peso nominal por bidón: 25,00 kg; tolerancia del neto: ±0,10 kg (valores de ejemplo).

| Envase | Tara (kg) | Bruto (kg) | Neto (kg) | Precinto |
|---|---|---|---|---|
| 1 de 12 | 4,86 | 29,88 | 25,02 | PR-0451 |
| 2 de 12 | 4,91 | 29,89 | 24,98 | PR-0452 |
| 3 de 12 | 4,88 | 29,89 | 25,01 | PR-0453 |
| 4 de 12 | 4,90 | 29,90 | 25,00 | PR-0454 |
| 5 de 12 | 4,87 | 29,90 | 25,03 | PR-0455 |
| 6 de 12 | 4,89 | 29,88 | 24,99 | PR-0456 |
| 7 de 12 | 4,92 | 29,92 | 25,00 | PR-0457 |
| 8 de 12 | 4,88 | 29,90 | 25,02 | PR-0458 |
| 9 de 12 | 4,90 | 29,87 | 24,97 | PR-0459 |
| 10 de 12 | 4,86 | 29,87 | 25,01 | PR-0460 |
| 11 de 12 | 4,91 | 29,91 | 25,00 | PR-0461 |
| 12 de 12 | 4,89 | 21,46 | 16,57 | PR-0462 |
| **Total** | | | **291,60** | |

Fíjate en los bidones 4 y 5: los dos pesan 29,90 kg en bruto, pero sus netos son 25,00 y 25,03 kg porque sus taras son distintas (4,90 y 4,87 kg). Por eso cada envase se tara por separado.

### Las cuentas
**Cuenta 1: cuántos envases.** Del secadero salen 292,60 kg. Se apartan 0,40 kg de muestras (0,20 kg para calidad y 0,20 kg de reserva) y se prevé perder 0,60 kg en el filtro y las bolsas (valores de ejemplo). Quedan 292,60 − 0,40 − 0,60 = 291,60 kg. 291,60 / 25 = 11,664: se **redondea hacia arriba**. Son 12 bidones, 11 llenos y uno parcial con 291,60 − 11 × 25,00 = 16,60 kg previstos. Salió 16,57 kg porque los once llenos sumaron 275,03 kg.

**Cuenta 2: peso neto.** Neto = bruto − tara. Bidón 5: 29,90 − 4,87 = 25,03 kg. Está dentro de 25,00 ± 0,10, es decir, entre 24,90 y 25,10 kg.

**Cuenta 3: rendimiento del envasado.** Lo que sale identificado (bidones y muestras) frente a lo que entra: (291,60 + 0,40) / 292,60 × 100 = 99,79 %. Los 0,60 kg que faltan (0,21 %) deben estar explicados. Si te sales del rango de la hoja, se actúa como en «Rendimiento y balance de materia a fondo».

**Cuenta 4: conciliación de etiquetas.** Se emitieron 16: 12 en bidones, 2 en las muestras, 1 de espécimen en la hoja y 1 destruida por mala impresión. 12 + 2 + 1 + 1 = 16: cuadra. Como llevan el lote, ninguna vuelve al almacén: las sobrantes se destruyen y se registran (9.32). Una que falte podría estar en un bidón equivocado: se investiga.

### Errores típicos y qué hacer
| Qué pasa | Qué haces |
|---|---|
| Una etiqueta con un dato equivocado (lote, peso, fecha) o mal impresa | No la usas. Paras, apartas todas las de esa tirada y avisas. La mal impresa se destruye y se cuenta en la conciliación |
| Aparece en la sala un envase, una etiqueta o un documento de otro lote | Paras. No lo retiras a escondidas: se identifica, se aparta, se anota y se avisa. El despeje falló y hay que ver si algo se mezcló |
| Neto fuera de tolerancia | Ajustas el producto dentro de la cabina y vuelves a pesar. Anotas las dos pesadas. Si la báscula da valores raros, la dejas de usar y avisas |
| Bolsa interior rota o pinchada | No cierras encima. Paras el llenado, avisas y sigues el procedimiento: lo normal es pasar el producto a una bolsa nueva bajo extracción y registrar la incidencia |
| Polvo en la parte exterior del bidón o de la bolsa | No sale así de la sala. Se limpia con el método del procedimiento (aspiración o paño húmedo), se revisa por qué ha salido polvo y se anota |

La guía europea (5.60) pide que un producto implicado en un suceso anormal solo vuelva al proceso tras inspección, investigación y aprobación del personal autorizado. Para ti: lo raro se para, se anota y se comunica.

### Lo que va en la hoja de producción
ICH Q7 (6.52) pide que la hoja del lote recoja, entre otras cosas, fechas y horas, equipos, pesos, muestreos, las firmas de quien hace y de quien verifica cada paso crítico, el rendimiento real, la descripción del envase y la etiqueta, una etiqueta representativa y las desviaciones. Cómo se rellena cada casilla está en «La hoja de producción a fondo».

Los números de esta lección son ejemplos para entender. En planta manda siempre el procedimiento vigente (SOP): envases, cierres, tolerancias, número de etiquetas y muestras son los de tu planta.
`,
  plant: `
Turno de mañana en la sala de envasado SE-03. El secadero SC-402 ha descargado el lote XR310-2611-04 del producto ficticio XR-310: 292,60 kg en el contenedor intermedio CI-12.

Con la lista de despeje en la mano recorres la sala. Bajo la mesa de la báscula aparece una etiqueta del lote anterior, despegada. No la tiras sin más: la anotas en la lista, la entregas a tu responsable y queda registrada para la conciliación de aquel lote. Íñigo, tu compañero, repite el recorrido por su cuenta y firma la verificación.

Compruebas la báscula BS-31 con su pesa patrón de 20 kg y anotas la lectura. Recibes 16 etiquetas y las revisas una a una contra la hoja: nombre, código, lote, fecha de reanálisis. Pegas una como espécimen.

Taras el primer bidón con sus dos bolsas y bridas: 4,86 kg. Con la extracción en marcha, la pinza de tierra puesta y el indicador de caudal en verde, llenas hasta un bruto de 29,88 kg: neto 25,02 kg. Cierras las bolsas, la tapa, el aro y pones el precinto PR-0451. Escribes a mano el peso en la etiqueta, la pegas y miras que diga «1 de 12».

En el bidón 9 te pasas: el neto da 25,13 kg. Quitas 0,16 kg dentro de la cabina y vuelves a pesar: 24,97 kg. Anotas las dos pesadas.

Al terminar, una etiqueta salió torcida y se destruye ante tu compañero. 12 + 2 + 1 + 1 = 16: cuadra. Los bidones van a cuarentena hasta que calidad libere el lote.
`,
  batchRecord: `
En la hoja de producción (*batch record*) del envasado verás y anotarás:

- **Despeje de línea inicial**: sala, hora, lista completada, firma de quien lo hace y de quien lo verifica.
- **Materiales de envase**: tipo y lote de bidones, bolsas, bridas y precintos, comparados con la hoja.
- **Báscula**: código, estado de calibración y resultado de la comprobación diaria.
- **Etiquetas**: número emitido, revisión hecha (con firma) y espécimen pegado.
- **Cada envase**: número (1 de N), tara, bruto y neto reales, número de precinto, hora y firma. Si hubo reajuste, las dos pesadas.
- **Muestras**: de calidad y de reserva, con cantidad, hora y quién las toma.
- **Totales**: suma de netos, rendimiento del envasado y comparación con el rango de la hoja.
- **Conciliación de etiquetas**: emitidas, usadas, espécimen, destruidas y devueltas, con firma.
- **Comprobación final**: todos los envases con la etiqueta correcta.
- **Despeje de línea final** e **incidencias**: bolsa rota, peso fuera, etiqueta mal impresa, aviso al responsable de turno.

Se anota lo que marca la báscula, no lo que debería salir.
`,
  terms: [
    { es: "Material de envasado", en: "Packaging material", def: "Cualquier material destinado a proteger el producto durante el almacenamiento y el transporte (definición de ICH Q7)." },
    { es: "Envase primario", en: "Primary packaging", def: "El envase que toca el producto; en un bidón con bolsas, la bolsa interior." },
    { es: "Bolsa interior de polietileno", en: "Polyethylene liner", def: "Bolsa de plástico que va dentro del bidón o del saco y contiene el producto." },
    { es: "Bidón de fibra", en: "Fibre drum", def: "Bidón de cartón prensado con tapa y aro de cierre, muy usado para principios activos en polvo." },
    { es: "Termosellado", en: "Heat sealing", def: "Cierre de una bolsa de plástico soldándola con calor." },
    { es: "Precinto de seguridad", en: "Tamper-evident seal", def: "Precinto numerado que muestra si el envase se ha abierto." },
    { es: "Despeje de línea", en: "Line clearance", def: "Comprobación, antes y después de envasar, de que no queda nada que no sea del lote en curso; la verifica otra persona." },
    { es: "Lista de comprobación", en: "Checklist", def: "Lista de puntos que se revisan uno a uno, por ejemplo en el despeje de línea." },
    { es: "Etiqueta maestra", en: "Master label", def: "Etiqueta aprobada que se guarda para comparar con las emitidas para cada lote." },
    { es: "Emisión de etiquetas", en: "Label issuance", def: "Entrega controlada del número de etiquetas previsto para un lote." },
    { es: "Conciliación de etiquetas", en: "Label reconciliation", def: "Cuadre entre etiquetas emitidas, usadas, destruidas y devueltas; una diferencia se investiga." },
    { es: "Muestra de reserva", en: "Reserve sample", def: "Muestra de cada lote que se guarda para poder evaluar su calidad en el futuro." },
    { es: "Palabra de advertencia", en: "Signal word", def: "En la etiqueta CLP, «Peligro» o «Atención», según la gravedad del peligro." },
    { es: "Tolerancia de peso", en: "Weight tolerance", def: "Margen permitido alrededor del peso nominal de cada envase." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Del secadero salen 187,4 kg de producto para envasar en bidones de 25 kg. ¿Cuántos bidones necesitas?",
      answer: 8,
      tolerance: 0.001,
      unit: "bidones",
      explain: "187,4 / 25 = 7,496. Se redondea hacia arriba: 8 bidones, siete llenos y el último con 12,4 kg.",
    },
    {
      kind: "number",
      q: "Un bidón lleno pesa 30,36 kg en bruto. Vacío, con sus dos bolsas y sus bridas, pesó 5,24 kg. ¿Cuál es el peso neto?",
      answer: 25.12,
      tolerance: 0.001,
      unit: "kg",
      explain: "Neto = bruto − tara = 30,36 − 5,24 = 25,12 kg.",
    },
    {
      kind: "number",
      q: "Al envasado llegan 250,4 kg del secadero. Al terminar, los bidones suman 248,5 kg netos y las muestras 0,4 kg. ¿Cuál es el rendimiento del envasado en %?",
      answer: 99.4,
      tolerance: 0.002,
      unit: "%",
      explain: "Sale identificado 248,5 + 0,4 = 248,9 kg. 248,9 / 250,4 × 100 = 99,4 %. Los 1,5 kg que faltan deben estar explicados.",
    },
    {
      kind: "number",
      q: "Se emiten 40 etiquetas con el número de lote. Se pegan 30 en bidones y 2 en envases de muestras, 1 va a la hoja como espécimen y 5 se destruyen por mala impresión. ¿Cuántas faltan por explicar?",
      answer: 2,
      tolerance: 0.001,
      unit: "etiquetas",
      explain: "40 − (30 + 2 + 1 + 5) = 2 etiquetas sin explicar. Podrían estar en un envase equivocado: se para y se investiga.",
    },
    {
      kind: "number",
      q: "El peso nominal es 25,00 kg con una tolerancia de ±0,10 kg. Un bidón da 29,79 kg de bruto y su tara es 4,92 kg. ¿Cuántos kg le faltan al neto para llegar al nominal?",
      answer: 0.13,
      tolerance: 0.01,
      unit: "kg",
      explain: "Neto = 29,79 − 4,92 = 24,87 kg. Faltan 25,00 − 24,87 = 0,13 kg, más que la tolerancia de 0,10 kg: hay que ajustar y volver a pesar.",
    },
    {
      kind: "choice",
      q: "En el despeje de línea encuentras bajo la báscula una etiqueta del lote anterior. ¿Qué haces?",
      options: [
        "La tiro a la papelera, porque ese lote ya está terminado",
        "La pego en la hoja del lote nuevo para que quede guardada",
        "La anoto, la entrego y espero a que se verifique el despeje",
        "La guardo en el bolsillo y la devuelvo al almacén mañana",
      ],
      answer: 2,
      explain: "Una etiqueta perdida descuadra la conciliación del otro lote. Se anota, se entrega al responsable y se completa el despeje con su verificación antes de empezar.",
    },
    {
      kind: "choice",
      q: "Al revisar las etiquetas emitidas ves que el número de lote impreso no coincide con el de la hoja. ¿Qué haces?",
      options: [
        "Paro, aparto toda la tirada y aviso a mi responsable",
        "Corrijo el número a mano en cada etiqueta y sigo",
        "Uso las etiquetas y anoto el lote bueno en la hoja",
        "Pido que me impriman otras y tiro estas a la basura",
      ],
      answer: 0,
      explain: "ICH Q7 pide revisar las etiquetas emitidas y documentarlo. Las de esa tirada no se usan, se apartan para contarlas y destruirlas de forma registrada, y se avisa.",
    },
    {
      kind: "choice",
      q: "Mientras cierras un bidón ves que la bolsa interior tiene un pinchazo y el polvo toca la bolsa exterior. ¿Qué haces?",
      options: [
        "Cierro igual, porque la bolsa exterior ya lo protege",
        "Pongo cinta adhesiva sobre el pinchazo y precinto",
        "Lo dejo para el turno siguiente sin decir nada",
        "Paro, aviso y sigo el procedimiento para cambiar la bolsa",
      ],
      answer: 3,
      explain: "La bolsa interior es el envase primario: si está rota, el envase ya no cumple. Se para, se avisa, se cambia la bolsa como diga el procedimiento y se anota.",
    },
    {
      kind: "choice",
      q: "Un principio activo tiene fecha de reanálisis. Según ICH Q7, ¿cuánto tiempo se guarda su muestra de reserva?",
      options: [
        "Hasta que el laboratorio acabe los análisis del lote",
        "Tres años después de distribuir el lote por completo",
        "Un año contado desde la fecha de fabricación del lote",
        "Solo hasta la primera fecha de reanálisis del lote",
      ],
      answer: 1,
      explain: "ICH Q7 (11.71): con fecha de reanálisis, tres años después de que el fabricante haya distribuido el lote por completo.",
    },
    {
      kind: "choice",
      q: "Has cerrado y etiquetado un bidón y ves polvo blanco en la tapa y en el aro. ¿Qué haces?",
      options: [
        "Lo soplo con aire comprimido para que quede limpio",
        "Lo limpio según el procedimiento y anoto la incidencia",
        "Lo mando a cuarentena así, porque calidad ya lo verá",
        "Lo sacudo un poco fuera de la sala para no ensuciar",
      ],
      answer: 1,
      explain: "El bidón no sale de la sala con polvo fuera. Se limpia por aspiración o en húmedo, nunca con aire comprimido, se busca de dónde salió y se anota.",
    },
  ],
};
