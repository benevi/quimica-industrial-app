import type { Lesson } from "./types";

export const epiAFondo: Lesson = {
  slug: "epi-a-fondo",
  level: 15,
  order: 3,
  title: "Los equipos de protección individual a fondo: elegir, ponerse, usar y quitarse",
  titleEn: "Personal protective equipment in depth: selecting, donning, using and doffing",
  minutes: 38,
  summary:
    "Por qué el EPI es la última barrera, qué obliga la ley a la empresa y a ti, cómo se lee el marcado, cómo se pasa de la ficha de datos de seguridad al guante o al filtro concreto, y cómo se pone, se cuida y se quita cada equipo sin contaminarte.",
  body: `
Ya viste qué equipos de protección individual (EPI; *personal protective equipment*, PPE) existen. Aquí vas a entender por qué se elige uno y no otro, qué significa lo que llevan impreso y qué fallos los dejan sin efecto.

### La última barrera, y por qué va la última
Piensa en la lluvia. Un tejado protege a todos los que están debajo, sin que nadie haga nada. Un paraguas protege solo a quien lo lleva, solo si lo abre y solo si no está roto. El EPI es el paraguas.

La ley española lo ordena así. La Ley 31/1995, de Prevención de Riesgos Laborales, enumera en su artículo 15 los principios que la empresa debe seguir. Entre ellos, por este orden de letras: evitar los riesgos, combatirlos en su origen, sustituir lo peligroso por lo que entrañe poco o ningún peligro, y adoptar medidas que antepongan la protección colectiva a la individual. Su artículo 17 añade que los EPI se utilizan cuando los riesgos no se pueden evitar o limitar lo suficiente con medios técnicos de protección colectiva o con medidas de organización del trabajo. El Real Decreto 773/1997, que es la norma específica de los EPI, lo repite en su artículo 4.

| Orden | Medida | Ejemplo en una planta |
|---|---|---|
| 1 | Evitar el riesgo | No abrir el equipo: cargar por línea cerrada |
| 2 | Sustituir | Cambiar un disolvente por otro menos peligroso |
| 3 | Medidas técnicas y colectivas | Extracción localizada, toma de muestras cerrada |
| 4 | Organización del trabajo | Procedimiento, permisos, menos tiempo en la zona |
| 5 | EPI | Guantes, gafas, máscara |

La guía técnica del Instituto Nacional de Seguridad y Salud en el Trabajo (INSST) sobre este real decreto da tres razones: el EPI protege solo a quien lo lleva, su protección máxima rara vez se alcanza en la práctica, y limita los movimientos o la visión. Un EPI no elimina el peligro. El disolvente sigue ahí; solo hay una capa entre él y tú.

### Qué le toca a la empresa y qué te toca a ti
El Real Decreto 773/1997 reparte las obligaciones.

| Quién | Qué | Artículo |
|---|---|---|
| Empresa | Decidir en qué puestos hace falta EPI, contra qué riesgo, para qué parte del cuerpo y de qué tipo | 3 a) |
| Empresa | Elegirlo tras evaluar el riesgo y comparar con lo que hay en el mercado | 3 b) y 6 |
| Empresa | Darlo gratis y reponerlo cuando haga falta | 3 c) |
| Empresa | Informarte antes de usarlo y darte instrucciones, preferentemente por escrito; formarte y entrenarte | 8 |
| Tú | Utilizarlo y cuidarlo correctamente | 10 a) |
| Tú | Dejarlo después de usarlo en el lugar indicado | 10 b) |
| Tú | Avisar de inmediato a tu superior de cualquier defecto o daño que pueda quitarle eficacia | 10 c) |

Además, el equipo tiene que adaptarse a ti y, si llevas varios, ser compatibles entre sí (artículo 5). Se usa, se guarda y se limpia según las instrucciones del fabricante y, en principio, es de uso personal (artículo 7).

Tú no eliges el EPI. Lo elige la empresa y lo escribe en el procedimiento. Tu parte es usarlo como dice y avisar si algo falla.

### Tres categorías y un número detrás del CE
El Reglamento (UE) 2016/425 clasifica los EPI según el riesgo del que protegen (anexo I).

| Categoría | Riesgos | Ejemplos de la lista del reglamento |
|---|---|---|
| I | Solo riesgos mínimos | Lesiones mecánicas superficiales, productos de limpieza de acción débil, superficies calientes que no pasen de 50 °C, luz solar |
| II | Los que no están en la I ni en la III | Todo lo intermedio |
| III | Los que pueden causar la muerte o daños irreversibles | Sustancias y mezclas peligrosas para la salud, atmósferas con falta de oxígeno, agentes biológicos nocivos, caídas de altura, ruidos nocivos |

Lo que usarás frente a productos químicos peligrosos es de categoría III: guantes químicos, protección respiratoria, ropa química. En esa categoría, el marcado CE va seguido de un número (artículo 17 del reglamento); en los ejemplos del INSST tiene cuatro cifras. Es el del organismo notificado, una entidad independiente que vigila la fabricación.

Un guante marcado «solo para riesgos mínimos» es de categoría I: no es un guante químico.

### De la ficha de datos de seguridad al equipo concreto
La ficha de datos de seguridad (FDS; *safety data sheet*, SDS) tiene 16 secciones. La que te interesa aquí es la 8, «Controles de exposición / protección personal».

«Usar guantes» no basta. Según la Nota Técnica de Prevención (NTP) 1136 del INSST, la sección 8 debe indicar el material del guante, su espesor y el tiempo que tarda el producto en atravesarlo. La misma nota avisa de que ese dato suele ser genérico. Por eso tu planta traduce la sección 8 a un modelo de guante, un tipo de filtro y un tipo de traje, y lo escribe en el procedimiento.

### Guantes: tres maneras de fallar
Un producto puede llegar a tu piel a través de un guante de tres formas.

- **Penetración** (*penetration*): pasa por un agujero, un corte o un poro.
- **Permeación** (*permeation*): atraviesa el material molécula a molécula, sin agujero. El material lo absorbe por fuera, el producto viaja por dentro y sale por la cara interior. Piensa en un globo de helio que al día siguiente está en el suelo: no tenía agujero. La NTP 1136 avisa de que el guante suele quedar igual por fuera, así que no se ve, y a veces tampoco se nota.
- **Degradación** (*degradation*): el producto estropea el material, que pierde propiedades; por ejemplo, se perfora con más facilidad.

La NTP 1136 dice que todos los materiales acaban siendo permeados, antes o después. Lo que cambia es cuánto tardan. Ese tiempo es el **tiempo de paso** (*breakthrough time*): los minutos desde que el producto toca el guante hasta que se detecta en la cara interior. Se mide en laboratorio con contacto directo y continuo y se clasifica en seis niveles. Estos niveles son de las normas de guantes; los tomamos de la NTP 1136 y de la ficha del INSST sobre guantes de protección química.

| Tiempo de paso | Nivel |
|---|---|
| Más de 10 min | 1 |
| Más de 30 min | 2 |
| Más de 60 min | 3 |
| Más de 120 min | 4 |
| Más de 240 min | 5 |
| Más de 480 min | 6 |

El guante lleva un pictograma con un matraz y, debajo, unas letras. Cada letra es un producto de una lista de 18 con el que se ha ensayado: A es metanol, B acetona, D diclorometano, F tolueno, J n-heptano, K hidróxido sódico al 40 %, L ácido sulfúrico al 96 %. Un guante de tipo A ha sacado al menos nivel 2 con seis productos de la lista; uno de tipo B, con tres; uno de tipo C, al menos nivel 1 con uno. El folleto del guante debe dar los minutos de cada producto ensayado.

Los materiales habituales, según la NTP 1136, son látex, PVC, nitrilo, neopreno, polietileno, butilo, alcohol polivinílico (PVA) y un fluoroelastómero que la nota cita por su marca. Ninguno sirve para todo. El INSST insiste en que solo un ensayo con el producto concreto garantiza la barrera, y en que suponer que un guante aguanta un producto porque aguanta otro «parecido» lleva a grandes errores. Dos ejemplos de un texto publicado por el INSST: el PVA es buena barrera frente a casi todos los disolventes orgánicos pero se degrada con el agua, y el látex resiste el agua pero se disuelve en tolueno o hexano. Por eso aquí no hay una tabla de «qué material para qué producto»: manda el folleto del guante que tu planta ha elegido.

**El guante fino desechable.** El espesor cuenta para el tiempo de paso. Además, la NTP 1136 señala que los guantes muy finos tienen una resistencia mecánica muy limitada: se rompen pronto. En la práctica se usan frente a salpicaduras y se cambian en cuanto se manchan. No son para sumergir la mano.

**Antes de ponértelos**, mira si hay agujeros o defectos; lo pide la NTP 1136 antes de cada uso. **Para quitártelos** sin tocarte la piel, la práctica habitual es esta: pellizca un guante por fuera, a la altura de la muñeca, y tira hasta sacarlo del revés. Guárdalo en el puño de la mano que sigue enguantada. Mete un dedo limpio por dentro del puño del otro guante y sácalo también del revés, envolviendo al primero. Después, lávate las manos.

### Ojos y cara
La guía técnica del INSST distingue tres diseños.

| Protector | Cómo es | Qué hace |
|---|---|---|
| Gafas de montura universal | Como unas gafas normales, casi siempre con protección lateral | No cierran contra la cara |
| Gafas de montura integral (*goggles*) | Montura flexible ajustada a la cara, con banda elástica | Protegen los ojos desde todos los ángulos |
| Pantalla facial (*face shield*) | Visor que cubre los ojos y la cara | Protege la cara, pero no aísla completamente los ojos |

Por eso la pantalla no sustituye a las gafas de montura integral: una salpicadura puede entrar por debajo o por un lado del visor. Frente a un corrosivo se llevan las dos, la pantalla encima de las gafas. Según la guía, las gafas integrales con ventilación directa (agujeros abiertos) no son adecuadas frente a gotas de líquido, gases o polvo fino. Las gafas rayadas o con la banda deformada se desechan.

### Protección respiratoria
Hay dos familias, según la guía del INSST.

- **Equipos filtrantes** (*filtering devices*): limpian el aire que hay. Llevan un filtro y una pieza facial. No fabrican aire.
- **Equipos aislantes** (*breathing apparatus*): te dan aire de otra fuente. Pueden ser de aire fresco (una manguera con el extremo fuera de la zona), de línea de aire comprimido o autónomos (la botella la llevas tú).

**Cuándo no vale un filtro.** El INSST indica que se opta por un equipo aislante cuando falta oxígeno (menos del 19,5 %), cuando no se sabe qué contaminante hay o en qué concentración, y cuando la concentración es muy alta o supone un peligro inmediato para la vida. Un filtro quita cosas del aire; no añade oxígeno.

**Tipos de filtro.** Tomados de la ficha de filtros y de la página de protección respiratoria del INSST, que resumen las normas:

| Tipo | Color | Para qué |
|---|---|---|
| A | Marrón | Gases y vapores orgánicos con punto de ebullición mayor de 65 °C |
| AX | Marrón | Gases y vapores orgánicos con punto de ebullición de 65 °C o menos. No reutilizable: una jornada como máximo |
| B | Gris | Gases y vapores inorgánicos |
| E | Amarillo | Dióxido de azufre y otros gases ácidos |
| K | Verde | Amoniaco y sus derivados orgánicos |
| P | Blanco | Partículas |

Los filtros A, B, E y K llevan además una clase, 1, 2 o 3: capacidad baja, media o alta. Los filtros P llevan clase 1, 2 o 3 según su eficacia: baja, media o alta. Un filtro A2P3 es de vapores orgánicos de capacidad media y de partículas de alta eficacia.

Las mascarillas FFP1, FFP2 y FFP3 son medias máscaras filtrantes: la propia mascarilla es el filtro de partículas, de clase 1, 2 o 3. Solo paran partículas. No paran vapores de disolvente. Si llevan las letras NR, son para un solo turno.

**El ajuste a la cara.** Una máscara funciona si todo el aire entra por el filtro. Si entra por el borde, entra sucio. El INSST advierte de que el vello facial, las cicatrices o un pañuelo pueden romper la hermeticidad. Por eso con barba una máscara ajustada no sirve: se usa otro tipo de equipo, que decide la empresa. Hay dos comprobaciones distintas. La **prueba de ajuste** (*fit test*) la hace personal formado para saber si ese modelo y esa talla sellan en tu cara. La **comprobación de ajuste** (*seal check*) la haces tú cada vez que te la pones, como indique el fabricante.

**Caducidad y saturación.** El filtro lleva impresos el año y el mes de caducidad; pasado ese mes, no se usa aunque esté sin abrir. Una vez en uso, el carbón del filtro se va llenando. El INSST dice que el tiempo de uso y el cambio los fija la empresa, y que nunca se usa el olor como aviso de que el filtro se ha agotado. En máscaras de dos filtros se cambian los dos a la vez.

### Ropa de protección química y calzado
La ficha del INSST sobre ropa de protección química recoge estos tipos, que se basan en lo hermético que es el traje.

| Tipo | Protege contra |
|---|---|
| 1 (1A, 1B, 1C) | Gases y vapores; traje hermético con suministro de aire |
| 3 | Líquidos en forma de chorro |
| 4 | Líquidos pulverizados |
| 5 | Partículas sólidas en suspensión |
| 6 | Líquidos en forma de salpicadura |

La ficha vigente no incluye el tipo 2; la NTP 929, anterior, lo describe como parecido al 1C, pero protegido solo por la presión positiva del aire. Las siglas PB indican protección parcial del cuerpo, como un delantal o unos manguitos. La ficha aclara que un traje desechable no protege menos que uno reutilizable; si es de un solo uso, lleva la advertencia «no reutilizar».

Sobre el calzado, la guía técnica dice que con sustancias químicas debe ser impermeable y resistente al producto concreto, y que en atmósferas potencialmente explosivas o con líquidos inflamables se recomienda calzado antiestático o conductor.

### Oídos
El Real Decreto 286/2006 fija tres escalones para el ruido de la jornada (artículo 5): 80 dB(A) es el valor inferior de acción, 85 dB(A) el superior y 87 dB(A) el límite. Por encima del inferior, la empresa pone protectores a tu disposición. Desde el superior, usarlos es obligatorio (artículo 7).

El límite de 87 dB(A) se comprueba contando lo que atenúa el protector; los otros dos, sin contarlo. Unos tapones o unas orejeras (*earmuffs*) solo atenúan mientras los llevas bien puestos: la guía del INSST avisa de que la protección cae muy deprisa con cada rato que te los quitas.

### El orden para ponerse y quitarse el equipo
La guía del INSST pide que te formen para ponerte y quitarte guantes y ropa sin contaminarte ni contaminar el interior del equipo, pero no fija un orden. Lo que sigue es la práctica habitual; el de tu planta está en su procedimiento.

Para ponérselo: traje y calzado, luego la máscara con su comprobación de ajuste, después las gafas y, al final, los guantes.

Para quitárselo, la idea es una: lo más sucio sale primero y la piel no toca nunca la cara exterior. Primero los guantes. Luego el traje, enrollándolo hacia fuera y hacia abajo, de modo que lo sucio quede dentro del rollo. Después las gafas, cogidas por la banda de atrás. La máscara sale la última y ya fuera de la zona. Para acabar, lavado de manos.

### Cuidar, guardar y desechar
Según la guía del INSST:

- El mantenimiento incluye limpieza, inspección periódica, almacenamiento correcto y sustitución.
- Solo valen los repuestos del fabricante. Las modificaciones que no prevé están prohibidas.
- Un equipo caducado se retira aunque nunca se haya usado.
- Un equipo que ya no vale se elimina de forma que nadie pueda volver a usarlo por error.
- Lo desechable se desecha. Un guante contaminado es un residuo y se gestiona como tal.

### Tres cuentas sencillas
**Cuenta 1. Clase y minutos no son lo mismo.** Una tarea supone 75 minutos de contacto continuo con un disolvente. ¿Vale un guante de nivel 3? El nivel 3 solo asegura más de 60 minutos; el guante podría dar 61. El primer nivel que asegura más de 75 es el 4 (más de 120). Si el folleto da los minutos, se usan los minutos. Y aun así, el tiempo de paso no es el tiempo de uso: en el trabajo real el guante se dobla y se roza.

**Cuenta 2. El mismo guante, dos productos.** Un folleto declara 12 minutos frente a acetona y 58 frente a tolueno. Para una tarea de 20 minutos, 20 es más que 12: con acetona no vale. Con tolueno, 20 queda por debajo de 58.

**Cuenta 3. Cuánto nitrógeno basta para que el filtro no valga.** El aire tiene un 21 % de oxígeno. Si en una sala se escapa nitrógeno y pasa a ser el 10 % del gas, queda un 90 % de aire: 21 × 0,90 = 18,9 % de oxígeno. Ya está por debajo del 19,5 %. El punto exacto es 1 − 19,5 / 21 = 0,071: con un 7,1 % de nitrógeno añadido, la máscara de filtro deja de ser una opción.

### Los errores típicos
- **EPI equivocado para el producto.**
- **Filtro agotado, caducado o del tipo equivocado.** Un filtro P no para vapores.
- **Guante roto**, o reutilizado cuando era de un solo uso.
- **Gafas en la frente.** Protegen la frente.
- **Barba** con máscara ajustada.
- **Quitarse la mascarilla en la zona** «un momento». La guía del INSST advierte de que quitarse la protección respiratoria, aunque sea poco tiempo, reduce de forma importante la protección total.

En planta manda siempre el procedimiento vigente (SOP) y la ficha de datos de seguridad del producto. Si lo que dicen no coincide con lo que tienes en la mano, para y pregunta.
`,
  plant: `
Lucía, operadora del turno de mañana, va a descargar la torta de la centrífuga CF-301. La torta está húmeda de tolueno. La descarga es cerrada, pero hay que abrir la boca de inspección unos minutos para comprobar que la cesta ha quedado vacía.

El procedimiento de la etapa pide: buzo de tipo 6, calzado antiestático, gafas de montura integral, guantes químicos del modelo G-12 y media máscara con filtros A2P3.

Antes de entrar, Lucía revisa cada cosa. Infla un poco cada guante y lo aprieta: no pierde aire. En el folleto del G-12, colgado en el vestuario, lee «tolueno: 58 min, nivel 2». La hoja estima 20 minutos de trabajo con la boca abierta. Le vale.

Coge la máscara y mira los filtros. Uno marca caducidad 2026/09. Estamos en noviembre. No lo monta. Pide dos filtros nuevos en el almacén, porque en una máscara de dos filtros se cambian los dos, y deja el caducado en el contenedor de residuos, cortado para que nadie lo reutilice.

Su compañero Andrés, que hoy lleva barba de varios días, no puede usar la media máscara. El jefe de turno le asigna las tareas de fuera de la sala.

Al terminar, Lucía se quita primero los guantes, del revés. Luego enrolla el buzo hacia abajo, se quita las gafas por la banda y sale. La máscara se la quita fuera de la sala. Se lava las manos y anota en la hoja el EPI usado y el cambio de filtros.
`,
  batchRecord: `
- **En la instrucción de la etapa:** el EPI obligatorio, con el modelo de guante, el tipo de filtro y el tipo de traje. Antes de empezar, marcas la comprobación «EPI revisado y colocado» con tu firma, fecha y hora.
- **Si algo falla** (filtro caducado, guante con defecto, talla que no ajusta): se anota en observaciones lo ocurrido y lo que se hizo, y se avisa al jefe de turno. No se sigue con el equipo defectuoso.
- **Ficha de entrega de EPI:** la guía técnica del INSST trae un modelo. Recoge qué equipo se te entrega, cuándo, y tu firma de que lo has recibido con sus instrucciones.
- **Registro de cambio de filtros:** fecha de puesta en uso y fecha de cambio, según el criterio de tu planta. En el propio filtro puedes ver el tipo, la clase y el mes de caducidad.
- **Registro de formación:** la sesión sobre el uso de cada equipo y, si tu planta la hace, la prueba de ajuste de tu máscara, con el modelo y la talla que te sellan bien.
- **Parte de incidencia:** una salpicadura sobre el EPI o la sospecha de una contaminación mayor de lo normal se comunica y se registra, aunque no te haya tocado la piel.
`,
  terms: [
    { es: "Equipo de protección individual (EPI)", en: "Personal protective equipment (PPE)", def: "Equipo que lleva o sujeta el trabajador para protegerse de uno o varios riesgos. No incluye la ropa de trabajo corriente." },
    { es: "Protección colectiva", en: "Collective protection", def: "Medida que protege a todos los que están en la zona, como una extracción localizada. La ley la antepone a la individual." },
    { es: "Organismo notificado", en: "Notified body", def: "Entidad independiente que interviene en el control de los EPI de categoría III. Su número de cuatro cifras va detrás del marcado CE." },
    { es: "Permeación", en: "Permeation", def: "Paso de un producto químico a través del material, molécula a molécula, sin que haya agujeros." },
    { es: "Penetración", en: "Penetration", def: "Paso de un producto por agujeros, cortes, poros o costuras del equipo." },
    { es: "Degradación", en: "Degradation", def: "Deterioro del material por el contacto con un producto químico: pierde alguna de sus propiedades." },
    { es: "Tiempo de paso", en: "Breakthrough time", def: "Minutos desde que el producto toca el guante hasta que se detecta en la cara interior, en un ensayo con contacto continuo. Se clasifica del nivel 1 (más de 10 min) al 6 (más de 480 min)." },
    { es: "Gafas de montura integral", en: "Goggles", def: "Gafas de montura flexible ajustada a la cara con banda elástica. Protegen los ojos desde todos los ángulos." },
    { es: "Pantalla facial", en: "Face shield", def: "Visor que cubre los ojos y la cara. Protege la cara pero no aísla completamente los ojos." },
    { es: "Equipo filtrante", en: "Filtering device", def: "Protección respiratoria que limpia el aire del ambiente con un filtro. No sirve si falta oxígeno." },
    { es: "Equipo aislante", en: "Breathing apparatus", def: "Protección respiratoria que da aire de una fuente independiente: aire fresco, línea de aire comprimido o botella." },
    { es: "Media máscara filtrante", en: "Filtering facepiece (FFP)", def: "Mascarilla en la que el propio cuerpo es el filtro de partículas. Clases FFP1, FFP2 y FFP3." },
    { es: "Prueba de ajuste", en: "Fit test", def: "Ensayo que comprueba si un modelo y una talla de máscara sellan bien en la cara de una persona concreta." },
    { es: "Comprobación de ajuste", en: "Seal check", def: "Comprobación rápida que hace el usuario cada vez que se pone la máscara, siguiendo las instrucciones del fabricante." },
  ],
  quiz: [
    {
      kind: "choice",
      q: "En la sala de centrífugas hay vapores de disolvente al abrir la tapa. ¿Qué medida va antes según la Ley 31/1995?",
      options: [
        "Dar a cada operador una máscara con filtro A",
        "Poner un cartel de uso obligatorio de máscara",
        "Instalar una extracción que proteja a todos",
        "Rotar a los operadores para repartir la dosis",
      ],
      answer: 2,
      explain: "El artículo 15 pide anteponer la protección colectiva a la individual; el EPI se usa cuando las medidas técnicas y organizativas no bastan (artículo 17).",
    },
    {
      kind: "choice",
      q: "Al ponerte un guante químico ves una grieta pequeña en un dedo. ¿Qué te pide el Real Decreto 773/1997?",
      options: [
        "Avisar de inmediato a tu superior del defecto",
        "Taparla con cinta y terminar antes la tarea",
        "Usarlo solo en la mano que menos trabaja",
        "Comprar tú otro par y pasar luego el recibo",
      ],
      answer: 0,
      explain: "El artículo 10 c) obliga a informar de inmediato de cualquier defecto o daño; la empresa repone el equipo gratis (artículo 3 c).",
    },
    {
      kind: "choice",
      q: "En un guante lees el marcado CE seguido de un número de cuatro cifras. ¿Qué indica ese número?",
      options: [
        "Los minutos de tiempo de paso garantizados",
        "El lote de fabricación de ese par de guantes",
        "La talla y el espesor del guante en micras",
        "El organismo notificado de la categoría III",
      ],
      answer: 3,
      explain: "En los EPI de categoría III el marcado CE va seguido del número del organismo notificado (artículo 17 del Reglamento (UE) 2016/425).",
    },
    {
      kind: "choice",
      q: "Tras 40 minutos manejando un disolvente, tu guante está intacto y sin manchas. ¿Puede haberte llegado producto a la piel?",
      options: [
        "No: si no hay agujero, el guante no deja pasar",
        "Sí: por permeación, que no se ve desde fuera",
        "No: la degradación siempre avisa con un olor",
        "Sí, pero solo si el guante es de categoría I",
      ],
      answer: 1,
      explain: "La permeación es el paso molécula a molécula; la NTP 1136 avisa de que deja el guante igual por fuera y puede no notarse.",
    },
    {
      kind: "choice",
      q: "Vas a trasvasar un ácido corrosivo con riesgo de salpicadura. ¿Qué protección de ojos y cara es la correcta?",
      options: [
        "Pantalla facial encima de gafas de montura integral",
        "Solo pantalla facial, porque cubre toda la cara",
        "Gafas de montura universal con protección lateral",
        "Gafas integrales con ventilación directa y sin pantalla",
      ],
      answer: 0,
      explain: "La pantalla protege la cara pero no aísla completamente los ojos; las gafas de montura integral los protegen desde todos los ángulos.",
    },
    {
      kind: "choice",
      q: "Hay que entrar a una sala donde ha habido una fuga de nitrógeno y nadie ha medido el oxígeno. ¿Qué protección respiratoria vale?",
      options: [
        "Mascarilla FFP3, que es la de mayor eficacia",
        "Media máscara con filtro combinado ABEK y P3",
        "Máscara completa con dos filtros A de clase 3",
        "Un equipo aislante, con aire de una fuente propia",
      ],
      answer: 3,
      explain: "Con posible falta de oxígeno o concentraciones desconocidas no vale un equipo filtrante: ningún filtro aporta oxígeno.",
    },
    {
      kind: "choice",
      q: "Vas a muestrear un disolvente orgánico cuyo punto de ebullición, según la FDS, es de 40 °C. ¿Qué filtro de gases le corresponde por tipo?",
      options: [
        "Tipo A, marrón, de clase 1",
        "Tipo AX, marrón, de un solo uso",
        "Tipo K, verde, de clase 2",
        "Tipo P, blanco, de clase 3",
      ],
      answer: 1,
      explain: "El tipo AX es para gases y vapores orgánicos con punto de ebullición de 65 °C o menos y no es reutilizable; el A es para los de más de 65 °C.",
    },
    {
      kind: "choice",
      q: "Al salir de la zona con buzo, guantes, gafas y máscara, ¿qué te quitas en último lugar según la práctica habitual?",
      options: [
        "Los guantes, para no tocar nada con la mano",
        "El buzo, porque es la prenda más grande",
        "La máscara, y ya fuera de la zona sucia",
        "Las gafas, porque son las más delicadas",
      ],
      answer: 2,
      explain: "Lo más contaminado sale primero y la protección respiratoria la última y fuera de la zona, para no respirar lo que se desprende al quitarse lo demás.",
    },
    {
      kind: "number",
      q: "Una tarea supone 75 minutos de contacto continuo con un disolvente. El folleto del guante solo da el nivel, no los minutos. ¿Qué nivel mínimo de tiempo de paso asegura más de 75 minutos?",
      answer: 4,
      tolerance: 0.01,
      unit: "nivel",
      explain: "El nivel 3 solo asegura más de 60 min (podrían ser 61); el primero que asegura más de 75 es el nivel 4, de más de 120 min.",
    },
    {
      kind: "number",
      q: "El aire tiene un 21 % de oxígeno. ¿Qué porcentaje de nitrógeno añadido a la mezcla hace bajar el oxígeno justo al 19,5 %, por debajo del cual no deben usarse equipos filtrantes?",
      answer: 7.1,
      tolerance: 0.03,
      unit: "%",
      explain: "Fracción de aire = 19,5 / 21 = 0,929; el resto, 1 − 0,929 = 0,071, es nitrógeno añadido: un 7,1 %.",
    },
  ],
};
