import type { Lesson } from "./types";

export const almacenAFondo: Lesson = {
  slug: "almacen-a-fondo",
  level: 17,
  order: 4,
  title: "Almacenamiento a fondo: guardar materiales y producto sin que pierdan calidad ni provoquen un accidente",
  titleEn: "Storage in depth: keeping materials and product safe and in specification",
  minutes: 40,
  summary:
    "Qué piden ICH Q7, las GMP europeas y la OMS a un almacén, cómo se vigila la temperatura y qué haces si se sale de rango, por qué manda el estado y no la posición, cuándo se aplica el Reglamento de almacenamiento de productos químicos, qué se guarda con qué y cómo se mueven, apilan, trasvasan y cuentan los envases, con sus cuentas.",
  body: `
En «Almacenamiento: condiciones, FEFO y fechas» viste las ideas básicas, y en «Almacenamiento, emergencias y residuos a fondo», las reglas de la ITC MIE APQ-10 para bidones. Aquí entramos en el día a día del almacén de una planta de principios activos.

### Las dos caras del almacén
Un almacén tiene que cumplir dos cosas a la vez:

- **Calidad** (*quality*): que el material no se degrade, no se contamine, no se mezcle con otro y no se confunda de lote ni de estado. ICH Q7 lo resume así: los materiales se manipulan y almacenan de forma que se evite su degradación, su contaminación y la contaminación cruzada (7.40).
- **Seguridad** (*safety*): que nada arda, reaccione con su vecino, se derrame o caiga encima de alguien. De eso se ocupan el Reglamento de almacenamiento de productos químicos (Real Decreto 656/2017) y las notas técnicas de prevención (NTP) del Instituto Nacional de Seguridad y Salud en el Trabajo (INSST).

Piensa en la nevera de casa: si la temperatura sube, la leche se estropea (calidad); si un bote se cae del estante de arriba, alguien se hace daño (seguridad). En planta, con toneladas, las dos cosas se vigilan por escrito.

### Lo que piden las GMP al almacén
| Requisito | Dónde lo dice |
|---|---|
| Bidones de cartón, sacos y cajas, separados del suelo y con espacio para limpiar e inspeccionar | ICH Q7, 7.41 |
| Condiciones y tiempo de almacenamiento que no dañen la calidad; normalmente, se usa primero lo más antiguo | ICH Q7, 7.42 |
| Temperatura y humedad controladas cuando haga falta, con registro si son críticas | ICH Q7, 10.10 |
| Zonas separadas para lo que está en cuarentena, rechazado, devuelto o retirado, salvo que otro sistema impida su uso | ICH Q7, 10.11 |
| Almacenes limpios y secos, dentro de límites de temperatura; las condiciones especiales se aseguran, comprueban y vigilan | EudraLex, volumen 4, capítulo 3, 3.19 |
| Protección contra la entrada de insectos y otros animales | EudraLex, capítulo 3, 3.4 |
| Material fuera del suelo, lejos de paredes y techo, sin sol directo, con palés limpios y en buen estado | OMS, informe técnico 1025, anexo 7, 12.23 |
| Programa de control de roedores y plagas; prohibido comer, beber o fumar donde se guarda producto | OMS, anexo 7, 12.8 y 12.9 |
| Envases rotos o dañados, fuera del stock utilizable y apartados | OMS, anexo 7, 12.32 |

Algunos materiales en envases adecuados pueden guardarse a la intemperie si la etiqueta sigue legible y el envase se limpia antes de abrirlo (ICH Q7, 7.43).

### Lo que significa la etiqueta
Las condiciones de almacenamiento tienen que cumplir lo que dice la etiqueta (OMS, anexo 7, 12.34), y las fechas de reanálisis o caducidad se basan en estudios de estabilidad (ICH Q7, 11.61). La OMS pide evitar frases vagas como «conservar en condiciones ambientales» y escribir límites reales, por ejemplo «conservar por debajo de 25 °C». Su tabla A7.1 traduce las frases habituales:

| Frase de la etiqueta | Límites recomendados |
|---|---|
| Conservar a temperatura ambiente controlada | 15 a 25 °C |
| Conservar en lugar frío o fresco | 8 a 15 °C |
| Conservar en refrigerador | 5 ± 3 °C, es decir, de 2 a 8 °C |
| Conservar en congelador | −20 ± 5 °C, es decir, de −25 a −15 °C |
| Conservar en lugar seco / proteger de la humedad | Humedad relativa no superior al 60 % |
| Proteger de la luz | En el envase original resistente a la luz del fabricante |

La OMS aclara que son valores recomendados, basados en las farmacopeas. Si la etiqueta de tu material da un número, manda ese número.

### Mapeo, registro y alarmas
Para saber que una sala cumple, primero se hace un **mapeo de temperaturas** (*temperature mapping*): se reparten sensores por todo el volumen y se registra cómo varía la temperatura vacía y con carga normal. Así se localizan los puntos más calientes y más fríos, las zonas donde no se debe guardar nada (junto a un evaporador o una fuente de calor) y cuánto tarda en salirse de límites si falla la corriente. Se repite si se modifica la sala o el equipo de frío (OMS, informe técnico 961, anexo 9, 4.7). Los sensores que controlan el frío o el calor se colocan en esos puntos extremos (4.5.1).

Lo que pide ese mismo anexo para salas y cámaras de productos sensibles a la temperatura:

- Sensores de vigilancia con exactitud de ±0,5 °C o mejor, calibrados al menos una vez al año (4.5.2 y 4.10.1).
- Al menos **seis registros por hora**, uno cada 10 minutos, y que el sistema siga registrando si se va la luz (4.5.2).
- Comprobar y anotar las temperaturas al menos dos veces al día, mañana y tarde, y revisar los registros cada mes (9.3.1).
- Alarmas de alta y de baja con aviso visual, preferiblemente también sonoro y con aviso telefónico fuera de horario; su funcionamiento se prueba al menos cada seis meses (4.6.1 y 4.10.3).
- Guardar los registros al menos un año después del final de la vida útil del producto, o lo que diga la ley (9.3.1).

### Cuando el registrador marca fuera de rango
Una **excursión de temperatura** (*temperature excursion*) es un periodo en que el producto ha estado fuera de su rango de almacenamiento (OMS, informe técnico 961, glosario). La OMS pide procedimientos escritos para investigarlas (anexo 7, 18.40) e ICH Q7 recuerda que un material se reevalúa si ha estado expuesto a calor o humedad (7.50). Lo que te toca:

1. **No lo arregles tú moviendo cajas a escondidas.** Avisa al responsable según tu procedimiento.
2. **Anota** la hora del aviso, la lectura, la sala y lo que ves (puerta abierta, equipo parado).
3. **Calidad** decide si el material se bloquea mientras se evalúa. Con el registro calcula dos números: cuánto tiempo estuvo fuera y a cuánta temperatura.

**Cuenta 1. Tiempo fuera de rango.** Almacén con límite «no superior a 25 °C» (valor de ejemplo). El registrador anota cada 10 minutos:

| Hora | 14:10 | 14:20 | 14:30 | 14:40 | 14:50 | 15:00 | 15:10 | 15:20 | 15:30 |
|---|---|---|---|---|---|---|---|---|---|
| °C | 24,9 | 25,4 | 26,1 | 26,8 | 27,0 | 26,5 | 25,9 | 25,3 | 24,8 |

Hay 7 lecturas por encima de 25 °C. Cada una representa unos 10 minutos: 7 × 10 = 70 minutos. Como no sabes en qué minuto cruzó el límite, el tiempo real está entre 60 minutos (de 14:20 a 15:20) y 80 (de 14:10 a 15:30).

**Cuenta 2. Temperatura media durante la excursión.** Suma de las 7 lecturas: 25,4 + 26,1 + 26,8 + 27,0 + 26,5 + 25,9 + 25,3 = 183,0. Media: 183,0 / 7 = 26,1 °C. La máxima fue 27,0 °C. Si el efecto es aceptable lo decide Calidad con los datos de estabilidad, no tú.

### Rotación: FIFO, FEFO y el estado
- **FIFO** (*first in, first out*): sale primero lo que entró primero.
- **FEFO** (*first expired, first out*): sale primero lo que caduca antes. Es el principio que pide la OMS (anexo 7, 12.30).

**Cuenta 3. FIFO frente a FEFO.** Hoy es el 21 de noviembre de 2026 (fecha de ejemplo). Tres lotes del mismo reactivo:

| Lote | Entró | Caduca | Días que le quedan |
|---|---|---|---|
| A | 10/02/2026 | 30/09/2027 | 313 |
| B | 04/05/2026 | 30/04/2027 | 160 |
| C | 20/08/2026 | 31/01/2028 | 436 |

Con FIFO sacarías el A, porque llegó antes. Con FEFO sacas el B: le quedan 160 días, menos que a nadie. Pero si el B está bloqueado por una investigación, no sale: coges el siguiente aprobado por FEFO, el A. Por eso en un almacén GMP la ubicación no decide nada: decide el **estado** del lote. ICH Q7 exige un sistema que identifique el estado de cada lote (7.24).

**Cuenta 4. Fecha de reanálisis.** Un API ficticio se fabricó el 15/03/2025 y su periodo de reanálisis es de 24 meses (valor de ejemplo). Fecha de reanálisis: 15/03/2027. Desde el 21/11/2026 quedan 114 días. La fecha se basa en datos de estabilidad y en API lo habitual es usar fecha de reanálisis, no de caducidad (ICH Q7, 11.61). La OMS pide revisar el stock con regularidad para detectar lo que se acerca a su fecha y apartarlo (informe técnico 1025, anexo 7, 13.4).

### Estados y zonas
| Estado | Qué significa | Dónde va |
|---|---|---|
| Cuarentena (*quarantine*) | Espera la decisión de Calidad | Zona marcada, de acceso restringido, o bloqueo en sistema |
| Aprobado (*released*) | Se puede usar | Zona de aprobados |
| Rechazado (*rejected*) | No cumple | Apartado y guardado de forma segura hasta devolverlo o destruirlo |
| Devuelto (*returned*) | Vuelve del cliente | Cuarentena hasta que Calidad decida |
| Retirado (*recalled*) | Retirado del mercado | Zona separada |

ICH Q7 pide controlar los rechazados con un sistema de cuarentena que impida su uso (7.44). La OMS añade que se segreguen y se guarden de forma segura (anexo 7, 12.18). Cuando el estado se asegura con zonas separadas, deben estar claramente marcadas y con acceso solo para personal autorizado; un sistema informático que sustituya a la separación física debe dar la misma seguridad y estar validado (EudraLex capítulo 3, 3.21; OMS anexo 7, 12.26).

### El almacén químico: cuándo entra el Reglamento
El artículo 2 del Reglamento de almacenamiento de productos químicos excluye los almacenes pequeños. Su tabla I fija, para cada peligro, la capacidad por debajo de la cual no se aplica. Algunos valores:

| Peligro | Indicación | Capacidad |
|---|---|---|
| Líquidos inflamables, categorías 1 y 2 | H224, H225 | 50 L |
| Líquidos inflamables, categoría 3 | H226 | 250 L |
| Corrosión cutánea 1A / 1B / 1C | H314 | 200 / 400 / 1000 L o kg |
| Toxicidad aguda, categoría 1 | H300, H310, H330 | 50 L o kg |
| Sólidos comburentes, categoría 3 | H272 | 1250 kg |

La nota de la tabla añade que la suma de los cocientes entre lo almacenado y el límite, agrupados por tipo de peligro, nunca puede pasar de 1. Aunque quede excluido, se siguen las medidas de seguridad del fabricante y su ficha de datos de seguridad (FDS).

**Cuenta 5. Suma de cocientes.** Un taller guarda 25 L de un líquido H225 y 150 L de otro H226 (valores de ejemplo). Los dos son peligros físicos. Cocientes: 25 / 50 = 0,5 y 150 / 250 = 0,6. Suma: 1,1. Cada uno queda por debajo de su límite, pero la suma pasa de 1: el Reglamento se aplica. Con 20 L y 100 L la suma sería 0,4 + 0,4 = 0,8, y quedaría excluido.

### Los tanques de disolvente: la ITC MIE APQ-1
Los disolventes a granel van en **recipientes fijos** (más de 3000 L o no trasladables con producto, según la MIE APQ-0). Los regula la MIE APQ-1, que los clasifica por su punto de inflamación: clase B por debajo de 55 °C (subclase B1 por debajo de 38 °C, B2 de 38 a 55 °C) y clase C entre 55 y 100 °C (artículo 4). En un mismo cubeto solo van líquidos de la misma clase o de riesgo inferior, nunca productos que reaccionen entre sí, y los combustibles nunca con comburentes (H270, H271, H272) (artículo 12). Del lado GMP, antes de descargar un disolvente nuevo en un tanque con existencias, el lote se identifica, se analiza si procede y se aprueba (ICH Q7, 7.21).

**Cuenta 6. Cubeto de dos tanques.** El cubeto de un tanque ocupa como mínimo lo que el mayor de estos valores: la capacidad del tanque mayor, contando que no existe él pero sí los demás, o el 10 % de la capacidad total sin ningún tanque dentro (artículo 20). Entre la pared del tanque y el pie del cubeto debe haber al menos 1 m. Dos tanques de un disolvente clase B (valores de ejemplo): TK-211, de 50 m³, y TK-212, de 30 m³ y 3 m de diámetro. El 10 % de 80 m³ son 8 m³; manda el mayor, 50 m³. Cubeto interior de 15 m × 10 m = 150 m². El TK-212 sigue ahí y ocupa su huella: π × 1,5² = 7,07 m². Superficie libre: 150 − 7,07 = 142,93 m². Altura que alcanzarían los 50 m³: 50 / 142,93 = 0,35 m. El murete tiene que retener al menos esa altura.

### Qué se guarda con qué
La NTP 725 (2006) recoge esta tabla de almacenamiento conjunto. Usa los símbolos anteriores al Reglamento CLP: bomba que explota (explosivos), llama sobre un círculo (comburentes), llama (inflamables), calavera (tóxicos), líquido que ataca una mano y una superficie (corrosivos) y aspa (nocivos).

| | Explosivos | Comburentes | Inflamables | Tóxicos | Corrosivos | Nocivos |
|---|---|---|---|---|---|---|
| Explosivos | Sí | No | No | No | No | No |
| Comburentes | No | Sí | No | No | No | (2) |
| Inflamables | No | No | Sí | No | (1) | Sí |
| Tóxicos | No | No | No | Sí | Sí | Sí |
| Corrosivos | No | No | (1) | Sí | Sí | Sí |
| Nocivos | No | (2) | Sí | Sí | Sí | Sí |

(1) Juntos si los corrosivos no están en recipientes frágiles. (2) Juntos con ciertas medidas de prevención. La guía del INSST de 2023 actualiza el cruce por indicaciones H (tabla 8), y avisa de que un mismo pictograma puede esconder clases incompatibles: se mira la clase de peligro, no solo el dibujo.

Tres casos:

1. **Un disolvente H225 y un oxidante H272.** La NTP dice «No». La guía de 2023 precisa: no en la misma área, salvo sectorizados con armarios protegidos.
2. **Un ácido en garrafas de vidrio (H314) y un disolvente H225.** La NTP solo los admite juntos si el corrosivo no va en recipiente frágil. La guía de 2023 pide separación física (obra, distancia, cubetos o armarios).
3. **Un ácido y una base, los dos H314.** Ambos corrosivos, pero reaccionan entre sí: como mínimo, cubetos separados (guía de 2023), y nunca en la misma pila o estantería (MIE APQ-10, artículo 26).

Además, los tóxicos (H300, H301, H310, H311, H330, H331, H370) en almacén cerrado no comparten sector de incendio con combustibles (MIE APQ-10, artículo 25). Las botellas de gases se tratan en «Nitrógeno, aire comprimido y vacío a fondo».

### Mover, apilar y trasvasar
**Carretillas elevadoras** (*forklifts*). La NTP 714 resume: solo las conduce personal formado y autorizado, con la llave en poder del operador o de un responsable; se circula con el mástil inclinado hacia atrás y las horquillas a unos 15 cm del suelo, nunca con la carga elevada; si la carga tapa la vista, marcha atrás; nada de llevar o subir personas en las horquillas; antes de elevar, se consulta la tabla de cargas. En zonas con atmósfera inflamable, solo carretillas certificadas para ese uso.

**Transpaletas manuales** (*pallet trucks*). La NTP 319 recomienda no pasar de 1500 kg a mano, dejar al menos 20 cm entre palés, no usarlas en suelos mojados o desiguales y bajar una pendiente solo con freno, por detrás de la carga y sin superar un 5 % aconsejable.

**Altura de las pilas.** Según la NTP 1112, la limitan los propios envases y el alcance de la carretilla, y conviene marcarla en la pared. Para inflamables en bidones o contenedores, la MIE APQ-10 fija alturas máximas por pila (tabla II del artículo 21): 2,7 m para H224, 3,6 m para H225 y 4,5 m para H226. Se pueden duplicar si hay extinción fija, y en palés o estanterías se suman las alturas de los recipientes. Ejemplo con valores de ejemplo: contenedores de 1000 L de un líquido H225, de 1,2 m de alto. Tres en altura suman 3,6 m, dentro del Reglamento; pero si la placa del fabricante solo admite dos, el límite es de dos (2,4 m). Siempre manda el más restrictivo.

**Puesta a tierra al trasvasar inflamables.** Un líquido que fluye se carga de electricidad estática; una chispa enciende los vapores. La NTP 225 pide unir con cables y pinzas el recipiente que se vacía, la bomba y el que se llena, y el conjunto a tierra, con una resistencia inferior a 10⁶ Ω. Señala que en muchos accidentes los cables existían pero nadie los conectó. El tubo de llenado debe llegar a 25 cm o menos del fondo, para no salpicar.

### Inventario y conciliación
La OMS pide registrar cada entrada, salida, pérdida o ajuste y comparar cada cierto tiempo lo que dice el registro con lo que hay; las diferencias se investigan hasta su causa y se corrigen con acciones correctivas y preventivas (anexo 7, 13.1 y 13.2). Para productos sensibles a la temperatura, preferiblemente al menos dos veces al año (informe técnico 961, 8.1.1). Una forma de organizarlo es el **recuento cíclico** (*cycle count*): cada semana se cuenta una parte de las ubicaciones, de modo que al cabo del ciclo se ha contado todo.

**Cuenta 7. Diferencia de inventario.** El sistema dice 3450 kg de un excipiente en sacos de 25 kg, es decir, 138 sacos (valores de ejemplo). Cuentas 136. Faltan 2 sacos, 50 kg: 50 / 3450 × 100 = 1,4 %. No ajustas el sistema para que cuadre: avisas y se busca la causa (un saco mal ubicado, una salida sin registrar).

### El almacén del API terminado
Los bidones del API llevan nombre o código, lote y condiciones de almacenamiento cuando son críticas (ICH Q7, 9.42); la fecha de reanálisis o caducidad va en la etiqueta o en el certificado (9.43). Las condiciones especiales de transporte o almacenamiento se escriben en la etiqueta (10.22). Cada lote se mantiene separado durante la cuarentena y después (OMS, anexo 7, 12.15), y solo sale hacia terceros cuando la unidad de calidad lo ha liberado (ICH Q7, 10.20).

### Lo que vigilas, lo que anotas y lo que nunca haces
- **Vigilas**: estado y fecha en la etiqueta, temperatura de la sala, envases dañados, derrames, plagas, pasillos y salidas libres, alturas de pila.
- **Anotas**: lecturas y alarmas, ubicaciones, salidas con su lote, sobrantes y diferencias de recuento.
- **Nunca**: usas un material sin estado aprobado, mueves un rechazado sin autorización, quitas o cambias una etiqueta de estado, guardas juntos productos incompatibles ni trasvasas un inflamable sin las pinzas puestas.

Los números de esta lección son para entender y estimar. En planta manda siempre el procedimiento vigente (SOP).
`,
  plant: `
Planta ficticia de principios activos, almacén AL-02. Turno de tarde. Ana, operadora de almacén, recibe a las 15:05 un mensaje de alarma del registrador TT-AL-05 de la sala de temperatura controlada (límite de ejemplo, no superior a 25 °C): marca 27,0 °C. Va a la sala, ve que la puerta rápida se ha quedado abierta por un palé mal colocado y avisa al jefe de turno, Íker. Él cierra la puerta y llama a mantenimiento y a Calidad. Ana anota en el registro de incidencias la hora del aviso, la lectura y la causa aparente. No mueve ningún palé.

Al día siguiente, Calidad descarga el registro: 7 lecturas por encima de 25 °C, unos 70 minutos, con una media de 26,1 °C. Los lotes de la sala quedan bloqueados en el sistema mientras se evalúa la desviación.

Mientras tanto, producción pide 200 kg del reactivo ficticio RX-14 para el reactor R-301. El lote más cercano a la salida es el RX-14-0611, pero el escáner del ERP lo marca como bloqueado. El siguiente aprobado con caducidad más próxima es el RX-14-0402, al fondo de la estantería. Ana lo saca con la transpaleta eléctrica y deja el bloqueado donde está.

Por la tarde trasvasa disolvente ficticio SV-9 (H225) de un bidón a una lata de 20 L en la sala de trasvase: conecta las pinzas de tierra al bidón, a la bomba y a la lata antes de abrir. En el recuento semanal de la ubicación B-07 faltan 2 sacos de 25 kg: no toca el sistema y lo comunica. Aparecen en la ubicación B-08, mal registrados en la recepción.
`,
  batchRecord: `
- **Materiales cargados**: código, lote interno, estado aprobado comprobado (escáner o etiqueta) y fecha de reanálisis o caducidad vigente el día de uso.
- **Intermedios almacenados entre etapas**: ubicación, condiciones (temperatura, protección de la luz o de la humedad) y tiempo máximo de espera (*hold time*).
- **Sobrantes**: peso devuelto a almacén y número de su etiqueta.
- **API envasado**: número de envases, lote, condiciones de almacenamiento de la etiqueta y ubicación en cuarentena hasta su liberación.
- **Registro del almacén** (aparte de la hoja): lecturas de temperatura de mañana y tarde, alarmas con hora y acción, recuentos y diferencias, comprobación de pinzas de tierra en trasvases.
- Cualquier excursión o diferencia se anota y se avisa; la desviación la abre quien diga el procedimiento.
`,
  terms: [
    { es: "Mapeo de temperaturas", en: "Temperature mapping", def: "Estudio que mide cómo varía la temperatura dentro de una sala o cámara, vacía y cargada, para hallar los puntos calientes y fríos y las zonas que no deben usarse." },
    { es: "Excursión de temperatura", en: "Temperature excursion", def: "Periodo en que un producto ha estado fuera del rango de temperatura fijado para su almacenamiento o transporte." },
    { es: "Registrador de datos", en: "Data logger", def: "Equipo que mide y guarda la temperatura (o la humedad) a intervalos fijos, por ejemplo cada 10 minutos." },
    { es: "FEFO", en: "First expired, first out", def: "Regla de rotación: sale primero el lote aprobado que caduca o se reanaliza antes." },
    { es: "FIFO", en: "First in, first out", def: "Regla de rotación: sale primero lo que entró primero." },
    { es: "Retirada", en: "Recall", def: "Recogida de un lote ya distribuido; vuelve a una zona separada hasta que Calidad decide." },
    { es: "Producto devuelto", en: "Returned goods", def: "Material que vuelve del cliente; queda en cuarentena hasta su evaluación." },
    { es: "Conciliación de existencias", en: "Stock reconciliation", def: "Comparación entre lo que dice el registro y lo que hay de verdad, con investigación de las diferencias." },
    { es: "Recuento cíclico", en: "Cycle count", def: "Forma de inventariar contando cada vez una parte de las ubicaciones, en lugar de todo el almacén de golpe." },
    { es: "Almacenamiento conjunto", en: "Joint storage", def: "Según la MIE APQ-0, productos en el mismo cubeto, en la misma sala de un edificio o en un mismo recipiente subdividido." },
    { es: "Recipiente fijo", en: "Fixed container (tank)", def: "Recipiente no trasladable con producto, o trasladable de más de 3000 L; los de inflamables los regula la MIE APQ-1." },
    { es: "Pila", en: "Stack", def: "Conjunto de recipientes móviles de un área de almacenamiento; dos pilas son independientes si las separan al menos 1,2 m." },
    { es: "Conexión equipotencial", en: "Bonding", def: "Unión con cable entre recipientes, bomba y tuberías para que no haya diferencia de carga eléctrica entre ellos; el conjunto se pone a tierra." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Un registrador anota la temperatura de un almacén cada 10 minutos. Durante una avería, 9 lecturas seguidas superan el límite. ¿Cuántos minutos estimas que estuvo fuera de rango, contando 10 minutos por lectura?",
      answer: 90,
      tolerance: 0.001,
      unit: "min",
      explain: "Cada lectura representa unos 10 minutos: 9 × 10 = 90 min. El tiempo real está entre 80 y 100 min, porque no se sabe en qué minuto exacto cruzó el límite.",
    },
    {
      kind: "number",
      q: "Las lecturas fuera de rango de una excursión son 26,0; 26,6; 27,2; 26,8 y 25,9 °C. ¿Cuál es la temperatura media durante la excursión?",
      answer: 26.5,
      tolerance: 0.005,
      unit: "°C",
      explain: "Suma: 26,0 + 26,6 + 27,2 + 26,8 + 25,9 = 132,5. Media: 132,5 / 5 = 26,5 °C. Si el efecto es aceptable lo decide Calidad con los datos de estabilidad.",
    },
    {
      kind: "number",
      q: "Hoy es el 1 de diciembre de 2026. Un lote aprobado tiene fecha de reanálisis el 31 de enero de 2027. ¿Cuántos días faltan?",
      answer: 61,
      tolerance: 0.001,
      unit: "días",
      explain: "Quedan 30 días de diciembre (del 1 al 31) más 31 de enero: 30 + 31 = 61 días.",
    },
    {
      kind: "number",
      q: "Un almacén guarda 30 L de un líquido H225 (límite de la tabla I del Reglamento: 50 L) y 100 L de otro H226 (límite: 250 L). ¿Cuánto vale la suma de cocientes?",
      answer: 1,
      tolerance: 0.001,
      unit: "",
      explain: "30 / 50 = 0,6 y 100 / 250 = 0,4. Suma: 0,6 + 0,4 = 1. La nota de la tabla I dice que la suma nunca puede superar 1; con un litro más, el Reglamento ya se aplicaría.",
    },
    {
      kind: "number",
      q: "Un cubeto tiene 120 m² de superficie libre una vez descontada la huella del tanque pequeño. El tanque mayor tiene 42 m³. ¿Qué altura alcanzaría el líquido si se vaciara entero en el cubeto?",
      answer: 0.35,
      tolerance: 0.01,
      unit: "m",
      explain: "Altura = volumen / superficie libre = 42 / 120 = 0,35 m. El murete debe retener al menos esa altura (MIE APQ-1, artículo 20).",
    },
    {
      kind: "number",
      q: "El sistema dice que hay 2000 kg de un reactivo en sacos de 25 kg. En el recuento hay 78 sacos. ¿Qué porcentaje falta respecto a lo que dice el sistema?",
      answer: 2.5,
      tolerance: 0.01,
      unit: "%",
      explain: "Hay 78 × 25 = 1950 kg. Faltan 2000 − 1950 = 50 kg. 50 / 2000 × 100 = 2,5 %. Se avisa y se busca la causa; no se ajusta el sistema para que cuadre.",
    },
    {
      kind: "choice",
      q: "Te piden un reactivo. El lote más cercano caduca en marzo pero el escáner lo marca bloqueado; al fondo hay otro aprobado que caduca en mayo y otro aprobado que caduca en septiembre. ¿Cuál sacas?",
      options: [
        "El de marzo, porque es el que caduca antes",
        "El de septiembre, porque es el más nuevo",
        "El de mayo: el aprobado que caduca antes",
        "El de marzo, y luego avisas a Calidad",
      ],
      answer: 2,
      explain: "FEFO se aplica solo entre lotes aprobados. Un lote bloqueado no sale aunque caduque antes ni aunque esté a mano: manda el estado, no la posición.",
    },
    {
      kind: "choice",
      q: "Suena la alarma de alta temperatura de la cámara de 2 a 8 °C. ¿Qué haces primero?",
      options: [
        "Avisar según el procedimiento y anotar hora, lectura y lo que ves",
        "Pasar todo el producto a otra cámara sin decir nada",
        "Silenciar la alarma y esperar a que baje sola",
        "Bajar la consigna del equipo para compensar",
      ],
      answer: 0,
      explain: "Una excursión se investiga con procedimiento escrito (OMS, anexo 7, 18.40). Tú avisas y anotas; el traslado de emergencia y la evaluación los decide quien diga el SOP.",
    },
    {
      kind: "choice",
      q: "En la zona de inflamables queda un hueco junto a unos bidones de disolvente H225. Un compañero quiere dejar ahí un oxidante sólido H272. ¿Qué dices?",
      options: [
        "Que vale, si se pone una etiqueta de aviso visible",
        "No: comburentes e inflamables no comparten área",
        "Que vale, si el oxidante es un sólido y no líquido",
        "Que vale solo hasta que acabe el turno de tarde",
      ],
      answer: 1,
      explain: "La tabla de la NTP 725 marca «No» entre comburentes e inflamables y la guía del INSST de 2023 solo los admite sectorizados con armarios protegidos.",
    },
    {
      kind: "choice",
      q: "Vas a trasvasar un disolvente inflamable de un bidón metálico a una lata con una bomba portátil. Los cables con pinzas cuelgan de la bomba. ¿Qué haces?",
      options: [
        "Empezar y conectar las pinzas si ves chispas",
        "Conectar solo la pinza del bidón que se vacía",
        "Llenar rápido desde arriba para acabar antes",
        "Conectar bidón, bomba y lata entre sí y a tierra",
      ],
      answer: 3,
      explain: "La NTP 225 pide unir el recipiente que se vacía, la bomba y el que se llena, con el conjunto a tierra, antes de empezar, y llenar con el tubo cerca del fondo.",
    },
  ],
};
