import type { Lesson } from "./types";

export const vaporYCalderasAFondo: Lesson = {
  slug: "vapor-y-calderas-a-fondo",
  level: 11,
  order: 6,
  title: "Vapor y calderas a fondo: el servicio que calienta la planta",
  titleEn: "Steam and boilers in depth: the utility that heats the plant",
  minutes: 38,
  summary:
    "Por qué se calienta con vapor, cómo se lee una tabla de vapor, cuánto vapor hace falta, el circuito completo de la caldera al purgador, el golpe de ariete, lo que pide el Reglamento de equipos a presión y qué hace el operador al abrir vapor a un reactor.",
  body: `
En la lección anterior viste que el vapor es el servicio de calefacción más usado. Aquí vas a entender de dónde sale su calor, cuánto vapor gasta una operación y cómo es el circuito entero, de la caldera al purgador de tu reactor.

### Dos clases de calor: la olla
Pon una olla con agua al fuego y mete un termómetro. Pasan dos cosas distintas:

1. **Primero el agua se calienta.** El termómetro sube: 20, 50, 80 grados. El calor que entra se nota como temperatura. Se llama **calor sensible** (*sensible heat*), porque se «siente» en el termómetro.
2. **Luego el agua hierve.** El termómetro se para en 100 °C y no sube más, aunque el fuego siga igual de fuerte. El calor sigue entrando, pero ahora se gasta en convertir el agua líquida en vapor. Se llama **calor latente** (*latent heat*), que significa «escondido»: no se ve en el termómetro.

Ese calor escondido no se pierde: se lo lleva el vapor. Cuando el vapor toca algo más frío y vuelve a ser agua (**condensa**), lo devuelve entero. Calentar con vapor es eso: evaporar agua en la caldera y hacerla condensar en la camisa de tu reactor.

### Las dos cuentas
La energía se mide en kilojulios (kJ). Mil kilojulios son un megajulio (MJ).

**Para calentar** sin cambiar de estado:

> Q = m × cp × ΔT

- Q: calor (kJ). m: masa (kg). ΔT: los grados que sube.
- cp: **calor específico** (*specific heat*), lo que cuesta subir un grado un kilo de sustancia. El del agua es 4,18 kJ/(kg·K). Un salto de un kelvin (K) es igual que uno de un grado Celsius.

**Para evaporar** (o lo que se recupera al condensar):

> Q = m × calor latente

El calor latente del agua a presión ambiente es 2257 kJ/kg.

Comparemos con 1 kg de agua:

| Operación | Cuenta | Calor |
|---|---|---|
| Calentar de 20 a 100 °C | 1 × 4,18 × 80 | 334,4 kJ |
| Evaporar a 100 °C | 1 × 2257 | 2257 kJ |

Evaporar el kilo cuesta casi siete veces más que calentarlo (2257 / 334,4 = 6,7). Por eso el vapor lleva muchísimo calor en poca masa.

### Por qué se calienta con vapor
- **Mucho calor en poca masa.** Cada kilo que condensa deja unos 2100 kJ a las presiones habituales.
- **Temperatura constante.** Mientras condensa, el vapor no se enfría: cede el calor a la misma temperatura en toda la camisa.
- **La temperatura se elige con la presión,** como verás en la tabla.

### Vapor saturado, húmedo y sobrecalentado
- **Vapor saturado** (*saturated steam*): vapor que está justo a la temperatura de ebullición que corresponde a su presión. En cuanto pierde un poco de calor, empieza a condensar. Es el que sale de una caldera normal.
- **Vapor húmedo** (*wet steam*): vapor saturado que arrastra gotitas de agua líquida. Esas gotas ya no tienen calor latente que ceder.
- **Vapor sobrecalentado** (*superheated steam*): vapor que se ha seguido calentando por encima de su temperatura de ebullición. Se comporta como un gas caliente y seco.

Para calentar se usa **vapor saturado**, porque lo que calienta es la condensación. El sobrecalentado tiene que enfriarse antes hasta su temperatura de saturación para poder condensar, y mientras tanto cede el calor mal. Se usa sobre todo para mover turbinas.

El **título del vapor** (*dryness fraction*) dice qué parte de la masa es vapor de verdad. Un título de 0,95 significa 95 % de vapor y 5 % de gotas. Ese vapor solo cede el 95 % del calor latente: a 3 bar g, 0,95 × 2133 = 2026 kJ/kg en lugar de 2133. Cuanto más seco llega el vapor, mejor calienta.

### Presión y temperatura: la tabla de vapor
En la olla destapada el agua hierve a 100 °C. En una olla exprés, a más presión, hierve a más temperatura. Con el vapor saturado pasa lo mismo: a cada presión le corresponde una única temperatura.

Recuerda: la presión **manométrica** (bar g) es la que marca el manómetro y cuenta desde la presión del ambiente. La **absoluta** (bar a) cuenta desde el vacío. Absoluta = manométrica + atmosférica, y la atmósfera normal son 1,013 bar.

| Presión manométrica (bar g) | Presión absoluta (bar a) | Temperatura de saturación (°C) | Calor latente (kJ/kg) |
|---|---|---|---|
| 0 | 1,01 | 100,0 | 2257 |
| 0,5 | 1,51 | 111,6 | 2225 |
| 1 | 2,01 | 120,4 | 2201 |
| 2 | 3,01 | 133,7 | 2163 |
| 3 | 4,01 | 143,7 | 2133 |
| 4 | 5,01 | 151,9 | 2108 |
| 6 | 7,01 | 165,0 | 2065 |
| 8 | 9,01 | 175,4 | 2030 |
| 10 | 11,01 | 184,1 | 1999 |

Valores calculados con la formulación internacional IAPWS-IF97.

Cómo se lee:

- **De presión a temperatura.** El manómetro de la línea marca 3 bar g: el vapor está a 143,7 °C.
- **De temperatura a presión.** Quieres la camisa a 140 °C. Con 2 bar g no llegas (133,7 °C). Necesitas 3 bar g (143,7 °C).
- **El producto siempre queda por debajo.** El calor solo pasa de lo caliente a lo frío: la masa del reactor nunca alcanza la temperatura del vapor.

Fíjate en la primera columna. Si confundes 3 bar g con 3 bar a, te equivocas en 10 grados.

### Cuánto vapor hace falta
Se calcula el calor que pide la operación y se divide entre el calor latente del vapor que usas:

> m de vapor = Q / calor latente

**Ejemplo 1: calentar un disolvente en un reactor.** Hay que llevar 1500 kg de un disolvente de 20 a 70 °C con vapor a 3 bar g. Tomamos un calor específico de ejemplo de 2,0 kJ/(kg·K).

- Q = 1500 × 2,0 × 50 = 150 000 kJ
- m = 150 000 / 2133 = 70,3 kg de vapor

**Ejemplo 2: mantener una destilación.** Hay que evaporar 400 kg de disolvente cada hora. Tomamos un calor latente del disolvente de ejemplo de 400 kJ/kg. El vapor está a 2 bar g.

- Q = 400 × 400 = 160 000 kJ cada hora
- m = 160 000 / 2163 = 74,0 kg de vapor por hora

**Ejemplo 3: calentar agua de limpieza.** Hay que calentar 800 kg de agua de 15 a 80 °C en un intercambiador con vapor a 3 bar g.

- Q = 800 × 4,18 × 65 = 217 360 kJ
- m = 217 360 / 2133 = 101,9 kg de vapor

Son consumos mínimos. En la realidad se gasta más, porque también se calienta el metal del equipo y parte del calor se pierde al ambiente.

### El circuito de vapor, pieza a pieza

| Pieza | Para qué sirve |
|---|---|
| **Caldera** (*boiler*) | Evapora el agua con el calor de un quemador. |
| **Colector** (*steam header*) | Tubo grueso del que salen los ramales hacia cada zona. |
| **Tuberías con pendiente** | Van inclinadas en el sentido del flujo para que el condensado corra hacia los puntos de purga. |
| **Calorifugado** (*insulation*) | Aislante que rodea la tubería. Evita pérdidas de calor y quemaduras. |
| **Reductora de presión** (*pressure reducing valve*) | Baja la presión de la red a la que necesita el equipo. |
| **Válvula de seguridad** (*safety valve*) | Se abre sola y deja salir vapor para que no se supere la presión máxima del equipo que protege. Va precintada: no se toca. |
| **Equipo consumidor** | La camisa del reactor o un intercambiador. Aquí condensa el vapor. |
| **Purgador** (*steam trap*) | Deja salir el condensado y retiene el vapor. |
| **Retorno de condensado** (*condensate return*) | Tuberías que devuelven el condensado a la sala de calderas. |
| **Depósito de alimentación** (*feedwater tank*) | Recoge el condensado y el agua nueva tratada. De aquí bombea la caldera. |

### Purgadores
Si el condensado se queda en la camisa, la llena de agua y el vapor ya no toca la pared: el equipo deja de calentar. Si se deja una salida abierta, el vapor se escapa sin ceder su calor. El **purgador** es una válvula automática que deja pasar el condensado, y también el aire, pero cierra el paso al vapor.

Hay tres familias, según en qué se fijan para distinguir el agua del vapor:

| Familia | En qué se fija | Cómo lo hace |
|---|---|---|
| **Mecánicos** | En la densidad: el agua pesa y el vapor no | **De boya** (*float trap*): un flotador sube con el agua y abre la salida. **De cubeta invertida** (*inverted bucket trap*): un vaso boca abajo flota cuando le entra vapor y cierra; cuando se llena de agua, se hunde y abre. Descargan el condensado en cuanto se forma. |
| **Termostáticos** | En la temperatura: el condensado se enfría y el vapor no | Un elemento sensible al calor (una cápsula con líquido o una lámina bimetálica) cierra cuando llega vapor caliente y abre cuando el condensado se ha enfriado unos grados. |
| **Termodinámicos** | En el movimiento: el vapor pasa mucho más deprisa que el agua | Una sola pieza móvil, un disco. Descargan a golpes, de forma intermitente. Son pequeños y robustos. |

**Cómo se nota un purgador que falla:**

- **Falla abierto.** Deja pasar vapor vivo al retorno. El equipo calienta, así que casi nadie lo nota, pero se tira vapor sin parar. Pistas: la tubería de después del purgador está tan caliente como la de antes y se oye un soplido continuo.
- **Falla cerrado.** El condensado no sale y el equipo se inunda. Lo notas tú: la camisa tiene presión de vapor, pero el reactor no calienta o calienta muy despacio. Ese condensado retenido también provoca golpes de ariete.

El operador no desmonta ni manipula purgadores. Los observa y avisa a mantenimiento.

### El condensado y el revaporizado
El condensado se devuelve a la caldera porque es agua ya tratada, casi pura, y está caliente. Si se tira, hay que tratar agua nueva y calentarla desde frío.

Cuando el condensado pasa de golpe a una presión más baja, tiene más calor del que puede guardar como líquido a esa nueva presión. Una parte se evapora al instante: es el **revaporizado** (*flash steam*). El condensado a 3 bar g guarda 605 kJ/kg; a presión ambiente solo puede guardar 419 kJ/kg. Sobran 605 − 419 = 186 kJ, que evaporan 186 / 2257 = 0,08 kg: un 8 % del condensado se convierte en vapor. Por eso sale una nube blanca de los venteos del sistema de condensado sin que haya ninguna avería.

### El golpe de ariete
En una línea de vapor siempre se forma condensado, sobre todo al arrancar, cuando la tubería está fría. Si no se saca, se acumula en los puntos bajos. Cuando entra el vapor, que corre muy deprisa, levanta ese agua, forma un tapón y lo lanza por la tubería como un proyectil. Al llegar a un codo o a una válvula, golpea. Eso es el **golpe de ariete** (*water hammer*).

Suena como martillazos. Es peligroso porque puede romper juntas, válvulas y tuberías, y lo que sale después es vapor y agua hirviendo. Ha causado accidentes mortales.

Cómo se evita:

- **Purgar la línea antes** de meter vapor: abrir los drenajes y sacar el condensado acumulado.
- **Abrir las válvulas de vapor despacio,** para que la línea se caliente poco a poco y el condensado que se va formando tenga tiempo de salir.
- **Pendientes y purgadores** en buen estado, con puntos de purga en los puntos bajos.
- Si oyes golpes, no sigas abriendo. Cierra despacio y avisa.

### La caldera
En una caldera de vapor, un **quemador** (*burner*) quema combustible y el calor de la llama y de los gases evapora el agua. Hay dos tipos básicos:

- **De tubos de humo o pirotubular** (*fire-tube boiler*): los gases calientes van por dentro de unos tubos sumergidos en el agua. Contiene mucha agua.
- **De tubos de agua o acuotubular** (*water-tube boiler*): al revés. El agua y el vapor van por dentro de los tubos y los gases calientes por fuera.

**El nivel de agua es lo más vigilado.** El agua es lo que refrigera el metal. Si el nivel baja demasiado, los tubos o el hogar quedan al descubierto, sin agua que se lleve el calor de la llama, y se sobrecalientan. Quedarse sin agua es el accidente clásico de una caldera.

Por eso una caldera lleva:

- **Indicadores y controles de nivel,** que mandan la bomba de alimentación y paran el quemador si falta agua.
- **Presostatos** (*pressure switches*), que regulan y cortan el quemador según la presión.
- **Válvulas de seguridad,** que alivian vapor si todo lo demás falla.

### El agua de la caldera
El agua corriente lleva sales y gases disueltos. Dos de ellos estropean una caldera:

- **La cal.** Al calentarse, las sales se depositan sobre el metal como incrustación, igual que en un hervidor de casa. Esa capa aísla: el calor pasa peor y el metal de debajo se calienta de más.
- **El oxígeno disuelto.** Ataca el acero y lo va picando.

Por eso el agua se trata antes de entrar: se **descalcifica** (*softening*) para quitarle la cal y se **desgasifica** para quitarle el oxígeno, con calor y con aditivos. Además, como el vapor se va y las sales se quedan, el agua de la caldera se concentra. Para controlarlo se hacen **purgas** (*blowdown*): se saca una parte del agua concentrada y se repone con agua limpia.

### Lo que dice el Reglamento
En España las calderas se rigen por el Reglamento de equipos a presión (Real Decreto 809/2021) y su instrucción técnica complementaria (ITC) EP-1. Lo que te conviene conocer:

- **Quién lleva la caldera.** La conducción de calderas debe confiarse a personal capacitado técnicamente, instruido por el fabricante, la empresa instaladora o la propia empresa (artículo 13.1). La empresa debe designar a una persona capacitada para operar la caldera mientras funciona (artículo 12.1).
- **Operador industrial de calderas.** Las calderas de vapor de clase segunda deben conducirlas operadores industriales de calderas, una acreditación específica (artículo 13.3). La clase depende del tipo de caldera y de multiplicar su presión máxima de servicio por su volumen (artículo 3).
- **Sala de calderas.** En los accesos hay un cartel que prohíbe la entrada a personal ajeno al servicio de las calderas (artículo 6.2). Si no es tu puesto, no entras.
- **Agua.** Es obligatorio un tratamiento de agua eficiente y un régimen de controles y purgas (artículo 8).
- **Inspecciones periódicas** (artículo 9): nivel A cada año, nivel B cada tres años y nivel C cada seis, como máximo. La de nivel A la hace la empresa instaladora y las de nivel B y C, un organismo de control, según la tabla de calderas del Reglamento.
- **Libro de la instalación** (artículo 12.4): recoge las características de la instalación, las comprobaciones de las seguridades y del agua, los fallos, las inspecciones y las reparaciones.
- **Revisión anual** de los equipos a presión (artículo 9.5 del Reglamento): calorifugado, fugas, manómetros, precinto de las válvulas de seguridad y purga de condensados.

### Vapor industrial y vapor puro
El vapor de la caldera general es **vapor industrial** (*plant steam*). Su agua lleva productos de tratamiento, así que solo se usa encerrado en camisas e intercambiadores: nunca toca el producto. Cuando el vapor toca superficies en contacto con el producto, como al esterilizar, se usa **vapor puro** o vapor limpio (*pure steam*, *clean steam*). Se produce en un generador aparte, alimentado con agua purificada y sin aditivos. El anexo 1 de las normas europeas de correcta fabricación pide que su condensado cumpla la monografía de agua para inyectables.

### Seguridad
- **El vapor no se ve.** Es un gas transparente. La nube blanca son gotitas de agua ya condensadas. Junto al punto de fuga puede no verse nada. Una fuga a presión muchas veces se oye antes de verse.
- **Quema mucho más que el agua hirviendo.** Al condensar sobre la piel, 1 kg de vapor deja 2257 kJ. Un kilo de agua hirviendo, al enfriarse de 100 a 40 °C, deja 1 × 4,18 × 60 = 251 kJ: nueve veces menos.
- **Superficies calientes.** Una línea a 3 bar g está a 144 °C. El calorifugado te protege. Donde falte o esté roto, no toques y avisa.
- **Presión.** No aflojes bridas, tapones ni purgas de una línea sin asegurarte de que está aislada, sin presión y fría. Eso es un trabajo con permiso.

**Ante una fuga de vapor:** aléjate y avisa a los compañeros y al responsable de turno. No busques la fuga con la mano ni te acerques al chorro. Si puedes cerrar el vapor desde una válvula alejada sin exponerte y tu procedimiento lo permite, ciérrala despacio.

### Qué hace el operador al calentar con vapor
1. **Lee la hoja:** temperatura objetivo, presión de vapor y límites.
2. **Comprueba la presión de vapor disponible** en el manómetro de la línea. Con la tabla sabes a qué temperatura llega.
3. **Purga:** abre el drenaje de la línea y de la camisa hasta que deje de salir agua.
4. **Abre el vapor despacio,** escuchando la línea.
5. **Vigila dos temperaturas:** la de la camisa y la de la masa. Anota la hora de inicio y la de llegada.
6. **Observa el purgador** y la salida de condensado. Si la camisa tiene presión y la masa no sube, piensa en condensado retenido.
7. **Cierra el vapor** al llegar a la temperatura o al acabar, y anótalo.

Los números de esta lección sirven para entender. En planta manda siempre el procedimiento vigente (SOP): las presiones, las temperaturas y el orden de las maniobras son los que diga tu hoja.
`,
  plant: `
Turno de tarde. Vas a calentar el reactor R-310, de acero inoxidable, con 1500 kg de disolvente para disolver el intermedio ficticio LM-42. La hoja dice: *«Calentar la masa a 70 °C con vapor en camisa. Presión de vapor en camisa: máximo 3,0 bar g.»*

Miras el manómetro PI-310, después de la reductora: 3,0 bar g. Con la tabla sabes que ese vapor está a unos 144 °C. Abres el drenaje de la línea: sale un buen chorro de agua y luego nada. Lo cierras. Abres la válvula de vapor muy poco, esperas, y sigues abriendo despacio. No hay golpes.

La otra vez, este calentamiento tardó unos cuarenta minutos. Hoy, a los veinticinco, la masa solo ha subido de 20 a 31 °C. La camisa marca 3,0 bar g: vapor hay. Te acercas al purgador PG-310 sin tocarlo. La tubería de salida de condensado, que debería quemar, está tibia. Y de la camisa llega algún golpe sordo.

Lo tienes claro: el condensado no está saliendo y la camisa se está llenando de agua. Cierras el vapor despacio y avisas a la jefa de turno. Mantenimiento, con su permiso de trabajo y la línea aislada y fría, encuentra el purgador atascado y lo cambia.

Vuelves a empezar: purgas, abres despacio. Ahora la masa sube a buen ritmo y llega a 70 °C. Anotas las horas, la presión de vapor, las temperaturas y la incidencia, con el aviso a mantenimiento.

En ningún momento has abierto más vapor «para que caliente de una vez».
`,
  batchRecord: `
En la hoja de producción (*batch record*) verás una instrucción con el medio de calefacción, la temperatura objetivo y sus límites, por ejemplo: *«Calentar a 70 °C (68–72 °C) con vapor en camisa, máximo 3,0 bar g»*. Y casillas para anotar:

- **Equipo**: código del reactor (p. ej. R-310) y de los instrumentos usados (p. ej. PI-310 para la presión, TI-310 para la temperatura), con su calibración vigente.
- **Presión de vapor**: el valor real que marca el manómetro, con su unidad (bar g), no el valor de la instrucción.
- **Inicio del calentamiento**: fecha, hora y firma al abrir el vapor.
- **Temperaturas**: la de la masa y, si la hoja lo pide, la de la camisa, a los intervalos indicados (p. ej. cada 15 o 30 minutos).
- **Llegada a temperatura**: hora en que la masa alcanza el valor objetivo, y valor real leído (70,4 °C, no «cumple»).
- **Mantenimiento de la temperatura**: lecturas durante el tiempo que pida la hoja, con máximo y mínimo.
- **Fin**: hora de cierre del vapor.
- **Incidencias**: golpes de ariete, calentamiento más lento de lo normal, purgador que no descarga, fuga, falta de presión de vapor, aviso al responsable de turno y a mantenimiento.
- **Desviaciones**: si la temperatura se sale de los límites, cuánto y durante cuánto tiempo.

Se anota lo que marca el instrumento en el momento, no lo que debería marcar.
`,
  terms: [
    { es: "Calor sensible", en: "Sensible heat", def: "Calor que cambia la temperatura de una sustancia sin cambiar su estado. Se calcula con Q = m × cp × ΔT." },
    { es: "Calor latente", en: "Latent heat", def: "Calor que se gasta en evaporar un líquido sin cambiar su temperatura, y que el vapor devuelve al condensar. Para el agua a presión ambiente, 2257 kJ/kg." },
    { es: "Vapor saturado", en: "Saturated steam", def: "Vapor de agua a la temperatura de ebullición que corresponde a su presión. Es el que se usa para calentar." },
    { es: "Vapor sobrecalentado", en: "Superheated steam", def: "Vapor calentado por encima de su temperatura de saturación. Tiene que enfriarse antes de poder condensar." },
    { es: "Título del vapor", en: "Dryness fraction", def: "Parte de la masa de un vapor húmedo que es vapor de verdad. Un título de 0,95 es un 95 % de vapor y un 5 % de gotas de agua." },
    { es: "Temperatura de saturación", en: "Saturation temperature", def: "Temperatura a la que hierve el agua, y a la que condensa el vapor, a una presión dada. Sube al subir la presión." },
    { es: "Tabla de vapor", en: "Steam table", def: "Tabla que da, para cada presión, la temperatura de saturación y el calor latente del vapor de agua." },
    { es: "Purgador", en: "Steam trap", def: "Válvula automática que deja salir el condensado y el aire y retiene el vapor. Puede ser mecánico, termostático o termodinámico." },
    { es: "Revaporizado", en: "Flash steam", def: "Vapor que se forma al instante cuando un condensado caliente pasa a una presión más baja." },
    { es: "Golpe de ariete", en: "Water hammer", def: "Golpe violento en una tubería cuando el vapor lanza condensado acumulado contra un codo o una válvula." },
    { es: "Reductora de presión", en: "Pressure reducing valve", def: "Válvula que baja la presión del vapor de la red a la que necesita un equipo." },
    { es: "Caldera pirotubular", en: "Fire-tube boiler", def: "Caldera en la que los gases calientes van por dentro de tubos sumergidos en el agua. En la acuotubular (water-tube boiler) es el agua la que va por dentro de los tubos." },
    { es: "Purga de caldera", en: "Blowdown", def: "Extracción de una parte del agua de la caldera para que no se concentren las sales." },
    { es: "Vapor puro", en: "Pure steam / clean steam", def: "Vapor producido con agua purificada y sin aditivos, para superficies en contacto con el producto. El vapor industrial (plant steam) solo se usa encerrado en camisas e intercambiadores." },
  ],
  quiz: [
    {
      kind: "number",
      q: "¿Cuántos MJ hacen falta para calentar 500 kg de agua de 25 a 85 °C? Calor específico del agua: 4,18 kJ/(kg·K).",
      answer: 125.4,
      tolerance: 0.01,
      unit: "MJ",
      explain: "Q = m × cp × ΔT = 500 × 4,18 × 60 = 125 400 kJ = 125,4 MJ.",
    },
    {
      kind: "number",
      q: "¿Cuántos kJ hacen falta para evaporar 3 kg de agua que ya está a 100 °C, a presión ambiente? Calor latente: 2257 kJ/kg.",
      answer: 6771,
      tolerance: 0.01,
      unit: "kJ",
      explain: "Q = m × calor latente = 3 × 2257 = 6771 kJ. La temperatura no cambia mientras el agua hierve.",
    },
    {
      kind: "choice",
      q: "Necesitas la camisa a 140 °C. Según la tabla, el vapor saturado está a 111,6 °C con 0,5 bar g, a 120,4 °C con 1 bar g, a 133,7 °C con 2 bar g y a 143,7 °C con 3 bar g. ¿Qué presión mínima necesitas?",
      options: [
        "Con 0,5 bar g basta si se espera el tiempo suficiente",
        "Con 1 bar g, porque la camisa acumula calor y sube",
        "Con 3 bar g, la primera que supera los 140 grados",
        "Con 2 bar g, que es la más cercana por debajo",
      ],
      answer: 2,
      explain: "El vapor saturado no puede calentar por encima de su propia temperatura. A 2 bar g está a 133,7 °C y no llega; a 3 bar g está a 143,7 °C.",
    },
    {
      kind: "number",
      q: "Hay que calentar 1200 kg de un disolvente de 20 a 80 °C. Su calor específico es 2,0 kJ/(kg·K). Se usa vapor a 3 bar g, con un calor latente de 2133 kJ/kg. ¿Cuántos kg de vapor hacen falta como mínimo?",
      answer: 67.5,
      tolerance: 0.02,
      unit: "kg",
      explain: "Q = 1200 × 2,0 × 60 = 144 000 kJ. Vapor = Q / calor latente = 144 000 / 2133 = 67,5 kg.",
    },
    {
      kind: "choice",
      q: "La camisa del reactor marca 3 bar g de vapor, pero la masa casi no sube de temperatura. La tubería de salida del purgador está tibia. ¿Qué es lo más probable?",
      options: [
        "El purgador ha fallado cerrado y la camisa está inundada",
        "El purgador ha fallado abierto y se escapa vapor vivo",
        "El vapor está sobrecalentado y calienta demasiado deprisa",
        "La válvula de seguridad está abierta y pierde presión",
      ],
      answer: 0,
      explain: "Si el condensado no sale, llena la camisa y el vapor ya no toca la pared: hay presión pero no calienta. Con el purgador abierto la salida estaría muy caliente y el equipo calentaría.",
    },
    {
      kind: "number",
      q: "Una destilación evapora 250 kg de disolvente cada hora. El calor latente del disolvente es 400 kJ/kg. Se calienta con vapor a 2 bar g, con un calor latente de 2163 kJ/kg. ¿Cuántos kg de vapor por hora hacen falta como mínimo?",
      answer: 46.2,
      tolerance: 0.02,
      unit: "kg/h",
      explain: "Q = 250 × 400 = 100 000 kJ cada hora. Vapor = 100 000 / 2163 = 46,2 kg por hora.",
    },
    {
      kind: "choice",
      q: "Vas a meter vapor en una línea que lleva horas parada y fría. ¿Cuál es la forma correcta de hacerlo?",
      options: [
        "Abro la válvula de vapor del todo para que el vapor arrastre el agua",
        "Abro primero el vapor y, cuando haya presión, abro los drenajes",
        "Abro deprisa y, si oigo golpes en la tubería, abro todavía más",
        "Purgo el condensado y luego abro la válvula de vapor despacio",
      ],
      answer: 3,
      explain: "El condensado acumulado, empujado por el vapor, provoca el golpe de ariete. Se saca antes por los drenajes y el vapor se abre despacio para que la línea se caliente poco a poco.",
    },
    {
      kind: "number",
      q: "Llega vapor húmedo a 3 bar g con un título de 0,90. El calor latente a esa presión es 2133 kJ/kg. ¿Cuántos kJ cede al condensar cada kilo de ese vapor húmedo?",
      answer: 1919.7,
      tolerance: 0.01,
      unit: "kJ/kg",
      explain: "Solo condensa la parte que es vapor: 0,90 × 2133 = 1919,7 kJ/kg. El 10 % restante ya era agua líquida.",
    },
    {
      kind: "choice",
      q: "Oyes un silbido fuerte junto a una brida de la línea de vapor, pero no ves ninguna nube. ¿Qué haces?",
      options: [
        "Paso la mano cerca de la brida para localizar el punto exacto",
        "Me alejo, aviso a los compañeros y al responsable de turno",
        "Aprieto los tornillos de la brida con la línea en servicio",
        "Sigo trabajando, porque si no hay nube blanca no hay fuga",
      ],
      answer: 1,
      explain: "El vapor es invisible: la nube blanca son gotas ya condensadas y junto a la fuga puede no verse nada. No se busca con la mano ni se aprieta una brida con presión: se avisa.",
    },
    {
      kind: "choice",
      q: "Según el artículo 13.3 de la ITC EP-1 del Reglamento de equipos a presión, ¿quién debe conducir una caldera de vapor de clase segunda?",
      options: [
        "Cualquier operador de proceso que esté de turno ese día",
        "El técnico del organismo de control que la inspecciona",
        "Un operador u operadora industrial de calderas acreditado",
        "La empresa instaladora, que debe estar siempre presente",
      ],
      answer: 2,
      explain: "La ITC EP-1 exige que las calderas de clase segunda de vapor o de agua sobrecalentada las conduzca un operador u operadora industrial de calderas, con una de las acreditaciones que enumera el artículo 13.3.",
    },
  ],
};
