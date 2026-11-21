import type { Lesson } from "./types";

export const maestrosAFondo: Lesson = {
  slug: "datos-maestros-a-fondo",
  level: 18,
  order: 4,
  title: "Datos maestros e integración a fondo",
  titleEn: "Master data and system integration in depth",
  minutes: 38,
  summary:
    "Qué datos maestros hay detrás de cada orden de una planta de API, quién los crea y los aprueba, por qué su cambio pasa por control de cambios, cuatro errores típicos con sus cuentas, cómo se conectan los sistemas y qué se valida en una interfaz.",
  body: `
En [Datos maestros, bases de datos e interfaces](/leccion/datos-maestros-e-integracion) viste la idea: un error en un dato maestro se repite en todos los lotes. Aquí verás qué datos maestros hay detrás de una orden, quién los toca, qué dicen las normas, cómo se equivoca un maestro con números concretos y cómo se pasan los datos entre sistemas.

### La tabla de productos y la tabla de pedidos
Una tienda web tiene una tabla de **productos**: cada camiseta con su referencia, nombre, precio y talla. Se escribe una vez y casi no cambia. Y tiene una tabla de **pedidos**, que crece cada minuto. Cada pedido no copia el precio: apunta a la referencia del producto. Si alguien escribe mal un precio, todos los pedidos de ese día salen mal, aunque ningún cliente se haya equivocado.

En una planta pasa lo mismo:

- **Datos maestros** (*master data*): la tabla de productos. Se definen y aprueban una vez y se usan en cada lote. Por ejemplo, el código de un disolvente y su unidad.
- **Datos de transacción** (*transactional data*): la tabla de pedidos. Nacen con cada operación: la orden, la pesada, el consumo, el resultado.

Tú casi nunca verás un dato maestro «desnudo». Lo verás ya metido en la orden, en la pantalla del MES o en una etiqueta.

### Los datos maestros de una planta de API
Con ejemplos ficticios:

| Dato maestro | Qué es | Ejemplo ficticio |
|---|---|---|
| **Material y su código** | Identidad única de cada materia prima, intermedio o producto | MP-0417, tolueno |
| **Unidad de medida** | Unidad base y unidades alternativas | Base: kg; alternativa: saco |
| **Lista de materiales** (*bill of materials, BOM*) | Qué materiales entran y cuánto, para una cantidad base | 312,0 kg de RX-3 por 1000 kg de AF-33 |
| **Receta maestra** (*master recipe*) | Pasos, parámetros, controles y equipos, con versión | Receta AF-33, versión 4 |
| **Centro de trabajo y equipos** (*work center, equipment*) | Dónde se fabrica y con qué | Línea L2: reactor R-205, centrífuga C-410, secadero S-520 |
| **Especificaciones** | Ensayos y límites que debe cumplir el material | Agua ≤ 0,5 % (valor de ejemplo) |
| **Proveedores aprobados** | A quién se puede comprar cada material | Dos proveedores para el tolueno |
| **Estados de lote** | Estados posibles y quién los cambia | Cuarentena, aprobado, rechazado |
| **Periodo de reanálisis** | Tiempo que sigue apto un material antes de volver a analizarlo | 24 meses (valor de ejemplo) |

### Material, código y unidad
Cada material tiene **un código y solo uno**, como la clave primaria de una tabla. El nombre puede variar («tolueno», «toluene»); el código no. ICH Q7 (6.41) pide que la instrucción maestra liste las materias primas «designadas por nombres o códigos» lo bastante específicos para identificar cualquier característica especial de calidad. Si el tolueno técnico y el farmacéutico compartieran código, el sistema no podría impedir que se cargue el que no toca. Y ICH Q7 (7.20) pide comprobar en la recepción la correspondencia entre el nombre del proveedor y el nombre interno, que también vive en los maestros.

Cada material tiene una **unidad base** (*base unit of measure*), en la que se guarda el stock, y puede tener **unidades alternativas** con su **factor de conversión** (*conversion factor*): «1 saco = 25 kg», «1 bidón = 200 L». ICH Q7 (6.41) pide la cantidad de cada material «incluida la unidad de medida». Para pasar de litros a kilos hace falta la **densidad**, que también es un dato maestro (lo tienes en [Densidad a fondo: pasar de litros a kilos sin equivocarse](/leccion/densidad-a-fondo)).

### Lista de materiales y receta maestra
La lista de materiales da las cantidades para una **cantidad base** de producto, y el sistema las escala:

**cantidad de la orden = cantidad en la lista × (tamaño del lote ÷ cantidad base)**

Con los valores de ejemplo de la tabla, una orden de 1250 kg tiene factor 1250 / 1000 = 1,25, y el sistema pide 312,0 × 1,25 = **390,0 kg** de RX-3. ICH Q7 (6.41) lo prevé: si la cantidad no es fija, la instrucción maestra incluye el cálculo para cada tamaño de lote.

La **receta maestra** es lo que ICH Q7 (6.41) llama instrucciones maestras de producción (*master production instructions*): secuencia, rangos de parámetros, muestreos y controles en proceso con sus criterios, tiempos y rendimientos esperados. En el sistema es un maestro con **versión** y **fechas de validez**, y de él sale cada orden con su hoja. ICH Q7 (6.50) pide comprobar antes de emitir la hoja que es la versión correcta (más en [La hoja de producción a fondo: de la instrucción maestra a la revisión del lote](/leccion/hoja-de-produccion-a-fondo)).

### Equipos, especificaciones, proveedores, estados y reanálisis
- **Centro de trabajo y equipos.** ICH Q7 (6.41) pide indicar el lugar de producción y los equipos principales, y (8.16) que su estado se indique en el equipo o por documentación o sistemas informáticos. Por eso, al escanear el R-205, el MES puede bloquear el paso si figura «sucio».
- **Especificaciones.** ICH Q7 (6.17) las pide para materias primas, intermedios cuando haga falta, APIs y materiales de envasado. En el LIMS cada una es un maestro con ensayos, métodos y límites: un límite mal escrito aprueba lotes malos o rechaza lotes buenos (más en [Especificaciones a fondo: qué tiene que cumplir un lote](/leccion/especificaciones-a-fondo)).
- **Proveedores aprobados.** ICH Q7 (7.12) pide comprar contra una especificación acordada a proveedores aprobados por la unidad de calidad, y (7.14) tratar por control de cambios el cambio de proveedor de una materia prima crítica.
- **Estados de lote.** ICH Q7 (7.24) pide un sistema que identifique el estado de cada lote. Su glosario define la cuarentena como el estado de un material aislado físicamente o por otro medio eficaz hasta decidir si se aprueba o se rechaza. Los estados de SAP están en [SAP en la planta: órdenes, movimientos y decisión de empleo](/leccion/sap-en-planta).
- **Fecha de reanálisis** (*retest date*). El glosario de ICH Q7 la define como la fecha en que un material debe volver a examinarse para asegurar que sigue siendo apto. El maestro guarda el **periodo** y el sistema calcula la **fecha**: lote fabricado el 10 de febrero de 2026 con periodo de 24 meses (valores de ejemplo), reanálisis el 10 de febrero de 2028.

### Quién crea un dato maestro y quién lo aprueba
Cada maestro tiene un **dueño del dato** (*data owner*): el departamento que responde de que sea correcto. Un reparto habitual, que cada empresa fija en su procedimiento: logística o ingeniería proponen materiales, unidades y densidades; producción, la lista de materiales y la receta; control de calidad, las especificaciones; compras, los proveedores. Lo que dicen las normas:

- ICH Q7 (2.22): entre las responsabilidades de la unidad de calidad que no se delegan están aprobar todas las especificaciones e instrucciones maestras de producción (punto 5) y los cambios que puedan afectar a la calidad (punto 9).
- ICH Q7 (6.40): la instrucción maestra la prepara, fecha y firma una persona, y la revisa de forma independiente, fecha y firma una persona de la unidad de calidad.
- ICH Q7 (5.45) y el anexo 11 de las GMP europeas (apartado 6): un dato crítico tecleado a mano lleva una comprobación adicional, de una segunda persona o del sistema validado. Dar de alta una densidad o un factor es teclear un dato crítico.
- Anexo 11 (apartado 2): cooperación entre el dueño del proceso (*process owner*), el dueño del sistema (*system owner*), las personas cualificadas e informática, con accesos y responsabilidades definidos.

### Por qué un cambio de maestro pasa por control de cambios
Un maestro GMP forma parte del proceso validado: cambiar una casilla es cambiar el proceso.

- ICH Q7 (13.10) pide un sistema formal para evaluar todos los cambios que puedan afectar a la producción y al control; el 13.11 incluye materias primas, especificaciones, pasos del proceso y programas informáticos.
- ICH Q7 (13.14): al implantarlo se revisan todos los documentos afectados. Y (13.16) se evalúa si un cambio crítico afecta a las fechas de reanálisis o caducidad.
- ICH Q7 (5.43): queda registro de cada cambio de dato, con el valor anterior, quién y cuándo.
- Anexo 11: cualquier cambio de un sistema, incluida su configuración, se hace de forma controlada según un procedimiento (apartado 10); los cambios GMP tienen audit trail con su motivo (apartado 9).

Que un maestro concreto se trate como cambio del sistema o del documento maestro depende del procedimiento de cada empresa; en los dos casos se evalúa, se aprueba y queda rastro antes de usarlo. El recorrido completo está en [Control de cambios y gestión de riesgos a fondo: cambiar sin romper nada](/leccion/cambios-y-riesgos-a-fondo).

### Cuatro errores con sus cuentas
Casos ficticios, con valores de ejemplo.

**1. Unidad equivocada: kg frente a g.** La lista pide 2,5 kg del catalizador CT-9 por 1000 kg de producto, pero al darla de alta se elige «g». Orden de 800 kg, factor 0,8. Lo correcto: 2,5 × 0,8 = **2,0 kg**. Lo que sale: **2,0 g**, mil veces menos. Salta a la vista: 2 g en un reactor de miles de litros no tienen sentido.

**2. Factor de conversión mal puesto.** El RX-3 llega en sacos de 25 kg, pero el maestro dice «1 saco = 20 kg». La orden pide 150 kg y el sistema calcula 150 / 20 = **7,5 sacos**. Siete sacos y medio reales son 7,5 × 25 = **187,5 kg**: un **25 %** de exceso, y el stock del ERP deja de cuadrar con el almacén. La pista: medio saco de un material que siempre se carga entero.

**3. Densidad mal puesta.** La orden pide 600 kg de tolueno y el sistema dosifica por volumen. El tolueno tiene unos 0,87 kg/L, pero en el maestro pone **0,78** (cifras cambiadas de orden). Lo correcto: 600 / 0,87 = 689,7 L. Lo que dosifica: 600 / 0,78 = **769,2 L**, que pesan 769,2 × 0,87 = **669,2 kg**: un 11,5 % de más. La pista es más fina: en lotes anteriores siempre entraban unos 690 L.

**4. Receta con versión antigua.** La versión 4 de AF-33 bajó la carga de base de 120 a 110 kg, con su cambio aprobado, pero la versión 3 sigue activa y una orden sale con ella. El lote recibe 10 kg de más: un **9,1 %** sobre lo aprobado (10 / 110). Ningún número parece raro, porque 120 kg era lo normal el mes pasado. Solo lo detecta quien mira la **versión** en la cabecera.

El patrón: los errores de unidad son enormes y saltan a la vista; los de densidad y versión son pequeños y parecen normales. Para estos hacen falta la segunda verificación al dar de alta, los controles del sistema y tu costumbre de comparar con lo de siempre (más errores de unidades en [Unidades de medida a fondo: el SI, las conversiones de planta y los errores que cuestan caro](/leccion/unidades-a-fondo)).

### Datos de referencia y códigos de motivo
Los **datos de referencia** (*reference data*) son listas cerradas que el sistema ofrece en un desplegable: unidades, estados de lote, **códigos de motivo** (*reason codes*). El anexo 11 (apartado 9) pide documentar el motivo al cambiar o borrar un dato GMP, y muchos sistemas lo resuelven con una lista: «error de transcripción», «reimpresión de etiqueta». La ventaja es que todos usan las mismas palabras y luego se pueden contar los motivos. La trampa: si todo el mundo elige «Otros», el motivo ya no explica nada. Elige el código que corresponde y, si hay campo de comentario, escribe lo que pasó de verdad. Añadir un estado o un motivo nuevo también es un cambio controlado.

### Cómo se conectan los sistemas
ERP, MES, LIMS, sistema de control e historiador (los viste en [El mapa de sistemas: de los sensores al ERP](/leccion/sistemas-isa-95)) comparten maestros: el de materiales suele vivir en el ERP y se copia a los demás. Dos arquitecturas:

- **Punto a punto** (*point-to-point*): cada pareja de sistemas tiene su interfaz. Si todos hablan con todos, n sistemas necesitan n × (n − 1) / 2 interfaces: con 6, **15**.
- **Bus o capa intermedia** (*middleware*): cada sistema se conecta una vez a una capa central que traduce y reparte los mensajes. Con 6 sistemas, **6** conexiones. A cambio, la capa es una pieza GMP más: si falla, afecta a todos.

Como desarrollador web ya conoces las formas de viajar:

| Forma | Cómo funciona | Riesgo típico |
|---|---|---|
| **Fichero** | Un sistema deja un CSV o un XML en una carpeta y otro lo recoge | Fichero a medias, leído dos veces o editado mientras espera |
| **Servicio web** (*web service*) | Un sistema llama a la API del otro (REST o SOAP) | Llamada que falla y nadie reintenta |
| **Mensajes en cola** (*message queue*) | El emisor deja el mensaje en una cola y el receptor lo procesa | Mensajes atascados en la cola de errores |

### Qué se valida en una interfaz
El anexo 11, apartado 5 («Datos»), pide que los sistemas que intercambian datos electrónicamente incluyan comprobaciones integradas adecuadas para que la entrada y el procesado sean correctos y seguros, para minimizar los riesgos. Lo completan el 4.3 (los sistemas críticos tienen una descripción actualizada con flujos de datos e interfaces), el 4.7 (las pruebas cubren límites de parámetros y de datos y el tratamiento de errores) y el 4.8 (si los datos pasan a otro formato o sistema, se comprueba que no cambian de valor ni de significado).

La guía de PIC/S sobre integridad de datos (PI 041-1, apartado 9.4) añade que las interfaces se evalúan en la validación para asegurar una transferencia correcta y completa, con métodos como la transferencia segura, el cifrado o las sumas de control (*checksums*), y que una transferencia automática bien diseñada y cualificada es mucho más fiable que una manual.

Pruebas típicas de una interfaz:

| Prueba | Pregunta |
|---|---|
| Valor y unidad | ¿Llega 0,87 kg/L como 0,87 kg/L, y no como 87 ni en g/L? |
| Totalidad | ¿Llegan todos los registros, ni uno más ni uno menos? |
| Duplicados | Si un mensaje se envía dos veces, ¿se registra una sola? |
| Error | Si el receptor está caído, ¿el mensaje espera, avisa y se reprocesa? |
| Conciliación | ¿Cuadra lo que salió de un sistema con lo que entró en el otro? |

En el borrador de revisión del anexo 11 que la Comisión Europea sometió a consulta del 7 de julio al 7 de octubre de 2025, el apartado 10.2 pide que los datos críticos pasen de un sistema a otro, siempre que se pueda, por interfaces validadas y no por transcripción manual, y el 10.1, que el sistema avise si un dato tecleado no es plausible. Es un borrador: mientras no haya versión definitiva, manda el anexo 11 de 2011.

### Integridad de datos en las interfaces
Los principios de [ALCOA+: datos en los que se puede confiar](/leccion/alcoa-plus) también valen cuando el dato viaja. **Exacto**: mismo valor, unidad y decimales. **Completo**: ningún registro perdido. **Atribuible**: se sabe de qué sistema vino y cuándo. **Consistente**: los relojes de los dos sistemas sincronizados. **Original**: PIC/S (9.4) pide transferir el dato directamente al lugar seguro, no copiarlo desde una carpeta local, y avisa de que el almacenamiento temporal antes de la transferencia es una ocasión para borrar o manipular datos.

### Cómo detectas tú un maestro erróneo y qué haces
No ves los maestros, pero eres el último control antes del reactor. Señales:

- **Cantidad rara**: mil veces más o menos de lo habitual, medio saco, un volumen distinto del de siempre.
- **Etiqueta que no cuadra**: código distinto del de la orden, descripción que no es la del bidón, fecha de reanálisis demasiado lejana, estado inesperado.
- **Versión distinta** de la receta, o un **equipo** que no se usa para ese producto.
- **Bloqueos sin motivo aparente**: un material bueno sale «no apto», o al revés.

Qué haces:

1. **Paras antes de cargar.** Ninguna prisa justifica cargar una cantidad que no entiendes.
2. **No corriges por tu cuenta.** Ni cambias la cantidad ni tecleas el valor «bueno»: sería un cambio sin control.
3. **Avisas al supervisor** y anotas lo que has visto, con hora.
4. **Se comprueba el maestro.** Si está mal, se abre una desviación y se corrige por control de cambios. ICH Q7 (6.53) pide extender la investigación a otros lotes que puedan estar afectados: con un maestro, pueden ser muchos.

En planta manda siempre el procedimiento vigente (SOP): sigue lo que diga el tuyo sobre cómo y a quién avisar.
`,
  plant: `
Turno de mañana en la línea ficticia L2. El MES muestra la orden 1004518 del API ficticio **AF-33**, 1250 kg, receta versión 4. El paso 6 dice: «Cargar 15 sacos de la base BX-2 (300,0 kg)».

Te extraña. Para este tamaño de lote siempre has cargado 12 sacos. Miras la etiqueta: «25 kg netos». Haces la cuenta: 15 sacos × 25 kg = 375 kg, no 300. La pantalla calcula como si cada saco tuviera 20 kg. Algo no cuadra.

No cargas nada. Avisas a tu supervisora, que revisa la orden con logística. Encuentran el error en el maestro de materiales: la semana pasada se dio de alta un formato nuevo de saco y el factor de conversión quedó en 1 saco = 20 kg en vez de 25 kg. Si hubieras cargado los 15 sacos, el lote habría recibido 75 kg de base de más, un 25 % de exceso.

La orden se bloquea, se abre una desviación y el maestro se corrige por control de cambios, con la verificación de una segunda persona. La investigación busca otros lotes que hayan usado ese maestro. Aparece uno de otra línea: se cargó con 15 sacos y nadie preguntó. Ese lote queda retenido hasta que calidad evalúe su impacto. La CAPA añade una prueba más al alta de cada formato nuevo: comprobar el factor contra la etiqueta del proveedor.

Tu pregunta en el paso 6 ha evitado un segundo lote con exceso de reactivo.
`,
  batchRecord: `
- **Cabecera**: número de orden, código del producto (AF-33), tamaño del lote, **versión de la receta maestra** y fecha de emisión. Comprueba la versión con la que indica tu procedimiento.
- **Lista de cargas**: código de cada material, descripción, cantidad teórica con su **unidad**, número de lote del material, cantidad real y quién verifica.
- **Equipos**: código de cada equipo usado (R-205, C-410, S-520) y su estado de limpieza.
- **Etiquetas**: código, lote, estado y fecha de reanálisis de cada material; deben coincidir con la orden.
- **Si algo no cuadra**: anota la hora, lo que viste («la orden pide 15 sacos de BX-2 para 300 kg; los sacos son de 25 kg»), a quién avisaste y la referencia de la desviación.
- **Correcciones en el sistema**: cada una con su código de motivo y, si lo hay, un comentario claro.
`,
  terms: [
    { es: "Datos maestros", en: "Master data", def: "Datos que se definen y aprueban una vez y se usan en muchas operaciones: materiales, unidades, listas de materiales, recetas, especificaciones." },
    { es: "Datos de transacción", en: "Transactional data", def: "Datos que nacen con cada operación: órdenes, pesadas, consumos, resultados." },
    { es: "Lista de materiales", en: "Bill of materials (BOM)", def: "Lista de los materiales y sus cantidades para una cantidad base de producto." },
    { es: "Receta maestra", en: "Master recipe", def: "Plantilla aprobada y con versión de cómo se fabrica un producto: pasos, parámetros, controles y equipos." },
    { es: "Unidad base", en: "Base unit of measure", def: "Unidad en la que el sistema guarda el stock de un material." },
    { es: "Factor de conversión", en: "Conversion factor", def: "Número que pasa de una unidad alternativa a la unidad base, por ejemplo 1 saco = 25 kg." },
    { es: "Centro de trabajo", en: "Work center", def: "Lugar donde se hace una operación, con sus equipos asociados." },
    { es: "Fecha de reanálisis", en: "Retest date", def: "Fecha en que un material debe volver a examinarse para asegurar que sigue siendo apto." },
    { es: "Dueño del dato", en: "Data owner", def: "Departamento o persona que responde de que un dato maestro sea correcto." },
    { es: "Datos de referencia", en: "Reference data", def: "Listas cerradas que ofrece el sistema: unidades, estados, códigos de motivo." },
    { es: "Código de motivo", en: "Reason code", def: "Motivo elegido de una lista al cambiar o borrar un dato, que queda en el audit trail." },
    { es: "Interfaz punto a punto", en: "Point-to-point interface", def: "Conexión directa entre dos sistemas concretos." },
    { es: "Capa intermedia", en: "Middleware", def: "Software central al que se conectan los sistemas para intercambiar y traducir mensajes." },
    { es: "Suma de control", en: "Checksum", def: "Número calculado a partir de los datos que permite comprobar que no han cambiado al transferirlos." },
  ],
  quiz: [
    {
      kind: "choice",
      q: "En la analogía de la tienda web, ¿qué equivale a un dato maestro de la planta?",
      options: [
        "Cada pedido de un cliente con su fecha",
        "La ficha de cada producto con su referencia",
        "El pago con tarjeta de cada compra",
        "El correo de confirmación del pedido",
      ],
      answer: 1,
      explain: "La ficha del producto se escribe una vez y la usan todos los pedidos, igual que el código y la unidad de un material los usan todas las órdenes.",
    },
    {
      kind: "number",
      q: "La lista de materiales pide 45 kg de un reactivo por cada 1000 kg de producto. La orden es de 1250 kg. ¿Cuántos kg de reactivo debe pedir el sistema?",
      answer: 56.25,
      tolerance: 0.01,
      unit: "kg",
      explain: "Factor 1250 / 1000 = 1,25. Cantidad = 45 × 1,25 = 56,25 kg.",
    },
    {
      kind: "choice",
      q: "Según ICH Q7, ¿quién debe aprobar la receta maestra (instrucción maestra de producción) de un API?",
      options: [
        "El operador que hará el primer lote",
        "El departamento de informática",
        "El proveedor del sistema MES",
        "La unidad de calidad, tras revisarla",
      ],
      answer: 3,
      explain: "ICH Q7 2.22 (punto 5) reserva a la unidad de calidad aprobar especificaciones e instrucciones maestras, y 6.40 pide su revisión independiente y firma.",
    },
    {
      kind: "number",
      q: "Un reactivo llega en sacos de 25 kg, pero el maestro dice «1 saco = 20 kg». La orden pide 200 kg y el sistema calcula los sacos con el factor erróneo. Si se cargan esos sacos reales, ¿cuántos kg entran?",
      answer: 250,
      tolerance: 0.01,
      unit: "kg",
      explain: "El sistema pide 200 / 20 = 10 sacos. Diez sacos reales son 10 × 25 = 250 kg: 50 kg de más.",
    },
    {
      kind: "choice",
      q: "Logística quiere corregir hoy mismo la densidad del tolueno en el maestro porque «es solo un número». ¿Qué es lo correcto?",
      options: [
        "Tramitarlo por control de cambios, con verificación de una segunda persona",
        "Que lo cambie quien detectó el error, sin más papeles",
        "Cambiarlo directamente en la base de datos para ir más rápido",
        "Dejarlo como está hasta la próxima revisión anual",
      ],
      answer: 0,
      explain: "Un maestro GMP es parte del proceso validado: ICH Q7 13.10 y 5.47 y el anexo 11 apartados 6 y 10 piden cambio controlado y comprobación del dato tecleado.",
    },
    {
      kind: "number",
      q: "La orden pide 450 kg de tolueno (densidad real 0,87 kg/L) y el sistema dosifica por volumen. En el maestro figura 0,78 kg/L. El sistema calcula 576,9 L. ¿Cuántos kg entran de verdad?",
      answer: 501.9,
      tolerance: 0.01,
      unit: "kg",
      explain: "Masa real = 576,9 × 0,87 = 501,9 kg, unos 52 kg (un 11,5 %) más de lo pedido.",
    },
    {
      kind: "choice",
      q: "Una planta conecta 6 sistemas y cada uno necesita hablar con todos los demás. ¿Qué ventaja tiene una capa intermedia frente a interfaces punto a punto?",
      options: [
        "Que ya no hay que validar ninguna conexión",
        "Que los datos no necesitan unidad",
        "Que se pasa de 15 interfaces a 6 conexiones con la capa",
        "Que la capa nunca puede fallar",
      ],
      answer: 2,
      explain: "Punto a punto: 6 × 5 / 2 = 15 interfaces. Con capa intermedia, una conexión por sistema: 6. La capa también se valida y puede fallar.",
    },
    {
      kind: "choice",
      q: "¿Qué pide el anexo 11, apartado 5, a los sistemas que intercambian datos electrónicamente?",
      options: [
        "Que impriman cada dato antes de enviarlo",
        "Que lleven comprobaciones integradas para una entrada y un procesado correctos y seguros",
        "Que usen siempre ficheros CSV",
        "Que el operador copie a mano el dato en los dos sistemas",
      ],
      answer: 1,
      explain: "El apartado 5 pide comprobaciones integradas adecuadas para la entrada y el procesado correctos y seguros de los datos, para minimizar los riesgos.",
    },
    {
      kind: "choice",
      q: "La orden de un lote de 800 kg pide «2,0 g» de catalizador. En lotes anteriores se cargaban unos 2 kg. ¿Qué haces?",
      options: [
        "Cargo 2,0 g, que es lo que dice la orden",
        "Cargo 2,0 kg y anoto que la orden estaba mal",
        "Cambio la unidad en el MES y sigo",
        "Paro antes de cargar y aviso al supervisor",
      ],
      answer: 3,
      explain: "Parece un error de unidad en el maestro (g por kg, mil veces menos). No cargas ni corriges por tu cuenta: avisas, se comprueba el maestro y se abre desviación si procede.",
    },
    {
      kind: "choice",
      q: "Un instrumento deja sus resultados en una carpeta compartida y el LIMS los recoge cada hora. ¿Qué riesgo señala la guía PIC/S PI 041-1?",
      options: [
        "Que los ficheros ocupen demasiado espacio",
        "Que el LIMS los lea demasiado rápido",
        "Que en ese almacenamiento temporal se borren o manipulen datos",
        "Que la carpeta no tenga nombre en español",
      ],
      answer: 2,
      explain: "PIC/S 9.4 avisa de que el almacenamiento temporal antes de la transferencia es una ocasión para borrar o manipular datos y pide transferir al lugar seguro directamente.",
    },
  ],
};
