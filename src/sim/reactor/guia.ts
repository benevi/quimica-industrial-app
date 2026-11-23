// Guía de averías del reactor R-204: qué se ve, pistas, qué hacer y por qué.
// Es material didáctico sobre un equipo ficticio: en planta manda el procedimiento vigente (SOP)
// y, ante cualquier duda, se para en lugar seguro y se avisa.
import type { Fault } from "./model";

export type Guia = {
  titulo: string;
  /** Lo que tenías que ver en pantalla o en campo. */
  sintomas: string[];
  /** Dos pistas, de menos a más. */
  pistas: [string, string];
  /** La acción clave que comprueba la revisión. */
  clave: string;
  pasos: string[];
  porque: string;
  enPlanta: string;
  lecciones: { slug: string; titulo: string }[];
};

const L = {
  reactor: { slug: "reactor-a-fondo", titulo: "El reactor a fondo" },
  inert: { slug: "inertizacion-a-fondo", titulo: "Inertización a fondo" },
  calor: { slug: "calor-y-frio-a-fondo", titulo: "Intercambio de calor y frío a fondo" },
  termo: { slug: "termoquimica-a-fondo", titulo: "Calor de reacción a fondo" },
  cinetica: { slug: "cinetica-a-fondo", titulo: "Velocidad de reacción a fondo" },
  instr: { slug: "instrumentos-a-fondo", titulo: "Instrumentos de medida a fondo" },
  lazos: { slug: "lazos-a-fondo", titulo: "Lazos de control a fondo" },
  alarmas: { slug: "alarmas-y-seguridad-a-fondo", titulo: "Alarmas, enclavamientos y sistemas de seguridad a fondo" },
  gases: { slug: "gases-de-planta-a-fondo", titulo: "Nitrógeno, aire comprimido y vacío a fondo" },
  mant: { slug: "mantenimiento-a-fondo", titulo: "Mantenimiento a fondo" },
  desv: { slug: "desviaciones-y-capa-a-fondo", titulo: "Desviaciones y CAPA a fondo" },
  atex: { slug: "atex-a-fondo", titulo: "Atmósferas explosivas a fondo" },
};

export const GUIA: Record<Fault, Guia> = {
  vacio: {
    titulo: "Fuga de aire con vacío",
    sintomas: [
      "La bomba de vacío no baja de unos 450 mbar abs aunque la dejes tiempo.",
      "El oxígeno apenas baja entre ciclos y el interlock I-05 no deja cargar la solución.",
    ],
    pistas: [
      "Compara la presión mínima de cada ciclo con lo que pide la hoja.",
      "Con 450 mbar abs cada ciclo solo divide el oxígeno entre algo más de dos: haz la cuenta de «Inertización a fondo». ¿Qué falla si la bomba está bien?",
    ],
    clave: "avisar y no cargar disolvente con la atmósfera sin inertizar",
    pasos: [
      "No sigas contando ciclos que no llegan al vacío de la hoja: no son ciclos válidos.",
      "Avisa al jefe de turno y a mantenimiento: hay una junta, una brida o una válvula que deja entrar aire.",
      "No cargues disolvente hasta que la inertización cumpla (el interlock I-05 te lo impide, pero tú no debes intentarlo).",
      "Cuando mantenimiento lo arregle, repite la inertización completa y anota en incidencias lo que pasó.",
    ],
    porque: "Lo que entra por una fuga con vacío es aire, con su 21 % de oxígeno. Cargar tolueno con oxígeno por encima del límite deja una atmósfera inflamable dentro del reactor.",
    enPlanta: "Se busca la fuga con la prueba de mantenimiento de vacío que diga el procedimiento (cerrar todo y ver cuánto sube la presión en un tiempo). Las juntas de la boca de hombre y de las tubuladuras son sospechosas habituales.",
    lecciones: [L.inert, L.gases, L.atex],
  },
  camisaSucia: {
    titulo: "Camisa sucia",
    sintomas: [
      "Para calentar, la camisa tiene que ir bastante más caliente que la masa de lo que es costumbre, y el calentamiento tarda algo más.",
      "En la adición la camisa enfría peor: la masa tiende a subir hacia los 75 °C con el caudal de siempre.",
      "En el panel de la camisa, el U·A es más bajo de lo normal.",
    ],
    pistas: [
      "Compara la diferencia camisa-masa al calentar con la de otros lotes y mira el U·A del panel de la camisa.",
      "Con agitación a 90 rpm y media carga, el U·A debería rondar los 2,5 kW/K. Si es mucho menor, la pared transmite peor: piensa qué le pasa a la adición.",
    ],
    clave: "avisar para que mantenimiento programe la limpieza de la camisa",
    pasos: [
      "No subas la camisa por encima de lo que permite la hoja para compensar: el límite de 50 °C del vitrificado sigue mandando.",
      "Avisa: la camisa necesita limpieza (incrustaciones del fluido térmico o del agua). Mantenimiento la programa cuando el reactor quede libre.",
      "En la adición, baja el caudal si la masa se acerca a 75 °C: con menos capacidad de enfriar, la hoja te deja ir más despacio, nunca más deprisa.",
      "Anota en incidencias el U·A, el tiempo de calentamiento y cualquier ajuste del caudal.",
    ],
    porque: "Una capa de suciedad en la pared es una resistencia más al paso del calor: baja U y, con él, la potencia que pasa con la misma diferencia de temperatura. También enfría peor, y eso importa en la adición.",
    enPlanta: "Los tiempos de calentar y enfriar de cada lote son un buen indicador del estado de la camisa. Si se alargan lote a lote, algo se está ensuciando.",
    lecciones: [L.calor, L.reactor, L.mant],
  },
  sensor: {
    titulo: "Sonda de temperatura congelada",
    sintomas: [
      "TI-204A deja de moverse mientras calientas, pero TI-204B sigue subiendo.",
      "Salta la alarma de discrepancia entre sondas (TDA) y el control sigue calentando porque cree que la masa está fría.",
    ],
    pistas: [
      "Compara las dos sondas de masa del sinóptico.",
      "El control usa la sonda que elijas en TIC-204. ¿Cuál te dice la verdad?",
    ],
    clave: "pasar el control a la sonda TT-204B y avisar",
    pasos: [
      "Cambia la sonda del control a TT-204B en TIC-204: así el control vuelve a ver la temperatura real.",
      "Comprueba que la masa no se ha pasado de la temperatura de la hoja mientras el control estaba ciego.",
      "Avisa a instrumentación para que revise TT-204A. No empieces la adición si dudas de la temperatura.",
      "Anota en incidencias la hora y las lecturas de las dos sondas.",
    ],
    porque: "Un control solo es tan bueno como su medida. Si la sonda se congela por debajo de la consigna, el control sigue calentando sin límite. Por eso los reactores llevan sondas redundantes y alarma de discrepancia.",
    enPlanta: "Una lectura plana durante un cambio de temperatura es sospechosa: los procesos reales siempre tienen algo de ruido. Fíjate en las tendencias, no solo en el número.",
    lecciones: [L.instr, L.lazos],
  },
  disco: {
    titulo: "Fuga en el disco de ruptura",
    sintomas: ["El manómetro PI-204D, entre el disco y la válvula de seguridad, deja de marcar cero.", "Alarma PDH."],
    pistas: [
      "Mira las lecturas del sinóptico que no suelen cambiar nunca.",
      "Entre el disco y la válvula de seguridad no debería haber presión en marcha normal.",
    ],
    clave: "avisar: el disco ha perdido estanqueidad",
    pasos: [
      "Avisa al jefe de turno y a mantenimiento. Es una protección de seguridad: no se decide seguir por tu cuenta.",
      "No toques ni cierres nada en la línea de alivio.",
      "Sigue lo que decida el jefe de turno (en planta suele implicar terminar en condiciones seguras y cambiar el disco con el reactor parado).",
      "Anota la lectura y la hora en incidencias.",
    ],
    porque: "Un disco que fuga ya no protege como debe y deja pasar producto a la válvula de seguridad, que puede corroerse o atascarse. Además puede romper a menos presión de la prevista.",
    enPlanta: "Por eso la hoja pide mirar ese manómetro antes de empezar. Una lectura que sube despacio es el aviso típico.",
    lecciones: [L.reactor, L.alarmas],
  },
  tcuAtascada: {
    titulo: "Válvula de la camisa atascada",
    sintomas: [
      "La salida del controlador de camisa cambia, pero la camisa no responde y sigue calentando.",
      "La masa se pasa de 70 °C antes de empezar la adición y salta la alarma de desviación de camisa (JDV).",
    ],
    pistas: [
      "Compara la consigna de camisa con la temperatura real de camisa en su panel.",
      "Si el controlador pide frío y la camisa sigue subiendo, el problema no es el controlador.",
    ],
    clave: "avisar y no empezar la adición con la masa fuera de temperatura",
    pasos: [
      "No empieces ni sigas la adición mientras la temperatura no esté controlada.",
      "Avisa a mantenimiento: el actuador o la válvula de la unidad de la camisa no se mueve.",
      "Vigila la masa. Si sube hacia temperaturas peligrosas, sigue la parada de emergencia del procedimiento.",
      "Cuando lo reparen, deja que el control la lleve a consigna antes de adicionar y anota lo ocurrido.",
    ],
    porque: "Un lazo de control necesita que su elemento final (la válvula) obedezca. Si se atasca, cambiar la consigna o el modo no sirve: hay que actuar sobre el equipo.",
    enPlanta: "Mira siempre si la variable responde a la salida del controlador. Una salida al 100 % sin respuesta es una válvula, una bomba o un servicio que falla.",
    lecciones: [L.lazos, L.instr],
  },
  caudalimetro: {
    titulo: "Caudalímetro de B descalibrado",
    sintomas: [
      "FI-205 marca la consigna, pero la báscula del depósito (WI-205) baja más deprisa de lo que debería.",
      "La masa se calienta más de lo normal durante la adición aunque el caudal indicado sea el de la hoja.",
    ],
    pistas: [
      "Cruza dos medidas independientes de lo mismo: lo que ha entrado (FQ-205) y lo que ha salido del depósito (WI-205).",
      "Si la báscula baja un 25 % más que el totalizador, ¿cuánto B está entrando de verdad?",
    ],
    clave: "avisar y bajar el caudal hasta que entre de verdad lo que pide la hoja",
    pasos: [
      "Compara cada poco tiempo el totalizador con lo que baja la báscula del depósito.",
      "Si no cuadran, baja la consigna o para la adición y avisa a instrumentación.",
      "Para seguir, usa la báscula como referencia y respeta los 60 min mínimos y el intervalo de temperatura.",
      "Anota en incidencias las dos lecturas: hay que saber cuánto B entró y a qué velocidad.",
    ],
    porque: "Un caudalímetro descalibrado hace que adiciones más deprisa de lo que crees. Más caudal es más calor por minuto, y la camisa solo retira unos 30 kW: la masa se te va hacia arriba.",
    enPlanta: "Cruzar medidas (totalizador contra báscula, nivel contra volumen cargado) es una costumbre que salva lotes. Un solo instrumento no basta para fiarse.",
    lecciones: [L.instr, L.termo],
  },
  agua: {
    titulo: "Sin agua de refrigeración en la camisa",
    sintomas: [
      "Alarma CWL: sin caudal de agua de torre en la unidad de la camisa.",
      "La camisa deja de enfriar y la masa sube durante la adición hacia la alarma de 75 °C.",
    ],
    pistas: [
      "En una reacción que desprende calor, ¿qué pasa si el reactivo sigue entrando y la camisa no enfría?",
      "La unidad de la camisa tiene otro medio de frío.",
    ],
    clave: "parar la adición o pasar el frío a glicol, y avisar",
    pasos: [
      "Para la adición: sin adición no hay nuevo calor de reacción.",
      "Si el procedimiento lo permite, pasa el frío de la camisa a glicol.",
      "Avisa al jefe de turno y a mantenimiento.",
      "Reanuda la adición solo con el frío disponible y la masa dentro de 68 a 75 °C. Anota la parada y su duración.",
    ],
    porque: "En una reacción semicontinua, la adición es tu control del calor. Si pierdes la refrigeración, cortar la adición es lo que limita el calor que puede aparecer. Lo que ya está acumulado sin reaccionar seguirá calentando un rato.",
    enPlanta: "La alarma de falta de agua llega antes que la de temperatura: es la que te da tiempo. Reacciona a la causa, no esperes al síntoma.",
    lecciones: [L.termo, L.reactor, L.alarmas],
  },
  agitador: {
    titulo: "Disparo del agitador",
    sintomas: ["Alarmas AGT y SAL: el motor M-204 se ha parado.", "El interlock I-01 corta la adición y la camisa deja de transmitir bien el calor."],
    pistas: [
      "Sin agitación, ¿se mezcla el B que estaba entrando? ¿Pasa igual el calor por la pared?",
      "Antes de rearmar un motor que ha disparado, alguien tiene que saber por qué disparó.",
    ],
    clave: "dejar la adición parada, no rearmar sin permiso y avisar",
    pasos: [
      "Comprueba que la adición está parada (I-01 la corta) y pon la dosificadora en parado.",
      "No rearmes el motor por tu cuenta: avisa al jefe de turno y a mantenimiento para que revisen la causa.",
      "Vigila la temperatura: sin agitar, el reactivo que no ha reaccionado puede quedarse en una zona y reaccionar de golpe al volver a agitar.",
      "Cuando te autoricen, arranca el agitador, espera a que la temperatura se estabilice y solo entonces reanuda la adición.",
    ],
    porque: "Sin agitación no hay mezcla: el reactivo no se reparte y la pared casi no intercambia calor. Rearmar sin saber la causa puede quemar el motor o volver a disparar.",
    enPlanta: "La regla es la misma en todos los reactores: no se adiciona sin agitación. Por eso existe el interlock.",
    lecciones: [L.reactor, L.alarmas, L.cinetica],
  },
  valvulaB: {
    titulo: "La válvula de B no cierra",
    sintomas: ["Con la dosificadora parada, FI-205 sigue marcando un caudal pequeño.", "Alarma FPS y la báscula del depósito sigue bajando."],
    pistas: [
      "Mira el caudal de B después de parar la dosificadora.",
      "Hay una válvula manual de aislamiento en la línea de B.",
    ],
    clave: "cerrar la válvula manual de aislamiento XV-205",
    pasos: [
      "Cierra la válvula manual de aislamiento de la línea de B (XV-205).",
      "Comprueba que FI-205 vuelve a cero y que la báscula del depósito deja de bajar.",
      "Avisa a mantenimiento para que revisen la válvula automática.",
      "Anota en incidencias cuánto B entró de más (FQ-205 por encima de 600 kg).",
    ],
    porque: "Una válvula que pasa sigue metiendo reactivo cuando crees que la adición ha terminado: cambia la cantidad del lote y añade calor cuando no lo esperas.",
    enPlanta: "Después de parar una adición, mira siempre que el caudal y el totalizador se quedan quietos. Las válvulas manuales de aislamiento están para esto.",
    lecciones: [L.reactor, L.instr],
  },
  condensador: {
    titulo: "Sin agua en el condensador",
    sintomas: ["Alarma CCL. El vapor no se condensa y sale por el venteo (alarma EMI).", "La presión y la temperatura de reflujo suben y el nivel baja."],
    pistas: [
      "Durante el reflujo, todo el calor que metes se va en hervir. ¿A dónde va ese vapor si el condensador no enfría?",
      "Lo primero es dejar de producir vapor.",
    ],
    clave: "quitar calor (bajar la consigna o la camisa) y avisar",
    pasos: [
      "Quita el calor: baja la consigna de masa por debajo de la ebullición o pon la camisa en manual sin calor.",
      "Avisa al jefe de turno y a mantenimiento: falta agua en el condensador.",
      "Vigila la presión. No cierres el venteo para «ahorrar» disolvente: es la salida que evita que la presión suba.",
      "Cuando vuelva el agua, retoma el reflujo y cuenta el tiempo que falta. Anota en incidencias el disolvente perdido.",
    ],
    porque: "El reflujo funciona porque el condensador devuelve como líquido todo lo que hierve. Sin frío en el condensador, el vapor busca salida: emisión de disolvente, pérdida de volumen y, si no puede salir, subida de presión.",
    enPlanta: "Antes de calentar a reflujo se comprueba el agua del condensador. Durante el reflujo, una subida de presión es la primera señal de que no condensa.",
    lecciones: [L.reactor, L.calor],
  },
  corte: {
    titulo: "Corte de corriente",
    sintomas: [
      "Alarma ENE: todos los motores y bombas se paran, también la unidad de la camisa.",
      "A los tres minutos vuelve la corriente pero nada arranca solo: agitador, camisa y bombas siguen parados.",
    ],
    pistas: [
      "Cuando vuelve la corriente, los equipos quedan parados por seguridad. ¿Qué tiene que arrancar primero?",
      "Mira los modos de la camisa y del control de masa después del corte.",
    ],
    clave: "volver a arrancar el agitador y el control de temperatura en orden",
    pasos: [
      "Durante el corte, no fuerces nada. Avisa al jefe de turno.",
      "Al volver la corriente, arranca primero el agitador (con nivel suficiente) y comprueba las rpm.",
      "Pon de nuevo el control de masa en automático y la camisa en cascada con la consigna de la hoja.",
      "Revisa el resto de servicios (vacío, nitrógeno, condensador) y anota la hora del corte y de la vuelta, y cuánto tiempo de reflujo se perdió.",
    ],
    porque: "Tras un corte, los equipos no arrancan solos para que nadie se encuentre una máquina en marcha sin esperarlo. El operador recupera el proceso paso a paso, empezando por la agitación.",
    enPlanta: "Cada planta tiene su secuencia de rearranque tras un fallo eléctrico. Conócela antes de necesitarla.",
    lecciones: [L.alarmas, L.lazos],
  },
  barrera: {
    titulo: "Pérdida de líquido de barrera",
    sintomas: ["Alarma BAL: el nivel del depósito del líquido de barrera (LI-204S) baja de forma continua."],
    pistas: [
      "Mira el depósito del cierre del agitador en el sinóptico.",
      "Si el nivel baja, el cierre está perdiendo líquido hacia dentro o hacia fuera.",
    ],
    clave: "rellenar el depósito y avisar",
    pasos: [
      "Rellena el depósito con la bomba manual hasta su nivel normal.",
      "Avisa a mantenimiento: un cierre que pierde líquido de barrera está fallando.",
      "Anota en incidencias la hora y cuánto bajó: ayuda a saber si fuga hacia dentro (contamina el producto) o hacia fuera.",
    ],
    porque: "El líquido de barrera a presión impide que el producto salga por el eje. Si se acaba, el cierre trabaja en seco y puede fugar disolvente al exterior.",
    enPlanta: "El nivel y la presión del líquido de barrera están en las comprobaciones de arranque de la lección del reactor por esto.",
    lecciones: [L.reactor, L.mant],
  },
  nitrogeno: {
    titulo: "Falta de nitrógeno",
    sintomas: [
      "Alarma N2L: presión baja en la red de nitrógeno.",
      "Al enfriar, la presión del reactor baja de la atmosférica, entra aire por el rompevacío y sube el oxígeno (alarma OAH).",
    ],
    pistas: [
      "Al enfriar, el gas de dentro se contrae y el disolvente deja de evaporarse. ¿Qué rellena ese hueco si no hay nitrógeno?",
      "Mira el oxígeno.",
    ],
    clave: "avisar enseguida: el reactor deja de estar inerte",
    pasos: [
      "Avisa al jefe de turno: sin nitrógeno, el reactor no puede mantener la atmósfera inerte.",
      "Si es posible, ralentiza el enfriamiento para que no aspire aire mientras se repone el nitrógeno.",
      "No abras el reactor ni hagas operaciones que generen chispas o cargas electrostáticas.",
      "Cuando vuelva el nitrógeno, vuelve a inertizar según el procedimiento y anota el oxígeno máximo.",
    ],
    porque: "Un reactor con vapores de tolueno solo es seguro si el oxígeno está por debajo del límite. Al enfriar se crea vacío; sin nitrógeno, lo que entra es aire.",
    enPlanta: "La presión de la red de nitrógeno está en las comprobaciones previas por esto: se necesita durante todo el lote, también al final.",
    lecciones: [L.inert, L.gases, L.atex],
  },
};
