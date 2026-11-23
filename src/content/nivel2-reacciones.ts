import type { Lesson } from "./types";

export const reaccionesEnApiAFondo: Lesson = {
  slug: "reacciones-en-api-a-fondo",
  level: 2,
  order: 14.5,
  title: "Reacciones en la fabricación de API a fondo: tipos, etapas y seguridad de reacción",
  titleEn: "Reactions in API manufacturing in depth",
  minutes: 40,
  summary:
    "Cómo se fabrica un principio activo en varias etapas desde su material de partida según ICH Q7 y Q11, qué hace y qué riesgo tiene cada tipo de reacción habitual, por qué una reacción se desboca (diagrama de Semenov y temperatura sin retorno), un cálculo de aumento adiabático y de la temperatura máxima que puede alcanzar la reacción, dos accidentes reales de la NTP 529, los gases y el venteo, y qué controla y anota el operador.",
  body: `
En «Tipos de reacción habituales en API» viste el mapa de las reacciones. Aquí verás **dónde encaja cada una en el camino hasta el principio activo**, qué peligro trae y **por qué una reacción que va bien puede desbocarse**. Las cuentas de calor están en «Calor de reacción a fondo» y la velocidad en «Velocidad de reacción a fondo». Productos, equipos y lo marcado como «valor de ejemplo» son inventados.

### Un principio activo no se hace de una vez
Un **principio activo farmacéutico** (*active pharmaceutical ingredient*, API) casi nunca sale de una sola reacción. Se construye como un mueble de montar, pieza a pieza, en **etapas** (*steps*).

La guía **ICH Q7** de buenas prácticas de fabricación (*good manufacturing practice*, GMP) para principios activos define tres piezas clave:

| Término | En inglés | Definición de ICH Q7, en palabras sencillas |
|---|---|---|
| Material de partida del API | *API starting material* | Materia prima, intermedio o API que se usa para fabricar el API y que **queda dentro de su estructura como un fragmento importante**. Puede comprarse o fabricarse en casa; normalmente tiene propiedades químicas y estructura definidas |
| Intermedio | *Intermediate* | Material que sale de las etapas del proceso y que todavía sufre un cambio molecular o una purificación antes de ser API. Puede aislarse o no |
| Materia prima | *Raw material* | Término general para materiales de partida, reactivos y disolventes |

La guía **ICH Q11** aclara que «fragmento importante» sirve para distinguir los materiales de partida de los reactivos y disolventes, y que los productos corrientes usados para hacer **sales**, ésteres u otros derivados sencillos son **reactivos**. Si el API es una casa, el material de partida es un muro que ya viene hecho; el ácido que forma la sal es la pintura.

**Dónde empieza la GMP.** ICH Q7 pide que la empresa justifique por escrito dónde empieza la producción del API: en síntesis química, en la entrada del material de partida. Desde ahí se aplica la guía, y **la exigencia aumenta según avanza el proceso** hasta la purificación y el envasado. ICH Q11 explica por qué: una impureza que aparece pronto tiene más ocasiones de eliminarse en los lavados y cristalizaciones de los intermedios, y las propiedades físicas del API se deciden en la **última cristalización** y lo que sigue, como la molienda. En un **proceso convergente**, con dos ramas que se unen, cada rama empieza con su material de partida y la GMP se aplica a cada una desde ahí.

**Una ruta de ejemplo (ficticia).** El API ficticio LZ-90 se fabrica así:

| Etapa | Qué entra | Reacción | Qué sale |
|---|---|---|---|
| 1 | Material de partida MP-11 y cloruro de ácido AC-7 | Formación de amida | Intermedio LZ-1 (aislado) |
| 2 | LZ-1 e hidrógeno con Pd/C | Hidrogenación catalítica | Intermedio LZ-2 (no aislado) |
| 3 | LZ-2 y material de partida MP-12 (la otra rama) | Acoplamiento con paladio | LZ-90 base bruto |
| 4 | LZ-90 base y ácido clorhídrico | Formación de sal y cristalización | LZ-90 clorhidrato (API) |

Cómo se multiplican los rendimientos de varias etapas lo tienes en «Estequiometría a fondo».

### Los tipos de reacción, uno a uno
No necesitas saber dibujar mecanismos. Necesitas saber **qué hace cada reacción, qué suelta y qué la estropea**.

**1. Acilación y formación de amidas** (*acylation, amide formation*). Una **amida** es la unión de un ácido con una amina, dos grupos que viste en «Grupos funcionales a fondo». El ácido solo reacciona despacio, así que se «activa» convirtiéndolo en un **cloruro de ácido** (*acid chloride*) o en un **anhídrido** (*anhydride*). Con un cloruro de ácido, por cada enlace de amida que se forma se libera una molécula de cloruro de hidrógeno (HCl):

> Cloruro de ácido + amina da amida + HCl

Ese HCl sale como gas o lo neutraliza una base, y esa neutralización también da calor. Su clasificación según el Reglamento CLP de clasificación y etiquetado (anexo VI, texto de 2008; las adaptaciones posteriores del reglamento pueden haber cambiado alguna, así que en planta manda la ficha de datos de seguridad vigente):

| Reactivo | Clasificación que interesa al operador |
|---|---|
| Cloruro de acetilo | H225 líquido muy inflamable; H314 quemaduras graves; EUH014 «Reacciona violentamente con el agua» (el propio CLP lo pone como ejemplo de esa frase) |
| Cloruro de tionilo, usado para fabricar cloruros de ácido | H314; EUH014; EUH029 «En contacto con agua libera gases tóxicos» |
| Anhídrido acético | H226 inflamable; H314 quemaduras graves; H332 y H302 nocivo por inhalación y por ingestión |
| Cloruro de hidrógeno gas | H331 tóxico en caso de inhalación; H314 quemaduras graves |

La NTP 479 del Instituto Nacional de Seguridad y Salud en el Trabajo (INSST) pone anhídridos y halogenuros de ácido entre las sustancias que reaccionan fuertemente con el agua, e ICH M7 cita el cloruro de tionilo como reactivo mutagénico que reacciona al instante con el agua. **Riesgo típico**: gas corrosivo, exotermia y reacción con la humedad.

**2. Hidrogenación catalítica** (*catalytic hydrogenation*). Añade hidrógeno sobre un catalizador como el paladio sobre carbón (Pd/C). El hidrógeno inflamable, el catalizador pirofórico y las purgas están en «Oxidación y reducción a fondo». **Riesgo típico**: hidrógeno inflamable y catalizador que arde al aire.

**3. Organometálicos e hidruros** (*organometallics, hydrides*). Un metal (magnesio, litio) unido a carbono, como los reactivos de **Grignard** (*Grignard reagents*), o hidruros como el de sodio. Forman enlaces carbono-carbono y su enemigo es el agua. La NTP 1229 del INSST (2026), sobre reacciones peligrosas con el agua, da dos ejemplos: el **bromuro de etilmagnesio**, que con el agua da **etano** y se recomienda manejar en atmósfera inerte, y el **terc-butillitio**, que da **isobutano**. El CLP clasifica ambos gases como inflamables de categoría 1 (H220), y el litio, el n-hexillitio y el hidruro de sodio llevan H260 «En contacto con el agua desprende gases inflamables que pueden inflamarse espontáneamente». Basta la humedad del aire, avisa la NTP 1229.

Los Grignard tienen además un riesgo propio, que solo se ha visto en resúmenes de la literatura de seguridad: a veces la reacción **tarda en arrancar**, y si se sigue añadiendo, el reactivo se acumula y reacciona de golpe. **Riesgo típico**: reacción con el agua, gas inflamable y arranque retrasado.

**4. Oxidaciones** (*oxidations*). Añaden oxígeno o quitan hidrógeno, por ejemplo con peróxido de hidrógeno. Sus incompatibilidades con los disolventes están en «Oxidación y reducción a fondo». **Riesgo típico**: exotermia, descomposición del oxidante con gas oxígeno y mezcla con disolventes inflamables.

**5. Reacciones de acoplamiento** (*coupling reactions*). Unen dos fragmentos grandes, a menudo con paladio: es la etapa 3 de LZ-90. Se hacen bajo nitrógeno, con disolventes inflamables («Inertización a fondo»). Lo propio es el **metal residual**: ICH Q3D pone el paladio en la clase 2B, con una exposición diaria permitida (*permitted daily exposure*, PDE) oral de 100 µg al día, y exige evaluarlo cuando se añade a propósito («Átomos y tabla periódica a fondo»). **Riesgo típico**: atmósfera inflamable y metal que se arrastra al producto.

**6. Formación de sales** (*salt formation*). Une el API con un ácido o una base. Es una neutralización y da calor. Suele ir unida a la **cristalización final** («Cristalización a fondo»). **Riesgo típico**: exotermia al añadir el ácido y, si se usa HCl gas, un gas tóxico.

**7. Desprotecciones que sueltan gas**. Un **grupo protector** (*protecting group*) tapa una parte de la molécula para que no reaccione y luego se quita. El grupo **Boc** (*tert-butoxycarbonyl*) se quita con ácido y cada grupo libera una molécula de **dióxido de carbono** y una de **isobuteno**: 2 moles de gas por mol, según la ecuación ajustada. El CLP clasifica el isobuteno (2-metilpropeno) como gas inflamable de categoría 1 (H220). **Riesgo típico**: gas, presión y gas inflamable en el venteo.

### Por qué una reacción se desboca: el diagrama de Semenov en números
Según la NTP 527 del INSST, el autocalentamiento de una reacción **aumenta exponencialmente con la temperatura** y la eliminación de calor **solo de forma lineal**. Para verlo usa la **gráfica de Semenov** (*Semenov diagram*), para una masa bien agitada.

**Valores de ejemplo.** Una reacción a 60 °C da 20 kW. La camisa retira U × A × ΔT («El reactor a fondo»), con U × A = 4 kW por grado, y el fluido de camisa está a 55 °C. La reacción se acelera según Arrhenius, con una energía de activación de 70 kJ/mol, y se supone, como en la NTP, que el reactivo no se gasta (orden cero).

| Masa (°C) | Calor que genera la reacción (kW) | Calor que retira la camisa (kW) | Qué pasa |
|---|---|---|---|
| 55 | 13,6 | 0 | Genera más: la masa sube hasta 60 |
| 60 | 20,0 | 20,0 | Equilibrio estable |
| 70 | 41,8 | 60 | Retira más: vuelve a 60 |
| 80 | 83,7 | 100 | Retira más: vuelve a 60 |
| 85 | 116,7 | 120 | Todavía retira más, por poco |
| 90 | 161,3 | 140 | Genera más: ya no vuelve |

La NTP 527 llama a esos dos cruces punto C y punto D. En **C** (aquí, 60 °C) la operación es estable: si la masa se aparta un poco, vuelve. **D** (aquí, unos 85,9 °C) también es un equilibrio, pero inestable: un poco por debajo, la masa vuelve a C; un poco por encima, el descontrol es **irreversible**. La nota lo llama **temperatura sin retorno** (*temperature of no return*).

¿Qué mueve la línea de la camisa? Su **inclinación** la marca U × A, que baja si se ensucia la pared o si **falla la agitación**, como cita la NTP 527. Su **punto de partida** es la temperatura del fluido de camisa: en el ejemplo, si llega a unos **60,2 °C**, solo 5,2 °C más caliente, la línea ya no corta a la curva y no queda ningún punto estable. Una alarma de agua de refrigeración caliente no es un detalle.

### Aumento adiabático y MTSR: un caso nuevo
La fórmula de «Calor de reacción a fondo», escrita por kilo de reactivo:

> ΔTad = (calor por kg de reactivo × kg de reactivo) / (masa total × cp)

**Valores de ejemplo.** Se dosifican 500 kg de reactivo RX-9 sobre 2500 kg de mezcla en tolueno a 80 °C. Cada kilo de RX-9 libera 700 kJ y la mezcla tiene cp = 1,8 kJ/(kg·K).

- Calor total: 500 × 700 = **350 000 kJ**.
- Masa total al final: 2500 + 500 = 3000 kg.
- ΔTad = 350 000 / (3000 × 1,8) = **64,8 °C**.

La **temperatura máxima de la reacción de síntesis** (*maximum temperature of the synthesis reaction*, MTSR) es la temperatura de proceso más el aumento que daría el reactivo acumulado:

| Situación | Acumulación | MTSR | Comparación |
|---|---|---|---|
| Adición normal (dato del laboratorio) | 30 % | 80 + 64,8 × 0,30 = **99,4 °C** | Por debajo de la ebullición del tolueno (111 °C) |
| Agitador parado y adición sin cortar | 80 % | 80 + 64,8 × 0,80 = **131,8 °C** | Pasa de la ebullición: hierve, sube la presión |
| Todo cargado de golpe sin reaccionar | 100 % | 80 + 64,8 = **144,8 °C** | Si el DSC de la mezcla diera, por ejemplo, una descomposición desde 150 °C, el margen sería mínimo |

Lo que el operador controla de esa tabla es **la acumulación**: la velocidad de adición, la temperatura mínima y la agitación.

### Cómo se estudia antes de fabricar
Según la NTP 527, como un pequeño error de cálculo puede ser muy grave, se hacen ensayos con calorímetros: el **análisis térmico diferencial** (*differential thermal analysis*, DTA), la **calorimetría diferencial de barrido** (*differential scanning calorimetry*, DSC), la **calorimetría de reacción adiabática** (*adiabatic reaction calorimetry*, ARC) o el SEDEX (*sensitive detector of exothermic process*), un detector sensible de procesos exotérmicos. La NTP pide conocer cómo se libera el calor según la temperatura y la conversión: lo mide el **calorímetro de reacción** (*reaction calorimeter*), que reproduce la adición. El DSC, en «Punto de fusión y análisis térmico a fondo».

La NTP 527 avisa también de los **cambios pequeños**: un catalizador distinto puede aumentar mucho la velocidad, y un reactor de otro acero puede provocar una descomposición violenta por trazas de hierro. Por eso no se cambia nada sin control de cambios.

### Dos accidentes reales de la NTP 529
La NTP 529 analizó 48 accidentes por pérdida de control de reacción del sistema europeo de notificación de accidentes graves (*Major Accident Reporting System*, MARS): el **error humano de procedimiento** aparece en el 35,4 %, las **impurezas** en el 12,5 % y la **entrada de agua** en el 4,2 % (una causa no excluye otra). Dos de sus casos:

**β-picolina y ácido sulfúrico.** Materias primas para antibióticos. La reacción se agitaba con aire comprimido; sin él, la β-picolina, extremadamente inflamable y menos densa, queda en una capa arriba sin reaccionar. Un turno de noche nadie notó que el aire no llegaba a un reactor. Al calentar, la β-picolina se evaporó, rompió una junta de la salida de gases y se inflamó. Murieron los dos operarios. No había control del flujo de aire ni procedimiento escrito.

**Óxido de etileno y glicerol.** Una reacción que solo va entre 115 y 125 °C. El operario olvidó abrir la válvula de salida del reactor, y el indicador de caudal y su alarma estaban desconectados. El óxido de etileno no reaccionaba y subió la presión. Creyendo que fallaba el regulador, **subió la consigna** sin autorización; al ver el error abrió la válvula, pasaron de golpe tres toneladas y el reactor explotó, con dos heridos graves. Conclusión de la NTP: ninguna modificación se hace sin autorización.

Los dos casos tienen lo mismo dentro: **reactivo que entra y no reacciona**, y una señal que nadie vio o que estaba apagada.

### Gases y venteo
HCl en las amidas, CO₂ e isobuteno en las desprotecciones, etano o hidrógeno si un organometálico o un hidruro toca agua. La NTP 527 pide conocer la velocidad de desprendimiento de gases, normal y anormal, para que el venteo sea suficiente.

**Valores de ejemplo.** Se desprotegen 0,8 kmol de un intermedio con grupo Boc. Salen 0,8 kmol de CO₂ y 0,8 kmol de isobuteno: 1,6 kmol de gas. A 25 °C y presión atmosférica, un kilomol de gas ocupa unos 24,5 m³ («El mol a fondo»): 1,6 × 24,5 = **39,2 m³**. Si el ácido se añade en 2 horas y el gas sale según entra, son unos **19,6 m³/h** hacia el venteo. En estas reacciones **la bomba de adición controla el gas** igual que el calor.

Si el gas no sale, sube la presión. Cuando todo falla, la NTP 527 cita como protección el alivio de presión, la despresurización, el inhibidor y el vertido a un recipiente con diluyente frío («Alarmas, enclavamientos y sistemas de seguridad a fondo»).

### Qué hace el operador para que la reacción vaya bien
1. **El reactivo correcto, en la cantidad correcta y en su momento.** La NTP 527 avisa del reactivo erróneo, la cantidad equivocada y el producto correcto en el momento equivocado, y de que las adiciones manuales son mucho más inseguras que las automatizadas.
2. **El orden y la velocidad de adición** de la hoja, nunca más rápida.
3. **La temperatura, dentro de su mínimo y su máximo.** Por arriba se acerca a la temperatura sin retorno; por abajo, acumula.
4. **La agitación.** La NTP 527 pide que la adición se corte si falla el agitador.
5. **Equipo seco e inerte** antes de organometálicos, hidruros, cloruros de ácido y catalizadores («Inertización a fondo»).
6. **Venteo libre** y lavador de gases en marcha si la hoja lo pide.
7. **El control en proceso** (*in-process control*, IPC). ICH Q7 (8.30 a 8.33) pide controles con criterios definidos y que todos los resultados queden en la hoja. Si el IPC dice que la etapa no ha terminado, seguir la etapa según la hoja es parte del proceso normal (ICH Q7, 14.21); en cambio, volver a meter material sin reaccionar y repetir una reacción es **reproceso** (ICH Q7, 14.22) y necesita una evaluación previa.
8. **No tocar consignas ni alarmas por tu cuenta.** Lo dice el accidente del glicerol.

Ante cualquier señal de reactivo que no reacciona (la masa no se calienta, no sale el gas esperado, no se consume el hidrógeno): **parar la adición, mantener agitación y frío, y avisar**.

En planta manda siempre el procedimiento vigente (SOP) y la hoja de producción de cada lote.
`,
  plant: `
Turno de tarde, etapa 1 del API ficticio LZ-90 en el reactor vitrificado R-204. La hoja dice: *«Reactor seco e inertizado, O₂ ≤ 2,0 %. Cargar tolueno y MP-11 y la base TB-2. Adicionar 380 kg de cloruro de ácido AC-7 con la bomba P-205 en no menos de 3 h, masa entre 15 y 25 °C, agitación 110 rpm. Venteo abierto al lavador LV-210 en marcha. IPC a la hora del fin de adición: MP-11 ≤ 1,0 %.»*

Antes de empezar compruebas el lote del AC-7 con la etiqueta y lo anotas con la segunda firma. El lavador LV-210 marca caudal de recirculación normal.

Arrancas la P-205. La masa sube de 18 a 21 °C y la camisa baja para compensar: la reacción da calor según entra, como debe. A los 50 minutos salta la alarma de agitador: 0 rpm, disparo del motor. El enclavamiento ha parado la P-205, pero tú lo compruebas en pantalla y cierras además la válvula manual de adición, como dice la hoja. Anotas: 128 kg añadidos, masa 21 °C, hora.

No rearmas el agitador. Sabes por la NTP 527 que, si la mezcla se ha separado en capas, al volver a agitar puede reaccionar de golpe todo lo que no ha reaccionado. Avisas a la jefa de turno.

Mantenimiento encuentra un relé disparado. La jefa de turno pide una muestra antes de rearrancar: el reactivo sin reaccionar es bajo. Con su autorización y como marca el procedimiento para ese caso, rearrancas el agitador con la camisa al máximo de frío; la masa sube solo 1 °C. Reanudas la adición al caudal de la hoja. El IPC final da MP-11 = 0,4 %. Se abre una desviación con todo lo que anotaste.
`,
  batchRecord: `
En la hoja de producción (*batch record*) de una etapa de síntesis verás, además de las cargas, casillas para lo que hace segura la reacción. ICH Q7 (apartado 6.52) pide documentar en cada paso importante la fecha y la hora, el equipo principal usado, la identificación de cada lote de materia prima con su peso, los resultados reales de los parámetros críticos, los muestreos, las firmas de quien hace y quien supervisa cada paso crítico, los resultados de los controles en proceso, el rendimiento y cualquier desviación.

- **Etapa y tipo de reacción**, con sus avisos: «desprende gas», «reacciona con el agua», «exotérmica».
- **Comprobaciones previas**: reactor seco, oxígeno medido tras inertizar, venteo abierto, lavador en marcha, agitador probado.
- **Identidad, lote y peso** de cada reactivo, con hora y segunda firma en las pesadas críticas.
- **Orden de adición** realizado, con hora de inicio y fin de cada carga.
- **Adición dosificada**: caudal o cantidad por intervalo, total añadido, temperatura de masa y de camisa a los intervalos que pida la hoja.
- **Agitación**: rpm (y, si se muestra, consumo del motor) antes y durante la reacción.
- **Gas**: presión del reactor y, si la hoja lo pide, caudal de gas o consumo de hidrógeno.
- **Paradas de adición**: hora, cantidad añadida hasta ese momento, motivo y quién autorizó seguir.
- **IPC**: hora de la muestra, resultado real y decisión (continuar, mantener y repetir, avisar).
- **Desviaciones**: cualquier valor fuera de límite, anotado en el momento.
`,
  terms: [
    { es: "Principio activo farmacéutico", en: "Active pharmaceutical ingredient (API)", def: "Sustancia que da al medicamento su efecto. Se fabrica en una o varias etapas." },
    { es: "Material de partida del API", en: "API starting material", def: "Materia prima, intermedio o API que queda dentro de la estructura del API como un fragmento importante. Desde su entrada al proceso se aplica ICH Q7." },
    { es: "Intermedio", en: "Intermediate", def: "Material de una etapa que todavía sufrirá un cambio molecular o una purificación antes de ser API. Puede aislarse o no." },
    { es: "Reactivo", en: "Reagent", def: "Sustancia que participa en la reacción pero no queda como fragmento importante del API, como el ácido que forma una sal." },
    { es: "Proceso convergente", en: "Convergent process", def: "Ruta en la que dos ramas se fabrican por separado y se unen después. Cada rama empieza con su material de partida." },
    { es: "Cloruro de ácido", en: "Acid chloride", def: "Forma activada de un ácido que reacciona con aminas para dar amidas, liberando HCl. Reacciona violentamente con el agua." },
    { es: "Reactivo organometálico", en: "Organometallic reagent", def: "Compuesto con un metal unido a carbono, como un reactivo de Grignard. Con el agua da gases inflamables." },
    { es: "Grupo protector", en: "Protecting group", def: "Grupo que tapa una parte de la molécula y se quita después; quitar el Boc libera CO₂ e isobuteno." },
    { es: "Gráfica de Semenov", en: "Semenov diagram", def: "Dibujo del calor generado (curva exponencial) frente al calor retirado (recta) según la temperatura de la masa." },
    { es: "Temperatura sin retorno", en: "Temperature of no return", def: "Temperatura por encima de la cual el calor de reacción supera siempre al retirado y el descontrol es irreversible." },
    { es: "Temperatura máxima de la reacción de síntesis", en: "Maximum temperature of the synthesis reaction (MTSR)", def: "Temperatura de proceso más el aumento adiabático que daría el reactivo acumulado si reaccionara sin refrigeración." },
    { es: "Calorímetro de reacción", en: "Reaction calorimeter", def: "Reactor pequeño de laboratorio que reproduce la adición y mide el calor liberado y la acumulación." },
    { es: "Reproceso", en: "Reprocessing", def: "Volver a pasar material por una etapa del proceso. Repetir una reacción con material sin reaccionar lo es, salvo que esté en el proceso establecido." },
  ],
  quiz: [
    {
      kind: "choice",
      q: "En la ruta de un API, el ácido clorhídrico se usa en la última etapa para formar la sal. Según ICH Q11, ¿qué es ese ácido?",
      options: [
        "Un reactivo, porque es un producto corriente usado para formar una sal",
        "Un material de partida, porque entra en la última etapa del proceso",
        "Un intermedio, porque sale de una etapa anterior del mismo proceso",
        "Una ayuda de proceso, porque no reacciona con el principio activo",
      ],
      answer: 0,
      explain: "ICH Q11 dice que los productos químicos corrientes usados para formar sales, ésteres u otros derivados sencillos se consideran reactivos, no materiales de partida.",
    },
    {
      kind: "choice",
      q: "¿Desde qué punto se aplica la guía ICH Q7 en una síntesis química?",
      options: [
        "Desde la fabricación de cualquier materia prima de la ruta",
        "Solo en la última cristalización y en el envasado del API",
        "Desde la entrada del material de partida del API en el proceso",
        "Desde que el intermedio se aísla por primera vez en un filtro",
      ],
      answer: 2,
      explain: "ICH Q7 pide que la empresa justifique dónde empieza la producción del API; en síntesis química es la entrada del material de partida, y desde ahí se aplica la guía con exigencia creciente.",
    },
    {
      kind: "number",
      q: "Se dosifican 400 kg de un reactivo que libera 600 kJ por kg sobre una mezcla; la masa total al final es de 2400 kg y su cp es 2,0 kJ/(kg·K). ¿Cuál es el aumento adiabático de temperatura?",
      answer: 50,
      tolerance: 0.01,
      unit: "°C",
      explain: "Calor: 400 × 600 = 240000 kJ. ΔTad = 240000 / (2400 × 2,0) = 50 °C.",
    },
    {
      kind: "number",
      q: "Una reacción se dosifica a 70 °C con un aumento adiabático de 64,8 °C. Con el agitador parado se acumula el 80 % del reactivo. ¿Cuál es la MTSR?",
      answer: 121.84,
      tolerance: 0.01,
      unit: "°C",
      explain: "MTSR = 70 + 64,8 × 0,80 = 70 + 51,84 = 121,84 °C, por encima de la ebullición del tolueno.",
    },
    {
      kind: "number",
      q: "La camisa de un reactor retira U × A × ΔT con U × A = 4 kW por grado. El fluido está a 55 °C y la masa a 80 °C. ¿Cuánto calor retira?",
      answer: 100,
      tolerance: 0.01,
      unit: "kW",
      explain: "Calor retirado = 4 × (80 − 55) = 4 × 25 = 100 kW. Si la reacción diera más, la masa seguiría subiendo.",
    },
    {
      kind: "number",
      q: "Se desprotegen 0,5 kmol de grupos Boc y cada uno libera un CO₂ y un isobuteno. Si un kilomol de gas ocupa 24,5 m³, ¿qué volumen de gas sale?",
      answer: 24.5,
      tolerance: 0.01,
      unit: "m³",
      explain: "Gas: 0,5 + 0,5 = 1,0 kmol. Volumen: 1,0 × 24,5 = 24,5 m³, que debe poder salir por el venteo al ritmo de la adición.",
    },
    {
      kind: "number",
      q: "ICH Q3D da al paladio una PDE oral de 100 µg al día. Si la dosis máxima diaria del medicamento es de 2,5 g, ¿qué concentración máxima de paladio se permite?",
      answer: 40,
      tolerance: 0.01,
      unit: "µg/g",
      explain: "Concentración = PDE / dosis diaria = 100 / 2,5 = 40 µg/g, el mismo valor del ejemplo de ICH Q3D.",
    },
    {
      kind: "choice",
      q: "Vas a cargar una disolución de un reactivo de Grignard y ves que el reactor aún tiene agua del lavado en el fondo. ¿Qué haces?",
      options: [
        "Cargo despacio para que el agua se consuma poco a poco y sin calor",
        "Añado más disolvente para diluir el agua y luego cargo el reactivo",
        "Cargo y abro el venteo, porque el gas que se forme no es peligroso",
        "No cargo, aviso y se seca el equipo según la hoja antes de seguir",
      ],
      answer: 3,
      explain: "Con agua, el organometálico da calor y un gas inflamable, como el etano del bromuro de etilmagnesio según la NTP 1229. No se carga hasta que el equipo esté seco e inerte.",
    },
    {
      kind: "choice",
      q: "Durante la adición de un cloruro de ácido el agitador se dispara y se para. La masa no ha cambiado de temperatura. ¿Qué es lo correcto?",
      options: [
        "Rearmar el agitador enseguida para recuperar la mezcla y seguir",
        "Parar la adición, no rearmar sin autorización y avisar al responsable",
        "Seguir la adición más despacio, ya que la temperatura no ha subido",
        "Subir la consigna de camisa para que la reacción vaya más rápida",
      ],
      answer: 1,
      explain: "Sin agitación el reactivo se acumula y puede separarse en capas que reaccionan de golpe al volver a agitar, según la NTP 527. Se para la adición y se decide con el responsable cómo rearrancar.",
    },
    {
      kind: "choice",
      q: "El IPC dice que la reacción no ha terminado y la hoja prevé mantener una hora más y repetir el análisis. ¿Cómo lo trata ICH Q7?",
      options: [
        "Como un reproceso que necesita una evaluación previa de calidad",
        "Como un resultado fuera de especificación que hay que investigar",
        "Como parte del proceso normal: continuar la etapa según la hoja",
        "Como una desviación crítica que obliga a rechazar el lote entero",
      ],
      answer: 2,
      explain: "ICH Q7 (14.21) dice que continuar una etapa tras un IPC que muestra que está incompleta es parte del proceso normal, no reproceso. Repetir una reacción con material sin reaccionar sí lo sería (14.22).",
    },
  ],
};
