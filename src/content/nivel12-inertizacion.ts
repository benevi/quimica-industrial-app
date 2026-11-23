import type { Lesson } from "./types";

export const inertizacionAFondo: Lesson = {
  slug: "inertizacion-a-fondo",
  level: 12,
  order: 4,
  title: "Inertización a fondo: por qué, cuánto y cómo se calcula",
  titleEn: "Inerting in depth: why, how much and how to calculate it",
  minutes: 30,
  summary:
    "Qué es la concentración límite de oxígeno, los tres métodos de inertización, la cuenta de los ciclos en presión absoluta, qué la estropea y por qué el nitrógeno también es un riesgo para ti.",
  body: `
En la lección anterior viste que un reactor se llena de nitrógeno antes de cargar disolvente. Aquí vas a entender cuánto oxígeno queda después, cómo se calcula y qué puede echarlo a perder.

### El punto de partida, en dos líneas
Para que haya fuego hacen falta tres cosas a la vez: combustible, oxígeno y una fuente de ignición. La inertización quita el lado del oxígeno: se cambia el aire del equipo por nitrógeno, un gas que en las condiciones de uso no reacciona con nada.

El aire tiene un 21 % de oxígeno. El resto es casi todo nitrógeno (78,1 %) y un poco de argón (0,9 %).

### La concentración límite de oxígeno
Piensa en una vela dentro de un tarro cerrado. La llama se apaga mucho antes de gastar todo el oxígeno: llega un punto en que queda oxígeno, pero no el suficiente para mantener la llama.

Con los vapores de un disolvente pasa lo mismo. Existe un porcentaje de oxígeno por debajo del cual la mezcla no puede arder, haya el vapor que haya y salte la chispa que salte. Ese porcentaje es la **concentración límite de oxígeno** (*limiting oxygen concentration*, LOC). En textos en español la verás también como CLO.

Tres ideas sobre este límite:

- **Es distinto para cada sustancia y situación.** No hay un número que valga para todo. Por eso en esta lección no damos valores por disolvente: el de tu proceso lo ha fijado tu planta y está en el procedimiento.
- **Se mide en porcentaje en volumen de oxígeno** dentro del gas del equipo.
- **Se trabaja con un margen de seguridad por debajo.** La guía técnica del Instituto Nacional de Seguridad y Salud en el Trabajo sobre atmósferas explosivas lo pide así: bajar el oxígeno con un margen por debajo de la concentración límite y garantizar que después no vuelve a subir.

¿Por qué un margen? Porque el medidor tiene su error, el gas no siempre está bien mezclado, puede quedar un rincón con más oxígeno y siempre puede entrar algo de aire. Por eso el límite de tu hoja (por ejemplo, O₂ por debajo del 2 %) es más bajo que el límite físico de la sustancia.

### Presión absoluta y presión manométrica
Antes de calcular nada hay que tener clara esta diferencia, porque es el error típico.

Vivimos en el fondo de un mar de aire que aprieta con cerca de 1 bar (la atmósfera normal son 1,01325 bar; en esta lección redondeamos a 1 bar, es decir, 1000 mbar).

- La **presión manométrica** (*gauge pressure*) es la que marca un manómetro normal. Cuenta desde la presión del ambiente: con el reactor abierto marca 0. Se escribe bar g.
- La **presión absoluta** (*absolute pressure*) cuenta desde el vacío total, desde «nada de gas». Se escribe bar a, o mbar abs.

La regla es: **absoluta = manométrica + atmosférica**.

| Lo que lees | En presión absoluta |
|---|---|
| 0 bar g (reactor abierto al ambiente) | 1 bar a = 1000 mbar abs |
| 2 bar g | 3 bar a |
| −0,8 bar g (vacuómetro) | 0,2 bar a = 200 mbar abs |

Es como medir tu altura subido a una silla: la manométrica mide desde el asiento y la absoluta desde el suelo. Para saber cuánto gas hay dentro de un equipo solo sirve la absoluta, porque es la única que vale cero cuando no hay gas.

### Los tres métodos

| Método | Cómo se hace | Cuándo se usa |
|---|---|---|
| **Ciclos de vacío** (*vacuum purging*) | Se hace vacío y se rompe con nitrógeno. Se repite. | Equipos que aguantan vacío y tienen bomba de vacío, como muchos reactores. Suele ser el que menos nitrógeno gasta. |
| **Ciclos de presión** (*pressure purging*) | Se presuriza con nitrógeno y se despresuriza al venteo. Se repite. | Equipos que aguantan presión pero no tienen vacío. Gasta más nitrógeno. |
| **Barrido** (*sweep purging* o *flow-through purging*) | El nitrógeno entra por un punto y sale por otro, de forma continua, a presión ambiente. | Equipos que no están hechos para presión ni para vacío, y líneas. |

Dos avisos. El vacío no perdona las fugas: todo lo que entra por una junta es aire. Además, si dentro ya hay disolvente, el vacío lo evapora y se lo lleva hacia la bomba. Y el barrido depende de que el nitrógeno recorra de verdad todo el equipo y no deje bolsas sin barrer.

### La cuenta de los ciclos, paso a paso
La idea de partida: en un recipiente cerrado, a la misma temperatura, la cantidad de gas que hay dentro es proporcional a la presión absoluta. Si la presión absoluta baja a la quinta parte, dentro queda la quinta parte del gas.

Un ciclo de vacío, despacio:

1. **Empiezas** con el reactor a 1000 mbar abs, lleno de aire: 21 % de oxígeno.
2. **Haces vacío** hasta 200 mbar abs. Has sacado cuatro quintas partes del gas. Lo que queda sigue siendo aire con un 21 % de oxígeno, porque la bomba se lleva oxígeno y nitrógeno por igual.
3. **Rompes el vacío con nitrógeno** hasta 1000 mbar abs. No has añadido oxígeno: el que había sigue ahí. Pero ahora está repartido en cinco veces más gas. El porcentaje se divide entre cinco: 21 % × 200 / 1000 = 4,2 %.

Es como un vaso de café: tiras cuatro quintas partes y rellenas con agua. El café que queda es el mismo, pero cinco veces más diluido. Si lo repites, cada vez se diluye otras cinco veces.

Por eso cada ciclo multiplica el oxígeno por el mismo número, el cociente entre la presión baja y la presión alta. Y tras n ciclos:

> O₂ final = O₂ inicial × (P baja / P alta)ⁿ, con las dos presiones en absoluta

En los ciclos de presión el orden es el contrario, pero la cuenta es la misma. Al presurizar con nitrógeno el oxígeno se diluye; al despresurizar sale mezcla y el porcentaje ya no cambia.

### Ejemplo 1: vacío bueno, a 200 mbar abs
Vacío hasta 200 mbar abs, nitrógeno hasta 1000 mbar abs. Factor por ciclo: 200 / 1000 = 0,2.

| Ciclo | Cuenta | Oxígeno |
|---|---|---|
| 1 | 21 × 0,2 | 4,2 % |
| 2 | 4,2 × 0,2 | 0,84 % |
| 3 | 0,84 × 0,2 | 0,17 % |

### Ejemplo 2: vacío malo, a 500 mbar abs
Si la bomba solo llega a 500 mbar abs, el factor es 500 / 1000 = 0,5. Cada ciclo solo quita la mitad.

| Ciclo | Cuenta | Oxígeno |
|---|---|---|
| 1 | 21 × 0,5 | 10,5 % |
| 2 | 10,5 × 0,5 | 5,25 % |
| 3 | 5,25 × 0,5 | 2,63 % |
| 4 | 2,63 × 0,5 | 1,31 % |

Hacer «los tres ciclos de la hoja» sin llegar al vacío que pide la hoja no es inertizar.

### Ejemplo 3: presión hasta 2 bar g
Presurizas con nitrógeno hasta 2 bar g y despresurizas hasta 0 bar g. Primero, a absoluta: P alta = 2 + 1 = 3 bar a; P baja = 0 + 1 = 1 bar a. Factor: 1 / 3 = 0,333.

| Ciclo | Cuenta | Oxígeno |
|---|---|---|
| 1 | 21 / 3 | 7,0 % |
| 2 | 7,0 / 3 | 2,33 % |
| 3 | 2,33 / 3 | 0,78 % |

Si usas los números del manómetro sin convertir, la cuenta no sale: dividir 0 entre 2 da cero, como si un solo ciclo lo quitara todo. Es falso.

### Ejemplo 4: cuántos ciclos para bajar del 21 % a menos del 2 %
Se multiplica ciclo a ciclo hasta quedar por debajo:

| Método | Factor | Ciclos necesarios | Oxígeno al acabar |
|---|---|---|---|
| Vacío a 200 mbar abs | 0,2 | 2 | 0,84 % |
| Vacío a 500 mbar abs | 0,5 | 4 | 1,31 % |
| Presión a 2 bar g | 0,333 | 3 | 0,78 % |

También sale el gasto de nitrógeno. Cada ciclo de vacío a 200 mbar abs repone 800 mbar: 0,8 veces el volumen del reactor, 1,6 volúmenes en dos ciclos. Cada ciclo de presión a 2 bar g mete 2 volúmenes: 6 volúmenes en tres ciclos. Por eso el vacío gasta menos.

### Ejemplo 5: el error de «200 mbar de vacío»
Un compañero lee «vacío de 200 mbar» y entiende «200 mbar por debajo del ambiente». Para la bomba a 800 mbar abs. Su factor es 800 / 1000 = 0,8. Tras tres ciclos tiene 21 × 0,8 × 0,8 × 0,8 = 10,75 % de oxígeno, cuando creía tener 0,17 %. Mira siempre si el dato lleva «abs», «a» o «g».

### Si el nitrógeno no es puro
Si el nitrógeno de la red lleva un poco de oxígeno, cada rotura de vacío mete ese poco. La cuenta cambia así:

> O₂ final = O₂ del nitrógeno + (O₂ inicial − O₂ del nitrógeno) × (P baja / P alta)ⁿ

Sale del mismo razonamiento: tras el vacío queda una parte del gas viejo, y el resto se rellena con nitrógeno que trae su propio oxígeno. Supón un nitrógeno con 0,5 % de oxígeno y vacío a 200 mbar abs:

- Ciclo 1: 0,5 + (21 − 0,5) × 0,2 = 4,6 %
- Ciclo 2: 0,5 + 20,5 × 0,04 = 1,32 %
- Ciclo 3: 0,5 + 20,5 × 0,008 = 0,66 %

Por muchos ciclos que hagas, nunca bajarás del oxígeno que trae el propio nitrógeno.

### El barrido, en números
En el barrido no hay ciclos. En el caso ideal, con el nitrógeno puro mezclándose perfectamente con el gas del equipo, cada volumen de equipo que pasa multiplica el oxígeno por 0,37. Para bajar del 21 % a menos del 2 % harían falta unos 2,4 volúmenes. En un equipo real puede hacer falta más, porque hay rincones que el gas barre mal. Por eso el caudal y el tiempo los fija el procedimiento, y quien decide es el medidor.

### Qué estropea una inertización
- **Abrir la boca de hombre.** Entra aire. Lo que marcaba el medidor antes de abrir ya no vale.
- **Cargar sólidos.** Además de abrir, el polvo arrastra aire entre sus granos.
- **Fugas con el equipo en vacío.** Un reactor a 200 mbar abs con 0,84 % de oxígeno que, por una junta, sube a 300 mbar abs ha tragado 100 mbar de aire. Al romper con nitrógeno hasta 1000 mbar abs queda (200 × 0,84 + 100 × 21) / 1000 = 2,27 %. Una fuga pequeña ha multiplicado el oxígeno casi por tres.
- **Romper el vacío por una entrada de aire.** Si ese mismo reactor se llena con aire en vez de nitrógeno, queda (200 × 0,84 + 800 × 21) / 1000 = 16,97 %.
- **Líneas sin purgar.** Una tubería o manguera llena de aire lo empuja dentro del reactor al empezar a trasvasar.
- **Vaciar sin reponer nitrógeno.** Al descargar líquido, el hueco que deja se llena de lo que pueda entrar. Tiene que ser nitrógeno.

Por eso, una vez inertizado, el equipo se mantiene con nitrógeno y un poco por encima de la presión ambiente: si hay una fuga, sale nitrógeno en vez de entrar aire.

### El medidor de oxígeno
El medidor de oxígeno (*oxygen analyser*) dice qué porcentaje del gas, en volumen, es oxígeno en el punto donde toma la muestra. Puede ser fijo o portátil. Tres cosas que recordar:

- **La presión no dice nada del oxígeno.** Un manómetro no distingue entre oxígeno, vapores y nitrógeno. La cuenta de los ciclos es una previsión; la medida es la prueba. Si no coinciden, manda la medida y hay que buscar la causa.
- **El medidor también puede fallar.** Puede estar mal ajustado o tomar la muestra en un mal sitio. Antes de fiarte, comprueba que su calibración está vigente y, si es portátil, que al aire limpio marca en torno al 21 %.
- **Se mide justo antes de cargar,** con el equipo cerrado y la lectura estable. El momento peligroso es cuando entra el disolvente, y entre la inertización y la carga pueden pasar cosas.

### El otro riesgo del nitrógeno: la asfixia
El nitrógeno que protege al reactor puede matarte a ti. No tiene color, olor ni sabor, y el cuerpo no avisa de que falta oxígeno. La nota técnica NTP 340 del Instituto Nacional de Seguridad y Salud en el Trabajo da estas cifras:

| Oxígeno en el aire que respiras | Qué significa |
|---|---|
| 21 % | Aire normal |
| Menos del 16 % | Situación peligrosa |
| 10 % | Riesgo de asfixia mortal casi seguro |

Según esa misma nota, bastan dos bocanadas de gas inerte para perder el conocimiento, y meter solo la cabeza por la abertura de un recipiente inertizado puede ser suficiente para el accidente. Un reactor al 2 % de oxígeno es seguro contra el fuego y mortal para una persona.

Reglas para ti:

- No te asomes ni metas la cabeza por la boca de hombre de un equipo inertizado.
- Entrar en un equipo es un trabajo en espacio confinado: solo con permiso de trabajo, equipo ventilado con aire, atmósfera medida y vigilante fuera.
- Si ves a un compañero desplomado junto a un equipo con nitrógeno, no entres a por él: serías la segunda víctima. Da la alarma. El rescate dentro de esa atmósfera se hace con equipo de respiración autónomo.
- Ojo con los venteos y con las salas pequeñas o mal ventiladas donde descarga nitrógeno.

### Qué hace el operador
1. Lee el método, el número de ciclos, las presiones (con su «abs» o su «g») y el límite de oxígeno de la hoja.
2. Comprueba el equipo cerrado: boca de hombre, válvula de fondo, líneas.
3. Hace cada ciclo llegando de verdad a la presión indicada y anota la presión alcanzada, no la teórica.
4. Mide el oxígeno, espera a que la lectura sea estable y anota el valor real con la hora.
5. Si no cumple, no carga: repite según el procedimiento y, si sigue sin cumplir, avisa.
6. Si después se abre el equipo o se pierde el nitrógeno, vuelve a inertizar y a medir antes de seguir.

Los números de esta lección sirven para entender. En planta manda siempre el procedimiento vigente (SOP): el método, las presiones, el número de ciclos y el límite de oxígeno son los que diga tu hoja.
`,
  plant: `
Turno de mañana. Vas a preparar el reactor R-204 para cargar tolueno en el lote del intermedio ficticio AX-22. La hoja dice: *«Inertizar R-204 con 3 ciclos de vacío hasta 150 mbar abs, rompiendo con nitrógeno hasta 1000 mbar abs. Verificar O₂ ≤ 2,0 % con el analizador AI-204. Mantener con nitrógeno.»*

Haces la cuenta de cabeza para saber qué esperar: el factor es 150 / 1000 = 0,15. Del 21 % pasarías a 3,15 %, luego a 0,47 % y al final a 0,07 %.

Cierras boca de hombre y válvula de fondo, arrancas el vacío y llegas a 150 mbar abs. Rompes con nitrógeno. Repites dos veces más y anotas la presión alcanzada en cada ciclo. Mides: el AI-204 marca 3,8 %.

No cuadra. Esperabas en torno al 0,07 % y tienes unas cincuenta veces más. No cargas. Haces vacío otra vez, aíslas el reactor y miras el vacuómetro: la presión sube sola, poco a poco. Está entrando aire.

Avisas a la jefa de turno. Mantenimiento encuentra la junta de la boca de hombre mal asentada y la recoloca. Repites los tres ciclos: ahora la presión se mantiene con el reactor aislado y el analizador marca 0,2 %. Cumple.

Anotas las dos medidas, la primera también, con su hora, y la incidencia. Dejas el reactor con nitrógeno, conectas la pinza de tierra y empiezas la carga de tolueno.

En ningún momento te has asomado a la boca de hombre para «ver qué pasa».
`,
  batchRecord: `
En la hoja de producción (*batch record*) verás una instrucción con cuatro datos: método, número de ciclos, presiones (fíjate en si son absolutas o manométricas) y límite de oxígeno. Y casillas para anotar:

- **Equipo**: código del reactor (p. ej. R-204) y del analizador de oxígeno usado (p. ej. AI-204), con su calibración vigente.
- **Cada ciclo**: presión baja y presión alta realmente alcanzadas, con su unidad (mbar abs o bar g), no el valor teórico.
- **Oxígeno medido**: el valor real que marca el analizador (0,2 %, no «cumple»), con fecha, hora y firma, justo antes de la carga.
- **Límite**: la hoja lo trae escrito (p. ej. O₂ ≤ 2,0 %); tú comparas y registras el resultado.
- **Verificación**: si es un paso crítico, firma de una segunda persona.
- **Repeticiones**: si hubo que repetir ciclos, se anotan todas las medidas, también la que no cumplía, y el motivo.
- **Incidencias**: apertura de la boca de hombre, pérdida de nitrógeno, fuga encontrada, aviso al responsable de turno.
- **Mantenimiento de la inertización**: presión de nitrógeno con la que queda el equipo y, si la hoja lo pide, nueva medida de oxígeno después de cargar sólidos.

Nunca se anota el valor esperado por el cálculo: se anota lo que marca el instrumento.
`,
  terms: [
    { es: "Concentración límite de oxígeno", en: "Limiting oxygen concentration (LOC)", def: "Porcentaje de oxígeno por debajo del cual una mezcla con una sustancia inflamable ya no puede arder. Es distinto para cada sustancia y situación." },
    { es: "Margen de seguridad", en: "Safety margin", def: "Diferencia entre el límite de oxígeno con el que trabaja la planta y la concentración límite de la sustancia. Cubre errores de medida, mala mezcla y entradas de aire." },
    { es: "Presión absoluta", en: "Absolute pressure (bar a, mbar abs)", def: "Presión contada desde el vacío total. Es la que se usa en la cuenta de los ciclos." },
    { es: "Presión manométrica", en: "Gauge pressure (bar g)", def: "Presión contada desde la presión del ambiente; lo que marca un manómetro normal. Absoluta = manométrica + atmosférica." },
    { es: "Ciclos de vacío", en: "Vacuum purging", def: "Inertizar haciendo vacío y rompiéndolo con nitrógeno varias veces." },
    { es: "Ciclos de presión", en: "Pressure purging", def: "Inertizar presurizando con nitrógeno y despresurizando al venteo varias veces." },
    { es: "Barrido", en: "Sweep purging / flow-through purging", def: "Inertizar haciendo pasar nitrógeno de forma continua, con entrada por un punto y salida por otro." },
    { es: "Romper el vacío", en: "Break the vacuum", def: "Devolver un equipo en vacío a la presión de trabajo dejando entrar gas; al inertizar, siempre nitrógeno." },
    { es: "Medidor de oxígeno", en: "Oxygen analyser / oxygen meter", def: "Instrumento que indica el porcentaje en volumen de oxígeno del gas en el punto de muestra." },
    { es: "Atmósfera suboxigenada", en: "Oxygen-deficient atmosphere", def: "Aire con menos oxígeno del normal (21 %). Peligrosa para las personas por debajo del 16 %." },
    { es: "Asfixia por gas inerte", en: "Inert gas asphyxiation", def: "Pérdida de conocimiento y muerte por respirar un gas sin oxígeno, como el nitrógeno; no avisa con olor ni con molestias." },
    { es: "Espacio confinado", en: "Confined space", def: "Recinto con aberturas limitadas y mala ventilación, como el interior de un reactor; solo se entra con permiso de trabajo." },
  ],
  quiz: [
    {
      kind: "choice",
      q: "¿Qué es la concentración límite de oxígeno de un disolvente?",
      options: [
        "El oxígeno que tiene el aire normal de la sala, un 21 %",
        "El oxígeno mínimo que necesita una persona para respirar",
        "El oxígeno por debajo del cual su vapor ya no puede arder",
        "El oxígeno que lleva disuelto el disolvente en el bidón",
      ],
      answer: 2,
      explain: "Por debajo de ese porcentaje de oxígeno la mezcla no arde, haya el vapor que haya. La planta trabaja con un margen de seguridad por debajo.",
    },
    {
      kind: "number",
      q: "El manómetro del reactor marca 1,5 bar g. Tomando la presión del ambiente como 1 bar, ¿cuál es la presión absoluta?",
      answer: 2.5,
      tolerance: 0.01,
      unit: "bar a",
      explain: "Absoluta = manométrica + atmosférica = 1,5 + 1 = 2,5 bar a.",
    },
    {
      kind: "number",
      q: "Partes de aire (21 % de O₂). Haces 2 ciclos de vacío hasta 100 mbar abs, rompiendo con nitrógeno puro hasta 1000 mbar abs. ¿Qué porcentaje de oxígeno esperas?",
      answer: 0.21,
      tolerance: 0.02,
      unit: "% O₂",
      explain: "Factor por ciclo: 100 / 1000 = 0,1. Tras dos ciclos: 21 × 0,1 × 0,1 = 0,21 %.",
    },
    {
      kind: "number",
      q: "Partes de aire (21 % de O₂). Haces 3 ciclos de presión con nitrógeno puro hasta 1,5 bar g, despresurizando cada vez hasta 0 bar g (ambiente = 1 bar). ¿Qué porcentaje de oxígeno esperas?",
      answer: 1.34,
      tolerance: 0.02,
      unit: "% O₂",
      explain: "En absoluta: P alta = 2,5 bar a y P baja = 1 bar a. Factor: 1 / 2,5 = 0,4. Tras tres ciclos: 21 × 0,4 × 0,4 × 0,4 = 1,34 %.",
    },
    {
      kind: "choice",
      q: "Has hecho los ciclos y el manómetro marca la presión de nitrógeno correcta. ¿Qué te dice eso del oxígeno?",
      options: [
        "Nada: la presión no distingue oxígeno de nitrógeno; hay que medirlo",
        "Que está por debajo del límite, porque la presión es la de la hoja",
        "Que está al 21 %, porque el manómetro mide siempre el aire que hay",
        "Que el reactor ya no tiene nada de oxígeno y se puede cargar ya",
      ],
      answer: 0,
      explain: "Un manómetro no distingue entre oxígeno, vapores y nitrógeno. La prueba de la inertización es la lectura del medidor de oxígeno.",
    },
    {
      kind: "number",
      q: "El vacío llega a 250 mbar abs y rompes con nitrógeno puro hasta 1000 mbar abs. Partiendo de aire (21 %), ¿cuántos ciclos hacen falta como mínimo para quedar por debajo del 2 % de O₂?",
      answer: 2,
      tolerance: 0.001,
      unit: "ciclos",
      explain: "Factor: 250 / 1000 = 0,25. Ciclo 1: 21 × 0,25 = 5,25 % (no basta). Ciclo 2: 5,25 × 0,25 = 1,31 % (ya está por debajo). Hacen falta 2 ciclos.",
    },
    {
      kind: "number",
      q: "El nitrógeno lleva un 0,5 % de O₂. Partes de aire (21 %) y haces un solo ciclo de vacío hasta 100 mbar abs, rompiendo hasta 1000 mbar abs. ¿Qué porcentaje de oxígeno queda?",
      answer: 2.55,
      tolerance: 0.02,
      unit: "% O₂",
      explain: "O₂ final = 0,5 + (21 − 0,5) × 0,1 = 0,5 + 2,05 = 2,55 %. Con nitrógeno puro habría sido 2,1 %.",
    },
    {
      kind: "choice",
      q: "Tras inertizar, el medidor marcaba 0,8 % de O₂. Después se abre la boca de hombre para cargar un sólido. ¿Qué haces antes de cargar el disolvente?",
      options: [
        "Nada más: el 0,8 % ya está anotado y sigue siendo válido",
        "Inertizo y mido de nuevo según el procedimiento, y lo anoto",
        "Anoto el valor que da el cálculo de los ciclos, sin medir",
        "Me asomo a la boca de hombre para ver si ha entrado aire",
      ],
      answer: 1,
      explain: "Al abrir entra aire y el sólido arrastra más. La medida anterior ya no vale: se vuelve a inertizar y a medir según el procedimiento, y se anota el valor real.",
    },
    {
      kind: "number",
      q: "Un reactor está a 100 mbar abs con un gas al 1,0 % de O₂. Por una fuga entra aire (21 %) hasta 200 mbar abs. Luego rompes con nitrógeno puro hasta 1000 mbar abs. ¿Qué porcentaje de oxígeno queda?",
      answer: 2.2,
      tolerance: 0.02,
      unit: "% O₂",
      explain: "Se suman las partes: (100 × 1,0 + 100 × 21) / 1000 = 2200 / 1000 = 2,2 %. Sin la fuga habría quedado 0,1 %.",
    },
    {
      kind: "choice",
      q: "Ves a un compañero desplomado junto a la boca de hombre abierta de un reactor inertizado. ¿Qué haces?",
      options: [
        "Entro deprisa aguantando la respiración y lo saco yo mismo",
        "Meto la cabeza por la boca de hombre para ver si respira",
        "Espero unos minutos a que el nitrógeno se vaya por sí solo",
        "Doy la alarma y no entro sin equipo de respiración autónomo",
      ],
      answer: 3,
      explain: "El nitrógeno no avisa y bastan dos bocanadas para perder el conocimiento. Quien entra sin equipo de respiración autónomo se convierte en la segunda víctima: primero se da la alarma.",
    },
  ],
};
