import type { Lesson } from "./types";

export const impurezasAFondo: Lesson = {
  slug: "impurezas-a-fondo",
  level: 3,
  order: 12,
  title: "Impurezas a fondo: de dónde vienen, cuánto se permite y cómo las evita el operador",
  titleEn: "Impurities in depth: where they come from, how much is allowed and how the operator prevents them",
  minutes: 40,
  summary:
    "La definición de impureza de ICH Q3A y sus tres familias, de dónde salen las impurezas orgánicas en una síntesis, los umbrales de notificación, identificación y cualificación con sus cuentas, el perfil de impurezas de ICH Q7, las impurezas mutagénicas y el umbral de 1,5 µg al día de ICH M7, las nitrosaminas según la EMA, el factor de purga y lo que hace el operador para no crear impurezas.",
  body: `
En «Impurezas en el API» viste las familias de impurezas y la tabla de umbrales. Aquí vas más despacio: qué dice cada guía, de dónde sale cada impureza en una síntesis, cómo se hacen las cuentas y qué puedes hacer tú en el turno para que no aparezcan.

### Qué es una impureza, con las palabras de la guía
La guía **ICH Q3A(R2)**, sobre impurezas en principios activos nuevos (*impurities in new drug substances*), la define así: **cualquier componente del principio activo que no es la entidad química definida como principio activo**.

Piensa en un saco de arroz: una piedrecita no es arroz, aunque venga en el saco. En un principio activo las impurezas son moléculas invisibles que el laboratorio encuentra, casi siempre con un cromatógrafo de líquidos (HPLC), como picos en un gráfico.

ICH Q3A las clasifica en tres familias:

| Familia | Qué son | Dónde se estudian a fondo |
|---|---|---|
| **Orgánicas** (*organic impurities*) | Moléculas con carbono que vienen del proceso o del propio producto | En esta lección |
| **Inorgánicas** (*inorganic impurities*) | Reactivos, ligandos y catalizadores, metales, sales inorgánicas, ayudas de filtración, carbón | Los metales, en «Átomos y tabla periódica a fondo» (ICH Q3D) |
| **Disolventes residuales** (*residual solvents*) | Restos de los líquidos de la síntesis | En la lección «a fondo» de disolventes residuales (ICH Q3C) |

La guía deja fuera los contaminantes ajenos al proceso, que trata como asunto de buenas prácticas de fabricación (GMP), los polimorfos y las impurezas enantioméricas, que tienes en la lección «a fondo» de quiralidad.

### De dónde salen las impurezas orgánicas: un proceso ficticio
ICH Q3A dice que las impurezas orgánicas pueden aparecer durante la fabricación o el almacenamiento, y enumera de dónde: **materiales de partida, subproductos, intermedios, productos de degradación, y reactivos, ligandos y catalizadores**. Síguelo en un proceso **inventado para la lección**:

1. **Etapa 1.** El material de partida MP-20 reacciona con el reactivo RA-3 en tolueno, con un catalizador de paladio que lleva un ligando. Sale el intermedio INT-21.
2. **Etapa 2.** INT-21 se trata con ácido clorhídrico en metanol y da el principio activo bruto LX-310.
3. **Etapa 3.** LX-310 se cristaliza, se centrifuga, se lava y se seca.

Ahora busca las impurezas:

- **Lo que trae el material de partida.** MP-20 llega de un proveedor y nunca es 100 % puro. Si trae una molécula «hermana», puede reaccionar igual que MP-20 y dar una hermana de LX-310. Entra por la puerta de recepción.
- **Material de partida o intermedio sin reaccionar.** Si la etapa 1 no llega al final, queda MP-20; si la 2 no llega, queda INT-21. Ambos se arrastran.
- **Subproductos** (*by-products*): moléculas de reacciones secundarias. Por ejemplo, INT-21 puede seguir reaccionando con RA-3 y dar un producto «doble». Las reacciones en serie y en paralelo que los forman están en «Velocidad de reacción a fondo».
- **Productos de degradación** (*degradation products*). ICH M7 los define como moléculas que resultan de un cambio químico del principio activo con el tiempo o por la luz, la temperatura, el pH, el agua o la reacción con un excipiente o con el envase. LX-310 húmedo y caliente demasiado tiempo puede romperse en trozos.
- **Reactivos, ligandos y catalizadores.** Restos de RA-3 o del ligando del paladio. El metal en sí es una impureza inorgánica.

Queda una fuente que viene del equipo: la **contaminación cruzada** (*cross-contamination*), que ICH Q7 define como la contaminación de un material o producto con otro material o producto. Si el reactor R-12 fabricó la semana pasada el producto ficticio KD-8 y quedó mal limpio, LX-310 saldrá con restos de KD-8. Q7 pide limpiar el equipo no dedicado entre materiales distintos (5.24) y trabajar de forma que se evite la contaminación con otros materiales (8.51). Cómo se limpia lo tienes en «Limpieza de equipos y validación de limpieza».

### Los umbrales de ICH Q3A, desde cero
Las impurezas se expresan en **porcentaje del principio activo**. Un 0,10 % es un gramo de impureza por cada kilo de producto. Parece nada, pero el paciente que toma el medicamento cada día toma también la impureza cada día. Por eso la guía mira también **cuánta impureza entra en el cuerpo al día**.

Un **umbral** (*threshold*) es una raya en el suelo: si la impureza la pasa, hay que hacer algo. Q3A tiene tres, y cada una pide más trabajo:

1. **Notificación** (*reporting threshold*): por encima, el resultado se informa con su número.
2. **Identificación** (*identification threshold*): por encima, hay que averiguar qué molécula es. Una impureza no identificada solo se conoce por su comportamiento en el análisis, por ejemplo su tiempo de retención.
3. **Cualificación** (*qualification threshold*): por encima, hay que demostrar que es segura. La guía define la **cualificación** como obtener y evaluar datos que establecen la seguridad biológica de una impureza al nivel especificado.

La guía define los tres como límites «por encima de» (>): igualar el umbral no lo supera. Esta es la tabla de su anexo 1:

| Dosis máxima diaria | Notificación | Identificación | Cualificación |
|---|---|---|---|
| 2 g al día o menos | 0,05 % | 0,10 % o 1,0 mg al día (lo que sea menor) | 0,15 % o 1,0 mg al día (lo que sea menor) |
| Más de 2 g al día | 0,03 % | 0,05 % | 0,05 % |

La **dosis máxima diaria** es la cantidad de principio activo que se administra al día. Las notas de la tabla añaden que pueden aplicarse umbrales más bajos si la impureza es excepcionalmente tóxica. La guía pide dar los resultados por debajo del 1,0 % con dos decimales (0,06 %, 0,13 %), y nunca con palabras como «cumple».

### Cuenta 1: miligramos al día
**Valores de ejemplo.** Dosis: 300 mg al día. Impureza: 0,12 %.

> mg de impureza al día = dosis (mg/día) × porcentaje / 100 = 300 × 0,12 / 100 = **0,36 mg/día**

### Cuenta 2: ¿0,08 % y 0,12 % superan los umbrales con 600 mg al día?
**Valores de ejemplo.** Primero, qué umbral manda. Un 0,10 % de 600 mg son 0,6 mg, menos que 1,0 mg: manda el porcentaje. Igual con el 0,15 % (0,9 mg).

| Resultado | mg al día | Notificación (0,05 %) | Identificación (0,10 %) | Cualificación (0,15 %) |
|---|---|---|---|---|
| 0,08 % | 0,48 | Supera | No supera | No supera |
| 0,12 % | 0,72 | Supera | Supera: hay que identificarla | No supera |

### Cuenta 3: lo mismo con 1,2 g al día
**Valores de ejemplo.** Un 0,10 % de 1200 mg serían 1,2 mg, más que 1,0 mg: ahora manda el 1,0 mg al día. La nota 2 del anexo 2 de Q3A dice que, en ese caso, el resultado se pasa a mg, se redondea al mismo decimal que el umbral y se compara.

- **0,08 %**: 1200 × 0,08 / 100 = 0,96 mg, que redondeado es 1,0 mg. No está por encima de 1,0: **no supera** identificación ni cualificación (sí la notificación).
- **0,12 %**: 1200 × 0,12 / 100 = 1,44 mg, redondeado 1,4 mg: **supera identificación y cualificación**.

El mismo 0,12 % que con 600 mg solo pedía identificar, con 1,2 g pide demostrar que es seguro. **Cuanto más producto toma el paciente, más se aprieta el límite en porcentaje.**

### Cuenta 4: gramos en un lote
**Valores de ejemplo.** Un lote de 200 kg con una impureza al 0,10 %:

> 200 kg × 0,10 / 100 = 0,2 kg = **200 g**

En la especificación, según Q3A, cada **impureza especificada** tiene su límite; cualquier **no especificada** no puede pasar del umbral de identificación; y hay un límite de **impurezas totales**, la suma de las que superan la notificación. La guía avisa de que una variación importante entre lotes puede indicar un proceso que **no está bien controlado y validado**.

### El perfil de impurezas: la huella del proceso
El **perfil de impurezas** (*impurity profile*) es, según Q3A y Q7, una descripción de las impurezas identificadas y no identificadas del principio activo. Es la huella del proceso: si fabricas siempre igual, salen las mismas impurezas en cantidades parecidas.

ICH Q7 lo trata en su apartado 11.2:

- **11.21**: para cada principio activo debería establecerse el perfil de un lote típico de un proceso controlado, con la identidad o designación analítica de cada impureza, el **rango** observado y su clasificación (inorgánica, orgánica, disolvente). El perfil depende del proceso y del origen del principio activo.
- **11.22**: el perfil debería compararse a intervalos adecuados con el del expediente registrado o con los datos históricos, **para detectar cambios debidos a modificaciones en las materias primas, en los parámetros de operación de los equipos o en el proceso**.

Además, el **12.52** pide que la validación confirme que el perfil está dentro de límites y es comparable o mejor que el histórico, y el **8.50**, que los restos que pasan de un lote al siguiente, como los cristales que quedan en la cesta de una centrífuga, no alteren el perfil establecido.

¿Por qué una impureza nueva o un aumento se investigan aunque estén dentro de límite? Porque el perfil es la prueba de que el proceso se comporta como cuando se demostró seguro. Si sale un pico nunca visto, o uno conocido pasa del 0,04 % habitual al 0,09 %, **algo ha cambiado**: una materia prima, una temperatura, un tiempo, una limpieza. Y una impureza nueva no está cualificada. Q7 (8.15) pide documentar y explicar toda desviación e investigar las críticas; cómo se sigue lo tienes en «Desviaciones y CAPA a fondo».

### Impurezas mutagénicas: las que pueden dañar el ADN
En cada célula hay **ADN** (*DNA*), una molécula larguísima que guarda las instrucciones del cuerpo como una receta de millones de letras. Una **mutación** es una errata en esa receta; la mayoría no tiene consecuencias o la célula la repara, pero algunas pueden hacer que una célula se multiplique sin control: un cáncer (conocimiento de libro de texto).

La guía **ICH M7(R2)**, adoptada el 3 de abril de 2023, trata las sustancias **reactivas con el ADN** (*DNA reactive*): las que pueden dañarlo directamente reaccionando con él, incluso a niveles bajos, causando mutaciones y potencialmente cáncer. Se detectan normalmente con un ensayo de mutación en bacterias (el ensayo de Ames).

¿Por qué límites tan bajos? Según M7, otras sustancias que dañan el material genético suelen tener un umbral por debajo del cual no hacen daño. Para las reactivas con el ADN, el límite se calcula con una extrapolación en línea recta desde las dosis que causan tumores en animales, un método muy conservador: toda dosis, por pequeña que sea, se trata como si llevara algo de riesgo.

### El umbral toxicológico de preocupación (TTC)
El **umbral toxicológico de preocupación** (*threshold of toxicological concern*, TTC) es, según M7, una ingesta aceptable para cualquier sustancia no estudiada con un riesgo despreciable. Su valor:

> **1,5 µg por persona y día**, asociado a un riesgo teórico de cáncer adicional menor de 1 entre 100 000 tras toda una vida. Se usa normalmente para tratamientos de más de 10 años sin datos de cáncer de la sustancia.

Un microgramo (µg) es la milésima parte de un miligramo; la guía advierte de que esa cifra de riesgo es muy hipotética. Para tratamientos más cortos permite más, porque cuenta la dosis acumulada (su tabla 2): 120 µg/día para menos de 1 mes, 20 para 1 a 12 meses, 10 para 1 a 10 años y 1,5 para más de 10 años.

### Del TTC a ppm
M7 define el **límite aceptable** (*acceptable limit*) como la concentración máxima de la impureza en el principio activo, calculada a partir de la ingesta aceptable y de la dosis diaria. Se da en **partes por millón** (ppm): 1 ppm es 1 µg por gramo de producto.

> Límite (ppm) = ingesta aceptable (µg/día) / dosis diaria (g/día)

**Cuenta 5. Valores de ejemplo.** Tratamiento largo, dosis de 500 mg al día (0,5 g):

> 1,5 / 0,5 = **3 ppm**

Tres ppm son el 0,0003 %, unas 167 veces menos que el umbral de notificación de Q3A (0,05 %). Por eso hacen falta métodos de análisis especiales.

**Cuenta 6. Valores de ejemplo.** Un lote de 200 kg con 3 ppm de esa impureza:

> 200 000 g × 3 µg/g = 600 000 µg = **0,6 g**

### Las clases de M7 y las alertas estructurales, como idea
M7 reparte las impurezas en **cinco clases**. A grandes rasgos: la 1, mutagénicas y cancerígenas conocidas, con un límite propio de cada sustancia; la 2, mutagénicas conocidas sin datos de cáncer; la 3, con una alerta estructural y sin datos; la 2 y la 3 se controlan con el TTC (la 3 se puede ensayar y pasar a la 2 o a la 5). La 4 y la 5 se tratan como no mutagénicas.

Una **alerta estructural** (*structural alert*) es, según la guía, una agrupación química o parte de una molécula que se asocia con la capacidad de causar mutaciones. No prueba nada, pero obliga a mirar. Entre los ejemplos de la guía están compuestos nitroaromáticos, cloruros de alquilo, el óxido de etileno y el cloruro de tionilo.

M7 señala además una **cohorte de preocupación** (*cohort of concern*) tan potente que incluso por debajo del TTC habría un riesgo apreciable: compuestos de tipo aflatoxina, **N-nitroso** y alquil-azoxi.

### Nitrosaminas
Las **nitrosaminas** (*N-nitrosamines*) son moléculas con un grupo nitroso (–N=O) unido al nitrógeno de una amina: son los compuestos N-nitroso de la cohorte de preocupación. Por eso, según el documento de preguntas y respuestas de la Agencia Europea de Medicamentos (EMA) para titulares de autorización (EMA/409815/2020; la revisión leída para esta lección es la 23, de octubre de 2025), **no se les puede aplicar de forma rutinaria el TTC de 1,5 µg al día**: cada nitrosamina tiene su propia ingesta aceptable.

¿Cómo se forman? La EMA lo resume así: **cuando se juntan una amina y un agente nitrosante en condiciones favorables**, aunque hay otras vías. El ejemplo de libro de texto es una **amina secundaria** (un nitrógeno unido a dos grupos de carbono) con **nitrito en medio ácido**: el ácido convierte el nitrito en ácido nitroso, que pasa el grupo –N=O a la amina. La EMA añade que las aminas secundarias son especialmente vulnerables, aunque también se han visto casos con terciarias.

De la lista de factores de riesgo de la EMA, estos son los que puede ver un operador:

- **Reactivos con nitrito**, como el nitrito de sodio, cuando hay aminas en la misma etapa o en otra. Las aminas pueden venir incluso de disolventes como la dimetilformamida (DMF) o la N-metilpirrolidona (NMP).
- **Agua desinfectada** con cloro, cloraminas u ozono, si hay aminas presentes.
- **Materiales recuperados o reciclados contaminados** (disolventes, reactivos, catalizadores), sobre todo si los recupera un tercero que no sabe qué contienen.
- **Materiales de partida e intermedios contaminados** de proveedores.
- **Aspectos GMP**: contaminación cruzada por procesos distintos seguidos en la misma línea, y arrastre entre etapas por **errores del operador** o por hojas poco detalladas, como una **separación de fases mal hecha**.

Una decantación cortada tarde, que deja pasar fase acuosa con nitrito, es uno de esos caminos. Q7 (14.41 a 14.43) solo permite reutilizar disolventes recuperados con una recuperación controlada y cumpliendo especificaciones, y pide documentar su uso.

### El purgado: cómo se van quitando las impurezas
Cada etapa de purificación quita una parte de las impurezas. M7 llama a esa capacidad **purga** (*purge*) y define el **factor de purga** (*purge factor*) como el nivel de la impureza en un punto anterior del proceso dividido entre su nivel en un punto posterior.

> Factor de purga = nivel antes / nivel después

Piensa en un colador de varias telas: si una deja pasar una quinta parte y la siguiente una cuarta, al final pasa 1/5 × 1/4 = 1/20. **Los factores de cada etapa se multiplican.** La cristalización deja impurezas en las aguas madres («Cristalización»), el lavado desplaza las aguas madres de la torta, la extracción pasa la impureza a la fase que se retira («Extracción líquido-líquido y separación de fases»), y una reacción puede destruir una impureza muy reactiva, como el cloruro de tionilo con el agua (ejemplo de M7).

**Cuenta 7. Valores de ejemplo.** INT-21 lleva un 0,60 % de una impureza. Una extracción con factor 5 y un lavado con factor 4:

> 0,60 / 5 = 0,12 %; 0,12 / 4 = **0,03 %**. Factor total: 5 × 4 = 20.

**Cuenta 8. Valores de ejemplo.** Una impureza mutagénica entra con 300 ppm y pasa por dos etapas de factor 10:

> 300 / 10 = 30 ppm; 30 / 10 = **3 ppm**. Factor total: 100.

Dos avisos. El factor de purga vale para el proceso **tal como se validó**: un lavado con la mitad de disolvente o una torta agrietada no purgan lo mismo. Y M7 permite, con datos que lo justifiquen, controlar una impureza mutagénica en una etapa anterior confiando en la purga de las siguientes: si alguien cambia esas etapas, esa confianza se rompe sin que el análisis final lo avise.

### Qué hace el operador para no crear impurezas
M7 incluye en la estrategia de control las **condiciones de operación** de instalaciones y equipos y los **controles en proceso**. Es decir, lo que haces tú:

- **Respeta temperatura y tiempo.** En una reacción en serie, el producto sigue reaccionando si te pasas; en paralelo, más calor favorece la secundaria.
- **No dejes el producto esperando más de lo permitido.** Q7 pide cumplir los límites de tiempo de la instrucción y documentar y evaluar las desviaciones (8.20), y guardar los intermedios en condiciones adecuadas (8.21).
- **Protege de la luz, del aire o de la humedad si la hoja lo pide.** La luz y el agua están entre las causas de degradación que cita M7, y la EMA cita la oxidación por aire u oxígeno entre los factores de riesgo de nitrosaminas.
- **Limpia bien y comprueba el estado del equipo.** Q7 (5.26) pide identificar el contenido y el estado de limpieza de cada equipo: sin etiqueta de limpio vigente, no se carga.
- **Usa el material correcto**: código, lote y estado aprobado de cada materia prima, y el disolvente que dice la hoja, no uno recuperado de otro proceso porque «es el mismo».
- **Haz bien las separaciones de fases y los lavados**: tiempos de decantación, volúmenes, número de lavados.
- **Anota cualquier desviación.** Un grado de más, una hora de retraso, un bidón distinto pueden cambiar el perfil de impurezas, y solo si está escrito podrá calidad relacionarlo con un pico nuevo.

Los números de esta lección son de ejemplo y sirven para entender. En planta manda siempre el procedimiento vigente (SOP): los límites, tiempos y condiciones son los de tu hoja y tu especificación.
`,
  plant: `
Turno de noche, etapa 3 del principio activo ficticio LX-310. La hoja dice: *«Tras centrifugar en la C-31, lavar la torta con 2 × 60 L de metanol frío. Tiempo máximo de espera de la torta húmeda antes de secar: 12 h, bajo nitrógeno y protegida de la luz.»*

Terminas de centrifugar a las 02:00. El secadero SC-40 tiene una avería y mantenimiento no puede venir hasta la mañana. Sabes por qué existe ese límite de 12 h: la torta húmeda puede degradarse y dar una impureza que ya está en la especificación.

No esperas a ver qué pasa. A las 02:15 anotas la hora de fin de centrifugación, compruebas que la C-31 sigue con nitrógeno y que la mirilla está tapada, y avisas a la jefa de turno. Ella decide trasladar la torta al secadero de reserva SC-41, que está limpio, con su etiqueta vigente y libre para este producto. A las 05:40 empiezas a secar: 3 h 40 min de espera, dentro del límite. Anotas todo.

Una semana después, el análisis del lote anterior, que no fabricaste tú, da un pico nuevo al 0,07 %: por debajo del umbral de identificación, pero nunca visto en el perfil del producto. Calidad abre una investigación. En la hoja de ese lote hay una anotación del compañero: «metanol del bidón ME-R-17». La etiqueta dice que es metanol recuperado de otro proceso, no autorizado para la etapa 3. Gracias a esa línea escrita, la causa aparece en un día y no en un mes.
`,
  batchRecord: `
En la hoja de producción (*batch record*) verás instrucciones y casillas que, aunque no hablen de impurezas, existen para controlarlas:

- **Materias primas**: código, lote del proveedor, número de recepción y estado aprobado de cada material, incluido si un disolvente es nuevo o recuperado y si está autorizado para esa etapa.
- **Estado del equipo**: código del equipo y etiqueta de limpieza vigente, con el último producto fabricado si la hoja lo pide.
- **Temperaturas y tiempos de reacción**: valores reales con la hora; muchos límites llevan su motivo, por ejemplo «máx. 45 °C para evitar la impureza B».
- **Tiempos de espera** (*hold times*): hora de fin de una operación y de inicio de la siguiente, comparadas con el máximo permitido.
- **Protecciones**: atmósfera de nitrógeno, protección de la luz, recipientes cerrados, cuando la hoja las exige.
- **Separaciones de fases y lavados**: tiempo de decantación, volumen de cada lavado, número de lavados.
- **Controles en proceso** (IPC): hora de la muestra, resultado del laboratorio (por ejemplo, «impureza B ≤ 0,15 %») y decisión.
- **Desviaciones e incidencias**: cualquier valor fuera de rango, retraso, cambio de equipo o de material, anotado en el momento con firma y comunicado al responsable.

Se anota el valor real, nunca «cumple» ni el valor esperado.
`,
  terms: [
    { es: "Impureza", en: "Impurity", def: "Según ICH Q3A, cualquier componente del principio activo que no es la entidad química definida como principio activo." },
    { es: "Subproducto", en: "By-product", def: "Molécula no deseada que se forma en una reacción secundaria durante la síntesis." },
    { es: "Producto de degradación", en: "Degradation product", def: "Molécula que resulta de un cambio químico del principio activo con el tiempo o por la luz, la temperatura, el pH o el agua." },
    { es: "Umbral de notificación", en: "Reporting threshold", def: "Nivel por encima del cual el resultado de una impureza se informa con su número; 0,05 % para dosis de hasta 2 g al día." },
    { es: "Umbral de identificación", en: "Identification threshold", def: "Nivel por encima del cual hay que averiguar la estructura de la impureza; 0,10 % o 1,0 mg al día, lo que sea menor, para dosis de hasta 2 g al día." },
    { es: "Cualificación", en: "Qualification", def: "Obtener y evaluar datos que demuestran la seguridad biológica de una impureza al nivel especificado." },
    { es: "Dosis máxima diaria", en: "Maximum daily dose", def: "Cantidad de principio activo que se administra al día; decide qué fila de la tabla de umbrales se usa." },
    { es: "Perfil de impurezas", en: "Impurity profile", def: "Descripción de las impurezas identificadas y no identificadas de un principio activo, con su rango; la huella del proceso." },
    { es: "Contaminación cruzada", en: "Cross-contamination", def: "Contaminación de un material o producto con otro material o producto, por ejemplo por un equipo mal limpio." },
    { es: "Impureza mutagénica", en: "Mutagenic impurity", def: "Impureza que ha resultado capaz de causar mutaciones en un ensayo adecuado; se controla según ICH M7." },
    { es: "Umbral toxicológico de preocupación", en: "Threshold of toxicological concern (TTC)", def: "Ingesta de 1,5 µg al día de una impureza mutagénica, considerada de riesgo despreciable para tratamientos largos." },
    { es: "Alerta estructural", en: "Structural alert", def: "Parte de una molécula que se asocia con la capacidad de causar mutaciones y obliga a evaluarla." },
    { es: "Nitrosamina", en: "N-nitrosamine", def: "Molécula con un grupo nitroso (–N=O) unido al nitrógeno de una amina; puede formarse al juntarse una amina y un agente nitrosante." },
    { es: "Factor de purga", en: "Purge factor", def: "Nivel de una impureza en un punto anterior del proceso dividido entre su nivel en un punto posterior." },
  ],
  quiz: [
    {
      kind: "number",
      q: "La dosis diaria de un principio activo es 750 mg y una impureza está al 0,06 %. ¿Cuántos miligramos de esa impureza toma el paciente al día?",
      answer: 0.45,
      tolerance: 0.01,
      unit: "mg/día",
      explain: "750 × 0,06 / 100 = 0,45 mg/día.",
    },
    {
      kind: "number",
      q: "Dosis máxima diaria: 1,5 g. Una impureza no especificada da un 0,09 %. ¿Cuántos mg al día supone? (Después compara con el umbral de identificación de ICH Q3A: 0,10 % o 1,0 mg al día, lo que sea menor.)",
      answer: 1.35,
      tolerance: 0.01,
      unit: "mg/día",
      explain: "1500 × 0,09 / 100 = 1,35 mg/día, redondeado 1,4 mg. Con 1,5 g manda el 1,0 mg al día porque el 0,10 % serían 1,5 mg, así que el 0,09 % supera el umbral de identificación aunque sea menor que 0,10 %.",
    },
    {
      kind: "number",
      q: "Un lote de 350 kg de principio activo tiene una impureza al 0,15 %. ¿Cuántos gramos de esa impureza hay en el lote?",
      answer: 525,
      tolerance: 0.01,
      unit: "g",
      explain: "350 kg × 0,15 / 100 = 0,525 kg = 525 g.",
    },
    {
      kind: "number",
      q: "Una impureza mutagénica se controla con el TTC de ICH M7, 1,5 µg al día, para un tratamiento largo. La dosis diaria del principio activo es 300 mg. ¿Cuál es el límite en ppm (µg por gramo de principio activo)?",
      answer: 5,
      tolerance: 0.01,
      unit: "ppm",
      explain: "300 mg = 0,3 g. Límite = 1,5 / 0,3 = 5 ppm, es decir, 5 µg por gramo, un 0,0005 %.",
    },
    {
      kind: "number",
      q: "Un intermedio lleva un 0,40 % de una impureza. La etapa siguiente tiene un factor de purga de 8 y el lavado posterior un factor de 5. ¿Qué porcentaje queda en el producto?",
      answer: 0.01,
      tolerance: 0.02,
      unit: "%",
      explain: "0,40 / 8 = 0,05 %; 0,05 / 5 = 0,01 %. Los factores se multiplican: 8 × 5 = 40.",
    },
    {
      kind: "number",
      q: "Una impureza mutagénica entra en el proceso con 120 ppm. Una extracción tiene un factor de purga de 20 y una cristalización posterior uno de 6. ¿Cuántas ppm quedan al final?",
      answer: 1,
      tolerance: 0.02,
      unit: "ppm",
      explain: "120 / 20 = 6 ppm; 6 / 6 = 1 ppm. Factor total: 20 × 6 = 120.",
    },
    {
      kind: "choice",
      q: "El análisis de tu lote da un pico nuevo al 0,07 %, que nunca había salido en este producto. Está por debajo del umbral de identificación. ¿Qué es lo correcto?",
      options: [
        "Investigarlo: un pico nuevo indica que algo cambió en el proceso",
        "Ignorarlo, porque está por debajo del umbral de identificación",
        "Volver a analizar la muestra hasta que el pico desaparezca solo",
        "Mezclar el lote con otro más puro para bajar el resultado final",
      ],
      answer: 0,
      explain: "ICH Q7 (11.22) pide comparar el perfil de impurezas con el histórico para detectar cambios por materias primas, parámetros o proceso. Un pico nuevo no está cualificado y es motivo de investigación, aunque esté dentro de límite.",
    },
    {
      kind: "choice",
      q: "Falta metanol para la etapa final. Un compañero te ofrece un bidón de metanol recuperado de otro proceso que usó nitrito de sodio. ¿Qué haces?",
      options: [
        "Lo uso, porque el metanol es el mismo producto químico",
        "No lo uso: avisas y solo se carga el material autorizado en la hoja",
        "Lo uso si lo filtro antes y anoto que es metanol recuperado",
        "Lo mezclo con metanol nuevo a partes iguales para diluirlo",
      ],
      answer: 1,
      explain: "La EMA cita los disolventes recuperados contaminados y los reactivos con nitrito como factores de riesgo de nitrosaminas, y ICH Q7 (14.41) solo permite reutilizar disolventes con recuperación controlada y especificaciones cumplidas.",
    },
    {
      kind: "choice",
      q: "La hoja fija un tiempo máximo de espera de 12 h para la torta húmeda antes de secar. El secadero se avería y la torta lleva 10 h esperando. ¿Qué haces?",
      options: [
        "Espero a que lo reparen, porque el tiempo no afecta a la torta",
        "Seco la torta a más temperatura para recuperar el tiempo perdido",
        "Aviso ya al responsable, anoto las horas y sigo sus instrucciones",
        "Dejo la torta en la centrífuga sin anotar nada hasta la mañana",
      ],
      answer: 2,
      explain: "El tiempo de espera existe porque el producto puede degradarse. ICH Q7 (8.20) pide cumplir los límites de tiempo y documentar y evaluar las desviaciones: se avisa antes de pasarse y se anota todo.",
    },
    {
      kind: "choice",
      q: "Vas a cargar un reactor que la semana pasada fabricó otro producto. La etiqueta de limpieza está caducada. ¿Qué haces?",
      options: [
        "Cargo, porque a simple vista el reactor parece limpio por dentro",
        "Cargo y lo anoto como incidencia después de terminar la etapa",
        "Lo enjuago con un poco de disolvente y cargo sin más trámite",
        "No cargo: aviso, porque hay riesgo de contaminación cruzada",
      ],
      answer: 3,
      explain: "ICH Q7 pide limpiar el equipo no dedicado entre productos distintos (5.24) e identificar su estado de limpieza (5.26). Sin limpieza vigente puede haber contaminación cruzada, que no se ve a simple vista.",
    },
  ],
};
