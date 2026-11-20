import type { Lesson } from "./types";

export const atexAFondo: Lesson = {
  slug: "atex-a-fondo",
  level: 15,
  order: 5,
  title: "Atmósferas explosivas a fondo: por qué arde un disolvente y cómo se evita",
  titleEn: "Explosive atmospheres in depth: why a solvent burns and how to prevent it",
  minutes: 38,
  summary:
    "Punto de inflamación, límites de explosividad y autoignición leídos en la ficha; las zonas con su definición legal; equipos con marcado Ex; las fuentes de ignición una a una, con la electricidad estática y el polvo a fondo, y diez reglas para trabajar en zona clasificada.",
  body: `
En la lección «Incendio, explosión y zonas ATEX» viste el triángulo del fuego, los límites y las zonas en pocas líneas. Aquí vas a entender de dónde sale cada cosa y qué te toca hacer a ti. La inertización tiene su propia lección en el nivel 12 y aquí no se repite.

### Lo que arde es el vapor
Para que haya fuego o explosión hacen falta tres cosas a la vez: combustible, oxígeno del aire y una fuente de ignición (*ignition source*) que dé la energía inicial.

Pero el combustible tiene que estar muy bien mezclado con el aire. Eso solo pasa de cuatro formas: gas, vapor, niebla (gotas muy finas) y polvo fino en suspensión. Un líquido no arde «en líquido»: arde el vapor que sale de su superficie y se mezcla con el aire. Como en una taza de café: lo que te llega a la nariz no es el café, es lo que sale de él.

Dos consecuencias:

- Cuanto más caliente está un disolvente, más vapor suelta.
- Los vapores viajan. La mayoría pesan más que el aire: bajan y se acumulan a ras de suelo, lejos de donde salieron.

### Tres números de cada disolvente
**Punto de inflamación** (*flash point*). Es la temperatura mínima a la que el líquido desprende vapor suficiente para que la mezcla de vapor y aire se inflame si le llega una fuente de ignición. Cuanto más bajo, más peligroso. El del tolueno son 4 °C: en una sala a 20 °C está siempre por encima. El del éter etílico son −45 °C.

**Límites de explosividad.** El vapor solo arde si está mezclado con el aire en cierta proporción. Piensa en una hoguera: con cuatro ramitas sueltas no prende (falta combustible) y con la leña apretada, sin huecos, tampoco (falta aire).

- **Límite inferior de explosividad**, LIE (*lower explosive limit*, LEL): por debajo, la mezcla es demasiado pobre.
- **Límite superior de explosividad**, LSE (*upper explosive limit*, UEL): por encima, es demasiado rica.

En la lección anterior los viste como LII y LSI, de «inflamabilidad». Es lo mismo. Se dan en porcentaje en volumen de vapor en el aire. Tolueno: de 1,2 % a 7 %. Éter etílico: de 1,7 % a 48 %. Estos valores cambian un poco de una fuente a otra (la ficha de tolueno de esta app da de 1,1 % a 7,1 %): en planta vale siempre el de la ficha de datos de seguridad del producto.

Dos avisos. Estar por encima del LSE no es estar a salvo: en cuanto entra aire, la mezcla se diluye y cruza el rango. Y el LIE no es un muro: al calentar, el rango se ensancha, y la guía técnica del Instituto Nacional de Seguridad y Salud en el Trabajo (INSST) pide trabajar con un margen de seguridad por debajo.

**Temperatura de autoignición** (*auto-ignition temperature*). Es la temperatura mínima a la que la sustancia, en contacto con el aire, arde sola, sin chispa ni llama. Como el aceite de una sartén olvidada en el fuego. La mayoría de los líquidos combustibles la tienen entre 450 y 600 °C, pero la del éter etílico son 160 °C: le basta una superficie caliente.

No las confundas: el punto de inflamación dice cuándo hay vapor suficiente; la autoignición, cuándo ya no hace falta chispa.

### Dónde se leen: la sección 9 de la ficha
La ficha de datos de seguridad (*safety data sheet*, SDS) trae estos datos en la sección 9, «Propiedades físicas y químicas», epígrafe 9.1:

- **f) Inflamabilidad:** si puede encenderse.
- **g) Límite superior e inferior de explosividad:** el rango. Para un líquido inflamable la ficha debe dar al menos el inferior.
- **h) Punto de inflamación:** compáralo con la temperatura a la que trabajas.
- **i) Temperatura de auto-inflamación:** te dice qué superficies calientes son un peligro.

Los valores de esta lección son ejemplos tomados de la nota técnica NTP 663 del INSST: para tu producto manda su ficha.

### Las categorías de líquidos inflamables
El Reglamento CLP (Reglamento (CE) n.º 1272/2008, anexo I, sección 2.6) llama líquido inflamable al que tiene un punto de inflamación no superior a 60 °C, y lo reparte en tres categorías:

| Categoría | Criterio | Palabra de advertencia | Indicación de peligro |
|---|---|---|---|
| 1 | Punto de inflamación menor de 23 °C y punto inicial de ebullición de 35 °C o menos | Peligro | H224: Líquido y vapores extremadamente inflamables |
| 2 | Punto de inflamación menor de 23 °C y punto inicial de ebullición mayor de 35 °C | Peligro | H225: Líquido y vapores muy inflamables |
| 3 | Punto de inflamación de 23 °C a 60 °C | Atención | H226: Líquido y vapores inflamables |

El éter etílico (éter dietílico) es categoría 1. El tolueno, la acetona, el etanol, el propan-2-ol (isopropanol) y el acetato de etilo son categoría 2. Si en la etiqueta lees H224 o H225, a 23 °C ese líquido ya está por encima de su punto de inflamación.

### Cuentas con el LIE
Los márgenes de seguridad se suelen dar como un porcentaje del LIE. Recuerda que 1 % en volumen son 10 000 ppm.

**Ejemplo 1: de «% del LIE» a % en volumen.** El límite que te han fijado es el 20 % del LIE y trabajas con tolueno (LIE 1,2 %). 1,2 × 20 / 100 = 0,24 % en volumen, es decir, 2400 ppm.

**Ejemplo 2: al revés.** Un medidor marca 0,30 % en volumen de tolueno. 0,30 / 1,2 × 100 = 25 % del LIE.

**Ejemplo 3: ¿está dentro del rango?** En un recipiente cerrado con tolueno y aire a 20 °C, el vapor sube hasta donde permite su presión de vapor: 2,9 kPa. El aire está a 101,3 kPa. 2,9 / 101,3 × 100 = 2,86 % en volumen. Está entre 1,2 % y 7 %: dentro del rango. El hueco de un bidón o de un reactor con tolueno y aire es una mezcla lista para explotar. Por eso se inertiza.

### Atmósfera explosiva y zonas
El Real Decreto 681/2003 (artículo 2) define **atmósfera explosiva** (*explosive atmosphere*; de ahí viene ATEX) como «la mezcla con el aire, en condiciones atmosféricas, de sustancias inflamables en forma de gases, vapores, nieblas o polvos, en la que, tras una ignición, la combustión se propaga a la totalidad de la mezcla no quemada».

La empresa tiene que clasificar en zonas las áreas donde puede formarse (artículo 7). Las definiciones del anexo I, literales:

| Zona | Definición del anexo I | Ejemplos típicos |
|---|---|---|
| 0 | «Área de trabajo en la que una atmósfera explosiva consistente en una mezcla con aire de sustancias inflamables en forma de gas, vapor o niebla está presente de modo permanente, o por un período de tiempo prolongado, o con frecuencia.» | Interior de depósitos con líquido inflamable y aire |
| 1 | «Área de trabajo en la que es probable, en condiciones normales de explotación, la formación ocasional de una atmósfera explosiva consistente en una mezcla con aire de sustancias inflamables en forma de gas, vapor o niebla.» | Junto a bocas de carga y tomas de muestra |
| 2 | «Área de trabajo en la que no es probable, en condiciones normales de explotación, la formación de una atmósfera explosiva consistente en una mezcla con aire de sustancias inflamables en forma de gas, vapor o niebla o en la que, en caso de formarse, dicha atmósfera explosiva sólo permanece durante breves períodos de tiempo.» | Bridas, válvulas y cierres de bombas, que solo fugan si fallan |
| 20 | «Área de trabajo en la que una atmósfera explosiva en forma de nube de polvo combustible en el aire está presente de forma permanente, o por un período de tiempo prolongado, o con frecuencia.» | Interior de molinos, secadoras, tolvas y filtros |
| 21 | «Área de trabajo en la que es probable la formación ocasional, en condiciones normales de explotación, de una atmósfera explosiva en forma de nube de polvo combustible en el aire.» | Puntos de llenado y vaciado ocasional de polvo |
| 22 | «Área de trabajo en la que no es probable, en condiciones normales de explotación, la formación de una atmósfera explosiva en forma de nube de polvo combustible en el aire o en la que, en caso de formarse, dicha atmósfera explosiva sólo permanece durante un breve período de tiempo.» | Alrededor de equipos con polvo que pueden tener fugas |

Los ejemplos son de la guía del INSST y solo orientan. Las zonas de tu planta son las de su plano de clasificación.

Los accesos se señalizan (anexo III) con un triángulo amarillo de borde negro con las letras «EX». La señal es la misma para todas las zonas.

### Lo que la norma exige y tú ves
- **Evaluación de riesgos** (artículo 4): probabilidad y duración de la atmósfera explosiva, y probabilidad de que haya focos de ignición, «incluidas las descargas electrostáticas».
- **Documento de protección contra explosiones** (artículo 8): recoge la evaluación, las zonas y las medidas. De él salen tus instrucciones.
- **Formación e información** para quien trabaja en esas áreas (anexo II, punto 1.1).
- **Instrucciones por escrito y permisos de trabajo**, cuando el documento lo exija (anexo II, punto 1.2). Los permisos los expide, antes de empezar, una persona expresamente autorizada.
- **Calzado antiestático y ropa de trabajo adecuada** (anexo II, punto 2.3).
- **Alarmas** y desalojo antes de que se alcancen las condiciones de explosión (anexo II, punto 2.6).

### Equipos: categoría y marcado
Dentro de una zona solo valen aparatos pensados para ella. El anexo II del Real Decreto 681/2003 lo fija así:

- Zona 0 o 20: categoría 1.
- Zona 1 o 21: categoría 1 o 2.
- Zona 2 o 22: categoría 1, 2 o 3.

La categoría 1 da un nivel de protección «muy alto», la 2 «alto» y la 3 «normal» (Real Decreto 144/2016, anexo I). En la placa, tras el marcado CE, verás un hexágono con las letras «Ex», el grupo (II para la industria que no es minería), la categoría y una letra: G para gases, vapores o nieblas y D para polvo. Una linterna «II 2 G» sirve en zona 1 y en zona 2. No sirve en zona 0 y no está marcada para polvo.

El material eléctrico lleva además una clase de temperatura, lo máximo que puede calentarse su superficie: T1, 450 °C; T2, 300 °C; T3, 200 °C; T4, 135 °C; T5, 100 °C; T6, 85 °C. Ese máximo no debe superar la temperatura de ignición de la sustancia. Para el éter etílico (160 °C) un equipo T3 no vale: hace falta T4, T5 o T6.

Un móvil o una linterna corrientes no llevan ese marcado. Por eso no entran en zona clasificada.

### Las fuentes de ignición, una a una
La guía del INSST recoge trece. Las que más verás:

| Fuente | Ejemplo en planta | Cómo se controla |
|---|---|---|
| Superficies calientes | Tuberías de vapor, cojinetes dañados, equipos con polvo encima | Clase de temperatura, mantenimiento y limpieza |
| Llamas y gases calientes | Sopletes, encendedores, escapes de vehículos | Permiso de trabajo; no fumar |
| Chispas mecánicas | Herramienta contra metal u hormigón; amolado; herrumbre contra aluminio | Herramientas adecuadas; no golpear |
| Material eléctrico | Motores en mal estado; encender y apagar circuitos | Equipos con el marcado de la zona |
| Electricidad estática | Líquido por una tubería, transporte neumático de polvo | Puesta a tierra (más abajo) |

Las demás: reacciones que generan calor, corrientes eléctricas parásitas, rayo, ondas de radiofrecuencia, radiación óptica (también el sol concentrado por una botella), radiación ionizante, ultrasonidos y compresión adiabática.

Cualquier llama, por pequeña que sea, tiene energía de sobra. Y muchas mezclas se encienden con décimas de milijulio.

### Electricidad estática a fondo
Al frotar o separar dos materiales distintos, uno se queda con carga eléctrica de más. Si no tiene por dónde irse, se acumula. Es el calambre que te da el pomo después de andar sobre moqueta: una chispa.

**Dónde se genera.** En los líquidos: al fluir por tuberías, filtros y bombas, al caer a chorro y salpicar, y al agitarlos. En los polvos: al tamizar, llenar, moler y, sobre todo, en el transporte neumático.

**Qué líquidos son peores.** Los que conducen mal la electricidad, porque la carga tarda en irse. La NTP 225 del INSST pide medidas rigurosas por encima de 10¹² Ω·cm de resistividad, y el tolueno tiene 10¹⁴ Ω·cm.

**Tú también te cargas.** Ejemplo 4: una persona aislada del suelo puede alcanzar unos 10 000 V, y su cuerpo tiene una capacidad de unos 200 pF. Energía = ½ × capacidad × tensión² = 0,5 × 200 × 10⁻¹² × 10 000² = 0,01 J = 10 mJ. Los gases y vapores se encienden con unos 0,25 mJ. Tu chispa lleva 40 veces más.

**Puesta a tierra y conexión equipotencial.** La **conexión equipotencial** (*bonding*) une con un conductor todas las partes metálicas (bidón, bomba, manguera, reactor) para que estén al mismo nivel eléctrico y no salte chispa entre ellas. La **puesta a tierra** (*earthing* o *grounding*) conecta ese conjunto al suelo para que la carga se vaya. La resistencia a tierra no debe superar 1 MΩ.

**En un trasvase** (NTP 225):

- Las pinzas se conectan antes de empezar y lejos de las bocas de los recipientes.
- Nada de chorro libre: tubo de llenado hasta el fondo, y muy despacio hasta que su extremo quede sumergido.
- Mangueras conductoras, o con alma metálica conectada en los dos extremos.
- Al terminar, espera antes de abrir o tomar muestra: la carga tarda en disiparse. La nota da un mínimo de 30 segundos para líquidos conductores y de 1 minuto para los no conductores.

**Lo que la tierra no arregla.** No quita la carga que queda dentro del líquido: eso solo se controla con una atmósfera que no pueda arder. Tampoco descarga un plástico aislante.

**Ropa y calzado.** El calzado antiestático te conecta al suelo, si el suelo también conduce. No le pongas plantillas aislantes. La ropa de protección disipativa no se quita dentro de una atmósfera explosiva.

### Polvo combustible
Un tronco arde despacio. Hecho serrín y flotando en el aire arde de golpe, porque cada mota está rodeada de oxígeno. Pasa también en la industria farmacéutica. El riesgo es de las partículas finas, en general de menos de 0,5 mm, y crece cuanto más fino y seco es el polvo.

- **Las capas cuentan.** Según el anexo I del Real Decreto 681/2003, las capas de polvo son una fuente capaz de formar atmósferas explosivas. Una corriente de aire, o una primera explosión pequeña, levanta el polvo depositado y provoca explosiones en cadena.
- **Se limpia sin levantar polvo:** aspiración o paños húmedos, nunca barrido ni soplado. Cualquier depósito que se vea a simple vista debe eliminarse.
- **Polvo más disolvente es peor.** Un gas o vapor inflamable junto al polvo rebaja la energía necesaria para encenderlo, aunque el vapor esté por debajo de su LIE. Es el caso de cargar un sólido sobre disolvente.
- **Ojo con los sacos.** Sacudir una bolsa de plástico recién vaciada en la boca de un reactor puede producir una descarga.

### Las medidas, en el orden de la norma
El artículo 3 del Real Decreto 681/2003 fija el orden:

1. **Impedir que se forme la atmósfera explosiva:** menos inflamable, extracción localizada, ventilación, limpieza del polvo, inertización.
2. **Evitar la ignición:** equipos adecuados a la zona, puesta a tierra, permisos, mantenimiento.
3. **Atenuar los efectos:** paneles de venteo, discos de ruptura, supresores, apagallamas.

Las primeras son las más fiables. Controlar solo las chispas no basta: siempre puede aparecer otra fuente.

### Diez reglas en zona clasificada
1. Entra solo con equipos marcados para esa zona. El móvil y el mechero se quedan fuera.
2. Lleva la ropa y el calzado que te da la empresa, y no te los quites dentro.
3. Conecta las pinzas de tierra antes de abrir o trasvasar, sobre metal limpio, y compruébalas.
4. No viertas a chorro libre ni uses recipientes que el procedimiento no prevea.
5. Usa las herramientas indicadas para la zona y no golpees metal contra metal.
6. Ningún trabajo con llama, chispas o calor sin permiso de trabajo. Si ves uno sin permiso, pide que pare y avisa.
7. Mantén cerrado lo que debe estar cerrado: bocas, bidones, tomas de muestra.
8. Limpia derrames y polvo en el momento, sin soplar ni barrer.
9. Si ves una fuga o suena un detector, no acciones interruptores, aléjate y avisa. El olor no sirve de alarma.
10. Ante la duda, pregunta antes de actuar.

Los números de esta lección sirven para entender. En planta manda siempre el procedimiento vigente (SOP): zonas, equipos permitidos, límites de alarma y permisos son los de tu planta.
`,
  plant: `
Turno de tarde. Tienes que cargar tolueno en el reactor R-310 desde dos bidones, para el lote del intermedio ficticio KV-22. El R-310 ya está inertizado. En el plano de la planta, el entorno de su boca de carga es zona 1.

Antes de entrar dejas el móvil en la taquilla. Llevas el calzado antiestático y la linterna de la planta, marcada «II 2 G».

Colocas el primer bidón en su sitio. Conectas una pinza del cable al aro del bidón, lejos del tapón, y la otra al punto de tierra del reactor. El comprobador de tierra TT-310 da continuidad. Solo entonces abres el tapón. Metes el tubo de aspiración de la bomba neumática portátil BP-07 y revisas que la manguera, que es conductora, está acoplada a la línea de carga, la que entra por un tubo hasta el fondo del reactor. Arrancas despacio.

A media carga oyes una amoladora. A pocos metros, Íker, de la contrata de mantenimiento, se dispone a cortar un soporte. Le pides el permiso de trabajo. No lo tiene. Paras la bomba, cierras el bidón y avisas a Nerea, la jefa de turno. Ella detiene el trabajo: el permiso lo expide antes de empezar una persona autorizada, que fija las medidas y hace medir que no hay vapores. Hoy no se corta.

Reanudas la carga. Al terminar cierras válvulas y esperas el tiempo que marca el procedimiento antes de tomar la muestra. Recoges con un paño las gotas del suelo y lo dejas en el contenedor cerrado de residuos. Anotas la incidencia en la hoja.
`,
  batchRecord: `
En la hoja de producción (*batch record*) verás y anotarás:

- **Puesta a tierra**: una instrucción del tipo «verificar puesta a tierra y conexión equipotencial de bidón, bomba y reactor antes de abrir». Anotas el código del comprobador (p. ej. TT-310), la hora y tu firma.
- **Equipos portátiles usados**: bomba, manguera y detector, con su código, para que conste que son los previstos para la zona.
- **Lectura del detector de gases**, si la hoja la pide: el valor real con su unidad (% del LIE o ppm), no «correcto».
- **Tiempo de espera** tras el trasvase: hora de fin de carga y hora de la toma de muestra o de la apertura.
- **Limpieza** de derrames y de polvo después de cargar sólidos.
- **Incidencias**: alarma de un detector, fuga, pinza encontrada suelta, trabajo detenido, aviso a la jefa de turno.

En el permiso de trabajo, que va aparte pero ligado al lote si afecta a tu equipo, verás: lugar exacto, trabajo concreto, quién interviene, inicio y fin previstos, riesgos y medidas, equipos de protección, firma de quien lo expide y de quien lo acepta, y la comprobación final de que la instalación ha quedado segura. No se empieza sin él y no se firma lo que no se ha comprobado.
`,
  terms: [
    { es: "Punto de inflamación", en: "Flash point", def: "Temperatura mínima a la que un líquido desprende vapor suficiente para que la mezcla de vapor y aire se inflame con una fuente de ignición." },
    { es: "Límite inferior de explosividad (LIE)", en: "Lower explosive limit (LEL)", def: "Porcentaje en volumen de gas o vapor en el aire por debajo del cual la mezcla es demasiado pobre para arder. También se llama límite inferior de inflamabilidad." },
    { es: "Límite superior de explosividad (LSE)", en: "Upper explosive limit (UEL)", def: "Porcentaje en volumen de gas o vapor en el aire por encima del cual la mezcla es demasiado rica para arder." },
    { es: "Temperatura de autoignición", en: "Auto-ignition temperature", def: "Temperatura mínima a la que una sustancia en contacto con el aire arde sola, sin chispa ni llama." },
    { es: "Atmósfera explosiva", en: "Explosive atmosphere (ATEX)", def: "Mezcla con el aire, en condiciones atmosféricas, de sustancias inflamables en forma de gases, vapores, nieblas o polvos en la que, tras una ignición, la combustión se propaga a toda la mezcla." },
    { es: "Zona clasificada", en: "Classified zone / hazardous area", def: "Área donde puede formarse una atmósfera explosiva, clasificada como 0, 1 o 2 (gases, vapores y nieblas) o 20, 21 o 22 (polvo) según su frecuencia y duración." },
    { es: "Documento de protección contra explosiones", en: "Explosion protection document", def: "Documento obligatorio de la empresa que recoge la evaluación del riesgo de explosión, las zonas clasificadas y las medidas adoptadas." },
    { es: "Fuente de ignición", en: "Ignition source", def: "Lo que aporta la energía para iniciar la combustión: superficie caliente, llama, chispa mecánica o eléctrica, descarga electrostática y otras." },
    { es: "Categoría de aparato", en: "Equipment category", def: "Nivel de protección de un equipo para atmósferas explosivas: 1 (muy alto), 2 (alto) o 3 (normal). Decide en qué zonas puede usarse." },
    { es: "Clase de temperatura", en: "Temperature class", def: "Marca T1 a T6 del material eléctrico que indica la temperatura máxima de su superficie, de 450 °C (T1) a 85 °C (T6)." },
    { es: "Puesta a tierra", en: "Earthing / grounding", def: "Conexión de un equipo al suelo mediante un conductor para que la carga eléctrica se disipe sin chispa." },
    { es: "Conexión equipotencial", en: "Bonding", def: "Unión con un conductor de todas las partes metálicas de una instalación para que no haya diferencia de tensión entre ellas." },
    { es: "Tiempo de relajación", en: "Relaxation time", def: "Tiempo que tarda en disiparse la carga electrostática de un líquido o un polvo una vez que deja de moverse." },
    { es: "Permiso de trabajo", en: "Permit to work", def: "Autorización escrita, expedida antes de empezar por una persona autorizada, para un trabajo peligroso, con sus riesgos y medidas." },
  ],
  quiz: [
    {
      kind: "number",
      q: "El LIE del hexano es 1,1 % en volumen. El límite de alarma está fijado en el 20 % del LIE. ¿A cuántos ppm de hexano corresponde?",
      answer: 2200,
      tolerance: 0.01,
      unit: "ppm",
      explain: "20 % de 1,1 % = 0,22 % en volumen. Como 1 % son 10 000 ppm, 0,22 % son 2200 ppm.",
    },
    {
      kind: "choice",
      q: "En la sección 9 de la ficha de un disolvente lees: punto de inflamación 30 °C. Según el Reglamento CLP, ¿qué categoría de líquido inflamable y qué frase le corresponden?",
      options: [
        "Categoría 1, con la frase H224 (extremadamente inflamables)",
        "Categoría 2, con la frase H225 (líquido y vapores muy inflamables)",
        "Categoría 3, con la frase H226 (líquido y vapores inflamables)",
        "Ninguna: por encima de 23 °C ya no se considera inflamable",
      ],
      answer: 2,
      explain: "La categoría 3 va de 23 °C a 60 °C de punto de inflamación y lleva la frase H226. Las categorías 1 y 2 exigen un punto de inflamación menor de 23 °C.",
    },
    {
      kind: "number",
      q: "Un medidor portátil marca 0,45 % en volumen de vapor de tolueno. Tomando un LIE de 1,2 % en volumen, ¿qué porcentaje del LIE es?",
      answer: 37.5,
      tolerance: 0.02,
      unit: "% del LIE",
      explain: "0,45 / 1,2 × 100 = 37,5 % del LIE. Todavía no puede arder, pero se ha consumido más de un tercio del margen.",
    },
    {
      kind: "choice",
      q: "El entorno de la boca de carga de un reactor, que se abre de vez en cuando en operación normal, figura como zona 1. ¿Qué categoría de aparato puedes usar ahí?",
      options: [
        "Categoría 1 o 2, con la letra G de gases y vapores",
        "Categoría 3, con la letra G de gases y vapores",
        "Categoría 2 o 3, con la letra D de polvo combustible",
        "Cualquiera, mientras lleve el marcado CE en la placa",
      ],
      answer: 0,
      explain: "El anexo II del Real Decreto 681/2003 admite en zona 1 aparatos de categoría 1 o 2. La letra G indica que valen para gases, vapores o nieblas. La categoría 3 solo vale en zona 2 o 22.",
    },
    {
      kind: "number",
      q: "A 20 °C la presión de vapor del tolueno es 2,9 kPa y la presión del ambiente es 101,3 kPa. ¿Qué porcentaje en volumen de vapor puede llegar a haber en el hueco de un bidón cerrado con aire?",
      answer: 2.86,
      tolerance: 0.02,
      unit: "% en volumen",
      explain: "2,9 / 101,3 × 100 = 2,86 % en volumen. Cae entre el 1,2 % y el 7 %, dentro del rango de explosividad: ese hueco puede explotar si hay una chispa.",
    },
    {
      kind: "choice",
      q: "Vas a entrar en zona 1 y la única linterna a mano lleva en la placa el hexágono Ex y «II 3 G». ¿Puedes usarla?",
      options: [
        "Sí: lleva el hexágono Ex, así que vale para cualquier zona",
        "Sí: la categoría 3 es la que da el nivel de protección más alto",
        "Sí, pero solo si la enciendo antes de entrar en la zona",
        "No: la categoría 3 solo se admite en zona 2; busco una de categoría 2",
      ],
      answer: 3,
      explain: "La categoría 3 da un nivel de protección normal y solo se admite en zona 2 o 22. En zona 1 hace falta categoría 1 o 2.",
    },
    {
      kind: "number",
      q: "Un operario aislado del suelo se ha cargado hasta 8000 V. Su cuerpo tiene una capacidad de 300 pF. ¿Qué energía, en milijulios, lleva la chispa que puede saltar? (Energía = ½ × capacidad × tensión²)",
      answer: 9.6,
      tolerance: 0.02,
      unit: "mJ",
      explain: "0,5 × 300 × 10⁻¹² F × (8000 V)² = 0,0096 J = 9,6 mJ. Es mucho más que los 0,25 mJ, aproximadamente, que bastan para encender gases y vapores.",
    },
    {
      kind: "choice",
      q: "Vas a trasvasar tolueno de un bidón metálico a un reactor. El bidón está sobre un palé de plástico y el cable con las pinzas está colgado, sin conectar. ¿Qué haces?",
      options: [
        "Empiezo ya y conecto las pinzas cuando el bidón esté a medias",
        "Conecto las pinzas a bidón y reactor, lo compruebo y entonces abro",
        "Nada: el tolueno es un líquido que apenas genera carga estática",
        "Vierto a chorro desde arriba para acabar antes y reducir el riesgo",
      ],
      answer: 1,
      explain: "El bidón está aislado del suelo y puede cargarse. Las pinzas se conectan antes de empezar y lejos de las bocas. El tolueno conduce muy mal la electricidad y es de los líquidos que más carga acumulan; el chorro libre genera todavía más.",
    },
    {
      kind: "choice",
      q: "Después de cargar un sólido en polvo queda una capa visible sobre la plataforma y el motor del agitador. ¿Cómo se limpia?",
      options: [
        "Con aire comprimido, que la quita deprisa de los rincones",
        "Barriendo en seco con un cepillo hacia el sumidero",
        "Con el aspirador previsto para la zona o con paños húmedos",
        "No hace falta: el polvo depositado no puede explotar",
      ],
      answer: 2,
      explain: "Las capas de polvo son una fuente de atmósfera explosiva y, sobre un equipo caliente, pueden inflamarse. Se limpian por aspiración o con paños húmedos, nunca con barrido ni soplado, que ponen el polvo en suspensión.",
    },
    {
      kind: "choice",
      q: "Un contratista se dispone a usar una amoladora junto a un reactor con disolvente, en zona clasificada, y te dice que el permiso «lo firman luego». ¿Qué haces?",
      options: [
        "Le dejo empezar si promete acabar en menos de diez minutos",
        "Le pido que no empiece y aviso: el permiso se expide antes",
        "Le ayudo y pongo yo un extintor cerca por si salta una chispa",
        "Cierro la puerta de la sala para que las chispas no salgan",
      ],
      answer: 1,
      explain: "El amolado produce chispas mecánicas, una fuente de ignición. El Real Decreto 681/2003 exige que los permisos de trabajo los expida, antes del comienzo de los trabajos, una persona expresamente autorizada.",
    },
  ],
};
