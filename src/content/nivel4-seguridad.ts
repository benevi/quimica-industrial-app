import type { Lesson } from "./types";

export const laboratorioSeguridadAFondo: Lesson = {
  slug: "laboratorio-seguridad-a-fondo",
  level: 4,
  order: 2,
  title: "El laboratorio a fondo: material, equipos y trabajo seguro",
  titleEn: "The laboratory in depth: glassware, equipment and safe work",
  minutes: 38,
  summary:
    "Para qué sirve el laboratorio de control de calidad de una planta de API, el material por familias y cómo cuidarlo, los equipos básicos, la vitrina de gases con sus cifras, los riesgos típicos, el etiquetado y almacenamiento de productos, los residuos y tres cuentas que se hacen a diario.",
  body: `
En «Material y seguridad en el laboratorio» viste la lista del material y las normas básicas. Aquí verás qué se hace con tu muestra, cómo se usa cada cosa sin romperla ni contaminarla y por qué existe cada norma. Las cifras vienen de las Notas Técnicas de Prevención (NTP) del Instituto Nacional de Seguridad y Salud en el Trabajo (INSST): guías de buenas prácticas que no obligan por sí mismas, salvo que una ley recoja lo que dicen.

### El laboratorio y tu planta
El laboratorio de control de calidad (*quality control*, QC) dice si lo que entra, lo que se fabrica y lo que sale cumple. La guía ICH Q7 de correcta fabricación de principios activos le encarga tres cosas:

- **Materias primas.** Cada lote que llega se analiza al menos con una prueba de identidad (apartado 7.30).
- **Muestras de proceso.** Son los controles en proceso (*in-process controls*, IPC): por ejemplo, cuánto disolvente queda tras una concentración. Según el apartado 8.33, los puede hacer personal de producción formado, y el resultado va a la hoja de producción.
- **Producto final.** Cada lote de intermedio o de API se analiza frente a su especificación (apartado 11.20). Liberar o rechazar cada API es tarea de la unidad de calidad, independiente de producción, y no se delega (apartado 2.22).

Si tu muestra está mal tomada o mal etiquetada, el resultado no vale y tu lote espera. Si no cumple, se investiga según un procedimiento (apartado 11.15): lo verás en «Resultados OOS y OOT: cómo se investigan» y «El certificado de análisis y la liberación del lote», en el nivel 10.

### El material, por familias
**Vidrio.** Es el material estrella: transparente, manejable y fácil de montar (NTP 433).

| Pieza | Para qué sirve | Cómo se usa bien |
|---|---|---|
| Vaso de precipitados (*beaker*) | Disolver, mezclar, calentar | Sus marcas son orientativas: no mide |
| Matraz Erlenmeyer (*Erlenmeyer flask*) | Valorar y mezclar agitando | Es el recipiente habitual de las valoraciones |
| Matraz aforado (*volumetric flask*) | Preparar un volumen exacto | Se enrasa a temperatura ambiente, no en caliente |
| Probeta (*graduated cylinder*) | Medir volúmenes aproximados | Mide peor que pipetas y aforados |
| Pipeta y bureta (*pipette, burette*) | Medir o añadir volúmenes exactos | Siempre con pipeteador, nunca con la boca |
| Embudo (*funnel*) | Trasvasar y filtrar | Bien sujeto en un aro o soporte |
| Vial (*vial*) | Guardar e inyectar muestras pequeñas | Cerrado y etiquetado desde el primer momento |

Cómo leer bien un volumen lo tienes en «Material volumétrico y cómo medir volúmenes».

El vidrio de laboratorio suele ser **borosilicato** (*borosilicate glass*), que se dilata menos que el vidrio corriente al calentarse y por eso sufre menos con los cambios de temperatura. La NTP 433 pide no meter vidrio ordinario en los baños calientes, sino vidrio resistente al calor.

Según la NTP 433, el vidrio se rompe por golpe, calor, cambio brusco de temperatura o presión interna; corta al forzar un tapón o una llave atascada, y estalla o implosiona a presión o a vacío. Lo que pide la nota:

- Revisar cada pieza y desechar la que tenga el mínimo defecto o haya sufrido un golpe fuerte, aunque no se le vea grieta.
- No calentar el vidrio directamente a la llama: interponer una rejilla metálica.
- Meter los balones en los baños calientes poco a poco y montar sin tensiones, con soportes y pinzas.
- Para desatascar una pieza, guantes gruesos y protección facial, o hacerlo en la vitrina.

**Plástico.** No se rompe, pero no aguanta todo. La NTP 480 da ejemplos para el polietileno: nada de bromoformo ni sulfuro de carbono, y con tricloroetileno no pasar de 40 °C.

**Porcelana.** Crisoles, cápsulas y los trocitos de porcelana porosa que, echados en un líquido antes de destilarlo, regulan la ebullición (NTP 464).

**Metal.** Soportes, pinzas, espátulas. Para destilar inflamables, la NTP 464 cita el recipiente metálico: no se rompe, aunque no deja ver el líquido.

**Desechable.** Puntas de pipeta, viales, filtros, guantes. Una vez manchado con un producto químico es residuo: va al contenedor de sólidos contaminados, no a la papelera.

### Limpieza y secado del vidrio
Lavar vidrio tiene sus riesgos: los productos de limpieza, los cortes y los restos de dentro (NTP 464). Por eso el recipiente se vacía del todo antes de lavarlo, y lo que tenía va a su residuo; el local de lavado está ventilado; la mezcla crómica (ácido sulfúrico con dicromato), tóxica y cancerígena, se descarta salvo que no haya alternativa, y para aclarar y secar la nota propone isopropanol en lugar de metanol, más tóxico. Si se secan balones con aire comprimido, a baja presión: la NTP 433 habla de 0,1 bar. Cómo se lava y se seca cada pieza lo fija el procedimiento del laboratorio.

### Los equipos básicos
- **Balanza**: lo tienes en «Balanzas y cómo pesar bien».
- **Placa calefactora con agitador magnético** (*hot plate stirrer*): calienta y mueve el líquido con un imán. Los inflamables se calientan con sistemas que no lleguen a su temperatura de autoignición, como el baño maría (NTP 433).
- **Baño termostático** (*water bath*): sin llenar hasta el borde, sujeto y con termostato de seguridad (NTP 433).
- **Estufa** (*drying oven*): seca a temperatura controlada. Con vapores inflamables, la NTP 433 pide extracción, estufa de seguridad aumentada o antideflagrante y doble termostato.
- **Mufla** (*muffle furnace*): calcina a temperatura muy alta. Riesgo de quemadura: guantes resistentes al calor, que la NTP 433 pide para las zonas calientes de los aparatos.
- **Desecador** (*desiccator*): guarda muestras sin humedad. A vacío, se protege con una red y no se transporta jamás (NTP 464).
- **Centrífuga de laboratorio** (*laboratory centrifuge*): carga repartida de forma simétrica y tapa con enclavamiento, que impide arrancar sin cerrar y abrir con el rotor girando (NTP 433). Como en «La centrífuga a fondo», una carga mal repartida desequilibra.
- **Rotavapor** (*rotary evaporator*): un destilador a vacío en pequeño. El balón gira en un baño caliente, el disolvente se evapora a baja presión y se condensa en un refrigerante: lo mismo que concentrar a vacío en el reactor («Destilación y concentración»). La NTP 464 pide no llenar demasiado el balón, no llevar a sequedad si se pueden formar peróxidos y dejar enfriar antes de romper el vacío.
- **pHmetro**: lo tienes en «Potenciometría y conductimetría».

### La vitrina de gases a fondo
La **vitrina de gases** (*fume cupboard*; en muchos laboratorios la llaman campana extractora, *fume hood*) es un recinto ventilado: el aire del laboratorio entra por la abertura frontal, arrastra los vapores hacia el fondo y un ventilador los saca por un conducto. La **guillotina** (*sash*) es la pantalla móvil que cierra esa abertura. Es una protección colectiva, y el Real Decreto 374/2001 (artículo 5) pone las medidas colectivas por delante de los equipos de protección individual.

La NTP 677 dice que quien más la estropea es el propio usuario. Sus reglas:

- Nunca trabajar con la extracción parada: mirar el indicador de caudal y que no esté en alarma.
- No usarla como almacén: dentro, solo lo indispensable, sin tapar el deflector trasero, la ranura del fondo por la que sale el aire.
- Trabajar a 15 o 20 cm como mínimo del plano de la abertura (la NTP 672 dice que nunca a menos de 10 cm), lo más abajo posible.
- Abrir la guillotina lo mínimo, por debajo de la altura máxima de trabajo, sin meter la cabeza y sin abrir a la vez las hojas vertical y horizontal.
- Pocas fuentes de calor y movimientos lentos: el calor y los brazos crean remolinos.
- Si falla la aspiración: cerrar la guillotina, avisar y señalizarla como averiada. Al acabar: limpiarla, cerrarla y dejarla en marcha hasta que salga la contaminación.

**Qué se comprueba.** La NTP 677 aconseja revisar cada semana el indicador de caudal y su alarma, y cada año medir la velocidad del aire en el plano de la guillotina: vitrina vacía, a su altura de trabajo, anemómetro calibrado de 0,1 a 2,0 m/s, una rejilla de puntos y al menos 60 s en cada uno. Con la velocidad media sale el caudal:

> Caudal (m³/s) = velocidad media (m/s) × superficie de la abertura (m²)

La nota pide además que el aire entre parejo: la media global, por encima del 80 % del valor fijado, y cada punto, por encima del 85 % de esa media.

**Qué velocidad.** No hay una cifra única. La NTP 646, de 2004, pide al ventilador al menos 0,3 m/s en la boca con la pantalla del todo abierta y recoge recomendaciones de varias fuentes entre 0,3 y 0,75 m/s según la toxicidad. La NTP 672 añade que nunca debe pasar de 1 m/s, porque crea remolinos y apaga mecheros. La NTP 1200, de 2024, recoge que el aire de la sala no debe pasar de 0,2 m/s a 400 mm de la guillotina: las corrientes le restan contención, y por eso la vitrina va lejos de puertas y pasillos. La cifra que vale en tu laboratorio es la del ensayo de recepción, que figura en la placa de la vitrina.

**Lo que no hace.** La NTP 1188 advierte que la vitrina de gases está pensada para gases: el polvo de un principio activo potente pide otra contención («Exposición a productos químicos a fondo»). Y la NTP 672 desaconseja las vitrinas de recirculación con filtro para volátiles muy peligrosos: no hay filtro universal.

### Riesgos típicos y sus medidas
| Riesgo | De dónde viene | Medida (NTP) |
|---|---|---|
| Cortes | Vidrio roto o forzado | Revisar y desechar piezas dañadas; guantes gruesos para desatascar (433) |
| Quemadura térmica | Placas, baños, estufa, mufla | Termostato de seguridad; guantes de calor (433) |
| Quemadura química | Salpicadura al trasvasar | Gafas o pantalla; guantes impermeables al producto (464) |
| Inhalación | Vapores de disolventes y ácidos | Trabajar en la vitrina; tapar los frascos (433, 464) |
| Incendio | Vapores de disolvente y una chispa | Sin llamas; calentar con baño; extintor y manta cerca (433, 464) |
| Reacción inesperada | Mezclar productos o residuos | Saber qué hay en cada envase; añadir despacio (464, 480) |
| Implosión | Vidrio a vacío | Vidrio de pared gruesa, red o cinta, romper el vacío despacio (464) |
| Electricidad | Aparatos y cables | Diferencial y toma de tierra; sin ladrones ni alargaderas fijas (433) |

Dos detalles que se olvidan:

- **El refrigerante.** Si se corta el agua, escapan vapores. La NTP 433 pide un sistema que corte el calor si falta el agua y tubos bien sujetos.
- **El orden del vacío.** Al destilar a vacío, primero el vacío y luego el calor; al acabar, enfriar y después dejar entrar el aire, porque el aire en un balón caliente puede inflamar el residuo (NTP 464).

### Productos químicos en el laboratorio
**La etiqueta.** Según el Reglamento CLP (artículo 17), un producto peligroso llega con proveedor, identificador del producto, pictogramas, palabra de advertencia, frases H y frases P. El pictograma es un cuadrado apoyado en un vértice, con símbolo negro sobre fondo blanco y marco rojo (anexo I, 1.2.1). Los tienes en «Pictogramas, frases H y P y fichas de datos de seguridad».

**Lo que preparas tú.** El Real Decreto 485/1997 (anexo VII) pide etiquetar así los recipientes con productos peligrosos; solo exceptúa los de uso breve o contenido cambiante, y entonces exige medidas que protejan igual. La NTP 432 añade: etiquetar las disoluciones preparadas y no reutilizar un envase sin quitar su etiqueta. En un laboratorio GMP, la ICH Q7 (apartado 11.16) pide prepararlas y etiquetarlas según un procedimiento escrito, con fecha de uso límite. Juntando todo, una etiqueta de disolución preparada lleva:

- nombre y concentración (y factor, si se valoró);
- pictogramas y palabra de advertencia, si es peligrosa;
- fecha de preparación y fecha de caducidad;
- quién la preparó y la referencia del registro de preparación.

**Trasvases.** Según la NTP 725, es la operación con más accidentes. Por eso: gafas y guantes también para cantidades pequeñas, bandeja debajo, frasco tapado al acabar, sin llamas cerca y, con inflamables, recipientes conectados entre sí y a tierra contra la electricidad estática.

**Poco en la mesa.** El Real Decreto 374/2001 (artículo 4) obliga a reducir los agentes químicos peligrosos «al mínimo necesario». La NTP 725 lo traduce: en la mesa, solo lo del día.

**Almacenar en el laboratorio.** Según la NTP 725:

- Nada de frascos de más de medio litro en estantes altos; inflamables y cancerígenos, mejor en armarios.
- Separar incompatibles. Según su tabla, los explosivos van siempre aparte; los comburentes, lejos de inflamables, tóxicos y corrosivos; los inflamables, lejos de los tóxicos, y de los corrosivos si estos van en envases frágiles. Tóxicos, corrosivos y nocivos pueden compartir sitio.
- Vigilar los productos viejos: con el tiempo pueden polimerizar, formar peróxidos o reventar el envase.

Para los armarios de inflamables manda hoy el Real Decreto 656/2017 (instrucción técnica MIE APQ-10, artículo 21): armario certificado como tipo 90, letrero de «inflamable», como mucho 500 litros de líquidos y, de ellos, solo 250 litros de productos H222 a H225, con un extintor cerca.

**La ficha de datos de seguridad** (FDS) tiene que estar a mano. La sección 7 dice cómo almacenar y la 10, con qué no mezclar.

### Los residuos del laboratorio
La NTP 480 propone siete grupos de recogida separada:

| Grupo | Qué va | Ejemplo |
|---|---|---|
| I. Halogenados | Disolventes con más del 2 % de halógenos | Diclorometano |
| II. No halogenados | Disolventes con menos del 2 % de halógenos | Metanol, tolueno |
| III. Disoluciones acuosas | Básicas, con metales, mezclas agua y disolvente | Fase móvil metanol y agua |
| IV. Ácidos | Ácidos inorgánicos concentrados (más del 10 %) | Restos de ácido clorhídrico |
| V. Aceites | Aceites minerales, de baños | Aceite de un baño calefactor |
| VI. Sólidos | Sólidos químicos y material desechable contaminado | Puntas, filtros, gel de sílice |
| VII. Especiales | Muy reactivos, muy tóxicos, caducados, sin identificar | Sodio, peróxidos |

El vidrio sin contaminar es residuo urbano; el manchado, sólido contaminado.

Reglas de la nota: envases cerrados, llenos como mucho al 90 %, los grandes en el suelo y los pequeños en estantería (nunca a más de 170 cm de altura), fuera de las zonas de paso, y nunca manipular residuos en solitario. Cada envase lleva la etiqueta del grupo, el componente principal, sus pictogramas, el productor y las fechas de inicio y fin de llenado. Se vierte despacio y se para si se calienta o suelta gas, porque los residuos mezclados reaccionan: ácidos con bases, oxidantes con materia orgánica, agua con metales alcalinos o hidruros. Los del grupo VII no se mezclan nunca.

¿Y el fregadero? La NTP 480 no manda ninguno de sus siete grupos al desagüe: todos se envasan para el gestor autorizado. Si algo se puede tirar, lo dice el procedimiento, dentro de la autorización de vertido. Plazos y códigos legales, en «Almacenamiento, emergencias y residuos a fondo».

### Normas de trabajo
La NTP 432 resume las de siempre:

- **Orden y limpieza**: recoger enseguida cualquier vertido, por pequeño que sea.
- **No comer, beber ni fumar**, ni usar material de laboratorio para bebidas, ni **pipetear con la boca**.
- **Bata abrochada, pelo recogido y gafas de seguridad**, sin colgantes ni mangas anchas.
- **Guantes impermeables al producto concreto** («Los equipos de protección individual a fondo») y manos lavadas al salir.
- **No trabajar solo**, sobre todo fuera de horario o en operaciones con riesgo.
- **Nada nuevo sin autorización**, ni experimentos ni aparatos.

**Un derrame pequeño.** Actuar rápido con el absorbente o neutralizante adecuado (la NTP 725 descarta el serrín para inflamables y corrosivos) y llevar lo usado a residuos. Si la contaminación es débil, la NTP 432 propone ventilar y poner la vitrina en marcha con la pantalla abierta; si es importante, evacuar y avisar al equipo de intervención.

**Ojos y piel.** Agua enseguida, 10 a 15 minutos; los ojos, 15 a 20 minutos en el lavaojos; sin neutralizar, y al médico con la etiqueta o la FDS (NTP 432). Más en «Almacenamiento, emergencias y residuos a fondo».

### Cuatro cuentas de cada día
**1. Diluir en matraz aforado.** Al diluir, la cantidad de soluto no cambia, solo el volumen:

> C₁ × V₁ = C₂ × V₂

Quieres 250 mL de ácido clorhídrico 0,1 mol/L a partir de uno de 1 mol/L (valores de ejemplo). V₁ = 0,1 × 250 / 1 = 25,0 mL. Pones agua en el matraz de 250 mL, añades los 25,0 mL de ácido con pipeta aforada (ácido sobre agua), dejas enfriar, enrasas y mezclas.

**2. Litros en un armario de residuos.** Un armario bajo de seguridad tiene 12 garrafas de 5 L de residuo no halogenado (valor de ejemplo). Llenas al 90 %, cada una lleva 4,5 L: 12 × 4,5 = 54 L. Si ese residuo es H225 y va en un armario de inflamables, sigue lejos del tope de 250 litros del artículo 21.

**3. El caudal de la vitrina.** Velocidad media medida 0,5 m/s en una abertura de 1,2 m × 0,4 m (valores de ejemplo). Superficie: 0,48 m². Caudal: 0,5 × 0,48 = 0,24 m³/s, es decir, 864 m³/h.

**4. Tiempo de exposición.** Un analista prepara muestras con tolueno fuera de la vitrina durante 1,5 horas a 60 mg/m³ (valor de ejemplo) y el resto del turno no está expuesto. Exposición diaria: 60 × 1,5 / 8 = 11,25 mg/m³, un 5,9 % del VLA-ED del tolueno, 192 mg/m³ (lo viste en «Exposición a productos químicos a fondo»).

En el laboratorio manda siempre el procedimiento vigente (SOP): la vitrina, la velocidad, el contenedor y la etiqueta son los que diga el tuyo.
`,
  plant: `
Turno de tarde. La hoja del lote ficticio del intermedio PX-52 pide un control en proceso tras concentrar a vacío en el reactor R-311: metanol residual por cromatografía de gases. Tomas la muestra con el tomamuestras cerrado, la pasas a un vial y la etiquetas en el sitio: lote, equipo, punto de muestreo, paso de la hoja, fecha, hora y tus iniciales.

En el laboratorio de control de calidad la analista te pide que la dejes en la vitrina VG-02, porque el vial huele a metanol. Al acercarte ves que el indicador de caudal parpadea en alarma. Ella deja lo que estaba haciendo, cierra la guillotina, cuelga el cartel de «fuera de uso» y avisa a mantenimiento. La muestra se queda en la VG-03, que funciona, a más de 15 cm del borde.

Mientras espera, la analista prepara 100 mL de una disolución diluida a partir de una madre en matraz aforado. Etiqueta el matraz con nombre, concentración, pictogramas, fecha de preparación, caducidad, iniciales y el número del registro. Los restos de metanol del vial anterior van a la garrafa de no halogenados, que está al 70 %, cerrada y en el suelo.

Una hora después te llega el resultado por el sistema del laboratorio: metanol por debajo del límite de la hoja. El paso siguiente puede empezar.

Al día siguiente mantenimiento cambia la correa del ventilador de la VG-02, mide la velocidad en la abertura, compara con el valor de la placa y la devuelve al servicio con su registro.
`,
  batchRecord: `
El laboratorio tiene sus propios registros (cuaderno, hojas de trabajo o el sistema informático del laboratorio, *LIMS*), con las mismas reglas ALCOA+. En tu hoja de producción (*batch record*) verás lo que une la planta con el laboratorio:

- **Toma de muestra**: paso de la hoja, equipo (p. ej. R-311), punto de muestreo, fecha, hora, cantidad, recipiente y tu firma.
- **Identificación**: código de lote y de muestra tal como van en la etiqueta del vial.
- **Entrega**: hora de entrega al laboratorio y, si el procedimiento lo pide, quién la recibe.
- **Resultado del control en proceso**: valor numérico con su unidad (p. ej. metanol 0,4 %), no «cumple», con el número de análisis y el límite de la hoja.
- **Decisión**: seguir, repetir el paso o avisar, según lo que diga la hoja.
- **Si haces tú el control en planta**: equipo usado y su verificación, disolución o reactivo usado con su código y caducidad, y el resultado firmado en el momento.
- **Residuos**: si la hoja lo pide, contenedor al que fue el resto de la muestra.
- **Incidencias**: muestra derramada o mal etiquetada, vitrina averiada, repetición de la toma y su motivo.
`,
  terms: [
    { es: "Laboratorio de control de calidad", en: "Quality control laboratory (QC lab)", def: "Laboratorio que analiza materias primas, muestras de proceso y producto final para decidir si cumplen su especificación." },
    { es: "Control en proceso", en: "In-process control (IPC)", def: "Análisis durante la fabricación para seguir o ajustar el proceso; su resultado va a la hoja de producción." },
    { es: "Vidrio borosilicato", en: "Borosilicate glass", def: "Vidrio de laboratorio que se dilata poco con el calor y soporta mejor los cambios de temperatura." },
    { es: "Vitrina de gases", en: "Fume cupboard / fume hood", def: "Recinto ventilado con abertura frontal por el que el aire arrastra gases y vapores hacia un conducto de extracción." },
    { es: "Guillotina", en: "Sash", def: "Pantalla móvil de la vitrina que regula la abertura de trabajo y protege de salpicaduras." },
    { es: "Velocidad frontal", en: "Face velocity", def: "Velocidad media del aire que entra por el plano de la guillotina; se mide con anemómetro." },
    { es: "Deflector", en: "Baffle", def: "Panel del fondo de la vitrina que reparte la aspiración; no se tapa." },
    { es: "Rotavapor", en: "Rotary evaporator", def: "Evaporador de laboratorio que gira un balón en un baño caliente a vacío y condensa el disolvente." },
    { es: "Desecador", en: "Desiccator", def: "Recipiente cerrado con desecante, a veces a vacío, para guardar muestras sin humedad." },
    { es: "Implosión", en: "Implosion", def: "Rotura hacia dentro de un recipiente a vacío, que proyecta trozos de vidrio." },
    { es: "Trasvase", en: "Transfer (decanting)", def: "Pasar un líquido de un envase a otro; la operación con más accidentes en el almacenamiento." },
    { es: "Armario de seguridad", en: "Safety storage cabinet", def: "Armario resistente al fuego para inflamables u otro tipo de productos, con límite de cantidad." },
    { es: "Disolvente halogenado", en: "Halogenated solvent", def: "Disolvente con cloro, bromo u otro halógeno; según la NTP 480, más del 2 %. Se recoge aparte." },
    { es: "Material desechable contaminado", en: "Contaminated disposable material", def: "Puntas, filtros o guantes manchados de producto químico; residuo sólido, no basura común." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Tienes que preparar 500 mL de una disolución 0,2 mol/L a partir de una disolución madre de 2 mol/L. ¿Cuántos mL de disolución madre necesitas?",
      answer: 50,
      tolerance: 0.01,
      unit: "mL",
      explain: "C₁ × V₁ = C₂ × V₂, así que V₁ = 0,2 × 500 / 2 = 50 mL, que se enrasan con agua hasta 500 mL en el matraz aforado.",
    },
    {
      kind: "choice",
      q: "Vas a dejar una muestra con disolvente en la vitrina y ves el indicador de caudal en alarma. ¿Qué haces?",
      options: [
        "Dejo la muestra al fondo, que ahí aspira algo, y aviso luego",
        "Abro del todo la guillotina para que entre más aire en la vitrina",
        "No la uso, cierro la guillotina, aviso y la señalizo como averiada",
        "Enciendo un ventilador delante de la vitrina para ayudar a la extracción",
      ],
      answer: 2,
      explain: "La NTP 677: ante una anomalía en la aspiración, cerrar la guillotina, avisar a quien corresponda y señalizar la vitrina como fuera de uso. Nunca se trabaja con la extracción fallando.",
    },
    {
      kind: "number",
      q: "En la revisión anual se mide una velocidad media de 0,45 m/s en una abertura de 1,5 m de ancho por 0,4 m de alto. ¿Cuál es el caudal de aspiración en m³/h?",
      answer: 972,
      tolerance: 0.01,
      unit: "m³/h",
      explain: "Superficie: 1,5 × 0,4 = 0,6 m². Caudal: 0,45 × 0,6 = 0,27 m³/s. Por 3600 s que tiene una hora: 972 m³/h.",
    },
    {
      kind: "choice",
      q: "Un compañero trabaja en la vitrina con el vaso a 5 cm del borde, la guillotina subida del todo y la vitrina llena de frascos. ¿Qué está haciendo mal?",
      options: [
        "Todo: lejos del borde, guillotina baja y solo lo indispensable dentro",
        "Solo la guillotina: lo demás no influye en cómo aspira la vitrina",
        "Nada: mientras el ventilador funcione la vitrina protege igual",
        "Solo los frascos: la distancia al borde da igual si hay aspiración",
      ],
      answer: 0,
      explain: "La NTP 677 pide trabajar a 15 o 20 cm del plano de la abertura, abrir la guillotina lo mínimo y no usar la vitrina como almacén. Los tres fallos dejan escapar vapores.",
    },
    {
      kind: "number",
      q: "En el armario de residuos hay 8 garrafas de 5 L y 2 bidones de 30 L, todos llenos al 90 %. ¿Cuántos litros de residuo hay en total?",
      answer: 90,
      tolerance: 0.01,
      unit: "L",
      explain: "Garrafas: 8 × 5 × 0,9 = 36 L. Bidones: 2 × 30 × 0,9 = 54 L. Total: 36 + 54 = 90 L.",
    },
    {
      kind: "choice",
      q: "Tienes un resto de diclorometano y otro de metanol, y hay sitio en la garrafa de no halogenados. ¿Qué haces?",
      options: [
        "Junto los dos en la garrafa de no halogenados, que es la que tiene sitio",
        "El diclorometano a halogenados y el metanol a no halogenados, por separado",
        "Los tiro por el fregadero con mucha agua, porque son cantidades pequeñas",
        "Los dejo en la vitrina hasta que se evaporen solos y así no hay residuo",
      ],
      answer: 1,
      explain: "El diclorometano lleva cloro: es halogenado (grupo I de la NTP 480). El metanol va a no halogenados (grupo II). Mezclarlos lo convertiría todo en halogenado, y evaporar residuos en la vitrina no es gestionarlos.",
    },
    {
      kind: "number",
      q: "Un analista trabaja 2 horas a 80 mg/m³ de tolueno y media hora a 200 mg/m³, y el resto de las 8 horas no está expuesto. ¿Cuál es su exposición diaria en mg/m³?",
      answer: 32.5,
      tolerance: 0.02,
      unit: "mg/m³",
      explain: "ED = (80 × 2 + 200 × 0,5) / 8 = (160 + 100) / 8 = 32,5 mg/m³, por debajo del VLA-ED de 192 mg/m³.",
    },
    {
      kind: "choice",
      q: "Al acabar de concentrar una muestra en el rotavapor, ¿cuál es el orden seguro?",
      options: [
        "Romper el vacío enseguida y sacar el balón caliente del baño",
        "Apagar la extracción y dejar el balón a vacío para el siguiente turno",
        "Llevar el balón a sequedad total y romper el vacío con el baño caliente",
        "Apartar el balón del baño, dejarlo enfriar y romper el vacío despacio",
      ],
      answer: 3,
      explain: "La NTP 464 pide esperar al enfriamiento del balón antes de eliminar el vacío y hacerlo de forma gradual: el aire en un balón caliente puede inflamar el residuo.",
    },
    {
      kind: "choice",
      q: "Has preparado una disolución de ácido diluido en un matraz aforado. ¿Qué lleva su etiqueta como mínimo?",
      options: [
        "Solo el nombre del ácido, porque la concentración ya está en el registro",
        "Nombre, concentración, peligros, fecha, caducidad, quién y el registro",
        "La fecha y tus iniciales, porque el resto lo sabe todo el laboratorio",
        "Nada mientras se use el mismo día: la etiqueta se pone al guardarla",
      ],
      answer: 1,
      explain: "La NTP 432 pide etiquetar las disoluciones preparadas y la ICH Q7 (11.16) hacerlo según procedimiento con fecha de uso límite: nombre, concentración, pictogramas, fecha, caducidad, quién la preparó y su registro.",
    },
    {
      kind: "choice",
      q: "Se rompe en la mesa un frasco pequeño de un disolvente inflamable. ¿Qué es lo correcto?",
      options: [
        "Recogerlo con serrín, que es lo que más absorbe, y tirarlo a la papelera",
        "Esperar a que se evapore con la ventana cerrada para no extender el olor",
        "Apagar llamas y chispas, absorber con el absorbente de la FDS y llevarlo a residuos",
        "Echar agua abundante para diluirlo y empujarlo hasta el desagüe del suelo",
      ],
      answer: 2,
      explain: "La NTP 725 pide actuar rápido con absorbentes adecuados, descarta el serrín para inflamables y manda lo usado a un recipiente de residuos. Antes, se eliminan las fuentes de ignición.",
    },
  ],
};
