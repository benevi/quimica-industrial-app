// Supuestos prácticos: un caso de planta ficticio con varias preguntas encadenadas (cálculos y decisiones),
// como la parte práctica de una prueba final. Añadir preguntas siempre al final: el índice forma parte del id del repaso.
import type { Question } from "@/content/types";

export type Case = {
  id: string;
  /** Clave de unidad del temario (prep.ts) */
  unit: string;
  title: string;
  /** Planteamiento del caso; cada elemento es un párrafo */
  context: string[];
  questions: Question[];
};

const c = (q: string, options: string[], answer: number, explain: string): Question => ({ kind: "choice", q, options, answer, explain });
const n = (q: string, answer: number, unit: string, explain: string, tolerance = 0.01): Question => ({ kind: "number", q, answer, unit, tolerance, explain });

export const cases: Case[] = [
  {
    id: "sosa-y-rendimiento",
    unit: "uf0227",
    title: "Preparar sosa diluida y calcular el rendimiento de la reacción",
    context: [
      "En el R-101 hay que preparar 500 kg de disolución de hidróxido de sodio (NaOH) al 10 % en masa a partir de sosa comercial al 50 % y agua purificada.",
      "Después se cargan 220 kg del intermedio A (masa molar 200 g/mol). A reacciona con el NaOH mol a mol (1:1) y da el producto P (masa molar 250 g/mol). En el reactor hay 50 kg de NaOH puro. Al final se obtienen 231 kg de P seco.",
    ],
    questions: [
      n("¿Cuántos kg de sosa al 50 % hay que cargar?", 100, "kg", "NaOH puro necesario: 500 × 0,10 = 50 kg. Sosa al 50 %: 50 / 0,50 = 100 kg."),
      n("¿Cuántos kg de agua hay que añadir?", 400, "kg", "Masa total menos la sosa: 500 − 100 = 400 kg de agua."),
      c("¿Cómo se hace la dilución con seguridad?", ["Echar el agua de golpe sobre la sosa", "Añadir la sosa sobre el agua poco a poco, con agitación y refrigeración, porque la dilución desprende calor", "Calentar antes el agua para que se mezcle mejor", "Da igual el orden"], 1, "La dilución de la sosa concentrada es muy exotérmica: se añade el concentrado sobre el agua, despacio y refrigerando."),
      n("¿Cuántos moles de NaOH hay en los 50 kg de NaOH puro? (NaOH = 40 g/mol)", 1250, "mol", "50.000 g / 40 g/mol = 1.250 mol."),
      c("¿Cuál es el reactivo limitante?", ["El NaOH", "El intermedio A", "Ninguno: están en la proporción exacta", "El agua"], 1, "A: 220.000 g / 200 g/mol = 1.100 mol. NaOH: 1.250 mol. Con relación 1:1, A se acaba antes: es el limitante y el NaOH está en exceso."),
      n("¿Cuál es el rendimiento de la reacción en %?", 84, "%", "Teórico: 1.100 mol de P × 250 g/mol = 275 kg. Rendimiento: 231 / 275 × 100 = 84 %."),
    ],
  },
  {
    id: "secado-de-torta",
    unit: "uf0228",
    title: "Balance de materia en el secado de una torta",
    context: [
      "La centrífuga descarga 400 kg de torta húmeda con un 25 % en masa de disolvente (pérdida por secado, LOD). La torta se seca en un secadero de vacío hasta un LOD máximo del 0,5 %.",
      "Supón que no se pierde sólido en el proceso.",
    ],
    questions: [
      n("¿Cuántos kg de sólido seco contiene la torta?", 300, "kg", "400 × (1 − 0,25) = 300 kg de sólido."),
      n("¿Cuánto pesará el producto al terminar, con LOD 0,5 %? (redondea a una decimal)", 301.5, "kg", "El sólido es el 99,5 % del producto: 300 / 0,995 = 301,5 kg.", 0.002),
      n("¿Cuántos kg de disolvente se evaporan? (una decimal)", 98.5, "kg", "400 − 301,5 = 98,5 kg de disolvente se van al condensador.", 0.01),
      c("¿Por qué se seca a vacío?", ["Para que pese menos", "Porque el disolvente hierve a menor temperatura y el producto, sensible al calor, no se degrada", "Para que entre aire", "Porque es obligatorio por ley"], 1, "Al bajar la presión baja la temperatura de ebullición: se seca rápido con la camisa a temperatura moderada."),
      c("A las 6 h la muestra da LOD 1,2 %. ¿Qué haces?", ["Descargar: ya está casi seco", "Seguir secando según instrucción y volver a muestrear hasta cumplir el límite", "Subir la camisa al máximo para acabar antes", "Anotar 0,5 % para no retrasar el lote"], 1, "El punto final lo marca el control en proceso (IPC). Nunca se supera la temperatura de la instrucción ni se registra un dato que no es real."),
    ],
  },
  {
    id: "trasvase-tolueno",
    unit: "uf0229",
    title: "Trasvasar tolueno con una bomba centrífuga",
    context: [
      "Hay que pasar 2.400 L de tolueno del tanque T-201 al reactor R-101 con la bomba centrífuga P-201. El caudal de trabajo es de 6 m³/h y la densidad del tolueno es 0,87 kg/L.",
      "En el P&ID de la línea aparece un lazo FIC-201 y la válvula de control FV-201.",
    ],
    questions: [
      n("¿Cuántos minutos dura el trasvase?", 24, "min", "2.400 L = 2,4 m³. 2,4 / 6 = 0,4 h = 24 min."),
      n("¿Cuántos kg de tolueno se cargan?", 2088, "kg", "2.400 L × 0,87 kg/L = 2.088 kg."),
      c("¿Cómo se arranca la bomba centrífuga?", ["Con la aspiración cerrada", "Cebada, con la aspiración totalmente abierta y la impulsión casi cerrada, y se abre la impulsión poco a poco", "Con todo cerrado", "En seco, para comprobar que gira"], 1, "Una centrífuga no debe funcionar en seco ni con la aspiración estrangulada. Arrancar con la impulsión casi cerrada reduce la potencia al arranque."),
      c("Durante el trasvase la bomba suena como si llevara grava y el caudal cae. ¿Qué pasa?", ["Nada, es normal", "Cavitación: falta presión en la aspiración (filtro sucio, válvula medio cerrada, nivel bajo)", "Está sobrecargada de caudal", "El motor gira al revés siempre"], 1, "La cavitación forma y colapsa burbujas de vapor: daña el rodete. Se revisa la aspiración."),
      c("¿Qué significa FIC-201?", ["Filtro de impulsión", "Controlador indicador de caudal (flow indicating controller) del lazo 201", "Fallo de instrumento", "Fin de carrera"], 1, "F = caudal (flow), I = indica, C = controla. FV-201 es la válvula de control de ese lazo."),
      c("¿Qué medida es imprescindible al trasvasar un disolvente inflamable?", ["Usar manguera de plástico sin malla", "Puesta a tierra y equipotencialidad de equipos y mangueras, y caudal moderado para no generar electricidad estática", "Hacerlo con la tapa del reactor abierta", "Ninguna"], 1, "El tolueno es poco conductor y se carga al fluir: la chispa de una descarga estática puede inflamar sus vapores."),
    ],
  },
  {
    id: "exotermia-y-refrigeracion",
    unit: "uf0230",
    title: "Controlar una reacción exotérmica en el reactor",
    context: [
      "El R-101 tiene 4.000 L de volumen total y se llena como máximo al 80 %. Contiene 3.000 kg de masa de reacción (calor específico 1,8 kJ/kg·K). La instrucción pide dosificar un reactivo entre 20 y 25 °C.",
      "La camisa se refrigera con 5.000 kg/h de agua (4,18 kJ/kg·K) que entra a 15 °C y sale a 25 °C.",
    ],
    questions: [
      n("¿Cuál es el volumen útil máximo del reactor?", 3200, "L", "4.000 L × 0,80 = 3.200 L."),
      n("Si la masa se calentara 10 °C, ¿cuánto calor habría absorbido? (Q = m·cp·ΔT)", 54000, "kJ", "3.000 kg × 1,8 kJ/kg·K × 10 K = 54.000 kJ."),
      n("¿Cuánto calor retira el agua de la camisa por hora?", 209000, "kJ/h", "5.000 kg/h × 4,18 kJ/kg·K × (25 − 15) K = 209.000 kJ/h (unos 58 kW)."),
      c("Durante la dosificación la temperatura sube a 28 °C. ¿Qué haces primero?", ["Seguir dosificando más rápido para acabar", "Parar la dosificación, asegurar la máxima refrigeración y avisar al responsable; se registra como desviación", "Abrir la boca de hombre", "Apagar el agitador"], 1, "En una reacción exotérmica dosificada, cortar la alimentación corta la fuente de calor. Parar el agitador empeoraría la transmisión de calor."),
      c("Al cargar la centrífuga notas vibración fuerte. ¿Qué indica y qué haces?", ["Normal en el arranque", "Carga desequilibrada: parar con seguridad según procedimiento y redistribuir o descargar", "Hay que subir la velocidad", "Se ignora si el disparo no salta"], 1, "Una carga mal distribuida en la cesta genera desequilibrio y puede dañar la máquina. Los sistemas de vibración disparan la centrífuga."),
    ],
  },
  {
    id: "muestreo-y-ph",
    unit: "uf0231",
    title: "Muestreo de materia prima y medidas in situ",
    context: [
      "Llegan 25 bidones de una materia prima. El procedimiento de muestreo usa la regla √n + 1 para decidir cuántos bidones abrir.",
      "Además tienes que comprobar el pH del agua de lavado de la torta y la densidad de un disolvente recuperado.",
    ],
    questions: [
      n("¿Cuántos bidones se muestrean?", 6, "bidones", "√25 + 1 = 5 + 1 = 6 bidones."),
      c("¿Qué datos lleva la etiqueta de la muestra?", ["Solo el nombre del producto", "Producto, lote, número de bidón o punto de muestreo, fecha y hora y quién la toma", "Nada, se recuerda", "El precio"], 1, "La muestra debe ser trazable al recipiente y al momento en que se tomó."),
      c("¿Cómo se calibra el pHmetro antes de medir?", ["No hace falta", "Con al menos dos tampones de pH conocido (por ejemplo 4 y 7) que abarquen la zona de medida", "Con agua del grifo", "Con la muestra"], 1, "La calibración con tampones certificados se registra junto con la medida."),
      n("El agua de lavado tiene [H⁺] = 0,001 mol/L. ¿Qué pH tiene?", 3, "", "pH = −log(0,001) = 3: es ácida, todavía queda ácido en la torta."),
      n("Pesas 100 mL del disolvente recuperado: 87,0 g. ¿Cuál es su densidad en g/mL?", 0.87, "g/mL", "87,0 g / 100 mL = 0,87 g/mL, coherente con el tolueno."),
      n("Diluyes 10 mL de muestra hasta 250 mL. ¿Qué factor de dilución aplicas al resultado?", 25, "", "250 / 10 = 25: el resultado medido se multiplica por 25."),
    ],
  },
  {
    id: "lazo-de-temperatura",
    unit: "uf0232",
    title: "Leer y actuar sobre un lazo de temperatura",
    context: [
      "La temperatura del R-101 la mide el TT-101, un transmisor de 4–20 mA con rango de 0 a 150 °C. El TIC-101 actúa sobre la válvula de agua de refrigeración TV-101.",
    ],
    questions: [
      n("El transmisor da 12 mA. ¿Qué temperatura indica?", 75, "°C", "(12 − 4) / 16 × 150 = 75 °C."),
      n("¿Qué señal en mA corresponde a 20 °C? (dos decimales)", 6.13, "mA", "4 + 16 × 20 / 150 = 6,13 mA.", 0.005),
      c("El controlador está en modo manual. ¿Qué significa?", ["Que controla solo", "Que el operador fija directamente la salida a la válvula y el controlador no corrige", "Que está averiado", "Que sigue a otro controlador"], 1, "En automático el controlador compara con la consigna; en manual el operador decide la apertura."),
      c("Para una reacción exotérmica, ¿cómo conviene que falle la válvula de agua de refrigeración si se pierde el aire?", ["Cerrada", "Abierta (fallo abierto), para seguir refrigerando", "En la posición en que estaba", "Da igual"], 1, "La posición de seguridad es la que evita el peligro: con fallo abierto, la refrigeración no se pierde."),
      c("La temperatura se estabiliza 2 °C por debajo de la consigna y no la alcanza. ¿Qué acción del controlador corrige ese error permanente (offset)?", ["La proporcional", "La integral", "La derivativa", "Ninguna"], 1, "La acción integral acumula el error en el tiempo y lo elimina. La derivativa responde a la velocidad de cambio."),
    ],
  },
  {
    id: "carga-de-polvo-atex",
    unit: "mf0048",
    title: "Cargar polvo en un reactor con disolvente",
    context: [
      "Hay que cargar 300 kg de un sólido en polvo por la boca de carga del R-101, que ya contiene tolueno. La zona alrededor de la boca está clasificada como zona 1.",
      "La ficha de datos de seguridad del tolueno incluye la indicación H225.",
    ],
    questions: [
      c("¿Qué significa zona 1?", ["Que no hay riesgo", "Que es probable que se forme una atmósfera explosiva de gas o vapor de forma ocasional en funcionamiento normal", "Que hay atmósfera explosiva siempre", "Que es zona de polvo"], 1, "Zona 0: presente de forma continua. Zona 1: ocasional en funcionamiento normal. Zona 2: poco probable y breve. Para polvo son las zonas 20, 21 y 22."),
      c("¿Qué indica H225?", ["Tóxico por inhalación", "Líquido y vapores muy inflamables", "Corrosivo", "Peligroso para el medio ambiente"], 1, "H225: líquido y vapores muy inflamables."),
      c("¿Cuál es el principal riesgo de echar polvo sobre un disolvente inflamable?", ["Que se moje", "La descarga electrostática del polvo y de las bolsas en presencia de vapores inflamables", "El ruido", "Ninguno"], 1, "El polvo al caer se carga. Por eso se inertiza el reactor con nitrógeno, se pone a tierra todo y se usan bolsas o sistemas antiestáticos."),
      c("¿Dónde consultas qué guantes y protección respiratoria usar con el tolueno?", ["En internet", "En la sección 8 de la ficha de datos de seguridad y en el procedimiento de la planta", "En la etiqueta del bidón de agua", "Preguntando a otro operador"], 1, "La sección 8 de la FDS indica los controles de exposición y los equipos de protección individual."),
      c("Se derraman unos 20 L de tolueno en el suelo. ¿Qué haces?", ["Barrer con escoba", "Avisar, eliminar fuentes de ignición, contener con absorbente adecuado, ventilar y gestionar el residuo como peligroso", "Echar agua a presión", "Esperar a que se evapore"], 1, "Primero la seguridad de las personas, luego contener y recoger, y el absorbente usado es residuo peligroso."),
    ],
  },
  {
    id: "entrada-en-reactor",
    unit: "mf0048",
    title: "Entrar en un reactor para una inspección",
    context: [
      "Mantenimiento tiene que entrar en el R-102 vacío para revisar el agitador. El reactor ha contenido un disolvente y está conectado a líneas de nitrógeno y de vapor.",
      "La zona del agitador tiene un nivel de ruido medido de 86 dB(A).",
    ],
    questions: [
      c("¿Qué hace falta antes de entrar?", ["Nada si es rápido", "Permiso de trabajo de espacio confinado, aislamiento de todas las líneas, bloqueo y etiquetado, medición de la atmósfera y un vigilante en el exterior", "Solo abrir la boca de hombre", "Llevar mascarilla de papel"], 1, "Un reactor es un espacio confinado: el nitrógeno puede dejar la atmósfera sin oxígeno sin que se note."),
      c("¿Qué se mide en la atmósfera del reactor antes y durante la entrada?", ["Solo la temperatura", "Oxígeno, gases o vapores inflamables y tóxicos", "La humedad", "Nada"], 1, "Se mide oxígeno, inflamabilidad (% del límite inferior) y tóxicos, y se repite durante el trabajo."),
      c("¿Para qué sirve el bloqueo y etiquetado (LOTO)?", ["Para que no se pierdan herramientas", "Para que nadie pueda arrancar el agitador ni abrir una línea mientras hay gente dentro", "Para el inventario", "Es opcional"], 1, "Cada persona pone su candado: la energía no se restablece hasta que el último lo retira."),
      n("¿A partir de qué nivel de exposición diaria, en dB(A), es obligatorio usar protectores auditivos (RD 286/2006)?", 85, "dB(A)", "Con 85 dB(A) (valor superior de acción) es obligatorio usarlos. A 80 dB(A) deben estar disponibles y el valor límite es 87 dB(A)."),
      c("Los restos de disolvente que salen de la limpieza se gestionan…", ["Por el desagüe", "Como residuo peligroso, separados por tipo y en recipientes etiquetados", "Con la basura normal", "Mezclados con cualquier otro residuo"], 1, "Mezclar residuos incompatibles es peligroso y encarece su gestión. Cada residuo va a su contenedor identificado."),
    ],
  },
  {
    id: "registro-de-lote",
    unit: "gmp4",
    title: "Revisar un registro de lote antes de entregarlo",
    context: [
      "Al revisar tu parte del registro de lote de la etapa de carga ves varias cosas: una pesada corregida con corrector blanco, un dato que apuntaste en un pósit y pasaste después, y una firma de un compañero en la casilla de \"verificado por\" de una operación que no vio.",
      "La balanza mostró 120,46 kg y en la casilla pone 120,5 kg.",
    ],
    questions: [
      c("¿Cómo se debe corregir un error en un registro GMP en papel?", ["Con corrector", "Tachando con una sola línea de forma que el dato original se siga leyendo, escribiendo el correcto, con fecha, firma y motivo", "Arrancando la hoja", "Escribiendo encima"], 1, "Nunca se oculta el dato original: la corrección debe ser trazable."),
      c("Apuntar en un pósit y pasarlo luego incumple sobre todo…", ["Legible", "Contemporáneo y original: el registro debe hacerse en el momento y en el soporte oficial", "Disponible", "Completo"], 1, "Los datos se registran directamente en el documento controlado cuando se hace la operación."),
      c("La firma de verificación de alguien que no vio la operación…", ["Es aceptable si confía en ti", "Es falsa: la firma certifica que esa persona lo comprobó; hay que abrir una desviación", "Se arregla con una nota", "Solo importa en auditorías"], 1, "Atribuible: cada firma significa que esa persona hizo o verificó la operación."),
      c("¿Qué debías anotar de la pesada?", ["120,5 kg", "120,46 kg, tal como lo mostró la balanza", "120 kg", "Lo que pida la receta"], 1, "Exacto: se anota el valor real con la resolución del equipo. Si hay ticket de la balanza, se adjunta."),
      c("¿Qué haces con estos hallazgos?", ["Nada, ya está firmado", "Comunicarlos a tu responsable y a Calidad y documentarlos según el procedimiento de desviaciones", "Rehacer el registro entero en limpio", "Tirar el pósit"], 1, "Rehacer un registro para que quede bonito es falsificación. Se documenta y se evalúa el impacto."),
    ],
  },
  {
    id: "resultado-oos",
    unit: "gmp6",
    title: "Un resultado fuera de especificación (OOS)",
    context: [
      "La valoración (riqueza) de un lote de API da 97,2 %. La especificación es de 98,0 a 102,0 %. El lote está en cuarentena esperando la liberación.",
    ],
    questions: [
      c("¿Qué es lo primero?", ["Repetir el análisis hasta que salga bien", "Investigación de laboratorio (fase I): revisar cálculos, equipo, patrones y preparación de la muestra para ver si hay un error analítico evidente", "Liberar el lote: está cerca", "Mezclarlo con otro lote bueno"], 1, "Repetir análisis hasta obtener un resultado conforme (testing into compliance) está prohibido."),
      c("Mientras dura la investigación, el lote…", ["Se puede expedir", "Sigue en cuarentena y no se libera", "Se destruye", "Se reprocesa sin más"], 1, "Ningún lote se libera con una investigación OOS abierta."),
      c("Si no hay error de laboratorio y el OOS se confirma…", ["Se libera con una nota", "Se amplía la investigación a fabricación, se rechaza el lote salvo que un reproceso aprobado lo permita y se definen CAPA", "Se cambia la especificación", "Se repite el muestreo hasta que cumpla"], 1, "Un OOS confirmado lleva a la investigación de la causa en producción y a acciones correctivas y preventivas."),
      c("¿Mezclar este lote con otro conforme para que la mezcla cumpla?", ["Es buena idea", "No está permitido: no se mezclan lotes fuera de especificación con lotes conformes para que cumplan (ICH Q7, 8.4)", "Solo si el cliente lo acepta", "Solo de noche"], 1, "ICH Q7 prohíbe mezclar lotes OOS con otros para hacer que cumplan la especificación."),
    ],
  },
  {
    id: "desviacion-temperatura",
    unit: "gmp5",
    title: "Una desviación de temperatura durante la reacción",
    context: [
      "La instrucción pide mantener la reacción entre 60 y 65 °C. Por un fallo del vapor, la temperatura estuvo 10 minutos a 57 °C. Se recuperó sola.",
    ],
    questions: [
      c("¿Qué haces?", ["Nada: se recuperó", "Registrarlo en el registro de lote y comunicarlo de inmediato para abrir una desviación", "Anotar 60 °C para no complicarlo", "Alargar la reacción 10 minutos sin decir nada"], 1, "Cualquier salida de los parámetros de la instrucción se registra y se comunica, aunque parezca sin impacto."),
      c("¿Quién evalúa el impacto sobre la calidad del lote?", ["El operador solo", "Producción y Calidad, con la investigación documentada; Calidad aprueba la conclusión", "El cliente", "Nadie"], 1, "La unidad de calidad aprueba la evaluación y decide sobre el lote."),
      c("Si la causa es que la válvula de vapor falla a menudo, la acción preventiva sería…", ["Avisar a los operadores de que tengan cuidado", "Una CAPA: por ejemplo, revisar el mantenimiento o sustituir la válvula, y comprobar luego que es eficaz", "Cambiar el rango de la instrucción", "Ninguna"], 1, "La CAPA ataca la causa raíz y se verifica su eficacia."),
      c("Si producción quiere ampliar el rango a 55–65 °C de forma permanente, necesita…", ["Cambiar la instrucción a mano", "Un control de cambios, con evaluación y, si hace falta, datos de validación", "Una desviación cada lote", "El visto bueno del turno"], 1, "Un cambio planificado de un parámetro validado pasa por control de cambios."),
    ],
  },
  {
    id: "excursion-transporte",
    unit: "gdp",
    title: "Una excursión de temperatura en el transporte",
    context: [
      "Llega un envío de API que debe conservarse entre 15 y 25 °C. El registrador de temperatura (data logger) muestra 3 horas a 31 °C durante el viaje.",
    ],
    questions: [
      c("¿Qué haces con la mercancía al recibirla?", ["Darle entrada a stock libre", "Recibirla en cuarentena, conservar los datos del registrador y avisar a Calidad", "Devolverla sin avisar", "Cambiar la etiqueta"], 1, "La mercancía con una excursión queda bloqueada hasta que Calidad evalúe el impacto."),
      c("¿Con qué se evalúa si el producto sigue siendo apto?", ["Con la opinión del transportista", "Con los datos de estabilidad del producto y la duración e intensidad de la excursión; decide Calidad", "Con su color", "No hace falta evaluar"], 1, "Los estudios de estabilidad indican si esa exposición afecta al producto."),
      c("¿Qué estrategia de salida del almacén se usa habitualmente para no dejar caducar material?", ["LIFO", "FEFO: primero el que caduca antes", "Al azar", "El lote más grande"], 1, "FEFO (First Expired, First Out) es lo que exigen las GDP para productos con caducidad."),
      c("Para evitar que se repita…", ["No se puede hacer nada", "Revisar con el transportista la cualificación de la ruta y del embalaje, y el acuerdo de calidad", "Quitar el registrador", "Cambiar el rango de conservación"], 1, "Las GDP exigen rutas cualificadas, embalaje adecuado y acuerdos con los transportistas."),
    ],
  },
  {
    id: "gestion-de-riesgos",
    unit: "gmp1",
    title: "Priorizar riesgos con un análisis sencillo",
    context: [
      "El equipo de calidad usa una escala 1–5 para gravedad (G), probabilidad (P) y detectabilidad (D), donde 5 es lo peor, y calcula el número de prioridad del riesgo NPR = G × P × D.",
      "Fallo A: confusión de etiquetas en el envasado (G 5, P 2, D 3). Fallo B: retraso en la limpieza de un filtro (G 2, P 4, D 2).",
    ],
    questions: [
      n("¿Cuál es el NPR del fallo A?", 30, "", "5 × 2 × 3 = 30."),
      n("¿Cuál es el NPR del fallo B?", 16, "", "2 × 4 × 2 = 16."),
      c("¿Cuál se trata antes?", ["El B, porque es más probable", "El A: tiene mayor NPR y además gravedad máxima, porque puede llegar al paciente", "Ninguno", "Los dos a la vez sin priorizar"], 1, "Además del NPR, un fallo de gravedad máxima suele requerir acción aunque su probabilidad sea baja."),
      c("¿Qué guía describe la gestión de riesgos de calidad?", ["ICH Q9", "ISO 14001", "ICH Q3C", "GAMP 5"], 0, "ICH Q9 (Quality Risk Management), que en la UE es el Anexo 20 de las GMP."),
    ],
  },
];

export function casesForUnits(units: string[]) {
  return cases.filter((k) => units.includes(k.unit));
}

export function getCase(id: string) {
  return cases.find((k) => k.id === id);
}
