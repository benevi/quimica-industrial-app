import type { Lesson } from "./types";

export const emergenciasYResiduosAFondo: Lesson = {
  slug: "emergencias-y-residuos-a-fondo",
  level: 15,
  order: 11,
  title: "Almacenamiento, emergencias y residuos a fondo: del bidón que llega al residuo que sale",
  titleEn: "Storage, emergencies and waste in depth: from the incoming drum to the outgoing waste",
  minutes: 40,
  summary:
    "Por qué no se guarda todo junto, qué exige el Reglamento de almacenamiento, cómo se leen las señales, qué extintor sirve para cada fuego, cómo se actúa en un vertido o una salpicadura y qué obliga la ley de residuos, con sus cuentas.",
  body: `
En las lecciones anteriores viste la etiqueta, la ficha de datos de seguridad (FDS) y los pasos básicos ante un vertido. Aquí seguimos el camino completo de un producto: llega en un bidón, se guarda, puede dar un susto y sale como residuo. Casi todo lo que ves por el camino (el cubeto, la ducha, la etiqueta del residuo) sale de una norma.

### Parte 1. Por qué no se guarda todo junto
En casa no mezclas lejía con salfumán: sale un gas que ahoga. En un almacén pasa lo mismo, a lo grande. El Instituto Nacional de Seguridad y Salud en el Trabajo (INSST) da la norma general en su guía de buenas prácticas de almacenamiento (2023): solo se guardan juntos productos de la misma clase de peligro, y solo si no pueden reaccionar entre sí de forma peligrosa.

Dos productos son **incompatibles** (*incompatible*) cuando su mezcla provoca una reacción violenta: se calienta o desprende gases inflamables o tóxicos. Ejemplos de las notas técnicas NTP 479 y NTP 237 del INSST:

| Si se juntan | Qué ocurre |
|---|---|
| Ácidos fuertes y bases fuertes | Reacción violenta con mucho calor |
| Oxidantes (comburentes) y materias inflamables | El oxidante aviva el fuego; grupo incompatible |
| Ácido clorhídrico e hipocloritos (lejía) | Se desprende cloro, un gas tóxico |
| Ácido clorhídrico y cianuros o sulfuros | Se desprende cianuro de hidrógeno o sulfuro de hidrógeno |
| Sodio o potasio y agua | Se forma hidrógeno con mucho calor; con el potasio, el calor basta para inflamarlo |
| Disolventes y fuentes de ignición | Calor, chispas, superficies calientes o llamas pueden encender los vapores |

Los productos que reaccionan con el agua se guardan lejos de los inflamables: un incendio se suele apagar con agua (NTP 237).

### Qué regula el Reglamento de almacenamiento
El Real Decreto 656/2017 aprueba el Reglamento de almacenamiento de productos químicos. Su artículo 1 dice que fija las condiciones de seguridad de las instalaciones de almacenamiento, carga, descarga y trasiego de productos químicos peligrosos, es decir, los que el Reglamento CLP considera peligrosos. Dos matices del artículo 2:

- No se aplica a las instalaciones integradas en las unidades de proceso. La nave de reactores no es un almacén.
- No se aplica por debajo de ciertas cantidades.

El detalle está en las instrucciones técnicas complementarias (ITC), llamadas MIE APQ. Las que tocan a una planta de principios activos:

| ITC | Título en el BOE | Dónde la notas |
|---|---|---|
| MIE APQ-0 | Definiciones generales | El vocabulario: cubeto, recipiente fijo y móvil |
| MIE APQ-1 | Almacenamiento de líquidos inflamables y combustibles en recipientes fijos | Tanques de disolvente y descarga de cisternas |
| MIE APQ-5 | Almacenamiento de gases en recipientes a presión móviles | Botellas de nitrógeno, hidrógeno u oxígeno |
| MIE APQ-6 | Almacenamiento de líquidos corrosivos en recipientes fijos | Tanques de sosa o de ácido |
| MIE APQ-7 | Almacenamiento de líquidos tóxicos en recipientes fijos | Tanques de líquidos tóxicos |
| MIE APQ-10 | Almacenamiento en recipientes móviles | Bidones, garrafas y contenedores de hasta 3000 litros |

Un recipiente móvil conectado por tubería al proceso queda fuera de la APQ-10.

### Lo que ves en el almacén
Casi todo sale de la MIE APQ-10:

- **Acceso restringido**, con letrero (artículo 5). Nada de bidones en pasillos, escaleras o salidas de emergencia (artículo 6).
- **Ventilación** natural o forzada. Si es forzada, lleva alarma de avería (artículo 6).
- **Envases cerrados**, ordenados, en su envase original si es posible y siempre etiquetados según el CLP (artículos 8 y 9). La FDS de cada producto, disponible (artículo 9).
- **Separación**. Hay tres grados: sin restricción, separado (mismo sector de incendio, con distancia, pared o cubetos independientes) e independiente (otro sector de incendio). Ácidos y álcalis que reaccionen llevan, como mínimo, cubetos separados. Los líquidos inflamables no comparten área con comburentes, salvo en armarios protegidos (artículos 18 y 19).
- **Inflamables**: sector propio. Un armario de seguridad admite como máximo 500 litros, y de ellos solo 250 litros de los más inflamables (de H222 a H225) (artículo 21).
- **Duchas y lavaojos** a no más de 10 metros de los puntos de trasvase y de toma de muestras, sin obstáculos y señalizados. Se prueban al menos una vez por semana (artículos 13 y 15).
- **Tomas de tierra**: su continuidad se revisa cada año (artículo 16). El INSST recuerda que en los trasvases de inflamables la instalación debe descargar a tierra la electricidad estática. Al descargar una cisterna, la pinza se conecta antes de empezar y durante toda la operación (MIE APQ-1, artículo 35).
- **Botellas de gases** (MIE APQ-5, artículo 5): de pie y sujetas contra caídas, con la válvula cerrada y la caperuza puesta, llenas y vacías en grupos separados, sin tocarlas con guantes grasientos y en zonas que no pasen de 50 °C.

### El cubeto y su cuenta
Un **cubeto** (*bund*) es, según la MIE APQ-0, una cavidad capaz de retener el producto si el recipiente se rompe o fuga. Es el plato bajo la maceta, en grande. El artículo 10 de la APQ-10 fija su tamaño. La capacidad de retención será igual o mayor que el mayor de estos dos valores:

- el 100 % de la capacidad del recipiente mayor;
- el 10 % de la capacidad total almacenada.

**Cálculo 1.** Un cubeto recoge 12 bidones de 200 L y 2 contenedores de 1000 L. Total: 12 × 200 + 2 × 1000 = 4400 L. El 10 % son 440 L. El recipiente mayor tiene 1000 L. Manda el mayor: el cubeto debe retener al menos 1000 L.

**Cálculo 2.** Una estantería con suelo de retención guarda 40 bidones de 200 L. Total: 8000 L. El 10 % son 800 L y el recipiente mayor tiene 200 L. Aquí manda el 10 %: hay que retener 800 L.

Un cubeto lleno de agua de lluvia o usado de trastero ya no tiene esa capacidad: avisa.

### Las señales: color y forma
El Real Decreto 485/1997 (anexos II y III) fija un código de formas y colores:

| Tipo de señal | Forma | Colores |
|---|---|---|
| Prohibición | Redonda | Pictograma negro sobre fondo blanco, borde y banda rojos |
| Obligación | Redonda | Pictograma blanco sobre fondo azul |
| Advertencia | Triangular | Pictograma negro sobre fondo amarillo, borde negro |
| Salvamento o socorro | Rectangular o cuadrada | Pictograma blanco sobre fondo verde |
| Equipos de lucha contra incendios | Rectangular o cuadrada | Pictograma blanco sobre fondo rojo |

La ducha de seguridad, el lavaojos y la salida van en verde; el extintor, en rojo; «usa gafas», en azul. Según el anexo IV, el sonido de una señal de evacuación es continuo.

### Parte 2. Clases de fuego y agentes extintores
El Reglamento de instalaciones de protección contra incendios (Real Decreto 513/2017, anexo I) clasifica los fuegos: clase A, sólidos que forman brasas; clase B, líquidos o sólidos que se funden; clase C, gases; clase D, metales; clase F, aceites y grasas de cocina. En planta, un disolvente ardiendo es clase B.

La NTP 536 del INSST recoge qué agente sirve para cada clase. Es la tabla del reglamento anterior, que el INSST sigue publicando; la raya indica que la tabla no lo recoge:

| Agente extintor | A sólidos | B líquidos | C gases | D metales |
|---|---|---|---|---|
| Agua pulverizada | Muy adecuado | Aceptable | — | — |
| Agua a chorro | Adecuado | — | — | — |
| Polvo BC (convencional) | — | Muy adecuado | Adecuado | — |
| Polvo ABC (polivalente) | Adecuado | Adecuado | Adecuado | — |
| Polvo específico para metales | — | — | — | Adecuado |
| Espuma física | Adecuado | Adecuado | — | — |
| Dióxido de carbono (CO₂) | Aceptable | Aceptable | — | — |

- **Con corriente eléctrica no se usa agua a chorro ni espuma.** El resto solo vale en extintores que hayan superado el ensayo dieléctrico; mira las precauciones de la etiqueta.
- **A un líquido ardiendo no se le echa agua a chorro**: la tabla no la recoge para la clase B. La NTP avisa de que la presión del chorro puede derramar el líquido incendiado. La espuma, en cambio, flota sobre el líquido y lo separa del aire.

### Usar un extintor, paso a paso
Según la NTP 536, un extintor portátil dura entre 8 y 60 segundos: hay que haberse formado antes. Los pasos:

1. Descuelga el extintor por el asa y déjalo en el suelo, de pie.
2. Coge la boquilla de la manguera. Si es de CO₂, por la parte aislada: el gas sale muy frío.
3. Quita el pasador tirando de la anilla.
4. Acércate hasta dejar como mínimo un metro. Al aire libre, con el viento a la espalda.
5. Aprieta la maneta y haz una descarga corta de prueba.
6. Dirige el chorro a la base de las llamas, barriendo. En líquidos, proyecta de forma superficial para no derramarlos.

Los extintores están cerca de las salidas, con la parte superior entre 80 y 120 cm del suelo, y a 15 metros de recorrido como máximo (Real Decreto 513/2017).

**Cuándo no intentarlo.** El extintor es para un conato: un fuego pequeño que se domina con los medios del sitio. Si no estás formado, si el agente no es el adecuado o si el fuego ya no es un conato, tu trabajo es dar la alarma y salir.

### El plan de emergencia
El artículo 20 de la Ley 31/1995 obliga a la empresa a analizar las posibles emergencias y a adoptar medidas de primeros auxilios, lucha contra incendios y evacuación; a designar y formar al personal encargado; a comprobar que funcionan, y a coordinarse con los servicios externos. Según la actividad, el documento se llama plan de emergencia, plan de emergencia interior o **plan de autoprotección** (*emergency plan*).

El INSST distingue tres grados:

| Grado | Qué es |
|---|---|
| Conato | Poca gravedad; se neutraliza con los medios y las personas del lugar |
| Emergencia parcial | No se domina de inmediato; hacen falta medios más especializados. Puede haber evacuación parcial |
| Emergencia general | Supera la capacidad del centro: ayuda externa y evacuación total |

La NTP 334, sobre la industria química, describe los equipos: el equipo de primera intervención actúa contra la causa (mínimo dos personas); el de segunda intervención son los bomberos de fábrica; el de alarma y evacuación guía hacia la salida y verifica que no queda nadie. Ojo: la nota abrevia «equipo de primera intervención» como EPI, las mismas siglas que el equipo de protección individual.

La evacuación tiene dos niveles: concentración en los **puntos de reunión** (*assembly points*) y salida al exterior. En el punto de reunión se hace el recuento: si te vas a otro sitio, alguien puede entrar a buscarte.

### Vertidos: lo que dice la sección 6
La sección 6 de la FDS, «Medidas en caso de vertido accidental», tiene tres apartados que ordenan la actuación: 6.1, protegerse (equipo de la sección 8, eliminar fuentes de ignición, ventilar, evacuar si hace falta); 6.2, proteger el medio ambiente (lejos de desagües y aguas); 6.3, contener y limpiar (barreras, cierre de desagües, absorbentes, herramientas que no hagan chispas). El absorbente usado va a un recipiente de residuos, nunca a la basura.

### Primeros auxilios químicos
La NTP 458 del INSST resume la conducta en tres letras, PAS:

- **Proteger**: antes de actuar, asegúrate de que tú y el accidentado estáis fuera de peligro. En un ambiente tóxico no se entra sin proteger las vías respiratorias.
- **Avisar**: lugar, lesiones y número de accidentados. Si es una intoxicación, el nombre del producto.
- **Socorrer**: conciencia, respiración y pulso, por ese orden.

| Vía | Qué hacer (manual de socorrismo laboral del INSST) |
|---|---|
| Piel y ojos | Lavar con abundante agua 15 o 20 minutos como mínimo, con la ducha de seguridad si la hay. Si es polvo, cepillar antes de lavar |
| Inhalación | Protegerse antes de acercarse, no entrar solo, llevar al afectado a un lugar ventilado |
| Ingestión | Identificar el producto y llamar al 112. No provocar el vómito si ha tragado cáusticos o disolventes, ni si está inconsciente |

Para los ojos, la NTP 500 habla de 20 minutos como tiempo habitual. La sección 4 de la FDS da los primeros auxilios por cada vía y dice si hace falta atención médica inmediata.

### Accidentes graves: las plantas Seveso
El Real Decreto 840/2015 aplica en España la directiva europea conocida como Seveso III. Su objeto es prevenir los accidentes graves con sustancias peligrosas y limitar sus consecuencias. Un accidente grave es una fuga, vertido, incendio o explosión importantes, fruto de un proceso no controlado, con riesgo grave para personas, bienes o medio ambiente, dentro o fuera de la fábrica.

La norma afecta a los establecimientos que superan las cantidades de su anexo I, en dos escalones: nivel inferior y nivel superior. Todos deben tener una política de prevención de accidentes graves y un plan de emergencia interior, revisado al menos cada tres años. Los de nivel superior, además, un informe de seguridad.

### Parte 3. Residuos: qué son
La Ley 7/2022 (artículo 2) define **residuo** (*waste*) como cualquier sustancia u objeto que su poseedor deseche o tenga la intención o la obligación de desechar. Es **residuo peligroso** (*hazardous waste*) el que presenta alguna característica de peligrosidad del anexo I (inflamable, tóxico, corrosivo, ecotóxico). También lo son los envases con restos de sustancias peligrosas. Un bidón «vacío» de tolueno sin limpiar es residuo peligroso.

### La jerarquía de residuos
El artículo 8 fija un orden de prioridad. Cuanto más arriba, mejor:

| Escalón | Ejemplo de planta |
|---|---|
| 1. Prevención | Ajustar la carga de disolvente para no generar aguas madre de más |
| 2. Preparación para la reutilización | Contenedores que un gestor comprueba y limpia para volver a usarse |
| 3. Reciclado | Destilar el disolvente usado para volver a tener disolvente (operación R02, recuperación o regeneración de disolventes) |
| 4. Otro tipo de valorización | Usar un residuo de destilación como combustible para producir energía |
| 5. Eliminación | Incinerar sin aprovechar la energía (operación D10) |

### Lo que la ley exige y tú ves
El artículo 21 obliga al productor a:

- Tener una **zona identificada**. Para residuos peligrosos, protegida de la intemperie y con retención de derrames.
- **No mezclar ni diluir** residuos peligrosos con otros residuos, sustancias o materiales.
- **Envasar y etiquetar**. La etiqueta, de 10 × 10 cm como mínimo, lleva el código y la descripción del residuo, sus características de peligrosidad, los datos del productor, los pictogramas y la fecha de inicio del depósito.
- **No pasar de seis meses** de almacenamiento, contados desde esa fecha. Solo la comunidad autónoma puede ampliar el plazo, como máximo otros seis meses.

Y el artículo 20, a entregarlos a un gestor autorizado y acreditarlo con documentos. Todo traslado va con su documento de identificación (artículo 31).

**Cálculo 3.** Un bidón de residuo lleva fecha de inicio 10 de marzo de 2026. Seis meses después es el 10 de septiembre de 2026: 184 días. Ese día tiene que haber salido ya.

### Los códigos LER
Cada residuo tiene un código de la **Lista Europea de Residuos** (*European List of Waste*), de seis cifras en tres parejas: capítulo, subcapítulo y residuo. El asterisco marca los peligrosos. En 07 05 04*, 07 es «residuos de procesos químicos orgánicos» y 07 05, los de productos farmacéuticos.

| Código | Residuo |
|---|---|
| 07 05 01* | Líquidos de limpieza y licores madre acuosos |
| 07 05 03* | Disolventes, líquidos de limpieza y licores madre organohalogenados |
| 07 05 04* | Otros disolventes, líquidos de limpieza y licores madre orgánicos |
| 15 01 10* | Envases que contienen restos de sustancias peligrosas |
| 15 02 02* | Absorbentes, trapos de limpieza y ropas protectoras contaminados |

### Segregar en la práctica
Los códigos explican los contenedores: halogenados (07 05 03*) aparte de no halogenados (07 05 04*), acuosos (07 05 01*), sólidos contaminados y envases vacíos. Se separan por tres razones: la ley prohíbe mezclarlos, dos residuos incompatibles reaccionan en el bidón igual que dos productos y un disolvente sin mezclar se puede recuperar.

### Aire y agua
Los disolventes que se evaporan son **compuestos orgánicos volátiles** (COV; *volatile organic compounds*). El Real Decreto 117/2003 los define por su presión de vapor (0,01 kPa o más a 293,15 K, es decir, 20 °C). Se aplica a la fabricación de productos farmacéuticos que consuma más de 50 toneladas de disolvente al año. El anexo II limita los gases de salida a 20 mg de carbono por metro cúbico normal. La emisión total no puede pasar del 5 % del disolvente que entra en instalaciones nuevas y del 15 % en las existentes. **Cálculo 4.** Con 400 toneladas al año, el 5 % son 20 toneladas. Cada venteo sin condensar cuenta.

Ese decreto solo trata del aire. Para el agua, la Ley de Aguas (artículo 100) prohíbe con carácter general verter aguas y productos residuales que puedan contaminar, salvo autorización. Por eso nada va al sumidero sin autorización.

Esta lección sirve para entender por qué las cosas están como están. En planta mandan siempre el procedimiento vigente (SOP), el plan de emergencia de tu empresa y la ficha de datos de seguridad de cada producto.
`,
  plant: `
Turno de tarde en el almacén de una planta ficticia de principios activos. Marta, operadora, recibe un palé con cuatro bidones de 200 L de tolueno para el intermedio ficticio KV-22. Mira la etiqueta (llama, H225) y los lleva al sector de inflamables, sobre un palé-cubeto. La placa del cubeto dice 250 L: cubre el bidón mayor (200 L) y supera el 10 % del total (80 L). Quedaba un hueco junto al agua oxigenada concentrada. No lo usa: es un comburente y va en otra zona.

Al subir el último bidón, la horquilla de la carretilla perfora la chapa. Sale un hilo de tolueno que cae al cubeto. Marta sigue el orden PAS. Proteger: se aparta, para la carretilla y comprueba que no hay nada encendido cerca. Avisar: llama al jefe de turno, Íker, y dice dónde, qué producto y que no hay heridos. Es un conato: se puede dominar con los medios del sitio.

Con el equipo de la sección 8 de la ficha, Íker y ella meten el bidón dañado en el bidón de socorro del kit, tapan el sumidero cercano con el obturador y absorben lo caído. Un extintor de polvo ABC queda a mano, sin usar.

El absorbente va a un bidón de sólidos contaminados, con su etiqueta: código LER 15 02 02*, pictograma de llama y fecha de inicio de hoy. Íker abre el parte de incidente. El bidón dañado queda apartado e identificado hasta que el responsable decida su destino.
`,
  batchRecord: `
En la hoja de producción (*batch record*) y en los registros que la acompañan verás y anotarás:

- **Materiales**: código, lote y cantidad de cada bidón que sacas del almacén. Si un envase llega dañado o sin etiqueta, no se usa: se anota y se avisa.
- **Destino de cada corriente**: la hoja indica adónde va cada agua madre, lavado o destilado («a residuo halogenado», «a residuo no halogenado», «a recuperación»). Tú anotas el destino real, la cantidad y el contenedor.
- **Etiqueta del residuo**: código LER y descripción, características de peligrosidad, pictogramas, datos del productor y fecha en la que se inicia el depósito. La fecha es la del primer vertido en el envase, no la del día en que se llena.
- **Registro de residuos**: cada bidón que pasa a la zona de residuos, con su fecha de inicio. De ahí sale el control de los seis meses y el archivo cronológico de la empresa.
- **Salida**: el documento de identificación acompaña al traslado al gestor autorizado. Lo prepara el departamento responsable; tú puedes tener que comprobar bultos y etiquetas.
- **Parte de incidente**: hora, lugar, producto, cantidad estimada, qué se hizo, quién fue avisado y adónde fue el absorbente. Un vertido durante un lote se anota también en la hoja, en observaciones, y puede abrir una desviación.
- **Comprobaciones periódicas**: prueba semanal de duchas y lavaojos, estado de los cubetos (vacíos y limpios), extintores en su sitio. Se firma lo que se ha comprobado de verdad.

Nunca se anota «sin incidencias» por costumbre. Si hubo un goteo, se escribe.
`,
  terms: [
    { es: "Incompatibilidad", en: "Incompatibility", def: "Situación en la que dos productos, al mezclarse, reaccionan de forma violenta, con calor o con gases inflamables o tóxicos. Obliga a guardarlos separados." },
    { es: "Instrucción técnica complementaria (ITC MIE APQ)", en: "Complementary technical instruction", def: "Cada una de las normas de detalle del Reglamento de almacenamiento de productos químicos; por ejemplo, la APQ-10 para recipientes móviles." },
    { es: "Cubeto de retención", en: "Bund / spill containment", def: "Cavidad capaz de retener el producto de los recipientes si hay un vertido o una fuga." },
    { es: "Recipiente móvil", en: "Portable container", def: "Recipiente de hasta 3000 litros que se puede trasladar de lugar: bidones, garrafas, contenedores." },
    { es: "Comburente", en: "Oxidiser", def: "Producto que aporta oxígeno y aviva un fuego. No se almacena junto a líquidos inflamables." },
    { es: "Agente extintor", en: "Extinguishing agent", def: "Sustancia que apaga el fuego: agua, espuma, polvo o dióxido de carbono. Cada uno sirve para unas clases de fuego." },
    { es: "Conato de emergencia", en: "Incipient emergency", def: "Situación de poca gravedad que se neutraliza con los medios y las personas del propio lugar de trabajo." },
    { es: "Plan de autoprotección", en: "Emergency plan / self-protection plan", def: "Documento con la organización, los medios y los procedimientos para prevenir y responder a las emergencias." },
    { es: "Punto de reunión", en: "Assembly point", def: "Lugar señalizado donde se concentra el personal al evacuar y donde se hace el recuento." },
    { es: "Proteger, avisar, socorrer (PAS)", en: "Protect, alert, assist", def: "Orden de actuación ante un accidentado: primero la seguridad, después la llamada y por último el auxilio." },
    { es: "Residuo peligroso", en: "Hazardous waste", def: "Residuo con alguna característica de peligrosidad del anexo I de la Ley 7/2022; incluye los envases con restos de sustancias peligrosas." },
    { es: "Jerarquía de residuos", en: "Waste hierarchy", def: "Orden de prioridad legal: prevención, preparación para la reutilización, reciclado, otro tipo de valorización y eliminación." },
    { es: "Lista Europea de Residuos (LER)", en: "European List of Waste (LoW)", def: "Lista que da a cada residuo un código de seis cifras; el asterisco marca los peligrosos." },
    { es: "Compuestos orgánicos volátiles (COV)", en: "Volatile organic compounds (VOC)", def: "Compuestos orgánicos que se evaporan con facilidad, como los disolventes. Sus emisiones al aire están limitadas." },
  ],
  quiz: [
    {
      kind: "number",
      q: "Un cubeto recoge 6 bidones de 200 L y 1 contenedor de 1000 L. Según la MIE APQ-10, ¿qué capacidad mínima de retención necesita?",
      answer: 1000,
      tolerance: 0.001,
      unit: "L",
      explain: "Total: 6 × 200 + 1000 = 2200 L; el 10 % son 220 L. El recipiente mayor tiene 1000 L. Se toma el mayor de los dos valores: 1000 L.",
    },
    {
      kind: "number",
      q: "Una estantería con suelo de retención guarda 60 bidones de 200 L. ¿Qué capacidad mínima de retención exige la MIE APQ-10?",
      answer: 1200,
      tolerance: 0.001,
      unit: "L",
      explain: "Total: 60 × 200 = 12 000 L; el 10 % son 1200 L. El recipiente mayor tiene 200 L. Manda el mayor de los dos valores: 1200 L.",
    },
    {
      kind: "choice",
      q: "Tienes que colocar un bidón de ácido clorhídrico. Queda un hueco en el cubeto de la sosa cáustica. ¿Qué haces?",
      options: [
        "Lo coloco ahí: los dos son corrosivos y comparten pictograma",
        "Lo coloco ahí si el cubeto tiene capacidad para los dos",
        "Lo llevo a otro cubeto: ácido y base reaccionan con violencia",
        "Lo dejo en el pasillo hasta que alguien decida dónde va",
      ],
      answer: 2,
      explain: "Ácidos fuertes y bases fuertes son incompatibles. La MIE APQ-10 exige, como mínimo, cubetos de retención separados; y nada se almacena en zonas de tránsito.",
    },
    {
      kind: "choice",
      q: "Ves una señal redonda, con fondo azul y un pictograma blanco de unas gafas. ¿Qué significa?",
      options: [
        "Es una obligación: hay que usar gafas en esa zona",
        "Es una advertencia: hay riesgo de salpicaduras",
        "Es una prohibición: no se puede entrar con gafas",
        "Es de salvamento: indica dónde está el lavaojos",
      ],
      answer: 0,
      explain: "Según el Real Decreto 485/1997, redonda con pictograma blanco sobre fondo azul es señal de obligación. La advertencia es triangular y amarilla; el salvamento, verde.",
    },
    {
      kind: "choice",
      q: "Arde un pequeño charco de disolvente junto a un cuadro eléctrico con tensión. ¿Qué agente extintor no debes usar?",
      options: [
        "Polvo ABC de un extintor apto para tensión eléctrica",
        "Agua a chorro de la manguera más cercana al cuadro",
        "Dióxido de carbono de un extintor con boquilla aislada",
        "Polvo BC de un extintor apto para tensión eléctrica",
      ],
      answer: 1,
      explain: "La tabla de la NTP 536 no recoge el agua a chorro para fuegos de líquidos (el chorro puede derramar el líquido ardiendo) y, con corriente eléctrica, no acepta ni el agua a chorro ni la espuma.",
    },
    {
      kind: "choice",
      q: "Vas a usar un extintor de polvo sobre un conato. ¿Hacia dónde diriges el chorro?",
      options: [
        "A la parte alta de las llamas, que es donde más calor hay",
        "Al humo, para poder ver bien dónde está el fuego",
        "Al techo, para que el polvo caiga sobre toda la zona",
        "A la base de las llamas, con un movimiento de barrido",
      ],
      answer: 3,
      explain: "La NTP 536 indica dirigir el chorro a la base de las llamas con movimiento de barrido, acercándose hasta dejar como mínimo un metro.",
    },
    {
      kind: "choice",
      q: "Un compañero recibe una salpicadura de sosa en la cara. Aplicando el orden PAS, ¿qué va primero?",
      options: [
        "Buscar la ficha de datos de seguridad en el ordenador",
        "Llamar al 112 y esperar instrucciones sin tocarlo",
        "Asegurarme de que ni él ni yo seguimos en peligro",
        "Darle agua para beber y sentarlo lejos de la zona",
      ],
      answer: 2,
      explain: "PAS es proteger, avisar y socorrer, en ese orden. Una vez sin peligro y dado el aviso, se lava con abundante agua 15 o 20 minutos como mínimo, usando la ducha o el lavaojos.",
    },
    {
      kind: "number",
      q: "Un bidón de residuo peligroso lleva en la etiqueta la fecha de inicio 14 de enero. Hoy es 14 de mayo. Sin ampliación del plazo, ¿cuántos meses le quedan como máximo en la planta?",
      answer: 2,
      tolerance: 0.001,
      unit: "meses",
      explain: "El artículo 21 de la Ley 7/2022 fija seis meses desde el inicio del depósito: hasta el 14 de julio. Han pasado cuatro; quedan 2 meses.",
    },
    {
      kind: "choice",
      q: "Tras un lavado te sobran 30 L de diclorometano sucio. El bidón de «disolvente no halogenado» está al lado y casi vacío. ¿Qué haces?",
      options: [
        "Lo echo ahí: los dos son disolventes orgánicos usados",
        "Lo llevo al envase de residuo halogenado y lo anoto",
        "Lo diluyo con agua y lo vierto poco a poco al sumidero",
        "Lo dejo en un cubo abierto para que se evapore solo",
      ],
      answer: 1,
      explain: "El diclorometano lleva cloro: es organohalogenado (LER 07 05 03*). La ley prohíbe mezclar o diluir residuos peligrosos, verter sin autorización y dejarlo evaporar es emitir compuestos orgánicos volátiles.",
    },
    {
      kind: "number",
      q: "Una planta farmacéutica nueva consume 250 toneladas de disolvente al año. Con el límite de emisión total del 5 % del Real Decreto 117/2003, ¿cuántas toneladas puede emitir como máximo?",
      answer: 12.5,
      tolerance: 0.01,
      unit: "t/año",
      explain: "El 5 % de 250 toneladas es 250 × 0,05 = 12,5 toneladas al año. En una instalación existente el límite sería el 15 %: 37,5 toneladas.",
    },
  ],
};
