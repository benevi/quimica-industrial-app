import type { Lesson } from "./types";

export const volumetriasEspecialesAFondo: Lesson = {
  slug: "volumetrias-especiales-a-fondo",
  level: 6,
  order: 4,
  title: "Valoraciones redox, complexométricas y de precipitación a fondo",
  titleEn: "Redox, complexometric and precipitation titrations in depth",
  minutes: 38,
  summary:
    "Qué tienen en común todas las valoraciones y por qué hay familias distintas: permanganato, yodo y tiosulfato, EDTA y nitrato de plata, con sus ecuaciones, sus cuentas (también las que no son 1:1), sus fuentes de error y la seguridad de sus reactivos.",
  body: `
En «Volumetrías redox y complexometría» viste los nombres: permanganato, yodo, EDTA, nitrato de plata. Aquí verás cómo funciona cada una, cómo se hace la cuenta y qué puede salir mal. Lo ácido-base va en su propia lección, y el ajuste de una redox, en «Oxidación y reducción a fondo».

Muchas muestras que bajas al laboratorio acaban en una bureta: el cloruro del clorhidrato que sale de tu centrífuga, el agua oxigenada de una carga, la dureza del agua de la torre. Así entenderás por qué te piden un frasco concreto, por qué tarda y qué significa el número.

### Lo que tienen en común todas las valoraciones
Una valoración (*titration*) mide cuánto hay de una sustancia añadiéndole gota a gota, desde una bureta, otra de concentración conocida: el valorante (*titrant*). Del volumen gastado sale la cantidad. La reacción tiene que ser a la vez:

1. **Rápida**: cada gota reacciona en el momento; si tarda, te pasas sin darte cuenta.
2. **Completa**: gasta prácticamente toda la muestra.
3. **Estequiométrica** (*stoichiometric*): siempre en la misma proporción conocida, sin reacciones paralelas.
4. **Con un punto final detectable** (*end point*): un cambio de color o un salto en un electrodo avisa de que la muestra se acabó.

Es como el torno de un cine: una vuelta por persona, nadie se cuela y una luz avisa de que la sala está llena.

Hay familias distintas porque el calcio, el cloruro o el agua oxigenada no se miden bien con un ácido o una base. Para cada uno se busca otra reacción que cumpla las cuatro condiciones: **redox** (se intercambian electrones), **complexometría** (un metal queda atrapado en una molécula) y **precipitación** (se forma un sólido insoluble).

El manual de laboratorio de la FDA (*ORA Laboratory Manual*, volumen IV, sección 3) sigue poniendo las valoraciones, acuosas y no acuosas, con indicador o potenciométricas, entre las técnicas básicas de todo analista.

### Valoraciones redox: la permanganimetría
El permanganato de potasio (KMnO₄) es un oxidante fuerte: en medio ácido, el manganeso baja de +7 a +2 ganando cinco electrones. Su disolución es morada; el Mn²⁺ que se forma, casi incoloro. Por eso es **su propio indicador**: mientras queda muestra, cada gota se decolora; cuando se acaba, la gota de más deja un rosa pálido. El método oficial europeo de calcio en abonos lo dice así: se valora gota a gota hasta que el color rosa se mantiene durante un minuto.

El medio es **ácido sulfúrico** (el mismo método disuelve el precipitado en sulfúrico caliente). Con poco ácido el manganeso se queda en dióxido de manganeso, un sólido marrón que estropea color y proporción, y con ácido clorhídrico el permanganato oxidaría también el cloruro (química de libro de texto).

**Con agua oxigenada.** El peróxido de hidrógeno (H₂O₂) hace aquí de reductor y se oxida a oxígeno gas:

> 2 MnO₄⁻ + 5 H₂O₂ + 6 H⁺ da 2 Mn²⁺ + 5 O₂ + 8 H₂O

A cada lado hay 18 oxígenos, 16 hidrógenos y carga +4. Proporción: **2 de permanganato por cada 5 de peróxido**.

**Cuenta 1. Riqueza de una disolución de agua oxigenada** (valores de ejemplo). Se pesan 1,0000 g, se diluyen con ácido sulfúrico y se valoran con KMnO₄ 0,02000 mol/L; gasto 17,50 mL.

1. Permanganato: 17,50 mL × 0,02000 mmol/mL = 0,3500 mmol.
2. Peróxido: 0,3500 × 5 / 2 = 0,8750 mmol.
3. Masa (M = 34,01 g/mol): 0,8750 × 34,01 = 29,76 mg; riqueza: 29,76 / 1000,0 × 100 = **2,98 %**.

**Con hierro(II).** Cada hierro pierde un electrón (de +2 a +3) y el permanganato gana cinco: cinco hierros por permanganato.

> MnO₄⁻ + 5 Fe²⁺ + 8 H⁺ da Mn²⁺ + 5 Fe³⁺ + 4 H₂O

Carga: +17 a cada lado.

**Cuenta 2. Riqueza de sulfato de hierro(II) heptahidratado** (FeSO₄·7H₂O, M = 278,01 g/mol; valores de ejemplo). Se valoran 0,5000 g con KMnO₄ 0,02000 mol/L; gasto 17,90 mL. Permanganato: 17,90 × 0,02000 = 0,3580 mmol. Hierro: 0,3580 × 5 = 1,790 mmol. Masa: 1,790 × 278,01 = 497,63 mg. Riqueza: 497,63 / 500,0 × 100 = **99,53 %**. Olvidando el 5 saldría un 19,9 %: por eso la proporción va escrita en el método.

### Valoraciones redox: yodo y tiosulfato
El yodo (I₂) es un oxidante suave; el **tiosulfato de sodio** (Na₂S₂O₃) lo reduce a yoduro (I⁻), incoloro. Así lo escribe el método oficial de cobre del reglamento europeo de abonos:

> I₂ + 2 Na₂S₂O₃ da 2 NaI + Na₂S₄O₆

Cada yodo gasta **dos** tiosulfatos.

El indicador es el **almidón**, que con el yodo da un azul oscuro o púrpura. El método oficial no lo pone al principio: se valora hasta que el marrón del yodo se debilita, se añade el almidón y se sigue hasta que el color desaparece. Con mucho yodo, el almidón lo retiene y el final llega tarde y borroso (química de libro de texto).

- **Yodimetría** (*iodimetry*): se valora **con** yodo un reductor que el yodo oxida directamente. El ejemplo clásico de los libros es el ácido ascórbico (vitamina C), 1:1 con el yodo.
- **Yodometría** (*iodometry*): se mide un **oxidante** de forma indirecta. Se le añade **yoduro de potasio en exceso**; el oxidante convierte parte del yoduro en yodo, y ese yodo se valora con tiosulfato.

¿Por qué yoduro en exceso? Para que el oxidante reaccione entero y rápido; porque el yoduro sobrante mantiene el yodo disuelto y menos volátil (química de libro de texto); y porque no molesta, ya que el tiosulfato solo cuenta el yodo formado. El método de cobre añade 10 g de yoduro de potasio, muchísimo más de lo necesario.

**Cuenta 3. Cobre por yodometría** (valores de ejemplo). El método oficial escribe la primera reacción así:

> 2 Cu²⁺ + 4 I⁻ da 2 CuI + I₂

Dos cobres dan un yodo y un yodo gasta dos tiosulfatos: al final, **un cobre por tiosulfato**. Se valoran 0,5000 g de sulfato de cobre(II) pentahidratado (CuSO₄·5H₂O, M = 249,68 g/mol) con tiosulfato 0,1000 mol/L; gasto 19,95 mL. Tiosulfato y cobre: 19,95 × 0,1000 = 1,995 mmol. Masa: 1,995 × 249,68 = 498,1 mg. Riqueza: 498,1 / 500,0 × 100 = **99,62 %**. 

**Cerimetría**, solo como mención: se valora con una sal de cerio(IV), otro oxidante, normalmente con indicador o electrodo.

### El punto final con un electrodo
En un laboratorio GMP lo habitual es el **valorador automático** (*autotitrator*): bureta motorizada, agitador y un electrodo que mide una tensión. En una redox el electrodo indicador suele ser de **platino**, un metal que no reacciona y solo «siente» lo oxidante o reductora que está la disolución (química de libro de texto). La tensión cambia poco mientras queda muestra y da un salto brusco en el punto de equivalencia.

El método oficial de cloruros de abonos (con electrodo de plata) explica cómo se localiza el salto: se añade en porciones de 0,1 o 0,05 mL, se espera a que la lectura se estabilice, se anotan volumen y tensión, y el final está donde el incremento de tensión entre dos adiciones es máximo. Con platino, en una redox, la idea es la misma. No depende del ojo y deja registro.

### Complexometría con EDTA
Un **complejo** (*complex*) es un ion metálico sujeto por una molécula que lo agarra por varios puntos, como una mano a una pelota.

El **EDTA** (ácido etilendiaminotetraacético) envuelve un ion metálico entero: **un EDTA coge un metal**. El método oficial europeo de magnesio en abonos lo dice así: la relación EDTA/metal es siempre 1:1, sea cual sea la valencia del metal, y por eso el EDTA se expresa en mol/L. Según el mismo método, 1 mL de EDTA 0,05 mol/L corresponde a 1,216 mg de magnesio y a 2,004 mg de calcio (0,05 mmol de cada uno).

**El pH manda.** El EDTA es un ácido y agarra bien el metal en medio básico, cuando ha soltado sus hidrógenos; el color del indicador también depende del pH. Por eso se añade un **tampón** (*buffer*), que fija el pH. El método de magnesio usa cloruro de amonio con amoníaco y pide comprobar con el pH-metro que la disolución está a pH 10,5 ± 0,1.

**El indicador metalocrómico** (*metallochromic indicator*) es un colorante que coge al metal con menos fuerza que el EDTA y cambia de color al soltarlo. El ejemplo de libro es el **negro de eriocromo T**: unido al metal, rojo; libre, azul. El EDTA coge primero el metal libre y, cuando no queda, se lo quita al indicador, que pasa a azul. El método oficial pide valorar «hasta que se obtenga un azul sin reflejos rojos» y avisa de que solo vira si hay magnesio.

### Dureza del agua: la aplicación clásica
La **dureza** (*water hardness*) es el calcio y el magnesio disueltos, los que dejan cal en intercambiadores y camisas. Con negro de eriocromo T el EDTA coge primero el calcio y luego el magnesio, y se valoran juntos (método oficial). En otra porción, con hidróxido de potasio y otro indicador como la calceína, solo se valora el calcio, y el magnesio sale por diferencia. La dureza total se expresa como si todo fuera **carbonato de calcio** (CaCO₃, M = 100,09 g/mol): un mmol de EDTA, un mmol de CaCO₃.

**Cuenta 4. Dureza de un agua** (valores de ejemplo). Se valoran 100,0 mL de agua con EDTA 0,01000 mol/L.

1. A pH 10,5 con negro de eriocromo T, gasto 8,40 mL: 8,40 × 0,01000 = 0,0840 mmol de calcio más magnesio.
2. Como CaCO₃: 0,0840 × 100,09 = 8,41 mg en 0,1000 L, es decir, **84,1 mg/L de CaCO₃**.
3. Otra porción, solo calcio, gasto 5,60 mL: 0,0560 mmol de calcio, que son 0,0560 × 40,08 / 0,1000 = **22,4 mg/L de calcio**.
4. Magnesio por diferencia: 0,0840 − 0,0560 = 0,0280 mmol, es decir, 0,0280 × 24,31 / 0,1000 = **6,8 mg/L de magnesio**.

**Un metal en una sal de principio activo.** En una sal cálcica, magnésica o de cinc de un principio activo, el metal se valora con EDTA y se compara con el teórico. Valores de ejemplo: una sal cálcica ficticia con un calcio por molécula y M = 500,0 g/mol tiene en teoría 40,08 / 500,0 × 100 = 8,02 % de calcio. Si 0,4000 g gastan 15,90 mL de EDTA 0,05000 mol/L, hay 0,795 mmol, 31,86 mg y un **7,97 %**.

### Valoraciones de precipitación: la argentometría
El ion plata (Ag⁺) y el cloruro (Cl⁻) forman cloruro de plata, un sólido blanco insoluble, en proporción 1:1:

> Ag⁺ + Cl⁻ da AgCl (sólido)

El valorante es el **nitrato de plata** (AgNO₃) y la técnica, **argentometría** (*argentometric titration*). Como el sólido enturbia todo, hay tres formas clásicas de ver el final:

| Método | Cómo se ve el final | Idea |
|---|---|---|
| **Mohr** | Precipitado rojizo de cromato de plata | Se valora directo en medio casi neutro con cromato como indicador; la primera plata sobrante forma un sólido de otro color. Lleva cromo(VI) (libro de texto) |
| **Volhard** | Color marrón rojizo | Por retroceso (*back titration*): se añade plata en exceso conocido y la que sobra se valora con tiocianato, con sulfato férrico de amonio como indicador, en medio nítrico |
| **Fajans** | El precipitado cambia de color | Un colorante (indicador de adsorción) se pega a la superficie del sólido cuando sobra plata y cambia de color (libro de texto) |

El reglamento europeo de análisis de piensos describe el Volhard: precipitar los cloruros con nitrato de plata en medio nítrico, valorar el exceso con tiocianato de amonio hasta que el marrón rojizo dura un minuto y hacer un ensayo en blanco; admite también la potenciometría y, para ciertas muestras, el Mohr. En un laboratorio de API lo corriente hoy es la potenciometría con electrodo de plata.

**Cuenta 5. Cloruro de un clorhidrato** (valores de ejemplo). Un clorhidrato es la sal de un principio activo con ácido clorhídrico: lleva un cloruro como **contraión** (*counterion*). Bien formada, hay un cloruro por molécula; para un clorhidrato ficticio de M = 350,0 g/mol, el teórico es 35,45 / 350,0 × 100 = 10,13 %. Se valoran 0,3000 g con AgNO₃ 0,1000 mol/L; gasto 8,60 mL, blanco 0,04 mL.

1. Volumen neto: 8,60 − 0,04 = 8,56 mL.
2. Cloruro: 8,56 × 0,1000 = 0,856 mmol, es decir, 0,856 × 35,45 = 30,35 mg.
3. Contenido: 30,35 / 300,0 × 100 = **10,12 %**, junto al teórico.

Bajo puede indicar sal incompleta, agua o disolvente; alto, ácido clorhídrico sobrante u otro cloruro. La guía ICH Q7 pide que el registro de laboratorio incluya los **factores de equivalencia** (*equivalency factors*) usados: aquí, 1 mL de AgNO₃ 0,1000 mol/L equivale a 3,545 mg de cloruro.

**Retroceso** (Volhard, valores de ejemplo): se añaden 25,00 mL de AgNO₃ 0,1000 mol/L (2,500 mmol) y la plata sobrante gasta 12,30 mL de tiocianato 0,1000 mol/L (1,230 mmol). Cloruro: 2,500 − 1,230 = 1,270 mmol, es decir, 45,02 mg.

### Las tres familias, de un vistazo

| Familia | Reacción | Valorante típico | Punto final | Uso típico en un laboratorio de API |
|---|---|---|---|---|
| Redox | Intercambio de electrones | Permanganato; yodo o tiosulfato; cerio(IV) | El propio permanganato; almidón; electrodo de platino | Riqueza de oxidantes y reductores (agua oxigenada, sales de hierro) |
| Complexometría | Metal atrapado por EDTA, 1:1 | EDTA, con tampón | Indicador metalocrómico (negro de eriocromo T, calceína) | Metal en una sal de principio activo; dureza del agua de servicios |
| Precipitación | Se forma un sólido insoluble | Nitrato de plata | Mohr, Volhard, Fajans o electrodo de plata | Cloruro de un clorhidrato; cloruros en materias primas |

### Cuando la proporción no es 1:1
> mmol de muestra = mL de valorante × concentración del valorante × (moles de muestra / moles de valorante en la ecuación)

| Reacción | Proporción muestra : valorante | Multiplicas los mmol de valorante por |
|---|---|---|
| Fe²⁺ con MnO₄⁻ | 5 : 1 | 5 |
| H₂O₂ con MnO₄⁻ | 5 : 2 | 5/2 |
| I₂ con tiosulfato | 1 : 2 | 1/2 |
| Metal con EDTA | 1 : 1 | 1 |
| Cl⁻ con Ag⁺ | 1 : 1 | 1 |

**Cuenta 6. Concentración de una disolución de yodo** (proporción 1:2; valores de ejemplo). Se valoran 25,00 mL de yodo con tiosulfato 0,1000 mol/L; gasto 24,60 mL. Tiosulfato: 2,460 mmol. Yodo: 2,460 / 2 = 1,230 mmol. Concentración: 1,230 / 25,00 = **0,04920 mol/L**. Sin el 1/2 saldría el doble, y mal todas las yodimetrías hechas con ella.

### Seguridad de los reactivos
Clasificación del anexo VI del Reglamento CLP en su texto de 2008; las adaptaciones posteriores pueden haberla ampliado: manda la ficha de datos de seguridad (FDS) del proveedor.

| Reactivo | Peligros (CLP, texto de 2008) | Qué recordar |
|---|---|---|
| Permanganato de potasio | H272 «Puede agravar un incendio; comburente»; H302 «Nocivo en caso de ingestión»; H410 | Incompatible con alcoholes, acetona, materia orgánica y la mayoría de los metales (NTP 479 del INSST) |
| Dicromato de potasio | H272; H350 «Puede provocar cáncer»; H340 «Puede provocar defectos genéticos»; H360FD «Puede perjudicar a la fertilidad. Puede dañar al feto»; H330 «Mortal en caso de inhalación»; H314 | Es cromo(VI). La NTP 464 pide descartar la mezcla crómica salvo que no haya alternativa y sustituirla, por ejemplo, por permanganato: por eso se evita |
| Nitrato de plata | H314 «Provoca quemaduras graves en la piel y lesiones oculares graves»; H410 | Disolución en frasco de vidrio marrón, como pide el método oficial de cloruros. En la piel deja una mancha oscura que tarda en irse (visto solo en un fragmento de buscador) |
| Yodo | H332 «Nocivo en caso de inhalación»; H312 «Nocivo en contacto con la piel»; H400 | Guantes y vitrina |
| Ácido perclórico | Por encima del 50 %, H271 «Puede provocar un incendio o una explosión; muy comburente»; H314 | Incompatible con anhídrido acético, alcohol, papel, madera, grasas y aceites (NTP 479). La NTP 1188 describe vitrinas propias para él, de materiales que no reaccionen y fáciles de limpiar |

H410 es «Muy tóxico para los organismos acuáticos, con efectos nocivos duraderos» y H400, «Muy tóxico para los organismos acuáticos»: estos restos van a su contenedor de residuos, no al desagüe.

### Fuentes de error y qué controla el laboratorio

**De todas.** El valorante cambia con el tiempo y se valora contra un patrón («Reactivos, patrones y disoluciones a fondo»). La guía de la OMS para laboratorios de control de calidad pide que su etiqueta lleve nombre, concentración, fecha y analista de preparación y de valoración y factor, con registros. El blanco se resta. Ante un resultado fuera de especificación, la guía de la FDA de 2022 manda revisar, entre otras cosas, las cuentas y que reactivos y disoluciones cumplían.

**Redox.** El permanganato se revalora; la gota rosa se lee siempre igual, sobre fondo blanco. El tiosulfato se protege de la luz directa y el almidón se prepara reciente porque no se conserva mucho (método de cobre). El yodo se evapora: tapado y sin calentar (libro de texto).

**Complexometría.** El pH se mide. El método de magnesio avisa de que los indicadores son sensibles al aire y pierden color, de que a veces viran despacio (las últimas gotas, lentas) y de que el viraje se mira horizontalmente, sobre fondo blanco; pide experiencia y, si se puede, el mismo analista. Otros metales también gastan EDTA: el método los enmascara.

**Precipitación.** El nitrato de plata, protegido de la luz; el medio es el del método (nítrico en Volhard); en el retroceso, un error en cualquiera de los dos volúmenes se arrastra.

### Qué te toca a ti
Bajar la muestra en el frasco de la hoja, cerrada e identificada, y avisar si ha estado abierta o al sol. Los valores de esta lección son de ejemplo: en planta y en el laboratorio manda siempre el procedimiento vigente (SOP).
`,
  plant: `
Turno de tarde. En el reactor R-305 se ha formado la sal clorhidrato del intermedio ficticio TQ-48 añadiendo ácido clorhídrico en isopropanol. La suspensión pasa a la centrífuga C-306 y la torta al secadero de vacío SD-307.

La hoja dice: *«Tomar muestra de la torta seca en frasco de vidrio limpio y cerrado. Enviar al laboratorio para contenido de cloruro (valoración argentométrica). Especificación de proceso: 9,9 a 10,4 % (valor de ejemplo). No descargar a bidones hasta recibir resultado.»*

Tomas la muestra con el tomamuestras de la hoja, cierras el frasco, lo etiquetas con producto, lote, equipo, hora y tu firma y lo bajas.

A la hora llega el resultado: 9,8 %. Fuera de lo esperado. La analista te pregunta si la muestra ha estado abierta: no. Revisa su cuenta, el blanco y el factor del nitrato de plata: todo bien. Repite según su procedimiento y obtiene lo mismo. Mientras, el control de pérdida por secado de la misma muestra da un 3,1 %, cuando la hoja pide menos del 0,5 %. El producto no estaba seco: el agua y el disolvente pesan pero no tienen cloruro, y bajan el porcentaje.

La jefa de turno decide, según el procedimiento, prolongar el secado. Tras cuatro horas más, la nueva muestra da 0,3 % de pérdida por secado y 10,1 % de cloruro. Cumple. Anotas las dos muestras, las dos horas y el aviso, también el primer resultado, y empiezas la descarga.
`,
  batchRecord: `
En la hoja de producción (*batch record*) no verás buretas, pero sí lo que depende de ellas:

- **Toma de muestra para control en proceso**: producto, lote, equipo (p. ej. SD-307), punto de muestreo, hora, cantidad, tipo de frasco y tu firma.
- **Ensayo pedido**: por ejemplo «contenido de cloruro», «riqueza de H₂O₂ de la disolución de carga» o «dureza del agua de la torre».
- **Resultado recibido** con su unidad (10,1 %, 84 mg/L de CaCO₃), la especificación y si cumple, con la referencia del análisis del laboratorio.
- **Espera**: casilla de «no continuar hasta resultado» cuando la etapa lo exige.
- **Repeticiones**: si hubo segunda muestra, se anotan las dos, con hora y motivo.
- **Incidencias**: muestra derramada, frasco abierto, resultado fuera de especificación, aviso al responsable.

En la hoja de análisis del laboratorio, por su parte, quedan masa pesada, volúmenes gastados, blanco, concentración y factor del valorante, factor de equivalencia, cálculo, resultado y firmas de quien analiza y de quien revisa, como pide la guía ICH Q7.
`,
  terms: [
    { es: "Valoración redox", en: "Redox titration", def: "Valoración basada en una reacción en la que el valorante gana o cede electrones a la muestra." },
    { es: "Permanganimetría", en: "Permanganometry", def: "Valoración con permanganato de potasio en medio ácido sulfúrico; el permanganato hace de indicador con su color." },
    { es: "Yodometría", en: "Iodometry", def: "Medida de un oxidante añadiendo yoduro en exceso y valorando con tiosulfato el yodo que se forma." },
    { es: "Yodimetría", en: "Iodimetry", def: "Valoración directa de un reductor con una disolución de yodo." },
    { es: "Almidón (indicador)", en: "Starch indicator", def: "Indicador que da color azul oscuro con el yodo; en yodometría se añade cerca del final." },
    { es: "Complejo", en: "Complex", def: "Ion metálico rodeado y sujeto por una molécula que lo agarra por varios puntos." },
    { es: "EDTA", en: "EDTA (ethylenediaminetetraacetic acid)", def: "Agente complejante que reacciona 1:1 con los iones metálicos; se usa con tampón." },
    { es: "Indicador metalocrómico", en: "Metallochromic indicator", def: "Colorante que cambia de color al soltar el metal que tenía unido, como el negro de eriocromo T." },
    { es: "Dureza del agua", en: "Water hardness", def: "Calcio y magnesio disueltos; suele expresarse en mg/L de carbonato de calcio." },
    { es: "Argentometría", en: "Argentometric titration", def: "Valoración de precipitación con nitrato de plata, típica de cloruros." },
    { es: "Valoración por retroceso", en: "Back titration", def: "Se añade un exceso conocido de reactivo y se valora lo que sobra, como en el método de Volhard." },
    { es: "Contraión", en: "Counterion", def: "Ion que acompaña al principio activo en una sal, como el cloruro de un clorhidrato." },
    { es: "Electrodo de platino", en: "Platinum electrode", def: "Electrodo indicador inerte usado para detectar el punto final de una redox por el salto de tensión." },
    { es: "Factor de equivalencia", en: "Equivalency factor", def: "Masa de sustancia que corresponde a 1 mL de valorante, por ejemplo 3,545 mg de cloruro por mL de AgNO₃ 0,1000 mol/L." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Se pesan 1,0000 g de una disolución de agua oxigenada y se valoran con KMnO₄ 0,02000 mol/L en ácido sulfúrico. Gasto: 18,20 mL. Reacción: 2 MnO₄⁻ + 5 H₂O₂ + 6 H⁺ da 2 Mn²⁺ + 5 O₂ + 8 H₂O. Con M(H₂O₂) = 34,01 g/mol, ¿qué riqueza en % tiene?",
      answer: 3.1,
      tolerance: 0.01,
      unit: "%",
      explain: "Permanganato: 18,20 × 0,02000 = 0,3640 mmol. Peróxido: 0,3640 × 5 / 2 = 0,9100 mmol. Masa: 0,9100 × 34,01 = 30,95 mg. Riqueza: 30,95 / 1000,0 × 100 = 3,10 %, es decir, 3,1 %.",
    },
    {
      kind: "number",
      q: "Una muestra de hierro(II) gasta 12,00 mL de KMnO₄ 0,02000 mol/L. La reacción es MnO₄⁻ + 5 Fe²⁺ + 8 H⁺ da Mn²⁺ + 5 Fe³⁺ + 4 H₂O. ¿Cuántos mmol de hierro(II) había?",
      answer: 1.2,
      tolerance: 0.01,
      unit: "mmol",
      explain: "Permanganato: 12,00 × 0,02000 = 0,2400 mmol. Cada permanganato oxida cinco hierros: 0,2400 × 5 = 1,2 mmol.",
    },
    {
      kind: "number",
      q: "En una yodometría, el yodo liberado gasta 20,00 mL de tiosulfato de sodio 0,1000 mol/L. Reacción: I₂ + 2 Na₂S₂O₃ da 2 NaI + Na₂S₄O₆. ¿Cuántos mmol de yodo se habían formado?",
      answer: 1,
      tolerance: 0.01,
      unit: "mmol",
      explain: "Tiosulfato: 20,00 × 0,1000 = 2,000 mmol. Cada yodo gasta dos tiosulfatos: 2,000 / 2 = 1 mmol de yodo.",
    },
    {
      kind: "number",
      q: "Se valoran 50,00 mL de agua de la torre de refrigeración a pH 10,5 con negro de eriocromo T y EDTA 0,01000 mol/L. Gasto: 6,25 mL. Con M(CaCO₃) = 100,09 g/mol, ¿cuál es la dureza total en mg/L de CaCO₃?",
      answer: 125.1,
      tolerance: 0.01,
      unit: "mg/L de CaCO₃",
      explain: "EDTA: 6,25 × 0,01000 = 0,0625 mmol de calcio más magnesio (1:1). Como CaCO₃: 0,0625 × 100,09 = 6,256 mg en 0,05000 L, que son 125,1 mg/L.",
    },
    {
      kind: "number",
      q: "Se valoran 0,2500 g de un clorhidrato con AgNO₃ 0,1000 mol/L y electrodo de plata. Gasto: 7,10 mL; el blanco no consume nada. Con M(Cl) = 35,45 g/mol, ¿qué porcentaje de cloruro tiene?",
      answer: 10.07,
      tolerance: 0.01,
      unit: "%",
      explain: "Plata gastada: 7,10 × 0,1000 = 0,710 mmol, igual al cloruro (1:1). Masa: 0,710 × 35,45 = 25,17 mg. Contenido: 25,17 / 250,0 × 100 = 10,07 %.",
    },
    {
      kind: "number",
      q: "Método de Volhard: a una muestra se añaden 30,00 mL de AgNO₃ 0,1000 mol/L, y la plata sobrante gasta 10,40 mL de tiocianato 0,1000 mol/L. Con M(Cl) = 35,45 g/mol, ¿cuántos mg de cloruro había?",
      answer: 69.48,
      tolerance: 0.01,
      unit: "mg",
      explain: "Plata añadida: 3,000 mmol. Plata sobrante: 1,040 mmol. Cloruro: 3,000 − 1,040 = 1,960 mmol, que son 1,960 × 35,45 = 69,48 mg.",
    },
    {
      kind: "choice",
      q: "En una permanganimetría, la analista no añade ningún indicador. ¿Cómo sabe que ha llegado al final?",
      options: [
        "Porque el pH-metro marca exactamente pH 7 en ese momento",
        "Porque el almidón se vuelve azul oscuro con la primera gota",
        "Porque se forma un sólido blanco que ya no se redisuelve",
        "Porque la primera gota que sobra deja un rosa que persiste",
      ],
      answer: 3,
      explain: "El permanganato es morado y, al reaccionar, pasa a Mn²⁺ casi incoloro. Cuando ya no queda muestra, la gota sobrante no se decolora y queda un rosa que se mantiene: es su propio indicador.",
    },
    {
      kind: "choice",
      q: "¿Por qué en una yodometría se añade yoduro de potasio muy en exceso?",
      options: [
        "Para que el oxidante reaccione entero y el yodo quede disuelto",
        "Porque el tiosulfato reacciona con el yoduro que sobra al final",
        "Para que el almidón funcione aunque la muestra no tenga yodo",
        "Porque así la reacción pasa a tener una proporción 1:1 exacta",
      ],
      answer: 0,
      explain: "El exceso asegura que todo el oxidante se convierte en yodo, de forma rápida, y mantiene el yodo disuelto. El tiosulfato solo cuenta el yodo formado, así que el yoduro sobrante no molesta.",
    },
    {
      kind: "choice",
      q: "Una valoración de calcio con EDTA da finales borrosos. La analista mide el pH y está en 8,9, cuando el método pide 10,5 ± 0,1. ¿Qué es lo más probable?",
      options: [
        "Que el EDTA reaccione 1:2 con el calcio a ese pH más bajo",
        "Que el tampón no funcione bien y falle el agarre y el viraje",
        "Que el negro de eriocromo T se haya vuelto un oxidante fuerte",
        "Que el calcio haya precipitado como cloruro de calcio sólido",
      ],
      answer: 1,
      explain: "El EDTA solo agarra bien el metal en medio básico y el color del indicador depende del pH. Por eso el método fija el pH con un tampón y pide comprobarlo con el pH-metro. La proporción sigue siendo 1:1.",
    },
    {
      kind: "choice",
      q: "¿Por qué el laboratorio evita el dicromato de potasio como valorante y prefiere el permanganato?",
      options: [
        "Porque el dicromato no es un oxidante y no sirve para redox",
        "Porque el dicromato es más barato pero se gasta muy deprisa",
        "Porque el dicromato es cromo(VI), cancerígeno y mutágeno",
        "Porque el permanganato no tiene ningún peligro para la salud",
      ],
      answer: 2,
      explain: "El CLP lo clasifica con H350, H340 y H360FD, entre otras frases. La NTP 464 recomienda sustituirlo, por ejemplo, por permanganato, que también es peligroso (comburente, H272, y nocivo por ingestión, H302) pero no cancerígeno.",
    },
  ],
};
