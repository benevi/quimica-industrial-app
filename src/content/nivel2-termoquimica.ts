import type { Lesson } from "./types";

export const termoquimicaAFondo: Lesson = {
  slug: "termoquimica-a-fondo",
  level: 2,
  order: 7,
  title: "Calor de reacción a fondo: cuánto calienta una reacción y por qué puede desbocarse",
  titleEn: "Reaction heat in depth: how much a reaction heats up and why it can run away",
  minutes: 40,
  summary:
    "De dónde sale el calor de una reacción, qué significa el signo de la entalpía, cuánto calor da una carga, cuánto subiría la masa si nada lo retirara, la temperatura máxima con reactivo acumulado, la velocidad máxima de adición que aguanta la camisa, la calorimetría, las descomposiciones, el reflujo como freno, los gases y qué vigila el operador.",
  body: `
En «Calor de reacción y reacciones descontroladas» viste las ideas: exotérmica, endotérmica, acumulación y aumento adiabático. Aquí aprendes **de dónde sale ese calor** y las **cuentas de seguridad** que hay detrás de los límites de la hoja de producción (*batch record*). Productos y códigos son ficticios; lo marcado como «valor de ejemplo» es inventado.

### La energía escondida en los enlaces
Por «Enlaces y fuerzas entre moléculas a fondo» sabes que los átomos están unidos por **enlaces** (*chemical bonds*). Basta una regla:

- **Romper un enlace cuesta energía.** Es como separar dos imanes pegados: tienes que tirar.
- **Formar un enlace libera energía.** Cuando dos imanes se juntan solos, chocan con un golpe: esa energía sale.

En una reacción se rompen los enlaces de los reactivos y se forman los de los productos. El resultado depende de la cuenta final:

- Si al formar se libera **más** de lo que costó romper, sobra energía y sale en forma de calor. Es una reacción **exotérmica** (*exothermic*).
- Si costó **más** romper que lo que se recupera al formar, falta energía y la reacción la toma del entorno. Es **endotérmica** (*endothermic*).

**La analogía de la cuesta.** Imagina una bicicleta. En una exotérmica los reactivos están arriba de la cuesta y los productos abajo: la bici baja sola y la energía «de altura» sale como calor. En una endotérmica los productos están más arriba: hay que pedalear, es decir, meter calor.

Casi siempre hay además un pequeño **repecho** antes de la bajada: un empujón inicial para empezar a romper enlaces. Por eso muchas reacciones exotérmicas no arrancan en frío y necesitan una temperatura mínima. Ese repecho es la **energía de activación** (*activation energy*).

**Ejemplo con números (valores aproximados de libro de texto).** El hidrógeno y el cloro forman cloruro de hidrógeno: H₂ + Cl₂ da 2 HCl.

| Paso | Enlaces | Energía (kJ por mol) |
|---|---|---|
| Romper | 1 H–H (436) + 1 Cl–Cl (243) | Cuesta 679 |
| Formar | 2 H–Cl (2 × 431) | Libera 862 |
| Balance | 679 − 862 | **−183** |

Sobran 183 kJ por mol: es exotérmica. Los valores de enlace son medias: solo da una estimación. La NTP 302 del Instituto Nacional de Seguridad y Salud en el Trabajo (INSST) explica que el calor de reacción también puede estimarse a partir de datos termodinámicos de las sustancias, pero que para las descomposiciones a temperaturas bajas, entre 100 y 400 °C, es imprescindible medirlo con un análisis calorimétrico.

### La entalpía de reacción y su signo
El calor que da o toma una reacción a presión constante, como en un reactor abierto al venteo, se llama **entalpía de reacción** (*reaction enthalpy*), y se escribe **ΔH**. Se da en **kJ/mol**: kilojulios por cada mol de reacción tal como está escrita.

El signo se mira desde las sustancias que reaccionan:

| Signo de ΔH | Qué le pasa a la reacción | Qué notas en el reactor | Tipo |
|---|---|---|---|
| Negativo (−) | Pierde energía: la suelta | La masa se calienta | Exotérmica |
| Positivo (+) | Gana energía: la toma | La masa se enfría | Endotérmica |

Como en una cuenta del banco: ΔH = −150 kJ/mol significa que la reacción «paga» 150 kJ por mol y la masa los cobra como calor. En las cuentas de seguridad se usa el valor sin signo y se dice «libera».

### Cuánto calor da una carga
El calor total es el número de moles que reaccionan por el calor de cada mol:

> Q = n × ΔH

En planta se cargan kilos. Por «El mol a fondo» sabes que **kilos entre masa molar dan kilomoles** (kmol). El truco de unidades es este: **1 kJ/mol es lo mismo que 1000 kJ/kmol**, porque un kilomol son mil moles. Si n va en kmol, multiplica ΔH por 1000 y el calor sale en kJ.

**Ejemplo 1: neutralizar aguas ácidas.** Un depósito contiene 2000 kg de agua con 73 kg de ácido clorhídrico (HCl, valor de ejemplo). Con H = 1 y Cl = 35,5, la masa molar es 36,5 kg/kmol: 73 / 36,5 = **2 kmol**. La neutralización de un ácido fuerte con una base fuerte libera unos **57 kJ por mol** de agua formada (valor de libro de texto, aproximado). Q = 2 × 57 000 = **114 000 kJ**.

**Ejemplo 2: una reacción de síntesis.** Un reactivo C ficticio, de masa molar 100 kg/kmol, reacciona con ΔH = −150 kJ/mol (valores de ejemplo). Se cargan 500 kg: 500 / 100 = 5 kmol. Q = 5 × 150 000 = **750 000 kJ**.

**Ejemplo 3: diluir un ácido.** Al mezclar ácido sulfúrico concentrado con agua se desprende mucho calor sin reacción de síntesis: es un **calor de mezcla** (*heat of mixing*). No damos cifra porque no se ha verificado en una fuente leída. La regla ya la conoces de «Ácidos, bases y pH a fondo»: el ácido sobre el agua, despacio y agitando.

### El aumento adiabático de temperatura, desde cero
La pregunta clave: **¿cuánto subiría la temperatura si todo ese calor se quedara en la masa?** Sin camisa, sin pérdidas, sin que nadie actúe. Eso se llama **adiabática** (*adiabatic*): sin intercambio de calor con el exterior. La NTP 527 del INSST la señala como el caso límite que hay que estudiar cuando se analiza la seguridad en las peores condiciones posibles.

Usamos la fórmula del calor, Q = m × cp × ΔT (calor = masa × calor específico × subida de temperatura), que despejaste en «Las cuentas de planta a fondo» y que vuelve en «Intercambio de calor y frío a fondo». Despejando la temperatura:

> ΔTad = Q / (m × cp)

- **Q**: calor que libera la reacción, en kJ.
- **m**: masa **total** que hay en el reactor, en kg (disolvente, reactivos y todo lo demás).
- **cp**: calor específico de esa masa, en kJ/(kg·K).

La misma cerilla calienta poco un cubo de agua y mucho una cucharada: cuanta más masa, menos sube.

**Ejemplo A: las aguas ácidas.** 114 000 kJ en unos 2160 kg (el agua más 160 kg de sosa al 50 %). Como es casi todo agua, tomamos cp = 4,18. ΔTad = 114 000 / (2160 × 4,18) = **12,6 °C**.

**Ejemplo B: la etapa del intermedio AX-22**, que volverás a ver en «El reactor a fondo». Se añaden 600 kg de reactivo B sobre 2610 kg de tolueno, con 150 kJ por kilo de B y cp = 1,7. Calor: 600 × 150 = 90 000 kJ. Masa total: 3210 kg. ΔTad = 90 000 / (3210 × 1,7) = **16,5 °C**.

**Ejemplo C: el reactivo C en el mismo reactor R-204.** 750 000 kJ sobre 2610 kg de tolueno más 500 kg de C: 3110 kg con cp = 1,7. ΔTad = 750 000 / (3110 × 1,7) = **141,9 °C**.

¿Qué significa cada resultado?

| ΔTad | Qué quiere decir |
|---|---|
| Unos 10 o 20 °C | Aunque falle todo, la masa se calienta un poco. Molesto, pero difícilmente peligroso por sí solo |
| Más de 100 °C | Si el calor se queda dentro, la masa puede pasar del punto de ebullición del disolvente o llegar a descomponerse. Toda la seguridad depende de cómo se controle |

Ojo: según la NTP 527, una reacción débilmente exotérmica también es peligrosa si su calentamiento arranca otra fuertemente exotérmica, como una descomposición.

### La temperatura máxima con reactivo acumulado
En una adición dosificada el reactivo entra poco a poco y, si todo va bien, reacciona según entra. Lo que ha entrado y **aún no ha reaccionado** es la **acumulación** (*accumulation*) que ya salió en «Calor de reacción y reacciones descontroladas».

Si en el peor momento falla el frío, solo puede liberar calor el reactivo que está dentro sin reaccionar. Por eso:

> Temperatura máxima = temperatura de proceso + ΔTad × fracción acumulada

En la literatura de seguridad de procesos esta cifra se llama **temperatura máxima de la reacción de síntesis** (*maximum temperature of the synthesis reaction*, MTSR). La sigla y su método de cálculo detallado no se han leído en una fuente gratuita en esta lección; la idea sí sale de la NTP 527, que pide conocer la temperatura de partida, el calor que liberarían las reacciones posibles y la acumulación de reactivos, y estudiar el caso adiabático.

**Ejemplo D.** Reactivo C dosificado a 70 °C. Un análisis de laboratorio dice que, en el peor momento, hay un 30 % acumulado (valor de ejemplo). Temperatura máxima = 70 + 141,9 × 0,30 = **112,6 °C**.

**Ejemplo E.** Si alguien cargara los 500 kg de C de golpe y no reaccionara hasta calentarse, la acumulación sería del 100 %: 70 + 141,9 = **211,9 °C**.

Esa cifra se compara con dos temperaturas:

1. **El punto de ebullición del disolvente.** El tolueno hierve a 111 °C a presión atmosférica, según la ficha de seguridad de la app. En el ejemplo D la masa llegaría justo a hervir: el reflujo puede frenar la subida, como verás más abajo.
2. **La temperatura a la que empieza una descomposición.** Supón que el laboratorio la ha medido en 180 °C para esta mezcla (valor de ejemplo). En el ejemplo D quedan unos 67 °C de margen. En el ejemplo E se pasaría de largo: descomposición, gases y sobrepresión.

Por eso la NTP 527 recomienda, entre otras medidas, usar un disolvente que hierva por debajo de la temperatura a la que la mezcla puede descomponerse, y un medio de calefacción cuya temperatura máxima también quede por debajo.

### Potencia de una adición dosificada
Hasta ahora contábamos **calor** (kJ). La camisa se mide en **potencia**: kJ por segundo, es decir, kW. Si el reactivo reacciona según entra:

> Potencia (kW) = (kmol por hora / 3600) × ΔH en kJ/kmol

**Ejemplo F.** Se dosifica reactivo C a 1,2 kmol/h. Por segundo entran 1,2 / 3600 kmol, y cada kmol da 150 000 kJ: 1,2 / 3600 × 150 000 = **50 kW**.

La camisa de R-204 tiene los mismos datos que en «El reactor a fondo»: U = 300 W/(m²·K) y A = 12 m². Con la masa a 70 °C y el fluido de la camisa a 45 °C, ΔT = 25 °C:

> Q camisa = 300 × 12 × 25 = 90 000 W = **90 kW**

Si la reacción da menos de 90 kW, la temperatura se sostiene; si da más, la masa se calienta.

**Ejemplo G: el caudal máximo de dosificación.** Se despeja el caudal: 90 × 3600 / 150 000 = **2,16 kmol/h**, que con masa molar 100 son 216 kg/h. Es el límite sin margen. La NTP 527 indica que la capacidad refrigerante de un circuito debería estar sobredimensionada en un 50 %, y la NTP 528 pide reservas para cubrir el 150 % de las necesidades. Si la reacción solo puede usar 90 / 1,5 = 60 kW, el caudal baja a 60 × 3600 / 150 000 = **1,44 kmol/h**, es decir, 144 kg/h. Los 500 kg de C necesitan entonces al menos 500 / 144 = 3,47 h, unos **208 minutos**. Por eso la hoja dice «adicionar en no menos de 3,5 h».

### Por qué hay temperatura máxima y también mínima
La NTP 527 pide identificar la velocidad máxima de adición que aguanta la refrigeración y no superarla.

La mínima tiene otra lógica. Las cuentas suponen que el reactivo reacciona según entra; si la masa está demasiado fría, la reacción va lenta, la bomba sigue metiendo reactivo y **la acumulación crece**: el ejemplo D se va acercando al E sin que se note nada. La NTP 528 lo resume: la temperatura de inicio debe ser lo bastante baja para que no se descompongan los reactivos, pero lo bastante alta para que la reacción vaya rápida y no se acumulen.

Hay una pista en pantalla. Mientras la reacción da calor, el control enfría la camisa y la diferencia masa-camisa es grande. Si con la bomba en marcha esa diferencia se cierra, la camisa ya no tiene calor que quitar: o la reacción terminó, o **el reactivo entra y no reacciona**. Se para la adición y se consulta.

### Calorimetría: medir antes de fabricar
Estos números no se adivinan. Según la NTP 527, como es difícil predecir un sistema y un pequeño error de cálculo puede ser muy grave, se hacen pruebas experimentales, la mayoría con **calorímetros** (*calorimeters*), aparatos que miden el calor que libera una muestra. La nota cita varias técnicas:

| Técnica | En inglés | Para qué, en palabras sencillas |
|---|---|---|
| Análisis térmico diferencial | *Differential thermal analysis, DTA* | Calentar una muestra pequeña y ver a qué temperatura da calor |
| Calorimetría diferencial de barrido | *Differential scanning calorimetry, DSC* | Lo mismo, midiendo cuánto calor da: típica para buscar descomposiciones |
| Calorimetría de reacción adiabática | *Adiabatic reaction calorimetry, ARC* | Dejar que la muestra se caliente sola, sin pérdidas, como el peor caso |
| Calorímetro de reacción | *Reaction calorimeter* | Un reactor pequeño de laboratorio que reproduce la adición y mide el calor según entra el reactivo |

La NTP 527 añade que en un calorímetro de reacción se simula con facilidad el efecto de una mala transferencia de calor, que muchas veces hacen falta pruebas piloto antes de la escala industrial, y que el objetivo principal es encontrar el límite de temperatura por debajo del cual se trabaja de forma segura. La NTP 302, por su parte, avisa de que la medida no es tan fácil como parece y de que extrapolar los resultados a las condiciones reales puede ser complejo. Lo hace el laboratorio de desarrollo; a ti te llega convertido en límites de la hoja.

### Descomposiciones y reacciones secundarias
A temperaturas más altas pueden empezar otras reacciones: una **descomposición** (*decomposition*), en la que una sustancia se rompe sola en otras, o una **reacción secundaria** (*side reaction*). Suelen dar mucho calor y, a menudo, gases.

La NTP 529 analizó accidentes de la base de datos europea de accidentes graves (*Major Accident Reporting System*, MARS). De los ocurridos en planta de proceso, el 19,8 % se debieron a la pérdida de control de una reacción. Y entre las causas específicas de esos casos, la descomposición aparece en el 25 % y la reacción inesperada en el 27,1 %.

Una masa caliente puede llegar a ellas, aunque la reacción principal haya terminado, si se queda sin agitar o sin frío. La NTP 529 describe el accidente de Seveso, en Italia: al terminar un lote se paró el agitador sin esperar a que la masa se enfriara, no se refrigeró el reactor y se desconectó el registro de temperatura cuando marcaba 158 °C. Seis horas y media después se produjo una reacción exotérmica cuya sobrepresión rompió el disco de ruptura y liberó dioxina al exterior. La NTP 527 recoge la misma idea como **tiempo de seguridad**: para cada etapa hay que saber cuánto tiempo puede estar la masa a temperatura elevada sin que algo inestable se descomponga.

### El reflujo como freno
Una masa que hierve no sube de temperatura mientras haya disolvente: el calor se gasta en evaporarlo. Es el **calor latente** (*latent heat*) de «La materia a fondo: estados, cambios de estado y mezclas»; sus números están en «Vapor y calderas a fondo». La NTP 528 lo describe así: el calor de la reacción se elimina con la entalpía de vaporización del disolvente y la temperatura se mantiene aproximadamente constante, siempre que haya capacidad de condensación y disolvente suficientes.

> Potencia retirada (kW) = (kg evaporados por hora / 3600) × calor latente (kJ/kg)

**Ejemplo H.** Con un calor latente de 400 kJ/kg (valor de ejemplo; el real está en la ficha de cada disolvente), si hierven 900 kg/h: 900 / 3600 × 400 = **100 kW**. Para absorber 150 kW tendrían que hervir 150 × 3600 / 400 = **1350 kg/h**, y el condensador tendría que convertir todo ese vapor otra vez en líquido.

La trampa: si el condensador no da abasto, el vapor sale por el venteo, el reactor pierde disolvente y sube la presión. La NTP 528 cita como fallos el bloqueo de la entrada de vapor, el condensador inundado y el condensador congelado, y la NTP 527 incluye la pérdida de disolvente entre los factores de una explosión térmica. Lo que se vigila en el condensador lo tienes en «Intercambio de calor y frío a fondo».

### Gases que se forman
Muchas reacciones sueltan gas. Algunos ejemplos de libro de texto:

- **Dióxido de carbono** (CO₂) al neutralizar un ácido con bicarbonato o carbonato.
- **Hidrógeno** (H₂) cuando ciertos metales reaccionan con ácidos.
- **Cloruro de hidrógeno** (HCl gas) en algunas cloraciones.

Un gas ocupa muchísimo más que un líquido: con P·V = n·R·T («El mol a fondo»), 2 kmol de CO₂ a 25 °C y presión atmosférica ocupan unos **48,9 m³**. La NTP 527 pide determinar la velocidad de desprendimiento de gases en condiciones normales y anormales, para asegurar que el venteo es suficiente: más gas significa más presión, y sin capacidad de alivio puede acabar en explosión. Las capas de protección están en «Alarmas, enclavamientos y sistemas de seguridad a fondo».

### Qué vigila y qué hace el operador
Durante una adición exotérmica:

1. **Velocidad de adición**: la de la hoja, nunca más rápida «para acabar antes».
2. **Temperatura de masa**: dentro del intervalo, ni por encima ni por debajo.
3. **Temperatura de camisa**: cuánto está trabajando el frío.
4. **Diferencia entre masa y camisa**: si se cierra con la bomba en marcha, posible acumulación; si la camisa ya está al máximo de frío y la masa sigue subiendo, la reacción da más de lo que se puede quitar.
5. **Agitación**: rpm y consumo del motor. Sin agitación no hay mezcla ni paso de calor.

Ante una subida que no se corrige: **parar la adición**, **frío al máximo**, **mantener la agitación** y **avisar**. La secuencia completa ante un fallo del frío está en «Intercambio de calor y frío a fondo». Todo se anota con su hora.

En planta manda siempre el procedimiento vigente (SOP) y la hoja de producción de cada lote.
`,
  plant: `
Turno de noche. En el reactor vitrificado R-204 tienes 2610 kg de tolueno a 70 °C para una etapa del intermedio ficticio KT-31. La hoja dice: *«Adicionar 500 kg de reactivo C en no menos de 3,5 h con la masa entre 68 y 74 °C. Diferencia masa-camisa: anotar cada 15 min. Si la masa supera 74 °C o baja de 68 °C, detener la adición y avisar.»*

Arrancas la bomba dosificadora P-205 al caudal de la hoja. A los pocos minutos la camisa baja de 60 a 48 °C mientras la masa se queda en 71 °C: el control está quitando el calor que da la reacción. Diferencia: 23 °C. Lo anotas.

A la hora y media ves algo raro. La masa sigue en 70 °C, pero la camisa ha subido a 62 °C: la diferencia se ha cerrado a 8 °C con la bomba en marcha. La reacción ya no está dando el calor de antes. Compruebas el agitador: 90 rpm, consumo normal. Paras la P-205, como dice la hoja ante cualquier duda, y avisas a la jefa de turno.

El laboratorio analiza una muestra: hay reactivo C sin reaccionar. El lote de catalizador cargado al principio venía con menos actividad de la prevista. Con la adición parada y la masa a 70 °C, el reactivo acumulado termina de reaccionar poco a poco: la camisa vuelve a bajar y la diferencia se abre otra vez. Solo cuando la muestra confirma que no queda acumulación, la jefa de turno autoriza a reanudar más despacio. Tú anotas cada hora, cada temperatura y cada decisión, y se abre una desviación.
`,
  batchRecord: `
En la hoja de producción (*batch record*) de una adición exotérmica verás límites que salen directamente de las cuentas de esta lección:

- **Tiempo mínimo o caudal máximo de adición**: hora de inicio y de fin, caudal o cantidad añadida por intervalo y total añadido (teórico y real).
- **Intervalo de temperatura de masa** durante la adición: temperatura mínima y máxima alcanzadas, con hora.
- **Temperatura de camisa** y **diferencia masa-camisa** a los intervalos que marque la hoja.
- **Agitación**: velocidad (rpm) comprobada antes de empezar y durante la adición.
- **Paradas de la adición**: hora, motivo, temperatura en ese momento y quién autorizó reanudar.
- **Muestras de control** (por ejemplo, reactivo sin reaccionar) con hora y resultado, si la hoja las pide.
- **Reflujo**: hora de inicio, temperatura de ebullición observada y temperaturas del agua del condensador.
- **Presión del reactor** y estado del venteo, sobre todo si la reacción desprende gas.
- **Tiempo de mantenimiento** a temperatura alta, que no debe superar el que indique la hoja.
- Cualquier valor fuera de límite: se anota en el momento, se avisa y el responsable valora la desviación.
`,
  terms: [
    { es: "Enlace químico", en: "Chemical bond", def: "Unión entre átomos. Romperlo cuesta energía y formarlo la libera." },
    { es: "Entalpía de reacción", en: "Reaction enthalpy (ΔH)", def: "Calor que da o toma una reacción a presión constante, en kJ por mol. Negativa si libera calor." },
    { es: "Energía de activación", en: "Activation energy", def: "Empujón de energía que necesita una reacción para arrancar, como el repecho antes de una bajada." },
    { es: "Calor de neutralización", en: "Heat of neutralization", def: "Calor que se libera al reaccionar un ácido con una base. Unos 57 kJ por mol de agua para ácido y base fuertes." },
    { es: "Calor de mezcla", en: "Heat of mixing", def: "Calor que se desprende o absorbe al mezclar dos sustancias, como al diluir un ácido concentrado." },
    { es: "Adiabático", en: "Adiabatic", def: "Sin intercambio de calor con el exterior: todo el calor se queda en la masa." },
    { es: "Aumento adiabático de temperatura", en: "Adiabatic temperature rise (ΔTad)", def: "Subida de la masa si todo el calor de reacción se quedara dentro: Q / (m × cp)." },
    { es: "Temperatura máxima de la reacción de síntesis", en: "Maximum temperature of the synthesis reaction (MTSR)", def: "Temperatura que alcanzaría la masa si reaccionara de golpe el reactivo acumulado sin ninguna refrigeración." },
    { es: "Acumulación", en: "Accumulation", def: "Fracción del reactivo añadido que aún no ha reaccionado y puede liberar su calor de golpe." },
    { es: "Adición dosificada", en: "Dosed addition / semi-batch feed", def: "Carga de un reactivo poco a poco, a un caudal limitado, para que el calor salga al ritmo que lo quita la camisa." },
    { es: "Calorímetro de reacción", en: "Reaction calorimeter", def: "Reactor pequeño de laboratorio que reproduce la reacción y mide el calor que libera." },
    { es: "Calorimetría diferencial de barrido", en: "Differential scanning calorimetry (DSC)", def: "Ensayo que calienta una muestra pequeña y mide a qué temperatura y cuánto calor libera. Se usa para buscar descomposiciones." },
    { es: "Descomposición", en: "Decomposition", def: "Reacción en la que una sustancia se rompe sola en otras, a menudo con mucho calor y gases." },
    { es: "Tiempo de seguridad", en: "Safe holding time", def: "Tiempo máximo que una masa puede estar a una temperatura elevada sin riesgo de que algo inestable se descomponga." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Cargas 300 kg de un reactivo de masa molar 120 kg/kmol que reacciona con ΔH = −80 kJ/mol. ¿Cuánto calor libera si reacciona todo?",
      answer: 200000,
      tolerance: 0.01,
      unit: "kJ",
      explain: "Moles: 300 / 120 = 2,5 kmol. Como 80 kJ/mol son 80000 kJ/kmol, Q = 2,5 × 80000 = 200000 kJ.",
    },
    {
      kind: "choice",
      q: "La hoja indica para una reacción ΔH = −95 kJ/mol. ¿Qué significa el signo menos?",
      options: [
        "Que la reacción toma calor y la masa se enfría al reaccionar",
        "Que la reacción suelta calor y la masa se calienta al reaccionar",
        "Que la reacción solo funciona por debajo de 0 °C en el reactor",
        "Que el valor es aproximado y hay que pedir el dato al laboratorio",
      ],
      answer: 1,
      explain: "El signo se mira desde la reacción: si pierde energía, ΔH es negativo y esa energía la gana la masa en forma de calor. Es una reacción exotérmica.",
    },
    {
      kind: "number",
      q: "Neutralizas 3 kmol de ácido clorhídrico con sosa. Si la neutralización libera 57 kJ por mol, ¿cuánto calor se desprende?",
      answer: 171000,
      tolerance: 0.01,
      unit: "kJ",
      explain: "57 kJ/mol son 57000 kJ/kmol. Q = 3 × 57000 = 171000 kJ.",
    },
    {
      kind: "number",
      q: "Una reacción libera 400 000 kJ en un reactor con 4000 kg de masa total y cp = 2,0 kJ/(kg·K). ¿Cuál es el aumento adiabático de temperatura?",
      answer: 50,
      tolerance: 0.01,
      unit: "°C",
      explain: "ΔTad = Q / (m × cp) = 400000 / (4000 × 2,0) = 50 °C.",
    },
    {
      kind: "number",
      q: "Se dosifica a 60 °C una reacción con ΔTad = 120 °C. En el peor momento hay un 25 % del reactivo acumulado. ¿Qué temperatura máxima alcanzaría la masa si fallara todo el frío?",
      answer: 90,
      tolerance: 0.01,
      unit: "°C",
      explain: "Temperatura máxima = 60 + 120 × 0,25 = 60 + 30 = 90 °C.",
    },
    {
      kind: "number",
      q: "Dosificas un reactivo a 0,9 kmol/h y reacciona según entra con ΔH = −200 kJ/mol. ¿Qué potencia térmica da la reacción?",
      answer: 50,
      tolerance: 0.01,
      unit: "kW",
      explain: "Por segundo entran 0,9 / 3600 kmol, y cada kmol da 200000 kJ: 0,9 / 3600 × 200000 = 50 kJ/s, es decir, 50 kW.",
    },
    {
      kind: "number",
      q: "La camisa de un reactor tiene U = 300 W/(m²·K), A = 12 m² y trabaja 20 °C por debajo de la masa. La reacción dosificada tiene ΔH = −120 kJ/mol. Sin margen, ¿cuál es el caudal máximo de dosificación?",
      answer: 2.16,
      tolerance: 0.02,
      unit: "kmol/h",
      explain: "Camisa: 300 × 12 × 20 = 72000 W = 72 kW. Caudal = 72 × 3600 / 120000 = 2,16 kmol/h.",
    },
    {
      kind: "number",
      q: "Una masa está a reflujo y hierven 720 kg/h de disolvente con un calor latente de 400 kJ/kg. ¿Cuánta potencia se lleva el reflujo, si el condensador da abasto?",
      answer: 80,
      tolerance: 0.01,
      unit: "kW",
      explain: "Potencia = 720 / 3600 × 400 = 80 kJ/s, es decir, 80 kW.",
    },
    {
      kind: "choice",
      q: "Durante una adición, con la bomba en marcha y la masa estable a 70 °C, la diferencia entre masa y camisa pasa de 22 a 7 °C. ¿Qué haces?",
      options: [
        "Subo el caudal de la bomba, porque la camisa ya enfría de sobra",
        "Sigo igual, porque la masa está dentro de su intervalo de la hoja",
        "Bajo la consigna de la camisa para recuperar la diferencia de antes",
        "Paro la adición y aviso: el reactivo puede estar acumulándose",
      ],
      answer: 3,
      explain: "Si la camisa ya no tiene calor que quitar con el reactivo entrando, puede que no esté reaccionando y se acumule. Se para la adición, se avisa y se comprueba con una muestra antes de seguir.",
    },
    {
      kind: "choice",
      q: "El laboratorio informa de que una mezcla empieza a descomponerse a 160 °C y de que la temperatura máxima con reactivo acumulado sería de 175 °C. ¿Qué significa?",
      options: [
        "Que un fallo del frío podría llevar la masa a una descomposición",
        "Que la reacción es endotérmica y no puede descontrolarse",
        "Que basta con subir la agitación para trabajar con seguridad",
        "Que el disolvente hervirá siempre antes de llegar a 160 °C",
      ],
      answer: 0,
      explain: "Si el reactivo acumulado reacciona sin frío, la masa podría pasar de 160 °C y arrancar la descomposición, con más calor y gases. Ese proceso necesita menos acumulación, otro disolvente u otras medidas que decide desarrollo.",
    },
  ],
};
