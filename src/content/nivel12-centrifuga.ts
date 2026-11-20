import type { Lesson } from "./types";

export const centrifugaAFondo: Lesson = {
  slug: "centrifuga-a-fondo",
  level: 12,
  order: 9,
  title: "La centrífuga a fondo: fuerza G, ciclo completo y qué hacer cuando vibra",
  titleEn: "The centrifuge in depth: G-force, full cycle and what to do when it vibrates",
  minutes: 30,
  summary:
    "Por qué girar separa, cómo se calcula la fuerza G, cómo se descarga cada tipo de centrífuga, el ciclo completo paso a paso y cómo actuar ante una alarma de vibración.",
  body: `
En la lección anterior viste qué es una centrífuga y sus fases. Aquí vamos al fondo: **por qué** funciona, **cuánta fuerza** hace, qué pasa en **cada paso** del ciclo y qué hacer cuando **vibra**.

### Por qué girar separa
Vas de copiloto y el coche toma una curva cerrada. Tu cuerpo se va hacia la puerta. Nadie te empuja: tu cuerpo quiere **seguir recto** y es el coche el que gira. La puerta te sujeta y te obliga a girar con él.

En la centrífuga pasa lo mismo. La **cesta** (*basket*) gira y todo lo que hay dentro quiere seguir recto, así que se aprieta contra la pared. A ese empuje hacia fuera lo llamamos **fuerza centrífuga** (*centrifugal force*).

La pared de la cesta tiene agujeros y está forrada con la tela filtrante. El líquido cabe por los poros de la tela y sale. Los cristales no caben y se quedan formando la torta. Es lo que hace el **centrifugado de la lavadora**: la ropa se queda en el tambor y el agua sale por los agujeros.

### La fuerza G: qué significa "800 g"
Para decir cuánto aprieta una centrífuga se compara con la gravedad. La gravedad de la Tierra acelera las cosas hacia abajo a 9,80665 m/s² (valor normalizado). A eso se le llama **1 g**.

La **fuerza centrífuga relativa** (*relative centrifugal force, RCF*), o **fuerza G**, dice cuántas veces más fuerte que la gravedad es el empuje dentro de la cesta. Si una centrífuga trabaja a **800 g**, cada kilo de líquido aprieta contra la torta como si pesara 800 kilos. Por eso escurre en minutos lo que por su propio peso tardaría horas.

Cuidado con la letra: aquí "g" es "veces la gravedad", no gramos.

### De dónde sale la fórmula
La fuerza G depende solo de dos cosas: lo **rápido** que gira la cesta y lo **grande** que es.

1. Un objeto que gira en círculo tiene una aceleración hacia el centro que vale **ω² × r**. La letra ω (omega) es la velocidad de giro medida en radianes por segundo y r es el radio, la distancia del eje a la pared.
2. En planta la velocidad se da en **revoluciones por minuto** (*rpm*). Una vuelta son 2π radianes y un minuto son 60 segundos, así que ω = 2π × rpm / 60.
3. Para saber cuántas "g" son, se divide esa aceleración entre la gravedad. Con el radio en centímetros, la gravedad vale 980,665 cm/s².

Juntando todo: (2π / 60)² = 0,010966, y 0,010966 / 980,665 = 0,00001118. Queda la fórmula que verás en los manuales:

> **RCF = 1,118 × 10⁻⁵ × r (cm) × rpm²**

El número 1,118 × 10⁻⁵ es lo mismo que 0,00001118. Ojo: r es el **radio**, la mitad del diámetro de la cesta.

### Doblar las rpm multiplica por cuatro
En la fórmula las rpm están **al cuadrado**. Si giras el doble de rápido, la fuerza no es el doble: es 2 × 2 = **4 veces** mayor. Si giras el triple, es 3 × 3 = 9 veces mayor. El radio, en cambio, va sin cuadrado: una cesta el doble de grande a las mismas rpm da el doble de fuerza.

Por eso unas pocas rpm de más en el escurrido final se notan mucho, y por eso un desequilibrio que a baja velocidad apenas se nota se vuelve peligroso a alta velocidad.

### Ejemplos resueltos
Cesta de **1 m de diámetro**: el radio es 50 cm.

| Velocidad | Cálculo | Fuerza G |
|---|---|---|
| 400 rpm | 0,00001118 × 50 × 400² = 0,00001118 × 50 × 160 000 | 89 g |
| 800 rpm | 0,00001118 × 50 × 640 000 | 358 g |
| 1200 rpm | 0,00001118 × 50 × 1 440 000 | 805 g |

Fíjate: de 400 a 800 rpm (el doble) se pasa de 89 a 358 g, cuatro veces más. De 400 a 1200 rpm (el triple), de 89 a 805 g, nueve veces más.

**Cálculo inverso.** ¿A cuántas rpm hay que girar esa misma cesta para tener 500 g? Se despeja: rpm² = RCF / (0,00001118 × r) = 500 / (0,00001118 × 50) = 894 454. La raíz cuadrada da **946 rpm**.

**Para hacerse una idea.** A 1200 rpm, el borde de esa cesta de 1 m recorre 3,14 m en cada vuelta y da 20 vueltas por segundo: se mueve a 62,8 m/s, unos 226 km/h. Por eso nunca se abre una centrífuga que no esté totalmente parada.

### Tipos de centrífuga filtrante y cómo se descargan
Todas filtran igual. Cambia cómo se saca la torta, y con ello cuánto se acerca el operador al producto.

| Tipo | Cómo se descarga | Ventajas | Exposición del operador |
|---|---|---|---|
| **Vertical de descarga superior** (*top discharge*) | Con la cesta parada y la tapa abierta: a mano con pala, o izando el saco filtrante (*filter bag*) con un polipasto | Sencilla, económica, no deja capa residual | La más alta: el contacto con el producto no se puede evitar salvo que se añada contención |
| **Vertical de descarga inferior** (*bottom discharge*) | Un rascador (*scraper / plough*) corta la torta con la cesta girando despacio y el sólido cae por una tolva en el fondo | No hay que abrir la tapa; descarga a contenedor o secadero | Baja, si la salida está conectada de forma cerrada |
| **Horizontal de rasqueta** (*peeler centrifuge*) | Una cuchilla (*peeler knife*) entra en la torta con la cesta girando y la manda a un conducto de descarga | Ciclo automático, equipo cerrado | Baja |
| **De tela invertida** (*inverting filter centrifuge*) | La tela se vuelve del revés con la cesta girando y la torta sale despedida a la carcasa | No deja capa residual sobre la tela; trabaja con tortas finas | Baja |

### El talón o capa residual
En las centrífugas con rascador o rasqueta, la cuchilla **se detiene un poco antes de tocar la tela** para no romperla. Queda pegada una capa fina de torta sin descargar: el **talón** (*heel*).

Por qué importa:
- **Filtración.** Carga tras carga, el talón se va compactando con partículas finas hasta volverse casi impermeable. La siguiente carga filtra peor y más despacio.
- **Calidad.** Es producto de una carga anterior que se queda en el equipo. El procedimiento dice cuántas cargas se pueden hacer antes de retirarlo y cómo.
- **Cómo se retira.** Según el equipo: con un soplado de gas, con un chorro grande de líquido o lavando a contracorriente.

Las de descarga superior con saco y las de tela invertida no dejan talón, porque no usan cuchilla.

### El ciclo completo, paso a paso
1. **Comprobaciones previas.** Equipo limpio y liberado. Tela o saco filtrante correcto, bien colocado y sin roturas: por un agujero se escapa el producto. **Puesta a tierra** (*earthing*) conectada.
2. **Inertización y control de oxígeno.** Dentro habrá vapores de disolvente inflamable, piezas a gran velocidad y líquido rozando la tela, que genera electricidad estática. Se llena de nitrógeno para quitar el oxígeno, y un analizador mide el **% de O₂**. Se mide oxígeno, y no solo la presión de nitrógeno, porque la presión no distingue qué gas hay dentro. Sin oxígeno por debajo del límite del procedimiento, no se arranca.
3. **Arranque y carga a baja velocidad.** La suspensión entra con la cesta ya girando despacio. Así se reparte por toda la pared y no salpica.
4. **Reparto uniforme de la torta.** Es el punto crítico del ciclo. Si la torta queda más gruesa en un lado, la cesta queda desequilibrada. Se alimenta al caudal que diga la hoja, sin prisas, hasta el nivel de llenado indicado, sin que rebose por el borde de la cesta.
5. **Aceleración.** Con la torta ya formada y repartida, se sube la velocidad.
6. **Escurrido de aguas madres** (*mother liquor*). La fuerza G empuja el líquido a través de la torta y de la tela. Las aguas madres se llevan las impurezas disueltas.
7. **Lavado de la torta** (*cake wash*). Se rocía disolvente limpio, que empuja y sustituye a las aguas madres que aún mojan los cristales.
8. **Escurrido final** (*spin dry*). A la velocidad más alta y durante el tiempo indicado. Cuanto mejor escurre, menos trabajo tiene después el secadero.
9. **Frenado.** La cesta tarda en pararse. La tapa sigue bloqueada.
10. **Descarga.** Según el tipo de máquina, como en la tabla.
11. **Limpieza.** Entre cargas o entre lotes, según el procedimiento.

### Lavado por desplazamiento y lavado por resuspensión
**Lavado por desplazamiento** (*displacement wash*). El disolvente limpio atraviesa la torta **sin moverla** y va empujando por delante al líquido sucio, como un émbolo. Es el lavado normal en una centrífuga, porque la torta está pegada a la pared. Funciona bien si la torta está entera y es uniforme. Si tiene **grietas**, el disolvente se cuela por ellas y deja zonas sin lavar.

**Lavado por resuspensión** (*reslurry wash*). Se mezcla de nuevo el sólido con disolvente limpio hasta formar otra suspensión, se agita un tiempo y se vuelve a filtrar. Hace falta un equipo con agitador: un reactor o un filtro-secador agitado. Conviene cuando la impureza necesita **tiempo de contacto** para disolverse, cuando la torta está muy agrietada o cuando el lavado por desplazamiento no consigue la pureza.

Tú no eliges el tipo de lavado: viene fijado en la hoja. Pero entender la diferencia te explica por qué la hoja insiste en repartir bien el lavado y en no dejar que la torta se agriete.

### Vibración: causas y qué hacer
Una cesta equilibrada gira suave. Si hay más peso en un lado, ese lado tira hacia fuera con más fuerza en cada vuelta y toda la máquina se sacude.

Un cálculo lo deja claro. En la cesta de 1 m a 1200 rpm hay 805 g. Dos kilos de torta de más en un lado tiran como 2 × 805 = 1610 kilos, cambiando de dirección 20 veces por segundo.

Causas típicas:
- **Carga desigual**: la torta ha quedado más gruesa en una zona. Es la causa más frecuente.
- **Cargar demasiado rápido**: la suspensión no tiene tiempo de repartirse.
- **Cualquier otra cosa que deje más peso en un lado que en otro**: una tela mal colocada o rota por la que se escapa sólido, o un trozo de torta que se desprende. El principio es siempre el mismo: masa mal repartida.
- **Causas mecánicas**: piezas desgastadas o flojas. Eso lo diagnostica mantenimiento, no el operador.

**El enclavamiento de vibración** (*vibration interlock*). Un sensor mide la vibración. Si supera el límite, corta la alimentación o para la máquina de forma automática. Es una protección: nunca se anula ni se puentea.

**Qué hace el operador:**
1. Deja que la máquina frene sola hasta la **parada total**.
2. **No rearma** la alarma para volver a arrancar sin más.
3. **No abre** la tapa mientras gire.
4. **Avisa** al responsable de turno y anota hora, fase y velocidad.
5. Solo se reanuda como diga el procedimiento, normalmente tras revisar el reparto de la torta y el estado de la tela.

### Riesgos
- **Atmósfera inflamable.** El nitrógeno quita el oxígeno, uno de los tres lados del triángulo del fuego. Cada vez que se abre la tapa entra aire: hay que volver a inertizar.
- **El nitrógeno no se respira.** Una atmósfera inerte no tiene oxígeno suficiente para una persona. Nunca metas la cabeza en una centrífuga inertizada.
- **Electricidad estática.** La protección principal es la puesta a tierra de la máquina y de todo lo metálico que se conecta a ella, incluidos los contenedores de descarga.
- **Partes giratorias.** La tapa tiene un **enclavamiento con bloqueo** (*interlock with guard locking*): no deja arrancar con la tapa abierta y la mantiene bloqueada hasta que la cesta se para del todo.
- **Exposición al producto.** La descarga es el momento de más contacto, sobre todo en la descarga superior. Se usan los equipos de protección y la contención que marque el procedimiento.

### Qué vigila y qué anota el operador
- **% de O₂** antes de arrancar y durante el ciclo.
- **Velocidad** (rpm) y **tiempo** de cada fase.
- **Vibración** y cualquier alarma, con su hora.
- **Aspecto del filtrado**: claro o turbio.
- **Volúmenes de lavado** y su reparto.
- **Peso de torta húmeda** de cada carga.
- Estado de la **tela** antes y después.

En planta manda siempre el procedimiento vigente (*SOP*) y la hoja de producción: las velocidades, tiempos y límites de tu centrífuga son los que diga tu procedimiento, no los ejemplos de esta lección.
`,
  plant: `
En la planta ficticia, la centrífuga **C-305** es vertical de descarga inferior con rascador y tiene una cesta de 1 m de diámetro. Hoy recibe la suspensión del cristalizador **R-204**: el intermedio ficticio **VX-22** en isopropanol.

Revisas la tela, la etiqueta de equipo limpio y la pinza de tierra del contenedor de descarga. Inertizas y el analizador marca 1,8 % de O₂, por debajo del límite de la hoja. Arrancas a 400 rpm (89 g) y abres la alimentación al caudal indicado. Con la carga dentro, la hoja pide escurrir a 1000 rpm (559 g) durante 10 minutos, lavar con dos porciones de 40 L de isopropanol frío y hacer el escurrido final a 1200 rpm (805 g) durante 20 minutos.

En la segunda carga, al acelerar, salta la alarma de vibración a 700 rpm y la máquina frena sola. No rearmas. Esperas a la parada total, avisas a la jefa de turno y lo anotas con la hora. Con su autorización y siguiendo el procedimiento, se vuelve a inertizar, se revisa el reparto de la torta y se reanuda como indica el procedimiento. La causa: en esa carga la alimentación se había abierto más deprisa de lo indicado.

Al terminar, el rascador descarga con la cesta girando despacio al contenedor cerrado. Pesas la torta húmeda y anotas que queda talón en la cesta, como prevé el procedimiento.
`,
  batchRecord: `
- **Antes de empezar**: equipo limpio y liberado, identificación y estado de la tela o saco filtrante, puesta a tierra comprobada.
- **Inertización**: % de O₂ medido antes de arrancar, con hora y firma.
- **Por cada carga** (*load*): velocidad de alimentación, velocidad y tiempo de escurrido, volumen y número de lavados, velocidad y tiempo del escurrido final.
- **Filtrado**: aspecto (claro o turbio) y, si la hoja lo pide, muestra de las aguas de lavado.
- **Descarga**: peso de torta húmeda de cada carga y total; si queda talón y cuándo se retira.
- **Incidencias**: alarmas de vibración o de oxígeno con hora, fase, velocidad, a quién se avisó y qué se hizo. Una parada por vibración se anota siempre, aunque después todo vaya bien.
- Cada dato se anota en el momento, con el valor real leído, no con el valor teórico de la hoja.
`,
  terms: [
    { es: "Fuerza centrífuga", en: "Centrifugal force", def: "Empuje hacia fuera que nota todo lo que gira, porque tiende a seguir en línea recta." },
    { es: "Fuerza G o fuerza centrífuga relativa", en: "Relative centrifugal force (RCF)", def: "Número de veces que el empuje dentro de la cesta supera a la gravedad. Se expresa en g." },
    { es: "Revoluciones por minuto", en: "Revolutions per minute (rpm)", def: "Vueltas completas que da la cesta en un minuto." },
    { es: "Aguas madres", en: "Mother liquor", def: "Líquido que queda tras cristalizar el producto; lleva disueltas las impurezas." },
    { es: "Saco filtrante", en: "Filter bag", def: "Tela en forma de bolsa que forra la cesta y puede izarse con la torta dentro." },
    { es: "Rascador", en: "Scraper / plough", def: "Cuchilla que corta la torta de la cesta en las centrífugas verticales de descarga inferior." },
    { es: "Centrífuga de rasqueta", en: "Peeler centrifuge", def: "Centrífuga, normalmente horizontal, que descarga la torta con una cuchilla mientras la cesta gira." },
    { es: "Centrífuga de tela invertida", en: "Inverting filter centrifuge", def: "Centrífuga que descarga volviendo la tela del revés, sin dejar capa residual." },
    { es: "Talón o capa residual", en: "Heel", def: "Capa fina de torta que queda sobre la tela porque la cuchilla no llega a tocarla." },
    { es: "Lavado por desplazamiento", en: "Displacement wash", def: "Lavado en el que el disolvente limpio atraviesa la torta sin moverla y empuja al líquido sucio." },
    { es: "Lavado por resuspensión", en: "Reslurry wash", def: "Lavado en el que el sólido se vuelve a mezclar con disolvente limpio, se agita y se filtra otra vez." },
    { es: "Enclavamiento", en: "Interlock", def: "Protección automática que impide una acción peligrosa o para la máquina si se da una condición insegura." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Una cesta de 1,2 m de diámetro gira a 900 rpm. ¿Qué fuerza G hay en la pared? Usa RCF = 0,00001118 × r (cm) × rpm².",
      answer: 543,
      tolerance: 0.02,
      unit: "g",
      explain: "El radio es la mitad del diámetro: 60 cm. RCF = 0,00001118 × 60 × 900² = 0,00001118 × 60 × 810 000 = 543 g.",
    },
    {
      kind: "choice",
      q: "Una centrífuga pasa de 600 a 1200 rpm. ¿Qué le ocurre a la fuerza G?",
      options: [
        "Se queda igual, solo depende del radio",
        "Se multiplica por dos, como las rpm",
        "Se multiplica por cuatro, por el cuadrado",
        "Se multiplica por ocho, por el diámetro",
      ],
      answer: 2,
      explain: "Las rpm van al cuadrado en la fórmula: el doble de velocidad da 2 × 2 = 4 veces más fuerza.",
    },
    {
      kind: "number",
      q: "Una cesta de 80 cm de diámetro debe trabajar a 600 g. ¿A cuántas rpm tiene que girar?",
      answer: 1158,
      tolerance: 0.02,
      unit: "rpm",
      explain: "El radio es 40 cm. rpm² = 600 / (0,00001118 × 40) = 1 341 682. La raíz cuadrada da 1158 rpm.",
    },
    {
      kind: "choice",
      q: "¿Qué es el talón (heel) de una centrífuga de rasqueta?",
      options: [
        "La capa fina de torta que la cuchilla deja sobre la tela",
        "La pieza metálica que sujeta la cesta al eje del motor",
        "El líquido de lavado que queda en el fondo de la carcasa",
        "La primera porción de suspensión que entra en la cesta",
      ],
      answer: 0,
      explain: "La cuchilla se para antes de tocar la tela para no romperla, y queda una capa residual que con las cargas se compacta y filtra peor.",
    },
    {
      kind: "choice",
      q: "Salta la alarma de vibración durante la aceleración y la máquina empieza a frenar. ¿Qué haces?",
      options: [
        "Rearmo la alarma y acelero más despacio para ver si aguanta",
        "Abro la tapa enseguida para ver cómo ha quedado la torta",
        "Añado más suspensión para que la carga se equilibre sola",
        "Espero a la parada total, no rearmo, aviso y lo anoto",
      ],
      answer: 3,
      explain: "El enclavamiento es una protección. No se rearma sin más ni se abre con la cesta girando: se espera a la parada total, se avisa y se sigue el procedimiento.",
    },
    {
      kind: "number",
      q: "A 500 rpm una centrífuga da 140 g. ¿Cuántas g dará la misma centrífuga a 1500 rpm?",
      answer: 1260,
      tolerance: 0.02,
      unit: "g",
      explain: "1500 rpm es el triple de 500 rpm. La fuerza se multiplica por 3 × 3 = 9: 140 × 9 = 1260 g.",
    },
    {
      kind: "choice",
      q: "¿En qué tipo de centrífuga está el operador más expuesto al producto al descargar?",
      options: [
        "En la horizontal de rasqueta con conducto de descarga",
        "En la vertical de descarga superior, a mano o con saco",
        "En la de tela invertida, que descarga a la carcasa",
        "En la vertical de descarga inferior con rascador",
      ],
      answer: 1,
      explain: "En la descarga superior se abre la tapa y la torta se saca a mano o izando el saco: el contacto con el producto no se evita salvo que se añada contención.",
    },
    {
      kind: "choice",
      q: "¿Cuándo conviene un lavado por resuspensión en lugar de uno por desplazamiento?",
      options: [
        "Cuando la impureza necesita tiempo de contacto para disolverse",
        "Cuando la torta está entera, uniforme y sin ninguna grieta",
        "Cuando se quiere gastar la menor cantidad de nitrógeno",
        "Cuando la centrífuga no dispone de sensor de vibración",
      ],
      answer: 0,
      explain: "Al resuspender, el sólido se agita con disolvente limpio el tiempo necesario. También conviene si la torta está muy agrietada o el desplazamiento no basta.",
    },
    {
      kind: "number",
      q: "En una cesta que trabaja a 800 g quedan 3 kg de torta de más en un lado. ¿Con cuántos kilos de fuerza tira ese exceso?",
      answer: 2400,
      tolerance: 0.02,
      unit: "kg",
      explain: "A 800 g cada kilo empuja como 800 kilos: 3 × 800 = 2400 kg. Por eso un pequeño desequilibrio sacude toda la máquina.",
    },
    {
      kind: "choice",
      q: "¿Por qué se mide el % de oxígeno y no basta con ver que hay presión de nitrógeno?",
      options: [
        "Porque el nitrógeno a presión estropea la tela filtrante",
        "Porque el oxígeno hace que la torta escurra más despacio",
        "Porque la presión no distingue qué gas hay dentro del equipo",
        "Porque el analizador de oxígeno también mide la vibración",
      ],
      answer: 2,
      explain: "Un manómetro marca presión haya nitrógeno, aire o vapores. Solo el analizador confirma que el oxígeno está por debajo del límite del procedimiento.",
    },
  ],
};
