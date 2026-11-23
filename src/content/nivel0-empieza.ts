import type { Lesson } from "./types";

export const empiezaAqui: Lesson = {
  slug: "empieza-aqui",
  level: 0,
  order: 0.5,
  title: "Qué es la química y cómo se estudia en esta aula",
  titleEn: "Start here: what chemistry is and how to study",
  minutes: 12,
  summary:
    "La química estudia la materia y sus cambios. Aquí ves para qué la necesita un operador, cómo está montada el aula, cómo leer los símbolos que vas a encontrar y un plan para estudiar.",
  body: `
Esta es la primera lección. No necesitas saber nada de química para seguirla. Al final sabrás qué es la química, para qué te sirve en planta y cómo sacar partido a esta aula.

### Qué es la química
La **química** (*chemistry*) es la ciencia que estudia la **materia** (*matter*): de qué está hecha cada cosa y **cómo cambia**. Materia es todo lo que tiene masa y ocupa un sitio. El agua de la camisa del reactor es materia. También el nitrógeno de las tuberías y el polvo blanco que sale del secadero.

La materia puede cambiar de dos maneras:

- **Cambio físico** (*physical change*): la sustancia sigue siendo la misma. Cambia de forma, de estado o de sitio. El hielo que se funde sigue siendo agua. Cuando el secadero evapora el disolvente de un sólido, los dos siguen siendo lo que eran: solo se han separado.
- **Cambio químico** (*chemical change*): unas sustancias desaparecen y aparecen otras nuevas, con propiedades distintas. Es una **reacción química** (*chemical reaction*). Un papel que arde no vuelve a ser papel.

Lo verás con calma en «La materia y sus estados», en el nivel 1. De momento basta con esta idea.

### La química en tu turno
Una planta de principios activos fabrica la sustancia que hace el efecto de un medicamento: el **principio activo** (*API*, *Active Pharmaceutical Ingredient*). Casi todo lo que pasa en ella es uno de esos dos cambios. Tres ejemplos de un turno:

1. **Cargar un disolvente** en el reactor. Es un cambio físico: el líquido solo cambia de sitio.
2. **Calentar y reaccionar.** Dentro del reactor dos sustancias se convierten en otra. Es un cambio químico. Muchas reacciones desprenden calor. Por eso el reactor tiene una **camisa** (*jacket*) por la que pasa un fluido para calentar o enfriar.
3. **Filtrar o centrifugar, y después secar.** Se separa el sólido del líquido y se le quita el disolvente que le queda. Son cambios físicos.

### Por qué la necesita un operador
No vas a inventar reacciones. Pero entender un poco de química te ayuda a tres cosas:

- **Entender la hoja de producción** (*batch record*): por qué se carga en ese orden, por qué hay un límite de temperatura, por qué hay que esperar una hora.
- **Prever riesgos**: un disolvente que se evapora y puede arder, una reacción que se calienta sola, un gas que hace subir la presión.
- **Contar bien lo que ves**: si algo no sale como dice la hoja, sabrás explicarlo para que se valore si es una **desviación** (*deviation*).

Una regla vale para toda el aula. **En planta manda siempre el procedimiento vigente**: el **procedimiento normalizado de trabajo** (*SOP*, *Standard Operating Procedure*) y la hoja de producción aprobada. Aquí aprendes a entenderlos, nunca a cambiarlos. Si una lección no coincide con tu SOP, sigues el SOP y lo comentas con tu supervisor.

### Cómo está montada el aula
Tienes dos caminos para estudiar:

- **Temario completo** (*full course*): 22 niveles, del 0 al 21, en 5 bloques. Las bases (niveles 0 a 3). El laboratorio de control (4 a 10). La planta (11 a 15). Calidad y salida del producto (16 y 17). Sistemas informáticos (18 a 21). Se sigue de arriba abajo, porque cada nivel se apoya en los anteriores.
- **Ruta del operador** (*operator track*): un camino corto con lo imprescindible para el turno, en siete etapas. Empieza por la seguridad y sigue con registrar bien, las cuentas de la hoja, tus equipos, el panel de control, los riesgos y la calidad. Usa lecciones del temario. Lo que completes en la ruta cuenta también en el temario.

Cada tema tiene una **lección corta**, de 10 a 20 minutos, y una versión **«a fondo»**, de unos 30 a 40 minutos. Hay además lecciones «a fondo» sin versión corta, que amplían un tema. Y unas pocas lecciones de apoyo, como las de energía o logaritmos, van solas, con una duración intermedia. Si una «a fondo» se te hace cuesta arriba, haz primero las cortas del nivel y vuelve después.

### Las partes de cada lección
Todas las lecciones tienen la misma forma:

- **En 30 segundos**: el resumen y las palabras clave.
- **Idea clave**: la explicación. Las palabras con subrayado de puntos muestran su definición al pasar el ratón.
- **Imágenes y vídeos**: solo en las lecciones que los tienen.
- **Ejemplo de planta**: el tema aplicado a un caso de producción.
- **¿Qué verías en la hoja de producción?**: cómo aparece el tema en el papel o en la pantalla.
- **Vocabulario**: cada término en español y en inglés, con su definición. Mucha documentación y muchos equipos usan el inglés.
- **Test**: unas preguntas para comprobar lo que sabes. Al corregirlo, la lección queda marcada como hecha. Puedes repetirlo cuando quieras.

Algunas lecciones tienen también un apartado **«Practícalo en el simulador»**.

Fuera de las lecciones tienes:

- **Glosario**: todos los términos y las siglas, en español y en inglés.
- **Buscador**: se abre con Ctrl K o con la tecla «/» y encuentra lecciones, términos y secciones.
- **Tarjetas de repaso** (*flashcards*): pregunta y respuesta, en mazos. Cuando completas lecciones aparece un mazo con su vocabulario.
- **Calculadoras**: unidades, temperatura, densidad, moles, diluciones y rendimiento. Son para practicar. En planta valen los cálculos de la hoja, verificados por otra persona.
- **Simuladores**: un lote completo con su hoja, un reactor con panel de control, un filtro-secador y hojas con errores para revisar como lo haría calidad.
- **Simulador ERP y certificaciones**: para más adelante. El primero lleva un lote por un sistema de gestión tipo SAP; el segundo prepara los certificados oficiales con simulacros.

### Cómo leer lo que verás escrito
En química se escribe con símbolos. Estos son los primeros que encontrarás:

- **Subíndice** (*subscript*): el número pequeño y abajo. En H₂O, el 2 dice que hay dos átomos de hidrógeno (H). Junto al oxígeno (O) no hay número: eso significa uno.
- **Coma decimal** (*decimal comma*): en esta aula, 2,5 kg son dos kilos y medio. En inglés, y en muchas pantallas, el decimal es un punto: 2.5 kg. Ojo con «1,000»: en un texto en inglés son mil. Por eso aquí los miles se separan con un espacio: 6 000 kg. Si dudas de un número, pregunta antes de cargar.
- El símbolo «→» se lee «da» o «produce». «A + B → C» quiere decir que A y B reaccionan y dan C.
- El símbolo «⇌» son dos flechas en sentidos contrarios: la reacción ocurre en los dos sentidos a la vez. Lo verás por primera vez en el nivel 1, con los ácidos y las bases, y con calma en el nivel 2.
- El símbolo «≈» se lee «aproximadamente igual a».
- El símbolo «±» se lee «más o menos». 60 ± 5 °C es cualquier valor de 55 a 65 °C.
- Los símbolos «≤» y «≥» se leen «menor o igual que» y «mayor o igual que». «pH ≥ 7,0» admite el 7,0 justo.
- Letras griegas. La **Δ** (delta) es «diferencia»: ΔT es la temperatura final menos la inicial. La **µ** (mu) es «micro», una millonésima: 1 µm es una milésima de milímetro. La **ρ** (rho) es la densidad, que verás en este mismo nivel.

### Un plan para estudiar
- **Sesiones de 30 a 45 minutos.** Una lección corta con su test, o una parte de una «a fondo».
- **Primero la ruta del operador**, si ya estás trabajando en planta. Después, el temario completo desde el nivel 0.
- **El test, al final y sin mirar.** Si fallas una pregunta, vuelve a ese apartado.
- **Cinco minutos de tarjetas antes del turno.** Lo que se repasa poco y a menudo se olvida menos que lo que se estudia de golpe.
- **Practica**: rehaz las cuentas con las calculadoras y usa los simuladores cuando una lección te lo proponga.

La siguiente lección es «Matemáticas útiles para planta»: las cuatro cuentas que harás en casi cada lote.
`,
  plant: `
Primer día en la planta. Llegas al área de producción y ves el reactor R-101, la centrífuga CF-201 y el secadero SD-301. En la hoja de un lote ficticio lees tres pasos seguidos:

1. «Cargar 250,0 kg de tolueno en R-101.» Es un cambio físico: el disolvente pasa del bidón al reactor.
2. «Calentar a 60 ± 5 °C y mantener 2 h.» Aquí ocurre la reacción: es el cambio químico, lo único de los tres pasos que crea una sustancia nueva.
3. «Centrifugar en CF-201 y secar en SD-301.» Cambios físicos: separar el sólido del líquido y quitarle el disolvente.

Todavía no sabes por qué la temperatura es 60 °C y no 80 °C. No pasa nada: haces lo que dice la hoja y anotas cada dato en el momento. Con las lecciones irás entendiendo el porqué de cada paso. Proceso, producto y equipos son ficticios.
`,
  batchRecord: `
Una línea de hoja de producción ficticia, con los símbolos de esta lección:

| Paso | Instrucción | Límite | Valor | Firma |
|---|---|---|---|---|
| 3 | Calentar R-101 y mantener | 60 ± 5 °C | 62,4 °C | operador y fecha |
| 4 | Ajustar el pH del lote | pH ≥ 7,0 | 7,3 | operador y fecha |

- **60 ± 5 °C**: vale cualquier valor de 55 a 65 °C. 62,4 °C está dentro.
- **pH ≥ 7,0**: vale 7,0 o más. 7,3 cumple.
- Los decimales van con coma y con las cifras que pida la hoja.
- Si un valor sale fuera de límite, se anota el valor real, sin retocarlo, y se avisa enseguida, como diga el SOP.
`,
  terms: [
    { es: "Química", en: "Chemistry", def: "Ciencia que estudia la materia, de qué está hecha y cómo cambia." },
    { es: "Materia", en: "Matter", def: "Todo lo que tiene masa y ocupa un sitio: sólidos, líquidos y gases." },
    { es: "Cambio físico", en: "Physical change", def: "Cambio de forma, estado o sitio en el que la sustancia sigue siendo la misma." },
    { es: "Reacción química", en: "Chemical reaction", def: "Cambio químico: unas sustancias desaparecen y aparecen otras nuevas." },
    { es: "Procedimiento normalizado de trabajo", en: "Standard Operating Procedure (SOP)", def: "Documento aprobado que dice cómo se hace una tarea; en planta manda siempre." },
    { es: "Hoja de producción", en: "Batch record", def: "Documento donde se siguen y se registran todos los pasos de un lote." },
    { es: "Subíndice", en: "Subscript", def: "Número pequeño y abajo en una fórmula; en H₂O dice que hay dos átomos de hidrógeno." },
    { es: "Coma decimal", en: "Decimal comma", def: "Signo que separa las unidades de los decimales; en inglés se usa un punto (decimal point)." },
  ],
  quiz: [
    {
      kind: "choice",
      q: "¿Cuál de estas operaciones es un cambio químico?",
      options: [
        "Fundir hielo",
        "Evaporar el disolvente de un sólido en el secadero",
        "Dos sustancias que reaccionan en el reactor y dan una sustancia nueva",
        "Filtrar una suspensión para separar el sólido",
      ],
      answer: 2,
      explain: "Solo en la reacción aparece una sustancia nueva; fundir, evaporar y filtrar son cambios físicos.",
    },
    {
      kind: "choice",
      q: "En la ecuación «A + B → C», ¿cómo se lee el símbolo «→»?",
      options: [
        "«Es igual a», como en una cuenta",
        "«Da» o «produce»: A y B reaccionan y dan C",
        "«Es mayor que»",
        "«Se mezcla con», sin que haya reacción",
      ],
      answer: 1,
      explain: "La flecha se lee «da» o «produce»: a la izquierda lo que reacciona y a la derecha lo que se obtiene.",
    },
    {
      kind: "choice",
      q: "Una lección del aula explica un paso de forma distinta a como lo dice el procedimiento vigente (SOP) de tu planta. ¿Qué haces?",
      options: [
        "Sigues el SOP y lo comentas con tu supervisor",
        "Sigues la lección, porque está más explicada",
        "Haces algo intermedio entre los dos",
        "Eliges lo que sea más rápido",
      ],
      answer: 0,
      explain: "En planta manda siempre el procedimiento vigente; el aula sirve para entenderlo, no para cambiarlo.",
    },
    {
      kind: "choice",
      q: "La hoja dice «Temperatura: 60 ± 5 °C» y el panel marca 63 °C. ¿Qué significa?",
      options: [
        "Está fuera de límite, porque no son 60 °C exactos",
        "Hay que restar 5 °C a la lectura",
        "Solo vale si baja a 60 °C antes de anotarlo",
        "Está dentro de límite: vale cualquier valor de 55 a 65 °C",
      ],
      answer: 3,
      explain: "El signo ± se lee «más o menos»: 60 menos 5 es 55 y 60 más 5 es 65, y 63 °C queda dentro.",
    },
    {
      kind: "choice",
      q: "En un documento en inglés lees «2.5 kg». ¿Cuánto es?",
      options: [
        "Veinticinco kilos",
        "Dos kilos y medio, porque en inglés el decimal se escribe con punto",
        "Dos mil quinientos kilos",
        "Dos gramos y medio",
      ],
      answer: 1,
      explain: "En inglés el decimal es un punto: 2.5 kg en inglés es lo mismo que 2,5 kg en español.",
    },
  ],
};
