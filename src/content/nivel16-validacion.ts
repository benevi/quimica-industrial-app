import type { Lesson } from "./types";

export const validacionAFondo: Lesson = {
  slug: "validacion-a-fondo",
  level: 16,
  order: 9,
  title: "Cualificación y validación a fondo: cómo se demuestra que un proceso funciona",
  titleEn: "Qualification and validation in depth: how a process is shown to work",
  minutes: 34,
  summary:
    "Por qué no basta con analizar el producto al final, qué se comprueba en cada etapa de la cualificación de un reactor, cuántos lotes pide de verdad la norma, cómo se fija el límite de una limpieza a partir de la toxicología y qué te toca hacer a ti en un lote de validación.",
  body: `
En la lección anterior viste las siglas. Aquí vas a entender qué se comprueba en cada etapa, qué dice exactamente la norma y qué cambia para ti el día que tu lote es un lote de validación.

Las citas salen de ICH Q7 (las GMP de los principios activos, capítulo 12) y del Anexo 15 de las GMP europeas, que está escrito para medicamentos y que, según su apartado «Principio», en principios activos puede usarse como orientación complementaria y opcional.

### La idea de fondo: analizar al final no basta
Piensa en una panadería que hace mil barras al día. El panadero no puede abrirlas todas: abre dos o tres. Lo que le da tranquilidad sobre las demás es saber que el horno calienta igual en todas las bandejas, que la receta es siempre la misma y que el tiempo de cocción se respeta.

Con un principio activo pasa igual. El laboratorio analiza unos gramos de un lote de cientos de kilos: esa muestra no demuestra por sí sola que todo el lote está bien, ni que el de mañana lo estará. La guía de la FDA lo dice en su apartado II.A: la calidad no se puede asegurar de forma adecuada solo con inspecciones y análisis del producto en proceso y terminado.

Por eso existe la **validación** (*validation*). El glosario de ICH Q7 la define como un programa documentado que da un alto grado de seguridad de que un proceso, método o sistema dará de forma consistente un resultado que cumple criterios de aceptación fijados de antemano.

### Antes de empezar: política, protocolo e informe
La empresa tiene que tener escrito cómo valida: qué, con qué enfoque y quién diseña, revisa y aprueba cada fase (ICH Q7, 12.10).

No se valida todo: la validación se extiende a las operaciones críticas para la calidad y la pureza del principio activo (ICH Q7, 12.12). Para saber cuáles son, se define el producto por sus atributos críticos, se identifican los parámetros del proceso que pueden afectarles y se fija el rango de cada parámetro crítico (12.11).

| Concepto | Qué es (glosario del Anexo 15) | Ejemplo ficticio |
|---|---|---|
| **Atributo crítico de calidad** (*critical quality attribute*, CQA) | Propiedad del producto que debe estar dentro de un límite para asegurar la calidad deseada | Pureza, impurezas, disolvente residual |
| **Parámetro crítico de proceso** (*critical process parameter*, CPP) | Parámetro del proceso cuya variación afecta a un atributo crítico y que por eso hay que vigilar o controlar | Temperatura de reacción, tiempo de secado |

Cada validación lleva dos documentos:

- **Protocolo de validación** (*validation protocol*): el plan escrito, aprobado por la unidad de calidad (ICH Q7, 12.20). Indica los pasos críticos, los **criterios de aceptación** (*acceptance criteria*), el tipo de validación y el número de lotes (12.21).
- **Informe de validación** (*validation report*): resume los resultados, comenta las desviaciones observadas y saca conclusiones (12.22). Cualquier variación respecto al protocolo se documenta y se justifica (12.23).

Es como un examen: los criterios de corrección se escriben antes de que el alumno entregue. Si se fijaran después de ver los resultados, cualquier resultado podría darse por bueno.

### Cualificar el equipo, etapa por etapa
Antes de validar un proceso hay que cualificar los equipos críticos y los sistemas auxiliares (ICH Q7, 12.30). **Cualificar** (*qualification*) es probar y documentar que el equipo está bien instalado, funciona correctamente y lleva de verdad a los resultados esperados. El glosario de ICH Q7 añade un matiz: la cualificación es parte de la validación, pero por sí sola no valida el proceso.

Sigamos a un reactor ficticio, el R-310. La columna central resume el apartado 3 del Anexo 15.

| Etapa | Qué se comprueba | En el R-310 |
|---|---|---|
| Requisitos de usuario (*user requirements specification*, URS) | Lo que la planta necesita del equipo; es la referencia durante toda su vida (3.2) | Volumen, material en contacto con el producto, rangos de temperatura y vacío |
| Cualificación del diseño (*design qualification*, DQ) | Que el diseño propuesto es adecuado para el uso previsto y cumple la URS (3.3) | Se revisan los planos del fabricante contra la URS |
| Cualificación de la instalación (*installation qualification*, IQ) | Instalación según planos y especificaciones, instrumentos calibrados, materiales de construcción verificados, manuales del proveedor recogidos (3.9) | Se recorre tubería a tubería contra el plano; certificados de materiales; calibración de sondas |
| Cualificación de la operación (*operational qualification*, OQ) | Que funciona como se diseñó, con pruebas en los límites superior e inferior o en el peor caso (3.11) | Agitación a velocidad mínima y máxima, calentar y enfriar entre extremos, alarmas |
| Cualificación del funcionamiento (*performance qualification*, PQ) | Que rinde de forma eficaz y reproducible con el método de proceso aprobado, con material de producción o un sustituto cualificado (3.14) | Cargas reales o simuladas con el tamaño de lote más desfavorable |

Un detalle que te afecta: terminar bien la OQ es lo que permite cerrar los procedimientos de operación y de limpieza y la formación de los operadores (3.12).

### Validar el proceso: tres enfoques
La **validación de proceso** (*process validation*) es la prueba documentada de que el proceso, operado dentro de los parámetros establecidos, produce de forma eficaz y reproducible un intermedio o principio activo que cumple sus especificaciones (ICH Q7, 12.40).

| Enfoque | Qué dice ICH Q7 |
|---|---|
| **Prospectiva** (*prospective*): antes de vender | Es el preferido. Debe terminarse antes de la distribución comercial del medicamento fabricado con ese principio activo (12.42) |
| **Concurrente** (*concurrent*): a la vez que se produce | Se admite cuando no hay datos de lotes repetidos porque se han hecho pocos lotes, se fabrican con poca frecuencia o el proceso validado se ha modificado. Los lotes pueden liberarse antes de terminarla, con vigilancia y análisis exhaustivos (12.43) |
| **Retrospectiva** (*retrospective*): con lotes ya fabricados | Excepción para procesos bien establecidos y sin cambios significativos, si se cumplen cuatro condiciones (12.44) |

Un aviso. ICH Q7, del año 2000, admite la retrospectiva como excepción. El Anexo 15, revisado en 2015, dice que ya no es un enfoque aceptable (apartados «General» y 5.3), y reserva la concurrente para circunstancias excepcionales, justificadas y aprobadas (5.16).

### ¿Cuántos lotes? Lo que dice el texto
Oirás que «la validación son tres lotes». Esto es lo que dice ICH Q7 12.50:

- El número de lotes depende de la complejidad del proceso o de la magnitud del cambio.
- Para la prospectiva y la concurrente, tres lotes consecutivos correctos se usan **como guía**. Puede hacer falta más, por ejemplo en procesos complejos o muy largos.
- Para la retrospectiva, en general se examinan de diez a treinta lotes consecutivos; menos si se justifica.

El Anexo 15 va en la misma línea: cada fabricante determina y justifica el número de lotes (5.19), y un mínimo de tres consecutivos se considera en general aceptable (5.20). Tres no es un número mágico: es un punto de partida.

### El ciclo de vida: la validación no se acaba
La guía de la FDA de 2011 reparte la validación en tres etapas (apartado II.B):

1. **Diseño del proceso** (*process design*): se define el proceso comercial con lo aprendido en el desarrollo y el escalado.
2. **Cualificación del proceso** (*process qualification*): se evalúa si ese diseño es capaz de fabricar de forma reproducible. Incluye cualificar equipos y fabricar los lotes de cualificación (*process performance qualification*, PPQ).
3. **Verificación continuada del proceso** (*continued process verification*): durante la producción de rutina se sigue comprobando que el proceso continúa en estado de control.

Esta guía no da un número fijo de lotes. Sí dice que los lotes de PPQ tendrán, en la mayoría de los casos, más muestreo y más análisis que la producción normal (IV.C.2).

El Anexo 15 llama a la tercera etapa *ongoing process verification*. Pide vigilar la calidad del producto y evaluar las tendencias durante toda su vida (5.29), con un protocolo aprobado y un informe (5.31). Los datos que anotas en cada lote alimentan esa vigilancia.

### Revisión periódica y cambios
Los sistemas y procesos deben evaluarse periódicamente para verificar que siguen operando de forma válida. Si no ha habido cambios significativos y una revisión de calidad confirma que se sigue produciendo material dentro de especificaciones, normalmente no hace falta revalidar (ICH Q7, 12.60). Esa revisión se hace normalmente cada año (2.50). Los equipos también se evalúan con una frecuencia adecuada (Anexo 15, 4.1).

¿Y si hay un cambio? Pasa por el sistema de control de cambios (ICH Q7, 13.10): se evalúa su impacto, se decide qué pruebas y qué validación adicional hacen falta (13.13) y se evalúan los primeros lotes fabricados con el cambio (13.15).

### Validación de limpieza: cómo se demuestra
**Qué se valida.** Los procedimientos de limpieza normalmente deben validarse, sobre todo donde el arrastre de materiales supone más riesgo para la calidad (ICH Q7, 12.70). Si varios productos comparten equipo y se limpian igual, se puede elegir uno representativo según su solubilidad, su dificultad de limpieza y el cálculo de límites de residuo basado en potencia, toxicidad y estabilidad (12.71). Es el enfoque del peor caso.

**Cómo se muestrea** (ICH Q7, 12.73):

| Método | Cómo es | Límite |
|---|---|---|
| Hisopo o frotis (*swab*) | Se frota una superficie de área conocida y se analiza el hisopo | Poco práctico donde no se llega: interior de mangueras, tuberías de trasvase, reactores con bocas pequeñas |
| Aclarado (*rinse*) | Se analiza una muestra del líquido de aclarado | Llega a todas partes, pero solo recoge lo que ese líquido arrastra |

**Criterios de aceptación.** Los límites deben ser prácticos, alcanzables, verificables y basarse en el residuo más dañino (ICH Q7, 12.74). El Anexo 15 añade dos reglas (10.2): la comprobación visual es parte importante de los criterios, pero en general no vale como único criterio; y repetir limpieza y análisis hasta que por fin salga bien no es aceptable. Una limpieza validada tiene que funcionar a la primera.

### De dónde sale el límite: la exposición diaria permitida
El Anexo 15 dice que los límites de arrastre deben basarse en una evaluación toxicológica (10.6) y remite a la guía de la EMA sobre **límites de exposición basados en la salud** (*health-based exposure limits*, HBEL).

La idea, desde cero. Si un resto del producto A acaba dentro del producto B, quien toma B recibe algo que no le aporta nada y puede hacerle daño. La pregunta es: ¿cuánto A puede recibir una persona cada día sin que le pase nada?

Esa cantidad es la **exposición diaria permitida** (*permitted daily exposure*, PDE): una dosis, propia de cada sustancia, que es improbable que cause un efecto adverso aunque una persona se exponga a ella todos los días de su vida (guía de la EMA, 4.1).

La calcula un toxicólogo. Parte de la dosis más alta a la que no se observó el efecto adverso crítico en los estudios (*no-observed-adverse-effect level*, NOAEL) y la divide entre factores de ajuste que cubren incertidumbres, como pasar de animales a personas. Es como el límite de carga de un ascensor: no se fija donde se rompe el cable, sino muy por debajo.

**Del PDE al arrastre máximo.** Un documento de la OMS (Serie de Informes Técnicos n.º 1033, anexo 2, apéndice) da la cuenta para pasar del PDE a la cantidad total que puede pasar al lote siguiente, el **arrastre máximo seguro** (*maximum safe carryover*, MSC):

> MSC (g) = PDE del producto anterior (µg/día) × lote del producto siguiente (kg) / dosis diaria máxima del siguiente (mg/día)

La lógica: el lote siguiente contiene un número de dosis diarias, y cada una puede llevar como mucho un PDE del producto anterior.

Ejemplo con datos inventados. Producto anterior A: PDE de 50 µg/día. Producto siguiente B: lote de 120 kg y dosis diaria máxima de 400 mg.

- MSC = 50 × 120 / 400 = 15 g.
- Comprobación: el lote de B tiene 120 000 000 mg / 400 mg = 300 000 dosis diarias; 300 000 × 50 µg = 15 g.

Ese residuo se reparte por la superficie que comparten los dos productos. Dividiendo sale el **residuo superficial máximo seguro** (*maximum safe surface residue*, MSSR). Con 30 m² compartidos:

- MSSR = 15 g × 1000 / 30 m² = 500 mg/m².

Dos avisos. El cálculo real incluye además el área de la muestra y la recuperación del muestreo (anexo de la OMS, 5.8). Y la EMA aclara en sus preguntas y respuestas (pregunta 6) que el límite de limpieza no se pone justo en el valor calculado: el de tu protocolo será más bajo.

### Validación de métodos analíticos
Una validación vale lo que valga el método con el que se midió. Los métodos analíticos deben validarse, salvo que estén en la farmacopea correspondiente o en otra referencia reconocida; aun así, hay que verificar que son adecuados en las condiciones reales de uso (ICH Q7, 12.80). Toda modificación de un método validado se registra con su motivo y con datos que demuestren que sigue siendo igual de exacto y fiable (12.83).

### Qué te toca a ti en un lote de validación
Un lote de validación es un lote normal que se observa más. La guía de la FDA pide fabricarlo en condiciones normales y con el personal que hará esos pasos de forma rutinaria (IV.C.4).

- **Sigue la hoja al pie de la letra.** Se está demostrando que el proceso escrito funciona. Si lo haces de otra manera, se demuestra otra cosa.
- **No mejores nada.** Un cambio significativo sobre el protocolo durante la ejecución se documenta como desviación y debe justificarse (Anexo 15, 2.7). Si ves algo mejorable, dilo: irá por control de cambios.
- **Toma todas las muestras adicionales**, en el punto y el momento que diga el protocolo. Una muestra que falta es un dato que no se recupera.
- **Anota el valor real y en el momento.** La hoja recoge los resultados reales de los parámetros críticos y todo muestreo realizado (ICH Q7, 6.52).
- **Avisa de cualquier anomalía.** Toda desviación se documenta y se explica (ICH Q7, 8.15).

¿Por qué una desviación pesa más aquí? Porque el lote no solo responde por sí mismo: es una de las pocas pruebas de que el proceso funciona. El informe comenta cada desviación (ICH Q7, 12.22) y un resultado que no cumple los criterios se investiga a fondo (Anexo 15, 2.8). Eso no es motivo para esconder nada: una desviación oculta invalida la prueba entera.

### Cómo se reconoce en planta
ICH Q7 pide que el equipo esté identificado en cuanto a su contenido y su estado de limpieza (5.26) y que el estado de calibración de los equipos críticos se conozca y pueda verificarse (5.33).

Lo que sigue no lo fija ninguna de las normas citadas; es práctica habitual y cada planta lo hace a su manera:

- Etiquetas de estado de cualificación en el equipo, del tipo «cualificado» o «en cualificación, no usar en producción».
- Una fecha de recualificación o de revisión periódica en la etiqueta o en el listado de equipos.
- Una marca en la portada de la hoja de producción que indica que el lote es de validación, con el código del protocolo.

Si un equipo no lleva la etiqueta que esperas, o la fecha está vencida, no lo uses y pregunta.

Los equipos, productos y cifras de los ejemplos son ficticios. En planta manda siempre el procedimiento vigente (SOP).
`,
  plant: `
En la planta ficticia se ha instalado un reactor nuevo, el R-310, para fabricar el intermedio ficticio RZ-22. La cualificación terminó el mes pasado y el equipo luce su etiqueta de «cualificado». Ahora toca validar el proceso: el protocolo PV-031 prevé tres lotes consecutivos.

Hoy empieza el segundo. Íker, el operador, recibe la hoja de producción con una marca en la portada: «Lote de validación, protocolo PV-031». Nuria, de Garantía de Calidad, repasa con el turno el plan de muestreo: además de los controles de siempre, hay que sacar muestra de la reacción a las 2, 4 y 6 horas, y tres muestras de la torta del filtro en puntos distintos.

A media reacción, Íker ve que la temperatura se queda en 61 °C. El rango de la hoja es de 60 a 65 °C. Un compañero veterano le comenta que «a 68 va más rápido y sale igual». Íker no toca la consigna: 68 °C está fuera del rango que se quiere demostrar. Sigue dentro de rango, anota 61 °C con su hora y se lo comenta a Nuria, que lo apunta como propuesta para estudiar por control de cambios.

A las 4 horas, la muestra se retrasa doce minutos porque la válvula de toma estaba obstruida. Íker no escribe «4 h»: anota la hora real, avisa al responsable de turno y se abre una desviación. Nuria le explica que en el informe de validación se comentará ese retraso y que, con la hora real anotada, el dato sigue sirviendo.

Al acabar, antes de pasar al producto siguiente, el equipo de limpieza ejecuta la limpieza validada y el laboratorio toma frotis en el agitador y en la válvula de fondo.
`,
  batchRecord: `
La hoja de producción (*batch record*) de un lote de validación es la misma hoja de siempre, con más cosas alrededor. Lo que verás y anotarás:

- **Identificación del lote como lote de validación**: una marca en la portada o un anexo, con el código del protocolo (p. ej. PV-031) y el número de lote dentro de la serie (p. ej. 2 de 3).
- **Equipos**: código de cada equipo usado (p. ej. R-310) y comprobación de que su cualificación y la calibración de sus instrumentos están vigentes.
- **Parámetros críticos de proceso**: suelen venir marcados en la hoja. Anotas el valor real que marca el instrumento, con su unidad y su hora, no «cumple» ni el valor de consigna.
- **Muestreos adicionales**: para cada muestra extra, el punto de toma, la hora real, la cantidad, el código de la muestra y tu firma. Si una muestra se toma tarde, se anota la hora real y se avisa.
- **Controles en proceso**: resultado, límite y decisión. Si el control pide prolongar un paso, se anota cuánto y por qué.
- **Verificación**: en los pasos críticos, firma de una segunda persona.
- **Desviaciones**: cualquier diferencia con la hoja o con el protocolo, por pequeña que sea, con su hora, lo que se hizo y a quién se avisó. Llevará un número de desviación que el informe de validación citará.
- **Rendimiento**: la cantidad real obtenida, para compararla con la esperada.
- **Limpieza posterior**: en el registro de limpieza, los pasos hechos, la inspección visual y las muestras de frotis o de aclarado tomadas, con sus códigos.

Nunca se rellena un dato después «de memoria» ni se repite una muestra sin que quede escrito: en un lote de validación cada dato es una prueba.
`,
  terms: [
    { es: "Validación", en: "Validation", def: "Programa documentado que da un alto grado de seguridad de que un proceso, método o sistema dará siempre un resultado que cumple criterios fijados de antemano." },
    { es: "Cualificación", en: "Qualification", def: "Probar y documentar que un equipo o sistema auxiliar está bien instalado, funciona correctamente y lleva a los resultados esperados. Es parte de la validación." },
    { es: "Protocolo de validación", en: "Validation protocol", def: "Plan escrito y aprobado antes de empezar que dice cómo se hará la validación y define los criterios de aceptación." },
    { es: "Criterios de aceptación", en: "Acceptance criteria", def: "Límites numéricos, rangos u otras medidas adecuadas para aceptar los resultados de una prueba. Se fijan antes de hacerla." },
    { es: "Atributo crítico de calidad", en: "Critical quality attribute (CQA)", def: "Propiedad del producto que debe estar dentro de un límite o rango aprobado para asegurar la calidad deseada." },
    { es: "Parámetro crítico de proceso", en: "Critical process parameter (CPP)", def: "Parámetro del proceso cuya variación afecta a un atributo crítico de calidad y que por eso debe vigilarse o controlarse." },
    { es: "Especificación de requisitos de usuario", en: "User requirements specification (URS)", def: "Documento con lo que la planta necesita de un equipo o sistema. Sirve de referencia durante toda su cualificación." },
    { es: "Validación prospectiva", en: "Prospective validation", def: "Validación hecha antes de la producción de rutina del producto destinado a la venta. Es el enfoque preferido." },
    { es: "Validación concurrente", en: "Concurrent validation", def: "Validación que se ejecuta a la vez que la producción comercial de los lotes. Se admite solo en casos justificados." },
    { es: "Verificación continuada del proceso", en: "Continued process verification / ongoing process verification", def: "Prueba documentada, durante la fabricación comercial, de que el proceso se mantiene en estado de control." },
    { es: "Exposición diaria permitida", en: "Permitted daily exposure (PDE)", def: "Dosis de una sustancia que es improbable que cause un efecto adverso aunque una persona la reciba todos los días de su vida." },
    { es: "Límite de exposición basado en la salud", en: "Health-based exposure limit (HBEL)", def: "Límite de exposición a un residuo calculado a partir de datos toxicológicos y farmacológicos; el PDE es la forma habitual de expresarlo." },
    { es: "Arrastre máximo seguro", en: "Maximum safe carryover (MSC)", def: "Cantidad máxima de residuo del producto anterior que puede pasar al lote siguiente sin riesgo apreciable para la salud de los pacientes." },
    { es: "Peor caso", en: "Worst case", def: "Condiciones, dentro de los procedimientos, con más probabilidad de hacer fallar el proceso o el producto. Si funciona ahí, funciona en lo demás." },
  ],
  quiz: [
    {
      kind: "choice",
      q: "El laboratorio analiza una muestra de un lote y cumple todo. ¿Por qué eso solo no demuestra que el proceso funciona?",
      options: [
        "Porque los análisis del laboratorio no son fiables casi nunca",
        "Porque la norma prohíbe analizar el producto ya terminado",
        "Porque una muestra no prueba todo el lote ni los lotes futuros",
        "Porque el análisis solo cuenta si lo repite otro laboratorio",
      ],
      answer: 2,
      explain: "Una muestra de unos gramos no puede asegurar por sí sola cientos de kilos ni el lote de mañana. Por eso se demuestra de antemano que equipo y proceso dan siempre lo mismo.",
    },
    {
      kind: "choice",
      q: "¿Cuándo se fijan los criterios de aceptación de una validación?",
      options: [
        "Antes de empezar, en el protocolo aprobado por Calidad",
        "Al terminar, cuando ya se conocen todos los resultados",
        "A mitad de la serie, según vaya saliendo el primer lote",
        "Cuando lo pida un inspector durante una auditoría futura",
      ],
      answer: 0,
      explain: "El protocolo, aprobado antes de empezar, especifica los pasos críticos y los criterios de aceptación (ICH Q7, 12.20 y 12.21). Si se fijaran después, cualquier resultado podría darse por bueno.",
    },
    {
      kind: "choice",
      q: "En el reactor nuevo R-310 se prueba el agitador a su velocidad mínima y máxima, sin producto, y se comprueban las alarmas. ¿Qué etapa es?",
      options: [
        "Cualificación del diseño (DQ), que revisa los planos",
        "Cualificación de la instalación (IQ), que revisa el montaje",
        "Cualificación del funcionamiento (PQ), con el proceso real",
        "Cualificación de la operación (OQ), en todo el rango previsto",
      ],
      answer: 3,
      explain: "La OQ comprueba que el equipo funciona como se diseñó en todo el rango previsto, con pruebas en los límites superior e inferior (Anexo 15, 3.11).",
    },
    {
      kind: "choice",
      q: "¿Qué dice ICH Q7 (12.50) sobre el número de lotes de una validación prospectiva?",
      options: [
        "Que son siempre tres lotes exactos, sin ninguna excepción",
        "Que tres lotes consecutivos correctos son una guía; pueden ser más",
        "Que basta un solo lote si el análisis final sale muy bien",
        "Que hacen falta entre diez y treinta lotes en todos los casos",
      ],
      answer: 1,
      explain: "Tres lotes consecutivos correctos se usan como guía, pero puede haber situaciones que pidan más, como procesos complejos o muy largos. Lo de diez a treinta lotes se refiere a la retrospectiva.",
    },
    {
      kind: "choice",
      q: "Estás en un lote de validación. Un compañero te dice que subiendo la temperatura por encima del rango de la hoja la reacción acaba antes. ¿Qué haces?",
      options: [
        "La subo, porque en validación interesa que el lote salga bien",
        "La subo solo un poco y anoto en la hoja el valor de consigna",
        "Sigo la hoja dentro del rango y propongo la idea a Calidad",
        "Paro el lote hasta que alguien decida si se cambia la hoja",
      ],
      answer: 2,
      explain: "Lo que se demuestra es el proceso escrito. Un cambio durante la ejecución es una desviación (Anexo 15, 2.7); las mejoras se proponen y van por control de cambios.",
    },
    {
      kind: "number",
      q: "El producto anterior tiene un PDE de 100 µg/día. El lote siguiente es de 90 kg y su dosis diaria máxima es de 300 mg. ¿Cuál es el arrastre máximo seguro (MSC)?",
      answer: 30,
      tolerance: 0.01,
      unit: "g",
      explain: "MSC (g) = PDE (µg) × lote (kg) / dosis diaria máxima (mg) = 100 × 90 / 300 = 30 g. El lote tiene 300 000 dosis diarias y cada una puede llevar 100 µg.",
    },
    {
      kind: "number",
      q: "El arrastre máximo seguro es de 30 g y la superficie que comparten los dos productos mide 20 m². ¿Cuál es el residuo superficial máximo seguro (MSSR)?",
      answer: 1500,
      tolerance: 0.01,
      unit: "mg/m²",
      explain: "MSSR = MSC (g) × 1000 / superficie (m²) = 30 × 1000 / 20 = 1500 mg/m². El límite del protocolo suele ser más bajo que este máximo.",
    },
    {
      kind: "choice",
      q: "En una validación de limpieza, el frotis del agitador da un resultado por encima del límite. ¿Qué enfoque es correcto?",
      options: [
        "Registrar el resultado como desviación e investigar la causa",
        "Limpiar y analizar otra vez hasta que salga bien, sin más",
        "Anotar solo el resultado bueno cuando por fin se consiga",
        "Dar el equipo por limpio si a simple vista no se ve nada",
      ],
      answer: 0,
      explain: "Repetir limpieza y análisis hasta que salga bien no es aceptable, y la inspección visual no vale como único criterio (Anexo 15, 10.2). Un resultado fuera de criterio se registra y se investiga.",
    },
    {
      kind: "choice",
      q: "Hay que muestrear el interior de una manguera de trasvase tras la limpieza. ¿Qué método tiene sentido según ICH Q7 (12.73)?",
      options: [
        "Hisopo, porque siempre es obligatorio en cualquier superficie",
        "Ninguno, porque las mangueras no entran en la validación",
        "Solo mirar por un extremo de la manguera con una linterna",
        "Aclarado, porque con el hisopo no se llega a esa superficie",
      ],
      answer: 3,
      explain: "ICH Q7 señala que el hisopo puede ser poco práctico en superficies poco accesibles, como el interior de mangueras y tuberías de trasvase; ahí se recurre al aclarado u otro método adecuado.",
    },
    {
      kind: "choice",
      q: "En un lote de validación, la muestra de las 4 horas se toma con doce minutos de retraso. ¿Qué anotas?",
      options: [
        "La hora prevista, para que el dato encaje con el protocolo",
        "La hora real, y aviso para que se documente la desviación",
        "Nada, y se toma una muestra doble en el siguiente punto",
        "La hora prevista, y lo comento de palabra al acabar el turno",
      ],
      answer: 1,
      explain: "Se anota siempre lo que pasó de verdad. Toda desviación se documenta y se explica (ICH Q7, 8.15) y el informe de validación la comentará (12.22). Poner la hora prevista sería falsear el registro.",
    },
  ],
};
