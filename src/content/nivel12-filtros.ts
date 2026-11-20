import type { Lesson } from "./types";

export const filtrosAFondo: Lesson = {
  slug: "filtros-a-fondo",
  level: 12,
  order: 11,
  title: "Filtros a fondo: el filtro Nutsche y el filtro-secador agitado, paso a paso",
  titleEn: "Filters in depth: the Nutsche filter and the agitated filter dryer, step by step",
  minutes: 32,
  summary:
    "Qué empuja el líquido a través de la torta, qué tipos de filtro hay en una planta de API y la secuencia completa del filtro-secador agitado, con el porqué de cada paso, sus riesgos y lo que anota el operador.",
  body: `
En la lección anterior viste qué es un filtro y qué es la presión diferencial. Aquí entramos dentro del equipo: qué mueve el líquido, por qué la filtración se va frenando y qué se hace en cada paso, uno por uno.

### Qué empuja el líquido: la diferencia de presión

Un líquido no atraviesa un filtro porque sí. Algo tiene que empujarlo. Ese algo es una **diferencia de presión** (*pressure difference*): más presión encima de la torta que debajo.

Piensa en una cafetera de émbolo. Si no aprietas, el agua apenas pasa entre el café. Cuando aprietas, creas más presión arriba que abajo y el líquido pasa.

En un filtro hay dos maneras de crear esa diferencia:

- **Con presión**: se mete nitrógeno por encima de la suspensión. El gas empuja el líquido hacia abajo.
- **Con vacío**: se aspira por debajo de la placa filtrante. Arriba queda la presión normal y abajo hay menos.

El vacío tiene un tope. Lo máximo que se puede quitar por debajo es toda la presión, y la presión del aire que nos rodea es de 1 bar, más o menos. Por eso con vacío la diferencia nunca pasa de 1 bar, aproximadamente. Con nitrógeno a presión se puede empujar con más fuerza, hasta el límite que marquen la hoja y el equipo.

### Por qué la torta frena cada vez más

Al empezar, el líquido solo tiene que cruzar la tela. Pero el sólido se va quedando encima y forma la **torta** (*cake*). Desde ese momento el líquido tiene que cruzar la tela y, además, toda la torta que ya hay.

Es como una fila de gente saliendo por un pasillo. Si el pasillo se alarga, cada persona tarda más en salir. La torta es ese pasillo, y crece durante toda la filtración.

Consecuencia práctica: **si mantienes la misma presión, el caudal de filtrado va bajando**. No es una avería: es lo normal. Los últimos litros siempre salen más despacio que los primeros, y filtrar el doble de volumen cuesta bastante más del doble de tiempo.

### De qué depende la velocidad de filtración

La regla que lo resume se llama **ley de Darcy** (*Darcy's law*). Dicha con palabras: el caudal que cruza una capa porosa es mayor cuanto mayores son la superficie y la diferencia de presión, y menor cuanto más viscoso es el líquido y más gruesa es la capa. Además depende de lo «abierta» que sea la capa, que se llama **permeabilidad** (*permeability*).

| Si aumenta... | La filtración va... | Por qué |
|---|---|---|
| La diferencia de presión | Más rápida | Se empuja con más fuerza |
| La superficie del filtro | Más rápida | Hay más sitio por donde pasar, y la misma torta queda más fina |
| La viscosidad del líquido | Más lenta | Un líquido espeso, como la miel, fluye peor que el agua |
| El espesor de la torta | Más lenta | El camino es más largo |
| La finura de los cristales | Más lenta | Los huecos entre granos son más pequeños: la torta es menos permeable |

Un ejemplo de proporción: con todo lo demás igual, y si casi toda la resistencia la pone la torta, una torta el doble de gruesa deja pasar el líquido a la mitad de velocidad.

El operador no cambia la superficie del filtro ni el tipo de cristal. Lo que tiene en su mano es la presión que fija la hoja y avisar cuando la filtración va más lenta de lo habitual.

### Tipos de filtro en una planta de API

| Filtro | En inglés | Cómo es | Para qué se usa |
|---|---|---|---|
| Nutsche abierto | *Open Nutsche filter* | Cubeta con fondo filtrante, abierta por arriba; filtra por vacío | Sencillo, pero el producto y los vapores quedan a la vista: protege poco al operador y al producto |
| Nutsche cerrado | *Closed / pressure Nutsche filter* | Recipiente cerrado con fondo filtrante; filtra con presión o con vacío | Filtrar y lavar sin exponer el producto |
| Filtro-secador agitado | *Agitated Nutsche filter dryer, ANFD* | Nutsche cerrado con agitador y calefacción | Filtrar, lavar, secar y descargar en el mismo equipo |
| Filtro prensa | *Filter press* | Paquete de placas forradas de tela, apretadas unas contra otras; entre ellas quedan cámaras | La suspensión se bombea, el sólido llena las cámaras y el líquido sale por las placas. Para sacar la torta hay que abrir el paquete |
| Filtro de cartucho | *Cartridge filter* | Elemento filtrante recambiable dentro de una carcasa | Quitar partículas finas de un líquido; es el filtro de pulido que ya conoces |
| Filtro de mangas o de bolsa | *Bag filter* | Bolsa de tejido sujeta por una cesta metálica, dentro de una carcasa | Retener partículas más gruesas o en más cantidad; a veces va delante de un cartucho para alargarle la vida |

La diferencia de fondo: en los tres primeros y en el filtro prensa lo que interesa suele ser el **sólido** (la torta). En el cartucho y en la bolsa lo que interesa es el **líquido limpio**.

### El filtro-secador agitado por dentro

- **Placa filtrante** (*filter plate*) con su tela o malla: es el suelo del equipo. Deja pasar el líquido y sujeta el sólido.
- **Agitador** (*agitator*): sube, baja y gira en los dos sentidos. Girando en un sentido alisa y aprieta la torta. Girando en el otro la remueve y la arrastra. Durante la filtración suele estar levantado, sin tocar la torta.
- **Camisa de calefacción** (*heating jacket*): pared doble por la que circula un fluido caliente. En algunos equipos también se calientan el fondo y el propio agitador.
- **Válvula de descarga lateral** (*side discharge valve*): una boca en el costado, a ras de la placa, por donde sale el sólido seco.
- **Entradas por arriba**: nitrógeno, suspensión y lavado, que cae repartido en forma de lluvia sobre la torta.
- **Salidas**: la línea de filtrado, por debajo de la placa, y la línea de vacío.

### La secuencia completa, paso a paso

1. **Comprobaciones e inertización**. Equipo limpio y liberado, tela íntegra, válvula de descarga cerrada. Se sustituye el aire por nitrógeno y se comprueba el oxígeno, igual que en el reactor. Por qué: casi siempre se filtra con disolventes inflamables.
2. **Carga de la suspensión** (*slurry*). Llega desde el cristalizador con el agitador del filtro levantado. Por qué: la torta debe formarse plana y de espesor parejo.
3. **Filtración**. Se aplica presión de nitrógeno o vacío y las **aguas madres** (*mother liquor*) salen por abajo. Se anota la presión, la hora y el volumen recogido.
4. **Alisado** (*smoothing*). El agitador baja hasta apoyarse en la torta y gira en el sentido de alisar. Por qué: cierra las grietas y deja la superficie plana antes de lavar.
5. **Lavado**. Por desplazamiento o por resuspensión; lo explicamos más abajo.
6. **Soplado** (*blow-down*). Se hace pasar nitrógeno a través de la torta. El gas arrastra parte del líquido que queda entre los cristales, sin calentar. Por qué: cuanto menos líquido quede, menos habrá que evaporar después.
7. **Secado**. Vacío, camisa caliente y agitador girando despacio dentro del sólido. El vacío hace que el disolvente se evapore a menos temperatura. El agitador lleva producto nuevo hacia las paredes calientes y ayuda a soltar el disolvente.
8. **Enfriado**. Se pasa fluido frío por la camisa. Por qué: no se descarga producto caliente, ni por las personas ni por el producto.
9. **Rotura del vacío con nitrógeno**. Se deja entrar nitrógeno hasta la presión atmosférica. Nunca aire.
10. **Descarga**. Se abre la válvula lateral. El agitador baja poco a poco girando y empuja el sólido hacia la boca, capa a capa.
11. **Talón** (*heel*). El agitador no puede rozar la placa, porque rompería la tela. Queda una capa fina de producto que no alcanza. Algunos equipos la sueltan con golpes de nitrógeno a través de la placa. Qué se hace con el talón lo dice la hoja.

### Por qué una torta agrietada lava mal

Cuando la torta pierde líquido se encoge, y al encogerse se raja. Una grieta es un atajo: ofrece mucha menos resistencia que la torta. El líquido de lavado, como cualquier fluido, se va por el camino fácil. Resultado: gastas todo el disolvente, y las zonas alejadas de la grieta siguen llenas de aguas madres con impurezas.

Es como regar una maceta con la tierra seca y despegada del borde: el agua baja por el hueco y sale por abajo, pero la tierra del centro sigue seca.

Con el gas del soplado pasa lo mismo: se escapa por la grieta y deja de arrastrar líquido del resto de la torta.

Qué se hace: **alisar** con el agitador para cerrar las grietas. Si la torta está muy agrietada o el lavado por desplazamiento no funciona, se lava por resuspensión. Y siempre se anota y se avisa.

### Los dos tipos de lavado

| | Por desplazamiento (*displacement wash*) | Por resuspensión (*reslurry wash*) |
|---|---|---|
| Cómo se hace | El disolvente limpio cae sobre la torta y se empuja a través de ella con presión o vacío | Se añade disolvente y el agitador deshace la torta hasta formar otra vez una suspensión; después se para, se levanta y se vuelve a filtrar |
| Idea | El líquido limpio empuja al sucio por delante, como un émbolo | Las impurezas se diluyen en el disolvente nuevo |
| Punto débil | Necesita una torta sin grietas | Hay que filtrar otra vez toda la torta |

### Por qué no se deja secar la torta entre lavados

Ya tienes las piezas. Si entre un lavado y el siguiente se sigue pasando gas, la torta pierde líquido, se encoge y se agrieta. El lavado siguiente se irá por las grietas. Por eso, salvo que la hoja pida soplar o escurrir entre lavados, se pasa de uno a otro sin secar la torta. Si la hoja sí lo pide, se hace tal cual: quien diseñó el proceso lo ha comprobado con ese producto.

### Dos cálculos resueltos

**Cálculo 1: volumen de torta y de lavado.** El filtro ficticio FD-402 tiene 2,0 m² de superficie filtrante. La torta mide 15 cm de espesor, es decir, 0,15 m. La hoja pide dos lavados de 1,5 volúmenes de torta cada uno.

- Volumen de torta: 2,0 m² × 0,15 m = 0,30 m³ = 300 L.
- Cada lavado: 1,5 × 300 L = 450 L.
- Total: 2 × 450 L = 900 L.

**Cálculo 2: balance de lo que entra y lo que sale.** Entran 1200 kg de suspensión y 480 kg de disolvente de lavado: 1680 kg. Por la línea de filtrado se recogen 1430 kg entre aguas madres y lavados.

- Torta húmeda que queda dentro: 1680 − 1430 = 250 kg.
- En el secado se recogen 50 kg de disolvente. Producto seco esperado: 250 − 50 = 200 kg.
- Humedad de la torta antes de secar: 50 / 250 × 100 = 20 %.
- Se descargan 196 kg. Talón: 200 − 196 = 4 kg, que es un 2 % del producto seco.

Si el balance no cuadra, falta producto en algún sitio: en la línea, en el filtrado o en una pesada mal anotada. Se investiga, no se ajusta.

### Ensayo de integridad de un cartucho: el punto de burbuja

Un cartucho roto filtra «bien» a simple vista: el líquido pasa, incluso más rápido. Por eso su estado se comprueba con un ensayo, sin romperlo.

El **punto de burbuja** (*bubble point*) funciona así. Se moja la membrana del filtro. El líquido se queda agarrado dentro de los poros, igual que el agua se queda en una pajita muy fina. Luego se aplica gas por un lado y se sube la presión poco a poco. Llega un momento en que el gas consigue echar el líquido de los poros más grandes y pasa al otro lado. Esa presión es el punto de burbuja.

La clave: cuanto más grande es el agujero, menos presión hace falta para vaciarlo. Si el gas pasa a una presión menor que el mínimo que da el fabricante, hay poros demasiado grandes o un defecto. El filtro no es íntegro y no vale. El valor depende del líquido con el que se moja, así que el ensayo se hace siempre como dice el procedimiento.

Las normas europeas de fabricación de medicamentos estériles (Anexo 1 de las GMP de la Unión Europea) citan el punto de burbuja como uno de los ensayos de integridad, junto con el de flujo difusivo (*diffusive flow*), el de intrusión de agua (*water intrusion*) y el de mantenimiento de presión (*pressure hold*).

### Riesgos

- **Disolventes inflamables**. El equipo se inertiza antes de cargar y se mantiene con nitrógeno. El vacío se rompe con nitrógeno porque dentro hay vapores de disolvente y superficies calientes: si entrara aire, entraría el oxígeno que falta para arder.
- **Nitrógeno**. No huele, no tiene color y no avisa. El aire tiene un 21 % de oxígeno; por debajo del 16 % la atmósfera ya es peligrosa. No se mete la cabeza en una boca de hombre ni en la zona de descarga de un equipo inertizado.
- **Presión**. No se supera la presión de la hoja. Antes de abrir cualquier boca o válvula al exterior se comprueba que el equipo está a presión atmosférica.
- **Exposición al producto**. La descarga es el momento en que el polvo de API está más cerca del operador. Se usa el sistema cerrado previsto (por ejemplo, un aislador o un contenedor acoplado) y el equipo de protección que marca el procedimiento.
- **Superficies calientes**. Camisa, fondo y líneas de calefacción queman durante el secado. Se enfría antes de descargar.
- **Agitador**. No se mete la mano por la boca de descarga con el equipo sin bloquear.

### Qué vigila y qué anota el operador

- Oxígeno antes de cargar.
- Presión encima de la torta, presión debajo y la diferencia entre las dos.
- Hora de inicio y de fin de cada paso: una filtración mucho más lenta que la de otros lotes es una señal que se comunica.
- Volumen o peso de aguas madres y de cada lavado, tanto lo que entra como lo que sale.
- Aspecto de la torta por la mirilla: plana, con grietas, despegada de la pared.
- En el secado: temperatura de camisa y de producto, vacío, y las muestras.
- Peso descargado y qué se hizo con el talón.

En planta manda siempre el procedimiento vigente (SOP) y la hoja de producción de tu lote. Los números de esta lección son ejemplos inventados para aprender, no parámetros de ningún proceso real.
`,
  plant: `
Turno de mañana. En el filtro-secador ficticio FD-402 toca el lote de un intermedio inventado, KR-17, cristalizado en isopropanol. Todos los valores son de ejemplo.

Empiezas por lo que no se ve: etiqueta de limpio, tela revisada, válvula de descarga cerrada y oxígeno por debajo del límite de la hoja. Cargas la suspensión desde el cristalizador con el agitador arriba. Aplicas 1,5 bar de nitrógeno. Al principio el filtrado sale a chorro; a los veinte minutos es un hilo. Es lo esperado: la torta ha crecido.

Por la mirilla ves dos grietas que van de la pared hacia el centro. No lavas todavía. Bajas el agitador hasta la torta y lo giras en el sentido de alisar, como dice la hoja. Las grietas se cierran. Lo anotas, con la hora.

Primer lavado: 450 L de isopropanol frío en forma de lluvia. Recoges 440 L. Segundo lavado, sin soplar entre medias: otros 450 L. Después, soplado con nitrógeno hasta que por la línea de filtrado casi no gotea.

Secado: vacío, camisa a 50 °C y agitador lento. A las ocho horas la muestra cumple. Enfrías a 25 °C, rompes el vacío con nitrógeno y compruebas que el manómetro marca presión atmosférica.

Descargas por la válvula lateral a un contenedor acoplado: 196 kg. Sobre la placa queda el talón. Haces con él lo que marca la hoja y lo dejas escrito para el relevo.
`,
  batchRecord: `
- **Antes de cargar**: comprobación de limpieza y de la tela, válvula de descarga cerrada, lectura de oxígeno con hora y firma.
- **Filtración**: presión de nitrógeno o vacío aplicado, presión diferencial (ΔP), hora de inicio y de fin, volumen o peso de aguas madres.
- **Alisado**: si se hizo, cuántas veces y por qué (por ejemplo, «grietas visibles por la mirilla»).
- **Lavados**: disolvente y lote, cantidad cargada y cantidad recogida de cada lavado, tipo de lavado (desplazamiento o resuspensión), tiempos. Si hay muestra de las aguas de lavado, hora y resultado.
- **Soplado**: presión y duración.
- **Secado**: temperatura de camisa y de producto, vacío y velocidad del agitador a intervalos; muestras con hora, resultado, especificación y decisión.
- **Enfriado y rotura del vacío**: temperatura final del producto y confirmación de que el vacío se rompió con nitrógeno.
- **Descarga**: peso de cada contenedor, peso total y rendimiento; qué se hizo con el talón.
- **Filtros de cartucho**: identificación del cartucho y resultado del ensayo de integridad frente al mínimo del fabricante.
- Cualquier cosa fuera de lo habitual (filtración lenta, torta agrietada, balance que no cuadra) se anota en el momento y se comunica; puede abrirse una desviación.
`,
  terms: [
    { es: "Diferencia de presión", en: "Pressure difference", def: "Más presión a un lado del filtro que al otro; es lo que empuja el líquido a través de la torta." },
    { es: "Ley de Darcy", en: "Darcy's law", def: "Regla que dice que el caudal a través de una capa porosa crece con la superficie y la diferencia de presión, y baja con la viscosidad y el espesor." },
    { es: "Permeabilidad", en: "Permeability", def: "Facilidad con la que una capa porosa, como la torta, deja pasar un fluido." },
    { es: "Aguas madres", en: "Mother liquor", def: "Líquido que acompaña a los cristales después de cristalizar; lleva disueltas las impurezas." },
    { es: "Alisado", en: "Smoothing", def: "Paso en el que el agitador se apoya en la torta y gira para cerrar grietas y dejarla plana." },
    { es: "Lavado por desplazamiento", en: "Displacement wash", def: "Lavado en el que el disolvente limpio atraviesa la torta y empuja por delante el líquido sucio." },
    { es: "Lavado por resuspensión", en: "Reslurry wash", def: "Lavado en el que la torta se deshace en disolvente limpio con el agitador y se vuelve a filtrar." },
    { es: "Soplado", en: "Blow-down", def: "Paso de nitrógeno a través de la torta para arrastrar parte del líquido que queda entre los cristales." },
    { es: "Talón", en: "Heel", def: "Capa fina de producto que queda sobre la placa filtrante porque el agitador no puede rozarla." },
    { es: "Válvula de descarga lateral", en: "Side discharge valve", def: "Boca en el costado del filtro-secador por la que el agitador saca el sólido seco." },
    { es: "Punto de burbuja", en: "Bubble point", def: "Presión de gas a la que un filtro mojado deja pasar gas por sus poros más grandes; sirve para comprobar su integridad." },
    { es: "Filtro prensa", en: "Filter press", def: "Filtro formado por placas con tela apretadas entre sí; el sólido llena las cámaras que quedan entre ellas." },
  ],
  quiz: [
    {
      kind: "choice",
      q: "Filtras a presión constante de nitrógeno y el caudal de filtrado va bajando poco a poco. ¿Cuál es la explicación más probable?",
      options: [
        "El nitrógeno se está disolviendo en las aguas madres",
        "La tela se ha roto y deja pasar parte del sólido",
        "La torta crece y el líquido tiene más camino que cruzar",
        "El líquido se ha enfriado y ya no puede fluir más",
      ],
      answer: 2,
      explain: "A presión constante el caudal baja porque la torta es cada vez más gruesa y opone más resistencia. Es el comportamiento normal de una filtración con torta.",
    },
    {
      kind: "choice",
      q: "¿Cuál es la diferencia de presión máxima, aproximada, que se puede conseguir filtrando solo con vacío?",
      options: [
        "Alrededor de 1 bar, la presión atmosférica",
        "Alrededor de 3 bar, según la bomba de vacío",
        "Alrededor de 6 bar, como con el nitrógeno",
        "No hay límite si la bomba es muy potente",
      ],
      answer: 0,
      explain: "Con vacío, arriba queda la presión atmosférica (1 bar, más o menos) y abajo, como mucho, nada. La diferencia no puede pasar de 1 bar, aproximadamente.",
    },
    {
      kind: "number",
      q: "Un filtro tiene 1,6 m² de superficie y la torta mide 25 cm de espesor. La hoja pide un lavado de 1,5 volúmenes de torta. ¿Cuántos litros de disolvente cargas?",
      answer: 600,
      tolerance: 0.01,
      unit: "L",
      explain: "Volumen de torta: 1,6 m² × 0,25 m = 0,4 m³ = 400 L. Lavado: 1,5 × 400 L = 600 L.",
    },
    {
      kind: "choice",
      q: "Antes del lavado ves por la mirilla que la torta tiene grietas. ¿Qué paso sirve para cerrarlas?",
      options: [
        "Subir la presión de nitrógeno para apretar la torta",
        "Empezar el secado para que la torta se asiente sola",
        "Abrir la válvula de descarga y vaciar una parte",
        "Alisar la torta con el agitador, como diga la hoja",
      ],
      answer: 3,
      explain: "En el alisado el agitador se apoya en la torta y gira para cerrar las grietas. Si no se cierran, el lavado se escapa por ellas. Se anota y se comunica.",
    },
    {
      kind: "choice",
      q: "¿En qué se diferencia el lavado por resuspensión del lavado por desplazamiento?",
      options: [
        "En la resuspensión el disolvente entra por debajo de la placa",
        "En la resuspensión la torta se deshace en el disolvente y se filtra otra vez",
        "En la resuspensión se lava con las aguas madres del lote anterior",
        "En la resuspensión no se usa disolvente, solo nitrógeno a presión",
      ],
      answer: 1,
      explain: "En la resuspensión el agitador mezcla la torta con disolvente limpio hasta formar una suspensión, y luego se vuelve a filtrar. En el desplazamiento el disolvente atraviesa la torta sin deshacerla.",
    },
    {
      kind: "number",
      q: "Dentro del filtro hay 180 kg de torta húmeda. Durante el secado se recogen 27 kg de disolvente. ¿Qué porcentaje de humedad tenía la torta húmeda?",
      answer: 15,
      tolerance: 0.01,
      unit: "%",
      explain: "27 / 180 × 100 = 15 %. El producto seco esperado es 180 − 27 = 153 kg.",
    },
    {
      kind: "choice",
      q: "¿Por qué, si la hoja no dice otra cosa, no se deja secar la torta entre un lavado y el siguiente?",
      options: [
        "Porque el producto seco reacciona con el disolvente de lavado",
        "Porque una torta seca pesa menos y el balance ya no cuadra",
        "Porque el nitrógeno del soplado ensucia la torta con impurezas",
        "Porque al perder líquido se agrieta y el lavado se va por las grietas",
      ],
      answer: 3,
      explain: "Al perder líquido la torta se encoge y se raja. Las grietas son un atajo para el disolvente, que sale sin lavar el resto de la torta.",
    },
    {
      kind: "choice",
      q: "En el ensayo de punto de burbuja, el gas atraviesa el cartucho a una presión menor que el mínimo del fabricante. ¿Qué significa?",
      options: [
        "Que el filtro retiene mejor de lo que se esperaba",
        "Que hay poros demasiado grandes o un defecto: no es íntegro",
        "Que el filtro está colmatado y hay que lavarlo antes",
        "Que la membrana estaba demasiado mojada al ensayar",
      ],
      answer: 1,
      explain: "Cuanto mayor es el agujero, menos presión hace falta para que pase el gas. Un valor por debajo del mínimo indica un filtro no íntegro; no se usa y se comunica.",
    },
    {
      kind: "number",
      q: "Durante la filtración el manómetro de encima de la torta marca 2,0 bar y el de debajo de la placa marca 0,3 bar. ¿Cuál es la presión diferencial?",
      answer: 1.7,
      tolerance: 0.01,
      unit: "bar",
      explain: "ΔP = 2,0 − 0,3 = 1,7 bar. Es la diferencia de presión que empuja el líquido a través de la torta y la tela.",
    },
    {
      kind: "choice",
      q: "Termina el secado en el filtro-secador, que ha trabajado con un disolvente inflamable. ¿Cómo se rompe el vacío?",
      options: [
        "Con nitrógeno, hasta llegar a la presión atmosférica",
        "Con aire de la sala, que es lo más rápido y sencillo",
        "Con vapor de la camisa, para que no se enfríe nada",
        "Abriendo despacio la válvula de descarga lateral",
      ],
      answer: 0,
      explain: "Dentro hay vapores de disolvente y superficies calientes. Si entrara aire, aportaría el oxígeno que falta para que pudieran arder. Por eso el vacío se rompe con nitrógeno.",
    },
  ],
};
