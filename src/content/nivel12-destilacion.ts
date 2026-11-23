import type { Lesson } from "./types";

export const destilacionAFondo: Lesson = {
  slug: "destilacion-a-fondo",
  level: 12,
  order: 6.5,
  title: "Destilación a fondo: reflujo, vacío y cambio de disolvente en el reactor",
  titleEn: "Distillation in depth",
  minutes: 38,
  summary:
    "La ecuación de Antoine con cuentas para el tolueno y el agua, reflujo total frente a destilación, el montaje del reactor con su condensador, separador, bomba de vacío y trampa fría, por qué se destila a vacío, cuánto tarda, el cambio de disolvente en números, el azeótropo tolueno-agua, la espuma y la ebullición violenta, qué vigila el operador, qué hacer si falla el condensador y los IPC.",
  body: `
En «Destilación y concentración» viste para qué sirve destilar y qué es un azeótropo. En «El reactor a fondo» viste que el condensador permite dos operaciones: reflujo, cuando el líquido vuelve al reactor, y destilación, cuando se desvía a un depósito. Y en «La materia a fondo» aprendiste que un líquido hierve cuando su presión de vapor iguala a la presión que tiene encima. Aquí vas a poner números a todo eso con el tolueno del reactor R-204, a montar el equipo pieza a pieza y a ver qué puede salir mal.

### Lo que pasa mientras hierve: la temperatura se queda quieta
El libro de instrumentación de Tony Kuphaldt lo explica con un vaso de papel lleno de agua puesto al fuego. El vaso no arde: el agua sube hasta que hierve y ahí se queda, por mucho que apriete la llama. Todo el calor que entra se gasta en convertir líquido en vapor, no en calentar. Solo se quema el borde, por encima del agua.

Ese calor que se gasta en hervir sin subir la temperatura es el **calor latente de vaporización** (*latent heat of vaporization*). Kuphaldt da el del agua: 539,1 calorías por gramo a presión atmosférica, unas siete veces más de lo que cuesta calentarla de 24 °C a 100 °C. Y al revés: el vapor que se condensa devuelve ese mismo calor. Por eso un condensador tiene que quitar muchísimo calor.

La consecuencia para ti: **en ebullición, la temperatura de masa la fija la presión, no la camisa.** Si subes la camisa, sale más vapor, pero la masa no se calienta más. Kuphaldt lo recuerda con la montaña y la olla exprés: con menos presión se hierve a menos temperatura, y con más presión, a más.

### La ecuación de Antoine
Para saber a qué temperatura hierve un líquido a cada presión se usa una fórmula de ajuste a datos medidos, la **ecuación de Antoine** (*Antoine equation*):

> log P = A − B / (C + T)

P es la presión de vapor en milímetros de mercurio (mmHg), T la temperatura en °C, «log» el logaritmo en base 10, y A, B y C tres números propios de cada sustancia. Despejando T sale la temperatura de ebullición a una presión dada:

> T = B / (A − log P) − C

| Sustancia | A | B | C | Válida |
|---|---|---|---|---|
| Tolueno | 6,95464 | 1344,8 | 219,482 | La que usa el simulador del R-204 |
| Agua | 8,07131 | 1730,63 | 233,426 | Entre 1 y 100 °C |

Las constantes solo valen en el intervalo de temperaturas en que se ajustaron.

**La cuenta, paso a paso, para el tolueno a 200 mbar abs.**

1. Pasar a mmHg. Un milímetro de mercurio son 133,322 Pa, y 200 mbar son 20000 Pa: 20000 / 133,322 = 150,0 mmHg.
2. Logaritmo: log 150,0 = 2,1761.
3. A − log P = 6,95464 − 2,1761 = 4,7785.
4. B / 4,7785 = 1344,8 / 4,7785 = 281,4.
5. T = 281,4 − 219,482 = **61,9 °C**.

A 760 mmHg, la atmósfera normal, la misma cuenta da 110,6 °C, el punto de ebullición del tolueno que usa la app.

| Presión absoluta | Tolueno hierve a | Agua hierve a |
|---|---|---|
| 1013 mbar (atmósfera) | 110,6 °C | 100,0 °C |
| 200 mbar | 61,9 °C | 60,1 °C |
| 100 mbar | 45,3 °C | 45,9 °C |

Cada fila coincide, en una décima de grado, con una ecuación de referencia más precisa. Fíjate en algo curioso: a presión atmosférica el agua hierve 10 °C antes que el tolueno, y a 100 mbar casi a la vez. Cada líquido tiene su curva, y las curvas se cruzan. No extrapoles «el agua siempre sale antes».

Y un dato para el R-204: si el control de presión lo mantiene a 0,05 bar g, es decir, a 1063 mbar abs, el tolueno puro hierve a 112,3 °C. Con el producto disuelto hierve algo más arriba («Disoluciones y solubilidad a fondo»): en el simulador, la masa a reflujo se queda en unos 115 °C.

### Reflujo total o destilación: adónde va el líquido
En los dos casos la masa hierve, el vapor sube y el condensador lo vuelve líquido. La diferencia está en una válvula, debajo del condensador:

| | Reflujo total (*total reflux*) | Destilación (*distillation*) |
|---|---|---|
| El condensado | Vuelve todo al reactor | Se desvía al depósito de destilado |
| Volumen en el reactor | Constante | Baja |
| Para qué | Mantener la masa a ebullición un tiempo sin perder disolvente | Concentrar, cambiar de disolvente, quitar agua |
| Qué anotas | Hora de inicio y tiempo a reflujo | Volumen recogido y volumen final |

Una válvula de tres vías en mala posición convierte un reflujo en una destilación sin que nadie lo note, hasta que baja el nivel. Por eso la posición del condensador se comprueba y se anota.

### El montaje en planta, pieza a pieza
| Pieza | Para qué sirve | Qué miras |
|---|---|---|
| Reactor (calderín) | Calienta la masa con la camisa y la agita | Temperatura de masa y de camisa, nivel, agitación |
| Cuello o columna (*column*) | Lleva el vapor hacia el condensador | Temperatura de vapor en la cabeza |
| Condensador (*condenser*) | Enfría el vapor con agua o glicol y lo vuelve líquido | Temperatura de entrada y salida del servicio, caudal |
| Separador de fases (*phase separator*) | Si salen dos líquidos que no se mezclan, los deja separarse | La interfase entre las dos capas |
| Depósito de destilado (*receiver*) | Recoge lo que no vuelve | Nivel o volumen recogido |
| Trampa fría (*cold trap*) | Condensa lo que se escapa antes de la bomba | Nivel y temperatura |
| Bomba de vacío (*vacuum pump*) | Baja la presión de todo el sistema | Presión en mbar abs |
| Venteo (*vent*) | Salida del gas que no condensa | Que esté fría y sin vapor |

Kuphaldt describe las columnas de las grandes plantas: torres altas con bandejas donde el vapor que sube se cruza con el líquido que baja. En un reactor de farmacia suele haber algo mucho más simple, un cuello o una columna corta, y la separación es menos fina.

La nota técnica NTP 464 del Instituto Nacional de Seguridad y Salud en el Trabajo (INSST), escrita para el laboratorio, da la razón de la trampa: evitar que los vapores eliminados estropeen la bomba de vacío. En planta es igual. La bomba de anillo líquido la tienes en «Bombas a fondo», y el vacío como servicio en «Nitrógeno, aire comprimido y vacío a fondo».

### A presión atmosférica o a vacío
Muchos principios activos e intermedios se estropean con el calor. Si el tolueno hierve a 110,6 °C, destilar a presión atmosférica es tener el producto a más de 110 °C durante horas. A 200 mbar abs lo tienes a unos 62 °C. Esa es la razón principal para destilar a vacío en farmacia: **proteger el producto del calor**.

El vacío tiene precio, y es bueno conocerlo:

- **El vapor ocupa mucho más.** Con la ley de los gases, un kilo de vapor de tolueno ocupa 0,34 m³ a 1013 mbar y 110,6 °C, y 2,87 m³ a 100 mbar y 45,3 °C: más de ocho veces más volumen. Por la misma tubería pasa mucho más gas, que arrastra con más facilidad gotas o espuma.
- **El condensador rinde menos.** El vapor condensa a su temperatura de ebullición. Con la del R-204 del simulador (un valor de ejemplo de 1670 W/K) y agua a 15 °C, el condensador puede quitar unos 160 kW con el vapor a 110,6 °C, pero solo 50,6 kW con el vapor a 45,3 °C. Es una cuenta simplificada, pero la idea es real: a vacío, el condensador puede quedarse corto con la misma calefacción.
- **Las fugas van hacia dentro.** Entra aire, que es oxígeno junto a vapores inflamables. Lo tienes en «Inertización a fondo».

### Cuánto tarda: Q = m × L
Para destilar hay que pagar el calor latente de cada kilo que sale. El calor de vaporización del tolueno que usa el simulador es 360 kJ/kg.

**Ejemplo.** Destilar 1000 L de tolueno (870 kg, con densidad 0,87 kg/L): 870 × 360 = 313200 kJ. Si la camisa entrega de media 50 kW (valor de ejemplo, como en «El reactor a fondo»): 313200 / 50 = 6264 s, unos **104 minutos**. Dicho de otro modo, a 50 kW salen unos 500 kg por hora, unos 575 litros.

Por eso una concentración larga son horas, no minutos. Si de pronto el destilado sale el doble de rápido sin tocar nada, algo ha cambiado: puede que se haya perdido presión o que un servicio esté fallando.

### Concentrar
Concentrar es destilar disolvente hasta un volumen final. El producto se queda en el reactor y su concentración sube en la misma proporción en que baja el volumen. Si pasas de 3000 L a 1000 L, la concentración se multiplica por 3.

Dos reglas:

- **El volumen final lo fija la hoja.** Si te pasas, el producto puede empezar a cristalizar antes de tiempo, pegarse a la pared o dejar la masa sin el volumen mínimo de agitación.
- **Nunca a sequedad si la hoja no lo pide.** La NTP 464 lo advierte para mezclas en las que pueden formarse productos inestables, como los peróxidos de algunos éteres: el peróxido, poco volátil, se concentra en el residuo, y el accidente llega cuando queda casi solo él.

### Cambio de disolvente en números
El **cambio de disolvente** (*solvent swap*) sustituye un disolvente A por otro B. La forma más común es por tandas: concentrar, añadir B, concentrar, añadir B. Funciona bien cuando A hierve antes que B.

La cuenta se parece a la de los ciclos de inertización. Supón (valores de ejemplo) que concentras hasta 400 L y rellenas con B hasta 1000 L. En el caso peor, que el vapor saliera con la misma composición que el líquido, cada tanda dejaría la proporción de A multiplicada por 400 / 1000 = 0,4:

| Tandas | Cuenta | A que queda (en volumen) |
|---|---|---|
| 1 | 100 × 0,4 | 40 % |
| 2 | 40 × 0,4 | 16 % |
| 3 | 16 × 0,4 | 6,4 % |
| 4 | 6,4 × 0,4 | 2,56 % |

En la realidad sale mejor, porque el vapor va más cargado del disolvente que hierve antes. Pero la cuenta te da una idea del orden de magnitud y de una regla útil: **cuanto más se concentra en cada tanda, menos B se gasta.**

Hay otra manera, la **destilación a volumen constante** (*constant-volume distillation*): se añade B a la vez que sale destilado, con el nivel quieto. Igual que el barrido en «Inertización a fondo», en el caso peor cada volumen de reactor añadido multiplica A por 0,37. Con 400 L en el reactor y 1200 L de B añadidos, en el caso peor quedaría un 5,0 %; por tandas, con los mismos 1200 L (dos tandas de 600 L), un 16 %.

Ninguna cuenta sustituye al análisis. Igual que el medidor de oxígeno manda sobre la cuenta de los ciclos, **la cromatografía de gases manda sobre la cuenta del cambio de disolvente**. Si dos disolventes forman un azeótropo, la cuenta deja de valer: el procedimiento ya lo tiene en cuenta.

### El azeótropo tolueno-agua y el secado azeotrópico
El tolueno y el agua casi no se mezclan: forman dos capas, con el tolueno, más ligero, arriba. Cuando dos líquidos así hierven juntos, cada uno empuja con su propia presión de vapor, y la mezcla hierve cuando la suma de las dos iguala a la presión de encima. Por eso hierven juntos antes que cualquiera de los dos por separado. Es un **azeótropo heterogéneo** (*heteroazeotrope*).

Con las constantes de Antoine de arriba y suponiendo que no se mezclan nada, la cuenta da:

- A 1013 mbar hierven juntos a **84,4 °C**: el agua aporta 563 mbar y el tolueno 450.
- El vapor lleva cerca de un 20 % de agua en masa.
- A 200 mbar hierven juntos a unos 45,6 °C.

Es un cálculo simplificado; la lección corta da unos 85 °C. El valor medido de tablas no lo hemos podido leer en una fuente gratuita.

Así se quita agua de una masa en tolueno, el **secado azeotrópico** (*azeotropic drying*). El vapor sube, condensa, y en el separador de fases el condensado se parte en dos capas: el agua cae al fondo y se purga; el tolueno rebosa y vuelve al reactor. Mientras queda agua, la **temperatura de vapor** se queda cerca del azeótropo. Cuando el agua se acaba, sube hacia la del tolueno puro. Esa subida es tu señal; la confirmación es el análisis de agua por Karl Fischer («El agua en la muestra a fondo: Karl Fischer y pérdida por secado»).

### Ebullición violenta y espuma
La **ebullición violenta** (*bumping*) es un líquido recalentado que de golpe suelta una gran burbuja de vapor. La **espuma** (*foaming*) es una capa de burbujas que sube por el cuello. Las dos pueden mandar líquido con producto al condensador y al destilado, ensuciar el sistema y perder producto. La NTP 464 cita, entre los riesgos de destilar, el paro de la refrigeración con emisión de vapores y la ebullición irregular con proyecciones.

Cómo se previenen en el reactor:

- **Agitar.** Un líquido agitado hierve de forma regular. En el laboratorio, la NTP 464 pide trocitos de porcelana porosa o un capilar con gas; en el reactor, ese papel lo hace el agitador.
- **Primero el vacío y después el calor.** La NTP 464 lo dice así: la calefacción no debe empezar hasta que el vacío se ha establecido, para evitar que la ebullición se desencadene de golpe.
- **Bajar la presión poco a poco**, en escalones. Cada escalón hace hervir de golpe lo que ya estaba caliente. Si ves espuma, se para el escalón y se espera.
- **No subir la calefacción para ir más rápido.** Más calor es más vapor por la misma tubería.
- **Mirar por la mirilla** (*sight glass*) de la cabeza o del cuello.

### Qué vigila el operador
| Señal | Qué te dice |
|---|---|
| Temperatura de masa | Si sube sin cambiar la presión, la masa se concentra o falta disolvente |
| Temperatura de vapor | Qué está destilando: si salta, ha cambiado lo que sale |
| Presión (mbar abs) | Si sube con la bomba en marcha, entra aire o el condensador no da abasto |
| Volumen de destilado o caudal | Si la operación va al ritmo previsto |
| Agua o glicol del condensador | Si la salida se calienta de más, llega más vapor del que se condensa bien |
| Nivel del reactor | Que no se pase del volumen final ni baje del mínimo de agitación |
| Mirilla | Espuma o arrastre |
| Venteo y trampa | Que no salga vapor caliente ni se llene la trampa |

Una prueba sencilla de coherencia: el volumen recogido más el que queda en el reactor tiene que parecerse al de partida. Si falta mucho, se ha ido por algún sitio, al venteo o a la trampa.

### Si falla el agua del condensador
Lo tienes en «Intercambio de calor y frío a fondo» y en «El reactor a fondo»: el disolvente sigue hirviendo, pero ya no vuelve como líquido. A presión atmosférica, los vapores salen por el venteo y, si no pueden salir, sube la presión. A vacío, el vapor sigue camino hacia la trampa y la bomba: la presión sube, la trampa se llena y la bomba se carga de disolvente.

Qué haces:

1. **Quitar el calor.** Sin calor no hay vapor nuevo. Es lo primero, antes que nada.
2. **Avisar** al jefe de turno y a mantenimiento.
3. **No cerrar el venteo** para no perder disolvente: es lo que impide que suba la presión.
4. **Anotar** la hora, la presión máxima y el disolvente perdido.

En el simulador del R-204 esta avería aparece durante el reflujo, con las alarmas de condensador sin agua y de vapor por el venteo.

### Terminar una destilación a vacío
La NTP 464 da dos reglas que valen también en planta. Enfriar antes de romper el vacío, porque meter aire en un recipiente caliente con residuo puede provocar inflamaciones o explosiones. Y pasar del vacío a la presión normal de manera lenta. En planta, además, el vacío se rompe con nitrógeno, nunca con aire.

### Los controles en proceso
La guía ICH Q7 pide procedimientos escritos para seguir los pasos que hacen variar la calidad, con sus controles en proceso y sus criterios de aceptación (apartado 8.30). Esos controles los puede hacer producción, y el proceso se puede ajustar dentro de límites aprobados por calidad, con todo documentado en la hoja de producción (apartado 8.33).

| Control en proceso | Qué comprueba |
|---|---|
| Volumen destilado o volumen final | Que se ha concentrado lo que pide la hoja |
| Agua por Karl Fischer | Que el secado azeotrópico ha terminado |
| Disolvente residual por cromatografía de gases | Que el cambio de disolvente ha terminado («Cromatografía de gases a fondo») |

Si el resultado no cumple, no se sigue «por si acaso»: se hace lo que diga la hoja, normalmente otra tanda o seguir destilando, y se repite el análisis.

Los números de esta lección sirven para entender lo que ves. En planta manda siempre el procedimiento vigente (SOP): presiones, temperaturas, volúmenes y límites son los de tu hoja.
`,
  plant: `
Turno de tarde en el R-204. La masa del intermedio ficticio AX-22 está en tolueno, con algo de agua. La hoja dice: *«Secar azeotrópicamente a presión atmosférica con el separador S-204, purgando la fase acuosa, hasta temperatura de vapor ≥ 109 °C. Enfriar la masa a 70 °C. Hacer vacío hasta 200 mbar abs en escalones de 100 mbar cada 10 min. Concentrar con la masa ≤ 75 °C desde 3000 L hasta 1000 L. IPC: agua por Karl Fischer ≤ 0,05 %.»* (Los límites son valores de ejemplo.)

Pasas la válvula del condensador E-204 a destilación y compruebas su agua: entra a 15 °C.

El vapor sale a unos 85 °C. En el S-204 crece la capa de agua; la purgas dos veces y lo anotas. Hora y media después el vapor sube en pocos minutos a 110 °C: no queda agua.

Enfrías a 70 °C y empiezas a bajar la presión. Hasta unos 300 mbar abs no hierve: a 70 °C el tolueno tiene una presión de vapor de unos 272 mbar. En el escalón siguiente, al cruzar esa presión, la masa empieza a hervir de golpe y por la mirilla ves espuma que sube por el cuello. Paras el escalón, mantienes la presión y bajas la consigna de la camisa. La espuma baja en un par de minutos. Sigues con escalones de 25 mbar y anotas la incidencia.

A 200 mbar abs la masa hierve a unos 63 °C: al hervir se ha enfriado sola, porque el vapor se lleva su calor latente. El D-205 se va llenando. Con 1990 L recogidos, el nivel del reactor marca 1010 L: cuadra. Paras el calor, tomas la muestra y el laboratorio da 0,03 % de agua: cumple. Enfrías y rompes el vacío con nitrógeno, despacio.
`,
  batchRecord: `
- Posición del condensador (reflujo o destilación) comprobada antes de calentar, con hora y firma.
- Servicios: temperatura de entrada del agua o glicol del condensador; trampa fría vacía y en servicio; bomba de vacío disponible.
- Inicio del secado azeotrópico: hora, temperatura de masa y de vapor. Cada purga del separador, con hora y volumen de agua.
- Fin del secado: hora y temperatura de vapor alcanzada.
- Cada escalón de vacío: hora y presión alcanzada en mbar abs, no la teórica.
- Durante la destilación, a los intervalos de la hoja: presión, temperatura de masa, temperatura de vapor, temperatura de camisa, temperatura de salida del agua del condensador y volumen recogido.
- Volumen final del reactor y volumen total de destilado, y la comprobación de que cuadran con el de partida.
- Muestra de IPC: hora, punto de toma, número de muestra, ensayo (Karl Fischer o cromatografía de gases), resultado y límite.
- Rotura del vacío: gas usado (nitrógeno), hora y temperatura de masa en ese momento.
- Cualquier espuma, arrastre, subida de presión, fallo del condensador o resultado fuera de límite: en el momento, con hora, aviso y lo que se hizo.
`,
  terms: [
    { es: "Presión de vapor", en: "Vapour pressure", def: "Presión del vapor de un líquido en equilibrio con él. Sube con la temperatura; el líquido hierve cuando iguala la presión de encima." },
    { es: "Calor latente de vaporización", en: "Latent heat of vaporization", def: "Calor que hace falta para convertir en vapor un kilo de líquido sin cambiar su temperatura. El vapor lo devuelve al condensar." },
    { es: "Ecuación de Antoine", en: "Antoine equation", def: "Fórmula de ajuste, log P = A − B / (C + T), que da la presión de vapor de una sustancia a cada temperatura." },
    { es: "Reflujo total", en: "Total reflux", def: "Operación en la que todo el vapor condensado vuelve al reactor y el volumen no cambia." },
    { es: "Condensador", en: "Condenser", def: "Intercambiador que enfría el vapor con agua o glicol y lo vuelve líquido." },
    { es: "Separador de fases", en: "Phase separator", def: "Recipiente donde dos líquidos que no se mezclan se separan en capas para purgar una y devolver la otra." },
    { es: "Depósito de destilado", en: "Receiver", def: "Recipiente que recoge el líquido destilado que no vuelve al reactor." },
    { es: "Trampa fría", en: "Cold trap", def: "Recipiente refrigerado antes de la bomba de vacío que condensa los vapores que se escapan." },
    { es: "Destilación a volumen constante", en: "Constant-volume distillation", def: "Cambio de disolvente en el que se añade el disolvente nuevo al mismo ritmo al que sale el destilado." },
    { es: "Azeótropo heterogéneo", en: "Heteroazeotrope", def: "Mezcla de dos líquidos que no se mezclan y que hierven juntos por debajo de la temperatura de cualquiera de los dos." },
    { es: "Secado azeotrópico", en: "Azeotropic drying", def: "Quitar agua de una masa destilándola junto con un disolvente con el que forma azeótropo, como el tolueno." },
    { es: "Ebullición violenta", en: "Bumping", def: "Salida brusca de una gran burbuja de vapor en un líquido recalentado, que puede proyectar líquido." },
    { es: "Mirilla", en: "Sight glass", def: "Ventana de vidrio en un equipo o tubería para ver el interior: espuma, arrastre o nivel." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Con la ecuación de Antoine del tolueno, T = B / (A − log P) − C, con A = 6,95464, B = 1344,8, C = 219,482, P en mmHg y T en °C, ¿a qué temperatura hierve el tolueno a 150 mmHg? (log 150 = 2,1761)",
      answer: 61.9,
      tolerance: 0.01,
      unit: "°C",
      explain: "A − log P = 6,95464 − 2,1761 = 4,7785; 1344,8 / 4,7785 = 281,4; 281,4 − 219,482 = 61,9 °C. Son 200 mbar abs.",
    },
    {
      kind: "choice",
      q: "Secas azeotrópicamente una masa en tolueno a presión atmosférica. La temperatura de vapor lleva una hora en unos 85 °C y, en pocos minutos, sube a 110 °C. ¿Qué significa?",
      options: [
        "Que el condensador se ha quedado sin agua y hay que parar",
        "Que se ha perdido el vacío y el tolueno hierve más arriba",
        "Que ya no queda agua y destila tolueno casi puro",
        "Que la sonda de vapor está averiada y marca de más",
      ],
      answer: 2,
      explain: "Mientras hay agua, tolueno y agua hierven juntos por debajo de los dos. Cuando el agua se acaba, el vapor sube hacia los 110,6 °C del tolueno. Se confirma con Karl Fischer.",
    },
    {
      kind: "number",
      q: "Concentras una masa en el reactor desde 3000 L hasta 1000 L sin perder producto. ¿Por cuánto se multiplica la concentración del producto?",
      answer: 3,
      tolerance: 0.01,
      unit: "veces",
      explain: "La cantidad de producto no cambia y el volumen pasa a un tercio: 3000 / 1000 = 3 veces más concentrado.",
    },
    {
      kind: "number",
      q: "Cambio de disolvente por tandas: cada vez concentras hasta 400 L y rellenas con el disolvente nuevo hasta 1000 L. Si el vapor saliera con la misma composición que el líquido (caso peor), ¿qué porcentaje en volumen del disolvente viejo quedaría tras tres tandas?",
      answer: 6.4,
      tolerance: 0.02,
      unit: "%",
      explain: "Cada tanda multiplica por 400 / 1000 = 0,4: 100 × 0,4 × 0,4 × 0,4 = 6,4 %. La cromatografía de gases dice el valor real.",
    },
    {
      kind: "number",
      q: "Tienes que destilar 870 kg de tolueno, con un calor de vaporización de 360 kJ/kg, y la camisa entrega de media 50 kW. ¿Cuántos minutos tarda, como mínimo?",
      answer: 104.4,
      tolerance: 0.02,
      unit: "min",
      explain: "Q = 870 × 360 = 313200 kJ; 313200 / 50 = 6264 s; 6264 / 60 = 104,4 min.",
    },
    {
      kind: "choice",
      q: "Destilas a 200 mbar abs. Salta la alarma de falta de agua en el condensador y la presión empieza a subir. ¿Qué haces primero?",
      options: [
        "Quitar el calor de la camisa para que no se forme más vapor",
        "Cerrar el venteo y la bomba para no perder más tolueno",
        "Abrir más la bomba de vacío para recuperar los 200 mbar",
        "Seguir destilando y anotar la subida al final del turno",
      ],
      answer: 0,
      explain: "Sin frío el vapor no condensa y se va hacia la trampa y la bomba. Lo primero es dejar de producir vapor, después avisar y anotar.",
    },
    {
      kind: "choice",
      q: "Con la masa en tolueno a 70 °C bajas la presión por escalones. Al pasar de 300 a 250 mbar abs la masa empieza a hervir y ves por la mirilla espuma que sube por el cuello. ¿Qué es lo correcto?",
      options: [
        "Bajar de golpe a 200 mbar abs para terminar antes",
        "Subir la camisa para que la espuma se rompa con el calor",
        "Parar el agitador para que la superficie se calme",
        "Parar el escalón, mantener la presión y reducir el calor",
      ],
      answer: 3,
      explain: "La espuma sale de hervir de golpe. Se detiene la bajada, se quita calor y se sigue con escalones más suaves. El agitador ayuda a hervir de forma regular.",
    },
    {
      kind: "choice",
      q: "Has terminado una concentración a vacío con la masa a 63 °C. ¿Cómo se devuelve el reactor a presión ambiente?",
      options: [
        "Abriendo una entrada de aire, que es lo más rápido",
        "Enfriando primero y rompiendo el vacío despacio con nitrógeno",
        "Parando la bomba y dejando que entre lo que haga falta",
        "Rompiendo el vacío en caliente para descargar antes",
      ],
      answer: 1,
      explain: "La NTP 464 pide enfriar antes de romper el vacío y hacerlo despacio. En planta se rompe con nitrógeno para no meter oxígeno junto a vapores inflamables.",
    },
    {
      kind: "number",
      q: "Un condensador tiene un U·A de 1670 W/K (valor de ejemplo) y trabaja con agua a 15 °C. Si el vapor condensa a 45,3 °C, ¿cuántos kW puede quitar, como mucho, con la cuenta simplificada Q = U·A·ΔT?",
      answer: 50.6,
      tolerance: 0.02,
      unit: "kW",
      explain: "ΔT = 45,3 − 15 = 30,3 K; 1670 × 30,3 = 50601 W, unos 50,6 kW. Con el vapor a 110,6 °C serían unos 160 kW: a vacío el condensador rinde menos.",
    },
    {
      kind: "choice",
      q: "Tras dos tandas de cambio de disolvente, la cromatografía de gases da más disolvente viejo del que permite la hoja. Tu cuenta decía que ya cumplía. ¿Qué haces?",
      options: [
        "Lo das por bueno, porque la cuenta dice que cumple",
        "Repites el análisis hasta que salga un valor que cumpla",
        "Haces lo que diga la hoja, otra tanda, y repites el análisis",
        "Pasas a la etapa siguiente y lo anotas como comentario",
      ],
      answer: 2,
      explain: "La cuenta es una previsión y el análisis es la prueba. Se sigue el procedimiento, normalmente otra tanda, y se repite el control en proceso.",
    },
  ],
};
